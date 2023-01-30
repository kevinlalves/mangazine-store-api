import { Router } from "express";
import createCheckout from "../controllers/checkout/create.js";
import authenticate from "../middlewares/authenticate.js";
import validateSchema from "../middlewares/validateSchema.js";
import createCheckoutSchema from "../request_schemas/checkout/create.js";

const router = Router("/checkout");

router.use(authenticate);
router.post("/", validateSchema(createCheckoutSchema), createCheckout);

export { router as checkoutRouter };
