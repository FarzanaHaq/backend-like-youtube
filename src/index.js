import { app } from "./app.js";
import connectDB from "./db/index.js";
import dotenv from "dotenv";

dotenv.config({
  path: "./env",
});

//mongo connection
connectDB()
  .then(() => {
    //server start
    app.listen(process.env.PORT || 8000, () => {
      console.log(`server is running at port: ${process.env.PORT}`);
    });
    //error on server
    app.on("error", (error) => {
      console.log("ERROR:", error);
    });
  })
  .catch((err) => {
    console.log("mongodb connection failed", err);
  });












  
/*

import express from "express";
const app = express()

;(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    
    app.on("error", (error) => {
      console.log("ERROR:", error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`app is listening ${process.env.PORT}`);
    });

  } catch (error) {
    console.error("ERROR: ", error);
    throw err;
  }
})();
*/
