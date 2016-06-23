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
 */

"use strict";

var grunt = require("grunt");
var path = require("path");

exports.exports = {

  setUp: function (done) {

    this.expectedFile = path.join(__dirname, "expected.js");
    this.resultFile = path.join(__dirname, "result.js");

    done();
  },

  checkContent: function (test) {

    test.ok(grunt.file.exists(this.resultFile), this.resultFile + " does not exist");

    var resultContent = grunt.file.read(this.resultFile, "utf-8");
    var expectedContent = grunt.file.read(this.expectedFile, "utf-8");

    test.equal(resultContent, expectedContent, "content does not match");

    test.done();
  }

};
