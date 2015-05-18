/**
 * Created by ancool on 2015/5/13.
 */

var Index = require("./app/controllers/index");
var Detail = require("./app/controllers/detail");

module.exports = function (app) {

    //Index
    app.get("/", Index.index);

    //detail
    app.get("/detail/:id", Detail.detail);

}