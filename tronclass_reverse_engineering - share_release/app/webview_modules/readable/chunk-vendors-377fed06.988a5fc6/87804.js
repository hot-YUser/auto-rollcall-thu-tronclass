// Source: decompiled/web-modules-acorn/chunk-vendors-377fed06.988a5fc6/87804.js
// Webpack module id: 87804
const __webpack_module_87804 = function (e, t, n) {
  "use strict";
  n.d(t, {
    Lk: function () {
      return Te;
    },
    vG: function () {
      return Zt;
    },
  });
  var r = n(50124),
    o = n(52417),
    a = n(62833),
    i = n(13087),
    u = n(39110),
    s = n(26720),
    c = n(1188),
    l = n(3336),
    f = n(89584),
    p = n(95082),
    d = n(48534),
    h = n(56084),
    v = n(66347),
    m =
      (n(21703),
      n(96647),
      n(41539),
      n(78783),
      n(38478),
      n(33948),
      n(21249),
      n(92222),
      n(51532),
      n(87714),
      n(82801),
      n(1174),
      n(74916),
      n(15306),
      n(4723),
      n(4129),
      n(82772),
      n(94986),
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
      n(87145),
      n(35109),
      n(8255),
      n(65125),
      n(29135),
      n(44197),
      n(76495),
      n(30541),
      n(23157),
      n(57658),
      n(54747),
      n(47941),
      n(30489),
      n(69070),
      n(26699),
      n(32023),
      n(39714),
      n(40561),
      n(73210),
      n(82526),
      n(41817),
      n(47042),
      n(18264),
      n(49743),
      n(35837),
      n(12419),
      n(81299),
      n(50545),
      n(24603),
      n(28450),
      n(88386),
      n(57327),
      n(96649),
      n(96078),
      n(9653),
      n(32165),
      n(91058),
      n(85827),
      n(27852),
      n(38880),
      n(38862),
      n(69826),
      n(91038),
      n(60285),
      n(41637),
      n(77577)),
    g = n(34155),
    y = n(25108),
    b = function (e, t, n) {
      if (!t.has(e)) throw TypeError("Cannot " + n);
    },
    w = function (e, t, n) {
      return (b(e, t, "read from private field"), n ? n.call(e) : t.get(e));
    },
    _ = function (e, t, n) {
      if (t.has(e))
        throw TypeError("Cannot add the same private member more than once");
      t instanceof WeakSet ? t.add(e) : t.set(e, n);
    },
    E = function (e, t, n, r) {
      return (
        b(e, t, "write to private field"),
        r ? r.call(e, n) : t.set(e, n),
        n
      );
    },
    T = [
      ["aztec", "Aztec"],
      ["code_128", "Code128"],
      ["code_39", "Code39"],
      ["code_93", "Code93"],
      ["codabar", "Codabar"],
      ["databar", "DataBar"],
      ["databar_expanded", "DataBarExpanded"],
      ["data_matrix", "DataMatrix"],
      ["dx_film_edge", "DXFilmEdge"],
      ["ean_13", "EAN-13"],
      ["ean_8", "EAN-8"],
      ["itf", "ITF"],
      ["maxi_code", "MaxiCode"],
      ["micro_qr_code", "MicroQRCode"],
      ["pdf417", "PDF417"],
      ["qr_code", "QRCode"],
      ["rm_qr_code", "rMQRCode"],
      ["upc_a", "UPC-A"],
      ["upc_e", "UPC-E"],
      ["linear_codes", "Linear-Codes"],
      ["matrix_codes", "Matrix-Codes"],
    ],
    O = [].concat(T, [["unknown"]]).map(function (e) {
      return e[0];
    }),
    C = new Map(T);
  function P(e) {
    var t,
      n = (0, v.Z)(C);
    try {
      for (n.s(); !(t = n.n()).done; ) {
        var r = (0, h.Z)(t.value, 2),
          o = r[0],
          a = r[1];
        if (e === a) return o;
      }
    } catch (i) {
      n.e(i);
    } finally {
      n.f();
    }
    return "unknown";
  }
  function A(e) {
    if (S(e)) return { width: e.naturalWidth, height: e.naturalHeight };
    if (k(e))
      return { width: e.width.baseVal.value, height: e.height.baseVal.value };
    if (R(e)) return { width: e.videoWidth, height: e.videoHeight };
    if (L(e)) return { width: e.width, height: e.height };
    if (D(e)) return { width: e.displayWidth, height: e.displayHeight };
    if (M(e)) return { width: e.width, height: e.height };
    if (x(e)) return { width: e.width, height: e.height };
    throw new TypeError(
      "The provided value is not of type '(Blob or HTMLCanvasElement or HTMLImageElement or HTMLVideoElement or ImageBitmap or ImageData or OffscreenCanvas or SVGImageElement or VideoFrame)'.",
    );
  }
  function S(e) {
    try {
      return e instanceof HTMLImageElement;
    } catch (t) {
      return !1;
    }
  }
  function k(e) {
    try {
      return e instanceof SVGImageElement;
    } catch (t) {
      return !1;
    }
  }
  function R(e) {
    try {
      return e instanceof HTMLVideoElement;
    } catch (t) {
      return !1;
    }
  }
  function M(e) {
    try {
      return e instanceof HTMLCanvasElement;
    } catch (t) {
      return !1;
    }
  }
  function L(e) {
    try {
      return e instanceof ImageBitmap;
    } catch (t) {
      return !1;
    }
  }
  function x(e) {
    try {
      return e instanceof OffscreenCanvas;
    } catch (t) {
      return !1;
    }
  }
  function D(e) {
    try {
      return e instanceof VideoFrame;
    } catch (t) {
      return !1;
    }
  }
  function I(e) {
    try {
      return e instanceof Blob;
    } catch (t) {
      return !1;
    }
  }
  function j(e) {
    try {
      return e instanceof ImageData;
    } catch (t) {
      return !1;
    }
  }
  function N(e, t) {
    try {
      var n = new OffscreenCanvas(e, t);
      if (n.getContext("2d") instanceof OffscreenCanvasRenderingContext2D)
        return n;
      throw void 0;
    } catch (n) {
      var r = document.createElement("canvas");
      return ((r.width = e), (r.height = t), r);
    }
  }
  function U(e) {
    return $.apply(this, arguments);
  }
  function $() {
    return (
      ($ = (0, d.Z)(
        (0, r.Z)().mark(function e(t) {
          var n, o, a, i;
          return (0, r.Z)().wrap(
            function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (((e.t0 = S(t)), !e.t0)) {
                      e.next = 5;
                      break;
                    }
                    return ((e.next = 4), Z(t));
                  case 4:
                    e.t0 = !e.sent;
                  case 5:
                    if (!e.t0) {
                      e.next = 7;
                      break;
                    }
                    throw new DOMException(
                      "Failed to load or decode HTMLImageElement.",
                      "InvalidStateError",
                    );
                  case 7:
                    if (((e.t1 = k(t)), !e.t1)) {
                      e.next = 12;
                      break;
                    }
                    return ((e.next = 11), z(t));
                  case 11:
                    e.t1 = !e.sent;
                  case 12:
                    if (!e.t1) {
                      e.next = 14;
                      break;
                    }
                    throw new DOMException(
                      "Failed to load or decode SVGImageElement.",
                      "InvalidStateError",
                    );
                  case 14:
                    if (!D(t) || !K(t)) {
                      e.next = 16;
                      break;
                    }
                    throw new DOMException(
                      "VideoFrame is closed.",
                      "InvalidStateError",
                    );
                  case 16:
                    if (!R(t) || (0 !== t.readyState && 1 !== t.readyState)) {
                      e.next = 18;
                      break;
                    }
                    throw new DOMException(
                      "Invalid element or state.",
                      "InvalidStateError",
                    );
                  case 18:
                    if (!L(t) || !X(t)) {
                      e.next = 20;
                      break;
                    }
                    throw new DOMException(
                      "The image source is detached.",
                      "InvalidStateError",
                    );
                  case 20:
                    if (
                      ((n = A(t)),
                      (o = n.width),
                      (a = n.height),
                      0 !== o && 0 !== a)
                    ) {
                      e.next = 23;
                      break;
                    }
                    return e.abrupt("return", null);
                  case 23:
                    return (
                      (i = N(o, a).getContext("2d")),
                      i.drawImage(t, 0, 0),
                      (e.prev = 25),
                      e.abrupt("return", i.getImageData(0, 0, o, a))
                    );
                  case 29:
                    throw (
                      (e.prev = 29),
                      (e.t2 = e["catch"](25)),
                      new DOMException(
                        "Source would taint origin.",
                        "SecurityError",
                      )
                    );
                  case 32:
                  case "end":
                    return e.stop();
                }
            },
            e,
            null,
            [[25, 29]],
          );
        }),
      )),
      $.apply(this, arguments)
    );
  }
  function F(e) {
    return B.apply(this, arguments);
  }
  function B() {
    return (
      (B = (0, d.Z)(
        (0, r.Z)().mark(function e(t) {
          var n, o;
          return (0, r.Z)().wrap(
            function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (((e.prev = 0), !globalThis.createImageBitmap)) {
                      e.next = 7;
                      break;
                    }
                    return ((e.next = 4), createImageBitmap(t));
                  case 4:
                    ((n = e.sent), (e.next = 21));
                    break;
                  case 7:
                    if (!globalThis.Image) {
                      e.next = 20;
                      break;
                    }
                    return (
                      (n = new Image()),
                      (o = ""),
                      (e.prev = 10),
                      (o = URL.createObjectURL(t)),
                      (n.src = o),
                      (e.next = 15),
                      n.decode()
                    );
                  case 15:
                    return (
                      (e.prev = 15),
                      URL.revokeObjectURL(o),
                      e.finish(15)
                    );
                  case 18:
                    e.next = 21;
                    break;
                  case 20:
                    return e.abrupt("return", t);
                  case 21:
                    e.next = 26;
                    break;
                  case 23:
                    throw (
                      (e.prev = 23),
                      (e.t0 = e["catch"](0)),
                      new DOMException(
                        "Failed to load or decode Blob.",
                        "InvalidStateError",
                      )
                    );
                  case 26:
                    return ((e.next = 28), U(n));
                  case 28:
                    return e.abrupt("return", e.sent);
                  case 29:
                  case "end":
                    return e.stop();
                }
            },
            e,
            null,
            [
              [0, 23],
              [10, , 15, 18],
            ],
          );
        }),
      )),
      B.apply(this, arguments)
    );
  }
  function W(e) {
    var t = e.width,
      n = e.height;
    if (0 === t || 0 === n) return null;
    var r = e.getContext("2d");
    try {
      return r.getImageData(0, 0, t, n);
    } catch (o) {
      throw new DOMException("Source would taint origin.", "SecurityError");
    }
  }
  function H(e) {
    return V.apply(this, arguments);
  }
  function V() {
    return (
      (V = (0, d.Z)(
        (0, r.Z)().mark(function e(t) {
          return (0, r.Z)().wrap(function (e) {
            while (1)
              switch ((e.prev = e.next)) {
                case 0:
                  if (!I(t)) {
                    e.next = 4;
                    break;
                  }
                  return ((e.next = 3), F(t));
                case 3:
                  return e.abrupt("return", e.sent);
                case 4:
                  if (!j(t)) {
                    e.next = 8;
                    break;
                  }
                  if (!q(t)) {
                    e.next = 7;
                    break;
                  }
                  throw new DOMException(
                    "The image data has been detached.",
                    "InvalidStateError",
                  );
                case 7:
                  return e.abrupt("return", t);
                case 8:
                  if (!M(t) && !x(t)) {
                    e.next = 12;
                    break;
                  }
                  ((e.t0 = W(t)), (e.next = 15));
                  break;
                case 12:
                  return ((e.next = 14), U(t));
                case 14:
                  e.t0 = e.sent;
                case 15:
                  return e.abrupt("return", e.t0);
                case 16:
                case "end":
                  return e.stop();
              }
          }, e);
        }),
      )),
      V.apply(this, arguments)
    );
  }
  function Z(e) {
    return G.apply(this, arguments);
  }
  function G() {
    return (
      (G = (0, d.Z)(
        (0, r.Z)().mark(function e(t) {
          return (0, r.Z)().wrap(
            function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return ((e.prev = 0), (e.next = 3), t.decode());
                  case 3:
                    return e.abrupt("return", !0);
                  case 6:
                    return (
                      (e.prev = 6),
                      (e.t0 = e["catch"](0)),
                      e.abrupt("return", !1)
                    );
                  case 9:
                  case "end":
                    return e.stop();
                }
            },
            e,
            null,
            [[0, 6]],
          );
        }),
      )),
      G.apply(this, arguments)
    );
  }
  function z(e) {
    return Q.apply(this, arguments);
  }
  function Q() {
    return (
      (Q = (0, d.Z)(
        (0, r.Z)().mark(function e(t) {
          var n;
          return (0, r.Z)().wrap(
            function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (e.prev = 0),
                      (e.next = 3),
                      null == (n = t.decode) ? void 0 : n.call(t)
                    );
                  case 3:
                    return e.abrupt("return", !0);
                  case 6:
                    return (
                      (e.prev = 6),
                      (e.t0 = e["catch"](0)),
                      e.abrupt("return", !1)
                    );
                  case 9:
                  case "end":
                    return e.stop();
                }
            },
            e,
            null,
            [[0, 6]],
          );
        }),
      )),
      Q.apply(this, arguments)
    );
  }
  function K(e) {
    return null === e.format;
  }
  function q(e) {
    return 0 === e.data.buffer.byteLength;
  }
  function X(e) {
    return 0 === e.width && 0 === e.height;
  }
  function Y(e, t) {
    return e instanceof DOMException
      ? new DOMException("".concat(t, ": ").concat(e.message), e.name)
      : e instanceof Error
        ? new e.constructor("".concat(t, ": ").concat(e.message))
        : new Error("".concat(t, ": ").concat(e));
  }
  var J = [
    "Aztec",
    "Codabar",
    "Code128",
    "Code39",
    "Code93",
    "DataBar",
    "DataBarExpanded",
    "DataMatrix",
    "DXFilmEdge",
    "EAN-13",
    "EAN-8",
    "ITF",
    "Linear-Codes",
    "Matrix-Codes",
    "MaxiCode",
    "MicroQRCode",
    "None",
    "PDF417",
    "QRCode",
    "rMQRCode",
    "UPC-A",
    "UPC-E",
  ];
  function ee(e) {
    return e.join("|");
  }
  function te(e) {
    for (var t = ne(e), n = 0, r = J.length - 1; n <= r; ) {
      var o = Math.floor((n + r) / 2),
        a = J[o],
        i = ne(a);
      if (i === t) return a;
      i < t ? (n = o + 1) : (r = o - 1);
    }
    return "None";
  }
  function ne(e) {
    return e.toLowerCase().replace(/_-\[\]/g, "");
  }
  function re(e, t) {
    return e.Binarizer[t];
  }
  function oe(e, t) {
    return e.CharacterSet[t];
  }
  var ae = ["Text", "Binary", "Mixed", "GS1", "ISO15434", "UnknownECI"];
  function ie(e) {
    return ae[e.value];
  }
  function ue(e, t) {
    return e.EanAddOnSymbol[t];
  }
  function se(e, t) {
    return e.TextMode[t];
  }
  var ce = {
    formats: [],
    tryHarder: !0,
    tryRotate: !0,
    tryInvert: !0,
    tryDownscale: !0,
    binarizer: "LocalAverage",
    isPure: !1,
    downscaleFactor: 3,
    downscaleThreshold: 500,
    minLineCount: 2,
    maxNumberOfSymbols: 255,
    tryCode39ExtendedMode: !1,
    validateCode39CheckSum: !1,
    validateITFCheckSum: !1,
    returnCodabarStartEnd: !1,
    returnErrors: !1,
    eanAddOnSymbol: "Read",
    textMode: "Plain",
    characterSet: "Unknown",
  };
  function le(e, t) {
    return (0, p.Z)(
      (0, p.Z)({}, t),
      {},
      {
        formats: ee(t.formats),
        binarizer: re(e, t.binarizer),
        eanAddOnSymbol: ue(e, t.eanAddOnSymbol),
        textMode: se(e, t.textMode),
        characterSet: oe(e, t.characterSet),
      },
    );
  }
  function fe(e) {
    return (0, p.Z)(
      (0, p.Z)({}, e),
      {},
      {
        format: te(e.format),
        eccLevel: e.eccLevel,
        contentType: ie(e.contentType),
      },
    );
  }
  var pe = {
      locateFile: function (e, t) {
        var n = e.match(/_(.+?)\.wasm$/);
        return n
          ? "https://fastly.jsdelivr.net/npm/zxing-wasm@1.1.3/dist/"
              .concat(n[1], "/")
              .concat(e)
          : t + e;
      },
    },
    de = new WeakMap();
  function he(e, t) {
    var n,
      r = de.get(e);
    if (
      null != r &&
      r.modulePromise &&
      (void 0 === t || Object.is(t, r.moduleOverrides))
    )
      return r.modulePromise;
    var o =
        null != (n = null != t ? t : null == r ? void 0 : r.moduleOverrides)
          ? n
          : pe,
      a = e((0, p.Z)({}, o));
    return (de.set(e, { moduleOverrides: o, modulePromise: a }), a);
  }
  function ve(e, t) {
    de.set(e, { moduleOverrides: t });
  }
  function me(e, t) {
    return ge.apply(this, arguments);
  }
  function ge() {
    return (
      (ge = (0, d.Z)(
        (0, r.Z)().mark(function e(t, n) {
          var o,
            a,
            i,
            u,
            s,
            c,
            l,
            f,
            d,
            h = arguments;
          return (0, r.Z)().wrap(function (e) {
            while (1)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (o = h.length > 2 && void 0 !== h[2] ? h[2] : ce),
                    (a = (0, p.Z)((0, p.Z)({}, ce), o)),
                    (e.next = 4),
                    he(t)
                  );
                case 4:
                  return (
                    (i = e.sent),
                    (u = n.size),
                    (e.t0 = Uint8Array),
                    (e.next = 9),
                    n.arrayBuffer()
                  );
                case 9:
                  for (
                    e.t1 = e.sent,
                      s = new e.t0(e.t1),
                      c = i._malloc(u),
                      i.HEAPU8.set(s, c),
                      l = i.readBarcodesFromImage(c, u, le(i, a)),
                      i._free(c),
                      f = [],
                      d = 0;
                    d < l.size();
                    ++d
                  )
                    f.push(fe(l.get(d)));
                  return e.abrupt("return", f);
                case 18:
                case "end":
                  return e.stop();
              }
          }, e);
        }),
      )),
      ge.apply(this, arguments)
    );
  }
  function ye(e, t) {
    return be.apply(this, arguments);
  }
  function be() {
    return (
      (be = (0, d.Z)(
        (0, r.Z)().mark(function e(t, n) {
          var o,
            a,
            i,
            u,
            s,
            c,
            l,
            f,
            d,
            h,
            v,
            m = arguments;
          return (0, r.Z)().wrap(function (e) {
            while (1)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (o = m.length > 2 && void 0 !== m[2] ? m[2] : ce),
                    (a = (0, p.Z)((0, p.Z)({}, ce), o)),
                    (e.next = 4),
                    he(t)
                  );
                case 4:
                  for (
                    i = e.sent,
                      u = n.data,
                      s = n.width,
                      c = n.height,
                      l = n.data.byteLength,
                      f = i._malloc(l),
                      i.HEAPU8.set(u, f),
                      d = i.readBarcodesFromPixmap(f, s, c, le(i, a)),
                      i._free(f),
                      h = [],
                      v = 0;
                    v < d.size();
                    ++v
                  )
                    h.push(fe(d.get(v)));
                  return e.abrupt("return", h);
                case 16:
                case "end":
                  return e.stop();
              }
          }, e);
        }),
      )),
      be.apply(this, arguments)
    );
  }
  (0, p.Z)((0, p.Z)({}, ce), {}, { formats: (0, f.Z)(ce.formats) });
  var we,
    _e = (function () {
      var e =
        ("undefined" === typeof document ? "undefined" : (0, l.Z)(document)) <
          "u" && document.currentScript
          ? document.currentScript.src
          : void 0;
      return function () {
        var t,
          n,
          r =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          o = r;
        o.ready = new Promise(function (e, r) {
          ((t = e), (n = r));
        });
        var f = Object.assign({}, o),
          p = "./this.program",
          d =
            "object" ==
            ("undefined" === typeof window ? "undefined" : (0, l.Z)(window)),
          h = "function" == typeof importScripts;
        "object" == ("undefined" === typeof g ? "undefined" : (0, l.Z)(g)) &&
          "object" == (0, l.Z)(g.versions) &&
          g.versions.node;
        var v,
          m = "";
        function b(e) {
          return o.locateFile ? o.locateFile(e, m) : m + e;
        }
        ((d || h) &&
          (h
            ? (m = self.location.href)
            : ("undefined" === typeof document
                ? "undefined"
                : (0, l.Z)(document)) < "u" &&
              document.currentScript &&
              (m = document.currentScript.src),
          e && (m = e),
          (m =
            0 !== m.indexOf("blob:")
              ? m.substr(0, m.replace(/[?#].*/, "").lastIndexOf("/") + 1)
              : ""),
          h &&
            (v = function (e) {
              var t = new XMLHttpRequest();
              return (
                t.open("GET", e, !1),
                (t.responseType = "arraybuffer"),
                t.send(null),
                new Uint8Array(t.response)
              );
            })),
          o.print || y.log.bind(y));
        var w,
          _ = o.printErr || y.error.bind(y);
        (Object.assign(o, f),
          (f = null),
          o.arguments && o.arguments,
          o.thisProgram && (p = o.thisProgram),
          o.quit && o.quit,
          o.wasmBinary && (w = o.wasmBinary),
          "object" !=
            ("undefined" === typeof WebAssembly
              ? "undefined"
              : (0, l.Z)(WebAssembly)) && G("no native wasm support detected"));
        var E,
          T,
          O,
          C,
          P,
          A,
          S,
          k,
          R,
          M = !1;
        function L() {
          var e = E.buffer;
          ((o.HEAP8 = T = new Int8Array(e)),
            (o.HEAP16 = C = new Int16Array(e)),
            (o.HEAPU8 = O = new Uint8Array(e)),
            (o.HEAPU16 = P = new Uint16Array(e)),
            (o.HEAP32 = A = new Int32Array(e)),
            (o.HEAPU32 = S = new Uint32Array(e)),
            (o.HEAPF32 = k = new Float32Array(e)),
            (o.HEAPF64 = R = new Float64Array(e)));
        }
        var x = [],
          D = [],
          I = [];
        function j() {
          if (o.preRun)
            for (
              "function" == typeof o.preRun && (o.preRun = [o.preRun]);
              o.preRun.length;
            )
              $(o.preRun.shift());
          te(x);
        }
        function N() {
          te(D);
        }
        function U() {
          if (o.postRun)
            for (
              "function" == typeof o.postRun && (o.postRun = [o.postRun]);
              o.postRun.length;
            )
              B(o.postRun.shift());
          te(I);
        }
        function $(e) {
          x.unshift(e);
        }
        function F(e) {
          D.unshift(e);
        }
        function B(e) {
          I.unshift(e);
        }
        var W = 0,
          H = null;
        function V(e) {
          var t;
          (W++,
            null === (t = o.monitorRunDependencies) ||
              void 0 === t ||
              t.call(o, W));
        }
        function Z(e) {
          var t;
          if (
            (W--,
            null === (t = o.monitorRunDependencies) ||
              void 0 === t ||
              t.call(o, W),
            0 == W && H)
          ) {
            var n = H;
            ((H = null), n());
          }
        }
        function G(e) {
          var t;
          (null === (t = o.onAbort) || void 0 === t || t.call(o, e),
            (e = "Aborted(" + e + ")"),
            _(e),
            (M = !0),
            (e += ". Build with -sASSERTIONS for more info."));
          var r = new WebAssembly.RuntimeError(e);
          throw (n(r), r);
        }
        var z,
          Q = "data:application/octet-stream;base64,",
          K = function (e) {
            return e.startsWith(Q);
          };
        function q(e) {
          if (e == z && w) return new Uint8Array(w);
          if (v) return v(e);
          throw "both async and sync fetching of the wasm failed";
        }
        function X(e) {
          return w || (!d && !h) || "function" != typeof fetch
            ? Promise.resolve().then(function () {
                return q(e);
              })
            : fetch(e, { credentials: "same-origin" })
                .then(function (t) {
                  if (!t.ok)
                    throw "failed to load wasm binary file at '" + e + "'";
                  return t.arrayBuffer();
                })
                .catch(function () {
                  return q(e);
                });
        }
        function Y(e, t, n) {
          return X(e)
            .then(function (e) {
              return WebAssembly.instantiate(e, t);
            })
            .then(function (e) {
              return e;
            })
            .then(n, function (e) {
              (_("failed to asynchronously prepare wasm: ".concat(e)), G(e));
            });
        }
        function J(e, t, n, r) {
          return e ||
            "function" != typeof WebAssembly.instantiateStreaming ||
            K(t) ||
            "function" != typeof fetch
            ? Y(t, n, r)
            : fetch(t, { credentials: "same-origin" }).then(function (e) {
                var o = WebAssembly.instantiateStreaming(e, n);
                return o.then(r, function (e) {
                  return (
                    _("wasm streaming compile failed: ".concat(e)),
                    _("falling back to ArrayBuffer instantiation"),
                    Y(t, n, r)
                  );
                });
              });
        }
        function ee() {
          var e = { a: rr };
          function t(e, t) {
            return (
              (or = e.exports),
              (E = or.ia),
              L(),
              (bt = or.ma),
              F(or.ja),
              Z(),
              or
            );
          }
          function r(e) {
            t(e.instance);
          }
          if ((V(), o.instantiateWasm))
            try {
              return o.instantiateWasm(e, t);
            } catch (a) {
              (_(
                "Module.instantiateWasm callback failed with error: ".concat(a),
              ),
                n(a));
            }
          return (J(w, z, e, r).catch(n), {});
        }
        ((z = "zxing_reader.wasm"), K(z) || (z = b(z)));
        var te = function (e) {
          for (; e.length > 0; ) e.shift()(o);
        };
        o.noExitRuntime;
        var ne = [],
          re = 0,
          oe = function (e) {
            var t = new ue(e);
            return (
              t.get_caught() || (t.set_caught(!0), re--),
              t.set_rethrown(!1),
              ne.push(t),
              dr(t.excPtr),
              t.get_exception_ptr()
            );
          },
          ae = 0,
          ie = function () {
            sr(0, 0);
            var e = ne.pop();
            (pr(e.excPtr), (ae = 0));
          };
        function ue(e) {
          ((this.excPtr = e),
            (this.ptr = e - 24),
            (this.set_type = function (e) {
              S[(this.ptr + 4) >> 2] = e;
            }),
            (this.get_type = function () {
              return S[(this.ptr + 4) >> 2];
            }),
            (this.set_destructor = function (e) {
              S[(this.ptr + 8) >> 2] = e;
            }),
            (this.get_destructor = function () {
              return S[(this.ptr + 8) >> 2];
            }),
            (this.set_caught = function (e) {
              ((e = e ? 1 : 0), (T[(this.ptr + 12) >> 0] = e));
            }),
            (this.get_caught = function () {
              return 0 != T[(this.ptr + 12) >> 0];
            }),
            (this.set_rethrown = function (e) {
              ((e = e ? 1 : 0), (T[(this.ptr + 13) >> 0] = e));
            }),
            (this.get_rethrown = function () {
              return 0 != T[(this.ptr + 13) >> 0];
            }),
            (this.init = function (e, t) {
              (this.set_adjusted_ptr(0),
                this.set_type(e),
                this.set_destructor(t));
            }),
            (this.set_adjusted_ptr = function (e) {
              S[(this.ptr + 16) >> 2] = e;
            }),
            (this.get_adjusted_ptr = function () {
              return S[(this.ptr + 16) >> 2];
            }),
            (this.get_exception_ptr = function () {
              var e = vr(this.get_type());
              if (e) return S[this.excPtr >> 2];
              var t = this.get_adjusted_ptr();
              return 0 !== t ? t : this.excPtr;
            }));
        }
        var se = function (e) {
            throw (ae || (ae = e), ae);
          },
          ce = function (e) {
            var t = ae;
            if (!t) return (cr(0), 0);
            var n = new ue(t);
            n.set_adjusted_ptr(t);
            var r = n.get_type();
            if (!r) return (cr(0), t);
            for (var o in e) {
              var a = e[o];
              if (0 === a || a === r) break;
              var i = n.ptr + 16;
              if (hr(a, r, i)) return (cr(a), t);
            }
            return (cr(r), t);
          },
          le = function () {
            return ce([]);
          },
          fe = function (e) {
            return ce([e]);
          },
          pe = function (e, t) {
            return ce([e, t]);
          },
          de = function () {
            var e = ne.pop();
            e || G("no exception to throw");
            var t = e.excPtr;
            throw (
              e.get_rethrown() ||
                (ne.push(e), e.set_rethrown(!0), e.set_caught(!1), re++),
              (ae = t),
              ae
            );
          },
          he = function (e, t, n) {
            var r = new ue(e);
            throw (r.init(t, n), (ae = e), re++, ae);
          },
          ve = function () {
            return re;
          },
          me = {},
          ge = function (e) {
            for (; e.length; ) {
              var t = e.pop(),
                n = e.pop();
              n(t);
            }
          };
        function ye(e) {
          return this.fromWireType(A[e >> 2]);
        }
        var be,
          we,
          _e,
          Ee = {},
          Te = {},
          Oe = {},
          Ce = function (e) {
            throw new be(e);
          },
          Pe = function (e, t, n) {
            function r(t) {
              var r = n(t);
              r.length !== e.length && Ce("Mismatched type converter count");
              for (var o = 0; o < e.length; ++o) xe(e[o], r[o]);
            }
            e.forEach(function (e) {
              Oe[e] = t;
            });
            var o = new Array(t.length),
              a = [],
              i = 0;
            (t.forEach(function (e, t) {
              Te.hasOwnProperty(e)
                ? (o[t] = Te[e])
                : (a.push(e),
                  Ee.hasOwnProperty(e) || (Ee[e] = []),
                  Ee[e].push(function () {
                    ((o[t] = Te[e]), ++i, i === a.length && r(o));
                  }));
            }),
              0 === a.length && r(o));
          },
          Ae = function (e) {
            var t = me[e];
            delete me[e];
            var n = t.rawConstructor,
              r = t.rawDestructor,
              o = t.fields,
              a = o
                .map(function (e) {
                  return e.getterReturnType;
                })
                .concat(
                  o.map(function (e) {
                    return e.setterArgumentType;
                  }),
                );
            Pe([e], a, function (e) {
              var a = {};
              return (
                o.forEach(function (t, n) {
                  var r = t.fieldName,
                    i = e[n],
                    u = t.getter,
                    s = t.getterContext,
                    c = e[n + o.length],
                    l = t.setter,
                    f = t.setterContext;
                  a[r] = {
                    read: function (e) {
                      return i.fromWireType(u(s, e));
                    },
                    write: function (e, t) {
                      var n = [];
                      (l(f, e, c.toWireType(n, t)), ge(n));
                    },
                  };
                }),
                [
                  {
                    name: t.name,
                    fromWireType: function (e) {
                      var t = {};
                      for (var n in a) t[n] = a[n].read(e);
                      return (r(e), t);
                    },
                    toWireType: function (e, t) {
                      for (var o in a)
                        if (!(o in t))
                          throw new TypeError(
                            'Missing field: "'.concat(o, '"'),
                          );
                      var i = n();
                      for (o in a) a[o].write(i, t[o]);
                      return (null !== e && e.push(r, i), i);
                    },
                    argPackAdvance: Ie,
                    readValueFromPointer: ye,
                    destructorFunction: r,
                  },
                ]
              );
            });
          },
          Se = function (e, t, n, r, o) {},
          ke = function () {
            for (var e = new Array(256), t = 0; t < 256; ++t)
              e[t] = String.fromCharCode(t);
            we = e;
          },
          Re = function (e) {
            for (var t = "", n = e; O[n]; ) t += we[O[n++]];
            return t;
          },
          Me = function (e) {
            throw new _e(e);
          };
        function Le(e, t) {
          var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            r = t.name;
          if (
            (e ||
              Me(
                'type "'.concat(
                  r,
                  '" must have a positive integer typeid pointer',
                ),
              ),
            Te.hasOwnProperty(e))
          ) {
            if (n.ignoreDuplicateRegistrations) return;
            Me("Cannot register type '".concat(r, "' twice"));
          }
          if (((Te[e] = t), delete Oe[e], Ee.hasOwnProperty(e))) {
            var o = Ee[e];
            (delete Ee[e],
              o.forEach(function (e) {
                return e();
              }));
          }
        }
        function xe(e, t) {
          var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          if (!("argPackAdvance" in t))
            throw new TypeError(
              "registerType registeredInstance requires argPackAdvance",
            );
          return Le(e, t, n);
        }
        var De,
          Ie = 8,
          je = function (e, t, n, r) {
            ((t = Re(t)),
              xe(e, {
                name: t,
                fromWireType: function (e) {
                  return !!e;
                },
                toWireType: function (e, t) {
                  return t ? n : r;
                },
                argPackAdvance: Ie,
                readValueFromPointer: function (e) {
                  return this.fromWireType(O[e]);
                },
                destructorFunction: null,
              }));
          },
          Ne = function (e) {
            return {
              count: e.count,
              deleteScheduled: e.deleteScheduled,
              preservePointerOnDelete: e.preservePointerOnDelete,
              ptr: e.ptr,
              ptrType: e.ptrType,
              smartPtr: e.smartPtr,
              smartPtrType: e.smartPtrType,
            };
          },
          Ue = function (e) {
            function t(e) {
              return e.$$.ptrType.registeredClass.name;
            }
            Me(t(e) + " instance already deleted");
          },
          $e = !1,
          Fe = function (e) {},
          Be = function (e) {
            e.smartPtr
              ? e.smartPtrType.rawDestructor(e.smartPtr)
              : e.ptrType.registeredClass.rawDestructor(e.ptr);
          },
          We = function (e) {
            e.count.value -= 1;
            var t = 0 === e.count.value;
            t && Be(e);
          },
          He = function e(t, n, r) {
            if (n === r) return t;
            if (void 0 === r.baseClass) return null;
            var o = e(t, n, r.baseClass);
            return null === o ? null : r.downcast(o);
          },
          Ve = {},
          Ze = function () {
            return Object.keys(Xe).length;
          },
          Ge = function () {
            var e = [];
            for (var t in Xe) Xe.hasOwnProperty(t) && e.push(Xe[t]);
            return e;
          },
          ze = [],
          Qe = function () {
            for (; ze.length; ) {
              var e = ze.pop();
              ((e.$$.deleteScheduled = !1), e.delete());
            }
          },
          Ke = function (e) {
            ((De = e), ze.length && De && De(Qe));
          },
          qe = function () {
            ((o.getInheritedInstanceCount = Ze),
              (o.getLiveInheritedInstances = Ge),
              (o.flushPendingDeletes = Qe),
              (o.setDelayFunction = Ke));
          },
          Xe = {},
          Ye = function (e, t) {
            for (
              void 0 === t && Me("ptr should not be undefined");
              e.baseClass;
            )
              ((t = e.upcast(t)), (e = e.baseClass));
            return t;
          },
          Je = function (e, t) {
            return ((t = Ye(e, t)), Xe[t]);
          },
          et = function (e, t) {
            (!t.ptrType || !t.ptr) &&
              Ce("makeClassHandle requires ptr and ptrType");
            var n = !!t.smartPtrType,
              r = !!t.smartPtr;
            return (
              n !== r && Ce("Both smartPtrType and smartPtr must be specified"),
              (t.count = { value: 1 }),
              nt(Object.create(e, { $$: { value: t, writable: !0 } }))
            );
          };
        function tt(e) {
          var t = this.getPointee(e);
          if (!t) return (this.destructor(e), null);
          var n = Je(this.registeredClass, t);
          if (void 0 !== n) {
            if (0 === n.$$.count.value)
              return ((n.$$.ptr = t), (n.$$.smartPtr = e), n.clone());
            var r = n.clone();
            return (this.destructor(e), r);
          }
          function o() {
            return this.isSmartPointer
              ? et(this.registeredClass.instancePrototype, {
                  ptrType: this.pointeeType,
                  ptr: t,
                  smartPtrType: this,
                  smartPtr: e,
                })
              : et(this.registeredClass.instancePrototype, {
                  ptrType: this,
                  ptr: e,
                });
          }
          var a,
            i = this.registeredClass.getActualType(t),
            u = Ve[i];
          if (!u) return o.call(this);
          a = this.isConst ? u.constPointerType : u.pointerType;
          var s = He(t, this.registeredClass, a.registeredClass);
          return null === s
            ? o.call(this)
            : this.isSmartPointer
              ? et(a.registeredClass.instancePrototype, {
                  ptrType: a,
                  ptr: s,
                  smartPtrType: this,
                  smartPtr: e,
                })
              : et(a.registeredClass.instancePrototype, { ptrType: a, ptr: s });
        }
        var nt = function (e) {
            return ("undefined" === typeof FinalizationRegistry
              ? "undefined"
              : (0, l.Z)(FinalizationRegistry)) > "u"
              ? ((nt = function (e) {
                  return e;
                }),
                e)
              : (($e = new FinalizationRegistry(function (e) {
                  We(e.$$);
                })),
                (nt = function (e) {
                  var t = e.$$,
                    n = !!t.smartPtr;
                  if (n) {
                    var r = { $$: t };
                    $e.register(e, r, e);
                  }
                  return e;
                }),
                (Fe = function (e) {
                  return $e.unregister(e);
                }),
                nt(e));
          },
          rt = function () {
            Object.assign(ot.prototype, {
              isAliasOf: function (e) {
                if (!(this instanceof ot) || !(e instanceof ot)) return !1;
                var t = this.$$.ptrType.registeredClass,
                  n = this.$$.ptr;
                e.$$ = e.$$;
                for (
                  var r = e.$$.ptrType.registeredClass, o = e.$$.ptr;
                  t.baseClass;
                )
                  ((n = t.upcast(n)), (t = t.baseClass));
                for (; r.baseClass; ) ((o = r.upcast(o)), (r = r.baseClass));
                return t === r && n === o;
              },
              clone: function () {
                if ((this.$$.ptr || Ue(this), this.$$.preservePointerOnDelete))
                  return ((this.$$.count.value += 1), this);
                var e = nt(
                  Object.create(Object.getPrototypeOf(this), {
                    $$: { value: Ne(this.$$) },
                  }),
                );
                return (
                  (e.$$.count.value += 1),
                  (e.$$.deleteScheduled = !1),
                  e
                );
              },
              delete: function () {
                (this.$$.ptr || Ue(this),
                  this.$$.deleteScheduled &&
                    !this.$$.preservePointerOnDelete &&
                    Me("Object already scheduled for deletion"),
                  Fe(this),
                  We(this.$$),
                  this.$$.preservePointerOnDelete ||
                    ((this.$$.smartPtr = void 0), (this.$$.ptr = void 0)));
              },
              isDeleted: function () {
                return !this.$$.ptr;
              },
              deleteLater: function () {
                return (
                  this.$$.ptr || Ue(this),
                  this.$$.deleteScheduled &&
                    !this.$$.preservePointerOnDelete &&
                    Me("Object already scheduled for deletion"),
                  ze.push(this),
                  1 === ze.length && De && De(Qe),
                  (this.$$.deleteScheduled = !0),
                  this
                );
              },
            });
          };
        function ot() {}
        var at = function (e, t) {
            return Object.defineProperty(t, "name", { value: e });
          },
          it = function (e, t, n) {
            if (void 0 === e[t].overloadTable) {
              var r = e[t];
              ((e[t] = function () {
                return (
                  e[t].overloadTable.hasOwnProperty(arguments.length) ||
                    Me(
                      "Function '"
                        .concat(
                          n,
                          "' called with an invalid number of arguments (",
                        )
                        .concat(arguments.length, ") - expects one of (")
                        .concat(e[t].overloadTable, ")!"),
                    ),
                  e[t].overloadTable[arguments.length].apply(this, arguments)
                );
              }),
                (e[t].overloadTable = []),
                (e[t].overloadTable[r.argCount] = r));
            }
          },
          ut = function (e, t, n) {
            o.hasOwnProperty(e)
              ? ((void 0 === n ||
                  (void 0 !== o[e].overloadTable &&
                    void 0 !== o[e].overloadTable[n])) &&
                  Me("Cannot register public name '".concat(e, "' twice")),
                it(o, e, e),
                o.hasOwnProperty(n) &&
                  Me(
                    "Cannot register multiple overloads of a function with the same number of arguments (".concat(
                      n,
                      ")!",
                    ),
                  ),
                (o[e].overloadTable[n] = t))
              : ((o[e] = t), void 0 !== n && (o[e].numArguments = n));
          },
          st = 48,
          ct = 57,
          lt = function (e) {
            if (void 0 === e) return "_unknown";
            e = e.replace(/[^a-zA-Z0-9_]/g, "$");
            var t = e.charCodeAt(0);
            return t >= st && t <= ct ? "_".concat(e) : e;
          };
        function ft(e, t, n, r, o, a, i, u) {
          ((this.name = e),
            (this.constructor = t),
            (this.instancePrototype = n),
            (this.rawDestructor = r),
            (this.baseClass = o),
            (this.getActualType = a),
            (this.upcast = i),
            (this.downcast = u),
            (this.pureVirtualFunctions = []));
        }
        var pt = function (e, t, n) {
          for (; t !== n; )
            (t.upcast ||
              Me(
                "Expected null or instance of "
                  .concat(n.name, ", got an instance of ")
                  .concat(t.name),
              ),
              (e = t.upcast(e)),
              (t = t.baseClass));
          return e;
        };
        function dt(e, t) {
          if (null === t)
            return (
              this.isReference && Me("null is not a valid ".concat(this.name)),
              0
            );
          (t.$$ ||
            Me('Cannot pass "'.concat(qt(t), '" as a ').concat(this.name)),
            t.$$.ptr ||
              Me(
                "Cannot pass deleted object as a pointer of type ".concat(
                  this.name,
                ),
              ));
          var n = t.$$.ptrType.registeredClass,
            r = pt(t.$$.ptr, n, this.registeredClass);
          return r;
        }
        function ht(e, t) {
          var n;
          if (null === t)
            return (
              this.isReference && Me("null is not a valid ".concat(this.name)),
              this.isSmartPointer
                ? ((n = this.rawConstructor()),
                  null !== e && e.push(this.rawDestructor, n),
                  n)
                : 0
            );
          ((!t || !t.$$) &&
            Me('Cannot pass "'.concat(qt(t), '" as a ').concat(this.name)),
            t.$$.ptr ||
              Me(
                "Cannot pass deleted object as a pointer of type ".concat(
                  this.name,
                ),
              ),
            !this.isConst &&
              t.$$.ptrType.isConst &&
              Me(
                "Cannot convert argument of type "
                  .concat(
                    t.$$.smartPtrType
                      ? t.$$.smartPtrType.name
                      : t.$$.ptrType.name,
                    " to parameter type ",
                  )
                  .concat(this.name),
              ));
          var r = t.$$.ptrType.registeredClass;
          if (
            ((n = pt(t.$$.ptr, r, this.registeredClass)), this.isSmartPointer)
          )
            switch (
              (void 0 === t.$$.smartPtr &&
                Me("Passing raw pointer to smart pointer is illegal"),
              this.sharingPolicy)
            ) {
              case 0:
                t.$$.smartPtrType === this
                  ? (n = t.$$.smartPtr)
                  : Me(
                      "Cannot convert argument of type "
                        .concat(
                          t.$$.smartPtrType
                            ? t.$$.smartPtrType.name
                            : t.$$.ptrType.name,
                          " to parameter type ",
                        )
                        .concat(this.name),
                    );
                break;
              case 1:
                n = t.$$.smartPtr;
                break;
              case 2:
                if (t.$$.smartPtrType === this) n = t.$$.smartPtr;
                else {
                  var o = t.clone();
                  ((n = this.rawShare(
                    n,
                    Vt.toHandle(function () {
                      return o.delete();
                    }),
                  )),
                    null !== e && e.push(this.rawDestructor, n));
                }
                break;
              default:
                Me("Unsupporting sharing policy");
            }
          return n;
        }
        function vt(e, t) {
          if (null === t)
            return (
              this.isReference && Me("null is not a valid ".concat(this.name)),
              0
            );
          (t.$$ ||
            Me('Cannot pass "'.concat(qt(t), '" as a ').concat(this.name)),
            t.$$.ptr ||
              Me(
                "Cannot pass deleted object as a pointer of type ".concat(
                  this.name,
                ),
              ),
            t.$$.ptrType.isConst &&
              Me(
                "Cannot convert argument of type "
                  .concat(t.$$.ptrType.name, " to parameter type ")
                  .concat(this.name),
              ));
          var n = t.$$.ptrType.registeredClass,
            r = pt(t.$$.ptr, n, this.registeredClass);
          return r;
        }
        function mt(e) {
          return this.fromWireType(S[e >> 2]);
        }
        var gt = function () {
          Object.assign(yt.prototype, {
            getPointee: function (e) {
              return (this.rawGetPointee && (e = this.rawGetPointee(e)), e);
            },
            destructor: function (e) {
              var t;
              null === (t = this.rawDestructor) ||
                void 0 === t ||
                t.call(this, e);
            },
            argPackAdvance: Ie,
            readValueFromPointer: mt,
            deleteObject: function (e) {
              null !== e && e.delete();
            },
            fromWireType: tt,
          });
        };
        function yt(e, t, n, r, o, a, i, u, s, c, l) {
          ((this.name = e),
            (this.registeredClass = t),
            (this.isReference = n),
            (this.isConst = r),
            (this.isSmartPointer = o),
            (this.pointeeType = a),
            (this.sharingPolicy = i),
            (this.rawGetPointee = u),
            (this.rawConstructor = s),
            (this.rawShare = c),
            (this.rawDestructor = l),
            o || void 0 !== t.baseClass
              ? (this.toWireType = ht)
              : r
                ? ((this.toWireType = dt), (this.destructorFunction = null))
                : ((this.toWireType = vt), (this.destructorFunction = null)));
        }
        var bt,
          wt,
          _t = function (e, t, n) {
            (o.hasOwnProperty(e) || Ce("Replacing nonexistant public symbol"),
              void 0 !== o[e].overloadTable && void 0 !== n
                ? (o[e].overloadTable[n] = t)
                : ((o[e] = t), (o[e].argCount = n)));
          },
          Et = function (e, t, n) {
            var r = o["dynCall_" + e];
            return n && n.length
              ? r.apply(null, [t].concat(n))
              : r.call(null, t);
          },
          Tt = [],
          Ot = function (e) {
            var t = Tt[e];
            return (
              t ||
                (e >= Tt.length && (Tt.length = e + 1),
                (Tt[e] = t = bt.get(e))),
              t
            );
          },
          Ct = function (e, t, n) {
            if (e.includes("j")) return Et(e, t, n);
            var r = Ot(t).apply(null, n);
            return r;
          },
          Pt = function (e, t) {
            var n = [];
            return function () {
              return ((n.length = 0), Object.assign(n, arguments), Ct(e, t, n));
            };
          },
          At = function (e, t) {
            function n() {
              return e.includes("j") ? Pt(e, t) : Ot(t);
            }
            e = Re(e);
            var r = n();
            return (
              "function" != typeof r &&
                Me(
                  "unknown function pointer with signature "
                    .concat(e, ": ")
                    .concat(t),
                ),
              r
            );
          },
          St = function (e, t) {
            var n = at(t, function (e) {
              ((this.name = t), (this.message = e));
              var n = new Error(e).stack;
              void 0 !== n &&
                (this.stack =
                  this.toString() + "\n" + n.replace(/^Error(:[^\n]*)?\n/, ""));
            });
            return (
              (n.prototype = Object.create(e.prototype)),
              (n.prototype.constructor = n),
              (n.prototype.toString = function () {
                return void 0 === this.message
                  ? this.name
                  : "".concat(this.name, ": ").concat(this.message);
              }),
              n
            );
          },
          kt = function (e) {
            var t = ur(e),
              n = Re(t);
            return (ar(t), n);
          },
          Rt = function (e, t) {
            var n = [],
              r = {};
            function o(e) {
              if (!r[e] && !Te[e]) {
                if (Oe[e]) return void Oe[e].forEach(o);
                (n.push(e), (r[e] = !0));
              }
            }
            throw (
              t.forEach(o),
              new wt("".concat(e, ": ") + n.map(kt).join([", "]))
            );
          },
          Mt = function (e, t, n, r, o, a, i, u, s, c, l, f, p) {
            ((l = Re(l)),
              (a = At(o, a)),
              u && (u = At(i, u)),
              c && (c = At(s, c)),
              (p = At(f, p)));
            var d = lt(l);
            (ut(d, function () {
              Rt("Cannot construct ".concat(l, " due to unbound types"), [r]);
            }),
              Pe([e, t, n], r ? [r] : [], function (t) {
                var n, o;
                ((t = t[0]),
                  r
                    ? ((n = t.registeredClass), (o = n.instancePrototype))
                    : (o = ot.prototype));
                var i = at(l, function () {
                    if (Object.getPrototypeOf(this) !== s)
                      throw new _e("Use 'new' to construct " + l);
                    if (void 0 === v.constructor_body)
                      throw new _e(l + " has no accessible constructor");
                    var e = v.constructor_body[arguments.length];
                    if (void 0 === e)
                      throw new _e(
                        "Tried to invoke ctor of "
                          .concat(l, " with invalid number of parameters (")
                          .concat(arguments.length, ") - expected (")
                          .concat(
                            Object.keys(v.constructor_body).toString(),
                            ") parameters instead!",
                          ),
                      );
                    return e.apply(this, arguments);
                  }),
                  s = Object.create(o, { constructor: { value: i } });
                i.prototype = s;
                var f,
                  h,
                  v = new ft(l, i, s, p, n, a, u, c);
                v.baseClass &&
                  ((null !== (h = (f = v.baseClass).__derivedClasses) &&
                    void 0 !== h) ||
                    (f.__derivedClasses = []),
                  v.baseClass.__derivedClasses.push(v));
                var m = new yt(l, v, !0, !1, !1),
                  g = new yt(l + "*", v, !1, !1, !1),
                  y = new yt(l + " const*", v, !1, !0, !1);
                return (
                  (Ve[e] = { pointerType: g, constPointerType: y }),
                  _t(d, i),
                  [m, g, y]
                );
              }));
          },
          Lt = function (e, t) {
            for (var n = [], r = 0; r < e; r++) n.push(S[(t + 4 * r) >> 2]);
            return n;
          };
        function xt(e) {
          for (var t = 1; t < e.length; ++t)
            if (null !== e[t] && void 0 === e[t].destructorFunction) return !0;
          return !1;
        }
        function Dt(e, t, n, r, o, a) {
          var i = t.length;
          i < 2 &&
            Me(
              "argTypes array size mismatch! Must at least get return value and 'this' types!",
            );
          var u = null !== t[1] && null !== n,
            s = xt(t),
            c = "void" !== t[0].name,
            l = i - 2,
            f = new Array(l),
            p = [],
            d = [],
            h = function () {
              var n;
              (arguments.length !== l &&
                Me(
                  "function "
                    .concat(e, " called with ")
                    .concat(arguments.length, " arguments, expected ")
                    .concat(l),
                ),
                (d.length = 0),
                (p.length = u ? 2 : 1),
                (p[0] = o),
                u && ((n = t[1].toWireType(d, this)), (p[1] = n)));
              for (var a = 0; a < l; ++a)
                ((f[a] = t[a + 2].toWireType(d, arguments[a])), p.push(f[a]));
              var i = r.apply(null, p);
              function h(e) {
                if (s) ge(d);
                else
                  for (var r = u ? 1 : 2; r < t.length; r++) {
                    var o = 1 === r ? n : f[r - 2];
                    null !== t[r].destructorFunction &&
                      t[r].destructorFunction(o);
                  }
                if (c) return t[0].fromWireType(e);
              }
              return h(i);
            };
          return at(e, h);
        }
        var It = function (e, t, n, r, o, a) {
            var i = Lt(t, n);
            ((o = At(r, o)),
              Pe([], [e], function (e) {
                e = e[0];
                var n = "constructor ".concat(e.name);
                if (
                  (void 0 === e.registeredClass.constructor_body &&
                    (e.registeredClass.constructor_body = []),
                  void 0 !== e.registeredClass.constructor_body[t - 1])
                )
                  throw new _e(
                    "Cannot register multiple constructors with identical number of parameters ("
                      .concat(t - 1, ") for class '")
                      .concat(
                        e.name,
                        "'! Overload resolution is currently only performed using the parameter count, not actual type info!",
                      ),
                  );
                return (
                  (e.registeredClass.constructor_body[t - 1] = function () {
                    Rt(
                      "Cannot construct ".concat(
                        e.name,
                        " due to unbound types",
                      ),
                      i,
                    );
                  }),
                  Pe([], i, function (r) {
                    return (
                      r.splice(1, 0, null),
                      (e.registeredClass.constructor_body[t - 1] = Dt(
                        n,
                        r,
                        null,
                        o,
                        a,
                      )),
                      []
                    );
                  }),
                  []
                );
              }));
          },
          jt = function (e) {
            e = e.trim();
            var t = e.indexOf("(");
            return -1 !== t ? e.substr(0, t) : e;
          },
          Nt = function (e, t, n, r, o, a, i, u, s) {
            var c = Lt(n, r);
            ((t = Re(t)),
              (t = jt(t)),
              (a = At(o, a)),
              Pe([], [e], function (e) {
                e = e[0];
                var r = "".concat(e.name, ".").concat(t);
                function o() {
                  Rt("Cannot call ".concat(r, " due to unbound types"), c);
                }
                (t.startsWith("@@") && (t = Symbol[t.substring(2)]),
                  u && e.registeredClass.pureVirtualFunctions.push(t));
                var s = e.registeredClass.instancePrototype,
                  l = s[t];
                return (
                  void 0 === l ||
                  (void 0 === l.overloadTable &&
                    l.className !== e.name &&
                    l.argCount === n - 2)
                    ? ((o.argCount = n - 2), (o.className = e.name), (s[t] = o))
                    : (it(s, t, r), (s[t].overloadTable[n - 2] = o)),
                  Pe([], c, function (o) {
                    var u = Dt(r, o, e, a, i);
                    return (
                      void 0 === s[t].overloadTable
                        ? ((u.argCount = n - 2), (s[t] = u))
                        : (s[t].overloadTable[n - 2] = u),
                      []
                    );
                  }),
                  []
                );
              }));
          };
        function Ut() {
          Object.assign($t.prototype, {
            get: function (e) {
              return this.allocated[e];
            },
            has: function (e) {
              return void 0 !== this.allocated[e];
            },
            allocate: function (e) {
              var t = this.freelist.pop() || this.allocated.length;
              return ((this.allocated[t] = e), t);
            },
            free: function (e) {
              ((this.allocated[e] = void 0), this.freelist.push(e));
            },
          });
        }
        function $t() {
          ((this.allocated = [void 0]), (this.freelist = []));
        }
        var Ft = new $t(),
          Bt = function (e) {
            e >= Ft.reserved && 0 === --Ft.get(e).refcount && Ft.free(e);
          },
          Wt = function () {
            for (var e = 0, t = Ft.reserved; t < Ft.allocated.length; ++t)
              void 0 !== Ft.allocated[t] && ++e;
            return e;
          },
          Ht = function () {
            (Ft.allocated.push(
              { value: void 0 },
              { value: null },
              { value: !0 },
              { value: !1 },
            ),
              (Ft.reserved = Ft.allocated.length),
              (o.count_emval_handles = Wt));
          },
          Vt = {
            toValue: function (e) {
              return (
                e || Me("Cannot use deleted val. handle = " + e),
                Ft.get(e).value
              );
            },
            toHandle: function (e) {
              switch (e) {
                case void 0:
                  return 1;
                case null:
                  return 2;
                case !0:
                  return 3;
                case !1:
                  return 4;
                default:
                  return Ft.allocate({ refcount: 1, value: e });
              }
            },
          },
          Zt = function (e, t) {
            ((t = Re(t)),
              xe(e, {
                name: t,
                fromWireType: function (e) {
                  var t = Vt.toValue(e);
                  return (Bt(e), t);
                },
                toWireType: function (e, t) {
                  return Vt.toHandle(t);
                },
                argPackAdvance: Ie,
                readValueFromPointer: ye,
                destructorFunction: null,
              }));
          },
          Gt = function (e, t, n) {
            switch (t) {
              case 1:
                return n
                  ? function (e) {
                      return this.fromWireType(T[e >> 0]);
                    }
                  : function (e) {
                      return this.fromWireType(O[e >> 0]);
                    };
              case 2:
                return n
                  ? function (e) {
                      return this.fromWireType(C[e >> 1]);
                    }
                  : function (e) {
                      return this.fromWireType(P[e >> 1]);
                    };
              case 4:
                return n
                  ? function (e) {
                      return this.fromWireType(A[e >> 2]);
                    }
                  : function (e) {
                      return this.fromWireType(S[e >> 2]);
                    };
              default:
                throw new TypeError(
                  "invalid integer width (".concat(t, "): ").concat(e),
                );
            }
          },
          zt = function (e, t, n, r) {
            function o() {}
            ((t = Re(t)),
              (o.values = {}),
              xe(e, {
                name: t,
                constructor: o,
                fromWireType: function (e) {
                  return this.constructor.values[e];
                },
                toWireType: function (e, t) {
                  return t.value;
                },
                argPackAdvance: Ie,
                readValueFromPointer: Gt(t, n, r),
                destructorFunction: null,
              }),
              ut(t, o));
          },
          Qt = function (e, t) {
            var n = Te[e];
            return (void 0 === n && Me(t + " has unknown type " + kt(e)), n);
          },
          Kt = function (e, t, n) {
            var r = Qt(e, "enum");
            t = Re(t);
            var o = r.constructor,
              a = Object.create(r.constructor.prototype, {
                value: { value: n },
                constructor: {
                  value: at("".concat(r.name, "_").concat(t), function () {}),
                },
              });
            ((o.values[n] = a), (o[t] = a));
          },
          qt = function (e) {
            if (null === e) return "null";
            var t = (0, l.Z)(e);
            return "object" === t || "array" === t || "function" === t
              ? e.toString()
              : "" + e;
          },
          Xt = function (e, t) {
            switch (t) {
              case 4:
                return function (e) {
                  return this.fromWireType(k[e >> 2]);
                };
              case 8:
                return function (e) {
                  return this.fromWireType(R[e >> 3]);
                };
              default:
                throw new TypeError(
                  "invalid float width (".concat(t, "): ").concat(e),
                );
            }
          },
          Yt = function (e, t, n) {
            ((t = Re(t)),
              xe(e, {
                name: t,
                fromWireType: function (e) {
                  return e;
                },
                toWireType: function (e, t) {
                  return t;
                },
                argPackAdvance: Ie,
                readValueFromPointer: Xt(t, n),
                destructorFunction: null,
              }));
          },
          Jt = function (e, t, n, r, o, a, i) {
            var u = Lt(t, n);
            ((e = Re(e)),
              (e = jt(e)),
              (o = At(r, o)),
              ut(
                e,
                function () {
                  Rt("Cannot call ".concat(e, " due to unbound types"), u);
                },
                t - 1,
              ),
              Pe([], u, function (n) {
                var r = [n[0], null].concat(n.slice(1));
                return (_t(e, Dt(e, r, null, o, a), t - 1), []);
              }));
          },
          en = function (e, t, n) {
            switch (t) {
              case 1:
                return n
                  ? function (e) {
                      return T[e >> 0];
                    }
                  : function (e) {
                      return O[e >> 0];
                    };
              case 2:
                return n
                  ? function (e) {
                      return C[e >> 1];
                    }
                  : function (e) {
                      return P[e >> 1];
                    };
              case 4:
                return n
                  ? function (e) {
                      return A[e >> 2];
                    }
                  : function (e) {
                      return S[e >> 2];
                    };
              default:
                throw new TypeError(
                  "invalid integer width (".concat(t, "): ").concat(e),
                );
            }
          },
          tn = function (e, t, n, r, o) {
            t = Re(t);
            var a = function (e) {
              return e;
            };
            if (0 === r) {
              var i = 32 - 8 * n;
              a = function (e) {
                return (e << i) >>> i;
              };
            }
            var u,
              s = t.includes("unsigned"),
              c = function (e, t) {};
            ((u = s
              ? function (e, t) {
                  return (c(t, this.name), t >>> 0);
                }
              : function (e, t) {
                  return (c(t, this.name), t);
                }),
              xe(e, {
                name: t,
                fromWireType: a,
                toWireType: u,
                argPackAdvance: Ie,
                readValueFromPointer: en(t, n, 0 !== r),
                destructorFunction: null,
              }));
          },
          nn = function (e, t, n) {
            var r = [
                Int8Array,
                Uint8Array,
                Int16Array,
                Uint16Array,
                Int32Array,
                Uint32Array,
                Float32Array,
                Float64Array,
              ],
              o = r[t];
            function a(e) {
              var t = S[e >> 2],
                n = S[(e + 4) >> 2];
              return new o(T.buffer, n, t);
            }
            ((n = Re(n)),
              xe(
                e,
                {
                  name: n,
                  fromWireType: a,
                  argPackAdvance: Ie,
                  readValueFromPointer: a,
                },
                { ignoreDuplicateRegistrations: !0 },
              ));
          },
          rn = function (e, t, n, r) {
            if (!(r > 0)) return 0;
            for (var o = n, a = n + r - 1, i = 0; i < e.length; ++i) {
              var u = e.charCodeAt(i);
              if (u >= 55296 && u <= 57343) {
                var s = e.charCodeAt(++i);
                u = (65536 + ((1023 & u) << 10)) | (1023 & s);
              }
              if (u <= 127) {
                if (n >= a) break;
                t[n++] = u;
              } else if (u <= 2047) {
                if (n + 1 >= a) break;
                ((t[n++] = 192 | (u >> 6)), (t[n++] = 128 | (63 & u)));
              } else if (u <= 65535) {
                if (n + 2 >= a) break;
                ((t[n++] = 224 | (u >> 12)),
                  (t[n++] = 128 | ((u >> 6) & 63)),
                  (t[n++] = 128 | (63 & u)));
              } else {
                if (n + 3 >= a) break;
                ((t[n++] = 240 | (u >> 18)),
                  (t[n++] = 128 | ((u >> 12) & 63)),
                  (t[n++] = 128 | ((u >> 6) & 63)),
                  (t[n++] = 128 | (63 & u)));
              }
            }
            return ((t[n] = 0), n - o);
          },
          on = function (e, t, n) {
            return rn(e, O, t, n);
          },
          an = function (e) {
            for (var t = 0, n = 0; n < e.length; ++n) {
              var r = e.charCodeAt(n);
              r <= 127
                ? t++
                : r <= 2047
                  ? (t += 2)
                  : r >= 55296 && r <= 57343
                    ? ((t += 4), ++n)
                    : (t += 3);
            }
            return t;
          },
          un =
            ("undefined" === typeof TextDecoder
              ? "undefined"
              : (0, l.Z)(TextDecoder)) < "u"
              ? new TextDecoder("utf8")
              : void 0,
          sn = function (e, t, n) {
            for (var r = t + n, o = t; e[o] && !(o >= r); ) ++o;
            if (o - t > 16 && e.buffer && un)
              return un.decode(e.subarray(t, o));
            for (var a = ""; t < o; ) {
              var i = e[t++];
              if (128 & i) {
                var u = 63 & e[t++];
                if (192 != (224 & i)) {
                  var s = 63 & e[t++];
                  if (
                    ((i =
                      224 == (240 & i)
                        ? ((15 & i) << 12) | (u << 6) | s
                        : ((7 & i) << 18) |
                          (u << 12) |
                          (s << 6) |
                          (63 & e[t++])),
                    i < 65536)
                  )
                    a += String.fromCharCode(i);
                  else {
                    var c = i - 65536;
                    a += String.fromCharCode(
                      55296 | (c >> 10),
                      56320 | (1023 & c),
                    );
                  }
                } else a += String.fromCharCode(((31 & i) << 6) | u);
              } else a += String.fromCharCode(i);
            }
            return a;
          },
          cn = function (e, t) {
            return e ? sn(O, e, t) : "";
          },
          ln = function (e, t) {
            t = Re(t);
            var n = "std::string" === t;
            xe(e, {
              name: t,
              fromWireType: function (e) {
                var t,
                  r = S[e >> 2],
                  o = e + 4;
                if (n)
                  for (var a = o, i = 0; i <= r; ++i) {
                    var u = o + i;
                    if (i == r || 0 == O[u]) {
                      var s = u - a,
                        c = cn(a, s);
                      (void 0 === t ? (t = c) : ((t += "\0"), (t += c)),
                        (a = u + 1));
                    }
                  }
                else {
                  var l = new Array(r);
                  for (i = 0; i < r; ++i) l[i] = String.fromCharCode(O[o + i]);
                  t = l.join("");
                }
                return (ar(e), t);
              },
              toWireType: function (e, t) {
                t instanceof ArrayBuffer && (t = new Uint8Array(t));
                var r,
                  o = "string" == typeof t;
                (o ||
                  t instanceof Uint8Array ||
                  t instanceof Uint8ClampedArray ||
                  t instanceof Int8Array ||
                  Me("Cannot pass non-string to std::string"),
                  (r = n && o ? an(t) : t.length));
                var a = ir(4 + r + 1),
                  i = a + 4;
                if (((S[a >> 2] = r), n && o)) on(t, i, r + 1);
                else if (o)
                  for (var u = 0; u < r; ++u) {
                    var s = t.charCodeAt(u);
                    (s > 255 &&
                      (ar(i),
                      Me(
                        "String has UTF-16 code units that do not fit in 8 bits",
                      )),
                      (O[i + u] = s));
                  }
                else for (u = 0; u < r; ++u) O[i + u] = t[u];
                return (null !== e && e.push(ar, a), a);
              },
              argPackAdvance: Ie,
              readValueFromPointer: mt,
              destructorFunction: function (e) {
                ar(e);
              },
            });
          },
          fn =
            ("undefined" === typeof TextDecoder
              ? "undefined"
              : (0, l.Z)(TextDecoder)) < "u"
              ? new TextDecoder("utf-16le")
              : void 0,
          pn = function (e, t) {
            for (var n = e, r = n >> 1, o = r + t / 2; !(r >= o) && P[r]; ) ++r;
            if (((n = r << 1), n - e > 32 && fn))
              return fn.decode(O.subarray(e, n));
            for (var a = "", i = 0; !(i >= t / 2); ++i) {
              var u = C[(e + 2 * i) >> 1];
              if (0 == u) break;
              a += String.fromCharCode(u);
            }
            return a;
          },
          dn = function (e, t, n) {
            var r;
            if (((null !== (r = n) && void 0 !== r) || (n = 2147483647), n < 2))
              return 0;
            n -= 2;
            for (
              var o = t, a = n < 2 * e.length ? n / 2 : e.length, i = 0;
              i < a;
              ++i
            ) {
              var u = e.charCodeAt(i);
              ((C[t >> 1] = u), (t += 2));
            }
            return ((C[t >> 1] = 0), t - o);
          },
          hn = function (e) {
            return 2 * e.length;
          },
          vn = function (e, t) {
            for (var n = 0, r = ""; !(n >= t / 4); ) {
              var o = A[(e + 4 * n) >> 2];
              if (0 == o) break;
              if ((++n, o >= 65536)) {
                var a = o - 65536;
                r += String.fromCharCode(55296 | (a >> 10), 56320 | (1023 & a));
              } else r += String.fromCharCode(o);
            }
            return r;
          },
          mn = function (e, t, n) {
            var r;
            if (((null !== (r = n) && void 0 !== r) || (n = 2147483647), n < 4))
              return 0;
            for (var o = t, a = o + n - 4, i = 0; i < e.length; ++i) {
              var u = e.charCodeAt(i);
              if (u >= 55296 && u <= 57343) {
                var s = e.charCodeAt(++i);
                u = (65536 + ((1023 & u) << 10)) | (1023 & s);
              }
              if (((A[t >> 2] = u), (t += 4), t + 4 > a)) break;
            }
            return ((A[t >> 2] = 0), t - o);
          },
          gn = function (e) {
            for (var t = 0, n = 0; n < e.length; ++n) {
              var r = e.charCodeAt(n);
              (r >= 55296 && r <= 57343 && ++n, (t += 4));
            }
            return t;
          },
          yn = function (e, t, n) {
            var r, o, a, i, u;
            ((n = Re(n)),
              2 === t
                ? ((r = pn),
                  (o = dn),
                  (i = hn),
                  (a = function () {
                    return P;
                  }),
                  (u = 1))
                : 4 === t &&
                  ((r = vn),
                  (o = mn),
                  (i = gn),
                  (a = function () {
                    return S;
                  }),
                  (u = 2)),
              xe(e, {
                name: n,
                fromWireType: function (e) {
                  for (
                    var n, o = S[e >> 2], i = a(), s = e + 4, c = 0;
                    c <= o;
                    ++c
                  ) {
                    var l = e + 4 + c * t;
                    if (c == o || 0 == i[l >> u]) {
                      var f = l - s,
                        p = r(s, f);
                      (void 0 === n ? (n = p) : ((n += "\0"), (n += p)),
                        (s = l + t));
                    }
                  }
                  return (ar(e), n);
                },
                toWireType: function (e, r) {
                  "string" != typeof r &&
                    Me("Cannot pass non-string to C++ string type ".concat(n));
                  var a = i(r),
                    s = ir(4 + a + t);
                  return (
                    (S[s >> 2] = a >> u),
                    o(r, s + 4, a + t),
                    null !== e && e.push(ar, s),
                    s
                  );
                },
                argPackAdvance: Ie,
                readValueFromPointer: ye,
                destructorFunction: function (e) {
                  ar(e);
                },
              }));
          },
          bn = function (e, t, n, r, o, a) {
            me[e] = {
              name: Re(t),
              rawConstructor: At(n, r),
              rawDestructor: At(o, a),
              fields: [],
            };
          },
          wn = function (e, t, n, r, o, a, i, u, s, c) {
            me[e].fields.push({
              fieldName: Re(t),
              getterReturnType: n,
              getter: At(r, o),
              getterContext: a,
              setterArgumentType: i,
              setter: At(u, s),
              setterContext: c,
            });
          },
          _n = function (e, t) {
            ((t = Re(t)),
              xe(e, {
                isVoid: !0,
                name: t,
                argPackAdvance: 0,
                fromWireType: function () {},
                toWireType: function (e, t) {},
              }));
          },
          En = [],
          Tn = function (e, t, n, r) {
            return ((e = En[e]), (t = Vt.toValue(t)), e(null, t, n, r));
          },
          On = {},
          Cn = function (e) {
            var t = On[e];
            return void 0 === t ? Re(e) : t;
          },
          Pn = function () {
            if (
              "object" ==
              ("undefined" === typeof globalThis
                ? "undefined"
                : (0, l.Z)(globalThis))
            )
              return globalThis;
            function e(e) {
              e.$$$embind_global$$$ = e;
              var t =
                "object" ==
                  ("undefined" === typeof $$$embind_global$$$
                    ? "undefined"
                    : (0, l.Z)($$$embind_global$$$)) &&
                e.$$$embind_global$$$ == e;
              return (t || delete e.$$$embind_global$$$, t);
            }
            if (
              "object" ==
                ("undefined" === typeof $$$embind_global$$$
                  ? "undefined"
                  : (0, l.Z)($$$embind_global$$$)) ||
              ("object" ==
                ("undefined" === typeof global
                  ? "undefined"
                  : (0, l.Z)(global)) && e(global)
                ? ($$$embind_global$$$ = global)
                : "object" ==
                    ("undefined" === typeof self
                      ? "undefined"
                      : (0, l.Z)(self)) &&
                  e(self) &&
                  ($$$embind_global$$$ = self),
              "object" ==
                ("undefined" === typeof $$$embind_global$$$
                  ? "undefined"
                  : (0, l.Z)($$$embind_global$$$)))
            )
              return $$$embind_global$$$;
            throw Error("unable to get global object.");
          },
          An = function (e) {
            return 0 === e
              ? Vt.toHandle(Pn())
              : ((e = Cn(e)), Vt.toHandle(Pn()[e]));
          },
          Sn = function (e) {
            var t = En.length;
            return (En.push(e), t);
          },
          kn = function (e, t) {
            for (var n = new Array(e), r = 0; r < e; ++r)
              n[r] = Qt(S[(t + 4 * r) >> 2], "parameter " + r);
            return n;
          },
          Rn = Reflect.construct,
          Mn = function (e, t, n) {
            var r = [],
              o = e.toWireType(r, n);
            return (r.length && (S[t >> 2] = Vt.toHandle(r)), o);
          },
          Ln = function (e, t, n) {
            var r = kn(e, t),
              o = r.shift();
            e--;
            var a = new Array(e),
              i = function (t, i, u, s) {
                for (var c = 0, l = 0; l < e; ++l)
                  ((a[l] = r[l].readValueFromPointer(s + c)),
                    (c += r[l].argPackAdvance));
                var f = 1 === n ? Rn(i, a) : i.apply(t, a);
                for (l = 0; l < e; ++l) {
                  var p, d;
                  null === (p = (d = r[l]).deleteObject) ||
                    void 0 === p ||
                    p.call(d, a[l]);
                }
                return Mn(o, u, f);
              },
              u = "methodCaller<("
                .concat(
                  r
                    .map(function (e) {
                      return e.name;
                    })
                    .join(", "),
                  ") => ",
                )
                .concat(o.name, ">");
            return Sn(at(u, i));
          },
          xn = function (e) {
            e > 4 && (Ft.get(e).refcount += 1);
          },
          Dn = function (e) {
            var t = Vt.toValue(e);
            (ge(t), Bt(e));
          },
          In = function (e, t) {
            e = Qt(e, "_emval_take_value");
            var n = e.readValueFromPointer(t);
            return Vt.toHandle(n);
          },
          jn = function () {
            G("");
          },
          Nn = function (e, t, n) {
            return O.copyWithin(e, t, t + n);
          },
          Un = function () {
            return 2147483648;
          },
          $n = function (e) {
            var t = E.buffer,
              n = (e - t.byteLength + 65535) / 65536;
            try {
              return (E.grow(n), L(), 1);
            } catch (r) {}
          },
          Fn = function (e) {
            var t = O.length;
            e >>>= 0;
            var n = Un();
            if (e > n) return !1;
            for (
              var r = function (e, t) {
                  return e + ((t - (e % t)) % t);
                },
                o = 1;
              o <= 4;
              o *= 2
            ) {
              var a = t * (1 + 0.2 / o);
              a = Math.min(a, e + 100663296);
              var i = Math.min(n, r(Math.max(e, a), 65536)),
                u = $n(i);
              if (u) return !0;
            }
            return !1;
          },
          Bn = {},
          Wn = function () {
            return p || "./this.program";
          },
          Hn = function e() {
            if (!e.strings) {
              var t =
                  (
                    ("object" ==
                      ("undefined" === typeof navigator
                        ? "undefined"
                        : (0, l.Z)(navigator)) &&
                      navigator.languages &&
                      navigator.languages[0]) ||
                    "C"
                  ).replace("-", "_") + ".UTF-8",
                n = {
                  USER: "web_user",
                  LOGNAME: "web_user",
                  PATH: "/",
                  PWD: "/",
                  HOME: "/home/web_user",
                  LANG: t,
                  _: Wn(),
                };
              for (var r in Bn) void 0 === Bn[r] ? delete n[r] : (n[r] = Bn[r]);
              var o = [];
              for (var r in n) o.push("".concat(r, "=").concat(n[r]));
              e.strings = o;
            }
            return e.strings;
          },
          Vn = function (e, t) {
            for (var n = 0; n < e.length; ++n) T[t++ >> 0] = e.charCodeAt(n);
            T[t >> 0] = 0;
          },
          Zn = function (e, t) {
            var n = 0;
            return (
              Hn().forEach(function (r, o) {
                var a = t + n;
                ((S[(e + 4 * o) >> 2] = a), Vn(r, a), (n += r.length + 1));
              }),
              0
            );
          },
          Gn = function (e, t) {
            var n = Hn();
            S[e >> 2] = n.length;
            var r = 0;
            return (
              n.forEach(function (e) {
                return (r += e.length + 1);
              }),
              (S[t >> 2] = r),
              0
            );
          },
          zn = function (e) {
            return e;
          },
          Qn = function (e) {
            return e % 4 === 0 && (e % 100 !== 0 || e % 400 === 0);
          },
          Kn = function (e, t) {
            for (var n = 0, r = 0; r <= t; n += e[r++]);
            return n;
          },
          qn = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
          Xn = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
          Yn = function (e, t) {
            for (var n = new Date(e.getTime()); t > 0; ) {
              var r = Qn(n.getFullYear()),
                o = n.getMonth(),
                a = (r ? qn : Xn)[o];
              if (!(t > a - n.getDate()))
                return (n.setDate(n.getDate() + t), n);
              ((t -= a - n.getDate() + 1),
                n.setDate(1),
                o < 11
                  ? n.setMonth(o + 1)
                  : (n.setMonth(0), n.setFullYear(n.getFullYear() + 1)));
            }
            return n;
          };
        function Jn(e, t, n) {
          var r = n > 0 ? n : an(e) + 1,
            o = new Array(r),
            a = rn(e, o, 0, o.length);
          return (t && (o.length = a), o);
        }
        var er = function (e, t) {
            T.set(e, t);
          },
          tr = function (e, t, n, r) {
            var o = S[(r + 40) >> 2],
              a = {
                tm_sec: A[r >> 2],
                tm_min: A[(r + 4) >> 2],
                tm_hour: A[(r + 8) >> 2],
                tm_mday: A[(r + 12) >> 2],
                tm_mon: A[(r + 16) >> 2],
                tm_year: A[(r + 20) >> 2],
                tm_wday: A[(r + 24) >> 2],
                tm_yday: A[(r + 28) >> 2],
                tm_isdst: A[(r + 32) >> 2],
                tm_gmtoff: A[(r + 36) >> 2],
                tm_zone: o ? cn(o) : "",
              },
              i = cn(n),
              u = {
                "%c": "%a %b %d %H:%M:%S %Y",
                "%D": "%m/%d/%y",
                "%F": "%Y-%m-%d",
                "%h": "%b",
                "%r": "%I:%M:%S %p",
                "%R": "%H:%M",
                "%T": "%H:%M:%S",
                "%x": "%m/%d/%y",
                "%X": "%H:%M:%S",
                "%Ec": "%c",
                "%EC": "%C",
                "%Ex": "%m/%d/%y",
                "%EX": "%H:%M:%S",
                "%Ey": "%y",
                "%EY": "%Y",
                "%Od": "%d",
                "%Oe": "%e",
                "%OH": "%H",
                "%OI": "%I",
                "%Om": "%m",
                "%OM": "%M",
                "%OS": "%S",
                "%Ou": "%u",
                "%OU": "%U",
                "%OV": "%V",
                "%Ow": "%w",
                "%OW": "%W",
                "%Oy": "%y",
              };
            for (var s in u) i = i.replace(new RegExp(s, "g"), u[s]);
            var c = [
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
              ],
              l = [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
              ];
            function f(e, t, n) {
              for (
                var r = "number" == typeof e ? e.toString() : e || "";
                r.length < t;
              )
                r = n[0] + r;
              return r;
            }
            function p(e, t) {
              return f(e, t, "0");
            }
            function d(e, t) {
              function n(e) {
                return e < 0 ? -1 : e > 0 ? 1 : 0;
              }
              var r;
              return (
                0 === (r = n(e.getFullYear() - t.getFullYear())) &&
                  0 === (r = n(e.getMonth() - t.getMonth())) &&
                  (r = n(e.getDate() - t.getDate())),
                r
              );
            }
            function h(e) {
              switch (e.getDay()) {
                case 0:
                  return new Date(e.getFullYear() - 1, 11, 29);
                case 1:
                  return e;
                case 2:
                  return new Date(e.getFullYear(), 0, 3);
                case 3:
                  return new Date(e.getFullYear(), 0, 2);
                case 4:
                  return new Date(e.getFullYear(), 0, 1);
                case 5:
                  return new Date(e.getFullYear() - 1, 11, 31);
                case 6:
                  return new Date(e.getFullYear() - 1, 11, 30);
              }
            }
            function v(e) {
              var t = Yn(new Date(e.tm_year + 1900, 0, 1), e.tm_yday),
                n = new Date(t.getFullYear(), 0, 4),
                r = new Date(t.getFullYear() + 1, 0, 4),
                o = h(n),
                a = h(r);
              return d(o, t) <= 0
                ? d(a, t) <= 0
                  ? t.getFullYear() + 1
                  : t.getFullYear()
                : t.getFullYear() - 1;
            }
            var m = {
              "%a": function (e) {
                return c[e.tm_wday].substring(0, 3);
              },
              "%A": function (e) {
                return c[e.tm_wday];
              },
              "%b": function (e) {
                return l[e.tm_mon].substring(0, 3);
              },
              "%B": function (e) {
                return l[e.tm_mon];
              },
              "%C": function (e) {
                var t = e.tm_year + 1900;
                return p((t / 100) | 0, 2);
              },
              "%d": function (e) {
                return p(e.tm_mday, 2);
              },
              "%e": function (e) {
                return f(e.tm_mday, 2, " ");
              },
              "%g": function (e) {
                return v(e).toString().substring(2);
              },
              "%G": function (e) {
                return v(e);
              },
              "%H": function (e) {
                return p(e.tm_hour, 2);
              },
              "%I": function (e) {
                var t = e.tm_hour;
                return (0 == t ? (t = 12) : t > 12 && (t -= 12), p(t, 2));
              },
              "%j": function (e) {
                return p(
                  e.tm_mday + Kn(Qn(e.tm_year + 1900) ? qn : Xn, e.tm_mon - 1),
                  3,
                );
              },
              "%m": function (e) {
                return p(e.tm_mon + 1, 2);
              },
              "%M": function (e) {
                return p(e.tm_min, 2);
              },
              "%n": function () {
                return "\n";
              },
              "%p": function (e) {
                return e.tm_hour >= 0 && e.tm_hour < 12 ? "AM" : "PM";
              },
              "%S": function (e) {
                return p(e.tm_sec, 2);
              },
              "%t": function () {
                return "\t";
              },
              "%u": function (e) {
                return e.tm_wday || 7;
              },
              "%U": function (e) {
                var t = e.tm_yday + 7 - e.tm_wday;
                return p(Math.floor(t / 7), 2);
              },
              "%V": function (e) {
                var t = Math.floor((e.tm_yday + 7 - ((e.tm_wday + 6) % 7)) / 7);
                if (((e.tm_wday + 371 - e.tm_yday - 2) % 7 <= 2 && t++, t)) {
                  if (53 == t) {
                    var n = (e.tm_wday + 371 - e.tm_yday) % 7;
                    4 != n && (3 != n || !Qn(e.tm_year)) && (t = 1);
                  }
                } else {
                  t = 52;
                  var r = (e.tm_wday + 7 - e.tm_yday - 1) % 7;
                  (4 == r || (5 == r && Qn((e.tm_year % 400) - 1))) && t++;
                }
                return p(t, 2);
              },
              "%w": function (e) {
                return e.tm_wday;
              },
              "%W": function (e) {
                var t = e.tm_yday + 7 - ((e.tm_wday + 6) % 7);
                return p(Math.floor(t / 7), 2);
              },
              "%y": function (e) {
                return (e.tm_year + 1900).toString().substring(2);
              },
              "%Y": function (e) {
                return e.tm_year + 1900;
              },
              "%z": function (e) {
                var t = e.tm_gmtoff,
                  n = t >= 0;
                return (
                  (t = Math.abs(t) / 60),
                  (t = (t / 60) * 100 + (t % 60)),
                  (n ? "+" : "-") + ("0000" + t).slice(-4)
                );
              },
              "%Z": function (e) {
                return e.tm_zone;
              },
              "%%": function () {
                return "%";
              },
            };
            for (var s in ((i = i.replace(/%%/g, "\0\0")), m))
              i.includes(s) && (i = i.replace(new RegExp(s, "g"), m[s](a)));
            i = i.replace(/\0\0/g, "%");
            var g = Jn(i, !1);
            return g.length > t ? 0 : (er(g, e), g.length - 1);
          },
          nr = function (e, t, n, r, o) {
            return tr(e, t, n, r);
          };
        ((be = o.InternalError =
          (function (e) {
            (0, u.Z)(n, e);
            var t = (0, s.Z)(n);
            function n(e) {
              var r;
              return (
                (0, i.Z)(this, n),
                (r = t.call(this, e)),
                (r.name = "InternalError"),
                r
              );
            }
            return (0, a.Z)(n);
          })((0, c.Z)(Error))),
          ke(),
          (_e = o.BindingError =
            (function (e) {
              (0, u.Z)(n, e);
              var t = (0, s.Z)(n);
              function n(e) {
                var r;
                return (
                  (0, i.Z)(this, n),
                  (r = t.call(this, e)),
                  (r.name = "BindingError"),
                  r
                );
              }
              return (0, a.Z)(n);
            })((0, c.Z)(Error))),
          rt(),
          qe(),
          gt(),
          (wt = o.UnboundTypeError = St(Error, "UnboundTypeError")),
          Ut(),
          Ht());
        var rr = {
            s: oe,
            u: ie,
            b: le,
            g: fe,
            q: pe,
            J: de,
            f: he,
            V: ve,
            d: se,
            da: Ae,
            Q: Se,
            _: je,
            ca: Mt,
            ba: It,
            w: Nt,
            Y: Zt,
            x: zt,
            h: Kt,
            L: Yt,
            M: Jt,
            t: tn,
            o: nn,
            K: ln,
            C: yn,
            A: bn,
            ea: wn,
            $: _n,
            R: Tn,
            ha: Bt,
            fa: An,
            Z: Ln,
            N: xn,
            O: Dn,
            aa: In,
            B: jn,
            X: Nn,
            W: Fn,
            T: Zn,
            U: Gn,
            E: xr,
            D: Er,
            F: Lr,
            n: Dr,
            a: yr,
            e: Or,
            m: _r,
            k: Pr,
            H: Rr,
            v: Sr,
            G: Mr,
            z: jr,
            P: Ur,
            l: Cr,
            j: Tr,
            c: wr,
            p: br,
            I: kr,
            r: Ir,
            i: Ar,
            y: Nr,
            ga: zn,
            S: nr,
          },
          or = ee(),
          ar = (o._free = function (e) {
            return (ar = o._free = or.ka)(e);
          }),
          ir = (o._malloc = function (e) {
            return (ir = o._malloc = or.la)(e);
          }),
          ur = function (e) {
            return (ur = or.na)(e);
          },
          sr = function (e, t) {
            return (sr = or.oa)(e, t);
          },
          cr = function (e) {
            return (cr = or.pa)(e);
          },
          lr = function () {
            return (lr = or.qa)();
          },
          fr = function (e) {
            return (fr = or.ra)(e);
          },
          pr = function (e) {
            return (pr = or.sa)(e);
          },
          dr = function (e) {
            return (dr = or.ta)(e);
          },
          hr = function (e, t, n) {
            return (hr = or.ua)(e, t, n);
          },
          vr = function (e) {
            return (vr = or.va)(e);
          };
        o.dynCall_viijii = function (e, t, n, r, a, i, u) {
          return (o.dynCall_viijii = or.wa)(e, t, n, r, a, i, u);
        };
        var mr,
          gr = (o.dynCall_jiiii = function (e, t, n, r, a) {
            return (gr = o.dynCall_jiiii = or.xa)(e, t, n, r, a);
          });
        function yr(e, t) {
          var n = lr();
          try {
            return Ot(e)(t);
          } catch (r) {
            if ((fr(n), r !== r + 0)) throw r;
            sr(1, 0);
          }
        }
        function br(e, t, n, r) {
          var o = lr();
          try {
            Ot(e)(t, n, r);
          } catch (a) {
            if ((fr(o), a !== a + 0)) throw a;
            sr(1, 0);
          }
        }
        function wr(e, t, n) {
          var r = lr();
          try {
            Ot(e)(t, n);
          } catch (o) {
            if ((fr(r), o !== o + 0)) throw o;
            sr(1, 0);
          }
        }
        function _r(e, t, n, r) {
          var o = lr();
          try {
            return Ot(e)(t, n, r);
          } catch (a) {
            if ((fr(o), a !== a + 0)) throw a;
            sr(1, 0);
          }
        }
        function Er(e, t, n, r, o) {
          var a = lr();
          try {
            return Ot(e)(t, n, r, o);
          } catch (i) {
            if ((fr(a), i !== i + 0)) throw i;
            sr(1, 0);
          }
        }
        function Tr(e, t) {
          var n = lr();
          try {
            Ot(e)(t);
          } catch (r) {
            if ((fr(n), r !== r + 0)) throw r;
            sr(1, 0);
          }
        }
        function Or(e, t, n) {
          var r = lr();
          try {
            return Ot(e)(t, n);
          } catch (o) {
            if ((fr(r), o !== o + 0)) throw o;
            sr(1, 0);
          }
        }
        function Cr(e) {
          var t = lr();
          try {
            Ot(e)();
          } catch (n) {
            if ((fr(t), n !== n + 0)) throw n;
            sr(1, 0);
          }
        }
        function Pr(e, t, n, r, o) {
          var a = lr();
          try {
            return Ot(e)(t, n, r, o);
          } catch (i) {
            if ((fr(a), i !== i + 0)) throw i;
            sr(1, 0);
          }
        }
        function Ar(e, t, n, r, o, a, i, u, s, c, l) {
          var f = lr();
          try {
            Ot(e)(t, n, r, o, a, i, u, s, c, l);
          } catch (p) {
            if ((fr(f), p !== p + 0)) throw p;
            sr(1, 0);
          }
        }
        function Sr(e, t, n, r, o, a, i) {
          var u = lr();
          try {
            return Ot(e)(t, n, r, o, a, i);
          } catch (s) {
            if ((fr(u), s !== s + 0)) throw s;
            sr(1, 0);
          }
        }
        function kr(e, t, n, r, o) {
          var a = lr();
          try {
            Ot(e)(t, n, r, o);
          } catch (i) {
            if ((fr(a), i !== i + 0)) throw i;
            sr(1, 0);
          }
        }
        function Rr(e, t, n, r, o, a) {
          var i = lr();
          try {
            return Ot(e)(t, n, r, o, a);
          } catch (u) {
            if ((fr(i), u !== u + 0)) throw u;
            sr(1, 0);
          }
        }
        function Mr(e, t, n, r, o, a, i, u) {
          var s = lr();
          try {
            return Ot(e)(t, n, r, o, a, i, u);
          } catch (c) {
            if ((fr(s), c !== c + 0)) throw c;
            sr(1, 0);
          }
        }
        function Lr(e, t, n, r) {
          var o = lr();
          try {
            return Ot(e)(t, n, r);
          } catch (a) {
            if ((fr(o), a !== a + 0)) throw a;
            sr(1, 0);
          }
        }
        function xr(e, t, n, r) {
          var o = lr();
          try {
            return Ot(e)(t, n, r);
          } catch (a) {
            if ((fr(o), a !== a + 0)) throw a;
            sr(1, 0);
          }
        }
        function Dr(e) {
          var t = lr();
          try {
            return Ot(e)();
          } catch (n) {
            if ((fr(t), n !== n + 0)) throw n;
            sr(1, 0);
          }
        }
        function Ir(e, t, n, r, o, a, i, u) {
          var s = lr();
          try {
            Ot(e)(t, n, r, o, a, i, u);
          } catch (c) {
            if ((fr(s), c !== c + 0)) throw c;
            sr(1, 0);
          }
        }
        function jr(e, t, n, r, o, a, i, u, s, c, l, f) {
          var p = lr();
          try {
            return Ot(e)(t, n, r, o, a, i, u, s, c, l, f);
          } catch (d) {
            if ((fr(p), d !== d + 0)) throw d;
            sr(1, 0);
          }
        }
        function Nr(e, t, n, r, o, a, i, u, s, c, l, f, p, d, h, v) {
          var m = lr();
          try {
            Ot(e)(t, n, r, o, a, i, u, s, c, l, f, p, d, h, v);
          } catch (g) {
            if ((fr(m), g !== g + 0)) throw g;
            sr(1, 0);
          }
        }
        function Ur(e, t, n, r, o) {
          var a = lr();
          try {
            return gr(e, t, n, r, o);
          } catch (i) {
            if ((fr(a), i !== i + 0)) throw i;
            sr(1, 0);
          }
        }
        function $r() {
          function e() {
            mr ||
              ((mr = !0),
              (o.calledRun = !0),
              !M &&
                (N(),
                t(o),
                o.onRuntimeInitialized && o.onRuntimeInitialized(),
                U()));
          }
          W > 0 ||
            (j(), W > 0) ||
            (o.setStatus
              ? (o.setStatus("Running..."),
                setTimeout(function () {
                  (setTimeout(function () {
                    o.setStatus("");
                  }, 1),
                    e());
                }, 1))
              : e());
        }
        if (
          ((o.dynCall_iiiiij = function (e, t, n, r, a, i, u) {
            return (o.dynCall_iiiiij = or.ya)(e, t, n, r, a, i, u);
          }),
          (o.dynCall_iiiiijj = function (e, t, n, r, a, i, u, s, c) {
            return (o.dynCall_iiiiijj = or.za)(e, t, n, r, a, i, u, s, c);
          }),
          (o.dynCall_iiiiiijj = function (e, t, n, r, a, i, u, s, c, l) {
            return (o.dynCall_iiiiiijj = or.Aa)(e, t, n, r, a, i, u, s, c, l);
          }),
          (H = function e() {
            (mr || $r(), mr || (H = e));
          }),
          o.preInit)
        )
          for (
            "function" == typeof o.preInit && (o.preInit = [o.preInit]);
            o.preInit.length > 0;
          )
            o.preInit.pop()();
        return ($r(), r.ready);
      };
    })();
  function Ee(e) {
    return he(_e, e);
  }
  function Te(e) {
    return ve(_e, e);
  }
  function Oe(e, t) {
    return Ce.apply(this, arguments);
  }
  function Ce() {
    return (
      (Ce = (0, d.Z)(
        (0, r.Z)().mark(function e(t, n) {
          return (0, r.Z)().wrap(function (e) {
            while (1)
              switch ((e.prev = e.next)) {
                case 0:
                  return e.abrupt("return", me(_e, t, n));
                case 1:
                case "end":
                  return e.stop();
              }
          }, e);
        }),
      )),
      Ce.apply(this, arguments)
    );
  }
  function Pe(e, t) {
    return Ae.apply(this, arguments);
  }
  function Ae() {
    return (
      (Ae = (0, d.Z)(
        (0, r.Z)().mark(function e(t, n) {
          return (0, r.Z)().wrap(function (e) {
            while (1)
              switch ((e.prev = e.next)) {
                case 0:
                  return e.abrupt("return", ye(_e, t, n));
                case 1:
                case "end":
                  return e.stop();
              }
          }, e);
        }),
      )),
      Ae.apply(this, arguments)
    );
  }
  var Se = (function (e) {
    (0, u.Z)(n, e);
    var t = (0, s.Z)(n);
    function n() {
      var e,
        r,
        a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      ((0, i.Z)(this, n), (e = t.call(this)), _((0, o.Z)(e), we, void 0));
      try {
        var u =
          null == (r = null == a ? void 0 : a.formats)
            ? void 0
            : r.filter(function (e) {
                return "unknown" !== e;
              });
        if (0 === (null == u ? void 0 : u.length))
          throw new TypeError("Hint option provided, but is empty.");
        (null == u ||
          u.forEach(function (e) {
            if (!C.has(e))
              throw new TypeError(
                "Failed to read the 'formats' property from 'BarcodeDetectorOptions': The provided value '".concat(
                  e,
                  "' is not a valid enum value of type BarcodeFormat.",
                ),
              );
          }),
          E((0, o.Z)(e), we, null != u ? u : []),
          Ee()
            .then(function (t) {
              e.dispatchEvent(new CustomEvent("load", { detail: t }));
            })
            .catch(function (t) {
              e.dispatchEvent(new CustomEvent("error", { detail: t }));
            }));
      } catch (u) {
        throw Y(u, "Failed to construct 'BarcodeDetector'");
      }
      return e;
    }
    return (
      (0, a.Z)(
        n,
        [
          {
            key: "detect",
            value: (function () {
              var e = (0, d.Z)(
                (0, r.Z)().mark(function e(t) {
                  var n, o;
                  return (0, r.Z)().wrap(
                    function (e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return ((e.prev = 0), (e.next = 3), H(t));
                          case 3:
                            if (((n = e.sent), null !== n)) {
                              e.next = 6;
                              break;
                            }
                            return e.abrupt("return", []);
                          case 6:
                            if (((e.prev = 6), !I(n))) {
                              e.next = 13;
                              break;
                            }
                            return (
                              (e.next = 10),
                              Oe(n, {
                                tryHarder: !0,
                                formats: w(this, we).map(function (e) {
                                  return C.get(e);
                                }),
                              })
                            );
                          case 10:
                            ((o = e.sent), (e.next = 16));
                            break;
                          case 13:
                            return (
                              (e.next = 15),
                              Pe(n, {
                                tryHarder: !0,
                                formats: w(this, we).map(function (e) {
                                  return C.get(e);
                                }),
                              })
                            );
                          case 15:
                            o = e.sent;
                          case 16:
                            e.next = 21;
                            break;
                          case 18:
                            throw (
                              (e.prev = 18),
                              (e.t0 = e["catch"](6)),
                              y.error(e.t0),
                              new DOMException(
                                "Barcode detection service unavailable.",
                                "NotSupportedError",
                              )
                            );
                          case 21:
                            return e.abrupt(
                              "return",
                              o.map(function (e) {
                                var t = e.position,
                                  n = t.topLeft,
                                  r = n.x,
                                  o = n.y,
                                  a = t.topRight,
                                  i = a.x,
                                  u = a.y,
                                  s = t.bottomLeft,
                                  c = s.x,
                                  l = s.y,
                                  f = t.bottomRight,
                                  p = f.x,
                                  d = f.y,
                                  h = Math.min(r, i, c, p),
                                  v = Math.min(o, u, l, d),
                                  m = Math.max(r, i, c, p),
                                  g = Math.max(o, u, l, d);
                                return {
                                  boundingBox: new DOMRectReadOnly(
                                    h,
                                    v,
                                    m - h,
                                    g - v,
                                  ),
                                  rawValue: e.text,
                                  format: P(e.format),
                                  cornerPoints: [
                                    { x: r, y: o },
                                    { x: i, y: u },
                                    { x: p, y: d },
                                    { x: c, y: l },
                                  ],
                                };
                              }),
                            );
                          case 24:
                            throw (
                              (e.prev = 24),
                              (e.t1 = e["catch"](0)),
                              Y(
                                e.t1,
                                "Failed to execute 'detect' on 'BarcodeDetector'",
                              )
                            );
                          case 27:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this,
                    [
                      [0, 24],
                      [6, 18],
                    ],
                  );
                }),
              );
              function t(t) {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          },
        ],
        [
          {
            key: "getSupportedFormats",
            value: (function () {
              var e = (0, d.Z)(
                (0, r.Z)().mark(function e() {
                  return (0, r.Z)().wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return e.abrupt(
                            "return",
                            O.filter(function (e) {
                              return "unknown" !== e;
                            }),
                          );
                        case 1:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          },
        ],
      ),
      n
    );
  })((0, c.Z)(EventTarget));
  we = new WeakMap();
  var ke,
    Re = function (e, t) {
      var n,
        r,
        o =
          arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : "error",
        a = new Promise(function (a, i) {
          ((n = a),
            (r = i),
            e.addEventListener(t, n),
            e.addEventListener(o, r));
        });
      return (
        a.finally(function () {
          (e.removeEventListener(t, n), e.removeEventListener(o, r));
        }),
        a
      );
    },
    Me = function (e) {
      return new Promise(function (t) {
        return setTimeout(t, e);
      });
    },
    Le =
      (Error,
      (function (e) {
        (0, u.Z)(n, e);
        var t = (0, s.Z)(n);
        function n() {
          var e;
          return (
            (0, i.Z)(this, n),
            (e = t.call(this, "this browser has no Stream API support")),
            (e.name = "StreamApiNotSupportedError"),
            e
          );
        }
        return (0, a.Z)(n);
      })((0, c.Z)(Error))),
    xe = (function (e) {
      (0, u.Z)(n, e);
      var t = (0, s.Z)(n);
      function n() {
        var e;
        return (
          (0, i.Z)(this, n),
          (e = t.call(
            this,
            "camera access is only permitted in secure context. Use HTTPS or localhost rather than HTTP.",
          )),
          (e.name = "InsecureContextError"),
          e
        );
      }
      return (0, a.Z)(n);
    })((0, c.Z)(Error)),
    De = (function (e) {
      (0, u.Z)(n, e);
      var t = (0, s.Z)(n);
      function n() {
        var e;
        return (
          (0, i.Z)(this, n),
          (e = t.call(
            this,
            "Loading camera stream timed out after 3 seconds. If you are on iOS in PWA mode, this is a known issue (see https://github.com/gruhn/vue-qrcode-reader/issues/298)",
          )),
          (e.name = "StreamLoadTimeoutError"),
          e
        );
      }
      return (0, a.Z)(n);
    })((0, c.Z)(Error)),
    Ie = function (e) {
      ke = new Se({ formats: e });
    },
    je = (function () {
      var e = (0, d.Z)(
        (0, r.Z)().mark(function e(t, n) {
          var o, a, i, u, s;
          return (0, r.Z)().wrap(function (e) {
            while (1)
              switch ((e.prev = e.next)) {
                case 0:
                  ((o = n.detectHandler),
                    (a = n.locateHandler),
                    (i = n.minDelay),
                    (u = n.formats),
                    y.debug("[vue-qrcode-reader] start scanning"),
                    (ke = new Se({ formats: u })),
                    (s = function e(n) {
                      return (function () {
                        var u = (0, d.Z)(
                          (0, r.Z)().mark(function u(s) {
                            var c, l, f, p, d, h, v;
                            return (0, r.Z)().wrap(function (r) {
                              while (1)
                                switch ((r.prev = r.next)) {
                                  case 0:
                                    if (0 !== t.readyState) {
                                      r.next = 4;
                                      break;
                                    }
                                    (y.debug(
                                      "[vue-qrcode-reader] stop scanning: video element readyState is 0",
                                    ),
                                      (r.next = 18));
                                    break;
                                  case 4:
                                    if (
                                      ((c = n.lastScanned),
                                      (l = n.contentBefore),
                                      (f = n.lastScanHadContent),
                                      !(s - c < i))
                                    ) {
                                      r.next = 9;
                                      break;
                                    }
                                    (window.requestAnimationFrame(e(n)),
                                      (r.next = 18));
                                    break;
                                  case 9:
                                    return ((r.next = 11), ke.detect(t));
                                  case 11:
                                    ((p = r.sent),
                                      (d = p.some(function (e) {
                                        return !l.includes(e.rawValue);
                                      })),
                                      d && o(p),
                                      (h = p.length > 0),
                                      h && a(p),
                                      !h && f && a(p),
                                      (v = {
                                        lastScanned: s,
                                        lastScanHadContent: h,
                                        contentBefore: d
                                          ? p.map(function (e) {
                                              return e.rawValue;
                                            })
                                          : l,
                                      }),
                                      window.requestAnimationFrame(e(v)));
                                  case 18:
                                  case "end":
                                    return r.stop();
                                }
                            }, u);
                          }),
                        );
                        return function (e) {
                          return u.apply(this, arguments);
                        };
                      })();
                    }),
                    s({
                      lastScanned: performance.now(),
                      contentBefore: [],
                      lastScanHadContent: !1,
                    })(performance.now()));
                case 4:
                case "end":
                  return e.stop();
              }
          }, e);
        }),
      );
      return function (t, n) {
        return e.apply(this, arguments);
      };
    })(),
    Ne = {},
    Ue = {};
  (Object.defineProperty(Ue, "__esModule", { value: !0 }),
    (Ue.compactObject = et),
    (Ue.deprecated = Xe));
  var $e = (Ue.detectBrowser = Ye);
  function Fe(e, t, n) {
    return (
      (t = Be(t)),
      t in e
        ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = n),
      e
    );
  }
  function Be(e) {
    var t = We(e, "string");
    return "symbol" === He(t) ? t : String(t);
  }
  function We(e, t) {
    if ("object" !== He(e) || null === e) return e;
    var n = e[Symbol.toPrimitive];
    if (void 0 !== n) {
      var r = n.call(e, t || "default");
      if ("object" !== He(r)) return r;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === t ? String : Number)(e);
  }
  function He(e) {
    return (
      (He =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            }),
      He(e)
    );
  }
  ((Ue.disableLog = Qe),
    (Ue.disableWarnings = Ke),
    (Ue.extractVersion = Ge),
    (Ue.filterStats = nt),
    (Ue.log = qe),
    (Ue.walkStats = tt),
    (Ue.wrapPeerConnectionEvent = ze));
  var Ve = !0,
    Ze = !0;
  function Ge(e, t, n) {
    var r = e.match(t);
    return r && r.length >= n && parseInt(r[n], 10);
  }
  function ze(e, t, n) {
    if (e.RTCPeerConnection) {
      var r = e.RTCPeerConnection.prototype,
        o = r.addEventListener;
      r.addEventListener = function (e, r) {
        if (e !== t) return o.apply(this, arguments);
        var a = function (e) {
          var t = n(e);
          t && (r.handleEvent ? r.handleEvent(t) : r(t));
        };
        return (
          (this._eventMap = this._eventMap || {}),
          this._eventMap[t] || (this._eventMap[t] = new Map()),
          this._eventMap[t].set(r, a),
          o.apply(this, [e, a])
        );
      };
      var a = r.removeEventListener;
      ((r.removeEventListener = function (e, n) {
        if (e !== t || !this._eventMap || !this._eventMap[t])
          return a.apply(this, arguments);
        if (!this._eventMap[t].has(n)) return a.apply(this, arguments);
        var r = this._eventMap[t].get(n);
        return (
          this._eventMap[t].delete(n),
          0 === this._eventMap[t].size && delete this._eventMap[t],
          0 === Object.keys(this._eventMap).length && delete this._eventMap,
          a.apply(this, [e, r])
        );
      }),
        Object.defineProperty(r, "on" + t, {
          get: function () {
            return this["_on" + t];
          },
          set: function (e) {
            (this["_on" + t] &&
              (this.removeEventListener(t, this["_on" + t]),
              delete this["_on" + t]),
              e && this.addEventListener(t, (this["_on" + t] = e)));
          },
          enumerable: !0,
          configurable: !0,
        }));
    }
  }
  function Qe(e) {
    return "boolean" != typeof e
      ? new Error("Argument type: " + He(e) + ". Please use a boolean.")
      : ((Ve = e),
        e ? "adapter.js logging disabled" : "adapter.js logging enabled");
  }
  function Ke(e) {
    return "boolean" != typeof e
      ? new Error("Argument type: " + He(e) + ". Please use a boolean.")
      : ((Ze = !e),
        "adapter.js deprecation warnings " + (e ? "disabled" : "enabled"));
  }
  function qe() {
    if (
      "object" ===
      (("undefined" === typeof window ? "undefined" : (0, l.Z)(window)) > "u"
        ? "undefined"
        : He(window))
    ) {
      if (Ve) return;
      ("undefined" === typeof y ? "undefined" : (0, l.Z)(y)) < "u" &&
        "function" == typeof y.log &&
        y.log.apply(y, arguments);
    }
  }
  function Xe(e, t) {
    Ze && y.warn(e + " is deprecated, please use " + t + " instead.");
  }
  function Ye(e) {
    var t = { browser: null, version: null };
    if ((0, l.Z)(e) > "u" || !e.navigator || !e.navigator.userAgent)
      return ((t.browser = "Not a browser."), t);
    var n = e.navigator;
    if (n.mozGetUserMedia)
      ((t.browser = "firefox"),
        (t.version = Ge(n.userAgent, /Firefox\/(\d+)\./, 1)));
    else if (
      n.webkitGetUserMedia ||
      (!1 === e.isSecureContext && e.webkitRTCPeerConnection)
    )
      ((t.browser = "chrome"),
        (t.version = Ge(n.userAgent, /Chrom(e|ium)\/(\d+)\./, 2)));
    else {
      if (!e.RTCPeerConnection || !n.userAgent.match(/AppleWebKit\/(\d+)\./))
        return ((t.browser = "Not a supported browser."), t);
      ((t.browser = "safari"),
        (t.version = Ge(n.userAgent, /AppleWebKit\/(\d+)\./, 1)),
        (t.supportsUnifiedPlan =
          e.RTCRtpTransceiver &&
          "currentDirection" in e.RTCRtpTransceiver.prototype));
    }
    return t;
  }
  function Je(e) {
    return "[object Object]" === Object.prototype.toString.call(e);
  }
  function et(e) {
    return Je(e)
      ? Object.keys(e).reduce(function (t, n) {
          var r = Je(e[n]),
            o = r ? et(e[n]) : e[n],
            a = r && !Object.keys(o).length;
          return void 0 === o || a ? t : Object.assign(t, Fe({}, n, o));
        }, {})
      : e;
  }
  function tt(e, t, n) {
    !t ||
      n.has(t.id) ||
      (n.set(t.id, t),
      Object.keys(t).forEach(function (r) {
        r.endsWith("Id")
          ? tt(e, e.get(t[r]), n)
          : r.endsWith("Ids") &&
            t[r].forEach(function (t) {
              tt(e, e.get(t), n);
            });
      }));
  }
  function nt(e, t, n) {
    var r = n ? "outbound-rtp" : "inbound-rtp",
      o = new Map();
    if (null === t) return o;
    var a = [];
    return (
      e.forEach(function (e) {
        "track" === e.type && e.trackIdentifier === t.id && a.push(e);
      }),
      a.forEach(function (t) {
        e.forEach(function (n) {
          n.type === r && n.trackId === t.id && tt(e, n, o);
        });
      }),
      o
    );
  }
  Object.defineProperty(Ne, "__esModule", { value: !0 });
  var rt = (Ne.shimGetUserMedia = ct),
    ot = it(Ue);
  function at(e) {
    if ("function" != typeof WeakMap) return null;
    var t = new WeakMap(),
      n = new WeakMap();
    return (at = function (e) {
      return e ? n : t;
    })(e);
  }
  function it(e, t) {
    if (!t && e && e.__esModule) return e;
    if (null === e || ("object" !== ut(e) && "function" != typeof e))
      return { default: e };
    var n = at(t);
    if (n && n.has(e)) return n.get(e);
    var r = {},
      o = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var a in e)
      if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
        var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
        i && (i.get || i.set) ? Object.defineProperty(r, a, i) : (r[a] = e[a]);
      }
    return ((r.default = e), n && n.set(e, r), r);
  }
  function ut(e) {
    return (
      (ut =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            }),
      ut(e)
    );
  }
  var st = ot.log;
  function ct(e, t) {
    var n = e && e.navigator;
    if (n.mediaDevices) {
      var r = function (e) {
          if ("object" !== ut(e) || e.mandatory || e.optional) return e;
          var t = {};
          return (
            Object.keys(e).forEach(function (n) {
              if ("require" !== n && "advanced" !== n && "mediaSource" !== n) {
                var r = "object" === ut(e[n]) ? e[n] : { ideal: e[n] };
                void 0 !== r.exact &&
                  "number" == typeof r.exact &&
                  (r.min = r.max = r.exact);
                var o = function (e, t) {
                  return e
                    ? e + t.charAt(0).toUpperCase() + t.slice(1)
                    : "deviceId" === t
                      ? "sourceId"
                      : t;
                };
                if (void 0 !== r.ideal) {
                  t.optional = t.optional || [];
                  var a = {};
                  "number" == typeof r.ideal
                    ? ((a[o("min", n)] = r.ideal),
                      t.optional.push(a),
                      (a = {}),
                      (a[o("max", n)] = r.ideal),
                      t.optional.push(a))
                    : ((a[o("", n)] = r.ideal), t.optional.push(a));
                }
                void 0 !== r.exact && "number" != typeof r.exact
                  ? ((t.mandatory = t.mandatory || {}),
                    (t.mandatory[o("", n)] = r.exact))
                  : ["min", "max"].forEach(function (e) {
                      void 0 !== r[e] &&
                        ((t.mandatory = t.mandatory || {}),
                        (t.mandatory[o(e, n)] = r[e]));
                    });
              }
            }),
            e.advanced && (t.optional = (t.optional || []).concat(e.advanced)),
            t
          );
        },
        o = function (e, o) {
          if (t.version >= 61) return o(e);
          if (
            ((e = JSON.parse(JSON.stringify(e))), e && "object" === ut(e.audio))
          ) {
            var a = function (e, t, n) {
              t in e && !(n in e) && ((e[n] = e[t]), delete e[t]);
            };
            ((e = JSON.parse(JSON.stringify(e))),
              a(e.audio, "autoGainControl", "googAutoGainControl"),
              a(e.audio, "noiseSuppression", "googNoiseSuppression"),
              (e.audio = r(e.audio)));
          }
          if (e && "object" === ut(e.video)) {
            var i = e.video.facingMode;
            i = i && ("object" === ut(i) ? i : { ideal: i });
            var u,
              s = t.version < 66;
            if (
              i &&
              ("user" === i.exact ||
                "environment" === i.exact ||
                "user" === i.ideal ||
                "environment" === i.ideal) &&
              (!n.mediaDevices.getSupportedConstraints ||
                !n.mediaDevices.getSupportedConstraints().facingMode ||
                s)
            )
              if (
                (delete e.video.facingMode,
                "environment" === i.exact || "environment" === i.ideal
                  ? (u = ["back", "rear"])
                  : ("user" === i.exact || "user" === i.ideal) &&
                    (u = ["front"]),
                u)
              )
                return n.mediaDevices.enumerateDevices().then(function (t) {
                  t = t.filter(function (e) {
                    return "videoinput" === e.kind;
                  });
                  var n = t.find(function (e) {
                    return u.some(function (t) {
                      return e.label.toLowerCase().includes(t);
                    });
                  });
                  return (
                    !n &&
                      t.length &&
                      u.includes("back") &&
                      (n = t[t.length - 1]),
                    n &&
                      (e.video.deviceId = i.exact
                        ? { exact: n.deviceId }
                        : { ideal: n.deviceId }),
                    (e.video = r(e.video)),
                    st("chrome: " + JSON.stringify(e)),
                    o(e)
                  );
                });
            e.video = r(e.video);
          }
          return (st("chrome: " + JSON.stringify(e)), o(e));
        },
        a = function (e) {
          return t.version >= 64
            ? e
            : {
                name:
                  {
                    PermissionDeniedError: "NotAllowedError",
                    PermissionDismissedError: "NotAllowedError",
                    InvalidStateError: "NotAllowedError",
                    DevicesNotFoundError: "NotFoundError",
                    ConstraintNotSatisfiedError: "OverconstrainedError",
                    TrackStartError: "NotReadableError",
                    MediaDeviceFailedDueToShutdown: "NotAllowedError",
                    MediaDeviceKillSwitchOn: "NotAllowedError",
                    TabCaptureError: "AbortError",
                    ScreenCaptureError: "AbortError",
                    DeviceCaptureError: "AbortError",
                  }[e.name] || e.name,
                message: e.message,
                constraint: e.constraint || e.constraintName,
                toString: function () {
                  return this.name + (this.message && ": ") + this.message;
                },
              };
        },
        i = function (e, t, r) {
          o(e, function (e) {
            n.webkitGetUserMedia(e, t, function (e) {
              r && r(a(e));
            });
          });
        };
      if (((n.getUserMedia = i.bind(n)), n.mediaDevices.getUserMedia)) {
        var u = n.mediaDevices.getUserMedia.bind(n.mediaDevices);
        n.mediaDevices.getUserMedia = function (e) {
          return o(e, function (e) {
            return u(e).then(
              function (t) {
                if (
                  (e.audio && !t.getAudioTracks().length) ||
                  (e.video && !t.getVideoTracks().length)
                )
                  throw (
                    t.getTracks().forEach(function (e) {
                      e.stop();
                    }),
                    new DOMException("", "NotFoundError")
                  );
                return t;
              },
              function (e) {
                return Promise.reject(a(e));
              },
            );
          });
        };
      }
    }
  }
  var lt = {};
  Object.defineProperty(lt, "__esModule", { value: !0 });
  var ft = (lt.shimGetUserMedia = mt),
    pt = ht(Ue);
  function dt(e) {
    if ("function" != typeof WeakMap) return null;
    var t = new WeakMap(),
      n = new WeakMap();
    return (dt = function (e) {
      return e ? n : t;
    })(e);
  }
  function ht(e, t) {
    if (!t && e && e.__esModule) return e;
    if (null === e || ("object" !== vt(e) && "function" != typeof e))
      return { default: e };
    var n = dt(t);
    if (n && n.has(e)) return n.get(e);
    var r = {},
      o = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var a in e)
      if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
        var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
        i && (i.get || i.set) ? Object.defineProperty(r, a, i) : (r[a] = e[a]);
      }
    return ((r.default = e), n && n.set(e, r), r);
  }
  function vt(e) {
    return (
      (vt =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            }),
      vt(e)
    );
  }
  function mt(e, t) {
    var n = e && e.navigator,
      r = e && e.MediaStreamTrack;
    if (
      ((n.getUserMedia = function (e, t, r) {
        (pt.deprecated(
          "navigator.getUserMedia",
          "navigator.mediaDevices.getUserMedia",
        ),
          n.mediaDevices.getUserMedia(e).then(t, r));
      }),
      !(
        t.version > 55 &&
        "autoGainControl" in n.mediaDevices.getSupportedConstraints()
      ))
    ) {
      var o = function (e, t, n) {
          t in e && !(n in e) && ((e[n] = e[t]), delete e[t]);
        },
        a = n.mediaDevices.getUserMedia.bind(n.mediaDevices);
      if (
        ((n.mediaDevices.getUserMedia = function (e) {
          return (
            "object" === vt(e) &&
              "object" === vt(e.audio) &&
              ((e = JSON.parse(JSON.stringify(e))),
              o(e.audio, "autoGainControl", "mozAutoGainControl"),
              o(e.audio, "noiseSuppression", "mozNoiseSuppression")),
            a(e)
          );
        }),
        r && r.prototype.getSettings)
      ) {
        var i = r.prototype.getSettings;
        r.prototype.getSettings = function () {
          var e = i.apply(this, arguments);
          return (
            o(e, "mozAutoGainControl", "autoGainControl"),
            o(e, "mozNoiseSuppression", "noiseSuppression"),
            e
          );
        };
      }
      if (r && r.prototype.applyConstraints) {
        var u = r.prototype.applyConstraints;
        r.prototype.applyConstraints = function (e) {
          return (
            "audio" === this.kind &&
              "object" === vt(e) &&
              ((e = JSON.parse(JSON.stringify(e))),
              o(e, "autoGainControl", "mozAutoGainControl"),
              o(e, "noiseSuppression", "mozNoiseSuppression")),
            u.apply(this, [e])
          );
        };
      }
    }
  }
  var gt = {};
  (Object.defineProperty(gt, "__esModule", { value: !0 }),
    (gt.shimAudioContext = Mt),
    (gt.shimCallbacksAPI = Ct),
    (gt.shimConstraints = At),
    (gt.shimCreateOfferLegacy = Rt));
  var yt = (gt.shimGetUserMedia = Pt);
  ((gt.shimLocalStreamsAPI = Tt),
    (gt.shimRTCIceServerUrls = St),
    (gt.shimRemoteStreamsAPI = Ot),
    (gt.shimTrackEventTransceiver = kt));
  var bt = _t(Ue);
  function wt(e) {
    if ("function" != typeof WeakMap) return null;
    var t = new WeakMap(),
      n = new WeakMap();
    return (wt = function (e) {
      return e ? n : t;
    })(e);
  }
  function _t(e, t) {
    if (!t && e && e.__esModule) return e;
    if (null === e || ("object" !== Et(e) && "function" != typeof e))
      return { default: e };
    var n = wt(t);
    if (n && n.has(e)) return n.get(e);
    var r = {},
      o = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var a in e)
      if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
        var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
        i && (i.get || i.set) ? Object.defineProperty(r, a, i) : (r[a] = e[a]);
      }
    return ((r.default = e), n && n.set(e, r), r);
  }
  function Et(e) {
    return (
      (Et =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            }),
      Et(e)
    );
  }
  function Tt(e) {
    if ("object" === Et(e) && e.RTCPeerConnection) {
      if (
        ("getLocalStreams" in e.RTCPeerConnection.prototype ||
          (e.RTCPeerConnection.prototype.getLocalStreams = function () {
            return (
              this._localStreams || (this._localStreams = []),
              this._localStreams
            );
          }),
        !("addStream" in e.RTCPeerConnection.prototype))
      ) {
        var t = e.RTCPeerConnection.prototype.addTrack;
        ((e.RTCPeerConnection.prototype.addStream = function (e) {
          var n = this;
          (this._localStreams || (this._localStreams = []),
            this._localStreams.includes(e) || this._localStreams.push(e),
            e.getAudioTracks().forEach(function (r) {
              return t.call(n, r, e);
            }),
            e.getVideoTracks().forEach(function (r) {
              return t.call(n, r, e);
            }));
        }),
          (e.RTCPeerConnection.prototype.addTrack = function (e) {
            for (
              var n = this,
                r = arguments.length,
                o = new Array(r > 1 ? r - 1 : 0),
                a = 1;
              a < r;
              a++
            )
              o[a - 1] = arguments[a];
            return (
              o &&
                o.forEach(function (e) {
                  n._localStreams
                    ? n._localStreams.includes(e) || n._localStreams.push(e)
                    : (n._localStreams = [e]);
                }),
              t.apply(this, arguments)
            );
          }));
      }
      "removeStream" in e.RTCPeerConnection.prototype ||
        (e.RTCPeerConnection.prototype.removeStream = function (e) {
          var t = this;
          this._localStreams || (this._localStreams = []);
          var n = this._localStreams.indexOf(e);
          if (-1 !== n) {
            this._localStreams.splice(n, 1);
            var r = e.getTracks();
            this.getSenders().forEach(function (e) {
              r.includes(e.track) && t.removeTrack(e);
            });
          }
        });
    }
  }
  function Ot(e) {
    if (
      "object" === Et(e) &&
      e.RTCPeerConnection &&
      ("getRemoteStreams" in e.RTCPeerConnection.prototype ||
        (e.RTCPeerConnection.prototype.getRemoteStreams = function () {
          return this._remoteStreams ? this._remoteStreams : [];
        }),
      !("onaddstream" in e.RTCPeerConnection.prototype))
    ) {
      Object.defineProperty(e.RTCPeerConnection.prototype, "onaddstream", {
        get: function () {
          return this._onaddstream;
        },
        set: function (e) {
          var t = this;
          (this._onaddstream &&
            (this.removeEventListener("addstream", this._onaddstream),
            this.removeEventListener("track", this._onaddstreampoly)),
            this.addEventListener("addstream", (this._onaddstream = e)),
            this.addEventListener(
              "track",
              (this._onaddstreampoly = function (e) {
                e.streams.forEach(function (e) {
                  if (
                    (t._remoteStreams || (t._remoteStreams = []),
                    !t._remoteStreams.includes(e))
                  ) {
                    t._remoteStreams.push(e);
                    var n = new Event("addstream");
                    ((n.stream = e), t.dispatchEvent(n));
                  }
                });
              }),
            ));
        },
      });
      var t = e.RTCPeerConnection.prototype.setRemoteDescription;
      e.RTCPeerConnection.prototype.setRemoteDescription = function () {
        var e = this;
        return (
          this._onaddstreampoly ||
            this.addEventListener(
              "track",
              (this._onaddstreampoly = function (t) {
                t.streams.forEach(function (t) {
                  if (
                    (e._remoteStreams || (e._remoteStreams = []),
                    !(e._remoteStreams.indexOf(t) >= 0))
                  ) {
                    e._remoteStreams.push(t);
                    var n = new Event("addstream");
                    ((n.stream = t), e.dispatchEvent(n));
                  }
                });
              }),
            ),
          t.apply(e, arguments)
        );
      };
    }
  }
  function Ct(e) {
    if ("object" === Et(e) && e.RTCPeerConnection) {
      var t = e.RTCPeerConnection.prototype,
        n = t.createOffer,
        r = t.createAnswer,
        o = t.setLocalDescription,
        a = t.setRemoteDescription,
        i = t.addIceCandidate;
      ((t.createOffer = function (e, t) {
        var r = arguments.length >= 2 ? arguments[2] : arguments[0],
          o = n.apply(this, [r]);
        return t ? (o.then(e, t), Promise.resolve()) : o;
      }),
        (t.createAnswer = function (e, t) {
          var n = arguments.length >= 2 ? arguments[2] : arguments[0],
            o = r.apply(this, [n]);
          return t ? (o.then(e, t), Promise.resolve()) : o;
        }));
      var u = function (e, t, n) {
        var r = o.apply(this, [e]);
        return n ? (r.then(t, n), Promise.resolve()) : r;
      };
      ((t.setLocalDescription = u),
        (u = function (e, t, n) {
          var r = a.apply(this, [e]);
          return n ? (r.then(t, n), Promise.resolve()) : r;
        }),
        (t.setRemoteDescription = u),
        (u = function (e, t, n) {
          var r = i.apply(this, [e]);
          return n ? (r.then(t, n), Promise.resolve()) : r;
        }),
        (t.addIceCandidate = u));
    }
  }
  function Pt(e) {
    var t = e && e.navigator;
    if (t.mediaDevices && t.mediaDevices.getUserMedia) {
      var n = t.mediaDevices,
        r = n.getUserMedia.bind(n);
      t.mediaDevices.getUserMedia = function (e) {
        return r(At(e));
      };
    }
    !t.getUserMedia &&
      t.mediaDevices &&
      t.mediaDevices.getUserMedia &&
      (t.getUserMedia = function (e, n, r) {
        t.mediaDevices.getUserMedia(e).then(n, r);
      }.bind(t));
  }
  function At(e) {
    return e && void 0 !== e.video
      ? Object.assign({}, e, { video: bt.compactObject(e.video) })
      : e;
  }
  function St(e) {
    if (e.RTCPeerConnection) {
      var t = e.RTCPeerConnection;
      ((e.RTCPeerConnection = function (e, n) {
        if (e && e.iceServers) {
          for (var r = [], o = 0; o < e.iceServers.length; o++) {
            var a = e.iceServers[o];
            void 0 === a.urls && a.url
              ? (bt.deprecated("RTCIceServer.url", "RTCIceServer.urls"),
                (a = JSON.parse(JSON.stringify(a))),
                (a.urls = a.url),
                delete a.url,
                r.push(a))
              : r.push(e.iceServers[o]);
          }
          e.iceServers = r;
        }
        return new t(e, n);
      }),
        (e.RTCPeerConnection.prototype = t.prototype),
        "generateCertificate" in t &&
          Object.defineProperty(e.RTCPeerConnection, "generateCertificate", {
            get: function () {
              return t.generateCertificate;
            },
          }));
    }
  }
  function kt(e) {
    "object" === Et(e) &&
      e.RTCTrackEvent &&
      "receiver" in e.RTCTrackEvent.prototype &&
      !("transceiver" in e.RTCTrackEvent.prototype) &&
      Object.defineProperty(e.RTCTrackEvent.prototype, "transceiver", {
        get: function () {
          return { receiver: this.receiver };
        },
      });
  }
  function Rt(e) {
    var t = e.RTCPeerConnection.prototype.createOffer;
    e.RTCPeerConnection.prototype.createOffer = function (e) {
      if (e) {
        (0, l.Z)(e.offerToReceiveAudio) < "u" &&
          (e.offerToReceiveAudio = !!e.offerToReceiveAudio);
        var n = this.getTransceivers().find(function (e) {
          return "audio" === e.receiver.track.kind;
        });
        (!1 === e.offerToReceiveAudio && n
          ? "sendrecv" === n.direction
            ? n.setDirection
              ? n.setDirection("sendonly")
              : (n.direction = "sendonly")
            : "recvonly" === n.direction &&
              (n.setDirection
                ? n.setDirection("inactive")
                : (n.direction = "inactive"))
          : !0 === e.offerToReceiveAudio &&
            !n &&
            this.addTransceiver("audio", { direction: "recvonly" }),
          (0, l.Z)(e.offerToReceiveVideo) < "u" &&
            (e.offerToReceiveVideo = !!e.offerToReceiveVideo));
        var r = this.getTransceivers().find(function (e) {
          return "video" === e.receiver.track.kind;
        });
        !1 === e.offerToReceiveVideo && r
          ? "sendrecv" === r.direction
            ? r.setDirection
              ? r.setDirection("sendonly")
              : (r.direction = "sendonly")
            : "recvonly" === r.direction &&
              (r.setDirection
                ? r.setDirection("inactive")
                : (r.direction = "inactive"))
          : !0 === e.offerToReceiveVideo &&
            !r &&
            this.addTransceiver("video", { direction: "recvonly" });
      }
      return t.apply(this, arguments);
    };
  }
  function Mt(e) {
    "object" !== Et(e) ||
      e.AudioContext ||
      (e.AudioContext = e.webkitAudioContext);
  }
  var Lt = function (e) {
    var t,
      n = !1;
    return function () {
      for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++)
        o[a] = arguments[a];
      return (n || ((t = e(o)), (n = !0)), t);
    };
  };
  function xt(e, t) {
    if (!1 === e) throw new Error(null != t ? t : "assertion failure");
  }
  function Dt(e) {
    throw new Error("this code should be unreachable");
  }
  var It = Lt(function () {
      var e = $e(window);
      switch (e.browser) {
        case "chrome":
          rt(window, e);
          break;
        case "firefox":
          ft(window, e);
          break;
        case "safari":
          yt(window, e);
          break;
        default:
          throw new Le();
      }
    }),
    jt = Promise.resolve({ type: "stop", data: {} });
  function Nt(e, t, n) {
    return Ut.apply(this, arguments);
  }
  function Ut() {
    return (
      (Ut = (0, d.Z)(
        (0, r.Z)().mark(function e(t, n, o) {
          var a, i, u, s, c, l, f, p, d;
          return (0, r.Z)().wrap(function (e) {
            while (1)
              switch ((e.prev = e.next)) {
                case 0:
                  if (
                    (y.debug(
                      "[vue-qrcode-reader] starting camera with constraints: ",
                      JSON.stringify(n),
                    ),
                    !0 === window.isSecureContext)
                  ) {
                    e.next = 2;
                    break;
                  }
                  throw new xe();
                case 2:
                  if (
                    void 0 !==
                    (null ==
                    (a = null == navigator ? void 0 : navigator.mediaDevices)
                      ? void 0
                      : a.getUserMedia)
                  ) {
                    e.next = 4;
                    break;
                  }
                  throw new Le();
                case 4:
                  return (
                    It(),
                    y.debug("[vue-qrcode-reader] calling getUserMedia"),
                    (e.next = 7),
                    navigator.mediaDevices.getUserMedia({ audio: !1, video: n })
                  );
                case 7:
                  return (
                    (s = e.sent),
                    void 0 !== t.srcObject
                      ? (t.srcObject = s)
                      : void 0 !== t.mozSrcObject
                        ? (t.mozSrcObject = s)
                        : window.URL.createObjectURL
                          ? (t.src = window.URL.createObjectURL(s))
                          : window.webkitURL
                            ? (t.src = window.webkitURL.createObjectURL(s))
                            : (t.src = s.id),
                    t.play(),
                    y.debug(
                      "[vue-qrcode-reader] waiting for video element to load",
                    ),
                    (e.next = 13),
                    Promise.race([
                      Re(t, "loadeddata"),
                      Me(3e3).then(function () {
                        throw new De();
                      }),
                    ])
                  );
                case 13:
                  return (
                    y.debug("[vue-qrcode-reader] video element loaded"),
                    (e.next = 16),
                    Me(500)
                  );
                case 16:
                  if (
                    ((c = s.getVideoTracks()),
                    (l = (0, h.Z)(c, 1)),
                    (f = l[0]),
                    (p =
                      null !=
                      (u =
                        null == (i = null == f ? void 0 : f.getCapabilities)
                          ? void 0
                          : i.call(f))
                        ? u
                        : {}),
                    (d = !1),
                    (e.t0 = o && p.torch),
                    !e.t0)
                  ) {
                    e.next = 23;
                    break;
                  }
                  return (
                    (e.next = 22),
                    f.applyConstraints({ advanced: [{ torch: !0 }] })
                  );
                case 22:
                  d = !0;
                case 23:
                  return (
                    y.debug("[vue-qrcode-reader] camera ready"),
                    e.abrupt("return", {
                      type: "start",
                      data: {
                        videoEl: t,
                        stream: s,
                        capabilities: p,
                        constraints: n,
                        isTorchOn: d,
                      },
                    })
                  );
                case 25:
                case "end":
                  return e.stop();
              }
          }, e);
        }),
      )),
      Ut.apply(this, arguments)
    );
  }
  function $t(e, t) {
    return Ft.apply(this, arguments);
  }
  function Ft() {
    return (
      (Ft = (0, d.Z)(
        (0, r.Z)().mark(function e(t, n) {
          var o, a, i, u, s;
          return (0, r.Z)().wrap(function (e) {
            while (1)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (o = n.constraints),
                    (a = n.torch),
                    (i = n.restart),
                    (u = void 0 !== i && i),
                    (jt = jt
                      .then(function (e) {
                        if ("start" === e.type) {
                          var n = e.data,
                            r = n.videoEl,
                            i = n.stream,
                            s = n.constraints,
                            c = n.isTorchOn;
                          return u || t !== r || o !== s || a !== c
                            ? Bt(r, i, c).then(function () {
                                return Nt(t, o, a);
                              })
                            : e;
                        }
                        if ("stop" === e.type || "failed" === e.type)
                          return Nt(t, o, a);
                        Dt();
                      })
                      .catch(function (e) {
                        return (
                          y.debug(
                            '[vue-qrcode-reader] starting camera failed with "'.concat(
                              e,
                              '"',
                            ),
                          ),
                          { type: "failed", error: e }
                        );
                      })),
                    (e.next = 4),
                    jt
                  );
                case 4:
                  if (((s = e.sent), "stop" !== s.type)) {
                    e.next = 7;
                    break;
                  }
                  throw new Error(
                    "Something went wrong with the camera task queue (start task).",
                  );
                case 7:
                  if ("failed" !== s.type) {
                    e.next = 9;
                    break;
                  }
                  throw s.error;
                case 9:
                  if ("start" !== s.type) {
                    e.next = 11;
                    break;
                  }
                  return e.abrupt("return", s.data.capabilities);
                case 11:
                  Dt();
                case 12:
                case "end":
                  return e.stop();
              }
          }, e);
        }),
      )),
      Ft.apply(this, arguments)
    );
  }
  function Bt(e, t, n) {
    return Wt.apply(this, arguments);
  }
  function Wt() {
    return (
      (Wt = (0, d.Z)(
        (0, r.Z)().mark(function e(t, n, o) {
          var a, i, u;
          return (0, r.Z)().wrap(
            function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      y.debug("[vue-qrcode-reader] stopping camera"),
                      (t.src = ""),
                      (t.srcObject = null),
                      t.load(),
                      (e.next = 6),
                      Re(t, "error")
                    );
                  case 6:
                    ((a = (0, v.Z)(n.getTracks())), (e.prev = 7), a.s());
                  case 9:
                    if ((i = a.n()).done) {
                      e.next = 19;
                      break;
                    }
                    if (((u = i.value), (e.t0 = null != o), e.t0)) {
                      e.next = 15;
                      break;
                    }
                    return (
                      (e.next = 15),
                      u.applyConstraints({ advanced: [{ torch: !1 }] })
                    );
                  case 15:
                    (n.removeTrack(u), u.stop());
                  case 17:
                    e.next = 9;
                    break;
                  case 19:
                    e.next = 24;
                    break;
                  case 21:
                    ((e.prev = 21), (e.t1 = e["catch"](7)), a.e(e.t1));
                  case 24:
                    return ((e.prev = 24), a.f(), e.finish(24));
                  case 27:
                    return e.abrupt("return", { type: "stop", data: {} });
                  case 28:
                  case "end":
                    return e.stop();
                }
            },
            e,
            null,
            [[7, 21, 24, 27]],
          );
        }),
      )),
      Wt.apply(this, arguments)
    );
  }
  function Ht() {
    return Vt.apply(this, arguments);
  }
  function Vt() {
    return (
      (Vt = (0, d.Z)(
        (0, r.Z)().mark(function e() {
          return (0, r.Z)().wrap(function (e) {
            while (1)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (jt = jt.then(function (e) {
                      if ("stop" === e.type || "failed" === e.type) return e;
                      var t = e.data,
                        n = t.videoEl,
                        r = t.stream,
                        o = t.isTorchOn;
                      return Bt(n, r, o);
                    })),
                    (e.next = 3),
                    jt
                  );
                case 3:
                  if (((e.t0 = e.sent.type), "start" !== e.t0)) {
                    e.next = 6;
                    break;
                  }
                  throw new Error(
                    "Something went wrong with the camera task queue (stop task).",
                  );
                case 6:
                case "end":
                  return e.stop();
              }
          }, e);
        }),
      )),
      Vt.apply(this, arguments)
    );
  }
  var Zt = (0, m.defineComponent)({
    __name: "QrcodeStream",
    props: {
      constraints: {
        type: Object,
        default: function () {
          return { facingMode: "environment" };
        },
      },
      formats: {
        type: Array,
        default: function () {
          return ["qr_code"];
        },
      },
      paused: { type: Boolean, default: !1 },
      torch: { type: Boolean, default: !1 },
      track: { type: Function },
    },
    emits: ["detect", "camera-on", "camera-off", "error"],
    setup: function (e, t) {
      var n = t.emit,
        o = e,
        a = n,
        i = (0, m.ref)(o.constraints),
        u = (0, m.ref)(o.formats);
      ((0, m.watch)(
        function () {
          return o.constraints;
        },
        function (e, t) {
          JSON.stringify(e) !== JSON.stringify(t) && (i.value = e);
        },
        { deep: !0 },
      ),
        (0, m.watch)(
          function () {
            return o.formats;
          },
          function (e, t) {
            JSON.stringify(e) !== JSON.stringify(t) && (u.value = e);
          },
          { deep: !0 },
        ));
      var s = (0, m.ref)(),
        c = (0, m.ref)(),
        l = (0, m.ref)(),
        f = (0, m.ref)(!1),
        h = (0, m.ref)(!1);
      ((0, m.onMounted)(function () {
        h.value = !0;
      }),
        (0, m.onUnmounted)(function () {
          Ht();
        }));
      var v = (0, m.computed)(function () {
        return {
          torch: o.torch,
          constraints: i.value,
          shouldStream: h.value && !o.paused,
        };
      });
      ((0, m.watch)(
        v,
        (function () {
          var e = (0, d.Z)(
            (0, r.Z)().mark(function e(t) {
              var n, o, i, u;
              return (0, r.Z)().wrap(
                function (e) {
                  while (1)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          ((n = l.value),
                          xt(
                            void 0 !== n,
                            "cameraSettings watcher should never be triggered when component is not mounted. Thus video element should always be defined.",
                          ),
                          (o = s.value),
                          xt(
                            void 0 !== o,
                            "cameraSettings watcher should never be triggered when component is not mounted. Thus canvas should always be defined.",
                          ),
                          (i = o.getContext("2d")),
                          xt(
                            null !== i,
                            "if cavnas is defined, canvas 2d context should also be non-null",
                          ),
                          !t.shouldStream)
                        ) {
                          e.next = 24;
                          break;
                        }
                        return (
                          Ht(),
                          (f.value = !1),
                          (e.prev = 7),
                          (e.next = 10),
                          $t(n, t)
                        );
                      case 10:
                        if (((u = e.sent), !h.value)) {
                          e.next = 15;
                          break;
                        }
                        ((f.value = !0), a("camera-on", u), (e.next = 17));
                        break;
                      case 15:
                        return ((e.next = 17), Ht());
                      case 17:
                        e.next = 22;
                        break;
                      case 19:
                        ((e.prev = 19),
                          (e.t0 = e["catch"](7)),
                          a("error", e.t0));
                      case 22:
                        e.next = 25;
                        break;
                      case 24:
                        ((o.width = n.videoWidth),
                          (o.height = n.videoHeight),
                          i.drawImage(n, 0, 0, n.videoWidth, n.videoHeight),
                          Ht(),
                          (f.value = !1),
                          a("camera-off"));
                      case 25:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[7, 19]],
              );
            }),
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        { deep: !0 },
      ),
        (0, m.watch)(u, function (e) {
          h.value && Ie(e);
        }));
      var g = (0, m.computed)(function () {
        return v.value.shouldStream && f.value;
      });
      (0, m.watch)(g, function (e) {
        if (e) {
          (xt(
            void 0 !== s.value,
            "shouldScan watcher should only be triggered when component is mounted. Thus pause frame canvas is defined",
          ),
            y(s.value),
            xt(
              void 0 !== c.value,
              "shouldScan watcher should only be triggered when component is mounted. Thus tracking canvas is defined",
            ),
            y(c.value));
          var t = function () {
            return void 0 === o.track ? 500 : 40;
          };
          (xt(
            void 0 !== l.value,
            "shouldScan watcher should only be triggered when component is mounted. Thus video element is defined",
          ),
            je(l.value, {
              detectHandler: function (e) {
                return a("detect", e);
              },
              formats: u.value,
              locateHandler: b,
              minDelay: t(),
            }));
        }
      });
      var y = function (e) {
          var t = e.getContext("2d");
          (xt(null !== t, "canvas 2d context should always be non-null"),
            t.clearRect(0, 0, e.width, e.height));
        },
        b = function (e) {
          var t = c.value;
          xt(
            void 0 !== t,
            "onLocate handler should only be called when component is mounted. Thus tracking canvas is always defined.",
          );
          var n = l.value;
          if (
            (xt(
              void 0 !== n,
              "onLocate handler should only be called when component is mounted. Thus video element is always defined.",
            ),
            0 === e.length || void 0 === o.track)
          )
            y(t);
          else {
            var r = n.offsetWidth,
              a = n.offsetHeight,
              i = n.videoWidth,
              u = n.videoHeight,
              s = Math.max(r / i, a / u),
              f = i * s,
              d = u * s,
              h = f / i,
              v = d / u,
              m = (r - f) / 2,
              g = (a - d) / 2,
              b = function (e) {
                var t = e.x,
                  n = e.y;
                return { x: Math.floor(t * h), y: Math.floor(n * v) };
              },
              w = function (e) {
                var t = e.x,
                  n = e.y;
                return { x: Math.floor(t + m), y: Math.floor(n + g) };
              },
              _ = e.map(function (e) {
                var t = e.boundingBox,
                  n = e.cornerPoints,
                  r = w(b({ x: t.x, y: t.y })),
                  o = r.x,
                  a = r.y,
                  i = b({ x: t.width, y: t.height }),
                  u = i.x,
                  s = i.y;
                return (0, p.Z)(
                  (0, p.Z)({}, e),
                  {},
                  {
                    cornerPoints: n.map(function (e) {
                      return w(b(e));
                    }),
                    boundingBox: DOMRectReadOnly.fromRect({
                      x: o,
                      y: a,
                      width: u,
                      height: s,
                    }),
                  },
                );
              });
            ((t.width = n.offsetWidth), (t.height = n.offsetHeight));
            var E = t.getContext("2d");
            o.track(_, E);
          }
        },
        w = {
          width: "100%",
          height: "100%",
          position: "relative",
          "z-index": "0",
        },
        _ = {
          width: "100%",
          height: "100%",
          position: "absolute",
          top: "0",
          left: "0",
        },
        E = { width: "100%", height: "100%", "object-fit": "cover" },
        T = (0, m.computed)(function () {
          return g.value
            ? E
            : (0, p.Z)(
                (0, p.Z)({}, E),
                {},
                { visibility: "hidden", position: "absolute" },
              );
        });
      return function (e, t) {
        return (
          (0, m.openBlock)(),
          (0, m.createElementBlock)("div", { style: w }, [
            (0, m.createElementVNode)(
              "video",
              {
                ref_key: "videoRef",
                ref: l,
                style: (0, m.normalizeStyle)(T.value),
                autoplay: "",
                muted: "",
                playsinline: "",
              },
              null,
              4,
            ),
            (0, m.withDirectives)(
              (0, m.createElementVNode)(
                "canvas",
                {
                  id: "qrcode-stream-pause-frame",
                  ref_key: "pauseFrameRef",
                  ref: s,
                  style: E,
                },
                null,
                512,
              ),
              [[m.vShow, !g.value]],
            ),
            (0, m.createElementVNode)(
              "canvas",
              {
                id: "qrcode-stream-tracking-layer",
                ref_key: "trackingLayerRef",
                ref: c,
                style: _,
              },
              null,
              512,
            ),
            (0, m.createElementVNode)("div", { style: _ }, [
              (0, m.renderSlot)(e.$slots, "default"),
            ]),
          ])
        );
      };
    },
  });
};
