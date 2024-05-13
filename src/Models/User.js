const mongoose = require("mongoose");
const { ROLE } = require("../Enums/Role");
const Schema = mongoose.Schema;

// Define the user schema
const UserSchema = new Schema({
	password: {
		type: String,
		required: true,
	},
	profile: {
		username: {
			type: String,
			required: true,
			unique: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		bio: {
			type: String,
			default: "",
		},
		photo: {
			type: String,
			default: "",
		},
	},
	role: {
		type: String,
		enum: [ROLE.ADMIN, ROLE.USER],
		default: "user",
	},
	isPublic: {
		type: Boolean,
		default: false,
	},
});

// Create and export the User model
const User = mongoose.model("User", UserSchema);
module.exports = User;
