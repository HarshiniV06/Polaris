# Polaris — GitHub Team Intelligence Dashboard

A full-stack GitHub repository intelligence platform that helps student teams monitor project health, identify collaboration risks, evaluate contribution patterns, and stay demo-ready throughout hackathons, internships, and academic projects.

Polaris combines GitHub analytics, team collaboration metrics, AI-generated insights, and readiness scoring into a unified dashboard that transforms repository activity into actionable team intelligence.

---

# Overview

Polaris provides an end-to-end workflow for analyzing GitHub repositories and visualizing team productivity through a centralized dashboard.

The platform integrates GitHub OAuth authentication, repository analytics, contribution intelligence, team health monitoring, and AI-powered standup generation to help teams track progress and detect project risks before deadlines.

Core outcomes:

* Centralized visibility into repository and contributor activity
* Early detection of collaboration bottlenecks and inactive contributors
* Demo Readiness scoring for project evaluations and hackathons
* AI-generated standups and repository summaries
* Public repository analysis without requiring authentication
* Real-time repository intelligence through GitHub APIs

---

# Problem

Student teams often struggle to understand project health from raw GitHub activity.

Common challenges include:

* Uneven contribution distribution among team members
* Lack of visibility into repository momentum
* Difficulty identifying collaboration risks before demonstrations
* No standardized way to measure project readiness
* Time-consuming manual standup and progress reporting

GitHub provides repository data, but extracting actionable insights from commits, pull requests, and contributor activity requires significant manual effort.

---

# Solution

Polaris converts GitHub repository activity into meaningful team intelligence through automated analysis and visualization.

The platform workflow:

1. GitHub Authentication — Secure OAuth login for repository access
2. Repository Selection — Users choose repositories to analyze
3. Data Collection — Fetch commits, contributors, pull requests, and repository metadata
4. Analytics Engine — Compute collaboration, health, and readiness metrics
5. AI Processing — Generate summaries and standup reports (optional)
6. Dashboard Visualization — Present insights through interactive charts and cards

---

# Key Features

### GitHub OAuth Authentication

Secure login using GitHub OAuth to access repository data and contributor information.

### Repository Analysis

Analyze repositories directly from authenticated accounts or through a public analysis endpoint.

### Team Health Monitoring

Track contributor engagement, activity trends, and team collaboration patterns.

### Contribution Intelligence

Visualize contribution distribution and identify potential collaboration imbalances.

### Demo Readiness Scoring

Generate readiness metrics that help teams prepare for presentations, evaluations, and hackathons.

### AI-Powered Insights

Leverage Gemini models to generate:

* Repository summaries
* Daily standups
* Progress insights
* Team updates

### GitHub Webhook Verification

Secure webhook endpoints with signature verification support.

---

# Architecture

GitHub Repository
|
v
GitHub OAuth Authentication
|
v
Repository Selection
|
v
GitHub REST API
|
v
Repository Analytics Engine
|
+------------------+------------------+
|                  |                  |
v                  v                  v
Team Health       Contribution Analysis   Readiness Scoring
|                  |                  |
+------------------+------------------+
|
v
AI Insight Generation
(Gemini Optional)
|
v
Interactive Dashboard
|
v
Actionable Insights

---

# Core Metrics

Polaris evaluates repositories using multiple dimensions:

| Metric               | Purpose                                         |
| -------------------- | ----------------------------------------------- |
| Team Health          | Measures contributor engagement and consistency |
| Contribution Balance | Detects uneven work distribution                |
| Repository Activity  | Tracks commits and project momentum             |
| Alert Detection      | Identifies potential collaboration risks        |
| Demo Readiness       | Estimates project presentation readiness        |
| AI Summaries         | Generates concise project insights              |

---

# Tech Stack

| Component          | Tool / Library           |
| ------------------ | ------------------------ |
| Frontend           | React 18                 |
| Build Tool         | Vite 5                   |
| Backend            | Node.js                  |
| API Framework      | Express 5                |
| Authentication     | GitHub OAuth + JWT       |
| Repository Data    | GitHub REST API          |
| AI Services        | Gemini SDK               |
| Data Visualization | Recharts                 |
| Styling            | Custom CSS Design System |

---

# Project Structure

```text
Webathon/
├── backend/
│   ├── server.js
│   ├── Routes/
│   │   ├── authRoutes.js
│   │   └── analyze.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   └── services/
│
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── AnalyzePage.jsx
│   │   ├── Router.jsx
│   │   ├── pages/
│   │   └── components/
│   └── package.json
│
└── README.md
```

---

# Key Design Decisions

### GitHub-Centric Architecture

Rather than requiring users to manually upload project data, Polaris directly integrates with GitHub repositories to provide real-time insights.

### Public Analysis Endpoint

Users can quickly analyze repositories without authentication through the public `/analyze` workflow.

### Modular Analytics Engine

Repository metrics are computed independently, enabling easy extension of new scoring systems and health indicators.

### AI as an Enhancement Layer

AI-generated summaries and standups are optional and do not affect the core analytics pipeline, ensuring functionality even without external AI services.

### JWT-Based Authentication

Maintains secure session management after GitHub OAuth authentication.

---

# Getting Started

## Prerequisites

* Node.js 18+
* npm 9+
* GitHub OAuth Application
* Gemini API Key (optional)

---

## Installation

```bash
git clone <repository-url>
cd Webathon
```

### Backend Setup

```bash
cd backend
npm install
npm start
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

# Environment Variables

Backend requires:

```env
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=
JWT_SECRET=
GEMINI_API_KEY=
```

---

# Available Workflows

### Authenticated Repository Analysis

1. Login via GitHub OAuth
2. Select repository
3. Generate analytics dashboard
4. Review health, readiness, and contribution metrics

### Public Repository Analysis

1. Open `/analyze`
2. Enter repository details
3. Generate repository intelligence report

---

# Future Work

Potential enhancements include:

* Multi-repository portfolio analytics
* Predictive project success scoring
* Contributor performance forecasting
* Real-time collaboration recommendations
* Team productivity benchmarking
* Slack and Discord integrations
* Advanced AI coaching for project management

---

# Limitations

* Depends on GitHub repository data availability
* AI-generated insights require Gemini configuration
* Metrics are repository-centric and may not capture all offline collaboration activities
* Readiness scores are heuristic-based and should be interpreted as guidance rather than absolute evaluation

---

# Conclusion

Polaris transforms GitHub activity into actionable team intelligence, enabling student teams and project groups to monitor collaboration health, track repository momentum, and prepare effectively for demos, hackathons, and project evaluations.

By combining repository analytics, AI-powered insights, and intuitive visualizations, Polaris helps teams move from raw GitHub data to informed decision-making.
