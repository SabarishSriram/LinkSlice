import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import connection from "./config/dbConfig.js";

const app = express();
dotenv.config();
connection();

app.get("/", (req, res) => {
  res.send(
    "Hello world how are you if this works that means thunderclient is working"
  );
});

const port = process.env.PORT || 3000;
try {
  app.listen(port, () => {
    console.log(`App is running on port ${port} ✨`);
  });
} catch (error) {
    console.log("Server Crashed ❌")
}
