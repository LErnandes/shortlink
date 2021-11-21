require('dotenv').config();
const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");

const swaggerFile = require("./swagger_output.json");
const decode = require("./routes/decode");
const encode = require("./routes/encode");

const InitiateMongoServer = require("./config/db");

InitiateMongoServer();

const app = express();

const PORT = process.env.PORT || 4000;

app.use(cors());

app.use(express.json());

app.use(express.static("dist"));

app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.get("/", (req, res) => {
  res.json({ message: "API Working" });
});

app.use("/decode", decode);
app.use("/encode", encode);

app.listen(PORT, (req, res) => {
  console.log(`Server Started at PORT ${PORT}`);
});
