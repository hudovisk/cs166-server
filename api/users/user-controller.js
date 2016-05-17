var User = require('./user-model');

module.exports.getMe = function(req, res, next) {
    User.findById(req.user._id, function(err, user) {
        if(err) return next(err);

        return res.status(200).json({me: user});
    });
};
