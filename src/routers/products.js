import { Router } from "express";
import listProducts from "../controllers/products/listProducts.js";

const router = Router("/products");

router.get("/", listProducts);

export { router as productsRouter };
