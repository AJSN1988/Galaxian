/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/scss/style.scss":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/scss/style.scss ***!
  \******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/img/b_sheet_80_20.png":
/*!***********************************!*\
  !*** ./src/img/b_sheet_80_20.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "b191b2ea45458f1e5dd8d4c6fce430b2.png";

/***/ }),

/***/ "./src/img/e_exp_sheet.png":
/*!*********************************!*\
  !*** ./src/img/e_exp_sheet.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "4e1b749a62853959b4f5cc07b7c33e71.png";

/***/ }),

/***/ "./src/img/g_sheet_80_20.png":
/*!***********************************!*\
  !*** ./src/img/g_sheet_80_20.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a31e895f596b1f60acc57b140504b8dc.png";

/***/ }),

/***/ "./src/img/live.png":
/*!**************************!*\
  !*** ./src/img/live.png ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "209999fac82225d7536c11aa7127a6c1.png";

/***/ }),

/***/ "./src/img/logo.png":
/*!**************************!*\
  !*** ./src/img/logo.png ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "24ec227ba687ec0b31cf4b8a2a9e2030.png";

/***/ }),

/***/ "./src/img/p_sheet_80_20.png":
/*!***********************************!*\
  !*** ./src/img/p_sheet_80_20.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "05c6c7b5137241676fc858f595370aef.png";

/***/ }),

/***/ "./src/img/player.png":
/*!****************************!*\
  !*** ./src/img/player.png ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "f8cca5748d6c8e80143e9a8851cf81d3.png";

/***/ }),

/***/ "./src/img/player_explode_big.png":
/*!****************************************!*\
  !*** ./src/img/player_explode_big.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "7e720a8b9528787708e7dd7fc2d909dd.png";

/***/ }),

/***/ "./src/img/r_sheet_80_20.png":
/*!***********************************!*\
  !*** ./src/img/r_sheet_80_20.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "7ba60adf520a229d41b23031fb430130.png";

/***/ }),

/***/ "./src/img/wave_sprite.png":
/*!*********************************!*\
  !*** ./src/img/wave_sprite.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "08c7d195d7c67b80e39f04953b6f4843.png";

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/style.scss */ "./src/scss/style.scss");
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_style_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _img_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/logo.png */ "./src/img/logo.png");
/* harmony import */ var _img_logo_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_img_logo_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _js_game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/game */ "./src/js/game.js");


 // Game state

var onGame = false; // Logo

var gLogo = new Image(250, 70);
gLogo.src = _img_logo_png__WEBPACK_IMPORTED_MODULE_1___default.a;
var logoBlock = document.getElementById('logo');
logoBlock.appendChild(gLogo); // Menu

var menu = document.getElementById('menu'); // User input

var input = document.getElementById('userInput');
input.value = 'USER111';

input.onclick = function () {
  input.value = '';
};

input.onblur = function () {
  input.value = input.value ? input.value : 'USER111';
}; // get canvas


var canvas = document.getElementById('gameCanvas');

function StartGame() {
  menu.style.display = 'none';
  canvas.style.display = 'block'; // Init game object

  var game = new _js_game__WEBPACK_IMPORTED_MODULE_2__["default"](canvas, input.value); // Start game loop

  game.start();
} // Start game from keyboeard


function startEnter(e) {
  var code = e.which || e.keyCode;

  if (code == '13' && !onGame) {
    StartGame();
    onGame = true;
  }
} // Start game click


var startBtn = document.getElementById('startBtn');

startBtn.onclick = function () {
  StartGame();
  onGame = true;
};

window.addEventListener('keydown', startEnter);

/***/ }),

/***/ "./src/js/entities.js":
/*!****************************!*\
  !*** ./src/js/entities.js ***!
  \****************************/
/*! exports provided: Player, BlueEnemy, PurpleEnemy, RedEnemy, GeneralEnemy, Bullet, Unit, Rocket, EnemyExplode, PlayerExplode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlueEnemy", function() { return BlueEnemy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurpleEnemy", function() { return PurpleEnemy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedEnemy", function() { return RedEnemy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralEnemy", function() { return GeneralEnemy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bullet", function() { return Bullet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Unit", function() { return Unit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rocket", function() { return Rocket; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnemyExplode", function() { return EnemyExplode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerExplode", function() { return PlayerExplode; });
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings */ "./src/js/settings.js");
/* harmony import */ var _vector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vector */ "./src/js/vector.js");
function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function set(target, property, value, receiver) { if (typeof Reflect !== "undefined" && Reflect.set) { set = Reflect.set; } else { set = function set(target, property, value, receiver) { var base = _superPropBase(target, property); var desc; if (base) { desc = Object.getOwnPropertyDescriptor(base, property); if (desc.set) { desc.set.call(receiver, value); return true; } else if (!desc.writable) { return false; } } desc = Object.getOwnPropertyDescriptor(receiver, property); if (desc) { if (!desc.writable) { return false; } desc.value = value; Object.defineProperty(receiver, property, desc); } else { _defineProperty(receiver, property, value); } return true; }; } return set(target, property, value, receiver); }

function _set(target, property, value, receiver, isStrict) { var s = set(target, property, value, receiver || target); if (!s && isStrict) { throw new Error('failed to set property'); } return value; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Game enteties


var PLAYER_SETTINGS = _settings__WEBPACK_IMPORTED_MODULE_0__["default"].player;
var BULLET_SETTINGS = _settings__WEBPACK_IMPORTED_MODULE_0__["default"].bullet;
var ROCKET_SETTINGS = _settings__WEBPACK_IMPORTED_MODULE_0__["default"].rocket;
var BLUE_ENEMY_SETTINGS = _settings__WEBPACK_IMPORTED_MODULE_0__["default"].blueEnemy;
var PURPLE_ENEMY_SETTINGS = _settings__WEBPACK_IMPORTED_MODULE_0__["default"].purpleEnemy;
var RED_ENEMY_SETTINGS = _settings__WEBPACK_IMPORTED_MODULE_0__["default"].redEnemy;
var GENERAL_ENEMY_SETTINGS = _settings__WEBPACK_IMPORTED_MODULE_0__["default"].generalEnemy;
var ENEMY_EXPLODE = _settings__WEBPACK_IMPORTED_MODULE_0__["default"].enemyExplode;
var PLAYER_EXPLODE = _settings__WEBPACK_IMPORTED_MODULE_0__["default"].playerExplode;

var Bullet =
/*#__PURE__*/
function () {
  // Class for bullet object
  function Bullet(context, position) {
    _classCallCheck(this, Bullet);

    this.position = position;
    this.context = context;
    this.speed = BULLET_SETTINGS.speed;
    this.size = {
      width: BULLET_SETTINGS.width,
      height: BULLET_SETTINGS.height
    };
    this.topLimit = BULLET_SETTINGS.limitsY.top;
    this.bottomLimit = BULLET_SETTINGS.limitsY.bottom;
    this.sprite = BULLET_SETTINGS.sprite;
    this.stop = false; // Detect stop bullet moving

    this.ready = true; // Detect ready bullet stste if she moving - not ready
  }

  _createClass(Bullet, [{
    key: "update",
    value: function update() {
      // If bullet is hide not update this
      if (!this.stop) {
        this.ready = false;
        this.position.y = this.position.y - this.speed;

        if (this.position.y >= this.bottomLimit || this.position.y + this.size.width <= this.topLimit) {
          // Stop bullet if arrived limit
          this.stop = true; // Set ready status

          this.ready = true;
        } // Add detect collisions below

      }

      this._draw(this.context);
    }
  }, {
    key: "_draw",
    value: function _draw(context) {
      context.fillStyle = this.sprite;
      context.fillRect(this.position.x, this.position.y, this.size.width, this.size.height);
    }
  }, {
    key: "setPosition",
    value: function setPosition(position) {
      this.position = position;
      this.stop = false;
      this.ready = true;
    }
  }, {
    key: "collision",
    value: function collision(opponent) {
      // Detect collision with another object (using his rect prop)
      var r = this._getRect();

      var opp = opponent._getRect();

      return r.right >= opp.left && r.left <= opp.right && r.top <= opp.bottom && r.bottom >= opp.top;
    }
  }, {
    key: "_getRect",
    value: function _getRect() {
      return {
        top: this.position.y,
        right: this.position.x + this.size.width,
        bottom: this.position.y + this.size.height,
        left: this.position.x
      };
    }
  }]);

  return Bullet;
}();

var Rocket =
/*#__PURE__*/
function (_Bullet) {
  _inherits(Rocket, _Bullet);

  // Class for enemy rockets
  function Rocket(context, position) {
    var _this;

    _classCallCheck(this, Rocket);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Rocket).call(this, context, position));

    _set(_getPrototypeOf(Rocket.prototype), "position", position, _assertThisInitialized(_this), true);

    _set(_getPrototypeOf(Rocket.prototype), "context", context, _assertThisInitialized(_this), true);

    _set(_getPrototypeOf(Rocket.prototype), "speed", ROCKET_SETTINGS.speed, _assertThisInitialized(_this), true);

    _set(_getPrototypeOf(Rocket.prototype), "size", {
      width: ROCKET_SETTINGS.width,
      height: ROCKET_SETTINGS.height
    }, _assertThisInitialized(_this), true);

    _set(_getPrototypeOf(Rocket.prototype), "topLimit", ROCKET_SETTINGS.limitsY.top, _assertThisInitialized(_this), true);

    _set(_getPrototypeOf(Rocket.prototype), "bottomLimit", ROCKET_SETTINGS.limitsY.bottom, _assertThisInitialized(_this), true);

    _set(_getPrototypeOf(Rocket.prototype), "sprite", ROCKET_SETTINGS.sprite, _assertThisInitialized(_this), true);

    return _this;
  }

  _createClass(Rocket, [{
    key: "update",
    value: function update() {
      // If bullet is hide not update this
      if (!this.stop) {
        this.ready = false;
        this.position.y = this.position.y + this.speed;

        if (this.position.y >= this.bottomLimit || this.position.y + this.size.width <= this.topLimit) {
          // Stop bullet if arrived limit
          this.stop = true; // Set ready status

          this.ready = true;
        }
      }

      this._draw(this.context);
    }
  }]);

  return Rocket;
}(Bullet);

var Unit =
/*#__PURE__*/
function () {
  // Base units class    
  function Unit(context, position) {
    _classCallCheck(this, Unit);

    this.context = context;
    this.sprite;
    this.limit = {
      x: 0.5,
      y: 0.5
    };
    this.size = {
      width: 0,
      height: 0
    };
    this.position = position;
    this.waypoints = [];
    this.objective = 0;
    this.speed;
    this.speedAttack;
    this.shots;
    this.rockets = [];

    for (var i = 0; i < 5; i++) {
      this.rockets.push(new Rocket(this.context, new _vector__WEBPACK_IMPORTED_MODULE_1__["default"](-100, -100)));
    }

    this.attack = false;
    this.hide = false;
    this.frameRate = 0;
    this.frameLimit = 60;
    this.direction = 'none';
    this.cost = 0;
  }

  _createClass(Unit, [{
    key: "update",
    value: function update() {
      if (!this.waypoints.length) {
        return false;
      } // Change direction 


      if (this.attack && this.position.x < this.waypoints[this.objective].x) {
        this.direction = 'right';
      } else if (this.attack && this.position.x > this.waypoints[this.objective].x) {
        this.direction = 'left';
      }

      var speed = this.speed;
      var distance = this.position.substract(this.waypoints[this.objective]);
      var distanceNorm = distance.normalize();

      if (this.attack) {
        speed = this.speed * this.speedAttack;
      } else {
        speed = this.speed;
      }

      this.position = this.position.add(distanceNorm.multiply(speed));

      if (distance.getMagnitude() - speed <= 0) {
        this.position = this.waypoints[this.objective];

        if (this.objective < this.waypoints.length - 1) {
          this.objective++;
        } else if (this.attack && this.objective == this.waypoints.length - 1) {
          // Last waypoint in attack
          this.attack = false;

          this._setPosition(new _vector__WEBPACK_IMPORTED_MODULE_1__["default"](-100, -100));

          this.waypoints = [];
        } else {
          this.objective = 0;
        } // Change unit speed if he unvisible on game canvas


        if (this.attack && this.objective > this.waypoints.length - 4) {
          speed += this.speed + this.speedAttack * 1000;
        } else if (this.attack && this.objective == this.waypoints.length - 1) {
          speed += this.speed + this.speedAttack;
        }
      }

      this._draw();
    }
  }, {
    key: "collision",
    value: function collision(opponent) {
      // Detect collision with another object (using his rect prop)
      var r = this._getRect();

      var opp = opponent._getRect();

      return r.right >= opp.left && r.left <= opp.right && r.top <= opp.bottom && r.bottom >= opp.top;
    }
  }, {
    key: "setWaypoints",
    value: function setWaypoints(waypoints) {
      if (Array.isArray(waypoints)) {
        this.waypoints = waypoints;
      } else {
        this.waypoints = [];
        var ways = [];

        if (waypoints instanceof _vector__WEBPACK_IMPORTED_MODULE_1__["default"]) {
          [].forEach.call(arguments, function (arg) {
            ways.push(arg);
          });
        }

        this.waypoints = ways;
      }
    }
  }, {
    key: "kill",
    value: function kill() {
      this.hide = true;

      this._setPosition(new _vector__WEBPACK_IMPORTED_MODULE_1__["default"](1000, 1000));

      this.waypoints = [];
      this.attack = false;
    }
  }, {
    key: "_draw",
    value: function _draw() {
      if (this.hide) {
        this.context.fillStyle = 'rgba(0, 0, 0, 0)';
        this.context.save();
        this.context.translate(-1 * (this.limit.x * this.size.width), -1 * (this.limit.y * this.size.height));
        this.context.fillRect(this.position.x, this.position.y, 20, 20);
        this.context.restore();
      } else {
        this.context.save();
        this.context.translate(-1 * (this.limit.x * this.size.width), -1 * (this.limit.y * this.size.height));

        if (this.direction == 'none') {
          // Sprite animation from sprite sheet (for idle use only 2 first frames)
          if (this.frameRate < this.frameLimit) {
            this.context.drawImage(this.sprite, 0, 0, this.size.width, this.size.height, this.position.x, this.position.y, 20, 20);
            this.frameRate++;
          } else if (this.frameRate >= this.frameLimit && this.frameRate <= this.frameLimit * 2) {
            this.context.drawImage(this.sprite, 20, 0, this.size.width, this.size.height, this.position.x, this.position.y, 20, 20);
            this.frameRate++;
          } else {
            this.context.drawImage(this.sprite, 20, 0, this.size.width, this.size.height, this.position.x, this.position.y, 20, 20);
            this.frameRate = 0;
          }
        } else if (this.direction == 'right') {
          this.context.drawImage(this.sprite, 40, 0, this.size.width, this.size.height, this.position.x, this.position.y, 20, 20);
        } else if (this.direction == 'left') {
          this.context.drawImage(this.sprite, 60, 0, this.size.width, this.size.height, this.position.x, this.position.y, 20, 20);
        }

        this.context.restore();
      }
    }
  }, {
    key: "_setPosition",
    value: function _setPosition(position) {
      this.position = position;
    }
  }, {
    key: "setPosition",
    value: function setPosition(position) {
      this._setPosition(position);
    }
  }, {
    key: "_getRect",
    value: function _getRect() {
      return {
        top: this.position.y,
        right: this.position.x + this.size.width,
        bottom: this.position.y + this.size.height,
        left: this.position.x
      };
    }
  }]);

  return Unit;
}();

var BlueEnemy =
/*#__PURE__*/
function (_Unit) {
  _inherits(BlueEnemy, _Unit);

  // Blue enemy class
  function BlueEnemy(context, position) {
    var _this2;

    _classCallCheck(this, BlueEnemy);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(BlueEnemy).call(this, context, position));

    _set(_getPrototypeOf(BlueEnemy.prototype), "sprite", BLUE_ENEMY_SETTINGS.sprite, _assertThisInitialized(_this2), true);

    _set(_getPrototypeOf(BlueEnemy.prototype), "position", position, _assertThisInitialized(_this2), true);

    _set(_getPrototypeOf(BlueEnemy.prototype), "context", context, _assertThisInitialized(_this2), true);

    _set(_getPrototypeOf(BlueEnemy.prototype), "size", {
      width: BLUE_ENEMY_SETTINGS.width,
      height: BLUE_ENEMY_SETTINGS.height
    }, _assertThisInitialized(_this2), true);

    _set(_getPrototypeOf(BlueEnemy.prototype), "speed", BLUE_ENEMY_SETTINGS.speed, _assertThisInitialized(_this2), true);

    _set(_getPrototypeOf(BlueEnemy.prototype), "speedAttack", BLUE_ENEMY_SETTINGS.speedAttack, _assertThisInitialized(_this2), true);

    _set(_getPrototypeOf(BlueEnemy.prototype), "shots", BLUE_ENEMY_SETTINGS.shots, _assertThisInitialized(_this2), true);

    _set(_getPrototypeOf(BlueEnemy.prototype), "cost", BLUE_ENEMY_SETTINGS.cost, _assertThisInitialized(_this2), true);

    return _this2;
  }

  return BlueEnemy;
}(Unit);

var PurpleEnemy =
/*#__PURE__*/
function (_Unit2) {
  _inherits(PurpleEnemy, _Unit2);

  // Purple enemy class
  function PurpleEnemy(context, position) {
    var _this3;

    _classCallCheck(this, PurpleEnemy);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(PurpleEnemy).call(this, context, position));

    _set(_getPrototypeOf(PurpleEnemy.prototype), "sprite", PURPLE_ENEMY_SETTINGS.sprite, _assertThisInitialized(_this3), true);

    _set(_getPrototypeOf(PurpleEnemy.prototype), "position", position, _assertThisInitialized(_this3), true);

    _set(_getPrototypeOf(PurpleEnemy.prototype), "context", context, _assertThisInitialized(_this3), true);

    _set(_getPrototypeOf(PurpleEnemy.prototype), "size", {
      width: PURPLE_ENEMY_SETTINGS.width,
      height: PURPLE_ENEMY_SETTINGS.height
    }, _assertThisInitialized(_this3), true);

    _set(_getPrototypeOf(PurpleEnemy.prototype), "speed", PURPLE_ENEMY_SETTINGS.speed, _assertThisInitialized(_this3), true);

    _set(_getPrototypeOf(PurpleEnemy.prototype), "speedAttack", PURPLE_ENEMY_SETTINGS.speedAttack, _assertThisInitialized(_this3), true);

    _set(_getPrototypeOf(PurpleEnemy.prototype), "shots", PURPLE_ENEMY_SETTINGS.shots, _assertThisInitialized(_this3), true);

    _set(_getPrototypeOf(PurpleEnemy.prototype), "cost", PURPLE_ENEMY_SETTINGS.cost, _assertThisInitialized(_this3), true);

    return _this3;
  }

  return PurpleEnemy;
}(Unit);

var RedEnemy =
/*#__PURE__*/
function (_Unit3) {
  _inherits(RedEnemy, _Unit3);

  // Red enemy class
  function RedEnemy(context, position) {
    var _this4;

    _classCallCheck(this, RedEnemy);

    _this4 = _possibleConstructorReturn(this, _getPrototypeOf(RedEnemy).call(this, context, position));

    _set(_getPrototypeOf(RedEnemy.prototype), "sprite", RED_ENEMY_SETTINGS.sprite, _assertThisInitialized(_this4), true);

    _set(_getPrototypeOf(RedEnemy.prototype), "position", position, _assertThisInitialized(_this4), true);

    _set(_getPrototypeOf(RedEnemy.prototype), "context", context, _assertThisInitialized(_this4), true);

    _set(_getPrototypeOf(RedEnemy.prototype), "size", {
      width: RED_ENEMY_SETTINGS.width,
      height: RED_ENEMY_SETTINGS.height
    }, _assertThisInitialized(_this4), true);

    _set(_getPrototypeOf(RedEnemy.prototype), "speed", RED_ENEMY_SETTINGS.speed, _assertThisInitialized(_this4), true);

    _set(_getPrototypeOf(RedEnemy.prototype), "speedAttack", RED_ENEMY_SETTINGS.speedAttack, _assertThisInitialized(_this4), true);

    _set(_getPrototypeOf(RedEnemy.prototype), "shots", RED_ENEMY_SETTINGS.shots, _assertThisInitialized(_this4), true);

    _this4.general;

    _set(_getPrototypeOf(RedEnemy.prototype), "cost", RED_ENEMY_SETTINGS.cost, _assertThisInitialized(_this4), true);

    return _this4;
  }

  return RedEnemy;
}(Unit);

var GeneralEnemy =
/*#__PURE__*/
function (_Unit4) {
  _inherits(GeneralEnemy, _Unit4);

  // General enemy class
  function GeneralEnemy(context, position) {
    var _this5;

    _classCallCheck(this, GeneralEnemy);

    _this5 = _possibleConstructorReturn(this, _getPrototypeOf(GeneralEnemy).call(this, context, position));

    _set(_getPrototypeOf(GeneralEnemy.prototype), "sprite", GENERAL_ENEMY_SETTINGS.sprite, _assertThisInitialized(_this5), true);

    _set(_getPrototypeOf(GeneralEnemy.prototype), "position", position, _assertThisInitialized(_this5), true);

    _set(_getPrototypeOf(GeneralEnemy.prototype), "context", context, _assertThisInitialized(_this5), true);

    _set(_getPrototypeOf(GeneralEnemy.prototype), "size", {
      width: GENERAL_ENEMY_SETTINGS.width,
      height: GENERAL_ENEMY_SETTINGS.height
    }, _assertThisInitialized(_this5), true);

    _set(_getPrototypeOf(GeneralEnemy.prototype), "speed", GENERAL_ENEMY_SETTINGS.speed, _assertThisInitialized(_this5), true);

    _set(_getPrototypeOf(GeneralEnemy.prototype), "speedAttack", GENERAL_ENEMY_SETTINGS.speedAttack, _assertThisInitialized(_this5), true);

    _set(_getPrototypeOf(GeneralEnemy.prototype), "shots", GENERAL_ENEMY_SETTINGS.shots, _assertThisInitialized(_this5), true);

    _set(_getPrototypeOf(GeneralEnemy.prototype), "cost", GENERAL_ENEMY_SETTINGS.cost, _assertThisInitialized(_this5), true);

    return _this5;
  }

  return GeneralEnemy;
}(Unit);

var Player =
/*#__PURE__*/
function (_Unit5) {
  _inherits(Player, _Unit5);

  // Player unit class
  function Player(context, position) {
    var _this6;

    _classCallCheck(this, Player);

    _this6 = _possibleConstructorReturn(this, _getPrototypeOf(Player).call(this, context, position));

    _set(_getPrototypeOf(Player.prototype), "sprite", PLAYER_SETTINGS.sprite, _assertThisInitialized(_this6), true);

    _set(_getPrototypeOf(Player.prototype), "limit", PLAYER_SETTINGS.limit, _assertThisInitialized(_this6), true);

    _set(_getPrototypeOf(Player.prototype), "size", {
      width: PLAYER_SETTINGS.width,
      height: PLAYER_SETTINGS.height
    }, _assertThisInitialized(_this6), true);

    _set(_getPrototypeOf(Player.prototype), "position", position, _assertThisInitialized(_this6), true);

    _set(_getPrototypeOf(Player.prototype), "speed", PLAYER_SETTINGS.speed, _assertThisInitialized(_this6), true);

    return _this6;
  }

  _createClass(Player, [{
    key: "update",
    value: function update(direction) {
      if (direction == 'left') {
        if (this.position.x >= this.limit.left) {
          this.position.x = this.position.x - this.speed;
        }
      } else if (direction == 'right') {
        if (this.position.x <= this.limit.right) {
          this.position.x = this.position.x + this.speed;
        }
      }

      this._draw(this.context);
    }
  }, {
    key: "moveLeft",
    value: function moveLeft() {
      this.update('left');
    }
  }, {
    key: "moveRight",
    value: function moveRight() {
      this.update('right');
    }
  }, {
    key: "_draw",
    value: function _draw(context) {
      if (this.hide) {
        this.context.fillStyle = 'rgba(0, 0, 0, 0)';
      } else {
        context.drawImage(this.sprite, this.position.x, this.position.y, this.size.width, this.size.height);
      }
    }
  }, {
    key: "setPosition",
    value: function setPosition(position) {
      _get(_getPrototypeOf(Player.prototype), "_setPosition", this).call(this, position);
    }
  }]);

  return Player;
}(Unit);

var Explode =
/*#__PURE__*/
function () {
  // Base class for explode
  function Explode(context, position, limit) {
    _classCallCheck(this, Explode);

    this.position = position;
    this.context = context;
    this.size = {
      width: 0,
      height: 0
    };
    this.sprite;
    this.frameRate = 0;
    this.originLimit = limit;
    this.frameLimit = this.originLimit;
    this.frame = 0; // First frame

    this.frames = 4; // Animation steps

    this.hide = true;
    this.maxFrameRate = this.frameLimit * this.frames;
  }

  _createClass(Explode, [{
    key: "update",
    value: function update() {
      this._draw();
    }
  }, {
    key: "_draw",
    value: function _draw() {
      if (this.hide) {
        this.context.fillStyle = 'rgba(0, 0, 0, 0)';
        this.context.save();
        this.context.fillRect(this.position.x, this.position.y, this.size.width, this.size.height);
        this.context.restore();
        this.frame = 0;
        this.frameLimit = this.originLimit;
      } else {
        this.context.save(); // Sprite animation from sprite sheet (for idle use only 2 first frames)

        if (this.frameRate < this.frameLimit) {
          this.context.drawImage(this.sprite, this.size.width * this.frame, 0, this.size.width, this.size.height, this.position.x, this.position.y, this.size.width, this.size.height);
          this.frameRate++;
        } else if (this.frameRate >= this.frameLimit && this.frameRate <= this.frameLimit * 2 && this.frameRate <= this.maxFrameRate) {
          this.frame++;
          this.frameLimit *= 2;
          this.context.drawImage(this.sprite, this.size.width * this.frame, 0, this.size.width, this.size.height, this.position.x, this.position.y, this.size.width, this.size.height);
          this.frameRate++;
        } else {
          this.frameRate = 0;
          this.frame = 0;
          this.hide = true;
        }

        this.context.restore();
      }
    }
  }, {
    key: "setPosition",
    value: function setPosition(position) {
      this.position = position;
    }
  }]);

  return Explode;
}();

var EnemyExplode =
/*#__PURE__*/
function (_Explode) {
  _inherits(EnemyExplode, _Explode);

  function EnemyExplode(context, position, limit) {
    var _this7;

    _classCallCheck(this, EnemyExplode);

    _this7 = _possibleConstructorReturn(this, _getPrototypeOf(EnemyExplode).call(this, context, position, limit));
    _set(_getPrototypeOf(EnemyExplode.prototype), "size", {
      width: ENEMY_EXPLODE.size.width,
      height: ENEMY_EXPLODE.size.height
    }, _assertThisInitialized(_this7), true), _set(_getPrototypeOf(EnemyExplode.prototype), "sprite", ENEMY_EXPLODE.sprite, _assertThisInitialized(_this7), true);

    _set(_getPrototypeOf(EnemyExplode.prototype), "frames", ENEMY_EXPLODE.frames, _assertThisInitialized(_this7), true);

    return _this7;
  }

  return EnemyExplode;
}(Explode);

var PlayerExplode =
/*#__PURE__*/
function (_Explode2) {
  _inherits(PlayerExplode, _Explode2);

  function PlayerExplode(context, position, limit) {
    var _this8;

    _classCallCheck(this, PlayerExplode);

    _this8 = _possibleConstructorReturn(this, _getPrototypeOf(PlayerExplode).call(this, context, position, limit));
    _set(_getPrototypeOf(PlayerExplode.prototype), "size", {
      width: PLAYER_EXPLODE.size.width,
      height: PLAYER_EXPLODE.size.height
    }, _assertThisInitialized(_this8), true), _set(_getPrototypeOf(PlayerExplode.prototype), "sprite", PLAYER_EXPLODE.sprite, _assertThisInitialized(_this8), true);

    _set(_getPrototypeOf(PlayerExplode.prototype), "frames", PLAYER_EXPLODE.frames, _assertThisInitialized(_this8), true);

    return _this8;
  }

  return PlayerExplode;
}(Explode); // Exporting enteties




/***/ }),

/***/ "./src/js/game.js":
/*!************************!*\
  !*** ./src/js/game.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entities */ "./src/js/entities.js");
/* harmony import */ var _gui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gui */ "./src/js/gui.js");
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./input */ "./src/js/input.js");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings */ "./src/js/settings.js");
/* harmony import */ var _vector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vector */ "./src/js/vector.js");
/* harmony import */ var _sound__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sound */ "./src/js/sound.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Main game object






var SETTINGS = _settings__WEBPACK_IMPORTED_MODULE_3__["default"].scene;

