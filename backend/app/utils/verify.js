const jwt = require("jsonwebtoken");
module.exports = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({
      message: "token khong ton tai",
      succes: false,
    });
  }

  const userId = jwt.decode(token, "ufhdfhfhdgghcvh");
  req.userId = userId;
  next();
};
