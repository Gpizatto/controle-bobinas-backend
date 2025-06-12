const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bobinaRoutes = require("./routes/bobinaRoutes");
const historicoRoutes = require("./routes/historicoRoutes");

require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/bobinas", bobinaRoutes);
app.use("/api/historico", historicoRoutes);

module.exports = app;