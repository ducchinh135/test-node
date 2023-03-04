const exp = require("express");
const router = exp.Router();
const controller = require("../controllers/inventory.controller");

//GET api
router.get("/", controller.getAll);
router.get("/getlow100", controller.findLow);

module.exports = router;
