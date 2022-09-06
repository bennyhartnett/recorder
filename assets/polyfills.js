! function(e, r) {
	if ("object" == typeof exports && "object" == typeof module) module.exports = r();
	else if ("function" == typeof define && define.amd) define([], r);
	else {
		var s = r();
		for (var g in s)("object" == typeof exports ? exports : e)[g] = s[g]
	}
}("undefined" != typeof self ? self : this, function() {
	return function(e) {
		var r = {};

		function s(g) {
			if (r[g]) return r[g].exports;
			var n = r[g] = {
				i: g,
				l: !1,
				exports: {}
			};
			return e[g].call(n.exports, n, n.exports, s), n.l = !0, n.exports
		}
		return s.m = e, s.c = r, s.d = function(e, r, g) {
			s.o(e, r) || Object.defineProperty(e, r, {
				configurable: !1,
				enumerable: !0,
				get: g
			})
		}, s.n = function(e) {
			var r = e && e.__esModule ? function() {
				return e["default"]
			} : function() {
				return e
			};
			return s.d(r, "a", r), r
		}, s.o = function(e, r) {
			return Object.prototype.hasOwnProperty.call(e, r)
		}, s.p = "/assets/", s(s.s = 353)
	}({
		15: function(e, r, s) {
			var g, n, a;
			! function(s, t) {
				if (1) n = [e], void 0 === (a = "function" == typeof(g = t) ? g.apply(r, n) : g) || (e.exports = a);
				else if (void 0 !== r) t(e);
				else {
					var m = {
						exports: {}
					};
					t(m), s.browser = m.exports
				}
			}(this, function(e) {
				"use strict";
				if ("undefined" == typeof browser || Object.getPrototypeOf(browser) !== Object.prototype) {
					const r = "The message port closed before a response was received.",
						s = "Returning a Promise is the preferred way to send a reply from an onMessage/onMessageExternal listener, as the sendResponse will be removed from the specs (See https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)",
						g = () => {
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
							const g = (e, r) => (...s) => {
									chrome.runtime.lastError ? e.reject(chrome.runtime.lastError) : r.singleCallbackArg || s.length <= 1 ? e.resolve(s[0]) : e.resolve(s)
								},
								n = e => 1 == e ? "argument" : "arguments",
								a = (e, r, s) => new Proxy(r, {
									apply: (r, g, n) => s.call(g, e, ...n)
								});
							let t = Function.call.bind(Object.prototype.hasOwnProperty);
							const m = (e, r = {}, s = {}) => {
									let i = Object.create(null),
										o = {
											has: (r, s) => s in e || s in i,
											get(o, A, l) {
												if (A in i) return i[A];
												if (!(A in e)) return;
												let c = e[A];
												if ("function" == typeof c)
													if ("function" == typeof r[A]) c = a(e, e[A], r[A]);
													else if (t(s, A)) {
													let r = ((e, r) => (function(s, ...a) {
														if (a.length < r.minArgs) throw new Error(`Expected at least ${r.minArgs} ${n(r.minArgs)} for ${e}(), got ${a.length}`);
														if (a.length > r.maxArgs) throw new Error(`Expected at most ${r.maxArgs} ${n(r.maxArgs)} for ${e}(), got ${a.length}`);
														return new Promise((n, t) => {
															if (r.fallbackToNoCallback) try {
																s[e](...a, g({
																	resolve: n,
																	reject: t
																}, r))
															} catch (g) {
																console.warn(`${e} API method doesn't seem to support the callback parameter, ` + "falling back to call it without a callback: ", g), s[e](...a), r.fallbackToNoCallback = !1, r.noCallback = !0, n()
															} else r.noCallback ? (s[e](...a), n()) : s[e](...a, g({
																resolve: n,
																reject: t
															}, r))
														})
													}))(A, s[A]);
													c = a(e, e[A], r)
												} else c = c.bind(e);
												else {
													if ("object" != typeof c || null === c || !t(r, A) && !t(s, A)) return Object.defineProperty(i, A, {
														configurable: !0,
														enumerable: !0,
														get: () => e[A],
														set(r) {
															e[A] = r
														}
													}), c;
													c = m(c, r[A], s[A])
												}
												return i[A] = c, c
											},
											set: (r, s, g, n) => (s in i ? i[s] = g : e[s] = g, !0),
											defineProperty: (e, r, s) => Reflect.defineProperty(i, r, s),
											deleteProperty: (e, r) => Reflect.deleteProperty(i, r)
										},
										A = Object.create(e);
									return new Proxy(A, o)
								},
								i = e => ({
									addListener(r, s, ...g) {
										r.addListener(e.get(s), ...g)
									},
									hasListener: (r, s) => r.hasListener(e.get(s)),
									removeListener(r, s) {
										r.removeListener(e.get(s))
									}
								});
							let o = !1;
							const A = new class extends WeakMap {
									constructor(e, r = void 0) {
										super(r), this.createItem = e
									}
									get(e) {
										return this.has(e) || this.set(e, this.createItem(e)), super.get(e)
									}
								}(e => "function" != typeof e ? e : function(r, g, n) {
									let a, t, m = !1,
										i = new Promise(e => {
											a = function(r) {
												o || (console.warn(s, (new Error).stack), o = !0), m = !0, e(r)
											}
										});
									try {
										t = e(r, g, a)
									} catch (e) {
										t = Promise.reject(e)
									}
									const A = !0 !== t && (e => e && "object" == typeof e && "function" == typeof e.then)(t);
									if (!0 !== t && !A && !m) return !1;
									const l = e => {
										e.then(e => {
											n(e)
										}, e => {
											let r;
											r = e && (e instanceof Error || "string" == typeof e.message) ? e.message : "An unexpected error occurred", n({
												__mozWebExtensionPolyfillReject__: !0,
												message: r
											})
										}).catch(e => {
											console.error("Failed to send onMessage rejected reply", e)
										})
									};
									return l(A ? t : i), !0
								}),
								l = (e, s, g, ...a) => {
									if (a.length < s.minArgs) throw new Error(`Expected at least ${s.minArgs} ${n(s.minArgs)} for ${e}(), got ${a.length}`);
									if (a.length > s.maxArgs) throw new Error(`Expected at most ${s.maxArgs} ${n(s.maxArgs)} for ${e}(), got ${a.length}`);
									return new Promise((e, s) => {
										const n = (({
											reject: e,
											resolve: s
										}, g) => {
											chrome.runtime.lastError ? chrome.runtime.lastError.message === r ? s() : e(chrome.runtime.lastError) : g && g.__mozWebExtensionPolyfillReject__ ? e(new Error(g.message)) : s(g)
										}).bind(null, {
											resolve: e,
											reject: s
										});
										a.push(n), g.sendMessage(...a)
									})
								},
								c = {
									runtime: {
										onMessage: i(A),
										onMessageExternal: i(A),
										sendMessage: l.bind(null, "sendMessage", {
											minArgs: 1,
											maxArgs: 3
										})
									},
									tabs: {
										sendMessage: l.bind(null, "sendMessage", {
											minArgs: 2,
											maxArgs: 3
										})
									}
								},
								x = {
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
									networkPredictionEnabled: x,
									webRTCIPHandlingPolicy: x
								},
								services: {
									passwordSavingEnabled: x
								},
								websites: {
									hyperlinkAuditingEnabled: x,
									referrersEnabled: x
								}
							}, m(chrome, c, e)
						};
					e.exports = g()
				} else e.exports = browser
			})
		},
		353: function(e, r, s) {
			e.exports = s(354)
		},
		354: function(e, r, s) {
			"use strict";
			Object.defineProperty(r, "__esModule", {
				value: !0
			});
			var g = s(15),
				n = s.n(g);
			window.LOG = {
				debug: () => {},
				error: () => {},
				exception: () => {}
			}, window.browser = n.a
		}
	})
});
//# sourceMappingURL=polyfills.js.map