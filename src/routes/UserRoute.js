const express = require("express");
const { get, create, update, login, list } = require("../controllers/UserController");
const { authenticate } = require("../middlewares/Auth.middleware");
const router = express.Router();

/**
 * @swagger
 * /user:
 *      get:
 *          summary: Return a user
 *          parameters:
 *              - name : id
 *
 */

router.get("", authenticate, get);
router.get("/list", authenticate, list);

router.post("/login", login);

router.post("", create);

router.put("", authenticate, update);

module.exports = router;
