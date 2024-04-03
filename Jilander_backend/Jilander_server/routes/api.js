const apiController = require('../controllers/api.c')

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/task',apiController.getAll);
router.post('/task',apiController.addTaskItem)
module.exports = router;
