const express = require('express')
const fs = require('fs');
const path = require('path');
const router = express.Router()

router.post('/adduser', (req, res) => {
    let newuser = req.body;
    req.user,push(newuser);
    fs.readFile(path.resolve(__dirname, '../data/users.json'), function(err, data) {
        console.log('reading file ... ');
        if(err) console.log('Failed to write');
        else console.log('User Saved')
      });
      res.send('done');
});

module.exports = router