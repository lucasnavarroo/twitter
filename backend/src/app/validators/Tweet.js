const Joi = require("joi");

module.exports = {
  body: {
    user: Joi.string().required(),
    imageURL: Joi.string().required(),
    text: Joi.string().required(),
    ativo: Joi.boolean().required()
  }
};
