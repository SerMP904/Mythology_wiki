const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");

const BYCRYPT_ROUNDS = Number(process.env.BYCRYPT_ROUNDS || 10);

const getAllUsers = async (req, res) => {
  try {
    const users = await userModel.find()
    if (users.length === 0) return res.status(200).send("No se han encontrado usuarios")
    res.status(200).send({status: "Success", data: users})
} catch {
    res.status(500).send({status: "Failed", message: "Usuarios obtenidos incorrectamente."})
}
};

const getUserById = async (req, res) => {
  try {
    const { idUser } = req.params;
    const user = await userModel.findById(idUser);
    if (!user) return res.status(200).send("No existe usuario con ese id");
    res.status(200).send({ status: "Success", data: user, payload });
  } catch (error) {
    res.status(500).send({ status: "Failed", error: error.message });
  }
};

const deleteUserById = async (req, res) => {
  try {
    const { idUser } = req.params;
    const user = await userModel.findByIdAndDelete(idUser);
    if (!user) return res.status(200).send("No existe usuario con ese id");
    res
      .status(200)
      .send({ status: "Success", message: "Usuario eliminado correctamente" });
  } catch (error) {
    res.status(500).send({ status: "Failed", error: error.message });
  }
};

const editUserById = async (req, res) => {
  try {
    const { idUser } = req.params;
    const { newUserData } = req.body;
    const newData = {}
    if (newUserData.name) {
      newData.name = newUserData.name
    }
    if (newUserData.username) {
      newData.username = newUserData.username
    }
    if (newUserData.email) {
      newData.email = newUserData.email
    }
    
    const updatedUser = await userModel.findByIdAndUpdate(idUser, newData, {
      new: true,
      runValidators: true,
    });
    if (!updatedUser)
      return res.status(500).send("No existe usuario con ese id");
    res.status(200).send({ status: "Success", data: updatedUser, token: req.header("auth-token") });
  } catch (error) {
    res.status(500).send({ status: "Failed", error: error.message });
  }
};

module.exports = { getAllUsers, getUserById, deleteUserById, editUserById };
