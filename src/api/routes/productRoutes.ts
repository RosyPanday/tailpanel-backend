import { Router } from "express";
import { ProductController } from "../controllers/productController.js";
import { UploadController } from "../controllers/uploadController.js";
import { uploadProductImages } from "#src/middleware/uploadProductImages.js";

const productRoutes = Router();

productRoutes.post(
  "/add-product",
  uploadProductImages,
  ProductController.addProduct,
);

export default productRoutes;