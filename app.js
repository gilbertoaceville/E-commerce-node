require("dotenv").config();
const express = require("express");

const swaggerUI = require("swagger-ui-express");
const YAML = require("yamljs");

const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const connectDb = require("./config/db");
const dataRoutes = require("./routes/dataRoutes");

const swaggerJSDocs = YAML.load("./api.yaml");
const app = express();
app.use(express.json());
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerJSDocs));

app.use(cors());
app.use(morgan("tiny"));
app.use(helmet());

// Routes
app.use("/api/products", dataRoutes);

// localhost
const port = process.env.PORT || 9000;

const start = async () => {
  try {
    await connectDb(process.env.MONGO_URL);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
