const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: String,
  mail: String,
  message: String,
  postAt: String,
});

const UsersModel = mongoose.model("user", userSchema);

module.exports = {
  UsersModel,
};
