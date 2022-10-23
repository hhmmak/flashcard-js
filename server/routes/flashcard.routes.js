const FlashcardController = require('../controllers/flashcard.controller');

module.exports = (app) => {   //app = express()
  app.get('/api/flashcard', FlashcardController.findAllFlashcard);
  app.get('/api/flashcard/:id', FlashcardController.findOneFlashcard);
  app.post('/api/flashcard', FlashcardController.createFlashcard);
  app.put('/api/flashcard/:id', FlashcardController.updateFlashcard);
  app.delete('/api/flashcard/:id', FlashcardController.deleteFlashcard);
}