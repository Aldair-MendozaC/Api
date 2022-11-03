import { request, response, Router } from "express";
import { methods as ordenController } from "../controllers/ordencompra.controller";

const routerO = Router();

routerO.get("/", ordenController.getOrdenCompra);
routerO.post("/", ordenController.addOrdenCompra);



export default routerO;