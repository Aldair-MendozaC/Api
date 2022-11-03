import { request, response, Router } from "express";
import { methods as direcController } from "../controllers/direccion.controller";

const routerD = Router();

routerD.get("/", direcController.getDirecciones);
routerD.get("/:idUsuario", direcController.getDireccion);
routerD.post("/", direcController.addDireccion);
routerD.put("/:idProducto", direcController.updateDireccion);
routerD.delete("/:idProducto", direcController.deleteDireccion);



export default routerD;