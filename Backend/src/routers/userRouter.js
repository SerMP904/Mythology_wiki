const express = require("express");
const router = express.Router();

const {
    getAllUsers, getUserById, deleteUserById, editUserById
} = require("../controllers/userController")

const { verifyToken, verifyAdmin, verifyUserPermissions } = require("../middlewares/auth")

router.get("/", verifyToken, verifyAdmin, getAllUsers);
router.get("/:idUser", getUserById);
router.patch("/edit/:idUser", verifyToken, verifyUserPermissions, editUserById);
router.delete("/delete/:idUser", verifyToken, verifyUserPermissions, deleteUserById);

module.exports = router;