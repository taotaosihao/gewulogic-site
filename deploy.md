# 部署到 iot-gewulogic（Traefik）

目标域名：`ww.gewulogic.com`

## 前置条件（在 iot-gewulogic 上）
1. 已有 Traefik，并且存在 external network：`traefik-public`
   ```bash
   docker network ls | grep traefik-public
   # 若不存在：docker network create traefik-public
   ```
2. Traefik 已配置 `websecure` entrypoint（通常是 443），并能自动签发/加载证书。

## 部署方式 A：GitHub Actions (GitHub-hosted)

### 1) 配置 GitHub Secrets
在 GitHub 仓库 **Settings → Secrets and variables → Actions** 中添加以下密钥：
- `SSH_HOST`: `iot-gewulogic` 的 IP 地址或域名。
- `SSH_USER`: 登录用户名。
- `SSH_PRIVATE_KEY`: 对应的 SSH 私钥（用于免密登录）。

### 2) 配置 SSH 访问与 Git 权限
- 确保 `iot-gewulogic` 上的 `SSH_USER` 有权运行 `docker` 命令。
- 确保 `iot-gewulogic` 已经配置了访问此 Private 仓库的 **Deploy Key**（或 SSH 权限），以便能执行 `git clone/pull`。

### 3) 触发部署
- push 到 `main` 分支会自动触发。
- 流程：GitHub Runner 连接到主机 → `cd /srv/gewulogic-site` → `git pull` → `docker compose up -d --build`。

## 部署方式 B：手动部署（备用）
```bash
cd /srv
git clone <YOUR_PRIVATE_GIT_URL> gewulogic-site
cd gewulogic-site

# 确保 traefik-public 网络存在
docker network ls | grep traefik-public || docker network create traefik-public

docker compose up -d --build

docker compose ps
```

Traefik 会根据 docker-compose.yml 的 labels 自动发现服务并路由：
- Router: `gewulogic-site`
- Host rule: `ww.gewulogic.com`

## 常见问题
### 1) 访问 404 / 路由不生效
- 检查 Traefik dashboard 是否发现 router/service
- 检查容器是否加入 `traefik-public` 网络
- 确认 DNS `ww.gewulogic.com` 指向 iot-gewulogic

### 2) 证书问题
如果你的 Traefik 需要显式指定 certresolver：
- 打开 `docker-compose.yml` 中的：
  `traefik.http.routers.gewulogic-site.tls.certresolver=letsencrypt`
- 并确保 Traefik 端已配置对应 resolver 名称。

### 3) 本地端口直连调试
如需绕开 Traefik 临时验证，可在 compose 里打开 ports：
```yml
ports:
  - "8081:80"
```
然后用 `http://<host>:8081` 访问。
