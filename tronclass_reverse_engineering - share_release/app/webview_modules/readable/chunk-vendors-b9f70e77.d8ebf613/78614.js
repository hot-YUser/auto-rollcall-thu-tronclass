// Source: decompiled/web-modules-acorn/chunk-vendors-b9f70e77.d8ebf613/78614.js
// Webpack module id: 78614
const __webpack_module_78614 = function (e, t, n) {
  "use strict";
  n.d(t, {
    EH: function () {
      return qn;
    },
    p: function () {
      return Fn;
    },
    tk: function () {
      return kr;
    },
  });
  var r = n(3336),
    i = n(66347),
    o = n(52417),
    s = n(26334),
    a = n(62040),
    l = n(39110),
    c = n(26720),
    u = n(13087),
    f = n(62833),
    h =
      (n(74916),
      n(77601),
      n(57658),
      n(69826),
      n(41539),
      n(21703),
      n(96647),
      n(57327),
      n(82772),
      n(40561),
      n(51532),
      n(78783),
      n(33948),
      n(65069),
      n(2707),
      n(47042),
      n(94986),
      n(92222),
      n(38862),
      n(15306),
      n(54747),
      n(23123),
      n(21249),
      n(34553),
      n(85827),
      n(70189),
      n(4129),
      n(30489),
      n(62145)),
    d = n(17943),
    p = n(64732),
    v = n(25108),
    m = function (e) {
      for (var t = 0; ; t++) if (((e = e.previousSibling), !e)) return t;
    },
    g = function (e) {
      var t = e.assignedSlot || e.parentNode;
      return t && 11 == t.nodeType ? t.host : t;
    },
    y = null,
    w = function (e, t, n) {
      var r = y || (y = document.createRange());
      return (
        r.setEnd(e, null == n ? e.nodeValue.length : n),
        r.setStart(e, t || 0),
        r
      );
    },
    k = function (e, t, n, r) {
      return n && (x(e, t, n, r, -1) || x(e, t, n, r, 1));
    },
    b = /^(img|br|input|textarea|hr)$/i;
  function x(e, t, n, r, i) {
    for (;;) {
      if (e == n && t == r) return !0;
      if (t == (i < 0 ? 0 : S(e))) {
        var o = e.parentNode;
        if (
          !o ||
          1 != o.nodeType ||
          O(e) ||
          b.test(e.nodeName) ||
          "false" == e.contentEditable
        )
          return !1;
        ((t = m(e) + (i < 0 ? 0 : 1)), (e = o));
      } else {
        if (1 != e.nodeType) return !1;
        if (
          ((e = e.childNodes[t + (i < 0 ? -1 : 0)]),
          "false" == e.contentEditable)
        )
          return !1;
        t = i < 0 ? S(e) : 0;
      }
    }
  }
  function S(e) {
    return 3 == e.nodeType ? e.nodeValue.length : e.childNodes.length;
  }
  function C(e, t, n) {
    for (var r = 0 == t, i = t == S(e); r || i; ) {
      if (e == n) return !0;
      var o = m(e);
      if (((e = e.parentNode), !e)) return !1;
      ((r = r && 0 == o), (i = i && o == S(e)));
    }
  }
  function O(e) {
    for (var t, n = e; n; n = n.parentNode) if ((t = n.pmViewDesc)) break;
    return t && t.node && t.node.isBlock && (t.dom == e || t.contentDOM == e);
  }
  var M = function (e) {
    return (
      e.focusNode && k(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset)
    );
  };
  function N(e, t) {
    var n = document.createEvent("Event");
    return (
      n.initEvent("keydown", !0, !0),
      (n.keyCode = e),
      (n.key = n.code = t),
      n
    );
  }
  function A(e) {
    var t = e.activeElement;
    while (t && t.shadowRoot) t = t.shadowRoot.activeElement;
    return t;
  }
  function D(e, t, n) {
    if (e.caretPositionFromPoint)
      try {
        var r = e.caretPositionFromPoint(t, n);
        if (r) return { node: r.offsetNode, offset: r.offset };
      } catch (o) {}
    if (e.caretRangeFromPoint) {
      var i = e.caretRangeFromPoint(t, n);
      if (i) return { node: i.startContainer, offset: i.startOffset };
    }
  }
  var E = "undefined" != typeof navigator ? navigator : null,
    T = "undefined" != typeof document ? document : null,
    R = (E && E.userAgent) || "",
    P = /Edge\/(\d+)/.exec(R),
    Z = /MSIE \d/.exec(R),
    I = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(R),
    z = !!(Z || I || P),
    $ = Z ? document.documentMode : I ? +I[1] : P ? +P[1] : 0,
    B = !z && /gecko\/(\d+)/i.test(R);
  B && (/Firefox\/(\d+)/.exec(R) || [0, 0])[1];
  var V = !z && /Chrome\/(\d+)/.exec(R),
    j = !!V,
    F = V ? +V[1] : 0,
    H = !z && !!E && /Apple Computer/.test(E.vendor),
    L = H && (/Mobile\/\w+/.test(R) || (!!E && E.maxTouchPoints > 2)),
    q = L || (!!E && /Mac/.test(E.platform)),
    _ = !!E && /Win/.test(E.platform),
    J = /Android \d/.test(R),
    W = !!T && "webkitFontSmoothing" in T.documentElement.style,
    Y = W
      ? +(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1]
      : 0;
  function U(e) {
    return {
      left: 0,
      right: e.documentElement.clientWidth,
      top: 0,
      bottom: e.documentElement.clientHeight,
    };
  }
  function K(e, t) {
    return "number" == typeof e ? e : e[t];
  }
  function G(e) {
    var t = e.getBoundingClientRect(),
      n = t.width / e.offsetWidth || 1,
      r = t.height / e.offsetHeight || 1;
    return {
      left: t.left,
      right: t.left + e.clientWidth * n,
      top: t.top,
      bottom: t.top + e.clientHeight * r,
    };
  }
  function X(e, t, n) {
    for (
      var r = e.someProp("scrollThreshold") || 0,
        i = e.someProp("scrollMargin") || 5,
        o = e.dom.ownerDocument,
        s = n || e.dom;
      ;
      s = g(s)
    ) {
      if (!s) break;
      if (1 == s.nodeType) {
        var a = s,
          l = a == o.body,
          c = l ? U(o) : G(a),
          u = 0,
          f = 0;
        if (
          (t.top < c.top + K(r, "top")
            ? (f = -(c.top - t.top + K(i, "top")))
            : t.bottom > c.bottom - K(r, "bottom") &&
              (f =
                t.bottom - t.top > c.bottom - c.top
                  ? t.top + K(i, "top") - c.top
                  : t.bottom - c.bottom + K(i, "bottom")),
          t.left < c.left + K(r, "left")
            ? (u = -(c.left - t.left + K(i, "left")))
            : t.right > c.right - K(r, "right") &&
              (u = t.right - c.right + K(i, "right")),
          u || f)
        )
          if (l) o.defaultView.scrollBy(u, f);
          else {
            var h = a.scrollLeft,
              d = a.scrollTop;
            (f && (a.scrollTop += f), u && (a.scrollLeft += u));
            var p = a.scrollLeft - h,
              v = a.scrollTop - d;
            t = {
              left: t.left - p,
              top: t.top - v,
              right: t.right - p,
              bottom: t.bottom - v,
            };
          }
        if (l || /^(fixed|sticky)$/.test(getComputedStyle(s).position)) break;
      }
    }
  }
  function Q(e) {
    for (
      var t,
        n,
        r = e.dom.getBoundingClientRect(),
        i = Math.max(0, r.top),
        o = (r.left + r.right) / 2,
        s = i + 1;
      s < Math.min(innerHeight, r.bottom);
      s += 5
    ) {
      var a = e.root.elementFromPoint(o, s);
      if (a && a != e.dom && e.dom.contains(a)) {
        var l = a.getBoundingClientRect();
        if (l.top >= i - 20) {
          ((t = a), (n = l.top));
          break;
        }
      }
    }
    return { refDOM: t, refTop: n, stack: ee(e.dom) };
  }
  function ee(e) {
    for (var t = [], n = e.ownerDocument, r = e; r; r = g(r))
      if ((t.push({ dom: r, top: r.scrollTop, left: r.scrollLeft }), e == n))
        break;
    return t;
  }
  function te(e) {
    var t = e.refDOM,
      n = e.refTop,
      r = e.stack,
      i = t ? t.getBoundingClientRect().top : 0;
    ne(r, 0 == i ? 0 : i - n);
  }
  function ne(e, t) {
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        i = r.dom,
        o = r.top,
        s = r.left;
      (i.scrollTop != o + t && (i.scrollTop = o + t),
        i.scrollLeft != s && (i.scrollLeft = s));
    }
  }
  var re = null;
  function ie(e) {
    if (e.setActive) return e.setActive();
    if (re) return e.focus(re);
    var t = ee(e);
    (e.focus(
      null == re
        ? {
            get preventScroll() {
              return ((re = { preventScroll: !0 }), !0);
            },
          }
        : void 0,
    ),
      re || ((re = !1), ne(t, 0)));
  }
  function oe(e, t) {
    for (
      var n,
        r,
        i,
        o,
        s = 2e8,
        a = 0,
        l = t.top,
        c = t.top,
        u = e.firstChild,
        f = 0;
      u;
      u = u.nextSibling, f++
    ) {
      var h = void 0;
      if (1 == u.nodeType) h = u.getClientRects();
      else {
        if (3 != u.nodeType) continue;
        h = w(u).getClientRects();
      }
      for (var d = 0; d < h.length; d++) {
        var p = h[d];
        if (p.top <= l && p.bottom >= c) {
          ((l = Math.max(p.bottom, l)), (c = Math.min(p.top, c)));
          var v =
            p.left > t.left
              ? p.left - t.left
              : p.right < t.left
                ? t.left - p.right
                : 0;
          if (v < s) {
            ((n = u),
              (s = v),
              (r =
                v && 3 == n.nodeType
                  ? { left: p.right < t.left ? p.right : p.left, top: t.top }
                  : t),
              1 == u.nodeType &&
                v &&
                (a = f + (t.left >= (p.left + p.right) / 2 ? 1 : 0)));
            continue;
          }
        } else
          p.top > t.top &&
            !i &&
            p.left <= t.left &&
            p.right >= t.left &&
            ((i = u),
            (o = {
              left: Math.max(p.left, Math.min(p.right, t.left)),
              top: p.top,
            }));
        !n &&
          ((t.left >= p.right && t.top >= p.top) ||
            (t.left >= p.left && t.top >= p.bottom)) &&
          (a = f + 1);
      }
    }
    return (
      !n && i && ((n = i), (r = o), (s = 0)),
      n && 3 == n.nodeType
        ? se(n, r)
        : !n || (s && 1 == n.nodeType)
          ? { node: e, offset: a }
          : oe(n, r)
    );
  }
  function se(e, t) {
    for (
      var n = e.nodeValue.length, r = document.createRange(), i = 0;
      i < n;
      i++
    ) {
      (r.setEnd(e, i + 1), r.setStart(e, i));
      var o = pe(r, 1);
      if (o.top != o.bottom && ae(t, o))
        return {
          node: e,
          offset: i + (t.left >= (o.left + o.right) / 2 ? 1 : 0),
        };
    }
    return { node: e, offset: 0 };
  }
  function ae(e, t) {
    return (
      e.left >= t.left - 1 &&
      e.left <= t.right + 1 &&
      e.top >= t.top - 1 &&
      e.top <= t.bottom + 1
    );
  }
  function le(e, t) {
    var n = e.parentNode;
    return n &&
      /^li$/i.test(n.nodeName) &&
      t.left < e.getBoundingClientRect().left
      ? n
      : e;
  }
  function ce(e, t, n) {
    var r = oe(t, n),
      i = r.node,
      o = r.offset,
      s = -1;
    if (1 == i.nodeType && !i.firstChild) {
      var a = i.getBoundingClientRect();
      s = a.left != a.right && n.left > (a.left + a.right) / 2 ? 1 : -1;
    }
    return e.docView.posFromDOM(i, o, s);
  }
  function ue(e, t, n, r) {
    for (var i = -1, o = t, s = !1; ; ) {
      if (o == e.dom) break;
      var a = e.docView.nearestDesc(o, !0);
      if (!a) return null;
      if (
        1 == a.dom.nodeType &&
        ((a.node.isBlock && a.parent && !s) || !a.contentDOM)
      ) {
        var l = a.dom.getBoundingClientRect();
        if (
          (a.node.isBlock &&
            a.parent &&
            !s &&
            ((s = !0),
            l.left > r.left || l.top > r.top
              ? (i = a.posBefore)
              : (l.right < r.left || l.bottom < r.top) && (i = a.posAfter)),
          !a.contentDOM && i < 0 && !a.node.isText)
        ) {
          var c = a.node.isBlock
            ? r.top < (l.top + l.bottom) / 2
            : r.left < (l.left + l.right) / 2;
          return c ? a.posBefore : a.posAfter;
        }
      }
      o = a.dom.parentNode;
    }
    return i > -1 ? i : e.docView.posFromDOM(t, n, -1);
  }
  function fe(e, t, n) {
    var r = e.childNodes.length;
    if (r && n.top < n.bottom)
      for (
        var i = Math.max(
            0,
            Math.min(
              r - 1,
              Math.floor((r * (t.top - n.top)) / (n.bottom - n.top)) - 2,
            ),
          ),
          o = i;
        ;
      ) {
        var s = e.childNodes[o];
        if (1 == s.nodeType)
          for (var a = s.getClientRects(), l = 0; l < a.length; l++) {
            var c = a[l];
            if (ae(t, c)) return fe(s, t, c);
          }
        if ((o = (o + 1) % r) == i) break;
      }
    return e;
  }
  function he(e, t) {
    var n,
      r = e.dom.ownerDocument,
      i = 0,
      o = D(r, t.left, t.top);
    o && ((n = o.node), (i = o.offset));
    var s,
      a = (e.root.elementFromPoint ? e.root : r).elementFromPoint(
        t.left,
        t.top,
      );
    if (!a || !e.dom.contains(1 != a.nodeType ? a.parentNode : a)) {
      var l = e.dom.getBoundingClientRect();
      if (!ae(t, l)) return null;
      if (((a = fe(e.dom, t, l)), !a)) return null;
    }
    if (H) for (var c = a; n && c; c = g(c)) c.draggable && (n = void 0);
    if (((a = le(a, t)), n)) {
      if (
        B &&
        1 == n.nodeType &&
        ((i = Math.min(i, n.childNodes.length)), i < n.childNodes.length)
      ) {
        var u,
          f = n.childNodes[i];
        "IMG" == f.nodeName &&
          (u = f.getBoundingClientRect()).right <= t.left &&
          u.bottom > t.top &&
          i++;
      }
      n == e.dom &&
      i == n.childNodes.length - 1 &&
      1 == n.lastChild.nodeType &&
      t.top > n.lastChild.getBoundingClientRect().bottom
        ? (s = e.state.doc.content.size)
        : (0 != i && 1 == n.nodeType && "BR" == n.childNodes[i - 1].nodeName) ||
          (s = ue(e, n, i, t));
    }
    null == s && (s = ce(e, a, t));
    var h = e.docView.nearestDesc(a, !0);
    return { pos: s, inside: h ? h.posAtStart - h.border : -1 };
  }
  function de(e) {
    return e.top < e.bottom || e.left < e.right;
  }
  function pe(e, t) {
    var n = e.getClientRects();
    if (n.length) {
      var r = n[t < 0 ? 0 : n.length - 1];
      if (de(r)) return r;
    }
    return Array.prototype.find.call(n, de) || e.getBoundingClientRect();
  }
  var ve = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;
  function me(e, t, n) {
    var r = e.docView.domFromPos(t, n < 0 ? -1 : 1),
      i = r.node,
      o = r.offset,
      s = r.atom,
      a = W || B;
    if (3 == i.nodeType) {
      if (
        !a ||
        (!ve.test(i.nodeValue) && (n < 0 ? o : o != i.nodeValue.length))
      ) {
        var l = o,
          c = o,
          u = n < 0 ? 1 : -1;
        return (
          n < 0 && !o
            ? (c++, (u = -1))
            : n >= 0 && o == i.nodeValue.length
              ? (l--, (u = 1))
              : n < 0
                ? l--
                : c++,
          ge(pe(w(i, l, c), u), u < 0)
        );
      }
      var f = pe(w(i, o, o), n);
      if (B && o && /\s/.test(i.nodeValue[o - 1]) && o < i.nodeValue.length) {
        var h = pe(w(i, o - 1, o - 1), -1);
        if (h.top == f.top) {
          var d = pe(w(i, o, o + 1), -1);
          if (d.top != f.top) return ge(d, d.left < h.left);
        }
      }
      return f;
    }
    var p = e.state.doc.resolve(t - (s || 0));
    if (!p.parent.inlineContent) {
      if (null == s && o && (n < 0 || o == S(i))) {
        var v = i.childNodes[o - 1];
        if (1 == v.nodeType) return ye(v.getBoundingClientRect(), !1);
      }
      if (null == s && o < S(i)) {
        var m = i.childNodes[o];
        if (1 == m.nodeType) return ye(m.getBoundingClientRect(), !0);
      }
      return ye(i.getBoundingClientRect(), n >= 0);
    }
    if (null == s && o && (n < 0 || o == S(i))) {
      var g = i.childNodes[o - 1],
        y =
          3 == g.nodeType
            ? w(g, S(g) - (a ? 0 : 1))
            : 1 != g.nodeType || ("BR" == g.nodeName && g.nextSibling)
              ? null
              : g;
      if (y) return ge(pe(y, 1), !1);
    }
    if (null == s && o < S(i)) {
      var k = i.childNodes[o];
      while (k.pmViewDesc && k.pmViewDesc.ignoreForCoords) k = k.nextSibling;
      var b = k
        ? 3 == k.nodeType
          ? w(k, 0, a ? 0 : 1)
          : 1 == k.nodeType
            ? k
            : null
        : null;
      if (b) return ge(pe(b, -1), !0);
    }
    return ge(pe(3 == i.nodeType ? w(i) : i, -n), n >= 0);
  }
  function ge(e, t) {
    if (0 == e.width) return e;
    var n = t ? e.left : e.right;
    return { top: e.top, bottom: e.bottom, left: n, right: n };
  }
  function ye(e, t) {
    if (0 == e.height) return e;
    var n = t ? e.top : e.bottom;
    return { top: n, bottom: n, left: e.left, right: e.right };
  }
  function we(e, t, n) {
    var r = e.state,
      i = e.root.activeElement;
    (r != t && e.updateState(t), i != e.dom && e.focus());
    try {
      return n();
    } finally {
      (r != t && e.updateState(r), i != e.dom && i && i.focus());
    }
  }
  function ke(e, t, n) {
    var r = t.selection,
      i = "up" == n ? r.$from : r.$to;
    return we(e, t, function () {
      for (
        var t = e.docView.domFromPos(i.pos, "up" == n ? -1 : 1), r = t.node;
        ;
      ) {
        var o = e.docView.nearestDesc(r, !0);
        if (!o) break;
        if (o.node.isBlock) {
          r = o.contentDOM || o.dom;
          break;
        }
        r = o.dom.parentNode;
      }
      for (var s = me(e, i.pos, 1), a = r.firstChild; a; a = a.nextSibling) {
        var l = void 0;
        if (1 == a.nodeType) l = a.getClientRects();
        else {
          if (3 != a.nodeType) continue;
          l = w(a, 0, a.nodeValue.length).getClientRects();
        }
        for (var c = 0; c < l.length; c++) {
          var u = l[c];
          if (
            u.bottom > u.top + 1 &&
            ("up" == n
              ? s.top - u.top > 2 * (u.bottom - s.top)
              : u.bottom - s.bottom > 2 * (s.bottom - u.top))
          )
            return !1;
        }
      }
      return !0;
    });
  }
  var be = /[\u0590-\u08ac]/;
  function xe(e, t, n) {
    var r = t.selection.$head;
    if (!r.parent.isTextblock) return !1;
    var i = r.parentOffset,
      o = !i,
      s = i == r.parent.content.size,
      a = e.domSelection();
    return be.test(r.parent.textContent) && a.modify
      ? we(e, t, function () {
          var t = e.domSelectionRange(),
            i = t.focusNode,
            o = t.focusOffset,
            s = t.anchorNode,
            l = t.anchorOffset,
            c = a.caretBidiLevel;
          a.modify("move", n, "character");
          var u = r.depth ? e.docView.domAfterPos(r.before()) : e.dom,
            f = e.domSelectionRange(),
            h = f.focusNode,
            d = f.focusOffset,
            p =
              (h && !u.contains(1 == h.nodeType ? h : h.parentNode)) ||
              (i == h && o == d);
          try {
            (a.collapse(s, l),
              i && (i != s || o != l) && a.extend && a.extend(i, o));
          } catch (v) {}
          return (null != c && (a.caretBidiLevel = c), p);
        })
      : "left" == n || "backward" == n
        ? o
        : s;
  }
  var Se = null,
    Ce = null,
    Oe = !1;
  function Me(e, t, n) {
    return Se == t && Ce == n
      ? Oe
      : ((Se = t),
        (Ce = n),
        (Oe = "up" == n || "down" == n ? ke(e, t, n) : xe(e, t, n)));
  }
  var Ne = 0,
    Ae = 1,
    De = 2,
    Ee = 3,
    Te = (function () {
      function e(t, n, r, i) {
        ((0, u.Z)(this, e),
          (this.parent = t),
          (this.children = n),
          (this.dom = r),
          (this.contentDOM = i),
          (this.dirty = Ne),
          (r.pmViewDesc = this));
      }
      return (
        (0, f.Z)(e, [
          {
            key: "matchesWidget",
            value: function (e) {
              return !1;
            },
          },
          {
            key: "matchesMark",
            value: function (e) {
              return !1;
            },
          },
          {
            key: "matchesNode",
            value: function (e, t, n) {
              return !1;
            },
          },
          {
            key: "matchesHack",
            value: function (e) {
              return !1;
            },
          },
          {
            key: "parseRule",
            value: function () {
              return null;
            },
          },
          {
            key: "stopEvent",
            value: function (e) {
              return !1;
            },
          },
          {
            key: "size",
            get: function () {
              for (var e = 0, t = 0; t < this.children.length; t++)
                e += this.children[t].size;
              return e;
            },
          },
          {
            key: "border",
            get: function () {
              return 0;
            },
          },
          {
            key: "destroy",
            value: function () {
              ((this.parent = void 0),
                this.dom.pmViewDesc == this && (this.dom.pmViewDesc = void 0));
              for (var e = 0; e < this.children.length; e++)
                this.children[e].destroy();
            },
          },
          {
            key: "posBeforeChild",
            value: function (e) {
              for (var t = 0, n = this.posAtStart; ; t++) {
                var r = this.children[t];
                if (r == e) return n;
                n += r.size;
              }
            },
          },
          {
            key: "posBefore",
            get: function () {
              return this.parent.posBeforeChild(this);
            },
          },
          {
            key: "posAtStart",
            get: function () {
              return this.parent
                ? this.parent.posBeforeChild(this) + this.border
                : 0;
            },
          },
          {
            key: "posAfter",
            get: function () {
              return this.posBefore + this.size;
            },
          },
          {
            key: "posAtEnd",
            get: function () {
              return this.posAtStart + this.size - 2 * this.border;
            },
          },
          {
            key: "localPosFromDOM",
            value: function (e, t, n) {
              if (
                this.contentDOM &&
                this.contentDOM.contains(1 == e.nodeType ? e : e.parentNode)
              ) {
                if (n < 0) {
                  var r, i;
                  if (e == this.contentDOM) r = e.childNodes[t - 1];
                  else {
                    while (e.parentNode != this.contentDOM) e = e.parentNode;
                    r = e.previousSibling;
                  }
                  while (r && (!(i = r.pmViewDesc) || i.parent != this))
                    r = r.previousSibling;
                  return r ? this.posBeforeChild(i) + i.size : this.posAtStart;
                }
                var o, s;
                if (e == this.contentDOM) o = e.childNodes[t];
                else {
                  while (e.parentNode != this.contentDOM) e = e.parentNode;
                  o = e.nextSibling;
                }
                while (o && (!(s = o.pmViewDesc) || s.parent != this))
                  o = o.nextSibling;
                return o ? this.posBeforeChild(s) : this.posAtEnd;
              }
              var a;
              if (e == this.dom && this.contentDOM) a = t > m(this.contentDOM);
              else if (
                this.contentDOM &&
                this.contentDOM != this.dom &&
                this.dom.contains(this.contentDOM)
              )
                a = 2 & e.compareDocumentPosition(this.contentDOM);
              else if (this.dom.firstChild) {
                if (0 == t)
                  for (var l = e; ; l = l.parentNode) {
                    if (l == this.dom) {
                      a = !1;
                      break;
                    }
                    if (l.previousSibling) break;
                  }
                if (null == a && t == e.childNodes.length)
                  for (var c = e; ; c = c.parentNode) {
                    if (c == this.dom) {
                      a = !0;
                      break;
                    }
                    if (c.nextSibling) break;
                  }
              }
              return (null == a ? n > 0 : a) ? this.posAtEnd : this.posAtStart;
            },
          },
          {
            key: "nearestDesc",
            value: function (e) {
              for (
                var t =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1],
                  n = !0,
                  r = e;
                r;
                r = r.parentNode
              ) {
                var i = this.getDesc(r),
                  o = void 0;
                if (i && (!t || i.node)) {
                  if (
                    !n ||
                    !(o = i.nodeDOM) ||
                    (1 == o.nodeType
                      ? o.contains(1 == e.nodeType ? e : e.parentNode)
                      : o == e)
                  )
                    return i;
                  n = !1;
                }
              }
            },
          },
          {
            key: "getDesc",
            value: function (e) {
              for (var t = e.pmViewDesc, n = t; n; n = n.parent)
                if (n == this) return t;
            },
          },
          {
            key: "posFromDOM",
            value: function (e, t, n) {
              for (var r = e; r; r = r.parentNode) {
                var i = this.getDesc(r);
                if (i) return i.localPosFromDOM(e, t, n);
              }
              return -1;
            },
          },
          {
            key: "descAt",
            value: function (e) {
              for (var t = 0, n = 0; t < this.children.length; t++) {
                var r = this.children[t],
                  i = n + r.size;
                if (n == e && i != n) {
                  while (!r.border && r.children.length) r = r.children[0];
                  return r;
                }
                if (e < i) return r.descAt(e - n - r.border);
                n = i;
              }
            },
          },
          {
            key: "domFromPos",
            value: function (e, t) {
              if (!this.contentDOM)
                return { node: this.dom, offset: 0, atom: e + 1 };
              for (var n, r = 0, i = 0, o = 0; r < this.children.length; r++) {
                var s = this.children[r],
                  a = o + s.size;
                if (a > e || s instanceof Be) {
                  i = e - o;
                  break;
                }
                o = a;
              }
              if (i)
                return this.children[r].domFromPos(
                  i - this.children[r].border,
                  t,
                );
              for (
                ;
                r &&
                !(n = this.children[r - 1]).size &&
                n instanceof Re &&
                n.side >= 0;
                r--
              );
              if (t <= 0) {
                for (var l, c = !0; ; r--, c = !1)
                  if (
                    ((l = r ? this.children[r - 1] : null),
                    !l || l.dom.parentNode == this.contentDOM)
                  )
                    break;
                return l && t && c && !l.border && !l.domAtom
                  ? l.domFromPos(l.size, t)
                  : { node: this.contentDOM, offset: l ? m(l.dom) + 1 : 0 };
              }
              for (var u, f = !0; ; r++, f = !1)
                if (
                  ((u = r < this.children.length ? this.children[r] : null),
                  !u || u.dom.parentNode == this.contentDOM)
                )
                  break;
              return u && f && !u.border && !u.domAtom
                ? u.domFromPos(0, t)
                : {
                    node: this.contentDOM,
                    offset: u ? m(u.dom) : this.contentDOM.childNodes.length,
                  };
            },
          },
          {
            key: "parseRange",
            value: function (e, t) {
              var n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : 0;
              if (0 == this.children.length)
                return {
                  node: this.contentDOM,
                  from: e,
                  to: t,
                  fromOffset: 0,
                  toOffset: this.contentDOM.childNodes.length,
                };
              for (var r = -1, i = -1, o = n, s = 0; ; s++) {
                var a = this.children[s],
                  l = o + a.size;
                if (-1 == r && e <= l) {
                  var c = o + a.border;
                  if (
                    e >= c &&
                    t <= l - a.border &&
                    a.node &&
                    a.contentDOM &&
                    this.contentDOM.contains(a.contentDOM)
                  )
                    return a.parseRange(e, t, c);
                  e = o;
                  for (var u = s; u > 0; u--) {
                    var f = this.children[u - 1];
                    if (
                      f.size &&
                      f.dom.parentNode == this.contentDOM &&
                      !f.emptyChildAt(1)
                    ) {
                      r = m(f.dom) + 1;
                      break;
                    }
                    e -= f.size;
                  }
                  -1 == r && (r = 0);
                }
                if (r > -1 && (l > t || s == this.children.length - 1)) {
                  t = l;
                  for (var h = s + 1; h < this.children.length; h++) {
                    var d = this.children[h];
                    if (
                      d.size &&
                      d.dom.parentNode == this.contentDOM &&
                      !d.emptyChildAt(-1)
                    ) {
                      i = m(d.dom);
                      break;
                    }
                    t += d.size;
                  }
                  -1 == i && (i = this.contentDOM.childNodes.length);
                  break;
                }
                o = l;
              }
              return {
                node: this.contentDOM,
                from: e,
                to: t,
                fromOffset: r,
                toOffset: i,
              };
            },
          },
          {
            key: "emptyChildAt",
            value: function (e) {
              if (this.border || !this.contentDOM || !this.children.length)
                return !1;
              var t = this.children[e < 0 ? 0 : this.children.length - 1];
              return 0 == t.size || t.emptyChildAt(e);
            },
          },
          {
            key: "domAfterPos",
            value: function (e) {
              var t = this.domFromPos(e, 0),
                n = t.node,
                r = t.offset;
              if (1 != n.nodeType || r == n.childNodes.length)
                throw new RangeError("No node after pos " + e);
              return n.childNodes[r];
            },
          },
          {
            key: "setSelection",
            value: function (e, t, n) {
              for (
                var r =
                    arguments.length > 3 &&
                    void 0 !== arguments[3] &&
                    arguments[3],
                  i = Math.min(e, t),
                  o = Math.max(e, t),
                  s = 0,
                  a = 0;
                s < this.children.length;
                s++
              ) {
                var l = this.children[s],
                  c = a + l.size;
                if (i > a && o < c)
                  return l.setSelection(
                    e - a - l.border,
                    t - a - l.border,
                    n,
                    r,
                  );
                a = c;
              }
              var u = this.domFromPos(e, e ? -1 : 1),
                f = t == e ? u : this.domFromPos(t, t ? -1 : 1),
                h = n.getSelection(),
                d = !1;
              if ((B || H) && e == t) {
                var p = u,
                  v = p.node,
                  g = p.offset;
                if (3 == v.nodeType) {
                  if (
                    ((d = !(!g || "\n" != v.nodeValue[g - 1])),
                    d && g == v.nodeValue.length)
                  )
                    for (var y, w = v; w; w = w.parentNode) {
                      if ((y = w.nextSibling)) {
                        "BR" == y.nodeName &&
                          (u = f = { node: y.parentNode, offset: m(y) + 1 });
                        break;
                      }
                      var b = w.pmViewDesc;
                      if (b && b.node && b.node.isBlock) break;
                    }
                } else {
                  var x = v.childNodes[g - 1];
                  d = x && ("BR" == x.nodeName || "false" == x.contentEditable);
                }
              }
              if (
                B &&
                h.focusNode &&
                h.focusNode != f.node &&
                1 == h.focusNode.nodeType
              ) {
                var S = h.focusNode.childNodes[h.focusOffset];
                S && "false" == S.contentEditable && (r = !0);
              }
              if (
                r ||
                (d && H) ||
                !k(u.node, u.offset, h.anchorNode, h.anchorOffset) ||
                !k(f.node, f.offset, h.focusNode, h.focusOffset)
              ) {
                var C = !1;
                if ((h.extend || e == t) && !d) {
                  h.collapse(u.node, u.offset);
                  try {
                    (e != t && h.extend(f.node, f.offset), (C = !0));
                  } catch (N) {}
                }
                if (!C) {
                  if (e > t) {
                    var O = u;
                    ((u = f), (f = O));
                  }
                  var M = document.createRange();
                  (M.setEnd(f.node, f.offset),
                    M.setStart(u.node, u.offset),
                    h.removeAllRanges(),
                    h.addRange(M));
                }
              }
            },
          },
          {
            key: "ignoreMutation",
            value: function (e) {
              return !this.contentDOM && "selection" != e.type;
            },
          },
          {
            key: "contentLost",
            get: function () {
              return (
                this.contentDOM &&
                this.contentDOM != this.dom &&
                !this.dom.contains(this.contentDOM)
              );
            },
          },
          {
            key: "markDirty",
            value: function (e, t) {
              for (var n = 0, r = 0; r < this.children.length; r++) {
                var i = this.children[r],
                  o = n + i.size;
                if (n == o ? e <= o && t >= n : e < o && t > n) {
                  var s = n + i.border,
                    a = o - i.border;
                  if (e >= s && t <= a)
                    return (
                      (this.dirty = e == n || t == o ? De : Ae),
                      void (e != s ||
                      t != a ||
                      (!i.contentLost && i.dom.parentNode == this.contentDOM)
                        ? i.markDirty(e - s, t - s)
                        : (i.dirty = Ee))
                    );
                  i.dirty =
                    i.dom != i.contentDOM ||
                    i.dom.parentNode != this.contentDOM ||
                    i.children.length
                      ? Ee
                      : De;
                }
                n = o;
              }
              this.dirty = De;
            },
          },
          {
            key: "markParentsDirty",
            value: function () {
              for (var e = 1, t = this.parent; t; t = t.parent, e++) {
                var n = 1 == e ? De : Ae;
                t.dirty < n && (t.dirty = n);
              }
            },
          },
          {
            key: "domAtom",
            get: function () {
              return !1;
            },
          },
          {
            key: "ignoreForCoords",
            get: function () {
              return !1;
            },
          },
        ]),
        e
      );
    })(),
    Re = (function (e) {
      (0, l.Z)(n, e);
      var t = (0, c.Z)(n);
      function n(e, r, i, s) {
        var a;
        (0, u.Z)(this, n);
        var l,
          c = r.type.toDOM;
        if (
          ("function" == typeof c &&
            (c = c(i, function () {
              return l ? (l.parent ? l.parent.posBeforeChild(l) : void 0) : s;
            })),
          !r.type.spec.raw)
        ) {
          if (1 != c.nodeType) {
            var f = document.createElement("span");
            (f.appendChild(c), (c = f));
          }
          ((c.contentEditable = "false"),
            c.classList.add("ProseMirror-widget"));
        }
        return (
          (a = t.call(this, e, [], c, null)),
          (a.widget = r),
          (a.widget = r),
          (l = (0, o.Z)(a)),
          a
        );
      }
      return (
        (0, f.Z)(n, [
          {
            key: "matchesWidget",
            value: function (e) {
              return this.dirty == Ne && e.type.eq(this.widget.type);
            },
          },
          {
            key: "parseRule",
            value: function () {
              return { ignore: !0 };
            },
          },
          {
            key: "stopEvent",
            value: function (e) {
              var t = this.widget.spec.stopEvent;
              return !!t && t(e);
            },
          },
          {
            key: "ignoreMutation",
            value: function (e) {
              return "selection" != e.type || this.widget.spec.ignoreSelection;
            },
          },
          {
            key: "destroy",
            value: function () {
              (this.widget.type.destroy(this.dom),
                (0, s.Z)((0, a.Z)(n.prototype), "destroy", this).call(this));
            },
          },
          {
            key: "domAtom",
            get: function () {
              return !0;
            },
          },
          {
            key: "side",
            get: function () {
              return this.widget.type.side;
            },
          },
        ]),
        n
      );
    })(Te),
    Pe = (function (e) {
      (0, l.Z)(n, e);
      var t = (0, c.Z)(n);
      function n(e, r, i, o) {
        var s;
        return (
          (0, u.Z)(this, n),
          (s = t.call(this, e, [], r, null)),
          (s.textDOM = i),
          (s.text = o),
          s
        );
      }
      return (
        (0, f.Z)(n, [
          {
            key: "size",
            get: function () {
              return this.text.length;
            },
          },
          {
            key: "localPosFromDOM",
            value: function (e, t) {
              return e != this.textDOM
                ? this.posAtStart + (t ? this.size : 0)
                : this.posAtStart + t;
            },
          },
          {
            key: "domFromPos",
            value: function (e) {
              return { node: this.textDOM, offset: e };
            },
          },
          {
            key: "ignoreMutation",
            value: function (e) {
              return (
                "characterData" === e.type && e.target.nodeValue == e.oldValue
              );
            },
          },
        ]),
        n
      );
    })(Te),
    Ze = (function (e) {
      (0, l.Z)(n, e);
      var t = (0, c.Z)(n);
      function n(e, r, i, o) {
        var s;
        return (
          (0, u.Z)(this, n),
          (s = t.call(this, e, [], i, o)),
          (s.mark = r),
          s
        );
      }
      return (
        (0, f.Z)(
          n,
          [
            {
              key: "parseRule",
              value: function () {
                return this.dirty & Ee || this.mark.type.spec.reparseInView
                  ? null
                  : {
                      mark: this.mark.type.name,
                      attrs: this.mark.attrs,
                      contentElement: this.contentDOM,
                    };
              },
            },
            {
              key: "matchesMark",
              value: function (e) {
                return this.dirty != Ee && this.mark.eq(e);
              },
            },
            {
              key: "markDirty",
              value: function (e, t) {
                if (
                  ((0, s.Z)((0, a.Z)(n.prototype), "markDirty", this).call(
                    this,
                    e,
                    t,
                  ),
                  this.dirty != Ne)
                ) {
                  var r = this.parent;
                  while (!r.node) r = r.parent;
                  (r.dirty < this.dirty && (r.dirty = this.dirty),
                    (this.dirty = Ne));
                }
              },
            },
            {
              key: "slice",
              value: function (e, t, r) {
                var i = n.create(this.parent, this.mark, !0, r),
                  o = this.children,
                  s = this.size;
                (t < s && (o = nt(o, t, s, r)), e > 0 && (o = nt(o, 0, e, r)));
                for (var a = 0; a < o.length; a++) o[a].parent = i;
                return ((i.children = o), i);
              },
            },
          ],
          [
            {
              key: "create",
              value: function (e, t, r, i) {
                var o = i.nodeViews[t.type.name],
                  s = o && o(t, i, r);
                return (
                  (s && s.dom) ||
                    (s = d.PW.renderSpec(document, t.type.spec.toDOM(t, r))),
                  new n(e, t, s.dom, s.contentDOM || s.dom)
                );
              },
            },
          ],
        ),
        n
      );
    })(Te),
    Ie = (function (e) {
      (0, l.Z)(n, e);
      var t = (0, c.Z)(n);
      function n(e, r, i, o, s, a, l, c, f) {
        var h;
        return (
          (0, u.Z)(this, n),
          (h = t.call(this, e, [], s, a)),
          (h.node = r),
          (h.outerDeco = i),
          (h.innerDeco = o),
          (h.nodeDOM = l),
          h
        );
      }
      return (
        (0, f.Z)(
          n,
          [
            {
              key: "parseRule",
              value: function () {
                var e = this;
                if (this.node.type.spec.reparseInView) return null;
                var t = { node: this.node.type.name, attrs: this.node.attrs };
                if (
                  ("pre" == this.node.type.whitespace &&
                    (t.preserveWhitespace = "full"),
                  this.contentDOM)
                )
                  if (this.contentLost) {
                    for (var n = this.children.length - 1; n >= 0; n--) {
                      var r = this.children[n];
                      if (this.dom.contains(r.dom.parentNode)) {
                        t.contentElement = r.dom.parentNode;
                        break;
                      }
                    }
                    t.contentElement ||
                      (t.getContent = function () {
                        return d.HY.empty;
                      });
                  } else t.contentElement = this.contentDOM;
                else
                  t.getContent = function () {
                    return e.node.content;
                  };
                return t;
              },
            },
            {
              key: "matchesNode",
              value: function (e, t, n) {
                return (
                  this.dirty == Ne &&
                  e.eq(this.node) &&
                  We(t, this.outerDeco) &&
                  n.eq(this.innerDeco)
                );
              },
            },
            {
              key: "size",
              get: function () {
                return this.node.nodeSize;
              },
            },
            {
              key: "border",
              get: function () {
                return this.node.isLeaf ? 0 : 1;
              },
            },
            {
              key: "updateChildren",
              value: function (e, t) {
                var n = this,
                  r = this.node.inlineContent,
                  i = t,
                  o = e.composing ? this.localCompositionInfo(e, t) : null,
                  s = o && o.pos > -1 ? o : null,
                  a = o && o.pos < 0,
                  l = new Ue(this, s && s.node, e);
                (Xe(
                  this.node,
                  this.innerDeco,
                  function (t, o, s) {
                    (t.spec.marks
                      ? l.syncToMarks(t.spec.marks, r, e)
                      : t.type.side >= 0 &&
                        !s &&
                        l.syncToMarks(
                          o == n.node.childCount
                            ? d.vc.none
                            : n.node.child(o).marks,
                          r,
                          e,
                        ),
                      l.placeWidget(t, e, i));
                  },
                  function (t, n, s, c) {
                    var u;
                    (l.syncToMarks(t.marks, r, e),
                      l.findNodeMatch(t, n, s, c) ||
                        (a &&
                          e.state.selection.from > i &&
                          e.state.selection.to < i + t.nodeSize &&
                          (u = l.findIndexWithChild(o.node)) > -1 &&
                          l.updateNodeAt(t, n, s, u, e)) ||
                        l.updateNextNode(t, n, s, e, c, i) ||
                        l.addNode(t, n, s, e, i),
                      (i += t.nodeSize));
                  },
                ),
                  l.syncToMarks([], r, e),
                  this.node.isTextblock && l.addTextblockHacks(),
                  l.destroyRest(),
                  (l.changed || this.dirty == De) &&
                    (s && this.protectLocalComposition(e, s),
                    je(this.contentDOM, this.children, e),
                    L && Qe(this.dom)));
              },
            },
            {
              key: "localCompositionInfo",
              value: function (e, t) {
                var n = e.state.selection,
                  r = n.from,
                  i = n.to;
                if (
                  !(e.state.selection instanceof h.Bs) ||
                  r < t ||
                  i > t + this.node.content.size
                )
                  return null;
                var o = e.domSelectionRange(),
                  s = et(o.focusNode, o.focusOffset);
                if (!s || !this.dom.contains(s.parentNode)) return null;
                if (this.node.inlineContent) {
                  var a = s.nodeValue,
                    l = tt(this.node.content, a, r - t, i - t);
                  return l < 0 ? null : { node: s, pos: l, text: a };
                }
                return { node: s, pos: -1, text: "" };
              },
            },
            {
              key: "protectLocalComposition",
              value: function (e, t) {
                var n = t.node,
                  r = t.pos,
                  i = t.text;
                if (!this.getDesc(n)) {
                  for (var o = n; ; o = o.parentNode) {
                    if (o.parentNode == this.contentDOM) break;
                    while (o.previousSibling)
                      o.parentNode.removeChild(o.previousSibling);
                    while (o.nextSibling)
                      o.parentNode.removeChild(o.nextSibling);
                    o.pmViewDesc && (o.pmViewDesc = void 0);
                  }
                  var s = new Pe(this, o, n, i);
                  (e.input.compositionNodes.push(s),
                    (this.children = nt(this.children, r, r + i.length, e, s)));
                }
              },
            },
            {
              key: "update",
              value: function (e, t, n, r) {
                return (
                  !(this.dirty == Ee || !e.sameMarkup(this.node)) &&
                  (this.updateInner(e, t, n, r), !0)
                );
              },
            },
            {
              key: "updateInner",
              value: function (e, t, n, r) {
                (this.updateOuterDeco(t),
                  (this.node = e),
                  (this.innerDeco = n),
                  this.contentDOM && this.updateChildren(r, this.posAtStart),
                  (this.dirty = Ne));
              },
            },
            {
              key: "updateOuterDeco",
              value: function (e) {
                if (!We(e, this.outerDeco)) {
                  var t = 1 != this.nodeDOM.nodeType,
                    n = this.dom;
                  ((this.dom = qe(
                    this.dom,
                    this.nodeDOM,
                    Le(this.outerDeco, this.node, t),
                    Le(e, this.node, t),
                  )),
                    this.dom != n &&
                      ((n.pmViewDesc = void 0), (this.dom.pmViewDesc = this)),
                    (this.outerDeco = e));
                }
              },
            },
            {
              key: "selectNode",
              value: function () {
                (1 == this.nodeDOM.nodeType &&
                  this.nodeDOM.classList.add("ProseMirror-selectednode"),
                  (!this.contentDOM && this.node.type.spec.draggable) ||
                    (this.dom.draggable = !0));
              },
            },
            {
              key: "deselectNode",
              value: function () {
                (1 == this.nodeDOM.nodeType &&
                  this.nodeDOM.classList.remove("ProseMirror-selectednode"),
                  (!this.contentDOM && this.node.type.spec.draggable) ||
                    this.dom.removeAttribute("draggable"));
              },
            },
            {
              key: "domAtom",
              get: function () {
                return this.node.isAtom;
              },
            },
          ],
          [
            {
              key: "create",
              value: function (e, t, r, i, o, s) {
                var a,
                  l = o.nodeViews[t.type.name],
                  c =
                    l &&
                    l(
                      t,
                      o,
                      function () {
                        return a
                          ? a.parent
                            ? a.parent.posBeforeChild(a)
                            : void 0
                          : s;
                      },
                      r,
                      i,
                    ),
                  u = c && c.dom,
                  f = c && c.contentDOM;
                if (t.isText)
                  if (u) {
                    if (3 != u.nodeType)
                      throw new RangeError(
                        "Text must be rendered as a DOM text node",
                      );
                  } else u = document.createTextNode(t.text);
                else if (!u) {
                  var h = d.PW.renderSpec(document, t.type.spec.toDOM(t));
                  ((u = h.dom), (f = h.contentDOM));
                }
                f ||
                  t.isText ||
                  "BR" == u.nodeName ||
                  (u.hasAttribute("contenteditable") ||
                    (u.contentEditable = "false"),
                  t.type.spec.draggable && (u.draggable = !0));
                var p = u;
                return (
                  (u = Je(u, r, t)),
                  c
                    ? (a = new Ve(e, t, r, i, u, f || null, p, c, o, s + 1))
                    : t.isText
                      ? new $e(e, t, r, i, u, p, o)
                      : new n(e, t, r, i, u, f || null, p, o, s + 1)
                );
              },
            },
          ],
        ),
        n
      );
    })(Te);
  function ze(e, t, n, r, i) {
    Je(r, t, e);
    var o = new Ie(void 0, e, t, n, r, r, r, i, 0);
    return (o.contentDOM && o.updateChildren(i, 0), o);
  }
  var $e = (function (e) {
      (0, l.Z)(n, e);
      var t = (0, c.Z)(n);
      function n(e, r, i, o, s, a, l) {
        return ((0, u.Z)(this, n), t.call(this, e, r, i, o, s, null, a, l, 0));
      }
      return (
        (0, f.Z)(n, [
          {
            key: "parseRule",
            value: function () {
              var e = this.nodeDOM.parentNode;
              while (e && e != this.dom && !e.pmIsDeco) e = e.parentNode;
              return { skip: e || !0 };
            },
          },
          {
            key: "update",
            value: function (e, t, n, r) {
              return (
                !(
                  this.dirty == Ee ||
                  (this.dirty != Ne && !this.inParent()) ||
                  !e.sameMarkup(this.node)
                ) &&
                (this.updateOuterDeco(t),
                (this.dirty == Ne && e.text == this.node.text) ||
                  e.text == this.nodeDOM.nodeValue ||
                  ((this.nodeDOM.nodeValue = e.text),
                  r.trackWrites == this.nodeDOM && (r.trackWrites = null)),
                (this.node = e),
                (this.dirty = Ne),
                !0)
              );
            },
          },
          {
            key: "inParent",
            value: function () {
              for (
                var e = this.parent.contentDOM, t = this.nodeDOM;
                t;
                t = t.parentNode
              )
                if (t == e) return !0;
              return !1;
            },
          },
          {
            key: "domFromPos",
            value: function (e) {
              return { node: this.nodeDOM, offset: e };
            },
          },
          {
            key: "localPosFromDOM",
            value: function (e, t, r) {
              return e == this.nodeDOM
                ? this.posAtStart + Math.min(t, this.node.text.length)
                : (0, s.Z)((0, a.Z)(n.prototype), "localPosFromDOM", this).call(
                    this,
                    e,
                    t,
                    r,
                  );
            },
          },
          {
            key: "ignoreMutation",
            value: function (e) {
              return "characterData" != e.type && "selection" != e.type;
            },
          },
          {
            key: "slice",
            value: function (e, t, r) {
              var i = this.node.cut(e, t),
                o = document.createTextNode(i.text);
              return new n(
                this.parent,
                i,
                this.outerDeco,
                this.innerDeco,
                o,
                o,
                r,
              );
            },
          },
          {
            key: "markDirty",
            value: function (e, t) {
              ((0, s.Z)((0, a.Z)(n.prototype), "markDirty", this).call(
                this,
                e,
                t,
              ),
                this.dom == this.nodeDOM ||
                  (0 != e && t != this.nodeDOM.nodeValue.length) ||
                  (this.dirty = Ee));
            },
          },
          {
            key: "domAtom",
            get: function () {
              return !1;
            },
          },
        ]),
        n
      );
    })(Ie),
    Be = (function (e) {
      (0, l.Z)(n, e);
      var t = (0, c.Z)(n);
      function n() {
        return ((0, u.Z)(this, n), t.apply(this, arguments));
      }
      return (
        (0, f.Z)(n, [
          {
            key: "parseRule",
            value: function () {
              return { ignore: !0 };
            },
          },
          {
            key: "matchesHack",
            value: function (e) {
              return this.dirty == Ne && this.dom.nodeName == e;
            },
          },
          {
            key: "domAtom",
            get: function () {
              return !0;
            },
          },
          {
            key: "ignoreForCoords",
            get: function () {
              return "IMG" == this.dom.nodeName;
            },
          },
        ]),
        n
      );
    })(Te),
    Ve = (function (e) {
      (0, l.Z)(n, e);
      var t = (0, c.Z)(n);
      function n(e, r, i, o, s, a, l, c, f, h) {
        var d;
        return (
          (0, u.Z)(this, n),
          (d = t.call(this, e, r, i, o, s, a, l, f, h)),
          (d.spec = c),
          d
        );
      }
      return (
        (0, f.Z)(n, [
          {
            key: "update",
            value: function (e, t, r, i) {
              if (this.dirty == Ee) return !1;
              if (this.spec.update) {
                var o = this.spec.update(e, t, r);
                return (o && this.updateInner(e, t, r, i), o);
              }
              return (
                !(!this.contentDOM && !e.isLeaf) &&
                (0, s.Z)((0, a.Z)(n.prototype), "update", this).call(
                  this,
                  e,
                  t,
                  r,
                  i,
                )
              );
            },
          },
          {
            key: "selectNode",
            value: function () {
              this.spec.selectNode
                ? this.spec.selectNode()
                : (0, s.Z)((0, a.Z)(n.prototype), "selectNode", this).call(
                    this,
                  );
            },
          },
          {
            key: "deselectNode",
            value: function () {
              this.spec.deselectNode
                ? this.spec.deselectNode()
                : (0, s.Z)((0, a.Z)(n.prototype), "deselectNode", this).call(
                    this,
                  );
            },
          },
          {
            key: "setSelection",
            value: function (e, t, r, i) {
              this.spec.setSelection
                ? this.spec.setSelection(e, t, r)
                : (0, s.Z)((0, a.Z)(n.prototype), "setSelection", this).call(
                    this,
                    e,
                    t,
                    r,
                    i,
                  );
            },
          },
          {
            key: "destroy",
            value: function () {
              (this.spec.destroy && this.spec.destroy(),
                (0, s.Z)((0, a.Z)(n.prototype), "destroy", this).call(this));
            },
          },
          {
            key: "stopEvent",
            value: function (e) {
              return !!this.spec.stopEvent && this.spec.stopEvent(e);
            },
          },
          {
            key: "ignoreMutation",
            value: function (e) {
              return this.spec.ignoreMutation
                ? this.spec.ignoreMutation(e)
                : (0, s.Z)((0, a.Z)(n.prototype), "ignoreMutation", this).call(
                    this,
                    e,
                  );
            },
          },
        ]),
        n
      );
    })(Ie);
  function je(e, t, n) {
    for (var r = e.firstChild, i = !1, o = 0; o < t.length; o++) {
      var s = t[o],
        a = s.dom;
      if (a.parentNode == e) {
        while (a != r) ((r = Ye(r)), (i = !0));
        r = r.nextSibling;
      } else ((i = !0), e.insertBefore(a, r));
      if (s instanceof Ze) {
        var l = r ? r.previousSibling : e.lastChild;
        (je(s.contentDOM, s.children, n),
          (r = l ? l.nextSibling : e.firstChild));
      }
    }
    while (r) ((r = Ye(r)), (i = !0));
    i && n.trackWrites == e && (n.trackWrites = null);
  }
  var Fe = function (e) {
    e && (this.nodeName = e);
  };
  Fe.prototype = Object.create(null);
  var He = [new Fe()];
  function Le(e, t, n) {
    if (0 == e.length) return He;
    for (var r = n ? He[0] : new Fe(), i = [r], o = 0; o < e.length; o++) {
      var s = e[o].type.attrs;
      if (s)
        for (var a in (s.nodeName && i.push((r = new Fe(s.nodeName))), s)) {
          var l = s[a];
          null != l &&
            (n &&
              1 == i.length &&
              i.push((r = new Fe(t.isInline ? "span" : "div"))),
            "class" == a
              ? (r.class = (r.class ? r.class + " " : "") + l)
              : "style" == a
                ? (r.style = (r.style ? r.style + ";" : "") + l)
                : "nodeName" != a && (r[a] = l));
        }
    }
    return i;
  }
  function qe(e, t, n, r) {
    if (n == He && r == He) return t;
    for (var i = t, o = 0; o < r.length; o++) {
      var s = r[o],
        a = n[o];
      if (o) {
        var l = void 0;
        ((a &&
          a.nodeName == s.nodeName &&
          i != e &&
          (l = i.parentNode) &&
          l.nodeName.toLowerCase() == s.nodeName) ||
          ((l = document.createElement(s.nodeName)),
          (l.pmIsDeco = !0),
          l.appendChild(i),
          (a = He[0])),
          (i = l));
      }
      _e(i, a || He[0], s);
    }
    return i;
  }
  function _e(e, t, n) {
    for (var r in t)
      "class" == r ||
        "style" == r ||
        "nodeName" == r ||
        r in n ||
        e.removeAttribute(r);
    for (var i in n)
      "class" != i &&
        "style" != i &&
        "nodeName" != i &&
        n[i] != t[i] &&
        e.setAttribute(i, n[i]);
    if (t.class != n.class) {
      for (
        var o = t.class ? t.class.split(" ").filter(Boolean) : [],
          s = n.class ? n.class.split(" ").filter(Boolean) : [],
          a = 0;
        a < o.length;
        a++
      )
        -1 == s.indexOf(o[a]) && e.classList.remove(o[a]);
      for (var l = 0; l < s.length; l++)
        -1 == o.indexOf(s[l]) && e.classList.add(s[l]);
      0 == e.classList.length && e.removeAttribute("class");
    }
    if (t.style != n.style) {
      if (t.style) {
        var c,
          u =
            /\s*([\w\-\xa1-\uffff]+)\s*:(?:"(?:\\.|[^"])*"|'(?:\\.|[^'])*'|\(.*?\)|[^;])*/g;
        while ((c = u.exec(t.style))) e.style.removeProperty(c[1]);
      }
      n.style && (e.style.cssText += n.style);
    }
  }
  function Je(e, t, n) {
    return qe(e, e, He, Le(t, n, 1 != e.nodeType));
  }
  function We(e, t) {
    if (e.length != t.length) return !1;
    for (var n = 0; n < e.length; n++) if (!e[n].type.eq(t[n].type)) return !1;
    return !0;
  }
  function Ye(e) {
    var t = e.nextSibling;
    return (e.parentNode.removeChild(e), t);
  }
  var Ue = (function () {
    function e(t, n, r) {
      ((0, u.Z)(this, e),
        (this.lock = n),
        (this.view = r),
        (this.index = 0),
        (this.stack = []),
        (this.changed = !1),
        (this.top = t),
        (this.preMatch = Ke(t.node.content, t)));
    }
    return (
      (0, f.Z)(e, [
        {
          key: "destroyBetween",
          value: function (e, t) {
            if (e != t) {
              for (var n = e; n < t; n++) this.top.children[n].destroy();
              (this.top.children.splice(e, t - e), (this.changed = !0));
            }
          },
        },
        {
          key: "destroyRest",
          value: function () {
            this.destroyBetween(this.index, this.top.children.length);
          },
        },
        {
          key: "syncToMarks",
          value: function (e, t, n) {
            var r = 0,
              i = this.stack.length >> 1,
              o = Math.min(i, e.length);
            while (
              r < o &&
              (r == i - 1 ? this.top : this.stack[(r + 1) << 1]).matchesMark(
                e[r],
              ) &&
              !1 !== e[r].type.spec.spanning
            )
              r++;
            while (r < i)
              (this.destroyRest(),
                (this.top.dirty = Ne),
                (this.index = this.stack.pop()),
                (this.top = this.stack.pop()),
                i--);
            while (i < e.length) {
              this.stack.push(this.top, this.index + 1);
              for (
                var s = -1, a = this.index;
                a < Math.min(this.index + 3, this.top.children.length);
                a++
              ) {
                var l = this.top.children[a];
                if (l.matchesMark(e[i]) && !this.isLocked(l.dom)) {
                  s = a;
                  break;
                }
              }
              if (s > -1)
                (s > this.index &&
                  ((this.changed = !0), this.destroyBetween(this.index, s)),
                  (this.top = this.top.children[this.index]));
              else {
                var c = Ze.create(this.top, e[i], t, n);
                (this.top.children.splice(this.index, 0, c),
                  (this.top = c),
                  (this.changed = !0));
              }
              ((this.index = 0), i++);
            }
          },
        },
        {
          key: "findNodeMatch",
          value: function (e, t, n, r) {
            var i,
              o = -1;
            if (
              r >= this.preMatch.index &&
              (i = this.preMatch.matches[r - this.preMatch.index]).parent ==
                this.top &&
              i.matchesNode(e, t, n)
            )
              o = this.top.children.indexOf(i, this.index);
            else
              for (
                var s = this.index,
                  a = Math.min(this.top.children.length, s + 5);
                s < a;
                s++
              ) {
                var l = this.top.children[s];
                if (l.matchesNode(e, t, n) && !this.preMatch.matched.has(l)) {
                  o = s;
                  break;
                }
              }
            return (
              !(o < 0) && (this.destroyBetween(this.index, o), this.index++, !0)
            );
          },
        },
        {
          key: "updateNodeAt",
          value: function (e, t, n, r, i) {
            var o = this.top.children[r];
            return (
              o.dirty == Ee && o.dom == o.contentDOM && (o.dirty = De),
              !!o.update(e, t, n, i) &&
                (this.destroyBetween(this.index, r), this.index++, !0)
            );
          },
        },
        {
          key: "findIndexWithChild",
          value: function (e) {
            for (;;) {
              var t = e.parentNode;
              if (!t) return -1;
              if (t == this.top.contentDOM) {
                var n = e.pmViewDesc;
                if (n)
                  for (var r = this.index; r < this.top.children.length; r++)
                    if (this.top.children[r] == n) return r;
                return -1;
              }
              e = t;
            }
          },
        },
        {
          key: "updateNextNode",
          value: function (e, t, n, r, i, o) {
            for (var s = this.index; s < this.top.children.length; s++) {
              var a = this.top.children[s];
              if (a instanceof Ie) {
                var l = this.preMatch.matched.get(a);
                if (null != l && l != i) return !1;
                var c = a.dom,
                  u = void 0,
                  f =
                    this.isLocked(c) &&
                    !(
                      e.isText &&
                      a.node &&
                      a.node.isText &&
                      a.nodeDOM.nodeValue == e.text &&
                      a.dirty != Ee &&
                      We(t, a.outerDeco)
                    );
                if (!f && a.update(e, t, n, r))
                  return (
                    this.destroyBetween(this.index, s),
                    a.dom != c && (this.changed = !0),
                    this.index++,
                    !0
                  );
                if (!f && (u = this.recreateWrapper(a, e, t, n, r, o)))
                  return (
                    (this.top.children[this.index] = u),
                    (u.dirty = De),
                    u.updateChildren(r, o + 1),
                    (u.dirty = Ne),
                    (this.changed = !0),
                    this.index++,
                    !0
                  );
                break;
              }
            }
            return !1;
          },
        },
        {
          key: "recreateWrapper",
          value: function (e, t, n, r, o, s) {
            if (
              e.dirty ||
              t.isAtom ||
              !e.children.length ||
              !e.node.content.eq(t.content)
            )
              return null;
            var a = Ie.create(this.top, t, n, r, o, s);
            if (!a.contentDOM) return null;
            ((a.children = e.children), (e.children = []), e.destroy());
            var l,
              c = (0, i.Z)(a.children);
            try {
              for (c.s(); !(l = c.n()).done; ) {
                var u = l.value;
                u.parent = a;
              }
            } catch (f) {
              c.e(f);
            } finally {
              c.f();
            }
            return a;
          },
        },
        {
          key: "addNode",
          value: function (e, t, n, r, i) {
            var o = Ie.create(this.top, e, t, n, r, i);
            (o.contentDOM && o.updateChildren(r, i + 1),
              this.top.children.splice(this.index++, 0, o),
              (this.changed = !0));
          },
        },
        {
          key: "placeWidget",
          value: function (e, t, n) {
            var r =
              this.index < this.top.children.length
                ? this.top.children[this.index]
                : null;
            if (
              !r ||
              !r.matchesWidget(e) ||
              (e != r.widget && r.widget.type.toDOM.parentNode)
            ) {
              var i = new Re(this.top, e, t, n);
              (this.top.children.splice(this.index++, 0, i),
                (this.changed = !0));
            } else this.index++;
          },
        },
        {
          key: "addTextblockHacks",
          value: function () {
            var e = this.top.children[this.index - 1],
              t = this.top;
            while (e instanceof Ze)
              ((t = e), (e = t.children[t.children.length - 1]));
            (!e ||
              !(e instanceof $e) ||
              /\n$/.test(e.node.text) ||
              (this.view.requiresGeckoHackNode && /\s$/.test(e.node.text))) &&
              ((H || j) &&
                e &&
                "false" == e.dom.contentEditable &&
                this.addHackNode("IMG", t),
              this.addHackNode("BR", this.top));
          },
        },
        {
          key: "addHackNode",
          value: function (e, t) {
            if (
              t == this.top &&
              this.index < t.children.length &&
              t.children[this.index].matchesHack(e)
            )
              this.index++;
            else {
              var n = document.createElement(e);
              ("IMG" == e &&
                ((n.className = "ProseMirror-separator"), (n.alt = "")),
                "BR" == e && (n.className = "ProseMirror-trailingBreak"));
              var r = new Be(this.top, [], n, null);
              (t != this.top
                ? t.children.push(r)
                : t.children.splice(this.index++, 0, r),
                (this.changed = !0));
            }
          },
        },
        {
          key: "isLocked",
          value: function (e) {
            return (
              this.lock &&
              (e == this.lock ||
                (1 == e.nodeType && e.contains(this.lock.parentNode)))
            );
          },
        },
      ]),
      e
    );
  })();
  function Ke(e, t) {
    var n = t,
      r = n.children.length,
      i = e.childCount,
      o = new Map(),
      s = [];
    e: while (i > 0) {
      for (var a = void 0; ; )
        if (r) {
          var l = n.children[r - 1];
          if (!(l instanceof Ze)) {
            ((a = l), r--);
            break;
          }
          ((n = l), (r = l.children.length));
        } else {
          if (n == t) break e;
          ((r = n.parent.children.indexOf(n)), (n = n.parent));
        }
      var c = a.node;
      if (c) {
        if (c != e.child(i - 1)) break;
        (--i, o.set(a, i), s.push(a));
      }
    }
    return { index: i, matched: o, matches: s.reverse() };
  }
  function Ge(e, t) {
    return e.type.side - t.type.side;
  }
  function Xe(e, t, n, r) {
    var i = t.locals(e),
      o = 0;
    if (0 != i.length)
      for (var s = 0, a = [], l = null, c = 0; ; ) {
        if (s < i.length && i[s].to == o) {
          var u = i[s++],
            f = void 0;
          while (s < i.length && i[s].to == o) (f || (f = [u])).push(i[s++]);
          if (f) {
            f.sort(Ge);
            for (var h = 0; h < f.length; h++) n(f[h], c, !!l);
          } else n(u, c, !!l);
        }
        var d = void 0,
          p = void 0;
        if (l) ((p = -1), (d = l), (l = null));
        else {
          if (!(c < e.childCount)) break;
          ((p = c), (d = e.child(c++)));
        }
        for (var v = 0; v < a.length; v++) a[v].to <= o && a.splice(v--, 1);
        while (s < i.length && i[s].from <= o && i[s].to > o) a.push(i[s++]);
        var m = o + d.nodeSize;
        if (d.isText) {
          var g = m;
          s < i.length && i[s].from < g && (g = i[s].from);
          for (var y = 0; y < a.length; y++) a[y].to < g && (g = a[y].to);
          g < m &&
            ((l = d.cut(g - o)), (d = d.cut(0, g - o)), (m = g), (p = -1));
        }
        var w =
          d.isInline && !d.isLeaf
            ? a.filter(function (e) {
                return !e.inline;
              })
            : a.slice();
        (r(d, w, t.forChild(o, d), p), (o = m));
      }
    else
      for (var k = 0; k < e.childCount; k++) {
        var b = e.child(k);
        (r(b, i, t.forChild(o, b), k), (o += b.nodeSize));
      }
  }
  function Qe(e) {
    if ("UL" == e.nodeName || "OL" == e.nodeName) {
      var t = e.style.cssText;
      ((e.style.cssText = t + "; list-style: square !important"),
        window.getComputedStyle(e).listStyle,
        (e.style.cssText = t));
    }
  }
  function et(e, t) {
    for (;;) {
      if (3 == e.nodeType) return e;
      if (1 == e.nodeType && t > 0) {
        if (e.childNodes.length > t && 3 == e.childNodes[t].nodeType)
          return e.childNodes[t];
        ((e = e.childNodes[t - 1]), (t = S(e)));
      } else {
        if (!(1 == e.nodeType && t < e.childNodes.length)) return null;
        ((e = e.childNodes[t]), (t = 0));
      }
    }
  }
  function tt(e, t, n, r) {
    for (var i = 0, o = 0; i < e.childCount && o <= r; ) {
      var s = e.child(i++),
        a = o;
      if (((o += s.nodeSize), s.isText)) {
        var l = s.text;
        while (i < e.childCount) {
          var c = e.child(i++);
          if (((o += c.nodeSize), !c.isText)) break;
          l += c.text;
        }
        if (o >= n) {
          var u = a < r ? l.lastIndexOf(t, r - a - 1) : -1;
          if (u >= 0 && u + t.length + a >= n) return a + u;
          if (
            n == r &&
            l.length >= r + t.length - a &&
            l.slice(r - a, r - a + t.length) == t
          )
            return r;
        }
      }
    }
    return -1;
  }
  function nt(e, t, n, r, i) {
    for (var o = [], s = 0, a = 0; s < e.length; s++) {
      var l = e[s],
        c = a,
        u = (a += l.size);
      c >= n || u <= t
        ? o.push(l)
        : (c < t && o.push(l.slice(0, t - c, r)),
          i && (o.push(i), (i = void 0)),
          u > n && o.push(l.slice(n - c, l.size, r)));
    }
    return o;
  }
  function rt(e) {
    var t =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
      n = e.domSelectionRange(),
      r = e.state.doc;
    if (!n.focusNode) return null;
    var i = e.docView.nearestDesc(n.focusNode),
      o = i && 0 == i.size,
      s = e.docView.posFromDOM(n.focusNode, n.focusOffset, 1);
    if (s < 0) return null;
    var a,
      l,
      c = r.resolve(s);
    if (M(n)) {
      a = c;
      while (i && !i.node) i = i.parent;
      var u = i.node;
      if (
        i &&
        u.isAtom &&
        h.qv.isSelectable(u) &&
        i.parent &&
        (!u.isInline || !C(n.focusNode, n.focusOffset, i.dom))
      ) {
        var f = i.posBefore;
        l = new h.qv(s == f ? c : r.resolve(f));
      }
    } else {
      var d = e.docView.posFromDOM(n.anchorNode, n.anchorOffset, 1);
      if (d < 0) return null;
      a = r.resolve(d);
    }
    if (!l) {
      var p = "pointer" == t || (e.state.selection.head < c.pos && !o) ? 1 : -1;
      l = pt(e, a, c, p);
    }
    return l;
  }
  function it(e) {
    return e.editable
      ? e.hasFocus()
      : mt(e) &&
          document.activeElement &&
          document.activeElement.contains(e.dom);
  }
  function ot(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      n = e.state.selection;
    if ((ht(e, n), it(e))) {
      if (!t && e.input.mouseDown && e.input.mouseDown.allowDefault && j) {
        var r = e.domSelectionRange(),
          i = e.domObserver.currentSelection;
        if (
          r.anchorNode &&
          i.anchorNode &&
          k(r.anchorNode, r.anchorOffset, i.anchorNode, i.anchorOffset)
        )
          return (
            (e.input.mouseDown.delayedSelectionSync = !0),
            void e.domObserver.setCurSelection()
          );
      }
      if ((e.domObserver.disconnectSelection(), e.cursorWrapper)) ft(e);
      else {
        var o,
          s,
          a = n.anchor,
          l = n.head;
        (!st ||
          n instanceof h.Bs ||
          (n.$from.parent.inlineContent || (o = at(e, n.from)),
          n.empty || n.$from.parent.inlineContent || (s = at(e, n.to))),
          e.docView.setSelection(a, l, e.root, t),
          st && (o && ct(o), s && ct(s)),
          n.visible
            ? e.dom.classList.remove("ProseMirror-hideselection")
            : (e.dom.classList.add("ProseMirror-hideselection"),
              "onselectionchange" in document && ut(e)));
      }
      (e.domObserver.setCurSelection(), e.domObserver.connectSelection());
    }
  }
  var st = H || (j && F < 63);
  function at(e, t) {
    var n = e.docView.domFromPos(t, 0),
      r = n.node,
      i = n.offset,
      o = i < r.childNodes.length ? r.childNodes[i] : null,
      s = i ? r.childNodes[i - 1] : null;
    if (H && o && "false" == o.contentEditable) return lt(o);
    if (
      (!o || "false" == o.contentEditable) &&
      (!s || "false" == s.contentEditable)
    ) {
      if (o) return lt(o);
      if (s) return lt(s);
    }
  }
  function lt(e) {
    return (
      (e.contentEditable = "true"),
      H && e.draggable && ((e.draggable = !1), (e.wasDraggable = !0)),
      e
    );
  }
  function ct(e) {
    ((e.contentEditable = "false"),
      e.wasDraggable && ((e.draggable = !0), (e.wasDraggable = null)));
  }
  function ut(e) {
    var t = e.dom.ownerDocument;
    t.removeEventListener("selectionchange", e.input.hideSelectionGuard);
    var n = e.domSelectionRange(),
      r = n.anchorNode,
      i = n.anchorOffset;
    t.addEventListener(
      "selectionchange",
      (e.input.hideSelectionGuard = function () {
        (n.anchorNode == r && n.anchorOffset == i) ||
          (t.removeEventListener("selectionchange", e.input.hideSelectionGuard),
          setTimeout(function () {
            (it(e) && !e.state.selection.visible) ||
              e.dom.classList.remove("ProseMirror-hideselection");
          }, 20));
      }),
    );
  }
  function ft(e) {
    var t = e.domSelection(),
      n = document.createRange(),
      r = e.cursorWrapper.dom,
      i = "IMG" == r.nodeName;
    (i ? n.setEnd(r.parentNode, m(r) + 1) : n.setEnd(r, 0),
      n.collapse(!1),
      t.removeAllRanges(),
      t.addRange(n),
      !i &&
        !e.state.selection.visible &&
        z &&
        $ <= 11 &&
        ((r.disabled = !0), (r.disabled = !1)));
  }
  function ht(e, t) {
    if (t instanceof h.qv) {
      var n = e.docView.descAt(t.from);
      n != e.lastSelectedViewDesc &&
        (dt(e), n && n.selectNode(), (e.lastSelectedViewDesc = n));
    } else dt(e);
  }
  function dt(e) {
    e.lastSelectedViewDesc &&
      (e.lastSelectedViewDesc.parent && e.lastSelectedViewDesc.deselectNode(),
      (e.lastSelectedViewDesc = void 0));
  }
  function pt(e, t, n, r) {
    return (
      e.someProp("createSelectionBetween", function (r) {
        return r(e, t, n);
      }) || h.Bs.between(t, n, r)
    );
  }
  function vt(e) {
    return !(e.editable && !e.hasFocus()) && mt(e);
  }
  function mt(e) {
    var t = e.domSelectionRange();
    if (!t.anchorNode) return !1;
    try {
      return (
        e.dom.contains(
          3 == t.anchorNode.nodeType ? t.anchorNode.parentNode : t.anchorNode,
        ) &&
        (e.editable ||
          e.dom.contains(
            3 == t.focusNode.nodeType ? t.focusNode.parentNode : t.focusNode,
          ))
      );
    } catch (n) {
      return !1;
    }
  }
  function gt(e) {
    var t = e.docView.domFromPos(e.state.selection.anchor, 0),
      n = e.domSelectionRange();
    return k(t.node, t.offset, n.anchorNode, n.anchorOffset);
  }
  function yt(e, t) {
    var n = e.selection,
      r = n.$anchor,
      i = n.$head,
      o = t > 0 ? r.max(i) : r.min(i),
      s = o.parent.inlineContent
        ? o.depth
          ? e.doc.resolve(t > 0 ? o.after() : o.before())
          : null
        : o;
    return s && h.Y1.findFrom(s, t);
  }
  function wt(e, t) {
    return (e.dispatch(e.state.tr.setSelection(t).scrollIntoView()), !0);
  }
  function kt(e, t, n) {
    var r = e.state.selection;
    if (!(r instanceof h.Bs)) {
      if (r instanceof h.qv && r.node.isInline)
        return wt(e, new h.Bs(t > 0 ? r.$to : r.$from));
      var i = yt(e.state, t);
      return !!i && wt(e, i);
    }
    if (!r.empty || n.indexOf("s") > -1) return !1;
    if (e.endOfTextblock(t > 0 ? "forward" : "backward")) {
      var o = yt(e.state, t);
      return !!(o && o instanceof h.qv) && wt(e, o);
    }
    if (!(q && n.indexOf("m") > -1)) {
      var s,
        a = r.$head,
        l = a.textOffset ? null : t < 0 ? a.nodeBefore : a.nodeAfter;
      if (!l || l.isText) return !1;
      var c = t < 0 ? a.pos - l.nodeSize : a.pos;
      return (
        !!(l.isAtom || ((s = e.docView.descAt(c)) && !s.contentDOM)) &&
        (h.qv.isSelectable(l)
          ? wt(e, new h.qv(t < 0 ? e.state.doc.resolve(a.pos - l.nodeSize) : a))
          : !!W &&
            wt(e, new h.Bs(e.state.doc.resolve(t < 0 ? c : c + l.nodeSize))))
      );
    }
  }
  function bt(e) {
    return 3 == e.nodeType ? e.nodeValue.length : e.childNodes.length;
  }
  function xt(e) {
    if ("false" == e.contentEditable) return !0;
    var t = e.pmViewDesc;
    return t && 0 == t.size && (e.nextSibling || "BR" != e.nodeName);
  }
  function St(e, t) {
    return t < 0 ? Ct(e) : Ot(e);
  }
  function Ct(e) {
    var t = e.domSelectionRange(),
      n = t.focusNode,
      r = t.focusOffset;
    if (n) {
      var i,
        o,
        s = !1;
      for (
        B && 1 == n.nodeType && r < bt(n) && xt(n.childNodes[r]) && (s = !0);
        ;
      )
        if (r > 0) {
          if (1 != n.nodeType) break;
          var a = n.childNodes[r - 1];
          if (xt(a)) ((i = n), (o = --r));
          else {
            if (3 != a.nodeType) break;
            ((n = a), (r = n.nodeValue.length));
          }
        } else {
          if (Mt(n)) break;
          var l = n.previousSibling;
          while (l && xt(l))
            ((i = n.parentNode), (o = m(l)), (l = l.previousSibling));
          if (l) ((n = l), (r = bt(n)));
          else {
            if (((n = n.parentNode), n == e.dom)) break;
            r = 0;
          }
        }
      s ? Dt(e, n, r) : i && Dt(e, i, o);
    }
  }
  function Ot(e) {
    var t = e.domSelectionRange(),
      n = t.focusNode,
      r = t.focusOffset;
    if (n) {
      for (var i, o, s = bt(n); ; )
        if (r < s) {
          if (1 != n.nodeType) break;
          var a = n.childNodes[r];
          if (!xt(a)) break;
          ((i = n), (o = ++r));
        } else {
          if (Mt(n)) break;
          var l = n.nextSibling;
          while (l && xt(l))
            ((i = l.parentNode), (o = m(l) + 1), (l = l.nextSibling));
          if (l) ((n = l), (r = 0), (s = bt(n)));
          else {
            if (((n = n.parentNode), n == e.dom)) break;
            r = s = 0;
          }
        }
      i && Dt(e, i, o);
    }
  }
  function Mt(e) {
    var t = e.pmViewDesc;
    return t && t.node && t.node.isBlock;
  }
  function Nt(e, t) {
    while (e && t == e.childNodes.length && !O(e))
      ((t = m(e) + 1), (e = e.parentNode));
    while (e && t < e.childNodes.length) {
      if (((e = e.childNodes[t]), 3 == e.nodeType)) return e;
      t = 0;
    }
  }
  function At(e, t) {
    while (e && !t && !O(e)) ((t = m(e)), (e = e.parentNode));
    while (e && t) {
      if (((e = e.childNodes[t - 1]), 3 == e.nodeType)) return e;
      t = e.childNodes.length;
    }
  }
  function Dt(e, t, n) {
    var r, i;
    3 != t.nodeType &&
      ((i = Nt(t, n))
        ? ((t = i), (n = 0))
        : (r = At(t, n)) && ((t = r), (n = r.nodeValue.length)));
    var o = e.domSelection();
    if (M(o)) {
      var s = document.createRange();
      (s.setEnd(t, n), s.setStart(t, n), o.removeAllRanges(), o.addRange(s));
    } else o.extend && o.extend(t, n);
    e.domObserver.setCurSelection();
    var a = e.state;
    setTimeout(function () {
      e.state == a && ot(e);
    }, 50);
  }
  function Et(e, t) {
    var n = e.state.doc.resolve(t);
    if (!j && !_ && n.parent.inlineContent) {
      var r = e.coordsAtPos(t);
      if (t > n.start()) {
        var i = e.coordsAtPos(t - 1),
          o = (i.top + i.bottom) / 2;
        if (o > r.top && o < r.bottom && Math.abs(i.left - r.left) > 1)
          return i.left < r.left ? "ltr" : "rtl";
      }
      if (t < n.end()) {
        var s = e.coordsAtPos(t + 1),
          a = (s.top + s.bottom) / 2;
        if (a > r.top && a < r.bottom && Math.abs(s.left - r.left) > 1)
          return s.left > r.left ? "ltr" : "rtl";
      }
    }
    var l = getComputedStyle(e.dom).direction;
    return "rtl" == l ? "rtl" : "ltr";
  }
  function Tt(e, t, n) {
    var r = e.state.selection;
    if ((r instanceof h.Bs && !r.empty) || n.indexOf("s") > -1) return !1;
    if (q && n.indexOf("m") > -1) return !1;
    var i = r.$from,
      o = r.$to;
    if (!i.parent.inlineContent || e.endOfTextblock(t < 0 ? "up" : "down")) {
      var s = yt(e.state, t);
      if (s && s instanceof h.qv) return wt(e, s);
    }
    if (!i.parent.inlineContent) {
      var a = t < 0 ? i : o,
        l = r instanceof h.C1 ? h.Y1.near(a, t) : h.Y1.findFrom(a, t);
      return !!l && wt(e, l);
    }
    return !1;
  }
  function Rt(e, t) {
    if (!(e.state.selection instanceof h.Bs)) return !0;
    var n = e.state.selection,
      r = n.$head,
      i = n.$anchor,
      o = n.empty;
    if (!r.sameParent(i)) return !0;
    if (!o) return !1;
    if (e.endOfTextblock(t > 0 ? "forward" : "backward")) return !0;
    var s = !r.textOffset && (t < 0 ? r.nodeBefore : r.nodeAfter);
    if (s && !s.isText) {
      var a = e.state.tr;
      return (
        t < 0
          ? a.delete(r.pos - s.nodeSize, r.pos)
          : a.delete(r.pos, r.pos + s.nodeSize),
        e.dispatch(a),
        !0
      );
    }
    return !1;
  }
  function Pt(e, t, n) {
    (e.domObserver.stop(), (t.contentEditable = n), e.domObserver.start());
  }
  function Zt(e) {
    if (!H || e.state.selection.$head.parentOffset > 0) return !1;
    var t = e.domSelectionRange(),
      n = t.focusNode,
      r = t.focusOffset;
    if (
      n &&
      1 == n.nodeType &&
      0 == r &&
      n.firstChild &&
      "false" == n.firstChild.contentEditable
    ) {
      var i = n.firstChild;
      (Pt(e, i, "true"),
        setTimeout(function () {
          return Pt(e, i, "false");
        }, 20));
    }
    return !1;
  }
  function It(e) {
    var t = "";
    return (
      e.ctrlKey && (t += "c"),
      e.metaKey && (t += "m"),
      e.altKey && (t += "a"),
      e.shiftKey && (t += "s"),
      t
    );
  }
  function zt(e, t) {
    var n = t.keyCode,
      r = It(t);
    if (8 == n || (q && 72 == n && "c" == r)) return Rt(e, -1) || St(e, -1);
    if ((46 == n && !t.shiftKey) || (q && 68 == n && "c" == r))
      return Rt(e, 1) || St(e, 1);
    if (13 == n || 27 == n) return !0;
    if (37 == n || (q && 66 == n && "c" == r)) {
      var i = 37 == n ? ("ltr" == Et(e, e.state.selection.from) ? -1 : 1) : -1;
      return kt(e, i, r) || St(e, i);
    }
    if (39 == n || (q && 70 == n && "c" == r)) {
      var o = 39 == n ? ("ltr" == Et(e, e.state.selection.from) ? 1 : -1) : 1;
      return kt(e, o, r) || St(e, o);
    }
    return 38 == n || (q && 80 == n && "c" == r)
      ? Tt(e, -1, r) || St(e, -1)
      : 40 == n || (q && 78 == n && "c" == r)
        ? Zt(e) || Tt(e, 1, r) || Ot(e)
        : r == (q ? "m" : "c") && (66 == n || 73 == n || 89 == n || 90 == n);
  }
  function $t(e, t) {
    e.someProp("transformCopied", function (n) {
      t = n(t, e);
    });
    var n = [],
      r = t,
      i = r.content,
      o = r.openStart,
      s = r.openEnd;
    while (
      o > 1 &&
      s > 1 &&
      1 == i.childCount &&
      1 == i.firstChild.childCount
    ) {
      (o--, s--);
      var a = i.firstChild;
      (n.push(a.type.name, a.attrs != a.type.defaultAttrs ? a.attrs : null),
        (i = a.content));
    }
    var l =
        e.someProp("clipboardSerializer") || d.PW.fromSchema(e.state.schema),
      c = Yt(),
      u = c.createElement("div");
    u.appendChild(l.serializeFragment(i, { document: c }));
    var f,
      h = u.firstChild,
      p = 0;
    while (h && 1 == h.nodeType && (f = Jt[h.nodeName.toLowerCase()])) {
      for (var v = f.length - 1; v >= 0; v--) {
        var m = c.createElement(f[v]);
        while (u.firstChild) m.appendChild(u.firstChild);
        (u.appendChild(m), p++);
      }
      h = u.firstChild;
    }
    h &&
      1 == h.nodeType &&
      h.setAttribute(
        "data-pm-slice",
        ""
          .concat(o, " ")
          .concat(s)
          .concat(p ? " -".concat(p) : "", " ")
          .concat(JSON.stringify(n)),
      );
    var g =
      e.someProp("clipboardTextSerializer", function (n) {
        return n(t, e);
      }) || t.content.textBetween(0, t.content.size, "\n\n");
    return { dom: u, text: g };
  }
  function Bt(e, t, n, r, i) {
    var o,
      s,
      a = i.parent.type.spec.code;
    if (!n && !t) return null;
    var l = t && (r || a || !n);
    if (l) {
      if (
        (e.someProp("transformPastedText", function (n) {
          t = n(t, a || r, e);
        }),
        a)
      )
        return t
          ? new d.p2(
              d.HY.from(e.state.schema.text(t.replace(/\r\n?/g, "\n"))),
              0,
              0,
            )
          : d.p2.empty;
      var c = e.someProp("clipboardTextParser", function (n) {
        return n(t, i, r, e);
      });
      if (c) s = c;
      else {
        var u = i.marks(),
          f = e.state.schema,
          h = d.PW.fromSchema(f);
        ((o = document.createElement("div")),
          t.split(/(?:\r\n?|\n)+/).forEach(function (e) {
            var t = o.appendChild(document.createElement("p"));
            e && t.appendChild(h.serializeNode(f.text(e, u)));
          }));
      }
    } else
      (e.someProp("transformPastedHTML", function (t) {
        n = t(n, e);
      }),
        (o = Ut(n)),
        W && Kt(o));
    var p = o && o.querySelector("[data-pm-slice]"),
      v =
        p &&
        /^(\d+) (\d+)(?: -(\d+))? (.*)/.exec(
          p.getAttribute("data-pm-slice") || "",
        );
    if (v && v[3])
      for (var m = +v[3]; m > 0; m--) {
        var g = o.firstChild;
        while (g && 1 != g.nodeType) g = g.nextSibling;
        if (!g) break;
        o = g;
      }
    if (!s) {
      var y =
        e.someProp("clipboardParser") ||
        e.someProp("domParser") ||
        d.aw.fromSchema(e.state.schema);
      s = y.parseSlice(o, {
        preserveWhitespace: !(!l && !v),
        context: i,
        ruleFromNode: function (e) {
          return "BR" != e.nodeName ||
            e.nextSibling ||
            !e.parentNode ||
            Vt.test(e.parentNode.nodeName)
            ? null
            : { ignore: !0 };
        },
      });
    }
    if (v) s = Gt(_t(s, +v[1], +v[2]), v[4]);
    else if (
      ((s = d.p2.maxOpen(jt(s.content, i), !0)), s.openStart || s.openEnd)
    ) {
      for (
        var w = 0, k = 0, b = s.content.firstChild;
        w < s.openStart && !b.type.spec.isolating;
        w++, b = b.firstChild
      );
      for (
        var x = s.content.lastChild;
        k < s.openEnd && !x.type.spec.isolating;
        k++, x = x.lastChild
      );
      s = _t(s, w, k);
    }
    return (
      e.someProp("transformPasted", function (t) {
        s = t(s, e);
      }),
      s
    );
  }
  var Vt =
    /^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var)$/i;
  function jt(e, t) {
    if (e.childCount < 2) return e;
    for (
      var n = function () {
          var n,
            r = t.node(i),
            o = r.contentMatchAt(t.index(i)),
            s = [];
          if (
            (e.forEach(function (e) {
              if (s) {
                var t,
                  r = o.findWrapping(e.type);
                if (!r) return (s = null);
                if (
                  (t = s.length && n.length && Ht(r, n, e, s[s.length - 1], 0))
                )
                  s[s.length - 1] = t;
                else {
                  s.length && (s[s.length - 1] = Lt(s[s.length - 1], n.length));
                  var i = Ft(e, r);
                  (s.push(i), (o = o.matchType(i.type)), (n = r));
                }
              }
            }),
            s)
          )
            return { v: d.HY.from(s) };
        },
        i = t.depth;
      i >= 0;
      i--
    ) {
      var o = n();
      if ("object" === (0, r.Z)(o)) return o.v;
    }
    return e;
  }
  function Ft(e, t) {
    for (
      var n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        r = t.length - 1;
      r >= n;
      r--
    )
      e = t[r].create(null, d.HY.from(e));
    return e;
  }
  function Ht(e, t, n, r, i) {
    if (i < e.length && i < t.length && e[i] == t[i]) {
      var o = Ht(e, t, n, r.lastChild, i + 1);
      if (o) return r.copy(r.content.replaceChild(r.childCount - 1, o));
      var s = r.contentMatchAt(r.childCount);
      if (s.matchType(i == e.length - 1 ? n.type : e[i + 1]))
        return r.copy(r.content.append(d.HY.from(Ft(n, e, i + 1))));
    }
  }
  function Lt(e, t) {
    if (0 == t) return e;
    var n = e.content.replaceChild(e.childCount - 1, Lt(e.lastChild, t - 1)),
      r = e.contentMatchAt(e.childCount).fillBefore(d.HY.empty, !0);
    return e.copy(n.append(r));
  }
  function qt(e, t, n, r, i, o) {
    var s = t < 0 ? e.firstChild : e.lastChild,
      a = s.content;
    return (
      e.childCount > 1 && (o = 0),
      i < r - 1 && (a = qt(a, t, n, r, i + 1, o)),
      i >= n &&
        (a =
          t < 0
            ? s
                .contentMatchAt(0)
                .fillBefore(a, o <= i)
                .append(a)
            : a.append(
                s.contentMatchAt(s.childCount).fillBefore(d.HY.empty, !0),
              )),
      e.replaceChild(t < 0 ? 0 : e.childCount - 1, s.copy(a))
    );
  }
  function _t(e, t, n) {
    return (
      t < e.openStart &&
        (e = new d.p2(
          qt(e.content, -1, t, e.openStart, 0, e.openEnd),
          t,
          e.openEnd,
        )),
      n < e.openEnd &&
        (e = new d.p2(qt(e.content, 1, n, e.openEnd, 0, 0), e.openStart, n)),
      e
    );
  }
  var Jt = {
      thead: ["table"],
      tbody: ["table"],
      tfoot: ["table"],
      caption: ["table"],
      colgroup: ["table"],
      col: ["table", "colgroup"],
      tr: ["table", "tbody"],
      td: ["table", "tbody", "tr"],
      th: ["table", "tbody", "tr"],
    },
    Wt = null;
  function Yt() {
    return Wt || (Wt = document.implementation.createHTMLDocument("title"));
  }
  function Ut(e) {
    var t = /^(\s*<meta [^>]*>)*/.exec(e);
    t && (e = e.slice(t[0].length));
    var n,
      r = Yt().createElement("div"),
      i = /<([a-z][^>\s]+)/i.exec(e);
    if (
      ((n = i && Jt[i[1].toLowerCase()]) &&
        (e =
          n
            .map(function (e) {
              return "<" + e + ">";
            })
            .join("") +
          e +
          n
            .map(function (e) {
              return "</" + e + ">";
            })
            .reverse()
            .join("")),
      (r.innerHTML = e),
      n)
    )
      for (var o = 0; o < n.length; o++) r = r.querySelector(n[o]) || r;
    return r;
  }
  function Kt(e) {
    for (
      var t = e.querySelectorAll(
          j ? "span:not([class]):not([style])" : "span.Apple-converted-space",
        ),
        n = 0;
      n < t.length;
      n++
    ) {
      var r = t[n];
      1 == r.childNodes.length &&
        " " == r.textContent &&
        r.parentNode &&
        r.parentNode.replaceChild(e.ownerDocument.createTextNode(" "), r);
    }
  }
  function Gt(e, t) {
    if (!e.size) return e;
    var n,
      r = e.content.firstChild.type.schema;
    try {
      n = JSON.parse(t);
    } catch (c) {
      return e;
    }
    for (
      var i = e.content, o = e.openStart, s = e.openEnd, a = n.length - 2;
      a >= 0;
      a -= 2
    ) {
      var l = r.nodes[n[a]];
      if (!l || l.hasRequiredAttrs()) break;
      ((i = d.HY.from(l.create(n[a + 1], i))), o++, s++);
    }
    return new d.p2(i, o, s);
  }
  var Xt = {},
    Qt = {},
    en = { touchstart: !0, touchmove: !0 },
    tn = (0, f.Z)(function e() {
      ((0, u.Z)(this, e),
        (this.shiftKey = !1),
        (this.mouseDown = null),
        (this.lastKeyCode = null),
        (this.lastKeyCodeTime = 0),
        (this.lastClick = { time: 0, x: 0, y: 0, type: "" }),
        (this.lastSelectionOrigin = null),
        (this.lastSelectionTime = 0),
        (this.lastIOSEnter = 0),
        (this.lastIOSEnterFallbackTimeout = -1),
        (this.lastFocus = 0),
        (this.lastTouch = 0),
        (this.lastAndroidDelete = 0),
        (this.composing = !1),
        (this.composingTimeout = -1),
        (this.compositionNodes = []),
        (this.compositionEndedAt = -2e8),
        (this.compositionID = 1),
        (this.compositionPendingChanges = 0),
        (this.domChangeCount = 0),
        (this.eventHandlers = Object.create(null)),
        (this.hideSelectionGuard = null));
    });
  function nn(e) {
    var t = function () {
      var t = Xt[n];
      e.dom.addEventListener(
        n,
        (e.input.eventHandlers[n] = function (n) {
          !ln(e, n) || an(e, n) || (!e.editable && n.type in Qt) || t(e, n);
        }),
        en[n] ? { passive: !0 } : void 0,
      );
    };
    for (var n in Xt) t();
    (H &&
      e.dom.addEventListener("input", function () {
        return null;
      }),
      sn(e));
  }
  function rn(e, t) {
    ((e.input.lastSelectionOrigin = t),
      (e.input.lastSelectionTime = Date.now()));
  }
  function on(e) {
    for (var t in (e.domObserver.stop(), e.input.eventHandlers))
      e.dom.removeEventListener(t, e.input.eventHandlers[t]);
    (clearTimeout(e.input.composingTimeout),
      clearTimeout(e.input.lastIOSEnterFallbackTimeout));
  }
  function sn(e) {
    e.someProp("handleDOMEvents", function (t) {
      for (var n in t)
        e.input.eventHandlers[n] ||
          e.dom.addEventListener(
            n,
            (e.input.eventHandlers[n] = function (t) {
              return an(e, t);
            }),
          );
    });
  }
  function an(e, t) {
    return e.someProp("handleDOMEvents", function (n) {
      var r = n[t.type];
      return !!r && (r(e, t) || t.defaultPrevented);
    });
  }
  function ln(e, t) {
    if (!t.bubbles) return !0;
    if (t.defaultPrevented) return !1;
    for (var n = t.target; n != e.dom; n = n.parentNode)
      if (!n || 11 == n.nodeType || (n.pmViewDesc && n.pmViewDesc.stopEvent(t)))
        return !1;
    return !0;
  }
  function cn(e, t) {
    an(e, t) ||
      !Xt[t.type] ||
      (!e.editable && t.type in Qt) ||
      Xt[t.type](e, t);
  }
  function un(e) {
    return { left: e.clientX, top: e.clientY };
  }
  function fn(e, t) {
    var n = t.x - e.clientX,
      r = t.y - e.clientY;
    return n * n + r * r < 100;
  }
  function hn(e, t, n, i, o) {
    if (-1 == i) return !1;
    for (
      var s = e.state.doc.resolve(i),
        a = function (r) {
          if (
            e.someProp(t, function (t) {
              return r > s.depth
                ? t(e, n, s.nodeAfter, s.before(r), o, !0)
                : t(e, n, s.node(r), s.before(r), o, !1);
            })
          )
            return { v: !0 };
        },
        l = s.depth + 1;
      l > 0;
      l--
    ) {
      var c = a(l);
      if ("object" === (0, r.Z)(c)) return c.v;
    }
    return !1;
  }
  function dn(e, t, n) {
    e.focused || e.focus();
    var r = e.state.tr.setSelection(t);
    ("pointer" == n && r.setMeta("pointer", !0), e.dispatch(r));
  }
  function pn(e, t) {
    if (-1 == t) return !1;
    var n = e.state.doc.resolve(t),
      r = n.nodeAfter;
    return (
      !!(r && r.isAtom && h.qv.isSelectable(r)) &&
      (dn(e, new h.qv(n), "pointer"), !0)
    );
  }
  function vn(e, t) {
    if (-1 == t) return !1;
    var n,
      r,
      i = e.state.selection;
    i instanceof h.qv && (n = i.node);
    for (var o = e.state.doc.resolve(t), s = o.depth + 1; s > 0; s--) {
      var a = s > o.depth ? o.nodeAfter : o.node(s);
      if (h.qv.isSelectable(a)) {
        r =
          n &&
          i.$from.depth > 0 &&
          s >= i.$from.depth &&
          o.before(i.$from.depth + 1) == i.$from.pos
            ? o.before(i.$from.depth)
            : o.before(s);
        break;
      }
    }
    return null != r && (dn(e, h.qv.create(e.state.doc, r), "pointer"), !0);
  }
  function mn(e, t, n, r, i) {
    return (
      hn(e, "handleClickOn", t, n, r) ||
      e.someProp("handleClick", function (n) {
        return n(e, t, r);
      }) ||
      (i ? vn(e, n) : pn(e, n))
    );
  }
  function gn(e, t, n, r) {
    return (
      hn(e, "handleDoubleClickOn", t, n, r) ||
      e.someProp("handleDoubleClick", function (n) {
        return n(e, t, r);
      })
    );
  }
  function yn(e, t, n, r) {
    return (
      hn(e, "handleTripleClickOn", t, n, r) ||
      e.someProp("handleTripleClick", function (n) {
        return n(e, t, r);
      }) ||
      wn(e, n, r)
    );
  }
  function wn(e, t, n) {
    if (0 != n.button) return !1;
    var r = e.state.doc;
    if (-1 == t)
      return (
        !!r.inlineContent &&
        (dn(e, h.Bs.create(r, 0, r.content.size), "pointer"), !0)
      );
    for (var i = r.resolve(t), o = i.depth + 1; o > 0; o--) {
      var s = o > i.depth ? i.nodeAfter : i.node(o),
        a = i.before(o);
      if (s.inlineContent)
        dn(e, h.Bs.create(r, a + 1, a + 1 + s.content.size), "pointer");
      else {
        if (!h.qv.isSelectable(s)) continue;
        dn(e, h.qv.create(r, a), "pointer");
      }
      return !0;
    }
  }
  function kn(e) {
    return An(e);
  }
  ((Qt.keydown = function (e, t) {
    var n = t;
    if (
      ((e.input.shiftKey = 16 == n.keyCode || n.shiftKey),
      !Sn(e, n) &&
        ((e.input.lastKeyCode = n.keyCode),
        (e.input.lastKeyCodeTime = Date.now()),
        !J || !j || 13 != n.keyCode))
    )
      if (
        (229 != n.keyCode && e.domObserver.forceFlush(),
        !L || 13 != n.keyCode || n.ctrlKey || n.altKey || n.metaKey)
      )
        e.someProp("handleKeyDown", function (t) {
          return t(e, n);
        }) || zt(e, n)
          ? n.preventDefault()
          : rn(e, "key");
      else {
        var r = Date.now();
        ((e.input.lastIOSEnter = r),
          (e.input.lastIOSEnterFallbackTimeout = setTimeout(function () {
            e.input.lastIOSEnter == r &&
              (e.someProp("handleKeyDown", function (t) {
                return t(e, N(13, "Enter"));
              }),
              (e.input.lastIOSEnter = 0));
          }, 200)));
      }
  }),
    (Qt.keyup = function (e, t) {
      16 == t.keyCode && (e.input.shiftKey = !1);
    }),
    (Qt.keypress = function (e, t) {
      var n = t;
      if (
        !(
          Sn(e, n) ||
          !n.charCode ||
          (n.ctrlKey && !n.altKey) ||
          (q && n.metaKey)
        )
      )
        if (
          e.someProp("handleKeyPress", function (t) {
            return t(e, n);
          })
        )
          n.preventDefault();
        else {
          var r = e.state.selection;
          if (!(r instanceof h.Bs) || !r.$from.sameParent(r.$to)) {
            var i = String.fromCharCode(n.charCode);
            (/[\r\n]/.test(i) ||
              e.someProp("handleTextInput", function (t) {
                return t(e, r.$from.pos, r.$to.pos, i);
              }) ||
              e.dispatch(e.state.tr.insertText(i).scrollIntoView()),
              n.preventDefault());
          }
        }
    }));
  var bn = q ? "metaKey" : "ctrlKey";
  Xt.mousedown = function (e, t) {
    var n = t;
    e.input.shiftKey = n.shiftKey;
    var r = kn(e),
      i = Date.now(),
      o = "singleClick";
    (i - e.input.lastClick.time < 500 &&
      fn(n, e.input.lastClick) &&
      !n[bn] &&
      ("singleClick" == e.input.lastClick.type
        ? (o = "doubleClick")
        : "doubleClick" == e.input.lastClick.type && (o = "tripleClick")),
      (e.input.lastClick = { time: i, x: n.clientX, y: n.clientY, type: o }));
    var s = e.posAtCoords(un(n));
    s &&
      ("singleClick" == o
        ? (e.input.mouseDown && e.input.mouseDown.done(),
          (e.input.mouseDown = new xn(e, s, n, !!r)))
        : ("doubleClick" == o ? gn : yn)(e, s.pos, s.inside, n)
          ? n.preventDefault()
          : rn(e, "pointer"));
  };
  var xn = (function () {
    function e(t, n, r, i) {
      var o,
        s,
        a = this;
      if (
        ((0, u.Z)(this, e),
        (this.view = t),
        (this.pos = n),
        (this.event = r),
        (this.flushed = i),
        (this.delayedSelectionSync = !1),
        (this.mightDrag = null),
        (this.startDoc = t.state.doc),
        (this.selectNode = !!r[bn]),
        (this.allowDefault = r.shiftKey),
        n.inside > -1)
      )
        ((o = t.state.doc.nodeAt(n.inside)), (s = n.inside));
      else {
        var l = t.state.doc.resolve(n.pos);
        ((o = l.parent), (s = l.depth ? l.before() : 0));
      }
      var c = i ? null : r.target,
        f = c ? t.docView.nearestDesc(c, !0) : null;
      this.target = f ? f.dom : null;
      var d = t.state.selection;
      (((0 == r.button &&
        o.type.spec.draggable &&
        !1 !== o.type.spec.selectable) ||
        (d instanceof h.qv && d.from <= s && d.to > s)) &&
        (this.mightDrag = {
          node: o,
          pos: s,
          addAttr: !(!this.target || this.target.draggable),
          setUneditable: !(
            !this.target ||
            !B ||
            this.target.hasAttribute("contentEditable")
          ),
        }),
        this.target &&
          this.mightDrag &&
          (this.mightDrag.addAttr || this.mightDrag.setUneditable) &&
          (this.view.domObserver.stop(),
          this.mightDrag.addAttr && (this.target.draggable = !0),
          this.mightDrag.setUneditable &&
            setTimeout(function () {
              a.view.input.mouseDown == a &&
                a.target.setAttribute("contentEditable", "false");
            }, 20),
          this.view.domObserver.start()),
        t.root.addEventListener("mouseup", (this.up = this.up.bind(this))),
        t.root.addEventListener(
          "mousemove",
          (this.move = this.move.bind(this)),
        ),
        rn(t, "pointer"));
    }
    return (
      (0, f.Z)(e, [
        {
          key: "done",
          value: function () {
            var e = this;
            (this.view.root.removeEventListener("mouseup", this.up),
              this.view.root.removeEventListener("mousemove", this.move),
              this.mightDrag &&
                this.target &&
                (this.view.domObserver.stop(),
                this.mightDrag.addAttr &&
                  this.target.removeAttribute("draggable"),
                this.mightDrag.setUneditable &&
                  this.target.removeAttribute("contentEditable"),
                this.view.domObserver.start()),
              this.delayedSelectionSync &&
                setTimeout(function () {
                  return ot(e.view);
                }),
              (this.view.input.mouseDown = null));
          },
        },
        {
          key: "up",
          value: function (e) {
            if ((this.done(), this.view.dom.contains(e.target))) {
              var t = this.pos;
              (this.view.state.doc != this.startDoc &&
                (t = this.view.posAtCoords(un(e))),
                this.updateAllowDefault(e),
                this.allowDefault || !t
                  ? rn(this.view, "pointer")
                  : mn(this.view, t.pos, t.inside, e, this.selectNode)
                    ? e.preventDefault()
                    : 0 == e.button &&
                        (this.flushed ||
                          (H &&
                            this.mightDrag &&
                            !this.mightDrag.node.isAtom) ||
                          (j &&
                            !this.view.state.selection.visible &&
                            Math.min(
                              Math.abs(t.pos - this.view.state.selection.from),
                              Math.abs(t.pos - this.view.state.selection.to),
                            ) <= 2))
                      ? (dn(
                          this.view,
                          h.Y1.near(this.view.state.doc.resolve(t.pos)),
                          "pointer",
                        ),
                        e.preventDefault())
                      : rn(this.view, "pointer"));
            }
          },
        },
        {
          key: "move",
          value: function (e) {
            (this.updateAllowDefault(e),
              rn(this.view, "pointer"),
              0 == e.buttons && this.done());
          },
        },
        {
          key: "updateAllowDefault",
          value: function (e) {
            !this.allowDefault &&
              (Math.abs(this.event.x - e.clientX) > 4 ||
                Math.abs(this.event.y - e.clientY) > 4) &&
              (this.allowDefault = !0);
          },
        },
      ]),
      e
    );
  })();
  function Sn(e, t) {
    return (
      !!e.composing ||
      (!!(H && Math.abs(t.timeStamp - e.input.compositionEndedAt) < 500) &&
        ((e.input.compositionEndedAt = -2e8), !0))
    );
  }
  ((Xt.touchstart = function (e) {
    ((e.input.lastTouch = Date.now()), kn(e), rn(e, "pointer"));
  }),
    (Xt.touchmove = function (e) {
      ((e.input.lastTouch = Date.now()), rn(e, "pointer"));
    }),
    (Xt.contextmenu = function (e) {
      return kn(e);
    }));
  var Cn = J ? 5e3 : -1;
  function On(e, t) {
    (clearTimeout(e.input.composingTimeout),
      t > -1 &&
        (e.input.composingTimeout = setTimeout(function () {
          return An(e);
        }, t)));
  }
  function Mn(e) {
    e.composing &&
      ((e.input.composing = !1), (e.input.compositionEndedAt = Nn()));
    while (e.input.compositionNodes.length > 0)
      e.input.compositionNodes.pop().markParentsDirty();
  }
  function Nn() {
    var e = document.createEvent("Event");
    return (e.initEvent("event", !0, !0), e.timeStamp);
  }
  function An(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (!(J && e.domObserver.flushingSoon >= 0)) {
      if (
        (e.domObserver.forceFlush(), Mn(e), t || (e.docView && e.docView.dirty))
      ) {
        var n = rt(e);
        return (
          n && !n.eq(e.state.selection)
            ? e.dispatch(e.state.tr.setSelection(n))
            : e.updateState(e.state),
          !0
        );
      }
      return !1;
    }
  }
  function Dn(e, t) {
    if (e.dom.parentNode) {
      var n = e.dom.parentNode.appendChild(document.createElement("div"));
      (n.appendChild(t),
        (n.style.cssText = "position: fixed; left: -10000px; top: 10px"));
      var r = getSelection(),
        i = document.createRange();
      (i.selectNodeContents(t),
        e.dom.blur(),
        r.removeAllRanges(),
        r.addRange(i),
        setTimeout(function () {
          (n.parentNode && n.parentNode.removeChild(n), e.focus());
        }, 50));
    }
  }
  ((Qt.compositionstart = Qt.compositionupdate =
    function (e) {
      if (!e.composing) {
        e.domObserver.flush();
        var t = e.state,
          n = t.selection.$from;
        if (
          t.selection.empty &&
          (t.storedMarks ||
            (!n.textOffset &&
              n.parentOffset &&
              n.nodeBefore.marks.some(function (e) {
                return !1 === e.type.spec.inclusive;
              })))
        )
          ((e.markCursor = e.state.storedMarks || n.marks()),
            An(e, !0),
            (e.markCursor = null));
        else if (
          (An(e),
          B &&
            t.selection.empty &&
            n.parentOffset &&
            !n.textOffset &&
            n.nodeBefore.marks.length)
        )
          for (
            var r = e.domSelectionRange(), i = r.focusNode, o = r.focusOffset;
            i && 1 == i.nodeType && 0 != o;
          ) {
            var s = o < 0 ? i.lastChild : i.childNodes[o - 1];
            if (!s) break;
            if (3 == s.nodeType) {
              e.domSelection().collapse(s, s.nodeValue.length);
              break;
            }
            ((i = s), (o = -1));
          }
        e.input.composing = !0;
      }
      On(e, Cn);
    }),
    (Qt.compositionend = function (e, t) {
      e.composing &&
        ((e.input.composing = !1),
        (e.input.compositionEndedAt = t.timeStamp),
        (e.input.compositionPendingChanges = e.domObserver.pendingRecords()
          .length
          ? e.input.compositionID
          : 0),
        e.input.compositionPendingChanges &&
          Promise.resolve().then(function () {
            return e.domObserver.flush();
          }),
        e.input.compositionID++,
        On(e, 20));
    }));
  var En = (z && $ < 15) || (L && Y < 604);
  function Tn(e) {
    return 0 == e.openStart && 0 == e.openEnd && 1 == e.content.childCount
      ? e.content.firstChild
      : null;
  }
  function Rn(e, t) {
    if (e.dom.parentNode) {
      var n = e.input.shiftKey || e.state.selection.$from.parent.type.spec.code,
        r = e.dom.parentNode.appendChild(
          document.createElement(n ? "textarea" : "div"),
        );
      (n || (r.contentEditable = "true"),
        (r.style.cssText = "position: fixed; left: -10000px; top: 10px"),
        r.focus());
      var i = e.input.shiftKey && 45 != e.input.lastKeyCode;
      setTimeout(function () {
        (e.focus(),
          r.parentNode && r.parentNode.removeChild(r),
          n
            ? Pn(e, r.value, null, i, t)
            : Pn(e, r.textContent, r.innerHTML, i, t));
      }, 50);
    }
  }
  function Pn(e, t, n, r, i) {
    var o = Bt(e, t, n, r, e.state.selection.$from);
    if (
      e.someProp("handlePaste", function (t) {
        return t(e, i, o || d.p2.empty);
      })
    )
      return !0;
    if (!o) return !1;
    var s = Tn(o),
      a = s
        ? e.state.tr.replaceSelectionWith(s, r)
        : e.state.tr.replaceSelection(o);
    return (
      e.dispatch(
        a.scrollIntoView().setMeta("paste", !0).setMeta("uiEvent", "paste"),
      ),
      !0
    );
  }
  ((Xt.copy = Qt.cut =
    function (e, t) {
      var n = t,
        r = e.state.selection,
        i = "cut" == n.type;
      if (!r.empty) {
        var o = En ? null : n.clipboardData,
          s = r.content(),
          a = $t(e, s),
          l = a.dom,
          c = a.text;
        (o
          ? (n.preventDefault(),
            o.clearData(),
            o.setData("text/html", l.innerHTML),
            o.setData("text/plain", c))
          : Dn(e, l),
          i &&
            e.dispatch(
              e.state.tr
                .deleteSelection()
                .scrollIntoView()
                .setMeta("uiEvent", "cut"),
            ));
      }
    }),
    (Qt.paste = function (e, t) {
      var n = t;
      if (!e.composing || J) {
        var r = En ? null : n.clipboardData,
          i = e.input.shiftKey && 45 != e.input.lastKeyCode;
        r && Pn(e, r.getData("text/plain"), r.getData("text/html"), i, n)
          ? n.preventDefault()
          : Rn(e, n);
      }
    }));
  var Zn = (0, f.Z)(function e(t, n) {
      ((0, u.Z)(this, e), (this.slice = t), (this.move = n));
    }),
    In = q ? "altKey" : "ctrlKey";
  for (var zn in ((Xt.dragstart = function (e, t) {
    var n = t,
      r = e.input.mouseDown;
    if ((r && r.done(), n.dataTransfer)) {
      var i = e.state.selection,
        o = i.empty ? null : e.posAtCoords(un(n));
      if (
        o &&
        o.pos >= i.from &&
        o.pos <= (i instanceof h.qv ? i.to - 1 : i.to)
      );
      else if (r && r.mightDrag)
        e.dispatch(
          e.state.tr.setSelection(h.qv.create(e.state.doc, r.mightDrag.pos)),
        );
      else if (n.target && 1 == n.target.nodeType) {
        var s = e.docView.nearestDesc(n.target, !0);
        s &&
          s.node.type.spec.draggable &&
          s != e.docView &&
          e.dispatch(
            e.state.tr.setSelection(h.qv.create(e.state.doc, s.posBefore)),
          );
      }
      var a = e.state.selection.content(),
        l = $t(e, a),
        c = l.dom,
        u = l.text;
      (n.dataTransfer.clearData(),
        n.dataTransfer.setData(En ? "Text" : "text/html", c.innerHTML),
        (n.dataTransfer.effectAllowed = "copyMove"),
        En || n.dataTransfer.setData("text/plain", u),
        (e.dragging = new Zn(a, !n[In])));
    }
  }),
  (Xt.dragend = function (e) {
    var t = e.dragging;
    window.setTimeout(function () {
      e.dragging == t && (e.dragging = null);
    }, 50);
  }),
  (Qt.dragover = Qt.dragenter =
    function (e, t) {
      return t.preventDefault();
    }),
  (Qt.drop = function (e, t) {
    var n = t,
      r = e.dragging;
    if (((e.dragging = null), n.dataTransfer)) {
      var i = e.posAtCoords(un(n));
      if (i) {
        var o = e.state.doc.resolve(i.pos),
          s = r && r.slice;
        s
          ? e.someProp("transformPasted", function (t) {
              s = t(s, e);
            })
          : (s = Bt(
              e,
              n.dataTransfer.getData(En ? "Text" : "text/plain"),
              En ? null : n.dataTransfer.getData("text/html"),
              !1,
              o,
            ));
        var a = !(!r || n[In]);
        if (
          e.someProp("handleDrop", function (t) {
            return t(e, n, s || d.p2.empty, a);
          })
        )
          n.preventDefault();
        else if (s) {
          n.preventDefault();
          var l = s ? (0, p.nj)(e.state.doc, o.pos, s) : o.pos;
          null == l && (l = o.pos);
          var c = e.state.tr;
          a && c.deleteSelection();
          var u = c.mapping.map(l),
            f = 0 == s.openStart && 0 == s.openEnd && 1 == s.content.childCount,
            v = c.doc;
          if (
            (f
              ? c.replaceRangeWith(u, u, s.content.firstChild)
              : c.replaceRange(u, u, s),
            !c.doc.eq(v))
          ) {
            var m = c.doc.resolve(u);
            if (
              f &&
              h.qv.isSelectable(s.content.firstChild) &&
              m.nodeAfter &&
              m.nodeAfter.sameMarkup(s.content.firstChild)
            )
              c.setSelection(new h.qv(m));
            else {
              var g = c.mapping.map(l);
              (c.mapping.maps[c.mapping.maps.length - 1].forEach(
                function (e, t, n, r) {
                  return (g = r);
                },
              ),
                c.setSelection(pt(e, m, c.doc.resolve(g))));
            }
            (e.focus(), e.dispatch(c.setMeta("uiEvent", "drop")));
          }
        }
      }
    }
  }),
  (Xt.focus = function (e) {
    ((e.input.lastFocus = Date.now()),
      e.focused ||
        (e.domObserver.stop(),
        e.dom.classList.add("ProseMirror-focused"),
        e.domObserver.start(),
        (e.focused = !0),
        setTimeout(function () {
          e.docView &&
            e.hasFocus() &&
            !e.domObserver.currentSelection.eq(e.domSelectionRange()) &&
            ot(e);
        }, 20)));
  }),
  (Xt.blur = function (e, t) {
    var n = t;
    e.focused &&
      (e.domObserver.stop(),
      e.dom.classList.remove("ProseMirror-focused"),
      e.domObserver.start(),
      n.relatedTarget &&
        e.dom.contains(n.relatedTarget) &&
        e.domObserver.currentSelection.clear(),
      (e.focused = !1));
  }),
  (Xt.beforeinput = function (e, t) {
    var n = t;
    if (j && J && "deleteContentBackward" == n.inputType) {
      e.domObserver.flushSoon();
      var r = e.input.domChangeCount;
      setTimeout(function () {
        if (
          e.input.domChangeCount == r &&
          (e.dom.blur(),
          e.focus(),
          !e.someProp("handleKeyDown", function (t) {
            return t(e, N(8, "Backspace"));
          }))
        ) {
          var t = e.state.selection.$cursor;
          t &&
            t.pos > 0 &&
            e.dispatch(e.state.tr.delete(t.pos - 1, t.pos).scrollIntoView());
        }
      }, 50);
    }
  }),
  Qt))
    Xt[zn] = Qt[zn];
  function $n(e, t) {
    if (e == t) return !0;
    for (var n in e) if (e[n] !== t[n]) return !1;
    for (var r in t) if (!(r in e)) return !1;
    return !0;
  }
  var Bn = (function () {
      function e(t, n) {
        ((0, u.Z)(this, e),
          (this.toDOM = t),
          (this.spec = n || Ln),
          (this.side = this.spec.side || 0));
      }
      return (
        (0, f.Z)(e, [
          {
            key: "map",
            value: function (e, t, n, r) {
              var i = e.mapResult(t.from + r, this.side < 0 ? -1 : 1),
                o = i.pos,
                s = i.deleted;
              return s ? null : new Fn(o - n, o - n, this);
            },
          },
          {
            key: "valid",
            value: function () {
              return !0;
            },
          },
          {
            key: "eq",
            value: function (t) {
              return (
                this == t ||
                (t instanceof e &&
                  ((this.spec.key && this.spec.key == t.spec.key) ||
                    (this.toDOM == t.toDOM && $n(this.spec, t.spec))))
              );
            },
          },
          {
            key: "destroy",
            value: function (e) {
              this.spec.destroy && this.spec.destroy(e);
            },
          },
        ]),
        e
      );
    })(),
    Vn = (function () {
      function e(t, n) {
        ((0, u.Z)(this, e), (this.attrs = t), (this.spec = n || Ln));
      }
      return (
        (0, f.Z)(
          e,
          [
            {
              key: "map",
              value: function (e, t, n, r) {
                var i =
                    e.map(t.from + r, this.spec.inclusiveStart ? -1 : 1) - n,
                  o = e.map(t.to + r, this.spec.inclusiveEnd ? 1 : -1) - n;
                return i >= o ? null : new Fn(i, o, this);
              },
            },
            {
              key: "valid",
              value: function (e, t) {
                return t.from < t.to;
              },
            },
            {
              key: "eq",
              value: function (t) {
                return (
                  this == t ||
                  (t instanceof e &&
                    $n(this.attrs, t.attrs) &&
                    $n(this.spec, t.spec))
                );
              },
            },
            { key: "destroy", value: function () {} },
          ],
          [
            {
              key: "is",
              value: function (t) {
                return t.type instanceof e;
              },
            },
          ],
        ),
        e
      );
    })(),
    jn = (function () {
      function e(t, n) {
        ((0, u.Z)(this, e), (this.attrs = t), (this.spec = n || Ln));
      }
      return (
        (0, f.Z)(e, [
          {
            key: "map",
            value: function (e, t, n, r) {
              var i = e.mapResult(t.from + r, 1);
              if (i.deleted) return null;
              var o = e.mapResult(t.to + r, -1);
              return o.deleted || o.pos <= i.pos
                ? null
                : new Fn(i.pos - n, o.pos - n, this);
            },
          },
          {
            key: "valid",
            value: function (e, t) {
              var n,
                r = e.content.findIndex(t.from),
                i = r.index,
                o = r.offset;
              return (
                o == t.from &&
                !(n = e.child(i)).isText &&
                o + n.nodeSize == t.to
              );
            },
          },
          {
            key: "eq",
            value: function (t) {
              return (
                this == t ||
                (t instanceof e &&
                  $n(this.attrs, t.attrs) &&
                  $n(this.spec, t.spec))
              );
            },
          },
          { key: "destroy", value: function () {} },
        ]),
        e
      );
    })(),
    Fn = (function () {
      function e(t, n, r) {
        ((0, u.Z)(this, e), (this.from = t), (this.to = n), (this.type = r));
      }
      return (
        (0, f.Z)(
          e,
          [
            {
              key: "copy",
              value: function (t, n) {
                return new e(t, n, this.type);
              },
            },
            {
              key: "eq",
              value: function (e) {
                var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 0;
                return (
                  this.type.eq(e.type) &&
                  this.from + t == e.from &&
                  this.to + t == e.to
                );
              },
            },
            {
              key: "map",
              value: function (e, t, n) {
                return this.type.map(e, this, t, n);
              },
            },
            {
              key: "spec",
              get: function () {
                return this.type.spec;
              },
            },
            {
              key: "inline",
              get: function () {
                return this.type instanceof Vn;
              },
            },
          ],
          [
            {
              key: "widget",
              value: function (t, n, r) {
                return new e(t, t, new Bn(n, r));
              },
            },
            {
              key: "inline",
              value: function (t, n, r, i) {
                return new e(t, n, new Vn(r, i));
              },
            },
            {
              key: "node",
              value: function (t, n, r, i) {
                return new e(t, n, new jn(r, i));
              },
            },
          ],
        ),
        e
      );
    })(),
    Hn = [],
    Ln = {},
    qn = (function () {
      function e(t, n) {
        ((0, u.Z)(this, e),
          (this.local = t.length ? t : Hn),
          (this.children = n.length ? n : Hn));
      }
      return (
        (0, f.Z)(
          e,
          [
            {
              key: "find",
              value: function (e, t, n) {
                var r = [];
                return (
                  this.findInner(
                    null == e ? 0 : e,
                    null == t ? 1e9 : t,
                    r,
                    0,
                    n,
                  ),
                  r
                );
              },
            },
            {
              key: "findInner",
              value: function (e, t, n, r, i) {
                for (var o = 0; o < this.local.length; o++) {
                  var s = this.local[o];
                  s.from <= t &&
                    s.to >= e &&
                    (!i || i(s.spec)) &&
                    n.push(s.copy(s.from + r, s.to + r));
                }
                for (var a = 0; a < this.children.length; a += 3)
                  if (this.children[a] < t && this.children[a + 1] > e) {
                    var l = this.children[a] + 1;
                    this.children[a + 2].findInner(e - l, t - l, n, r + l, i);
                  }
              },
            },
            {
              key: "map",
              value: function (e, t, n) {
                return this == _n || 0 == e.maps.length
                  ? this
                  : this.mapInner(e, t, 0, 0, n || Ln);
              },
            },
            {
              key: "mapInner",
              value: function (t, n, r, i, o) {
                for (var s, a = 0; a < this.local.length; a++) {
                  var l = this.local[a].map(t, r, i);
                  l && l.type.valid(n, l)
                    ? (s || (s = [])).push(l)
                    : o.onRemove && o.onRemove(this.local[a].spec);
                }
                return this.children.length
                  ? Wn(this.children, s || [], t, n, r, i, o)
                  : s
                    ? new e(s.sort(Qn), Hn)
                    : _n;
              },
            },
            {
              key: "add",
              value: function (t, n) {
                return n.length
                  ? this == _n
                    ? e.create(t, n)
                    : this.addInner(t, n, 0)
                  : this;
              },
            },
            {
              key: "addInner",
              value: function (t, n, r) {
                var i,
                  o = this,
                  s = 0;
                t.forEach(function (e, t) {
                  var a,
                    l = t + r;
                  if ((a = Kn(n, e, l))) {
                    i || (i = o.children.slice());
                    while (s < i.length && i[s] < t) s += 3;
                    (i[s] == t
                      ? (i[s + 2] = i[s + 2].addInner(e, a, l + 1))
                      : i.splice(s, 0, t, t + e.nodeSize, Xn(a, e, l + 1, Ln)),
                      (s += 3));
                  }
                });
                for (var a = Yn(s ? Gn(n) : n, -r), l = 0; l < a.length; l++)
                  a[l].type.valid(t, a[l]) || a.splice(l--, 1);
                return new e(
                  a.length ? this.local.concat(a).sort(Qn) : this.local,
                  i || this.children,
                );
              },
            },
            {
              key: "remove",
              value: function (e) {
                return 0 == e.length || this == _n
                  ? this
                  : this.removeInner(e, 0);
              },
            },
            {
              key: "removeInner",
              value: function (t, n) {
                for (
                  var r = this.children, i = this.local, o = 0;
                  o < r.length;
                  o += 3
                ) {
                  for (
                    var s, a = void 0, l = r[o] + n, c = r[o + 1] + n, u = 0;
                    u < t.length;
                    u++
                  )
                    (s = t[u]) &&
                      s.from > l &&
                      s.to < c &&
                      ((t[u] = null), (a || (a = [])).push(s));
                  if (a) {
                    r == this.children && (r = this.children.slice());
                    var f = r[o + 2].removeInner(a, l + 1);
                    f != _n ? (r[o + 2] = f) : (r.splice(o, 3), (o -= 3));
                  }
                }
                if (i.length)
                  for (var h, d = 0; d < t.length; d++)
                    if ((h = t[d]))
                      for (var p = 0; p < i.length; p++)
                        i[p].eq(h, n) &&
                          (i == this.local && (i = this.local.slice()),
                          i.splice(p--, 1));
                return r == this.children && i == this.local
                  ? this
                  : i.length || r.length
                    ? new e(i, r)
                    : _n;
              },
            },
            {
              key: "forChild",
              value: function (t, n) {
                if (this == _n) return this;
                if (n.isLeaf) return e.empty;
                for (var r, i, o = 0; o < this.children.length; o += 3)
                  if (this.children[o] >= t) {
                    this.children[o] == t && (r = this.children[o + 2]);
                    break;
                  }
                for (
                  var s = t + 1, a = s + n.content.size, l = 0;
                  l < this.local.length;
                  l++
                ) {
                  var c = this.local[l];
                  if (c.from < a && c.to > s && c.type instanceof Vn) {
                    var u = Math.max(s, c.from) - s,
                      f = Math.min(a, c.to) - s;
                    u < f && (i || (i = [])).push(c.copy(u, f));
                  }
                }
                if (i) {
                  var h = new e(i.sort(Qn), Hn);
                  return r ? new Jn([h, r]) : h;
                }
                return r || _n;
              },
            },
            {
              key: "eq",
              value: function (t) {
                if (this == t) return !0;
                if (
                  !(t instanceof e) ||
                  this.local.length != t.local.length ||
                  this.children.length != t.children.length
                )
                  return !1;
                for (var n = 0; n < this.local.length; n++)
                  if (!this.local[n].eq(t.local[n])) return !1;
                for (var r = 0; r < this.children.length; r += 3)
                  if (
                    this.children[r] != t.children[r] ||
                    this.children[r + 1] != t.children[r + 1] ||
                    !this.children[r + 2].eq(t.children[r + 2])
                  )
                    return !1;
                return !0;
              },
            },
            {
              key: "locals",
              value: function (e) {
                return er(this.localsInner(e));
              },
            },
            {
              key: "localsInner",
              value: function (e) {
                if (this == _n) return Hn;
                if (e.inlineContent || !this.local.some(Vn.is))
                  return this.local;
                for (var t = [], n = 0; n < this.local.length; n++)
                  this.local[n].type instanceof Vn || t.push(this.local[n]);
                return t;
              },
            },
          ],
          [
            {
              key: "create",
              value: function (e, t) {
                return t.length ? Xn(t, e, 0, Ln) : _n;
              },
            },
          ],
        ),
        e
      );
    })();
  ((qn.empty = new qn([], [])), (qn.removeOverlap = er));
  var _n = qn.empty,
    Jn = (function () {
      function e(t) {
        ((0, u.Z)(this, e), (this.members = t));
      }
      return (
        (0, f.Z)(
          e,
          [
            {
              key: "map",
              value: function (t, n) {
                var r = this.members.map(function (e) {
                  return e.map(t, n, Ln);
                });
                return e.from(r);
              },
            },
            {
              key: "forChild",
              value: function (t, n) {
                if (n.isLeaf) return qn.empty;
                for (var r = [], i = 0; i < this.members.length; i++) {
                  var o = this.members[i].forChild(t, n);
                  o != _n &&
                    (o instanceof e ? (r = r.concat(o.members)) : r.push(o));
                }
                return e.from(r);
              },
            },
            {
              key: "eq",
              value: function (t) {
                if (
                  !(t instanceof e) ||
                  t.members.length != this.members.length
                )
                  return !1;
                for (var n = 0; n < this.members.length; n++)
                  if (!this.members[n].eq(t.members[n])) return !1;
                return !0;
              },
            },
            {
              key: "locals",
              value: function (e) {
                for (var t, n = !0, r = 0; r < this.members.length; r++) {
                  var i = this.members[r].localsInner(e);
                  if (i.length)
                    if (t) {
                      n && ((t = t.slice()), (n = !1));
                      for (var o = 0; o < i.length; o++) t.push(i[o]);
                    } else t = i;
                }
                return t ? er(n ? t : t.sort(Qn)) : Hn;
              },
            },
          ],
          [
            {
              key: "from",
              value: function (t) {
                switch (t.length) {
                  case 0:
                    return _n;
                  case 1:
                    return t[0];
                  default:
                    return new e(
                      t.every(function (e) {
                        return e instanceof qn;
                      })
                        ? t
                        : t.reduce(function (e, t) {
                            return e.concat(t instanceof qn ? t : t.members);
                          }, []),
                    );
                }
              },
            },
          ],
        ),
        e
      );
    })();
  function Wn(e, t, n, r, i, o, s) {
    for (
      var a = e.slice(),
        l = function (e) {
          var t = 0;
          (n.maps[c].forEach(function (n, r, o, s) {
            for (var l = s - o - (r - n), c = 0; c < a.length; c += 3) {
              var u = a[c + 1];
              if (!(u < 0 || n > u + e - t)) {
                var f = a[c] + e - t;
                r >= f
                  ? (a[c + 1] = n <= f ? -2 : -1)
                  : o >= i && l && ((a[c] += l), (a[c + 1] += l));
              }
            }
            t += l;
          }),
            (e = n.maps[c].map(e, -1)),
            (u = e));
        },
        c = 0,
        u = o;
      c < n.maps.length;
      c++
    )
      l(u);
    for (var f = !1, h = 0; h < a.length; h += 3)
      if (a[h + 1] < 0) {
        if (-2 == a[h + 1]) {
          ((f = !0), (a[h + 1] = -1));
          continue;
        }
        var d = n.map(e[h] + o),
          p = d - i;
        if (p < 0 || p >= r.content.size) {
          f = !0;
          continue;
        }
        var v = n.map(e[h + 1] + o, -1),
          m = v - i,
          g = r.content.findIndex(p),
          y = g.index,
          w = g.offset,
          k = r.maybeChild(y);
        if (k && w == p && w + k.nodeSize == m) {
          var b = a[h + 2].mapInner(n, k, d + 1, e[h] + o + 1, s);
          b != _n
            ? ((a[h] = p), (a[h + 1] = m), (a[h + 2] = b))
            : ((a[h + 1] = -2), (f = !0));
        } else f = !0;
      }
    if (f) {
      var x = Un(a, e, t, n, i, o, s),
        S = Xn(x, r, 0, s);
      t = S.local;
      for (var C = 0; C < a.length; C += 3)
        a[C + 1] < 0 && (a.splice(C, 3), (C -= 3));
      for (var O = 0, M = 0; O < S.children.length; O += 3) {
        var N = S.children[O];
        while (M < a.length && a[M] < N) M += 3;
        a.splice(M, 0, S.children[O], S.children[O + 1], S.children[O + 2]);
      }
    }
    return new qn(t.sort(Qn), a);
  }
  function Yn(e, t) {
    if (!t || !e.length) return e;
    for (var n = [], r = 0; r < e.length; r++) {
      var i = e[r];
      n.push(new Fn(i.from + t, i.to + t, i.type));
    }
    return n;
  }
  function Un(e, t, n, r, i, o, s) {
    function a(e, t) {
      for (var o = 0; o < e.local.length; o++) {
        var l = e.local[o].map(r, i, t);
        l ? n.push(l) : s.onRemove && s.onRemove(e.local[o].spec);
      }
      for (var c = 0; c < e.children.length; c += 3)
        a(e.children[c + 2], e.children[c] + t + 1);
    }
    for (var l = 0; l < e.length; l += 3)
      -1 == e[l + 1] && a(e[l + 2], t[l] + o + 1);
    return n;
  }
  function Kn(e, t, n) {
    if (t.isLeaf) return null;
    for (var r, i = n + t.nodeSize, o = null, s = 0; s < e.length; s++)
      (r = e[s]) &&
        r.from > n &&
        r.to < i &&
        ((o || (o = [])).push(r), (e[s] = null));
    return o;
  }
  function Gn(e) {
    for (var t = [], n = 0; n < e.length; n++) null != e[n] && t.push(e[n]);
    return t;
  }
  function Xn(e, t, n, r) {
    var i = [],
      o = !1;
    t.forEach(function (t, s) {
      var a = Kn(e, t, s + n);
      if (a) {
        o = !0;
        var l = Xn(a, t, n + s + 1, r);
        l != _n && i.push(s, s + t.nodeSize, l);
      }
    });
    for (var s = Yn(o ? Gn(e) : e, -n).sort(Qn), a = 0; a < s.length; a++)
      s[a].type.valid(t, s[a]) ||
        (r.onRemove && r.onRemove(s[a].spec), s.splice(a--, 1));
    return s.length || i.length ? new qn(s, i) : _n;
  }
  function Qn(e, t) {
    return e.from - t.from || e.to - t.to;
  }
  function er(e) {
    for (var t = e, n = 0; n < t.length - 1; n++) {
      var r = t[n];
      if (r.from != r.to)
        for (var i = n + 1; i < t.length; i++) {
          var o = t[i];
          if (o.from != r.from) {
            o.from < r.to &&
              (t == e && (t = e.slice()),
              (t[n] = r.copy(r.from, o.from)),
              tr(t, i, r.copy(o.from, r.to)));
            break;
          }
          o.to != r.to &&
            (t == e && (t = e.slice()),
            (t[i] = o.copy(o.from, r.to)),
            tr(t, i + 1, o.copy(r.to, o.to)));
        }
    }
    return t;
  }
  function tr(e, t, n) {
    while (t < e.length && Qn(n, e[t]) > 0) t++;
    e.splice(t, 0, n);
  }
  function nr(e) {
    var t = [];
    return (
      e.someProp("decorations", function (n) {
        var r = n(e.state);
        r && r != _n && t.push(r);
      }),
      e.cursorWrapper && t.push(qn.create(e.state.doc, [e.cursorWrapper.deco])),
      Jn.from(t)
    );
  }
  var rr = {
      childList: !0,
      characterData: !0,
      characterDataOldValue: !0,
      attributes: !0,
      attributeOldValue: !0,
      subtree: !0,
    },
    ir = z && $ <= 11,
    or = (function () {
      function e() {
        ((0, u.Z)(this, e),
          (this.anchorNode = null),
          (this.anchorOffset = 0),
          (this.focusNode = null),
          (this.focusOffset = 0));
      }
      return (
        (0, f.Z)(e, [
          {
            key: "set",
            value: function (e) {
              ((this.anchorNode = e.anchorNode),
                (this.anchorOffset = e.anchorOffset),
                (this.focusNode = e.focusNode),
                (this.focusOffset = e.focusOffset));
            },
          },
          {
            key: "clear",
            value: function () {
              this.anchorNode = this.focusNode = null;
            },
          },
          {
            key: "eq",
            value: function (e) {
              return (
                e.anchorNode == this.anchorNode &&
                e.anchorOffset == this.anchorOffset &&
                e.focusNode == this.focusNode &&
                e.focusOffset == this.focusOffset
              );
            },
          },
        ]),
        e
      );
    })(),
    sr = (function () {
      function e(t, n) {
        var r = this;
        ((0, u.Z)(this, e),
          (this.view = t),
          (this.handleDOMChange = n),
          (this.queue = []),
          (this.flushingSoon = -1),
          (this.observer = null),
          (this.currentSelection = new or()),
          (this.onCharData = null),
          (this.suppressingSelectionUpdates = !1),
          (this.observer =
            window.MutationObserver &&
            new window.MutationObserver(function (e) {
              for (var t = 0; t < e.length; t++) r.queue.push(e[t]);
              z &&
              $ <= 11 &&
              e.some(function (e) {
                return (
                  ("childList" == e.type && e.removedNodes.length) ||
                  ("characterData" == e.type &&
                    e.oldValue.length > e.target.nodeValue.length)
                );
              })
                ? r.flushSoon()
                : r.flush();
            })),
          ir &&
            (this.onCharData = function (e) {
              (r.queue.push({
                target: e.target,
                type: "characterData",
                oldValue: e.prevValue,
              }),
                r.flushSoon());
            }),
          (this.onSelectionChange = this.onSelectionChange.bind(this)));
      }
      return (
        (0, f.Z)(e, [
          {
            key: "flushSoon",
            value: function () {
              var e = this;
              this.flushingSoon < 0 &&
                (this.flushingSoon = window.setTimeout(function () {
                  ((e.flushingSoon = -1), e.flush());
                }, 20));
            },
          },
          {
            key: "forceFlush",
            value: function () {
              this.flushingSoon > -1 &&
                (window.clearTimeout(this.flushingSoon),
                (this.flushingSoon = -1),
                this.flush());
            },
          },
          {
            key: "start",
            value: function () {
              (this.observer &&
                (this.observer.takeRecords(),
                this.observer.observe(this.view.dom, rr)),
                this.onCharData &&
                  this.view.dom.addEventListener(
                    "DOMCharacterDataModified",
                    this.onCharData,
                  ),
                this.connectSelection());
            },
          },
          {
            key: "stop",
            value: function () {
              var e = this;
              if (this.observer) {
                var t = this.observer.takeRecords();
                if (t.length) {
                  for (var n = 0; n < t.length; n++) this.queue.push(t[n]);
                  window.setTimeout(function () {
                    return e.flush();
                  }, 20);
                }
                this.observer.disconnect();
              }
              (this.onCharData &&
                this.view.dom.removeEventListener(
                  "DOMCharacterDataModified",
                  this.onCharData,
                ),
                this.disconnectSelection());
            },
          },
          {
            key: "connectSelection",
            value: function () {
              this.view.dom.ownerDocument.addEventListener(
                "selectionchange",
                this.onSelectionChange,
              );
            },
          },
          {
            key: "disconnectSelection",
            value: function () {
              this.view.dom.ownerDocument.removeEventListener(
                "selectionchange",
                this.onSelectionChange,
              );
            },
          },
          {
            key: "suppressSelectionUpdates",
            value: function () {
              var e = this;
              ((this.suppressingSelectionUpdates = !0),
                setTimeout(function () {
                  return (e.suppressingSelectionUpdates = !1);
                }, 50));
            },
          },
          {
            key: "onSelectionChange",
            value: function () {
              if (vt(this.view)) {
                if (this.suppressingSelectionUpdates) return ot(this.view);
                if (z && $ <= 11 && !this.view.state.selection.empty) {
                  var e = this.view.domSelectionRange();
                  if (
                    e.focusNode &&
                    k(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset)
                  )
                    return this.flushSoon();
                }
                this.flush();
              }
            },
          },
          {
            key: "setCurSelection",
            value: function () {
              this.currentSelection.set(this.view.domSelectionRange());
            },
          },
          {
            key: "ignoreSelectionChange",
            value: function (e) {
              if (!e.focusNode) return !0;
              for (var t, n = new Set(), r = e.focusNode; r; r = g(r)) n.add(r);
              for (var i = e.anchorNode; i; i = g(i))
                if (n.has(i)) {
                  t = i;
                  break;
                }
              var o = t && this.view.docView.nearestDesc(t);
              return o &&
                o.ignoreMutation({
                  type: "selection",
                  target: 3 == t.nodeType ? t.parentNode : t,
                })
                ? (this.setCurSelection(), !0)
                : void 0;
            },
          },
          {
            key: "pendingRecords",
            value: function () {
              if (this.observer) {
                var e,
                  t = (0, i.Z)(this.observer.takeRecords());
                try {
                  for (t.s(); !(e = t.n()).done; ) {
                    var n = e.value;
                    this.queue.push(n);
                  }
                } catch (r) {
                  t.e(r);
                } finally {
                  t.f();
                }
              }
              return this.queue;
            },
          },
          {
            key: "flush",
            value: function () {
              var e = this.view;
              if (e.docView && !(this.flushingSoon > -1)) {
                var t = this.pendingRecords();
                t.length && (this.queue = []);
                var n = e.domSelectionRange(),
                  r =
                    !this.suppressingSelectionUpdates &&
                    !this.currentSelection.eq(n) &&
                    vt(e) &&
                    !this.ignoreSelectionChange(n),
                  i = -1,
                  o = -1,
                  s = !1,
                  a = [];
                if (e.editable)
                  for (var l = 0; l < t.length; l++) {
                    var c = this.registerMutation(t[l], a);
                    c &&
                      ((i = i < 0 ? c.from : Math.min(c.from, i)),
                      (o = o < 0 ? c.to : Math.max(c.to, o)),
                      c.typeOver && (s = !0));
                  }
                if (B && a.length > 1) {
                  var u = a.filter(function (e) {
                    return "BR" == e.nodeName;
                  });
                  if (2 == u.length) {
                    var f = u[0],
                      d = u[1];
                    f.parentNode && f.parentNode.parentNode == d.parentNode
                      ? d.remove()
                      : f.remove();
                  }
                }
                var p = null;
                i < 0 &&
                r &&
                e.input.lastFocus > Date.now() - 200 &&
                Math.max(e.input.lastTouch, e.input.lastClick.time) <
                  Date.now() - 300 &&
                M(n) &&
                (p = rt(e)) &&
                p.eq(h.Y1.near(e.state.doc.resolve(0), 1))
                  ? ((e.input.lastFocus = 0),
                    ot(e),
                    this.currentSelection.set(n),
                    e.scrollToSelection())
                  : (i > -1 || r) &&
                    (i > -1 && (e.docView.markDirty(i, o), cr(e)),
                    this.handleDOMChange(i, o, s, a),
                    e.docView && e.docView.dirty
                      ? e.updateState(e.state)
                      : this.currentSelection.eq(n) || ot(e),
                    this.currentSelection.set(n));
              }
            },
          },
          {
            key: "registerMutation",
            value: function (e, t) {
              if (t.indexOf(e.target) > -1) return null;
              var n = this.view.docView.nearestDesc(e.target);
              if (
                "attributes" == e.type &&
                (n == this.view.docView ||
                  "contenteditable" == e.attributeName ||
                  ("style" == e.attributeName &&
                    !e.oldValue &&
                    !e.target.getAttribute("style")))
              )
                return null;
              if (!n || n.ignoreMutation(e)) return null;
              if ("childList" == e.type) {
                for (var r = 0; r < e.addedNodes.length; r++)
                  t.push(e.addedNodes[r]);
                if (
                  n.contentDOM &&
                  n.contentDOM != n.dom &&
                  !n.contentDOM.contains(e.target)
                )
                  return { from: n.posBefore, to: n.posAfter };
                var i = e.previousSibling,
                  o = e.nextSibling;
                if (z && $ <= 11 && e.addedNodes.length)
                  for (var s = 0; s < e.addedNodes.length; s++) {
                    var a = e.addedNodes[s],
                      l = a.previousSibling,
                      c = a.nextSibling;
                    ((!l ||
                      Array.prototype.indexOf.call(e.addedNodes, l) < 0) &&
                      (i = l),
                      (!c ||
                        Array.prototype.indexOf.call(e.addedNodes, c) < 0) &&
                        (o = c));
                  }
                var u = i && i.parentNode == e.target ? m(i) + 1 : 0,
                  f = n.localPosFromDOM(e.target, u, -1),
                  h =
                    o && o.parentNode == e.target
                      ? m(o)
                      : e.target.childNodes.length,
                  d = n.localPosFromDOM(e.target, h, 1);
                return { from: f, to: d };
              }
              return "attributes" == e.type
                ? { from: n.posAtStart - n.border, to: n.posAtEnd + n.border }
                : {
                    from: n.posAtStart,
                    to: n.posAtEnd,
                    typeOver: e.target.nodeValue == e.oldValue,
                  };
            },
          },
        ]),
        e
      );
    })(),
    ar = new WeakMap(),
    lr = !1;
  function cr(e) {
    if (
      !ar.has(e) &&
      (ar.set(e, null),
      -1 !==
        ["normal", "nowrap", "pre-line"].indexOf(
          getComputedStyle(e.dom).whiteSpace,
        ))
    ) {
      if (((e.requiresGeckoHackNode = B), lr)) return;
      (v["warn"](
        "ProseMirror expects the CSS white-space property to be set, preferably to 'pre-wrap'. It is recommended to load style/prosemirror.css from the prosemirror-view package.",
      ),
        (lr = !0));
    }
  }
  function ur(e) {
    var t;
    function n(e) {
      (e.preventDefault(),
        e.stopImmediatePropagation(),
        (t = e.getTargetRanges()[0]));
    }
    (e.dom.addEventListener("beforeinput", n, !0),
      document.execCommand("indent"),
      e.dom.removeEventListener("beforeinput", n, !0));
    var r = t.startContainer,
      i = t.startOffset,
      o = t.endContainer,
      s = t.endOffset,
      a = e.domAtPos(e.state.selection.anchor);
    if (k(a.node, a.offset, o, s)) {
      var l = [o, s, r, i];
      ((r = l[0]), (i = l[1]), (o = l[2]), (s = l[3]));
    }
    return { anchorNode: r, anchorOffset: i, focusNode: o, focusOffset: s };
  }
  function fr(e, t, n) {
    var r,
      i = e.docView.parseRange(t, n),
      o = i.node,
      s = i.fromOffset,
      a = i.toOffset,
      l = i.from,
      c = i.to,
      u = e.domSelectionRange(),
      f = u.anchorNode;
    if (
      (f &&
        e.dom.contains(1 == f.nodeType ? f : f.parentNode) &&
        ((r = [{ node: f, offset: u.anchorOffset }]),
        M(u) || r.push({ node: u.focusNode, offset: u.focusOffset })),
      j && 8 === e.input.lastKeyCode)
    )
      for (var h = a; h > s; h--) {
        var p = o.childNodes[h - 1],
          v = p.pmViewDesc;
        if ("BR" == p.nodeName && !v) {
          a = h;
          break;
        }
        if (!v || v.size) break;
      }
    var m = e.state.doc,
      g = e.someProp("domParser") || d.aw.fromSchema(e.state.schema),
      y = m.resolve(l),
      w = null,
      k = g.parse(o, {
        topNode: y.parent,
        topMatch: y.parent.contentMatchAt(y.index()),
        topOpen: !0,
        from: s,
        to: a,
        preserveWhitespace: "pre" != y.parent.type.whitespace || "full",
        findPositions: r,
        ruleFromNode: hr,
        context: y,
      });
    if (r && null != r[0].pos) {
      var b = r[0].pos,
        x = r[1] && r[1].pos;
      (null == x && (x = b), (w = { anchor: b + l, head: x + l }));
    }
    return { doc: k, sel: w, from: l, to: c };
  }
  function hr(e) {
    var t = e.pmViewDesc;
    if (t) return t.parseRule();
    if ("BR" == e.nodeName && e.parentNode) {
      if (H && /^(ul|ol)$/i.test(e.parentNode.nodeName)) {
        var n = document.createElement("div");
        return (n.appendChild(document.createElement("li")), { skip: n });
      }
      if (
        e.parentNode.lastChild == e ||
        (H && /^(tr|table)$/i.test(e.parentNode.nodeName))
      )
        return { ignore: !0 };
    } else if ("IMG" == e.nodeName && e.getAttribute("mark-placeholder"))
      return { ignore: !0 };
    return null;
  }
  var dr =
    /^(a|abbr|acronym|b|bd[io]|big|br|button|cite|code|data(list)?|del|dfn|em|i|ins|kbd|label|map|mark|meter|output|q|ruby|s|samp|small|span|strong|su[bp]|time|u|tt|var)$/i;
  function pr(e, t, n, r, i) {
    var o =
      e.input.compositionPendingChanges ||
      (e.composing ? e.input.compositionID : 0);
    if (((e.input.compositionPendingChanges = 0), t < 0)) {
      var s =
          e.input.lastSelectionTime > Date.now() - 50
            ? e.input.lastSelectionOrigin
            : null,
        a = rt(e, s);
      if (a && !e.state.selection.eq(a)) {
        if (
          j &&
          J &&
          13 === e.input.lastKeyCode &&
          Date.now() - 100 < e.input.lastKeyCodeTime &&
          e.someProp("handleKeyDown", function (t) {
            return t(e, N(13, "Enter"));
          })
        )
          return;
        var l = e.state.tr.setSelection(a);
        ("pointer" == s
          ? l.setMeta("pointer", !0)
          : "key" == s && l.scrollIntoView(),
          o && l.setMeta("composition", o),
          e.dispatch(l));
      }
    } else {
      var c = e.state.doc.resolve(t),
        u = c.sharedDepth(n);
      ((t = c.before(u + 1)), (n = e.state.doc.resolve(n).after(u + 1)));
      var f,
        d,
        p = e.state.selection,
        v = fr(e, t, n),
        m = e.state.doc,
        g = m.slice(v.from, v.to);
      (8 === e.input.lastKeyCode && Date.now() - 100 < e.input.lastKeyCodeTime
        ? ((f = e.state.selection.to), (d = "end"))
        : ((f = e.state.selection.from), (d = "start")),
        (e.input.lastKeyCode = null));
      var y = wr(g.content, v.doc.content, v.from, f, d);
      if (
        ((L && e.input.lastIOSEnter > Date.now() - 225) || J) &&
        i.some(function (e) {
          return 1 == e.nodeType && !dr.test(e.nodeName);
        }) &&
        (!y || y.endA >= y.endB) &&
        e.someProp("handleKeyDown", function (t) {
          return t(e, N(13, "Enter"));
        })
      )
        e.input.lastIOSEnter = 0;
      else {
        if (!y) {
          if (
            !(
              r &&
              p instanceof h.Bs &&
              !p.empty &&
              p.$head.sameParent(p.$anchor)
            ) ||
            e.composing ||
            (v.sel && v.sel.anchor != v.sel.head)
          ) {
            if (v.sel) {
              var w = vr(e, e.state.doc, v.sel);
              if (w && !w.eq(e.state.selection)) {
                var k = e.state.tr.setSelection(w);
                (o && k.setMeta("composition", o), e.dispatch(k));
              }
            }
            return;
          }
          y = { start: p.from, endA: p.to, endB: p.to };
        }
        if (
          j &&
          e.cursorWrapper &&
          v.sel &&
          v.sel.anchor == e.cursorWrapper.deco.from &&
          v.sel.head == v.sel.anchor
        ) {
          var b = y.endB - y.start;
          v.sel = { anchor: v.sel.anchor + b, head: v.sel.anchor + b };
        }
        (e.input.domChangeCount++,
          e.state.selection.from < e.state.selection.to &&
            y.start == y.endB &&
            e.state.selection instanceof h.Bs &&
            (y.start > e.state.selection.from &&
            y.start <= e.state.selection.from + 2 &&
            e.state.selection.from >= v.from
              ? (y.start = e.state.selection.from)
              : y.endA < e.state.selection.to &&
                y.endA >= e.state.selection.to - 2 &&
                e.state.selection.to <= v.to &&
                ((y.endB += e.state.selection.to - y.endA),
                (y.endA = e.state.selection.to))),
          z &&
            $ <= 11 &&
            y.endB == y.start + 1 &&
            y.endA == y.start &&
            y.start > v.from &&
            "  " ==
              v.doc.textBetween(y.start - v.from - 1, y.start - v.from + 1) &&
            (y.start--, y.endA--, y.endB--));
        var x,
          S = v.doc.resolveNoCache(y.start - v.from),
          C = v.doc.resolveNoCache(y.endB - v.from),
          O = m.resolve(y.start),
          M = S.sameParent(C) && S.parent.inlineContent && O.end() >= y.endA;
        if (
          ((L &&
            e.input.lastIOSEnter > Date.now() - 225 &&
            (!M ||
              i.some(function (e) {
                return "DIV" == e.nodeName || "P" == e.nodeName;
              }))) ||
            (!M &&
              S.pos < v.doc.content.size &&
              !S.sameParent(C) &&
              (x = h.Y1.findFrom(v.doc.resolve(S.pos + 1), 1, !0)) &&
              x.head == C.pos)) &&
          e.someProp("handleKeyDown", function (t) {
            return t(e, N(13, "Enter"));
          })
        )
          e.input.lastIOSEnter = 0;
        else if (
          e.state.selection.anchor > y.start &&
          gr(m, y.start, y.endA, S, C) &&
          e.someProp("handleKeyDown", function (t) {
            return t(e, N(8, "Backspace"));
          })
        )
          J && j && e.domObserver.suppressSelectionUpdates();
        else {
          (j &&
            J &&
            y.endB == y.start &&
            (e.input.lastAndroidDelete = Date.now()),
            J &&
              !M &&
              S.start() != C.start() &&
              0 == C.parentOffset &&
              S.depth == C.depth &&
              v.sel &&
              v.sel.anchor == v.sel.head &&
              v.sel.head == y.endA &&
              ((y.endB -= 2),
              (C = v.doc.resolveNoCache(y.endB - v.from)),
              setTimeout(function () {
                e.someProp("handleKeyDown", function (t) {
                  return t(e, N(13, "Enter"));
                });
              }, 20)));
          var A,
            D,
            E,
            T = y.start,
            R = y.endA;
          if (M)
            if (S.pos == C.pos)
              (z &&
                $ <= 11 &&
                0 == S.parentOffset &&
                (e.domObserver.suppressSelectionUpdates(),
                setTimeout(function () {
                  return ot(e);
                }, 20)),
                (A = e.state.tr.delete(T, R)),
                (D = m.resolve(y.start).marksAcross(m.resolve(y.endA))));
            else if (
              y.endA == y.endB &&
              (E = mr(
                S.parent.content.cut(S.parentOffset, C.parentOffset),
                O.parent.content.cut(O.parentOffset, y.endA - O.start()),
              ))
            )
              ((A = e.state.tr),
                "add" == E.type
                  ? A.addMark(T, R, E.mark)
                  : A.removeMark(T, R, E.mark));
            else if (
              S.parent.child(S.index()).isText &&
              S.index() == C.index() - (C.textOffset ? 0 : 1)
            ) {
              var P = S.parent.textBetween(S.parentOffset, C.parentOffset);
              if (
                e.someProp("handleTextInput", function (t) {
                  return t(e, T, R, P);
                })
              )
                return;
              A = e.state.tr.insertText(P, T, R);
            }
          if (
            (A ||
              (A = e.state.tr.replace(
                T,
                R,
                v.doc.slice(y.start - v.from, y.endB - v.from),
              )),
            v.sel)
          ) {
            var Z = vr(e, A.doc, v.sel);
            Z &&
              !(
                (j &&
                  J &&
                  e.composing &&
                  Z.empty &&
                  (y.start != y.endB ||
                    e.input.lastAndroidDelete < Date.now() - 100) &&
                  (Z.head == T || Z.head == A.mapping.map(R) - 1)) ||
                (z && Z.empty && Z.head == T)
              ) &&
              A.setSelection(Z);
          }
          (D && A.ensureMarks(D),
            o && A.setMeta("composition", o),
            e.dispatch(A.scrollIntoView()));
        }
      }
    }
  }
  function vr(e, t, n) {
    return Math.max(n.anchor, n.head) > t.content.size
      ? null
      : pt(e, t.resolve(n.anchor), t.resolve(n.head));
  }
  function mr(e, t) {
    for (
      var n,
        r,
        i,
        o = e.firstChild.marks,
        s = t.firstChild.marks,
        a = o,
        l = s,
        c = 0;
      c < s.length;
      c++
    )
      a = s[c].removeFromSet(a);
    for (var u = 0; u < o.length; u++) l = o[u].removeFromSet(l);
    if (1 == a.length && 0 == l.length)
      ((r = a[0]),
        (n = "add"),
        (i = function (e) {
          return e.mark(r.addToSet(e.marks));
        }));
    else {
      if (0 != a.length || 1 != l.length) return null;
      ((r = l[0]),
        (n = "remove"),
        (i = function (e) {
          return e.mark(r.removeFromSet(e.marks));
        }));
    }
    for (var f = [], h = 0; h < t.childCount; h++) f.push(i(t.child(h)));
    if (d.HY.from(f).eq(e)) return { mark: r, type: n };
  }
  function gr(e, t, n, r, i) {
    if (
      !r.parent.isTextblock ||
      n - t <= i.pos - r.pos ||
      yr(r, !0, !1) < i.pos
    )
      return !1;
    var o = e.resolve(t);
    if (o.parentOffset < o.parent.content.size || !o.parent.isTextblock)
      return !1;
    var s = e.resolve(yr(o, !0, !0));
    return (
      !(!s.parent.isTextblock || s.pos > n || yr(s, !0, !1) < n) &&
      r.parent.content.cut(r.parentOffset).eq(s.parent.content)
    );
  }
  function yr(e, t, n) {
    var r = e.depth,
      i = t ? e.end() : e.pos;
    while (r > 0 && (t || e.indexAfter(r) == e.node(r).childCount))
      (r--, i++, (t = !1));
    if (n) {
      var o = e.node(r).maybeChild(e.indexAfter(r));
      while (o && !o.isLeaf) ((o = o.firstChild), i++);
    }
    return i;
  }
  function wr(e, t, n, r, i) {
    var o = e.findDiffStart(t, n);
    if (null == o) return null;
    var s = e.findDiffEnd(t, n + e.size, n + t.size),
      a = s.a,
      l = s.b;
    if ("end" == i) {
      var c = Math.max(0, o - Math.min(a, l));
      r -= a + c - o;
    }
    if (a < o && e.size < t.size) {
      var u = r <= o && r >= a ? o - r : 0;
      ((o -= u), (l = o + (l - a)), (a = o));
    } else if (l < o) {
      var f = r <= o && r >= l ? o - r : 0;
      ((o -= f), (a = o + (a - l)), (l = o));
    }
    return { start: o, endA: a, endB: l };
  }
  var kr = (function () {
    function e(t, n) {
      var r = this;
      ((0, u.Z)(this, e),
        (this._root = null),
        (this.focused = !1),
        (this.trackWrites = null),
        (this.mounted = !1),
        (this.markCursor = null),
        (this.cursorWrapper = null),
        (this.lastSelectedViewDesc = void 0),
        (this.input = new tn()),
        (this.prevDirectPlugins = []),
        (this.pluginViews = []),
        (this.requiresGeckoHackNode = !1),
        (this.dragging = null),
        (this._props = n),
        (this.state = n.state),
        (this.directPlugins = n.plugins || []),
        this.directPlugins.forEach(Nr),
        (this.dispatch = this.dispatch.bind(this)),
        (this.dom = (t && t.mount) || document.createElement("div")),
        t &&
          (t.appendChild
            ? t.appendChild(this.dom)
            : "function" == typeof t
              ? t(this.dom)
              : t.mount && (this.mounted = !0)),
        (this.editable = Sr(this)),
        xr(this),
        (this.nodeViews = Or(this)),
        (this.docView = ze(this.state.doc, br(this), nr(this), this.dom, this)),
        (this.domObserver = new sr(this, function (e, t, n, i) {
          return pr(r, e, t, n, i);
        })),
        this.domObserver.start(),
        nn(this),
        this.updatePluginViews());
    }
    return (
      (0, f.Z)(e, [
        {
          key: "composing",
          get: function () {
            return this.input.composing;
          },
        },
        {
          key: "props",
          get: function () {
            if (this._props.state != this.state) {
              var e = this._props;
              for (var t in ((this._props = {}), e)) this._props[t] = e[t];
              this._props.state = this.state;
            }
            return this._props;
          },
        },
        {
          key: "update",
          value: function (e) {
            e.handleDOMEvents != this._props.handleDOMEvents && sn(this);
            var t = this._props;
            ((this._props = e),
              e.plugins &&
                (e.plugins.forEach(Nr), (this.directPlugins = e.plugins)),
              this.updateStateInner(e.state, t));
          },
        },
        {
          key: "setProps",
          value: function (e) {
            var t = {};
            for (var n in this._props) t[n] = this._props[n];
            for (var r in ((t.state = this.state), e)) t[r] = e[r];
            this.update(t);
          },
        },
        {
          key: "updateState",
          value: function (e) {
            this.updateStateInner(e, this._props);
          },
        },
        {
          key: "updateStateInner",
          value: function (e, t) {
            var n = this.state,
              r = !1,
              i = !1;
            (e.storedMarks && this.composing && (Mn(this), (i = !0)),
              (this.state = e));
            var o = n.plugins != e.plugins || this._props.plugins != t.plugins;
            if (
              o ||
              this._props.plugins != t.plugins ||
              this._props.nodeViews != t.nodeViews
            ) {
              var s = Or(this);
              Mr(s, this.nodeViews) && ((this.nodeViews = s), (r = !0));
            }
            ((o || t.handleDOMEvents != this._props.handleDOMEvents) &&
              sn(this),
              (this.editable = Sr(this)),
              xr(this));
            var a = nr(this),
              l = br(this),
              c =
                n.plugins == e.plugins || n.doc.eq(e.doc)
                  ? e.scrollToSelection > n.scrollToSelection
                    ? "to selection"
                    : "preserve"
                  : "reset",
              u = r || !this.docView.matchesNode(e.doc, l, a);
            (!u && e.selection.eq(n.selection)) || (i = !0);
            var f =
              "preserve" == c &&
              i &&
              null == this.dom.style.overflowAnchor &&
              Q(this);
            if (i) {
              this.domObserver.stop();
              var h =
                u &&
                (z || j) &&
                !this.composing &&
                !n.selection.empty &&
                !e.selection.empty &&
                Cr(n.selection, e.selection);
              if (u) {
                var d = j
                  ? (this.trackWrites = this.domSelectionRange().focusNode)
                  : null;
                ((!r && this.docView.update(e.doc, l, a, this)) ||
                  (this.docView.updateOuterDeco([]),
                  this.docView.destroy(),
                  (this.docView = ze(e.doc, l, a, this.dom, this))),
                  d && !this.trackWrites && (h = !0));
              }
              (h ||
              !(
                this.input.mouseDown &&
                this.domObserver.currentSelection.eq(
                  this.domSelectionRange(),
                ) &&
                gt(this)
              )
                ? ot(this, h)
                : (ht(this, e.selection), this.domObserver.setCurSelection()),
                this.domObserver.start());
            }
            (this.updatePluginViews(n),
              "reset" == c
                ? (this.dom.scrollTop = 0)
                : "to selection" == c
                  ? this.scrollToSelection()
                  : f && te(f));
          },
        },
        {
          key: "scrollToSelection",
          value: function () {
            var e = this,
              t = this.domSelectionRange().focusNode;
            if (
              this.someProp("handleScrollToSelection", function (t) {
                return t(e);
              })
            );
            else if (this.state.selection instanceof h.qv) {
              var n = this.docView.domAfterPos(this.state.selection.from);
              1 == n.nodeType && X(this, n.getBoundingClientRect(), t);
            } else X(this, this.coordsAtPos(this.state.selection.head, 1), t);
          },
        },
        {
          key: "destroyPluginViews",
          value: function () {
            var e;
            while ((e = this.pluginViews.pop())) e.destroy && e.destroy();
          },
        },
        {
          key: "updatePluginViews",
          value: function (e) {
            if (
              e &&
              e.plugins == this.state.plugins &&
              this.directPlugins == this.prevDirectPlugins
            )
              for (var t = 0; t < this.pluginViews.length; t++) {
                var n = this.pluginViews[t];
                n.update && n.update(this, e);
              }
            else {
              ((this.prevDirectPlugins = this.directPlugins),
                this.destroyPluginViews());
              for (var r = 0; r < this.directPlugins.length; r++) {
                var i = this.directPlugins[r];
                i.spec.view && this.pluginViews.push(i.spec.view(this));
              }
              for (var o = 0; o < this.state.plugins.length; o++) {
                var s = this.state.plugins[o];
                s.spec.view && this.pluginViews.push(s.spec.view(this));
              }
            }
          },
        },
        {
          key: "someProp",
          value: function (e, t) {
            var n,
              r = this._props && this._props[e];
            if (null != r && (n = t ? t(r) : r)) return n;
            for (var i = 0; i < this.directPlugins.length; i++) {
              var o = this.directPlugins[i].props[e];
              if (null != o && (n = t ? t(o) : o)) return n;
            }
            var s = this.state.plugins;
            if (s)
              for (var a = 0; a < s.length; a++) {
                var l = s[a].props[e];
                if (null != l && (n = t ? t(l) : l)) return n;
              }
          },
        },
        {
          key: "hasFocus",
          value: function () {
            if (z) {
              var e = this.root.activeElement;
              if (e == this.dom) return !0;
              if (!e || !this.dom.contains(e)) return !1;
              while (e && this.dom != e && this.dom.contains(e)) {
                if ("false" == e.contentEditable) return !1;
                e = e.parentElement;
              }
              return !0;
            }
            return this.root.activeElement == this.dom;
          },
        },
        {
          key: "focus",
          value: function () {
            (this.domObserver.stop(),
              this.editable && ie(this.dom),
              ot(this),
              this.domObserver.start());
          },
        },
        {
          key: "root",
          get: function () {
            var e = this,
              t = this._root;
            if (null == t)
              for (
                var n = function (t) {
                    if (9 == t.nodeType || (11 == t.nodeType && t.host))
                      return (
                        t.getSelection ||
                          (Object.getPrototypeOf(t).getSelection = function () {
                            return t.ownerDocument.getSelection();
                          }),
                        { v: (e._root = t) }
                      );
                  },
                  i = this.dom.parentNode;
                i;
                i = i.parentNode
              ) {
                var o = n(i);
                if ("object" === (0, r.Z)(o)) return o.v;
              }
            return t || document;
          },
        },
        {
          key: "posAtCoords",
          value: function (e) {
            return he(this, e);
          },
        },
        {
          key: "coordsAtPos",
          value: function (e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 1;
            return me(this, e, t);
          },
        },
        {
          key: "domAtPos",
          value: function (e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0;
            return this.docView.domFromPos(e, t);
          },
        },
        {
          key: "nodeDOM",
          value: function (e) {
            var t = this.docView.descAt(e);
            return t ? t.nodeDOM : null;
          },
        },
        {
          key: "posAtDOM",
          value: function (e, t) {
            var n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : -1,
              r = this.docView.posFromDOM(e, t, n);
            if (null == r)
              throw new RangeError("DOM position not inside the editor");
            return r;
          },
        },
        {
          key: "endOfTextblock",
          value: function (e, t) {
            return Me(this, t || this.state, e);
          },
        },
        {
          key: "pasteHTML",
          value: function (e, t) {
            return Pn(this, "", e, !1, t || new ClipboardEvent("paste"));
          },
        },
        {
          key: "pasteText",
          value: function (e, t) {
            return Pn(this, e, null, !0, t || new ClipboardEvent("paste"));
          },
        },
        {
          key: "destroy",
          value: function () {
            this.docView &&
              (on(this),
              this.destroyPluginViews(),
              this.mounted
                ? (this.docView.update(this.state.doc, [], nr(this), this),
                  (this.dom.textContent = ""))
                : this.dom.parentNode &&
                  this.dom.parentNode.removeChild(this.dom),
              this.docView.destroy(),
              (this.docView = null));
          },
        },
        {
          key: "isDestroyed",
          get: function () {
            return null == this.docView;
          },
        },
        {
          key: "dispatchEvent",
          value: function (e) {
            return cn(this, e);
          },
        },
        {
          key: "dispatch",
          value: function (e) {
            var t = this._props.dispatchTransaction;
            t ? t.call(this, e) : this.updateState(this.state.apply(e));
          },
        },
        {
          key: "domSelectionRange",
          value: function () {
            return H &&
              11 === this.root.nodeType &&
              A(this.dom.ownerDocument) == this.dom
              ? ur(this)
              : this.domSelection();
          },
        },
        {
          key: "domSelection",
          value: function () {
            return this.root.getSelection();
          },
        },
      ]),
      e
    );
  })();
  function br(e) {
    var t = Object.create(null);
    return (
      (t.class = "ProseMirror"),
      (t.contenteditable = String(e.editable)),
      e.someProp("attributes", function (n) {
        if (("function" == typeof n && (n = n(e.state)), n))
          for (var r in n)
            "class" == r
              ? (t.class += " " + n[r])
              : "style" == r
                ? (t.style = (t.style ? t.style + ";" : "") + n[r])
                : t[r] ||
                  "contenteditable" == r ||
                  "nodeName" == r ||
                  (t[r] = String(n[r]));
      }),
      t.translate || (t.translate = "no"),
      [Fn.node(0, e.state.doc.content.size, t)]
    );
  }
  function xr(e) {
    if (e.markCursor) {
      var t = document.createElement("img");
      ((t.className = "ProseMirror-separator"),
        t.setAttribute("mark-placeholder", "true"),
        t.setAttribute("alt", ""),
        (e.cursorWrapper = {
          dom: t,
          deco: Fn.widget(e.state.selection.head, t, {
            raw: !0,
            marks: e.markCursor,
          }),
        }));
    } else e.cursorWrapper = null;
  }
  function Sr(e) {
    return !e.someProp("editable", function (t) {
      return !1 === t(e.state);
    });
  }
  function Cr(e, t) {
    var n = Math.min(
      e.$anchor.sharedDepth(e.head),
      t.$anchor.sharedDepth(t.head),
    );
    return e.$anchor.start(n) != t.$anchor.start(n);
  }
  function Or(e) {
    var t = Object.create(null);
    function n(e) {
      for (var n in e)
        Object.prototype.hasOwnProperty.call(t, n) || (t[n] = e[n]);
    }
    return (e.someProp("nodeViews", n), e.someProp("markViews", n), t);
  }
  function Mr(e, t) {
    var n = 0,
      r = 0;
    for (var i in e) {
      if (e[i] != t[i]) return !0;
      n++;
    }
    for (var o in t) r++;
    return n != r;
  }
  function Nr(e) {
    if (e.spec.state || e.spec.filterTransaction || e.spec.appendTransaction)
      throw new RangeError(
        "Plugins passed directly to the view must not have a state component",
      );
  }
};
