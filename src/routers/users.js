import { Router } from "express";
import { updateCart } from "../controllers/users/update.js";
import authenticate from "../middlewares/authenticate.js";

const router = new Router("/users");

router.put("/cart/:productId", updateCart);

export { router as usersRouter };
