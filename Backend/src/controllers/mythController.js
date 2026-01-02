const mythModel = require("../models/mythModel");

const insertNewPantheon = async (req, res) => {
  try {
    const { pantheon, majorGods, otherGods } = req.body;
    if (!pantheon || !majorGods || !otherGods) {
      return res
        .status(400)
        .send({ status: "Failed", message: "Falta información requerida" });
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

const getAllMyths = async (req, res) => {
  try {
    const myths = await mythModel.find()
    if (myths.length === 0) return res.statust(200).send("No hay información para mostrar en la wiki")
    res.status(200).send({status: "Success", data: myths})
  } catch {
    res.status(500).send({status: "Failed", message: "Se ha producido un error"})
  }
}

module.exports = { insertNewPantheon, getAllMyths };
