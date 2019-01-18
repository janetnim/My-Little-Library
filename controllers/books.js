const Book = require('../models/person.model').Book;
// import moment from 'moment';

exports.createBook = (req, res, next) => {
    const { title, description } = req.body;
    const { author } = req.params;
    let book = new Book({ author, title, description, updated_at: new Date })
    book.save((err, book) => {
      if(err) return next(err);
      return res.status(201).json(book);
    })
  }

// exports.getBook = (req, res, next) => {

// }
