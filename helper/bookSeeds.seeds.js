const booksModel = require('../models/Book.model')

const seedBook = () => {
    const firstbook = new booksModel({

        title: 'book',
        description: 'test the model',
        status: 'true',
        email: 'ahmadk.zaid97@gmail.com'
    })
    firstbook.save();
    console.log('Data saved');

    const secondBook = new booksModel({

        title: 'book',
        description: 'test the model',
        status: 'true',
        email: 'ahmadk.zaid97@gmail.com'
    })

    secondBook.save();
    const thirdbook = new booksModel({

        title: 'book',
        description: 'test the model',
        status: 'true',
        email: 'ahmadk.zaid97@gmail.com'
    })



}


module.exports = seedBook