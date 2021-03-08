
const express = require('express');
const bodyParser = require('body-parser')
const produkController = require('../controller/produkController')

const urlencodedParser = bodyParser.urlencoded({ extended: true })


const produkRouter = express.Router();

produkRouter
         .route('/')
         .post(urlencodedParser,produkController.postDataproduk )
         .get(produkController.getAllDataproduk);
         
produkRouter
         .route('/:id')
         .get(produkController.getAllDataprodukById)
         .patch(urlencodedParser,produkController.updateDataprodukById)
         .delete(produkController.deleteDataprodukById)
         
         
         
         
module.exports = produkRouter;