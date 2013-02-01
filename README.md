# vkey

virtual `keyCode` to human name mapping. let's team up to quash all of the `keyCode` inconsistencies that we can!

```javascript

var vkey = require('vkey')

document.body.addEventListener('keydown', function(ev) {
  console.log(vkey[ev.keyCode])
}, false)

```

cobbled together from [Benvie's Keyboard](https://github.com/Benvie/Keyboard) and [MDN](https://developer.mozilla.org/en-US/docs/DOM/KeyboardEvent).

## contributing / making life better for everyone

**EASY MODE, Step 0**: Visit [the test page](http://didact.us/vkey/). Go to **Step 2**.

**Step 1**: get the repo and run the test site.

```bash
$ git clone git://github.com/chrisdickinson/vkey.git
$ cd vkey.git
$ npm install --dev .
$ npm start
$ # open localhost:3030

```

**Step 2**: open the site in all the browsers you have at your command!
mash keys! note inconsistencies!

**Step 3**: open an issue with:

1. your operating system
2. the browser + version
3. (as best as you can describe), what kind of keyboard you're using. images welcome! crude drawings of keyboards less welcome, but still a little welcome.
4. what key you pressed
5. what result you expected
6. what result you got

**Step 3, HARD MODE**: open a pull request with all of the above, and a minimally invasive fix!

## deviations thus far

* meta left and right are reduced to `<meta>`, because no one really seems to support it correctly.
* `<unk>` is coerced to `<menu>` on OSX, since it has no idea what that button is (using a dell keyboard.)

# license

MIT
