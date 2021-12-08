/* Conexão com o banco de dados */
const mongodb = require('mongodb').MongoClient
const url = 'AQUI ACRESCENTA O ENDEREÇO DO BD'
const client = new mongodb(url)

async function conectar() {
    try {
        await client.connect()
        console.log('Conectada ao Banco de dados')
    } catch (erro) {
        console.log('Infelizmente algo deu errado. Tente novamente')
    }
}
conectar()
/* Exportação para o index.js */
module.exports = client
