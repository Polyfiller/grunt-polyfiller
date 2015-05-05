'use strict';

var fs    = require('fs'),
	utils = require('util');

exports.tests = {
	'polyfiller': function (test) {
		var fixtures = fs.readFileSync('cache/actual.js', 'utf8'),
			expected = fs.readFileSync('tests/expected.js', 'utf8');

		test.equal(fixtures, expected);
		test.done();
	}
};
