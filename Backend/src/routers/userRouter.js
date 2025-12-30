const express = require("express");
const router = express.Router();

const {
    getAllUsers
} = require("../controllers/userController")

const { verifyToken } = require("../middlewares/auth")

router.get("/", verifyToken, insertNewUser);

module.exports = router;