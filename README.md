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

No license file is included yet. Add one before publishing publicly if needed.
