
const express = require('express');
const bodyParser = require('body-parser')
const userController = require('../controller/userController')

const urlencodedParser = bodyParser.urlencoded({ extended: true })


const userRouter = express.Router();

userRouter
         .route('/')
         .post(urlencodedParser,userController.postDatauser )
         .get(userController.getAllDatauser);
         
userRouter
         .route('/:id')
         .get(userController.getAllDatauserById)
         .patch(urlencodedParser,userController.updateDatauserById)
         .delete(userController.deleteDatauserById)
         
         
         
         
module.exports = userRouter;