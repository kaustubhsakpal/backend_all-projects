const jwt = require('jsonwebtoken');

async function identifyer(req, res, next) {
  const token = req.cookies.logintoken;
  if (!token) {
    return res.status(404).json({
      message: "unauthorized person",
    });
  }
  let decode = null;
  try {
    decode = jwt.verify(token, process.env.SECRET_URI);
  } catch (err) {
    return res.status(404).json({
      message: err,
    });
  }
 req.user= decode

 
  next();
}

module.exports=identifyer