import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// __dirname will be `dist` at runtime.
// vite.config.ts places client assets in `dist/public`.
// Therefore, the correct path is `dist/public`.
const staticPath = path.join(__dirname, "public");

app.use(express.static(staticPath));

app.get("*", (_req, res) => {
  res.sendFile(path.join(staticPath, "index.html"));
});

export default app;
