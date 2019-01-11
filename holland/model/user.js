const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    team:{type:Number, required:true},
    section:{type:Number, required:true},

    name: {type:String, required:true},
    age: {type:Number, required:true},
    bloodType:String,
    id_code:{type:String},

    position:{type:String, default:'회원'},
    tel:{type:String, required:true},
    email:{type:String},

    birthday:{type:String},
    address:{type:String},
    open_s:{type:String},

    family:{type:String},
    school:{type:String},
    major:{type:String},

    office:{type:String},
    pickup_type:{type:String},
    army:{type:String},
    faith_year:{type:String},
    persecution:{type:String},

    couple:{type:String},
    social_exp:{type:String},
    foreign:{type:String},
    marry:{type:String},
    car:{type:String},


    s_leader:{type:String},
    s_teacher:{type:String},
    s_leaf:{type:String},
    s_lecturer:{type:String},
    s_missionary:{type:String},
    certificate:{type:String}
});

module.exports = mongoose.model('User', UserSchema);