const express = require("express");

const app = express();

app.get('/', (req, res) => {
    res.json({msg: 'Hello Nick'})
})

app.listen(3000);