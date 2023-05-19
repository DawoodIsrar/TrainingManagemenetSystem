const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { readdirSync } = require("fs");
const morgan = require("morgan");
require("dotenv").config();

// Create Express app
const app = express();

// DB connection
mongoose
  .connect(process.env.DATABASE, { })
  .then(() => console.log("**DB CONNECTED**"))
  .catch((err) => console.log("DB CONNECTION ERR => ", err));

// Apply middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Routes
readdirSync("./routes").map((r) => app.use("/api", require(`./routes/${r}`)));

// Port
const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
