var express = require("express");
var path = require("path");
var port = process.env.PORT || 80;
var app = express();

var mongoose = require("mongoose");
var mongoStore = require("connect-mongo")(express);
var dbUrl = "mongodb://localhost/ancool";
mongoose.connect(dbUrl);

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(bodyParser.json());

app.use(express.cookieParser());
app.use(express.session({
	secret: "ancool",
	store: new mongoStore({
		url: dbUrl,
		collection:"sesstions"
	})
}));

if("development" === app.get("env")){
	app.set("showStackError", true);
	//app.use(express.logger(":method :url :status"));
	app.locals.pretty = true;
}

require("./routes")(app);

app.set("views", "./app/views");
app.set("view engine", "jade");
app.use(express.static(path.join(__dirname, "public")));
app.locals.moment = require("moment");
app.listen(port);

console.log("mybaby started on port" + port);