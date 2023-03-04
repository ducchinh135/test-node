const exp = require("express");
const router = exp.Router();
const controller = require("../controllers/user.controller");

router.post("/login", controller.login);

module.exports = router;
