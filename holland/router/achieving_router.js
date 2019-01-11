const express = require('express');
const router = express.Router();
const AchievingSchema = require('../model/achieving');
const UserSchema = require('../model/user');
const moment = require('moment');
moment.locale('ko');

/*  ---------------------------------
 *   Achieving
 *   --------------------------------*/
router.get('/:id?', (req, res) => {
    let id = '5c1e1c2cc3187310b5df7b12', user;
    if(req.params.id) id = req.params.id;

    UserSchema.findOne().where('_id').equals(id).then((user_doc) => {
        user = user_doc;
        return UserSchema.find().where('team').equals(user_doc.team);
    }).then((team_doc) => {
        return AchievingSchema.find().where('leader_id').equals(id).then((list) => {
            res.render('achieving', {
                list:list,
                team:team_doc,
                user:user
            });
        })
    }).catch((err) => {
        console.error(err);
    });
});
router.post('/create', (req, res) => {
    req.body.date = moment(req.body.date).format('LL');
    const newAchievingObj = new AchievingSchema(req.body);
    newAchievingObj.save((err) => {
        if(err) return res.status(500).send(err);
        return res.status(200).send({result:1, comment:'등록 성공'});
    });
});
router.post('/read', (req, res) => {
    AchievingSchema.findOne().where('_id').equals(req.body.id).then((doc) => {
        return res.status(200).send(doc);
    });
});
router.post('/update', (req, res) => {
    req.body.date = moment(req.body.date).format('LL');
    AchievingSchema.findOneAndUpdate({_id:req.body.id},{$set:req.body}).then(() => {
        return res.status(200).send({result:1, comment:'수정 성공'});
    });
});
router.post('/delete', (req, res) => {
    AchievingSchema.deleteOne().where('_id').equals(req.body.id).then(() => {
        return res.status(200).send({result:1, comment:'삭제 성공'});
    });
});

module.exports = router;