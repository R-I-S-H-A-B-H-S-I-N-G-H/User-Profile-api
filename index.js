const dotenv = require("dotenv");
const app = require("./src/app");
const mongoose = require("mongoose");

dotenv.config({
	path: "./.env",
});

/**
 *connect to db
 */

mongoose.connect(process.env.DB_URL).then(() => {
	console.log("Connected to db");
});

// start server
const PORT = process.env.PORT;

app.listen(PORT, () => {
	console.log(`Application live at port ${PORT}`);
});
