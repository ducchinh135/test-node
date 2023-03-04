const jwt = require("jsonwebtoken");
const model = require("../models/user.model");
const bcrypt = require("bcrypt");

class UserController {
  constructor() {}

  login = async (req, res) => {
    let { username, password } = req.body;
    if (!username || !password) {
      res.send({
        existed: false,
        token: "",
        message: "Username and Password are required",
      });
    } else {
      let user = await model.findByUsername(username);
      if (user && user != null) {
        let checkPassword = await bcrypt.compareSync(password, user.password);
        if (checkPassword) {
          let token = jwt.sign(
            { username: username, email: user.email },
            "ngcaDBiBWKatwMXO5S07"
          );
          res.send({ existed: true, token: token, message: "Found" });
        } else {
          res.send({ existed: false, token: "", message: "Password is wrong" });
        }
      } else {
        res.send({ existed: false, token: "", message: "User does not exist" });
      }
    }
  };
}

module.exports = new UserController();
