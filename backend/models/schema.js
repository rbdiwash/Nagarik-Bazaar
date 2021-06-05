const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  keySpecs: {
    type: String,
    // required: true,
  },
  category: {
    type: String,
    // required: true,
  },

  description: {
    type: String,
    required: true,
  },
  priceBefore: {
    type: String,
    // required: true,
  },
  priceAfter: {
    type: String,
    // required: true,
  },

  image: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  email: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  password: {
    type: String,
    required: true,
    min: 6,
    max: 1024,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

let User = mongoose.model("Users", userSchema);
let Post = mongoose.model("Posts", PostSchema);

module.exports = {
  User,
  Post,
};
