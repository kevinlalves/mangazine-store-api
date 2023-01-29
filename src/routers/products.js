import { Router } from "express";
import indexProducts from "../controllers/products/index.js";
import validateSchema from "../middlewares/validateSchema.js";
import indexProductsSchema from "../request_schemas/products/index.js";

const router = Router("/products");

router.get("/", validateSchema(indexProductsSchema), indexProducts);

export { router as productsRouter };
