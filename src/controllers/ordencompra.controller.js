import {getConnection} from "../database/database";

//Devuelve el carrito de compras, por
const getOrdenCompra = async (req, resp) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("Select * from ordencompra");
        resp.json(result);
        console.log(result);
    } catch (error) {
        resp.status(500);
        resp.send(error.message);
    }
};

const addOrdenCompra = async (req, resp) => {
    try {
        const {Total, Unidades, Fecha} = req.body;
        //console.log("este es mi con: ",req.params);
        if(Total === undefined || Unidades === undefined || Fecha === undefined){
            resp.status(400).json({message: "Mala petición. favor rellena todos los campos"});

        }

        const FK_idUsuario = 1;
        const FK_idProdcuto = 2; 
        const FK_idTallas = 1;
        const orden = {
            FK_idUsuario, FK_idProdcuto, FK_idTallas, Total, Unidades, Fecha
        };

        const connection = await getConnection();
        await connection.query("insert into ordencompra set ?", orden);
        resp.json({message: "Orden Compra registrada"})
        console.log(Fecha)
    } catch (error) {
        resp.status(500);
        resp.send(error.message);
    }
};

export const methods = {
    getOrdenCompra,
    addOrdenCompra
};