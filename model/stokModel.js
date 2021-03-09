const mongodb = require ('mongoose');

const stokDB = new mongodb.Schema({
    jumlah_barang:{
        type: Number
    },
}, {
    timestamps: true
})

const stok = mongodb.model('stok',stokDB);
module.exports = stok;