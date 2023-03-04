const mongoose = require("mongoose");
class databse {
  constructor() {}
  connect = async () => {
    await mongoose.connect(
      "mongodb+srv://ducchinh:1234@cluster0.xs7sbwb.mongodb.net/test"
    );
  };
}

module.exports = databse;
