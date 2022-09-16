const jwt = require("jsonwebtoken");
const Usuario = require("../models/usuario");

const validarToken = async (req, res, next) => {
  const token = req.header("token");
  if (!token) {
    return res.status(401).json({
      message: "No esta autorizado para realizar esta operacion",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRETKEY);
    const { id: usuario_id } = decoded;
    const usuario = await Usuario.findById(usuario_id);
    req.usuario = usuario;
    return next();
  } catch (e) {
    return res.status(401).json({
      message: "El token no es valido",
      e,
    });
  }
};

module.exports = {
  validarToken,
};
