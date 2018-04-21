var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/cozy', function(req, res, next) {
  res.send('COZY');
});

module.exports = router;
