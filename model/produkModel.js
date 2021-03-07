const mongodb = require ('mongoose');

const produkDB = new mongodb.Schema({
    nama_produk:{
        type: String
    },kode_produk:{
        type: String
    },img:{
        data: Buffer,
        contentType: String
    }
})

const produk = mongodb.model('produk',produkDB);
module.exports = produk;