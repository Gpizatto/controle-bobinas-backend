const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const bobinaRoutes = require("./routes/bobinaRoutes");
const historicoRoutes = require("./routes/historicoRoutes");

app.use("/api/bobinas", bobinaRoutes);
app.use("/api/historico", historicoRoutes);

module.exports = app;
