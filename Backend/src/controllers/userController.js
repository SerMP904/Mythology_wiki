const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");

const BYCRYPT_ROUNDS = Number(process.env.BYCRYPT_ROUNDS || 10);

const insertNewUser = async (req, res) => {
  try {
    const { name, username, email, password } = req.body;
    if (!name || !username || !email || !password) {
      return res
        .status(400)
        .send({ status: "Failed", message: "Falta algún campo obligatorio" });
    }

    const newUser = {
      name,
      username,
      email,
      password,
    };
    const user = await userModel.create(newUser);
    if (!user) {
      return res
        .status(400)
        .send({
          status: "Failed",
          message: "No se ha podido crear el usuario",
        });
    }
    res
      .status(200)
      .send({ status: "Success", message: "Usuario creado con éxito" });
  } catch (error) {
    res.status(500).send({ status: "Failed", error: error.message });
  }
};

module.exports = { insertNewUser };
