import {getConnection} from "../database/database";

//Devuelve todos las direcciones
const getDirecciones = async (req, resp) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("select * from direccion");
        resp.json(result);
    } catch (error) {
        resp.status(500);
        resp.send(error.message);
    }
};

//Devuelve el usuario según el parámetro
const getDireccion = async (req, resp) => {
    try {
        console.log("este es mi con: ",req.params);
        const {idDireccion} = req.params;
        const connection = await getConnection();
        const result = await connection.query("select * from direccion where idDireccion = ?", idDireccion);
        resp.json(result);
    } catch (error) {
        resp.status(500);
        resp.send(error.message);
    }
};

const addDireccion = async (req, resp) => {
    try {
        const {Nombres, ApellidoP, ApellidoM} = req.body;

        if(Nombres === undefined || ApellidoP === undefined || ApellidoM === undefined){
            resp.status(400).json({message: "Mala petición. favor rellena todos los campos"});

        }
        
        const direccion = {
            Nombres, ApellidoP, ApellidoM
        };

        const connection = await getConnection();
        await connection.query("insert into direccion set ?", direccion);
        resp.json({message: "Usuario Agregado"})
        
    } catch (error) {
        resp.status(500);
        resp.send(error.message);
    }
};

const updateDireccion = async (req, resp) => {
    try {
        console.log(req.params);
        const {idDireccion} = req.params;
        const {Nombres, ApellidoP, ApellidoM} = req.body;

        if (Nombres === undefined || ApellidoP === undefined || ApellidoM === undefined) {
            resp.status(400).json({ message: "Bad Request. Please fill all field." });
        }

        const usuario = {Nombres, ApellidoP, ApellidoM};
        const connection = await getConnection();
        const result = await connection.query("UPDATE usuario SET ? WHERE idUsuario = ?", [usuario, idDireccion]);
        
        resp.json(result);
    } catch (error) {
        resp.status(500);
        resp.send(error.message);
    }
};

const deleteDireccion = async (req, resp) => {
    try {
        console.log(req.params);
        const {idDireccion} = req.params;
        const connection = await getConnection();
        const result = await connection.query("delete from direccion where idDireccion = ?", idDireccion);
        resp.json(result);
    } catch (error) {
        resp.status(500);
        resp.send(error.message);
    }
};

export const methods = {
    getDirecciones,
    getDireccion,
    addDireccion,
    updateDireccion,
    deleteDireccion
};