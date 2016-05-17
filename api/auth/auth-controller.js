var User        = require('../users/user-model');
var jwt         = require('jsonwebtoken');
var tokenSecret = process.env.TOKEN_SECRET || "thisIsSuperSecret";

module.exports.signIn = function(req, res, next) {
  User.findOne({email: req.body.email})
  .select('+password')
  .exec(function(err, user) {
    if(err) {
      return next(err);
    }
    if(!user || !user.comparePassword(req.body.password)) {
      return res.status(401).json({message: 'Incorrect email/password.'});
    }

    var token = jwt.sign({_id: String(user._id), name: user.name, email: user.email}, tokenSecret, {
      expiresIn: "24h"
    });

    return res.status(200).json({token: token});
  });
};

module.exports.signUp = function(req, res, next) {
  if(!User.passwordRegex.test(req.body.password)) {
    return res.status(400).json({message: 'Invalid password.'});
  }

  var user = new User( {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  });

  user.save(function(err) {
    if(err) {
      if(err.code == 11000) {
        return res.status(409).json({message: 'Email already registered.'});
      }
      return next(err);
    }

    return res.status(201).end();
  });
};

module.exports.requireToken = function(req, res, next) {
  var token = req.get('Authorization');

  token = token.split(' ')[1];
  if (token) {
    jwt.verify(token, tokenSecret, function(err, decoded) {
      if (err) {
        return res.status(401).json({message: 'Failed to authenticate token.' });
      }

      req.user = decoded;
      next();
    });
  } else {
    return res.status(403).json({message: 'No token provided.'});
  }
}
