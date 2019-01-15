'use strict';

/**
 *
 * Error handling for Server Errors
 * @param {obj} err
 * @param {obj} req - api request
 * @param {obj} res - response sent to client with error information
 * @param {cb} next
 */
module.exports = (err, req, res, next) => {
  console.error('__SERVER_ERROR__', err);
  let error = { error: err.message || err };
  res.statusCode = err.status || 500;
  res.statusMessage = err.statusMessage || 'Server Error';
  res.setHeader('Content-Type', 'application/json');
  res.write( JSON.stringify(error) );
  res.end();
};
