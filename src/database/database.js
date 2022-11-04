import mysql from "promise-mysql";
import config from "./../config";

const connection = mysql.createConnection({
    host: config.host,
    database: config.database,
    user: config.user,
    password: config.password
});

const getConnection=()=>{
    return connection
};

const connection2 = mysql.createConnection({
    host: config.host,
    database: config.database,
    user: config.user,
    password: config.password
});

const getConnection2=()=>{
    return connection2
};

module.exports = {
    getConnection
};
