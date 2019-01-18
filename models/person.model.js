const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let PersonSchema = new Schema({
  name: { type: String, required: true, max: 100 },
  count: { type: Number, required: true },
  story: [{ type: Schema.Types.ObjectId, ref: 'Book' }],
}, {
    versionKey: false
  });

let BooksSchema = new Schema({
  author: [{ type: Schema.Types.ObjectId, ref: 'Person' }],
  title: { type: String, required: true },
  description: { type: String, required: true },
  updated_at: { type: Date, required: true }
}, {
    versionKey: false
  })

const Book = mongoose.model("Book", BooksSchema);
const Person = mongoose.model("Person", PersonSchema);

module.exports ={ Book, Person };