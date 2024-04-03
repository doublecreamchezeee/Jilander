const apiController = require('../controllers/api.c')

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/task',apiController.getAllFoodItems);

module.exports = router;
