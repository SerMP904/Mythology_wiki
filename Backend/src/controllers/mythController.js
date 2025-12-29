const userModel = require("../models/mythModel");

const insertNewPantheon = async (req, res) => {
  try {
    const { pantheon, majorGods, otherGods } = req.body;
    if (!pantheon || !majorGods || !otherGods) {
      return res
        .status(400)
        .send({ status: "Failed", message: "Falta información requeridad" });
    }

    const newPantheon = {
      pantheon,
      majorGods,
      otherGods,
    };
    const createPantheon = await mythModel.create(newPantheon);
    if (!pantheon) {
      return res
        .status(400)
        .send({
          status: "Failed",
          message: "No se ha podido crear un nuevo panteón",
        });
    }
    res
      .status(200)
      .send({ status: "Success", message: "Panteón creado con éxito" });
  } catch (error) {
    res.status(500).send({ status: "Failed", error: error.message });
  }
};

module.exports = { insertNewPantheon };
