# 部署到 iot-gewulogic（Traefik）

目标域名：`ww.gewulogic.com`

## 前置条件（在 iot-gewulogic 上）
1. 已有 Traefik，并且存在 external network：`traefik-public`
   ```bash
   docker network ls | grep traefik-public
   # 若不存在：docker network create traefik-public
   ```
2. Traefik 已配置 `websecure` entrypoint（通常是 443），并能自动签发/加载证书。

## 部署步骤
```bash
# 1) 拉取代码
cd /srv
git clone <YOUR_PRIVATE_GIT_URL> gewulogic-site
cd gewulogic-site

# 2) 启动
docker compose up -d --build

# 3) 查看状态
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
