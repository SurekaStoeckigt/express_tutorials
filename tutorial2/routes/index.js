var express = require('express');
var router = express.Router();

/* GET home page. */
// route renders a response using the template index
// and passes the variable "title"
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
