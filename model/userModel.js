const mongodb = require ('mongoose');

const userDB = new mongodb.Schema({
    nama_user:{
        type: String
    },no_hp:{
        type: Number
    },alamat:{
        type: String
    },
    foto_user:{
        type: String,
        
    }
}, {
    timestamps: true
})

const user = mongodb.model('user',userDB);
module.exports = user;