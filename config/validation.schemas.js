const joi = require("joi");

/**
 * @description This module will return the methods which when called , will return schema object for each type of validation
 */

module.exports = {
  //Return schema object to validate user
  user: () => {
    return joi.object({
      name: joi.string().max(50).required(),
    });
  },

  record: () => {
    return joi.object({
      name: joi.string().max(255).required(),
      description: joi.string().max(255).required(),
    });
  },
};
