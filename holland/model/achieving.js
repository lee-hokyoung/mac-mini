const mongoose = require('mongoose');

const achievingSchema = new mongoose.Schema({
    name:{type:String, required:true},
    age:{type:Number, required:true},
    gender:{type:String, required:true},
    concept:{type:String},
    address:{type:String},
    faith:{type:String},
    location:{type:String},
    date:{type:String},
    worry:{type:String},
    interest:{type:String},
    environment:{type:String},
    etc:{type:String},
    leader_id:{type:String, required:true}
});

module.exports = mongoose.model('Achieving', achievingSchema, 'achieving');