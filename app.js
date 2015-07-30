var express = require("express");
var path = require("path");
var port = process.env.PORT || 8080;
var app = express();
var cookieParser = require("cookie-parser");
var session = require("express-session");
var serveStatic = require("serve-static");
var mongoose = require("mongoose");
var mongoStore = require("connect-mongo")(session);
var dbUrl = "mongodb://localhost/ancool";
var bodyParser = require("body-parser");

app.set("view engine", "jade");
app.set("views", "./app/views");
app.use(serveStatic(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

mongoose.connect(dbUrl);

app.use(cookieParser());
app.use(session({
	resave: false,  
    saveUninitialized: true, 
	secret: "ancool",
	store: new mongoStore({
		url: dbUrl,
		collection:"sesstions"
	})
}));

app.locals.moment = require("moment");

if("development" === app.get("env")){
	app.set("showStackError", true);
	//app.use(express.logger(":method :url :status"));
	app.locals.pretty = true;
}

require("./routes")(app);
app.listen(port);
console.log("mybaby started on port:" + port);