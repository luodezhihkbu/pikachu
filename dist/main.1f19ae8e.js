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
})({"style.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = ".skin * {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n.skin *::before, .skin *::after {\n  box-sizing: border-box;\n}\n.skin {\n  background: #ffe600;\n  min-height: 100vh;\n  position: relative;\n}\n\n/* \u9F3B\u5B50\u7684\u4E0B\u90E8\u5206\u4E3A\u4E09\u89D2\u5F62 */\n/* \u7528 border \u6765\u5236\u4F5C\u4E09\u89D2\u5F62\uFF1A\u5C06 div \u7684\u5BBD\u9AD8\u8BBE\u4E3A0\uFF0Cborder \u8BBE\u4E3A10px\uFF0C\u5E95\u90E8\u7684 border \u53BB\u6389\uFF0C\u5DE6\u53F3\u4E24\u8FB9\u7684 border \u8BBE\u4E3A\u900F\u660E */\n.nose {\n  border: 10px solid black;\n  border-color: black transparent transparent;\n  border-bottom: none;\n  width: 0;\n  height: 0;\n  position: relative;\n  left: 50%;\n  top: 145px;\n  margin-left: -10px;\n  z-index: 10;\n}\n/* \u9F20\u6807\u6D6E\u5230\u9F3B\u5B50\u4E0A\uFF0C\u9F3B\u5B50\u4F1A\u6643\u52A8 */\n@keyframes wave {\n  0% {\n    transform: rotate(0deg);\n  }\n  33% {\n    transform: rotate(5deg);\n  }\n  66% {\n    transform: rotate(-5deg);\n  }\n  100% {\n    transform: rotate(0deg);\n  }\n}\n.nose:hover {\n  transform-origin: center bottom; /* \u4EE5\u5E95\u90E8\u7684\u4E2D\u70B9\u4E3A\u57FA\u70B9\u6643\u52A8 */\n  animation: wave 300ms infinite linear;\n}\n/* \u9F3B\u5B50\u7684\u4E0A\u90E8\u5206\u4E3A\u5706\u5F27 */\n/* \u628A border-radius \u7684\u5DE6\u4E0B\u548C\u53F3\u4E0B\u8BBE\u4E3A0\uFF0C\u53EF\u5F97\u5230\u4E0A\u5706\u5F27 */\n.yuan {\n  position: absolute;\n  width: 20px;\n  height: 6px;\n  top: -16px;\n  left: -10px;\n  border-radius: 10px 10px 0 0;\n  background: black;\n}\n\n.eye {\n  border: 2px solid #000;\n  width: 64px;\n  height: 64px;\n  position: absolute;\n  left: 50%;\n  top: 100px;\n  margin-left: -32px;\n  background: #2e2e2e;\n  border-radius: 50%;\n}\n/* \u7528\u4F2A\u5143\u7D20\u6765\u505A\u773C\u767D\u90E8\u5206\uFF0C\u4F2A\u5143\u7D20\u9ED8\u8BA4\u5199\u4E0A content \u548C display */\n.eye::before {\n  content: \"\";\n  display: block;\n  border: 3px solid #000;\n  width: 30px;\n  height: 30px;\n  background: #fff;\n  border-radius: 50%;\n  position: relative;\n  left: 4px;\n  top: 2px;\n}\n.eye.left {\n  transform: translateX(-100px);\n}\n.eye.right {\n  transform: translateX(100px);\n}\n\n/* \u5634\u5206\u4E3A\u4E0A\u4E0B\u4E24\u90E8\u5206\uFF0C\u4E0A\u90E8\u5206\u53C8\u5206\u4E3A\u5DE6\u53F3\u4E24\u90E8\u5206 */\n.mouth {\n  width: 200px;\n  height: 200px;\n  position: absolute;\n  left: 50%;\n  top: 170px;\n  margin-left: -100px;\n}\n/* \u5634\u4E0A\u7684\u4E24\u4E2A\u90E8\u5206\u5206\u522B\u7528\u4E24\u4E2A\u5706\u89D2\u77E9\u5F62\u8868\u793A */\n/* \u5DE6\u90E8\u5206\u77E9\u5F62\u7684\u5DE6\u8FB9\u8BBE\u4E3A\u5706\u89D2\uFF0C\u4E0A\u8FB9\u8BBE\u4E3A\u900F\u660E\uFF0C\u53F3\u8FB9\u7528\u4E00\u4E2A\u4F2A\u5143\u7D20\u77E9\u5F62\u906E\u4F4F\uFF0C\u7136\u540E\u518D\u987A\u65F6\u9488\u65CB\u8F6C15\u5EA6 */\n/* \u53F3\u90E8\u5206\u77E9\u5F62\u7684\u53F3\u8FB9\u8BBE\u4E3A\u5706\u89D2\uFF0C\u4E0A\u8FB9\u8BBE\u4E3A\u900F\u660E\uFF0C\u5DE6\u8FB9\u7528\u4E00\u4E2A\u4F2A\u5143\u7D20\u77E9\u5F62\u906E\u4F4F\uFF0C\u7136\u540E\u518D\u9006\u65F6\u9488\u65CB\u8F6C15\u5EA6 */\n.mouth .up {\n  position: relative;\n  top: -20px;\n  z-index: 1;\n}\n.mouth .up .lip {\n  border: 3px solid black;\n  height: 30px;\n  width: 100px;\n  background: #ffe600;\n  border-top-color: transparent;\n  position: absolute;\n  left: 50%;\n  margin-left: -50px;\n}\n.mouth .up .lip.left {\n  border-radius: 0 0 0 50px;\n  transform: rotate(-15deg) translateX(-53px);\n}\n.mouth .up .lip.right {\n  border-radius: 0 0 50px 0;\n  transform: rotate(15deg) translateX(53px);\n}\n.mouth .up .lip::before {\n  content: \"\";\n  display: block;\n  width: 7px;\n  height: 30px;\n  position: absolute;\n  bottom: 0;\n  background: #ffe600;\n}\n.mouth .up .lip.left::before {\n  right: -6px;\n}\n.mouth .up .lip.right::before {\n  left: -6px;\n}\n\n/* \u5634\u4E0B\u7684\u90E8\u5206\u662F\u4E24\u4E2A\u5706\u89D2\u77E9\u5F62\uFF0C\u4F4D\u4E8E\u6700\u5E95\u5C42\uFF0C\u5176\u4E2D yuan2 \u5728 yuan1 \u7684\u91CC\u9762 */\n/* \u7528 overflow: hidden \u906E\u4F4F\u591A\u51FA\u6765\u7684\u90E8\u5206 */\n.mouth .down {\n  height: 180px;\n  position: absolute;\n  top: 5px;\n  width: 100%;\n  overflow: hidden;\n}\n.mouth .down .yuan1 {\n  border: 3px solid black;\n  width: 150px;\n  height: 1000px;\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  margin-left: -75px;\n  border-radius: 75px/300px;\n  background: #9b000a;\n  overflow: hidden;\n}\n.mouth .down .yuan1 .yuan2 {\n  width: 200px;\n  height: 300px;\n  background: #ff485f;\n  position: absolute;\n  bottom: -155px;\n  left: 50%;\n  margin-left: -100px;\n  border-radius: 100px;\n}\n\n.face {\n  position: absolute;\n  border: 3px solid black;\n  width: 88px;\n  height: 88px;\n  left: 50%;\n  top: 200px;\n  margin-left: -44px;\n  z-index: 3;\n}\n.face.left {\n  transform: translateX(-180px);\n  background: #ff0000;\n  border-radius: 50%;\n}\n.face.right {\n  transform: translateX(180px);\n  background: #ff0000;\n  border-radius: 50%;\n}\n";
var _default = string;
exports.default = _default;
},{}],"main.js":[function(require,module,exports) {
"use strict";

var _style = _interopRequireDefault(require("./style.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 动态展示的原理：把 css 样式转化成字符串，然后用 setInterval 把字符串一个字符一个字符的在页面展示出来
var demo = document.querySelector('#demo');
var demo2 = document.querySelector('#demo2'); // 在 demo 里展示出文本内容，同时，在 demo2 里同步加上样式

var n = 1;
demo.innerText = _style.default.substr(0, n);
demo2.innerHTML = _style.default.substr(0, n); // 每隔一段时间，执行 setInterval 里面的函数，并记录每次执行完后返回的 id
// 当 n 大于字符串长度时暂停

var time = 100;

var run = function run() {
  n += 1;

  if (n > _style.default.length) {
    window.clearInterval(id);
    return;
  }

  demo.innerText = _style.default.substr(0, n);
  demo2.innerHTML = _style.default.substr(0, n);
  demo.scrollTop = demo.scrollHeight; // 滚动条根据页面出现的内容自动往下滚
};

var play = function play() {
  return setInterval(run, time); // setInterval 接受的第一个参数是函数，所以 run 后面不要加括号
};

var pause = function pause() {
  window.clearInterval(id);
};

var id = play(); // id 只能放在全局，因为 play 和 pause 都会用到 id

document.querySelector('#btnPause').onclick = function () {
  pause();
};

document.querySelector('#btnPlay').onclick = function () {
  pause();
  id = play();
};

document.querySelector('#btnSlow').onclick = function () {
  pause();
  time = 300;
  id = play();
};

document.querySelector('#btnNormal').onclick = function () {
  pause();
  time = 100;
  id = play();
};

document.querySelector('#btnFast').onclick = function () {
  pause();
  time = 0;
  id = play();
};
},{"./style.js":"style.js"}],"../../../../../usr/local/lib/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "64039" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../usr/local/lib/node_modules/parcel/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map