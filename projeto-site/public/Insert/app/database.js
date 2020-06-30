const sql = require('mssql');

const connection = {
    config: {
        server: "servercampfiresolutions.database.windows.net",
        user: "adiminlocal",
        password: "#Gfcampfire",
        database: "BdCampFire",
        options: {
            encrypt: true
        },
        pool: {
            max: 4,
            min: 1,
            idleTimeoutMillis: 30000,
            connectionTimeout: 5000
        }
    }
}


function connect() {
    sql.close();
    return sql.connect(connection.config)
}

module.exports = {
    connect: connect,
    sql: sql
}