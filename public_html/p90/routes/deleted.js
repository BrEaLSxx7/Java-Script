var express = require('express');
var router = express.Router();

router.delete('/', function(req, res, next) {
  res.json({mensaje: "Hola " + req.body.nombre + ", edad: " + req.body.edad});
});

module.exports = router;
