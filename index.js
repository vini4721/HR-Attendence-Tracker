import express from "express";
import employeeRoutes from "./routes/employeeRoutes.js";
import logger from "./middleware/logger.js";

const app = express();
app.use(express.json());
app.use(logger);

app.use("/api/employees", employeeRoutes);

app.get("/", (req, res) => {
  res.send("Backend is Working");
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

