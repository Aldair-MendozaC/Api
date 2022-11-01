import {getConnection} from "../database/database"

//Consulta todos los productos de la base de datos
const getProducts = async (req, resp) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("select idProducto, Nombre, Precio, Descripcion from producto");
        resp.json(result);
    } catch (error) {
        resp.status(500);
        resp.send(error.message);
    }
};
 
//Devuelve resultado por parametro 
const getProduct = async (req, resp) => {
    try {
        console.log("este es mi con: ",req.params);
        const {idProducto} = req.params;
        const connection = await getConnection();
        const result = await connection.query("select Nombre, Precio, Descripcion from Producto where idProducto = ?", idProducto);
        resp.json(result);
    } catch (error) {
        resp.status(500);
        resp.send(error.message);
    }
};

const addProduct = async (req, resp) => {
    try {
        const {Nombre, Precio, Descripcion} = req.body;

        if(Nombre === undefined || Precio === undefined  || Descripcion === undefined){
            resp.status(400).json({message: "Mala petición. favor rellena todos los campos"});

        }
        const Usuario_idCliente = 1;
        const producto = {
            Nombre, Precio, Usuario_idCliente, Descripcion
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
        const {Titulo, Precio} = req.body;

        if (Titulo === undefined || Precio === undefined) {
            resp.status(400).json({ message: "Bad Request. Please fill all field." });
        }

        const producto = {Titulo, Precio, Descripcion};
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