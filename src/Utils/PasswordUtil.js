const bcrypt = require("bcrypt");

exports.encodePassword = async (password) => {
	const encrypted = await bcrypt.hash(password, 10);
	return encrypted;
};

exports.comparePassword = async (normalPassword, encodedPassword) => {
	return bcrypt.compare(normalPassword, encodedPassword);
};
