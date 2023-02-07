require("dotenv").config();
const mongoose = require("mongoose");

exports.initDatabase = () => {
  mongoose
    .connect(process.env.MONGO_URI, { useNewUrlParser: true })
    .then(() => console.log("DB Connected"));

  mongoose.connection.on("error", (err) => {
    console.log(`DB connection error: ${err.message}`);
  });
};
