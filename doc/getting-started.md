### Install and Require

#### NPM Package

If your project is using npm, you can install [textcomplete](https://www.npmjs.com/package/textcomplete) package by `npm` command:

```
npm install textcomplete
```

Now it is requireable as a Common JS module:

```js
var Textcomplete = require('textcomplete');
var Textarea = require('textcomplete/lib/textarea');
```

#### Traditional

You can download a released package from the [release page](https://github.com/yuku-t/textcomplete/releases) containing bundled scripts in `dist` directory:

```html
<script src="path/to/textcomplete/dist/textcomplete.js"></script>
<script>
  var Textarea = Textcomplete.editors.Textarea;
</script>
```

Note that these scripts are ignored by the Git repository so that they do not appear on the GitHub Web UI.

### Synopsis

First of all, create an *editor* object. An editor encapsulates an HTML elements where users write texts on. Currently, there is only a {@link Textarea} editor.

```js
var textareaElement = document.getElementById('your-textarea-element')
var editor = new Textarea(elementElement);
```

Initialize a {@link Textcomplete} with the editor and optional {@link Textcomplete~Options}:

```js
var textcomplete = new Textcomplete(editor, {
  dropdown: {
    maxCount: Infinity
  }
})
```

Register an array of {@link Strategy~Properties} to specify its behavior:

```js
textcomplete.register([{
  // Emoji strategy
  match: /(^|\s):(\w+)$/,
  search: function (term, callback) {
    callback(emojies.filter(emoji => { return emoji.startsWith(term); }));
  },
  replace: function (value) {
    return '$1:' + value + ': ';
  }
}]);
```

Now, the `textcomplete` listens keyboard event on the `editor` and render autocomplete dropdown
when one of the registered strategy matches to the current `editor`'s value.
