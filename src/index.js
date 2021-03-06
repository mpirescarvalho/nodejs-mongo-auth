const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require("./app/controllers/index")(app);

app.get("/", (req, res) => {
	res.send({ message: "Hello Auth" });
});

app.listen(3000);
