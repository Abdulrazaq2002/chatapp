import express from "express";
import { logOut, logIn, signUp } from "../controllers/auth.controller.js";

const routes = express.Router();

routes.post("/login", logIn);
routes.post("/logout", logOut);
routes.post("/signup", signUp);
routes.get("/signup", signUp);
export default routes;
