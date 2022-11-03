import { request, response, Router } from "express";
import { methods as extrasController } from "../controllers/extras.controllers";

const routerE = Router();

routerE.get("/", extrasController.getExtras);
routerE.get("/:idUsuario", extrasController.getExtra);
routerE.post("/", extrasController.addExtras);
routerE.put("/:idProducto", extrasController.updateExtras);
routerE.delete("/:idProducto", extrasController.deleteExtras);



export default routerE;