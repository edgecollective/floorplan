var express = require('express');
var router = express.Router();
var path = require("path");

/*
router.get('/', function(req, res, next) {
  res.send('Welcome to Habitat');
});
*/

router.get('/', function(req,res, next){
  //res.sendFile(path.join(__dirname,'../public/form.html')); //make this more robust?
  res.render('landing');
});

module.exports = router;