const express = require("express");
const { User } = require("./models/schema");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { registerValidation, loginValidation } = require("./validation");

//register user
router.post("/register", async (req, res) => {
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //check user exists
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).send("Email already exists");

  //hash passwords

  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);

  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashPassword,
  });
  try {
    const savedUser = await user.save();
    res.send(savedUser);
  } catch (err) {
    res.status(400).send(err);
  }
});

//login

router.post("/login", async (req, res) => {
  // const { error } = loginValidation(req.body);
  // if (error) return res.status(400).send(error.details[0].message);

  //check user exists

  const emailExist = await User.findOne({ email: req.body.email });

  if (!emailExist) {
    res.status(400).send({
      success: false,
      message: "Email doesn't exists",
    });
    // return res.status(400).send("Email doesn't exists");
  } else {
    //password is correct
    const validPassword = await bcrypt.compare(
      req.body.password,
      emailExist.password
    );
    if (!validPassword) {
      res.status(400).send({
        success: false,
        message: "Invalid Password",
      });
    } else {
      User.findOne(
        {
          email: req.body.email,
        },
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            const token = jwt.sign(JSON.stringify(result), process.env.TOKEN);

            res.send({
              success: true,
              message: "Login Successful",
              token: token,
            });
            console.log(result);
          }
        }
      );
    }
  }
  // if (!emailExist) return res.status(400).send("Email doesn't exists");

  // if (!validPassword) return res.status(400).send("Invalid Password");

  //create and assign token
  // res.header("token", token).send(token);
  // res.send("Login Successful");
  // res.send({
  //   success: true,
  //   message: {
  //     token: token,
  //     message: "Login Successful",
  //   },
  // });
});

module.exports = router;
