import express = require("express");
import UserBusiness = require("./../app/business/UserBusiness");
import IBaseController = require("./interfaces/base/BaseController");
import IUserModel = require("./../app/model/interfaces/UserModel");



class UserController implements IBaseController<UserBusiness> {

    create(req: express.Request, res: express.Response): void {
        var user: IUserModel = <IUserModel>req.body;
        var userBusiness = new UserBusiness();
        userBusiness.create(user, (err, result) => {
            if (err)
                res.send(err);
            else {
                res.send(result);
            }
        });
    }

    update(req: express.Request, res: express.Response): void {
        var user: IUserModel = <IUserModel>req.body;
        var _id: string = req.params._id;
        var userBusiness = new UserBusiness();
        userBusiness.update(_id, user, (err, result) => {
            if (err)
                res.send(err);
            else {
                res.send(result);
            }
        });
    }

    delete(req: express.Request, res: express.Response): void {

    }

    retrieve(req: express.Request, res: express.Response): void {
        var userBusiness = new UserBusiness();
        userBusiness.retrieve((err, result) => {
            if (err)
                res.send(err);
            else {
                res.send(result);
            }
        });
    }

    findById(req: express.Request, res: express.Response): void {
        var _id: string = req.params._id;
        var userBusiness = new UserBusiness();
        userBusiness.findById(_id, (err, result) => {
            if (err)
                res.send(err);
            else {
                res.send(result);
            }
        });
    }
}
export = UserController;    