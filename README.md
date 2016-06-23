## Getting Started

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-es3ify --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-es3ify');
```

## Usage
Define `es3ify` property in your grunt configuration file. It supports the common used globbing
pattern (`src`, `dest`, `cwd`, `flatten`, `expand`). Ensure that only JavaScript are matched
or the plugin throws an exception.

```js
grunt.initConfig({

  es3ify: {

    // task target 'build'
    build: {
      src: "js/lib/**/*.js",
      dest: "target/"
    },

    fooBar: {
      cwd: "js/app/",
      src: "**/*.js",
      dest: "target"
    }
  }
});
```


