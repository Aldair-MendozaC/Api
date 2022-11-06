import { request, response, Router } from "express";
import { methods as extrasController } from "../controllers/extras.controllers";

const routerE = Router();

routerE.get("/", extrasController.getExtras);
routerE.get("/:idExtras", extrasController.getExtra);
routerE.post("/", extrasController.addExtras);
routerE.put("/:idExtras", extrasController.updateExtras);
routerE.delete("/:idExtras", extrasController.deleteExtras);



export default routerE;