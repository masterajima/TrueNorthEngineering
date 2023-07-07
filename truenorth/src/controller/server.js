const express = require("express");
const bodyParser = require("bodyparser");
const app = express();
app.use(bodyParser.json());

//define endpoint for booking
app.post("/book", (req, res) => {
  const { name, email, message } = req.body;

  //perform validation
  res.json({ success: "true", message: "Massage booking successfully" });
});

//start the server
const port = 5000;
app.listen(port, () => {
  console.log("server running on port ${port}");
});
