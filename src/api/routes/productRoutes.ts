import { Router } from "express";
import { ProductController } from "../controllers/productController.js";
import { uploadProductImages } from "#src/middleware/uploadProductImages.js";

const productRoutes = Router();

productRoutes.post(
  "/add-product",
  uploadProductImages,
  ProductController.addProduct,
);

productRoutes.get(
  "/get-products",
  ProductController.getProducts,
);

export default productRoutes;