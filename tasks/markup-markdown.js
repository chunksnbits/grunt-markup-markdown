/* jshint node:true */
var _ = require('lodash');
var htmlEscape = require('html-escape');

var MarkupMarkdown = require('node-markup-markdown');

function processJSON (contents, options) {

  function recurseProcessJSON (contents) {
    _.each(contents, function (value, key) {
      if (_.isObject(value)) {
        contents[key] = recurseProcessJSON(value);
      }
      else {
        if (options.htmlSafe) {
          value = htmlEscape(value);
        }
        contents[key] = MarkupMarkdown.parse(, options);
      }
    });
    return contents;
  }
  return recurseProcessJSON(contents);
}

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

          var processed;

          if (/\.json$/.test(file)) {
            var contents = grunt.file.readJSON(file);
            processed = JSON.stringify(processJSON(contents, options));
          }
          else {
            var text = grunt.file.read(file);
            processed = MarkupMarkdown.parse(text, options);
          }

          grunt.file.write(fileDescription.dest, processed);
        });
      });
    }
  );
};