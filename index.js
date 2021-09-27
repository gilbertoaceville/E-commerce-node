require("dotenv").config();
const express = require("express");

const swaggerUI = require("swagger-ui-express");
const YAML = require("yamljs");


const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const connectDb = require("./config/db");
const dataRoutes = require("./routes/dataRoutes");

// database
connectDb();


const swaggerJSDocs = YAML.load("./api.yaml");
const app = express();
app.use(express.json());
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerJSDocs));
// app.use(express.urlencoded({ extended: false }));

app.use(cors());
app.use(morgan());
app.use(helmet());

// Routes
app.use("/api/products", dataRoutes);

// localhost
const PORT = process.env.PORT || 9000;

app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));
