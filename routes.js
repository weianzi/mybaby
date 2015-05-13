/**
 * Created by ancool on 2015/5/13.
 */

var express = require("express");
var app = express();

//index
app.get("/", function (req, res) {
    res.render("index", {
        title: "mbaby首页"
    })
})