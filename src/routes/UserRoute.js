const express = require("express");
const { get, create, update, login, list } = require("../controllers/UserController");
const { authenticate, authorize } = require("../middlewares/Auth.middleware");
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

router.post("/login", login);
router.get("/list", authenticate, list);
router.get("/:id", authenticate, authorize, get);
router.put("/:id", authenticate, authorize, update);
router.post("", create);

module.exports = router;
