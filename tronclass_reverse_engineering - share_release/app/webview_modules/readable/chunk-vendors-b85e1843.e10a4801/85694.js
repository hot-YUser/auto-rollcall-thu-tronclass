// Source: decompiled/web-modules-acorn/chunk-vendors-b85e1843.e10a4801/85694.js
// Webpack module id: 85694
const __webpack_module_85694 = function (t, e, n) {
  var r = n(47856),
    i = n(3336),
    o =
      (n(96647),
      n(41539),
      n(39714),
      n(21703),
      n(21249),
      n(38862),
      n(39575),
      n(82472),
      n(48675),
      n(92990),
      n(18927),
      n(33105),
      n(35035),
      n(74345),
      n(7174),
      n(63408),
      n(14590),
      n(32846),
      n(44731),
      n(77209),
      n(96319),
      n(58867),
      n(37789),
      n(33739),
      n(29368),
      n(14483),
      n(12056),
      n(3462),
      n(30678),
      n(27462),
      n(33824),
      n(12974),
      n(15016),
      n(23767),
      n(8585),
      n(68696),
      n(5735),
      n(83753),
      n(83112),
      n(69070),
      n(47042),
      n(54747),
      n(57658),
      n(82772),
      n(57327),
      n(74916),
      n(77601),
      n(15306),
      n(2707),
      n(75505),
      n(87714),
      n(82801),
      n(1174),
      n(24603),
      n(28450),
      n(88386),
      n(9653),
      n(33161),
      n(44363),
      n(55994),
      n(33948),
      n(69826),
      n(47941),
      n(51532),
      n(78783),
      n(52262),
      n(24506),
      n(85827),
      n(92222),
      n(4723),
      n(65069),
      n(40561),
      n(26833),
      n(70189),
      n(34553),
      n(26699),
      n(32023),
      n(30489),
      n(64765),
      n(4129),
      n(18264),
      n(70655)),
    s = n(20661),
    a = n(88861),
    u =
      (n(68304),
      n(82526),
      n(41817),
      n(32165),
      n(35837),
      n(30541),
      n(73210),
      n(54678),
      n(91058),
      function (t, e) {
        return (
          (u =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            }),
          u(t, e)
        );
      });
  function c(t, e) {
    if ("function" !== typeof e && null !== e)
      throw new TypeError(
        "Class extends value " + String(e) + " is not a constructor or null",
      );
    function n() {
      this.constructor = t;
    }
    (u(t, e),
      (t.prototype =
        null === e
          ? Object.create(e)
          : ((n.prototype = e.prototype), new n())));
  }
  function h(t) {
    var e = "function" === typeof Symbol && Symbol.iterator,
      n = e && t[e],
      r = 0;
    if (n) return n.call(t);
    if (t && "number" === typeof t.length)
      return {
        next: function () {
          return (
            t && r >= t.length && (t = void 0),
            { value: t && t[r++], done: !t }
          );
        },
      };
    throw new TypeError(
      e ? "Object is not iterable." : "Symbol.iterator is not defined.",
    );
  }
  var l,
    f =
      "undefined" !== typeof globalThis
        ? globalThis
        : "undefined" !== typeof window
          ? window
          : "undefined" !== typeof n.g
            ? n.g
            : "undefined" !== typeof self
              ? self
              : {},
    p = p || {},
    d = f || self;
  function v() {}
  function g(t) {
    var e = (0, i.Z)(t);
    return (
      (e = "object" != e ? e : t ? (Array.isArray(t) ? "array" : e) : "null"),
      "array" == e || ("object" == e && "number" == typeof t.length)
    );
  }
  function y(t) {
    var e = (0, i.Z)(t);
    return ("object" == e && null != t) || "function" == e;
  }
  function m(t) {
    return (Object.prototype.hasOwnProperty.call(t, b) && t[b]) || (t[b] = ++w);
  }
  var b = "closure_uid_" + ((1e9 * Math.random()) >>> 0),
    w = 0;
  function _(t, e, n) {
    return t.call.apply(t.bind, arguments);
  }
  function T(t, e, n) {
    if (!t) throw Error();
    if (2 < arguments.length) {
      var r = Array.prototype.slice.call(arguments, 2);
      return function () {
        var n = Array.prototype.slice.call(arguments);
        return (Array.prototype.unshift.apply(n, r), t.apply(e, n));
      };
    }
    return function () {
      return t.apply(e, arguments);
    };
  }
  function E(t, e, n) {
    return (
      (E =
        Function.prototype.bind &&
        -1 != Function.prototype.bind.toString().indexOf("native code")
          ? _
          : T),
      E.apply(null, arguments)
    );
  }
  function I(t, e) {
    var n = Array.prototype.slice.call(arguments, 1);
    return function () {
      var e = n.slice();
      return (e.push.apply(e, arguments), t.apply(this, e));
    };
  }
  function S(t, e) {
    function n() {}
    ((n.prototype = e.prototype),
      (t.Z = e.prototype),
      (t.prototype = new n()),
      (t.prototype.constructor = t),
      (t.Vb = function (t, n, r) {
        for (
          var i = Array(arguments.length - 2), o = 2;
          o < arguments.length;
          o++
        )
          i[o - 2] = arguments[o];
        return e.prototype[n].apply(t, i);
      }));
  }
  function A() {
    ((this.s = this.s), (this.o = this.o));
  }
  var k = 0,
    N = {};
  ((A.prototype.s = !1),
    (A.prototype.na = function () {
      if (!this.s && ((this.s = !0), this.M(), 0 != k)) {
        var t = m(this);
        delete N[t];
      }
    }),
    (A.prototype.M = function () {
      if (this.o) for (; this.o.length; ) this.o.shift()();
    }));
  var R = Array.prototype.indexOf
      ? function (t, e) {
          return Array.prototype.indexOf.call(t, e, void 0);
        }
      : function (t, e) {
          if ("string" === typeof t)
            return "string" !== typeof e || 1 != e.length
              ? -1
              : t.indexOf(e, 0);
          for (var n = 0; n < t.length; n++) if (n in t && t[n] === e) return n;
          return -1;
        },
    D = Array.prototype.forEach
      ? function (t, e, n) {
          Array.prototype.forEach.call(t, e, n);
        }
      : function (t, e, n) {
          for (
            var r = t.length,
              i = "string" === typeof t ? t.split("") : t,
              o = 0;
            o < r;
            o++
          )
            o in i && e.call(n, i[o], o, t);
        };
  function C(t) {
    t: {
      for (
        var e = Wn,
          n = t.length,
          r = "string" === typeof t ? t.split("") : t,
          i = 0;
        i < n;
        i++
      )
        if (i in r && e.call(void 0, r[i], i, t)) {
          e = i;
          break t;
        }
      e = -1;
    }
    return 0 > e ? null : "string" === typeof t ? t.charAt(e) : t[e];
  }
  function O(t) {
    return Array.prototype.concat.apply([], arguments);
  }
  function x(t) {
    var e = t.length;
    if (0 < e) {
      for (var n = Array(e), r = 0; r < e; r++) n[r] = t[r];
      return n;
    }
    return [];
  }
  function P(t) {
    return /^[\s\xa0]*$/.test(t);
  }
  var L,
    M = String.prototype.trim
      ? function (t) {
          return t.trim();
        }
      : function (t) {
          return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1];
        };
  function F(t, e) {
    return -1 != t.indexOf(e);
  }
  function U(t, e) {
    return t < e ? -1 : t > e ? 1 : 0;
  }
  t: {
    var V = d.navigator;
    if (V) {
      var q = V.userAgent;
      if (q) {
        L = q;
        break t;
      }
    }
    L = "";
  }
  function j(t, e, n) {
    for (var r in t) e.call(n, t[r], r, t);
  }
  function B(t) {
    var e = {};
    for (var n in t) e[n] = t[n];
    return e;
  }
  var G =
    "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(
      " ",
    );
  function z(t, e) {
    for (var n, r, i = 1; i < arguments.length; i++) {
      for (n in ((r = arguments[i]), r)) t[n] = r[n];
      for (var o = 0; o < G.length; o++)
        ((n = G[o]),
          Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]));
    }
  }
  function K(t) {
    return (K[" "](t), t);
  }
  function H(t) {
    var e = ot;
    return Object.prototype.hasOwnProperty.call(e, 9) ? e[9] : (e[9] = t(9));
  }
  K[" "] = v;
  var J,
    Q = F(L, "Opera"),
    W = F(L, "Trident") || F(L, "MSIE"),
    Z = F(L, "Edge"),
    X = Z || W,
    Y =
      F(L, "Gecko") &&
      !(F(L.toLowerCase(), "webkit") && !F(L, "Edge")) &&
      !(F(L, "Trident") || F(L, "MSIE")) &&
      !F(L, "Edge"),
    $ = F(L.toLowerCase(), "webkit") && !F(L, "Edge");
  function tt() {
    var t = d.document;
    return t ? t.documentMode : void 0;
  }
  t: {
    var et = "",
      nt = (function () {
        var t = L;
        return Y
          ? /rv:([^\);]+)(\)|;)/.exec(t)
          : Z
            ? /Edge\/([\d\.]+)/.exec(t)
            : W
              ? /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t)
              : $
                ? /WebKit\/(\S+)/.exec(t)
                : Q
                  ? /(?:Version)[ \/]?(\S+)/.exec(t)
                  : void 0;
      })();
    if ((nt && (et = nt ? nt[1] : ""), W)) {
      var rt = tt();
      if (null != rt && rt > parseFloat(et)) {
        J = String(rt);
        break t;
      }
    }
    J = et;
  }
  var it,
    ot = {};
  function st() {
    return H(function () {
      for (
        var t = 0,
          e = M(String(J)).split("."),
          n = M("9").split("."),
          r = Math.max(e.length, n.length),
          i = 0;
        0 == t && i < r;
        i++
      ) {
        var o = e[i] || "",
          s = n[i] || "";
        do {
          if (
            ((o = /(\d*)(\D*)(.*)/.exec(o) || ["", "", "", ""]),
            (s = /(\d*)(\D*)(.*)/.exec(s) || ["", "", "", ""]),
            0 == o[0].length && 0 == s[0].length)
          )
            break;
          ((t =
            U(
              0 == o[1].length ? 0 : parseInt(o[1], 10),
              0 == s[1].length ? 0 : parseInt(s[1], 10),
            ) ||
            U(0 == o[2].length, 0 == s[2].length) ||
            U(o[2], s[2])),
            (o = o[3]),
            (s = s[3]));
        } while (0 == t);
      }
      return 0 <= t;
    });
  }
  if (d.document && W) {
    var at = tt();
    it = at || parseInt(J, 10) || void 0;
  } else it = void 0;
  var ut = it,
    ct = (function () {
      if (!d.addEventListener || !Object.defineProperty) return !1;
      var t = !1,
        e = Object.defineProperty({}, "passive", {
          get: function () {
            t = !0;
          },
        });
      try {
        (d.addEventListener("test", v, e), d.removeEventListener("test", v, e));
      } catch (n) {}
      return t;
    })();
  function ht(t, e) {
    ((this.type = t), (this.g = this.target = e), (this.defaultPrevented = !1));
  }
  function lt(t, e) {
    if (
      (ht.call(this, t ? t.type : ""),
      (this.relatedTarget = this.g = this.target = null),
      (this.button =
        this.screenY =
        this.screenX =
        this.clientY =
        this.clientX =
          0),
      (this.key = ""),
      (this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1),
      (this.state = null),
      (this.pointerId = 0),
      (this.pointerType = ""),
      (this.i = null),
      t)
    ) {
      var n = (this.type = t.type),
        r =
          t.changedTouches && t.changedTouches.length
            ? t.changedTouches[0]
            : null;
      if (
        ((this.target = t.target || t.srcElement),
        (this.g = e),
        (e = t.relatedTarget))
      ) {
        if (Y) {
          t: {
            try {
              K(e.nodeName);
              var i = !0;
              break t;
            } catch (o) {}
            i = !1;
          }
          i || (e = null);
        }
      } else
        "mouseover" == n
          ? (e = t.fromElement)
          : "mouseout" == n && (e = t.toElement);
      ((this.relatedTarget = e),
        r
          ? ((this.clientX = void 0 !== r.clientX ? r.clientX : r.pageX),
            (this.clientY = void 0 !== r.clientY ? r.clientY : r.pageY),
            (this.screenX = r.screenX || 0),
            (this.screenY = r.screenY || 0))
          : ((this.clientX = void 0 !== t.clientX ? t.clientX : t.pageX),
            (this.clientY = void 0 !== t.clientY ? t.clientY : t.pageY),
            (this.screenX = t.screenX || 0),
            (this.screenY = t.screenY || 0)),
        (this.button = t.button),
        (this.key = t.key || ""),
        (this.ctrlKey = t.ctrlKey),
        (this.altKey = t.altKey),
        (this.shiftKey = t.shiftKey),
        (this.metaKey = t.metaKey),
        (this.pointerId = t.pointerId || 0),
        (this.pointerType =
          "string" === typeof t.pointerType
            ? t.pointerType
            : ft[t.pointerType] || ""),
        (this.state = t.state),
        (this.i = t),
        t.defaultPrevented && lt.Z.h.call(this));
    }
  }
  ((ht.prototype.h = function () {
    this.defaultPrevented = !0;
  }),
    S(lt, ht));
  var ft = { 2: "touch", 3: "pen", 4: "mouse" };
  lt.prototype.h = function () {
    lt.Z.h.call(this);
    var t = this.i;
    t.preventDefault ? t.preventDefault() : (t.returnValue = !1);
  };
  var pt = "closure_listenable_" + ((1e6 * Math.random()) | 0),
    dt = 0;
  function vt(t, e, n, r, i) {
    ((this.listener = t),
      (this.proxy = null),
      (this.src = e),
      (this.type = n),
      (this.capture = !!r),
      (this.ia = i),
      (this.key = ++dt),
      (this.ca = this.fa = !1));
  }
  function gt(t) {
    ((t.ca = !0),
      (t.listener = null),
      (t.proxy = null),
      (t.src = null),
      (t.ia = null));
  }
  function yt(t) {
    ((this.src = t), (this.g = {}), (this.h = 0));
  }
  function mt(t, e) {
    var n = e.type;
    if (n in t.g) {
      var r,
        i = t.g[n],
        o = R(i, e);
      ((r = 0 <= o) && Array.prototype.splice.call(i, o, 1),
        r && (gt(e), 0 == t.g[n].length && (delete t.g[n], t.h--)));
    }
  }
  function bt(t, e, n, r) {
    for (var i = 0; i < t.length; ++i) {
      var o = t[i];
      if (!o.ca && o.listener == e && o.capture == !!n && o.ia == r) return i;
    }
    return -1;
  }
  yt.prototype.add = function (t, e, n, r, i) {
    var o = t.toString();
    ((t = this.g[o]), t || ((t = this.g[o] = []), this.h++));
    var s = bt(t, e, r, i);
    return (
      -1 < s
        ? ((e = t[s]), n || (e.fa = !1))
        : ((e = new vt(e, this.src, o, !!r, i)), (e.fa = n), t.push(e)),
      e
    );
  };
  var wt = "closure_lm_" + ((1e6 * Math.random()) | 0),
    _t = {};
  function Tt(t, e, n, r, i) {
    if (r && r.once) return St(t, e, n, r, i);
    if (Array.isArray(e)) {
      for (var o = 0; o < e.length; o++) Tt(t, e[o], n, r, i);
      return null;
    }
    return (
      (n = Ot(n)),
      t && t[pt]
        ? t.N(e, n, y(r) ? !!r.capture : !!r, i)
        : Et(t, e, n, !1, r, i)
    );
  }
  function Et(t, e, n, r, i, o) {
    if (!e) throw Error("Invalid event type");
    var s = y(i) ? !!i.capture : !!i,
      a = Dt(t);
    if ((a || (t[wt] = a = new yt(t)), (n = a.add(e, n, r, s, o)), n.proxy))
      return n;
    if (
      ((r = It()),
      (n.proxy = r),
      (r.src = t),
      (r.listener = n),
      t.addEventListener)
    )
      (ct || (i = s),
        void 0 === i && (i = !1),
        t.addEventListener(e.toString(), r, i));
    else if (t.attachEvent) t.attachEvent(Nt(e.toString()), r);
    else {
      if (!t.addListener || !t.removeListener)
        throw Error("addEventListener and attachEvent are unavailable.");
      t.addListener(r);
    }
    return n;
  }
  function It() {
    function t(n) {
      return e.call(t.src, t.listener, n);
    }
    var e = Rt;
    return t;
  }
  function St(t, e, n, r, i) {
    if (Array.isArray(e)) {
      for (var o = 0; o < e.length; o++) St(t, e[o], n, r, i);
      return null;
    }
    return (
      (n = Ot(n)),
      t && t[pt]
        ? t.O(e, n, y(r) ? !!r.capture : !!r, i)
        : Et(t, e, n, !0, r, i)
    );
  }
  function At(t, e, n, r, i) {
    if (Array.isArray(e))
      for (var o = 0; o < e.length; o++) At(t, e[o], n, r, i);
    else
      ((r = y(r) ? !!r.capture : !!r),
        (n = Ot(n)),
        t && t[pt]
          ? ((t = t.i),
            (e = String(e).toString()),
            e in t.g &&
              ((o = t.g[e]),
              (n = bt(o, n, r, i)),
              -1 < n &&
                (gt(o[n]),
                Array.prototype.splice.call(o, n, 1),
                0 == o.length && (delete t.g[e], t.h--))))
          : t &&
            (t = Dt(t)) &&
            ((e = t.g[e.toString()]),
            (t = -1),
            e && (t = bt(e, n, r, i)),
            (n = -1 < t ? e[t] : null) && kt(n)));
  }
  function kt(t) {
    if ("number" !== typeof t && t && !t.ca) {
      var e = t.src;
      if (e && e[pt]) mt(e.i, t);
      else {
        var n = t.type,
          r = t.proxy;
        (e.removeEventListener
          ? e.removeEventListener(n, r, t.capture)
          : e.detachEvent
            ? e.detachEvent(Nt(n), r)
            : e.addListener && e.removeListener && e.removeListener(r),
          (n = Dt(e))
            ? (mt(n, t), 0 == n.h && ((n.src = null), (e[wt] = null)))
            : gt(t));
      }
    }
  }
  function Nt(t) {
    return t in _t ? _t[t] : (_t[t] = "on" + t);
  }
  function Rt(t, e) {
    if (t.ca) t = !0;
    else {
      e = new lt(e, this);
      var n = t.listener,
        r = t.ia || t.src;
      (t.fa && kt(t), (t = n.call(r, e)));
    }
    return t;
  }
  function Dt(t) {
    return ((t = t[wt]), t instanceof yt ? t : null);
  }
  var Ct = "__closure_events_fn_" + ((1e9 * Math.random()) >>> 0);
  function Ot(t) {
    return "function" === typeof t
      ? t
      : (t[Ct] ||
          (t[Ct] = function (e) {
            return t.handleEvent(e);
          }),
        t[Ct]);
  }
  function xt() {
    (A.call(this), (this.i = new yt(this)), (this.P = this), (this.I = null));
  }
  function Pt(t, e) {
    var n,
      r = t.I;
    if (r) for (n = []; r; r = r.I) n.push(r);
    if (((t = t.P), (r = e.type || e), "string" === typeof e)) e = new ht(e, t);
    else if (e instanceof ht) e.target = e.target || t;
    else {
      var i = e;
      ((e = new ht(r, t)), z(e, i));
    }
    if (((i = !0), n))
      for (var o = n.length - 1; 0 <= o; o--) {
        var s = (e.g = n[o]);
        i = Lt(s, r, !0, e) && i;
      }
    if (
      ((s = e.g = t), (i = Lt(s, r, !0, e) && i), (i = Lt(s, r, !1, e) && i), n)
    )
      for (o = 0; o < n.length; o++)
        ((s = e.g = n[o]), (i = Lt(s, r, !1, e) && i));
  }
  function Lt(t, e, n, r) {
    if (((e = t.i.g[String(e)]), !e)) return !0;
    e = e.concat();
    for (var i = !0, o = 0; o < e.length; ++o) {
      var s = e[o];
      if (s && !s.ca && s.capture == n) {
        var a = s.listener,
          u = s.ia || s.src;
        (s.fa && mt(t.i, s), (i = !1 !== a.call(u, r) && i));
      }
    }
    return i && !r.defaultPrevented;
  }
  (S(xt, A),
    (xt.prototype[pt] = !0),
    (xt.prototype.removeEventListener = function (t, e, n, r) {
      At(this, t, e, n, r);
    }),
    (xt.prototype.M = function () {
      if ((xt.Z.M.call(this), this.i)) {
        var t,
          e = this.i;
        for (t in e.g) {
          for (var n = e.g[t], r = 0; r < n.length; r++) gt(n[r]);
          (delete e.g[t], e.h--);
        }
      }
      this.I = null;
    }),
    (xt.prototype.N = function (t, e, n, r) {
      return this.i.add(String(t), e, !1, n, r);
    }),
    (xt.prototype.O = function (t, e, n, r) {
      return this.i.add(String(t), e, !0, n, r);
    }));
  var Mt = d.JSON.stringify;
  function Ft() {
    var t = Ht,
      e = null;
    return (
      t.g &&
        ((e = t.g), (t.g = t.g.next), t.g || (t.h = null), (e.next = null)),
      e
    );
  }
  var Ut,
    Vt = (function () {
      function t() {
        this.h = this.g = null;
      }
      return (
        (t.prototype.add = function (t, e) {
          var n = qt.get();
          (n.set(t, e),
            this.h ? (this.h.next = n) : (this.g = n),
            (this.h = n));
        }),
        t
      );
    })(),
    qt = new ((function () {
      function t(t, e) {
        ((this.i = t), (this.j = e), (this.h = 0), (this.g = null));
      }
      return (
        (t.prototype.get = function () {
          var t;
          return (
            0 < this.h
              ? (this.h--, (t = this.g), (this.g = t.next), (t.next = null))
              : (t = this.i()),
            t
          );
        }),
        t
      );
    })())(
      function () {
        return new jt();
      },
      function (t) {
        return t.reset();
      },
    ),
    jt = (function () {
      function t() {
        this.next = this.g = this.h = null;
      }
      return (
        (t.prototype.set = function (t, e) {
          ((this.h = t), (this.g = e), (this.next = null));
        }),
        (t.prototype.reset = function () {
          this.next = this.g = this.h = null;
        }),
        t
      );
    })();
  function Bt(t) {
    d.setTimeout(function () {
      throw t;
    }, 0);
  }
  function Gt(t, e) {
    (Ut || zt(), Kt || (Ut(), (Kt = !0)), Ht.add(t, e));
  }
  function zt() {
    var t = d.Promise.resolve(void 0);
    Ut = function () {
      t.then(Jt);
    };
  }
  var Kt = !1,
    Ht = new Vt();
  function Jt() {
    for (var t; (t = Ft()); ) {
      try {
        t.h.call(t.g);
      } catch (n) {
        Bt(n);
      }
      var e = qt;
      (e.j(t), 100 > e.h && (e.h++, (t.next = e.g), (e.g = t)));
    }
    Kt = !1;
  }
  function Qt(t, e) {
    (xt.call(this),
      (this.h = t || 1),
      (this.g = e || d),
      (this.j = E(this.kb, this)),
      (this.l = Date.now()));
  }
  function Wt(t) {
    ((t.da = !1), t.S && (t.g.clearTimeout(t.S), (t.S = null)));
  }
  function Zt(t, e, n) {
    if ("function" === typeof t) n && (t = E(t, n));
    else {
      if (!t || "function" != typeof t.handleEvent)
        throw Error("Invalid listener argument");
      t = E(t.handleEvent, t);
    }
    return 2147483647 < Number(e) ? -1 : d.setTimeout(t, e || 0);
  }
  function Xt(t) {
    t.g = Zt(function () {
      ((t.g = null), t.i && ((t.i = !1), Xt(t)));
    }, t.j);
    var e = t.h;
    ((t.h = null), t.m.apply(null, e));
  }
  (S(Qt, xt),
    (l = Qt.prototype),
    (l.da = !1),
    (l.S = null),
    (l.kb = function () {
      if (this.da) {
        var t = Date.now() - this.l;
        0 < t && t < 0.8 * this.h
          ? (this.S = this.g.setTimeout(this.j, this.h - t))
          : (this.S && (this.g.clearTimeout(this.S), (this.S = null)),
            Pt(this, "tick"),
            this.da && (Wt(this), this.start()));
      }
    }),
    (l.start = function () {
      ((this.da = !0),
        this.S ||
          ((this.S = this.g.setTimeout(this.j, this.h)),
          (this.l = Date.now())));
    }),
    (l.M = function () {
      (Qt.Z.M.call(this), Wt(this), delete this.g);
    }));
  var Yt = (function (t) {
    function e(e, n) {
      var r = t.call(this) || this;
      return ((r.m = e), (r.j = n), (r.h = null), (r.i = !1), (r.g = null), r);
    }
    return (
      c(e, t),
      (e.prototype.l = function (t) {
        ((this.h = arguments), this.g ? (this.i = !0) : Xt(this));
      }),
      (e.prototype.M = function () {
        (t.prototype.M.call(this),
          this.g &&
            (d.clearTimeout(this.g),
            (this.g = null),
            (this.i = !1),
            (this.h = null)));
      }),
      e
    );
  })(A);
  function $t(t) {
    (A.call(this), (this.h = t), (this.g = {}));
  }
  S($t, A);
  var te = [];
  function ee(t, e, n, r) {
    Array.isArray(n) || (n && (te[0] = n.toString()), (n = te));
    for (var i = 0; i < n.length; i++) {
      var o = Tt(e, n[i], r || t.handleEvent, !1, t.h || t);
      if (!o) break;
      t.g[o.key] = o;
    }
  }
  function ne(t) {
    (j(
      t.g,
      function (t, e) {
        this.g.hasOwnProperty(e) && kt(t);
      },
      t,
    ),
      (t.g = {}));
  }
  function re() {
    this.g = !0;
  }
  function ie(t, e, n, r, i, o) {
    t.info(function () {
      if (t.g)
        if (o)
          for (var s = "", a = o.split("&"), u = 0; u < a.length; u++) {
            var c = a[u].split("=");
            if (1 < c.length) {
              var h = c[0];
              c = c[1];
              var l = h.split("_");
              s =
                2 <= l.length && "type" == l[1]
                  ? s + (h + "=") + c + "&"
                  : s + (h + "=redacted&");
            }
          }
        else s = null;
      else s = o;
      return (
        "XMLHTTP REQ (" +
        r +
        ") [attempt " +
        i +
        "]: " +
        e +
        "\n" +
        n +
        "\n" +
        s
      );
    });
  }
  function oe(t, e, n, r, i, o, s) {
    t.info(function () {
      return (
        "XMLHTTP RESP (" +
        r +
        ") [ attempt " +
        i +
        "]: " +
        e +
        "\n" +
        n +
        "\n" +
        o +
        " " +
        s
      );
    });
  }
  function se(t, e, n, r) {
    t.info(function () {
      return "XMLHTTP TEXT (" + e + "): " + ue(t, n) + (r ? " " + r : "");
    });
  }
  function ae(t, e) {
    t.info(function () {
      return "TIMEOUT: " + e;
    });
  }
  function ue(t, e) {
    if (!t.g) return e;
    if (!e) return null;
    try {
      var n = JSON.parse(e);
      if (n)
        for (t = 0; t < n.length; t++)
          if (Array.isArray(n[t])) {
            var r = n[t];
            if (!(2 > r.length)) {
              var i = r[1];
              if (Array.isArray(i) && !(1 > i.length)) {
                var o = i[0];
                if ("noop" != o && "stop" != o && "close" != o)
                  for (var s = 1; s < i.length; s++) i[s] = "";
              }
            }
          }
      return Mt(n);
    } catch (a) {
      return e;
    }
  }
  (($t.prototype.M = function () {
    ($t.Z.M.call(this), ne(this));
  }),
    ($t.prototype.handleEvent = function () {
      throw Error("EventHandler.handleEvent not implemented");
    }),
    (re.prototype.Aa = function () {
      this.g = !1;
    }),
    (re.prototype.info = function () {}));
  var ce = {},
    he = null;
  function le() {
    return (he = he || new xt());
  }
  function fe(t) {
    ht.call(this, ce.Ma, t);
  }
  function pe(t) {
    var e = le();
    Pt(e, new fe(e, t));
  }
  function de(t, e) {
    (ht.call(this, ce.STAT_EVENT, t), (this.stat = e));
  }
  function ve(t) {
    var e = le();
    Pt(e, new de(e, t));
  }
  function ge(t, e) {
    (ht.call(this, ce.Na, t), (this.size = e));
  }
  function ye(t, e) {
    if ("function" !== typeof t)
      throw Error("Fn must not be null and must be a function");
    return d.setTimeout(function () {
      t();
    }, e);
  }
  ((ce.Ma = "serverreachability"),
    S(fe, ht),
    (ce.STAT_EVENT = "statevent"),
    S(de, ht),
    (ce.Na = "timingevent"),
    S(ge, ht));
  var me = {
      NO_ERROR: 0,
      lb: 1,
      yb: 2,
      xb: 3,
      sb: 4,
      wb: 5,
      zb: 6,
      Ja: 7,
      TIMEOUT: 8,
      Cb: 9,
    },
    be = {
      qb: "complete",
      Mb: "success",
      Ka: "error",
      Ja: "abort",
      Eb: "ready",
      Fb: "readystatechange",
      TIMEOUT: "timeout",
      Ab: "incrementaldata",
      Db: "progress",
      tb: "downloadprogress",
      Ub: "uploadprogress",
    };
  function we() {}
  function _e(t) {
    return t.h || (t.h = t.i());
  }
  function Te() {}
  we.prototype.h = null;
  var Ee,
    Ie = { OPEN: "a", pb: "b", Ka: "c", Bb: "d" };
  function Se() {
    ht.call(this, "d");
  }
  function Ae() {
    ht.call(this, "c");
  }
  function ke() {}
  function Ne(t, e, n, r) {
    ((this.l = t),
      (this.j = e),
      (this.m = n),
      (this.X = r || 1),
      (this.V = new $t(this)),
      (this.P = De),
      (t = X ? 125 : void 0),
      (this.W = new Qt(t)),
      (this.H = null),
      (this.i = !1),
      (this.s = this.A = this.v = this.K = this.F = this.Y = this.B = null),
      (this.D = []),
      (this.g = null),
      (this.C = 0),
      (this.o = this.u = null),
      (this.N = -1),
      (this.I = !1),
      (this.O = 0),
      (this.L = null),
      (this.aa = this.J = this.$ = this.U = !1),
      (this.h = new Re()));
  }
  function Re() {
    ((this.i = null), (this.g = ""), (this.h = !1));
  }
  (S(Se, ht),
    S(Ae, ht),
    S(ke, we),
    (ke.prototype.g = function () {
      return new XMLHttpRequest();
    }),
    (ke.prototype.i = function () {
      return {};
    }),
    (Ee = new ke()));
  var De = 45e3,
    Ce = {},
    Oe = {};
  function xe(t, e, n) {
    ((t.K = 1), (t.v = on(Ye(e))), (t.s = n), (t.U = !0), Pe(t, null));
  }
  function Pe(t, e) {
    ((t.F = Date.now()), Ue(t), (t.A = Ye(t.v)));
    var n = t.A,
      r = t.X;
    (Array.isArray(r) || (r = [String(r)]),
      wn(n.h, "t", r),
      (t.C = 0),
      (n = t.l.H),
      (t.h = new Re()),
      (t.g = Ar(t.l, n ? e : null, !t.s)),
      0 < t.O && (t.L = new Yt(E(t.Ia, t, t.g), t.O)),
      ee(t.V, t.g, "readystatechange", t.gb),
      (e = t.H ? B(t.H) : {}),
      t.s
        ? (t.u || (t.u = "POST"),
          (e["Content-Type"] = "application/x-www-form-urlencoded"),
          t.g.ea(t.A, t.u, t.s, e))
        : ((t.u = "GET"), t.g.ea(t.A, t.u, null, e)),
      pe(1),
      ie(t.j, t.u, t.A, t.m, t.X, t.s));
  }
  function Le(t) {
    return !!t.g && "GET" == t.u && 2 != t.K && t.l.Ba;
  }
  function Me(t, e, n) {
    for (var r, i = !0; !t.I && t.C < n.length; ) {
      if (((r = Fe(t, n)), r == Oe)) {
        (4 == e && ((t.o = 4), ve(14), (i = !1)),
          se(t.j, t.m, null, "[Incomplete Response]"));
        break;
      }
      if (r == Ce) {
        ((t.o = 4), ve(15), se(t.j, t.m, n, "[Invalid Chunk]"), (i = !1));
        break;
      }
      (se(t.j, t.m, r, null), Ge(t, r));
    }
    (Le(t) && r != Oe && r != Ce && ((t.h.g = ""), (t.C = 0)),
      4 != e || 0 != n.length || t.h.h || ((t.o = 1), ve(16), (i = !1)),
      (t.i = t.i && i),
      i
        ? 0 < n.length &&
          !t.aa &&
          ((t.aa = !0),
          (e = t.l),
          e.g == t &&
            e.$ &&
            !e.L &&
            (e.h.info(
              "Great, no buffering proxy detected. Bytes received: " + n.length,
            ),
            mr(e),
            (e.L = !0),
            ve(11)))
        : (se(t.j, t.m, n, "[Invalid Chunked Response]"), Be(t), je(t)));
  }
  function Fe(t, e) {
    var n = t.C,
      r = e.indexOf("\n", n);
    return -1 == r
      ? Oe
      : ((n = Number(e.substring(n, r))),
        isNaN(n)
          ? Ce
          : ((r += 1),
            r + n > e.length ? Oe : ((e = e.substr(r, n)), (t.C = r + n), e)));
  }
  function Ue(t) {
    ((t.Y = Date.now() + t.P), Ve(t, t.P));
  }
  function Ve(t, e) {
    if (null != t.B) throw Error("WatchDog timer not null");
    t.B = ye(E(t.eb, t), e);
  }
  function qe(t) {
    t.B && (d.clearTimeout(t.B), (t.B = null));
  }
  function je(t) {
    0 == t.l.G || t.I || _r(t.l, t);
  }
  function Be(t) {
    qe(t);
    var e = t.L;
    (e && "function" == typeof e.na && e.na(),
      (t.L = null),
      Wt(t.W),
      ne(t.V),
      t.g && ((e = t.g), (t.g = null), e.abort(), e.na()));
  }
  function Ge(t, e) {
    try {
      var n = t.l;
      if (0 != n.G && (n.g == t || Nn(n.i, t)))
        if (((n.I = t.N), !t.J && Nn(n.i, t) && 3 == n.G)) {
          try {
            var r = n.Ca.g.parse(e);
          } catch (o) {
            r = null;
          }
          if (Array.isArray(r) && 3 == r.length) {
            var i = r;
            if (0 == i[0]) {
              t: if (!n.u) {
                if (n.g) {
                  if (!(n.g.F + 3e3 < t.F)) break t;
                  (wr(n), ur(n));
                }
                (yr(n), ve(18));
              }
            } else
              ((n.ta = i[1]),
                0 < n.ta - n.U &&
                  37500 > i[2] &&
                  n.N &&
                  0 == n.A &&
                  !n.v &&
                  (n.v = ye(E(n.ab, n), 6e3)));
            if (1 >= kn(n.i) && n.ka) {
              try {
                n.ka();
              } catch (o) {}
              n.ka = void 0;
            }
          } else Er(n, 11);
        } else if (((t.J || n.g == t) && wr(n), !P(e)))
          for (i = n.Ca.g.parse(e), e = 0; e < i.length; e++) {
            var o = i[e];
            if (((n.U = o[0]), (o = o[1]), 2 == n.G))
              if ("c" == o[0]) {
                ((n.J = o[1]), (n.la = o[2]));
                var s = o[3];
                null != s && ((n.ma = s), n.h.info("VER=" + n.ma));
                var a = o[4];
                null != a && ((n.za = a), n.h.info("SVER=" + n.za));
                var u = o[5];
                (null != u &&
                  "number" === typeof u &&
                  0 < u &&
                  ((r = 1.5 * u),
                  (n.K = r),
                  n.h.info("backChannelRequestTimeoutMs_=" + r)),
                  (r = n));
                var c = t.g;
                if (c) {
                  var h = c.g
                    ? c.g.getResponseHeader("X-Client-Wire-Protocol")
                    : null;
                  if (h) {
                    var l = r.i;
                    !l.g &&
                      (F(h, "spdy") || F(h, "quic") || F(h, "h2")) &&
                      ((l.j = l.l),
                      (l.g = new Set()),
                      l.h && (Rn(l, l.h), (l.h = null)));
                  }
                  if (r.D) {
                    var f = c.g
                      ? c.g.getResponseHeader("X-HTTP-Session-Id")
                      : null;
                    f && ((r.sa = f), rn(r.F, r.D, f));
                  }
                }
                ((n.G = 3),
                  n.j && n.j.xa(),
                  n.$ &&
                    ((n.O = Date.now() - t.F),
                    n.h.info("Handshake RTT: " + n.O + "ms")),
                  (r = n));
                var p = t;
                if (((r.oa = Sr(r, r.H ? r.la : null, r.W)), p.J)) {
                  Dn(r.i, p);
                  var d = p,
                    v = r.K;
                  (v && d.setTimeout(v), d.B && (qe(d), Ue(d)), (r.g = p));
                } else gr(r);
                0 < n.l.length && lr(n);
              } else ("stop" != o[0] && "close" != o[0]) || Er(n, 7);
            else
              3 == n.G &&
                ("stop" == o[0] || "close" == o[0]
                  ? "stop" == o[0]
                    ? Er(n, 7)
                    : ar(n)
                  : "noop" != o[0] && n.j && n.j.wa(o),
                (n.A = 0));
          }
      pe(4);
    } catch (o) {}
  }
  function ze(t) {
    if (t.R && "function" == typeof t.R) return t.R();
    if ("string" === typeof t) return t.split("");
    if (g(t)) {
      for (var e = [], n = t.length, r = 0; r < n; r++) e.push(t[r]);
      return e;
    }
    for (r in ((e = []), (n = 0), t)) e[n++] = t[r];
    return e;
  }
  function Ke(t, e) {
    if (t.forEach && "function" == typeof t.forEach) t.forEach(e, void 0);
    else if (g(t) || "string" === typeof t) D(t, e, void 0);
    else {
      if (t.T && "function" == typeof t.T) var n = t.T();
      else if (t.R && "function" == typeof t.R) n = void 0;
      else if (g(t) || "string" === typeof t) {
        n = [];
        for (var r = t.length, i = 0; i < r; i++) n.push(i);
      } else for (i in ((n = []), (r = 0), t)) n[r++] = i;
      ((r = ze(t)), (i = r.length));
      for (var o = 0; o < i; o++) e.call(void 0, r[o], n && n[o], t);
    }
  }
  function He(t, e) {
    ((this.h = {}), (this.g = []), (this.i = 0));
    var n = arguments.length;
    if (1 < n) {
      if (n % 2) throw Error("Uneven number of arguments");
      for (var r = 0; r < n; r += 2) this.set(arguments[r], arguments[r + 1]);
    } else if (t)
      if (t instanceof He)
        for (n = t.T(), r = 0; r < n.length; r++) this.set(n[r], t.get(n[r]));
      else for (r in t) this.set(r, t[r]);
  }
  function Je(t) {
    if (t.i != t.g.length) {
      for (var e = 0, n = 0; e < t.g.length; ) {
        var r = t.g[e];
        (Qe(t.h, r) && (t.g[n++] = r), e++);
      }
      t.g.length = n;
    }
    if (t.i != t.g.length) {
      var i = {};
      for (n = e = 0; e < t.g.length; )
        ((r = t.g[e]), Qe(i, r) || ((t.g[n++] = r), (i[r] = 1)), e++);
      t.g.length = n;
    }
  }
  function Qe(t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }
  ((l = Ne.prototype),
    (l.setTimeout = function (t) {
      this.P = t;
    }),
    (l.gb = function (t) {
      t = t.target;
      var e = this.L;
      e && 3 == er(t) ? e.l() : this.Ia(t);
    }),
    (l.Ia = function (t) {
      try {
        if (t == this.g)
          t: {
            var e = er(this.g),
              n = this.g.Da(),
              r = this.g.ba();
            if (
              !(3 > e) &&
              (3 != e ||
                X ||
                (this.g && (this.h.h || this.g.ga() || nr(this.g))))
            ) {
              (this.I || 4 != e || 7 == n || pe(8 == n || 0 >= r ? 3 : 2),
                qe(this));
              var i = this.g.ba();
              this.N = i;
              e: if (Le(this)) {
                var o = nr(this.g);
                t = "";
                var s = o.length,
                  a = 4 == er(this.g);
                if (!this.h.i) {
                  if ("undefined" === typeof TextDecoder) {
                    (Be(this), je(this));
                    var u = "";
                    break e;
                  }
                  this.h.i = new d.TextDecoder();
                }
                for (n = 0; n < s; n++)
                  ((this.h.h = !0),
                    (t += this.h.i.decode(o[n], { stream: a && n == s - 1 })));
                (o.splice(0, s), (this.h.g += t), (this.C = 0), (u = this.h.g));
              } else u = this.g.ga();
              if (
                ((this.i = 200 == i),
                oe(this.j, this.u, this.A, this.m, this.X, e, i),
                this.i)
              ) {
                if (this.$ && !this.J) {
                  e: {
                    if (this.g) {
                      var c,
                        h = this.g;
                      if (
                        (c = h.g
                          ? h.g.getResponseHeader("X-HTTP-Initial-Response")
                          : null) &&
                        !P(c)
                      ) {
                        var l = c;
                        break e;
                      }
                    }
                    l = null;
                  }
                  if (!(i = l)) {
                    ((this.i = !1), (this.o = 3), ve(12), Be(this), je(this));
                    break t;
                  }
                  (se(
                    this.j,
                    this.m,
                    i,
                    "Initial handshake response via X-HTTP-Initial-Response",
                  ),
                    (this.J = !0),
                    Ge(this, i));
                }
                (this.U
                  ? (Me(this, e, u),
                    X &&
                      this.i &&
                      3 == e &&
                      (ee(this.V, this.W, "tick", this.fb), this.W.start()))
                  : (se(this.j, this.m, u, null), Ge(this, u)),
                  4 == e && Be(this),
                  this.i &&
                    !this.I &&
                    (4 == e ? _r(this.l, this) : ((this.i = !1), Ue(this))));
              } else
                (400 == i && 0 < u.indexOf("Unknown SID")
                  ? ((this.o = 3), ve(12))
                  : ((this.o = 0), ve(13)),
                  Be(this),
                  je(this));
            }
          }
      } catch (e) {}
    }),
    (l.fb = function () {
      if (this.g) {
        var t = er(this.g),
          e = this.g.ga();
        this.C < e.length &&
          (qe(this), Me(this, t, e), this.i && 4 != t && Ue(this));
      }
    }),
    (l.cancel = function () {
      ((this.I = !0), Be(this));
    }),
    (l.eb = function () {
      this.B = null;
      var t = Date.now();
      0 <= t - this.Y
        ? (ae(this.j, this.A),
          2 != this.K && (pe(3), ve(17)),
          Be(this),
          (this.o = 2),
          je(this))
        : Ve(this, this.Y - t);
    }),
    (l = He.prototype),
    (l.R = function () {
      Je(this);
      for (var t = [], e = 0; e < this.g.length; e++) t.push(this.h[this.g[e]]);
      return t;
    }),
    (l.T = function () {
      return (Je(this), this.g.concat());
    }),
    (l.get = function (t, e) {
      return Qe(this.h, t) ? this.h[t] : e;
    }),
    (l.set = function (t, e) {
      (Qe(this.h, t) || (this.i++, this.g.push(t)), (this.h[t] = e));
    }),
    (l.forEach = function (t, e) {
      for (var n = this.T(), r = 0; r < n.length; r++) {
        var i = n[r],
          o = this.get(i);
        t.call(e, o, i, this);
      }
    }));
  var We =
    /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
  function Ze(t, e) {
    if (t) {
      t = t.split("&");
      for (var n = 0; n < t.length; n++) {
        var r = t[n].indexOf("="),
          i = null;
        if (0 <= r) {
          var o = t[n].substring(0, r);
          i = t[n].substring(r + 1);
        } else o = t[n];
        e(o, i ? decodeURIComponent(i.replace(/\+/g, " ")) : "");
      }
    }
  }
  function Xe(t, e) {
    if (
      ((this.i = this.s = this.j = ""),
      (this.m = null),
      (this.o = this.l = ""),
      (this.g = !1),
      t instanceof Xe)
    ) {
      ((this.g = void 0 !== e ? e : t.g),
        $e(this, t.j),
        (this.s = t.s),
        tn(this, t.i),
        en(this, t.m),
        (this.l = t.l),
        (e = t.h));
      var n = new gn();
      ((n.i = e.i),
        e.g && ((n.g = new He(e.g)), (n.h = e.h)),
        nn(this, n),
        (this.o = t.o));
    } else
      t && (n = String(t).match(We))
        ? ((this.g = !!e),
          $e(this, n[1] || "", !0),
          (this.s = un(n[2] || "")),
          tn(this, n[3] || "", !0),
          en(this, n[4]),
          (this.l = un(n[5] || "", !0)),
          nn(this, n[6] || "", !0),
          (this.o = un(n[7] || "")))
        : ((this.g = !!e), (this.h = new gn(null, this.g)));
  }
  function Ye(t) {
    return new Xe(t);
  }
  function $e(t, e, n) {
    ((t.j = n ? un(e, !0) : e), t.j && (t.j = t.j.replace(/:$/, "")));
  }
  function tn(t, e, n) {
    t.i = n ? un(e, !0) : e;
  }
  function en(t, e) {
    if (e) {
      if (((e = Number(e)), isNaN(e) || 0 > e))
        throw Error("Bad port number " + e);
      t.m = e;
    } else t.m = null;
  }
  function nn(t, e, n) {
    e instanceof gn
      ? ((t.h = e), Tn(t.h, t.g))
      : (n || (e = cn(e, dn)), (t.h = new gn(e, t.g)));
  }
  function rn(t, e, n) {
    t.h.set(e, n);
  }
  function on(t) {
    return (
      rn(
        t,
        "zx",
        Math.floor(2147483648 * Math.random()).toString(36) +
          Math.abs(
            Math.floor(2147483648 * Math.random()) ^ Date.now(),
          ).toString(36),
      ),
      t
    );
  }
  function sn(t) {
    return t instanceof Xe ? Ye(t) : new Xe(t, void 0);
  }
  function an(t, e, n, r) {
    var i = new Xe(null, void 0);
    return (t && $e(i, t), e && tn(i, e), n && en(i, n), r && (i.l = r), i);
  }
  function un(t, e) {
    return t
      ? e
        ? decodeURI(t.replace(/%25/g, "%2525"))
        : decodeURIComponent(t)
      : "";
  }
  function cn(t, e, n) {
    return "string" === typeof t
      ? ((t = encodeURI(t).replace(e, hn)),
        n && (t = t.replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
        t)
      : null;
  }
  function hn(t) {
    return (
      (t = t.charCodeAt(0)),
      "%" + ((t >> 4) & 15).toString(16) + (15 & t).toString(16)
    );
  }
  Xe.prototype.toString = function () {
    var t = [],
      e = this.j;
    e && t.push(cn(e, ln, !0), ":");
    var n = this.i;
    return (
      (n || "file" == e) &&
        (t.push("//"),
        (e = this.s) && t.push(cn(e, ln, !0), "@"),
        t.push(
          encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g, "%$1"),
        ),
        (n = this.m),
        null != n && t.push(":", String(n))),
      (n = this.l) &&
        (this.i && "/" != n.charAt(0) && t.push("/"),
        t.push(cn(n, "/" == n.charAt(0) ? pn : fn, !0))),
      (n = this.h.toString()) && t.push("?", n),
      (n = this.o) && t.push("#", cn(n, vn)),
      t.join("")
    );
  };
  var ln = /[#\/\?@]/g,
    fn = /[#\?:]/g,
    pn = /[#\?]/g,
    dn = /[#\?@]/g,
    vn = /#/g;
  function gn(t, e) {
    ((this.h = this.g = null), (this.i = t || null), (this.j = !!e));
  }
  function yn(t) {
    t.g ||
      ((t.g = new He()),
      (t.h = 0),
      t.i &&
        Ze(t.i, function (e, n) {
          t.add(decodeURIComponent(e.replace(/\+/g, " ")), n);
        }));
  }
  function mn(t, e) {
    (yn(t),
      (e = _n(t, e)),
      Qe(t.g.h, e) &&
        ((t.i = null),
        (t.h -= t.g.get(e).length),
        (t = t.g),
        Qe(t.h, e) && (delete t.h[e], t.i--, t.g.length > 2 * t.i && Je(t))));
  }
  function bn(t, e) {
    return (yn(t), (e = _n(t, e)), Qe(t.g.h, e));
  }
  function wn(t, e, n) {
    (mn(t, e),
      0 < n.length &&
        ((t.i = null), t.g.set(_n(t, e), x(n)), (t.h += n.length)));
  }
  function _n(t, e) {
    return ((e = String(e)), t.j && (e = e.toLowerCase()), e);
  }
  function Tn(t, e) {
    (e &&
      !t.j &&
      (yn(t),
      (t.i = null),
      t.g.forEach(function (t, e) {
        var n = e.toLowerCase();
        e != n && (mn(this, e), wn(this, n, t));
      }, t)),
      (t.j = e));
  }
  ((l = gn.prototype),
    (l.add = function (t, e) {
      (yn(this), (this.i = null), (t = _n(this, t)));
      var n = this.g.get(t);
      return (n || this.g.set(t, (n = [])), n.push(e), (this.h += 1), this);
    }),
    (l.forEach = function (t, e) {
      (yn(this),
        this.g.forEach(function (n, r) {
          D(
            n,
            function (n) {
              t.call(e, n, r, this);
            },
            this,
          );
        }, this));
    }),
    (l.T = function () {
      yn(this);
      for (var t = this.g.R(), e = this.g.T(), n = [], r = 0; r < e.length; r++)
        for (var i = t[r], o = 0; o < i.length; o++) n.push(e[r]);
      return n;
    }),
    (l.R = function (t) {
      yn(this);
      var e = [];
      if ("string" === typeof t)
        bn(this, t) && (e = O(e, this.g.get(_n(this, t))));
      else {
        t = this.g.R();
        for (var n = 0; n < t.length; n++) e = O(e, t[n]);
      }
      return e;
    }),
    (l.set = function (t, e) {
      return (
        yn(this),
        (this.i = null),
        (t = _n(this, t)),
        bn(this, t) && (this.h -= this.g.get(t).length),
        this.g.set(t, [e]),
        (this.h += 1),
        this
      );
    }),
    (l.get = function (t, e) {
      return t ? ((t = this.R(t)), 0 < t.length ? String(t[0]) : e) : e;
    }),
    (l.toString = function () {
      if (this.i) return this.i;
      if (!this.g) return "";
      for (var t = [], e = this.g.T(), n = 0; n < e.length; n++) {
        var r = e[n],
          i = encodeURIComponent(String(r));
        r = this.R(r);
        for (var o = 0; o < r.length; o++) {
          var s = i;
          ("" !== r[o] && (s += "=" + encodeURIComponent(String(r[o]))),
            t.push(s));
        }
      }
      return (this.i = t.join("&"));
    }));
  var En = (function () {
    function t(t, e) {
      ((this.h = t), (this.g = e));
    }
    return t;
  })();
  function In(t) {
    ((this.l = t || Sn),
      d.PerformanceNavigationTiming
        ? ((t = d.performance.getEntriesByType("navigation")),
          (t =
            0 < t.length &&
            ("hq" == t[0].nextHopProtocol || "h2" == t[0].nextHopProtocol)))
        : (t = !!(d.g && d.g.Ea && d.g.Ea() && d.g.Ea().Zb)),
      (this.j = t ? this.l : 1),
      (this.g = null),
      1 < this.j && (this.g = new Set()),
      (this.h = null),
      (this.i = []));
  }
  var Sn = 10;
  function An(t) {
    return !!t.h || (!!t.g && t.g.size >= t.j);
  }
  function kn(t) {
    return t.h ? 1 : t.g ? t.g.size : 0;
  }
  function Nn(t, e) {
    return t.h ? t.h == e : !!t.g && t.g.has(e);
  }
  function Rn(t, e) {
    t.g ? t.g.add(e) : (t.h = e);
  }
  function Dn(t, e) {
    t.h && t.h == e ? (t.h = null) : t.g && t.g.has(e) && t.g.delete(e);
  }
  function Cn(t) {
    var e, n;
    if (null != t.h) return t.i.concat(t.h.D);
    if (null != t.g && 0 !== t.g.size) {
      var r = t.i;
      try {
        for (var i = h(t.g.values()), o = i.next(); !o.done; o = i.next()) {
          var s = o.value;
          r = r.concat(s.D);
        }
      } catch (a) {
        e = { error: a };
      } finally {
        try {
          o && !o.done && (n = i.return) && n.call(i);
        } finally {
          if (e) throw e.error;
        }
      }
      return r;
    }
    return x(t.i);
  }
  function On() {}
  function xn() {
    this.g = new On();
  }
  function Pn(t, e, n) {
    var r = n || "";
    try {
      Ke(t, function (t, n) {
        var i = t;
        (y(t) && (i = Mt(t)), e.push(r + n + "=" + encodeURIComponent(i)));
      });
    } catch (i) {
      throw (e.push(r + "type=" + encodeURIComponent("_badmap")), i);
    }
  }
  function Ln(t, e) {
    var n = new re();
    if (d.Image) {
      var r = new Image();
      ((r.onload = I(Mn, n, r, "TestLoadImage: loaded", !0, e)),
        (r.onerror = I(Mn, n, r, "TestLoadImage: error", !1, e)),
        (r.onabort = I(Mn, n, r, "TestLoadImage: abort", !1, e)),
        (r.ontimeout = I(Mn, n, r, "TestLoadImage: timeout", !1, e)),
        d.setTimeout(function () {
          r.ontimeout && r.ontimeout();
        }, 1e4),
        (r.src = t));
    } else e(!1);
  }
  function Mn(t, e, n, r, i) {
    try {
      ((e.onload = null),
        (e.onerror = null),
        (e.onabort = null),
        (e.ontimeout = null),
        i(r));
    } catch (o) {}
  }
  function Fn(t) {
    ((this.l = t.$b || null), (this.j = t.ib || !1));
  }
  function Un(t, e) {
    (xt.call(this),
      (this.D = t),
      (this.u = e),
      (this.m = void 0),
      (this.readyState = Vn),
      (this.status = 0),
      (this.responseType =
        this.responseText =
        this.response =
        this.statusText =
          ""),
      (this.onreadystatechange = null),
      (this.v = new Headers()),
      (this.h = null),
      (this.C = "GET"),
      (this.B = ""),
      (this.g = !1),
      (this.A = this.j = this.l = null));
  }
  ((In.prototype.cancel = function () {
    var t, e;
    if (((this.i = Cn(this)), this.h)) (this.h.cancel(), (this.h = null));
    else if (this.g && 0 !== this.g.size) {
      try {
        for (var n = h(this.g.values()), r = n.next(); !r.done; r = n.next()) {
          var i = r.value;
          i.cancel();
        }
      } catch (o) {
        t = { error: o };
      } finally {
        try {
          r && !r.done && (e = n.return) && e.call(n);
        } finally {
          if (t) throw t.error;
        }
      }
      this.g.clear();
    }
  }),
    (On.prototype.stringify = function (t) {
      return d.JSON.stringify(t, void 0);
    }),
    (On.prototype.parse = function (t) {
      return d.JSON.parse(t, void 0);
    }),
    S(Fn, we),
    (Fn.prototype.g = function () {
      return new Un(this.l, this.j);
    }),
    (Fn.prototype.i = (function (t) {
      return function () {
        return t;
      };
    })({})),
    S(Un, xt));
  var Vn = 0;
  function qn(t) {
    t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t));
  }
  function jn(t) {
    ((t.readyState = 4), (t.l = null), (t.j = null), (t.A = null), Bn(t));
  }
  function Bn(t) {
    t.onreadystatechange && t.onreadystatechange.call(t);
  }
  ((l = Un.prototype),
    (l.open = function (t, e) {
      if (this.readyState != Vn)
        throw (this.abort(), Error("Error reopening a connection"));
      ((this.C = t), (this.B = e), (this.readyState = 1), Bn(this));
    }),
    (l.send = function (t) {
      if (1 != this.readyState)
        throw (this.abort(), Error("need to call open() first. "));
      this.g = !0;
      var e = {
        headers: this.v,
        method: this.C,
        credentials: this.m,
        cache: void 0,
      };
      (t && (e.body = t),
        (this.D || d)
          .fetch(new Request(this.B, e))
          .then(this.Va.bind(this), this.ha.bind(this)));
    }),
    (l.abort = function () {
      ((this.response = this.responseText = ""),
        (this.v = new Headers()),
        (this.status = 0),
        this.j && this.j.cancel("Request was aborted."),
        1 <= this.readyState &&
          this.g &&
          4 != this.readyState &&
          ((this.g = !1), jn(this)),
        (this.readyState = Vn));
    }),
    (l.Va = function (t) {
      if (
        this.g &&
        ((this.l = t),
        this.h ||
          ((this.status = this.l.status),
          (this.statusText = this.l.statusText),
          (this.h = t.headers),
          (this.readyState = 2),
          Bn(this)),
        this.g && ((this.readyState = 3), Bn(this), this.g))
      )
        if ("arraybuffer" === this.responseType)
          t.arrayBuffer().then(this.Ta.bind(this), this.ha.bind(this));
        else if ("undefined" !== typeof d.ReadableStream && "body" in t) {
          if (((this.j = t.body.getReader()), this.u)) {
            if (this.responseType)
              throw Error(
                'responseType must be empty for "streamBinaryChunks" mode responses.',
              );
            this.response = [];
          } else
            ((this.response = this.responseText = ""),
              (this.A = new TextDecoder()));
          qn(this);
        } else t.text().then(this.Ua.bind(this), this.ha.bind(this));
    }),
    (l.Sa = function (t) {
      if (this.g) {
        if (this.u && t.value) this.response.push(t.value);
        else if (!this.u) {
          var e = t.value ? t.value : new Uint8Array(0);
          (e = this.A.decode(e, { stream: !t.done })) &&
            (this.response = this.responseText += e);
        }
        (t.done ? jn(this) : Bn(this), 3 == this.readyState && qn(this));
      }
    }),
    (l.Ua = function (t) {
      this.g && ((this.response = this.responseText = t), jn(this));
    }),
    (l.Ta = function (t) {
      this.g && ((this.response = t), jn(this));
    }),
    (l.ha = function () {
      this.g && jn(this);
    }),
    (l.setRequestHeader = function (t, e) {
      this.v.append(t, e);
    }),
    (l.getResponseHeader = function (t) {
      return (this.h && this.h.get(t.toLowerCase())) || "";
    }),
    (l.getAllResponseHeaders = function () {
      if (!this.h) return "";
      for (var t = [], e = this.h.entries(), n = e.next(); !n.done; )
        ((n = n.value), t.push(n[0] + ": " + n[1]), (n = e.next()));
      return t.join("\r\n");
    }),
    Object.defineProperty(Un.prototype, "withCredentials", {
      get: function () {
        return "include" === this.m;
      },
      set: function (t) {
        this.m = t ? "include" : "same-origin";
      },
    }));
  var Gn = d.JSON.parse;
  function zn(t) {
    (xt.call(this),
      (this.headers = new He()),
      (this.u = t || null),
      (this.h = !1),
      (this.C = this.g = null),
      (this.H = ""),
      (this.m = 0),
      (this.j = ""),
      (this.l = this.F = this.v = this.D = !1),
      (this.B = 0),
      (this.A = null),
      (this.J = Kn),
      (this.K = this.L = !1));
  }
  S(zn, xt);
  var Kn = "",
    Hn = /^https?$/i,
    Jn = ["POST", "PUT"];
  function Qn(t) {
    return W && st() && "number" === typeof t.timeout && void 0 !== t.ontimeout;
  }
  function Wn(t) {
    return "content-type" == t.toLowerCase();
  }
  function Zn(t, e) {
    ((t.h = !1),
      t.g && ((t.l = !0), t.g.abort(), (t.l = !1)),
      (t.j = e),
      (t.m = 5),
      Xn(t),
      $n(t));
  }
  function Xn(t) {
    t.D || ((t.D = !0), Pt(t, "complete"), Pt(t, "error"));
  }
  function Yn(t) {
    if (
      t.h &&
      "undefined" != typeof p &&
      (!t.C[1] || 4 != er(t) || 2 != t.ba())
    )
      if (t.v && 4 == er(t)) Zt(t.Fa, 0, t);
      else if ((Pt(t, "readystatechange"), 4 == er(t))) {
        t.h = !1;
        try {
          var e,
            n = t.ba();
          t: switch (n) {
            case 200:
            case 201:
            case 202:
            case 204:
            case 206:
            case 304:
            case 1223:
              var r = !0;
              break t;
            default:
              r = !1;
          }
          if (!(e = r)) {
            var i;
            if ((i = 0 === n)) {
              var o = String(t.H).match(We)[1] || null;
              if (!o && d.self && d.self.location) {
                var s = d.self.location.protocol;
                o = s.substr(0, s.length - 1);
              }
              i = !Hn.test(o ? o.toLowerCase() : "");
            }
            e = i;
          }
          if (e) (Pt(t, "complete"), Pt(t, "success"));
          else {
            t.m = 6;
            try {
              var a = 2 < er(t) ? t.g.statusText : "";
            } catch (u) {
              a = "";
            }
            ((t.j = a + " [" + t.ba() + "]"), Xn(t));
          }
        } finally {
          $n(t);
        }
      }
  }
  function $n(t, e) {
    if (t.g) {
      tr(t);
      var n = t.g,
        r = t.C[0] ? v : null;
      ((t.g = null), (t.C = null), e || Pt(t, "ready"));
      try {
        n.onreadystatechange = r;
      } catch (i) {}
    }
  }
  function tr(t) {
    (t.g && t.K && (t.g.ontimeout = null),
      t.A && (d.clearTimeout(t.A), (t.A = null)));
  }
  function er(t) {
    return t.g ? t.g.readyState : 0;
  }
  function nr(t) {
    try {
      if (!t.g) return null;
      if ("response" in t.g) return t.g.response;
      switch (t.J) {
        case Kn:
        case "text":
          return t.g.responseText;
        case "arraybuffer":
          if ("mozResponseArrayBuffer" in t.g)
            return t.g.mozResponseArrayBuffer;
      }
      return null;
    } catch (e) {
      return null;
    }
  }
  function rr(t) {
    var e = "";
    return (
      j(t, function (t, n) {
        ((e += n), (e += ":"), (e += t), (e += "\r\n"));
      }),
      e
    );
  }
  function ir(t, e, n) {
    t: {
      for (r in n) {
        var r = !1;
        break t;
      }
      r = !0;
    }
    r ||
      ((n = rr(n)),
      "string" === typeof t
        ? null != n && encodeURIComponent(String(n))
        : rn(t, e, n));
  }
  function or(t, e, n) {
    return (n && n.internalChannelParams && n.internalChannelParams[t]) || e;
  }
  function sr(t) {
    ((this.za = 0),
      (this.l = []),
      (this.h = new re()),
      (this.la =
        this.oa =
        this.F =
        this.W =
        this.g =
        this.sa =
        this.D =
        this.aa =
        this.o =
        this.P =
        this.s =
          null),
      (this.Za = this.V = 0),
      (this.Xa = or("failFast", !1, t)),
      (this.N = this.v = this.u = this.m = this.j = null),
      (this.X = !0),
      (this.I = this.ta = this.U = -1),
      (this.Y = this.A = this.C = 0),
      (this.Pa = or("baseRetryDelayMs", 5e3, t)),
      (this.$a = or("retryDelaySeedMs", 1e4, t)),
      (this.Ya = or("forwardChannelMaxRetries", 2, t)),
      (this.ra = or("forwardChannelRequestTimeoutMs", 2e4, t)),
      (this.qa = (t && t.xmlHttpFactory) || void 0),
      (this.Ba = (t && t.Yb) || !1),
      (this.K = void 0),
      (this.H = (t && t.supportsCrossDomainXhr) || !1),
      (this.J = ""),
      (this.i = new In(t && t.concurrentRequestLimit)),
      (this.Ca = new xn()),
      (this.ja = (t && t.fastHandshake) || !1),
      (this.Ra = (t && t.Wb) || !1),
      t && t.Aa && this.h.Aa(),
      t && t.forceLongPolling && (this.X = !1),
      (this.$ = (!this.ja && this.X && t && t.detectBufferingProxy) || !1),
      (this.ka = void 0),
      (this.O = 0),
      (this.L = !1),
      (this.B = null),
      (this.Wa = !t || !1 !== t.Xb));
  }
  function ar(t) {
    if ((cr(t), 3 == t.G)) {
      var e = t.V++,
        n = Ye(t.F);
      (rn(n, "SID", t.J),
        rn(n, "RID", e),
        rn(n, "TYPE", "terminate"),
        dr(t, n),
        (e = new Ne(t, t.h, e, void 0)),
        (e.K = 2),
        (e.v = on(Ye(n))),
        (n = !1),
        d.navigator &&
          d.navigator.sendBeacon &&
          (n = d.navigator.sendBeacon(e.v.toString(), "")),
        !n && d.Image && ((new Image().src = e.v), (n = !0)),
        n || ((e.g = Ar(e.l, null)), e.g.ea(e.v)),
        (e.F = Date.now()),
        Ue(e));
    }
    Ir(t);
  }
  function ur(t) {
    t.g && (mr(t), t.g.cancel(), (t.g = null));
  }
  function cr(t) {
    (ur(t),
      t.u && (d.clearTimeout(t.u), (t.u = null)),
      wr(t),
      t.i.cancel(),
      t.m && ("number" === typeof t.m && d.clearTimeout(t.m), (t.m = null)));
  }
  function hr(t, e) {
    (t.l.push(new En(t.Za++, e)), 3 == t.G && lr(t));
  }
  function lr(t) {
    An(t.i) || t.m || ((t.m = !0), Gt(t.Ha, t), (t.C = 0));
  }
  function fr(t, e) {
    return (
      !(kn(t.i) >= t.i.j - (t.m ? 1 : 0)) &&
      (t.m
        ? ((t.l = e.D.concat(t.l)), !0)
        : !(1 == t.G || 2 == t.G || t.C >= (t.Xa ? 0 : t.Ya)) &&
          ((t.m = ye(E(t.Ha, t, e), Tr(t, t.C))), t.C++, !0))
    );
  }
  function pr(t, e) {
    var n;
    n = e ? e.m : t.V++;
    var r = Ye(t.F);
    (rn(r, "SID", t.J),
      rn(r, "RID", n),
      rn(r, "AID", t.U),
      dr(t, r),
      t.o && t.s && ir(r, t.o, t.s),
      (n = new Ne(t, t.h, n, t.C + 1)),
      null === t.o && (n.H = t.s),
      e && (t.l = e.D.concat(t.l)),
      (e = vr(t, n, 1e3)),
      n.setTimeout(
        Math.round(0.5 * t.ra) + Math.round(0.5 * t.ra * Math.random()),
      ),
      Rn(t.i, n),
      xe(n, r, e));
  }
  function dr(t, e) {
    t.j &&
      Ke({}, function (t, n) {
        rn(e, n, t);
      });
  }
  function vr(t, e, n) {
    n = Math.min(t.l.length, n);
    var r = t.j ? E(t.j.Oa, t.j, t) : null;
    t: for (var i = t.l, o = -1; ; ) {
      var s = ["count=" + n];
      -1 == o
        ? 0 < n
          ? ((o = i[0].h), s.push("ofs=" + o))
          : (o = 0)
        : s.push("ofs=" + o);
      for (var a = !0, u = 0; u < n; u++) {
        var c = i[u].h,
          h = i[u].g;
        if (((c -= o), 0 > c)) ((o = Math.max(0, i[u].h - 100)), (a = !1));
        else
          try {
            Pn(h, s, "req" + c + "_");
          } catch (ci) {
            r && r(h);
          }
      }
      if (a) {
        r = s.join("&");
        break t;
      }
    }
    return ((t = t.l.splice(0, n)), (e.D = t), r);
  }
  function gr(t) {
    t.g || t.u || ((t.Y = 1), Gt(t.Ga, t), (t.A = 0));
  }
  function yr(t) {
    return (
      !(t.g || t.u || 3 <= t.A) &&
      (t.Y++, (t.u = ye(E(t.Ga, t), Tr(t, t.A))), t.A++, !0)
    );
  }
  function mr(t) {
    null != t.B && (d.clearTimeout(t.B), (t.B = null));
  }
  function br(t) {
    ((t.g = new Ne(t, t.h, "rpc", t.Y)),
      null === t.o && (t.g.H = t.s),
      (t.g.O = 0));
    var e = Ye(t.oa);
    (rn(e, "RID", "rpc"),
      rn(e, "SID", t.J),
      rn(e, "CI", t.N ? "0" : "1"),
      rn(e, "AID", t.U),
      dr(t, e),
      rn(e, "TYPE", "xmlhttp"),
      t.o && t.s && ir(e, t.o, t.s),
      t.K && t.g.setTimeout(t.K));
    var n = t.g;
    ((t = t.la),
      (n.K = 1),
      (n.v = on(Ye(e))),
      (n.s = null),
      (n.U = !0),
      Pe(n, t));
  }
  function wr(t) {
    null != t.v && (d.clearTimeout(t.v), (t.v = null));
  }
  function _r(t, e) {
    var n = null;
    if (t.g == e) {
      (wr(t), mr(t), (t.g = null));
      var r = 2;
    } else {
      if (!Nn(t.i, e)) return;
      ((n = e.D), Dn(t.i, e), (r = 1));
    }
    if (((t.I = e.N), 0 != t.G))
      if (e.i)
        if (1 == r) {
          ((n = e.s ? e.s.length : 0), (e = Date.now() - e.F));
          var i = t.C;
          ((r = le()), Pt(r, new ge(r, n, e, i)), lr(t));
        } else gr(t);
      else if (
        ((i = e.o),
        3 == i ||
          (0 == i && 0 < t.I) ||
          !((1 == r && fr(t, e)) || (2 == r && yr(t))))
      )
        switch ((n && 0 < n.length && ((e = t.i), (e.i = e.i.concat(n))), i)) {
          case 1:
            Er(t, 5);
            break;
          case 4:
            Er(t, 10);
            break;
          case 3:
            Er(t, 6);
            break;
          default:
            Er(t, 2);
        }
  }
  function Tr(t, e) {
    var n = t.Pa + Math.floor(Math.random() * t.$a);
    return (t.j || (n *= 2), n * e);
  }
  function Er(t, e) {
    if ((t.h.info("Error code " + e), 2 == e)) {
      var n = null;
      t.j && (n = null);
      var r = E(t.jb, t);
      (n ||
        ((n = new Xe("//www.google.com/images/cleardot.gif")),
        (d.location && "http" == d.location.protocol) || $e(n, "https"),
        on(n)),
        Ln(n.toString(), r));
    } else ve(2);
    ((t.G = 0), t.j && t.j.va(e), Ir(t), cr(t));
  }
  function Ir(t) {
    ((t.G = 0),
      (t.I = -1),
      t.j &&
        ((0 == Cn(t.i).length && 0 == t.l.length) ||
          ((t.i.i.length = 0), x(t.l), (t.l.length = 0)),
        t.j.ua()));
  }
  function Sr(t, e, n) {
    var r = sn(n);
    if ("" != r.i) (e && tn(r, e + "." + r.i), en(r, r.m));
    else {
      var i = d.location;
      r = an(i.protocol, e ? e + "." + i.hostname : i.hostname, +i.port, n);
    }
    return (
      t.aa &&
        j(t.aa, function (t, e) {
          rn(r, e, t);
        }),
      (e = t.D),
      (n = t.sa),
      e && n && rn(r, e, n),
      rn(r, "VER", t.ma),
      dr(t, r),
      r
    );
  }
  function Ar(t, e, n) {
    if (e && !t.H)
      throw Error("Can't create secondary domain capable XhrIo object.");
    return (
      (e = n && t.Ba && !t.qa ? new zn(new Fn({ ib: !0 })) : new zn(t.qa)),
      (e.L = t.H),
      e
    );
  }
  function kr() {}
  function Nr() {
    if (W && !(10 <= Number(ut)))
      throw Error("Environmental error: no available transport.");
  }
  function Rr(t, e) {
    (xt.call(this),
      (this.g = new sr(e)),
      (this.l = t),
      (this.h = (e && e.messageUrlParams) || null),
      (t = (e && e.messageHeaders) || null),
      e &&
        e.clientProtocolHeaderRequired &&
        (t
          ? (t["X-Client-Protocol"] = "webchannel")
          : (t = { "X-Client-Protocol": "webchannel" })),
      (this.g.s = t),
      (t = (e && e.initMessageHeaders) || null),
      e &&
        e.messageContentType &&
        (t
          ? (t["X-WebChannel-Content-Type"] = e.messageContentType)
          : (t = { "X-WebChannel-Content-Type": e.messageContentType })),
      e &&
        e.ya &&
        (t
          ? (t["X-WebChannel-Client-Profile"] = e.ya)
          : (t = { "X-WebChannel-Client-Profile": e.ya })),
      (this.g.P = t),
      (t = e && e.httpHeadersOverwriteParam) && !P(t) && (this.g.o = t),
      (this.A = (e && e.supportsCrossDomainXhr) || !1),
      (this.v = (e && e.sendRawJson) || !1),
      (e = e && e.httpSessionIdParam) &&
        !P(e) &&
        ((this.g.D = e),
        (t = this.h),
        null !== t && e in t && ((t = this.h), e in t && delete t[e])),
      (this.j = new Or(this)));
  }
  function Dr(t) {
    Se.call(this);
    var e = t.__sm__;
    if (e) {
      t: {
        for (var n in e) {
          t = n;
          break t;
        }
        t = void 0;
      }
      ((this.i = t) &&
        ((t = this.i), (e = null !== e && t in e ? e[t] : void 0)),
        (this.data = e));
    } else this.data = t;
  }
  function Cr() {
    (Ae.call(this), (this.status = 1));
  }
  function Or(t) {
    this.g = t;
  }
  ((l = zn.prototype),
    (l.ea = function (t, e, n, r) {
      if (this.g)
        throw Error(
          "[goog.net.XhrIo] Object is active with another request=" +
            this.H +
            "; newUri=" +
            t,
        );
      ((e = e ? e.toUpperCase() : "GET"),
        (this.H = t),
        (this.j = ""),
        (this.m = 0),
        (this.D = !1),
        (this.h = !0),
        (this.g = this.u ? this.u.g() : Ee.g()),
        (this.C = this.u ? _e(this.u) : _e(Ee)),
        (this.g.onreadystatechange = E(this.Fa, this)));
      try {
        ((this.F = !0), this.g.open(e, String(t), !0), (this.F = !1));
      } catch (o) {
        return void Zn(this, o);
      }
      t = n || "";
      var i = new He(this.headers);
      (r &&
        Ke(r, function (t, e) {
          i.set(e, t);
        }),
        (r = C(i.T())),
        (n = d.FormData && t instanceof d.FormData),
        !(0 <= R(Jn, e)) ||
          r ||
          n ||
          i.set(
            "Content-Type",
            "application/x-www-form-urlencoded;charset=utf-8",
          ),
        i.forEach(function (t, e) {
          this.g.setRequestHeader(e, t);
        }, this),
        this.J && (this.g.responseType = this.J),
        "withCredentials" in this.g &&
          this.g.withCredentials !== this.L &&
          (this.g.withCredentials = this.L));
      try {
        (tr(this),
          0 < this.B &&
            ((this.K = Qn(this.g))
              ? ((this.g.timeout = this.B),
                (this.g.ontimeout = E(this.pa, this)))
              : (this.A = Zt(this.pa, this.B, this))),
          (this.v = !0),
          this.g.send(t),
          (this.v = !1));
      } catch (o) {
        Zn(this, o);
      }
    }),
    (l.pa = function () {
      "undefined" != typeof p &&
        this.g &&
        ((this.j = "Timed out after " + this.B + "ms, aborting"),
        (this.m = 8),
        Pt(this, "timeout"),
        this.abort(8));
    }),
    (l.abort = function (t) {
      this.g &&
        this.h &&
        ((this.h = !1),
        (this.l = !0),
        this.g.abort(),
        (this.l = !1),
        (this.m = t || 7),
        Pt(this, "complete"),
        Pt(this, "abort"),
        $n(this));
    }),
    (l.M = function () {
      (this.g &&
        (this.h &&
          ((this.h = !1), (this.l = !0), this.g.abort(), (this.l = !1)),
        $n(this, !0)),
        zn.Z.M.call(this));
    }),
    (l.Fa = function () {
      this.s || (this.F || this.v || this.l ? Yn(this) : this.cb());
    }),
    (l.cb = function () {
      Yn(this);
    }),
    (l.ba = function () {
      try {
        return 2 < er(this) ? this.g.status : -1;
      } catch (t) {
        return -1;
      }
    }),
    (l.ga = function () {
      try {
        return this.g ? this.g.responseText : "";
      } catch (t) {
        return "";
      }
    }),
    (l.Qa = function (t) {
      if (this.g) {
        var e = this.g.responseText;
        return (t && 0 == e.indexOf(t) && (e = e.substring(t.length)), Gn(e));
      }
    }),
    (l.Da = function () {
      return this.m;
    }),
    (l.La = function () {
      return "string" === typeof this.j ? this.j : String(this.j);
    }),
    (l = sr.prototype),
    (l.ma = 8),
    (l.G = 1),
    (l.hb = function (t) {
      try {
        this.h.info("Origin Trials invoked: " + t);
      } catch (e) {}
    }),
    (l.Ha = function (t) {
      if (this.m)
        if (((this.m = null), 1 == this.G)) {
          if (!t) {
            ((this.V = Math.floor(1e5 * Math.random())), (t = this.V++));
            var e = new Ne(this, this.h, t, void 0),
              n = this.s;
            if (
              (this.P && (n ? ((n = B(n)), z(n, this.P)) : (n = this.P)),
              null === this.o && (e.H = n),
              this.ja)
            )
              t: {
                for (var r = 0, i = 0; i < this.l.length; i++) {
                  var o = this.l[i];
                  if (
                    ((o =
                      "__data__" in o.g &&
                      ((o = o.g.__data__), "string" === typeof o)
                        ? o.length
                        : void 0),
                    void 0 === o)
                  )
                    break;
                  if (((r += o), 4096 < r)) {
                    r = i;
                    break t;
                  }
                  if (4096 === r || i === this.l.length - 1) {
                    r = i + 1;
                    break t;
                  }
                }
                r = 1e3;
              }
            else r = 1e3;
            ((r = vr(this, e, r)),
              (i = Ye(this.F)),
              rn(i, "RID", t),
              rn(i, "CVER", 22),
              this.D && rn(i, "X-HTTP-Session-Id", this.D),
              dr(this, i),
              this.o && n && ir(i, this.o, n),
              Rn(this.i, e),
              this.Ra && rn(i, "TYPE", "init"),
              this.ja
                ? (rn(i, "$req", r),
                  rn(i, "SID", "null"),
                  (e.$ = !0),
                  xe(e, i, null))
                : xe(e, i, r),
              (this.G = 2));
          }
        } else
          3 == this.G &&
            (t ? pr(this, t) : 0 == this.l.length || An(this.i) || pr(this));
    }),
    (l.Ga = function () {
      if (
        ((this.u = null),
        br(this),
        this.$ && !(this.L || null == this.g || 0 >= this.O))
      ) {
        var t = 2 * this.O;
        (this.h.info("BP detection timer enabled: " + t),
          (this.B = ye(E(this.bb, this), t)));
      }
    }),
    (l.bb = function () {
      this.B &&
        ((this.B = null),
        this.h.info("BP detection timeout reached."),
        this.h.info("Buffering proxy detected and switch to long-polling!"),
        (this.N = !1),
        (this.L = !0),
        ve(10),
        ur(this),
        br(this));
    }),
    (l.ab = function () {
      null != this.v && ((this.v = null), ur(this), yr(this), ve(19));
    }),
    (l.jb = function (t) {
      t
        ? (this.h.info("Successfully pinged google.com"), ve(2))
        : (this.h.info("Failed to ping google.com"), ve(1));
    }),
    (l = kr.prototype),
    (l.xa = function () {}),
    (l.wa = function () {}),
    (l.va = function () {}),
    (l.ua = function () {}),
    (l.Oa = function () {}),
    (Nr.prototype.g = function (t, e) {
      return new Rr(t, e);
    }),
    S(Rr, xt),
    (Rr.prototype.m = function () {
      ((this.g.j = this.j), this.A && (this.g.H = !0));
      var t = this.g,
        e = this.l,
        n = this.h || void 0;
      (t.Wa && (t.h.info("Origin Trials enabled."), Gt(E(t.hb, t, e))),
        ve(0),
        (t.W = e),
        (t.aa = n || {}),
        (t.N = t.X),
        (t.F = Sr(t, null, t.W)),
        lr(t));
    }),
    (Rr.prototype.close = function () {
      ar(this.g);
    }),
    (Rr.prototype.u = function (t) {
      if ("string" === typeof t) {
        var e = {};
        ((e.__data__ = t), hr(this.g, e));
      } else
        this.v
          ? ((e = {}), (e.__data__ = Mt(t)), hr(this.g, e))
          : hr(this.g, t);
    }),
    (Rr.prototype.M = function () {
      ((this.g.j = null),
        delete this.j,
        ar(this.g),
        delete this.g,
        Rr.Z.M.call(this));
    }),
    S(Dr, Se),
    S(Cr, Ae),
    S(Or, kr),
    (Or.prototype.xa = function () {
      Pt(this.g, "a");
    }),
    (Or.prototype.wa = function (t) {
      Pt(this.g, new Dr(t));
    }),
    (Or.prototype.va = function (t) {
      Pt(this.g, new Cr(t));
    }),
    (Or.prototype.ua = function () {
      Pt(this.g, "b");
    }),
    (Nr.prototype.createWebChannel = Nr.prototype.g),
    (Rr.prototype.send = Rr.prototype.u),
    (Rr.prototype.open = Rr.prototype.m),
    (Rr.prototype.close = Rr.prototype.close),
    (me.NO_ERROR = 0),
    (me.TIMEOUT = 8),
    (me.HTTP_ERROR = 6),
    (be.COMPLETE = "complete"),
    (Te.EventType = Ie),
    (Ie.OPEN = "a"),
    (Ie.CLOSE = "b"),
    (Ie.ERROR = "c"),
    (Ie.MESSAGE = "d"),
    (xt.prototype.listen = xt.prototype.N),
    (zn.prototype.listenOnce = zn.prototype.O),
    (zn.prototype.getLastError = zn.prototype.La),
    (zn.prototype.getLastErrorCode = zn.prototype.Da),
    (zn.prototype.getStatus = zn.prototype.ba),
    (zn.prototype.getResponseJson = zn.prototype.Qa),
    (zn.prototype.getResponseText = zn.prototype.ga),
    (zn.prototype.send = zn.prototype.ea));
  var xr = function () {
      return new Nr();
    },
    Pr = function () {
      return le();
    },
    Lr = me,
    Mr = be,
    Fr = ce,
    Ur = {
      rb: 0,
      ub: 1,
      vb: 2,
      Ob: 3,
      Tb: 4,
      Qb: 5,
      Rb: 6,
      Pb: 7,
      Nb: 8,
      Sb: 9,
      PROXY: 10,
      NOPROXY: 11,
      Lb: 12,
      Hb: 13,
      Ib: 14,
      Gb: 15,
      Jb: 16,
      Kb: 17,
      nb: 18,
      mb: 19,
      ob: 20,
    },
    Vr = Fn,
    qr = Te,
    jr = zn,
    Br = n(34155),
    Gr = n(25108),
    zr = (function () {
      function t(t, e) {
        var n = this;
        ((this.previousValue = t),
          e &&
            ((e.sequenceNumberHandler = function (t) {
              return n.t(t);
            }),
            (this.i = function (t) {
              return e.writeSequenceNumber(t);
            })));
      }
      return (
        (t.prototype.t = function (t) {
          return (
            (this.previousValue = Math.max(t, this.previousValue)),
            this.previousValue
          );
        }),
        (t.prototype.next = function () {
          var t = ++this.previousValue;
          return (this.i && this.i(t), t);
        }),
        t
      );
    })();
  zr.o = -1;
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  var Kr = {
      OK: "ok",
      CANCELLED: "cancelled",
      UNKNOWN: "unknown",
      INVALID_ARGUMENT: "invalid-argument",
      DEADLINE_EXCEEDED: "deadline-exceeded",
      NOT_FOUND: "not-found",
      ALREADY_EXISTS: "already-exists",
      PERMISSION_DENIED: "permission-denied",
      UNAUTHENTICATED: "unauthenticated",
      RESOURCE_EXHAUSTED: "resource-exhausted",
      FAILED_PRECONDITION: "failed-precondition",
      ABORTED: "aborted",
      OUT_OF_RANGE: "out-of-range",
      UNIMPLEMENTED: "unimplemented",
      INTERNAL: "internal",
      UNAVAILABLE: "unavailable",
      DATA_LOSS: "data-loss",
    },
    Hr = (function (t) {
      function e(e, n) {
        var r = this;
        return (
          ((r = t.call(this, n) || this).code = e),
          (r.message = n),
          (r.name = "FirebaseError"),
          (r.toString = function () {
            return r.name + ": [code=" + r.code + "]: " + r.message;
          }),
          r
        );
      }
      return ((0, o.ZT)(e, t), e);
    })(Error),
    Jr = new a.Yd("@firebase/firestore");
  function Qr() {
    return Jr.logLevel;
  }
  function Wr(t) {
    for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
    if (Jr.logLevel <= a["in"].DEBUG) {
      var r = e.map(Yr);
      Jr.debug.apply(Jr, (0, o.ev)(["Firestore (8.10.1): " + t], r));
    }
  }
  function Zr(t) {
    for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
    if (Jr.logLevel <= a["in"].ERROR) {
      var r = e.map(Yr);
      Jr.error.apply(Jr, (0, o.ev)(["Firestore (8.10.1): " + t], r));
    }
  }
  function Xr(t) {
    for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
    if (Jr.logLevel <= a["in"].WARN) {
      var r = e.map(Yr);
      Jr.warn.apply(Jr, (0, o.ev)(["Firestore (8.10.1): " + t], r));
    }
  }
  function Yr(t) {
    if ("string" == typeof t) return t;
    try {
      return ((e = t), JSON.stringify(e));
    } catch (e) {
      return t;
    }
    var e;
  }
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ function $r(t) {
    void 0 === t && (t = "Unexpected state");
    var e = "FIRESTORE (8.10.1) INTERNAL ASSERTION FAILED: " + t;
    throw (Zr(e), new Error(e));
  }
  function ti(t, e) {
    t || $r();
  }
  function ei(t, e) {
    return t;
  }
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ function ni(t) {
    var e = "undefined" != typeof self && (self.crypto || self.msCrypto),
      n = new Uint8Array(t);
    if (e && "function" == typeof e.getRandomValues) e.getRandomValues(n);
    else for (var r = 0; r < t; r++) n[r] = Math.floor(256 * Math.random());
    return n;
  }
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ var ri = (function () {
    function t() {}
    return (
      (t.u = function () {
        for (
          var t =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
            e = Math.floor(256 / t.length) * t.length,
            n = "";
          n.length < 20;
        )
          for (var r = ni(40), i = 0; i < r.length; ++i)
            n.length < 20 && r[i] < e && (n += t.charAt(r[i] % t.length));
        return n;
      }),
      t
    );
  })();
  function ii(t, e) {
    return t < e ? -1 : t > e ? 1 : 0;
  }
  function oi(t, e, n) {
    return (
      t.length === e.length &&
      t.every(function (t, r) {
        return n(t, e[r]);
      })
    );
  }
  function si(t) {
    return t + "\0";
  }
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ var ai = (function () {
      function t(t, e) {
        if (((this.seconds = t), (this.nanoseconds = e), e < 0))
          throw new Hr(
            Kr.INVALID_ARGUMENT,
            "Timestamp nanoseconds out of range: " + e,
          );
        if (e >= 1e9)
          throw new Hr(
            Kr.INVALID_ARGUMENT,
            "Timestamp nanoseconds out of range: " + e,
          );
        if (t < -62135596800)
          throw new Hr(
            Kr.INVALID_ARGUMENT,
            "Timestamp seconds out of range: " + t,
          );
        if (t >= 253402300800)
          throw new Hr(
            Kr.INVALID_ARGUMENT,
            "Timestamp seconds out of range: " + t,
          );
      }
      return (
        (t.now = function () {
          return t.fromMillis(Date.now());
        }),
        (t.fromDate = function (e) {
          return t.fromMillis(e.getTime());
        }),
        (t.fromMillis = function (e) {
          var n = Math.floor(e / 1e3);
          return new t(n, Math.floor(1e6 * (e - 1e3 * n)));
        }),
        (t.prototype.toDate = function () {
          return new Date(this.toMillis());
        }),
        (t.prototype.toMillis = function () {
          return 1e3 * this.seconds + this.nanoseconds / 1e6;
        }),
        (t.prototype._compareTo = function (t) {
          return this.seconds === t.seconds
            ? ii(this.nanoseconds, t.nanoseconds)
            : ii(this.seconds, t.seconds);
        }),
        (t.prototype.isEqual = function (t) {
          return (
            t.seconds === this.seconds && t.nanoseconds === this.nanoseconds
          );
        }),
        (t.prototype.toString = function () {
          return (
            "Timestamp(seconds=" +
            this.seconds +
            ", nanoseconds=" +
            this.nanoseconds +
            ")"
          );
        }),
        (t.prototype.toJSON = function () {
          return { seconds: this.seconds, nanoseconds: this.nanoseconds };
        }),
        (t.prototype.valueOf = function () {
          var t = this.seconds - -62135596800;
          return (
            String(t).padStart(12, "0") +
            "." +
            String(this.nanoseconds).padStart(9, "0")
          );
        }),
        t
      );
    })(),
    ui = (function () {
      function t(t) {
        this.timestamp = t;
      }
      return (
        (t.fromTimestamp = function (e) {
          return new t(e);
        }),
        (t.min = function () {
          return new t(new ai(0, 0));
        }),
        (t.prototype.compareTo = function (t) {
          return this.timestamp._compareTo(t.timestamp);
        }),
        (t.prototype.isEqual = function (t) {
          return this.timestamp.isEqual(t.timestamp);
        }),
        (t.prototype.toMicroseconds = function () {
          return (
            1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3
          );
        }),
        (t.prototype.toString = function () {
          return "SnapshotVersion(" + this.timestamp.toString() + ")";
        }),
        (t.prototype.toTimestamp = function () {
          return this.timestamp;
        }),
        t
      );
    })();
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ function ci(t) {
    var e = 0;
    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e++;
    return e;
  }
  function hi(t, e) {
    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e(n, t[n]);
  }
  function li(t) {
    for (var e in t) if (Object.prototype.hasOwnProperty.call(t, e)) return !1;
    return !0;
  }
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ var fi = (function () {
      function t(t, e, n) {
        (void 0 === e ? (e = 0) : e > t.length && $r(),
          void 0 === n ? (n = t.length - e) : n > t.length - e && $r(),
          (this.segments = t),
          (this.offset = e),
          (this.len = n));
      }
      return (
        Object.defineProperty(t.prototype, "length", {
          get: function () {
            return this.len;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.isEqual = function (e) {
          return 0 === t.comparator(this, e);
        }),
        (t.prototype.child = function (e) {
          var n = this.segments.slice(this.offset, this.limit());
          return (
            e instanceof t
              ? e.forEach(function (t) {
                  n.push(t);
                })
              : n.push(e),
            this.construct(n)
          );
        }),
        (t.prototype.limit = function () {
          return this.offset + this.length;
        }),
        (t.prototype.popFirst = function (t) {
          return (
            (t = void 0 === t ? 1 : t),
            this.construct(this.segments, this.offset + t, this.length - t)
          );
        }),
        (t.prototype.popLast = function () {
          return this.construct(this.segments, this.offset, this.length - 1);
        }),
        (t.prototype.firstSegment = function () {
          return this.segments[this.offset];
        }),
        (t.prototype.lastSegment = function () {
          return this.get(this.length - 1);
        }),
        (t.prototype.get = function (t) {
          return this.segments[this.offset + t];
        }),
        (t.prototype.isEmpty = function () {
          return 0 === this.length;
        }),
        (t.prototype.isPrefixOf = function (t) {
          if (t.length < this.length) return !1;
          for (var e = 0; e < this.length; e++)
            if (this.get(e) !== t.get(e)) return !1;
          return !0;
        }),
        (t.prototype.isImmediateParentOf = function (t) {
          if (this.length + 1 !== t.length) return !1;
          for (var e = 0; e < this.length; e++)
            if (this.get(e) !== t.get(e)) return !1;
          return !0;
        }),
        (t.prototype.forEach = function (t) {
          for (var e = this.offset, n = this.limit(); e < n; e++)
            t(this.segments[e]);
        }),
        (t.prototype.toArray = function () {
          return this.segments.slice(this.offset, this.limit());
        }),
        (t.comparator = function (t, e) {
          for (var n = Math.min(t.length, e.length), r = 0; r < n; r++) {
            var i = t.get(r),
              o = e.get(r);
            if (i < o) return -1;
            if (i > o) return 1;
          }
          return t.length < e.length ? -1 : t.length > e.length ? 1 : 0;
        }),
        t
      );
    })(),
    pi = (function (t) {
      function e() {
        return (null !== t && t.apply(this, arguments)) || this;
      }
      return (
        (0, o.ZT)(e, t),
        (e.prototype.construct = function (t, n, r) {
          return new e(t, n, r);
        }),
        (e.prototype.canonicalString = function () {
          return this.toArray().join("/");
        }),
        (e.prototype.toString = function () {
          return this.canonicalString();
        }),
        (e.fromString = function () {
          for (var t = [], n = 0; n < arguments.length; n++)
            t[n] = arguments[n];
          for (var r = [], i = 0, o = t; i < o.length; i++) {
            var s = o[i];
            if (s.indexOf("//") >= 0)
              throw new Hr(
                Kr.INVALID_ARGUMENT,
                "Invalid segment (" +
                  s +
                  "). Paths must not contain // in them.",
              );
            r.push.apply(
              r,
              s.split("/").filter(function (t) {
                return t.length > 0;
              }),
            );
          }
          return new e(r);
        }),
        (e.emptyPath = function () {
          return new e([]);
        }),
        e
      );
    })(fi),
    di = /^[_a-zA-Z][_a-zA-Z0-9]*$/,
    vi = (function (t) {
      function e() {
        return (null !== t && t.apply(this, arguments)) || this;
      }
      return (
        (0, o.ZT)(e, t),
        (e.prototype.construct = function (t, n, r) {
          return new e(t, n, r);
        }),
        (e.isValidIdentifier = function (t) {
          return di.test(t);
        }),
        (e.prototype.canonicalString = function () {
          return this.toArray()
            .map(function (t) {
              return (
                (t = t.replace(/\\/g, "\\\\").replace(/`/g, "\\`")),
                e.isValidIdentifier(t) || (t = "`" + t + "`"),
                t
              );
            })
            .join(".");
        }),
        (e.prototype.toString = function () {
          return this.canonicalString();
        }),
        (e.prototype.isKeyField = function () {
          return 1 === this.length && "__name__" === this.get(0);
        }),
        (e.keyField = function () {
          return new e(["__name__"]);
        }),
        (e.fromServerFormat = function (t) {
          for (
            var n = [],
              r = "",
              i = 0,
              o = function () {
                if (0 === r.length)
                  throw new Hr(
                    Kr.INVALID_ARGUMENT,
                    "Invalid field path (" +
                      t +
                      "). Paths must not be empty, begin with '.', end with '.', or contain '..'",
                  );
                (n.push(r), (r = ""));
              },
              s = !1;
            i < t.length;
          ) {
            var a = t[i];
            if ("\\" === a) {
              if (i + 1 === t.length)
                throw new Hr(
                  Kr.INVALID_ARGUMENT,
                  "Path has trailing escape character: " + t,
                );
              var u = t[i + 1];
              if ("\\" !== u && "." !== u && "`" !== u)
                throw new Hr(
                  Kr.INVALID_ARGUMENT,
                  "Path has invalid escape sequence: " + t,
                );
              ((r += u), (i += 2));
            } else
              "`" === a
                ? ((s = !s), i++)
                : "." !== a || s
                  ? ((r += a), i++)
                  : (o(), i++);
          }
          if ((o(), s))
            throw new Hr(Kr.INVALID_ARGUMENT, "Unterminated ` in path: " + t);
          return new e(n);
        }),
        (e.emptyPath = function () {
          return new e([]);
        }),
        e
      );
    })(fi),
    gi = (function () {
      function t(t) {
        ((this.fields = t), t.sort(vi.comparator));
      }
      return (
        (t.prototype.covers = function (t) {
          for (var e = 0, n = this.fields; e < n.length; e++)
            if (n[e].isPrefixOf(t)) return !0;
          return !1;
        }),
        (t.prototype.isEqual = function (t) {
          return oi(this.fields, t.fields, function (t, e) {
            return t.isEqual(e);
          });
        }),
        t
      );
    })(),
    yi = (function () {
      function t(t) {
        this.binaryString = t;
      }
      return (
        (t.fromBase64String = function (e) {
          return new t(atob(e));
        }),
        (t.fromUint8Array = function (e) {
          return new t(
            (function (t) {
              for (var e = "", n = 0; n < t.length; ++n)
                e += String.fromCharCode(t[n]);
              return e;
            })(e),
          );
        }),
        (t.prototype.toBase64 = function () {
          return ((t = this.binaryString), btoa(t));
          var t;
        }),
        (t.prototype.toUint8Array = function () {
          return (function (t) {
            for (var e = new Uint8Array(t.length), n = 0; n < t.length; n++)
              e[n] = t.charCodeAt(n);
            return e;
          })(this.binaryString);
        }),
        (t.prototype.approximateByteSize = function () {
          return 2 * this.binaryString.length;
        }),
        (t.prototype.compareTo = function (t) {
          return ii(this.binaryString, t.binaryString);
        }),
        (t.prototype.isEqual = function (t) {
          return this.binaryString === t.binaryString;
        }),
        t
      );
    })();
  yi.EMPTY_BYTE_STRING = new yi("");
  var mi = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);
  function bi(t) {
    if ((ti(!!t), "string" == typeof t)) {
      var e = 0,
        n = mi.exec(t);
      if ((ti(!!n), n[1])) {
        var r = n[1];
        ((r = (r + "000000000").substr(0, 9)), (e = Number(r)));
      }
      var i = new Date(t);
      return { seconds: Math.floor(i.getTime() / 1e3), nanos: e };
    }
    return { seconds: wi(t.seconds), nanos: wi(t.nanos) };
  }
  function wi(t) {
    return "number" == typeof t ? t : "string" == typeof t ? Number(t) : 0;
  }
  function _i(t) {
    return "string" == typeof t ? yi.fromBase64String(t) : yi.fromUint8Array(t);
  }
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ function Ti(t) {
    var e, n;
    return (
      "server_timestamp" ===
      (null ===
        (n = (
          (null === (e = null == t ? void 0 : t.mapValue) || void 0 === e
            ? void 0
            : e.fields) || {}
        ).__type__) || void 0 === n
        ? void 0
        : n.stringValue)
    );
  }
  function Ei(t) {
    var e = t.mapValue.fields.__previous_value__;
    return Ti(e) ? Ei(e) : e;
  }
  function Ii(t) {
    var e = bi(t.mapValue.fields.__local_write_time__.timestampValue);
    return new ai(e.seconds, e.nanos);
  }
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ function Si(t) {
    return null == t;
  }
  function Ai(t) {
    return 0 === t && 1 / t == -1 / 0;
  }
  function ki(t) {
    return (
      "number" == typeof t &&
      Number.isInteger(t) &&
      !Ai(t) &&
      t <= Number.MAX_SAFE_INTEGER &&
      t >= Number.MIN_SAFE_INTEGER
    );
  }
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ var Ni = (function () {
    function t(t) {
      this.path = t;
    }
    return (
      (t.fromPath = function (e) {
        return new t(pi.fromString(e));
      }),
      (t.fromName = function (e) {
        return new t(pi.fromString(e).popFirst(5));
      }),
      (t.prototype.hasCollectionId = function (t) {
        return (
          this.path.length >= 2 && this.path.get(this.path.length - 2) === t
        );
      }),
      (t.prototype.isEqual = function (t) {
        return null !== t && 0 === pi.comparator(this.path, t.path);
      }),
      (t.prototype.toString = function () {
        return this.path.toString();
      }),
      (t.comparator = function (t, e) {
        return pi.comparator(t.path, e.path);
      }),
      (t.isDocumentKey = function (t) {
        return t.length % 2 == 0;
      }),
      (t.fromSegments = function (e) {
        return new t(new pi(e.slice()));
      }),
      t
    );
  })();
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ function Ri(t) {
    return "nullValue" in t
      ? 0
      : "booleanValue" in t
        ? 1
        : "integerValue" in t || "doubleValue" in t
          ? 2
          : "timestampValue" in t
            ? 3
            : "stringValue" in t
              ? 5
              : "bytesValue" in t
                ? 6
                : "referenceValue" in t
                  ? 7
                  : "geoPointValue" in t
                    ? 8
                    : "arrayValue" in t
                      ? 9
                      : "mapValue" in t
                        ? Ti(t)
                          ? 4
                          : 10
                        : $r();
  }
  function Di(t, e) {
    var n = Ri(t);
    if (n !== Ri(e)) return !1;
    switch (n) {
      case 0:
        return !0;
      case 1:
        return t.booleanValue === e.booleanValue;
      case 4:
        return Ii(t).isEqual(Ii(e));
      case 3:
        return (function (t, e) {
          if (
            "string" == typeof t.timestampValue &&
            "string" == typeof e.timestampValue &&
            t.timestampValue.length === e.timestampValue.length
          )
            return t.timestampValue === e.timestampValue;
          var n = bi(t.timestampValue),
            r = bi(e.timestampValue);
          return n.seconds === r.seconds && n.nanos === r.nanos;
        })(t, e);
      case 5:
        return t.stringValue === e.stringValue;
      case 6:
        return (function (t, e) {
          return _i(t.bytesValue).isEqual(_i(e.bytesValue));
        })(t, e);
      case 7:
        return t.referenceValue === e.referenceValue;
      case 8:
        return (function (t, e) {
          return (
            wi(t.geoPointValue.latitude) === wi(e.geoPointValue.latitude) &&
            wi(t.geoPointValue.longitude) === wi(e.geoPointValue.longitude)
          );
        })(t, e);
      case 2:
        return (function (t, e) {
          if ("integerValue" in t && "integerValue" in e)
            return wi(t.integerValue) === wi(e.integerValue);
          if ("doubleValue" in t && "doubleValue" in e) {
            var n = wi(t.doubleValue),
              r = wi(e.doubleValue);
            return n === r ? Ai(n) === Ai(r) : isNaN(n) && isNaN(r);
          }
          return !1;
        })(t, e);
      case 9:
        return oi(t.arrayValue.values || [], e.arrayValue.values || [], Di);
      case 10:
        return (function (t, e) {
          var n = t.mapValue.fields || {},
            r = e.mapValue.fields || {};
          if (ci(n) !== ci(r)) return !1;
          for (var i in n)
            if (n.hasOwnProperty(i) && (void 0 === r[i] || !Di(n[i], r[i])))
              return !1;
          return !0;
        })(t, e);
      default:
        return $r();
    }
  }
  function Ci(t, e) {
    return (
      void 0 !==
      (t.values || []).find(function (t) {
        return Di(t, e);
      })
    );
  }
  function Oi(t, e) {
    var n = Ri(t),
      r = Ri(e);
    if (n !== r) return ii(n, r);
    switch (n) {
      case 0:
        return 0;
      case 1:
        return ii(t.booleanValue, e.booleanValue);
      case 2:
        return (function (t, e) {
          var n = wi(t.integerValue || t.doubleValue),
            r = wi(e.integerValue || e.doubleValue);
          return n < r
            ? -1
            : n > r
              ? 1
              : n === r
                ? 0
                : isNaN(n)
                  ? isNaN(r)
                    ? 0
                    : -1
                  : 1;
        })(t, e);
      case 3:
        return xi(t.timestampValue, e.timestampValue);
      case 4:
        return xi(Ii(t), Ii(e));
      case 5:
        return ii(t.stringValue, e.stringValue);
      case 6:
        return (function (t, e) {
          var n = _i(t),
            r = _i(e);
          return n.compareTo(r);
        })(t.bytesValue, e.bytesValue);
      case 7:
        return (function (t, e) {
          for (
            var n = t.split("/"), r = e.split("/"), i = 0;
            i < n.length && i < r.length;
            i++
          ) {
            var o = ii(n[i], r[i]);
            if (0 !== o) return o;
          }
          return ii(n.length, r.length);
        })(t.referenceValue, e.referenceValue);
      case 8:
        return (function (t, e) {
          var n = ii(wi(t.latitude), wi(e.latitude));
          return 0 !== n ? n : ii(wi(t.longitude), wi(e.longitude));
        })(t.geoPointValue, e.geoPointValue);
      case 9:
        return (function (t, e) {
          for (
            var n = t.values || [], r = e.values || [], i = 0;
            i < n.length && i < r.length;
            ++i
          ) {
            var o = Oi(n[i], r[i]);
            if (o) return o;
          }
          return ii(n.length, r.length);
        })(t.arrayValue, e.arrayValue);
      case 10:
        return (function (t, e) {
          var n = t.fields || {},
            r = Object.keys(n),
            i = e.fields || {},
            o = Object.keys(i);
          (r.sort(), o.sort());
          for (var s = 0; s < r.length && s < o.length; ++s) {
            var a = ii(r[s], o[s]);
            if (0 !== a) return a;
            var u = Oi(n[r[s]], i[o[s]]);
            if (0 !== u) return u;
          }
          return ii(r.length, o.length);
        })(t.mapValue, e.mapValue);
      default:
        throw $r();
    }
  }
  function xi(t, e) {
    if ("string" == typeof t && "string" == typeof e && t.length === e.length)
      return ii(t, e);
    var n = bi(t),
      r = bi(e),
      i = ii(n.seconds, r.seconds);
    return 0 !== i ? i : ii(n.nanos, r.nanos);
  }
  function Pi(t) {
    return Li(t);
  }
  function Li(t) {
    return "nullValue" in t
      ? "null"
      : "booleanValue" in t
        ? "" + t.booleanValue
        : "integerValue" in t
          ? "" + t.integerValue
          : "doubleValue" in t
            ? "" + t.doubleValue
            : "timestampValue" in t
              ? (function (t) {
                  var e = bi(t);
                  return "time(" + e.seconds + "," + e.nanos + ")";
                })(t.timestampValue)
              : "stringValue" in t
                ? t.stringValue
                : "bytesValue" in t
                  ? _i(t.bytesValue).toBase64()
                  : "referenceValue" in t
                    ? ((n = t.referenceValue), Ni.fromName(n).toString())
                    : "geoPointValue" in t
                      ? "geo(" +
                        (e = t.geoPointValue).latitude +
                        "," +
                        e.longitude +
                        ")"
                      : "arrayValue" in t
                        ? (function (t) {
                            for (
                              var e = "[", n = !0, r = 0, i = t.values || [];
                              r < i.length;
                              r++
                            )
                              (n ? (n = !1) : (e += ","), (e += Li(i[r])));
                            return e + "]";
                          })(t.arrayValue)
                        : "mapValue" in t
                          ? (function (t) {
                              for (
                                var e = "{",
                                  n = !0,
                                  r = 0,
                                  i = Object.keys(t.fields || {}).sort();
                                r < i.length;
                                r++
                              ) {
                                var o = i[r];
                                (n ? (n = !1) : (e += ","),
                                  (e += o + ":" + Li(t.fields[o])));
                              }
                              return e + "}";
                            })(t.mapValue)
                          : $r();
    var e, n;
  }
  function Mi(t, e) {
    return {
      referenceValue:
        "projects/" +
        t.projectId +
        "/databases/" +
        t.database +
        "/documents/" +
        e.path.canonicalString(),
    };
  }
  function Fi(t) {
    return !!t && "integerValue" in t;
  }
  function Ui(t) {
    return !!t && "arrayValue" in t;
  }
  function Vi(t) {
    return !!t && "nullValue" in t;
  }
  function qi(t) {
    return !!t && "doubleValue" in t && isNaN(Number(t.doubleValue));
  }
  function ji(t) {
    return !!t && "mapValue" in t;
  }
  function Bi(t) {
    if (t.geoPointValue)
      return { geoPointValue: Object.assign({}, t.geoPointValue) };
    if (t.timestampValue && "object" == (0, i.Z)(t.timestampValue))
      return { timestampValue: Object.assign({}, t.timestampValue) };
    if (t.mapValue) {
      var e = { mapValue: { fields: {} } };
      return (
        hi(t.mapValue.fields, function (t, n) {
          return (e.mapValue.fields[t] = Bi(n));
        }),
        e
      );
    }
    if (t.arrayValue) {
      for (
        var n = { arrayValue: { values: [] } }, r = 0;
        r < (t.arrayValue.values || []).length;
        ++r
      )
        n.arrayValue.values[r] = Bi(t.arrayValue.values[r]);
      return n;
    }
    return Object.assign({}, t);
  }
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ var Gi = (function () {
    function t(t) {
      this.value = t;
    }
    return (
      (t.empty = function () {
        return new t({ mapValue: {} });
      }),
      (t.prototype.field = function (t) {
        if (t.isEmpty()) return this.value;
        for (var e = this.value, n = 0; n < t.length - 1; ++n)
          if (!ji((e = (e.mapValue.fields || {})[t.get(n)]))) return null;
        return (e = (e.mapValue.fields || {})[t.lastSegment()]) || null;
      }),
      (t.prototype.set = function (t, e) {
        this.getFieldsMap(t.popLast())[t.lastSegment()] = Bi(e);
      }),
      (t.prototype.setAll = function (t) {
        var e = this,
          n = vi.emptyPath(),
          r = {},
          i = [];
        t.forEach(function (t, o) {
          if (!n.isImmediateParentOf(o)) {
            var s = e.getFieldsMap(n);
            (e.applyChanges(s, r, i), (r = {}), (i = []), (n = o.popLast()));
          }
          t ? (r[o.lastSegment()] = Bi(t)) : i.push(o.lastSegment());
        });
        var o = this.getFieldsMap(n);
        this.applyChanges(o, r, i);
      }),
      (t.prototype.delete = function (t) {
        var e = this.field(t.popLast());
        ji(e) && e.mapValue.fields && delete e.mapValue.fields[t.lastSegment()];
      }),
      (t.prototype.isEqual = function (t) {
        return Di(this.value, t.value);
      }),
      (t.prototype.getFieldsMap = function (t) {
        var e = this.value;
        e.mapValue.fields || (e.mapValue = { fields: {} });
        for (var n = 0; n < t.length; ++n) {
          var r = e.mapValue.fields[t.get(n)];
          ((ji(r) && r.mapValue.fields) ||
            ((r = { mapValue: { fields: {} } }),
            (e.mapValue.fields[t.get(n)] = r)),
            (e = r));
        }
        return e.mapValue.fields;
      }),
      (t.prototype.applyChanges = function (t, e, n) {
        hi(e, function (e, n) {
          return (t[e] = n);
        });
        for (var r = 0, i = n; r < i.length; r++) {
          var o = i[r];
          delete t[o];
        }
      }),
      (t.prototype.clone = function () {
        return new t(Bi(this.value));
      }),
      t
    );
  })();
  function zi(t) {
    var e = [];
    return (
      hi(t.fields, function (t, n) {
        var r = new vi([t]);
        if (ji(n)) {
          var i = zi(n.mapValue).fields;
          if (0 === i.length) e.push(r);
          else
            for (var o = 0, s = i; o < s.length; o++) {
              var a = s[o];
              e.push(r.child(a));
            }
        } else e.push(r);
      }),
      new gi(e)
    );
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
  }
  var Ki = (function () {
      function t(t, e, n, r, i) {
        ((this.key = t),
          (this.documentType = e),
          (this.version = n),
          (this.data = r),
          (this.documentState = i));
      }
      return (
        (t.newInvalidDocument = function (e) {
          return new t(e, 0, ui.min(), Gi.empty(), 0);
        }),
        (t.newFoundDocument = function (e, n, r) {
          return new t(e, 1, n, r, 0);
        }),
        (t.newNoDocument = function (e, n) {
          return new t(e, 2, n, Gi.empty(), 0);
        }),
        (t.newUnknownDocument = function (e, n) {
          return new t(e, 3, n, Gi.empty(), 2);
        }),
        (t.prototype.convertToFoundDocument = function (t, e) {
          return (
            (this.version = t),
            (this.documentType = 1),
            (this.data = e),
            (this.documentState = 0),
            this
          );
        }),
        (t.prototype.convertToNoDocument = function (t) {
          return (
            (this.version = t),
            (this.documentType = 2),
            (this.data = Gi.empty()),
            (this.documentState = 0),
            this
          );
        }),
        (t.prototype.convertToUnknownDocument = function (t) {
          return (
            (this.version = t),
            (this.documentType = 3),
            (this.data = Gi.empty()),
            (this.documentState = 2),
            this
          );
        }),
        (t.prototype.setHasCommittedMutations = function () {
          return ((this.documentState = 2), this);
        }),
        (t.prototype.setHasLocalMutations = function () {
          return ((this.documentState = 1), this);
        }),
        Object.defineProperty(t.prototype, "hasLocalMutations", {
          get: function () {
            return 1 === this.documentState;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "hasCommittedMutations", {
          get: function () {
            return 2 === this.documentState;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "hasPendingWrites", {
          get: function () {
            return this.hasLocalMutations || this.hasCommittedMutations;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.isValidDocument = function () {
          return 0 !== this.documentType;
        }),
        (t.prototype.isFoundDocument = function () {
          return 1 === this.documentType;
        }),
        (t.prototype.isNoDocument = function () {
          return 2 === this.documentType;
        }),
        (t.prototype.isUnknownDocument = function () {
          return 3 === this.documentType;
        }),
        (t.prototype.isEqual = function (e) {
          return (
            e instanceof t &&
            this.key.isEqual(e.key) &&
            this.version.isEqual(e.version) &&
            this.documentType === e.documentType &&
            this.documentState === e.documentState &&
            this.data.isEqual(e.data)
          );
        }),
        (t.prototype.clone = function () {
          return new t(
            this.key,
            this.documentType,
            this.version,
            this.data.clone(),
            this.documentState,
          );
        }),
        (t.prototype.toString = function () {
          return (
            "Document(" +
            this.key +
            ", " +
            this.version +
            ", " +
            JSON.stringify(this.data.value) +
            ", {documentType: " +
            this.documentType +
            "}), {documentState: " +
            this.documentState +
            "})"
          );
        }),
        t
      );
    })(),
    Hi = function (t, e, n, r, i, o, s) {
      (void 0 === e && (e = null),
        void 0 === n && (n = []),
        void 0 === r && (r = []),
        void 0 === i && (i = null),
        void 0 === o && (o = null),
        void 0 === s && (s = null),
        (this.path = t),
        (this.collectionGroup = e),
        (this.orderBy = n),
        (this.filters = r),
        (this.limit = i),
        (this.startAt = o),
        (this.endAt = s),
        (this.h = null));
    };
  /**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ function Ji(t, e, n, r, i, o, s) {
    return (
      void 0 === e && (e = null),
      void 0 === n && (n = []),
      void 0 === r && (r = []),
      void 0 === i && (i = null),
      void 0 === o && (o = null),
      void 0 === s && (s = null),
      new Hi(t, e, n, r, i, o, s)
    );
  }
  function Qi(t) {
    var e = ei(t);
    if (null === e.h) {
      var n = e.path.canonicalString();
      (null !== e.collectionGroup && (n += "|cg:" + e.collectionGroup),
        (n += "|f:"),
        (n += e.filters
          .map(function (t) {
            return (function (t) {
              return t.field.canonicalString() + t.op.toString() + Pi(t.value);
            })(t);
          })
          .join(",")),
        (n += "|ob:"),
        (n += e.orderBy
          .map(function (t) {
            return (function (t) {
              return t.field.canonicalString() + t.dir;
            })(t);
          })
          .join(",")),
        Si(e.limit) || ((n += "|l:"), (n += e.limit)),
        e.startAt && ((n += "|lb:"), (n += ao(e.startAt))),
        e.endAt && ((n += "|ub:"), (n += ao(e.endAt))),
        (e.h = n));
    }
    return e.h;
  }
  function Wi(t, e) {
    if (t.limit !== e.limit) return !1;
    if (t.orderBy.length !== e.orderBy.length) return !1;
    for (var n = 0; n < t.orderBy.length; n++)
      if (!co(t.orderBy[n], e.orderBy[n])) return !1;
    if (t.filters.length !== e.filters.length) return !1;
    for (var r = 0; r < t.filters.length; r++)
      if (
        ((i = t.filters[r]),
        (o = e.filters[r]),
        i.op !== o.op || !i.field.isEqual(o.field) || !Di(i.value, o.value))
      )
        return !1;
    var i, o;
    return (
      t.collectionGroup === e.collectionGroup &&
      !!t.path.isEqual(e.path) &&
      !!lo(t.startAt, e.startAt) &&
      lo(t.endAt, e.endAt)
    );
  }
  function Zi(t) {
    return (
      Ni.isDocumentKey(t.path) &&
      null === t.collectionGroup &&
      0 === t.filters.length
    );
  }
  var Xi = (function (t) {
      function e(e, n, r) {
        var i = this;
        return (
          ((i = t.call(this) || this).field = e),
          (i.op = n),
          (i.value = r),
          i
        );
      }
      return (
        (0, o.ZT)(e, t),
        (e.create = function (t, n, r) {
          return t.isKeyField()
            ? "in" === n || "not-in" === n
              ? this.l(t, n, r)
              : new Yi(t, n, r)
            : "array-contains" === n
              ? new no(t, r)
              : "in" === n
                ? new ro(t, r)
                : "not-in" === n
                  ? new io(t, r)
                  : "array-contains-any" === n
                    ? new oo(t, r)
                    : new e(t, n, r);
        }),
        (e.l = function (t, e, n) {
          return "in" === e ? new $i(t, n) : new to(t, n);
        }),
        (e.prototype.matches = function (t) {
          var e = t.data.field(this.field);
          return "!=" === this.op
            ? null !== e && this.m(Oi(e, this.value))
            : null !== e &&
                Ri(this.value) === Ri(e) &&
                this.m(Oi(e, this.value));
        }),
        (e.prototype.m = function (t) {
          switch (this.op) {
            case "<":
              return t < 0;
            case "<=":
              return t <= 0;
            case "==":
              return 0 === t;
            case "!=":
              return 0 !== t;
            case ">":
              return t > 0;
            case ">=":
              return t >= 0;
            default:
              return $r();
          }
        }),
        (e.prototype.g = function () {
          return ["<", "<=", ">", ">=", "!=", "not-in"].indexOf(this.op) >= 0;
        }),
        e
      );
    })(function () {}),
    Yi = (function (t) {
      function e(e, n, r) {
        var i = this;
        return (
          ((i = t.call(this, e, n, r) || this).key = Ni.fromName(
            r.referenceValue,
          )),
          i
        );
      }
      return (
        (0, o.ZT)(e, t),
        (e.prototype.matches = function (t) {
          var e = Ni.comparator(t.key, this.key);
          return this.m(e);
        }),
        e
      );
    })(Xi),
    $i = (function (t) {
      function e(e, n) {
        var r = this;
        return (((r = t.call(this, e, "in", n) || this).keys = eo("in", n)), r);
      }
      return (
        (0, o.ZT)(e, t),
        (e.prototype.matches = function (t) {
          return this.keys.some(function (e) {
            return e.isEqual(t.key);
          });
        }),
        e
      );
    })(Xi),
    to = (function (t) {
      function e(e, n) {
        var r = this;
        return (
          ((r = t.call(this, e, "not-in", n) || this).keys = eo("not-in", n)),
          r
        );
      }
      return (
        (0, o.ZT)(e, t),
        (e.prototype.matches = function (t) {
          return !this.keys.some(function (e) {
            return e.isEqual(t.key);
          });
        }),
        e
      );
    })(Xi);
  function eo(t, e) {
    var n;
    return (
      (null === (n = e.arrayValue) || void 0 === n ? void 0 : n.values) || []
    ).map(function (t) {
      return Ni.fromName(t.referenceValue);
    });
  }
  var no = (function (t) {
      function e(e, n) {
        return t.call(this, e, "array-contains", n) || this;
      }
      return (
        (0, o.ZT)(e, t),
        (e.prototype.matches = function (t) {
          var e = t.data.field(this.field);
          return Ui(e) && Ci(e.arrayValue, this.value);
        }),
        e
      );
    })(Xi),
    ro = (function (t) {
      function e(e, n) {
        return t.call(this, e, "in", n) || this;
      }
      return (
        (0, o.ZT)(e, t),
        (e.prototype.matches = function (t) {
          var e = t.data.field(this.field);
          return null !== e && Ci(this.value.arrayValue, e);
        }),
        e
      );
    })(Xi),
    io = (function (t) {
      function e(e, n) {
        return t.call(this, e, "not-in", n) || this;
      }
      return (
        (0, o.ZT)(e, t),
        (e.prototype.matches = function (t) {
          if (Ci(this.value.arrayValue, { nullValue: "NULL_VALUE" })) return !1;
          var e = t.data.field(this.field);
          return null !== e && !Ci(this.value.arrayValue, e);
        }),
        e
      );
    })(Xi),
    oo = (function (t) {
      function e(e, n) {
        return t.call(this, e, "array-contains-any", n) || this;
      }
      return (
        (0, o.ZT)(e, t),
        (e.prototype.matches = function (t) {
          var e = this,
            n = t.data.field(this.field);
          return (
            !(!Ui(n) || !n.arrayValue.values) &&
            n.arrayValue.values.some(function (t) {
              return Ci(e.value.arrayValue, t);
            })
          );
        }),
        e
      );
    })(Xi),
    so = function (t, e) {
      ((this.position = t), (this.before = e));
    };
  function ao(t) {
    return (
      (t.before ? "b" : "a") +
      ":" +
      t.position
        .map(function (t) {
          return Pi(t);
        })
        .join(",")
    );
  }
  var uo = function (t, e) {
    (void 0 === e && (e = "asc"), (this.field = t), (this.dir = e));
  };
  function co(t, e) {
    return t.dir === e.dir && t.field.isEqual(e.field);
  }
  function ho(t, e, n) {
    for (var r = 0, i = 0; i < t.position.length; i++) {
      var o = e[i],
        s = t.position[i];
      if (
        ((r = o.field.isKeyField()
          ? Ni.comparator(Ni.fromName(s.referenceValue), n.key)
          : Oi(s, n.data.field(o.field))),
        "desc" === o.dir && (r *= -1),
        0 !== r)
      )
        break;
    }
    return t.before ? r <= 0 : r < 0;
  }
  function lo(t, e) {
    if (null === t) return null === e;
    if (null === e) return !1;
    if (t.before !== e.before || t.position.length !== e.position.length)
      return !1;
    for (var n = 0; n < t.position.length; n++)
      if (!Di(t.position[n], e.position[n])) return !1;
    return !0;
  }
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ var fo = function (t, e, n, r, i, o, s, a) {
    (void 0 === e && (e = null),
      void 0 === n && (n = []),
      void 0 === r && (r = []),
      void 0 === i && (i = null),
      void 0 === o && (o = "F"),
      void 0 === s && (s = null),
      void 0 === a && (a = null),
      (this.path = t),
      (this.collectionGroup = e),
      (this.explicitOrderBy = n),
      (this.filters = r),
      (this.limit = i),
      (this.limitType = o),
      (this.startAt = s),
      (this.endAt = a),
      (this.p = null),
      (this.T = null),
      this.startAt,
      this.endAt);
  };
  function po(t, e, n, r, i, o, s, a) {
    return new fo(t, e, n, r, i, o, s, a);
  }
  function vo(t) {
    return new fo(t);
  }
  function go(t) {
    return !Si(t.limit) && "F" === t.limitType;
  }
  function yo(t) {
    return !Si(t.limit) && "L" === t.limitType;
  }
  function mo(t) {
    return t.explicitOrderBy.length > 0 ? t.explicitOrderBy[0].field : null;
  }
  function bo(t) {
    for (var e = 0, n = t.filters; e < n.length; e++) {
      var r = n[e];
      if (r.g()) return r.field;
    }
    return null;
  }
  function wo(t) {
    return null !== t.collectionGroup;
  }
  function _o(t) {
    var e = ei(t);
    if (null === e.p) {
      e.p = [];
      var n = bo(e),
        r = mo(e);
      if (null !== n && null === r)
        (n.isKeyField() || e.p.push(new uo(n)),
          e.p.push(new uo(vi.keyField(), "asc")));
      else {
        for (var i = !1, o = 0, s = e.explicitOrderBy; o < s.length; o++) {
          var a = s[o];
          (e.p.push(a), a.field.isKeyField() && (i = !0));
        }
        if (!i) {
          var u =
            e.explicitOrderBy.length > 0
              ? e.explicitOrderBy[e.explicitOrderBy.length - 1].dir
              : "asc";
          e.p.push(new uo(vi.keyField(), u));
        }
      }
    }
    return e.p;
  }
  function To(t) {
    var e = ei(t);
    if (!e.T)
      if ("F" === e.limitType)
        e.T = Ji(
          e.path,
          e.collectionGroup,
          _o(e),
          e.filters,
          e.limit,
          e.startAt,
          e.endAt,
        );
      else {
        for (var n = [], r = 0, i = _o(e); r < i.length; r++) {
          var o = i[r],
            s = "desc" === o.dir ? "asc" : "desc";
          n.push(new uo(o.field, s));
        }
        var a = e.endAt ? new so(e.endAt.position, !e.endAt.before) : null,
          u = e.startAt ? new so(e.startAt.position, !e.startAt.before) : null;
        e.T = Ji(e.path, e.collectionGroup, n, e.filters, e.limit, a, u);
      }
    return e.T;
  }
  function Eo(t, e, n) {
    return new fo(
      t.path,
      t.collectionGroup,
      t.explicitOrderBy.slice(),
      t.filters.slice(),
      e,
      n,
      t.startAt,
      t.endAt,
    );
  }
  function Io(t, e) {
    return Wi(To(t), To(e)) && t.limitType === e.limitType;
  }
  function So(t) {
    return Qi(To(t)) + "|lt:" + t.limitType;
  }
  function Ao(t) {
    return (
      "Query(target=" +
      (function (t) {
        var e = t.path.canonicalString();
        return (
          null !== t.collectionGroup &&
            (e += " collectionGroup=" + t.collectionGroup),
          t.filters.length > 0 &&
            (e +=
              ", filters: [" +
              t.filters
                .map(function (t) {
                  return (
                    (e = t).field.canonicalString() +
                    " " +
                    e.op +
                    " " +
                    Pi(e.value)
                  );
                  var e;
                })
                .join(", ") +
              "]"),
          Si(t.limit) || (e += ", limit: " + t.limit),
          t.orderBy.length > 0 &&
            (e +=
              ", orderBy: [" +
              t.orderBy
                .map(function (t) {
                  return (function (t) {
                    return t.field.canonicalString() + " (" + t.dir + ")";
                  })(t);
                })
                .join(", ") +
              "]"),
          t.startAt && (e += ", startAt: " + ao(t.startAt)),
          t.endAt && (e += ", endAt: " + ao(t.endAt)),
          "Target(" + e + ")"
        );
      })(To(t)) +
      "; limitType=" +
      t.limitType +
      ")"
    );
  }
  function ko(t, e) {
    return (
      e.isFoundDocument() &&
      (function (t, e) {
        var n = e.key.path;
        return null !== t.collectionGroup
          ? e.key.hasCollectionId(t.collectionGroup) && t.path.isPrefixOf(n)
          : Ni.isDocumentKey(t.path)
            ? t.path.isEqual(n)
            : t.path.isImmediateParentOf(n);
      })(t, e) &&
      (function (t, e) {
        for (var n = 0, r = t.explicitOrderBy; n < r.length; n++) {
          var i = r[n];
          if (!i.field.isKeyField() && null === e.data.field(i.field))
            return !1;
        }
        return !0;
      })(t, e) &&
      (function (t, e) {
        for (var n = 0, r = t.filters; n < r.length; n++)
          if (!r[n].matches(e)) return !1;
        return !0;
      })(t, e) &&
      (function (t, e) {
        return (
          !(t.startAt && !ho(t.startAt, _o(t), e)) &&
          (!t.endAt || !ho(t.endAt, _o(t), e))
        );
      })(t, e)
    );
  }
  function No(t) {
    return function (e, n) {
      for (var r = !1, i = 0, o = _o(t); i < o.length; i++) {
        var s = o[i],
          a = Ro(s, e, n);
        if (0 !== a) return a;
        r = r || s.field.isKeyField();
      }
      return 0;
    };
  }
  function Ro(t, e, n) {
    var r = t.field.isKeyField()
      ? Ni.comparator(e.key, n.key)
      : (function (t, e, n) {
          var r = e.data.field(t),
            i = n.data.field(t);
          return null !== r && null !== i ? Oi(r, i) : $r();
        })(t.field, e, n);
    switch (t.dir) {
      case "asc":
        return r;
      case "desc":
        return -1 * r;
      default:
        return $r();
    }
  }
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ function Do(t, e) {
    if (t.I) {
      if (isNaN(e)) return { doubleValue: "NaN" };
      if (e === 1 / 0) return { doubleValue: "Infinity" };
      if (e === -1 / 0) return { doubleValue: "-Infinity" };
    }
    return { doubleValue: Ai(e) ? "-0" : e };
  }
  function Co(t) {
    return { integerValue: "" + t };
  }
  function Oo(t, e) {
    return ki(e) ? Co(e) : Do(t, e);
  }
  /**
   * @license
   * Copyright 2018 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ var xo = function () {
    this._ = void 0;
  };
  function Po(t, e, n) {
    return t instanceof Fo
      ? (function (t, e) {
          var n = {
            fields: {
              __type__: { stringValue: "server_timestamp" },
              __local_write_time__: {
                timestampValue: { seconds: t.seconds, nanos: t.nanoseconds },
              },
            },
          };
          return (e && (n.fields.__previous_value__ = e), { mapValue: n });
        })(n, e)
      : t instanceof Uo
        ? Vo(t, e)
        : t instanceof qo
          ? jo(t, e)
          : (function (t, e) {
              var n = Mo(t, e),
                r = Go(n) + Go(t.A);
              return Fi(n) && Fi(t.A) ? Co(r) : Do(t.R, r);
            })(t, e);
  }
  function Lo(t, e, n) {
    return t instanceof Uo ? Vo(t, e) : t instanceof qo ? jo(t, e) : n;
  }
  function Mo(t, e) {
    return t instanceof Bo
      ? Fi((n = e)) ||
        (function (t) {
          return !!t && "doubleValue" in t;
        })(n)
        ? e
        : { integerValue: 0 }
      : null;
    var n;
  }
  var Fo = (function (t) {
      function e() {
        return (null !== t && t.apply(this, arguments)) || this;
      }
      return ((0, o.ZT)(e, t), e);
    })(xo),
    Uo = (function (t) {
      function e(e) {
        var n = this;
        return (((n = t.call(this) || this).elements = e), n);
      }
      return ((0, o.ZT)(e, t), e);
    })(xo);
  function Vo(t, e) {
    for (
      var n = zo(e),
        r = function (t) {
          n.some(function (e) {
            return Di(e, t);
          }) || n.push(t);
        },
        i = 0,
        o = t.elements;
      i < o.length;
      i++
    )
      r(o[i]);
    return { arrayValue: { values: n } };
  }
  var qo = (function (t) {
    function e(e) {
      var n = this;
      return (((n = t.call(this) || this).elements = e), n);
    }
    return ((0, o.ZT)(e, t), e);
  })(xo);
  function jo(t, e) {
    for (
      var n = zo(e),
        r = function (t) {
          n = n.filter(function (e) {
            return !Di(e, t);
          });
        },
        i = 0,
        o = t.elements;
      i < o.length;
      i++
    )
      r(o[i]);
    return { arrayValue: { values: n } };
  }
  var Bo = (function (t) {
    function e(e, n) {
      var r = this;
      return (((r = t.call(this) || this).R = e), (r.A = n), r);
    }
    return ((0, o.ZT)(e, t), e);
  })(xo);
  function Go(t) {
    return wi(t.integerValue || t.doubleValue);
  }
  function zo(t) {
    return Ui(t) && t.arrayValue.values ? t.arrayValue.values.slice() : [];
  }
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ var Ko = function (t, e) {
      ((this.field = t), (this.transform = e));
    },
    Ho = function (t, e) {
      ((this.version = t), (this.transformResults = e));
    },
    Jo = (function () {
      function t(t, e) {
        ((this.updateTime = t), (this.exists = e));
      }
      return (
        (t.none = function () {
          return new t();
        }),
        (t.exists = function (e) {
          return new t(void 0, e);
        }),
        (t.updateTime = function (e) {
          return new t(e);
        }),
        Object.defineProperty(t.prototype, "isNone", {
          get: function () {
            return void 0 === this.updateTime && void 0 === this.exists;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.isEqual = function (t) {
          return (
            this.exists === t.exists &&
            (this.updateTime
              ? !!t.updateTime && this.updateTime.isEqual(t.updateTime)
              : !t.updateTime)
          );
        }),
        t
      );
    })();
  function Qo(t, e) {
    return void 0 !== t.updateTime
      ? e.isFoundDocument() && e.version.isEqual(t.updateTime)
      : void 0 === t.exists || t.exists === e.isFoundDocument();
  }
  var Wo = function () {};
  function Zo(t, e, n) {
    t instanceof es
      ? (function (t, e, n) {
          var r = t.value.clone(),
            i = is(t.fieldTransforms, e, n.transformResults);
          (r.setAll(i),
            e.convertToFoundDocument(n.version, r).setHasCommittedMutations());
        })(t, e, n)
      : t instanceof ns
        ? (function (t, e, n) {
            if (Qo(t.precondition, e)) {
              var r = is(t.fieldTransforms, e, n.transformResults),
                i = e.data;
              (i.setAll(rs(t)),
                i.setAll(r),
                e
                  .convertToFoundDocument(n.version, i)
                  .setHasCommittedMutations());
            } else e.convertToUnknownDocument(n.version);
          })(t, e, n)
        : (function (t, e, n) {
            e.convertToNoDocument(n.version).setHasCommittedMutations();
          })(0, e, n);
  }
  function Xo(t, e, n) {
    t instanceof es
      ? (function (t, e, n) {
          if (Qo(t.precondition, e)) {
            var r = t.value.clone(),
              i = os(t.fieldTransforms, n, e);
            (r.setAll(i),
              e.convertToFoundDocument(ts(e), r).setHasLocalMutations());
          }
        })(t, e, n)
      : t instanceof ns
        ? (function (t, e, n) {
            if (Qo(t.precondition, e)) {
              var r = os(t.fieldTransforms, n, e),
                i = e.data;
              (i.setAll(rs(t)),
                i.setAll(r),
                e.convertToFoundDocument(ts(e), i).setHasLocalMutations());
            }
          })(t, e, n)
        : (function (t, e) {
            Qo(t.precondition, e) && e.convertToNoDocument(ui.min());
          })(t, e);
  }
  function Yo(t, e) {
    for (var n = null, r = 0, i = t.fieldTransforms; r < i.length; r++) {
      var o = i[r],
        s = e.data.field(o.field),
        a = Mo(o.transform, s || null);
      null != a && (null == n && (n = Gi.empty()), n.set(o.field, a));
    }
    return n || null;
  }
  function $o(t, e) {
    return (
      t.type === e.type &&
      !!t.key.isEqual(e.key) &&
      !!t.precondition.isEqual(e.precondition) &&
      !!(function (t, e) {
        return (
          (void 0 === t && void 0 === e) ||
          (!(!t || !e) &&
            oi(t, e, function (t, e) {
              return (function (t, e) {
                return (
                  t.field.isEqual(e.field) &&
                  (function (t, e) {
                    return (t instanceof Uo && e instanceof Uo) ||
                      (t instanceof qo && e instanceof qo)
                      ? oi(t.elements, e.elements, Di)
                      : t instanceof Bo && e instanceof Bo
                        ? Di(t.A, e.A)
                        : t instanceof Fo && e instanceof Fo;
                  })(t.transform, e.transform)
                );
              })(t, e);
            }))
        );
      })(t.fieldTransforms, e.fieldTransforms) &&
      (0 === t.type
        ? t.value.isEqual(e.value)
        : 1 !== t.type ||
          (t.data.isEqual(e.data) && t.fieldMask.isEqual(e.fieldMask)))
    );
  }
  function ts(t) {
    return t.isFoundDocument() ? t.version : ui.min();
  }
  var es = (function (t) {
      function e(e, n, r, i) {
        void 0 === i && (i = []);
        var o = this;
        return (
          ((o = t.call(this) || this).key = e),
          (o.value = n),
          (o.precondition = r),
          (o.fieldTransforms = i),
          (o.type = 0),
          o
        );
      }
      return ((0, o.ZT)(e, t), e);
    })(Wo),
    ns = (function (t) {
      function e(e, n, r, i, o) {
        void 0 === o && (o = []);
        var s = this;
        return (
          ((s = t.call(this) || this).key = e),
          (s.data = n),
          (s.fieldMask = r),
          (s.precondition = i),
          (s.fieldTransforms = o),
          (s.type = 1),
          s
        );
      }
      return ((0, o.ZT)(e, t), e);
    })(Wo);
  function rs(t) {
    var e = new Map();
    return (
      t.fieldMask.fields.forEach(function (n) {
        if (!n.isEmpty()) {
          var r = t.data.field(n);
          e.set(n, r);
        }
      }),
      e
    );
  }
  function is(t, e, n) {
    var r = new Map();
    ti(t.length === n.length);
    for (var i = 0; i < n.length; i++) {
      var o = t[i],
        s = o.transform,
        a = e.data.field(o.field);
      r.set(o.field, Lo(s, a, n[i]));
    }
    return r;
  }
  function os(t, e, n) {
    for (var r = new Map(), i = 0, o = t; i < o.length; i++) {
      var s = o[i],
        a = s.transform,
        u = n.data.field(s.field);
      r.set(s.field, Po(a, u, e));
    }
    return r;
  }
  var ss,
    as,
    us = (function (t) {
      function e(e, n) {
        var r = this;
        return (
          ((r = t.call(this) || this).key = e),
          (r.precondition = n),
          (r.type = 2),
          (r.fieldTransforms = []),
          r
        );
      }
      return ((0, o.ZT)(e, t), e);
    })(Wo),
    cs = (function (t) {
      function e(e, n) {
        var r = this;
        return (
          ((r = t.call(this) || this).key = e),
          (r.precondition = n),
          (r.type = 3),
          (r.fieldTransforms = []),
          r
        );
      }
      return ((0, o.ZT)(e, t), e);
    })(Wo),
    hs = function (t) {
      this.count = t;
    };
  function ls(t) {
    switch (t) {
      case Kr.OK:
        return $r();
      case Kr.CANCELLED:
      case Kr.UNKNOWN:
      case Kr.DEADLINE_EXCEEDED:
      case Kr.RESOURCE_EXHAUSTED:
      case Kr.INTERNAL:
      case Kr.UNAVAILABLE:
      case Kr.UNAUTHENTICATED:
        return !1;
      case Kr.INVALID_ARGUMENT:
      case Kr.NOT_FOUND:
      case Kr.ALREADY_EXISTS:
      case Kr.PERMISSION_DENIED:
      case Kr.FAILED_PRECONDITION:
      case Kr.ABORTED:
      case Kr.OUT_OF_RANGE:
      case Kr.UNIMPLEMENTED:
      case Kr.DATA_LOSS:
        return !0;
      default:
        return $r();
    }
  }
  function fs(t) {
    if (void 0 === t) return (Zr("GRPC error has no .code"), Kr.UNKNOWN);
    switch (t) {
      case ss.OK:
        return Kr.OK;
      case ss.CANCELLED:
        return Kr.CANCELLED;
      case ss.UNKNOWN:
        return Kr.UNKNOWN;
      case ss.DEADLINE_EXCEEDED:
        return Kr.DEADLINE_EXCEEDED;
      case ss.RESOURCE_EXHAUSTED:
        return Kr.RESOURCE_EXHAUSTED;
      case ss.INTERNAL:
        return Kr.INTERNAL;
      case ss.UNAVAILABLE:
        return Kr.UNAVAILABLE;
      case ss.UNAUTHENTICATED:
        return Kr.UNAUTHENTICATED;
      case ss.INVALID_ARGUMENT:
        return Kr.INVALID_ARGUMENT;
      case ss.NOT_FOUND:
        return Kr.NOT_FOUND;
      case ss.ALREADY_EXISTS:
        return Kr.ALREADY_EXISTS;
      case ss.PERMISSION_DENIED:
        return Kr.PERMISSION_DENIED;
      case ss.FAILED_PRECONDITION:
        return Kr.FAILED_PRECONDITION;
      case ss.ABORTED:
        return Kr.ABORTED;
      case ss.OUT_OF_RANGE:
        return Kr.OUT_OF_RANGE;
      case ss.UNIMPLEMENTED:
        return Kr.UNIMPLEMENTED;
      case ss.DATA_LOSS:
        return Kr.DATA_LOSS;
      default:
        return $r();
    }
  }
  (((as = ss || (ss = {}))[(as.OK = 0)] = "OK"),
    (as[(as.CANCELLED = 1)] = "CANCELLED"),
    (as[(as.UNKNOWN = 2)] = "UNKNOWN"),
    (as[(as.INVALID_ARGUMENT = 3)] = "INVALID_ARGUMENT"),
    (as[(as.DEADLINE_EXCEEDED = 4)] = "DEADLINE_EXCEEDED"),
    (as[(as.NOT_FOUND = 5)] = "NOT_FOUND"),
    (as[(as.ALREADY_EXISTS = 6)] = "ALREADY_EXISTS"),
    (as[(as.PERMISSION_DENIED = 7)] = "PERMISSION_DENIED"),
    (as[(as.UNAUTHENTICATED = 16)] = "UNAUTHENTICATED"),
    (as[(as.RESOURCE_EXHAUSTED = 8)] = "RESOURCE_EXHAUSTED"),
    (as[(as.FAILED_PRECONDITION = 9)] = "FAILED_PRECONDITION"),
    (as[(as.ABORTED = 10)] = "ABORTED"),
    (as[(as.OUT_OF_RANGE = 11)] = "OUT_OF_RANGE"),
    (as[(as.UNIMPLEMENTED = 12)] = "UNIMPLEMENTED"),
    (as[(as.INTERNAL = 13)] = "INTERNAL"),
    (as[(as.UNAVAILABLE = 14)] = "UNAVAILABLE"),
    (as[(as.DATA_LOSS = 15)] = "DATA_LOSS"));
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  var ps = (function () {
      function t(t, e) {
        ((this.comparator = t), (this.root = e || vs.EMPTY));
      }
      return (
        (t.prototype.insert = function (e, n) {
          return new t(
            this.comparator,
            this.root
              .insert(e, n, this.comparator)
              .copy(null, null, vs.BLACK, null, null),
          );
        }),
        (t.prototype.remove = function (e) {
          return new t(
            this.comparator,
            this.root
              .remove(e, this.comparator)
              .copy(null, null, vs.BLACK, null, null),
          );
        }),
        (t.prototype.get = function (t) {
          for (var e = this.root; !e.isEmpty(); ) {
            var n = this.comparator(t, e.key);
            if (0 === n) return e.value;
            n < 0 ? (e = e.left) : n > 0 && (e = e.right);
          }
          return null;
        }),
        (t.prototype.indexOf = function (t) {
          for (var e = 0, n = this.root; !n.isEmpty(); ) {
            var r = this.comparator(t, n.key);
            if (0 === r) return e + n.left.size;
            r < 0 ? (n = n.left) : ((e += n.left.size + 1), (n = n.right));
          }
          return -1;
        }),
        (t.prototype.isEmpty = function () {
          return this.root.isEmpty();
        }),
        Object.defineProperty(t.prototype, "size", {
          get: function () {
            return this.root.size;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.minKey = function () {
          return this.root.minKey();
        }),
        (t.prototype.maxKey = function () {
          return this.root.maxKey();
        }),
        (t.prototype.inorderTraversal = function (t) {
          return this.root.inorderTraversal(t);
        }),
        (t.prototype.forEach = function (t) {
          this.inorderTraversal(function (e, n) {
            return (t(e, n), !1);
          });
        }),
        (t.prototype.toString = function () {
          var t = [];
          return (
            this.inorderTraversal(function (e, n) {
              return (t.push(e + ":" + n), !1);
            }),
            "{" + t.join(", ") + "}"
          );
        }),
        (t.prototype.reverseTraversal = function (t) {
          return this.root.reverseTraversal(t);
        }),
        (t.prototype.getIterator = function () {
          return new ds(this.root, null, this.comparator, !1);
        }),
        (t.prototype.getIteratorFrom = function (t) {
          return new ds(this.root, t, this.comparator, !1);
        }),
        (t.prototype.getReverseIterator = function () {
          return new ds(this.root, null, this.comparator, !0);
        }),
        (t.prototype.getReverseIteratorFrom = function (t) {
          return new ds(this.root, t, this.comparator, !0);
        }),
        t
      );
    })(),
    ds = (function () {
      function t(t, e, n, r) {
        ((this.isReverse = r), (this.nodeStack = []));
        for (var i = 1; !t.isEmpty(); )
          if (((i = e ? n(t.key, e) : 1), r && (i *= -1), i < 0))
            t = this.isReverse ? t.left : t.right;
          else {
            if (0 === i) {
              this.nodeStack.push(t);
              break;
            }
            (this.nodeStack.push(t), (t = this.isReverse ? t.right : t.left));
          }
      }
      return (
        (t.prototype.getNext = function () {
          var t = this.nodeStack.pop(),
            e = { key: t.key, value: t.value };
          if (this.isReverse)
            for (t = t.left; !t.isEmpty(); )
              (this.nodeStack.push(t), (t = t.right));
          else
            for (t = t.right; !t.isEmpty(); )
              (this.nodeStack.push(t), (t = t.left));
          return e;
        }),
        (t.prototype.hasNext = function () {
          return this.nodeStack.length > 0;
        }),
        (t.prototype.peek = function () {
          if (0 === this.nodeStack.length) return null;
          var t = this.nodeStack[this.nodeStack.length - 1];
          return { key: t.key, value: t.value };
        }),
        t
      );
    })(),
    vs = (function () {
      function t(e, n, r, i, o) {
        ((this.key = e),
          (this.value = n),
          (this.color = null != r ? r : t.RED),
          (this.left = null != i ? i : t.EMPTY),
          (this.right = null != o ? o : t.EMPTY),
          (this.size = this.left.size + 1 + this.right.size));
      }
      return (
        (t.prototype.copy = function (e, n, r, i, o) {
          return new t(
            null != e ? e : this.key,
            null != n ? n : this.value,
            null != r ? r : this.color,
            null != i ? i : this.left,
            null != o ? o : this.right,
          );
        }),
        (t.prototype.isEmpty = function () {
          return !1;
        }),
        (t.prototype.inorderTraversal = function (t) {
          return (
            this.left.inorderTraversal(t) ||
            t(this.key, this.value) ||
            this.right.inorderTraversal(t)
          );
        }),
        (t.prototype.reverseTraversal = function (t) {
          return (
            this.right.reverseTraversal(t) ||
            t(this.key, this.value) ||
            this.left.reverseTraversal(t)
          );
        }),
        (t.prototype.min = function () {
          return this.left.isEmpty() ? this : this.left.min();
        }),
        (t.prototype.minKey = function () {
          return this.min().key;
        }),
        (t.prototype.maxKey = function () {
          return this.right.isEmpty() ? this.key : this.right.maxKey();
        }),
        (t.prototype.insert = function (t, e, n) {
          var r = this,
            i = n(t, r.key);
          return (r =
            i < 0
              ? r.copy(null, null, null, r.left.insert(t, e, n), null)
              : 0 === i
                ? r.copy(null, e, null, null, null)
                : r.copy(
                    null,
                    null,
                    null,
                    null,
                    r.right.insert(t, e, n),
                  )).fixUp();
        }),
        (t.prototype.removeMin = function () {
          if (this.left.isEmpty()) return t.EMPTY;
          var e = this;
          return (
            e.left.isRed() || e.left.left.isRed() || (e = e.moveRedLeft()),
            (e = e.copy(null, null, null, e.left.removeMin(), null)).fixUp()
          );
        }),
        (t.prototype.remove = function (e, n) {
          var r,
            i = this;
          if (n(e, i.key) < 0)
            (i.left.isEmpty() ||
              i.left.isRed() ||
              i.left.left.isRed() ||
              (i = i.moveRedLeft()),
              (i = i.copy(null, null, null, i.left.remove(e, n), null)));
          else {
            if (
              (i.left.isRed() && (i = i.rotateRight()),
              i.right.isEmpty() ||
                i.right.isRed() ||
                i.right.left.isRed() ||
                (i = i.moveRedRight()),
              0 === n(e, i.key))
            ) {
              if (i.right.isEmpty()) return t.EMPTY;
              ((r = i.right.min()),
                (i = i.copy(r.key, r.value, null, null, i.right.removeMin())));
            }
            i = i.copy(null, null, null, null, i.right.remove(e, n));
          }
          return i.fixUp();
        }),
        (t.prototype.isRed = function () {
          return this.color;
        }),
        (t.prototype.fixUp = function () {
          var t = this;
          return (
            t.right.isRed() && !t.left.isRed() && (t = t.rotateLeft()),
            t.left.isRed() && t.left.left.isRed() && (t = t.rotateRight()),
            t.left.isRed() && t.right.isRed() && (t = t.colorFlip()),
            t
          );
        }),
        (t.prototype.moveRedLeft = function () {
          var t = this.colorFlip();
          return (
            t.right.left.isRed() &&
              (t = (t = (t = t.copy(
                null,
                null,
                null,
                null,
                t.right.rotateRight(),
              )).rotateLeft()).colorFlip()),
            t
          );
        }),
        (t.prototype.moveRedRight = function () {
          var t = this.colorFlip();
          return (
            t.left.left.isRed() && (t = (t = t.rotateRight()).colorFlip()),
            t
          );
        }),
        (t.prototype.rotateLeft = function () {
          var e = this.copy(null, null, t.RED, null, this.right.left);
          return this.right.copy(null, null, this.color, e, null);
        }),
        (t.prototype.rotateRight = function () {
          var e = this.copy(null, null, t.RED, this.left.right, null);
          return this.left.copy(null, null, this.color, null, e);
        }),
        (t.prototype.colorFlip = function () {
          var t = this.left.copy(null, null, !this.left.color, null, null),
            e = this.right.copy(null, null, !this.right.color, null, null);
          return this.copy(null, null, !this.color, t, e);
        }),
        (t.prototype.checkMaxDepth = function () {
          var t = this.check();
          return Math.pow(2, t) <= this.size + 1;
        }),
        (t.prototype.check = function () {
          if (this.isRed() && this.left.isRed()) throw $r();
          if (this.right.isRed()) throw $r();
          var t = this.left.check();
          if (t !== this.right.check()) throw $r();
          return t + (this.isRed() ? 0 : 1);
        }),
        t
      );
    })();
  ((vs.EMPTY = null),
    (vs.RED = !0),
    (vs.BLACK = !1),
    (vs.EMPTY = new ((function () {
      function t() {
        this.size = 0;
      }
      return (
        Object.defineProperty(t.prototype, "key", {
          get: function () {
            throw $r();
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "value", {
          get: function () {
            throw $r();
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "color", {
          get: function () {
            throw $r();
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "left", {
          get: function () {
            throw $r();
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "right", {
          get: function () {
            throw $r();
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.copy = function (t, e, n, r, i) {
          return this;
        }),
        (t.prototype.insert = function (t, e, n) {
          return new vs(t, e);
        }),
        (t.prototype.remove = function (t, e) {
          return this;
        }),
        (t.prototype.isEmpty = function () {
          return !0;
        }),
        (t.prototype.inorderTraversal = function (t) {
          return !1;
        }),
        (t.prototype.reverseTraversal = function (t) {
          return !1;
        }),
        (t.prototype.minKey = function () {
          return null;
        }),
        (t.prototype.maxKey = function () {
          return null;
        }),
        (t.prototype.isRed = function () {
          return !1;
        }),
        (t.prototype.checkMaxDepth = function () {
          return !0;
        }),
        (t.prototype.check = function () {
          return 0;
        }),
        t
      );
    })())()));
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  var gs = (function () {
      function t(t) {
        ((this.comparator = t), (this.data = new ps(this.comparator)));
      }
      return (
        (t.prototype.has = function (t) {
          return null !== this.data.get(t);
        }),
        (t.prototype.first = function () {
          return this.data.minKey();
        }),
        (t.prototype.last = function () {
          return this.data.maxKey();
        }),
        Object.defineProperty(t.prototype, "size", {
          get: function () {
            return this.data.size;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.indexOf = function (t) {
          return this.data.indexOf(t);
        }),
        (t.prototype.forEach = function (t) {
          this.data.inorderTraversal(function (e, n) {
            return (t(e), !1);
          });
        }),
        (t.prototype.forEachInRange = function (t, e) {
          for (var n = this.data.getIteratorFrom(t[0]); n.hasNext(); ) {
            var r = n.getNext();
            if (this.comparator(r.key, t[1]) >= 0) return;
            e(r.key);
          }
        }),
        (t.prototype.forEachWhile = function (t, e) {
          var n;
          for (
            n =
              void 0 !== e
                ? this.data.getIteratorFrom(e)
                : this.data.getIterator();
            n.hasNext();
          )
            if (!t(n.getNext().key)) return;
        }),
        (t.prototype.firstAfterOrEqual = function (t) {
          var e = this.data.getIteratorFrom(t);
          return e.hasNext() ? e.getNext().key : null;
        }),
        (t.prototype.getIterator = function () {
          return new ys(this.data.getIterator());
        }),
        (t.prototype.getIteratorFrom = function (t) {
          return new ys(this.data.getIteratorFrom(t));
        }),
        (t.prototype.add = function (t) {
          return this.copy(this.data.remove(t).insert(t, !0));
        }),
        (t.prototype.delete = function (t) {
          return this.has(t) ? this.copy(this.data.remove(t)) : this;
        }),
        (t.prototype.isEmpty = function () {
          return this.data.isEmpty();
        }),
        (t.prototype.unionWith = function (t) {
          var e = this;
          return (
            e.size < t.size && ((e = t), (t = this)),
            t.forEach(function (t) {
              e = e.add(t);
            }),
            e
          );
        }),
        (t.prototype.isEqual = function (e) {
          if (!(e instanceof t)) return !1;
          if (this.size !== e.size) return !1;
          for (
            var n = this.data.getIterator(), r = e.data.getIterator();
            n.hasNext();
          ) {
            var i = n.getNext().key,
              o = r.getNext().key;
            if (0 !== this.comparator(i, o)) return !1;
          }
          return !0;
        }),
        (t.prototype.toArray = function () {
          var t = [];
          return (
            this.forEach(function (e) {
              t.push(e);
            }),
            t
          );
        }),
        (t.prototype.toString = function () {
          var t = [];
          return (
            this.forEach(function (e) {
              return t.push(e);
            }),
            "SortedSet(" + t.toString() + ")"
          );
        }),
        (t.prototype.copy = function (e) {
          var n = new t(this.comparator);
          return ((n.data = e), n);
        }),
        t
      );
    })(),
    ys = (function () {
      function t(t) {
        this.iter = t;
      }
      return (
        (t.prototype.getNext = function () {
          return this.iter.getNext().key;
        }),
        (t.prototype.hasNext = function () {
          return this.iter.hasNext();
        }),
        t
      );
    })(),
    ms = new ps(Ni.comparator);
  function bs() {
    return ms;
  }
  var ws = new ps(Ni.comparator);
  function _s() {
    return ws;
  }
  var Ts = new ps(Ni.comparator);
  function Es() {
    return Ts;
  }
  var Is = new gs(Ni.comparator);
  function Ss() {
    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
    for (var n = Is, r = 0, i = t; r < i.length; r++) {
      var o = i[r];
      n = n.add(o);
    }
    return n;
  }
  var As = new gs(ii);
  function ks() {
    return As;
  }
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ var Ns = (function () {
      function t(t, e, n, r, i) {
        ((this.snapshotVersion = t),
          (this.targetChanges = e),
          (this.targetMismatches = n),
          (this.documentUpdates = r),
          (this.resolvedLimboDocuments = i));
      }
      return (
        (t.createSynthesizedRemoteEventForCurrentChange = function (e, n) {
          var r = new Map();
          return (
            r.set(e, Rs.createSynthesizedTargetChangeForCurrentChange(e, n)),
            new t(ui.min(), r, ks(), bs(), Ss())
          );
        }),
        t
      );
    })(),
    Rs = (function () {
      function t(t, e, n, r, i) {
        ((this.resumeToken = t),
          (this.current = e),
          (this.addedDocuments = n),
          (this.modifiedDocuments = r),
          (this.removedDocuments = i));
      }
      return (
        (t.createSynthesizedTargetChangeForCurrentChange = function (e, n) {
          return new t(yi.EMPTY_BYTE_STRING, n, Ss(), Ss(), Ss());
        }),
        t
      );
    })(),
    Ds = function (t, e, n, r) {
      ((this.v = t), (this.removedTargetIds = e), (this.key = n), (this.P = r));
    },
    Cs = function (t, e) {
      ((this.targetId = t), (this.V = e));
    },
    Os = function (t, e, n, r) {
      (void 0 === n && (n = yi.EMPTY_BYTE_STRING),
        void 0 === r && (r = null),
        (this.state = t),
        (this.targetIds = e),
        (this.resumeToken = n),
        (this.cause = r));
    },
    xs = (function () {
      function t() {
        ((this.S = 0),
          (this.D = Ms()),
          (this.C = yi.EMPTY_BYTE_STRING),
          (this.N = !1),
          (this.k = !0));
      }
      return (
        Object.defineProperty(t.prototype, "current", {
          get: function () {
            return this.N;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "resumeToken", {
          get: function () {
            return this.C;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "F", {
          get: function () {
            return 0 !== this.S;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "$", {
          get: function () {
            return this.k;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.O = function (t) {
          t.approximateByteSize() > 0 && ((this.k = !0), (this.C = t));
        }),
        (t.prototype.M = function () {
          var t = Ss(),
            e = Ss(),
            n = Ss();
          return (
            this.D.forEach(function (r, i) {
              switch (i) {
                case 0:
                  t = t.add(r);
                  break;
                case 2:
                  e = e.add(r);
                  break;
                case 1:
                  n = n.add(r);
                  break;
                default:
                  $r();
              }
            }),
            new Rs(this.C, this.N, t, e, n)
          );
        }),
        (t.prototype.L = function () {
          ((this.k = !1), (this.D = Ms()));
        }),
        (t.prototype.B = function (t, e) {
          ((this.k = !0), (this.D = this.D.insert(t, e)));
        }),
        (t.prototype.q = function (t) {
          ((this.k = !0), (this.D = this.D.remove(t)));
        }),
        (t.prototype.U = function () {
          this.S += 1;
        }),
        (t.prototype.K = function () {
          this.S -= 1;
        }),
        (t.prototype.j = function () {
          ((this.k = !0), (this.N = !0));
        }),
        t
      );
    })(),
    Ps = (function () {
      function t(t) {
        ((this.W = t),
          (this.G = new Map()),
          (this.H = bs()),
          (this.J = Ls()),
          (this.Y = new gs(ii)));
      }
      return (
        (t.prototype.X = function (t) {
          for (var e = 0, n = t.v; e < n.length; e++) {
            var r = n[e];
            t.P && t.P.isFoundDocument()
              ? this.Z(r, t.P)
              : this.tt(r, t.key, t.P);
          }
          for (var i = 0, o = t.removedTargetIds; i < o.length; i++)
            ((r = o[i]), this.tt(r, t.key, t.P));
        }),
        (t.prototype.et = function (t) {
          var e = this;
          this.forEachTarget(t, function (n) {
            var r = e.nt(n);
            switch (t.state) {
              case 0:
                e.st(n) && r.O(t.resumeToken);
                break;
              case 1:
                (r.K(), r.F || r.L(), r.O(t.resumeToken));
                break;
              case 2:
                (r.K(), r.F || e.removeTarget(n));
                break;
              case 3:
                e.st(n) && (r.j(), r.O(t.resumeToken));
                break;
              case 4:
                e.st(n) && (e.it(n), r.O(t.resumeToken));
                break;
              default:
                $r();
            }
          });
        }),
        (t.prototype.forEachTarget = function (t, e) {
          var n = this;
          t.targetIds.length > 0
            ? t.targetIds.forEach(e)
            : this.G.forEach(function (t, r) {
                n.st(r) && e(r);
              });
        }),
        (t.prototype.rt = function (t) {
          var e = t.targetId,
            n = t.V.count,
            r = this.ot(e);
          if (r) {
            var i = r.target;
            if (Zi(i))
              if (0 === n) {
                var o = new Ni(i.path);
                this.tt(e, o, Ki.newNoDocument(o, ui.min()));
              } else ti(1 === n);
            else this.ct(e) !== n && (this.it(e), (this.Y = this.Y.add(e)));
          }
        }),
        (t.prototype.ut = function (t) {
          var e = this,
            n = new Map();
          this.G.forEach(function (r, i) {
            var o = e.ot(i);
            if (o) {
              if (r.current && Zi(o.target)) {
                var s = new Ni(o.target.path);
                null !== e.H.get(s) ||
                  e.at(i, s) ||
                  e.tt(i, s, Ki.newNoDocument(s, t));
              }
              r.$ && (n.set(i, r.M()), r.L());
            }
          });
          var r = Ss();
          this.J.forEach(function (t, n) {
            var i = !0;
            (n.forEachWhile(function (t) {
              var n = e.ot(t);
              return !n || 2 === n.purpose || ((i = !1), !1);
            }),
              i && (r = r.add(t)));
          });
          var i = new Ns(t, n, this.Y, this.H, r);
          return ((this.H = bs()), (this.J = Ls()), (this.Y = new gs(ii)), i);
        }),
        (t.prototype.Z = function (t, e) {
          if (this.st(t)) {
            var n = this.at(t, e.key) ? 2 : 0;
            (this.nt(t).B(e.key, n),
              (this.H = this.H.insert(e.key, e)),
              (this.J = this.J.insert(e.key, this.ht(e.key).add(t))));
          }
        }),
        (t.prototype.tt = function (t, e, n) {
          if (this.st(t)) {
            var r = this.nt(t);
            (this.at(t, e) ? r.B(e, 1) : r.q(e),
              (this.J = this.J.insert(e, this.ht(e).delete(t))),
              n && (this.H = this.H.insert(e, n)));
          }
        }),
        (t.prototype.removeTarget = function (t) {
          this.G.delete(t);
        }),
        (t.prototype.ct = function (t) {
          var e = this.nt(t).M();
          return (
            this.W.getRemoteKeysForTarget(t).size +
            e.addedDocuments.size -
            e.removedDocuments.size
          );
        }),
        (t.prototype.U = function (t) {
          this.nt(t).U();
        }),
        (t.prototype.nt = function (t) {
          var e = this.G.get(t);
          return (e || ((e = new xs()), this.G.set(t, e)), e);
        }),
        (t.prototype.ht = function (t) {
          var e = this.J.get(t);
          return (e || ((e = new gs(ii)), (this.J = this.J.insert(t, e))), e);
        }),
        (t.prototype.st = function (t) {
          var e = null !== this.ot(t);
          return (
            e || Wr("WatchChangeAggregator", "Detected inactive target", t),
            e
          );
        }),
        (t.prototype.ot = function (t) {
          var e = this.G.get(t);
          return e && e.F ? null : this.W.lt(t);
        }),
        (t.prototype.it = function (t) {
          var e = this;
          (this.G.set(t, new xs()),
            this.W.getRemoteKeysForTarget(t).forEach(function (n) {
              e.tt(t, n, null);
            }));
        }),
        (t.prototype.at = function (t, e) {
          return this.W.getRemoteKeysForTarget(t).has(e);
        }),
        t
      );
    })();
  function Ls() {
    return new ps(Ni.comparator);
  }
  function Ms() {
    return new ps(Ni.comparator);
  }
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ var Fs = { asc: "ASCENDING", desc: "DESCENDING" },
    Us = {
      "<": "LESS_THAN",
      "<=": "LESS_THAN_OR_EQUAL",
      ">": "GREATER_THAN",
      ">=": "GREATER_THAN_OR_EQUAL",
      "==": "EQUAL",
      "!=": "NOT_EQUAL",
      "array-contains": "ARRAY_CONTAINS",
      in: "IN",
      "not-in": "NOT_IN",
      "array-contains-any": "ARRAY_CONTAINS_ANY",
    },
    Vs = function (t, e) {
      ((this.databaseId = t), (this.I = e));
    };
  function qs(t, e) {
    return t.I
      ? new Date(1e3 * e.seconds)
          .toISOString()
          .replace(/\.\d*/, "")
          .replace("Z", "") +
          "." +
          ("000000000" + e.nanoseconds).slice(-9) +
          "Z"
      : { seconds: "" + e.seconds, nanos: e.nanoseconds };
  }
  function js(t, e) {
    return t.I ? e.toBase64() : e.toUint8Array();
  }
  function Bs(t, e) {
    return qs(t, e.toTimestamp());
  }
  function Gs(t) {
    return (
      ti(!!t),
      ui.fromTimestamp(
        (function (t) {
          var e = bi(t);
          return new ai(e.seconds, e.nanos);
        })(t),
      )
    );
  }
  function zs(t, e) {
    return (function (t) {
      return new pi(["projects", t.projectId, "databases", t.database]);
    })(t)
      .child("documents")
      .child(e)
      .canonicalString();
  }
  function Ks(t) {
    var e = pi.fromString(t);
    return (ti(va(e)), e);
  }
  function Hs(t, e) {
    return zs(t.databaseId, e.path);
  }
  function Js(t, e) {
    var n = Ks(e);
    if (n.get(1) !== t.databaseId.projectId)
      throw new Hr(
        Kr.INVALID_ARGUMENT,
        "Tried to deserialize key from different project: " +
          n.get(1) +
          " vs " +
          t.databaseId.projectId,
      );
    if (n.get(3) !== t.databaseId.database)
      throw new Hr(
        Kr.INVALID_ARGUMENT,
        "Tried to deserialize key from different database: " +
          n.get(3) +
          " vs " +
          t.databaseId.database,
      );
    return new Ni(Xs(n));
  }
  function Qs(t, e) {
    return zs(t.databaseId, e);
  }
  function Ws(t) {
    var e = Ks(t);
    return 4 === e.length ? pi.emptyPath() : Xs(e);
  }
  function Zs(t) {
    return new pi([
      "projects",
      t.databaseId.projectId,
      "databases",
      t.databaseId.database,
    ]).canonicalString();
  }
  function Xs(t) {
    return (ti(t.length > 4 && "documents" === t.get(4)), t.popFirst(5));
  }
  function Ys(t, e, n) {
    return { name: Hs(t, e), fields: n.value.mapValue.fields };
  }
  function $s(t, e, n) {
    var r = Js(t, e.name),
      i = Gs(e.updateTime),
      o = new Gi({ mapValue: { fields: e.fields } }),
      s = Ki.newFoundDocument(r, i, o);
    return (
      n && s.setHasCommittedMutations(),
      n ? s.setHasCommittedMutations() : s
    );
  }
  function ta(t, e) {
    var n;
    if (e instanceof es) n = { update: Ys(t, e.key, e.value) };
    else if (e instanceof us) n = { delete: Hs(t, e.key) };
    else if (e instanceof ns)
      n = { update: Ys(t, e.key, e.data), updateMask: da(e.fieldMask) };
    else {
      if (!(e instanceof cs)) return $r();
      n = { verify: Hs(t, e.key) };
    }
    return (
      e.fieldTransforms.length > 0 &&
        (n.updateTransforms = e.fieldTransforms.map(function (t) {
          return (function (t, e) {
            var n = e.transform;
            if (n instanceof Fo)
              return {
                fieldPath: e.field.canonicalString(),
                setToServerValue: "REQUEST_TIME",
              };
            if (n instanceof Uo)
              return {
                fieldPath: e.field.canonicalString(),
                appendMissingElements: { values: n.elements },
              };
            if (n instanceof qo)
              return {
                fieldPath: e.field.canonicalString(),
                removeAllFromArray: { values: n.elements },
              };
            if (n instanceof Bo)
              return { fieldPath: e.field.canonicalString(), increment: n.A };
            throw $r();
          })(0, t);
        })),
      e.precondition.isNone ||
        (n.currentDocument = (function (t, e) {
          return void 0 !== e.updateTime
            ? { updateTime: Bs(t, e.updateTime) }
            : void 0 !== e.exists
              ? { exists: e.exists }
              : $r();
        })(t, e.precondition)),
      n
    );
  }
  function ea(t, e) {
    var n = e.currentDocument
        ? (function (t) {
            return void 0 !== t.updateTime
              ? Jo.updateTime(Gs(t.updateTime))
              : void 0 !== t.exists
                ? Jo.exists(t.exists)
                : Jo.none();
          })(e.currentDocument)
        : Jo.none(),
      r = e.updateTransforms
        ? e.updateTransforms.map(function (e) {
            return (function (t, e) {
              var n = null;
              if ("setToServerValue" in e)
                (ti("REQUEST_TIME" === e.setToServerValue), (n = new Fo()));
              else if ("appendMissingElements" in e) {
                var r = e.appendMissingElements.values || [];
                n = new Uo(r);
              } else if ("removeAllFromArray" in e) {
                var i = e.removeAllFromArray.values || [];
                n = new qo(i);
              } else "increment" in e ? (n = new Bo(t, e.increment)) : $r();
              var o = vi.fromServerFormat(e.fieldPath);
              return new Ko(o, n);
            })(t, e);
          })
        : [];
    if (e.update) {
      e.update.name;
      var i = Js(t, e.update.name),
        o = new Gi({ mapValue: { fields: e.update.fields } });
      if (e.updateMask) {
        var s = (function (t) {
          var e = t.fieldPaths || [];
          return new gi(
            e.map(function (t) {
              return vi.fromServerFormat(t);
            }),
          );
        })(e.updateMask);
        return new ns(i, o, s, n, r);
      }
      return new es(i, o, n, r);
    }
    if (e.delete) {
      var a = Js(t, e.delete);
      return new us(a, n);
    }
    if (e.verify) {
      var u = Js(t, e.verify);
      return new cs(u, n);
    }
    return $r();
  }
  function na(t, e) {
    return { documents: [Qs(t, e.path)] };
  }
  function ra(t, e) {
    var n = { structuredQuery: {} },
      r = e.path;
    null !== e.collectionGroup
      ? ((n.parent = Qs(t, r)),
        (n.structuredQuery.from = [
          { collectionId: e.collectionGroup, allDescendants: !0 },
        ]))
      : ((n.parent = Qs(t, r.popLast())),
        (n.structuredQuery.from = [{ collectionId: r.lastSegment() }]));
    var i = (function (t) {
      if (0 !== t.length) {
        var e = t.map(function (t) {
          return (function (t) {
            if ("==" === t.op) {
              if (qi(t.value))
                return { unaryFilter: { field: ha(t.field), op: "IS_NAN" } };
              if (Vi(t.value))
                return { unaryFilter: { field: ha(t.field), op: "IS_NULL" } };
            } else if ("!=" === t.op) {
              if (qi(t.value))
                return {
                  unaryFilter: { field: ha(t.field), op: "IS_NOT_NAN" },
                };
              if (Vi(t.value))
                return {
                  unaryFilter: { field: ha(t.field), op: "IS_NOT_NULL" },
                };
            }
            return {
              fieldFilter: { field: ha(t.field), op: ca(t.op), value: t.value },
            };
          })(t);
        });
        return 1 === e.length
          ? e[0]
          : { compositeFilter: { op: "AND", filters: e } };
      }
    })(e.filters);
    i && (n.structuredQuery.where = i);
    var o = (function (t) {
      if (0 !== t.length)
        return t.map(function (t) {
          return (function (t) {
            return { field: ha(t.field), direction: ua(t.dir) };
          })(t);
        });
    })(e.orderBy);
    o && (n.structuredQuery.orderBy = o);
    var s = (function (t, e) {
      return t.I || Si(e) ? e : { value: e };
    })(t, e.limit);
    return (
      null !== s && (n.structuredQuery.limit = s),
      e.startAt && (n.structuredQuery.startAt = sa(e.startAt)),
      e.endAt && (n.structuredQuery.endAt = sa(e.endAt)),
      n
    );
  }
  function ia(t) {
    var e = Ws(t.parent),
      n = t.structuredQuery,
      r = n.from ? n.from.length : 0,
      o = null;
    if (r > 0) {
      ti(1 === r);
      var s = n.from[0];
      s.allDescendants ? (o = s.collectionId) : (e = e.child(s.collectionId));
    }
    var a = [];
    n.where && (a = oa(n.where));
    var u = [];
    n.orderBy &&
      (u = n.orderBy.map(function (t) {
        return (function (t) {
          return new uo(
            la(t.field),
            (function (t) {
              switch (t) {
                case "ASCENDING":
                  return "asc";
                case "DESCENDING":
                  return "desc";
                default:
                  return;
              }
            })(t.direction),
          );
        })(t);
      }));
    var c = null;
    n.limit &&
      (c = (function (t) {
        var e;
        return Si((e = "object" == (0, i.Z)(t) ? t.value : t)) ? null : e;
      })(n.limit));
    var h = null;
    n.startAt && (h = aa(n.startAt));
    var l = null;
    return (n.endAt && (l = aa(n.endAt)), po(e, o, u, a, c, "F", h, l));
  }
  function oa(t) {
    return t
      ? void 0 !== t.unaryFilter
        ? [pa(t)]
        : void 0 !== t.fieldFilter
          ? [fa(t)]
          : void 0 !== t.compositeFilter
            ? t.compositeFilter.filters
                .map(function (t) {
                  return oa(t);
                })
                .reduce(function (t, e) {
                  return t.concat(e);
                })
            : $r()
      : [];
  }
  function sa(t) {
    return { before: t.before, values: t.position };
  }
  function aa(t) {
    var e = !!t.before,
      n = t.values || [];
    return new so(n, e);
  }
  function ua(t) {
    return Fs[t];
  }
  function ca(t) {
    return Us[t];
  }
  function ha(t) {
    return { fieldPath: t.canonicalString() };
  }
  function la(t) {
    return vi.fromServerFormat(t.fieldPath);
  }
  function fa(t) {
    return Xi.create(
      la(t.fieldFilter.field),
      (function (t) {
        switch (t) {
          case "EQUAL":
            return "==";
          case "NOT_EQUAL":
            return "!=";
          case "GREATER_THAN":
            return ">";
          case "GREATER_THAN_OR_EQUAL":
            return ">=";
          case "LESS_THAN":
            return "<";
          case "LESS_THAN_OR_EQUAL":
            return "<=";
          case "ARRAY_CONTAINS":
            return "array-contains";
          case "IN":
            return "in";
          case "NOT_IN":
            return "not-in";
          case "ARRAY_CONTAINS_ANY":
            return "array-contains-any";
          case "OPERATOR_UNSPECIFIED":
          default:
            return $r();
        }
      })(t.fieldFilter.op),
      t.fieldFilter.value,
    );
  }
  function pa(t) {
    switch (t.unaryFilter.op) {
      case "IS_NAN":
        var e = la(t.unaryFilter.field);
        return Xi.create(e, "==", { doubleValue: NaN });
      case "IS_NULL":
        var n = la(t.unaryFilter.field);
        return Xi.create(n, "==", { nullValue: "NULL_VALUE" });
      case "IS_NOT_NAN":
        var r = la(t.unaryFilter.field);
        return Xi.create(r, "!=", { doubleValue: NaN });
      case "IS_NOT_NULL":
        var i = la(t.unaryFilter.field);
        return Xi.create(i, "!=", { nullValue: "NULL_VALUE" });
      case "OPERATOR_UNSPECIFIED":
      default:
        return $r();
    }
  }
  function da(t) {
    var e = [];
    return (
      t.fields.forEach(function (t) {
        return e.push(t.canonicalString());
      }),
      { fieldPaths: e }
    );
  }
  function va(t) {
    return t.length >= 4 && "projects" === t.get(0) && "databases" === t.get(2);
  }
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ function ga(t) {
    for (var e = "", n = 0; n < t.length; n++)
      (e.length > 0 && (e = ma(e)), (e = ya(t.get(n), e)));
    return ma(e);
  }
  function ya(t, e) {
    for (var n = e, r = t.length, i = 0; i < r; i++) {
      var o = t.charAt(i);
      switch (o) {
        case "\0":
          n += "";
          break;
        case "":
          n += "";
          break;
        default:
          n += o;
      }
    }
    return n;
  }
  function ma(t) {
    return t + "";
  }
  function ba(t) {
    var e = t.length;
    if ((ti(e >= 2), 2 === e))
      return (ti("" === t.charAt(0) && "" === t.charAt(1)), pi.emptyPath());
    for (var n = e - 2, r = [], i = "", o = 0; o < e; ) {
      var s = t.indexOf("", o);
      switch (((s < 0 || s > n) && $r(), t.charAt(s + 1))) {
        case "":
          var a = t.substring(o, s),
            u = void 0;
          (0 === i.length ? (u = a) : ((u = i += a), (i = "")), r.push(u));
          break;
        case "":
          ((i += t.substring(o, s)), (i += "\0"));
          break;
        case "":
          i += t.substring(o, s + 1);
          break;
        default:
          $r();
      }
      o = s + 2;
    }
    return new pi(r);
  }
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ var wa = function (t, e) {
      ((this.seconds = t), (this.nanoseconds = e));
    },
    _a = function (t, e, n) {
      ((this.ownerId = t),
        (this.allowTabSynchronization = e),
        (this.leaseTimestampMs = n));
    };
  ((_a.store = "owner"), (_a.key = "owner"));
  var Ta = function (t, e, n) {
    ((this.userId = t),
      (this.lastAcknowledgedBatchId = e),
      (this.lastStreamToken = n));
  };
  ((Ta.store = "mutationQueues"), (Ta.keyPath = "userId"));
  var Ea = function (t, e, n, r, i) {
    ((this.userId = t),
      (this.batchId = e),
      (this.localWriteTimeMs = n),
      (this.baseMutations = r),
      (this.mutations = i));
  };
  ((Ea.store = "mutations"),
    (Ea.keyPath = "batchId"),
    (Ea.userMutationsIndex = "userMutationsIndex"),
    (Ea.userMutationsKeyPath = ["userId", "batchId"]));
  var Ia = (function () {
    function t() {}
    return (
      (t.prefixForUser = function (t) {
        return [t];
      }),
      (t.prefixForPath = function (t, e) {
        return [t, ga(e)];
      }),
      (t.key = function (t, e, n) {
        return [t, ga(e), n];
      }),
      t
    );
  })();
  ((Ia.store = "documentMutations"), (Ia.PLACEHOLDER = new Ia()));
  var Sa = function (t, e) {
      ((this.path = t), (this.readTime = e));
    },
    Aa = function (t, e) {
      ((this.path = t), (this.version = e));
    },
    ka = function (t, e, n, r, i, o) {
      ((this.unknownDocument = t),
        (this.noDocument = e),
        (this.document = n),
        (this.hasCommittedMutations = r),
        (this.readTime = i),
        (this.parentPath = o));
    };
  ((ka.store = "remoteDocuments"),
    (ka.readTimeIndex = "readTimeIndex"),
    (ka.readTimeIndexPath = "readTime"),
    (ka.collectionReadTimeIndex = "collectionReadTimeIndex"),
    (ka.collectionReadTimeIndexPath = ["parentPath", "readTime"]));
  var Na = function (t) {
    this.byteSize = t;
  };
  ((Na.store = "remoteDocumentGlobal"), (Na.key = "remoteDocumentGlobalKey"));
  var Ra = function (t, e, n, r, i, o, s) {
    ((this.targetId = t),
      (this.canonicalId = e),
      (this.readTime = n),
      (this.resumeToken = r),
      (this.lastListenSequenceNumber = i),
      (this.lastLimboFreeSnapshotVersion = o),
      (this.query = s));
  };
  ((Ra.store = "targets"),
    (Ra.keyPath = "targetId"),
    (Ra.queryTargetsIndexName = "queryTargetsIndex"),
    (Ra.queryTargetsKeyPath = ["canonicalId", "targetId"]));
  var Da = function (t, e, n) {
    ((this.targetId = t), (this.path = e), (this.sequenceNumber = n));
  };
  ((Da.store = "targetDocuments"),
    (Da.keyPath = ["targetId", "path"]),
    (Da.documentTargetsIndex = "documentTargetsIndex"),
    (Da.documentTargetsKeyPath = ["path", "targetId"]));
  var Ca = function (t, e, n, r) {
    ((this.highestTargetId = t),
      (this.highestListenSequenceNumber = e),
      (this.lastRemoteSnapshotVersion = n),
      (this.targetCount = r));
  };
  ((Ca.key = "targetGlobalKey"), (Ca.store = "targetGlobal"));
  var Oa = function (t, e) {
    ((this.collectionId = t), (this.parent = e));
  };
  ((Oa.store = "collectionParents"), (Oa.keyPath = ["collectionId", "parent"]));
  var xa = function (t, e, n, r) {
    ((this.clientId = t),
      (this.updateTimeMs = e),
      (this.networkEnabled = n),
      (this.inForeground = r));
  };
  ((xa.store = "clientMetadata"), (xa.keyPath = "clientId"));
  var Pa = function (t, e, n) {
    ((this.bundleId = t), (this.createTime = e), (this.version = n));
  };
  ((Pa.store = "bundles"), (Pa.keyPath = "bundleId"));
  var La = function (t, e, n) {
    ((this.name = t), (this.readTime = e), (this.bundledQuery = n));
  };
  ((La.store = "namedQueries"), (La.keyPath = "name"));
  var Ma = (0, o.ev)(
      (0, o.ev)(
        [],
        (0, o.ev)(
          (0, o.ev)(
            [],
            (0, o.ev)(
              (0, o.ev)(
                [],
                (0, o.ev)(
                  (0, o.ev)(
                    [],
                    [
                      Ta.store,
                      Ea.store,
                      Ia.store,
                      ka.store,
                      Ra.store,
                      _a.store,
                      Ca.store,
                      Da.store,
                    ],
                  ),
                  [xa.store],
                ),
              ),
              [Na.store],
            ),
          ),
          [Oa.store],
        ),
      ),
      [Pa.store, La.store],
    ),
    Fa =
      "The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.",
    Ua = (function () {
      function t() {
        this.onCommittedListeners = [];
      }
      return (
        (t.prototype.addOnCommittedListener = function (t) {
          this.onCommittedListeners.push(t);
        }),
        (t.prototype.raiseOnCommittedEvent = function () {
          this.onCommittedListeners.forEach(function (t) {
            return t();
          });
        }),
        t
      );
    })(),
    Va = function () {
      var t = this;
      this.promise = new Promise(function (e, n) {
        ((t.resolve = e), (t.reject = n));
      });
    },
    qa = (function () {
      function t(t) {
        var e = this;
        ((this.nextCallback = null),
          (this.catchCallback = null),
          (this.result = void 0),
          (this.error = void 0),
          (this.isDone = !1),
          (this.callbackAttached = !1),
          t(
            function (t) {
              ((e.isDone = !0),
                (e.result = t),
                e.nextCallback && e.nextCallback(t));
            },
            function (t) {
              ((e.isDone = !0),
                (e.error = t),
                e.catchCallback && e.catchCallback(t));
            },
          ));
      }
      return (
        (t.prototype.catch = function (t) {
          return this.next(void 0, t);
        }),
        (t.prototype.next = function (e, n) {
          var r = this;
          return (
            this.callbackAttached && $r(),
            (this.callbackAttached = !0),
            this.isDone
              ? this.error
                ? this.wrapFailure(n, this.error)
                : this.wrapSuccess(e, this.result)
              : new t(function (t, i) {
                  ((r.nextCallback = function (n) {
                    r.wrapSuccess(e, n).next(t, i);
                  }),
                    (r.catchCallback = function (e) {
                      r.wrapFailure(n, e).next(t, i);
                    }));
                })
          );
        }),
        (t.prototype.toPromise = function () {
          var t = this;
          return new Promise(function (e, n) {
            t.next(e, n);
          });
        }),
        (t.prototype.wrapUserFunction = function (e) {
          try {
            var n = e();
            return n instanceof t ? n : t.resolve(n);
          } catch (e) {
            return t.reject(e);
          }
        }),
        (t.prototype.wrapSuccess = function (e, n) {
          return e
            ? this.wrapUserFunction(function () {
                return e(n);
              })
            : t.resolve(n);
        }),
        (t.prototype.wrapFailure = function (e, n) {
          return e
            ? this.wrapUserFunction(function () {
                return e(n);
              })
            : t.reject(n);
        }),
        (t.resolve = function (e) {
          return new t(function (t, n) {
            t(e);
          });
        }),
        (t.reject = function (e) {
          return new t(function (t, n) {
            n(e);
          });
        }),
        (t.waitFor = function (e) {
          return new t(function (t, n) {
            var r = 0,
              i = 0,
              o = !1;
            (e.forEach(function (e) {
              (++r,
                e.next(
                  function () {
                    (++i, o && i === r && t());
                  },
                  function (t) {
                    return n(t);
                  },
                ));
            }),
              (o = !0),
              i === r && t());
          });
        }),
        (t.or = function (e) {
          for (
            var n = t.resolve(!1),
              r = function (e) {
                n = n.next(function (n) {
                  return n ? t.resolve(n) : e();
                });
              },
              i = 0,
              o = e;
            i < o.length;
            i++
          )
            r(o[i]);
          return n;
        }),
        (t.forEach = function (t, e) {
          var n = this,
            r = [];
          return (
            t.forEach(function (t, i) {
              r.push(e.call(n, t, i));
            }),
            this.waitFor(r)
          );
        }),
        t
      );
    })(),
    ja = (function () {
      function t(t, e) {
        var n = this;
        ((this.action = t),
          (this.transaction = e),
          (this.aborted = !1),
          (this.ft = new Va()),
          (this.transaction.oncomplete = function () {
            n.ft.resolve();
          }),
          (this.transaction.onabort = function () {
            e.error ? n.ft.reject(new za(t, e.error)) : n.ft.resolve();
          }),
          (this.transaction.onerror = function (e) {
            var r = Wa(e.target.error);
            n.ft.reject(new za(t, r));
          }));
      }
      return (
        (t.open = function (e, n, r, i) {
          try {
            return new t(n, e.transaction(i, r));
          } catch (e) {
            throw new za(n, e);
          }
        }),
        Object.defineProperty(t.prototype, "dt", {
          get: function () {
            return this.ft.promise;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.abort = function (t) {
          (t && this.ft.reject(t),
            this.aborted ||
              (Wr(
                "SimpleDb",
                "Aborting transaction:",
                t ? t.message : "Client-initiated abort",
              ),
              (this.aborted = !0),
              this.transaction.abort()));
        }),
        (t.prototype.store = function (t) {
          var e = this.transaction.objectStore(t);
          return new Ha(e);
        }),
        t
      );
    })(),
    Ba = (function () {
      function t(e, n, r) {
        ((this.name = e),
          (this.version = n),
          (this.wt = r),
          12.2 === t._t((0, s.z$)()) &&
            Zr(
              "Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.",
            ));
      }
      return (
        (t.delete = function (t) {
          return (
            Wr("SimpleDb", "Removing database:", t),
            Ja(window.indexedDB.deleteDatabase(t)).toPromise()
          );
        }),
        (t.yt = function () {
          if ("undefined" == typeof indexedDB) return !1;
          if (t.gt()) return !0;
          var e = (0, s.z$)(),
            n = t._t(e),
            r = 0 < n && n < 10,
            i = t.Et(e),
            o = 0 < i && i < 4.5;
          return !(
            e.indexOf("MSIE ") > 0 ||
            e.indexOf("Trident/") > 0 ||
            e.indexOf("Edge/") > 0 ||
            r ||
            o
          );
        }),
        (t.gt = function () {
          var t;
          return (
            "undefined" != typeof Br &&
            "YES" ===
              (null ===
                (t = {
                  NODE_ENV: "production",
                  VUE_APP_JPUSH_APP_KEY: "15126da3dc13d1cbe847512b",
                  VUE_APP_JPUSH_CHANNEL: "developer-default",
                  VUE_APP_JPUSH_IS_PRODUCTION: "TRUE",
                  VUE_APP_JPUSH_IS_IDFA: "TRUE",
                  VUE_APP_JPUSH_DELAY: "TRUE",
                  VUE_APP_ONESIGNAL_APP_ID:
                    "c810be65-8ec7-4f73-a802-20862e93c9b8",
                  VUE_APP_VERSION: "2.14.5",
                  VUE_APP_OTA_VERSION: "64",
                  VUE_APP_COMMIT_HASH: "ac11a7b0",
                  VUE_APP_COMMIT_DATE: "1775097535",
                  VUE_APP_GIT_BRANCH: "release",
                  BASE_URL: "/",
                }) || void 0 === t
                ? void 0
                : t.Tt)
          );
        }),
        (t.It = function (t, e) {
          return t.store(e);
        }),
        (t._t = function (t) {
          var e = t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),
            n = e ? e[1].split("_").slice(0, 2).join(".") : "-1";
          return Number(n);
        }),
        (t.Et = function (t) {
          var e = t.match(/Android ([\d.]+)/i),
            n = e ? e[1].split(".").slice(0, 2).join(".") : "-1";
          return Number(n);
        }),
        (t.prototype.At = function (t) {
          return (0, o.mG)(this, void 0, void 0, function () {
            var e,
              n = this;
            return (0, o.Jh)(this, function (r) {
              switch (r.label) {
                case 0:
                  return this.db
                    ? [3, 2]
                    : (Wr("SimpleDb", "Opening database:", this.name),
                      (e = this),
                      [
                        4,
                        new Promise(function (e, r) {
                          var i = indexedDB.open(n.name, n.version);
                          ((i.onsuccess = function (t) {
                            var n = t.target.result;
                            e(n);
                          }),
                            (i.onblocked = function () {
                              r(
                                new za(
                                  t,
                                  "Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed.",
                                ),
                              );
                            }),
                            (i.onerror = function (e) {
                              var n = e.target.error;
                              "VersionError" === n.name
                                ? r(
                                    new Hr(
                                      Kr.FAILED_PRECONDITION,
                                      "A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.",
                                    ),
                                  )
                                : r(new za(t, n));
                            }),
                            (i.onupgradeneeded = function (t) {
                              Wr(
                                "SimpleDb",
                                'Database "' +
                                  n.name +
                                  '" requires upgrade from version:',
                                t.oldVersion,
                              );
                              var e = t.target.result;
                              n.wt
                                .Rt(e, i.transaction, t.oldVersion, n.version)
                                .next(function () {
                                  Wr(
                                    "SimpleDb",
                                    "Database upgrade to version " +
                                      n.version +
                                      " complete",
                                  );
                                });
                            }));
                        }),
                      ]);
                case 1:
                  ((e.db = r.sent()), (r.label = 2));
                case 2:
                  return [
                    2,
                    (this.bt &&
                      (this.db.onversionchange = function (t) {
                        return n.bt(t);
                      }),
                    this.db),
                  ];
              }
            });
          });
        }),
        (t.prototype.vt = function (t) {
          ((this.bt = t),
            this.db &&
              (this.db.onversionchange = function (e) {
                return t(e);
              }));
        }),
        (t.prototype.runTransaction = function (t, e, n, r) {
          return (0, o.mG)(this, void 0, void 0, function () {
            var s, a, u, c, h;
            return (0, o.Jh)(this, function (l) {
              switch (l.label) {
                case 0:
                  ((s = "readonly" === e),
                    (a = 0),
                    (u = function () {
                      var e, i, u, h, l;
                      return (0, o.Jh)(this, function (o) {
                        switch (o.label) {
                          case 0:
                            (++a, (o.label = 1));
                          case 1:
                            return (o.trys.push([1, 4, , 5]), [4, c.At(t)]);
                          case 2:
                            return (
                              (c.db = o.sent()),
                              (e = ja.open(
                                c.db,
                                t,
                                s ? "readonly" : "readwrite",
                                n,
                              )),
                              (i = r(e)
                                .catch(function (t) {
                                  return (e.abort(t), qa.reject(t));
                                })
                                .toPromise()),
                              (u = {}),
                              i.catch(function () {}),
                              [4, e.dt]
                            );
                          case 3:
                            return [2, ((u.value = (o.sent(), i)), u)];
                          case 4:
                            return (
                              (h = o.sent()),
                              (l = "FirebaseError" !== h.name && a < 3),
                              Wr(
                                "SimpleDb",
                                "Transaction failed with error:",
                                h.message,
                                "Retrying:",
                                l,
                              ),
                              c.close(),
                              l ? [3, 5] : [2, { value: Promise.reject(h) }]
                            );
                          case 5:
                            return [2];
                        }
                      });
                    }),
                    (c = this),
                    (l.label = 1));
                case 1:
                  return [5, u()];
                case 2:
                  if ("object" == (0, i.Z)((h = l.sent()))) return [2, h.value];
                  l.label = 3;
                case 3:
                  return [3, 1];
                case 4:
                  return [2];
              }
            });
          });
        }),
        (t.prototype.close = function () {
          (this.db && this.db.close(), (this.db = void 0));
        }),
        t
      );
    })(),
    Ga = (function () {
      function t(t) {
        ((this.Pt = t), (this.Vt = !1), (this.St = null));
      }
      return (
        Object.defineProperty(t.prototype, "isDone", {
          get: function () {
            return this.Vt;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "Dt", {
          get: function () {
            return this.St;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "cursor", {
          set: function (t) {
            this.Pt = t;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.done = function () {
          this.Vt = !0;
        }),
        (t.prototype.Ct = function (t) {
          this.St = t;
        }),
        (t.prototype.delete = function () {
          return Ja(this.Pt.delete());
        }),
        t
      );
    })(),
    za = (function (t) {
      function e(e, n) {
        var r = this;
        return (
          ((r =
            t.call(
              this,
              Kr.UNAVAILABLE,
              "IndexedDB transaction '" + e + "' failed: " + n,
            ) || this).name = "IndexedDbTransactionError"),
          r
        );
      }
      return ((0, o.ZT)(e, t), e);
    })(Hr);
  function Ka(t) {
    return "IndexedDbTransactionError" === t.name;
  }
  var Ha = (function () {
    function t(t) {
      this.store = t;
    }
    return (
      (t.prototype.put = function (t, e) {
        var n;
        return (
          void 0 !== e
            ? (Wr("SimpleDb", "PUT", this.store.name, t, e),
              (n = this.store.put(e, t)))
            : (Wr("SimpleDb", "PUT", this.store.name, "<auto-key>", t),
              (n = this.store.put(t))),
          Ja(n)
        );
      }),
      (t.prototype.add = function (t) {
        return (
          Wr("SimpleDb", "ADD", this.store.name, t, t),
          Ja(this.store.add(t))
        );
      }),
      (t.prototype.get = function (t) {
        var e = this;
        return Ja(this.store.get(t)).next(function (n) {
          return (
            void 0 === n && (n = null),
            Wr("SimpleDb", "GET", e.store.name, t, n),
            n
          );
        });
      }),
      (t.prototype.delete = function (t) {
        return (
          Wr("SimpleDb", "DELETE", this.store.name, t),
          Ja(this.store.delete(t))
        );
      }),
      (t.prototype.count = function () {
        return (
          Wr("SimpleDb", "COUNT", this.store.name),
          Ja(this.store.count())
        );
      }),
      (t.prototype.Nt = function (t, e) {
        var n = this.cursor(this.options(t, e)),
          r = [];
        return this.xt(n, function (t, e) {
          r.push(e);
        }).next(function () {
          return r;
        });
      }),
      (t.prototype.kt = function (t, e) {
        Wr("SimpleDb", "DELETE ALL", this.store.name);
        var n = this.options(t, e);
        n.Ft = !1;
        var r = this.cursor(n);
        return this.xt(r, function (t, e, n) {
          return n.delete();
        });
      }),
      (t.prototype.$t = function (t, e) {
        var n;
        e ? (n = t) : ((n = {}), (e = t));
        var r = this.cursor(n);
        return this.xt(r, e);
      }),
      (t.prototype.Ot = function (t) {
        var e = this.cursor({});
        return new qa(function (n, r) {
          ((e.onerror = function (t) {
            var e = Wa(t.target.error);
            r(e);
          }),
            (e.onsuccess = function (e) {
              var r = e.target.result;
              r
                ? t(r.primaryKey, r.value).next(function (t) {
                    t ? r.continue() : n();
                  })
                : n();
            }));
        });
      }),
      (t.prototype.xt = function (t, e) {
        var n = [];
        return new qa(function (r, i) {
          ((t.onerror = function (t) {
            i(t.target.error);
          }),
            (t.onsuccess = function (t) {
              var i = t.target.result;
              if (i) {
                var o = new Ga(i),
                  s = e(i.primaryKey, i.value, o);
                if (s instanceof qa) {
                  var a = s.catch(function (t) {
                    return (o.done(), qa.reject(t));
                  });
                  n.push(a);
                }
                o.isDone
                  ? r()
                  : null === o.Dt
                    ? i.continue()
                    : i.continue(o.Dt);
              } else r();
            }));
        }).next(function () {
          return qa.waitFor(n);
        });
      }),
      (t.prototype.options = function (t, e) {
        var n;
        return (
          void 0 !== t && ("string" == typeof t ? (n = t) : (e = t)),
          { index: n, range: e }
        );
      }),
      (t.prototype.cursor = function (t) {
        var e = "next";
        if ((t.reverse && (e = "prev"), t.index)) {
          var n = this.store.index(t.index);
          return t.Ft ? n.openKeyCursor(t.range, e) : n.openCursor(t.range, e);
        }
        return this.store.openCursor(t.range, e);
      }),
      t
    );
  })();
  function Ja(t) {
    return new qa(function (e, n) {
      ((t.onsuccess = function (t) {
        var n = t.target.result;
        e(n);
      }),
        (t.onerror = function (t) {
          var e = Wa(t.target.error);
          n(e);
        }));
    });
  }
  var Qa = !1;
  function Wa(t) {
    var e = Ba._t((0, s.z$)());
    if (e >= 12.2 && e < 13) {
      var n =
        "An internal error was encountered in the Indexed Database server";
      if (t.message.indexOf(n) >= 0) {
        var r = new Hr(
          "internal",
          "IOS_INDEXEDDB_BUG1: IndexedDb has thrown '" +
            n +
            "'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.",
        );
        return (
          Qa ||
            ((Qa = !0),
            setTimeout(function () {
              throw r;
            }, 0)),
          r
        );
      }
    }
    return t;
  }
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ var Za = (function (t) {
    function e(e, n) {
      var r = this;
      return (
        ((r = t.call(this) || this).Mt = e),
        (r.currentSequenceNumber = n),
        r
      );
    }
    return ((0, o.ZT)(e, t), e);
  })(Ua);
  function Xa(t, e) {
    var n = ei(t);
    return Ba.It(n.Mt, e);
  }
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ var Ya = (function () {
      function t(t, e, n, r) {
        ((this.batchId = t),
          (this.localWriteTime = e),
          (this.baseMutations = n),
          (this.mutations = r));
      }
      return (
        (t.prototype.applyToRemoteDocument = function (t, e) {
          for (
            var n = e.mutationResults, r = 0;
            r < this.mutations.length;
            r++
          ) {
            var i = this.mutations[r];
            i.key.isEqual(t.key) && Zo(i, t, n[r]);
          }
        }),
        (t.prototype.applyToLocalView = function (t) {
          for (var e = 0, n = this.baseMutations; e < n.length; e++)
            (o = n[e]).key.isEqual(t.key) && Xo(o, t, this.localWriteTime);
          for (var r = 0, i = this.mutations; r < i.length; r++) {
            var o;
            (o = i[r]).key.isEqual(t.key) && Xo(o, t, this.localWriteTime);
          }
        }),
        (t.prototype.applyToLocalDocumentSet = function (t) {
          var e = this;
          this.mutations.forEach(function (n) {
            var r = t.get(n.key),
              i = r;
            (e.applyToLocalView(i),
              r.isValidDocument() || i.convertToNoDocument(ui.min()));
          });
        }),
        (t.prototype.keys = function () {
          return this.mutations.reduce(function (t, e) {
            return t.add(e.key);
          }, Ss());
        }),
        (t.prototype.isEqual = function (t) {
          return (
            this.batchId === t.batchId &&
            oi(this.mutations, t.mutations, function (t, e) {
              return $o(t, e);
            }) &&
            oi(this.baseMutations, t.baseMutations, function (t, e) {
              return $o(t, e);
            })
          );
        }),
        t
      );
    })(),
    $a = (function () {
      function t(t, e, n, r) {
        ((this.batch = t),
          (this.commitVersion = e),
          (this.mutationResults = n),
          (this.docVersions = r));
      }
      return (
        (t.from = function (e, n, r) {
          ti(e.mutations.length === r.length);
          for (var i = Es(), o = e.mutations, s = 0; s < o.length; s++)
            i = i.insert(o[s].key, r[s].version);
          return new t(e, n, r, i);
        }),
        t
      );
    })(),
    tu = (function () {
      function t(t, e, n, r, i, o, s) {
        (void 0 === i && (i = ui.min()),
          void 0 === o && (o = ui.min()),
          void 0 === s && (s = yi.EMPTY_BYTE_STRING),
          (this.target = t),
          (this.targetId = e),
          (this.purpose = n),
          (this.sequenceNumber = r),
          (this.snapshotVersion = i),
          (this.lastLimboFreeSnapshotVersion = o),
          (this.resumeToken = s));
      }
      return (
        (t.prototype.withSequenceNumber = function (e) {
          return new t(
            this.target,
            this.targetId,
            this.purpose,
            e,
            this.snapshotVersion,
            this.lastLimboFreeSnapshotVersion,
            this.resumeToken,
          );
        }),
        (t.prototype.withResumeToken = function (e, n) {
          return new t(
            this.target,
            this.targetId,
            this.purpose,
            this.sequenceNumber,
            n,
            this.lastLimboFreeSnapshotVersion,
            e,
          );
        }),
        (t.prototype.withLastLimboFreeSnapshotVersion = function (e) {
          return new t(
            this.target,
            this.targetId,
            this.purpose,
            this.sequenceNumber,
            this.snapshotVersion,
            e,
            this.resumeToken,
          );
        }),
        t
      );
    })(),
    eu = function (t) {
      this.Lt = t;
    };
  function nu(t, e) {
    if (e.document) return $s(t.Lt, e.document, !!e.hasCommittedMutations);
    if (e.noDocument) {
      var n = Ni.fromSegments(e.noDocument.path),
        r = au(e.noDocument.readTime),
        i = Ki.newNoDocument(n, r);
      return e.hasCommittedMutations ? i.setHasCommittedMutations() : i;
    }
    if (e.unknownDocument) {
      var o = Ni.fromSegments(e.unknownDocument.path);
      return ((r = au(e.unknownDocument.version)), Ki.newUnknownDocument(o, r));
    }
    return $r();
  }
  function ru(t, e, n) {
    var r = iu(n),
      i = e.key.path.popLast().toArray();
    if (e.isFoundDocument()) {
      var o = (function (t, e) {
          return {
            name: Hs(t, e.key),
            fields: e.data.value.mapValue.fields,
            updateTime: qs(t, e.version.toTimestamp()),
          };
        })(t.Lt, e),
        s = e.hasCommittedMutations;
      return new ka(null, null, o, s, r, i);
    }
    if (e.isNoDocument()) {
      var a = e.key.path.toArray(),
        u = su(e.version);
      return (
        (s = e.hasCommittedMutations),
        new ka(null, new Sa(a, u), null, s, r, i)
      );
    }
    if (e.isUnknownDocument()) {
      var c = e.key.path.toArray(),
        h = su(e.version);
      return new ka(new Aa(c, h), null, null, !0, r, i);
    }
    return $r();
  }
  function iu(t) {
    var e = t.toTimestamp();
    return [e.seconds, e.nanoseconds];
  }
  function ou(t) {
    var e = new ai(t[0], t[1]);
    return ui.fromTimestamp(e);
  }
  function su(t) {
    var e = t.toTimestamp();
    return new wa(e.seconds, e.nanoseconds);
  }
  function au(t) {
    var e = new ai(t.seconds, t.nanoseconds);
    return ui.fromTimestamp(e);
  }
  function uu(t, e) {
    for (
      var n = (e.baseMutations || []).map(function (e) {
          return ea(t.Lt, e);
        }),
        r = 0;
      r < e.mutations.length - 1;
      ++r
    ) {
      var i = e.mutations[r];
      if (
        r + 1 < e.mutations.length &&
        void 0 !== e.mutations[r + 1].transform
      ) {
        var o = e.mutations[r + 1];
        ((i.updateTransforms = o.transform.fieldTransforms),
          e.mutations.splice(r + 1, 1),
          ++r);
      }
    }
    var s = e.mutations.map(function (e) {
        return ea(t.Lt, e);
      }),
      a = ai.fromMillis(e.localWriteTimeMs);
    return new Ya(e.batchId, a, n, s);
  }
  function cu(t) {
    var e,
      n,
      r = au(t.readTime),
      i =
        void 0 !== t.lastLimboFreeSnapshotVersion
          ? au(t.lastLimboFreeSnapshotVersion)
          : ui.min();
    return (
      void 0 !== t.query.documents
        ? (ti(1 === (n = t.query).documents.length),
          (e = To(vo(Ws(n.documents[0])))))
        : (e = (function (t) {
            return To(ia(t));
          })(t.query)),
      new tu(
        e,
        t.targetId,
        0,
        t.lastListenSequenceNumber,
        r,
        i,
        yi.fromBase64String(t.resumeToken),
      )
    );
  }
  function hu(t, e) {
    var n,
      r = su(e.snapshotVersion),
      i = su(e.lastLimboFreeSnapshotVersion);
    n = Zi(e.target) ? na(t.Lt, e.target) : ra(t.Lt, e.target);
    var o = e.resumeToken.toBase64();
    return new Ra(e.targetId, Qi(e.target), r, o, e.sequenceNumber, i, n);
  }
  function lu(t) {
    var e = ia({ parent: t.parent, structuredQuery: t.structuredQuery });
    return "LAST" === t.limitType ? Eo(e, e.limit, "L") : e;
  }
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ var fu = (function () {
    function t() {}
    return (
      (t.prototype.getBundleMetadata = function (t, e) {
        return pu(t)
          .get(e)
          .next(function (t) {
            if (t)
              return {
                id: (e = t).bundleId,
                createTime: au(e.createTime),
                version: e.version,
              };
            var e;
          });
      }),
      (t.prototype.saveBundleMetadata = function (t, e) {
        return pu(t).put({
          bundleId: (n = e).id,
          createTime: su(Gs(n.createTime)),
          version: n.version,
        });
        var n;
      }),
      (t.prototype.getNamedQuery = function (t, e) {
        return du(t)
          .get(e)
          .next(function (t) {
            if (t)
              return {
                name: (e = t).name,
                query: lu(e.bundledQuery),
                readTime: au(e.readTime),
              };
            var e;
          });
      }),
      (t.prototype.saveNamedQuery = function (t, e) {
        return du(t).put(
          (function (t) {
            return {
              name: t.name,
              readTime: su(Gs(t.readTime)),
              bundledQuery: t.bundledQuery,
            };
          })(e),
        );
      }),
      t
    );
  })();
  function pu(t) {
    return Xa(t, Pa.store);
  }
  function du(t) {
    return Xa(t, La.store);
  }
  /**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ var vu = (function () {
      function t() {
        this.Bt = new gu();
      }
      return (
        (t.prototype.addToCollectionParentIndex = function (t, e) {
          return (this.Bt.add(e), qa.resolve());
        }),
        (t.prototype.getCollectionParents = function (t, e) {
          return qa.resolve(this.Bt.getEntries(e));
        }),
        t
      );
    })(),
    gu = (function () {
      function t() {
        this.index = {};
      }
      return (
        (t.prototype.add = function (t) {
          var e = t.lastSegment(),
            n = t.popLast(),
            r = this.index[e] || new gs(pi.comparator),
            i = !r.has(n);
          return ((this.index[e] = r.add(n)), i);
        }),
        (t.prototype.has = function (t) {
          var e = t.lastSegment(),
            n = t.popLast(),
            r = this.index[e];
          return r && r.has(n);
        }),
        (t.prototype.getEntries = function (t) {
          return (this.index[t] || new gs(pi.comparator)).toArray();
        }),
        t
      );
    })(),
    yu = (function () {
      function t() {
        this.qt = new gu();
      }
      return (
        (t.prototype.addToCollectionParentIndex = function (t, e) {
          var n = this;
          if (!this.qt.has(e)) {
            var r = e.lastSegment(),
              i = e.popLast();
            t.addOnCommittedListener(function () {
              n.qt.add(e);
            });
            var o = { collectionId: r, parent: ga(i) };
            return mu(t).put(o);
          }
          return qa.resolve();
        }),
        (t.prototype.getCollectionParents = function (t, e) {
          var n = [],
            r = IDBKeyRange.bound([e, ""], [si(e), ""], !1, !0);
          return mu(t)
            .Nt(r)
            .next(function (t) {
              for (var r = 0, i = t; r < i.length; r++) {
                var o = i[r];
                if (o.collectionId !== e) break;
                n.push(ba(o.parent));
              }
              return n;
            });
        }),
        t
      );
    })();
  function mu(t) {
    return Xa(t, Oa.store);
  }
  /**
   * @license
   * Copyright 2018 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ var bu = {
      didRun: !1,
      sequenceNumbersCollected: 0,
      targetsRemoved: 0,
      documentsRemoved: 0,
    },
    wu = (function () {
      function t(t, e, n) {
        ((this.cacheSizeCollectionThreshold = t),
          (this.percentileToCollect = e),
          (this.maximumSequenceNumbersToCollect = n));
      }
      return (
        (t.withCacheSize = function (e) {
          return new t(
            e,
            t.DEFAULT_COLLECTION_PERCENTILE,
            t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT,
          );
        }),
        t
      );
    })();
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ function _u(t, e, n) {
    var r = t.store(Ea.store),
      i = t.store(Ia.store),
      o = [],
      s = IDBKeyRange.only(n.batchId),
      a = 0,
      u = r.$t({ range: s }, function (t, e, n) {
        return (a++, n.delete());
      });
    o.push(
      u.next(function () {
        ti(1 === a);
      }),
    );
    for (var c = [], h = 0, l = n.mutations; h < l.length; h++) {
      var f = l[h],
        p = Ia.key(e, f.key.path, n.batchId);
      (o.push(i.delete(p)), c.push(f.key));
    }
    return qa.waitFor(o).next(function () {
      return c;
    });
  }
  function Tu(t) {
    if (!t) return 0;
    var e;
    if (t.document) e = t.document;
    else if (t.unknownDocument) e = t.unknownDocument;
    else {
      if (!t.noDocument) throw $r();
      e = t.noDocument;
    }
    return JSON.stringify(e).length;
  }
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ ((wu.DEFAULT_COLLECTION_PERCENTILE = 10),
    (wu.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT = 1e3),
    (wu.DEFAULT = new wu(
      41943040,
      wu.DEFAULT_COLLECTION_PERCENTILE,
      wu.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT,
    )),
    (wu.DISABLED = new wu(-1, 0, 0)));
  var Eu = (function () {
    function t(t, e, n, r) {
      ((this.userId = t),
        (this.R = e),
        (this.Ut = n),
        (this.referenceDelegate = r),
        (this.Kt = {}));
    }
    return (
      (t.Qt = function (e, n, r, i) {
        return (
          ti("" !== e.uid),
          new t(e.isAuthenticated() ? e.uid : "", n, r, i)
        );
      }),
      (t.prototype.checkEmpty = function (t) {
        var e = !0,
          n = IDBKeyRange.bound(
            [this.userId, Number.NEGATIVE_INFINITY],
            [this.userId, Number.POSITIVE_INFINITY],
          );
        return Su(t)
          .$t({ index: Ea.userMutationsIndex, range: n }, function (t, n, r) {
            ((e = !1), r.done());
          })
          .next(function () {
            return e;
          });
      }),
      (t.prototype.addMutationBatch = function (t, e, n, r) {
        var i = this,
          o = Au(t),
          s = Su(t);
        return s.add({}).next(function (a) {
          ti("number" == typeof a);
          for (
            var u = new Ya(a, e, n, r),
              c = (function (t, e, n) {
                var r = n.baseMutations.map(function (e) {
                    return ta(t.Lt, e);
                  }),
                  i = n.mutations.map(function (e) {
                    return ta(t.Lt, e);
                  });
                return new Ea(e, n.batchId, n.localWriteTime.toMillis(), r, i);
              })(i.R, i.userId, u),
              h = [],
              l = new gs(function (t, e) {
                return ii(t.canonicalString(), e.canonicalString());
              }),
              f = 0,
              p = r;
            f < p.length;
            f++
          ) {
            var d = p[f],
              v = Ia.key(i.userId, d.key.path, a);
            ((l = l.add(d.key.path.popLast())),
              h.push(s.put(c)),
              h.push(o.put(v, Ia.PLACEHOLDER)));
          }
          return (
            l.forEach(function (e) {
              h.push(i.Ut.addToCollectionParentIndex(t, e));
            }),
            t.addOnCommittedListener(function () {
              i.Kt[a] = u.keys();
            }),
            qa.waitFor(h).next(function () {
              return u;
            })
          );
        });
      }),
      (t.prototype.lookupMutationBatch = function (t, e) {
        var n = this;
        return Su(t)
          .get(e)
          .next(function (t) {
            return t ? (ti(t.userId === n.userId), uu(n.R, t)) : null;
          });
      }),
      (t.prototype.jt = function (t, e) {
        var n = this;
        return this.Kt[e]
          ? qa.resolve(this.Kt[e])
          : this.lookupMutationBatch(t, e).next(function (t) {
              if (t) {
                var r = t.keys();
                return ((n.Kt[e] = r), r);
              }
              return null;
            });
      }),
      (t.prototype.getNextMutationBatchAfterBatchId = function (t, e) {
        var n = this,
          r = e + 1,
          i = IDBKeyRange.lowerBound([this.userId, r]),
          o = null;
        return Su(t)
          .$t({ index: Ea.userMutationsIndex, range: i }, function (t, e, i) {
            (e.userId === n.userId && (ti(e.batchId >= r), (o = uu(n.R, e))),
              i.done());
          })
          .next(function () {
            return o;
          });
      }),
      (t.prototype.getHighestUnacknowledgedBatchId = function (t) {
        var e = IDBKeyRange.upperBound([this.userId, Number.POSITIVE_INFINITY]),
          n = -1;
        return Su(t)
          .$t(
            { index: Ea.userMutationsIndex, range: e, reverse: !0 },
            function (t, e, r) {
              ((n = e.batchId), r.done());
            },
          )
          .next(function () {
            return n;
          });
      }),
      (t.prototype.getAllMutationBatches = function (t) {
        var e = this,
          n = IDBKeyRange.bound(
            [this.userId, -1],
            [this.userId, Number.POSITIVE_INFINITY],
          );
        return Su(t)
          .Nt(Ea.userMutationsIndex, n)
          .next(function (t) {
            return t.map(function (t) {
              return uu(e.R, t);
            });
          });
      }),
      (t.prototype.getAllMutationBatchesAffectingDocumentKey = function (t, e) {
        var n = this,
          r = Ia.prefixForPath(this.userId, e.path),
          i = IDBKeyRange.lowerBound(r),
          o = [];
        return Au(t)
          .$t({ range: i }, function (r, i, s) {
            var a = r[0],
              u = r[1],
              c = r[2],
              h = ba(u);
            if (a === n.userId && e.path.isEqual(h))
              return Su(t)
                .get(c)
                .next(function (t) {
                  if (!t) throw $r();
                  (ti(t.userId === n.userId), o.push(uu(n.R, t)));
                });
            s.done();
          })
          .next(function () {
            return o;
          });
      }),
      (t.prototype.getAllMutationBatchesAffectingDocumentKeys = function (
        t,
        e,
      ) {
        var n = this,
          r = new gs(ii),
          i = [];
        return (
          e.forEach(function (e) {
            var o = Ia.prefixForPath(n.userId, e.path),
              s = IDBKeyRange.lowerBound(o),
              a = Au(t).$t({ range: s }, function (t, i, o) {
                var s = t[0],
                  a = t[1],
                  u = t[2],
                  c = ba(a);
                s === n.userId && e.path.isEqual(c) ? (r = r.add(u)) : o.done();
              });
            i.push(a);
          }),
          qa.waitFor(i).next(function () {
            return n.Wt(t, r);
          })
        );
      }),
      (t.prototype.getAllMutationBatchesAffectingQuery = function (t, e) {
        var n = this,
          r = e.path,
          i = r.length + 1,
          o = Ia.prefixForPath(this.userId, r),
          s = IDBKeyRange.lowerBound(o),
          a = new gs(ii);
        return Au(t)
          .$t({ range: s }, function (t, e, o) {
            var s = t[0],
              u = t[1],
              c = t[2],
              h = ba(u);
            s === n.userId && r.isPrefixOf(h)
              ? h.length === i && (a = a.add(c))
              : o.done();
          })
          .next(function () {
            return n.Wt(t, a);
          });
      }),
      (t.prototype.Wt = function (t, e) {
        var n = this,
          r = [],
          i = [];
        return (
          e.forEach(function (e) {
            i.push(
              Su(t)
                .get(e)
                .next(function (t) {
                  if (null === t) throw $r();
                  (ti(t.userId === n.userId), r.push(uu(n.R, t)));
                }),
            );
          }),
          qa.waitFor(i).next(function () {
            return r;
          })
        );
      }),
      (t.prototype.removeMutationBatch = function (t, e) {
        var n = this;
        return _u(t.Mt, this.userId, e).next(function (r) {
          return (
            t.addOnCommittedListener(function () {
              n.Gt(e.batchId);
            }),
            qa.forEach(r, function (e) {
              return n.referenceDelegate.markPotentiallyOrphaned(t, e);
            })
          );
        });
      }),
      (t.prototype.Gt = function (t) {
        delete this.Kt[t];
      }),
      (t.prototype.performConsistencyCheck = function (t) {
        var e = this;
        return this.checkEmpty(t).next(function (n) {
          if (!n) return qa.resolve();
          var r = IDBKeyRange.lowerBound(Ia.prefixForUser(e.userId)),
            i = [];
          return Au(t)
            .$t({ range: r }, function (t, n, r) {
              if (t[0] === e.userId) {
                var o = ba(t[1]);
                i.push(o);
              } else r.done();
            })
            .next(function () {
              ti(0 === i.length);
            });
        });
      }),
      (t.prototype.containsKey = function (t, e) {
        return Iu(t, this.userId, e);
      }),
      (t.prototype.zt = function (t) {
        var e = this;
        return ku(t)
          .get(this.userId)
          .next(function (t) {
            return t || new Ta(e.userId, -1, "");
          });
      }),
      t
    );
  })();
  function Iu(t, e, n) {
    var r = Ia.prefixForPath(e, n.path),
      i = r[1],
      o = IDBKeyRange.lowerBound(r),
      s = !1;
    return Au(t)
      .$t({ range: o, Ft: !0 }, function (t, n, r) {
        var o = t[0],
          a = t[1];
        (t[2], o === e && a === i && (s = !0), r.done());
      })
      .next(function () {
        return s;
      });
  }
  function Su(t) {
    return Xa(t, Ea.store);
  }
  function Au(t) {
    return Xa(t, Ia.store);
  }
  function ku(t) {
    return Xa(t, Ta.store);
  }
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ var Nu = (function () {
      function t(t) {
        this.Ht = t;
      }
      return (
        (t.prototype.next = function () {
          return ((this.Ht += 2), this.Ht);
        }),
        (t.Jt = function () {
          return new t(0);
        }),
        (t.Yt = function () {
          return new t(-1);
        }),
        t
      );
    })(),
    Ru = (function () {
      function t(t, e) {
        ((this.referenceDelegate = t), (this.R = e));
      }
      return (
        (t.prototype.allocateTargetId = function (t) {
          var e = this;
          return this.Xt(t).next(function (n) {
            var r = new Nu(n.highestTargetId);
            return (
              (n.highestTargetId = r.next()),
              e.Zt(t, n).next(function () {
                return n.highestTargetId;
              })
            );
          });
        }),
        (t.prototype.getLastRemoteSnapshotVersion = function (t) {
          return this.Xt(t).next(function (t) {
            return ui.fromTimestamp(
              new ai(
                t.lastRemoteSnapshotVersion.seconds,
                t.lastRemoteSnapshotVersion.nanoseconds,
              ),
            );
          });
        }),
        (t.prototype.getHighestSequenceNumber = function (t) {
          return this.Xt(t).next(function (t) {
            return t.highestListenSequenceNumber;
          });
        }),
        (t.prototype.setTargetsMetadata = function (t, e, n) {
          var r = this;
          return this.Xt(t).next(function (i) {
            return (
              (i.highestListenSequenceNumber = e),
              n && (i.lastRemoteSnapshotVersion = n.toTimestamp()),
              e > i.highestListenSequenceNumber &&
                (i.highestListenSequenceNumber = e),
              r.Zt(t, i)
            );
          });
        }),
        (t.prototype.addTargetData = function (t, e) {
          var n = this;
          return this.te(t, e).next(function () {
            return n.Xt(t).next(function (r) {
              return ((r.targetCount += 1), n.ee(e, r), n.Zt(t, r));
            });
          });
        }),
        (t.prototype.updateTargetData = function (t, e) {
          return this.te(t, e);
        }),
        (t.prototype.removeTargetData = function (t, e) {
          var n = this;
          return this.removeMatchingKeysForTargetId(t, e.targetId)
            .next(function () {
              return Du(t).delete(e.targetId);
            })
            .next(function () {
              return n.Xt(t);
            })
            .next(function (e) {
              return (ti(e.targetCount > 0), (e.targetCount -= 1), n.Zt(t, e));
            });
        }),
        (t.prototype.removeTargets = function (t, e, n) {
          var r = this,
            i = 0,
            o = [];
          return Du(t)
            .$t(function (s, a) {
              var u = cu(a);
              u.sequenceNumber <= e &&
                null === n.get(u.targetId) &&
                (i++, o.push(r.removeTargetData(t, u)));
            })
            .next(function () {
              return qa.waitFor(o);
            })
            .next(function () {
              return i;
            });
        }),
        (t.prototype.forEachTarget = function (t, e) {
          return Du(t).$t(function (t, n) {
            var r = cu(n);
            e(r);
          });
        }),
        (t.prototype.Xt = function (t) {
          return Cu(t)
            .get(Ca.key)
            .next(function (t) {
              return (ti(null !== t), t);
            });
        }),
        (t.prototype.Zt = function (t, e) {
          return Cu(t).put(Ca.key, e);
        }),
        (t.prototype.te = function (t, e) {
          return Du(t).put(hu(this.R, e));
        }),
        (t.prototype.ee = function (t, e) {
          var n = !1;
          return (
            t.targetId > e.highestTargetId &&
              ((e.highestTargetId = t.targetId), (n = !0)),
            t.sequenceNumber > e.highestListenSequenceNumber &&
              ((e.highestListenSequenceNumber = t.sequenceNumber), (n = !0)),
            n
          );
        }),
        (t.prototype.getTargetCount = function (t) {
          return this.Xt(t).next(function (t) {
            return t.targetCount;
          });
        }),
        (t.prototype.getTargetData = function (t, e) {
          var n = Qi(e),
            r = IDBKeyRange.bound(
              [n, Number.NEGATIVE_INFINITY],
              [n, Number.POSITIVE_INFINITY],
            ),
            i = null;
          return Du(t)
            .$t(
              { range: r, index: Ra.queryTargetsIndexName },
              function (t, n, r) {
                var o = cu(n);
                Wi(e, o.target) && ((i = o), r.done());
              },
            )
            .next(function () {
              return i;
            });
        }),
        (t.prototype.addMatchingKeys = function (t, e, n) {
          var r = this,
            i = [],
            o = Ou(t);
          return (
            e.forEach(function (e) {
              var s = ga(e.path);
              (i.push(o.put(new Da(n, s))),
                i.push(r.referenceDelegate.addReference(t, n, e)));
            }),
            qa.waitFor(i)
          );
        }),
        (t.prototype.removeMatchingKeys = function (t, e, n) {
          var r = this,
            i = Ou(t);
          return qa.forEach(e, function (e) {
            var o = ga(e.path);
            return qa.waitFor([
              i.delete([n, o]),
              r.referenceDelegate.removeReference(t, n, e),
            ]);
          });
        }),
        (t.prototype.removeMatchingKeysForTargetId = function (t, e) {
          var n = Ou(t),
            r = IDBKeyRange.bound([e], [e + 1], !1, !0);
          return n.delete(r);
        }),
        (t.prototype.getMatchingKeysForTargetId = function (t, e) {
          var n = IDBKeyRange.bound([e], [e + 1], !1, !0),
            r = Ou(t),
            i = Ss();
          return r
            .$t({ range: n, Ft: !0 }, function (t, e, n) {
              var r = ba(t[1]),
                o = new Ni(r);
              i = i.add(o);
            })
            .next(function () {
              return i;
            });
        }),
        (t.prototype.containsKey = function (t, e) {
          var n = ga(e.path),
            r = IDBKeyRange.bound([n], [si(n)], !1, !0),
            i = 0;
          return Ou(t)
            .$t(
              { index: Da.documentTargetsIndex, Ft: !0, range: r },
              function (t, e, n) {
                var r = t[0];
                (t[1], 0 !== r && (i++, n.done()));
              },
            )
            .next(function () {
              return i > 0;
            });
        }),
        (t.prototype.lt = function (t, e) {
          return Du(t)
            .get(e)
            .next(function (t) {
              return t ? cu(t) : null;
            });
        }),
        t
      );
    })();
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ function Du(t) {
    return Xa(t, Ra.store);
  }
  function Cu(t) {
    return Xa(t, Ca.store);
  }
  function Ou(t) {
    return Xa(t, Da.store);
  }
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ function xu(t) {
    return (0, o.mG)(this, void 0, void 0, function () {
      return (0, o.Jh)(this, function (e) {
        if (t.code !== Kr.FAILED_PRECONDITION || t.message !== Fa) throw t;
        return (Wr("LocalStore", "Unexpectedly lost primary lease"), [2]);
      });
    });
  }
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ function Pu(t, e) {
    var n = t[0],
      r = t[1],
      i = e[0],
      o = e[1],
      s = ii(n, i);
    return 0 === s ? ii(r, o) : s;
  }
  var Lu = (function () {
      function t(t) {
        ((this.ne = t), (this.buffer = new gs(Pu)), (this.se = 0));
      }
      return (
        (t.prototype.ie = function () {
          return ++this.se;
        }),
        (t.prototype.re = function (t) {
          var e = [t, this.ie()];
          if (this.buffer.size < this.ne) this.buffer = this.buffer.add(e);
          else {
            var n = this.buffer.last();
            Pu(e, n) < 0 && (this.buffer = this.buffer.delete(n).add(e));
          }
        }),
        Object.defineProperty(t.prototype, "maxValue", {
          get: function () {
            return this.buffer.last()[0];
          },
          enumerable: !1,
          configurable: !0,
        }),
        t
      );
    })(),
    Mu = (function () {
      function t(t, e) {
        ((this.garbageCollector = t),
          (this.asyncQueue = e),
          (this.oe = !1),
          (this.ce = null));
      }
      return (
        (t.prototype.start = function (t) {
          -1 !== this.garbageCollector.params.cacheSizeCollectionThreshold &&
            this.ue(t);
        }),
        (t.prototype.stop = function () {
          this.ce && (this.ce.cancel(), (this.ce = null));
        }),
        Object.defineProperty(t.prototype, "started", {
          get: function () {
            return null !== this.ce;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.ue = function (t) {
          var e = this,
            n = this.oe ? 3e5 : 6e4;
          (Wr(
            "LruGarbageCollector",
            "Garbage collection scheduled in " + n + "ms",
          ),
            (this.ce = this.asyncQueue.enqueueAfterDelay(
              "lru_garbage_collection",
              n,
              function () {
                return (0, o.mG)(e, void 0, void 0, function () {
                  var e;
                  return (0, o.Jh)(this, function (n) {
                    switch (n.label) {
                      case 0:
                        ((this.ce = null), (this.oe = !0), (n.label = 1));
                      case 1:
                        return (
                          n.trys.push([1, 3, , 7]),
                          [4, t.collectGarbage(this.garbageCollector)]
                        );
                      case 2:
                        return (n.sent(), [3, 7]);
                      case 3:
                        return Ka((e = n.sent()))
                          ? (Wr(
                              "LruGarbageCollector",
                              "Ignoring IndexedDB error during garbage collection: ",
                              e,
                            ),
                            [3, 6])
                          : [3, 4];
                      case 4:
                        return [4, xu(e)];
                      case 5:
                        (n.sent(), (n.label = 6));
                      case 6:
                        return [3, 7];
                      case 7:
                        return [4, this.ue(t)];
                      case 8:
                        return (n.sent(), [2]);
                    }
                  });
                });
              },
            )));
        }),
        t
      );
    })(),
    Fu = (function () {
      function t(t, e) {
        ((this.ae = t), (this.params = e));
      }
      return (
        (t.prototype.calculateTargetCount = function (t, e) {
          return this.ae.he(t).next(function (t) {
            return Math.floor((e / 100) * t);
          });
        }),
        (t.prototype.nthSequenceNumber = function (t, e) {
          var n = this;
          if (0 === e) return qa.resolve(zr.o);
          var r = new Lu(e);
          return this.ae
            .forEachTarget(t, function (t) {
              return r.re(t.sequenceNumber);
            })
            .next(function () {
              return n.ae.le(t, function (t) {
                return r.re(t);
              });
            })
            .next(function () {
              return r.maxValue;
            });
        }),
        (t.prototype.removeTargets = function (t, e, n) {
          return this.ae.removeTargets(t, e, n);
        }),
        (t.prototype.removeOrphanedDocuments = function (t, e) {
          return this.ae.removeOrphanedDocuments(t, e);
        }),
        (t.prototype.collect = function (t, e) {
          var n = this;
          return -1 === this.params.cacheSizeCollectionThreshold
            ? (Wr(
                "LruGarbageCollector",
                "Garbage collection skipped; disabled",
              ),
              qa.resolve(bu))
            : this.getCacheSize(t).next(function (r) {
                return r < n.params.cacheSizeCollectionThreshold
                  ? (Wr(
                      "LruGarbageCollector",
                      "Garbage collection skipped; Cache size " +
                        r +
                        " is lower than threshold " +
                        n.params.cacheSizeCollectionThreshold,
                    ),
                    bu)
                  : n.fe(t, e);
              });
        }),
        (t.prototype.getCacheSize = function (t) {
          return this.ae.getCacheSize(t);
        }),
        (t.prototype.fe = function (t, e) {
          var n,
            r,
            i,
            o,
            s,
            u,
            c,
            h = this,
            l = Date.now();
          return this.calculateTargetCount(t, this.params.percentileToCollect)
            .next(function (e) {
              return (
                e > h.params.maximumSequenceNumbersToCollect
                  ? (Wr(
                      "LruGarbageCollector",
                      "Capping sequence numbers to collect down to the maximum of " +
                        h.params.maximumSequenceNumbersToCollect +
                        " from " +
                        e,
                    ),
                    (r = h.params.maximumSequenceNumbersToCollect))
                  : (r = e),
                (o = Date.now()),
                h.nthSequenceNumber(t, r)
              );
            })
            .next(function (r) {
              return ((n = r), (s = Date.now()), h.removeTargets(t, n, e));
            })
            .next(function (e) {
              return (
                (i = e),
                (u = Date.now()),
                h.removeOrphanedDocuments(t, n)
              );
            })
            .next(function (t) {
              return (
                (c = Date.now()),
                Qr() <= a["in"].DEBUG &&
                  Wr(
                    "LruGarbageCollector",
                    "LRU Garbage Collection\n\tCounted targets in " +
                      (o - l) +
                      "ms\n\tDetermined least recently used " +
                      r +
                      " in " +
                      (s - o) +
                      "ms\n\tRemoved " +
                      i +
                      " targets in " +
                      (u - s) +
                      "ms\n\tRemoved " +
                      t +
                      " documents in " +
                      (c - u) +
                      "ms\nTotal Duration: " +
                      (c - l) +
                      "ms",
                  ),
                qa.resolve({
                  didRun: !0,
                  sequenceNumbersCollected: r,
                  targetsRemoved: i,
                  documentsRemoved: t,
                })
              );
            });
        }),
        t
      );
    })(),
    Uu = (function () {
      function t(t, e) {
        ((this.db = t),
          (this.garbageCollector = (function (t, e) {
            return new Fu(t, e);
          })(this, e)));
      }
      return (
        (t.prototype.he = function (t) {
          var e = this.de(t);
          return this.db
            .getTargetCache()
            .getTargetCount(t)
            .next(function (t) {
              return e.next(function (e) {
                return t + e;
              });
            });
        }),
        (t.prototype.de = function (t) {
          var e = 0;
          return this.le(t, function (t) {
            e++;
          }).next(function () {
            return e;
          });
        }),
        (t.prototype.forEachTarget = function (t, e) {
          return this.db.getTargetCache().forEachTarget(t, e);
        }),
        (t.prototype.le = function (t, e) {
          return this.we(t, function (t, n) {
            return e(n);
          });
        }),
        (t.prototype.addReference = function (t, e, n) {
          return Vu(t, n);
        }),
        (t.prototype.removeReference = function (t, e, n) {
          return Vu(t, n);
        }),
        (t.prototype.removeTargets = function (t, e, n) {
          return this.db.getTargetCache().removeTargets(t, e, n);
        }),
        (t.prototype.markPotentiallyOrphaned = function (t, e) {
          return Vu(t, e);
        }),
        (t.prototype._e = function (t, e) {
          return (function (t, e) {
            var n = !1;
            return ku(t)
              .Ot(function (r) {
                return Iu(t, r, e).next(function (t) {
                  return (t && (n = !0), qa.resolve(!t));
                });
              })
              .next(function () {
                return n;
              });
          })(t, e);
        }),
        (t.prototype.removeOrphanedDocuments = function (t, e) {
          var n = this,
            r = this.db.getRemoteDocumentCache().newChangeBuffer(),
            i = [],
            o = 0;
          return this.we(t, function (s, a) {
            if (a <= e) {
              var u = n._e(t, s).next(function (e) {
                if (!e)
                  return (
                    o++,
                    r.getEntry(t, s).next(function () {
                      return (r.removeEntry(s), Ou(t).delete([0, ga(s.path)]));
                    })
                  );
              });
              i.push(u);
            }
          })
            .next(function () {
              return qa.waitFor(i);
            })
            .next(function () {
              return r.apply(t);
            })
            .next(function () {
              return o;
            });
        }),
        (t.prototype.removeTarget = function (t, e) {
          var n = e.withSequenceNumber(t.currentSequenceNumber);
          return this.db.getTargetCache().updateTargetData(t, n);
        }),
        (t.prototype.updateLimboDocument = function (t, e) {
          return Vu(t, e);
        }),
        (t.prototype.we = function (t, e) {
          var n,
            r = Ou(t),
            i = zr.o;
          return r
            .$t({ index: Da.documentTargetsIndex }, function (t, r) {
              var o = t[0];
              t[1];
              var s = r.path,
                a = r.sequenceNumber;
              0 === o
                ? (i !== zr.o && e(new Ni(ba(n)), i), (i = a), (n = s))
                : (i = zr.o);
            })
            .next(function () {
              i !== zr.o && e(new Ni(ba(n)), i);
            });
        }),
        (t.prototype.getCacheSize = function (t) {
          return this.db.getRemoteDocumentCache().getSize(t);
        }),
        t
      );
    })();
  function Vu(t, e) {
    return Ou(t).put(
      (function (t, e) {
        return new Da(0, ga(t.path), e);
      })(e, t.currentSequenceNumber),
    );
  }
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ var qu = (function () {
      function t(t, e) {
        ((this.mapKeyFn = t), (this.equalsFn = e), (this.inner = {}));
      }
      return (
        (t.prototype.get = function (t) {
          var e = this.mapKeyFn(t),
            n = this.inner[e];
          if (void 0 !== n)
            for (var r = 0, i = n; r < i.length; r++) {
              var o = i[r],
                s = o[0],
                a = o[1];
              if (this.equalsFn(s, t)) return a;
            }
        }),
        (t.prototype.has = function (t) {
          return void 0 !== this.get(t);
        }),
        (t.prototype.set = function (t, e) {
          var n = this.mapKeyFn(t),
            r = this.inner[n];
          if (void 0 !== r) {
            for (var i = 0; i < r.length; i++)
              if (this.equalsFn(r[i][0], t)) return void (r[i] = [t, e]);
            r.push([t, e]);
          } else this.inner[n] = [[t, e]];
        }),
        (t.prototype.delete = function (t) {
          var e = this.mapKeyFn(t),
            n = this.inner[e];
          if (void 0 === n) return !1;
          for (var r = 0; r < n.length; r++)
            if (this.equalsFn(n[r][0], t))
              return (
                1 === n.length ? delete this.inner[e] : n.splice(r, 1),
                !0
              );
          return !1;
        }),
        (t.prototype.forEach = function (t) {
          hi(this.inner, function (e, n) {
            for (var r = 0, i = n; r < i.length; r++) {
              var o = i[r],
                s = o[0],
                a = o[1];
              t(s, a);
            }
          });
        }),
        (t.prototype.isEmpty = function () {
          return li(this.inner);
        }),
        t
      );
    })(),
    ju = (function () {
      function t() {
        ((this.changes = new qu(
          function (t) {
            return t.toString();
          },
          function (t, e) {
            return t.isEqual(e);
          },
        )),
          (this.changesApplied = !1));
      }
      return (
        (t.prototype.getReadTime = function (t) {
          var e = this.changes.get(t);
          return e ? e.readTime : ui.min();
        }),
        (t.prototype.addEntry = function (t, e) {
          (this.assertNotApplied(),
            this.changes.set(t.key, { document: t, readTime: e }));
        }),
        (t.prototype.removeEntry = function (t, e) {
          (void 0 === e && (e = null),
            this.assertNotApplied(),
            this.changes.set(t, {
              document: Ki.newInvalidDocument(t),
              readTime: e,
            }));
        }),
        (t.prototype.getEntry = function (t, e) {
          this.assertNotApplied();
          var n = this.changes.get(e);
          return void 0 !== n
            ? qa.resolve(n.document)
            : this.getFromCache(t, e);
        }),
        (t.prototype.getEntries = function (t, e) {
          return this.getAllFromCache(t, e);
        }),
        (t.prototype.apply = function (t) {
          return (
            this.assertNotApplied(),
            (this.changesApplied = !0),
            this.applyChanges(t)
          );
        }),
        (t.prototype.assertNotApplied = function () {}),
        t
      );
    })(),
    Bu = (function () {
      function t(t, e) {
        ((this.R = t), (this.Ut = e));
      }
      return (
        (t.prototype.addEntry = function (t, e, n) {
          return Ku(t).put(Hu(e), n);
        }),
        (t.prototype.removeEntry = function (t, e) {
          var n = Ku(t),
            r = Hu(e);
          return n.delete(r);
        }),
        (t.prototype.updateMetadata = function (t, e) {
          var n = this;
          return this.getMetadata(t).next(function (r) {
            return ((r.byteSize += e), n.me(t, r));
          });
        }),
        (t.prototype.getEntry = function (t, e) {
          var n = this;
          return Ku(t)
            .get(Hu(e))
            .next(function (t) {
              return n.ye(e, t);
            });
        }),
        (t.prototype.ge = function (t, e) {
          var n = this;
          return Ku(t)
            .get(Hu(e))
            .next(function (t) {
              return { document: n.ye(e, t), size: Tu(t) };
            });
        }),
        (t.prototype.getEntries = function (t, e) {
          var n = this,
            r = bs();
          return this.pe(t, e, function (t, e) {
            var i = n.ye(t, e);
            r = r.insert(t, i);
          }).next(function () {
            return r;
          });
        }),
        (t.prototype.Ee = function (t, e) {
          var n = this,
            r = bs(),
            i = new ps(Ni.comparator);
          return this.pe(t, e, function (t, e) {
            var o = n.ye(t, e);
            ((r = r.insert(t, o)), (i = i.insert(t, Tu(e))));
          }).next(function () {
            return { documents: r, Te: i };
          });
        }),
        (t.prototype.pe = function (t, e, n) {
          if (e.isEmpty()) return qa.resolve();
          var r = IDBKeyRange.bound(
              e.first().path.toArray(),
              e.last().path.toArray(),
            ),
            i = e.getIterator(),
            o = i.getNext();
          return Ku(t)
            .$t({ range: r }, function (t, e, r) {
              for (var s = Ni.fromSegments(t); o && Ni.comparator(o, s) < 0; )
                (n(o, null), (o = i.getNext()));
              (o &&
                o.isEqual(s) &&
                (n(o, e), (o = i.hasNext() ? i.getNext() : null)),
                o ? r.Ct(o.path.toArray()) : r.done());
            })
            .next(function () {
              for (; o; ) (n(o, null), (o = i.hasNext() ? i.getNext() : null));
            });
        }),
        (t.prototype.getDocumentsMatchingQuery = function (t, e, n) {
          var r = this,
            i = bs(),
            o = e.path.length + 1,
            s = {};
          if (n.isEqual(ui.min())) {
            var a = e.path.toArray();
            s.range = IDBKeyRange.lowerBound(a);
          } else {
            var u = e.path.toArray(),
              c = iu(n);
            ((s.range = IDBKeyRange.lowerBound([u, c], !0)),
              (s.index = ka.collectionReadTimeIndex));
          }
          return Ku(t)
            .$t(s, function (t, n, s) {
              if (t.length === o) {
                var a = nu(r.R, n);
                e.path.isPrefixOf(a.key.path)
                  ? ko(e, a) && (i = i.insert(a.key, a))
                  : s.done();
              }
            })
            .next(function () {
              return i;
            });
        }),
        (t.prototype.newChangeBuffer = function (t) {
          return new Gu(this, !!t && t.trackRemovals);
        }),
        (t.prototype.getSize = function (t) {
          return this.getMetadata(t).next(function (t) {
            return t.byteSize;
          });
        }),
        (t.prototype.getMetadata = function (t) {
          return zu(t)
            .get(Na.key)
            .next(function (t) {
              return (ti(!!t), t);
            });
        }),
        (t.prototype.me = function (t, e) {
          return zu(t).put(Na.key, e);
        }),
        (t.prototype.ye = function (t, e) {
          if (e) {
            var n = nu(this.R, e);
            if (!n.isNoDocument() || !n.version.isEqual(ui.min())) return n;
          }
          return Ki.newInvalidDocument(t);
        }),
        t
      );
    })(),
    Gu = (function (t) {
      function e(e, n) {
        var r = this;
        return (
          ((r = t.call(this) || this).Ie = e),
          (r.trackRemovals = n),
          (r.Ae = new qu(
            function (t) {
              return t.toString();
            },
            function (t, e) {
              return t.isEqual(e);
            },
          )),
          r
        );
      }
      return (
        (0, o.ZT)(e, t),
        (e.prototype.applyChanges = function (t) {
          var e = this,
            n = [],
            r = 0,
            i = new gs(function (t, e) {
              return ii(t.canonicalString(), e.canonicalString());
            });
          return (
            this.changes.forEach(function (o, s) {
              var a = e.Ae.get(o);
              if (s.document.isValidDocument()) {
                var u = ru(e.Ie.R, s.document, e.getReadTime(o));
                i = i.add(o.path.popLast());
                var c = Tu(u);
                ((r += c - a), n.push(e.Ie.addEntry(t, o, u)));
              } else if (((r -= a), e.trackRemovals)) {
                var h = ru(
                  e.Ie.R,
                  Ki.newNoDocument(o, ui.min()),
                  e.getReadTime(o),
                );
                n.push(e.Ie.addEntry(t, o, h));
              } else n.push(e.Ie.removeEntry(t, o));
            }),
            i.forEach(function (r) {
              n.push(e.Ie.Ut.addToCollectionParentIndex(t, r));
            }),
            n.push(this.Ie.updateMetadata(t, r)),
            qa.waitFor(n)
          );
        }),
        (e.prototype.getFromCache = function (t, e) {
          var n = this;
          return this.Ie.ge(t, e).next(function (t) {
            return (n.Ae.set(e, t.size), t.document);
          });
        }),
        (e.prototype.getAllFromCache = function (t, e) {
          var n = this;
          return this.Ie.Ee(t, e).next(function (t) {
            var e = t.documents;
            return (
              t.Te.forEach(function (t, e) {
                n.Ae.set(t, e);
              }),
              e
            );
          });
        }),
        e
      );
    })(ju);
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ function zu(t) {
    return Xa(t, Na.store);
  }
  function Ku(t) {
    return Xa(t, ka.store);
  }
  function Hu(t) {
    return t.path.toArray();
  }
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ var Ju = (function () {
    function t(t) {
      this.R = t;
    }
    return (
      (t.prototype.Rt = function (t, e, n, r) {
        var i = this;
        ti(n < r && n >= 0 && r <= 11);
        var o = new ja("createOrUpgrade", e);
        n < 1 &&
          r >= 1 &&
          ((function (t) {
            t.createObjectStore(_a.store);
          })(t),
          (function (t) {
            (t.createObjectStore(Ta.store, { keyPath: Ta.keyPath }),
              t
                .createObjectStore(Ea.store, {
                  keyPath: Ea.keyPath,
                  autoIncrement: !0,
                })
                .createIndex(Ea.userMutationsIndex, Ea.userMutationsKeyPath, {
                  unique: !0,
                }),
              t.createObjectStore(Ia.store));
          })(t),
          Qu(t),
          (function (t) {
            t.createObjectStore(ka.store);
          })(t));
        var s = qa.resolve();
        return (
          n < 3 &&
            r >= 3 &&
            (0 !== n &&
              ((function (t) {
                (t.deleteObjectStore(Da.store),
                  t.deleteObjectStore(Ra.store),
                  t.deleteObjectStore(Ca.store));
              })(t),
              Qu(t)),
            (s = s.next(function () {
              return (function (t) {
                var e = t.store(Ca.store),
                  n = new Ca(0, 0, ui.min().toTimestamp(), 0);
                return e.put(Ca.key, n);
              })(o);
            }))),
          n < 4 &&
            r >= 4 &&
            (0 !== n &&
              (s = s.next(function () {
                return (function (t, e) {
                  return e
                    .store(Ea.store)
                    .Nt()
                    .next(function (n) {
                      (t.deleteObjectStore(Ea.store),
                        t
                          .createObjectStore(Ea.store, {
                            keyPath: Ea.keyPath,
                            autoIncrement: !0,
                          })
                          .createIndex(
                            Ea.userMutationsIndex,
                            Ea.userMutationsKeyPath,
                            { unique: !0 },
                          ));
                      var r = e.store(Ea.store),
                        i = n.map(function (t) {
                          return r.put(t);
                        });
                      return qa.waitFor(i);
                    });
                })(t, o);
              })),
            (s = s.next(function () {
              !(function (t) {
                t.createObjectStore(xa.store, { keyPath: xa.keyPath });
              })(t);
            }))),
          n < 5 &&
            r >= 5 &&
            (s = s.next(function () {
              return i.Re(o);
            })),
          n < 6 &&
            r >= 6 &&
            (s = s.next(function () {
              return (
                (function (t) {
                  t.createObjectStore(Na.store);
                })(t),
                i.be(o)
              );
            })),
          n < 7 &&
            r >= 7 &&
            (s = s.next(function () {
              return i.ve(o);
            })),
          n < 8 &&
            r >= 8 &&
            (s = s.next(function () {
              return i.Pe(t, o);
            })),
          n < 9 &&
            r >= 9 &&
            (s = s.next(function () {
              (!(function (t) {
                t.objectStoreNames.contains("remoteDocumentChanges") &&
                  t.deleteObjectStore("remoteDocumentChanges");
              })(t),
                (function (t) {
                  var e = t.objectStore(ka.store);
                  (e.createIndex(ka.readTimeIndex, ka.readTimeIndexPath, {
                    unique: !1,
                  }),
                    e.createIndex(
                      ka.collectionReadTimeIndex,
                      ka.collectionReadTimeIndexPath,
                      { unique: !1 },
                    ));
                })(e));
            })),
          n < 10 &&
            r >= 10 &&
            (s = s.next(function () {
              return i.Ve(o);
            })),
          n < 11 &&
            r >= 11 &&
            (s = s.next(function () {
              (!(function (t) {
                t.createObjectStore(Pa.store, { keyPath: Pa.keyPath });
              })(t),
                (function (t) {
                  t.createObjectStore(La.store, { keyPath: La.keyPath });
                })(t));
            })),
          s
        );
      }),
      (t.prototype.be = function (t) {
        var e = 0;
        return t
          .store(ka.store)
          .$t(function (t, n) {
            e += Tu(n);
          })
          .next(function () {
            var n = new Na(e);
            return t.store(Na.store).put(Na.key, n);
          });
      }),
      (t.prototype.Re = function (t) {
        var e = this,
          n = t.store(Ta.store),
          r = t.store(Ea.store);
        return n.Nt().next(function (n) {
          return qa.forEach(n, function (n) {
            var i = IDBKeyRange.bound(
              [n.userId, -1],
              [n.userId, n.lastAcknowledgedBatchId],
            );
            return r.Nt(Ea.userMutationsIndex, i).next(function (r) {
              return qa.forEach(r, function (r) {
                ti(r.userId === n.userId);
                var i = uu(e.R, r);
                return _u(t, n.userId, i).next(function () {});
              });
            });
          });
        });
      }),
      (t.prototype.ve = function (t) {
        var e = t.store(Da.store),
          n = t.store(ka.store);
        return t
          .store(Ca.store)
          .get(Ca.key)
          .next(function (t) {
            var r = [];
            return n
              .$t(function (n, i) {
                var o = new pi(n),
                  s = (function (t) {
                    return [0, ga(t)];
                  })(o);
                r.push(
                  e.get(s).next(function (n) {
                    return n
                      ? qa.resolve()
                      : (function (n) {
                          return e.put(
                            new Da(0, ga(n), t.highestListenSequenceNumber),
                          );
                        })(o);
                  }),
                );
              })
              .next(function () {
                return qa.waitFor(r);
              });
          });
      }),
      (t.prototype.Pe = function (t, e) {
        t.createObjectStore(Oa.store, { keyPath: Oa.keyPath });
        var n = e.store(Oa.store),
          r = new gu(),
          i = function (t) {
            if (r.add(t)) {
              var e = t.lastSegment(),
                i = t.popLast();
              return n.put({ collectionId: e, parent: ga(i) });
            }
          };
        return e
          .store(ka.store)
          .$t({ Ft: !0 }, function (t, e) {
            var n = new pi(t);
            return i(n.popLast());
          })
          .next(function () {
            return e.store(Ia.store).$t({ Ft: !0 }, function (t, e) {
              t[0];
              var n = t[1];
              t[2];
              var r = ba(n);
              return i(r.popLast());
            });
          });
      }),
      (t.prototype.Ve = function (t) {
        var e = this,
          n = t.store(Ra.store);
        return n.$t(function (t, r) {
          var i = cu(r),
            o = hu(e.R, i);
          return n.put(o);
        });
      }),
      t
    );
  })();
  function Qu(t) {
    (t
      .createObjectStore(Da.store, { keyPath: Da.keyPath })
      .createIndex(Da.documentTargetsIndex, Da.documentTargetsKeyPath, {
        unique: !0,
      }),
      t
        .createObjectStore(Ra.store, { keyPath: Ra.keyPath })
        .createIndex(Ra.queryTargetsIndexName, Ra.queryTargetsKeyPath, {
          unique: !0,
        }),
      t.createObjectStore(Ca.store));
  }
  var Wu =
      "Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",
    Zu = (function () {
      function t(e, n, r, i, o, s, a, u, c, h) {
        if (
          ((this.allowTabSynchronization = e),
          (this.persistenceKey = n),
          (this.clientId = r),
          (this.Se = o),
          (this.window = s),
          (this.document = a),
          (this.De = c),
          (this.Ce = h),
          (this.Ne = null),
          (this.xe = !1),
          (this.isPrimary = !1),
          (this.networkEnabled = !0),
          (this.ke = null),
          (this.inForeground = !1),
          (this.Fe = null),
          (this.$e = null),
          (this.Oe = Number.NEGATIVE_INFINITY),
          (this.Me = function (t) {
            return Promise.resolve();
          }),
          !t.yt())
        )
          throw new Hr(
            Kr.UNIMPLEMENTED,
            "This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.",
          );
        ((this.referenceDelegate = new Uu(this, i)),
          (this.Le = n + "main"),
          (this.R = new eu(u)),
          (this.Be = new Ba(this.Le, 11, new Ju(this.R))),
          (this.qe = new Ru(this.referenceDelegate, this.R)),
          (this.Ut = new yu()),
          (this.Ue = (function (t, e) {
            return new Bu(t, e);
          })(this.R, this.Ut)),
          (this.Ke = new fu()),
          this.window && this.window.localStorage
            ? (this.Qe = this.window.localStorage)
            : ((this.Qe = null),
              !1 === h &&
                Zr(
                  "IndexedDbPersistence",
                  "LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page.",
                )));
      }
      return (
        (t.prototype.start = function () {
          var t = this;
          return this.je()
            .then(function () {
              if (!t.isPrimary && !t.allowTabSynchronization)
                throw new Hr(Kr.FAILED_PRECONDITION, Wu);
              return (
                t.We(),
                t.Ge(),
                t.ze(),
                t.runTransaction(
                  "getHighestListenSequenceNumber",
                  "readonly",
                  function (e) {
                    return t.qe.getHighestSequenceNumber(e);
                  },
                )
              );
            })
            .then(function (e) {
              t.Ne = new zr(e, t.De);
            })
            .then(function () {
              t.xe = !0;
            })
            .catch(function (e) {
              return (t.Be && t.Be.close(), Promise.reject(e));
            });
        }),
        (t.prototype.He = function (t) {
          var e = this;
          return (
            (this.Me = function (n) {
              return (0, o.mG)(e, void 0, void 0, function () {
                return (0, o.Jh)(this, function (e) {
                  return this.started ? [2, t(n)] : [2];
                });
              });
            }),
            t(this.isPrimary)
          );
        }),
        (t.prototype.setDatabaseDeletedListener = function (t) {
          var e = this;
          this.Be.vt(function (n) {
            return (0, o.mG)(e, void 0, void 0, function () {
              return (0, o.Jh)(this, function (e) {
                switch (e.label) {
                  case 0:
                    return null === n.newVersion ? [4, t()] : [3, 2];
                  case 1:
                    (e.sent(), (e.label = 2));
                  case 2:
                    return [2];
                }
              });
            });
          });
        }),
        (t.prototype.setNetworkEnabled = function (t) {
          var e = this;
          this.networkEnabled !== t &&
            ((this.networkEnabled = t),
            this.Se.enqueueAndForget(function () {
              return (0, o.mG)(e, void 0, void 0, function () {
                return (0, o.Jh)(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return this.started ? [4, this.je()] : [3, 2];
                    case 1:
                      (t.sent(), (t.label = 2));
                    case 2:
                      return [2];
                  }
                });
              });
            }));
        }),
        (t.prototype.je = function () {
          var t = this;
          return this.runTransaction(
            "updateClientMetadataAndTryBecomePrimary",
            "readwrite",
            function (e) {
              return Yu(e)
                .put(
                  new xa(
                    t.clientId,
                    Date.now(),
                    t.networkEnabled,
                    t.inForeground,
                  ),
                )
                .next(function () {
                  if (t.isPrimary)
                    return t.Je(e).next(function (e) {
                      e ||
                        ((t.isPrimary = !1),
                        t.Se.enqueueRetryable(function () {
                          return t.Me(!1);
                        }));
                    });
                })
                .next(function () {
                  return t.Ye(e);
                })
                .next(function (n) {
                  return t.isPrimary && !n
                    ? t.Xe(e).next(function () {
                        return !1;
                      })
                    : !!n &&
                        t.Ze(e).next(function () {
                          return !0;
                        });
                });
            },
          )
            .catch(function (e) {
              if (Ka(e))
                return (
                  Wr(
                    "IndexedDbPersistence",
                    "Failed to extend owner lease: ",
                    e,
                  ),
                  t.isPrimary
                );
              if (!t.allowTabSynchronization) throw e;
              return (
                Wr(
                  "IndexedDbPersistence",
                  "Releasing owner lease after error during lease refresh",
                  e,
                ),
                !1
              );
            })
            .then(function (e) {
              (t.isPrimary !== e &&
                t.Se.enqueueRetryable(function () {
                  return t.Me(e);
                }),
                (t.isPrimary = e));
            });
        }),
        (t.prototype.Je = function (t) {
          var e = this;
          return Xu(t)
            .get(_a.key)
            .next(function (t) {
              return qa.resolve(e.tn(t));
            });
        }),
        (t.prototype.en = function (t) {
          return Yu(t).delete(this.clientId);
        }),
        (t.prototype.nn = function () {
          return (0, o.mG)(this, void 0, void 0, function () {
            var t,
              e,
              n,
              r,
              i = this;
            return (0, o.Jh)(this, function (o) {
              switch (o.label) {
                case 0:
                  return !this.isPrimary || this.sn(this.Oe, 18e5)
                    ? [3, 2]
                    : ((this.Oe = Date.now()),
                      [
                        4,
                        this.runTransaction(
                          "maybeGarbageCollectMultiClientState",
                          "readwrite-primary",
                          function (t) {
                            var e = Xa(t, xa.store);
                            return e.Nt().next(function (t) {
                              var n = i.rn(t, 18e5),
                                r = t.filter(function (t) {
                                  return -1 === n.indexOf(t);
                                });
                              return qa
                                .forEach(r, function (t) {
                                  return e.delete(t.clientId);
                                })
                                .next(function () {
                                  return r;
                                });
                            });
                          },
                        ).catch(function () {
                          return [];
                        }),
                      ]);
                case 1:
                  if (((t = o.sent()), this.Qe))
                    for (e = 0, n = t; e < n.length; e++)
                      ((r = n[e]), this.Qe.removeItem(this.on(r.clientId)));
                  o.label = 2;
                case 2:
                  return [2];
              }
            });
          });
        }),
        (t.prototype.ze = function () {
          var t = this;
          this.$e = this.Se.enqueueAfterDelay(
            "client_metadata_refresh",
            4e3,
            function () {
              return t
                .je()
                .then(function () {
                  return t.nn();
                })
                .then(function () {
                  return t.ze();
                });
            },
          );
        }),
        (t.prototype.tn = function (t) {
          return !!t && t.ownerId === this.clientId;
        }),
        (t.prototype.Ye = function (t) {
          var e = this;
          return this.Ce
            ? qa.resolve(!0)
            : Xu(t)
                .get(_a.key)
                .next(function (n) {
                  if (
                    null !== n &&
                    e.sn(n.leaseTimestampMs, 5e3) &&
                    !e.cn(n.ownerId)
                  ) {
                    if (e.tn(n) && e.networkEnabled) return !0;
                    if (!e.tn(n)) {
                      if (!n.allowTabSynchronization)
                        throw new Hr(Kr.FAILED_PRECONDITION, Wu);
                      return !1;
                    }
                  }
                  return (
                    !(!e.networkEnabled || !e.inForeground) ||
                    Yu(t)
                      .Nt()
                      .next(function (t) {
                        return (
                          void 0 ===
                          e.rn(t, 5e3).find(function (t) {
                            if (e.clientId !== t.clientId) {
                              var n = !e.networkEnabled && t.networkEnabled,
                                r = !e.inForeground && t.inForeground,
                                i = e.networkEnabled === t.networkEnabled;
                              if (n || (r && i)) return !0;
                            }
                            return !1;
                          })
                        );
                      })
                  );
                })
                .next(function (t) {
                  return (
                    e.isPrimary !== t &&
                      Wr(
                        "IndexedDbPersistence",
                        "Client " +
                          (t ? "is" : "is not") +
                          " eligible for a primary lease.",
                      ),
                    t
                  );
                });
        }),
        (t.prototype.shutdown = function () {
          return (0, o.mG)(this, void 0, void 0, function () {
            var t = this;
            return (0, o.Jh)(this, function (e) {
              switch (e.label) {
                case 0:
                  return (
                    (this.xe = !1),
                    this.un(),
                    this.$e && (this.$e.cancel(), (this.$e = null)),
                    this.an(),
                    this.hn(),
                    [
                      4,
                      this.Be.runTransaction(
                        "shutdown",
                        "readwrite",
                        [_a.store, xa.store],
                        function (e) {
                          var n = new Za(e, zr.o);
                          return t.Xe(n).next(function () {
                            return t.en(n);
                          });
                        },
                      ),
                    ]
                  );
                case 1:
                  return (e.sent(), this.Be.close(), this.ln(), [2]);
              }
            });
          });
        }),
        (t.prototype.rn = function (t, e) {
          var n = this;
          return t.filter(function (t) {
            return n.sn(t.updateTimeMs, e) && !n.cn(t.clientId);
          });
        }),
        (t.prototype.fn = function () {
          var t = this;
          return this.runTransaction(
            "getActiveClients",
            "readonly",
            function (e) {
              return Yu(e)
                .Nt()
                .next(function (e) {
                  return t.rn(e, 18e5).map(function (t) {
                    return t.clientId;
                  });
                });
            },
          );
        }),
        Object.defineProperty(t.prototype, "started", {
          get: function () {
            return this.xe;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.getMutationQueue = function (t) {
          return Eu.Qt(t, this.R, this.Ut, this.referenceDelegate);
        }),
        (t.prototype.getTargetCache = function () {
          return this.qe;
        }),
        (t.prototype.getRemoteDocumentCache = function () {
          return this.Ue;
        }),
        (t.prototype.getIndexManager = function () {
          return this.Ut;
        }),
        (t.prototype.getBundleCache = function () {
          return this.Ke;
        }),
        (t.prototype.runTransaction = function (t, e, n) {
          var r = this;
          Wr("IndexedDbPersistence", "Starting transaction:", t);
          var i,
            o = "readonly" === e ? "readonly" : "readwrite";
          return this.Be.runTransaction(t, o, Ma, function (o) {
            return (
              (i = new Za(o, r.Ne ? r.Ne.next() : zr.o)),
              "readwrite-primary" === e
                ? r
                    .Je(i)
                    .next(function (t) {
                      return !!t || r.Ye(i);
                    })
                    .next(function (e) {
                      if (!e)
                        throw (
                          Zr(
                            "Failed to obtain primary lease for action '" +
                              t +
                              "'.",
                          ),
                          (r.isPrimary = !1),
                          r.Se.enqueueRetryable(function () {
                            return r.Me(!1);
                          }),
                          new Hr(Kr.FAILED_PRECONDITION, Fa)
                        );
                      return n(i);
                    })
                    .next(function (t) {
                      return r.Ze(i).next(function () {
                        return t;
                      });
                    })
                : r.dn(i).next(function () {
                    return n(i);
                  })
            );
          }).then(function (t) {
            return (i.raiseOnCommittedEvent(), t);
          });
        }),
        (t.prototype.dn = function (t) {
          var e = this;
          return Xu(t)
            .get(_a.key)
            .next(function (t) {
              if (
                null !== t &&
                e.sn(t.leaseTimestampMs, 5e3) &&
                !e.cn(t.ownerId) &&
                !e.tn(t) &&
                !(
                  e.Ce ||
                  (e.allowTabSynchronization && t.allowTabSynchronization)
                )
              )
                throw new Hr(Kr.FAILED_PRECONDITION, Wu);
            });
        }),
        (t.prototype.Ze = function (t) {
          var e = new _a(
            this.clientId,
            this.allowTabSynchronization,
            Date.now(),
          );
          return Xu(t).put(_a.key, e);
        }),
        (t.yt = function () {
          return Ba.yt();
        }),
        (t.prototype.Xe = function (t) {
          var e = this,
            n = Xu(t);
          return n.get(_a.key).next(function (t) {
            return e.tn(t)
              ? (Wr("IndexedDbPersistence", "Releasing primary lease."),
                n.delete(_a.key))
              : qa.resolve();
          });
        }),
        (t.prototype.sn = function (t, e) {
          var n = Date.now();
          return !(
            t < n - e ||
            (t > n &&
              (Zr(
                "Detected an update time that is in the future: " +
                  t +
                  " > " +
                  n,
              ),
              1))
          );
        }),
        (t.prototype.We = function () {
          var t = this;
          null !== this.document &&
            "function" == typeof this.document.addEventListener &&
            ((this.Fe = function () {
              t.Se.enqueueAndForget(function () {
                return (
                  (t.inForeground = "visible" === t.document.visibilityState),
                  t.je()
                );
              });
            }),
            this.document.addEventListener("visibilitychange", this.Fe),
            (this.inForeground = "visible" === this.document.visibilityState));
        }),
        (t.prototype.an = function () {
          this.Fe &&
            (this.document.removeEventListener("visibilitychange", this.Fe),
            (this.Fe = null));
        }),
        (t.prototype.Ge = function () {
          var t,
            e = this;
          "function" ==
            typeof (null === (t = this.window) || void 0 === t
              ? void 0
              : t.addEventListener) &&
            ((this.ke = function () {
              (e.un(),
                (0, s.G6)() &&
                  navigator.appVersion.match("Version/14") &&
                  e.Se.enterRestrictedMode(!0),
                e.Se.enqueueAndForget(function () {
                  return e.shutdown();
                }));
            }),
            this.window.addEventListener("pagehide", this.ke));
        }),
        (t.prototype.hn = function () {
          this.ke &&
            (this.window.removeEventListener("pagehide", this.ke),
            (this.ke = null));
        }),
        (t.prototype.cn = function (t) {
          var e;
          try {
            var n =
              null !==
              (null === (e = this.Qe) || void 0 === e
                ? void 0
                : e.getItem(this.on(t)));
            return (
              Wr(
                "IndexedDbPersistence",
                "Client '" +
                  t +
                  "' " +
                  (n ? "is" : "is not") +
                  " zombied in LocalStorage",
              ),
              n
            );
          } catch (t) {
            return (
              Zr("IndexedDbPersistence", "Failed to get zombied client id.", t),
              !1
            );
          }
        }),
        (t.prototype.un = function () {
          if (this.Qe)
            try {
              this.Qe.setItem(this.on(this.clientId), String(Date.now()));
            } catch (t) {
              Zr("Failed to set zombie client id.", t);
            }
        }),
        (t.prototype.ln = function () {
          if (this.Qe)
            try {
              this.Qe.removeItem(this.on(this.clientId));
            } catch (t) {}
        }),
        (t.prototype.on = function (t) {
          return "firestore_zombie_" + this.persistenceKey + "_" + t;
        }),
        t
      );
    })();
  function Xu(t) {
    return Xa(t, _a.store);
  }
  function Yu(t) {
    return Xa(t, xa.store);
  }
  function $u(t, e) {
    var n = t.projectId;
    return (
      t.isDefaultDatabase || (n += "." + t.database),
      "firestore/" + e + "/" + n + "/"
    );
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
  }
  var tc = function (t, e) {
      ((this.progress = t), (this.wn = e));
    },
    ec = (function () {
      function t(t, e, n) {
        ((this.Ue = t), (this._n = e), (this.Ut = n));
      }
      return (
        (t.prototype.mn = function (t, e) {
          var n = this;
          return this._n
            .getAllMutationBatchesAffectingDocumentKey(t, e)
            .next(function (r) {
              return n.yn(t, e, r);
            });
        }),
        (t.prototype.yn = function (t, e, n) {
          return this.Ue.getEntry(t, e).next(function (t) {
            for (var e = 0, r = n; e < r.length; e++) r[e].applyToLocalView(t);
            return t;
          });
        }),
        (t.prototype.gn = function (t, e) {
          t.forEach(function (t, n) {
            for (var r = 0, i = e; r < i.length; r++) i[r].applyToLocalView(n);
          });
        }),
        (t.prototype.pn = function (t, e) {
          var n = this;
          return this.Ue.getEntries(t, e).next(function (e) {
            return n.En(t, e).next(function () {
              return e;
            });
          });
        }),
        (t.prototype.En = function (t, e) {
          var n = this;
          return this._n
            .getAllMutationBatchesAffectingDocumentKeys(t, e)
            .next(function (t) {
              return n.gn(e, t);
            });
        }),
        (t.prototype.getDocumentsMatchingQuery = function (t, e, n) {
          return (function (t) {
            return (
              Ni.isDocumentKey(t.path) &&
              null === t.collectionGroup &&
              0 === t.filters.length
            );
          })(e)
            ? this.Tn(t, e.path)
            : wo(e)
              ? this.In(t, e, n)
              : this.An(t, e, n);
        }),
        (t.prototype.Tn = function (t, e) {
          return this.mn(t, new Ni(e)).next(function (t) {
            var e = _s();
            return (t.isFoundDocument() && (e = e.insert(t.key, t)), e);
          });
        }),
        (t.prototype.In = function (t, e, n) {
          var r = this,
            i = e.collectionGroup,
            o = _s();
          return this.Ut.getCollectionParents(t, i).next(function (s) {
            return qa
              .forEach(s, function (s) {
                var a = (function (t, e) {
                  return new fo(
                    e,
                    null,
                    t.explicitOrderBy.slice(),
                    t.filters.slice(),
                    t.limit,
                    t.limitType,
                    t.startAt,
                    t.endAt,
                  );
                })(e, s.child(i));
                return r.An(t, a, n).next(function (t) {
                  t.forEach(function (t, e) {
                    o = o.insert(t, e);
                  });
                });
              })
              .next(function () {
                return o;
              });
          });
        }),
        (t.prototype.An = function (t, e, n) {
          var r,
            i,
            o = this;
          return this.Ue.getDocumentsMatchingQuery(t, e, n)
            .next(function (n) {
              return ((r = n), o._n.getAllMutationBatchesAffectingQuery(t, e));
            })
            .next(function (e) {
              return (
                (i = e),
                o.Rn(t, i, r).next(function (t) {
                  r = t;
                  for (var e = 0, n = i; e < n.length; e++)
                    for (
                      var o = n[e], s = 0, a = o.mutations;
                      s < a.length;
                      s++
                    ) {
                      var u = a[s],
                        c = u.key,
                        h = r.get(c);
                      (null == h &&
                        ((h = Ki.newInvalidDocument(c)), (r = r.insert(c, h))),
                        Xo(u, h, o.localWriteTime),
                        h.isFoundDocument() || (r = r.remove(c)));
                    }
                })
              );
            })
            .next(function () {
              return (
                r.forEach(function (t, n) {
                  ko(e, n) || (r = r.remove(t));
                }),
                r
              );
            });
        }),
        (t.prototype.Rn = function (t, e, n) {
          for (var r = Ss(), i = 0, o = e; i < o.length; i++)
            for (var s = 0, a = o[i].mutations; s < a.length; s++) {
              var u = a[s];
              u instanceof ns && null === n.get(u.key) && (r = r.add(u.key));
            }
          var c = n;
          return this.Ue.getEntries(t, r).next(function (t) {
            return (
              t.forEach(function (t, e) {
                e.isFoundDocument() && (c = c.insert(t, e));
              }),
              c
            );
          });
        }),
        t
      );
    })(),
    nc = (function () {
      function t(t, e, n, r) {
        ((this.targetId = t),
          (this.fromCache = e),
          (this.bn = n),
          (this.vn = r));
      }
      return (
        (t.Pn = function (e, n) {
          for (
            var r = Ss(), i = Ss(), o = 0, s = n.docChanges;
            o < s.length;
            o++
          ) {
            var a = s[o];
            switch (a.type) {
              case 0:
                r = r.add(a.doc.key);
                break;
              case 1:
                i = i.add(a.doc.key);
            }
          }
          return new t(e, n.fromCache, r, i);
        }),
        t
      );
    })(),
    rc = (function () {
      function t() {}
      return (
        (t.prototype.Vn = function (t) {
          this.Sn = t;
        }),
        (t.prototype.getDocumentsMatchingQuery = function (t, e, n, r) {
          var i = this;
          return (function (t) {
            return (
              0 === t.filters.length &&
              null === t.limit &&
              null == t.startAt &&
              null == t.endAt &&
              (0 === t.explicitOrderBy.length ||
                (1 === t.explicitOrderBy.length &&
                  t.explicitOrderBy[0].field.isKeyField()))
            );
          })(e) || n.isEqual(ui.min())
            ? this.Dn(t, e)
            : this.Sn.pn(t, r).next(function (o) {
                var s = i.Cn(e, o);
                return (go(e) || yo(e)) && i.Nn(e.limitType, s, r, n)
                  ? i.Dn(t, e)
                  : (Qr() <= a["in"].DEBUG &&
                      Wr(
                        "QueryEngine",
                        "Re-using previous result from %s to execute query: %s",
                        n.toString(),
                        Ao(e),
                      ),
                    i.Sn.getDocumentsMatchingQuery(t, e, n).next(function (t) {
                      return (
                        s.forEach(function (e) {
                          t = t.insert(e.key, e);
                        }),
                        t
                      );
                    }));
              });
        }),
        (t.prototype.Cn = function (t, e) {
          var n = new gs(No(t));
          return (
            e.forEach(function (e, r) {
              ko(t, r) && (n = n.add(r));
            }),
            n
          );
        }),
        (t.prototype.Nn = function (t, e, n, r) {
          if (n.size !== e.size) return !0;
          var i = "F" === t ? e.last() : e.first();
          return !!i && (i.hasPendingWrites || i.version.compareTo(r) > 0);
        }),
        (t.prototype.Dn = function (t, e) {
          return (
            Qr() <= a["in"].DEBUG &&
              Wr(
                "QueryEngine",
                "Using full collection scan to execute query:",
                Ao(e),
              ),
            this.Sn.getDocumentsMatchingQuery(t, e, ui.min())
          );
        }),
        t
      );
    })(),
    ic = (function () {
      function t(t, e, n, r) {
        ((this.persistence = t),
          (this.xn = e),
          (this.R = r),
          (this.kn = new ps(ii)),
          (this.Fn = new qu(function (t) {
            return Qi(t);
          }, Wi)),
          (this.$n = ui.min()),
          (this._n = t.getMutationQueue(n)),
          (this.On = t.getRemoteDocumentCache()),
          (this.qe = t.getTargetCache()),
          (this.Mn = new ec(
            this.On,
            this._n,
            this.persistence.getIndexManager(),
          )),
          (this.Ke = t.getBundleCache()),
          this.xn.Vn(this.Mn));
      }
      return (
        (t.prototype.collectGarbage = function (t) {
          var e = this;
          return this.persistence.runTransaction(
            "Collect garbage",
            "readwrite-primary",
            function (n) {
              return t.collect(n, e.kn);
            },
          );
        }),
        t
      );
    })();
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ function oc(t, e, n, r) {
    return new ic(t, e, n, r);
  }
  function sc(t, e) {
    return (0, o.mG)(this, void 0, void 0, function () {
      var n, r, i, s;
      return (0, o.Jh)(this, function (o) {
        switch (o.label) {
          case 0:
            return (
              (n = ei(t)),
              (r = n._n),
              (i = n.Mn),
              [
                4,
                n.persistence.runTransaction(
                  "Handle user change",
                  "readonly",
                  function (t) {
                    var o;
                    return n._n
                      .getAllMutationBatches(t)
                      .next(function (s) {
                        return (
                          (o = s),
                          (r = n.persistence.getMutationQueue(e)),
                          (i = new ec(
                            n.On,
                            r,
                            n.persistence.getIndexManager(),
                          )),
                          r.getAllMutationBatches(t)
                        );
                      })
                      .next(function (e) {
                        for (
                          var n = [], r = [], s = Ss(), a = 0, u = o;
                          a < u.length;
                          a++
                        ) {
                          var c = u[a];
                          n.push(c.batchId);
                          for (var h = 0, l = c.mutations; h < l.length; h++) {
                            var f = l[h];
                            s = s.add(f.key);
                          }
                        }
                        for (var p = 0, d = e; p < d.length; p++) {
                          var v = d[p];
                          r.push(v.batchId);
                          for (var g = 0, y = v.mutations; g < y.length; g++) {
                            var m = y[g];
                            s = s.add(m.key);
                          }
                        }
                        return i.pn(t, s).next(function (t) {
                          return {
                            Ln: t,
                            removedBatchIds: n,
                            addedBatchIds: r,
                          };
                        });
                      });
                  },
                ),
              ]
            );
          case 1:
            return (
              (s = o.sent()),
              [2, ((n._n = r), (n.Mn = i), n.xn.Vn(n.Mn), s)]
            );
        }
      });
    });
  }
  function ac(t, e) {
    var n = ei(t);
    return n.persistence.runTransaction(
      "Acknowledge batch",
      "readwrite-primary",
      function (t) {
        var r = e.batch.keys(),
          i = n.On.newChangeBuffer({ trackRemovals: !0 });
        return (function (t, e, n, r) {
          var i = n.batch,
            o = i.keys(),
            s = qa.resolve();
          return (
            o.forEach(function (t) {
              s = s
                .next(function () {
                  return r.getEntry(e, t);
                })
                .next(function (e) {
                  var o = n.docVersions.get(t);
                  (ti(null !== o),
                    e.version.compareTo(o) < 0 &&
                      (i.applyToRemoteDocument(e, n),
                      e.isValidDocument() && r.addEntry(e, n.commitVersion)));
                });
            }),
            s.next(function () {
              return t._n.removeMutationBatch(e, i);
            })
          );
        })(n, t, e, i)
          .next(function () {
            return i.apply(t);
          })
          .next(function () {
            return n._n.performConsistencyCheck(t);
          })
          .next(function () {
            return n.Mn.pn(t, r);
          });
      },
    );
  }
  function uc(t) {
    var e = ei(t);
    return e.persistence.runTransaction(
      "Get last remote snapshot version",
      "readonly",
      function (t) {
        return e.qe.getLastRemoteSnapshotVersion(t);
      },
    );
  }
  function cc(t, e) {
    var n = ei(t),
      r = e.snapshotVersion,
      i = n.kn;
    return n.persistence
      .runTransaction("Apply remote event", "readwrite-primary", function (t) {
        var o = n.On.newChangeBuffer({ trackRemovals: !0 });
        i = n.kn;
        var s = [];
        e.targetChanges.forEach(function (e, o) {
          var a = i.get(o);
          if (a) {
            s.push(
              n.qe
                .removeMatchingKeys(t, e.removedDocuments, o)
                .next(function () {
                  return n.qe.addMatchingKeys(t, e.addedDocuments, o);
                }),
            );
            var u = e.resumeToken;
            if (u.approximateByteSize() > 0) {
              var c = a
                .withResumeToken(u, r)
                .withSequenceNumber(t.currentSequenceNumber);
              ((i = i.insert(o, c)),
                (function (t, e, n) {
                  return (
                    ti(e.resumeToken.approximateByteSize() > 0),
                    0 === t.resumeToken.approximateByteSize() ||
                      e.snapshotVersion.toMicroseconds() -
                        t.snapshotVersion.toMicroseconds() >=
                        3e8 ||
                      n.addedDocuments.size +
                        n.modifiedDocuments.size +
                        n.removedDocuments.size >
                        0
                  );
                })(a, c, e) && s.push(n.qe.updateTargetData(t, c)));
            }
          }
        });
        var a = bs();
        if (
          (e.documentUpdates.forEach(function (r, i) {
            e.resolvedLimboDocuments.has(r) &&
              s.push(n.persistence.referenceDelegate.updateLimboDocument(t, r));
          }),
          s.push(
            hc(t, o, e.documentUpdates, r, void 0).next(function (t) {
              a = t;
            }),
          ),
          !r.isEqual(ui.min()))
        ) {
          var u = n.qe.getLastRemoteSnapshotVersion(t).next(function (e) {
            return n.qe.setTargetsMetadata(t, t.currentSequenceNumber, r);
          });
          s.push(u);
        }
        return qa
          .waitFor(s)
          .next(function () {
            return o.apply(t);
          })
          .next(function () {
            return n.Mn.En(t, a);
          })
          .next(function () {
            return a;
          });
      })
      .then(function (t) {
        return ((n.kn = i), t);
      });
  }
  function hc(t, e, n, r, i) {
    var o = Ss();
    return (
      n.forEach(function (t) {
        return (o = o.add(t));
      }),
      e.getEntries(t, o).next(function (t) {
        var o = bs();
        return (
          n.forEach(function (n, s) {
            var a = t.get(n),
              u = (null == i ? void 0 : i.get(n)) || r;
            s.isNoDocument() && s.version.isEqual(ui.min())
              ? (e.removeEntry(n, u), (o = o.insert(n, s)))
              : !a.isValidDocument() ||
                  s.version.compareTo(a.version) > 0 ||
                  (0 === s.version.compareTo(a.version) && a.hasPendingWrites)
                ? (e.addEntry(s, u), (o = o.insert(n, s)))
                : Wr(
                    "LocalStore",
                    "Ignoring outdated watch update for ",
                    n,
                    ". Current version:",
                    a.version,
                    " Watch version:",
                    s.version,
                  );
          }),
          o
        );
      })
    );
  }
  function lc(t, e) {
    var n = ei(t);
    return n.persistence.runTransaction(
      "Get next mutation batch",
      "readonly",
      function (t) {
        return (
          void 0 === e && (e = -1),
          n._n.getNextMutationBatchAfterBatchId(t, e)
        );
      },
    );
  }
  function fc(t, e) {
    var n = ei(t);
    return n.persistence
      .runTransaction("Allocate target", "readwrite", function (t) {
        var r;
        return n.qe.getTargetData(t, e).next(function (i) {
          return i
            ? ((r = i), qa.resolve(r))
            : n.qe.allocateTargetId(t).next(function (i) {
                return (
                  (r = new tu(e, i, 0, t.currentSequenceNumber)),
                  n.qe.addTargetData(t, r).next(function () {
                    return r;
                  })
                );
              });
        });
      })
      .then(function (t) {
        var r = n.kn.get(t.targetId);
        return (
          (null === r || t.snapshotVersion.compareTo(r.snapshotVersion) > 0) &&
            ((n.kn = n.kn.insert(t.targetId, t)), n.Fn.set(e, t.targetId)),
          t
        );
      });
  }
  function pc(t, e, n) {
    return (0, o.mG)(this, void 0, void 0, function () {
      var r, i, s, a;
      return (0, o.Jh)(this, function (o) {
        switch (o.label) {
          case 0:
            ((r = ei(t)),
              (i = r.kn.get(e)),
              (s = n ? "readwrite" : "readwrite-primary"),
              (o.label = 1));
          case 1:
            return (
              o.trys.push([1, 4, , 5]),
              n
                ? [3, 3]
                : [
                    4,
                    r.persistence.runTransaction(
                      "Release target",
                      s,
                      function (t) {
                        return r.persistence.referenceDelegate.removeTarget(
                          t,
                          i,
                        );
                      },
                    ),
                  ]
            );
          case 2:
            (o.sent(), (o.label = 3));
          case 3:
            return [3, 5];
          case 4:
            if (!Ka((a = o.sent()))) throw a;
            return (
              Wr(
                "LocalStore",
                "Failed to update sequence numbers for target " + e + ": " + a,
              ),
              [3, 5]
            );
          case 5:
            return ((r.kn = r.kn.remove(e)), r.Fn.delete(i.target), [2]);
        }
      });
    });
  }
  function dc(t, e, n) {
    var r = ei(t),
      i = ui.min(),
      o = Ss();
    return r.persistence.runTransaction(
      "Execute query",
      "readonly",
      function (t) {
        return (function (t, e, n) {
          var r = ei(t),
            i = r.Fn.get(n);
          return void 0 !== i
            ? qa.resolve(r.kn.get(i))
            : r.qe.getTargetData(e, n);
        })(r, t, To(e))
          .next(function (e) {
            if (e)
              return (
                (i = e.lastLimboFreeSnapshotVersion),
                r.qe
                  .getMatchingKeysForTargetId(t, e.targetId)
                  .next(function (t) {
                    o = t;
                  })
              );
          })
          .next(function () {
            return r.xn.getDocumentsMatchingQuery(
              t,
              e,
              n ? i : ui.min(),
              n ? o : Ss(),
            );
          })
          .next(function (t) {
            return { documents: t, Bn: o };
          });
      },
    );
  }
  function vc(t, e) {
    var n = ei(t),
      r = ei(n.qe),
      i = n.kn.get(e);
    return i
      ? Promise.resolve(i.target)
      : n.persistence.runTransaction(
          "Get target data",
          "readonly",
          function (t) {
            return r.lt(t, e).next(function (t) {
              return t ? t.target : null;
            });
          },
        );
  }
  function gc(t) {
    var e = ei(t);
    return e.persistence
      .runTransaction("Get new document changes", "readonly", function (t) {
        return (function (t, e, n) {
          var r = ei(t),
            i = bs(),
            o = iu(n),
            s = Ku(e),
            a = IDBKeyRange.lowerBound(o, !0);
          return s
            .$t({ index: ka.readTimeIndex, range: a }, function (t, e) {
              var n = nu(r.R, e);
              ((i = i.insert(n.key, n)), (o = e.readTime));
            })
            .next(function () {
              return { wn: i, readTime: ou(o) };
            });
        })(e.On, t, e.$n);
      })
      .then(function (t) {
        var n = t.wn,
          r = t.readTime;
        return ((e.$n = r), n);
      });
  }
  function yc(t) {
    return (0, o.mG)(this, void 0, void 0, function () {
      var e;
      return (0, o.Jh)(this, function (n) {
        return [
          2,
          (e = ei(t)).persistence
            .runTransaction(
              "Synchronize last document change read time",
              "readonly",
              function (t) {
                return (function (t) {
                  var e = Ku(t),
                    n = ui.min();
                  return e
                    .$t(
                      { index: ka.readTimeIndex, reverse: !0 },
                      function (t, e, r) {
                        (e.readTime && (n = ou(e.readTime)), r.done());
                      },
                    )
                    .next(function () {
                      return n;
                    });
                })(t);
              },
            )
            .then(function (t) {
              e.$n = t;
            }),
        ];
      });
    });
  }
  function mc(t, e, n, r) {
    return (0, o.mG)(this, void 0, void 0, function () {
      var i, s, a, u, c, h, l, f, p, d;
      return (0, o.Jh)(this, function (o) {
        switch (o.label) {
          case 0:
            for (
              i = ei(t), s = Ss(), a = bs(), u = Es(), c = 0, h = n;
              c < h.length;
              c++
            )
              ((l = h[c]),
                (f = e.qn(l.metadata.name)),
                l.document && (s = s.add(f)),
                (a = a.insert(f, e.Un(l))),
                (u = u.insert(f, e.Kn(l.metadata.readTime))));
            return (
              (p = i.On.newChangeBuffer({ trackRemovals: !0 })),
              [
                4,
                fc(
                  i,
                  (function (t) {
                    return To(vo(pi.fromString("__bundle__/docs/" + t)));
                  })(r),
                ),
              ]
            );
          case 1:
            return (
              (d = o.sent()),
              [
                2,
                i.persistence.runTransaction(
                  "Apply bundle documents",
                  "readwrite",
                  function (t) {
                    return hc(t, p, a, ui.min(), u)
                      .next(function (e) {
                        return (p.apply(t), e);
                      })
                      .next(function (e) {
                        return i.qe
                          .removeMatchingKeysForTargetId(t, d.targetId)
                          .next(function () {
                            return i.qe.addMatchingKeys(t, s, d.targetId);
                          })
                          .next(function () {
                            return i.Mn.En(t, e);
                          })
                          .next(function () {
                            return e;
                          });
                      });
                  },
                ),
              ]
            );
        }
      });
    });
  }
  function bc(t, e, n) {
    return (
      void 0 === n && (n = Ss()),
      (0, o.mG)(this, void 0, void 0, function () {
        var r, i;
        return (0, o.Jh)(this, function (o) {
          switch (o.label) {
            case 0:
              return [4, fc(t, To(lu(e.bundledQuery)))];
            case 1:
              return (
                (r = o.sent()),
                [
                  2,
                  (i = ei(t)).persistence.runTransaction(
                    "Save named query",
                    "readwrite",
                    function (t) {
                      var o = Gs(e.readTime);
                      if (r.snapshotVersion.compareTo(o) >= 0)
                        return i.Ke.saveNamedQuery(t, e);
                      var s = r.withResumeToken(yi.EMPTY_BYTE_STRING, o);
                      return (
                        (i.kn = i.kn.insert(s.targetId, s)),
                        i.qe
                          .updateTargetData(t, s)
                          .next(function () {
                            return i.qe.removeMatchingKeysForTargetId(
                              t,
                              r.targetId,
                            );
                          })
                          .next(function () {
                            return i.qe.addMatchingKeys(t, n, r.targetId);
                          })
                          .next(function () {
                            return i.Ke.saveNamedQuery(t, e);
                          })
                      );
                    },
                  ),
                ]
              );
          }
        });
      })
    );
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
  }
  var wc = (function () {
      function t(t) {
        ((this.R = t), (this.Qn = new Map()), (this.jn = new Map()));
      }
      return (
        (t.prototype.getBundleMetadata = function (t, e) {
          return qa.resolve(this.Qn.get(e));
        }),
        (t.prototype.saveBundleMetadata = function (t, e) {
          var n;
          return (
            this.Qn.set(e.id, {
              id: (n = e).id,
              version: n.version,
              createTime: Gs(n.createTime),
            }),
            qa.resolve()
          );
        }),
        (t.prototype.getNamedQuery = function (t, e) {
          return qa.resolve(this.jn.get(e));
        }),
        (t.prototype.saveNamedQuery = function (t, e) {
          return (
            this.jn.set(
              e.name,
              (function (t) {
                return {
                  name: t.name,
                  query: lu(t.bundledQuery),
                  readTime: Gs(t.readTime),
                };
              })(e),
            ),
            qa.resolve()
          );
        }),
        t
      );
    })(),
    _c = (function () {
      function t() {
        ((this.Wn = new gs(Tc.Gn)), (this.zn = new gs(Tc.Hn)));
      }
      return (
        (t.prototype.isEmpty = function () {
          return this.Wn.isEmpty();
        }),
        (t.prototype.addReference = function (t, e) {
          var n = new Tc(t, e);
          ((this.Wn = this.Wn.add(n)), (this.zn = this.zn.add(n)));
        }),
        (t.prototype.Jn = function (t, e) {
          var n = this;
          t.forEach(function (t) {
            return n.addReference(t, e);
          });
        }),
        (t.prototype.removeReference = function (t, e) {
          this.Yn(new Tc(t, e));
        }),
        (t.prototype.Xn = function (t, e) {
          var n = this;
          t.forEach(function (t) {
            return n.removeReference(t, e);
          });
        }),
        (t.prototype.Zn = function (t) {
          var e = this,
            n = new Ni(new pi([])),
            r = new Tc(n, t),
            i = new Tc(n, t + 1),
            o = [];
          return (
            this.zn.forEachInRange([r, i], function (t) {
              (e.Yn(t), o.push(t.key));
            }),
            o
          );
        }),
        (t.prototype.ts = function () {
          var t = this;
          this.Wn.forEach(function (e) {
            return t.Yn(e);
          });
        }),
        (t.prototype.Yn = function (t) {
          ((this.Wn = this.Wn.delete(t)), (this.zn = this.zn.delete(t)));
        }),
        (t.prototype.es = function (t) {
          var e = new Ni(new pi([])),
            n = new Tc(e, t),
            r = new Tc(e, t + 1),
            i = Ss();
          return (
            this.zn.forEachInRange([n, r], function (t) {
              i = i.add(t.key);
            }),
            i
          );
        }),
        (t.prototype.containsKey = function (t) {
          var e = new Tc(t, 0),
            n = this.Wn.firstAfterOrEqual(e);
          return null !== n && t.isEqual(n.key);
        }),
        t
      );
    })(),
    Tc = (function () {
      function t(t, e) {
        ((this.key = t), (this.ns = e));
      }
      return (
        (t.Gn = function (t, e) {
          return Ni.comparator(t.key, e.key) || ii(t.ns, e.ns);
        }),
        (t.Hn = function (t, e) {
          return ii(t.ns, e.ns) || Ni.comparator(t.key, e.key);
        }),
        t
      );
    })(),
    Ec = (function () {
      function t(t, e) {
        ((this.Ut = t),
          (this.referenceDelegate = e),
          (this._n = []),
          (this.ss = 1),
          (this.rs = new gs(Tc.Gn)));
      }
      return (
        (t.prototype.checkEmpty = function (t) {
          return qa.resolve(0 === this._n.length);
        }),
        (t.prototype.addMutationBatch = function (t, e, n, r) {
          var i = this.ss;
          (this.ss++, this._n.length > 0 && this._n[this._n.length - 1]);
          var o = new Ya(i, e, n, r);
          this._n.push(o);
          for (var s = 0, a = r; s < a.length; s++) {
            var u = a[s];
            ((this.rs = this.rs.add(new Tc(u.key, i))),
              this.Ut.addToCollectionParentIndex(t, u.key.path.popLast()));
          }
          return qa.resolve(o);
        }),
        (t.prototype.lookupMutationBatch = function (t, e) {
          return qa.resolve(this.os(e));
        }),
        (t.prototype.getNextMutationBatchAfterBatchId = function (t, e) {
          var n = e + 1,
            r = this.cs(n),
            i = r < 0 ? 0 : r;
          return qa.resolve(this._n.length > i ? this._n[i] : null);
        }),
        (t.prototype.getHighestUnacknowledgedBatchId = function () {
          return qa.resolve(0 === this._n.length ? -1 : this.ss - 1);
        }),
        (t.prototype.getAllMutationBatches = function (t) {
          return qa.resolve(this._n.slice());
        }),
        (t.prototype.getAllMutationBatchesAffectingDocumentKey = function (
          t,
          e,
        ) {
          var n = this,
            r = new Tc(e, 0),
            i = new Tc(e, Number.POSITIVE_INFINITY),
            o = [];
          return (
            this.rs.forEachInRange([r, i], function (t) {
              var e = n.os(t.ns);
              o.push(e);
            }),
            qa.resolve(o)
          );
        }),
        (t.prototype.getAllMutationBatchesAffectingDocumentKeys = function (
          t,
          e,
        ) {
          var n = this,
            r = new gs(ii);
          return (
            e.forEach(function (t) {
              var e = new Tc(t, 0),
                i = new Tc(t, Number.POSITIVE_INFINITY);
              n.rs.forEachInRange([e, i], function (t) {
                r = r.add(t.ns);
              });
            }),
            qa.resolve(this.us(r))
          );
        }),
        (t.prototype.getAllMutationBatchesAffectingQuery = function (t, e) {
          var n = e.path,
            r = n.length + 1,
            i = n;
          Ni.isDocumentKey(i) || (i = i.child(""));
          var o = new Tc(new Ni(i), 0),
            s = new gs(ii);
          return (
            this.rs.forEachWhile(function (t) {
              var e = t.key.path;
              return (
                !!n.isPrefixOf(e) && (e.length === r && (s = s.add(t.ns)), !0)
              );
            }, o),
            qa.resolve(this.us(s))
          );
        }),
        (t.prototype.us = function (t) {
          var e = this,
            n = [];
          return (
            t.forEach(function (t) {
              var r = e.os(t);
              null !== r && n.push(r);
            }),
            n
          );
        }),
        (t.prototype.removeMutationBatch = function (t, e) {
          var n = this;
          (ti(0 === this.hs(e.batchId, "removed")), this._n.shift());
          var r = this.rs;
          return qa
            .forEach(e.mutations, function (i) {
              var o = new Tc(i.key, e.batchId);
              return (
                (r = r.delete(o)),
                n.referenceDelegate.markPotentiallyOrphaned(t, i.key)
              );
            })
            .next(function () {
              n.rs = r;
            });
        }),
        (t.prototype.Gt = function (t) {}),
        (t.prototype.containsKey = function (t, e) {
          var n = new Tc(e, 0),
            r = this.rs.firstAfterOrEqual(n);
          return qa.resolve(e.isEqual(r && r.key));
        }),
        (t.prototype.performConsistencyCheck = function (t) {
          return (this._n.length, qa.resolve());
        }),
        (t.prototype.hs = function (t, e) {
          return this.cs(t);
        }),
        (t.prototype.cs = function (t) {
          return 0 === this._n.length ? 0 : t - this._n[0].batchId;
        }),
        (t.prototype.os = function (t) {
          var e = this.cs(t);
          return e < 0 || e >= this._n.length ? null : this._n[e];
        }),
        t
      );
    })(),
    Ic = (function () {
      function t(t, e) {
        ((this.Ut = t),
          (this.ls = e),
          (this.docs = new ps(Ni.comparator)),
          (this.size = 0));
      }
      return (
        (t.prototype.addEntry = function (t, e, n) {
          var r = e.key,
            i = this.docs.get(r),
            o = i ? i.size : 0,
            s = this.ls(e);
          return (
            (this.docs = this.docs.insert(r, {
              document: e.clone(),
              size: s,
              readTime: n,
            })),
            (this.size += s - o),
            this.Ut.addToCollectionParentIndex(t, r.path.popLast())
          );
        }),
        (t.prototype.removeEntry = function (t) {
          var e = this.docs.get(t);
          e && ((this.docs = this.docs.remove(t)), (this.size -= e.size));
        }),
        (t.prototype.getEntry = function (t, e) {
          var n = this.docs.get(e);
          return qa.resolve(n ? n.document.clone() : Ki.newInvalidDocument(e));
        }),
        (t.prototype.getEntries = function (t, e) {
          var n = this,
            r = bs();
          return (
            e.forEach(function (t) {
              var e = n.docs.get(t);
              r = r.insert(
                t,
                e ? e.document.clone() : Ki.newInvalidDocument(t),
              );
            }),
            qa.resolve(r)
          );
        }),
        (t.prototype.getDocumentsMatchingQuery = function (t, e, n) {
          for (
            var r = bs(),
              i = new Ni(e.path.child("")),
              o = this.docs.getIteratorFrom(i);
            o.hasNext();
          ) {
            var s = o.getNext(),
              a = s.key,
              u = s.value,
              c = u.document,
              h = u.readTime;
            if (!e.path.isPrefixOf(a.path)) break;
            h.compareTo(n) <= 0 ||
              (ko(e, c) && (r = r.insert(c.key, c.clone())));
          }
          return qa.resolve(r);
        }),
        (t.prototype.fs = function (t, e) {
          return qa.forEach(this.docs, function (t) {
            return e(t);
          });
        }),
        (t.prototype.newChangeBuffer = function (t) {
          return new Sc(this);
        }),
        (t.prototype.getSize = function (t) {
          return qa.resolve(this.size);
        }),
        t
      );
    })(),
    Sc = (function (t) {
      function e(e) {
        var n = this;
        return (((n = t.call(this) || this).Ie = e), n);
      }
      return (
        (0, o.ZT)(e, t),
        (e.prototype.applyChanges = function (t) {
          var e = this,
            n = [];
          return (
            this.changes.forEach(function (r, i) {
              i.document.isValidDocument()
                ? n.push(e.Ie.addEntry(t, i.document, e.getReadTime(r)))
                : e.Ie.removeEntry(r);
            }),
            qa.waitFor(n)
          );
        }),
        (e.prototype.getFromCache = function (t, e) {
          return this.Ie.getEntry(t, e);
        }),
        (e.prototype.getAllFromCache = function (t, e) {
          return this.Ie.getEntries(t, e);
        }),
        e
      );
    })(ju),
    Ac = (function () {
      function t(t) {
        ((this.persistence = t),
          (this.ds = new qu(function (t) {
            return Qi(t);
          }, Wi)),
          (this.lastRemoteSnapshotVersion = ui.min()),
          (this.highestTargetId = 0),
          (this.ws = 0),
          (this._s = new _c()),
          (this.targetCount = 0),
          (this.ys = Nu.Jt()));
      }
      return (
        (t.prototype.forEachTarget = function (t, e) {
          return (
            this.ds.forEach(function (t, n) {
              return e(n);
            }),
            qa.resolve()
          );
        }),
        (t.prototype.getLastRemoteSnapshotVersion = function (t) {
          return qa.resolve(this.lastRemoteSnapshotVersion);
        }),
        (t.prototype.getHighestSequenceNumber = function (t) {
          return qa.resolve(this.ws);
        }),
        (t.prototype.allocateTargetId = function (t) {
          return (
            (this.highestTargetId = this.ys.next()),
            qa.resolve(this.highestTargetId)
          );
        }),
        (t.prototype.setTargetsMetadata = function (t, e, n) {
          return (
            n && (this.lastRemoteSnapshotVersion = n),
            e > this.ws && (this.ws = e),
            qa.resolve()
          );
        }),
        (t.prototype.te = function (t) {
          this.ds.set(t.target, t);
          var e = t.targetId;
          (e > this.highestTargetId &&
            ((this.ys = new Nu(e)), (this.highestTargetId = e)),
            t.sequenceNumber > this.ws && (this.ws = t.sequenceNumber));
        }),
        (t.prototype.addTargetData = function (t, e) {
          return (this.te(e), (this.targetCount += 1), qa.resolve());
        }),
        (t.prototype.updateTargetData = function (t, e) {
          return (this.te(e), qa.resolve());
        }),
        (t.prototype.removeTargetData = function (t, e) {
          return (
            this.ds.delete(e.target),
            this._s.Zn(e.targetId),
            (this.targetCount -= 1),
            qa.resolve()
          );
        }),
        (t.prototype.removeTargets = function (t, e, n) {
          var r = this,
            i = 0,
            o = [];
          return (
            this.ds.forEach(function (s, a) {
              a.sequenceNumber <= e &&
                null === n.get(a.targetId) &&
                (r.ds.delete(s),
                o.push(r.removeMatchingKeysForTargetId(t, a.targetId)),
                i++);
            }),
            qa.waitFor(o).next(function () {
              return i;
            })
          );
        }),
        (t.prototype.getTargetCount = function (t) {
          return qa.resolve(this.targetCount);
        }),
        (t.prototype.getTargetData = function (t, e) {
          var n = this.ds.get(e) || null;
          return qa.resolve(n);
        }),
        (t.prototype.addMatchingKeys = function (t, e, n) {
          return (this._s.Jn(e, n), qa.resolve());
        }),
        (t.prototype.removeMatchingKeys = function (t, e, n) {
          this._s.Xn(e, n);
          var r = this.persistence.referenceDelegate,
            i = [];
          return (
            r &&
              e.forEach(function (e) {
                i.push(r.markPotentiallyOrphaned(t, e));
              }),
            qa.waitFor(i)
          );
        }),
        (t.prototype.removeMatchingKeysForTargetId = function (t, e) {
          return (this._s.Zn(e), qa.resolve());
        }),
        (t.prototype.getMatchingKeysForTargetId = function (t, e) {
          var n = this._s.es(e);
          return qa.resolve(n);
        }),
        (t.prototype.containsKey = function (t, e) {
          return qa.resolve(this._s.containsKey(e));
        }),
        t
      );
    })(),
    kc = (function () {
      function t(t, e) {
        var n = this;
        ((this.gs = {}),
          (this.Ne = new zr(0)),
          (this.xe = !1),
          (this.xe = !0),
          (this.referenceDelegate = t(this)),
          (this.qe = new Ac(this)),
          (this.Ut = new vu()),
          (this.Ue = (function (t, e) {
            return new Ic(t, function (t) {
              return n.referenceDelegate.ps(t);
            });
          })(this.Ut)),
          (this.R = new eu(e)),
          (this.Ke = new wc(this.R)));
      }
      return (
        (t.prototype.start = function () {
          return Promise.resolve();
        }),
        (t.prototype.shutdown = function () {
          return ((this.xe = !1), Promise.resolve());
        }),
        Object.defineProperty(t.prototype, "started", {
          get: function () {
            return this.xe;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.setDatabaseDeletedListener = function () {}),
        (t.prototype.setNetworkEnabled = function () {}),
        (t.prototype.getIndexManager = function () {
          return this.Ut;
        }),
        (t.prototype.getMutationQueue = function (t) {
          var e = this.gs[t.toKey()];
          return (
            e ||
              ((e = new Ec(this.Ut, this.referenceDelegate)),
              (this.gs[t.toKey()] = e)),
            e
          );
        }),
        (t.prototype.getTargetCache = function () {
          return this.qe;
        }),
        (t.prototype.getRemoteDocumentCache = function () {
          return this.Ue;
        }),
        (t.prototype.getBundleCache = function () {
          return this.Ke;
        }),
        (t.prototype.runTransaction = function (t, e, n) {
          var r = this;
          Wr("MemoryPersistence", "Starting transaction:", t);
          var i = new Nc(this.Ne.next());
          return (
            this.referenceDelegate.Es(),
            n(i)
              .next(function (t) {
                return r.referenceDelegate.Ts(i).next(function () {
                  return t;
                });
              })
              .toPromise()
              .then(function (t) {
                return (i.raiseOnCommittedEvent(), t);
              })
          );
        }),
        (t.prototype.Is = function (t, e) {
          return qa.or(
            Object.values(this.gs).map(function (n) {
              return function () {
                return n.containsKey(t, e);
              };
            }),
          );
        }),
        t
      );
    })(),
    Nc = (function (t) {
      function e(e) {
        var n = this;
        return (((n = t.call(this) || this).currentSequenceNumber = e), n);
      }
      return ((0, o.ZT)(e, t), e);
    })(Ua),
    Rc = (function () {
      function t(t) {
        ((this.persistence = t), (this.As = new _c()), (this.Rs = null));
      }
      return (
        (t.bs = function (e) {
          return new t(e);
        }),
        Object.defineProperty(t.prototype, "vs", {
          get: function () {
            if (this.Rs) return this.Rs;
            throw $r();
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.addReference = function (t, e, n) {
          return (
            this.As.addReference(n, e),
            this.vs.delete(n.toString()),
            qa.resolve()
          );
        }),
        (t.prototype.removeReference = function (t, e, n) {
          return (
            this.As.removeReference(n, e),
            this.vs.add(n.toString()),
            qa.resolve()
          );
        }),
        (t.prototype.markPotentiallyOrphaned = function (t, e) {
          return (this.vs.add(e.toString()), qa.resolve());
        }),
        (t.prototype.removeTarget = function (t, e) {
          var n = this;
          this.As.Zn(e.targetId).forEach(function (t) {
            return n.vs.add(t.toString());
          });
          var r = this.persistence.getTargetCache();
          return r
            .getMatchingKeysForTargetId(t, e.targetId)
            .next(function (t) {
              t.forEach(function (t) {
                return n.vs.add(t.toString());
              });
            })
            .next(function () {
              return r.removeTargetData(t, e);
            });
        }),
        (t.prototype.Es = function () {
          this.Rs = new Set();
        }),
        (t.prototype.Ts = function (t) {
          var e = this,
            n = this.persistence.getRemoteDocumentCache().newChangeBuffer();
          return qa
            .forEach(this.vs, function (r) {
              var i = Ni.fromPath(r);
              return e.Ps(t, i).next(function (t) {
                t || n.removeEntry(i);
              });
            })
            .next(function () {
              return ((e.Rs = null), n.apply(t));
            });
        }),
        (t.prototype.updateLimboDocument = function (t, e) {
          var n = this;
          return this.Ps(t, e).next(function (t) {
            t ? n.vs.delete(e.toString()) : n.vs.add(e.toString());
          });
        }),
        (t.prototype.ps = function (t) {
          return 0;
        }),
        (t.prototype.Ps = function (t, e) {
          var n = this;
          return qa.or([
            function () {
              return qa.resolve(n.As.containsKey(e));
            },
            function () {
              return n.persistence.getTargetCache().containsKey(t, e);
            },
            function () {
              return n.persistence.Is(t, e);
            },
          ]);
        }),
        t
      );
    })(),
    Dc = (function () {
      function t(t) {
        this.uid = t;
      }
      return (
        (t.prototype.isAuthenticated = function () {
          return null != this.uid;
        }),
        (t.prototype.toKey = function () {
          return this.isAuthenticated() ? "uid:" + this.uid : "anonymous-user";
        }),
        (t.prototype.isEqual = function (t) {
          return t.uid === this.uid;
        }),
        t
      );
    })();
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ function Cc(t, e) {
    return "firestore_clients_" + t + "_" + e;
  }
  function Oc(t, e, n) {
    var r = "firestore_mutations_" + t + "_" + n;
    return (e.isAuthenticated() && (r += "_" + e.uid), r);
  }
  function xc(t, e) {
    return "firestore_targets_" + t + "_" + e;
  }
  ((Dc.UNAUTHENTICATED = new Dc(null)),
    (Dc.GOOGLE_CREDENTIALS = new Dc("google-credentials-uid")),
    (Dc.FIRST_PARTY = new Dc("first-party-uid")),
    (Dc.MOCK_USER = new Dc("mock-user")));
  var Pc = (function () {
      function t(t, e, n, r) {
        ((this.user = t),
          (this.batchId = e),
          (this.state = n),
          (this.error = r));
      }
      return (
        (t.Vs = function (e, n, r) {
          var o,
            s = JSON.parse(r),
            a =
              "object" == (0, i.Z)(s) &&
              -1 !== ["pending", "acknowledged", "rejected"].indexOf(s.state) &&
              (void 0 === s.error || "object" == (0, i.Z)(s.error));
          return (
            a &&
              s.error &&
              (a =
                "string" == typeof s.error.message &&
                "string" == typeof s.error.code) &&
              (o = new Hr(s.error.code, s.error.message)),
            a
              ? new t(e, n, s.state, o)
              : (Zr(
                  "SharedClientState",
                  "Failed to parse mutation state for ID '" + n + "': " + r,
                ),
                null)
          );
        }),
        (t.prototype.Ss = function () {
          var t = { state: this.state, updateTimeMs: Date.now() };
          return (
            this.error &&
              (t.error = {
                code: this.error.code,
                message: this.error.message,
              }),
            JSON.stringify(t)
          );
        }),
        t
      );
    })(),
    Lc = (function () {
      function t(t, e, n) {
        ((this.targetId = t), (this.state = e), (this.error = n));
      }
      return (
        (t.Vs = function (e, n) {
          var r,
            o = JSON.parse(n),
            s =
              "object" == (0, i.Z)(o) &&
              -1 !== ["not-current", "current", "rejected"].indexOf(o.state) &&
              (void 0 === o.error || "object" == (0, i.Z)(o.error));
          return (
            s &&
              o.error &&
              (s =
                "string" == typeof o.error.message &&
                "string" == typeof o.error.code) &&
              (r = new Hr(o.error.code, o.error.message)),
            s
              ? new t(e, o.state, r)
              : (Zr(
                  "SharedClientState",
                  "Failed to parse target state for ID '" + e + "': " + n,
                ),
                null)
          );
        }),
        (t.prototype.Ss = function () {
          var t = { state: this.state, updateTimeMs: Date.now() };
          return (
            this.error &&
              (t.error = {
                code: this.error.code,
                message: this.error.message,
              }),
            JSON.stringify(t)
          );
        }),
        t
      );
    })(),
    Mc = (function () {
      function t(t, e) {
        ((this.clientId = t), (this.activeTargetIds = e));
      }
      return (
        (t.Vs = function (e, n) {
          for (
            var r = JSON.parse(n),
              o = "object" == (0, i.Z)(r) && r.activeTargetIds instanceof Array,
              s = ks(),
              a = 0;
            o && a < r.activeTargetIds.length;
            ++a
          )
            ((o = ki(r.activeTargetIds[a])), (s = s.add(r.activeTargetIds[a])));
          return o
            ? new t(e, s)
            : (Zr(
                "SharedClientState",
                "Failed to parse client data for instance '" + e + "': " + n,
              ),
              null);
        }),
        t
      );
    })(),
    Fc = (function () {
      function t(t, e) {
        ((this.clientId = t), (this.onlineState = e));
      }
      return (
        (t.Vs = function (e) {
          var n = JSON.parse(e);
          return "object" == (0, i.Z)(n) &&
            -1 !== ["Unknown", "Online", "Offline"].indexOf(n.onlineState) &&
            "string" == typeof n.clientId
            ? new t(n.clientId, n.onlineState)
            : (Zr("SharedClientState", "Failed to parse online state: " + e),
              null);
        }),
        t
      );
    })(),
    Uc = (function () {
      function t() {
        this.activeTargetIds = ks();
      }
      return (
        (t.prototype.Ds = function (t) {
          this.activeTargetIds = this.activeTargetIds.add(t);
        }),
        (t.prototype.Cs = function (t) {
          this.activeTargetIds = this.activeTargetIds.delete(t);
        }),
        (t.prototype.Ss = function () {
          var t = {
            activeTargetIds: this.activeTargetIds.toArray(),
            updateTimeMs: Date.now(),
          };
          return JSON.stringify(t);
        }),
        t
      );
    })(),
    Vc = (function () {
      function t(t, e, n, r, i) {
        ((this.window = t),
          (this.Se = e),
          (this.persistenceKey = n),
          (this.Ns = r),
          (this.syncEngine = null),
          (this.onlineStateHandler = null),
          (this.sequenceNumberHandler = null),
          (this.xs = this.ks.bind(this)),
          (this.Fs = new ps(ii)),
          (this.started = !1),
          (this.$s = []));
        var o = n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        ((this.storage = this.window.localStorage),
          (this.currentUser = i),
          (this.Os = Cc(this.persistenceKey, this.Ns)),
          (this.Ms = (function (t) {
            return "firestore_sequence_number_" + t;
          })(this.persistenceKey)),
          (this.Fs = this.Fs.insert(this.Ns, new Uc())),
          (this.Ls = new RegExp("^firestore_clients_" + o + "_([^_]*)$")),
          (this.Bs = new RegExp(
            "^firestore_mutations_" + o + "_(\\d+)(?:_(.*))?$",
          )),
          (this.qs = new RegExp("^firestore_targets_" + o + "_(\\d+)$")),
          (this.Us = (function (t) {
            return "firestore_online_state_" + t;
          })(this.persistenceKey)),
          (this.Ks = (function (t) {
            return "firestore_bundle_loaded_" + t;
          })(this.persistenceKey)),
          this.window.addEventListener("storage", this.xs));
      }
      return (
        (t.yt = function (t) {
          return !(!t || !t.localStorage);
        }),
        (t.prototype.start = function () {
          return (0, o.mG)(this, void 0, void 0, function () {
            var t,
              e,
              n,
              r,
              i,
              s,
              a,
              u,
              c,
              h,
              l,
              f = this;
            return (0, o.Jh)(this, function (o) {
              switch (o.label) {
                case 0:
                  return [4, this.syncEngine.fn()];
                case 1:
                  for (t = o.sent(), e = 0, n = t; e < n.length; e++)
                    (r = n[e]) !== this.Ns &&
                      (i = this.getItem(Cc(this.persistenceKey, r))) &&
                      (s = Mc.Vs(r, i)) &&
                      (this.Fs = this.Fs.insert(s.clientId, s));
                  for (
                    this.Qs(),
                      (a = this.storage.getItem(this.Us)) &&
                        (u = this.js(a)) &&
                        this.Ws(u),
                      c = 0,
                      h = this.$s;
                    c < h.length;
                    c++
                  )
                    ((l = h[c]), this.ks(l));
                  return (
                    (this.$s = []),
                    this.window.addEventListener("pagehide", function () {
                      return f.shutdown();
                    }),
                    (this.started = !0),
                    [2]
                  );
              }
            });
          });
        }),
        (t.prototype.writeSequenceNumber = function (t) {
          this.setItem(this.Ms, JSON.stringify(t));
        }),
        (t.prototype.getAllActiveQueryTargets = function () {
          return this.Gs(this.Fs);
        }),
        (t.prototype.isActiveQueryTarget = function (t) {
          var e = !1;
          return (
            this.Fs.forEach(function (n, r) {
              r.activeTargetIds.has(t) && (e = !0);
            }),
            e
          );
        }),
        (t.prototype.addPendingMutation = function (t) {
          this.zs(t, "pending");
        }),
        (t.prototype.updateMutationState = function (t, e, n) {
          (this.zs(t, e, n), this.Hs(t));
        }),
        (t.prototype.addLocalQueryTarget = function (t) {
          var e = "not-current";
          if (this.isActiveQueryTarget(t)) {
            var n = this.storage.getItem(xc(this.persistenceKey, t));
            if (n) {
              var r = Lc.Vs(t, n);
              r && (e = r.state);
            }
          }
          return (this.Js.Ds(t), this.Qs(), e);
        }),
        (t.prototype.removeLocalQueryTarget = function (t) {
          (this.Js.Cs(t), this.Qs());
        }),
        (t.prototype.isLocalQueryTarget = function (t) {
          return this.Js.activeTargetIds.has(t);
        }),
        (t.prototype.clearQueryState = function (t) {
          this.removeItem(xc(this.persistenceKey, t));
        }),
        (t.prototype.updateQueryState = function (t, e, n) {
          this.Ys(t, e, n);
        }),
        (t.prototype.handleUserChange = function (t, e, n) {
          var r = this;
          (e.forEach(function (t) {
            r.Hs(t);
          }),
            (this.currentUser = t),
            n.forEach(function (t) {
              r.addPendingMutation(t);
            }));
        }),
        (t.prototype.setOnlineState = function (t) {
          this.Xs(t);
        }),
        (t.prototype.notifyBundleLoaded = function () {
          this.Zs();
        }),
        (t.prototype.shutdown = function () {
          this.started &&
            (this.window.removeEventListener("storage", this.xs),
            this.removeItem(this.Os),
            (this.started = !1));
        }),
        (t.prototype.getItem = function (t) {
          var e = this.storage.getItem(t);
          return (Wr("SharedClientState", "READ", t, e), e);
        }),
        (t.prototype.setItem = function (t, e) {
          (Wr("SharedClientState", "SET", t, e), this.storage.setItem(t, e));
        }),
        (t.prototype.removeItem = function (t) {
          (Wr("SharedClientState", "REMOVE", t), this.storage.removeItem(t));
        }),
        (t.prototype.ks = function (t) {
          var e = this,
            n = t;
          if (n.storageArea === this.storage) {
            if (
              (Wr("SharedClientState", "EVENT", n.key, n.newValue),
              n.key === this.Os)
            )
              return void Zr(
                "Received WebStorage notification for local change. Another client might have garbage-collected our state",
              );
            this.Se.enqueueRetryable(function () {
              return (0, o.mG)(e, void 0, void 0, function () {
                var t, e, r, i, s, a;
                return (0, o.Jh)(this, function (o) {
                  if (this.started) {
                    if (null !== n.key)
                      if (this.Ls.test(n.key)) {
                        if (null == n.newValue)
                          return ((t = this.ti(n.key)), [2, this.ei(t, null)]);
                        if ((e = this.ni(n.key, n.newValue)))
                          return [2, this.ei(e.clientId, e)];
                      } else if (this.Bs.test(n.key)) {
                        if (
                          null !== n.newValue &&
                          (r = this.si(n.key, n.newValue))
                        )
                          return [2, this.ii(r)];
                      } else if (this.qs.test(n.key)) {
                        if (
                          null !== n.newValue &&
                          (i = this.ri(n.key, n.newValue))
                        )
                          return [2, this.oi(i)];
                      } else if (n.key === this.Us) {
                        if (null !== n.newValue && (s = this.js(n.newValue)))
                          return [2, this.Ws(s)];
                      } else if (n.key === this.Ms)
                        (a = (function (t) {
                          var e = zr.o;
                          if (null != t)
                            try {
                              var n = JSON.parse(t);
                              (ti("number" == typeof n), (e = n));
                            } catch (t) {
                              Zr(
                                "SharedClientState",
                                "Failed to read sequence number from WebStorage",
                                t,
                              );
                            }
                          return e;
                        })(n.newValue)) !== zr.o &&
                          this.sequenceNumberHandler(a);
                      else if (n.key === this.Ks)
                        return [2, this.syncEngine.ci()];
                  } else this.$s.push(n);
                  return [2];
                });
              });
            });
          }
        }),
        Object.defineProperty(t.prototype, "Js", {
          get: function () {
            return this.Fs.get(this.Ns);
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.Qs = function () {
          this.setItem(this.Os, this.Js.Ss());
        }),
        (t.prototype.zs = function (t, e, n) {
          var r = new Pc(this.currentUser, t, e, n),
            i = Oc(this.persistenceKey, this.currentUser, t);
          this.setItem(i, r.Ss());
        }),
        (t.prototype.Hs = function (t) {
          var e = Oc(this.persistenceKey, this.currentUser, t);
          this.removeItem(e);
        }),
        (t.prototype.Xs = function (t) {
          var e = { clientId: this.Ns, onlineState: t };
          this.storage.setItem(this.Us, JSON.stringify(e));
        }),
        (t.prototype.Ys = function (t, e, n) {
          var r = xc(this.persistenceKey, t),
            i = new Lc(t, e, n);
          this.setItem(r, i.Ss());
        }),
        (t.prototype.Zs = function () {
          this.setItem(this.Ks, "value-not-used");
        }),
        (t.prototype.ti = function (t) {
          var e = this.Ls.exec(t);
          return e ? e[1] : null;
        }),
        (t.prototype.ni = function (t, e) {
          var n = this.ti(t);
          return Mc.Vs(n, e);
        }),
        (t.prototype.si = function (t, e) {
          var n = this.Bs.exec(t),
            r = Number(n[1]),
            i = void 0 !== n[2] ? n[2] : null;
          return Pc.Vs(new Dc(i), r, e);
        }),
        (t.prototype.ri = function (t, e) {
          var n = this.qs.exec(t),
            r = Number(n[1]);
          return Lc.Vs(r, e);
        }),
        (t.prototype.js = function (t) {
          return Fc.Vs(t);
        }),
        (t.prototype.ii = function (t) {
          return (0, o.mG)(this, void 0, void 0, function () {
            return (0, o.Jh)(this, function (e) {
              return t.user.uid === this.currentUser.uid
                ? [2, this.syncEngine.ui(t.batchId, t.state, t.error)]
                : (Wr(
                    "SharedClientState",
                    "Ignoring mutation for non-active user " + t.user.uid,
                  ),
                  [2]);
            });
          });
        }),
        (t.prototype.oi = function (t) {
          return this.syncEngine.ai(t.targetId, t.state, t.error);
        }),
        (t.prototype.ei = function (t, e) {
          var n = this,
            r = e ? this.Fs.insert(t, e) : this.Fs.remove(t),
            i = this.Gs(this.Fs),
            o = this.Gs(r),
            s = [],
            a = [];
          return (
            o.forEach(function (t) {
              i.has(t) || s.push(t);
            }),
            i.forEach(function (t) {
              o.has(t) || a.push(t);
            }),
            this.syncEngine.hi(s, a).then(function () {
              n.Fs = r;
            })
          );
        }),
        (t.prototype.Ws = function (t) {
          this.Fs.get(t.clientId) && this.onlineStateHandler(t.onlineState);
        }),
        (t.prototype.Gs = function (t) {
          var e = ks();
          return (
            t.forEach(function (t, n) {
              e = e.unionWith(n.activeTargetIds);
            }),
            e
          );
        }),
        t
      );
    })(),
    qc = (function () {
      function t() {
        ((this.li = new Uc()),
          (this.fi = {}),
          (this.onlineStateHandler = null),
          (this.sequenceNumberHandler = null));
      }
      return (
        (t.prototype.addPendingMutation = function (t) {}),
        (t.prototype.updateMutationState = function (t, e, n) {}),
        (t.prototype.addLocalQueryTarget = function (t) {
          return (this.li.Ds(t), this.fi[t] || "not-current");
        }),
        (t.prototype.updateQueryState = function (t, e, n) {
          this.fi[t] = e;
        }),
        (t.prototype.removeLocalQueryTarget = function (t) {
          this.li.Cs(t);
        }),
        (t.prototype.isLocalQueryTarget = function (t) {
          return this.li.activeTargetIds.has(t);
        }),
        (t.prototype.clearQueryState = function (t) {
          delete this.fi[t];
        }),
        (t.prototype.getAllActiveQueryTargets = function () {
          return this.li.activeTargetIds;
        }),
        (t.prototype.isActiveQueryTarget = function (t) {
          return this.li.activeTargetIds.has(t);
        }),
        (t.prototype.start = function () {
          return ((this.li = new Uc()), Promise.resolve());
        }),
        (t.prototype.handleUserChange = function (t, e, n) {}),
        (t.prototype.setOnlineState = function (t) {}),
        (t.prototype.shutdown = function () {}),
        (t.prototype.writeSequenceNumber = function (t) {}),
        (t.prototype.notifyBundleLoaded = function () {}),
        t
      );
    })(),
    jc = (function () {
      function t() {}
      return (
        (t.prototype.di = function (t) {}),
        (t.prototype.shutdown = function () {}),
        t
      );
    })(),
    Bc = (function () {
      function t() {
        var t = this;
        ((this.wi = function () {
          return t._i();
        }),
          (this.mi = function () {
            return t.yi();
          }),
          (this.gi = []),
          this.pi());
      }
      return (
        (t.prototype.di = function (t) {
          this.gi.push(t);
        }),
        (t.prototype.shutdown = function () {
          (window.removeEventListener("online", this.wi),
            window.removeEventListener("offline", this.mi));
        }),
        (t.prototype.pi = function () {
          (window.addEventListener("online", this.wi),
            window.addEventListener("offline", this.mi));
        }),
        (t.prototype._i = function () {
          Wr("ConnectivityMonitor", "Network connectivity changed: AVAILABLE");
          for (var t = 0, e = this.gi; t < e.length; t++) (0, e[t])(0);
        }),
        (t.prototype.yi = function () {
          Wr(
            "ConnectivityMonitor",
            "Network connectivity changed: UNAVAILABLE",
          );
          for (var t = 0, e = this.gi; t < e.length; t++) (0, e[t])(1);
        }),
        (t.yt = function () {
          return (
            "undefined" != typeof window &&
            void 0 !== window.addEventListener &&
            void 0 !== window.removeEventListener
          );
        }),
        t
      );
    })(),
    Gc = {
      BatchGetDocuments: "batchGet",
      Commit: "commit",
      RunQuery: "runQuery",
    },
    zc = (function () {
      function t(t) {
        ((this.Ei = t.Ei), (this.Ti = t.Ti));
      }
      return (
        (t.prototype.Ii = function (t) {
          this.Ai = t;
        }),
        (t.prototype.Ri = function (t) {
          this.bi = t;
        }),
        (t.prototype.onMessage = function (t) {
          this.vi = t;
        }),
        (t.prototype.close = function () {
          this.Ti();
        }),
        (t.prototype.send = function (t) {
          this.Ei(t);
        }),
        (t.prototype.Pi = function () {
          this.Ai();
        }),
        (t.prototype.Vi = function (t) {
          this.bi(t);
        }),
        (t.prototype.Si = function (t) {
          this.vi(t);
        }),
        t
      );
    })(),
    Kc = (function (t) {
      function e(e) {
        var n = this;
        return (
          ((n = t.call(this, e) || this).forceLongPolling = e.forceLongPolling),
          (n.autoDetectLongPolling = e.autoDetectLongPolling),
          (n.useFetchStreams = e.useFetchStreams),
          n
        );
      }
      return (
        (0, o.ZT)(e, t),
        (e.prototype.Fi = function (t, e, n, r) {
          return new Promise(function (i, o) {
            var s = new jr();
            s.listenOnce(Mr.COMPLETE, function () {
              try {
                switch (s.getLastErrorCode()) {
                  case Lr.NO_ERROR:
                    var e = s.getResponseJson();
                    (Wr("Connection", "XHR received:", JSON.stringify(e)),
                      i(e));
                    break;
                  case Lr.TIMEOUT:
                    (Wr("Connection", 'RPC "' + t + '" timed out'),
                      o(new Hr(Kr.DEADLINE_EXCEEDED, "Request time out")));
                    break;
                  case Lr.HTTP_ERROR:
                    var n = s.getStatus();
                    if (
                      (Wr(
                        "Connection",
                        'RPC "' + t + '" failed with status:',
                        n,
                        "response text:",
                        s.getResponseText(),
                      ),
                      n > 0)
                    ) {
                      var r = s.getResponseJson().error;
                      if (r && r.status && r.message) {
                        var a = (function (t) {
                          var e = t.toLowerCase().replace(/_/g, "-");
                          return Object.values(Kr).indexOf(e) >= 0
                            ? e
                            : Kr.UNKNOWN;
                        })(r.status);
                        o(new Hr(a, r.message));
                      } else
                        o(
                          new Hr(
                            Kr.UNKNOWN,
                            "Server responded with status " + s.getStatus(),
                          ),
                        );
                    } else o(new Hr(Kr.UNAVAILABLE, "Connection failed."));
                    break;
                  default:
                    $r();
                }
              } finally {
                Wr("Connection", 'RPC "' + t + '" completed.');
              }
            });
            var a = JSON.stringify(r);
            s.send(e, "POST", a, n, 15);
          });
        }),
        (e.prototype.Oi = function (t, e) {
          var n = [
              this.Di,
              "/",
              "google.firestore.v1.Firestore",
              "/",
              t,
              "/channel",
            ],
            r = xr(),
            i = Pr(),
            o = {
              httpSessionIdParam: "gsessionid",
              initMessageHeaders: {},
              messageUrlParams: {
                database:
                  "projects/" +
                  this.databaseId.projectId +
                  "/databases/" +
                  this.databaseId.database,
              },
              sendRawJson: !0,
              supportsCrossDomainXhr: !0,
              internalChannelParams: { forwardChannelRequestTimeoutMs: 6e5 },
              forceLongPolling: this.forceLongPolling,
              detectBufferingProxy: this.autoDetectLongPolling,
            };
          (this.useFetchStreams && (o.xmlHttpFactory = new Vr({})),
            this.ki(o.initMessageHeaders, e),
            (0, s.uI)() ||
              (0, s.b$)() ||
              (0, s.d)() ||
              (0, s.w1)() ||
              (0, s.Mn)() ||
              (0, s.ru)() ||
              (o.httpHeadersOverwriteParam = "$httpHeaders"));
          var a = n.join("");
          Wr("Connection", "Creating WebChannel: " + a, o);
          var u = r.createWebChannel(a, o),
            c = !1,
            h = !1,
            l = new zc({
              Ei: function (t) {
                h
                  ? Wr(
                      "Connection",
                      "Not sending because WebChannel is closed:",
                      t,
                    )
                  : (c ||
                      (Wr("Connection", "Opening WebChannel transport."),
                      u.open(),
                      (c = !0)),
                    Wr("Connection", "WebChannel sending:", t),
                    u.send(t));
              },
              Ti: function () {
                return u.close();
              },
            }),
            f = function (t, e, n) {
              t.listen(e, function (t) {
                try {
                  n(t);
                } catch (t) {
                  setTimeout(function () {
                    throw t;
                  }, 0);
                }
              });
            };
          return (
            f(u, qr.EventType.OPEN, function () {
              h || Wr("Connection", "WebChannel transport opened.");
            }),
            f(u, qr.EventType.CLOSE, function () {
              h ||
                ((h = !0),
                Wr("Connection", "WebChannel transport closed"),
                l.Vi());
            }),
            f(u, qr.EventType.ERROR, function (t) {
              h ||
                ((h = !0),
                Xr("Connection", "WebChannel transport errored:", t),
                l.Vi(
                  new Hr(
                    Kr.UNAVAILABLE,
                    "The operation could not be completed",
                  ),
                ));
            }),
            f(u, qr.EventType.MESSAGE, function (t) {
              var e;
              if (!h) {
                var n = t.data[0];
                ti(!!n);
                var r = n,
                  i =
                    r.error ||
                    (null === (e = r[0]) || void 0 === e ? void 0 : e.error);
                if (i) {
                  Wr("Connection", "WebChannel received error:", i);
                  var o = i.status,
                    s = (function (t) {
                      var e = ss[t];
                      if (void 0 !== e) return fs(e);
                    })(o),
                    a = i.message;
                  (void 0 === s &&
                    ((s = Kr.INTERNAL),
                    (a =
                      "Unknown error status: " +
                      o +
                      " with message " +
                      i.message)),
                    (h = !0),
                    l.Vi(new Hr(s, a)),
                    u.close());
                } else (Wr("Connection", "WebChannel received:", n), l.Si(n));
              }
            }),
            f(i, Fr.STAT_EVENT, function (t) {
              t.stat === Ur.PROXY
                ? Wr("Connection", "Detected buffering proxy")
                : t.stat === Ur.NOPROXY &&
                  Wr("Connection", "Detected no buffering proxy");
            }),
            setTimeout(function () {
              l.Pi();
            }, 0),
            l
          );
        }),
        e
      );
    })(
      (function () {
        function t(t) {
          ((this.databaseInfo = t), (this.databaseId = t.databaseId));
          var e = t.ssl ? "https" : "http";
          ((this.Di = e + "://" + t.host),
            (this.Ci =
              "projects/" +
              this.databaseId.projectId +
              "/databases/" +
              this.databaseId.database +
              "/documents"));
        }
        return (
          (t.prototype.Ni = function (t, e, n, r) {
            var i = this.xi(t, e);
            Wr("RestConnection", "Sending: ", i, n);
            var o = {};
            return (
              this.ki(o, r),
              this.Fi(t, i, o, n).then(
                function (t) {
                  return (Wr("RestConnection", "Received: ", t), t);
                },
                function (e) {
                  throw (
                    Xr(
                      "RestConnection",
                      t + " failed with error: ",
                      e,
                      "url: ",
                      i,
                      "request:",
                      n,
                    ),
                    e
                  );
                },
              )
            );
          }),
          (t.prototype.$i = function (t, e, n, r) {
            return this.Ni(t, e, n, r);
          }),
          (t.prototype.ki = function (t, e) {
            if (
              ((t["X-Goog-Api-Client"] = "gl-js/ fire/8.10.1"),
              (t["Content-Type"] = "text/plain"),
              this.databaseInfo.appId &&
                (t["X-Firebase-GMPID"] = this.databaseInfo.appId),
              e)
            )
              for (var n in e.authHeaders)
                e.authHeaders.hasOwnProperty(n) && (t[n] = e.authHeaders[n]);
          }),
          (t.prototype.xi = function (t, e) {
            var n = Gc[t];
            return this.Di + "/v1/" + e + ":" + n;
          }),
          t
        );
      })(),
    );
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ function Hc() {
    return "undefined" != typeof window ? window : null;
  }
  function Jc() {
    return "undefined" != typeof document ? document : null;
  }
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ function Qc(t) {
    return new Vs(t, !0);
  }
  var Wc = (function () {
      function t(t, e, n, r, i) {
        (void 0 === n && (n = 1e3),
          void 0 === r && (r = 1.5),
          void 0 === i && (i = 6e4),
          (this.Se = t),
          (this.timerId = e),
          (this.Mi = n),
          (this.Li = r),
          (this.Bi = i),
          (this.qi = 0),
          (this.Ui = null),
          (this.Ki = Date.now()),
          this.reset());
      }
      return (
        (t.prototype.reset = function () {
          this.qi = 0;
        }),
        (t.prototype.Qi = function () {
          this.qi = this.Bi;
        }),
        (t.prototype.ji = function (t) {
          var e = this;
          this.cancel();
          var n = Math.floor(this.qi + this.Wi()),
            r = Math.max(0, Date.now() - this.Ki),
            i = Math.max(0, n - r);
          (i > 0 &&
            Wr(
              "ExponentialBackoff",
              "Backing off for " +
                i +
                " ms (base delay: " +
                this.qi +
                " ms, delay with jitter: " +
                n +
                " ms, last attempt: " +
                r +
                " ms ago)",
            ),
            (this.Ui = this.Se.enqueueAfterDelay(this.timerId, i, function () {
              return ((e.Ki = Date.now()), t());
            })),
            (this.qi *= this.Li),
            this.qi < this.Mi && (this.qi = this.Mi),
            this.qi > this.Bi && (this.qi = this.Bi));
        }),
        (t.prototype.Gi = function () {
          null !== this.Ui && (this.Ui.skipDelay(), (this.Ui = null));
        }),
        (t.prototype.cancel = function () {
          null !== this.Ui && (this.Ui.cancel(), (this.Ui = null));
        }),
        (t.prototype.Wi = function () {
          return (Math.random() - 0.5) * this.qi;
        }),
        t
      );
    })(),
    Zc = (function () {
      function t(t, e, n, r, i, o) {
        ((this.Se = t),
          (this.zi = n),
          (this.Hi = r),
          (this.Ji = i),
          (this.listener = o),
          (this.state = 0),
          (this.Yi = 0),
          (this.Xi = null),
          (this.stream = null),
          (this.Zi = new Wc(t, e)));
      }
      return (
        (t.prototype.tr = function () {
          return 1 === this.state || 2 === this.state || 4 === this.state;
        }),
        (t.prototype.er = function () {
          return 2 === this.state;
        }),
        (t.prototype.start = function () {
          3 !== this.state ? this.auth() : this.nr();
        }),
        (t.prototype.stop = function () {
          return (0, o.mG)(this, void 0, void 0, function () {
            return (0, o.Jh)(this, function (t) {
              switch (t.label) {
                case 0:
                  return this.tr() ? [4, this.close(0)] : [3, 2];
                case 1:
                  (t.sent(), (t.label = 2));
                case 2:
                  return [2];
              }
            });
          });
        }),
        (t.prototype.sr = function () {
          ((this.state = 0), this.Zi.reset());
        }),
        (t.prototype.ir = function () {
          var t = this;
          this.er() &&
            null === this.Xi &&
            (this.Xi = this.Se.enqueueAfterDelay(this.zi, 6e4, function () {
              return t.rr();
            }));
        }),
        (t.prototype.cr = function (t) {
          (this.ur(), this.stream.send(t));
        }),
        (t.prototype.rr = function () {
          return (0, o.mG)(this, void 0, void 0, function () {
            return (0, o.Jh)(this, function (t) {
              return this.er() ? [2, this.close(0)] : [2];
            });
          });
        }),
        (t.prototype.ur = function () {
          this.Xi && (this.Xi.cancel(), (this.Xi = null));
        }),
        (t.prototype.close = function (t, e) {
          return (0, o.mG)(this, void 0, void 0, function () {
            return (0, o.Jh)(this, function (n) {
              switch (n.label) {
                case 0:
                  return (
                    this.ur(),
                    this.Zi.cancel(),
                    this.Yi++,
                    3 !== t
                      ? this.Zi.reset()
                      : e && e.code === Kr.RESOURCE_EXHAUSTED
                        ? (Zr(e.toString()),
                          Zr(
                            "Using maximum backoff delay to prevent overloading the backend.",
                          ),
                          this.Zi.Qi())
                        : e &&
                          e.code === Kr.UNAUTHENTICATED &&
                          this.Ji.invalidateToken(),
                    null !== this.stream &&
                      (this.ar(), this.stream.close(), (this.stream = null)),
                    (this.state = t),
                    [4, this.listener.Ri(e)]
                  );
                case 1:
                  return (n.sent(), [2]);
              }
            });
          });
        }),
        (t.prototype.ar = function () {}),
        (t.prototype.auth = function () {
          var t = this;
          this.state = 1;
          var e = this.hr(this.Yi),
            n = this.Yi;
          this.Ji.getToken().then(
            function (e) {
              t.Yi === n && t.lr(e);
            },
            function (n) {
              e(function () {
                var e = new Hr(
                  Kr.UNKNOWN,
                  "Fetching auth token failed: " + n.message,
                );
                return t.dr(e);
              });
            },
          );
        }),
        (t.prototype.lr = function (t) {
          var e = this,
            n = this.hr(this.Yi);
          ((this.stream = this.wr(t)),
            this.stream.Ii(function () {
              n(function () {
                return ((e.state = 2), e.listener.Ii());
              });
            }),
            this.stream.Ri(function (t) {
              n(function () {
                return e.dr(t);
              });
            }),
            this.stream.onMessage(function (t) {
              n(function () {
                return e.onMessage(t);
              });
            }));
        }),
        (t.prototype.nr = function () {
          var t = this;
          ((this.state = 4),
            this.Zi.ji(function () {
              return (0, o.mG)(t, void 0, void 0, function () {
                return (0, o.Jh)(this, function (t) {
                  return ((this.state = 0), this.start(), [2]);
                });
              });
            }));
        }),
        (t.prototype.dr = function (t) {
          return (
            Wr("PersistentStream", "close with error: " + t),
            (this.stream = null),
            this.close(3, t)
          );
        }),
        (t.prototype.hr = function (t) {
          var e = this;
          return function (n) {
            e.Se.enqueueAndForget(function () {
              return e.Yi === t
                ? n()
                : (Wr(
                    "PersistentStream",
                    "stream callback skipped by getCloseGuardedDispatcher.",
                  ),
                  Promise.resolve());
            });
          };
        }),
        t
      );
    })(),
    Xc = (function (t) {
      function e(e, n, r, i, o) {
        var s = this;
        return (
          ((s =
            t.call(
              this,
              e,
              "listen_stream_connection_backoff",
              "listen_stream_idle",
              n,
              r,
              o,
            ) || this).R = i),
          s
        );
      }
      return (
        (0, o.ZT)(e, t),
        (e.prototype.wr = function (t) {
          return this.Hi.Oi("Listen", t);
        }),
        (e.prototype.onMessage = function (t) {
          this.Zi.reset();
          var e = (function (t, e) {
              var n;
              if ("targetChange" in e) {
                e.targetChange;
                var r = (function (t) {
                    return "NO_CHANGE" === t
                      ? 0
                      : "ADD" === t
                        ? 1
                        : "REMOVE" === t
                          ? 2
                          : "CURRENT" === t
                            ? 3
                            : "RESET" === t
                              ? 4
                              : $r();
                  })(e.targetChange.targetChangeType || "NO_CHANGE"),
                  i = e.targetChange.targetIds || [],
                  o = (function (t, e) {
                    return t.I
                      ? (ti(void 0 === e || "string" == typeof e),
                        yi.fromBase64String(e || ""))
                      : (ti(void 0 === e || e instanceof Uint8Array),
                        yi.fromUint8Array(e || new Uint8Array()));
                  })(t, e.targetChange.resumeToken),
                  s =
                    (a = e.targetChange.cause) &&
                    (function (t) {
                      var e = void 0 === t.code ? Kr.UNKNOWN : fs(t.code);
                      return new Hr(e, t.message || "");
                    })(a);
                n = new Os(r, i, o, s || null);
              } else if ("documentChange" in e) {
                (e.documentChange,
                  (r = e.documentChange).document,
                  r.document.name,
                  r.document.updateTime,
                  (i = Js(t, r.document.name)),
                  (o = Gs(r.document.updateTime)));
                var a = new Gi({ mapValue: { fields: r.document.fields } }),
                  u = ((s = Ki.newFoundDocument(i, o, a)), r.targetIds || []),
                  c = r.removedTargetIds || [];
                n = new Ds(u, c, s.key, s);
              } else if ("documentDelete" in e)
                (e.documentDelete,
                  (r = e.documentDelete).document,
                  (i = Js(t, r.document)),
                  (o = r.readTime ? Gs(r.readTime) : ui.min()),
                  (a = Ki.newNoDocument(i, o)),
                  (s = r.removedTargetIds || []),
                  (n = new Ds([], s, a.key, a)));
              else if ("documentRemove" in e)
                (e.documentRemove,
                  (r = e.documentRemove).document,
                  (i = Js(t, r.document)),
                  (o = r.removedTargetIds || []),
                  (n = new Ds([], o, i, null)));
              else {
                if (!("filter" in e)) return $r();
                e.filter;
                var h = e.filter;
                (h.targetId,
                  (r = h.count || 0),
                  (i = new hs(r)),
                  (o = h.targetId),
                  (n = new Cs(o, i)));
              }
              return n;
            })(this.R, t),
            n = (function (t) {
              if (!("targetChange" in t)) return ui.min();
              var e = t.targetChange;
              return e.targetIds && e.targetIds.length
                ? ui.min()
                : e.readTime
                  ? Gs(e.readTime)
                  : ui.min();
            })(t);
          return this.listener._r(e, n);
        }),
        (e.prototype.mr = function (t) {
          var e = {};
          ((e.database = Zs(this.R)),
            (e.addTarget = (function (t, e) {
              var n,
                r = e.target;
              return (
                ((n = Zi(r)
                  ? { documents: na(t, r) }
                  : { query: ra(t, r) }).targetId = e.targetId),
                e.resumeToken.approximateByteSize() > 0
                  ? (n.resumeToken = js(t, e.resumeToken))
                  : e.snapshotVersion.compareTo(ui.min()) > 0 &&
                    (n.readTime = qs(t, e.snapshotVersion.toTimestamp())),
                n
              );
            })(this.R, t)));
          var n = (function (t, e) {
            var n = (function (t, e) {
              switch (e) {
                case 0:
                  return null;
                case 1:
                  return "existence-filter-mismatch";
                case 2:
                  return "limbo-document";
                default:
                  return $r();
              }
            })(0, e.purpose);
            return null == n ? null : { "goog-listen-tags": n };
          })(this.R, t);
          (n && (e.labels = n), this.cr(e));
        }),
        (e.prototype.yr = function (t) {
          var e = {};
          ((e.database = Zs(this.R)), (e.removeTarget = t), this.cr(e));
        }),
        e
      );
    })(Zc),
    Yc = (function (t) {
      function e(e, n, r, i, o) {
        var s = this;
        return (
          ((s =
            t.call(
              this,
              e,
              "write_stream_connection_backoff",
              "write_stream_idle",
              n,
              r,
              o,
            ) || this).R = i),
          (s.gr = !1),
          s
        );
      }
      return (
        (0, o.ZT)(e, t),
        Object.defineProperty(e.prototype, "pr", {
          get: function () {
            return this.gr;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (e.prototype.start = function () {
          ((this.gr = !1),
            (this.lastStreamToken = void 0),
            t.prototype.start.call(this));
        }),
        (e.prototype.ar = function () {
          this.gr && this.Er([]);
        }),
        (e.prototype.wr = function (t) {
          return this.Hi.Oi("Write", t);
        }),
        (e.prototype.onMessage = function (t) {
          if (
            (ti(!!t.streamToken),
            (this.lastStreamToken = t.streamToken),
            this.gr)
          ) {
            this.Zi.reset();
            var e = (function (t, e) {
                return t && t.length > 0
                  ? (ti(void 0 !== e),
                    t.map(function (t) {
                      return (function (t, e) {
                        var n = t.updateTime ? Gs(t.updateTime) : Gs(e);
                        return (
                          n.isEqual(ui.min()) && (n = Gs(e)),
                          new Ho(n, t.transformResults || [])
                        );
                      })(t, e);
                    }))
                  : [];
              })(t.writeResults, t.commitTime),
              n = Gs(t.commitTime);
            return this.listener.Tr(n, e);
          }
          return (
            ti(!t.writeResults || 0 === t.writeResults.length),
            (this.gr = !0),
            this.listener.Ir()
          );
        }),
        (e.prototype.Ar = function () {
          var t = {};
          ((t.database = Zs(this.R)), this.cr(t));
        }),
        (e.prototype.Er = function (t) {
          var e = this,
            n = {
              streamToken: this.lastStreamToken,
              writes: t.map(function (t) {
                return ta(e.R, t);
              }),
            };
          this.cr(n);
        }),
        e
      );
    })(Zc),
    $c = (function (t) {
      function e(e, n, r) {
        var i = this;
        return (
          ((i = t.call(this) || this).credentials = e),
          (i.Hi = n),
          (i.R = r),
          (i.Rr = !1),
          i
        );
      }
      return (
        (0, o.ZT)(e, t),
        (e.prototype.br = function () {
          if (this.Rr)
            throw new Hr(
              Kr.FAILED_PRECONDITION,
              "The client has already been terminated.",
            );
        }),
        (e.prototype.Ni = function (t, e, n) {
          var r = this;
          return (
            this.br(),
            this.credentials
              .getToken()
              .then(function (i) {
                return r.Hi.Ni(t, e, n, i);
              })
              .catch(function (t) {
                throw "FirebaseError" === t.name
                  ? (t.code === Kr.UNAUTHENTICATED &&
                      r.credentials.invalidateToken(),
                    t)
                  : new Hr(Kr.UNKNOWN, t.toString());
              })
          );
        }),
        (e.prototype.$i = function (t, e, n) {
          var r = this;
          return (
            this.br(),
            this.credentials
              .getToken()
              .then(function (i) {
                return r.Hi.$i(t, e, n, i);
              })
              .catch(function (t) {
                throw "FirebaseError" === t.name
                  ? (t.code === Kr.UNAUTHENTICATED &&
                      r.credentials.invalidateToken(),
                    t)
                  : new Hr(Kr.UNKNOWN, t.toString());
              })
          );
        }),
        (e.prototype.terminate = function () {
          this.Rr = !0;
        }),
        e
      );
    })(function () {}),
    th = (function () {
      function t(t, e) {
        ((this.asyncQueue = t),
          (this.onlineStateHandler = e),
          (this.state = "Unknown"),
          (this.vr = 0),
          (this.Pr = null),
          (this.Vr = !0));
      }
      return (
        (t.prototype.Sr = function () {
          var t = this;
          0 === this.vr &&
            (this.Dr("Unknown"),
            (this.Pr = this.asyncQueue.enqueueAfterDelay(
              "online_state_timeout",
              1e4,
              function () {
                return (
                  (t.Pr = null),
                  t.Cr("Backend didn't respond within 10 seconds."),
                  t.Dr("Offline"),
                  Promise.resolve()
                );
              },
            )));
        }),
        (t.prototype.Nr = function (t) {
          "Online" === this.state
            ? this.Dr("Unknown")
            : (this.vr++,
              this.vr >= 1 &&
                (this.kr(),
                this.Cr(
                  "Connection failed 1 times. Most recent error: " +
                    t.toString(),
                ),
                this.Dr("Offline")));
        }),
        (t.prototype.set = function (t) {
          (this.kr(),
            (this.vr = 0),
            "Online" === t && (this.Vr = !1),
            this.Dr(t));
        }),
        (t.prototype.Dr = function (t) {
          t !== this.state && ((this.state = t), this.onlineStateHandler(t));
        }),
        (t.prototype.Cr = function (t) {
          var e =
            "Could not reach Cloud Firestore backend. " +
            t +
            "\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.";
          this.Vr ? (Zr(e), (this.Vr = !1)) : Wr("OnlineStateTracker", e);
        }),
        (t.prototype.kr = function () {
          null !== this.Pr && (this.Pr.cancel(), (this.Pr = null));
        }),
        t
      );
    })(),
    eh = function (t, e, n, r, i) {
      var s = this;
      ((this.localStore = t),
        (this.datastore = e),
        (this.asyncQueue = n),
        (this.remoteSyncer = {}),
        (this.Fr = []),
        (this.$r = new Map()),
        (this.Or = new Set()),
        (this.Mr = []),
        (this.Lr = i),
        this.Lr.di(function (t) {
          n.enqueueAndForget(function () {
            return (0, o.mG)(s, void 0, void 0, function () {
              return (0, o.Jh)(this, function (t) {
                switch (t.label) {
                  case 0:
                    return hh(this)
                      ? (Wr(
                          "RemoteStore",
                          "Restarting streams for network reachability change.",
                        ),
                        [
                          4,
                          (function (t) {
                            return (0, o.mG)(this, void 0, void 0, function () {
                              var e;
                              return (0, o.Jh)(this, function (n) {
                                switch (n.label) {
                                  case 0:
                                    return ((e = ei(t)).Or.add(4), [4, rh(e)]);
                                  case 1:
                                    return (
                                      n.sent(),
                                      e.Br.set("Unknown"),
                                      e.Or.delete(4),
                                      [4, nh(e)]
                                    );
                                  case 2:
                                    return (n.sent(), [2]);
                                }
                              });
                            });
                          })(this),
                        ])
                      : [3, 2];
                  case 1:
                    (t.sent(), (t.label = 2));
                  case 2:
                    return [2];
                }
              });
            });
          });
        }),
        (this.Br = new th(n, r)));
    };
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ function nh(t) {
    return (0, o.mG)(this, void 0, void 0, function () {
      var e, n;
      return (0, o.Jh)(this, function (r) {
        switch (r.label) {
          case 0:
            if (!hh(t)) return [3, 4];
            ((e = 0), (n = t.Mr), (r.label = 1));
          case 1:
            return e < n.length ? [4, (0, n[e])(!0)] : [3, 4];
          case 2:
            (r.sent(), (r.label = 3));
          case 3:
            return (e++, [3, 1]);
          case 4:
            return [2];
        }
      });
    });
  }
  function rh(t) {
    return (0, o.mG)(this, void 0, void 0, function () {
      var e, n;
      return (0, o.Jh)(this, function (r) {
        switch (r.label) {
          case 0:
            ((e = 0), (n = t.Mr), (r.label = 1));
          case 1:
            return e < n.length ? [4, (0, n[e])(!1)] : [3, 4];
          case 2:
            (r.sent(), (r.label = 3));
          case 3:
            return (e++, [3, 1]);
          case 4:
            return [2];
        }
      });
    });
  }
  function ih(t, e) {
    var n = ei(t);
    n.$r.has(e.targetId) ||
      (n.$r.set(e.targetId, e), ch(n) ? uh(n) : Sh(n).er() && sh(n, e));
  }
  function oh(t, e) {
    var n = ei(t),
      r = Sh(n);
    (n.$r.delete(e),
      r.er() && ah(n, e),
      0 === n.$r.size && (r.er() ? r.ir() : hh(n) && n.Br.set("Unknown")));
  }
  function sh(t, e) {
    (t.qr.U(e.targetId), Sh(t).mr(e));
  }
  function ah(t, e) {
    (t.qr.U(e), Sh(t).yr(e));
  }
  function uh(t) {
    ((t.qr = new Ps({
      getRemoteKeysForTarget: function (e) {
        return t.remoteSyncer.getRemoteKeysForTarget(e);
      },
      lt: function (e) {
        return t.$r.get(e) || null;
      },
    })),
      Sh(t).start(),
      t.Br.Sr());
  }
  function ch(t) {
    return hh(t) && !Sh(t).tr() && t.$r.size > 0;
  }
  function hh(t) {
    return 0 === ei(t).Or.size;
  }
  function lh(t) {
    t.qr = void 0;
  }
  function fh(t) {
    return (0, o.mG)(this, void 0, void 0, function () {
      return (0, o.Jh)(this, function (e) {
        return (
          t.$r.forEach(function (e, n) {
            sh(t, e);
          }),
          [2]
        );
      });
    });
  }
  function ph(t, e) {
    return (0, o.mG)(this, void 0, void 0, function () {
      return (0, o.Jh)(this, function (n) {
        return (lh(t), ch(t) ? (t.Br.Nr(e), uh(t)) : t.Br.set("Unknown"), [2]);
      });
    });
  }
  function dh(t, e, n) {
    return (0, o.mG)(this, void 0, void 0, function () {
      var r, i, s;
      return (0, o.Jh)(this, function (a) {
        switch (a.label) {
          case 0:
            if (
              (t.Br.set("Online"),
              !(e instanceof Os && 2 === e.state && e.cause))
            )
              return [3, 6];
            a.label = 1;
          case 1:
            return (
              a.trys.push([1, 3, , 5]),
              [
                4,
                (function (t, e) {
                  return (0, o.mG)(this, void 0, void 0, function () {
                    var n, r, i, s;
                    return (0, o.Jh)(this, function (o) {
                      switch (o.label) {
                        case 0:
                          ((n = e.cause),
                            (r = 0),
                            (i = e.targetIds),
                            (o.label = 1));
                        case 1:
                          return r < i.length
                            ? ((s = i[r]),
                              t.$r.has(s)
                                ? [4, t.remoteSyncer.rejectListen(s, n)]
                                : [3, 3])
                            : [3, 5];
                        case 2:
                          (o.sent(),
                            t.$r.delete(s),
                            t.qr.removeTarget(s),
                            (o.label = 3));
                        case 3:
                          o.label = 4;
                        case 4:
                          return (r++, [3, 1]);
                        case 5:
                          return [2];
                      }
                    });
                  });
                })(t, e),
              ]
            );
          case 2:
            return (a.sent(), [3, 5]);
          case 3:
            return (
              (r = a.sent()),
              Wr(
                "RemoteStore",
                "Failed to remove targets %s: %s ",
                e.targetIds.join(","),
                r,
              ),
              [4, vh(t, r)]
            );
          case 4:
            return (a.sent(), [3, 5]);
          case 5:
            return [3, 13];
          case 6:
            if (
              (e instanceof Ds
                ? t.qr.X(e)
                : e instanceof Cs
                  ? t.qr.rt(e)
                  : t.qr.et(e),
              n.isEqual(ui.min()))
            )
              return [3, 13];
            a.label = 7;
          case 7:
            return (a.trys.push([7, 11, , 13]), [4, uc(t.localStore)]);
          case 8:
            return (
              (i = a.sent()),
              n.compareTo(i) >= 0
                ? [
                    4,
                    (function (t, e) {
                      var n = t.qr.ut(e);
                      return (
                        n.targetChanges.forEach(function (n, r) {
                          if (n.resumeToken.approximateByteSize() > 0) {
                            var i = t.$r.get(r);
                            i &&
                              t.$r.set(r, i.withResumeToken(n.resumeToken, e));
                          }
                        }),
                        n.targetMismatches.forEach(function (e) {
                          var n = t.$r.get(e);
                          if (n) {
                            (t.$r.set(
                              e,
                              n.withResumeToken(
                                yi.EMPTY_BYTE_STRING,
                                n.snapshotVersion,
                              ),
                            ),
                              ah(t, e));
                            var r = new tu(n.target, e, 1, n.sequenceNumber);
                            sh(t, r);
                          }
                        }),
                        t.remoteSyncer.applyRemoteEvent(n)
                      );
                    })(t, n),
                  ]
                : [3, 10]
            );
          case 9:
            (a.sent(), (a.label = 10));
          case 10:
            return [3, 13];
          case 11:
            return (
              Wr("RemoteStore", "Failed to raise snapshot:", (s = a.sent())),
              [4, vh(t, s)]
            );
          case 12:
            return (a.sent(), [3, 13]);
          case 13:
            return [2];
        }
      });
    });
  }
  function vh(t, e, n) {
    return (0, o.mG)(this, void 0, void 0, function () {
      var r = this;
      return (0, o.Jh)(this, function (i) {
        switch (i.label) {
          case 0:
            if (!Ka(e)) throw e;
            return (t.Or.add(1), [4, rh(t)]);
          case 1:
            return (
              i.sent(),
              t.Br.set("Offline"),
              n ||
                (n = function () {
                  return uc(t.localStore);
                }),
              t.asyncQueue.enqueueRetryable(function () {
                return (0, o.mG)(r, void 0, void 0, function () {
                  return (0, o.Jh)(this, function (e) {
                    switch (e.label) {
                      case 0:
                        return (
                          Wr("RemoteStore", "Retrying IndexedDB access"),
                          [4, n()]
                        );
                      case 1:
                        return (e.sent(), t.Or.delete(1), [4, nh(t)]);
                      case 2:
                        return (e.sent(), [2]);
                    }
                  });
                });
              }),
              [2]
            );
        }
      });
    });
  }
  function gh(t, e) {
    return e().catch(function (n) {
      return vh(t, n, e);
    });
  }
  function yh(t) {
    return (0, o.mG)(this, void 0, void 0, function () {
      var e, n, r, i, s;
      return (0, o.Jh)(this, function (o) {
        switch (o.label) {
          case 0:
            ((e = ei(t)),
              (n = Ah(e)),
              (r = e.Fr.length > 0 ? e.Fr[e.Fr.length - 1].batchId : -1),
              (o.label = 1));
          case 1:
            if (
              !(function (t) {
                return hh(t) && t.Fr.length < 10;
              })(e)
            )
              return [3, 7];
            o.label = 2;
          case 2:
            return (o.trys.push([2, 4, , 6]), [4, lc(e.localStore, r)]);
          case 3:
            return null === (i = o.sent())
              ? (0 === e.Fr.length && n.ir(), [3, 7])
              : ((r = i.batchId),
                (function (t, e) {
                  t.Fr.push(e);
                  var n = Ah(t);
                  n.er() && n.pr && n.Er(e.mutations);
                })(e, i),
                [3, 6]);
          case 4:
            return ((s = o.sent()), [4, vh(e, s)]);
          case 5:
            return (o.sent(), [3, 6]);
          case 6:
            return [3, 1];
          case 7:
            return (mh(e) && bh(e), [2]);
        }
      });
    });
  }
  function mh(t) {
    return hh(t) && !Ah(t).tr() && t.Fr.length > 0;
  }
  function bh(t) {
    Ah(t).start();
  }
  function wh(t) {
    return (0, o.mG)(this, void 0, void 0, function () {
      return (0, o.Jh)(this, function (e) {
        return (Ah(t).Ar(), [2]);
      });
    });
  }
  function _h(t) {
    return (0, o.mG)(this, void 0, void 0, function () {
      var e, n, r, i;
      return (0, o.Jh)(this, function (o) {
        for (e = Ah(t), n = 0, r = t.Fr; n < r.length; n++)
          ((i = r[n]), e.Er(i.mutations));
        return [2];
      });
    });
  }
  function Th(t, e, n) {
    return (0, o.mG)(this, void 0, void 0, function () {
      var r, i;
      return (0, o.Jh)(this, function (o) {
        switch (o.label) {
          case 0:
            return (
              (r = t.Fr.shift()),
              (i = $a.from(r, e, n)),
              [
                4,
                gh(t, function () {
                  return t.remoteSyncer.applySuccessfulWrite(i);
                }),
              ]
            );
          case 1:
            return (o.sent(), [4, yh(t)]);
          case 2:
            return (o.sent(), [2]);
        }
      });
    });
  }
  function Eh(t, e) {
    return (0, o.mG)(this, void 0, void 0, function () {
      return (0, o.Jh)(this, function (n) {
        switch (n.label) {
          case 0:
            return e && Ah(t).pr
              ? [
                  4,
                  (function (t, e) {
                    return (0, o.mG)(this, void 0, void 0, function () {
                      var n, r;
                      return (0, o.Jh)(this, function (i) {
                        switch (i.label) {
                          case 0:
                            return ls((r = e.code)) && r !== Kr.ABORTED
                              ? ((n = t.Fr.shift()),
                                Ah(t).sr(),
                                [
                                  4,
                                  gh(t, function () {
                                    return t.remoteSyncer.rejectFailedWrite(
                                      n.batchId,
                                      e,
                                    );
                                  }),
                                ])
                              : [3, 3];
                          case 1:
                            return (i.sent(), [4, yh(t)]);
                          case 2:
                            (i.sent(), (i.label = 3));
                          case 3:
                            return [2];
                        }
                      });
                    });
                  })(t, e),
                ]
              : [3, 2];
          case 1:
            (n.sent(), (n.label = 2));
          case 2:
            return (mh(t) && bh(t), [2]);
        }
      });
    });
  }
  function Ih(t, e) {
    return (0, o.mG)(this, void 0, void 0, function () {
      var n;
      return (0, o.Jh)(this, function (r) {
        switch (r.label) {
          case 0:
            return ((n = ei(t)), e ? (n.Or.delete(2), [4, nh(n)]) : [3, 2]);
          case 1:
            return (r.sent(), [3, 5]);
          case 2:
            return e ? [3, 4] : (n.Or.add(2), [4, rh(n)]);
          case 3:
            (r.sent(), n.Br.set("Unknown"), (r.label = 4));
          case 4:
            r.label = 5;
          case 5:
            return [2];
        }
      });
    });
  }
  function Sh(t) {
    var e = this;
    return (
      t.Ur ||
        ((t.Ur = (function (t, e, n) {
          var r = ei(t);
          return (r.br(), new Xc(e, r.Hi, r.credentials, r.R, n));
        })(t.datastore, t.asyncQueue, {
          Ii: fh.bind(null, t),
          Ri: ph.bind(null, t),
          _r: dh.bind(null, t),
        })),
        t.Mr.push(function (n) {
          return (0, o.mG)(e, void 0, void 0, function () {
            return (0, o.Jh)(this, function (e) {
              switch (e.label) {
                case 0:
                  return n
                    ? (t.Ur.sr(), ch(t) ? uh(t) : t.Br.set("Unknown"), [3, 3])
                    : [3, 1];
                case 1:
                  return [4, t.Ur.stop()];
                case 2:
                  (e.sent(), lh(t), (e.label = 3));
                case 3:
                  return [2];
              }
            });
          });
        })),
      t.Ur
    );
  }
  function Ah(t) {
    var e = this;
    return (
      t.Kr ||
        ((t.Kr = (function (t, e, n) {
          var r = ei(t);
          return (r.br(), new Yc(e, r.Hi, r.credentials, r.R, n));
        })(t.datastore, t.asyncQueue, {
          Ii: wh.bind(null, t),
          Ri: Eh.bind(null, t),
          Ir: _h.bind(null, t),
          Tr: Th.bind(null, t),
        })),
        t.Mr.push(function (n) {
          return (0, o.mG)(e, void 0, void 0, function () {
            return (0, o.Jh)(this, function (e) {
              switch (e.label) {
                case 0:
                  return n ? (t.Kr.sr(), [4, yh(t)]) : [3, 2];
                case 1:
                  return (e.sent(), [3, 4]);
                case 2:
                  return [4, t.Kr.stop()];
                case 3:
                  (e.sent(),
                    t.Fr.length > 0 &&
                      (Wr(
                        "RemoteStore",
                        "Stopping write stream with " +
                          t.Fr.length +
                          " pending writes",
                      ),
                      (t.Fr = [])),
                    (e.label = 4));
                case 4:
                  return [2];
              }
            });
          });
        })),
      t.Kr
    );
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
  }
  var kh = (function () {
    function t(t, e, n, r, i) {
      ((this.asyncQueue = t),
        (this.timerId = e),
        (this.targetTimeMs = n),
        (this.op = r),
        (this.removalCallback = i),
        (this.deferred = new Va()),
        (this.then = this.deferred.promise.then.bind(this.deferred.promise)),
        this.deferred.promise.catch(function (t) {}));
    }
    return (
      (t.createAndSchedule = function (e, n, r, i, o) {
        var s = new t(e, n, Date.now() + r, i, o);
        return (s.start(r), s);
      }),
      (t.prototype.start = function (t) {
        var e = this;
        this.timerHandle = setTimeout(function () {
          return e.handleDelayElapsed();
        }, t);
      }),
      (t.prototype.skipDelay = function () {
        return this.handleDelayElapsed();
      }),
      (t.prototype.cancel = function (t) {
        null !== this.timerHandle &&
          (this.clearTimeout(),
          this.deferred.reject(
            new Hr(Kr.CANCELLED, "Operation cancelled" + (t ? ": " + t : "")),
          ));
      }),
      (t.prototype.handleDelayElapsed = function () {
        var t = this;
        this.asyncQueue.enqueueAndForget(function () {
          return null !== t.timerHandle
            ? (t.clearTimeout(),
              t.op().then(function (e) {
                return t.deferred.resolve(e);
              }))
            : Promise.resolve();
        });
      }),
      (t.prototype.clearTimeout = function () {
        null !== this.timerHandle &&
          (this.removalCallback(this),
          clearTimeout(this.timerHandle),
          (this.timerHandle = null));
      }),
      t
    );
  })();
  function Nh(t, e) {
    if ((Zr("AsyncQueue", e + ": " + t), Ka(t)))
      return new Hr(Kr.UNAVAILABLE, e + ": " + t);
    throw t;
  }
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ var Rh = (function () {
      function t(t) {
        ((this.comparator = t
          ? function (e, n) {
              return t(e, n) || Ni.comparator(e.key, n.key);
            }
          : function (t, e) {
              return Ni.comparator(t.key, e.key);
            }),
          (this.keyedMap = _s()),
          (this.sortedSet = new ps(this.comparator)));
      }
      return (
        (t.emptySet = function (e) {
          return new t(e.comparator);
        }),
        (t.prototype.has = function (t) {
          return null != this.keyedMap.get(t);
        }),
        (t.prototype.get = function (t) {
          return this.keyedMap.get(t);
        }),
        (t.prototype.first = function () {
          return this.sortedSet.minKey();
        }),
        (t.prototype.last = function () {
          return this.sortedSet.maxKey();
        }),
        (t.prototype.isEmpty = function () {
          return this.sortedSet.isEmpty();
        }),
        (t.prototype.indexOf = function (t) {
          var e = this.keyedMap.get(t);
          return e ? this.sortedSet.indexOf(e) : -1;
        }),
        Object.defineProperty(t.prototype, "size", {
          get: function () {
            return this.sortedSet.size;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.forEach = function (t) {
          this.sortedSet.inorderTraversal(function (e, n) {
            return (t(e), !1);
          });
        }),
        (t.prototype.add = function (t) {
          var e = this.delete(t.key);
          return e.copy(
            e.keyedMap.insert(t.key, t),
            e.sortedSet.insert(t, null),
          );
        }),
        (t.prototype.delete = function (t) {
          var e = this.get(t);
          return e
            ? this.copy(this.keyedMap.remove(t), this.sortedSet.remove(e))
            : this;
        }),
        (t.prototype.isEqual = function (e) {
          if (!(e instanceof t)) return !1;
          if (this.size !== e.size) return !1;
          for (
            var n = this.sortedSet.getIterator(), r = e.sortedSet.getIterator();
            n.hasNext();
          ) {
            var i = n.getNext().key,
              o = r.getNext().key;
            if (!i.isEqual(o)) return !1;
          }
          return !0;
        }),
        (t.prototype.toString = function () {
          var t = [];
          return (
            this.forEach(function (e) {
              t.push(e.toString());
            }),
            0 === t.length
              ? "DocumentSet ()"
              : "DocumentSet (\n  " + t.join("  \n") + "\n)"
          );
        }),
        (t.prototype.copy = function (e, n) {
          var r = new t();
          return (
            (r.comparator = this.comparator),
            (r.keyedMap = e),
            (r.sortedSet = n),
            r
          );
        }),
        t
      );
    })(),
    Dh = (function () {
      function t() {
        this.Qr = new ps(Ni.comparator);
      }
      return (
        (t.prototype.track = function (t) {
          var e = t.doc.key,
            n = this.Qr.get(e);
          n
            ? 0 !== t.type && 3 === n.type
              ? (this.Qr = this.Qr.insert(e, t))
              : 3 === t.type && 1 !== n.type
                ? (this.Qr = this.Qr.insert(e, { type: n.type, doc: t.doc }))
                : 2 === t.type && 2 === n.type
                  ? (this.Qr = this.Qr.insert(e, { type: 2, doc: t.doc }))
                  : 2 === t.type && 0 === n.type
                    ? (this.Qr = this.Qr.insert(e, { type: 0, doc: t.doc }))
                    : 1 === t.type && 0 === n.type
                      ? (this.Qr = this.Qr.remove(e))
                      : 1 === t.type && 2 === n.type
                        ? (this.Qr = this.Qr.insert(e, { type: 1, doc: n.doc }))
                        : 0 === t.type && 1 === n.type
                          ? (this.Qr = this.Qr.insert(e, {
                              type: 2,
                              doc: t.doc,
                            }))
                          : $r()
            : (this.Qr = this.Qr.insert(e, t));
        }),
        (t.prototype.jr = function () {
          var t = [];
          return (
            this.Qr.inorderTraversal(function (e, n) {
              t.push(n);
            }),
            t
          );
        }),
        t
      );
    })(),
    Ch = (function () {
      function t(t, e, n, r, i, o, s, a) {
        ((this.query = t),
          (this.docs = e),
          (this.oldDocs = n),
          (this.docChanges = r),
          (this.mutatedKeys = i),
          (this.fromCache = o),
          (this.syncStateChanged = s),
          (this.excludesMetadataChanges = a));
      }
      return (
        (t.fromInitialDocuments = function (e, n, r, i) {
          var o = [];
          return (
            n.forEach(function (t) {
              o.push({ type: 0, doc: t });
            }),
            new t(e, n, Rh.emptySet(n), o, r, i, !0, !1)
          );
        }),
        Object.defineProperty(t.prototype, "hasPendingWrites", {
          get: function () {
            return !this.mutatedKeys.isEmpty();
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.isEqual = function (t) {
          if (
            !(
              this.fromCache === t.fromCache &&
              this.syncStateChanged === t.syncStateChanged &&
              this.mutatedKeys.isEqual(t.mutatedKeys) &&
              Io(this.query, t.query) &&
              this.docs.isEqual(t.docs) &&
              this.oldDocs.isEqual(t.oldDocs)
            )
          )
            return !1;
          var e = this.docChanges,
            n = t.docChanges;
          if (e.length !== n.length) return !1;
          for (var r = 0; r < e.length; r++)
            if (e[r].type !== n[r].type || !e[r].doc.isEqual(n[r].doc))
              return !1;
          return !0;
        }),
        t
      );
    })(),
    Oh = function () {
      ((this.Wr = void 0), (this.listeners = []));
    },
    xh = function () {
      ((this.queries = new qu(function (t) {
        return So(t);
      }, Io)),
        (this.onlineState = "Unknown"),
        (this.Gr = new Set()));
    };
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ function Ph(t, e) {
    return (0, o.mG)(this, void 0, void 0, function () {
      var n, r, i, s, a, u, c;
      return (0, o.Jh)(this, function (o) {
        switch (o.label) {
          case 0:
            if (
              ((n = ei(t)),
              (r = e.query),
              (i = !1),
              (s = n.queries.get(r)) || ((i = !0), (s = new Oh())),
              !i)
            )
              return [3, 4];
            o.label = 1;
          case 1:
            return (o.trys.push([1, 3, , 4]), (a = s), [4, n.onListen(r)]);
          case 2:
            return ((a.Wr = o.sent()), [3, 4]);
          case 3:
            return (
              (u = o.sent()),
              (c = Nh(
                u,
                "Initialization of query '" + Ao(e.query) + "' failed",
              )),
              [2, void e.onError(c)]
            );
          case 4:
            return (
              n.queries.set(r, s),
              s.listeners.push(e),
              e.zr(n.onlineState),
              s.Wr && e.Hr(s.Wr) && Uh(n),
              [2]
            );
        }
      });
    });
  }
  function Lh(t, e) {
    return (0, o.mG)(this, void 0, void 0, function () {
      var n, r, i, s, a;
      return (0, o.Jh)(this, function (o) {
        return (
          (n = ei(t)),
          (r = e.query),
          (i = !1),
          (s = n.queries.get(r)) &&
            (a = s.listeners.indexOf(e)) >= 0 &&
            (s.listeners.splice(a, 1), (i = 0 === s.listeners.length)),
          i ? [2, (n.queries.delete(r), n.onUnlisten(r))] : [2]
        );
      });
    });
  }
  function Mh(t, e) {
    for (var n = ei(t), r = !1, i = 0, o = e; i < o.length; i++) {
      var s = o[i],
        a = s.query,
        u = n.queries.get(a);
      if (u) {
        for (var c = 0, h = u.listeners; c < h.length; c++)
          h[c].Hr(s) && (r = !0);
        u.Wr = s;
      }
    }
    r && Uh(n);
  }
  function Fh(t, e, n) {
    var r = ei(t),
      i = r.queries.get(e);
    if (i) for (var o = 0, s = i.listeners; o < s.length; o++) s[o].onError(n);
    r.queries.delete(e);
  }
  function Uh(t) {
    t.Gr.forEach(function (t) {
      t.next();
    });
  }
  var Vh = (function () {
      function t(t, e, n) {
        ((this.query = t),
          (this.Jr = e),
          (this.Yr = !1),
          (this.Xr = null),
          (this.onlineState = "Unknown"),
          (this.options = n || {}));
      }
      return (
        (t.prototype.Hr = function (t) {
          if (!this.options.includeMetadataChanges) {
            for (var e = [], n = 0, r = t.docChanges; n < r.length; n++) {
              var i = r[n];
              3 !== i.type && e.push(i);
            }
            t = new Ch(
              t.query,
              t.docs,
              t.oldDocs,
              e,
              t.mutatedKeys,
              t.fromCache,
              t.syncStateChanged,
              !0,
            );
          }
          var o = !1;
          return (
            this.Yr
              ? this.Zr(t) && (this.Jr.next(t), (o = !0))
              : this.eo(t, this.onlineState) && (this.no(t), (o = !0)),
            (this.Xr = t),
            o
          );
        }),
        (t.prototype.onError = function (t) {
          this.Jr.error(t);
        }),
        (t.prototype.zr = function (t) {
          this.onlineState = t;
          var e = !1;
          return (
            this.Xr &&
              !this.Yr &&
              this.eo(this.Xr, t) &&
              (this.no(this.Xr), (e = !0)),
            e
          );
        }),
        (t.prototype.eo = function (t, e) {
          if (!t.fromCache) return !0;
          var n = "Offline" !== e;
          return !(
            (this.options.so && n) ||
            (t.docs.isEmpty() && "Offline" !== e)
          );
        }),
        (t.prototype.Zr = function (t) {
          if (t.docChanges.length > 0) return !0;
          var e = this.Xr && this.Xr.hasPendingWrites !== t.hasPendingWrites;
          return (
            !(!t.syncStateChanged && !e) &&
            !0 === this.options.includeMetadataChanges
          );
        }),
        (t.prototype.no = function (t) {
          ((t = Ch.fromInitialDocuments(
            t.query,
            t.docs,
            t.mutatedKeys,
            t.fromCache,
          )),
            (this.Yr = !0),
            this.Jr.next(t));
        }),
        t
      );
    })(),
    qh = (function () {
      function t(t, e) {
        ((this.payload = t), (this.byteLength = e));
      }
      return (
        (t.prototype.io = function () {
          return "metadata" in this.payload;
        }),
        t
      );
    })(),
    jh = (function () {
      function t(t) {
        this.R = t;
      }
      return (
        (t.prototype.qn = function (t) {
          return Js(this.R, t);
        }),
        (t.prototype.Un = function (t) {
          return t.metadata.exists
            ? $s(this.R, t.document, !1)
            : Ki.newNoDocument(
                this.qn(t.metadata.name),
                this.Kn(t.metadata.readTime),
              );
        }),
        (t.prototype.Kn = function (t) {
          return Gs(t);
        }),
        t
      );
    })();
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ (function () {
    function t(t, e, n) {
      ((this.ro = t),
        (this.localStore = e),
        (this.R = n),
        (this.queries = []),
        (this.documents = []),
        (this.progress = Bh(t)));
    }
    ((t.prototype.oo = function (t) {
      this.progress.bytesLoaded += t.byteLength;
      var e = this.progress.documentsLoaded;
      return (
        t.payload.namedQuery
          ? this.queries.push(t.payload.namedQuery)
          : t.payload.documentMetadata
            ? (this.documents.push({ metadata: t.payload.documentMetadata }),
              t.payload.documentMetadata.exists || ++e)
            : t.payload.document &&
              ((this.documents[this.documents.length - 1].document =
                t.payload.document),
              ++e),
        e !== this.progress.documentsLoaded
          ? ((this.progress.documentsLoaded = e),
            Object.assign({}, this.progress))
          : null
      );
    }),
      (t.prototype.co = function (t) {
        for (
          var e = new Map(), n = new jh(this.R), r = 0, i = t;
          r < i.length;
          r++
        ) {
          var o = i[r];
          if (o.metadata.queries)
            for (
              var s = n.qn(o.metadata.name), a = 0, u = o.metadata.queries;
              a < u.length;
              a++
            ) {
              var c = u[a],
                h = (e.get(c) || Ss()).add(s);
              e.set(c, h);
            }
        }
        return e;
      }),
      (t.prototype.complete = function () {
        return (0, o.mG)(this, void 0, void 0, function () {
          var t, e, n, r, i;
          return (0, o.Jh)(this, function (o) {
            switch (o.label) {
              case 0:
                return [
                  4,
                  mc(
                    this.localStore,
                    new jh(this.R),
                    this.documents,
                    this.ro.id,
                  ),
                ];
              case 1:
                ((t = o.sent()),
                  (e = this.co(this.documents)),
                  (n = 0),
                  (r = this.queries),
                  (o.label = 2));
              case 2:
                return n < r.length
                  ? ((i = r[n]), [4, bc(this.localStore, i, e.get(i.name))])
                  : [3, 5];
              case 3:
                (o.sent(), (o.label = 4));
              case 4:
                return (n++, [3, 2]);
              case 5:
                return [
                  2,
                  ((this.progress.taskState = "Success"),
                  new tc(Object.assign({}, this.progress), t)),
                ];
            }
          });
        });
      }));
  })();
  function Bh(t) {
    return {
      taskState: "Running",
      documentsLoaded: 0,
      bytesLoaded: 0,
      totalDocuments: t.totalDocuments,
      totalBytes: t.totalBytes,
    };
  }
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ var Gh = function (t) {
      this.key = t;
    },
    zh = function (t) {
      this.key = t;
    },
    Kh = (function () {
      function t(t, e) {
        ((this.query = t),
          (this.uo = e),
          (this.ao = null),
          (this.current = !1),
          (this.ho = Ss()),
          (this.mutatedKeys = Ss()),
          (this.lo = No(t)),
          (this.fo = new Rh(this.lo)));
      }
      return (
        Object.defineProperty(t.prototype, "wo", {
          get: function () {
            return this.uo;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype._o = function (t, e) {
          var n = this,
            r = e ? e.mo : new Dh(),
            i = e ? e.fo : this.fo,
            o = e ? e.mutatedKeys : this.mutatedKeys,
            s = i,
            a = !1,
            u = go(this.query) && i.size === this.query.limit ? i.last() : null,
            c =
              yo(this.query) && i.size === this.query.limit ? i.first() : null;
          if (
            (t.inorderTraversal(function (t, e) {
              var h = i.get(t),
                l = ko(n.query, e) ? e : null,
                f = !!h && n.mutatedKeys.has(h.key),
                p =
                  !!l &&
                  (l.hasLocalMutations ||
                    (n.mutatedKeys.has(l.key) && l.hasCommittedMutations)),
                d = !1;
              (h && l
                ? h.data.isEqual(l.data)
                  ? f !== p && (r.track({ type: 3, doc: l }), (d = !0))
                  : n.yo(h, l) ||
                    (r.track({ type: 2, doc: l }),
                    (d = !0),
                    ((u && n.lo(l, u) > 0) || (c && n.lo(l, c) < 0)) &&
                      (a = !0))
                : !h && l
                  ? (r.track({ type: 0, doc: l }), (d = !0))
                  : h &&
                    !l &&
                    (r.track({ type: 1, doc: h }),
                    (d = !0),
                    (u || c) && (a = !0)),
                d &&
                  (l
                    ? ((s = s.add(l)), (o = p ? o.add(t) : o.delete(t)))
                    : ((s = s.delete(t)), (o = o.delete(t)))));
            }),
            go(this.query) || yo(this.query))
          )
            for (; s.size > this.query.limit; ) {
              var h = go(this.query) ? s.last() : s.first();
              ((s = s.delete(h.key)),
                (o = o.delete(h.key)),
                r.track({ type: 1, doc: h }));
            }
          return { fo: s, mo: r, Nn: a, mutatedKeys: o };
        }),
        (t.prototype.yo = function (t, e) {
          return (
            t.hasLocalMutations &&
            e.hasCommittedMutations &&
            !e.hasLocalMutations
          );
        }),
        (t.prototype.applyChanges = function (t, e, n) {
          var r = this,
            i = this.fo;
          ((this.fo = t.fo), (this.mutatedKeys = t.mutatedKeys));
          var o = t.mo.jr();
          (o.sort(function (t, e) {
            return (
              (function (t, e) {
                var n = function (t) {
                  switch (t) {
                    case 0:
                      return 1;
                    case 2:
                    case 3:
                      return 2;
                    case 1:
                      return 0;
                    default:
                      return $r();
                  }
                };
                return n(t) - n(e);
              })(t.type, e.type) || r.lo(t.doc, e.doc)
            );
          }),
            this.po(n));
          var s = e ? this.Eo() : [],
            a = 0 === this.ho.size && this.current ? 1 : 0,
            u = a !== this.ao;
          return (
            (this.ao = a),
            0 !== o.length || u
              ? {
                  snapshot: new Ch(
                    this.query,
                    t.fo,
                    i,
                    o,
                    t.mutatedKeys,
                    0 === a,
                    u,
                    !1,
                  ),
                  To: s,
                }
              : { To: s }
          );
        }),
        (t.prototype.zr = function (t) {
          return this.current && "Offline" === t
            ? ((this.current = !1),
              this.applyChanges(
                {
                  fo: this.fo,
                  mo: new Dh(),
                  mutatedKeys: this.mutatedKeys,
                  Nn: !1,
                },
                !1,
              ))
            : { To: [] };
        }),
        (t.prototype.Io = function (t) {
          return (
            !this.uo.has(t) &&
            !!this.fo.has(t) &&
            !this.fo.get(t).hasLocalMutations
          );
        }),
        (t.prototype.po = function (t) {
          var e = this;
          t &&
            (t.addedDocuments.forEach(function (t) {
              return (e.uo = e.uo.add(t));
            }),
            t.modifiedDocuments.forEach(function (t) {}),
            t.removedDocuments.forEach(function (t) {
              return (e.uo = e.uo.delete(t));
            }),
            (this.current = t.current));
        }),
        (t.prototype.Eo = function () {
          var t = this;
          if (!this.current) return [];
          var e = this.ho;
          ((this.ho = Ss()),
            this.fo.forEach(function (e) {
              t.Io(e.key) && (t.ho = t.ho.add(e.key));
            }));
          var n = [];
          return (
            e.forEach(function (e) {
              t.ho.has(e) || n.push(new zh(e));
            }),
            this.ho.forEach(function (t) {
              e.has(t) || n.push(new Gh(t));
            }),
            n
          );
        }),
        (t.prototype.Ao = function (t) {
          ((this.uo = t.Bn), (this.ho = Ss()));
          var e = this._o(t.documents);
          return this.applyChanges(e, !0);
        }),
        (t.prototype.Ro = function () {
          return Ch.fromInitialDocuments(
            this.query,
            this.fo,
            this.mutatedKeys,
            0 === this.ao,
          );
        }),
        t
      );
    })(),
    Hh = function (t, e, n) {
      ((this.query = t), (this.targetId = e), (this.view = n));
    },
    Jh = function (t) {
      ((this.key = t), (this.bo = !1));
    },
    Qh = (function () {
      function t(t, e, n, r, i, o) {
        ((this.localStore = t),
          (this.remoteStore = e),
          (this.eventManager = n),
          (this.sharedClientState = r),
          (this.currentUser = i),
          (this.maxConcurrentLimboResolutions = o),
          (this.vo = {}),
          (this.Po = new qu(function (t) {
            return So(t);
          }, Io)),
          (this.Vo = new Map()),
          (this.So = new Set()),
          (this.Do = new ps(Ni.comparator)),
          (this.Co = new Map()),
          (this.No = new _c()),
          (this.xo = {}),
          (this.ko = new Map()),
          (this.Fo = Nu.Yt()),
          (this.onlineState = "Unknown"),
          (this.$o = void 0));
      }
      return (
        Object.defineProperty(t.prototype, "isPrimaryClient", {
          get: function () {
            return !0 === this.$o;
          },
          enumerable: !1,
          configurable: !0,
        }),
        t
      );
    })();
  function Wh(t, e) {
    return (0, o.mG)(this, void 0, void 0, function () {
      var n, r, i, s, a, u;
      return (0, o.Jh)(this, function (o) {
        switch (o.label) {
          case 0:
            return (
              (n = Il(t)),
              (s = n.Po.get(e))
                ? ((r = s.targetId),
                  n.sharedClientState.addLocalQueryTarget(r),
                  (i = s.view.Ro()),
                  [3, 4])
                : [3, 1]
            );
          case 1:
            return [4, fc(n.localStore, To(e))];
          case 2:
            return (
              (a = o.sent()),
              (u = n.sharedClientState.addLocalQueryTarget(a.targetId)),
              (r = a.targetId),
              [4, Zh(n, e, r, "current" === u)]
            );
          case 3:
            ((i = o.sent()),
              n.isPrimaryClient && ih(n.remoteStore, a),
              (o.label = 4));
          case 4:
            return [2, i];
        }
      });
    });
  }
  function Zh(t, e, n, r) {
    return (0, o.mG)(this, void 0, void 0, function () {
      var i, s, a, u, c, h;
      return (0, o.Jh)(this, function (l) {
        switch (l.label) {
          case 0:
            return (
              (t.Oo = function (e, n, r) {
                return (function (t, e, n, r) {
                  return (0, o.mG)(this, void 0, void 0, function () {
                    var i, s, a;
                    return (0, o.Jh)(this, function (o) {
                      switch (o.label) {
                        case 0:
                          return (
                            (i = e.view._o(n)),
                            i.Nn
                              ? [
                                  4,
                                  dc(t.localStore, e.query, !1).then(
                                    function (t) {
                                      var n = t.documents;
                                      return e.view._o(n, i);
                                    },
                                  ),
                                ]
                              : [3, 2]
                          );
                        case 1:
                          ((i = o.sent()), (o.label = 2));
                        case 2:
                          return (
                            (s = r && r.targetChanges.get(e.targetId)),
                            (a = e.view.applyChanges(i, t.isPrimaryClient, s)),
                            [2, (cl(t, e.targetId, a.To), a.snapshot)]
                          );
                      }
                    });
                  });
                })(t, e, n, r);
              }),
              [4, dc(t.localStore, e, !0)]
            );
          case 1:
            return (
              (i = l.sent()),
              (s = new Kh(e, i.Bn)),
              (a = s._o(i.documents)),
              (u = Rs.createSynthesizedTargetChangeForCurrentChange(
                n,
                r && "Offline" !== t.onlineState,
              )),
              (c = s.applyChanges(a, t.isPrimaryClient, u)),
              cl(t, n, c.To),
              (h = new Hh(e, n, s)),
              [
                2,
                (t.Po.set(e, h),
                t.Vo.has(n) ? t.Vo.get(n).push(e) : t.Vo.set(n, [e]),
                c.snapshot),
              ]
            );
        }
      });
    });
  }
  function Xh(t, e) {
    return (0, o.mG)(this, void 0, void 0, function () {
      var n, r, i;
      return (0, o.Jh)(this, function (o) {
        switch (o.label) {
          case 0:
            return (
              (n = ei(t)),
              (r = n.Po.get(e)),
              (i = n.Vo.get(r.targetId)).length > 1
                ? [
                    2,
                    (n.Vo.set(
                      r.targetId,
                      i.filter(function (t) {
                        return !Io(t, e);
                      }),
                    ),
                    void n.Po.delete(e)),
                  ]
                : n.isPrimaryClient
                  ? (n.sharedClientState.removeLocalQueryTarget(r.targetId),
                    n.sharedClientState.isActiveQueryTarget(r.targetId)
                      ? [3, 2]
                      : [
                          4,
                          pc(n.localStore, r.targetId, !1)
                            .then(function () {
                              (n.sharedClientState.clearQueryState(r.targetId),
                                oh(n.remoteStore, r.targetId),
                                al(n, r.targetId));
                            })
                            .catch(xu),
                        ])
                  : [3, 3]
            );
          case 1:
            (o.sent(), (o.label = 2));
          case 2:
            return [3, 5];
          case 3:
            return (al(n, r.targetId), [4, pc(n.localStore, r.targetId, !0)]);
          case 4:
            (o.sent(), (o.label = 5));
          case 5:
            return [2];
        }
      });
    });
  }
  function Yh(t, e, n) {
    return (0, o.mG)(this, void 0, void 0, function () {
      var r, i, s, a;
      return (0, o.Jh)(this, function (o) {
        switch (o.label) {
          case 0:
            ((r = Sl(t)), (o.label = 1));
          case 1:
            return (
              o.trys.push([1, 5, , 6]),
              [
                4,
                (function (t, e) {
                  var n,
                    r = ei(t),
                    i = ai.now(),
                    o = e.reduce(function (t, e) {
                      return t.add(e.key);
                    }, Ss());
                  return r.persistence
                    .runTransaction(
                      "Locally write mutations",
                      "readwrite",
                      function (t) {
                        return r.Mn.pn(t, o).next(function (o) {
                          n = o;
                          for (var s = [], a = 0, u = e; a < u.length; a++) {
                            var c = u[a],
                              h = Yo(c, n.get(c.key));
                            null != h &&
                              s.push(
                                new ns(
                                  c.key,
                                  h,
                                  zi(h.value.mapValue),
                                  Jo.exists(!0),
                                ),
                              );
                          }
                          return r._n.addMutationBatch(t, i, s, e);
                        });
                      },
                    )
                    .then(function (t) {
                      return (
                        t.applyToLocalDocumentSet(n),
                        { batchId: t.batchId, changes: n }
                      );
                    });
                })(r.localStore, e),
              ]
            );
          case 2:
            return (
              (i = o.sent()),
              r.sharedClientState.addPendingMutation(i.batchId),
              (function (t, e, n) {
                var r = t.xo[t.currentUser.toKey()];
                (r || (r = new ps(ii)),
                  (r = r.insert(e, n)),
                  (t.xo[t.currentUser.toKey()] = r));
              })(r, i.batchId, n),
              [4, fl(r, i.changes)]
            );
          case 3:
            return (o.sent(), [4, yh(r.remoteStore)]);
          case 4:
            return (o.sent(), [3, 6]);
          case 5:
            return (
              (s = o.sent()),
              (a = Nh(s, "Failed to persist write")),
              n.reject(a),
              [3, 6]
            );
          case 6:
            return [2];
        }
      });
    });
  }
  function $h(t, e) {
    return (0, o.mG)(this, void 0, void 0, function () {
      var n, r;
      return (0, o.Jh)(this, function (i) {
        switch (i.label) {
          case 0:
            ((n = ei(t)), (i.label = 1));
          case 1:
            return (i.trys.push([1, 4, , 6]), [4, cc(n.localStore, e)]);
          case 2:
            return (
              (r = i.sent()),
              e.targetChanges.forEach(function (t, e) {
                var r = n.Co.get(e);
                r &&
                  (ti(
                    t.addedDocuments.size +
                      t.modifiedDocuments.size +
                      t.removedDocuments.size <=
                      1,
                  ),
                  t.addedDocuments.size > 0
                    ? (r.bo = !0)
                    : t.modifiedDocuments.size > 0
                      ? ti(r.bo)
                      : t.removedDocuments.size > 0 && (ti(r.bo), (r.bo = !1)));
              }),
              [4, fl(n, r, e)]
            );
          case 3:
            return (i.sent(), [3, 6]);
          case 4:
            return [4, xu(i.sent())];
          case 5:
            return (i.sent(), [3, 6]);
          case 6:
            return [2];
        }
      });
    });
  }
  function tl(t, e, n) {
    var r = ei(t);
    if ((r.isPrimaryClient && 0 === n) || (!r.isPrimaryClient && 1 === n)) {
      var i = [];
      (r.Po.forEach(function (t, n) {
        var r = n.view.zr(e);
        r.snapshot && i.push(r.snapshot);
      }),
        (function (t, e) {
          var n = ei(t);
          n.onlineState = e;
          var r = !1;
          (n.queries.forEach(function (t, n) {
            for (var i = 0, o = n.listeners; i < o.length; i++)
              o[i].zr(e) && (r = !0);
          }),
            r && Uh(n));
        })(r.eventManager, e),
        i.length && r.vo._r(i),
        (r.onlineState = e),
        r.isPrimaryClient && r.sharedClientState.setOnlineState(e));
    }
  }
  function el(t, e, n) {
    return (0, o.mG)(this, void 0, void 0, function () {
      var r, i, s, a, u, c;
      return (0, o.Jh)(this, function (o) {
        switch (o.label) {
          case 0:
            return (
              (r = ei(t)).sharedClientState.updateQueryState(e, "rejected", n),
              (i = r.Co.get(e)),
              (s = i && i.key)
                ? ((a = (a = new ps(Ni.comparator)).insert(
                    s,
                    Ki.newNoDocument(s, ui.min()),
                  )),
                  (u = Ss().add(s)),
                  (c = new Ns(ui.min(), new Map(), new gs(ii), a, u)),
                  [4, $h(r, c)])
                : [3, 2]
            );
          case 1:
            return (
              o.sent(),
              (r.Do = r.Do.remove(s)),
              r.Co.delete(e),
              ll(r),
              [3, 4]
            );
          case 2:
            return [
              4,
              pc(r.localStore, e, !1)
                .then(function () {
                  return al(r, e, n);
                })
                .catch(xu),
            ];
          case 3:
            (o.sent(), (o.label = 4));
          case 4:
            return [2];
        }
      });
    });
  }
  function nl(t, e) {
    return (0, o.mG)(this, void 0, void 0, function () {
      var n, r, i;
      return (0, o.Jh)(this, function (o) {
        switch (o.label) {
          case 0:
            ((n = ei(t)), (r = e.batch.batchId), (o.label = 1));
          case 1:
            return (o.trys.push([1, 4, , 6]), [4, ac(n.localStore, e)]);
          case 2:
            return (
              (i = o.sent()),
              sl(n, r, null),
              ol(n, r),
              n.sharedClientState.updateMutationState(r, "acknowledged"),
              [4, fl(n, i)]
            );
          case 3:
            return (o.sent(), [3, 6]);
          case 4:
            return [4, xu(o.sent())];
          case 5:
            return (o.sent(), [3, 6]);
          case 6:
            return [2];
        }
      });
    });
  }
  function rl(t, e, n) {
    return (0, o.mG)(this, void 0, void 0, function () {
      var r, i;
      return (0, o.Jh)(this, function (o) {
        switch (o.label) {
          case 0:
            ((r = ei(t)), (o.label = 1));
          case 1:
            return (
              o.trys.push([1, 4, , 6]),
              [
                4,
                (function (t, e) {
                  var n = ei(t);
                  return n.persistence.runTransaction(
                    "Reject batch",
                    "readwrite-primary",
                    function (t) {
                      var r;
                      return n._n
                        .lookupMutationBatch(t, e)
                        .next(function (e) {
                          return (
                            ti(null !== e),
                            (r = e.keys()),
                            n._n.removeMutationBatch(t, e)
                          );
                        })
                        .next(function () {
                          return n._n.performConsistencyCheck(t);
                        })
                        .next(function () {
                          return n.Mn.pn(t, r);
                        });
                    },
                  );
                })(r.localStore, e),
              ]
            );
          case 2:
            return (
              (i = o.sent()),
              sl(r, e, n),
              ol(r, e),
              r.sharedClientState.updateMutationState(e, "rejected", n),
              [4, fl(r, i)]
            );
          case 3:
            return (o.sent(), [3, 6]);
          case 4:
            return [4, xu(o.sent())];
          case 5:
            return (o.sent(), [3, 6]);
          case 6:
            return [2];
        }
      });
    });
  }
  function il(t, e) {
    return (0, o.mG)(this, void 0, void 0, function () {
      var n, r, i, s, a;
      return (0, o.Jh)(this, function (o) {
        switch (o.label) {
          case 0:
            (hh((n = ei(t)).remoteStore) ||
              Wr(
                "SyncEngine",
                "The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.",
              ),
              (o.label = 1));
          case 1:
            return (
              o.trys.push([1, 3, , 4]),
              [
                4,
                (function (t) {
                  var e = ei(t);
                  return e.persistence.runTransaction(
                    "Get highest unacknowledged batch id",
                    "readonly",
                    function (t) {
                      return e._n.getHighestUnacknowledgedBatchId(t);
                    },
                  );
                })(n.localStore),
              ]
            );
          case 2:
            return -1 === (r = o.sent())
              ? [2, void e.resolve()]
              : ((i = n.ko.get(r) || []).push(e), n.ko.set(r, i), [3, 4]);
          case 3:
            return (
              (s = o.sent()),
              (a = Nh(
                s,
                "Initialization of waitForPendingWrites() operation failed",
              )),
              e.reject(a),
              [3, 4]
            );
          case 4:
            return [2];
        }
      });
    });
  }
  function ol(t, e) {
    ((t.ko.get(e) || []).forEach(function (t) {
      t.resolve();
    }),
      t.ko.delete(e));
  }
  function sl(t, e, n) {
    var r = ei(t),
      i = r.xo[r.currentUser.toKey()];
    if (i) {
      var o = i.get(e);
      (o && (n ? o.reject(n) : o.resolve(), (i = i.remove(e))),
        (r.xo[r.currentUser.toKey()] = i));
    }
  }
  function al(t, e, n) {
    (void 0 === n && (n = null), t.sharedClientState.removeLocalQueryTarget(e));
    for (var r = 0, i = t.Vo.get(e); r < i.length; r++) {
      var o = i[r];
      (t.Po.delete(o), n && t.vo.Mo(o, n));
    }
    (t.Vo.delete(e),
      t.isPrimaryClient &&
        t.No.Zn(e).forEach(function (e) {
          t.No.containsKey(e) || ul(t, e);
        }));
  }
  function ul(t, e) {
    t.So.delete(e.path.canonicalString());
    var n = t.Do.get(e);
    null !== n &&
      (oh(t.remoteStore, n), (t.Do = t.Do.remove(e)), t.Co.delete(n), ll(t));
  }
  function cl(t, e, n) {
    for (var r = 0, i = n; r < i.length; r++) {
      var o = i[r];
      o instanceof Gh
        ? (t.No.addReference(o.key, e), hl(t, o))
        : o instanceof zh
          ? (Wr("SyncEngine", "Document no longer in limbo: " + o.key),
            t.No.removeReference(o.key, e),
            t.No.containsKey(o.key) || ul(t, o.key))
          : $r();
    }
  }
  function hl(t, e) {
    var n = e.key,
      r = n.path.canonicalString();
    t.Do.get(n) ||
      t.So.has(r) ||
      (Wr("SyncEngine", "New document in limbo: " + n), t.So.add(r), ll(t));
  }
  function ll(t) {
    for (; t.So.size > 0 && t.Do.size < t.maxConcurrentLimboResolutions; ) {
      var e = t.So.values().next().value;
      t.So.delete(e);
      var n = new Ni(pi.fromString(e)),
        r = t.Fo.next();
      (t.Co.set(r, new Jh(n)),
        (t.Do = t.Do.insert(n, r)),
        ih(t.remoteStore, new tu(To(vo(n.path)), r, 2, zr.o)));
    }
  }
  function fl(t, e, n) {
    return (0, o.mG)(this, void 0, void 0, function () {
      var r, i, s, a;
      return (0, o.Jh)(this, function (u) {
        switch (u.label) {
          case 0:
            return (
              (r = ei(t)),
              (i = []),
              (s = []),
              (a = []),
              r.Po.isEmpty()
                ? [3, 3]
                : (r.Po.forEach(function (t, o) {
                    a.push(
                      r.Oo(o, e, n).then(function (t) {
                        if (t) {
                          (r.isPrimaryClient &&
                            r.sharedClientState.updateQueryState(
                              o.targetId,
                              t.fromCache ? "not-current" : "current",
                            ),
                            i.push(t));
                          var e = nc.Pn(o.targetId, t);
                          s.push(e);
                        }
                      }),
                    );
                  }),
                  [4, Promise.all(a)])
            );
          case 1:
            return (
              u.sent(),
              r.vo._r(i),
              [
                4,
                (function (t, e) {
                  return (0, o.mG)(this, void 0, void 0, function () {
                    var n, r, i, s, a, u, c, h, l;
                    return (0, o.Jh)(this, function (o) {
                      switch (o.label) {
                        case 0:
                          ((n = ei(t)), (o.label = 1));
                        case 1:
                          return (
                            o.trys.push([1, 3, , 4]),
                            [
                              4,
                              n.persistence.runTransaction(
                                "notifyLocalViewChanges",
                                "readwrite",
                                function (t) {
                                  return qa.forEach(e, function (e) {
                                    return qa
                                      .forEach(e.bn, function (r) {
                                        return n.persistence.referenceDelegate.addReference(
                                          t,
                                          e.targetId,
                                          r,
                                        );
                                      })
                                      .next(function () {
                                        return qa.forEach(e.vn, function (r) {
                                          return n.persistence.referenceDelegate.removeReference(
                                            t,
                                            e.targetId,
                                            r,
                                          );
                                        });
                                      });
                                  });
                                },
                              ),
                            ]
                          );
                        case 2:
                          return (o.sent(), [3, 4]);
                        case 3:
                          if (!Ka((r = o.sent()))) throw r;
                          return (
                            Wr(
                              "LocalStore",
                              "Failed to update sequence numbers: " + r,
                            ),
                            [3, 4]
                          );
                        case 4:
                          for (i = 0, s = e; i < s.length; i++)
                            ((a = s[i]),
                              (u = a.targetId),
                              a.fromCache ||
                                ((c = n.kn.get(u)),
                                (h = c.snapshotVersion),
                                (l = c.withLastLimboFreeSnapshotVersion(h)),
                                (n.kn = n.kn.insert(u, l))));
                          return [2];
                      }
                    });
                  });
                })(r.localStore, s),
              ]
            );
          case 2:
            (u.sent(), (u.label = 3));
          case 3:
            return [2];
        }
      });
    });
  }
  function pl(t, e) {
    return (0, o.mG)(this, void 0, void 0, function () {
      var n, r;
      return (0, o.Jh)(this, function (i) {
        switch (i.label) {
          case 0:
            return (n = ei(t)).currentUser.isEqual(e)
              ? [3, 3]
              : (Wr("SyncEngine", "User change. New user:", e.toKey()),
                [4, sc(n.localStore, e)]);
          case 1:
            return (
              (r = i.sent()),
              (n.currentUser = e),
              (function (t, e) {
                (t.ko.forEach(function (t) {
                  t.forEach(function (t) {
                    t.reject(
                      new Hr(
                        Kr.CANCELLED,
                        "'waitForPendingWrites' promise is rejected due to a user change.",
                      ),
                    );
                  });
                }),
                  t.ko.clear());
              })(n),
              n.sharedClientState.handleUserChange(
                e,
                r.removedBatchIds,
                r.addedBatchIds,
              ),
              [4, fl(n, r.Ln)]
            );
          case 2:
            (i.sent(), (i.label = 3));
          case 3:
            return [2];
        }
      });
    });
  }
  function dl(t, e) {
    var n = ei(t),
      r = n.Co.get(e);
    if (r && r.bo) return Ss().add(r.key);
    var i = Ss(),
      o = n.Vo.get(e);
    if (!o) return i;
    for (var s = 0, a = o; s < a.length; s++) {
      var u = a[s],
        c = n.Po.get(u);
      i = i.unionWith(c.view.wo);
    }
    return i;
  }
  function vl(t, e) {
    return (0, o.mG)(this, void 0, void 0, function () {
      var n, r, i;
      return (0, o.Jh)(this, function (o) {
        switch (o.label) {
          case 0:
            return [4, dc((n = ei(t)).localStore, e.query, !0)];
          case 1:
            return (
              (r = o.sent()),
              (i = e.view.Ao(r)),
              [2, (n.isPrimaryClient && cl(n, e.targetId, i.To), i)]
            );
        }
      });
    });
  }
  function gl(t) {
    return (0, o.mG)(this, void 0, void 0, function () {
      var e;
      return (0, o.Jh)(this, function (n) {
        return [
          2,
          gc((e = ei(t)).localStore).then(function (t) {
            return fl(e, t);
          }),
        ];
      });
    });
  }
  function yl(t, e, n, r) {
    return (0, o.mG)(this, void 0, void 0, function () {
      var i, s;
      return (0, o.Jh)(this, function (o) {
        switch (o.label) {
          case 0:
            return [
              4,
              (function (t, e) {
                var n = ei(t),
                  r = ei(n._n);
                return n.persistence.runTransaction(
                  "Lookup mutation documents",
                  "readonly",
                  function (t) {
                    return r.jt(t, e).next(function (e) {
                      return e ? n.Mn.pn(t, e) : qa.resolve(null);
                    });
                  },
                );
              })((i = ei(t)).localStore, e),
            ];
          case 1:
            return null === (s = o.sent())
              ? [3, 6]
              : "pending" !== n
                ? [3, 3]
                : [4, yh(i.remoteStore)];
          case 2:
            return (o.sent(), [3, 4]);
          case 3:
            ("acknowledged" === n || "rejected" === n
              ? (sl(i, e, r || null),
                ol(i, e),
                (function (t, e) {
                  ei(ei(t)._n).Gt(e);
                })(i.localStore, e))
              : $r(),
              (o.label = 4));
          case 4:
            return [4, fl(i, s)];
          case 5:
            return (o.sent(), [3, 7]);
          case 6:
            (Wr("SyncEngine", "Cannot apply mutation batch with id: " + e),
              (o.label = 7));
          case 7:
            return [2];
        }
      });
    });
  }
  function ml(t, e) {
    return (0, o.mG)(this, void 0, void 0, function () {
      var n, r, i, s, a, u, c, h;
      return (0, o.Jh)(this, function (o) {
        switch (o.label) {
          case 0:
            return (
              Il((n = ei(t))),
              Sl(n),
              !0 !== e || !0 === n.$o
                ? [3, 3]
                : ((r = n.sharedClientState.getAllActiveQueryTargets()),
                  [4, bl(n, r.toArray())])
            );
          case 1:
            return ((i = o.sent()), (n.$o = !0), [4, Ih(n.remoteStore, !0)]);
          case 2:
            for (o.sent(), s = 0, a = i; s < a.length; s++)
              ((u = a[s]), ih(n.remoteStore, u));
            return [3, 7];
          case 3:
            return !1 !== e || !1 === n.$o
              ? [3, 7]
              : ((c = []),
                (h = Promise.resolve()),
                n.Vo.forEach(function (t, e) {
                  (n.sharedClientState.isLocalQueryTarget(e)
                    ? c.push(e)
                    : (h = h.then(function () {
                        return (al(n, e), pc(n.localStore, e, !0));
                      })),
                    oh(n.remoteStore, e));
                }),
                [4, h]);
          case 4:
            return (o.sent(), [4, bl(n, c)]);
          case 5:
            return (
              o.sent(),
              (function (t) {
                var e = ei(t);
                (e.Co.forEach(function (t, n) {
                  oh(e.remoteStore, n);
                }),
                  e.No.ts(),
                  (e.Co = new Map()),
                  (e.Do = new ps(Ni.comparator)));
              })(n),
              (n.$o = !1),
              [4, Ih(n.remoteStore, !1)]
            );
          case 6:
            (o.sent(), (o.label = 7));
          case 7:
            return [2];
        }
      });
    });
  }
  function bl(t, e, n) {
    return (0, o.mG)(this, void 0, void 0, function () {
      var n, r, i, s, a, u, c, h, l, f, p, d, v, g;
      return (0, o.Jh)(this, function (o) {
        switch (o.label) {
          case 0:
            ((n = ei(t)), (r = []), (i = []), (s = 0), (a = e), (o.label = 1));
          case 1:
            return s < a.length
              ? ((u = a[s]),
                (c = void 0),
                (h = n.Vo.get(u)) && 0 !== h.length
                  ? [4, fc(n.localStore, To(h[0]))]
                  : [3, 7])
              : [3, 13];
          case 2:
            ((c = o.sent()), (l = 0), (f = h), (o.label = 3));
          case 3:
            return l < f.length
              ? ((p = f[l]), (d = n.Po.get(p)), [4, vl(n, d)])
              : [3, 6];
          case 4:
            ((v = o.sent()).snapshot && i.push(v.snapshot), (o.label = 5));
          case 5:
            return (l++, [3, 3]);
          case 6:
            return [3, 11];
          case 7:
            return [4, vc(n.localStore, u)];
          case 8:
            return ((g = o.sent()), [4, fc(n.localStore, g)]);
          case 9:
            return ((c = o.sent()), [4, Zh(n, wl(g), u, !1)]);
          case 10:
            (o.sent(), (o.label = 11));
          case 11:
            (r.push(c), (o.label = 12));
          case 12:
            return (s++, [3, 1]);
          case 13:
            return [2, (n.vo._r(i), r)];
        }
      });
    });
  }
  function wl(t) {
    return po(
      t.path,
      t.collectionGroup,
      t.orderBy,
      t.filters,
      t.limit,
      "F",
      t.startAt,
      t.endAt,
    );
  }
  function _l(t) {
    var e = ei(t);
    return ei(ei(e.localStore).persistence).fn();
  }
  function Tl(t, e, n, r) {
    return (0, o.mG)(this, void 0, void 0, function () {
      var i, s, a;
      return (0, o.Jh)(this, function (o) {
        switch (o.label) {
          case 0:
            return (i = ei(t)).$o
              ? (Wr(
                  "SyncEngine",
                  "Ignoring unexpected query state notification.",
                ),
                [3, 8])
              : [3, 1];
          case 1:
            if (!i.Vo.has(e)) return [3, 8];
            switch (n) {
              case "current":
              case "not-current":
                return [3, 2];
              case "rejected":
                return [3, 5];
            }
            return [3, 7];
          case 2:
            return [4, gc(i.localStore)];
          case 3:
            return (
              (s = o.sent()),
              (a = Ns.createSynthesizedRemoteEventForCurrentChange(
                e,
                "current" === n,
              )),
              [4, fl(i, s, a)]
            );
          case 4:
            return (o.sent(), [3, 8]);
          case 5:
            return [4, pc(i.localStore, e, !0)];
          case 6:
            return (o.sent(), al(i, e, r), [3, 8]);
          case 7:
            ($r(), (o.label = 8));
          case 8:
            return [2];
        }
      });
    });
  }
  function El(t, e, n) {
    return (0, o.mG)(this, void 0, void 0, function () {
      var r, i, s, a, u, c, h, l, f, p;
      return (0, o.Jh)(this, function (d) {
        switch (d.label) {
          case 0:
            if (!(r = Il(t)).$o) return [3, 10];
            ((i = 0), (s = e), (d.label = 1));
          case 1:
            return i < s.length
              ? ((a = s[i]),
                r.Vo.has(a)
                  ? (Wr("SyncEngine", "Adding an already active target " + a),
                    [3, 5])
                  : [4, vc(r.localStore, a)])
              : [3, 6];
          case 2:
            return ((u = d.sent()), [4, fc(r.localStore, u)]);
          case 3:
            return ((c = d.sent()), [4, Zh(r, wl(u), c.targetId, !1)]);
          case 4:
            (d.sent(), ih(r.remoteStore, c), (d.label = 5));
          case 5:
            return (i++, [3, 1]);
          case 6:
            ((h = function (t) {
              return (0, o.Jh)(this, function (e) {
                switch (e.label) {
                  case 0:
                    return r.Vo.has(t)
                      ? [
                          4,
                          pc(r.localStore, t, !1)
                            .then(function () {
                              (oh(r.remoteStore, t), al(r, t));
                            })
                            .catch(xu),
                        ]
                      : [3, 2];
                  case 1:
                    (e.sent(), (e.label = 2));
                  case 2:
                    return [2];
                }
              });
            }),
              (l = 0),
              (f = n),
              (d.label = 7));
          case 7:
            return l < f.length ? ((p = f[l]), [5, h(p)]) : [3, 10];
          case 8:
            (d.sent(), (d.label = 9));
          case 9:
            return (l++, [3, 7]);
          case 10:
            return [2];
        }
      });
    });
  }
  function Il(t) {
    var e = ei(t);
    return (
      (e.remoteStore.remoteSyncer.applyRemoteEvent = $h.bind(null, e)),
      (e.remoteStore.remoteSyncer.getRemoteKeysForTarget = dl.bind(null, e)),
      (e.remoteStore.remoteSyncer.rejectListen = el.bind(null, e)),
      (e.vo._r = Mh.bind(null, e.eventManager)),
      (e.vo.Mo = Fh.bind(null, e.eventManager)),
      e
    );
  }
  function Sl(t) {
    var e = ei(t);
    return (
      (e.remoteStore.remoteSyncer.applySuccessfulWrite = nl.bind(null, e)),
      (e.remoteStore.remoteSyncer.rejectFailedWrite = rl.bind(null, e)),
      e
    );
  }
  var Al = (function () {
      function t() {
        this.synchronizeTabs = !1;
      }
      return (
        (t.prototype.initialize = function (t) {
          return (0, o.mG)(this, void 0, void 0, function () {
            return (0, o.Jh)(this, function (e) {
              switch (e.label) {
                case 0:
                  return (
                    (this.R = Qc(t.databaseInfo.databaseId)),
                    (this.sharedClientState = this.Bo(t)),
                    (this.persistence = this.qo(t)),
                    [4, this.persistence.start()]
                  );
                case 1:
                  return (
                    e.sent(),
                    (this.gcScheduler = this.Uo(t)),
                    (this.localStore = this.Ko(t)),
                    [2]
                  );
              }
            });
          });
        }),
        (t.prototype.Uo = function (t) {
          return null;
        }),
        (t.prototype.Ko = function (t) {
          return oc(this.persistence, new rc(), t.initialUser, this.R);
        }),
        (t.prototype.qo = function (t) {
          return new kc(Rc.bs, this.R);
        }),
        (t.prototype.Bo = function (t) {
          return new qc();
        }),
        (t.prototype.terminate = function () {
          return (0, o.mG)(this, void 0, void 0, function () {
            return (0, o.Jh)(this, function (t) {
              switch (t.label) {
                case 0:
                  return (
                    this.gcScheduler && this.gcScheduler.stop(),
                    [4, this.sharedClientState.shutdown()]
                  );
                case 1:
                  return (t.sent(), [4, this.persistence.shutdown()]);
                case 2:
                  return (t.sent(), [2]);
              }
            });
          });
        }),
        t
      );
    })(),
    kl = (function (t) {
      function e(e, n, r) {
        var i = this;
        return (
          ((i = t.call(this) || this).Qo = e),
          (i.cacheSizeBytes = n),
          (i.forceOwnership = r),
          (i.synchronizeTabs = !1),
          i
        );
      }
      return (
        (0, o.ZT)(e, t),
        (e.prototype.initialize = function (e) {
          return (0, o.mG)(this, void 0, void 0, function () {
            var n = this;
            return (0, o.Jh)(this, function (r) {
              switch (r.label) {
                case 0:
                  return [4, t.prototype.initialize.call(this, e)];
                case 1:
                  return (r.sent(), [4, yc(this.localStore)]);
                case 2:
                  return (r.sent(), [4, this.Qo.initialize(this, e)]);
                case 3:
                  return (r.sent(), [4, Sl(this.Qo.syncEngine)]);
                case 4:
                  return (r.sent(), [4, yh(this.Qo.remoteStore)]);
                case 5:
                  return (
                    r.sent(),
                    [
                      4,
                      this.persistence.He(function () {
                        return (
                          n.gcScheduler &&
                            !n.gcScheduler.started &&
                            n.gcScheduler.start(n.localStore),
                          Promise.resolve()
                        );
                      }),
                    ]
                  );
                case 6:
                  return (r.sent(), [2]);
              }
            });
          });
        }),
        (e.prototype.Ko = function (t) {
          return oc(this.persistence, new rc(), t.initialUser, this.R);
        }),
        (e.prototype.Uo = function (t) {
          var e = this.persistence.referenceDelegate.garbageCollector;
          return new Mu(e, t.asyncQueue);
        }),
        (e.prototype.qo = function (t) {
          var e = $u(t.databaseInfo.databaseId, t.databaseInfo.persistenceKey),
            n =
              void 0 !== this.cacheSizeBytes
                ? wu.withCacheSize(this.cacheSizeBytes)
                : wu.DEFAULT;
          return new Zu(
            this.synchronizeTabs,
            e,
            t.clientId,
            n,
            t.asyncQueue,
            Hc(),
            Jc(),
            this.R,
            this.sharedClientState,
            !!this.forceOwnership,
          );
        }),
        (e.prototype.Bo = function (t) {
          return new qc();
        }),
        e
      );
    })(Al),
    Nl = (function (t) {
      function e(e, n) {
        var r = this;
        return (
          ((r = t.call(this, e, n, !1) || this).Qo = e),
          (r.cacheSizeBytes = n),
          (r.synchronizeTabs = !0),
          r
        );
      }
      return (
        (0, o.ZT)(e, t),
        (e.prototype.initialize = function (e) {
          return (0, o.mG)(this, void 0, void 0, function () {
            var n,
              r = this;
            return (0, o.Jh)(this, function (i) {
              switch (i.label) {
                case 0:
                  return [4, t.prototype.initialize.call(this, e)];
                case 1:
                  return (
                    i.sent(),
                    (n = this.Qo.syncEngine),
                    this.sharedClientState instanceof Vc
                      ? ((this.sharedClientState.syncEngine = {
                          ui: yl.bind(null, n),
                          ai: Tl.bind(null, n),
                          hi: El.bind(null, n),
                          fn: _l.bind(null, n),
                          ci: gl.bind(null, n),
                        }),
                        [4, this.sharedClientState.start()])
                      : [3, 3]
                  );
                case 2:
                  (i.sent(), (i.label = 3));
                case 3:
                  return [
                    4,
                    this.persistence.He(function (t) {
                      return (0, o.mG)(r, void 0, void 0, function () {
                        return (0, o.Jh)(this, function (e) {
                          switch (e.label) {
                            case 0:
                              return [4, ml(this.Qo.syncEngine, t)];
                            case 1:
                              return (
                                e.sent(),
                                this.gcScheduler &&
                                  (t && !this.gcScheduler.started
                                    ? this.gcScheduler.start(this.localStore)
                                    : t || this.gcScheduler.stop()),
                                [2]
                              );
                          }
                        });
                      });
                    }),
                  ];
                case 4:
                  return (i.sent(), [2]);
              }
            });
          });
        }),
        (e.prototype.Bo = function (t) {
          var e = Hc();
          if (!Vc.yt(e))
            throw new Hr(
              Kr.UNIMPLEMENTED,
              "IndexedDB persistence is only available on platforms that support LocalStorage.",
            );
          var n = $u(t.databaseInfo.databaseId, t.databaseInfo.persistenceKey);
          return new Vc(e, t.asyncQueue, n, t.clientId, t.initialUser);
        }),
        e
      );
    })(kl),
    Rl = (function () {
      function t() {}
      return (
        (t.prototype.initialize = function (t, e) {
          return (0, o.mG)(this, void 0, void 0, function () {
            var n = this;
            return (0, o.Jh)(this, function (r) {
              switch (r.label) {
                case 0:
                  return this.localStore
                    ? [3, 2]
                    : ((this.localStore = t.localStore),
                      (this.sharedClientState = t.sharedClientState),
                      (this.datastore = this.createDatastore(e)),
                      (this.remoteStore = this.createRemoteStore(e)),
                      (this.eventManager = this.createEventManager(e)),
                      (this.syncEngine = this.createSyncEngine(
                        e,
                        !t.synchronizeTabs,
                      )),
                      (this.sharedClientState.onlineStateHandler = function (
                        t,
                      ) {
                        return tl(n.syncEngine, t, 1);
                      }),
                      (this.remoteStore.remoteSyncer.handleCredentialChange =
                        pl.bind(null, this.syncEngine)),
                      [
                        4,
                        Ih(this.remoteStore, this.syncEngine.isPrimaryClient),
                      ]);
                case 1:
                  (r.sent(), (r.label = 2));
                case 2:
                  return [2];
              }
            });
          });
        }),
        (t.prototype.createEventManager = function (t) {
          return new xh();
        }),
        (t.prototype.createDatastore = function (t) {
          var e,
            n = Qc(t.databaseInfo.databaseId),
            r = ((e = t.databaseInfo), new Kc(e));
          return (function (t, e, n) {
            return new $c(t, e, n);
          })(t.credentials, r, n);
        }),
        (t.prototype.createRemoteStore = function (t) {
          var e,
            n,
            r,
            i,
            o,
            s = this;
          return (
            (e = this.localStore),
            (n = this.datastore),
            (r = t.asyncQueue),
            (i = function (t) {
              return tl(s.syncEngine, t, 0);
            }),
            (o = Bc.yt() ? new Bc() : new jc()),
            new eh(e, n, r, i, o)
          );
        }),
        (t.prototype.createSyncEngine = function (t, e) {
          return (function (t, e, n, r, i, o, s) {
            var a = new Qh(t, e, n, r, i, o);
            return (s && (a.$o = !0), a);
          })(
            this.localStore,
            this.remoteStore,
            this.eventManager,
            this.sharedClientState,
            t.initialUser,
            t.maxConcurrentLimboResolutions,
            e,
          );
        }),
        (t.prototype.terminate = function () {
          return (function (t) {
            return (0, o.mG)(this, void 0, void 0, function () {
              var e;
              return (0, o.Jh)(this, function (n) {
                switch (n.label) {
                  case 0:
                    return (
                      (e = ei(t)),
                      Wr("RemoteStore", "RemoteStore shutting down."),
                      e.Or.add(5),
                      [4, rh(e)]
                    );
                  case 1:
                    return (
                      n.sent(),
                      e.Lr.shutdown(),
                      e.Br.set("Unknown"),
                      [2]
                    );
                }
              });
            });
          })(this.remoteStore);
        }),
        t
      );
    })();
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  var Dl = (function () {
      function t(t) {
        ((this.observer = t), (this.muted = !1));
      }
      return (
        (t.prototype.next = function (t) {
          this.observer.next && this.jo(this.observer.next, t);
        }),
        (t.prototype.error = function (t) {
          this.observer.error
            ? this.jo(this.observer.error, t)
            : Gr.error("Uncaught Error in snapshot listener:", t);
        }),
        (t.prototype.Wo = function () {
          this.muted = !0;
        }),
        (t.prototype.jo = function (t, e) {
          var n = this;
          this.muted ||
            setTimeout(function () {
              n.muted || t(e);
            }, 0);
        }),
        t
      );
    })(),
    Cl =
      ((function () {
        function t(t, e) {
          var n = this;
          ((this.Go = t),
            (this.R = e),
            (this.metadata = new Va()),
            (this.buffer = new Uint8Array()),
            (this.zo = new TextDecoder("utf-8")),
            this.Ho().then(
              function (t) {
                t && t.io()
                  ? n.metadata.resolve(t.payload.metadata)
                  : n.metadata.reject(
                      new Error(
                        "The first element of the bundle is not a metadata, it is\n             " +
                          JSON.stringify(null == t ? void 0 : t.payload),
                      ),
                    );
              },
              function (t) {
                return n.metadata.reject(t);
              },
            ));
        }
        ((t.prototype.close = function () {
          return this.Go.cancel();
        }),
          (t.prototype.getMetadata = function () {
            return (0, o.mG)(this, void 0, void 0, function () {
              return (0, o.Jh)(this, function (t) {
                return [2, this.metadata.promise];
              });
            });
          }),
          (t.prototype.Lo = function () {
            return (0, o.mG)(this, void 0, void 0, function () {
              return (0, o.Jh)(this, function (t) {
                switch (t.label) {
                  case 0:
                    return [4, this.getMetadata()];
                  case 1:
                    return [2, (t.sent(), this.Ho())];
                }
              });
            });
          }),
          (t.prototype.Ho = function () {
            return (0, o.mG)(this, void 0, void 0, function () {
              var t, e, n, r;
              return (0, o.Jh)(this, function (i) {
                switch (i.label) {
                  case 0:
                    return [4, this.Jo()];
                  case 1:
                    return null === (t = i.sent())
                      ? [2, null]
                      : ((e = this.zo.decode(t)),
                        (n = Number(e)),
                        isNaN(n) &&
                          this.Yo(
                            "length string (" + e + ") is not valid number",
                          ),
                        [4, this.Xo(n)]);
                  case 2:
                    return (
                      (r = i.sent()),
                      [2, new qh(JSON.parse(r), t.length + n)]
                    );
                }
              });
            });
          }),
          (t.prototype.Zo = function () {
            return this.buffer.findIndex(function (t) {
              return t === "{".charCodeAt(0);
            });
          }),
          (t.prototype.Jo = function () {
            return (0, o.mG)(this, void 0, void 0, function () {
              var t, e;
              return (0, o.Jh)(this, function (n) {
                switch (n.label) {
                  case 0:
                    return this.Zo() < 0 ? [4, this.tc()] : [3, 3];
                  case 1:
                    if (n.sent()) return [3, 3];
                    n.label = 2;
                  case 2:
                    return [3, 0];
                  case 3:
                    return 0 === this.buffer.length
                      ? [2, null]
                      : ((t = this.Zo()) < 0 &&
                          this.Yo(
                            "Reached the end of bundle when a length string is expected.",
                          ),
                        (e = this.buffer.slice(0, t)),
                        [2, ((this.buffer = this.buffer.slice(t)), e)]);
                }
              });
            });
          }),
          (t.prototype.Xo = function (t) {
            return (0, o.mG)(this, void 0, void 0, function () {
              var e;
              return (0, o.Jh)(this, function (n) {
                switch (n.label) {
                  case 0:
                    return this.buffer.length < t ? [4, this.tc()] : [3, 3];
                  case 1:
                    (n.sent() &&
                      this.Yo(
                        "Reached the end of bundle when more is expected.",
                      ),
                      (n.label = 2));
                  case 2:
                    return [3, 0];
                  case 3:
                    return (
                      (e = this.zo.decode(this.buffer.slice(0, t))),
                      [2, ((this.buffer = this.buffer.slice(t)), e)]
                    );
                }
              });
            });
          }),
          (t.prototype.Yo = function (t) {
            throw (this.Go.cancel(), new Error("Invalid bundle format: " + t));
          }),
          (t.prototype.tc = function () {
            return (0, o.mG)(this, void 0, void 0, function () {
              var t, e;
              return (0, o.Jh)(this, function (n) {
                switch (n.label) {
                  case 0:
                    return [4, this.Go.read()];
                  case 1:
                    return (
                      (t = n.sent()).done ||
                        ((e = new Uint8Array(
                          this.buffer.length + t.value.length,
                        )).set(this.buffer),
                        e.set(t.value, this.buffer.length),
                        (this.buffer = e)),
                      [2, t.done]
                    );
                }
              });
            });
          }));
      })(),
      (function () {
        function t(t) {
          ((this.datastore = t),
            (this.readVersions = new Map()),
            (this.mutations = []),
            (this.committed = !1),
            (this.lastWriteError = null),
            (this.writtenDocs = new Set()));
        }
        return (
          (t.prototype.lookup = function (t) {
            return (0, o.mG)(this, void 0, void 0, function () {
              var e,
                n = this;
              return (0, o.Jh)(this, function (r) {
                switch (r.label) {
                  case 0:
                    if (
                      (this.ensureCommitNotCalled(), this.mutations.length > 0)
                    )
                      throw new Hr(
                        Kr.INVALID_ARGUMENT,
                        "Firestore transactions require all reads to be executed before all writes.",
                      );
                    return [
                      4,
                      (function (t, e) {
                        return (0, o.mG)(this, void 0, void 0, function () {
                          var n, r, i, s, a, u;
                          return (0, o.Jh)(this, function (o) {
                            switch (o.label) {
                              case 0:
                                return (
                                  (n = ei(t)),
                                  (r = Zs(n.R) + "/documents"),
                                  (i = {
                                    documents: e.map(function (t) {
                                      return Hs(n.R, t);
                                    }),
                                  }),
                                  [4, n.$i("BatchGetDocuments", r, i)]
                                );
                              case 1:
                                return (
                                  (s = o.sent()),
                                  (a = new Map()),
                                  s.forEach(function (t) {
                                    var e = (function (t, e) {
                                      return "found" in e
                                        ? (function (t, e) {
                                            (ti(!!e.found),
                                              e.found.name,
                                              e.found.updateTime);
                                            var n = Js(t, e.found.name),
                                              r = Gs(e.found.updateTime),
                                              i = new Gi({
                                                mapValue: {
                                                  fields: e.found.fields,
                                                },
                                              });
                                            return Ki.newFoundDocument(n, r, i);
                                          })(t, e)
                                        : "missing" in e
                                          ? (function (t, e) {
                                              (ti(!!e.missing),
                                                ti(!!e.readTime));
                                              var n = Js(t, e.missing),
                                                r = Gs(e.readTime);
                                              return Ki.newNoDocument(n, r);
                                            })(t, e)
                                          : $r();
                                    })(n.R, t);
                                    a.set(e.key.toString(), e);
                                  }),
                                  (u = []),
                                  [
                                    2,
                                    (e.forEach(function (t) {
                                      var e = a.get(t.toString());
                                      (ti(!!e), u.push(e));
                                    }),
                                    u),
                                  ]
                                );
                            }
                          });
                        });
                      })(this.datastore, t),
                    ];
                  case 1:
                    return [
                      2,
                      ((e = r.sent()).forEach(function (t) {
                        return n.recordVersion(t);
                      }),
                      e),
                    ];
                }
              });
            });
          }),
          (t.prototype.set = function (t, e) {
            (this.write(e.toMutation(t, this.precondition(t))),
              this.writtenDocs.add(t.toString()));
          }),
          (t.prototype.update = function (t, e) {
            try {
              this.write(e.toMutation(t, this.preconditionForUpdate(t)));
            } catch (t) {
              this.lastWriteError = t;
            }
            this.writtenDocs.add(t.toString());
          }),
          (t.prototype.delete = function (t) {
            (this.write(new us(t, this.precondition(t))),
              this.writtenDocs.add(t.toString()));
          }),
          (t.prototype.commit = function () {
            return (0, o.mG)(this, void 0, void 0, function () {
              var t,
                e = this;
              return (0, o.Jh)(this, function (n) {
                switch (n.label) {
                  case 0:
                    if ((this.ensureCommitNotCalled(), this.lastWriteError))
                      throw this.lastWriteError;
                    return (
                      (t = this.readVersions),
                      this.mutations.forEach(function (e) {
                        t.delete(e.key.toString());
                      }),
                      t.forEach(function (t, n) {
                        var r = Ni.fromPath(n);
                        e.mutations.push(new cs(r, e.precondition(r)));
                      }),
                      [
                        4,
                        (function (t, e) {
                          return (0, o.mG)(this, void 0, void 0, function () {
                            var n, r, i;
                            return (0, o.Jh)(this, function (o) {
                              switch (o.label) {
                                case 0:
                                  return (
                                    (n = ei(t)),
                                    (r = Zs(n.R) + "/documents"),
                                    (i = {
                                      writes: e.map(function (t) {
                                        return ta(n.R, t);
                                      }),
                                    }),
                                    [4, n.Ni("Commit", r, i)]
                                  );
                                case 1:
                                  return (o.sent(), [2]);
                              }
                            });
                          });
                        })(this.datastore, this.mutations),
                      ]
                    );
                  case 1:
                    return (n.sent(), (this.committed = !0), [2]);
                }
              });
            });
          }),
          (t.prototype.recordVersion = function (t) {
            var e;
            if (t.isFoundDocument()) e = t.version;
            else {
              if (!t.isNoDocument()) throw $r();
              e = ui.min();
            }
            var n = this.readVersions.get(t.key.toString());
            if (n) {
              if (!e.isEqual(n))
                throw new Hr(
                  Kr.ABORTED,
                  "Document version changed between two reads.",
                );
            } else this.readVersions.set(t.key.toString(), e);
          }),
          (t.prototype.precondition = function (t) {
            var e = this.readVersions.get(t.toString());
            return !this.writtenDocs.has(t.toString()) && e
              ? Jo.updateTime(e)
              : Jo.none();
          }),
          (t.prototype.preconditionForUpdate = function (t) {
            var e = this.readVersions.get(t.toString());
            if (!this.writtenDocs.has(t.toString()) && e) {
              if (e.isEqual(ui.min()))
                throw new Hr(
                  Kr.INVALID_ARGUMENT,
                  "Can't update a document that doesn't exist.",
                );
              return Jo.updateTime(e);
            }
            return Jo.exists(!0);
          }),
          (t.prototype.write = function (t) {
            (this.ensureCommitNotCalled(), this.mutations.push(t));
          }),
          (t.prototype.ensureCommitNotCalled = function () {}),
          t
        );
      })()),
    Ol = (function () {
      function t(t, e, n, r) {
        ((this.asyncQueue = t),
          (this.datastore = e),
          (this.updateFunction = n),
          (this.deferred = r),
          (this.ec = 5),
          (this.Zi = new Wc(this.asyncQueue, "transaction_retry")));
      }
      return (
        (t.prototype.run = function () {
          ((this.ec -= 1), this.nc());
        }),
        (t.prototype.nc = function () {
          var t = this;
          this.Zi.ji(function () {
            return (0, o.mG)(t, void 0, void 0, function () {
              var t,
                e,
                n = this;
              return (0, o.Jh)(this, function (r) {
                return (
                  (t = new Cl(this.datastore)),
                  (e = this.sc(t)) &&
                    e
                      .then(function (e) {
                        n.asyncQueue.enqueueAndForget(function () {
                          return t
                            .commit()
                            .then(function () {
                              n.deferred.resolve(e);
                            })
                            .catch(function (t) {
                              n.ic(t);
                            });
                        });
                      })
                      .catch(function (t) {
                        n.ic(t);
                      }),
                  [2]
                );
              });
            });
          });
        }),
        (t.prototype.sc = function (t) {
          try {
            var e = this.updateFunction(t);
            return !Si(e) && e.catch && e.then
              ? e
              : (this.deferred.reject(
                  Error("Transaction callback must return a Promise"),
                ),
                null);
          } catch (t) {
            return (this.deferred.reject(t), null);
          }
        }),
        (t.prototype.ic = function (t) {
          var e = this;
          this.ec > 0 && this.rc(t)
            ? ((this.ec -= 1),
              this.asyncQueue.enqueueAndForget(function () {
                return (e.nc(), Promise.resolve());
              }))
            : this.deferred.reject(t);
        }),
        (t.prototype.rc = function (t) {
          if ("FirebaseError" === t.name) {
            var e = t.code;
            return "aborted" === e || "failed-precondition" === e || !ls(e);
          }
          return !1;
        }),
        t
      );
    })(),
    xl = (function () {
      function t(t, e, n) {
        var r = this;
        ((this.credentials = t),
          (this.asyncQueue = e),
          (this.databaseInfo = n),
          (this.user = Dc.UNAUTHENTICATED),
          (this.clientId = ri.u()),
          (this.credentialListener = function () {
            return Promise.resolve();
          }),
          this.credentials.setChangeListener(e, function (t) {
            return (0, o.mG)(r, void 0, void 0, function () {
              return (0, o.Jh)(this, function (e) {
                switch (e.label) {
                  case 0:
                    return (
                      Wr("FirestoreClient", "Received user=", t.uid),
                      [4, this.credentialListener(t)]
                    );
                  case 1:
                    return (e.sent(), (this.user = t), [2]);
                }
              });
            });
          }));
      }
      return (
        (t.prototype.getConfiguration = function () {
          return (0, o.mG)(this, void 0, void 0, function () {
            return (0, o.Jh)(this, function (t) {
              return [
                2,
                {
                  asyncQueue: this.asyncQueue,
                  databaseInfo: this.databaseInfo,
                  clientId: this.clientId,
                  credentials: this.credentials,
                  initialUser: this.user,
                  maxConcurrentLimboResolutions: 100,
                },
              ];
            });
          });
        }),
        (t.prototype.setCredentialChangeListener = function (t) {
          this.credentialListener = t;
        }),
        (t.prototype.verifyNotTerminated = function () {
          if (this.asyncQueue.isShuttingDown)
            throw new Hr(
              Kr.FAILED_PRECONDITION,
              "The client has already been terminated.",
            );
        }),
        (t.prototype.terminate = function () {
          var t = this;
          this.asyncQueue.enterRestrictedMode();
          var e = new Va();
          return (
            this.asyncQueue.enqueueAndForgetEvenWhileRestricted(function () {
              return (0, o.mG)(t, void 0, void 0, function () {
                var t, n;
                return (0, o.Jh)(this, function (r) {
                  switch (r.label) {
                    case 0:
                      return (
                        r.trys.push([0, 5, , 6]),
                        this.onlineComponents
                          ? [4, this.onlineComponents.terminate()]
                          : [3, 2]
                      );
                    case 1:
                      (r.sent(), (r.label = 2));
                    case 2:
                      return this.offlineComponents
                        ? [4, this.offlineComponents.terminate()]
                        : [3, 4];
                    case 3:
                      (r.sent(), (r.label = 4));
                    case 4:
                      return (
                        this.credentials.removeChangeListener(),
                        e.resolve(),
                        [3, 6]
                      );
                    case 5:
                      return (
                        (t = r.sent()),
                        (n = Nh(t, "Failed to shutdown persistence")),
                        e.reject(n),
                        [3, 6]
                      );
                    case 6:
                      return [2];
                  }
                });
              });
            }),
            e.promise
          );
        }),
        t
      );
    })();
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ function Pl(t, e) {
    return (0, o.mG)(this, void 0, void 0, function () {
      var n,
        r,
        i = this;
      return (0, o.Jh)(this, function (s) {
        switch (s.label) {
          case 0:
            return (
              t.asyncQueue.verifyOperationInProgress(),
              Wr("FirestoreClient", "Initializing OfflineComponentProvider"),
              [4, t.getConfiguration()]
            );
          case 1:
            return ((n = s.sent()), [4, e.initialize(n)]);
          case 2:
            return (
              s.sent(),
              (r = n.initialUser),
              t.setCredentialChangeListener(function (t) {
                return (0, o.mG)(i, void 0, void 0, function () {
                  return (0, o.Jh)(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return r.isEqual(t) ? [3, 2] : [4, sc(e.localStore, t)];
                      case 1:
                        (n.sent(), (r = t), (n.label = 2));
                      case 2:
                        return [2];
                    }
                  });
                });
              }),
              e.persistence.setDatabaseDeletedListener(function () {
                return t.terminate();
              }),
              (t.offlineComponents = e),
              [2]
            );
        }
      });
    });
  }
  function Ll(t, e) {
    return (0, o.mG)(this, void 0, void 0, function () {
      var n, r;
      return (0, o.Jh)(this, function (i) {
        switch (i.label) {
          case 0:
            return (t.asyncQueue.verifyOperationInProgress(), [4, Ml(t)]);
          case 1:
            return (
              (n = i.sent()),
              Wr("FirestoreClient", "Initializing OnlineComponentProvider"),
              [4, t.getConfiguration()]
            );
          case 2:
            return ((r = i.sent()), [4, e.initialize(n, r)]);
          case 3:
            return (
              i.sent(),
              t.setCredentialChangeListener(function (t) {
                return (function (t, e) {
                  return (0, o.mG)(this, void 0, void 0, function () {
                    var n, r;
                    return (0, o.Jh)(this, function (i) {
                      switch (i.label) {
                        case 0:
                          return (
                            (n = ei(t)).asyncQueue.verifyOperationInProgress(),
                            Wr(
                              "RemoteStore",
                              "RemoteStore received new credentials",
                            ),
                            (r = hh(n)),
                            n.Or.add(3),
                            [4, rh(n)]
                          );
                        case 1:
                          return (
                            i.sent(),
                            r && n.Br.set("Unknown"),
                            [4, n.remoteSyncer.handleCredentialChange(e)]
                          );
                        case 2:
                          return (i.sent(), n.Or.delete(3), [4, nh(n)]);
                        case 3:
                          return (i.sent(), [2]);
                      }
                    });
                  });
                })(e.remoteStore, t);
              }),
              (t.onlineComponents = e),
              [2]
            );
        }
      });
    });
  }
  function Ml(t) {
    return (0, o.mG)(this, void 0, void 0, function () {
      return (0, o.Jh)(this, function (e) {
        switch (e.label) {
          case 0:
            return t.offlineComponents
              ? [3, 2]
              : (Wr(
                  "FirestoreClient",
                  "Using default OfflineComponentProvider",
                ),
                [4, Pl(t, new Al())]);
          case 1:
            (e.sent(), (e.label = 2));
          case 2:
            return [2, t.offlineComponents];
        }
      });
    });
  }
  function Fl(t) {
    return (0, o.mG)(this, void 0, void 0, function () {
      return (0, o.Jh)(this, function (e) {
        switch (e.label) {
          case 0:
            return t.onlineComponents
              ? [3, 2]
              : (Wr("FirestoreClient", "Using default OnlineComponentProvider"),
                [4, Ll(t, new Rl())]);
          case 1:
            (e.sent(), (e.label = 2));
          case 2:
            return [2, t.onlineComponents];
        }
      });
    });
  }
  function Ul(t) {
    return Ml(t).then(function (t) {
      return t.persistence;
    });
  }
  function Vl(t) {
    return Ml(t).then(function (t) {
      return t.localStore;
    });
  }
  function ql(t) {
    return Fl(t).then(function (t) {
      return t.remoteStore;
    });
  }
  function jl(t) {
    return Fl(t).then(function (t) {
      return t.syncEngine;
    });
  }
  function Bl(t) {
    return (0, o.mG)(this, void 0, void 0, function () {
      var e, n;
      return (0, o.Jh)(this, function (r) {
        switch (r.label) {
          case 0:
            return [4, Fl(t)];
          case 1:
            return (
              (e = r.sent()),
              [
                2,
                (((n = e.eventManager).onListen = Wh.bind(null, e.syncEngine)),
                (n.onUnlisten = Xh.bind(null, e.syncEngine)),
                n),
              ]
            );
        }
      });
    });
  }
  function Gl(t, e, n) {
    var r = this;
    void 0 === n && (n = {});
    var i = new Va();
    return (
      t.asyncQueue.enqueueAndForget(function () {
        return (0, o.mG)(r, void 0, void 0, function () {
          var r;
          return (0, o.Jh)(this, function (o) {
            switch (o.label) {
              case 0:
                return (
                  (r = function (t, e, n, r, i) {
                    var o = new Dl({
                        next: function (o) {
                          e.enqueueAndForget(function () {
                            return Lh(t, s);
                          });
                          var a = o.docs.has(n);
                          !a && o.fromCache
                            ? i.reject(
                                new Hr(
                                  Kr.UNAVAILABLE,
                                  "Failed to get document because the client is offline.",
                                ),
                              )
                            : a && o.fromCache && r && "server" === r.source
                              ? i.reject(
                                  new Hr(
                                    Kr.UNAVAILABLE,
                                    'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)',
                                  ),
                                )
                              : i.resolve(o);
                        },
                        error: function (t) {
                          return i.reject(t);
                        },
                      }),
                      s = new Vh(vo(n.path), o, {
                        includeMetadataChanges: !0,
                        so: !0,
                      });
                    return Ph(t, s);
                  }),
                  [4, Bl(t)]
                );
              case 1:
                return [2, r.apply(void 0, [o.sent(), t.asyncQueue, e, n, i])];
            }
          });
        });
      }),
      i.promise
    );
  }
  function zl(t, e, n) {
    var r = this;
    void 0 === n && (n = {});
    var i = new Va();
    return (
      t.asyncQueue.enqueueAndForget(function () {
        return (0, o.mG)(r, void 0, void 0, function () {
          var r;
          return (0, o.Jh)(this, function (o) {
            switch (o.label) {
              case 0:
                return (
                  (r = function (t, e, n, r, i) {
                    var o = new Dl({
                        next: function (n) {
                          (e.enqueueAndForget(function () {
                            return Lh(t, s);
                          }),
                            n.fromCache && "server" === r.source
                              ? i.reject(
                                  new Hr(
                                    Kr.UNAVAILABLE,
                                    'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)',
                                  ),
                                )
                              : i.resolve(n));
                        },
                        error: function (t) {
                          return i.reject(t);
                        },
                      }),
                      s = new Vh(n, o, { includeMetadataChanges: !0, so: !0 });
                    return Ph(t, s);
                  }),
                  [4, Bl(t)]
                );
              case 1:
                return [2, r.apply(void 0, [o.sent(), t.asyncQueue, e, n, i])];
            }
          });
        });
      }),
      i.promise
    );
  }
  var Kl = function (t, e, n, r, i, o, s, a) {
      ((this.databaseId = t),
        (this.appId = e),
        (this.persistenceKey = n),
        (this.host = r),
        (this.ssl = i),
        (this.forceLongPolling = o),
        (this.autoDetectLongPolling = s),
        (this.useFetchStreams = a));
    },
    Hl = (function () {
      function t(t, e) {
        ((this.projectId = t), (this.database = e || "(default)"));
      }
      return (
        Object.defineProperty(t.prototype, "isDefaultDatabase", {
          get: function () {
            return "(default)" === this.database;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.isEqual = function (e) {
          return (
            e instanceof t &&
            e.projectId === this.projectId &&
            e.database === this.database
          );
        }),
        t
      );
    })(),
    Jl = new Map(),
    Ql = function (t, e) {
      ((this.user = e),
        (this.type = "OAuth"),
        (this.authHeaders = {}),
        (this.authHeaders.Authorization = "Bearer " + t));
    },
    Wl = (function () {
      function t() {
        this.changeListener = null;
      }
      return (
        (t.prototype.getToken = function () {
          return Promise.resolve(null);
        }),
        (t.prototype.invalidateToken = function () {}),
        (t.prototype.setChangeListener = function (t, e) {
          ((this.changeListener = e),
            t.enqueueRetryable(function () {
              return e(Dc.UNAUTHENTICATED);
            }));
        }),
        (t.prototype.removeChangeListener = function () {
          this.changeListener = null;
        }),
        t
      );
    })(),
    Zl = (function () {
      function t(t) {
        ((this.token = t), (this.changeListener = null));
      }
      return (
        (t.prototype.getToken = function () {
          return Promise.resolve(this.token);
        }),
        (t.prototype.invalidateToken = function () {}),
        (t.prototype.setChangeListener = function (t, e) {
          var n = this;
          ((this.changeListener = e),
            t.enqueueRetryable(function () {
              return e(n.token.user);
            }));
        }),
        (t.prototype.removeChangeListener = function () {
          this.changeListener = null;
        }),
        t
      );
    })(),
    Xl = (function () {
      function t(t) {
        var e = this;
        ((this.currentUser = Dc.UNAUTHENTICATED),
          (this.oc = new Va()),
          (this.cc = 0),
          (this.forceRefresh = !1),
          (this.auth = null),
          (this.asyncQueue = null),
          (this.uc = function () {
            (e.cc++,
              (e.currentUser = e.ac()),
              e.oc.resolve(),
              e.changeListener &&
                e.asyncQueue.enqueueRetryable(function () {
                  return e.changeListener(e.currentUser);
                }));
          }));
        var n = function (t) {
          (Wr("FirebaseCredentialsProvider", "Auth detected"),
            (e.auth = t),
            e.auth.addAuthTokenListener(e.uc));
        };
        (t.onInit(function (t) {
          return n(t);
        }),
          setTimeout(function () {
            if (!e.auth) {
              var r = t.getImmediate({ optional: !0 });
              r
                ? n(r)
                : (Wr("FirebaseCredentialsProvider", "Auth not yet detected"),
                  e.oc.resolve());
            }
          }, 0));
      }
      return (
        (t.prototype.getToken = function () {
          var t = this,
            e = this.cc,
            n = this.forceRefresh;
          return (
            (this.forceRefresh = !1),
            this.auth
              ? this.auth.getToken(n).then(function (n) {
                  return t.cc !== e
                    ? (Wr(
                        "FirebaseCredentialsProvider",
                        "getToken aborted due to token change.",
                      ),
                      t.getToken())
                    : n
                      ? (ti("string" == typeof n.accessToken),
                        new Ql(n.accessToken, t.currentUser))
                      : null;
                })
              : Promise.resolve(null)
          );
        }),
        (t.prototype.invalidateToken = function () {
          this.forceRefresh = !0;
        }),
        (t.prototype.setChangeListener = function (t, e) {
          var n = this;
          ((this.asyncQueue = t),
            this.asyncQueue.enqueueRetryable(function () {
              return (0, o.mG)(n, void 0, void 0, function () {
                return (0, o.Jh)(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return [4, this.oc.promise];
                    case 1:
                      return (t.sent(), [4, e(this.currentUser)]);
                    case 2:
                      return (t.sent(), (this.changeListener = e), [2]);
                  }
                });
              });
            }));
        }),
        (t.prototype.removeChangeListener = function () {
          (this.auth && this.auth.removeAuthTokenListener(this.uc),
            (this.changeListener = function () {
              return Promise.resolve();
            }));
        }),
        (t.prototype.ac = function () {
          var t = this.auth && this.auth.getUid();
          return (ti(null === t || "string" == typeof t), new Dc(t));
        }),
        t
      );
    })(),
    Yl = (function () {
      function t(t, e, n) {
        ((this.hc = t),
          (this.lc = e),
          (this.fc = n),
          (this.type = "FirstParty"),
          (this.user = Dc.FIRST_PARTY));
      }
      return (
        Object.defineProperty(t.prototype, "authHeaders", {
          get: function () {
            var t = { "X-Goog-AuthUser": this.lc },
              e = this.hc.auth.getAuthHeaderValueForFirstParty([]);
            return (
              e && (t.Authorization = e),
              this.fc && (t["X-Goog-Iam-Authorization-Token"] = this.fc),
              t
            );
          },
          enumerable: !1,
          configurable: !0,
        }),
        t
      );
    })(),
    $l = (function () {
      function t(t, e, n) {
        ((this.hc = t), (this.lc = e), (this.fc = n));
      }
      return (
        (t.prototype.getToken = function () {
          return Promise.resolve(new Yl(this.hc, this.lc, this.fc));
        }),
        (t.prototype.setChangeListener = function (t, e) {
          t.enqueueRetryable(function () {
            return e(Dc.FIRST_PARTY);
          });
        }),
        (t.prototype.removeChangeListener = function () {}),
        (t.prototype.invalidateToken = function () {}),
        t
      );
    })();
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ function tf(t, e, n) {
    if (!n)
      throw new Hr(
        Kr.INVALID_ARGUMENT,
        "Function " + t + "() cannot be called with an empty " + e + ".",
      );
  }
  function ef(t, e) {
    if (void 0 === e) return { merge: !1 };
    if (void 0 !== e.mergeFields && void 0 !== e.merge)
      throw new Hr(
        Kr.INVALID_ARGUMENT,
        "Invalid options passed to function " +
          t +
          '(): You cannot specify both "merge" and "mergeFields".',
      );
    return e;
  }
  function nf(t, e, n, r) {
    if (!0 === e && !0 === r)
      throw new Hr(
        Kr.INVALID_ARGUMENT,
        t + " and " + n + " cannot be used together.",
      );
  }
  function rf(t) {
    if (!Ni.isDocumentKey(t))
      throw new Hr(
        Kr.INVALID_ARGUMENT,
        "Invalid document reference. Document references must have an even number of segments, but " +
          t +
          " has " +
          t.length +
          ".",
      );
  }
  function of(t) {
    if (Ni.isDocumentKey(t))
      throw new Hr(
        Kr.INVALID_ARGUMENT,
        "Invalid collection reference. Collection references must have an odd number of segments, but " +
          t +
          " has " +
          t.length +
          ".",
      );
  }
  function sf(t) {
    if (void 0 === t) return "undefined";
    if (null === t) return "null";
    if ("string" == typeof t)
      return (
        t.length > 20 && (t = t.substring(0, 20) + "..."),
        JSON.stringify(t)
      );
    if ("number" == typeof t || "boolean" == typeof t) return "" + t;
    if ("object" == (0, i.Z)(t)) {
      if (t instanceof Array) return "an array";
      var e = (function (t) {
        if (t.constructor) {
          var e = /function\s+([^\s(]+)\s*\(/.exec(t.constructor.toString());
          if (e && e.length > 1) return e[1];
        }
        return null;
      })(t);
      return e ? "a custom " + e + " object" : "an object";
    }
    return "function" == typeof t ? "a function" : $r();
  }
  function af(t, e) {
    if (("_delegate" in t && (t = t._delegate), !(t instanceof e))) {
      if (e.name === t.constructor.name)
        throw new Hr(
          Kr.INVALID_ARGUMENT,
          "Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?",
        );
      var n = sf(t);
      throw new Hr(
        Kr.INVALID_ARGUMENT,
        "Expected type '" + e.name + "', but it was: " + n,
      );
    }
    return t;
  }
  function uf(t, e) {
    if (e <= 0)
      throw new Hr(
        Kr.INVALID_ARGUMENT,
        "Function " +
          t +
          "() requires a positive number, but it was: " +
          e +
          ".",
      );
  }
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ var cf = (function () {
      function t(t) {
        var e;
        if (void 0 === t.host) {
          if (void 0 !== t.ssl)
            throw new Hr(
              Kr.INVALID_ARGUMENT,
              "Can't provide ssl option if host option is not set",
            );
          ((this.host = "firestore.googleapis.com"), (this.ssl = !0));
        } else
          ((this.host = t.host),
            (this.ssl = null === (e = t.ssl) || void 0 === e || e));
        if (
          ((this.credentials = t.credentials),
          (this.ignoreUndefinedProperties = !!t.ignoreUndefinedProperties),
          void 0 === t.cacheSizeBytes)
        )
          this.cacheSizeBytes = 41943040;
        else {
          if (-1 !== t.cacheSizeBytes && t.cacheSizeBytes < 1048576)
            throw new Hr(
              Kr.INVALID_ARGUMENT,
              "cacheSizeBytes must be at least 1048576",
            );
          this.cacheSizeBytes = t.cacheSizeBytes;
        }
        ((this.experimentalForceLongPolling = !!t.experimentalForceLongPolling),
          (this.experimentalAutoDetectLongPolling =
            !!t.experimentalAutoDetectLongPolling),
          (this.useFetchStreams = !!t.useFetchStreams),
          nf(
            "experimentalForceLongPolling",
            t.experimentalForceLongPolling,
            "experimentalAutoDetectLongPolling",
            t.experimentalAutoDetectLongPolling,
          ));
      }
      return (
        (t.prototype.isEqual = function (t) {
          return (
            this.host === t.host &&
            this.ssl === t.ssl &&
            this.credentials === t.credentials &&
            this.cacheSizeBytes === t.cacheSizeBytes &&
            this.experimentalForceLongPolling ===
              t.experimentalForceLongPolling &&
            this.experimentalAutoDetectLongPolling ===
              t.experimentalAutoDetectLongPolling &&
            this.ignoreUndefinedProperties === t.ignoreUndefinedProperties &&
            this.useFetchStreams === t.useFetchStreams
          );
        }),
        t
      );
    })(),
    hf = (function () {
      function t(t, e) {
        ((this.type = "firestore-lite"),
          (this._persistenceKey = "(lite)"),
          (this._settings = new cf({})),
          (this._settingsFrozen = !1),
          t instanceof Hl
            ? ((this._databaseId = t), (this._credentials = new Wl()))
            : ((this._app = t),
              (this._databaseId = (function (t) {
                if (
                  !Object.prototype.hasOwnProperty.apply(t.options, [
                    "projectId",
                  ])
                )
                  throw new Hr(
                    Kr.INVALID_ARGUMENT,
                    '"projectId" not provided in firebase.initializeApp.',
                  );
                return new Hl(t.options.projectId);
              })(t)),
              (this._credentials = new Xl(e))));
      }
      return (
        Object.defineProperty(t.prototype, "app", {
          get: function () {
            if (!this._app)
              throw new Hr(
                Kr.FAILED_PRECONDITION,
                "Firestore was not initialized using the Firebase SDK. 'app' is not available",
              );
            return this._app;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "_initialized", {
          get: function () {
            return this._settingsFrozen;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "_terminated", {
          get: function () {
            return void 0 !== this._terminateTask;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype._setSettings = function (t) {
          if (this._settingsFrozen)
            throw new Hr(
              Kr.FAILED_PRECONDITION,
              "Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.",
            );
          ((this._settings = new cf(t)),
            void 0 !== t.credentials &&
              (this._credentials = (function (t) {
                if (!t) return new Wl();
                switch (t.type) {
                  case "gapi":
                    var e = t.client;
                    return (
                      ti(
                        !(
                          "object" != (0, i.Z)(e) ||
                          null === e ||
                          !e.auth ||
                          !e.auth.getAuthHeaderValueForFirstParty
                        ),
                      ),
                      new $l(e, t.sessionIndex || "0", t.iamToken || null)
                    );
                  case "provider":
                    return t.client;
                  default:
                    throw new Hr(
                      Kr.INVALID_ARGUMENT,
                      "makeCredentialsProvider failed due to invalid credential type",
                    );
                }
              })(t.credentials)));
        }),
        (t.prototype._getSettings = function () {
          return this._settings;
        }),
        (t.prototype._freezeSettings = function () {
          return ((this._settingsFrozen = !0), this._settings);
        }),
        (t.prototype._delete = function () {
          return (
            this._terminateTask || (this._terminateTask = this._terminate()),
            this._terminateTask
          );
        }),
        (t.prototype.toJSON = function () {
          return {
            app: this._app,
            databaseId: this._databaseId,
            settings: this._settings,
          };
        }),
        (t.prototype._terminate = function () {
          return (
            (t = this),
            (e = Jl.get(t)) &&
              (Wr("ComponentProvider", "Removing Datastore"),
              Jl.delete(t),
              e.terminate()),
            Promise.resolve()
          );
          var t, e;
        }),
        t
      );
    })(),
    lf = (function () {
      function t(t, e, n) {
        ((this.converter = e),
          (this._key = n),
          (this.type = "document"),
          (this.firestore = t));
      }
      return (
        Object.defineProperty(t.prototype, "_path", {
          get: function () {
            return this._key.path;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "id", {
          get: function () {
            return this._key.path.lastSegment();
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "path", {
          get: function () {
            return this._key.path.canonicalString();
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "parent", {
          get: function () {
            return new pf(
              this.firestore,
              this.converter,
              this._key.path.popLast(),
            );
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.withConverter = function (e) {
          return new t(this.firestore, e, this._key);
        }),
        t
      );
    })(),
    ff = (function () {
      function t(t, e, n) {
        ((this.converter = e),
          (this._query = n),
          (this.type = "query"),
          (this.firestore = t));
      }
      return (
        (t.prototype.withConverter = function (e) {
          return new t(this.firestore, e, this._query);
        }),
        t
      );
    })(),
    pf = (function (t) {
      function e(e, n, r) {
        var i = this;
        return (
          ((i = t.call(this, e, n, vo(r)) || this)._path = r),
          (i.type = "collection"),
          i
        );
      }
      return (
        (0, o.ZT)(e, t),
        Object.defineProperty(e.prototype, "id", {
          get: function () {
            return this._query.path.lastSegment();
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "path", {
          get: function () {
            return this._query.path.canonicalString();
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "parent", {
          get: function () {
            var t = this._path.popLast();
            return t.isEmpty() ? null : new lf(this.firestore, null, new Ni(t));
          },
          enumerable: !1,
          configurable: !0,
        }),
        (e.prototype.withConverter = function (t) {
          return new e(this.firestore, t, this._path);
        }),
        e
      );
    })(ff);
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ function df(t, e) {
    for (var n, r = [], i = 2; i < arguments.length; i++)
      r[i - 2] = arguments[i];
    if (((t = (0, s.m9)(t)), tf("collection", "path", e), t instanceof hf))
      return (
        of((n = pi.fromString.apply(pi, (0, o.ev)([e], r)))),
        new pf(t, null, n)
      );
    if (!(t instanceof lf || t instanceof pf))
      throw new Hr(
        Kr.INVALID_ARGUMENT,
        "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore",
      );
    return (
      of(
        (n = pi.fromString
          .apply(pi, (0, o.ev)([t.path], r))
          .child(pi.fromString(e))),
      ),
      new pf(t.firestore, null, n)
    );
  }
  function vf(t, e) {
    for (var n, r = [], i = 2; i < arguments.length; i++)
      r[i - 2] = arguments[i];
    if (
      ((t = (0, s.m9)(t)),
      1 === arguments.length && (e = ri.u()),
      tf("doc", "path", e),
      t instanceof hf)
    )
      return (
        rf((n = pi.fromString.apply(pi, (0, o.ev)([e], r)))),
        new lf(t, null, new Ni(n))
      );
    if (!(t instanceof lf || t instanceof pf))
      throw new Hr(
        Kr.INVALID_ARGUMENT,
        "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore",
      );
    return (
      rf((n = t._path.child(pi.fromString.apply(pi, (0, o.ev)([e], r))))),
      new lf(t.firestore, t instanceof pf ? t.converter : null, new Ni(n))
    );
  }
  function gf(t, e) {
    return (
      (t = (0, s.m9)(t)),
      (e = (0, s.m9)(e)),
      (t instanceof lf || t instanceof pf) &&
        (e instanceof lf || e instanceof pf) &&
        t.firestore === e.firestore &&
        t.path === e.path &&
        t.converter === e.converter
    );
  }
  function yf(t, e) {
    return (
      (t = (0, s.m9)(t)),
      (e = (0, s.m9)(e)),
      t instanceof ff &&
        e instanceof ff &&
        t.firestore === e.firestore &&
        Io(t._query, e._query) &&
        t.converter === e.converter
    );
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
  }
  var mf = (function () {
    function t() {
      var t = this;
      ((this.dc = Promise.resolve()),
        (this.wc = []),
        (this._c = !1),
        (this.mc = []),
        (this.yc = null),
        (this.gc = !1),
        (this.Ec = !1),
        (this.Tc = []),
        (this.Zi = new Wc(this, "async_queue_retry")),
        (this.Ic = function () {
          var e = Jc();
          (e &&
            Wr(
              "AsyncQueue",
              "Visibility state changed to " + e.visibilityState,
            ),
            t.Zi.Gi());
        }));
      var e = Jc();
      e &&
        "function" == typeof e.addEventListener &&
        e.addEventListener("visibilitychange", this.Ic);
    }
    return (
      Object.defineProperty(t.prototype, "isShuttingDown", {
        get: function () {
          return this._c;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.enqueueAndForget = function (t) {
        this.enqueue(t);
      }),
      (t.prototype.enqueueAndForgetEvenWhileRestricted = function (t) {
        (this.Ac(), this.Rc(t));
      }),
      (t.prototype.enterRestrictedMode = function (t) {
        if (!this._c) {
          ((this._c = !0), (this.Ec = t || !1));
          var e = Jc();
          e &&
            "function" == typeof e.removeEventListener &&
            e.removeEventListener("visibilitychange", this.Ic);
        }
      }),
      (t.prototype.enqueue = function (t) {
        var e = this;
        if ((this.Ac(), this._c)) return new Promise(function () {});
        var n = new Va();
        return this.Rc(function () {
          return e._c && e.Ec
            ? Promise.resolve()
            : (t().then(n.resolve, n.reject), n.promise);
        }).then(function () {
          return n.promise;
        });
      }),
      (t.prototype.enqueueRetryable = function (t) {
        var e = this;
        this.enqueueAndForget(function () {
          return (e.wc.push(t), e.bc());
        });
      }),
      (t.prototype.bc = function () {
        return (0, o.mG)(this, void 0, void 0, function () {
          var t,
            e = this;
          return (0, o.Jh)(this, function (n) {
            switch (n.label) {
              case 0:
                if (0 === this.wc.length) return [3, 5];
                n.label = 1;
              case 1:
                return (n.trys.push([1, 3, , 4]), [4, this.wc[0]()]);
              case 2:
                return (n.sent(), this.wc.shift(), this.Zi.reset(), [3, 4]);
              case 3:
                if (!Ka((t = n.sent()))) throw t;
                return (
                  Wr(
                    "AsyncQueue",
                    "Operation failed with retryable error: " + t,
                  ),
                  [3, 4]
                );
              case 4:
                (this.wc.length > 0 &&
                  this.Zi.ji(function () {
                    return e.bc();
                  }),
                  (n.label = 5));
              case 5:
                return [2];
            }
          });
        });
      }),
      (t.prototype.Rc = function (t) {
        var e = this,
          n = this.dc.then(function () {
            return (
              (e.gc = !0),
              t()
                .catch(function (t) {
                  throw (
                    (e.yc = t),
                    (e.gc = !1),
                    Zr(
                      "INTERNAL UNHANDLED ERROR: ",
                      (function (t) {
                        var e = t.message || "";
                        return (
                          t.stack &&
                            (e = t.stack.includes(t.message)
                              ? t.stack
                              : t.message + "\n" + t.stack),
                          e
                        );
                      })(t),
                    ),
                    t
                  );
                })
                .then(function (t) {
                  return ((e.gc = !1), t);
                })
            );
          });
        return ((this.dc = n), n);
      }),
      (t.prototype.enqueueAfterDelay = function (t, e, n) {
        var r = this;
        (this.Ac(), this.Tc.indexOf(t) > -1 && (e = 0));
        var i = kh.createAndSchedule(this, t, e, n, function (t) {
          return r.vc(t);
        });
        return (this.mc.push(i), i);
      }),
      (t.prototype.Ac = function () {
        this.yc && $r();
      }),
      (t.prototype.verifyOperationInProgress = function () {}),
      (t.prototype.Pc = function () {
        return (0, o.mG)(this, void 0, void 0, function () {
          var t;
          return (0, o.Jh)(this, function (e) {
            switch (e.label) {
              case 0:
                return [4, (t = this.dc)];
              case 1:
                (e.sent(), (e.label = 2));
              case 2:
                if (t !== this.dc) return [3, 0];
                e.label = 3;
              case 3:
                return [2];
            }
          });
        });
      }),
      (t.prototype.Vc = function (t) {
        for (var e = 0, n = this.mc; e < n.length; e++)
          if (n[e].timerId === t) return !0;
        return !1;
      }),
      (t.prototype.Sc = function (t) {
        var e = this;
        return this.Pc().then(function () {
          e.mc.sort(function (t, e) {
            return t.targetTimeMs - e.targetTimeMs;
          });
          for (var n = 0, r = e.mc; n < r.length; n++) {
            var i = r[n];
            if ((i.skipDelay(), "all" !== t && i.timerId === t)) break;
          }
          return e.Pc();
        });
      }),
      (t.prototype.Dc = function (t) {
        this.Tc.push(t);
      }),
      (t.prototype.vc = function (t) {
        var e = this.mc.indexOf(t);
        this.mc.splice(e, 1);
      }),
      t
    );
  })();
  function bf(t) {
    return (function (t, e) {
      if ("object" != (0, i.Z)(t) || null === t) return !1;
      for (
        var n = t, r = 0, o = ["next", "error", "complete"];
        r < o.length;
        r++
      ) {
        var s = o[r];
        if (s in n && "function" == typeof n[s]) return !0;
      }
      return !1;
    })(t);
  }
  (function () {
    function t() {
      ((this._progressObserver = {}),
        (this._taskCompletionResolver = new Va()),
        (this._lastProgress = {
          taskState: "Running",
          totalBytes: 0,
          totalDocuments: 0,
          bytesLoaded: 0,
          documentsLoaded: 0,
        }));
    }
    ((t.prototype.onProgress = function (t, e, n) {
      this._progressObserver = { next: t, error: e, complete: n };
    }),
      (t.prototype.catch = function (t) {
        return this._taskCompletionResolver.promise.catch(t);
      }),
      (t.prototype.then = function (t, e) {
        return this._taskCompletionResolver.promise.then(t, e);
      }),
      (t.prototype._completeWith = function (t) {
        (this._updateProgress(t),
          this._progressObserver.complete && this._progressObserver.complete(),
          this._taskCompletionResolver.resolve(t));
      }),
      (t.prototype._failWith = function (t) {
        ((this._lastProgress.taskState = "Error"),
          this._progressObserver.next &&
            this._progressObserver.next(this._lastProgress),
          this._progressObserver.error && this._progressObserver.error(t),
          this._taskCompletionResolver.reject(t));
      }),
      (t.prototype._updateProgress = function (t) {
        ((this._lastProgress = t),
          this._progressObserver.next && this._progressObserver.next(t));
      }));
  })();
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ var wf = -1,
    _f = (function (t) {
      function e(e, n) {
        var r = this;
        return (
          ((r = t.call(this, e, n) || this).type = "firestore"),
          (r._queue = new mf()),
          (r._persistenceKey = "name" in e ? e.name : "[DEFAULT]"),
          r
        );
      }
      return (
        (0, o.ZT)(e, t),
        (e.prototype._terminate = function () {
          return (
            this._firestoreClient || Ef(this),
            this._firestoreClient.terminate()
          );
        }),
        e
      );
    })(hf);
  function Tf(t) {
    return (
      t._firestoreClient || Ef(t),
      t._firestoreClient.verifyNotTerminated(),
      t._firestoreClient
    );
  }
  function Ef(t) {
    var e,
      n = t._freezeSettings(),
      r = (function (t, e, n, r) {
        return new Kl(
          t,
          e,
          n,
          r.host,
          r.ssl,
          r.experimentalForceLongPolling,
          r.experimentalAutoDetectLongPolling,
          r.useFetchStreams,
        );
      })(
        t._databaseId,
        (null === (e = t._app) || void 0 === e ? void 0 : e.options.appId) ||
          "",
        t._persistenceKey,
        n,
      );
    t._firestoreClient = new xl(t._credentials, t._queue, r);
  }
  function If(t, e, n) {
    var r = this,
      i = new Va();
    return t.asyncQueue
      .enqueue(function () {
        return (0, o.mG)(r, void 0, void 0, function () {
          var r;
          return (0, o.Jh)(this, function (o) {
            switch (o.label) {
              case 0:
                return (o.trys.push([0, 3, , 4]), [4, Pl(t, n)]);
              case 1:
                return (o.sent(), [4, Ll(t, e)]);
              case 2:
                return (o.sent(), i.resolve(), [3, 4]);
              case 3:
                if (
                  !(function (t) {
                    return "FirebaseError" === t.name
                      ? t.code === Kr.FAILED_PRECONDITION ||
                          t.code === Kr.UNIMPLEMENTED
                      : !(
                          "undefined" != typeof DOMException &&
                          t instanceof DOMException
                        ) ||
                          22 === t.code ||
                          20 === t.code ||
                          11 === t.code;
                  })((r = o.sent()))
                )
                  throw r;
                return (
                  Gr.warn(
                    "Error enabling offline persistence. Falling back to persistence disabled: " +
                      r,
                  ),
                  i.reject(r),
                  [3, 4]
                );
              case 4:
                return [2];
            }
          });
        });
      })
      .then(function () {
        return i.promise;
      });
  }
  function Sf(t) {
    if (t._initialized || t._terminated)
      throw new Hr(
        Kr.FAILED_PRECONDITION,
        "Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.",
      );
  }
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ var Af = (function () {
      function t() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        for (var n = 0; n < t.length; ++n)
          if (0 === t[n].length)
            throw new Hr(
              Kr.INVALID_ARGUMENT,
              "Invalid field name at argument $(i + 1). Field names must not be empty.",
            );
        this._internalPath = new vi(t);
      }
      return (
        (t.prototype.isEqual = function (t) {
          return this._internalPath.isEqual(t._internalPath);
        }),
        t
      );
    })(),
    kf = (function () {
      function t(t) {
        this._byteString = t;
      }
      return (
        (t.fromBase64String = function (e) {
          try {
            return new t(yi.fromBase64String(e));
          } catch (e) {
            throw new Hr(
              Kr.INVALID_ARGUMENT,
              "Failed to construct data from Base64 string: " + e,
            );
          }
        }),
        (t.fromUint8Array = function (e) {
          return new t(yi.fromUint8Array(e));
        }),
        (t.prototype.toBase64 = function () {
          return this._byteString.toBase64();
        }),
        (t.prototype.toUint8Array = function () {
          return this._byteString.toUint8Array();
        }),
        (t.prototype.toString = function () {
          return "Bytes(base64: " + this.toBase64() + ")";
        }),
        (t.prototype.isEqual = function (t) {
          return this._byteString.isEqual(t._byteString);
        }),
        t
      );
    })(),
    Nf = function (t) {
      this._methodName = t;
    },
    Rf = (function () {
      function t(t, e) {
        if (!isFinite(t) || t < -90 || t > 90)
          throw new Hr(
            Kr.INVALID_ARGUMENT,
            "Latitude must be a number between -90 and 90, but was: " + t,
          );
        if (!isFinite(e) || e < -180 || e > 180)
          throw new Hr(
            Kr.INVALID_ARGUMENT,
            "Longitude must be a number between -180 and 180, but was: " + e,
          );
        ((this._lat = t), (this._long = e));
      }
      return (
        Object.defineProperty(t.prototype, "latitude", {
          get: function () {
            return this._lat;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "longitude", {
          get: function () {
            return this._long;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.isEqual = function (t) {
          return this._lat === t._lat && this._long === t._long;
        }),
        (t.prototype.toJSON = function () {
          return { latitude: this._lat, longitude: this._long };
        }),
        (t.prototype._compareTo = function (t) {
          return ii(this._lat, t._lat) || ii(this._long, t._long);
        }),
        t
      );
    })(),
    Df = /^__.*__$/,
    Cf = (function () {
      function t(t, e, n) {
        ((this.data = t), (this.fieldMask = e), (this.fieldTransforms = n));
      }
      return (
        (t.prototype.toMutation = function (t, e) {
          return null !== this.fieldMask
            ? new ns(t, this.data, this.fieldMask, e, this.fieldTransforms)
            : new es(t, this.data, e, this.fieldTransforms);
        }),
        t
      );
    })(),
    Of = (function () {
      function t(t, e, n) {
        ((this.data = t), (this.fieldMask = e), (this.fieldTransforms = n));
      }
      return (
        (t.prototype.toMutation = function (t, e) {
          return new ns(t, this.data, this.fieldMask, e, this.fieldTransforms);
        }),
        t
      );
    })();
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ function xf(t) {
    switch (t) {
      case 0:
      case 2:
      case 1:
        return !0;
      case 3:
      case 4:
        return !1;
      default:
        throw $r();
    }
  }
  var Pf = (function () {
      function t(t, e, n, r, i, o) {
        ((this.settings = t),
          (this.databaseId = e),
          (this.R = n),
          (this.ignoreUndefinedProperties = r),
          void 0 === i && this.Cc(),
          (this.fieldTransforms = i || []),
          (this.fieldMask = o || []));
      }
      return (
        Object.defineProperty(t.prototype, "path", {
          get: function () {
            return this.settings.path;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "Nc", {
          get: function () {
            return this.settings.Nc;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.xc = function (e) {
          return new t(
            Object.assign(Object.assign({}, this.settings), e),
            this.databaseId,
            this.R,
            this.ignoreUndefinedProperties,
            this.fieldTransforms,
            this.fieldMask,
          );
        }),
        (t.prototype.kc = function (t) {
          var e,
            n = null === (e = this.path) || void 0 === e ? void 0 : e.child(t),
            r = this.xc({ path: n, Fc: !1 });
          return (r.$c(t), r);
        }),
        (t.prototype.Oc = function (t) {
          var e,
            n = null === (e = this.path) || void 0 === e ? void 0 : e.child(t),
            r = this.xc({ path: n, Fc: !1 });
          return (r.Cc(), r);
        }),
        (t.prototype.Mc = function (t) {
          return this.xc({ path: void 0, Fc: !0 });
        }),
        (t.prototype.Lc = function (t) {
          return tp(
            t,
            this.settings.methodName,
            this.settings.Bc || !1,
            this.path,
            this.settings.qc,
          );
        }),
        (t.prototype.contains = function (t) {
          return (
            void 0 !==
              this.fieldMask.find(function (e) {
                return t.isPrefixOf(e);
              }) ||
            void 0 !==
              this.fieldTransforms.find(function (e) {
                return t.isPrefixOf(e.field);
              })
          );
        }),
        (t.prototype.Cc = function () {
          if (this.path)
            for (var t = 0; t < this.path.length; t++)
              this.$c(this.path.get(t));
        }),
        (t.prototype.$c = function (t) {
          if (0 === t.length)
            throw this.Lc("Document fields must not be empty");
          if (xf(this.Nc) && Df.test(t))
            throw this.Lc('Document fields cannot begin and end with "__"');
        }),
        t
      );
    })(),
    Lf = (function () {
      function t(t, e, n) {
        ((this.databaseId = t),
          (this.ignoreUndefinedProperties = e),
          (this.R = n || Qc(t)));
      }
      return (
        (t.prototype.Uc = function (t, e, n, r) {
          return (
            void 0 === r && (r = !1),
            new Pf(
              {
                Nc: t,
                methodName: e,
                qc: n,
                path: vi.emptyPath(),
                Fc: !1,
                Bc: r,
              },
              this.databaseId,
              this.R,
              this.ignoreUndefinedProperties,
            )
          );
        }),
        t
      );
    })();
  function Mf(t) {
    var e = t._freezeSettings(),
      n = Qc(t._databaseId);
    return new Lf(t._databaseId, !!e.ignoreUndefinedProperties, n);
  }
  function Ff(t, e, n, r, i, o) {
    void 0 === o && (o = {});
    var s = t.Uc(o.merge || o.mergeFields ? 2 : 0, e, n, i);
    Zf("Data must be an object, but it was:", s, r);
    var a,
      u,
      c = Qf(r, s);
    if (o.merge) ((a = new gi(s.fieldMask)), (u = s.fieldTransforms));
    else if (o.mergeFields) {
      for (var h = [], l = 0, f = o.mergeFields; l < f.length; l++) {
        var p = Xf(e, f[l], n);
        if (!s.contains(p))
          throw new Hr(
            Kr.INVALID_ARGUMENT,
            "Field '" +
              p +
              "' is specified in your field mask but missing from your input data.",
          );
        ep(h, p) || h.push(p);
      }
      ((a = new gi(h)),
        (u = s.fieldTransforms.filter(function (t) {
          return a.covers(t.field);
        })));
    } else ((a = null), (u = s.fieldTransforms));
    return new Cf(new Gi(c), a, u);
  }
  var Uf = (function (t) {
    function e() {
      return (null !== t && t.apply(this, arguments)) || this;
    }
    return (
      (0, o.ZT)(e, t),
      (e.prototype._toFieldTransform = function (t) {
        if (2 !== t.Nc)
          throw 1 === t.Nc
            ? t.Lc(
                this._methodName +
                  "() can only appear at the top level of your update data",
              )
            : t.Lc(
                this._methodName +
                  "() cannot be used with set() unless you pass {merge:true}",
              );
        return (t.fieldMask.push(t.path), null);
      }),
      (e.prototype.isEqual = function (t) {
        return t instanceof e;
      }),
      e
    );
  })(Nf);
  function Vf(t, e, n) {
    return new Pf(
      { Nc: 3, qc: e.settings.qc, methodName: t._methodName, Fc: n },
      e.databaseId,
      e.R,
      e.ignoreUndefinedProperties,
    );
  }
  var qf = (function (t) {
      function e() {
        return (null !== t && t.apply(this, arguments)) || this;
      }
      return (
        (0, o.ZT)(e, t),
        (e.prototype._toFieldTransform = function (t) {
          return new Ko(t.path, new Fo());
        }),
        (e.prototype.isEqual = function (t) {
          return t instanceof e;
        }),
        e
      );
    })(Nf),
    jf = (function (t) {
      function e(e, n) {
        var r = this;
        return (((r = t.call(this, e) || this).Kc = n), r);
      }
      return (
        (0, o.ZT)(e, t),
        (e.prototype._toFieldTransform = function (t) {
          var e = Vf(this, t, !0),
            n = this.Kc.map(function (t) {
              return Jf(t, e);
            }),
            r = new Uo(n);
          return new Ko(t.path, r);
        }),
        (e.prototype.isEqual = function (t) {
          return this === t;
        }),
        e
      );
    })(Nf),
    Bf = (function (t) {
      function e(e, n) {
        var r = this;
        return (((r = t.call(this, e) || this).Kc = n), r);
      }
      return (
        (0, o.ZT)(e, t),
        (e.prototype._toFieldTransform = function (t) {
          var e = Vf(this, t, !0),
            n = this.Kc.map(function (t) {
              return Jf(t, e);
            }),
            r = new qo(n);
          return new Ko(t.path, r);
        }),
        (e.prototype.isEqual = function (t) {
          return this === t;
        }),
        e
      );
    })(Nf),
    Gf = (function (t) {
      function e(e, n) {
        var r = this;
        return (((r = t.call(this, e) || this).Qc = n), r);
      }
      return (
        (0, o.ZT)(e, t),
        (e.prototype._toFieldTransform = function (t) {
          var e = new Bo(t.R, Oo(t.R, this.Qc));
          return new Ko(t.path, e);
        }),
        (e.prototype.isEqual = function (t) {
          return this === t;
        }),
        e
      );
    })(Nf);
  function zf(t, e, n, r) {
    var i = t.Uc(1, e, n);
    Zf("Data must be an object, but it was:", i, r);
    var o = [],
      a = Gi.empty();
    hi(r, function (t, r) {
      var u = $f(e, t, n);
      r = (0, s.m9)(r);
      var c = i.Oc(u);
      if (r instanceof Uf) o.push(u);
      else {
        var h = Jf(r, c);
        null != h && (o.push(u), a.set(u, h));
      }
    });
    var u = new gi(o);
    return new Of(a, u, i.fieldTransforms);
  }
  function Kf(t, e, n, r, i, o) {
    var a = t.Uc(1, e, n),
      u = [Xf(e, r, n)],
      c = [i];
    if (o.length % 2 != 0)
      throw new Hr(
        Kr.INVALID_ARGUMENT,
        "Function " +
          e +
          "() needs to be called with an even number of arguments that alternate between field names and values.",
      );
    for (var h = 0; h < o.length; h += 2)
      (u.push(Xf(e, o[h])), c.push(o[h + 1]));
    for (var l = [], f = Gi.empty(), p = u.length - 1; p >= 0; --p)
      if (!ep(l, u[p])) {
        var d = u[p],
          v = c[p];
        v = (0, s.m9)(v);
        var g = a.Oc(d);
        if (v instanceof Uf) l.push(d);
        else {
          var y = Jf(v, g);
          null != y && (l.push(d), f.set(d, y));
        }
      }
    var m = new gi(l);
    return new Of(f, m, a.fieldTransforms);
  }
  function Hf(t, e, n, r) {
    return (void 0 === r && (r = !1), Jf(n, t.Uc(r ? 4 : 3, e)));
  }
  function Jf(t, e) {
    if (Wf((t = (0, s.m9)(t))))
      return (Zf("Unsupported field value:", e, t), Qf(t, e));
    if (t instanceof Nf)
      return (
        (function (t, e) {
          if (!xf(e.Nc))
            throw e.Lc(
              t._methodName + "() can only be used with update() and set()",
            );
          if (!e.path)
            throw e.Lc(
              t._methodName + "() is not currently supported inside arrays",
            );
          var n = t._toFieldTransform(e);
          n && e.fieldTransforms.push(n);
        })(t, e),
        null
      );
    if (void 0 === t && e.ignoreUndefinedProperties) return null;
    if ((e.path && e.fieldMask.push(e.path), t instanceof Array)) {
      if (e.settings.Fc && 4 !== e.Nc)
        throw e.Lc("Nested arrays are not supported");
      return (function (t, e) {
        for (var n = [], r = 0, i = 0, o = t; i < o.length; i++) {
          var s = Jf(o[i], e.Mc(r));
          (null == s && (s = { nullValue: "NULL_VALUE" }), n.push(s), r++);
        }
        return { arrayValue: { values: n } };
      })(t, e);
    }
    return (function (t, e) {
      if (null === (t = (0, s.m9)(t))) return { nullValue: "NULL_VALUE" };
      if ("number" == typeof t) return Oo(e.R, t);
      if ("boolean" == typeof t) return { booleanValue: t };
      if ("string" == typeof t) return { stringValue: t };
      if (t instanceof Date) {
        var n = ai.fromDate(t);
        return { timestampValue: qs(e.R, n) };
      }
      if (t instanceof ai)
        return (
          (n = new ai(t.seconds, 1e3 * Math.floor(t.nanoseconds / 1e3))),
          { timestampValue: qs(e.R, n) }
        );
      if (t instanceof Rf)
        return {
          geoPointValue: { latitude: t.latitude, longitude: t.longitude },
        };
      if (t instanceof kf) return { bytesValue: js(e.R, t._byteString) };
      if (t instanceof lf) {
        n = e.databaseId;
        var r = t.firestore._databaseId;
        if (!r.isEqual(n))
          throw e.Lc(
            "Document reference is for database " +
              r.projectId +
              "/" +
              r.database +
              " but should be for database " +
              n.projectId +
              "/" +
              n.database,
          );
        return {
          referenceValue: zs(
            t.firestore._databaseId || e.databaseId,
            t._key.path,
          ),
        };
      }
      throw e.Lc("Unsupported field value: " + sf(t));
    })(t, e);
  }
  function Qf(t, e) {
    var n = {};
    return (
      li(t)
        ? e.path && e.path.length > 0 && e.fieldMask.push(e.path)
        : hi(t, function (t, r) {
            var i = Jf(r, e.kc(t));
            null != i && (n[t] = i);
          }),
      { mapValue: { fields: n } }
    );
  }
  function Wf(t) {
    return !(
      "object" != (0, i.Z)(t) ||
      null === t ||
      t instanceof Array ||
      t instanceof Date ||
      t instanceof ai ||
      t instanceof Rf ||
      t instanceof kf ||
      t instanceof lf ||
      t instanceof Nf
    );
  }
  function Zf(t, e, n) {
    if (
      !Wf(n) ||
      !(function (t) {
        return (
          "object" == (0, i.Z)(t) &&
          null !== t &&
          (Object.getPrototypeOf(t) === Object.prototype ||
            null === Object.getPrototypeOf(t))
        );
      })(n)
    ) {
      var r = sf(n);
      throw "an object" === r
        ? e.Lc(t + " a custom object")
        : e.Lc(t + " " + r);
    }
  }
  function Xf(t, e, n) {
    if ((e = (0, s.m9)(e)) instanceof Af) return e._internalPath;
    if ("string" == typeof e) return $f(t, e);
    throw tp(
      "Field path arguments must be of type string or FieldPath.",
      t,
      !1,
      void 0,
      n,
    );
  }
  var Yf = new RegExp("[~\\*/\\[\\]]");
  function $f(t, e, n) {
    if (e.search(Yf) >= 0)
      throw tp(
        "Invalid field path (" +
          e +
          "). Paths must not contain '~', '*', '/', '[', or ']'",
        t,
        !1,
        void 0,
        n,
      );
    try {
      return new (Af.bind.apply(Af, (0, o.ev)([void 0], e.split("."))))()
        ._internalPath;
    } catch (r) {
      throw tp(
        "Invalid field path (" +
          e +
          "). Paths must not be empty, begin with '.', end with '.', or contain '..'",
        t,
        !1,
        void 0,
        n,
      );
    }
  }
  function tp(t, e, n, r, i) {
    var o = r && !r.isEmpty(),
      s = void 0 !== i,
      a = "Function " + e + "() called with invalid data";
    n && (a += " (via `toFirestore()`)");
    var u = "";
    return (
      (o || s) &&
        ((u += " (found"),
        o && (u += " in field " + r),
        s && (u += " in document " + i),
        (u += ")")),
      new Hr(Kr.INVALID_ARGUMENT, (a += ". ") + t + u)
    );
  }
  function ep(t, e) {
    return t.some(function (t) {
      return t.isEqual(e);
    });
  }
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ var np = (function () {
      function t(t, e, n, r, i) {
        ((this._firestore = t),
          (this._userDataWriter = e),
          (this._key = n),
          (this._document = r),
          (this._converter = i));
      }
      return (
        Object.defineProperty(t.prototype, "id", {
          get: function () {
            return this._key.path.lastSegment();
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "ref", {
          get: function () {
            return new lf(this._firestore, this._converter, this._key);
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.exists = function () {
          return null !== this._document;
        }),
        (t.prototype.data = function () {
          if (this._document) {
            if (this._converter) {
              var t = new rp(
                this._firestore,
                this._userDataWriter,
                this._key,
                this._document,
                null,
              );
              return this._converter.fromFirestore(t);
            }
            return this._userDataWriter.convertValue(this._document.data.value);
          }
        }),
        (t.prototype.get = function (t) {
          if (this._document) {
            var e = this._document.data.field(ip("DocumentSnapshot.get", t));
            if (null !== e) return this._userDataWriter.convertValue(e);
          }
        }),
        t
      );
    })(),
    rp = (function (t) {
      function e() {
        return (null !== t && t.apply(this, arguments)) || this;
      }
      return (
        (0, o.ZT)(e, t),
        (e.prototype.data = function () {
          return t.prototype.data.call(this);
        }),
        e
      );
    })(np);
  function ip(t, e) {
    return "string" == typeof e
      ? $f(t, e)
      : e instanceof Af
        ? e._internalPath
        : e._delegate._internalPath;
  }
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ var op = (function () {
      function t(t, e) {
        ((this.hasPendingWrites = t), (this.fromCache = e));
      }
      return (
        (t.prototype.isEqual = function (t) {
          return (
            this.hasPendingWrites === t.hasPendingWrites &&
            this.fromCache === t.fromCache
          );
        }),
        t
      );
    })(),
    sp = (function (t) {
      function e(e, n, r, i, o, s) {
        var a = this;
        return (
          ((a = t.call(this, e, n, r, i, s) || this)._firestore = e),
          (a._firestoreImpl = e),
          (a.metadata = o),
          a
        );
      }
      return (
        (0, o.ZT)(e, t),
        (e.prototype.exists = function () {
          return t.prototype.exists.call(this);
        }),
        (e.prototype.data = function (t) {
          if ((void 0 === t && (t = {}), this._document)) {
            if (this._converter) {
              var e = new ap(
                this._firestore,
                this._userDataWriter,
                this._key,
                this._document,
                this.metadata,
                null,
              );
              return this._converter.fromFirestore(e, t);
            }
            return this._userDataWriter.convertValue(
              this._document.data.value,
              t.serverTimestamps,
            );
          }
        }),
        (e.prototype.get = function (t, e) {
          if ((void 0 === e && (e = {}), this._document)) {
            var n = this._document.data.field(ip("DocumentSnapshot.get", t));
            if (null !== n)
              return this._userDataWriter.convertValue(n, e.serverTimestamps);
          }
        }),
        e
      );
    })(np),
    ap = (function (t) {
      function e() {
        return (null !== t && t.apply(this, arguments)) || this;
      }
      return (
        (0, o.ZT)(e, t),
        (e.prototype.data = function (e) {
          return (void 0 === e && (e = {}), t.prototype.data.call(this, e));
        }),
        e
      );
    })(sp),
    up = (function () {
      function t(t, e, n, r) {
        ((this._firestore = t),
          (this._userDataWriter = e),
          (this._snapshot = r),
          (this.metadata = new op(r.hasPendingWrites, r.fromCache)),
          (this.query = n));
      }
      return (
        Object.defineProperty(t.prototype, "docs", {
          get: function () {
            var t = [];
            return (
              this.forEach(function (e) {
                return t.push(e);
              }),
              t
            );
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "size", {
          get: function () {
            return this._snapshot.docs.size;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "empty", {
          get: function () {
            return 0 === this.size;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.forEach = function (t, e) {
          var n = this;
          this._snapshot.docs.forEach(function (r) {
            t.call(
              e,
              new ap(
                n._firestore,
                n._userDataWriter,
                r.key,
                r,
                new op(
                  n._snapshot.mutatedKeys.has(r.key),
                  n._snapshot.fromCache,
                ),
                n.query.converter,
              ),
            );
          });
        }),
        (t.prototype.docChanges = function (t) {
          void 0 === t && (t = {});
          var e = !!t.includeMetadataChanges;
          if (e && this._snapshot.excludesMetadataChanges)
            throw new Hr(
              Kr.INVALID_ARGUMENT,
              "To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().",
            );
          return (
            (this._cachedChanges &&
              this._cachedChangesIncludeMetadataChanges === e) ||
              ((this._cachedChanges = (function (t, e) {
                if (t._snapshot.oldDocs.isEmpty()) {
                  var n = 0;
                  return t._snapshot.docChanges.map(function (e) {
                    return {
                      type: "added",
                      doc: new ap(
                        t._firestore,
                        t._userDataWriter,
                        e.doc.key,
                        e.doc,
                        new op(
                          t._snapshot.mutatedKeys.has(e.doc.key),
                          t._snapshot.fromCache,
                        ),
                        t.query.converter,
                      ),
                      oldIndex: -1,
                      newIndex: n++,
                    };
                  });
                }
                var r = t._snapshot.oldDocs;
                return t._snapshot.docChanges
                  .filter(function (t) {
                    return e || 3 !== t.type;
                  })
                  .map(function (e) {
                    var n = new ap(
                        t._firestore,
                        t._userDataWriter,
                        e.doc.key,
                        e.doc,
                        new op(
                          t._snapshot.mutatedKeys.has(e.doc.key),
                          t._snapshot.fromCache,
                        ),
                        t.query.converter,
                      ),
                      i = -1,
                      o = -1;
                    return (
                      0 !== e.type &&
                        ((i = r.indexOf(e.doc.key)), (r = r.delete(e.doc.key))),
                      1 !== e.type &&
                        (o = (r = r.add(e.doc)).indexOf(e.doc.key)),
                      { type: cp(e.type), doc: n, oldIndex: i, newIndex: o }
                    );
                  });
              })(this, e)),
              (this._cachedChangesIncludeMetadataChanges = e)),
            this._cachedChanges
          );
        }),
        t
      );
    })();
  function cp(t) {
    switch (t) {
      case 0:
        return "added";
      case 2:
      case 3:
        return "modified";
      case 1:
        return "removed";
      default:
        return $r();
    }
  }
  function hp(t, e) {
    return t instanceof sp && e instanceof sp
      ? t._firestore === e._firestore &&
          t._key.isEqual(e._key) &&
          (null === t._document
            ? null === e._document
            : t._document.isEqual(e._document)) &&
          t._converter === e._converter
      : t instanceof up &&
          e instanceof up &&
          t._firestore === e._firestore &&
          yf(t.query, e.query) &&
          t.metadata.isEqual(e.metadata) &&
          t._snapshot.isEqual(e._snapshot);
  }
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ function lp(t) {
    if (yo(t) && 0 === t.explicitOrderBy.length)
      throw new Hr(
        Kr.UNIMPLEMENTED,
        "limitToLast() queries require specifying at least one orderBy() clause",
      );
  }
  var fp = function () {};
  function pp(t) {
    for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
    for (var r = 0, i = e; r < i.length; r++) {
      var o = i[r];
      t = o._apply(t);
    }
    return t;
  }
  var dp = (function (t) {
      function e(e, n, r) {
        var i = this;
        return (
          ((i = t.call(this) || this).jc = e),
          (i.Wc = n),
          (i.Gc = r),
          (i.type = "where"),
          i
        );
      }
      return (
        (0, o.ZT)(e, t),
        (e.prototype._apply = function (t) {
          var e = Mf(t.firestore),
            n = (function (t, e, n, r, i, o, s) {
              var a;
              if (i.isKeyField()) {
                if ("array-contains" === o || "array-contains-any" === o)
                  throw new Hr(
                    Kr.INVALID_ARGUMENT,
                    "Invalid Query. You can't perform '" +
                      o +
                      "' queries on FieldPath.documentId().",
                  );
                if ("in" === o || "not-in" === o) {
                  _p(s, o);
                  for (var u = [], c = 0, h = s; c < h.length; c++) {
                    var l = h[c];
                    u.push(wp(r, t, l));
                  }
                  a = { arrayValue: { values: u } };
                } else a = wp(r, t, s);
              } else
                (("in" !== o && "not-in" !== o && "array-contains-any" !== o) ||
                  _p(s, o),
                  (a = Hf(n, "where", s, "in" === o || "not-in" === o)));
              var f = Xi.create(i, o, a);
              return (
                (function (t, e) {
                  if (e.g()) {
                    var n = bo(t);
                    if (null !== n && !n.isEqual(e.field))
                      throw new Hr(
                        Kr.INVALID_ARGUMENT,
                        "Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '" +
                          n.toString() +
                          "' and '" +
                          e.field.toString() +
                          "'",
                      );
                    var r = mo(t);
                    null !== r && Tp(t, e.field, r);
                  }
                  var i = (function (t, e) {
                    for (var n = 0, r = t.filters; n < r.length; n++) {
                      var i = r[n];
                      if (e.indexOf(i.op) >= 0) return i.op;
                    }
                    return null;
                  })(
                    t,
                    (function (t) {
                      switch (t) {
                        case "!=":
                          return ["!=", "not-in"];
                        case "array-contains":
                          return [
                            "array-contains",
                            "array-contains-any",
                            "not-in",
                          ];
                        case "in":
                          return ["array-contains-any", "in", "not-in"];
                        case "array-contains-any":
                          return [
                            "array-contains",
                            "array-contains-any",
                            "in",
                            "not-in",
                          ];
                        case "not-in":
                          return [
                            "array-contains",
                            "array-contains-any",
                            "in",
                            "not-in",
                            "!=",
                          ];
                        default:
                          return [];
                      }
                    })(e.op),
                  );
                  if (null !== i)
                    throw i === e.op
                      ? new Hr(
                          Kr.INVALID_ARGUMENT,
                          "Invalid query. You cannot use more than one '" +
                            e.op.toString() +
                            "' filter.",
                        )
                      : new Hr(
                          Kr.INVALID_ARGUMENT,
                          "Invalid query. You cannot use '" +
                            e.op.toString() +
                            "' filters with '" +
                            i.toString() +
                            "' filters.",
                        );
                })(t, f),
                f
              );
            })(
              t._query,
              0,
              e,
              t.firestore._databaseId,
              this.jc,
              this.Wc,
              this.Gc,
            );
          return new ff(
            t.firestore,
            t.converter,
            (function (t, e) {
              var n = t.filters.concat([e]);
              return new fo(
                t.path,
                t.collectionGroup,
                t.explicitOrderBy.slice(),
                n,
                t.limit,
                t.limitType,
                t.startAt,
                t.endAt,
              );
            })(t._query, n),
          );
        }),
        e
      );
    })(fp),
    vp = (function (t) {
      function e(e, n) {
        var r = this;
        return (
          ((r = t.call(this) || this).jc = e),
          (r.zc = n),
          (r.type = "orderBy"),
          r
        );
      }
      return (
        (0, o.ZT)(e, t),
        (e.prototype._apply = function (t) {
          var e = (function (t, e, n) {
            if (null !== t.startAt)
              throw new Hr(
                Kr.INVALID_ARGUMENT,
                "Invalid query. You must not call startAt() or startAfter() before calling orderBy().",
              );
            if (null !== t.endAt)
              throw new Hr(
                Kr.INVALID_ARGUMENT,
                "Invalid query. You must not call endAt() or endBefore() before calling orderBy().",
              );
            var r = new uo(e, n);
            return (
              (function (t, e) {
                if (null === mo(t)) {
                  var n = bo(t);
                  null !== n && Tp(t, n, e.field);
                }
              })(t, r),
              r
            );
          })(t._query, this.jc, this.zc);
          return new ff(
            t.firestore,
            t.converter,
            (function (t, e) {
              var n = t.explicitOrderBy.concat([e]);
              return new fo(
                t.path,
                t.collectionGroup,
                n,
                t.filters.slice(),
                t.limit,
                t.limitType,
                t.startAt,
                t.endAt,
              );
            })(t._query, e),
          );
        }),
        e
      );
    })(fp),
    gp = (function (t) {
      function e(e, n, r) {
        var i = this;
        return (
          ((i = t.call(this) || this).type = e),
          (i.Hc = n),
          (i.Jc = r),
          i
        );
      }
      return (
        (0, o.ZT)(e, t),
        (e.prototype._apply = function (t) {
          return new ff(
            t.firestore,
            t.converter,
            Eo(t._query, this.Hc, this.Jc),
          );
        }),
        e
      );
    })(fp),
    yp = (function (t) {
      function e(e, n, r) {
        var i = this;
        return (
          ((i = t.call(this) || this).type = e),
          (i.Yc = n),
          (i.Xc = r),
          i
        );
      }
      return (
        (0, o.ZT)(e, t),
        (e.prototype._apply = function (t) {
          var e = bp(t, this.type, this.Yc, this.Xc);
          return new ff(
            t.firestore,
            t.converter,
            (function (t, e) {
              return new fo(
                t.path,
                t.collectionGroup,
                t.explicitOrderBy.slice(),
                t.filters.slice(),
                t.limit,
                t.limitType,
                e,
                t.endAt,
              );
            })(t._query, e),
          );
        }),
        e
      );
    })(fp),
    mp = (function (t) {
      function e(e, n, r) {
        var i = this;
        return (
          ((i = t.call(this) || this).type = e),
          (i.Yc = n),
          (i.Xc = r),
          i
        );
      }
      return (
        (0, o.ZT)(e, t),
        (e.prototype._apply = function (t) {
          var e = bp(t, this.type, this.Yc, this.Xc);
          return new ff(
            t.firestore,
            t.converter,
            (function (t, e) {
              return new fo(
                t.path,
                t.collectionGroup,
                t.explicitOrderBy.slice(),
                t.filters.slice(),
                t.limit,
                t.limitType,
                t.startAt,
                e,
              );
            })(t._query, e),
          );
        }),
        e
      );
    })(fp);
  function bp(t, e, n, r) {
    if (((n[0] = (0, s.m9)(n[0])), n[0] instanceof np))
      return (function (t, e, n, r, i) {
        if (!r)
          throw new Hr(
            Kr.NOT_FOUND,
            "Can't use a DocumentSnapshot that doesn't exist for " + n + "().",
          );
        for (var o = [], s = 0, a = _o(t); s < a.length; s++) {
          var u = a[s];
          if (u.field.isKeyField()) o.push(Mi(e, r.key));
          else {
            var c = r.data.field(u.field);
            if (Ti(c))
              throw new Hr(
                Kr.INVALID_ARGUMENT,
                'Invalid query. You are trying to start or end a query using a document for which the field "' +
                  u.field +
                  '" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)',
              );
            if (null === c) {
              var h = u.field.canonicalString();
              throw new Hr(
                Kr.INVALID_ARGUMENT,
                "Invalid query. You are trying to start or end a query using a document for which the field '" +
                  h +
                  "' (used as the orderBy) does not exist.",
              );
            }
            o.push(c);
          }
        }
        return new so(o, i);
      })(t._query, t.firestore._databaseId, e, n[0]._document, r);
    var o = Mf(t.firestore);
    return (function (t, e, n, r, o, s) {
      var a = t.explicitOrderBy;
      if (o.length > a.length)
        throw new Hr(
          Kr.INVALID_ARGUMENT,
          "Too many arguments provided to " +
            r +
            "(). The number of arguments must be less than or equal to the number of orderBy() clauses",
        );
      for (var u = [], c = 0; c < o.length; c++) {
        var h = o[c];
        if (a[c].field.isKeyField()) {
          if ("string" != typeof h)
            throw new Hr(
              Kr.INVALID_ARGUMENT,
              "Invalid query. Expected a string for document ID in " +
                r +
                "(), but got a " +
                (0, i.Z)(h),
            );
          if (!wo(t) && -1 !== h.indexOf("/"))
            throw new Hr(
              Kr.INVALID_ARGUMENT,
              "Invalid query. When querying a collection and ordering by FieldPath.documentId(), the value passed to " +
                r +
                "() must be a plain document ID, but '" +
                h +
                "' contains a slash.",
            );
          var l = t.path.child(pi.fromString(h));
          if (!Ni.isDocumentKey(l))
            throw new Hr(
              Kr.INVALID_ARGUMENT,
              "Invalid query. When querying a collection group and ordering by FieldPath.documentId(), the value passed to " +
                r +
                "() must result in a valid document path, but '" +
                l +
                "' is not because it contains an odd number of segments.",
            );
          var f = new Ni(l);
          u.push(Mi(e, f));
        } else {
          var p = Hf(n, r, h);
          u.push(p);
        }
      }
      return new so(u, s);
    })(t._query, t.firestore._databaseId, o, e, n, r);
  }
  function wp(t, e, n) {
    if ("string" == typeof (n = (0, s.m9)(n))) {
      if ("" === n)
        throw new Hr(
          Kr.INVALID_ARGUMENT,
          "Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string.",
        );
      if (!wo(e) && -1 !== n.indexOf("/"))
        throw new Hr(
          Kr.INVALID_ARGUMENT,
          "Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '" +
            n +
            "' contains a '/' character.",
        );
      var r = e.path.child(pi.fromString(n));
      if (!Ni.isDocumentKey(r))
        throw new Hr(
          Kr.INVALID_ARGUMENT,
          "Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '" +
            r +
            "' is not because it has an odd number of segments (" +
            r.length +
            ").",
        );
      return Mi(t, new Ni(r));
    }
    if (n instanceof lf) return Mi(t, n._key);
    throw new Hr(
      Kr.INVALID_ARGUMENT,
      "Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: " +
        sf(n) +
        ".",
    );
  }
  function _p(t, e) {
    if (!Array.isArray(t) || 0 === t.length)
      throw new Hr(
        Kr.INVALID_ARGUMENT,
        "Invalid Query. A non-empty array is required for '" +
          e.toString() +
          "' filters.",
      );
    if (t.length > 10)
      throw new Hr(
        Kr.INVALID_ARGUMENT,
        "Invalid Query. '" +
          e.toString() +
          "' filters support a maximum of 10 elements in the value array.",
      );
  }
  function Tp(t, e, n) {
    if (!n.isEqual(e))
      throw new Hr(
        Kr.INVALID_ARGUMENT,
        "Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '" +
          e.toString() +
          "' and so you must also use '" +
          e.toString() +
          "' as your first argument to orderBy(), but your first orderBy() is on field '" +
          n.toString() +
          "' instead.",
      );
  }
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ var Ep = (function () {
    function t() {}
    return (
      (t.prototype.convertValue = function (t, e) {
        switch ((void 0 === e && (e = "none"), Ri(t))) {
          case 0:
            return null;
          case 1:
            return t.booleanValue;
          case 2:
            return wi(t.integerValue || t.doubleValue);
          case 3:
            return this.convertTimestamp(t.timestampValue);
          case 4:
            return this.convertServerTimestamp(t, e);
          case 5:
            return t.stringValue;
          case 6:
            return this.convertBytes(_i(t.bytesValue));
          case 7:
            return this.convertReference(t.referenceValue);
          case 8:
            return this.convertGeoPoint(t.geoPointValue);
          case 9:
            return this.convertArray(t.arrayValue, e);
          case 10:
            return this.convertObject(t.mapValue, e);
          default:
            throw $r();
        }
      }),
      (t.prototype.convertObject = function (t, e) {
        var n = this,
          r = {};
        return (
          hi(t.fields, function (t, i) {
            r[t] = n.convertValue(i, e);
          }),
          r
        );
      }),
      (t.prototype.convertGeoPoint = function (t) {
        return new Rf(wi(t.latitude), wi(t.longitude));
      }),
      (t.prototype.convertArray = function (t, e) {
        var n = this;
        return (t.values || []).map(function (t) {
          return n.convertValue(t, e);
        });
      }),
      (t.prototype.convertServerTimestamp = function (t, e) {
        switch (e) {
          case "previous":
            var n = Ei(t);
            return null == n ? null : this.convertValue(n, e);
          case "estimate":
            return this.convertTimestamp(Ii(t));
          default:
            return null;
        }
      }),
      (t.prototype.convertTimestamp = function (t) {
        var e = bi(t);
        return new ai(e.seconds, e.nanos);
      }),
      (t.prototype.convertDocumentKey = function (t, e) {
        var n = pi.fromString(t);
        ti(va(n));
        var r = new Hl(n.get(1), n.get(3)),
          i = new Ni(n.popFirst(5));
        return (
          r.isEqual(e) ||
            Zr(
              "Document " +
                i +
                " contains a document reference within a different database (" +
                r.projectId +
                "/" +
                r.database +
                ") which is not supported. It will be treated as a reference in the current database (" +
                e.projectId +
                "/" +
                e.database +
                ") instead.",
            ),
          i
        );
      }),
      t
    );
  })();
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ function Ip(t, e, n) {
    return t
      ? n && (n.merge || n.mergeFields)
        ? t.toFirestore(e, n)
        : t.toFirestore(e)
      : e;
  }
  var Sp = (function (t) {
      function e(e) {
        var n = this;
        return (((n = t.call(this) || this).firestore = e), n);
      }
      return (
        (0, o.ZT)(e, t),
        (e.prototype.convertBytes = function (t) {
          return new kf(t);
        }),
        (e.prototype.convertReference = function (t) {
          var e = this.convertDocumentKey(t, this.firestore._databaseId);
          return new lf(this.firestore, null, e);
        }),
        e
      );
    })(Ep),
    Ap = (function () {
      function t(t, e) {
        ((this._firestore = t),
          (this._commitHandler = e),
          (this._mutations = []),
          (this._committed = !1),
          (this._dataReader = Mf(t)));
      }
      return (
        (t.prototype.set = function (t, e, n) {
          this._verifyNotCommitted();
          var r = kp(t, this._firestore),
            i = Ip(r.converter, e, n),
            o = Ff(
              this._dataReader,
              "WriteBatch.set",
              r._key,
              i,
              null !== r.converter,
              n,
            );
          return (this._mutations.push(o.toMutation(r._key, Jo.none())), this);
        }),
        (t.prototype.update = function (t, e, n) {
          for (var r = [], i = 3; i < arguments.length; i++)
            r[i - 3] = arguments[i];
          this._verifyNotCommitted();
          var o,
            a = kp(t, this._firestore);
          return (
            (o =
              "string" == typeof (e = (0, s.m9)(e)) || e instanceof Af
                ? Kf(this._dataReader, "WriteBatch.update", a._key, e, n, r)
                : zf(this._dataReader, "WriteBatch.update", a._key, e)),
            this._mutations.push(o.toMutation(a._key, Jo.exists(!0))),
            this
          );
        }),
        (t.prototype.delete = function (t) {
          this._verifyNotCommitted();
          var e = kp(t, this._firestore);
          return (
            (this._mutations = this._mutations.concat(
              new us(e._key, Jo.none()),
            )),
            this
          );
        }),
        (t.prototype.commit = function () {
          return (
            this._verifyNotCommitted(),
            (this._committed = !0),
            this._mutations.length > 0
              ? this._commitHandler(this._mutations)
              : Promise.resolve()
          );
        }),
        (t.prototype._verifyNotCommitted = function () {
          if (this._committed)
            throw new Hr(
              Kr.FAILED_PRECONDITION,
              "A write batch can no longer be used after commit() has been called.",
            );
        }),
        t
      );
    })();
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ function kp(t, e) {
    if ((t = (0, s.m9)(t)).firestore !== e)
      throw new Hr(
        Kr.INVALID_ARGUMENT,
        "Provided document reference is from a different Firestore instance.",
      );
    return t;
  }
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ var Np = (function (t) {
    function e(e) {
      var n = this;
      return (((n = t.call(this) || this).firestore = e), n);
    }
    return (
      (0, o.ZT)(e, t),
      (e.prototype.convertBytes = function (t) {
        return new kf(t);
      }),
      (e.prototype.convertReference = function (t) {
        var e = this.convertDocumentKey(t, this.firestore._databaseId);
        return new lf(this.firestore, null, e);
      }),
      e
    );
  })(Ep);
  function Rp(t, e, n) {
    t = af(t, lf);
    var r = af(t.firestore, _f),
      i = Ip(t.converter, e, n);
    return Op(r, [
      Ff(Mf(r), "setDoc", t._key, i, null !== t.converter, n).toMutation(
        t._key,
        Jo.none(),
      ),
    ]);
  }
  function Dp(t, e, n) {
    for (var r = [], i = 3; i < arguments.length; i++) r[i - 3] = arguments[i];
    t = af(t, lf);
    var o = af(t.firestore, _f),
      a = Mf(o);
    return Op(o, [
      ("string" == typeof (e = (0, s.m9)(e)) || e instanceof Af
        ? Kf(a, "updateDoc", t._key, e, n, r)
        : zf(a, "updateDoc", t._key, e)
      ).toMutation(t._key, Jo.exists(!0)),
    ]);
  }
  function Cp(t) {
    for (var e, n, r, a = [], u = 1; u < arguments.length; u++)
      a[u - 1] = arguments[u];
    t = (0, s.m9)(t);
    var c = { includeMetadataChanges: !1 },
      h = 0;
    "object" != (0, i.Z)(a[h]) || bf(a[h]) || ((c = a[h]), h++);
    var l,
      f,
      p,
      d = { includeMetadataChanges: c.includeMetadataChanges };
    if (bf(a[h])) {
      var v = a[h];
      ((a[h] = null === (e = v.next) || void 0 === e ? void 0 : e.bind(v)),
        (a[h + 1] =
          null === (n = v.error) || void 0 === n ? void 0 : n.bind(v)),
        (a[h + 2] =
          null === (r = v.complete) || void 0 === r ? void 0 : r.bind(v)));
    }
    if (t instanceof lf)
      ((f = af(t.firestore, _f)),
        (p = vo(t._key.path)),
        (l = {
          next: function (e) {
            a[h] && a[h](xp(f, t, e));
          },
          error: a[h + 1],
          complete: a[h + 2],
        }));
    else {
      var g = af(t, ff);
      ((f = af(g.firestore, _f)), (p = g._query));
      var y = new Np(f);
      ((l = {
        next: function (t) {
          a[h] && a[h](new up(f, y, g, t));
        },
        error: a[h + 1],
        complete: a[h + 2],
      }),
        lp(t._query));
    }
    return (function (t, e, n, r) {
      var i = this,
        s = new Dl(r),
        a = new Vh(e, s, n);
      return (
        t.asyncQueue.enqueueAndForget(function () {
          return (0, o.mG)(i, void 0, void 0, function () {
            var e;
            return (0, o.Jh)(this, function (n) {
              switch (n.label) {
                case 0:
                  return ((e = Ph), [4, Bl(t)]);
                case 1:
                  return [2, e.apply(void 0, [n.sent(), a])];
              }
            });
          });
        }),
        function () {
          (s.Wo(),
            t.asyncQueue.enqueueAndForget(function () {
              return (0, o.mG)(i, void 0, void 0, function () {
                var e;
                return (0, o.Jh)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return ((e = Lh), [4, Bl(t)]);
                    case 1:
                      return [2, e.apply(void 0, [n.sent(), a])];
                  }
                });
              });
            }));
        }
      );
    })(Tf(f), p, d, l);
  }
  function Op(t, e) {
    return (function (t, e) {
      var n = this,
        r = new Va();
      return (
        t.asyncQueue.enqueueAndForget(function () {
          return (0, o.mG)(n, void 0, void 0, function () {
            var n;
            return (0, o.Jh)(this, function (i) {
              switch (i.label) {
                case 0:
                  return ((n = Yh), [4, jl(t)]);
                case 1:
                  return [2, n.apply(void 0, [i.sent(), e, r])];
              }
            });
          });
        }),
        r.promise
      );
    })(Tf(t), e);
  }
  function xp(t, e, n) {
    var r = n.docs.get(e._key),
      i = new Np(t);
    return new sp(
      t,
      i,
      e._key,
      r,
      new op(n.hasPendingWrites, n.fromCache),
      e.converter,
    );
  }
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ var Pp = (function (t) {
    function e(e, n) {
      var r = this;
      return (((r = t.call(this, e, n) || this)._firestore = e), r);
    }
    return (
      (0, o.ZT)(e, t),
      (e.prototype.get = function (e) {
        var n = this,
          r = kp(e, this._firestore),
          i = new Np(this._firestore);
        return t.prototype.get.call(this, e).then(function (t) {
          return new sp(
            n._firestore,
            i,
            r._key,
            t._document,
            new op(!1, !1),
            r.converter,
          );
        });
      }),
      e
    );
  })(
    (function () {
      function t(t, e) {
        ((this._firestore = t),
          (this._transaction = e),
          (this._dataReader = Mf(t)));
      }
      return (
        (t.prototype.get = function (t) {
          var e = this,
            n = kp(t, this._firestore),
            r = new Sp(this._firestore);
          return this._transaction.lookup([n._key]).then(function (t) {
            if (!t || 1 !== t.length) return $r();
            var i = t[0];
            if (i.isFoundDocument())
              return new np(e._firestore, r, i.key, i, n.converter);
            if (i.isNoDocument())
              return new np(e._firestore, r, n._key, null, n.converter);
            throw $r();
          });
        }),
        (t.prototype.set = function (t, e, n) {
          var r = kp(t, this._firestore),
            i = Ip(r.converter, e, n),
            o = Ff(
              this._dataReader,
              "Transaction.set",
              r._key,
              i,
              null !== r.converter,
              n,
            );
          return (this._transaction.set(r._key, o), this);
        }),
        (t.prototype.update = function (t, e, n) {
          for (var r = [], i = 3; i < arguments.length; i++)
            r[i - 3] = arguments[i];
          var o,
            a = kp(t, this._firestore);
          return (
            (o =
              "string" == typeof (e = (0, s.m9)(e)) || e instanceof Af
                ? Kf(this._dataReader, "Transaction.update", a._key, e, n, r)
                : zf(this._dataReader, "Transaction.update", a._key, e)),
            this._transaction.update(a._key, o),
            this
          );
        }),
        (t.prototype.delete = function (t) {
          var e = kp(t, this._firestore);
          return (this._transaction.delete(e._key), this);
        }),
        t
      );
    })(),
  );
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ function Lp() {
    if ("undefined" == typeof Uint8Array)
      throw new Hr(
        Kr.UNIMPLEMENTED,
        "Uint8Arrays are not available in this environment.",
      );
  }
  function Mp() {
    if ("undefined" == typeof atob)
      throw new Hr(
        Kr.UNIMPLEMENTED,
        "Blobs are unavailable in Firestore in this environment.",
      );
  }
  var Fp = (function () {
      function t(t) {
        this._delegate = t;
      }
      return (
        (t.fromBase64String = function (e) {
          return (Mp(), new t(kf.fromBase64String(e)));
        }),
        (t.fromUint8Array = function (e) {
          return (Lp(), new t(kf.fromUint8Array(e)));
        }),
        (t.prototype.toBase64 = function () {
          return (Mp(), this._delegate.toBase64());
        }),
        (t.prototype.toUint8Array = function () {
          return (Lp(), this._delegate.toUint8Array());
        }),
        (t.prototype.isEqual = function (t) {
          return this._delegate.isEqual(t._delegate);
        }),
        (t.prototype.toString = function () {
          return "Blob(base64: " + this.toBase64() + ")";
        }),
        t
      );
    })(),
    Up = (function () {
      function t() {}
      return (
        (t.prototype.enableIndexedDbPersistence = function (t, e) {
          return (function (t, e) {
            Sf((t = af(t, _f)));
            var n = Tf(t),
              r = t._freezeSettings(),
              i = new Rl();
            return If(
              n,
              i,
              new kl(
                i,
                r.cacheSizeBytes,
                null == e ? void 0 : e.forceOwnership,
              ),
            );
          })(t._delegate, { forceOwnership: e });
        }),
        (t.prototype.enableMultiTabIndexedDbPersistence = function (t) {
          return (function (t) {
            Sf((t = af(t, _f)));
            var e = Tf(t),
              n = t._freezeSettings(),
              r = new Rl();
            return If(e, r, new Nl(r, n.cacheSizeBytes));
          })(t._delegate);
        }),
        (t.prototype.clearIndexedDbPersistence = function (t) {
          return (function (t) {
            var e = this;
            if (t._initialized && !t._terminated)
              throw new Hr(
                Kr.FAILED_PRECONDITION,
                "Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.",
              );
            var n = new Va();
            return (
              t._queue.enqueueAndForgetEvenWhileRestricted(function () {
                return (0, o.mG)(e, void 0, void 0, function () {
                  var e;
                  return (0, o.Jh)(this, function (r) {
                    switch (r.label) {
                      case 0:
                        return (
                          r.trys.push([0, 2, , 3]),
                          [
                            4,
                            (function (t) {
                              return (0, o.mG)(
                                this,
                                void 0,
                                void 0,
                                function () {
                                  var e;
                                  return (0, o.Jh)(this, function (n) {
                                    switch (n.label) {
                                      case 0:
                                        return Ba.yt()
                                          ? ((e = t + "main"),
                                            [4, Ba.delete(e)])
                                          : [2, Promise.resolve()];
                                      case 1:
                                        return (n.sent(), [2]);
                                    }
                                  });
                                },
                              );
                            })($u(t._databaseId, t._persistenceKey)),
                          ]
                        );
                      case 1:
                        return (r.sent(), n.resolve(), [3, 3]);
                      case 2:
                        return ((e = r.sent()), n.reject(e), [3, 3]);
                      case 3:
                        return [2];
                    }
                  });
                });
              }),
              n.promise
            );
          })(t._delegate);
        }),
        t
      );
    })(),
    Vp = (function () {
      function t(t, e, n) {
        var r = this;
        ((this._delegate = e),
          (this.Zc = n),
          (this.INTERNAL = {
            delete: function () {
              return r.terminate();
            },
          }),
          t instanceof Hl || (this.tu = t));
      }
      return (
        Object.defineProperty(t.prototype, "_databaseId", {
          get: function () {
            return this._delegate._databaseId;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.settings = function (t) {
          var e = this._delegate._getSettings();
          (t.merge ||
            e.host === t.host ||
            Xr(
              "You are overriding the original host. If you did not intend to override your settings, use {merge: true}.",
            ),
            t.merge &&
              delete (t = Object.assign(Object.assign({}, e), t)).merge,
            this._delegate._setSettings(t));
        }),
        (t.prototype.useEmulator = function (t, e, n) {
          (void 0 === n && (n = {}),
            (function (t, e, n, r) {
              var i;
              void 0 === r && (r = {});
              var o = (t = af(t, hf))._getSettings();
              if (
                ("firestore.googleapis.com" !== o.host &&
                  o.host !== e &&
                  Xr(
                    "Host has been set in both settings() and useEmulator(), emulator host will be used",
                  ),
                t._setSettings(
                  Object.assign(Object.assign({}, o), {
                    host: e + ":" + n,
                    ssl: !1,
                  }),
                ),
                r.mockUserToken)
              ) {
                var a, u;
                if ("string" == typeof r.mockUserToken)
                  ((a = r.mockUserToken), (u = Dc.MOCK_USER));
                else {
                  a = (0, s.Sg)(
                    r.mockUserToken,
                    null === (i = t._app) || void 0 === i
                      ? void 0
                      : i.options.projectId,
                  );
                  var c = r.mockUserToken.sub || r.mockUserToken.user_id;
                  if (!c)
                    throw new Hr(
                      Kr.INVALID_ARGUMENT,
                      "mockUserToken must contain 'sub' or 'user_id' field!",
                    );
                  u = new Dc(c);
                }
                t._credentials = new Zl(new Ql(a, u));
              }
            })(this._delegate, t, e, n));
        }),
        (t.prototype.enableNetwork = function () {
          return (function (t) {
            var e = this;
            return t.asyncQueue.enqueue(function () {
              return (0, o.mG)(e, void 0, void 0, function () {
                var e, n;
                return (0, o.Jh)(this, function (r) {
                  switch (r.label) {
                    case 0:
                      return [4, Ul(t)];
                    case 1:
                      return ((e = r.sent()), [4, ql(t)]);
                    case 2:
                      return (
                        (n = r.sent()),
                        [
                          2,
                          (e.setNetworkEnabled(!0),
                          (function (t) {
                            var e = ei(t);
                            return (e.Or.delete(0), nh(e));
                          })(n)),
                        ]
                      );
                  }
                });
              });
            });
          })(Tf(af(this._delegate, _f)));
        }),
        (t.prototype.disableNetwork = function () {
          return (function (t) {
            var e = this;
            return t.asyncQueue.enqueue(function () {
              return (0, o.mG)(e, void 0, void 0, function () {
                var e, n;
                return (0, o.Jh)(this, function (r) {
                  switch (r.label) {
                    case 0:
                      return [4, Ul(t)];
                    case 1:
                      return ((e = r.sent()), [4, ql(t)]);
                    case 2:
                      return (
                        (n = r.sent()),
                        [
                          2,
                          (e.setNetworkEnabled(!1),
                          (function (t) {
                            return (0, o.mG)(this, void 0, void 0, function () {
                              var e;
                              return (0, o.Jh)(this, function (n) {
                                switch (n.label) {
                                  case 0:
                                    return ((e = ei(t)).Or.add(0), [4, rh(e)]);
                                  case 1:
                                    return (n.sent(), e.Br.set("Offline"), [2]);
                                }
                              });
                            });
                          })(n)),
                        ]
                      );
                  }
                });
              });
            });
          })(Tf(af(this._delegate, _f)));
        }),
        (t.prototype.enablePersistence = function (t) {
          var e = !1,
            n = !1;
          return (
            t &&
              nf(
                "synchronizeTabs",
                (e = !!t.synchronizeTabs),
                "experimentalForceOwningTab",
                (n = !!t.experimentalForceOwningTab),
              ),
            e
              ? this.Zc.enableMultiTabIndexedDbPersistence(this)
              : this.Zc.enableIndexedDbPersistence(this, n)
          );
        }),
        (t.prototype.clearPersistence = function () {
          return this.Zc.clearIndexedDbPersistence(this);
        }),
        (t.prototype.terminate = function () {
          return (
            this.tu &&
              (this.tu._removeServiceInstance("firestore"),
              this.tu._removeServiceInstance("firestore-exp")),
            this._delegate._delete()
          );
        }),
        (t.prototype.waitForPendingWrites = function () {
          return (function (t) {
            var e = this,
              n = new Va();
            return (
              t.asyncQueue.enqueueAndForget(function () {
                return (0, o.mG)(e, void 0, void 0, function () {
                  var e;
                  return (0, o.Jh)(this, function (r) {
                    switch (r.label) {
                      case 0:
                        return ((e = il), [4, jl(t)]);
                      case 1:
                        return [2, e.apply(void 0, [r.sent(), n])];
                    }
                  });
                });
              }),
              n.promise
            );
          })(Tf(af(this._delegate, _f)));
        }),
        (t.prototype.onSnapshotsInSync = function (t) {
          return (function (t, e) {
            return (function (t, e) {
              var n = this,
                r = new Dl(e);
              return (
                t.asyncQueue.enqueueAndForget(function () {
                  return (0, o.mG)(n, void 0, void 0, function () {
                    var e;
                    return (0, o.Jh)(this, function (n) {
                      switch (n.label) {
                        case 0:
                          return (
                            (e = function (t, e) {
                              (ei(t).Gr.add(e), e.next());
                            }),
                            [4, Bl(t)]
                          );
                        case 1:
                          return [2, e.apply(void 0, [n.sent(), r])];
                      }
                    });
                  });
                }),
                function () {
                  (r.Wo(),
                    t.asyncQueue.enqueueAndForget(function () {
                      return (0, o.mG)(n, void 0, void 0, function () {
                        var e;
                        return (0, o.Jh)(this, function (n) {
                          switch (n.label) {
                            case 0:
                              return (
                                (e = function (t, e) {
                                  ei(t).Gr.delete(e);
                                }),
                                [4, Bl(t)]
                              );
                            case 1:
                              return [2, e.apply(void 0, [n.sent(), r])];
                          }
                        });
                      });
                    }));
                }
              );
            })(Tf((t = af(t, _f))), bf(e) ? e : { next: e });
          })(this._delegate, t);
        }),
        Object.defineProperty(t.prototype, "app", {
          get: function () {
            if (!this.tu)
              throw new Hr(
                Kr.FAILED_PRECONDITION,
                "Firestore was not initialized using the Firebase SDK. 'app' is not available",
              );
            return this.tu;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.collection = function (t) {
          try {
            return new td(this, df(this._delegate, t));
          } catch (t) {
            throw Hp(t, "collection()", "Firestore.collection()");
          }
        }),
        (t.prototype.doc = function (t) {
          try {
            return new Kp(this, vf(this._delegate, t));
          } catch (t) {
            throw Hp(t, "doc()", "Firestore.doc()");
          }
        }),
        (t.prototype.collectionGroup = function (t) {
          try {
            return new Xp(
              this,
              (function (t, e) {
                if (
                  ((t = af(t, hf)),
                  tf("collectionGroup", "collection id", e),
                  e.indexOf("/") >= 0)
                )
                  throw new Hr(
                    Kr.INVALID_ARGUMENT,
                    "Invalid collection ID '" +
                      e +
                      "' passed to function collectionGroup(). Collection IDs must not contain '/'.",
                  );
                return new ff(
                  t,
                  null,
                  (function (t) {
                    return new fo(pi.emptyPath(), t);
                  })(e),
                );
              })(this._delegate, t),
            );
          } catch (t) {
            throw Hp(t, "collectionGroup()", "Firestore.collectionGroup()");
          }
        }),
        (t.prototype.runTransaction = function (t) {
          var e = this;
          return (function (t, e) {
            return (function (t, e) {
              var n = this,
                r = new Va();
              return (
                t.asyncQueue.enqueueAndForget(function () {
                  return (0, o.mG)(n, void 0, void 0, function () {
                    var n;
                    return (0, o.Jh)(this, function (i) {
                      switch (i.label) {
                        case 0:
                          return [
                            4,
                            (function (t) {
                              return Fl(t).then(function (t) {
                                return t.datastore;
                              });
                            })(t),
                          ];
                        case 1:
                          return (
                            (n = i.sent()),
                            new Ol(t.asyncQueue, n, e, r).run(),
                            [2]
                          );
                      }
                    });
                  });
                }),
                r.promise
              );
            })(Tf(t), function (n) {
              return e(new Pp(t, n));
            });
          })(this._delegate, function (n) {
            return t(new Bp(e, n));
          });
        }),
        (t.prototype.batch = function () {
          var t = this;
          return (
            Tf(this._delegate),
            new Gp(
              new Ap(this._delegate, function (e) {
                return Op(t._delegate, e);
              }),
            )
          );
        }),
        (t.prototype.loadBundle = function (t) {
          throw new Hr(
            Kr.FAILED_PRECONDITION,
            '"loadBundle()" does not exist, have you imported "firebase/firestore/bundle"?',
          );
        }),
        (t.prototype.namedQuery = function (t) {
          throw new Hr(
            Kr.FAILED_PRECONDITION,
            '"namedQuery()" does not exist, have you imported "firebase/firestore/bundle"?',
          );
        }),
        t
      );
    })(),
    qp = (function (t) {
      function e(e) {
        var n = this;
        return (((n = t.call(this) || this).firestore = e), n);
      }
      return (
        (0, o.ZT)(e, t),
        (e.prototype.convertBytes = function (t) {
          return new Fp(new kf(t));
        }),
        (e.prototype.convertReference = function (t) {
          var e = this.convertDocumentKey(t, this.firestore._databaseId);
          return Kp.eu(e, this.firestore, null);
        }),
        e
      );
    })(Ep);
  function jp(t) {
    var e;
    ((e = t), Jr.setLogLevel(e));
  }
  var Bp = (function () {
      function t(t, e) {
        ((this._firestore = t),
          (this._delegate = e),
          (this._userDataWriter = new qp(t)));
      }
      return (
        (t.prototype.get = function (t) {
          var e = this,
            n = ed(t);
          return this._delegate.get(n).then(function (t) {
            return new Wp(
              e._firestore,
              new sp(
                e._firestore._delegate,
                e._userDataWriter,
                t._key,
                t._document,
                t.metadata,
                n.converter,
              ),
            );
          });
        }),
        (t.prototype.set = function (t, e, n) {
          var r = ed(t);
          return (
            n
              ? (ef("Transaction.set", n), this._delegate.set(r, e, n))
              : this._delegate.set(r, e),
            this
          );
        }),
        (t.prototype.update = function (t, e, n) {
          for (var r, i = [], s = 3; s < arguments.length; s++)
            i[s - 3] = arguments[s];
          var a = ed(t);
          return (
            2 === arguments.length
              ? this._delegate.update(a, e)
              : (r = this._delegate).update.apply(r, (0, o.ev)([a, e, n], i)),
            this
          );
        }),
        (t.prototype.delete = function (t) {
          var e = ed(t);
          return (this._delegate.delete(e), this);
        }),
        t
      );
    })(),
    Gp = (function () {
      function t(t) {
        this._delegate = t;
      }
      return (
        (t.prototype.set = function (t, e, n) {
          var r = ed(t);
          return (
            n
              ? (ef("WriteBatch.set", n), this._delegate.set(r, e, n))
              : this._delegate.set(r, e),
            this
          );
        }),
        (t.prototype.update = function (t, e, n) {
          for (var r, i = [], s = 3; s < arguments.length; s++)
            i[s - 3] = arguments[s];
          var a = ed(t);
          return (
            2 === arguments.length
              ? this._delegate.update(a, e)
              : (r = this._delegate).update.apply(r, (0, o.ev)([a, e, n], i)),
            this
          );
        }),
        (t.prototype.delete = function (t) {
          var e = ed(t);
          return (this._delegate.delete(e), this);
        }),
        (t.prototype.commit = function () {
          return this._delegate.commit();
        }),
        t
      );
    })(),
    zp = (function () {
      function t(t, e, n) {
        ((this._firestore = t),
          (this._userDataWriter = e),
          (this._delegate = n));
      }
      return (
        (t.prototype.fromFirestore = function (t, e) {
          var n = new ap(
            this._firestore._delegate,
            this._userDataWriter,
            t._key,
            t._document,
            t.metadata,
            null,
          );
          return this._delegate.fromFirestore(
            new Zp(this._firestore, n),
            null != e ? e : {},
          );
        }),
        (t.prototype.toFirestore = function (t, e) {
          return e
            ? this._delegate.toFirestore(t, e)
            : this._delegate.toFirestore(t);
        }),
        (t.nu = function (e, n) {
          var r = t.su,
            i = r.get(e);
          i || ((i = new WeakMap()), r.set(e, i));
          var o = i.get(n);
          return (o || ((o = new t(e, new qp(e), n)), i.set(n, o)), o);
        }),
        t
      );
    })();
  zp.su = new WeakMap();
  var Kp = (function () {
    function t(t, e) {
      ((this.firestore = t),
        (this._delegate = e),
        (this._userDataWriter = new qp(t)));
    }
    return (
      (t.iu = function (e, n, r) {
        if (e.length % 2 != 0)
          throw new Hr(
            Kr.INVALID_ARGUMENT,
            "Invalid document reference. Document references must have an even number of segments, but " +
              e.canonicalString() +
              " has " +
              e.length,
          );
        return new t(n, new lf(n._delegate, r, new Ni(e)));
      }),
      (t.eu = function (e, n, r) {
        return new t(n, new lf(n._delegate, r, e));
      }),
      Object.defineProperty(t.prototype, "id", {
        get: function () {
          return this._delegate.id;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, "parent", {
        get: function () {
          return new td(this.firestore, this._delegate.parent);
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, "path", {
        get: function () {
          return this._delegate.path;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.collection = function (t) {
        try {
          return new td(this.firestore, df(this._delegate, t));
        } catch (t) {
          throw Hp(t, "collection()", "DocumentReference.collection()");
        }
      }),
      (t.prototype.isEqual = function (t) {
        return (t = (0, s.m9)(t)) instanceof lf && gf(this._delegate, t);
      }),
      (t.prototype.set = function (t, e) {
        e = ef("DocumentReference.set", e);
        try {
          return e ? Rp(this._delegate, t, e) : Rp(this._delegate, t);
        } catch (t) {
          throw Hp(t, "setDoc()", "DocumentReference.set()");
        }
      }),
      (t.prototype.update = function (t, e) {
        for (var n = [], r = 2; r < arguments.length; r++)
          n[r - 2] = arguments[r];
        try {
          return 1 === arguments.length
            ? Dp(this._delegate, t)
            : Dp.apply(void 0, (0, o.ev)([this._delegate, t, e], n));
        } catch (t) {
          throw Hp(t, "updateDoc()", "DocumentReference.update()");
        }
      }),
      (t.prototype.delete = function () {
        return Op(af((t = this._delegate).firestore, _f), [
          new us(t._key, Jo.none()),
        ]);
        var t;
      }),
      (t.prototype.onSnapshot = function () {
        for (var t = this, e = [], n = 0; n < arguments.length; n++)
          e[n] = arguments[n];
        var r = Jp(e),
          i = Qp(e, function (e) {
            return new Wp(
              t.firestore,
              new sp(
                t.firestore._delegate,
                t._userDataWriter,
                e._key,
                e._document,
                e.metadata,
                t._delegate.converter,
              ),
            );
          });
        return Cp(this._delegate, r, i);
      }),
      (t.prototype.get = function (t) {
        var e = this;
        return (
          "cache" === (null == t ? void 0 : t.source)
            ? (function (t) {
                t = af(t, lf);
                var e = af(t.firestore, _f),
                  n = Tf(e),
                  r = new Np(e);
                return (function (t, e) {
                  var n = this,
                    r = new Va();
                  return (
                    t.asyncQueue.enqueueAndForget(function () {
                      return (0, o.mG)(n, void 0, void 0, function () {
                        var n;
                        return (0, o.Jh)(this, function (i) {
                          switch (i.label) {
                            case 0:
                              return (
                                (n = function (t, e, n) {
                                  return (0, o.mG)(
                                    this,
                                    void 0,
                                    void 0,
                                    function () {
                                      var r, i;
                                      return (0, o.Jh)(this, function (o) {
                                        switch (o.label) {
                                          case 0:
                                            return (
                                              o.trys.push([0, 2, , 3]),
                                              [
                                                4,
                                                (function (t, e) {
                                                  var n = ei(t);
                                                  return n.persistence.runTransaction(
                                                    "read document",
                                                    "readonly",
                                                    function (t) {
                                                      return n.Mn.mn(t, e);
                                                    },
                                                  );
                                                })(t, e),
                                              ]
                                            );
                                          case 1:
                                            return (
                                              (i = o.sent()).isFoundDocument()
                                                ? n.resolve(i)
                                                : i.isNoDocument()
                                                  ? n.resolve(null)
                                                  : n.reject(
                                                      new Hr(
                                                        Kr.UNAVAILABLE,
                                                        "Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)",
                                                      ),
                                                    ),
                                              [3, 3]
                                            );
                                          case 2:
                                            return (
                                              (r = o.sent()),
                                              (i = Nh(
                                                r,
                                                "Failed to get document '" +
                                                  e +
                                                  " from cache",
                                              )),
                                              n.reject(i),
                                              [3, 3]
                                            );
                                          case 3:
                                            return [2];
                                        }
                                      });
                                    },
                                  );
                                }),
                                [4, Vl(t)]
                              );
                            case 1:
                              return [2, n.apply(void 0, [i.sent(), e, r])];
                          }
                        });
                      });
                    }),
                    r.promise
                  );
                })(n, t._key).then(function (n) {
                  return new sp(
                    e,
                    r,
                    t._key,
                    n,
                    new op(null !== n && n.hasLocalMutations, !0),
                    t.converter,
                  );
                });
              })(this._delegate)
            : "server" === (null == t ? void 0 : t.source)
              ? (function (t) {
                  t = af(t, lf);
                  var e = af(t.firestore, _f);
                  return Gl(Tf(e), t._key, { source: "server" }).then(
                    function (n) {
                      return xp(e, t, n);
                    },
                  );
                })(this._delegate)
              : (function (t) {
                  t = af(t, lf);
                  var e = af(t.firestore, _f);
                  return Gl(Tf(e), t._key).then(function (n) {
                    return xp(e, t, n);
                  });
                })(this._delegate)
        ).then(function (t) {
          return new Wp(
            e.firestore,
            new sp(
              e.firestore._delegate,
              e._userDataWriter,
              t._key,
              t._document,
              t.metadata,
              e._delegate.converter,
            ),
          );
        });
      }),
      (t.prototype.withConverter = function (e) {
        return new t(
          this.firestore,
          e
            ? this._delegate.withConverter(zp.nu(this.firestore, e))
            : this._delegate.withConverter(null),
        );
      }),
      t
    );
  })();
  function Hp(t, e, n) {
    return ((t.message = t.message.replace(e, n)), t);
  }
  function Jp(t) {
    for (var e = 0, n = t; e < n.length; e++) {
      var r = n[e];
      if ("object" == (0, i.Z)(r) && !bf(r)) return r;
    }
    return {};
  }
  function Qp(t, e) {
    var n, r, i;
    return {
      next: function (t) {
        i.next && i.next(e(t));
      },
      error:
        null ===
          (n = (i = bf(t[0])
            ? t[0]
            : bf(t[1])
              ? t[1]
              : "function" == typeof t[0]
                ? { next: t[0], error: t[1], complete: t[2] }
                : { next: t[1], error: t[2], complete: t[3] }).error) ||
        void 0 === n
          ? void 0
          : n.bind(i),
      complete: null === (r = i.complete) || void 0 === r ? void 0 : r.bind(i),
    };
  }
  var Wp = (function () {
      function t(t, e) {
        ((this._firestore = t), (this._delegate = e));
      }
      return (
        Object.defineProperty(t.prototype, "ref", {
          get: function () {
            return new Kp(this._firestore, this._delegate.ref);
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "id", {
          get: function () {
            return this._delegate.id;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "metadata", {
          get: function () {
            return this._delegate.metadata;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "exists", {
          get: function () {
            return this._delegate.exists();
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.data = function (t) {
          return this._delegate.data(t);
        }),
        (t.prototype.get = function (t, e) {
          return this._delegate.get(t, e);
        }),
        (t.prototype.isEqual = function (t) {
          return hp(this._delegate, t._delegate);
        }),
        t
      );
    })(),
    Zp = (function (t) {
      function e() {
        return (null !== t && t.apply(this, arguments)) || this;
      }
      return (
        (0, o.ZT)(e, t),
        (e.prototype.data = function (t) {
          return this._delegate.data(t);
        }),
        e
      );
    })(Wp),
    Xp = (function () {
      function t(t, e) {
        ((this.firestore = t),
          (this._delegate = e),
          (this._userDataWriter = new qp(t)));
      }
      return (
        (t.prototype.where = function (e, n, r) {
          try {
            return new t(
              this.firestore,
              pp(
                this._delegate,
                (function (t, e, n) {
                  var r = e,
                    i = ip("where", t);
                  return new dp(i, r, n);
                })(e, n, r),
              ),
            );
          } catch (e) {
            throw Hp(e, /(orderBy|where)\(\)/, "Query.$1()");
          }
        }),
        (t.prototype.orderBy = function (e, n) {
          try {
            return new t(
              this.firestore,
              pp(
                this._delegate,
                (function (t, e) {
                  void 0 === e && (e = "asc");
                  var n = e,
                    r = ip("orderBy", t);
                  return new vp(r, n);
                })(e, n),
              ),
            );
          } catch (e) {
            throw Hp(e, /(orderBy|where)\(\)/, "Query.$1()");
          }
        }),
        (t.prototype.limit = function (e) {
          try {
            return new t(
              this.firestore,
              pp(
                this._delegate,
                (function (t) {
                  return (uf("limit", t), new gp("limit", t, "F"));
                })(e),
              ),
            );
          } catch (e) {
            throw Hp(e, "limit()", "Query.limit()");
          }
        }),
        (t.prototype.limitToLast = function (e) {
          try {
            return new t(
              this.firestore,
              pp(
                this._delegate,
                (function (t) {
                  return (uf("limitToLast", t), new gp("limitToLast", t, "L"));
                })(e),
              ),
            );
          } catch (e) {
            throw Hp(e, "limitToLast()", "Query.limitToLast()");
          }
        }),
        (t.prototype.startAt = function () {
          for (var e = [], n = 0; n < arguments.length; n++)
            e[n] = arguments[n];
          try {
            return new t(
              this.firestore,
              pp(
                this._delegate,
                function () {
                  for (var t = [], e = 0; e < arguments.length; e++)
                    t[e] = arguments[e];
                  return new yp("startAt", t, !0);
                }.apply(void 0, e),
              ),
            );
          } catch (e) {
            throw Hp(e, "startAt()", "Query.startAt()");
          }
        }),
        (t.prototype.startAfter = function () {
          for (var e = [], n = 0; n < arguments.length; n++)
            e[n] = arguments[n];
          try {
            return new t(
              this.firestore,
              pp(
                this._delegate,
                function () {
                  for (var t = [], e = 0; e < arguments.length; e++)
                    t[e] = arguments[e];
                  return new yp("startAfter", t, !1);
                }.apply(void 0, e),
              ),
            );
          } catch (e) {
            throw Hp(e, "startAfter()", "Query.startAfter()");
          }
        }),
        (t.prototype.endBefore = function () {
          for (var e = [], n = 0; n < arguments.length; n++)
            e[n] = arguments[n];
          try {
            return new t(
              this.firestore,
              pp(
                this._delegate,
                function () {
                  for (var t = [], e = 0; e < arguments.length; e++)
                    t[e] = arguments[e];
                  return new mp("endBefore", t, !0);
                }.apply(void 0, e),
              ),
            );
          } catch (e) {
            throw Hp(e, "endBefore()", "Query.endBefore()");
          }
        }),
        (t.prototype.endAt = function () {
          for (var e = [], n = 0; n < arguments.length; n++)
            e[n] = arguments[n];
          try {
            return new t(
              this.firestore,
              pp(
                this._delegate,
                function () {
                  for (var t = [], e = 0; e < arguments.length; e++)
                    t[e] = arguments[e];
                  return new mp("endAt", t, !1);
                }.apply(void 0, e),
              ),
            );
          } catch (e) {
            throw Hp(e, "endAt()", "Query.endAt()");
          }
        }),
        (t.prototype.isEqual = function (t) {
          return yf(this._delegate, t._delegate);
        }),
        (t.prototype.get = function (t) {
          var e = this;
          return (
            "cache" === (null == t ? void 0 : t.source)
              ? (function (t) {
                  t = af(t, ff);
                  var e = af(t.firestore, _f),
                    n = Tf(e),
                    r = new Np(e);
                  return (function (t, e) {
                    var n = this,
                      r = new Va();
                    return (
                      t.asyncQueue.enqueueAndForget(function () {
                        return (0, o.mG)(n, void 0, void 0, function () {
                          var n;
                          return (0, o.Jh)(this, function (i) {
                            switch (i.label) {
                              case 0:
                                return (
                                  (n = function (t, e, n) {
                                    return (0, o.mG)(
                                      this,
                                      void 0,
                                      void 0,
                                      function () {
                                        var r, i, s, a, u;
                                        return (0, o.Jh)(this, function (o) {
                                          switch (o.label) {
                                            case 0:
                                              return (
                                                o.trys.push([0, 2, , 3]),
                                                [4, dc(t, e, !0)]
                                              );
                                            case 1:
                                              return (
                                                (u = o.sent()),
                                                (r = new Kh(e, u.Bn)),
                                                (i = r._o(u.documents)),
                                                (s = r.applyChanges(i, !1)),
                                                n.resolve(s.snapshot),
                                                [3, 3]
                                              );
                                            case 2:
                                              return (
                                                (a = o.sent()),
                                                (u = Nh(
                                                  a,
                                                  "Failed to execute query '" +
                                                    e +
                                                    " against cache",
                                                )),
                                                n.reject(u),
                                                [3, 3]
                                              );
                                            case 3:
                                              return [2];
                                          }
                                        });
                                      },
                                    );
                                  }),
                                  [4, Vl(t)]
                                );
                              case 1:
                                return [2, n.apply(void 0, [i.sent(), e, r])];
                            }
                          });
                        });
                      }),
                      r.promise
                    );
                  })(n, t._query).then(function (n) {
                    return new up(e, r, t, n);
                  });
                })(this._delegate)
              : "server" === (null == t ? void 0 : t.source)
                ? (function (t) {
                    t = af(t, ff);
                    var e = af(t.firestore, _f),
                      n = Tf(e),
                      r = new Np(e);
                    return zl(n, t._query, { source: "server" }).then(
                      function (n) {
                        return new up(e, r, t, n);
                      },
                    );
                  })(this._delegate)
                : (function (t) {
                    t = af(t, ff);
                    var e = af(t.firestore, _f),
                      n = Tf(e),
                      r = new Np(e);
                    return (
                      lp(t._query),
                      zl(n, t._query).then(function (n) {
                        return new up(e, r, t, n);
                      })
                    );
                  })(this._delegate)
          ).then(function (t) {
            return new $p(
              e.firestore,
              new up(
                e.firestore._delegate,
                e._userDataWriter,
                e._delegate,
                t._snapshot,
              ),
            );
          });
        }),
        (t.prototype.onSnapshot = function () {
          for (var t = this, e = [], n = 0; n < arguments.length; n++)
            e[n] = arguments[n];
          var r = Jp(e),
            i = Qp(e, function (e) {
              return new $p(
                t.firestore,
                new up(
                  t.firestore._delegate,
                  t._userDataWriter,
                  t._delegate,
                  e._snapshot,
                ),
              );
            });
          return Cp(this._delegate, r, i);
        }),
        (t.prototype.withConverter = function (e) {
          return new t(
            this.firestore,
            e
              ? this._delegate.withConverter(zp.nu(this.firestore, e))
              : this._delegate.withConverter(null),
          );
        }),
        t
      );
    })(),
    Yp = (function () {
      function t(t, e) {
        ((this._firestore = t), (this._delegate = e));
      }
      return (
        Object.defineProperty(t.prototype, "type", {
          get: function () {
            return this._delegate.type;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "doc", {
          get: function () {
            return new Zp(this._firestore, this._delegate.doc);
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "oldIndex", {
          get: function () {
            return this._delegate.oldIndex;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "newIndex", {
          get: function () {
            return this._delegate.newIndex;
          },
          enumerable: !1,
          configurable: !0,
        }),
        t
      );
    })(),
    $p = (function () {
      function t(t, e) {
        ((this._firestore = t), (this._delegate = e));
      }
      return (
        Object.defineProperty(t.prototype, "query", {
          get: function () {
            return new Xp(this._firestore, this._delegate.query);
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "metadata", {
          get: function () {
            return this._delegate.metadata;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "size", {
          get: function () {
            return this._delegate.size;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "empty", {
          get: function () {
            return this._delegate.empty;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "docs", {
          get: function () {
            var t = this;
            return this._delegate.docs.map(function (e) {
              return new Zp(t._firestore, e);
            });
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.docChanges = function (t) {
          var e = this;
          return this._delegate.docChanges(t).map(function (t) {
            return new Yp(e._firestore, t);
          });
        }),
        (t.prototype.forEach = function (t, e) {
          var n = this;
          this._delegate.forEach(function (r) {
            t.call(e, new Zp(n._firestore, r));
          });
        }),
        (t.prototype.isEqual = function (t) {
          return hp(this._delegate, t._delegate);
        }),
        t
      );
    })(),
    td = (function (t) {
      function e(e, n) {
        var r = this;
        return (
          ((r = t.call(this, e, n) || this).firestore = e),
          (r._delegate = n),
          r
        );
      }
      return (
        (0, o.ZT)(e, t),
        Object.defineProperty(e.prototype, "id", {
          get: function () {
            return this._delegate.id;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "path", {
          get: function () {
            return this._delegate.path;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "parent", {
          get: function () {
            var t = this._delegate.parent;
            return t ? new Kp(this.firestore, t) : null;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (e.prototype.doc = function (t) {
          try {
            return new Kp(
              this.firestore,
              void 0 === t ? vf(this._delegate) : vf(this._delegate, t),
            );
          } catch (t) {
            throw Hp(t, "doc()", "CollectionReference.doc()");
          }
        }),
        (e.prototype.add = function (t) {
          var e = this;
          return (function (t, e) {
            var n = af(t.firestore, _f),
              r = vf(t),
              i = Ip(t.converter, e);
            return Op(n, [
              Ff(
                Mf(t.firestore),
                "addDoc",
                r._key,
                i,
                null !== t.converter,
                {},
              ).toMutation(r._key, Jo.exists(!1)),
            ]).then(function () {
              return r;
            });
          })(this._delegate, t).then(function (t) {
            return new Kp(e.firestore, t);
          });
        }),
        (e.prototype.isEqual = function (t) {
          return gf(this._delegate, t._delegate);
        }),
        (e.prototype.withConverter = function (t) {
          return new e(
            this.firestore,
            t
              ? this._delegate.withConverter(zp.nu(this.firestore, t))
              : this._delegate.withConverter(null),
          );
        }),
        e
      );
    })(Xp);
  function ed(t) {
    return af(t, lf);
  }
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ var nd = (function () {
      function t() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        this._delegate = new (Af.bind.apply(Af, (0, o.ev)([void 0], t)))();
      }
      return (
        (t.documentId = function () {
          return new t(vi.keyField().canonicalString());
        }),
        (t.prototype.isEqual = function (t) {
          return (
            (t = (0, s.m9)(t)) instanceof Af &&
            this._delegate._internalPath.isEqual(t._internalPath)
          );
        }),
        t
      );
    })(),
    rd = (function () {
      function t(t) {
        this._delegate = t;
      }
      return (
        (t.serverTimestamp = function () {
          var e = new qf("serverTimestamp");
          return ((e._methodName = "FieldValue.serverTimestamp"), new t(e));
        }),
        (t.delete = function () {
          var e = new Uf("deleteField");
          return ((e._methodName = "FieldValue.delete"), new t(e));
        }),
        (t.arrayUnion = function () {
          for (var e = [], n = 0; n < arguments.length; n++)
            e[n] = arguments[n];
          var r = function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e];
            return new jf("arrayUnion", t);
          }.apply(void 0, e);
          return ((r._methodName = "FieldValue.arrayUnion"), new t(r));
        }),
        (t.arrayRemove = function () {
          for (var e = [], n = 0; n < arguments.length; n++)
            e[n] = arguments[n];
          var r = function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e];
            return new Bf("arrayRemove", t);
          }.apply(void 0, e);
          return ((r._methodName = "FieldValue.arrayRemove"), new t(r));
        }),
        (t.increment = function (e) {
          var n = (function (t) {
            return new Gf("increment", t);
          })(e);
          return ((n._methodName = "FieldValue.increment"), new t(n));
        }),
        (t.prototype.isEqual = function (t) {
          return this._delegate.isEqual(t._delegate);
        }),
        t
      );
    })();
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ var id = n(95924),
    od = {
      Firestore: Vp,
      GeoPoint: Rf,
      Timestamp: ai,
      Blob: Fp,
      Transaction: Bp,
      WriteBatch: Gp,
      DocumentReference: Kp,
      DocumentSnapshot: Wp,
      Query: Xp,
      QueryDocumentSnapshot: Zp,
      QuerySnapshot: $p,
      CollectionReference: td,
      FieldPath: nd,
      FieldValue: rd,
      setLogLevel: jp,
      CACHE_SIZE_UNLIMITED: wf,
    };
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  function sd(t) {
    (!(function (t, e) {
      t.INTERNAL.registerComponent(
        new id.wA(
          "firestore",
          function (t) {
            var n = t.getProvider("app").getImmediate();
            return e(n, t.getProvider("auth-internal"));
          },
          "PUBLIC",
        ).setServiceProps(Object.assign({}, od)),
      );
    })(t, function (t, e) {
      return new Vp(t, new _f(t, e), new Up());
    }),
      t.registerVersion("@firebase/firestore", "2.4.1"));
  }
  sd(r.Z);
};
