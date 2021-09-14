'use strict';
const { request, response } = require('express');
const bookModel = require('../models/Book.model')
// const { response, request } = require('express')

const getbooks = (request, response) => {
    bookModel.find((error, booksData) => {
       
        response.json(booksData)
    })
};
const createBook = (request, response) => {

    const { title, description, status, email } = request.body;
    const newBook=new booksModel({
        title, description, status, email 
    });
    newBook.save();
    response.json(newBook)
}

const deleteBook = (request, response) => {
    const bookId = request.params.id;
    const email=request.query.email;
  
    bookModel.deleteOne({ _id: bookId  }, (error, deletedData) => {
  
      response.json(deletedData);
    });
  
  }
  
   

module.exports = {
    getbooks,
    createBook,
    deleteBook
}
