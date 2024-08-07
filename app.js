const express = require("express");
const bodyParser = require("body-parser");
const { saveFile } = require("./server/server");
const path = require("path");
const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

app.post("/save", (req, res) => {
  const data = JSON.stringify(req.body);
  const success = saveFile(data);

  if (success) {
    res.status(200).send("Data saved successfully");
  } else {
    res.status(500).send("Error saving data");
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
