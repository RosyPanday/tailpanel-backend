import type { NextFunction, Request, Response } from "express";

export class ProductController {
  public static addProduct = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {};
}
