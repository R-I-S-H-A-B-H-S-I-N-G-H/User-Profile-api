const jwt = require("jsonwebtoken");
const SECRET_KEY = "shhhh";

exports.generateAuthToken = (data) => {
	return jwt.sign(data, SECRET_KEY, { expiresIn: 60 * 60 });
};

exports.verifyToken = (token) => {
	try {
		return jwt.verify(token, SECRET_KEY);
	} catch (e) {
		return false;
	}
};

exports.decodeToken = (token) => {
	return jwt.decode(token);
};
