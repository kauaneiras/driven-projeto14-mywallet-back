

import { Router } from "express";
import SignUpAuthMiddleware from "../Middleware/SignUpAuthMiddleware.js";
import  SignUpController  from "../Controllers/SignUpController.js";

const SignUpRoutes = Router();

SignUpRoutes.post('/sign-up', SignUpAuthMiddleware, SignUpController);

export default SignUpRoutes;