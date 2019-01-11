const express = require('express');
const router = express.Router();
const UserSchema = require('../model/user');
/*  -----------------------------------
 *   Member
 *   ----------------------------------*/
router.post('/member', (req, res) => {
    UserSchema.find().then(() => {

    });
    res.render('member', {

    });
});