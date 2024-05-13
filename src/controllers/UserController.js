const { get, create, update, login } = require("../services/UserService");

exports.get = async (req, res) => {
	const { id } = req.query;
	const user = await get(id);
	res.json(user);
};

exports.login = async (req, res) => {
	const { username, password } = req.body;
	const result = await login(username, password);
	res.json(result);
};

exports.create = async (req, res) => {
	const user = req.body;
	const result = await create(user);
	res.json(result);
};

exports.update = async (req, res) => {
	const user = req.body;
	const result = await update(user);
	res.json(result);
};
