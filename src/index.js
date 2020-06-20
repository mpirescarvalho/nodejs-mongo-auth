const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require("./controllers/authController.js")(app);
require("./controllers/projectController.js")(app);

app.get("/", (req, res) => {
	res.send({ message: "Hello Auth" });
});

app.listen(3000);
