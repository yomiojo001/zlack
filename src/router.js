const express = require('express');
const router = express.Router()
const path = require('path')

router.get('/', (req,res) => {
    res.send('server is up and running')
});


router.use(function(req,res) {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });

module.exports = router;