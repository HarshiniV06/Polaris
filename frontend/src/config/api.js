const BACKEND_URL = import.meta.env.VITE_BACKEND_URL?.replace(/\/$/, "") || "";

export const API_BASE = BACKEND_URL || (import.meta.env.DEV ? "http://localhost:5000" : "");

export const isBackendConfigured = Boolean(API_BASE);
