import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import routes from "./routeManager/index.js";
import "./config/db.js";
import errorHandler from "./middleware/errorHandler.js";

dotenv.config();

const app = express();

// ✅ CORS (allow all for now)
app.use(cors());

// ✅ JSON parser
app.use(express.json());

// ✅ Static folder
app.use("/uploads", express.static(path.resolve("uploads")));

// ✅ Routes
app.use("/", routes);

// ✅ Error handler (routes नंतर, listen आधी)
app.use(errorHandler);

// ✅ Port
const PORT = process.env.PORT || 5001;

// ✅ Server start
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});