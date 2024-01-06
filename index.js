const express = require("express");
require("dotenv").config();
const connectDB = require("./config/db");
const User = require("./models/User");
const app = express();

connectDB();
const port = 5000;
// User.create([
//   { firstName: "ahmed", lastName: "mejri", age: 25 },
//   { firstName: "ali", lastName: "mejri", age: 22 },
//   { firstName: "mohamed", lastName: "foulen", age: 55 },
// ])
//   .then((res) => {
//     console.log("data", res);
//   })
//   .catch((err) => {
//     console.log("error", err);
//   });

// User.find()
//   .then((res) => {
//     console.log("data", res);
//   })
//   .catch((err) => {
//     console.log("error", err);
//   });

// const deleteUser = async () => {
//   const user = await User.findById("65997b8ffbac0cb0ddef24e8");

//   console.log("user", user);
//   if (user) {
//     await user.deleteOne();
//     console.log("user deleted");
//   }
// };

// deleteUser();

const updateUser = async () => {
  const user = await User.findById("65997b8ffbac0cb0ddef24e9");

  console.log("user", user);
  if (user) {
    const res = await user.updateOne({
      age: 1000,
    });

    return res;
  }
};
updateUser();

app.listen(port, (err) => {
  err ? console.log("error") : console.log(`server run on port ${port}`);
});
