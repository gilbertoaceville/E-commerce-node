require("dotenv").config();
const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDb connected");
  } catch (error) {
    console.error("MongoDb connection FAILED");
    process.exit(1);
  }
};

module.exports = connectDb;