var Game =
/*#__PURE__*/
function () {
  function Game(canvas, user) {
    _classCallCheck(this, Game);

    this.canvas = canvas;
    this.context = canvas.getContext('2d');
    this.username = user.toUpperCase();
    this.updateRequest;
    this.inputController;
    this.onPause = false;
    this.background;
    this.player;
    this.rebornReady = false;
    this.enemies = [];
    this.attackingEnemies = [];
    this.killed = 0;
    this.maxEnemies;
    this.bullet;
    this.rockets = [];
    this.shots = 2;
    this.maxRockets = 20;
    this.playerBullets = 0;
    this.maxPlayerBullets = 1;
    this.generalEnemyTimer = 0;
    this.generalReady = false;
    this.enemyExplode;
    this.playerExplode;
    this.score = 0;
    this.scoreText;
    this.userScoreText;
    this.highScore = 5000;
    this.highScoreText;
    this.highScoreLabel;
    this.lives = [];
    this.livesCount = SETTINGS.player.lives;
    this.maxLivesCount = SETTINGS.player.maxLives;
    this.addLiveCount = SETTINGS.nextLive;
    this.wavesCount = 1;
    this.waveLabel;
    this.wavesTextLabel;
    this.readyLabel;
    this.pauseLabel;
    this.gameOverLabel;
    this.restartLabel;
    this.gameOver = false;
    this.leaderBoard = [];
    this.clearSceneTimer;
    this.playerRebornTimer;
    this.gameOverTimer;
    this.resetTimer;
    this.disablePause = false;
    this.soundContoller = new _sound__WEBPACK_IMPORTED_MODULE_5__["default"]();
    this.allSounds = this.soundContoller.sounds;
  }

  _createClass(Game, [{
    key: "_drawObject",
    // Draw objects
    value: function _drawObject(context, object) {
      context.fillStyle = object.sprite;
      context.fillRect(object.x, object.y, object.width, object.height);
    }
  }, {
    key: "_getRandom",
    value: function _getRandom(min, max) {
      var rand = min + Math.random() * (max + 1 - min);
      rand = Math.floor(rand);
      return rand;
    }
  }, {
    key: "_cloneGeneralGroup",
    value: function _cloneGeneralGroup(generalClone, minionClones) {
      var _this = this;

      // Cloning general only or general with minioins
      // Clone general, set waypoints and add to attacking enemies arr
      var g = new _entities__WEBPACK_IMPORTED_MODULE_0__["GeneralEnemy"](this.context, new _vector__WEBPACK_IMPORTED_MODULE_4__["default"](generalClone.position.x, generalClone.position.y));
      g.attack = true;
      g.proto = generalClone;

      var gWays = this._generateWaypoints(g, 'hard');

      g.setWaypoints(gWays);
      this.attackingEnemies.push(g); // Clone minions, set waypoints and add to attacking enemies arr

      var m = [];
      minionClones.forEach(function (minion) {
        var clone = minion;
        var red = new _entities__WEBPACK_IMPORTED_MODULE_0__["RedEnemy"](_this.context, new _vector__WEBPACK_IMPORTED_MODULE_4__["default"](clone.position.x, clone.position.y));
        red.attack = true;
        red.proto = clone;
        var offsetX = red.position.x - g.position.x;
        var offsetY = red.position.y - g.position.y;
        g.waypoints.forEach(function (wp) {
          // Set minion waypoints from general ways
          red.waypoints.push(new _vector__WEBPACK_IMPORTED_MODULE_4__["default"](wp.x + offsetX, wp.y + offsetY));
        });

        _this.attackingEnemies.push(red);

        m.push(red);
      });
      return {
        general: g,
        minions: m
      };
    }
  }, {
    key: "_genAttack",
    value: function _genAttack(enemies, attackType) {
      if (attackType == 'general') {
        // Generals attack
        var generals = enemies.filter(function (g) {
          if (g instanceof _entities__WEBPACK_IMPORTED_MODULE_0__["GeneralEnemy"] && !g.hide) return true;
        }); // Check alive generals

        if (generals.length) {
          // Attack alive generals
          var active; // ACtive general
          // Get general

          if (generals.length == 2) {
            active = generals[this._getRandom(0, 1)];
          } else {
            active = generals[0];
          } // Get general's minions


          var minions = enemies.filter(function (r) {
            if (r instanceof _entities__WEBPACK_IMPORTED_MODULE_0__["RedEnemy"] && !r.hide && r.general == active) return true;
          });

          if (minions.length >= 2) {
            // Attack with 2 minioins
            var red1 = 0;
            var red2 = 0;

            do {
              red1 = minions[this._getRandom(0, minions.length - 1)];
              red2 = minions[this._getRandom(0, minions.length - 1)];
            } while (red1 == red2);

            var group = this._cloneGeneralGroup(active, [red1, red2]);

            active.hide = true;
            this.enemies.push(group.general);
            red1.hide = true;
            this.enemies.push(group.minions[0]);
            red2.hide = true;
            this.enemies.push(group.minions[1]);
          } else if (minions.length == 1) {
            // Attack with 1 minion
            var red = minions[0];

            var _group = this._cloneGeneralGroup(active, [red]);

            active.hide = true;
            this.enemies.push(_group.general);
            red.hide = true;
            this.enemies.push(_group.minions[0]);
          } else {
            // Attack only general
            var general = this._cloneUnit(active, 'hard');

            active.hide = true;
            this.enemies.push(general);
          }
        } else {
          // Only minions attack
          var _group2 = this._createAttackGroup(enemies, 'red');

          var unit = _group2[this._getRandom(0, _group2.length - 1)];

          if (unit != undefined && _group2.length) {
            unit.hide = true;
            this.enemies.push(this._cloneUnit(unit, 'hard'));
          }
        }
      } else if (attackType == 'single-blue') {
        // Easy attack only one blue enemy                
        var _group3 = this._createAttackGroup(enemies, 'blue');

        var _unit = _group3[this._getRandom(0, _group3.length - 1)];

        if (_unit != undefined && _group3.length) {
          _unit.hide = true;
          this.enemies.push(this._cloneUnit(_unit));
        }
      } else if (attackType == 'double-blue') {
        // Easy attack couple enemies
        var _group4 = this._createAttackGroup(enemies, 'blue');

        var id1 = 0;
        var id2 = 0; // Prevent infinite loop

        if (_group4.length >= 2) {
          do {
            id1 = this._getRandom(0, _group4.length - 1);
            id2 = this._getRandom(0, _group4.length - 1);
          } while (id1 == id2);
        } else {
          return false;
        }

        var unit1 = _group4[id1];
        var unit2 = _group4[id2];

        if (unit1 != undefined && unit2 != undefined) {
          unit1.hide = true;
          this.enemies.push(this._cloneUnit(unit1));
          unit2.hide = true;
          this.enemies.push(this._cloneUnit(unit2));
        }
      } else if (attackType == 'double-blue-single-purple') {
        // Hard attack with couple blue enemies and single purple enemy
        // Blue enemies
        var blueGroup = this._createAttackGroup(enemies, 'blue'); // this array never be is empty


        var _id = 0;
        var _id2 = 0; // Prevent infinite loop

        if (blueGroup.length >= 2) {
          do {
            _id = this._getRandom(0, blueGroup.length - 1);
            _id2 = this._getRandom(0, blueGroup.length - 1);
          } while (_id == _id2);
        } else {
          return false;
        }

        var _unit2 = blueGroup[_id];
        var _unit3 = blueGroup[_id2];

        if (_unit2 != undefined && _unit3 != undefined && blueGroup.length) {
          _unit2.hide = true;
          this.enemies.push(this._cloneUnit(_unit2));
          _unit3.hide = true;
          this.enemies.push(this._cloneUnit(_unit3));
        } // Purple enemy


        var purpleGroup = this._createAttackGroup(enemies, 'purple');

        var purpleUnit = purpleGroup[this._getRandom(0, purpleGroup.length - 1)];

        if (purpleGroup != undefined && purpleGroup.length) {
          purpleUnit.hide = true;
          this.enemies.push(this._cloneUnit(purpleUnit, 'hard'));
        }
      } else if (attackType == 'single-blue-single-purple') {
        // Hard attack with single blue enemie and single purple enemy
        // Blue enemy          
        var _blueGroup = this._createAttackGroup(enemies, 'blue');

        var _unit4 = _blueGroup[this._getRandom(0, _blueGroup.length - 1)];

        if (_unit4 != undefined && _blueGroup.length) {
          _unit4.hide = true;
          this.enemies.push(this._cloneUnit(_unit4));
        } // Purple enemy


        var _purpleGroup = this._createAttackGroup(enemies, 'purple');

        var _purpleUnit = _purpleGroup[this._getRandom(0, _purpleGroup.length - 1)];

        if (_purpleUnit != undefined && _purpleGroup.length) {
          _purpleUnit.hide = true;
          this.enemies.push(this._cloneUnit(_purpleUnit, 'hard'));
        }
      } else if (attackType == 'single-purple') {
        // Hard attack with single purple enemy
        var _purpleGroup2 = this._createAttackGroup(enemies, 'purple');

        var _purpleUnit2 = _purpleGroup2[this._getRandom(0, _purpleGroup2.length - 1)];

        if (_purpleUnit2 != undefined && _purpleGroup2.length) {
          _purpleUnit2.hide = true;
          this.enemies.push(this._cloneUnit(_purpleUnit2, 'hard'));
        }
      }

      this.attackTimer = undefined;
    }
  }, {
    key: "_createAttackGroup",
    value: function _createAttackGroup(enemies, type) {
      // Create group units waiting attack
      var group;

      if (type == 'blue') {
        group = enemies.filter(function (en) {
          if (en instanceof _entities__WEBPACK_IMPORTED_MODULE_0__["BlueEnemy"] && !en.hide) return true;
        });
      } else if (type == 'purple') {
        group = enemies.filter(function (en) {
          if (en instanceof _entities__WEBPACK_IMPORTED_MODULE_0__["PurpleEnemy"] && !en.hide) return true;
        });
      } else if (type == 'red') {
        group = enemies.filter(function (en) {
          if (en instanceof _entities__WEBPACK_IMPORTED_MODULE_0__["RedEnemy"] && !en.hide) return true;
        });
      } // Very very bad code for find left or right bordered units


      var minPosition = 1000;
      var maxPosition = 0;
      group.forEach(function (en) {
        if (en.position.x < minPosition) minPosition = en.position.x;
        if (en.position.x > maxPosition) maxPosition = en.position.x;
      });
      group = group.filter(function (en) {
        if (en.position.x == minPosition || en.position.x == maxPosition) return true;
      });
      return group;
    }
  }, {
    key: "_cloneUnit",
    value: function _cloneUnit(clone, mode) {
      // Cloning attack enemy unit, generate waypoints and retern it
      var u;

      if (clone instanceof _entities__WEBPACK_IMPORTED_MODULE_0__["BlueEnemy"]) {
        u = new _entities__WEBPACK_IMPORTED_MODULE_0__["BlueEnemy"](this.context, new _vector__WEBPACK_IMPORTED_MODULE_4__["default"](clone.position.x, clone.position.y));
      } else if (clone instanceof _entities__WEBPACK_IMPORTED_MODULE_0__["PurpleEnemy"]) {
        u = new _entities__WEBPACK_IMPORTED_MODULE_0__["PurpleEnemy"](this.context, new _vector__WEBPACK_IMPORTED_MODULE_4__["default"](clone.position.x, clone.position.y));
      } else if (clone instanceof _entities__WEBPACK_IMPORTED_MODULE_0__["GeneralEnemy"]) {
        u = new _entities__WEBPACK_IMPORTED_MODULE_0__["GeneralEnemy"](this.context, new _vector__WEBPACK_IMPORTED_MODULE_4__["default"](clone.position.x, clone.position.y));
      } else if (clone instanceof _entities__WEBPACK_IMPORTED_MODULE_0__["RedEnemy"]) {
        u = new _entities__WEBPACK_IMPORTED_MODULE_0__["RedEnemy"](this.context, new _vector__WEBPACK_IMPORTED_MODULE_4__["default"](clone.position.x, clone.position.y));
      }

      u.attack = true;
      u.proto = clone;
      var ways;

      if (!mode) {
        ways = this._generateWaypoints(u, 'easy');
      } else {
        ways = this._generateWaypoints(u, 'hard');
      }

      u.setWaypoints(ways);
      this.attackingEnemies.push(u);
      return u;
    }
  }, {
    key: "_generateWaypoints",
    value: function _generateWaypoints(unit, mode) {
      // Generate and return enemy waypoints
      var waypoints = [];
      var ways = mode == 'easy' ? ways = this._getRandom(4, 6) : ways = this._getRandom(5, 8); // Generate first waypoint

      var first = new _vector__WEBPACK_IMPORTED_MODULE_4__["default"](0, 0); // First x position

      if (unit.position.x <= 100) {
        // Move left easy      
        first.x = this._getRandom(0, unit.position.x - unit.size.width);
      } else if (unit.position.x > 101 && unit.position.x <= 175) {
        // Move left hard
        first.x = this._getRandom(unit.size.width * 2, unit.position.x - unit.size.width);
      } else if (unit.position.x > 175 && unit.position.x <= 275) {
        //Move roght hard
        first.x = this._getRandom(unit.size.width * 2, unit.position.x + unit.size.width);
      } else if (unit.position.x > 275) {
        // Move right easy
        first.x = this._getRandom(unit.size.width, unit.position.x + unit.size.width);
      } // First y position


      if (unit.position.y == 220) {
        // Bottom blue enemy position in y
        first.y = this._getRandom(unit.position.y, 300);
      } else if (unit.position.y == 190) {
        // Blue middle row enemy position in y
        first.y = this._getRandom(unit.position.y + unit.size.height * 3, 300);
      } else if (unit.position.y == 160) {
        // Blue top row enemy position in y
        first.y = this._getRandom(unit.position.y + unit.size.height * 5, 300);
      } else if (unit.position.y == 130) {
        // Purple enemy position in y
        first.y = this._getRandom(unit.position.y + unit.size.height * 7, 300);
      } else if (unit.position.y == 100) {
        // Red enemy position in y
        first.y = this._getRandom(unit.position.y + unit.size.height * 9, 300);
      } else if (unit.position.y == 75) {
        first.y = this._getRandom(unit.position.y + unit.size.height * 11, 300);
      }

      waypoints.push(first); // Aimed fire waypoint

      var offsetX = 50; // Target offset in x axis

      var offsetY = 120; // Target offset in y axis
      // Target position

      var target = this.player.position;
      waypoints.push(new _vector__WEBPACK_IMPORTED_MODULE_4__["default"](target.x + this._getRandom(offsetX * -1, offsetX), unit.position.y + this._getRandom(120, 180)));
      offsetY = 180; // Add another waypoints (0 and 1 element we already using, start with 2 index)

      for (var i = 2; i < ways; i++) {
        waypoints.push(new _vector__WEBPACK_IMPORTED_MODULE_4__["default"](target.x + this._getRandom(offsetX * -1, offsetX), unit.position.y + this._getRandom(offsetY, offsetY)));
        offsetX += 50;
        offsetY += 50;
      } // Add tail waypoints for overscreen hide unit


      waypoints.push(new _vector__WEBPACK_IMPORTED_MODULE_4__["default"](this.player.position.x, 650));

      if (unit.position.x <= 150) {
        waypoints.push(new _vector__WEBPACK_IMPORTED_MODULE_4__["default"](-40, 650));
        waypoints.push(new _vector__WEBPACK_IMPORTED_MODULE_4__["default"](-40, 100));
        waypoints.push(new _vector__WEBPACK_IMPORTED_MODULE_4__["default"](unit.proto.position.x, unit.proto.position.y));
      } else {
        waypoints.push(new _vector__WEBPACK_IMPORTED_MODULE_4__["default"](440, 650));
        waypoints.push(new _vector__WEBPACK_IMPORTED_MODULE_4__["default"](440, 100));
        waypoints.push(new _vector__WEBPACK_IMPORTED_MODULE_4__["default"](unit.proto.position.x, unit.proto.position.y));
      } // console.log(waypoints);


      return waypoints;
    }
  }, {
    key: "_genNewWave",
    value: function _genNewWave() {
      var _this2 = this;

      // Generate new enemy wave (just set hide prop in false on an each enemy object) and updatee wave counter
      if (this.killed == this.maxEnemies) {
        this.enemies.forEach(function (enemy) {
          enemy.hide = false;
        }); // Change waves counter

        this.wavesCount++;
        this.wavesTextLabel.setText(": ".concat(this.wavesCount)); // Get enemy attack timer

        this.generalEnemyTimer = 0; // Clear killed counter

        this.killed = 0; // Start enemies attacking timer

        this.attackTimer = setTimeout(function () {
          _this2._genAttack(_this2.enemies, 'single-blue');
        }, 1000);
        this.disablePause = false;
      }
    }
  }, {
    key: "_gameOver",
    value: function _gameOver() {
      if (!this.gameOver && !this.onPause) {
        clearTimeout(this.gameOverTimer);
        this.gameOverTimer = undefined; // Check score

        this._checkRecord(); // Generate leaderboard


        this._createLeaderboard();

        this.gameOver = true;
      }
    }
  }, {
    key: "_checkRecord",
    value: function _checkRecord() {
      // Compare final score with leaderboard object and add score and user into if need
      this.userScoreText = new _gui__WEBPACK_IMPORTED_MODULE_1__["Text"](this.context, new _vector__WEBPACK_IMPORTED_MODULE_4__["default"](80, 490), "".concat(this.username, ", YOUR SCORE - ").concat(this.score, ", WAVES - ").concat(this.wavesCount), 'red', 250, 17);
      var leaders = SETTINGS.leaderboard;
      var add = true;
      var duplicate = 0;

      for (var i = 0; i < leaders.length; i++) {
        var e = leaders[i];

        if (e.user == this.username && this.score < e.score) {
          add = false;
        } else if (e.user == this.username) {
          duplicate = i;
        }
      } // Add or detec duplicate username and rewrite his score if need


      if (add && !duplicate) {
        leaders.push({
          user: this.username,
          score: this.score
        });
      } else if (add && duplicate) {
        leaders[duplicate].score = this.score;
      } // Sort by score


      leaders.sort(function (a, b) {
        if (a.score > b.score) return -1;
        if (a.score < b.score) return 1;
      }); // Rewrite leaderboard obj

      SETTINGS.leaderboard = leaders.slice(0, 10);
    }
  }, {
    key: "_playerCollision",
    value: function _playerCollision(opponent) {
      // Detect player collision with opponent, changing lives and game over init
      if (this.player.collision(opponent) && !this.player.hide) {
        // Explode animation
        if (opponent instanceof _entities__WEBPACK_IMPORTED_MODULE_0__["BlueEnemy"] || opponent instanceof _entities__WEBPACK_IMPORTED_MODULE_0__["PurpleEnemy"] || opponent instanceof _entities__WEBPACK_IMPORTED_MODULE_0__["RedEnemy"] || opponent instanceof _entities__WEBPACK_IMPORTED_MODULE_0__["GeneralEnemy"]) {
          // Collision with attacking enemy
          opponent.kill();
          this.killed++; // Delete this unit from attacking array

          this.attackingEnemies.splice(this.attackingEnemies.indexOf(opponent), 1); // Delete this unit from enemies array

          this.enemies.splice(this.enemies.indexOf(opponent), 1);
        } // Hide player


        this.player.hide = true; // Ready to reborning state

        this.rebornReady = true; // Player explode animation                    

        this.playerExplode.setPosition(new _vector__WEBPACK_IMPORTED_MODULE_4__["default"](this.player.position.x, this.player.position.y));
        this.playerExplode.hide = false; // Remove live

        this.livesCount--;
        var lives = this.lives.filter(function (l) {
          if (!l.hide) return true;
        });
        lives.pop().hide = true; // Play destroy sound

        this.soundContoller.play(this.allSounds.playerExplode, 0.5);
      }
    }
  }, {
    key: "_enemyCollision",
    value: function _enemyCollision(enemy) {
      // Detect enemy collision with player's bullet
      // Check attacking enemy
      if (enemy.collision(this.bullet) && !enemy.hide) {
        // Collision with player bullet
        this.bullet.setPosition(new _vector__WEBPACK_IMPORTED_MODULE_4__["default"](1000, 1000)); // Relocate bullet
        // Explode animation

        this.enemyExplode.setPosition(new _vector__WEBPACK_IMPORTED_MODULE_4__["default"](enemy.position.x, enemy.position.y));
        this.enemyExplode.hide = false;

        if (enemy.attack) {
          // Check attacking enemy
          enemy.kill();
          this.killed++; // Delete this unit from attacking array

          this.attackingEnemies.splice(this.attackingEnemies.indexOf(enemy), 1); // Delete this unit from enemies array

          this.enemies.splice(this.enemies.indexOf(enemy), 1); // Change score

          this.score += enemy.cost * 2;
          this.scoreText.setText("SCORE: ".concat(this.score));
        } else {
          enemy.hide = true;
          this.killed++; // Change score

          this.score += enemy.cost;
          this.scoreText.setText("SCORE: ".concat(this.score));
        }

        if (this.score > this.highScore) this.highScoreText.setText(this.score); // Add player's live

        if (this.score > this.addLiveCount) {
          this.addLiveCount *= 2;

          if (this.livesCount < this.maxLivesCount) {
            this.lives[this.livesCount].hide = false;
            this.livesCount++;
          }
        } // PLay sound


        this.soundContoller.play(this.allSounds.enemyExplode, 0.1);
      }
    }
  }, {
    key: "_createLeaderboard",
    value: function _createLeaderboard() {
      // Leaderboard
      var leadersPosition = new _vector__WEBPACK_IMPORTED_MODULE_4__["default"](130, 240);
      this.leaderBoard.push(new _gui__WEBPACK_IMPORTED_MODULE_1__["Text"](this.context, leadersPosition, 'L E A D E R B O A R D', 'orange', 150, 17));
      leadersPosition = leadersPosition.add(new _vector__WEBPACK_IMPORTED_MODULE_4__["default"](0, 10));

      for (var i in SETTINGS.leaderboard) {
        leadersPosition = leadersPosition.add(new _vector__WEBPACK_IMPORTED_MODULE_4__["default"](0, 20));
        var userPos = leadersPosition.add(new _vector__WEBPACK_IMPORTED_MODULE_4__["default"](-20, 0));
        var user = new _gui__WEBPACK_IMPORTED_MODULE_1__["Text"](this.context, userPos, "".concat(SETTINGS.leaderboard[i].user), 'purple', 100, 17);
        this.leaderBoard.push(user);
        var scorePos = leadersPosition.add(new _vector__WEBPACK_IMPORTED_MODULE_4__["default"](60, 0));
        var score = new _gui__WEBPACK_IMPORTED_MODULE_1__["Text"](this.context, scorePos, "SCORE - ".concat(SETTINGS.leaderboard[i].score), 'purple', 200, 17);
        this.leaderBoard.push(score);
      }
    } // Build initial state game scene and collect game objects

  }, {
    key: "_build",
    value: function _build() {
      var _this3 = this;

      // Get enemy attack timer
      this.generalEnemyTimer = 0; // Create background

      this.background = new _gui__WEBPACK_IMPORTED_MODULE_1__["Background"](this.canvas); // Build input controller

      this.inputController = new _input__WEBPACK_IMPORTED_MODULE_2__["default"](window); // Listen input events

      this.inputController.listen(); // Draw background

      this.context.fillStyle = SETTINGS.background.sprite;
      this.context.fillRect(0, 0, this.canvas.width, this.canvas.height); // Create GUI
      // Player score

      this.scoreText = new _gui__WEBPACK_IMPORTED_MODULE_1__["Text"](this.context, new _vector__WEBPACK_IMPORTED_MODULE_4__["default"](13, 25), "SCORE: ".concat(this.score), SETTINGS.text.score.color, SETTINGS.text.score.width, 15); // High score

      this.highScoreLabel = new _gui__WEBPACK_IMPORTED_MODULE_1__["Text"](this.context, new _vector__WEBPACK_IMPORTED_MODULE_4__["default"](143, 25), "HIGH: ", 'red', 50);
      this.highScoreText = new _gui__WEBPACK_IMPORTED_MODULE_1__["Text"](this.context, new _vector__WEBPACK_IMPORTED_MODULE_4__["default"](186, 25), "".concat(this.highScore), SETTINGS.text.highScore.color, SETTINGS.text.highScore.width, 15); // Player lives

      var livesPosition = new _vector__WEBPACK_IMPORTED_MODULE_4__["default"](245, 12);

      for (var i = 0; i < this.maxLivesCount; i++) {
        livesPosition = livesPosition.add(new _vector__WEBPACK_IMPORTED_MODULE_4__["default"](15, 0));
        var l = new _gui__WEBPACK_IMPORTED_MODULE_1__["PlayerLive"](this.context, livesPosition);
        this.lives.push(l);
        if (i >= this.livesCount) l.hide = true;
      } // Create wave sprite label


      this.waveLabel = new _gui__WEBPACK_IMPORTED_MODULE_1__["WaveLabel"](this.context, new _vector__WEBPACK_IMPORTED_MODULE_4__["default"](350, 14)); // Create waves count

      this.wavesTextLabel = new _gui__WEBPACK_IMPORTED_MODULE_1__["Text"](this.context, new _vector__WEBPACK_IMPORTED_MODULE_4__["default"](365, 25), ": ".concat(this.wavesCount), SETTINGS.text.wave.color, SETTINGS.text.wave.width, 15); // Ready label

      this.readyLabel = new _gui__WEBPACK_IMPORTED_MODULE_1__["Text"](this.context, new _vector__WEBPACK_IMPORTED_MODULE_4__["default"](170, 350), 'R E A D Y', 'red', 100, 17); // Pause label

      this.pauseLabel = new _gui__WEBPACK_IMPORTED_MODULE_1__["Text"](this.context, new _vector__WEBPACK_IMPORTED_MODULE_4__["default"](170, 350), 'P A U S E', 'red', 100, 17); // Game over label

      this.gameOverLabel = new _gui__WEBPACK_IMPORTED_MODULE_1__["Text"](this.context, new _vector__WEBPACK_IMPORTED_MODULE_4__["default"](135, 160), 'G A M E   O V E R', 'red', 150, 17); // Restart label

      this.restartLabel = new _gui__WEBPACK_IMPORTED_MODULE_1__["Text"](this.context, new _vector__WEBPACK_IMPORTED_MODULE_4__["default"](130, 200), 'PRESS SPACE FOR RESTART', 'white', 150, 15); // Create player object       

      this.player = new _entities__WEBPACK_IMPORTED_MODULE_0__["Player"](this.context, new _vector__WEBPACK_IMPORTED_MODULE_4__["default"](185, 560)); // Using overlimits coordinates to prevent bullet update method

      this.bullet = new _entities__WEBPACK_IMPORTED_MODULE_0__["Bullet"](this.context, new _vector__WEBPACK_IMPORTED_MODULE_4__["default"](1000, 1000)); // Create enemy rockets pool

      for (var _i = 0; _i < this.maxRockets; _i++) {
        this.rockets.push(new _entities__WEBPACK_IMPORTED_MODULE_0__["Rocket"](this.context, new _vector__WEBPACK_IMPORTED_MODULE_4__["default"](1300, 1300)));
      } // Create enemy xplode object


      this.enemyExplode = new _entities__WEBPACK_IMPORTED_MODULE_0__["EnemyExplode"](this.context, new _vector__WEBPACK_IMPORTED_MODULE_4__["default"](220, 220), 2);
      this.enemyExplode.hide = true; // Hide explode for optimize
      // Create player's explode object

      this.playerExplode = new _entities__WEBPACK_IMPORTED_MODULE_0__["PlayerExplode"](this.context, new _vector__WEBPACK_IMPORTED_MODULE_4__["default"](250, 250), 5);
      this.playerExplode.hide = true; // Hide xplode
      // Create eneies object and collect them in array

      var nextPositionX = SETTINGS.blueEnemies.position.x;
      var nextPositionY = SETTINGS.blueEnemies.position.y;
      var countEnemies = SETTINGS.blueEnemies.count;
      var divisions = SETTINGS.blueEnemies.divisions; // Build blue enemies

      for (var _i2 = 0; _i2 < countEnemies; _i2++) {
        var x = nextPositionX;
        nextPositionX += SETTINGS.blueEnemies.position.width;

        for (var j = 0; j < divisions; j++) {
          var y = nextPositionY + j * 30;
          var enemy = new _entities__WEBPACK_IMPORTED_MODULE_0__["BlueEnemy"](this.context, new _vector__WEBPACK_IMPORTED_MODULE_4__["default"](x, y));
          this.enemies.push(enemy);
        }
      } // Build purple enemies


      nextPositionX = SETTINGS.purpleEnemies.position.x;
      nextPositionY = SETTINGS.purpleEnemies.position.y;
      countEnemies = SETTINGS.purpleEnemies.count;

      for (var _i3 = 0; _i3 < countEnemies; _i3++) {
        var _enemy = new _entities__WEBPACK_IMPORTED_MODULE_0__["PurpleEnemy"](this.context, new _vector__WEBPACK_IMPORTED_MODULE_4__["default"](nextPositionX, nextPositionY));

        nextPositionX += SETTINGS.purpleEnemies.position.width;
        this.enemies.push(_enemy);
      } // Build general enemies


      nextPositionX = SETTINGS.generalEnemies.position.x;
      nextPositionY = SETTINGS.generalEnemies.position.y;
      countEnemies = SETTINGS.generalEnemies.count;
      var generals = [];

      for (var _i4 = 0; _i4 < countEnemies; _i4++) {
        var _enemy2 = new _entities__WEBPACK_IMPORTED_MODULE_0__["GeneralEnemy"](this.context, new _vector__WEBPACK_IMPORTED_MODULE_4__["default"](nextPositionX, nextPositionY));

        nextPositionX += SETTINGS.generalEnemies.position.width + SETTINGS.generalEnemies.position.spacing;
        this.enemies.push(_enemy2);
        generals.push(_enemy2);
      } // Build red enemies


      nextPositionX = SETTINGS.redEnemies.position.x;
      nextPositionY = SETTINGS.redEnemies.position.y;
      countEnemies = SETTINGS.redEnemies.count;
      var div = countEnemies / SETTINGS.generalEnemies.count;

      for (var _i5 = 0; _i5 < countEnemies; _i5++) {
        var _enemy3 = new _entities__WEBPACK_IMPORTED_MODULE_0__["RedEnemy"](this.context, new _vector__WEBPACK_IMPORTED_MODULE_4__["default"](nextPositionX, nextPositionY));

        nextPositionX += SETTINGS.redEnemies.position.width;
        this.enemies.push(_enemy3); // Add general

        if (_i5 < div) {
          _enemy3.general = generals[0];
        } else {
          _enemy3.general = generals[1];
        }
      } // Create regular waypoints for all enemies


      this.enemies.forEach(function (enemy) {
        var x = enemy.position.x;
        var y = enemy.position.y; // Add regular waypoints

        enemy.setWaypoints(new _vector__WEBPACK_IMPORTED_MODULE_4__["default"](x - 20, y), new _vector__WEBPACK_IMPORTED_MODULE_4__["default"](x + 30, y));
      }); // Start enemies attacking timer

      this.attackTimer = setTimeout(function () {
        _this3._genAttack(_this3.enemies, 'single-blue');
      }, 1000);
    }
  }, {
    key: "_destroy",
    value: function _destroy() {
      this.background = null;
      this.player = null;
      this.rebornReady = false;
      this.enemies = [];
      this.attackingEnemies = [];
      this.killed = 0;
      this.bullet = null;
      this.rockets = [];
      this.generalEnemyTimer = 0;
      this.generalReady = false;
      this.enemyExplode = null;
      this.playerExplode = null;
      this.score = 0;
      this.scoreText = null;
      this.userScoreText = null;
      this.highScoreText = null;
      this.highScoreLabel = null;
      this.lives = [];
      this.livesCount = SETTINGS.player.lives;
      this.maxLivesCount = SETTINGS.player.maxLives;
      this.addLiveCount = SETTINGS.nextLive;
      this.wavesCount = 1;
      this.waveLabel = null;
      this.wavesTextLabel = null;
      this.readyLabel = null;
      this.pauseLabel = null;
      this.gameOverLabel = null;
      this.restartLabel = null;
      this.gameOver = false;
      this.leaderBoard = [];
      clearTimeout(this.attackTimer);
      this.attackTimer = undefined;
      clearTimeout(this.clearSceneTimer);
      this.clearSceneTimer = undefined;
      clearTimeout(this.playerRebornTimer);
      this.playerRebornTimer = undefined;
      clearTimeout(this.gameOverTimer);
      this.gameOverTimer = undefined;
      clearTimeout(this.resetTimer);
      this.resetTimer = undefined;
    } // Update all game objects

  }, {
    key: "_update",
    value: function _update() {
      var _this4 = this;

      if (!this.onPause && !this.gameOver || this.disablePause) {
        // Set pause status
        this.onPause = this.inputController.pause; // Update timer for general enemy attack

        this.generalEnemyTimer++; // Rendering background

        this.background.update(); // Rendering GUI

        this.scoreText.update();
        this.highScoreLabel.update();
        this.highScoreText.update(); // PLayer lives

        this.lives.forEach(function (l) {
          l.update();
        }); // Rendering wave label

        this.waveLabel.update();
        this.wavesTextLabel.update(); // Set show status for pause label

        if (!this.pauseLabel.show) this.pauseLabel.show = true; // Set show status for game overs

        if (!this.gameOverLabel.show) this.gameOverLabel.show = true;
        if (!this.restartLabel.show) this.restartLabel.show = true; // Draw, update state player object and check coliisions

        if (!this.player.hide) {
          if (this.inputController.action == 'left') {
            // Move left
            this.player.moveLeft();
          } else if (this.inputController.action == 'right') {
            // Move right
            this.player.moveRight();
          } else {
            // Idle state
            this.player.update();
          }
        } else {
          if (this.rebornReady) {
            if (this.livesCount) {
              this.playerRebornTimer = setTimeout(function () {
                _this4.player.hide = false;
              }, 5000);
              this.player.setPosition(new _vector__WEBPACK_IMPORTED_MODULE_4__["default"](185, 560));
              this.rebornReady = false;
            } else {
              // Activate game over state
              this.gameOverTimer = setTimeout(function () {
                _this4._gameOver();
              }, 2000);
            }
          }
        } // Clear reborn player timer


        if (!this.player.hide && this.playerRebornTimer != undefined) {
          clearTimeout(this.playerRebornTimer);
          this.playerRebornTimer = undefined;
        } // Fire player bullet


        if (this.inputController.fire) {
          if (this.bullet.ready && !this.player.hide) {
            // Set bullet position near player
            this.bullet.setPosition(new _vector__WEBPACK_IMPORTED_MODULE_4__["default"](this.player.position.x + 14, this.player.position.y - 5)); // Play sound

            this.soundContoller.play(this.allSounds.fire, 0.9);
          }
        } // Rendering move bullet


        this.bullet.update(); // Rendering enemy rockets

        this.rockets.forEach(function (rocket) {
          rocket.update();
        }); // Rendering enemy explode

        this.enemyExplode.update(); // Rendering player explode

        this.playerExplode.update(); // Calc hidden (a.k. killed) purple enemies (for generate attack)

        var killedPurpleEnemies = this.enemies.filter(function (en) {
          if (en instanceof _entities__WEBPACK_IMPORTED_MODULE_0__["PurpleEnemy"] && en.hide) return true;
        });
        var maxPurpleEnemies = SETTINGS.purpleEnemies.count * SETTINGS.purpleEnemies.divisions; // Calc killed blue enemies

        var killedBlueEnemies = this.enemies.filter(function (en) {
          if (en instanceof _entities__WEBPACK_IMPORTED_MODULE_0__["BlueEnemy"] && en.hide) return true;
        });
        var maxBlueEnemies = SETTINGS.blueEnemies.count * SETTINGS.blueEnemies.divisions; // Attacking if player is active and visible

        if (!this.player.hide) {
          // Prepare attack for general enemy            
          if (this.generalEnemyTimer % 1000 == 0) this.generalReady = true; // Geerate type attack and run attack enemies

          if (this.generalReady && !this.attackingEnemies.length && this.attackTimer == undefined) {
            // Start general attack
            this.generalEnemyTimer = 0;
            this.generalReady = false;
            clearTimeout(this.attackTimer);
            this.attackTimer = setTimeout(function () {
              _this4._genAttack(_this4.enemies, 'general');
            }, 1000);
          } else if (!this.attackingEnemies.length && this.attackTimer == undefined && killedPurpleEnemies.length && killedPurpleEnemies.length != maxPurpleEnemies) {
            // Start attack a purple enemy
            if (killedBlueEnemies.length == maxBlueEnemies) {
              // All blue enemies was killed, attack single purple
              clearTimeout(this.attackTimer);
              this.attackTimer = setTimeout(function () {
                _this4._genAttack(_this4.enemies, 'single-purple');
              }, 1000);
            } else if (killedBlueEnemies.length == maxBlueEnemies - 1) {
              // Attack purple enemy with single blue
              clearTimeout(this.attackTimer);
              this.attackTimer = setTimeout(function () {
                _this4._genAttack(_this4.enemies, 'single-blue-single-purple');
              }, 1000);
            } else {
              // Attack single purple enemy with couple blue enemies
              clearTimeout(this.attackTimer);
              this.attackTimer = setTimeout(function () {
                _this4._genAttack(_this4.enemies, 'double-blue-single-purple');
              }, 1000);
            }
          } else if (!this.attackingEnemies.length && this.attackTimer == undefined && killedBlueEnemies.length != maxBlueEnemies) {
            if (killedBlueEnemies.length <= 5 || killedBlueEnemies.length == maxBlueEnemies - 1) {
              // Если атакующих нет и таймер пуст - заного запускаем атаку
              clearTimeout(this.attackTimer);
              this.attackTimer = setTimeout(function () {
                _this4._genAttack(_this4.enemies, 'single-blue');
              }, 1000);
            } else if (killedBlueEnemies.length > 5) {
              // Start attack with couple blue enemies
              clearTimeout(this.attackTimer);
              this.attackTimer = setTimeout(function () {
                _this4._genAttack(_this4.enemies, 'double-blue');
              }, 1000);
            }
          }
        } // Draw and update state enemies  and check collisions


        this.enemies.forEach(function (enemy) {
          enemy.update(); // Rendering enemy all rockets

          enemy.rockets.forEach(function (r) {
            r.update(); // Detect rocket collision with player

            _this4._playerCollision(r);
          }); // Detect enemy collisions    

          _this4._enemyCollision(enemy);
        }); // Attacking enemies behavior 

        this.attackingEnemies.forEach(function (enemy) {
          if (!enemy.attack) {
            // Remove from attack array
            _this4.attackingEnemies.splice(_this4.attackingEnemies.indexOf(enemy), 1);

            if (_this4.enemies.indexOf(enemy) != -1) {
              // Remove attack enemy from enemies
              _this4.enemies.splice(_this4.enemies.indexOf(enemy), 1);
            } // If enemy arrived in last waypoint and still visible (not shooted) will show his prototype clone


            if (!enemy.hide) {
              var clone = enemy.proto;
              clone.hide = false;
            }
          } // Detect attack enemy collisions                


          _this4._enemyCollision(enemy); // Detect collisions with attacking enemy


          _this4._playerCollision(enemy); // Enemy fire control (use shots counter)


          if (enemy.objective > 0 && enemy.objective <= enemy.shots) {
            if (enemy.proto.rockets[enemy.objective].ready) {
              // Start rockets on proto attacking enemy
              enemy.proto.rockets[enemy.objective].setPosition(new _vector__WEBPACK_IMPORTED_MODULE_4__["default"](enemy.position.x + 10, enemy.position.y + 25)); // play enemy rocket sound

              _this4.soundContoller.play(_this4.allSounds.enemyFire, 0.1);
            }
          }
        }); // Generate new wave if you great shooter )

        if (this.killed == this.maxEnemies && this.livesCount) {
          this.disablePause = true;
          setTimeout(function () {
            _this4._genNewWave();
          }, 3000); // See ready label bottom

          this.readyLabel.update();
        }
      } else if (this.gameOver) {
        // Gameover state
        // Clear canvas
        this.context.clearRect(0, 0, this.canvas.wave, this.canvas.height); // Render background

        this.background.update(); // Render game over objects

        this.gameOverLabel.update();
        this.restartLabel.update(); // Render leaderboard

        this.leaderBoard.forEach(function (l) {
          l.update();
        }); // Render your result (score + waves)

        this.userScoreText.update(); // // Restart input detect

        if (this.inputController.restartReady) {
          // Dextroy scene
          this._destroy(); // Build new scene


          this._build();
        }
      } else if (this.onPause && !this.disablePause) {
        // Pause state
        // Set pause status
        this.onPause = this.inputController.pause; // Rendering pause label

        if (this.pauseLabel.show) {
          this.pauseLabel.update();
          this.pauseLabel.show = false;
        } // Continue calc time if game on pause


        clearTimeout(this.attackTimer);
        this.attackTimer = undefined;
      }

      this.updateRequest = window.requestAnimationFrame(this._update.bind(this));
    } // Start game loop

  }, {
    key: "start",
    value: function start() {
      // Build game
      this._build(); // Start game loop


      this._update();
    }
  }, {
    key: "maxEnemies",
    get: function get() {
      return SETTINGS.blueEnemies.count * SETTINGS.blueEnemies.divisions + SETTINGS.purpleEnemies.count * SETTINGS.purpleEnemies.divisions + SETTINGS.redEnemies.count * SETTINGS.redEnemies.divisions + SETTINGS.generalEnemies.count * SETTINGS.generalEnemies.divisions;
    }
  }]);

  return Game;
}();

