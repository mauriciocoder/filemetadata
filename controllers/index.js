const express = require("express");
const router = express.Router();
// File Controller
router.use("/file", require("./file"));
// Error handling
router.use(function(err, req, resp, next) {
  console.log("Error: " + err.message);
  resp.end(err.message);
});
module.exports = router;