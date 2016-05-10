var User = require('../models/user');

//注册
exports.signup = function(req, res) {
	var _user = {
		name: req.body.signupName,
		password: req.body.signupPassword
	};

	User.findOne({
		name: _user.name
	}, function(err, user) {
		if (err) console.log(err);

		if (user) {
			res.json({success: 0});
			console.log('该用户名已被注册');
		} else {
			user = new User(_user);
			user.save(function(err, user) {
				if (err) {
					console.log(err);
					return;
				};
				req.session.user = user;
				//res.redirect('/');
				res.json({success: 1});
				console.log('注册成功');
			});

		}
	})

};

//登录
exports.signin = function(req, res) {
	var _user = {
		name: req.body.signinName,
		password: req.body.signinPassword
	};

	User.findOne({
		name: _user.name
	}, function(err, user) {
		if (err) console.log(err);
		if (!user) {
			console.log('用户名不存在');
			res.json({success: -1});
		} else {
			user.comparePassword(_user.password, function (err, isMatch) {
				if(err) console.log(err);
				if(isMatch){
					req.session.user = user;
					console.log(user.name + '登录成功');
					res.json({success: 1});
				} else {
					console.log('密码错误');
					res.json({success: 0});
				}
			})
		}
	})

};


//退出
exports.logout = function(req, res) {

	delete req.session.user;
	//delete app.locals.user;

	res.redirect('/');

};

//用户列表
exports.list = function(req, res) {

	User.fetch(function(err, users) {
		if (err) console.log(err);

		res.render('user-list', {
			title: '用户列表页',
			users: users
		})
	});

};

//删除用户
exports.del = function(req, res) {

	var id = req.query.id;
	if (id) {
		User.remove({
			_id: id
		}, function(err, user) {
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


//权限设置 登录才能访问
exports.signinRequired = function(req, res, next){
	var user = req.session.user;
	if(!user){
		return res.redirect('/');
	}
	next();
};


//权限设置 管理员才能访问
exports.adminRequired = function (req, res, next) {
	var user = req.session.user;
	if(user.role < 20){
		return res.redirect('/');
	}
	next();
}