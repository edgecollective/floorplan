var express = require('express');
var router = express.Router();
var path = require("path");
//const fetch   = require('node-fetch');
var floormap = require('../controllers/floorControllers');


router.get('/',floormap.getSize);
router.get('/:feedkey/',floormap.mapGraph);

module.exports = router;