var Baby = require('../models/baby');
var Comment = require('../models/comment');

exports.detail = function(req, res) {

	var id = req.params.id;

	Baby.findById(id, function(err, baby) {
		Comment
			.find({baby: id})
			.populate('from', 'name')
			.populate('reply.from reply.to', 'name')
			.exec(function(err, comments) {
				//console.log(comments);
				//console.log(comments[0].reply[0]);
				if (err) console.log(err);
				res.render('detail', {
					title: '详情页',
					baby: baby,
					comments: comments
				})
			})
	})

};