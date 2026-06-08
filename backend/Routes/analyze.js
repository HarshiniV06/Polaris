import express from "express";
import { analyzeRepo } from "../services/githubservice.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    if (!process.env.GITHUB_TOKEN) {
      return res.status(500).json({
        error: "GITHUB_TOKEN is not configured on the server. Add it in Render environment variables."
      });
    }

    const { repoUrl } = req.body;

    if (!repoUrl || !repoUrl.includes("github.com")) {
      return res.status(400).json({ error: "Please provide a valid GitHub repository URL." });
    }

    const result = await analyzeRepo(repoUrl);

    res.json(result);
  } catch (error) {
    console.error("Analyze error:", error.message);
    const message =
      error.response?.status === 404
        ? "Repository not found. Check the URL is correct and public."
        : error.response?.status === 401 || error.response?.status === 403
          ? "GitHub API access denied. Check GITHUB_TOKEN on Render has repo scope."
          : error.message || "Analysis failed";
    res.status(500).json({ error: message });
  }
});

export default router;