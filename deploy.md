# 部署到 iot-gewulogic（Traefik）

目标域名：`ww.gewulogic.com`

## 前置条件（在 iot-gewulogic 上）
1. 已有 Traefik，并且存在 external network：`traefik-public`
   ```bash
   docker network ls | grep traefik-public
   # 若不存在：docker network create traefik-public
   ```
2. Traefik 已配置 `websecure` entrypoint（通常是 443），并能自动签发/加载证书。

## 部署方式 A：GitHub Actions (GitHub-hosted) - 自动构建与部署

### 1) GitHub Secrets (已自动配置)
我已帮你通过 `gh` 命令在仓库中配置了以下密钥：
- `SSH_HOST`: `www.gewulogic.com`
- `SSH_USER`: `root`
- `SSH_PRIVATE_KEY`: 专为部署生成的 ED25519 私钥。

### 2) 工作流原理
每次 push 到 `main` 分支时：
1. **GitHub Runner**：执行 `npm run build` 生成静态文件 `dist/`。
2. **SCP**：将打包好的 `dist.tar.gz` 和 `docker-compose.yml` 发送到主机 `/srv/gewulogic-site`。
3. **SSH**：在主机上解压并运行 `docker compose up -d`。

### 3) 检查
- 确保主机已安装 Docker 和 Docker Compose。
- 访问：**https://ww.gewulogic.com**

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
