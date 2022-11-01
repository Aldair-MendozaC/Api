import {getConnection} from "../database/database";

//Devuelve todos los usuarios
const getUsers = async (req, resp) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("select * from usuario");
        resp.json(result);
    } catch (error) {
        resp.status(500);
        resp.send(error.message);
    }
};

//Devuelve el cliente segun el parametro
const getUser = async (req, resp) => {
    try {
        console.log("este es mi con: ",req.params);
        const {idUsuario} = req.params;
        const connection = await getConnection();
        const result = await connection.query("select * from usuario where idUsuario = ?", idUsuario);
        resp.json(result);
    } catch (error) {
        resp.status(500);
        resp.send(error.message);
    }
};

const addUser = async (req, resp) => {
    try {
        const {Nombre, ApellidoMaterno, ApellidoPaterno, NumeroCelular, Email, Password} = req.body;

        if(Titulo === undefined || Precio === undefined){
            resp.status(400).json({message: "Mala petición. favor rellena todos los campos"});

        }
        const TipoUsuario_idTipoUsuario = 2;
        const usuario = {
            Nombre, ApellidoMaterno, ApellidoPaterno, NumeroCelular, Email, Password, TipoUsuario_idTipoUsuario
        };

        const connection = await getConnection();
        await connection.query("insert into cliente set ?", usuario);
        resp.json({message: "Producto Agregado"})
        
    } catch (error) {
        resp.status(500);
        resp.send(error.message);
    }
};

const updateUser = async (req, resp) => {
    try {
        console.log(req.params);
        const {idProducto} = req.params;
        const {Titulo, Precio} = req.body;

        if (Titulo === undefined || Precio === undefined) {
            resp.status(400).json({ message: "Bad Request. Please fill all field." });
        }

        const producto = {Titulo, Precio};
        const connection = await getConnection();
        const result = await connection.query("UPDATE producto SET ? WHERE idProducto = ?", [producto, idProducto]);
        console.log(idProducto);
        
        resp.json(result);
    } catch (error) {
        resp.status(500);
        resp.send(error.message);
    }
};

const deleteUser = async (req, resp) => {
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
    getUsers,
    getUser,
    addUser,
    updateUser,
    deleteUser
};