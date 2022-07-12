const mongoose = require("mongoose");

const userSchema = {
  name: String,
  email: String,
  mobile: String,
  subject: String,
  helptext: String,
};

const UserData = mongoose.model("user", userSchema);

module.exports = UserData;
