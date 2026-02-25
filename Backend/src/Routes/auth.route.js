const express = require('express');
const RegisterController = require('../Controller/auth.controller')
const Authroute = express.Router();

Authroute.post('/register',RegisterController.registercontroler);
Authroute.post('/login',RegisterController.logincontroller)
module.exports=Authroute;