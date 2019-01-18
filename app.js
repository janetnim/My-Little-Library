const express = require("express");
const bodyParser = require("body-parser");
const person = require("./routes/person.route");
const book = require("./routes/books")
const app = express();

const mongoose = require("mongoose");
let dev_db_url = "mongodb://127.0.0.1:27017/Person";
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(
  mongoDB,
  { useNewUrlParser: true }
);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/persona", person);
app.use("/books", book);

let port = 3000;

app.listen(port, () => {
  console.log("Server is up and running on port " + port);
});

// exports.create_book = (req, res, next) => {
//   let book = new Book({
//     author: req.params.person_id,
//     title: req.body.title
//   });
//   book.save(err => {
//     if (err) return next(err);
//     return res.status(201).send("Book created successfully!");
//   });
// };
