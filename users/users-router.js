const express = require('express');

const Users = require('./users-model');
const {authenticate} = require('../auth/authenticate.js');
const router = express.Router();

router.get('/', authenticate, (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

module.exports = router;