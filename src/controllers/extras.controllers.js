import {getConnection} from "../database/database";

//Devuelve todos los usuarios
const getExtras = async (req, resp) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("select * from extras");
        resp.json(result);
    } catch (error) {
        resp.status(500);
        resp.send(error.message);
    }
};

//Devuelve el usuario según el parámetro
const getExtra = async (req, resp) => {
    try {
        console.log("este es mi con: ",req.params);
        const {idExtras} = req.params;
        const connection = await getConnection();
        const result = await connection.query("select * from extras where idExtras = ?", idExtras);
        resp.json(result);
    } catch (error) {
        resp.status(500);
        resp.send(error.message);
    }
};

const addExtras = async (req, resp) => {
    try {
        const {Celular, Correo} = req.body;

        if(Celular === undefined || Correo === undefined){
            resp.status(400).json({message: "Mala petición. favor rellena todos los campos"});

        }
        const Fk_Usuario = 1;
        const exUsuario = {
            Celular, Correo, Fk_Usuario
        };

        const connection = await getConnection();
        await connection.query("insert into extras set ?", exUsuario);
        resp.json({message: "Datos Agregados"})
        
    } catch (error) {
        resp.status(500);
        resp.send(error.message);
    }
};

const updateExtras = async (req, resp) => {
    try {
        console.log(req.params);
        const {idExtras} = req.params;
        const {Celular, Correo} = req.body;

        if (Nombres === undefined || ApellidoP === undefined || ApellidoM === undefined) {
            resp.status(400).json({ message: "Bad Request. Please fill all field." });
        }

        const Extras = {Celular, Correo};
        const connection = await getConnection();
        const result = await connection.query("UPDATE extras SET ? WHERE idExtras = ?", [Extras, idExtras]);
        console.log(idExtras);
        
        resp.json(result);
    } catch (error) {
        resp.status(500);
        resp.send(error.message);
    }
};

const deleteExtras = async (req, resp) => {
    try {
        console.log(req.params);
        const {idExtras} = req.params;
        const connection = await getConnection();
        const result = await connection.query("delete from extras where idExtras = ?", idExtras);
        resp.json(result);
    } catch (error) {
        resp.status(500);
        resp.send(error.message);
    }
};

export const methods = {
    getExtras,
    getExtra,
    addExtras,
    updateExtras,
    deleteExtras
};