# Deploying the backend to Render

1. Create a new Web Service on Render.
2. Connect your GitHub repo and select the `backend` directory as the Root Directory.
3. Build Command: `npm install`
4. Start Command: `npm start`
5. Set environment variables in Render dashboard:
   - `GITHUB_TOKEN`
   - `GITHUB_CLIENT_ID`
   - `GITHUB_CLIENT_SECRET`
   - `JWT_SECRET`
   - `GITHUB_WEBHOOK_SECRET`
   - `GEMINI_API_KEY` (if used)
   - `FRONTEND_URL` (set to your Vercel frontend URL)
6. Optional: Configure health checks and auto deploy from main branch.
