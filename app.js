/**
 * Created by ancool on 2015-05-13.
 */
var express = require("express");
var port = process.env.PORT || 3000;
var app = express();
var routes = require("routes");

app.set("views","./views");
app.set("views engine","jade");
app.listen(port);

console.log("mybaby started on port" + port);