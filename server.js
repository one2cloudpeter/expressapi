"use strict";
exports.__esModule = true;
var express_1 = require("express");
// Constants
var PORT = 8080;
var HOST = "0.0.0.0";
// App
var app = (0, express_1["default"])();
app.get("/", function (req, res) {
    res.send("Hello World");
});
app.listen(PORT, HOST, function () {
    console.log("Running on http://".concat(HOST, ":").concat(PORT));
});
