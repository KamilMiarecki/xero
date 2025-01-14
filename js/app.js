const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');




hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#3B3B3B';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});



AOS.init();



// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



document.getElementById('year').textContent = new Date().getFullYear();



// /*!
//  * JavaScript Cookie v2.1.2
//  * https://github.com/js-cookie/js-cookie
//  *
//  * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
//  * Released under the MIT license
//  */
// ;(function (factory) {
// 	if (typeof define === 'function' && define.amd) {
// 		define(factory);
// 	} else if (typeof exports === 'object') {
// 		module.exports = factory();
// 	} else {
// 		var OldCookies = window.Cookies;
// 		var api = window.Cookies = factory();
// 		api.noConflict = function () {
// 			window.Cookies = OldCookies;
// 			return api;
// 		};
// 	}
// }(function () {
// 	function extend () {
// 		var i = 0;
// 		var result = {};
// 		for (; i < arguments.length; i++) {
// 			var attributes = arguments[ i ];
// 			for (var key in attributes) {
// 				result[key] = attributes[key];
// 			}
// 		}
// 		return result;
// 	}

// 	function init (converter) {
// 		function api (key, value, attributes) {
// 			var result;
// 			if (typeof document === 'undefined') {
// 				return;
// 			}

// 			// Write

// 			if (arguments.length > 1) {
// 				attributes = extend({
// 					path: '/'
// 				}, api.defaults, attributes);

// 				if (typeof attributes.expires === 'number') {
// 					var expires = new Date();
// 					expires.setMilliseconds(expires.getMilliseconds() + attributes.expires);
// 					attributes.expires = expires;
// 				}

// 				try {
// 					result = JSON.stringify(value);
// 					if (/^[\{\[]/.test(result)) {
// 						value = result;
// 					}
// 				} catch (e) {}

// 				if (!converter.write) {
// 					value = encodeURIComponent(String(value))
// 						.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
// 				} else {
// 					value = converter.write(value, key);
// 				}

// 				key = encodeURIComponent(String(key));
// 				key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
// 				key = key.replace(/[\(\)]/g, escape);

// 				return (document.cookie = [
// 					key, '=', value,
// 					attributes.expires && '; expires=' + attributes.expires.toUTCString(), // use expires attribute, max-age is not supported by IE
// 					attributes.path    && '; path=' + attributes.path,
// 					attributes.domain  && '; domain=' + attributes.domain,
// 					attributes.secure ? '; secure' : ''
// 				].join(''));
// 			}

// 			// Read

// 			if (!key) {
// 				result = {};
// 			}

// 			// To prevent the for loop in the first place assign an empty array
// 			// in case there are no cookies at all. Also prevents odd result when
// 			// calling "get()"
// 			var cookies = document.cookie ? document.cookie.split('; ') : [];
// 			var rdecode = /(%[0-9A-Z]{2})+/g;
// 			var i = 0;

// 			for (; i < cookies.length; i++) {
// 				var parts = cookies[i].split('=');
// 				var cookie = parts.slice(1).join('=');

// 				if (cookie.charAt(0) === '"') {
// 					cookie = cookie.slice(1, -1);
// 				}

// 				try {
// 					var name = parts[0].replace(rdecode, decodeURIComponent);
// 					cookie = converter.read ?
// 						converter.read(cookie, name) : converter(cookie, name) ||
// 						cookie.replace(rdecode, decodeURIComponent);

// 					if (this.json) {
// 						try {
// 							cookie = JSON.parse(cookie);
// 						} catch (e) {}
// 					}

// 					if (key === name) {
// 						result = cookie;
// 						break;
// 					}

// 					if (!key) {
// 						result[name] = cookie;
// 					}
// 				} catch (e) {}
// 			}

// 			return result;
// 		}

// 		api.set = api;
// 		api.get = function (key) {
// 			return api(key);
// 		};
// 		api.getJSON = function () {
// 			return api.apply({
// 				json: true
// 			}, [].slice.call(arguments));
// 		};
// 		api.defaults = {};

// 		api.remove = function (key, attributes) {
// 			api(key, '', extend(attributes, {
// 				expires: -1
// 			}));
// 		};

// 		api.withConverter = init;

// 		return api;
// 	}

// 	return init(function () {});
// }));