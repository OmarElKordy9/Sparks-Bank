const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    accountNo: {
        type: Number,
        required: true,
        unique: true 
    },
    balance: {
        type: Number,
        required: true
    },
}, {
    timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;