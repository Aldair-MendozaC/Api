import {getConnection} from "../database/database";

//Devuelve el carrito de compras, por
const getCarrito = async (req, resp) => {
    try {
        const {idUsuario} = req.params;
        const connection = await getConnection();
        var sql = 'SELECT usuario.Nombre, ApellidoPaterno, ApellidoMaterno, producto.nombre Precio ' +
         'FROM Usuario ' +
         'INNER JOIN Producto ON Usuario.idUsuario = Producto.Usuario_idCliente ' +
         'where usuario.idUsuario = ?';
        const result = await connection.query(sql, idUsuario);
        resp.json(result);
        console.log(result);
    } catch (error) {
        resp.status(500);
        resp.send(error.message);
    }
};

const getCarrit = async (req, resp) => {
    try {
        console.log("este es mi con: ",req.params);
        const {idUsuario} = req.params;
        const connection = await getConnection();
        const result = await connection.query("select Nombre, Precio, Descripcion from Producto where idProducto = ?", idProducto);
        resp.json(result);
    } catch (error) {
        resp.status(500);
        resp.send(error.message);
    }
};

export const methods = {
    getCarrito,
    getCarrit
};