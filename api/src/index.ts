/// <reference path="../typings/tsd.d.ts" />

import express = require("express");
import bodyParser = require("body-parser");
import BaseRoutes = require("./config/routes/base/BaseRoutes"); 

var app = express();
var port = parseInt(process.env.PORT, 10) || 5000;
app.set("port", port);
app.use(bodyParser.json());
app.use(new BaseRoutes().routes);
app.listen(port, () => {
    console.log("Running at localhost: " + port);
});
 