import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Our build process puts the Vite output in `dist/public`.
// The server entry point is compiled to `dist/index.js`.
// So, the running server's __dirname will be the `dist` folder.
const staticPath = path.resolve(__dirname, "public");

app.use(express.static(staticPath));

// All other requests are handled by the client-side router in index.html.
app.get("*", (_req, res) => {
  res.sendFile(path.join(staticPath, "index.html"));
});

// Export the Express app for Vercel's serverless runtime.
export default app;
