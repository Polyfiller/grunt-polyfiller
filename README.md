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

## grunt-transform task
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

#### catalog
Type: `Array` <br />
Default: `[trunk/catalog]`

Have custom polyfills? Add paths to their location here.

```js
var path = require('path');

....
options: {
	catalog: [ 
		path.resolve(__dirname, '../your/catalog') 
	]
}
....
```

#### exclude

Type: `Array` <br />
Default: `[]`

Some polyfills have dependencies that you can exclude here.

```js
....
options: {
	exclude: ['setImmediate']
}
....
```

#### verbose

Type: `Boolean` <br />
Default: `false`

Verbose mode is an option that provides additional details as to what the package is doing.

```js
....
options: {
	verbose: true
}
....
```

#### wrapper

Type: `Function` <br />
Default: `None`

A custom wrapper for your environment

```js
....
options: {
	wrapper: function (source) {
		return ';(function () {' + source + '}.call(self));'
	}
}
....
```

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
