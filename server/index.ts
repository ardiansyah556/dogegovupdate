import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// When the server runs, __dirname will be the `dist` folder.
// Vite also places its output in the `dist` folder.
// So, the `dist` folder itself is the correct static path.
const staticPath = __dirname;

app.use(express.static(staticPath));

app.get("*", (_req, res) => {
  res.sendFile(path.join(staticPath, "index.html"));
});

export default app;
