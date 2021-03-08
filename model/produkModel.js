const mongodb = require ('mongoose');

const produkDB = new mongodb.Schema({
    nama_produk:{
        type: String
    },harga:{
        type: String
    },image:{
        type: String,
        require: true
    }
}, {
    timestamps: true
})

const produk = mongodb.model('produk',produkDB);
module.exports = produk;