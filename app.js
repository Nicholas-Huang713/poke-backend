const express = require("express");
const mongoose = require('mongoose');
// // const morgan = require('morgan');
const path = require('path');
const dotenv = require('dotenv');
// const dotenv = require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` })

// const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

// dotenv.config();

const PORT = process.env.PORT || 3000;


const routes = require('./routes/api');
mongoose.connect( 
    process.env.MONGODB_URI || 
    process.env.DB_CONNECT,
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    },
    () => console.log('connected to db!')
);
        
    mongoose.connection.on('connected', () => {
        console.log("Mongoose is connected!")
    })
            
app.use(express.json());
app.use(express.urlencoded({extended: false}));
// // app.use(express.static(path.resolve('..', 'client', 'build'))); 
// app.use(bodyParser.urlencoded({ extended: true }))
// app.use(bodyParser.json())
app.use(cors());

app.get('/', (req, res) => {
    res.json({msg: 'Lets Go Nick!!'})
})
// app.use('/', routes);

// app.use(morgan('tiny'));

// if(process.env.NODE_ENV === 'production'){
    //     app.use(express.static('client/build'));
    // }
    
    // app.get('/*', function(req, res) {
    // //     res.sendFile(path.join(__dirname, '../frontend/build/index.html'), function(err) {
    //     res.sendFile(path.join(__dirname, '../frontend/_work/poke-frontend/poke-frontend/build/index.html'), function(err) {
    //         if (err) {
    //             res.status(500).send(err)
    //         }
    //     })
    // });
    
app.listen(PORT, console.log(`Server is starting at ${PORT}`));
