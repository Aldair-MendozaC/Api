import {getConnection} from "../database/database";

//Devuelve el carrito de compras, por
const getOrdenCompra = async (req, resp) => {
    try {
        const {idOrdenCompra} = req.params;
        const connection = await getConnection();
        //var sql = 'SELECT usuario.Nombre, ApellidoPaterno, ApellidoMaterno, producto.nombre Precio ' +
         //'FROM Usuario ' +
         //'INNER JOIN Producto ON Usuario.idUsuario = Producto.Usuario_idCliente ' +
         //'where usuario.idUsuario = ?';
        const result = await connection.query("Select * from ordencompra where idOrdenCompra = ?", idOrdenCompra);
        resp.json(result);
        console.log(result);
    } catch (error) {
        resp.status(500);
        resp.send(error.message);
    }
};

const addOrdenCompra = async (req, resp) => {
    try {
        const {Modelo, Descripcion, Precio, Cantidad} = req.body;
        console.log("este es mi con: ",req.params);
        if(Modelo === undefined || Descripcion === undefined || Precio === undefined || Cantidad === undefined){
            resp.status(400).json({message: "Mala petición. favor rellena todos los campos"});

        }
        const connection = await getConnection();
        const result = await connection.query("select Nombre, Precio, Descripcion from Producto where idProducto = ?", idProducto);
        resp.json(result);
    } catch (error) {
        resp.status(500);
        resp.send(error.message);
    }
};

export const methods = {
    getOrdenCompra,
    addOrdenCompra
};