const express = require('express');
const router = express.Router();
const fs = require('fs');

/* GET home page. */
router.get('/uma', function(req, res, next) {
  console.log("hoge");
  fs.readFile('db/umainfo.json', 'utf8', (err, data) => {
    if (err) res.json({"err": "read failed"})
    res.json(JSON.parse(data))
  })
});

module.exports = router;
