const express = require("express");
const router = express.Router();

const {
    getAllUsers, getUserById, deleteUserById, editUserById,
    getUserToManageById
} = require("../controllers/userController")

const { verifyToken, verifyAdmin, verifyUserPermissions } = require("../middlewares/auth")

router.get("/", verifyToken, verifyAdmin, getAllUsers);
router.get("/get", verifyToken, getUserById);
router.get("/get/:idUser", verifyToken, verifyAdmin, getUserToManageById);
router.patch("/edit/:idUser", verifyToken, verifyUserPermissions, editUserById);
router.delete("/delete/:idUser", verifyToken, verifyUserPermissions, deleteUserById);

module.exports = router;