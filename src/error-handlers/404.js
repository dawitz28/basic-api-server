'use strict';

module.exports = (err, req, res, next) => {
    res.status(404).json({status: 404, msg:' not found'});
}