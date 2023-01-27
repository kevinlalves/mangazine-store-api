import { Router } from "express";
import createUser from "../controllers/users/create.js";
import validateSchema from "../middlewares/validateSchema.js";
import createUserSchema from "../request_schemas/users/create.js";

const router = Router("/users");

router.post("/", validateSchema(createUserSchema), createUser);

export { router as usersRouter };
