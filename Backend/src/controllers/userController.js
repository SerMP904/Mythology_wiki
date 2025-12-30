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

module.exports = { getAllUsers };
