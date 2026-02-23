# Polaris — GitHub Team Intelligence Dashboard

Polaris helps student teams track repository momentum, detect collaboration risks early, and stay demo-ready.

## Overview

This project has:
- **Frontend**: React + Vite dashboard UI
- **Backend**: Express API for GitHub OAuth, repository analysis, and webhook verification
- **AI Services**: Gemini-powered summaries/standup generation (when configured)

## Key Features

- GitHub OAuth login
- Repository picker for authenticated users
- Public analyze flow (`/analyze`) for quick repo checks
- Team health, readiness, alerts, and contribution intelligence views
- Demo Readiness scoring card
- Standup generation support
- GitHub webhook signature verification endpoint

## Tech Stack

### Frontend
- React 18
- Vite 5
- Recharts
- Custom CSS design system

### Backend
- Node.js + Express 5
- JWT authentication
- GitHub REST API (OAuth + repo data)
- Gemini SDK integration

## Project Structure

```text
Webathon/
├─ backend/
│  ├─ server.js
│  ├─ Routes/
│  │  ├─ authRoutes.js
│  │  └─ analyze.js
│  ├─ middleware/
│  │  └─ authMiddleware.js
│  └─ services/
└─ frontend/
   ├─ src/
   │  ├─ App.jsx
   │  ├─ AnalyzePage.jsx
   │  ├─ Router.jsx
   │  ├─ pages/
   │  └─ components/
   └─ package.json
```

## Prerequisites

- Node.js 18+
- npm 9+
- GitHub OAuth App (for login flow)
- Gemini API key (optional, only for AI features)

## Environment Variables (Backend)

Create `backend/.env`:

```env
PORT=5000
FRONTEND_URL=http://localhost:5173
JWT_SECRET=replace_with_strong_secret

# GitHub OAuth
GITHUB_CLIENT_ID=your_github_oauth_client_id
GITHUB_CLIENT_SECRET=your_github_oauth_client_secret

# GitHub API token (for service-level API calls)
GITHUB_TOKEN=your_github_personal_access_token

# Optional webhook security
GITHUB_WEBHOOK_SECRET=your_webhook_secret

# Optional AI / notifications
GEMINI_API_KEY=your_gemini_api_key
ALERT_EMAIL=admin@example.com
NODE_ENV=development
```

## Local Setup

### 1) Install dependencies

```bash
# backend
cd backend
npm install

# frontend
cd ../frontend
npm install
```

### 2) Start backend

```bash
cd backend
node server.js
```

Backend runs on `http://localhost:5000`.

### 3) Start frontend

```bash
cd frontend
npm run dev
```

Frontend runs on `http://localhost:5173`.

## Scripts

### Frontend (`frontend/package.json`)
- `npm run dev` — start Vite dev server
- `npm run build` — production build
- `npm run preview` — preview production build

### Backend (`backend/package.json`)
- No start script yet (run with `node server.js`)

## Main Routes

### Frontend routes
- `/` — landing page
- `/login` — sign-in page
- `/auth/success` — OAuth callback handler page
- `/repos` — repository selection (authenticated)
- `/analyze` — analysis dashboard
- `/standup` — standup page

### Backend API routes
- `GET /auth/github` — start GitHub OAuth
- `GET /auth/github/callback` — GitHub OAuth callback
- `GET /auth/repos` — fetch user repositories (JWT required)
- `POST /analyze` — analyze repository data
- `POST /webhooks/github` — GitHub webhook endpoint (HMAC verification)

## Notes for Deployment

- Frontend currently calls backend with hardcoded `http://localhost:5000` in some pages.
- Before production deploy, move API base URL to environment-based config.
- Keep `JWT_SECRET`, OAuth credentials, tokens, and API keys out of git.

## Suggested Next Improvements

- Add backend npm scripts (`start`, `dev` with nodemon)
- Centralize frontend API base URL in one config module
- Add request/error logging middleware
- Add basic tests for auth and analyze routes

## License

No license file is included yet. Add one before publishing publicly if needed.
