// Source: decompiled/web-modules-acorn/chunk-vendors-aacc2dbb.deb34d08/34668.js
// Webpack module id: 34668
const __webpack_module_34668 = function (t, e, r) {
  "use strict";
  (r.r(e),
    r.d(e, {
      AElement: function () {
        return Yt;
      },
      AnimateColorElement: function () {
        return Rt;
      },
      AnimateElement: function () {
        return Bt;
      },
      AnimateTransformElement: function () {
        return zt;
      },
      BoundingBox: function () {
        return dt;
      },
      CB1: function () {
        return j;
      },
      CB2: function () {
        return I;
      },
      CB3: function () {
        return D;
      },
      CB4: function () {
        return B;
      },
      Canvg: function () {
        return Ce;
      },
      CircleElement: function () {
        return Ct;
      },
      ClipPathElement: function () {
        return ue;
      },
      DefsElement: function () {
        return Lt;
      },
      DescElement: function () {
        return de;
      },
      Document: function () {
        return Se;
      },
      Element: function () {
        return ut;
      },
      EllipseElement: function () {
        return Ot;
      },
      FeColorMatrixElement: function () {
        return se;
      },
      FeCompositeElement: function () {
        return fe;
      },
      FeDropShadowElement: function () {
        return le;
      },
      FeGaussianBlurElement: function () {
        return ge;
      },
      FeMorphologyElement: function () {
        return ce;
      },
      FilterElement: function () {
        return he;
      },
      Font: function () {
        return pt;
      },
      FontElement: function () {
        return Ft;
      },
      FontFaceElement: function () {
        return Zt;
      },
      GElement: function () {
        return Nt;
      },
      GlyphElement: function () {
        return xt;
      },
      GradientElement: function () {
        return _t;
      },
      ImageElement: function () {
        return $t;
      },
      LineElement: function () {
        return Et;
      },
      LinearGradientElement: function () {
        return jt;
      },
      MarkerElement: function () {
        return kt;
      },
      MaskElement: function () {
        return ae;
      },
      Matrix: function () {
        return et;
      },
      MissingGlyphElement: function () {
        return Xt;
      },
      Mouse: function () {
        return Y;
      },
      PSEUDO_ZERO: function () {
        return k;
      },
      Parser: function () {
        return Q;
      },
      PathElement: function () {
        return mt;
      },
      PathParser: function () {
        return yt;
      },
      PatternElement: function () {
        return Vt;
      },
      Point: function () {
        return U;
      },
      PolygonElement: function () {
        return Mt;
      },
      PolylineElement: function () {
        return Tt;
      },
      Property: function () {
        return Z;
      },
      QB1: function () {
        return R;
      },
      QB2: function () {
        return z;
      },
      QB3: function () {
        return F;
      },
      RadialGradientElement: function () {
        return It;
      },
      RectElement: function () {
        return At;
      },
      RenderedElement: function () {
        return vt;
      },
      Rotate: function () {
        return K;
      },
      SVGElement: function () {
        return Pt;
      },
      SVGFontLoader: function () {
        return Jt;
      },
      Scale: function () {
        return tt;
      },
      Screen: function () {
        return W;
      },
      Skew: function () {
        return rt;
      },
      SkewX: function () {
        return it;
      },
      SkewY: function () {
        return nt;
      },
      StopElement: function () {
        return Dt;
      },
      StyleElement: function () {
        return Kt;
      },
      SymbolElement: function () {
        return Qt;
      },
      TRefElement: function () {
        return Ut;
      },
      TSpanElement: function () {
        return wt;
      },
      TextElement: function () {
        return bt;
      },
      TextPathElement: function () {
        return Wt;
      },
      TitleElement: function () {
        return pe;
      },
      Transform: function () {
        return ot;
      },
      Translate: function () {
        return J;
      },
      UnknownElement: function () {
        return ht;
      },
      UseElement: function () {
        return te;
      },
      ViewPort: function () {
        return X;
      },
      compressSpaces: function () {
        return p;
      },
      default: function () {
        return Ce;
      },
      getSelectorSpecificity: function () {
        return V;
      },
      normalizeAttributeName: function () {
        return x;
      },
      normalizeColor: function () {
        return w;
      },
      parseExternalUrl: function () {
        return b;
      },
      presets: function () {
        return g;
      },
      toNumbers: function () {
        return v;
      },
      trimLeft: function () {
        return d;
      },
      trimRight: function () {
        return y;
      },
      vectorMagnitude: function () {
        return L;
      },
      vectorsAngle: function () {
        return _;
      },
      vectorsRatio: function () {
        return N;
      },
    }));
  r(88674);
  var i = r(48534),
    n = (r(4723), r(15306), r(23157), r(66992), r(33948), r(82482)),
    s = (r(85827), r(27852), r(23123), r(54087)),
    a = (r(73210), r(26131)),
    o = (r(82772), r(32023), r(65069), r(35851)),
    u = (r(39714), r(3663)),
    h = r(34155),
    l = r(25108);
  function c() {
    var { DOMParser: t } =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      e = {
        window: null,
        ignoreAnimation: !0,
        ignoreMouse: !0,
        DOMParser: t,
        createCanvas(t, e) {
          return new OffscreenCanvas(t, e);
        },
        createImage(t) {
          return (0, i.Z)(function* () {
            var e = yield fetch(t),
              r = yield e.blob(),
              i = yield createImageBitmap(r);
            return i;
          })();
        },
      };
    return (
      ("undefined" === typeof DOMParser && "undefined" !== typeof t) ||
        Reflect.deleteProperty(e, "DOMParser"),
      e
    );
  }
  function f(t) {
    var { DOMParser: e, canvas: r, fetch: i } = t;
    return {
      window: null,
      ignoreAnimation: !0,
      ignoreMouse: !0,
      DOMParser: e,
      fetch: i,
      createCanvas: r.createCanvas,
      createImage: r.loadImage,
    };
  }
  var g = Object.freeze({ __proto__: null, offscreen: c, node: f });
  function p(t) {
    return t.replace(/(?!\u3000)\s+/gm, " ");
  }
  function d(t) {
    return t.replace(/^[\n \t]+/, "");
  }
  function y(t) {
    return t.replace(/[\n \t]+$/, "");
  }
  function v(t) {
    var e =
      (t || "").match(/-?(\d+(?:\.\d*(?:[eE][+-]?\d+)?)?|\.\d+)(?=\D|$)/gm) ||
      [];
    return e.map(parseFloat);
  }
  var m = /^[A-Z-]+$/;
  function x(t) {
    return m.test(t) ? t.toLowerCase() : t;
  }
  function b(t) {
    var e = /url\(('([^']+)'|"([^"]+)"|([^'")]+))\)/.exec(t) || [];
    return e[2] || e[3] || e[4];
  }
  function w(t) {
    if (!t.startsWith("rgb")) return t;
    var e = 3,
      r = t.replace(/\d+(\.\d+)?/g, (t, r) =>
        e-- && r ? String(Math.round(parseFloat(t))) : t,
      );
    return r;
  }
  var S = /(\[[^\]]+\])/g,
    P = /(#[^\s+>~.[:]+)/g,
    A = /(\.[^\s+>~.[:]+)/g,
    C = /(::[^\s+>~.[:]+|:first-line|:first-letter|:before|:after)/gi,
    O = /(:[\w-]+\([^)]*\))/gi,
    E = /(:[^\s+>~.[:]+)/g,
    T = /([^\s+>~.[:]+)/g;
  function M(t, e) {
    var r = e.exec(t);
    return r ? [t.replace(e, " "), r.length] : [t, 0];
  }
  function V(t) {
    var e = [0, 0, 0],
      r = t.replace(/:not\(([^)]*)\)/g, "     $1 ").replace(/{[\s\S]*/gm, " "),
      i = 0;
    return (
      ([r, i] = M(r, S)),
      (e[1] += i),
      ([r, i] = M(r, P)),
      (e[0] += i),
      ([r, i] = M(r, A)),
      (e[1] += i),
      ([r, i] = M(r, C)),
      (e[2] += i),
      ([r, i] = M(r, O)),
      (e[1] += i),
      ([r, i] = M(r, E)),
      (e[1] += i),
      (r = r.replace(/[*\s+>~]/g, " ").replace(/[#.]/g, " ")),
      ([r, i] = M(r, T)),
      (e[2] += i),
      e.join("")
    );
  }
  var k = 1e-8;
  function L(t) {
    return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2));
  }
  function N(t, e) {
    return (t[0] * e[0] + t[1] * e[1]) / (L(t) * L(e));
  }
  function _(t, e) {
    return (t[0] * e[1] < t[1] * e[0] ? -1 : 1) * Math.acos(N(t, e));
  }
  function j(t) {
    return t * t * t;
  }
  function I(t) {
    return 3 * t * t * (1 - t);
  }
  function D(t) {
    return 3 * t * (1 - t) * (1 - t);
  }
  function B(t) {
    return (1 - t) * (1 - t) * (1 - t);
  }
  function R(t) {
    return t * t;
  }
  function z(t) {
    return 2 * t * (1 - t);
  }
  function F(t) {
    return (1 - t) * (1 - t);
  }
  class Z {
    constructor(t, e, r) {
      ((this.document = t),
        (this.name = e),
        (this.value = r),
        (this.isNormalizedColor = !1));
    }
    static empty(t) {
      return new Z(t, "EMPTY", "");
    }
    split() {
      var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : " ",
        { document: e, name: r } = this;
      return p(this.getString())
        .trim()
        .split(t)
        .map((t) => new Z(e, r, t));
    }
    hasValue(t) {
      var { value: e } = this;
      return (
        null !== e && "" !== e && (t || 0 !== e) && "undefined" !== typeof e
      );
    }
    isString(t) {
      var { value: e } = this,
        r = "string" === typeof e;
      return r && t ? t.test(e) : r;
    }
    isUrlDefinition() {
      return this.isString(/^url\(/);
    }
    isPixels() {
      if (!this.hasValue()) return !1;
      var t = this.getString();
      switch (!0) {
        case t.endsWith("px"):
        case /^[0-9]+$/.test(t):
          return !0;
        default:
          return !1;
      }
    }
    setValue(t) {
      return ((this.value = t), this);
    }
    getValue(t) {
      return "undefined" === typeof t || this.hasValue() ? this.value : t;
    }
    getNumber(t) {
      if (!this.hasValue()) return "undefined" === typeof t ? 0 : parseFloat(t);
      var { value: e } = this,
        r = parseFloat(e);
      return (this.isString(/%$/) && (r /= 100), r);
    }
    getString(t) {
      return "undefined" === typeof t || this.hasValue()
        ? "undefined" === typeof this.value
          ? ""
          : String(this.value)
        : String(t);
    }
    getColor(t) {
      var e = this.getString(t);
      return (
        this.isNormalizedColor ||
          ((this.isNormalizedColor = !0), (e = w(e)), (this.value = e)),
        e
      );
    }
    getDpi() {
      return 96;
    }
    getRem() {
      return this.document.rootEmSize;
    }
    getEm() {
      return this.document.emSize;
    }
    getUnits() {
      return this.getString().replace(/[0-9.-]/g, "");
    }
    getPixels(t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      if (!this.hasValue()) return 0;
      var [r, i] = "boolean" === typeof t ? [void 0, t] : [t],
        { viewPort: n } = this.document.screen;
      switch (!0) {
        case this.isString(/vmin$/):
          return (
            (this.getNumber() / 100) *
            Math.min(n.computeSize("x"), n.computeSize("y"))
          );
        case this.isString(/vmax$/):
          return (
            (this.getNumber() / 100) *
            Math.max(n.computeSize("x"), n.computeSize("y"))
          );
        case this.isString(/vw$/):
          return (this.getNumber() / 100) * n.computeSize("x");
        case this.isString(/vh$/):
          return (this.getNumber() / 100) * n.computeSize("y");
        case this.isString(/rem$/):
          return this.getNumber() * this.getRem();
        case this.isString(/em$/):
          return this.getNumber() * this.getEm();
        case this.isString(/ex$/):
          return (this.getNumber() * this.getEm()) / 2;
        case this.isString(/px$/):
          return this.getNumber();
        case this.isString(/pt$/):
          return this.getNumber() * this.getDpi() * (1 / 72);
        case this.isString(/pc$/):
          return 15 * this.getNumber();
        case this.isString(/cm$/):
          return (this.getNumber() * this.getDpi()) / 2.54;
        case this.isString(/mm$/):
          return (this.getNumber() * this.getDpi()) / 25.4;
        case this.isString(/in$/):
          return this.getNumber() * this.getDpi();
        case this.isString(/%$/) && i:
          return this.getNumber() * this.getEm();
        case this.isString(/%$/):
          return this.getNumber() * n.computeSize(r);
        default:
          var s = this.getNumber();
          return e && s < 1 ? s * n.computeSize(r) : s;
      }
    }
    getMilliseconds() {
      return this.hasValue()
        ? this.isString(/ms$/)
          ? this.getNumber()
          : 1e3 * this.getNumber()
        : 0;
    }
    getRadians() {
      if (!this.hasValue()) return 0;
      switch (!0) {
        case this.isString(/deg$/):
          return this.getNumber() * (Math.PI / 180);
        case this.isString(/grad$/):
          return this.getNumber() * (Math.PI / 200);
        case this.isString(/rad$/):
          return this.getNumber();
        default:
          return this.getNumber() * (Math.PI / 180);
      }
    }
    getDefinition() {
      var t = this.getString(),
        e = /#([^)'"]+)/.exec(t);
      return (e && (e = e[1]), e || (e = t), this.document.definitions[e]);
    }
    getFillStyleDefinition(t, e) {
      var r = this.getDefinition();
      if (!r) return null;
      if ("function" === typeof r.createGradient)
        return r.createGradient(this.document.ctx, t, e);
      if ("function" === typeof r.createPattern) {
        if (r.getHrefAttribute().hasValue()) {
          var i = r.getAttribute("patternTransform");
          ((r = r.getHrefAttribute().getDefinition()),
            i.hasValue() &&
              r.getAttribute("patternTransform", !0).setValue(i.value));
        }
        return r.createPattern(this.document.ctx, t, e);
      }
      return null;
    }
    getTextBaseline() {
      return this.hasValue() ? Z.textBaselineMapping[this.getString()] : null;
    }
    addOpacity(t) {
      for (var e = this.getColor(), r = e.length, i = 0, n = 0; n < r; n++)
        if (("," === e[n] && i++, 3 === i)) break;
      if (t.hasValue() && this.isString() && 3 !== i) {
        var s = new a(e);
        s.ok && ((s.alpha = t.getNumber()), (e = s.toRGBA()));
      }
      return new Z(this.document, this.name, e);
    }
  }
  Z.textBaselineMapping = {
    baseline: "alphabetic",
    "before-edge": "top",
    "text-before-edge": "top",
    middle: "middle",
    central: "middle",
    "after-edge": "bottom",
    "text-after-edge": "bottom",
    ideographic: "ideographic",
    alphabetic: "alphabetic",
    hanging: "hanging",
    mathematical: "alphabetic",
  };
  class X {
    constructor() {
      this.viewPorts = [];
    }
    clear() {
      this.viewPorts = [];
    }
    setCurrent(t, e) {
      this.viewPorts.push({ width: t, height: e });
    }
    removeCurrent() {
      this.viewPorts.pop();
    }
    getCurrent() {
      var { viewPorts: t } = this;
      return t[t.length - 1];
    }
    get width() {
      return this.getCurrent().width;
    }
    get height() {
      return this.getCurrent().height;
    }
    computeSize(t) {
      return "number" === typeof t
        ? t
        : "x" === t
          ? this.width
          : "y" === t
            ? this.height
            : Math.sqrt(Math.pow(this.width, 2) + Math.pow(this.height, 2)) /
              Math.sqrt(2);
    }
  }
  class U {
    constructor(t, e) {
      ((this.x = t), (this.y = e));
    }
    static parse(t) {
      var e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        [r = e, i = e] = v(t);
      return new U(r, i);
    }
    static parseScale(t) {
      var e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        [r = e, i = r] = v(t);
      return new U(r, i);
    }
    static parsePath(t) {
      for (var e = v(t), r = e.length, i = [], n = 0; n < r; n += 2)
        i.push(new U(e[n], e[n + 1]));
      return i;
    }
    angleTo(t) {
      return Math.atan2(t.y - this.y, t.x - this.x);
    }
    applyTransform(t) {
      var { x: e, y: r } = this,
        i = e * t[0] + r * t[2] + t[4],
        n = e * t[1] + r * t[3] + t[5];
      ((this.x = i), (this.y = n));
    }
  }
  class Y {
    constructor(t) {
      ((this.screen = t),
        (this.working = !1),
        (this.events = []),
        (this.eventElements = []),
        (this.onClick = this.onClick.bind(this)),
        (this.onMouseMove = this.onMouseMove.bind(this)));
    }
    isWorking() {
      return this.working;
    }
    start() {
      if (!this.working) {
        var { screen: t, onClick: e, onMouseMove: r } = this,
          i = t.ctx.canvas;
        ((i.onclick = e), (i.onmousemove = r), (this.working = !0));
      }
    }
    stop() {
      if (this.working) {
        var t = this.screen.ctx.canvas;
        ((this.working = !1), (t.onclick = null), (t.onmousemove = null));
      }
    }
    hasEvents() {
      return this.working && this.events.length > 0;
    }
    runEvents() {
      if (this.working) {
        var { screen: t, events: e, eventElements: r } = this,
          { style: i } = t.ctx.canvas;
        (i && (i.cursor = ""),
          e.forEach((t, e) => {
            var { run: i } = t,
              n = r[e];
            while (n) (i(n), (n = n.parent));
          }),
          (this.events = []),
          (this.eventElements = []));
      }
    }
    checkPath(t, e) {
      if (this.working && e) {
        var { events: r, eventElements: i } = this;
        r.forEach((r, n) => {
          var { x: s, y: a } = r;
          !i[n] && e.isPointInPath && e.isPointInPath(s, a) && (i[n] = t);
        });
      }
    }
    checkBoundingBox(t, e) {
      if (this.working && e) {
        var { events: r, eventElements: i } = this;
        r.forEach((r, n) => {
          var { x: s, y: a } = r;
          !i[n] && e.isPointInBox(s, a) && (i[n] = t);
        });
      }
    }
    mapXY(t, e) {
      var { window: r, ctx: i } = this.screen,
        n = new U(t, e),
        s = i.canvas;
      while (s)
        ((n.x -= s.offsetLeft), (n.y -= s.offsetTop), (s = s.offsetParent));
      return (
        r.scrollX && (n.x += r.scrollX),
        r.scrollY && (n.y += r.scrollY),
        n
      );
    }
    onClick(t) {
      var { x: e, y: r } = this.mapXY(t.clientX, t.clientY);
      this.events.push({
        type: "onclick",
        x: e,
        y: r,
        run(t) {
          t.onClick && t.onClick();
        },
      });
    }
    onMouseMove(t) {
      var { x: e, y: r } = this.mapXY(t.clientX, t.clientY);
      this.events.push({
        type: "onmousemove",
        x: e,
        y: r,
        run(t) {
          t.onMouseMove && t.onMouseMove();
        },
      });
    }
  }
  var G = "undefined" !== typeof window ? window : null,
    H = "undefined" !== typeof fetch ? fetch.bind(void 0) : null;
  class W {
    constructor(t) {
      var { fetch: e = H, window: r = G } =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      ((this.ctx = t),
        (this.FRAMERATE = 30),
        (this.MAX_VIRTUAL_PIXELS = 3e4),
        (this.CLIENT_WIDTH = 800),
        (this.CLIENT_HEIGHT = 600),
        (this.viewPort = new X()),
        (this.mouse = new Y(this)),
        (this.animations = []),
        (this.waits = []),
        (this.frameDuration = 0),
        (this.isReadyLock = !1),
        (this.isFirstRender = !0),
        (this.intervalId = null),
        (this.window = r),
        (this.fetch = e));
    }
    wait(t) {
      this.waits.push(t);
    }
    ready() {
      return this.readyPromise ? this.readyPromise : Promise.resolve();
    }
    isReady() {
      if (this.isReadyLock) return !0;
      var t = this.waits.every((t) => t());
      return (
        t && ((this.waits = []), this.resolveReady && this.resolveReady()),
        (this.isReadyLock = t),
        t
      );
    }
    setDefaults(t) {
      ((t.strokeStyle = "rgba(0,0,0,0)"),
        (t.lineCap = "butt"),
        (t.lineJoin = "miter"),
        (t.miterLimit = 4));
    }
    setViewBox(t) {
      var {
          document: e,
          ctx: r,
          aspectRatio: i,
          width: n,
          desiredWidth: s,
          height: a,
          desiredHeight: o,
          minX: u = 0,
          minY: h = 0,
          refX: l,
          refY: c,
          clip: f = !1,
          clipX: g = 0,
          clipY: d = 0,
        } = t,
        y = p(i).replace(/^defer\s/, ""),
        [v, m] = y.split(" "),
        x = v || "xMidYMid",
        b = m || "meet",
        w = n / s,
        S = a / o,
        P = Math.min(w, S),
        A = Math.max(w, S),
        C = s,
        O = o;
      ("meet" === b && ((C *= P), (O *= P)),
        "slice" === b && ((C *= A), (O *= A)));
      var E = new Z(e, "refX", l),
        T = new Z(e, "refY", c),
        M = E.hasValue() && T.hasValue();
      if ((M && r.translate(-P * E.getPixels("x"), -P * T.getPixels("y")), f)) {
        var V = P * g,
          k = P * d;
        (r.beginPath(),
          r.moveTo(V, k),
          r.lineTo(n, k),
          r.lineTo(n, a),
          r.lineTo(V, a),
          r.closePath(),
          r.clip());
      }
      if (!M) {
        var L = "meet" === b && P === S,
          N = "slice" === b && A === S,
          _ = "meet" === b && P === w,
          j = "slice" === b && A === w;
        (x.startsWith("xMid") && (L || N) && r.translate(n / 2 - C / 2, 0),
          x.endsWith("YMid") && (_ || j) && r.translate(0, a / 2 - O / 2),
          x.startsWith("xMax") && (L || N) && r.translate(n - C, 0),
          x.endsWith("YMax") && (_ || j) && r.translate(0, a - O));
      }
      switch (!0) {
        case "none" === x:
          r.scale(w, S);
          break;
        case "meet" === b:
          r.scale(P, P);
          break;
        case "slice" === b:
          r.scale(A, A);
          break;
      }
      r.translate(-u, -h);
    }
    start(t) {
      var {
          enableRedraw: e = !1,
          ignoreMouse: r = !1,
          ignoreAnimation: i = !1,
          ignoreDimensions: n = !1,
          ignoreClear: a = !1,
          forceRedraw: o,
          scaleWidth: u,
          scaleHeight: h,
          offsetX: l,
          offsetY: c,
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { FRAMERATE: f, mouse: g } = this,
        p = 1e3 / f;
      if (
        ((this.frameDuration = p),
        (this.readyPromise = new Promise((t) => {
          this.resolveReady = t;
        })),
        this.isReady() && this.render(t, n, a, u, h, l, c),
        e)
      ) {
        var d = Date.now(),
          y = d,
          v = 0,
          m = () => {
            ((d = Date.now()),
              (v = d - y),
              v >= p &&
                ((y = d - (v % p)),
                this.shouldUpdate(i, o) &&
                  (this.render(t, n, a, u, h, l, c), g.runEvents())),
              (this.intervalId = s(m)));
          };
        (r || g.start(), (this.intervalId = s(m)));
      }
    }
    stop() {
      (this.intervalId && (s.cancel(this.intervalId), (this.intervalId = null)),
        this.mouse.stop());
    }
    shouldUpdate(t, e) {
      if (!t) {
        var { frameDuration: r } = this,
          i = this.animations.reduce((t, e) => e.update(r) || t, !1);
        if (i) return !0;
      }
      return (
        !("function" !== typeof e || !e()) ||
        !(this.isReadyLock || !this.isReady()) ||
        !!this.mouse.hasEvents()
      );
    }
    render(t, e, r, i, n, s, a) {
      var {
          CLIENT_WIDTH: o,
          CLIENT_HEIGHT: u,
          viewPort: h,
          ctx: l,
          isFirstRender: c,
        } = this,
        f = l.canvas;
      (h.clear(),
        f.width && f.height
          ? h.setCurrent(f.width, f.height)
          : h.setCurrent(o, u));
      var g = t.getStyle("width"),
        p = t.getStyle("height");
      !e &&
        (c || ("number" !== typeof i && "number" !== typeof n)) &&
        (g.hasValue() &&
          ((f.width = g.getPixels("x")),
          f.style && (f.style.width = "".concat(f.width, "px"))),
        p.hasValue() &&
          ((f.height = p.getPixels("y")),
          f.style && (f.style.height = "".concat(f.height, "px"))));
      var d = f.clientWidth || f.width,
        y = f.clientHeight || f.height;
      if (
        (e &&
          g.hasValue() &&
          p.hasValue() &&
          ((d = g.getPixels("x")), (y = p.getPixels("y"))),
        h.setCurrent(d, y),
        "number" === typeof s && t.getAttribute("x", !0).setValue(s),
        "number" === typeof a && t.getAttribute("y", !0).setValue(a),
        "number" === typeof i || "number" === typeof n)
      ) {
        var m = v(t.getAttribute("viewBox").getString()),
          x = 0,
          b = 0;
        if ("number" === typeof i) {
          var w = t.getStyle("width");
          w.hasValue()
            ? (x = w.getPixels("x") / i)
            : isNaN(m[2]) || (x = m[2] / i);
        }
        if ("number" === typeof n) {
          var S = t.getStyle("height");
          S.hasValue()
            ? (b = S.getPixels("y") / n)
            : isNaN(m[3]) || (b = m[3] / n);
        }
        (x || (x = b),
          b || (b = x),
          t.getAttribute("width", !0).setValue(i),
          t.getAttribute("height", !0).setValue(n));
        var P = t.getStyle("transform", !0, !0);
        P.setValue(
          ""
            .concat(P.getString(), " scale(")
            .concat(1 / x, ", ")
            .concat(1 / b, ")"),
        );
      }
      (r || l.clearRect(0, 0, d, y),
        t.render(l),
        c && (this.isFirstRender = !1));
    }
  }
  ((W.defaultWindow = G), (W.defaultFetch = H));
  var { defaultFetch: q } = W,
    $ = "undefined" !== typeof DOMParser ? DOMParser : null;
  class Q {
    constructor() {
      var { fetch: t = q, DOMParser: e = $ } =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      ((this.fetch = t), (this.DOMParser = e));
    }
    parse(t) {
      var e = this;
      return (0, i.Z)(function* () {
        return t.startsWith("<") ? e.parseFromString(t) : e.load(t);
      })();
    }
    parseFromString(t) {
      var e = new this.DOMParser();
      try {
        return this.checkDocument(e.parseFromString(t, "image/svg+xml"));
      } catch (r) {
        return this.checkDocument(e.parseFromString(t, "text/xml"));
      }
    }
    checkDocument(t) {
      var e = t.getElementsByTagName("parsererror")[0];
      if (e) throw new Error(e.textContent);
      return t;
    }
    load(t) {
      var e = this;
      return (0, i.Z)(function* () {
        var r = yield e.fetch(t),
          i = yield r.text();
        return e.parseFromString(i);
      })();
    }
  }
  class J {
    constructor(t, e) {
      ((this.type = "translate"),
        (this.point = null),
        (this.point = U.parse(e)));
    }
    apply(t) {
      var { x: e, y: r } = this.point;
      t.translate(e || 0, r || 0);
    }
    unapply(t) {
      var { x: e, y: r } = this.point;
      t.translate(-1 * e || 0, -1 * r || 0);
    }
    applyToPoint(t) {
      var { x: e, y: r } = this.point;
      t.applyTransform([1, 0, 0, 1, e || 0, r || 0]);
    }
  }
  class K {
    constructor(t, e, r) {
      ((this.type = "rotate"),
        (this.angle = null),
        (this.originX = null),
        (this.originY = null),
        (this.cx = 0),
        (this.cy = 0));
      var i = v(e);
      ((this.angle = new Z(t, "angle", i[0])),
        (this.originX = r[0]),
        (this.originY = r[1]),
        (this.cx = i[1] || 0),
        (this.cy = i[2] || 0));
    }
    apply(t) {
      var { cx: e, cy: r, originX: i, originY: n, angle: s } = this,
        a = e + i.getPixels("x"),
        o = r + n.getPixels("y");
      (t.translate(a, o), t.rotate(s.getRadians()), t.translate(-a, -o));
    }
    unapply(t) {
      var { cx: e, cy: r, originX: i, originY: n, angle: s } = this,
        a = e + i.getPixels("x"),
        o = r + n.getPixels("y");
      (t.translate(a, o), t.rotate(-1 * s.getRadians()), t.translate(-a, -o));
    }
    applyToPoint(t) {
      var { cx: e, cy: r, angle: i } = this,
        n = i.getRadians();
      (t.applyTransform([1, 0, 0, 1, e || 0, r || 0]),
        t.applyTransform([
          Math.cos(n),
          Math.sin(n),
          -Math.sin(n),
          Math.cos(n),
          0,
          0,
        ]),
        t.applyTransform([1, 0, 0, 1, -e || 0, -r || 0]));
    }
  }
  class tt {
    constructor(t, e, r) {
      ((this.type = "scale"),
        (this.scale = null),
        (this.originX = null),
        (this.originY = null));
      var i = U.parseScale(e);
      ((0 !== i.x && 0 !== i.y) || ((i.x = k), (i.y = k)),
        (this.scale = i),
        (this.originX = r[0]),
        (this.originY = r[1]));
    }
    apply(t) {
      var {
          scale: { x: e, y: r },
          originX: i,
          originY: n,
        } = this,
        s = i.getPixels("x"),
        a = n.getPixels("y");
      (t.translate(s, a), t.scale(e, r || e), t.translate(-s, -a));
    }
    unapply(t) {
      var {
          scale: { x: e, y: r },
          originX: i,
          originY: n,
        } = this,
        s = i.getPixels("x"),
        a = n.getPixels("y");
      (t.translate(s, a), t.scale(1 / e, 1 / r || e), t.translate(-s, -a));
    }
    applyToPoint(t) {
      var { x: e, y: r } = this.scale;
      t.applyTransform([e || 0, 0, 0, r || 0, 0, 0]);
    }
  }
  class et {
    constructor(t, e, r) {
      ((this.type = "matrix"),
        (this.matrix = []),
        (this.originX = null),
        (this.originY = null),
        (this.matrix = v(e)),
        (this.originX = r[0]),
        (this.originY = r[1]));
    }
    apply(t) {
      var { originX: e, originY: r, matrix: i } = this,
        n = e.getPixels("x"),
        s = r.getPixels("y");
      (t.translate(n, s),
        t.transform(i[0], i[1], i[2], i[3], i[4], i[5]),
        t.translate(-n, -s));
    }
    unapply(t) {
      var { originX: e, originY: r, matrix: i } = this,
        n = i[0],
        s = i[2],
        a = i[4],
        o = i[1],
        u = i[3],
        h = i[5],
        l = 0,
        c = 0,
        f = 1,
        g =
          1 / (n * (u * f - h * c) - s * (o * f - h * l) + a * (o * c - u * l)),
        p = e.getPixels("x"),
        d = r.getPixels("y");
      (t.translate(p, d),
        t.transform(
          g * (u * f - h * c),
          g * (h * l - o * f),
          g * (a * c - s * f),
          g * (n * f - a * l),
          g * (s * h - a * u),
          g * (a * o - n * h),
        ),
        t.translate(-p, -d));
    }
    applyToPoint(t) {
      t.applyTransform(this.matrix);
    }
  }
  class rt extends et {
    constructor(t, e, r) {
      (super(t, e, r),
        (this.type = "skew"),
        (this.angle = null),
        (this.angle = new Z(t, "angle", e)));
    }
  }
  class it extends rt {
    constructor(t, e, r) {
      (super(t, e, r),
        (this.type = "skewX"),
        (this.matrix = [1, 0, Math.tan(this.angle.getRadians()), 1, 0, 0]));
    }
  }
  class nt extends rt {
    constructor(t, e, r) {
      (super(t, e, r),
        (this.type = "skewY"),
        (this.matrix = [1, Math.tan(this.angle.getRadians()), 0, 1, 0, 0]));
    }
  }
  function st(t) {
    return p(t)
      .trim()
      .replace(/\)([a-zA-Z])/g, ") $1")
      .replace(/\)(\s?,\s?)/g, ") ")
      .split(/\s(?=[a-z])/);
  }
  function at(t) {
    var [e, r] = t.split("(");
    return [e.trim(), r.trim().replace(")", "")];
  }
  class ot {
    constructor(t, e, r) {
      ((this.document = t), (this.transforms = []));
      var i = st(e);
      i.forEach((t) => {
        if ("none" !== t) {
          var [e, i] = at(t),
            n = ot.transformTypes[e];
          "undefined" !== typeof n &&
            this.transforms.push(new n(this.document, i, r));
        }
      });
    }
    static fromElement(t, e) {
      var r = e.getStyle("transform", !1, !0),
        [i, n = i] = e.getStyle("transform-origin", !1, !0).split(),
        s = [i, n];
      return r.hasValue() ? new ot(t, r.getString(), s) : null;
    }
    apply(t) {
      for (var { transforms: e } = this, r = e.length, i = 0; i < r; i++)
        e[i].apply(t);
    }
    unapply(t) {
      for (var { transforms: e } = this, r = e.length, i = r - 1; i >= 0; i--)
        e[i].unapply(t);
    }
    applyToPoint(t) {
      for (var { transforms: e } = this, r = e.length, i = 0; i < r; i++)
        e[i].applyToPoint(t);
    }
  }
  ot.transformTypes = {
    translate: J,
    rotate: K,
    scale: tt,
    matrix: et,
    skewX: it,
    skewY: nt,
  };
  class ut {
    constructor(t, e) {
      var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      if (
        ((this.document = t),
        (this.node = e),
        (this.captureTextNodes = r),
        (this.attributes = {}),
        (this.styles = {}),
        (this.stylesSpecificity = {}),
        (this.animationFrozen = !1),
        (this.animationFrozenValue = ""),
        (this.parent = null),
        (this.children = []),
        e && 1 === e.nodeType)
      ) {
        if (
          (Array.from(e.attributes).forEach((e) => {
            var r = x(e.nodeName);
            this.attributes[r] = new Z(t, r, e.value);
          }),
          this.addStylesFromStyleDefinition(),
          this.getAttribute("style").hasValue())
        ) {
          var i = this.getAttribute("style")
            .getString()
            .split(";")
            .map((t) => t.trim());
          i.forEach((e) => {
            if (e) {
              var [r, i] = e.split(":").map((t) => t.trim());
              this.styles[r] = new Z(t, r, i);
            }
          });
        }
        var { definitions: n } = t,
          s = this.getAttribute("id");
        (s.hasValue() && (n[s.getString()] || (n[s.getString()] = this)),
          Array.from(e.childNodes).forEach((e) => {
            if (1 === e.nodeType) this.addChild(e);
            else if (r && (3 === e.nodeType || 4 === e.nodeType)) {
              var i = t.createTextNode(e);
              i.getText().length > 0 && this.addChild(i);
            }
          }));
      }
    }
    getAttribute(t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        r = this.attributes[t];
      if (!r && e) {
        var i = new Z(this.document, t, "");
        return ((this.attributes[t] = i), i);
      }
      return r || Z.empty(this.document);
    }
    getHrefAttribute() {
      for (var t in this.attributes)
        if ("href" === t || t.endsWith(":href")) return this.attributes[t];
      return Z.empty(this.document);
    }
    getStyle(t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = this.styles[t];
      if (i) return i;
      var n = this.getAttribute(t);
      if (null !== n && void 0 !== n && n.hasValue())
        return ((this.styles[t] = n), n);
      if (!r) {
        var { parent: s } = this;
        if (s) {
          var a = s.getStyle(t);
          if (null !== a && void 0 !== a && a.hasValue()) return a;
        }
      }
      if (e) {
        var o = new Z(this.document, t, "");
        return ((this.styles[t] = o), o);
      }
      return i || Z.empty(this.document);
    }
    render(t) {
      if (
        "none" !== this.getStyle("display").getString() &&
        "hidden" !== this.getStyle("visibility").getString()
      ) {
        if ((t.save(), this.getStyle("mask").hasValue())) {
          var e = this.getStyle("mask").getDefinition();
          e && (this.applyEffects(t), e.apply(t, this));
        } else if ("none" !== this.getStyle("filter").getValue("none")) {
          var r = this.getStyle("filter").getDefinition();
          r && (this.applyEffects(t), r.apply(t, this));
        } else
          (this.setContext(t), this.renderChildren(t), this.clearContext(t));
        t.restore();
      }
    }
    setContext(t) {}
    applyEffects(t) {
      var e = ot.fromElement(this.document, this);
      e && e.apply(t);
      var r = this.getStyle("clip-path", !1, !0);
      if (r.hasValue()) {
        var i = r.getDefinition();
        i && i.apply(t);
      }
    }
    clearContext(t) {}
    renderChildren(t) {
      this.children.forEach((e) => {
        e.render(t);
      });
    }
    addChild(t) {
      var e = t instanceof ut ? t : this.document.createElement(t);
      ((e.parent = this),
        ut.ignoreChildTypes.includes(e.type) || this.children.push(e));
    }
    matchesSelector(t) {
      var e,
        { node: r } = this;
      if ("function" === typeof r.matches) return r.matches(t);
      var i =
        null === (e = r.getAttribute) || void 0 === e
          ? void 0
          : e.call(r, "class");
      return !(!i || "" === i) && i.split(" ").some((e) => ".".concat(e) === t);
    }
    addStylesFromStyleDefinition() {
      var { styles: t, stylesSpecificity: e } = this.document;
      for (var r in t)
        if (!r.startsWith("@") && this.matchesSelector(r)) {
          var i = t[r],
            n = e[r];
          if (i)
            for (var s in i) {
              var a = this.stylesSpecificity[s];
              ("undefined" === typeof a && (a = "000"),
                n >= a &&
                  ((this.styles[s] = i[s]), (this.stylesSpecificity[s] = n)));
            }
        }
    }
    removeStyles(t, e) {
      var r = e.reduce((e, r) => {
        var i = t.getStyle(r);
        if (!i.hasValue()) return e;
        var n = i.getString();
        return (i.setValue(""), [...e, [r, n]]);
      }, []);
      return r;
    }
    restoreStyles(t, e) {
      e.forEach((e) => {
        var [r, i] = e;
        t.getStyle(r, !0).setValue(i);
      });
    }
    isFirstChild() {
      var t;
      return (
        0 ===
        (null === (t = this.parent) || void 0 === t
          ? void 0
          : t.children.indexOf(this))
      );
    }
  }
  ut.ignoreChildTypes = ["title"];
  class ht extends ut {
    constructor(t, e, r) {
      super(t, e, r);
    }
  }
  function lt(t) {
    var e = t.trim();
    return /^('|")/.test(e) ? e : '"'.concat(e, '"');
  }
  function ct(t) {
    return "undefined" === typeof h ? t : t.trim().split(",").map(lt).join(",");
  }
  function ft(t) {
    if (!t) return "";
    var e = t.trim().toLowerCase();
    switch (e) {
      case "normal":
      case "italic":
      case "oblique":
      case "inherit":
      case "initial":
      case "unset":
        return e;
      default:
        return /^oblique\s+(-|)\d+deg$/.test(e) ? e : "";
    }
  }
  function gt(t) {
    if (!t) return "";
    var e = t.trim().toLowerCase();
    switch (e) {
      case "normal":
      case "bold":
      case "lighter":
      case "bolder":
      case "inherit":
      case "initial":
      case "unset":
        return e;
      default:
        return /^[\d.]+$/.test(e) ? e : "";
    }
  }
  class pt {
    constructor(t, e, r, i, n, s) {
      var a = s ? ("string" === typeof s ? pt.parse(s) : s) : {};
      ((this.fontFamily = n || a.fontFamily),
        (this.fontSize = i || a.fontSize),
        (this.fontStyle = t || a.fontStyle),
        (this.fontWeight = r || a.fontWeight),
        (this.fontVariant = e || a.fontVariant));
    }
    static parse() {
      var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
        e = arguments.length > 1 ? arguments[1] : void 0,
        r = "",
        i = "",
        n = "",
        s = "",
        a = "",
        o = p(t).trim().split(" "),
        u = { fontSize: !1, fontStyle: !1, fontWeight: !1, fontVariant: !1 };
      return (
        o.forEach((t) => {
          switch (!0) {
            case !u.fontStyle && pt.styles.includes(t):
              ("inherit" !== t && (r = t), (u.fontStyle = !0));
              break;
            case !u.fontVariant && pt.variants.includes(t):
              ("inherit" !== t && (i = t),
                (u.fontStyle = !0),
                (u.fontVariant = !0));
              break;
            case !u.fontWeight && pt.weights.includes(t):
              ("inherit" !== t && (n = t),
                (u.fontStyle = !0),
                (u.fontVariant = !0),
                (u.fontWeight = !0));
              break;
            case !u.fontSize:
              ("inherit" !== t && ([s] = t.split("/")),
                (u.fontStyle = !0),
                (u.fontVariant = !0),
                (u.fontWeight = !0),
                (u.fontSize = !0));
              break;
            default:
              "inherit" !== t && (a += t);
          }
        }),
        new pt(r, i, n, s, a, e)
      );
    }
    toString() {
      return [
        ft(this.fontStyle),
        this.fontVariant,
        gt(this.fontWeight),
        this.fontSize,
        ct(this.fontFamily),
      ]
        .join(" ")
        .trim();
    }
  }
  ((pt.styles = "normal|italic|oblique|inherit"),
    (pt.variants = "normal|small-caps|inherit"),
    (pt.weights =
      "normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900|inherit"));
  class dt {
    constructor() {
      var t =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : Number.NaN,
        e =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : Number.NaN,
        r =
          arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : Number.NaN,
        i =
          arguments.length > 3 && void 0 !== arguments[3]
            ? arguments[3]
            : Number.NaN;
      ((this.x1 = t),
        (this.y1 = e),
        (this.x2 = r),
        (this.y2 = i),
        this.addPoint(t, e),
        this.addPoint(r, i));
    }
    get x() {
      return this.x1;
    }
    get y() {
      return this.y1;
    }
    get width() {
      return this.x2 - this.x1;
    }
    get height() {
      return this.y2 - this.y1;
    }
    addPoint(t, e) {
      ("undefined" !== typeof t &&
        ((isNaN(this.x1) || isNaN(this.x2)) && ((this.x1 = t), (this.x2 = t)),
        t < this.x1 && (this.x1 = t),
        t > this.x2 && (this.x2 = t)),
        "undefined" !== typeof e &&
          ((isNaN(this.y1) || isNaN(this.y2)) && ((this.y1 = e), (this.y2 = e)),
          e < this.y1 && (this.y1 = e),
          e > this.y2 && (this.y2 = e)));
    }
    addX(t) {
      this.addPoint(t, null);
    }
    addY(t) {
      this.addPoint(null, t);
    }
    addBoundingBox(t) {
      if (t) {
        var { x1: e, y1: r, x2: i, y2: n } = t;
        (this.addPoint(e, r), this.addPoint(i, n));
      }
    }
    sumCubic(t, e, r, i, n) {
      return (
        Math.pow(1 - t, 3) * e +
        3 * Math.pow(1 - t, 2) * t * r +
        3 * (1 - t) * Math.pow(t, 2) * i +
        Math.pow(t, 3) * n
      );
    }
    bezierCurveAdd(t, e, r, i, n) {
      var s = 6 * e - 12 * r + 6 * i,
        a = -3 * e + 9 * r - 9 * i + 3 * n,
        o = 3 * r - 3 * e;
      if (0 !== a) {
        var u = Math.pow(s, 2) - 4 * o * a;
        if (!(u < 0)) {
          var h = (-s + Math.sqrt(u)) / (2 * a);
          0 < h &&
            h < 1 &&
            (t
              ? this.addX(this.sumCubic(h, e, r, i, n))
              : this.addY(this.sumCubic(h, e, r, i, n)));
          var l = (-s - Math.sqrt(u)) / (2 * a);
          0 < l &&
            l < 1 &&
            (t
              ? this.addX(this.sumCubic(l, e, r, i, n))
              : this.addY(this.sumCubic(l, e, r, i, n)));
        }
      } else {
        if (0 === s) return;
        var c = -o / s;
        0 < c &&
          c < 1 &&
          (t
            ? this.addX(this.sumCubic(c, e, r, i, n))
            : this.addY(this.sumCubic(c, e, r, i, n)));
      }
    }
    addBezierCurve(t, e, r, i, n, s, a, o) {
      (this.addPoint(t, e),
        this.addPoint(a, o),
        this.bezierCurveAdd(!0, t, r, n, a),
        this.bezierCurveAdd(!1, e, i, s, o));
    }
    addQuadraticCurve(t, e, r, i, n, s) {
      var a = t + (2 / 3) * (r - t),
        o = e + (2 / 3) * (i - e),
        u = a + (1 / 3) * (n - t),
        h = o + (1 / 3) * (s - e);
      this.addBezierCurve(t, e, a, u, o, h, n, s);
    }
    isPointInBox(t, e) {
      var { x1: r, y1: i, x2: n, y2: s } = this;
      return r <= t && t <= n && i <= e && e <= s;
    }
  }
  class yt extends o.OU {
    constructor(t) {
      (super(
        t
          .replace(/([+\-.])\s+/gm, "$1")
          .replace(/[^MmZzLlHhVvCcSsQqTtAae\d\s.,+-].*/g, ""),
      ),
        (this.control = null),
        (this.start = null),
        (this.current = null),
        (this.command = null),
        (this.commands = this.commands),
        (this.i = -1),
        (this.previousCommand = null),
        (this.points = []),
        (this.angles = []));
    }
    reset() {
      ((this.i = -1),
        (this.command = null),
        (this.previousCommand = null),
        (this.start = new U(0, 0)),
        (this.control = new U(0, 0)),
        (this.current = new U(0, 0)),
        (this.points = []),
        (this.angles = []));
    }
    isEnd() {
      var { i: t, commands: e } = this;
      return t >= e.length - 1;
    }
    next() {
      var t = this.commands[++this.i];
      return ((this.previousCommand = this.command), (this.command = t), t);
    }
    getPoint() {
      var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "x",
        e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "y",
        r = new U(this.command[t], this.command[e]);
      return this.makeAbsolute(r);
    }
    getAsControlPoint(t, e) {
      var r = this.getPoint(t, e);
      return ((this.control = r), r);
    }
    getAsCurrentPoint(t, e) {
      var r = this.getPoint(t, e);
      return ((this.current = r), r);
    }
    getReflectedControlPoint() {
      var t = this.previousCommand.type;
      if (
        t !== o.OU.CURVE_TO &&
        t !== o.OU.SMOOTH_CURVE_TO &&
        t !== o.OU.QUAD_TO &&
        t !== o.OU.SMOOTH_QUAD_TO
      )
        return this.current;
      var {
          current: { x: e, y: r },
          control: { x: i, y: n },
        } = this,
        s = new U(2 * e - i, 2 * r - n);
      return s;
    }
    makeAbsolute(t) {
      if (this.command.relative) {
        var { x: e, y: r } = this.current;
        ((t.x += e), (t.y += r));
      }
      return t;
    }
    addMarker(t, e, r) {
      var { points: i, angles: n } = this;
      (r &&
        n.length > 0 &&
        !n[n.length - 1] &&
        (n[n.length - 1] = i[i.length - 1].angleTo(r)),
        this.addMarkerAngle(t, e ? e.angleTo(t) : null));
    }
    addMarkerAngle(t, e) {
      (this.points.push(t), this.angles.push(e));
    }
    getMarkerPoints() {
      return this.points;
    }
    getMarkerAngles() {
      for (var { angles: t } = this, e = t.length, r = 0; r < e; r++)
        if (!t[r])
          for (var i = r + 1; i < e; i++)
            if (t[i]) {
              t[r] = t[i];
              break;
            }
      return t;
    }
  }
  class vt extends ut {
    constructor() {
      (super(...arguments), (this.modifiedEmSizeStack = !1));
    }
    calculateOpacity() {
      var t = 1,
        e = this;
      while (e) {
        var r = e.getStyle("opacity", !1, !0);
        (r.hasValue(!0) && (t *= r.getNumber()), (e = e.parent));
      }
      return t;
    }
    setContext(t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      if (!e) {
        var r = this.getStyle("fill"),
          i = this.getStyle("fill-opacity"),
          n = this.getStyle("stroke"),
          s = this.getStyle("stroke-opacity");
        if (r.isUrlDefinition()) {
          var a = r.getFillStyleDefinition(this, i);
          a && (t.fillStyle = a);
        } else if (r.hasValue()) {
          "currentColor" === r.getString() &&
            r.setValue(this.getStyle("color").getColor());
          var o = r.getColor();
          "inherit" !== o && (t.fillStyle = "none" === o ? "rgba(0,0,0,0)" : o);
        }
        if (i.hasValue()) {
          var u = new Z(this.document, "fill", t.fillStyle)
            .addOpacity(i)
            .getColor();
          t.fillStyle = u;
        }
        if (n.isUrlDefinition()) {
          var h = n.getFillStyleDefinition(this, s);
          h && (t.strokeStyle = h);
        } else if (n.hasValue()) {
          "currentColor" === n.getString() &&
            n.setValue(this.getStyle("color").getColor());
          var l = n.getString();
          "inherit" !== l &&
            (t.strokeStyle = "none" === l ? "rgba(0,0,0,0)" : l);
        }
        if (s.hasValue()) {
          var c = new Z(this.document, "stroke", t.strokeStyle)
            .addOpacity(s)
            .getString();
          t.strokeStyle = c;
        }
        var f = this.getStyle("stroke-width");
        if (f.hasValue()) {
          var g = f.getPixels();
          t.lineWidth = g || k;
        }
        var p = this.getStyle("stroke-linecap"),
          d = this.getStyle("stroke-linejoin"),
          y = this.getStyle("stroke-miterlimit"),
          m = this.getStyle("stroke-dasharray"),
          x = this.getStyle("stroke-dashoffset");
        if (
          (p.hasValue() && (t.lineCap = p.getString()),
          d.hasValue() && (t.lineJoin = d.getString()),
          y.hasValue() && (t.miterLimit = y.getNumber()),
          m.hasValue() && "none" !== m.getString())
        ) {
          var b = v(m.getString());
          "undefined" !== typeof t.setLineDash
            ? t.setLineDash(b)
            : "undefined" !== typeof t.webkitLineDash
              ? (t.webkitLineDash = b)
              : "undefined" === typeof t.mozDash ||
                (1 === b.length && 0 === b[0]) ||
                (t.mozDash = b);
          var w = x.getPixels();
          "undefined" !== typeof t.lineDashOffset
            ? (t.lineDashOffset = w)
            : "undefined" !== typeof t.webkitLineDashOffset
              ? (t.webkitLineDashOffset = w)
              : "undefined" !== typeof t.mozDashOffset && (t.mozDashOffset = w);
        }
      }
      if (((this.modifiedEmSizeStack = !1), "undefined" !== typeof t.font)) {
        var S = this.getStyle("font"),
          P = this.getStyle("font-style"),
          A = this.getStyle("font-variant"),
          C = this.getStyle("font-weight"),
          O = this.getStyle("font-size"),
          E = this.getStyle("font-family"),
          T = new pt(
            P.getString(),
            A.getString(),
            C.getString(),
            O.hasValue() ? "".concat(O.getPixels(!0), "px") : "",
            E.getString(),
            pt.parse(S.getString(), t.font),
          );
        (P.setValue(T.fontStyle),
          A.setValue(T.fontVariant),
          C.setValue(T.fontWeight),
          O.setValue(T.fontSize),
          E.setValue(T.fontFamily),
          (t.font = T.toString()),
          O.isPixels() &&
            ((this.document.emSize = O.getPixels()),
            (this.modifiedEmSizeStack = !0)));
      }
      e || (this.applyEffects(t), (t.globalAlpha = this.calculateOpacity()));
    }
    clearContext(t) {
      (super.clearContext(t),
        this.modifiedEmSizeStack && this.document.popEmSize());
    }
  }
  class mt extends vt {
    constructor(t, e, r) {
      (super(t, e, r),
        (this.type = "path"),
        (this.pathParser = null),
        (this.pathParser = new yt(this.getAttribute("d").getString())));
    }
    path(t) {
      var { pathParser: e } = this,
        r = new dt();
      (e.reset(), t && t.beginPath());
      while (!e.isEnd())
        switch (e.next().type) {
          case yt.MOVE_TO:
            this.pathM(t, r);
            break;
          case yt.LINE_TO:
            this.pathL(t, r);
            break;
          case yt.HORIZ_LINE_TO:
            this.pathH(t, r);
            break;
          case yt.VERT_LINE_TO:
            this.pathV(t, r);
            break;
          case yt.CURVE_TO:
            this.pathC(t, r);
            break;
          case yt.SMOOTH_CURVE_TO:
            this.pathS(t, r);
            break;
          case yt.QUAD_TO:
            this.pathQ(t, r);
            break;
          case yt.SMOOTH_QUAD_TO:
            this.pathT(t, r);
            break;
          case yt.ARC:
            this.pathA(t, r);
            break;
          case yt.CLOSE_PATH:
            this.pathZ(t, r);
            break;
        }
      return r;
    }
    getBoundingBox(t) {
      return this.path();
    }
    getMarkers() {
      var { pathParser: t } = this,
        e = t.getMarkerPoints(),
        r = t.getMarkerAngles(),
        i = e.map((t, e) => [t, r[e]]);
      return i;
    }
    renderChildren(t) {
      (this.path(t), this.document.screen.mouse.checkPath(this, t));
      var e = this.getStyle("fill-rule");
      ("" !== t.fillStyle &&
        ("inherit" !== e.getString("inherit")
          ? t.fill(e.getString())
          : t.fill()),
        "" !== t.strokeStyle &&
          ("non-scaling-stroke" ===
          this.getAttribute("vector-effect").getString()
            ? (t.save(),
              t.setTransform(1, 0, 0, 1, 0, 0),
              t.stroke(),
              t.restore())
            : t.stroke()));
      var r = this.getMarkers();
      if (r) {
        var i = r.length - 1,
          n = this.getStyle("marker-start"),
          s = this.getStyle("marker-mid"),
          a = this.getStyle("marker-end");
        if (n.isUrlDefinition()) {
          var o = n.getDefinition(),
            [u, h] = r[0];
          o.render(t, u, h);
        }
        if (s.isUrlDefinition())
          for (var l = s.getDefinition(), c = 1; c < i; c++) {
            var [f, g] = r[c];
            l.render(t, f, g);
          }
        if (a.isUrlDefinition()) {
          var p = a.getDefinition(),
            [d, y] = r[i];
          p.render(t, d, y);
        }
      }
    }
    static pathM(t) {
      var e = t.getAsCurrentPoint();
      return ((t.start = t.current), { point: e });
    }
    pathM(t, e) {
      var { pathParser: r } = this,
        { point: i } = mt.pathM(r),
        { x: n, y: s } = i;
      (r.addMarker(i), e.addPoint(n, s), t && t.moveTo(n, s));
    }
    static pathL(t) {
      var { current: e } = t,
        r = t.getAsCurrentPoint();
      return { current: e, point: r };
    }
    pathL(t, e) {
      var { pathParser: r } = this,
        { current: i, point: n } = mt.pathL(r),
        { x: s, y: a } = n;
      (r.addMarker(n, i), e.addPoint(s, a), t && t.lineTo(s, a));
    }
    static pathH(t) {
      var { current: e, command: r } = t,
        i = new U((r.relative ? e.x : 0) + r.x, e.y);
      return ((t.current = i), { current: e, point: i });
    }
    pathH(t, e) {
      var { pathParser: r } = this,
        { current: i, point: n } = mt.pathH(r),
        { x: s, y: a } = n;
      (r.addMarker(n, i), e.addPoint(s, a), t && t.lineTo(s, a));
    }
    static pathV(t) {
      var { current: e, command: r } = t,
        i = new U(e.x, (r.relative ? e.y : 0) + r.y);
      return ((t.current = i), { current: e, point: i });
    }
    pathV(t, e) {
      var { pathParser: r } = this,
        { current: i, point: n } = mt.pathV(r),
        { x: s, y: a } = n;
      (r.addMarker(n, i), e.addPoint(s, a), t && t.lineTo(s, a));
    }
    static pathC(t) {
      var { current: e } = t,
        r = t.getPoint("x1", "y1"),
        i = t.getAsControlPoint("x2", "y2"),
        n = t.getAsCurrentPoint();
      return { current: e, point: r, controlPoint: i, currentPoint: n };
    }
    pathC(t, e) {
      var { pathParser: r } = this,
        {
          current: i,
          point: n,
          controlPoint: s,
          currentPoint: a,
        } = mt.pathC(r);
      (r.addMarker(a, s, n),
        e.addBezierCurve(i.x, i.y, n.x, n.y, s.x, s.y, a.x, a.y),
        t && t.bezierCurveTo(n.x, n.y, s.x, s.y, a.x, a.y));
    }
    static pathS(t) {
      var { current: e } = t,
        r = t.getReflectedControlPoint(),
        i = t.getAsControlPoint("x2", "y2"),
        n = t.getAsCurrentPoint();
      return { current: e, point: r, controlPoint: i, currentPoint: n };
    }
    pathS(t, e) {
      var { pathParser: r } = this,
        {
          current: i,
          point: n,
          controlPoint: s,
          currentPoint: a,
        } = mt.pathS(r);
      (r.addMarker(a, s, n),
        e.addBezierCurve(i.x, i.y, n.x, n.y, s.x, s.y, a.x, a.y),
        t && t.bezierCurveTo(n.x, n.y, s.x, s.y, a.x, a.y));
    }
    static pathQ(t) {
      var { current: e } = t,
        r = t.getAsControlPoint("x1", "y1"),
        i = t.getAsCurrentPoint();
      return { current: e, controlPoint: r, currentPoint: i };
    }
    pathQ(t, e) {
      var { pathParser: r } = this,
        { current: i, controlPoint: n, currentPoint: s } = mt.pathQ(r);
      (r.addMarker(s, n, n),
        e.addQuadraticCurve(i.x, i.y, n.x, n.y, s.x, s.y),
        t && t.quadraticCurveTo(n.x, n.y, s.x, s.y));
    }
    static pathT(t) {
      var { current: e } = t,
        r = t.getReflectedControlPoint();
      t.control = r;
      var i = t.getAsCurrentPoint();
      return { current: e, controlPoint: r, currentPoint: i };
    }
    pathT(t, e) {
      var { pathParser: r } = this,
        { current: i, controlPoint: n, currentPoint: s } = mt.pathT(r);
      (r.addMarker(s, n, n),
        e.addQuadraticCurve(i.x, i.y, n.x, n.y, s.x, s.y),
        t && t.quadraticCurveTo(n.x, n.y, s.x, s.y));
    }
    static pathA(t) {
      var { current: e, command: r } = t,
        { rX: i, rY: n, xRot: s, lArcFlag: a, sweepFlag: o } = r,
        u = s * (Math.PI / 180),
        h = t.getAsCurrentPoint(),
        l = new U(
          (Math.cos(u) * (e.x - h.x)) / 2 + (Math.sin(u) * (e.y - h.y)) / 2,
          (-Math.sin(u) * (e.x - h.x)) / 2 + (Math.cos(u) * (e.y - h.y)) / 2,
        ),
        c =
          Math.pow(l.x, 2) / Math.pow(i, 2) + Math.pow(l.y, 2) / Math.pow(n, 2);
      c > 1 && ((i *= Math.sqrt(c)), (n *= Math.sqrt(c)));
      var f =
        (a === o ? -1 : 1) *
        Math.sqrt(
          (Math.pow(i, 2) * Math.pow(n, 2) -
            Math.pow(i, 2) * Math.pow(l.y, 2) -
            Math.pow(n, 2) * Math.pow(l.x, 2)) /
            (Math.pow(i, 2) * Math.pow(l.y, 2) +
              Math.pow(n, 2) * Math.pow(l.x, 2)),
        );
      isNaN(f) && (f = 0);
      var g = new U((f * i * l.y) / n, (f * -n * l.x) / i),
        p = new U(
          (e.x + h.x) / 2 + Math.cos(u) * g.x - Math.sin(u) * g.y,
          (e.y + h.y) / 2 + Math.sin(u) * g.x + Math.cos(u) * g.y,
        ),
        d = _([1, 0], [(l.x - g.x) / i, (l.y - g.y) / n]),
        y = [(l.x - g.x) / i, (l.y - g.y) / n],
        v = [(-l.x - g.x) / i, (-l.y - g.y) / n],
        m = _(y, v);
      return (
        N(y, v) <= -1 && (m = Math.PI),
        N(y, v) >= 1 && (m = 0),
        {
          currentPoint: h,
          rX: i,
          rY: n,
          sweepFlag: o,
          xAxisRotation: u,
          centp: p,
          a1: d,
          ad: m,
        }
      );
    }
    pathA(t, e) {
      var { pathParser: r } = this,
        {
          currentPoint: i,
          rX: n,
          rY: s,
          sweepFlag: a,
          xAxisRotation: o,
          centp: u,
          a1: h,
          ad: l,
        } = mt.pathA(r),
        c = 1 - a ? 1 : -1,
        f = h + c * (l / 2),
        g = new U(u.x + n * Math.cos(f), u.y + s * Math.sin(f));
      if (
        (r.addMarkerAngle(g, f - (c * Math.PI) / 2),
        r.addMarkerAngle(i, f - c * Math.PI),
        e.addPoint(i.x, i.y),
        t && !isNaN(h) && !isNaN(l))
      ) {
        var p = n > s ? n : s,
          d = n > s ? 1 : n / s,
          y = n > s ? s / n : 1;
        (t.translate(u.x, u.y),
          t.rotate(o),
          t.scale(d, y),
          t.arc(0, 0, p, h, h + l, Boolean(1 - a)),
          t.scale(1 / d, 1 / y),
          t.rotate(-o),
          t.translate(-u.x, -u.y));
      }
    }
    static pathZ(t) {
      t.current = t.start;
    }
    pathZ(t, e) {
      (mt.pathZ(this.pathParser),
        t && e.x1 !== e.x2 && e.y1 !== e.y2 && t.closePath());
    }
  }
  class xt extends mt {
    constructor(t, e, r) {
      (super(t, e, r),
        (this.type = "glyph"),
        (this.horizAdvX = this.getAttribute("horiz-adv-x").getNumber()),
        (this.unicode = this.getAttribute("unicode").getString()),
        (this.arabicForm = this.getAttribute("arabic-form").getString()));
    }
  }
  class bt extends vt {
    constructor(t, e, r) {
      (super(t, e, new.target === bt || r),
        (this.type = "text"),
        (this.x = 0),
        (this.y = 0),
        (this.measureCache = -1));
    }
    setContext(t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      super.setContext(t, e);
      var r =
        this.getStyle("dominant-baseline").getTextBaseline() ||
        this.getStyle("alignment-baseline").getTextBaseline();
      r && (t.textBaseline = r);
    }
    initializeCoordinates() {
      ((this.x = 0),
        (this.y = 0),
        (this.leafTexts = []),
        (this.textChunkStart = 0),
        (this.minX = Number.POSITIVE_INFINITY),
        (this.maxX = Number.NEGATIVE_INFINITY));
    }
    getBoundingBox(t) {
      if ("text" !== this.type) return this.getTElementBoundingBox(t);
      (this.initializeCoordinates(), this.adjustChildCoordinatesRecursive(t));
      var e = null;
      return (
        this.children.forEach((r, i) => {
          var n = this.getChildBoundingBox(t, this, this, i);
          e ? e.addBoundingBox(n) : (e = n);
        }),
        e
      );
    }
    getFontSize() {
      var { document: t, parent: e } = this,
        r = pt.parse(t.ctx.font).fontSize,
        i = e.getStyle("font-size").getNumber(r);
      return i;
    }
    getTElementBoundingBox(t) {
      var e = this.getFontSize();
      return new dt(this.x, this.y - e, this.x + this.measureText(t), this.y);
    }
    getGlyph(t, e, r) {
      var i = e[r],
        n = null;
      if (t.isArabic) {
        var s = e.length,
          a = e[r - 1],
          o = e[r + 1],
          u = "isolated";
        if (
          ((0 === r || " " === a) && r < s - 1 && " " !== o && (u = "terminal"),
          r > 0 && " " !== a && r < s - 1 && " " !== o && (u = "medial"),
          r > 0 && " " !== a && (r === s - 1 || " " === o) && (u = "initial"),
          "undefined" !== typeof t.glyphs[i])
        ) {
          var h = t.glyphs[i];
          n = h instanceof xt ? h : h[u];
        }
      } else n = t.glyphs[i];
      return (n || (n = t.missingGlyph), n);
    }
    getText() {
      return "";
    }
    getTextFromNode(t) {
      var e = t || this.node,
        r = Array.from(e.parentNode.childNodes),
        i = r.indexOf(e),
        n = r.length - 1,
        s = p(e.textContent || "");
      return (0 === i && (s = d(s)), i === n && (s = y(s)), s);
    }
    renderChildren(t) {
      if ("text" === this.type) {
        (this.initializeCoordinates(),
          this.adjustChildCoordinatesRecursive(t),
          this.children.forEach((e, r) => {
            this.renderChild(t, this, this, r);
          }));
        var { mouse: e } = this.document.screen;
        e.isWorking() && e.checkBoundingBox(this, this.getBoundingBox(t));
      } else this.renderTElementChildren(t);
    }
    renderTElementChildren(t) {
      var { document: e, parent: r } = this,
        i = this.getText(),
        n = r.getStyle("font-family").getDefinition();
      if (n)
        for (
          var { unitsPerEm: s } = n.fontFace,
            a = pt.parse(e.ctx.font),
            o = r.getStyle("font-size").getNumber(a.fontSize),
            u = r.getStyle("font-style").getString(a.fontStyle),
            h = o / s,
            l = n.isRTL ? i.split("").reverse().join("") : i,
            c = v(r.getAttribute("dx").getString()),
            f = l.length,
            g = 0;
          g < f;
          g++
        ) {
          var p = this.getGlyph(n, l, g);
          (t.translate(this.x, this.y), t.scale(h, -h));
          var d = t.lineWidth;
          ((t.lineWidth = (t.lineWidth * s) / o),
            "italic" === u && t.transform(1, 0, 0.4, 1, 0, 0),
            p.render(t),
            "italic" === u && t.transform(1, 0, -0.4, 1, 0, 0),
            (t.lineWidth = d),
            t.scale(1 / h, -1 / h),
            t.translate(-this.x, -this.y),
            (this.x += (o * (p.horizAdvX || n.horizAdvX)) / s),
            "undefined" === typeof c[g] || isNaN(c[g]) || (this.x += c[g]));
        }
      else {
        var { x: y, y: m } = this;
        (t.fillStyle && t.fillText(i, y, m),
          t.strokeStyle && t.strokeText(i, y, m));
      }
    }
    applyAnchoring() {
      if (!(this.textChunkStart >= this.leafTexts.length)) {
        var t = this.leafTexts[this.textChunkStart],
          e = t.getStyle("text-anchor").getString("start"),
          r = !1,
          i = 0;
        i =
          ("start" === e && !r) || ("end" === e && r)
            ? t.x - this.minX
            : ("end" === e && !r) || ("start" === e && r)
              ? t.x - this.maxX
              : t.x - (this.minX + this.maxX) / 2;
        for (var n = this.textChunkStart; n < this.leafTexts.length; n++)
          this.leafTexts[n].x += i;
        ((this.minX = Number.POSITIVE_INFINITY),
          (this.maxX = Number.NEGATIVE_INFINITY),
          (this.textChunkStart = this.leafTexts.length));
      }
    }
    adjustChildCoordinatesRecursive(t) {
      (this.children.forEach((e, r) => {
        this.adjustChildCoordinatesRecursiveCore(t, this, this, r);
      }),
        this.applyAnchoring());
    }
    adjustChildCoordinatesRecursiveCore(t, e, r, i) {
      var n = r.children[i];
      n.children.length > 0
        ? n.children.forEach((r, i) => {
            e.adjustChildCoordinatesRecursiveCore(t, e, n, i);
          })
        : this.adjustChildCoordinates(t, e, r, i);
    }
    adjustChildCoordinates(t, e, r, i) {
      var n = r.children[i];
      if ("function" !== typeof n.measureText) return n;
      (t.save(), n.setContext(t, !0));
      var s = n.getAttribute("x"),
        a = n.getAttribute("y"),
        o = n.getAttribute("dx"),
        u = n.getAttribute("dy"),
        h = n.getStyle("font-family").getDefinition(),
        l = Boolean(h) && h.isRTL;
      0 === i &&
        (s.hasValue() || s.setValue(n.getInheritedAttribute("x")),
        a.hasValue() || a.setValue(n.getInheritedAttribute("y")),
        o.hasValue() || o.setValue(n.getInheritedAttribute("dx")),
        u.hasValue() || u.setValue(n.getInheritedAttribute("dy")));
      var c = n.measureText(t);
      return (
        l && (e.x -= c),
        s.hasValue()
          ? (e.applyAnchoring(),
            (n.x = s.getPixels("x")),
            o.hasValue() && (n.x += o.getPixels("x")))
          : (o.hasValue() && (e.x += o.getPixels("x")), (n.x = e.x)),
        (e.x = n.x),
        l || (e.x += c),
        a.hasValue()
          ? ((n.y = a.getPixels("y")),
            u.hasValue() && (n.y += u.getPixels("y")))
          : (u.hasValue() && (e.y += u.getPixels("y")), (n.y = e.y)),
        (e.y = n.y),
        e.leafTexts.push(n),
        (e.minX = Math.min(e.minX, n.x, n.x + c)),
        (e.maxX = Math.max(e.maxX, n.x, n.x + c)),
        n.clearContext(t),
        t.restore(),
        n
      );
    }
    getChildBoundingBox(t, e, r, i) {
      var n = r.children[i];
      if ("function" !== typeof n.getBoundingBox) return null;
      var s = n.getBoundingBox(t);
      return s
        ? (n.children.forEach((r, i) => {
            var a = e.getChildBoundingBox(t, e, n, i);
            s.addBoundingBox(a);
          }),
          s)
        : null;
    }
    renderChild(t, e, r, i) {
      var n = r.children[i];
      (n.render(t),
        n.children.forEach((r, i) => {
          e.renderChild(t, e, n, i);
        }));
    }
    measureText(t) {
      var { measureCache: e } = this;
      if (~e) return e;
      var r = this.getText(),
        i = this.measureTargetText(t, r);
      return ((this.measureCache = i), i);
    }
    measureTargetText(t, e) {
      if (!e.length) return 0;
      var { parent: r } = this,
        i = r.getStyle("font-family").getDefinition();
      if (i) {
        for (
          var n = this.getFontSize(),
            s = i.isRTL ? e.split("").reverse().join("") : e,
            a = v(r.getAttribute("dx").getString()),
            o = s.length,
            u = 0,
            h = 0;
          h < o;
          h++
        ) {
          var l = this.getGlyph(i, s, h);
          ((u += ((l.horizAdvX || i.horizAdvX) * n) / i.fontFace.unitsPerEm),
            "undefined" === typeof a[h] || isNaN(a[h]) || (u += a[h]));
        }
        return u;
      }
      if (!t.measureText) return 10 * e.length;
      (t.save(), this.setContext(t, !0));
      var { width: c } = t.measureText(e);
      return (this.clearContext(t), t.restore(), c);
    }
    getInheritedAttribute(t) {
      var e = this;
      while (e instanceof bt && e.isFirstChild()) {
        var r = e.parent.getAttribute(t);
        if (r.hasValue(!0)) return r.getValue("0");
        e = e.parent;
      }
      return null;
    }
  }
  class wt extends bt {
    constructor(t, e, r) {
      (super(t, e, new.target === wt || r),
        (this.type = "tspan"),
        (this.text = this.children.length > 0 ? "" : this.getTextFromNode()));
    }
    getText() {
      return this.text;
    }
  }
  class St extends wt {
    constructor() {
      (super(...arguments), (this.type = "textNode"));
    }
  }
  class Pt extends vt {
    constructor() {
      (super(...arguments), (this.type = "svg"), (this.root = !1));
    }
    setContext(t) {
      var e,
        { document: r } = this,
        { screen: i, window: n } = r,
        s = t.canvas;
      if (
        (i.setDefaults(t),
        s.style &&
          "undefined" !== typeof t.font &&
          n &&
          "undefined" !== typeof n.getComputedStyle)
      ) {
        t.font = n.getComputedStyle(s).getPropertyValue("font");
        var a = new Z(r, "fontSize", pt.parse(t.font).fontSize);
        a.hasValue() &&
          ((r.rootEmSize = a.getPixels("y")), (r.emSize = r.rootEmSize));
      }
      (this.getAttribute("x").hasValue() ||
        this.getAttribute("x", !0).setValue(0),
        this.getAttribute("y").hasValue() ||
          this.getAttribute("y", !0).setValue(0));
      var { width: o, height: u } = i.viewPort;
      (this.getStyle("width").hasValue() ||
        this.getStyle("width", !0).setValue("100%"),
        this.getStyle("height").hasValue() ||
          this.getStyle("height", !0).setValue("100%"),
        this.getStyle("color").hasValue() ||
          this.getStyle("color", !0).setValue("black"));
      var h = this.getAttribute("refX"),
        l = this.getAttribute("refY"),
        c = this.getAttribute("viewBox"),
        f = c.hasValue() ? v(c.getString()) : null,
        g =
          !this.root &&
          "visible" !== this.getStyle("overflow").getValue("hidden"),
        p = 0,
        d = 0,
        y = 0,
        m = 0;
      (f && ((p = f[0]), (d = f[1])),
        this.root ||
          ((o = this.getStyle("width").getPixels("x")),
          (u = this.getStyle("height").getPixels("y")),
          "marker" === this.type && ((y = p), (m = d), (p = 0), (d = 0))),
        i.viewPort.setCurrent(o, u),
        !this.node ||
          (this.parent &&
            "foreignObject" !==
              (null === (e = this.node.parentNode) || void 0 === e
                ? void 0
                : e.nodeName)) ||
          !this.getStyle("transform", !1, !0).hasValue() ||
          this.getStyle("transform-origin", !1, !0).hasValue() ||
          this.getStyle("transform-origin", !0, !0).setValue("50% 50%"),
        super.setContext(t),
        t.translate(
          this.getAttribute("x").getPixels("x"),
          this.getAttribute("y").getPixels("y"),
        ),
        f && ((o = f[2]), (u = f[3])),
        r.setViewBox({
          ctx: t,
          aspectRatio: this.getAttribute("preserveAspectRatio").getString(),
          width: i.viewPort.width,
          desiredWidth: o,
          height: i.viewPort.height,
          desiredHeight: u,
          minX: p,
          minY: d,
          refX: h.getValue(),
          refY: l.getValue(),
          clip: g,
          clipX: y,
          clipY: m,
        }),
        f && (i.viewPort.removeCurrent(), i.viewPort.setCurrent(o, u)));
    }
    clearContext(t) {
      (super.clearContext(t), this.document.screen.viewPort.removeCurrent());
    }
    resize(t) {
      var e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t,
        r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = this.getAttribute("width", !0),
        n = this.getAttribute("height", !0),
        s = this.getAttribute("viewBox"),
        a = this.getAttribute("style"),
        o = i.getNumber(0),
        u = n.getNumber(0);
      if (r)
        if ("string" === typeof r)
          this.getAttribute("preserveAspectRatio", !0).setValue(r);
        else {
          var h = this.getAttribute("preserveAspectRatio");
          h.hasValue() &&
            h.setValue(h.getString().replace(/^\s*(\S.*\S)\s*$/, "$1"));
        }
      if (
        (i.setValue(t),
        n.setValue(e),
        s.hasValue() || s.setValue("0 0 ".concat(o || t, " ").concat(u || e)),
        a.hasValue())
      ) {
        var l = this.getStyle("width"),
          c = this.getStyle("height");
        (l.hasValue() && l.setValue("".concat(t, "px")),
          c.hasValue() && c.setValue("".concat(e, "px")));
      }
    }
  }
  class At extends mt {
    constructor() {
      (super(...arguments), (this.type = "rect"));
    }
    path(t) {
      var e = this.getAttribute("x").getPixels("x"),
        r = this.getAttribute("y").getPixels("y"),
        i = this.getStyle("width", !1, !0).getPixels("x"),
        n = this.getStyle("height", !1, !0).getPixels("y"),
        s = this.getAttribute("rx"),
        a = this.getAttribute("ry"),
        o = s.getPixels("x"),
        u = a.getPixels("y");
      if (
        (s.hasValue() && !a.hasValue() && (u = o),
        a.hasValue() && !s.hasValue() && (o = u),
        (o = Math.min(o, i / 2)),
        (u = Math.min(u, n / 2)),
        t)
      ) {
        var h = ((Math.sqrt(2) - 1) / 3) * 4;
        (t.beginPath(),
          n > 0 &&
            i > 0 &&
            (t.moveTo(e + o, r),
            t.lineTo(e + i - o, r),
            t.bezierCurveTo(
              e + i - o + h * o,
              r,
              e + i,
              r + u - h * u,
              e + i,
              r + u,
            ),
            t.lineTo(e + i, r + n - u),
            t.bezierCurveTo(
              e + i,
              r + n - u + h * u,
              e + i - o + h * o,
              r + n,
              e + i - o,
              r + n,
            ),
            t.lineTo(e + o, r + n),
            t.bezierCurveTo(
              e + o - h * o,
              r + n,
              e,
              r + n - u + h * u,
              e,
              r + n - u,
            ),
            t.lineTo(e, r + u),
            t.bezierCurveTo(e, r + u - h * u, e + o - h * o, r, e + o, r),
            t.closePath()));
      }
      return new dt(e, r, e + i, r + n);
    }
    getMarkers() {
      return null;
    }
  }
  class Ct extends mt {
    constructor() {
      (super(...arguments), (this.type = "circle"));
    }
    path(t) {
      var e = this.getAttribute("cx").getPixels("x"),
        r = this.getAttribute("cy").getPixels("y"),
        i = this.getAttribute("r").getPixels();
      return (
        t &&
          i > 0 &&
          (t.beginPath(), t.arc(e, r, i, 0, 2 * Math.PI, !1), t.closePath()),
        new dt(e - i, r - i, e + i, r + i)
      );
    }
    getMarkers() {
      return null;
    }
  }
  class Ot extends mt {
    constructor() {
      (super(...arguments), (this.type = "ellipse"));
    }
    path(t) {
      var e = ((Math.sqrt(2) - 1) / 3) * 4,
        r = this.getAttribute("rx").getPixels("x"),
        i = this.getAttribute("ry").getPixels("y"),
        n = this.getAttribute("cx").getPixels("x"),
        s = this.getAttribute("cy").getPixels("y");
      return (
        t &&
          r > 0 &&
          i > 0 &&
          (t.beginPath(),
          t.moveTo(n + r, s),
          t.bezierCurveTo(n + r, s + e * i, n + e * r, s + i, n, s + i),
          t.bezierCurveTo(n - e * r, s + i, n - r, s + e * i, n - r, s),
          t.bezierCurveTo(n - r, s - e * i, n - e * r, s - i, n, s - i),
          t.bezierCurveTo(n + e * r, s - i, n + r, s - e * i, n + r, s),
          t.closePath()),
        new dt(n - r, s - i, n + r, s + i)
      );
    }
    getMarkers() {
      return null;
    }
  }
  class Et extends mt {
    constructor() {
      (super(...arguments), (this.type = "line"));
    }
    getPoints() {
      return [
        new U(
          this.getAttribute("x1").getPixels("x"),
          this.getAttribute("y1").getPixels("y"),
        ),
        new U(
          this.getAttribute("x2").getPixels("x"),
          this.getAttribute("y2").getPixels("y"),
        ),
      ];
    }
    path(t) {
      var [{ x: e, y: r }, { x: i, y: n }] = this.getPoints();
      return (
        t && (t.beginPath(), t.moveTo(e, r), t.lineTo(i, n)),
        new dt(e, r, i, n)
      );
    }
    getMarkers() {
      var [t, e] = this.getPoints(),
        r = t.angleTo(e);
      return [
        [t, r],
        [e, r],
      ];
    }
  }
  class Tt extends mt {
    constructor(t, e, r) {
      (super(t, e, r),
        (this.type = "polyline"),
        (this.points = []),
        (this.points = U.parsePath(this.getAttribute("points").getString())));
    }
    path(t) {
      var { points: e } = this,
        [{ x: r, y: i }] = e,
        n = new dt(r, i);
      return (
        t && (t.beginPath(), t.moveTo(r, i)),
        e.forEach((e) => {
          var { x: r, y: i } = e;
          (n.addPoint(r, i), t && t.lineTo(r, i));
        }),
        n
      );
    }
    getMarkers() {
      var { points: t } = this,
        e = t.length - 1,
        r = [];
      return (
        t.forEach((i, n) => {
          n !== e && r.push([i, i.angleTo(t[n + 1])]);
        }),
        r.length > 0 && r.push([t[t.length - 1], r[r.length - 1][1]]),
        r
      );
    }
  }
  class Mt extends Tt {
    constructor() {
      (super(...arguments), (this.type = "polygon"));
    }
    path(t) {
      var e = super.path(t),
        [{ x: r, y: i }] = this.points;
      return (t && (t.lineTo(r, i), t.closePath()), e);
    }
  }
  class Vt extends ut {
    constructor() {
      (super(...arguments), (this.type = "pattern"));
    }
    createPattern(t, e, r) {
      var i = this.getStyle("width").getPixels("x", !0),
        n = this.getStyle("height").getPixels("y", !0),
        s = new Pt(this.document, null);
      ((s.attributes.viewBox = new Z(
        this.document,
        "viewBox",
        this.getAttribute("viewBox").getValue(),
      )),
        (s.attributes.width = new Z(
          this.document,
          "width",
          "".concat(i, "px"),
        )),
        (s.attributes.height = new Z(
          this.document,
          "height",
          "".concat(n, "px"),
        )),
        (s.attributes.transform = new Z(
          this.document,
          "transform",
          this.getAttribute("patternTransform").getValue(),
        )),
        (s.children = this.children));
      var a = this.document.createCanvas(i, n),
        o = a.getContext("2d"),
        u = this.getAttribute("x"),
        h = this.getAttribute("y");
      (u.hasValue() &&
        h.hasValue() &&
        o.translate(u.getPixels("x", !0), h.getPixels("y", !0)),
        r.hasValue()
          ? (this.styles["fill-opacity"] = r)
          : Reflect.deleteProperty(this.styles, "fill-opacity"));
      for (var l = -1; l <= 1; l++)
        for (var c = -1; c <= 1; c++)
          (o.save(),
            (s.attributes.x = new Z(this.document, "x", l * a.width)),
            (s.attributes.y = new Z(this.document, "y", c * a.height)),
            s.render(o),
            o.restore());
      var f = t.createPattern(a, "repeat");
      return f;
    }
  }
  class kt extends ut {
    constructor() {
      (super(...arguments), (this.type = "marker"));
    }
    render(t, e, r) {
      if (e) {
        var { x: i, y: n } = e,
          s = this.getAttribute("orient").getString("auto"),
          a = this.getAttribute("markerUnits").getString("strokeWidth");
        (t.translate(i, n),
          "auto" === s && t.rotate(r),
          "strokeWidth" === a && t.scale(t.lineWidth, t.lineWidth),
          t.save());
        var o = new Pt(this.document, null);
        ((o.type = this.type),
          (o.attributes.viewBox = new Z(
            this.document,
            "viewBox",
            this.getAttribute("viewBox").getValue(),
          )),
          (o.attributes.refX = new Z(
            this.document,
            "refX",
            this.getAttribute("refX").getValue(),
          )),
          (o.attributes.refY = new Z(
            this.document,
            "refY",
            this.getAttribute("refY").getValue(),
          )),
          (o.attributes.width = new Z(
            this.document,
            "width",
            this.getAttribute("markerWidth").getValue(),
          )),
          (o.attributes.height = new Z(
            this.document,
            "height",
            this.getAttribute("markerHeight").getValue(),
          )),
          (o.attributes.overflow = new Z(
            this.document,
            "overflow",
            this.getAttribute("overflow").getValue(),
          )),
          (o.attributes.fill = new Z(
            this.document,
            "fill",
            this.getAttribute("fill").getColor("black"),
          )),
          (o.attributes.stroke = new Z(
            this.document,
            "stroke",
            this.getAttribute("stroke").getValue("none"),
          )),
          (o.children = this.children),
          o.render(t),
          t.restore(),
          "strokeWidth" === a && t.scale(1 / t.lineWidth, 1 / t.lineWidth),
          "auto" === s && t.rotate(-r),
          t.translate(-i, -n));
      }
    }
  }
  class Lt extends ut {
    constructor() {
      (super(...arguments), (this.type = "defs"));
    }
    render() {}
  }
  class Nt extends vt {
    constructor() {
      (super(...arguments), (this.type = "g"));
    }
    getBoundingBox(t) {
      var e = new dt();
      return (
        this.children.forEach((r) => {
          e.addBoundingBox(r.getBoundingBox(t));
        }),
        e
      );
    }
  }
  class _t extends ut {
    constructor(t, e, r) {
      (super(t, e, r),
        (this.attributesToInherit = ["gradientUnits"]),
        (this.stops = []));
      var { stops: i, children: n } = this;
      n.forEach((t) => {
        "stop" === t.type && i.push(t);
      });
    }
    getGradientUnits() {
      return this.getAttribute("gradientUnits").getString("objectBoundingBox");
    }
    createGradient(t, e, r) {
      var i = this;
      this.getHrefAttribute().hasValue() &&
        ((i = this.getHrefAttribute().getDefinition()),
        this.inheritStopContainer(i));
      var { stops: n } = i,
        s = this.getGradient(t, e);
      if (!s) return this.addParentOpacity(r, n[n.length - 1].color);
      if (
        (n.forEach((t) => {
          s.addColorStop(t.offset, this.addParentOpacity(r, t.color));
        }),
        this.getAttribute("gradientTransform").hasValue())
      ) {
        var { document: a } = this,
          { MAX_VIRTUAL_PIXELS: o, viewPort: u } = a.screen,
          [h] = u.viewPorts,
          l = new At(a, null);
        ((l.attributes.x = new Z(a, "x", -o / 3)),
          (l.attributes.y = new Z(a, "y", -o / 3)),
          (l.attributes.width = new Z(a, "width", o)),
          (l.attributes.height = new Z(a, "height", o)));
        var c = new Nt(a, null);
        ((c.attributes.transform = new Z(
          a,
          "transform",
          this.getAttribute("gradientTransform").getValue(),
        )),
          (c.children = [l]));
        var f = new Pt(a, null);
        ((f.attributes.x = new Z(a, "x", 0)),
          (f.attributes.y = new Z(a, "y", 0)),
          (f.attributes.width = new Z(a, "width", h.width)),
          (f.attributes.height = new Z(a, "height", h.height)),
          (f.children = [c]));
        var g = a.createCanvas(h.width, h.height),
          p = g.getContext("2d");
        return (
          (p.fillStyle = s),
          f.render(p),
          p.createPattern(g, "no-repeat")
        );
      }
      return s;
    }
    inheritStopContainer(t) {
      this.attributesToInherit.forEach((e) => {
        !this.getAttribute(e).hasValue() &&
          t.getAttribute(e).hasValue() &&
          this.getAttribute(e, !0).setValue(t.getAttribute(e).getValue());
      });
    }
    addParentOpacity(t, e) {
      if (t.hasValue()) {
        var r = new Z(this.document, "color", e);
        return r.addOpacity(t).getColor();
      }
      return e;
    }
  }
  class jt extends _t {
    constructor(t, e, r) {
      (super(t, e, r),
        (this.type = "linearGradient"),
        this.attributesToInherit.push("x1", "y1", "x2", "y2"));
    }
    getGradient(t, e) {
      var r = "objectBoundingBox" === this.getGradientUnits(),
        i = r ? e.getBoundingBox(t) : null;
      if (r && !i) return null;
      this.getAttribute("x1").hasValue() ||
        this.getAttribute("y1").hasValue() ||
        this.getAttribute("x2").hasValue() ||
        this.getAttribute("y2").hasValue() ||
        (this.getAttribute("x1", !0).setValue(0),
        this.getAttribute("y1", !0).setValue(0),
        this.getAttribute("x2", !0).setValue(1),
        this.getAttribute("y2", !0).setValue(0));
      var n = r
          ? i.x + i.width * this.getAttribute("x1").getNumber()
          : this.getAttribute("x1").getPixels("x"),
        s = r
          ? i.y + i.height * this.getAttribute("y1").getNumber()
          : this.getAttribute("y1").getPixels("y"),
        a = r
          ? i.x + i.width * this.getAttribute("x2").getNumber()
          : this.getAttribute("x2").getPixels("x"),
        o = r
          ? i.y + i.height * this.getAttribute("y2").getNumber()
          : this.getAttribute("y2").getPixels("y");
      return n === a && s === o ? null : t.createLinearGradient(n, s, a, o);
    }
  }
  class It extends _t {
    constructor(t, e, r) {
      (super(t, e, r),
        (this.type = "radialGradient"),
        this.attributesToInherit.push("cx", "cy", "r", "fx", "fy", "fr"));
    }
    getGradient(t, e) {
      var r = "objectBoundingBox" === this.getGradientUnits(),
        i = e.getBoundingBox(t);
      if (r && !i) return null;
      (this.getAttribute("cx").hasValue() ||
        this.getAttribute("cx", !0).setValue("50%"),
        this.getAttribute("cy").hasValue() ||
          this.getAttribute("cy", !0).setValue("50%"),
        this.getAttribute("r").hasValue() ||
          this.getAttribute("r", !0).setValue("50%"));
      var n = r
          ? i.x + i.width * this.getAttribute("cx").getNumber()
          : this.getAttribute("cx").getPixels("x"),
        s = r
          ? i.y + i.height * this.getAttribute("cy").getNumber()
          : this.getAttribute("cy").getPixels("y"),
        a = n,
        o = s;
      (this.getAttribute("fx").hasValue() &&
        (a = r
          ? i.x + i.width * this.getAttribute("fx").getNumber()
          : this.getAttribute("fx").getPixels("x")),
        this.getAttribute("fy").hasValue() &&
          (o = r
            ? i.y + i.height * this.getAttribute("fy").getNumber()
            : this.getAttribute("fy").getPixels("y")));
      var u = r
          ? ((i.width + i.height) / 2) * this.getAttribute("r").getNumber()
          : this.getAttribute("r").getPixels(),
        h = this.getAttribute("fr").getPixels();
      return t.createRadialGradient(a, o, h, n, s, u);
    }
  }
  class Dt extends ut {
    constructor(t, e, r) {
      (super(t, e, r), (this.type = "stop"));
      var i = Math.max(0, Math.min(1, this.getAttribute("offset").getNumber())),
        n = this.getStyle("stop-opacity"),
        s = this.getStyle("stop-color", !0);
      ("" === s.getString() && s.setValue("#000"),
        n.hasValue() && (s = s.addOpacity(n)),
        (this.offset = i),
        (this.color = s.getColor()));
    }
  }
  class Bt extends ut {
    constructor(t, e, r) {
      (super(t, e, r),
        (this.type = "animate"),
        (this.duration = 0),
        (this.initialValue = null),
        (this.initialUnits = ""),
        (this.removed = !1),
        (this.frozen = !1),
        t.screen.animations.push(this),
        (this.begin = this.getAttribute("begin").getMilliseconds()),
        (this.maxDuration =
          this.begin + this.getAttribute("dur").getMilliseconds()),
        (this.from = this.getAttribute("from")),
        (this.to = this.getAttribute("to")),
        (this.values = new Z(t, "values", null)));
      var i = this.getAttribute("values");
      i.hasValue() && this.values.setValue(i.getString().split(";"));
    }
    getProperty() {
      var t = this.getAttribute("attributeType").getString(),
        e = this.getAttribute("attributeName").getString();
      return "CSS" === t
        ? this.parent.getStyle(e, !0)
        : this.parent.getAttribute(e, !0);
    }
    calcValue() {
      var { initialUnits: t } = this,
        { progress: e, from: r, to: i } = this.getProgress(),
        n = r.getNumber() + (i.getNumber() - r.getNumber()) * e;
      return ("%" === t && (n *= 100), "".concat(n).concat(t));
    }
    update(t) {
      var { parent: e } = this,
        r = this.getProperty();
      if (
        (this.initialValue ||
          ((this.initialValue = r.getString()),
          (this.initialUnits = r.getUnits())),
        this.duration > this.maxDuration)
      ) {
        var i = this.getAttribute("fill").getString("remove");
        if (
          "indefinite" === this.getAttribute("repeatCount").getString() ||
          "indefinite" === this.getAttribute("repeatDur").getString()
        )
          this.duration = 0;
        else if ("freeze" !== i || this.frozen) {
          if ("remove" === i && !this.removed)
            return (
              (this.removed = !0),
              r.setValue(
                e.animationFrozen ? e.animationFrozenValue : this.initialValue,
              ),
              !0
            );
        } else
          ((this.frozen = !0),
            (e.animationFrozen = !0),
            (e.animationFrozenValue = r.getString()));
        return !1;
      }
      this.duration += t;
      var n = !1;
      if (this.begin < this.duration) {
        var s = this.calcValue(),
          a = this.getAttribute("type");
        if (a.hasValue()) {
          var o = a.getString();
          s = "".concat(o, "(").concat(s, ")");
        }
        (r.setValue(s), (n = !0));
      }
      return n;
    }
    getProgress() {
      var { document: t, values: e } = this,
        r = {
          progress:
            (this.duration - this.begin) / (this.maxDuration - this.begin),
        };
      if (e.hasValue()) {
        var i = r.progress * (e.getValue().length - 1),
          n = Math.floor(i),
          s = Math.ceil(i);
        ((r.from = new Z(t, "from", parseFloat(e.getValue()[n]))),
          (r.to = new Z(t, "to", parseFloat(e.getValue()[s]))),
          (r.progress = (i - n) / (s - n)));
      } else ((r.from = this.from), (r.to = this.to));
      return r;
    }
  }
  class Rt extends Bt {
    constructor() {
      (super(...arguments), (this.type = "animateColor"));
    }
    calcValue() {
      var { progress: t, from: e, to: r } = this.getProgress(),
        i = new a(e.getColor()),
        n = new a(r.getColor());
      if (i.ok && n.ok) {
        var s = i.r + (n.r - i.r) * t,
          o = i.g + (n.g - i.g) * t,
          u = i.b + (n.b - i.b) * t;
        return "rgb("
          .concat(Math.floor(s), ", ")
          .concat(Math.floor(o), ", ")
          .concat(Math.floor(u), ")");
      }
      return this.getAttribute("from").getColor();
    }
  }
  class zt extends Bt {
    constructor() {
      (super(...arguments), (this.type = "animateTransform"));
    }
    calcValue() {
      var { progress: t, from: e, to: r } = this.getProgress(),
        i = v(e.getString()),
        n = v(r.getString()),
        s = i
          .map((e, r) => {
            var i = n[r];
            return e + (i - e) * t;
          })
          .join(" ");
      return s;
    }
  }
  class Ft extends ut {
    constructor(t, e, r) {
      (super(t, e, r),
        (this.type = "font"),
        (this.glyphs = {}),
        (this.horizAdvX = this.getAttribute("horiz-adv-x").getNumber()));
      var { definitions: i } = t,
        { children: n } = this;
      for (var s of n)
        switch (s.type) {
          case "font-face":
            this.fontFace = s;
            var a = s.getStyle("font-family");
            a.hasValue() && (i[a.getString()] = this);
            break;
          case "missing-glyph":
            this.missingGlyph = s;
            break;
          case "glyph":
            var o = s;
            o.arabicForm
              ? ((this.isRTL = !0),
                (this.isArabic = !0),
                "undefined" === typeof this.glyphs[o.unicode] &&
                  (this.glyphs[o.unicode] = {}),
                (this.glyphs[o.unicode][o.arabicForm] = o))
              : (this.glyphs[o.unicode] = o);
            break;
        }
    }
    render() {}
  }
  class Zt extends ut {
    constructor(t, e, r) {
      (super(t, e, r),
        (this.type = "font-face"),
        (this.ascent = this.getAttribute("ascent").getNumber()),
        (this.descent = this.getAttribute("descent").getNumber()),
        (this.unitsPerEm = this.getAttribute("units-per-em").getNumber()));
    }
  }
  class Xt extends mt {
    constructor() {
      (super(...arguments),
        (this.type = "missing-glyph"),
        (this.horizAdvX = 0));
    }
  }
  class Ut extends bt {
    constructor() {
      (super(...arguments), (this.type = "tref"));
    }
    getText() {
      var t = this.getHrefAttribute().getDefinition();
      if (t) {
        var e = t.children[0];
        if (e) return e.getText();
      }
      return "";
    }
  }
  class Yt extends bt {
    constructor(t, e, r) {
      (super(t, e, r), (this.type = "a"));
      var { childNodes: i } = e,
        n = i[0],
        s = i.length > 0 && Array.from(i).every((t) => 3 === t.nodeType);
      ((this.hasText = s), (this.text = s ? this.getTextFromNode(n) : ""));
    }
    getText() {
      return this.text;
    }
    renderChildren(t) {
      if (this.hasText) {
        super.renderChildren(t);
        var { document: e, x: r, y: i } = this,
          { mouse: n } = e.screen,
          s = new Z(e, "fontSize", pt.parse(e.ctx.font).fontSize);
        n.isWorking() &&
          n.checkBoundingBox(
            this,
            new dt(r, i - s.getPixels("y"), r + this.measureText(t), i),
          );
      } else if (this.children.length > 0) {
        var a = new Nt(this.document, null);
        ((a.children = this.children), (a.parent = this), a.render(t));
      }
    }
    onClick() {
      var { window: t } = this.document;
      t && t.open(this.getHrefAttribute().getString());
    }
    onMouseMove() {
      var t = this.document.ctx;
      t.canvas.style.cursor = "pointer";
    }
  }
  function Gt(t, e) {
    var r = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(t);
      (e &&
        (i = i.filter(function (e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable;
        })),
        r.push.apply(r, i));
    }
    return r;
  }
  function Ht(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = null != arguments[e] ? arguments[e] : {};
      e % 2
        ? Gt(Object(r), !0).forEach(function (e) {
            (0, n.Z)(t, e, r[e]);
          })
        : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
          : Gt(Object(r)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(r, e),
              );
            });
    }
    return t;
  }
  class Wt extends bt {
    constructor(t, e, r) {
      (super(t, e, r),
        (this.type = "textPath"),
        (this.textWidth = 0),
        (this.textHeight = 0),
        (this.pathLength = -1),
        (this.glyphInfo = null),
        (this.letterSpacingCache = []),
        (this.measuresCache = new Map([["", 0]])));
      var i = this.getHrefAttribute().getDefinition();
      ((this.text = this.getTextFromNode()),
        (this.dataArray = this.parsePathData(i)));
    }
    getText() {
      return this.text;
    }
    path(t) {
      var { dataArray: e } = this;
      (t && t.beginPath(),
        e.forEach((e) => {
          var { type: r, points: i } = e;
          switch (r) {
            case yt.LINE_TO:
              t && t.lineTo(i[0], i[1]);
              break;
            case yt.MOVE_TO:
              t && t.moveTo(i[0], i[1]);
              break;
            case yt.CURVE_TO:
              t && t.bezierCurveTo(i[0], i[1], i[2], i[3], i[4], i[5]);
              break;
            case yt.QUAD_TO:
              t && t.quadraticCurveTo(i[0], i[1], i[2], i[3]);
              break;
            case yt.ARC:
              var [n, s, a, o, u, h, l, c] = i,
                f = a > o ? a : o,
                g = a > o ? 1 : a / o,
                p = a > o ? o / a : 1;
              t &&
                (t.translate(n, s),
                t.rotate(l),
                t.scale(g, p),
                t.arc(0, 0, f, u, u + h, Boolean(1 - c)),
                t.scale(1 / g, 1 / p),
                t.rotate(-l),
                t.translate(-n, -s));
              break;
            case yt.CLOSE_PATH:
              t && t.closePath();
              break;
          }
        }));
    }
    renderChildren(t) {
      (this.setTextData(t), t.save());
      var e = this.parent.getStyle("text-decoration").getString(),
        r = this.getFontSize(),
        { glyphInfo: i } = this,
        n = t.fillStyle;
      ("underline" === e && t.beginPath(),
        i.forEach((i, n) => {
          var { p0: s, p1: a, rotation: o, text: u } = i;
          (t.save(),
            t.translate(s.x, s.y),
            t.rotate(o),
            t.fillStyle && t.fillText(u, 0, 0),
            t.strokeStyle && t.strokeText(u, 0, 0),
            t.restore(),
            "underline" === e &&
              (0 === n && t.moveTo(s.x, s.y + r / 8),
              t.lineTo(a.x, a.y + r / 5)));
        }),
        "underline" === e &&
          ((t.lineWidth = r / 20),
          (t.strokeStyle = n),
          t.stroke(),
          t.closePath()),
        t.restore());
    }
    getLetterSpacingAt() {
      var t =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      return this.letterSpacingCache[t] || 0;
    }
    findSegmentToFitChar(t, e, r, i, n, s, a, o, u) {
      var h = s,
        l = this.measureText(t, o);
      (" " === o && "justify" === e && r < i && (l += (i - r) / n),
        u > -1 && (h += this.getLetterSpacingAt(u)));
      var c = this.textHeight / 20,
        f = this.getEquidistantPointOnPath(h, c, 0),
        g = this.getEquidistantPointOnPath(h + l, c, 0),
        p = { p0: f, p1: g },
        d = f && g ? Math.atan2(g.y - f.y, g.x - f.x) : 0;
      if (a) {
        var y = Math.cos(Math.PI / 2 + d) * a,
          v = Math.cos(-d) * a;
        ((p.p0 = Ht(Ht({}, f), {}, { x: f.x + y, y: f.y + v })),
          (p.p1 = Ht(Ht({}, g), {}, { x: g.x + y, y: g.y + v })));
      }
      return ((h += l), { offset: h, segment: p, rotation: d });
    }
    measureText(t, e) {
      var { measuresCache: r } = this,
        i = e || this.getText();
      if (r.has(i)) return r.get(i);
      var n = this.measureTargetText(t, i);
      return (r.set(i, n), n);
    }
    setTextData(t) {
      if (!this.glyphInfo) {
        var e = this.getText(),
          r = e.split(""),
          i = e.split(" ").length - 1,
          n = this.parent
            .getAttribute("dx")
            .split()
            .map((t) => t.getPixels("x")),
          s = this.parent.getAttribute("dy").getPixels("y"),
          a = this.parent.getStyle("text-anchor").getString("start"),
          o = this.getStyle("letter-spacing"),
          u = this.parent.getStyle("letter-spacing"),
          h = 0;
        o.hasValue() && "inherit" !== o.getValue()
          ? o.hasValue() &&
            "initial" !== o.getValue() &&
            "unset" !== o.getValue() &&
            (h = o.getPixels())
          : (h = u.getPixels());
        var l = [],
          c = e.length;
        this.letterSpacingCache = l;
        for (var f = 0; f < c; f++)
          l.push("undefined" !== typeof n[f] ? n[f] : h);
        var g = l.reduce((t, e, r) => (0 === r ? 0 : t + e || 0), 0),
          p = this.measureText(t),
          d = Math.max(p + g, 0);
        ((this.textWidth = p),
          (this.textHeight = this.getFontSize()),
          (this.glyphInfo = []));
        var y = this.getPathLength(),
          v = this.getStyle("startOffset").getNumber(0) * y,
          m = 0;
        (("middle" !== a && "center" !== a) || (m = -d / 2),
          ("end" !== a && "right" !== a) || (m = -d),
          (m += v),
          r.forEach((e, n) => {
            var {
              offset: o,
              segment: u,
              rotation: h,
            } = this.findSegmentToFitChar(t, a, d, y, i, m, s, e, n);
            ((m = o),
              u.p0 &&
                u.p1 &&
                this.glyphInfo.push({
                  text: r[n],
                  p0: u.p0,
                  p1: u.p1,
                  rotation: h,
                }));
          }));
      }
    }
    parsePathData(t) {
      if (((this.pathLength = -1), !t)) return [];
      var e = [],
        { pathParser: r } = t;
      r.reset();
      while (!r.isEnd()) {
        var { current: i } = r,
          n = i ? i.x : 0,
          s = i ? i.y : 0,
          a = r.next(),
          o = a.type,
          u = [];
        switch (a.type) {
          case yt.MOVE_TO:
            this.pathM(r, u);
            break;
          case yt.LINE_TO:
            o = this.pathL(r, u);
            break;
          case yt.HORIZ_LINE_TO:
            o = this.pathH(r, u);
            break;
          case yt.VERT_LINE_TO:
            o = this.pathV(r, u);
            break;
          case yt.CURVE_TO:
            this.pathC(r, u);
            break;
          case yt.SMOOTH_CURVE_TO:
            o = this.pathS(r, u);
            break;
          case yt.QUAD_TO:
            this.pathQ(r, u);
            break;
          case yt.SMOOTH_QUAD_TO:
            o = this.pathT(r, u);
            break;
          case yt.ARC:
            u = this.pathA(r);
            break;
          case yt.CLOSE_PATH:
            mt.pathZ(r);
            break;
        }
        a.type !== yt.CLOSE_PATH
          ? e.push({
              type: o,
              points: u,
              start: { x: n, y: s },
              pathLength: this.calcLength(n, s, o, u),
            })
          : e.push({ type: yt.CLOSE_PATH, points: [], pathLength: 0 });
      }
      return e;
    }
    pathM(t, e) {
      var { x: r, y: i } = mt.pathM(t).point;
      e.push(r, i);
    }
    pathL(t, e) {
      var { x: r, y: i } = mt.pathL(t).point;
      return (e.push(r, i), yt.LINE_TO);
    }
    pathH(t, e) {
      var { x: r, y: i } = mt.pathH(t).point;
      return (e.push(r, i), yt.LINE_TO);
    }
    pathV(t, e) {
      var { x: r, y: i } = mt.pathV(t).point;
      return (e.push(r, i), yt.LINE_TO);
    }
    pathC(t, e) {
      var { point: r, controlPoint: i, currentPoint: n } = mt.pathC(t);
      e.push(r.x, r.y, i.x, i.y, n.x, n.y);
    }
    pathS(t, e) {
      var { point: r, controlPoint: i, currentPoint: n } = mt.pathS(t);
      return (e.push(r.x, r.y, i.x, i.y, n.x, n.y), yt.CURVE_TO);
    }
    pathQ(t, e) {
      var { controlPoint: r, currentPoint: i } = mt.pathQ(t);
      e.push(r.x, r.y, i.x, i.y);
    }
    pathT(t, e) {
      var { controlPoint: r, currentPoint: i } = mt.pathT(t);
      return (e.push(r.x, r.y, i.x, i.y), yt.QUAD_TO);
    }
    pathA(t) {
      var {
        rX: e,
        rY: r,
        sweepFlag: i,
        xAxisRotation: n,
        centp: s,
        a1: a,
        ad: o,
      } = mt.pathA(t);
      return (
        0 === i && o > 0 && (o -= 2 * Math.PI),
        1 === i && o < 0 && (o += 2 * Math.PI),
        [s.x, s.y, e, r, a, o, n, i]
      );
    }
    calcLength(t, e, r, i) {
      var n = 0,
        s = null,
        a = null,
        o = 0;
      switch (r) {
        case yt.LINE_TO:
          return this.getLineLength(t, e, i[0], i[1]);
        case yt.CURVE_TO:
          for (
            n = 0,
              s = this.getPointOnCubicBezier(
                0,
                t,
                e,
                i[0],
                i[1],
                i[2],
                i[3],
                i[4],
                i[5],
              ),
              o = 0.01;
            o <= 1;
            o += 0.01
          )
            ((a = this.getPointOnCubicBezier(
              o,
              t,
              e,
              i[0],
              i[1],
              i[2],
              i[3],
              i[4],
              i[5],
            )),
              (n += this.getLineLength(s.x, s.y, a.x, a.y)),
              (s = a));
          return n;
        case yt.QUAD_TO:
          for (
            n = 0,
              s = this.getPointOnQuadraticBezier(
                0,
                t,
                e,
                i[0],
                i[1],
                i[2],
                i[3],
              ),
              o = 0.01;
            o <= 1;
            o += 0.01
          )
            ((a = this.getPointOnQuadraticBezier(
              o,
              t,
              e,
              i[0],
              i[1],
              i[2],
              i[3],
            )),
              (n += this.getLineLength(s.x, s.y, a.x, a.y)),
              (s = a));
          return n;
        case yt.ARC:
          n = 0;
          var u = i[4],
            h = i[5],
            l = i[4] + h,
            c = Math.PI / 180;
          if (
            (Math.abs(u - l) < c && (c = Math.abs(u - l)),
            (s = this.getPointOnEllipticalArc(i[0], i[1], i[2], i[3], u, 0)),
            h < 0)
          )
            for (o = u - c; o > l; o -= c)
              ((a = this.getPointOnEllipticalArc(i[0], i[1], i[2], i[3], o, 0)),
                (n += this.getLineLength(s.x, s.y, a.x, a.y)),
                (s = a));
          else
            for (o = u + c; o < l; o += c)
              ((a = this.getPointOnEllipticalArc(i[0], i[1], i[2], i[3], o, 0)),
                (n += this.getLineLength(s.x, s.y, a.x, a.y)),
                (s = a));
          return (
            (a = this.getPointOnEllipticalArc(i[0], i[1], i[2], i[3], l, 0)),
            (n += this.getLineLength(s.x, s.y, a.x, a.y)),
            n
          );
      }
      return 0;
    }
    getPointOnLine(t, e, r, i, n) {
      var s =
          arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : e,
        a = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : r,
        o = (n - r) / (i - e + k),
        u = Math.sqrt((t * t) / (1 + o * o));
      i < e && (u *= -1);
      var h = o * u,
        l = null;
      if (i === e) l = { x: s, y: a + h };
      else if ((a - r) / (s - e + k) === o) l = { x: s + u, y: a + h };
      else {
        var c = 0,
          f = 0,
          g = this.getLineLength(e, r, i, n);
        if (g < k) return null;
        var p = (s - e) * (i - e) + (a - r) * (n - r);
        ((p /= g * g), (c = e + p * (i - e)), (f = r + p * (n - r)));
        var d = this.getLineLength(s, a, c, f),
          y = Math.sqrt(t * t - d * d);
        ((u = Math.sqrt((y * y) / (1 + o * o))),
          i < e && (u *= -1),
          (h = o * u),
          (l = { x: c + u, y: f + h }));
      }
      return l;
    }
    getPointOnPath(t) {
      var e = this.getPathLength(),
        r = 0,
        i = null;
      if (t < -5e-5 || t - 5e-5 > e) return null;
      var { dataArray: n } = this;
      for (var s of n) {
        if (!s || !(s.pathLength < 5e-5 || r + s.pathLength + 5e-5 < t)) {
          var a = t - r,
            o = 0;
          switch (s.type) {
            case yt.LINE_TO:
              i = this.getPointOnLine(
                a,
                s.start.x,
                s.start.y,
                s.points[0],
                s.points[1],
                s.start.x,
                s.start.y,
              );
              break;
            case yt.ARC:
              var u = s.points[4],
                h = s.points[5],
                l = s.points[4] + h;
              if (
                ((o = u + (a / s.pathLength) * h),
                (h < 0 && o < l) || (h >= 0 && o > l))
              )
                break;
              i = this.getPointOnEllipticalArc(
                s.points[0],
                s.points[1],
                s.points[2],
                s.points[3],
                o,
                s.points[6],
              );
              break;
            case yt.CURVE_TO:
              ((o = a / s.pathLength),
                o > 1 && (o = 1),
                (i = this.getPointOnCubicBezier(
                  o,
                  s.start.x,
                  s.start.y,
                  s.points[0],
                  s.points[1],
                  s.points[2],
                  s.points[3],
                  s.points[4],
                  s.points[5],
                )));
              break;
            case yt.QUAD_TO:
              ((o = a / s.pathLength),
                o > 1 && (o = 1),
                (i = this.getPointOnQuadraticBezier(
                  o,
                  s.start.x,
                  s.start.y,
                  s.points[0],
                  s.points[1],
                  s.points[2],
                  s.points[3],
                )));
              break;
          }
          if (i) return i;
          break;
        }
        r += s.pathLength;
      }
      return null;
    }
    getLineLength(t, e, r, i) {
      return Math.sqrt((r - t) * (r - t) + (i - e) * (i - e));
    }
    getPathLength() {
      return (
        -1 === this.pathLength &&
          (this.pathLength = this.dataArray.reduce(
            (t, e) => (e.pathLength > 0 ? t + e.pathLength : t),
            0,
          )),
        this.pathLength
      );
    }
    getPointOnCubicBezier(t, e, r, i, n, s, a, o, u) {
      var h = o * j(t) + s * I(t) + i * D(t) + e * B(t),
        l = u * j(t) + a * I(t) + n * D(t) + r * B(t);
      return { x: h, y: l };
    }
    getPointOnQuadraticBezier(t, e, r, i, n, s, a) {
      var o = s * R(t) + i * z(t) + e * F(t),
        u = a * R(t) + n * z(t) + r * F(t);
      return { x: o, y: u };
    }
    getPointOnEllipticalArc(t, e, r, i, n, s) {
      var a = Math.cos(s),
        o = Math.sin(s),
        u = { x: r * Math.cos(n), y: i * Math.sin(n) };
      return { x: t + (u.x * a - u.y * o), y: e + (u.x * o + u.y * a) };
    }
    buildEquidistantCache(t, e) {
      var r = this.getPathLength(),
        i = e || 0.25,
        n = t || r / 100;
      if (
        !this.equidistantCache ||
        this.equidistantCache.step !== n ||
        this.equidistantCache.precision !== i
      ) {
        this.equidistantCache = { step: n, precision: i, points: [] };
        for (var s = 0, a = 0; a <= r; a += i) {
          var o = this.getPointOnPath(a),
            u = this.getPointOnPath(a + i);
          o &&
            u &&
            ((s += this.getLineLength(o.x, o.y, u.x, u.y)),
            s >= n &&
              (this.equidistantCache.points.push({
                x: o.x,
                y: o.y,
                distance: a,
              }),
              (s -= n)));
        }
      }
    }
    getEquidistantPointOnPath(t, e, r) {
      if (
        (this.buildEquidistantCache(e, r),
        t < 0 || t - this.getPathLength() > 5e-5)
      )
        return null;
      var i = Math.round(
        (t / this.getPathLength()) * (this.equidistantCache.points.length - 1),
      );
      return this.equidistantCache.points[i] || null;
    }
  }
  var qt =
    /^\s*data:(([^/,;]+\/[^/,;]+)(?:;([^,;=]+=[^,;=]+))?)?(?:;(base64))?,(.*)$/i;
  class $t extends vt {
    constructor(t, e, r) {
      (super(t, e, r), (this.type = "image"), (this.loaded = !1));
      var i = this.getHrefAttribute().getString();
      if (i) {
        var n = i.endsWith(".svg") || /^\s*data:image\/svg\+xml/i.test(i);
        (t.images.push(this),
          n ? this.loadSvg(i) : this.loadImage(i),
          (this.isSvg = n));
      }
    }
    loadImage(t) {
      var e = this;
      return (0, i.Z)(function* () {
        try {
          var r = yield e.document.createImage(t);
          e.image = r;
        } catch (i) {
          l.error('Error while loading image "'.concat(t, '":'), i);
        }
        e.loaded = !0;
      })();
    }
    loadSvg(t) {
      var e = this;
      return (0, i.Z)(function* () {
        var r = qt.exec(t);
        if (r) {
          var i = r[5];
          "base64" === r[4]
            ? (e.image = atob(i))
            : (e.image = decodeURIComponent(i));
        } else
          try {
            var n = yield e.document.fetch(t),
              s = yield n.text();
            e.image = s;
          } catch (a) {
            l.error('Error while loading image "'.concat(t, '":'), a);
          }
        e.loaded = !0;
      })();
    }
    renderChildren(t) {
      var { document: e, image: r, loaded: i } = this,
        n = this.getAttribute("x").getPixels("x"),
        s = this.getAttribute("y").getPixels("y"),
        a = this.getStyle("width").getPixels("x"),
        o = this.getStyle("height").getPixels("y");
      if (i && r && a && o) {
        if ((t.save(), t.translate(n, s), this.isSvg)) {
          var u = e.canvg.forkString(t, this.image, {
            ignoreMouse: !0,
            ignoreAnimation: !0,
            ignoreDimensions: !0,
            ignoreClear: !0,
            offsetX: 0,
            offsetY: 0,
            scaleWidth: a,
            scaleHeight: o,
          });
          ((u.document.documentElement.parent = this), u.render());
        } else {
          var h = this.image;
          (e.setViewBox({
            ctx: t,
            aspectRatio: this.getAttribute("preserveAspectRatio").getString(),
            width: a,
            desiredWidth: h.width,
            height: o,
            desiredHeight: h.height,
          }),
            this.loaded &&
              ("undefined" === typeof h.complete || h.complete) &&
              t.drawImage(h, 0, 0));
        }
        t.restore();
      }
    }
    getBoundingBox() {
      var t = this.getAttribute("x").getPixels("x"),
        e = this.getAttribute("y").getPixels("y"),
        r = this.getStyle("width").getPixels("x"),
        i = this.getStyle("height").getPixels("y");
      return new dt(t, e, t + r, e + i);
    }
  }
  class Qt extends vt {
    constructor() {
      (super(...arguments), (this.type = "symbol"));
    }
    render(t) {}
  }
  class Jt {
    constructor(t) {
      ((this.document = t), (this.loaded = !1), t.fonts.push(this));
    }
    load(t, e) {
      var r = this;
      return (0, i.Z)(function* () {
        try {
          var { document: i } = r,
            n = yield i.canvg.parser.load(e),
            s = n.getElementsByTagName("font");
          Array.from(s).forEach((e) => {
            var r = i.createElement(e);
            i.definitions[t] = r;
          });
        } catch (a) {
          l.error('Error while loading font "'.concat(e, '":'), a);
        }
        r.loaded = !0;
      })();
    }
  }
  class Kt extends ut {
    constructor(t, e, r) {
      (super(t, e, r), (this.type = "style"));
      var i = p(
          Array.from(e.childNodes)
            .map((t) => t.textContent)
            .join("")
            .replace(
              /(\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*+\/)|(^[\s]*\/\/.*)/gm,
              "",
            )
            .replace(/@import.*;/g, ""),
        ),
        n = i.split("}");
      n.forEach((e) => {
        var r = e.trim();
        if (r) {
          var i = r.split("{"),
            n = i[0].split(","),
            s = i[1].split(";");
          n.forEach((e) => {
            var r = e.trim();
            if (r) {
              var i = t.styles[r] || {};
              if (
                (s.forEach((e) => {
                  var r = e.indexOf(":"),
                    n = e.substr(0, r).trim(),
                    s = e.substr(r + 1, e.length - r).trim();
                  n && s && (i[n] = new Z(t, n, s));
                }),
                (t.styles[r] = i),
                (t.stylesSpecificity[r] = V(r)),
                "@font-face" === r)
              ) {
                var n = i["font-family"].getString().replace(/"|'/g, ""),
                  a = i.src.getString().split(",");
                a.forEach((e) => {
                  if (e.indexOf('format("svg")') > 0) {
                    var r = b(e);
                    r && new Jt(t).load(n, r);
                  }
                });
              }
            }
          });
        }
      });
    }
  }
  Kt.parseExternalUrl = b;
  class te extends vt {
    constructor() {
      (super(...arguments), (this.type = "use"));
    }
    setContext(t) {
      super.setContext(t);
      var e = this.getAttribute("x"),
        r = this.getAttribute("y");
      (e.hasValue() && t.translate(e.getPixels("x"), 0),
        r.hasValue() && t.translate(0, r.getPixels("y")));
    }
    path(t) {
      var { element: e } = this;
      e && e.path(t);
    }
    renderChildren(t) {
      var { document: e, element: r } = this;
      if (r) {
        var i = r;
        if (
          ("symbol" === r.type &&
            ((i = new Pt(e, null)),
            (i.attributes.viewBox = new Z(
              e,
              "viewBox",
              r.getAttribute("viewBox").getString(),
            )),
            (i.attributes.preserveAspectRatio = new Z(
              e,
              "preserveAspectRatio",
              r.getAttribute("preserveAspectRatio").getString(),
            )),
            (i.attributes.overflow = new Z(
              e,
              "overflow",
              r.getAttribute("overflow").getString(),
            )),
            (i.children = r.children),
            (r.styles.opacity = new Z(e, "opacity", this.calculateOpacity()))),
          "svg" === i.type)
        ) {
          var n = this.getStyle("width", !1, !0),
            s = this.getStyle("height", !1, !0);
          (n.hasValue() &&
            (i.attributes.width = new Z(e, "width", n.getString())),
            s.hasValue() &&
              (i.attributes.height = new Z(e, "height", s.getString())));
        }
        var a = i.parent;
        ((i.parent = this), i.render(t), (i.parent = a));
      }
    }
    getBoundingBox(t) {
      var { element: e } = this;
      return e ? e.getBoundingBox(t) : null;
    }
    elementTransform() {
      var { document: t, element: e } = this;
      return ot.fromElement(t, e);
    }
    get element() {
      return (
        this.cachedElement ||
          (this.cachedElement = this.getHrefAttribute().getDefinition()),
        this.cachedElement
      );
    }
  }
  function ee(t, e, r, i, n, s) {
    return t[r * i * 4 + 4 * e + s];
  }
  function re(t, e, r, i, n, s, a) {
    t[r * i * 4 + 4 * e + s] = a;
  }
  function ie(t, e, r) {
    var i = t[e];
    return i * r;
  }
  function ne(t, e, r, i) {
    return e + Math.cos(t) * r + Math.sin(t) * i;
  }
  class se extends ut {
    constructor(t, e, r) {
      (super(t, e, r), (this.type = "feColorMatrix"));
      var i = v(this.getAttribute("values").getString());
      switch (this.getAttribute("type").getString("matrix")) {
        case "saturate":
          var n = i[0];
          i = [
            0.213 + 0.787 * n,
            0.715 - 0.715 * n,
            0.072 - 0.072 * n,
            0,
            0,
            0.213 - 0.213 * n,
            0.715 + 0.285 * n,
            0.072 - 0.072 * n,
            0,
            0,
            0.213 - 0.213 * n,
            0.715 - 0.715 * n,
            0.072 + 0.928 * n,
            0,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            0,
            1,
          ];
          break;
        case "hueRotate":
          var s = (i[0] * Math.PI) / 180;
          i = [
            ne(s, 0.213, 0.787, -0.213),
            ne(s, 0.715, -0.715, -0.715),
            ne(s, 0.072, -0.072, 0.928),
            0,
            0,
            ne(s, 0.213, -0.213, 0.143),
            ne(s, 0.715, 0.285, 0.14),
            ne(s, 0.072, -0.072, -0.283),
            0,
            0,
            ne(s, 0.213, -0.213, -0.787),
            ne(s, 0.715, -0.715, 0.715),
            ne(s, 0.072, 0.928, 0.072),
            0,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            0,
            1,
          ];
          break;
        case "luminanceToAlpha":
          i = [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.2125, 0.7154, 0.0721,
            0, 0, 0, 0, 0, 0, 1,
          ];
          break;
      }
      ((this.matrix = i),
        (this.includeOpacity = this.getAttribute("includeOpacity").hasValue()));
    }
    apply(t, e, r, i, n) {
      for (
        var { includeOpacity: s, matrix: a } = this,
          o = t.getImageData(0, 0, i, n),
          u = 0;
        u < n;
        u++
      )
        for (var h = 0; h < i; h++) {
          var l = ee(o.data, h, u, i, n, 0),
            c = ee(o.data, h, u, i, n, 1),
            f = ee(o.data, h, u, i, n, 2),
            g = ee(o.data, h, u, i, n, 3),
            p =
              ie(a, 0, l) +
              ie(a, 1, c) +
              ie(a, 2, f) +
              ie(a, 3, g) +
              ie(a, 4, 1),
            d =
              ie(a, 5, l) +
              ie(a, 6, c) +
              ie(a, 7, f) +
              ie(a, 8, g) +
              ie(a, 9, 1),
            y =
              ie(a, 10, l) +
              ie(a, 11, c) +
              ie(a, 12, f) +
              ie(a, 13, g) +
              ie(a, 14, 1),
            v =
              ie(a, 15, l) +
              ie(a, 16, c) +
              ie(a, 17, f) +
              ie(a, 18, g) +
              ie(a, 19, 1);
          (s && ((p = 0), (d = 0), (y = 0), (v *= g / 255)),
            re(o.data, h, u, i, n, 0, p),
            re(o.data, h, u, i, n, 1, d),
            re(o.data, h, u, i, n, 2, y),
            re(o.data, h, u, i, n, 3, v));
        }
      (t.clearRect(0, 0, i, n), t.putImageData(o, 0, 0));
    }
  }
  class ae extends ut {
    constructor() {
      (super(...arguments), (this.type = "mask"));
    }
    apply(t, e) {
      var { document: r } = this,
        i = this.getAttribute("x").getPixels("x"),
        n = this.getAttribute("y").getPixels("y"),
        s = this.getStyle("width").getPixels("x"),
        a = this.getStyle("height").getPixels("y");
      if (!s && !a) {
        var o = new dt();
        (this.children.forEach((e) => {
          o.addBoundingBox(e.getBoundingBox(t));
        }),
          (i = Math.floor(o.x1)),
          (n = Math.floor(o.y1)),
          (s = Math.floor(o.width)),
          (a = Math.floor(o.height)));
      }
      var u = this.removeStyles(e, ae.ignoreStyles),
        h = r.createCanvas(i + s, n + a),
        l = h.getContext("2d");
      (r.screen.setDefaults(l),
        this.renderChildren(l),
        new se(r, {
          nodeType: 1,
          childNodes: [],
          attributes: [
            { nodeName: "type", value: "luminanceToAlpha" },
            { nodeName: "includeOpacity", value: "true" },
          ],
        }).apply(l, 0, 0, i + s, n + a));
      var c = r.createCanvas(i + s, n + a),
        f = c.getContext("2d");
      (r.screen.setDefaults(f),
        e.render(f),
        (f.globalCompositeOperation = "destination-in"),
        (f.fillStyle = l.createPattern(h, "no-repeat")),
        f.fillRect(0, 0, i + s, n + a),
        (t.fillStyle = f.createPattern(c, "no-repeat")),
        t.fillRect(0, 0, i + s, n + a),
        this.restoreStyles(e, u));
    }
    render(t) {}
  }
  ae.ignoreStyles = ["mask", "transform", "clip-path"];
  var oe = () => {};
  class ue extends ut {
    constructor() {
      (super(...arguments), (this.type = "clipPath"));
    }
    apply(t) {
      var { document: e } = this,
        r = Reflect.getPrototypeOf(t),
        { beginPath: i, closePath: n } = t;
      (r && ((r.beginPath = oe), (r.closePath = oe)),
        Reflect.apply(i, t, []),
        this.children.forEach((i) => {
          if ("undefined" !== typeof i.path) {
            var s =
              "undefined" !== typeof i.elementTransform
                ? i.elementTransform()
                : null;
            (s || (s = ot.fromElement(e, i)),
              s && s.apply(t),
              i.path(t),
              r && (r.closePath = n),
              s && s.unapply(t));
          }
        }),
        Reflect.apply(n, t, []),
        t.clip(),
        r && ((r.beginPath = i), (r.closePath = n)));
    }
    render(t) {}
  }
  class he extends ut {
    constructor() {
      (super(...arguments), (this.type = "filter"));
    }
    apply(t, e) {
      var { document: r, children: i } = this,
        n = e.getBoundingBox(t);
      if (n) {
        var s = 0,
          a = 0;
        i.forEach((t) => {
          var e = t.extraFilterDistance || 0;
          ((s = Math.max(s, e)), (a = Math.max(a, e)));
        });
        var o = Math.floor(n.width),
          u = Math.floor(n.height),
          h = o + 2 * s,
          l = u + 2 * a;
        if (!(h < 1 || l < 1)) {
          var c = Math.floor(n.x),
            f = Math.floor(n.y),
            g = this.removeStyles(e, he.ignoreStyles),
            p = r.createCanvas(h, l),
            d = p.getContext("2d");
          (r.screen.setDefaults(d),
            d.translate(-c + s, -f + a),
            e.render(d),
            i.forEach((t) => {
              "function" === typeof t.apply && t.apply(d, 0, 0, h, l);
            }),
            t.drawImage(p, 0, 0, h, l, c - s, f - a, h, l),
            this.restoreStyles(e, g));
        }
      }
    }
    render(t) {}
  }
  he.ignoreStyles = ["filter", "transform", "clip-path"];
  class le extends ut {
    constructor(t, e, r) {
      (super(t, e, r),
        (this.type = "feDropShadow"),
        this.addStylesFromStyleDefinition());
    }
    apply(t, e, r, i, n) {}
  }
  class ce extends ut {
    constructor() {
      (super(...arguments), (this.type = "feMorphology"));
    }
    apply(t, e, r, i, n) {}
  }
  class fe extends ut {
    constructor() {
      (super(...arguments), (this.type = "feComposite"));
    }
    apply(t, e, r, i, n) {}
  }
  class ge extends ut {
    constructor(t, e, r) {
      (super(t, e, r),
        (this.type = "feGaussianBlur"),
        (this.blurRadius = Math.floor(
          this.getAttribute("stdDeviation").getNumber(),
        )),
        (this.extraFilterDistance = this.blurRadius));
    }
    apply(t, e, r, i, n) {
      var { document: s, blurRadius: a } = this,
        o = s.window ? s.window.document.body : null,
        h = t.canvas;
      ((h.id = s.getUniqueId()),
        o && ((h.style.display = "none"), o.appendChild(h)),
        (0, u.vR)(h, e, r, i, n, a),
        o && o.removeChild(h));
    }
  }
  class pe extends ut {
    constructor() {
      (super(...arguments), (this.type = "title"));
    }
  }
  class de extends ut {
    constructor() {
      (super(...arguments), (this.type = "desc"));
    }
  }
  var ye = {
    svg: Pt,
    rect: At,
    circle: Ct,
    ellipse: Ot,
    line: Et,
    polyline: Tt,
    polygon: Mt,
    path: mt,
    pattern: Vt,
    marker: kt,
    defs: Lt,
    linearGradient: jt,
    radialGradient: It,
    stop: Dt,
    animate: Bt,
    animateColor: Rt,
    animateTransform: zt,
    font: Ft,
    "font-face": Zt,
    "missing-glyph": Xt,
    glyph: xt,
    text: bt,
    tspan: wt,
    tref: Ut,
    a: Yt,
    textPath: Wt,
    image: $t,
    g: Nt,
    symbol: Qt,
    style: Kt,
    use: te,
    mask: ae,
    clipPath: ue,
    filter: he,
    feDropShadow: le,
    feMorphology: ce,
    feComposite: fe,
    feColorMatrix: se,
    feGaussianBlur: ge,
    title: pe,
    desc: de,
  };
  function ve(t, e) {
    var r = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(t);
      (e &&
        (i = i.filter(function (e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable;
        })),
        r.push.apply(r, i));
    }
    return r;
  }
  function me(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = null != arguments[e] ? arguments[e] : {};
      e % 2
        ? ve(Object(r), !0).forEach(function (e) {
            (0, n.Z)(t, e, r[e]);
          })
        : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
          : ve(Object(r)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(r, e),
              );
            });
    }
    return t;
  }
  function xe(t, e) {
    var r = document.createElement("canvas");
    return ((r.width = t), (r.height = e), r);
  }
  function be(t) {
    return we.apply(this, arguments);
  }
  function we() {
    return (
      (we = (0, i.Z)(function* (t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          r = document.createElement("img");
        return (
          e && (r.crossOrigin = "Anonymous"),
          new Promise((e, i) => {
            ((r.onload = () => {
              e(r);
            }),
              (r.onerror = (t, e, r, n, s) => {
                i(s);
              }),
              (r.src = t));
          })
        );
      })),
      we.apply(this, arguments)
    );
  }
  class Se {
    constructor(t) {
      var {
        rootEmSize: e = 12,
        emSize: r = 12,
        createCanvas: i = Se.createCanvas,
        createImage: n = Se.createImage,
        anonymousCrossOrigin: s,
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      ((this.canvg = t),
        (this.definitions = {}),
        (this.styles = {}),
        (this.stylesSpecificity = {}),
        (this.images = []),
        (this.fonts = []),
        (this.emSizeStack = []),
        (this.uniqueId = 0),
        (this.screen = t.screen),
        (this.rootEmSize = e),
        (this.emSize = r),
        (this.createCanvas = i),
        (this.createImage = this.bindCreateImage(n, s)),
        this.screen.wait(this.isImagesLoaded.bind(this)),
        this.screen.wait(this.isFontsLoaded.bind(this)));
    }
    bindCreateImage(t, e) {
      return "boolean" === typeof e
        ? (r, i) => t(r, "boolean" === typeof i ? i : e)
        : t;
    }
    get window() {
      return this.screen.window;
    }
    get fetch() {
      return this.screen.fetch;
    }
    get ctx() {
      return this.screen.ctx;
    }
    get emSize() {
      var { emSizeStack: t } = this;
      return t[t.length - 1];
    }
    set emSize(t) {
      var { emSizeStack: e } = this;
      e.push(t);
    }
    popEmSize() {
      var { emSizeStack: t } = this;
      t.pop();
    }
    getUniqueId() {
      return "canvg".concat(++this.uniqueId);
    }
    isImagesLoaded() {
      return this.images.every((t) => t.loaded);
    }
    isFontsLoaded() {
      return this.fonts.every((t) => t.loaded);
    }
    createDocumentElement(t) {
      var e = this.createElement(t.documentElement);
      return (
        (e.root = !0),
        e.addStylesFromStyleDefinition(),
        (this.documentElement = e),
        e
      );
    }
    createElement(t) {
      var e = t.nodeName.replace(/^[^:]+:/, ""),
        r = Se.elementTypes[e];
      return "undefined" !== typeof r ? new r(this, t) : new ht(this, t);
    }
    createTextNode(t) {
      return new St(this, t);
    }
    setViewBox(t) {
      this.screen.setViewBox(me({ document: this }, t));
    }
  }
  function Pe(t, e) {
    var r = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(t);
      (e &&
        (i = i.filter(function (e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable;
        })),
        r.push.apply(r, i));
    }
    return r;
  }
  function Ae(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = null != arguments[e] ? arguments[e] : {};
      e % 2
        ? Pe(Object(r), !0).forEach(function (e) {
            (0, n.Z)(t, e, r[e]);
          })
        : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
          : Pe(Object(r)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(r, e),
              );
            });
    }
    return t;
  }
  ((Se.createCanvas = xe), (Se.createImage = be), (Se.elementTypes = ye));
  class Ce {
    constructor(t, e) {
      var r =
        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      ((this.parser = new Q(r)),
        (this.screen = new W(t, r)),
        (this.options = r));
      var i = new Se(this, r),
        n = i.createDocumentElement(e);
      ((this.document = i), (this.documentElement = n));
    }
    static from(t, e) {
      var r = arguments;
      return (0, i.Z)(function* () {
        var i = r.length > 2 && void 0 !== r[2] ? r[2] : {},
          n = new Q(i),
          s = yield n.parse(e);
        return new Ce(t, s, i);
      })();
    }
    static fromString(t, e) {
      var r =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        i = new Q(r),
        n = i.parseFromString(e);
      return new Ce(t, n, r);
    }
    fork(t, e) {
      var r =
        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      return Ce.from(t, e, Ae(Ae({}, this.options), r));
    }
    forkString(t, e) {
      var r =
        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      return Ce.fromString(t, e, Ae(Ae({}, this.options), r));
    }
    ready() {
      return this.screen.ready();
    }
    isReady() {
      return this.screen.isReady();
    }
    render() {
      var t = arguments,
        e = this;
      return (0, i.Z)(function* () {
        var r = t.length > 0 && void 0 !== t[0] ? t[0] : {};
        (e.start(
          Ae({ enableRedraw: !0, ignoreAnimation: !0, ignoreMouse: !0 }, r),
        ),
          yield e.ready(),
          e.stop());
      })();
    }
    start() {
      var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        { documentElement: e, screen: r, options: i } = this;
      r.start(e, Ae(Ae({ enableRedraw: !0 }, i), t));
    }
    stop() {
      this.screen.stop();
    }
    resize(t) {
      var e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t,
        r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      this.documentElement.resize(t, e, r);
    }
  }
};
