"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = (0, express_1["default"])();
var port = 8080;
app.listen(port, function () {
    console.log("Application is running on port ".concat(port, "."));
});
