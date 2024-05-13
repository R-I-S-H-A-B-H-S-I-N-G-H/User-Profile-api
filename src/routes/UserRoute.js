const express = require("express");
const { get, create, update, login } = require("../controllers/UserController");
const router = express.Router();
router.get("/:id", get);
router.post("/login", login);
router.post("", create);
router.put("", update);

module.exports = router;
