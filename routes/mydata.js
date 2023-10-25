var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('mydata', { title: 'Sai Subrahmanyam Mahadasa' });
});

module.exports = router;
