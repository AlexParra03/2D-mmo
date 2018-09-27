const express = require('express');
const path = require('path');

const app = express();

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use('/public', express.static(path.join(__dirname, '../dist')));
console.log(path.join(__dirname, '../dist'));

// app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
})

app.listen(3000, () => {
    console.log('server listening...');
});