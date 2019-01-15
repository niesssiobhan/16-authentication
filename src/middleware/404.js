'use strict';

/**
 *
 * Error handling for invalid route
 * @param {obj} req API Request
 * @param {obj} res API Response
 */
module.exports = (req,res,next) => {
  let error = { error: 'Resource Not Found' };
  res.statusCode = 404;
  res.statusMessage = 'Not Found';
  res.setHeader('Content-Type', 'application/json');
  res.write(JSON.stringify(error));
  res.end();
};