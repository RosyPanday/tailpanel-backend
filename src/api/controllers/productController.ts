import type { fileInterface } from "#src/interfaces/productInterface.js";
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
      if (!files || !files.productImage?.[0]) {
        throw new Error(
          "Missing required files. Please upload the image of the product",
        );
      }
      const imageFile = files.productImage?.[0];
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
        image:imageFile.path,
        supplier
      });

      res.status(200).json({
        message: "Product successfully updated",
      });
    } catch (error) {
      next(error);
    }
  };
}