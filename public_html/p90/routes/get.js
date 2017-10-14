var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:nombre/:edad', function(req, res, next) {
  res.json({mensaje: "Hola " + req.params.nombre + ", edad: " + req.params.edad});
  // res.json({mensaje: "Hola " + req.query.nombre + ", edad: " + req.query.edad});
});

module.exports = router;
