const configuracoes = {
    banco: {
        server: "servercampfiresolutions.database.windows.net", /* link direto para a nuvem*/
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
 
const sql = require('mssql');
sql.on('error', err => {
    console.error(`Erro de Conexão: ${err}`);
});


function conectar() {
  sql.close();
  return sql.connect(configuracoes.banco)
} 

module.exports = {
    conectar: conectar,
    sql: sql
}
