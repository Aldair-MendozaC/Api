import { request, response, Router } from "express";
import { methods as totalController } from "../controllers/totalc.controller";

const routerT = Router();

routerT.get("/", totalController.getTotales);
routerT.get("/:idTotalDeCompra", totalController.getTotal);
routerT.post("/", totalController.addTotal);
routerT.put("/:idTotalDeCompra", totalController.updateTotal);
routerT.delete("/:idTotalDeCompra", totalController.deleteTotal);


export default routerT;