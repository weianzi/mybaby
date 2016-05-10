var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//var bcrypt = require('bcrypt');
var bcrypt = require('bcryptjs');
var SALT_WORK_FACTOR = 10;

var UserSchema = new Schema({
	name: {
		unique: true,
		type: String
		
	},
	password: String,
	role: {
		type: Number,
		default: 0
	},
	meta: {
		createAt: {
			type: Date,
			default: Date.now()
		},
		updateAt: {
			type: Date,
			default: Date.now()
		}
	}
})

UserSchema.pre('save', function(next) {
	if (this.isNew) {
		this.meta.createAt = this.meta.updateAt = Date.now()
	} else {
		this.meta.updateAt = Date.now()
	}

	var $this = this;
	bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
		if (err) return next(err);
		bcrypt.hash($this.password, salt, function(err, hash) {
			if (err) return next(err);
			$this.password = hash;
			next();
		})
	})
	//next();
})


UserSchema.methods = {
	comparePassword: function(_pw, cb) {
		bcrypt.compare(_pw, this.password, function(err, isMatch) {
			if (err) return cb(err);
			cb(null, isMatch);
		})
	}
}

UserSchema.statics = {
	fetch: function(cb) {
		return this
			.find({})
			.sort('meta.updateAt')
			.exec(cb)
	},
	findById: function(id, cb) {
		return this
			.findOne({
				_id: id
			})
			.exec(cb)
	}
}

module.exports = UserSchema