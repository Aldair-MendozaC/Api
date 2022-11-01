import { request, response, Router } from "express";
import { methods as productController } from "../controllers/product.controller";

const router = Router();

router.get("/", productController.getProducts);
router.get("/:idProducto", productController.getProduct)
router.post("/", productController.addProduct);
router.put("/:idProducto", productController.updateProduct);
router.delete("/:idProducto", productController.deleteProduct)

export default router;