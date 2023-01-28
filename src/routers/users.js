import { Router } from "express";
import createUser from "../controllers/users/create.js";
import updateUser from "../controllers/users/update.js";
import authenticate from "../middlewares/authenticate.js";
import validateSchema from "../middlewares/validateSchema.js";
import createUserSchema from "../request_schemas/users/create.js";
import updateUserSchema from "../request_schemas/users/update.js";

const router = Router("/users");

router.post("/", validateSchema(createUserSchema), createUser);

router.use(authenticate)
router.put("/", validateSchema(updateUserSchema), updateUser);
export { router as usersRouter };
