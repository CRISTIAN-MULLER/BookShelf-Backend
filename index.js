const express = require('express');
const connectDatabase = require('./src/database/connection.js');
const bookController = require('./src/controllers/bookController');
const publisherController = require('./src/controllers/publisherController');
const authorController = require('./src/controllers/authorController');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(3000, () => {
  console.log('ta rodando');
});

connectDatabase();

// Create(Ta pronto), Retrieve(Ta pronto), Update (Ta Pronto) Delete (Ta Pronto),
// GET, POST, PUT, DELETE, PATCH,

app.get('/books', bookController.findBooks);
app.post('/book', bookController.createBook);
app.put('/book', bookController.updateBook);
app.delete('/book', bookController.deleteBook);

app.get('/publishers', publisherController.findPublishers);
app.post('/publisher', publisherController.createPublisher);
app.put('/publisher', publisherController.updatePublisher);
app.delete('/publisher', publisherController.deletePublisher);

app.get('/authors', authorController.findAuthors);
app.post('/author', authorController.createAuthor);
app.put('/author', authorController.updateAuthor);
app.delete('/author', authorController.deleteAuthor);