/* harmony default export */ __webpack_exports__["default"] = (Game);

/***/ }),

/***/ "./src/js/gui.js":
/*!***********************!*\
  !*** ./src/js/gui.js ***!
  \***********************/
/*! exports provided: Background, Text, PlayerLive, WaveLabel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Background", function() { return Background; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return Text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerLive", function() { return PlayerLive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WaveLabel", function() { return WaveLabel; });
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings */ "./src/js/settings.js");
/* harmony import */ var _vector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vector */ "./src/js/vector.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function set(target, property, value, receiver) { if (typeof Reflect !== "undefined" && Reflect.set) { set = Reflect.set; } else { set = function set(target, property, value, receiver) { var base = _superPropBase(target, property); var desc; if (base) { desc = Object.getOwnPropertyDescriptor(base, property); if (desc.set) { desc.set.call(receiver, value); return true; } else if (!desc.writable) { return false; } } desc = Object.getOwnPropertyDescriptor(receiver, property); if (desc) { if (!desc.writable) { return false; } desc.value = value; Object.defineProperty(receiver, property, desc); } else { _defineProperty(receiver, property, value); } return true; }; } return set(target, property, value, receiver); }

function _set(target, property, value, receiver, isStrict) { var s = set(target, property, value, receiver || target); if (!s && isStrict) { throw new Error('failed to set property'); } return value; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var SETTINGS = _settings__WEBPACK_IMPORTED_MODULE_0__["default"].gui;
var SCENE = _settings__WEBPACK_IMPORTED_MODULE_0__["default"].scene;

var Text =
/*#__PURE__*/
function () {
  // Class for a text labels
  function Text(context, position, text, color, width, height) {
    _classCallCheck(this, Text);

    this.position = position;
    this.context = context;
    this.text = text;
    this.width = width;
    this.color = color;
    this.height = height;
    this.show = true;
  }

  _createClass(Text, [{
    key: "update",
    value: function update() {
      this._draw();
    }
  }, {
    key: "setText",
    value: function setText(text) {
      this.text = text;
    }
  }, {
    key: "_draw",
    value: function _draw() {
      this.context.textAlign = 'start';
      this.context.fillStyle = this.color;
      this.context.font = "".concat(this.height, "px ").concat(SCENE.font);
      this.context.fillText(this.text, this.position.x, this.position.y, this.width);
    }
  }]);

  return Text;
}();

var SpriteLabel =
/*#__PURE__*/
function () {
  // Base class for a sprite based labels
  function SpriteLabel(context, position) {
    _classCallCheck(this, SpriteLabel);

    this.context = context;
    this.position = position;
    this.sprite;
    this.size = {
      width: 10,
      height: 10
    };
    this.hide = false;
  }

  _createClass(SpriteLabel, [{
    key: "update",
    value: function update() {
      if (!this.hide) this._draw();
    }
  }, {
    key: "_draw",
    value: function _draw() {
      this.context.save();
      this.context.drawImage(this.sprite, 0, 0, this.size.width, this.size.height, this.position.x, this.position.y, this.size.width, this.size.height);
      this.context.restore();
    }
  }]);

  return SpriteLabel;
}();

var PlayerLive =
/*#__PURE__*/
function (_SpriteLabel) {
  _inherits(PlayerLive, _SpriteLabel);

  // Plaeyer lives represent object
  function PlayerLive(context, position) {
    var _this;

    _classCallCheck(this, PlayerLive);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PlayerLive).call(this, context, position));

    _set(_getPrototypeOf(PlayerLive.prototype), "context", context, _assertThisInitialized(_this), true);

    _set(_getPrototypeOf(PlayerLive.prototype), "position", position, _assertThisInitialized(_this), true);

    _set(_getPrototypeOf(PlayerLive.prototype), "sprite", SETTINGS.live.sprite, _assertThisInitialized(_this), true);

    _set(_getPrototypeOf(PlayerLive.prototype), "size", {
      width: SETTINGS.live.width,
      height: SETTINGS.live.height
    }, _assertThisInitialized(_this), true);

    return _this;
  }

  return PlayerLive;
}(SpriteLabel);

var WaveLabel =
/*#__PURE__*/
function (_SpriteLabel2) {
  _inherits(WaveLabel, _SpriteLabel2);

  function WaveLabel(context, position) {
    var _this2;

    _classCallCheck(this, WaveLabel);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(WaveLabel).call(this, context, position));

    _set(_getPrototypeOf(WaveLabel.prototype), "context", context, _assertThisInitialized(_this2), true);

    _set(_getPrototypeOf(WaveLabel.prototype), "position", position, _assertThisInitialized(_this2), true);

    _set(_getPrototypeOf(WaveLabel.prototype), "sprite", SETTINGS.wave.sprite, _assertThisInitialized(_this2), true);

    _set(_getPrototypeOf(WaveLabel.prototype), "size", {
      width: SETTINGS.wave.width,
      height: SETTINGS.wave.height
    }, _assertThisInitialized(_this2), true);

    return _this2;
  }

  return WaveLabel;
}(SpriteLabel);

var Star =
/*#__PURE__*/
function () {
  // Class for backgorund star
  function Star(context, position) {
    _classCallCheck(this, Star);

    this.position = position;
    this.context = context;
    this.size = {
      width: 2,
      height: 2
    };
    this.sprite;
    this.hide = false;
    this.speed = 0.8;
    this.limitBottom = SCENE.background.size.height + 10;
  }

  _createClass(Star, [{
    key: "update",
    value: function update() {
      if (this.position.y <= this.limitBottom) {
        this.position.y = this.position.y + this.speed;
      } else {
        this.setPosition(new _vector__WEBPACK_IMPORTED_MODULE_1__["default"](-50, -50));
      }

      this._draw();
    }
  }, {
    key: "_draw",
    value: function _draw() {
      if (this.hide) {
        this.context.fillStyle = 'rgba(0, 0, 0, 0)';
      } else {
        this.context.fillStyle = this.sprite;
      }

      this.context.fillRect(this.position.x, this.position.y, this.size.width, this.size.height);
    }
  }, {
    key: "setPosition",
    value: function setPosition(position) {
      this.position = position;
    }
  }]);

  return Star;
}();

var Background =
/*#__PURE__*/
function () {
  // Background gui class
  function Background(canvas) {
    _classCallCheck(this, Background);

    this.canvas = canvas;
    this.context = this.canvas.getContext('2d');
    this.fill = SETTINGS.background.sprite;
    this.stars = this._genStars();
  }

  _createClass(Background, [{
    key: "update",
    value: function update() {
      var _this3 = this;

      this._draw(this.context); // Draw stars and moving emulation )


      this.stars.forEach(function (star) {
        if (star.position.x == -50) {
          var x = _this3._getRandom(5, _this3.canvas.width - 5);

          star.setPosition(new _vector__WEBPACK_IMPORTED_MODULE_1__["default"](x, -10));
        }

        star.update();
      });
    }
  }, {
    key: "_draw",
    value: function _draw(context) {
      context.fillStyle = this.fill;
      context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }, {
    key: "_genStars",
    value: function _genStars() {
      // Generate stars
      var stars = [];
      var sprites = ['green', 'red', 'purple', 'white', 'blue'];

      var count = this._getRandom(20, 35);

      for (var i = 0; i < count; i++) {
        var x = this._getRandom(5, this.canvas.width - 5);

        var y = this._getRandom(5, this.canvas.height - 5);

        var s = new Star(this.context, new _vector__WEBPACK_IMPORTED_MODULE_1__["default"](x, y));
        s.sprite = sprites[this._getRandom(0, sprites.length - 1)];
        stars.push(s);
      }

      return stars;
    }
  }, {
    key: "_getRandom",
    value: function _getRandom(min, max) {
      var rand = min + Math.random() * (max + 1 - min);
      rand = Math.floor(rand);
      return rand;
    }
  }]);

  return Background;
}();



/***/ }),

/***/ "./src/js/input.js":
/*!*************************!*\
  !*** ./src/js/input.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings */ "./src/js/settings.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// User input object
 // User input provider class

var InputController =
/*#__PURE__*/
function () {
  function InputController(view) {
    _classCallCheck(this, InputController);

    this.view = view;
    this.action = 'idle';
    this.fire = false; // Player fire control state BAD

    this.pause = false; // Game pause state BAD

    this.restartReady = false;
  }

  _createClass(InputController, [{
    key: "keyDown",
    value: function keyDown(e) {
      var keys = _settings__WEBPACK_IMPORTED_MODULE_0__["default"].input.keyboard.actions;
      var k = e.which || e.keyCode;

      if (keys[k] !== undefined) {
        e.preventDefault();

        if (keys[k] == 'fire') {
          this.fire = true;
        } else if (keys[k] == 'pause') {
          this.pause === true ? this.pause = false : this.pause = true;
        } else if (keys[k] == 'restart') {
          this.restartReady === true ? this.restartReady = false : this.restartReady = true;
        } else {
          this.action = keys[k];
        }
      }
    }
  }, {
    key: "keyUp",
    value: function keyUp(e) {
      var keys = _settings__WEBPACK_IMPORTED_MODULE_0__["default"].input.keyboard.actions;
      var k = e.which || e.keyCode;

      if (keys[k] !== undefined) {
        e.preventDefault();

        if (keys[k] == 'fire') {
          this.fire = false;
        } else {
          this.action = 'idle';
        }
      }
    }
  }, {
    key: "listen",
    value: function listen() {
      this.view.addEventListener('keydown', function (e) {
        this.keyDown(e);
      }.bind(this), false);
      this.view.addEventListener('keyup', function (e) {
        this.keyUp(e);
      }.bind(this), false);
    }
  }]);

  return InputController;
}(); // Export controller


/* harmony default export */ __webpack_exports__["default"] = (InputController);

/***/ }),

/***/ "./src/js/settings.js":
/*!****************************!*\
  !*** ./src/js/settings.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _img_player_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/player.png */ "./src/img/player.png");
/* harmony import */ var _img_player_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_img_player_png__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _img_b_sheet_80_20_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/b_sheet_80_20.png */ "./src/img/b_sheet_80_20.png");
/* harmony import */ var _img_b_sheet_80_20_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_img_b_sheet_80_20_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _img_p_sheet_80_20_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/p_sheet_80_20.png */ "./src/img/p_sheet_80_20.png");
/* harmony import */ var _img_p_sheet_80_20_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_img_p_sheet_80_20_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _img_r_sheet_80_20_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/r_sheet_80_20.png */ "./src/img/r_sheet_80_20.png");
/* harmony import */ var _img_r_sheet_80_20_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_img_r_sheet_80_20_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _img_g_sheet_80_20_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/g_sheet_80_20.png */ "./src/img/g_sheet_80_20.png");
/* harmony import */ var _img_g_sheet_80_20_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_img_g_sheet_80_20_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _img_e_exp_sheet_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/e_exp_sheet.png */ "./src/img/e_exp_sheet.png");
/* harmony import */ var _img_e_exp_sheet_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_img_e_exp_sheet_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _img_player_explode_big_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/player_explode_big.png */ "./src/img/player_explode_big.png");
/* harmony import */ var _img_player_explode_big_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_img_player_explode_big_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _img_live_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../img/live.png */ "./src/img/live.png");
/* harmony import */ var _img_live_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_img_live_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _img_wave_sprite_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../img/wave_sprite.png */ "./src/img/wave_sprite.png");
/* harmony import */ var _img_wave_sprite_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_img_wave_sprite_png__WEBPACK_IMPORTED_MODULE_8__);
// Settings for game objects and enteties








 // Sprites

var player = new Image(30, 30);
player.src = _img_player_png__WEBPACK_IMPORTED_MODULE_0___default.a;
var b_sheet = new Image();
b_sheet.src = _img_b_sheet_80_20_png__WEBPACK_IMPORTED_MODULE_1___default.a;
var p_sheet = new Image();
p_sheet.src = _img_p_sheet_80_20_png__WEBPACK_IMPORTED_MODULE_2___default.a;
var r_sheet = new Image();
r_sheet.src = _img_r_sheet_80_20_png__WEBPACK_IMPORTED_MODULE_3___default.a;
var g_sheet = new Image();
g_sheet.src = _img_g_sheet_80_20_png__WEBPACK_IMPORTED_MODULE_4___default.a;
var en_exp = new Image();
en_exp.src = _img_e_exp_sheet_png__WEBPACK_IMPORTED_MODULE_5___default.a;
var pl_exp = new Image();
pl_exp.src = _img_player_explode_big_png__WEBPACK_IMPORTED_MODULE_6___default.a;
var pl_live = new Image(15, 15);
pl_live.src = _img_live_png__WEBPACK_IMPORTED_MODULE_7___default.a;
var en_wave = new Image(20, 20);
en_wave.src = _img_wave_sprite_png__WEBPACK_IMPORTED_MODULE_8___default.a;
var SETTINGS = {
  // Input settings
  input: {
    keyboard: {
      actions: {
        // Keycodes on actions
        '37': 'left',
        '39': 'right',
        '38': 'fire',
        '27': 'pause',
        '32': 'restart'
      }
    }
  },
  // GUI settings
  gui: {
    background: {
      sprite: 'black'
    },
    live: {
      sprite: pl_live,
      width: 15,
      height: 15
    },
    wave: {
      sprite: en_wave,
      width: 15,
      height: 15
    }
  },
  // Sound settings
  audio: {
    sounds: {
      fire: './audio/rocket_fire.mp3',
      enemyExplode: './audio/en_explode_1.wav',
      enemyFire: './audio/en_fire.mp3',
      playerExplode: './audio/player_explode.wav'
    }
  },
  // Setting for game scene
  scene: {
    font: 'Pixellari',
    nextLive: 5000,
    text: {
      score: {
        width: '150',
        color: 'red'
      },
      highScore: {
        width: '150',
        color: 'purple'
      },
      wave: {
        width: '50',
        color: 'red'
      },
      pause: {
        width: '50',
        color: 'red'
      }
    },
    leaderboard: [{
      user: 'LEHA',
      score: 5000
    }, {
      user: 'USER1',
      score: 4000
    }, {
      user: 'USER2',
      score: 3000
    }, {
      user: 'USER3',
      score: 2000
    }, {
      user: 'USER4',
      score: 1000
    }, {
      user: 'USER5',
      score: 750
    }, {
      user: 'USER6',
      score: 500
    }, {
      user: 'USER7',
      score: 250
    }, {
      user: 'USER8',
      score: 100
    }, {
      user: 'USER9',
      score: 0
    }],
    background: {
      sprite: 'black',
      size: {
        width: 400,
        height: 600
      }
    },
    player: {
      position: {
        x: 185,
        y: 520
      },
      lives: 3,
      maxLives: 5
    },
    enemySpacing: 10,
    blueEnemies: {
      count: 10,
      divisions: 3,
      position: {
        x: 55,
        y: 160,
        spacing: 10,
        width: 30
      },
      speed: 1
    },
    purpleEnemies: {
      count: 8,
      divisions: 1,
      position: {
        x: 85,
        y: 130,
        spacing: 10,
        width: 30
      }
    },
    redEnemies: {
      count: 6,
      divisions: 1,
      position: {
        x: 115,
        y: 100,
        spacing: 10,
        width: 30
      }
    },
    generalEnemies: {
      count: 2,
      divisions: 1,
      position: {
        x: 145,
        y: 75,
        spacing: 60,
        width: 30
      }
    }
  },
  // Player object settings
  player: {
    width: 30,
    height: 30,
    speed: 2,
    reloadTime: 1000,
    limit: {
      left: 0,
      right: 370
    },
    limitsX: {
      left: 0,
      right: 370
    },
    sprite: player
  },
  // Blue enemy object settings
  blueEnemy: {
    width: 20,
    height: 20,
    speed: 1,
    speedAttack: 3,
    shots: 2,
    limitsX: {
      left: 30,
      right: 50
    },
    sprite: b_sheet,
    cost: 30
  },
  // Purple enemy object settings
  purpleEnemy: {
    width: 20,
    height: 20,
    speed: 1,
    speedAttack: 3.5,
    shots: 3,
    limitsX: {
      left: 30,
      right: 50
    },
    sprite: p_sheet,
    cost: 40
  },
  // Red enemy object settings
  redEnemy: {
    width: 20,
    height: 20,
    speed: 1,
    speedAttack: 3,
    shots: 2,
    limitsX: {
      left: 30,
      right: 50
    },
    sprite: r_sheet,
    cost: 50
  },
  // General enemy object settings
  generalEnemy: {
    width: 20,
    height: 30,
    speed: 1,
    speedAttack: 3,
    shots: 4,
    limitsX: {
      left: 30,
      right: 50
    },
    sprite: g_sheet,
    cost: 60
  },
  // Bullet object
  bullet: {
    width: 2,
    height: 10,
    speed: 5,
    limitsY: {
      top: -20,
      bottom: 600
    },
    sprite: 'orange'
  },
  // Enemy rocek pbject
  rocket: {
    width: 2,
    height: 7,
    speed: 4,
    limitsY: {
      top: 0,
      bottom: 700
    },
    sprite: 'white'
  },
  // Enemy explode object
  enemyExplode: {
    size: {
      width: 20,
      height: 20
    },
    sprite: en_exp,
    frames: 4
  },
  // Player explode
  playerExplode: {
    size: {
      width: 50,
      height: 50
    },
    sprite: pl_exp,
    frames: 4
  } // Export settings

};
/* harmony default export */ __webpack_exports__["default"] = (SETTINGS);

/***/ }),

/***/ "./src/js/sound.js":
/*!*************************!*\
  !*** ./src/js/sound.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings */ "./src/js/settings.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var SETTINGS = _settings__WEBPACK_IMPORTED_MODULE_0__["default"].audio;

var AudioController =
/*#__PURE__*/
function () {
  // Audio manager
  function AudioController() {
    _classCallCheck(this, AudioController);

    this.sounds = SETTINGS.sounds;
  }

  _createClass(AudioController, [{
    key: "play",
    value: function play(sound, volume) {
      var p = new Audio(sound);
      p.play();
      p.volume = volume;
    }
  }]);

  return AudioController;
}();

/* harmony default export */ __webpack_exports__["default"] = (AudioController);

/***/ }),

/***/ "./src/js/vector.js":
/*!**************************!*\
  !*** ./src/js/vector.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Maths, vectors obj
var Vector2d =
/*#__PURE__*/
function () {
  function Vector2d(x, y) {
    _classCallCheck(this, Vector2d);

    this.x = x || 0;
    this.y = y || 0;
  }

  _createClass(Vector2d, [{
    key: "add",
    value: function add(vector) {
      return new Vector2d(vector.x + this.x, vector.y + this.y);
    }
  }, {
    key: "substract",
    value: function substract(vector) {
      return new Vector2d(vector.x - this.x, vector.y - this.y);
    }
  }, {
    key: "multiply",
    value: function multiply(scalar) {
      return new Vector2d(this.x * scalar, this.y * scalar);
    }
  }, {
    key: "divide",
    value: function divide(scalar) {
      return new Vector2d(this.x / scalar, this.y / scalar);
    }
  }, {
    key: "getMagnitude",
    value: function getMagnitude() {
      return Math.hypot(this.x, this.y);
    }
  }, {
    key: "normalize",
    value: function normalize() {
      return this.divide(this.getMagnitude());
    }
  }]);

  return Vector2d;
}();

