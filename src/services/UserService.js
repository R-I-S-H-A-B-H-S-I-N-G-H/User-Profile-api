const { default: mongoose } = require("mongoose");
const User = require("../Models/User");
const { encodePassword, comparePassword } = require("../Utils/PasswordUtil");
const { generateAuthToken } = require("../Utils/JwtUtil");

exports.get = async (id) => {
	if (!mongoose.isValidObjectId(id)) return { msg: "invalid object id" };
	try {
		return User.findById(id);
	} catch (error) {
		// console.log("error", error);
		// return { error: error };
	}
};

exports.getList = async (props) => {
	const { isAdmin = false } = props;
	try {
		const filter = {};
		if (!isAdmin) filter.isPublic = true;
		const userList = (await User.find(filter)) || [];

		return userList.map((ele) => ({ ...ele.profile, _id: ele._id, isPublic: ele.isPublic }));
	} catch (error) {
		return { error: error };
	}
};

exports.login = async (username, password) => {
	const user = await User.findOne({ "profile.username": username });
	if (!user) return { msg: "user not found" };

	const isValidPassword = await comparePassword(password, user.password);
	if (isValidPassword !== true) return { msg: "Incorrect password" };
	const tokenPayload = { id: user._id, ROLE: user.role };
	return { token: generateAuthToken(tokenPayload) };
};

exports.create = async (user = User) => {
	user.password = await encodePassword(user.password);
	console.log(user);

	return User.create(user);
};

exports.update = async (user = User) => {
	if (!mongoose.isValidObjectId(user.id)) return { msg: "invalid object id" };
	console.log("UPDATE SERVICE", user);
	return User.updateOne({ _id: user.id }, user);
};
