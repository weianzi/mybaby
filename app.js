/**
 * Created by ancool on 2015-05-13.
 */
var express = require("express");
var port = process.env.PORT || 80;
var app = express();
require("./routes")(app);

app.set("views","./views");
app.set("view engine","jade");
app.listen(port);

console.log("mybaby started on port" + port);