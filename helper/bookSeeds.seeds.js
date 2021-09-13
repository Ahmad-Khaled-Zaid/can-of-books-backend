const booksModel = require('../models/Book.model')

const seedBook = () => {
    const firstbook = new booksModel({

        title: 'In Search of Lost Time by Marcel Proust',
        description: 'Swann Way, the first part of A la recherche de temps perdu, Marcel Prousts seven-part cycle, was published in 1913. In it, Proust introduces the themes that run through the entire work. The narr...',
        status: 'New',
        email: 'Marcel Proust@gmail.com'
    });
    firstbook.save();
    console.log('Data saved');

    const secondBook = new booksModel({

        title: 'Ulysses by James Joyce',
        description: 'Ulysses chronicles the passage of Leopold Bloom through Dublin during an ordinary day, June 16, 1904. The title parallels and alludes to Odysseus (Latinised into Ulysses), the hero of Homers Odyss...',
        status: 'New',
        email: 'James Joyce@gmail.com'
    })

    secondBook.save();

    const thirdbook = new booksModel({

        title: 'Don Quixote by Miguel de Cervantes',
        description: 'Alonso Quixano, a retired country gentleman in his fifties, lives in an unnamed section of La Mancha with his niece and a housekeeper. He has become obsessed with books of chivalry, and believes th...',
        status: 'New',
        email: 'Miguel de Cervantes@gmail.com'
    })
    thirdbook.save();



}


module.exports = seedBook