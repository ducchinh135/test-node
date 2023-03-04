const model = require("../models/inventory.model");

class InventoryController {
  constructor() {}

  getAll = async (req, res) => {
    let result = await model.get();
    res.send(result);
  };

  findLow = async (req, res) => {
    const filter = {
      instock: {
        $lt: 100,
      },
    };
    const client = await MongoClient.connect(
      "mongodb+srv://ducchinh:1234@cluster0.xs7sbwb.mongodb.net/test",
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
    const coll = client.db("test").collection("Inventory");
    const cursor = coll.find(filter);
    const result = await cursor.toArray();
    await client.close();

    res.send(result);
  };
}

module.exports = new InventoryController();
