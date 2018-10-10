const db = require("../models");
const bcrypt = require('bcrypt');
const saltRound = 10

// Defining methods for the userController
module.exports = {

  loginUser: function (req, res) {
    console.log(req.body.username)
    db.User
      .findOne({
        username: req.body.username
      }, function (err, obj) {
        console.log(obj)
        if (err) {
          res.json("already exists")
        } else {
          console.log(obj)
          let newPassword = obj.password
          bcrypt.compare(req.body.password, newPassword).then(resp => {
            if (!resp) {
              res.json("no user")
            } else {
              res.json(resp)
            }
          })
        }
      }).catch(err => res.status(422).json(err));
  },

  registerUser: function (req, res) {
    console.log(req.body.username, req.body.password)
    db.User.findOne({
        username: req.body.username
      }, function (err, obj) {
        if (obj) {
          res.json("already exists")
        } else {
          bcrypt.hash(req.body.password, saltRound, (err, hash) => {
            db.User.create({
              username: req.body.username,
              password: hash
            }).then(data => res.json(data))
          })
        }
      })
      .catch(err => res.status(422).json(err));
  }
};