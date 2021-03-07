
const express = require('express');
const bodyParser = require('body-parser')
const kategoriController = require('../controller/kategoriController')

const urlencodedParser = bodyParser.urlencoded({ extended: true })


const kategoriRouter = express.Router();

kategoriRouter
         .route('/')
         .post(urlencodedParser,kategoriController.postDatakategori )
         .get(kategoriController.getAllDatakategori);
         
kategoriRouter
         .route('/:id')
         .get(kategoriController.getAllDatakategoriById)
         .patch(urlencodedParser,kategoriController.updateDatakategoriById)
         .delete(kategoriController.deleteDatakategoriById)
         
         
module.exports = kategoriRouter;