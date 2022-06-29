const express = require("express");

const app = express();

app.get('/', (req, res) => {
    res.json({msg: 'Lets Go Nick!!'})
})

app.listen(3000);