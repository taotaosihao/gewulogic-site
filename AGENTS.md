# AGENTS.md - Developer Workspace

This is the source of truth for all technical context, architectural decisions, and coding standards for the Developer Agent.

## 🛠 Coding Workflow (MANDATORY)

Writing code MUST use a specialized coding agent (Claude Code, Codex, etc.) for programmatic control and safety.

- **Primary Tool**: `claude` (Claude Code) or `codex` (Codex CLI).
- **In OpenClaw**: Use the `exec` (or `bash`) tool with `pty:true`.
- **Background Mode**: For non-trivial tasks, run in background and monitor with `process:log`.
- **Automatic Notification**: Always append a `wake` trigger to the agent's prompt to notify the gateway upon completion.

### Example Usage
```bash
bash pty:true workdir:~/project background:true command:"claude 'Implement the auth module. Notify me: openclaw gateway wake --text \"Auth module done\" --mode now'"
```

## 🏗 Project Context

### 1. Hive (IoT Management Platform)
- **Repo**: `/home/sihao/work/hive`
- **Stack**: FastAPI, React, EMQX, NATS, TDengine.
- **Role**: Multi-tenant IoT data acquisition and telemetry pipeline.

### 2. Gearjob (Business Extension)
- **Repo**: `/home/sihao/work/gearjob`
- **Stack**: Frappe / ERPNext.
- **Role**: MES (primary) and ERP (secondary) business logic, custom Frappe app.

### 3. Official Site (Current Project)
- **Repo**: `/home/sihao/work/gewulogic-site`
- **Stack**: Astro, Tailwind CSS, Docker, Nginx.
- **Deployment**: `ww.gewulogic.com` (via Traefik on `iot-gewulogic`).

## 📜 Coding Standards
- **Language**: Default to Chinese (zh) for comments/docs unless specified.
- **UI/UX**: "Business Blue" theme, lightweight, responsive.
- **Safety**: Never perform destructive operations on the host outside the designated workspace.
- **Version Control**: Atomic commits, push to private GitHub repo `taotaosihao/gewulogic-site`.

---
*Updated: 2026-02-01*
