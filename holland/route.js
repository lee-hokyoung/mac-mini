const express = require('express');
const router = express.Router();
const passport = require('passport');
router.get('/login', (req, res) => {
    res.render('login');
});
router.post('/login', passport.authenticate('local', {
    failureRedirect: '/login'
}), (req, res) => {
    console.log('sess : ', req.session);
    res.redirect('/');
});

router.get('/', (req, res) => {
    res.render('index')
});
router.get('/about', (req, res) => {
    res.render('about')
});

module.exports = router;