import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import authRouter from "./routes/auth-router.js";
import bookRouter from "./routes/book-router.js";
import userRouter from "./routes/user-router.js";
import helmet from "helmet";

import cors from "cors";
import "dotenv/config";

const app = express();
const port = process.env.PORT || 3333;

app.use(helmet());
app.use(bodyParser.json());
app.use(cors());

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.use("/auth", authRouter);
app.use("/books", bookRouter);
app.use("/users", userRouter);

app.listen(port, async () => {
  console.log(`App started on port ${port}`);
  await mongoose.connect(process.env.MONGODB_URI);
  console.log("Database connected");
});
