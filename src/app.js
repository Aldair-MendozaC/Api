import Express from "express";
import morgan from "morgan";


//Rutas
import languajeR from "./routes/product.routes"
import userR from "./routes/user.routes"
import ordenR from "./routes/ordencompra.routes"
import extraR from "./routes/extras.routes"
import direR from "./routes/direccion.routes"
import totalR from "./routes/totalc.routes"


const cors = require('cors')
const app=Express();

//settings
app.set("port", 4000);

//middlewares
app.use(cors())
app.use(cors({
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));
app.use(morgan("dev"));
app.use(Express.json());

//Rutas
app.use("/api/products", languajeR);
app.use("/api/users", userR);
app.use("/api/carrito", ordenR);
app.use("/api/extras", extraR);
app.use("/api/direccion", direR);
app.use("/api/total", totalR);

export default app;