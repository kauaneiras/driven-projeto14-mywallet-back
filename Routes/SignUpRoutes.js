

import { Router } from "express";
import  SignUpController  from "../Controllers/SignUpController.js";

const SignUpRoutes = Router();

SignUpRoutes.post('/sign-up', SignUpController);

export default SignUpRoutes;