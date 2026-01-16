const express = require("express");
const router = express.Router();

const { signup, login, loginWithToken } = require("../controllers/authController")

router.post("/signup", signup)
router.post("/login", login)
router.post("/loginWithToken", loginWithToken)


module.exports = router;