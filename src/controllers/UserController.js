const { get, create, update, login, getList } = require("../services/UserService");

exports.get = async (req, res) => {
	const { id } = req.params;
	const user = await get(id);
	res.json(user);
};

exports.list = async (req, res) => {
	const { id } = req.params;
	const user = await getList(req);
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
	console.log("UPDATE CONTROLLER");
	const user = req.body;
	user.id = req.params.id;
	const result = await update(user);
	res.json(result);
};
