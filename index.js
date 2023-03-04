const express = require("express");
const database = require("./db");

const app = express();
const db = new database();

const inventoryRoute = require("./routes/inventory.route");
const userRoute = require("./routes/user.router");
const validateToken = require("./validateToken");
app.use("/api/inventory", validateToken, inventoryRoute);
app.use("/api/user", userRoute);

app.get("/", (req, res) => {
  res.send("web63");
});

app.listen(3000, () => {
  console.log(`App listenting on port 3000`);
  db.connect().then((err, result) => {
    if (err) throw err;
    console.log("Database is connected");
  });
});
