const express = require("express");

const app = express();

app.get('/', (req, res) => {
    res.json({msg: 'Hello Pokemon Trainer'})
})

app.listen(3000);