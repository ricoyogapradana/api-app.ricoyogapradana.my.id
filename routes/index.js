var express = require('express');
var router = express.Router();
const koneksi = require('../utils/koneksi');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
