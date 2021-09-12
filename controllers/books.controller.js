'use strict';
const bookModel = require('../models/Book.model')
// const { response, request } = require('express')

const getbooks = (request, response) => {
    bookModel.find(( booksdata) => {
        response.json(booksdata)
    })
}

module.exports = {
    getbooks
}