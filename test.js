var vkey = require('./index')

document.body.innerHTML = '<p>Type into the input box. \
                           You should see either the uppercase letter or lowercase symbol you just typed.<br />\
                           Or, if it\'s a control key, you should see the <code>&lt;name&gt;</code> of the key. <br />\
                           If you note an inconsistency, <a href="https://github.com/chrisdickinson/vkey/issues">open an issue on the vkey repo.</a><br />\
                           Please include your <strong>browser and version</strong>, <strong>operating system</strong>, and if possible your <strong>keyboard type</strong>.'

document.body.appendChild(document.createElement('input'))

var pre = document.createElement('pre')

document.body.appendChild(pre)

if(document.body.attachEvent) document.body.onkeydown = function(ev) {
  ev = window.event

  pre.textContent = pre.innerText = 'keyCode is '+ev.keyCode + ', vkey is ' + vkey[ev.keyCode]
  return false
}
else document.body.addEventListener('keydown', function(ev) {
  ev.preventDefault()
  pre.textContent = pre.innerText = 'keyCode is '+ev.keyCode + ', vkey is ' + vkey[ev.keyCode]
}, true)
