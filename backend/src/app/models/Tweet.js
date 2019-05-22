const mongoose = require("mongoose");

const TweetSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true
  },
  imageURL: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  ativo: {
    type: Boolean,
    required: true
  }
});

module.exports = mongoose.model("Tweet", TweetSchema);
