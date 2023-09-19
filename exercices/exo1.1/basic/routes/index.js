/*
var express = require('express');
var router = express.Router();
var app = express();

router.use((req, res, next) => {
  console.log();
  next();
});

router.get('/', (req, res, next) => {
  return res.json(menu);
});

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
});


module.exports = router;
*/