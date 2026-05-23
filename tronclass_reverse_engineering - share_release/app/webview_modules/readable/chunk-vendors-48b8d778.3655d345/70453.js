// Source: decompiled/web-modules-acorn/chunk-vendors-48b8d778.3655d345/70453.js
// Webpack module id: 70453
const __webpack_module_70453 = function (e, t, n) {
  "use strict";
  n.d(t, {
    dT: function () {
      return Er;
    },
  });
  var r = n(3336),
    u = n(89584),
    a = n(82482),
    i = n(50124),
    o = n(95082),
    c = n(48534),
    s =
      (n(73210),
      n(57327),
      n(41539),
      n(26699),
      n(82526),
      n(41817),
      n(21703),
      n(96647),
      n(78783),
      n(33948),
      n(92222),
      n(47941),
      n(47042),
      n(54747),
      n(66347)),
    l = n(56084),
    f =
      (n(4129),
      n(51532),
      n(32023),
      n(21249),
      n(2707),
      n(69720),
      n(54678),
      n(74916),
      n(77601),
      n(23157),
      n(15306),
      n(70189),
      n(57658),
      n(4723),
      n(23123),
      n(9653),
      n(69826),
      n(91038),
      n(82772),
      n(9494),
      n(61874),
      n(65069),
      n(91058),
      n(27852),
      n(24603),
      n(28450),
      n(88386),
      n(39714),
      n(17922),
      n(60285),
      n(41637),
      n(64765),
      n(76373),
      n(38862),
      n(79841),
      n(43290),
      n(75505),
      n(87714),
      n(82801),
      n(1174),
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
      n(25108)),
    d = {
      image: new Map(),
      background: new Map(),
      resource: new Map(),
      defaultStyle: new Map(),
      baseStyle: new Map(),
      computedStyle: new WeakMap(),
      font: new Set(),
      session: {
        styleMap: new Map(),
        styleCache: new WeakMap(),
        nodeMap: new Map(),
      },
    };
  function p() {
    var e =
      arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "soft";
    switch (
      ((d.session.__counterEpoch = (d.session.__counterEpoch || 0) + 1), e)
    ) {
      case "auto":
        return (
          (d.session.styleMap = new Map()),
          void (d.session.nodeMap = new Map())
        );
      case "soft":
        return (
          (d.session.styleMap = new Map()),
          (d.session.nodeMap = new Map()),
          void (d.session.styleCache = new WeakMap())
        );
      case "full":
        return;
      case "disabled":
        return (
          (d.session.styleMap = new Map()),
          (d.session.nodeMap = new Map()),
          (d.session.styleCache = new WeakMap()),
          (d.computedStyle = new WeakMap()),
          (d.baseStyle = new Map()),
          (d.defaultStyle = new Map()),
          (d.image = new Map()),
          (d.background = new Map()),
          (d.resource = new Map()),
          void (d.font = new Set())
        );
      default:
        return (
          (d.session.styleMap = new Map()),
          (d.session.nodeMap = new Map()),
          void (d.session.styleCache = new WeakMap())
        );
    }
  }
  function h(e) {
    var t = e.match(/url\((['"]?)(.*?)(\1)\)/);
    if (!t) return null;
    var n = t[2].trim();
    return n.startsWith("#") ? null : n;
  }
  function D(e) {
    if (!e || "none" === e) return "";
    var t = e.replace(/translate[XY]?\([^)]*\)/g, "");
    return (
      (t = t.replace(/matrix\(([^)]+)\)/g, function (e, t) {
        var n = t.split(",").map(function (e) {
          return e.trim();
        });
        return 6 !== n.length
          ? "matrix(".concat(t, ")")
          : ((n[4] = "0"), (n[5] = "0"), "matrix(".concat(n.join(", "), ")"));
      })),
      (t = t.replace(/matrix3d\(([^)]+)\)/g, function (e, t) {
        var n = t.split(",").map(function (e) {
          return e.trim();
        });
        return 16 !== n.length
          ? "matrix3d(".concat(t, ")")
          : ((n[12] = "0"),
            (n[13] = "0"),
            "matrix3d(".concat(n.join(", "), ")"));
      })),
      t.trim().replace(/\s{2,}/g, " ")
    );
  }
  function m(e) {
    if (/%[0-9A-Fa-f]{2}/.test(e)) return e;
    try {
      return encodeURI(e);
    } catch (t) {
      return e;
    }
  }
  function v() {
    var e =
        arguments.length > 0 && void 0 !== arguments[0]
          ? arguments[0]
          : "[snapDOM]",
      t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      n = t.ttlMs,
      r = void 0 === n ? 3e5 : n,
      u = t.maxEntries,
      a = void 0 === u ? 12 : u,
      i = new Map(),
      o = 0;
    function c(t, n, u) {
      if (!(o >= a)) {
        var c = Date.now();
        (i.get(n) || 0) > c ||
          (i.set(n, c + r),
          o++,
          "warn" === t && f && f.warn
            ? f.warn("".concat(e, " ").concat(u))
            : f && f.error && f.error("".concat(e, " ").concat(u)));
      }
    }
    return {
      warnOnce: function (e, t) {
        c("warn", e, t);
      },
      errorOnce: function (e, t) {
        c("error", e, t);
      },
      reset: function () {
        (i.clear(), (o = 0));
      },
    };
  }
  var g = v("[snapDOM]", { ttlMs: 18e4, maxEntries: 10 }),
    y = new Map(),
    b = new Map();
  function F(e) {
    return /^data:|^blob:|^about:blank$/i.test(e);
  }
  function E(e, t) {
    try {
      var n =
          ("undefined" === typeof location ? "undefined" : (0, r.Z)(location)) <
            "u" && location.href
            ? location.href
            : "http://localhost/",
        u = t.includes("{url}") ? t.split("{url}")[0] : t,
        a = new URL(u || ".", n),
        i = new URL(e, n);
      if (i.origin === a.origin) return !0;
      var o = i.searchParams;
      if (o && (o.has("url") || o.has("target"))) return !0;
    } catch (c) {}
    return !1;
  }
  function x(e, t) {
    if (!t || F(e) || E(e, t)) return !1;
    try {
      var n =
          ("undefined" === typeof location ? "undefined" : (0, r.Z)(location)) <
            "u" && location.href
            ? location.href
            : "http://localhost/",
        u = new URL(e, n);
      return (
        !(
          ("undefined" === typeof location ? "undefined" : (0, r.Z)(location)) <
          "u"
        ) || u.origin !== location.origin
      );
    } catch (a) {
      return !!t;
    }
  }
  function C(e, t) {
    if (!t) return e;
    if (t.includes("{url}"))
      return t
        .replace("{urlRaw}", m(e))
        .replace("{url}", encodeURIComponent(e));
    if (/[?&]url=?$/.test(t)) return "".concat(t).concat(encodeURIComponent(e));
    if (t.endsWith("?"))
      return "".concat(t, "url=").concat(encodeURIComponent(e));
    if (t.endsWith("/")) return "".concat(t).concat(m(e));
    var n = t.includes("?") ? "&" : "?";
    return "".concat(t).concat(n, "url=").concat(encodeURIComponent(e));
  }
  function w(e) {
    return new Promise(function (t, n) {
      var r = new FileReader();
      ((r.onload = function () {
        return t(String(r.result || ""));
      }),
        (r.onerror = function () {
          return n(new Error("read_failed"));
        }),
        r.readAsDataURL(e));
    });
  }
  function A(e, t) {
    var n, r;
    return [
      t.as || "blob",
      null !== (n = t.timeout) && void 0 !== n ? n : 3e3,
      t.useProxy || "",
      null !== (r = t.errorTTL) && void 0 !== r ? r : 8e3,
      e,
    ].join("|");
  }
  function k(e) {
    return S.apply(this, arguments);
  }
  function S() {
    return (
      (S = (0, c.Z)(
        (0, i.Z)().mark(function e(t) {
          var n,
            a,
            s,
            f,
            d,
            p,
            h,
            D,
            m,
            v,
            F,
            E,
            k,
            S,
            B,
            N,
            M,
            Z,
            T,
            O,
            I,
            R,
            L,
            P,
            _,
            j,
            U,
            W,
            q,
            H,
            z,
            V,
            $ = arguments;
          return (0, i.Z)().wrap(
            function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (
                      ((f = $.length > 1 && void 0 !== $[1] ? $[1] : {}),
                      (d = null !== (n = f.as) && void 0 !== n ? n : "blob"),
                      (p = null !== (a = f.timeout) && void 0 !== a ? a : 3e3),
                      (h = f.useProxy || ""),
                      (D = null !== (s = f.errorTTL) && void 0 !== s ? s : 8e3),
                      (m = f.headers || {}),
                      (v = !!f.silent),
                      !/^data:/i.test(t))
                    ) {
                      e.next = 15;
                      break;
                    }
                    if (((e.prev = 3), "text" !== d)) {
                      e.next = 6;
                      break;
                    }
                    return e.abrupt("return", {
                      ok: !0,
                      data: String(t),
                      status: 200,
                      url: t,
                      fromCache: !1,
                    });
                  case 6:
                    if ("dataURL" !== d) {
                      e.next = 8;
                      break;
                    }
                    return e.abrupt("return", {
                      ok: !0,
                      data: String(t),
                      status: 200,
                      url: t,
                      fromCache: !1,
                      mime: String(t).slice(5).split(";")[0] || "",
                    });
                  case 8:
                    return (
                      (F = String(t).match(/^data:([^,]*),(.*)$/) || []),
                      (E = (0, l.Z)(F, 3)),
                      (k = E[1]),
                      (S = void 0 === k ? "" : k),
                      (B = E[2]),
                      (N = void 0 === B ? "" : B),
                      (M = /;base64/i.test(S)
                        ? atob(N)
                        : decodeURIComponent(N)),
                      (Z = new Uint8Array(
                        (0, u.Z)(M).map(function (e) {
                          return e.charCodeAt(0);
                        }),
                      )),
                      (T = new Blob([Z], {
                        type: (S || "").split(";")[0] || "",
                      })),
                      e.abrupt("return", {
                        ok: !0,
                        data: T,
                        status: 200,
                        url: t,
                        fromCache: !1,
                        mime: T.type || "",
                      })
                    );
                  case 12:
                    return (
                      (e.prev = 12),
                      (e.t0 = e["catch"](3)),
                      e.abrupt("return", {
                        ok: !1,
                        data: null,
                        status: 0,
                        url: t,
                        fromCache: !1,
                        reason: "special_url_error",
                      })
                    );
                  case 15:
                    if (!/^blob:/i.test(t)) {
                      e.next = 58;
                      break;
                    }
                    return ((e.prev = 16), (e.next = 19), fetch(t));
                  case 19:
                    if (((O = e.sent), O.ok)) {
                      e.next = 22;
                      break;
                    }
                    return e.abrupt("return", {
                      ok: !1,
                      data: null,
                      status: O.status,
                      url: t,
                      fromCache: !1,
                      reason: "http_error",
                    });
                  case 22:
                    return ((e.next = 24), O.blob());
                  case 24:
                    if (
                      ((I = e.sent),
                      (R = I.type || O.headers.get("content-type") || ""),
                      "dataURL" !== d)
                    ) {
                      e.next = 38;
                      break;
                    }
                    return ((e.t2 = !0), (e.next = 30), w(I));
                  case 30:
                    ((e.t3 = e.sent),
                      (e.t4 = O.status),
                      (e.t5 = t),
                      (e.t6 = !1),
                      (e.t7 = R),
                      (e.t1 = {
                        ok: e.t2,
                        data: e.t3,
                        status: e.t4,
                        url: e.t5,
                        fromCache: e.t6,
                        mime: e.t7,
                      }),
                      (e.next = 52));
                    break;
                  case 38:
                    if ("text" !== d) {
                      e.next = 50;
                      break;
                    }
                    return ((e.t9 = !0), (e.next = 42), I.text());
                  case 42:
                    ((e.t10 = e.sent),
                      (e.t11 = O.status),
                      (e.t12 = t),
                      (e.t13 = !1),
                      (e.t14 = R),
                      (e.t8 = {
                        ok: e.t9,
                        data: e.t10,
                        status: e.t11,
                        url: e.t12,
                        fromCache: e.t13,
                        mime: e.t14,
                      }),
                      (e.next = 51));
                    break;
                  case 50:
                    e.t8 = {
                      ok: !0,
                      data: I,
                      status: O.status,
                      url: t,
                      fromCache: !1,
                      mime: R,
                    };
                  case 51:
                    e.t1 = e.t8;
                  case 52:
                    return e.abrupt("return", e.t1);
                  case 55:
                    return (
                      (e.prev = 55),
                      (e.t15 = e["catch"](16)),
                      e.abrupt("return", {
                        ok: !1,
                        data: null,
                        status: 0,
                        url: t,
                        fromCache: !1,
                        reason: "network",
                      })
                    );
                  case 58:
                    if (!/^about:blank$/i.test(t)) {
                      e.next = 60;
                      break;
                    }
                    return e.abrupt(
                      "return",
                      "dataURL" === d
                        ? {
                            ok: !0,
                            data: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg==",
                            status: 200,
                            url: t,
                            fromCache: !1,
                            mime: "image/png",
                          }
                        : {
                            ok: !0,
                            data: "text" === d ? "" : new Blob([]),
                            status: 200,
                            url: t,
                            fromCache: !1,
                          },
                    );
                  case 60:
                    if (
                      ((L = A(t, {
                        as: d,
                        timeout: p,
                        useProxy: h,
                        errorTTL: D,
                      })),
                      (P = b.get(L)),
                      !(P && P.until > Date.now()))
                    ) {
                      e.next = 63;
                      break;
                    }
                    return e.abrupt(
                      "return",
                      (0, o.Z)((0, o.Z)({}, P.result), {}, { fromCache: !0 }),
                    );
                  case 63:
                    if ((P && b.delete(L), (_ = y.get(L)), !_)) {
                      e.next = 67;
                      break;
                    }
                    return e.abrupt("return", _);
                  case 67:
                    if (((j = x(t, h) ? C(t, h) : t), (U = f.credentials), !U))
                      try {
                        ((W =
                          ("undefined" === typeof location
                            ? "undefined"
                            : (0, r.Z)(location)) < "u" && location.href
                            ? location.href
                            : "http://localhost/"),
                          (q = new URL(t, W)),
                          (U =
                            ("undefined" === typeof location
                              ? "undefined"
                              : (0, r.Z)(location)) < "u" &&
                            q.origin === location.origin
                              ? "include"
                              : "omit"));
                      } catch (X) {
                        U = "omit";
                      }
                    return (
                      (H = new AbortController()),
                      (z = setTimeout(function () {
                        return H.abort("timeout");
                      }, p)),
                      (V = (0, c.Z)(
                        (0, i.Z)().mark(function e() {
                          var n, u, a, o, c, s, l, h, F, E, x, C, A;
                          return (0, i.Z)().wrap(
                            function (e) {
                              while (1)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (
                                      (e.prev = 0),
                                      (e.next = 3),
                                      fetch(j, {
                                        signal: H.signal,
                                        credentials: U,
                                        headers: m,
                                      })
                                    );
                                  case 3:
                                    if (((n = e.sent), n.ok)) {
                                      e.next = 8;
                                      break;
                                    }
                                    return (
                                      (u = {
                                        ok: !1,
                                        data: null,
                                        status: n.status,
                                        url: j,
                                        fromCache: !1,
                                        reason: "http_error",
                                      }),
                                      D > 0 &&
                                        b.set(L, {
                                          until: Date.now() + D,
                                          result: u,
                                        }),
                                      v ||
                                        ((c = ""
                                          .concat(n.status, " ")
                                          .concat(n.statusText || "")
                                          .trim()),
                                        g.warnOnce(
                                          "http:"
                                            .concat(n.status, ":")
                                            .concat(d, ":")
                                            .concat(
                                              new URL(
                                                t,
                                                null !==
                                                  (a =
                                                    null === (o = location) ||
                                                    void 0 === o
                                                      ? void 0
                                                      : o.href) && void 0 !== a
                                                  ? a
                                                  : "http://localhost/",
                                              ).origin,
                                            ),
                                          "HTTP error "
                                            .concat(c, " while fetching ")
                                            .concat(d, " ")
                                            .concat(t),
                                        )),
                                      e.abrupt(
                                        "return",
                                        (f.onError && f.onError(u), u),
                                      )
                                    );
                                  case 8:
                                    if ("text" !== d) {
                                      e.next = 17;
                                      break;
                                    }
                                    return (
                                      (e.t0 = !0),
                                      (e.next = 12),
                                      n.text()
                                    );
                                  case 12:
                                    return (
                                      (e.t1 = e.sent),
                                      (e.t2 = n.status),
                                      (e.t3 = j),
                                      (e.t4 = !1),
                                      e.abrupt("return", {
                                        ok: e.t0,
                                        data: e.t1,
                                        status: e.t2,
                                        url: e.t3,
                                        fromCache: e.t4,
                                      })
                                    );
                                  case 17:
                                    return ((e.next = 19), n.blob());
                                  case 19:
                                    if (
                                      ((s = e.sent),
                                      (l =
                                        s.type ||
                                        n.headers.get("content-type") ||
                                        ""),
                                      "dataURL" !== d)
                                    ) {
                                      e.next = 33;
                                      break;
                                    }
                                    return ((e.t6 = !0), (e.next = 25), w(s));
                                  case 25:
                                    ((e.t7 = e.sent),
                                      (e.t8 = n.status),
                                      (e.t9 = j),
                                      (e.t10 = !1),
                                      (e.t11 = l),
                                      (e.t5 = {
                                        ok: e.t6,
                                        data: e.t7,
                                        status: e.t8,
                                        url: e.t9,
                                        fromCache: e.t10,
                                        mime: e.t11,
                                      }),
                                      (e.next = 34));
                                    break;
                                  case 33:
                                    e.t5 = {
                                      ok: !0,
                                      data: s,
                                      status: n.status,
                                      url: j,
                                      fromCache: !1,
                                      mime: l,
                                    };
                                  case 34:
                                    return e.abrupt("return", e.t5);
                                  case 37:
                                    return (
                                      (e.prev = 37),
                                      (e.t12 = e["catch"](0)),
                                      (h =
                                        e.t12 &&
                                        "object" == (0, r.Z)(e.t12) &&
                                        "name" in e.t12 &&
                                        "AbortError" === e.t12.name
                                          ? String(
                                              e.t12.message || "",
                                            ).includes("timeout")
                                            ? "timeout"
                                            : "abort"
                                          : "network"),
                                      (F = {
                                        ok: !1,
                                        data: null,
                                        status: 0,
                                        url: j,
                                        fromCache: !1,
                                        reason: h,
                                      }),
                                      !/^blob:/i.test(t) &&
                                        D > 0 &&
                                        b.set(L, {
                                          until: Date.now() + D,
                                          result: F,
                                        }),
                                      v ||
                                        ((C = ""
                                          .concat(h, ":")
                                          .concat(d, ":")
                                          .concat(
                                            new URL(
                                              t,
                                              null !==
                                                (E =
                                                  null === (x = location) ||
                                                  void 0 === x
                                                    ? void 0
                                                    : x.href) && void 0 !== E
                                                ? E
                                                : "http://localhost/",
                                            ).origin,
                                          )),
                                        (A =
                                          "timeout" === h
                                            ? "Timeout after "
                                                .concat(
                                                  p,
                                                  "ms. Consider increasing timeout or using a proxy for ",
                                                )
                                                .concat(t)
                                            : "abort" === h
                                              ? "Request aborted while fetching "
                                                  .concat(d, " ")
                                                  .concat(t)
                                              : "Network/CORS issue while fetching "
                                                  .concat(d, " ")
                                                  .concat(
                                                    t,
                                                    ". A proxy may be required",
                                                  )),
                                        g.errorOnce(C, A)),
                                      e.abrupt(
                                        "return",
                                        (f.onError && f.onError(F), F),
                                      )
                                    );
                                  case 42:
                                    return (
                                      (e.prev = 42),
                                      clearTimeout(z),
                                      y.delete(L),
                                      e.finish(42)
                                    );
                                  case 45:
                                  case "end":
                                    return e.stop();
                                }
                            },
                            e,
                            null,
                            [[0, 37, 42, 45]],
                          );
                        }),
                      )()),
                      e.abrupt("return", (y.set(L, V), V))
                    );
                  case 71:
                  case "end":
                    return e.stop();
                }
            },
            e,
            null,
            [
              [3, 12],
              [16, 55],
            ],
          );
        }),
      )),
      S.apply(this, arguments)
    );
  }
  function B(e) {
    return N.apply(this, arguments);
  }
  function N() {
    return (
      (N = (0, c.Z)(
        (0, i.Z)().mark(function e(t) {
          var n,
            r,
            u,
            a,
            o,
            c = arguments;
          return (0, i.Z)().wrap(
            function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (
                      ((n = c.length > 1 && void 0 !== c[1] ? c[1] : {}),
                      !/^((repeating-)?(linear|radial|conic)-gradient)\(/i.test(
                        t,
                      ) && "none" !== t.trim())
                    ) {
                      e.next = 3;
                      break;
                    }
                    return e.abrupt("return", t);
                  case 3:
                    if (((r = h(t)), r)) {
                      e.next = 6;
                      break;
                    }
                    return e.abrupt("return", t);
                  case 6:
                    if (((u = m(r)), !d.background.has(u))) {
                      e.next = 10;
                      break;
                    }
                    return (
                      (a = d.background.get(u)),
                      e.abrupt("return", a ? 'url("'.concat(a, '")') : "none")
                    );
                  case 10:
                    return (
                      (e.prev = 10),
                      (e.next = 13),
                      k(u, { as: "dataURL", useProxy: n.useProxy })
                    );
                  case 13:
                    return (
                      (o = e.sent),
                      e.abrupt(
                        "return",
                        o.ok
                          ? (d.background.set(u, o.data),
                            'url("'.concat(o.data, '")'))
                          : (d.background.set(u, null), "none"),
                      )
                    );
                  case 17:
                    return (
                      (e.prev = 17),
                      (e.t0 = e["catch"](10)),
                      e.abrupt("return", (d.background.set(u, null), "none"))
                    );
                  case 20:
                  case "end":
                    return e.stop();
                }
            },
            e,
            null,
            [[10, 17]],
          );
        }),
      )),
      N.apply(this, arguments)
    );
  }
  var M = new Set(["meta", "script", "noscript", "title", "link", "template"]),
    Z = new Set([
      "meta",
      "link",
      "style",
      "title",
      "noscript",
      "script",
      "template",
      "g",
      "defs",
      "use",
      "marker",
      "mask",
      "clipPath",
      "pattern",
      "path",
      "polygon",
      "polyline",
      "line",
      "circle",
      "ellipse",
      "rect",
      "filter",
      "lineargradient",
      "radialgradient",
      "stop",
    ]);
  function T(e) {
    if (((e = String(e).toLowerCase()), Z.has(e))) {
      var t = {};
      return (d.defaultStyle.set(e, t), t);
    }
    if (d.defaultStyle.has(e)) return d.defaultStyle.get(e);
    var n = document.getElementById("snapdom-sandbox");
    n ||
      ((n = document.createElement("div")),
      (n.id = "snapdom-sandbox"),
      n.setAttribute("data-snapdom-sandbox", "true"),
      n.setAttribute("aria-hidden", "true"),
      (n.style.position = "absolute"),
      (n.style.left = "-9999px"),
      (n.style.top = "-9999px"),
      (n.style.width = "0px"),
      (n.style.height = "0px"),
      (n.style.overflow = "hidden"),
      document.body.appendChild(n));
    var r = document.createElement(e);
    ((r.style.all = "initial"), n.appendChild(r));
    var u,
      a = getComputedStyle(r),
      i = {},
      o = (0, s.Z)(a);
    try {
      for (o.s(); !(u = o.n()).done; ) {
        var c = u.value;
        if (!L(c)) {
          var l = a.getPropertyValue(c);
          i[c] = l;
        }
      }
    } catch (f) {
      o.e(f);
    } finally {
      o.f();
    }
    return (n.removeChild(r), d.defaultStyle.set(e, i), i);
  }
  var O = /(?:^|-)(animation|transition)(?:-|$)/i,
    I =
      /^(--|view-timeline|scroll-timeline|animation-trigger|offset-|position-try|app-region|interactivity|overlay|view-transition|-webkit-locale|-webkit-user-(?:drag|modify)|-webkit-tap-highlight-color|-webkit-text-security)$/i,
    R = new Set([
      "cursor",
      "pointer-events",
      "touch-action",
      "user-select",
      "print-color-adjust",
      "speak",
      "reading-flow",
      "reading-order",
      "anchor-name",
      "anchor-scope",
      "container-name",
      "container-type",
      "timeline-scope",
    ]);
  function L(e) {
    var t = String(e).toLowerCase();
    return !!(R.has(t) || I.test(t) || O.test(t));
  }
  function P(e, t) {
    if (((t = String(t || "").toLowerCase()), Z.has(t))) return "";
    for (
      var n = [], r = T(t), u = 0, a = Object.entries(e);
      u < a.length;
      u++
    ) {
      var i = (0, l.Z)(a[u], 2),
        o = i[0],
        c = i[1];
      if (!L(o)) {
        var s = r[o];
        c && c !== s && n.push("".concat(o, ":").concat(c));
      }
    }
    return (n.sort(), n.join(";"));
  }
  function _(e) {
    var t = new Set();
    return e.nodeType !== Node.ELEMENT_NODE &&
      e.nodeType !== Node.DOCUMENT_FRAGMENT_NODE
      ? []
      : (e.tagName && t.add(e.tagName.toLowerCase()),
        "function" == typeof e.querySelectorAll &&
          e.querySelectorAll("*").forEach(function (e) {
            return t.add(e.tagName.toLowerCase());
          }),
        Array.from(t));
  }
  function j(e) {
    var t,
      n = new Map(),
      r = (0, s.Z)(e);
    try {
      for (r.s(); !(t = r.n()).done; ) {
        var u = t.value,
          a = d.defaultStyle.get(u);
        if (a) {
          var i = Object.entries(a)
            .map(function (e) {
              var t = (0, l.Z)(e, 2),
                n = t[0],
                r = t[1];
              return "".concat(n, ":").concat(r, ";");
            })
            .sort()
            .join("");
          i && (n.has(i) || n.set(i, []), n.get(i).push(u));
        }
      }
    } catch (m) {
      r.e(m);
    } finally {
      r.f();
    }
    var o,
      c = "",
      f = (0, s.Z)(n.entries());
    try {
      for (f.s(); !(o = f.n()).done; ) {
        var p = (0, l.Z)(o.value, 2),
          h = p[0],
          D = p[1];
        c += "".concat(D.join(","), " { ").concat(h, " }\n");
      }
    } catch (m) {
      f.e(m);
    } finally {
      f.f();
    }
    return c;
  }
  function U(e) {
    var t,
      n = Array.from(new Set(e.values())).filter(Boolean).sort(),
      r = new Map(),
      u = 1,
      a = (0, s.Z)(n);
    try {
      for (a.s(); !(t = a.n()).done; ) {
        var i = t.value;
        r.set(i, "c".concat(u++));
      }
    } catch (o) {
      a.e(o);
    } finally {
      a.f();
    }
    return r;
  }
  function W(e) {
    var t =
      arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
    if (!(e instanceof Element)) return window.getComputedStyle(e, t);
    var n = d.computedStyle.get(e);
    if ((n || ((n = new Map()), d.computedStyle.set(e, n)), !n.has(t))) {
      var r = window.getComputedStyle(e, t);
      n.set(t, r);
    }
    return n.get(t);
  }
  function q(e) {
    var t,
      n = {},
      r = (0, s.Z)(e);
    try {
      for (r.s(); !(t = r.n()).done; ) {
        var u = t.value;
        n[u] = e.getPropertyValue(u);
      }
    } catch (a) {
      r.e(a);
    } finally {
      r.f();
    }
    return n;
  }
  function H(e) {
    for (var t = [], n = 0, r = 0, u = 0; u < e.length; u++) {
      var a = e[u];
      ("(" === a && n++,
        ")" === a && n--,
        "," === a && 0 === n && (t.push(e.slice(r, u).trim()), (r = u + 1)));
    }
    return (t.push(e.slice(r).trim()), t);
  }
  var z = n(25108),
    V = [
      /font\s*awesome/i,
      /material\s*icons/i,
      /ionicons/i,
      /glyphicons/i,
      /feather/i,
      /bootstrap\s*icons/i,
      /remix\s*icons/i,
      /heroicons/i,
      /layui/i,
      /lucide/i,
    ],
    $ = Object.assign(
      {
        materialIconsFilled:
          "https://fonts.gstatic.com/s/materialicons/v48/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2",
        materialIconsOutlined:
          "https://fonts.gstatic.com/s/materialiconsoutlined/v110/gok-H7zzDkdnRel8-DQ6KAXJ69wP1tGnf4ZGhUcel5euIg.woff2",
        materialIconsRound:
          "https://fonts.gstatic.com/s/materialiconsround/v109/LDItaoyNOAY6Uewc665JcIzCKsKc_M9flwmPq_HTTw.woff2",
        materialIconsSharp:
          "https://fonts.gstatic.com/s/materialiconssharp/v110/oPWQ_lt5nv4pWNJpghLP75WiFR4kLh3kvmvRImcycg.woff2",
      },
      (("undefined" === typeof window ? "undefined" : (0, r.Z)(window)) < "u" &&
        window.__SNAPDOM_ICON_FONTS__) ||
        {},
    ),
    X = [];
  function G(e) {
    var t,
      n = Array.isArray(e) ? e : [e],
      r = (0, s.Z)(n);
    try {
      for (r.s(); !(t = r.n()).done; ) {
        var u = t.value;
        u instanceof RegExp
          ? X.push(u)
          : "string" == typeof u
            ? X.push(new RegExp(u, "i"))
            : z.warn("[snapdom] Ignored invalid iconFont value:", u);
      }
    } catch (a) {
      r.e(a);
    } finally {
      r.f();
    }
  }
  function Y(e) {
    var t,
      n = "string" == typeof e ? e : "",
      r = [].concat(V, X),
      u = (0, s.Z)(r);
    try {
      for (u.s(); !(t = u.n()).done; ) {
        var a = t.value;
        if (a instanceof RegExp && a.test(n)) return !0;
      }
    } catch (i) {
      u.e(i);
    } finally {
      u.f();
    }
    return !!(
      /icon/i.test(n) ||
      /glyph/i.test(n) ||
      /symbols/i.test(n) ||
      /feather/i.test(n) ||
      /fontawesome/i.test(n)
    );
  }
  function K() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
      t = String(e).toLowerCase();
    return /\bmaterial\s*icons\b/.test(t) || /\bmaterial\s*symbols\b/.test(t);
  }
  var Q = new Map();
  function J() {
    for (
      var e,
        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
        n = Object.create(null),
        r = String(t || ""),
        u = /['"]?\s*([A-Za-z]{3,4})\s*['"]?\s*([+-]?\d+(?:\.\d+)?)\s*/g;
      (e = u.exec(r));
    )
      n[e[1].toUpperCase()] = Number(e[2]);
    return n;
  }
  function ee(e, t, n) {
    return te.apply(this, arguments);
  }
  function te() {
    return (
      (te = (0, c.Z)(
        (0, i.Z)().mark(function e(t, n, r) {
          var u, a, o, c, s, l, f, d, p, h;
          return (0, i.Z)().wrap(
            function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (
                      ((a = String(t || "")),
                      (o = a.toLowerCase()),
                      (c = String(n || "").toLowerCase()),
                      !/\bmaterial\s*icons\b/.test(o) || /\bsymbols\b/.test(o))
                    ) {
                      e.next = 3;
                      break;
                    }
                    return e.abrupt("return", {
                      familyForMeasure: a,
                      familyForCanvas: a,
                    });
                  case 3:
                    if (/\bmaterial\s*symbols\b/.test(o)) {
                      e.next = 5;
                      break;
                    }
                    return e.abrupt("return", {
                      familyForMeasure: a,
                      familyForCanvas: a,
                    });
                  case 5:
                    if (
                      ((s =
                        r &&
                        (null !== (u = r.FILL) && void 0 !== u ? u : r.fill)),
                      (l = "outlined"),
                      /\brounded\b/.test(c) || /\bround\b/.test(c)
                        ? (l = "rounded")
                        : /\bsharp\b/.test(c)
                          ? (l = "sharp")
                          : /\boutlined\b/.test(c) && (l = "outlined"),
                      (f = 1 === s),
                      (d = null),
                      f &&
                        ("outlined" === l && $.materialIconsFilled
                          ? (d = {
                              url: $.materialIconsFilled,
                              alias: "snapdom-mi-filled",
                            })
                          : "rounded" === l && $.materialIconsRound
                            ? (d = {
                                url: $.materialIconsRound,
                                alias: "snapdom-mi-round",
                              })
                            : "sharp" === l &&
                              $.materialIconsSharp &&
                              (d = {
                                url: $.materialIconsSharp,
                                alias: "snapdom-mi-sharp",
                              })),
                      d)
                    ) {
                      e.next = 10;
                      break;
                    }
                    return e.abrupt("return", {
                      familyForMeasure: a,
                      familyForCanvas: a,
                    });
                  case 10:
                    if (Q.has(d.alias)) {
                      e.next = 22;
                      break;
                    }
                    return (
                      (e.prev = 11),
                      (p = new FontFace(d.alias, "url(".concat(d.url, ")"), {
                        style: "normal",
                        weight: "400",
                      })),
                      document.fonts.add(p),
                      (e.next = 16),
                      p.load()
                    );
                  case 16:
                    (Q.set(d.alias, !0), (e.next = 22));
                    break;
                  case 19:
                    return (
                      (e.prev = 19),
                      (e.t0 = e["catch"](11)),
                      e.abrupt("return", {
                        familyForMeasure: a,
                        familyForCanvas: a,
                      })
                    );
                  case 22:
                    return (
                      (h = '"'.concat(d.alias, '"')),
                      e.abrupt("return", {
                        familyForMeasure: h,
                        familyForCanvas: h,
                      })
                    );
                  case 24:
                  case "end":
                    return e.stop();
                }
            },
            e,
            null,
            [[11, 19]],
          );
        }),
      )),
      te.apply(this, arguments)
    );
  }
  function ne() {
    return re.apply(this, arguments);
  }
  function re() {
    return (
      (re = (0, c.Z)(
        (0, i.Z)().mark(function e() {
          var t,
            n,
            r = arguments;
          return (0, i.Z)().wrap(
            function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (t =
                        r.length > 0 && void 0 !== r[0]
                          ? r[0]
                          : "Material Icons"),
                      (n = r.length > 1 && void 0 !== r[1] ? r[1] : 24),
                      (e.prev = 2),
                      (e.next = 5),
                      Promise.all([
                        document.fonts.load(
                          "400 "
                            .concat(n, 'px "')
                            .concat(String(t).replace(/["']/g, ""), '"'),
                        ),
                        document.fonts.ready,
                      ])
                    );
                  case 5:
                    e.next = 9;
                    break;
                  case 7:
                    ((e.prev = 7), (e.t0 = e["catch"](2)));
                  case 9:
                  case "end":
                    return e.stop();
                }
            },
            e,
            null,
            [[2, 7]],
          );
        }),
      )),
      re.apply(this, arguments)
    );
  }
  function ue(e) {
    var t,
      n,
      r =
        (null === (t = e.getPropertyValue("-webkit-text-fill-color")) ||
        void 0 === t
          ? void 0
          : t.trim()) || "",
      u =
        /^transparent$/i.test(r) ||
        /rgba?\(\s*0\s*,\s*0\s*,\s*0\s*,\s*0\s*\)/i.test(r);
    if (r && !u && "currentcolor" !== r.toLowerCase()) return r;
    var a = null === (n = e.color) || void 0 === n ? void 0 : n.trim();
    return a && "inherit" !== a ? a : "#000";
  }
  function ae(e) {
    return ie.apply(this, arguments);
  }
  function ie() {
    return (
      (ie = (0, c.Z)(
        (0, i.Z)().mark(function e(t) {
          var n,
            r,
            u,
            a,
            o,
            c,
            s,
            l,
            f,
            d,
            p,
            h,
            D,
            m,
            v,
            g,
            y,
            b,
            F,
            E,
            x,
            C,
            w,
            A,
            k,
            S = arguments;
          return (0, i.Z)().wrap(function (e) {
            while (1)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (n = S.length > 1 && void 0 !== S[1] ? S[1] : {}),
                    (r = n.family),
                    (u = void 0 === r ? "Material Icons" : r),
                    (a = n.weight),
                    (o = void 0 === a ? "normal" : a),
                    (c = n.fontSize),
                    (s = void 0 === c ? 32 : c),
                    (l = n.color),
                    (f = void 0 === l ? "#000" : l),
                    (d = n.variation),
                    (p = void 0 === d ? "" : d),
                    (h = n.className),
                    (D = void 0 === h ? "" : h),
                    (m = String(u || "").replace(/^['"]+|['"]+$/g, "")),
                    (v = window.devicePixelRatio || 1),
                    (g = J(p)),
                    (e.next = 6),
                    ee(m, D, g)
                  );
                case 6:
                  return (
                    (y = e.sent),
                    (b = y.familyForMeasure),
                    (F = y.familyForCanvas),
                    (e.next = 11),
                    ne(F.replace(/^["']+|["']+$/g, ""), s)
                  );
                case 11:
                  ((E = document.createElement("span")),
                    (E.textContent = t),
                    (E.style.position = "absolute"),
                    (E.style.visibility = "hidden"),
                    (E.style.left = "-99999px"),
                    (E.style.whiteSpace = "nowrap"),
                    (E.style.fontFamily = b),
                    (E.style.fontWeight = String(o || "normal")),
                    (E.style.fontSize = "".concat(s, "px")),
                    (E.style.lineHeight = "1"),
                    (E.style.margin = "0"),
                    (E.style.padding = "0"),
                    (E.style.fontFeatureSettings = "'liga' 1"),
                    (E.style.fontVariantLigatures = "normal"),
                    (E.style.color = f),
                    document.body.appendChild(E),
                    (x = E.getBoundingClientRect()),
                    (C = Math.max(1, Math.ceil(x.width))),
                    (w = Math.max(1, Math.ceil(x.height))),
                    document.body.removeChild(E),
                    (A = document.createElement("canvas")),
                    (A.width = C * v),
                    (A.height = w * v),
                    (k = A.getContext("2d")),
                    k.scale(v, v),
                    (k.font = ""
                      .concat(o ? "".concat(o, " ") : "")
                      .concat(s, "px ")
                      .concat(F)),
                    (k.textAlign = "left"),
                    (k.textBaseline = "top"),
                    (k.fillStyle = f));
                  try {
                    k.fontKerning = "normal";
                  } catch (i) {}
                  return e.abrupt(
                    "return",
                    (k.fillText(t, 0, 0),
                    { dataUrl: A.toDataURL(), width: C, height: w }),
                  );
                case 21:
                case "end":
                  return e.stop();
              }
          }, e);
        }),
      )),
      ie.apply(this, arguments)
    );
  }
  function oe(e, t) {
    return ce.apply(this, arguments);
  }
  function ce() {
    return (
      (ce = (0, c.Z)(
        (0, i.Z)().mark(function e(t, n) {
          var r, u, a, o, c, s, l, f, d, p, h, D, m, v, g, y, b, F, E, x;
          return (0, i.Z)().wrap(
            function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (t instanceof Element) {
                      e.next = 2;
                      break;
                    }
                    return e.abrupt("return", 0);
                  case 2:
                    if (
                      ((r = '.material-icons, [class*="material-symbols"]'),
                      (u = Array.from(t.querySelectorAll(r)).filter(
                        function (e) {
                          return e && e.textContent && e.textContent.trim();
                        },
                      )),
                      0 !== u.length)
                    ) {
                      e.next = 5;
                      break;
                    }
                    return e.abrupt("return", 0);
                  case 5:
                    ((a =
                      n instanceof Element
                        ? Array.from(n.querySelectorAll(r)).filter(
                            function (e) {
                              return e && e.textContent && e.textContent.trim();
                            },
                          )
                        : []),
                      (o = 0),
                      (c = 0));
                  case 7:
                    if (!(c < u.length)) {
                      e.next = 37;
                      break;
                    }
                    if (
                      ((s = u[c]),
                      (l = a[c] || null),
                      (e.prev = 9),
                      (f = getComputedStyle(l || s)),
                      (d = f.fontFamily || "Material Icons"),
                      K(d))
                    ) {
                      e.next = 13;
                      break;
                    }
                    return e.abrupt("continue", 34);
                  case 13:
                    if (((p = (l || s).textContent.trim()), p)) {
                      e.next = 16;
                      break;
                    }
                    return e.abrupt("continue", 34);
                  case 16:
                    return (
                      (h = parseInt(f.fontSize, 10) || 24),
                      (D =
                        f.fontWeight && "normal" !== f.fontWeight
                          ? f.fontWeight
                          : "normal"),
                      (m = ue(f)),
                      (v =
                        f.fontVariationSettings &&
                        "normal" !== f.fontVariationSettings
                          ? f.fontVariationSettings
                          : ""),
                      (g = (l || s).className || ""),
                      (e.next = 23),
                      ae(p, {
                        family: d,
                        weight: D,
                        fontSize: h,
                        color: m,
                        variation: v,
                        className: g,
                      })
                    );
                  case 23:
                    ((y = e.sent),
                      (b = y.dataUrl),
                      (F = y.width),
                      (E = y.height),
                      (s.textContent = ""),
                      (x = s.ownerDocument.createElement("img")),
                      (x.src = b),
                      (x.alt = p),
                      (x.style.height = "".concat(h, "px")),
                      (x.style.width = "".concat(
                        Math.max(1, Math.round((F / E) * h)),
                        "px",
                      )),
                      (x.style.objectFit = "contain"),
                      (x.style.verticalAlign =
                        getComputedStyle(s).verticalAlign || "baseline"),
                      s.appendChild(x),
                      o++,
                      (e.next = 34));
                    break;
                  case 32:
                    ((e.prev = 32), (e.t0 = e["catch"](9)));
                  case 34:
                    (c++, (e.next = 7));
                    break;
                  case 37:
                    return e.abrupt("return", o);
                  case 38:
                  case "end":
                    return e.stop();
                }
            },
            e,
            null,
            [[9, 32]],
          );
        }),
      )),
      ce.apply(this, arguments)
    );
  }
  function se(e, t, n) {
    return le.apply(this, arguments);
  }
  function le() {
    return (
      (le = (0, c.Z)(
        (0, i.Z)().mark(function e(t, n, r) {
          var u,
            a,
            o,
            c,
            s,
            l,
            f,
            d,
            p,
            h = arguments;
          return (0, i.Z)().wrap(
            function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (u = h.length > 3 && void 0 !== h[3] ? h[3] : 32),
                      (a = h.length > 4 && void 0 !== h[4] ? h[4] : "#000"),
                      (n = n.replace(/^['"]+|['"]+$/g, "")),
                      (o = window.devicePixelRatio || 1),
                      (e.prev = 4),
                      (e.next = 7),
                      document.fonts.ready
                    );
                  case 7:
                    e.next = 11;
                    break;
                  case 9:
                    ((e.prev = 9), (e.t0 = e["catch"](4)));
                  case 11:
                    return (
                      (c = document.createElement("span")),
                      (c.textContent = t),
                      (c.style.position = "absolute"),
                      (c.style.visibility = "hidden"),
                      (c.style.fontFamily = '"'.concat(n, '"')),
                      (c.style.fontWeight = r || "normal"),
                      (c.style.fontSize = "".concat(u, "px")),
                      (c.style.lineHeight = "1"),
                      (c.style.whiteSpace = "nowrap"),
                      (c.style.padding = "0"),
                      (c.style.margin = "0"),
                      document.body.appendChild(c),
                      (s = c.getBoundingClientRect()),
                      (l = Math.ceil(s.width)),
                      (f = Math.ceil(s.height)),
                      document.body.removeChild(c),
                      (d = document.createElement("canvas")),
                      (d.width = Math.max(1, l * o)),
                      (d.height = Math.max(1, f * o)),
                      (p = d.getContext("2d")),
                      e.abrupt(
                        "return",
                        (p.scale(o, o),
                        (p.font = r
                          ? "".concat(r, " ").concat(u, 'px "').concat(n, '"')
                          : "".concat(u, 'px "').concat(n, '"')),
                        (p.textAlign = "left"),
                        (p.textBaseline = "top"),
                        (p.fillStyle = a),
                        p.fillText(t, 0, 0),
                        { dataUrl: d.toDataURL(), width: l, height: f }),
                      )
                    );
                  case 19:
                  case "end":
                    return e.stop();
                }
            },
            e,
            null,
            [[4, 9]],
          );
        }),
      )),
      le.apply(this, arguments)
    );
  }
  var fe = new Set([
    "serif",
    "sans-serif",
    "monospace",
    "cursive",
    "fantasy",
    "system-ui",
    "emoji",
    "math",
    "fangsong",
    "ui-serif",
    "ui-sans-serif",
    "ui-monospace",
    "ui-rounded",
  ]);
  function de(e) {
    if (!e) return "";
    var t,
      n = (0, s.Z)(e.split(","));
    try {
      for (n.s(); !(t = n.n()).done; ) {
        var r = t.value,
          u = r.trim().replace(/^['"]+|['"]+$/g, "");
        if (u && !fe.has(u.toLowerCase())) return u;
      }
    } catch (a) {
      n.e(a);
    } finally {
      n.f();
    }
    return "";
  }
  function pe(e) {
    var t = String(null !== e && void 0 !== e ? e : "400")
      .trim()
      .toLowerCase();
    if ("normal" === t) return 400;
    if ("bold" === t) return 700;
    var n = parseInt(t, 10);
    return Number.isFinite(n) ? Math.min(900, Math.max(100, n)) : 400;
  }
  function he(e) {
    var t = String(null !== e && void 0 !== e ? e : "normal")
      .trim()
      .toLowerCase();
    return t.startsWith("italic")
      ? "italic"
      : t.startsWith("oblique")
        ? "oblique"
        : "normal";
  }
  function De(e) {
    var t = String(null !== e && void 0 !== e ? e : "100%").match(
      /(\d+(?:\.\d+)?)\s*%/,
    );
    return t ? Math.max(50, Math.min(200, parseFloat(t[1]))) : 100;
  }
  function me(e) {
    var t = String(e || "400").trim(),
      n = t.match(/^(\d{2,3})\s+(\d{2,3})$/);
    if (n) {
      var r = pe(n[1]),
        u = pe(n[2]);
      return { min: Math.min(r, u), max: Math.max(r, u) };
    }
    var a = pe(t);
    return { min: a, max: a };
  }
  function ve(e) {
    var t = String(e || "normal")
      .trim()
      .toLowerCase();
    return "italic" === t
      ? { kind: "italic" }
      : t.startsWith("oblique")
        ? { kind: "oblique" }
        : { kind: "normal" };
  }
  function ge(e) {
    var t = String(e || "100%").trim(),
      n = t.match(/(\d+(?:\.\d+)?)\s*%\s+(\d+(?:\.\d+)?)\s*%/);
    if (n) {
      var r = parseFloat(n[1]),
        u = parseFloat(n[2]);
      return { min: Math.min(r, u), max: Math.max(r, u) };
    }
    var a = t.match(/(\d+(?:\.\d+)?)\s*%/),
      i = a ? parseFloat(a[1]) : 100;
    return { min: i, max: i };
  }
  function ye(e, t) {
    if (!e) return !1;
    try {
      var n = new URL(e, location.href);
      if (n.origin === location.origin) return !0;
      var r = n.host.toLowerCase();
      if (
        [
          "fonts.googleapis.com",
          "fonts.gstatic.com",
          "use.typekit.net",
          "p.typekit.net",
          "kit.fontawesome.com",
          "use.fontawesome.com",
        ].some(function (e) {
          return r.endsWith(e);
        })
      )
        return !0;
      var u = (n.pathname + n.search).toLowerCase();
      if (/\bfont(s)?\b/.test(u) || /\.woff2?(\b|$)/.test(u)) return !0;
      var a,
        i = (0, s.Z)(t);
      try {
        for (i.s(); !(a = i.n()).done; ) {
          var o = a.value,
            c = o.toLowerCase().replace(/\s+/g, "+"),
            l = o.toLowerCase().replace(/\s+/g, "-");
          if (u.includes(c) || u.includes(l)) return !0;
        }
      } catch (f) {
        i.e(f);
      } finally {
        i.f();
      }
      return !1;
    } catch (d) {
      return !1;
    }
  }
  function be(e) {
    var t,
      n = new Set(),
      r = (0, s.Z)(e || []);
    try {
      for (r.s(); !(t = r.n()).done; ) {
        var u,
          a = t.value,
          i =
            null === (u = String(a).split("__")[0]) || void 0 === u
              ? void 0
              : u.trim();
        i && n.add(i);
      }
    } catch (o) {
      r.e(o);
    } finally {
      r.f();
    }
    return n;
  }
  function Fe(e, t) {
    return (
      e &&
      e.replace(/url\(\s*(['"]?)([^)'"]+)\1\s*\)/g, function (e, n, r) {
        var u = (r || "").trim();
        if (!u || /^data:|^blob:|^https?:|^file:|^about:/i.test(u)) return e;
        var a = u;
        try {
          a = new URL(u, t || location.href).href;
        } catch (i) {}
        return 'url("'.concat(a, '")');
      })
    );
  }
  var Ee =
      /@import\s+(?:url\(\s*(['"]?)([^)"']+)\1\s*\)|(['"])([^"']+)\3)([^;]*);/g,
    xe = 4;
  function Ce(e, t, n) {
    return we.apply(this, arguments);
  }
  function we() {
    return (
      (we = (0, c.Z)(
        (0, i.Z)().mark(function e(t, n, r) {
          var u, a, o, s, l;
          return (0, i.Z)().wrap(function (e) {
            while (1)
              switch ((e.prev = e.next)) {
                case 0:
                  if (
                    ((s = function () {
                      return (
                        (s = (0, c.Z)(
                          (0, i.Z)().mark(function e(t, n) {
                            var c,
                              s,
                              l,
                              f,
                              d,
                              p,
                              h,
                              D,
                              m = arguments;
                            return (0, i.Z)().wrap(
                              function (e) {
                                while (1)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      if (
                                        ((c =
                                          m.length > 2 && void 0 !== m[2]
                                            ? m[2]
                                            : 0),
                                        !(c > xe))
                                      ) {
                                        e.next = 3;
                                        break;
                                      }
                                      return e.abrupt(
                                        "return",
                                        (z.warn(
                                          "[snapDOM] @import depth exceeded ("
                                            .concat(xe, ") at ")
                                            .concat(n),
                                        ),
                                        t),
                                      );
                                    case 3:
                                      ((s = ""), (l = 0));
                                    case 4:
                                      if (!(f = Ee.exec(t))) {
                                        e.next = 32;
                                        break;
                                      }
                                      if (
                                        ((s += t.slice(l, f.index)),
                                        (l = Ee.lastIndex),
                                        (d = (f[2] || f[4] || "").trim()),
                                        (p = a(d, n)),
                                        !u.has(p))
                                      ) {
                                        e.next = 10;
                                        break;
                                      }
                                      return (
                                        z.warn(
                                          "[snapDOM] Skipping circular @import: ".concat(
                                            p,
                                          ),
                                        ),
                                        e.abrupt("continue", 30)
                                      );
                                    case 10:
                                      return (
                                        u.add(p),
                                        (h = ""),
                                        (e.prev = 12),
                                        (e.next = 15),
                                        k(p, {
                                          as: "text",
                                          useProxy: r,
                                          silent: !0,
                                        })
                                      );
                                    case 15:
                                      ((D = e.sent),
                                        D.ok &&
                                          "string" == typeof D.data &&
                                          (h = D.data),
                                        (e.next = 21));
                                      break;
                                    case 19:
                                      ((e.prev = 19), (e.t0 = e["catch"](12)));
                                    case 21:
                                      if (!h) {
                                        e.next = 29;
                                        break;
                                      }
                                      return (
                                        (h = Fe(h, p)),
                                        (e.next = 25),
                                        o(h, p, c + 1)
                                      );
                                    case 25:
                                      ((h = e.sent),
                                        (s += "\n/* inlined: "
                                          .concat(p, " */\n")
                                          .concat(h, "\n")),
                                        (e.next = 30));
                                      break;
                                    case 29:
                                      s += f[0];
                                    case 30:
                                      e.next = 4;
                                      break;
                                    case 32:
                                      return e.abrupt(
                                        "return",
                                        ((s += t.slice(l)), s),
                                      );
                                    case 33:
                                    case "end":
                                      return e.stop();
                                  }
                              },
                              e,
                              null,
                              [[12, 19]],
                            );
                          }),
                        )),
                        s.apply(this, arguments)
                      );
                    }),
                    (o = function (e, t) {
                      return s.apply(this, arguments);
                    }),
                    (a = function (e, t) {
                      try {
                        return new URL(e, t || location.href).href;
                      } catch (n) {
                        return e;
                      }
                    }),
                    t)
                  ) {
                    e.next = 5;
                    break;
                  }
                  return e.abrupt("return", t);
                case 5:
                  return (
                    (u = new Set()),
                    (l = Fe(t, n || location.href)),
                    (e.next = 9),
                    o(l, n || location.href, 0)
                  );
                case 9:
                  return ((l = e.sent), e.abrupt("return", l));
                case 11:
                case "end":
                  return e.stop();
              }
          }, e);
        }),
      )),
      we.apply(this, arguments)
    );
  }
  var Ae = /url\((["']?)([^"')]+)\1\)/g,
    ke = /@font-face[^{}]*\{[^}]*\}/g;
  function Se(e) {
    if (!e) return [];
    var t,
      n = [],
      r = e
        .split(",")
        .map(function (e) {
          return e.trim();
        })
        .filter(Boolean),
      u = (0, s.Z)(r);
    try {
      for (u.s(); !(t = u.n()).done; ) {
        var a = t.value,
          i = a.match(/^U\+([0-9A-Fa-f?]+)(?:-([0-9A-Fa-f?]+))?$/);
        if (i) {
          var o = i[1],
            c = i[2],
            l = function (e) {
              if (!e.includes("?")) return parseInt(e, 16);
              var t = parseInt(e.replace(/\?/g, "0"), 16),
                n = parseInt(e.replace(/\?/g, "F"), 16);
              return [t, n];
            };
          if (c) {
            var f = l(o),
              d = l(c),
              p = Array.isArray(f) ? f[0] : f,
              h = Array.isArray(d) ? d[1] : d;
            n.push([Math.min(p, h), Math.max(p, h)]);
          } else {
            var D = l(o);
            Array.isArray(D) ? n.push([D[0], D[1]]) : n.push([D, D]);
          }
        }
      }
    } catch (m) {
      u.e(m);
    } finally {
      u.f();
    }
    return n;
  }
  function Be(e, t) {
    if (!t.length || !e || 0 === e.size) return !0;
    var n,
      r = (0, s.Z)(e);
    try {
      for (r.s(); !(n = r.n()).done; ) {
        var u,
          a = n.value,
          i = (0, s.Z)(t);
        try {
          for (i.s(); !(u = i.n()).done; ) {
            var o = (0, l.Z)(u.value, 2),
              c = o[0],
              f = o[1];
            if (a >= c && a <= f) return !0;
          }
        } catch (d) {
          i.e(d);
        } finally {
          i.f();
        }
      }
    } catch (d) {
      r.e(d);
    } finally {
      r.f();
    }
    return !1;
  }
  function Ne(e, t) {
    var n = [];
    if (!e) return n;
    var r,
      u = (0, s.Z)(e.matchAll(Ae));
    try {
      for (u.s(); !(r = u.n()).done; ) {
        var a = r.value,
          i = (a[2] || "").trim();
        if (i && !i.startsWith("data:")) {
          if (!/^https?:/i.test(i))
            try {
              i = new URL(i, t || location.href).href;
            } catch (o) {}
          n.push(i);
        }
      }
    } catch (c) {
      u.e(c);
    } finally {
      u.f();
    }
    return n;
  }
  function Me(e, t) {
    return Ze.apply(this, arguments);
  }
  function Ze() {
    return (
      (Ze = (0, c.Z)(
        (0, i.Z)().mark(function e(t, n) {
          var r,
            u,
            a,
            o,
            c,
            l,
            f,
            p,
            D,
            m,
            v,
            g,
            y,
            b,
            F = arguments;
          return (0, i.Z)().wrap(
            function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    ((r = F.length > 2 && void 0 !== F[2] ? F[2] : ""),
                      (u = t),
                      (a = (0, s.Z)(t.matchAll(Ae))),
                      (e.prev = 3),
                      a.s());
                  case 5:
                    if ((o = a.n()).done) {
                      e.next = 29;
                      break;
                    }
                    if (((c = o.value), (l = h(c[0])), l)) {
                      e.next = 10;
                      break;
                    }
                    return e.abrupt("continue", 27);
                  case 10:
                    if (
                      ((f = l), !f.startsWith("http") && !f.startsWith("data:"))
                    )
                      try {
                        f = new URL(f, n || location.href).href;
                      } catch (i) {}
                    if (Y(f)) {
                      e.next = 27;
                      break;
                    }
                    if (
                      null === (p = d.resource) ||
                      void 0 === p ||
                      !p.has(f)
                    ) {
                      e.next = 16;
                      break;
                    }
                    return (
                      null !== (m = d.font) && void 0 !== m && m.add(f),
                      (u = u.replace(
                        c[0],
                        "url(".concat(d.resource.get(f), ")"),
                      )),
                      e.abrupt("continue", 27)
                    );
                  case 16:
                    if (null !== (D = d.font) && void 0 !== D && D.has(f)) {
                      e.next = 27;
                      break;
                    }
                    return (
                      (e.prev = 17),
                      (e.next = 20),
                      k(f, { as: "dataURL", useProxy: r, silent: !0 })
                    );
                  case 20:
                    ((v = e.sent),
                      v.ok &&
                        "string" == typeof v.data &&
                        ((b = v.data),
                        null !== (g = d.resource) &&
                          void 0 !== g &&
                          g.set(f, b),
                        null !== (y = d.font) && void 0 !== y && y.add(f),
                        (u = u.replace(c[0], "url(".concat(b, ")")))),
                      (e.next = 27));
                    break;
                  case 24:
                    ((e.prev = 24),
                      (e.t0 = e["catch"](17)),
                      z.warn("[snapDOM] Failed to fetch font resource:", f));
                  case 27:
                    e.next = 5;
                    break;
                  case 29:
                    e.next = 34;
                    break;
                  case 31:
                    ((e.prev = 31), (e.t1 = e["catch"](3)), a.e(e.t1));
                  case 34:
                    return ((e.prev = 34), a.f(), e.finish(34));
                  case 37:
                    return e.abrupt("return", u);
                  case 38:
                  case "end":
                    return e.stop();
                }
            },
            e,
            null,
            [
              [3, 31, 34, 37],
              [17, 24],
            ],
          );
        }),
      )),
      Ze.apply(this, arguments)
    );
  }
  function Te(e) {
    if (!e.length) return null;
    var t = function (t, n) {
        return e.some(function (e) {
          var r = (0, l.Z)(e, 2),
            u = r[0],
            a = r[1];
          return !(a < t || u > n);
        });
      },
      n = t(0, 255) || t(305, 305),
      r = t(256, 591) || t(7680, 7935),
      u = t(880, 1023),
      a = t(1024, 1279);
    return t(7840, 7929) || t(258, 259) || t(416, 417) || t(431, 432)
      ? "vietnamese"
      : a
        ? "cyrillic"
        : u
          ? "greek"
          : r
            ? "latin-ext"
            : n
              ? "latin"
              : null;
  }
  function Oe() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      t = new Set(
        (e.families || []).map(function (e) {
          return String(e).toLowerCase();
        }),
      ),
      n = new Set(
        (e.domains || []).map(function (e) {
          return String(e).toLowerCase();
        }),
      ),
      r = new Set(
        (e.subsets || []).map(function (e) {
          return String(e).toLowerCase();
        }),
      );
    return function (e, u) {
      if (t.size && t.has(e.family.toLowerCase())) return !0;
      if (n.size) {
        var a,
          i = (0, s.Z)(e.srcUrls);
        try {
          for (i.s(); !(a = i.n()).done; ) {
            var o = a.value;
            try {
              if (n.has(new URL(o).host.toLowerCase())) return !0;
            } catch (l) {}
          }
        } catch (f) {
          i.e(f);
        } finally {
          i.f();
        }
      }
      if (r.size) {
        var c = Te(u);
        if (c && r.has(c)) return !0;
      }
      return !1;
    };
  }
  function Ie(e) {
    if (!e) return e;
    var t,
      n = /@font-face[^{}]*\{[^}]*\}/gi,
      r = new Set(),
      u = [],
      a = (0, s.Z)(e.match(n) || []);
    try {
      for (a.s(); !(t = a.n()).done; ) {
        var i,
          o,
          c,
          l,
          f,
          d,
          p = t.value,
          h =
            (null === (i = p.match(/font-family:\s*([^;]+);/i)) || void 0 === i
              ? void 0
              : i[1]) || "",
          D = de(h),
          m = (
            (null === (o = p.match(/font-weight:\s*([^;]+);/i)) || void 0 === o
              ? void 0
              : o[1]) || "400"
          ).trim(),
          v = (
            (null === (c = p.match(/font-style:\s*([^;]+);/i)) || void 0 === c
              ? void 0
              : c[1]) || "normal"
          ).trim(),
          g = (
            (null === (l = p.match(/font-stretch:\s*([^;]+);/i)) || void 0 === l
              ? void 0
              : l[1]) || "100%"
          ).trim(),
          y = (
            (null === (f = p.match(/unicode-range:\s*([^;]+);/i)) ||
            void 0 === f
              ? void 0
              : f[1]) || ""
          ).trim(),
          b = (
            (null === (d = p.match(/src\s*:\s*([^;}]+)[;}]/i)) || void 0 === d
              ? void 0
              : d[1]) || ""
          ).trim(),
          F = Ne(b, location.href),
          E = F.length
            ? F.map(function (e) {
                return String(e).toLowerCase();
              })
                .sort()
                .join("|")
            : b.toLowerCase(),
          x = [String(D || "").toLowerCase(), m, v, g, y.toLowerCase(), E].join(
            "|",
          );
        r.has(x) || (r.add(x), u.push(p));
      }
    } catch (w) {
      a.e(w);
    } finally {
      a.f();
    }
    if (0 === u.length) return e;
    var C = 0;
    return e.replace(n, function () {
      return u[C++] || "";
    });
  }
  function Re(e, t, n, r) {
    var u = Array.from(e || [])
        .sort()
        .join("|"),
      a = t
        ? JSON.stringify({
            families: (t.families || [])
              .map(function (e) {
                return String(e).toLowerCase();
              })
              .sort(),
            domains: (t.domains || [])
              .map(function (e) {
                return String(e).toLowerCase();
              })
              .sort(),
            subsets: (t.subsets || [])
              .map(function (e) {
                return String(e).toLowerCase();
              })
              .sort(),
          })
        : "",
      i = (n || [])
        .map(function (e) {
          return ""
            .concat((e.family || "").toLowerCase(), "::")
            .concat(e.weight || "normal", "::")
            .concat(e.style || "normal", "::")
            .concat(e.src || "");
        })
        .sort()
        .join("|");
    return "fonts-embed-css::req="
      .concat(u, "::ex=")
      .concat(a, "::lf=")
      .concat(i, "::px=")
      .concat(r || "");
  }
  function Le(e, t, n, r) {
    return Pe.apply(this, arguments);
  }
  function Pe() {
    return (
      (Pe = (0, c.Z)(
        (0, i.Z)().mark(function e(t, n, r, u) {
          var a, c, l, f, d, p, h, D, m, v, g, y, b, F, E, x, C;
          return (0, i.Z)().wrap(
            function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    ((e.prev = 0), (a = t.cssRules || []), (e.next = 7));
                    break;
                  case 4:
                    return (
                      (e.prev = 4),
                      (e.t0 = e["catch"](0)),
                      e.abrupt("return")
                    );
                  case 7:
                    ((c = function (e, t) {
                      try {
                        return new URL(e, t || location.href).href;
                      } catch (n) {
                        return e;
                      }
                    }),
                      (l = (0, s.Z)(a)),
                      (e.prev = 9),
                      l.s());
                  case 11:
                    if ((f = l.n()).done) {
                      e.next = 51;
                      break;
                    }
                    if (
                      ((d = f.value),
                      d.type !== CSSRule.IMPORT_RULE || !d.styleSheet)
                    ) {
                      e.next = 26;
                      break;
                    }
                    if (((p = d.href ? c(d.href, n) : n), !(u.depth >= xe))) {
                      e.next = 18;
                      break;
                    }
                    return (
                      z.warn(
                        "[snapDOM] CSSOM import depth exceeded ("
                          .concat(xe, ") at ")
                          .concat(p),
                      ),
                      e.abrupt("continue", 49)
                    );
                  case 18:
                    if (!p || !u.visitedSheets.has(p)) {
                      e.next = 21;
                      break;
                    }
                    return (
                      z.warn(
                        "[snapDOM] Skipping circular CSSOM import: ".concat(p),
                      ),
                      e.abrupt("continue", 49)
                    );
                  case 21:
                    return (
                      p && u.visitedSheets.add(p),
                      (h = (0, o.Z)(
                        (0, o.Z)({}, u),
                        {},
                        { depth: (u.depth || 0) + 1 },
                      )),
                      (e.next = 25),
                      Le(d.styleSheet, p, r, h)
                    );
                  case 25:
                    return e.abrupt("continue", 49);
                  case 26:
                    if (d.type !== CSSRule.FONT_FACE_RULE) {
                      e.next = 49;
                      break;
                    }
                    if (
                      ((D = (
                        d.style.getPropertyValue("font-family") || ""
                      ).trim()),
                      (m = de(D)),
                      m && !Y(m))
                    ) {
                      e.next = 30;
                      break;
                    }
                    return e.abrupt("continue", 49);
                  case 30:
                    if (
                      ((v = (
                        d.style.getPropertyValue("font-weight") || "400"
                      ).trim()),
                      (g = (
                        d.style.getPropertyValue("font-style") || "normal"
                      ).trim()),
                      (y = (
                        d.style.getPropertyValue("font-stretch") || "100%"
                      ).trim()),
                      (b = (d.style.getPropertyValue("src") || "").trim()),
                      (F = (
                        d.style.getPropertyValue("unicode-range") || ""
                      ).trim()),
                      u.faceMatchesRequired(m, g, v, y))
                    ) {
                      e.next = 33;
                      break;
                    }
                    return e.abrupt("continue", 49);
                  case 33:
                    if (((E = Se(F)), Be(u.usedCodepoints, E))) {
                      e.next = 36;
                      break;
                    }
                    return e.abrupt("continue", 49);
                  case 36:
                    if (
                      ((x = {
                        family: m,
                        weightSpec: v,
                        styleSpec: g,
                        stretchSpec: y,
                        unicodeRange: F,
                        srcRaw: b,
                        srcUrls: Ne(b, n || location.href),
                        href: n || location.href,
                      }),
                      !u.simpleExcluder || !u.simpleExcluder(x, E))
                    ) {
                      e.next = 39;
                      break;
                    }
                    return e.abrupt("continue", 49);
                  case 39:
                    if (!/url\(/i.test(b)) {
                      e.next = 47;
                      break;
                    }
                    return (
                      (e.next = 42),
                      Me(b, n || location.href, u.useProxy)
                    );
                  case 42:
                    return (
                      (C = e.sent),
                      (e.next = 45),
                      r(
                        "@font-face{font-family:"
                          .concat(m, ";src:")
                          .concat(C, ";font-style:")
                          .concat(g, ";font-weight:")
                          .concat(v, ";font-stretch:")
                          .concat(y, ";")
                          .concat(
                            F ? "unicode-range:".concat(F, ";") : "",
                            "}",
                          ),
                      )
                    );
                  case 45:
                    e.next = 49;
                    break;
                  case 47:
                    return (
                      (e.next = 49),
                      r(
                        "@font-face{font-family:"
                          .concat(m, ";src:")
                          .concat(b, ";font-style:")
                          .concat(g, ";font-weight:")
                          .concat(v, ";font-stretch:")
                          .concat(y, ";")
                          .concat(
                            F ? "unicode-range:".concat(F, ";") : "",
                            "}",
                          ),
                      )
                    );
                  case 49:
                    e.next = 11;
                    break;
                  case 51:
                    e.next = 56;
                    break;
                  case 53:
                    ((e.prev = 53), (e.t1 = e["catch"](9)), l.e(e.t1));
                  case 56:
                    return ((e.prev = 56), l.f(), e.finish(56));
                  case 59:
                  case "end":
                    return e.stop();
                }
            },
            e,
            null,
            [
              [0, 4],
              [9, 53, 56, 59],
            ],
          );
        }),
      )),
      Pe.apply(this, arguments)
    );
  }
  function _e() {
    return je.apply(this, arguments);
  }
  function je() {
    return (
      (je = (0, c.Z)(
        (0, i.Z)().mark(function e() {
          var t,
            n,
            u,
            a,
            o,
            f,
            p,
            h,
            D,
            m,
            v,
            g,
            y,
            b,
            F,
            E,
            x,
            C,
            w,
            A,
            S,
            B,
            N,
            M,
            Z,
            T,
            O,
            I,
            R,
            L,
            P,
            _,
            j,
            U,
            W,
            q,
            H,
            V,
            $,
            X,
            G,
            K,
            Q,
            J,
            ee,
            te,
            ne,
            re,
            ue,
            ae,
            ie,
            oe,
            ce,
            se,
            le = arguments;
          return (0, i.Z)().wrap(
            function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    ((N = function (e, t, n, r) {
                      if (!g.has(e)) return !1;
                      var u,
                        a = g.get(e),
                        i = me(n),
                        o = ve(t),
                        c = ge(r),
                        l = i.min !== i.max,
                        f = i.min,
                        d = function (e) {
                          return (
                            ("normal" === o.kind && "normal" === e) ||
                            ("normal" !== o.kind &&
                              ("italic" === e || "oblique" === e))
                          );
                        },
                        p = !1,
                        h = (0, s.Z)(a);
                      try {
                        for (h.s(); !(u = h.n()).done; ) {
                          var D = u.value,
                            m = l ? D.w >= i.min && D.w <= i.max : D.w === f,
                            v = d(he(D.s)),
                            y = D.st >= c.min && D.st <= c.max;
                          if (m && v && y) {
                            p = !0;
                            break;
                          }
                        }
                      } catch (N) {
                        h.e(N);
                      } finally {
                        h.f();
                      }
                      if (p) return !0;
                      if (!l) {
                        var b,
                          F = (0, s.Z)(a);
                        try {
                          for (F.s(); !(b = F.n()).done; ) {
                            var E = b.value,
                              x = d(he(E.s)),
                              C = E.st >= c.min && E.st <= c.max;
                            if (Math.abs(f - E.w) <= 300 && x && C) return !0;
                          }
                        } catch (N) {
                          F.e(N);
                        } finally {
                          F.f();
                        }
                      }
                      if (
                        !l &&
                        "normal" === o.kind &&
                        a.some(function (e) {
                          return "normal" !== he(e.s);
                        })
                      ) {
                        var w,
                          A = (0, s.Z)(a);
                        try {
                          for (A.s(); !(w = A.n()).done; ) {
                            var k = w.value,
                              S = Math.abs(f - k.w) <= 300,
                              B = k.st >= c.min && k.st <= c.max;
                            if (S && B) return !0;
                          }
                        } catch (N) {
                          A.e(N);
                        } finally {
                          A.f();
                        }
                      }
                      return !1;
                    }),
                      (u = le.length > 0 && void 0 !== le[0] ? le[0] : {}),
                      (a = u.required),
                      (o = u.usedCodepoints),
                      (f = u.exclude),
                      (p = void 0 === f ? void 0 : f),
                      (h = u.localFonts),
                      (D = void 0 === h ? [] : h),
                      (m = u.useProxy),
                      (v = void 0 === m ? "" : m),
                      a instanceof Set || (a = new Set()),
                      o instanceof Set || (o = new Set()),
                      (g = new Map()),
                      (y = (0, s.Z)(a)),
                      (e.prev = 5),
                      y.s());
                  case 7:
                    if ((b = y.n()).done) {
                      e.next = 16;
                      break;
                    }
                    if (
                      ((F = b.value),
                      (E = String(F).split("__")),
                      (x = (0, l.Z)(E, 4)),
                      (C = x[0]),
                      (w = x[1]),
                      (A = x[2]),
                      (S = x[3]),
                      C)
                    ) {
                      e.next = 12;
                      break;
                    }
                    return e.abrupt("continue", 14);
                  case 12:
                    ((B = g.get(C) || []),
                      B.push({ w: parseInt(w, 10), s: A, st: parseInt(S, 10) }),
                      g.set(C, B));
                  case 14:
                    e.next = 7;
                    break;
                  case 16:
                    e.next = 21;
                    break;
                  case 18:
                    ((e.prev = 18), (e.t0 = e["catch"](5)), y.e(e.t0));
                  case 21:
                    return ((e.prev = 21), y.f(), e.finish(21));
                  case 24:
                    if (
                      ((M = Oe(p)),
                      (Z = Re(a, p, D, v)),
                      null === (t = d.resource) || void 0 === t || !t.has(Z))
                    ) {
                      e.next = 27;
                      break;
                    }
                    return e.abrupt("return", d.resource.get(Z));
                  case 27:
                    ((T = be(a)),
                      (O = []),
                      (I = Ee),
                      (R = (0, s.Z)(document.querySelectorAll("style"))),
                      (e.prev = 29),
                      R.s());
                  case 31:
                    if ((L = R.n()).done) {
                      e.next = 55;
                      break;
                    }
                    ((P = L.value),
                      (_ = P.textContent || ""),
                      (j = (0, s.Z)(_.matchAll(I))),
                      (e.prev = 35),
                      j.s());
                  case 37:
                    if ((U = j.n()).done) {
                      e.next = 45;
                      break;
                    }
                    if (
                      ((W = U.value),
                      (q = (W[2] || W[4] || "").trim()),
                      q && !Y(q))
                    ) {
                      e.next = 42;
                      break;
                    }
                    return e.abrupt("continue", 43);
                  case 42:
                    document.querySelector(
                      'link[rel="stylesheet"][href="'.concat(q, '"]'),
                    ) || O.push(q);
                  case 43:
                    e.next = 37;
                    break;
                  case 45:
                    e.next = 50;
                    break;
                  case 47:
                    ((e.prev = 47), (e.t1 = e["catch"](35)), j.e(e.t1));
                  case 50:
                    return ((e.prev = 50), j.f(), e.finish(50));
                  case 53:
                    e.next = 31;
                    break;
                  case 55:
                    e.next = 60;
                    break;
                  case 57:
                    ((e.prev = 57), (e.t2 = e["catch"](29)), R.e(e.t2));
                  case 60:
                    return ((e.prev = 60), R.f(), e.finish(60));
                  case 63:
                    if (((e.t3 = O.length), !e.t3)) {
                      e.next = 67;
                      break;
                    }
                    return (
                      (e.next = 67),
                      Promise.all(
                        O.map(function (e) {
                          return new Promise(function (t) {
                            if (
                              document.querySelector(
                                'link[rel="stylesheet"][href="'.concat(e, '"]'),
                              )
                            )
                              return t(null);
                            var n = document.createElement("link");
                            ((n.rel = "stylesheet"),
                              (n.href = e),
                              n.setAttribute("data-snapdom", "injected-import"),
                              (n.onload = function () {
                                return t(n);
                              }),
                              (n.onerror = function () {
                                return t(null);
                              }),
                              document.head.appendChild(n));
                          });
                        }),
                      )
                    );
                  case 67:
                    ((H = ""),
                      (V = Array.from(
                        document.querySelectorAll('link[rel="stylesheet"]'),
                      ).filter(function (e) {
                        return !!e.href;
                      })),
                      ($ = (0, s.Z)(V)),
                      (e.prev = 69),
                      (G = (0, i.Z)().mark(function e() {
                        var t,
                          n,
                          r,
                          u,
                          a,
                          c,
                          l,
                          f,
                          d,
                          h,
                          D,
                          m,
                          g,
                          y,
                          b,
                          F,
                          E,
                          x,
                          C,
                          w,
                          A,
                          S,
                          B,
                          Z,
                          O,
                          I;
                        return (0, i.Z)().wrap(
                          function (e) {
                            while (1)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (
                                    ((t = X.value), (e.prev = 1), !Y(t.href))
                                  ) {
                                    e.next = 4;
                                    break;
                                  }
                                  return e.abrupt("return", "continue");
                                case 4:
                                  ((n = ""), (r = !1));
                                  try {
                                    r =
                                      new URL(t.href, location.href).origin ===
                                      location.origin;
                                  } catch (i) {}
                                  if (r || ye(t.href, T)) {
                                    e.next = 8;
                                    break;
                                  }
                                  return e.abrupt("return", "continue");
                                case 8:
                                  if (
                                    r &&
                                    ((u = Array.from(document.styleSheets).find(
                                      function (e) {
                                        return e.href === t.href;
                                      },
                                    )),
                                    u)
                                  )
                                    try {
                                      ((a = u.cssRules || []),
                                        (n = Array.from(a)
                                          .map(function (e) {
                                            return e.cssText;
                                          })
                                          .join("")));
                                    } catch (R) {}
                                  if (((e.t0 = !n), !e.t0)) {
                                    e.next = 15;
                                    break;
                                  }
                                  return (
                                    (e.next = 13),
                                    k(t.href, { as: "text", useProxy: v })
                                  );
                                case 13:
                                  ((n = e.sent.data), (e.t0 = Y(t.href)));
                                case 15:
                                  if (!e.t0) {
                                    e.next = 17;
                                    break;
                                  }
                                  return e.abrupt("return", "continue");
                                case 17:
                                  return ((e.next = 19), Ce(n, t.href, v));
                                case 19:
                                  ((n = e.sent),
                                    (c = ""),
                                    (l = (0, s.Z)(n.match(ke) || [])),
                                    (e.prev = 22),
                                    l.s());
                                case 24:
                                  if ((f = l.n()).done) {
                                    e.next = 49;
                                    break;
                                  }
                                  if (
                                    ((b = f.value),
                                    (F = (
                                      (null ===
                                        (d = b.match(
                                          /font-family:\s*([^;]+);/i,
                                        )) || void 0 === d
                                        ? void 0
                                        : d[1]) || ""
                                    ).trim()),
                                    (E = de(F)),
                                    E && !Y(E))
                                  ) {
                                    e.next = 29;
                                    break;
                                  }
                                  return e.abrupt("continue", 47);
                                case 29:
                                  if (
                                    ((x = (
                                      (null ===
                                        (h = b.match(
                                          /font-weight:\s*([^;]+);/i,
                                        )) || void 0 === h
                                        ? void 0
                                        : h[1]) || "400"
                                    ).trim()),
                                    (C = (
                                      (null ===
                                        (D = b.match(
                                          /font-style:\s*([^;]+);/i,
                                        )) || void 0 === D
                                        ? void 0
                                        : D[1]) || "normal"
                                    ).trim()),
                                    (w = (
                                      (null ===
                                        (m = b.match(
                                          /font-stretch:\s*([^;]+);/i,
                                        )) || void 0 === m
                                        ? void 0
                                        : m[1]) || "100%"
                                    ).trim()),
                                    (A = (
                                      (null ===
                                        (g = b.match(
                                          /unicode-range:\s*([^;]+);/i,
                                        )) || void 0 === g
                                        ? void 0
                                        : g[1]) || ""
                                    ).trim()),
                                    (S = (
                                      (null ===
                                        (y = b.match(
                                          /src\s*:\s*([^;}]+)[;}]/i,
                                        )) || void 0 === y
                                        ? void 0
                                        : y[1]) || ""
                                    ).trim()),
                                    (B = Ne(S, t.href)),
                                    N(E, C, x, w))
                                  ) {
                                    e.next = 32;
                                    break;
                                  }
                                  return e.abrupt("continue", 47);
                                case 32:
                                  if (((Z = Se(A)), Be(o, Z))) {
                                    e.next = 35;
                                    break;
                                  }
                                  return e.abrupt("continue", 47);
                                case 35:
                                  if (
                                    ((O = {
                                      family: E,
                                      weightSpec: x,
                                      styleSpec: C,
                                      stretchSpec: w,
                                      unicodeRange: A,
                                      srcRaw: S,
                                      srcUrls: B,
                                      href: t.href,
                                    }),
                                    !p || !M(O, Z))
                                  ) {
                                    e.next = 38;
                                    break;
                                  }
                                  return e.abrupt("continue", 47);
                                case 38:
                                  if (!/url\(/i.test(S)) {
                                    e.next = 44;
                                    break;
                                  }
                                  return ((e.next = 41), Me(b, t.href, v));
                                case 41:
                                  ((e.t1 = e.sent), (e.next = 45));
                                  break;
                                case 44:
                                  e.t1 = b;
                                case 45:
                                  ((I = e.t1), (c += I));
                                case 47:
                                  e.next = 24;
                                  break;
                                case 49:
                                  e.next = 54;
                                  break;
                                case 51:
                                  ((e.prev = 51),
                                    (e.t2 = e["catch"](22)),
                                    l.e(e.t2));
                                case 54:
                                  return ((e.prev = 54), l.f(), e.finish(54));
                                case 57:
                                  (c.trim() && (H += c), (e.next = 63));
                                  break;
                                case 60:
                                  ((e.prev = 60),
                                    (e.t3 = e["catch"](1)),
                                    z.warn(
                                      "[snapDOM] Failed to process stylesheet:",
                                      t.href,
                                    ));
                                case 63:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          null,
                          [
                            [1, 60],
                            [22, 51, 54, 57],
                          ],
                        );
                      })),
                      $.s());
                  case 72:
                    if ((X = $.n()).done) {
                      e.next = 79;
                      break;
                    }
                    return e.delegateYield(G(), "t4", 74);
                  case 74:
                    if (((K = e.t4), "continue" !== K)) {
                      e.next = 77;
                      break;
                    }
                    return e.abrupt("continue", 77);
                  case 77:
                    e.next = 72;
                    break;
                  case 79:
                    e.next = 84;
                    break;
                  case 81:
                    ((e.prev = 81), (e.t5 = e["catch"](69)), $.e(e.t5));
                  case 84:
                    return ((e.prev = 84), $.f(), e.finish(84));
                  case 87:
                    ((Q = {
                      requiredIndex: g,
                      usedCodepoints: o,
                      faceMatchesRequired: N,
                      simpleExcluder: p ? Oe(p) : null,
                      useProxy: v,
                      visitedSheets: new Set(),
                      depth: 0,
                    }),
                      (J = (0, s.Z)(document.styleSheets)),
                      (e.prev = 89),
                      (te = (0, i.Z)().mark(function e() {
                        var t, n;
                        return (0, i.Z)().wrap(
                          function (e) {
                            while (1)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (
                                    ((t = ee.value),
                                    t.href &&
                                      V.some(function (e) {
                                        return e.href === t.href;
                                      }))
                                  ) {
                                    e.next = 11;
                                    break;
                                  }
                                  return (
                                    (e.prev = 2),
                                    (n = t.href || location.href),
                                    n && Q.visitedSheets.add(n),
                                    (e.next = 7),
                                    Le(
                                      t,
                                      n,
                                      (function () {
                                        var e = (0, c.Z)(
                                          (0, i.Z)().mark(function e(t) {
                                            return (0, i.Z)().wrap(function (
                                              e,
                                            ) {
                                              while (1)
                                                switch ((e.prev = e.next)) {
                                                  case 0:
                                                    H += t;
                                                  case 1:
                                                  case "end":
                                                    return e.stop();
                                                }
                                            }, e);
                                          }),
                                        );
                                        return function (t) {
                                          return e.apply(this, arguments);
                                        };
                                      })(),
                                      Q,
                                    )
                                  );
                                case 7:
                                  e.next = 11;
                                  break;
                                case 9:
                                  ((e.prev = 9), (e.t0 = e["catch"](2)));
                                case 11:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          null,
                          [[2, 9]],
                        );
                      })),
                      J.s());
                  case 92:
                    if ((ee = J.n()).done) {
                      e.next = 96;
                      break;
                    }
                    return e.delegateYield(te(), "t6", 94);
                  case 94:
                    e.next = 92;
                    break;
                  case 96:
                    e.next = 101;
                    break;
                  case 98:
                    ((e.prev = 98), (e.t7 = e["catch"](89)), J.e(e.t7));
                  case 101:
                    return ((e.prev = 101), J.f(), e.finish(101));
                  case 104:
                    ((e.prev = 104),
                      (ne = (0, s.Z)(document.fonts || [])),
                      (e.prev = 106),
                      (ue = (0, i.Z)().mark(function e() {
                        var t, n, r, u, a, o, c, s, l;
                        return (0, i.Z)().wrap(
                          function (e) {
                            while (1)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (
                                    ((t = re.value),
                                    t &&
                                      t.family &&
                                      "loaded" === t.status &&
                                      t._snapdomSrc)
                                  ) {
                                    e.next = 3;
                                    break;
                                  }
                                  return e.abrupt("return", "continue");
                                case 3:
                                  if (
                                    ((n = String(t.family).replace(
                                      /^['"]+|['"]+$/g,
                                      "",
                                    )),
                                    !(
                                      Y(n) ||
                                      !g.has(n) ||
                                      (null !== p &&
                                        void 0 !== p &&
                                        p.families &&
                                        p.families.some(function (e) {
                                          return (
                                            String(e).toLowerCase() ===
                                            n.toLowerCase()
                                          );
                                        }))
                                    ))
                                  ) {
                                    e.next = 6;
                                    break;
                                  }
                                  return e.abrupt("return", "continue");
                                case 6:
                                  if (
                                    ((r = t._snapdomSrc),
                                    String(r).startsWith("data:"))
                                  ) {
                                    e.next = 28;
                                    break;
                                  }
                                  if (
                                    null === (u = d.resource) ||
                                    void 0 === u ||
                                    !u.has(t._snapdomSrc)
                                  ) {
                                    e.next = 12;
                                    break;
                                  }
                                  ((r = d.resource.get(t._snapdomSrc)),
                                    null === (a = d.font) ||
                                      void 0 === a ||
                                      a.add(t._snapdomSrc),
                                    (e.next = 28));
                                  break;
                                case 12:
                                  if (
                                    null !== (o = d.font) &&
                                    void 0 !== o &&
                                    o.has(t._snapdomSrc)
                                  ) {
                                    e.next = 28;
                                    break;
                                  }
                                  return (
                                    (e.prev = 13),
                                    (e.next = 16),
                                    k(t._snapdomSrc, {
                                      as: "dataURL",
                                      useProxy: v,
                                      silent: !0,
                                    })
                                  );
                                case 16:
                                  if (
                                    ((l = e.sent),
                                    !l.ok || "string" != typeof l.data)
                                  ) {
                                    e.next = 21;
                                    break;
                                  }
                                  ((r = l.data),
                                    null !== (c = d.resource) &&
                                      void 0 !== c &&
                                      c.set(t._snapdomSrc, r),
                                    null === (s = d.font) ||
                                      void 0 === s ||
                                      s.add(t._snapdomSrc),
                                    (e.next = 22));
                                  break;
                                case 21:
                                  return e.abrupt("return", "continue");
                                case 22:
                                  e.next = 28;
                                  break;
                                case 24:
                                  return (
                                    (e.prev = 24),
                                    (e.t0 = e["catch"](13)),
                                    z.warn(
                                      "[snapDOM] Failed to fetch dynamic font src:",
                                      t._snapdomSrc,
                                    ),
                                    e.abrupt("return", "continue")
                                  );
                                case 28:
                                  H += "@font-face{font-family:'"
                                    .concat(n, "';src:url(")
                                    .concat(r, ");font-style:")
                                    .concat(
                                      t.style || "normal",
                                      ";font-weight:",
                                    )
                                    .concat(t.weight || "normal", ";}");
                                case 29:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          null,
                          [[13, 24]],
                        );
                      })),
                      ne.s());
                  case 109:
                    if ((re = ne.n()).done) {
                      e.next = 116;
                      break;
                    }
                    return e.delegateYield(ue(), "t8", 111);
                  case 111:
                    if (((ae = e.t8), "continue" !== ae)) {
                      e.next = 114;
                      break;
                    }
                    return e.abrupt("continue", 114);
                  case 114:
                    e.next = 109;
                    break;
                  case 116:
                    e.next = 121;
                    break;
                  case 118:
                    ((e.prev = 118), (e.t9 = e["catch"](106)), ne.e(e.t9));
                  case 121:
                    return ((e.prev = 121), ne.f(), e.finish(121));
                  case 124:
                    e.next = 128;
                    break;
                  case 126:
                    ((e.prev = 126), (e.t10 = e["catch"](104)));
                  case 128:
                    ((ie = (0, s.Z)(D)),
                      (e.prev = 129),
                      (ce = (0, i.Z)().mark(function e() {
                        var t, n, u, a, o, c, s, l, f, h, D, m, y;
                        return (0, i.Z)().wrap(
                          function (e) {
                            while (1)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (
                                    ((t = oe.value),
                                    t && "object" == (0, r.Z)(t))
                                  ) {
                                    e.next = 3;
                                    break;
                                  }
                                  return e.abrupt("return", "continue");
                                case 3:
                                  if (
                                    ((n = String(t.family || "").replace(
                                      /^['"]+|['"]+$/g,
                                      "",
                                    )),
                                    !(
                                      !n ||
                                      Y(n) ||
                                      !g.has(n) ||
                                      (null !== p &&
                                        void 0 !== p &&
                                        p.families &&
                                        p.families.some(function (e) {
                                          return (
                                            String(e).toLowerCase() ===
                                            n.toLowerCase()
                                          );
                                        }))
                                    ))
                                  ) {
                                    e.next = 6;
                                    break;
                                  }
                                  return e.abrupt("return", "continue");
                                case 6:
                                  if (
                                    ((u =
                                      null != t.weight
                                        ? String(t.weight)
                                        : "normal"),
                                    (a =
                                      null != t.style
                                        ? String(t.style)
                                        : "normal"),
                                    (o =
                                      null != t.stretchPct
                                        ? "".concat(t.stretchPct, "%")
                                        : "100%"),
                                    (c = String(t.src || "")),
                                    (s = c),
                                    s.startsWith("data:"))
                                  ) {
                                    e.next = 28;
                                    break;
                                  }
                                  if (
                                    null === (l = d.resource) ||
                                    void 0 === l ||
                                    !l.has(c)
                                  ) {
                                    e.next = 12;
                                    break;
                                  }
                                  ((s = d.resource.get(c)),
                                    null === (f = d.font) ||
                                      void 0 === f ||
                                      f.add(c),
                                    (e.next = 28));
                                  break;
                                case 12:
                                  if (
                                    null !== (h = d.font) &&
                                    void 0 !== h &&
                                    h.has(c)
                                  ) {
                                    e.next = 28;
                                    break;
                                  }
                                  return (
                                    (e.prev = 13),
                                    (e.next = 16),
                                    k(c, {
                                      as: "dataURL",
                                      useProxy: v,
                                      silent: !0,
                                    })
                                  );
                                case 16:
                                  if (
                                    ((y = e.sent),
                                    !y.ok || "string" != typeof y.data)
                                  ) {
                                    e.next = 21;
                                    break;
                                  }
                                  ((s = y.data),
                                    null !== (D = d.resource) &&
                                      void 0 !== D &&
                                      D.set(c, s),
                                    null === (m = d.font) ||
                                      void 0 === m ||
                                      m.add(c),
                                    (e.next = 22));
                                  break;
                                case 21:
                                  return e.abrupt("return", "continue");
                                case 22:
                                  e.next = 28;
                                  break;
                                case 24:
                                  return (
                                    (e.prev = 24),
                                    (e.t0 = e["catch"](13)),
                                    z.warn(
                                      "[snapDOM] Failed to fetch localFonts src:",
                                      c,
                                    ),
                                    e.abrupt("return", "continue")
                                  );
                                case 28:
                                  H += "@font-face{font-family:'"
                                    .concat(n, "';src:url(")
                                    .concat(s, ");font-style:")
                                    .concat(a, ";font-weight:")
                                    .concat(u, ";font-stretch:")
                                    .concat(o, ";}");
                                case 29:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          null,
                          [[13, 24]],
                        );
                      })),
                      ie.s());
                  case 132:
                    if ((oe = ie.n()).done) {
                      e.next = 139;
                      break;
                    }
                    return e.delegateYield(ce(), "t11", 134);
                  case 134:
                    if (((se = e.t11), "continue" !== se)) {
                      e.next = 137;
                      break;
                    }
                    return e.abrupt("continue", 137);
                  case 137:
                    e.next = 132;
                    break;
                  case 139:
                    e.next = 144;
                    break;
                  case 141:
                    ((e.prev = 141), (e.t12 = e["catch"](129)), ie.e(e.t12));
                  case 144:
                    return ((e.prev = 144), ie.f(), e.finish(144));
                  case 147:
                    return e.abrupt(
                      "return",
                      (H &&
                        ((H = Ie(H)),
                        null !== (n = d.resource) &&
                          void 0 !== n &&
                          n.set(Z, H)),
                      H),
                    );
                  case 148:
                  case "end":
                    return e.stop();
                }
            },
            e,
            null,
            [
              [5, 18, 21, 24],
              [29, 57, 60, 63],
              [35, 47, 50, 53],
              [69, 81, 84, 87],
              [89, 98, 101, 104],
              [104, 126],
              [106, 118, 121, 124],
              [129, 141, 144, 147],
            ],
          );
        }),
      )),
      je.apply(this, arguments)
    );
  }
  function Ue(e) {
    var t = new Set();
    if (!e) return t;
    var n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, null),
      r = function (e) {
        var n = de(e.fontFamily);
        if (n) {
          var r = function (e, t, r) {
            return ""
              .concat(n, "__")
              .concat(pe(e), "__")
              .concat(he(t), "__")
              .concat(De(r));
          };
          t.add(r(e.fontWeight, e.fontStyle, e.fontStretch));
        }
      };
    r(getComputedStyle(e));
    var u = getComputedStyle(e, "::before");
    u && u.content && "none" !== u.content && r(u);
    var a = getComputedStyle(e, "::after");
    for (a && a.content && "none" !== a.content && r(a); n.nextNode(); ) {
      var i = n.currentNode,
        o = getComputedStyle(i);
      r(o);
      var c = getComputedStyle(i, "::before");
      c && c.content && "none" !== c.content && r(c);
      var s = getComputedStyle(i, "::after");
      s && s.content && "none" !== s.content && r(s);
    }
    return t;
  }
  function We(e) {
    for (
      var t = new Set(),
        n = function (e) {
          if (e) {
            var n,
              r = (0, s.Z)(e);
            try {
              for (r.s(); !(n = r.n()).done; ) {
                var u = n.value;
                t.add(u.codePointAt(0));
              }
            } catch (a) {
              r.e(a);
            } finally {
              r.f();
            }
          }
        },
        r = document.createTreeWalker(
          e,
          NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT,
          null,
        );
      r.nextNode();
    ) {
      var u = r.currentNode;
      if (u.nodeType === Node.TEXT_NODE) n(u.nodeValue || "");
      else if (u.nodeType === Node.ELEMENT_NODE)
        for (var a = u, i = 0, o = ["::before", "::after"]; i < o.length; i++) {
          var c,
            l = o[i],
            f =
              null === (c = getComputedStyle(a, l)) || void 0 === c
                ? void 0
                : c.getPropertyValue("content");
          if (f && "none" !== f)
            if (/^"/.test(f) || /^'/.test(f)) n(f.slice(1, -1));
            else {
              var d = f.match(/\\[0-9A-Fa-f]{1,6}/g);
              if (d) {
                var p,
                  h = (0, s.Z)(d);
                try {
                  for (h.s(); !(p = h.n()).done; ) {
                    var D = p.value;
                    try {
                      t.add(parseInt(D.slice(1), 16));
                    } catch (m) {}
                  }
                } catch (v) {
                  h.e(v);
                } finally {
                  h.f();
                }
              }
            }
        }
    }
    return t;
  }
  function qe(e) {
    return He.apply(this, arguments);
  }
  function He() {
    return (
      (He = (0, c.Z)(
        (0, i.Z)().mark(function e(t) {
          var n,
            r,
            u,
            a,
            o = arguments;
          return (0, i.Z)().wrap(
            function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (n = o.length > 1 && void 0 !== o[1] ? o[1] : 2),
                      (e.prev = 1),
                      (e.next = 4),
                      document.fonts.ready
                    );
                  case 4:
                    e.next = 8;
                    break;
                  case 6:
                    ((e.prev = 6), (e.t0 = e["catch"](1)));
                  case 8:
                    if (
                      ((r = Array.from(t || []).filter(Boolean)),
                      0 !== r.length)
                    ) {
                      e.next = 11;
                      break;
                    }
                    return e.abrupt("return");
                  case 11:
                    ((u = function () {
                      var e = document.createElement("div");
                      e.style.cssText =
                        "position:absolute!important;left:-9999px!important;top:0!important;opacity:0!important;pointer-events:none!important;contain:layout size style;";
                      var t,
                        n = (0, s.Z)(r);
                      try {
                        for (n.s(); !(t = n.n()).done; ) {
                          var u = t.value,
                            a = document.createElement("span");
                          ((a.textContent = "AaBbGg1234ÁÉÍÓÚçñ—∞"),
                            (a.style.fontFamily = '"'.concat(u, '"')),
                            (a.style.fontWeight = "700"),
                            (a.style.fontStyle = "italic"),
                            (a.style.fontSize = "32px"),
                            (a.style.lineHeight = "1"),
                            (a.style.whiteSpace = "nowrap"),
                            (a.style.margin = "0"),
                            (a.style.padding = "0"),
                            e.appendChild(a));
                        }
                      } catch (i) {
                        n.e(i);
                      } finally {
                        n.f();
                      }
                      (document.body.appendChild(e),
                        e.offsetWidth,
                        document.body.removeChild(e));
                    }),
                      (a = 0));
                  case 13:
                    if (!(a < Math.max(1, n))) {
                      e.next = 20;
                      break;
                    }
                    return (
                      u(),
                      (e.next = 17),
                      new Promise(function (e) {
                        return requestAnimationFrame(function () {
                          return requestAnimationFrame(e);
                        });
                      })
                    );
                  case 17:
                    (a++, (e.next = 13));
                    break;
                  case 20:
                  case "end":
                    return e.stop();
                }
            },
            e,
            null,
            [[1, 6]],
          );
        }),
      )),
      He.apply(this, arguments)
    );
  }
  function ze(e, t, n) {
    return Ve.apply(this, arguments);
  }
  function Ve() {
    return (
      (Ve = (0, c.Z)(
        (0, i.Z)().mark(function e(t, n, r) {
          var u,
            a,
            o,
            c,
            s,
            f,
            d,
            p = arguments;
          return (0, i.Z)().wrap(function (e) {
            while (1)
              switch ((e.prev = e.next)) {
                case 0:
                  ((u = p.length > 3 && void 0 !== p[3] ? p[3] : {}),
                    (a = [[t, n]]),
                    (o = [
                      "background-image",
                      "mask",
                      "mask-image",
                      "-webkit-mask",
                      "-webkit-mask-image",
                      "mask-source",
                      "mask-box-image-source",
                      "mask-border-source",
                      "-webkit-mask-box-image-source",
                      "border-image",
                      "border-image-source",
                    ]),
                    (c = [
                      "mask-position",
                      "mask-size",
                      "mask-repeat",
                      "-webkit-mask-position",
                      "-webkit-mask-size",
                      "-webkit-mask-repeat",
                      "mask-origin",
                      "mask-clip",
                      "-webkit-mask-origin",
                      "-webkit-mask-clip",
                      "-webkit-mask-position-x",
                      "-webkit-mask-position-y",
                    ]),
                    (s = [
                      "background-position",
                      "background-position-x",
                      "background-position-y",
                      "background-size",
                      "background-repeat",
                      "background-origin",
                      "background-clip",
                      "background-attachment",
                      "background-blend-mode",
                    ]),
                    (f = [
                      "border-image-slice",
                      "border-image-width",
                      "border-image-outset",
                      "border-image-repeat",
                    ]),
                    (d = (0, i.Z)().mark(function e() {
                      var t,
                        n,
                        d,
                        p,
                        h,
                        D,
                        m,
                        v,
                        g,
                        y,
                        b,
                        F,
                        E,
                        x,
                        C,
                        w,
                        A,
                        k,
                        S,
                        N,
                        M,
                        Z,
                        T,
                        O,
                        I,
                        R,
                        L;
                      return (0, i.Z)().wrap(function (e) {
                        while (1)
                          switch ((e.prev = e.next)) {
                            case 0:
                              for (
                                t = a.shift(),
                                  n = (0, l.Z)(t, 2),
                                  d = n[0],
                                  p = n[1],
                                  h = r.get(d) || W(d),
                                  r.has(d) || r.set(d, h),
                                  D = (function () {
                                    var e = h.getPropertyValue("border-image"),
                                      t = h.getPropertyValue(
                                        "border-image-source",
                                      );
                                    return (
                                      (e && "none" !== e) || (t && "none" !== t)
                                    );
                                  })(),
                                  m = 0,
                                  v = s;
                                m < v.length;
                                m++
                              )
                                ((g = v[m]),
                                  (y = h.getPropertyValue(g)),
                                  y && p.style.setProperty(g, y));
                              ((b = 0), (F = o));
                            case 5:
                              if (!(b < F.length)) {
                                e.next = 18;
                                break;
                              }
                              if (
                                ((E = F[b]),
                                (x = h.getPropertyValue(E)),
                                x && "none" !== x)
                              ) {
                                e.next = 10;
                                break;
                              }
                              return e.abrupt("continue", 15);
                            case 10:
                              return (
                                (C = H(x)),
                                (e.next = 13),
                                Promise.all(
                                  C.map(function (e) {
                                    return B(e, u);
                                  }),
                                )
                              );
                            case 13:
                              ((w = e.sent),
                                w.some(function (e) {
                                  return (
                                    e &&
                                    "none" !== e &&
                                    !/^url\(undefined/.test(e)
                                  );
                                }) && p.style.setProperty(E, w.join(", ")));
                            case 15:
                              (b++, (e.next = 5));
                              break;
                            case 18:
                              for (A = 0, k = c; A < k.length; A++)
                                ((S = k[A]),
                                  (N = h.getPropertyValue(S)),
                                  !N ||
                                    "initial" === N ||
                                    p.style.setProperty(S, N));
                              if (D)
                                for (M = 0, Z = f; M < Z.length; M++)
                                  ((T = Z[M]),
                                    (O = h.getPropertyValue(T)),
                                    !O ||
                                      "initial" === O ||
                                      p.style.setProperty(T, O));
                              for (
                                I = Array.from(d.children),
                                  R = Array.from(p.children).filter(
                                    function (e) {
                                      return !(
                                        e.dataset && e.dataset.snapdomPseudo
                                      );
                                    },
                                  ),
                                  L = 0;
                                L < Math.min(I.length, R.length);
                                L++
                              )
                                a.push([I[L], R[L]]);
                            case 22:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })));
                case 3:
                  if (!a.length) {
                    e.next = 7;
                    break;
                  }
                  return e.delegateYield(d(), "t0", 5);
                case 5:
                  e.next = 3;
                  break;
                case 7:
                case "end":
                  return e.stop();
              }
          }, e);
        }),
      )),
      Ve.apply(this, arguments)
    );
  }
  (n(84944), n(33792), n(34553), n(40561), n(43371));
  var $e = [];
  function Xe(e) {
    if (!e) return null;
    if (Array.isArray(e)) {
      var t = (0, l.Z)(e, 2),
        n = t[0],
        u = t[1];
      return "function" == typeof n ? n(u) : n;
    }
    if ("object" == (0, r.Z)(e) && "plugin" in e) {
      var a = e.plugin,
        i = e.options;
      return "function" == typeof a ? a(i) : a;
    }
    return "function" == typeof e ? e() : e;
  }
  function Ge() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    var r,
      u = t.flat(),
      a = (0, s.Z)(u);
    try {
      var i = function () {
        var e = r.value,
          t = Xe(e);
        t &&
          ($e.some(function (e) {
            return e && e.name && t.name && e.name === t.name;
          }) ||
            $e.push(t));
      };
      for (a.s(); !(r = a.n()).done; ) i();
    } catch (o) {
      a.e(o);
    } finally {
      a.f();
    }
  }
  function Ye(e) {
    return (e && Array.isArray(e.plugins) ? e.plugins : $e) || $e;
  }
  function Ke(e, t, n) {
    return Qe.apply(this, arguments);
  }
  function Qe() {
    return (
      (Qe = (0, c.Z)(
        (0, i.Z)().mark(function e(t, n, u) {
          var a, o, c, l, f, d, p;
          return (0, i.Z)().wrap(
            function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    ((a = u),
                      (o = Ye(n)),
                      (c = (0, s.Z)(o)),
                      (e.prev = 2),
                      c.s());
                  case 4:
                    if ((l = c.n()).done) {
                      e.next = 15;
                      break;
                    }
                    if (
                      ((f = l.value),
                      (d = f && "function" == typeof f[t] ? f[t] : null),
                      d)
                    ) {
                      e.next = 9;
                      break;
                    }
                    return e.abrupt("continue", 13);
                  case 9:
                    return ((e.next = 11), d(n, a));
                  case 11:
                    ((p = e.sent), (0, r.Z)(p) < "u" && (a = p));
                  case 13:
                    e.next = 4;
                    break;
                  case 15:
                    e.next = 20;
                    break;
                  case 17:
                    ((e.prev = 17), (e.t0 = e["catch"](2)), c.e(e.t0));
                  case 20:
                    return ((e.prev = 20), c.f(), e.finish(20));
                  case 23:
                    return e.abrupt("return", a);
                  case 24:
                  case "end":
                    return e.stop();
                }
            },
            e,
            null,
            [[2, 17, 20, 23]],
          );
        }),
      )),
      Qe.apply(this, arguments)
    );
  }
  function Je(e, t, n) {
    return et.apply(this, arguments);
  }
  function et() {
    return (
      (et = (0, c.Z)(
        (0, i.Z)().mark(function e(t, n, u) {
          var a, o, c, l, f, d, p;
          return (0, i.Z)().wrap(
            function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    ((a = []),
                      (o = Ye(n)),
                      (c = (0, s.Z)(o)),
                      (e.prev = 2),
                      c.s());
                  case 4:
                    if ((l = c.n()).done) {
                      e.next = 15;
                      break;
                    }
                    if (
                      ((f = l.value),
                      (d = f && "function" == typeof f[t] ? f[t] : null),
                      d)
                    ) {
                      e.next = 9;
                      break;
                    }
                    return e.abrupt("continue", 13);
                  case 9:
                    return ((e.next = 11), d(n, u));
                  case 11:
                    ((p = e.sent), (0, r.Z)(p) < "u" && a.push(p));
                  case 13:
                    e.next = 4;
                    break;
                  case 15:
                    e.next = 20;
                    break;
                  case 17:
                    ((e.prev = 17), (e.t0 = e["catch"](2)), c.e(e.t0));
                  case 20:
                    return ((e.prev = 20), c.f(), e.finish(20));
                  case 23:
                    return e.abrupt("return", a);
                  case 24:
                  case "end":
                    return e.stop();
                }
            },
            e,
            null,
            [[2, 17, 20, 23]],
          );
        }),
      )),
      et.apply(this, arguments)
    );
  }
  function tt(e) {
    var t = [];
    if (Array.isArray(e)) {
      var n,
        r = (0, s.Z)(e);
      try {
        var u = function () {
          var e = n.value,
            r = Xe(e);
          if (!r || !r.name) return "continue";
          var u = t.findIndex(function (e) {
            return e && e.name === r.name;
          });
          (u >= 0 && t.splice(u, 1), t.push(r));
        };
        for (r.s(); !(n = r.n()).done; ) u();
      } catch (c) {
        r.e(c);
      } finally {
        r.f();
      }
    }
    var a,
      i = (0, s.Z)($e);
    try {
      var o = function () {
        var e = a.value;
        e &&
          e.name &&
          !t.some(function (t) {
            return t.name === e.name;
          }) &&
          t.push(e);
      };
      for (i.s(); !(a = i.n()).done; ) o();
    } catch (c) {
      i.e(c);
    } finally {
      i.f();
    }
    return Object.freeze(t);
  }
  function nt(e, t) {
    var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return (!e || (e.plugins && !n) || (e.plugins = tt(t)), e);
  }
  var rt = n(41452),
    ut = n(25108),
    at = new WeakMap(),
    it = new Map(),
    ot = 0;
  function ct() {
    ot++;
  }
  var st = !1;
  function lt() {
    var e =
      arguments.length > 0 && void 0 !== arguments[0]
        ? arguments[0]
        : document.documentElement;
    if (!st) {
      st = !0;
      try {
        new MutationObserver(function () {
          return ct();
        }).observe(e, {
          subtree: !0,
          childList: !0,
          characterData: !0,
          attributes: !0,
        });
      } catch (u) {}
      try {
        new MutationObserver(function () {
          return ct();
        }).observe(document.head, {
          subtree: !0,
          childList: !0,
          characterData: !0,
          attributes: !0,
        });
      } catch (a) {}
      try {
        var t,
          n,
          r = document.fonts;
        r &&
          (null !== (t = r.addEventListener) &&
            void 0 !== t &&
            t.call(r, "loadingdone", ct),
          null === (n = r.ready) ||
            void 0 === n ||
            n
              .then(function () {
                return ct();
              })
              .catch(function () {}));
      } catch (i) {}
    }
  }
  function ft(e) {
    for (
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = {},
        r = e.getPropertyValue("visibility"),
        u = 0;
      u < e.length;
      u++
    ) {
      var a = e[u],
        i = e.getPropertyValue(a);
      (("background-image" === a || "content" === a) &&
        i.includes("url(") &&
        !i.includes("data:") &&
        (i = "none"),
        (n[a] = i));
    }
    for (
      var o = [
          "text-decoration-line",
          "text-decoration-color",
          "text-decoration-style",
          "text-decoration-thickness",
          "text-underline-offset",
          "text-decoration-skip-ink",
        ],
        c = 0,
        s = o;
      c < s.length;
      c++
    ) {
      var l = s[c];
      if (!n[l])
        try {
          var f = e.getPropertyValue(l);
          f && (n[l] = f);
        } catch (v) {}
    }
    if (t.embedFonts)
      for (
        var d = [
            "font-feature-settings",
            "font-variation-settings",
            "font-kerning",
            "font-variant",
            "font-variant-ligatures",
            "font-optical-sizing",
          ],
          p = 0,
          h = d;
        p < h.length;
        p++
      ) {
        var D = h[p];
        if (!n[D])
          try {
            var m = e.getPropertyValue(D);
            m && (n[D] = m);
          } catch (g) {}
      }
    return ("hidden" === r && (n.opacity = "0"), n);
  }
  var dt = new WeakMap();
  function pt(e) {
    var t = dt.get(e);
    return (
      t ||
      ((t = Object.entries(e)
        .sort(function (e, t) {
          return e[0] < t[0] ? -1 : e[0] > t[0] ? 1 : 0;
        })
        .map(function (e) {
          var t = (0, l.Z)(e, 2),
            n = t[0],
            r = t[1];
          return "".concat(n, ":").concat(r);
        })
        .join(";")),
      dt.set(e, t),
      t)
    );
  }
  function ht(e) {
    var t =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
      n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
      r = at.get(e);
    if (r && r.epoch === ot) return r.snapshot;
    var u = t || getComputedStyle(e),
      a = ft(u, n);
    return (Et(e, u, a), at.set(e, { epoch: ot, snapshot: a }), a);
  }
  function Dt(e, t) {
    return e && e.session && e.persist
      ? e
      : e && (e.styleMap || e.styleCache || e.nodeMap)
        ? {
            session: e,
            persist: {
              snapshotKeyCache: it,
              defaultStyle: d.defaultStyle,
              baseStyle: d.baseStyle,
              image: d.image,
              resource: d.resource,
              background: d.background,
              font: d.font,
            },
            options: t || {},
          }
        : {
            session: d.session,
            persist: {
              snapshotKeyCache: it,
              defaultStyle: d.defaultStyle,
              baseStyle: d.baseStyle,
              image: d.image,
              resource: d.resource,
              background: d.background,
              font: d.font,
            },
            options: e || t || {},
          };
  }
  function mt(e, t, n, r) {
    return vt.apply(this, arguments);
  }
  function vt() {
    return (
      (vt = (0, c.Z)(
        (0, i.Z)().mark(function e(t, n, r, u) {
          var a, o, c, s, l, f, d, p, h, D, m, v, g;
          return (0, i.Z)().wrap(function (e) {
            while (1)
              switch ((e.prev = e.next)) {
                case 0:
                  if ("STYLE" !== t.tagName) {
                    e.next = 2;
                    break;
                  }
                  return e.abrupt("return");
                case 2:
                  ((o = Dt(r, u)),
                    (c = (o.options && o.options.cache) || "auto"),
                    "disabled" !== c && lt(document.documentElement),
                    "disabled" === c &&
                      !o.session.__bumpedForDisabled &&
                      (ct(), it.clear(), (o.session.__bumpedForDisabled = !0)),
                    Z.has(
                      null === (a = t.tagName) || void 0 === a
                        ? void 0
                        : a.toLowerCase(),
                    ) &&
                      ((l =
                        null === (s = t.getAttribute) || void 0 === s
                          ? void 0
                          : s.call(t, "style")),
                      l && n.setAttribute("style", l)),
                    (f = o.session),
                    (d = o.persist),
                    f.styleCache.has(t) ||
                      f.styleCache.set(t, getComputedStyle(t)),
                    (p = f.styleCache.get(t)),
                    (h = ht(t, p, o.options)),
                    (D = pt(h)),
                    (m = d.snapshotKeyCache.get(D)),
                    m ||
                      ((g =
                        (null === (v = t.tagName) || void 0 === v
                          ? void 0
                          : v.toLowerCase()) || "div"),
                      (m = P(h, g)),
                      d.snapshotKeyCache.set(D, m)),
                    f.styleMap.set(n, m));
                case 9:
                case "end":
                  return e.stop();
              }
          }, e);
        }),
      )),
      vt.apply(this, arguments)
    );
  }
  function gt(e) {
    return (
      e instanceof HTMLImageElement ||
      e instanceof HTMLCanvasElement ||
      e instanceof HTMLVideoElement ||
      e instanceof HTMLIFrameElement ||
      e instanceof SVGElement ||
      e instanceof HTMLObjectElement ||
      e instanceof HTMLEmbedElement
    );
  }
  function yt(e) {
    return (
      !!(
        (e.backgroundImage && "none" !== e.backgroundImage) ||
        (e.backgroundColor &&
          "rgba(0, 0, 0, 0)" !== e.backgroundColor &&
          "transparent" !== e.backgroundColor) ||
        (parseFloat(e.borderTopWidth) || 0) > 0 ||
        (parseFloat(e.borderBottomWidth) || 0) > 0 ||
        (parseFloat(e.paddingTop) || 0) > 0 ||
        (parseFloat(e.paddingBottom) || 0) > 0
      ) || "visible" !== (e.overflowBlock || e.overflowY || "visible")
    );
  }
  function bt(e) {
    var t = e.parentElement;
    if (!t) return !1;
    var n = getComputedStyle(t).display || "";
    return n.includes("flex") || n.includes("grid");
  }
  function Ft(e, t) {
    if (e.textContent && /\S/.test(e.textContent)) return !0;
    var n = e.firstElementChild,
      r = e.lastElementChild;
    if ((n && "BR" === n.tagName) || (r && "BR" === r.tagName)) return !0;
    var u = e.scrollHeight;
    if (0 === u) return !1;
    var a = parseFloat(t.paddingTop) || 0,
      i = parseFloat(t.paddingBottom) || 0;
    return u > a + i;
  }
  function Et(e, t, n) {
    if (!(e instanceof HTMLElement && e.style && e.style.height)) {
      var r = e.tagName && e.tagName.toLowerCase();
      if (
        r &&
        ("div" === r ||
          "section" === r ||
          "article" === r ||
          "main" === r ||
          "aside" === r ||
          "header" === r ||
          "footer" === r ||
          "nav" === r)
      ) {
        var u = t.display || "";
        if (!(u.includes("flex") || u.includes("grid") || gt(e))) {
          var a = t.position;
          if (
            "absolute" !== a &&
            "fixed" !== a &&
            "sticky" !== a &&
            "none" === t.transform &&
            !yt(t) &&
            !bt(e)
          ) {
            var i = t.overflowX || t.overflow || "visible",
              o = t.overflowY || t.overflow || "visible";
            if ("visible" === i && "visible" === o) {
              var c = t.clip;
              (c && "auto" !== c && "rect(auto, auto, auto, auto)" !== c) ||
                "hidden" === t.visibility ||
                "0" === t.opacity ||
                (Ft(e, t) && (delete n.height, delete n["block-size"]));
            }
          }
        }
      }
    }
  }
  var xt = ["fill", "stroke", "color", "background-color", "stop-color"],
    Ct = new Map();
  function wt(e, t) {
    var n = t + "::" + e.toLowerCase(),
      r = Ct.get(n);
    if (r) return r;
    var u = document,
      a =
        "http://www.w3.org/2000/svg" === t
          ? u.createElementNS(t, e)
          : u.createElement(e),
      i = u.createElement("div");
    ((i.style.cssText =
      "position:absolute;left:-99999px;top:-99999px;contain:strict;display:block;"),
      i.appendChild(a),
      u.documentElement.appendChild(i));
    var o,
      c = getComputedStyle(a),
      l = {},
      f = (0, s.Z)(xt);
    try {
      for (f.s(); !(o = f.n()).done; ) {
        var d = o.value;
        l[d] = c.getPropertyValue(d) || "";
      }
    } catch (p) {
      f.e(p);
    } finally {
      f.f();
    }
    return (i.remove(), Ct.set(n, l), l);
  }
  function At(e, t) {
    var n, r, u;
    if (e instanceof Element && t instanceof Element) {
      var a =
          null === (n = e.getAttribute) || void 0 === n
            ? void 0
            : n.call(e, "style"),
        i = !(!a || !a.includes("var("));
      if (!i && null !== (r = e.attributes) && void 0 !== r && r.length)
        for (var o = e.attributes, c = 0; c < o.length; c++) {
          var l = o[c];
          if (l && "string" == typeof l.value && l.value.includes("var(")) {
            i = !0;
            break;
          }
        }
      var f = null;
      if (i)
        try {
          f = getComputedStyle(e);
        } catch (B) {}
      if (i) {
        var d = e.style;
        if (d && d.length)
          for (var p = 0; p < d.length; p++) {
            var h = d[p],
              D = d.getPropertyValue(h);
            if (D && D.includes("var(")) {
              var m = f && f.getPropertyValue(h);
              if (m)
                try {
                  t.style.setProperty(h, m.trim(), d.getPropertyPriority(h));
                } catch (N) {}
            }
          }
      }
      if (i && null !== (u = e.attributes) && void 0 !== u && u.length)
        for (var v = e.attributes, g = 0; g < v.length; g++) {
          var y = v[g];
          if (y && "string" == typeof y.value && y.value.includes("var(")) {
            var b = y.name,
              F = f && f.getPropertyValue(b);
            if (F)
              try {
                t.style.setProperty(b, F.trim());
              } catch (M) {}
          }
        }
      if (!i) {
        if (!f)
          try {
            f = getComputedStyle(e);
          } catch (Z) {
            f = null;
          }
        if (!f) return;
        var E,
          x = e.namespaceURI || "html",
          C = wt(e.tagName, x),
          w = (0, s.Z)(xt);
        try {
          for (w.s(); !(E = w.n()).done; ) {
            var A = E.value,
              k = f.getPropertyValue(A) || "",
              S = C[A] || "";
            if (k && k !== S)
              try {
                t.style.setProperty(A, k.trim());
              } catch (T) {}
          }
        } catch (O) {
          w.e(O);
        } finally {
          w.f();
        }
      }
    }
  }
  function kt(e, t, n) {
    return Promise.all(
      e.map(function (e) {
        return new Promise(function (r) {
          function u() {
            (0, rt.a)(
              function (n) {
                !n ||
                "function" != typeof n.timeRemaining ||
                n.timeRemaining() > 0
                  ? t(e, r)
                  : u();
              },
              { fast: n },
            );
          }
          u();
        });
      }),
    );
  }
  function St(e) {
    return (
      (e = e.trim()),
      !e || /:not\(\s*\[data-sd-slotted\]\s*\)\s*$/.test(e)
        ? e
        : "".concat(e, ":not([data-sd-slotted])")
    );
  }
  function Bt(e, t) {
    var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
    return e
      .split(",")
      .map(function (e) {
        return e.trim();
      })
      .filter(Boolean)
      .map(function (e) {
        if (e.startsWith(":where(") || e.startsWith("@")) return e;
        var r = n ? St(e) : e;
        return ":where(".concat(t, " ").concat(r, ")");
      })
      .join(", ");
  }
  function Nt(e, t) {
    return e
      ? ((e = e.replace(/:host\(([^)]+)\)/g, function (e, n) {
          return ":where(".concat(t, ":is(").concat(n.trim(), "))");
        })),
        (e = e.replace(/:host\b/g, ":where(".concat(t, ")"))),
        (e = e.replace(/:host-context\(([^)]+)\)/g, function (e, n) {
          return ":where(:where(".concat(n.trim(), ") ").concat(t, ")");
        })),
        (e = e.replace(/::slotted\(([^)]+)\)/g, function (e, n) {
          return ":where(".concat(t, " ").concat(n.trim(), ")");
        })),
        (e = e.replace(/(^|})(\s*)([^@}{]+){/g, function (e, n, r, u) {
          var a = Bt(u, t, !0);
          return "".concat(n).concat(r).concat(a, "{");
        })),
        e)
      : "";
  }
  function Mt(e) {
    return (
      (e.shadowScopeSeq = (e.shadowScopeSeq || 0) + 1),
      "s".concat(e.shadowScopeSeq)
    );
  }
  function Zt(e) {
    var t = "";
    try {
      e.querySelectorAll("style").forEach(function (e) {
        t += (e.textContent || "") + "\n";
      });
      var n,
        r = e.adoptedStyleSheets || [],
        u = (0, s.Z)(r);
      try {
        for (u.s(); !(n = u.n()).done; ) {
          var a = n.value;
          try {
            if (a && a.cssRules) {
              var i,
                o = (0, s.Z)(a.cssRules);
              try {
                for (o.s(); !(i = o.n()).done; ) {
                  var c = i.value;
                  t += c.cssText + "\n";
                }
              } catch (l) {
                o.e(l);
              } finally {
                o.f();
              }
            }
          } catch (f) {}
        }
      } catch (l) {
        u.e(l);
      } finally {
        u.f();
      }
    } catch (d) {}
    return t;
  }
  function Tt(e, t, n) {
    if (t) {
      var r = document.createElement("style");
      (r.setAttribute("data-sd", n),
        (r.textContent = t),
        e.insertBefore(r, e.firstChild || null));
    }
  }
  function Ot(e, t) {
    try {
      var n = e.currentSrc || e.src || "";
      if (!n) return;
      (t.setAttribute("src", n),
        t.removeAttribute("srcset"),
        t.removeAttribute("sizes"),
        (t.loading = "eager"),
        (t.decoding = "sync"));
    } catch (r) {}
  }
  function It(e) {
    var t = new Set();
    if (!e) return t;
    for (var n, r = /var\(\s*(--[A-Za-z0-9_-]+)\b/g; (n = r.exec(e)); )
      t.add(n[1]);
    return t;
  }
  function Rt(e, t) {
    try {
      var n = getComputedStyle(e).getPropertyValue(t).trim();
      if (n) return n;
    } catch (u) {}
    try {
      var r = getComputedStyle(document.documentElement)
        .getPropertyValue(t)
        .trim();
      if (r) return r;
    } catch (a) {}
    return "";
  }
  function Lt(e, t, n) {
    var r,
      u = [],
      a = (0, s.Z)(t);
    try {
      for (a.s(); !(r = a.n()).done; ) {
        var i = r.value,
          o = Rt(e, i);
        o && u.push("".concat(i, ": ").concat(o, ";"));
      }
    } catch (c) {
      a.e(c);
    } finally {
      a.f();
    }
    return u.length ? "".concat(n, "{").concat(u.join(""), "}\n") : "";
  }
  function Pt(e) {
    e &&
      (e.nodeType === Node.ELEMENT_NODE &&
        e.setAttribute("data-sd-slotted", ""),
      e.querySelectorAll &&
        e.querySelectorAll("*").forEach(function (e) {
          return e.setAttribute("data-sd-slotted", "");
        }));
  }
  function _t(e) {
    return jt.apply(this, arguments);
  }
  function jt() {
    return (
      (jt = (0, c.Z)(
        (0, i.Z)().mark(function e(t) {
          var n,
            r,
            u,
            a,
            o = arguments;
          return (0, i.Z)().wrap(function (e) {
            while (1)
              switch ((e.prev = e.next)) {
                case 0:
                  ((n = o.length > 1 && void 0 !== o[1] ? o[1] : 3),
                    (r = function () {
                      try {
                        var e;
                        return (
                          t.contentDocument ||
                          (null === (e = t.contentWindow) || void 0 === e
                            ? void 0
                            : e.document) ||
                          null
                        );
                      } catch (n) {
                        return null;
                      }
                    }),
                    (u = r()),
                    (a = 0));
                case 2:
                  if (!(a < n) || (u && (u.body || u.documentElement))) {
                    e.next = 9;
                    break;
                  }
                  return (
                    (e.next = 5),
                    new Promise(function (e) {
                      return setTimeout(e, 0);
                    })
                  );
                case 5:
                  ((u = r()), a++);
                case 7:
                  e.next = 2;
                  break;
                case 9:
                  return e.abrupt(
                    "return",
                    u && (u.body || u.documentElement) ? u : null,
                  );
                case 10:
                case "end":
                  return e.stop();
              }
          }, e);
        }),
      )),
      jt.apply(this, arguments)
    );
  }
  function Ut(e) {
    var t = e.getBoundingClientRect(),
      n = 0,
      r = 0,
      u = 0,
      a = 0;
    try {
      var i = getComputedStyle(e);
      ((n = parseFloat(i.borderLeftWidth) || 0),
        (r = parseFloat(i.borderRightWidth) || 0),
        (u = parseFloat(i.borderTopWidth) || 0),
        (a = parseFloat(i.borderBottomWidth) || 0));
    } catch (s) {}
    var o = Math.max(0, Math.round(t.width - (n + r))),
      c = Math.max(0, Math.round(t.height - (u + a)));
    return { contentWidth: o, contentHeight: c, rect: t };
  }
  function Wt(e, t, n) {
    var r = e.createElement("style");
    return (
      r.setAttribute("data-sd-iframe-pin", ""),
      (r.textContent =
        "html, body {margin: 0 !important;padding: 0 !important;width: "
          .concat(t, "px !important;height: ")
          .concat(n, "px !important;min-width: ")
          .concat(t, "px !important;min-height: ")
          .concat(
            n,
            "px !important;box-sizing: border-box !important;overflow: hidden !important;background-clip: border-box !important;}",
          )),
      (e.head || e.documentElement).appendChild(r),
      function () {
        try {
          r.remove();
        } catch (e) {}
      }
    );
  }
  function qt(e, t, n) {
    return Ht.apply(this, arguments);
  }
  function Ht() {
    return (
      (Ht = (0, c.Z)(
        (0, i.Z)().mark(function e(t, n, r) {
          var u, a, c, s, l, f, d, p, h, D;
          return (0, i.Z)().wrap(
            function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return ((e.next = 2), _t(t, 3));
                  case 2:
                    if (((u = e.sent), u)) {
                      e.next = 5;
                      break;
                    }
                    throw new Error("iframe document not accessible/ready");
                  case 5:
                    if (
                      ((a = Ut(t)),
                      (c = a.contentWidth),
                      (s = a.contentHeight),
                      (l = a.rect),
                      (f = null === r || void 0 === r ? void 0 : r.snap),
                      f && "function" == typeof f.toPng)
                    ) {
                      e.next = 8;
                      break;
                    }
                    throw new Error(
                      "snapdom.toPng not available in iframe or window",
                    );
                  case 8:
                    return (
                      (d = (0, o.Z)((0, o.Z)({}, r), {}, { scale: 1 })),
                      (p = Wt(u, c, s)),
                      (e.prev = 9),
                      (e.next = 12),
                      f.toPng(u.documentElement, d)
                    );
                  case 12:
                    h = e.sent;
                  case 13:
                    return ((e.prev = 13), p(), e.finish(13));
                  case 16:
                    return (
                      (h.style.display = "block"),
                      (h.style.width = "".concat(c, "px")),
                      (h.style.height = "".concat(s, "px")),
                      (D = document.createElement("div")),
                      e.abrupt(
                        "return",
                        (n.nodeMap.set(D, t),
                        mt(t, D, n, r),
                        (D.style.overflow = "hidden"),
                        (D.style.display = "block"),
                        D.style.width ||
                          (D.style.width = "".concat(
                            Math.round(l.width),
                            "px",
                          )),
                        D.style.height ||
                          (D.style.height = "".concat(
                            Math.round(l.height),
                            "px",
                          )),
                        D.appendChild(h),
                        D),
                      )
                    );
                  case 19:
                  case "end":
                    return e.stop();
                }
            },
            e,
            null,
            [[9, , 13, 16]],
          );
        }),
      )),
      Ht.apply(this, arguments)
    );
  }
  var zt = new Map();
  function Vt(e) {
    return $t.apply(this, arguments);
  }
  function $t() {
    return (
      ($t = (0, c.Z)(
        (0, i.Z)().mark(function e(t) {
          var n, r, u;
          return (0, i.Z)().wrap(
            function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (
                      null === (n = d.resource) ||
                      void 0 === n ||
                      !n.has(t)
                    ) {
                      e.next = 2;
                      break;
                    }
                    return e.abrupt("return", d.resource.get(t));
                  case 2:
                    if (!zt.has(t)) {
                      e.next = 4;
                      break;
                    }
                    return e.abrupt("return", zt.get(t));
                  case 4:
                    return (
                      (r = (0, c.Z)(
                        (0, i.Z)().mark(function e() {
                          var n, r;
                          return (0, i.Z)().wrap(function (e) {
                            while (1)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.next = 2),
                                    k(t, { as: "dataURL", silent: !0 })
                                  );
                                case 2:
                                  if (
                                    ((r = e.sent),
                                    r.ok && "string" == typeof r.data)
                                  ) {
                                    e.next = 5;
                                    break;
                                  }
                                  throw new Error(
                                    "[snapDOM] Failed to read blob URL: ".concat(
                                      t,
                                    ),
                                  );
                                case 5:
                                  return e.abrupt(
                                    "return",
                                    (null !== (n = d.resource) &&
                                      void 0 !== n &&
                                      n.set(t, r.data),
                                    r.data),
                                  );
                                case 6:
                                case "end":
                                  return e.stop();
                              }
                          }, e);
                        }),
                      )()),
                      zt.set(t, r),
                      (e.prev = 6),
                      (e.next = 9),
                      r
                    );
                  case 9:
                    return (
                      (u = e.sent),
                      e.abrupt("return", (zt.set(t, u), u))
                    );
                  case 13:
                    throw (
                      (e.prev = 13),
                      (e.t0 = e["catch"](6)),
                      zt.delete(t),
                      e.t0
                    );
                  case 16:
                  case "end":
                    return e.stop();
                }
            },
            e,
            null,
            [[6, 13]],
          );
        }),
      )),
      $t.apply(this, arguments)
    );
  }
  var Xt = /\bblob:[^)"'\s]+/g;
  function Gt(e) {
    return Yt.apply(this, arguments);
  }
  function Yt() {
    return (
      (Yt = (0, c.Z)(
        (0, i.Z)().mark(function e(t) {
          var n, r, u, a, o, c;
          return (0, i.Z)().wrap(
            function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (t && -1 !== t.indexOf("blob:")) {
                      e.next = 2;
                      break;
                    }
                    return e.abrupt("return", t);
                  case 2:
                    if (
                      ((n = Array.from(new Set(t.match(Xt) || []))),
                      0 !== n.length)
                    ) {
                      e.next = 5;
                      break;
                    }
                    return e.abrupt("return", t);
                  case 5:
                    ((r = t), (u = 0), (a = n));
                  case 7:
                    if (!(u < a.length)) {
                      e.next = 21;
                      break;
                    }
                    return ((o = a[u]), (e.prev = 9), (e.next = 12), Vt(o));
                  case 12:
                    ((c = e.sent), (r = r.split(o).join(c)), (e.next = 18));
                    break;
                  case 16:
                    ((e.prev = 16), (e.t0 = e["catch"](9)));
                  case 18:
                    (u++, (e.next = 7));
                    break;
                  case 21:
                    return e.abrupt("return", r);
                  case 22:
                  case "end":
                    return e.stop();
                }
            },
            e,
            null,
            [[9, 16]],
          );
        }),
      )),
      Yt.apply(this, arguments)
    );
  }
  function Kt(e) {
    return "string" == typeof e && e.startsWith("blob:");
  }
  function Qt(e) {
    return (e || "")
      .split(",")
      .map(function (e) {
        return e.trim();
      })
      .filter(Boolean)
      .map(function (e) {
        var t = e.match(/^(\S+)(\s+.+)?$/);
        return t ? { url: t[1], desc: t[2] || "" } : null;
      })
      .filter(Boolean);
  }
  function Jt(e) {
    return e
      .map(function (e) {
        return e.desc ? "".concat(e.url, " ").concat(e.desc.trim()) : e.url;
      })
      .join(", ");
  }
  function en(e) {
    return tn.apply(this, arguments);
  }
  function tn() {
    return (
      (tn = (0, c.Z)(
        (0, i.Z)().mark(function e(t) {
          var n,
            r,
            u,
            a,
            o,
            c,
            l,
            f,
            d,
            p,
            h,
            D,
            m,
            v,
            g,
            y,
            b,
            F,
            E,
            x,
            C,
            w,
            A,
            k,
            S,
            B,
            N,
            M,
            Z,
            T,
            O,
            I,
            R,
            L,
            P,
            _,
            j,
            U,
            W,
            q,
            H;
          return (0, i.Z)().wrap(
            function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (t) {
                      e.next = 2;
                      break;
                    }
                    return e.abrupt("return");
                  case 2:
                    ((n = t.querySelectorAll ? t.querySelectorAll("img") : []),
                      (r = (0, s.Z)(n)),
                      (e.prev = 4),
                      r.s());
                  case 6:
                    if ((u = r.n()).done) {
                      e.next = 50;
                      break;
                    }
                    if (
                      ((a = u.value),
                      (e.prev = 8),
                      (o = a.getAttribute("src") || a.currentSrc || ""),
                      !Kt(o))
                    ) {
                      e.next = 15;
                      break;
                    }
                    return ((e.next = 13), Vt(o));
                  case 13:
                    ((c = e.sent), a.setAttribute("src", c));
                  case 15:
                    if (
                      ((l = a.getAttribute("srcset")),
                      !l || !l.includes("blob:"))
                    ) {
                      e.next = 44;
                      break;
                    }
                    ((f = Qt(l)),
                      (d = !1),
                      (p = (0, s.Z)(f)),
                      (e.prev = 19),
                      p.s());
                  case 21:
                    if ((h = p.n()).done) {
                      e.next = 35;
                      break;
                    }
                    if (((D = h.value), !Kt(D.url))) {
                      e.next = 33;
                      break;
                    }
                    return ((e.prev = 24), (e.next = 27), Vt(D.url));
                  case 27:
                    ((D.url = e.sent), (d = !0), (e.next = 33));
                    break;
                  case 31:
                    ((e.prev = 31), (e.t0 = e["catch"](24)));
                  case 33:
                    e.next = 21;
                    break;
                  case 35:
                    e.next = 40;
                    break;
                  case 37:
                    ((e.prev = 37), (e.t1 = e["catch"](19)), p.e(e.t1));
                  case 40:
                    return ((e.prev = 40), p.f(), e.finish(40));
                  case 43:
                    d && a.setAttribute("srcset", Jt(f));
                  case 44:
                    e.next = 48;
                    break;
                  case 46:
                    ((e.prev = 46), (e.t2 = e["catch"](8)));
                  case 48:
                    e.next = 6;
                    break;
                  case 50:
                    e.next = 55;
                    break;
                  case 52:
                    ((e.prev = 52), (e.t3 = e["catch"](4)), r.e(e.t3));
                  case 55:
                    return ((e.prev = 55), r.f(), e.finish(55));
                  case 58:
                    ((m = t.querySelectorAll
                      ? t.querySelectorAll("image")
                      : []),
                      (v = (0, s.Z)(m)),
                      (e.prev = 60),
                      v.s());
                  case 62:
                    if ((g = v.n()).done) {
                      e.next = 77;
                      break;
                    }
                    if (
                      ((y = g.value),
                      (e.prev = 64),
                      (F = "http://www.w3.org/1999/xlink"),
                      (E =
                        y.getAttribute("href") ||
                        (null === (b = y.getAttributeNS) || void 0 === b
                          ? void 0
                          : b.call(y, F, "href"))),
                      !Kt(E))
                    ) {
                      e.next = 71;
                      break;
                    }
                    return ((e.next = 69), Vt(E));
                  case 69:
                    ((C = e.sent),
                      y.setAttribute("href", C),
                      null === (x = y.removeAttributeNS) ||
                        void 0 === x ||
                        x.call(y, F, "href"));
                  case 71:
                    e.next = 75;
                    break;
                  case 73:
                    ((e.prev = 73), (e.t4 = e["catch"](64)));
                  case 75:
                    e.next = 62;
                    break;
                  case 77:
                    e.next = 82;
                    break;
                  case 79:
                    ((e.prev = 79), (e.t5 = e["catch"](60)), v.e(e.t5));
                  case 82:
                    return ((e.prev = 82), v.f(), e.finish(82));
                  case 85:
                    ((w = t.querySelectorAll
                      ? t.querySelectorAll("[style*='blob:']")
                      : []),
                      (A = (0, s.Z)(w)),
                      (e.prev = 87),
                      A.s());
                  case 89:
                    if ((k = A.n()).done) {
                      e.next = 104;
                      break;
                    }
                    if (
                      ((S = k.value),
                      (e.prev = 91),
                      (B = S.getAttribute("style")),
                      !B || !B.includes("blob:"))
                    ) {
                      e.next = 98;
                      break;
                    }
                    return ((e.next = 96), Gt(B));
                  case 96:
                    ((N = e.sent), S.setAttribute("style", N));
                  case 98:
                    e.next = 102;
                    break;
                  case 100:
                    ((e.prev = 100), (e.t6 = e["catch"](91)));
                  case 102:
                    e.next = 89;
                    break;
                  case 104:
                    e.next = 109;
                    break;
                  case 106:
                    ((e.prev = 106), (e.t7 = e["catch"](87)), A.e(e.t7));
                  case 109:
                    return ((e.prev = 109), A.f(), e.finish(109));
                  case 112:
                    ((M = t.querySelectorAll
                      ? t.querySelectorAll("style")
                      : []),
                      (Z = (0, s.Z)(M)),
                      (e.prev = 114),
                      Z.s());
                  case 116:
                    if ((T = Z.n()).done) {
                      e.next = 131;
                      break;
                    }
                    if (
                      ((O = T.value),
                      (e.prev = 118),
                      (I = O.textContent || ""),
                      (e.t8 = I.includes("blob:")),
                      !e.t8)
                    ) {
                      e.next = 125;
                      break;
                    }
                    return ((e.next = 124), Gt(I));
                  case 124:
                    O.textContent = e.sent;
                  case 125:
                    e.next = 129;
                    break;
                  case 127:
                    ((e.prev = 127), (e.t9 = e["catch"](118)));
                  case 129:
                    e.next = 116;
                    break;
                  case 131:
                    e.next = 136;
                    break;
                  case 133:
                    ((e.prev = 133), (e.t10 = e["catch"](114)), Z.e(e.t10));
                  case 136:
                    return ((e.prev = 136), Z.f(), e.finish(136));
                  case 139:
                    ((R = ["poster"]), (L = 0), (P = R));
                  case 141:
                    if (!(L < P.length)) {
                      e.next = 176;
                      break;
                    }
                    ((_ = P[L]),
                      (j = t.querySelectorAll
                        ? t.querySelectorAll("[".concat(_, "^='blob:']"))
                        : []),
                      (U = (0, s.Z)(j)),
                      (e.prev = 145),
                      U.s());
                  case 147:
                    if ((W = U.n()).done) {
                      e.next = 165;
                      break;
                    }
                    if (
                      ((q = W.value),
                      (e.prev = 149),
                      (H = q.getAttribute(_)),
                      (e.t11 = Kt(H)),
                      !e.t11)
                    ) {
                      e.next = 159;
                      break;
                    }
                    return ((e.t12 = q), (e.t13 = _), (e.next = 157), Vt(H));
                  case 157:
                    ((e.t14 = e.sent),
                      e.t12.setAttribute.call(e.t12, e.t13, e.t14));
                  case 159:
                    e.next = 163;
                    break;
                  case 161:
                    ((e.prev = 161), (e.t15 = e["catch"](149)));
                  case 163:
                    e.next = 147;
                    break;
                  case 165:
                    e.next = 170;
                    break;
                  case 167:
                    ((e.prev = 167), (e.t16 = e["catch"](145)), U.e(e.t16));
                  case 170:
                    return ((e.prev = 170), U.f(), e.finish(170));
                  case 173:
                    (L++, (e.next = 141));
                    break;
                  case 176:
                  case "end":
                    return e.stop();
                }
            },
            e,
            null,
            [
              [4, 52, 55, 58],
              [8, 46],
              [19, 37, 40, 43],
              [24, 31],
              [60, 79, 82, 85],
              [64, 73],
              [87, 106, 109, 112],
              [91, 100],
              [114, 133, 136, 139],
              [118, 127],
              [145, 167, 170, 173],
              [149, 161],
            ],
          );
        }),
      )),
      tn.apply(this, arguments)
    );
  }
  function nn(e, t, n) {
    return rn.apply(this, arguments);
  }
  function rn() {
    return (
      (rn = (0, c.Z)(
        (0, i.Z)().mark(function e(t, n, r) {
          var a,
            o,
            c,
            l,
            f,
            d,
            p,
            h,
            D,
            m,
            v,
            g,
            y,
            b,
            F,
            E,
            x,
            C,
            w,
            A,
            k,
            S,
            B,
            N,
            Z,
            T,
            O,
            I,
            R,
            L,
            P,
            _,
            j,
            U,
            W,
            q,
            H,
            z,
            V,
            $,
            X,
            G,
            Y,
            K,
            Q,
            J,
            ee,
            te,
            ne,
            re,
            ue,
            ae,
            ie,
            oe,
            ce,
            se,
            le,
            fe,
            de,
            pe,
            he,
            De,
            me,
            ve,
            ge,
            ye,
            be,
            Fe,
            Ee,
            xe,
            Ce,
            we,
            Ae,
            ke,
            Se,
            Be,
            Ne,
            Me;
          return (0, i.Z)().wrap(
            function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (
                      ((ke = function (e, t) {
                        if (o.has(e)) return t(null);
                        nn(e, n, r)
                          .then(function (e) {
                            t(e || null);
                          })
                          .catch(function () {
                            t(null);
                          });
                      }),
                      t)
                    ) {
                      e.next = 3;
                      break;
                    }
                    throw new Error("Invalid node");
                  case 3:
                    if (
                      ((o = new Set()),
                      (c = null),
                      (l = null),
                      t.nodeType !== Node.ELEMENT_NODE)
                    ) {
                      e.next = 8;
                      break;
                    }
                    if (
                      ((f = (t.localName || t.tagName || "").toLowerCase()),
                      "snapdom-sandbox" !== t.id &&
                        !t.hasAttribute("data-snapdom-sandbox") &&
                        !M.has(f))
                    ) {
                      e.next = 8;
                      break;
                    }
                    return e.abrupt("return", null);
                  case 8:
                    if (
                      t.nodeType !== Node.TEXT_NODE &&
                      t.nodeType === Node.ELEMENT_NODE
                    ) {
                      e.next = 10;
                      break;
                    }
                    return e.abrupt("return", t.cloneNode(!0));
                  case 10:
                    if ("exclude" !== t.getAttribute("data-capture")) {
                      e.next = 18;
                      break;
                    }
                    if ("hide" !== r.excludeMode) {
                      e.next = 16;
                      break;
                    }
                    return (
                      (d = document.createElement("div")),
                      (p = t.getBoundingClientRect()),
                      e.abrupt(
                        "return",
                        ((d.style.cssText = "display:inline-block;width:"
                          .concat(p.width, "px;height:")
                          .concat(p.height, "px;visibility:hidden;")),
                        d),
                      )
                    );
                  case 16:
                    if ("remove" !== r.excludeMode) {
                      e.next = 18;
                      break;
                    }
                    return e.abrupt("return", null);
                  case 18:
                    if (!r.exclude || !Array.isArray(r.exclude)) {
                      e.next = 48;
                      break;
                    }
                    ((h = (0, s.Z)(r.exclude)), (e.prev = 20), h.s());
                  case 22:
                    if ((D = h.n()).done) {
                      e.next = 40;
                      break;
                    }
                    if (
                      ((m = D.value),
                      (e.prev = 24),
                      null === (v = t.matches) || void 0 === v || !v.call(t, m))
                    ) {
                      e.next = 33;
                      break;
                    }
                    if ("hide" !== r.excludeMode) {
                      e.next = 31;
                      break;
                    }
                    return (
                      (g = document.createElement("div")),
                      (y = t.getBoundingClientRect()),
                      e.abrupt(
                        "return",
                        ((g.style.cssText = "display:inline-block;width:"
                          .concat(y.width, "px;height:")
                          .concat(y.height, "px;visibility:hidden;")),
                        g),
                      )
                    );
                  case 31:
                    if ("remove" !== r.excludeMode) {
                      e.next = 33;
                      break;
                    }
                    return e.abrupt("return", null);
                  case 33:
                    e.next = 38;
                    break;
                  case 35:
                    ((e.prev = 35),
                      (e.t0 = e["catch"](24)),
                      ut.warn(
                        "Invalid selector in exclude option: ".concat(m),
                        e.t0,
                      ));
                  case 38:
                    e.next = 22;
                    break;
                  case 40:
                    e.next = 45;
                    break;
                  case 42:
                    ((e.prev = 42), (e.t1 = e["catch"](20)), h.e(e.t1));
                  case 45:
                    return ((e.prev = 45), h.f(), e.finish(45));
                  case 48:
                    if ("function" != typeof r.filter) {
                      e.next = 63;
                      break;
                    }
                    if (((e.prev = 49), r.filter(t))) {
                      e.next = 58;
                      break;
                    }
                    if ("hide" !== r.filterMode) {
                      e.next = 56;
                      break;
                    }
                    return (
                      (b = document.createElement("div")),
                      (F = t.getBoundingClientRect()),
                      e.abrupt(
                        "return",
                        ((b.style.cssText = "display:inline-block;width:"
                          .concat(F.width, "px;height:")
                          .concat(F.height, "px;visibility:hidden;")),
                        b),
                      )
                    );
                  case 56:
                    if ("remove" !== r.filterMode) {
                      e.next = 58;
                      break;
                    }
                    return e.abrupt("return", null);
                  case 58:
                    e.next = 63;
                    break;
                  case 60:
                    ((e.prev = 60),
                      (e.t2 = e["catch"](49)),
                      ut.warn("Error in filter function:", e.t2));
                  case 63:
                    if ("IFRAME" !== t.tagName) {
                      e.next = 83;
                      break;
                    }
                    E = !1;
                    try {
                      E = !!(
                        t.contentDocument ||
                        (null !== (x = t.contentWindow) &&
                          void 0 !== x &&
                          x.document)
                      );
                    } catch (i) {
                      E = !1;
                    }
                    if (!E) {
                      e.next = 76;
                      break;
                    }
                    return ((e.prev = 67), (e.next = 70), qt(t, n, r));
                  case 70:
                    return e.abrupt("return", e.sent);
                  case 73:
                    ((e.prev = 73),
                      (e.t3 = e["catch"](67)),
                      ut.warn(
                        "[SnapDOM] iframe rasterization failed, fallback:",
                        e.t3,
                      ));
                  case 76:
                    if (!r.placeholders) {
                      e.next = 81;
                      break;
                    }
                    return (
                      (C = document.createElement("div")),
                      e.abrupt(
                        "return",
                        ((C.style.cssText = "width:"
                          .concat(t.offsetWidth, "px;height:")
                          .concat(
                            t.offsetHeight,
                            "px;background-image:repeating-linear-gradient(45deg,#ddd,#ddd 5px,#f9f9f9 5px,#f9f9f9 10px);display:flex;align-items:center;justify-content:center;font-size:12px;color:#555;border:1px solid #aaa;",
                          )),
                        mt(t, C, n, r),
                        C),
                      )
                    );
                  case 81:
                    return (
                      (w = t.getBoundingClientRect()),
                      (A = document.createElement("div")),
                      e.abrupt(
                        "return",
                        ((A.style.cssText = "display:inline-block;width:"
                          .concat(w.width, "px;height:")
                          .concat(w.height, "px;visibility:hidden;")),
                        mt(t, A, n, r),
                        A),
                      )
                    );
                  case 83:
                    if ("placeholder" !== t.getAttribute("data-capture")) {
                      e.next = 88;
                      break;
                    }
                    return (
                      (k = t.cloneNode(!1)),
                      n.nodeMap.set(k, t),
                      mt(t, k, n, r),
                      (S = document.createElement("div")),
                      e.abrupt(
                        "return",
                        ((S.textContent =
                          t.getAttribute("data-placeholder-text") || ""),
                        (S.style.cssText =
                          "color:#666;font-size:12px;text-align:center;line-height:1.4;padding:0.5em;box-sizing:border-box;"),
                        k.appendChild(S),
                        k),
                      )
                    );
                  case 88:
                    if ("CANVAS" !== t.tagName) {
                      e.next = 115;
                      break;
                    }
                    ((B = ""),
                      (e.prev = 90),
                      (N = t.getContext("2d", { willReadFrequently: !0 })));
                    try {
                      N && N.getImageData(0, 0, 1, 1);
                    } catch (Ze) {}
                    return (
                      (e.next = 95),
                      new Promise(function (e) {
                        return requestAnimationFrame(e);
                      })
                    );
                  case 95:
                    if (((B = t.toDataURL("image/png")), B && "data:," !== B)) {
                      e.next = 106;
                      break;
                    }
                    try {
                      N && N.getImageData(0, 0, 1, 1);
                    } catch (Te) {}
                    return (
                      (e.next = 100),
                      new Promise(function (e) {
                        return requestAnimationFrame(e);
                      })
                    );
                  case 100:
                    if (((B = t.toDataURL("image/png")), B && "data:," !== B)) {
                      e.next = 106;
                      break;
                    }
                    ((Z = document.createElement("canvas")),
                      (Z.width = t.width),
                      (Z.height = t.height),
                      (T = Z.getContext("2d")),
                      T &&
                        (T.drawImage(t, 0, 0), (B = Z.toDataURL("image/png"))));
                  case 106:
                    e.next = 110;
                    break;
                  case 108:
                    ((e.prev = 108), (e.t4 = e["catch"](90)));
                  case 110:
                    O = document.createElement("img");
                    try {
                      ((O.decoding = "sync"), (O.loading = "eager"));
                    } catch (Oe) {}
                    (B && (O.src = B),
                      (O.width = t.width),
                      (O.height = t.height));
                    try {
                      ((I = getComputedStyle(t)),
                        I.width && (O.style.width = I.width),
                        I.height && (O.style.height = I.height));
                    } catch (Ie) {}
                    return e.abrupt(
                      "return",
                      (n.nodeMap.set(O, t), mt(t, O, n, r), O),
                    );
                  case 115:
                    if (
                      ((e.prev = 115),
                      (R = t.cloneNode(!1)),
                      At(t, R),
                      n.nodeMap.set(R, t),
                      "IMG" === t.tagName)
                    ) {
                      Ot(t, R);
                      try {
                        ((L = t.getBoundingClientRect()),
                          (P = Math.round(L.width || 0)),
                          (_ = Math.round(L.height || 0)),
                          (P && _) ||
                            ((j = window.getComputedStyle(t)),
                            (U = parseFloat(j.width) || 0),
                            (W = parseFloat(j.height) || 0),
                            (q =
                              parseInt(t.getAttribute("width") || "", 10) || 0),
                            (H =
                              parseInt(t.getAttribute("height") || "", 10) ||
                              0),
                            (z = t.width || t.naturalWidth || 0),
                            (V = t.height || t.naturalHeight || 0),
                            (P = Math.round(P || U || q || z || 0)),
                            (_ = Math.round(_ || W || H || V || 0))),
                          P && (R.dataset.snapdomWidth = String(P)),
                          _ && (R.dataset.snapdomHeight = String(_)));
                      } catch (Re) {}
                      try {
                        (($ = t.getAttribute("style") || ""),
                          (X = window.getComputedStyle(t)),
                          (G = function (e) {
                            var t = $.match(
                                new RegExp(
                                  "".concat(e, "\\s*:\\s*([^;]+)"),
                                  "i",
                                ),
                              ),
                              n = t ? t[1].trim() : X.getPropertyValue(e);
                            return /%|auto/i.test(String(n || ""));
                          }),
                          (Y = parseInt(R.dataset.snapdomWidth || "0", 10)),
                          (K = parseInt(R.dataset.snapdomHeight || "0", 10)),
                          (Q = G("width") || !Y),
                          (J = G("height") || !K),
                          Q && Y && (R.style.width = "".concat(Y, "px")),
                          J && K && (R.style.height = "".concat(K, "px")),
                          Y && (R.style.minWidth = "".concat(Y, "px")),
                          K && (R.style.minHeight = "".concat(K, "px")));
                      } catch (Le) {}
                    }
                    e.next = 122;
                    break;
                  case 119:
                    throw (
                      (e.prev = 119),
                      (e.t5 = e["catch"](115)),
                      ut.error("[Snapdom] Failed to clone node:", t, e.t5),
                      e.t5
                    );
                  case 122:
                    if (
                      (t instanceof HTMLTextAreaElement &&
                        ((ee = t.getBoundingClientRect()),
                        (R.style.width = "".concat(ee.width, "px")),
                        (R.style.height = "".concat(ee.height, "px"))),
                      t instanceof HTMLInputElement &&
                        ((R.value = t.value),
                        R.setAttribute("value", t.value),
                        void 0 !== t.checked &&
                          ((R.checked = t.checked),
                          t.checked && R.setAttribute("checked", ""),
                          t.indeterminate &&
                            (R.indeterminate = t.indeterminate))),
                      t instanceof HTMLSelectElement && (c = t.value),
                      t instanceof HTMLTextAreaElement && (l = t.value),
                      mt(t, R, n, r),
                      !t.shadowRoot)
                    ) {
                      e.next = 135;
                      break;
                    }
                    te = function (e, t) {
                      if (
                        e.nodeType === Node.ELEMENT_NODE &&
                        "STYLE" === e.tagName
                      )
                        return t(null);
                      nn(e, n, r)
                        .then(function (e) {
                          t(e || null);
                        })
                        .catch(function () {
                          t(null);
                        });
                    };
                    try {
                      ((ne = t.shadowRoot.querySelectorAll("slot")),
                        (re = (0, s.Z)(ne)));
                      try {
                        for (re.s(); !(ue = re.n()).done; ) {
                          ((ae = ue.value), (ie = []));
                          try {
                            ie =
                              (null === (oe = ae.assignedNodes) || void 0 === oe
                                ? void 0
                                : oe.call(ae, { flatten: !0 })) ||
                              (null === (ce = ae.assignedNodes) || void 0 === ce
                                ? void 0
                                : ce.call(ae)) ||
                              [];
                          } catch (Pe) {
                            ie =
                              (null === (se = ae.assignedNodes) || void 0 === se
                                ? void 0
                                : se.call(ae)) || [];
                          }
                          le = (0, s.Z)(ie);
                          try {
                            for (le.s(); !(fe = le.n()).done; )
                              ((de = fe.value), o.add(de));
                          } catch (_e) {
                            le.e(_e);
                          } finally {
                            le.f();
                          }
                        }
                      } catch (_e) {
                        re.e(_e);
                      } finally {
                        re.f();
                      }
                    } catch (je) {}
                    ((pe = Mt(n)), (he = '[data-sd="'.concat(pe, '"]')));
                    try {
                      R.setAttribute("data-sd", pe);
                    } catch (Ue) {}
                    return (
                      (De = Zt(t.shadowRoot)),
                      (me = Nt(De, he)),
                      (ve = It(De)),
                      (ge = Lt(t, ve, he)),
                      Tt(R, ge + me, pe),
                      (ye = document.createDocumentFragment()),
                      (e.next = 133),
                      kt(Array.from(t.shadowRoot.childNodes), te, r.fast)
                    );
                  case 133:
                    ((be = e.sent),
                      ye.append.apply(
                        ye,
                        (0, u.Z)(
                          be.filter(function (e) {
                            return !!e;
                          }),
                        ),
                      ),
                      R.appendChild(ye));
                  case 135:
                    if ("SLOT" !== t.tagName) {
                      e.next = 144;
                      break;
                    }
                    return (
                      (Ee = function (e, t) {
                        nn(e, n, r)
                          .then(function (e) {
                            (e && Pt(e), t(e || null));
                          })
                          .catch(function () {
                            t(null);
                          });
                      }),
                      (xe =
                        (null === (Fe = t.assignedNodes) || void 0 === Fe
                          ? void 0
                          : Fe.call(t, { flatten: !0 })) || []),
                      (Ce = xe.length > 0 ? xe : Array.from(t.childNodes)),
                      (we = document.createDocumentFragment()),
                      (e.next = 142),
                      kt(Array.from(Ce), Ee, r.fast)
                    );
                  case 142:
                    return (
                      (Ae = e.sent),
                      e.abrupt(
                        "return",
                        (we.append.apply(
                          we,
                          (0, u.Z)(
                            Ae.filter(function (e) {
                              return !!e;
                            }),
                          ),
                        ),
                        we),
                      )
                    );
                  case 144:
                    return (
                      (e.next = 146),
                      kt(Array.from(t.childNodes), ke, r.fast)
                    );
                  case 146:
                    if (
                      ((Se = e.sent),
                      (a = R).append.apply(
                        a,
                        (0, u.Z)(
                          Se.filter(function (e) {
                            return !!e;
                          }),
                        ),
                      ),
                      null !== c && R instanceof HTMLSelectElement)
                    ) {
                      ((R.value = c), (Be = (0, s.Z)(R.options)));
                      try {
                        for (Be.s(); !(Ne = Be.n()).done; )
                          ((Me = Ne.value),
                            Me.value === c
                              ? Me.setAttribute("selected", "")
                              : Me.removeAttribute("selected"));
                      } catch (_e) {
                        Be.e(_e);
                      } finally {
                        Be.f();
                      }
                    }
                    return e.abrupt(
                      "return",
                      (null !== l &&
                        R instanceof HTMLTextAreaElement &&
                        (R.textContent = l),
                      R),
                    );
                  case 149:
                  case "end":
                    return e.stop();
                }
            },
            e,
            null,
            [
              [20, 42, 45, 48],
              [24, 35],
              [49, 60],
              [67, 73],
              [90, 108],
              [115, 119],
            ],
          );
        }),
      )),
      rn.apply(this, arguments)
    );
  }
  function un(e) {
    return /\bcounter\s*\(|\bcounters\s*\(/.test(e || "");
  }
  function an(e) {
    return (e || "").replace(/"([^"]*)"/g, "$1");
  }
  function on(e) {
    for (
      var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = "",
        r = Math.max(1, e);
      r > 0;
    )
      (r--,
        (n = String.fromCharCode(97 + (r % 26)) + n),
        (r = Math.floor(r / 26)));
    return t ? n.toUpperCase() : n;
  }
  function cn(e) {
    for (
      var t =
          !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
        n = [
          [1e3, "M"],
          [900, "CM"],
          [500, "D"],
          [400, "CD"],
          [100, "C"],
          [90, "XC"],
          [50, "L"],
          [40, "XL"],
          [10, "X"],
          [9, "IX"],
          [5, "V"],
          [4, "IV"],
          [1, "I"],
        ],
        r = Math.max(1, Math.min(3999, e)),
        u = "",
        a = 0,
        i = n;
      a < i.length;
      a++
    )
      for (var o = (0, l.Z)(i[a], 2), c = o[0], s = o[1]; r >= c; )
        ((u += s), (r -= c));
    return t ? u : u.toLowerCase();
  }
  function sn(e, t) {
    switch ((t || "decimal").toLowerCase()) {
      case "decimal":
        return String(Math.max(0, e));
      case "decimal-leading-zero":
        return (e < 10 ? "0" : "") + String(Math.max(0, e));
      case "lower-alpha":
        return on(e, !1);
      case "upper-alpha":
        return on(e, !0);
      case "lower-roman":
        return cn(e, !1);
      case "upper-roman":
        return cn(e, !0);
      default:
        return String(Math.max(0, e));
    }
  }
  function ln(e) {
    var t = function () {
        var e, t;
        return null !==
          (e =
            null === d ||
            void 0 === d ||
            null === (t = d.session) ||
            void 0 === t
              ? void 0
              : t.__counterEpoch) && void 0 !== e
          ? e
          : 0;
      },
      n = t(),
      r = new WeakMap(),
      u = e instanceof Document ? e.documentElement : e,
      a = function (e) {
        return e && "LI" === e.tagName;
      },
      i = function (e) {
        var t = 0,
          n = null === e || void 0 === e ? void 0 : e.parentElement;
        if (!n) return 0;
        var r,
          u = (0, s.Z)(n.children);
        try {
          for (u.s(); !(r = u.n()).done; ) {
            var a = r.value;
            if (a === e) break;
            "LI" === a.tagName && t++;
          }
        } catch (i) {
          u.e(i);
        } finally {
          u.f();
        }
        return t;
      },
      o = function (e) {
        var t,
          n = new Map(),
          r = (0, s.Z)(e);
        try {
          for (r.s(); !(t = r.n()).done; ) {
            var u = (0, l.Z)(t.value, 2),
              a = u[0],
              i = u[1];
            n.set(a, i.slice());
          }
        } catch (o) {
          r.e(o);
        } finally {
          r.f();
        }
        return n;
      },
      c = function (e, t, n) {
        var r,
          u,
          c = o(e);
        try {
          var l;
          r =
            (null === (l = n.style) || void 0 === l
              ? void 0
              : l.counterReset) || getComputedStyle(n).counterReset;
        } catch (O) {}
        if (r && "none" !== r) {
          var f,
            d = (0, s.Z)(r.split(","));
          try {
            for (d.s(); !(f = d.n()).done; ) {
              var p = f.value,
                h = p.trim().split(/\s+/),
                D = h[0],
                m = Number.isFinite(Number(h[1])) ? Number(h[1]) : 0;
              if (D) {
                var v = t.get(D);
                if (v && v.length) {
                  var g = v.slice();
                  (g.push(m), c.set(D, g));
                } else c.set(D, [m]);
              }
            }
          } catch (I) {
            d.e(I);
          } finally {
            d.f();
          }
        }
        try {
          var y;
          u =
            (null === (y = n.style) || void 0 === y
              ? void 0
              : y.counterIncrement) || getComputedStyle(n).counterIncrement;
        } catch (R) {}
        if (u && "none" !== u) {
          var b,
            F = (0, s.Z)(u.split(","));
          try {
            for (F.s(); !(b = F.n()).done; ) {
              var E = b.value,
                x = E.trim().split(/\s+/),
                C = x[0],
                w = Number.isFinite(Number(x[1])) ? Number(x[1]) : 1;
              if (C) {
                var A = c.get(C) || [];
                (0 === A.length && A.push(0),
                  (A[A.length - 1] += w),
                  c.set(C, A));
              }
            }
          } catch (I) {
            F.e(I);
          } finally {
            F.f();
          }
        }
        try {
          if ("list-item" === getComputedStyle(n).display && a(n)) {
            var k = n.parentElement,
              S = 1;
            if (k && "OL" === k.tagName) {
              var B = k.getAttribute("start"),
                N = Number.isFinite(Number(B)) ? Number(B) : 1,
                M = i(n),
                Z = n.getAttribute("value");
              S = Number.isFinite(Number(Z)) ? Number(Z) : N + M;
            } else S = 1 + i(n);
            var T = c.get("list-item") || [];
            (0 === T.length && T.push(0),
              (T[T.length - 1] = S),
              c.set("list-item", T));
          }
        } catch (L) {}
        return c;
      },
      f = function e(t, n, u) {
        var a = c(u, n, t);
        r.set(t, a);
        var i,
          o = a,
          l = (0, s.Z)(t.children);
        try {
          for (l.s(); !(i = l.n()).done; ) {
            var f = i.value;
            o = e(f, a, o);
          }
        } catch (d) {
          l.e(d);
        } finally {
          l.f();
        }
        return a;
      },
      p = new Map();
    function h() {
      var e = t();
      if (e !== n) {
        n = e;
        var r = new Map();
        f(u, r, r);
      }
    }
    return (
      f(u, p, p),
      {
        get: function (e, t) {
          var n;
          h();
          var u = null === (n = r.get(e)) || void 0 === n ? void 0 : n.get(t);
          return u && u.length ? u[u.length - 1] : 0;
        },
        getStack: function (e, t) {
          var n;
          h();
          var u = null === (n = r.get(e)) || void 0 === n ? void 0 : n.get(t);
          return u ? u.slice() : [];
        },
      }
    );
  }
  function fn(e, t, n) {
    if (!e || "none" === e) return e;
    try {
      var r = /\b(counter|counters)\s*\(([^)]+)\)/g,
        u = e.replace(r, function (e, r, u) {
          var a = String(u)
            .split(",")
            .map(function (e) {
              return e.trim();
            });
          if ("counter" === r) {
            var i,
              o =
                null === (i = a[0]) || void 0 === i
                  ? void 0
                  : i.replace(/^["']|["']$/g, ""),
              c = (a[1] || "decimal").toLowerCase(),
              s = n.get(t, o);
            return sn(s, c);
          }
          var l,
            f,
            d,
            p =
              null === (l = a[0]) || void 0 === l
                ? void 0
                : l.replace(/^["']|["']$/g, ""),
            h =
              null !==
                (f =
                  null === (d = a[1]) || void 0 === d
                    ? void 0
                    : d.replace(/^["']|["']$/g, "")) && void 0 !== f
                ? f
                : "",
            D = (a[2] || "decimal").toLowerCase(),
            m = n.getStack(t, p);
          return m.length
            ? m
                .map(function (e) {
                  return sn(e, D);
                })
                .join(h)
            : "";
        });
      return an(u);
    } catch (a) {
      return "- ";
    }
  }
  var dn = new WeakMap(),
    pn = 300;
  function hn(e, t) {
    var n = mn(e);
    return t
      ? (t.__pseudoPreflightFp !== n &&
          ((t.__pseudoPreflight = gn(e)), (t.__pseudoPreflightFp = n)),
        !!t.__pseudoPreflight)
      : gn(e);
  }
  function Dn(e) {
    try {
      return e && e.cssRules ? e.cssRules : null;
    } catch (t) {
      return null;
    }
  }
  function mn(e) {
    for (
      var t = e.querySelectorAll('style,link[rel~="stylesheet"]'),
        n = "n:".concat(t.length, "|"),
        r = 0,
        u = 0;
      u < t.length;
      u++
    ) {
      var a = t[u];
      if ("STYLE" === a.tagName) {
        var i = a.textContent ? a.textContent.length : 0;
        n += "S".concat(i, "|");
        var o = a.sheet,
          c = o ? Dn(o) : null;
        c && (r += c.length);
      } else {
        var s = a.getAttribute("href") || "",
          l = a.getAttribute("media") || "all";
        n += "L".concat(s, "|m:").concat(l, "|");
        var f = a.sheet,
          d = f ? Dn(f) : null;
        d && (r += d.length);
      }
    }
    var p = e.adoptedStyleSheets;
    return (
      (n += "ass:".concat(Array.isArray(p) ? p.length : 0, "|tr:").concat(r)),
      n
    );
  }
  function vn(e, t, n) {
    var r = Dn(e);
    if (!r) return !1;
    for (var u = 0; u < r.length; u++) {
      if (n.budget <= 0) return !1;
      var a = r[u],
        i = a && a.cssText ? a.cssText : "";
      n.budget--;
      var o,
        c = (0, s.Z)(t);
      try {
        for (c.s(); !(o = c.n()).done; ) {
          var l = o.value;
          if (i.includes(l)) return !0;
        }
      } catch (v) {
        c.e(v);
      } finally {
        c.f();
      }
      if (a && a.cssRules && a.cssRules.length)
        for (var f = 0; f < a.cssRules.length && n.budget > 0; f++) {
          var d = a.cssRules[f],
            p = d && d.cssText ? d.cssText : "";
          n.budget--;
          var h,
            D = (0, s.Z)(t);
          try {
            for (D.s(); !(h = D.n()).done; ) {
              var m = h.value;
              if (p.includes(m)) return !0;
            }
          } catch (v) {
            D.e(v);
          } finally {
            D.f();
          }
        }
      if (n.budget <= 0) return !1;
    }
    return !1;
  }
  function gn() {
    var e =
        arguments.length > 0 && void 0 !== arguments[0]
          ? arguments[0]
          : document,
      t = mn(e),
      n = dn.get(e);
    if (n && n.fingerprint === t) return n.result;
    for (
      var r = [
          "::before",
          "::after",
          "::first-letter",
          ":before",
          ":after",
          ":first-letter",
          "counter(",
          "counters(",
          "counter-increment",
          "counter-reset",
        ],
        u = e.querySelectorAll("style"),
        a = 0;
      a < u.length;
      a++
    ) {
      var i,
        o = u[a].textContent || "",
        c = (0, s.Z)(r);
      try {
        for (c.s(); !(i = c.n()).done; ) {
          var l = i.value;
          if (o.includes(l))
            return (dn.set(e, { fingerprint: t, result: !0 }), !0);
        }
      } catch (F) {
        c.e(F);
      } finally {
        c.f();
      }
    }
    var f = e.adoptedStyleSheets;
    if (Array.isArray(f) && f.length) {
      var d = { budget: pn };
      try {
        var p,
          h = (0, s.Z)(f);
        try {
          for (h.s(); !(p = h.n()).done; ) {
            var D = p.value;
            if (vn(D, r, d))
              return (dn.set(e, { fingerprint: t, result: !0 }), !0);
          }
        } catch (F) {
          h.e(F);
        } finally {
          h.f();
        }
      } catch (E) {}
    }
    for (
      var m = e.querySelectorAll('style,link[rel~="stylesheet"]'),
        v = { budget: pn },
        g = 0;
      g < m.length && v.budget > 0;
      g++
    ) {
      var y = m[g],
        b = null;
      if ((y.tagName, (b = y.sheet || null), b && vn(b, r, v)))
        return (dn.set(e, { fingerprint: t, result: !0 }), !0);
    }
    return e.querySelector('[style*="counter("], [style*="counters("]')
      ? (dn.set(e, { fingerprint: t, result: !0 }), !0)
      : (dn.set(e, { fingerprint: t, result: !1 }), !1);
  }
  var yn = new WeakMap(),
    bn = -1;
  function Fn(e) {
    return (e || "").replace(/"([^"]*)"/g, "$1");
  }
  function En(e) {
    if (!e) return "";
    for (var t, n = [], r = /"([^"]*)"/g; (t = r.exec(e)); ) n.push(t[1]);
    return n.length ? n.join("") : Fn(e);
  }
  function xn(e, t) {
    var n = e.parentElement,
      r = n ? yn.get(n) : null;
    return r
      ? {
          get: function (e, n) {
            var u = t.get(e, n),
              a = r.get(n);
            return "number" == typeof a ? Math.max(u, a) : u;
          },
          getStack: function (e, n) {
            var u = t.getStack(e, n);
            if (!u.length) return u;
            var a = r.get(n);
            if ("number" == typeof a) {
              var i = u.slice();
              return ((i[i.length - 1] = Math.max(i[i.length - 1], a)), i);
            }
            return u;
          },
        }
      : t;
  }
  function Cn(e, t, n) {
    var r = new Map();
    function a(e) {
      var t = [];
      if (!e || "none" === e) return t;
      var n,
        r = (0, s.Z)(String(e).split(","));
      try {
        for (r.s(); !(n = r.n()).done; ) {
          var u = n.value,
            a = u.trim().split(/\s+/),
            i = a[0],
            o = Number.isFinite(Number(a[1])) ? Number(a[1]) : void 0;
          i && t.push({ name: i, num: o });
        }
      } catch (c) {
        r.e(c);
      } finally {
        r.f();
      }
      return t;
    }
    var i = a(null === t || void 0 === t ? void 0 : t.counterReset),
      o = a(null === t || void 0 === t ? void 0 : t.counterIncrement);
    function c(t) {
      if (r.has(t)) return r.get(t).slice();
      var a = n.getStack(e, t);
      a = a.length ? a.slice() : [];
      var c = i.find(function (e) {
        return e.name === t;
      });
      if (c) {
        var s = Number.isFinite(c.num) ? c.num : 0;
        a = a.length ? [].concat((0, u.Z)(a), [s]) : [s];
      }
      var l = o.find(function (e) {
        return e.name === t;
      });
      if (l) {
        var f = Number.isFinite(l.num) ? l.num : 1;
        (0 === a.length && (a = [0]), (a[a.length - 1] += f));
      }
      return (r.set(t, a.slice()), a);
    }
    return {
      get: function (e, t) {
        var n = c(t);
        return n.length ? n[n.length - 1] : 0;
      },
      getStack: function (e, t) {
        return c(t);
      },
      __incs: o,
    };
  }
  function wn(e, t, n) {
    var r, u;
    try {
      u = getComputedStyle(e, t);
    } catch (s) {}
    var a = null === (r = u) || void 0 === r ? void 0 : r.content;
    if (!a || "none" === a || "normal" === a) return { text: "", incs: [] };
    var i = xn(e, n),
      o = Cn(e, u, i),
      c = un(a) ? fn(a, e, o) : a;
    return { text: En(c), incs: o.__incs || [] };
  }
  function An(e, t, n, r) {
    return kn.apply(this, arguments);
  }
  function kn() {
    return (
      (kn = (0, c.Z)(
        (0, i.Z)().mark(function e(t, n, r, u) {
          var a,
            o,
            c,
            l,
            f,
            p,
            D,
            v,
            g,
            y,
            b,
            F,
            E,
            x,
            C,
            w,
            A,
            S,
            N,
            M,
            Z,
            T,
            O,
            I,
            R,
            L,
            _,
            j,
            U,
            z,
            V,
            $,
            X,
            G,
            K,
            Q,
            J,
            ee,
            te,
            ne,
            re,
            ue,
            ae,
            ie,
            oe,
            ce,
            le,
            fe,
            de,
            pe,
            he,
            De,
            me,
            ve,
            ge,
            ye,
            be,
            Fe,
            Ee,
            xe,
            Ce,
            we,
            Ae,
            ke,
            Se,
            Be,
            Ne,
            Me,
            Ze,
            Te,
            Oe;
          return (0, i.Z)().wrap(
            function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (t instanceof Element && n instanceof Element) {
                      e.next = 2;
                      break;
                    }
                    return e.abrupt("return");
                  case 2:
                    if (((c = t.ownerDocument || document), hn(c, r))) {
                      e.next = 5;
                      break;
                    }
                    return e.abrupt("return");
                  case 5:
                    if (
                      ((l =
                        null !==
                          (a =
                            null === d ||
                            void 0 === d ||
                            null === (o = d.session) ||
                            void 0 === o
                              ? void 0
                              : o.__counterEpoch) && void 0 !== a
                          ? a
                          : 0),
                      bn !== l &&
                        ((yn = new WeakMap()),
                        r && (r.__counterCtx = null),
                        (bn = l)),
                      !r.__counterCtx)
                    )
                      try {
                        r.__counterCtx = ln(t.ownerDocument || document);
                      } catch (i) {}
                    ((f = r.__counterCtx),
                      (p = 0),
                      (D = ["::before", "::after", "::first-letter"]));
                  case 9:
                    if (!(p < D.length)) {
                      e.next = 137;
                      break;
                    }
                    if (
                      ((v = D[p]),
                      (e.prev = 11),
                      (b = W(t, v)),
                      b &&
                        ("none" !== b.content ||
                          "none" !== b.backgroundImage ||
                          "transparent" !== b.backgroundColor ||
                          ("none" !== b.borderStyle &&
                            0 !== parseFloat(b.borderWidth)) ||
                          (b.transform && "none" !== b.transform) ||
                          "inline" !== b.display))
                    ) {
                      e.next = 15;
                      break;
                    }
                    return e.abrupt("continue", 134);
                  case 15:
                    if ("::first-letter" !== v) {
                      e.next = 32;
                      break;
                    }
                    if (
                      ((E = getComputedStyle(t)),
                      b.color !== E.color ||
                        b.fontSize !== E.fontSize ||
                        b.fontWeight !== E.fontWeight)
                    ) {
                      e.next = 19;
                      break;
                    }
                    return e.abrupt("continue", 134);
                  case 19:
                    if (
                      ((x = Array.from(n.childNodes).find(function (e) {
                        var t;
                        return (
                          e.nodeType === Node.TEXT_NODE &&
                          (null === (t = e.textContent) || void 0 === t
                            ? void 0
                            : t.trim().length) > 0
                        );
                      })),
                      x)
                    ) {
                      e.next = 22;
                      break;
                    }
                    return e.abrupt("continue", 134);
                  case 22:
                    if (
                      ((C = x.textContent),
                      (w =
                        null ===
                          (F = C.match(
                            /^((?:[\0-\x08\x0E-\x1F!-\/:-@\[-`\{-\x9F\xA1-\xA9\xAB-\xB1\xB4\xB6-\xB8\xBB\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u036F\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482-\u0489\u0530\u0557\u0558\u055A-\u055F\u0589-\u05CF\u05EB-\u05EE\u05F3-\u061F\u064B-\u065F\u066A-\u066D\u0670\u06D4\u06D6-\u06E4\u06E7-\u06ED\u06FD\u06FE\u0700-\u070F\u0711\u0730-\u074C\u07A6-\u07B0\u07B2-\u07BF\u07EB-\u07F3\u07F6-\u07F9\u07FB-\u07FF\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u083F\u0859-\u085F\u086B-\u086F\u0888\u088F-\u089F\u08CA-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962-\u0965\u0970\u0981-\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA-\u09BC\u09BE-\u09CD\u09CF-\u09DB\u09DE\u09E2-\u09E5\u09F2\u09F3\u09FA\u09FB\u09FD-\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A-\u0A58\u0A5D\u0A5F-\u0A65\u0A70\u0A71\u0A75-\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA-\u0ABC\u0ABE-\u0ACF\u0AD1-\u0ADF\u0AE2-\u0AE5\u0AF0-\u0AF8\u0AFA-\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A-\u0B3C\u0B3E-\u0B5B\u0B5E\u0B62-\u0B65\u0B70\u0B78-\u0B82\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BCF\u0BD1-\u0BE5\u0BF3-\u0C04\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C3E-\u0C57\u0C5B\u0C5C\u0C5E\u0C5F\u0C62-\u0C65\u0C70-\u0C77\u0C7F\u0C81-\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA-\u0CBC\u0CBE-\u0CDC\u0CDF\u0CE2-\u0CE5\u0CF0\u0CF3-\u0D03\u0D0D\u0D11\u0D3B\u0D3C\u0D3E-\u0D4D\u0D4F-\u0D53\u0D57\u0D62-\u0D65\u0D79\u0D80-\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DE5\u0DF0-\u0E00\u0E31\u0E34-\u0E3F\u0E47-\u0E4F\u0E5A-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EB1\u0EB4-\u0EBC\u0EBE\u0EBF\u0EC5\u0EC7-\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F01-\u0F1F\u0F34-\u0F3F\u0F48\u0F6D-\u0F87\u0F8D-\u0FFF\u102B-\u103E\u104A-\u104F\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B-\u1368\u137D-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u169B-\u169F\u16EB-\u16ED\u16F9-\u16FF\u1712-\u171E\u1732-\u173F\u1752-\u175F\u176D\u1771-\u177F\u17B4-\u17D6\u17D8-\u17DB\u17DD-\u17DF\u17EA-\u17EF\u17FA-\u180F\u181A-\u181F\u1879-\u187F\u1885\u1886\u18A9\u18AB-\u18AF\u18F6-\u18FF\u191F-\u1945\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DB-\u19FF\u1A17-\u1A1F\u1A55-\u1A7F\u1A8A-\u1A8F\u1A9A-\u1AA6\u1AA8-\u1B04\u1B34-\u1B44\u1B4D-\u1B4F\u1B5A-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BFF\u1C24-\u1C3F\u1C4A-\u1C4C\u1C7E\u1C7F\u1C89-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CE8\u1CED\u1CF4\u1CF7-\u1CF9\u1CFB-\u1CFF\u1DC0-\u1DFF\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u206F\u2072\u2073\u207A-\u207E\u208A-\u208F\u209D-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A-\u245F\u249C-\u24E9\u2500-\u2775\u2794-\u2BFF\u2CE5-\u2CEA\u2CEF-\u2CF1\u2CF4-\u2CFC\u2CFE\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7F\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF-\u2E2E\u2E30-\u2FFF\u3001-\u3004\u3008-\u3020\u302A-\u3030\u3036\u3037\u303D-\u3040\u3097-\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u3191\u3196-\u319F\u31C0-\u31EF\u3200-\u321F\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA62C-\uA63F\uA66F-\uA67E\uA69E\uA69F\uA6F0-\uA716\uA720\uA721\uA789\uA78A\uA7CB-\uA7CF\uA7D2\uA7D4\uA7DA-\uA7F1\uA802\uA806\uA80B\uA823-\uA82F\uA836-\uA83F\uA874-\uA881\uA8B4-\uA8CF\uA8DA-\uA8F1\uA8F8-\uA8FA\uA8FC\uA8FF\uA926-\uA92F\uA947-\uA95F\uA97D-\uA983\uA9B3-\uA9CE\uA9DA-\uA9DF\uA9E5\uA9FF\uAA29-\uAA3F\uAA43\uAA4C-\uAA4F\uAA5A-\uAA5F\uAA77-\uAA79\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAC3-\uAADA\uAADE\uAADF\uAAEB-\uAAF1\uAAF5-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABE3-\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB1E\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFE6F\uFE75\uFEFD\uFEFE\uFF00-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDD06\uDD34-\uDD3F\uDD79-\uDD89\uDD8C-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEE0\uDEFC-\uDEFF\uDF24-\uDF2C\uDF4B-\uDF4F\uDF76-\uDF7F\uDF9E\uDF9F\uDFC4-\uDFC7\uDFD0\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDD6F\uDD7B\uDD8B\uDD93\uDD96\uDDA2\uDDB2\uDDBA\uDDBD-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDF7F\uDF86\uDFB1\uDFBB-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56\uDC57\uDC77\uDC78\uDC9F-\uDCA6\uDCB0-\uDCDF\uDCF3\uDCF6-\uDCFA\uDD1C-\uDD1F\uDD3A-\uDD7F\uDDB8-\uDDBB\uDDD0\uDDD1\uDE01-\uDE0F\uDE14\uDE18\uDE36-\uDE3F\uDE49-\uDE5F\uDE7F\uDEA0-\uDEBF\uDEC8\uDEE5-\uDEEA\uDEF0-\uDEFF\uDF36-\uDF3F\uDF56\uDF57\uDF73-\uDF77\uDF92-\uDFA8\uDFB0-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCF9\uDD24-\uDD2F\uDD3A-\uDE5F\uDE7F\uDEAA-\uDEAF\uDEB2-\uDEFF\uDF28-\uDF2F\uDF46-\uDF50\uDF55-\uDF6F\uDF82-\uDFAF\uDFCC-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC00-\uDC02\uDC38-\uDC51\uDC70\uDC73\uDC74\uDC76-\uDC82\uDCB0-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDD02\uDD27-\uDD35\uDD40-\uDD43\uDD45\uDD46\uDD48-\uDD4F\uDD73-\uDD75\uDD77-\uDD82\uDDB3-\uDDC0\uDDC5-\uDDCF\uDDDB\uDDDD-\uDDE0\uDDF5-\uDDFF\uDE12\uDE2C-\uDE3E\uDE41-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEA9-\uDEAF\uDEDF-\uDEEF\uDEFA-\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A-\uDF3C\uDF3E-\uDF4F\uDF51-\uDF5C\uDF62-\uDFFF]|\uD805[\uDC35-\uDC46\uDC4B-\uDC4F\uDC5A-\uDC5E\uDC62-\uDC7F\uDCB0-\uDCC3\uDCC6\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDAF-\uDDD7\uDDDC-\uDDFF\uDE30-\uDE43\uDE45-\uDE4F\uDE5A-\uDE7F\uDEAB-\uDEB7\uDEB9-\uDEBF\uDECA-\uDEFF\uDF1B-\uDF2F\uDF3C-\uDF3F\uDF47-\uDFFF]|\uD806[\uDC2C-\uDC9F\uDCF3-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD30-\uDD3E\uDD40\uDD42-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD1-\uDDE0\uDDE2\uDDE4-\uDDFF\uDE01-\uDE0A\uDE33-\uDE39\uDE3B-\uDE4F\uDE51-\uDE5B\uDE8A-\uDE9C\uDE9E-\uDEAF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC2F-\uDC3F\uDC41-\uDC4F\uDC6D-\uDC71\uDC90-\uDCFF\uDD07\uDD0A\uDD31-\uDD45\uDD47-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8A-\uDD97\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF3-\uDF01\uDF03\uDF11\uDF34-\uDF4F\uDF5A-\uDFAF\uDFB1-\uDFBF\uDFD5-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80E-\uD810\uD812-\uD819\uD824-\uD82A\uD82D\uD82E\uD830-\uD833\uD836\uD83D\uD83F\uD87B-\uD87D\uD87F\uD889-\uDBFF][\uDC00-\uDFFF]|\uD80B[\uDC00-\uDF8F\uDFF1-\uDFFF]|\uD80D[\uDC30-\uDC40\uDC47-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDE6F\uDEBF\uDECA-\uDECF\uDEEE-\uDEFF\uDF30-\uDF3F\uDF44-\uDF4F\uDF5A\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE97-\uDEFF\uDF4B-\uDF4F\uDF51-\uDF92\uDFA0-\uDFDF\uDFE2\uDFE4-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82B[\uDC00-\uDFEF\uDFF4\uDFFC\uDFFF]|\uD82C[\uDD23-\uDD31\uDD33-\uDD4F\uDD53\uDD54\uDD56-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDFFF]|\uD834[\uDC00-\uDEBF\uDED4-\uDEDF\uDEF4-\uDF5F\uDF79-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC\uDFCD]|\uD837[\uDC00-\uDEFF\uDF1F-\uDF24\uDF2B-\uDFFF]|\uD838[\uDC00-\uDC2F\uDC6E-\uDCFF\uDD2D-\uDD36\uDD3E\uDD3F\uDD4A-\uDD4D\uDD4F-\uDE8F\uDEAE-\uDEBF\uDEEC-\uDEEF\uDEFA-\uDFFF]|\uD839[\uDC00-\uDCCF\uDCEC-\uDCEF\uDCFA-\uDFDF\uDFE7\uDFEC\uDFEF\uDFFF]|\uD83A[\uDCC5\uDCC6\uDCD0-\uDCFF\uDD44-\uDD4A\uDD4C-\uDD4F\uDD5A-\uDFFF]|\uD83B[\uDC00-\uDC70\uDCAC\uDCB0\uDCB5-\uDD00\uDD2E\uDD3E-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDFFF]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDFFF]|\uD83E[\uDC00-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEE0-\uDEFF]|\uD86D[\uDF3A-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDF4F]|\uD888[\uDFB0-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*(?:[0-9A-Za-z\xAA\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u0660-\u0669\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07C0-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0966-\u096F\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09E6-\u09F1\u09F4-\u09F9\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A66-\u0A6F\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AE6-\u0AEF\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B66-\u0B6F\u0B71-\u0B77\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0BE6-\u0BF2\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C66-\u0C6F\u0C78-\u0C7E\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CE6-\u0CEF\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D58-\u0D61\u0D66-\u0D78\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DE6-\u0DEF\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F20-\u0F33\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F-\u1049\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u1090-\u1099\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A16\u1A20-\u1A54\u1A80-\u1A89\u1A90-\u1A99\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B50-\u1B59\u1B83-\u1BA0\u1BAE-\u1BE5\u1C00-\u1C23\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3192-\u3195\u31A0-\u31BF\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA830-\uA835\uA840-\uA873\uA882-\uA8B3\uA8D0-\uA8D9\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA900-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF-\uA9D9\uA9E0-\uA9E4\uA9E6-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA50-\uAA59\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDE80-\uDE9C\uDEA0-\uDED0\uDEE1-\uDEFB\uDF00-\uDF23\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC58-\uDC76\uDC79-\uDC9E\uDCA7-\uDCAF\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDD1B\uDD20-\uDD39\uDD80-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE40-\uDE48\uDE60-\uDE7E\uDE80-\uDE9F\uDEC0-\uDEC7\uDEC9-\uDEE4\uDEEB-\uDEEF\uDF00-\uDF35\uDF40-\uDF55\uDF58-\uDF72\uDF78-\uDF91\uDFA9-\uDFAF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDD23\uDD30-\uDD39\uDE60-\uDE7E\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF27\uDF30-\uDF45\uDF51-\uDF54\uDF70-\uDF81\uDFB0-\uDFCB\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC52-\uDC6F\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD03-\uDD26\uDD36-\uDD3F\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDD0-\uDDDA\uDDDC\uDDE1-\uDDF4\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDEF0-\uDEF9\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC50-\uDC59\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE50-\uDE59\uDE80-\uDEAA\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF30-\uDF3B\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCF2\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC50-\uDC6C\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDF50-\uDF59\uDFB0\uDFC0-\uDFD4]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDE70-\uDEBE\uDEC0-\uDEC9\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE96\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD834[\uDEC0-\uDED3\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD40-\uDD49\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB\uDEF0-\uDEF9]|\uD839[\uDCD0-\uDCEB\uDCF0-\uDCF9\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDCC7-\uDCCF\uDD00-\uDD43\uDD4B\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF])(?:['\u2019])?)/,
                          )) || void 0 === F
                          ? void 0
                          : F[0]),
                      (A = C.slice(
                        (null === w || void 0 === w ? void 0 : w.length) || 0,
                      )),
                      w && !/[\uD800-\uDFFF]/.test(w))
                    ) {
                      e.next = 25;
                      break;
                    }
                    return e.abrupt("continue", 134);
                  case 25:
                    return (
                      (S = document.createElement("span")),
                      (S.textContent = w),
                      (S.dataset.snapdomPseudo = "::first-letter"),
                      (N = q(b)),
                      (M = P(N, "span")),
                      r.styleMap.set(S, M),
                      (Z = document.createTextNode(A)),
                      n.replaceChild(Z, x),
                      n.insertBefore(S, Z),
                      e.abrupt("continue", 134)
                    );
                  case 32:
                    if (
                      ((T = null !== (g = b.content) && void 0 !== g ? g : ""),
                      (O = "" === T || "none" === T || "normal" === T),
                      (I = wn(t, v, f)),
                      (R = I.text),
                      (L = I.incs),
                      (_ = b.backgroundImage),
                      (j = b.backgroundColor),
                      (U = b.fontFamily),
                      (z = parseInt(b.fontSize) || 32),
                      (V = parseInt(b.fontWeight) || !1),
                      ($ = b.color || "#000"),
                      (X = b.borderStyle),
                      (G = parseFloat(b.borderWidth)),
                      (K = b.transform),
                      (Q = Y(U)),
                      (J = !O && "" !== R),
                      (ee = _ && "none" !== _),
                      (te =
                        j && "transparent" !== j && "rgba(0, 0, 0, 0)" !== j),
                      (ne = X && "none" !== X && G > 0),
                      (re = K && "none" !== K),
                      J || ee || te || ne || re)
                    ) {
                      e.next = 57;
                      break;
                    }
                    if (!(L && L.length && t.parentElement)) {
                      e.next = 56;
                      break;
                    }
                    ((ue = yn.get(t.parentElement) || new Map()),
                      (ae = (0, s.Z)(L)),
                      (e.prev = 37),
                      ae.s());
                  case 39:
                    if ((ie = ae.n()).done) {
                      e.next = 47;
                      break;
                    }
                    if (((oe = ie.value.name), oe)) {
                      e.next = 43;
                      break;
                    }
                    return e.abrupt("continue", 45);
                  case 43:
                    ((ce = xn(t, f)),
                      (le = Cn(t, getComputedStyle(t, v), ce).get(t, oe)),
                      ue.set(oe, le));
                  case 45:
                    e.next = 39;
                    break;
                  case 47:
                    e.next = 52;
                    break;
                  case 49:
                    ((e.prev = 49), (e.t0 = e["catch"](37)), ae.e(e.t0));
                  case 52:
                    return ((e.prev = 52), ae.f(), e.finish(52));
                  case 55:
                    yn.set(t.parentElement, ue);
                  case 56:
                    return e.abrupt("continue", 134);
                  case 57:
                    if (
                      ((fe = document.createElement("span")),
                      (fe.dataset.snapdomPseudo = v),
                      (fe.style.pointerEvents = "none"),
                      (de = q(b)),
                      (pe = P(de, "span")),
                      r.styleMap.set(fe, pe),
                      !Q || !R || 1 !== R.length)
                    ) {
                      e.next = 71;
                      break;
                    }
                    return ((e.next = 63), se(R, U, V, z, $));
                  case 63:
                    ((he = e.sent),
                      (De = he.dataUrl),
                      (me = he.width),
                      (ve = he.height),
                      (ge = document.createElement("img")),
                      (ge.src = De),
                      (ge.style = "height:"
                        .concat(z, "px;width:")
                        .concat((me / ve) * z, "px;object-fit:contain;")),
                      fe.appendChild(ge),
                      (n.dataset.snapdomHasIcon = "true"),
                      (e.next = 88));
                    break;
                  case 71:
                    if (!R || !R.startsWith("url(")) {
                      e.next = 87;
                      break;
                    }
                    if (
                      ((ye = h(R)), null === ye || void 0 === ye || !ye.trim())
                    ) {
                      e.next = 85;
                      break;
                    }
                    return (
                      (e.prev = 74),
                      (be = document.createElement("img")),
                      (e.next = 78),
                      k(m(ye), { as: "dataURL", useProxy: u.useProxy })
                    );
                  case 78:
                    ((Fe = e.sent),
                      (be.src = Fe.data),
                      (be.style = "width:".concat(
                        z,
                        "px;height:auto;object-fit:contain;",
                      )),
                      fe.appendChild(be),
                      (e.next = 85));
                    break;
                  case 82:
                    ((e.prev = 82),
                      (e.t1 = e["catch"](74)),
                      ut.error(
                        "[snapdom] Error in pseudo ".concat(v, " for"),
                        t,
                        e.t1,
                      ));
                  case 85:
                    e.next = 88;
                    break;
                  case 87:
                    !Q && J && (fe.textContent = R);
                  case 88:
                    ((fe.style.backgroundImage = "none"),
                      "maskImage" in fe.style && (fe.style.maskImage = "none"),
                      "webkitMaskImage" in fe.style &&
                        (fe.style.webkitMaskImage = "none"));
                    try {
                      ((fe.style.backgroundRepeat = b.backgroundRepeat),
                        (fe.style.backgroundSize = b.backgroundSize),
                        b.backgroundPositionX && b.backgroundPositionY
                          ? ((fe.style.backgroundPositionX =
                              b.backgroundPositionX),
                            (fe.style.backgroundPositionY =
                              b.backgroundPositionY))
                          : (fe.style.backgroundPosition =
                              b.backgroundPosition),
                        (fe.style.backgroundOrigin = b.backgroundOrigin),
                        (fe.style.backgroundClip = b.backgroundClip),
                        (fe.style.backgroundAttachment =
                          b.backgroundAttachment),
                        (fe.style.backgroundBlendMode = b.backgroundBlendMode));
                    } catch (Ie) {}
                    if (!ee) {
                      e.next = 102;
                      break;
                    }
                    return (
                      (e.prev = 91),
                      (Ee = H(_)),
                      (e.next = 95),
                      Promise.all(Ee.map(B))
                    );
                  case 95:
                    ((xe = e.sent),
                      (fe.style.backgroundImage = xe.join(", ")),
                      (e.next = 102));
                    break;
                  case 99:
                    ((e.prev = 99),
                      (e.t2 = e["catch"](91)),
                      ut.warn(
                        "[snapdom] Failed to inline background-image for ".concat(
                          v,
                        ),
                        e.t2,
                      ));
                  case 102:
                    if (
                      (te && (fe.style.backgroundColor = j),
                      (Ce =
                        fe.childNodes.length > 0 ||
                        "" !==
                          (null === (y = fe.textContent) || void 0 === y
                            ? void 0
                            : y.trim()) ||
                        ee ||
                        te ||
                        ne ||
                        re),
                      !(L && L.length && t.parentElement))
                    ) {
                      e.next = 126;
                      break;
                    }
                    ((we = yn.get(t.parentElement) || new Map()),
                      (Ae = xn(t, f)),
                      (ke = Cn(t, getComputedStyle(t, v), Ae)),
                      (Se = (0, s.Z)(L)),
                      (e.prev = 107),
                      Se.s());
                  case 109:
                    if ((Be = Se.n()).done) {
                      e.next = 117;
                      break;
                    }
                    if (((Ne = Be.value.name), Ne)) {
                      e.next = 113;
                      break;
                    }
                    return e.abrupt("continue", 115);
                  case 113:
                    ((Me = ke.get(t, Ne)), we.set(Ne, Me));
                  case 115:
                    e.next = 109;
                    break;
                  case 117:
                    e.next = 122;
                    break;
                  case 119:
                    ((e.prev = 119), (e.t3 = e["catch"](107)), Se.e(e.t3));
                  case 122:
                    return ((e.prev = 122), Se.f(), e.finish(122));
                  case 125:
                    yn.set(t.parentElement, we);
                  case 126:
                    if (Ce) {
                      e.next = 128;
                      break;
                    }
                    return e.abrupt("continue", 134);
                  case 128:
                    ("::before" === v
                      ? n.insertBefore(fe, n.firstChild)
                      : n.appendChild(fe),
                      (e.next = 134));
                    break;
                  case 131:
                    ((e.prev = 131),
                      (e.t4 = e["catch"](11)),
                      ut.warn(
                        "[snapdom] Failed to capture ".concat(v, " for"),
                        t,
                        e.t4,
                      ));
                  case 134:
                    (p++, (e.next = 9));
                    break;
                  case 137:
                    ((Ze = Array.from(t.children)),
                      (Te = Array.from(n.children).filter(function (e) {
                        return !e.dataset.snapdomPseudo;
                      })),
                      (Oe = 0));
                  case 139:
                    if (!(Oe < Math.min(Ze.length, Te.length))) {
                      e.next = 145;
                      break;
                    }
                    return ((e.next = 142), An(Ze[Oe], Te[Oe], r, u));
                  case 142:
                    (Oe++, (e.next = 139));
                    break;
                  case 145:
                  case "end":
                    return e.stop();
                }
            },
            e,
            null,
            [
              [11, 131],
              [37, 49, 52, 55],
              [74, 82],
              [91, 99],
              [107, 119, 122, 125],
            ],
          );
        }),
      )),
      kn.apply(this, arguments)
    );
  }
  function Sn(e, t) {
    if (e && e instanceof Element) {
      var n = e.ownerDocument || document,
        r = t || n,
        a =
          e instanceof SVGSVGElement
            ? [e]
            : Array.from(e.querySelectorAll("svg"));
      if (0 !== a.length) {
        var i,
          o = /url\(\s*#([^)]+)\)/g,
          c = [
            "fill",
            "stroke",
            "filter",
            "clip-path",
            "mask",
            "marker",
            "marker-start",
            "marker-mid",
            "marker-end",
          ],
          l = function (e) {
            return window.CSS && CSS.escape
              ? CSS.escape(e)
              : e.replace(/[^a-zA-Z0-9_-]/g, "\\$&");
          },
          f = "http://www.w3.org/1999/xlink",
          d = function (e) {
            if (!e || !e.getAttribute) return null;
            var t =
              e.getAttribute("href") ||
              e.getAttribute("xlink:href") ||
              ("function" == typeof e.getAttributeNS
                ? e.getAttributeNS(f, "href")
                : null);
            if (t) return t;
            var n = e.attributes;
            if (!n) return null;
            for (var r = 0; r < n.length; r++) {
              var u = n[r];
              if (u && u.name) {
                if ("href" === u.name) return u.value;
                var a = u.name.indexOf(":");
                if (-1 !== a && "href" === u.name.slice(a + 1)) return u.value;
              }
            }
            return null;
          },
          p = new Set(
            Array.from(e.querySelectorAll("[id]")).map(function (e) {
              return e.id;
            }),
          ),
          h = new Set(),
          D = !1,
          m = function (e) {
            var t,
              n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : null;
            if (e)
              for (o.lastIndex = 0; (t = o.exec(e)); ) {
                D = !0;
                var r = (t[1] || "").trim();
                r && (p.has(r) || (h.add(r), n && !n.has(r) && n.add(r)));
              }
          },
          v = function (e) {
            var t,
              n = e.querySelectorAll("use"),
              r = (0, s.Z)(n);
            try {
              for (r.s(); !(t = r.n()).done; ) {
                var u = t.value,
                  a = d(u);
                if (a && a.startsWith("#")) {
                  D = !0;
                  var i = a.slice(1).trim();
                  i && !p.has(i) && h.add(i);
                }
              }
            } catch (F) {
              r.e(F);
            } finally {
              r.f();
            }
            var o,
              l = e.querySelectorAll(
                '*[style*="url("],*[fill^="url("], *[stroke^="url("],*[filter^="url("],*[clip-path^="url("],*[mask^="url("],*[marker^="url("],*[marker-start^="url("],*[marker-mid^="url("],*[marker-end^="url("]',
              ),
              f = (0, s.Z)(l);
            try {
              for (f.s(); !(o = f.n()).done; ) {
                var v = o.value;
                m(v.getAttribute("style") || "");
                for (var g = 0, y = c; g < y.length; g++) {
                  var b = y[g];
                  m(v.getAttribute(b));
                }
              }
            } catch (F) {
              f.e(F);
            } finally {
              f.f();
            }
          },
          g = (0, s.Z)(a);
        try {
          for (g.s(); !(i = g.n()).done; ) {
            var y = i.value;
            v(y);
          }
        } catch (U) {
          g.e(U);
        } finally {
          g.f();
        }
        if (D) {
          var b = e.querySelector("svg.inline-defs-container");
          b ||
            ((b = n.createElementNS("http://www.w3.org/2000/svg", "svg")),
            b.classList.add("inline-defs-container"),
            b.setAttribute("aria-hidden", "true"),
            b.setAttribute(
              "style",
              "position:absolute;width:0;height:0;overflow:hidden",
            ),
            e.insertBefore(b, e.firstChild || null));
          var F = b.querySelector("defs") || null,
            E = function (t) {
              if (!t || p.has(t)) return null;
              var n = l(t),
                u = function (t) {
                  var n = r.querySelector(t);
                  return n && !e.contains(n) ? n : null;
                };
              return (
                u("svg defs > *#".concat(n)) ||
                u("svg > symbol#".concat(n)) ||
                u("*#".concat(n))
              );
            };
          if (h.size)
            for (var x = new Set(h), C = new Set(); x.size; ) {
              var w = x.values().next().value;
              if ((x.delete(w), w && !p.has(w) && !C.has(w))) {
                var A = E(w);
                if (A) {
                  F ||
                    ((F = n.createElementNS(
                      "http://www.w3.org/2000/svg",
                      "defs",
                    )),
                    b.appendChild(F));
                  var k = A.cloneNode(!0);
                  (k.id || k.setAttribute("id", w),
                    F.appendChild(k),
                    C.add(w),
                    p.add(w));
                  var S,
                    B = [k].concat((0, u.Z)(k.querySelectorAll("*"))),
                    N = (0, s.Z)(B);
                  try {
                    for (N.s(); !(S = N.n()).done; ) {
                      var M,
                        Z = S.value,
                        T = d(Z);
                      if (T && T.startsWith("#")) {
                        var O = T.slice(1).trim();
                        O && !p.has(O) && !C.has(O) && x.add(O);
                      }
                      var I =
                        (null === (M = Z.getAttribute) || void 0 === M
                          ? void 0
                          : M.call(Z, "style")) || "";
                      I && m(I, x);
                      var R,
                        L = (0, s.Z)(c);
                      try {
                        for (L.s(); !(R = L.n()).done; ) {
                          var P,
                            _ = R.value,
                            j =
                              null === (P = Z.getAttribute) || void 0 === P
                                ? void 0
                                : P.call(Z, _);
                          j && m(j, x);
                        }
                      } catch (U) {
                        L.e(U);
                      } finally {
                        L.f();
                      }
                    }
                  } catch (U) {
                    N.e(U);
                  } finally {
                    N.f();
                  }
                } else C.add(w);
              }
            }
        }
      }
    }
  }
  function Bn(e, t) {
    if (e && t) {
      var n = e.scrollTop || 0;
      if (n) {
        "static" === getComputedStyle(t).position &&
          (t.style.position = "relative");
        for (
          var r = e.getBoundingClientRect(),
            u = e.clientHeight,
            a = "data-snap-ph",
            i = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT);
          i.nextNode();
        ) {
          var o,
            c = i.currentNode,
            s = getComputedStyle(c),
            l = s.position;
          if ("sticky" === l || "-webkit-sticky" === l) {
            var f = Nn(s.top),
              d = Nn(s.bottom);
            if (null != f || null != d) {
              var p = Mn(c, e),
                h = Zn(t, p, a);
              if (h) {
                var D = c.getBoundingClientRect(),
                  m = D.width,
                  v = D.height,
                  g = D.left - r.left;
                if (m > 0 && v > 0 && Number.isFinite(g)) {
                  var y = null != f ? f + n : n + (u - v - d);
                  if (Number.isFinite(y)) {
                    var b = Number.parseInt(s.zIndex, 10),
                      F = Number.isFinite(b),
                      E = F ? Math.max(b, 1) + 1 : 2,
                      x = F ? b - 1 : 0,
                      C = h.cloneNode(!1);
                    (C.setAttribute(a, "1"),
                      (C.style.position = "sticky"),
                      (C.style.left = "".concat(g, "px")),
                      (C.style.top = "".concat(y, "px")),
                      (C.style.width = "".concat(m, "px")),
                      (C.style.height = "".concat(v, "px")),
                      (C.style.visibility = "hidden"),
                      (C.style.zIndex = String(x)),
                      (C.style.overflow = "hidden"),
                      (C.style.background = "transparent"),
                      (C.style.boxShadow = "none"),
                      (C.style.filter = "none"),
                      null !== (o = h.parentElement) &&
                        void 0 !== o &&
                        o.insertBefore(C, h),
                      (h.style.position = "absolute"),
                      (h.style.left = "".concat(g, "px")),
                      (h.style.top = "".concat(y, "px")),
                      (h.style.bottom = "auto"),
                      (h.style.zIndex = String(E)),
                      (h.style.pointerEvents = "none"));
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  function Nn(e) {
    if (!e || "auto" === e) return null;
    var t = Number.parseFloat(e);
    return Number.isFinite(t) ? t : null;
  }
  function Mn(e, t) {
    for (var n = [], r = e; r && r !== t; ) {
      var u = r.parentElement;
      if (!u) break;
      (n.push(Array.prototype.indexOf.call(u.children, r)), (r = u));
    }
    return n.reverse();
  }
  function Zn(e, t, n) {
    for (var r = e, u = 0; u < t.length; u++)
      if (((r = Tn(r, n)[t[u]]), !r)) return null;
    return r instanceof HTMLElement ? r : null;
  }
  function Tn(e, t) {
    for (var n = [], r = e.children, u = 0; u < r.length; u++) {
      var a = r[u];
      a.hasAttribute(t) || n.push(a);
    }
    return n;
  }
  function On(e) {
    var t = getComputedStyle(e),
      n = t.outlineStyle,
      r = t.outlineWidth,
      u = t.borderStyle,
      a = t.borderWidth,
      i = "none" !== n && parseFloat(r) > 0,
      o = "none" === u || 0 === parseFloat(a);
    i && o && (e.style.border = "".concat(r, " solid transparent"));
  }
  function In(e) {
    return Rn.apply(this, arguments);
  }
  function Rn() {
    return (
      (Rn = (0, c.Z)(
        (0, i.Z)().mark(function e(t) {
          var n,
            r,
            u,
            a,
            o,
            c,
            f,
            p,
            h,
            m,
            v,
            g,
            y,
            b,
            F,
            E,
            x,
            C,
            w,
            A,
            k,
            S,
            B,
            N,
            M,
            Z,
            T,
            O,
            I,
            R,
            L,
            P,
            _,
            j,
            W,
            q,
            H = arguments;
          return (0, i.Z)().wrap(
            function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    ((n = H.length > 1 && void 0 !== H[1] ? H[1] : {}),
                      (r = {
                        styleMap: d.session.styleMap,
                        styleCache: d.session.styleCache,
                        nodeMap: d.session.nodeMap,
                      }),
                      (a = ""),
                      (o = ""),
                      On(t));
                    try {
                      Sn(t);
                    } catch (c) {
                      ut.warn("inlineExternal defs or symbol failed:", c);
                    }
                    return ((e.prev = 4), (e.next = 7), nn(t, r, n, t));
                  case 7:
                    ((u = e.sent), (e.next = 13));
                    break;
                  case 10:
                    throw (
                      (e.prev = 10),
                      (e.t0 = e["catch"](4)),
                      ut.warn("deepClone failed:", e.t0),
                      e.t0
                    );
                  case 13:
                    return ((e.prev = 13), (e.next = 16), An(t, u, r, n));
                  case 16:
                    e.next = 21;
                    break;
                  case 18:
                    ((e.prev = 18),
                      (e.t1 = e["catch"](13)),
                      ut.warn("inlinePseudoElements failed:", e.t1));
                  case 21:
                    return ((e.next = 23), en(u));
                  case 23:
                    try {
                      ((c = u.querySelectorAll("style[data-sd]")),
                        (f = (0, s.Z)(c)));
                      try {
                        for (f.s(); !(p = f.n()).done; )
                          ((h = p.value),
                            (o += h.textContent || ""),
                            h.remove());
                      } catch (i) {
                        f.e(i);
                      } finally {
                        f.f();
                      }
                    } catch (z) {}
                    ((m = U(r.styleMap)),
                      (a = Array.from(m.entries())
                        .map(function (e) {
                          var t = (0, l.Z)(e, 2),
                            n = t[0],
                            r = t[1];
                          return ".".concat(r, "{").concat(n, "}");
                        })
                        .join("")),
                      (a = o + a),
                      (v = (0, s.Z)(r.styleMap.entries())),
                      (e.prev = 27),
                      v.s());
                  case 29:
                    if ((g = v.n()).done) {
                      e.next = 42;
                      break;
                    }
                    if (
                      ((F = (0, l.Z)(g.value, 2)),
                      (E = F[0]),
                      (x = F[1]),
                      "STYLE" !== E.tagName)
                    ) {
                      e.next = 33;
                      break;
                    }
                    return e.abrupt("continue", 40);
                  case 33:
                    if (
                      !(E.getRootNode && E.getRootNode() instanceof ShadowRoot)
                    ) {
                      e.next = 36;
                      break;
                    }
                    return (
                      E.setAttribute("style", x.replace(/;/g, "; ")),
                      e.abrupt("continue", 40)
                    );
                  case 36:
                    ((C = m.get(x)),
                      C && E.classList.add(C),
                      (w =
                        null === (y = E.style) || void 0 === y
                          ? void 0
                          : y.backgroundImage),
                      (A =
                        null === (b = E.dataset) || void 0 === b
                          ? void 0
                          : b.snapdomHasIcon),
                      w && "none" !== w && (E.style.backgroundImage = w),
                      A &&
                        ((E.style.verticalAlign = "middle"),
                        (E.style.display = "inline")));
                  case 40:
                    e.next = 29;
                    break;
                  case 42:
                    e.next = 47;
                    break;
                  case 44:
                    ((e.prev = 44), (e.t2 = e["catch"](27)), v.e(e.t2));
                  case 47:
                    return ((e.prev = 47), v.f(), e.finish(47));
                  case 50:
                    k = (0, s.Z)(r.nodeMap.entries());
                    try {
                      for (k.s(); !(S = k.n()).done; )
                        if (
                          ((B = (0, l.Z)(S.value, 2)),
                          (N = B[0]),
                          (M = B[1]),
                          (Z = M.scrollLeft),
                          (T = M.scrollTop),
                          (Z || T) && N instanceof HTMLElement)
                        ) {
                          for (
                            N.style.overflow = "hidden",
                              N.style.scrollbarWidth = "none",
                              N.style.msOverflowStyle = "none",
                              O = document.createElement("div"),
                              O.style.transform = "translate("
                                .concat(-Z, "px, ")
                                .concat(-T, "px)"),
                              O.style.willChange = "transform",
                              O.style.display = "inline-block",
                              O.style.width = "100%";
                            N.firstChild;
                          )
                            O.appendChild(N.firstChild);
                          N.appendChild(O);
                        }
                    } catch (i) {
                      k.e(i);
                    } finally {
                      k.f();
                    }
                    ((I =
                      u instanceof HTMLElement &&
                      u.firstElementChild instanceof HTMLElement
                        ? u.firstElementChild
                        : u),
                      Bn(t, I),
                      t === r.nodeMap.get(u) &&
                        ((R =
                          r.styleCache.get(t) || window.getComputedStyle(t)),
                        r.styleCache.set(t, R),
                        (L = D(R.transform)),
                        (u.style.margin = "0"),
                        (u.style.top = "auto"),
                        (u.style.left = "auto"),
                        (u.style.right = "auto"),
                        (u.style.bottom = "auto"),
                        (u.style.animation = "none"),
                        (u.style.transition = "none"),
                        (u.style.willChange = "auto"),
                        (u.style.float = "none"),
                        (u.style.clear = "none"),
                        (u.style.transform = L || "")),
                      (P = (0, s.Z)(r.nodeMap.entries())));
                    try {
                      for (P.s(); !(_ = P.n()).done; )
                        ((j = (0, l.Z)(_.value, 2)),
                          (W = j[0]),
                          (q = j[1]),
                          "PRE" === q.tagName &&
                            ((W.style.marginTop = "0"),
                            (W.style.marginBlockStart = "0")));
                    } catch (i) {
                      P.e(i);
                    } finally {
                      P.f();
                    }
                    return e.abrupt("return", {
                      clone: u,
                      classCSS: a,
                      styleCache: r.styleCache,
                    });
                  case 57:
                  case "end":
                    return e.stop();
                }
            },
            e,
            null,
            [
              [4, 10],
              [13, 18],
              [27, 44, 47, 50],
            ],
          );
        }),
      )),
      Rn.apply(this, arguments)
    );
  }
  function Ln(e) {
    var t,
      n,
      r,
      u,
      a =
        parseInt(
          (null === (t = e.dataset) || void 0 === t
            ? void 0
            : t.snapdomWidth) || "",
          10,
        ) || 0,
      i =
        parseInt(
          (null === (n = e.dataset) || void 0 === n
            ? void 0
            : n.snapdomHeight) || "",
          10,
        ) || 0,
      o = parseInt(e.getAttribute("width") || "", 10) || 0,
      c = parseInt(e.getAttribute("height") || "", 10) || 0,
      s =
        parseFloat(
          (null === (r = e.style) || void 0 === r ? void 0 : r.width) || "",
        ) || 0,
      l =
        parseFloat(
          (null === (u = e.style) || void 0 === u ? void 0 : u.height) || "",
        ) || 0,
      f = a || s || o || e.width || e.naturalWidth || 100,
      d = i || l || c || e.height || e.naturalHeight || 100;
    return { width: f, height: d };
  }
  function Pn(e) {
    return _n.apply(this, arguments);
  }
  function _n() {
    return (
      (_n = (0, c.Z)(
        (0, i.Z)().mark(function e(t) {
          var n,
            r,
            u,
            a,
            o,
            s = arguments;
          return (0, i.Z)().wrap(function (e) {
            while (1)
              switch ((e.prev = e.next)) {
                case 0:
                  ((n = s.length > 1 && void 0 !== s[1] ? s[1] : {}),
                    (r = Array.from(t.querySelectorAll("img"))),
                    (u = (function () {
                      var e = (0, c.Z)(
                        (0, i.Z)().mark(function e(t) {
                          var r, u, a, o, c, s, l, f, d, p, h, D;
                          return (0, i.Z)().wrap(
                            function (e) {
                              while (1)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    if (
                                      (t.getAttribute("src") ||
                                        ((r = t.currentSrc || t.src || ""),
                                        r && t.setAttribute("src", r)),
                                      t.removeAttribute("srcset"),
                                      t.removeAttribute("sizes"),
                                      (u = t.src || ""),
                                      u)
                                    ) {
                                      e.next = 5;
                                      break;
                                    }
                                    return e.abrupt("return");
                                  case 5:
                                    return (
                                      (e.next = 7),
                                      k(u, {
                                        as: "dataURL",
                                        useProxy: n.useProxy,
                                      })
                                    );
                                  case 7:
                                    if (
                                      ((a = e.sent),
                                      !a.ok ||
                                        "string" != typeof a.data ||
                                        !a.data.startsWith("data:"))
                                    ) {
                                      e.next = 11;
                                      break;
                                    }
                                    return (
                                      (t.src = a.data),
                                      t.width ||
                                        (t.width = t.naturalWidth || 100),
                                      t.height ||
                                        (t.height = t.naturalHeight || 100),
                                      e.abrupt("return")
                                    );
                                  case 11:
                                    if (
                                      ((o = Ln(t)),
                                      (c = o.width),
                                      (s = o.height),
                                      (l = n || {}),
                                      (f = l.fallbackURL),
                                      !f)
                                    ) {
                                      e.next = 32;
                                      break;
                                    }
                                    if (
                                      ((e.prev = 13), "function" != typeof f)
                                    ) {
                                      e.next = 20;
                                      break;
                                    }
                                    return (
                                      (e.next = 17),
                                      f({
                                        width: c,
                                        height: s,
                                        src: u,
                                        element: t,
                                      })
                                    );
                                  case 17:
                                    ((e.t0 = e.sent), (e.next = 21));
                                    break;
                                  case 20:
                                    e.t0 = f;
                                  case 21:
                                    if (((d = e.t0), !d)) {
                                      e.next = 28;
                                      break;
                                    }
                                    return (
                                      (e.next = 25),
                                      k(d, {
                                        as: "dataURL",
                                        useProxy: n.useProxy,
                                      })
                                    );
                                  case 25:
                                    return (
                                      (p = e.sent),
                                      (t.src = p.data),
                                      t.width || (t.width = c),
                                      t.height || (t.height = s),
                                      e.abrupt("return")
                                    );
                                  case 28:
                                    e.next = 32;
                                    break;
                                  case 30:
                                    ((e.prev = 30), (e.t1 = e["catch"](13)));
                                  case 32:
                                    !1 !== n.placeholders
                                      ? ((h = document.createElement("div")),
                                        (h.style.cssText = [
                                          "width:".concat(c, "px"),
                                          "height:".concat(s, "px"),
                                          "background:#ccc",
                                          "display:inline-block",
                                          "text-align:center",
                                          "line-height:".concat(s, "px"),
                                          "color:#666",
                                          "font-size:12px",
                                          "overflow:hidden",
                                        ].join(";")),
                                        (h.textContent = "img"),
                                        t.replaceWith(h))
                                      : ((D = document.createElement("div")),
                                        (D.style.cssText =
                                          "display:inline-block;width:"
                                            .concat(c, "px;height:")
                                            .concat(
                                              s,
                                              "px;visibility:hidden;",
                                            )),
                                        t.replaceWith(D));
                                  case 33:
                                  case "end":
                                    return e.stop();
                                }
                            },
                            e,
                            null,
                            [[13, 30]],
                          );
                        }),
                      );
                      return function (t) {
                        return e.apply(this, arguments);
                      };
                    })()),
                    (a = 0));
                case 3:
                  if (!(a < r.length)) {
                    e.next = 10;
                    break;
                  }
                  return (
                    (o = r.slice(a, a + 4).map(u)),
                    (e.next = 7),
                    Promise.allSettled(o)
                  );
                case 7:
                  ((a += 4), (e.next = 3));
                  break;
                case 10:
                case "end":
                  return e.stop();
              }
          }, e);
        }),
      )),
      _n.apply(this, arguments)
    );
  }
  function jn(e) {
    var t;
    if (!e) return function () {};
    var n = Un(e);
    if (n <= 0) return function () {};
    if (!Hn(e)) return function () {};
    var r = getComputedStyle(e),
      u = Math.round(Wn(r) * n + qn(r)),
      a = null !== (t = e.textContent) && void 0 !== t ? t : "",
      i = a;
    if (e.scrollHeight <= u + 0.5) return function () {};
    for (var o = 0, c = a.length, s = -1; o <= c; ) {
      var l = (o + c) >> 1;
      ((e.textContent = a.slice(0, l) + "…"),
        e.scrollHeight <= u + 0.5 ? ((s = l), (o = l + 1)) : (c = l - 1));
    }
    return (
      (e.textContent = (s >= 0 ? a.slice(0, s) : "") + "…"),
      function () {
        e.textContent = i;
      }
    );
  }
  function Un(e) {
    var t = getComputedStyle(e),
      n =
        t.getPropertyValue("-webkit-line-clamp") ||
        t.getPropertyValue("line-clamp");
    n = (n || "").trim();
    var r = parseInt(n, 10);
    return Number.isFinite(r) && r > 0 ? r : 0;
  }
  function Wn(e) {
    var t = (e.lineHeight || "").trim(),
      n = parseFloat(e.fontSize) || 16;
    return t && "normal" !== t
      ? t.endsWith("px")
        ? parseFloat(t)
        : /^\d+(\.\d+)?$/.test(t)
          ? Math.round(parseFloat(t) * n)
          : t.endsWith("%")
            ? Math.round((parseFloat(t) / 100) * n)
            : Math.round(1.2 * n)
      : Math.round(1.2 * n);
  }
  function qn(e) {
    return (parseFloat(e.paddingTop) || 0) + (parseFloat(e.paddingBottom) || 0);
  }
  function Hn(e) {
    return (
      !(e.childElementCount > 0) &&
      Array.from(e.childNodes).some(function (e) {
        return e.nodeType === Node.TEXT_NODE;
      })
    );
  }
  function zn(e, t) {
    if (e && t && t.style) {
      var n = getComputedStyle(e);
      try {
        t.style.boxShadow = "none";
      } catch (u) {}
      try {
        t.style.textShadow = "none";
      } catch (a) {}
      try {
        t.style.outline = "none";
      } catch (i) {}
      var r = (n.filter || "")
        .replace(/\bblur\([^()]*\)\s*/gi, "")
        .replace(/\bdrop-shadow\([^()]*\)\s*/gi, "")
        .trim()
        .replace(/\s+/g, " ");
      try {
        t.style.filter = r.length ? r : "none";
      } catch (o) {}
    }
  }
  function Vn(e) {
    for (
      var t = document.createTreeWalker(e, NodeFilter.SHOW_COMMENT), n = [];
      t.nextNode();
    )
      n.push(t.currentNode);
    for (var r = 0, u = n; r < u.length; r++) {
      var a = u[r];
      a.remove();
    }
  }
  function $n(e) {
    for (
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = t.stripFrameworkDirectives,
        r = void 0 === n || n,
        u = new Set(["xml", "xlink"]),
        a = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT);
      a.nextNode();
    )
      for (
        var i = a.currentNode, o = 0, c = Array.from(i.attributes);
        o < c.length;
        o++
      ) {
        var s = c[o],
          l = s.name;
        if (l.includes("@")) i.removeAttribute(l);
        else {
          if (l.includes(":")) {
            var f = l.split(":", 1)[0];
            if (!u.has(f)) {
              i.removeAttribute(l);
              continue;
            }
          }
          r &&
            (l.startsWith("x-") ||
              l.startsWith("v-") ||
              l.startsWith(":") ||
              l.startsWith("on:") ||
              l.startsWith("bind:") ||
              l.startsWith("let:") ||
              l.startsWith("class:")) &&
            i.removeAttribute(l);
        }
      }
  }
  function Xn(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    e && ($n(e, t), Vn(e));
  }
  function Gn(e) {
    try {
      var t,
        n =
          (null === (t = e.getAttribute) || void 0 === t
            ? void 0
            : t.call(e, "style")) || "";
      return /\b(height|width|block-size|inline-size)\s*:/.test(n);
    } catch (r) {
      return !1;
    }
  }
  function Yn(e) {
    return (
      e instanceof HTMLImageElement ||
      e instanceof HTMLCanvasElement ||
      e instanceof HTMLVideoElement ||
      e instanceof HTMLIFrameElement ||
      e instanceof SVGElement ||
      e instanceof HTMLObjectElement ||
      e instanceof HTMLEmbedElement
    );
  }
  function Kn(e, t) {
    if (!(e instanceof Element) || Gn(e) || Yn(e)) return !1;
    var n = t.position;
    if ("absolute" === n || "fixed" === n || "sticky" === n) return !1;
    var r = t.display || "";
    return !(
      r.includes("flex") ||
      r.includes("grid") ||
      r.startsWith("table") ||
      (t.transform && "none" !== t.transform)
    );
  }
  function Qn(e, t) {
    var n =
      arguments.length > 2 && void 0 !== arguments[2]
        ? arguments[2]
        : new Map();
    function r(e, t) {
      if (e instanceof Element && t instanceof Element) {
        var u = e.childElementCount > t.childElementCount,
          a = n.get(e) || getComputedStyle(e);
        if ((n.has(e) || n.set(e, a), u && Kn(e, a))) {
          (t.style.height || (t.style.height = "auto"),
            t.style.width || (t.style.width = "auto"),
            t.style.removeProperty("block-size"),
            t.style.removeProperty("inline-size"),
            t.style.minHeight || (t.style.minHeight = "0"),
            t.style.minWidth || (t.style.minWidth = "0"),
            t.style.maxHeight || (t.style.maxHeight = "none"),
            t.style.maxWidth || (t.style.maxWidth = "none"));
          var i = a.overflowY || a.overflowBlock || "visible",
            o = a.overflowX || a.overflowInline || "visible";
          ("visible" !== i || "visible" !== o) &&
            (t.style.overflow = "visible");
        }
        for (
          var c = Array.from(e.children), s = Array.from(t.children), l = 0;
          l < Math.min(c.length, s.length);
          l++
        )
          r(c[l], s[l]);
      }
    }
    r(e, t);
  }
  function Jn(e) {
    var t = getComputedStyle(e);
    return !(
      "none" === t.display ||
      "absolute" === t.position ||
      "fixed" === t.position ||
      "sticky" === t.position ||
      "none" !== (t.cssFloat || t.float || "none") ||
      (t.transform && "none" !== t.transform)
    );
  }
  function er(e, t) {
    if (!(e instanceof Element)) return !1;
    if (
      "exclude" === e.getAttribute("data-capture") &&
      "remove" === (null === t || void 0 === t ? void 0 : t.excludeMode)
    )
      return !0;
    if (Array.isArray(null === t || void 0 === t ? void 0 : t.exclude)) {
      var n,
        r = (0, s.Z)(t.exclude);
      try {
        for (r.s(); !(n = r.n()).done; ) {
          var u = n.value;
          try {
            if (e.matches(u)) return "remove" === t.excludeMode;
          } catch (a) {}
        }
      } catch (i) {
        r.e(i);
      } finally {
        r.f();
      }
    }
    return !1;
  }
  function tr(e, t) {
    for (
      var n = getComputedStyle(e),
        r = e.getBoundingClientRect(),
        u = 1 / 0,
        a = -1 / 0,
        i = !1,
        o = Array.from(e.children),
        c = 0,
        s = o;
      c < s.length;
      c++
    ) {
      var l = s[c];
      if (!er(l, t) && Jn(l)) {
        var f = l.getBoundingClientRect(),
          d = f.top - r.top,
          p = f.bottom - r.top;
        p <= d || (d < u && (u = d), p > a && (a = p), (i = !0));
      }
    }
    var h = i ? Math.max(0, a - u) : 0,
      D = parseFloat(n.borderTopWidth) || 0,
      m = parseFloat(n.borderBottomWidth) || 0,
      v = parseFloat(n.paddingTop) || 0,
      g = parseFloat(n.paddingBottom) || 0;
    return D + m + v + g + h;
  }
  var nr = function (e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
    return Number.isFinite(e)
      ? Math.round(e * Math.pow(10, t)) / Math.pow(10, t)
      : e;
  };
  function rr(e) {
    var t = e.boxShadow || "";
    if (!t || "none" === t) return { top: 0, right: 0, bottom: 0, left: 0 };
    var n,
      r = t.split(/\),(?=(?:[^()]*\([^()]*\))*[^()]*$)/).map(function (e) {
        return e.trim();
      }),
      u = 0,
      a = 0,
      i = 0,
      o = 0,
      c = (0, s.Z)(r);
    try {
      for (c.s(); !(n = c.n()).done; ) {
        var f,
          d = n.value,
          p =
            (null === (f = d.match(/-?\d+(\.\d+)?px/g)) || void 0 === f
              ? void 0
              : f.map(function (e) {
                  return parseFloat(e);
                })) || [];
        if (!(p.length < 2)) {
          var h = (0, l.Z)(p, 4),
            D = h[0],
            m = h[1],
            v = h[2],
            g = void 0 === v ? 0 : v,
            y = h[3],
            b = void 0 === y ? 0 : y,
            F = Math.abs(D) + g + b,
            E = Math.abs(m) + g + b;
          ((a = Math.max(a, F + Math.max(D, 0))),
            (o = Math.max(o, F + Math.max(-D, 0))),
            (i = Math.max(i, E + Math.max(m, 0))),
            (u = Math.max(u, E + Math.max(-m, 0))));
        }
      }
    } catch (x) {
      c.e(x);
    } finally {
      c.f();
    }
    return {
      top: Math.ceil(u),
      right: Math.ceil(a),
      bottom: Math.ceil(i),
      left: Math.ceil(o),
    };
  }
  function ur(e) {
    var t = (e.filter || "").match(/blur\(\s*([0-9.]+)px\s*\)/),
      n = t ? Math.ceil(parseFloat(t[1]) || 0) : 0;
    return { top: n, right: n, bottom: n, left: n };
  }
  function ar(e) {
    if ("none" === (e.outlineStyle || "none"))
      return { top: 0, right: 0, bottom: 0, left: 0 };
    var t = Math.ceil(parseFloat(e.outlineWidth || "0") || 0);
    return { top: t, right: t, bottom: t, left: t };
  }
  function ir(e) {
    var t = ""
      .concat(e.filter || "", " ")
      .concat(e.webkitFilter || "")
      .trim();
    if (!t || "none" === t)
      return { bleed: { top: 0, right: 0, bottom: 0, left: 0 }, has: !1 };
    var n,
      r = t.match(/drop-shadow\((?:[^()]|\([^()]*\))*\)/gi) || [],
      u = 0,
      a = 0,
      i = 0,
      o = 0,
      c = !1,
      f = (0, s.Z)(r);
    try {
      for (f.s(); !(n = f.n()).done; ) {
        var d,
          p = n.value;
        c = !0;
        var h =
            (null === (d = p.match(/-?\d+(?:\.\d+)?px/gi)) || void 0 === d
              ? void 0
              : d.map(function (e) {
                  return parseFloat(e);
                })) || [],
          D = (0, l.Z)(h, 3),
          m = D[0],
          v = void 0 === m ? 0 : m,
          g = D[1],
          y = void 0 === g ? 0 : g,
          b = D[2],
          F = void 0 === b ? 0 : b,
          E = Math.abs(v) + F,
          x = Math.abs(y) + F;
        ((a = Math.max(a, E + Math.max(v, 0))),
          (o = Math.max(o, E + Math.max(-v, 0))),
          (i = Math.max(i, x + Math.max(y, 0))),
          (u = Math.max(u, x + Math.max(-y, 0))));
      }
    } catch (C) {
      f.e(C);
    } finally {
      f.f();
    }
    return {
      bleed: { top: nr(u), right: nr(a), bottom: nr(i), left: nr(o) },
      has: c,
    };
  }
  function or(e, t) {
    if (!e || !t || !t.style) return null;
    var n = getComputedStyle(e);
    try {
      t.style.transformOrigin = "0 0";
    } catch (w) {}
    try {
      ("translate" in t.style && (t.style.translate = "none"),
        "rotate" in t.style && (t.style.rotate = "none"));
    } catch (A) {}
    var r = n.transform || "none";
    if (!r || "none" === r)
      try {
        var u = Dr(e);
        if (1 === u.a && 0 === u.b && 0 === u.c && 1 === u.d)
          return ((t.style.transform = "none"), { a: 1, b: 0, c: 0, d: 1 });
      } catch (k) {}
    var a = r.match(/^matrix\(\s*([^)]+)\)$/i);
    if (a) {
      var i = a[1].split(",").map(function (e) {
        return parseFloat(e.trim());
      });
      if (6 === i.length && i.every(Number.isFinite)) {
        var o = (0, l.Z)(i, 4),
          c = o[0],
          s = o[1],
          f = o[2],
          d = o[3],
          p = Math.sqrt(c * c + s * s) || 0,
          h = 0,
          D = 0,
          m = 0,
          v = 0,
          g = 0,
          y = 0;
        p > 0 &&
          ((h = c / p),
          (D = s / p),
          (m = h * f + D * d),
          (v = f - h * m),
          (g = d - D * m),
          (y = Math.sqrt(v * v + g * g) || 0),
          y > 0 ? (m /= y) : (m = 0));
        var b = p,
          F = 0,
          E = m * y,
          x = y;
        try {
          t.style.transform = "matrix("
            .concat(b, ", ")
            .concat(F, ", ")
            .concat(E, ", ")
            .concat(x, ", 0, 0)");
        } catch (S) {}
        return { a: b, b: F, c: E, d: x };
      }
    }
    try {
      var C = String(r).trim();
      return (
        (t.style.transform = C + " translate(0px, 0px) rotate(0deg)"),
        null
      );
    } catch (B) {
      return null;
    }
  }
  function cr(e, t, n, r, u) {
    var a = n.a,
      i = n.b,
      o = n.c,
      c = n.d,
      s = n.e || 0,
      f = n.f || 0;
    function d(e, t) {
      var n = e - r,
        l = t - u,
        d = a * n + o * l,
        p = i * n + c * l;
      return ((d += r + s), (p += u + f), [d, p]);
    }
    for (
      var p = [d(0, 0), d(e, 0), d(0, t), d(e, t)],
        h = 1 / 0,
        D = 1 / 0,
        m = -1 / 0,
        v = -1 / 0,
        g = 0,
        y = p;
      g < y.length;
      g++
    ) {
      var b = (0, l.Z)(y[g], 2),
        F = b[0],
        E = b[1];
      (F < h && (h = F), E < D && (D = E), F > m && (m = F), E > v && (v = E));
    }
    return { minX: h, minY: D, maxX: m, maxY: v, width: m - h, height: v - D };
  }
  function sr(e, t, n) {
    var r = (e.transformOrigin || "0 0").trim().split(/\s+/),
      u = r[0] || "0",
      a = r[1] || "0",
      i = function (e, t) {
        var n = e.toLowerCase();
        return "left" === n || "top" === n
          ? 0
          : "center" === n
            ? t / 2
            : "right" === n || "bottom" === n
              ? t
              : n.endsWith("px")
                ? parseFloat(n) || 0
                : n.endsWith("%")
                  ? ((parseFloat(n) || 0) * t) / 100
                  : (/^-?\d+(\.\d+)?$/.test(n) && parseFloat(n)) || 0;
      };
    return { ox: i(u, t), oy: i(a, n) };
  }
  function lr(e) {
    var t = { rotate: "0deg", scale: null, translate: null },
      n = "function" == typeof e.computedStyleMap ? e.computedStyleMap() : null;
    if (n) {
      var r = function (e) {
          try {
            return ("function" == typeof n.has && !n.has(e)) ||
              "function" != typeof n.get
              ? null
              : n.get(e);
          } catch (t) {
            return null;
          }
        },
        u = r("rotate");
      if (u)
        if (u.angle) {
          var a = u.angle;
          t.rotate =
            "rad" === a.unit
              ? (180 * a.value) / Math.PI + "deg"
              : a.value + a.unit;
        } else
          u.unit
            ? (t.rotate =
                "rad" === u.unit
                  ? (180 * u.value) / Math.PI + "deg"
                  : u.value + u.unit)
            : (t.rotate = String(u));
      else {
        var i = getComputedStyle(e);
        t.rotate = i.rotate && "none" !== i.rotate ? i.rotate : "0deg";
      }
      var o = r("scale");
      if (o) {
        var c,
          s,
          l,
          f,
          d =
            "x" in o &&
            null != (null === (c = o.x) || void 0 === c ? void 0 : c.value)
              ? o.x.value
              : Array.isArray(o)
                ? null === (s = o[0]) || void 0 === s
                  ? void 0
                  : s.value
                : Number(o) || 1,
          p =
            "y" in o &&
            null != (null === (l = o.y) || void 0 === l ? void 0 : l.value)
              ? o.y.value
              : Array.isArray(o)
                ? null === (f = o[1]) || void 0 === f
                  ? void 0
                  : f.value
                : d;
        t.scale = "".concat(d, " ").concat(p);
      } else {
        var h = getComputedStyle(e);
        t.scale = h.scale && "none" !== h.scale ? h.scale : null;
      }
      var D = r("translate");
      if (D) {
        var m,
          v,
          g,
          y,
          b =
            "x" in D && "value" in D.x
              ? D.x.value
              : Array.isArray(D)
                ? null === (m = D[0]) || void 0 === m
                  ? void 0
                  : m.value
                : 0,
          F =
            "y" in D && "value" in D.y
              ? D.y.value
              : Array.isArray(D)
                ? null === (v = D[1]) || void 0 === v
                  ? void 0
                  : v.value
                : 0,
          E =
            "x" in D && null !== (g = D.x) && void 0 !== g && g.unit
              ? D.x.unit
              : "px",
          x =
            "y" in D && null !== (y = D.y) && void 0 !== y && y.unit
              ? D.y.unit
              : "px";
        t.translate = "".concat(b).concat(E, " ").concat(F).concat(x);
      } else {
        var C = getComputedStyle(e);
        t.translate =
          C.translate && "none" !== C.translate ? C.translate : null;
      }
      return t;
    }
    var w = getComputedStyle(e);
    return (
      (t.rotate = w.rotate && "none" !== w.rotate ? w.rotate : "0deg"),
      (t.scale = w.scale && "none" !== w.scale ? w.scale : null),
      (t.translate =
        w.translate && "none" !== w.translate ? w.translate : null),
      t
    );
  }
  var fr = null;
  function dr() {
    if (fr) return fr;
    var e = document.createElement("div");
    return (
      (e.id = "snapdom-measure-slot"),
      e.setAttribute("aria-hidden", "true"),
      Object.assign(e.style, {
        position: "absolute",
        left: "-99999px",
        top: "0px",
        width: "0px",
        height: "0px",
        overflow: "hidden",
        opacity: "0",
        pointerEvents: "none",
        contain: "size layout style",
      }),
      document.documentElement.appendChild(e),
      (fr = e),
      e
    );
  }
  function pr(e) {
    var t = dr(),
      n = document.createElement("div");
    ((n.style.transformOrigin = "0 0"),
      e.baseTransform && (n.style.transform = e.baseTransform),
      e.rotate && (n.style.rotate = e.rotate),
      e.scale && (n.style.scale = e.scale),
      e.translate && (n.style.translate = e.translate),
      t.appendChild(n));
    var r = Dr(n);
    return (t.removeChild(n), r);
  }
  function hr(e) {
    var t = getComputedStyle(e),
      n = t.transform || "none";
    if (
      "none" !== n &&
      !/^matrix\(\s*1\s*,\s*0\s*,\s*0\s*,\s*1\s*,\s*0\s*,\s*0\s*\)$/i.test(n)
    )
      return !0;
    var r = t.rotate && "none" !== t.rotate && "0deg" !== t.rotate,
      u = t.scale && "none" !== t.scale && "1" !== t.scale,
      a = t.translate && "none" !== t.translate && "0px 0px" !== t.translate;
    return !!(r || u || a);
  }
  function Dr(e) {
    var t = getComputedStyle(e).transform;
    if (!t || "none" === t) return new DOMMatrix();
    try {
      return new DOMMatrix(t);
    } catch (n) {
      return new WebKitCSSMatrix(t);
    }
  }
  function mr(e, t) {
    return vr.apply(this, arguments);
  }
  function vr() {
    return (
      (vr = (0, c.Z)(
        (0, i.Z)().mark(function e(t, n) {
          var r, u, a, s, l, f, h, D, m, v, g, y, F, E, x, C, w, A;
          return (0, i.Z)().wrap(
            function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (t) {
                      e.next = 2;
                      break;
                    }
                    throw new Error("Element cannot be null or undefined");
                  case 2:
                    return (
                      p(n.cache),
                      (u = n.fast),
                      (a = !1 !== n.outerTransforms),
                      (s = !!n.outerShadows),
                      (l = { element: t, options: n, plugins: n.plugins }),
                      (m = ""),
                      (v = ""),
                      (F = null),
                      (e.next = 6),
                      Ke("beforeSnap", l)
                    );
                  case 6:
                    return ((e.next = 8), Ke("beforeClone", l));
                  case 8:
                    return (
                      (E = jn(l.element)),
                      (e.prev = 9),
                      (e.next = 12),
                      In(l.element, l.options)
                    );
                  case 12:
                    ((x = e.sent),
                      (f = x.clone),
                      (h = x.classCSS),
                      (D = x.styleCache),
                      !a && f && (F = or(l.element, f)),
                      !s && f && zn(l.element, f));
                  case 18:
                    return ((e.prev = 18), E(), e.finish(18));
                  case 21:
                    return (
                      (l = (0, o.Z)(
                        { clone: f, classCSS: h, styleCache: D },
                        l,
                      )),
                      (e.next = 24),
                      Ke("afterClone", l)
                    );
                  case 24:
                    if (
                      (Xn(l.clone),
                      "remove" !==
                        (null === (r = l.options) || void 0 === r
                          ? void 0
                          : r.excludeMode))
                    ) {
                      e.next = 27;
                      break;
                    }
                    try {
                      Qn(l.element, l.clone, l.styleCache);
                    } catch (b) {
                      ut.warn("[snapdom] shrink pass failed:", b);
                    }
                  case 27:
                    return (
                      (e.prev = 27),
                      (e.next = 30),
                      oe(l.clone, l.element)
                    );
                  case 30:
                    e.next = 34;
                    break;
                  case 32:
                    ((e.prev = 32), (e.t0 = e["catch"](27)));
                  case 34:
                    return (
                      (e.next = 36),
                      new Promise(function (e) {
                        (0, rt.a)(
                          (0, c.Z)(
                            (0, i.Z)().mark(function t() {
                              return (0, i.Z)().wrap(function (t) {
                                while (1)
                                  switch ((t.prev = t.next)) {
                                    case 0:
                                      return (
                                        (t.next = 2),
                                        Pn(l.clone, l.options)
                                      );
                                    case 2:
                                      e();
                                    case 3:
                                    case "end":
                                      return t.stop();
                                  }
                              }, t);
                            }),
                          ),
                          { fast: u },
                        );
                      })
                    );
                  case 36:
                    return (
                      (e.next = 38),
                      new Promise(function (e) {
                        (0, rt.a)(
                          (0, c.Z)(
                            (0, i.Z)().mark(function t() {
                              return (0, i.Z)().wrap(function (t) {
                                while (1)
                                  switch ((t.prev = t.next)) {
                                    case 0:
                                      return (
                                        (t.next = 2),
                                        ze(
                                          l.element,
                                          l.clone,
                                          l.styleCache,
                                          l.options,
                                        )
                                      );
                                    case 2:
                                      e();
                                    case 3:
                                    case "end":
                                      return t.stop();
                                  }
                              }, t);
                            }),
                          ),
                          { fast: u },
                        );
                      })
                    );
                  case 38:
                    if (((e.t1 = n.embedFonts), !e.t1)) {
                      e.next = 42;
                      break;
                    }
                    return (
                      (e.next = 42),
                      new Promise(function (e) {
                        (0, rt.a)(
                          (0, c.Z)(
                            (0, i.Z)().mark(function t() {
                              var n, r, u;
                              return (0, i.Z)().wrap(function (t) {
                                while (1)
                                  switch ((t.prev = t.next)) {
                                    case 0:
                                      if (
                                        ((n = Ue(l.element)),
                                        (r = We(l.element)),
                                        !(0, rt.b)())
                                      ) {
                                        t.next = 5;
                                        break;
                                      }
                                      return (
                                        (u = new Set(
                                          Array.from(n)
                                            .map(function (e) {
                                              return String(e).split("__")[0];
                                            })
                                            .filter(Boolean),
                                        )),
                                        (t.next = 5),
                                        qe(u, 1)
                                      );
                                    case 5:
                                      return (
                                        (t.next = 7),
                                        _e({
                                          required: n,
                                          usedCodepoints: r,
                                          preCached: !1,
                                          exclude: l.options.excludeFonts,
                                          useProxy: l.options.useProxy,
                                        })
                                      );
                                    case 7:
                                      ((m = t.sent), e());
                                    case 9:
                                    case "end":
                                      return t.stop();
                                  }
                              }, t);
                            }),
                          ),
                          { fast: u },
                        );
                      })
                    );
                  case 42:
                    if (
                      ((C = _(l.clone).sort()),
                      (w = C.join(",")),
                      !d.baseStyle.has(w))
                    ) {
                      e.next = 47;
                      break;
                    }
                    ((v = d.baseStyle.get(w)), (e.next = 49));
                    break;
                  case 47:
                    return (
                      (e.next = 49),
                      new Promise(function (e) {
                        (0, rt.a)(
                          function () {
                            ((v = j(C)), d.baseStyle.set(w, v), e());
                          },
                          { fast: u },
                        );
                      })
                    );
                  case 49:
                    return (
                      (l = (0, o.Z)({ fontsCSS: m, baseCSS: v }, l)),
                      (e.next = 52),
                      Ke("beforeRender", l)
                    );
                  case 52:
                    return (
                      (e.next = 54),
                      new Promise(function (e) {
                        (0, rt.a)(
                          function () {
                            var t,
                              r = getComputedStyle(l.element),
                              u = l.element.getBoundingClientRect(),
                              i = Math.max(
                                1,
                                nr(
                                  l.element.offsetWidth ||
                                    parseFloat(r.width) ||
                                    u.width ||
                                    1,
                                ),
                              ),
                              c = Math.max(
                                1,
                                nr(
                                  l.element.offsetHeight ||
                                    parseFloat(r.height) ||
                                    u.height ||
                                    1,
                                ),
                              );
                            if (
                              "remove" ===
                              (null === (t = l.options) || void 0 === t
                                ? void 0
                                : t.excludeMode)
                            ) {
                              var f = tr(l.element, l.options);
                              Number.isFinite(f) &&
                                f > 0 &&
                                (c = Math.max(1, Math.min(c, nr(f + 1))));
                            }
                            var d = function (e) {
                                var t =
                                    arguments.length > 1 &&
                                    void 0 !== arguments[1]
                                      ? arguments[1]
                                      : NaN,
                                  n = "string" == typeof e ? parseFloat(e) : e;
                                return Number.isFinite(n) ? n : t;
                              },
                              p = d(l.options.width),
                              h = d(l.options.height),
                              D = i,
                              m = c,
                              v = Number.isFinite(p),
                              b = Number.isFinite(h),
                              E = c > 0 ? i / c : 1;
                            v && b
                              ? ((D = Math.max(1, nr(p))),
                                (m = Math.max(1, nr(h))))
                              : v
                                ? ((D = Math.max(1, nr(p))),
                                  (m = Math.max(1, nr(D / (E || 1)))))
                                : b
                                  ? ((m = Math.max(1, nr(h))),
                                    (D = Math.max(1, nr(m * (E || 1)))))
                                  : ((D = i), (m = c));
                            var x = 0,
                              C = 0,
                              w = i,
                              A = c;
                            if (!a && F && Number.isFinite(F.a)) {
                              var k = {
                                  a: F.a,
                                  b: F.b || 0,
                                  c: F.c || 0,
                                  d: F.d || 1,
                                  e: 0,
                                  f: 0,
                                },
                                S = cr(i, c, k, 0, 0);
                              ((x = nr(S.minX)),
                                (C = nr(S.minY)),
                                (w = nr(S.maxX)),
                                (A = nr(S.maxY)));
                            } else if (a && gr(l.element)) {
                              var B =
                                  r.transform && "none" !== r.transform
                                    ? r.transform
                                    : "",
                                N = lr(l.element),
                                M = pr({
                                  baseTransform: B,
                                  rotate: N.rotate || "0deg",
                                  scale: N.scale,
                                  translate: N.translate,
                                }),
                                Z = sr(r, i, c),
                                T = Z.ox,
                                O = Z.oy,
                                I = M.is2D ? M : new DOMMatrix(M.toString()),
                                R = cr(i, c, I, T, O);
                              ((x = nr(R.minX)),
                                (C = nr(R.minY)),
                                (w = nr(R.maxX)),
                                (A = nr(R.maxY)));
                            }
                            var L = rr(r),
                              P = ur(r),
                              _ = ar(r),
                              j = ir(r),
                              U = s
                                ? {
                                    top: nr(
                                      L.top + P.top + _.top + j.bleed.top,
                                    ),
                                    right: nr(
                                      L.right +
                                        P.right +
                                        _.right +
                                        j.bleed.right,
                                    ),
                                    bottom: nr(
                                      L.bottom +
                                        P.bottom +
                                        _.bottom +
                                        j.bleed.bottom,
                                    ),
                                    left: nr(
                                      L.left + P.left + _.left + j.bleed.left,
                                    ),
                                  }
                                : { top: 0, right: 0, bottom: 0, left: 0 };
                            ((x = nr(x - U.left)),
                              (C = nr(C - U.top)),
                              (w = nr(w + U.right)),
                              (A = nr(A + U.bottom)));
                            var W = Math.max(1, nr(w - x)),
                              q = Math.max(1, nr(A - C)),
                              H = v || b ? nr(D / i) : 1,
                              z = b || v ? nr(m / c) : 1,
                              V = Math.max(1, nr(W * H)),
                              $ = Math.max(1, nr(q * z)),
                              X = "http://www.w3.org/2000/svg",
                              G = (0, rt.b)() ? 1 : 0,
                              Y = nr(G + (a ? 0 : 1)),
                              K = document.createElementNS(X, "foreignObject"),
                              Q = nr(x),
                              J = nr(C);
                            (K.setAttribute("x", String(nr(-(Q - Y)))),
                              K.setAttribute("y", String(nr(-(J - Y)))),
                              K.setAttribute("width", String(nr(i + 2 * Y))),
                              K.setAttribute("height", String(nr(c + 2 * Y))),
                              (K.style.overflow = "visible"));
                            var ee = document.createElement("style");
                            ((ee.textContent =
                              l.baseCSS +
                              l.fontsCSS +
                              "svg{overflow:visible;} foreignObject{overflow:visible;}" +
                              l.classCSS),
                              K.appendChild(ee));
                            var te = document.createElement("div");
                            (te.setAttribute(
                              "xmlns",
                              "http://www.w3.org/1999/xhtml",
                            ),
                              (te.style.width = "".concat(nr(i), "px")),
                              (te.style.height = "".concat(nr(c), "px")),
                              (te.style.overflow = "visible"),
                              l.clone.setAttribute(
                                "xmlns",
                                "http://www.w3.org/1999/xhtml",
                              ),
                              te.appendChild(l.clone),
                              K.appendChild(te));
                            var ne = new XMLSerializer().serializeToString(K),
                              re = nr(W + 2 * Y),
                              ue = nr(q + 2 * Y),
                              ae = v || b;
                            n.meta = {
                              w0: i,
                              h0: c,
                              vbW: re,
                              vbH: ue,
                              targetW: D,
                              targetH: m,
                            };
                            var ie = (0, rt.b)() && ae ? re : nr(V + 2 * Y),
                              oe = (0, rt.b)() && ae ? ue : nr($ + 2 * Y);
                            ((y =
                              '<svg xmlns="'
                                .concat(X, '" width="')
                                .concat(ie, '" height="')
                                .concat(oe, '" viewBox="0 0 ')
                                .concat(re, " ")
                                .concat(ue, '">') +
                              ne +
                              "</svg>"),
                              (g = "data:image/svg+xml;charset=utf-8,".concat(
                                encodeURIComponent(y),
                              )),
                              (l = (0, o.Z)({ svgString: y, dataURL: g }, l)),
                              e());
                          },
                          { fast: u },
                        );
                      })
                    );
                  case 54:
                    return ((e.next = 56), Ke("afterRender", l));
                  case 56:
                    return (
                      (A = document.getElementById("snapdom-sandbox")),
                      e.abrupt(
                        "return",
                        (A && "absolute" === A.style.position && A.remove(),
                        l.dataURL),
                      )
                    );
                  case 58:
                  case "end":
                    return e.stop();
                }
            },
            e,
            null,
            [
              [9, , 18, 21],
              [27, 32],
            ],
          );
        }),
      )),
      vr.apply(this, arguments)
    );
  }
  function gr(e) {
    return hr(e);
  }
  function yr(e) {
    if ("string" == typeof e) {
      var t = e.toLowerCase().trim();
      if ("disabled" === t || "full" === t || "auto" === t || "soft" === t)
        return t;
    }
    return "soft";
  }
  function br() {
    var e,
      t,
      n,
      r,
      u,
      a,
      i,
      o,
      c,
      s,
      l,
      f,
      d,
      p,
      h,
      D,
      m,
      v,
      g,
      y,
      b = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      F = null !== (e = b.format) && void 0 !== e ? e : "png";
    "jpg" === F && (F = "jpeg");
    var E = yr(b.cache);
    return {
      debug: null !== (t = b.debug) && void 0 !== t && t,
      fast: null === (n = b.fast) || void 0 === n || n,
      scale: null !== (r = b.scale) && void 0 !== r ? r : 1,
      exclude: null !== (u = b.exclude) && void 0 !== u ? u : [],
      excludeMode: null !== (a = b.excludeMode) && void 0 !== a ? a : "hide",
      filter: null !== (i = b.filter) && void 0 !== i ? i : null,
      filterMode: null !== (o = b.filterMode) && void 0 !== o ? o : "hide",
      placeholders: !1 !== b.placeholders,
      embedFonts: null !== (c = b.embedFonts) && void 0 !== c && c,
      iconFonts: Array.isArray(b.iconFonts)
        ? b.iconFonts
        : b.iconFonts
          ? [b.iconFonts]
          : [],
      localFonts: Array.isArray(b.localFonts) ? b.localFonts : [],
      excludeFonts: null !== (s = b.excludeFonts) && void 0 !== s ? s : void 0,
      fallbackURL: null !== (l = b.fallbackURL) && void 0 !== l ? l : void 0,
      cache: E,
      useProxy: "string" == typeof b.useProxy ? b.useProxy : "",
      width: null !== (f = b.width) && void 0 !== f ? f : null,
      height: null !== (d = b.height) && void 0 !== d ? d : null,
      format: F,
      type: null !== (p = b.type) && void 0 !== p ? p : "svg",
      quality: null !== (h = b.quality) && void 0 !== h ? h : 0.92,
      dpr:
        null !== (D = b.dpr) && void 0 !== D ? D : window.devicePixelRatio || 1,
      backgroundColor:
        null !== (m = b.backgroundColor) && void 0 !== m
          ? m
          : ["jpeg", "webp"].includes(F)
            ? "#ffffff"
            : null,
      filename: null !== (v = b.filename) && void 0 !== v ? v : "snapDOM",
      outerTransforms: null === (g = b.outerTransforms) || void 0 === g || g,
      outerShadows: null !== (y = b.outerShadows) && void 0 !== y && y,
    };
  }
  function Fr() {
    return (Ge.apply(void 0, arguments), Er);
  }
  var Er = Object.assign(Ar, { plugins: Fr }),
    xr = Symbol("snapdom.internal"),
    Cr = Symbol("snapdom.internal.silent"),
    wr = !1;
  function Ar(e, t) {
    return kr.apply(this, arguments);
  }
  function kr() {
    return (
      (kr = (0, c.Z)(
        (0, i.Z)().mark(function e(t, n) {
          var r, u;
          return (0, i.Z)().wrap(
            function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (t) {
                      e.next = 2;
                      break;
                    }
                    throw new Error("Element cannot be null or undefined");
                  case 2:
                    if (
                      ((r = br(n)),
                      nt(r, n && n.plugins),
                      !(0, rt.b)() || (!0 !== r.embedFonts && !Nr(t)))
                    ) {
                      e.next = 17;
                      break;
                    }
                    u = 0;
                  case 5:
                    if (!(u < 3)) {
                      e.next = 17;
                      break;
                    }
                    return ((e.prev = 6), (e.next = 9), Sr(t, n));
                  case 9:
                    ((wr = !1), (e.next = 14));
                    break;
                  case 12:
                    ((e.prev = 12), (e.t0 = e["catch"](6)));
                  case 14:
                    (u++, (e.next = 5));
                    break;
                  case 17:
                    return e.abrupt(
                      "return",
                      (r.iconFonts && r.iconFonts.length > 0 && G(r.iconFonts),
                      r.snap ||
                        (r.snap = {
                          toPng: function (e, t) {
                            return Er.toPng(e, t);
                          },
                          toSvg: function (e, t) {
                            return Er.toSvg(e, t);
                          },
                        }),
                      Er.capture(t, r, xr)),
                    );
                  case 18:
                  case "end":
                    return e.stop();
                }
            },
            e,
            null,
            [[6, 12]],
          );
        }),
      )),
      kr.apply(this, arguments)
    );
  }
  function Sr(e, t) {
    return Br.apply(this, arguments);
  }
  function Br() {
    return (
      (Br = (0, c.Z)(
        (0, i.Z)().mark(function e(t, n) {
          var r, u;
          return (0, i.Z)().wrap(
            function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (!wr) {
                      e.next = 2;
                      break;
                    }
                    return e.abrupt("return");
                  case 2:
                    return (
                      (r = (0, o.Z)(
                        (0, o.Z)({}, n),
                        {},
                        { fast: !0, embedFonts: !0, scale: 0.2 },
                      )),
                      (e.prev = 3),
                      (e.next = 6),
                      mr(t, r)
                    );
                  case 6:
                    ((u = e.sent), (e.next = 11));
                    break;
                  case 9:
                    ((e.prev = 9), (e.t0 = e["catch"](3)));
                  case 11:
                    return (
                      (e.next = 13),
                      new Promise(function (e) {
                        return requestAnimationFrame(function () {
                          return requestAnimationFrame(e);
                        });
                      })
                    );
                  case 13:
                    if (((e.t1 = u), !e.t1)) {
                      e.next = 17;
                      break;
                    }
                    return (
                      (e.next = 17),
                      new Promise(function (e) {
                        var t = new Image();
                        try {
                          ((t.decoding = "sync"), (t.loading = "eager"));
                        } catch (n) {}
                        ((t.style.cssText =
                          "position:fixed;left:0px;top:0px;width:10px;height:10px;opacity:0.01;pointer-events:none;"),
                          (t.src = u),
                          document.body.appendChild(t),
                          (0, c.Z)(
                            (0, i.Z)().mark(function n() {
                              var r;
                              return (0, i.Z)().wrap(
                                function (n) {
                                  while (1)
                                    switch ((n.prev = n.next)) {
                                      case 0:
                                        if (
                                          ((n.prev = 0),
                                          (n.t0 =
                                            "function" == typeof t.decode),
                                          !n.t0)
                                        ) {
                                          n.next = 5;
                                          break;
                                        }
                                        return ((n.next = 5), t.decode());
                                      case 5:
                                        n.next = 9;
                                        break;
                                      case 7:
                                        ((n.prev = 7), (n.t1 = n["catch"](0)));
                                      case 9:
                                        r = performance.now();
                                      case 10:
                                        if (
                                          (t.complete && t.naturalWidth > 0) ||
                                          !(performance.now() - r < 900)
                                        ) {
                                          n.next = 15;
                                          break;
                                        }
                                        return (
                                          (n.next = 13),
                                          new Promise(function (e) {
                                            return setTimeout(e, 50);
                                          })
                                        );
                                      case 13:
                                        n.next = 10;
                                        break;
                                      case 15:
                                        return (
                                          (n.next = 17),
                                          new Promise(function (e) {
                                            return requestAnimationFrame(e);
                                          })
                                        );
                                      case 17:
                                        try {
                                          t.remove();
                                        } catch (u) {}
                                        e();
                                      case 19:
                                      case "end":
                                        return n.stop();
                                    }
                                },
                                n,
                                null,
                                [[0, 7]],
                              );
                            }),
                          )());
                      })
                    );
                  case 17:
                    (t.querySelectorAll("canvas").forEach(function (e) {
                      try {
                        var t = e.getContext("2d", { willReadFrequently: !0 });
                        t && t.getImageData(0, 0, 1, 1);
                      } catch (n) {}
                    }),
                      (wr = !0));
                  case 19:
                  case "end":
                    return e.stop();
                }
            },
            e,
            null,
            [[3, 9]],
          );
        }),
      )),
      Br.apply(this, arguments)
    );
  }
  function Nr(e) {
    for (
      var t = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT);
      t.nextNode();
    ) {
      var n = t.currentNode,
        r = getComputedStyle(n),
        u = r.backgroundImage && "none" !== r.backgroundImage,
        a =
          (r.maskImage && "none" !== r.maskImage) ||
          (r.webkitMaskImage && "none" !== r.webkitMaskImage);
      if (u || a || "CANVAS" === n.tagName) return !0;
    }
    return !1;
  }
  ((Er.capture = (function () {
    var e = (0, c.Z)(
      (0, i.Z)().mark(function e(t, s, l) {
        var f, d, p, h, D, m, v, g, y, b, F, E, x, C, w;
        return (0, i.Z)().wrap(function (e) {
          while (1)
            switch ((e.prev = e.next)) {
              case 0:
                if (
                  ((F = function () {
                    return (
                      (F = (0, c.Z)(
                        (0, i.Z)().mark(function e(t, n) {
                          var r;
                          return (0, i.Z)().wrap(function (e) {
                            while (1)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (r = (function () {
                                      var e = (0, c.Z)(
                                        (0, i.Z)().mark(function e() {
                                          var r, u, a, c;
                                          return (0, i.Z)().wrap(function (e) {
                                            while (1)
                                              switch ((e.prev = e.next)) {
                                                case 0:
                                                  if (((r = m[t]), r)) {
                                                    e.next = 3;
                                                    break;
                                                  }
                                                  throw new Error(
                                                    "[snapdom] Unknown export type: ".concat(
                                                      t,
                                                    ),
                                                  );
                                                case 3:
                                                  return (
                                                    (u = v(t, n)),
                                                    (a = (0, o.Z)(
                                                      (0, o.Z)({}, s),
                                                      {},
                                                      {
                                                        export: {
                                                          type: t,
                                                          options: u,
                                                          url: f,
                                                        },
                                                      },
                                                    )),
                                                    (e.next = 6),
                                                    Ke("beforeExport", a)
                                                  );
                                                case 6:
                                                  return (
                                                    (e.next = 8),
                                                    r(a, u)
                                                  );
                                                case 8:
                                                  return (
                                                    (c = e.sent),
                                                    (e.next = 11),
                                                    Ke("afterExport", a, c)
                                                  );
                                                case 11:
                                                  if (((e.t0 = g), e.t0)) {
                                                    e.next = 16;
                                                    break;
                                                  }
                                                  return (
                                                    (g = !0),
                                                    (e.next = 16),
                                                    Ke("afterSnap", s)
                                                  );
                                                case 16:
                                                  return e.abrupt("return", c);
                                                case 17:
                                                case "end":
                                                  return e.stop();
                                              }
                                          }, e);
                                        }),
                                      );
                                      return function () {
                                        return e.apply(this, arguments);
                                      };
                                    })()),
                                    e.abrupt("return", (y = y.then(r)))
                                  );
                                case 2:
                                case "end":
                                  return e.stop();
                              }
                          }, e);
                        }),
                      )),
                      F.apply(this, arguments)
                    );
                  }),
                  (b = function (e, t) {
                    return F.apply(this, arguments);
                  }),
                  (v = function (e, t) {
                    var n = (0, o.Z)((0, o.Z)({}, s), t || {});
                    return (
                      ("jpeg" === e || "jpg" === e) &&
                        (null == n.backgroundColor ||
                          "transparent" === n.backgroundColor) &&
                        (n.backgroundColor = "#ffffff"),
                      n
                    );
                  }),
                  l === xr)
                ) {
                  e.next = 5;
                  break;
                }
                throw new Error(
                  "[snapdom.capture] is internal. Use snapdom(...) instead.",
                );
              case 5:
                return ((e.next = 7), mr(t, s));
              case 7:
                return (
                  (f = e.sent),
                  (d = {
                    img: (function () {
                      var e = (0, c.Z)(
                        (0, i.Z)().mark(function e(t, r) {
                          var u, a;
                          return (0, i.Z)().wrap(function (e) {
                            while (1)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.next = 2),
                                    Promise.all([
                                      n.e(9823),
                                      n.e(5099),
                                      n.e(2704),
                                      n.e(3166),
                                      n.e(910),
                                      n.e(5200),
                                      n.e(8953),
                                      n.e(9613),
                                      n.e(6306),
                                      n.e(2171),
                                      n.e(4236),
                                      n.e(3697),
                                      n.e(4383),
                                      n.e(3115),
                                      n.e(3986),
                                      n.e(3543),
                                      n.e(6390),
                                      n.e(63),
                                      n.e(4577),
                                      n.e(6400),
                                      n.e(7476),
                                      n.e(9161),
                                      n.e(3426),
                                      n.e(3073),
                                      n.e(602),
                                      n.e(1922),
                                      n.e(8353),
                                      n.e(1893),
                                      n.e(1587),
                                      n.e(1611),
                                      n.e(5604),
                                      n.e(5738),
                                      n.e(2826),
                                    ]).then(n.bind(n, 13802))
                                  );
                                case 2:
                                  return (
                                    (u = e.sent),
                                    (a = u.toImg),
                                    e.abrupt(
                                      "return",
                                      a(f, (0, o.Z)((0, o.Z)({}, t), r || {})),
                                    )
                                  );
                                case 5:
                                case "end":
                                  return e.stop();
                              }
                          }, e);
                        }),
                      );
                      function t(t, n) {
                        return e.apply(this, arguments);
                      }
                      return t;
                    })(),
                    svg: (function () {
                      var e = (0, c.Z)(
                        (0, i.Z)().mark(function e(t, r) {
                          var u, a;
                          return (0, i.Z)().wrap(function (e) {
                            while (1)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.next = 2),
                                    Promise.all([
                                      n.e(9823),
                                      n.e(5099),
                                      n.e(2704),
                                      n.e(3166),
                                      n.e(910),
                                      n.e(5200),
                                      n.e(8953),
                                      n.e(9613),
                                      n.e(6306),
                                      n.e(2171),
                                      n.e(4236),
                                      n.e(3697),
                                      n.e(4383),
                                      n.e(3115),
                                      n.e(3986),
                                      n.e(3543),
                                      n.e(6390),
                                      n.e(63),
                                      n.e(4577),
                                      n.e(6400),
                                      n.e(7476),
                                      n.e(9161),
                                      n.e(3426),
                                      n.e(3073),
                                      n.e(602),
                                      n.e(1922),
                                      n.e(8353),
                                      n.e(1893),
                                      n.e(1587),
                                      n.e(1611),
                                      n.e(5604),
                                      n.e(5738),
                                      n.e(2826),
                                    ]).then(n.bind(n, 13802))
                                  );
                                case 2:
                                  return (
                                    (u = e.sent),
                                    (a = u.toSvg),
                                    e.abrupt(
                                      "return",
                                      a(f, (0, o.Z)((0, o.Z)({}, t), r || {})),
                                    )
                                  );
                                case 5:
                                case "end":
                                  return e.stop();
                              }
                          }, e);
                        }),
                      );
                      function t(t, n) {
                        return e.apply(this, arguments);
                      }
                      return t;
                    })(),
                    canvas: (function () {
                      var e = (0, c.Z)(
                        (0, i.Z)().mark(function e(t, r) {
                          var u, a;
                          return (0, i.Z)().wrap(function (e) {
                            while (1)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.next = 2),
                                    Promise.all([
                                      n.e(9823),
                                      n.e(5099),
                                      n.e(2704),
                                      n.e(3166),
                                      n.e(910),
                                      n.e(5200),
                                      n.e(8953),
                                      n.e(9613),
                                      n.e(6306),
                                      n.e(2171),
                                      n.e(4236),
                                      n.e(3697),
                                      n.e(4383),
                                      n.e(3115),
                                      n.e(3986),
                                      n.e(3543),
                                      n.e(6390),
                                      n.e(63),
                                      n.e(4577),
                                      n.e(6400),
                                      n.e(7476),
                                      n.e(9161),
                                      n.e(3426),
                                      n.e(3073),
                                      n.e(602),
                                      n.e(1922),
                                      n.e(8353),
                                      n.e(1893),
                                      n.e(1587),
                                      n.e(1611),
                                      n.e(5604),
                                      n.e(5738),
                                      n.e(2826),
                                    ]).then(n.bind(n, 90480))
                                  );
                                case 2:
                                  return (
                                    (u = e.sent),
                                    (a = u.toCanvas),
                                    e.abrupt(
                                      "return",
                                      a(f, (0, o.Z)((0, o.Z)({}, t), r || {})),
                                    )
                                  );
                                case 5:
                                case "end":
                                  return e.stop();
                              }
                          }, e);
                        }),
                      );
                      function t(t, n) {
                        return e.apply(this, arguments);
                      }
                      return t;
                    })(),
                    blob: (function () {
                      var e = (0, c.Z)(
                        (0, i.Z)().mark(function e(t, r) {
                          var u, a;
                          return (0, i.Z)().wrap(function (e) {
                            while (1)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.next = 2),
                                    Promise.all([
                                      n.e(9823),
                                      n.e(5099),
                                      n.e(2704),
                                      n.e(3166),
                                      n.e(910),
                                      n.e(5200),
                                      n.e(8953),
                                      n.e(9613),
                                      n.e(6306),
                                      n.e(2171),
                                      n.e(4236),
                                      n.e(3697),
                                      n.e(4383),
                                      n.e(3115),
                                      n.e(3986),
                                      n.e(3543),
                                      n.e(6390),
                                      n.e(63),
                                      n.e(4577),
                                      n.e(6400),
                                      n.e(7476),
                                      n.e(9161),
                                      n.e(3426),
                                      n.e(3073),
                                      n.e(602),
                                      n.e(1922),
                                      n.e(8353),
                                      n.e(1893),
                                      n.e(1587),
                                      n.e(1611),
                                      n.e(5604),
                                      n.e(5738),
                                      n.e(2826),
                                    ]).then(n.bind(n, 20104))
                                  );
                                case 2:
                                  return (
                                    (u = e.sent),
                                    (a = u.toBlob),
                                    e.abrupt(
                                      "return",
                                      a(f, (0, o.Z)((0, o.Z)({}, t), r || {})),
                                    )
                                  );
                                case 5:
                                case "end":
                                  return e.stop();
                              }
                          }, e);
                        }),
                      );
                      function t(t, n) {
                        return e.apply(this, arguments);
                      }
                      return t;
                    })(),
                    png: (function () {
                      var e = (0, c.Z)(
                        (0, i.Z)().mark(function e(t, r) {
                          var u, a;
                          return (0, i.Z)().wrap(function (e) {
                            while (1)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.next = 2),
                                    Promise.all([
                                      n.e(9823),
                                      n.e(5099),
                                      n.e(2704),
                                      n.e(3166),
                                      n.e(910),
                                      n.e(5200),
                                      n.e(8953),
                                      n.e(9613),
                                      n.e(6306),
                                      n.e(2171),
                                      n.e(4236),
                                      n.e(3697),
                                      n.e(4383),
                                      n.e(3115),
                                      n.e(3986),
                                      n.e(3543),
                                      n.e(6390),
                                      n.e(63),
                                      n.e(4577),
                                      n.e(6400),
                                      n.e(7476),
                                      n.e(9161),
                                      n.e(3426),
                                      n.e(3073),
                                      n.e(602),
                                      n.e(1922),
                                      n.e(8353),
                                      n.e(1893),
                                      n.e(1587),
                                      n.e(1611),
                                      n.e(5604),
                                      n.e(5738),
                                      n.e(2826),
                                    ]).then(n.bind(n, 8219))
                                  );
                                case 2:
                                  return (
                                    (u = e.sent),
                                    (a = u.rasterize),
                                    e.abrupt(
                                      "return",
                                      a(
                                        f,
                                        (0, o.Z)(
                                          (0, o.Z)((0, o.Z)({}, t), r || {}),
                                          {},
                                          { format: "png" },
                                        ),
                                      ),
                                    )
                                  );
                                case 5:
                                case "end":
                                  return e.stop();
                              }
                          }, e);
                        }),
                      );
                      function t(t, n) {
                        return e.apply(this, arguments);
                      }
                      return t;
                    })(),
                    jpeg: (function () {
                      var e = (0, c.Z)(
                        (0, i.Z)().mark(function e(t, r) {
                          var u, a;
                          return (0, i.Z)().wrap(function (e) {
                            while (1)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.next = 2),
                                    Promise.all([
                                      n.e(9823),
                                      n.e(5099),
                                      n.e(2704),
                                      n.e(3166),
                                      n.e(910),
                                      n.e(5200),
                                      n.e(8953),
                                      n.e(9613),
                                      n.e(6306),
                                      n.e(2171),
                                      n.e(4236),
                                      n.e(3697),
                                      n.e(4383),
                                      n.e(3115),
                                      n.e(3986),
                                      n.e(3543),
                                      n.e(6390),
                                      n.e(63),
                                      n.e(4577),
                                      n.e(6400),
                                      n.e(7476),
                                      n.e(9161),
                                      n.e(3426),
                                      n.e(3073),
                                      n.e(602),
                                      n.e(1922),
                                      n.e(8353),
                                      n.e(1893),
                                      n.e(1587),
                                      n.e(1611),
                                      n.e(5604),
                                      n.e(5738),
                                      n.e(2826),
                                    ]).then(n.bind(n, 8219))
                                  );
                                case 2:
                                  return (
                                    (u = e.sent),
                                    (a = u.rasterize),
                                    e.abrupt(
                                      "return",
                                      a(
                                        f,
                                        (0, o.Z)(
                                          (0, o.Z)((0, o.Z)({}, t), r || {}),
                                          {},
                                          { format: "jpeg" },
                                        ),
                                      ),
                                    )
                                  );
                                case 5:
                                case "end":
                                  return e.stop();
                              }
                          }, e);
                        }),
                      );
                      function t(t, n) {
                        return e.apply(this, arguments);
                      }
                      return t;
                    })(),
                    webp: (function () {
                      var e = (0, c.Z)(
                        (0, i.Z)().mark(function e(t, r) {
                          var u, a;
                          return (0, i.Z)().wrap(function (e) {
                            while (1)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.next = 2),
                                    Promise.all([
                                      n.e(9823),
                                      n.e(5099),
                                      n.e(2704),
                                      n.e(3166),
                                      n.e(910),
                                      n.e(5200),
                                      n.e(8953),
                                      n.e(9613),
                                      n.e(6306),
                                      n.e(2171),
                                      n.e(4236),
                                      n.e(3697),
                                      n.e(4383),
                                      n.e(3115),
                                      n.e(3986),
                                      n.e(3543),
                                      n.e(6390),
                                      n.e(63),
                                      n.e(4577),
                                      n.e(6400),
                                      n.e(7476),
                                      n.e(9161),
                                      n.e(3426),
                                      n.e(3073),
                                      n.e(602),
                                      n.e(1922),
                                      n.e(8353),
                                      n.e(1893),
                                      n.e(1587),
                                      n.e(1611),
                                      n.e(5604),
                                      n.e(5738),
                                      n.e(2826),
                                    ]).then(n.bind(n, 8219))
                                  );
                                case 2:
                                  return (
                                    (u = e.sent),
                                    (a = u.rasterize),
                                    e.abrupt(
                                      "return",
                                      a(
                                        f,
                                        (0, o.Z)(
                                          (0, o.Z)((0, o.Z)({}, t), r || {}),
                                          {},
                                          { format: "webp" },
                                        ),
                                      ),
                                    )
                                  );
                                case 5:
                                case "end":
                                  return e.stop();
                              }
                          }, e);
                        }),
                      );
                      function t(t, n) {
                        return e.apply(this, arguments);
                      }
                      return t;
                    })(),
                    download: (function () {
                      var e = (0, c.Z)(
                        (0, i.Z)().mark(function e(t, r) {
                          var u, a;
                          return (0, i.Z)().wrap(function (e) {
                            while (1)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.next = 2),
                                    Promise.all([
                                      n.e(9823),
                                      n.e(5099),
                                      n.e(2704),
                                      n.e(3166),
                                      n.e(910),
                                      n.e(5200),
                                      n.e(8953),
                                      n.e(9613),
                                      n.e(6306),
                                      n.e(2171),
                                      n.e(4236),
                                      n.e(3697),
                                      n.e(4383),
                                      n.e(3115),
                                      n.e(3986),
                                      n.e(3543),
                                      n.e(6390),
                                      n.e(63),
                                      n.e(4577),
                                      n.e(6400),
                                      n.e(7476),
                                      n.e(9161),
                                      n.e(3426),
                                      n.e(3073),
                                      n.e(602),
                                      n.e(1922),
                                      n.e(8353),
                                      n.e(1893),
                                      n.e(1587),
                                      n.e(1611),
                                      n.e(5604),
                                      n.e(5738),
                                      n.e(2826),
                                    ]).then(n.bind(n, 26959))
                                  );
                                case 2:
                                  return (
                                    (u = e.sent),
                                    (a = u.download),
                                    e.abrupt(
                                      "return",
                                      a(f, (0, o.Z)((0, o.Z)({}, t), r || {})),
                                    )
                                  );
                                case 5:
                                case "end":
                                  return e.stop();
                              }
                          }, e);
                        }),
                      );
                      function t(t, n) {
                        return e.apply(this, arguments);
                      }
                      return t;
                    })(),
                  }),
                  (p = (0, o.Z)(
                    (0, o.Z)({}, s),
                    {},
                    {
                      export: { url: f },
                      exports: {
                        svg: (function () {
                          var e = (0, c.Z)(
                            (0, i.Z)().mark(function e(t) {
                              var r, u;
                              return (0, i.Z)().wrap(function (e) {
                                while (1)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        (e.next = 2),
                                        Promise.all([
                                          n.e(9823),
                                          n.e(5099),
                                          n.e(2704),
                                          n.e(3166),
                                          n.e(910),
                                          n.e(5200),
                                          n.e(8953),
                                          n.e(9613),
                                          n.e(6306),
                                          n.e(2171),
                                          n.e(4236),
                                          n.e(3697),
                                          n.e(4383),
                                          n.e(3115),
                                          n.e(3986),
                                          n.e(3543),
                                          n.e(6390),
                                          n.e(63),
                                          n.e(4577),
                                          n.e(6400),
                                          n.e(7476),
                                          n.e(9161),
                                          n.e(3426),
                                          n.e(3073),
                                          n.e(602),
                                          n.e(1922),
                                          n.e(8353),
                                          n.e(1893),
                                          n.e(1587),
                                          n.e(1611),
                                          n.e(5604),
                                          n.e(5738),
                                          n.e(2826),
                                        ]).then(n.bind(n, 13802))
                                      );
                                    case 2:
                                      return (
                                        (r = e.sent),
                                        (u = r.toSvg),
                                        e.abrupt(
                                          "return",
                                          u(
                                            f,
                                            (0, o.Z)(
                                              (0, o.Z)(
                                                (0, o.Z)({}, s),
                                                t || {},
                                              ),
                                              {},
                                              (0, a.Z)({}, Cr, !0),
                                            ),
                                          ),
                                        )
                                      );
                                    case 5:
                                    case "end":
                                      return e.stop();
                                  }
                              }, e);
                            }),
                          );
                          function t(t) {
                            return e.apply(this, arguments);
                          }
                          return t;
                        })(),
                        canvas: (function () {
                          var e = (0, c.Z)(
                            (0, i.Z)().mark(function e(t) {
                              var r, u;
                              return (0, i.Z)().wrap(function (e) {
                                while (1)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        (e.next = 2),
                                        Promise.all([
                                          n.e(9823),
                                          n.e(5099),
                                          n.e(2704),
                                          n.e(3166),
                                          n.e(910),
                                          n.e(5200),
                                          n.e(8953),
                                          n.e(9613),
                                          n.e(6306),
                                          n.e(2171),
                                          n.e(4236),
                                          n.e(3697),
                                          n.e(4383),
                                          n.e(3115),
                                          n.e(3986),
                                          n.e(3543),
                                          n.e(6390),
                                          n.e(63),
                                          n.e(4577),
                                          n.e(6400),
                                          n.e(7476),
                                          n.e(9161),
                                          n.e(3426),
                                          n.e(3073),
                                          n.e(602),
                                          n.e(1922),
                                          n.e(8353),
                                          n.e(1893),
                                          n.e(1587),
                                          n.e(1611),
                                          n.e(5604),
                                          n.e(5738),
                                          n.e(2826),
                                        ]).then(n.bind(n, 90480))
                                      );
                                    case 2:
                                      return (
                                        (r = e.sent),
                                        (u = r.toCanvas),
                                        e.abrupt(
                                          "return",
                                          u(
                                            f,
                                            (0, o.Z)(
                                              (0, o.Z)(
                                                (0, o.Z)({}, s),
                                                t || {},
                                              ),
                                              {},
                                              (0, a.Z)({}, Cr, !0),
                                            ),
                                          ),
                                        )
                                      );
                                    case 5:
                                    case "end":
                                      return e.stop();
                                  }
                              }, e);
                            }),
                          );
                          function t(t) {
                            return e.apply(this, arguments);
                          }
                          return t;
                        })(),
                        png: (function () {
                          var e = (0, c.Z)(
                            (0, i.Z)().mark(function e(t) {
                              var r, u;
                              return (0, i.Z)().wrap(function (e) {
                                while (1)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        (e.next = 2),
                                        Promise.all([
                                          n.e(9823),
                                          n.e(5099),
                                          n.e(2704),
                                          n.e(3166),
                                          n.e(910),
                                          n.e(5200),
                                          n.e(8953),
                                          n.e(9613),
                                          n.e(6306),
                                          n.e(2171),
                                          n.e(4236),
                                          n.e(3697),
                                          n.e(4383),
                                          n.e(3115),
                                          n.e(3986),
                                          n.e(3543),
                                          n.e(6390),
                                          n.e(63),
                                          n.e(4577),
                                          n.e(6400),
                                          n.e(7476),
                                          n.e(9161),
                                          n.e(3426),
                                          n.e(3073),
                                          n.e(602),
                                          n.e(1922),
                                          n.e(8353),
                                          n.e(1893),
                                          n.e(1587),
                                          n.e(1611),
                                          n.e(5604),
                                          n.e(5738),
                                          n.e(2826),
                                        ]).then(n.bind(n, 8219))
                                      );
                                    case 2:
                                      return (
                                        (r = e.sent),
                                        (u = r.rasterize),
                                        e.abrupt(
                                          "return",
                                          u(
                                            f,
                                            (0, o.Z)(
                                              (0, o.Z)(
                                                (0, o.Z)({}, s),
                                                t || {},
                                              ),
                                              {},
                                              (0, a.Z)(
                                                { format: "png" },
                                                Cr,
                                                !0,
                                              ),
                                            ),
                                          ),
                                        )
                                      );
                                    case 5:
                                    case "end":
                                      return e.stop();
                                  }
                              }, e);
                            }),
                          );
                          function t(t) {
                            return e.apply(this, arguments);
                          }
                          return t;
                        })(),
                        jpeg: (function () {
                          var e = (0, c.Z)(
                            (0, i.Z)().mark(function e(t) {
                              var r, u;
                              return (0, i.Z)().wrap(function (e) {
                                while (1)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        (e.next = 2),
                                        Promise.all([
                                          n.e(9823),
                                          n.e(5099),
                                          n.e(2704),
                                          n.e(3166),
                                          n.e(910),
                                          n.e(5200),
                                          n.e(8953),
                                          n.e(9613),
                                          n.e(6306),
                                          n.e(2171),
                                          n.e(4236),
                                          n.e(3697),
                                          n.e(4383),
                                          n.e(3115),
                                          n.e(3986),
                                          n.e(3543),
                                          n.e(6390),
                                          n.e(63),
                                          n.e(4577),
                                          n.e(6400),
                                          n.e(7476),
                                          n.e(9161),
                                          n.e(3426),
                                          n.e(3073),
                                          n.e(602),
                                          n.e(1922),
                                          n.e(8353),
                                          n.e(1893),
                                          n.e(1587),
                                          n.e(1611),
                                          n.e(5604),
                                          n.e(5738),
                                          n.e(2826),
                                        ]).then(n.bind(n, 8219))
                                      );
                                    case 2:
                                      return (
                                        (r = e.sent),
                                        (u = r.rasterize),
                                        e.abrupt(
                                          "return",
                                          u(
                                            f,
                                            (0, o.Z)(
                                              (0, o.Z)(
                                                (0, o.Z)({}, s),
                                                t || {},
                                              ),
                                              {},
                                              (0, a.Z)(
                                                { format: "jpeg" },
                                                Cr,
                                                !0,
                                              ),
                                            ),
                                          ),
                                        )
                                      );
                                    case 5:
                                    case "end":
                                      return e.stop();
                                  }
                              }, e);
                            }),
                          );
                          function t(t) {
                            return e.apply(this, arguments);
                          }
                          return t;
                        })(),
                        jpg: (function () {
                          var e = (0, c.Z)(
                            (0, i.Z)().mark(function e(t) {
                              var r, u;
                              return (0, i.Z)().wrap(function (e) {
                                while (1)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        (e.next = 2),
                                        Promise.all([
                                          n.e(9823),
                                          n.e(5099),
                                          n.e(2704),
                                          n.e(3166),
                                          n.e(910),
                                          n.e(5200),
                                          n.e(8953),
                                          n.e(9613),
                                          n.e(6306),
                                          n.e(2171),
                                          n.e(4236),
                                          n.e(3697),
                                          n.e(4383),
                                          n.e(3115),
                                          n.e(3986),
                                          n.e(3543),
                                          n.e(6390),
                                          n.e(63),
                                          n.e(4577),
                                          n.e(6400),
                                          n.e(7476),
                                          n.e(9161),
                                          n.e(3426),
                                          n.e(3073),
                                          n.e(602),
                                          n.e(1922),
                                          n.e(8353),
                                          n.e(1893),
                                          n.e(1587),
                                          n.e(1611),
                                          n.e(5604),
                                          n.e(5738),
                                          n.e(2826),
                                        ]).then(n.bind(n, 8219))
                                      );
                                    case 2:
                                      return (
                                        (r = e.sent),
                                        (u = r.rasterize),
                                        e.abrupt(
                                          "return",
                                          u(
                                            f,
                                            (0, o.Z)(
                                              (0, o.Z)(
                                                (0, o.Z)({}, s),
                                                t || {},
                                              ),
                                              {},
                                              (0, a.Z)(
                                                { format: "jpeg" },
                                                Cr,
                                                !0,
                                              ),
                                            ),
                                          ),
                                        )
                                      );
                                    case 5:
                                    case "end":
                                      return e.stop();
                                  }
                              }, e);
                            }),
                          );
                          function t(t) {
                            return e.apply(this, arguments);
                          }
                          return t;
                        })(),
                        webp: (function () {
                          var e = (0, c.Z)(
                            (0, i.Z)().mark(function e(t) {
                              var r, u;
                              return (0, i.Z)().wrap(function (e) {
                                while (1)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        (e.next = 2),
                                        Promise.all([
                                          n.e(9823),
                                          n.e(5099),
                                          n.e(2704),
                                          n.e(3166),
                                          n.e(910),
                                          n.e(5200),
                                          n.e(8953),
                                          n.e(9613),
                                          n.e(6306),
                                          n.e(2171),
                                          n.e(4236),
                                          n.e(3697),
                                          n.e(4383),
                                          n.e(3115),
                                          n.e(3986),
                                          n.e(3543),
                                          n.e(6390),
                                          n.e(63),
                                          n.e(4577),
                                          n.e(6400),
                                          n.e(7476),
                                          n.e(9161),
                                          n.e(3426),
                                          n.e(3073),
                                          n.e(602),
                                          n.e(1922),
                                          n.e(8353),
                                          n.e(1893),
                                          n.e(1587),
                                          n.e(1611),
                                          n.e(5604),
                                          n.e(5738),
                                          n.e(2826),
                                        ]).then(n.bind(n, 8219))
                                      );
                                    case 2:
                                      return (
                                        (r = e.sent),
                                        (u = r.rasterize),
                                        e.abrupt(
                                          "return",
                                          u(
                                            f,
                                            (0, o.Z)(
                                              (0, o.Z)(
                                                (0, o.Z)({}, s),
                                                t || {},
                                              ),
                                              {},
                                              (0, a.Z)(
                                                { format: "webp" },
                                                Cr,
                                                !0,
                                              ),
                                            ),
                                          ),
                                        )
                                      );
                                    case 5:
                                    case "end":
                                      return e.stop();
                                  }
                              }, e);
                            }),
                          );
                          function t(t) {
                            return e.apply(this, arguments);
                          }
                          return t;
                        })(),
                        blob: (function () {
                          var e = (0, c.Z)(
                            (0, i.Z)().mark(function e(t) {
                              var r, u;
                              return (0, i.Z)().wrap(function (e) {
                                while (1)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        (e.next = 2),
                                        Promise.all([
                                          n.e(9823),
                                          n.e(5099),
                                          n.e(2704),
                                          n.e(3166),
                                          n.e(910),
                                          n.e(5200),
                                          n.e(8953),
                                          n.e(9613),
                                          n.e(6306),
                                          n.e(2171),
                                          n.e(4236),
                                          n.e(3697),
                                          n.e(4383),
                                          n.e(3115),
                                          n.e(3986),
                                          n.e(3543),
                                          n.e(6390),
                                          n.e(63),
                                          n.e(4577),
                                          n.e(6400),
                                          n.e(7476),
                                          n.e(9161),
                                          n.e(3426),
                                          n.e(3073),
                                          n.e(602),
                                          n.e(1922),
                                          n.e(8353),
                                          n.e(1893),
                                          n.e(1587),
                                          n.e(1611),
                                          n.e(5604),
                                          n.e(5738),
                                          n.e(2826),
                                        ]).then(n.bind(n, 20104))
                                      );
                                    case 2:
                                      return (
                                        (r = e.sent),
                                        (u = r.toBlob),
                                        e.abrupt(
                                          "return",
                                          u(
                                            f,
                                            (0, o.Z)(
                                              (0, o.Z)(
                                                (0, o.Z)({}, s),
                                                t || {},
                                              ),
                                              {},
                                              (0, a.Z)({}, Cr, !0),
                                            ),
                                          ),
                                        )
                                      );
                                    case 5:
                                    case "end":
                                      return e.stop();
                                  }
                              }, e);
                            }),
                          );
                          function t(t) {
                            return e.apply(this, arguments);
                          }
                          return t;
                        })(),
                        img: (function () {
                          var e = (0, c.Z)(
                            (0, i.Z)().mark(function e(t) {
                              var r, u;
                              return (0, i.Z)().wrap(function (e) {
                                while (1)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        (e.next = 2),
                                        Promise.all([
                                          n.e(9823),
                                          n.e(5099),
                                          n.e(2704),
                                          n.e(3166),
                                          n.e(910),
                                          n.e(5200),
                                          n.e(8953),
                                          n.e(9613),
                                          n.e(6306),
                                          n.e(2171),
                                          n.e(4236),
                                          n.e(3697),
                                          n.e(4383),
                                          n.e(3115),
                                          n.e(3986),
                                          n.e(3543),
                                          n.e(6390),
                                          n.e(63),
                                          n.e(4577),
                                          n.e(6400),
                                          n.e(7476),
                                          n.e(9161),
                                          n.e(3426),
                                          n.e(3073),
                                          n.e(602),
                                          n.e(1922),
                                          n.e(8353),
                                          n.e(1893),
                                          n.e(1587),
                                          n.e(1611),
                                          n.e(5604),
                                          n.e(5738),
                                          n.e(2826),
                                        ]).then(n.bind(n, 13802))
                                      );
                                    case 2:
                                      return (
                                        (r = e.sent),
                                        (u = r.toImg),
                                        e.abrupt(
                                          "return",
                                          u(
                                            f,
                                            (0, o.Z)(
                                              (0, o.Z)(
                                                (0, o.Z)({}, s),
                                                t || {},
                                              ),
                                              {},
                                              (0, a.Z)({}, Cr, !0),
                                            ),
                                          ),
                                        )
                                      );
                                    case 5:
                                    case "end":
                                      return e.stop();
                                  }
                              }, e);
                            }),
                          );
                          function t(t) {
                            return e.apply(this, arguments);
                          }
                          return t;
                        })(),
                      },
                    },
                  )),
                  (e.next = 12),
                  Je("defineExports", p)
                );
              case 12:
                ((h = e.sent),
                  (D = Object.assign.apply(
                    Object,
                    [{}].concat(
                      (0, u.Z)(
                        h.filter(function (e) {
                          return e && "object" == (0, r.Z)(e);
                        }),
                      ),
                    ),
                  )),
                  (m = (0, o.Z)((0, o.Z)({}, d), D)),
                  m.jpeg &&
                    !m.jpg &&
                    (m.jpg = function (e, t) {
                      return m.jpeg(e, t);
                    }),
                  (g = !1),
                  (y = Promise.resolve()),
                  (E = {
                    url: f,
                    toRaw: function () {
                      return f;
                    },
                    to: function (e, t) {
                      return b(e, t);
                    },
                    toImg: function (e) {
                      return b("img", e);
                    },
                    toSvg: function (e) {
                      return b("svg", e);
                    },
                    toCanvas: function (e) {
                      return b("canvas", e);
                    },
                    toBlob: function (e) {
                      return b("blob", e);
                    },
                    toPng: function (e) {
                      return b("png", e);
                    },
                    toJpg: function (e) {
                      return b("jpg", e);
                    },
                    toWebp: function (e) {
                      return b("webp", e);
                    },
                    download: function (e) {
                      return b("download", e);
                    },
                  }),
                  (x = (0, i.Z)().mark(function e() {
                    var t, n;
                    return (0, i.Z)().wrap(function (e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            ((t = w[C]),
                              (n =
                                "to" + t.charAt(0).toUpperCase() + t.slice(1)),
                              E[n] ||
                                (E[n] = function (e) {
                                  return b(t, e);
                                }));
                          case 3:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })),
                  (C = 0),
                  (w = Object.keys(m)));
              case 20:
                if (!(C < w.length)) {
                  e.next = 25;
                  break;
                }
                return e.delegateYield(x(), "t0", 22);
              case 22:
                (C++, (e.next = 20));
                break;
              case 25:
                return e.abrupt("return", E);
              case 26:
              case "end":
                return e.stop();
            }
        }, e);
      }),
    );
    return function (t, n, r) {
      return e.apply(this, arguments);
    };
  })()),
    (Er.toRaw = function (e, t) {
      return Er(e, t).then(function (e) {
        return e.toRaw();
      });
    }),
    (Er.toImg = function (e, t) {
      return Er(e, t).then(function (e) {
        return e.toImg();
      });
    }),
    (Er.toSvg = function (e, t) {
      return Er(e, t).then(function (e) {
        return e.toSvg();
      });
    }),
    (Er.toCanvas = function (e, t) {
      return Er(e, t).then(function (e) {
        return e.toCanvas();
      });
    }),
    (Er.toBlob = function (e, t) {
      return Er(e, t).then(function (e) {
        return e.toBlob();
      });
    }),
    (Er.toPng = function (e, t) {
      return Er(e, (0, o.Z)((0, o.Z)({}, t), {}, { format: "png" })).then(
        function (e) {
          return e.toPng();
        },
      );
    }),
    (Er.toJpg = function (e, t) {
      return Er(e, (0, o.Z)((0, o.Z)({}, t), {}, { format: "jpeg" })).then(
        function (e) {
          return e.toJpg();
        },
      );
    }),
    (Er.toWebp = function (e, t) {
      return Er(e, (0, o.Z)((0, o.Z)({}, t), {}, { format: "webp" })).then(
        function (e) {
          return e.toWebp();
        },
      );
    }),
    (Er.download = function (e, t) {
      return Er(e, t).then(function (e) {
        return e.download();
      });
    }));
};
