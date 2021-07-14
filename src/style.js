const string = `/* 注意看好啦，我要画一只可爱的皮卡丘 */

/* 首先，需要准备皮卡丘的皮 */

.skin * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.skin *::before, .skin *::after {
  box-sizing: border-box;
}
.skin {
  background: #ffe600;
  min-height: 100vh;
  position: relative;
}

/* 接下来，画皮卡丘的鼻子 */

.nose {
  border: 10px solid black;
  border-color: black transparent transparent;
  border-bottom: none;
  width: 0;
  height: 0;
  position: relative;
  left: 50%;
  top: 145px;
  margin-left: -10px;
  z-index: 10;
}
@keyframes wave {
  0% {
    transform: rotate(0deg);
  }
  33% {
    transform: rotate(5deg);
  }
  66% {
    transform: rotate(-5deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
.nose:hover {
  transform-origin: center bottom;
  animation: wave 300ms infinite linear;
}
.noseUp {
  position: absolute;
  width: 20px;
  height: 6px;
  top: -16px;
  left: -10px;
  border-radius: 10px 10px 0 0;
  background: black;
}

/* 把鼠标浮到鼻子上，鼻子会晃动哦 */

/* 接下来，画皮卡丘的眼睛 */

.eye {
  border: 2px solid #000;
  width: 64px;
  height: 64px;
  position: absolute;
  left: 50%;
  top: 100px;
  margin-left: -32px;
  background: #2e2e2e;
  border-radius: 50%;
}
.eye::before {
  content: "";
  display: block;
  border: 3px solid #000;
  width: 30px;
  height: 30px;
  background: #fff;
  border-radius: 50%;
  position: relative;
  left: 4px;
  top: 2px;
}
.eye.left {
  transform: translateX(-100px);
}
.eye.right {
  transform: translateX(100px);
}

/* 然后，画皮卡丘的上嘴唇 */

.mouth {
  width: 200px;
  height: 200px;
  position: absolute;
  left: 50%;
  top: 170px;
  margin-left: -100px;
}
.mouth .up {
  position: relative;
  top: -20px;
  z-index: 1;
}
.mouth .up .lip {
  border: 3px solid black;
  height: 30px;
  width: 100px;
  background: #ffe600;
  border-top-color: transparent;
  position: absolute;
  left: 50%;
  margin-left: -50px;
}
.mouth .up .lip.left {
  border-radius: 0 0 0 50px;
  transform: rotate(-15deg) translateX(-53px);
}
.mouth .up .lip.right {
  border-radius: 0 0 50px 0;
  transform: rotate(15deg) translateX(53px);
}
.mouth .up .lip::before {
  content: "";
  display: block;
  width: 7px;
  height: 30px;
  position: absolute;
  bottom: 0;
  background: #ffe600;
}
.mouth .up .lip.left::before {
  right: -6px;
}
.mouth .up .lip.right::before {
  left: -6px;
}
.mouth .up .lip::after {
  content: "";
  display: block;
  width: 95px;
  height: 3px;
  position: absolute;
  top: -5px;
  background: #ffe600;
}
.mouth .up .lip.left::after {
  left: 1px;
}
.mouth .up .lip.right::after {
  right: 1px;
}

/* 再画小舌头 */

.mouth .down {
  height: 180px;
  position: absolute;
  top: 5px;
  width: 100%;
  overflow: hidden;
}
.mouth .down .tongue1 {
  border: 3px solid black;
  width: 150px;
  height: 1000px;
  position: absolute;
  bottom: 0;
  left: 50%;
  margin-left: -75px;
  border-radius: 75px/300px;
  background: #9b000a;
  overflow: hidden;
}
.mouth .down .tongue1 .tongue2 {
  width: 200px;
  height: 300px;
  background: #ff485f;
  position: absolute;
  bottom: -155px;
  left: 50%;
  margin-left: -100px;
  border-radius: 100px;
}

/* 最后，画红红的小脸蛋 */

.face {
  position: absolute;
  border: 3px solid black;
  width: 88px;
  height: 88px;
  left: 50%;
  top: 200px;
  margin-left: -44px;
  background: #ff0000;
  border-radius: 50%;
}
.face.left {
  transform: translateX(-180px);
}
.face.right {
  transform: translateX(180px);
}

/* 大功告成 */
`
export default string