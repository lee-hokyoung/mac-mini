const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    id:String,
    password:String
});

adminSchema.methods.comparePassword = (inputPassword, cb) => {
    if(inputPassword === this.password){
        cb(null, true);
    }else{
        cb('error');
    }
};

module.exports = mongoose.model('admins', adminSchema, 'admins');