
var Index = require("./app/controllers/index");
var Detail = require("./app/controllers/detail");
var Admin = require("./app/controllers/admin");

module.exports = function (app) {

    //首页
    app.get("/", Index.index);

    //detail
    app.get("/detail/:id", Detail.detail);

    //后台管理baby信息
    app.get("/admin/baby/list", Admin.babyList); 
    //后台删除
    app.delete("/admin/baby/list", Admin.babyDel); 

    //后台录入baby信息
    app.get("/admin/baby/add", Admin.babyAdd);

    //后台修改baby信息
    app.get("/admin/baby/update/:id", Admin.babyUpdate);

    //后台接收前台发送baby信息
    app.post("/admin/baby/save", Admin.babySave);

};