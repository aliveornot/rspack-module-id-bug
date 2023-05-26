(function() {
var __webpack_modules__ = {
"c:\\src\\rspack-bug2\\node_modules\\css-in-js-utils\\es\\assignStyle.js": function (module, exports, __webpack_require__) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return assignStyle;
    }
});
function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj);
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function filterUniqueArray(arr) {
    return arr.filter(function(val, index) {
        return arr.lastIndexOf(val) === index;
    });
}
function assignStyle(base) {
    for(var i = 0, len = arguments.length <= 1 ? 0 : arguments.length - 1; i < len; ++i){
        var style = i + 1 < 1 || arguments.length <= i + 1 ? undefined : arguments[i + 1];
        for(var property in style){
            var value = style[property];
            var baseValue = base[property];
            if (baseValue && value) {
                if (Array.isArray(baseValue)) {
                    base[property] = filterUniqueArray(baseValue.concat(value));
                    continue;
                }
                if (Array.isArray(value)) {
                    base[property] = filterUniqueArray([
                        baseValue
                    ].concat(_toConsumableArray(value)));
                    continue;
                }
                if (_typeof(value) === 'object') {
                    base[property] = assignStyle({}, baseValue, value);
                    continue;
                }
            }
            base[property] = value;
        }
    }
    return base;
}
},
"c:\\src\\rspack-bug2\\node_modules\\css-in-js-utils\\es\\camelCaseProperty.js": function (module, exports, __webpack_require__) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return camelCaseProperty;
    }
});
var DASH = /-([a-z])/g;
var MS = /^Ms/g;
var cache = {};
function toUpper(match) {
    return match[1].toUpperCase();
}
function camelCaseProperty(property) {
    if (cache.hasOwnProperty(property)) return cache[property];
    var camelProp = property.replace(DASH, toUpper).replace(MS, 'ms');
    cache[property] = camelProp;
    return camelProp;
}
},
"c:\\src\\rspack-bug2\\node_modules\\css-in-js-utils\\es\\cssifyDeclaration.js": function (module, exports, __webpack_require__) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return cssifyDeclaration;
    }
});
var _csrcrspackbug2node_modulescssinjsutilseshyphenateProperty = __webpack_require__.ir(__webpack_require__("c:\\src\\rspack-bug2\\node_modules\\css-in-js-utils\\es\\hyphenateProperty.js"));
function cssifyDeclaration(property, value) {
    return (0, _csrcrspackbug2node_modulescssinjsutilseshyphenateProperty.default)(property) + ':' + value;
}
},
"c:\\src\\rspack-bug2\\node_modules\\css-in-js-utils\\es\\cssifyObject.js": function (module, exports, __webpack_require__) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return cssifyObject;
    }
});
var _csrcrspackbug2node_modulescssinjsutilsescssifyDeclaration = __webpack_require__.ir(__webpack_require__("c:\\src\\rspack-bug2\\node_modules\\css-in-js-utils\\es\\cssifyDeclaration.js"));
function cssifyObject(style) {
    var css = '';
    for(var property in style){
        var value = style[property];
        if (typeof value !== 'string' && typeof value !== 'number') continue;
        if (css) css += ';';
        css += (0, _csrcrspackbug2node_modulescssinjsutilsescssifyDeclaration.default)(property, value);
    }
    return css;
}
},
"c:\\src\\rspack-bug2\\node_modules\\css-in-js-utils\\es\\hyphenateProperty.js": function (module, exports, __webpack_require__) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return hyphenateProperty;
    }
});
var _csrcrspackbug2node_moduleshyphenatestylenameindex = __webpack_require__.ir(__webpack_require__("c:\\src\\rspack-bug2\\node_modules\\hyphenate-style-name\\index.js"));
function hyphenateProperty(property) {
    return (0, _csrcrspackbug2node_moduleshyphenatestylenameindex.default)(property);
}
},
"c:\\src\\rspack-bug2\\node_modules\\css-in-js-utils\\es\\index.js": function (module, exports, __webpack_require__) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    assignStyle: function() {
        return _csrcrspackbug2node_modulescssinjsutilsesassignStyle.default;
    },
    camelCaseProperty: function() {
        return _csrcrspackbug2node_modulescssinjsutilsescamelCaseProperty.default;
    },
    cssifyDeclaration: function() {
        return _csrcrspackbug2node_modulescssinjsutilsescssifyDeclaration.default;
    },
    cssifyObject: function() {
        return _csrcrspackbug2node_modulescssinjsutilsescssifyObject.default;
    },
    hyphenateProperty: function() {
        return _csrcrspackbug2node_modulescssinjsutilseshyphenateProperty.default;
    },
    isPrefixedProperty: function() {
        return _csrcrspackbug2node_modulescssinjsutilsesisPrefixedProperty.default;
    },
    isPrefixedValue: function() {
        return _csrcrspackbug2node_modulescssinjsutilsesisPrefixedValue.default;
    },
    isUnitlessProperty: function() {
        return _csrcrspackbug2node_modulescssinjsutilsesisUnitlessProperty.default;
    },
    normalizeProperty: function() {
        return _csrcrspackbug2node_modulescssinjsutilsesnormalizeProperty.default;
    },
    resolveArrayValue: function() {
        return _csrcrspackbug2node_modulescssinjsutilsesresolveArrayValue.default;
    },
    unprefixProperty: function() {
        return _csrcrspackbug2node_modulescssinjsutilsesunprefixProperty.default;
    },
    unprefixValue: function() {
        return _csrcrspackbug2node_modulescssinjsutilsesunprefixValue.default;
    }
});
var _csrcrspackbug2node_modulescssinjsutilsesassignStyle = __webpack_require__.ir(__webpack_require__("c:\\src\\rspack-bug2\\node_modules\\css-in-js-utils\\es\\assignStyle.js"));
var _csrcrspackbug2node_modulescssinjsutilsescamelCaseProperty = __webpack_require__.ir(__webpack_require__("c:\\src\\rspack-bug2\\node_modules\\css-in-js-utils\\es\\camelCaseProperty.js"));
var _csrcrspackbug2node_modulescssinjsutilsescssifyDeclaration = __webpack_require__.ir(__webpack_require__("c:\\src\\rspack-bug2\\node_modules\\css-in-js-utils\\es\\cssifyDeclaration.js"));
var _csrcrspackbug2node_modulescssinjsutilsescssifyObject = __webpack_require__.ir(__webpack_require__("c:\\src\\rspack-bug2\\node_modules\\css-in-js-utils\\es\\cssifyObject.js"));
var _csrcrspackbug2node_modulescssinjsutilseshyphenateProperty = __webpack_require__.ir(__webpack_require__("c:\\src\\rspack-bug2\\node_modules\\css-in-js-utils\\es\\hyphenateProperty.js"));
var _csrcrspackbug2node_modulescssinjsutilsesisPrefixedProperty = __webpack_require__.ir(__webpack_require__("c:\\src\\rspack-bug2\\node_modules\\css-in-js-utils\\es\\isPrefixedProperty.js"));
var _csrcrspackbug2node_modulescssinjsutilsesisPrefixedValue = __webpack_require__.ir(__webpack_require__("c:\\src\\rspack-bug2\\node_modules\\css-in-js-utils\\es\\isPrefixedValue.js"));
var _csrcrspackbug2node_modulescssinjsutilsesisUnitlessProperty = __webpack_require__.ir(__webpack_require__("c:\\src\\rspack-bug2\\node_modules\\css-in-js-utils\\es\\isUnitlessProperty.js"));
var _csrcrspackbug2node_modulescssinjsutilsesnormalizeProperty = __webpack_require__.ir(__webpack_require__("c:\\src\\rspack-bug2\\node_modules\\css-in-js-utils\\es\\normalizeProperty.js"));
var _csrcrspackbug2node_modulescssinjsutilsesresolveArrayValue = __webpack_require__.ir(__webpack_require__("c:\\src\\rspack-bug2\\node_modules\\css-in-js-utils\\es\\resolveArrayValue.js"));
var _csrcrspackbug2node_modulescssinjsutilsesunprefixProperty = __webpack_require__.ir(__webpack_require__("c:\\src\\rspack-bug2\\node_modules\\css-in-js-utils\\es\\unprefixProperty.js"));
var _csrcrspackbug2node_modulescssinjsutilsesunprefixValue = __webpack_require__.ir(__webpack_require__("c:\\src\\rspack-bug2\\node_modules\\css-in-js-utils\\es\\unprefixValue.js"));
},
"c:\\src\\rspack-bug2\\node_modules\\css-in-js-utils\\es\\isPrefixedProperty.js": function (module, exports, __webpack_require__) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return isPrefixedProperty;
    }
});
var RE = /^(Webkit|Moz|O|ms)/;
function isPrefixedProperty(property) {
    return RE.test(property);
}
},
"c:\\src\\rspack-bug2\\node_modules\\css-in-js-utils\\es\\isPrefixedValue.js": function (module, exports, __webpack_require__) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return isPrefixedValue;
    }
});
var RE = /-webkit-|-moz-|-ms-/;
function isPrefixedValue(value) {
    return typeof value === 'string' && RE.test(value);
}
},
"c:\\src\\rspack-bug2\\node_modules\\css-in-js-utils\\es\\isUnitlessProperty.js": function (module, exports, __webpack_require__) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return isUnitlessProperty;
    }
});
var _csrcrspackbug2node_modulescssinjsutilseshyphenateProperty = __webpack_require__.ir(__webpack_require__("c:\\src\\rspack-bug2\\node_modules\\css-in-js-utils\\es\\hyphenateProperty.js"));
var unitlessProperties = {
    borderImageOutset: true,
    borderImageSlice: true,
    borderImageWidth: true,
    fontWeight: true,
    lineHeight: true,
    opacity: true,
    orphans: true,
    tabSize: true,
    widows: true,
    zIndex: true,
    zoom: true,
    fillOpacity: true,
    floodOpacity: true,
    stopOpacity: true,
    strokeDasharray: true,
    strokeDashoffset: true,
    strokeMiterlimit: true,
    strokeOpacity: true,
    strokeWidth: true
};
var prefixedUnitlessProperties = [
    'animationIterationCount',
    'boxFlex',
    'boxFlexGroup',
    'boxOrdinalGroup',
    'columnCount',
    'flex',
    'flexGrow',
    'flexPositive',
    'flexShrink',
    'flexNegative',
    'flexOrder',
    'gridColumn',
    'gridColumnEnd',
    'gridColumnStart',
    'gridRow',
    'gridRowEnd',
    'gridRowStart',
    'lineClamp',
    'order'
];
var prefixes = [
    'Webkit',
    'ms',
    'Moz',
    'O'
];
function getPrefixedProperty(prefix, property) {
    return prefix + property.charAt(0).toUpperCase() + property.slice(1);
}
for(var i = 0, len = prefixedUnitlessProperties.length; i < len; ++i){
    var property = prefixedUnitlessProperties[i];
    unitlessProperties[property] = true;
    for(var j = 0, jLen = prefixes.length; j < jLen; ++j)unitlessProperties[getPrefixedProperty(prefixes[j], property)] = true;
}
for(var _property in unitlessProperties)unitlessProperties[(0, _csrcrspackbug2node_modulescssinjsutilseshyphenateProperty.default)(_property)] = true;
function isUnitlessProperty(property) {
    return unitlessProperties.hasOwnProperty(property);
}
},
"c:\\src\\rspack-bug2\\node_modules\\css-in-js-utils\\es\\normalizeProperty.js": function (module, exports, __webpack_require__) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return normalizeProperty;
    }
});
var _csrcrspackbug2node_modulescssinjsutilsescamelCaseProperty = __webpack_require__.ir(__webpack_require__("c:\\src\\rspack-bug2\\node_modules\\css-in-js-utils\\es\\camelCaseProperty.js"));
var _csrcrspackbug2node_modulescssinjsutilsesunprefixProperty = __webpack_require__.ir(__webpack_require__("c:\\src\\rspack-bug2\\node_modules\\css-in-js-utils\\es\\unprefixProperty.js"));
function normalizeProperty(property) {
    return (0, _csrcrspackbug2node_modulescssinjsutilsesunprefixProperty.default)((0, _csrcrspackbug2node_modulescssinjsutilsescamelCaseProperty.default)(property));
}
},
"c:\\src\\rspack-bug2\\node_modules\\css-in-js-utils\\es\\resolveArrayValue.js": function (module, exports, __webpack_require__) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return resolveArrayValue;
    }
});
var _csrcrspackbug2node_modulescssinjsutilseshyphenateProperty = __webpack_require__.ir(__webpack_require__("c:\\src\\rspack-bug2\\node_modules\\css-in-js-utils\\es\\hyphenateProperty.js"));
function resolveArrayValue(property, value) {
    return value.join(';' + (0, _csrcrspackbug2node_modulescssinjsutilseshyphenateProperty.default)(property) + ':');
}
},
"c:\\src\\rspack-bug2\\node_modules\\css-in-js-utils\\es\\unprefixProperty.js": function (module, exports, __webpack_require__) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return unprefixProperty;
    }
});
var RE = /^(ms|Webkit|Moz|O)/;
function unprefixProperty(property) {
    var propertyWithoutPrefix = property.replace(RE, '');
    return propertyWithoutPrefix.charAt(0).toLowerCase() + propertyWithoutPrefix.slice(1);
}
},
"c:\\src\\rspack-bug2\\node_modules\\css-in-js-utils\\es\\unprefixValue.js": function (module, exports, __webpack_require__) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return unprefixValue;
    }
});
var RE = /(-ms-|-webkit-|-moz-|-o-)/g;
function unprefixValue(value) {
    if (typeof value === 'string') return value.replace(RE, '');
    return value;
}
},
"c:\\src\\rspack-bug2\\node_modules\\css-in-js-utils\\lib\\hyphenateProperty.js": function (module, exports, __webpack_require__) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = hyphenateProperty;
var _hyphenateStyleName = __webpack_require__("c:\src\rspack-bug2\node_modules\hyphenate-style-name\index.js");
var _hyphenateStyleName2 = _interopRequireDefault(_hyphenateStyleName);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function hyphenateProperty(property) {
    return (0, _hyphenateStyleName2["default"])(property);
}
},
"c:\\src\\rspack-bug2\\node_modules\\css-in-js-utils\\lib\\isPrefixedValue.js": function (module, exports, __webpack_require__) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isPrefixedValue;
var RE = /-webkit-|-moz-|-ms-/;
function isPrefixedValue(value) {
    return typeof value === 'string' && RE.test(value);
}
},
"c:\\src\\rspack-bug2\\node_modules\\hyphenate-style-name\\index.js": function (module, exports, __webpack_require__) {
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
var uppercasePattern = /[A-Z]/g;
var msPattern = /^ms-/;
var cache = {};
function toHyphenLower(match) {
    return '-' + match.toLowerCase();
}
function hyphenateStyleName(name) {
    if (cache.hasOwnProperty(name)) return cache[name];
    var hName = name.replace(uppercasePattern, toHyphenLower);
    return cache[name] = msPattern.test(hName) ? '-' + hName : hName;
}
var _default = hyphenateStyleName;
},
"c:\\src\\rspack-bug2\\node_modules\\inline-style-prefixer\\lib\\plugins\\crossFade.js": function (module, exports, __webpack_require__) {
'use strict';
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = crossFade;
var _cssInJsUtils = __webpack_require__("c:\src\rspack-bug2\node_modules\css-in-js-utils\es\index.js");
var CROSS_FADE_REGEX = /cross-fade\(/g;
var prefixes = [
    '-webkit-',
    ''
];
function crossFade(property, value) {
    if (typeof value === 'string' && !(0, _cssInJsUtils.isPrefixedValue)(value) && value.indexOf('cross-fade(') !== -1) return prefixes.map(function(prefix) {
        return value.replace(CROSS_FADE_REGEX, prefix + 'cross-fade(');
    });
}
},
"c:\\src\\rspack-bug2\\node_modules\\inline-style-prefixer\\lib\\plugins\\gradient.js": function (module, exports, __webpack_require__) {
'use strict';
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = gradient;
var _isPrefixedValue = __webpack_require__("c:\src\rspack-bug2\node_modules\css-in-js-utils\lib\isPrefixedValue.js");
var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var prefixes = [
    '-webkit-',
    '-moz-',
    ''
];
var values = /linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/gi;
function gradient(property, value) {
    if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && values.test(value)) return prefixes.map(function(prefix) {
        return value.replace(values, function(grad) {
            return prefix + grad;
        });
    });
}
},
"c:\\src\\rspack-bug2\\node_modules\\inline-style-prefixer\\lib\\plugins\\imageSet.js": function (module, exports, __webpack_require__) {
'use strict';
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = imageSet;
var _isPrefixedValue = __webpack_require__("c:\src\rspack-bug2\node_modules\css-in-js-utils\lib\isPrefixedValue.js");
var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var prefixes = [
    '-webkit-',
    ''
];
function imageSet(property, value) {
    if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.indexOf('image-set(') > -1) return prefixes.map(function(prefix) {
        return value.replace(/image-set\(/g, prefix + 'image-set(');
    });
}
},
"c:\\src\\rspack-bug2\\node_modules\\inline-style-prefixer\\lib\\plugins\\sizing.js": function (module, exports, __webpack_require__) {
'use strict';
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = sizing;
var prefixes = [
    '-webkit-',
    '-moz-',
    ''
];
var properties = {
    maxHeight: true,
    maxWidth: true,
    width: true,
    height: true,
    columnWidth: true,
    minWidth: true,
    minHeight: true
};
var values = {
    'min-content': true,
    'max-content': true,
    'fill-available': true,
    'fit-content': true,
    'contain-floats': true
};
function sizing(property, value) {
    if (properties.hasOwnProperty(property) && values.hasOwnProperty(value)) return prefixes.map(function(prefix) {
        return prefix + value;
    });
}
},
"c:\\src\\rspack-bug2\\node_modules\\inline-style-prefixer\\lib\\plugins\\transition.js": function (module, exports, __webpack_require__) {
'use strict';
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = transition;
var _hyphenateProperty = __webpack_require__("c:\src\rspack-bug2\node_modules\css-in-js-utils\lib\hyphenateProperty.js");
var _hyphenateProperty2 = _interopRequireDefault(_hyphenateProperty);
var _isPrefixedValue = __webpack_require__("c:\src\rspack-bug2\node_modules\css-in-js-utils\lib\isPrefixedValue.js");
var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);
var _capitalizeString = __webpack_require__("c:\src\rspack-bug2\node_modules\inline-style-prefixer\lib\utils\capitalizeString.js");
var _capitalizeString2 = _interopRequireDefault(_capitalizeString);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var properties = {
    transition: true,
    transitionProperty: true,
    WebkitTransition: true,
    WebkitTransitionProperty: true,
    MozTransition: true,
    MozTransitionProperty: true
};
var prefixMapping = {
    Webkit: '-webkit-',
    Moz: '-moz-',
    ms: '-ms-'
};
function prefixValue(value, propertyPrefixMap) {
    if ((0, _isPrefixedValue2.default)(value)) return value;
    var multipleValues = value.split(/,(?![^()]*(?:\([^()]*\))?\))/g);
    for(var i = 0, len = multipleValues.length; i < len; ++i){
        var singleValue = multipleValues[i];
        var values = [
            singleValue
        ];
        for(var property in propertyPrefixMap){
            var dashCaseProperty = (0, _hyphenateProperty2.default)(property);
            if (singleValue.indexOf(dashCaseProperty) > -1 && dashCaseProperty !== 'order') {
                var prefixes = propertyPrefixMap[property];
                for(var j = 0, pLen = prefixes.length; j < pLen; ++j)values.unshift(singleValue.replace(dashCaseProperty, prefixMapping[prefixes[j]] + dashCaseProperty));
            }
        }
        multipleValues[i] = values.join(',');
    }
    return multipleValues.join(',');
}
function transition(property, value, style, propertyPrefixMap) {
    if (typeof value === 'string' && properties.hasOwnProperty(property)) {
        var outputValue = prefixValue(value, propertyPrefixMap);
        var webkitOutput = outputValue.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function(val) {
            return !/-moz-|-ms-/.test(val);
        }).join(',');
        if (property.indexOf('Webkit') > -1) return webkitOutput;
        var mozOutput = outputValue.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function(val) {
            return !/-webkit-|-ms-/.test(val);
        }).join(',');
        if (property.indexOf('Moz') > -1) return mozOutput;
        style['Webkit' + (0, _capitalizeString2.default)(property)] = webkitOutput;
        style['Moz' + (0, _capitalizeString2.default)(property)] = mozOutput;
        return outputValue;
    }
}
},
"c:\\src\\rspack-bug2\\node_modules\\inline-style-prefixer\\lib\\utils\\capitalizeString.js": function (module, exports, __webpack_require__) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = capitalizeString;
function capitalizeString(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
},
"c:\\src\\rspack-bug2\\node_modules\\inline-style-prefixer\\es\\createPrefixer.js": function (module, exports, __webpack_require__) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return createPrefixer;
    }
});
var _csrcrspackbug2node_modulesinlinestyleprefixeresutilsprefixProperty = __webpack_require__.ir(__webpack_require__("c:\\src\\rspack-bug2\\node_modules\\inline-style-prefixer\\es\\utils\\prefixProperty.js"));
var _csrcrspackbug2node_modulesinlinestyleprefixeresutilsprefixValue = __webpack_require__.ir(__webpack_require__("c:\\src\\rspack-bug2\\node_modules\\inline-style-prefixer\\es\\utils\\prefixValue.js"));
var _csrcrspackbug2node_modulesinlinestyleprefixeresutilsaddNewValuesOnly = __webpack_require__.ir(__webpack_require__("c:\\src\\rspack-bug2\\node_modules\\inline-style-prefixer\\es\\utils\\addNewValuesOnly.js"));
var _csrcrspackbug2node_modulesinlinestyleprefixeresutilsisObject = __webpack_require__.ir(__webpack_require__("c:\\src\\rspack-bug2\\node_modules\\inline-style-prefixer\\es\\utils\\isObject.js"));
function createPrefixer(_ref) {
    var prefixMap = _ref.prefixMap, plugins = _ref.plugins;
    return function prefix(style) {
        for(var property in style){
            var value = style[property];
            if ((0, _csrcrspackbug2node_modulesinlinestyleprefixeresutilsisObject.default)(value)) style[property] = prefix(value);
            else if (Array.isArray(value)) {
                var combinedValue = [];
                for(var i = 0, len = value.length; i < len; ++i){
                    var processedValue = (0, _csrcrspackbug2node_modulesinlinestyleprefixeresutilsprefixValue.default)(plugins, property, value[i], style, prefixMap);
                    (0, _csrcrspackbug2node_modulesinlinestyleprefixeresutilsaddNewValuesOnly.default)(combinedValue, processedValue || value[i]);
                }
                if (combinedValue.length > 0) style[property] = combinedValue;
            } else {
                var _processedValue = (0, _csrcrspackbug2node_modulesinlinestyleprefixeresutilsprefixValue.default)(plugins, property, value, style, prefixMap);
                if (_processedValue) style[property] = _processedValue;
                style = (0, _csrcrspackbug2node_modulesinlinestyleprefixeresutilsprefixProperty.default)(prefixMap, property, style);
            }
        }
        return style;
    };
}
},
"c:\\src\\rspack-bug2\\node_modules\\inline-style-prefixer\\es\\data.js": function (module, exports, __webpack_require__) {
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
var _csrcrspackbug2node_modulesinlinestyleprefixerlibpluginscrossFade = __webpack_require__.ir(__webpack_require__("c:\\src\\rspack-bug2\\node_modules\\inline-style-prefixer\\lib\\plugins\\crossFade.js"));
var _csrcrspackbug2node_modulesinlinestyleprefixerlibpluginsgradient = __webpack_require__.ir(__webpack_require__("c:\\src\\rspack-bug2\\node_modules\\inline-style-prefixer\\lib\\plugins\\gradient.js"));
var _csrcrspackbug2node_modulesinlinestyleprefixerlibpluginsimageSet = __webpack_require__.ir(__webpack_require__("c:\\src\\rspack-bug2\\node_modules\\inline-style-prefixer\\lib\\plugins\\imageSet.js"));
var _csrcrspackbug2node_modulesinlinestyleprefixerlibpluginssizing = __webpack_require__.ir(__webpack_require__("c:\\src\\rspack-bug2\\node_modules\\inline-style-prefixer\\lib\\plugins\\sizing.js"));
var _csrcrspackbug2node_modulesinlinestyleprefixerlibpluginstransition = __webpack_require__.ir(__webpack_require__("c:\\src\\rspack-bug2\\node_modules\\inline-style-prefixer\\lib\\plugins\\transition.js"));
var w = [
    "Webkit"
];
var m = [
    "Moz"
];
var ms = [
    "ms"
];
var wm = [
    "Webkit",
    "Moz"
];
var wms = [
    "Webkit",
    "ms"
];
var wmms = [
    "Webkit",
    "Moz",
    "ms"
];
var _default = {
    plugins: [
        _csrcrspackbug2node_modulesinlinestyleprefixerlibpluginscrossFade.default,
        _csrcrspackbug2node_modulesinlinestyleprefixerlibpluginsgradient.default,
        _csrcrspackbug2node_modulesinlinestyleprefixerlibpluginsimageSet.default,
        _csrcrspackbug2node_modulesinlinestyleprefixerlibpluginssizing.default,
        _csrcrspackbug2node_modulesinlinestyleprefixerlibpluginstransition.default
    ],
    prefixMap: {
        "appearance": wmms,
        "textEmphasisPosition": wms,
        "textEmphasis": wms,
        "textEmphasisStyle": wms,
        "textEmphasisColor": wms,
        "boxDecorationBreak": wms,
        "maskImage": wms,
        "maskMode": wms,
        "maskRepeat": wms,
        "maskPosition": wms,
        "maskClip": wms,
        "maskOrigin": wms,
        "maskSize": wms,
        "maskComposite": wms,
        "mask": wms,
        "maskBorderSource": wms,
        "maskBorderMode": wms,
        "maskBorderSlice": wms,
        "maskBorderWidth": wms,
        "maskBorderOutset": wms,
        "maskBorderRepeat": wms,
        "maskBorder": wms,
        "maskType": wms,
        "userSelect": wms,
        "backdropFilter": w,
        "clipPath": w,
        "hyphens": wms,
        "textOrientation": w,
        "tabSize": m,
        "wrapFlow": ms,
        "wrapThrough": ms,
        "wrapMargin": ms,
        "scrollSnapType": ms,
        "scrollSnapPointsX": ms,
        "scrollSnapPointsY": ms,
        "scrollSnapDestination": ms,
        "scrollSnapCoordinate": ms,
        "textSizeAdjust": [
            "ms",
            "Webkit"
        ],
        "flowInto": ms,
        "flowFrom": ms,
        "breakBefore": ms,
        "breakAfter": ms,
        "breakInside": ms,
        "regionFragment": ms,
        "fontKerning": w,
        "textDecorationStyle": w,
        "textDecorationSkip": w,
        "textDecorationLine": w,
        "textDecorationColor": w
    }
};
},
"c:\\src\\rspack-bug2\\node_modules\\inline-style-prefixer\\es\\index.js": function (module, exports, __webpack_require__) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    createPrefixer: function() {
        return _csrcrspackbug2node_modulesinlinestyleprefixerescreatePrefixer.default;
    },
    prefix: function() {
        return prefix;
    }
});
var _csrcrspackbug2node_modulesinlinestyleprefixerescreatePrefixer = __webpack_require__.ir(__webpack_require__("c:\\src\\rspack-bug2\\node_modules\\inline-style-prefixer\\es\\createPrefixer.js"));
var _csrcrspackbug2node_modulesinlinestyleprefixeresdata = __webpack_require__.ir(__webpack_require__("c:\\src\\rspack-bug2\\node_modules\\inline-style-prefixer\\es\\data.js"));
var _csrcrspackbug2node_modulesinlinestyleprefixerespluginscursor = __webpack_require__.ir(__webpack_require__("c:\\src\\rspack-bug2\\node_modules\\inline-style-prefixer\\es\\plugins\\cursor.js"));
var _csrcrspackbug2node_modulesinlinestyleprefixerespluginscrossFade = __webpack_require__.ir(__webpack_require__("c:\\src\\rspack-bug2\\node_modules\\inline-style-prefixer\\es\\plugins\\crossFade.js"));
var _csrcrspackbug2node_modulesinlinestyleprefixerespluginsfilter = __webpack_require__.ir(__webpack_require__("c:\\src\\rspack-bug2\\node_modules\\inline-style-prefixer\\es\\plugins\\filter.js"));
var _csrcrspackbug2node_modulesinlinestyleprefixerespluginsflex = __webpack_require__.ir(__webpack_require__("c:\\src\\rspack-bug2\\node_modules\\inline-style-prefixer\\es\\plugins\\flex.js"));
var _csrcrspackbug2node_modulesinlinestyleprefixerespluginsflexboxOld = __webpack_require__.ir(__webpack_require__("c:\\src\\rspack-bug2\\node_modules\\inline-style-prefixer\\es\\plugins\\flexboxOld.js"));
var _csrcrspackbug2node_modulesinlinestyleprefixerespluginsgradient = __webpack_require__.ir(__webpack_require__("c:\\src\\rspack-bug2\\node_modules\\inline-style-prefixer\\es\\plugins\\gradient.js"));
var _csrcrspackbug2node_modulesinlinestyleprefixerespluginsgrid = __webpack_require__.ir(__webpack_require__("c:\\src\\rspack-bug2\\node_modules\\inline-style-prefixer\\es\\plugins\\grid.js"));
var _csrcrspackbug2node_modulesinlinestyleprefixerespluginsimageSet = __webpack_require__.ir(__webpack_require__("c:\\src\\rspack-bug2\\node_modules\\inline-style-prefixer\\es\\plugins\\imageSet.js"));
var _csrcrspackbug2node_modulesinlinestyleprefixerespluginslogical = __webpack_require__.ir(__webpack_require__("c:\\src\\rspack-bug2\\node_modules\\inline-style-prefixer\\es\\plugins\\logical.js"));
var _csrcrspackbug2node_modulesinlinestyleprefixerespluginsposition = __webpack_require__.ir(__webpack_require__("c:\\src\\rspack-bug2\\node_modules\\inline-style-prefixer\\es\\plugins\\position.js"));
var _csrcrspackbug2node_modulesinlinestyleprefixerespluginssizing = __webpack_require__.ir(__webpack_require__("c:\\src\\rspack-bug2\\node_modules\\inline-style-prefixer\\es\\plugins\\sizing.js"));
var _csrcrspackbug2node_modulesinlinestyleprefixerespluginstransition = __webpack_require__.ir(__webpack_require__("c:\\src\\rspack-bug2\\node_modules\\inline-style-prefixer\\es\\plugins\\transition.js"));
var plugins = [
    _csrcrspackbug2node_modulesinlinestyleprefixerespluginscrossFade.default,
    _csrcrspackbug2node_modulesinlinestyleprefixerespluginscursor.default,
    _csrcrspackbug2node_modulesinlinestyleprefixerespluginsfilter.default,
    _csrcrspackbug2node_modulesinlinestyleprefixerespluginsflexboxOld.default,
    _csrcrspackbug2node_modulesinlinestyleprefixerespluginsgradient.default,
    _csrcrspackbug2node_modulesinlinestyleprefixerespluginsgrid.default,
    _csrcrspackbug2node_modulesinlinestyleprefixerespluginsimageSet.default,
    _csrcrspackbug2node_modulesinlinestyleprefixerespluginslogical.default,
    _csrcrspackbug2node_modulesinlinestyleprefixerespluginsposition.default,
    _csrcrspackbug2node_modulesinlinestyleprefixerespluginssizing.default,
    _csrcrspackbug2node_modulesinlinestyleprefixerespluginstransition.default,
    _csrcrspackbug2node_modulesinlinestyleprefixerespluginsflex.default
];
var prefix = (0, _csrcrspackbug2node_modulesinlinestyleprefixerescreatePrefixer.default)({
    prefixMap: _csrcrspackbug2node_modulesinlinestyleprefixeresdata.default.prefixMap,
    plugins: plugins
});
},
"c:\\src\\rspack-bug2\\node_modules\\inline-style-prefixer\\es\\plugins\\crossFade.js": function (module, exports, __webpack_require__) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return crossFade;
    }
});
var _csrcrspackbug2node_modulescssinjsutilsesindex = __webpack_require__("c:\\src\\rspack-bug2\\node_modules\\css-in-js-utils\\es\\index.js");
var CROSS_FADE_REGEX = /cross-fade\(/g;
var prefixes = [
    '-webkit-',
    ''
];
function crossFade(property, value) {
    if (typeof value === 'string' && !(0, _csrcrspackbug2node_modulescssinjsutilsesindex.isPrefixedValue)(value) && value.indexOf('cross-fade(') !== -1) return prefixes.map(function(prefix) {
        return value.replace(CROSS_FADE_REGEX, prefix + 'cross-fade(');
    });
}
},
"c:\\src\\rspack-bug2\\node_modules\\inline-style-prefixer\\es\\plugins\\cursor.js": function (module, exports, __webpack_require__) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return cursor;
    }
});
var prefixes = [
    '-webkit-',
    '-moz-',
    ''
];
var values = {
    'zoom-in': true,
    'zoom-out': true,
    grab: true,
    grabbing: true
};
function cursor(property, value) {
    if (property === 'cursor' && values.hasOwnProperty(value)) return prefixes.map(function(prefix) {
        return prefix + value;
    });
}
},
"c:\\src\\rspack-bug2\\node_modules\\inline-style-prefixer\\es\\plugins\\filter.js": function (module, exports, __webpack_require__) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return filter;
    }
});
var _csrcrspackbug2node_modulescssinjsutilsesindex = __webpack_require__("c:\\src\\rspack-bug2\\node_modules\\css-in-js-utils\\es\\index.js");
var FILTER_REGEX = /filter\(/g;
var prefixes = [
    '-webkit-',
    ''
];
function filter(property, value) {
    if (typeof value === 'string' && !(0, _csrcrspackbug2node_modulescssinjsutilsesindex.isPrefixedValue)(value) && value.indexOf('filter(') !== -1) return prefixes.map(function(prefix) {
        return value.replace(FILTER_REGEX, prefix + 'filter(');
    });
}
},
"c:\\src\\rspack-bug2\\node_modules\\inline-style-prefixer\\es\\plugins\\flex.js": function (module, exports, __webpack_require__) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return flex;
    }
});
var values = {
    flex: [
        '-webkit-box',
        '-moz-box',
        '-ms-flexbox',
        '-webkit-flex',
        'flex'
    ],
    'inline-flex': [
        '-webkit-inline-box',
        '-moz-inline-box',
        '-ms-inline-flexbox',
        '-webkit-inline-flex',
        'inline-flex'
    ]
};
function flex(property, value) {
    if (property === 'display' && values.hasOwnProperty(value)) return values[value];
}
},
"c:\\src\\rspack-bug2\\node_modules\\inline-style-prefixer\\es\\plugins\\flexboxOld.js": function (module, exports, __webpack_require__) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return flexboxOld;
    }
});
var alternativeValues = {
    'space-around': 'justify',
    'space-between': 'justify',
    'flex-start': 'start',
    'flex-end': 'end',
    'wrap-reverse': 'multiple',
    wrap: 'multiple'
};
var alternativeProps = {
    alignItems: 'WebkitBoxAlign',
    justifyContent: 'WebkitBoxPack',
    flexWrap: 'WebkitBoxLines',
    flexGrow: 'WebkitBoxFlex'
};
function flexboxOld(property, value, style) {
    if (property === 'flexDirection' && typeof value === 'string') {
        if (value.indexOf('column') > -1) style.WebkitBoxOrient = 'vertical';
        else style.WebkitBoxOrient = 'horizontal';
        if (value.indexOf('reverse') > -1) style.WebkitBoxDirection = 'reverse';
        else style.WebkitBoxDirection = 'normal';
    }
    if (alternativeProps.hasOwnProperty(property)) style[alternativeProps[property]] = alternativeValues[value] || value;
}
},
"c:\\src\\rspack-bug2\\node_modules\\inline-style-prefixer\\es\\plugins\\gradient.js": function (module, exports, __webpack_require__) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return gradient;
    }
});
var _csrcrspackbug2node_modulescssinjsutilslibisPrefixedValue = __webpack_require__.ir(__webpack_require__("c:\\src\\rspack-bug2\\node_modules\\css-in-js-utils\\lib\\isPrefixedValue.js"));
var prefixes = [
    '-webkit-',
    '-moz-',
    ''
];
var values = /linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/gi;
function gradient(property, value) {
    if (typeof value === 'string' && !(0, _csrcrspackbug2node_modulescssinjsutilslibisPrefixedValue.default)(value) && values.test(value)) return prefixes.map(function(prefix) {
        return value.replace(values, function(grad) {
            return prefix + grad;
        });
    });
}
},
"c:\\src\\rspack-bug2\\node_modules\\inline-style-prefixer\\es\\plugins\\grid.js": function (module, exports, __webpack_require__) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return grid;
    }
});
var _slicedToArray = function() {
    function sliceIterator(arr, i) {
        var _arr = [];
        var _n = true;
        var _d = false;
        var _e = undefined;
        try {
            for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){
                _arr.push(_s.value);
                if (i && _arr.length === i) break;
            }
        } catch (err) {
            _d = true;
            _e = err;
        } finally{
            try {
                if (!_n && _i["return"]) _i["return"]();
            } finally{
                if (_d) throw _e;
            }
        }
        return _arr;
    }
    return function(arr, i) {
        if (Array.isArray(arr)) return arr;
        else if (Symbol.iterator in Object(arr)) return sliceIterator(arr, i);
        else throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
}();
function isSimplePositionValue(value) {
    return typeof value === 'number' && !isNaN(value);
}
function isComplexSpanValue(value) {
    return typeof value === 'string' && value.includes('/');
}
var alignmentValues = [
    'center',
    'end',
    'start',
    'stretch'
];
var displayValues = {
    'inline-grid': [
        '-ms-inline-grid',
        'inline-grid'
    ],
    grid: [
        '-ms-grid',
        'grid'
    ]
};
var propertyConverters = {
    alignSelf: function alignSelf(value, style) {
        if (alignmentValues.indexOf(value) > -1) style.msGridRowAlign = value;
    },
    gridColumn: function gridColumn(value, style) {
        if (isSimplePositionValue(value)) style.msGridColumn = value;
        else if (isComplexSpanValue(value)) {
            var _value$split = value.split('/'), _value$split2 = _slicedToArray(_value$split, 2), start = _value$split2[0], end = _value$split2[1];
            propertyConverters.gridColumnStart(+start, style);
            var _end$split = end.split(/ ?span /), _end$split2 = _slicedToArray(_end$split, 2), maybeSpan = _end$split2[0], maybeNumber = _end$split2[1];
            if (maybeSpan === '') propertyConverters.gridColumnEnd(+start + +maybeNumber, style);
            else propertyConverters.gridColumnEnd(+end, style);
        } else propertyConverters.gridColumnStart(value, style);
    },
    gridColumnEnd: function gridColumnEnd(value, style) {
        var msGridColumn = style.msGridColumn;
        if (isSimplePositionValue(value) && isSimplePositionValue(msGridColumn)) style.msGridColumnSpan = value - msGridColumn;
    },
    gridColumnStart: function gridColumnStart(value, style) {
        if (isSimplePositionValue(value)) style.msGridColumn = value;
    },
    gridRow: function gridRow(value, style) {
        if (isSimplePositionValue(value)) style.msGridRow = value;
        else if (isComplexSpanValue(value)) {
            var _value$split3 = value.split('/'), _value$split4 = _slicedToArray(_value$split3, 2), start = _value$split4[0], end = _value$split4[1];
            propertyConverters.gridRowStart(+start, style);
            var _end$split3 = end.split(/ ?span /), _end$split4 = _slicedToArray(_end$split3, 2), maybeSpan = _end$split4[0], maybeNumber = _end$split4[1];
            if (maybeSpan === '') propertyConverters.gridRowEnd(+start + +maybeNumber, style);
            else propertyConverters.gridRowEnd(+end, style);
        } else propertyConverters.gridRowStart(value, style);
    },
    gridRowEnd: function gridRowEnd(value, style) {
        var msGridRow = style.msGridRow;
        if (isSimplePositionValue(value) && isSimplePositionValue(msGridRow)) style.msGridRowSpan = value - msGridRow;
    },
    gridRowStart: function gridRowStart(value, style) {
        if (isSimplePositionValue(value)) style.msGridRow = value;
    },
    gridTemplateColumns: function gridTemplateColumns(value, style) {
        style.msGridColumns = value;
    },
    gridTemplateRows: function gridTemplateRows(value, style) {
        style.msGridRows = value;
    },
    justifySelf: function justifySelf(value, style) {
        if (alignmentValues.indexOf(value) > -1) style.msGridColumnAlign = value;
    }
};
function grid(property, value, style) {
    if (property === 'display' && value in displayValues) return displayValues[value];
    if (property in propertyConverters) {
        var propertyConverter = propertyConverters[property];
        propertyConverter(value, style);
    }
}
},
"c:\\src\\rspack-bug2\\node_modules\\inline-style-prefixer\\es\\plugins\\imageSet.js": function (module, exports, __webpack_require__) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return imageSet;
    }
});
var _csrcrspackbug2node_modulescssinjsutilslibisPrefixedValue = __webpack_require__.ir(__webpack_require__("c:\\src\\rspack-bug2\\node_modules\\css-in-js-utils\\lib\\isPrefixedValue.js"));
var prefixes = [
    '-webkit-',
    ''
];
function imageSet(property, value) {
    if (typeof value === 'string' && !(0, _csrcrspackbug2node_modulescssinjsutilslibisPrefixedValue.default)(value) && value.indexOf('image-set(') > -1) return prefixes.map(function(prefix) {
        return value.replace(/image-set\(/g, prefix + 'image-set(');
    });
}
},
"c:\\src\\rspack-bug2\\node_modules\\inline-style-prefixer\\es\\plugins\\logical.js": function (module, exports, __webpack_require__) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return logical;
    }
});
var alternativeProps = {
    marginBlockStart: [
        'WebkitMarginBefore'
    ],
    marginBlockEnd: [
        'WebkitMarginAfter'
    ],
    marginInlineStart: [
        'WebkitMarginStart',
        'MozMarginStart'
    ],
    marginInlineEnd: [
        'WebkitMarginEnd',
        'MozMarginEnd'
    ],
    paddingBlockStart: [
        'WebkitPaddingBefore'
    ],
    paddingBlockEnd: [
        'WebkitPaddingAfter'
    ],
    paddingInlineStart: [
        'WebkitPaddingStart',
        'MozPaddingStart'
    ],
    paddingInlineEnd: [
        'WebkitPaddingEnd',
        'MozPaddingEnd'
    ],
    borderBlockStart: [
        'WebkitBorderBefore'
    ],
    borderBlockStartColor: [
        'WebkitBorderBeforeColor'
    ],
    borderBlockStartStyle: [
        'WebkitBorderBeforeStyle'
    ],
    borderBlockStartWidth: [
        'WebkitBorderBeforeWidth'
    ],
    borderBlockEnd: [
        'WebkitBorderAfter'
    ],
    borderBlockEndColor: [
        'WebkitBorderAfterColor'
    ],
    borderBlockEndStyle: [
        'WebkitBorderAfterStyle'
    ],
    borderBlockEndWidth: [
        'WebkitBorderAfterWidth'
    ],
    borderInlineStart: [
        'WebkitBorderStart',
        'MozBorderStart'
    ],
    borderInlineStartColor: [
        'WebkitBorderStartColor',
        'MozBorderStartColor'
    ],
    borderInlineStartStyle: [
        'WebkitBorderStartStyle',
        'MozBorderStartStyle'
    ],
    borderInlineStartWidth: [
        'WebkitBorderStartWidth',
        'MozBorderStartWidth'
    ],
    borderInlineEnd: [
        'WebkitBorderEnd',
        'MozBorderEnd'
    ],
    borderInlineEndColor: [
        'WebkitBorderEndColor',
        'MozBorderEndColor'
    ],
    borderInlineEndStyle: [
        'WebkitBorderEndStyle',
        'MozBorderEndStyle'
    ],
    borderInlineEndWidth: [
        'WebkitBorderEndWidth',
        'MozBorderEndWidth'
    ]
};
function logical(property, value, style) {
    if (Object.prototype.hasOwnProperty.call(alternativeProps, property)) {
        var alternativePropList = alternativeProps[property];
        for(var i = 0, len = alternativePropList.length; i < len; ++i)style[alternativePropList[i]] = value;
    }
}
},
"c:\\src\\rspack-bug2\\node_modules\\inline-style-prefixer\\es\\plugins\\position.js": function (module, exports, __webpack_require__) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return position;
    }
});
function position(property, value) {
    if (property === 'position' && value === 'sticky') return [
        '-webkit-sticky',
        'sticky'
    ];
}
},
"c:\\src\\rspack-bug2\\node_modules\\inline-style-prefixer\\es\\plugins\\sizing.js": function (module, exports, __webpack_require__) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return sizing;
    }
});
var prefixes = [
    '-webkit-',
    '-moz-',
    ''
];
var properties = {
    maxHeight: true,
    maxWidth: true,
    width: true,
    height: true,
    columnWidth: true,
    minWidth: true,
    minHeight: true
};
var values = {
    'min-content': true,
    'max-content': true,
    'fill-available': true,
    'fit-content': true,
    'contain-floats': true
};
function sizing(property, value) {
    if (properties.hasOwnProperty(property) && values.hasOwnProperty(value)) return prefixes.map(function(prefix) {
        return prefix + value;
    });
}
},
"c:\\src\\rspack-bug2\\node_modules\\inline-style-prefixer\\es\\plugins\\transition.js": function (module, exports, __webpack_require__) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return transition;
    }
});
var _csrcrspackbug2node_modulescssinjsutilslibhyphenateProperty = __webpack_require__.ir(__webpack_require__("c:\\src\\rspack-bug2\\node_modules\\css-in-js-utils\\lib\\hyphenateProperty.js"));
var _csrcrspackbug2node_modulescssinjsutilslibisPrefixedValue = __webpack_require__.ir(__webpack_require__("c:\\src\\rspack-bug2\\node_modules\\css-in-js-utils\\lib\\isPrefixedValue.js"));
var _csrcrspackbug2node_modulesinlinestyleprefixeresutilscapitalizeString = __webpack_require__.ir(__webpack_require__("c:\\src\\rspack-bug2\\node_modules\\inline-style-prefixer\\es\\utils\\capitalizeString.js"));
var properties = {
    transition: true,
    transitionProperty: true,
    WebkitTransition: true,
    WebkitTransitionProperty: true,
    MozTransition: true,
    MozTransitionProperty: true
};
var prefixMapping = {
    Webkit: '-webkit-',
    Moz: '-moz-',
    ms: '-ms-'
};
function prefixValue(value, propertyPrefixMap) {
    if ((0, _csrcrspackbug2node_modulescssinjsutilslibisPrefixedValue.default)(value)) return value;
    var multipleValues = value.split(/,(?![^()]*(?:\([^()]*\))?\))/g);
    for(var i = 0, len = multipleValues.length; i < len; ++i){
        var singleValue = multipleValues[i];
        var values = [
            singleValue
        ];
        for(var property in propertyPrefixMap){
            var dashCaseProperty = (0, _csrcrspackbug2node_modulescssinjsutilslibhyphenateProperty.default)(property);
            if (singleValue.indexOf(dashCaseProperty) > -1 && dashCaseProperty !== 'order') {
                var prefixes = propertyPrefixMap[property];
                for(var j = 0, pLen = prefixes.length; j < pLen; ++j)values.unshift(singleValue.replace(dashCaseProperty, prefixMapping[prefixes[j]] + dashCaseProperty));
            }
        }
        multipleValues[i] = values.join(',');
    }
    return multipleValues.join(',');
}
function transition(property, value, style, propertyPrefixMap) {
    if (typeof value === 'string' && properties.hasOwnProperty(property)) {
        var outputValue = prefixValue(value, propertyPrefixMap);
        var webkitOutput = outputValue.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function(val) {
            return !/-moz-|-ms-/.test(val);
        }).join(',');
        if (property.indexOf('Webkit') > -1) return webkitOutput;
        var mozOutput = outputValue.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function(val) {
            return !/-webkit-|-ms-/.test(val);
        }).join(',');
        if (property.indexOf('Moz') > -1) return mozOutput;
        style['Webkit' + (0, _csrcrspackbug2node_modulesinlinestyleprefixeresutilscapitalizeString.default)(property)] = webkitOutput;
        style['Moz' + (0, _csrcrspackbug2node_modulesinlinestyleprefixeresutilscapitalizeString.default)(property)] = mozOutput;
        return outputValue;
    }
}
},
"c:\\src\\rspack-bug2\\node_modules\\inline-style-prefixer\\es\\utils\\addNewValuesOnly.js": function (module, exports, __webpack_require__) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return addNewValuesOnly;
    }
});
function addIfNew(list, value) {
    if (list.indexOf(value) === -1) list.push(value);
}
function addNewValuesOnly(list, values) {
    if (Array.isArray(values)) for(var i = 0, len = values.length; i < len; ++i)addIfNew(list, values[i]);
    else addIfNew(list, values);
}
},
"c:\\src\\rspack-bug2\\node_modules\\inline-style-prefixer\\es\\utils\\capitalizeString.js": function (module, exports, __webpack_require__) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return capitalizeString;
    }
});
function capitalizeString(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
},
"c:\\src\\rspack-bug2\\node_modules\\inline-style-prefixer\\es\\utils\\isObject.js": function (module, exports, __webpack_require__) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return isObject;
    }
});
function isObject(value) {
    return value instanceof Object && !Array.isArray(value);
}
},
"c:\\src\\rspack-bug2\\node_modules\\inline-style-prefixer\\es\\utils\\prefixProperty.js": function (module, exports, __webpack_require__) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return prefixProperty;
    }
});
var _csrcrspackbug2node_modulesinlinestyleprefixeresutilscapitalizeString = __webpack_require__.ir(__webpack_require__("c:\\src\\rspack-bug2\\node_modules\\inline-style-prefixer\\es\\utils\\capitalizeString.js"));
function prefixProperty(prefixProperties, property, style) {
    var requiredPrefixes = prefixProperties[property];
    if (requiredPrefixes && style.hasOwnProperty(property)) {
        var capitalizedProperty = (0, _csrcrspackbug2node_modulesinlinestyleprefixeresutilscapitalizeString.default)(property);
        for(var i = 0; i < requiredPrefixes.length; ++i){
            var prefixedProperty = requiredPrefixes[i] + capitalizedProperty;
            if (!style[prefixedProperty]) style[prefixedProperty] = style[property];
        }
    }
    return style;
}
},
"c:\\src\\rspack-bug2\\node_modules\\inline-style-prefixer\\es\\utils\\prefixValue.js": function (module, exports, __webpack_require__) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return prefixValue;
    }
});
function prefixValue(plugins, property, value, style, metaData) {
    for(var i = 0, len = plugins.length; i < len; ++i){
        var processedValue = plugins[i](property, value, style, metaData);
        if (processedValue) return processedValue;
    }
}
},
"./src/index.ts": function (module, exports, __webpack_require__) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    simpleDemoPackage: function() {
        return simpleDemoPackage;
    },
    inlineStylePrefixer: function() {
        return _csrcrspackbug2node_modulesinlinestyleprefixeresindex.default;
    }
});
var _csrcrspackbug2node_modulesinlinestyleprefixeresindex = __webpack_require__.ir(__webpack_require__("c:\\src\\rspack-bug2\\node_modules\\inline-style-prefixer\\es\\index.js"));
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
var __webpack_exports__ = __webpack_require__("./src/index.ts");
})()

//# sourceMappingURL=main.js.map