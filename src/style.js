const string = `.skin * {
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

/* 鼻子的下部分为三角形 */
/* 用 border 来制作三角形：将 div 的宽高设为0，border 设为10px，底部的 border 去掉，左右两边的 border 设为透明 */
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
/* 鼠标浮到鼻子上，鼻子会晃动 */
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
  transform-origin: center bottom; /* 以底部的中点为基点晃动 */
  animation: wave 300ms infinite linear;
}
/* 鼻子的上部分为圆弧 */
/* 把 border-radius 的左下和右下设为0，可得到上圆弧 */
.yuan {
  position: absolute;
  width: 20px;
  height: 6px;
  top: -16px;
  left: -10px;
  border-radius: 10px 10px 0 0;
  background: black;
}

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
/* 用伪元素来做眼白部分，伪元素默认写上 content 和 display */
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

/* 嘴分为上下两部分，上部分又分为左右两部分 */
.mouth {
  width: 200px;
  height: 200px;
  position: absolute;
  left: 50%;
  top: 170px;
  margin-left: -100px;
}
/* 嘴上的两个部分分别用两个圆角矩形表示 */
/* 左部分矩形的左边设为圆角，上边设为透明，右边用一个伪元素矩形遮住，然后再顺时针旋转15度 */
/* 右部分矩形的右边设为圆角，上边设为透明，左边用一个伪元素矩形遮住，然后再逆时针旋转15度 */
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

/* 嘴下的部分是两个圆角矩形，位于最底层，其中 yuan2 在 yuan1 的里面 */
/* 用 overflow: hidden 遮住多出来的部分 */
.mouth .down {
  height: 180px;
  position: absolute;
  top: 5px;
  width: 100%;
  overflow: hidden;
}
.mouth .down .yuan1 {
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
.mouth .down .yuan1 .yuan2 {
  width: 200px;
  height: 300px;
  background: #ff485f;
  position: absolute;
  bottom: -155px;
  left: 50%;
  margin-left: -100px;
  border-radius: 100px;
}

.face {
  position: absolute;
  border: 3px solid black;
  width: 88px;
  height: 88px;
  left: 50%;
  top: 200px;
  margin-left: -44px;
  z-index: 3;
}
.face.left {
  transform: translateX(-180px);
  background: #ff0000;
  border-radius: 50%;
}
.face.right {
  transform: translateX(180px);
  background: #ff0000;
  border-radius: 50%;
}
`
export default string