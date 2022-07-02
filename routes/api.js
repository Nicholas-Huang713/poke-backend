const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/users', (req, res) => {
    User.find({})
    .then((data) => {res.json(data)})
    .catch((error) => {console.log('Error: ' + error)});
});

//REGISTER
router.post('/register', async (req, res) => {
    const {firstname, lastname} = req.body
    const newUser = new User({
        firstname,
        lastname,
    });
    try{
        const user = await User.create(newUser);
        res.status(200).json(user)
    } catch(err){
        res.status(400).json({error: err.message});
    }   
});

module.exports = router;