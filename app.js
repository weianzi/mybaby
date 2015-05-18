/**
 * Created by ancool on 2015-05-13.
 */
var express = require("express");
var path = require("path");
var port = process.env.PORT || 3000;
var app = express();

require("./routes")(app);

app.set("views", "./views");
app.set("view engine", "jade");
app.use(express.static(path.join(__dirname, "public")));
app.listen(port);

console.log("mybaby started on port" + port);