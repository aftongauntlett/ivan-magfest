var express = require('express');
var router = express.Router();
const path = require('path');
const fs = require('fs');
const directoryPath = path.join(__dirname, '../public/images');

router.get('/', function(req, res, next) {
  fs.readdir(directoryPath, function (err, ivans) {
    if (err) {
      return console.log('Unable to scan directory: ' + err);
    }

    const randomIvan = 'images/' + ivans[Math.floor(Math.random() * ivans.length)]

    res.render('index', { title: 'Ivan', randomIvan});
  });
});

module.exports = router;

