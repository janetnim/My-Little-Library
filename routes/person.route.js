const express = require("express");
const router = express.Router();

const person_controller = require("../controllers/person.controller");

router.get("/test", person_controller.test);
router.post("/create", person_controller.person_create);
router.get("/:id/fetch", person_controller.person_get);
router.get("/fetchAll", person_controller.person_all);
router.get("/options", person_controller.person_allWithOptions);
router.put("/:id/update", person_controller.person_put);
router.delete("/:id/delete", person_controller.person_delete);
// router.post("/book/create", person_controller.create_book);

module.exports = router;
