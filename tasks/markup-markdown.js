/* jshint node:true */
var _ = require('lodash');

var MarkupMarkdown = require('node-markup-markdown');

module.exports = function (grunt) {
  'use strict';

  grunt.registerMultiTask(
    'markup-markdown',
    'A grunt wrapper for the node-markup-markdown task.',

    function() {
      var options = this.options({});

      this.files.forEach(function(fileDescription) {
        fileDescription.src.forEach(function (file) {

          grunt.log.writeln('Processing ' + file);

          var text = grunt.file.readFile(file.src);
          var processed = MarkupMarkdown.parse(text, options);

          grunt.writeFile(fileDescription.dest, processed);
        });
      });
    }
  );
};