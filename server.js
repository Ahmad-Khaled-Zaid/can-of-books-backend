'use strict';
require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4321;
const MONGO_URL = process.env.MONGO_URL;
const DB_NAME = process.env.DB_NAME;
const url = 'mongodb://127.0.0.1:27017/'

mongoose.connect(`${MONGO_URL}/${DB_NAME}`);

const getIndex = require('./controllers/index.controller')
app.get('/', getIndex)
const { getbooks, createBook,deleteBook,updateBook} = require('./controllers/books.controller')
app.get('/booksCollection', getbooks)
app.post('/booksCollection', createBook)
app.delete('/booksCollection/:id', deleteBook); 
app.put("/booksCollection/:id", updateBook);


const seeed = require('./helper/bookSeeds.seeds')
seeed();

app.listen(PORT, () => {
    console.log(`Server Started on port ${PORT}`);
})