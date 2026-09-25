import type { fileInterface } from "#src/interfaces/productInterface.js";
import type { NextFunction, Request, Response } from "express";

export class UploadController {
  public static uploadProductImage = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const files = req.files as unknown as  fileInterface || undefined;
      if (!files || !files.productImage?.[0]) {
        throw new Error(
          "Missing required files. Please upload the image of the product",
        );
      }
      // await new UploadService().uploadTherapistDocumentsAndImage(
      //   therapistId
      // );
      // res.status(200).json({
      //   message:
      //     "Product Image successfully updated",
      // });
    } catch (error) {
      next(error);
    }
  };
}