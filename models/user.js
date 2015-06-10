var mongoose = require("mongoose");
var bcrypt = require("bcryptjs");

// User schema
var userSchema = mongoose.Schema({
	username: {
		type: String
	},
	email: {
		type: String
	},
	password:{
		type:String,
		bcrypt: true
	},
	type:{
		type:String
	}
	
});