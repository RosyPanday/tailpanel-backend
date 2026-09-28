import { InvoiceService } from "#src/services/invoiceService.js";
import type { NextFunction, Request, Response } from "express";

export class InvoiceController {
  public static addInvoice = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const {
        customerName,
        email,
        address,
        location,
        phoneNumber,
        description,
        quantity,
        rate,
        notes,
        issuedDate,
        dueDate,
      } = req.body;

      await new InvoiceService().addInvoice({
        customerName,
        email,
        address: address || null,
        location: location || null,
        phoneNumber: phoneNumber || null,
        description,
        quantity,
        rate,
        notes: phoneNumber || null,
        issuedDate,
        dueDate,
      });

      res.status(201).json({
        message: "Invoice successfully created",
      });
    } catch (error) {
      next(error);
    }
  };


    public static getInvoices = async (
      req: Request,
      res: Response,
      next: NextFunction,
    ): Promise<void> => {
      const invoices = await new InvoiceService().getInvoices();
      res.status(200).json({
        message: "Invoices fetched successfully",
        invoices,
      });
    };
}