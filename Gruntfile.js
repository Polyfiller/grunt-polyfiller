'use strict';

module.exports = function (grunt) {
	grunt.initConfig({
		polyfiller: {
			test: {
				options: {
					features: [ 'Promise', 'Fetch' ],

					process: function (feature, name, features) {
						if (name == 'Fetch') {
							return '"use strict";'
						}

						return feature.source;
					},

					wrapper: function (content) {
						return 'try {' + content + '} catch (error) {}'
					}
				},

				dest: 'cache/actual.js'
			}
		},

		clean: {
			test: ['cache']
		},

		nodeunit: {
			tasks: ['tests/test.js']
		}
	});

	grunt.loadTasks('tasks');
	grunt.loadNpmTasks('grunt-contrib-nodeunit');
	grunt.loadNpmTasks('grunt-contrib-clean');

	grunt.registerTask('test', ['clean', 'polyfiller:test', 'nodeunit']);
	grunt.registerTask('default', ['test']);
};
