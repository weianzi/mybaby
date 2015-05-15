/**
 * Created by ancool on 2015/5/13.
 */

var Index = require("./app/controllers/index");


module.exports = function (app) {

    //index
    app.get("/", Index.index);


}