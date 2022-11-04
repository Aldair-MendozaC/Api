import { request, response, Router } from "express";
import { methods as tallaController } from "../controllers/tallas.controller";

const routerTA = Router();

routerTA.get("/", tallaController.getTallas);
routerTA.get("/:idUsuario", tallaController.getTalla);
routerTA.post("/", tallaController.addTalla);
routerTA.put("/:idProducto", tallaController.updateTalla);
routerTA.delete("/:idProducto", tallaController.deleteTalla);



export default routerTA;