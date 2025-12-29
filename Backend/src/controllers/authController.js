const bcrypt = require("bcrypt");
const userModel = require("../models/userModel");

const BCRYPT_ROUNDS = Number(process.env.BCRYPT_ROUNDS || 10);

const signup = async (req, res) => {
  try {
    const { name, username, email, password } = req.body;

    const existingEmail = await userModel.findOne({ email });
    if (existingEmail) {
      return res
        .status(200)
        .send({ status: "Failed", message: "El email ya existe" });
    }

    const newUser = {
      name,
      username,
      email,
      password: await bcrypt.hash(password, BCRYPT_ROUNDS),
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
    res.status(200).send({
      status: "Success",
      message: "El usuario se ha creado correctamente",
    });
  } catch (error) {
    res.status(500).send({ status: "Failed", error: error.message });
  }
};
