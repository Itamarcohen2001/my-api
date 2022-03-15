// import express from 'express';
// import bodyParser from 'body-parser';
const express =require('express');
const bodyParser = require('body-parser');

const app = express();//משתנה שמקבל את כל התכנות של ספריית אקספרס

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

const accountsRoute = require('./controllers/accounts');
app.use('/api/accounts',accountsRoute);


const port = 5090;
app.listen(port,function(){           //מדמה שרת 
    console.log(`Server is running via port ${port}`)
});


