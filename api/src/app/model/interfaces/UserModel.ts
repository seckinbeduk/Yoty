/// <reference path="../../../../typings/tsd.d.ts" />
import mongoose = require("mongoose");

interface UserModel extends mongoose.Document {
  UserName: string;
  Password: string;

  Name: string;
  Surname: string;
  Mail: string;
  Updated: Date;
  Created: Date;
  UpdatedBy: number;
  CreatedBy: number;
}

export = UserModel;