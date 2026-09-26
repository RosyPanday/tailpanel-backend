import { Router } from "express";
import { InvoiceController } from "../controllers/invoiceController.js";

const invoiceRoutes = Router();

invoiceRoutes.post(
  "/add-invoice",
  InvoiceController.addInvoice,
);

export default invoiceRoutes;