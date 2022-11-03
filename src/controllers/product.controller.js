import {getConnection} from "../database/database"

//Consulta todos los productos de la base de datos
const getProducts = async (req, resp) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("select idProducto, Modelo, Descripcion, Precio, Cantidad from producto");
        resp.json(result);
    } catch (error) {
        resp.status(500);
        resp.send(error.message);
    }
};
 
//Devuelve resultado por parametro 
const getProduct = async (req, resp) => {
    try {
        const {idProducto} = req.params;
        const connection = await getConnection();
        const result = await connection.query("select idProducto, Modelo, Descripcion, Precio, Cantidad from producto where idProducto = ?", idProducto);
        resp.json(result);
    } catch (error) {
        resp.status(500);
        resp.send(error.message);
    }
};

const addProduct = async (req, resp) => {
    try {
        const {Modelo, Descripcion, Precio, Cantidad, Fk_idMarca, FK_idTallas} = req.body;

        if(Modelo === undefined || Descripcion === undefined || Precio === undefined || Cantidad === undefined){
            resp.status(400).json({message: "Mala petición. favor rellena todos los campos"});

        }
    
        const producto = {
            Modelo, Descripcion, Precio, Cantidad, Fk_idMarca, FK_idTallas
        };

        const connection = await getConnection();
        await connection.query("insert into producto set ?", producto);
        resp.json({message: "Producto Agregado"})
        
    } catch (error) {
        resp.status(500);
        resp.send(error.message);
    }
};

const updateProduct = async (req, resp) => {
    try {
        console.log(req.params);
        const {idProducto} = req.params;
        const {Modelo, Descripcion, Precio, Cantidad} = req.body;

        if (Titulo === undefined || Precio === undefined) {
            resp.status(400).json({ message: "Bad Request. Please fill all field." });
        }

        const producto = {Modelo, Descripcion, Precio, Cantidad};
        const connection = await getConnection();
        const result = await connection.query("UPDATE producto SET ? WHERE idProducto = ?", [producto, idProducto]);
        console.log(idProducto);
        
        resp.json(result);
    } catch (error) {
        resp.status(500);
        resp.send(error.message);
    }
};

const deleteProduct = async (req, resp) => {
    try {
        console.log(req.params);
        const {idProducto} = req.params;
        const connection = await getConnection();
        const result = await connection.query("delete from Producto where idProducto = ?", idProducto);
        resp.json(result);
    } catch (error) {
        resp.status(500);
        resp.send(error.message);
    }
};

export const methods = {
    getProducts,
    getProduct, 
    addProduct,
    updateProduct,
    deleteProduct
};