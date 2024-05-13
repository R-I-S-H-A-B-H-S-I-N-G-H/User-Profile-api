const express = require("express");
const { get, create, update, login } = require("../controllers/UserController");
const { authenticate } = require("../middlewares/Auth.middleware");
const router = express.Router();
router.get("", authenticate, get);
router.post("/login", login);
router.post("", authenticate, create);
router.put("", authenticate, update);

module.exports = router;
