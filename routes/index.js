var express = require('express');
var router = express.Router();
var path = require("path");
const fetch   = require('node-fetch');

router.get('/', function(req,res, next){
    var url = 'http://data.pvos.org/co2/data/3897755c6379d00bbb1d622827b1ffd1ba6a0579802044c9/json';
    fetch(url)
        .then(res => res.json())
        .then(data => {
            res.render('map', {bayoudata:data});

        })
        .catch(err => {
            res.send(err);
        });
});

module.exports = router;