! function(e, t) {
	if ("object" == typeof exports && "object" == typeof module) module.exports = t();
	else if ("function" == typeof define && define.amd) define([], t);
	else {
		var n = t();
		for (var r in n)("object" == typeof exports ? exports : e)[r] = n[r]
	}
}("undefined" != typeof self ? self : this, function() {
	return function(e) {
		var t = {};

		function n(r) {
			if (t[r]) return t[r].exports;
			var s = t[r] = {
				i: r,
				l: !1,
				exports: {}
			};
			return e[r].call(s.exports, s, s.exports, n), s.l = !0, s.exports
		}
		return n.m = e, n.c = t, n.d = function(e, t, r) {
			n.o(e, t) || Object.defineProperty(e, t, {
				configurable: !1,
				enumerable: !0,
				get: r
			})
		}, n.n = function(e) {
			var t = e && e.__esModule ? function() {
				return e["default"]
			} : function() {
				return e
			};
			return n.d(t, "a", t), t
		}, n.o = function(e, t) {
			return Object.prototype.hasOwnProperty.call(e, t)
		}, n.p = "/assets/", n(n.s = 424)
	}({
		176: function(e, t, n) {
			"use strict";

			function r(e) {
				return e.replace(/&amp;/gi, "&").replace(/&quot;/gi, '"').replace(/&lt;/gi, "<").replace(/&gt;/gi, ">").replace(/&#39;/gi, "'")
			}

			function s(e) {
				let t = 0,
					n = -1,
					r = e,
					s = "",
					i = "",
					u = "",
					o = !1,
					c = !1;
				do {
					if (t = e.indexOf(" "), (n = e.indexOf(" ", t + 1)) >= 0)
						for (;
							"'" != e.charAt(n - 1) && '"' != e.charAt(n - 1) && !((n = e.indexOf(" ", n + 1)) < 0););
					if (t >= 0 && n >= 0) s = e.substring(t + 1, n), r = e.substring(0, t + 1), e = e.substring(n);
					else {
						if (!(t >= 0 && n < 0)) {
							o ? u += ">" : u = e, c = !0;
							break
						}
						s = e.substring(t + 1, e.length - 1), r = e.substring(0, t + 1), e = ""
					}
					o = !0;
					let a = s.indexOf("=");
					if ("'" == s.charAt(a + 1) && -1 != s.indexOf("'")) {
						let e = s.indexOf("'"),
							t = s.lastIndexOf("'");
						i = s.substring(e + 1, t), s = s.substring(0, e + 1), s += (i = f(i)) + "'"
					}
					if ('"' == s.charAt(a + 1) && -1 != s.indexOf('"')) {
						let e = s.indexOf('"'),
							t = s.lastIndexOf('"');
						i = s.substring(e + 1, t), s = s.substring(0, e + 1), s += (i = f(i)) + '"'
					}
					u += r + s
				} while (!c);
				return u
			}

			function i(e) {
				return e.replace(/[&"'<>]/g, e => ({
					"&": "&amp;",
					'"': "&quot;",
					"'": "&#39;",
					"<": "&lt;",
					">": "&gt;"
				})[e])
			}

			function u(e, t, n) {
				switch (n) {
					case 1:
						return e + (t + "&amp;");
					case 2:
						return e + (t + "&quot;");
					case 3:
						return e + (t + "&#39;");
					case 4:
						return e + (t + "&lt;");
					case 5:
						return e + (t + "&gt;");
					default:
						return e
				}
			}

			function f(e) {
				let t, n = -1,
					r = "",
					s = "",
					f = 0,
					o = !0;
				for (; o;) t = 0, -1 != (n = e.indexOf("&", n + 1)) ? ("&amp;" == e.substring(n, n + 5) ? (t = 1, s = e.substring(0, n), e = e.substring(n + 5)) : "&quot;" == e.substring(n, n + 6) ? (t = 2, s = e.substring(0, n), e = e.substring(n + 6)) : "&#39;" == e.substring(n, n + 5) ? (t = 3, s = e.substring(0, n), e = e.substring(n + 5)) : "&lt;" == e.substring(n, n + 4) ? (t = 4, s = e.substring(0, n), e = e.substring(n + 4)) : "&gt;" == e.substring(n, n + 4) && (t = 5, s = e.substring(0, n), e = e.substring(n + 4)), 0 != t && (n = -1, r = u(r, s = i(s), t), f = 1)) : (r += e, o = !1);
				return 0 == f ? i(e) : r
			}

			function o(e) {
				let t = e.indexOf("<"),
					n = e.indexOf(">"),
					r = "",
					i = "",
					u = "",
					o = 0,
					c = !0;
				for (; c;) {
					if (!(t >= 0)) {
						f(e), c = !1;
						break
					}
					if (!(n >= 0)) {
						f(e), c = !1;
						break
					}
					do {
						t += o, r = e.substring(0, t), o = (i = e.substring(t, n + 1)).lastIndexOf("<")
					} while (0 != o);
					i = s(i), e = e.substring(n + 1), u += f(r) + i, t = e.indexOf("<"), n = 0;
					do {
						n = e.indexOf(">", n + 1)
					} while (n < t && -1 != n)
				}
				return "" != e && (u += f(e)), u
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t["unescapeHtml"] = r, t["escapeHTML"] = o, window.unescapeHtml = r, window.escapeHTML = o
		},
		424: function(e, t, n) {
			e.exports = n(176)
		}
	})
});
//# sourceMappingURL=escape.js.map