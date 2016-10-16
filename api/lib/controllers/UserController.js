var UserBusiness = require("./../app/business/UserBusiness");

var UserController = (function () {
    function UserController() {
    }
    UserController.prototype.create = function (req, res) {
        var user = req.body;
        var userBusiness = new UserBusiness();
        userBusiness.create(user, function (err, result) {
            if (err)
                res.send(err);
            else {
                res.send(result);
            }
        });
    };

    UserController.prototype.update = function (req, res) {
        var user = req.body;
        var _id = req.params._id;
        var userBusiness = new UserBusiness();
        userBusiness.update(_id, user, function (err, result) {
            if (err)
                res.send(err);
            else {
                res.send(result);
            }
        });
    };

    UserController.prototype.delete = function (req, res) {
    };

    UserController.prototype.retrieve = function (req, res) {
        var userBusiness = new UserBusiness();
        userBusiness.retrieve(function (err, result) {
            if (err)
                res.send(err);
            else {
                res.send(result);
            }
        });
    };

    UserController.prototype.findById = function (req, res) {
        var _id = req.params._id;
        var userBusiness = new UserBusiness();
        userBusiness.findById(_id, function (err, result) {
            if (err)
                res.send(err);
            else {
                res.send(result);
            }
        });
    };
    return UserController;
})();
module.exports = UserController;
