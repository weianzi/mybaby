var Comment = require('../models/comment');

exports.Save = function(req, res) {
	var _comment = {
		baby: req.body.commentBaby,
		from: req.body.commentFrom,
		content: req.body.commentContent
	};

	var commentId = req.body.commentId;
	//console.log(commentId);
	//console.log(_comment);
	if (commentId != 'undefined') { //如果是回复
		Comment.findById(commentId,
			function(err, comment) {
				var reply = {
					from: req.body.commentFrom,
					to: req.body.toId,
					content: req.body.commentContent,
					createAt: Date.now()
				}
				//console.log('reply:'+reply);
				comment.reply.push(reply);
				comment.save(function(err, comment) {
					if (err) {
						console.log(err);
					}
					res.json({
						success: 1
					});
				})
			});
	} else {
		var comment = new Comment(_comment);
		comment.save(function(err, comment) {
			if (err) {
				console.log(err);
			}
			res.json({
				success: 1
			});
			//res.redirect('/detail/' + babyId);
		});
	}

};