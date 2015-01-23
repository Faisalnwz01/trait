'use strict';

var User = require('./user.model');
var passport = require('passport');
var config = require('../../config/environment');
var jwt = require('jsonwebtoken');
var http = require('http');
var watson = require('watson-developer-cloud-alpha');
var validationError = function(res, err) {
  return res.json(422, err);
};

/**
 * Get list of users
 * restriction: 'admin'
 */
exports.index = function(req, res) {
  User.find({}, '-salt -hashedPassword', function(err, users) {
    if (err) return res.send(500, err);
    res.json(200, users);
  });
};

/**
 * Creates a new user
 */
exports.create = function(req, res, next) {
  var newUser = new User(req.body);
  newUser.provider = 'local';
  newUser.role = 'user';
  newUser.save(function(err, user) {
    if (err) return validationError(res, err);
    var token = jwt.sign({
      _id: user._id
    }, config.secrets.session, {
      expiresInMinutes: 60 * 5
    });
    res.json({
      token: token
    });
  });
};

/**
 * Get a single user
 */
exports.show = function(req, res, next) {
  var userId = req.params.id;

  User.findById(userId, function(err, user) {
    if (err) return next(err);
    if (!user) return res.send(401);
    res.json(user.profile);
  });
};

/**
 * Deletes a user
 * restriction: 'admin'
 */
exports.destroy = function(req, res) {
  User.findByIdAndRemove(req.params.id, function(err, user) {
    if (err) return res.send(500, err);
    return res.send(204);
  });
};

/**
 * Updates a user
 */
exports.update = function(req, res) {
  User.findById(req.body._id).exec(function(err, user) {
    user.linkedin = req.body.linkedin
    if (err) return res.send(500)
    user.save(function(err, user) {
      if (err) return res.send(500)
      return res.send(200)
    })
  })
}

// exports.publish = function(req, res){
//   var userId2 = req.body._id;
//   console.log(userId2, "req.body._id")
//   console.log('hit')
  
// }

/**
 * Change a users password
 */
exports.changePassword = function(req, res, next) {
  var userId = req.user._id;
  var oldPass = String(req.body.oldPassword);
  var newPass = String(req.body.newPassword);

  User.findById(userId, function(err, user) {
    if (user.authenticate(oldPass)) {
      user.password = newPass;
      user.save(function(err) {
        if (err) return validationError(res, err);
        res.send(200);
      });
    } else {
      res.send(403);
    }
  });
};
exports.makeWatson = function (req, res) {
  console.log(req.body, 'req.bodyyyyyyyyyyyyyyyyyyyyyyyyyyyyy')
  console.log('hit on backend')
var user_modeling = watson.user_modeling({
  username: '06dae54a-7ee4-463b-bc16-6cf840af3187',
  password: 'RKkfjuMPX4fU',
  version: 'v2'
});

user_modeling.profile({
  text: req.body.traitObj
  },
  function (err, response) {
    if (err)
      console.log('error:', err);
    else{
      
      
  User.findById(req.body._id).exec(function(err, user) {

    user.watsonData = response
    if (err) return res.send(500)
    user.save(function(err, user) {
      if (err) return res.send(500)
        console.log('hit user saved')
      return res.send(200)
    })
  })
  }
});
}

// exports.postWatson

/**
 * Get my info
 */
exports.me = function(req, res, next) {
  var userId = req.user._id;
  User.findOne({
    _id: userId
  }, '-salt -hashedPassword', function(err, user) { // don't ever give out the password or salt
    if (err) return next(err);
    if (!user) return res.json(401);
    res.json(user);
  });
};

/**
 * Authentication callback
 */
exports.authCallback = function(req, res, next) {
  res.redirect('/');
};