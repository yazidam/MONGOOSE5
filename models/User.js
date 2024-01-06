const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  firstName: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
    require: true,
  },
  age: Number,
});

module.exports = User = model("User", userSchema);
