var express = require('express');
const giraffe_controlers = require('../controllers/giraffe');
var router = express.Router();

// A little function to check if we have an authorized user and continue on
// or
// redirect to login.
const secured = (req, res, next) => {
    if (req.user) {
        return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
}

/* GET giraffe */
router.get('/', giraffe_controlers.giraffe_view_all_Page);
/* GET detail giraffe page */
router.get('/detail', giraffe_controlers.giraffe_view_one_Page);
/* GET create giraffe page */
router.get('/create', giraffe_controlers.giraffe_create_Page);
/* GET create update page */
router.get('/update', secured, giraffe_controlers.giraffe_update_Page);
/* GET delete giraffe page */
router.get('/delete', giraffe_controlers.giraffe_delete_Page);
module.exports = router;