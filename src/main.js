// 动态展示的原理：把 css 样式转化成字符串，然后用 setInterval 把字符串一个字符一个字符的在页面展示出来
import string from './style.js'

const demo = document.querySelector('#demo')
const demo2 = document.querySelector('#demo2')

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
const play = () => {
  return setInterval(run, time) // setInterval 接受的第一个参数是函数，所以 run 后面不要加括号
}
const pause = () => {
  window.clearInterval(id)
}
let id = play() // id 只能放在全局，因为 play 和 pause 都会用到 id

document.querySelector('#btnPause').onclick = () => {
  pause()
}
document.querySelector('#btnPlay').onclick = () => {
  id = play()
}
document.querySelector('#btnSlow').onclick = () => {
  pause()
  time = 300
  id = play()
}
document.querySelector('#btnNormal').onclick = () => {
  pause()
  time = 100
  id = play()
}
document.querySelector('#btnFast').onclick = () => {
  pause()
  time = 0
  id = play()
}
