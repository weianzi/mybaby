/**
 * Created by ancool on 2015/5/13.
 */

module.exports = function (app) {

    //index
    app.get("/", function (req, res) {
        res.render("index", {
            title: "mybaby首页"
        })
    })


}