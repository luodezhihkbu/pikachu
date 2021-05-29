import string from './style.js'

const demo = document.querySelector('#demo')
const demo2 = document.querySelector('#demo2')

let n = 1
demo.innerText = string.substr(0, n)
demo2.innerHTML = string.substr(0, n)

let time = 50
const run = () => {
  n += 1
  if (n > string.length) {
    window.clearInterval(id)
    return
  }
  demo.innerText = string.substr(0, n)
  demo2.innerHTML = string.substr(0, n)
  demo.scrollTop = demo.scrollHeight
}
const play = () => {
  return setInterval(run, time)
}
const pause = () => {
  window.clearInterval(id)
}
let id = play()

document.querySelector('#btnPause').onclick = () => {
  pause()
}
document.querySelector('#btnSlow').onclick = () => {
  pause()
  time = 200
  id = play()
}
document.querySelector('#btnNormal').onclick = () => {
  pause()
  time = 20
  id = play()
}
document.querySelector('#btnFast').onclick = () => {
  pause()
  time = 0
  id = play()
}

$('button').on('click', function(e){
  let $button = $(e.currentTarget)
  $button.addClass('active')
    .siblings('.active').removeClass('active')
})
