require("dotenv").config();

const products = require("./data/products");
const database = require("./config/db");
const productModel = require("./models/product");

database();

const dataFromCluster = async () => {
  try {
    await productModel.deleteMany({});

    await productModel.insertMany(products);

    console.log("Data imported");

    process.exit();
  } catch (error) {
    console.error("Data cannot be imported", error);
    process.exit(1);
  }
};

dataFromCluster();
