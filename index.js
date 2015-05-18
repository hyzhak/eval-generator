var co = require('co');

/**
 * Wrap generator
 * @param gen
 * @returns {*|exports}
 */
module.exports = function(gen) {
	return function(done) {
		return co(gen).then(done, done.fail);
	};
};