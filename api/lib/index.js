/*
* @Author: Taha İPEK
* @Date: 2016-10-17 00:59:37
* @Last Modified by:   Taha İPEK
* @Last Modified time: 2016-10-17 00:59:37
*/
/// <reference path="../typings/tsd.d.ts" />
var express = require("express");
var bodyParser = require("body-parser");
var BaseRoutes = require("./config/routes/base/BaseRoutes");

var app = express();
var port = parseInt(process.env.PORT, 10) || 5000;
app.set("port", port);
app.use(bodyParser.json());
app.use(new BaseRoutes().routes);
app.listen(port, function () {
    console.log("Running at localhost: " + port);
});
