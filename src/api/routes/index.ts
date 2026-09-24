import { Router } from "express";

const routes = Router();

routes.use("/product", productRoutes);

export default routes;