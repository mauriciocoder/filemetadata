const express = require("express");
const app = express();
app.use(express.static("public"));
//app.use(require("./controllers"));
var port = process.env.PORT || 8080;
app.listen(port, function () {
  console.log('FileMetadata app listening on port 8080!');
});
