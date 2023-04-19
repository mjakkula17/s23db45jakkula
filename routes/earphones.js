var express = require('express');
const earphones_controlers= require('../controllers/earphones');
var router = express.Router();

/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('earphones', { title: 'Search Results earphones' });
}); */


/* GET earphoness */
router.get('/', earphones_controlers.earphones_view_all_Page );
/* GET detail earphones page */
router.get('/detail', earphones_controlers.earphones_view_one_Page);
/* GET create earphones page */
router.get('/create', earphones_controlers.earphones_create_Page);
module.exports = router;

