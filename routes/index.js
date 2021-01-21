var express = require('express');
var router = express.Router();
var path = require("path");
//const fetch   = require('node-fetch');
//var floormap = require('../controllers/floorControllers');
//var index_control = require('../controllers/indexControllers');

router.get('/', function(req,res, next){
    //res.sendFile(path.join(__dirname,'../public/form.html')); //make this more robust?
    res.render('home');
  });

module.exports = router;