const jwt = require("jsonwebtoken");
const SECRET_KEY = "shhhh";

exports.generateAuthToken = (data) => {
	return jwt.sign(data, SECRET_KEY, { expiresIn: 60 * 60 });
};

exports.verifyToken = (token) => {
	return jwt.verify(token, SECRET_KEY);
};

exports.decodeToken = (token) => {
	return jwt.decode(token);
};
