const express = require("express");

const app = express();

app.use("/test", (req, res) => {
  res.send("Hey Im working");
});

app.listen(3000);
