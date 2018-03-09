#### *DEPRECATED (This plugin is no longer maintained*
#### Archive:

---

# grunt-markup-markdown

Grunt markup parser with customizable markup rules.
Initially set up to parse [Markdown](https://help.github.com/articles/markdown-basics/) markup language.

## Getting started

This plugin requires Grunt v0.4.0+.

If you haven’t used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you’re familiar with that process, you may install this plugin with this command:

```bash
npm install grunt-markup-markdown --save-dev
```

## The 'markup-markdown' task

Add this

```js
grunt.loadTasks('grunt-markup-markdown');

// Project configuration.
grunt.initConfig({
  'markup-markdown': {
    options: {
      rules: [{
        pattern: /## ([^*\n]+)\n/g,
        replacement: '<headline data-headline-role="h2">$1</headline>'
      }, {
        pattern: /# ([^*\n]+)\n/g,
        replacement: '<headline data-headline-role="h1">$1</headline>'
      }, {
        pattern: /\*\*([^*]+)\*\*/g,
        replacement: '<strong data-strong-role="ci">$1</strong>'
      }, {
        pattern: /\*([^*]+)\*/g,
        replacement: '<em>$1</em>'
      }, {
        pattern: /\[([^\]]+)?\]\(([^)]*)?\)/g,
        replacement: '<a href="$2">$1</a>'
      }]
    },
    files: [{
      src: 'tmp/dev/i18n/locale-en.markdown.json',
      dest: 'tmp/dev/i18n/locale-en.json'
    }]
  }
});
```
