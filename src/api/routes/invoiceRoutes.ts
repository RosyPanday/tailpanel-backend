import { Router } from "express";
import { InvoiceController } from "../controllers/invoiceController.js";

const invoiceRoutes = Router();

invoiceRoutes.post("/add-invoice", InvoiceController.addInvoice);

invoiceRoutes.get("/get-invoices", InvoiceController.getInvoices);
export default invoiceRoutes;