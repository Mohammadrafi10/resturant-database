const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

// logger middleware
const logger = require("./middlewares/logger");
// Connect to database
require("./config/db");
// user routes
const userRoutes = require("./routes/userRoutes");

// middleware for cors, json and logger
app.use(cors());
app.use(express.json());
app.use(logger());

// user routes
app.use("/api/users", userRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
