var DataAccess = require("./../../dataAccess/DataAccess");

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

var UserSchema = (function () {
    function UserSchema() {
    }
    Object.defineProperty(UserSchema, "schema", {
        get: function () {
            var schema = mongoose.Schema({
                UserName: { type: String, require: true, index: { unique: true } },
                Password: String,
                Name: String,
                Surname: String,
                Mail: { type: String, require: true, index: { unique: true } },
                Updated: { type: Date, default: Date.now },
                Created: { type: Date, default: Date.now },
                UpdatedBy: Number,
                CreatedBy: Number
            });

            return schema;
        },
        enumerable: true,
        configurable: true
    });
    return UserSchema;
})();
var schema = mongooseConnection.model("Users", UserSchema.schema);
module.exports = schema;
