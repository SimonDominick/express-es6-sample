import express from 'express';

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
#  res.render('index', { title: 'World' });
  res.send('My Student ID is 21369766.   Welcome to Express');

});

export default router;
