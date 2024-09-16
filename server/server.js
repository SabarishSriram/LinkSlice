import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import connection from "./src/config/dbConfig.js";
import shortUrl from "./src/routes/shortUrl.js";
import { nanoid } from "nanoid";

const app = express();
dotenv.config();
connection();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", shortUrl);

const port = process.env.PORT || 3000;
try {
  app.listen(port, () => {
    console.log(`App is running on port ${port} ✨`);
  });
} catch (error) {
  console.log("Server Crashed ❌");
}
