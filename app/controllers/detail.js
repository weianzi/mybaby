var Baby = require('../models/baby');

exports.detail = function(req, res) {

	var id = req.params.id;

	Baby.findById(id, function(err, baby) {

		if (err) console.log(err);
		res.render('detail', {
			title: '详情页',
			baby: baby
		})
	})

};