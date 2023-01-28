import { Router } from "express";
import indexProducts from "../controllers/products/index.js";
import validateSchema from "../middlewares/validateSchema.js";

const router = Router("/products");

router.get("/", validateSchema(indexProducts), indexProducts);

export { router as productsRouter };
