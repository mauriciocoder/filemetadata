const express = require("express");
const router = express.Router();
var multer  = require('multer');
var upload = multer({ dest: 'uploads/' })
//const imageModel = require("../models/image");
// File Upload
router.post("/size", upload.single("file"), handleFileSize);
function handleFileSize(req, resp, next) {
    resp.json({"size": req.file.size});
}
module.exports = router;