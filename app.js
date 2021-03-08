const express = require('express');
const bodyParser = require('body-parser')

const dotenv = require('dotenv');
const mongodb = require('mongoose');
const multer = require('multer');

const kategoriRouter = require('./router/kategoriRouter');
const produkRouter = require('./router/produkRouter')

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null,'images');
    },
    filename:(req, file, cb)=> {
        cb(null, new Date().getTime() + '-' + file.originalname)
    }
})

// const fileFilter = (req, file, cb) => {
//     if(
//         file.mimetype === 'img/png' ||
//         file.mimetype === 'img/jpg' ||
//         file.mimetype === 'img/jpeg'
//     ){
//         cb(null, true);
//     } else {
//         cb(null, false);
//     }
// }



dotenv.config({path:'./config.env'})
const DB = process.env.DATABASE.replace('<password>',process.env.DATABASE_PASSWORD)
//mongodb+srv://juaracoding:<password>@cluster0.fqgrm.mongodb.net/<dbname>?retryWrites=true&w=majority


mongodb.connect(DB,{
useNewUrlParser:true,
useCreateIndex:true,
useFindAndModify:true
}).then(connection =>{
console.log("Koneksi Berhasil")

})


const app = express();
const port = 3000;




app.use((req, res, next) =>{
 console.log(" aku menambahkan timestamp")
 req.requestTime = new Date().toISOString();
 next();
})
app.use(multer({ storage : fileStorage}).single('image'))


app.use('/kategori',kategoriRouter);
app.use('/produk',produkRouter)

           
app.listen(port,() => {

console.log("Server Siyapp")
})