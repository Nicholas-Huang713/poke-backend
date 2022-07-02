const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({

    firstname: {
        type: String,
        required: true
    },
    lastname:  {
        type: String,
        required: true
    },
    // email: String,
    // password: String,
    // favelist: [String],
    // posts: {
    //     type: Number,
    //     default: 0
    // },
    // subscribed: Boolean,
    // admin: {
    //     type: Boolean,
    //     default: "false"
    // },
    date: {
        type: String,
        default: Date.now()
    }  
}, { timestamps: true })

const User = mongoose.model('User', userSchema);

module.exports = User;