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

//Devuelve el usuario según el parámetro
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
        const {Nombres, ApellidoP, ApellidoM} = req.body;

        if(Nombres === undefined || ApellidoP === undefined || ApellidoM === undefined){
            resp.status(400).json({message: "Mala petición. favor rellena todos los campos"});

        }
        
        const usuario = {
            Nombres, ApellidoP, ApellidoM
        };

        const connection = await getConnection();
        await connection.query("insert into usuario set ?", usuario);
        resp.json({message: "Usuario Agregado"})
        
    } catch (error) {
        resp.status(500);
        resp.send(error.message);
    }
};

const updateUser = async (req, resp) => {
    try {
        console.log(req.params);
        const {idUsuario} = req.params;
        const {Nombres, ApellidoP, ApellidoM} = req.body;

        if (Nombres === undefined || ApellidoP === undefined || ApellidoM === undefined) {
            resp.status(400).json({ message: "Bad Request. Please fill all field." });
        }

        const usuario = {Nombres, ApellidoP, ApellidoM};
        const connection = await getConnection();
        const result = await connection.query("UPDATE usuario SET ? WHERE idUsuario = ?", [usuario, idUsuario]);
        console.log(idUsuario);
        
        resp.json(result);
    } catch (error) {
        resp.status(500);
        resp.send(error.message);
    }
};

const deleteUser = async (req, resp) => {
    try {
        console.log(req.params);
        const {idUsuario} = req.params;
        const connection = await getConnection();
        const result = await connection.query("delete from usuario where idUsuario = ?", idUsuario);
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