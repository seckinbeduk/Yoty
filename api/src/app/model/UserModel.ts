import IUserModel = require("./interfaces/UserModel");

class UserModel {
   
   private _userModel: IUserModel;
   
   constructor(userModel: IUserModel) {
       this._userModel = userModel;
   }
   get name (): string {
       return this._userModel.Name + " " + this._userModel.Surname;
   }
    
}
Object.seal(UserModel);
export =  UserModel;