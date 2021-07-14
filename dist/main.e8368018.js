// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"2IwU":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = "/* \u6CE8\u610F\u770B\u597D\u5566\uFF0C\u6211\u8981\u753B\u4E00\u53EA\u53EF\u7231\u7684\u76AE\u5361\u4E18 */\n\n/* \u9996\u5148\uFF0C\u9700\u8981\u51C6\u5907\u76AE\u5361\u4E18\u7684\u76AE */\n\n.skin * {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n.skin *::before, .skin *::after {\n  box-sizing: border-box;\n}\n.skin {\n  background: #ffe600;\n  min-height: 100vh;\n  position: relative;\n}\n\n/* \u63A5\u4E0B\u6765\uFF0C\u753B\u76AE\u5361\u4E18\u7684\u9F3B\u5B50 */\n\n.nose {\n  border: 10px solid black;\n  border-color: black transparent transparent;\n  border-bottom: none;\n  width: 0;\n  height: 0;\n  position: relative;\n  left: 50%;\n  top: 145px;\n  margin-left: -10px;\n  z-index: 10;\n}\n@keyframes wave {\n  0% {\n    transform: rotate(0deg);\n  }\n  33% {\n    transform: rotate(5deg);\n  }\n  66% {\n    transform: rotate(-5deg);\n  }\n  100% {\n    transform: rotate(0deg);\n  }\n}\n.nose:hover {\n  transform-origin: center bottom;\n  animation: wave 300ms infinite linear;\n}\n.noseUp {\n  position: absolute;\n  width: 20px;\n  height: 6px;\n  top: -16px;\n  left: -10px;\n  border-radius: 10px 10px 0 0;\n  background: black;\n}\n\n/* \u628A\u9F20\u6807\u6D6E\u5230\u9F3B\u5B50\u4E0A\uFF0C\u9F3B\u5B50\u4F1A\u6643\u52A8\u54E6 */\n\n/* \u63A5\u4E0B\u6765\uFF0C\u753B\u76AE\u5361\u4E18\u7684\u773C\u775B */\n\n.eye {\n  border: 2px solid #000;\n  width: 64px;\n  height: 64px;\n  position: absolute;\n  left: 50%;\n  top: 100px;\n  margin-left: -32px;\n  background: #2e2e2e;\n  border-radius: 50%;\n}\n.eye::before {\n  content: \"\";\n  display: block;\n  border: 3px solid #000;\n  width: 30px;\n  height: 30px;\n  background: #fff;\n  border-radius: 50%;\n  position: relative;\n  left: 4px;\n  top: 2px;\n}\n.eye.left {\n  transform: translateX(-100px);\n}\n.eye.right {\n  transform: translateX(100px);\n}\n\n/* \u7136\u540E\uFF0C\u753B\u76AE\u5361\u4E18\u7684\u4E0A\u5634\u5507 */\n\n.mouth {\n  width: 200px;\n  height: 200px;\n  position: absolute;\n  left: 50%;\n  top: 170px;\n  margin-left: -100px;\n}\n.mouth .up {\n  position: relative;\n  top: -20px;\n  z-index: 1;\n}\n.mouth .up .lip {\n  border: 3px solid black;\n  height: 30px;\n  width: 100px;\n  background: #ffe600;\n  border-top-color: transparent;\n  position: absolute;\n  left: 50%;\n  margin-left: -50px;\n}\n.mouth .up .lip.left {\n  border-radius: 0 0 0 50px;\n  transform: rotate(-15deg) translateX(-53px);\n}\n.mouth .up .lip.right {\n  border-radius: 0 0 50px 0;\n  transform: rotate(15deg) translateX(53px);\n}\n.mouth .up .lip::before {\n  content: \"\";\n  display: block;\n  width: 7px;\n  height: 30px;\n  position: absolute;\n  bottom: 0;\n  background: #ffe600;\n}\n.mouth .up .lip.left::before {\n  right: -6px;\n}\n.mouth .up .lip.right::before {\n  left: -6px;\n}\n.mouth .up .lip::after {\n  content: \"\";\n  display: block;\n  width: 95px;\n  height: 3px;\n  position: absolute;\n  top: -5px;\n  background: #ffe600;\n}\n.mouth .up .lip.left::after {\n  left: 1px;\n}\n.mouth .up .lip.right::after {\n  right: 1px;\n}\n\n/* \u518D\u753B\u5C0F\u820C\u5934 */\n\n.mouth .down {\n  height: 180px;\n  position: absolute;\n  top: 5px;\n  width: 100%;\n  overflow: hidden;\n}\n.mouth .down .tongue1 {\n  border: 3px solid black;\n  width: 150px;\n  height: 1000px;\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  margin-left: -75px;\n  border-radius: 75px/300px;\n  background: #9b000a;\n  overflow: hidden;\n}\n.mouth .down .tongue1 .tongue2 {\n  width: 200px;\n  height: 300px;\n  background: #ff485f;\n  position: absolute;\n  bottom: -155px;\n  left: 50%;\n  margin-left: -100px;\n  border-radius: 100px;\n}\n\n/* \u6700\u540E\uFF0C\u753B\u7EA2\u7EA2\u7684\u5C0F\u8138\u86CB */\n\n.face {\n  position: absolute;\n  border: 3px solid black;\n  width: 88px;\n  height: 88px;\n  left: 50%;\n  top: 200px;\n  margin-left: -44px;\n  background: #ff0000;\n  border-radius: 50%;\n}\n.face.left {\n  transform: translateX(-180px);\n}\n.face.right {\n  transform: translateX(180px);\n}\n\n/* \u5927\u529F\u544A\u6210 */\n";
var _default = string;
exports.default = _default;
},{}],"epB2":[function(require,module,exports) {
"use strict";

var _style = _interopRequireDefault(require("./style.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var codeText = document.querySelector('#code-text');
var codeStyle = document.querySelector('#code-style');
var n = 1;
codeText.innerText = _style.default.substr(0, n);
codeStyle.innerHTML = _style.default.substr(0, n);
var time = 20;

var run = function run() {
  n += 1;

  if (n > _style.default.length) {
    window.clearInterval(id);
    return;
  }

  codeText.innerText = _style.default.substr(0, n);
  codeStyle.innerHTML = _style.default.substr(0, n);
  codeText.scrollTop = codeText.scrollHeight;
};

var play = function play() {
  return setInterval(run, time);
};

var pause = function pause() {
  window.clearInterval(id);
};

var id = play();
$('#btnPause').on('click', function () {
  pause();
});
$('#btnSlow').on('click', function () {
  pause();
  time = 200;
  id = play();
});
$('#btnNormal').on('click', function () {
  pause();
  time = 20;
  id = play();
});
$('#btnFast').on('click', function () {
  pause();
  time = 0;
  id = play();
});
$('button').on('click', function (e) {
  var $button = $(e.currentTarget);
  $button.addClass('active').siblings('.active').removeClass('active');
});
},{"./style.js":"2IwU"}]},{},["epB2"], null)
//# sourceMappingURL=main.e8368018.js.map