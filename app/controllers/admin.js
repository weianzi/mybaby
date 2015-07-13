var _ = require("underscore");
var Baby = require("../models/baby");

//后台管理列表
exports.babyList = function(req, res) { //request要求, response响应

	Baby.fetch(function(err, babys) {
		if (err) console.log(err);
		res.render("admin-list", {
			title: "后台管理列表",
			babys: babys
		});
	});
};

//后台录入baby信息
exports.babyAdd = function(req, res) {
	res.render('admin-add', {
		title: '后台录入页',
		baby: {
			title: "1",
			name: "1",
			old: "1",
			img: "1",
			summary: "1"
		}
	});
};

//后台修改baby信息
exports.babyUpdate = function(req, res) {
	var id = req.params.id;
	if (id) {
		Baby.findById(id, function(err, baby) {
			if (err) console.log(err);
			res.render("admin-add", {
				title: "后台更新页",
				baby: baby
			});
		});
	}
};


//后台接收前台发送baby信息
exports.babySave = function(req, res) {

	var id = req.params._id;
	var babyObj = req.params.baby;
	console.log(babyObj);
	var _baby;

	if (id) {
		Baby.findById(id, function(err, baby) {
			if (err) console.log(err);
			//babyObj对象覆盖baby对象（如有重复），返回baby对象
			_baby = _.extend(baby, babyObj);
			_baby.save(function(err, baby) {
				if (err) console.log(err);
				res.redirect("/detail/" + baby._id);
			});
		});
	} else {
		_baby = new Baby({
			title: babyObj.title,
			name: babyObj.name,
			old: babyObj.old,
			img: babyObj.img,
			summary: babyObj.summary
		});
		_baby.save(function(err, baby) {
			if (err) console.log(err);
			res.redirect("/detail/" + baby._id);
		});
	}

};