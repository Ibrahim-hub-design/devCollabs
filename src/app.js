const express = require("express");

const app = express();

app.use("/info", (req, res) => {
  res.send("Hey buddies+");
  console.log("I am active");
});

app.listen(3000, () => {
  console.log("Server is ready");
});
