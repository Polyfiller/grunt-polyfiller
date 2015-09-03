# grunt-polyfiller

[![npm version badge](https://img.shields.io/npm/v/grunt-polyfiller.svg)](https://www.npmjs.org/package/grunt-polyfiller)
[![Build Status](https://travis-ci.org/Polyfiller/grunt-polyfiller.png)](https://travis-ci.org/Polyfiller/grunt-polyfiller)
[![License](https://img.shields.io/badge/license-MIT-brightgreen.svg)](LICENSE.txt)


> Grunt task for [Polyfiller](https://github.com/Polyfiller/polyfiller) 


## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-polyfiller --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-polyfiller');
```

## grunt-polyfiller task
_Run this task with the `grunt polyfiller` command._

Task targets, files and options may be specified according to the grunt [Configuring tasks](http://gruntjs.com/configuring-tasks) guide.

### Usage Example

```js
module.exports = function (grunt) {
	grunt.config.init({
		polyfiller: {
			build: {
				options: {
					features: ['Promise', 'Fetch']
				},

				dest: 'polyfills.js'
			}
		}
	});

	grunt.loadNpmTasks('grunt-polyfiller');
	grunt.registerTask('default', ['polyfiller']);
};
```


### Options

Type: `Object`.

All of options are the options for the [Polyfiller](https://github.com/Polyfiller/polyfiller) itself, except these ones: 


#### process

Type: `Function(Object:feature, String:name, Array:features)` <br />

This option as an advanced way to control the file contents that are created.

```js
....
options: {
	process: function (feature, name, features) {
		return feature.source;
	}
}
....
```

For more details see the [Polyfiller](https://github.com/Polyfiller/polyfiller) documentation

### Tests

```
grunt test
```


### License

MIT

Task submitted by [Alexander Abashkin](https://github.com/monolithed)
