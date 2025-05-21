import dotenv from "dotenv";
import express from "express";
import routes from "./routes";

dotenv.config();

const app = express();
const PORT = process.env.API_PORT || 3838;

// Middleware
app.use(express.json());

// Routes
app.use("/api/", routes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
