'use strict';
const bookModel = require('../models/Book.model')
// const { response, request } = require('express')

const getbooks = (request, response) => {
    bookModel.find(( error,booksData) => {
        if(error){
            response.send(error)
        }
        response.json(booksData)
    })
};

module.exports = {
    getbooks
}