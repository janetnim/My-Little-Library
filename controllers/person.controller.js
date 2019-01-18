const Person = require("../models/person.model").Person;
const Book = require("../models/person.model");
const isNotAvailable = require("../validators/index");

const PersonFunc = person => {
  const { id, name, count } = person;
  const response = {
    id,
    name,
    count
  };
  return response;
};

exports.test = function(req, res) {
  return res.status(200).json("This is a test controller");
};

exports.person_create = function(req, res, next) {
  let person = new Person({
    name: req.body.name,
    count: req.body.count
  });
  person.save(function(err) {
    if (err) return next(err);
    const response = PersonFunc(person);
    return res.status(201).json(response);
  });
};

exports.person_get = function(req, res) {
  Person.findById(req.params.id, function(err, person) {
    if (err) return next(err);
    person = isNotAvailable("person", person, "is");
    const response = PersonFunc(person);
    return res.status(200).send(response);
  });
};

exports.person_all = (req, res) => {
  Person.find({}, function(err, person) {
    if (err) return next(err);
    person = isNotAvailable("persons", person, "are");
    return res.status(200).json(person);
  });
};

// If I want to select name, count and not id I would do it as follows:
exports.person_allWithOptions = (req, res) => {
  const query = Person.find({}).select(" -_id name count"); // to include name only you can have name as the only param in select
  query.exec(function(err, person) {
    if (err) return next(err);
    person = isNotAvailable("persons", person, "are");
    return res.status(200).send(person);
  });
};

exports.person_put = (req, res, next) => {
  Person.findByIdAndUpdate(req.params.id, { $set: req.body }, function(
    err,
    person
  ) {
    if (err) return next(err);
    person = isNotAvailable("person", person, "is");
    return res.status(201).send(person);
  });
};

exports.person_delete = (req, res, next) => {
  Person.findByIdAndDelete(req.params.id, function(err) {
    if (err) return next(err);
    person = isNotAvailable("person", person, "is");
    return res.status(200).json("Item deleted successfully!");
  });
};
