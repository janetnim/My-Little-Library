const express = require("express");
const router = express.Router();

const bookController = require("../controllers/books");

router.post("/:peronId/create", bookController.createBook);

module.exports = router;
