import DataAccess = require("./../../dataAccess/DataAccess");
import IUserModel = require("./../../model/interfaces/UserModel");

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class UserSchema {

    static get schema() {
        var schema = mongoose.Schema({
            UserName: { type: String, require: true, index: { unique: true } },
            Password: String,

            Name: String,
            Surname: String,
            Mail: { type: String, require: true, index: { unique: true } },

            Updated: { type: Date, default: Date.now },
            Created: { type: Date, default: Date.now },
            UpdatedBy: Number,
            CreatedBy: Number,
        });

        return schema;
    }

}
var schema = mongooseConnection.model<IUserModel>("Users", UserSchema.schema);
export = schema;