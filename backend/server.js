import path from "path";

import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

import Auth from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectingDB from "./db/connection.js";
import { app, server } from "./socket/socket.js";

// const app = express();
const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

dotenv.config();

//middlerware to convert string to json
app.use(express.json());
app.use(cookieParser());

server.listen(PORT, () => {
  connectingDB();
  console.log(`Port running on ${PORT}`);
});

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });
app.use("/api/auth", Auth);
app.use("/api/message", messageRoutes);
app.use("/api/users", userRoutes);

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

//Connecting Mongodb
// mongoose
//   .connect(process.env.MONGO_DB_URI)
//   .then(() => {
//     console.log("Connected..");
//   })
//   .catch((error) => {
//     console.log(error);
//   });
