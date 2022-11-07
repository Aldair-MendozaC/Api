import {getConnection} from "../database/database";

//Devuelve todos los usuarios
const getTotales = async (req, resp) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("select * from totaldecompra");
        resp.json(result);
    } catch (error) {
        resp.status(500);
        resp.send(error.message);
    }
};

//Devuelve el usuario según el parámetro
const getTotal = async (req, resp) => {
    try {
        const {idTotalDeCompra} = req.params;
        const connection = await getConnection();
        const result = await connection.query("select * from totaldecompra where idTotalDeCompra = ?", idTotalDeCompra);
        resp.json(result);
    } catch (error) {
        resp.status(500);
        resp.send(error.message);
    }
};

const addTotal = async (req, resp) => {
    try {
        const {TotalDeCompracol} = req.body;

        if(TotalDeCompracol === undefined){
            resp.status(400).json({message: "Mala petición. favor rellena todos los campos"});

        }
        
        const OrdenCompra_idOrdenCompra =1;
        const ordenC = {
            TotalDeCompracol, OrdenCompra_idOrdenCompra
        };

        const connection = await getConnection();
        await connection.query("insert into totaldecompra set ?", ordenC);
        resp.json({message: "Usuario Agregado"})
        
    } catch (error) {
        resp.status(500);
        resp.send(error.message);
    }
};

const updateTotal = async (req, resp) => {
    try {
        console.log(req.params);
        const {idTotalDeCompra} = req.params;
        const {TotalDeCompracol, OrdenCompra_idOrdenCompra} = req.body;

        if (TotalDeCompracol === undefined || OrdenCompra_idOrdenCompra === undefined) {
            resp.status(400).json({ message: "Bad Request. Please fill all field." });
        }

        const totalC = {TotalDeCompracol, OrdenCompra_idOrdenCompra};
        const connection = await getConnection();
        const result = await connection.query("UPDATE totaldecompra SET ? WHERE idTotalDeCompra = ?", [usuario, idTotalDeCompra]);
        
        resp.json(result);
    } catch (error) {
        resp.status(500);
        resp.send(error.message);
    }
};

const deleteTotal = async (req, resp) => {
    try {
        console.log(req.params);
        const {idTotalDeCompra} = req.params;
        const connection = await getConnection();
        const result = await connection.query("delete from totaldecompra where idTotalDeCompra = ?", idTotalDeCompra);
        resp.json(result);
    } catch (error) {
        resp.status(500);
        resp.send(error.message);
    }
};

export const methods = {
    getTotales,
    getTotal,
    addTotal,
    updateTotal,
    deleteTotal
};