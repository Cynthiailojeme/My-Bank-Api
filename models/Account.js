const mongoose = require('mongoose');

const AccountSchema = mongoose.Schema({
    image:{
        type: String,
        required: true
    },
    firstname:{
        type: String,
        required: true
    },
    lastname:{
        type: String,
        required: true
    },
    age:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    accountType:{
        type: String,
        required: true
    },
    cardNumber:{
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

const Account = module.exports = mongoose.model('Account', AccountSchema);