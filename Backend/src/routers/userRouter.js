const express = require("express");
const router = express.Router();

const {
    insertNewUser
} = require("../controllers/userController")

const { verifyToken } = require("../middlewares/auth")

router.get("/newUser", verifyToken, insertNewUser);

module.exports = router;