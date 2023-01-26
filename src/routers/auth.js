import validateSchema from "../middlewares/validateSchema.js";
import { Router } from "express";
import signInSchema from "../request_schemas/auth/signIn.js";
import signIn from "../controllers/auth/signIn.js";


const router = Router("/auth");

router.post("/sign-in", validateSchema(signInSchema), signIn);
