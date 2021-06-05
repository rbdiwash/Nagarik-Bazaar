// const jwt = require("jsonwebtoken");

// module.exports = function (req, res, next) {
//   const token = req.header("token");
//   if (!token) return res.status(401).send("Access Denied, Token Not Provided");
//   try {
//     const verified = jwt.verify(token, process.env.TOKEN);
//     req.user = verified;
//     next();
//   } catch (err) {
//     res.status(400).send("Invalid Token");
//   }
// };
const { User } = require("./models/schema");
const jwt = require("jsonwebtoken");

const auth = {
  SECRET_KEY: process.env.TOKEN,
  get_token: (obj) => {
    let token = jwt.sign(obj, process.env.TOKEN);
    return token;
  },
  verify: (req, res, next) => {
    const authHeader = req.headers.token;

    if (authHeader && authHeader.split(" ")[0] === "Bearer") {
      const token = authHeader.split(" ")[1];
      jwt.verify(token, process.env.TOKEN, (err, decoded) => {
        if (err) {
          console.log(err);
        } else {
          console.log(token);
          User.findById({ _id: decoded._id }, (err, result) => {
            if (err) {
              console.log(err);
            } else {
              if (result) {
                req.decoded === decoded;
                next();
              } else {
                res.send({
                  success: false,
                  message: "User Not Found",
                });
              }
              console.log(result);
            }
          });
          // req.user = verified;
        }
      });
    } else {
      req.verified = false;
      res.send({
        success: false,
        message: "Access Denied, Token not Provided",
      });
    }
  },
};

module.exports = auth;
