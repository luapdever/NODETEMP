require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const homeRoutes = require("./routes/home");
const postRoutes = require("./routes/post");
const { initDatabase } = require("./database/init");

initDatabase();

const app = express();

app.use(morgan("dev"));
app.use(bodyParser.json());

app.use("/", homeRoutes);
app.use("/post", postRoutes);

const port = process.env.SERVER_PORT;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
