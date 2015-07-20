var moment = require('moment');
var _ = require('underscore');
var Baby = require('../models/baby');

//后台管理列表
exports.babyList = function(req, res) { //request要求, response响应

	Baby.fetch(function(err, babies) {
		if (err) console.log(err);
		res.render('admin-list', {
			title: '后台管理列表',
			babies: babies
		});
	});
};

//后台录入baby信息
exports.babyAdd = function(req, res) {
	res.render('admin-add', {
		title: '后台录入页',
		baby: {
			_id: '',
			title: '',
			name: '',
			old: '',
			img: '',
			summary: ''
		}
	});
};

//后台修改baby信息
exports.babyUpdate = function(req, res) {
	var id = req.params.id;
	if (id) {
		Baby.findById(id, function(err, baby) {
			if (err) console.log(err);
			res.render('admin-add', {
				title: '后台更新页',
				baby: baby
			});
		});
	}
};


//接收前台录入的baby信息
exports.babySave = function(req, res) {

	var id = req.body._id;
	//var babyObj = req.body.baby;
	var babyObj = {
		_id: id,
		title: req.body.title,
		name: req.body.name,
		old: req.body.old,
		img: req.body.img,
		summary: req.body.summary
	};

	//console.log(babyObj);
	var _baby;

	if (id) {
		Baby.findById(id, function(err, baby) {
			if (err) console.log(err);
			//babyObj对象覆盖baby对象（如有重复），返回baby对象
			_baby = _.extend(baby, babyObj);
			_baby.save(function(err, baby) {
				if (err) console.log(err);
				console.log('Successfully saved -- ' + moment(baby.meta.createAt).format('YYYY-MM-DD HH:mm:ss'));
				res.redirect('/detail/' + baby._id);
			})
		})
	} else {
		_baby = new Baby({
			title: babyObj.title,
			name: babyObj.name,
			old: babyObj.old,
			img: babyObj.img,
			summary: babyObj.summary
		})
		_baby.save(function(err, baby) {
			if (err) console.log(err);
			console.log('Successfully saved -- ' + moment(baby.meta.createAt).format('YYYY-MM-DD HH:mm:ss'));
			res.redirect('/detail/' + baby._id);
		})
	}

};


//删除
exports.babyDel = function(req, res) {

	var id = req.query.id;
	if (id) {
		Baby.remove({
			_id: id
		}, function(err, baby) {
			if (err) {
				console.log(err);
				res.json({
					success: 0
				})
			} else {
				res.json({
					success: 1
				})
			}
		})
	}

};