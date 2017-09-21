var express = require('express');
var multer = require('multer');
var router = express.Router();

var upload = multer({dest: 'uploads/'});

/* response on json format */
router.post('/', upload.single('file'), function(req, res, next) {
    res.json({
      name: req.file.originalname,
      size: req.file.size
    });
});

module.exports = router;
