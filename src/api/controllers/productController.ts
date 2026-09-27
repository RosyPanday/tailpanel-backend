import type {
  fileInterface,
  ProductInterface,
} from "#src/interfaces/productInterface.js";
import { ProductService } from "#src/services/productService.js";
import type { NextFunction, Request, Response } from "express";

export class ProductController {
  public static addProduct = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const files = (req.files as unknown as fileInterface) || undefined;
      if (!files || !files.image?.[0]) {
        throw new Error(
          "Missing required files. Please upload the image of the product",
        );
      }
      const imageFile = files.image?.[0];
      const {
        name,
        sku,
        category,
        description,
        price,
        quantity,
        status,
        supplier,
      } = req.body;

      await new ProductService().addProduct({
        name,
        sku,
        category,
        description,
        price,
        quantity,
        status,
        image: imageFile.path,
        supplier,
      });

      res.status(200).json({
        message: "Product successfully updated",
      });
    } catch (error) {
      next(error);
    }
  };

  public static getProducts = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    const products = await new ProductService().getProducts();
    res.status(200).json({
      message: " Products fetched successfully",
      products,
    });
  };
}