/*! For license information please see index_b44b8ac10928ca1a3f17.js.LICENSE.txt */
"use strict";
(self.webpackChunke20230929version_rpg = self.webpackChunke20230929version_rpg || []).push([[826], {
    51591: function(e, t, r) {
        var n, o = r(81514), i = (r(82526),
        r(41817),
        r(72443),
        r(92401),
        r(8722),
        r(32165),
        r(69007),
        r(16066),
        r(83510),
        r(41840),
        r(6982),
        r(32159),
        r(96649),
        r(39341),
        r(60543),
        r(9170),
        r(92222),
        r(50545),
        r(43290),
        r(57327),
        r(65465),
        r(34553),
        r(84944),
        r(86535),
        r(91038),
        r(26699),
        r(66992),
        r(69600),
        r(21249),
        r(26572),
        r(85827),
        r(96644),
        r(47042),
        r(2707),
        r(38706),
        r(40561),
        r(33792),
        r(99244),
        r(18264),
        r(96078),
        r(4855),
        r(68309),
        r(35837),
        r(38862),
        r(73706),
        r(51532),
        r(99752),
        r(82376),
        r(73181),
        r(23484),
        r(2388),
        r(88621),
        r(60403),
        r(84755),
        r(25438),
        r(90332),
        r(40658),
        r(40197),
        r(44914),
        r(52420),
        r(60160),
        r(60970),
        r(10408),
        r(73689),
        r(9653),
        r(93299),
        r(35192),
        r(33161),
        r(44048),
        r(78285),
        r(44363),
        r(55994),
        r(61874),
        r(9494),
        r(56977),
        r(19601),
        r(59595),
        r(35500),
        r(69720),
        r(43371),
        r(38559),
        r(38880),
        r(49337),
        r(36210),
        r(30489),
        r(43304),
        r(41825),
        r(98410),
        r(72200),
        r(47941),
        r(94869),
        r(33952),
        r(57227),
        r(60514),
        r(41539),
        r(26833),
        r(88674),
        r(17922),
        r(34668),
        r(17727),
        r(36535),
        r(12419),
        r(69596),
        r(52586),
        r(74819),
        r(95683),
        r(39361),
        r(51037),
        r(5898),
        r(67556),
        r(14361),
        r(83593),
        r(39532),
        r(81299),
        r(24603),
        r(74916),
        r(92087),
        r(88386),
        r(77601),
        r(39714),
        r(70189),
        r(79841),
        r(27852),
        r(94953),
        r(32023),
        r(78783),
        r(4723),
        r(76373),
        r(66528),
        r(83112),
        r(38992),
        r(82481),
        r(15306),
        r(68757),
        r(64765),
        r(23123),
        r(23157),
        r(73210),
        r(48702),
        r(55674),
        r(15218),
        r(74475),
        r(57929),
        r(50915),
        r(29253),
        r(42125),
        r(78830),
        r(58734),
        r(29254),
        r(37268),
        r(7397),
        r(60086),
        r(80623),
        r(44197),
        r(76495),
        r(87145),
        r(35109),
        r(65125),
        r(82472),
        r(49743),
        r(8255),
        r(29135),
        r(92990),
        r(18927),
        r(33105),
        r(35035),
        r(74345),
        r(7174),
        r(32846),
        r(98145),
        r(44731),
        r(77209),
        r(96319),
        r(58867),
        r(37789),
        r(33739),
        r(95206),
        r(29368),
        r(14483),
        r(12056),
        r(3462),
        r(30678),
        r(27462),
        r(33824),
        r(55021),
        r(12974),
        r(15016),
        r(4129),
        r(38478),
        r(54747),
        r(33948),
        r(84633),
        r(85844),
        r(60285),
        r(83753),
        r(41637),
        r(35666),
        r(54628)), a = r.n(i), c = r(77623), u = r(3124), s = r.n(u), l = r(10311), f = r.n(l), p = r(26820), h = r.n(p), d = r(46356), y = r.n(d), v = {
            scrollPanel: {
                scrollingX: !1,
                scrollingY: !0
            },
            rail: {
                background: "#CCCCCC",
                size: "0.03rem"
            },
            bar: {
                size: "0.03rem",
                background: "#867656",
                keepShow: !0
            }
        }, b = {
            scrollPanel: {
                scrollingX: !1,
                scrollingY: !0
            },
            rail: {
                background: "#CCCCCC",
                size: "0.03rem"
            },
            bar: {
                size: "0.05rem",
                background: "#bca77b",
                keepShow: !0
            }
        }, m = o.QS.isBili, g = o.QS.sign_type && o.QS.auth_appid && o.QS.authkey_ver && o.QS.authkey, w = function() {
            var e = 2;
            return g ? e = 3 : o.IS_BBS && (e = 1),
            e
        }, O = {
            effect: "fade",
            speed: 600,
            simulateTouch: !1,
            allowTouchMove: !1,
            fadeEffect: {
                crossFade: !0
            }
        }, A = function() {
            var e = f().prototype.$getLang()
              , t = "mhy_presentation_style=fullscreen&mhy_landscape=true&mhy_hide_status_bar=true".concat(m ? "&isBili=1" : "")
              , r = "lang=".concat(e, "&hyl_presentation_style=fullscreen&hyl_hide_status_bar=true&hyl_landscape=true");
            return "".concat(window.location.origin + window.location.pathname, "?").concat(o.IS_SEA ? r : t)
        }, k = r(69182), S = "hkrpg_global", j = r(82975), x = r(115), I = r(41699), E = r.n(I);
        function P(e) {
            return P = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            ,
            P(e)
        }
        function T() {
            T = function() {
                return t
            }
            ;
            var e, t = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function(e, t, r) {
                e[t] = r.value
            }
            , i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag";
            function s(e, t, r) {
                return Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }),
                e[t]
            }
            try {
                s({}, "")
            } catch (e) {
                s = function(e, t, r) {
                    return e[t] = r
                }
            }
            function l(e, t, r, n) {
                var i = t && t.prototype instanceof b ? t : b
                  , a = Object.create(i.prototype)
                  , c = new C(n || []);
                return o(a, "_invoke", {
                    value: x(e, r, c)
                }),
                a
            }
            function f(e, t, r) {
                try {
                    return {
                        type: "normal",
                        arg: e.call(t, r)
                    }
                } catch (e) {
                    return {
                        type: "throw",
                        arg: e
                    }
                }
            }
            t.wrap = l;
            var p = "suspendedStart"
              , h = "suspendedYield"
              , d = "executing"
              , y = "completed"
              , v = {};
            function b() {}
            function m() {}
            function g() {}
            var w = {};
            s(w, a, (function() {
                return this
            }
            ));
            var O = Object.getPrototypeOf
              , A = O && O(O(B([])));
            A && A !== r && n.call(A, a) && (w = A);
            var k = g.prototype = b.prototype = Object.create(w);
            function S(e) {
                ["next", "throw", "return"].forEach((function(t) {
                    s(e, t, (function(e) {
                        return this._invoke(t, e)
                    }
                    ))
                }
                ))
            }
            function j(e, t) {
                function r(o, i, a, c) {
                    var u = f(e[o], e, i);
                    if ("throw" !== u.type) {
                        var s = u.arg
                          , l = s.value;
                        return l && "object" == P(l) && n.call(l, "__await") ? t.resolve(l.__await).then((function(e) {
                            r("next", e, a, c)
                        }
                        ), (function(e) {
                            r("throw", e, a, c)
                        }
                        )) : t.resolve(l).then((function(e) {
                            s.value = e,
                            a(s)
                        }
                        ), (function(e) {
                            return r("throw", e, a, c)
                        }
                        ))
                    }
                    c(u.arg)
                }
                var i;
                o(this, "_invoke", {
                    value: function(e, n) {
                        function o() {
                            return new t((function(t, o) {
                                r(e, n, t, o)
                            }
                            ))
                        }
                        return i = i ? i.then(o, o) : o()
                    }
                })
            }
            function x(t, r, n) {
                var o = p;
                return function(i, a) {
                    if (o === d)
                        throw new Error("Generator is already running");
                    if (o === y) {
                        if ("throw" === i)
                            throw a;
                        return {
                            value: e,
                            done: !0
                        }
                    }
                    for (n.method = i,
                    n.arg = a; ; ) {
                        var c = n.delegate;
                        if (c) {
                            var u = I(c, n);
                            if (u) {
                                if (u === v)
                                    continue;
                                return u
                            }
                        }
                        if ("next" === n.method)
                            n.sent = n._sent = n.arg;
                        else if ("throw" === n.method) {
                            if (o === p)
                                throw o = y,
                                n.arg;
                            n.dispatchException(n.arg)
                        } else
                            "return" === n.method && n.abrupt("return", n.arg);
                        o = d;
                        var s = f(t, r, n);
                        if ("normal" === s.type) {
                            if (o = n.done ? y : h,
                            s.arg === v)
                                continue;
                            return {
                                value: s.arg,
                                done: n.done
                            }
                        }
                        "throw" === s.type && (o = y,
                        n.method = "throw",
                        n.arg = s.arg)
                    }
                }
            }
            function I(t, r) {
                var n = r.method
                  , o = t.iterator[n];
                if (o === e)
                    return r.delegate = null,
                    "throw" === n && t.iterator.return && (r.method = "return",
                    r.arg = e,
                    I(t, r),
                    "throw" === r.method) || "return" !== n && (r.method = "throw",
                    r.arg = new TypeError("The iterator does not provide a '" + n + "' method")),
                    v;
                var i = f(o, t.iterator, r.arg);
                if ("throw" === i.type)
                    return r.method = "throw",
                    r.arg = i.arg,
                    r.delegate = null,
                    v;
                var a = i.arg;
                return a ? a.done ? (r[t.resultName] = a.value,
                r.next = t.nextLoc,
                "return" !== r.method && (r.method = "next",
                r.arg = e),
                r.delegate = null,
                v) : a : (r.method = "throw",
                r.arg = new TypeError("iterator result is not an object"),
                r.delegate = null,
                v)
            }
            function E(e) {
                var t = {
                    tryLoc: e[0]
                };
                1 in e && (t.catchLoc = e[1]),
                2 in e && (t.finallyLoc = e[2],
                t.afterLoc = e[3]),
                this.tryEntries.push(t)
            }
            function L(e) {
                var t = e.completion || {};
                t.type = "normal",
                delete t.arg,
                e.completion = t
            }
            function C(e) {
                this.tryEntries = [{
                    tryLoc: "root"
                }],
                e.forEach(E, this),
                this.reset(!0)
            }
            function B(t) {
                if (t || "" === t) {
                    var r = t[a];
                    if (r)
                        return r.call(t);
                    if ("function" == typeof t.next)
                        return t;
                    if (!isNaN(t.length)) {
                        var o = -1
                          , i = function r() {
                            for (; ++o < t.length; )
                                if (n.call(t, o))
                                    return r.value = t[o],
                                    r.done = !1,
                                    r;
                            return r.value = e,
                            r.done = !0,
                            r
                        };
                        return i.next = i
                    }
                }
                throw new TypeError(P(t) + " is not iterable")
            }
            return m.prototype = g,
            o(k, "constructor", {
                value: g,
                configurable: !0
            }),
            o(g, "constructor", {
                value: m,
                configurable: !0
            }),
            m.displayName = s(g, u, "GeneratorFunction"),
            t.isGeneratorFunction = function(e) {
                var t = "function" == typeof e && e.constructor;
                return !!t && (t === m || "GeneratorFunction" === (t.displayName || t.name))
            }
            ,
            t.mark = function(e) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(e, g) : (e.__proto__ = g,
                s(e, u, "GeneratorFunction")),
                e.prototype = Object.create(k),
                e
            }
            ,
            t.awrap = function(e) {
                return {
                    __await: e
                }
            }
            ,
            S(j.prototype),
            s(j.prototype, c, (function() {
                return this
            }
            )),
            t.AsyncIterator = j,
            t.async = function(e, r, n, o, i) {
                void 0 === i && (i = Promise);
                var a = new j(l(e, r, n, o),i);
                return t.isGeneratorFunction(r) ? a : a.next().then((function(e) {
                    return e.done ? e.value : a.next()
                }
                ))
            }
            ,
            S(k),
            s(k, u, "Generator"),
            s(k, a, (function() {
                return this
            }
            )),
            s(k, "toString", (function() {
                return "[object Generator]"
            }
            )),
            t.keys = function(e) {
                var t = Object(e)
                  , r = [];
                for (var n in t)
                    r.push(n);
                return r.reverse(),
                function e() {
                    for (; r.length; ) {
                        var n = r.pop();
                        if (n in t)
                            return e.value = n,
                            e.done = !1,
                            e
                    }
                    return e.done = !0,
                    e
                }
            }
            ,
            t.values = B,
            C.prototype = {
                constructor: C,
                reset: function(t) {
                    if (this.prev = 0,
                    this.next = 0,
                    this.sent = this._sent = e,
                    this.done = !1,
                    this.delegate = null,
                    this.method = "next",
                    this.arg = e,
                    this.tryEntries.forEach(L),
                    !t)
                        for (var r in this)
                            "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = e)
                },
                stop: function() {
                    this.done = !0;
                    var e = this.tryEntries[0].completion;
                    if ("throw" === e.type)
                        throw e.arg;
                    return this.rval
                },
                dispatchException: function(t) {
                    if (this.done)
                        throw t;
                    var r = this;
                    function o(n, o) {
                        return c.type = "throw",
                        c.arg = t,
                        r.next = n,
                        o && (r.method = "next",
                        r.arg = e),
                        !!o
                    }
                    for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                        var a = this.tryEntries[i]
                          , c = a.completion;
                        if ("root" === a.tryLoc)
                            return o("end");
                        if (a.tryLoc <= this.prev) {
                            var u = n.call(a, "catchLoc")
                              , s = n.call(a, "finallyLoc");
                            if (u && s) {
                                if (this.prev < a.catchLoc)
                                    return o(a.catchLoc, !0);
                                if (this.prev < a.finallyLoc)
                                    return o(a.finallyLoc)
                            } else if (u) {
                                if (this.prev < a.catchLoc)
                                    return o(a.catchLoc, !0)
                            } else {
                                if (!s)
                                    throw new Error("try statement without catch or finally");
                                if (this.prev < a.finallyLoc)
                                    return o(a.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(e, t) {
                    for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                        var o = this.tryEntries[r];
                        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                            var i = o;
                            break
                        }
                    }
                    i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
                    var a = i ? i.completion : {};
                    return a.type = e,
                    a.arg = t,
                    i ? (this.method = "next",
                    this.next = i.finallyLoc,
                    v) : this.complete(a)
                },
                complete: function(e, t) {
                    if ("throw" === e.type)
                        throw e.arg;
                    return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg,
                    this.method = "return",
                    this.next = "end") : "normal" === e.type && t && (this.next = t),
                    v
                },
                finish: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var r = this.tryEntries[t];
                        if (r.finallyLoc === e)
                            return this.complete(r.completion, r.afterLoc),
                            L(r),
                            v
                    }
                },
                catch: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var r = this.tryEntries[t];
                        if (r.tryLoc === e) {
                            var n = r.completion;
                            if ("throw" === n.type) {
                                var o = n.arg;
                                L(r)
                            }
                            return o
                        }
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(t, r, n) {
                    return this.delegate = {
                        iterator: B(t),
                        resultName: r,
                        nextLoc: n
                    },
                    "next" === this.method && (this.arg = e),
                    v
                }
            },
            t
        }
        function L(e, t, r, n, o, i, a) {
            try {
                var c = e[i](a)
                  , u = c.value
            } catch (e) {
                return void r(e)
            }
            c.done ? t(u) : Promise.resolve(u).then(n, o)
        }
        function C(e) {
            return function() {
                var t = this
                  , r = arguments;
                return new Promise((function(n, o) {
                    var i = e.apply(t, r);
                    function a(e) {
                        L(i, n, o, a, c, "next", e)
                    }
                    function c(e) {
                        L(i, n, o, a, c, "throw", e)
                    }
                    a(void 0)
                }
                ))
            }
        }
        var B, _ = !(!window.ActiveXObject && !("ActiveXObject"in window)), G = function(e) {
            return e > 9 ? e : "0".concat(e)
        }, R = function() {
            return (n = n || C(T().mark((function e() {
                var t;
                return T().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.abrupt("return", new Promise((function(e) {
                                return (t = t || C(T().mark((function e(t) {
                                    var r, n;
                                    return T().wrap((function(e) {
                                        for (; ; )
                                            switch (e.prev = e.next) {
                                            case 0:
                                                if (e.prev = 0,
                                                r = "",
                                                !o.IS_BBS) {
                                                    e.next = 9;
                                                    break
                                                }
                                                return e.next = 5,
                                                f().prototype.$bbsApp.getHTTPRequestHeaders();
                                            case 5:
                                                0 === (n = e.sent).retcode && n.data["x-rpc-device_id"] && (r = n.data["x-rpc-device_id"]),
                                                e.next = 12;
                                                break;
                                            case 9:
                                                return e.next = 11,
                                                E().getVisitorId();
                                            case 11:
                                                r = e.sent;
                                            case 12:
                                                t(r),
                                                e.next = 18;
                                                break;
                                            case 15:
                                                e.prev = 15,
                                                e.t0 = e.catch(0),
                                                t("");
                                            case 18:
                                            case "end":
                                                return e.stop()
                                            }
                                    }
                                    ), e, null, [[0, 15]])
                                }
                                )))).apply(this, arguments)
                            }
                            )));
                        case 1:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }, N = function(e) {
            e.stopPropagation()
        }, W = r(9669), Z = ["params"], D = ["errorMessageHandler", "toastPending", "toastError", "method"];
        function z() {
            z = function() {
                return t
            }
            ;
            var e, t = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function(e, t, r) {
                e[t] = r.value
            }
            , i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag";
            function s(e, t, r) {
                return Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }),
                e[t]
            }
            try {
                s({}, "")
            } catch (e) {
                s = function(e, t, r) {
                    return e[t] = r
                }
            }
            function l(e, t, r, n) {
                var i = t && t.prototype instanceof b ? t : b
                  , a = Object.create(i.prototype)
                  , c = new T(n || []);
                return o(a, "_invoke", {
                    value: x(e, r, c)
                }),
                a
            }
            function f(e, t, r) {
                try {
                    return {
                        type: "normal",
                        arg: e.call(t, r)
                    }
                } catch (e) {
                    return {
                        type: "throw",
                        arg: e
                    }
                }
            }
            t.wrap = l;
            var p = "suspendedStart"
              , h = "suspendedYield"
              , d = "executing"
              , y = "completed"
              , v = {};
            function b() {}
            function m() {}
            function g() {}
            var w = {};
            s(w, a, (function() {
                return this
            }
            ));
            var O = Object.getPrototypeOf
              , A = O && O(O(L([])));
            A && A !== r && n.call(A, a) && (w = A);
            var k = g.prototype = b.prototype = Object.create(w);
            function S(e) {
                ["next", "throw", "return"].forEach((function(t) {
                    s(e, t, (function(e) {
                        return this._invoke(t, e)
                    }
                    ))
                }
                ))
            }
            function j(e, t) {
                function r(o, i, a, c) {
                    var u = f(e[o], e, i);
                    if ("throw" !== u.type) {
                        var s = u.arg
                          , l = s.value;
                        return l && "object" == F(l) && n.call(l, "__await") ? t.resolve(l.__await).then((function(e) {
                            r("next", e, a, c)
                        }
                        ), (function(e) {
                            r("throw", e, a, c)
                        }
                        )) : t.resolve(l).then((function(e) {
                            s.value = e,
                            a(s)
                        }
                        ), (function(e) {
                            return r("throw", e, a, c)
                        }
                        ))
                    }
                    c(u.arg)
                }
                var i;
                o(this, "_invoke", {
                    value: function(e, n) {
                        function o() {
                            return new t((function(t, o) {
                                r(e, n, t, o)
                            }
                            ))
                        }
                        return i = i ? i.then(o, o) : o()
                    }
                })
            }
            function x(t, r, n) {
                var o = p;
                return function(i, a) {
                    if (o === d)
                        throw new Error("Generator is already running");
                    if (o === y) {
                        if ("throw" === i)
                            throw a;
                        return {
                            value: e,
                            done: !0
                        }
                    }
                    for (n.method = i,
                    n.arg = a; ; ) {
                        var c = n.delegate;
                        if (c) {
                            var u = I(c, n);
                            if (u) {
                                if (u === v)
                                    continue;
                                return u
                            }
                        }
                        if ("next" === n.method)
                            n.sent = n._sent = n.arg;
                        else if ("throw" === n.method) {
                            if (o === p)
                                throw o = y,
                                n.arg;
                            n.dispatchException(n.arg)
                        } else
                            "return" === n.method && n.abrupt("return", n.arg);
                        o = d;
                        var s = f(t, r, n);
                        if ("normal" === s.type) {
                            if (o = n.done ? y : h,
                            s.arg === v)
                                continue;
                            return {
                                value: s.arg,
                                done: n.done
                            }
                        }
                        "throw" === s.type && (o = y,
                        n.method = "throw",
                        n.arg = s.arg)
                    }
                }
            }
            function I(t, r) {
                var n = r.method
                  , o = t.iterator[n];
                if (o === e)
                    return r.delegate = null,
                    "throw" === n && t.iterator.return && (r.method = "return",
                    r.arg = e,
                    I(t, r),
                    "throw" === r.method) || "return" !== n && (r.method = "throw",
                    r.arg = new TypeError("The iterator does not provide a '" + n + "' method")),
                    v;
                var i = f(o, t.iterator, r.arg);
                if ("throw" === i.type)
                    return r.method = "throw",
                    r.arg = i.arg,
                    r.delegate = null,
                    v;
                var a = i.arg;
                return a ? a.done ? (r[t.resultName] = a.value,
                r.next = t.nextLoc,
                "return" !== r.method && (r.method = "next",
                r.arg = e),
                r.delegate = null,
                v) : a : (r.method = "throw",
                r.arg = new TypeError("iterator result is not an object"),
                r.delegate = null,
                v)
            }
            function E(e) {
                var t = {
                    tryLoc: e[0]
                };
                1 in e && (t.catchLoc = e[1]),
                2 in e && (t.finallyLoc = e[2],
                t.afterLoc = e[3]),
                this.tryEntries.push(t)
            }
            function P(e) {
                var t = e.completion || {};
                t.type = "normal",
                delete t.arg,
                e.completion = t
            }
            function T(e) {
                this.tryEntries = [{
                    tryLoc: "root"
                }],
                e.forEach(E, this),
                this.reset(!0)
            }
            function L(t) {
                if (t || "" === t) {
                    var r = t[a];
                    if (r)
                        return r.call(t);
                    if ("function" == typeof t.next)
                        return t;
                    if (!isNaN(t.length)) {
                        var o = -1
                          , i = function r() {
                            for (; ++o < t.length; )
                                if (n.call(t, o))
                                    return r.value = t[o],
                                    r.done = !1,
                                    r;
                            return r.value = e,
                            r.done = !0,
                            r
                        };
                        return i.next = i
                    }
                }
                throw new TypeError(F(t) + " is not iterable")
            }
            return m.prototype = g,
            o(k, "constructor", {
                value: g,
                configurable: !0
            }),
            o(g, "constructor", {
                value: m,
                configurable: !0
            }),
            m.displayName = s(g, u, "GeneratorFunction"),
            t.isGeneratorFunction = function(e) {
                var t = "function" == typeof e && e.constructor;
                return !!t && (t === m || "GeneratorFunction" === (t.displayName || t.name))
            }
            ,
            t.mark = function(e) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(e, g) : (e.__proto__ = g,
                s(e, u, "GeneratorFunction")),
                e.prototype = Object.create(k),
                e
            }
            ,
            t.awrap = function(e) {
                return {
                    __await: e
                }
            }
            ,
            S(j.prototype),
            s(j.prototype, c, (function() {
                return this
            }
            )),
            t.AsyncIterator = j,
            t.async = function(e, r, n, o, i) {
                void 0 === i && (i = Promise);
                var a = new j(l(e, r, n, o),i);
                return t.isGeneratorFunction(r) ? a : a.next().then((function(e) {
                    return e.done ? e.value : a.next()
                }
                ))
            }
            ,
            S(k),
            s(k, u, "Generator"),
            s(k, a, (function() {
                return this
            }
            )),
            s(k, "toString", (function() {
                return "[object Generator]"
            }
            )),
            t.keys = function(e) {
                var t = Object(e)
                  , r = [];
                for (var n in t)
                    r.push(n);
                return r.reverse(),
                function e() {
                    for (; r.length; ) {
                        var n = r.pop();
                        if (n in t)
                            return e.value = n,
                            e.done = !1,
                            e
                    }
                    return e.done = !0,
                    e
                }
            }
            ,
            t.values = L,
            T.prototype = {
                constructor: T,
                reset: function(t) {
                    if (this.prev = 0,
                    this.next = 0,
                    this.sent = this._sent = e,
                    this.done = !1,
                    this.delegate = null,
                    this.method = "next",
                    this.arg = e,
                    this.tryEntries.forEach(P),
                    !t)
                        for (var r in this)
                            "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = e)
                },
                stop: function() {
                    this.done = !0;
                    var e = this.tryEntries[0].completion;
                    if ("throw" === e.type)
                        throw e.arg;
                    return this.rval
                },
                dispatchException: function(t) {
                    if (this.done)
                        throw t;
                    var r = this;
                    function o(n, o) {
                        return c.type = "throw",
                        c.arg = t,
                        r.next = n,
                        o && (r.method = "next",
                        r.arg = e),
                        !!o
                    }
                    for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                        var a = this.tryEntries[i]
                          , c = a.completion;
                        if ("root" === a.tryLoc)
                            return o("end");
                        if (a.tryLoc <= this.prev) {
                            var u = n.call(a, "catchLoc")
                              , s = n.call(a, "finallyLoc");
                            if (u && s) {
                                if (this.prev < a.catchLoc)
                                    return o(a.catchLoc, !0);
                                if (this.prev < a.finallyLoc)
                                    return o(a.finallyLoc)
                            } else if (u) {
                                if (this.prev < a.catchLoc)
                                    return o(a.catchLoc, !0)
                            } else {
                                if (!s)
                                    throw new Error("try statement without catch or finally");
                                if (this.prev < a.finallyLoc)
                                    return o(a.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(e, t) {
                    for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                        var o = this.tryEntries[r];
                        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                            var i = o;
                            break
                        }
                    }
                    i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
                    var a = i ? i.completion : {};
                    return a.type = e,
                    a.arg = t,
                    i ? (this.method = "next",
                    this.next = i.finallyLoc,
                    v) : this.complete(a)
                },
                complete: function(e, t) {
                    if ("throw" === e.type)
                        throw e.arg;
                    return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg,
                    this.method = "return",
                    this.next = "end") : "normal" === e.type && t && (this.next = t),
                    v
                },
                finish: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var r = this.tryEntries[t];
                        if (r.finallyLoc === e)
                            return this.complete(r.completion, r.afterLoc),
                            P(r),
                            v
                    }
                },
                catch: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var r = this.tryEntries[t];
                        if (r.tryLoc === e) {
                            var n = r.completion;
                            if ("throw" === n.type) {
                                var o = n.arg;
                                P(r)
                            }
                            return o
                        }
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(t, r, n) {
                    return this.delegate = {
                        iterator: L(t),
                        resultName: r,
                        nextLoc: n
                    },
                    "next" === this.method && (this.arg = e),
                    v
                }
            },
            t
        }
        function F(e) {
            return F = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            ,
            F(e)
        }
        function M(e, t, r, n, o, i, a) {
            try {
                var c = e[i](a)
                  , u = c.value
            } catch (e) {
                return void r(e)
            }
            c.done ? t(u) : Promise.resolve(u).then(n, o)
        }
        function H(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                r.push.apply(r, n)
            }
            return r
        }
        function V(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? H(Object(r), !0).forEach((function(t) {
                    var n, o, i;
                    n = e,
                    o = t,
                    i = r[t],
                    (o = function(e) {
                        var t = function(e, t) {
                            if ("object" !== F(e) || null === e)
                                return e;
                            var r = e[Symbol.toPrimitive];
                            if (void 0 !== r) {
                                var n = r.call(e, "string");
                                if ("object" !== F(n))
                                    return n;
                                throw new TypeError("@@toPrimitive must return a primitive value.")
                            }
                            return String(e)
                        }(e);
                        return "symbol" === F(t) ? t : String(t)
                    }(o))in n ? Object.defineProperty(n, o, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : n[o] = i
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : H(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }
                ))
            }
            return e
        }
        function U(e, t) {
            if (null == e)
                return {};
            var r, n, o = function(e, t) {
                if (null == e)
                    return {};
                var r, n, o = {}, i = Object.keys(e);
                for (n = 0; n < i.length; n++)
                    r = i[n],
                    t.indexOf(r) >= 0 || (o[r] = e[r]);
                return o
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (n = 0; n < i.length; n++)
                    r = i[n],
                    t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
            }
            return o
        }
        var Y = null
          , J = r.n(W)().create({
            baseURL: "https://sg-public-api.hoyoverse.com",
            withCredentials: !0
        });
        J.interceptors.request.use((function(e) {
            var t = e.params
              , r = void 0 === t ? {} : t;
            return V(V({}, U(e, Z)), {}, {
                params: V(V({
                    t: _ ? Date.now() : void 0
                }, o.QS.authkey ? o.QS : {}), r)
            })
        }
        ));
        var X = 0;
        function Q() {
            X > 0 && 0 == (X -= 1) && Y && c.F.clear(Y)
        }
        var K = Symbol("needAttention");
        function q(e) {
            var t = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).showError
              , r = void 0 !== t && t;
            if ("function" == typeof e.then)
                return e.then((function(e) {
                    return q(e)
                }
                ));
            var n = e;
            if (0 !== n.data.retcode)
                throw r && (n[K] = !0),
                n;
            return n.data.data
        }
        var $ = Symbol("isRequestError")
          , ee = Symbol("isNetworkError")
          , te = Symbol("isResponseError")
          , re = Symbol("isAxiosResponse");
        J.interceptors.request.use(void 0, (function(e) {
            throw e[$] = !0,
            e
        }
        )),
        J.interceptors.response.use((function(e) {
            return e[re] = !0,
            e
        }
        ), (function(e) {
            throw e.request && e.response ? e[te] = !0 : e[ee] = !0,
            e
        }
        ));
        var ne, oe = function(e) {
            return (B = B || (t = z().mark((function e(t) {
                var r, n, o, i, a, u, s, l, p, h, d, y, v, b, m, g, w, O = arguments;
                return z().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return o = (n = O.length > 1 && void 0 !== O[1] ? O[1] : {}).errorMessageHandler,
                            i = n.toastPending,
                            a = void 0 !== i && i,
                            u = n.toastError,
                            s = void 0 === u || u,
                            l = n.method,
                            p = void 0 === l ? "get" : l,
                            h = U(n, D),
                            d = O.length > 2 && void 0 !== O[2] ? O[2] : p,
                            (y = !0 === a ? {
                                showContent: !1,
                                opacity: 0,
                                duration: 0
                            } : !1 === a ? void 0 : "object" === F(a) ? V({
                                duration: null !== (r = a.duration) && void 0 !== r ? r : 0
                            }, a) : {
                                duration: 0,
                                message: a
                            }) && (A = y,
                            0 === X && (Y = c.F.loading(A)),
                            X += 1),
                            e.prev = 4,
                            e.t0 = q,
                            e.next = 8,
                            J.request(V(V({}, h), {}, {
                                url: t,
                                method: d
                            }));
                        case 8:
                            return e.t1 = e.sent,
                            e.t2 = {
                                showError: !!s
                            },
                            v = (0,
                            e.t0)(e.t1, e.t2),
                            y && Q(),
                            e.abrupt("return", v);
                        case 15:
                            throw e.prev = 15,
                            e.t3 = e.catch(4),
                            y && Q(),
                            s && (b = "",
                            m = "Network Error",
                            e.t3[re] ? b = o ? o(e.t3.data.retcode, e.t3.data.message) : e.t3.data.message || m : (g = f().prototype.$getI18nWord && f().prototype.$getI18nWord("code-429"),
                            b = (429 === e.t3.response.status && g ? g : e.t3.message) || m),
                            (w = b && V(V({
                                duration: 3e3,
                                showContent: !0
                            }, "boolean" == typeof s ? {} : s), {}, {
                                message: b
                            })) && (0,
                            c.F)(w)),
                            e.t3;
                        case 20:
                        case "end":
                            return e.stop()
                        }
                    var A
                }
                ), e, null, [[4, 15]])
            }
            )),
            function() {
                var e = this
                  , r = arguments;
                return new Promise((function(n, o) {
                    var i = t.apply(e, r);
                    function a(e) {
                        M(i, n, o, a, c, "next", e)
                    }
                    function c(e) {
                        M(i, n, o, a, c, "throw", e)
                    }
                    a(void 0)
                }
                ))
            }
            )).apply(this, arguments);
            var t
        }, ie = r(54698), ae = r.n(ie);
        function ce(e) {
            return ce = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            ,
            ce(e)
        }
        function ue(e, t, r) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" !== ce(e) || null === e)
                        return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(e, "string");
                        if ("object" !== ce(n))
                            return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return String(e)
                }(e);
                return "symbol" === ce(t) ? t : String(t)
            }(t))in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r,
            e
        }
        var se = "rpg_version_page_140"
          , le = ["icon_role1", "icon_role2", "icon_role3", "video_keyframes_role1", "video_keyframes_role2", "video_keyframes_role3", "icon_weapon1", "icon_weapon2", "tab1_img_scene1", "tab1_img_scene2", "tab1_img_scene3", "tab1_img_scene4", "tab1_img_scene5", "tab2_img_scene1", "tab2_img_scene2", "tab2_img_scene3", "tab2_img_scene4", "tab1_video_keyframes_scene1", "tab2_video_keyframes_scene1", "icon_enemy1", "icon_enemy2", "icon_enemy3", "icon_enemy4", "video_keyframes_enemy1", "icon_relic1", "icon_relic2", "icon_relic3", "icon_relic4", "main_img_relic1", "main_img_relic2", "main_img_relic3", "main_img_relic4", "img_event_tab1", "img_event_tab2", "img_event_tab3", "img_event_tab4", "img_event_tab5", "img_event_tab6", "video_keyframes_event1", "video_keyframes_event2", "video_keyframes_event3", "video_keyframes_event4", "video_keyframes_event5", "video_keyframes_event6", "img_play1", "img_play2", "img_play3", "img_play4", "img_play5", "img_play6"]
          , fe = ["video_role1", "video_role2", "video_role3", "tab1_video_scene1", "tab2_video_scene1", "video_enemy1", "video_event1", "video_event2", "video_event3", "video_event4", "video_event5", "video_event6"]
          , pe = {
            0: "jingliu",
            1: "topaz",
            2: "guinaifen",
            3: "seele"
        }
          , he = function(e) {
            return e.Home = "Home",
            e.Ava = "Ava",
            e.Light = "Light",
            e.Act = "Act",
            e.Scene = "Scene",
            e.Boss = "Boss",
            e.Yiqi = "Yiqi",
            e.Other = "Other",
            e.Line = "Story",
            e
        }({})
          , de = function(e) {
            return e.character = "Ava",
            e.lightcone = "Light",
            e.mission = "Story",
            e.map = "Scene",
            e.enemy = "Boss",
            e.event = "Act",
            e.mode = "Other",
            e.relic = "Yiqi",
            e
        }({})
          , ye = (ue(ne = {}, he.Home, "1"),
        ue(ne, he.Ava, "2"),
        ue(ne, he.Light, "3"),
        ue(ne, he.Act, "4"),
        ue(ne, he.Scene, "5"),
        ue(ne, he.Boss, "6"),
        ue(ne, he.Yiqi, "7"),
        ue(ne, he.Other, "8"),
        ue(ne, he.Line, "9"),
        ne);
        function ve(e) {
            return ve = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            ,
            ve(e)
        }
        var be, me = ["params"];
        function ge() {
            ge = function() {
                return t
            }
            ;
            var e, t = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function(e, t, r) {
                e[t] = r.value
            }
            , i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag";
            function s(e, t, r) {
                return Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }),
                e[t]
            }
            try {
                s({}, "")
            } catch (e) {
                s = function(e, t, r) {
                    return e[t] = r
                }
            }
            function l(e, t, r, n) {
                var i = t && t.prototype instanceof b ? t : b
                  , a = Object.create(i.prototype)
                  , c = new T(n || []);
                return o(a, "_invoke", {
                    value: x(e, r, c)
                }),
                a
            }
            function f(e, t, r) {
                try {
                    return {
                        type: "normal",
                        arg: e.call(t, r)
                    }
                } catch (e) {
                    return {
                        type: "throw",
                        arg: e
                    }
                }
            }
            t.wrap = l;
            var p = "suspendedStart"
              , h = "suspendedYield"
              , d = "executing"
              , y = "completed"
              , v = {};
            function b() {}
            function m() {}
            function g() {}
            var w = {};
            s(w, a, (function() {
                return this
            }
            ));
            var O = Object.getPrototypeOf
              , A = O && O(O(L([])));
            A && A !== r && n.call(A, a) && (w = A);
            var k = g.prototype = b.prototype = Object.create(w);
            function S(e) {
                ["next", "throw", "return"].forEach((function(t) {
                    s(e, t, (function(e) {
                        return this._invoke(t, e)
                    }
                    ))
                }
                ))
            }
            function j(e, t) {
                function r(o, i, a, c) {
                    var u = f(e[o], e, i);
                    if ("throw" !== u.type) {
                        var s = u.arg
                          , l = s.value;
                        return l && "object" == ve(l) && n.call(l, "__await") ? t.resolve(l.__await).then((function(e) {
                            r("next", e, a, c)
                        }
                        ), (function(e) {
                            r("throw", e, a, c)
                        }
                        )) : t.resolve(l).then((function(e) {
                            s.value = e,
                            a(s)
                        }
                        ), (function(e) {
                            return r("throw", e, a, c)
                        }
                        ))
                    }
                    c(u.arg)
                }
                var i;
                o(this, "_invoke", {
                    value: function(e, n) {
                        function o() {
                            return new t((function(t, o) {
                                r(e, n, t, o)
                            }
                            ))
                        }
                        return i = i ? i.then(o, o) : o()
                    }
                })
            }
            function x(t, r, n) {
                var o = p;
                return function(i, a) {
                    if (o === d)
                        throw new Error("Generator is already running");
                    if (o === y) {
                        if ("throw" === i)
                            throw a;
                        return {
                            value: e,
                            done: !0
                        }
                    }
                    for (n.method = i,
                    n.arg = a; ; ) {
                        var c = n.delegate;
                        if (c) {
                            var u = I(c, n);
                            if (u) {
                                if (u === v)
                                    continue;
                                return u
                            }
                        }
                        if ("next" === n.method)
                            n.sent = n._sent = n.arg;
                        else if ("throw" === n.method) {
                            if (o === p)
                                throw o = y,
                                n.arg;
                            n.dispatchException(n.arg)
                        } else
                            "return" === n.method && n.abrupt("return", n.arg);
                        o = d;
                        var s = f(t, r, n);
                        if ("normal" === s.type) {
                            if (o = n.done ? y : h,
                            s.arg === v)
                                continue;
                            return {
                                value: s.arg,
                                done: n.done
                            }
                        }
                        "throw" === s.type && (o = y,
                        n.method = "throw",
                        n.arg = s.arg)
                    }
                }
            }
            function I(t, r) {
                var n = r.method
                  , o = t.iterator[n];
                if (o === e)
                    return r.delegate = null,
                    "throw" === n && t.iterator.return && (r.method = "return",
                    r.arg = e,
                    I(t, r),
                    "throw" === r.method) || "return" !== n && (r.method = "throw",
                    r.arg = new TypeError("The iterator does not provide a '" + n + "' method")),
                    v;
                var i = f(o, t.iterator, r.arg);
                if ("throw" === i.type)
                    return r.method = "throw",
                    r.arg = i.arg,
                    r.delegate = null,
                    v;
                var a = i.arg;
                return a ? a.done ? (r[t.resultName] = a.value,
                r.next = t.nextLoc,
                "return" !== r.method && (r.method = "next",
                r.arg = e),
                r.delegate = null,
                v) : a : (r.method = "throw",
                r.arg = new TypeError("iterator result is not an object"),
                r.delegate = null,
                v)
            }
            function E(e) {
                var t = {
                    tryLoc: e[0]
                };
                1 in e && (t.catchLoc = e[1]),
                2 in e && (t.finallyLoc = e[2],
                t.afterLoc = e[3]),
                this.tryEntries.push(t)
            }
            function P(e) {
                var t = e.completion || {};
                t.type = "normal",
                delete t.arg,
                e.completion = t
            }
            function T(e) {
                this.tryEntries = [{
                    tryLoc: "root"
                }],
                e.forEach(E, this),
                this.reset(!0)
            }
            function L(t) {
                if (t || "" === t) {
                    var r = t[a];
                    if (r)
                        return r.call(t);
                    if ("function" == typeof t.next)
                        return t;
                    if (!isNaN(t.length)) {
                        var o = -1
                          , i = function r() {
                            for (; ++o < t.length; )
                                if (n.call(t, o))
                                    return r.value = t[o],
                                    r.done = !1,
                                    r;
                            return r.value = e,
                            r.done = !0,
                            r
                        };
                        return i.next = i
                    }
                }
                throw new TypeError(ve(t) + " is not iterable")
            }
            return m.prototype = g,
            o(k, "constructor", {
                value: g,
                configurable: !0
            }),
            o(g, "constructor", {
                value: m,
                configurable: !0
            }),
            m.displayName = s(g, u, "GeneratorFunction"),
            t.isGeneratorFunction = function(e) {
                var t = "function" == typeof e && e.constructor;
                return !!t && (t === m || "GeneratorFunction" === (t.displayName || t.name))
            }
            ,
            t.mark = function(e) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(e, g) : (e.__proto__ = g,
                s(e, u, "GeneratorFunction")),
                e.prototype = Object.create(k),
                e
            }
            ,
            t.awrap = function(e) {
                return {
                    __await: e
                }
            }
            ,
            S(j.prototype),
            s(j.prototype, c, (function() {
                return this
            }
            )),
            t.AsyncIterator = j,
            t.async = function(e, r, n, o, i) {
                void 0 === i && (i = Promise);
                var a = new j(l(e, r, n, o),i);
                return t.isGeneratorFunction(r) ? a : a.next().then((function(e) {
                    return e.done ? e.value : a.next()
                }
                ))
            }
            ,
            S(k),
            s(k, u, "Generator"),
            s(k, a, (function() {
                return this
            }
            )),
            s(k, "toString", (function() {
                return "[object Generator]"
            }
            )),
            t.keys = function(e) {
                var t = Object(e)
                  , r = [];
                for (var n in t)
                    r.push(n);
                return r.reverse(),
                function e() {
                    for (; r.length; ) {
                        var n = r.pop();
                        if (n in t)
                            return e.value = n,
                            e.done = !1,
                            e
                    }
                    return e.done = !0,
                    e
                }
            }
            ,
            t.values = L,
            T.prototype = {
                constructor: T,
                reset: function(t) {
                    if (this.prev = 0,
                    this.next = 0,
                    this.sent = this._sent = e,
                    this.done = !1,
                    this.delegate = null,
                    this.method = "next",
                    this.arg = e,
                    this.tryEntries.forEach(P),
                    !t)
                        for (var r in this)
                            "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = e)
                },
                stop: function() {
                    this.done = !0;
                    var e = this.tryEntries[0].completion;
                    if ("throw" === e.type)
                        throw e.arg;
                    return this.rval
                },
                dispatchException: function(t) {
                    if (this.done)
                        throw t;
                    var r = this;
                    function o(n, o) {
                        return c.type = "throw",
                        c.arg = t,
                        r.next = n,
                        o && (r.method = "next",
                        r.arg = e),
                        !!o
                    }
                    for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                        var a = this.tryEntries[i]
                          , c = a.completion;
                        if ("root" === a.tryLoc)
                            return o("end");
                        if (a.tryLoc <= this.prev) {
                            var u = n.call(a, "catchLoc")
                              , s = n.call(a, "finallyLoc");
                            if (u && s) {
                                if (this.prev < a.catchLoc)
                                    return o(a.catchLoc, !0);
                                if (this.prev < a.finallyLoc)
                                    return o(a.finallyLoc)
                            } else if (u) {
                                if (this.prev < a.catchLoc)
                                    return o(a.catchLoc, !0)
                            } else {
                                if (!s)
                                    throw new Error("try statement without catch or finally");
                                if (this.prev < a.finallyLoc)
                                    return o(a.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(e, t) {
                    for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                        var o = this.tryEntries[r];
                        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                            var i = o;
                            break
                        }
                    }
                    i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
                    var a = i ? i.completion : {};
                    return a.type = e,
                    a.arg = t,
                    i ? (this.method = "next",
                    this.next = i.finallyLoc,
                    v) : this.complete(a)
                },
                complete: function(e, t) {
                    if ("throw" === e.type)
                        throw e.arg;
                    return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg,
                    this.method = "return",
                    this.next = "end") : "normal" === e.type && t && (this.next = t),
                    v
                },
                finish: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var r = this.tryEntries[t];
                        if (r.finallyLoc === e)
                            return this.complete(r.completion, r.afterLoc),
                            P(r),
                            v
                    }
                },
                catch: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var r = this.tryEntries[t];
                        if (r.tryLoc === e) {
                            var n = r.completion;
                            if ("throw" === n.type) {
                                var o = n.arg;
                                P(r)
                            }
                            return o
                        }
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(t, r, n) {
                    return this.delegate = {
                        iterator: L(t),
                        resultName: r,
                        nextLoc: n
                    },
                    "next" === this.method && (this.arg = e),
                    v
                }
            },
            t
        }
        function we(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                r.push.apply(r, n)
            }
            return r
        }
        function Oe(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? we(Object(r), !0).forEach((function(t) {
                    var n, o, i;
                    n = e,
                    o = t,
                    i = r[t],
                    (o = function(e) {
                        var t = function(e, t) {
                            if ("object" !== ve(e) || null === e)
                                return e;
                            var r = e[Symbol.toPrimitive];
                            if (void 0 !== r) {
                                var n = r.call(e, "string");
                                if ("object" !== ve(n))
                                    return n;
                                throw new TypeError("@@toPrimitive must return a primitive value.")
                            }
                            return String(e)
                        }(e);
                        return "symbol" === ve(t) ? t : String(t)
                    }(o))in n ? Object.defineProperty(n, o, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : n[o] = i
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : we(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }
                ))
            }
            return e
        }
        function Ae(e, t) {
            if (null == e)
                return {};
            var r, n, o = function(e, t) {
                if (null == e)
                    return {};
                var r, n, o = {}, i = Object.keys(e);
                for (n = 0; n < i.length; n++)
                    r = i[n],
                    t.indexOf(r) >= 0 || (o[r] = e[r]);
                return o
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (n = 0; n < i.length; n++)
                    r = i[n],
                    t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
            }
            return o
        }
        function ke(e, t, r, n, o, i, a) {
            try {
                var c = e[i](a)
                  , u = c.value
            } catch (e) {
                return void r(e)
            }
            c.done ? t(u) : Promise.resolve(u).then(n, o)
        }
        f().use(a()),
        f().use(c.Z),
        f().use(h()),
        f().use(s(), {
            schemaName: o.IS_SEA ? "hoyolab" : "mihoyobbs"
        }),
        f().use(y(), {
            fullScreen: "rawClip",
            designWidth: 2500,
            designHeight: 1080,
            minRatio: 1.76,
            forceHorizon: !0,
            setCanvasBG: !0,
            el: "#app"
        }),
        window.document.documentElement.setAttribute("area", o.IS_SEA ? "sea" : "cn"),
        window.document.documentElement.setAttribute("device", o.IS_MOB ? "mobile" : "pc"),
        f().use(ae(), {
            siteId: "G-GMQL6QYDNP"
        });
        var Se, je, xe, Ie = r(56739), Ee = r(34271), Pe = r(29636), Te = r(20763), Le = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAMAAADypuvZAAAAkFBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+WABnwAAAAL3RSTlMAHv3MLbuLiAUU6fLUYg8K799e3FwX8+vYlG1fPyQaB/dWULinnWVIDePBsTI4MEVDVRkAAAGaSURBVEjHvZbZloIwDIZpcWjZBFFkR9zHZabv/3aTtkfrXDX1wlwl5/CdhPzlL56M0sNG+Ej4/UiQDAl2Osn6/fSFo8IgjzRF/EkIFFWyWIj8rjolQqAowiIh6EW3+vVRVBjEwNSruS5nGGpkFTCLlEOOpcYgooImBfRBUyFbwwPLVQY5liKB3MEy3UCOpcogp0IkHcyGosxsiw52gKLMbHUH74OkjD7fkGOpkeVKH0jRFGFKH+hjowbDqNmUPjbq9qw1c4K92ajp8Cw7WLY6OzaqagZTtvGigHNgpQLyWp7SDG0eG0Jmupx76OiPt0PhucWwn+hU9W5QmguIoxvUUgkduBP0Iw/PuuWOrZaJD3q5Bd+etwT/eHnWFM+UXj0GDdll+6rXFem9laHOe4r1Xv9ZN9Tioubbbj0H7yVveW/s7r1Mey938t7qk96bOnuvqIv5G97L0d5r9LF7L/mvD62lPliKE31vS+9FU2MTSX3k/wGGupZqOLk3nPcCRdc7bQe5vrdRVP4wjlSdaxzVlI+8R1vVbPA+Gn82DjofHj4l4QAAAABJRU5ErkJggg==";
        function Ce(e) {
            return Ce = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            ,
            Ce(e)
        }
        function Be(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                r.push.apply(r, n)
            }
            return r
        }
        function _e(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Be(Object(r), !0).forEach((function(t) {
                    var n, o, i;
                    n = e,
                    o = t,
                    i = r[t],
                    (o = function(e) {
                        var t = function(e, t) {
                            if ("object" !== Ce(e) || null === e)
                                return e;
                            var r = e[Symbol.toPrimitive];
                            if (void 0 !== r) {
                                var n = r.call(e, "string");
                                if ("object" !== Ce(n))
                                    return n;
                                throw new TypeError("@@toPrimitive must return a primitive value.")
                            }
                            return String(e)
                        }(e);
                        return "symbol" === Ce(t) ? t : String(t)
                    }(o))in n ? Object.defineProperty(n, o, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : n[o] = i
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Be(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }
                ))
            }
            return e
        }
        function Ge() {
            Ge = function() {
                return t
            }
            ;
            var e, t = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function(e, t, r) {
                e[t] = r.value
            }
            , i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag";
            function s(e, t, r) {
                return Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }),
                e[t]
            }
            try {
                s({}, "")
            } catch (e) {
                s = function(e, t, r) {
                    return e[t] = r
                }
            }
            function l(e, t, r, n) {
                var i = t && t.prototype instanceof b ? t : b
                  , a = Object.create(i.prototype)
                  , c = new T(n || []);
                return o(a, "_invoke", {
                    value: x(e, r, c)
                }),
                a
            }
            function f(e, t, r) {
                try {
                    return {
                        type: "normal",
                        arg: e.call(t, r)
                    }
                } catch (e) {
                    return {
                        type: "throw",
                        arg: e
                    }
                }
            }
            t.wrap = l;
            var p = "suspendedStart"
              , h = "suspendedYield"
              , d = "executing"
              , y = "completed"
              , v = {};
            function b() {}
            function m() {}
            function g() {}
            var w = {};
            s(w, a, (function() {
                return this
            }
            ));
            var O = Object.getPrototypeOf
              , A = O && O(O(L([])));
            A && A !== r && n.call(A, a) && (w = A);
            var k = g.prototype = b.prototype = Object.create(w);
            function S(e) {
                ["next", "throw", "return"].forEach((function(t) {
                    s(e, t, (function(e) {
                        return this._invoke(t, e)
                    }
                    ))
                }
                ))
            }
            function j(e, t) {
                function r(o, i, a, c) {
                    var u = f(e[o], e, i);
                    if ("throw" !== u.type) {
                        var s = u.arg
                          , l = s.value;
                        return l && "object" == Ce(l) && n.call(l, "__await") ? t.resolve(l.__await).then((function(e) {
                            r("next", e, a, c)
                        }
                        ), (function(e) {
                            r("throw", e, a, c)
                        }
                        )) : t.resolve(l).then((function(e) {
                            s.value = e,
                            a(s)
                        }
                        ), (function(e) {
                            return r("throw", e, a, c)
                        }
                        ))
                    }
                    c(u.arg)
                }
                var i;
                o(this, "_invoke", {
                    value: function(e, n) {
                        function o() {
                            return new t((function(t, o) {
                                r(e, n, t, o)
                            }
                            ))
                        }
                        return i = i ? i.then(o, o) : o()
                    }
                })
            }
            function x(t, r, n) {
                var o = p;
                return function(i, a) {
                    if (o === d)
                        throw new Error("Generator is already running");
                    if (o === y) {
                        if ("throw" === i)
                            throw a;
                        return {
                            value: e,
                            done: !0
                        }
                    }
                    for (n.method = i,
                    n.arg = a; ; ) {
                        var c = n.delegate;
                        if (c) {
                            var u = I(c, n);
                            if (u) {
                                if (u === v)
                                    continue;
                                return u
                            }
                        }
                        if ("next" === n.method)
                            n.sent = n._sent = n.arg;
                        else if ("throw" === n.method) {
                            if (o === p)
                                throw o = y,
                                n.arg;
                            n.dispatchException(n.arg)
                        } else
                            "return" === n.method && n.abrupt("return", n.arg);
                        o = d;
                        var s = f(t, r, n);
                        if ("normal" === s.type) {
                            if (o = n.done ? y : h,
                            s.arg === v)
                                continue;
                            return {
                                value: s.arg,
                                done: n.done
                            }
                        }
                        "throw" === s.type && (o = y,
                        n.method = "throw",
                        n.arg = s.arg)
                    }
                }
            }
            function I(t, r) {
                var n = r.method
                  , o = t.iterator[n];
                if (o === e)
                    return r.delegate = null,
                    "throw" === n && t.iterator.return && (r.method = "return",
                    r.arg = e,
                    I(t, r),
                    "throw" === r.method) || "return" !== n && (r.method = "throw",
                    r.arg = new TypeError("The iterator does not provide a '" + n + "' method")),
                    v;
                var i = f(o, t.iterator, r.arg);
                if ("throw" === i.type)
                    return r.method = "throw",
                    r.arg = i.arg,
                    r.delegate = null,
                    v;
                var a = i.arg;
                return a ? a.done ? (r[t.resultName] = a.value,
                r.next = t.nextLoc,
                "return" !== r.method && (r.method = "next",
                r.arg = e),
                r.delegate = null,
                v) : a : (r.method = "throw",
                r.arg = new TypeError("iterator result is not an object"),
                r.delegate = null,
                v)
            }
            function E(e) {
                var t = {
                    tryLoc: e[0]
                };
                1 in e && (t.catchLoc = e[1]),
                2 in e && (t.finallyLoc = e[2],
                t.afterLoc = e[3]),
                this.tryEntries.push(t)
            }
            function P(e) {
                var t = e.completion || {};
                t.type = "normal",
                delete t.arg,
                e.completion = t
            }
            function T(e) {
                this.tryEntries = [{
                    tryLoc: "root"
                }],
                e.forEach(E, this),
                this.reset(!0)
            }
            function L(t) {
                if (t || "" === t) {
                    var r = t[a];
                    if (r)
                        return r.call(t);
                    if ("function" == typeof t.next)
                        return t;
                    if (!isNaN(t.length)) {
                        var o = -1
                          , i = function r() {
                            for (; ++o < t.length; )
                                if (n.call(t, o))
                                    return r.value = t[o],
                                    r.done = !1,
                                    r;
                            return r.value = e,
                            r.done = !0,
                            r
                        };
                        return i.next = i
                    }
                }
                throw new TypeError(Ce(t) + " is not iterable")
            }
            return m.prototype = g,
            o(k, "constructor", {
                value: g,
                configurable: !0
            }),
            o(g, "constructor", {
                value: m,
                configurable: !0
            }),
            m.displayName = s(g, u, "GeneratorFunction"),
            t.isGeneratorFunction = function(e) {
                var t = "function" == typeof e && e.constructor;
                return !!t && (t === m || "GeneratorFunction" === (t.displayName || t.name))
            }
            ,
            t.mark = function(e) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(e, g) : (e.__proto__ = g,
                s(e, u, "GeneratorFunction")),
                e.prototype = Object.create(k),
                e
            }
            ,
            t.awrap = function(e) {
                return {
                    __await: e
                }
            }
            ,
            S(j.prototype),
            s(j.prototype, c, (function() {
                return this
            }
            )),
            t.AsyncIterator = j,
            t.async = function(e, r, n, o, i) {
                void 0 === i && (i = Promise);
                var a = new j(l(e, r, n, o),i);
                return t.isGeneratorFunction(r) ? a : a.next().then((function(e) {
                    return e.done ? e.value : a.next()
                }
                ))
            }
            ,
            S(k),
            s(k, u, "Generator"),
            s(k, a, (function() {
                return this
            }
            )),
            s(k, "toString", (function() {
                return "[object Generator]"
            }
            )),
            t.keys = function(e) {
                var t = Object(e)
                  , r = [];
                for (var n in t)
                    r.push(n);
                return r.reverse(),
                function e() {
                    for (; r.length; ) {
                        var n = r.pop();
                        if (n in t)
                            return e.value = n,
                            e.done = !1,
                            e
                    }
                    return e.done = !0,
                    e
                }
            }
            ,
            t.values = L,
            T.prototype = {
                constructor: T,
                reset: function(t) {
                    if (this.prev = 0,
                    this.next = 0,
                    this.sent = this._sent = e,
                    this.done = !1,
                    this.delegate = null,
                    this.method = "next",
                    this.arg = e,
                    this.tryEntries.forEach(P),
                    !t)
                        for (var r in this)
                            "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = e)
                },
                stop: function() {
                    this.done = !0;
                    var e = this.tryEntries[0].completion;
                    if ("throw" === e.type)
                        throw e.arg;
                    return this.rval
                },
                dispatchException: function(t) {
                    if (this.done)
                        throw t;
                    var r = this;
                    function o(n, o) {
                        return c.type = "throw",
                        c.arg = t,
                        r.next = n,
                        o && (r.method = "next",
                        r.arg = e),
                        !!o
                    }
                    for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                        var a = this.tryEntries[i]
                          , c = a.completion;
                        if ("root" === a.tryLoc)
                            return o("end");
                        if (a.tryLoc <= this.prev) {
                            var u = n.call(a, "catchLoc")
                              , s = n.call(a, "finallyLoc");
                            if (u && s) {
                                if (this.prev < a.catchLoc)
                                    return o(a.catchLoc, !0);
                                if (this.prev < a.finallyLoc)
                                    return o(a.finallyLoc)
                            } else if (u) {
                                if (this.prev < a.catchLoc)
                                    return o(a.catchLoc, !0)
                            } else {
                                if (!s)
                                    throw new Error("try statement without catch or finally");
                                if (this.prev < a.finallyLoc)
                                    return o(a.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(e, t) {
                    for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                        var o = this.tryEntries[r];
                        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                            var i = o;
                            break
                        }
                    }
                    i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
                    var a = i ? i.completion : {};
                    return a.type = e,
                    a.arg = t,
                    i ? (this.method = "next",
                    this.next = i.finallyLoc,
                    v) : this.complete(a)
                },
                complete: function(e, t) {
                    if ("throw" === e.type)
                        throw e.arg;
                    return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg,
                    this.method = "return",
                    this.next = "end") : "normal" === e.type && t && (this.next = t),
                    v
                },
                finish: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var r = this.tryEntries[t];
                        if (r.finallyLoc === e)
                            return this.complete(r.completion, r.afterLoc),
                            P(r),
                            v
                    }
                },
                catch: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var r = this.tryEntries[t];
                        if (r.tryLoc === e) {
                            var n = r.completion;
                            if ("throw" === n.type) {
                                var o = n.arg;
                                P(r)
                            }
                            return o
                        }
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(t, r, n) {
                    return this.delegate = {
                        iterator: L(t),
                        resultName: r,
                        nextLoc: n
                    },
                    "next" === this.method && (this.arg = e),
                    v
                }
            },
            t
        }
        function Re(e, t, r, n, o, i, a) {
            try {
                var c = e[i](a)
                  , u = c.value
            } catch (e) {
                return void r(e)
            }
            c.done ? t(u) : Promise.resolve(u).then(n, o)
        }
        function Ne(e) {
            return function() {
                var t = this
                  , r = arguments;
                return new Promise((function(n, o) {
                    var i = e.apply(t, r);
                    function a(e) {
                        Re(i, n, o, a, c, "next", e)
                    }
                    function c(e) {
                        Re(i, n, o, a, c, "throw", e)
                    }
                    a(void 0)
                }
                ))
            }
        }
        var We, Ze, De = function() {
            return (Se = Se || Ne(Ge().mark((function e() {
                var t, r, n = arguments;
                return Ge().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return t = n.length > 0 && void 0 !== n[0] ? n[0] : {},
                            e.next = 3,
                            oe("/event/merlin_v2/v3/flow/run/".concat(S, "/").concat(se, "/2"), t, "get");
                        case 3:
                            return r = e.sent,
                            e.abrupt("return", r);
                        case 5:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }, ze = function() {
            return (je = je || Ne(Ge().mark((function e() {
                var t, r, n = arguments;
                return Ge().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return t = n.length > 0 && void 0 !== n[0] ? n[0] : {},
                            e.next = 3,
                            oe("/event/merlin_v2/v3/flow/run/".concat(S, "/").concat(se, "/1"), t, "post");
                        case 3:
                            return r = e.sent,
                            e.abrupt("return", r);
                        case 5:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }, Fe = function() {
            return (xe = xe || Ne(Ge().mark((function e() {
                var t, r, n = arguments;
                return Ge().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return t = n.length > 0 && void 0 !== n[0] ? n[0] : {},
                            e.next = 3,
                            oe("/flow/run/".concat(S, "/rpg_version_page_out/3"), _e(_e({}, t), {}, {
                                baseURL: "https://sg-public-api.hoyoverse.com/event/merlin_v2/v2"
                            }), "get");
                        case 3:
                            return r = e.sent,
                            e.abrupt("return", r);
                        case 5:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        };
        function Me(e) {
            return Me = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            ,
            Me(e)
        }
        function He() {
            He = function() {
                return t
            }
            ;
            var e, t = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function(e, t, r) {
                e[t] = r.value
            }
            , i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag";
            function s(e, t, r) {
                return Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }),
                e[t]
            }
            try {
                s({}, "")
            } catch (e) {
                s = function(e, t, r) {
                    return e[t] = r
                }
            }
            function l(e, t, r, n) {
                var i = t && t.prototype instanceof b ? t : b
                  , a = Object.create(i.prototype)
                  , c = new T(n || []);
                return o(a, "_invoke", {
                    value: x(e, r, c)
                }),
                a
            }
            function f(e, t, r) {
                try {
                    return {
                        type: "normal",
                        arg: e.call(t, r)
                    }
                } catch (e) {
                    return {
                        type: "throw",
                        arg: e
                    }
                }
            }
            t.wrap = l;
            var p = "suspendedStart"
              , h = "suspendedYield"
              , d = "executing"
              , y = "completed"
              , v = {};
            function b() {}
            function m() {}
            function g() {}
            var w = {};
            s(w, a, (function() {
                return this
            }
            ));
            var O = Object.getPrototypeOf
              , A = O && O(O(L([])));
            A && A !== r && n.call(A, a) && (w = A);
            var k = g.prototype = b.prototype = Object.create(w);
            function S(e) {
                ["next", "throw", "return"].forEach((function(t) {
                    s(e, t, (function(e) {
                        return this._invoke(t, e)
                    }
                    ))
                }
                ))
            }
            function j(e, t) {
                function r(o, i, a, c) {
                    var u = f(e[o], e, i);
                    if ("throw" !== u.type) {
                        var s = u.arg
                          , l = s.value;
                        return l && "object" == Me(l) && n.call(l, "__await") ? t.resolve(l.__await).then((function(e) {
                            r("next", e, a, c)
                        }
                        ), (function(e) {
                            r("throw", e, a, c)
                        }
                        )) : t.resolve(l).then((function(e) {
                            s.value = e,
                            a(s)
                        }
                        ), (function(e) {
                            return r("throw", e, a, c)
                        }
                        ))
                    }
                    c(u.arg)
                }
                var i;
                o(this, "_invoke", {
                    value: function(e, n) {
                        function o() {
                            return new t((function(t, o) {
                                r(e, n, t, o)
                            }
                            ))
                        }
                        return i = i ? i.then(o, o) : o()
                    }
                })
            }
            function x(t, r, n) {
                var o = p;
                return function(i, a) {
                    if (o === d)
                        throw new Error("Generator is already running");
                    if (o === y) {
                        if ("throw" === i)
                            throw a;
                        return {
                            value: e,
                            done: !0
                        }
                    }
                    for (n.method = i,
                    n.arg = a; ; ) {
                        var c = n.delegate;
                        if (c) {
                            var u = I(c, n);
                            if (u) {
                                if (u === v)
                                    continue;
                                return u
                            }
                        }
                        if ("next" === n.method)
                            n.sent = n._sent = n.arg;
                        else if ("throw" === n.method) {
                            if (o === p)
                                throw o = y,
                                n.arg;
                            n.dispatchException(n.arg)
                        } else
                            "return" === n.method && n.abrupt("return", n.arg);
                        o = d;
                        var s = f(t, r, n);
                        if ("normal" === s.type) {
                            if (o = n.done ? y : h,
                            s.arg === v)
                                continue;
                            return {
                                value: s.arg,
                                done: n.done
                            }
                        }
                        "throw" === s.type && (o = y,
                        n.method = "throw",
                        n.arg = s.arg)
                    }
                }
            }
            function I(t, r) {
                var n = r.method
                  , o = t.iterator[n];
                if (o === e)
                    return r.delegate = null,
                    "throw" === n && t.iterator.return && (r.method = "return",
                    r.arg = e,
                    I(t, r),
                    "throw" === r.method) || "return" !== n && (r.method = "throw",
                    r.arg = new TypeError("The iterator does not provide a '" + n + "' method")),
                    v;
                var i = f(o, t.iterator, r.arg);
                if ("throw" === i.type)
                    return r.method = "throw",
                    r.arg = i.arg,
                    r.delegate = null,
                    v;
                var a = i.arg;
                return a ? a.done ? (r[t.resultName] = a.value,
                r.next = t.nextLoc,
                "return" !== r.method && (r.method = "next",
                r.arg = e),
                r.delegate = null,
                v) : a : (r.method = "throw",
                r.arg = new TypeError("iterator result is not an object"),
                r.delegate = null,
                v)
            }
            function E(e) {
                var t = {
                    tryLoc: e[0]
                };
                1 in e && (t.catchLoc = e[1]),
                2 in e && (t.finallyLoc = e[2],
                t.afterLoc = e[3]),
                this.tryEntries.push(t)
            }
            function P(e) {
                var t = e.completion || {};
                t.type = "normal",
                delete t.arg,
                e.completion = t
            }
            function T(e) {
                this.tryEntries = [{
                    tryLoc: "root"
                }],
                e.forEach(E, this),
                this.reset(!0)
            }
            function L(t) {
                if (t || "" === t) {
                    var r = t[a];
                    if (r)
                        return r.call(t);
                    if ("function" == typeof t.next)
                        return t;
                    if (!isNaN(t.length)) {
                        var o = -1
                          , i = function r() {
                            for (; ++o < t.length; )
                                if (n.call(t, o))
                                    return r.value = t[o],
                                    r.done = !1,
                                    r;
                            return r.value = e,
                            r.done = !0,
                            r
                        };
                        return i.next = i
                    }
                }
                throw new TypeError(Me(t) + " is not iterable")
            }
            return m.prototype = g,
            o(k, "constructor", {
                value: g,
                configurable: !0
            }),
            o(g, "constructor", {
                value: m,
                configurable: !0
            }),
            m.displayName = s(g, u, "GeneratorFunction"),
            t.isGeneratorFunction = function(e) {
                var t = "function" == typeof e && e.constructor;
                return !!t && (t === m || "GeneratorFunction" === (t.displayName || t.name))
            }
            ,
            t.mark = function(e) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(e, g) : (e.__proto__ = g,
                s(e, u, "GeneratorFunction")),
                e.prototype = Object.create(k),
                e
            }
            ,
            t.awrap = function(e) {
                return {
                    __await: e
                }
            }
            ,
            S(j.prototype),
            s(j.prototype, c, (function() {
                return this
            }
            )),
            t.AsyncIterator = j,
            t.async = function(e, r, n, o, i) {
                void 0 === i && (i = Promise);
                var a = new j(l(e, r, n, o),i);
                return t.isGeneratorFunction(r) ? a : a.next().then((function(e) {
                    return e.done ? e.value : a.next()
                }
                ))
            }
            ,
            S(k),
            s(k, u, "Generator"),
            s(k, a, (function() {
                return this
            }
            )),
            s(k, "toString", (function() {
                return "[object Generator]"
            }
            )),
            t.keys = function(e) {
                var t = Object(e)
                  , r = [];
                for (var n in t)
                    r.push(n);
                return r.reverse(),
                function e() {
                    for (; r.length; ) {
                        var n = r.pop();
                        if (n in t)
                            return e.value = n,
                            e.done = !1,
                            e
                    }
                    return e.done = !0,
                    e
                }
            }
            ,
            t.values = L,
            T.prototype = {
                constructor: T,
                reset: function(t) {
                    if (this.prev = 0,
                    this.next = 0,
                    this.sent = this._sent = e,
                    this.done = !1,
                    this.delegate = null,
                    this.method = "next",
                    this.arg = e,
                    this.tryEntries.forEach(P),
                    !t)
                        for (var r in this)
                            "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = e)
                },
                stop: function() {
                    this.done = !0;
                    var e = this.tryEntries[0].completion;
                    if ("throw" === e.type)
                        throw e.arg;
                    return this.rval
                },
                dispatchException: function(t) {
                    if (this.done)
                        throw t;
                    var r = this;
                    function o(n, o) {
                        return c.type = "throw",
                        c.arg = t,
                        r.next = n,
                        o && (r.method = "next",
                        r.arg = e),
                        !!o
                    }
                    for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                        var a = this.tryEntries[i]
                          , c = a.completion;
                        if ("root" === a.tryLoc)
                            return o("end");
                        if (a.tryLoc <= this.prev) {
                            var u = n.call(a, "catchLoc")
                              , s = n.call(a, "finallyLoc");
                            if (u && s) {
                                if (this.prev < a.catchLoc)
                                    return o(a.catchLoc, !0);
                                if (this.prev < a.finallyLoc)
                                    return o(a.finallyLoc)
                            } else if (u) {
                                if (this.prev < a.catchLoc)
                                    return o(a.catchLoc, !0)
                            } else {
                                if (!s)
                                    throw new Error("try statement without catch or finally");
                                if (this.prev < a.finallyLoc)
                                    return o(a.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(e, t) {
                    for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                        var o = this.tryEntries[r];
                        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                            var i = o;
                            break
                        }
                    }
                    i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
                    var a = i ? i.completion : {};
                    return a.type = e,
                    a.arg = t,
                    i ? (this.method = "next",
                    this.next = i.finallyLoc,
                    v) : this.complete(a)
                },
                complete: function(e, t) {
                    if ("throw" === e.type)
                        throw e.arg;
                    return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg,
                    this.method = "return",
                    this.next = "end") : "normal" === e.type && t && (this.next = t),
                    v
                },
                finish: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var r = this.tryEntries[t];
                        if (r.finallyLoc === e)
                            return this.complete(r.completion, r.afterLoc),
                            P(r),
                            v
                    }
                },
                catch: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var r = this.tryEntries[t];
                        if (r.tryLoc === e) {
                            var n = r.completion;
                            if ("throw" === n.type) {
                                var o = n.arg;
                                P(r)
                            }
                            return o
                        }
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(t, r, n) {
                    return this.delegate = {
                        iterator: L(t),
                        resultName: r,
                        nextLoc: n
                    },
                    "next" === this.method && (this.arg = e),
                    v
                }
            },
            t
        }
        function Ve(e, t, r, n, o, i, a) {
            try {
                var c = e[i](a)
                  , u = c.value
            } catch (e) {
                return void r(e)
            }
            c.done ? t(u) : Promise.resolve(u).then(n, o)
        }
        function Ue(e) {
            return function() {
                var t = this
                  , r = arguments;
                return new Promise((function(n, o) {
                    var i = e.apply(t, r);
                    function a(e) {
                        Ve(i, n, o, a, c, "next", e)
                    }
                    function c(e) {
                        Ve(i, n, o, a, c, "throw", e)
                    }
                    a(void 0)
                }
                ))
            }
        }
        var Ye, Je, Xe, Qe, Ke, qe, $e, et, tt, rt, nt, ot, it, at = (0,
        i.createStore)({
            state: {
                pageInfo: {},
                isAnimating: !0,
                shareState: !0,
                volume: .5,
                curTab: void 0,
                modelStatus: !1,
                jumpTabIndex: 0
            },
            getters: {
                pageInfoInited: function(e) {
                    return Object.keys(e.pageInfo).length > 0
                },
                tabs: function() {
                    try {
                        return JSON.parse(f().prototype.$getI18nWord("tabs_title"))
                    } catch (e) {
                        return []
                    }
                }
            }
        }), ct = at.updateState, ut = at.state, st = function() {
            return (We = We || Ue(He().mark((function e() {
                var t, r, n;
                return He().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            (0,
                            o.getLang)(o.IS_SEA, S);
                        case 2:
                            return t = e.sent,
                            r = w(),
                            e.next = 6,
                            De({
                                params: {
                                    lang: t,
                                    game_biz: S,
                                    source: r
                                },
                                errorMessageHandler: function(e, t) {
                                    var r = [];
                                    try {
                                        r = JSON.parse(f().prototype.$getI18nWord("ignore_code"))
                                    } catch (e) {
                                        console.log(e)
                                    }
                                    return r.includes(e) ? "" : t
                                }
                            });
                        case 6:
                            n = e.sent,
                            ut.shareState = n.is_reward;
                        case 8:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }, lt = function() {
            return (Ze = Ze || Ue(He().mark((function e() {
                var t, r;
                return He().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            (0,
                            o.getLang)(o.IS_SEA, S);
                        case 2:
                            return t = e.sent,
                            r = w(),
                            e.next = 6,
                            ze({
                                params: {
                                    lang: t,
                                    game_biz: S,
                                    source: r
                                }
                            });
                        case 6:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }, ft = at, pt = r(51319);
        function ht(e) {
            return ht = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            ,
            ht(e)
        }
        function dt() {
            dt = function() {
                return t
            }
            ;
            var e, t = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function(e, t, r) {
                e[t] = r.value
            }
            , i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag";
            function s(e, t, r) {
                return Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }),
                e[t]
            }
            try {
                s({}, "")
            } catch (e) {
                s = function(e, t, r) {
                    return e[t] = r
                }
            }
            function l(e, t, r, n) {
                var i = t && t.prototype instanceof b ? t : b
                  , a = Object.create(i.prototype)
                  , c = new T(n || []);
                return o(a, "_invoke", {
                    value: x(e, r, c)
                }),
                a
            }
            function f(e, t, r) {
                try {
                    return {
                        type: "normal",
                        arg: e.call(t, r)
                    }
                } catch (e) {
                    return {
                        type: "throw",
                        arg: e
                    }
                }
            }
            t.wrap = l;
            var p = "suspendedStart"
              , h = "suspendedYield"
              , d = "executing"
              , y = "completed"
              , v = {};
            function b() {}
            function m() {}
            function g() {}
            var w = {};
            s(w, a, (function() {
                return this
            }
            ));
            var O = Object.getPrototypeOf
              , A = O && O(O(L([])));
            A && A !== r && n.call(A, a) && (w = A);
            var k = g.prototype = b.prototype = Object.create(w);
            function S(e) {
                ["next", "throw", "return"].forEach((function(t) {
                    s(e, t, (function(e) {
                        return this._invoke(t, e)
                    }
                    ))
                }
                ))
            }
            function j(e, t) {
                function r(o, i, a, c) {
                    var u = f(e[o], e, i);
                    if ("throw" !== u.type) {
                        var s = u.arg
                          , l = s.value;
                        return l && "object" == ht(l) && n.call(l, "__await") ? t.resolve(l.__await).then((function(e) {
                            r("next", e, a, c)
                        }
                        ), (function(e) {
                            r("throw", e, a, c)
                        }
                        )) : t.resolve(l).then((function(e) {
                            s.value = e,
                            a(s)
                        }
                        ), (function(e) {
                            return r("throw", e, a, c)
                        }
                        ))
                    }
                    c(u.arg)
                }
                var i;
                o(this, "_invoke", {
                    value: function(e, n) {
                        function o() {
                            return new t((function(t, o) {
                                r(e, n, t, o)
                            }
                            ))
                        }
                        return i = i ? i.then(o, o) : o()
                    }
                })
            }
            function x(t, r, n) {
                var o = p;
                return function(i, a) {
                    if (o === d)
                        throw new Error("Generator is already running");
                    if (o === y) {
                        if ("throw" === i)
                            throw a;
                        return {
                            value: e,
                            done: !0
                        }
                    }
                    for (n.method = i,
                    n.arg = a; ; ) {
                        var c = n.delegate;
                        if (c) {
                            var u = I(c, n);
                            if (u) {
                                if (u === v)
                                    continue;
                                return u
                            }
                        }
                        if ("next" === n.method)
                            n.sent = n._sent = n.arg;
                        else if ("throw" === n.method) {
                            if (o === p)
                                throw o = y,
                                n.arg;
                            n.dispatchException(n.arg)
                        } else
                            "return" === n.method && n.abrupt("return", n.arg);
                        o = d;
                        var s = f(t, r, n);
                        if ("normal" === s.type) {
                            if (o = n.done ? y : h,
                            s.arg === v)
                                continue;
                            return {
                                value: s.arg,
                                done: n.done
                            }
                        }
                        "throw" === s.type && (o = y,
                        n.method = "throw",
                        n.arg = s.arg)
                    }
                }
            }
            function I(t, r) {
                var n = r.method
                  , o = t.iterator[n];
                if (o === e)
                    return r.delegate = null,
                    "throw" === n && t.iterator.return && (r.method = "return",
                    r.arg = e,
                    I(t, r),
                    "throw" === r.method) || "return" !== n && (r.method = "throw",
                    r.arg = new TypeError("The iterator does not provide a '" + n + "' method")),
                    v;
                var i = f(o, t.iterator, r.arg);
                if ("throw" === i.type)
                    return r.method = "throw",
                    r.arg = i.arg,
                    r.delegate = null,
                    v;
                var a = i.arg;
                return a ? a.done ? (r[t.resultName] = a.value,
                r.next = t.nextLoc,
                "return" !== r.method && (r.method = "next",
                r.arg = e),
                r.delegate = null,
                v) : a : (r.method = "throw",
                r.arg = new TypeError("iterator result is not an object"),
                r.delegate = null,
                v)
            }
            function E(e) {
                var t = {
                    tryLoc: e[0]
                };
                1 in e && (t.catchLoc = e[1]),
                2 in e && (t.finallyLoc = e[2],
                t.afterLoc = e[3]),
                this.tryEntries.push(t)
            }
            function P(e) {
                var t = e.completion || {};
                t.type = "normal",
                delete t.arg,
                e.completion = t
            }
            function T(e) {
                this.tryEntries = [{
                    tryLoc: "root"
                }],
                e.forEach(E, this),
                this.reset(!0)
            }
            function L(t) {
                if (t || "" === t) {
                    var r = t[a];
                    if (r)
                        return r.call(t);
                    if ("function" == typeof t.next)
                        return t;
                    if (!isNaN(t.length)) {
                        var o = -1
                          , i = function r() {
                            for (; ++o < t.length; )
                                if (n.call(t, o))
                                    return r.value = t[o],
                                    r.done = !1,
                                    r;
                            return r.value = e,
                            r.done = !0,
                            r
                        };
                        return i.next = i
                    }
                }
                throw new TypeError(ht(t) + " is not iterable")
            }
            return m.prototype = g,
            o(k, "constructor", {
                value: g,
                configurable: !0
            }),
            o(g, "constructor", {
                value: m,
                configurable: !0
            }),
            m.displayName = s(g, u, "GeneratorFunction"),
            t.isGeneratorFunction = function(e) {
                var t = "function" == typeof e && e.constructor;
                return !!t && (t === m || "GeneratorFunction" === (t.displayName || t.name))
            }
            ,
            t.mark = function(e) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(e, g) : (e.__proto__ = g,
                s(e, u, "GeneratorFunction")),
                e.prototype = Object.create(k),
                e
            }
            ,
            t.awrap = function(e) {
                return {
                    __await: e
                }
            }
            ,
            S(j.prototype),
            s(j.prototype, c, (function() {
                return this
            }
            )),
            t.AsyncIterator = j,
            t.async = function(e, r, n, o, i) {
                void 0 === i && (i = Promise);
                var a = new j(l(e, r, n, o),i);
                return t.isGeneratorFunction(r) ? a : a.next().then((function(e) {
                    return e.done ? e.value : a.next()
                }
                ))
            }
            ,
            S(k),
            s(k, u, "Generator"),
            s(k, a, (function() {
                return this
            }
            )),
            s(k, "toString", (function() {
                return "[object Generator]"
            }
            )),
            t.keys = function(e) {
                var t = Object(e)
                  , r = [];
                for (var n in t)
                    r.push(n);
                return r.reverse(),
                function e() {
                    for (; r.length; ) {
                        var n = r.pop();
                        if (n in t)
                            return e.value = n,
                            e.done = !1,
                            e
                    }
                    return e.done = !0,
                    e
                }
            }
            ,
            t.values = L,
            T.prototype = {
                constructor: T,
                reset: function(t) {
                    if (this.prev = 0,
                    this.next = 0,
                    this.sent = this._sent = e,
                    this.done = !1,
                    this.delegate = null,
                    this.method = "next",
                    this.arg = e,
                    this.tryEntries.forEach(P),
                    !t)
                        for (var r in this)
                            "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = e)
                },
                stop: function() {
                    this.done = !0;
                    var e = this.tryEntries[0].completion;
                    if ("throw" === e.type)
                        throw e.arg;
                    return this.rval
                },
                dispatchException: function(t) {
                    if (this.done)
                        throw t;
                    var r = this;
                    function o(n, o) {
                        return c.type = "throw",
                        c.arg = t,
                        r.next = n,
                        o && (r.method = "next",
                        r.arg = e),
                        !!o
                    }
                    for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                        var a = this.tryEntries[i]
                          , c = a.completion;
                        if ("root" === a.tryLoc)
                            return o("end");
                        if (a.tryLoc <= this.prev) {
                            var u = n.call(a, "catchLoc")
                              , s = n.call(a, "finallyLoc");
                            if (u && s) {
                                if (this.prev < a.catchLoc)
                                    return o(a.catchLoc, !0);
                                if (this.prev < a.finallyLoc)
                                    return o(a.finallyLoc)
                            } else if (u) {
                                if (this.prev < a.catchLoc)
                                    return o(a.catchLoc, !0)
                            } else {
                                if (!s)
                                    throw new Error("try statement without catch or finally");
                                if (this.prev < a.finallyLoc)
                                    return o(a.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(e, t) {
                    for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                        var o = this.tryEntries[r];
                        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                            var i = o;
                            break
                        }
                    }
                    i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
                    var a = i ? i.completion : {};
                    return a.type = e,
                    a.arg = t,
                    i ? (this.method = "next",
                    this.next = i.finallyLoc,
                    v) : this.complete(a)
                },
                complete: function(e, t) {
                    if ("throw" === e.type)
                        throw e.arg;
                    return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg,
                    this.method = "return",
                    this.next = "end") : "normal" === e.type && t && (this.next = t),
                    v
                },
                finish: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var r = this.tryEntries[t];
                        if (r.finallyLoc === e)
                            return this.complete(r.completion, r.afterLoc),
                            P(r),
                            v
                    }
                },
                catch: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var r = this.tryEntries[t];
                        if (r.tryLoc === e) {
                            var n = r.completion;
                            if ("throw" === n.type) {
                                var o = n.arg;
                                P(r)
                            }
                            return o
                        }
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(t, r, n) {
                    return this.delegate = {
                        iterator: L(t),
                        resultName: r,
                        nextLoc: n
                    },
                    "next" === this.method && (this.arg = e),
                    v
                }
            },
            t
        }
        function yt(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                r.push.apply(r, n)
            }
            return r
        }
        function vt(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? yt(Object(r), !0).forEach((function(t) {
                    var n, o, i;
                    n = e,
                    o = t,
                    i = r[t],
                    (o = Ot(o))in n ? Object.defineProperty(n, o, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : n[o] = i
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : yt(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }
                ))
            }
            return e
        }
        function bt(e, t, r, n, o, i, a) {
            try {
                var c = e[i](a)
                  , u = c.value
            } catch (e) {
                return void r(e)
            }
            c.done ? t(u) : Promise.resolve(u).then(n, o)
        }
        function mt(e) {
            return function() {
                var t = this
                  , r = arguments;
                return new Promise((function(n, o) {
                    var i = e.apply(t, r);
                    function a(e) {
                        bt(i, n, o, a, c, "next", e)
                    }
                    function c(e) {
                        bt(i, n, o, a, c, "throw", e)
                    }
                    a(void 0)
                }
                ))
            }
        }
        function gt(e, t, r, n) {
            r && Object.defineProperty(e, t, {
                enumerable: r.enumerable,
                configurable: r.configurable,
                writable: r.writable,
                value: r.initializer ? r.initializer.call(n) : void 0
            })
        }
        function wt(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, Ot(n.key), n)
            }
        }
        function Ot(e) {
            var t = function(e, t) {
                if ("object" !== ht(e) || null === e)
                    return e;
                var r = e[Symbol.toPrimitive];
                if (void 0 !== r) {
                    var n = r.call(e, "string");
                    if ("object" !== ht(n))
                        return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(e)
            }(e);
            return "symbol" === ht(t) ? t : String(t)
        }
        function At(e, t) {
            return At = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            ,
            At(e, t)
        }
        function kt(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function St(e) {
            return St = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            ,
            St(e)
        }
        function jt(e, t, r, n, o) {
            var i = {};
            return Object.keys(n).forEach((function(e) {
                i[e] = n[e]
            }
            )),
            i.enumerable = !!i.enumerable,
            i.configurable = !!i.configurable,
            ("value"in i || i.initializer) && (i.writable = !0),
            i = r.slice().reverse().reduce((function(r, n) {
                return n(e, t, r) || r
            }
            ), i),
            o && void 0 !== i.initializer && (i.value = i.initializer ? i.initializer.call(o) : void 0,
            i.initializer = void 0),
            void 0 === i.initializer && (Object.defineProperty(e, t, i),
            i = null),
            i
        }
        var xt, It, Et, Pt, Tt, Lt, Ct, Bt, _t, Gt, Rt = (Ye = (0,
        Ie.wA)({
            components: {
                LangSelect: Pe.Z,
                meAudio: Te.ZP
            }
        }),
        Je = (0,
        Ie.fI)(),
        Xe = (0,
        Ie.fI)(),
        Qe = (0,
        i.State)("shareState"),
        Ke = (0,
        i.State)("volume"),
        qe = (0,
        i.State)("curTab"),
        Ye((et = function(e, t, r) {
            !function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                }),
                t && At(e, t)
            }(s, e);
            var n, i, a, c, u = (a = s,
            c = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }(),
            function() {
                var e, t = St(a);
                if (c) {
                    var r = St(this).constructor;
                    e = Reflect.construct(t, arguments, r)
                } else
                    e = t.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === ht(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return kt(e)
                }(this, e)
            }
            );
            function s() {
                var e;
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, s);
                for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
                    r[n] = arguments[n];
                return gt(e = u.call.apply(u, [this].concat(r)), "isLoading", tt, kt(e)),
                gt(e, "isHome", rt, kt(e)),
                gt(e, "shareState", nt, kt(e)),
                gt(e, "volume", ot, kt(e)),
                gt(e, "curTab", it, kt(e)),
                e.openlink = new pt.OpenLink({
                    bbsApp: e.$bbsApp
                }),
                e.game_uid = "",
                e.themeConfig = {
                    defaultColor: "rgba(0, 0, 0, 0.6)",
                    activeColor: "#C7C7C7",
                    railColor: "#C7C7C7"
                },
                e
            }
            return n = s,
            i = [{
                key: "shareOptsCn",
                get: function() {
                    return {
                        type: "image",
                        title: this.$getI18nWord("share_title"),
                        desc: this.$getI18nWord("share_desc"),
                        url: A(),
                        img_url: m ? this.$getI18nWord("pic_share_bili") : this.$getI18nWord("pic_share")
                    }
                }
            }, {
                key: "shareOptsSea",
                get: function() {
                    return {
                        key: "m20230915hy36bkelts",
                        game_biz: S,
                        title_key: "share_title",
                        desc_key: "share_desc",
                        url: A(),
                        img_key: "pic_share"
                    }
                }
            }, {
                key: "effectSrc",
                get: function() {
                    var e = this
                      , t = Number(this.$getI18nWord("num_roles")) || 1
                      , r = [];
                    return new Array(t).fill(1).forEach((function(t, n) {
                        var o = n + 1;
                        r.push(e.$getI18nWord("audio1_role".concat(o)), e.$getI18nWord("audio2_role".concat(o)))
                    }
                    )),
                    r
                }
            }, {
                key: "showOpenVideoBtn",
                get: function() {
                    return o.IS_SEA || m ? !!this.$getI18nWord("link_video_main") : !!this.$getI18nWord("link_video_id")
                }
            }, {
                key: "isOpera",
                get: function() {
                    var e;
                    return -1 !== (null === (e = window.navigator) || void 0 === e ? void 0 : e.userAgent).indexOf("OPR")
                }
            }, {
                key: "mounted",
                value: function() {}
            }, {
                key: "getInfoByAuthkey",
                value: function() {
                    return (t = t || mt(dt().mark((function e() {
                        var t;
                        return dt().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (o.IS_SEA && o.QS.authkey) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return", "");
                                case 2:
                                    return e.next = 4,
                                    oe("".concat("https://sg-public-api.hoyoverse.com", "/common/badge/v1/login/authKey"), {
                                        params: vt(vt({}, o.QS), {}, {
                                            authkey: o.QS.authkey,
                                            lang: this.$getLang(),
                                            game_biz: o.IS_SEA ? "hkrpg_global" : "hkrpg_cn"
                                        })
                                    }, "get");
                                case 4:
                                    t = e.sent,
                                    this.game_uid = t.game_uid;
                                case 6:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )))).apply(this, arguments)
                }
            }, {
                key: "handleEffectEnd",
                value: function() {
                    ct({
                        volume: .5
                    })
                }
            }, {
                key: "onLangSelect",
                value: function(e) {
                    this.$trackEvent("Button", "Click", "language", ye[this.curTab], {
                        lang: e
                    })
                }
            }, {
                key: "jumpToDownload",
                value: function() {
                    if (this.$trackEvent("Button", "Click", "download", ye[this.curTab]),
                    o.IS_SEA || !o.IS_BBS)
                        if (o.IS_SEA && o.IS_BBS)
                            this.$bbsApp.openSystemBrowser(this.$getI18nWord("link_download_mob"));
                        else {
                            var e = this.$getI18nWord("link_download");
                            !o.IS_SEA && m ? e = this.$getI18nWord("link_download_bili") : o.IS_SEA && o.IS_MOB && (e = this.$getI18nWord("link_download_mob")),
                            e && this.$mJump(e)
                        }
                    else
                        this.openlink.open({
                            host: "mihoyo",
                            type: "deepLink",
                            args: {
                                deep_link: "mihoyobbs://gameCenter/".concat(this.$getI18nWord("download_bbs_id"))
                            }
                        })
                }
            }, {
                key: "handleAudioClick",
                value: function() {
                    this.$trackEvent("Button", "Click", "music", ye[this.curTab])
                }
            }, {
                key: "openVideo",
                value: function() {
                    if (this.$trackEvent("Button", "Click", "pv", ye[this.curTab]),
                    o.IS_SEA || m) {
                        var e = this.$getI18nWord("link_video_main");
                        e && this.$mJump(e)
                    } else
                        this.openlink.open({
                            type: "article",
                            args: {
                                game_id: "6",
                                post_id: this.$getI18nWord("link_video_id")
                            },
                            host: "mihoyo"
                        })
                }
            }, {
                key: "close",
                value: function() {
                    this.$bbsApp.closePage()
                }
            }, {
                key: "onShare",
                value: function(e) {
                    return (r = r || mt(dt().mark((function e(t) {
                        return dt().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (this.$trackEvent("Button", "Click", "share", t.value, {
                                        id: ye[this.curTab]
                                    }),
                                    !g || this.shareState) {
                                        e.next = 7;
                                        break
                                    }
                                    return e.next = 4,
                                    lt();
                                case 4:
                                    return ct({
                                        shareState: !0
                                    }),
                                    e.next = 7,
                                    st();
                                case 7:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )))).apply(this, arguments)
                }
            }, {
                key: "render",
                value: function() {
                    return (0,
                    l.h)("div", {
                        class: Ee.Z.wrap
                    }, [(0,
                    l.h)("div", {
                        class: Ee.Z.leftGroup,
                        directives: [{
                            name: "show",
                            value: !this.isLoading
                        }]
                    }, [o.IS_BBS && (0,
                    l.h)("img", {
                        class: Ee.Z.closeBtn,
                        attrs: {
                            src: Le
                        },
                        on: {
                            click: this.close
                        }
                    })]), (0,
                    l.h)("transition", {
                        attrs: {
                            name: "fade"
                        }
                    }, [(0,
                    l.h)("div", {
                        class: Ee.Z.rightGroup,
                        directives: [{
                            name: "show",
                            value: !this.isLoading
                        }]
                    }, [o.IS_SEA && !o.IS_BBS && (0,
                    l.h)("lang-select", {
                        class: [Ee.Z.btn, Ee.Z.langBtn],
                        ref: "lang",
                        attrs: {
                            icon: "data:image/png;base64,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",
                            lang: this.$getLang(),
                            biz: S,
                            reload: !0,
                            themeConfig: this.themeConfig,
                            preventScroll: !0
                        },
                        on: {
                            select: this.onLangSelect
                        }
                    }), !g && (0,
                    l.h)("img", {
                        class: [Ee.Z.btn, Ee.Z.downloadBtn],
                        attrs: {
                            src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAyVBMVEUAAADk5OTl5eXk5OTk5OTl5eXg4ODk5OTk5OTk5OTk5OTk5OTl5eXk5OTk5OTl5eXk5OTk5OTl5eXq6urm5ubk5OTk5OTj4+Pk5OTl5eXj4+Pm5ubl5eXm5ubl5eXl5eXf39/l5eXV1dXk5ORaWlq8vLzg4OC+vr5jY2Pc3NzNzc3V1dXPz891dXWjo6Pa2trJycne3t7T09PAwMDDw8PLy8vFxcXR0dGVlZWPj4/Hx8etra3X19eLi4tra2uzs7NdXV2hoaF3d3e47vGOAAAAI3RSTlMA3OpaSBUKdpyZ9fDhx724byIHDB+p9ubk19VQTyin9CB2DLRbYt4AAAPiSURBVFjDzZlre5owFMeBatV2VVt7v2/xJAZYAUFtnbPdvv+HmiWB05oEuTzbs/8LLxB/niTnnCQHa4farU63f+2cE3LuXPe7nVbbqq/9m55NFNm9m/1auNb9AzHo4b5VlfZtaJNC2cNRlb52HLJTTqd0z/e+kFL6slcKdzogH8U9d5nEsFGcLF2Pf7o5OC1h3iG2p17IYEss9Ci2ONxl5EkXGwez1K7QX/GIbuhR4PlhausswFbdk0I3PkLcHADmC062xBfpDUQeFbj6sZ3/bAnA3IhoFbkMYMlzDzo28e4uidSUAfMpMYr6G2Te4PLOYN9FbsIimSFOj5wBJJmRF1ob2/aHTkVkp4IYmJf1uq2Z3yNSUTQE8LOZUee6J+64jLmlkQuArHFP8WfJg43KEz1svLcVbzI+WBoMpLRWea8PP0fhgFQFoo0rGddKh6t1GceRcaXT+5iv9JNCXybrJwMxhISKbIb5sUN26HW80czgPXE2jJ2MN3KENwfG6Hh6B4LJwwFEp52RBA6l7SGvBSQzWIoPQwm05R/FtB6QMghEBMr1Ulyeg0/qAYkPc/FBrK5n0kBGawLRxLPUZw7kQLikLpC4IFzg4N1zbsWfAET1gRGA6N5tnmY8SEh9IJmDlycdW/r7oglwAWE2z+0sK/AmQJ5llLZ0Gg4xaQIkMXDpOF/lEIa6yfN1wHCqTRGejOeunHdfa9eTAqQ/x29M49vS67pWP31fwkpt9HssiRIoeJtPL5rULeO5b12l74luTn6NBRGBgqcbTS7d7tpyxJhq3fpZEBEoeD90ri1n1bFE4AlPNxEl0MSTkSaCzxLfxVcTUQILeEhAYBFRAJFXAMQuFxHX8gV55i7jpBiJKOQZJ8XgNp5LkajlUdfTuo3q2JKx9vGbhudvBuBZ59ja0AvGY9kcicjDS4Eu9Dqa5DAdb8XXszJ+L+9XpprkgOlLD0Qi8hCoSV+YYKMiIHGnpAiICVZdAhBoFgLVJQAXqXpAdZHCZbQ+EJdRZaFH4OR7kSYCqCz0ylYEgSU0VbYiymapBlDdLFn2ton8rRTvjeu2c7jhXMIs3wKvJ7u1ftVuOHFLzAECUlnqlhg37T7EtDJO3bTjsYImEFYHqscKPPhwhgHY5OCDRzMPwKvGw18MtIdHXxzd6hweH7XHW+KijbWOt6geEhc1DuBdc4nABwhpgxKBWsTwGMRBgyKGWmbhCUCTMotaCKI+NCwEqaWq+a5S1VwpVZUrpkUKTS2m/dVyX/OCZL2SKUtRmpLp478t6jYvO5s1alAYN5fuD0y0g7PW//Bw4cPjjyvx+OOqzOOPPxFXxgmJMc5HAAAAAElFTkSuQmCC"
                        },
                        on: {
                            click: this.jumpToDownload
                        }
                    }), (0,
                    l.h)("me-audio", {
                        ref: "audio",
                        class: [Ee.Z.btn, Ee.Z.audioBtn],
                        attrs: {
                            activeIcon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAA5FBMVEUAAADg4ODk5OTk5OTk5OTj4+Pk5OTj4+Pk5OTk5OTl5eXk5OTk5OTk5OTk5OTk5OTk5OTj4+Pl5eXo6Ojj4+Pl5eXk5OTl5eXo6Ojl5eXj4+Pl5eXk5OTk5OTm5ubl5eXm5ubm5ubl5eXk5OTj4+Pk5OTk5ORaWlq8vLzj4+O+vr7e3t7c3NxqamphYWHa2trV1dXQ0NDOzs7g4ODGxsbMzMzKysrIyMjDw8OIiIjAwMB/f3/T09PX19d4eHjBwcFcXFy1tbWwsLBzc3NtbW2oqKicnJyTk5OEhIRnZ2eLi4ugoKDdRqqRAAAAJnRSTlMACnZI9CDrnPDl4d3a1r2Zb1tYFhUHx5wM6d24qfZQTygjp9y4xdL8UJ4AAARJSURBVFjDzZl5d5swDMAZbEnXM23aptfuzciGciUBlvvqse37f58lsYlJjA2B9/amf8ID/ItkyZIttBy5NPTW6cntB4Q+3J6ctnTjUisvbz6eHSNBjs8+vimFM76+RRJ5+9XYW7nGEVLKUeNmH5xeQ7lS0wtbfnGICsnhRSHcu/v0IGx7QRT3YCm9OAo8G6effn+Xzzs/SNG8kMCOkNBLMQ/Oc3BXdf6yG671ivyhbeGlWK7nR2tdQ5e/Vb9ShvE1x3UAoDOw0Y7Yg/UDjry+VEzft82w5SgSWChTrIAskZu/+iadyM/vk7kbECB+G0ml7S+RQTKX7z9n874kPGT5cZfi5MguQGwnxC9ZvOYd965loVxxx0A8dn3XzPDvD7Sn4AjATzwj+rpOX+oS0sVFkT5AN4keIZ7p/S4AfylfPP7y+U7AsPVBVkCCCstwY/XBdvDco8JAN376PXKc2UbHIb2638ovCBUwGfvw53UxMdey2MwjYdFzkcp/NF8pnGJFs5f+LzMlj4hJCDEdcMjzo85oChMTjgjEYwjolZ7wbmpUC1cg4lliohyIXABqdC2pCg36IAqF1PKbA+RA1IUOvWgw4BH7o/Hu+p2ahYBtAi6tXKxe0tsd8KUKqoHIT1Sk1fWBKUiEBPNTDRRVfFjHzFvm/QCVBaIAQroDWEXOJ+pPAKso8PH1eb4NtABohHxaAs/YEopRPnAy//lEVlWvz4HMATQ1ni2Bx8zigRrojF5mSR0RgQNm8/Gy0FGLCdiZQGbiNKAekwFtINTmpmawGz2UCaQmUlEAUY8pZLB17EGUCXS4YmpgBB5bzy3mdz8baBUE+hCwUnDK/mBYDThkJp5qJ+vfGOxqQJuF3YlWY3NqVQNazKu3Gl14ALgaEAPQxaehUsC5DIjLAf2JFFjK5HbflJpcwint3sg0pU5Rhs1IBLZnfVoBZWGjCuxgIgDDhUlFGtiKpefOzV1gh9dn2dKTJQccPD2au0CX7x2kySE7fQ2fVzQB+Mx50vTFE2xqKFlpIgLxYwq4kCTYrBJAJmYmcGCm5FVWAsQixWZKBPpp4FRWpMQy+mxKgJbDH8zbsjIqFvp5Grg17oXfD5Cs0ItbEScF7G9H5iJxcRch2VZE3Cw5wkxx4ouzwv2hISLbLGlH2yqOOG8k5CC7Q9ipTb6d0xqJitSQ2Yb3a4DkIttw8i2xDeBuzf1IyVNsiTU98dWYmjgdOROnP8VKjnTTzo8VOIYQFRfxWCEcfGwCfnGSePARj2YegLcfj4+4zzw8+vToVv3wqJ3zw56HKhxvudQ5sfA8DjivJbYIrvkxPcSF4iVUtgh4E8MjMHYrNDHENosdA1Rqs4iNoAAqNYJ48NyVaVXdvdunmWYJNGUzTfR1a992X+vqHzUk1S1TskbltkyrN3X/eduZy02JxniV1v2D8T98XKDSNPT66vMHxqvPH3XdaOYM+AtG1giJejGtlAAAAABJRU5ErkJggg==",
                            icon: "data:image/png;base64,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",
                            src: this.$getI18nWord("music_main"),
                            volume: this.volume,
                            effectSrc: this.effectSrc,
                            effectConfig: {
                                volume: 1,
                                html5: this.isOpera
                            },
                            html5: this.isOpera
                        },
                        on: {
                            effectEnd: this.handleEffectEnd,
                            tap: this.handleAudioClick
                        }
                    }), (0,
                    l.h)("img", {
                        directives: [{
                            name: "show",
                            value: this.showOpenVideoBtn
                        }],
                        class: [Ee.Z.btn, Ee.Z.videoBtn],
                        attrs: {
                            src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAulBMVEUAAADj4+Pl5eXl5eXk5OTk5OTk5OTl5eXk5OTk5OTk5OTk5OTl5eXk5OTk5OTk5OTl5eXm5ubj4+Pk5OTl5eXl5eXk5OTj4+Pm5ubk5OTm5ubk5OTj4+Pm5ubm5ubf39/k5OTk5ORaWlq9vb3i4uLc3NzW1tbExMTAwMDOzs7Q0NDe3t7IyMjNzc3Kysra2tphYWHY2NjS0tLh4eGGhobg4OB5eXmoqKiSkpJsbGy2tragoKCAgIBvb28cpFILAAAAIXRSTlMACvXq3XZaFZyZ8OXh2ta9qE9HIge4b0kfxijHuG5IIMXl6VGqAAADjUlEQVRYw5yV63KiMBiGEaSi9djWarvbnX0N4RQEPI3d2d37v62m8AUdFYg8f5yR5OE7kRgN9Ba2MxlbJmBa44ljL3pGezqz/ghXjPqzTivd09REBeb06e7gPrqopfvRuUdnW2jEsrWVD0NoMXzQ0i3nOMPlXhj7AZMEfhx63MUZP5ca4Q3ObF4SsAuCxDtzDpqCfHFQkia5II48LlyJSL0ozl+QpChxXmrH+A2KjS93+luOC/g2f7CB4kfNqD93y22x3BUK3ESE8mHMywl6rvK9P6rabeWOaIdKdtH3+1QtH98r4lM+iMhfH1DLYS3z5sp4M8ZeFwpXCDSSyv54Kuvejf7+xp24sawLCt6ue90vFslM1i40ieRiFPSv5hk50keLtPBOiy8mfEnfB8uBNpsy68HSOGeOdkJ4ZWfmFwm3SZnqyK+S7gxBlE3RJ2F+sWHYKYU22dAGN2AhcuwywOJ8Fpt2xlQlbakQX5ETJxxEuM9WDWT78FT4GDmvJOzSBAQ75SNdg1IZD4xtii+Q7kvk+CwCsV9psT912kdOcbtOVSV2IDI9YQZix1hxhk/zlpjU/RCKlSZQhCzJf83vtsyK5jMm2gsFY8WEzMpjxmM+2gmpAV556Iwo422l8H+zcEs5j+RBrcadVwrTY9Yk5Cwocu4Zv9QfqBRypJ8NQqiAFoZNJYzrhMD6X70wpiLahkN9j2qFEvanThjR1DnGRL2gSYjDMasUlilOjDG1ndcJCe+zUshp7MaGRTUV9ULiWCUU1FXLMOkucXUi3FdG6NJNZBrQFoq/2apRiK/mrGUFYRgI4kn9gYJ4KJiUtFYqCvbg/3+YhygDDnQnWSnOqaelyW53HpULxmfuslVQPfJlzs/mkbWmoL1mU5SxuWEA7bFRBhuXJwy2/ekB0qdnLQdAXA7G+gLU9YUFO3oKYsESBRTRKFMAkVQx0TNJMY3qUoRplIi+VCwx0bMU0cFShMRSOVgsQc6FR0UxlnMQnFDrOlhwQhJ3+SY+mE8LmBckMUT7EPpYXJBFO2xFTO/uO20FjE8He+kwPrBmMFpeawbzeM4TUGMeW7K3eQTwjlX2FtijonyPd9TbcURwwC1PUTJ5E0cEHGLkc/RXR4jBMUuXQnDFLBwEDd4giKOqZEVVaSGqArbH7zBtpGocpq0X9/kDSX9k2q4Q6jpjZ7lkYwXjzea30f0//Fyo/P3xArzTmGkJWC9+AAAAAElFTkSuQmCC"
                        },
                        on: {
                            click: this.openVideo
                        }
                    }), (0,
                    l.h)("share", {
                        class: [Ee.Z.btn, Ee.Z.shareBtn],
                        attrs: {
                            icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAA1VBMVEUAAADg4ODl5eXk5OTk5OTk5OTk5OTk5OTj4+Pk5OTk5OTl5eXk5OTk5OTl5eXk5OTl5eXl5eXk5OTo6Ojj4+Pl5eXk5OTo6Ojl5eXk5OTm5ubl5eXm5ubm5ubl5eXj4+Pk5OTk5ORaWlq8vLzi4uK+vr7c3NzLy8vV1dXNzc3e3t7Pz8/a2trGxsbAwMDg4ODIyMjDw8PR0dHX19dqampeXl6QkJBbW1u3t7d3d3diYmKEhIR8fHyvr6+lpaWLi4uzs7OUlJRubm6dnZ1ycnKsrKygoKArDlsHAAAAIXRSTlMACvXcdlpInCCZ69jw5eHHuKhvFhUHvQzW6FBPKCPp1bwhu/nZAAAERUlEQVRYw82ZaXuiMBDHqbW6ak/t9th7HAg3Aoq1tcf22u//kbYmgaSCCdTn2Wd/b3rJn8xkjmRqaDjttLu/fv5oAbR+/DzrtjunxsfZ+dIbQIlB78vOh+Q6Jy3YQOuk03hxw11Qsjs8byLX7oOWfru25XuHUIvDvVpyn45BwiSOGycRvhElsesQEySOP9VY3r6k5tgWrmHZjqS5r1vk5y4UBDZdV+xPiWe+4QWOH9O12gEUdD8rw/hIyIWIGKYE1iAp/YOQPDpVuG+3eCxEtFwPKvFcCzEkRQRtdOS3g9x3qYWWP4GNTHwL0c99efCtWu/7QbGENLGpnELSRkxIrvi9Sm8kcsP0PNASRGg5udWjiv09goaYMaKf70x5r3vsQ65luSbUJEV0gdErxTNQXETxIT2O+PDeWsDw/LBoMkBtpoXV+++D5xgUgpo1TnlelwyuZTI+PM2unx3ZjxYpGb3D6pV+U8hyTMnuoMDGhD1wKOpjm6tpA+V2nPNb/DLK3djO9c77LD8CneLduOCGiAhHZD/0864wBEpsE1BzPRa8MzoEypAL7vIXRRONxVeS4FzKawsDloG8XwIlRB/UkLHEAwj8fImsu57wBVoT3Z5kkuAjVCzxhMZMizlCm3HxrbzCBUi4aLMTwCpyvrK3I3rqlJhfyXpP78zxEFmEfC3KjIOJsp7e34xlshDeEaJTFJ0BtzhVOG8xozKz368Z+2b97Sm3efDW6NgjFhKd87I/HsD0/mE5X5S2j6DFbB7xoCEY6Zz34ICCCAkPnDZ3YbzWMWx/IjvvNtSEADo8n7t8332QWFyv0nU+Fc7TpbnPo65rnPEXTKU9eBwzZsJ5OqbcxDPjgn5NkFQWFe48PYSH3YXR5z71xAJnXEk4T4/Hd/XSYImHKJxky3rMeXpMRJZ8BpQEF7KgC80EoUIQZUG7sWDZ5HQbwZbYlOpKnz2ThpsyKIdNIgoVC+omYVMV2HDHFTPWhq9jqB/Y1akXL98kr5Y2JC8rxav5FOqm3qbi4Nm2R539ekPb8P2kZnHQl6/gkTrgJYJa5asosIqWYrMasUzp0sPIN0FRYBu0gOzZm86zVYe6Mze1gLpNynvOaAjldWNubmhS9dtouhzL3EN1G23S6KOXsXz6qm70jY4iEzknF5VHkWaHJXiSbd58WDJ26y5RXuHr5uOcMcyXqKtVc0kwVBw4+ZGYIAagJBR6L6biSGy0c1dEmkr1KA5LikN7ca0wE7XRomPfoOpaIS4+xMIU1CSri8+fQH3xEVczB9GBRognjisvjz69um1/eRS3PVe5Rv31VtATiukHLuDd6hEBt9o2a7ViWzkiEEMMx8IoaDrEUI5ZSILYcMyiGwT5uM0gaPtRVZNhmldS0w3Tth/3/YOBpH5kalEp7ch0+6HuPx87C84bDsa3H93/D/9cYIw67e7ZxWULoHV5sfr3x8hQ8xfeX6NJ63mRLwAAAABJRU5ErkJggg==",
                            isSea: o.IS_SEA,
                            shareOptsCn: this.shareOptsCn,
                            shareOptsSea: this.shareOptsSea,
                            popoverOpts: {
                                arrowPos: "right"
                            }
                        },
                        on: {
                            share: this.onShare
                        }
                    }), (0,
                    l.h)("div", {
                        directives: [{
                            name: "show",
                            value: g && this.isHome && !this.shareState
                        }],
                        class: Ee.Z.shareAward,
                        domProps: {
                            innerHTML: this.$getI18nWord("share_award")
                        }
                    })])])])
                }
            }],
            i && wt(n.prototype, i),
            Object.defineProperty(n, "prototype", {
                writable: !1
            }),
            s
        }(f()),
        tt = jt(et.prototype, "isLoading", [Je], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        rt = jt(et.prototype, "isHome", [Xe], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        nt = jt(et.prototype, "shareState", [Qe], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        ot = jt(et.prototype, "volume", [Ke], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        it = jt(et.prototype, "curTab", [qe], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        $e = et)) || $e), Nt = r(75436), Wt = r(76360), Zt = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAB/lBMVEUAAAC7u7uCeleUi3i5ubnk5OS4uLiGdla5ubnk5OSId1S5ubmGdle3t7eEd1SGdla5ubm5ubm5ubm5ubm5ubm4uLi5ubmIdVTh4eG5ubm5ubnk5OS5ubmFdle5ubmGdlaGdla5ubm5ubm4uLiHdVe5ubmGdla5ubmGdlaGdlSGdlaGdlaFdla5ubmGdla4uLiGdlbk5OS4uLjk5OTk5OSGdlaGdlWGdlWGeVa5ubnk5OS5ubm5ubmHdlaGdlaGdla7u7u5ubm6urrk5OSGd1WGdlbk5OSGdla5ubnk5OTl5eW7u7u3t7e5ubmGdlWGdVWGdVbk5OTk5OSGdlWHdla6urq5ubmGdlaHdVa6urq5ubnk5OTk5OSGdlaGdlbk5OSFd1aGdla5ubnk5OSGd1bj4+Pk5OTk5OS5ubnl5eW6urq5ubm5ubm5ubm5ubm4uLiGdlW5ubnj4+Pm5ubk5OTk5OSGdVeGdlbk5OS6urqGdlbj4+Pm5ua6urqDdVPk5OS5ubnk5OS5ubnl5eXl5eXl5eXl5eXk5OS4uLjk5OS2trbf39/k5OQaGhqGdla5ubklJSVkZGQ6Ojrg4ODCwsJAQEAsLCweHh7MzMylpaVsbGxbW1tJSUkzMzPb29vS0tKwsLCrq6uFhYV4eHhTU1PW1taenp6YmJiPj4/GxsbIRSlnAAAAjHRSTlMACQwF6e8R8IU4CMUvKib559Dy3LexYhoI7cmwpjY13amgdFwqJOaqlCEQ4nFoX1NELxbf2NPFehXvxp2WjVpLMSAUzLuin4J7ZFg4DeHMsZePgmpmXVZWUUk/HPn06uSthoFcPRrm4dPLv76abjct1YxmPfrx2NHNtZtIKBoSzo5L8+eSkYiGd2ccGJn65kAAAAlDSURBVGje7NfXU1NBFAbwL5U0SY8mYCCJFCMCKhpFQVREQIqACiqIWLChiL3P6Izjg5sFe+/1z9Ts7g2B5N7cFH3yN8PwxBxy5pyTb/Hff2l0K0ZipQAqxyilJassAEZW4B/op5S2JgrTBDsAy59ffTr8NStifXsBxCr6W2wAtBYgenclgI1HKugFANpdNvwFdZTSSsjQrkx0nNKrdSiq0sRP9c2tFuWW7KmmLSii1vUlWqjTuBLAUD2KYgOl1Taopy2hFcMogljFUMYWH3A4DiCT+gp6OIqCRBsBLK5qDEZMNQH3ptk/3E5rjSkSNGIB3d4Cm924yr4SC6z1hdwu61S4YXeV0TE7q6+a3t0QnrK63CHf2rQ12Io8TVC6oRTzqjqdrhvhtkytbgvfcDk7q5Ci1E5rLcjLsD2GJI3P6godhIKDIZfVp0FSnZ22Iz9LIekJOzwRDbLQRDyOcA8ktmuNedwpG+YZOx2bl0CVJZsdR43IXy1dpYPEpw9tg2rbQnpf6oDWIgc7qX0YQpv1TBsWWGbuGijb0TRpIIbJph1lAxfNy5Cq7Yy1DYKlmlbqoFptyXFwmhl9BKnMg82jZLHR5kEzUuzTz2jAHS+hR6CetL5LnN7U/bz98CSRc/Lh7ZR99zqloVheEkPO9vtXY153M1HWfAxJq/37wW1UO8/tWgim3iCSutaR7NZ1QRLsNeV2Ju1UbJ+uPDDf5ltNRJ2mW8l2B8p14JZuGEEWpSU0JsbK4+2BcKKMqFd2ApzG6xEjNkTHFPKg+N8qxV+dKYek20ByYeiGUH5WVK6kV7XIwsL77KmBsKyD5KpjmVTZw7utvdAfhSrlXh24Q9dJ7q4fAucVfbsLJdEhCKaABtyacZKP8TVgNAETsttDa8X+9m4HZzaQ/BjMYLb3Svuskw0Gy6ndxu+VPyjVvULydUVUDvrFDeujy5FZu0jFGudqqc8Gkj+D6PZqp0YEmg1yq9TCJ2/GK83VOCnEuJgw7wyf7GraCiXn9WvFHu0ghbnOt2qtfjcSWluUz7YzAq6DFKoDTOQUFNRrwZw7C66bFE7csLPnIKuR9vF8pZ8G88hACmfgd3tab5RelRne23X8dGwuTqOFMjCbTSKOtKdFDjoWZfvuF7nuEimOezwB+tlFio7RUiy0cdcEEo5OgWsixdEEZuooEm7SCWSk0Ysz00WKpYsfQ72G9XpVHTLa5wG3jhTLOjAeH5RYG8AcI/LevX8zS3LAE2CDFZm072RHpUoP7jSR9Sr+x7vXT4lap8Hoq5BuKR1jwaNzC5g1RN7rOPPkp+rS/MtiSye/Fy2pq9wqHpTOg2AeEHlf4sKT10SdB/wV60TCEVqPebU8Wt7xg5sk8r7Gk55/JmpMgvHf4YFzJ+bplrOnsK9GxfF4HE/x7RlR4RISanw8bVxAmpAIAINEwbd4qpdvPpKsBnkgCLHPODGMNO5pMM1Ewbv4QnO/sk5ZM78hbsgwukQAGCUKnscXe55trUd5IHAZsUjs8F4Wy8SOm4mS9/F0b74TRWZ+nYLpsZYVjogtvkiUvIhn8OIHUXKRbzKLNrabMUj6+QPRFAYzQJTMxTN6qzRkA0gIm3jiaIekj9rYvItDXZZbYWHuR7Y40MC21UavIYmnv0BQHOpcCwuPPxAZO3i0D/DzXJ22TdvUZICXcVlPnil+NW5zs0WuH8Eim4yKB1OIK5j7JJP5+LpuQmauHjCGPAoL70lGl5HQcx+L/G7X3H5diKIw/pliqDEjQQYx2oeqUhqXDHWtW9MH4n5L0LgrDyeCICJBiCCTJcQ17pcH/ktMp117n+mZ2Z3uePJ7PDnJ7szsvdda3/eZJv7yDF2C7E88UdUALyDi0DLx7ycUN5f6N74uLlws8hNTXXrV2nf1FOFVG2SiR5VccXOtybTw63dJDR9vLpeqLEFExynqinaoX5nM8/C6TjzHi8PjVCIf41gwpnJzfRz4db8oDDJj4QViNBqQ4Csz+a5+MWAzf0spyfuFK1NmGReJtOr0IV4f3gYpXOUiIdFwilwW0+rxD+W3zEznssjw9140Q6UDeS/vZW6vUzuQGeEeOrXXRR/HyQutDzaodplvvn8KFNgAbn3yjmOAC3LBDs/TTIUu87vQYb4NlDggNHse3QRjcHub2lf/7J/cX4Ei14T29iDdhoTY0ONBMDFfo638MlDlAYSGHlYJEtII8zBInhbfPH8ZqPOQR5gY+YYtDm2rEhvrV98+B8Owioe2GC2q8JjKbZcWdkAYU5dCxqKyNJifDfRxVhzMC20bEjdoJUsRujUQliI8qkJmecVm8UW36sPiyz7anCA3ade5WG5qmSXEkAW2+4Ee7ksCG/KIk2dJMakdyKRlblu/HRNxqF2TRNTzutRbFlEHU6NCjmVjjXo1y8ZrWwYGUKBDLJRrU+gjoZwfLc4WsyZbA/NuBaNxd16kkHbCPVSlo4jDNtyuyas1ujBshpTKe5DMvbnQ6Tth7j2EGDYmxGbDS4vTxoZXMged5Wzx6fAW2eJzkUSDHItNzVHc1AurIJma9sl9KYkXn23cLsfvZtnPxyHZuIZPTSSRX9tg43pkx5yN6wpdMaBEbs5CjJwRYKveulJSWZTDCZlTERxOUMerelEcYxJGyIFwHMOAGpvJtDiAkjX5wgEUq3wUapyidp0jN8zZS2l+y1kgFrmxTCpCjdyplhQyYu48Skg3PboDgRWTj/R88lM5DM3MztztGJ/nuh6Xk7p5Lmb73M7MXtErDrdu/VAvSHYYGJ9ge/InwXZxyt+Tc/FPgu1JP8HGQbJ7k7InbotGt0p2ODqnxtbLnW4owKhYGJpjJvn1yLyfv3GYsODGyZExb/vkY3hsfy8ipp7JEo90TSpYyIAhBIN2P1YMhE5+vJutjuYyZIIbw24Edn1aBHZ9PwKbK2E0GkTl2vCh36OFqoHR8NbSPjBPw5jzpl7MedbUxX9izpvCmPNTKYO+x8aobHEBeMLXmjp2uB/sXj97wZJph8emQqJV2AI95Nsnm+dUouzevtMAjBw0sXQnUVvh3wpEZh5aWdpaB8Dbu/zcwKfJe2HqrlzdbEMrHG4PR/rSObse/gDDLRkAig6Rx9KKftwtFb8W9m4UTnhNIjrWjV02LfwDlu+8GbYVTbPq/13YNfCf/4znNxuclP5SYn3DAAAAAElFTkSuQmCC", Dt = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAlCAYAAABcZvm2AAAAAXNSR0IArs4c6QAAArxJREFUWEe9l9trE0EUxr+zSVpbSxW0ggheQEEfVPBFwZeCvlgRaZNoULJJi7ZUkoggVFvBIohglGo2qSTektZ6SZNVEARF8F1E8PIm/QO8gpRKm5o9ssRAYrK72ZhkXvfb+c2c+eacM4Q6DjnkOcqECIB3VA9OMuJss2RbxkHkzs9fc1A63LsDrDwCsLFwEzUDMYPSEfEUMV0C0PRvpGoCkm+4Vym/hTgB+7SO4r9B6ZC4F0QTAFZrQRj4UDUoGu23dWTmLzBoCIDePD8VReiqCpSU3BsssDwAeKeBa18LjCPdgcSMaVBaEg8TKMZAuwHk8rem5nMDA7FFVVcxaCLoXtrWQiFm6jMAfFYYojOQeGHa3nKobztT9iGAzfoQek7WrNgzOPnFlL3VuyGHvT6AgwCadSCLBAx3+xJXicDldJqhk8PiCgbdBeOAQahmGIrL4Z98o6crC5qWvJ0C+B6ANboQwpR1zjJ4cOjObDnd4zHvesWqXATRxyLQq9FO64+V686DMQxA0IHMEeNETyChXtSyQ5a8TgbfBLCsyHXJ6+Jai0D3Aew2CNVbVsjlOBn/VE73NNrfupCZv0ag4yWuS0keOwG3ACzXgzAw1srtZ7sC0kI5XWpc3EZZUt25pcR1KckTJOC0wVnMMsjl8MWfaen+LnZKy52UljwZADaDcN22+xPH9DRyyPOSCXs0s3fDdqSuwMwZKd9/nTk0Oq1GoWQ8kbxbs2C1upaeUV7dENflYXW4R7G8kxuSGRiCdoVtSK7Lh9JM9mamEbs/fsV09i60VN3rUSGsIRW2EFhpz0DEwa+2JSOme4ZCWK4LEtRMv8sgdVXfBeUnNtPXAdhfcRektfJKOlUAxRXWIAyan5Oh3g6BlERde+/CO1f310SRK3PvI7XKbiop5dWGTOu/hrz4ijNK7g1LwPs/gOI8OM0Cj6wAAAAASUVORK5CYII=", zt = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAlCAYAAABcZvm2AAAAAXNSR0IArs4c6QAAAshJREFUWEfFl99LFFEUx79nNn+QSNDPP0B604KIHuopiIIgqFldTdNZ+6GkzpaUkQRhkJYQhDtLooWusxTW7igR2UuBBUG9BNmDQUE/IIIsMDFN3Z0Ts6Glzs6ou6P3dc79fu65c+/3nkOaIj0FsJUY1aKv6zYcGqQpEs9oM4dirvEqT3V4NNW82aC/6u9BQqG7pvNVKmFmIEN/konr3dXqdSL8yzgJciJQXJKBR8Iq3SueDH1LghGfShFFGiAgz0LoK5jL3D71cTIwCreU7xQEvQ/AGgshJnDzUHrmxcrK9qmlAMmY1OuXcnTCHQA7rEXoZQyxwx459GGxsDjIGG1tFWnrJycuAzhnJULACIMr3LJ6dzGwGdD0pLBf2isQVACbLIHEHaPj7CurC/1aCHAeyJjU01q6kaMuFeB9NiJviV1Foq/jtR3MFBQ/2gzqDUhnGGgCkGYhNAFQnVgTDFjduYSgaeGIUrqdIHQDyLFcNeEBgcvFGvWHWRxpAakezLlCVLhwqDb40SzofvPR7GhWrBWMEpst+qKDjhTIwf65cf87w08CnRDlYDiRWI9fKmPCDQBZFkAdhKa13z9d2t3QH52Om2dBDL6ZkZ55+kBl+5iZWKTFu5kENrZym012z2M6F3tOqZ+NuEReN8guLsqvUgfMxPr8csYYjVwhoNYGNszA8Xy5S7My1QkGSoygRGKRgHc/gbvByLYCMnDN0r2J8UT0de2xEtEU6RaAYzaZTa14RoMuUOFBOfjGbKX3GgrShXWrryb1j5bj1A0TqMKxexRRvOcJep7jzmDnuinzukQgw701xXuWiBsdc+9leY8cf2GNmmHD1O9GZqpzrGZYeBWEFzHoxUuqgjRF2gXgoeN1naZIhs3kWmxXairVWW3LHJpRe+ssSB5f55DdfbP7vqLdxDuQUORsf+Rkx9ejSM8Y2OJ0D/sHs0GOINAnU4IAAAAASUVORK5CYII=", Ft = r(94067);
        function Mt(e) {
            return Mt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            ,
            Mt(e)
        }
        function Ht(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                r.push.apply(r, n)
            }
            return r
        }
        function Vt(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Ht(Object(r), !0).forEach((function(t) {
                    var n, o, i;
                    n = e,
                    o = t,
                    i = r[t],
                    (o = Jt(o))in n ? Object.defineProperty(n, o, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : n[o] = i
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ht(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }
                ))
            }
            return e
        }
        function Ut(e, t, r, n) {
            r && Object.defineProperty(e, t, {
                enumerable: r.enumerable,
                configurable: r.configurable,
                writable: r.writable,
                value: r.initializer ? r.initializer.call(n) : void 0
            })
        }
        function Yt(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, Jt(n.key), n)
            }
        }
        function Jt(e) {
            var t = function(e, t) {
                if ("object" !== Mt(e) || null === e)
                    return e;
                var r = e[Symbol.toPrimitive];
                if (void 0 !== r) {
                    var n = r.call(e, "string");
                    if ("object" !== Mt(n))
                        return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(e)
            }(e);
            return "symbol" === Mt(t) ? t : String(t)
        }
        function Xt(e, t) {
            return Xt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            ,
            Xt(e, t)
        }
        function Qt(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function Kt(e) {
            return Kt = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            ,
            Kt(e)
        }
        function qt(e, t, r, n, o) {
            var i = {};
            return Object.keys(n).forEach((function(e) {
                i[e] = n[e]
            }
            )),
            i.enumerable = !!i.enumerable,
            i.configurable = !!i.configurable,
            ("value"in i || i.initializer) && (i.writable = !0),
            i = r.slice().reverse().reduce((function(r, n) {
                return n(e, t, r) || r
            }
            ), i),
            o && void 0 !== i.initializer && (i.value = i.initializer ? i.initializer.call(o) : void 0,
            i.initializer = void 0),
            void 0 === i.initializer && (Object.defineProperty(e, t, i),
            i = null),
            i
        }
        var $t, er, tr, rr, nr, or, ir, ar, cr = (xt = (0,
        Ie.fI)(),
        It = (0,
        Ie.fI)(),
        Et = (0,
        Ie.fI)(),
        Pt = (0,
        Ie.fI)(),
        (0,
        Ie.wA)((Lt = function(e) {
            !function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                }),
                t && Xt(e, t)
            }(a, e);
            var t, r, n, o, i = (n = a,
            o = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }(),
            function() {
                var e, t = Kt(n);
                if (o) {
                    var r = Kt(this).constructor;
                    e = Reflect.construct(t, arguments, r)
                } else
                    e = t.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === Mt(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return Qt(e)
                }(this, e)
            }
            );
            function a() {
                var e;
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, a);
                for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
                    r[n] = arguments[n];
                return Ut(e = i.call.apply(i, [this].concat(r)), "videoSrc", Ct, Qt(e)),
                Ut(e, "tsSrc", Bt, Qt(e)),
                Ut(e, "poster", _t, Qt(e)),
                Ut(e, "tip", Gt, Qt(e)),
                e.originVideoProps = {
                    width: "100%",
                    controls: !1,
                    loop: !0,
                    "object-fit": "cover"
                },
                e.showPoster = !0,
                e.videoEvent = {
                    canplay: e.videoPlay.bind(Qt(e))
                },
                e
            }
            return t = a,
            (r = [{
                key: "mounted",
                value: function() {
                    ct({
                        modelStatus: !0
                    })
                }
            }, {
                key: "closePage",
                value: function() {
                    ct({
                        modelStatus: !1
                    }),
                    this.$emit("close")
                }
            }, {
                key: "videoPlay",
                value: function() {
                    this.showPoster = !1
                }
            }, {
                key: "render",
                value: function() {
                    return (0,
                    l.h)("div", {
                        class: Ft.Z.wrap
                    }, [(0,
                    l.h)("img", {
                        class: Ft.Z.closeBtn,
                        on: {
                            click: this.closePage
                        },
                        attrs: {
                            src: Le
                        }
                    }), (0,
                    l.h)("img", {
                        directives: [{
                            name: "show",
                            value: this.showPoster
                        }],
                        class: Ft.Z.poster,
                        attrs: {
                            src: this.poster
                        }
                    }), this.videoSrc && (0,
                    l.h)("event-video", {
                        class: Ft.Z.video,
                        attrs: {
                            autoplay: !0,
                            src: this.videoSrc,
                            tsSrc: this.tsSrc,
                            isAutoRetryError: !0,
                            originVideoProps: this.originVideoProps,
                            userPoster: this.poster,
                            loop: !0
                        },
                        props: Vt({}, {
                            onEvents: this.videoEvent
                        })
                    }), (0,
                    l.h)("div", {
                        directives: [{
                            name: "show",
                            value: this.tip
                        }],
                        class: Ft.Z.tips,
                        domProps: {
                            innerHTML: this.tip
                        }
                    })])
                }
            }]) && Yt(t.prototype, r),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            a
        }(f()),
        Ct = qt(Lt.prototype, "videoSrc", [xt], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        Bt = qt(Lt.prototype, "tsSrc", [It], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        _t = qt(Lt.prototype, "poster", [Et], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        Gt = qt(Lt.prototype, "tip", [Pt], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        Tt = Lt)) || Tt);
        function ur(e) {
            return ur = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            ,
            ur(e)
        }
        function sr(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                r.push.apply(r, n)
            }
            return r
        }
        function lr(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? sr(Object(r), !0).forEach((function(t) {
                    var n, o, i;
                    n = e,
                    o = t,
                    i = r[t],
                    (o = hr(o))in n ? Object.defineProperty(n, o, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : n[o] = i
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : sr(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }
                ))
            }
            return e
        }
        function fr(e, t, r, n) {
            r && Object.defineProperty(e, t, {
                enumerable: r.enumerable,
                configurable: r.configurable,
                writable: r.writable,
                value: r.initializer ? r.initializer.call(n) : void 0
            })
        }
        function pr(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, hr(n.key), n)
            }
        }
        function hr(e) {
            var t = function(e, t) {
                if ("object" !== ur(e) || null === e)
                    return e;
                var r = e[Symbol.toPrimitive];
                if (void 0 !== r) {
                    var n = r.call(e, "string");
                    if ("object" !== ur(n))
                        return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(e)
            }(e);
            return "symbol" === ur(t) ? t : String(t)
        }
        function dr(e, t) {
            return dr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            ,
            dr(e, t)
        }
        function yr(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function vr(e) {
            return vr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            ,
            vr(e)
        }
        function br(e, t, r, n, o) {
            var i = {};
            return Object.keys(n).forEach((function(e) {
                i[e] = n[e]
            }
            )),
            i.enumerable = !!i.enumerable,
            i.configurable = !!i.configurable,
            ("value"in i || i.initializer) && (i.writable = !0),
            i = r.slice().reverse().reduce((function(r, n) {
                return n(e, t, r) || r
            }
            ), i),
            o && void 0 !== i.initializer && (i.value = i.initializer ? i.initializer.call(o) : void 0,
            i.initializer = void 0),
            void 0 === i.initializer && (Object.defineProperty(e, t, i),
            i = null),
            i
        }
        var mr, gr, wr, Or, Ar, kr, Sr, jr, xr, Ir, Er, Pr = ($t = (0,
        i.State)("isAnimating"),
        er = (0,
        i.State)("effectPlayer"),
        tr = (0,
        i.State)("jumpTabIndex"),
        (0,
        Ie.wA)((nr = function(e) {
            !function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                }),
                t && dr(e, t)
            }(c, e);
            var t, r, n, i, a = (n = c,
            i = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }(),
            function() {
                var e, t = vr(n);
                if (i) {
                    var r = vr(this).constructor;
                    e = Reflect.construct(t, arguments, r)
                } else
                    e = t.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === ur(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return yr(e)
                }(this, e)
            }
            );
            function c() {
                var e;
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, c);
                for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
                    r[n] = arguments[n];
                return fr(e = a.call.apply(a, [this].concat(r)), "isAnimating", or, yr(e)),
                fr(e, "effectPlayer", ir, yr(e)),
                fr(e, "jumpTabIndex", ar, yr(e)),
                e.audioIndex = 0,
                e.curRoleIndex = 1,
                e.modelAudio = null,
                e.navigation = {
                    handlePrev: function(e, t) {
                        0 === (null == e ? void 0 : e.activeIndex) ? e.slideTo(t - 1) : e.slidePrev()
                    },
                    handleNext: function(e, t) {
                        (null == e ? void 0 : e.activeIndex) === t - 1 ? e.slideTo(0) : e.slideNext()
                    },
                    transformPagination: function(e, t, r, n) {
                        r.style.transform = e !== t ? e > 2 ? "translateX(".concat(-n * (e - 2), "rem)") : "translateX(0)" : "translateX(".concat(-n * (e - 3), "rem)")
                    }
                },
                e
            }
            return t = c,
            (r = [{
                key: "swiperOption",
                get: function() {
                    var e = this;
                    return lr(lr({}, O), {}, {
                        pagination: {
                            el: ".role-swiper-pagination",
                            clickable: !0,
                            renderBullet: function(t, r) {
                                var n = t + 1;
                                return '<div class="'.concat(r, ' role-swiper-bullet-custom">\n                    <img class="role-swiper-img" src="').concat(e.$getI18nWord("icon_role".concat(n)), '" />\n                  </div>')
                            }
                        }
                    })
                }
            }, {
                key: "roleNum",
                get: function() {
                    return Number(this.$getI18nWord("num_roles"))
                }
            }, {
                key: "bbsLink",
                get: function() {
                    var e = [];
                    try {
                        e = JSON.parse(this.$getI18nWord("link_role_view"))
                    } catch (t) {
                        e = []
                    }
                    return e
                }
            }, {
                key: "mounted",
                value: function() {
                    this.$trackEvent("page", "show", "avatar_show", "2"),
                    this.jumpTabIndex > this.roleNum && ct({
                        jumpTabIndex: 1
                    }),
                    de[o.QS.pageIndex] === he.Ava && this.$refs.roleSwiper.swiper.slideTo(this.jumpTabIndex - 1)
                }
            }, {
                key: "handlePrev",
                value: function() {
                    this.navigation.handlePrev(this.$refs.roleSwiper.swiper, this.roleNum)
                }
            }, {
                key: "handleNext",
                value: function() {
                    this.navigation.handleNext(this.$refs.roleSwiper.swiper, this.roleNum)
                }
            }, {
                key: "playModelAudio",
                value: function() {
                    ct({
                        volume: .2
                    }),
                    this.$effectPlayer.play(3 * this.curRoleIndex - 1, !0)
                }
            }, {
                key: "roleChange",
                value: function() {
                    var e;
                    this.$effectPlayer.stop();
                    var t = (null === (e = this.$refs.roleSwiper.swiper) || void 0 === e ? void 0 : e.activeIndex) + 1;
                    this.navigation.transformPagination(t, this.roleNum, this.$refs.pagination, 1.61),
                    this.audioIndex = 0,
                    this.curRoleIndex = t,
                    this.$trackEvent("Button", "Click", "avatar_switch", String(t), {
                        name: this.$getI18nWord("name_role".concat(t))
                    }),
                    this.$emit("changeRole", t)
                }
            }, {
                key: "onAudioTap",
                value: function(e) {
                    ct({
                        volume: .2
                    }),
                    this.$trackEvent("Button", "Click", "avatar_voice", String(this.curRoleIndex), {
                        name: this.$getI18nWord("name_role".concat(this.curRoleIndex))
                    }),
                    this.audioIndex = this.audioIndex ? 0 : 1,
                    this.$effectPlayer.play(2 * e + this.audioIndex, !0)
                }
            }, {
                key: "openVideo",
                value: function(e) {
                    this.$trackEvent("Button", "Click", "avatar_play", String(this.curRoleIndex), {
                        name: this.$getI18nWord("name_role".concat(this.curRoleIndex))
                    }),
                    this.$effectPlayer.stop();
                    var t = this.$getI18nWord("video_keyframes_role".concat(e));
                    o.IS_SEA || (t = this.$getI18nWord("video_keyframes_role".concat(e)) || "".concat(this.$getI18nWord("video_role".concat(e)), "?x-oss-process=video/snapshot,t_1,f_jpg,m_fast")),
                    this.$commonModal(cr, {
                        dialogInfo: {
                            videoSrc: this.$getI18nWord("video_role".concat(e)),
                            tsSrc: this.$getI18nWord("video_role".concat(e, "_ts")),
                            poster: t,
                            tip: this.$getI18nWord("tip_video_role".concat(e))
                        }
                    })
                }
            }, {
                key: "openModel",
                value: function(e) {
                    this.$trackEvent("Button", "Click", "avatar_3d", String(this.curRoleIndex), {
                        name: this.$getI18nWord("name_role".concat(this.curRoleIndex))
                    }),
                    this.$emit("openModel", e)
                }
            }, {
                key: "jumpToBbs",
                value: function() {
                    this.$trackEvent("Button", "Click", "avatar_more", String(this.curRoleIndex), {
                        name: this.$getI18nWord("name_role".concat(this.curRoleIndex))
                    });
                    var e = this.bbsLink[this.curRoleIndex - 1];
                    e && this.$mJump(e)
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.$getI18nWord
                      , r = new Array(this.roleNum).fill(1)
                      , n = [t("icon_text_left"), t("icon_text_right")];
                    return (0,
                    l.h)("div", {
                        class: Wt.Z.wrap
                    }, [(0,
                    l.h)("swiper", {
                        ref: "roleSwiper",
                        attrs: {
                            options: this.swiperOption
                        },
                        on: {
                            slideChange: this.roleChange
                        }
                    }, [r.map((function(r, o) {
                        var i = o + 1;
                        return (0,
                        l.h)("swiper-slide", {
                            class: Wt.Z.roleSwiper
                        }, [(0,
                        l.h)("div", {
                            class: Wt.Z.leftGroup
                        }, [(0,
                        l.h)("div", {
                            class: Wt.Z.roleNamebox,
                            style: {
                                backgroundImage: "url(".concat(t("info_role".concat(i)), ")")
                            }
                        }, [(0,
                        l.h)("div", {
                            class: Wt.Z.name,
                            domProps: {
                                innerHTML: t("name_role".concat(i))
                            }
                        }), (0,
                        l.h)("img", {
                            class: Wt.Z.roleAttr,
                            attrs: {
                                src: t("icon_attr_role".concat(i))
                            }
                        }), t("is_new_role".concat(i)) && (0,
                        l.h)("div", {
                            class: Wt.Z.symbolNew,
                            domProps: {
                                innerHTML: t("text_role_new")
                            }
                        })]), (0,
                        l.h)("div", {
                            class: Wt.Z.attrBox
                        }, [(0,
                        l.h)("div", [t("text_fate"), ":  ", t("fate_role".concat(i))]), (0,
                        l.h)("div", [t("text_attr"), ":  ", t("attr_role".concat(i))])]), (0,
                        l.h)("div", {
                            class: Wt.Z.roleWords,
                            on: {
                                mousewheel: N,
                                touchStart: N,
                                touchend: N,
                                touchmove: N
                            }
                        }, [n[0] && (0,
                        l.h)("img", {
                            class: Wt.Z.symbolLeft,
                            attrs: {
                                src: n[0]
                            }
                        }), (0,
                        l.h)("vue-scroll", {
                            attrs: {
                                ops: v
                            },
                            ref: "scroll"
                        }, [(0,
                        l.h)("div", {
                            class: Wt.Z.roleWordsContent,
                            domProps: {
                                innerHTML: t("words_role".concat(i))
                            }
                        })]), n[1] && (0,
                        l.h)("img", {
                            class: Wt.Z.symbolRight,
                            attrs: {
                                src: n[1]
                            }
                        })])]), (0,
                        l.h)("div", {
                            class: Wt.Z.btnGroup
                        }, [(0,
                        l.h)("img", {
                            class: Wt.Z.videoImg,
                            on: {
                                click: e.onAudioTap.bind(e, o)
                            },
                            attrs: {
                                src: "data:image/png;base64,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"
                            }
                        }), (0,
                        l.h)("img", {
                            class: Wt.Z.videoImg,
                            on: {
                                click: e.openVideo.bind(e, i)
                            },
                            attrs: {
                                src: Zt
                            }
                        }), (0,
                        l.h)("img", {
                            class: Wt.Z.videoImg,
                            on: {
                                click: e.openModel.bind(e, o)
                            },
                            attrs: {
                                src: "data:image/png;base64,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"
                            }
                        })]), (0,
                        l.h)("div", {
                            class: Wt.Z.rightGroup,
                            on: {
                                touchStart: N,
                                touchend: N,
                                mousewheel: N,
                                touchmove: N
                            }
                        }, [(0,
                        l.h)("div", {
                            class: Wt.Z.contentWrap
                        }, [(0,
                        l.h)("vue-scroll", {
                            attrs: {
                                ops: v
                            },
                            ref: "scroll"
                        }, [(0,
                        l.h)("h1", {
                            attrs: {
                                h1: !0
                            },
                            class: Wt.Z.title
                        }, [t("title_role_story")]), (0,
                        l.h)("div", {
                            class: Wt.Z.content,
                            domProps: {
                                innerHTML: t("story_role".concat(i))
                            }
                        }), (0,
                        l.h)("h1", {
                            class: Wt.Z.title
                        }, [t("title_setting")]), (0,
                        l.h)("div", {
                            class: Wt.Z.content,
                            domProps: {
                                innerHTML: t("setting_role".concat(i))
                            }
                        })])])])])
                    }
                    )), !o.IS_SEA && (0,
                    l.h)("div", {
                        class: Wt.Z.decorateText
                    }, ["CHARACTER"]), (0,
                    l.h)("div", {
                        class: Wt.Z.paginationBox
                    }, [(0,
                    l.h)("div", {
                        class: ["role-swiper-pagination", Wt.Z.roleSwiperPagination],
                        ref: "pagination",
                        on: {
                            touchmove: N
                        },
                        slot: "pagination"
                    })])]), this.roleNum > 3 && (0,
                    l.h)("div", {
                        class: Wt.Z.swiperNavigation
                    }, [(0,
                    l.h)("img", {
                        on: {
                            click: this.handlePrev
                        },
                        class: [Wt.Z.swiperNavigationLeft],
                        attrs: {
                            src: Dt
                        }
                    }), (0,
                    l.h)("img", {
                        on: {
                            click: this.handleNext
                        },
                        class: [Wt.Z.swiperNavigationRight],
                        attrs: {
                            src: zt
                        }
                    })]), (0,
                    l.h)("div", {
                        directives: [{
                            name: "show",
                            value: !m && this.bbsLink[this.curRoleIndex - 1]
                        }],
                        class: Wt.Z.jumpTip,
                        on: {
                            click: this.jumpToBbs
                        },
                        domProps: {
                            innerHTML: t("jump_title_role")
                        }
                    })])
                }
            }]) && pr(t.prototype, r),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            c
        }(f()),
        or = br(nr.prototype, "isAnimating", [$t], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        ir = br(nr.prototype, "effectPlayer", [er], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        ar = br(nr.prototype, "jumpTabIndex", [tr], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        rr = nr)) || rr), Tr = r(16310);
        function Lr(e) {
            return Lr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            ,
            Lr(e)
        }
        function Cr(e, t, r, n) {
            r && Object.defineProperty(e, t, {
                enumerable: r.enumerable,
                configurable: r.configurable,
                writable: r.writable,
                value: r.initializer ? r.initializer.call(n) : void 0
            })
        }
        function Br(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, (void 0,
                o = function(e, t) {
                    if ("object" !== Lr(e) || null === e)
                        return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(e, "string");
                        if ("object" !== Lr(n))
                            return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return String(e)
                }(n.key),
                "symbol" === Lr(o) ? o : String(o)), n)
            }
            var o
        }
        function _r(e, t) {
            return _r = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            ,
            _r(e, t)
        }
        function Gr(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function Rr(e) {
            return Rr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            ,
            Rr(e)
        }
        function Nr(e, t, r, n, o) {
            var i = {};
            return Object.keys(n).forEach((function(e) {
                i[e] = n[e]
            }
            )),
            i.enumerable = !!i.enumerable,
            i.configurable = !!i.configurable,
            ("value"in i || i.initializer) && (i.writable = !0),
            i = r.slice().reverse().reduce((function(r, n) {
                return n(e, t, r) || r
            }
            ), i),
            o && void 0 !== i.initializer && (i.value = i.initializer ? i.initializer.call(o) : void 0,
            i.initializer = void 0),
            void 0 === i.initializer && (Object.defineProperty(e, t, i),
            i = null),
            i
        }
        var Wr, Zr, Dr, zr, Fr = (mr = (0,
        Ie.fI)(),
        gr = (0,
        Ie.fI)(),
        wr = (0,
        i.Getter)("tabs"),
        Or = (0,
        i.State)("curTab"),
        Ar = (0,
        Ie.RL)("showState", {
            immediate: !0
        }),
        (0,
        Ie.wA)((Sr = function(e) {
            !function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                }),
                t && _r(e, t)
            }(a, e);
            var t, r, n, o, i = (n = a,
            o = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }(),
            function() {
                var e, t = Rr(n);
                if (o) {
                    var r = Rr(this).constructor;
                    e = Reflect.construct(t, arguments, r)
                } else
                    e = t.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === Lr(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return Gr(e)
                }(this, e)
            }
            );
            function a() {
                var e;
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, a);
                for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
                    r[n] = arguments[n];
                return Cr(e = i.call.apply(i, [this].concat(r)), "showState", jr, Gr(e)),
                Cr(e, "value", xr, Gr(e)),
                Cr(e, "tabs", Ir, Gr(e)),
                Cr(e, "curTab", Er, Gr(e)),
                e.offset = 0,
                e.curIndex = 0,
                e.isRotating = !1,
                e
            }
            return t = a,
            r = [{
                key: "tabsIcon",
                get: function() {
                    try {
                        return JSON.parse(this.$getI18nWord("tabs_icon")).list || []
                    } catch (e) {
                        return []
                    }
                }
            }, {
                key: "getTabs",
                value: function() {
                    if (this.showState) {
                        var e = (this.value || 1) - 1;
                        this.changeTab(e, this.tabs[e]),
                        this.$emit("input", 1)
                    }
                }
            }, {
                key: "nextPage",
                value: function(e) {
                    if (e > 0 && this.curIndex < this.tabs.length - 1)
                        this.curIndex++;
                    else {
                        if (!(e < 0 && this.curIndex > 0))
                            return;
                        this.curIndex--
                    }
                    this.changeTab(this.curIndex, this.tabs[this.curIndex])
                }
            }, {
                key: "changeTab",
                value: function() {
                    var e = this
                      , t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                      , r = arguments.length > 1 ? arguments[1] : void 0;
                    r.id !== this.curTab && (this.isRotating = !0,
                    this.offset = 2 - t,
                    this.curIndex = t,
                    ct({
                        curTab: r.id
                    }),
                    this.$emit("tabChange", r),
                    setTimeout((function() {
                        e.isRotating = !1
                    }
                    ), 300))
                }
            }, {
                key: "render",
                value: function() {
                    var e = this;
                    return (0,
                    l.h)("transition", {
                        attrs: {
                            name: "fade"
                        }
                    }, [(0,
                    l.h)("div", {
                        class: Tr.Z.wrap,
                        directives: [{
                            name: "show",
                            value: this.showState
                        }]
                    }, [(0,
                    l.h)("div", {
                        class: Tr.Z.wrapBg
                    }), (0,
                    l.h)("div", {
                        class: [Tr.Z.tabBox, this.isRotating && Tr.Z.fadeName],
                        ref: "tab",
                        style: {
                            transform: "rotate(".concat(26 * this.offset, "deg)")
                        }
                    }, [this.tabs.map((function(t, r) {
                        return (0,
                        l.h)("div", {
                            class: [Tr.Z.tabItem, Tr.Z["tabItem".concat(r + e.offset)]],
                            style: {
                                transform: "translateX(-50%) translateY(-50%) rotate(".concat(-26 * e.offset, "deg)")
                            },
                            on: {
                                click: e.changeTab.bind(e, r, t)
                            }
                        }, [(0,
                        l.h)("img", {
                            attrs: {
                                src: r + e.offset === 2 ? e.tabsIcon[r].url : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAABUpJREFUWEfNmHtsFFUUxr8z+6hU0JKKJoIBeQmRSKtixCDEmCCC1YKdKcVg8BH8Q0NbZWd3p4Ir0N12FmWrIUbUQMQUO4NFhAiBGCMYNBopJCgQfEBC4wOJhQilu905ZnY7hO7ObndpQebPnXu/+9tz7r3nO0O4xh7Klye8dO7NUXLOFgRhBrMxiUGjCLjB1GHgLIGPEwmHDMP4ygXslMP6H/mskTNQ0DP/QVBcBmgagJ3E/CUcQhuTcTxacOofc1F317ChxMIoxI1SJnoIwKMA7wU7VCX88d5cwPoECvnmjYbhfIuBCcTU0HX9+eZAYNv5XMQDgbLCgnOFC5jYR8ARCN1L/A2tv2abmxUo5JGqmBAB4Y3oII4EAno0F5DUMYGA6HZ3Ug0YrzBxbV2j3pxJJyNQ0CMuB9HTzFxRF9YPXA5I6px6j1hCRJvB/KES1lfYadoCBT2SAoLITsesuuCmPwcCxtKoV6puoe7uHWBqVcLaqlTtNKCeNK2Agx9QQvqpgYSxtIJ+cRjitI8Yy/1hbdOla/QCWrlUvN0h0LfM/Ei2NPGPATdiZ8rBXA5gKoBbAURBfBJMbQBvgXvoVrozkHHPNXgrJxvMu+IG379stf6bBdULKCRL2wHs9ataY6bI8IHauWBWAYztI3o/g+ClkkhrpnFBryQTY7pf1R5LA2rwitMMpg3FHUUTX1i3LpYqwprowLjhQQBynmlUcaxdIUmPp857d/Fi1+mijsNg4RnrnroYoZBH+oyJtyqq/oHdgtxWY0YtXxhLSqXSiNdONyiLzwH0uKJqT5jvE0BmOYgJriMuo+A2z+qN59Kis7+mAgQ9z8j0Hs4Q6e7I5vQ7qqzQfX7QSZcRm+BZveWvBFC9R1xEJMxS1Jb5aTDmBo52/AJgRL+AgHa4i0bbbfSgLDUz8666sL4hARTyVq5n8D6lUXsvDait5ikAH/UTJjmdeCGVNKVphTyVzzPxNEXVFiWAgrL4vQG8+Kqqf2cDZKaqYmCA6BMqWZOmtUoW7xOAtYqqT0mmTJZOkSM2QQltOW0DdBzAyAEBAk5QaWRUqlbQP7cYcddRRdVu6omQdKG4o2iI7XFvq7kAoGCAgKJUGknT6jn+/yqqVmABdRV3FA3OAHQWwJCrDfQ3HLE7MqTsKIDxAwSUa8r+300d8lVO4Ti/o4S1e62UbSCmr/3hlveviWOfvBhppqJqC67oxTg4PobGvd2VdspkqRmg3Yrasj557BOmKX44Wtg5ws4vc1u1CJDWv33EEpU2pZUf03ebpYOdjommGbxYXIOyuA3Ap5mLa60KsOfyoChMpWtsC3OyuKJcUfWyi8U1cVsn2hxjfVb7MXZEBMQv5Qm1Fsfaq7PYj5/AwrNp9iNR02RpOxP2KI2aacBsH95f/SSIGnIyaAy/XYW3hE2DBsYMRdXmWL/1doy+eaPZcH4jEM30NbYczAiVdAAiiEz3eA+A4T1j20H0A9i0sEV6Ngtbv7TqLhLiu0nonnppr5Zm8uu94gJiev1qmHwmfi21R7Ntg0KytIyBcnY6Zl+ZNij+OZi32vVmfTWKCwWiimzpy2eD93QaZqO4Ma9G0VrETB+YmogQ7k8rnajmQztqmeEBcfVltdIW1EpP5RgncRNA4xlG43UxNL+8Ru/MJTJv1oqDOp1UJRD5GHwszrRkWbjFtMMZnz6/flgzG7zSdIPNi9H6HENfwIGD9p9jMJmJH7Y+xwhEYV+jtieXP5EzkCWW7FDccwCeAcYkJowk4EbzPQNniHEChEPM2ANX9466YOvvuYDY3kP5TLxSY/8DdG6KQ2JvSbkAAAAASUVORK5CYII="
                            }
                        }), (0,
                        l.h)("div", {
                            class: Tr.Z.tabName
                        }, [t.name])])
                    }
                    ))])])])
                }
            }],
            r && Br(t.prototype, r),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            a
        }(f()),
        jr = Nr(Sr.prototype, "showState", [mr], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        xr = Nr(Sr.prototype, "value", [gr], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        Ir = Nr(Sr.prototype, "tabs", [wr], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        Er = Nr(Sr.prototype, "curTab", [Or], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        Nr(Sr.prototype, "getTabs", [Ar], Object.getOwnPropertyDescriptor(Sr.prototype, "getTabs"), Sr.prototype),
        kr = Sr)) || kr), Mr = r(12357);
        function Hr(e) {
            return Hr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            ,
            Hr(e)
        }
        function Vr(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                r.push.apply(r, n)
            }
            return r
        }
        function Ur(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Vr(Object(r), !0).forEach((function(t) {
                    var n, o, i;
                    n = e,
                    o = t,
                    i = r[t],
                    (o = Jr(o))in n ? Object.defineProperty(n, o, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : n[o] = i
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Vr(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }
                ))
            }
            return e
        }
        function Yr(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, Jr(n.key), n)
            }
        }
        function Jr(e) {
            var t = function(e, t) {
                if ("object" !== Hr(e) || null === e)
                    return e;
                var r = e[Symbol.toPrimitive];
                if (void 0 !== r) {
                    var n = r.call(e, "string");
                    if ("object" !== Hr(n))
                        return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(e)
            }(e);
            return "symbol" === Hr(t) ? t : String(t)
        }
        function Xr(e, t) {
            return Xr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            ,
            Xr(e, t)
        }
        function Qr(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function Kr(e) {
            return Kr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            ,
            Kr(e)
        }
        var qr, $r, en, tn, rn, nn, on, an, cn, un, sn, ln, fn, pn = (Wr = (0,
        i.State)("jumpTabIndex"),
        (0,
        Ie.wA)((Dr = function(e) {
            !function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                }),
                t && Xr(e, t)
            }(c, e);
            var t, r, n, i, a = (n = c,
            i = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }(),
            function() {
                var e, t = Kr(n);
                if (i) {
                    var r = Kr(this).constructor;
                    e = Reflect.construct(t, arguments, r)
                } else
                    e = t.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === Hr(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return Qr(e)
                }(this, e)
            }
            );
            function c() {
                var e, t, r, n;
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, c);
                for (var o = arguments.length, i = new Array(o), u = 0; u < o; u++)
                    i[u] = arguments[u];
                return t = e = a.call.apply(a, [this].concat(i)),
                "jumpTabIndex",
                r = zr,
                n = Qr(e),
                r && Object.defineProperty(t, "jumpTabIndex", {
                    enumerable: r.enumerable,
                    configurable: r.configurable,
                    writable: r.writable,
                    value: r.initializer ? r.initializer.call(n) : void 0
                }),
                e.curIndex = 1,
                e
            }
            return t = c,
            (r = [{
                key: "swiperOption",
                get: function() {
                    var e = this;
                    return Ur(Ur({}, O), {}, {
                        pagination: {
                            el: ".weapon-swiper-pagination",
                            clickable: !0,
                            renderBullet: function(t, r) {
                                var n = t + 1;
                                return '<div class="'.concat(r, ' role-swiper-bullet-custom">\n                    <img class="role-swiper-img" src="').concat(e.$getI18nWord("icon_weapon".concat(n)), '" />\n                  </div>')
                            }
                        }
                    })
                }
            }, {
                key: "weaponNum",
                get: function() {
                    return Number(this.$getI18nWord("num_weapons"))
                }
            }, {
                key: "bbsLink",
                get: function() {
                    var e = [];
                    try {
                        e = JSON.parse(this.$getI18nWord("link_weapon_view"))
                    } catch (t) {
                        e = []
                    }
                    return e
                }
            }, {
                key: "mounted",
                value: function() {
                    this.$trackEvent("page", "show", "equip_show", "3"),
                    this.jumpTabIndex > this.weaponNum && ct({
                        jumpTabIndex: 1
                    }),
                    de[o.QS.pageIndex] === he.Light && this.$refs.weaponSwiper.swiper.slideTo(this.jumpTabIndex - 1)
                }
            }, {
                key: "lightChange",
                value: function() {
                    var e;
                    this.curIndex = (null === (e = this.$refs.weaponSwiper.swiper) || void 0 === e ? void 0 : e.activeIndex) + 1,
                    this.$trackEvent("Button", "Click", "equip_switch", String(this.curIndex))
                }
            }, {
                key: "jumpToBbs",
                value: function() {
                    this.$trackEvent("Button", "Click", "equip_more", String(this.curIndex), {
                        name: this.$getI18nWord("name_weapon".concat(this.curIndex))
                    });
                    var e = this.bbsLink[this.curIndex - 1];
                    e && this.$mJump(e)
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.$getI18nWord
                      , t = new Array(this.weaponNum).fill(1);
                    return (0,
                    l.h)("div", {
                        class: [Mr.Z.wrap, !e("desc_weapon".concat(this.curIndex)) && Mr.Z.hasNoDesc]
                    }, [(0,
                    l.h)("swiper", {
                        ref: "weaponSwiper",
                        attrs: {
                            options: this.swiperOption
                        },
                        on: {
                            slideChange: this.lightChange
                        }
                    }, [t.map((function(t, r) {
                        var n = r + 1;
                        return (0,
                        l.h)("swiper-slide", {
                            class: [Mr.Z.roleSwiper, !e("desc_weapon".concat(n)) && Mr.Z.noDesSlide]
                        }, [(0,
                        l.h)("div", {
                            class: Mr.Z.leftGroup
                        }, [(0,
                        l.h)("div", {
                            class: Mr.Z.roleNamebox,
                            style: {
                                backgroundImage: "url(".concat(e("info_weapon".concat(n)), ")")
                            }
                        }, [(0,
                        l.h)("div", {
                            class: Mr.Z.name,
                            domProps: {
                                innerHTML: e("name_weapon".concat(n))
                            }
                        }), e("is_new_weapon".concat(n)) && (0,
                        l.h)("div", {
                            class: Mr.Z.symbolNew,
                            domProps: {
                                innerHTML: e("text_weapon_new")
                            }
                        })]), (0,
                        l.h)("div", {
                            class: Mr.Z.attrBox
                        }, [(0,
                        l.h)("div", [e("text_fate"), ":  ", e("fate_weapon".concat(n))])]), (0,
                        l.h)("div", {
                            class: Mr.Z.roleWords
                        }, [(0,
                        l.h)("div", {
                            class: Mr.Z.roleWordsWrap,
                            directives: [{
                                name: "show",
                                value: e("approach_weapon".concat(n))
                            }],
                            on: {
                                mousewheel: N,
                                touchStart: N,
                                touchend: N,
                                touchmove: N
                            }
                        }, [(0,
                        l.h)("div", {
                            class: Mr.Z.title
                        }, [e("text_approach")]), (0,
                        l.h)("div", {
                            class: Mr.Z.scroll
                        }, [(0,
                        l.h)("vue-scroll", {
                            attrs: {
                                ops: v
                            },
                            ref: "scroll"
                        }, [(0,
                        l.h)("div", {
                            class: Mr.Z.approachContent,
                            domProps: {
                                innerHTML: e("approach_weapon".concat(n))
                            }
                        })])])])])]), (0,
                        l.h)("div", {
                            class: Mr.Z.mainImg
                        }, [(0,
                        l.h)("img", {
                            class: Mr.Z.weaponImg,
                            attrs: {
                                src: e("img_weapon".concat(n))
                            }
                        })]), (0,
                        l.h)("div", {
                            directives: [{
                                name: "show",
                                value: e("desc_weapon".concat(n))
                            }],
                            class: Mr.Z.rightGroup,
                            on: {
                                mousewheel: N,
                                touchStart: N,
                                touchend: N,
                                touchmove: N
                            }
                        }, [(0,
                        l.h)("div", {
                            class: Mr.Z.roleStory
                        }, [(0,
                        l.h)("h1", {
                            class: Mr.Z.title
                        }, [e("text_equip_skill")]), (0,
                        l.h)("div", {
                            class: Mr.Z.subTitle
                        }, [e("sub_title_weapon".concat(n))]), (0,
                        l.h)("vue-scroll", {
                            attrs: {
                                ops: v
                            },
                            ref: "scroll"
                        }, [(0,
                        l.h)("div", {
                            class: Mr.Z.content,
                            domProps: {
                                innerHTML: e("desc_weapon".concat(n))
                            }
                        })])])])])
                    }
                    )), (0,
                    l.h)("div", {
                        class: ["weapon-swiper-pagination", Mr.Z.weaponSwiperPagination],
                        slot: "pagination"
                    })]), (0,
                    l.h)("div", {
                        directives: [{
                            name: "show",
                            value: !m && this.bbsLink[this.curIndex - 1]
                        }],
                        class: Mr.Z.jumpTip,
                        on: {
                            click: this.jumpToBbs
                        },
                        domProps: {
                            innerHTML: e("jump_title_light")
                        }
                    })])
                }
            }]) && Yr(t.prototype, r),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            c
        }(f()),
        qr = Dr.prototype,
        $r = "jumpTabIndex",
        en = [Wr],
        tn = {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        },
        rn = {},
        Object.keys(tn).forEach((function(e) {
            rn[e] = tn[e]
        }
        )),
        rn.enumerable = !!rn.enumerable,
        rn.configurable = !!rn.configurable,
        ("value"in rn || rn.initializer) && (rn.writable = !0),
        void 0 === (rn = en.slice().reverse().reduce((function(e, t) {
            return t(qr, $r, e) || e
        }
        ), rn)).initializer && (Object.defineProperty(qr, $r, rn),
        rn = null),
        zr = rn,
        Zr = Dr)) || Zr), hn = r(65519), dn = r.p + "act.hoyoverse.com/sr/event/e20230929version-rpg/images/icon_line_video.8be4b31d..png", yn = r(91948), vn = r(23279), bn = r.n(vn);
        function mn(e) {
            return mn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            ,
            mn(e)
        }
        function gn(e, t, r, n) {
            r && Object.defineProperty(e, t, {
                enumerable: r.enumerable,
                configurable: r.configurable,
                writable: r.writable,
                value: r.initializer ? r.initializer.call(n) : void 0
            })
        }
        function wn(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, (void 0,
                o = function(e, t) {
                    if ("object" !== mn(e) || null === e)
                        return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(e, "string");
                        if ("object" !== mn(n))
                            return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return String(e)
                }(n.key),
                "symbol" === mn(o) ? o : String(o)), n)
            }
            var o
        }
        function On(e, t) {
            return On = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            ,
            On(e, t)
        }
        function An(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function kn(e) {
            return kn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            ,
            kn(e)
        }
        function Sn(e, t, r, n, o) {
            var i = {};
            return Object.keys(n).forEach((function(e) {
                i[e] = n[e]
            }
            )),
            i.enumerable = !!i.enumerable,
            i.configurable = !!i.configurable,
            ("value"in i || i.initializer) && (i.writable = !0),
            i = r.slice().reverse().reduce((function(r, n) {
                return n(e, t, r) || r
            }
            ), i),
            o && void 0 !== i.initializer && (i.value = i.initializer ? i.initializer.call(o) : void 0,
            i.initializer = void 0),
            void 0 === i.initializer && (Object.defineProperty(e, t, i),
            i = null),
            i
        }
        var jn, xn = (nn = (0,
        Ie.fI)(),
        on = (0,
        Ie.fI)(),
        an = (0,
        Ie.fI)(),
        (0,
        Ie.wA)((un = function(e) {
            !function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                }),
                t && On(e, t)
            }(a, e);
            var t, r, n, o, i = (n = a,
            o = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }(),
            function() {
                var e, t = kn(n);
                if (o) {
                    var r = kn(this).constructor;
                    e = Reflect.construct(t, arguments, r)
                } else
                    e = t.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === mn(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return An(e)
                }(this, e)
            }
            );
            function a() {
                var e;
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, a);
                for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
                    r[n] = arguments[n];
                return gn(e = i.call.apply(i, [this].concat(r)), "total", sn, An(e)),
                gn(e, "mi18Key", ln, An(e)),
                gn(e, "curIndex", fn, An(e)),
                e.clickIndex = 1,
                e.debSlide = bn()(e.baseSlideFun, 250),
                e
            }
            return t = a,
            (r = [{
                key: "mounted",
                value: function() {
                    this.clickIndex = this.curIndex
                }
            }, {
                key: "closePage",
                value: function() {
                    this.$emit("close")
                }
            }, {
                key: "slideTo",
                value: function(e) {
                    this.curIndex === e || (this.clickIndex = e,
                    this.debSlide(e),
                    this.total <= 2) || (this.$refs.pagination.style.transform = e > 1 ? "translateY(".concat(-28.6 * (e - 1), "%)") : "translateY(0)")
                }
            }, {
                key: "baseSlideFun",
                value: function(e) {
                    this.$emit("slide", e)
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.total
                      , r = this.$getI18nWord
                      , n = this.mi18Key
                      , o = this.clickIndex
                      , i = new Array(t).fill(0);
                    return (0,
                    l.h)("div", {
                        class: [yn.Z.pageWrap, 2 === t && yn.Z.pagesShort]
                    }, [(0,
                    l.h)("div", {
                        class: [yn.Z.eventPage],
                        ref: "pagination"
                    }, [t > 2 && (0,
                    l.h)("div", {
                        class: [yn.Z.paginationBullet],
                        on: {
                            click: this.slideTo.bind(this, t)
                        }
                    }, [(0,
                    l.h)("div", {
                        class: yn.Z.bulletName
                    }, [r("".concat(n).concat(t))]), (0,
                    l.h)("div", {
                        class: yn.Z.bulletCircle
                    })]), i.map((function(t, r) {
                        var i = r + 1;
                        return (0,
                        l.h)("div", {
                            class: [yn.Z.paginationBullet, o === i && yn.Z.active],
                            on: {
                                click: e.slideTo.bind(e, i)
                            }
                        }, [(0,
                        l.h)("div", {
                            class: yn.Z.bulletName
                        }, [e.$getI18nWord("".concat(n).concat(i))]), (0,
                        l.h)("div", {
                            class: yn.Z.bulletCircle
                        })])
                    }
                    )), t > 2 && (0,
                    l.h)("div", {
                        class: [yn.Z.paginationBullet],
                        on: {
                            click: this.slideTo.bind(this, 1)
                        }
                    }, [(0,
                    l.h)("div", {
                        class: yn.Z.bulletName
                    }, [this.$getI18nWord("".concat(n, "1"))]), (0,
                    l.h)("div", {
                        class: yn.Z.bulletCircle
                    })])]), (0,
                    l.h)("div", {
                        class: [yn.Z.pageLine]
                    })])
                }
            }]) && wn(t.prototype, r),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            a
        }(f()),
        sn = Sn(un.prototype, "total", [nn], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        ln = Sn(un.prototype, "mi18Key", [on], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        fn = Sn(un.prototype, "curIndex", [an], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        cn = un)) || cn);
        function In(e) {
            return In = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            ,
            In(e)
        }
        function En(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                r.push.apply(r, n)
            }
            return r
        }
        function Pn(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, Tn(n.key), n)
            }
        }
        function Tn(e) {
            var t = function(e, t) {
                if ("object" !== In(e) || null === e)
                    return e;
                var r = e[Symbol.toPrimitive];
                if (void 0 !== r) {
                    var n = r.call(e, "string");
                    if ("object" !== In(n))
                        return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(e)
            }(e);
            return "symbol" === In(t) ? t : String(t)
        }
        function Ln(e, t) {
            return Ln = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            ,
            Ln(e, t)
        }
        function Cn(e) {
            return Cn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            ,
            Cn(e)
        }
        var Bn, _n, Gn, Rn, Nn, Wn = (0,
        Ie.wA)({
            components: {
                ComTabSub: xn
            }
        })(jn = function(e) {
            !function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                }),
                t && Ln(e, t)
            }(c, e);
            var t, r, n, i, a = (n = c,
            i = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }(),
            function() {
                var e, t = Cn(n);
                if (i) {
                    var r = Cn(this).constructor;
                    e = Reflect.construct(t, arguments, r)
                } else
                    e = t.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === In(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return function(e) {
                        if (void 0 === e)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e
                    }(e)
                }(this, e)
            }
            );
            function c() {
                var e;
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, c);
                for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
                    r[n] = arguments[n];
                return (e = a.call.apply(a, [this].concat(r))).curIndex = 1,
                e
            }
            return t = c,
            r = [{
                key: "swiperOption",
                get: function() {
                    return function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? En(Object(r), !0).forEach((function(t) {
                                var n, o, i;
                                n = e,
                                o = t,
                                i = r[t],
                                (o = Tn(o))in n ? Object.defineProperty(n, o, {
                                    value: i,
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0
                                }) : n[o] = i
                            }
                            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : En(Object(r)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                            }
                            ))
                        }
                        return e
                    }({}, O)
                }
            }, {
                key: "eventNum",
                get: function() {
                    return Number(this.$getI18nWord("num_lines"))
                }
            }, {
                key: "mounted",
                value: function() {
                    this.$trackEvent("page", "show", "mission_show", "9")
                }
            }, {
                key: "openVideo",
                value: function(e) {
                    this.$trackEvent("Button", "Click", "mission_play", String(this.curIndex), {
                        name: this.$getI18nWord("name_line".concat(e))
                    }),
                    this.$commonModal(cr, {
                        dialogInfo: {
                            videoSrc: this.$getI18nWord("video_line".concat(e)),
                            tsSrc: this.$getI18nWord("video_line".concat(e, "_ts")),
                            poster: this.$getI18nWord("img_line".concat(e)),
                            tip: this.$getI18nWord("tip_video_line".concat(e))
                        }
                    })
                }
            }, {
                key: "lineChange",
                value: function() {
                    var e, t = (null === (e = this.$refs.lineSwiper.swiper) || void 0 === e ? void 0 : e.activeIndex) + 1;
                    this.$emit("changeLine", t),
                    this.curIndex = t,
                    this.$trackEvent("Button", "Click", "mission_switch", String(this.curIndex), {
                        name: this.$getI18nWord("name_line".concat(this.curIndex))
                    })
                }
            }, {
                key: "slideTo",
                value: function(e) {
                    var t;
                    null === (t = this.$refs.lineSwiper.swiper) || void 0 === t || t.slideTo(e - 1)
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.$getI18nWord
                      , r = this.eventNum
                      , n = new Array(r).fill(1);
                    return (0,
                    l.h)("div", {
                        class: hn.Z.wrap
                    }, [(0,
                    l.h)("swiper", {
                        class: hn.Z.lineWrap,
                        ref: "lineSwiper",
                        attrs: {
                            options: this.swiperOption
                        },
                        on: {
                            slideChange: this.lineChange
                        }
                    }, [n.map((function(n, i) {
                        var a = i + 1;
                        return (0,
                        l.h)("swiper-slide", {
                            class: hn.Z.lineSwiperSlide
                        }, [(0,
                        l.h)("div", {
                            class: hn.Z.countBox
                        }, [!o.IS_SEA && (0,
                        l.h)("span", {
                            class: hn.Z.decorateText
                        }, [t("text_tab_story")]), (0,
                        l.h)("span", {
                            class: hn.Z.count
                        }, [G(a)]), "/", G(r)]), (0,
                        l.h)("div", {
                            class: hn.Z.title
                        }, [t("video_line".concat(a)) && (0,
                        l.h)("img", {
                            class: hn.Z.videoImg,
                            on: {
                                click: e.openVideo.bind(e, a)
                            },
                            attrs: {
                                src: dn
                            }
                        }), (0,
                        l.h)("div", {
                            class: hn.Z.nameWrap
                        }, [(0,
                        l.h)("div", {
                            class: hn.Z.name,
                            domProps: {
                                innerHTML: t("name_line".concat(a))
                            }
                        })])]), (0,
                        l.h)("div", {
                            class: hn.Z.eventDes,
                            on: {
                                mousewheel: N,
                                touchStart: N,
                                touchend: N,
                                touchmove: N
                            }
                        }, [(0,
                        l.h)("vue-scroll", {
                            attrs: {
                                ops: v
                            },
                            ref: "scroll"
                        }, [(0,
                        l.h)("div", {
                            class: hn.Z.content,
                            domProps: {
                                innerHTML: t("desc_line".concat(a))
                            }
                        })])])])
                    }
                    )), (0,
                    l.h)("div", {
                        class: hn.Z.swiperPagination
                    }, [(0,
                    l.h)("com-tab-sub", {
                        attrs: {
                            total: r,
                            mi18Key: "short_name_line",
                            curIndex: this.curIndex
                        },
                        on: {
                            slide: this.slideTo
                        }
                    })])])])
                }
            }],
            r && Pn(t.prototype, r),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            c
        }(f())) || jn, Zn = r(32436);
        function Dn(e) {
            return Dn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            ,
            Dn(e)
        }
        function zn(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                r.push.apply(r, n)
            }
            return r
        }
        function Fn(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, Mn(n.key), n)
            }
        }
        function Mn(e) {
            var t = function(e, t) {
                if ("object" !== Dn(e) || null === e)
                    return e;
                var r = e[Symbol.toPrimitive];
                if (void 0 !== r) {
                    var n = r.call(e, "string");
                    if ("object" !== Dn(n))
                        return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(e)
            }(e);
            return "symbol" === Dn(t) ? t : String(t)
        }
        function Hn(e, t) {
            return Hn = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            ,
            Hn(e, t)
        }
        function Vn(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function Un(e) {
            return Un = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            ,
            Un(e)
        }
        var Yn, Jn, Xn, Qn, Kn, qn = (Bn = (0,
        Ie.wA)({
            components: {
                ComTabSub: xn
            }
        }),
        _n = (0,
        i.State)("jumpTabIndex"),
        Bn((Rn = function(e) {
            !function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                }),
                t && Hn(e, t)
            }(c, e);
            var t, r, n, i, a = (n = c,
            i = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }(),
            function() {
                var e, t = Un(n);
                if (i) {
                    var r = Un(this).constructor;
                    e = Reflect.construct(t, arguments, r)
                } else
                    e = t.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === Dn(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return Vn(e)
                }(this, e)
            }
            );
            function c() {
                var e;
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, c);
                for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
                    r[n] = arguments[n];
                return function(e, t, r, n) {
                    r && Object.defineProperty(e, "jumpTabIndex", {
                        enumerable: r.enumerable,
                        configurable: r.configurable,
                        writable: r.writable,
                        value: r.initializer ? r.initializer.call(n) : void 0
                    })
                }(e = a.call.apply(a, [this].concat(r)), 0, Nn, Vn(e)),
                e.curIndex = 1,
                e.navigation = {
                    handlePrev: function(e, t) {
                        0 === (null == e ? void 0 : e.activeIndex) ? e.slideTo(t - 1) : e.slidePrev()
                    },
                    handleNext: function(e, t) {
                        (null == e ? void 0 : e.activeIndex) === t - 1 ? e.slideTo(0) : e.slideNext()
                    },
                    transformPagination: function(e, t, r, n) {
                        r.style.transform = e !== t ? e > 2 ? "translateX(".concat(-n * (e - 2), "rem)") : "translateX(0)" : "translateX(".concat(-n * (e - 3), "rem)")
                    }
                },
                e
            }
            return t = c,
            r = [{
                key: "swiperOption",
                get: function() {
                    return function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? zn(Object(r), !0).forEach((function(t) {
                                var n, o, i;
                                n = e,
                                o = t,
                                i = r[t],
                                (o = Mn(o))in n ? Object.defineProperty(n, o, {
                                    value: i,
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0
                                }) : n[o] = i
                            }
                            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : zn(Object(r)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                            }
                            ))
                        }
                        return e
                    }({}, O)
                }
            }, {
                key: "eventNum",
                get: function() {
                    return Number(this.$getI18nWord("num_events"))
                }
            }, {
                key: "bbsLink",
                get: function() {
                    var e = [];
                    try {
                        e = JSON.parse(this.$getI18nWord("link_event_view"))
                    } catch (t) {
                        e = []
                    }
                    return e
                }
            }, {
                key: "mounted",
                value: function() {
                    this.$trackEvent("page", "show", "activity_show", "4"),
                    this.jumpTabIndex > this.eventNum && ct({
                        jumpTabIndex: 1
                    }),
                    de[o.QS.pageIndex] === he.Act && this.$refs.eventSwiper.swiper.slideTo(this.jumpTabIndex - 1)
                }
            }, {
                key: "slideTo",
                value: function(e) {
                    var t;
                    console.log(e, "slide"),
                    null === (t = this.$refs.eventSwiper.swiper) || void 0 === t || t.slideTo(e - 1)
                }
            }, {
                key: "eventChange",
                value: function() {
                    var e, t = (null === (e = this.$refs.eventSwiper.swiper) || void 0 === e ? void 0 : e.activeIndex) + 1;
                    console.log(t),
                    this.$emit("changeEvent", t),
                    this.curIndex = t,
                    this.$trackEvent("Button", "Click", "activity_switch", String(this.curIndex), {
                        name: this.$getI18nWord("name_event".concat(this.curIndex))
                    })
                }
            }, {
                key: "handlePrev",
                value: function() {
                    this.navigation.handlePrev(this.$refs.eventSwiper.swiper, this.eventNum)
                }
            }, {
                key: "handleNext",
                value: function() {
                    this.navigation.handleNext(this.$refs.eventSwiper.swiper, this.eventNum)
                }
            }, {
                key: "openVideo",
                value: function(e) {
                    this.$trackEvent("Button", "Click", "activity_play", String(this.curIndex), {
                        name: this.$getI18nWord("name_event".concat(this.curIndex))
                    });
                    var t = this.$getI18nWord("video_keyframes_event".concat(e));
                    o.IS_SEA || (t = this.$getI18nWord("video_keyframes_event".concat(e)) || "".concat(this.$getI18nWord("video_event".concat(e)), "?x-oss-process=video/snapshot,t_1,f_jpg,m_fast")),
                    this.$commonModal(cr, {
                        dialogInfo: {
                            videoSrc: this.$getI18nWord("video_event".concat(e)),
                            tsSrc: this.$getI18nWord("video_event".concat(e, "_ts")),
                            poster: t,
                            tip: this.$getI18nWord("tip_video_event".concat(e))
                        }
                    })
                }
            }, {
                key: "jumpToBbs",
                value: function(e) {
                    this.$trackEvent("Button", "Click", "activity_more", String(e), {
                        name: this.$getI18nWord("name_event".concat(e))
                    });
                    var t = this.bbsLink[e - 1];
                    t && this.$mJump(t)
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.$getI18nWord
                      , r = this.eventNum
                      , n = new Array(r).fill(1);
                    return (0,
                    l.h)("div", {
                        class: Zn.Z.wrap
                    }, [(0,
                    l.h)("swiper", {
                        ref: "eventSwiper",
                        attrs: {
                            options: this.swiperOption
                        },
                        on: {
                            slideChange: this.eventChange
                        }
                    }, [n.map((function(n, i) {
                        var a = i + 1
                          , c = [];
                        try {
                            c = JSON.parse(t("award_event".concat(a))).list
                        } catch (e) {
                            c = []
                        }
                        return (0,
                        l.h)("swiper-slide", {
                            class: Zn.Z.roleSwiper
                        }, [!m && e.bbsLink[i] && (0,
                        l.h)("div", {
                            class: Zn.Z.jumpTip,
                            on: {
                                click: e.jumpToBbs.bind(e, a)
                            },
                            domProps: {
                                innerHTML: t("jump_title_event")
                            }
                        }), (0,
                        l.h)("div", {
                            class: Zn.Z.leftWrap
                        }, [(0,
                        l.h)("div", {
                            class: Zn.Z.countBox
                        }, [!o.IS_SEA && (0,
                        l.h)("span", {
                            class: Zn.Z.decorateText
                        }, ["EVENT"]), (0,
                        l.h)("span", {
                            class: Zn.Z.count
                        }, [G(a)]), "/", G(r)]), (0,
                        l.h)("div", {
                            class: Zn.Z.title
                        }, [(0,
                        l.h)("div", {
                            class: Zn.Z.name,
                            domProps: {
                                innerHTML: t("name_event".concat(a))
                            }
                        }), t("video_event".concat(a)) && (0,
                        l.h)("img", {
                            class: Zn.Z.videoImg,
                            on: {
                                click: e.openVideo.bind(e, a)
                            },
                            attrs: {
                                src: Zt
                            }
                        })]), (0,
                        l.h)("div", {
                            class: Zn.Z.eventDes,
                            on: {
                                mousewheel: N,
                                touchStart: N,
                                touchend: N,
                                touchmove: N
                            }
                        }, [(0,
                        l.h)("vue-scroll", {
                            attrs: {
                                ops: b
                            },
                            ref: "scroll"
                        }, [(0,
                        l.h)("div", {
                            class: Zn.Z.content,
                            domProps: {
                                innerHTML: t("desc_event".concat(a))
                            }
                        })])])]), (0,
                        l.h)("div", {
                            class: Zn.Z.awardBox
                        }, [(0,
                        l.h)("div", {
                            class: Zn.Z.awardTitle,
                            directives: [{
                                name: "show",
                                value: c.length
                            }],
                            domProps: {
                                innerHTML: t("title_event_award")
                            }
                        }), (0,
                        l.h)("div", {
                            class: Zn.Z.awardGroup,
                            directives: [{
                                name: "show",
                                value: c.length
                            }]
                        }, [c.map((function(e) {
                            return (0,
                            l.h)("img", {
                                class: Zn.Z.awardItem,
                                attrs: {
                                    src: e.url
                                }
                            })
                        }
                        ))])])])
                    }
                    )), (0,
                    l.h)("div", {
                        class: Zn.Z.eventSwiperPagination
                    }, [(0,
                    l.h)("com-tab-sub", {
                        attrs: {
                            total: r,
                            mi18Key: "short_name_event",
                            curIndex: this.curIndex
                        },
                        on: {
                            slide: this.slideTo
                        }
                    })])])])
                }
            }],
            r && Fn(t.prototype, r),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            c
        }(f()),
        Nn = function(e, t, r, n, o) {
            var i = {};
            return Object.keys(n).forEach((function(e) {
                i[e] = n[e]
            }
            )),
            i.enumerable = !!i.enumerable,
            i.configurable = !!i.configurable,
            ("value"in i || i.initializer) && (i.writable = !0),
            void 0 === (i = r.slice().reverse().reduce((function(r, n) {
                return n(e, t, r) || r
            }
            ), i)).initializer && (Object.defineProperty(e, t, i),
            i = null),
            i
        }(Rn.prototype, "jumpTabIndex", [_n], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        Gn = Rn)) || Gn), $n = r(94083), eo = r.n($n), to = r(9596);
        function ro(e) {
            return ro = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            ,
            ro(e)
        }
        function no(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                r.push.apply(r, n)
            }
            return r
        }
        function oo(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, io(n.key), n)
            }
        }
        function io(e) {
            var t = function(e, t) {
                if ("object" !== ro(e) || null === e)
                    return e;
                var r = e[Symbol.toPrimitive];
                if (void 0 !== r) {
                    var n = r.call(e, "string");
                    if ("object" !== ro(n))
                        return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(e)
            }(e);
            return "symbol" === ro(t) ? t : String(t)
        }
        function ao(e, t) {
            return ao = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            ,
            ao(e, t)
        }
        function co(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function uo(e) {
            return uo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            ,
            uo(e)
        }
        var so, lo, fo, po, ho = (Yn = (0,
        Ie.wA)({
            components: {
                ComTabSub: xn
            }
        }),
        Jn = (0,
        i.State)("jumpTabIndex"),
        Yn((Qn = function(e) {
            !function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                }),
                t && ao(e, t)
            }(c, e);
            var t, r, n, i, a = (n = c,
            i = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }(),
            function() {
                var e, t = uo(n);
                if (i) {
                    var r = uo(this).constructor;
                    e = Reflect.construct(t, arguments, r)
                } else
                    e = t.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === ro(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return co(e)
                }(this, e)
            }
            );
            function c() {
                var e;
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, c);
                for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
                    r[n] = arguments[n];
                return function(e, t, r, n) {
                    r && Object.defineProperty(e, "jumpTabIndex", {
                        enumerable: r.enumerable,
                        configurable: r.configurable,
                        writable: r.writable,
                        value: r.initializer ? r.initializer.call(n) : void 0
                    })
                }(e = a.call.apply(a, [this].concat(r)), 0, Kn, co(e)),
                e.curIndex = 1,
                e.tabIndex = 1,
                e.navigation = {
                    handlePrev: function(e, t) {
                        0 === (null == e ? void 0 : e.activeIndex) ? e.slideTo(t - 1) : e.slidePrev()
                    },
                    handleNext: function(e, t) {
                        (null == e ? void 0 : e.activeIndex) === t - 1 ? e.slideTo(0) : e.slideNext()
                    },
                    transformPagination: function(e, t, r, n) {
                        r.style.transform = e !== t ? e > 2 ? "translateX(".concat(-n * (e - 2), "rem)") : "translateX(0)" : "translateX(".concat(-n * (e - 3), "rem)")
                    }
                },
                e
            }
            return t = c,
            r = [{
                key: "swiperOption",
                get: function() {
                    return function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? no(Object(r), !0).forEach((function(t) {
                                var n, o, i;
                                n = e,
                                o = t,
                                i = r[t],
                                (o = io(o))in n ? Object.defineProperty(n, o, {
                                    value: i,
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0
                                }) : n[o] = i
                            }
                            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : no(Object(r)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                            }
                            ))
                        }
                        return e
                    }({}, O)
                }
            }, {
                key: "tab1Num",
                get: function() {
                    return Number(this.$getI18nWord("tab1_num_scenes"))
                }
            }, {
                key: "tab2Num",
                get: function() {
                    return Number(this.$getI18nWord("tab2_num_scenes"))
                }
            }, {
                key: "bbsLink",
                get: function() {
                    var e = [];
                    try {
                        e = JSON.parse(this.$getI18nWord("tab".concat(this.tabIndex, "_link_scene_view")))
                    } catch (t) {
                        e = []
                    }
                    return e
                }
            }, {
                key: "mounted",
                value: function() {
                    if (this.$trackEvent("page", "show", "maze_show", "5"),
                    this.jumpTabIndex > this.tab1Num + this.tab2Num && ct({
                        jumpTabIndex: 1
                    }),
                    de[o.QS.pageIndex] === he.Scene) {
                        var e = Math.floor(this.jumpTabIndex / (this.tab1Num + 1))
                          , t = this.jumpTabIndex > this.tab1Num ? this.jumpTabIndex - this.tab1Num : this.jumpTabIndex;
                        this.$refs.sceneTabSwiper.swiper.slideTo(e),
                        this.$refs["sceneSwiper".concat(e + 1)].swiper.slideTo(t - 1)
                    }
                }
            }, {
                key: "slideTo",
                value: function(e) {
                    var t;
                    console.log(e, "slide"),
                    null === (t = this.$refs["sceneSwiper".concat(this.tabIndex)].swiper) || void 0 === t || t.slideTo(e - 1)
                }
            }, {
                key: "getFlatSceneIndex",
                value: function(e) {
                    return (this.tabIndex - 1) * this.tab1Num + e
                }
            }, {
                key: "sceneContentChange",
                value: function() {
                    var e, t = (null === (e = this.$refs["sceneSwiper".concat(this.tabIndex)].swiper) || void 0 === e ? void 0 : e.activeIndex) + 1;
                    this.$trackEvent("Button", "Click", "maze_switch", this.getFlatSceneIndex(t), {
                        name: this.$getI18nWord("tab".concat(this.tabIndex, "_name_scene").concat(t))
                    }),
                    this.curIndex = t,
                    this.$emit("changeScene", (this.tabIndex - 1) * this.tab1Num + t)
                }
            }, {
                key: "handlePrev",
                value: function() {
                    this.navigation.handlePrev(this.$refs["sceneSwiper".concat(this.tabIndex)].swiper, this["tab".concat(this.tabIndex, "Num")])
                }
            }, {
                key: "handleNext",
                value: function() {
                    this.navigation.handleNext(this.$refs["sceneSwiper".concat(this.tabIndex)].swiper, this["tab".concat(this.tabIndex, "Num")])
                }
            }, {
                key: "openVideo",
                value: function(e, t) {
                    this.$trackEvent("Button", "Click", "maze_play", e, {
                        name: this.$getI18nWord("tab".concat(t, "_name_scene").concat(e))
                    });
                    var r = this.$getI18nWord("tab".concat(t, "_video_keyframes_scene").concat(e));
                    o.IS_SEA || (r = this.$getI18nWord("tab".concat(t, "_video_keyframes_scene").concat(e)) || "".concat(this.$getI18nWord("tab".concat(t, "_video_scene").concat(e)), "?x-oss-process=video/snapshot,t_1,f_jpg,m_fast")),
                    this.$commonModal(cr, {
                        dialogInfo: {
                            videoSrc: this.$getI18nWord("tab".concat(t, "_video_scene").concat(e)),
                            tsSrc: this.$getI18nWord("tab".concat(t, "_video_scene").concat(e, "_ts")),
                            poster: r,
                            tip: this.$getI18nWord("tip_tab".concat(t, "_video_scene").concat(e))
                        }
                    })
                }
            }, {
                key: "jumpToBbs",
                value: function() {
                    this.$trackEvent("Button", "Click", "maze_more", String(this.curIndex), {
                        name: this.$getI18nWord("tab".concat(this.tabIndex, "_name_scene").concat(this.curIndex))
                    });
                    var e = this.bbsLink[this.curIndex - 1];
                    e && this.$mJump(e)
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.$getI18nWord
                      , r = this.tab1Num
                      , n = this.tab2Num
                      , i = new Array(r).fill(1)
                      , a = new Array(n).fill(1);
                    return (0,
                    l.h)("div", {
                        class: to.Z.wrap
                    }, [(0,
                    l.h)("swiper", {
                        ref: "sceneSwiper".concat(1),
                        attrs: {
                            options: this.swiperOption
                        },
                        on: {
                            slideChange: this.sceneContentChange
                        }
                    }, [[i, a][0].map((function(n, i) {
                        var a = i + 1;
                        return (0,
                        l.h)("swiper-slide", {
                            class: to.Z.sceneSwiper
                        }, [(0,
                        l.h)("div", {
                            class: to.Z.rightWrap,
                            on: {
                                mousewheel: N,
                                wheel: N,
                                touchStart: N,
                                touchend: N,
                                touchmove: N
                            }
                        }, [(0,
                        l.h)("div", {
                            class: to.Z.countBox
                        }, [!o.IS_SEA && (0,
                        l.h)("span", {
                            class: to.Z.decorateText
                        }, ["SCENE"]), (0,
                        l.h)("span", {
                            class: to.Z.count
                        }, [G(a)]), "/", G(r)]), (0,
                        l.h)("div", {
                            class: to.Z.title
                        }, [t("tab".concat(1, "_video_scene").concat(a)) && (0,
                        l.h)("img", {
                            class: to.Z.videoImg,
                            on: {
                                click: e.openVideo.bind(e, a, 1)
                            },
                            attrs: {
                                src: Zt
                            }
                        }), (0,
                        l.h)("div", {
                            class: to.Z.nameWrap
                        }, [(0,
                        l.h)("div", {
                            class: to.Z.name,
                            domProps: {
                                innerHTML: t("tab".concat(1, "_name_scene").concat(a))
                            }
                        })])]), (0,
                        l.h)("div", {
                            class: to.Z.eventDes
                        }, [(0,
                        l.h)("vue-scroll", {
                            attrs: {
                                ops: v
                            },
                            ref: "scroll"
                        }, [(0,
                        l.h)("div", {
                            class: to.Z.content,
                            domProps: {
                                innerHTML: t("tab".concat(1, "_desc_scene").concat(a))
                            }
                        })])])])])
                    }
                    )), (0,
                    l.h)("div", {
                        directives: [{
                            name: "show",
                            value: !m && this.bbsLink[this.curIndex - 1]
                        }],
                        class: to.Z.jumpTip,
                        on: {
                            click: this.jumpToBbs
                        },
                        domProps: {
                            innerHTML: t("jump_title_scene")
                        }
                    }), (0,
                    l.h)("div", {
                        class: to.Z.eventSwiperPagination
                    }, [(0,
                    l.h)("com-tab-sub", {
                        attrs: {
                            total: r,
                            mi18Key: "sub_name_scene",
                            curIndex: this.curIndex
                        },
                        on: {
                            slide: this.slideTo
                        }
                    })])])])
                }
            }],
            r && oo(t.prototype, r),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            c
        }(f()),
        Kn = function(e, t, r, n, o) {
            var i = {};
            return Object.keys(n).forEach((function(e) {
                i[e] = n[e]
            }
            )),
            i.enumerable = !!i.enumerable,
            i.configurable = !!i.configurable,
            ("value"in i || i.initializer) && (i.writable = !0),
            void 0 === (i = r.slice().reverse().reduce((function(r, n) {
                return n(e, t, r) || r
            }
            ), i)).initializer && (Object.defineProperty(e, t, i),
            i = null),
            i
        }(Qn.prototype, "jumpTabIndex", [Jn], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        Xn = Qn)) || Xn), yo = r(59385), vo = r.p + "act.hoyoverse.com/sr/event/e20230929version-rpg/images/icon_play_video.8be4b31d..png", bo = r.p + "act.hoyoverse.com/sr/event/e20230929version-rpg/images/icon_no_play_video.1ba337be..png";
        function mo(e) {
            return mo = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            ,
            mo(e)
        }
        function go(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                r.push.apply(r, n)
            }
            return r
        }
        function wo(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? go(Object(r), !0).forEach((function(t) {
                    var n, o, i;
                    n = e,
                    o = t,
                    i = r[t],
                    (o = Ao(o))in n ? Object.defineProperty(n, o, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : n[o] = i
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : go(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }
                ))
            }
            return e
        }
        function Oo(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, Ao(n.key), n)
            }
        }
        function Ao(e) {
            var t = function(e, t) {
                if ("object" !== mo(e) || null === e)
                    return e;
                var r = e[Symbol.toPrimitive];
                if (void 0 !== r) {
                    var n = r.call(e, "string");
                    if ("object" !== mo(n))
                        return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(e)
            }(e);
            return "symbol" === mo(t) ? t : String(t)
        }
        function ko(e, t) {
            return ko = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            ,
            ko(e, t)
        }
        function So(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function jo(e) {
            return jo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            ,
            jo(e)
        }
        var xo, Io, Eo, Po, To = (so = (0,
        i.State)("jumpTabIndex"),
        (0,
        Ie.wA)((fo = function(e) {
            !function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                }),
                t && ko(e, t)
            }(c, e);
            var t, r, n, i, a = (n = c,
            i = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }(),
            function() {
                var e, t = jo(n);
                if (i) {
                    var r = jo(this).constructor;
                    e = Reflect.construct(t, arguments, r)
                } else
                    e = t.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === mo(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return So(e)
                }(this, e)
            }
            );
            function c() {
                var e;
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, c);
                for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
                    r[n] = arguments[n];
                return function(e, t, r, n) {
                    r && Object.defineProperty(e, "jumpTabIndex", {
                        enumerable: r.enumerable,
                        configurable: r.configurable,
                        writable: r.writable,
                        value: r.initializer ? r.initializer.call(n) : void 0
                    })
                }(e = a.call.apply(a, [this].concat(r)), 0, po, So(e)),
                e.curIndex = 1,
                e.navigation = {
                    handlePrev: function(e, t) {
                        0 === (null == e ? void 0 : e.activeIndex) ? e.slideTo(t - 1) : e.slidePrev()
                    },
                    handleNext: function(e, t) {
                        (null == e ? void 0 : e.activeIndex) === t - 1 ? e.slideTo(0) : e.slideNext()
                    },
                    transformPagination: function(e, t, r, n) {
                        r.style.transform = e !== t ? e > 2 ? "translateX(".concat(-n * (e - 2), "rem)") : "translateX(0)" : "translateX(".concat(-n * (e - 3), "rem)")
                    }
                },
                e
            }
            return t = c,
            r = [{
                key: "playTabs",
                get: function() {
                    var e = null;
                    try {
                        e = JSON.parse(this.$getI18nWord("tabs_play"))
                    } catch (t) {
                        e = []
                    }
                    return e
                }
            }, {
                key: "swiperOption",
                get: function() {
                    var e = this;
                    return wo(wo({}, O), {}, {
                        pagination: {
                            el: ".play-swiper-pagination",
                            clickable: !0,
                            renderBullet: function(t, r) {
                                return '<div class="'.concat(r, ' play-swiper-bullet-custom">\n                    ').concat(e.playTabs[t], "\n                  </div>")
                            }
                        }
                    })
                }
            }, {
                key: "bbsLink",
                get: function() {
                    var e = [];
                    try {
                        e = JSON.parse(this.$getI18nWord("link_play_view"))
                    } catch (t) {
                        e = []
                    }
                    return e
                }
            }, {
                key: "playNum",
                get: function() {
                    return Number(this.$getI18nWord("num_play"))
                }
            }, {
                key: "mounted",
                value: function() {
                    this.$trackEvent("page", "show", "mechanics_show", "8"),
                    this.jumpTabIndex > this.playNum && ct({
                        jumpTabIndex: 1
                    }),
                    de[o.QS.pageIndex] === he.Other && this.$refs.playSwiper.swiper.slideTo(this.jumpTabIndex - 1)
                }
            }, {
                key: "playChange",
                value: function() {
                    var e, t = (null === (e = this.$refs.playSwiper.swiper) || void 0 === e ? void 0 : e.activeIndex) + 1;
                    this.$trackEvent("Button", "Click", "mechanics_switch", String(t), {
                        name: this.playTabs[t]
                    }),
                    this.navigation.transformPagination(t, this.playNum, this.$refs.pagination, 2.99),
                    this.curIndex = t
                }
            }, {
                key: "handlePrev",
                value: function() {
                    this.navigation.handlePrev(this.$refs.playSwiper.swiper, this.playNum)
                }
            }, {
                key: "handleNext",
                value: function() {
                    this.navigation.handleNext(this.$refs.playSwiper.swiper, this.playNum)
                }
            }, {
                key: "openVideo",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                    this.$trackEvent("Button", "Click", "mechanics_play", String(e), {
                        name: this.playTabs[e - 1]
                    });
                    var t = this.$getI18nWord("video_keyframes_play".concat(e));
                    o.IS_SEA || (t = this.$getI18nWord("video_keyframes_play".concat(e)) || "".concat(this.$getI18nWord("video_play".concat(e)), "?x-oss-process=video/snapshot,t_1,f_jpg,m_fast")),
                    this.$commonModal(cr, {
                        dialogInfo: {
                            videoSrc: this.$getI18nWord("video_play".concat(e)),
                            tsSrc: this.$getI18nWord("video_play".concat(e, "_ts")),
                            poster: t,
                            tip: this.$getI18nWord("tip_video_play".concat(e))
                        }
                    })
                }
            }, {
                key: "jumpToBbs",
                value: function(e) {
                    this.$trackEvent("Button", "Click", "mechanics_more", String(e), {
                        name: this.playTabs[e]
                    });
                    var t = this.bbsLink[e - 1];
                    t && this.$mJump(t)
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.$getI18nWord
                      , r = this.playTabs;
                    return (0,
                    l.h)("div", {
                        class: yo.Z.wrap
                    }, [(0,
                    l.h)("swiper", {
                        class: yo.Z.playSwiperContiner,
                        ref: "playSwiper",
                        attrs: {
                            options: this.swiperOption
                        },
                        on: {
                            slideChange: this.playChange
                        }
                    }, [r.map((function(r, n) {
                        var i = n + 1
                          , a = t("img_play".concat(i))
                          , c = [];
                        try {
                            c = JSON.parse(t("award_play".concat(i))).list
                        } catch (e) {
                            c = []
                        }
                        return (0,
                        l.h)("swiper-slide", {
                            class: yo.Z.playSwiper
                        }, [(0,
                        l.h)("div", {
                            class: yo.Z.playSwiperLeft
                        }, [(0,
                        l.h)("div", {
                            class: yo.Z.playView,
                            style: "background-image: url(".concat(a, ")")
                        }, [!m && e.bbsLink[n] && (0,
                        l.h)("div", {
                            class: yo.Z.jumpTip,
                            on: {
                                click: e.jumpToBbs.bind(e, i)
                            },
                            domProps: {
                                innerHTML: t("jump_title_play")
                            }
                        })])]), (0,
                        l.h)("div", {
                            class: yo.Z.playSwiperRight
                        }, [(0,
                        l.h)("div", {
                            class: yo.Z.countBox
                        }, [!o.IS_SEA && (0,
                        l.h)("span", {
                            class: yo.Z.decorateText
                        }, [t("play_text_hold")]), (0,
                        l.h)("span", {
                            class: yo.Z.count
                        }, [G(i)]), "/", G(e.playNum)]), (0,
                        l.h)("div", {
                            class: yo.Z.title
                        }, [t("video_play".concat(i)) ? (0,
                        l.h)("img", {
                            class: yo.Z.videoImg,
                            on: {
                                click: e.openVideo.bind(e, i)
                            },
                            attrs: {
                                src: vo
                            }
                        }) : (0,
                        l.h)("img", {
                            class: [yo.Z.videoImg, yo.Z.noPointer],
                            attrs: {
                                src: bo
                            }
                        }), (0,
                        l.h)("div", {
                            class: yo.Z.name,
                            domProps: {
                                innerHTML: t("name_play".concat(i))
                            }
                        })]), (0,
                        l.h)("div", {
                            class: yo.Z.playDes,
                            on: {
                                mousewheel: N,
                                touchStart: N,
                                touchend: N,
                                touchmove: N
                            }
                        }, [(0,
                        l.h)("vue-scroll", {
                            attrs: {
                                ops: v
                            },
                            ref: "scroll"
                        }, [(0,
                        l.h)("div", {
                            class: yo.Z.content,
                            domProps: {
                                innerHTML: t("des_play".concat(i))
                            }
                        })])]), (0,
                        l.h)("div", {
                            class: yo.Z.awardBox
                        }, [(0,
                        l.h)("div", {
                            class: yo.Z.awardTitle,
                            directives: [{
                                name: "show",
                                value: c.length
                            }],
                            domProps: {
                                innerHTML: t("title_play_award")
                            }
                        }), (0,
                        l.h)("div", {
                            class: yo.Z.awardGroup,
                            directives: [{
                                name: "show",
                                value: c.length
                            }]
                        }, [c.map((function(e) {
                            return (0,
                            l.h)("img", {
                                class: yo.Z.awardItem,
                                attrs: {
                                    src: e.url
                                }
                            })
                        }
                        ))])])])])
                    }
                    )), (0,
                    l.h)("div", {
                        class: yo.Z.playSwiperPaginationBox
                    }, [(0,
                    l.h)("div", {
                        ref: "pagination",
                        class: ["play-swiper-pagination", yo.Z.playSwiperPagination],
                        slot: "pagination"
                    })]), this.playNum > 3 && (0,
                    l.h)("div", {
                        class: yo.Z.swiperNavigation
                    }, [(0,
                    l.h)("img", {
                        on: {
                            click: this.handlePrev
                        },
                        class: ["play-swiper-navigation-prev", yo.Z.swiperNavigationLeft],
                        attrs: {
                            src: Dt
                        }
                    }), (0,
                    l.h)("img", {
                        on: {
                            click: this.handleNext
                        },
                        class: ["play-swiper-navigation-next", yo.Z.swiperNavigationRight],
                        attrs: {
                            src: zt
                        }
                    })])])])
                }
            }],
            r && Oo(t.prototype, r),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            c
        }(f()),
        po = function(e, t, r, n, o) {
            var i = {};
            return Object.keys(n).forEach((function(e) {
                i[e] = n[e]
            }
            )),
            i.enumerable = !!i.enumerable,
            i.configurable = !!i.configurable,
            ("value"in i || i.initializer) && (i.writable = !0),
            void 0 === (i = r.slice().reverse().reduce((function(r, n) {
                return n(e, t, r) || r
            }
            ), i)).initializer && (Object.defineProperty(e, t, i),
            i = null),
            i
        }(fo.prototype, "jumpTabIndex", [so], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        lo = fo)) || lo), Lo = r(5184), Co = r.p + "act.hoyoverse.com/sr/event/e20230929version-rpg/images/icon_enemy_video.ce45969b..png", Bo = r.p + "act.hoyoverse.com/sr/event/e20230929version-rpg/images/icon_no_enemy_video.e4333a22..png";
        function _o(e) {
            return _o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            ,
            _o(e)
        }
        function Go(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                r.push.apply(r, n)
            }
            return r
        }
        function Ro(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Go(Object(r), !0).forEach((function(t) {
                    var n, o, i;
                    n = e,
                    o = t,
                    i = r[t],
                    (o = Wo(o))in n ? Object.defineProperty(n, o, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : n[o] = i
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Go(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }
                ))
            }
            return e
        }
        function No(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, Wo(n.key), n)
            }
        }
        function Wo(e) {
            var t = function(e, t) {
                if ("object" !== _o(e) || null === e)
                    return e;
                var r = e[Symbol.toPrimitive];
                if (void 0 !== r) {
                    var n = r.call(e, "string");
                    if ("object" !== _o(n))
                        return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(e)
            }(e);
            return "symbol" === _o(t) ? t : String(t)
        }
        function Zo(e, t) {
            return Zo = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            ,
            Zo(e, t)
        }
        function Do(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function zo(e) {
            return zo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            ,
            zo(e)
        }
        var Fo, Mo, Ho, Vo, Uo = (xo = (0,
        i.State)("jumpTabIndex"),
        (0,
        Ie.wA)((Eo = function(e) {
            !function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                }),
                t && Zo(e, t)
            }(c, e);
            var t, r, n, i, a = (n = c,
            i = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }(),
            function() {
                var e, t = zo(n);
                if (i) {
                    var r = zo(this).constructor;
                    e = Reflect.construct(t, arguments, r)
                } else
                    e = t.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === _o(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return Do(e)
                }(this, e)
            }
            );
            function c() {
                var e;
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, c);
                for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
                    r[n] = arguments[n];
                return function(e, t, r, n) {
                    r && Object.defineProperty(e, "jumpTabIndex", {
                        enumerable: r.enumerable,
                        configurable: r.configurable,
                        writable: r.writable,
                        value: r.initializer ? r.initializer.call(n) : void 0
                    })
                }(e = a.call.apply(a, [this].concat(r)), 0, Po, Do(e)),
                e.curIndex = 1,
                e
            }
            return t = c,
            (r = [{
                key: "swiperOption",
                get: function() {
                    var e = this;
                    return Ro(Ro({}, O), {}, {
                        pagination: {
                            el: ".enemy-swiper-pagination",
                            clickable: !0,
                            renderBullet: function(t, r) {
                                if (e.enemyNum < 2)
                                    return "";
                                var n = t + 1;
                                return '<div class="'.concat(r, ' enemy-swiper-bullet-custom">\n                    <img class="enemy-swiper-img" src="').concat(e.$getI18nWord("icon_enemy".concat(n)), '" />\n                  </div>')
                            }
                        }
                    })
                }
            }, {
                key: "enemyNum",
                get: function() {
                    return Number(this.$getI18nWord("num_enemy"))
                }
            }, {
                key: "bbsLink",
                get: function() {
                    var e = [];
                    try {
                        e = JSON.parse(this.$getI18nWord("link_enemy_view"))
                    } catch (t) {
                        e = []
                    }
                    return e
                }
            }, {
                key: "openVideo",
                value: function(e) {
                    this.$trackEvent("Button", "Click", "monster_play", e, {
                        name: this.$getI18nWord("name_enemy".concat(this.curIndex))
                    });
                    var t = this.$getI18nWord("video_keyframes_enemy".concat(e));
                    o.IS_SEA || (t = this.$getI18nWord("video_keyframes_enemy".concat(e)) || "".concat(this.$getI18nWord("video_enemy".concat(e)), "?x-oss-process=video/snapshot,t_1,f_jpg,m_fast")),
                    this.$commonModal(cr, {
                        dialogInfo: {
                            videoSrc: this.$getI18nWord("video_enemy".concat(e)),
                            tsSrc: this.$getI18nWord("video_enemy".concat(e, "_ts")),
                            poster: t,
                            tip: this.$getI18nWord("tip_video_enemy".concat(e))
                        }
                    })
                }
            }, {
                key: "mounted",
                value: function() {
                    this.$trackEvent("page", "show", "monster_show", "6"),
                    this.jumpTabIndex > this.enemyNum && ct({
                        jumpTabIndex: 1
                    }),
                    de[o.QS.pageIndex] === he.Boss && this.$refs.enemySwiper.swiper.slideTo(this.jumpTabIndex - 1)
                }
            }, {
                key: "jumpToBbs",
                value: function() {
                    this.$trackEvent("Button", "Click", "monster_more", String(this.curIndex), {
                        name: this.$getI18nWord("name_enemy".concat(this.curIndex))
                    });
                    var e = this.bbsLink[this.curIndex - 1];
                    e && this.$mJump(e)
                }
            }, {
                key: "enemyChange",
                value: function() {
                    var e;
                    this.curIndex = (null === (e = this.$refs.enemySwiper.swiper) || void 0 === e ? void 0 : e.activeIndex) + 1,
                    this.$trackEvent("Button", "Click", "monster_switch", String(this.curIndex), {
                        name: this.$getI18nWord("name_enemy".concat(this.curIndex))
                    }),
                    this.$emit("changeEnemy", this.curIndex)
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.$getI18nWord
                      , r = new Array(this.enemyNum).fill(1);
                    return (0,
                    l.h)("div", {
                        class: Lo.Z.wrap
                    }, [(0,
                    l.h)("swiper", {
                        ref: "enemySwiper",
                        attrs: {
                            options: this.swiperOption
                        },
                        on: {
                            slideChange: this.enemyChange
                        }
                    }, [r.map((function(r, n) {
                        var o = n + 1;
                        return (0,
                        l.h)("swiper-slide", {
                            class: Lo.Z.enemySwiper
                        }, [(0,
                        l.h)("div", {
                            class: Lo.Z.title
                        }, [t("video_enemy".concat(o)) ? (0,
                        l.h)("img", {
                            class: Lo.Z.videoImg,
                            on: {
                                click: e.openVideo.bind(e, o)
                            },
                            attrs: {
                                src: Co
                            }
                        }) : (0,
                        l.h)("img", {
                            class: [Lo.Z.videoImg, Lo.Z.noPointer],
                            attrs: {
                                src: Bo
                            }
                        }), (0,
                        l.h)("div", {
                            class: Lo.Z.name,
                            domProps: {
                                innerHTML: t("name_enemy".concat(o))
                            }
                        })]), (0,
                        l.h)("div", {
                            class: Lo.Z.eventDes,
                            on: {
                                mousewheel: N,
                                touchStart: N,
                                touchend: N,
                                touchmove: N
                            }
                        }, [(0,
                        l.h)("vue-scroll", {
                            attrs: {
                                ops: v
                            },
                            ref: "scroll"
                        }, [(0,
                        l.h)("div", {
                            class: Lo.Z.content,
                            domProps: {
                                innerHTML: t("desc_enemy".concat(o))
                            }
                        })])])])
                    }
                    )), (0,
                    l.h)("div", {
                        class: ["enemy-swiper-pagination", Lo.Z.enemySwiperPagination],
                        slot: "pagination"
                    })]), (0,
                    l.h)("div", {
                        directives: [{
                            name: "show",
                            value: !m && this.bbsLink[this.curIndex - 1]
                        }],
                        class: Lo.Z.jumpTip,
                        on: {
                            click: this.jumpToBbs
                        },
                        domProps: {
                            innerHTML: t("jump_title_enemy")
                        }
                    })])
                }
            }]) && No(t.prototype, r),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            c
        }(f()),
        Po = function(e, t, r, n, o) {
            var i = {};
            return Object.keys(n).forEach((function(e) {
                i[e] = n[e]
            }
            )),
            i.enumerable = !!i.enumerable,
            i.configurable = !!i.configurable,
            ("value"in i || i.initializer) && (i.writable = !0),
            void 0 === (i = r.slice().reverse().reduce((function(r, n) {
                return n(e, t, r) || r
            }
            ), i)).initializer && (Object.defineProperty(e, t, i),
            i = null),
            i
        }(Eo.prototype, "jumpTabIndex", [xo], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        Io = Eo)) || Io), Yo = r(57768);
        function Jo(e) {
            return Jo = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            ,
            Jo(e)
        }
        function Xo(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                r.push.apply(r, n)
            }
            return r
        }
        function Qo(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Xo(Object(r), !0).forEach((function(t) {
                    var n, o, i;
                    n = e,
                    o = t,
                    i = r[t],
                    (o = qo(o))in n ? Object.defineProperty(n, o, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : n[o] = i
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Xo(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }
                ))
            }
            return e
        }
        function Ko(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, qo(n.key), n)
            }
        }
        function qo(e) {
            var t = function(e, t) {
                if ("object" !== Jo(e) || null === e)
                    return e;
                var r = e[Symbol.toPrimitive];
                if (void 0 !== r) {
                    var n = r.call(e, "string");
                    if ("object" !== Jo(n))
                        return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(e)
            }(e);
            return "symbol" === Jo(t) ? t : String(t)
        }
        function $o(e, t) {
            return $o = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            ,
            $o(e, t)
        }
        function ei(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function ti(e) {
            return ti = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            ,
            ti(e)
        }
        var ri, ni, oi, ii, ai, ci, ui, si, li, fi, pi, hi, di, yi, vi = (Fo = (0,
        i.State)("jumpTabIndex"),
        (0,
        Ie.wA)((Ho = function(e) {
            !function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                }),
                t && $o(e, t)
            }(c, e);
            var t, r, n, i, a = (n = c,
            i = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }(),
            function() {
                var e, t = ti(n);
                if (i) {
                    var r = ti(this).constructor;
                    e = Reflect.construct(t, arguments, r)
                } else
                    e = t.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === Jo(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return ei(e)
                }(this, e)
            }
            );
            function c() {
                var e;
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, c);
                for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
                    r[n] = arguments[n];
                return function(e, t, r, n) {
                    r && Object.defineProperty(e, "jumpTabIndex", {
                        enumerable: r.enumerable,
                        configurable: r.configurable,
                        writable: r.writable,
                        value: r.initializer ? r.initializer.call(n) : void 0
                    })
                }(e = a.call.apply(a, [this].concat(r)), 0, Vo, ei(e)),
                e.curIndex = 1,
                e
            }
            return t = c,
            (r = [{
                key: "swiperOption",
                get: function() {
                    var e = this;
                    return Qo(Qo({}, O), {}, {
                        pagination: {
                            el: ".relic-swiper-pagination",
                            clickable: !0,
                            renderBullet: function(t, r) {
                                var n = t + 1;
                                return '<div class="'.concat(r, ' relic-swiper-bullet-custom">\n                    <img class="relic-swiper-img" src="').concat(e.$getI18nWord("icon_relic".concat(n)), '" />\n                  </div>')
                            }
                        }
                    })
                }
            }, {
                key: "relicNum",
                get: function() {
                    return Number(this.$getI18nWord("num_relic"))
                }
            }, {
                key: "bbsLink",
                get: function() {
                    var e = [];
                    try {
                        e = JSON.parse(this.$getI18nWord("link_relic_view"))
                    } catch (t) {
                        e = []
                    }
                    return e
                }
            }, {
                key: "mounted",
                value: function() {
                    this.$trackEvent("page", "show", "relic_show", "7"),
                    this.jumpTabIndex > this.relicNum && ct({
                        jumpTabIndex: 1
                    }),
                    de[o.QS.pageIndex] === he.Yiqi && this.$refs.relicSwiper.swiper.slideTo(this.jumpTabIndex - 1)
                }
            }, {
                key: "jumpToBbs",
                value: function() {
                    this.$trackEvent("Button", "Click", "relic_more", String(this.curIndex), {
                        name: this.$getI18nWord("name_relic".concat(this.curIndex))
                    });
                    var e = this.bbsLink[this.curIndex - 1];
                    e && this.$mJump(e)
                }
            }, {
                key: "relicChange",
                value: function() {
                    var e;
                    this.curIndex = (null === (e = this.$refs.relicSwiper.swiper) || void 0 === e ? void 0 : e.activeIndex) + 1,
                    this.$trackEvent("Button", "Click", "relic_switch", String(this.curIndex), {
                        name: this.$getI18nWord("name_relic".concat(this.curIndex))
                    })
                }
            }, {
                key: "getpropertyImgArr",
                value: function(e) {
                    try {
                        return JSON.parse(this.$getI18nWord("img_relic".concat(e))).list
                    } catch (e) {
                        return []
                    }
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.$getI18nWord
                      , r = new Array(this.relicNum).fill(1);
                    return (0,
                    l.h)("div", {
                        class: Yo.Z.wrap
                    }, [(0,
                    l.h)("swiper", {
                        ref: "relicSwiper",
                        attrs: {
                            options: this.swiperOption
                        },
                        on: {
                            slideChange: this.relicChange
                        }
                    }, [r.map((function(r, n) {
                        var o = n + 1
                          , i = e.getpropertyImgArr(o);
                        return (0,
                        l.h)("swiper-slide", {
                            class: Yo.Z.relicSwiper
                        }, [(0,
                        l.h)("div", {
                            class: Yo.Z.slideLeft
                        }, [(0,
                        l.h)("div", {
                            class: Yo.Z.title
                        }, [(0,
                        l.h)("div", {
                            class: Yo.Z.awardTitle,
                            domProps: {
                                innerHTML: t("title_relic_name".concat(o))
                            }
                        }), (0,
                        l.h)("img", {
                            class: Yo.Z.star,
                            attrs: {
                                src: t("star_relic".concat(o))
                            }
                        })]), (0,
                        l.h)("div", {
                            class: Yo.Z.mainImg
                        }, [(0,
                        l.h)("img", {
                            attrs: {
                                src: e.$getI18nWord("main_img_relic".concat(o))
                            }
                        })]), (0,
                        l.h)("div", {
                            class: Yo.Z.originTitle,
                            directives: [{
                                name: "show",
                                value: t("origin_desc_relic".concat(o))
                            }]
                        }, [t("origin_relic")]), (0,
                        l.h)("div", {
                            directives: [{
                                name: "show",
                                value: t("origin_desc_relic".concat(o))
                            }],
                            class: Yo.Z.originDes,
                            on: {
                                mousewheel: N,
                                touchStart: N,
                                touchend: N,
                                touchmove: N
                            }
                        }, [(0,
                        l.h)("vue-scroll", {
                            attrs: {
                                ops: v
                            },
                            ref: "scroll"
                        }, [(0,
                        l.h)("div", {
                            class: Yo.Z.content,
                            domProps: {
                                innerHTML: t("origin_desc_relic".concat(o))
                            }
                        })])])]), (0,
                        l.h)("div", {
                            class: Yo.Z.slideRight
                        }, [(0,
                        l.h)("div", {
                            class: Yo.Z.contentImg
                        }, [i.map((function(e) {
                            return (0,
                            l.h)("div", {
                                class: Yo.Z.contentImgItem
                            }, [(0,
                            l.h)("img", {
                                attrs: {
                                    src: e.url
                                }
                            })])
                        }
                        ))]), (0,
                        l.h)("div", {
                            directives: [{
                                name: "show",
                                value: t("property_desc_relic".concat(o))
                            }],
                            class: Yo.Z.propertyTitle
                        }, [t("property_relic")]), (0,
                        l.h)("div", {
                            directives: [{
                                name: "show",
                                value: t("property_desc_relic".concat(o))
                            }],
                            class: Yo.Z.propertyDes,
                            on: {
                                mousewheel: N,
                                touchStart: N,
                                touchend: N,
                                touchmove: N
                            }
                        }, [(0,
                        l.h)("vue-scroll", {
                            attrs: {
                                ops: v
                            },
                            ref: "scroll"
                        }, [(0,
                        l.h)("div", {
                            class: Yo.Z.content,
                            domProps: {
                                innerHTML: t("property_desc_relic".concat(o))
                            }
                        })])])])])
                    }
                    )), (0,
                    l.h)("div", {
                        class: ["relic-swiper-pagination", Yo.Z.relicSwiperPagination],
                        slot: "pagination"
                    })]), (0,
                    l.h)("div", {
                        directives: [{
                            name: "show",
                            value: !m && this.bbsLink[this.curIndex - 1]
                        }],
                        class: Yo.Z.jumpTip,
                        on: {
                            click: this.jumpToBbs
                        },
                        domProps: {
                            innerHTML: t("jump_title_relic")
                        }
                    })])
                }
            }]) && Ko(t.prototype, r),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            c
        }(f()),
        Vo = function(e, t, r, n, o) {
            var i = {};
            return Object.keys(n).forEach((function(e) {
                i[e] = n[e]
            }
            )),
            i.enumerable = !!i.enumerable,
            i.configurable = !!i.configurable,
            ("value"in i || i.initializer) && (i.writable = !0),
            void 0 === (i = r.slice().reverse().reduce((function(r, n) {
                return n(e, t, r) || r
            }
            ), i)).initializer && (Object.defineProperty(e, t, i),
            i = null),
            i
        }(Ho.prototype, "jumpTabIndex", [Fo], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        Mo = Ho)) || Mo), bi = r(54945), mi = r.n(bi);
        function gi(e) {
            return gi = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            ,
            gi(e)
        }
        function wi(e, t, r) {
            return (t = xi(t))in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r,
            e
        }
        function Oi() {
            Oi = function() {
                return t
            }
            ;
            var e, t = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function(e, t, r) {
                e[t] = r.value
            }
            , i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag";
            function s(e, t, r) {
                return Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }),
                e[t]
            }
            try {
                s({}, "")
            } catch (e) {
                s = function(e, t, r) {
                    return e[t] = r
                }
            }
            function l(e, t, r, n) {
                var i = t && t.prototype instanceof b ? t : b
                  , a = Object.create(i.prototype)
                  , c = new T(n || []);
                return o(a, "_invoke", {
                    value: x(e, r, c)
                }),
                a
            }
            function f(e, t, r) {
                try {
                    return {
                        type: "normal",
                        arg: e.call(t, r)
                    }
                } catch (e) {
                    return {
                        type: "throw",
                        arg: e
                    }
                }
            }
            t.wrap = l;
            var p = "suspendedStart"
              , h = "suspendedYield"
              , d = "executing"
              , y = "completed"
              , v = {};
            function b() {}
            function m() {}
            function g() {}
            var w = {};
            s(w, a, (function() {
                return this
            }
            ));
            var O = Object.getPrototypeOf
              , A = O && O(O(L([])));
            A && A !== r && n.call(A, a) && (w = A);
            var k = g.prototype = b.prototype = Object.create(w);
            function S(e) {
                ["next", "throw", "return"].forEach((function(t) {
                    s(e, t, (function(e) {
                        return this._invoke(t, e)
                    }
                    ))
                }
                ))
            }
            function j(e, t) {
                function r(o, i, a, c) {
                    var u = f(e[o], e, i);
                    if ("throw" !== u.type) {
                        var s = u.arg
                          , l = s.value;
                        return l && "object" == gi(l) && n.call(l, "__await") ? t.resolve(l.__await).then((function(e) {
                            r("next", e, a, c)
                        }
                        ), (function(e) {
                            r("throw", e, a, c)
                        }
                        )) : t.resolve(l).then((function(e) {
                            s.value = e,
                            a(s)
                        }
                        ), (function(e) {
                            return r("throw", e, a, c)
                        }
                        ))
                    }
                    c(u.arg)
                }
                var i;
                o(this, "_invoke", {
                    value: function(e, n) {
                        function o() {
                            return new t((function(t, o) {
                                r(e, n, t, o)
                            }
                            ))
                        }
                        return i = i ? i.then(o, o) : o()
                    }
                })
            }
            function x(t, r, n) {
                var o = p;
                return function(i, a) {
                    if (o === d)
                        throw new Error("Generator is already running");
                    if (o === y) {
                        if ("throw" === i)
                            throw a;
                        return {
                            value: e,
                            done: !0
                        }
                    }
                    for (n.method = i,
                    n.arg = a; ; ) {
                        var c = n.delegate;
                        if (c) {
                            var u = I(c, n);
                            if (u) {
                                if (u === v)
                                    continue;
                                return u
                            }
                        }
                        if ("next" === n.method)
                            n.sent = n._sent = n.arg;
                        else if ("throw" === n.method) {
                            if (o === p)
                                throw o = y,
                                n.arg;
                            n.dispatchException(n.arg)
                        } else
                            "return" === n.method && n.abrupt("return", n.arg);
                        o = d;
                        var s = f(t, r, n);
                        if ("normal" === s.type) {
                            if (o = n.done ? y : h,
                            s.arg === v)
                                continue;
                            return {
                                value: s.arg,
                                done: n.done
                            }
                        }
                        "throw" === s.type && (o = y,
                        n.method = "throw",
                        n.arg = s.arg)
                    }
                }
            }
            function I(t, r) {
                var n = r.method
                  , o = t.iterator[n];
                if (o === e)
                    return r.delegate = null,
                    "throw" === n && t.iterator.return && (r.method = "return",
                    r.arg = e,
                    I(t, r),
                    "throw" === r.method) || "return" !== n && (r.method = "throw",
                    r.arg = new TypeError("The iterator does not provide a '" + n + "' method")),
                    v;
                var i = f(o, t.iterator, r.arg);
                if ("throw" === i.type)
                    return r.method = "throw",
                    r.arg = i.arg,
                    r.delegate = null,
                    v;
                var a = i.arg;
                return a ? a.done ? (r[t.resultName] = a.value,
                r.next = t.nextLoc,
                "return" !== r.method && (r.method = "next",
                r.arg = e),
                r.delegate = null,
                v) : a : (r.method = "throw",
                r.arg = new TypeError("iterator result is not an object"),
                r.delegate = null,
                v)
            }
            function E(e) {
                var t = {
                    tryLoc: e[0]
                };
                1 in e && (t.catchLoc = e[1]),
                2 in e && (t.finallyLoc = e[2],
                t.afterLoc = e[3]),
                this.tryEntries.push(t)
            }
            function P(e) {
                var t = e.completion || {};
                t.type = "normal",
                delete t.arg,
                e.completion = t
            }
            function T(e) {
                this.tryEntries = [{
                    tryLoc: "root"
                }],
                e.forEach(E, this),
                this.reset(!0)
            }
            function L(t) {
                if (t || "" === t) {
                    var r = t[a];
                    if (r)
                        return r.call(t);
                    if ("function" == typeof t.next)
                        return t;
                    if (!isNaN(t.length)) {
                        var o = -1
                          , i = function r() {
                            for (; ++o < t.length; )
                                if (n.call(t, o))
                                    return r.value = t[o],
                                    r.done = !1,
                                    r;
                            return r.value = e,
                            r.done = !0,
                            r
                        };
                        return i.next = i
                    }
                }
                throw new TypeError(gi(t) + " is not iterable")
            }
            return m.prototype = g,
            o(k, "constructor", {
                value: g,
                configurable: !0
            }),
            o(g, "constructor", {
                value: m,
                configurable: !0
            }),
            m.displayName = s(g, u, "GeneratorFunction"),
            t.isGeneratorFunction = function(e) {
                var t = "function" == typeof e && e.constructor;
                return !!t && (t === m || "GeneratorFunction" === (t.displayName || t.name))
            }
            ,
            t.mark = function(e) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(e, g) : (e.__proto__ = g,
                s(e, u, "GeneratorFunction")),
                e.prototype = Object.create(k),
                e
            }
            ,
            t.awrap = function(e) {
                return {
                    __await: e
                }
            }
            ,
            S(j.prototype),
            s(j.prototype, c, (function() {
                return this
            }
            )),
            t.AsyncIterator = j,
            t.async = function(e, r, n, o, i) {
                void 0 === i && (i = Promise);
                var a = new j(l(e, r, n, o),i);
                return t.isGeneratorFunction(r) ? a : a.next().then((function(e) {
                    return e.done ? e.value : a.next()
                }
                ))
            }
            ,
            S(k),
            s(k, u, "Generator"),
            s(k, a, (function() {
                return this
            }
            )),
            s(k, "toString", (function() {
                return "[object Generator]"
            }
            )),
            t.keys = function(e) {
                var t = Object(e)
                  , r = [];
                for (var n in t)
                    r.push(n);
                return r.reverse(),
                function e() {
                    for (; r.length; ) {
                        var n = r.pop();
                        if (n in t)
                            return e.value = n,
                            e.done = !1,
                            e
                    }
                    return e.done = !0,
                    e
                }
            }
            ,
            t.values = L,
            T.prototype = {
                constructor: T,
                reset: function(t) {
                    if (this.prev = 0,
                    this.next = 0,
                    this.sent = this._sent = e,
                    this.done = !1,
                    this.delegate = null,
                    this.method = "next",
                    this.arg = e,
                    this.tryEntries.forEach(P),
                    !t)
                        for (var r in this)
                            "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = e)
                },
                stop: function() {
                    this.done = !0;
                    var e = this.tryEntries[0].completion;
                    if ("throw" === e.type)
                        throw e.arg;
                    return this.rval
                },
                dispatchException: function(t) {
                    if (this.done)
                        throw t;
                    var r = this;
                    function o(n, o) {
                        return c.type = "throw",
                        c.arg = t,
                        r.next = n,
                        o && (r.method = "next",
                        r.arg = e),
                        !!o
                    }
                    for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                        var a = this.tryEntries[i]
                          , c = a.completion;
                        if ("root" === a.tryLoc)
                            return o("end");
                        if (a.tryLoc <= this.prev) {
                            var u = n.call(a, "catchLoc")
                              , s = n.call(a, "finallyLoc");
                            if (u && s) {
                                if (this.prev < a.catchLoc)
                                    return o(a.catchLoc, !0);
                                if (this.prev < a.finallyLoc)
                                    return o(a.finallyLoc)
                            } else if (u) {
                                if (this.prev < a.catchLoc)
                                    return o(a.catchLoc, !0)
                            } else {
                                if (!s)
                                    throw new Error("try statement without catch or finally");
                                if (this.prev < a.finallyLoc)
                                    return o(a.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(e, t) {
                    for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                        var o = this.tryEntries[r];
                        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                            var i = o;
                            break
                        }
                    }
                    i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
                    var a = i ? i.completion : {};
                    return a.type = e,
                    a.arg = t,
                    i ? (this.method = "next",
                    this.next = i.finallyLoc,
                    v) : this.complete(a)
                },
                complete: function(e, t) {
                    if ("throw" === e.type)
                        throw e.arg;
                    return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg,
                    this.method = "return",
                    this.next = "end") : "normal" === e.type && t && (this.next = t),
                    v
                },
                finish: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var r = this.tryEntries[t];
                        if (r.finallyLoc === e)
                            return this.complete(r.completion, r.afterLoc),
                            P(r),
                            v
                    }
                },
                catch: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var r = this.tryEntries[t];
                        if (r.tryLoc === e) {
                            var n = r.completion;
                            if ("throw" === n.type) {
                                var o = n.arg;
                                P(r)
                            }
                            return o
                        }
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(t, r, n) {
                    return this.delegate = {
                        iterator: L(t),
                        resultName: r,
                        nextLoc: n
                    },
                    "next" === this.method && (this.arg = e),
                    v
                }
            },
            t
        }
        function Ai(e, t, r, n, o, i, a) {
            try {
                var c = e[i](a)
                  , u = c.value
            } catch (e) {
                return void r(e)
            }
            c.done ? t(u) : Promise.resolve(u).then(n, o)
        }
        function ki(e) {
            return function() {
                var t = this
                  , r = arguments;
                return new Promise((function(n, o) {
                    var i = e.apply(t, r);
                    function a(e) {
                        Ai(i, n, o, a, c, "next", e)
                    }
                    function c(e) {
                        Ai(i, n, o, a, c, "throw", e)
                    }
                    a(void 0)
                }
                ))
            }
        }
        function Si(e, t, r, n) {
            r && Object.defineProperty(e, t, {
                enumerable: r.enumerable,
                configurable: r.configurable,
                writable: r.writable,
                value: r.initializer ? r.initializer.call(n) : void 0
            })
        }
        function ji(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, xi(n.key), n)
            }
        }
        function xi(e) {
            var t = function(e, t) {
                if ("object" !== gi(e) || null === e)
                    return e;
                var r = e[Symbol.toPrimitive];
                if (void 0 !== r) {
                    var n = r.call(e, "string");
                    if ("object" !== gi(n))
                        return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(e)
            }(e);
            return "symbol" === gi(t) ? t : String(t)
        }
        function Ii(e, t) {
            return Ii = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            ,
            Ii(e, t)
        }
        function Ei(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function Pi(e) {
            return Pi = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            ,
            Pi(e)
        }
        function Ti(e, t, r, n, o) {
            var i = {};
            return Object.keys(n).forEach((function(e) {
                i[e] = n[e]
            }
            )),
            i.enumerable = !!i.enumerable,
            i.configurable = !!i.configurable,
            ("value"in i || i.initializer) && (i.writable = !0),
            i = r.slice().reverse().reduce((function(r, n) {
                return n(e, t, r) || r
            }
            ), i),
            o && void 0 !== i.initializer && (i.value = i.initializer ? i.initializer.call(o) : void 0,
            i.initializer = void 0),
            void 0 === i.initializer && (Object.defineProperty(e, t, i),
            i = null),
            i
        }
        var Li, Ci = (ri = (0,
        Ie.wA)({
            components: {
                effect: eo(),
                TopNav: Rt,
                MainTab: Fr,
                PageRole: Pr,
                PageEvent: qn,
                PageScene: ho,
                PagePlay: To,
                PageLine: Wn,
                pageEnemy: Uo,
                pageRelic: vi
            }
        }),
        ni = (0,
        i.State)("isAnimating"),
        oi = (0,
        i.State)("curTab"),
        ii = (0,
        i.State)("modelStatus"),
        ai = (0,
        i.State)("jumpTabIndex"),
        ci = (0,
        i.Getter)("tabs"),
        ui = (0,
        Ie.RL)("isAnimating", {
            immediate: !0
        }),
        ri((li = function(e, t, r, n, i, a, c, u, s, f, p, h) {
            !function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                }),
                t && Ii(e, t)
            }(O, e);
            var d, y, v, b, m = (v = O,
            b = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }(),
            function() {
                var e, t = Pi(v);
                if (b) {
                    var r = Pi(this).constructor;
                    e = Reflect.construct(t, arguments, r)
                } else
                    e = t.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === gi(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return Ei(e)
                }(this, e)
            }
            );
            function O() {
                var e;
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, O);
                for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
                    r[n] = arguments[n];
                return Si(e = m.call.apply(m, [this].concat(r)), "isAnimating", fi, Ei(e)),
                Si(e, "curTab", pi, Ei(e)),
                Si(e, "modelStatus", hi, Ei(e)),
                Si(e, "jumpTabIndex", di, Ei(e)),
                Si(e, "tabs", yi, Ei(e)),
                e.isHome = !0,
                e.isLoading = !0,
                e.enterTime = Date.now(),
                e.animateToast = null,
                e.roleSwitch = !1,
                e.defaultPageIndex = 1,
                e
            }
            return d = O,
            y = [{
                key: "onAnimating",
                value: function() {
                    return (t = t || ki(Oi().mark((function e() {
                        return Oi().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (!this.isAnimating) {
                                        e.next = 4;
                                        break
                                    }
                                    this.animateToast = this.$mtoast({
                                        showContent: !1,
                                        opacity: 0,
                                        duration: 0
                                    }),
                                    e.next = 8;
                                    break;
                                case 4:
                                    return this.$mtoast.clear(this.animateToast),
                                    e.next = 7,
                                    (0,
                                    o.asyncTimeout)(400).promise;
                                case 7:
                                    this.animateToast = null;
                                case 8:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )))).apply(this, arguments)
                }
            }, {
                key: "mounted",
                value: function() {
                    var e, t;
                    this.$mtoast.allowToastMultiple(),
                    null === (e = window) || void 0 === e || null === (e = e.performance) || void 0 === e || e.mark("firstMeaningfulPaintEnd"),
                    null === (t = window) || void 0 === t || null === (t = t.performance) || void 0 === t || t.measure("firstMeaningfulPaintEnd", "navigationStart", "firstMeaningfulPaintEnd"),
                    this.getInfo(),
                    this.$mia.trackPageview({
                        name: "",
                        path: ""
                    }),
                    ct({
                        jumpTabIndex: Number(o.QS.jumpTabIndex) || 1
                    })
                }
            }, {
                key: "loadImg",
                value: function() {
                    var e = this
                      , t = le.map((function(t) {
                        return {
                            url: e.$getI18nWord(t)
                        }
                    }
                    )).filter((function(e) {
                        return e.url
                    }
                    ));
                    o.IS_SEA || fe.forEach((function(r) {
                        e.$getI18nWord(r) && t.push({
                            url: "".concat(e.$getI18nWord(r), "?x-oss-process=video/snapshot,t_1,f_jpg,m_fast")
                        })
                    }
                    )),
                    new (mi())({
                        maxTime: 1e4,
                        minTime: 4e3,
                        list: t
                    }).open()
                }
            }, {
                key: "handleDirection",
                value: function(e) {
                    if (!(this.isAnimating || this.modelStatus || this.animateToast))
                        if ("swipedown" === e) {
                            if (this.isHome && !this.isLoading)
                                return void this.handlePageChange();
                            this.$refs.tab.nextPage(1)
                        } else
                            "swipeup" !== e || this.isHome || this.$refs.tab.nextPage(-1)
                }
            }, {
                key: "getInfo",
                value: function() {
                    return (r = r || ki(Oi().mark((function e() {
                        return Oi().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (!g) {
                                        e.next = 5;
                                        break
                                    }
                                    return e.next = 3,
                                    st();
                                case 3:
                                    e.next = 12;
                                    break;
                                case 5:
                                    return e.prev = 5,
                                    e.next = 8,
                                    Fe({
                                        toastError: !1,
                                        params: {
                                            lang: this.$getLang(),
                                            game_biz: S,
                                            source: w(),
                                            version: "1.4"
                                        }
                                    });
                                case 8:
                                    e.next = 12;
                                    break;
                                case 10:
                                    e.prev = 10,
                                    e.t0 = e.catch(5);
                                case 12:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this, [[5, 10]])
                    }
                    )))).apply(this, arguments)
                }
            }, {
                key: "handleRoleChange",
                value: function(e) {
                    return (n = n || ki(Oi().mark((function e(t) {
                        return Oi().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (!this.roleSwitch) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    return this.roleSwitch = !0,
                                    e.prev = 3,
                                    e.next = 6,
                                    this.$refs.effect.changeAva(t);
                                case 6:
                                    return e.prev = 6,
                                    this.roleSwitch = !1,
                                    e.finish(6);
                                case 9:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this, [[3, , 6, 9]])
                    }
                    )))).apply(this, arguments)
                }
            }, {
                key: "handleTabChange",
                value: function(e) {
                    return (i = i || ki(Oi().mark((function e(t) {
                        var r;
                        return Oi().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (r = t.id,
                                    this.$refs.effect) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 3:
                                    return ct({
                                        isAnimating: !0
                                    }),
                                    e.prev = 4,
                                    e.next = 7,
                                    this.$refs.effect["enter".concat(r)]();
                                case 7:
                                    this.$refs.effect["change".concat(r)] && this.$refs.effect["change".concat(r)](this.jumpTabIndex);
                                case 8:
                                    return e.prev = 8,
                                    ct({
                                        isAnimating: !1,
                                        jumpTabIndex: 1
                                    }),
                                    e.finish(8);
                                case 11:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this, [[4, , 8, 11]])
                    }
                    )))).apply(this, arguments)
                }
            }, {
                key: "handlePageChange",
                value: function() {
                    return (a = a || ki(Oi().mark((function e() {
                        return Oi().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    this.isHome && !this.isLoading && (this.isHome = !1);
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )))).apply(this, arguments)
                }
            }, {
                key: "handleEventChange",
                value: function(e) {
                    return (c = c || ki(Oi().mark((function e(t) {
                        return Oi().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    this.$refs.effect.changeAct(t);
                                case 2:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )))).apply(this, arguments)
                }
            }, {
                key: "handleSceneChange",
                value: function(e) {
                    return (u = u || ki(Oi().mark((function e(t) {
                        return Oi().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    this.$refs.effect.changeScene(t);
                                case 2:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )))).apply(this, arguments)
                }
            }, {
                key: "handleBossChange",
                value: function(e) {
                    return (s = s || ki(Oi().mark((function e(t) {
                        return Oi().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    this.$refs.effect.changeBoss(t);
                                case 2:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )))).apply(this, arguments)
                }
            }, {
                key: "handleLineChange",
                value: function(e) {
                    return (f = f || ki(Oi().mark((function e(t) {
                        return Oi().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    this.$refs.effect.changeStory(t);
                                case 2:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )))).apply(this, arguments)
                }
            }, {
                key: "animateComplete",
                value: function() {
                    var e = this;
                    ct({
                        isAnimating: !1,
                        curTab: he.Home
                    }),
                    this.isLoading = !1;
                    var t = Date.now() - this.enterTime;
                    this.$trackEvent("page", "loading_finish", "home_finish", String(t));
                    var r = Number(this.tabs.findIndex((function(e) {
                        return e.id === de[o.QS.pageIndex]
                    }
                    )));
                    r > -1 && (this.defaultPageIndex = r + 1,
                    setTimeout((function() {
                        e.isHome = !1
                    }
                    ), 500))
                }
            }, {
                key: "backHome",
                value: function() {
                    return (p = p || ki(Oi().mark((function e() {
                        return Oi().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return ct({
                                        isAnimating: !0,
                                        curTab: he.Home
                                    }),
                                    e.prev = 1,
                                    e.next = 4,
                                    this.$refs.effect.enterMain();
                                case 4:
                                    this.isHome = !0;
                                case 5:
                                    return e.prev = 5,
                                    ct({
                                        isAnimating: !1
                                    }),
                                    e.finish(5);
                                case 8:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this, [[1, , 5, 8]])
                    }
                    )))).apply(this, arguments)
                }
            }, {
                key: "openRoleModel",
                value: function(e) {
                    return (h = h || ki(Oi().mark((function e(t) {
                        return Oi().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return ct({
                                        modelStatus: !0
                                    }),
                                    e.prev = 1,
                                    e.next = 4,
                                    this.$refs.effect.showAvaModel(pe[t]);
                                case 4:
                                    e.next = 9;
                                    break;
                                case 6:
                                    e.prev = 6,
                                    e.t0 = e.catch(1),
                                    ct({
                                        modelStatus: !1
                                    });
                                case 9:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this, [[1, 6]])
                    }
                    )))).apply(this, arguments)
                }
            }, {
                key: "handleRoleSpeak",
                value: function() {}
            }, {
                key: "handleAvaClose",
                value: function() {
                    ct({
                        modelStatus: !1
                    }),
                    this.$effectPlayer.stop(),
                    ct({
                        volume: .5
                    })
                }
            }, {
                key: "loadingComplete",
                value: function() {
                    this.loadImg()
                }
            }, {
                key: "handleEeportRenderInfo",
                value: function(e) {
                    console.log(e)
                }
            }, {
                key: "onWebglError",
                value: function() {
                    (0,
                    j.Z)({
                        type: "webglErr",
                        lang: this.$getLang()
                    }),
                    this.$mtoast(this.$getI18nWord("tip_no_webgl"))
                }
            }, {
                key: "onLoadError",
                value: function() {
                    (0,
                    j.Z)({
                        type: "loadErr",
                        lang: this.$getLang()
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e, t = this, r = (wi(e = {}, he.Ava, (0,
                    l.h)("page-role", {
                        ref: "pageRole",
                        on: {
                            changeRole: this.handleRoleChange,
                            openModel: this.openRoleModel
                        }
                    })),
                    wi(e, he.Light, (0,
                    l.h)(pn)),
                    wi(e, he.Line, (0,
                    l.h)(Wn, {
                        on: {
                            changeLine: this.handleLineChange
                        }
                    })),
                    wi(e, he.Act, (0,
                    l.h)("page-event", {
                        on: {
                            changeEvent: this.handleEventChange
                        }
                    })),
                    wi(e, he.Scene, (0,
                    l.h)("page-scene", {
                        on: {
                            changeScene: this.handleSceneChange
                        }
                    })),
                    wi(e, he.Boss, (0,
                    l.h)(Uo, {
                        on: {
                            changeEnemy: this.handleBossChange
                        }
                    })),
                    wi(e, he.Yiqi, (0,
                    l.h)(vi)),
                    wi(e, he.Other, (0,
                    l.h)("page-play")),
                    e);
                    return (0,
                    l.h)("div", {
                        class: [Nt.Z.indexPage, this.modelStatus && Nt.Z.underEffect],
                        directives: [{
                            name: "direction",
                            value: {
                                handler: this.handleDirection,
                                rotate: this.$frame.env.rotate,
                                enablePc: !1
                            }
                        }]
                    }, [(0,
                    l.h)("transition", {
                        attrs: {
                            name: "fade"
                        }
                    }, [(0,
                    l.h)("img", {
                        directives: [{
                            name: "show",
                            value: !this.isLoading && this.isHome
                        }],
                        class: Nt.Z.mainLogo,
                        attrs: {
                            src: this.$getI18nWord("home_top_logo")
                        }
                    })]), (0,
                    l.h)("top-nav", {
                        attrs: {
                            isLoading: this.isLoading,
                            isHome: this.isHome
                        }
                    }), (0,
                    l.h)("main-tab", {
                        ref: "tab",
                        attrs: {
                            showState: !this.isHome
                        },
                        on: {
                            tabChange: this.handleTabChange
                        },
                        model: {
                            value: t.defaultPageIndex,
                            callback: function(e) {
                                t.defaultPageIndex = e
                            }
                        }
                    }), (0,
                    l.h)("transition", {
                        attrs: {
                            name: "fade"
                        }
                    }, [!this.isHome && r[this.curTab]]), (0,
                    l.h)(eo(), {
                        ref: "effect",
                        class: Nt.Z.effect,
                        directives: [{
                            name: "append-to-element",
                            value: "#canvas-bg"
                        }],
                        attrs: {
                            disable: !1,
                            width: this.$frame.canvasStateToLayout.width,
                            height: this.$frame.canvasStateToLayout.height,
                            rotate: this.$frame.env.rotate,
                            isSea: o.IS_SEA
                        },
                        on: {
                            buildMainComplete: this.animateComplete,
                            buildLoadingComplete: this.loadingComplete,
                            reportRenderInfo: this.handleEeportRenderInfo,
                            roleSpeak: this.handleRoleSpeak,
                            closeAvaModel: this.handleAvaClose,
                            webglError: this.onWebglError,
                            loadError: this.onLoadError
                        }
                    }), this.isHome && !this.isAnimating && (0,
                    l.h)("div", {
                        class: Nt.Z.clickMask,
                        on: {
                            click: this.handlePageChange
                        }
                    }, [(0,
                    l.h)("img", {
                        class: Nt.Z.nextPage,
                        attrs: {
                            src: "data:image/png;base64,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"
                        }
                    })]), (0,
                    l.h)("transition", {
                        attrs: {
                            name: "fade"
                        }
                    }, [!this.isHome && (0,
                    l.h)("img", {
                        class: Nt.Z.backTop,
                        attrs: {
                            src: "data:image/png;base64,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"
                        },
                        on: {
                            click: this.backHome
                        }
                    })])])
                }
            }],
            y && ji(d.prototype, y),
            Object.defineProperty(d, "prototype", {
                writable: !1
            }),
            O
        }(f()),
        fi = Ti(li.prototype, "isAnimating", [ni], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        pi = Ti(li.prototype, "curTab", [oi], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        hi = Ti(li.prototype, "modelStatus", [ii], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        di = Ti(li.prototype, "jumpTabIndex", [ai], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        yi = Ti(li.prototype, "tabs", [ci], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        Ti(li.prototype, "onAnimating", [ui], Object.getOwnPropertyDescriptor(li.prototype, "onAnimating"), li.prototype),
        si = li)) || si), Bi = r(48962), _i = r(53592), Gi = r(17804), Ri = r.n(Gi), Ni = r(88499), Wi = r.n(Ni), Zi = r(46775), Di = r(45904), zi = r(78353), Fi = r(77562);
        function Mi(e) {
            return Mi = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            ,
            Mi(e)
        }
        function Hi(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, (void 0,
                o = function(e, t) {
                    if ("object" !== Mi(e) || null === e)
                        return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(e, "string");
                        if ("object" !== Mi(n))
                            return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return String(e)
                }(n.key),
                "symbol" === Mi(o) ? o : String(o)), n)
            }
            var o
        }
        function Vi(e, t) {
            return Vi = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            ,
            Vi(e, t)
        }
        function Ui(e) {
            return Ui = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            ,
            Ui(e)
        }
        var Yi = (0,
        Di.default)({
            components: {
                Ps: zi.Z
            }
        })(Li = function(e) {
            !function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                }),
                t && Vi(e, t)
            }(a, e);
            var t, r, n, o, i = (n = a,
            o = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }(),
            function() {
                var e, t = Ui(n);
                if (o) {
                    var r = Ui(this).constructor;
                    e = Reflect.construct(t, arguments, r)
                } else
                    e = t.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === Mi(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return function(e) {
                        if (void 0 === e)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e
                    }(e)
                }(this, e)
            }
            );
            function a() {
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, a),
                i.apply(this, arguments)
            }
            return t = a,
            (r = [{
                key: "render",
                value: function() {
                    return (0,
                    l.h)("ps", {
                        attrs: {
                            "bg-img": {
                                w: 2500,
                                h: 1080,
                                url: this.$getI18nWord("ps-bg")
                            },
                            qrBg: {
                                w: 453,
                                h: 453,
                                x: 376,
                                y: 410
                            },
                            env: "sea",
                            qrConfig: {
                                color: {
                                    dark: "#000",
                                    light: "#fff"
                                },
                                margin: 0
                            },
                            "qr-img": {
                                w: 440,
                                h: 440,
                                x: 5,
                                y: 5
                            }
                        }
                    }, [(0,
                    l.h)("div", {
                        class: Fi.Z.psTip,
                        domProps: {
                            innerHTML: this.$getI18nWord("ps_tip")
                        }
                    })])
                }
            }]) && Hi(t.prototype, r),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            a
        }(f())) || Li
          , Ji = function(e) {
            var t = {
                store: ft,
                render: function(t) {
                    return t(e)
                }
            };
            new (f())(t).$mount("#app")
        };
        f().use(Wi()),
        f().directive("direction", Zi.Z),
        f().use(Ri()),
        f().use(_i.Z, {
            isSea: o.IS_SEA
        }),
        f().use(x.ZP),
        f().use(Bi.Z),
        function() {
            return (be = be || (e = ge().mark((function e() {
                var t, r;
                return ge().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            (0,
                            o.getLang)(o.IS_SEA, S);
                        case 2:
                            return t = e.sent,
                            e.prev = 3,
                            e.next = 6,
                            (0,
                            k.initAppI18n)(f(), {
                                appId: "m20230915hy36bkelts",
                                gameBiz: S,
                                env: "sea",
                                lang: t,
                                zone: o.IS_SEA ? "s3" : "aliOss"
                            });
                        case 6:
                            return document.title = f().prototype.$getI18nWord("page_title"),
                            window.miHoYoAnalysis && f().use(window.miHoYoAnalysis, {
                                appId: "608",
                                dataBelong: ["hkrpg"],
                                env: "production",
                                type: "event",
                                isSea: o.IS_SEA,
                                pagename: "首页",
                                pageExtrainfo: {
                                    is_App: o.IS_BBS ? "bbs" : o.IS_MOB ? "m" : "pc",
                                    version: "1.4"
                                },
                                userExtrainfo: {
                                    lang: t
                                }
                            }),
                            f().prototype.$trackEvent = function(e, t, r, n, i) {
                                f().prototype.$mia.trackEvent(e, t, r, n, i),
                                o.IS_SEA && f().prototype.$ga.trackEvent(e, t, r, n)
                            }
                            ,
                            !o.IS_SEA && o.IS_MOB && (0,
                            x.r3)({
                                biz: "hkrpg",
                                title: f().prototype.$getI18nWord("share_title"),
                                link: A(),
                                desc: f().prototype.$getI18nWord("share_desc"),
                                img_url: f().prototype.$getI18nWord("wechart_share_img")
                            }),
                            e.next = 12,
                            R();
                        case 12:
                            r = e.sent,
                            J.interceptors.request.use((function(e) {
                                var t = e.params
                                  , n = void 0 === t ? {} : t;
                                return Oe(Oe({}, Ae(e, me)), {}, {
                                    params: Oe(Oe(Oe({
                                        t: o.isIE ? Date.now() : void 0
                                    }, o.QS.authkey ? o.QS : {}), n), {}, {
                                        device_id: r
                                    })
                                })
                            }
                            )),
                            e.next = 19;
                            break;
                        case 16:
                            e.prev = 16,
                            e.t0 = e.catch(3),
                            (0,
                            j.Z)({
                                type: "loadErr",
                                lang: t
                            });
                        case 19:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, null, [[3, 16]])
            }
            )),
            function() {
                var t = this
                  , r = arguments;
                return new Promise((function(n, o) {
                    var i = e.apply(t, r);
                    function a(e) {
                        ke(i, n, o, a, c, "next", e)
                    }
                    function c(e) {
                        ke(i, n, o, a, c, "throw", e)
                    }
                    a(void 0)
                }
                ))
            }
            )).apply(this, arguments);
            var e
        }().then((function() {
            var e;
            o.IS_PS ? Ji(Yi) : null !== (e = window.miHoYoBrowserTips) && void 0 !== e && e.shouldRendered && Ji(Ci)
        }
        ))
    },
    10311: function(e) {
        e.exports = Vue
    }
}, function(e) {
    e.O(0, [216, 532], (function() {
        return 51591,
        e(e.s = 51591)
    }
    )),
    e.O()
}
]);
