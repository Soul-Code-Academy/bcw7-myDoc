/* Conexão com o banco de dados */
const mongodb = require('mongodb').MongoClient
const url = 'mongodb+srv://github:123***@cluster0.7kjwx.mongodb.net/hospital?retryWrites=true&w=majority'
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
