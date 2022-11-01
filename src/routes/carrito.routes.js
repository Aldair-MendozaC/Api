import { request, response, Router } from "express";
import { methods as carritoController } from "../controllers/carrito.controller";

const routerC = Router();

routerC.get("/:idUsuario", carritoController.getCarrito);


export default routerC;