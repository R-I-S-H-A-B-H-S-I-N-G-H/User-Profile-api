const { default: mongoose } = require("mongoose");
const User = require("../Models/User");
const { encodePassword, comparePassword } = require("../Utils/PasswordUtil");

exports.get = async (id) => {
	if (!mongoose.isValidObjectId(id)) return { msg: "invalid object id" };
	try {
		return User.findById(id);
	} catch (error) {
		// console.log("error", error);
		// return { error: error };
	}
};

exports.login = async (username, password) => {
	const user = await User.findOne({ "profile.username": username });
	if (!user) return { msg: "user not found" };

	const isValidPassword = await comparePassword(password, user.password);
	if (isValidPassword !== true) return { msg: "Incorrect password" };
	return user;
};

exports.create = async (user = User) => {
	user.password = await encodePassword(user.password);
	console.log(user);

	return User.create(user);
};

exports.update = async (user = User) => {
	if (!mongoose.isValidObjectId(user.id)) return { msg: "invalid object id" };
	return User.updateOne({ _id: user.id }, user);
};
