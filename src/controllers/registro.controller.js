import {getConnection} from "../database/database"

const getRegistro = async (req, resp) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM usuario INNER JOIN extras ON usuario.idUsuario = extras.Fk_Usuario INNER JOIN direccion ON usuario.idUsuario = direccion.FK_idUsuario;");
        resp.json(result);
    } catch (error) {
        resp.status(500);
        resp.send(error.message);
    }
};

const addRegistro = async (req, resp) => {
    try {
        const {Nombres, ApellidoP, ApellidoM ,Celular, Correo, Direccion, CodigoPostal, Estado, Ciudad} = req.body;
        if(Nombres === undefined || ApellidoP === undefined || ApellidoM === undefined || Celular === undefined || Correo === undefined || Direccion === undefined  || CodigoPostal === undefined || Estado === undefined || Ciudad === undefined ){
            resp.status(400).json({message: "Mala peticion Datos de usuario no llegaron"});
        }else{
            const Fk_usuario = 1;
            const  FK_idUsuario =1;
            const objetoCliente = {
                Nombres,
                ApellidoP,
                ApellidoM
            };
            const objetoExtras = {
                Celular,
                Correo,
                Fk_usuario
            }
            const objetoDireccion ={ 
                Direccion,
                CodigoPostal,
                Estado,
                Ciudad,
                FK_idUsuario
            }
            if(objetoCliente != null && objetoExtras != null && objetoDireccion != null){
                const connection = await getConnection();
                await connection.query("insert into usuario set ?", objetoCliente);
                await connection.query("insert into Extras set ?", objetoExtras);
                await connection.query("insert into Direccion set ?", objetoDireccion);
                resp.json({message: "Agregado"});
                console.log(objetoCliente);
                console.log(objetoDireccion);
                console.log(objetoExtras);
            }
        }
    } catch (error) {
        resp.status(500);
        resp.send(error.message);
    }
};

export const methods = {     
    getRegistro,
    addRegistro
    
};