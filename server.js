'use strict';
require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
app.use(cors());


const PORT = process.env.PORT || 4321;
// const MONGO_URL = process.env.MONGO_URL;
const DB_NAME = process.env.DB_NAME;
const url = 'mongodb://127.0.0.1:27017/'

mongoose.connect(`${url}/${DB_NAME}`);

const getIndex = require('./controllers/index.controller')
app.get('/', getIndex)
const {getbooks}=require('./controllers/books.controller')
app.get('/booksCollection',getbooks)
// app.get('/getbooks',getbooks)

const seeed= require('./helper/bookSeeds.seeds')
seeed();    

app.listen(PORT, () =>{
    console.log(`Server Started on port ${PORT}`);
})