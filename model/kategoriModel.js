const mongodb = require ('mongoose');

const kategriDB = new mongodb.Schema({
    nama_kategori:{
        type: String
    }
})

const kategori = mongodb.model('kategori',kategriDB);
module.exports = kategori;