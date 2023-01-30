import { Router } from "express";
import createOrder from "../controllers/orders/create.js";
import authenticate from "../middlewares/authenticate.js";
import validateSchema from "../middlewares/validateSchema.js";
import createOrderSchema from "../request_schemas/orders/create.js";


const router = Router("/checkout");

router.post("/", authenticate, validateSchema(createOrderSchema), createOrder);

export { router as ordersRouter };
