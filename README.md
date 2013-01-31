# vkey

virtual `keyCode` to human name mapping.

```javascript

var vkey = require('vkey')

document.body.addEventListener('keydown', function(ev) {
  console.log(vkey[ev.keyCode])
}, false)

```

cobbled together from [Benvie's Keyboard](https://github.com/Benvie/Keyboard) and ([MDN](https://developer.mozilla.org/en-US/docs/DOM/KeyboardEvent).

# license

MIT

