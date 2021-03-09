const mongodb = require ('mongoose');

const produkDB = new mongodb.Schema({
    nama_produk:{
        type: String
    },harga:{
        type: String
    },kode_produk:{
        type: String
    },
    foto_produk:{
        type: String,
        
    }
}, {
    timestamps: true
})

const produk = mongodb.model('produk',produkDB);
module.exports = produk;