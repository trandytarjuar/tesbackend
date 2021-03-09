const express = require('express');
const bodyParser = require('body-parser')

const dotenv = require('dotenv');
const mongodb = require('mongoose');
const multer = require('multer');
const fs = require('fs')

const kategoriRouter = require('./router/kategoriRouter');
const produkRouter = require('./router/produkRouter');
const stokRouter = require('./router/stokRouter');
const userRouter = require('./router/userRouter');

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null,'images');
    },
    filename:(req, file, cb)=> {
        cb(null, new Date().getTime() + '-' + file.originalname.replace(/\s/gi,"-"))
    }
})

const fileFilter = (req, file, cb) => {
    if(
        file.mimetype === 'img/png' ||
        file.mimetype === 'img/jpg' ||
        file.mimetype === 'img/jpeg'
    ){
        cb(null, false);
    } else {
        cb(null, true);
    }
}



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



app.use(multer({ storage : fileStorage, fileFilter : fileFilter}).single('image'));

app.use((req, res, next) =>{
 console.log(" aku menambahkan timestamp")
 req.requestTime = new Date().toISOString();
 next();
})



app.use('/kategori',kategoriRouter);
app.use('/produk',produkRouter);
app.use('/stok',stokRouter);
app.use('/user',userRouter);

           
app.listen(port,() => {

console.log("Server Siyapp")
})