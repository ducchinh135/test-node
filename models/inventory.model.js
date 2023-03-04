const mongoose = require("mongoose");
const BaseModel = require("./base.model");
const InventorySchema = require("./schemas/invertory.schema");
class InventoryModel extends BaseModel {
  constructor() {
    super();
    this.init("inventory", InventorySchema);
  }
}

module.exports = new InventoryModel();
