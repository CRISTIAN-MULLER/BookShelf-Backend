const mongoose = require('mongoose');

const connectDatabase = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://admin:bookshelf@cluster0.o6j5f.mongodb.net/Library?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      }
    );
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
console.log('Conectou');

module.exports = connectDatabase;
