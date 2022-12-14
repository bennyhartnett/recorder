! function(e, t) {
	if ("object" == typeof exports && "object" == typeof module) module.exports = t();
	else if ("function" == typeof define && define.amd) define([], t);
	else {
		var n = t();
		for (var i in n)("object" == typeof exports ? exports : e)[i] = n[i]
	}
}("undefined" != typeof self ? self : this, function() {
	return webpackJsonp([0], {
		100: function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.normalizeTestsInSuite = a, t.sanitizeProjectName = s;
			var i, r = (i = n(101)) && i.__esModule ? i : {
				default: i
			};

			function o(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}

			function a({
				suite: e,
				tests: t
			}) {
				if (!e) return;
				let n = function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = null != arguments[t] ? arguments[t] : {},
							i = Object.keys(n);
						"function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
							return Object.getOwnPropertyDescriptor(n, e).enumerable
						}))), i.forEach(function(t) {
							o(e, t, n[t])
						})
					}
					return e
				}({}, e);
				return n.tests.forEach((e, i) => {
					n.tests[i] = t.find(t => t.id === e).name
				}), n
			}

			function s(e) {
				let t = e;
				return t.startsWith("http") ? r.default.parse(e).host : t.replace(/([^a-z0-9\u4e00-\u9fa5 ._#-]+)/gi, "")
			}
			e.exports = {
				normalizeTestsInSuite: a,
				sanitizeProjectName: s
			}
		},
		101: function(e, t, n) {
			"use strict";
			var i = n(102),
				r = n(103);

			function o() {
				this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null
			}
			t.parse = y, t.resolve = function(e, t) {
				return y(e, !1, !0).resolve(t)
			}, t.resolveObject = function(e, t) {
				return e ? y(e, !1, !0).resolveObject(t) : t
			}, t.format = function(e) {
				r.isString(e) && (e = y(e));
				return e instanceof o ? e.format() : o.prototype.format.call(e)
			}, t.Url = o;
			var a = /^([a-z0-9.+-]+:)/i,
				s = /:[0-9]*$/,
				l = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
				c = ["{", "}", "|", "\\", "^", "`"].concat(["<", ">", '"', "`", " ", "\r", "\n", "\t"]),
				d = ["'"].concat(c),
				u = ["%", "/", "?", ";", "#"].concat(d),
				p = ["/", "?", "#"],
				h = 255,
				m = /^[+a-z0-9A-Z_-]{0,63}$/,
				f = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
				g = {
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
				v = n(104);

			function y(e, t, n) {
				if (e && r.isObject(e) && e instanceof o) return e;
				var i = new o;
				return i.parse(e, t, n), i
			}
			o.prototype.parse = function(e, t, n) {
				if (!r.isString(e)) throw new TypeError("Parameter 'url' must be a string, not " + typeof e);
				var o = e.indexOf("?"),
					s = -1 !== o && o < e.indexOf("#") ? "?" : "#",
					c = e.split(s);
				c[0] = c[0].replace(/\\/g, "/");
				var y = e = c.join(s);
				if (y = y.trim(), !n && 1 === e.split("#").length) {
					var T = l.exec(y);
					if (T) return this.path = y, this.href = y, this.pathname = T[1], T[2] ? (this.search = T[2], this.query = t ? v.parse(this.search.substr(1)) : this.search.substr(1)) : t && (this.search = "", this.query = {}), this
				}
				var x = a.exec(y);
				if (x) {
					var O = (x = x[0]).toLowerCase();
					this.protocol = O, y = y.substr(x.length)
				}
				if (n || x || y.match(/^\/\/[^@\/]+@[^@\/]+/)) {
					var A = "//" === y.substr(0, 2);
					!A || x && b[x] || (y = y.substr(2), this.slashes = !0)
				}
				if (!b[x] && (A || x && !w[x])) {
					for (var C, k, S = -1, E = 0; E < p.length; E++) {
						-1 !== (L = y.indexOf(p[E])) && (-1 === S || L < S) && (S = L)
					} - 1 !== (k = -1 === S ? y.lastIndexOf("@") : y.lastIndexOf("@", S)) && (C = y.slice(0, k), y = y.slice(k + 1), this.auth = decodeURIComponent(C)), S = -1;
					for (E = 0; E < u.length; E++) {
						var L; - 1 !== (L = y.indexOf(u[E])) && (-1 === S || L < S) && (S = L)
					} - 1 === S && (S = y.length), this.host = y.slice(0, S), y = y.slice(S), this.parseHost(), this.hostname = this.hostname || "";
					var j = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
					if (!j)
						for (var R = this.hostname.split(/\./), N = (E = 0, R.length); E < N; E++) {
							var P = R[E];
							if (P && !P.match(m)) {
								for (var M = "", _ = 0, I = P.length; _ < I; _++) P.charCodeAt(_) > 127 ? M += "x" : M += P[_];
								if (!M.match(m)) {
									var D = R.slice(0, E),
										V = R.slice(E + 1),
										q = P.match(f);
									q && (D.push(q[1]), V.unshift(q[2])), V.length && (y = "/" + V.join(".") + y), this.hostname = D.join(".");
									break
								}
							}
						}
					this.hostname.length > h ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), j || (this.hostname = i.toASCII(this.hostname));
					var B = this.port ? ":" + this.port : "",
						U = this.hostname || "";
					this.host = U + B, this.href += this.host, j && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), "/" !== y[0] && (y = "/" + y))
				}
				if (!g[O])
					for (E = 0, N = d.length; E < N; E++) {
						var z = d[E];
						if (-1 !== y.indexOf(z)) {
							var F = encodeURIComponent(z);
							F === z && (F = escape(z)), y = y.split(z).join(F)
						}
					}
				var $ = y.indexOf("#"); - 1 !== $ && (this.hash = y.substr($), y = y.slice(0, $));
				var H = y.indexOf("?");
				if (-1 !== H ? (this.search = y.substr(H), this.query = y.substr(H + 1), t && (this.query = v.parse(this.query)), y = y.slice(0, H)) : t && (this.search = "", this.query = {}), y && (this.pathname = y), w[O] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
					B = this.pathname || "";
					var W = this.search || "";
					this.path = B + W
				}
				return this.href = this.format(), this
			}, o.prototype.format = function() {
				var e = this.auth || "";
				e && (e = (e = encodeURIComponent(e)).replace(/%3A/i, ":"), e += "@");
				var t = this.protocol || "",
					n = this.pathname || "",
					i = this.hash || "",
					o = !1,
					a = "";
				this.host ? o = e + this.host : this.hostname && (o = e + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]"), this.port && (o += ":" + this.port)), this.query && r.isObject(this.query) && Object.keys(this.query).length && (a = v.stringify(this.query));
				var s = this.search || a && "?" + a || "";
				return t && ":" !== t.substr(-1) && (t += ":"), this.slashes || (!t || w[t]) && !1 !== o ? (o = "//" + (o || ""), n && "/" !== n.charAt(0) && (n = "/" + n)) : o || (o = ""), i && "#" !== i.charAt(0) && (i = "#" + i), s && "?" !== s.charAt(0) && (s = "?" + s), t + o + (n = n.replace(/[?#]/g, function(e) {
					return encodeURIComponent(e)
				})) + (s = s.replace("#", "%23")) + i
			}, o.prototype.resolve = function(e) {
				return this.resolveObject(y(e, !1, !0)).format()
			}, o.prototype.resolveObject = function(e) {
				if (r.isString(e)) {
					var t = new o;
					t.parse(e, !1, !0), e = t
				}
				for (var n = new o, i = Object.keys(this), a = 0; a < i.length; a++) {
					var s = i[a];
					n[s] = this[s]
				}
				if (n.hash = e.hash, "" === e.href) return n.href = n.format(), n;
				if (e.slashes && !e.protocol) {
					for (var l = Object.keys(e), c = 0; c < l.length; c++) {
						var d = l[c];
						"protocol" !== d && (n[d] = e[d])
					}
					return w[n.protocol] && n.hostname && !n.pathname && (n.path = n.pathname = "/"), n.href = n.format(), n
				}
				if (e.protocol && e.protocol !== n.protocol) {
					if (!w[e.protocol]) {
						for (var u = Object.keys(e), p = 0; p < u.length; p++) {
							var h = u[p];
							n[h] = e[h]
						}
						return n.href = n.format(), n
					}
					if (n.protocol = e.protocol, e.host || b[e.protocol]) n.pathname = e.pathname;
					else {
						for (var m = (e.pathname || "").split("/"); m.length && !(e.host = m.shift()););
						e.host || (e.host = ""), e.hostname || (e.hostname = ""), "" !== m[0] && m.unshift(""), m.length < 2 && m.unshift(""), n.pathname = m.join("/")
					}
					if (n.search = e.search, n.query = e.query, n.host = e.host || "", n.auth = e.auth, n.hostname = e.hostname || e.host, n.port = e.port, n.pathname || n.search) {
						var f = n.pathname || "",
							g = n.search || "";
						n.path = f + g
					}
					return n.slashes = n.slashes || e.slashes, n.href = n.format(), n
				}
				var v = n.pathname && "/" === n.pathname.charAt(0),
					y = e.host || e.pathname && "/" === e.pathname.charAt(0),
					T = y || v || n.host && e.pathname,
					x = T,
					O = n.pathname && n.pathname.split("/") || [],
					A = (m = e.pathname && e.pathname.split("/") || [], n.protocol && !w[n.protocol]);
				if (A && (n.hostname = "", n.port = null, n.host && ("" === O[0] ? O[0] = n.host : O.unshift(n.host)), n.host = "", e.protocol && (e.hostname = null, e.port = null, e.host && ("" === m[0] ? m[0] = e.host : m.unshift(e.host)), e.host = null), T = T && ("" === m[0] || "" === O[0])), y) n.host = e.host || "" === e.host ? e.host : n.host, n.hostname = e.hostname || "" === e.hostname ? e.hostname : n.hostname, n.search = e.search, n.query = e.query, O = m;
				else if (m.length) O || (O = []), O.pop(), O = O.concat(m), n.search = e.search, n.query = e.query;
				else if (!r.isNullOrUndefined(e.search)) {
					if (A) n.hostname = n.host = O.shift(), (L = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@")) && (n.auth = L.shift(), n.host = n.hostname = L.shift());
					return n.search = e.search, n.query = e.query, r.isNull(n.pathname) && r.isNull(n.search) || (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")), n.href = n.format(), n
				}
				if (!O.length) return n.pathname = null, n.search ? n.path = "/" + n.search : n.path = null, n.href = n.format(), n;
				for (var C = O.slice(-1)[0], k = (n.host || e.host || O.length > 1) && ("." === C || ".." === C) || "" === C, S = 0, E = O.length; E >= 0; E--) "." === (C = O[E]) ? O.splice(E, 1) : ".." === C ? (O.splice(E, 1), S++) : S && (O.splice(E, 1), S--);
				if (!T && !x)
					for (; S--; S) O.unshift("..");
				!T || "" === O[0] || O[0] && "/" === O[0].charAt(0) || O.unshift(""), k && "/" !== O.join("/").substr(-1) && O.push("");
				var L, j = "" === O[0] || O[0] && "/" === O[0].charAt(0);
				A && (n.hostname = n.host = j ? "" : O.length ? O.shift() : "", (L = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@")) && (n.auth = L.shift(), n.host = n.hostname = L.shift()));
				return (T = T || n.host && O.length) && !j && O.unshift(""), O.length ? n.pathname = O.join("/") : (n.pathname = null, n.path = null), r.isNull(n.pathname) && r.isNull(n.search) || (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")), n.auth = e.auth || n.auth, n.slashes = n.slashes || e.slashes, n.href = n.format(), n
			}, o.prototype.parseHost = function() {
				var e = this.host,
					t = s.exec(e);
				t && (":" !== (t = t[0]) && (this.port = t.substr(1)), e = e.substr(0, e.length - t.length)), e && (this.hostname = e)
			}
		},
		102: function(e, t, n) {
			(function(e, i) {
				var r;
				! function(o) {
					var a = "object" == typeof t && t && !t.nodeType && t,
						s = "object" == typeof e && e && !e.nodeType && e,
						l = "object" == typeof i && i;
					l.global !== l && l.window !== l && l.self !== l || (o = l);
					var c, d, u = 2147483647,
						p = 36,
						h = 1,
						m = 26,
						f = 38,
						g = 700,
						b = 72,
						w = 128,
						v = "-",
						y = /^xn--/,
						T = /[^\x20-\x7E]/,
						x = /[\x2E\u3002\uFF0E\uFF61]/g,
						O = {
							overflow: "Overflow: input needs wider integers to process",
							"not-basic": "Illegal input >= 0x80 (not a basic code point)",
							"invalid-input": "Invalid input"
						},
						A = p - h,
						C = Math.floor,
						k = String.fromCharCode;

					function S(e) {
						throw new RangeError(O[e])
					}

					function E(e, t) {
						for (var n = e.length, i = []; n--;) i[n] = t(e[n]);
						return i
					}

					function L(e, t) {
						var n = e.split("@"),
							i = "";
						return n.length > 1 && (i = n[0] + "@", e = n[1]), i + E((e = e.replace(x, ".")).split("."), t).join(".")
					}

					function j(e) {
						for (var t, n, i = [], r = 0, o = e.length; r < o;)(t = e.charCodeAt(r++)) >= 55296 && t <= 56319 && r < o ? 56320 == (64512 & (n = e.charCodeAt(r++))) ? i.push(((1023 & t) << 10) + (1023 & n) + 65536) : (i.push(t), r--) : i.push(t);
						return i
					}

					function R(e) {
						return E(e, function(e) {
							var t = "";
							return e > 65535 && (t += k((e -= 65536) >>> 10 & 1023 | 55296), e = 56320 | 1023 & e), t += k(e)
						}).join("")
					}

					function N(e, t) {
						return e + 22 + 75 * (e < 26) - ((0 != t) << 5)
					}

					function P(e, t, n) {
						var i = 0;
						for (e = n ? C(e / g) : e >> 1, e += C(e / t); e > A * m >> 1; i += p) e = C(e / A);
						return C(i + (A + 1) * e / (e + f))
					}

					function M(e) {
						var t, n, i, r, o, a, s, l, c, d, f, g = [],
							y = e.length,
							T = 0,
							x = w,
							O = b;
						for ((n = e.lastIndexOf(v)) < 0 && (n = 0), i = 0; i < n; ++i) e.charCodeAt(i) >= 128 && S("not-basic"), g.push(e.charCodeAt(i));
						for (r = n > 0 ? n + 1 : 0; r < y;) {
							for (o = T, a = 1, s = p; r >= y && S("invalid-input"), ((l = (f = e.charCodeAt(r++)) - 48 < 10 ? f - 22 : f - 65 < 26 ? f - 65 : f - 97 < 26 ? f - 97 : p) >= p || l > C((u - T) / a)) && S("overflow"), T += l * a, !(l < (c = s <= O ? h : s >= O + m ? m : s - O)); s += p) a > C(u / (d = p - c)) && S("overflow"), a *= d;
							O = P(T - o, t = g.length + 1, 0 == o), C(T / t) > u - x && S("overflow"), x += C(T / t), T %= t, g.splice(T++, 0, x)
						}
						return R(g)
					}

					function _(e) {
						var t, n, i, r, o, a, s, l, c, d, f, g, y, T, x, O = [];
						for (g = (e = j(e)).length, t = w, n = 0, o = b, a = 0; a < g; ++a)(f = e[a]) < 128 && O.push(k(f));
						for (i = r = O.length, r && O.push(v); i < g;) {
							for (s = u, a = 0; a < g; ++a)(f = e[a]) >= t && f < s && (s = f);
							for (s - t > C((u - n) / (y = i + 1)) && S("overflow"), n += (s - t) * y, t = s, a = 0; a < g; ++a)
								if ((f = e[a]) < t && ++n > u && S("overflow"), f == t) {
									for (l = n, c = p; !(l < (d = c <= o ? h : c >= o + m ? m : c - o)); c += p) x = l - d, T = p - d, O.push(k(N(d + x % T, 0))), l = C(x / T);
									O.push(k(N(l, 0))), o = P(n, y, i == r), n = 0, ++i
								}++ n, ++t
						}
						return O.join("")
					}
					if (c = {
							version: "1.4.1",
							ucs2: {
								decode: j,
								encode: R
							},
							decode: M,
							encode: _,
							toASCII: function(e) {
								return L(e, function(e) {
									return T.test(e) ? "xn--" + _(e) : e
								})
							},
							toUnicode: function(e) {
								return L(e, function(e) {
									return y.test(e) ? M(e.slice(4).toLowerCase()) : e
								})
							}
						}, 1) void 0 === (r = function() {
						return c
					}.call(t, n, t, e)) || (e.exports = r);
					else if (a && s)
						if (e.exports == a) s.exports = c;
						else
							for (d in c) c.hasOwnProperty(d) && (a[d] = c[d]);
					else o.punycode = c
				}(this)
			}).call(t, n(58)(e), n(9))
		},
		103: function(e, t, n) {
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
		104: function(e, t, n) {
			"use strict";
			t.decode = t.parse = n(105), t.encode = t.stringify = n(106)
		},
		105: function(e, t, n) {
			"use strict";

			function i(e, t) {
				return Object.prototype.hasOwnProperty.call(e, t)
			}
			e.exports = function(e, t, n, o) {
				t = t || "&", n = n || "=";
				var a = {};
				if ("string" != typeof e || 0 === e.length) return a;
				var s = /\+/g;
				e = e.split(t);
				var l = 1e3;
				o && "number" == typeof o.maxKeys && (l = o.maxKeys);
				var c = e.length;
				l > 0 && c > l && (c = l);
				for (var d = 0; d < c; ++d) {
					var u, p, h, m, f = e[d].replace(s, "%20"),
						g = f.indexOf(n);
					g >= 0 ? (u = f.substr(0, g), p = f.substr(g + 1)) : (u = f, p = ""), h = decodeURIComponent(u), m = decodeURIComponent(p), i(a, h) ? r(a[h]) ? a[h].push(m) : a[h] = [a[h], m] : a[h] = m
				}
				return a
			};
			var r = Array.isArray || function(e) {
				return "[object Array]" === Object.prototype.toString.call(e)
			}
		},
		106: function(e, t, n) {
			"use strict";
			var i = function(e) {
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
			e.exports = function(e, t, n, s) {
				return t = t || "&", n = n || "=", null === e && (e = void 0), "object" == typeof e ? o(a(e), function(a) {
					var s = encodeURIComponent(i(a)) + n;
					return r(e[a]) ? o(e[a], function(e) {
						return s + encodeURIComponent(i(e))
					}).join(t) : s + encodeURIComponent(i(e[a]))
				}).join(t) : s ? encodeURIComponent(i(s)) + n + encodeURIComponent(i(e)) : ""
			};
			var r = Array.isArray || function(e) {
				return "[object Array]" === Object.prototype.toString.call(e)
			};

			function o(e, t) {
				if (e.map) return e.map(t);
				for (var n = [], i = 0; i < e.length; i++) n.push(t(e[i], i));
				return n
			}
			var a = Object.keys || function(e) {
				var t = [];
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.push(n);
				return t
			}
		},
		36: function(e, t, n) {
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
		42: function(e, t, n) {
			"use strict";
			var i = n(8);
			n.n(i);
			const r = i["environment"].isProduction;
			t["a"] = r;
			const o = i["environment"].isStaging;
			t["b"] = o;
			const a = i["environment"].isTest;
			t["c"] = a;
			const s = i["userAgent"].userAgent;
			t["d"] = s
		},
		420: function(e, t, n) {
			e.exports = n(421)
		},
		421: function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var i = n(15),
				r = n.n(i),
				o = n(90),
				a = n(422),
				s = n(423),
				l = n(257),
				c = n(42);
			n.d(t, "record", function() {
				return a["b"]
			});
			const d = new l["a"](window);
			let u, p, h, m, f, g, b, w;
			t["locatorBuilders"] = d, Object(s["a"])(a["b"]), a["a"].inputTypes = ["text", "password", "file", "datetime", "datetime-local", "date", "month", "time", "week", "number", "range", "email", "url", "search", "tel", "color"], a["a"].addEventHandler("type", "change", function(e) {
				if (e.target.tagName && !this.recordingState.preventType && 0 == this.recordingState.typeLock && (this.recordingState.typeLock = 1)) {
					let t = e.target.tagName.toLowerCase(),
						n = e.target.type;
					if ("input" == t && a["a"].inputTypes.indexOf(n) >= 0)
						if (e.target.value.length > 0) {
							if (Object(a["b"])("type", d.buildAll(e.target), e.target.value), null != this.recordingState.enterTarget) {
								let t = e.target.parentElement,
									n = t.tagName.toLowerCase();
								for (;
									"form" != n && "body" != n;) n = (t = t.parentElement).tagName.toLowerCase();
								Object(a["b"])("sendKeys", d.buildAll(this.recordingState.enterTarget), "${KEY_ENTER}"), this.recordingState.enterTarget = null
							}
						} else Object(a["b"])("type", d.buildAll(e.target), e.target.value);
					else "textarea" == t && Object(a["b"])("type", d.buildAll(e.target), e.target.value)
				}
				this.recordingState.typeLock = 0
			}), a["a"].addEventHandler("type", "input", function(e) {
				this.recordingState.typeTarget = e.target
			}), a["a"].addEventHandler("clickAt", "click", function(e) {
				0 == e.button && !this.recordingState.preventClick && function(e) {
					return !!c["c"] || e.isTrusted
				}(e) && (this.recordingState.preventClickTwice || (Object(a["b"])("click", d.buildAll(e.target), ""), this.recordingState.preventClickTwice = !0), setTimeout(() => {
					this.recordingState.preventClickTwice = !1
				}, 30))
			}, !0), a["a"].addEventHandler("doubleClickAt", "dblclick", function(e) {
				Object(a["b"])("doubleClick", d.buildAll(e.target), "")
			}, !0), a["a"].addEventHandler("sendKeys", "keydown", function(e) {
				if (e.target.tagName) {
					let t = e.keyCode,
						n = e.target.tagName.toLowerCase(),
						i = e.target.type;
					if ("input" == n && a["a"].inputTypes.indexOf(i) >= 0) {
						if (13 == t) {
							this.recordingState.enterTarget = e.target, this.recordingState.enterValue = this.recordingState.enterTarget.value;
							let t = e.target.parentElement,
								r = t.tagName.toLowerCase();
							if (this.recordingState.tempValue == this.recordingState.enterTarget.value && this.recordingState.tabCheck == this.recordingState.enterTarget) Object(a["b"])("sendKeys", d.buildAll(this.recordingState.enterTarget), "${KEY_ENTER}"), this.recordingState.enterTarget = null, this.recordingState.preventType = !0;
							else if (this.recordingState.focusValue == this.recordingState.enterValue) {
								for (;
									"form" != r && "body" != r;) r = (t = t.parentElement).tagName.toLowerCase();
								Object(a["b"])("sendKeys", d.buildAll(this.recordingState.enterTarget), "${KEY_ENTER}"), this.recordingState.enterTarget = null
							}
							if (this.recordingState.typeTarget && this.recordingState.typeTarget.tagName && !this.recordingState.preventType && (this.recordingState.typeLock = 1))
								if (n = this.recordingState.typeTarget.tagName.toLowerCase(), i = this.recordingState.typeTarget.type, "input" == n && a["a"].inputTypes.indexOf(i) >= 0)
									if (this.recordingState.typeTarget.value.length > 0) {
										if (Object(a["b"])("type", d.buildAll(this.recordingState.typeTarget), this.recordingState.typeTarget.value), null != this.recordingState.enterTarget) {
											for (r = (t = this.recordingState.typeTarget.parentElement).tagName.toLowerCase();
												"form" != r && "body" != r;) r = (t = t.parentElement).tagName.toLowerCase();
											Object(a["b"])("sendKeys", d.buildAll(this.recordingState.enterTarget), "${KEY_ENTER}"), this.recordingState.enterTarget = null
										}
									} else Object(a["b"])("type", d.buildAll(this.recordingState.typeTarget), this.recordingState.typeTarget.value);
							else "textarea" == n && Object(a["b"])("type", d.buildAll(this.recordingState.typeTarget), this.recordingState.typeTarget.value);
							this.recordingState.preventClick = !0, setTimeout(() => {
								this.recordingState.preventClick = !1
							}, 500), setTimeout(() => {
								this.recordingState.enterValue != e.target.value && (this.recordingState.enterTarget = null)
							}, 50)
						}
						let r = !1;
						38 != t && 40 != t || "" == e.target.value || (null != this.recordingState.focusTarget && this.recordingState.focusTarget.value != this.recordingState.tempValue && (r = !0, this.recordingState.tempValue = this.recordingState.focusTarget.value), r && Object(a["b"])("type", d.buildAll(e.target), this.recordingState.tempValue), setTimeout(() => {
							this.recordingState.tempValue = this.recordingState.focusTarget.value
						}, 250), 38 == t ? Object(a["b"])("sendKeys", d.buildAll(e.target), "${KEY_UP}") : Object(a["b"])("sendKeys", d.buildAll(e.target), "${KEY_DOWN}"), this.recordingState.tabCheck = e.target), 9 == t && this.recordingState.tabCheck == e.target && (Object(a["b"])("sendKeys", d.buildAll(e.target), "${KEY_TAB}"), this.recordingState.preventType = !0)
					}
				}
			}, !0), a["a"].addEventHandler("dragAndDrop", "mousedown", function(e) {
				if (u = void 0, m = void 0, e.clientX < window.document.documentElement.clientWidth && e.clientY < window.document.documentElement.clientHeight && (u = e, p = setTimeout(() => {
						u = void 0
					}, 200), h = setTimeout(() => {
						m = e
					}, 200)), f = [], e.target.nodeName) {
					if ("option" == e.target.nodeName.toLowerCase()) {
						let t = e.target.parentNode;
						if (t.multiple) {
							let e = t.options;
							for (let t = 0; t < e.length; t++) e[t]._wasSelected = e[t].selected
						}
					}
				}
			}, !0), a["a"].addEventHandler("dragAndDrop", "mouseup", function(e) {
				if (clearTimeout(h), m) {
					let t = e.clientX - m.clientX,
						n = e.clientY - m.clientY;
					if (m && 0 === e.button && t + n && e.clientX < window.document.documentElement.clientWidth && e.clientY < window.document.documentElement.clientHeight && "" === function() {
							let e = "",
								t = window.document.activeElement,
								n = t ? t.tagName.toLowerCase() : null;
							return "textarea" == n || "input" == n ? e = t.value.slice(t.selectionStart, t.selectionEnd) : window.getSelection && (e = window.getSelection().toString()), e.trim()
						}()) {
						let t, n, i = m.pageX - m.target.getBoundingClientRect().left - window.scrollX,
							r = m.pageY - m.target.getBoundingClientRect().top - window.scrollY;
						f.length && f[1].relatedTarget == f[0].target && f[0].target == e.target ? (t = e.pageX - f[1].target.getBoundingClientRect().left - window.scrollX, n = e.pageY - f[1].target.getBoundingClientRect().top - window.scrollY, Object(a["b"])("mouseDownAt", d.buildAll(m.target), i + "," + r), Object(a["b"])("mouseMoveAt", d.buildAll(f[1].target), t + "," + n), Object(a["b"])("mouseUpAt", d.buildAll(f[1].target), t + "," + n)) : (t = e.pageX - e.target.getBoundingClientRect().left - window.scrollX, n = e.pageY - e.target.getBoundingClientRect().top - window.scrollY, Object(a["b"])("mouseDownAt", d.buildAll(e.target), t + "," + n), Object(a["b"])("mouseMoveAt", d.buildAll(e.target), t + "," + n), Object(a["b"])("mouseUpAt", d.buildAll(e.target), t + "," + n))
					}
				} else {
					g = void 0, p = void 0;
					let t = 0,
						n = 0;
					if (u && (t = e.clientX - u.clientX, n = e.clientY - u.clientY), !u || u.target === e.target || t + n) {
						if (u && u.target === e.target) {
							d.buildAll(u.target)
						}
					} else Object(a["b"])("mouseDown", d.buildAll(u.target), ""), Object(a["b"])("mouseUp", d.buildAll(e.target), "")
				}
				u = void 0, m = void 0, f = void 0
			}, !0), a["a"].addEventHandler("dragAndDropToObject", "dragstart", function(e) {
				b = setTimeout(() => {
					w = e
				}, 200)
			}, !0), a["a"].addEventHandler("dragAndDropToObject", "drop", function(e) {
				clearTimeout(b), w && 0 == e.button && w.target !== e.target && Object(a["b"])("dragAndDropToObject", d.buildAll(w.target), d.build(e.target)), w = void 0, m = void 0
			}, !0);
			let v, y = null;
			a["a"].addEventHandler("runScript", "scroll", function(e) {
				!0 === E && (v = e.target, clearTimeout(y), y = setTimeout(() => {
					v = void 0
				}, 500))
			}, !0);
			let T, x, O, A = 0;
			a["a"].addEventHandler("mouseOver", "mouseover", function(e) {
				if (window.document.documentElement && (A = window.document.documentElement.getElementsByTagName("*").length), !0 === E) {
					(function e(t) {
						if (!t.tagName) return null;
						let n = t.tagName.toLowerCase();
						let i = t.type;
						return t.hasAttribute("onclick") || t.hasAttribute("href") || "button" == n || "input" == n && ("submit" == i || "button" == i || "image" == i || "radio" == i || "checkbox" == i || "reset" == i) ? t : null != t.parentNode ? e(t.parentNode) : null
					})(e.target) && (x = e.target, O = d.buildAll(e.target), setTimeout(() => {
						x = void 0, O = void 0
					}, 500)), f && (f.length >= 3 && f.shift(), f.push(e))
				}
			}, !0);
			let C = void 0;
			a["a"].addEventHandler("mouseOut", "mouseout", function(e) {
				null !== C && e.target === C && Object(a["b"])("mouseOut", d.buildAll(e.target), ""), C = void 0
			}, !0), a["a"].addMutationObserver("FrameDeleted", function(e) {
				e.forEach(async e => {
					const t = await e.removedNodes;
					t.length && "IFRAME" === t[0].nodeName && "selenium-ide-indicator" !== t[0].id && r.a.runtime.sendMessage({
						frameRemoved: !0
					}).catch(() => {})
				})
			}, {
				childList: !0
			}), a["a"].addMutationObserver("DOMNodeInserted", function(e) {
				if (!0 === E && window.document.documentElement.getElementsByTagName("*").length > A) {
					if (!e.reduce((e, t) => ("childList" === t.type && e.push.apply(e, t.addedNodes), e), []).length) return;
					v && (Object(a["b"])("runScript", [
						["window.scrollTo(0," + window.scrollY + ")"]
					], ""), E = !1, setTimeout(() => {
						E = !0
					}, 550), v = void 0, x = void 0), x && (Object(a["b"])("mouseOver", O, ""), C = x, x = void 0, O = void 0, T = void 0)
				}
			}, {
				childList: !0,
				subtree: !0
			});
			let k, S = null,
				E = !0;
			a["a"].addEventHandler("checkPageLoaded", "readystatechange", function(e) {
				"loading" === window.document.readyState ? E = !1 : (E = !1, clearTimeout(S), S = setTimeout(() => {
					E = !0
				}, 1500))
			}, !0), a["a"].addEventHandler("contextMenu", "contextmenu", function(e) {
				let t = r.a.runtime.connect(),
					n = d.buildAll(e.target);
				t.onMessage.addListener(function(i) {
					if (i.cmd.includes("Text") || i.cmd.includes("Label")) {
						let t = o["a"].dom.getVisibleText(e.target);
						Object(a["b"])(i.cmd, n, t)
					} else if (i.cmd.includes("Title")) {
						let t = o["c"].string.normalizeSpaces(e.target.ownerDocument.title);
						Object(a["b"])(i.cmd, [
							[t]
						], "")
					} else if (i.cmd.includes("Present") || i.cmd.includes("Checked") || i.cmd.includes("Editable") || i.cmd.includes("Selected") || i.cmd.includes("Visible") || "mouseOver" === i.cmd) Object(a["b"])(i.cmd, n, "");
					else if (i.cmd.includes("Value")) {
						let t = e.target.value;
						Object(a["b"])(i.cmd, n, t)
					}
					t.onMessage.removeListener(this)
				})
			}, !0);
			let L, j = 0;

			function R(e) {
				let t = e.text.replace(/^ *(.*?) *$/, "$1");
				return t.match(/\xA0/) ? "label=regexp:" + t.replace(/[(\)\[\]\\\^\$\*\+\?\.\|\{\}]/g, function(e) {
					return "\\" + e
				}).replace(/\s+/g, function(e) {
					return e.match(/\xA0/) ? e.length > 1 ? "\\s+" : "\\s" : e
				}) : "label=" + t
			}
			a["a"].addEventHandler("editContent", "focus", function(e) {
				"true" == e.target.contentEditable && (k = e.target, L = k.innerHTML, j = 1)
			}, !0), a["a"].addEventHandler("editContent", "blur", function(e) {
				1 == j && e.target == k && (k.innerHTML != L && Object(a["b"])("editContent", d.buildAll(e.target), k.innerHTML), j = 0)
			}, !0), r.a.runtime.sendMessage({
				attachRecorderRequest: !0
			}).catch(function(e) {}), a["a"].prototype.getOptionLocator = function(e) {
				let t = e.text.replace(/^ *(.*?) *$/, "$1");
				return t.match(/\xA0/) ? "label=regexp:" + t.replace(/[\(\)\[\]\\\^\$\*\+\?\.\|\{\}]/g, function(e) {
					return "\\" + e
				}).replace(/\s+/g, function(e) {
					return e.match(/\xA0/) ? e.length > 1 ? "\\s+" : "\\s" : e
				}) : "label=" + t
			}, a["a"].addEventHandler("select", "focus", function(e) {
				if (e.target.nodeName) {
					if ("select" == e.target.nodeName.toLowerCase() && e.target.multiple) {
						let t = e.target.options;
						for (let e = 0; e < t.length; e++) null == t[e]._wasSelected && (t[e]._wasSelected = t[e].selected)
					}
				}
			}, !0), a["a"].addEventHandler("select", "change", function(e) {
				if (e.target.tagName) {
					if ("select" == e.target.tagName.toLowerCase())
						if (e.target.multiple) {
							let t = e.target.options;
							for (let n = 0; n < t.length; n++)
								if (t[n]._wasSelected != t[n].selected) {
									let i = R(t[n]);
									t[n].selected ? Object(a["b"])("addSelection", d.buildAll(e.target), i) : Object(a["b"])("removeSelection", d.buildAll(e.target), i), this.recordingState.preventClickTwice = !0, t[n]._wasSelected = t[n].selected
								}
						} else {
							let t = e.target.options[e.target.selectedIndex];
							Object(a["b"])("select", d.buildAll(e.target), R(t))
						}
				}
			}), r.a.runtime.sendMessage({
				attachRecorderRequest: !0
			}).then(e => {
				e && a["c"].attach()
			}).catch(() => {})
		},
		422: function(e, t, n) {
			"use strict";
			t["b"] = b, n.d(t, "a", function() {
				return c
			}), n.d(t, "c", function() {
				return h
			});
			var i = n(15),
				r = n.n(i),
				o = n(130);
			let a, s = -1,
				l = "";

			function c(e) {
				this.window = e, this.eventListeners = {}, this.attached = !1, this.recordingState = {}
			}

			function d(e) {
				let t = window.document.getElementsByTagName("input");
				for (let n = 0; n < t.length; n++) c.inputTypes.indexOf(t[n].type) >= 0 && e(t[n])
			}

			function u(e, t) {
				e.focusTarget = t.target, e.focusValue = e.focusTarget.value, e.tempValue = e.focusValue, e.preventType = !1
			}

			function p(e) {
				e.focusTarget = null, e.focusValue = null, e.tempValue = null
			}
			c.eventHandlers = {}, c.mutationObservers = {}, c.addEventHandler = function(e, t, n, i) {
				n.handlerName = e, i || (i = !1);
				let r = i ? "C_" + t : t;
				this.eventHandlers[r] || (this.eventHandlers[r] = []), this.eventHandlers[r].push(n)
			}, c.addMutationObserver = function(e, t, n) {
				const i = new MutationObserver(t);
				i.observerName = e, i.config = n, this.mutationObservers[e] = i
			}, c.prototype.parseEventKey = function(e) {
				return e.match(/^C_/) ? {
					eventName: e.substring(2),
					capture: !0
				} : {
					eventName: e,
					capture: !1
				}
			}, c.prototype.attach = function() {
				if (!this.attached) {
					for (let e in c.eventHandlers) {
						const t = this.parseEventKey(e),
							n = t.eventName,
							i = t.capture,
							r = c.eventHandlers[e];
						this.eventListeners[e] = [];
						for (let t = 0; t < r.length; t++) {
							let o = r[t].bind(this);
							this.window.document.addEventListener(n, o, i), this.eventListeners[e].push(o)
						}
					}
					for (let e in c.mutationObservers) {
						const t = c.mutationObservers[e];
						t.observe(this.window.document.body, t.config)
					}
					this.attached = !0, this.recordingState = {
						typeTarget: void 0,
						typeLock: 0,
						focusTarget: null,
						focusValue: null,
						tempValue: null,
						preventType: !1,
						preventClickTwice: !1,
						preventClick: !1,
						enterTarget: null,
						enterValue: null,
						tabCheck: null
					}, e = this.recordingState, d(t => {
						t.addEventListener("focus", u.bind(null, e)), t.addEventListener("blur", p.bind(null, e))
					}), m()
				}
				var e
			}, c.prototype.detach = function() {
				for (let e in this.eventListeners) {
					const t = this.parseEventKey(e),
						n = t.eventName,
						i = t.capture;
					for (let t = 0; t < this.eventListeners[e].length; t++) this.window.document.removeEventListener(n, this.eventListeners[e][t], i)
				}
				for (let e in c.mutationObservers) {
					c.mutationObservers[e].disconnect()
				}
				var e;
				this.eventListeners = {}, this.attached = !1, f(), e = this.recordingState, d(t => {
					t.removeEventListener("focus", u.bind(null, e)), t.removeEventListener("blur", p.bind(null, e))
				})
			};
			const h = new c(window);

			function m() {
				if ("root" === l && !a) {
					const e = window.parent.frames.length;
					return (a = window.document.createElement("iframe")).src = r.a.runtime.getURL("/indicator.html"), a.id = "selenium-ide-indicator", a.style.border = "1px solid #d30100", a.style.borderRadius = "50px", a.style.position = "fixed", a.style.bottom = "36px", a.style.right = "36px", a.style.width = "400px", a.style.height = "50px", a.style["background-color"] = "#f7f7f7", a.style["box-shadow"] = "0 7px 10px 0 rgba(0,0,0,0.1)", a.style.transition = "bottom 100ms linear", a.style["z-index"] = 1e15, a.addEventListener("mouseenter", function(e) {
						e.target.style.visibility = "hidden", setTimeout(function() {
							e.target.style.visibility = "visible"
						}, 1e3)
					}, !1), window.document.body.appendChild(a), r.a.runtime.onMessage.addListener(function(e, t, n) {
						e.recordNotification && (a.contentWindow.postMessage({
							direction: "from-recording-module",
							command: e.command,
							target: e.target,
							value: e.value
						}, "*"), a.style.borderColor = "black", setTimeout(() => {
							a.style.borderColor = "#d30100"
						}, 1e3), n(!0))
					}), r.a.runtime.sendMessage({
						setFrameNumberForTab: !0,
						indicatorIndex: e
					}).catch(() => {})
				}
			}

			function f() {
				"root" === l && a && (a.parentElement.removeChild(a), a = void 0)
			}
			async function g() {
				let e, t, n, i = window;
				for (; i !== window.top && (e = i.parent).frames.length;) {
					e === window.top && (n = await r.a.runtime.sendMessage({
						requestFrameCount: !0
					}).catch(() => {})) && (t = n.indicatorIndex);
					for (let n = 0; n < e.frames.length; n++) {
						if (e.frames[n] === i) {
							l = ":" + Object(o["a"])({
								indicatorIndex: t,
								targetFrameIndex: n
							}) + l, i = e;
							break
						}
					}
				}
				l = "root" + l, await r.a.runtime.sendMessage({
					frameLocation: l
				}).catch(() => {})
			}

			function b(e, t, n, i, o) {
				r.a.runtime.sendMessage({
					command: e,
					target: t,
					value: n,
					insertBeforeLastCommand: i,
					frameLocation: void 0 != o ? o : l,
					commandSideexTabId: s
				}).catch(() => {
					h.detach()
				})
			}
			r.a.runtime.onMessage.addListener(function(e, t, n) {
				e.attachRecorder && (h.attach(), n(!0))
			}), r.a.runtime.onMessage.addListener(function(e, t, n) {
				e.detachRecorder && (h.detach(), n(!0))
			}), r.a.runtime.onMessage.addListener(function(e, t, n) {
				if (e.recalculateFrameLocation) return (async () => {
					f(), setTimeout(async () => {
						await m()
					}, 100), l = "", await g(), n(!0)
				})(), !0
			}), (async () => {
				await g()
			})(), window.recorder = h, window.contentSideexTabId = s, window.Recorder = c, window.record = b
		},
		423: function(e, t, n) {
			"use strict";
			t["a"] = function(e) {
				window === window.top && window.addEventListener("message", function(t) {
					if (t.source.top == window && t.data && "from-page-script" == t.data.direction && t.data.recordedType) switch (t.data.recordedType) {
						case "prompt":
							null != t.data.recordedResult ? e("answerOnNextPrompt", [
								[t.data.recordedResult]
							], "", !0, t.data.frameLocation) : e("chooseCancelOnNextPrompt", [
								[""]
							], "", !0, t.data.frameLocation), e("assertPrompt", [
								[t.data.recordedMessage]
							], "", !1, t.data.frameLocation), null != t.data.recordedResult ? e("webdriverAnswerOnVisiblePrompt", [
								[t.data.recordedResult]
							], "", !1, t.data.frameLocation) : e("webdriverChooseCancelOnVisiblePrompt", [
								[""]
							], "", !1, t.data.frameLocation);
							break;
						case "confirm":
							1 == t.data.recordedResult ? e("chooseOkOnNextConfirmation", [
								[""]
							], "", !0, t.data.frameLocation) : e("chooseCancelOnNextConfirmation", [
								[""]
							], "", !0, t.data.frameLocation), e("assertConfirmation", [
								[t.data.recordedMessage]
							], "", !1, t.data.frameLocation), 1 == t.data.recordedResult ? e("webdriverChooseOkOnVisibleConfirmation", [
								[""]
							], "", !1, t.data.frameLocation) : e("webdriverChooseCancelOnVisibleConfirmation", [
								[""]
							], "", !1, t.data.frameLocation);
							break;
						case "alert":
							e("assertAlert", [
								[t.data.recordedMessage]
							], "", !1, t.data.frameLocation)
					}
				})
			}
		},
		52: function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.preprocessParameter = function(e, t, n, {
				ignoreEscaping: i
			}) {
				const a = function(e, {
					preprocessor: t,
					ignoreEscaping: n
				}) {
					return n ? e : t && "scriptPreprocessor" === t.name ? e.replace(/"/g, "'") : (0, r.default)(e)
				}(e, {
					preprocessor: t,
					ignoreEscaping: i
				});
				return t ? t(a, n) : o(a, n)
			}, t.defaultPreprocessor = o, t.scriptPreprocessor = function(e) {
				let t, n = e.replace(/^\s+/, "").replace(/\s+$/, ""),
					i = [];
				const r = {},
					o = [];
				let a = 0;
				if (/\$\{/.exec(n)) {
					const e = /\$\{(.*?)\}/g;
					let s = 0;
					for (; t = e.exec(n);) {
						const l = t[1];
						t.index - s > 0 && i.push(n.substring(s, t.index)), r.hasOwnProperty(l) || (r[l] = a, o.push(l), a++), i.push(`arguments[${r[l]}]`), s = e.lastIndex
					}
					return s < n.length && i.push(n.substring(s, n.length)), {
						script: i.join(""),
						argv: o
					}
				}
				return {
					script: n,
					argv: o
				}
			}, t.keysPreprocessor = function(e, t) {
				let n = [],
					i = e.match(/\$\{\w+\}/g);
				if (i) {
					let r = 0;
					for (; r < e.length;) {
						let a = i.shift(),
							s = e.indexOf(a, r);
						if (s > r && (n.push(e.substr(r, s - r)), r = s), a) {
							if (/^\$\{KEY_\w+\}/.test(a)) {
								let e = a.match(/\$\{KEY_(\w+)\}/)[1];
								n.push(`Key['${e}']`)
							} else n.push(o(a, t));
							r += a.length
						} else r < e.length && (n.push(e.substr(r, e.length)), r = e.length)
					}
				} else n.push(e);
				return n
			};
			var i, r = (i = n(36)) && i.__esModule ? i : {
				default: i
			};

			function o(e, t) {
				if (!e) return;
				const n = e.match(/\$\{(\w+)\}/);
				return n ? e.replace(n[0], t(n[1])) : e
			}
		},
		53: function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.default = o, t.renderCommands = a;
			var i, r = (i = n(54)) && i.__esModule ? i : {
				default: i
			};

			function o(e, t, {
				startingLevel: n = 0,
				newLineCount: i = 1,
				fullPayload: o = !1,
				originTracing: s,
				enableOriginTracing: l
			} = {}) {
				if (Array.isArray(t)) return a(t, {
					startingLevel: n,
					commandPrefixPadding: e,
					originTracing: s,
					enableOriginTracing: l
				}); {
					const a = (0, r.default)(t, {
						commandPrefixPadding: e,
						startingLevel: n
					});
					return o ? a : a.body && a.body.length ? a.body + "\n".repeat(i) : ""
				}
			}

			function a(e, {
				startingLevel: t,
				commandPrefixPadding: n,
				originTracing: i,
				enableOriginTracing: r
			} = {}) {
				let a = "",
					s = t;
				if (r) {
					const e = i.splice(0, 2);
					a += o(n, e.join("\n"), {
						startingLevel: s
					})
				}
				return e.forEach((e, t) => {
					if (e) {
						if (i && i[t]) {
							i[t].split("\n").forEach(e => {
								let t = o(n, e, {
									startingLevel: s
								});
								a += t
							})
						}
						const l = o(n, e, {
							startingLevel: s,
							fullPayload: !0,
							enableOriginTracing: r
						});
						s = l.endingLevel, l.skipEmitting || (a += l.body, a += "\n")
					}
				}), a
			}
		},
		54: function(e, t, n) {
			"use strict";

			function i({
				startingLevel: e,
				commandBlock: t
			} = {}) {
				let n = 0;
				return t.commands && t.commands.length > 0 && (n = t.commands[t.commands.length - 1].level || 0), e + n + (t.endingLevelAdjustment || 0)
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.default = function(e, {
				startingLevel: t,
				commandPrefixPadding: n
			} = {}) {
				if (void 0 === e) return {
					body: void 0
				};
				t || (t = 0);
				e.startingLevelAdjustment && (t += e.startingLevelAdjustment);
				t < 0 && (t = 0);
				return "object" == typeof e.commands ? e.skipEmitting ? {
					endingLevel: i({
						startingLevel: t,
						commandBlock: e
					}),
					skipEmitting: e.skipEmitting
				} : {
					body: e.commands.map(e => n.repeat(t + e.level) + e.statement).join("\n"),
					endingLevel: i({
						startingLevel: t,
						commandBlock: e
					})
				} : {
					body: e.split("\n").join("\n" + n.repeat(t)).replace(/^/, n.repeat(t)),
					endingLevel: t
				}
			}
		},
		55: function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.registerCommandEmitter = function({
				command: e,
				emitter: t,
				emitters: n
			} = {}) {
				if (n[e]) throw new Error("Unable to overwrite an existing command emitter");
				n[e] = t
			}, t.registerPreprocessors = function(e) {
				Object.keys(e).forEach(t => {
					switch (t) {
						case "sendKeys":
							e[t].valuePreprocessor = i.keysPreprocessor;
							break;
						case "runScript":
						case "executeScript":
						case "executeAsyncScript":
						case "if":
						case "elseIf":
						case "repeatIf":
						case "while":
							e[t].targetPreprocessor = i.scriptPreprocessor
					}
				})
			}, t.registerMethod = async function(e, t, {
				generateMethodDeclaration: n,
				hooks: i
			}) {
				let r = n(e);
				r = "object" == typeof r ? r.body : r, await i.declareMethods.isRegistered(r) || t.forEach(e => {
					i.declareMethods.register(() => e)
				})
			};
			var i = n(52)
		},
		56: function(e, t, n) {
			"use strict";

			function i(e) {
				return e.filter((t, n) => {
					return e.findIndex(e => e.name === t.name) === n
				})
			}

			function r(e, t) {
				let n = [];
				for (const i of e.commands)
					if ("run" === i.command) {
						const e = t.find(e => e.name === i.target);
						n.push({
							name: e.name,
							commands: e.commands
						}), n = n.concat(r(e, t))
					} return i(n)
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.deduplicateReusedTestMethods = i, t.findReusedTestMethods = r, t.findCommandThatOpensWindow = function e(t, n) {
				let i;
				for (const o of t.commands) {
					if (o.opensWindow) {
						i = o;
						break
					}
					if ("run" === o.command) {
						const i = r(t, n);
						for (const t in i) return e(i[t], i)
					}
				}
				return i
			}
		},
		57: function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.ArgTypes = void 0;
			const i = {
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
			t.ArgTypes = i
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
		75: function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.registerCommand = t.ArgTypes = t.TargetTypes = t.Commands = void 0;
			var i = n(94),
				r = n(57);
			const o = i.Commands;
			t.Commands = o;
			const a = i.TargetTypes;
			t.TargetTypes = a;
			const s = r.ArgTypes;
			t.ArgTypes = s;
			const l = i.registerCommand;
			t.registerCommand = l
		},
		8: function(e, t, n) {
			"use strict";
			var i = l(n(92)),
				r = l(n(36)),
				o = l(n(97)),
				a = l(n(99)),
				s = l(n(100));

			function l(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			e.exports = {
				codeExport: i.default,
				stringEscape: r.default,
				userAgent: o.default,
				environment: a.default,
				project: s.default
			}
		},
		92: function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.default = void 0;
			var i = d(n(93)),
				r = d(n(54)),
				o = n(55),
				a = d(n(95)),
				s = d(n(56)),
				l = d(n(53)),
				c = d(n(96));

			function d(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function u(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {},
						i = Object.keys(n);
					"function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
						return Object.getOwnPropertyDescriptor(n, e).enumerable
					}))), i.forEach(function(t) {
						p(e, t, n[t])
					})
				}
				return e
			}

			function p(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var h = {
				emit: u({}, i.default),
				prettify: r.default,
				register: {
					preprocessors: o.registerPreprocessors,
					emitter: o.registerCommandEmitter
				},
				hook: a.default,
				find: u({}, s.default),
				render: l.default,
				parsers: c.default
			};
			t.default = h
		},
		93: function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.emitCommand = p, t.emitLocation = h, t.emitSelection = m, t.emitOriginTracing = b, t.default = void 0;
			var i = c(n(36)),
				r = n(52),
				o = c(n(53)),
				a = n(55),
				s = n(56),
				l = n(75);

			function c(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function d(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {},
						i = Object.keys(n);
					"function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
						return Object.getOwnPropertyDescriptor(n, e).enumerable
					}))), i.forEach(function(t) {
						u(e, t, n[t])
					})
				}
				return e
			}

			function u(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}

			function p(e, t, {
				variableLookup: n,
				emitNewWindowHandling: i
			} = {}) {
				if (function(e) {
						const t = e.command;
						if (!t.startsWith("//")) {
							let n = l.Commands.find(e => e[0] === t);
							if (!n) throw new Error(`Invalid command '${t}'`);
							if (!!(n = n[1]).target != !!e.target && n.target && !n.target.isOptional) throw new Error(`Incomplete command '${e.command}'. Missing expected target argument.`);
							if (!!n.value != !!e.value && n.value && !n.value.isOptional) throw new Error(`Incomplete command '${t}'. Missing expected value argument.`)
						}
					}(e), t) {
					const o = "storeJson" === e.command;
					let a = t((0, r.preprocessParameter)(e.target, t.targetPreprocessor, n, {
						ignoreEscaping: o
					}), (0, r.preprocessParameter)(e.value, t.valuePreprocessor, n, {
						ignoreEscaping: o
					}));
					return e.opensWindow && (a = i(e, a)), a
				}
			}

			function h(e, t) {
				if (/^\/\//.test(e)) return t.xpath(e);
				const n = e.split("="),
					i = n.shift(),
					r = n.join("=");
				if (t[i]) return t[i](r);
				throw new Error(i ? `Unknown locator ${i}` : "Locator can't be empty")
			}

			function m(e, t) {
				if (!e) throw new Error(`Location can't be empty`);
				const [n, i] = e.split("=");
				if (t[n] && i) {
					return t[n](i)
				}
				if (i) throw new Error(`Unknown selection locator ${n}`);
				return t["label"](n)
			}
			async function f(e, t) {
				const n = e.map(e => t.emit(e));
				let i = [];
				return (await Promise.all(n)).forEach(e => {
					"string" == typeof e && e.includes("\n") ? e.split("\n").forEach(e => {
						i.push(e)
					}) : i.push(e)
				}), i
			}
			async function g(e, {
				commandPrefixPadding: t,
				generateMethodDeclaration: n,
				level: i,
				terminatingKeyword: r,
				emitter: o,
				render: a,
				overrideCommandEmitting: s
			} = {}) {
				const l = n(e.name);
				let c, d = l,
					u = r;
				return "object" == typeof l && (d = l.body, u = l.terminatingKeyword), s ? c = e.commands.map(e => `${t.repeat(e.level)+e.statement}`).join(`\n${t}`).replace(/^/, t) : "\n" === (c = a(await f(e.commands, o), {
					newLineCount: 0,
					startingLevel: i
				})).slice(-1) && (c = c.slice(0, -1)), [d, c, u]
			}

			function b(e, {
				commentPrefix: t
			}, n, i) {
				let r = [];
				if (n) {
					r.push(t + ` Test name: ${e.name}`);
					let n = t + " Step # | name | target | value";
					i || (n += " | comment"), r.push(n)
				}
				return e.commands.forEach((e, o) => {
					let a = "";
					n && (a = t + ` ${o+1} | ${e.command} | ${e.target} | ${e.value}`, i ? e.comment && (a += "\n") : a += ` | ${e.comment}`), i && e.comment && (a += t + ` ${e.comment}`), r.push(a)
				}), r
			}
			async function w(e, t, {
				testLevel: n,
				commandLevel: i,
				testDeclaration: r,
				terminatingKeyword: l,
				commandPrefixPadding: c,
				commentPrefix: d,
				hooks: u,
				emitter: p,
				generateMethodDeclaration: h,
				enableOriginTracing: m,
				enableDescriptionAsComment: w,
				project: v
			} = {}) {
				let y = {};
				n = n || 1, i = i || 2;
				const T = (0, s.findReusedTestMethods)(e, t),
					x = o.default.bind(this, c);
				if (p.extras)
					for (const i in p.extras) {
						let r = !0;
						if ("emitWaitForWindow" === i && (0, s.findCommandThatOpensWindow)(e, t) && (r = !1), !r) {
							const e = await p.extras[i](),
								t = await g(e, {
									emitter: p,
									commandPrefixPadding: c,
									generateMethodDeclaration: e.generateMethodDeclaration,
									level: n,
									render: x,
									terminatingKeyword: l,
									overrideCommandEmitting: !0
								});
							await (0, a.registerMethod)(e.name, t, {
								generateMethodDeclaration: e.generateMethodDeclaration,
								hooks: u
							})
						}
					}
				for (const e of T) {
					const t = await g(e, {
						emitter: p,
						commandPrefixPadding: c,
						generateMethodDeclaration: h,
						level: n,
						render: x,
						terminatingKeyword: l
					});
					await (0, a.registerMethod)(e.name, t, {
						generateMethodDeclaration: h,
						hooks: u
					})
				}
				const O = b(e, {
					commentPrefix: d
				}, m, w);
				return y.testDeclaration = x(r, {
					startingLevel: n
				}), y.inEachBegin = x(await u.inEachBegin.emit({
					test: e,
					tests: t,
					project: v,
					isOptional: !0
				}), {
					startingLevel: i
				}), y.commands = x(await f(e.commands, p).catch(t => {
					throw new Error(`Test '${e.name}' has a problem: ${t.message}`)
				}), {
					startingLevel: i,
					originTracing: O,
					enableOriginTracing: m
				}), y.inEachEnd = x(await u.inEachEnd.emit({
					test: e,
					tests: t,
					project: v,
					isOptional: !0
				}), {
					startingLevel: i
				}), y.testEnd = x(l, {
					startingLevel: n
				}), y
			}
			var v = {
				command: p,
				commands: f,
				location: h,
				method: g,
				selection: m,
				suite: async function(e, t, {
					suiteLevel: n,
					testLevel: i,
					suiteName: r,
					suiteDeclaration: a,
					terminatingKeyword: s,
					commandPrefixPadding: l,
					commentPrefix: c,
					hooks: d,
					suite: u,
					project: p,
					beforeEachOptions: h
				} = {}) {
					let m = {};
					i = i || 1, n = n || 0, u || (u = {
						name: r
					});
					const f = o.default.bind(this, l);
					return m.headerComment = c + " Generated by TAF Recorder\n", m.dependencies = f(await d.declareDependencies.emit({
						suite: u,
						tests: t,
						project: p
					})), m.suiteDeclaration = f(a, {
						startingLevel: n
					}), m.variables = f(await d.declareVariables.emit({
						suite: u,
						tests: t,
						project: p
					}), {
						startingLevel: i
					}), m.beforeAll = f(await d.beforeAll.emit({
						suite: u,
						tests: t,
						project: p,
						isOptional: !0
					}), {
						startingLevel: i
					}), m.beforeEach = f(await d.beforeEach.emit({
						suite: u,
						tests: t,
						project: p,
						startingSyntaxOptions: h
					}), {
						startingLevel: i
					}), m.afterEach = f(await d.afterEach.emit({
						suite: u,
						tests: t,
						project: p
					}), {
						startingLevel: i
					}), m.afterAll = f(await d.afterAll.emit({
						suite: u,
						tests: t,
						project: p,
						isOptional: !0
					}), {
						startingLevel: i
					}), m.methods = f(await d.declareMethods.emit({
						suite: u,
						tests: t,
						project: p,
						isOptional: !0
					}), {
						startingLevel: i
					}), m.tests = e, m.suiteEnd = f(s, {
						startingLevel: n
					}), d.declareMethods.clearRegister(), m
				},
				orderedSuite: function(e) {
					let t = "";
					if (t += e.headerComment, t += e.dependencies, t += e.suiteDeclaration, t += e.variables, t += e.beforeAll, t += e.beforeEach, t += e.afterEach, t += e.afterAll, t += e.methods, e.tests.testDeclaration) {
						const n = e.tests;
						t += n.testDeclaration, t += n.inEachBegin, t += n.commands, t += n.inEachEnd, t += n.testEnd
					} else
						for (const n in e.tests) {
							const i = e.tests[n];
							t += i.testDeclaration, t += i.inEachBegin, t += i.commands, t += i.inEachEnd, t += i.testEnd
						}
					return t += e.suiteEnd
				},
				test: w,
				text: i.default,
				testsFromSuite: async function(e, t, n, {
					enableOriginTracing: i,
					enableDescriptionAsComment: r,
					generateTestDeclaration: o,
					project: a
				}) {
					let s = {};
					for (const l of t.tests) {
						const t = e.find(e => e.name === l),
							c = o(t.name);
						s[t.name] = await w(t, e, d({}, n, {
							testDeclaration: c,
							enableOriginTracing: i,
							enableDescriptionAsComment: r,
							project: a
						}))
					}
					return s
				}
			};
			t.default = v
		},
		94: function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.registerCommand = function(e, t) {
				if (s.find(e => e[0] === t.command)) throw new Error("Unable to overwrite existing command");
				s.push([e, t])
			}, t.Commands = t.TargetTypes = void 0;
			var i = n(57);

			function r(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {},
						i = Object.keys(n);
					"function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
						return Object.getOwnPropertyDescriptor(n, e).enumerable
					}))), i.forEach(function(t) {
						o(e, t, n[t])
					})
				}
				return e
			}

			function o(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			const a = {
				NONE: 0,
				LOCATOR: "locator",
				REGION: "region"
			};
			t.TargetTypes = a;
			const s = [
				["addSelection", {
					name: "add selection",
					description: `Add a selection to a set of options in a \n        multi-select element using an option locator.\n        Option locators provide different ways of specifying a select element (e.g., label=, value=, id=, index=)`,
					type: a.LOCATOR,
					target: i.ArgTypes.locator,
					value: i.ArgTypes.optionLocator
				}],
				["answerOnNextPrompt", {
					name: "answer on next prompt",
					description: `Affects the next alert prompt. This command will send the \n        specified answer string to it. If the alert is already present, then use \n        "webdriver answer on visible prompt" instead.`,
					target: i.ArgTypes.answer
				}],
				["assert", {
					name: "assert",
					description: `Check that a variable is an expected value. The variable's \n        value will be converted to a string for comparison. The test will stop if the assert fails.`,
					target: i.ArgTypes.variableName,
					value: i.ArgTypes.expectedValue
				}],
				["assertAlert", {
					name: "assert alert",
					description: `Confirm that an alert has been rendered with the provided text. The test will stop if the assert fails.`,
					target: i.ArgTypes.alertText
				}],
				["assertChecked", {
					name: "assert checked",
					type: a.LOCATOR,
					description: "Confirm that the target element has been checked. The test will stop if the assert fails.",
					target: i.ArgTypes.locator
				}],
				["assertConfirmation", {
					name: "assert confirmation",
					description: "Confirm that a confirmation has been rendered. The test will stop if the assert fails.",
					target: i.ArgTypes.text
				}],
				["assertEditable", {
					name: "assert editable",
					type: a.LOCATOR,
					description: "Confirm that the target element is editable. The test will stop if the assert fails.",
					target: i.ArgTypes.locator
				}],
				["assertElementPresent", {
					name: "assert element present",
					type: a.LOCATOR,
					description: `Confirm that the target element is present somewhere on the page. The test will stop if the assert fails.`,
					target: i.ArgTypes.locator
				}],
				["assertElementNotPresent", {
					name: "assert element not present",
					type: a.LOCATOR,
					description: `Confirm that the target element is not present anywhere on the page. The test will stop if the assert fails.`,
					target: i.ArgTypes.locator
				}],
				["assertNotChecked", {
					name: "assert not checked",
					type: a.LOCATOR,
					description: "Confirm that the target element has not been checked. The test will stop if the assert fails.",
					target: i.ArgTypes.locator
				}],
				["assertNotEditable", {
					name: "assert not editable",
					type: a.LOCATOR,
					description: "Confirm that the target element is not editable. The test will stop if the assert fails.",
					target: i.ArgTypes.locator
				}],
				["assertNotSelectedValue", {
					name: "assert not selected value",
					type: a.LOCATOR,
					description: `Confirm that the value attribute of the selected option \n        in a dropdown element does not contain the provided value. The test will stop if the assert fails.`,
					target: i.ArgTypes.selectLocator,
					value: i.ArgTypes.pattern
				}],
				["assertNotText", {
					name: "assert not text",
					type: a.LOCATOR,
					description: `Confirm that the text of an element does not contain the provided value.\n      The test will stop if the assert fails.`,
					target: i.ArgTypes.locator,
					value: i.ArgTypes.pattern
				}],
				["assertPrompt", {
					name: "assert prompt",
					description: "Confirm that a JavaScript prompt has been rendered. The test will stop if the assert fails.",
					target: i.ArgTypes.text
				}],
				["assertSelectedValue", {
					name: "assert selected value",
					type: a.LOCATOR,
					description: `Confirm that the value attribute of the selected option \n        in a dropdown element contains the provided value. The test will stop if the assert fails.`,
					target: i.ArgTypes.selectLocator,
					value: i.ArgTypes.pattern
				}],
				["assertSelectedLabel", {
					name: "assert selected label",
					type: a.LOCATOR,
					description: `Confirm that the label of the selected option in a dropdown \n        element contains the provided value. The test will stop if the assert fails.`,
					target: i.ArgTypes.selectLocator,
					value: i.ArgTypes.pattern
				}],
				["assertText", {
					name: "assert text",
					type: a.LOCATOR,
					description: `Confirm that the text of an element contains the provided value.\n      The test will stop if the assert fails.`,
					target: i.ArgTypes.locator,
					value: i.ArgTypes.pattern
				}],
				["assertTitle", {
					name: "assert title",
					description: `Confirm the title of the current page contains the provided text.\n      The test will stop if the assert fails.`,
					target: i.ArgTypes.pattern
				}],
				["assertValue", {
					name: "assert value",
					type: a.LOCATOR,
					description: `Confirm the (whitespace-trimmed) value of an input field \n        (or anything else with a value parameter). For checkbox/radio elements, \n        the value will be "on" or "off" depending on whether the element is \n        checked or not. The test will stop if the assert fails.`,
					target: i.ArgTypes.locator,
					value: i.ArgTypes.pattern
				}],
				["check", {
					name: "check",
					type: a.LOCATOR,
					description: "Check a toggle-button (checkbox/radio).",
					target: i.ArgTypes.locator
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
					type: a.LOCATOR,
					description: `Clicks on a target element (e.g., a link, button, checkbox, or radio button).`,
					target: i.ArgTypes.locator
				}],
				["clickAt", {
					name: "click at",
					type: a.LOCATOR,
					description: `Clicks on a target element (e.g., a link, button, checkbox, \n        or radio button). The coordinates are relative to the target element \n        (e.g., 0,0 is the top left corner of the element) and are mostly used \n        to check effects that relay on them, for example the material ripple effect.`,
					target: i.ArgTypes.locator,
					value: r({
						isOptional: !0
					}, i.ArgTypes.coord)
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
					type: a.LOCATOR,
					description: `Double clicks on an element (e.g., a link, button, checkbox, or radio button).`,
					target: i.ArgTypes.locator
				}],
				["doubleClickAt", {
					name: "double click at",
					type: a.LOCATOR,
					description: `Double clicks on a target element (e.g., a link, button, \n        checkbox, or radio button). The coordinates are relative to the target \n        element (e.g., 0,0 is the top left corner of the element) and are mostly \n        used to check effects that relay on them, for example the material \n        ripple effect.`,
					target: i.ArgTypes.locator,
					value: i.ArgTypes.coord
				}],
				["dragAndDropToObject", {
					name: "drag and drop to object",
					type: a.LOCATOR,
					description: "Drags an element and drops it on another element.",
					target: i.ArgTypes.locatorOfObjectToBeDragged,
					value: i.ArgTypes.locatorOfDragDestinationObject
				}],
				["echo", {
					name: "echo",
					description: `Prints the specified message into the third table cell in \n        your Selenese tables. Useful for debugging.`,
					target: i.ArgTypes.message
				}],
				["editContent", {
					name: "edit content",
					type: a.LOCATOR,
					description: `Sets the value of a content editable element as if you typed in it.`,
					target: i.ArgTypes.locator,
					value: i.ArgTypes.value
				}],
				["else", {
					name: "else",
					description: `Part of an if block. Execute the commands in this branch \n        when an if and/or else if condition are not met. Terminate the branch \n        with the end command.`
				}],
				["elseIf", {
					name: "else if",
					description: `Part of an if block. Execute the commands in this branch \n        when an if condition has not been met. Terminate the branch with the \n        end command.`,
					target: i.ArgTypes.conditionalExpression
				}],
				["end", {
					name: "end",
					description: `Terminates a control flow block for if, while, and times.`
				}],
				["executeScript", {
					name: "execute script",
					description: `Executes a snippet of JavaScript in the context of the \n        currently selected frame or window. The script fragment will be executed \n        as the body of an anonymous function.  To store the return value, use \n        the 'return' keyword and provide a variable name in the value input field.`,
					target: i.ArgTypes.script,
					value: r({
						isOptional: !0
					}, i.ArgTypes.variableName)
				}],
				["executeAsyncScript", {
					name: "execute async script",
					description: `Executes an async snippet of JavaScript in the context of \n        the currently selected frame or window. The script fragment will be \n        executed as the body of an anonymous function and must return a Promise. \n        The Promise result will be saved on the variable if you use the 'return' \n        keyword.`,
					target: i.ArgTypes.script,
					value: r({
						isOptional: !0
					}, i.ArgTypes.variableName)
				}],
				["forEach", {
					name: "for each",
					description: `Create a loop that executes the proceeding commands for each item in a given collection.`,
					target: i.ArgTypes.arrayVariableName,
					value: i.ArgTypes.iteratorVariableName
				}],
				["if", {
					name: "if",
					type: a.LOCATOR,
					description: `Create a conditional branch in your test. Terminate the branch with the end command.`,
					target: i.ArgTypes.conditionalExpression
				}],
				["mouseDown", {
					name: "mouse down",
					type: a.LOCATOR,
					description: `Simulates a user pressing the left mouse button (without \n        releasing it yet).`,
					target: i.ArgTypes.locator
				}],
				["mouseDownAt", {
					name: "mouse down at",
					type: a.LOCATOR,
					description: `Simulates a user pressing the left mouse button (without \n        releasing it yet) at the specified location.`,
					target: i.ArgTypes.locator,
					value: i.ArgTypes.coord
				}],
				["mouseMoveAt", {
					name: "mouse move at",
					type: a.LOCATOR,
					description: `Simulates a user pressing the mouse button (without releasing \n        it yet) on the specified element.`,
					target: i.ArgTypes.locator,
					value: i.ArgTypes.coord
				}],
				["mouseOut", {
					name: "mouse out",
					type: a.LOCATOR,
					description: `Simulates a user moving the mouse pointer away from the specified element.`,
					target: i.ArgTypes.locator
				}],
				["mouseOver", {
					name: "mouse over",
					type: a.LOCATOR,
					description: `Simulates a user hovering a mouse over the specified element.`,
					target: i.ArgTypes.locator
				}],
				["mouseUp", {
					name: "mouse up",
					type: a.LOCATOR,
					description: `Simulates the event that occurs when the user releases the \n        mouse button (e.g., stops holding the button down).`,
					target: i.ArgTypes.locator
				}],
				["mouseUpAt", {
					name: "mouse up at",
					type: a.LOCATOR,
					description: `Simulates the event that occurs when the user releases the \n        mouse button (e.g., stops holding the button down) at the specified location.`,
					target: i.ArgTypes.locator,
					value: i.ArgTypes.coord
				}],
				["open", {
					name: "open",
					description: `Opens a URL and waits for the page to load before proceeding. \n        This accepts both relative and absolute URLs.`,
					target: i.ArgTypes.url
				}],
				["pause", {
					name: "pause",
					description: "Wait for the specified amount of time.",
					target: i.ArgTypes.waitTime
				}],
				["removeSelection", {
					name: "remove selection",
					type: a.LOCATOR,
					description: `Remove a selection from the set of selected options in a \n        multi-select element using an option locator.\n        Option locators provide different ways of specifying a select element (e.g., label=, value=, id=, index=)`,
					target: i.ArgTypes.locator,
					value: i.ArgTypes.optionLocator
				}],
				["repeatIf", {
					name: "repeat if",
					description: `Terminate a 'do' control flow branch conditionally. If \n        the result of the provided conditional expression is true, it starts \n        the do loop over.  Otherwise it ends the loop.`,
					target: i.ArgTypes.conditionalExpression,
					value: r({
						isOptional: !0
					}, i.ArgTypes.loopLimit)
				}],
				["run", {
					name: "run",
					description: "Runs a test case from the current project.",
					target: i.ArgTypes.testCase,
					value: r({
						isOptional: !0
					}, i.ArgTypes.optionalFlag)
				}],
				["runScript", {
					name: "run script",
					description: `Creates a new "script" tag in the body of the current \n        test window, and adds the specified text into the body of the command. \n        Beware that JS exceptions thrown in these script tags aren't managed \n        by Selenium, so you should probably wrap your script in try/catch blocks \n        if there is any chance that the script will throw an exception.`,
					target: i.ArgTypes.script
				}],
				["select", {
					name: "select",
					type: a.LOCATOR,
					description: `Select an element from a drop-down menu using an option \n        locator. Option locators provide different ways of specifying a select \n        element (e.g., label=, value=, id=, index=). If no option locator prefix \n        is provided, a match on the label will be attempted.`,
					target: i.ArgTypes.selectLocator,
					value: i.ArgTypes.optionLocator
				}],
				["selectFrame", {
					name: "select frame",
					type: a.LOCATOR,
					description: `Selects a frame within the current window. You can select a\n        frame by its 0-based index number (e.g., select the first frame with \n        "index=0", or the third frame with "index=2"). For nested frames you will\n        need to invoke this command multiple times (once for each frame in the \n        tree until you reach your desired frame). You can select the parent \n        frame with "relative=parent". To return to the top of the page use \n        "relative=top".`,
					target: i.ArgTypes.locator
				}],
				["selectWindow", {
					name: "select window",
					description: `Selects a popup window using a window locator. Once a \n        popup window has been selected, all commands will go to that window. \n        Window locators use handles to select windows.`,
					target: i.ArgTypes.handle
				}],
				["sendKeys", {
					name: "send keys",
					type: a.LOCATOR,
					description: `Simulates keystroke events on the specified element, as \n        though you typed the value key-by-key. This simulates a real user typing \n        every character in the specified string; it is also bound by the \n        limitations of a real user, like not being able to type into a invisible \n        or read only elements.  This is useful for dynamic UI widgets (like \n        auto-completing combo boxes) that require explicit key events. Unlike \n        the simple "type" command, which forces the specified value into the \n        page directly, this command will not replace the existing content.`,
					target: i.ArgTypes.locator,
					value: i.ArgTypes.keySequence
				}],
				["setSpeed", {
					name: "set speed",
					description: `Set execution speed (e.g., set the millisecond length of \n        a delay which will follow each Selenium operation). By default, there \n        is no such delay, e.g., the delay is 0 milliseconds. This setting is \n        global, and will affect all test runs, until changed.`,
					target: i.ArgTypes.waitTime
				}],
				["setWindowSize", {
					name: "set window size",
					description: "Set the browser's window size, including the browser's interface.",
					target: i.ArgTypes.resolution
				}],
				["store", {
					name: "store",
					description: "Save a target string as a variable for easy re-use.",
					target: i.ArgTypes.text,
					value: i.ArgTypes.variableName
				}],
				["storeAttribute", {
					name: "store attribute",
					description: `Gets the value of an element attribute. The value of the \n        attribute may differ across browsers (this is the case for the "style" \n        attribute, for example).`,
					target: i.ArgTypes.attributeLocator,
					value: i.ArgTypes.variableName
				}],
				["storeJson", {
					name: "store json",
					description: ``,
					target: i.ArgTypes.json,
					value: i.ArgTypes.variableName
				}],
				["storeText", {
					name: "store text",
					type: a.LOCATOR,
					description: `Gets the text of an element and stores it for later use. \n        This works for any element that contains text.`,
					target: i.ArgTypes.locator,
					value: i.ArgTypes.variableName
				}],
				["storeTitle", {
					name: "store title",
					description: "Gets the title of the current page.",
					target: i.ArgTypes.text,
					value: i.ArgTypes.variableName
				}],
				["storeValue", {
					name: "store value",
					type: a.LOCATOR,
					description: `Gets the value of element and stores it for later use. \n        This works for any input type element.`,
					target: i.ArgTypes.locator,
					value: i.ArgTypes.variableName
				}],
				["storeWindowHandle", {
					name: "store window handle",
					description: "Gets the handle of the current page.",
					target: i.ArgTypes.handle
				}],
				["storeXpathCount", {
					name: "store xpath count",
					description: `Gets the number of nodes that match the specified xpath \n        (e.g. "//table" would give the number of tables).`,
					target: i.ArgTypes.xpath,
					value: i.ArgTypes.variableName
				}],
				["submit", {
					name: "submit",
					type: a.LOCATOR,
					description: `Submit the specified form. This is particularly useful for \n        forms without submit buttons, e.g. single-input "Search" forms.`,
					target: i.ArgTypes.formLocator
				}],
				["times", {
					name: "times",
					description: `Create a loop that executes the proceeding commands n number of times.`,
					target: i.ArgTypes.times,
					value: r({
						isOptional: !0
					}, i.ArgTypes.loopLimit)
				}],
				["type", {
					name: "type",
					type: a.LOCATOR,
					description: `Sets the value of an input field, as though you typed it \n        in. Can also be used to set the value of combo boxes, check boxes, etc. \n        In these cases, value should be the value of the option selected, not \n        the visible text.  Chrome only: If a file path is given it will be \n        uploaded to the input (for type=file), NOTE: XPath locators are not \n        supported.`,
					target: i.ArgTypes.locator,
					value: i.ArgTypes.value
				}],
				["uncheck", {
					name: "uncheck",
					type: a.LOCATOR,
					description: "Uncheck a toggle-button (checkbox/radio).",
					target: i.ArgTypes.locator
				}],
				["verify", {
					name: "verify",
					description: `Soft assert that a variable is an expected value. The \n        variable's value will be converted to a string for comparison.\n        The test will continue even if the verify fails.`,
					target: i.ArgTypes.variableName,
					value: i.ArgTypes.expectedValue
				}],
				["verifyChecked", {
					name: "verify checked",
					type: a.LOCATOR,
					description: `Soft assert that a toggle-button (checkbox/radio) has been checked.\n      The test will continue even if the verify fails.`,
					target: i.ArgTypes.locator
				}],
				["verifyEditable", {
					name: "verify editable",
					type: a.LOCATOR,
					description: `Soft assert whether the specified input element is \n        editable (e.g., hasn't been disabled). The test will continue even if the verify fails.`,
					target: i.ArgTypes.locator
				}],
				["verifyElementPresent", {
					name: "verify element present",
					type: a.LOCATOR,
					description: `Soft assert that the specified element is somewhere on the page.\n      The test will continue even if the verify fails.`,
					target: i.ArgTypes.locator
				}],
				["verifyElementNotPresent", {
					name: "verify element not present",
					type: a.LOCATOR,
					description: `Soft assert that the specified element is not somewhere on the page.\n      The test will continue even if the verify fails.`,
					target: i.ArgTypes.locator
				}],
				["verifyNotChecked", {
					name: "verify not checked",
					type: a.LOCATOR,
					description: `Soft assert that a toggle-button (checkbox/radio) has not been checked.\n      The test will continue even if the verify fails.`,
					target: i.ArgTypes.locator
				}],
				["verifyNotEditable", {
					name: "verify not editable",
					type: a.LOCATOR,
					description: `Soft assert whether the specified input element is not \n        editable (e.g., hasn't been disabled). The test will continue even if the verify fails.`,
					target: i.ArgTypes.locator
				}],
				["verifyNotSelectedValue", {
					name: "verify not selected value",
					description: `Soft assert that the expected element has not been chosen \n        in a select menu by its option attribute. The test will continue even if the verify fails.`,
					target: i.ArgTypes.selectLocator,
					value: i.ArgTypes.optionLocator
				}],
				["verifyNotText", {
					name: "verify not text",
					type: a.LOCATOR,
					description: "Soft assert the text of an element is not present. The test will continue even if the verify fails.",
					target: i.ArgTypes.locator,
					value: i.ArgTypes.text
				}],
				["verifySelectedLabel", {
					name: "verify selected label",
					type: a.LOCATOR,
					description: `Soft assert the visible text for a selected option in the \n        specified select element. The test will continue even if the verify fails.`,
					target: i.ArgTypes.selectLocator,
					value: i.ArgTypes.pattern
				}],
				["verifySelectedValue", {
					name: "verify selected value",
					type: a.LOCATOR,
					description: `Soft assert that the expected element has been chosen in \n        a select menu by its option attribute. The test will continue even if the verify fails.`,
					target: i.ArgTypes.selectLocator,
					value: i.ArgTypes.optionLocator
				}],
				["verifyText", {
					name: "verify text",
					type: a.LOCATOR,
					description: "Soft assert the text of an element is present. The test will continue even if the verify fails.",
					target: i.ArgTypes.locator,
					value: i.ArgTypes.text
				}],
				["verifyTitle", {
					name: "verify title",
					description: "Soft assert the title of the current page contains the provided text. The test will continue even if the verify fails.",
					target: i.ArgTypes.text
				}],
				["verifyValue", {
					name: "verify value",
					type: a.LOCATOR,
					description: `Soft assert the (whitespace-trimmed) value of an input \n        field (or anything else with a value parameter). For checkbox/radio \n        elements, the value will be "on" or "off" depending on whether the \n        element is checked or not. The test will continue even if the verify fails.`,
					target: i.ArgTypes.locator,
					value: i.ArgTypes.pattern
				}],
				["waitForElementEditable", {
					name: "wait for element editable",
					type: a.LOCATOR,
					description: "Wait for an element to be editable.",
					target: i.ArgTypes.locator,
					value: i.ArgTypes.waitTime
				}],
				["waitForElementNotEditable", {
					name: "wait for element not editable",
					type: a.LOCATOR,
					description: "Wait for an element to not be editable.",
					target: i.ArgTypes.locator,
					value: i.ArgTypes.waitTime
				}],
				["waitForElementNotPresent", {
					name: "wait for element not present",
					type: a.LOCATOR,
					description: "Wait for a target element to not be present on the page.",
					target: i.ArgTypes.locator,
					value: i.ArgTypes.waitTime
				}],
				["waitForElementNotVisible", {
					name: "wait for element not visible",
					type: a.LOCATOR,
					description: "Wait for a target element to not be visible on the page.",
					target: i.ArgTypes.locator,
					value: i.ArgTypes.waitTime
				}],
				["waitForElementPresent", {
					name: "wait for element present",
					type: a.LOCATOR,
					description: "Wait for a target element to be present on the page.",
					target: i.ArgTypes.locator,
					value: i.ArgTypes.waitTime
				}],
				["waitForElementVisible", {
					name: "wait for element visible",
					type: a.LOCATOR,
					description: "Wait for a target element to be visible on the page.",
					target: i.ArgTypes.locator,
					value: i.ArgTypes.waitTime
				}],
				["waitForText", {
					name: "wait for text",
					type: a.LOCATOR,
					description: "Wait for the text of an element to be equal to the value.",
					target: i.ArgTypes.locator,
					value: i.ArgTypes.text
				}],
				["webdriverAnswerOnVisiblePrompt", {
					name: "webdriver answer on visible prompt",
					description: `Affects a currently showing alert prompt. This command \n        instructs Selenium to provide the specified answer to it. If the alert \n        has not appeared yet then use "answer on next prompt" instead.`,
					target: i.ArgTypes.answer
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
					target: i.ArgTypes.conditionalExpression,
					value: r({
						isOptional: !0
					}, i.ArgTypes.loopLimit)
				}]
			];
			t.Commands = s
		},
		95: function(e, t, n) {
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
					registrationLevel: n
				} = {}) {
					this.startingSyntax = e, this.endingSyntax = t, this.registrationLevel = n, this.clearRegister = this.clearRegister.bind(this), this.emit = this.emit.bind(this), this.register = this.register.bind(this), this.isRegistered = this.isRegistered.bind(this), this.clearRegister()
				}
				clearRegister() {
					this.emitters = []
				}
				async emit({
					isOptional: e,
					test: t,
					suite: n,
					tests: i,
					project: r,
					startingSyntaxOptions: o
				} = {
					isOptional: !1
				}) {
					const a = [];
					let s = 0;
					if (this.startingSyntax) {
						const e = "function" == typeof this.startingSyntax ? this.startingSyntax(o) : this.startingSyntax;
						e.commands ? e.commands.forEach(e => {
							a.push(e), s = e.level
						}) : a.push({
							level: 0,
							statement: e
						})
					}
					const l = t ? t.name : n ? n.name : void 0,
						c = (await Promise.all(this.emitters.map(e => e({
							name: l,
							tests: i,
							project: r
						})))).filter(e => void 0 != e);
					if (!e || c.length) return c.forEach(e => {
						"object" == typeof e ? a.push(e) : "string" == typeof e && e.split("\n").forEach(e => {
							a.push({
								level: this.registrationLevel ? this.registrationLevel : s,
								statement: e
							})
						})
					}), this.endingSyntax && (this.endingSyntax.commands ? this.endingSyntax.commands.forEach(e => {
						a.push(e)
					}) : a.push({
						level: 0,
						statement: this.endingSyntax
					})), {
						commands: a
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
		96: function(e, t, n) {
			"use strict";

			function i(e) {
				return e.replace(/([^a-z0-9]+)/gi, "")
			}

			function r(e) {
				return e.charAt(0).toUpperCase() + e.substr(1)
			}

			function o(e) {
				return e.charAt(0).toLowerCase() + e.substr(1)
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.sanitizeName = i, t.capitalize = r, t.uncapitalize = o, t.default = void 0;
			var a = {
				sanitizeName: i,
				capitalize: r,
				uncapitalize: o
			};
			t.default = a
		},
		97: function(e, t, n) {
			"use strict";
			var i, r = (i = n(98)) && i.__esModule ? i : {
				default: i
			};
			const o = (() => {
					try {
						return (0, r.default)(window.navigator.userAgent)
					} catch (e) {
						return !1
					}
				})(),
				a = o && o.browser ? o.browser : void 0,
				s = a && "Chrome" === a.name,
				l = a && "Firefox" === a.name,
				c = s || l ? a.name : void 0;
			e.exports = {
				userAgent: o,
				browserName: c,
				isChrome: s,
				isFirefox: l
			}
		},
		98: function(e, t, n) {
			var i;
			! function(r, o) {
				"use strict";
				var a = "",
					s = "?",
					l = "function",
					c = "undefined",
					d = "object",
					u = "string",
					p = "model",
					h = "name",
					m = "type",
					f = "vendor",
					g = "version",
					b = "architecture",
					w = "console",
					v = "mobile",
					y = "tablet",
					T = "smarttv",
					x = "wearable",
					O = "embedded",
					A = 255,
					C = {
						extend: function(e, t) {
							var n = {};
							for (var i in e) t[i] && t[i].length % 2 == 0 ? n[i] = t[i].concat(e[i]) : n[i] = e[i];
							return n
						},
						has: function(e, t) {
							return typeof e === u && -1 !== t.toLowerCase().indexOf(e.toLowerCase())
						},
						lowerize: function(e) {
							return e.toLowerCase()
						},
						major: function(e) {
							return typeof e === u ? e.replace(/[^\d\.]/g, "").split(".")[0] : o
						},
						trim: function(e, t) {
							return e = e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""), typeof t === c ? e : e.substring(0, A)
						}
					},
					k = {
						rgx: function(e, t) {
							for (var n, i, r, a, s, c, u = 0; u < t.length && !s;) {
								var p = t[u],
									h = t[u + 1];
								for (n = i = 0; n < p.length && !s;)
									if (s = p[n++].exec(e))
										for (r = 0; r < h.length; r++) c = s[++i], typeof(a = h[r]) === d && a.length > 0 ? 2 == a.length ? typeof a[1] == l ? this[a[0]] = a[1].call(this, c) : this[a[0]] = a[1] : 3 == a.length ? typeof a[1] !== l || a[1].exec && a[1].test ? this[a[0]] = c ? c.replace(a[1], a[2]) : o : this[a[0]] = c ? a[1].call(this, c, a[2]) : o : 4 == a.length && (this[a[0]] = c ? a[3].call(this, c.replace(a[1], a[2])) : o) : this[a] = c || o;
								u += 2
							}
						},
						str: function(e, t) {
							for (var n in t)
								if (typeof t[n] === d && t[n].length > 0) {
									for (var i = 0; i < t[n].length; i++)
										if (C.has(t[n][i], e)) return n === s ? o : n
								} else if (C.has(t[n], e)) return n === s ? o : n;
							return e
						}
					},
					S = {
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
					E = {
						browser: [
							[/\b(?:crmo|crios)\/([\w\.]+)/i],
							[g, [h, "Chrome"]],
							[/edg(?:e|ios|a)?\/([\w\.]+)/i],
							[g, [h, "Edge"]],
							[/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]{3,6})\b.+version\/([\w\.-]+)/i, /(opera)(?:.+version\/|[\/\s]+)([\w\.]+)/i],
							[h, g],
							[/opios[\/\s]+([\w\.]+)/i],
							[g, [h, "Opera Mini"]],
							[/\sopr\/([\w\.]+)/i],
							[g, [h, "Opera"]],
							[/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i, /(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i, /(ba?idubrowser)[\/\s]?([\w\.]+)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i, /(rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([\w\.]+)/i, /(weibo)__([\d\.]+)/i],
							[h, g],
							[/(?:[\s\/]uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],
							[g, [h, "UCBrowser"]],
							[/(?:windowswechat)?\sqbcore\/([\w\.]+)\b.*(?:windowswechat)?/i],
							[g, [h, "WeChat(Win) Desktop"]],
							[/micromessenger\/([\w\.]+)/i],
							[g, [h, "WeChat"]],
							[/konqueror\/([\w\.]+)/i],
							[g, [h, "Konqueror"]],
							[/trident.+rv[:\s]([\w\.]{1,9})\b.+like\sgecko/i],
							[g, [h, "IE"]],
							[/yabrowser\/([\w\.]+)/i],
							[g, [h, "Yandex"]],
							[/(avast|avg)\/([\w\.]+)/i],
							[
								[h, /(.+)/, "$1 Secure Browser"], g
							],
							[/focus\/([\w\.]+)/i],
							[g, [h, "Firefox Focus"]],
							[/opt\/([\w\.]+)/i],
							[g, [h, "Opera Touch"]],
							[/coc_coc_browser\/([\w\.]+)/i],
							[g, [h, "Coc Coc"]],
							[/dolfin\/([\w\.]+)/i],
							[g, [h, "Dolphin"]],
							[/coast\/([\w\.]+)/i],
							[g, [h, "Opera Coast"]],
							[/xiaomi\/miuibrowser\/([\w\.]+)/i],
							[g, [h, "MIUI Browser"]],
							[/fxios\/([\w\.-]+)/i],
							[g, [h, "Firefox"]],
							[/(qihu|qhbrowser|qihoobrowser|360browser)/i],
							[
								[h, "360 Browser"]
							],
							[/(oculus|samsung|sailfish)browser\/([\w\.]+)/i],
							[
								[h, /(.+)/, "$1 Browser"], g
							],
							[/(comodo_dragon)\/([\w\.]+)/i],
							[
								[h, /_/g, " "], g
							],
							[/\s(electron)\/([\w\.]+)\ssafari/i, /(tesla)(?:\sqtcarbrowser|\/(20[12]\d\.[\w\.-]+))/i, /m?(qqbrowser|baiduboxapp|2345Explorer)[\/\s]?([\w\.]+)/i],
							[h, g],
							[/(MetaSr)[\/\s]?([\w\.]+)/i, /(LBBROWSER)/i],
							[h],
							[/;fbav\/([\w\.]+);/i],
							[g, [h, "Facebook"]],
							[/FBAN\/FBIOS|FB_IAB\/FB4A/i],
							[
								[h, "Facebook"]
							],
							[/safari\s(line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(chromium|instagram)[\/\s]([\w\.-]+)/i],
							[h, g],
							[/\bgsa\/([\w\.]+)\s.*safari\//i],
							[g, [h, "GSA"]],
							[/headlesschrome(?:\/([\w\.]+)|\s)/i],
							[g, [h, "Chrome Headless"]],
							[/\swv\).+(chrome)\/([\w\.]+)/i],
							[
								[h, "Chrome WebView"], g
							],
							[/droid.+\sversion\/([\w\.]+)\b.+(?:mobile\ssafari|safari)/i],
							[g, [h, "Android Browser"]],
							[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],
							[h, g],
							[/version\/([\w\.]+)\s.*mobile\/\w+\s(safari)/i],
							[g, [h, "Mobile Safari"]],
							[/version\/([\w\.]+)\s.*(mobile\s?safari|safari)/i],
							[g, h],
							[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
							[h, [g, k.str, S.browser.oldSafari.version]],
							[/(webkit|khtml)\/([\w\.]+)/i],
							[h, g],
							[/(navigator|netscape)\/([\w\.-]+)/i],
							[
								[h, "Netscape"], g
							],
							[/ile\svr;\srv:([\w\.]+)\).+firefox/i],
							[g, [h, "Firefox Reality"]],
							[/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i, /(firefox)\/([\w\.]+)\s[\w\s\-]+\/[\w\.]+$/i, /(mozilla)\/([\w\.]+)\s.+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]*)/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i],
							[h, g]
						],
						cpu: [
							[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],
							[
								[b, "amd64"]
							],
							[/(ia32(?=;))/i],
							[
								[b, C.lowerize]
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
								[b, /ower/, "", C.lowerize]
							],
							[/(sun4\w)[;\)]/i],
							[
								[b, "sparc"]
							],
							[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?:64|(?=v(?:[1-7]|[5-7]1)l?|;|eabi))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],
							[
								[b, C.lowerize]
							]
						],
						device: [
							[/\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus\s10)/i],
							[p, [f, "Samsung"],
								[m, y]
							],
							[/\b((?:s[cgp]h|gt|sm)-\w+|galaxy\snexus)/i, /\ssamsung[\s-]([\w-]+)/i, /sec-(sgh\w+)/i],
							[p, [f, "Samsung"],
								[m, v]
							],
							[/\((ip(?:hone|od)[\s\w]*);/i],
							[p, [f, "Apple"],
								[m, v]
							],
							[/\((ipad);[\w\s\),;-]+apple/i, /applecoremedia\/[\w\.]+\s\((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
							[p, [f, "Apple"],
								[m, y]
							],
							[/\b((?:agr|ags[23]|bah2?|sht?)-a?[lw]\d{2})/i],
							[p, [f, "Huawei"],
								[m, y]
							],
							[/d\/huawei([\w\s-]+)[;\)]/i, /\b(nexus\s6p|vog-[at]?l\d\d|ane-[at]?l[x\d]\d|eml-a?l\d\da?|lya-[at]?l\d[\dc]|clt-a?l\d\di?|ele-l\d\d)/i, /\b(\w{2,4}-[atu][ln][01259][019])[;\)\s]/i],
							[p, [f, "Huawei"],
								[m, v]
							],
							[/\b(poco[\s\w]+)(?:\sbuild|\))/i, /\b;\s(\w+)\sbuild\/hm\1/i, /\b(hm[\s\-_]?note?[\s_]?(?:\d\w)?)\sbuild/i, /\b(redmi[\s\-_]?(?:note|k)?[\w\s_]+)(?:\sbuild|\))/i, /\b(mi[\s\-_]?(?:a\d|one|one[\s_]plus|note lte)?[\s_]?(?:\d?\w?)[\s_]?(?:plus)?)\sbuild/i],
							[
								[p, /_/g, " "],
								[f, "Xiaomi"],
								[m, v]
							],
							[/\b(mi[\s\-_]?(?:pad)(?:[\w\s_]+))(?:\sbuild|\))/i],
							[
								[p, /_/g, " "],
								[f, "Xiaomi"],
								[m, y]
							],
							[/;\s(\w+)\sbuild.+\soppo/i, /\s(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007)\b/i],
							[p, [f, "OPPO"],
								[m, v]
							],
							[/\svivo\s(\w+)(?:\sbuild|\))/i, /\s(v[12]\d{3}\w?[at])(?:\sbuild|;)/i],
							[p, [f, "Vivo"],
								[m, v]
							],
							[/\s(rmx[12]\d{3})(?:\sbuild|;)/i],
							[p, [f, "Realme"],
								[m, v]
							],
							[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)\b[\w\s]+build\//i, /\smot(?:orola)?[\s-](\w*)/i, /((?:moto[\s\w\(\)]+|xt\d{3,4}|nexus\s6)(?=\sbuild|\)))/i],
							[p, [f, "Motorola"],
								[m, v]
							],
							[/\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],
							[p, [f, "Motorola"],
								[m, y]
							],
							[/((?=lg)?[vl]k\-?\d{3})\sbuild|\s3\.[\s\w;-]{10}lg?-([06cv9]{3,4})/i],
							[p, [f, "LG"],
								[m, y]
							],
							[/(lm-?f100[nv]?|nexus\s[45])/i, /lg[e;\s\/-]+((?!browser|netcast)\w+)/i, /\blg(\-?[\d\w]+)\sbuild/i],
							[p, [f, "LG"],
								[m, v]
							],
							[/(ideatab[\w\-\s]+)/i, /lenovo\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+)|yt[\d\w-]{6}|tb[\d\w-]{6})/i],
							[p, [f, "Lenovo"],
								[m, y]
							],
							[/(?:maemo|nokia).*(n900|lumia\s\d+)/i, /nokia[\s_-]?([\w\.-]*)/i],
							[
								[p, /_/g, " "],
								[f, "Nokia"],
								[m, v]
							],
							[/droid.+;\s(pixel\sc)[\s)]/i],
							[p, [f, "Google"],
								[m, y]
							],
							[/droid.+;\s(pixel[\s\daxl]{0,6})(?:\sbuild|\))/i],
							[p, [f, "Google"],
								[m, v]
							],
							[/droid.+\s([c-g]\d{4}|so[-l]\w+|xq-a\w[4-7][12])(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
							[p, [f, "Sony"],
								[m, v]
							],
							[/sony\stablet\s[ps]\sbuild\//i, /(?:sony)?sgp\w+(?:\sbuild\/|\))/i],
							[
								[p, "Xperia Tablet"],
								[f, "Sony"],
								[m, y]
							],
							[/\s(kb2005|in20[12]5|be20[12][59])\b/i, /\ba000(1)\sbuild/i, /\boneplus\s(a\d{4})[\s)]/i],
							[p, [f, "OnePlus"],
								[m, v]
							],
							[/(alexa)webm/i, /(kf[a-z]{2}wi)(\sbuild\/|\))/i, /(kf[a-z]+)(\sbuild\/|\)).+silk\//i],
							[p, [f, "Amazon"],
								[m, y]
							],
							[/(sd|kf)[0349hijorstuw]+(\sbuild\/|\)).+silk\//i],
							[
								[p, "Fire Phone"],
								[f, "Amazon"],
								[m, v]
							],
							[/\((playbook);[\w\s\),;-]+(rim)/i],
							[p, f, [m, y]],
							[/((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10;\s(\w+)/i],
							[p, [f, "BlackBerry"],
								[m, v]
							],
							[/(?:\b|asus_)(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus\s7|padfone|p00[cj])/i],
							[p, [f, "ASUS"],
								[m, y]
							],
							[/\s(z[es]6[027][01][km][ls]|zenfone\s\d\w?)\b/i],
							[p, [f, "ASUS"],
								[m, v]
							],
							[/(nexus\s9)/i],
							[p, [f, "HTC"],
								[m, y]
							],
							[/(htc)[;_\s-]{1,2}([\w\s]+(?=\)|\sbuild)|\w+)/i, /(zte)-(\w*)/i, /(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],
							[f, [p, /_/g, " "],
								[m, v]
							],
							[/droid[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i],
							[p, [f, "Acer"],
								[m, y]
							],
							[/droid.+;\s(m[1-5]\snote)\sbuild/i, /\bmz-([\w-]{2,})/i],
							[p, [f, "Meizu"],
								[m, v]
							],
							[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i, /(microsoft);\s(lumia[\s\w]+)/i, /(lenovo)[_\s-]?([\w-]+)/i, /linux;.+(jolla);/i, /droid.+;\s(oppo)\s?([\w\s]+)\sbuild/i],
							[f, p, [m, v]],
							[/(archos)\s(gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i, /[;\/]\s?(le[\s\-]+pan)[\s\-]+(\w{1,9})\sbuild/i, /[;\/]\s?(trinity)[\-\s]*(t\d{3})\sbuild/i, /\b(gigaset)[\s\-]+(q\w{1,9})\sbuild/i, /\b(vodafone)\s([\w\s]+)(?:\)|\sbuild)/i],
							[f, p, [m, y]],
							[/\s(surface\sduo)\s/i],
							[p, [f, "Microsoft"],
								[m, y]
							],
							[/droid\s[\d\.]+;\s(fp\du?)\sbuild/i],
							[p, [f, "Fairphone"],
								[m, v]
							],
							[/\s(u304aa)\sbuild/i],
							[p, [f, "AT&T"],
								[m, v]
							],
							[/sie-(\w*)/i],
							[p, [f, "Siemens"],
								[m, v]
							],
							[/[;\/]\s?(rct\w+)\sbuild/i],
							[p, [f, "RCA"],
								[m, y]
							],
							[/[;\/\s](venue[\d\s]{2,7})\sbuild/i],
							[p, [f, "Dell"],
								[m, y]
							],
							[/[;\/]\s?(q(?:mv|ta)\w+)\sbuild/i],
							[p, [f, "Verizon"],
								[m, y]
							],
							[/[;\/]\s(?:barnes[&\s]+noble\s|bn[rt])([\w\s\+]*)\sbuild/i],
							[p, [f, "Barnes & Noble"],
								[m, y]
							],
							[/[;\/]\s(tm\d{3}\w+)\sbuild/i],
							[p, [f, "NuVision"],
								[m, y]
							],
							[/;\s(k88)\sbuild/i],
							[p, [f, "ZTE"],
								[m, y]
							],
							[/;\s(nx\d{3}j)\sbuild/i],
							[p, [f, "ZTE"],
								[m, v]
							],
							[/[;\/]\s?(gen\d{3})\sbuild.*49h/i],
							[p, [f, "Swiss"],
								[m, v]
							],
							[/[;\/]\s?(zur\d{3})\sbuild/i],
							[p, [f, "Swiss"],
								[m, y]
							],
							[/[;\/]\s?((zeki)?tb.*\b)\sbuild/i],
							[p, [f, "Zeki"],
								[m, y]
							],
							[/[;\/]\s([yr]\d{2})\sbuild/i, /[;\/]\s(dragon[\-\s]+touch\s|dt)(\w{5})\sbuild/i],
							[
								[f, "Dragon Touch"], p, [m, y]
							],
							[/[;\/]\s?(ns-?\w{0,9})\sbuild/i],
							[p, [f, "Insignia"],
								[m, y]
							],
							[/[;\/]\s?((nxa|Next)-?\w{0,9})\sbuild/i],
							[p, [f, "NextBook"],
								[m, y]
							],
							[/[;\/]\s?(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05]))\sbuild/i],
							[
								[f, "Voice"], p, [m, v]
							],
							[/[;\/]\s?(lvtel\-)?(v1[12])\sbuild/i],
							[
								[f, "LvTel"], p, [m, v]
							],
							[/;\s(ph-1)\s/i],
							[p, [f, "Essential"],
								[m, v]
							],
							[/[;\/]\s?(v(100md|700na|7011|917g).*\b)\sbuild/i],
							[p, [f, "Envizen"],
								[m, y]
							],
							[/[;\/]\s?(trio[\s\w\-\.]+)\sbuild/i],
							[p, [f, "MachSpeed"],
								[m, y]
							],
							[/[;\/]\s?tu_(1491)\sbuild/i],
							[p, [f, "Rotor"],
								[m, y]
							],
							[/(shield[\w\s]+)\sbuild/i],
							[p, [f, "Nvidia"],
								[m, y]
							],
							[/(sprint)\s(\w+)/i],
							[f, p, [m, v]],
							[/(kin\.[onetw]{3})/i],
							[
								[p, /\./g, " "],
								[f, "Microsoft"],
								[m, v]
							],
							[/droid\s[\d\.]+;\s(cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
							[p, [f, "Zebra"],
								[m, y]
							],
							[/droid\s[\d\.]+;\s(ec30|ps20|tc[2-8]\d[kx])\)/i],
							[p, [f, "Zebra"],
								[m, v]
							],
							[/\s(ouya)\s/i, /(nintendo)\s([wids3utch]+)/i],
							[f, p, [m, w]],
							[/droid.+;\s(shield)\sbuild/i],
							[p, [f, "Nvidia"],
								[m, w]
							],
							[/(playstation\s[345portablevi]+)/i],
							[p, [f, "Sony"],
								[m, w]
							],
							[/[\s\(;](xbox(?:\sone)?(?!;\sxbox))[\s\);]/i],
							[p, [f, "Microsoft"],
								[m, w]
							],
							[/smart-tv.+(samsung)/i],
							[f, [m, T]],
							[/hbbtv.+maple;(\d+)/i],
							[
								[p, /^/, "SmartTV"],
								[f, "Samsung"],
								[m, T]
							],
							[/(?:linux;\snetcast.+smarttv|lg\snetcast\.tv-201\d)/i],
							[
								[f, "LG"],
								[m, T]
							],
							[/(apple)\s?tv/i],
							[f, [p, "Apple TV"],
								[m, T]
							],
							[/crkey/i],
							[
								[p, "Chromecast"],
								[f, "Google"],
								[m, T]
							],
							[/droid.+aft([\w])(\sbuild\/|\))/i],
							[p, [f, "Amazon"],
								[m, T]
							],
							[/\(dtv[\);].+(aquos)/i],
							[p, [f, "Sharp"],
								[m, T]
							],
							[/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],
							[
								[f, C.trim],
								[p, C.trim],
								[m, T]
							],
							[/[\s\/\(](android\s|smart[-\s]?|opera\s)tv[;\)\s]/i],
							[
								[m, T]
							],
							[/((pebble))app\/[\d\.]+\s/i],
							[f, p, [m, x]],
							[/droid.+;\s(glass)\s\d/i],
							[p, [f, "Google"],
								[m, x]
							],
							[/droid\s[\d\.]+;\s(wt63?0{2,3})\)/i],
							[p, [f, "Zebra"],
								[m, x]
							],
							[/(tesla)(?:\sqtcarbrowser|\/20[12]\d\.[\w\.-]+)/i],
							[f, [m, O]],
							[/droid .+?; ([^;]+?)(?: build|\) applewebkit).+? mobile safari/i],
							[p, [m, v]],
							[/droid .+?;\s([^;]+?)(?: build|\) applewebkit).+?(?! mobile) safari/i],
							[p, [m, y]],
							[/\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i],
							[
								[m, C.lowerize]
							],
							[/(android[\w\.\s\-]{0,9});.+build/i],
							[p, [f, "Generic"]],
							[/(phone)/i],
							[
								[m, v]
							]
						],
						engine: [
							[/windows.+\sedge\/([\w\.]+)/i],
							[g, [h, "EdgeHTML"]],
							[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
							[g, [h, "Blink"]],
							[/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i],
							[h, g],
							[/rv\:([\w\.]{1,9})\b.+(gecko)/i],
							[g, h]
						],
						os: [
							[/microsoft\s(windows)\s(vista|xp)/i],
							[h, g],
							[/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i, /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)(?!.+xbox)/i],
							[h, [g, k.str, S.os.windows.version]],
							[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
							[
								[h, "Windows"],
								[g, k.str, S.os.windows.version]
							],
							[/ip[honead]{2,4}\b(?:.*os\s([\w]+)\slike\smac|;\sopera)/i, /cfnetwork\/.+darwin/i],
							[
								[g, /_/g, "."],
								[h, "iOS"]
							],
							[/(mac\sos\sx)\s?([\w\s\.]*)/i, /(macintosh|mac(?=_powerpc)\s)(?!.+haiku)/i],
							[
								[h, "Mac OS"],
								[g, /_/g, "."]
							],
							[/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/\s]([\w\.]+)/i, /\((series40);/i],
							[h, g],
							[/\(bb(10);/i],
							[g, [h, "BlackBerry"]],
							[/(?:symbian\s?os|symbos|s60(?=;)|series60)[\/\s-]?([\w\.]*)/i],
							[g, [h, "Symbian"]],
							[/mozilla.+\(mobile;.+gecko.+firefox/i],
							[
								[h, "Firefox OS"]
							],
							[/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
							[g, [h, "webOS"]],
							[/crkey\/([\d\.]+)/i],
							[g, [h, "Chromecast"]],
							[/(cros)\s[\w]+\s([\w\.]+\w)/i],
							[
								[h, "Chromium OS"], g
							],
							[/(nintendo|playstation)\s([wids345portablevuch]+)/i, /(xbox);\s+xbox\s([^\);]+)/i, /(mint)[\/\s\(\)]?(\w*)/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?=\slinux)|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus|raspbian)(?:\sgnu\/linux)?(?:\slinux)?[\/\s-]?(?!chrom|package)([\w\.-]*)/i, /(hurd|linux)\s?([\w\.]*)/i, /(gnu)\s?([\w\.]*)/i, /\s([frentopc-]{0,4}bsd|dragonfly)\s?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku)\s(\w+)/i],
							[h, g],
							[/(sunos)\s?([\w\.\d]*)/i],
							[
								[h, "Solaris"], g
							],
							[/((?:open)?solaris)[\/\s-]?([\w\.]*)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i, /(unix)\s?([\w\.]*)/i],
							[h, g]
						]
					},
					L = function(e, t) {
						if ("object" == typeof e && (t = e, e = o), !(this instanceof L)) return new L(e, t).getResult();
						var n = e || (void 0 !== r && r.navigator && r.navigator.userAgent ? r.navigator.userAgent : a),
							i = t ? C.extend(E, t) : E;
						return this.getBrowser = function() {
							var e = {
								name: o,
								version: o
							};
							return k.rgx.call(e, n, i.browser), e.major = C.major(e.version), e
						}, this.getCPU = function() {
							var e = {
								architecture: o
							};
							return k.rgx.call(e, n, i.cpu), e
						}, this.getDevice = function() {
							var e = {
								vendor: o,
								model: o,
								type: o
							};
							return k.rgx.call(e, n, i.device), e
						}, this.getEngine = function() {
							var e = {
								name: o,
								version: o
							};
							return k.rgx.call(e, n, i.engine), e
						}, this.getOS = function() {
							var e = {
								name: o,
								version: o
							};
							return k.rgx.call(e, n, i.os), e
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
							return n
						}, this.setUA = function(e) {
							return n = typeof e === u && e.length > A ? C.trim(e, A) : e, this
						}, this.setUA(n), this
					};
				L.VERSION = "0.7.28", L.BROWSER = {
					NAME: h,
					MAJOR: "major",
					VERSION: g
				}, L.CPU = {
					ARCHITECTURE: b
				}, L.DEVICE = {
					MODEL: p,
					VENDOR: f,
					TYPE: m,
					CONSOLE: w,
					MOBILE: v,
					SMARTTV: T,
					TABLET: y,
					WEARABLE: x,
					EMBEDDED: O
				}, L.ENGINE = {
					NAME: h,
					VERSION: g
				}, L.OS = {
					NAME: h,
					VERSION: g
				}, typeof t !== c ? (typeof e !== c && e.exports && (t = e.exports = L), t.UAParser = L) : 1 ? (i = function() {
					return L
				}.call(t, n, t, e)) === o || (e.exports = i) : void 0 !== r && (r.UAParser = L);
				var j = void 0 !== r && (r.jQuery || r.Zepto);
				if (j && !j.ua) {
					var R = new L;
					j.ua = R.getResult(), j.ua.get = function() {
						return R.getUA()
					}, j.ua.set = function(e) {
						R.setUA(e);
						var t = R.getResult();
						for (var n in t) j.ua[n] = t[n]
					}
				}
			}("object" == typeof window ? window : this)
		},
		99: function(e, t, n) {
			"use strict";
			e.exports = {
				isProduction: "production" == "production",
				isStaging: "production" == "staging",
				isTest: "production" == "test"
			}
		}
	}, [420])
});
//# sourceMappingURL=record.js.map