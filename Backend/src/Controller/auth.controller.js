const usermodel = require("../Models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
async function registercontroler(req, res) {
  try {
    const { username, email, password, bio, profilepic } = req.body;
    const isexits = await usermodel.findOne({
      $or: [{ username }, { email }],
    });
    if (isexits) {
      return res.status(409).json({
        message: "this username allready exits",
      });
    }
    //for invalid password  format
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!regex.test(password)) {
      return res.status(400).json({
        message: "Invalid password format there should be one upper letter one specialmberic atleast",
      });
    }

    //
    const haspassword = await bcrypt.hash(password, 10);
    const user = await usermodel.create({
      username,
      email,
      password: haspassword,
      bio,
      profilepic,
    });
    const token = jwt.sign({ id: user._id , username:user.username }, process.env.SECRET_URI,{ expiresIn:"1h" });
    res.cookie("token", token);
    res.status(201).json({
      message: "user created succesfully ",
      user,
    });
  } catch (err) {
    if (err.name == "ValidationError") {
      return res.status(400).json({
        message: Object.values(err.errors)[0].message,
      });
    }

    res.status(500).json({
      error: err.message,
    });
  }
}

async function logincontroller(req, res) {
  const { username, password, email} = req.body;
  const user = await usermodel.findOne({
    $or: [{ username: username }, { email: email }],
  }).select("+password")
  if (!user) {
    return res.status(404).json({
      message: "user not found",
    });
  }
  const haspassword = await bcrypt.compare(password, (user.password));
  if (!haspassword) {
  return  res.status(401).json({
      message: "password wrong",
    });
  }
  res.cookie("logintoken",jwt.sign({id:user._id,username:user.username},process.env.SECRET_URI,{expiresIn:"1d"}))
  return res.status(200).json({
    message: "succesfully login",
    user,
  });
}

module.exports = { registercontroler, logincontroller };
