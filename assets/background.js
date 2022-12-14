! function(e, t) {
	if ("object" == typeof exports && "object" == typeof module) module.exports = t();
	else if ("function" == typeof define && define.amd) define([], t);
	else {
		var r = t();
		for (var n in r)("object" == typeof exports ? exports : e)[n] = r[n]
	}
}("undefined" != typeof self ? self : this, function() {
	return function(e) {
		var t = {};

		function r(n) {
			if (t[n]) return t[n].exports;
			var s = t[n] = {
				i: n,
				l: !1,
				exports: {}
			};
			return e[n].call(s.exports, s, s.exports, r), s.l = !0, s.exports
		}
		return r.m = e, r.c = t, r.d = function(e, t, n) {
			r.o(e, t) || Object.defineProperty(e, t, {
				configurable: !1,
				enumerable: !0,
				get: n
			})
		}, r.n = function(e) {
			var t = e && e.__esModule ? function() {
				return e["default"]
			} : function() {
				return e
			};
			return r.d(t, "a", t), t
		}, r.o = function(e, t) {
			return Object.prototype.hasOwnProperty.call(e, t)
		}, r.p = "/assets/", r(r.s = 418)
	}({
		100: function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.normalizeTestsInSuite = o, t.sanitizeProjectName = a;
			var n, s = (n = r(101)) && n.__esModule ? n : {
				default: n
			};

			function i(e, t, r) {
				return t in e ? Object.defineProperty(e, t, {
					value: r,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = r, e
			}

			function o({
				suite: e,
				tests: t
			}) {
				if (!e) return;
				let r = function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = null != arguments[t] ? arguments[t] : {},
							n = Object.keys(r);
						"function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
							return Object.getOwnPropertyDescriptor(r, e).enumerable
						}))), n.forEach(function(t) {
							i(e, t, r[t])
						})
					}
					return e
				}({}, e);
				return r.tests.forEach((e, n) => {
					r.tests[n] = t.find(t => t.id === e).name
				}), r
			}

			function a(e) {
				let t = e;
				return t.startsWith("http") ? s.default.parse(e).host : t.replace(/([^a-z0-9\u4e00-\u9fa5 ._#-]+)/gi, "")
			}
			e.exports = {
				normalizeTestsInSuite: o,
				sanitizeProjectName: a
			}
		},
		101: function(e, t, r) {
			"use strict";
			var n = r(102),
				s = r(103);

			function i() {
				this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null
			}
			t.parse = y, t.resolve = function(e, t) {
				return y(e, !1, !0).resolve(t)
			}, t.resolveObject = function(e, t) {
				return e ? y(e, !1, !0).resolveObject(t) : t
			}, t.format = function(e) {
				s.isString(e) && (e = y(e));
				return e instanceof i ? e.format() : i.prototype.format.call(e)
			}, t.Url = i;
			var o = /^([a-z0-9.+-]+:)/i,
				a = /:[0-9]*$/,
				l = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
				c = ["{", "}", "|", "\\", "^", "`"].concat(["<", ">", '"', "`", " ", "\r", "\n", "\t"]),
				m = ["'"].concat(c),
				d = ["%", "/", "?", ";", "#"].concat(m),
				p = ["/", "?", "#"],
				u = 255,
				h = /^[+a-z0-9A-Z_-]{0,63}$/,
				g = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
				f = {
					javascript: !0,
					"javascript:": !0
				},
				b = {
					javascript: !0,
					"javascript:": !0
				},
				w = {
					http: !0,
					https: !0,
					ftp: !0,
					gopher: !0,
					file: !0,
					"http:": !0,
					"https:": !0,
					"ftp:": !0,
					"gopher:": !0,
					"file:": !0
				},
				v = r(104);

			function y(e, t, r) {
				if (e && s.isObject(e) && e instanceof i) return e;
				var n = new i;
				return n.parse(e, t, r), n
			}
			i.prototype.parse = function(e, t, r) {
				if (!s.isString(e)) throw new TypeError("Parameter 'url' must be a string, not " + typeof e);
				var i = e.indexOf("?"),
					a = -1 !== i && i < e.indexOf("#") ? "?" : "#",
					c = e.split(a);
				c[0] = c[0].replace(/\\/g, "/");
				var y = e = c.join(a);
				if (y = y.trim(), !r && 1 === e.split("#").length) {
					var A = l.exec(y);
					if (A) return this.path = y, this.href = y, this.pathname = A[1], A[2] ? (this.search = A[2], this.query = t ? v.parse(this.search.substr(1)) : this.search.substr(1)) : t && (this.search = "", this.query = {}), this
				}
				var x = o.exec(y);
				if (x) {
					var T = (x = x[0]).toLowerCase();
					this.protocol = T, y = y.substr(x.length)
				}
				if (r || x || y.match(/^\/\/[^@\/]+@[^@\/]+/)) {
					var O = "//" === y.substr(0, 2);
					!O || x && b[x] || (y = y.substr(2), this.slashes = !0)
				}
				if (!b[x] && (O || x && !w[x])) {
					for (var k, C, E = -1, S = 0; S < p.length; S++) {
						-1 !== (j = y.indexOf(p[S])) && (-1 === E || j < E) && (E = j)
					} - 1 !== (C = -1 === E ? y.lastIndexOf("@") : y.lastIndexOf("@", E)) && (k = y.slice(0, C), y = y.slice(C + 1), this.auth = decodeURIComponent(k)), E = -1;
					for (S = 0; S < d.length; S++) {
						var j; - 1 !== (j = y.indexOf(d[S])) && (-1 === E || j < E) && (E = j)
					} - 1 === E && (E = y.length), this.host = y.slice(0, E), y = y.slice(E), this.parseHost(), this.hostname = this.hostname || "";
					var L = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
					if (!L)
						for (var P = this.hostname.split(/\./), R = (S = 0, P.length); S < R; S++) {
							var N = P[S];
							if (N && !N.match(h)) {
								for (var M = "", I = 0, _ = N.length; I < _; I++) N.charCodeAt(I) > 127 ? M += "x" : M += N[I];
								if (!M.match(h)) {
									var D = P.slice(0, S),
										U = P.slice(S + 1),
										q = N.match(g);
									q && (D.push(q[1]), U.unshift(q[2])), U.length && (y = "/" + U.join(".") + y), this.hostname = D.join(".");
									break
								}
							}
						}
					this.hostname.length > u ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), L || (this.hostname = n.toASCII(this.hostname));
					var z = this.port ? ":" + this.port : "",
						F = this.hostname || "";
					this.host = F + z, this.href += this.host, L && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), "/" !== y[0] && (y = "/" + y))
				}
				if (!f[T])
					for (S = 0, R = m.length; S < R; S++) {
						var $ = m[S];
						if (-1 !== y.indexOf($)) {
							var B = encodeURIComponent($);
							B === $ && (B = escape($)), y = y.split($).join(B)
						}
					}
				var W = y.indexOf("#"); - 1 !== W && (this.hash = y.substr(W), y = y.slice(0, W));
				var V = y.indexOf("?");
				if (-1 !== V ? (this.search = y.substr(V), this.query = y.substr(V + 1), t && (this.query = v.parse(this.query)), y = y.slice(0, V)) : t && (this.search = "", this.query = {}), y && (this.pathname = y), w[T] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
					z = this.pathname || "";
					var G = this.search || "";
					this.path = z + G
				}
				return this.href = this.format(), this
			}, i.prototype.format = function() {
				var e = this.auth || "";
				e && (e = (e = encodeURIComponent(e)).replace(/%3A/i, ":"), e += "@");
				var t = this.protocol || "",
					r = this.pathname || "",
					n = this.hash || "",
					i = !1,
					o = "";
				this.host ? i = e + this.host : this.hostname && (i = e + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]"), this.port && (i += ":" + this.port)), this.query && s.isObject(this.query) && Object.keys(this.query).length && (o = v.stringify(this.query));
				var a = this.search || o && "?" + o || "";
				return t && ":" !== t.substr(-1) && (t += ":"), this.slashes || (!t || w[t]) && !1 !== i ? (i = "//" + (i || ""), r && "/" !== r.charAt(0) && (r = "/" + r)) : i || (i = ""), n && "#" !== n.charAt(0) && (n = "#" + n), a && "?" !== a.charAt(0) && (a = "?" + a), t + i + (r = r.replace(/[?#]/g, function(e) {
					return encodeURIComponent(e)
				})) + (a = a.replace("#", "%23")) + n
			}, i.prototype.resolve = function(e) {
				return this.resolveObject(y(e, !1, !0)).format()
			}, i.prototype.resolveObject = function(e) {
				if (s.isString(e)) {
					var t = new i;
					t.parse(e, !1, !0), e = t
				}
				for (var r = new i, n = Object.keys(this), o = 0; o < n.length; o++) {
					var a = n[o];
					r[a] = this[a]
				}
				if (r.hash = e.hash, "" === e.href) return r.href = r.format(), r;
				if (e.slashes && !e.protocol) {
					for (var l = Object.keys(e), c = 0; c < l.length; c++) {
						var m = l[c];
						"protocol" !== m && (r[m] = e[m])
					}
					return w[r.protocol] && r.hostname && !r.pathname && (r.path = r.pathname = "/"), r.href = r.format(), r
				}
				if (e.protocol && e.protocol !== r.protocol) {
					if (!w[e.protocol]) {
						for (var d = Object.keys(e), p = 0; p < d.length; p++) {
							var u = d[p];
							r[u] = e[u]
						}
						return r.href = r.format(), r
					}
					if (r.protocol = e.protocol, e.host || b[e.protocol]) r.pathname = e.pathname;
					else {
						for (var h = (e.pathname || "").split("/"); h.length && !(e.host = h.shift()););
						e.host || (e.host = ""), e.hostname || (e.hostname = ""), "" !== h[0] && h.unshift(""), h.length < 2 && h.unshift(""), r.pathname = h.join("/")
					}
					if (r.search = e.search, r.query = e.query, r.host = e.host || "", r.auth = e.auth, r.hostname = e.hostname || e.host, r.port = e.port, r.pathname || r.search) {
						var g = r.pathname || "",
							f = r.search || "";
						r.path = g + f
					}
					return r.slashes = r.slashes || e.slashes, r.href = r.format(), r
				}
				var v = r.pathname && "/" === r.pathname.charAt(0),
					y = e.host || e.pathname && "/" === e.pathname.charAt(0),
					A = y || v || r.host && e.pathname,
					x = A,
					T = r.pathname && r.pathname.split("/") || [],
					O = (h = e.pathname && e.pathname.split("/") || [], r.protocol && !w[r.protocol]);
				if (O && (r.hostname = "", r.port = null, r.host && ("" === T[0] ? T[0] = r.host : T.unshift(r.host)), r.host = "", e.protocol && (e.hostname = null, e.port = null, e.host && ("" === h[0] ? h[0] = e.host : h.unshift(e.host)), e.host = null), A = A && ("" === h[0] || "" === T[0])), y) r.host = e.host || "" === e.host ? e.host : r.host, r.hostname = e.hostname || "" === e.hostname ? e.hostname : r.hostname, r.search = e.search, r.query = e.query, T = h;
				else if (h.length) T || (T = []), T.pop(), T = T.concat(h), r.search = e.search, r.query = e.query;
				else if (!s.isNullOrUndefined(e.search)) {
					if (O) r.hostname = r.host = T.shift(), (j = !!(r.host && r.host.indexOf("@") > 0) && r.host.split("@")) && (r.auth = j.shift(), r.host = r.hostname = j.shift());
					return r.search = e.search, r.query = e.query, s.isNull(r.pathname) && s.isNull(r.search) || (r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "")), r.href = r.format(), r
				}
				if (!T.length) return r.pathname = null, r.search ? r.path = "/" + r.search : r.path = null, r.href = r.format(), r;
				for (var k = T.slice(-1)[0], C = (r.host || e.host || T.length > 1) && ("." === k || ".." === k) || "" === k, E = 0, S = T.length; S >= 0; S--) "." === (k = T[S]) ? T.splice(S, 1) : ".." === k ? (T.splice(S, 1), E++) : E && (T.splice(S, 1), E--);
				if (!A && !x)
					for (; E--; E) T.unshift("..");
				!A || "" === T[0] || T[0] && "/" === T[0].charAt(0) || T.unshift(""), C && "/" !== T.join("/").substr(-1) && T.push("");
				var j, L = "" === T[0] || T[0] && "/" === T[0].charAt(0);
				O && (r.hostname = r.host = L ? "" : T.length ? T.shift() : "", (j = !!(r.host && r.host.indexOf("@") > 0) && r.host.split("@")) && (r.auth = j.shift(), r.host = r.hostname = j.shift()));
				return (A = A || r.host && T.length) && !L && T.unshift(""), T.length ? r.pathname = T.join("/") : (r.pathname = null, r.path = null), s.isNull(r.pathname) && s.isNull(r.search) || (r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "")), r.auth = e.auth || r.auth, r.slashes = r.slashes || e.slashes, r.href = r.format(), r
			}, i.prototype.parseHost = function() {
				var e = this.host,
					t = a.exec(e);
				t && (":" !== (t = t[0]) && (this.port = t.substr(1)), e = e.substr(0, e.length - t.length)), e && (this.hostname = e)
			}
		},
		102: function(e, t, r) {
			(function(e, n) {
				var s;
				! function(i) {
					var o = "object" == typeof t && t && !t.nodeType && t,
						a = "object" == typeof e && e && !e.nodeType && e,
						l = "object" == typeof n && n;
					l.global !== l && l.window !== l && l.self !== l || (i = l);
					var c, m, d = 2147483647,
						p = 36,
						u = 1,
						h = 26,
						g = 38,
						f = 700,
						b = 72,
						w = 128,
						v = "-",
						y = /^xn--/,
						A = /[^\x20-\x7E]/,
						x = /[\x2E\u3002\uFF0E\uFF61]/g,
						T = {
							overflow: "Overflow: input needs wider integers to process",
							"not-basic": "Illegal input >= 0x80 (not a basic code point)",
							"invalid-input": "Invalid input"
						},
						O = p - u,
						k = Math.floor,
						C = String.fromCharCode;

					function E(e) {
						throw new RangeError(T[e])
					}

					function S(e, t) {
						for (var r = e.length, n = []; r--;) n[r] = t(e[r]);
						return n
					}

					function j(e, t) {
						var r = e.split("@"),
							n = "";
						return r.length > 1 && (n = r[0] + "@", e = r[1]), n + S((e = e.replace(x, ".")).split("."), t).join(".")
					}

					function L(e) {
						for (var t, r, n = [], s = 0, i = e.length; s < i;)(t = e.charCodeAt(s++)) >= 55296 && t <= 56319 && s < i ? 56320 == (64512 & (r = e.charCodeAt(s++))) ? n.push(((1023 & t) << 10) + (1023 & r) + 65536) : (n.push(t), s--) : n.push(t);
						return n
					}

					function P(e) {
						return S(e, function(e) {
							var t = "";
							return e > 65535 && (t += C((e -= 65536) >>> 10 & 1023 | 55296), e = 56320 | 1023 & e), t += C(e)
						}).join("")
					}

					function R(e, t) {
						return e + 22 + 75 * (e < 26) - ((0 != t) << 5)
					}

					function N(e, t, r) {
						var n = 0;
						for (e = r ? k(e / f) : e >> 1, e += k(e / t); e > O * h >> 1; n += p) e = k(e / O);
						return k(n + (O + 1) * e / (e + g))
					}

					function M(e) {
						var t, r, n, s, i, o, a, l, c, m, g, f = [],
							y = e.length,
							A = 0,
							x = w,
							T = b;
						for ((r = e.lastIndexOf(v)) < 0 && (r = 0), n = 0; n < r; ++n) e.charCodeAt(n) >= 128 && E("not-basic"), f.push(e.charCodeAt(n));
						for (s = r > 0 ? r + 1 : 0; s < y;) {
							for (i = A, o = 1, a = p; s >= y && E("invalid-input"), ((l = (g = e.charCodeAt(s++)) - 48 < 10 ? g - 22 : g - 65 < 26 ? g - 65 : g - 97 < 26 ? g - 97 : p) >= p || l > k((d - A) / o)) && E("overflow"), A += l * o, !(l < (c = a <= T ? u : a >= T + h ? h : a - T)); a += p) o > k(d / (m = p - c)) && E("overflow"), o *= m;
							T = N(A - i, t = f.length + 1, 0 == i), k(A / t) > d - x && E("overflow"), x += k(A / t), A %= t, f.splice(A++, 0, x)
						}
						return P(f)
					}

					function I(e) {
						var t, r, n, s, i, o, a, l, c, m, g, f, y, A, x, T = [];
						for (f = (e = L(e)).length, t = w, r = 0, i = b, o = 0; o < f; ++o)(g = e[o]) < 128 && T.push(C(g));
						for (n = s = T.length, s && T.push(v); n < f;) {
							for (a = d, o = 0; o < f; ++o)(g = e[o]) >= t && g < a && (a = g);
							for (a - t > k((d - r) / (y = n + 1)) && E("overflow"), r += (a - t) * y, t = a, o = 0; o < f; ++o)
								if ((g = e[o]) < t && ++r > d && E("overflow"), g == t) {
									for (l = r, c = p; !(l < (m = c <= i ? u : c >= i + h ? h : c - i)); c += p) x = l - m, A = p - m, T.push(C(R(m + x % A, 0))), l = k(x / A);
									T.push(C(R(l, 0))), i = N(r, y, n == s), r = 0, ++n
								}++ r, ++t
						}
						return T.join("")
					}
					if (c = {
							version: "1.4.1",
							ucs2: {
								decode: L,
								encode: P
							},
							decode: M,
							encode: I,
							toASCII: function(e) {
								return j(e, function(e) {
									return A.test(e) ? "xn--" + I(e) : e
								})
							},
							toUnicode: function(e) {
								return j(e, function(e) {
									return y.test(e) ? M(e.slice(4).toLowerCase()) : e
								})
							}
						}, 1) void 0 === (s = function() {
						return c
					}.call(t, r, t, e)) || (e.exports = s);
					else if (o && a)
						if (e.exports == o) a.exports = c;
						else
							for (m in c) c.hasOwnProperty(m) && (o[m] = c[m]);
					else i.punycode = c
				}(this)
			}).call(t, r(58)(e), r(9))
		},
		103: function(e, t, r) {
			"use strict";
			e.exports = {
				isString: function(e) {
					return "string" == typeof e
				},
				isObject: function(e) {
					return "object" == typeof e && null !== e
				},
				isNull: function(e) {
					return null === e
				},
				isNullOrUndefined: function(e) {
					return null == e
				}
			}
		},
		104: function(e, t, r) {
			"use strict";
			t.decode = t.parse = r(105), t.encode = t.stringify = r(106)
		},
		105: function(e, t, r) {
			"use strict";

			function n(e, t) {
				return Object.prototype.hasOwnProperty.call(e, t)
			}
			e.exports = function(e, t, r, i) {
				t = t || "&", r = r || "=";
				var o = {};
				if ("string" != typeof e || 0 === e.length) return o;
				var a = /\+/g;
				e = e.split(t);
				var l = 1e3;
				i && "number" == typeof i.maxKeys && (l = i.maxKeys);
				var c = e.length;
				l > 0 && c > l && (c = l);
				for (var m = 0; m < c; ++m) {
					var d, p, u, h, g = e[m].replace(a, "%20"),
						f = g.indexOf(r);
					f >= 0 ? (d = g.substr(0, f), p = g.substr(f + 1)) : (d = g, p = ""), u = decodeURIComponent(d), h = decodeURIComponent(p), n(o, u) ? s(o[u]) ? o[u].push(h) : o[u] = [o[u], h] : o[u] = h
				}
				return o
			};
			var s = Array.isArray || function(e) {
				return "[object Array]" === Object.prototype.toString.call(e)
			}
		},
		106: function(e, t, r) {
			"use strict";
			var n = function(e) {
				switch (typeof e) {
					case "string":
						return e;
					case "boolean":
						return e ? "true" : "false";
					case "number":
						return isFinite(e) ? e : "";
					default:
						return ""
				}
			};
			e.exports = function(e, t, r, a) {
				return t = t || "&", r = r || "=", null === e && (e = void 0), "object" == typeof e ? i(o(e), function(o) {
					var a = encodeURIComponent(n(o)) + r;
					return s(e[o]) ? i(e[o], function(e) {
						return a + encodeURIComponent(n(e))
					}).join(t) : a + encodeURIComponent(n(e[o]))
				}).join(t) : a ? encodeURIComponent(n(a)) + r + encodeURIComponent(n(e)) : ""
			};
			var s = Array.isArray || function(e) {
				return "[object Array]" === Object.prototype.toString.call(e)
			};

			function i(e, t) {
				if (e.map) return e.map(t);
				for (var r = [], n = 0; n < e.length; n++) r.push(t(e[n], n));
				return r
			}
			var o = Object.keys || function(e) {
				var t = [];
				for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.push(r);
				return t
			}
		},
		15: function(e, t, r) {
			var n, s, i;
			! function(r, o) {
				if (1) s = [e], void 0 === (i = "function" == typeof(n = o) ? n.apply(t, s) : n) || (e.exports = i);
				else if (void 0 !== t) o(e);
				else {
					var a = {
						exports: {}
					};
					o(a), r.browser = a.exports
				}
			}(this, function(e) {
				"use strict";
				if ("undefined" == typeof browser || Object.getPrototypeOf(browser) !== Object.prototype) {
					const t = "The message port closed before a response was received.",
						r = "Returning a Promise is the preferred way to send a reply from an onMessage/onMessageExternal listener, as the sendResponse will be removed from the specs (See https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)",
						n = () => {
							const e = {
								alarms: {
									clear: {
										minArgs: 0,
										maxArgs: 1
									},
									clearAll: {
										minArgs: 0,
										maxArgs: 0
									},
									get: {
										minArgs: 0,
										maxArgs: 1
									},
									getAll: {
										minArgs: 0,
										maxArgs: 0
									}
								},
								bookmarks: {
									create: {
										minArgs: 1,
										maxArgs: 1
									},
									get: {
										minArgs: 1,
										maxArgs: 1
									},
									getChildren: {
										minArgs: 1,
										maxArgs: 1
									},
									getRecent: {
										minArgs: 1,
										maxArgs: 1
									},
									getSubTree: {
										minArgs: 1,
										maxArgs: 1
									},
									getTree: {
										minArgs: 0,
										maxArgs: 0
									},
									move: {
										minArgs: 2,
										maxArgs: 2
									},
									remove: {
										minArgs: 1,
										maxArgs: 1
									},
									removeTree: {
										minArgs: 1,
										maxArgs: 1
									},
									search: {
										minArgs: 1,
										maxArgs: 1
									},
									update: {
										minArgs: 2,
										maxArgs: 2
									}
								},
								browserAction: {
									disable: {
										minArgs: 0,
										maxArgs: 1,
										fallbackToNoCallback: !0
									},
									enable: {
										minArgs: 0,
										maxArgs: 1,
										fallbackToNoCallback: !0
									},
									getBadgeBackgroundColor: {
										minArgs: 1,
										maxArgs: 1
									},
									getBadgeText: {
										minArgs: 1,
										maxArgs: 1
									},
									getPopup: {
										minArgs: 1,
										maxArgs: 1
									},
									getTitle: {
										minArgs: 1,
										maxArgs: 1
									},
									openPopup: {
										minArgs: 0,
										maxArgs: 0
									},
									setBadgeBackgroundColor: {
										minArgs: 1,
										maxArgs: 1,
										fallbackToNoCallback: !0
									},
									setBadgeText: {
										minArgs: 1,
										maxArgs: 1,
										fallbackToNoCallback: !0
									},
									setIcon: {
										minArgs: 1,
										maxArgs: 1
									},
									setPopup: {
										minArgs: 1,
										maxArgs: 1,
										fallbackToNoCallback: !0
									},
									setTitle: {
										minArgs: 1,
										maxArgs: 1,
										fallbackToNoCallback: !0
									}
								},
								browsingData: {
									remove: {
										minArgs: 2,
										maxArgs: 2
									},
									removeCache: {
										minArgs: 1,
										maxArgs: 1
									},
									removeCookies: {
										minArgs: 1,
										maxArgs: 1
									},
									removeDownloads: {
										minArgs: 1,
										maxArgs: 1
									},
									removeFormData: {
										minArgs: 1,
										maxArgs: 1
									},
									removeHistory: {
										minArgs: 1,
										maxArgs: 1
									},
									removeLocalStorage: {
										minArgs: 1,
										maxArgs: 1
									},
									removePasswords: {
										minArgs: 1,
										maxArgs: 1
									},
									removePluginData: {
										minArgs: 1,
										maxArgs: 1
									},
									settings: {
										minArgs: 0,
										maxArgs: 0
									}
								},
								commands: {
									getAll: {
										minArgs: 0,
										maxArgs: 0
									}
								},
								contextMenus: {
									remove: {
										minArgs: 1,
										maxArgs: 1
									},
									removeAll: {
										minArgs: 0,
										maxArgs: 0
									},
									update: {
										minArgs: 2,
										maxArgs: 2
									}
								},
								cookies: {
									get: {
										minArgs: 1,
										maxArgs: 1
									},
									getAll: {
										minArgs: 1,
										maxArgs: 1
									},
									getAllCookieStores: {
										minArgs: 0,
										maxArgs: 0
									},
									remove: {
										minArgs: 1,
										maxArgs: 1
									},
									set: {
										minArgs: 1,
										maxArgs: 1
									}
								},
								devtools: {
									inspectedWindow: {
										eval: {
											minArgs: 1,
											maxArgs: 2
										}
									},
									panels: {
										create: {
											minArgs: 3,
											maxArgs: 3,
											singleCallbackArg: !0
										}
									}
								},
								downloads: {
									cancel: {
										minArgs: 1,
										maxArgs: 1
									},
									download: {
										minArgs: 1,
										maxArgs: 1
									},
									erase: {
										minArgs: 1,
										maxArgs: 1
									},
									getFileIcon: {
										minArgs: 1,
										maxArgs: 2
									},
									open: {
										minArgs: 1,
										maxArgs: 1,
										fallbackToNoCallback: !0
									},
									pause: {
										minArgs: 1,
										maxArgs: 1
									},
									removeFile: {
										minArgs: 1,
										maxArgs: 1
									},
									resume: {
										minArgs: 1,
										maxArgs: 1
									},
									search: {
										minArgs: 1,
										maxArgs: 1
									},
									show: {
										minArgs: 1,
										maxArgs: 1,
										fallbackToNoCallback: !0
									}
								},
								extension: {
									isAllowedFileSchemeAccess: {
										minArgs: 0,
										maxArgs: 0
									},
									isAllowedIncognitoAccess: {
										minArgs: 0,
										maxArgs: 0
									}
								},
								history: {
									addUrl: {
										minArgs: 1,
										maxArgs: 1
									},
									deleteAll: {
										minArgs: 0,
										maxArgs: 0
									},
									deleteRange: {
										minArgs: 1,
										maxArgs: 1
									},
									deleteUrl: {
										minArgs: 1,
										maxArgs: 1
									},
									getVisits: {
										minArgs: 1,
										maxArgs: 1
									},
									search: {
										minArgs: 1,
										maxArgs: 1
									}
								},
								i18n: {
									detectLanguage: {
										minArgs: 1,
										maxArgs: 1
									},
									getAcceptLanguages: {
										minArgs: 0,
										maxArgs: 0
									}
								},
								identity: {
									launchWebAuthFlow: {
										minArgs: 1,
										maxArgs: 1
									}
								},
								idle: {
									queryState: {
										minArgs: 1,
										maxArgs: 1
									}
								},
								management: {
									get: {
										minArgs: 1,
										maxArgs: 1
									},
									getAll: {
										minArgs: 0,
										maxArgs: 0
									},
									getSelf: {
										minArgs: 0,
										maxArgs: 0
									},
									setEnabled: {
										minArgs: 2,
										maxArgs: 2
									},
									uninstallSelf: {
										minArgs: 0,
										maxArgs: 1
									}
								},
								notifications: {
									clear: {
										minArgs: 1,
										maxArgs: 1
									},
									create: {
										minArgs: 1,
										maxArgs: 2
									},
									getAll: {
										minArgs: 0,
										maxArgs: 0
									},
									getPermissionLevel: {
										minArgs: 0,
										maxArgs: 0
									},
									update: {
										minArgs: 2,
										maxArgs: 2
									}
								},
								pageAction: {
									getPopup: {
										minArgs: 1,
										maxArgs: 1
									},
									getTitle: {
										minArgs: 1,
										maxArgs: 1
									},
									hide: {
										minArgs: 1,
										maxArgs: 1,
										fallbackToNoCallback: !0
									},
									setIcon: {
										minArgs: 1,
										maxArgs: 1
									},
									setPopup: {
										minArgs: 1,
										maxArgs: 1,
										fallbackToNoCallback: !0
									},
									setTitle: {
										minArgs: 1,
										maxArgs: 1,
										fallbackToNoCallback: !0
									},
									show: {
										minArgs: 1,
										maxArgs: 1,
										fallbackToNoCallback: !0
									}
								},
								permissions: {
									contains: {
										minArgs: 1,
										maxArgs: 1
									},
									getAll: {
										minArgs: 0,
										maxArgs: 0
									},
									remove: {
										minArgs: 1,
										maxArgs: 1
									},
									request: {
										minArgs: 1,
										maxArgs: 1
									}
								},
								runtime: {
									getBackgroundPage: {
										minArgs: 0,
										maxArgs: 0
									},
									getBrowserInfo: {
										minArgs: 0,
										maxArgs: 0
									},
									getPlatformInfo: {
										minArgs: 0,
										maxArgs: 0
									},
									openOptionsPage: {
										minArgs: 0,
										maxArgs: 0
									},
									requestUpdateCheck: {
										minArgs: 0,
										maxArgs: 0
									},
									sendMessage: {
										minArgs: 1,
										maxArgs: 3
									},
									sendNativeMessage: {
										minArgs: 2,
										maxArgs: 2
									},
									setUninstallURL: {
										minArgs: 1,
										maxArgs: 1
									}
								},
								sessions: {
									getDevices: {
										minArgs: 0,
										maxArgs: 1
									},
									getRecentlyClosed: {
										minArgs: 0,
										maxArgs: 1
									},
									restore: {
										minArgs: 0,
										maxArgs: 1
									}
								},
								storage: {
									local: {
										clear: {
											minArgs: 0,
											maxArgs: 0
										},
										get: {
											minArgs: 0,
											maxArgs: 1
										},
										getBytesInUse: {
											minArgs: 0,
											maxArgs: 1
										},
										remove: {
											minArgs: 1,
											maxArgs: 1
										},
										set: {
											minArgs: 1,
											maxArgs: 1
										}
									},
									managed: {
										get: {
											minArgs: 0,
											maxArgs: 1
										},
										getBytesInUse: {
											minArgs: 0,
											maxArgs: 1
										}
									},
									sync: {
										clear: {
											minArgs: 0,
											maxArgs: 0
										},
										get: {
											minArgs: 0,
											maxArgs: 1
										},
										getBytesInUse: {
											minArgs: 0,
											maxArgs: 1
										},
										remove: {
											minArgs: 1,
											maxArgs: 1
										},
										set: {
											minArgs: 1,
											maxArgs: 1
										}
									}
								},
								tabs: {
									captureVisibleTab: {
										minArgs: 0,
										maxArgs: 2
									},
									create: {
										minArgs: 1,
										maxArgs: 1
									},
									detectLanguage: {
										minArgs: 0,
										maxArgs: 1
									},
									discard: {
										minArgs: 0,
										maxArgs: 1
									},
									duplicate: {
										minArgs: 1,
										maxArgs: 1
									},
									executeScript: {
										minArgs: 1,
										maxArgs: 2
									},
									get: {
										minArgs: 1,
										maxArgs: 1
									},
									getCurrent: {
										minArgs: 0,
										maxArgs: 0
									},
									getZoom: {
										minArgs: 0,
										maxArgs: 1
									},
									getZoomSettings: {
										minArgs: 0,
										maxArgs: 1
									},
									highlight: {
										minArgs: 1,
										maxArgs: 1
									},
									insertCSS: {
										minArgs: 1,
										maxArgs: 2
									},
									move: {
										minArgs: 2,
										maxArgs: 2
									},
									query: {
										minArgs: 1,
										maxArgs: 1
									},
									reload: {
										minArgs: 0,
										maxArgs: 2
									},
									remove: {
										minArgs: 1,
										maxArgs: 1
									},
									removeCSS: {
										minArgs: 1,
										maxArgs: 2
									},
									sendMessage: {
										minArgs: 2,
										maxArgs: 3
									},
									setZoom: {
										minArgs: 1,
										maxArgs: 2
									},
									setZoomSettings: {
										minArgs: 1,
										maxArgs: 2
									},
									update: {
										minArgs: 1,
										maxArgs: 2
									}
								},
								topSites: {
									get: {
										minArgs: 0,
										maxArgs: 0
									}
								},
								webNavigation: {
									getAllFrames: {
										minArgs: 1,
										maxArgs: 1
									},
									getFrame: {
										minArgs: 1,
										maxArgs: 1
									}
								},
								webRequest: {
									handlerBehaviorChanged: {
										minArgs: 0,
										maxArgs: 0
									}
								},
								windows: {
									create: {
										minArgs: 0,
										maxArgs: 1
									},
									get: {
										minArgs: 1,
										maxArgs: 2
									},
									getAll: {
										minArgs: 0,
										maxArgs: 1
									},
									getCurrent: {
										minArgs: 0,
										maxArgs: 1
									},
									getLastFocused: {
										minArgs: 0,
										maxArgs: 1
									},
									remove: {
										minArgs: 1,
										maxArgs: 1
									},
									update: {
										minArgs: 2,
										maxArgs: 2
									}
								}
							};
							if (0 === Object.keys(e).length) throw new Error("api-metadata.json has not been included in browser-polyfill");
							const n = (e, t) => (...r) => {
									chrome.runtime.lastError ? e.reject(chrome.runtime.lastError) : t.singleCallbackArg || r.length <= 1 ? e.resolve(r[0]) : e.resolve(r)
								},
								s = e => 1 == e ? "argument" : "arguments",
								i = (e, t, r) => new Proxy(t, {
									apply: (t, n, s) => r.call(n, e, ...s)
								});
							let o = Function.call.bind(Object.prototype.hasOwnProperty);
							const a = (e, t = {}, r = {}) => {
									let l = Object.create(null),
										c = {
											has: (t, r) => r in e || r in l,
											get(c, m, d) {
												if (m in l) return l[m];
												if (!(m in e)) return;
												let p = e[m];
												if ("function" == typeof p)
													if ("function" == typeof t[m]) p = i(e, e[m], t[m]);
													else if (o(r, m)) {
													let t = ((e, t) => (function(r, ...i) {
														if (i.length < t.minArgs) throw new Error(`Expected at least ${t.minArgs} ${s(t.minArgs)} for ${e}(), got ${i.length}`);
														if (i.length > t.maxArgs) throw new Error(`Expected at most ${t.maxArgs} ${s(t.maxArgs)} for ${e}(), got ${i.length}`);
														return new Promise((s, o) => {
															if (t.fallbackToNoCallback) try {
																r[e](...i, n({
																	resolve: s,
																	reject: o
																}, t))
															} catch (n) {
																console.warn(`${e} API method doesn't seem to support the callback parameter, ` + "falling back to call it without a callback: ", n), r[e](...i), t.fallbackToNoCallback = !1, t.noCallback = !0, s()
															} else t.noCallback ? (r[e](...i), s()) : r[e](...i, n({
																resolve: s,
																reject: o
															}, t))
														})
													}))(m, r[m]);
													p = i(e, e[m], t)
												} else p = p.bind(e);
												else {
													if ("object" != typeof p || null === p || !o(t, m) && !o(r, m)) return Object.defineProperty(l, m, {
														configurable: !0,
														enumerable: !0,
														get: () => e[m],
														set(t) {
															e[m] = t
														}
													}), p;
													p = a(p, t[m], r[m])
												}
												return l[m] = p, p
											},
											set: (t, r, n, s) => (r in l ? l[r] = n : e[r] = n, !0),
											defineProperty: (e, t, r) => Reflect.defineProperty(l, t, r),
											deleteProperty: (e, t) => Reflect.deleteProperty(l, t)
										},
										m = Object.create(e);
									return new Proxy(m, c)
								},
								l = e => ({
									addListener(t, r, ...n) {
										t.addListener(e.get(r), ...n)
									},
									hasListener: (t, r) => t.hasListener(e.get(r)),
									removeListener(t, r) {
										t.removeListener(e.get(r))
									}
								});
							let c = !1;
							const m = new class extends WeakMap {
									constructor(e, t = void 0) {
										super(t), this.createItem = e
									}
									get(e) {
										return this.has(e) || this.set(e, this.createItem(e)), super.get(e)
									}
								}(e => "function" != typeof e ? e : function(t, n, s) {
									let i, o, a = !1,
										l = new Promise(e => {
											i = function(t) {
												c || (console.warn(r, (new Error).stack), c = !0), a = !0, e(t)
											}
										});
									try {
										o = e(t, n, i)
									} catch (e) {
										o = Promise.reject(e)
									}
									const m = !0 !== o && (e => e && "object" == typeof e && "function" == typeof e.then)(o);
									if (!0 !== o && !m && !a) return !1;
									const d = e => {
										e.then(e => {
											s(e)
										}, e => {
											let t;
											t = e && (e instanceof Error || "string" == typeof e.message) ? e.message : "An unexpected error occurred", s({
												__mozWebExtensionPolyfillReject__: !0,
												message: t
											})
										}).catch(e => {
											console.error("Failed to send onMessage rejected reply", e)
										})
									};
									return d(m ? o : l), !0
								}),
								d = (e, r, n, ...i) => {
									if (i.length < r.minArgs) throw new Error(`Expected at least ${r.minArgs} ${s(r.minArgs)} for ${e}(), got ${i.length}`);
									if (i.length > r.maxArgs) throw new Error(`Expected at most ${r.maxArgs} ${s(r.maxArgs)} for ${e}(), got ${i.length}`);
									return new Promise((e, r) => {
										const s = (({
											reject: e,
											resolve: r
										}, n) => {
											chrome.runtime.lastError ? chrome.runtime.lastError.message === t ? r() : e(chrome.runtime.lastError) : n && n.__mozWebExtensionPolyfillReject__ ? e(new Error(n.message)) : r(n)
										}).bind(null, {
											resolve: e,
											reject: r
										});
										i.push(s), n.sendMessage(...i)
									})
								},
								p = {
									runtime: {
										onMessage: l(m),
										onMessageExternal: l(m),
										sendMessage: d.bind(null, "sendMessage", {
											minArgs: 1,
											maxArgs: 3
										})
									},
									tabs: {
										sendMessage: d.bind(null, "sendMessage", {
											minArgs: 2,
											maxArgs: 3
										})
									}
								},
								u = {
									clear: {
										minArgs: 1,
										maxArgs: 1
									},
									get: {
										minArgs: 1,
										maxArgs: 1
									},
									set: {
										minArgs: 1,
										maxArgs: 1
									}
								};
							return e.privacy = {
								network: {
									networkPredictionEnabled: u,
									webRTCIPHandlingPolicy: u
								},
								services: {
									passwordSavingEnabled: u
								},
								websites: {
									hyperlinkAuditingEnabled: u,
									referrersEnabled: u
								}
							}, a(chrome, p, e)
						};
					e.exports = n()
				} else e.exports = browser
			})
		},
		36: function(e, t, r) {
			"use strict";
			e.exports = ((e, t) => e ? e.replace(/[`'"\\\n\r\u2028\u2029\u005c]/g, e => {
				switch (e) {
					case `"`:
					case `'`:
					case "`":
						return t ? t === e ? "\\" + e : e : "\\" + e;
					case "\n":
						return "\\n";
					case "\r":
						return "\\r";
					case "\u2028":
						return "\\u2028";
					case "\u2029":
						return "\\u2029";
					case "\\":
						return "\\\\";
					default:
						return e
				}
			}) : "")
		},
		418: function(e, t, r) {
			e.exports = r(419)
		},
		419: function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var n = r(15),
				s = r.n(n),
				i = r(42);

			function o(e, t, r) {
				return t in e ? Object.defineProperty(e, t, {
					value: r,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = r, e
			}
			let a, l = void 0,
				c = {},
				m = !0;

			function d(e) {
				let t = e.windowId;
				if (l) s.a.windows.update(l, {
					focused: !0
				}).catch(function() {
					d(e)
				});
				else if (m) return m = !1, setTimeout(function() {
						m = !0
					}, 1500),
					function() {
						let e = {
							height: 690,
							width: 550
						};
						return s.a.storage.local.get().then(n => ((r = n.size) && p(r.height) && p(r.width) && (e.height = n.size.height, e.width = n.size.width), (t = n.origin) && u(t.top) && u(t.left) && (e.top = n.origin.top, e.left = n.origin.left), s.a.windows.create(Object.assign({
							url: s.a.extension.getURL("index.html"),
							type: "popup"
						}, e)))).catch(t => (console.error(t), s.a.windows.create(Object.assign({
							url: s.a.extension.getURL("index.html"),
							type: "popup"
						}, e))));
						var t;
						var r
					}().then(function(e) {
						return new Promise(function(r, n) {
							let i = 0,
								o = setInterval(function() {
									i > 100 && (n("SideeX editor has no response"), clearInterval(o)), s.a.tabs.query({
										active: !0,
										windowId: e.id,
										status: "complete"
									}).then(function(n) {
										1 == n.length ? (c[t] = e.id, r(e), clearInterval(o)) : i++
									})
								}, 200)
						})
					}).then(function(e) {
						return l = e.id, s.a.tabs.sendMessage(e.tabs[0].id, {
							selfWindowId: e.id,
							commWindowId: t
						})
					}).catch(function(e) {
						console.log(e)
					})
			}

			function p(e) {
				return e && "Number" === e.constructor.name && e > 50
			}

			function u(e) {
				return e >= 0 && "Number" === e.constructor.name
			}
			window.master = c, window.openedWindowIds = [], i["b"] && d({
				windowId: 0
			}), s.a.browserAction.onClicked.addListener(d), s.a.windows.onRemoved.addListener(function(e) {
				let t = Object.keys(c);
				for (let r of t) c[r] === e && (delete c[r], 1 === t.length && s.a.contextMenus.removeAll());
				e === l && (l = void 0, Promise.all(window.openedWindowIds.map(e => s.a.windows.remove(e).catch(() => {}))).then(() => {
					window.openedWindowIds = []
				}))
			}), s.a.contextMenus.onClicked.addListener(function(e) {
				a.postMessage({
					cmd: e.menuItemId
				})
			}), s.a.runtime.onConnect.addListener(function(e) {
				a = e
			}), s.a.runtime.onMessage.addListener(function(e) {
				e.restart && e.controller && e.controller.id && (l = void 0, s.a.runtime.sendMessage({
					uri: "/private/close",
					verb: "post",
					payload: null
				}).then(() => {
					d({
						windowId: 0
					}).then(() => {
						var t = function(e) {
							for (var t = 1; t < arguments.length; t++) {
								var r = null != arguments[t] ? arguments[t] : {},
									n = Object.keys(r);
								"function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
									return Object.getOwnPropertyDescriptor(r, e).enumerable
								}))), n.forEach(function(t) {
									o(e, t, r[t])
								})
							}
							return e
						}({}, e);
						delete t.restart;
						const r = {
							uri: "/private/connect",
							verb: "post",
							payload: t
						};
						s.a.runtime.sendMessage(r).then(s.a.runtime.sendMessage(e.controller.id, {
							connected: !0
						})).catch(() => {
							s.a.runtime.sendMessage(e.controller.id, "Error Connecting to TAF Recorder")
						})
					})
				}))
			}), s.a.runtime.onMessageExternal.addListener((e, t, r) => {
				e.payload || (e.payload = {});
				let n = e.payload;
				return n.sender = t.id, e.uri.startsWith("/private/") ? r(!1) : (s.a.runtime.sendMessage(e).then(r).catch(() => "/control" == e.uri && "post" == e.verb ? d({
					windowId: 0
				}).then(() => {
					const e = {
						uri: "/private/connect",
						verb: "post",
						payload: {
							controller: {
								id: n.sender,
								name: n.name,
								version: n.version,
								commands: n.commands,
								dependencies: n.dependencies,
								jest: n.jest,
								exports: n.exports
							}
						}
					};
					s.a.runtime.sendMessage(e).then(r)
				}) : e.openSeleniumIDEIfClosed ? d({
					windowId: 0
				}).then(() => {
					r(!0)
				}) : r({
					error: "TAF Recorder is not active"
				})), !0)
			}), s.a.runtime.onInstalled.addListener(() => {
				1 && s.a.storage.local.set({
					updated: !0
				})
			})
		},
		42: function(e, t, r) {
			"use strict";
			var n = r(8);
			r.n(n);
			const s = n["environment"].isProduction;
			t["a"] = s;
			const i = n["environment"].isStaging;
			t["b"] = i;
			const o = n["environment"].isTest;
			t["c"] = o;
			const a = n["userAgent"].userAgent;
			t["d"] = a
		},
		52: function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.preprocessParameter = function(e, t, r, {
				ignoreEscaping: n
			}) {
				const o = function(e, {
					preprocessor: t,
					ignoreEscaping: r
				}) {
					return r ? e : t && "scriptPreprocessor" === t.name ? e.replace(/"/g, "'") : (0, s.default)(e)
				}(e, {
					preprocessor: t,
					ignoreEscaping: n
				});
				return t ? t(o, r) : i(o, r)
			}, t.defaultPreprocessor = i, t.scriptPreprocessor = function(e) {
				let t, r = e.replace(/^\s+/, "").replace(/\s+$/, ""),
					n = [];
				const s = {},
					i = [];
				let o = 0;
				if (/\$\{/.exec(r)) {
					const e = /\$\{(.*?)\}/g;
					let a = 0;
					for (; t = e.exec(r);) {
						const l = t[1];
						t.index - a > 0 && n.push(r.substring(a, t.index)), s.hasOwnProperty(l) || (s[l] = o, i.push(l), o++), n.push(`arguments[${s[l]}]`), a = e.lastIndex
					}
					return a < r.length && n.push(r.substring(a, r.length)), {
						script: n.join(""),
						argv: i
					}
				}
				return {
					script: r,
					argv: i
				}
			}, t.keysPreprocessor = function(e, t) {
				let r = [],
					n = e.match(/\$\{\w+\}/g);
				if (n) {
					let s = 0;
					for (; s < e.length;) {
						let o = n.shift(),
							a = e.indexOf(o, s);
						if (a > s && (r.push(e.substr(s, a - s)), s = a), o) {
							if (/^\$\{KEY_\w+\}/.test(o)) {
								let e = o.match(/\$\{KEY_(\w+)\}/)[1];
								r.push(`Key['${e}']`)
							} else r.push(i(o, t));
							s += o.length
						} else s < e.length && (r.push(e.substr(s, e.length)), s = e.length)
					}
				} else r.push(e);
				return r
			};
			var n, s = (n = r(36)) && n.__esModule ? n : {
				default: n
			};

			function i(e, t) {
				if (!e) return;
				const r = e.match(/\$\{(\w+)\}/);
				return r ? e.replace(r[0], t(r[1])) : e
			}
		},
		53: function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.default = i, t.renderCommands = o;
			var n, s = (n = r(54)) && n.__esModule ? n : {
				default: n
			};

			function i(e, t, {
				startingLevel: r = 0,
				newLineCount: n = 1,
				fullPayload: i = !1,
				originTracing: a,
				enableOriginTracing: l
			} = {}) {
				if (Array.isArray(t)) return o(t, {
					startingLevel: r,
					commandPrefixPadding: e,
					originTracing: a,
					enableOriginTracing: l
				}); {
					const o = (0, s.default)(t, {
						commandPrefixPadding: e,
						startingLevel: r
					});
					return i ? o : o.body && o.body.length ? o.body + "\n".repeat(n) : ""
				}
			}

			function o(e, {
				startingLevel: t,
				commandPrefixPadding: r,
				originTracing: n,
				enableOriginTracing: s
			} = {}) {
				let o = "",
					a = t;
				if (s) {
					const e = n.splice(0, 2);
					o += i(r, e.join("\n"), {
						startingLevel: a
					})
				}
				return e.forEach((e, t) => {
					if (e) {
						if (n && n[t]) {
							n[t].split("\n").forEach(e => {
								let t = i(r, e, {
									startingLevel: a
								});
								o += t
							})
						}
						const l = i(r, e, {
							startingLevel: a,
							fullPayload: !0,
							enableOriginTracing: s
						});
						a = l.endingLevel, l.skipEmitting || (o += l.body, o += "\n")
					}
				}), o
			}
		},
		54: function(e, t, r) {
			"use strict";

			function n({
				startingLevel: e,
				commandBlock: t
			} = {}) {
				let r = 0;
				return t.commands && t.commands.length > 0 && (r = t.commands[t.commands.length - 1].level || 0), e + r + (t.endingLevelAdjustment || 0)
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.default = function(e, {
				startingLevel: t,
				commandPrefixPadding: r
			} = {}) {
				if (void 0 === e) return {
					body: void 0
				};
				t || (t = 0);
				e.startingLevelAdjustment && (t += e.startingLevelAdjustment);
				t < 0 && (t = 0);
				return "object" == typeof e.commands ? e.skipEmitting ? {
					endingLevel: n({
						startingLevel: t,
						commandBlock: e
					}),
					skipEmitting: e.skipEmitting
				} : {
					body: e.commands.map(e => r.repeat(t + e.level) + e.statement).join("\n"),
					endingLevel: n({
						startingLevel: t,
						commandBlock: e
					})
				} : {
					body: e.split("\n").join("\n" + r.repeat(t)).replace(/^/, r.repeat(t)),
					endingLevel: t
				}
			}
		},
		55: function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.registerCommandEmitter = function({
				command: e,
				emitter: t,
				emitters: r
			} = {}) {
				if (r[e]) throw new Error("Unable to overwrite an existing command emitter");
				r[e] = t
			}, t.registerPreprocessors = function(e) {
				Object.keys(e).forEach(t => {
					switch (t) {
						case "sendKeys":
							e[t].valuePreprocessor = n.keysPreprocessor;
							break;
						case "runScript":
						case "executeScript":
						case "executeAsyncScript":
						case "if":
						case "elseIf":
						case "repeatIf":
						case "while":
							e[t].targetPreprocessor = n.scriptPreprocessor
					}
				})
			}, t.registerMethod = async function(e, t, {
				generateMethodDeclaration: r,
				hooks: n
			}) {
				let s = r(e);
				s = "object" == typeof s ? s.body : s, await n.declareMethods.isRegistered(s) || t.forEach(e => {
					n.declareMethods.register(() => e)
				})
			};
			var n = r(52)
		},
		56: function(e, t, r) {
			"use strict";

			function n(e) {
				return e.filter((t, r) => {
					return e.findIndex(e => e.name === t.name) === r
				})
			}

			function s(e, t) {
				let r = [];
				for (const n of e.commands)
					if ("run" === n.command) {
						const e = t.find(e => e.name === n.target);
						r.push({
							name: e.name,
							commands: e.commands
						}), r = r.concat(s(e, t))
					} return n(r)
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.deduplicateReusedTestMethods = n, t.findReusedTestMethods = s, t.findCommandThatOpensWindow = function e(t, r) {
				let n;
				for (const i of t.commands) {
					if (i.opensWindow) {
						n = i;
						break
					}
					if ("run" === i.command) {
						const n = s(t, r);
						for (const t in n) return e(n[t], n)
					}
				}
				return n
			}
		},
		57: function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.ArgTypes = void 0;
			const n = {
				alertText: {
					name: "alert text",
					description: "text to check"
				},
				answer: {
					name: "answer",
					description: "The answer to give in response to the prompt pop-up."
				},
				attributeLocator: {
					name: "attribute locator",
					description: `An element locator followed by an @ sign and then the name of \n    the attribute, e.g. "foo@bar".`
				},
				arrayVariableName: {
					name: "array variable name",
					description: "The name of a variable containing a JavaScript array."
				},
				conditionalExpression: {
					name: "conditional expression",
					description: `JavaScript expression that returns a boolean result for use \n    in control flow commands.`
				},
				coord: {
					name: "coord string",
					description: `Specifies the x,y position (e.g., - 10,20) of the mouse event \n    relative to the element found from a locator.`
				},
				expectedValue: {
					name: "expected value",
					description: `The result you expect a variable to contain (e.g., true, false, \n    or some other value).`
				},
				expression: {
					name: "expression",
					description: "The value you'd like to store."
				},
				formLocator: {
					name: "form locator",
					description: `An element locator for the form you want to submit.`
				},
				handle: {
					name: "window handle",
					description: `A handle representing a specific page (tab, or window).`
				},
				iteratorVariableName: {
					name: "iterator variable name",
					description: `The name of the variable used when iterating over a collection in a looping control flow command (e.g., for each).`
				},
				json: {
					name: "json",
					description: `A string representation of a JavaScript object.`
				},
				keySequence: {
					name: "key sequence",
					description: "A sequence of keys to type, can be used to send key strokes (e.g. ${KEY_ENTER})."
				},
				locator: {
					name: "locator",
					description: "An element locator."
				},
				locatorOfDragDestinationObject: {
					name: "locator of drag destination object",
					description: `The locator of an element whose location (e.g., the center-most \n    pixel within it) will be the point where locator of object to be dragged is \n    dropped.`
				},
				locatorOfObjectToBeDragged: {
					name: "locator of object to be dragged",
					description: "The locator of element to be dragged."
				},
				loopLimit: {
					name: "loop limit",
					description: `An optional argument that specifies the maximum number of times a looping control flow command can execute. This protects against infinite loops. The defaults value is set to 1000.`,
					isOptional: !0
				},
				message: {
					name: "message",
					description: "The message to print."
				},
				optionLocator: {
					name: "option",
					description: 'An option locator, typically just an option label (e.g. "John Smith").'
				},
				optionalFlag: {
					name: "optional flag",
					description: `Specify a configuration option to alter the command's behavior (e.g., --disable-assertions for the run command).`,
					isOptional: !0
				},
				pattern: {
					name: "text",
					description: `An exact string match. Support for pattern matching is in the \n    works. See https://github.com/SeleniumHQ/selenium-ide/issues/141 for details.`
				},
				region: {
					name: "region",
					description: `Specify a rectangle with coordinates and lengths (e.g., "x: 257, \n    y: 300, width: 462, height: 280").`
				},
				resolution: {
					name: "resolution",
					description: `Specify a window resolution using WidthxHeight. (e.g., 1280x800).`
				},
				script: {
					name: "script",
					description: "The JavaScript snippet to run."
				},
				selectLocator: {
					name: "select locator",
					description: "An element locator identifying a drop-down menu."
				},
				testCase: {
					name: "test case",
					description: "Test case name from the project."
				},
				text: {
					name: "text",
					description: "The text to use."
				},
				times: {
					name: "times",
					description: `The number of attempts a times control flow loop will execute \n    the commands within its block.`
				},
				url: {
					name: "url",
					description: "The URL to open (may be relative or absolute)."
				},
				value: {
					name: "value",
					description: "The value to input."
				},
				variableName: {
					name: "variable name",
					description: `The name of a variable without brackets.`
				},
				waitTime: {
					name: "wait time",
					description: "The amount of time to wait (in milliseconds)."
				},
				xpath: {
					name: "xpath",
					description: "The xpath expression to evaluate."
				}
			};
			t.ArgTypes = n
		},
		58: function(e, t) {
			e.exports = function(e) {
				return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
					enumerable: !0,
					get: function() {
						return e.l
					}
				}), Object.defineProperty(e, "id", {
					enumerable: !0,
					get: function() {
						return e.i
					}
				}), e.webpackPolyfill = 1), e
			}
		},
		75: function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.registerCommand = t.ArgTypes = t.TargetTypes = t.Commands = void 0;
			var n = r(94),
				s = r(57);
			const i = n.Commands;
			t.Commands = i;
			const o = n.TargetTypes;
			t.TargetTypes = o;
			const a = s.ArgTypes;
			t.ArgTypes = a;
			const l = n.registerCommand;
			t.registerCommand = l
		},
		8: function(e, t, r) {
			"use strict";
			var n = l(r(92)),
				s = l(r(36)),
				i = l(r(97)),
				o = l(r(99)),
				a = l(r(100));

			function l(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			e.exports = {
				codeExport: n.default,
				stringEscape: s.default,
				userAgent: i.default,
				environment: o.default,
				project: a.default
			}
		},
		9: function(e, t) {
			var r;
			r = function() {
				return this
			}();
			try {
				r = r || Function("return this")() || (0, eval)("this")
			} catch (e) {
				"object" == typeof window && (r = window)
			}
			e.exports = r
		},
		92: function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.default = void 0;
			var n = m(r(93)),
				s = m(r(54)),
				i = r(55),
				o = m(r(95)),
				a = m(r(56)),
				l = m(r(53)),
				c = m(r(96));

			function m(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function d(e) {
				for (var t = 1; t < arguments.length; t++) {
					var r = null != arguments[t] ? arguments[t] : {},
						n = Object.keys(r);
					"function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
						return Object.getOwnPropertyDescriptor(r, e).enumerable
					}))), n.forEach(function(t) {
						p(e, t, r[t])
					})
				}
				return e
			}

			function p(e, t, r) {
				return t in e ? Object.defineProperty(e, t, {
					value: r,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = r, e
			}
			var u = {
				emit: d({}, n.default),
				prettify: s.default,
				register: {
					preprocessors: i.registerPreprocessors,
					emitter: i.registerCommandEmitter
				},
				hook: o.default,
				find: d({}, a.default),
				render: l.default,
				parsers: c.default
			};
			t.default = u
		},
		93: function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.emitCommand = p, t.emitLocation = u, t.emitSelection = h, t.emitOriginTracing = b, t.default = void 0;
			var n = c(r(36)),
				s = r(52),
				i = c(r(53)),
				o = r(55),
				a = r(56),
				l = r(75);

			function c(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function m(e) {
				for (var t = 1; t < arguments.length; t++) {
					var r = null != arguments[t] ? arguments[t] : {},
						n = Object.keys(r);
					"function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
						return Object.getOwnPropertyDescriptor(r, e).enumerable
					}))), n.forEach(function(t) {
						d(e, t, r[t])
					})
				}
				return e
			}

			function d(e, t, r) {
				return t in e ? Object.defineProperty(e, t, {
					value: r,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = r, e
			}

			function p(e, t, {
				variableLookup: r,
				emitNewWindowHandling: n
			} = {}) {
				if (function(e) {
						const t = e.command;
						if (!t.startsWith("//")) {
							let r = l.Commands.find(e => e[0] === t);
							if (!r) throw new Error(`Invalid command '${t}'`);
							if (!!(r = r[1]).target != !!e.target && r.target && !r.target.isOptional) throw new Error(`Incomplete command '${e.command}'. Missing expected target argument.`);
							if (!!r.value != !!e.value && r.value && !r.value.isOptional) throw new Error(`Incomplete command '${t}'. Missing expected value argument.`)
						}
					}(e), t) {
					const i = "storeJson" === e.command;
					let o = t((0, s.preprocessParameter)(e.target, t.targetPreprocessor, r, {
						ignoreEscaping: i
					}), (0, s.preprocessParameter)(e.value, t.valuePreprocessor, r, {
						ignoreEscaping: i
					}));
					return e.opensWindow && (o = n(e, o)), o
				}
			}

			function u(e, t) {
				if (/^\/\//.test(e)) return t.xpath(e);
				const r = e.split("="),
					n = r.shift(),
					s = r.join("=");
				if (t[n]) return t[n](s);
				throw new Error(n ? `Unknown locator ${n}` : "Locator can't be empty")
			}

			function h(e, t) {
				if (!e) throw new Error(`Location can't be empty`);
				const [r, n] = e.split("=");
				if (t[r] && n) {
					return t[r](n)
				}
				if (n) throw new Error(`Unknown selection locator ${r}`);
				return t["label"](r)
			}
			async function g(e, t) {
				const r = e.map(e => t.emit(e));
				let n = [];
				return (await Promise.all(r)).forEach(e => {
					"string" == typeof e && e.includes("\n") ? e.split("\n").forEach(e => {
						n.push(e)
					}) : n.push(e)
				}), n
			}
			async function f(e, {
				commandPrefixPadding: t,
				generateMethodDeclaration: r,
				level: n,
				terminatingKeyword: s,
				emitter: i,
				render: o,
				overrideCommandEmitting: a
			} = {}) {
				const l = r(e.name);
				let c, m = l,
					d = s;
				return "object" == typeof l && (m = l.body, d = l.terminatingKeyword), a ? c = e.commands.map(e => `${t.repeat(e.level)+e.statement}`).join(`\n${t}`).replace(/^/, t) : "\n" === (c = o(await g(e.commands, i), {
					newLineCount: 0,
					startingLevel: n
				})).slice(-1) && (c = c.slice(0, -1)), [m, c, d]
			}

			function b(e, {
				commentPrefix: t
			}, r, n) {
				let s = [];
				if (r) {
					s.push(t + ` Test name: ${e.name}`);
					let r = t + " Step # | name | target | value";
					n || (r += " | comment"), s.push(r)
				}
				return e.commands.forEach((e, i) => {
					let o = "";
					r && (o = t + ` ${i+1} | ${e.command} | ${e.target} | ${e.value}`, n ? e.comment && (o += "\n") : o += ` | ${e.comment}`), n && e.comment && (o += t + ` ${e.comment}`), s.push(o)
				}), s
			}
			async function w(e, t, {
				testLevel: r,
				commandLevel: n,
				testDeclaration: s,
				terminatingKeyword: l,
				commandPrefixPadding: c,
				commentPrefix: m,
				hooks: d,
				emitter: p,
				generateMethodDeclaration: u,
				enableOriginTracing: h,
				enableDescriptionAsComment: w,
				project: v
			} = {}) {
				let y = {};
				r = r || 1, n = n || 2;
				const A = (0, a.findReusedTestMethods)(e, t),
					x = i.default.bind(this, c);
				if (p.extras)
					for (const n in p.extras) {
						let s = !0;
						if ("emitWaitForWindow" === n && (0, a.findCommandThatOpensWindow)(e, t) && (s = !1), !s) {
							const e = await p.extras[n](),
								t = await f(e, {
									emitter: p,
									commandPrefixPadding: c,
									generateMethodDeclaration: e.generateMethodDeclaration,
									level: r,
									render: x,
									terminatingKeyword: l,
									overrideCommandEmitting: !0
								});
							await (0, o.registerMethod)(e.name, t, {
								generateMethodDeclaration: e.generateMethodDeclaration,
								hooks: d
							})
						}
					}
				for (const e of A) {
					const t = await f(e, {
						emitter: p,
						commandPrefixPadding: c,
						generateMethodDeclaration: u,
						level: r,
						render: x,
						terminatingKeyword: l
					});
					await (0, o.registerMethod)(e.name, t, {
						generateMethodDeclaration: u,
						hooks: d
					})
				}
				const T = b(e, {
					commentPrefix: m
				}, h, w);
				return y.testDeclaration = x(s, {
					startingLevel: r
				}), y.inEachBegin = x(await d.inEachBegin.emit({
					test: e,
					tests: t,
					project: v,
					isOptional: !0
				}), {
					startingLevel: n
				}), y.commands = x(await g(e.commands, p).catch(t => {
					throw new Error(`Test '${e.name}' has a problem: ${t.message}`)
				}), {
					startingLevel: n,
					originTracing: T,
					enableOriginTracing: h
				}), y.inEachEnd = x(await d.inEachEnd.emit({
					test: e,
					tests: t,
					project: v,
					isOptional: !0
				}), {
					startingLevel: n
				}), y.testEnd = x(l, {
					startingLevel: r
				}), y
			}
			var v = {
				command: p,
				commands: g,
				location: u,
				method: f,
				selection: h,
				suite: async function(e, t, {
					suiteLevel: r,
					testLevel: n,
					suiteName: s,
					suiteDeclaration: o,
					terminatingKeyword: a,
					commandPrefixPadding: l,
					commentPrefix: c,
					hooks: m,
					suite: d,
					project: p,
					beforeEachOptions: u
				} = {}) {
					let h = {};
					n = n || 1, r = r || 0, d || (d = {
						name: s
					});
					const g = i.default.bind(this, l);
					return h.headerComment = c + " Generated by TAF Recorder\n", h.dependencies = g(await m.declareDependencies.emit({
						suite: d,
						tests: t,
						project: p
					})), h.suiteDeclaration = g(o, {
						startingLevel: r
					}), h.variables = g(await m.declareVariables.emit({
						suite: d,
						tests: t,
						project: p
					}), {
						startingLevel: n
					}), h.beforeAll = g(await m.beforeAll.emit({
						suite: d,
						tests: t,
						project: p,
						isOptional: !0
					}), {
						startingLevel: n
					}), h.beforeEach = g(await m.beforeEach.emit({
						suite: d,
						tests: t,
						project: p,
						startingSyntaxOptions: u
					}), {
						startingLevel: n
					}), h.afterEach = g(await m.afterEach.emit({
						suite: d,
						tests: t,
						project: p
					}), {
						startingLevel: n
					}), h.afterAll = g(await m.afterAll.emit({
						suite: d,
						tests: t,
						project: p,
						isOptional: !0
					}), {
						startingLevel: n
					}), h.methods = g(await m.declareMethods.emit({
						suite: d,
						tests: t,
						project: p,
						isOptional: !0
					}), {
						startingLevel: n
					}), h.tests = e, h.suiteEnd = g(a, {
						startingLevel: r
					}), m.declareMethods.clearRegister(), h
				},
				orderedSuite: function(e) {
					let t = "";
					if (t += e.headerComment, t += e.dependencies, t += e.suiteDeclaration, t += e.variables, t += e.beforeAll, t += e.beforeEach, t += e.afterEach, t += e.afterAll, t += e.methods, e.tests.testDeclaration) {
						const r = e.tests;
						t += r.testDeclaration, t += r.inEachBegin, t += r.commands, t += r.inEachEnd, t += r.testEnd
					} else
						for (const r in e.tests) {
							const n = e.tests[r];
							t += n.testDeclaration, t += n.inEachBegin, t += n.commands, t += n.inEachEnd, t += n.testEnd
						}
					return t += e.suiteEnd
				},
				test: w,
				text: n.default,
				testsFromSuite: async function(e, t, r, {
					enableOriginTracing: n,
					enableDescriptionAsComment: s,
					generateTestDeclaration: i,
					project: o
				}) {
					let a = {};
					for (const l of t.tests) {
						const t = e.find(e => e.name === l),
							c = i(t.name);
						a[t.name] = await w(t, e, m({}, r, {
							testDeclaration: c,
							enableOriginTracing: n,
							enableDescriptionAsComment: s,
							project: o
						}))
					}
					return a
				}
			};
			t.default = v
		},
		94: function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.registerCommand = function(e, t) {
				if (a.find(e => e[0] === t.command)) throw new Error("Unable to overwrite existing command");
				a.push([e, t])
			}, t.Commands = t.TargetTypes = void 0;
			var n = r(57);

			function s(e) {
				for (var t = 1; t < arguments.length; t++) {
					var r = null != arguments[t] ? arguments[t] : {},
						n = Object.keys(r);
					"function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
						return Object.getOwnPropertyDescriptor(r, e).enumerable
					}))), n.forEach(function(t) {
						i(e, t, r[t])
					})
				}
				return e
			}

			function i(e, t, r) {
				return t in e ? Object.defineProperty(e, t, {
					value: r,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = r, e
			}
			const o = {
				NONE: 0,
				LOCATOR: "locator",
				REGION: "region"
			};
			t.TargetTypes = o;
			const a = [
				["addSelection", {
					name: "add selection",
					description: `Add a selection to a set of options in a \n        multi-select element using an option locator.\n        Option locators provide different ways of specifying a select element (e.g., label=, value=, id=, index=)`,
					type: o.LOCATOR,
					target: n.ArgTypes.locator,
					value: n.ArgTypes.optionLocator
				}],
				["answerOnNextPrompt", {
					name: "answer on next prompt",
					description: `Affects the next alert prompt. This command will send the \n        specified answer string to it. If the alert is already present, then use \n        "webdriver answer on visible prompt" instead.`,
					target: n.ArgTypes.answer
				}],
				["assert", {
					name: "assert",
					description: `Check that a variable is an expected value. The variable's \n        value will be converted to a string for comparison. The test will stop if the assert fails.`,
					target: n.ArgTypes.variableName,
					value: n.ArgTypes.expectedValue
				}],
				["assertAlert", {
					name: "assert alert",
					description: `Confirm that an alert has been rendered with the provided text. The test will stop if the assert fails.`,
					target: n.ArgTypes.alertText
				}],
				["assertChecked", {
					name: "assert checked",
					type: o.LOCATOR,
					description: "Confirm that the target element has been checked. The test will stop if the assert fails.",
					target: n.ArgTypes.locator
				}],
				["assertConfirmation", {
					name: "assert confirmation",
					description: "Confirm that a confirmation has been rendered. The test will stop if the assert fails.",
					target: n.ArgTypes.text
				}],
				["assertEditable", {
					name: "assert editable",
					type: o.LOCATOR,
					description: "Confirm that the target element is editable. The test will stop if the assert fails.",
					target: n.ArgTypes.locator
				}],
				["assertElementPresent", {
					name: "assert element present",
					type: o.LOCATOR,
					description: `Confirm that the target element is present somewhere on the page. The test will stop if the assert fails.`,
					target: n.ArgTypes.locator
				}],
				["assertElementNotPresent", {
					name: "assert element not present",
					type: o.LOCATOR,
					description: `Confirm that the target element is not present anywhere on the page. The test will stop if the assert fails.`,
					target: n.ArgTypes.locator
				}],
				["assertNotChecked", {
					name: "assert not checked",
					type: o.LOCATOR,
					description: "Confirm that the target element has not been checked. The test will stop if the assert fails.",
					target: n.ArgTypes.locator
				}],
				["assertNotEditable", {
					name: "assert not editable",
					type: o.LOCATOR,
					description: "Confirm that the target element is not editable. The test will stop if the assert fails.",
					target: n.ArgTypes.locator
				}],
				["assertNotSelectedValue", {
					name: "assert not selected value",
					type: o.LOCATOR,
					description: `Confirm that the value attribute of the selected option \n        in a dropdown element does not contain the provided value. The test will stop if the assert fails.`,
					target: n.ArgTypes.selectLocator,
					value: n.ArgTypes.pattern
				}],
				["assertNotText", {
					name: "assert not text",
					type: o.LOCATOR,
					description: `Confirm that the text of an element does not contain the provided value.\n      The test will stop if the assert fails.`,
					target: n.ArgTypes.locator,
					value: n.ArgTypes.pattern
				}],
				["assertPrompt", {
					name: "assert prompt",
					description: "Confirm that a JavaScript prompt has been rendered. The test will stop if the assert fails.",
					target: n.ArgTypes.text
				}],
				["assertSelectedValue", {
					name: "assert selected value",
					type: o.LOCATOR,
					description: `Confirm that the value attribute of the selected option \n        in a dropdown element contains the provided value. The test will stop if the assert fails.`,
					target: n.ArgTypes.selectLocator,
					value: n.ArgTypes.pattern
				}],
				["assertSelectedLabel", {
					name: "assert selected label",
					type: o.LOCATOR,
					description: `Confirm that the label of the selected option in a dropdown \n        element contains the provided value. The test will stop if the assert fails.`,
					target: n.ArgTypes.selectLocator,
					value: n.ArgTypes.pattern
				}],
				["assertText", {
					name: "assert text",
					type: o.LOCATOR,
					description: `Confirm that the text of an element contains the provided value.\n      The test will stop if the assert fails.`,
					target: n.ArgTypes.locator,
					value: n.ArgTypes.pattern
				}],
				["assertTitle", {
					name: "assert title",
					description: `Confirm the title of the current page contains the provided text.\n      The test will stop if the assert fails.`,
					target: n.ArgTypes.pattern
				}],
				["assertValue", {
					name: "assert value",
					type: o.LOCATOR,
					description: `Confirm the (whitespace-trimmed) value of an input field \n        (or anything else with a value parameter). For checkbox/radio elements, \n        the value will be "on" or "off" depending on whether the element is \n        checked or not. The test will stop if the assert fails.`,
					target: n.ArgTypes.locator,
					value: n.ArgTypes.pattern
				}],
				["check", {
					name: "check",
					type: o.LOCATOR,
					description: "Check a toggle-button (checkbox/radio).",
					target: n.ArgTypes.locator
				}],
				["chooseCancelOnNextConfirmation", {
					name: "choose cancel on next confirmation",
					description: `Affects the next confirmation alert. This command will \n        cancel it. If the alert is already present, then use "webdriver choose \n        cancel on visible confirmation" instead.`
				}],
				["chooseCancelOnNextPrompt", {
					name: "choose cancel on next prompt",
					description: `Affects the next alert prompt. This command will cancel \n        it. If the alert is already present, then use "webdriver choose cancel \n        on visible prompt" instead.`
				}],
				["chooseOkOnNextConfirmation", {
					name: "choose ok on next confirmation",
					description: `Affects the next confirmation alert. This command will \n        accept it. If the alert is already present, then use "webdriver choose \n        ok on visible confirmation" instead.`
				}],
				["click", {
					name: "click",
					type: o.LOCATOR,
					description: `Clicks on a target element (e.g., a link, button, checkbox, or radio button).`,
					target: n.ArgTypes.locator
				}],
				["clickAt", {
					name: "click at",
					type: o.LOCATOR,
					description: `Clicks on a target element (e.g., a link, button, checkbox, \n        or radio button). The coordinates are relative to the target element \n        (e.g., 0,0 is the top left corner of the element) and are mostly used \n        to check effects that relay on them, for example the material ripple effect.`,
					target: n.ArgTypes.locator,
					value: s({
						isOptional: !0
					}, n.ArgTypes.coord)
				}],
				["close", {
					name: "close",
					description: `Closes the current window. There is no need to close the \n        initial window, IDE will re-use it; closing it may cause a performance \n        penalty on the test.`
				}],
				["debugger", {
					name: "debugger",
					description: "Breaks the execution and enters debugger"
				}],
				["do", {
					name: "do",
					description: `Create a loop that executes the proceeding commands at \n        least once. Terminate the branch with the repeat if command.`
				}],
				["doubleClick", {
					name: "double click",
					type: o.LOCATOR,
					description: `Double clicks on an element (e.g., a link, button, checkbox, or radio button).`,
					target: n.ArgTypes.locator
				}],
				["doubleClickAt", {
					name: "double click at",
					type: o.LOCATOR,
					description: `Double clicks on a target element (e.g., a link, button, \n        checkbox, or radio button). The coordinates are relative to the target \n        element (e.g., 0,0 is the top left corner of the element) and are mostly \n        used to check effects that relay on them, for example the material \n        ripple effect.`,
					target: n.ArgTypes.locator,
					value: n.ArgTypes.coord
				}],
				["dragAndDropToObject", {
					name: "drag and drop to object",
					type: o.LOCATOR,
					description: "Drags an element and drops it on another element.",
					target: n.ArgTypes.locatorOfObjectToBeDragged,
					value: n.ArgTypes.locatorOfDragDestinationObject
				}],
				["echo", {
					name: "echo",
					description: `Prints the specified message into the third table cell in \n        your Selenese tables. Useful for debugging.`,
					target: n.ArgTypes.message
				}],
				["editContent", {
					name: "edit content",
					type: o.LOCATOR,
					description: `Sets the value of a content editable element as if you typed in it.`,
					target: n.ArgTypes.locator,
					value: n.ArgTypes.value
				}],
				["else", {
					name: "else",
					description: `Part of an if block. Execute the commands in this branch \n        when an if and/or else if condition are not met. Terminate the branch \n        with the end command.`
				}],
				["elseIf", {
					name: "else if",
					description: `Part of an if block. Execute the commands in this branch \n        when an if condition has not been met. Terminate the branch with the \n        end command.`,
					target: n.ArgTypes.conditionalExpression
				}],
				["end", {
					name: "end",
					description: `Terminates a control flow block for if, while, and times.`
				}],
				["executeScript", {
					name: "execute script",
					description: `Executes a snippet of JavaScript in the context of the \n        currently selected frame or window. The script fragment will be executed \n        as the body of an anonymous function.  To store the return value, use \n        the 'return' keyword and provide a variable name in the value input field.`,
					target: n.ArgTypes.script,
					value: s({
						isOptional: !0
					}, n.ArgTypes.variableName)
				}],
				["executeAsyncScript", {
					name: "execute async script",
					description: `Executes an async snippet of JavaScript in the context of \n        the currently selected frame or window. The script fragment will be \n        executed as the body of an anonymous function and must return a Promise. \n        The Promise result will be saved on the variable if you use the 'return' \n        keyword.`,
					target: n.ArgTypes.script,
					value: s({
						isOptional: !0
					}, n.ArgTypes.variableName)
				}],
				["forEach", {
					name: "for each",
					description: `Create a loop that executes the proceeding commands for each item in a given collection.`,
					target: n.ArgTypes.arrayVariableName,
					value: n.ArgTypes.iteratorVariableName
				}],
				["if", {
					name: "if",
					type: o.LOCATOR,
					description: `Create a conditional branch in your test. Terminate the branch with the end command.`,
					target: n.ArgTypes.conditionalExpression
				}],
				["mouseDown", {
					name: "mouse down",
					type: o.LOCATOR,
					description: `Simulates a user pressing the left mouse button (without \n        releasing it yet).`,
					target: n.ArgTypes.locator
				}],
				["mouseDownAt", {
					name: "mouse down at",
					type: o.LOCATOR,
					description: `Simulates a user pressing the left mouse button (without \n        releasing it yet) at the specified location.`,
					target: n.ArgTypes.locator,
					value: n.ArgTypes.coord
				}],
				["mouseMoveAt", {
					name: "mouse move at",
					type: o.LOCATOR,
					description: `Simulates a user pressing the mouse button (without releasing \n        it yet) on the specified element.`,
					target: n.ArgTypes.locator,
					value: n.ArgTypes.coord
				}],
				["mouseOut", {
					name: "mouse out",
					type: o.LOCATOR,
					description: `Simulates a user moving the mouse pointer away from the specified element.`,
					target: n.ArgTypes.locator
				}],
				["mouseOver", {
					name: "mouse over",
					type: o.LOCATOR,
					description: `Simulates a user hovering a mouse over the specified element.`,
					target: n.ArgTypes.locator
				}],
				["mouseUp", {
					name: "mouse up",
					type: o.LOCATOR,
					description: `Simulates the event that occurs when the user releases the \n        mouse button (e.g., stops holding the button down).`,
					target: n.ArgTypes.locator
				}],
				["mouseUpAt", {
					name: "mouse up at",
					type: o.LOCATOR,
					description: `Simulates the event that occurs when the user releases the \n        mouse button (e.g., stops holding the button down) at the specified location.`,
					target: n.ArgTypes.locator,
					value: n.ArgTypes.coord
				}],
				["open", {
					name: "open",
					description: `Opens a URL and waits for the page to load before proceeding. \n        This accepts both relative and absolute URLs.`,
					target: n.ArgTypes.url
				}],
				["pause", {
					name: "pause",
					description: "Wait for the specified amount of time.",
					target: n.ArgTypes.waitTime
				}],
				["removeSelection", {
					name: "remove selection",
					type: o.LOCATOR,
					description: `Remove a selection from the set of selected options in a \n        multi-select element using an option locator.\n        Option locators provide different ways of specifying a select element (e.g., label=, value=, id=, index=)`,
					target: n.ArgTypes.locator,
					value: n.ArgTypes.optionLocator
				}],
				["repeatIf", {
					name: "repeat if",
					description: `Terminate a 'do' control flow branch conditionally. If \n        the result of the provided conditional expression is true, it starts \n        the do loop over.  Otherwise it ends the loop.`,
					target: n.ArgTypes.conditionalExpression,
					value: s({
						isOptional: !0
					}, n.ArgTypes.loopLimit)
				}],
				["run", {
					name: "run",
					description: "Runs a test case from the current project.",
					target: n.ArgTypes.testCase,
					value: s({
						isOptional: !0
					}, n.ArgTypes.optionalFlag)
				}],
				["runScript", {
					name: "run script",
					description: `Creates a new "script" tag in the body of the current \n        test window, and adds the specified text into the body of the command. \n        Beware that JS exceptions thrown in these script tags aren't managed \n        by Selenium, so you should probably wrap your script in try/catch blocks \n        if there is any chance that the script will throw an exception.`,
					target: n.ArgTypes.script
				}],
				["select", {
					name: "select",
					type: o.LOCATOR,
					description: `Select an element from a drop-down menu using an option \n        locator. Option locators provide different ways of specifying a select \n        element (e.g., label=, value=, id=, index=). If no option locator prefix \n        is provided, a match on the label will be attempted.`,
					target: n.ArgTypes.selectLocator,
					value: n.ArgTypes.optionLocator
				}],
				["selectFrame", {
					name: "select frame",
					type: o.LOCATOR,
					description: `Selects a frame within the current window. You can select a\n        frame by its 0-based index number (e.g., select the first frame with \n        "index=0", or the third frame with "index=2"). For nested frames you will\n        need to invoke this command multiple times (once for each frame in the \n        tree until you reach your desired frame). You can select the parent \n        frame with "relative=parent". To return to the top of the page use \n        "relative=top".`,
					target: n.ArgTypes.locator
				}],
				["selectWindow", {
					name: "select window",
					description: `Selects a popup window using a window locator. Once a \n        popup window has been selected, all commands will go to that window. \n        Window locators use handles to select windows.`,
					target: n.ArgTypes.handle
				}],
				["sendKeys", {
					name: "send keys",
					type: o.LOCATOR,
					description: `Simulates keystroke events on the specified element, as \n        though you typed the value key-by-key. This simulates a real user typing \n        every character in the specified string; it is also bound by the \n        limitations of a real user, like not being able to type into a invisible \n        or read only elements.  This is useful for dynamic UI widgets (like \n        auto-completing combo boxes) that require explicit key events. Unlike \n        the simple "type" command, which forces the specified value into the \n        page directly, this command will not replace the existing content.`,
					target: n.ArgTypes.locator,
					value: n.ArgTypes.keySequence
				}],
				["setSpeed", {
					name: "set speed",
					description: `Set execution speed (e.g., set the millisecond length of \n        a delay which will follow each Selenium operation). By default, there \n        is no such delay, e.g., the delay is 0 milliseconds. This setting is \n        global, and will affect all test runs, until changed.`,
					target: n.ArgTypes.waitTime
				}],
				["setWindowSize", {
					name: "set window size",
					description: "Set the browser's window size, including the browser's interface.",
					target: n.ArgTypes.resolution
				}],
				["store", {
					name: "store",
					description: "Save a target string as a variable for easy re-use.",
					target: n.ArgTypes.text,
					value: n.ArgTypes.variableName
				}],
				["storeAttribute", {
					name: "store attribute",
					description: `Gets the value of an element attribute. The value of the \n        attribute may differ across browsers (this is the case for the "style" \n        attribute, for example).`,
					target: n.ArgTypes.attributeLocator,
					value: n.ArgTypes.variableName
				}],
				["storeJson", {
					name: "store json",
					description: ``,
					target: n.ArgTypes.json,
					value: n.ArgTypes.variableName
				}],
				["storeText", {
					name: "store text",
					type: o.LOCATOR,
					description: `Gets the text of an element and stores it for later use. \n        This works for any element that contains text.`,
					target: n.ArgTypes.locator,
					value: n.ArgTypes.variableName
				}],
				["storeTitle", {
					name: "store title",
					description: "Gets the title of the current page.",
					target: n.ArgTypes.text,
					value: n.ArgTypes.variableName
				}],
				["storeValue", {
					name: "store value",
					type: o.LOCATOR,
					description: `Gets the value of element and stores it for later use. \n        This works for any input type element.`,
					target: n.ArgTypes.locator,
					value: n.ArgTypes.variableName
				}],
				["storeWindowHandle", {
					name: "store window handle",
					description: "Gets the handle of the current page.",
					target: n.ArgTypes.handle
				}],
				["storeXpathCount", {
					name: "store xpath count",
					description: `Gets the number of nodes that match the specified xpath \n        (e.g. "//table" would give the number of tables).`,
					target: n.ArgTypes.xpath,
					value: n.ArgTypes.variableName
				}],
				["submit", {
					name: "submit",
					type: o.LOCATOR,
					description: `Submit the specified form. This is particularly useful for \n        forms without submit buttons, e.g. single-input "Search" forms.`,
					target: n.ArgTypes.formLocator
				}],
				["times", {
					name: "times",
					description: `Create a loop that executes the proceeding commands n number of times.`,
					target: n.ArgTypes.times,
					value: s({
						isOptional: !0
					}, n.ArgTypes.loopLimit)
				}],
				["type", {
					name: "type",
					type: o.LOCATOR,
					description: `Sets the value of an input field, as though you typed it \n        in. Can also be used to set the value of combo boxes, check boxes, etc. \n        In these cases, value should be the value of the option selected, not \n        the visible text.  Chrome only: If a file path is given it will be \n        uploaded to the input (for type=file), NOTE: XPath locators are not \n        supported.`,
					target: n.ArgTypes.locator,
					value: n.ArgTypes.value
				}],
				["uncheck", {
					name: "uncheck",
					type: o.LOCATOR,
					description: "Uncheck a toggle-button (checkbox/radio).",
					target: n.ArgTypes.locator
				}],
				["verify", {
					name: "verify",
					description: `Soft assert that a variable is an expected value. The \n        variable's value will be converted to a string for comparison.\n        The test will continue even if the verify fails.`,
					target: n.ArgTypes.variableName,
					value: n.ArgTypes.expectedValue
				}],
				["verifyChecked", {
					name: "verify checked",
					type: o.LOCATOR,
					description: `Soft assert that a toggle-button (checkbox/radio) has been checked.\n      The test will continue even if the verify fails.`,
					target: n.ArgTypes.locator
				}],
				["verifyEditable", {
					name: "verify editable",
					type: o.LOCATOR,
					description: `Soft assert whether the specified input element is \n        editable (e.g., hasn't been disabled). The test will continue even if the verify fails.`,
					target: n.ArgTypes.locator
				}],
				["verifyElementPresent", {
					name: "verify element present",
					type: o.LOCATOR,
					description: `Soft assert that the specified element is somewhere on the page.\n      The test will continue even if the verify fails.`,
					target: n.ArgTypes.locator
				}],
				["verifyElementNotPresent", {
					name: "verify element not present",
					type: o.LOCATOR,
					description: `Soft assert that the specified element is not somewhere on the page.\n      The test will continue even if the verify fails.`,
					target: n.ArgTypes.locator
				}],
				["verifyNotChecked", {
					name: "verify not checked",
					type: o.LOCATOR,
					description: `Soft assert that a toggle-button (checkbox/radio) has not been checked.\n      The test will continue even if the verify fails.`,
					target: n.ArgTypes.locator
				}],
				["verifyNotEditable", {
					name: "verify not editable",
					type: o.LOCATOR,
					description: `Soft assert whether the specified input element is not \n        editable (e.g., hasn't been disabled). The test will continue even if the verify fails.`,
					target: n.ArgTypes.locator
				}],
				["verifyNotSelectedValue", {
					name: "verify not selected value",
					description: `Soft assert that the expected element has not been chosen \n        in a select menu by its option attribute. The test will continue even if the verify fails.`,
					target: n.ArgTypes.selectLocator,
					value: n.ArgTypes.optionLocator
				}],
				["verifyNotText", {
					name: "verify not text",
					type: o.LOCATOR,
					description: "Soft assert the text of an element is not present. The test will continue even if the verify fails.",
					target: n.ArgTypes.locator,
					value: n.ArgTypes.text
				}],
				["verifySelectedLabel", {
					name: "verify selected label",
					type: o.LOCATOR,
					description: `Soft assert the visible text for a selected option in the \n        specified select element. The test will continue even if the verify fails.`,
					target: n.ArgTypes.selectLocator,
					value: n.ArgTypes.pattern
				}],
				["verifySelectedValue", {
					name: "verify selected value",
					type: o.LOCATOR,
					description: `Soft assert that the expected element has been chosen in \n        a select menu by its option attribute. The test will continue even if the verify fails.`,
					target: n.ArgTypes.selectLocator,
					value: n.ArgTypes.optionLocator
				}],
				["verifyText", {
					name: "verify text",
					type: o.LOCATOR,
					description: "Soft assert the text of an element is present. The test will continue even if the verify fails.",
					target: n.ArgTypes.locator,
					value: n.ArgTypes.text
				}],
				["verifyTitle", {
					name: "verify title",
					description: "Soft assert the title of the current page contains the provided text. The test will continue even if the verify fails.",
					target: n.ArgTypes.text
				}],
				["verifyValue", {
					name: "verify value",
					type: o.LOCATOR,
					description: `Soft assert the (whitespace-trimmed) value of an input \n        field (or anything else with a value parameter). For checkbox/radio \n        elements, the value will be "on" or "off" depending on whether the \n        element is checked or not. The test will continue even if the verify fails.`,
					target: n.ArgTypes.locator,
					value: n.ArgTypes.pattern
				}],
				["waitForElementEditable", {
					name: "wait for element editable",
					type: o.LOCATOR,
					description: "Wait for an element to be editable.",
					target: n.ArgTypes.locator,
					value: n.ArgTypes.waitTime
				}],
				["waitForElementNotEditable", {
					name: "wait for element not editable",
					type: o.LOCATOR,
					description: "Wait for an element to not be editable.",
					target: n.ArgTypes.locator,
					value: n.ArgTypes.waitTime
				}],
				["waitForElementNotPresent", {
					name: "wait for element not present",
					type: o.LOCATOR,
					description: "Wait for a target element to not be present on the page.",
					target: n.ArgTypes.locator,
					value: n.ArgTypes.waitTime
				}],
				["waitForElementNotVisible", {
					name: "wait for element not visible",
					type: o.LOCATOR,
					description: "Wait for a target element to not be visible on the page.",
					target: n.ArgTypes.locator,
					value: n.ArgTypes.waitTime
				}],
				["waitForElementPresent", {
					name: "wait for element present",
					type: o.LOCATOR,
					description: "Wait for a target element to be present on the page.",
					target: n.ArgTypes.locator,
					value: n.ArgTypes.waitTime
				}],
				["waitForElementVisible", {
					name: "wait for element visible",
					type: o.LOCATOR,
					description: "Wait for a target element to be visible on the page.",
					target: n.ArgTypes.locator,
					value: n.ArgTypes.waitTime
				}],
				["waitForText", {
					name: "wait for text",
					type: o.LOCATOR,
					description: "Wait for the text of an element to be equal to the value.",
					target: n.ArgTypes.locator,
					value: n.ArgTypes.text
				}],
				["webdriverAnswerOnVisiblePrompt", {
					name: "webdriver answer on visible prompt",
					description: `Affects a currently showing alert prompt. This command \n        instructs Selenium to provide the specified answer to it. If the alert \n        has not appeared yet then use "answer on next prompt" instead.`,
					target: n.ArgTypes.answer
				}],
				["webdriverChooseCancelOnVisibleConfirmation", {
					name: "webdriver choose cancel on visible confirmation",
					description: `Affects a currently showing confirmation alert. This \n        command instructs Selenium to cancel it. If the alert has not appeared \n        yet then use "choose cancel on next confirmation" instead.`
				}],
				["webdriverChooseCancelOnVisiblePrompt", {
					name: "webdriver choose cancel on visible prompt",
					description: `Affects a currently showing alert prompt. This command \n        instructs Selenium to cancel it. If the alert has not appeared yet \n        then use "choose cancel on next prompt" instead.`
				}],
				["webdriverChooseOkOnVisibleConfirmation", {
					name: "webdriver choose ok on visible confirmation",
					description: `Affects a currently showing confirmation alert. This \n        command instructs Selenium to accept it. If the alert has not appeared \n        yet then use "choose ok on next confirmation" instead.`
				}],
				["while", {
					name: "while",
					description: `Create a loop that executes the proceeding commands \n        repeatedly for as long as the provided conditional expression is true.`,
					target: n.ArgTypes.conditionalExpression,
					value: s({
						isOptional: !0
					}, n.ArgTypes.loopLimit)
				}]
			];
			t.Commands = a
		},
		95: function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.clearHooks = function(e) {
				Object.keys(e).forEach(t => {
					e[t].clearRegister()
				})
			}, t.default = void 0;
			t.default = class {
				constructor({
					startingSyntax: e,
					endingSyntax: t,
					registrationLevel: r
				} = {}) {
					this.startingSyntax = e, this.endingSyntax = t, this.registrationLevel = r, this.clearRegister = this.clearRegister.bind(this), this.emit = this.emit.bind(this), this.register = this.register.bind(this), this.isRegistered = this.isRegistered.bind(this), this.clearRegister()
				}
				clearRegister() {
					this.emitters = []
				}
				async emit({
					isOptional: e,
					test: t,
					suite: r,
					tests: n,
					project: s,
					startingSyntaxOptions: i
				} = {
					isOptional: !1
				}) {
					const o = [];
					let a = 0;
					if (this.startingSyntax) {
						const e = "function" == typeof this.startingSyntax ? this.startingSyntax(i) : this.startingSyntax;
						e.commands ? e.commands.forEach(e => {
							o.push(e), a = e.level
						}) : o.push({
							level: 0,
							statement: e
						})
					}
					const l = t ? t.name : r ? r.name : void 0,
						c = (await Promise.all(this.emitters.map(e => e({
							name: l,
							tests: n,
							project: s
						})))).filter(e => void 0 != e);
					if (!e || c.length) return c.forEach(e => {
						"object" == typeof e ? o.push(e) : "string" == typeof e && e.split("\n").forEach(e => {
							o.push({
								level: this.registrationLevel ? this.registrationLevel : a,
								statement: e
							})
						})
					}), this.endingSyntax && (this.endingSyntax.commands ? this.endingSyntax.commands.forEach(e => {
						o.push(e)
					}) : o.push({
						level: 0,
						statement: this.endingSyntax
					})), {
						commands: o
					}
				}
				register(e) {
					this.emitters.push(e)
				}
				async isRegistered(e = "") {
					return (await Promise.all(this.emitters.map(e => e()))).includes(e)
				}
			}
		},
		96: function(e, t, r) {
			"use strict";

			function n(e) {
				return e.replace(/([^a-z0-9]+)/gi, "")
			}

			function s(e) {
				return e.charAt(0).toUpperCase() + e.substr(1)
			}

			function i(e) {
				return e.charAt(0).toLowerCase() + e.substr(1)
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.sanitizeName = n, t.capitalize = s, t.uncapitalize = i, t.default = void 0;
			var o = {
				sanitizeName: n,
				capitalize: s,
				uncapitalize: i
			};
			t.default = o
		},
		97: function(e, t, r) {
			"use strict";
			var n, s = (n = r(98)) && n.__esModule ? n : {
				default: n
			};
			const i = (() => {
					try {
						return (0, s.default)(window.navigator.userAgent)
					} catch (e) {
						return !1
					}
				})(),
				o = i && i.browser ? i.browser : void 0,
				a = o && "Chrome" === o.name,
				l = o && "Firefox" === o.name,
				c = a || l ? o.name : void 0;
			e.exports = {
				userAgent: i,
				browserName: c,
				isChrome: a,
				isFirefox: l
			}
		},
		98: function(e, t, r) {
			var n;
			! function(s, i) {
				"use strict";
				var o = "",
					a = "?",
					l = "function",
					c = "undefined",
					m = "object",
					d = "string",
					p = "model",
					u = "name",
					h = "type",
					g = "vendor",
					f = "version",
					b = "architecture",
					w = "console",
					v = "mobile",
					y = "tablet",
					A = "smarttv",
					x = "wearable",
					T = "embedded",
					O = 255,
					k = {
						extend: function(e, t) {
							var r = {};
							for (var n in e) t[n] && t[n].length % 2 == 0 ? r[n] = t[n].concat(e[n]) : r[n] = e[n];
							return r
						},
						has: function(e, t) {
							return typeof e === d && -1 !== t.toLowerCase().indexOf(e.toLowerCase())
						},
						lowerize: function(e) {
							return e.toLowerCase()
						},
						major: function(e) {
							return typeof e === d ? e.replace(/[^\d\.]/g, "").split(".")[0] : i
						},
						trim: function(e, t) {
							return e = e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""), typeof t === c ? e : e.substring(0, O)
						}
					},
					C = {
						rgx: function(e, t) {
							for (var r, n, s, o, a, c, d = 0; d < t.length && !a;) {
								var p = t[d],
									u = t[d + 1];
								for (r = n = 0; r < p.length && !a;)
									if (a = p[r++].exec(e))
										for (s = 0; s < u.length; s++) c = a[++n], typeof(o = u[s]) === m && o.length > 0 ? 2 == o.length ? typeof o[1] == l ? this[o[0]] = o[1].call(this, c) : this[o[0]] = o[1] : 3 == o.length ? typeof o[1] !== l || o[1].exec && o[1].test ? this[o[0]] = c ? c.replace(o[1], o[2]) : i : this[o[0]] = c ? o[1].call(this, c, o[2]) : i : 4 == o.length && (this[o[0]] = c ? o[3].call(this, c.replace(o[1], o[2])) : i) : this[o] = c || i;
								d += 2
							}
						},
						str: function(e, t) {
							for (var r in t)
								if (typeof t[r] === m && t[r].length > 0) {
									for (var n = 0; n < t[r].length; n++)
										if (k.has(t[r][n], e)) return r === a ? i : r
								} else if (k.has(t[r], e)) return r === a ? i : r;
							return e
						}
					},
					E = {
						browser: {
							oldSafari: {
								version: {
									"1.0": "/8",
									1.2: "/1",
									1.3: "/3",
									"2.0": "/412",
									"2.0.2": "/416",
									"2.0.3": "/417",
									"2.0.4": "/419",
									"?": "/"
								}
							},
							oldEdge: {
								version: {
									.1: "12.",
									21: "13.",
									31: "14.",
									39: "15.",
									41: "16.",
									42: "17.",
									44: "18."
								}
							}
						},
						os: {
							windows: {
								version: {
									ME: "4.90",
									"NT 3.11": "NT3.51",
									"NT 4.0": "NT4.0",
									2000: "NT 5.0",
									XP: ["NT 5.1", "NT 5.2"],
									Vista: "NT 6.0",
									7: "NT 6.1",
									8: "NT 6.2",
									8.1: "NT 6.3",
									10: ["NT 6.4", "NT 10.0"],
									RT: "ARM"
								}
							}
						}
					},
					S = {
						browser: [
							[/\b(?:crmo|crios)\/([\w\.]+)/i],
							[f, [u, "Chrome"]],
							[/edg(?:e|ios|a)?\/([\w\.]+)/i],
							[f, [u, "Edge"]],
							[/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]{3,6})\b.+version\/([\w\.-]+)/i, /(opera)(?:.+version\/|[\/\s]+)([\w\.]+)/i],
							[u, f],
							[/opios[\/\s]+([\w\.]+)/i],
							[f, [u, "Opera Mini"]],
							[/\sopr\/([\w\.]+)/i],
							[f, [u, "Opera"]],
							[/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i, /(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i, /(ba?idubrowser)[\/\s]?([\w\.]+)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i, /(rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([\w\.]+)/i, /(weibo)__([\d\.]+)/i],
							[u, f],
							[/(?:[\s\/]uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],
							[f, [u, "UCBrowser"]],
							[/(?:windowswechat)?\sqbcore\/([\w\.]+)\b.*(?:windowswechat)?/i],
							[f, [u, "WeChat(Win) Desktop"]],
							[/micromessenger\/([\w\.]+)/i],
							[f, [u, "WeChat"]],
							[/konqueror\/([\w\.]+)/i],
							[f, [u, "Konqueror"]],
							[/trident.+rv[:\s]([\w\.]{1,9})\b.+like\sgecko/i],
							[f, [u, "IE"]],
							[/yabrowser\/([\w\.]+)/i],
							[f, [u, "Yandex"]],
							[/(avast|avg)\/([\w\.]+)/i],
							[
								[u, /(.+)/, "$1 Secure Browser"], f
							],
							[/focus\/([\w\.]+)/i],
							[f, [u, "Firefox Focus"]],
							[/opt\/([\w\.]+)/i],
							[f, [u, "Opera Touch"]],
							[/coc_coc_browser\/([\w\.]+)/i],
							[f, [u, "Coc Coc"]],
							[/dolfin\/([\w\.]+)/i],
							[f, [u, "Dolphin"]],
							[/coast\/([\w\.]+)/i],
							[f, [u, "Opera Coast"]],
							[/xiaomi\/miuibrowser\/([\w\.]+)/i],
							[f, [u, "MIUI Browser"]],
							[/fxios\/([\w\.-]+)/i],
							[f, [u, "Firefox"]],
							[/(qihu|qhbrowser|qihoobrowser|360browser)/i],
							[
								[u, "360 Browser"]
							],
							[/(oculus|samsung|sailfish)browser\/([\w\.]+)/i],
							[
								[u, /(.+)/, "$1 Browser"], f
							],
							[/(comodo_dragon)\/([\w\.]+)/i],
							[
								[u, /_/g, " "], f
							],
							[/\s(electron)\/([\w\.]+)\ssafari/i, /(tesla)(?:\sqtcarbrowser|\/(20[12]\d\.[\w\.-]+))/i, /m?(qqbrowser|baiduboxapp|2345Explorer)[\/\s]?([\w\.]+)/i],
							[u, f],
							[/(MetaSr)[\/\s]?([\w\.]+)/i, /(LBBROWSER)/i],
							[u],
							[/;fbav\/([\w\.]+);/i],
							[f, [u, "Facebook"]],
							[/FBAN\/FBIOS|FB_IAB\/FB4A/i],
							[
								[u, "Facebook"]
							],
							[/safari\s(line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(chromium|instagram)[\/\s]([\w\.-]+)/i],
							[u, f],
							[/\bgsa\/([\w\.]+)\s.*safari\//i],
							[f, [u, "GSA"]],
							[/headlesschrome(?:\/([\w\.]+)|\s)/i],
							[f, [u, "Chrome Headless"]],
							[/\swv\).+(chrome)\/([\w\.]+)/i],
							[
								[u, "Chrome WebView"], f
							],
							[/droid.+\sversion\/([\w\.]+)\b.+(?:mobile\ssafari|safari)/i],
							[f, [u, "Android Browser"]],
							[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],
							[u, f],
							[/version\/([\w\.]+)\s.*mobile\/\w+\s(safari)/i],
							[f, [u, "Mobile Safari"]],
							[/version\/([\w\.]+)\s.*(mobile\s?safari|safari)/i],
							[f, u],
							[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
							[u, [f, C.str, E.browser.oldSafari.version]],
							[/(webkit|khtml)\/([\w\.]+)/i],
							[u, f],
							[/(navigator|netscape)\/([\w\.-]+)/i],
							[
								[u, "Netscape"], f
							],
							[/ile\svr;\srv:([\w\.]+)\).+firefox/i],
							[f, [u, "Firefox Reality"]],
							[/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i, /(firefox)\/([\w\.]+)\s[\w\s\-]+\/[\w\.]+$/i, /(mozilla)\/([\w\.]+)\s.+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]*)/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i],
							[u, f]
						],
						cpu: [
							[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],
							[
								[b, "amd64"]
							],
							[/(ia32(?=;))/i],
							[
								[b, k.lowerize]
							],
							[/((?:i[346]|x)86)[;\)]/i],
							[
								[b, "ia32"]
							],
							[/\b(aarch64|armv?8e?l?)\b/i],
							[
								[b, "arm64"]
							],
							[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
							[
								[b, "armhf"]
							],
							[/windows\s(ce|mobile);\sppc;/i],
							[
								[b, "arm"]
							],
							[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],
							[
								[b, /ower/, "", k.lowerize]
							],
							[/(sun4\w)[;\)]/i],
							[
								[b, "sparc"]
							],
							[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?:64|(?=v(?:[1-7]|[5-7]1)l?|;|eabi))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],
							[
								[b, k.lowerize]
							]
						],
						device: [
							[/\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus\s10)/i],
							[p, [g, "Samsung"],
								[h, y]
							],
							[/\b((?:s[cgp]h|gt|sm)-\w+|galaxy\snexus)/i, /\ssamsung[\s-]([\w-]+)/i, /sec-(sgh\w+)/i],
							[p, [g, "Samsung"],
								[h, v]
							],
							[/\((ip(?:hone|od)[\s\w]*);/i],
							[p, [g, "Apple"],
								[h, v]
							],
							[/\((ipad);[\w\s\),;-]+apple/i, /applecoremedia\/[\w\.]+\s\((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
							[p, [g, "Apple"],
								[h, y]
							],
							[/\b((?:agr|ags[23]|bah2?|sht?)-a?[lw]\d{2})/i],
							[p, [g, "Huawei"],
								[h, y]
							],
							[/d\/huawei([\w\s-]+)[;\)]/i, /\b(nexus\s6p|vog-[at]?l\d\d|ane-[at]?l[x\d]\d|eml-a?l\d\da?|lya-[at]?l\d[\dc]|clt-a?l\d\di?|ele-l\d\d)/i, /\b(\w{2,4}-[atu][ln][01259][019])[;\)\s]/i],
							[p, [g, "Huawei"],
								[h, v]
							],
							[/\b(poco[\s\w]+)(?:\sbuild|\))/i, /\b;\s(\w+)\sbuild\/hm\1/i, /\b(hm[\s\-_]?note?[\s_]?(?:\d\w)?)\sbuild/i, /\b(redmi[\s\-_]?(?:note|k)?[\w\s_]+)(?:\sbuild|\))/i, /\b(mi[\s\-_]?(?:a\d|one|one[\s_]plus|note lte)?[\s_]?(?:\d?\w?)[\s_]?(?:plus)?)\sbuild/i],
							[
								[p, /_/g, " "],
								[g, "Xiaomi"],
								[h, v]
							],
							[/\b(mi[\s\-_]?(?:pad)(?:[\w\s_]+))(?:\sbuild|\))/i],
							[
								[p, /_/g, " "],
								[g, "Xiaomi"],
								[h, y]
							],
							[/;\s(\w+)\sbuild.+\soppo/i, /\s(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007)\b/i],
							[p, [g, "OPPO"],
								[h, v]
							],
							[/\svivo\s(\w+)(?:\sbuild|\))/i, /\s(v[12]\d{3}\w?[at])(?:\sbuild|;)/i],
							[p, [g, "Vivo"],
								[h, v]
							],
							[/\s(rmx[12]\d{3})(?:\sbuild|;)/i],
							[p, [g, "Realme"],
								[h, v]
							],
							[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)\b[\w\s]+build\//i, /\smot(?:orola)?[\s-](\w*)/i, /((?:moto[\s\w\(\)]+|xt\d{3,4}|nexus\s6)(?=\sbuild|\)))/i],
							[p, [g, "Motorola"],
								[h, v]
							],
							[/\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],
							[p, [g, "Motorola"],
								[h, y]
							],
							[/((?=lg)?[vl]k\-?\d{3})\sbuild|\s3\.[\s\w;-]{10}lg?-([06cv9]{3,4})/i],
							[p, [g, "LG"],
								[h, y]
							],
							[/(lm-?f100[nv]?|nexus\s[45])/i, /lg[e;\s\/-]+((?!browser|netcast)\w+)/i, /\blg(\-?[\d\w]+)\sbuild/i],
							[p, [g, "LG"],
								[h, v]
							],
							[/(ideatab[\w\-\s]+)/i, /lenovo\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+)|yt[\d\w-]{6}|tb[\d\w-]{6})/i],
							[p, [g, "Lenovo"],
								[h, y]
							],
							[/(?:maemo|nokia).*(n900|lumia\s\d+)/i, /nokia[\s_-]?([\w\.-]*)/i],
							[
								[p, /_/g, " "],
								[g, "Nokia"],
								[h, v]
							],
							[/droid.+;\s(pixel\sc)[\s)]/i],
							[p, [g, "Google"],
								[h, y]
							],
							[/droid.+;\s(pixel[\s\daxl]{0,6})(?:\sbuild|\))/i],
							[p, [g, "Google"],
								[h, v]
							],
							[/droid.+\s([c-g]\d{4}|so[-l]\w+|xq-a\w[4-7][12])(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
							[p, [g, "Sony"],
								[h, v]
							],
							[/sony\stablet\s[ps]\sbuild\//i, /(?:sony)?sgp\w+(?:\sbuild\/|\))/i],
							[
								[p, "Xperia Tablet"],
								[g, "Sony"],
								[h, y]
							],
							[/\s(kb2005|in20[12]5|be20[12][59])\b/i, /\ba000(1)\sbuild/i, /\boneplus\s(a\d{4})[\s)]/i],
							[p, [g, "OnePlus"],
								[h, v]
							],
							[/(alexa)webm/i, /(kf[a-z]{2}wi)(\sbuild\/|\))/i, /(kf[a-z]+)(\sbuild\/|\)).+silk\//i],
							[p, [g, "Amazon"],
								[h, y]
							],
							[/(sd|kf)[0349hijorstuw]+(\sbuild\/|\)).+silk\//i],
							[
								[p, "Fire Phone"],
								[g, "Amazon"],
								[h, v]
							],
							[/\((playbook);[\w\s\),;-]+(rim)/i],
							[p, g, [h, y]],
							[/((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10;\s(\w+)/i],
							[p, [g, "BlackBerry"],
								[h, v]
							],
							[/(?:\b|asus_)(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus\s7|padfone|p00[cj])/i],
							[p, [g, "ASUS"],
								[h, y]
							],
							[/\s(z[es]6[027][01][km][ls]|zenfone\s\d\w?)\b/i],
							[p, [g, "ASUS"],
								[h, v]
							],
							[/(nexus\s9)/i],
							[p, [g, "HTC"],
								[h, y]
							],
							[/(htc)[;_\s-]{1,2}([\w\s]+(?=\)|\sbuild)|\w+)/i, /(zte)-(\w*)/i, /(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],
							[g, [p, /_/g, " "],
								[h, v]
							],
							[/droid[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i],
							[p, [g, "Acer"],
								[h, y]
							],
							[/droid.+;\s(m[1-5]\snote)\sbuild/i, /\bmz-([\w-]{2,})/i],
							[p, [g, "Meizu"],
								[h, v]
							],
							[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i, /(microsoft);\s(lumia[\s\w]+)/i, /(lenovo)[_\s-]?([\w-]+)/i, /linux;.+(jolla);/i, /droid.+;\s(oppo)\s?([\w\s]+)\sbuild/i],
							[g, p, [h, v]],
							[/(archos)\s(gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i, /[;\/]\s?(le[\s\-]+pan)[\s\-]+(\w{1,9})\sbuild/i, /[;\/]\s?(trinity)[\-\s]*(t\d{3})\sbuild/i, /\b(gigaset)[\s\-]+(q\w{1,9})\sbuild/i, /\b(vodafone)\s([\w\s]+)(?:\)|\sbuild)/i],
							[g, p, [h, y]],
							[/\s(surface\sduo)\s/i],
							[p, [g, "Microsoft"],
								[h, y]
							],
							[/droid\s[\d\.]+;\s(fp\du?)\sbuild/i],
							[p, [g, "Fairphone"],
								[h, v]
							],
							[/\s(u304aa)\sbuild/i],
							[p, [g, "AT&T"],
								[h, v]
							],
							[/sie-(\w*)/i],
							[p, [g, "Siemens"],
								[h, v]
							],
							[/[;\/]\s?(rct\w+)\sbuild/i],
							[p, [g, "RCA"],
								[h, y]
							],
							[/[;\/\s](venue[\d\s]{2,7})\sbuild/i],
							[p, [g, "Dell"],
								[h, y]
							],
							[/[;\/]\s?(q(?:mv|ta)\w+)\sbuild/i],
							[p, [g, "Verizon"],
								[h, y]
							],
							[/[;\/]\s(?:barnes[&\s]+noble\s|bn[rt])([\w\s\+]*)\sbuild/i],
							[p, [g, "Barnes & Noble"],
								[h, y]
							],
							[/[;\/]\s(tm\d{3}\w+)\sbuild/i],
							[p, [g, "NuVision"],
								[h, y]
							],
							[/;\s(k88)\sbuild/i],
							[p, [g, "ZTE"],
								[h, y]
							],
							[/;\s(nx\d{3}j)\sbuild/i],
							[p, [g, "ZTE"],
								[h, v]
							],
							[/[;\/]\s?(gen\d{3})\sbuild.*49h/i],
							[p, [g, "Swiss"],
								[h, v]
							],
							[/[;\/]\s?(zur\d{3})\sbuild/i],
							[p, [g, "Swiss"],
								[h, y]
							],
							[/[;\/]\s?((zeki)?tb.*\b)\sbuild/i],
							[p, [g, "Zeki"],
								[h, y]
							],
							[/[;\/]\s([yr]\d{2})\sbuild/i, /[;\/]\s(dragon[\-\s]+touch\s|dt)(\w{5})\sbuild/i],
							[
								[g, "Dragon Touch"], p, [h, y]
							],
							[/[;\/]\s?(ns-?\w{0,9})\sbuild/i],
							[p, [g, "Insignia"],
								[h, y]
							],
							[/[;\/]\s?((nxa|Next)-?\w{0,9})\sbuild/i],
							[p, [g, "NextBook"],
								[h, y]
							],
							[/[;\/]\s?(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05]))\sbuild/i],
							[
								[g, "Voice"], p, [h, v]
							],
							[/[;\/]\s?(lvtel\-)?(v1[12])\sbuild/i],
							[
								[g, "LvTel"], p, [h, v]
							],
							[/;\s(ph-1)\s/i],
							[p, [g, "Essential"],
								[h, v]
							],
							[/[;\/]\s?(v(100md|700na|7011|917g).*\b)\sbuild/i],
							[p, [g, "Envizen"],
								[h, y]
							],
							[/[;\/]\s?(trio[\s\w\-\.]+)\sbuild/i],
							[p, [g, "MachSpeed"],
								[h, y]
							],
							[/[;\/]\s?tu_(1491)\sbuild/i],
							[p, [g, "Rotor"],
								[h, y]
							],
							[/(shield[\w\s]+)\sbuild/i],
							[p, [g, "Nvidia"],
								[h, y]
							],
							[/(sprint)\s(\w+)/i],
							[g, p, [h, v]],
							[/(kin\.[onetw]{3})/i],
							[
								[p, /\./g, " "],
								[g, "Microsoft"],
								[h, v]
							],
							[/droid\s[\d\.]+;\s(cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
							[p, [g, "Zebra"],
								[h, y]
							],
							[/droid\s[\d\.]+;\s(ec30|ps20|tc[2-8]\d[kx])\)/i],
							[p, [g, "Zebra"],
								[h, v]
							],
							[/\s(ouya)\s/i, /(nintendo)\s([wids3utch]+)/i],
							[g, p, [h, w]],
							[/droid.+;\s(shield)\sbuild/i],
							[p, [g, "Nvidia"],
								[h, w]
							],
							[/(playstation\s[345portablevi]+)/i],
							[p, [g, "Sony"],
								[h, w]
							],
							[/[\s\(;](xbox(?:\sone)?(?!;\sxbox))[\s\);]/i],
							[p, [g, "Microsoft"],
								[h, w]
							],
							[/smart-tv.+(samsung)/i],
							[g, [h, A]],
							[/hbbtv.+maple;(\d+)/i],
							[
								[p, /^/, "SmartTV"],
								[g, "Samsung"],
								[h, A]
							],
							[/(?:linux;\snetcast.+smarttv|lg\snetcast\.tv-201\d)/i],
							[
								[g, "LG"],
								[h, A]
							],
							[/(apple)\s?tv/i],
							[g, [p, "Apple TV"],
								[h, A]
							],
							[/crkey/i],
							[
								[p, "Chromecast"],
								[g, "Google"],
								[h, A]
							],
							[/droid.+aft([\w])(\sbuild\/|\))/i],
							[p, [g, "Amazon"],
								[h, A]
							],
							[/\(dtv[\);].+(aquos)/i],
							[p, [g, "Sharp"],
								[h, A]
							],
							[/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],
							[
								[g, k.trim],
								[p, k.trim],
								[h, A]
							],
							[/[\s\/\(](android\s|smart[-\s]?|opera\s)tv[;\)\s]/i],
							[
								[h, A]
							],
							[/((pebble))app\/[\d\.]+\s/i],
							[g, p, [h, x]],
							[/droid.+;\s(glass)\s\d/i],
							[p, [g, "Google"],
								[h, x]
							],
							[/droid\s[\d\.]+;\s(wt63?0{2,3})\)/i],
							[p, [g, "Zebra"],
								[h, x]
							],
							[/(tesla)(?:\sqtcarbrowser|\/20[12]\d\.[\w\.-]+)/i],
							[g, [h, T]],
							[/droid .+?; ([^;]+?)(?: build|\) applewebkit).+? mobile safari/i],
							[p, [h, v]],
							[/droid .+?;\s([^;]+?)(?: build|\) applewebkit).+?(?! mobile) safari/i],
							[p, [h, y]],
							[/\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i],
							[
								[h, k.lowerize]
							],
							[/(android[\w\.\s\-]{0,9});.+build/i],
							[p, [g, "Generic"]],
							[/(phone)/i],
							[
								[h, v]
							]
						],
						engine: [
							[/windows.+\sedge\/([\w\.]+)/i],
							[f, [u, "EdgeHTML"]],
							[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
							[f, [u, "Blink"]],
							[/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i],
							[u, f],
							[/rv\:([\w\.]{1,9})\b.+(gecko)/i],
							[f, u]
						],
						os: [
							[/microsoft\s(windows)\s(vista|xp)/i],
							[u, f],
							[/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i, /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)(?!.+xbox)/i],
							[u, [f, C.str, E.os.windows.version]],
							[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
							[
								[u, "Windows"],
								[f, C.str, E.os.windows.version]
							],
							[/ip[honead]{2,4}\b(?:.*os\s([\w]+)\slike\smac|;\sopera)/i, /cfnetwork\/.+darwin/i],
							[
								[f, /_/g, "."],
								[u, "iOS"]
							],
							[/(mac\sos\sx)\s?([\w\s\.]*)/i, /(macintosh|mac(?=_powerpc)\s)(?!.+haiku)/i],
							[
								[u, "Mac OS"],
								[f, /_/g, "."]
							],
							[/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/\s]([\w\.]+)/i, /\((series40);/i],
							[u, f],
							[/\(bb(10);/i],
							[f, [u, "BlackBerry"]],
							[/(?:symbian\s?os|symbos|s60(?=;)|series60)[\/\s-]?([\w\.]*)/i],
							[f, [u, "Symbian"]],
							[/mozilla.+\(mobile;.+gecko.+firefox/i],
							[
								[u, "Firefox OS"]
							],
							[/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
							[f, [u, "webOS"]],
							[/crkey\/([\d\.]+)/i],
							[f, [u, "Chromecast"]],
							[/(cros)\s[\w]+\s([\w\.]+\w)/i],
							[
								[u, "Chromium OS"], f
							],
							[/(nintendo|playstation)\s([wids345portablevuch]+)/i, /(xbox);\s+xbox\s([^\);]+)/i, /(mint)[\/\s\(\)]?(\w*)/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?=\slinux)|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus|raspbian)(?:\sgnu\/linux)?(?:\slinux)?[\/\s-]?(?!chrom|package)([\w\.-]*)/i, /(hurd|linux)\s?([\w\.]*)/i, /(gnu)\s?([\w\.]*)/i, /\s([frentopc-]{0,4}bsd|dragonfly)\s?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku)\s(\w+)/i],
							[u, f],
							[/(sunos)\s?([\w\.\d]*)/i],
							[
								[u, "Solaris"], f
							],
							[/((?:open)?solaris)[\/\s-]?([\w\.]*)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i, /(unix)\s?([\w\.]*)/i],
							[u, f]
						]
					},
					j = function(e, t) {
						if ("object" == typeof e && (t = e, e = i), !(this instanceof j)) return new j(e, t).getResult();
						var r = e || (void 0 !== s && s.navigator && s.navigator.userAgent ? s.navigator.userAgent : o),
							n = t ? k.extend(S, t) : S;
						return this.getBrowser = function() {
							var e = {
								name: i,
								version: i
							};
							return C.rgx.call(e, r, n.browser), e.major = k.major(e.version), e
						}, this.getCPU = function() {
							var e = {
								architecture: i
							};
							return C.rgx.call(e, r, n.cpu), e
						}, this.getDevice = function() {
							var e = {
								vendor: i,
								model: i,
								type: i
							};
							return C.rgx.call(e, r, n.device), e
						}, this.getEngine = function() {
							var e = {
								name: i,
								version: i
							};
							return C.rgx.call(e, r, n.engine), e
						}, this.getOS = function() {
							var e = {
								name: i,
								version: i
							};
							return C.rgx.call(e, r, n.os), e
						}, this.getResult = function() {
							return {
								ua: this.getUA(),
								browser: this.getBrowser(),
								engine: this.getEngine(),
								os: this.getOS(),
								device: this.getDevice(),
								cpu: this.getCPU()
							}
						}, this.getUA = function() {
							return r
						}, this.setUA = function(e) {
							return r = typeof e === d && e.length > O ? k.trim(e, O) : e, this
						}, this.setUA(r), this
					};
				j.VERSION = "0.7.28", j.BROWSER = {
					NAME: u,
					MAJOR: "major",
					VERSION: f
				}, j.CPU = {
					ARCHITECTURE: b
				}, j.DEVICE = {
					MODEL: p,
					VENDOR: g,
					TYPE: h,
					CONSOLE: w,
					MOBILE: v,
					SMARTTV: A,
					TABLET: y,
					WEARABLE: x,
					EMBEDDED: T
				}, j.ENGINE = {
					NAME: u,
					VERSION: f
				}, j.OS = {
					NAME: u,
					VERSION: f
				}, typeof t !== c ? (typeof e !== c && e.exports && (t = e.exports = j), t.UAParser = j) : 1 ? (n = function() {
					return j
				}.call(t, r, t, e)) === i || (e.exports = n) : void 0 !== s && (s.UAParser = j);
				var L = void 0 !== s && (s.jQuery || s.Zepto);
				if (L && !L.ua) {
					var P = new j;
					L.ua = P.getResult(), L.ua.get = function() {
						return P.getUA()
					}, L.ua.set = function(e) {
						P.setUA(e);
						var t = P.getResult();
						for (var r in t) L.ua[r] = t[r]
					}
				}
			}("object" == typeof window ? window : this)
		},
		99: function(e, t, r) {
			"use strict";
			e.exports = {
				isProduction: "production" == "production",
				isStaging: "production" == "staging",
				isTest: "production" == "test"
			}
		}
	})
});
//# sourceMappingURL=background.js.map