const Tweet = require("../models/Tweet");

class TweetController {
  async index() {
    const tweets = await Tweet.find({});
    return tweets;
  }

  async show(req, res) {
    const tweet = await Tweet.findById(req.params.id);

    return res.json(tweet);
  }

  async store(req, res) {
    const tweet = await Tweet.create({
      ...req.body
    });

    return res.json(tweet);
  }

  async update(req, res) {
    const tweet = await Tweet.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });

    return res.json(tweet);
  }

  async destroy(req, res) {
    await Tweet.findByIdAndDelete(req.params.id);

    return res.send();
  }
}

module.exports = new TweetController();  
