require('dotenv').config();
const swaggerAutogen = require("swagger-autogen")();

const outputFile = "./swagger_output.json";
const endpointsFiles = ["./index.js"];
const PORT = process.env.PORT || 4000;

const doc = {
  host: `localhost:${PORT}`,
  basePath: "/",
  schemes: ['http', 'https'],
  consumes: ['application/json'],
  produces: ['application/json'],
  tags: [
    {
      name: "Decode",
      description: "Endpoints",
      path: '/decode'
    },
    {
      name: "Encode",
      description: "Endpoints",
      path: '/encode'
    },
  ],
};

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  require("./index.js");
});
