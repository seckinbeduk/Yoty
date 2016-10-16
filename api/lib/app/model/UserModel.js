var UserModel = (function () {
    function UserModel(userModel) {
        this._userModel = userModel;
    }
    Object.defineProperty(UserModel.prototype, "name", {
        get: function () {
            return this._userModel.Name + " " + this._userModel.Surname;
        },
        enumerable: true,
        configurable: true
    });
    return UserModel;
})();
Object.seal(UserModel);
module.exports = UserModel;
