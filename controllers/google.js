const db = require("../models");
const axios = require("axios");

const ajax = axios.create({
  headers: {
    "Content-type": "application/json"
  }
});

module.exports = {
  findAll: function(req, res) {
    const { query: params } = req;
    
      ajax.get(
        'https://www.googleapis.com/books/v1/volumes',
        { params }
      ).then(function(results){

      const apiBooks = results.data.items.filter(
        (result) =>
          result.volumeInfo.title &&
          result.volumeInfo.infoLink &&
          result.volumeInfo.authors &&
          result.volumeInfo.description &&
          result.volumeInfo.imageLinks &&
          result.volumeInfo.imageLinks.thumbnail
      );

      const dbBooks = db.Book.find({}, function(dbBooks){
        const books = apiBooks.filter((apiBooks) =>
          dbBooks.every((dbBook) => dbBook.googleId.toString() !== apiBooks.id)
          );
          return res.json(books);

      });


    
      })
  }
};
