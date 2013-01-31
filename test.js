var vkey = require('./index')

document.body.innerHTML = '<p>Type into the input box. \
                          You should see the lowercased version of what key you last typed. \
                          If you note an inconsistency, fix it and make a PR against <a href="https://github.com/chrisdickinson/vkey">the vkey repo.</a>'


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
