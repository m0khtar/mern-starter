import mongoose from "mongoose";
import { app } from "./src/app";
import seedData from "./src/seeder/seed-data";
const dotenv = require("dotenv").config();

// variables
const port = process.env.PORT || 5000;

const start = async () => {
  console.log("Starting...");

  if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI must be defined");
  }

  try {
    mongoose.set("strictQuery", false);
    const conn = await mongoose.connect(
      process.env.MONGO_URI || "mongodb://127.0.0.1:27017/whatever"
    );
    console.log(`mongodb connected: ${conn.connection.host}`.cyan.underline);

    // seed data
    await seedData();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }

  app.listen(port, () => console.log(`server running on port ${port}`));
};

start();
