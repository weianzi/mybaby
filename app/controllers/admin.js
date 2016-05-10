var moment = require('moment');
var _ = require('underscore');
var Baby = require('../models/baby');
var fs = require('fs')
var path = require('path')

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

//接收上传的图片
exports.saveImg = function(req, res, next) {
	var imgData = req.files.uploadImg;
	var filePath = imgData.path;
	var originalFilename = imgData.originalFilename;
	if (originalFilename) {
    fs.readFile(filePath, function(err, data) {
      var timestamp = Date.now()
      var type = imgData.type.split('/')[1]
      var uploadImg = timestamp + '.' + type
      var newPath = path.join(__dirname, '../../', '/public/upload/' + uploadImg)

      fs.writeFile(newPath, data, function(err) {
        req.uploadImg = uploadImg
        next()
      })
    })
  }
  else {
    next()
  }
}

//接收前台录入的baby信息
exports.babySave = function(req, res) {
	var babyData = req.body.baby;
	var id = babyData._id;
	var babyObj = {
		_id: id,
		title: babyData.title,
		name: babyData.name,
		old: babyData.old,
		img: babyData.img,
		uploadImg: req.uploadImg,
		summary: babyData.summary
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
				//res.redirect('/detail/' + baby._id);
				// res.json({
				// 	success: 1
				// });
			})
		})
	} else {
		_baby = new Baby({
			title: babyObj.title,
			name: babyObj.name,
			old: babyObj.old,
			img: babyObj.img,
			uploadImg: babyObj.uploadImg,
			summary: babyObj.summary
		})
		_baby.save(function(err, baby) {
			if (err) console.log(err);
			console.log('Successfully saved -- ' + moment(baby.meta.createAt).format('YYYY-MM-DD HH:mm:ss'));
			//res.redirect('/detail/' + baby._id);
			// res.json({
			// 	success: 1
			// });
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