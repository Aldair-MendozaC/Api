import { request, response, Router } from "express";
import { methods as regController } from "../controllers/registro.controller";

const routerRe = Router();


routerRe.post("/", regController.addRegistro);



export default routerRe;