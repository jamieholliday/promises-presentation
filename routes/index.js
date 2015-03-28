var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res) {
  res.sendfile(__dirname + '/public/index.html');
});

router.get('/*', function(req, res) {
	res.sendfile(path.resolve(__dirname + '/../404.html'));
});

module.exports = router;
