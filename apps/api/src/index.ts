import dotenv from "dotenv";
import express, { Request, Response } from "express";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.API_PORT || 3838;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (_req: Request, res: Response) => {
  res.json({ message: "Welcome to the API" });
});

app.get("/health", (_req: Request, res: Response) => {
  res.json({ status: "healthy" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
