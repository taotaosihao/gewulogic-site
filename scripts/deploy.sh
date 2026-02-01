#!/usr/bin/env bash
set -euo pipefail

REPO_SSH_URL=${REPO_SSH_URL:-git@github.com:taotaosihao/gewulogic-site.git}
DEPLOY_DIR=${DEPLOY_DIR:-/srv/gewulogic-site}
BRANCH=${BRANCH:-main}

echo "Deploying $REPO_SSH_URL#$BRANCH to $DEPLOY_DIR"

mkdir -p "$(dirname "$DEPLOY_DIR")"

if [ ! -d "$DEPLOY_DIR/.git" ]; then
  echo "Cloning repo..."
  git clone "$REPO_SSH_URL" "$DEPLOY_DIR"
fi

cd "$DEPLOY_DIR"

echo "Fetching latest..."
git fetch origin "$BRANCH"
git reset --hard "origin/$BRANCH"

echo "Ensuring traefik-public network exists..."
docker network inspect traefik-public >/dev/null 2>&1 || docker network create traefik-public

echo "Building & starting containers..."
docker compose up -d --build

echo "Done. Containers:"
docker compose ps
