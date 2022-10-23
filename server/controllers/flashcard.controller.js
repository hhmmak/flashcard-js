const Flashcard = require('../models/flashcard.model');


module.exports.findAllFlashcard = (req, res) => {
  Flashcard.find()
    .then(flashcard => res.json(flashcard))
    .catch(err => res.status(400).json(err));
}

module.exports.findOneFlashcard = (req, res) => {
  Flashcard.findOne({_id: req.params.id})
    .then(flashcard => res.json(flashcard))
    .catch(err => res.status(400).json(err));
}

module.exports.createFlashcard = (req, res) => {
  Flashcard.create(req.body)
    .then(flashcard => res.json(flashcard))
    .catch(err => res.status(400).json(err));
}

module.exports.updateFlashcard = (req, res) => {
  Flashcard.findOneAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators:true})
  .then(flashcard => res.json(flashcard))
  .catch(err => res.status(400).json(err));
}

module.exports.deleteFlashcard = (req, res) => {
  Flashcard.deleteOne({_id: req.params.id})
    .then(result => res.json(result))
    .catch(err => res.status(400).json(err));
}