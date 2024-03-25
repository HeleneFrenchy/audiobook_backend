import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import authRouter from "./routes/auth-router";
import "dotenv/config";

const app = express();


app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.use("/auth", authRouter);

app.listen(3000, async () => {
  console.log(`App started on port 3000`);
  await mongoose.connect(process.env.MONGODB_URI);
  console.log("Database connected");
});
