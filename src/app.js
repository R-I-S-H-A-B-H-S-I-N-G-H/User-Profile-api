const express = require("express");
const cors = require("cors");
const app = express();
const UserRoute = require("./routes/UserRoute");
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerDocument = require("../swagger.json");
const { ApiDesc } = require("../config/apiDesc");

app.use(cors("*"));

app.use(express.json());

//swagger Route
const swaggerDocs = swaggerJsdoc(swaggerDocument);

// Serve Swagger UI
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Routes
app.use("/user", UserRoute);

// handle 404 routes
app.use("*", (req, res, next) => {
	res.status(404).json(ApiDesc);
});

module.exports = app;
