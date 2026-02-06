const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    const token = req.header("auth-token");
    if (!token) return res.status(401).send("Acceso denegado");
    try {
        const payload = jwt.verify(token, process.env.SECRET_TOKEN);
        req.payload = payload;
        next();
    } catch (error) {
        try {
            const payload = jwt.verify(token, process.env.SECRET_TOKEN_REFRESH)
            req.payload = payload;
        next();
        } catch (error) {
            res.status(401).send({ status: "Token expired", error: error.message });
        }
    }
}

const verifyAdmin = (req, res, next) => {
  try {
    const role = req.payload.role;
    if (role !== "admin") {
      return res.status(401).send({
        status: "Failed",
        message: "No tiene privilegios de administrador",
      });
    }
    next();
  } catch (error) {
    return res
      .status(401)
      .send({ status: "Error endpoint", message: error.message });
  }
};

const verifyUserPermissions = (req, res, next) => {
  try {
    const { _id: idUserAuthentication, role } = req.payload;
    const idUser = req.params.idUser;
    if (idUserAuthentication === idUser || role === "admin") {
      next();
    } else {
      return res
        .status(401)
        .send({
          status: "Failed",
          message: "No tienes permisos para realizar esta acción",
        });
    }
  } catch (error) {
    return res
      .status(401)
      .send({ status: "Error endpoint", message: error.message });
  }
};

module.exports = {verifyToken, verifyAdmin, verifyUserPermissions};