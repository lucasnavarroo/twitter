const express = require("express");
const validate = require("express-validation");
const handle = require("express-async-handler");

const routes = express.Router();

const controllers = require("./app/controllers");
const validators = require("./app/validators");

//tweets
routes.get("/tweets", handle(controllers.TweetController.index));
routes.get("/tweets/:id", handle(controllers.TweetController.show));
routes.post(
  "/tweets",
  validate(validators.Tweet),
  handle(controllers.TweetController.store)
);
routes.put(
  "/tweets/:id",
  validate(validators.Tweet),
  handle(controllers.TweetController.update)
);
routes.delete("/tweets/:id", handle(controllers.TweetController.destroy));

module.exports = routes;
