'use strict';
const { request, response } = require('express');
const bookModel = require('../models/Book.model')
// const { response, request } = require('express')

const getbooks = (request, response) => {
    bookModel.find((error, booksData) => {
        if (error) {
            response.send(error)
        }
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
   

module.exports = {
    getbooks,
    createBook
}
//  console.log(request.body);