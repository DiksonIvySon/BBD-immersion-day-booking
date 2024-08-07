const fs = require("node:fs");
const path = require("path");

const saveFile = (data) => {
  try {
    fs.writeFileSync(path.join(__dirname, "../data/data.json"), data);
  } catch (err) {
    console.error(`Error writing to file: ${err}`);
    return false;
  }
  return true;
};

module.exports = { saveFile };
