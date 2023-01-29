import { Router } from "express";
import createProduct from "../controllers/products/create.js";
import indexProducts from "../controllers/products/index.js";
import validateSchema from "../middlewares/validateSchema.js";
import createProductSchema from "../request_schemas/products/create.js";
import indexProductsSchema from "../request_schemas/products/index.js";

const router = Router("/products");

router.get("/", validateSchema(indexProductsSchema), indexProducts);
router.post("/", validateSchema(createProductSchema), createProduct);

export { router as productsRouter };
