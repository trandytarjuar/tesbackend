
const express = require('express');
const bodyParser = require('body-parser')
const stokController = require('../controller/stokController')

const urlencodedParser = bodyParser.urlencoded({ extended: true })


const stokRouter = express.Router();

stokRouter
         .route('/')
         .post(urlencodedParser,stokController.postDatastok )
         .get(stokController.getAllDatastok);
         
stokRouter
         .route('/:id')
        //  .get(stokController.getAllDatastokById)
         .patch(urlencodedParser,stokController.updateDatastokById)
         .delete(stokController.deleteDatastokById)
         
         
         
         
module.exports = stokRouter;