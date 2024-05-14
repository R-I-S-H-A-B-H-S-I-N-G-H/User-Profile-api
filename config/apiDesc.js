exports.ApiDesc = {
	TITLE: "API DESCRIPTION",
	"/user/{id}": {
		method: "GET",
		param: ["id"],
		auth: "jwt-token",
	},
	"/user/list": {
		method: "GET",
		auth: "jwt-token",
		description: "gets all the profiles of public user for normal user and all the profiles of users Public/Private for ADMIN user",
	},
	"/user": {
		method: "POST",
		auth: "jwt-token",
		body: {
			password: "password1234$",
			profile: {
				username: "username13test",
				email: "username13test@gmail.com",
				bio: "test biodd",
				photo: "photo_url",
			},
			role: "USER",
		},
	},
	"/user/login": {
		method: "POST",
		body: {
			password: "password",
			username: "user",
		},
	},
	"/user/{id}": {
		method: "PUT",
		body: {
			profile: {
				username: "user",
				email: "user@gmail.com",
				bio: "test biodd",
				photo: "photo urld",
			},
			_id: "664283d70bb9350a237dfe40",
			password: "$2b$10$lYrkP4.5XMK3FQQHE5Xfzehy5cfau8Yne1WQS5PkLMq8Z2/fOlEju",
			role: "USER",
			isPublic: true,
			__v: 0,
		},
	},
};
