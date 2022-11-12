const express = require("express");
const app = express();

const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("../backend/app/dbConnect");
const route = require("../backend/app/routes");
db();
app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
route(app);
app.listen(3000, () => {
  console.log("http://localhost:3000");
});
