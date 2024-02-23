const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(express.static("./"));
app.use(cors());

app.get("/", function (req, res) {
  res.sendFile(path.resolve("library.html"));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
