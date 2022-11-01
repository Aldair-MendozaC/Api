import Express from "express";
import morgan from "morgan";
//Rutas

import languajeR from "./routes/product.routes"
import userR from "./routes/user.routes"
import carritoR from "./routes/carrito.routes"

const app=Express();

//settings
app.set("port", 4000);

//middlewares
app.use(morgan("dev"));
app.use(Express.json());

//Rutas
app.use("/api/Products", languajeR);
app.use("/api/users", userR);
app.use("/api/carrito", carritoR);

export default app;