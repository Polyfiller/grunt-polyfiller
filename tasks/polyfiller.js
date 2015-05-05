/*!
 * grunt-polyfiller
 *
 * @author Abashkin Alexander <monolithed@gmail.com>
 * @license MIT, 2015
 */

'use strict';

var Polyfiller = require('polyfiller');

module.exports = function (grunt) {
	grunt.registerMultiTask('polyfiller', 'A polyfill combinator',
		function () {
			var options = this.options(),
				sources = '';

			var polyfiller = new Polyfiller(options);

			var features = polyfiller.find(options.features, function () {
				if (options.process) {
					sources += options.process.apply(this, arguments);
				}
			}, this);

			if (options.process) {
				sources = polyfiller.options.wrapper(sources);
			}
			else {
				sources = polyfiller.pack(features);
			}

			var file = this.data.dest;

			grunt.file.write(file, sources);
			grunt.log.oklns('File "' + file + '" created.');
		}
	);
};
