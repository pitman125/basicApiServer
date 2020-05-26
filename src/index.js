// require('dotenv').config()
const express = require('express');
// import express from 'express';

const bodyParser = require('body-parser');
 
const app = express();
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
 
app.listen(3000, () =>
  console.log('Example app listening on port 3000!'),
);

app.get('/', (req, res) => {
    res.send('Hello kljwsherdbfg!');
  });


// app.post('/', function(req, req) {

// }
// POST http://localhost:8080/api/users
// parameters sent with 
app.post('/api/users', function(req, res) {
    var user_id = req.body.id;
    var token = req.body.token;
    var geo = req.body.geo;

    res.send(user_id + ' ' + token + ' ' + geo);
});

app.post('/add', function(req, res) {
    const number1 = Number(req.body.number1);
    const number2 = Number(req.body.number2);
    const result = number1 + number2;

    res.send('result ' + result);
});
// console.log(process.env.MY_SECRET);