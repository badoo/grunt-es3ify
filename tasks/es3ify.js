/*
 *  Copyright (c) 2016 pro!vision GmbH and Contributors
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 *
 *
 * Grunt task that transforms JavaScript from ES5 to ES3 by using 'es3ify'.
 * @module grunt-es3ify
 *
 */

"use strict";

var path = require("path");
var chalk = require("chalk");
var transform = require("es3ify").transform;

module.exports = function(grunt) {

  grunt.registerMultiTask("es3ify", "Transforms ES5 to ES3", function() {

    var options = this.options({
      readOnly: false
    });

    this.files.forEach(function(filePair) {

      filePair.src.forEach(function(src) {

        var dest = filePair.dest;
        if (!dest) {
          dest = src;
        }
        else if (grunt.util._.endsWith(dest, "/")) {
          dest = path.join(dest, src);
        }

        if (options.readOnly) {
          grunt.log.writeln("Will transform " + chalk.cyan(src) + " -> " + chalk.cyan(dest));
        }
        else {
          grunt.verbose.writeln("Transforming " + chalk.cyan(src) + " -> " + chalk.cyan(dest));
          var content = grunt.file.read(src);
          grunt.file.write(dest, transform(content));
        }
      });
    });
  });

};
