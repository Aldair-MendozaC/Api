import {getConnection} from "../database/database"

const getProducts = async (req, resp) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("insert into usuario set ?", objetoCliente);
        await connection.query("insert into Extras set ?", objetoExtras);
        resp.json(result);
    } catch (error) {
        resp.status(500);
        resp.send(error.message);
    }
};

const addRegistro = async (req, resp) => {
    try {
        const {nombres , ApellidoP, ApellidoM ,celular , correo} = req.body;
        if(nombres === undefined || ApellidoP === undefined || ApellidoM === undefined ||celular === undefined || correo === undefined){
            resp.status(400).json({message: "Mala peticion Datos de usuario no llegaron"});
        }else{
            const Fk_usuario = 1;
            const objetoCliente = {
                nombres,
                ApellidoP,
                ApellidoM
            };
            const objetoExtras = {
                celular,
                correo,
                Fk_usuario
            }
            if(objetoCliente != null && objetoExtras != null){
                const connection = await getConnection();
                await connection.query("insert into usuario set ?", objetoCliente);
                await connection.query("insert into Extras set ?", objetoExtras);
                resp.json({message: "Extras Agregado"});
            }
        }
    } catch (error) {
        resp.status(500);
        resp.send(error.message);
    }
};

export const methods = {     
    addRegistro
};