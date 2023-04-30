(function() {
    var __webpack_modules__ = {
    "c:\src\rspack-bug2\node_modules\simple-demo-package\index.js": function (module, exports, __webpack_require__) {
    function hello(name, nick) {
        return "Hello V3" + name;
    }
    function helloWithPrefix(name) {
        return "Hello Prefix" + name;
    }
    },
    "./src/index.ts": function (module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
            return _default;
        }
    });
    var _csrcrspackbug2node_modulessimpledemopackageindex = __webpack_require__.ir(__webpack_require__("c:\\src\\rspack-bug2\\node_modules\\simple-demo-package\\index.js"));
    var _default = _csrcrspackbug2node_modulessimpledemopackageindex.default;
    },
    
    }
    // The module cache
     var __webpack_module_cache__ = {};
    function __webpack_require__(moduleId) {
    // Check if module is in cache
            var cachedModule = __webpack_module_cache__[moduleId];
            if (cachedModule !== undefined) {
          return cachedModule.exports;
          }
          // Create a new module (and put it into the cache)
          var module = (__webpack_module_cache__[moduleId] = {
           exports: {} 
          });
          // Execute the module function
          __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
    // Return the exports of the module
     return module.exports;
    
    }
    // ir
    (function() {
    function _getRequireCache(nodeInterop) {
        if (typeof WeakMap !== "function") return null;
    
        var cacheBabelInterop = new WeakMap();
        var cacheNodeInterop = new WeakMap();
        return (_getRequireCache = function (nodeInterop) {
            return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
        })(nodeInterop);
    }
    
    __webpack_require__.ir = function (obj, nodeInterop) {
        if (!nodeInterop && obj && obj.__esModule) {
            return obj;
        }
    
        if (
            obj === null ||
            (typeof obj !== "object" && typeof obj !== "function")
        ) {
            return { default: obj };
        }
    
        var cache = _getRequireCache(nodeInterop);
        if (cache && cache.has(obj)) {
            return cache.get(obj);
        }
    
        var newObj = {};
        var hasPropertyDescriptor =
            Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var key in obj) {
            if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
                var desc = hasPropertyDescriptor
                    ? Object.getOwnPropertyDescriptor(obj, key)
                    : null;
                if (desc && (desc.get || desc.set)) {
                    Object.defineProperty(newObj, key, desc);
                } else {
                    newObj[key] = obj[key];
                }
            }
        }
        newObj.default = obj;
        if (cache) {
            cache.set(obj, newObj);
        }
        return newObj;
    };
    
    })();
    var __webpack_exports__ = __webpack_require__('./src/index.ts');
    
    })();
    
    //# sourceMappingURL=main.js.map