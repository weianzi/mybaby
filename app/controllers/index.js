var Baby = require('../models/baby');

exports.index = function (req, res) { //request要求, response响应
	//console.log('session.user:');
	//console.log(req.session.user);
    Baby.fetch(function(err, babies) {
        
        if (err) console.log(err);

        res.render('index', {
            title: 'mybaby首页',
            babies: babies
        })
    });


};