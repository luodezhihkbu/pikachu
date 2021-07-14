import string from './style.js'

const codeText = document.querySelector('#code-text')
const codeStyle = document.querySelector('#code-style')

let n = 1
codeText.innerText = string.substr(0, n)
codeStyle.innerHTML = string.substr(0, n)

let time = 20
const run = () => {
  n += 1
  if (n > string.length) {
    window.clearInterval(id)
    return
  }
  codeText.innerText = string.substr(0, n)
  codeStyle.innerHTML = string.substr(0, n)
  codeText.scrollTop = codeText.scrollHeight
}
const play = () => {
  return setInterval(run, time)
}
const pause = () => {
  window.clearInterval(id)
}
let id = play()

$('#btnPause').on('click', () => {
  pause()
})
$('#btnSlow').on('click', () => {
  pause()
  time = 200
  id = play()
})
$('#btnNormal').on('click', () => {
  pause()
  time = 20
  id = play()
})
$('#btnFast').on('click', () => {
  pause()
  time = 0
  id = play()
})

$('button').on('click', function(e){
  let $button = $(e.currentTarget)
  $button.addClass('active')
    .siblings('.active').removeClass('active')
})