/* harmony default export */ __webpack_exports__["default"] = (Vector2d);

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/lib/loader.js!./style.scss */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/scss/style.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3Mvc3R5bGUuc2Nzcz9kZjVhIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovLy8uL3NyYy9pbWcvYl9zaGVldF84MF8yMC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9lX2V4cF9zaGVldC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9nX3NoZWV0XzgwXzIwLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1nL2xpdmUucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWcvbG9nby5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9wX3NoZWV0XzgwXzIwLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1nL3BsYXllci5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9wbGF5ZXJfZXhwbG9kZV9iaWcucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWcvcl9zaGVldF84MF8yMC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy93YXZlX3Nwcml0ZS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9lbnRpdGllcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZ2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZ3VpLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9pbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvc2V0dGluZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3NvdW5kLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy92ZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3Mvc3R5bGUuc2Nzcz8yZjRkIl0sIm5hbWVzIjpbIm9uR2FtZSIsImdMb2dvIiwiSW1hZ2UiLCJzcmMiLCJsb2dvIiwibG9nb0Jsb2NrIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFwcGVuZENoaWxkIiwibWVudSIsImlucHV0IiwidmFsdWUiLCJvbmNsaWNrIiwib25ibHVyIiwiY2FudmFzIiwiU3RhcnRHYW1lIiwic3R5bGUiLCJkaXNwbGF5IiwiZ2FtZSIsIkdhbWUiLCJzdGFydCIsInN0YXJ0RW50ZXIiLCJlIiwiY29kZSIsIndoaWNoIiwia2V5Q29kZSIsInN0YXJ0QnRuIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsIlBMQVlFUl9TRVRUSU5HUyIsIlNldHRpbmdzIiwicGxheWVyIiwiQlVMTEVUX1NFVFRJTkdTIiwiYnVsbGV0IiwiUk9DS0VUX1NFVFRJTkdTIiwicm9ja2V0IiwiQkxVRV9FTkVNWV9TRVRUSU5HUyIsImJsdWVFbmVteSIsIlBVUlBMRV9FTkVNWV9TRVRUSU5HUyIsInB1cnBsZUVuZW15IiwiUkVEX0VORU1ZX1NFVFRJTkdTIiwicmVkRW5lbXkiLCJHRU5FUkFMX0VORU1ZX1NFVFRJTkdTIiwiZ2VuZXJhbEVuZW15IiwiRU5FTVlfRVhQTE9ERSIsImVuZW15RXhwbG9kZSIsIlBMQVlFUl9FWFBMT0RFIiwicGxheWVyRXhwbG9kZSIsIkJ1bGxldCIsImNvbnRleHQiLCJwb3NpdGlvbiIsInNwZWVkIiwic2l6ZSIsIndpZHRoIiwiaGVpZ2h0IiwidG9wTGltaXQiLCJsaW1pdHNZIiwidG9wIiwiYm90dG9tTGltaXQiLCJib3R0b20iLCJzcHJpdGUiLCJzdG9wIiwicmVhZHkiLCJ5IiwiX2RyYXciLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsIngiLCJvcHBvbmVudCIsInIiLCJfZ2V0UmVjdCIsIm9wcCIsInJpZ2h0IiwibGVmdCIsIlJvY2tldCIsIlVuaXQiLCJsaW1pdCIsIndheXBvaW50cyIsIm9iamVjdGl2ZSIsInNwZWVkQXR0YWNrIiwic2hvdHMiLCJyb2NrZXRzIiwiaSIsInB1c2giLCJWZWN0b3IyZCIsImF0dGFjayIsImhpZGUiLCJmcmFtZVJhdGUiLCJmcmFtZUxpbWl0IiwiZGlyZWN0aW9uIiwiY29zdCIsImxlbmd0aCIsImRpc3RhbmNlIiwic3Vic3RyYWN0IiwiZGlzdGFuY2VOb3JtIiwibm9ybWFsaXplIiwiYWRkIiwibXVsdGlwbHkiLCJnZXRNYWduaXR1ZGUiLCJfc2V0UG9zaXRpb24iLCJBcnJheSIsImlzQXJyYXkiLCJ3YXlzIiwiZm9yRWFjaCIsImNhbGwiLCJhcmd1bWVudHMiLCJhcmciLCJzYXZlIiwidHJhbnNsYXRlIiwicmVzdG9yZSIsImRyYXdJbWFnZSIsIkJsdWVFbmVteSIsIlB1cnBsZUVuZW15IiwiUmVkRW5lbXkiLCJnZW5lcmFsIiwiR2VuZXJhbEVuZW15IiwiUGxheWVyIiwidXBkYXRlIiwiRXhwbG9kZSIsIm9yaWdpbkxpbWl0IiwiZnJhbWUiLCJmcmFtZXMiLCJtYXhGcmFtZVJhdGUiLCJFbmVteUV4cGxvZGUiLCJQbGF5ZXJFeHBsb2RlIiwiU0VUVElOR1MiLCJzY2VuZSIsInVzZXIiLCJnZXRDb250ZXh0IiwidXNlcm5hbWUiLCJ0b1VwcGVyQ2FzZSIsInVwZGF0ZVJlcXVlc3QiLCJpbnB1dENvbnRyb2xsZXIiLCJvblBhdXNlIiwiYmFja2dyb3VuZCIsInJlYm9yblJlYWR5IiwiZW5lbWllcyIsImF0dGFja2luZ0VuZW1pZXMiLCJraWxsZWQiLCJtYXhFbmVtaWVzIiwibWF4Um9ja2V0cyIsInBsYXllckJ1bGxldHMiLCJtYXhQbGF5ZXJCdWxsZXRzIiwiZ2VuZXJhbEVuZW15VGltZXIiLCJnZW5lcmFsUmVhZHkiLCJzY29yZSIsInNjb3JlVGV4dCIsInVzZXJTY29yZVRleHQiLCJoaWdoU2NvcmUiLCJoaWdoU2NvcmVUZXh0IiwiaGlnaFNjb3JlTGFiZWwiLCJsaXZlcyIsImxpdmVzQ291bnQiLCJtYXhMaXZlc0NvdW50IiwibWF4TGl2ZXMiLCJhZGRMaXZlQ291bnQiLCJuZXh0TGl2ZSIsIndhdmVzQ291bnQiLCJ3YXZlTGFiZWwiLCJ3YXZlc1RleHRMYWJlbCIsInJlYWR5TGFiZWwiLCJwYXVzZUxhYmVsIiwiZ2FtZU92ZXJMYWJlbCIsInJlc3RhcnRMYWJlbCIsImdhbWVPdmVyIiwibGVhZGVyQm9hcmQiLCJjbGVhclNjZW5lVGltZXIiLCJwbGF5ZXJSZWJvcm5UaW1lciIsImdhbWVPdmVyVGltZXIiLCJyZXNldFRpbWVyIiwiZGlzYWJsZVBhdXNlIiwic291bmRDb250b2xsZXIiLCJBdWRpb0NvbnRyb2xsZXIiLCJhbGxTb3VuZHMiLCJzb3VuZHMiLCJvYmplY3QiLCJtaW4iLCJtYXgiLCJyYW5kIiwiTWF0aCIsInJhbmRvbSIsImZsb29yIiwiZ2VuZXJhbENsb25lIiwibWluaW9uQ2xvbmVzIiwiZyIsInByb3RvIiwiZ1dheXMiLCJfZ2VuZXJhdGVXYXlwb2ludHMiLCJzZXRXYXlwb2ludHMiLCJtIiwibWluaW9uIiwiY2xvbmUiLCJyZWQiLCJvZmZzZXRYIiwib2Zmc2V0WSIsIndwIiwibWluaW9ucyIsImF0dGFja1R5cGUiLCJnZW5lcmFscyIsImZpbHRlciIsImFjdGl2ZSIsIl9nZXRSYW5kb20iLCJyZWQxIiwicmVkMiIsImdyb3VwIiwiX2Nsb25lR2VuZXJhbEdyb3VwIiwiX2Nsb25lVW5pdCIsIl9jcmVhdGVBdHRhY2tHcm91cCIsInVuaXQiLCJ1bmRlZmluZWQiLCJpZDEiLCJpZDIiLCJ1bml0MSIsInVuaXQyIiwiYmx1ZUdyb3VwIiwicHVycGxlR3JvdXAiLCJwdXJwbGVVbml0IiwiYXR0YWNrVGltZXIiLCJ0eXBlIiwiZW4iLCJtaW5Qb3NpdGlvbiIsIm1heFBvc2l0aW9uIiwibW9kZSIsInUiLCJmaXJzdCIsInRhcmdldCIsImVuZW15Iiwic2V0VGV4dCIsInNldFRpbWVvdXQiLCJfZ2VuQXR0YWNrIiwiY2xlYXJUaW1lb3V0IiwiX2NoZWNrUmVjb3JkIiwiX2NyZWF0ZUxlYWRlcmJvYXJkIiwiVGV4dCIsImxlYWRlcnMiLCJsZWFkZXJib2FyZCIsImR1cGxpY2F0ZSIsInNvcnQiLCJhIiwiYiIsInNsaWNlIiwiY29sbGlzaW9uIiwia2lsbCIsInNwbGljZSIsImluZGV4T2YiLCJzZXRQb3NpdGlvbiIsImwiLCJwb3AiLCJwbGF5IiwibGVhZGVyc1Bvc2l0aW9uIiwidXNlclBvcyIsInNjb3JlUG9zIiwiQmFja2dyb3VuZCIsIklucHV0Q29udHJvbGxlciIsImxpc3RlbiIsInRleHQiLCJjb2xvciIsImxpdmVzUG9zaXRpb24iLCJQbGF5ZXJMaXZlIiwiV2F2ZUxhYmVsIiwid2F2ZSIsIm5leHRQb3NpdGlvblgiLCJibHVlRW5lbWllcyIsIm5leHRQb3NpdGlvblkiLCJjb3VudEVuZW1pZXMiLCJjb3VudCIsImRpdmlzaW9ucyIsImoiLCJwdXJwbGVFbmVtaWVzIiwiZ2VuZXJhbEVuZW1pZXMiLCJzcGFjaW5nIiwicmVkRW5lbWllcyIsImRpdiIsInBhdXNlIiwic2hvdyIsImFjdGlvbiIsIm1vdmVMZWZ0IiwibW92ZVJpZ2h0IiwiX2dhbWVPdmVyIiwiZmlyZSIsImtpbGxlZFB1cnBsZUVuZW1pZXMiLCJtYXhQdXJwbGVFbmVtaWVzIiwia2lsbGVkQmx1ZUVuZW1pZXMiLCJtYXhCbHVlRW5lbWllcyIsIl9wbGF5ZXJDb2xsaXNpb24iLCJfZW5lbXlDb2xsaXNpb24iLCJlbmVteUZpcmUiLCJfZ2VuTmV3V2F2ZSIsImNsZWFyUmVjdCIsInJlc3RhcnRSZWFkeSIsIl9kZXN0cm95IiwiX2J1aWxkIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiX3VwZGF0ZSIsImJpbmQiLCJndWkiLCJTQ0VORSIsInRleHRBbGlnbiIsImZvbnQiLCJmaWxsVGV4dCIsIlNwcml0ZUxhYmVsIiwibGl2ZSIsIlN0YXIiLCJsaW1pdEJvdHRvbSIsImZpbGwiLCJzdGFycyIsIl9nZW5TdGFycyIsInN0YXIiLCJzcHJpdGVzIiwicyIsInZpZXciLCJrZXlzIiwia2V5Ym9hcmQiLCJhY3Rpb25zIiwiayIsInByZXZlbnREZWZhdWx0Iiwia2V5RG93biIsImtleVVwIiwicF9zcHJpdGUiLCJiX3NoZWV0IiwiYmx1ZV9zaGVldCIsInBfc2hlZXQiLCJwdXJwbGVfc2hlZXQiLCJyX3NoZWV0IiwicmVkX3NoZWV0IiwiZ19zaGVldCIsImdlbmVyYWxfc2hlZXQiLCJlbl9leHAiLCJlbmVteV9leHAiLCJwbF9leHAiLCJwbGF5ZXJfZXhwIiwicGxfbGl2ZSIsInBsYXllcl9saXZlIiwiZW5fd2F2ZSIsIndfc3ByaXRlIiwiYXVkaW8iLCJlbmVteVNwYWNpbmciLCJyZWxvYWRUaW1lIiwibGltaXRzWCIsInNvdW5kIiwidm9sdW1lIiwicCIsIkF1ZGlvIiwidmVjdG9yIiwic2NhbGFyIiwiaHlwb3QiLCJkaXZpZGUiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSx1Qzs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBLGNBQWMsbUJBQU8sQ0FBQyx1REFBUTs7QUFFOUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQixtQkFBbUI7QUFDcEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLHNCQUFzQjtBQUN2Qzs7QUFFQTtBQUNBLG1CQUFtQiwyQkFBMkI7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0IsbUJBQW1CO0FBQ25DO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIsMkJBQTJCO0FBQzVDO0FBQ0E7O0FBRUEsUUFBUSx1QkFBdUI7QUFDL0I7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSxpQkFBaUIsdUJBQXVCO0FBQ3hDO0FBQ0E7O0FBRUEsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCLGlCQUFpQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYzs7QUFFZCxrREFBa0Qsc0JBQXNCO0FBQ3hFO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0EsS0FBSyxLQUF3QyxFQUFFLEVBRTdDOztBQUVGLFFBQVEsc0JBQWlCO0FBQ3pCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RDtBQUN2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LEtBQUtKLENBQXhCLENBQVA7QUFDSDs7O2dDQUNXO0FBQ1IsYUFBTyxLQUFLMlIsTUFBTCxDQUFZLEtBQUt4UCxZQUFMLEVBQVosQ0FBUDtBQUNIOzs7Ozs7QUFHVWQsdUVBQWYsRTs7Ozs7Ozs7Ozs7O0FDMUJBLGNBQWMsbUJBQU8sQ0FBQyxrVUFBaUs7O0FBRXZMLDRDQUE0QyxRQUFTOztBQUVyRDtBQUNBOzs7O0FBSUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBLGFBQWEsbUJBQU8sQ0FBQyxzR0FBbUQ7O0FBRXhFOztBQUVBLEdBQUcsS0FBVSxFQUFFLEUiLCJmaWxlIjoicXNlcnZpY2UuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gKHRhcmdldCwgcGFyZW50KSB7XG4gIGlmIChwYXJlbnQpe1xuICAgIHJldHVybiBwYXJlbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuICB9XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG59O1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24odGFyZ2V0LCBwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBwYXNzaW5nIGZ1bmN0aW9uIGluIG9wdGlvbnMsIHRoZW4gdXNlIGl0IGZvciByZXNvbHZlIFwiaGVhZFwiIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgLy8gVXNlZnVsIGZvciBTaGFkb3cgUm9vdCBzdHlsZSBpLmVcbiAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgLy8gICBpbnNlcnRJbnRvOiBmdW5jdGlvbiAoKSB7IHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvb1wiKS5zaGFkb3dSb290IH1cbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdHZhciBzdHlsZVRhcmdldCA9IGdldFRhcmdldC5jYWxsKHRoaXMsIHRhcmdldCwgcGFyZW50KTtcblx0XHRcdC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cdFx0XHRpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcblx0XHRcdFx0XHQvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG5cdFx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG5cdFx0fVxuXHRcdHJldHVybiBtZW1vW3RhcmdldF1cblx0fTtcbn0pKCk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gXCJib29sZWFuXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG4gICAgICAgIGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zLmluc2VydEF0LmJlZm9yZSkge1xuXHRcdHZhciBuZXh0U2libGluZyA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUsIHRhcmdldCk7XG5cdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dFNpYmxpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIltTdHlsZSBMb2FkZXJdXFxuXFxuIEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnICgnb3B0aW9ucy5pbnNlcnRBdCcpIGZvdW5kLlxcbiBNdXN0IGJlICd0b3AnLCAnYm90dG9tJywgb3IgT2JqZWN0LlxcbiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIjaW5zZXJ0YXQpXFxuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cblx0aWYob3B0aW9ucy5hdHRycy5ub25jZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIG5vbmNlID0gZ2V0Tm9uY2UoKTtcblx0XHRpZiAobm9uY2UpIHtcblx0XHRcdG9wdGlvbnMuYXR0cnMubm9uY2UgPSBub25jZTtcblx0XHR9XG5cdH1cblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBnZXROb25jZSgpIHtcblx0aWYgKHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHJldHVybiBfX3dlYnBhY2tfbm9uY2VfXztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGUsIHVwZGF0ZSwgcmVtb3ZlLCByZXN1bHQ7XG5cblx0Ly8gSWYgYSB0cmFuc2Zvcm0gZnVuY3Rpb24gd2FzIGRlZmluZWQsIHJ1biBpdCBvbiB0aGUgY3NzXG5cdGlmIChvcHRpb25zLnRyYW5zZm9ybSAmJiBvYmouY3NzKSB7XG5cdCAgICByZXN1bHQgPSB0eXBlb2Ygb3B0aW9ucy50cmFuc2Zvcm0gPT09ICdmdW5jdGlvbidcblx0XHQgPyBvcHRpb25zLnRyYW5zZm9ybShvYmouY3NzKSBcblx0XHQgOiBvcHRpb25zLnRyYW5zZm9ybS5kZWZhdWx0KG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC98XFxzKiQpL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJiMTkxYjJlYTQ1NDU4ZjFlNWRkOGQ0YzZmY2U0MzBiMi5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI0ZTFiNzQ5YTYyODUzOTU5YjRmNWNjMDdiN2MzM2U3MS5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhMzFlODk1ZjU5NmIxZjYwYWNjNTdiMTQwNTA0YjhkYy5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIyMDk5OTlmYWM4MjIyNWQ3NTM2YzExYWE3MTI3YTZjMS5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIyNGVjMjI3YmE2ODdlYzBiMzFjZjRiOGEyYTllMjAzMC5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIwNWM2YzdiNTEzNzI0MTY3NmZjODU4ZjU5NTM3MGFlZi5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJmOGNjYTU3NDhkNmM4ZTgwMTQzZTlhODg1MWNmODFkMy5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI3ZTcyMGE4Yjk1Mjg3ODc3MDhlN2RkN2ZjMmQ5MDlkZC5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI3YmE2MGFkZjUyMGEyMjlkNDFiMjMwMzFmYjQzMDEzMC5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIwOGM3ZDE5NWQ3YzY3YjgwZTM5ZjA0OTUzYjZmNDg0My5wbmdcIjsiLCJpbXBvcnQgJy4vc2Nzcy9zdHlsZS5zY3NzJztcclxuaW1wb3J0IGxvZ28gZnJvbSAnLi9pbWcvbG9nby5wbmcnO1xyXG5pbXBvcnQgR2FtZSBmcm9tICcuL2pzL2dhbWUnO1xyXG5cclxuLy8gR2FtZSBzdGF0ZVxyXG5sZXQgb25HYW1lID0gZmFsc2U7XHJcbi8vIExvZ29cclxubGV0IGdMb2dvID0gbmV3IEltYWdlKDI1MCwgNzApO1xyXG5nTG9nby5zcmMgPSBsb2dvO1xyXG5sZXQgbG9nb0Jsb2NrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ28nKTtcclxubG9nb0Jsb2NrLmFwcGVuZENoaWxkKGdMb2dvKTtcclxuLy8gTWVudVxyXG5sZXQgbWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51Jyk7XHJcbi8vIFVzZXIgaW5wdXRcclxubGV0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXJJbnB1dCcpO1xyXG5pbnB1dC52YWx1ZSA9ICdVU0VSMTExJztcclxuaW5wdXQub25jbGljayA9ICgpID0+IHtcclxuICAgIGlucHV0LnZhbHVlID0gJyc7XHJcbn07XHJcbmlucHV0Lm9uYmx1ciA9ICgpID0+IHtcclxuICAgIGlucHV0LnZhbHVlID0gaW5wdXQudmFsdWUgPyBpbnB1dC52YWx1ZSA6ICdVU0VSMTExJztcclxufTtcclxuLy8gZ2V0IGNhbnZhc1xyXG5sZXQgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWVDYW52YXMnKTtcclxuXHJcbmZ1bmN0aW9uIFN0YXJ0R2FtZSgpIHtcclxuICAgIG1lbnUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIGNhbnZhcy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIC8vIEluaXQgZ2FtZSBvYmplY3RcclxuICAgIGxldCBnYW1lID0gbmV3IEdhbWUoY2FudmFzLCBpbnB1dC52YWx1ZSk7XHJcbiAgICAvLyBTdGFydCBnYW1lIGxvb3BcclxuICAgIGdhbWUuc3RhcnQoKTtcclxufVxyXG5cclxuLy8gU3RhcnQgZ2FtZSBmcm9tIGtleWJvZWFyZFxyXG5mdW5jdGlvbiBzdGFydEVudGVyKGUpIHtcclxuICAgIGxldCBjb2RlID0gZS53aGljaCB8fCBlLmtleUNvZGU7XHJcbiAgICBpZiAoY29kZSA9PSAnMTMnICYmICFvbkdhbWUpIHtcclxuICAgICAgICBTdGFydEdhbWUoKTtcclxuICAgICAgICBvbkdhbWUgPSB0cnVlO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBTdGFydCBnYW1lIGNsaWNrXHJcbmxldCBzdGFydEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydEJ0bicpO1xyXG5zdGFydEJ0bi5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgU3RhcnRHYW1lKCk7XHJcbiAgICBvbkdhbWUgPSB0cnVlO1xyXG59O1xyXG5cclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgc3RhcnRFbnRlcik7IiwiLy8gR2FtZSBlbnRldGllc1xyXG5cclxuaW1wb3J0IFNldHRpbmdzIGZyb20gJy4vc2V0dGluZ3MnO1xyXG5pbXBvcnQgVmVjdG9yMmQgZnJvbSAnLi92ZWN0b3InO1xyXG5cclxuY29uc3QgUExBWUVSX1NFVFRJTkdTID0gU2V0dGluZ3MucGxheWVyO1xyXG5jb25zdCBCVUxMRVRfU0VUVElOR1MgPSBTZXR0aW5ncy5idWxsZXQ7XHJcbmNvbnN0IFJPQ0tFVF9TRVRUSU5HUyA9IFNldHRpbmdzLnJvY2tldDtcclxuY29uc3QgQkxVRV9FTkVNWV9TRVRUSU5HUyA9IFNldHRpbmdzLmJsdWVFbmVteTtcclxuY29uc3QgUFVSUExFX0VORU1ZX1NFVFRJTkdTID0gU2V0dGluZ3MucHVycGxlRW5lbXk7XHJcbmNvbnN0IFJFRF9FTkVNWV9TRVRUSU5HUyA9IFNldHRpbmdzLnJlZEVuZW15O1xyXG5jb25zdCBHRU5FUkFMX0VORU1ZX1NFVFRJTkdTID0gU2V0dGluZ3MuZ2VuZXJhbEVuZW15O1xyXG5jb25zdCBFTkVNWV9FWFBMT0RFID0gU2V0dGluZ3MuZW5lbXlFeHBsb2RlO1xyXG5jb25zdCBQTEFZRVJfRVhQTE9ERSA9IFNldHRpbmdzLnBsYXllckV4cGxvZGU7XHJcblxyXG5jbGFzcyBCdWxsZXQge1xyXG4gICAgLy8gQ2xhc3MgZm9yIGJ1bGxldCBvYmplY3RcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQsIHBvc2l0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xyXG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XHJcbiAgICAgICAgdGhpcy5zcGVlZCA9IEJVTExFVF9TRVRUSU5HUy5zcGVlZDtcclxuICAgICAgICB0aGlzLnNpemUgPSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiBCVUxMRVRfU0VUVElOR1Mud2lkdGgsXHJcbiAgICAgICAgICAgIGhlaWdodDogQlVMTEVUX1NFVFRJTkdTLmhlaWdodFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy50b3BMaW1pdCA9IEJVTExFVF9TRVRUSU5HUy5saW1pdHNZLnRvcDtcclxuICAgICAgICB0aGlzLmJvdHRvbUxpbWl0ID0gQlVMTEVUX1NFVFRJTkdTLmxpbWl0c1kuYm90dG9tO1xyXG4gICAgICAgIHRoaXMuc3ByaXRlID0gQlVMTEVUX1NFVFRJTkdTLnNwcml0ZTtcclxuICAgICAgICB0aGlzLnN0b3AgPSBmYWxzZTsgLy8gRGV0ZWN0IHN0b3AgYnVsbGV0IG1vdmluZ1xyXG4gICAgICAgIHRoaXMucmVhZHkgPSB0cnVlOyAvLyBEZXRlY3QgcmVhZHkgYnVsbGV0IHN0c3RlIGlmIHNoZSBtb3ZpbmcgLSBub3QgcmVhZHlcclxuICAgIH1cclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICAvLyBJZiBidWxsZXQgaXMgaGlkZSBub3QgdXBkYXRlIHRoaXNcclxuICAgICAgICBpZiAoIXRoaXMuc3RvcCkge1xyXG4gICAgICAgICAgICB0aGlzLnJlYWR5ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueSA9IHRoaXMucG9zaXRpb24ueSAtIHRoaXMuc3BlZWQ7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnkgPj0gdGhpcy5ib3R0b21MaW1pdCB8fCB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLnNpemUud2lkdGggPD0gdGhpcy50b3BMaW1pdCkge1xyXG4gICAgICAgICAgICAgICAgLy8gU3RvcCBidWxsZXQgaWYgYXJyaXZlZCBsaW1pdFxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdG9wID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIC8vIFNldCByZWFkeSBzdGF0dXNcclxuICAgICAgICAgICAgICAgIHRoaXMucmVhZHkgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIEFkZCBkZXRlY3QgY29sbGlzaW9ucyBiZWxvd1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9kcmF3KHRoaXMuY29udGV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgX2RyYXcoY29udGV4dCkge1xyXG4gICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gdGhpcy5zcHJpdGU7XHJcbiAgICAgICAgY29udGV4dC5maWxsUmVjdCh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy5zaXplLndpZHRoLCB0aGlzLnNpemUuaGVpZ2h0KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc2V0UG9zaXRpb24ocG9zaXRpb24pIHtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XHJcbiAgICAgICAgdGhpcy5zdG9wID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5yZWFkeSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgY29sbGlzaW9uKG9wcG9uZW50KSB7XHJcbiAgICAgICAgLy8gRGV0ZWN0IGNvbGxpc2lvbiB3aXRoIGFub3RoZXIgb2JqZWN0ICh1c2luZyBoaXMgcmVjdCBwcm9wKVxyXG4gICAgICAgIGxldCByID0gdGhpcy5fZ2V0UmVjdCgpO1xyXG4gICAgICAgIGxldCBvcHAgPSBvcHBvbmVudC5fZ2V0UmVjdCgpO1xyXG5cclxuICAgICAgICByZXR1cm4gci5yaWdodCA+PSBvcHAubGVmdCAmJiByLmxlZnQgPD0gb3BwLnJpZ2h0ICYmXHJcbiAgICAgICAgICAgIHIudG9wIDw9IG9wcC5ib3R0b20gJiYgci5ib3R0b20gPj0gb3BwLnRvcDtcclxuICAgIH1cclxuXHJcbiAgICBfZ2V0UmVjdCgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB0b3A6IHRoaXMucG9zaXRpb24ueSxcclxuICAgICAgICAgICAgcmlnaHQ6IHRoaXMucG9zaXRpb24ueCArIHRoaXMuc2l6ZS53aWR0aCxcclxuICAgICAgICAgICAgYm90dG9tOiB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLnNpemUuaGVpZ2h0LFxyXG4gICAgICAgICAgICBsZWZ0OiB0aGlzLnBvc2l0aW9uLnhcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIFJvY2tldCBleHRlbmRzIEJ1bGxldCB7XHJcbiAgICAvLyBDbGFzcyBmb3IgZW5lbXkgcm9ja2V0c1xyXG4gICAgY29uc3RydWN0b3IoY29udGV4dCwgcG9zaXRpb24pIHtcclxuICAgICAgICBzdXBlcihjb250ZXh0LCBwb3NpdGlvbik7XHJcbiAgICAgICAgc3VwZXIucG9zaXRpb24gPSBwb3NpdGlvbjtcclxuICAgICAgICBzdXBlci5jb250ZXh0ID0gY29udGV4dDtcclxuICAgICAgICBzdXBlci5zcGVlZCA9IFJPQ0tFVF9TRVRUSU5HUy5zcGVlZDtcclxuICAgICAgICBzdXBlci5zaXplID0ge1xyXG4gICAgICAgICAgICB3aWR0aDogUk9DS0VUX1NFVFRJTkdTLndpZHRoLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IFJPQ0tFVF9TRVRUSU5HUy5oZWlnaHRcclxuICAgICAgICB9XHJcbiAgICAgICAgc3VwZXIudG9wTGltaXQgPSBST0NLRVRfU0VUVElOR1MubGltaXRzWS50b3A7XHJcbiAgICAgICAgc3VwZXIuYm90dG9tTGltaXQgPSBST0NLRVRfU0VUVElOR1MubGltaXRzWS5ib3R0b207XHJcbiAgICAgICAgc3VwZXIuc3ByaXRlID0gUk9DS0VUX1NFVFRJTkdTLnNwcml0ZTtcclxuICAgIH1cclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICAvLyBJZiBidWxsZXQgaXMgaGlkZSBub3QgdXBkYXRlIHRoaXNcclxuICAgICAgICBpZiAoIXRoaXMuc3RvcCkge1xyXG4gICAgICAgICAgICB0aGlzLnJlYWR5ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueSA9IHRoaXMucG9zaXRpb24ueSArIHRoaXMuc3BlZWQ7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnkgPj0gdGhpcy5ib3R0b21MaW1pdCB8fCB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLnNpemUud2lkdGggPD0gdGhpcy50b3BMaW1pdCkge1xyXG4gICAgICAgICAgICAgICAgLy8gU3RvcCBidWxsZXQgaWYgYXJyaXZlZCBsaW1pdFxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdG9wID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIC8vIFNldCByZWFkeSBzdGF0dXNcclxuICAgICAgICAgICAgICAgIHRoaXMucmVhZHkgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2RyYXcodGhpcy5jb250ZXh0KTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmNsYXNzIFVuaXQge1xyXG4gICAgLy8gQmFzZSB1bml0cyBjbGFzcyAgICBcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQsIHBvc2l0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcclxuICAgICAgICB0aGlzLnNwcml0ZTtcclxuICAgICAgICB0aGlzLmxpbWl0ID0geyB4OiAwLjUsIHk6IDAuNSB9O1xyXG4gICAgICAgIHRoaXMuc2l6ZSA9IHtcclxuICAgICAgICAgICAgd2lkdGg6IDAsXHJcbiAgICAgICAgICAgIGhlaWdodDogMFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xyXG4gICAgICAgIHRoaXMud2F5cG9pbnRzID0gW107XHJcbiAgICAgICAgdGhpcy5vYmplY3RpdmUgPSAwO1xyXG4gICAgICAgIHRoaXMuc3BlZWQ7XHJcblxyXG4gICAgICAgIHRoaXMuc3BlZWRBdHRhY2s7XHJcbiAgICAgICAgdGhpcy5zaG90cztcclxuICAgICAgICB0aGlzLnJvY2tldHMgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnJvY2tldHMucHVzaChuZXcgUm9ja2V0KHRoaXMuY29udGV4dCwgbmV3IFZlY3RvcjJkKC0xMDAsIC0xMDApKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXR0YWNrID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5oaWRlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMuZnJhbWVSYXRlID0gMDtcclxuICAgICAgICB0aGlzLmZyYW1lTGltaXQgPSA2MDtcclxuXHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSAnbm9uZSc7XHJcbiAgICAgICAgdGhpcy5jb3N0ID0gMDtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLndheXBvaW50cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBDaGFuZ2UgZGlyZWN0aW9uIFxyXG4gICAgICAgIGlmICh0aGlzLmF0dGFjayAmJiB0aGlzLnBvc2l0aW9uLnggPCB0aGlzLndheXBvaW50c1t0aGlzLm9iamVjdGl2ZV0ueCkge1xyXG4gICAgICAgICAgICB0aGlzLmRpcmVjdGlvbiA9ICdyaWdodCc7XHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5hdHRhY2sgJiYgdGhpcy5wb3NpdGlvbi54ID4gdGhpcy53YXlwb2ludHNbdGhpcy5vYmplY3RpdmVdLngpIHtcclxuICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSAnbGVmdCc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgc3BlZWQgPSB0aGlzLnNwZWVkO1xyXG4gICAgICAgIGxldCBkaXN0YW5jZSA9IHRoaXMucG9zaXRpb24uc3Vic3RyYWN0KHRoaXMud2F5cG9pbnRzW3RoaXMub2JqZWN0aXZlXSk7XHJcbiAgICAgICAgbGV0IGRpc3RhbmNlTm9ybSA9IGRpc3RhbmNlLm5vcm1hbGl6ZSgpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5hdHRhY2spIHtcclxuICAgICAgICAgICAgc3BlZWQgPSB0aGlzLnNwZWVkICogdGhpcy5zcGVlZEF0dGFjaztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzcGVlZCA9IHRoaXMuc3BlZWQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnBvc2l0aW9uID0gdGhpcy5wb3NpdGlvbi5hZGQoZGlzdGFuY2VOb3JtLm11bHRpcGx5KHNwZWVkKSk7XHJcblxyXG4gICAgICAgIGlmIChkaXN0YW5jZS5nZXRNYWduaXR1ZGUoKSAtIHNwZWVkIDw9IDApIHtcclxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMud2F5cG9pbnRzW3RoaXMub2JqZWN0aXZlXTtcclxuICAgICAgICAgICAgaWYgKHRoaXMub2JqZWN0aXZlIDwgdGhpcy53YXlwb2ludHMubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vYmplY3RpdmUrK1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuYXR0YWNrICYmIHRoaXMub2JqZWN0aXZlID09IHRoaXMud2F5cG9pbnRzLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgICAgIC8vIExhc3Qgd2F5cG9pbnQgaW4gYXR0YWNrXHJcbiAgICAgICAgICAgICAgICB0aGlzLmF0dGFjayA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc2V0UG9zaXRpb24obmV3IFZlY3RvcjJkKC0xMDAsIC0xMDApKTtcclxuICAgICAgICAgICAgICAgIHRoaXMud2F5cG9pbnRzID0gW107XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9iamVjdGl2ZSA9IDBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBDaGFuZ2UgdW5pdCBzcGVlZCBpZiBoZSB1bnZpc2libGUgb24gZ2FtZSBjYW52YXNcclxuICAgICAgICAgICAgaWYgKHRoaXMuYXR0YWNrICYmIHRoaXMub2JqZWN0aXZlID4gdGhpcy53YXlwb2ludHMubGVuZ3RoIC0gNCkge1xyXG4gICAgICAgICAgICAgICAgc3BlZWQgKz0gdGhpcy5zcGVlZCArIHRoaXMuc3BlZWRBdHRhY2sgKiAxMDAwO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuYXR0YWNrICYmIHRoaXMub2JqZWN0aXZlID09IHRoaXMud2F5cG9pbnRzLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgICAgIHNwZWVkICs9IHRoaXMuc3BlZWQgKyB0aGlzLnNwZWVkQXR0YWNrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2RyYXcoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb2xsaXNpb24ob3Bwb25lbnQpIHtcclxuICAgICAgICAvLyBEZXRlY3QgY29sbGlzaW9uIHdpdGggYW5vdGhlciBvYmplY3QgKHVzaW5nIGhpcyByZWN0IHByb3ApXHJcbiAgICAgICAgbGV0IHIgPSB0aGlzLl9nZXRSZWN0KCk7XHJcbiAgICAgICAgbGV0IG9wcCA9IG9wcG9uZW50Ll9nZXRSZWN0KCk7XHJcblxyXG4gICAgICAgIHJldHVybiByLnJpZ2h0ID49IG9wcC5sZWZ0ICYmIHIubGVmdCA8PSBvcHAucmlnaHQgJiZcclxuICAgICAgICAgICAgci50b3AgPD0gb3BwLmJvdHRvbSAmJiByLmJvdHRvbSA+PSBvcHAudG9wO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFdheXBvaW50cyh3YXlwb2ludHMpIHtcclxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh3YXlwb2ludHMpKSB7XHJcbiAgICAgICAgICAgIHRoaXMud2F5cG9pbnRzID0gd2F5cG9pbnRzO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMud2F5cG9pbnRzID0gW107XHJcbiAgICAgICAgICAgIGxldCB3YXlzID0gW107XHJcbiAgICAgICAgICAgIGlmICh3YXlwb2ludHMgaW5zdGFuY2VvZiBWZWN0b3IyZCkge1xyXG4gICAgICAgICAgICAgICAgW10uZm9yRWFjaC5jYWxsKGFyZ3VtZW50cywgZnVuY3Rpb24gKGFyZykge1xyXG4gICAgICAgICAgICAgICAgICAgIHdheXMucHVzaChhcmcpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy53YXlwb2ludHMgPSB3YXlzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBraWxsKCkge1xyXG4gICAgICAgIHRoaXMuaGlkZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5fc2V0UG9zaXRpb24obmV3IFZlY3RvcjJkKDEwMDAsIDEwMDApKTtcclxuICAgICAgICB0aGlzLndheXBvaW50cyA9IFtdO1xyXG4gICAgICAgIHRoaXMuYXR0YWNrID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgX2RyYXcoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaGlkZSkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gJ3JnYmEoMCwgMCwgMCwgMCknO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuc2F2ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRleHQudHJhbnNsYXRlKC0xICogKHRoaXMubGltaXQueCAqIHRoaXMuc2l6ZS53aWR0aCksIC0xICogKHRoaXMubGltaXQueSAqIHRoaXMuc2l6ZS5oZWlnaHQpKTtcclxuICAgICAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxSZWN0KHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCAyMCwgMjApO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRleHQucmVzdG9yZSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5zYXZlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC50cmFuc2xhdGUoLTEgKiAodGhpcy5saW1pdC54ICogdGhpcy5zaXplLndpZHRoKSwgLTEgKiAodGhpcy5saW1pdC55ICogdGhpcy5zaXplLmhlaWdodCkpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uID09ICdub25lJykge1xyXG4gICAgICAgICAgICAgICAgLy8gU3ByaXRlIGFuaW1hdGlvbiBmcm9tIHNwcml0ZSBzaGVldCAoZm9yIGlkbGUgdXNlIG9ubHkgMiBmaXJzdCBmcmFtZXMpXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5mcmFtZVJhdGUgPCB0aGlzLmZyYW1lTGltaXQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKHRoaXMuc3ByaXRlLCAwLCAwLCB0aGlzLnNpemUud2lkdGgsIHRoaXMuc2l6ZS5oZWlnaHQsIHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCAyMCwgMjApO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZnJhbWVSYXRlKys7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZnJhbWVSYXRlID49IHRoaXMuZnJhbWVMaW1pdCAmJiB0aGlzLmZyYW1lUmF0ZSA8PSB0aGlzLmZyYW1lTGltaXQgKiAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZSh0aGlzLnNwcml0ZSwgMjAsIDAsIHRoaXMuc2l6ZS53aWR0aCwgdGhpcy5zaXplLmhlaWdodCwgdGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIDIwLCAyMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mcmFtZVJhdGUrKztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZSh0aGlzLnNwcml0ZSwgMjAsIDAsIHRoaXMuc2l6ZS53aWR0aCwgdGhpcy5zaXplLmhlaWdodCwgdGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIDIwLCAyMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mcmFtZVJhdGUgPSAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZGlyZWN0aW9uID09ICdyaWdodCcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5kcmF3SW1hZ2UodGhpcy5zcHJpdGUsIDQwLCAwLCB0aGlzLnNpemUud2lkdGgsIHRoaXMuc2l6ZS5oZWlnaHQsIHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCAyMCwgMjApO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZGlyZWN0aW9uID09ICdsZWZ0Jykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZSh0aGlzLnNwcml0ZSwgNjAsIDAsIHRoaXMuc2l6ZS53aWR0aCwgdGhpcy5zaXplLmhlaWdodCwgdGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIDIwLCAyMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5jb250ZXh0LnJlc3RvcmUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIF9zZXRQb3NpdGlvbihwb3NpdGlvbikge1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBzZXRQb3NpdGlvbihwb3NpdGlvbikge1xyXG4gICAgICAgIHRoaXMuX3NldFBvc2l0aW9uKHBvc2l0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBfZ2V0UmVjdCgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB0b3A6IHRoaXMucG9zaXRpb24ueSxcclxuICAgICAgICAgICAgcmlnaHQ6IHRoaXMucG9zaXRpb24ueCArIHRoaXMuc2l6ZS53aWR0aCxcclxuICAgICAgICAgICAgYm90dG9tOiB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLnNpemUuaGVpZ2h0LFxyXG4gICAgICAgICAgICBsZWZ0OiB0aGlzLnBvc2l0aW9uLnhcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIEJsdWVFbmVteSBleHRlbmRzIFVuaXQge1xyXG4gICAgLy8gQmx1ZSBlbmVteSBjbGFzc1xyXG4gICAgY29uc3RydWN0b3IoY29udGV4dCwgcG9zaXRpb24pIHtcclxuICAgICAgICBzdXBlcihjb250ZXh0LCBwb3NpdGlvbik7XHJcbiAgICAgICAgc3VwZXIuc3ByaXRlID0gQkxVRV9FTkVNWV9TRVRUSU5HUy5zcHJpdGU7XHJcbiAgICAgICAgc3VwZXIucG9zaXRpb24gPSBwb3NpdGlvbjtcclxuICAgICAgICBzdXBlci5jb250ZXh0ID0gY29udGV4dDtcclxuICAgICAgICBzdXBlci5zaXplID0ge1xyXG4gICAgICAgICAgICB3aWR0aDogQkxVRV9FTkVNWV9TRVRUSU5HUy53aWR0aCxcclxuICAgICAgICAgICAgaGVpZ2h0OiBCTFVFX0VORU1ZX1NFVFRJTkdTLmhlaWdodFxyXG4gICAgICAgIH1cclxuICAgICAgICBzdXBlci5zcGVlZCA9IEJMVUVfRU5FTVlfU0VUVElOR1Muc3BlZWQ7XHJcbiAgICAgICAgc3VwZXIuc3BlZWRBdHRhY2sgPSBCTFVFX0VORU1ZX1NFVFRJTkdTLnNwZWVkQXR0YWNrO1xyXG4gICAgICAgIHN1cGVyLnNob3RzID0gQkxVRV9FTkVNWV9TRVRUSU5HUy5zaG90cztcclxuICAgICAgICBzdXBlci5jb3N0ID0gQkxVRV9FTkVNWV9TRVRUSU5HUy5jb3N0O1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBQdXJwbGVFbmVteSBleHRlbmRzIFVuaXQge1xyXG4gICAgLy8gUHVycGxlIGVuZW15IGNsYXNzXHJcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBwb3NpdGlvbikge1xyXG4gICAgICAgIHN1cGVyKGNvbnRleHQsIHBvc2l0aW9uKTtcclxuICAgICAgICBzdXBlci5zcHJpdGUgPSBQVVJQTEVfRU5FTVlfU0VUVElOR1Muc3ByaXRlO1xyXG4gICAgICAgIHN1cGVyLnBvc2l0aW9uID0gcG9zaXRpb247XHJcbiAgICAgICAgc3VwZXIuY29udGV4dCA9IGNvbnRleHQ7XHJcbiAgICAgICAgc3VwZXIuc2l6ZSA9IHtcclxuICAgICAgICAgICAgd2lkdGg6IFBVUlBMRV9FTkVNWV9TRVRUSU5HUy53aWR0aCxcclxuICAgICAgICAgICAgaGVpZ2h0OiBQVVJQTEVfRU5FTVlfU0VUVElOR1MuaGVpZ2h0XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN1cGVyLnNwZWVkID0gUFVSUExFX0VORU1ZX1NFVFRJTkdTLnNwZWVkO1xyXG4gICAgICAgIHN1cGVyLnNwZWVkQXR0YWNrID0gUFVSUExFX0VORU1ZX1NFVFRJTkdTLnNwZWVkQXR0YWNrO1xyXG4gICAgICAgIHN1cGVyLnNob3RzID0gUFVSUExFX0VORU1ZX1NFVFRJTkdTLnNob3RzO1xyXG4gICAgICAgIHN1cGVyLmNvc3QgPSBQVVJQTEVfRU5FTVlfU0VUVElOR1MuY29zdDtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgUmVkRW5lbXkgZXh0ZW5kcyBVbml0IHtcclxuICAgIC8vIFJlZCBlbmVteSBjbGFzc1xyXG4gICAgY29uc3RydWN0b3IoY29udGV4dCwgcG9zaXRpb24pIHtcclxuICAgICAgICBzdXBlcihjb250ZXh0LCBwb3NpdGlvbik7XHJcbiAgICAgICAgc3VwZXIuc3ByaXRlID0gUkVEX0VORU1ZX1NFVFRJTkdTLnNwcml0ZTtcclxuICAgICAgICBzdXBlci5wb3NpdGlvbiA9IHBvc2l0aW9uO1xyXG4gICAgICAgIHN1cGVyLmNvbnRleHQgPSBjb250ZXh0O1xyXG4gICAgICAgIHN1cGVyLnNpemUgPSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiBSRURfRU5FTVlfU0VUVElOR1Mud2lkdGgsXHJcbiAgICAgICAgICAgIGhlaWdodDogUkVEX0VORU1ZX1NFVFRJTkdTLmhlaWdodFxyXG4gICAgICAgIH1cclxuICAgICAgICBzdXBlci5zcGVlZCA9IFJFRF9FTkVNWV9TRVRUSU5HUy5zcGVlZDtcclxuICAgICAgICBzdXBlci5zcGVlZEF0dGFjayA9IFJFRF9FTkVNWV9TRVRUSU5HUy5zcGVlZEF0dGFjaztcclxuICAgICAgICBzdXBlci5zaG90cyA9IFJFRF9FTkVNWV9TRVRUSU5HUy5zaG90cztcclxuXHJcbiAgICAgICAgdGhpcy5nZW5lcmFsO1xyXG4gICAgICAgIHN1cGVyLmNvc3QgPSBSRURfRU5FTVlfU0VUVElOR1MuY29zdDtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgR2VuZXJhbEVuZW15IGV4dGVuZHMgVW5pdCB7XHJcbiAgICAvLyBHZW5lcmFsIGVuZW15IGNsYXNzXHJcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBwb3NpdGlvbikge1xyXG4gICAgICAgIHN1cGVyKGNvbnRleHQsIHBvc2l0aW9uKTtcclxuICAgICAgICBzdXBlci5zcHJpdGUgPSBHRU5FUkFMX0VORU1ZX1NFVFRJTkdTLnNwcml0ZTtcclxuICAgICAgICBzdXBlci5wb3NpdGlvbiA9IHBvc2l0aW9uO1xyXG4gICAgICAgIHN1cGVyLmNvbnRleHQgPSBjb250ZXh0O1xyXG4gICAgICAgIHN1cGVyLnNpemUgPSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiBHRU5FUkFMX0VORU1ZX1NFVFRJTkdTLndpZHRoLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IEdFTkVSQUxfRU5FTVlfU0VUVElOR1MuaGVpZ2h0XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN1cGVyLnNwZWVkID0gR0VORVJBTF9FTkVNWV9TRVRUSU5HUy5zcGVlZDtcclxuICAgICAgICBzdXBlci5zcGVlZEF0dGFjayA9IEdFTkVSQUxfRU5FTVlfU0VUVElOR1Muc3BlZWRBdHRhY2s7XHJcbiAgICAgICAgc3VwZXIuc2hvdHMgPSBHRU5FUkFMX0VORU1ZX1NFVFRJTkdTLnNob3RzO1xyXG4gICAgICAgIHN1cGVyLmNvc3QgPSBHRU5FUkFMX0VORU1ZX1NFVFRJTkdTLmNvc3Q7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIFBsYXllciBleHRlbmRzIFVuaXQge1xyXG4gICAgLy8gUGxheWVyIHVuaXQgY2xhc3NcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQsIHBvc2l0aW9uKSB7XHJcbiAgICAgICAgc3VwZXIoY29udGV4dCwgcG9zaXRpb24pO1xyXG4gICAgICAgIHN1cGVyLnNwcml0ZSA9IFBMQVlFUl9TRVRUSU5HUy5zcHJpdGU7XHJcbiAgICAgICAgc3VwZXIubGltaXQgPSBQTEFZRVJfU0VUVElOR1MubGltaXQ7XHJcbiAgICAgICAgc3VwZXIuc2l6ZSA9IHtcclxuICAgICAgICAgICAgd2lkdGg6IFBMQVlFUl9TRVRUSU5HUy53aWR0aCxcclxuICAgICAgICAgICAgaGVpZ2h0OiBQTEFZRVJfU0VUVElOR1MuaGVpZ2h0XHJcbiAgICAgICAgfTtcclxuICAgICAgICBzdXBlci5wb3NpdGlvbiA9IHBvc2l0aW9uO1xyXG4gICAgICAgIHN1cGVyLnNwZWVkID0gUExBWUVSX1NFVFRJTkdTLnNwZWVkO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkaXJlY3Rpb24pIHtcclxuICAgICAgICBpZiAoZGlyZWN0aW9uID09ICdsZWZ0Jykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wb3NpdGlvbi54ID49IHRoaXMubGltaXQubGVmdCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54ID0gdGhpcy5wb3NpdGlvbi54IC0gdGhpcy5zcGVlZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09ICdyaWdodCcpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucG9zaXRpb24ueCA8PSB0aGlzLmxpbWl0LnJpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggPSB0aGlzLnBvc2l0aW9uLnggKyB0aGlzLnNwZWVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2RyYXcodGhpcy5jb250ZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICBtb3ZlTGVmdCgpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZSgnbGVmdCcpO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdmVSaWdodCgpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZSgncmlnaHQnKTtcclxuICAgIH1cclxuXHJcbiAgICBfZHJhdyhjb250ZXh0KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaGlkZSkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gJ3JnYmEoMCwgMCwgMCwgMCknO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKHRoaXMuc3ByaXRlLCB0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy5zaXplLndpZHRoLCB0aGlzLnNpemUuaGVpZ2h0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UG9zaXRpb24ocG9zaXRpb24pIHtcclxuICAgICAgICBzdXBlci5fc2V0UG9zaXRpb24ocG9zaXRpb24pO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBFeHBsb2RlIHtcclxuICAgIC8vIEJhc2UgY2xhc3MgZm9yIGV4cGxvZGVcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQsIHBvc2l0aW9uLCBsaW1pdCkge1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcclxuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xyXG4gICAgICAgIHRoaXMuc2l6ZSA9IHtcclxuICAgICAgICAgICAgd2lkdGg6IDAsXHJcbiAgICAgICAgICAgIGhlaWdodDogMFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5zcHJpdGU7XHJcbiAgICAgICAgdGhpcy5mcmFtZVJhdGUgPSAwO1xyXG4gICAgICAgIHRoaXMub3JpZ2luTGltaXQgPSBsaW1pdFxyXG4gICAgICAgIHRoaXMuZnJhbWVMaW1pdCA9IHRoaXMub3JpZ2luTGltaXQ7XHJcbiAgICAgICAgdGhpcy5mcmFtZSA9IDA7IC8vIEZpcnN0IGZyYW1lXHJcbiAgICAgICAgdGhpcy5mcmFtZXMgPSA0OyAvLyBBbmltYXRpb24gc3RlcHNcclxuICAgICAgICB0aGlzLmhpZGUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubWF4RnJhbWVSYXRlID0gdGhpcy5mcmFtZUxpbWl0ICogdGhpcy5mcmFtZXM7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICB0aGlzLl9kcmF3KCk7XHJcbiAgICB9XHJcblxyXG4gICAgX2RyYXcoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaGlkZSkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gJ3JnYmEoMCwgMCwgMCwgMCknO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuc2F2ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFJlY3QodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMuc2l6ZS53aWR0aCwgdGhpcy5zaXplLmhlaWdodCk7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5yZXN0b3JlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZnJhbWUgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmZyYW1lTGltaXQgPSB0aGlzLm9yaWdpbkxpbWl0O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5zYXZlKCk7XHJcbiAgICAgICAgICAgIC8vIFNwcml0ZSBhbmltYXRpb24gZnJvbSBzcHJpdGUgc2hlZXQgKGZvciBpZGxlIHVzZSBvbmx5IDIgZmlyc3QgZnJhbWVzKVxyXG4gICAgICAgICAgICBpZiAodGhpcy5mcmFtZVJhdGUgPCB0aGlzLmZyYW1lTGltaXQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5kcmF3SW1hZ2UodGhpcy5zcHJpdGUsIHRoaXMuc2l6ZS53aWR0aCAqIHRoaXMuZnJhbWUsIDAsIHRoaXMuc2l6ZS53aWR0aCwgdGhpcy5zaXplLmhlaWdodCwgdGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMuc2l6ZS53aWR0aCwgdGhpcy5zaXplLmhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZyYW1lUmF0ZSsrO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZnJhbWVSYXRlID49IHRoaXMuZnJhbWVMaW1pdCAmJiB0aGlzLmZyYW1lUmF0ZSA8PSB0aGlzLmZyYW1lTGltaXQgKiAyICYmIHRoaXMuZnJhbWVSYXRlIDw9IHRoaXMubWF4RnJhbWVSYXRlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZyYW1lKys7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZyYW1lTGltaXQgKj0gMjtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5kcmF3SW1hZ2UodGhpcy5zcHJpdGUsIHRoaXMuc2l6ZS53aWR0aCAqIHRoaXMuZnJhbWUsIDAsIHRoaXMuc2l6ZS53aWR0aCwgdGhpcy5zaXplLmhlaWdodCwgdGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMuc2l6ZS53aWR0aCwgdGhpcy5zaXplLmhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZyYW1lUmF0ZSsrO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mcmFtZVJhdGUgPSAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mcmFtZSA9IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5yZXN0b3JlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIHNldFBvc2l0aW9uKHBvc2l0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBFbmVteUV4cGxvZGUgZXh0ZW5kcyBFeHBsb2RlIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQsIHBvc2l0aW9uLCBsaW1pdCkge1xyXG4gICAgICAgIHN1cGVyKGNvbnRleHQsIHBvc2l0aW9uLCBsaW1pdCk7XHJcbiAgICAgICAgc3VwZXIuc2l6ZSA9IHtcclxuICAgICAgICAgICAgd2lkdGg6IEVORU1ZX0VYUExPREUuc2l6ZS53aWR0aCxcclxuICAgICAgICAgICAgaGVpZ2h0OiBFTkVNWV9FWFBMT0RFLnNpemUuaGVpZ2h0XHJcbiAgICAgICAgfSxcclxuICAgICAgICAgICAgc3VwZXIuc3ByaXRlID0gRU5FTVlfRVhQTE9ERS5zcHJpdGU7XHJcbiAgICAgICAgc3VwZXIuZnJhbWVzID0gRU5FTVlfRVhQTE9ERS5mcmFtZXM7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIFBsYXllckV4cGxvZGUgZXh0ZW5kcyBFeHBsb2RlIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQsIHBvc2l0aW9uLCBsaW1pdCkge1xyXG4gICAgICAgIHN1cGVyKGNvbnRleHQsIHBvc2l0aW9uLCBsaW1pdCk7XHJcbiAgICAgICAgc3VwZXIuc2l6ZSA9IHtcclxuICAgICAgICAgICAgd2lkdGg6IFBMQVlFUl9FWFBMT0RFLnNpemUud2lkdGgsXHJcbiAgICAgICAgICAgIGhlaWdodDogUExBWUVSX0VYUExPREUuc2l6ZS5oZWlnaHRcclxuICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdXBlci5zcHJpdGUgPSBQTEFZRVJfRVhQTE9ERS5zcHJpdGU7XHJcbiAgICAgICAgc3VwZXIuZnJhbWVzID0gUExBWUVSX0VYUExPREUuZnJhbWVzO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBFeHBvcnRpbmcgZW50ZXRpZXNcclxuZXhwb3J0IHtcclxuICAgIFBsYXllciwgQmx1ZUVuZW15LCBQdXJwbGVFbmVteSwgUmVkRW5lbXksIEdlbmVyYWxFbmVteSwgQnVsbGV0LCBVbml0LCBSb2NrZXQsIEVuZW15RXhwbG9kZSwgUGxheWVyRXhwbG9kZVxyXG59OyIsIi8vIE1haW4gZ2FtZSBvYmplY3RcclxuXHJcbmltcG9ydCB7IFBsYXllciwgQmx1ZUVuZW15LCBQdXJwbGVFbmVteSwgUmVkRW5lbXksIEdlbmVyYWxFbmVteSwgQnVsbGV0LCBSb2NrZXQsIEVuZW15RXhwbG9kZSwgUGxheWVyRXhwbG9kZSB9IGZyb20gJy4vZW50aXRpZXMnO1xyXG5pbXBvcnQgeyBCYWNrZ3JvdW5kLCBUZXh0LCBQbGF5ZXJMaXZlLCBXYXZlTGFiZWwgfSBmcm9tICcuL2d1aSc7XHJcbmltcG9ydCBJbnB1dENvbnRyb2xsZXIgZnJvbSAnLi9pbnB1dCc7XHJcbmltcG9ydCBTZXR0aW5ncyBmcm9tICcuL3NldHRpbmdzJztcclxuaW1wb3J0IFZlY3RvcjJkIGZyb20gJy4vdmVjdG9yJztcclxuaW1wb3J0IEF1ZGlvQ29udHJvbGxlciBmcm9tICcuL3NvdW5kJztcclxuXHJcbmNvbnN0IFNFVFRJTkdTID0gU2V0dGluZ3Muc2NlbmU7XHJcblxyXG5jbGFzcyBHYW1lIHtcclxuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgdXNlcikge1xyXG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xyXG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgIHRoaXMudXNlcm5hbWUgPSB1c2VyLnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVSZXF1ZXN0O1xyXG4gICAgICAgIHRoaXMuaW5wdXRDb250cm9sbGVyO1xyXG4gICAgICAgIHRoaXMub25QYXVzZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYmFja2dyb3VuZDtcclxuICAgICAgICB0aGlzLnBsYXllcjtcclxuICAgICAgICB0aGlzLnJlYm9yblJlYWR5ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5lbmVtaWVzID0gW107XHJcbiAgICAgICAgdGhpcy5hdHRhY2tpbmdFbmVtaWVzID0gW107XHJcbiAgICAgICAgdGhpcy5raWxsZWQgPSAwO1xyXG4gICAgICAgIHRoaXMubWF4RW5lbWllcztcclxuICAgICAgICB0aGlzLmJ1bGxldDtcclxuICAgICAgICB0aGlzLnJvY2tldHMgPSBbXTtcclxuICAgICAgICB0aGlzLnNob3RzID0gMjtcclxuICAgICAgICB0aGlzLm1heFJvY2tldHMgPSAyMDtcclxuICAgICAgICB0aGlzLnBsYXllckJ1bGxldHMgPSAwO1xyXG4gICAgICAgIHRoaXMubWF4UGxheWVyQnVsbGV0cyA9IDE7XHJcbiAgICAgICAgdGhpcy5nZW5lcmFsRW5lbXlUaW1lciA9IDA7XHJcbiAgICAgICAgdGhpcy5nZW5lcmFsUmVhZHkgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmVuZW15RXhwbG9kZTtcclxuICAgICAgICB0aGlzLnBsYXllckV4cGxvZGU7XHJcbiAgICAgICAgdGhpcy5zY29yZSA9IDA7XHJcbiAgICAgICAgdGhpcy5zY29yZVRleHQ7XHJcbiAgICAgICAgdGhpcy51c2VyU2NvcmVUZXh0O1xyXG4gICAgICAgIHRoaXMuaGlnaFNjb3JlID0gNTAwMDtcclxuICAgICAgICB0aGlzLmhpZ2hTY29yZVRleHQ7XHJcbiAgICAgICAgdGhpcy5oaWdoU2NvcmVMYWJlbDtcclxuICAgICAgICB0aGlzLmxpdmVzID0gW107XHJcbiAgICAgICAgdGhpcy5saXZlc0NvdW50ID0gU0VUVElOR1MucGxheWVyLmxpdmVzO1xyXG4gICAgICAgIHRoaXMubWF4TGl2ZXNDb3VudCA9IFNFVFRJTkdTLnBsYXllci5tYXhMaXZlcztcclxuICAgICAgICB0aGlzLmFkZExpdmVDb3VudCA9IFNFVFRJTkdTLm5leHRMaXZlO1xyXG4gICAgICAgIHRoaXMud2F2ZXNDb3VudCA9IDE7XHJcbiAgICAgICAgdGhpcy53YXZlTGFiZWw7XHJcbiAgICAgICAgdGhpcy53YXZlc1RleHRMYWJlbDtcclxuICAgICAgICB0aGlzLnJlYWR5TGFiZWw7XHJcbiAgICAgICAgdGhpcy5wYXVzZUxhYmVsO1xyXG4gICAgICAgIHRoaXMuZ2FtZU92ZXJMYWJlbDtcclxuICAgICAgICB0aGlzLnJlc3RhcnRMYWJlbDtcclxuICAgICAgICB0aGlzLmdhbWVPdmVyID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5sZWFkZXJCb2FyZCA9IFtdO1xyXG4gICAgICAgIHRoaXMuY2xlYXJTY2VuZVRpbWVyO1xyXG4gICAgICAgIHRoaXMucGxheWVyUmVib3JuVGltZXI7XHJcbiAgICAgICAgdGhpcy5nYW1lT3ZlclRpbWVyO1xyXG4gICAgICAgIHRoaXMucmVzZXRUaW1lcjtcclxuICAgICAgICB0aGlzLmRpc2FibGVQYXVzZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc291bmRDb250b2xsZXIgPSBuZXcgQXVkaW9Db250cm9sbGVyKCk7XHJcbiAgICAgICAgdGhpcy5hbGxTb3VuZHMgPSB0aGlzLnNvdW5kQ29udG9sbGVyLnNvdW5kcztcclxuICAgIH1cclxuICAgIGdldCBtYXhFbmVtaWVzKCkge1xyXG4gICAgICAgIHJldHVybiBTRVRUSU5HUy5ibHVlRW5lbWllcy5jb3VudCAqIFNFVFRJTkdTLmJsdWVFbmVtaWVzLmRpdmlzaW9ucyArXHJcbiAgICAgICAgICAgIFNFVFRJTkdTLnB1cnBsZUVuZW1pZXMuY291bnQgKiBTRVRUSU5HUy5wdXJwbGVFbmVtaWVzLmRpdmlzaW9ucyArXHJcbiAgICAgICAgICAgIFNFVFRJTkdTLnJlZEVuZW1pZXMuY291bnQgKiBTRVRUSU5HUy5yZWRFbmVtaWVzLmRpdmlzaW9ucyArXHJcbiAgICAgICAgICAgIFNFVFRJTkdTLmdlbmVyYWxFbmVtaWVzLmNvdW50ICogU0VUVElOR1MuZ2VuZXJhbEVuZW1pZXMuZGl2aXNpb25zO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIERyYXcgb2JqZWN0c1xyXG4gICAgX2RyYXdPYmplY3QoY29udGV4dCwgb2JqZWN0KSB7XHJcbiAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSBvYmplY3Quc3ByaXRlO1xyXG4gICAgICAgIGNvbnRleHQuZmlsbFJlY3Qob2JqZWN0LngsIG9iamVjdC55LCBvYmplY3Qud2lkdGgsIG9iamVjdC5oZWlnaHQpO1xyXG4gICAgfVxyXG5cclxuICAgIF9nZXRSYW5kb20obWluLCBtYXgpIHtcclxuICAgICAgICB2YXIgcmFuZCA9IG1pbiArIE1hdGgucmFuZG9tKCkgKiAobWF4ICsgMSAtIG1pbik7XHJcbiAgICAgICAgcmFuZCA9IE1hdGguZmxvb3IocmFuZCk7XHJcbiAgICAgICAgcmV0dXJuIHJhbmQ7XHJcbiAgICB9XHJcblxyXG4gICAgX2Nsb25lR2VuZXJhbEdyb3VwKGdlbmVyYWxDbG9uZSwgbWluaW9uQ2xvbmVzKSB7XHJcbiAgICAgICAgLy8gQ2xvbmluZyBnZW5lcmFsIG9ubHkgb3IgZ2VuZXJhbCB3aXRoIG1pbmlvaW5zXHJcblxyXG4gICAgICAgIC8vIENsb25lIGdlbmVyYWwsIHNldCB3YXlwb2ludHMgYW5kIGFkZCB0byBhdHRhY2tpbmcgZW5lbWllcyBhcnJcclxuICAgICAgICBsZXQgZyA9IG5ldyBHZW5lcmFsRW5lbXkodGhpcy5jb250ZXh0LCBuZXcgVmVjdG9yMmQoZ2VuZXJhbENsb25lLnBvc2l0aW9uLngsIGdlbmVyYWxDbG9uZS5wb3NpdGlvbi55KSk7XHJcbiAgICAgICAgZy5hdHRhY2sgPSB0cnVlO1xyXG4gICAgICAgIGcucHJvdG8gPSBnZW5lcmFsQ2xvbmU7XHJcbiAgICAgICAgbGV0IGdXYXlzID0gdGhpcy5fZ2VuZXJhdGVXYXlwb2ludHMoZywgJ2hhcmQnKTtcclxuICAgICAgICBnLnNldFdheXBvaW50cyhnV2F5cyk7XHJcbiAgICAgICAgdGhpcy5hdHRhY2tpbmdFbmVtaWVzLnB1c2goZyk7XHJcblxyXG4gICAgICAgIC8vIENsb25lIG1pbmlvbnMsIHNldCB3YXlwb2ludHMgYW5kIGFkZCB0byBhdHRhY2tpbmcgZW5lbWllcyBhcnJcclxuICAgICAgICBsZXQgbSA9IFtdO1xyXG5cclxuICAgICAgICBtaW5pb25DbG9uZXMuZm9yRWFjaChtaW5pb24gPT4ge1xyXG4gICAgICAgICAgICBsZXQgY2xvbmUgPSBtaW5pb247XHJcbiAgICAgICAgICAgIGxldCByZWQgPSBuZXcgUmVkRW5lbXkodGhpcy5jb250ZXh0LCBuZXcgVmVjdG9yMmQoY2xvbmUucG9zaXRpb24ueCwgY2xvbmUucG9zaXRpb24ueSkpO1xyXG4gICAgICAgICAgICByZWQuYXR0YWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgcmVkLnByb3RvID0gY2xvbmU7XHJcbiAgICAgICAgICAgIGxldCBvZmZzZXRYID0gcmVkLnBvc2l0aW9uLnggLSBnLnBvc2l0aW9uLng7XHJcbiAgICAgICAgICAgIGxldCBvZmZzZXRZID0gcmVkLnBvc2l0aW9uLnkgLSBnLnBvc2l0aW9uLnk7XHJcblxyXG4gICAgICAgICAgICBnLndheXBvaW50cy5mb3JFYWNoKHdwID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIFNldCBtaW5pb24gd2F5cG9pbnRzIGZyb20gZ2VuZXJhbCB3YXlzXHJcbiAgICAgICAgICAgICAgICByZWQud2F5cG9pbnRzLnB1c2gobmV3IFZlY3RvcjJkKHdwLnggKyBvZmZzZXRYLCB3cC55ICsgb2Zmc2V0WSkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5hdHRhY2tpbmdFbmVtaWVzLnB1c2gocmVkKTtcclxuICAgICAgICAgICAgbS5wdXNoKHJlZCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB7IGdlbmVyYWw6IGcsIG1pbmlvbnM6IG0gfTtcclxuICAgIH1cclxuXHJcbiAgICBfZ2VuQXR0YWNrKGVuZW1pZXMsIGF0dGFja1R5cGUpIHtcclxuICAgICAgICBpZiAoYXR0YWNrVHlwZSA9PSAnZ2VuZXJhbCcpIHtcclxuICAgICAgICAgICAgLy8gR2VuZXJhbHMgYXR0YWNrXHJcbiAgICAgICAgICAgIGxldCBnZW5lcmFscyA9IGVuZW1pZXMuZmlsdGVyKGcgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGcgaW5zdGFuY2VvZiBHZW5lcmFsRW5lbXkgJiYgIWcuaGlkZSkgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvLyBDaGVjayBhbGl2ZSBnZW5lcmFsc1xyXG4gICAgICAgICAgICBpZiAoZ2VuZXJhbHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBBdHRhY2sgYWxpdmUgZ2VuZXJhbHNcclxuICAgICAgICAgICAgICAgIGxldCBhY3RpdmU7IC8vIEFDdGl2ZSBnZW5lcmFsXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gR2V0IGdlbmVyYWxcclxuICAgICAgICAgICAgICAgIGlmIChnZW5lcmFscy5sZW5ndGggPT0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZSA9IGdlbmVyYWxzW3RoaXMuX2dldFJhbmRvbSgwLCAxKV07XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZSA9IGdlbmVyYWxzWzBdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gR2V0IGdlbmVyYWwncyBtaW5pb25zXHJcbiAgICAgICAgICAgICAgICBsZXQgbWluaW9ucyA9IGVuZW1pZXMuZmlsdGVyKHIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyIGluc3RhbmNlb2YgUmVkRW5lbXkgJiYgIXIuaGlkZSAmJiByLmdlbmVyYWwgPT0gYWN0aXZlKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChtaW5pb25zLmxlbmd0aCA+PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQXR0YWNrIHdpdGggMiBtaW5pb2luc1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCByZWQxID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmVkMiA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWQxID0gbWluaW9uc1t0aGlzLl9nZXRSYW5kb20oMCwgbWluaW9ucy5sZW5ndGggLSAxKV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZDIgPSBtaW5pb25zW3RoaXMuX2dldFJhbmRvbSgwLCBtaW5pb25zLmxlbmd0aCAtIDEpXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKHJlZDEgPT0gcmVkMilcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGdyb3VwID0gdGhpcy5fY2xvbmVHZW5lcmFsR3JvdXAoYWN0aXZlLCBbcmVkMSwgcmVkMl0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZS5oaWRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVuZW1pZXMucHVzaChncm91cC5nZW5lcmFsKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmVkMS5oaWRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVuZW1pZXMucHVzaChncm91cC5taW5pb25zWzBdKTtcclxuICAgICAgICAgICAgICAgICAgICByZWQyLmhpZGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW5lbWllcy5wdXNoKGdyb3VwLm1pbmlvbnNbMV0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChtaW5pb25zLmxlbmd0aCA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQXR0YWNrIHdpdGggMSBtaW5pb25cclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmVkID0gbWluaW9uc1swXTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZ3JvdXAgPSB0aGlzLl9jbG9uZUdlbmVyYWxHcm91cChhY3RpdmUsIFtyZWRdKTtcclxuICAgICAgICAgICAgICAgICAgICBhY3RpdmUuaGlkZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbmVtaWVzLnB1c2goZ3JvdXAuZ2VuZXJhbCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJlZC5oaWRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVuZW1pZXMucHVzaChncm91cC5taW5pb25zWzBdKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQXR0YWNrIG9ubHkgZ2VuZXJhbFxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBnZW5lcmFsID0gdGhpcy5fY2xvbmVVbml0KGFjdGl2ZSwgJ2hhcmQnKTtcclxuICAgICAgICAgICAgICAgICAgICBhY3RpdmUuaGlkZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbmVtaWVzLnB1c2goZ2VuZXJhbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBPbmx5IG1pbmlvbnMgYXR0YWNrXHJcbiAgICAgICAgICAgICAgICBsZXQgZ3JvdXAgPSB0aGlzLl9jcmVhdGVBdHRhY2tHcm91cChlbmVtaWVzLCAncmVkJyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgdW5pdCA9IGdyb3VwW3RoaXMuX2dldFJhbmRvbSgwLCBncm91cC5sZW5ndGggLSAxKV07XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHVuaXQgIT0gdW5kZWZpbmVkICYmIGdyb3VwLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHVuaXQuaGlkZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbmVtaWVzLnB1c2godGhpcy5fY2xvbmVVbml0KHVuaXQsICdoYXJkJykpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoYXR0YWNrVHlwZSA9PSAnc2luZ2xlLWJsdWUnKSB7XHJcbiAgICAgICAgICAgIC8vIEVhc3kgYXR0YWNrIG9ubHkgb25lIGJsdWUgZW5lbXkgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGxldCBncm91cCA9IHRoaXMuX2NyZWF0ZUF0dGFja0dyb3VwKGVuZW1pZXMsICdibHVlJyk7XHJcbiAgICAgICAgICAgIGxldCB1bml0ID0gZ3JvdXBbdGhpcy5fZ2V0UmFuZG9tKDAsIGdyb3VwLmxlbmd0aCAtIDEpXTtcclxuXHJcbiAgICAgICAgICAgIGlmICh1bml0ICE9IHVuZGVmaW5lZCAmJiBncm91cC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHVuaXQuaGlkZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVuZW1pZXMucHVzaCh0aGlzLl9jbG9uZVVuaXQodW5pdCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChhdHRhY2tUeXBlID09ICdkb3VibGUtYmx1ZScpIHtcclxuICAgICAgICAgICAgLy8gRWFzeSBhdHRhY2sgY291cGxlIGVuZW1pZXNcclxuICAgICAgICAgICAgbGV0IGdyb3VwID0gdGhpcy5fY3JlYXRlQXR0YWNrR3JvdXAoZW5lbWllcywgJ2JsdWUnKTtcclxuICAgICAgICAgICAgbGV0IGlkMSA9IDA7XHJcbiAgICAgICAgICAgIGxldCBpZDIgPSAwO1xyXG4gICAgICAgICAgICAvLyBQcmV2ZW50IGluZmluaXRlIGxvb3BcclxuICAgICAgICAgICAgaWYgKGdyb3VwLmxlbmd0aCA+PSAyKSB7XHJcbiAgICAgICAgICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQxID0gdGhpcy5fZ2V0UmFuZG9tKDAsIGdyb3VwLmxlbmd0aCAtIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlkMiA9IHRoaXMuX2dldFJhbmRvbSgwLCBncm91cC5sZW5ndGggLSAxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHdoaWxlIChpZDEgPT0gaWQyKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgdW5pdDEgPSBncm91cFtpZDFdO1xyXG4gICAgICAgICAgICBsZXQgdW5pdDIgPSBncm91cFtpZDJdO1xyXG5cclxuICAgICAgICAgICAgaWYgKHVuaXQxICE9IHVuZGVmaW5lZCAmJiB1bml0MiAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHVuaXQxLmhpZGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbmVtaWVzLnB1c2godGhpcy5fY2xvbmVVbml0KHVuaXQxKSk7XHJcbiAgICAgICAgICAgICAgICB1bml0Mi5oaWRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZW5lbWllcy5wdXNoKHRoaXMuX2Nsb25lVW5pdCh1bml0MikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChhdHRhY2tUeXBlID09ICdkb3VibGUtYmx1ZS1zaW5nbGUtcHVycGxlJykge1xyXG4gICAgICAgICAgICAvLyBIYXJkIGF0dGFjayB3aXRoIGNvdXBsZSBibHVlIGVuZW1pZXMgYW5kIHNpbmdsZSBwdXJwbGUgZW5lbXlcclxuXHJcbiAgICAgICAgICAgIC8vIEJsdWUgZW5lbWllc1xyXG4gICAgICAgICAgICBsZXQgYmx1ZUdyb3VwID0gdGhpcy5fY3JlYXRlQXR0YWNrR3JvdXAoZW5lbWllcywgJ2JsdWUnKTsgLy8gdGhpcyBhcnJheSBuZXZlciBiZSBpcyBlbXB0eVxyXG4gICAgICAgICAgICBsZXQgaWQxID0gMDtcclxuICAgICAgICAgICAgbGV0IGlkMiA9IDA7XHJcbiAgICAgICAgICAgIC8vIFByZXZlbnQgaW5maW5pdGUgbG9vcFxyXG4gICAgICAgICAgICBpZiAoYmx1ZUdyb3VwLmxlbmd0aCA+PSAyKSB7XHJcbiAgICAgICAgICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQxID0gdGhpcy5fZ2V0UmFuZG9tKDAsIGJsdWVHcm91cC5sZW5ndGggLSAxKTtcclxuICAgICAgICAgICAgICAgICAgICBpZDIgPSB0aGlzLl9nZXRSYW5kb20oMCwgYmx1ZUdyb3VwLmxlbmd0aCAtIDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgd2hpbGUgKGlkMSA9PSBpZDIpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCB1bml0MSA9IGJsdWVHcm91cFtpZDFdO1xyXG4gICAgICAgICAgICBsZXQgdW5pdDIgPSBibHVlR3JvdXBbaWQyXTtcclxuXHJcbiAgICAgICAgICAgIGlmICh1bml0MSAhPSB1bmRlZmluZWQgJiYgdW5pdDIgIT0gdW5kZWZpbmVkICYmIGJsdWVHcm91cC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHVuaXQxLmhpZGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbmVtaWVzLnB1c2godGhpcy5fY2xvbmVVbml0KHVuaXQxKSk7XHJcbiAgICAgICAgICAgICAgICB1bml0Mi5oaWRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZW5lbWllcy5wdXNoKHRoaXMuX2Nsb25lVW5pdCh1bml0MikpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBQdXJwbGUgZW5lbXlcclxuICAgICAgICAgICAgbGV0IHB1cnBsZUdyb3VwID0gdGhpcy5fY3JlYXRlQXR0YWNrR3JvdXAoZW5lbWllcywgJ3B1cnBsZScpO1xyXG4gICAgICAgICAgICBsZXQgcHVycGxlVW5pdCA9IHB1cnBsZUdyb3VwW3RoaXMuX2dldFJhbmRvbSgwLCBwdXJwbGVHcm91cC5sZW5ndGggLSAxKV07XHJcblxyXG4gICAgICAgICAgICBpZiAocHVycGxlR3JvdXAgIT0gdW5kZWZpbmVkICYmIHB1cnBsZUdyb3VwLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgcHVycGxlVW5pdC5oaWRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZW5lbWllcy5wdXNoKHRoaXMuX2Nsb25lVW5pdChwdXJwbGVVbml0LCAnaGFyZCcpKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgfSBlbHNlIGlmIChhdHRhY2tUeXBlID09ICdzaW5nbGUtYmx1ZS1zaW5nbGUtcHVycGxlJykge1xyXG4gICAgICAgICAgICAvLyBIYXJkIGF0dGFjayB3aXRoIHNpbmdsZSBibHVlIGVuZW1pZSBhbmQgc2luZ2xlIHB1cnBsZSBlbmVteVxyXG5cclxuICAgICAgICAgICAgLy8gQmx1ZSBlbmVteSAgICAgICAgICBcclxuICAgICAgICAgICAgbGV0IGJsdWVHcm91cCA9IHRoaXMuX2NyZWF0ZUF0dGFja0dyb3VwKGVuZW1pZXMsICdibHVlJyk7XHJcbiAgICAgICAgICAgIGxldCB1bml0ID0gYmx1ZUdyb3VwW3RoaXMuX2dldFJhbmRvbSgwLCBibHVlR3JvdXAubGVuZ3RoIC0gMSldO1xyXG5cclxuICAgICAgICAgICAgaWYgKHVuaXQgIT0gdW5kZWZpbmVkICYmIGJsdWVHcm91cC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHVuaXQuaGlkZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVuZW1pZXMucHVzaCh0aGlzLl9jbG9uZVVuaXQodW5pdCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIFB1cnBsZSBlbmVteVxyXG4gICAgICAgICAgICBsZXQgcHVycGxlR3JvdXAgPSB0aGlzLl9jcmVhdGVBdHRhY2tHcm91cChlbmVtaWVzLCAncHVycGxlJyk7XHJcbiAgICAgICAgICAgIGxldCBwdXJwbGVVbml0ID0gcHVycGxlR3JvdXBbdGhpcy5fZ2V0UmFuZG9tKDAsIHB1cnBsZUdyb3VwLmxlbmd0aCAtIDEpXTtcclxuXHJcbiAgICAgICAgICAgIGlmIChwdXJwbGVVbml0ICE9IHVuZGVmaW5lZCAmJiBwdXJwbGVHcm91cC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHB1cnBsZVVuaXQuaGlkZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVuZW1pZXMucHVzaCh0aGlzLl9jbG9uZVVuaXQocHVycGxlVW5pdCwgJ2hhcmQnKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGF0dGFja1R5cGUgPT0gJ3NpbmdsZS1wdXJwbGUnKSB7XHJcbiAgICAgICAgICAgIC8vIEhhcmQgYXR0YWNrIHdpdGggc2luZ2xlIHB1cnBsZSBlbmVteVxyXG4gICAgICAgICAgICBsZXQgcHVycGxlR3JvdXAgPSB0aGlzLl9jcmVhdGVBdHRhY2tHcm91cChlbmVtaWVzLCAncHVycGxlJyk7XHJcbiAgICAgICAgICAgIGxldCBwdXJwbGVVbml0ID0gcHVycGxlR3JvdXBbdGhpcy5fZ2V0UmFuZG9tKDAsIHB1cnBsZUdyb3VwLmxlbmd0aCAtIDEpXTtcclxuXHJcbiAgICAgICAgICAgIGlmIChwdXJwbGVVbml0ICE9IHVuZGVmaW5lZCAmJiBwdXJwbGVHcm91cC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHB1cnBsZVVuaXQuaGlkZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVuZW1pZXMucHVzaCh0aGlzLl9jbG9uZVVuaXQocHVycGxlVW5pdCwgJ2hhcmQnKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hdHRhY2tUaW1lciA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICBfY3JlYXRlQXR0YWNrR3JvdXAoZW5lbWllcywgdHlwZSkge1xyXG4gICAgICAgIC8vIENyZWF0ZSBncm91cCB1bml0cyB3YWl0aW5nIGF0dGFja1xyXG4gICAgICAgIGxldCBncm91cDtcclxuICAgICAgICBpZiAodHlwZSA9PSAnYmx1ZScpIHtcclxuICAgICAgICAgICAgZ3JvdXAgPSBlbmVtaWVzLmZpbHRlcihlbiA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZW4gaW5zdGFuY2VvZiBCbHVlRW5lbXkgJiYgIWVuLmhpZGUpIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT0gJ3B1cnBsZScpIHtcclxuICAgICAgICAgICAgZ3JvdXAgPSBlbmVtaWVzLmZpbHRlcihlbiA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZW4gaW5zdGFuY2VvZiBQdXJwbGVFbmVteSAmJiAhZW4uaGlkZSkgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PSAncmVkJykge1xyXG4gICAgICAgICAgICBncm91cCA9IGVuZW1pZXMuZmlsdGVyKGVuID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlbiBpbnN0YW5jZW9mIFJlZEVuZW15ICYmICFlbi5oaWRlKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFZlcnkgdmVyeSBiYWQgY29kZSBmb3IgZmluZCBsZWZ0IG9yIHJpZ2h0IGJvcmRlcmVkIHVuaXRzXHJcbiAgICAgICAgbGV0IG1pblBvc2l0aW9uID0gMTAwMDtcclxuICAgICAgICBsZXQgbWF4UG9zaXRpb24gPSAwO1xyXG4gICAgICAgIGdyb3VwLmZvckVhY2goZW4gPT4ge1xyXG4gICAgICAgICAgICBpZiAoZW4ucG9zaXRpb24ueCA8IG1pblBvc2l0aW9uKSBtaW5Qb3NpdGlvbiA9IGVuLnBvc2l0aW9uLng7XHJcbiAgICAgICAgICAgIGlmIChlbi5wb3NpdGlvbi54ID4gbWF4UG9zaXRpb24pIG1heFBvc2l0aW9uID0gZW4ucG9zaXRpb24ueDtcclxuICAgICAgICB9KTtcclxuICAgICAgICBncm91cCA9IGdyb3VwLmZpbHRlcigoZW4pID0+IHtcclxuICAgICAgICAgICAgaWYgKGVuLnBvc2l0aW9uLnggPT0gbWluUG9zaXRpb24gfHwgZW4ucG9zaXRpb24ueCA9PSBtYXhQb3NpdGlvbikgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBncm91cDtcclxuICAgIH1cclxuXHJcbiAgICBfY2xvbmVVbml0KGNsb25lLCBtb2RlKSB7XHJcbiAgICAgICAgLy8gQ2xvbmluZyBhdHRhY2sgZW5lbXkgdW5pdCwgZ2VuZXJhdGUgd2F5cG9pbnRzIGFuZCByZXRlcm4gaXRcclxuICAgICAgICBsZXQgdTtcclxuICAgICAgICBpZiAoY2xvbmUgaW5zdGFuY2VvZiBCbHVlRW5lbXkpIHtcclxuICAgICAgICAgICAgdSA9IG5ldyBCbHVlRW5lbXkodGhpcy5jb250ZXh0LCBuZXcgVmVjdG9yMmQoY2xvbmUucG9zaXRpb24ueCwgY2xvbmUucG9zaXRpb24ueSkpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoY2xvbmUgaW5zdGFuY2VvZiBQdXJwbGVFbmVteSkge1xyXG4gICAgICAgICAgICB1ID0gbmV3IFB1cnBsZUVuZW15KHRoaXMuY29udGV4dCwgbmV3IFZlY3RvcjJkKGNsb25lLnBvc2l0aW9uLngsIGNsb25lLnBvc2l0aW9uLnkpKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGNsb25lIGluc3RhbmNlb2YgR2VuZXJhbEVuZW15KSB7XHJcbiAgICAgICAgICAgIHUgPSBuZXcgR2VuZXJhbEVuZW15KHRoaXMuY29udGV4dCwgbmV3IFZlY3RvcjJkKGNsb25lLnBvc2l0aW9uLngsIGNsb25lLnBvc2l0aW9uLnkpKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGNsb25lIGluc3RhbmNlb2YgUmVkRW5lbXkpIHtcclxuICAgICAgICAgICAgdSA9IG5ldyBSZWRFbmVteSh0aGlzLmNvbnRleHQsIG5ldyBWZWN0b3IyZChjbG9uZS5wb3NpdGlvbi54LCBjbG9uZS5wb3NpdGlvbi55KSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB1LmF0dGFjayA9IHRydWU7XHJcbiAgICAgICAgdS5wcm90byA9IGNsb25lO1xyXG4gICAgICAgIGxldCB3YXlzO1xyXG4gICAgICAgIGlmICghbW9kZSkge1xyXG4gICAgICAgICAgICB3YXlzID0gdGhpcy5fZ2VuZXJhdGVXYXlwb2ludHModSwgJ2Vhc3knKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB3YXlzID0gdGhpcy5fZ2VuZXJhdGVXYXlwb2ludHModSwgJ2hhcmQnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHUuc2V0V2F5cG9pbnRzKHdheXMpO1xyXG4gICAgICAgIHRoaXMuYXR0YWNraW5nRW5lbWllcy5wdXNoKHUpO1xyXG5cclxuICAgICAgICByZXR1cm4gdTtcclxuICAgIH1cclxuXHJcbiAgICBfZ2VuZXJhdGVXYXlwb2ludHModW5pdCwgbW9kZSkge1xyXG4gICAgICAgIC8vIEdlbmVyYXRlIGFuZCByZXR1cm4gZW5lbXkgd2F5cG9pbnRzXHJcbiAgICAgICAgbGV0IHdheXBvaW50cyA9IFtdO1xyXG4gICAgICAgIGxldCB3YXlzID0gKG1vZGUgPT0gJ2Vhc3knKSA/IHdheXMgPSB0aGlzLl9nZXRSYW5kb20oNCwgNikgOiB3YXlzID0gdGhpcy5fZ2V0UmFuZG9tKDUsIDgpO1xyXG4gICAgICAgIC8vIEdlbmVyYXRlIGZpcnN0IHdheXBvaW50XHJcbiAgICAgICAgbGV0IGZpcnN0ID0gbmV3IFZlY3RvcjJkKDAsIDApO1xyXG4gICAgICAgIC8vIEZpcnN0IHggcG9zaXRpb25cclxuICAgICAgICBpZiAodW5pdC5wb3NpdGlvbi54IDw9IDEwMCkge1xyXG4gICAgICAgICAgICAvLyBNb3ZlIGxlZnQgZWFzeSAgICAgIFxyXG4gICAgICAgICAgICBmaXJzdC54ID0gdGhpcy5fZ2V0UmFuZG9tKDAsIHVuaXQucG9zaXRpb24ueCAtIHVuaXQuc2l6ZS53aWR0aCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh1bml0LnBvc2l0aW9uLnggPiAxMDEgJiYgdW5pdC5wb3NpdGlvbi54IDw9IDE3NSkge1xyXG4gICAgICAgICAgICAvLyBNb3ZlIGxlZnQgaGFyZFxyXG4gICAgICAgICAgICBmaXJzdC54ID0gdGhpcy5fZ2V0UmFuZG9tKHVuaXQuc2l6ZS53aWR0aCAqIDIsIHVuaXQucG9zaXRpb24ueCAtIHVuaXQuc2l6ZS53aWR0aCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh1bml0LnBvc2l0aW9uLnggPiAxNzUgJiYgdW5pdC5wb3NpdGlvbi54IDw9IDI3NSkge1xyXG4gICAgICAgICAgICAvL01vdmUgcm9naHQgaGFyZFxyXG4gICAgICAgICAgICBmaXJzdC54ID0gdGhpcy5fZ2V0UmFuZG9tKHVuaXQuc2l6ZS53aWR0aCAqIDIsIHVuaXQucG9zaXRpb24ueCArIHVuaXQuc2l6ZS53aWR0aCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh1bml0LnBvc2l0aW9uLnggPiAyNzUpIHtcclxuICAgICAgICAgICAgLy8gTW92ZSByaWdodCBlYXN5XHJcbiAgICAgICAgICAgIGZpcnN0LnggPSB0aGlzLl9nZXRSYW5kb20odW5pdC5zaXplLndpZHRoLCB1bml0LnBvc2l0aW9uLnggKyB1bml0LnNpemUud2lkdGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBGaXJzdCB5IHBvc2l0aW9uXHJcbiAgICAgICAgaWYgKHVuaXQucG9zaXRpb24ueSA9PSAyMjApIHtcclxuICAgICAgICAgICAgLy8gQm90dG9tIGJsdWUgZW5lbXkgcG9zaXRpb24gaW4geVxyXG4gICAgICAgICAgICBmaXJzdC55ID0gdGhpcy5fZ2V0UmFuZG9tKHVuaXQucG9zaXRpb24ueSwgMzAwKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHVuaXQucG9zaXRpb24ueSA9PSAxOTApIHtcclxuICAgICAgICAgICAgLy8gQmx1ZSBtaWRkbGUgcm93IGVuZW15IHBvc2l0aW9uIGluIHlcclxuICAgICAgICAgICAgZmlyc3QueSA9IHRoaXMuX2dldFJhbmRvbSh1bml0LnBvc2l0aW9uLnkgKyB1bml0LnNpemUuaGVpZ2h0ICogMywgMzAwKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHVuaXQucG9zaXRpb24ueSA9PSAxNjApIHtcclxuICAgICAgICAgICAgLy8gQmx1ZSB0b3Agcm93IGVuZW15IHBvc2l0aW9uIGluIHlcclxuICAgICAgICAgICAgZmlyc3QueSA9IHRoaXMuX2dldFJhbmRvbSh1bml0LnBvc2l0aW9uLnkgKyB1bml0LnNpemUuaGVpZ2h0ICogNSwgMzAwKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHVuaXQucG9zaXRpb24ueSA9PSAxMzApIHtcclxuICAgICAgICAgICAgLy8gUHVycGxlIGVuZW15IHBvc2l0aW9uIGluIHlcclxuICAgICAgICAgICAgZmlyc3QueSA9IHRoaXMuX2dldFJhbmRvbSh1bml0LnBvc2l0aW9uLnkgKyB1bml0LnNpemUuaGVpZ2h0ICogNywgMzAwKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHVuaXQucG9zaXRpb24ueSA9PSAxMDApIHtcclxuICAgICAgICAgICAgLy8gUmVkIGVuZW15IHBvc2l0aW9uIGluIHlcclxuICAgICAgICAgICAgZmlyc3QueSA9IHRoaXMuX2dldFJhbmRvbSh1bml0LnBvc2l0aW9uLnkgKyB1bml0LnNpemUuaGVpZ2h0ICogOSwgMzAwKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHVuaXQucG9zaXRpb24ueSA9PSA3NSkge1xyXG4gICAgICAgICAgICBmaXJzdC55ID0gdGhpcy5fZ2V0UmFuZG9tKHVuaXQucG9zaXRpb24ueSArIHVuaXQuc2l6ZS5oZWlnaHQgKiAxMSwgMzAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgd2F5cG9pbnRzLnB1c2goZmlyc3QpO1xyXG5cclxuICAgICAgICAvLyBBaW1lZCBmaXJlIHdheXBvaW50XHJcbiAgICAgICAgbGV0IG9mZnNldFggPSA1MDsgLy8gVGFyZ2V0IG9mZnNldCBpbiB4IGF4aXNcclxuICAgICAgICBsZXQgb2Zmc2V0WSA9IDEyMDsgLy8gVGFyZ2V0IG9mZnNldCBpbiB5IGF4aXNcclxuXHJcbiAgICAgICAgLy8gVGFyZ2V0IHBvc2l0aW9uXHJcbiAgICAgICAgbGV0IHRhcmdldCA9IHRoaXMucGxheWVyLnBvc2l0aW9uO1xyXG4gICAgICAgIHdheXBvaW50cy5wdXNoKG5ldyBWZWN0b3IyZChcclxuICAgICAgICAgICAgdGFyZ2V0LnggKyAodGhpcy5fZ2V0UmFuZG9tKG9mZnNldFggKiAtMSwgb2Zmc2V0WCkpLFxyXG4gICAgICAgICAgICB1bml0LnBvc2l0aW9uLnkgKyAodGhpcy5fZ2V0UmFuZG9tKDEyMCwgMTgwKSlcclxuICAgICAgICApKTtcclxuICAgICAgICBvZmZzZXRZID0gMTgwO1xyXG5cclxuICAgICAgICAvLyBBZGQgYW5vdGhlciB3YXlwb2ludHMgKDAgYW5kIDEgZWxlbWVudCB3ZSBhbHJlYWR5IHVzaW5nLCBzdGFydCB3aXRoIDIgaW5kZXgpXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDI7IGkgPCB3YXlzOyBpKyspIHtcclxuICAgICAgICAgICAgd2F5cG9pbnRzLnB1c2gobmV3IFZlY3RvcjJkKFxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0LnggKyAodGhpcy5fZ2V0UmFuZG9tKG9mZnNldFggKiAtMSwgb2Zmc2V0WCkpLFxyXG4gICAgICAgICAgICAgICAgdW5pdC5wb3NpdGlvbi55ICsgdGhpcy5fZ2V0UmFuZG9tKG9mZnNldFksIG9mZnNldFkpXHJcbiAgICAgICAgICAgICkpO1xyXG4gICAgICAgICAgICBvZmZzZXRYICs9IDUwO1xyXG4gICAgICAgICAgICBvZmZzZXRZICs9IDUwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQWRkIHRhaWwgd2F5cG9pbnRzIGZvciBvdmVyc2NyZWVuIGhpZGUgdW5pdFxyXG4gICAgICAgIHdheXBvaW50cy5wdXNoKG5ldyBWZWN0b3IyZCh0aGlzLnBsYXllci5wb3NpdGlvbi54LCA2NTApKTtcclxuICAgICAgICBpZiAodW5pdC5wb3NpdGlvbi54IDw9IDE1MCkge1xyXG4gICAgICAgICAgICB3YXlwb2ludHMucHVzaChuZXcgVmVjdG9yMmQoLTQwLCA2NTApKTtcclxuICAgICAgICAgICAgd2F5cG9pbnRzLnB1c2gobmV3IFZlY3RvcjJkKC00MCwgMTAwKSk7XHJcbiAgICAgICAgICAgIHdheXBvaW50cy5wdXNoKG5ldyBWZWN0b3IyZCh1bml0LnByb3RvLnBvc2l0aW9uLngsIHVuaXQucHJvdG8ucG9zaXRpb24ueSkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHdheXBvaW50cy5wdXNoKG5ldyBWZWN0b3IyZCg0NDAsIDY1MCkpO1xyXG4gICAgICAgICAgICB3YXlwb2ludHMucHVzaChuZXcgVmVjdG9yMmQoNDQwLCAxMDApKTtcclxuICAgICAgICAgICAgd2F5cG9pbnRzLnB1c2gobmV3IFZlY3RvcjJkKHVuaXQucHJvdG8ucG9zaXRpb24ueCwgdW5pdC5wcm90by5wb3NpdGlvbi55KSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh3YXlwb2ludHMpO1xyXG4gICAgICAgIHJldHVybiB3YXlwb2ludHM7XHJcbiAgICB9XHJcblxyXG4gICAgX2dlbk5ld1dhdmUoKSB7XHJcbiAgICAgICAgLy8gR2VuZXJhdGUgbmV3IGVuZW15IHdhdmUgKGp1c3Qgc2V0IGhpZGUgcHJvcCBpbiBmYWxzZSBvbiBhbiBlYWNoIGVuZW15IG9iamVjdCkgYW5kIHVwZGF0ZWUgd2F2ZSBjb3VudGVyXHJcbiAgICAgICAgaWYgKHRoaXMua2lsbGVkID09IHRoaXMubWF4RW5lbWllcykge1xyXG4gICAgICAgICAgICB0aGlzLmVuZW1pZXMuZm9yRWFjaChlbmVteSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlbmVteS5oaWRlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvLyBDaGFuZ2Ugd2F2ZXMgY291bnRlclxyXG4gICAgICAgICAgICB0aGlzLndhdmVzQ291bnQrKztcclxuICAgICAgICAgICAgdGhpcy53YXZlc1RleHRMYWJlbC5zZXRUZXh0KGA6ICR7dGhpcy53YXZlc0NvdW50fWApO1xyXG4gICAgICAgICAgICAvLyBHZXQgZW5lbXkgYXR0YWNrIHRpbWVyXHJcbiAgICAgICAgICAgIHRoaXMuZ2VuZXJhbEVuZW15VGltZXIgPSAwO1xyXG4gICAgICAgICAgICAvLyBDbGVhciBraWxsZWQgY291bnRlclxyXG4gICAgICAgICAgICB0aGlzLmtpbGxlZCA9IDA7XHJcbiAgICAgICAgICAgIC8vIFN0YXJ0IGVuZW1pZXMgYXR0YWNraW5nIHRpbWVyXHJcbiAgICAgICAgICAgIHRoaXMuYXR0YWNrVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHsgdGhpcy5fZ2VuQXR0YWNrKHRoaXMuZW5lbWllcywgJ3NpbmdsZS1ibHVlJykgfSwgMTAwMCk7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzYWJsZVBhdXNlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF9nYW1lT3ZlcigpIHtcclxuICAgICAgICBpZiAoIXRoaXMuZ2FtZU92ZXIgJiYgIXRoaXMub25QYXVzZSkge1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5nYW1lT3ZlclRpbWVyKTtcclxuICAgICAgICAgICAgdGhpcy5nYW1lT3ZlclRpbWVyID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAvLyBDaGVjayBzY29yZVxyXG4gICAgICAgICAgICB0aGlzLl9jaGVja1JlY29yZCgpO1xyXG4gICAgICAgICAgICAvLyBHZW5lcmF0ZSBsZWFkZXJib2FyZFxyXG4gICAgICAgICAgICB0aGlzLl9jcmVhdGVMZWFkZXJib2FyZCgpO1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVPdmVyID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgX2NoZWNrUmVjb3JkKCkge1xyXG4gICAgICAgIC8vIENvbXBhcmUgZmluYWwgc2NvcmUgd2l0aCBsZWFkZXJib2FyZCBvYmplY3QgYW5kIGFkZCBzY29yZSBhbmQgdXNlciBpbnRvIGlmIG5lZWRcclxuICAgICAgICB0aGlzLnVzZXJTY29yZVRleHQgPSBuZXcgVGV4dCh0aGlzLmNvbnRleHQsIG5ldyBWZWN0b3IyZCg4MCwgNDkwKSwgYCR7dGhpcy51c2VybmFtZX0sIFlPVVIgU0NPUkUgLSAke3RoaXMuc2NvcmV9LCBXQVZFUyAtICR7dGhpcy53YXZlc0NvdW50fWAsICdyZWQnLCAyNTAsIDE3KTtcclxuICAgICAgICBsZXQgbGVhZGVycyA9IFNFVFRJTkdTLmxlYWRlcmJvYXJkO1xyXG5cclxuICAgICAgICBsZXQgYWRkID0gdHJ1ZTtcclxuICAgICAgICBsZXQgZHVwbGljYXRlID0gMDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlYWRlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgZSA9IGxlYWRlcnNbaV07XHJcbiAgICAgICAgICAgIGlmIChlLnVzZXIgPT0gdGhpcy51c2VybmFtZSAmJiB0aGlzLnNjb3JlIDwgZS5zY29yZSkge1xyXG4gICAgICAgICAgICAgICAgYWRkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZS51c2VyID09IHRoaXMudXNlcm5hbWUpIHtcclxuICAgICAgICAgICAgICAgIGR1cGxpY2F0ZSA9IGk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gQWRkIG9yIGRldGVjIGR1cGxpY2F0ZSB1c2VybmFtZSBhbmQgcmV3cml0ZSBoaXMgc2NvcmUgaWYgbmVlZFxyXG4gICAgICAgIGlmIChhZGQgJiYgIWR1cGxpY2F0ZSkge1xyXG4gICAgICAgICAgICBsZWFkZXJzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgdXNlcjogdGhpcy51c2VybmFtZSxcclxuICAgICAgICAgICAgICAgIHNjb3JlOiB0aGlzLnNjb3JlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoYWRkICYmIGR1cGxpY2F0ZSkge1xyXG4gICAgICAgICAgICBsZWFkZXJzW2R1cGxpY2F0ZV0uc2NvcmUgPSB0aGlzLnNjb3JlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBTb3J0IGJ5IHNjb3JlXHJcbiAgICAgICAgbGVhZGVycy5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChhLnNjb3JlID4gYi5zY29yZSkgcmV0dXJuIC0xO1xyXG4gICAgICAgICAgICBpZiAoYS5zY29yZSA8IGIuc2NvcmUpIHJldHVybiAxO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIFJld3JpdGUgbGVhZGVyYm9hcmQgb2JqXHJcbiAgICAgICAgU0VUVElOR1MubGVhZGVyYm9hcmQgPSBsZWFkZXJzLnNsaWNlKDAsIDEwKTtcclxuICAgIH1cclxuXHJcbiAgICBfcGxheWVyQ29sbGlzaW9uKG9wcG9uZW50KSB7XHJcbiAgICAgICAgLy8gRGV0ZWN0IHBsYXllciBjb2xsaXNpb24gd2l0aCBvcHBvbmVudCwgY2hhbmdpbmcgbGl2ZXMgYW5kIGdhbWUgb3ZlciBpbml0XHJcbiAgICAgICAgaWYgKHRoaXMucGxheWVyLmNvbGxpc2lvbihvcHBvbmVudCkgJiYgIXRoaXMucGxheWVyLmhpZGUpIHtcclxuICAgICAgICAgICAgLy8gRXhwbG9kZSBhbmltYXRpb25cclxuICAgICAgICAgICAgaWYgKG9wcG9uZW50IGluc3RhbmNlb2YgQmx1ZUVuZW15IHx8IG9wcG9uZW50IGluc3RhbmNlb2YgUHVycGxlRW5lbXkgfHwgb3Bwb25lbnQgaW5zdGFuY2VvZiBSZWRFbmVteSB8fCBvcHBvbmVudCBpbnN0YW5jZW9mIEdlbmVyYWxFbmVteSkge1xyXG4gICAgICAgICAgICAgICAgLy8gQ29sbGlzaW9uIHdpdGggYXR0YWNraW5nIGVuZW15XHJcbiAgICAgICAgICAgICAgICBvcHBvbmVudC5raWxsKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmtpbGxlZCsrO1xyXG4gICAgICAgICAgICAgICAgLy8gRGVsZXRlIHRoaXMgdW5pdCBmcm9tIGF0dGFja2luZyBhcnJheVxyXG4gICAgICAgICAgICAgICAgdGhpcy5hdHRhY2tpbmdFbmVtaWVzLnNwbGljZSh0aGlzLmF0dGFja2luZ0VuZW1pZXMuaW5kZXhPZihvcHBvbmVudCksIDEpO1xyXG4gICAgICAgICAgICAgICAgLy8gRGVsZXRlIHRoaXMgdW5pdCBmcm9tIGVuZW1pZXMgYXJyYXlcclxuICAgICAgICAgICAgICAgIHRoaXMuZW5lbWllcy5zcGxpY2UodGhpcy5lbmVtaWVzLmluZGV4T2Yob3Bwb25lbnQpLCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBIaWRlIHBsYXllclxyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5oaWRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy8gUmVhZHkgdG8gcmVib3JuaW5nIHN0YXRlXHJcbiAgICAgICAgICAgIHRoaXMucmVib3JuUmVhZHkgPSB0cnVlO1xyXG4gICAgICAgICAgICAvLyBQbGF5ZXIgZXhwbG9kZSBhbmltYXRpb24gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLnBsYXllckV4cGxvZGUuc2V0UG9zaXRpb24obmV3IFZlY3RvcjJkKHRoaXMucGxheWVyLnBvc2l0aW9uLngsIHRoaXMucGxheWVyLnBvc2l0aW9uLnkpKTtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJFeHBsb2RlLmhpZGUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIC8vIFJlbW92ZSBsaXZlXHJcbiAgICAgICAgICAgIHRoaXMubGl2ZXNDb3VudC0tO1xyXG4gICAgICAgICAgICBsZXQgbGl2ZXMgPSB0aGlzLmxpdmVzLmZpbHRlcihsID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghbC5oaWRlKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGxpdmVzLnBvcCgpLmhpZGUgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgLy8gUGxheSBkZXN0cm95IHNvdW5kXHJcbiAgICAgICAgICAgIHRoaXMuc291bmRDb250b2xsZXIucGxheSh0aGlzLmFsbFNvdW5kcy5wbGF5ZXJFeHBsb2RlLCAwLjUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBfZW5lbXlDb2xsaXNpb24oZW5lbXkpIHtcclxuICAgICAgICAvLyBEZXRlY3QgZW5lbXkgY29sbGlzaW9uIHdpdGggcGxheWVyJ3MgYnVsbGV0XHJcblxyXG4gICAgICAgIC8vIENoZWNrIGF0dGFja2luZyBlbmVteVxyXG4gICAgICAgIGlmIChlbmVteS5jb2xsaXNpb24odGhpcy5idWxsZXQpICYmICFlbmVteS5oaWRlKSB7XHJcbiAgICAgICAgICAgIC8vIENvbGxpc2lvbiB3aXRoIHBsYXllciBidWxsZXRcclxuICAgICAgICAgICAgdGhpcy5idWxsZXQuc2V0UG9zaXRpb24obmV3IFZlY3RvcjJkKDEwMDAsIDEwMDApKTsgLy8gUmVsb2NhdGUgYnVsbGV0XHJcbiAgICAgICAgICAgIC8vIEV4cGxvZGUgYW5pbWF0aW9uXHJcbiAgICAgICAgICAgIHRoaXMuZW5lbXlFeHBsb2RlLnNldFBvc2l0aW9uKG5ldyBWZWN0b3IyZChlbmVteS5wb3NpdGlvbi54LCBlbmVteS5wb3NpdGlvbi55KSk7XHJcbiAgICAgICAgICAgIHRoaXMuZW5lbXlFeHBsb2RlLmhpZGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKGVuZW15LmF0dGFjaykge1xyXG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgYXR0YWNraW5nIGVuZW15XHJcbiAgICAgICAgICAgICAgICBlbmVteS5raWxsKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmtpbGxlZCsrO1xyXG4gICAgICAgICAgICAgICAgLy8gRGVsZXRlIHRoaXMgdW5pdCBmcm9tIGF0dGFja2luZyBhcnJheVxyXG4gICAgICAgICAgICAgICAgdGhpcy5hdHRhY2tpbmdFbmVtaWVzLnNwbGljZSh0aGlzLmF0dGFja2luZ0VuZW1pZXMuaW5kZXhPZihlbmVteSksIDEpO1xyXG4gICAgICAgICAgICAgICAgLy8gRGVsZXRlIHRoaXMgdW5pdCBmcm9tIGVuZW1pZXMgYXJyYXlcclxuICAgICAgICAgICAgICAgIHRoaXMuZW5lbWllcy5zcGxpY2UodGhpcy5lbmVtaWVzLmluZGV4T2YoZW5lbXkpLCAxKTtcclxuICAgICAgICAgICAgICAgIC8vIENoYW5nZSBzY29yZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zY29yZSArPSBlbmVteS5jb3N0ICogMjtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NvcmVUZXh0LnNldFRleHQoYFNDT1JFOiAke3RoaXMuc2NvcmV9YCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBlbmVteS5oaWRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMua2lsbGVkKys7XHJcbiAgICAgICAgICAgICAgICAvLyBDaGFuZ2Ugc2NvcmVcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NvcmUgKz0gZW5lbXkuY29zdDtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NvcmVUZXh0LnNldFRleHQoYFNDT1JFOiAke3RoaXMuc2NvcmV9YCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNjb3JlID4gdGhpcy5oaWdoU2NvcmUpIHRoaXMuaGlnaFNjb3JlVGV4dC5zZXRUZXh0KHRoaXMuc2NvcmUpO1xyXG4gICAgICAgICAgICAvLyBBZGQgcGxheWVyJ3MgbGl2ZVxyXG4gICAgICAgICAgICBpZiAodGhpcy5zY29yZSA+IHRoaXMuYWRkTGl2ZUNvdW50KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZExpdmVDb3VudCAqPSAyO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubGl2ZXNDb3VudCA8IHRoaXMubWF4TGl2ZXNDb3VudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGl2ZXNbdGhpcy5saXZlc0NvdW50XS5oaWRlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5saXZlc0NvdW50Kys7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIFBMYXkgc291bmRcclxuICAgICAgICAgICAgdGhpcy5zb3VuZENvbnRvbGxlci5wbGF5KHRoaXMuYWxsU291bmRzLmVuZW15RXhwbG9kZSwgMC4xKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgX2NyZWF0ZUxlYWRlcmJvYXJkKCkge1xyXG4gICAgICAgIC8vIExlYWRlcmJvYXJkXHJcbiAgICAgICAgbGV0IGxlYWRlcnNQb3NpdGlvbiA9IG5ldyBWZWN0b3IyZCgxMzAsIDI0MCk7XHJcbiAgICAgICAgdGhpcy5sZWFkZXJCb2FyZC5wdXNoKG5ldyBUZXh0KHRoaXMuY29udGV4dCwgbGVhZGVyc1Bvc2l0aW9uLCAnTCBFIEEgRCBFIFIgQiBPIEEgUiBEJywgJ29yYW5nZScsIDE1MCwgMTcpKTtcclxuICAgICAgICBsZWFkZXJzUG9zaXRpb24gPSBsZWFkZXJzUG9zaXRpb24uYWRkKG5ldyBWZWN0b3IyZCgwLCAxMCkpO1xyXG4gICAgICAgIGZvciAoY29uc3QgaSBpbiBTRVRUSU5HUy5sZWFkZXJib2FyZCkge1xyXG4gICAgICAgICAgICBsZWFkZXJzUG9zaXRpb24gPSBsZWFkZXJzUG9zaXRpb24uYWRkKG5ldyBWZWN0b3IyZCgwLCAyMCkpO1xyXG4gICAgICAgICAgICBsZXQgdXNlclBvcyA9IGxlYWRlcnNQb3NpdGlvbi5hZGQobmV3IFZlY3RvcjJkKC0yMCwgMCkpO1xyXG4gICAgICAgICAgICBsZXQgdXNlciA9IG5ldyBUZXh0KHRoaXMuY29udGV4dCwgdXNlclBvcywgYCR7U0VUVElOR1MubGVhZGVyYm9hcmRbaV0udXNlcn1gLCAncHVycGxlJywgMTAwLCAxNyk7XHJcbiAgICAgICAgICAgIHRoaXMubGVhZGVyQm9hcmQucHVzaCh1c2VyKTtcclxuICAgICAgICAgICAgbGV0IHNjb3JlUG9zID0gbGVhZGVyc1Bvc2l0aW9uLmFkZChuZXcgVmVjdG9yMmQoNjAsIDApKTtcclxuICAgICAgICAgICAgbGV0IHNjb3JlID0gbmV3IFRleHQodGhpcy5jb250ZXh0LCBzY29yZVBvcywgYFNDT1JFIC0gJHtTRVRUSU5HUy5sZWFkZXJib2FyZFtpXS5zY29yZX1gLCAncHVycGxlJywgMjAwLCAxNyk7XHJcbiAgICAgICAgICAgIHRoaXMubGVhZGVyQm9hcmQucHVzaChzY29yZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEJ1aWxkIGluaXRpYWwgc3RhdGUgZ2FtZSBzY2VuZSBhbmQgY29sbGVjdCBnYW1lIG9iamVjdHNcclxuICAgIF9idWlsZCgpIHtcclxuICAgICAgICAvLyBHZXQgZW5lbXkgYXR0YWNrIHRpbWVyXHJcbiAgICAgICAgdGhpcy5nZW5lcmFsRW5lbXlUaW1lciA9IDA7XHJcbiAgICAgICAgLy8gQ3JlYXRlIGJhY2tncm91bmRcclxuICAgICAgICB0aGlzLmJhY2tncm91bmQgPSBuZXcgQmFja2dyb3VuZCh0aGlzLmNhbnZhcyk7XHJcbiAgICAgICAgLy8gQnVpbGQgaW5wdXQgY29udHJvbGxlclxyXG4gICAgICAgIHRoaXMuaW5wdXRDb250cm9sbGVyID0gbmV3IElucHV0Q29udHJvbGxlcih3aW5kb3cpO1xyXG4gICAgICAgIC8vIExpc3RlbiBpbnB1dCBldmVudHNcclxuICAgICAgICB0aGlzLmlucHV0Q29udHJvbGxlci5saXN0ZW4oKTtcclxuXHJcbiAgICAgICAgLy8gRHJhdyBiYWNrZ3JvdW5kXHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IFNFVFRJTkdTLmJhY2tncm91bmQuc3ByaXRlO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgLy8gQ3JlYXRlIEdVSVxyXG5cclxuICAgICAgICAvLyBQbGF5ZXIgc2NvcmVcclxuICAgICAgICB0aGlzLnNjb3JlVGV4dCA9IG5ldyBUZXh0KHRoaXMuY29udGV4dCwgbmV3IFZlY3RvcjJkKDEzLCAyNSksIGBTQ09SRTogJHt0aGlzLnNjb3JlfWAsIFNFVFRJTkdTLnRleHQuc2NvcmUuY29sb3IsIFNFVFRJTkdTLnRleHQuc2NvcmUud2lkdGgsIDE1KTtcclxuICAgICAgICAvLyBIaWdoIHNjb3JlXHJcbiAgICAgICAgdGhpcy5oaWdoU2NvcmVMYWJlbCA9IG5ldyBUZXh0KHRoaXMuY29udGV4dCwgbmV3IFZlY3RvcjJkKDE0MywgMjUpLCBgSElHSDogYCwgJ3JlZCcsIDUwKTtcclxuICAgICAgICB0aGlzLmhpZ2hTY29yZVRleHQgPSBuZXcgVGV4dCh0aGlzLmNvbnRleHQsIG5ldyBWZWN0b3IyZCgxODYsIDI1KSwgYCR7dGhpcy5oaWdoU2NvcmV9YCwgU0VUVElOR1MudGV4dC5oaWdoU2NvcmUuY29sb3IsIFNFVFRJTkdTLnRleHQuaGlnaFNjb3JlLndpZHRoLCAxNSk7XHJcbiAgICAgICAgLy8gUGxheWVyIGxpdmVzXHJcbiAgICAgICAgbGV0IGxpdmVzUG9zaXRpb24gPSBuZXcgVmVjdG9yMmQoMjQ1LCAxMik7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm1heExpdmVzQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICBsaXZlc1Bvc2l0aW9uID0gbGl2ZXNQb3NpdGlvbi5hZGQobmV3IFZlY3RvcjJkKDE1LCAwKSk7XHJcbiAgICAgICAgICAgIGxldCBsID0gbmV3IFBsYXllckxpdmUodGhpcy5jb250ZXh0LCBsaXZlc1Bvc2l0aW9uKTtcclxuICAgICAgICAgICAgdGhpcy5saXZlcy5wdXNoKGwpO1xyXG4gICAgICAgICAgICBpZiAoaSA+PSB0aGlzLmxpdmVzQ291bnQpIGwuaGlkZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIENyZWF0ZSB3YXZlIHNwcml0ZSBsYWJlbFxyXG4gICAgICAgIHRoaXMud2F2ZUxhYmVsID0gbmV3IFdhdmVMYWJlbCh0aGlzLmNvbnRleHQsIG5ldyBWZWN0b3IyZCgzNTAsIDE0KSk7XHJcbiAgICAgICAgLy8gQ3JlYXRlIHdhdmVzIGNvdW50XHJcbiAgICAgICAgdGhpcy53YXZlc1RleHRMYWJlbCA9IG5ldyBUZXh0KHRoaXMuY29udGV4dCwgbmV3IFZlY3RvcjJkKDM2NSwgMjUpLCBgOiAke3RoaXMud2F2ZXNDb3VudH1gLCBTRVRUSU5HUy50ZXh0LndhdmUuY29sb3IsIFNFVFRJTkdTLnRleHQud2F2ZS53aWR0aCwgMTUpO1xyXG4gICAgICAgIC8vIFJlYWR5IGxhYmVsXHJcbiAgICAgICAgdGhpcy5yZWFkeUxhYmVsID0gbmV3IFRleHQodGhpcy5jb250ZXh0LCBuZXcgVmVjdG9yMmQoMTcwLCAzNTApLCAnUiBFIEEgRCBZJywgJ3JlZCcsIDEwMCwgMTcpO1xyXG4gICAgICAgIC8vIFBhdXNlIGxhYmVsXHJcbiAgICAgICAgdGhpcy5wYXVzZUxhYmVsID0gbmV3IFRleHQodGhpcy5jb250ZXh0LCBuZXcgVmVjdG9yMmQoMTcwLCAzNTApLCAnUCBBIFUgUyBFJywgJ3JlZCcsIDEwMCwgMTcpO1xyXG4gICAgICAgIC8vIEdhbWUgb3ZlciBsYWJlbFxyXG4gICAgICAgIHRoaXMuZ2FtZU92ZXJMYWJlbCA9IG5ldyBUZXh0KHRoaXMuY29udGV4dCwgbmV3IFZlY3RvcjJkKDEzNSwgMTYwKSwgJ0cgQSBNIEUgICBPIFYgRSBSJywgJ3JlZCcsIDE1MCwgMTcpO1xyXG4gICAgICAgIC8vIFJlc3RhcnQgbGFiZWxcclxuICAgICAgICB0aGlzLnJlc3RhcnRMYWJlbCA9IG5ldyBUZXh0KHRoaXMuY29udGV4dCwgbmV3IFZlY3RvcjJkKDEzMCwgMjAwKSwgJ1BSRVNTIFNQQUNFIEZPUiBSRVNUQVJUJywgJ3doaXRlJywgMTUwLCAxNSk7XHJcblxyXG4gICAgICAgIC8vIENyZWF0ZSBwbGF5ZXIgb2JqZWN0ICAgICAgIFxyXG4gICAgICAgIHRoaXMucGxheWVyID0gbmV3IFBsYXllcih0aGlzLmNvbnRleHQsIG5ldyBWZWN0b3IyZCgxODUsIDU2MCkpO1xyXG4gICAgICAgIC8vIFVzaW5nIG92ZXJsaW1pdHMgY29vcmRpbmF0ZXMgdG8gcHJldmVudCBidWxsZXQgdXBkYXRlIG1ldGhvZFxyXG4gICAgICAgIHRoaXMuYnVsbGV0ID0gbmV3IEJ1bGxldCh0aGlzLmNvbnRleHQsIG5ldyBWZWN0b3IyZCgxMDAwLCAxMDAwKSk7XHJcblxyXG4gICAgICAgIC8vIENyZWF0ZSBlbmVteSByb2NrZXRzIHBvb2xcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubWF4Um9ja2V0czsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMucm9ja2V0cy5wdXNoKG5ldyBSb2NrZXQodGhpcy5jb250ZXh0LCBuZXcgVmVjdG9yMmQoMTMwMCwgMTMwMCkpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIENyZWF0ZSBlbmVteSB4cGxvZGUgb2JqZWN0XHJcbiAgICAgICAgdGhpcy5lbmVteUV4cGxvZGUgPSBuZXcgRW5lbXlFeHBsb2RlKHRoaXMuY29udGV4dCwgbmV3IFZlY3RvcjJkKDIyMCwgMjIwKSwgMik7XHJcbiAgICAgICAgdGhpcy5lbmVteUV4cGxvZGUuaGlkZSA9IHRydWU7IC8vIEhpZGUgZXhwbG9kZSBmb3Igb3B0aW1pemVcclxuXHJcbiAgICAgICAgLy8gQ3JlYXRlIHBsYXllcidzIGV4cGxvZGUgb2JqZWN0XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJFeHBsb2RlID0gbmV3IFBsYXllckV4cGxvZGUodGhpcy5jb250ZXh0LCBuZXcgVmVjdG9yMmQoMjUwLCAyNTApLCA1KTtcclxuICAgICAgICB0aGlzLnBsYXllckV4cGxvZGUuaGlkZSA9IHRydWU7IC8vIEhpZGUgeHBsb2RlXHJcblxyXG5cclxuICAgICAgICAvLyBDcmVhdGUgZW5laWVzIG9iamVjdCBhbmQgY29sbGVjdCB0aGVtIGluIGFycmF5XHJcblxyXG4gICAgICAgIGxldCBuZXh0UG9zaXRpb25YID0gU0VUVElOR1MuYmx1ZUVuZW1pZXMucG9zaXRpb24ueDtcclxuICAgICAgICBsZXQgbmV4dFBvc2l0aW9uWSA9IFNFVFRJTkdTLmJsdWVFbmVtaWVzLnBvc2l0aW9uLnk7XHJcbiAgICAgICAgbGV0IGNvdW50RW5lbWllcyA9IFNFVFRJTkdTLmJsdWVFbmVtaWVzLmNvdW50O1xyXG4gICAgICAgIGxldCBkaXZpc2lvbnMgPSBTRVRUSU5HUy5ibHVlRW5lbWllcy5kaXZpc2lvbnM7XHJcbiAgICAgICAgLy8gQnVpbGQgYmx1ZSBlbmVtaWVzXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudEVuZW1pZXM7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgeCA9IG5leHRQb3NpdGlvblg7XHJcbiAgICAgICAgICAgIG5leHRQb3NpdGlvblggKz0gU0VUVElOR1MuYmx1ZUVuZW1pZXMucG9zaXRpb24ud2lkdGg7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZGl2aXNpb25zOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCB5ID0gbmV4dFBvc2l0aW9uWSArIChqICogMzApO1xyXG4gICAgICAgICAgICAgICAgbGV0IGVuZW15ID0gbmV3IEJsdWVFbmVteSh0aGlzLmNvbnRleHQsIG5ldyBWZWN0b3IyZCh4LCB5KSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVuZW1pZXMucHVzaChlbmVteSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gQnVpbGQgcHVycGxlIGVuZW1pZXNcclxuICAgICAgICBuZXh0UG9zaXRpb25YID0gU0VUVElOR1MucHVycGxlRW5lbWllcy5wb3NpdGlvbi54O1xyXG4gICAgICAgIG5leHRQb3NpdGlvblkgPSBTRVRUSU5HUy5wdXJwbGVFbmVtaWVzLnBvc2l0aW9uLnk7XHJcbiAgICAgICAgY291bnRFbmVtaWVzID0gU0VUVElOR1MucHVycGxlRW5lbWllcy5jb3VudDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50RW5lbWllczsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBlbmVteSA9IG5ldyBQdXJwbGVFbmVteSh0aGlzLmNvbnRleHQsIG5ldyBWZWN0b3IyZChuZXh0UG9zaXRpb25YLCBuZXh0UG9zaXRpb25ZKSk7XHJcbiAgICAgICAgICAgIG5leHRQb3NpdGlvblggKz0gU0VUVElOR1MucHVycGxlRW5lbWllcy5wb3NpdGlvbi53aWR0aDtcclxuICAgICAgICAgICAgdGhpcy5lbmVtaWVzLnB1c2goZW5lbXkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQnVpbGQgZ2VuZXJhbCBlbmVtaWVzXHJcbiAgICAgICAgbmV4dFBvc2l0aW9uWCA9IFNFVFRJTkdTLmdlbmVyYWxFbmVtaWVzLnBvc2l0aW9uLng7XHJcbiAgICAgICAgbmV4dFBvc2l0aW9uWSA9IFNFVFRJTkdTLmdlbmVyYWxFbmVtaWVzLnBvc2l0aW9uLnk7XHJcbiAgICAgICAgY291bnRFbmVtaWVzID0gU0VUVElOR1MuZ2VuZXJhbEVuZW1pZXMuY291bnQ7XHJcbiAgICAgICAgbGV0IGdlbmVyYWxzID0gW11cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50RW5lbWllczsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBlbmVteSA9IG5ldyBHZW5lcmFsRW5lbXkodGhpcy5jb250ZXh0LCBuZXcgVmVjdG9yMmQobmV4dFBvc2l0aW9uWCwgbmV4dFBvc2l0aW9uWSkpO1xyXG4gICAgICAgICAgICBuZXh0UG9zaXRpb25YICs9IFNFVFRJTkdTLmdlbmVyYWxFbmVtaWVzLnBvc2l0aW9uLndpZHRoICsgU0VUVElOR1MuZ2VuZXJhbEVuZW1pZXMucG9zaXRpb24uc3BhY2luZztcclxuICAgICAgICAgICAgdGhpcy5lbmVtaWVzLnB1c2goZW5lbXkpO1xyXG4gICAgICAgICAgICBnZW5lcmFscy5wdXNoKGVuZW15KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEJ1aWxkIHJlZCBlbmVtaWVzXHJcbiAgICAgICAgbmV4dFBvc2l0aW9uWCA9IFNFVFRJTkdTLnJlZEVuZW1pZXMucG9zaXRpb24ueDtcclxuICAgICAgICBuZXh0UG9zaXRpb25ZID0gU0VUVElOR1MucmVkRW5lbWllcy5wb3NpdGlvbi55O1xyXG4gICAgICAgIGNvdW50RW5lbWllcyA9IFNFVFRJTkdTLnJlZEVuZW1pZXMuY291bnQ7XHJcbiAgICAgICAgbGV0IGRpdiA9IGNvdW50RW5lbWllcyAvIFNFVFRJTkdTLmdlbmVyYWxFbmVtaWVzLmNvdW50O1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnRFbmVtaWVzOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGVuZW15ID0gbmV3IFJlZEVuZW15KHRoaXMuY29udGV4dCwgbmV3IFZlY3RvcjJkKG5leHRQb3NpdGlvblgsIG5leHRQb3NpdGlvblkpKTtcclxuICAgICAgICAgICAgbmV4dFBvc2l0aW9uWCArPSBTRVRUSU5HUy5yZWRFbmVtaWVzLnBvc2l0aW9uLndpZHRoO1xyXG4gICAgICAgICAgICB0aGlzLmVuZW1pZXMucHVzaChlbmVteSk7XHJcbiAgICAgICAgICAgIC8vIEFkZCBnZW5lcmFsXHJcbiAgICAgICAgICAgIGlmIChpIDwgZGl2KSB7XHJcbiAgICAgICAgICAgICAgICBlbmVteS5nZW5lcmFsID0gZ2VuZXJhbHNbMF07XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBlbmVteS5nZW5lcmFsID0gZ2VuZXJhbHNbMV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIENyZWF0ZSByZWd1bGFyIHdheXBvaW50cyBmb3IgYWxsIGVuZW1pZXNcclxuICAgICAgICB0aGlzLmVuZW1pZXMuZm9yRWFjaChlbmVteSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB4ID0gZW5lbXkucG9zaXRpb24ueDtcclxuICAgICAgICAgICAgbGV0IHkgPSBlbmVteS5wb3NpdGlvbi55O1xyXG4gICAgICAgICAgICAvLyBBZGQgcmVndWxhciB3YXlwb2ludHNcclxuICAgICAgICAgICAgZW5lbXkuc2V0V2F5cG9pbnRzKFxyXG4gICAgICAgICAgICAgICAgbmV3IFZlY3RvcjJkKHggLSAyMCwgeSksXHJcbiAgICAgICAgICAgICAgICBuZXcgVmVjdG9yMmQoeCArIDMwLCB5KVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBTdGFydCBlbmVtaWVzIGF0dGFja2luZyB0aW1lclxyXG4gICAgICAgIHRoaXMuYXR0YWNrVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHsgdGhpcy5fZ2VuQXR0YWNrKHRoaXMuZW5lbWllcywgJ3NpbmdsZS1ibHVlJykgfSwgMTAwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgX2Rlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kID0gbnVsbDtcclxuICAgICAgICB0aGlzLnBsYXllciA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5yZWJvcm5SZWFkeSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZW5lbWllcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuYXR0YWNraW5nRW5lbWllcyA9IFtdO1xyXG4gICAgICAgIHRoaXMua2lsbGVkID0gMDtcclxuICAgICAgICB0aGlzLmJ1bGxldCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5yb2NrZXRzID0gW107XHJcbiAgICAgICAgdGhpcy5nZW5lcmFsRW5lbXlUaW1lciA9IDA7XHJcbiAgICAgICAgdGhpcy5nZW5lcmFsUmVhZHkgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmVuZW15RXhwbG9kZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJFeHBsb2RlID0gbnVsbDtcclxuICAgICAgICB0aGlzLnNjb3JlID0gMDtcclxuICAgICAgICB0aGlzLnNjb3JlVGV4dCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy51c2VyU2NvcmVUZXh0ID0gbnVsbDtcclxuICAgICAgICB0aGlzLmhpZ2hTY29yZVRleHQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuaGlnaFNjb3JlTGFiZWwgPSBudWxsO1xyXG4gICAgICAgIHRoaXMubGl2ZXMgPSBbXTtcclxuICAgICAgICB0aGlzLmxpdmVzQ291bnQgPSBTRVRUSU5HUy5wbGF5ZXIubGl2ZXM7XHJcbiAgICAgICAgdGhpcy5tYXhMaXZlc0NvdW50ID0gU0VUVElOR1MucGxheWVyLm1heExpdmVzO1xyXG4gICAgICAgIHRoaXMuYWRkTGl2ZUNvdW50ID0gU0VUVElOR1MubmV4dExpdmU7XHJcbiAgICAgICAgdGhpcy53YXZlc0NvdW50ID0gMTtcclxuICAgICAgICB0aGlzLndhdmVMYWJlbCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy53YXZlc1RleHRMYWJlbCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5yZWFkeUxhYmVsID0gbnVsbDtcclxuICAgICAgICB0aGlzLnBhdXNlTGFiZWwgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZ2FtZU92ZXJMYWJlbCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5yZXN0YXJ0TGFiZWwgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZ2FtZU92ZXIgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmxlYWRlckJvYXJkID0gW107XHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuYXR0YWNrVGltZXIpO1xyXG4gICAgICAgIHRoaXMuYXR0YWNrVGltZXIgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuY2xlYXJTY2VuZVRpbWVyKTtcclxuICAgICAgICB0aGlzLmNsZWFyU2NlbmVUaW1lciA9IHVuZGVmaW5lZDtcclxuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5wbGF5ZXJSZWJvcm5UaW1lcik7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJSZWJvcm5UaW1lciA9IHVuZGVmaW5lZDtcclxuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5nYW1lT3ZlclRpbWVyKTtcclxuICAgICAgICB0aGlzLmdhbWVPdmVyVGltZXIgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMucmVzZXRUaW1lcik7XHJcbiAgICAgICAgdGhpcy5yZXNldFRpbWVyID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFVwZGF0ZSBhbGwgZ2FtZSBvYmplY3RzXHJcbiAgICBfdXBkYXRlKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5vblBhdXNlICYmICF0aGlzLmdhbWVPdmVyIHx8IHRoaXMuZGlzYWJsZVBhdXNlKSB7XHJcbiAgICAgICAgICAgIC8vIFNldCBwYXVzZSBzdGF0dXNcclxuICAgICAgICAgICAgdGhpcy5vblBhdXNlID0gdGhpcy5pbnB1dENvbnRyb2xsZXIucGF1c2U7XHJcblxyXG4gICAgICAgICAgICAvLyBVcGRhdGUgdGltZXIgZm9yIGdlbmVyYWwgZW5lbXkgYXR0YWNrXHJcbiAgICAgICAgICAgIHRoaXMuZ2VuZXJhbEVuZW15VGltZXIrKztcclxuXHJcbiAgICAgICAgICAgIC8vIFJlbmRlcmluZyBiYWNrZ3JvdW5kXHJcbiAgICAgICAgICAgIHRoaXMuYmFja2dyb3VuZC51cGRhdGUoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFJlbmRlcmluZyBHVUlcclxuICAgICAgICAgICAgdGhpcy5zY29yZVRleHQudXBkYXRlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuaGlnaFNjb3JlTGFiZWwudXBkYXRlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuaGlnaFNjb3JlVGV4dC51cGRhdGUoKTtcclxuICAgICAgICAgICAgLy8gUExheWVyIGxpdmVzXHJcbiAgICAgICAgICAgIHRoaXMubGl2ZXMuZm9yRWFjaChsID0+IHtcclxuICAgICAgICAgICAgICAgIGwudXBkYXRlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvLyBSZW5kZXJpbmcgd2F2ZSBsYWJlbFxyXG4gICAgICAgICAgICB0aGlzLndhdmVMYWJlbC51cGRhdGUoKTtcclxuICAgICAgICAgICAgdGhpcy53YXZlc1RleHRMYWJlbC51cGRhdGUoKTtcclxuICAgICAgICAgICAgLy8gU2V0IHNob3cgc3RhdHVzIGZvciBwYXVzZSBsYWJlbFxyXG4gICAgICAgICAgICBpZiAoIXRoaXMucGF1c2VMYWJlbC5zaG93KSB0aGlzLnBhdXNlTGFiZWwuc2hvdyA9IHRydWU7XHJcbiAgICAgICAgICAgIC8vIFNldCBzaG93IHN0YXR1cyBmb3IgZ2FtZSBvdmVyc1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuZ2FtZU92ZXJMYWJlbC5zaG93KSB0aGlzLmdhbWVPdmVyTGFiZWwuc2hvdyA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5yZXN0YXJ0TGFiZWwuc2hvdykgdGhpcy5yZXN0YXJ0TGFiZWwuc2hvdyA9IHRydWU7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIERyYXcsIHVwZGF0ZSBzdGF0ZSBwbGF5ZXIgb2JqZWN0IGFuZCBjaGVjayBjb2xpaXNpb25zXHJcbiAgICAgICAgICAgIGlmICghdGhpcy5wbGF5ZXIuaGlkZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaW5wdXRDb250cm9sbGVyLmFjdGlvbiA9PSAnbGVmdCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBNb3ZlIGxlZnRcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5tb3ZlTGVmdCgpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlucHV0Q29udHJvbGxlci5hY3Rpb24gPT0gJ3JpZ2h0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIE1vdmUgcmlnaHRcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5tb3ZlUmlnaHQoKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gSWRsZSBzdGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLnVwZGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucmVib3JuUmVhZHkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5saXZlc0NvdW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyUmVib3JuVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHsgdGhpcy5wbGF5ZXIuaGlkZSA9IGZhbHNlIH0sIDUwMDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5zZXRQb3NpdGlvbihuZXcgVmVjdG9yMmQoMTg1LCA1NjApKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWJvcm5SZWFkeSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFjdGl2YXRlIGdhbWUgb3ZlciBzdGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWVPdmVyVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHsgdGhpcy5fZ2FtZU92ZXIoKSB9LCAyMDAwKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIENsZWFyIHJlYm9ybiBwbGF5ZXIgdGltZXJcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnBsYXllci5oaWRlICYmIHRoaXMucGxheWVyUmVib3JuVGltZXIgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5wbGF5ZXJSZWJvcm5UaW1lcik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllclJlYm9yblRpbWVyID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBGaXJlIHBsYXllciBidWxsZXRcclxuICAgICAgICAgICAgaWYgKHRoaXMuaW5wdXRDb250cm9sbGVyLmZpcmUpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmJ1bGxldC5yZWFkeSAmJiAhdGhpcy5wbGF5ZXIuaGlkZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFNldCBidWxsZXQgcG9zaXRpb24gbmVhciBwbGF5ZXJcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1bGxldC5zZXRQb3NpdGlvbihuZXcgVmVjdG9yMmQodGhpcy5wbGF5ZXIucG9zaXRpb24ueCArIDE0LCB0aGlzLnBsYXllci5wb3NpdGlvbi55IC0gNSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFBsYXkgc291bmRcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNvdW5kQ29udG9sbGVyLnBsYXkodGhpcy5hbGxTb3VuZHMuZmlyZSwgMC45KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gUmVuZGVyaW5nIG1vdmUgYnVsbGV0XHJcbiAgICAgICAgICAgIHRoaXMuYnVsbGV0LnVwZGF0ZSgpO1xyXG5cclxuICAgICAgICAgICAgLy8gUmVuZGVyaW5nIGVuZW15IHJvY2tldHNcclxuICAgICAgICAgICAgdGhpcy5yb2NrZXRzLmZvckVhY2gocm9ja2V0ID0+IHtcclxuICAgICAgICAgICAgICAgIHJvY2tldC51cGRhdGUoKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyBSZW5kZXJpbmcgZW5lbXkgZXhwbG9kZVxyXG4gICAgICAgICAgICB0aGlzLmVuZW15RXhwbG9kZS51cGRhdGUoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFJlbmRlcmluZyBwbGF5ZXIgZXhwbG9kZVxyXG4gICAgICAgICAgICB0aGlzLnBsYXllckV4cGxvZGUudXBkYXRlKCk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIENhbGMgaGlkZGVuIChhLmsuIGtpbGxlZCkgcHVycGxlIGVuZW1pZXMgKGZvciBnZW5lcmF0ZSBhdHRhY2spXHJcbiAgICAgICAgICAgIGxldCBraWxsZWRQdXJwbGVFbmVtaWVzID0gdGhpcy5lbmVtaWVzLmZpbHRlcigoZW4pID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlbiBpbnN0YW5jZW9mIFB1cnBsZUVuZW15ICYmIGVuLmhpZGUpIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgbGV0IG1heFB1cnBsZUVuZW1pZXMgPSBTRVRUSU5HUy5wdXJwbGVFbmVtaWVzLmNvdW50ICogU0VUVElOR1MucHVycGxlRW5lbWllcy5kaXZpc2lvbnM7XHJcbiAgICAgICAgICAgIC8vIENhbGMga2lsbGVkIGJsdWUgZW5lbWllc1xyXG4gICAgICAgICAgICBsZXQga2lsbGVkQmx1ZUVuZW1pZXMgPSB0aGlzLmVuZW1pZXMuZmlsdGVyKChlbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVuIGluc3RhbmNlb2YgQmx1ZUVuZW15ICYmIGVuLmhpZGUpIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgbGV0IG1heEJsdWVFbmVtaWVzID0gU0VUVElOR1MuYmx1ZUVuZW1pZXMuY291bnQgKiBTRVRUSU5HUy5ibHVlRW5lbWllcy5kaXZpc2lvbnM7XHJcblxyXG4gICAgICAgICAgICAvLyBBdHRhY2tpbmcgaWYgcGxheWVyIGlzIGFjdGl2ZSBhbmQgdmlzaWJsZVxyXG4gICAgICAgICAgICBpZiAoIXRoaXMucGxheWVyLmhpZGUpIHtcclxuICAgICAgICAgICAgICAgIC8vIFByZXBhcmUgYXR0YWNrIGZvciBnZW5lcmFsIGVuZW15ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5nZW5lcmFsRW5lbXlUaW1lciAlIDEwMDAgPT0gMCkgdGhpcy5nZW5lcmFsUmVhZHkgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIEdlZXJhdGUgdHlwZSBhdHRhY2sgYW5kIHJ1biBhdHRhY2sgZW5lbWllc1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZ2VuZXJhbFJlYWR5ICYmICF0aGlzLmF0dGFja2luZ0VuZW1pZXMubGVuZ3RoICYmIHRoaXMuYXR0YWNrVGltZXIgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gU3RhcnQgZ2VuZXJhbCBhdHRhY2tcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdlbmVyYWxFbmVteVRpbWVyID0gMDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdlbmVyYWxSZWFkeSA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5hdHRhY2tUaW1lcik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hdHRhY2tUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4geyB0aGlzLl9nZW5BdHRhY2sodGhpcy5lbmVtaWVzLCAnZ2VuZXJhbCcpIH0sIDEwMDApO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICghdGhpcy5hdHRhY2tpbmdFbmVtaWVzLmxlbmd0aCAmJiB0aGlzLmF0dGFja1RpbWVyID09IHVuZGVmaW5lZCAmJiBraWxsZWRQdXJwbGVFbmVtaWVzLmxlbmd0aCAmJiBraWxsZWRQdXJwbGVFbmVtaWVzLmxlbmd0aCAhPSBtYXhQdXJwbGVFbmVtaWVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gU3RhcnQgYXR0YWNrIGEgcHVycGxlIGVuZW15XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGtpbGxlZEJsdWVFbmVtaWVzLmxlbmd0aCA9PSBtYXhCbHVlRW5lbWllcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBBbGwgYmx1ZSBlbmVtaWVzIHdhcyBraWxsZWQsIGF0dGFjayBzaW5nbGUgcHVycGxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmF0dGFja1RpbWVyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hdHRhY2tUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4geyB0aGlzLl9nZW5BdHRhY2sodGhpcy5lbmVtaWVzLCAnc2luZ2xlLXB1cnBsZScpIH0sIDEwMDApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoa2lsbGVkQmx1ZUVuZW1pZXMubGVuZ3RoID09IChtYXhCbHVlRW5lbWllcyAtIDEpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEF0dGFjayBwdXJwbGUgZW5lbXkgd2l0aCBzaW5nbGUgYmx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5hdHRhY2tUaW1lcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXR0YWNrVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHsgdGhpcy5fZ2VuQXR0YWNrKHRoaXMuZW5lbWllcywgJ3NpbmdsZS1ibHVlLXNpbmdsZS1wdXJwbGUnKSB9LCAxMDAwKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBBdHRhY2sgc2luZ2xlIHB1cnBsZSBlbmVteSB3aXRoIGNvdXBsZSBibHVlIGVuZW1pZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuYXR0YWNrVGltZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmF0dGFja1RpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7IHRoaXMuX2dlbkF0dGFjayh0aGlzLmVuZW1pZXMsICdkb3VibGUtYmx1ZS1zaW5nbGUtcHVycGxlJykgfSwgMTAwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICghdGhpcy5hdHRhY2tpbmdFbmVtaWVzLmxlbmd0aCAmJiB0aGlzLmF0dGFja1RpbWVyID09IHVuZGVmaW5lZCAmJiBraWxsZWRCbHVlRW5lbWllcy5sZW5ndGggIT0gbWF4Qmx1ZUVuZW1pZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoa2lsbGVkQmx1ZUVuZW1pZXMubGVuZ3RoIDw9IDUgfHwga2lsbGVkQmx1ZUVuZW1pZXMubGVuZ3RoID09IChtYXhCbHVlRW5lbWllcyAtIDEpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vINCV0YHQu9C4INCw0YLQsNC60YPRjtGJ0LjRhSDQvdC10YIg0Lgg0YLQsNC50LzQtdGAINC/0YPRgdGCIC0g0LfQsNC90L7Qs9C+INC30LDQv9GD0YHQutCw0LXQvCDQsNGC0LDQutGDXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmF0dGFja1RpbWVyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hdHRhY2tUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4geyB0aGlzLl9nZW5BdHRhY2sodGhpcy5lbmVtaWVzLCAnc2luZ2xlLWJsdWUnKSB9LCAxMDAwKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGtpbGxlZEJsdWVFbmVtaWVzLmxlbmd0aCA+IDUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU3RhcnQgYXR0YWNrIHdpdGggY291cGxlIGJsdWUgZW5lbWllc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5hdHRhY2tUaW1lcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXR0YWNrVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHsgdGhpcy5fZ2VuQXR0YWNrKHRoaXMuZW5lbWllcywgJ2RvdWJsZS1ibHVlJykgfSwgMTAwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBEcmF3IGFuZCB1cGRhdGUgc3RhdGUgZW5lbWllcyAgYW5kIGNoZWNrIGNvbGxpc2lvbnNcclxuICAgICAgICAgICAgdGhpcy5lbmVtaWVzLmZvckVhY2goZW5lbXkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZW5lbXkudXBkYXRlKCk7XHJcbiAgICAgICAgICAgICAgICAvLyBSZW5kZXJpbmcgZW5lbXkgYWxsIHJvY2tldHNcclxuICAgICAgICAgICAgICAgIGVuZW15LnJvY2tldHMuZm9yRWFjaChyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByLnVwZGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIERldGVjdCByb2NrZXQgY29sbGlzaW9uIHdpdGggcGxheWVyXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGxheWVyQ29sbGlzaW9uKHIpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC8vIERldGVjdCBlbmVteSBjb2xsaXNpb25zICAgIFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fZW5lbXlDb2xsaXNpb24oZW5lbXkpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIEF0dGFja2luZyBlbmVtaWVzIGJlaGF2aW9yIFxyXG4gICAgICAgICAgICB0aGlzLmF0dGFja2luZ0VuZW1pZXMuZm9yRWFjaChlbmVteSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWVuZW15LmF0dGFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBmcm9tIGF0dGFjayBhcnJheVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXR0YWNraW5nRW5lbWllcy5zcGxpY2UodGhpcy5hdHRhY2tpbmdFbmVtaWVzLmluZGV4T2YoZW5lbXkpLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5lbmVtaWVzLmluZGV4T2YoZW5lbXkpICE9IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBhdHRhY2sgZW5lbXkgZnJvbSBlbmVtaWVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW5lbWllcy5zcGxpY2UodGhpcy5lbmVtaWVzLmluZGV4T2YoZW5lbXkpLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgZW5lbXkgYXJyaXZlZCBpbiBsYXN0IHdheXBvaW50IGFuZCBzdGlsbCB2aXNpYmxlIChub3Qgc2hvb3RlZCkgd2lsbCBzaG93IGhpcyBwcm90b3R5cGUgY2xvbmVcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWVuZW15LmhpZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNsb25lID0gZW5lbXkucHJvdG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsb25lLmhpZGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gRGV0ZWN0IGF0dGFjayBlbmVteSBjb2xsaXNpb25zICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fZW5lbXlDb2xsaXNpb24oZW5lbXkpO1xyXG4gICAgICAgICAgICAgICAgLy8gRGV0ZWN0IGNvbGxpc2lvbnMgd2l0aCBhdHRhY2tpbmcgZW5lbXlcclxuICAgICAgICAgICAgICAgIHRoaXMuX3BsYXllckNvbGxpc2lvbihlbmVteSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gRW5lbXkgZmlyZSBjb250cm9sICh1c2Ugc2hvdHMgY291bnRlcilcclxuICAgICAgICAgICAgICAgIGlmIChlbmVteS5vYmplY3RpdmUgPiAwICYmIGVuZW15Lm9iamVjdGl2ZSA8PSBlbmVteS5zaG90cykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlbmVteS5wcm90by5yb2NrZXRzW2VuZW15Lm9iamVjdGl2ZV0ucmVhZHkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU3RhcnQgcm9ja2V0cyBvbiBwcm90byBhdHRhY2tpbmcgZW5lbXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW5lbXkucHJvdG8ucm9ja2V0c1tlbmVteS5vYmplY3RpdmVdLnNldFBvc2l0aW9uKG5ldyBWZWN0b3IyZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZW15LnBvc2l0aW9uLnggKyAxMCwgZW5lbXkucG9zaXRpb24ueSArIDI1XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBwbGF5IGVuZW15IHJvY2tldCBzb3VuZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNvdW5kQ29udG9sbGVyLnBsYXkodGhpcy5hbGxTb3VuZHMuZW5lbXlGaXJlLCAwLjEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyBHZW5lcmF0ZSBuZXcgd2F2ZSBpZiB5b3UgZ3JlYXQgc2hvb3RlciApXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmtpbGxlZCA9PSB0aGlzLm1heEVuZW1pZXMgJiYgdGhpcy5saXZlc0NvdW50KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpc2FibGVQYXVzZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgdGhpcy5fZ2VuTmV3V2F2ZSgpIH0sIDMwMDApO1xyXG4gICAgICAgICAgICAgICAgLy8gU2VlIHJlYWR5IGxhYmVsIGJvdHRvbVxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWFkeUxhYmVsLnVwZGF0ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmdhbWVPdmVyKSB7XHJcbiAgICAgICAgICAgIC8vIEdhbWVvdmVyIHN0YXRlXHJcblxyXG4gICAgICAgICAgICAvLyBDbGVhciBjYW52YXNcclxuICAgICAgICAgICAgdGhpcy5jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53YXZlLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xyXG5cclxuICAgICAgICAgICAgLy8gUmVuZGVyIGJhY2tncm91bmRcclxuICAgICAgICAgICAgdGhpcy5iYWNrZ3JvdW5kLnVwZGF0ZSgpO1xyXG4gICAgICAgICAgICAvLyBSZW5kZXIgZ2FtZSBvdmVyIG9iamVjdHNcclxuICAgICAgICAgICAgdGhpcy5nYW1lT3ZlckxhYmVsLnVwZGF0ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLnJlc3RhcnRMYWJlbC51cGRhdGUoKTtcclxuICAgICAgICAgICAgLy8gUmVuZGVyIGxlYWRlcmJvYXJkXHJcbiAgICAgICAgICAgIHRoaXMubGVhZGVyQm9hcmQuZm9yRWFjaChsID0+IHtcclxuICAgICAgICAgICAgICAgIGwudXBkYXRlKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC8vIFJlbmRlciB5b3VyIHJlc3VsdCAoc2NvcmUgKyB3YXZlcylcclxuICAgICAgICAgICAgdGhpcy51c2VyU2NvcmVUZXh0LnVwZGF0ZSgpO1xyXG5cclxuICAgICAgICAgICAgLy8gLy8gUmVzdGFydCBpbnB1dCBkZXRlY3RcclxuICAgICAgICAgICAgaWYgKHRoaXMuaW5wdXRDb250cm9sbGVyLnJlc3RhcnRSZWFkeSkge1xyXG4gICAgICAgICAgICAgICAgLy8gRGV4dHJveSBzY2VuZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5fZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgLy8gQnVpbGQgbmV3IHNjZW5lXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9idWlsZCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLm9uUGF1c2UgJiYgIXRoaXMuZGlzYWJsZVBhdXNlKSB7XHJcbiAgICAgICAgICAgIC8vIFBhdXNlIHN0YXRlXHJcblxyXG4gICAgICAgICAgICAvLyBTZXQgcGF1c2Ugc3RhdHVzXHJcbiAgICAgICAgICAgIHRoaXMub25QYXVzZSA9IHRoaXMuaW5wdXRDb250cm9sbGVyLnBhdXNlO1xyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIFJlbmRlcmluZyBwYXVzZSBsYWJlbFxyXG4gICAgICAgICAgICBpZiAodGhpcy5wYXVzZUxhYmVsLnNob3cpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGF1c2VMYWJlbC51cGRhdGUoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGF1c2VMYWJlbC5zaG93ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIENvbnRpbnVlIGNhbGMgdGltZSBpZiBnYW1lIG9uIHBhdXNlXHJcblxyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5hdHRhY2tUaW1lcik7XHJcbiAgICAgICAgICAgIHRoaXMuYXR0YWNrVGltZXIgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudXBkYXRlUmVxdWVzdCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5fdXBkYXRlLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFN0YXJ0IGdhbWUgbG9vcFxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgLy8gQnVpbGQgZ2FtZVxyXG4gICAgICAgIHRoaXMuX2J1aWxkKCk7XHJcblxyXG4gICAgICAgIC8vIFN0YXJ0IGdhbWUgbG9vcFxyXG4gICAgICAgIHRoaXMuX3VwZGF0ZSgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHYW1lOyIsImltcG9ydCBTZXR0aW5ncyBmcm9tICcuL3NldHRpbmdzJztcclxuaW1wb3J0IFZlY3RvcjJkIGZyb20gJy4vdmVjdG9yJztcclxuXHJcbmNvbnN0IFNFVFRJTkdTID0gU2V0dGluZ3MuZ3VpO1xyXG5jb25zdCBTQ0VORSA9IFNldHRpbmdzLnNjZW5lO1xyXG5cclxuY2xhc3MgVGV4dCB7XHJcbiAgICAvLyBDbGFzcyBmb3IgYSB0ZXh0IGxhYmVsc1xyXG4gICAgY29uc3RydWN0b3IoY29udGV4dCwgcG9zaXRpb24sIHRleHQsIGNvbG9yLCB3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xyXG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XHJcbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcclxuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuc2hvdyA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCkge1xyXG4gICAgICAgIHRoaXMuX2RyYXcoKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRUZXh0KHRleHQpIHtcclxuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIF9kcmF3KCkge1xyXG4gICAgICAgIHRoaXMuY29udGV4dC50ZXh0QWxpZ24gPSAnc3RhcnQnO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5mb250ID0gYCR7dGhpcy5oZWlnaHR9cHggJHtTQ0VORS5mb250fWA7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxUZXh0KHRoaXMudGV4dCwgdGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBTcHJpdGVMYWJlbCB7XHJcbiAgICAvLyBCYXNlIGNsYXNzIGZvciBhIHNwcml0ZSBiYXNlZCBsYWJlbHNcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQsIHBvc2l0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XHJcbiAgICAgICAgdGhpcy5zcHJpdGU7XHJcbiAgICAgICAgdGhpcy5zaXplID0ge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAsXHJcbiAgICAgICAgICAgIGhlaWdodDogMTBcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuaGlkZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaGlkZSkgdGhpcy5fZHJhdygpO1xyXG4gICAgfVxyXG5cclxuICAgIF9kcmF3KCkge1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5zYXZlKCk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZSh0aGlzLnNwcml0ZSwgMCwgMCwgdGhpcy5zaXplLndpZHRoLCB0aGlzLnNpemUuaGVpZ2h0LCB0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy5zaXplLndpZHRoLCB0aGlzLnNpemUuaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLmNvbnRleHQucmVzdG9yZSgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBQbGF5ZXJMaXZlIGV4dGVuZHMgU3ByaXRlTGFiZWwge1xyXG4gICAgLy8gUGxhZXllciBsaXZlcyByZXByZXNlbnQgb2JqZWN0XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBwb3NpdGlvbikge1xyXG4gICAgICAgIHN1cGVyKGNvbnRleHQsIHBvc2l0aW9uKTtcclxuICAgICAgICBzdXBlci5jb250ZXh0ID0gY29udGV4dDtcclxuICAgICAgICBzdXBlci5wb3NpdGlvbiA9IHBvc2l0aW9uO1xyXG4gICAgICAgIHN1cGVyLnNwcml0ZSA9IFNFVFRJTkdTLmxpdmUuc3ByaXRlO1xyXG4gICAgICAgIHN1cGVyLnNpemUgPSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiBTRVRUSU5HUy5saXZlLndpZHRoLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IFNFVFRJTkdTLmxpdmUuaGVpZ2h0XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgV2F2ZUxhYmVsIGV4dGVuZHMgU3ByaXRlTGFiZWwge1xyXG4gICAgY29uc3RydWN0b3IoY29udGV4dCwgcG9zaXRpb24pIHtcclxuICAgICAgICBzdXBlcihjb250ZXh0LCBwb3NpdGlvbik7XHJcbiAgICAgICAgc3VwZXIuY29udGV4dCA9IGNvbnRleHQ7XHJcbiAgICAgICAgc3VwZXIucG9zaXRpb24gPSBwb3NpdGlvbjtcclxuICAgICAgICBzdXBlci5zcHJpdGUgPSBTRVRUSU5HUy53YXZlLnNwcml0ZTtcclxuICAgICAgICBzdXBlci5zaXplID0ge1xyXG4gICAgICAgICAgICB3aWR0aDogU0VUVElOR1Mud2F2ZS53aWR0aCxcclxuICAgICAgICAgICAgaGVpZ2h0OiBTRVRUSU5HUy53YXZlLmhlaWdodFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIFN0YXIge1xyXG4gICAgLy8gQ2xhc3MgZm9yIGJhY2tnb3J1bmQgc3RhclxyXG4gICAgY29uc3RydWN0b3IoY29udGV4dCwgcG9zaXRpb24pIHtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XHJcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcclxuICAgICAgICB0aGlzLnNpemUgPSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDJcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuc3ByaXRlO1xyXG4gICAgICAgIHRoaXMuaGlkZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc3BlZWQgPSAwLjg7XHJcbiAgICAgICAgdGhpcy5saW1pdEJvdHRvbSA9IFNDRU5FLmJhY2tncm91bmQuc2l6ZS5oZWlnaHQgKyAxMDtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucG9zaXRpb24ueSA8PSB0aGlzLmxpbWl0Qm90dG9tKSB7XHJcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueSA9IHRoaXMucG9zaXRpb24ueSArIHRoaXMuc3BlZWQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRQb3NpdGlvbihuZXcgVmVjdG9yMmQoLTUwLCAtNTApKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fZHJhdygpO1xyXG4gICAgfVxyXG5cclxuICAgIF9kcmF3KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmhpZGUpIHtcclxuICAgICAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9ICdyZ2JhKDAsIDAsIDAsIDApJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gdGhpcy5zcHJpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsUmVjdCh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy5zaXplLndpZHRoLCB0aGlzLnNpemUuaGVpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRQb3NpdGlvbihwb3NpdGlvbikge1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgQmFja2dyb3VuZCB7XHJcbiAgICAvLyBCYWNrZ3JvdW5kIGd1aSBjbGFzc1xyXG4gICAgY29uc3RydWN0b3IoY2FudmFzKSB7XHJcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICB0aGlzLmZpbGwgPSBTRVRUSU5HUy5iYWNrZ3JvdW5kLnNwcml0ZTtcclxuICAgICAgICB0aGlzLnN0YXJzID0gdGhpcy5fZ2VuU3RhcnMoKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5fZHJhdyh0aGlzLmNvbnRleHQpO1xyXG5cclxuICAgICAgICAvLyBEcmF3IHN0YXJzIGFuZCBtb3ZpbmcgZW11bGF0aW9uIClcclxuICAgICAgICB0aGlzLnN0YXJzLmZvckVhY2goc3RhciA9PiB7XHJcbiAgICAgICAgICAgIGlmIChzdGFyLnBvc2l0aW9uLnggPT0gLTUwKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgeCA9IHRoaXMuX2dldFJhbmRvbSg1LCB0aGlzLmNhbnZhcy53aWR0aCAtIDUpO1xyXG4gICAgICAgICAgICAgICAgc3Rhci5zZXRQb3NpdGlvbihuZXcgVmVjdG9yMmQoeCwgLTEwKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3Rhci51cGRhdGUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBfZHJhdyhjb250ZXh0KSB7XHJcbiAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSB0aGlzLmZpbGw7XHJcbiAgICAgICAgY29udGV4dC5maWxsUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICBfZ2VuU3RhcnMoKSB7XHJcbiAgICAgICAgLy8gR2VuZXJhdGUgc3RhcnNcclxuICAgICAgICBsZXQgc3RhcnMgPSBbXTtcclxuICAgICAgICBsZXQgc3ByaXRlcyA9IFsnZ3JlZW4nLCAncmVkJywgJ3B1cnBsZScsICd3aGl0ZScsICdibHVlJ107XHJcbiAgICAgICAgbGV0IGNvdW50ID0gdGhpcy5fZ2V0UmFuZG9tKDIwLCAzNSk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgeCA9IHRoaXMuX2dldFJhbmRvbSg1LCB0aGlzLmNhbnZhcy53aWR0aCAtIDUpO1xyXG4gICAgICAgICAgICBsZXQgeSA9IHRoaXMuX2dldFJhbmRvbSg1LCB0aGlzLmNhbnZhcy5oZWlnaHQgLSA1KTtcclxuICAgICAgICAgICAgbGV0IHMgPSBuZXcgU3Rhcih0aGlzLmNvbnRleHQsIG5ldyBWZWN0b3IyZCh4LCB5KSk7XHJcbiAgICAgICAgICAgIHMuc3ByaXRlID0gc3ByaXRlc1t0aGlzLl9nZXRSYW5kb20oMCwgc3ByaXRlcy5sZW5ndGggLSAxKV07XHJcbiAgICAgICAgICAgIHN0YXJzLnB1c2gocyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzdGFycztcclxuICAgIH1cclxuXHJcbiAgICBfZ2V0UmFuZG9tKG1pbiwgbWF4KSB7XHJcbiAgICAgICAgdmFyIHJhbmQgPSBtaW4gKyBNYXRoLnJhbmRvbSgpICogKG1heCArIDEgLSBtaW4pO1xyXG4gICAgICAgIHJhbmQgPSBNYXRoLmZsb29yKHJhbmQpO1xyXG4gICAgICAgIHJldHVybiByYW5kO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBCYWNrZ3JvdW5kLCBUZXh0LCBQbGF5ZXJMaXZlLCBXYXZlTGFiZWwgfTsiLCIvLyBVc2VyIGlucHV0IG9iamVjdFxyXG5cclxuaW1wb3J0IFNldHRpbmdzIGZyb20gJy4vc2V0dGluZ3MnO1xyXG5cclxuLy8gVXNlciBpbnB1dCBwcm92aWRlciBjbGFzc1xyXG5jbGFzcyBJbnB1dENvbnRyb2xsZXIge1xyXG4gICAgY29uc3RydWN0b3Iodmlldykge1xyXG4gICAgICAgIHRoaXMudmlldyA9IHZpZXc7XHJcbiAgICAgICAgdGhpcy5hY3Rpb24gPSAnaWRsZSc7XHJcbiAgICAgICAgdGhpcy5maXJlID0gZmFsc2U7IC8vIFBsYXllciBmaXJlIGNvbnRyb2wgc3RhdGUgQkFEXHJcbiAgICAgICAgdGhpcy5wYXVzZSA9IGZhbHNlOyAvLyBHYW1lIHBhdXNlIHN0YXRlIEJBRFxyXG4gICAgICAgIHRoaXMucmVzdGFydFJlYWR5ID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBrZXlEb3duKGUpIHtcclxuICAgICAgICBsZXQga2V5cyA9IFNldHRpbmdzLmlucHV0LmtleWJvYXJkLmFjdGlvbnM7XHJcbiAgICAgICAgbGV0IGsgPSBlLndoaWNoIHx8IGUua2V5Q29kZTtcclxuXHJcbiAgICAgICAgaWYgKGtleXNba10gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGlmIChrZXlzW2tdID09ICdmaXJlJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maXJlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChrZXlzW2tdID09ICdwYXVzZScpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGF1c2UgPT09IHRydWUgPyB0aGlzLnBhdXNlID0gZmFsc2UgOiB0aGlzLnBhdXNlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChrZXlzW2tdID09ICdyZXN0YXJ0Jykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXN0YXJ0UmVhZHkgPT09IHRydWUgPyB0aGlzLnJlc3RhcnRSZWFkeSA9IGZhbHNlIDogdGhpcy5yZXN0YXJ0UmVhZHkgPSB0cnVlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hY3Rpb24gPSBrZXlzW2tdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAga2V5VXAoZSkge1xyXG4gICAgICAgIGxldCBrZXlzID0gU2V0dGluZ3MuaW5wdXQua2V5Ym9hcmQuYWN0aW9ucztcclxuICAgICAgICB2YXIgayA9IGUud2hpY2ggfHwgZS5rZXlDb2RlO1xyXG5cclxuICAgICAgICBpZiAoa2V5c1trXSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgaWYgKGtleXNba10gPT0gJ2ZpcmUnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpcmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWN0aW9uID0gJ2lkbGUnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbGlzdGVuKCkge1xyXG4gICAgICAgIHRoaXMudmlldy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgdGhpcy5rZXlEb3duKGUpO1xyXG4gICAgICAgIH0uYmluZCh0aGlzKSwgZmFsc2UpO1xyXG4gICAgICAgIHRoaXMudmlldy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHRoaXMua2V5VXAoZSk7XHJcbiAgICAgICAgfS5iaW5kKHRoaXMpLCBmYWxzZSk7XHJcbiAgICB9O1xyXG59XHJcblxyXG4vLyBFeHBvcnQgY29udHJvbGxlclxyXG5leHBvcnQgZGVmYXVsdCBJbnB1dENvbnRyb2xsZXI7IiwiLy8gU2V0dGluZ3MgZm9yIGdhbWUgb2JqZWN0cyBhbmQgZW50ZXRpZXNcclxuaW1wb3J0IHBfc3ByaXRlIGZyb20gJy4uL2ltZy9wbGF5ZXIucG5nJztcclxuaW1wb3J0IGJsdWVfc2hlZXQgZnJvbSAnLi4vaW1nL2Jfc2hlZXRfODBfMjAucG5nJztcclxuaW1wb3J0IHB1cnBsZV9zaGVldCBmcm9tICcuLi9pbWcvcF9zaGVldF84MF8yMC5wbmcnO1xyXG5pbXBvcnQgcmVkX3NoZWV0IGZyb20gJy4uL2ltZy9yX3NoZWV0XzgwXzIwLnBuZyc7XHJcbmltcG9ydCBnZW5lcmFsX3NoZWV0IGZyb20gJy4uL2ltZy9nX3NoZWV0XzgwXzIwLnBuZyc7XHJcbmltcG9ydCBlbmVteV9leHAgZnJvbSAnLi4vaW1nL2VfZXhwX3NoZWV0LnBuZyc7XHJcbmltcG9ydCBwbGF5ZXJfZXhwIGZyb20gJy4uL2ltZy9wbGF5ZXJfZXhwbG9kZV9iaWcucG5nJztcclxuaW1wb3J0IHBsYXllcl9saXZlIGZyb20gJy4uL2ltZy9saXZlLnBuZyc7XHJcbmltcG9ydCB3X3Nwcml0ZSBmcm9tICcuLi9pbWcvd2F2ZV9zcHJpdGUucG5nJztcclxuXHJcbi8vIFNwcml0ZXNcclxubGV0IHBsYXllciA9IG5ldyBJbWFnZSgzMCwgMzApO1xyXG5wbGF5ZXIuc3JjID0gcF9zcHJpdGU7XHJcbmxldCBiX3NoZWV0ID0gbmV3IEltYWdlKCk7XHJcbmJfc2hlZXQuc3JjID0gYmx1ZV9zaGVldDtcclxubGV0IHBfc2hlZXQgPSBuZXcgSW1hZ2UoKTtcclxucF9zaGVldC5zcmMgPSBwdXJwbGVfc2hlZXQ7XHJcbmxldCByX3NoZWV0ID0gbmV3IEltYWdlKCk7XHJcbnJfc2hlZXQuc3JjID0gcmVkX3NoZWV0O1xyXG5sZXQgZ19zaGVldCA9IG5ldyBJbWFnZSgpO1xyXG5nX3NoZWV0LnNyYyA9IGdlbmVyYWxfc2hlZXQ7XHJcbmxldCBlbl9leHAgPSBuZXcgSW1hZ2UoKTtcclxuZW5fZXhwLnNyYyA9IGVuZW15X2V4cDtcclxubGV0IHBsX2V4cCA9IG5ldyBJbWFnZSgpO1xyXG5wbF9leHAuc3JjID0gcGxheWVyX2V4cFxyXG5sZXQgcGxfbGl2ZSA9IG5ldyBJbWFnZSgxNSwgMTUpO1xyXG5wbF9saXZlLnNyYyA9IHBsYXllcl9saXZlO1xyXG5sZXQgZW5fd2F2ZSA9IG5ldyBJbWFnZSgyMCwgMjApO1xyXG5lbl93YXZlLnNyYyA9IHdfc3ByaXRlO1xyXG5cclxuXHJcbmNvbnN0IFNFVFRJTkdTID0ge1xyXG4gICAgLy8gSW5wdXQgc2V0dGluZ3NcclxuICAgIGlucHV0OiB7XHJcbiAgICAgICAga2V5Ym9hcmQ6IHtcclxuICAgICAgICAgICAgYWN0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgLy8gS2V5Y29kZXMgb24gYWN0aW9uc1xyXG4gICAgICAgICAgICAgICAgJzM3JzogJ2xlZnQnLFxyXG4gICAgICAgICAgICAgICAgJzM5JzogJ3JpZ2h0JyxcclxuICAgICAgICAgICAgICAgICczOCc6ICdmaXJlJyxcclxuICAgICAgICAgICAgICAgICcyNyc6ICdwYXVzZScsXHJcbiAgICAgICAgICAgICAgICAnMzInOiAncmVzdGFydCdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvLyBHVUkgc2V0dGluZ3NcclxuICAgIGd1aToge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHtcclxuICAgICAgICAgICAgc3ByaXRlOiAnYmxhY2snXHJcbiAgICAgICAgfSxcclxuICAgICAgICBsaXZlOiB7XHJcbiAgICAgICAgICAgIHNwcml0ZTogcGxfbGl2ZSxcclxuICAgICAgICAgICAgd2lkdGg6IDE1LFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDE1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB3YXZlOiB7XHJcbiAgICAgICAgICAgIHNwcml0ZTogZW5fd2F2ZSxcclxuICAgICAgICAgICAgd2lkdGg6IDE1LFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDE1XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8vIFNvdW5kIHNldHRpbmdzXHJcbiAgICBhdWRpbzoge1xyXG4gICAgICAgIHNvdW5kczoge1xyXG4gICAgICAgICAgICBmaXJlOiAnLi9hdWRpby9yb2NrZXRfZmlyZS5tcDMnLFxyXG4gICAgICAgICAgICBlbmVteUV4cGxvZGU6ICcuL2F1ZGlvL2VuX2V4cGxvZGVfMS53YXYnLFxyXG4gICAgICAgICAgICBlbmVteUZpcmU6ICcuL2F1ZGlvL2VuX2ZpcmUubXAzJyxcclxuICAgICAgICAgICAgcGxheWVyRXhwbG9kZTogJy4vYXVkaW8vcGxheWVyX2V4cGxvZGUud2F2J1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvLyBTZXR0aW5nIGZvciBnYW1lIHNjZW5lXHJcbiAgICBzY2VuZToge1xyXG4gICAgICAgIGZvbnQ6ICdQaXhlbGxhcmknLFxyXG4gICAgICAgIG5leHRMaXZlOiA1MDAwLFxyXG4gICAgICAgIHRleHQ6IHtcclxuICAgICAgICAgICAgc2NvcmU6IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAnMTUwJyxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAncmVkJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBoaWdoU2NvcmU6IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAnMTUwJyxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAncHVycGxlJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB3YXZlOiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogJzUwJyxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAncmVkJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwYXVzZToge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6ICc1MCcsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJ3JlZCdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbGVhZGVyYm9hcmQ6IFtcclxuICAgICAgICAgICAgeyB1c2VyOiAnTEVIQScsIHNjb3JlOiA1MDAwIH0sXHJcbiAgICAgICAgICAgIHsgdXNlcjogJ1VTRVIxJywgc2NvcmU6IDQwMDAgfSxcclxuICAgICAgICAgICAgeyB1c2VyOiAnVVNFUjInLCBzY29yZTogMzAwMCB9LFxyXG4gICAgICAgICAgICB7IHVzZXI6ICdVU0VSMycsIHNjb3JlOiAyMDAwIH0sXHJcbiAgICAgICAgICAgIHsgdXNlcjogJ1VTRVI0Jywgc2NvcmU6IDEwMDAgfSxcclxuICAgICAgICAgICAgeyB1c2VyOiAnVVNFUjUnLCBzY29yZTogNzUwIH0sXHJcbiAgICAgICAgICAgIHsgdXNlcjogJ1VTRVI2Jywgc2NvcmU6IDUwMCB9LFxyXG4gICAgICAgICAgICB7IHVzZXI6ICdVU0VSNycsIHNjb3JlOiAyNTAgfSxcclxuICAgICAgICAgICAgeyB1c2VyOiAnVVNFUjgnLCBzY29yZTogMTAwIH0sXHJcbiAgICAgICAgICAgIHsgdXNlcjogJ1VTRVI5Jywgc2NvcmU6IDAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgYmFja2dyb3VuZDoge1xyXG4gICAgICAgICAgICBzcHJpdGU6ICdibGFjaycsXHJcbiAgICAgICAgICAgIHNpemU6IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA0MDAsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDYwMFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBwbGF5ZXI6IHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHtcclxuICAgICAgICAgICAgICAgIHg6IDE4NSxcclxuICAgICAgICAgICAgICAgIHk6IDUyMFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBsaXZlczogMyxcclxuICAgICAgICAgICAgbWF4TGl2ZXM6IDVcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVuZW15U3BhY2luZzogMTAsXHJcbiAgICAgICAgYmx1ZUVuZW1pZXM6IHtcclxuICAgICAgICAgICAgY291bnQ6IDEwLFxyXG4gICAgICAgICAgICBkaXZpc2lvbnM6IDMsXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICB4OiA1NSxcclxuICAgICAgICAgICAgICAgIHk6IDE2MCxcclxuICAgICAgICAgICAgICAgIHNwYWNpbmc6IDEwLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDMwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNwZWVkOiAxXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwdXJwbGVFbmVtaWVzOiB7XHJcbiAgICAgICAgICAgIGNvdW50OiA4LFxyXG4gICAgICAgICAgICBkaXZpc2lvbnM6IDEsXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICB4OiA4NSxcclxuICAgICAgICAgICAgICAgIHk6IDEzMCxcclxuICAgICAgICAgICAgICAgIHNwYWNpbmc6IDEwLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDMwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlZEVuZW1pZXM6IHtcclxuICAgICAgICAgICAgY291bnQ6IDYsXHJcbiAgICAgICAgICAgIGRpdmlzaW9uczogMSxcclxuICAgICAgICAgICAgcG9zaXRpb246IHtcclxuICAgICAgICAgICAgICAgIHg6IDExNSxcclxuICAgICAgICAgICAgICAgIHk6IDEwMCxcclxuICAgICAgICAgICAgICAgIHNwYWNpbmc6IDEwLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDMwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGdlbmVyYWxFbmVtaWVzOiB7XHJcbiAgICAgICAgICAgIGNvdW50OiAyLFxyXG4gICAgICAgICAgICBkaXZpc2lvbnM6IDEsXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICB4OiAxNDUsXHJcbiAgICAgICAgICAgICAgICB5OiA3NSxcclxuICAgICAgICAgICAgICAgIHNwYWNpbmc6IDYwLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDMwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgLy8gUGxheWVyIG9iamVjdCBzZXR0aW5nc1xyXG4gICAgcGxheWVyOiB7XHJcbiAgICAgICAgd2lkdGg6IDMwLFxyXG4gICAgICAgIGhlaWdodDogMzAsXHJcbiAgICAgICAgc3BlZWQ6IDIsXHJcbiAgICAgICAgcmVsb2FkVGltZTogMTAwMCxcclxuICAgICAgICBsaW1pdDoge1xyXG4gICAgICAgICAgICBsZWZ0OiAwLFxyXG4gICAgICAgICAgICByaWdodDogMzcwXHJcbiAgICAgICAgfSxcclxuICAgICAgICBsaW1pdHNYOiB7XHJcbiAgICAgICAgICAgIGxlZnQ6IDAsXHJcbiAgICAgICAgICAgIHJpZ2h0OiAzNzBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNwcml0ZTogcGxheWVyXHJcbiAgICB9LFxyXG4gICAgLy8gQmx1ZSBlbmVteSBvYmplY3Qgc2V0dGluZ3NcclxuICAgIGJsdWVFbmVteToge1xyXG4gICAgICAgIHdpZHRoOiAyMCxcclxuICAgICAgICBoZWlnaHQ6IDIwLFxyXG4gICAgICAgIHNwZWVkOiAxLFxyXG4gICAgICAgIHNwZWVkQXR0YWNrOiAzLFxyXG4gICAgICAgIHNob3RzOiAyLFxyXG4gICAgICAgIGxpbWl0c1g6IHtcclxuICAgICAgICAgICAgbGVmdDogMzAsXHJcbiAgICAgICAgICAgIHJpZ2h0OiA1MFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3ByaXRlOiBiX3NoZWV0LFxyXG4gICAgICAgIGNvc3Q6IDMwXHJcbiAgICB9LFxyXG4gICAgLy8gUHVycGxlIGVuZW15IG9iamVjdCBzZXR0aW5nc1xyXG4gICAgcHVycGxlRW5lbXk6IHtcclxuICAgICAgICB3aWR0aDogMjAsXHJcbiAgICAgICAgaGVpZ2h0OiAyMCxcclxuICAgICAgICBzcGVlZDogMSxcclxuICAgICAgICBzcGVlZEF0dGFjazogMy41LFxyXG4gICAgICAgIHNob3RzOiAzLFxyXG4gICAgICAgIGxpbWl0c1g6IHtcclxuICAgICAgICAgICAgbGVmdDogMzAsXHJcbiAgICAgICAgICAgIHJpZ2h0OiA1MFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3ByaXRlOiBwX3NoZWV0LFxyXG4gICAgICAgIGNvc3Q6IDQwXHJcbiAgICB9LFxyXG4gICAgLy8gUmVkIGVuZW15IG9iamVjdCBzZXR0aW5nc1xyXG4gICAgcmVkRW5lbXk6IHtcclxuICAgICAgICB3aWR0aDogMjAsXHJcbiAgICAgICAgaGVpZ2h0OiAyMCxcclxuICAgICAgICBzcGVlZDogMSxcclxuICAgICAgICBzcGVlZEF0dGFjazogMyxcclxuICAgICAgICBzaG90czogMixcclxuICAgICAgICBsaW1pdHNYOiB7XHJcbiAgICAgICAgICAgIGxlZnQ6IDMwLFxyXG4gICAgICAgICAgICByaWdodDogNTBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNwcml0ZTogcl9zaGVldCxcclxuICAgICAgICBjb3N0OiA1MFxyXG4gICAgfSxcclxuICAgIC8vIEdlbmVyYWwgZW5lbXkgb2JqZWN0IHNldHRpbmdzXHJcbiAgICBnZW5lcmFsRW5lbXk6IHtcclxuICAgICAgICB3aWR0aDogMjAsXHJcbiAgICAgICAgaGVpZ2h0OiAzMCxcclxuICAgICAgICBzcGVlZDogMSxcclxuICAgICAgICBzcGVlZEF0dGFjazogMyxcclxuICAgICAgICBzaG90czogNCxcclxuICAgICAgICBsaW1pdHNYOiB7XHJcbiAgICAgICAgICAgIGxlZnQ6IDMwLFxyXG4gICAgICAgICAgICByaWdodDogNTBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNwcml0ZTogZ19zaGVldCxcclxuICAgICAgICBjb3N0OiA2MFxyXG4gICAgfSxcclxuICAgIC8vIEJ1bGxldCBvYmplY3RcclxuICAgIGJ1bGxldDoge1xyXG4gICAgICAgIHdpZHRoOiAyLFxyXG4gICAgICAgIGhlaWdodDogMTAsXHJcbiAgICAgICAgc3BlZWQ6IDUsXHJcbiAgICAgICAgbGltaXRzWToge1xyXG4gICAgICAgICAgICB0b3A6IC0yMCxcclxuICAgICAgICAgICAgYm90dG9tOiA2MDBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNwcml0ZTogJ29yYW5nZSdcclxuICAgIH0sXHJcbiAgICAvLyBFbmVteSByb2NlayBwYmplY3RcclxuICAgIHJvY2tldDoge1xyXG4gICAgICAgIHdpZHRoOiAyLFxyXG4gICAgICAgIGhlaWdodDogNyxcclxuICAgICAgICBzcGVlZDogNCxcclxuICAgICAgICBsaW1pdHNZOiB7XHJcbiAgICAgICAgICAgIHRvcDogMCxcclxuICAgICAgICAgICAgYm90dG9tOiA3MDBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNwcml0ZTogJ3doaXRlJ1xyXG4gICAgfSxcclxuICAgIC8vIEVuZW15IGV4cGxvZGUgb2JqZWN0XHJcbiAgICBlbmVteUV4cGxvZGU6IHtcclxuICAgICAgICBzaXplOiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMCxcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3ByaXRlOiBlbl9leHAsXHJcbiAgICAgICAgZnJhbWVzOiA0XHJcbiAgICB9LFxyXG4gICAgLy8gUGxheWVyIGV4cGxvZGVcclxuICAgIHBsYXllckV4cGxvZGU6IHtcclxuICAgICAgICBzaXplOiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MCxcclxuICAgICAgICAgICAgaGVpZ2h0OiA1MFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3ByaXRlOiBwbF9leHAsXHJcbiAgICAgICAgZnJhbWVzOiA0XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIEV4cG9ydCBzZXR0aW5nc1xyXG5leHBvcnQgZGVmYXVsdCBTRVRUSU5HUzsiLCJpbXBvcnQgU2V0dGluZ3MgZnJvbSAnLi9zZXR0aW5ncyc7XHJcblxyXG5jb25zdCBTRVRUSU5HUyA9IFNldHRpbmdzLmF1ZGlvO1xyXG5cclxuY2xhc3MgQXVkaW9Db250cm9sbGVyIHtcclxuICAgIC8vIEF1ZGlvIG1hbmFnZXJcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuc291bmRzID0gU0VUVElOR1Muc291bmRzO1xyXG4gICAgfVxyXG5cclxuICAgIHBsYXkoc291bmQsIHZvbHVtZSkge1xyXG4gICAgICAgIGxldCBwID0gbmV3IEF1ZGlvKHNvdW5kKTtcclxuICAgICAgICBwLnBsYXkoKTtcclxuICAgICAgICBwLnZvbHVtZSA9IHZvbHVtZTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXVkaW9Db250cm9sbGVyOyIsIi8vIE1hdGhzLCB2ZWN0b3JzIG9ialxyXG5cclxuY2xhc3MgVmVjdG9yMmQge1xyXG4gICAgY29uc3RydWN0b3IoeCwgeSkge1xyXG4gICAgICAgIHRoaXMueCA9IHggfHwgMDtcclxuICAgICAgICB0aGlzLnkgPSB5IHx8IDA7XHJcbiAgICB9XHJcbiAgICBhZGQodmVjdG9yKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyZCh2ZWN0b3IueCArIHRoaXMueCwgdmVjdG9yLnkgKyB0aGlzLnkpO1xyXG4gICAgfVxyXG4gICAgc3Vic3RyYWN0KHZlY3Rvcikge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMmQodmVjdG9yLnggLSB0aGlzLngsIHZlY3Rvci55IC0gdGhpcy55KTtcclxuICAgIH1cclxuICAgIG11bHRpcGx5KHNjYWxhcikge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMmQodGhpcy54ICogc2NhbGFyLCB0aGlzLnkgKiBzY2FsYXIpO1xyXG4gICAgfVxyXG4gICAgZGl2aWRlKHNjYWxhcikge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMmQodGhpcy54IC8gc2NhbGFyLCB0aGlzLnkgLyBzY2FsYXIpO1xyXG4gICAgfVxyXG4gICAgZ2V0TWFnbml0dWRlKCkge1xyXG4gICAgICAgIHJldHVybiBNYXRoLmh5cG90KHRoaXMueCwgdGhpcy55KTtcclxuICAgIH1cclxuICAgIG5vcm1hbGl6ZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kaXZpZGUodGhpcy5nZXRNYWduaXR1ZGUoKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFZlY3RvcjJkOyIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9zdHlsZS5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9zdHlsZS5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3R5bGUuc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSJdLCJzb3VyY2VSb290IjoiIn0=