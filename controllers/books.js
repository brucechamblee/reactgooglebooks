const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Book.find(req.query)
      .then(books => res.json(books))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Book.findById(req.params.id)
      .then(books => res.json(books))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Book.create(req.body)
      .then(books => res.json(books))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Book.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(books => res.json(books))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Book.findById({ _id: req.params.id })
      .then(books => books.remove())
      .then(books => res.json(books))
      .catch(err => res.status(422).json(err));
  }
};