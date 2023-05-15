require("dotenv").config();
const jwt = require("jsonwebtoken");
const User = require("../../models/user");
const secret = process.env.Jwt_TOKEN;

const WithAuth = (req, res, next) => {
  const token = req.headers["x-access-token"];
  if (!token) {
    res
      .status(401)
      .json({ error: "Chamada não autorizada: sem token na requisição" });
  } else {
    jwt.verify(token, secret, (err, decode) => {
      if (err) {
        res
          .status(401)
          .json({ error: "Chamada não autorizada: token inválido" });
      } else {
        req.email = decode.email;
        User.findOne({ email: decode.email })
          .then((user) => {
            req.user = user;
            next();
          })
          .catch((err) => {
            res.status(401).json({ error: err });
          });
      }
    });
  }
};

module.exports = WithAuth;
