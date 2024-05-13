const { verifyToken, decodeToken } = require("../Utils/JwtUtil");
const { ROLE } = require("../Enums/Role");

exports.authenticate = async (req, res, next) => {
	const authHeader = req.headers["authorization"];
	const token = authHeader?.split(" ")[1];
	if (!token || !verifyToken(token)) {
		return res.status(401).json("Unauthorized");
	}

	const tokenContents = decodeToken(token) || {};
	const { id: jwtId, ROLE: role } = tokenContents;

	const { id } = req.query;
	if (role != ROLE.ADMIN && jwtId != id) {
		return res.status(401).json("Unauthorized");
	}

	next();
};
