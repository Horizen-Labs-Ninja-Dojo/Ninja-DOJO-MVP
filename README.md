# 🥷 Web3 Ninja: The Future of Ninja Metaverses

Welcome to **Web3 Ninja**, an ambitious game studio project that fuses AAA-level ninja gameplay with cutting-edge Web3 technology. This monorepo includes both the **frontend (React + Vite + TypeScript)** and **backend (Node.js + Express)** services powering the Web3 Ninja experience.

---

## 💻 Getting Started

```bash
# Clone the repo
git clone https://github.com/your-org/web3-ninja.git
cd web3-ninja

# Install dependencies
npm install

# Run client + server in dev mode
npm run dev
```

Make sure to create a `.env` file with necessary environment variables (`PORT`, `MONGO_URI`, `SENDGRID_API_KEY`, etc.)

---

## 🛠️ Available Scripts

| Command            | Description                                      |
|--------------------|--------------------------------------------------|
| `npm run dev`      | Runs frontend + backend concurrently             |
| `npm run build`    | Builds the production frontend using Vite        |
| `npm run preview`  | Previews the production build                    |
| `npm run lint`     | Lints the codebase using ESLint                  |

---

## 🌍 Project Structure

```
/frontend           → React app with Vite & Tailwind
/backend            → Node.js + Express backend
/public             → Static assets
/scripts            → Utilities and scripts
.env                → Environment variables
package.json        → Project configuration
```
