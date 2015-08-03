var Index = require("./app/controllers/index");
var Detail = require("./app/controllers/detail");
var Admin = require("./app/controllers/admin");
var User = require("./app/controllers/user");
var Comment = require("./app/controllers/comment");

module.exports = function(app) {

    app.use(function(req, res, next) {
        var _user = req.session.user;
        app.locals.user = _user;
        next();
    });

    //首页
    app.get("/", Index.index);
    //detail
    app.get("/detail/:id", Detail.detail);

    //后台管理baby信息
    app.get("/admin/baby/list", User.signinRequired, User.adminRequired, Admin.babyList);
    //后台删除
    app.delete("/admin/baby/list", User.signinRequired, User.adminRequired, Admin.babyDel);
    //后台录入baby信息
    app.get("/admin/baby/add", User.signinRequired, User.adminRequired, Admin.babyAdd);
    //后台修改baby信息
    app.get("/admin/baby/update/:id", User.signinRequired, User.adminRequired, Admin.babyUpdate);
    //后台接收前台发送baby信息
    app.post("/admin/baby/save", User.signinRequired, User.adminRequired, Admin.saveImg, Admin.babySave);

    //用户
    app.post("/user/signup", User.signup);
    app.post("/user/signin", User.signin);
    app.get("/logout", User.logout);
    app.get("/admin/userlist", User.signinRequired, User.adminRequired, User.list);
    app.delete("/admin/userlist", User.signinRequired, User.adminRequired, User.del);

    //评论
    app.post('/user/comment', User.signinRequired, Comment.Save);
};