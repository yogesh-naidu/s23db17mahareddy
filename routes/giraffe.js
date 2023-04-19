var express = require('express');
const giraffe_controlers= require('../controllers/giraffe');
var router = express.Router();

/* GET giraffe */
router.get('/', giraffe_controlers.giraffe_view_all_Page);
/* GET detail giraffe page */
router.get('/detail', giraffe_controlers.giraffe_view_one_Page);
module.exports = router;