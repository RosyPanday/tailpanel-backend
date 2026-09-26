import { Router } from "express";
import productRoutes from "./productRoutes.js";
import invoiceRoutes from "./invoiceRoutes.js";

const routes = Router();

routes.use("/product", productRoutes);
routes.use("/invoice",invoiceRoutes);

export default routes;