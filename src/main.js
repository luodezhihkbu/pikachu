// 动态展示的原理：把 css 样式转化成字符串，然后用 setInterval 把字符串一个字符一个字符的在页面展示出来
import string from './style.js'

const demo = document.querySelector('#demo')
const demo2 = document.querySelector('#demo2')
const btnPause = document.querySelector('#btnPause')
const btnPlay = document.querySelector('#btnPlay')
const btnSlow = document.querySelector('#btnSlow')
const btnNormal = document.querySelector('#btnNormal')
const btnFast = document.querySelector('#btnFast')

// 在 demo 里展示出文本内容，同时，在 demo2 里同步加上样式
let n = 1
demo.innerText = string.substr(0, n)
demo2.innerHTML = string.substr(0, n)

// 每隔一段时间，执行 setInterval 里面的函数，并记录每次执行完后返回的 id
// 当 n 大于字符串长度时暂停
let time = 100
const run = () => {
  n += 1
  if (n > string.length) {
    window.clearInterval(id)
    return
  }
  demo.innerText = string.substr(0, n)
  demo2.innerHTML = string.substr(0, n)
  demo.scrollTop = demo.scrollHeight // 滚动条根据页面出现的内容自动往下滚
}
let id = setInterval(() => {
  run()
}, time)

btnPause.onclick = () => {
  window.clearInterval(id)
}
btnPlay.onclick = () => {
  id = setInterval(() => {
    run()
  }, time)
}
btnSlow.onclick = () => {
  window.clearInterval(id)
  time = 300
  id = setInterval(() => {
    run()
  }, time)
}
btnNormal.onclick = () => {
  window.clearInterval(id)
  time = 100
  id = setInterval(() => {
    run()
  }, time)
}
btnFast.onclick = () => {
  window.clearInterval(id)
  time = 0
  id = setInterval(() => {
    run()
  }, time)
}
