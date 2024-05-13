const express = require("express");
const cors = require("cors");
const app = express();
const UserRoute = require("./routes/UserRoute");

app.use(cors("*"));

app.use(express.json());

// Routes
app.use("/user", UserRoute);

// handle 404 routes
app.use("*", (req, res, next) => {
	res.status(404).json("THIS API PATH IS NOT DEFINED");
});

module.exports = app;
