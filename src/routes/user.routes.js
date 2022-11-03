import { request, response, Router } from "express";
import { methods as userController } from "../controllers/user.controller";

const routerU = Router();

routerU.get("/", userController.getUsers);
routerU.get("/:idUsuario", userController.getUser);
routerU.post("/", userController.addUser);
routerU.put("/:idProducto", userController.updateUser);
routerU.delete("/:idProducto", userController.deleteUser);



export default routerU;