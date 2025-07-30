# 🚀 dockerized-nodejs-app

A simple Node.js + Express application fully Dockerized using **Docker volumes** for live development and dependency isolation.

---

## 📦 Features

- Node.js with Express
- Dockerized using a custom `Dockerfile`
- Live reload via bind mount (`${PWD}:/app`)
- `node_modules` isolation with anonymous volume
- Exposes port `5000` to the host
