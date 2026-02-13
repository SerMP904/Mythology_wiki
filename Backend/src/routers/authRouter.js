const express = require("express");
const router = express.Router();

const { signup, login, loginWithToken } = require("../controllers/authController")
const { verifyToken } = require("../middlewares/auth")

router.post("/signup", signup)
router.post("/login", login)
router.post("/loginWithToken", verifyToken, loginWithToken)


module.exports = router;