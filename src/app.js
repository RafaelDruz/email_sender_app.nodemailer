
const bodyParser = require("body-parser");
const express = require('express');
const app = express();
const cors = require("cors");
const userController = require("../user/UserController.js")
  
app.use(cors());

app.set('view engine', 'ejs');
 
app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

app.use("/", userController);

module.exports = app;