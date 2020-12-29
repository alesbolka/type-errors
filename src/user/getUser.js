const { CUSTOM_PROP } = require('../constants');

/**
 * @type {import('express').Handler}
 */
module.exports = async (req, res, next) => {
  if (![1, 2, 3].includes(req.body.userId)) {
    return next('Wrong user id');
  }
  res.json({
    userId: req.body.userId,
    val: CUSTOM_PROP,
  });
};
