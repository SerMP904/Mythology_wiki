const bcrypt = require("bcrypt");
const userModel = require("../models/userModel");
const generateToken = require("../utils/authToken");

const BCRYPT_ROUNDS = Number(process.env.BCRYPT_ROUNDS || 10);

const signup = async (req, res) => {
  try {
    const { name, username, email, password } = req.body;

    const existingEmail = await userModel.findOne({ email });
    if (existingEmail) {
      return res
        .status(400)
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
      return res.status(400).send({
        status: "Failed",
        message: "No se ha podido crear el usuario",
      });
    }

     const payload = {
      _id: user._id,
      name: user.name,
      role: user.role,
    };

    const token = generateToken(payload, false);
    const token_refresh = generateToken(payload, true);

    res.status(200).send({
      status: "Success",
      message: "El usuario se ha creado correctamente",
      data: newUser, token, token_refresh
    });
  } catch (error) {
    res.status(500).send({ status: "Failed", error: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel
      .findOne({ email: email })
      .select("name username email password role id isActive");
    if (!user)
      return res
        .status(400)
        .send({ status: "Failed", message: "Credenciales incorrectas" });
    const passwordValidation = await bcrypt.compare(password, user.password);
    if (!passwordValidation)
      return res
        .status(400)
        .send({ status: "Failed", message: "Credenciales incorrectas" });
    if (!user.isActive)
      return res
        .status(400)
        .send({ status: "Failed", message: "El usuario está deshabilitado" });

    const returnUser = {
      name: user.name,
      username: user.username,
      email: user.email,
      password: user.password,
      role: user.role,
      _id: user._id
    };

    const payload = {
      _id: user._id,
      name: user.name,
      role: user.role,
    };
    const token = generateToken(payload, false);
    const token_refresh = generateToken(payload, true);
    res
      .status(200)
      .send({ status: "Success", data: returnUser, token, token_refresh });
  } catch (error) {
    res.status(500).send({ status: "Failed", error: error.message });
  }
};

const loginWithToken = async (req, res) => {
  try {
    const idUser = req.payload
    const user = await userModel.findId(idUser)
    if (!user) return res.status(401).send({status: "Failed", message: "no hay usuario"})
    res.status(200).send({status: "Success", data: user})
  } catch (error) {
    res.status(500).send({ status: "Failed", error: error.message });
  }
}

module.exports = { signup, login, loginWithToken };
