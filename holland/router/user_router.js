const express = require('express');
const router = express.Router();
const UserSchema = require('../model/user');

/*  ---------------------------------
 *   User
 *   --------------------------------*/
router.post('/create', (req, res) => {
    const newUserObj = new UserSchema(req.body);
    newUserObj.save((err) => {
        if(err) return res.status(500).send(err);
        return res.status(200).send({result:1, comment:'등록 성공'});
    });
});
router.post('/read', (req, res) => {
    UserSchema.findOne().where('_id').equals(req.body.id).then((doc) => {
        return res.status(200).send(doc);
    });
});
router.post('/update', (req, res) => {
    UserSchema.findOneAndUpdate({_id:req.body.user_id},{$set:req.body}).then(() => {
        return res.status(200).send({result:1, comment:'수정 성공'});
    });
});

module.exports = router;