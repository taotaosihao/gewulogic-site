# 格物官网（交付服务）

东莞格物数衍科技有限公司（简称：格物）统一官网，面向交付服务的方案介绍与文档入口。

## 技术栈
- Astro（静态站点）
- Tailwind CSS（商务蓝色系）
- Docker + Nginx（轻量部署）

## 本地开发
```bash
npm install
npm run dev
```

## 构建
```bash
npm run build
npm run preview
```

## Docker 部署（推荐）
```bash
docker compose up -d --build
# 默认端口 http://localhost:8080
```

> 上线到主机 iot-gewulogic 时：将本目录推送到 GitHub private 仓库后，在主机上拉取并执行 `docker compose up -d --build`。

## TODO
- 替换 logo 占位符为正式 Logo（SVG/PNG）
- 补充 /products/hive、/products/gearjob 独立产品页
- 补充 /docs 文档入口（从 hive/gearjob 现有文档抽取）
- 配置域名与反向代理（如已有 Traefik/Nginx）
