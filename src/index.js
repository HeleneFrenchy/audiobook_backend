import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import authRouter from "./routes/auth-router.js";
import bookRouter from "./routes/book-router.js";
import userRouter from "./routes/user-router.js";


import cors from "cors";
import "dotenv/config";

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.use("/auth", authRouter);
app.use("/books", bookRouter);
app.use("/users", userRouter);




app.listen(3001, async () => {
  console.log(`App started on port 3001`);
  await mongoose.connect(process.env.MONGODB_URI);
  console.log("Database connected");
});
