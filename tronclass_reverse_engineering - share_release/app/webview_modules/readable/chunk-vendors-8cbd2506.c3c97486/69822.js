// Source: decompiled/web-modules-acorn/chunk-vendors-8cbd2506.c3c97486/69822.js
// Webpack module id: 69822
const __webpack_module_69822 = function (t, e, n) {
  "use strict";
  n.d(e, {
    Cf: function () {
      return un;
    },
    DK: function () {
      return mn;
    },
    EG: function () {
      return Ce;
    },
    Jo: function () {
      return ue;
    },
    K9: function () {
      return vn;
    },
    ML: function () {
      return sn;
    },
    NB: function () {
      return pn;
    },
    Nl: function () {
      return T;
    },
    P1: function () {
      return O;
    },
    QC: function () {
      return we;
    },
    S0: function () {
      return dn;
    },
    XP: function () {
      return de;
    },
    b5: function () {
      return pe;
    },
    eE: function () {
      return Ft;
    },
    hj: function () {
      return et;
    },
    nU: function () {
      return N;
    },
    pr: function () {
      return Oe;
    },
    qv: function () {
      return ce;
    },
    tI: function () {
      return Me;
    },
    u9: function () {
      return ge;
    },
    vc: function () {
      return fn;
    },
    x2: function () {
      return cn;
    },
    xh: function () {
      return Tt;
    },
    zK: function () {
      return ln;
    },
  });
  var r = n(52417),
    o = n(39110),
    i = n(26720),
    a = n(3336),
    s = n(82482),
    u = n(89584),
    c = n(56084),
    l = n(13087),
    d = n(62833),
    f = n(95082),
    p =
      (n(5735),
      n(83753),
      n(38559),
      n(21249),
      n(69720),
      n(41539),
      n(57658),
      n(54747),
      n(57327),
      n(92222),
      n(21703),
      n(96647),
      n(85827),
      n(26699),
      n(32023),
      n(47941),
      n(74916),
      n(4723),
      n(9653),
      n(69826),
      n(47042),
      n(76373),
      n(82772),
      n(70189),
      n(78783),
      n(33948),
      n(2707),
      n(65069),
      n(84944),
      n(33792),
      n(30489),
      n(77601),
      n(23157),
      n(39714),
      n(23123),
      n(52262),
      n(38862),
      n(15306),
      n(43371),
      n(26833),
      n(64765),
      n(94986),
      n(91038),
      n(62145)),
    h = n(78614),
    m = n(64124),
    v = n(17943),
    g = n(64732),
    y = n(45265),
    b = n(50823),
    w = n(25108);
  function M(t) {
    var e = t.state,
      n = t.transaction,
      r = n.selection,
      o = n.doc,
      i = n.storedMarks;
    return (0, f.Z)(
      (0, f.Z)({}, e),
      {},
      {
        apply: e.apply.bind(e),
        applyTransaction: e.applyTransaction.bind(e),
        filterTransaction: e.filterTransaction,
        plugins: e.plugins,
        schema: e.schema,
        reconfigure: e.reconfigure.bind(e),
        toJSON: e.toJSON.bind(e),
        get storedMarks() {
          return i;
        },
        get selection() {
          return r;
        },
        get doc() {
          return o;
        },
        get tr() {
          return ((r = n.selection), (o = n.doc), (i = n.storedMarks), n);
        },
      },
    );
  }
  var E = (function () {
      function t(e) {
        ((0, l.Z)(this, t),
          (this.editor = e.editor),
          (this.rawCommands = this.editor.extensionManager.commands),
          (this.customState = e.state));
      }
      return (
        (0, d.Z)(t, [
          {
            key: "hasCustomState",
            get: function () {
              return !!this.customState;
            },
          },
          {
            key: "state",
            get: function () {
              return this.customState || this.editor.state;
            },
          },
          {
            key: "commands",
            get: function () {
              var t = this,
                e = this.rawCommands,
                n = this.editor,
                r = this.state,
                o = n.view,
                i = r.tr,
                a = this.buildProps(i);
              return Object.fromEntries(
                Object.entries(e).map(function (e) {
                  var n = (0, c.Z)(e, 2),
                    r = n[0],
                    s = n[1],
                    u = function () {
                      var e = s.apply(void 0, arguments)(a);
                      return (
                        i.getMeta("preventDispatch") ||
                          t.hasCustomState ||
                          o.dispatch(i),
                        e
                      );
                    };
                  return [r, u];
                }),
              );
            },
          },
          {
            key: "chain",
            get: function () {
              var t = this;
              return function () {
                return t.createChain();
              };
            },
          },
          {
            key: "can",
            get: function () {
              var t = this;
              return function () {
                return t.createCan();
              };
            },
          },
          {
            key: "createChain",
            value: function (t) {
              var e = this,
                n =
                  !(arguments.length > 1 && void 0 !== arguments[1]) ||
                  arguments[1],
                r = this.rawCommands,
                o = this.editor,
                i = this.state,
                a = o.view,
                s = [],
                u = !!t,
                l = t || i.tr,
                d = function () {
                  return (
                    u ||
                      !n ||
                      l.getMeta("preventDispatch") ||
                      e.hasCustomState ||
                      a.dispatch(l),
                    s.every(function (t) {
                      return !0 === t;
                    })
                  );
                },
                p = (0, f.Z)(
                  (0, f.Z)(
                    {},
                    Object.fromEntries(
                      Object.entries(r).map(function (t) {
                        var r = (0, c.Z)(t, 2),
                          o = r[0],
                          i = r[1],
                          a = function () {
                            var t = e.buildProps(l, n),
                              r = i.apply(void 0, arguments)(t);
                            return (s.push(r), p);
                          };
                        return [o, a];
                      }),
                    ),
                  ),
                  {},
                  { run: d },
                );
              return p;
            },
          },
          {
            key: "createCan",
            value: function (t) {
              var e = this,
                n = this.rawCommands,
                r = this.state,
                o = !1,
                i = t || r.tr,
                a = this.buildProps(i, o),
                s = Object.fromEntries(
                  Object.entries(n).map(function (t) {
                    var e = (0, c.Z)(t, 2),
                      n = e[0],
                      r = e[1];
                    return [
                      n,
                      function () {
                        return r.apply(
                          void 0,
                          arguments,
                        )((0, f.Z)((0, f.Z)({}, a), {}, { dispatch: void 0 }));
                      },
                    ];
                  }),
                );
              return (0, f.Z)(
                (0, f.Z)({}, s),
                {},
                {
                  chain: function () {
                    return e.createChain(i, o);
                  },
                },
              );
            },
          },
          {
            key: "buildProps",
            value: function (t) {
              var e = this,
                n =
                  !(arguments.length > 1 && void 0 !== arguments[1]) ||
                  arguments[1],
                r = this.rawCommands,
                o = this.editor,
                i = this.state,
                a = o.view,
                s = {
                  tr: t,
                  editor: o,
                  view: a,
                  state: M({ state: i, transaction: t }),
                  dispatch: n ? function () {} : void 0,
                  chain: function () {
                    return e.createChain(t, n);
                  },
                  can: function () {
                    return e.createCan(t);
                  },
                  get commands() {
                    return Object.fromEntries(
                      Object.entries(r).map(function (t) {
                        var e = (0, c.Z)(t, 2),
                          n = e[0],
                          r = e[1];
                        return [
                          n,
                          function () {
                            return r.apply(void 0, arguments)(s);
                          },
                        ];
                      }),
                    );
                  },
                };
              return s;
            },
          },
        ]),
        t
      );
    })(),
    _ = (function () {
      function t() {
        ((0, l.Z)(this, t), (this.callbacks = {}));
      }
      return (
        (0, d.Z)(t, [
          {
            key: "on",
            value: function (t, e) {
              return (
                this.callbacks[t] || (this.callbacks[t] = []),
                this.callbacks[t].push(e),
                this
              );
            },
          },
          {
            key: "emit",
            value: function (t) {
              for (
                var e = this,
                  n = arguments.length,
                  r = new Array(n > 1 ? n - 1 : 0),
                  o = 1;
                o < n;
                o++
              )
                r[o - 1] = arguments[o];
              var i = this.callbacks[t];
              return (
                i &&
                  i.forEach(function (t) {
                    return t.apply(e, r);
                  }),
                this
              );
            },
          },
          {
            key: "off",
            value: function (t, e) {
              var n = this.callbacks[t];
              return (
                n &&
                  (e
                    ? (this.callbacks[t] = n.filter(function (t) {
                        return t !== e;
                      }))
                    : delete this.callbacks[t]),
                this
              );
            },
          },
          {
            key: "removeAllListeners",
            value: function () {
              this.callbacks = {};
            },
          },
        ]),
        t
      );
    })();
  function T(t, e, n) {
    if (void 0 === t.config[e] && t.parent) return T(t.parent, e, n);
    if ("function" === typeof t.config[e]) {
      var r = t.config[e].bind(
        (0, f.Z)(
          (0, f.Z)({}, n),
          {},
          { parent: t.parent ? T(t.parent, e, n) : null },
        ),
      );
      return r;
    }
    return t.config[e];
  }
  function x(t) {
    var e = t.filter(function (t) {
        return "extension" === t.type;
      }),
      n = t.filter(function (t) {
        return "node" === t.type;
      }),
      r = t.filter(function (t) {
        return "mark" === t.type;
      });
    return { baseExtensions: e, nodeExtensions: n, markExtensions: r };
  }
  function S(t) {
    var e = [],
      n = x(t),
      r = n.nodeExtensions,
      o = n.markExtensions,
      i = [].concat((0, u.Z)(r), (0, u.Z)(o)),
      a = {
        default: null,
        rendered: !0,
        renderHTML: null,
        parseHTML: null,
        keepOnSplit: !0,
        isRequired: !1,
      };
    return (
      t.forEach(function (t) {
        var n = { name: t.name, options: t.options, storage: t.storage },
          r = T(t, "addGlobalAttributes", n);
        if (r) {
          var o = r();
          o.forEach(function (t) {
            t.types.forEach(function (n) {
              Object.entries(t.attributes).forEach(function (t) {
                var r = (0, c.Z)(t, 2),
                  o = r[0],
                  i = r[1];
                e.push({
                  type: n,
                  name: o,
                  attribute: (0, f.Z)((0, f.Z)({}, a), i),
                });
              });
            });
          });
        }
      }),
      i.forEach(function (t) {
        var n = { name: t.name, options: t.options, storage: t.storage },
          r = T(t, "addAttributes", n);
        if (r) {
          var o = r();
          Object.entries(o).forEach(function (n) {
            var r = (0, c.Z)(n, 2),
              o = r[0],
              i = r[1],
              s = (0, f.Z)((0, f.Z)({}, a), i);
            ("function" ===
              typeof (null === s || void 0 === s ? void 0 : s.default) &&
              (s.default = s.default()),
              (null === s || void 0 === s ? void 0 : s.isRequired) &&
                void 0 === (null === s || void 0 === s ? void 0 : s.default) &&
                delete s.default,
              e.push({ type: t.name, name: o, attribute: s }));
          });
        }
      }),
      e
    );
  }
  function C(t, e) {
    if ("string" === typeof t) {
      if (!e.nodes[t])
        throw Error(
          "There is no node type named '".concat(
            t,
            "'. Maybe you forgot to add the extension?",
          ),
        );
      return e.nodes[t];
    }
    return t;
  }
  function O() {
    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
      e[n] = arguments[n];
    return e
      .filter(function (t) {
        return !!t;
      })
      .reduce(function (t, e) {
        var n = (0, f.Z)({}, t);
        return (
          Object.entries(e).forEach(function (t) {
            var e = (0, c.Z)(t, 2),
              r = e[0],
              o = e[1],
              i = n[r];
            if (i)
              if ("class" === r) {
                var a = o.split(" "),
                  s = n[r].split(" "),
                  l = a.filter(function (t) {
                    return !s.includes(t);
                  });
                n[r] = [].concat((0, u.Z)(s), (0, u.Z)(l)).join(" ");
              } else n[r] = "style" === r ? [n[r], o].join("; ") : o;
            else n[r] = o;
          }),
          n
        );
      }, {});
  }
  function A(t, e) {
    return e
      .filter(function (t) {
        return t.attribute.rendered;
      })
      .map(function (e) {
        return e.attribute.renderHTML
          ? e.attribute.renderHTML(t.attrs) || {}
          : (0, s.Z)({}, e.name, t.attrs[e.name]);
      })
      .reduce(function (t, e) {
        return O(t, e);
      }, {});
  }
  function k(t) {
    return "function" === typeof t;
  }
  function N(t) {
    var e =
      arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
    if (k(t)) {
      for (
        var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2;
        o < n;
        o++
      )
        r[o - 2] = arguments[o];
      return e ? t.bind(e).apply(void 0, r) : t.apply(void 0, r);
    }
    return t;
  }
  function L() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return 0 === Object.keys(t).length && t.constructor === Object;
  }
  function R(t) {
    return "string" !== typeof t
      ? t
      : t.match(/^[+-]?(?:\d*\.)?\d+$/)
        ? Number(t)
        : "true" === t || ("false" !== t && t);
  }
  function P(t, e) {
    return t.style
      ? t
      : (0, f.Z)(
          (0, f.Z)({}, t),
          {},
          {
            getAttrs: function (n) {
              var r = t.getAttrs ? t.getAttrs(n) : t.attrs;
              if (!1 === r) return !1;
              var o = e.reduce(function (t, e) {
                var r = e.attribute.parseHTML
                  ? e.attribute.parseHTML(n)
                  : R(n.getAttribute(e.name));
                return null === r || void 0 === r
                  ? t
                  : (0, f.Z)((0, f.Z)({}, t), {}, (0, s.Z)({}, e.name, r));
              }, {});
              return (0, f.Z)((0, f.Z)({}, r), o);
            },
          },
        );
  }
  function I(t) {
    return Object.fromEntries(
      Object.entries(t).filter(function (t) {
        var e = (0, c.Z)(t, 2),
          n = e[0],
          r = e[1];
        return ("attrs" !== n || !L(r)) && null !== r && void 0 !== r;
      }),
    );
  }
  function H(t, e) {
    var n,
      r = S(t),
      o = x(t),
      i = o.nodeExtensions,
      a = o.markExtensions,
      s =
        null ===
          (n = i.find(function (t) {
            return T(t, "topNode");
          })) || void 0 === n
          ? void 0
          : n.name,
      u = Object.fromEntries(
        i.map(function (n) {
          var o = r.filter(function (t) {
              return t.type === n.name;
            }),
            i = {
              name: n.name,
              options: n.options,
              storage: n.storage,
              editor: e,
            },
            a = t.reduce(function (t, e) {
              var r = T(e, "extendNodeSchema", i);
              return (0, f.Z)((0, f.Z)({}, t), r ? r(n) : {});
            }, {}),
            s = I(
              (0, f.Z)(
                (0, f.Z)({}, a),
                {},
                {
                  content: N(T(n, "content", i)),
                  marks: N(T(n, "marks", i)),
                  group: N(T(n, "group", i)),
                  inline: N(T(n, "inline", i)),
                  atom: N(T(n, "atom", i)),
                  selectable: N(T(n, "selectable", i)),
                  draggable: N(T(n, "draggable", i)),
                  code: N(T(n, "code", i)),
                  defining: N(T(n, "defining", i)),
                  isolating: N(T(n, "isolating", i)),
                  attrs: Object.fromEntries(
                    o.map(function (t) {
                      var e;
                      return [
                        t.name,
                        {
                          default:
                            null ===
                              (e =
                                null === t || void 0 === t
                                  ? void 0
                                  : t.attribute) || void 0 === e
                              ? void 0
                              : e.default,
                        },
                      ];
                    }),
                  ),
                },
              ),
            ),
            u = N(T(n, "parseHTML", i));
          u &&
            (s.parseDOM = u.map(function (t) {
              return P(t, o);
            }));
          var c = T(n, "renderHTML", i);
          c &&
            (s.toDOM = function (t) {
              return c({ node: t, HTMLAttributes: A(t, o) });
            });
          var l = T(n, "renderText", i);
          return (l && (s.toText = l), [n.name, s]);
        }),
      ),
      c = Object.fromEntries(
        a.map(function (n) {
          var o = r.filter(function (t) {
              return t.type === n.name;
            }),
            i = {
              name: n.name,
              options: n.options,
              storage: n.storage,
              editor: e,
            },
            a = t.reduce(function (t, e) {
              var r = T(e, "extendMarkSchema", i);
              return (0, f.Z)((0, f.Z)({}, t), r ? r(n) : {});
            }, {}),
            s = I(
              (0, f.Z)(
                (0, f.Z)({}, a),
                {},
                {
                  inclusive: N(T(n, "inclusive", i)),
                  excludes: N(T(n, "excludes", i)),
                  group: N(T(n, "group", i)),
                  spanning: N(T(n, "spanning", i)),
                  code: N(T(n, "code", i)),
                  attrs: Object.fromEntries(
                    o.map(function (t) {
                      var e;
                      return [
                        t.name,
                        {
                          default:
                            null ===
                              (e =
                                null === t || void 0 === t
                                  ? void 0
                                  : t.attribute) || void 0 === e
                              ? void 0
                              : e.default,
                        },
                      ];
                    }),
                  ),
                },
              ),
            ),
            u = N(T(n, "parseHTML", i));
          u &&
            (s.parseDOM = u.map(function (t) {
              return P(t, o);
            }));
          var c = T(n, "renderHTML", i);
          return (
            c &&
              (s.toDOM = function (t) {
                return c({ mark: t, HTMLAttributes: A(t, o) });
              }),
            [n.name, s]
          );
        }),
      );
    return new v.V_({ topNode: s, nodes: u, marks: c });
  }
  function D(t, e) {
    return e.nodes[t] || e.marks[t] || null;
  }
  function B(t, e) {
    return Array.isArray(e)
      ? e.some(function (e) {
          var n = "string" === typeof e ? e : e.name;
          return n === t.name;
        })
      : e;
  }
  var Z = function (t) {
    var e =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500,
      n = "",
      r = t.parentOffset;
    return (
      t.parent.nodesBetween(Math.max(0, r - e), r, function (t, e, o, i) {
        var a,
          s,
          u =
            (null === (s = (a = t.type.spec).toText) || void 0 === s
              ? void 0
              : s.call(a, { node: t, pos: e, parent: o, index: i })) ||
            t.textContent ||
            "%leaf%";
        n += u.slice(0, Math.max(0, r - e));
      }),
      n
    );
  };
  function j(t) {
    return "[object RegExp]" === Object.prototype.toString.call(t);
  }
  var U = (0, d.Z)(function t(e) {
      ((0, l.Z)(this, t), (this.find = e.find), (this.handler = e.handler));
    }),
    F = function (t, e) {
      if (j(e)) return e.exec(t);
      var n = e(t);
      if (!n) return null;
      var r = [n.text];
      return (
        (r.index = n.index),
        (r.input = t),
        (r.data = n.data),
        n.replaceWith &&
          (n.text.includes(n.replaceWith) ||
            w.warn(
              '[tiptap warn]: "inputRuleMatch.replaceWith" must be part of "inputRuleMatch.text".',
            ),
          r.push(n.replaceWith)),
        r
      );
    };
  function V(t) {
    var e,
      n = t.editor,
      r = t.from,
      o = t.to,
      i = t.text,
      a = t.rules,
      s = t.plugin,
      u = n.view;
    if (u.composing) return !1;
    var c = u.state.doc.resolve(r);
    if (
      c.parent.type.spec.code ||
      (null === (e = c.nodeBefore || c.nodeAfter) || void 0 === e
        ? void 0
        : e.marks.find(function (t) {
            return t.type.spec.code;
          }))
    )
      return !1;
    var l = !1,
      d = Z(c) + i;
    return (
      a.forEach(function (t) {
        if (!l) {
          var e = F(d, t.find);
          if (e) {
            var a = u.state.tr,
              c = M({ state: u.state, transaction: a }),
              f = { from: r - (e[0].length - i.length), to: o },
              p = new E({ editor: n, state: c }),
              h = p.commands,
              m = p.chain,
              v = p.can,
              g = t.handler({
                state: c,
                range: f,
                match: e,
                commands: h,
                chain: m,
                can: v,
              });
            null !== g &&
              a.steps.length &&
              (a.setMeta(s, { transform: a, from: r, to: o, text: i }),
              u.dispatch(a),
              (l = !0));
          }
        }
      }),
      l
    );
  }
  function $(t) {
    var e = t.editor,
      n = t.rules,
      r = new p.Sy({
        state: {
          init: function () {
            return null;
          },
          apply: function (t, e) {
            var n = t.getMeta(r);
            return n || (t.selectionSet || t.docChanged ? null : e);
          },
        },
        props: {
          handleTextInput: function (t, o, i, a) {
            return V({
              editor: e,
              from: o,
              to: i,
              text: a,
              rules: n,
              plugin: r,
            });
          },
          handleDOMEvents: {
            compositionend: function (t) {
              return (
                setTimeout(function () {
                  var o = t.state.selection.$cursor;
                  o &&
                    V({
                      editor: e,
                      from: o.pos,
                      to: o.pos,
                      text: "",
                      rules: n,
                      plugin: r,
                    });
                }),
                !1
              );
            },
          },
          handleKeyDown: function (t, o) {
            if ("Enter" !== o.key) return !1;
            var i = t.state.selection.$cursor;
            return (
              !!i &&
              V({
                editor: e,
                from: i.pos,
                to: i.pos,
                text: "\n",
                rules: n,
                plugin: r,
              })
            );
          },
        },
        isInputRules: !0,
      });
    return r;
  }
  function Y(t) {
    return "number" === typeof t;
  }
  var z = (0, d.Z)(function t(e) {
      ((0, l.Z)(this, t), (this.find = e.find), (this.handler = e.handler));
    }),
    W = function (t, e) {
      if (j(e)) return (0, u.Z)(t.matchAll(e));
      var n = e(t);
      return n
        ? n.map(function (e) {
            var n = [e.text];
            return (
              (n.index = e.index),
              (n.input = t),
              (n.data = e.data),
              e.replaceWith &&
                (e.text.includes(e.replaceWith) ||
                  w.warn(
                    '[tiptap warn]: "pasteRuleMatch.replaceWith" must be part of "pasteRuleMatch.text".',
                  ),
                n.push(e.replaceWith)),
              n
            );
          })
        : [];
    };
  function q(t) {
    var e = t.editor,
      n = t.state,
      r = t.from,
      o = t.to,
      i = t.rule,
      a = new E({ editor: e, state: n }),
      s = a.commands,
      u = a.chain,
      c = a.can,
      l = [];
    n.doc.nodesBetween(r, o, function (t, e) {
      if (t.isTextblock && !t.type.spec.code) {
        var a = Math.max(r, e),
          d = Math.min(o, e + t.content.size),
          f = t.textBetween(a - e, d - e, void 0, "￼"),
          p = W(f, i.find);
        p.forEach(function (t) {
          if (void 0 !== t.index) {
            var e = a + t.index + 1,
              r = e + t[0].length,
              o = { from: n.tr.mapping.map(e), to: n.tr.mapping.map(r) },
              d = i.handler({
                state: n,
                range: o,
                match: t,
                commands: s,
                chain: u,
                can: c,
              });
            l.push(d);
          }
        });
      }
    });
    var d = l.every(function (t) {
      return null !== t;
    });
    return d;
  }
  function X(t) {
    var e = t.editor,
      n = t.rules,
      r = null,
      o = !1,
      i = !1,
      a = n.map(function (t) {
        return new p.Sy({
          view: function (t) {
            var e = function (e) {
              var n;
              r = (
                null === (n = t.dom.parentElement) || void 0 === n
                  ? void 0
                  : n.contains(e.target)
              )
                ? t.dom.parentElement
                : null;
            };
            return (
              window.addEventListener("dragstart", e),
              {
                destroy: function () {
                  window.removeEventListener("dragstart", e);
                },
              }
            );
          },
          props: {
            handleDOMEvents: {
              drop: function (t) {
                return ((i = r === t.dom.parentElement), !1);
              },
              paste: function (t, e) {
                var n,
                  r =
                    null === (n = e.clipboardData) || void 0 === n
                      ? void 0
                      : n.getData("text/html");
                return (
                  (o = !!(null === r || void 0 === r
                    ? void 0
                    : r.includes("data-pm-slice"))),
                  !1
                );
              },
            },
          },
          appendTransaction: function (n, r, a) {
            var s = n[0],
              u = "paste" === s.getMeta("uiEvent") && !o,
              c = "drop" === s.getMeta("uiEvent") && !i;
            if (u || c) {
              var l = r.doc.content.findDiffStart(a.doc.content),
                d = r.doc.content.findDiffEnd(a.doc.content);
              if (Y(l) && d && l !== d.b) {
                var f = a.tr,
                  p = M({ state: a, transaction: f }),
                  h = q({
                    editor: e,
                    state: p,
                    from: Math.max(l - 1, 0),
                    to: d.b - 1,
                    rule: t,
                  });
                if (h && f.steps.length) return f;
              }
            }
          },
        });
      });
    return a;
  }
  function K(t) {
    var e = t.filter(function (e, n) {
      return t.indexOf(e) !== n;
    });
    return (0, u.Z)(new Set(e));
  }
  var G = (function () {
    function t(e, n) {
      var r = this;
      ((0, l.Z)(this, t),
        (this.splittableMarks = []),
        (this.editor = n),
        (this.extensions = t.resolve(e)),
        (this.schema = H(this.extensions, n)),
        this.extensions.forEach(function (t) {
          var e;
          r.editor.extensionStorage[t.name] = t.storage;
          var n = {
            name: t.name,
            options: t.options,
            storage: t.storage,
            editor: r.editor,
            type: D(t.name, r.schema),
          };
          if ("mark" === t.type) {
            var o =
              null === (e = N(T(t, "keepOnSplit", n))) || void 0 === e || e;
            o && r.splittableMarks.push(t.name);
          }
          var i = T(t, "onBeforeCreate", n);
          i && r.editor.on("beforeCreate", i);
          var a = T(t, "onCreate", n);
          a && r.editor.on("create", a);
          var s = T(t, "onUpdate", n);
          s && r.editor.on("update", s);
          var u = T(t, "onSelectionUpdate", n);
          u && r.editor.on("selectionUpdate", u);
          var c = T(t, "onTransaction", n);
          c && r.editor.on("transaction", c);
          var l = T(t, "onFocus", n);
          l && r.editor.on("focus", l);
          var d = T(t, "onBlur", n);
          d && r.editor.on("blur", d);
          var f = T(t, "onDestroy", n);
          f && r.editor.on("destroy", f);
        }));
    }
    return (
      (0, d.Z)(
        t,
        [
          {
            key: "commands",
            get: function () {
              var t = this;
              return this.extensions.reduce(function (e, n) {
                var r = {
                    name: n.name,
                    options: n.options,
                    storage: n.storage,
                    editor: t.editor,
                    type: D(n.name, t.schema),
                  },
                  o = T(n, "addCommands", r);
                return o ? (0, f.Z)((0, f.Z)({}, e), o()) : e;
              }, {});
            },
          },
          {
            key: "plugins",
            get: function () {
              var e = this,
                n = this.editor,
                r = t.sort((0, u.Z)(this.extensions).reverse()),
                o = [],
                i = [],
                a = r
                  .map(function (t) {
                    var r = {
                        name: t.name,
                        options: t.options,
                        storage: t.storage,
                        editor: n,
                        type: D(t.name, e.schema),
                      },
                      a = [],
                      s = T(t, "addKeyboardShortcuts", r),
                      l = {};
                    if (
                      ("mark" === t.type &&
                        t.config.exitable &&
                        (l.ArrowRight = function () {
                          return fn.handleExit({ editor: n, mark: t });
                        }),
                      s)
                    ) {
                      var d = Object.fromEntries(
                        Object.entries(s()).map(function (t) {
                          var e = (0, c.Z)(t, 2),
                            r = e[0],
                            o = e[1];
                          return [
                            r,
                            function () {
                              return o({ editor: n });
                            },
                          ];
                        }),
                      );
                      l = (0, f.Z)((0, f.Z)({}, l), d);
                    }
                    var p = (0, m.h)(l);
                    a.push(p);
                    var h = T(t, "addInputRules", r);
                    B(t, n.options.enableInputRules) &&
                      h &&
                      o.push.apply(o, (0, u.Z)(h()));
                    var v = T(t, "addPasteRules", r);
                    B(t, n.options.enablePasteRules) &&
                      v &&
                      i.push.apply(i, (0, u.Z)(v()));
                    var g = T(t, "addProseMirrorPlugins", r);
                    if (g) {
                      var y = g();
                      a.push.apply(a, (0, u.Z)(y));
                    }
                    return a;
                  })
                  .flat();
              return [$({ editor: n, rules: o })].concat(
                (0, u.Z)(X({ editor: n, rules: i })),
                (0, u.Z)(a),
              );
            },
          },
          {
            key: "attributes",
            get: function () {
              return S(this.extensions);
            },
          },
          {
            key: "nodeViews",
            get: function () {
              var t = this,
                e = this.editor,
                n = x(this.extensions),
                r = n.nodeExtensions;
              return Object.fromEntries(
                r
                  .filter(function (t) {
                    return !!T(t, "addNodeView");
                  })
                  .map(function (n) {
                    var r = t.attributes.filter(function (t) {
                        return t.type === n.name;
                      }),
                      o = {
                        name: n.name,
                        options: n.options,
                        storage: n.storage,
                        editor: e,
                        type: C(n.name, t.schema),
                      },
                      i = T(n, "addNodeView", o);
                    if (!i) return [];
                    var a = function (t, o, a, s) {
                      var u = A(t, r);
                      return i()({
                        editor: e,
                        node: t,
                        getPos: a,
                        decorations: s,
                        HTMLAttributes: u,
                        extension: n,
                      });
                    };
                    return [n.name, a];
                  }),
              );
            },
          },
        ],
        [
          {
            key: "resolve",
            value: function (e) {
              var n = t.sort(t.flatten(e)),
                r = K(
                  n.map(function (t) {
                    return t.name;
                  }),
                );
              return (
                r.length &&
                  w.warn(
                    "[tiptap warn]: Duplicate extension names found: [".concat(
                      r
                        .map(function (t) {
                          return "'".concat(t, "'");
                        })
                        .join(", "),
                      "]. This can lead to issues.",
                    ),
                  ),
                n
              );
            },
          },
          {
            key: "flatten",
            value: function (t) {
              var e = this;
              return t
                .map(function (t) {
                  var n = {
                      name: t.name,
                      options: t.options,
                      storage: t.storage,
                    },
                    r = T(t, "addExtensions", n);
                  return r ? [t].concat((0, u.Z)(e.flatten(r()))) : t;
                })
                .flat(10);
            },
          },
          {
            key: "sort",
            value: function (t) {
              var e = 100;
              return t.sort(function (t, n) {
                var r = T(t, "priority") || e,
                  o = T(n, "priority") || e;
                return r > o ? -1 : r < o ? 1 : 0;
              });
            },
          },
        ],
      ),
      t
    );
  })();
  function Q(t) {
    return Object.prototype.toString.call(t).slice(8, -1);
  }
  function J(t) {
    return (
      "Object" === Q(t) &&
      t.constructor === Object &&
      Object.getPrototypeOf(t) === Object.prototype
    );
  }
  function tt(t, e) {
    var n = (0, f.Z)({}, t);
    return (
      J(t) &&
        J(e) &&
        Object.keys(e).forEach(function (r) {
          J(e[r]) && r in t
            ? (n[r] = tt(t[r], e[r]))
            : Object.assign(n, (0, s.Z)({}, r, e[r]));
        }),
      n
    );
  }
  var et = (function () {
    function t() {
      var e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      ((0, l.Z)(this, t),
        (this.type = "extension"),
        (this.name = "extension"),
        (this.parent = null),
        (this.child = null),
        (this.config = { name: this.name, defaultOptions: {} }),
        (this.config = (0, f.Z)((0, f.Z)({}, this.config), e)),
        (this.name = this.config.name),
        e.defaultOptions &&
          w.warn(
            '[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "'.concat(
              this.name,
              '".',
            ),
          ),
        (this.options = this.config.defaultOptions),
        this.config.addOptions &&
          (this.options = N(T(this, "addOptions", { name: this.name }))),
        (this.storage =
          N(
            T(this, "addStorage", { name: this.name, options: this.options }),
          ) || {}));
    }
    return (
      (0, d.Z)(
        t,
        [
          {
            key: "configure",
            value: function () {
              var t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                e = this.extend();
              return (
                (e.options = tt(this.options, t)),
                (e.storage = N(
                  T(e, "addStorage", { name: e.name, options: e.options }),
                )),
                e
              );
            },
          },
          {
            key: "extend",
            value: function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                n = new t(e);
              return (
                (n.parent = this),
                (this.child = n),
                (n.name = e.name ? e.name : n.parent.name),
                e.defaultOptions &&
                  w.warn(
                    '[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "'.concat(
                      n.name,
                      '".',
                    ),
                  ),
                (n.options = N(T(n, "addOptions", { name: n.name }))),
                (n.storage = N(
                  T(n, "addStorage", { name: n.name, options: n.options }),
                )),
                n
              );
            },
          },
        ],
        [
          {
            key: "create",
            value: function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              return new t(e);
            },
          },
        ],
      ),
      t
    );
  })();
  function nt(t, e, n) {
    var r = e.from,
      o = e.to,
      i = n || {},
      a = i.blockSeparator,
      s = void 0 === a ? "\n\n" : a,
      u = i.textSerializers,
      c = void 0 === u ? {} : u,
      l = "",
      d = !0;
    return (
      t.nodesBetween(r, o, function (t, n, i, a) {
        var u,
          f = null === c || void 0 === c ? void 0 : c[t.type.name];
        f
          ? (t.isBlock && !d && ((l += s), (d = !0)),
            i && (l += f({ node: t, pos: n, parent: i, index: a, range: e })))
          : t.isText
            ? ((l +=
                null === (u = null === t || void 0 === t ? void 0 : t.text) ||
                void 0 === u
                  ? void 0
                  : u.slice(Math.max(r, n) - n, o - n)),
              (d = !1))
            : t.isBlock && !d && ((l += s), (d = !0));
      }),
      l
    );
  }
  function rt(t) {
    return Object.fromEntries(
      Object.entries(t.nodes)
        .filter(function (t) {
          var e = (0, c.Z)(t, 2),
            n = e[1];
          return n.spec.toText;
        })
        .map(function (t) {
          var e = (0, c.Z)(t, 2),
            n = e[0],
            r = e[1];
          return [n, r.spec.toText];
        }),
    );
  }
  var ot = et.create({
      name: "clipboardTextSerializer",
      addProseMirrorPlugins: function () {
        var t = this;
        return [
          new p.Sy({
            key: new p.H$("clipboardTextSerializer"),
            props: {
              clipboardTextSerializer: function () {
                var e = t.editor,
                  n = e.state,
                  r = e.schema,
                  o = n.doc,
                  i = n.selection,
                  a = i.ranges,
                  s = Math.min.apply(
                    Math,
                    (0, u.Z)(
                      a.map(function (t) {
                        return t.$from.pos;
                      }),
                    ),
                  ),
                  c = Math.max.apply(
                    Math,
                    (0, u.Z)(
                      a.map(function (t) {
                        return t.$to.pos;
                      }),
                    ),
                  ),
                  l = rt(r),
                  d = { from: s, to: c };
                return nt(o, d, { textSerializers: l });
              },
            },
          }),
        ];
      },
    }),
    it = function () {
      return function (t) {
        var e = t.editor,
          n = t.view;
        return (
          requestAnimationFrame(function () {
            var t;
            e.isDestroyed ||
              (n.dom.blur(),
              null ===
                (t =
                  null === window || void 0 === window
                    ? void 0
                    : window.getSelection()) ||
                void 0 === t ||
                t.removeAllRanges());
          }),
          !0
        );
      };
    },
    at = function () {
      var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return function (e) {
        var n = e.commands;
        return n.setContent("", t);
      };
    },
    st = function () {
      return function (t) {
        var e = t.state,
          n = t.tr,
          r = t.dispatch,
          o = n.selection,
          i = o.ranges;
        return (
          !r ||
          (i.forEach(function (t) {
            var r = t.$from,
              o = t.$to;
            e.doc.nodesBetween(r.pos, o.pos, function (t, e) {
              if (!t.type.isText) {
                var r = n.doc,
                  o = n.mapping,
                  i = r.resolve(o.map(e)),
                  a = r.resolve(o.map(e + t.nodeSize)),
                  s = i.blockRange(a);
                if (s) {
                  var u = (0, g.k9)(s);
                  if (t.type.isTextblock) {
                    var c = i.parent.contentMatchAt(i.index()),
                      l = c.defaultType;
                    n.setNodeMarkup(s.start, l);
                  }
                  (u || 0 === u) && n.lift(s, u);
                }
              }
            });
          }),
          !0)
        );
      };
    },
    ut = function (t) {
      return function (e) {
        return t(e);
      };
    },
    ct = function () {
      return function (t) {
        var e = t.state,
          n = t.dispatch;
        return (0, y.mD)(e, n);
      };
    },
    lt = function (t, e) {
      return function (n) {
        var r = n.editor,
          o = n.tr,
          i = r.state,
          a = i.doc.slice(t.from, t.to);
        o.deleteRange(t.from, t.to);
        var s = o.mapping.map(e);
        return (
          o.insert(s, a.content),
          o.setSelection(new p.Bs(o.doc.resolve(s - 1))),
          !0
        );
      };
    },
    dt = function () {
      return function (t) {
        var e = t.tr,
          n = t.dispatch,
          r = e.selection,
          o = r.$anchor.node();
        if (o.content.size > 0) return !1;
        for (var i = e.selection.$anchor, a = i.depth; a > 0; a -= 1) {
          var s = i.node(a);
          if (s.type === o.type) {
            if (n) {
              var u = i.before(a),
                c = i.after(a);
              e.delete(u, c).scrollIntoView();
            }
            return !0;
          }
        }
        return !1;
      };
    },
    ft = function (t) {
      return function (e) {
        for (
          var n = e.tr,
            r = e.state,
            o = e.dispatch,
            i = C(t, r.schema),
            a = n.selection.$anchor,
            s = a.depth;
          s > 0;
          s -= 1
        ) {
          var u = a.node(s);
          if (u.type === i) {
            if (o) {
              var c = a.before(s),
                l = a.after(s);
              n.delete(c, l).scrollIntoView();
            }
            return !0;
          }
        }
        return !1;
      };
    },
    pt = function (t) {
      return function (e) {
        var n = e.tr,
          r = e.dispatch,
          o = t.from,
          i = t.to;
        return (r && n.delete(o, i), !0);
      };
    },
    ht = function () {
      return function (t) {
        var e = t.state,
          n = t.dispatch;
        return (0, y.NE)(e, n);
      };
    },
    mt = function () {
      return function (t) {
        var e = t.commands;
        return e.keyboardShortcut("Enter");
      };
    },
    vt = function () {
      return function (t) {
        var e = t.state,
          n = t.dispatch;
        return (0, y.uo)(e, n);
      };
    };
  function gt(t, e) {
    var n =
        arguments.length > 2 && void 0 !== arguments[2]
          ? arguments[2]
          : { strict: !0 },
      r = Object.keys(e);
    return (
      !r.length ||
      r.every(function (r) {
        return n.strict
          ? e[r] === t[r]
          : j(e[r])
            ? e[r].test(t[r])
            : e[r] === t[r];
      })
    );
  }
  function yt(t, e) {
    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    return t.find(function (t) {
      return t.type === e && gt(t.attrs, n);
    });
  }
  function bt(t, e) {
    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    return !!yt(t, e, n);
  }
  function wt(t, e) {
    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    if (t && e) {
      var r = t.parent.childAfter(t.parentOffset);
      if (
        (t.parentOffset === r.offset &&
          0 !== r.offset &&
          (r = t.parent.childBefore(t.parentOffset)),
        r.node)
      ) {
        var o = yt((0, u.Z)(r.node.marks), e, n);
        if (o) {
          var i = r.index,
            a = t.start() + r.offset,
            s = i + 1,
            c = a + r.node.nodeSize;
          yt((0, u.Z)(r.node.marks), e, n);
          while (i > 0 && o.isInSet(t.parent.child(i - 1).marks))
            ((i -= 1), (a -= t.parent.child(i).nodeSize));
          while (
            s < t.parent.childCount &&
            bt((0, u.Z)(t.parent.child(s).marks), e, n)
          )
            ((c += t.parent.child(s).nodeSize), (s += 1));
          return { from: a, to: c };
        }
      }
    }
  }
  function Mt(t, e) {
    if ("string" === typeof t) {
      if (!e.marks[t])
        throw Error(
          "There is no mark type named '".concat(
            t,
            "'. Maybe you forgot to add the extension?",
          ),
        );
      return e.marks[t];
    }
    return t;
  }
  var Et = function (t) {
      var e =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return function (n) {
        var r = n.tr,
          o = n.state,
          i = n.dispatch,
          a = Mt(t, o.schema),
          s = r.doc,
          u = r.selection,
          c = u.$from,
          l = u.from,
          d = u.to;
        if (i) {
          var f = wt(c, a, e);
          if (f && f.from <= l && f.to >= d) {
            var h = p.Bs.create(s, f.from, f.to);
            r.setSelection(h);
          }
        }
        return !0;
      };
    },
    _t = function (t) {
      return function (e) {
        for (
          var n = "function" === typeof t ? t(e) : t, r = 0;
          r < n.length;
          r += 1
        )
          if (n[r](e)) return !0;
        return !1;
      };
    };
  function Tt(t) {
    return t instanceof p.Bs;
  }
  function xt() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
      e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
      n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
    return Math.min(Math.max(t, e), n);
  }
  function St(t) {
    var e =
      arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
    if (!e) return null;
    var n = p.Y1.atStart(t),
      r = p.Y1.atEnd(t);
    if ("start" === e || !0 === e) return n;
    if ("end" === e) return r;
    var o = n.from,
      i = r.to;
    return "all" === e
      ? p.Bs.create(t, xt(0, o, i), xt(t.content.size, o, i))
      : p.Bs.create(t, xt(e, o, i), xt(e, o, i));
  }
  function Ct() {
    return (
      [
        "iPad Simulator",
        "iPhone Simulator",
        "iPod Simulator",
        "iPad",
        "iPhone",
        "iPod",
      ].includes(navigator.platform) ||
      (navigator.userAgent.includes("Mac") && "ontouchend" in document)
    );
  }
  var Ot = function () {
      var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return function (n) {
        var r = n.editor,
          o = n.view,
          i = n.tr,
          a = n.dispatch;
        e = (0, f.Z)({ scrollIntoView: !0 }, e);
        var s = function () {
          (Ct() && o.dom.focus(),
            requestAnimationFrame(function () {
              r.isDestroyed ||
                (o.focus(),
                (null === e || void 0 === e ? void 0 : e.scrollIntoView) &&
                  r.commands.scrollIntoView());
            }));
        };
        if ((o.hasFocus() && null === t) || !1 === t) return !0;
        if (a && null === t && !Tt(r.state.selection)) return (s(), !0);
        var u = St(i.doc, t) || r.state.selection,
          c = r.state.selection.eq(u);
        return (
          a &&
            (c || i.setSelection(u),
            c && i.storedMarks && i.setStoredMarks(i.storedMarks),
            s()),
          !0
        );
      };
    },
    At = function (t, e) {
      return function (n) {
        return t.every(function (t, r) {
          return e(t, (0, f.Z)((0, f.Z)({}, n), {}, { index: r }));
        });
      };
    },
    kt = function (t, e) {
      return function (n) {
        var r = n.tr,
          o = n.commands;
        return o.insertContentAt(
          { from: r.selection.from, to: r.selection.to },
          t,
          e,
        );
      };
    };
  function Nt(t) {
    var e = "<body>".concat(t, "</body>");
    return new window.DOMParser().parseFromString(e, "text/html").body;
  }
  function Lt(t, e, n) {
    if (
      ((n = (0, f.Z)({ slice: !0, parseOptions: {} }, n)),
      "object" === (0, a.Z)(t) && null !== t)
    )
      try {
        return Array.isArray(t) && t.length > 0
          ? v.HY.fromArray(
              t.map(function (t) {
                return e.nodeFromJSON(t);
              }),
            )
          : e.nodeFromJSON(t);
      } catch (o) {
        return (
          w.warn(
            "[tiptap warn]: Invalid content.",
            "Passed value:",
            t,
            "Error:",
            o,
          ),
          Lt("", e, n)
        );
      }
    if ("string" === typeof t) {
      var r = v.aw.fromSchema(e);
      return n.slice
        ? r.parseSlice(Nt(t), n.parseOptions).content
        : r.parse(Nt(t), n.parseOptions);
    }
    return Lt("", e, n);
  }
  function Rt(t, e, n) {
    var r = t.steps.length - 1;
    if (!(r < e)) {
      var o = t.steps[r];
      if (o instanceof g.Pu || o instanceof g.FC) {
        var i = t.mapping.maps[r],
          a = 0;
        (i.forEach(function (t, e, n, r) {
          0 === a && (a = r);
        }),
          t.setSelection(p.Y1.near(t.doc.resolve(a), n)));
      }
    }
  }
  var Pt = function (t) {
      return t.toString().startsWith("<");
    },
    It = function (t, e, n) {
      return function (r) {
        var o = r.tr,
          i = r.dispatch,
          s = r.editor;
        if (i) {
          n = (0, f.Z)({ parseOptions: {}, updateSelection: !0 }, n);
          var u = Lt(e, s.schema, {
            parseOptions: (0, f.Z)(
              { preserveWhitespace: "full" },
              n.parseOptions,
            ),
          });
          if ("<>" === u.toString()) return !0;
          var c =
              "number" === typeof t
                ? { from: t, to: t }
                : { from: t.from, to: t.to },
            l = c.from,
            d = c.to,
            p = !0,
            h = !0,
            m = Pt(u) ? u : [u];
          if (
            (m.forEach(function (t) {
              (t.check(),
                (p = !!p && t.isText && 0 === t.marks.length),
                (h = !!h && t.isBlock));
            }),
            l === d && h)
          ) {
            var v = o.doc.resolve(l),
              g = v.parent,
              y = g.isTextblock && !g.type.spec.code && !g.childCount;
            y && ((l -= 1), (d += 1));
          }
          (p
            ? Array.isArray(e)
              ? o.insertText(
                  e
                    .map(function (t) {
                      return t.text || "";
                    })
                    .join(""),
                  l,
                  d,
                )
              : "object" === (0, a.Z)(e) && e && e.text
                ? o.insertText(e.text, l, d)
                : o.insertText(e, l, d)
            : o.replaceWith(l, d, u),
            n.updateSelection && Rt(o, o.steps.length - 1, -1));
        }
        return !0;
      };
    },
    Ht = function () {
      return function (t) {
        var e = t.state,
          n = t.dispatch;
        return (0, y.MI)(e, n);
      };
    },
    Dt = function () {
      return function (t) {
        var e = t.state,
          n = t.dispatch;
        return (0, y.Ig)(e, n);
      };
    },
    Bt = function () {
      return function (t) {
        var e = t.state,
          n = t.dispatch;
        return (0, y.al)(e, n);
      };
    },
    Zt = function () {
      return function (t) {
        var e = t.state,
          n = t.dispatch;
        return (0, y.Y_)(e, n);
      };
    },
    jt = function () {
      return function (t) {
        var e = t.tr,
          n = t.state,
          r = t.dispatch;
        try {
          var o = (0, g.GJ)(n.doc, n.selection.$from.pos, -1);
          return null !== o && void 0 !== o && (e.join(o, 2), r && r(e), !0);
        } catch (i) {
          return !1;
        }
      };
    },
    Ut = function () {
      return function (t) {
        var e = t.state,
          n = t.dispatch,
          r = t.tr;
        try {
          var o = (0, g.GJ)(e.doc, e.selection.$from.pos, 1);
          return null !== o && void 0 !== o && (r.join(o, 2), n && n(r), !0);
        } catch (i) {
          return !1;
        }
      };
    };
  function Ft() {
    return "undefined" !== typeof navigator && /Mac/.test(navigator.platform);
  }
  function Vt(t) {
    var e,
      n,
      r,
      o,
      i = t.split(/-(?!$)/),
      a = i[i.length - 1];
    "Space" === a && (a = " ");
    for (var s = 0; s < i.length - 1; s += 1) {
      var u = i[s];
      if (/^(cmd|meta|m)$/i.test(u)) o = !0;
      else if (/^a(lt)?$/i.test(u)) e = !0;
      else if (/^(c|ctrl|control)$/i.test(u)) n = !0;
      else if (/^s(hift)?$/i.test(u)) r = !0;
      else {
        if (!/^mod$/i.test(u))
          throw new Error("Unrecognized modifier name: ".concat(u));
        Ct() || Ft() ? (o = !0) : (n = !0);
      }
    }
    return (
      e && (a = "Alt-".concat(a)),
      n && (a = "Ctrl-".concat(a)),
      o && (a = "Meta-".concat(a)),
      r && (a = "Shift-".concat(a)),
      a
    );
  }
  var $t = function (t) {
    return function (e) {
      var n = e.editor,
        r = e.view,
        o = e.tr,
        i = e.dispatch,
        a = Vt(t).split(/-(?!$)/),
        s = a.find(function (t) {
          return !["Alt", "Ctrl", "Meta", "Shift"].includes(t);
        }),
        u = new KeyboardEvent("keydown", {
          key: "Space" === s ? " " : s,
          altKey: a.includes("Alt"),
          ctrlKey: a.includes("Ctrl"),
          metaKey: a.includes("Meta"),
          shiftKey: a.includes("Shift"),
          bubbles: !0,
          cancelable: !0,
        }),
        c = n.captureTransaction(function () {
          r.someProp("handleKeyDown", function (t) {
            return t(r, u);
          });
        });
      return (
        null === c ||
          void 0 === c ||
          c.steps.forEach(function (t) {
            var e = t.map(o.mapping);
            e && i && o.maybeStep(e);
          }),
        !0
      );
    };
  };
  function Yt(t, e) {
    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
      r = t.selection,
      o = r.from,
      i = r.to,
      a = r.empty,
      s = e ? C(e, t.schema) : null,
      u = [];
    t.doc.nodesBetween(o, i, function (t, e) {
      if (!t.isText) {
        var n = Math.max(o, e),
          r = Math.min(i, e + t.nodeSize);
        u.push({ node: t, from: n, to: r });
      }
    });
    var c = i - o,
      l = u
        .filter(function (t) {
          return !s || s.name === t.node.type.name;
        })
        .filter(function (t) {
          return gt(t.node.attrs, n, { strict: !1 });
        });
    if (a) return !!l.length;
    var d = l.reduce(function (t, e) {
      return t + e.to - e.from;
    }, 0);
    return d >= c;
  }
  var zt = function (t) {
      var e =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return function (n) {
        var r = n.state,
          o = n.dispatch,
          i = C(t, r.schema),
          a = Yt(r, i, e);
        return !!a && (0, y.xb)(r, o);
      };
    },
    Wt = function () {
      return function (t) {
        var e = t.state,
          n = t.dispatch;
        return (0, y.X0)(e, n);
      };
    },
    qt = function (t) {
      return function (e) {
        var n = e.state,
          r = e.dispatch,
          o = C(t, n.schema);
        return (0, b.IB)(o)(n, r);
      };
    },
    Xt = function () {
      return function (t) {
        var e = t.state,
          n = t.dispatch;
        return (0, y.QK)(e, n);
      };
    };
  function Kt(t, e) {
    return e.nodes[t] ? "node" : e.marks[t] ? "mark" : null;
  }
  function Gt(t, e) {
    var n = "string" === typeof e ? [e] : e;
    return Object.keys(t).reduce(function (e, r) {
      return (n.includes(r) || (e[r] = t[r]), e);
    }, {});
  }
  var Qt = function (t, e) {
      return function (n) {
        var r = n.tr,
          o = n.state,
          i = n.dispatch,
          a = null,
          s = null,
          u = Kt("string" === typeof t ? t : t.name, o.schema);
        return (
          !!u &&
          ("node" === u && (a = C(t, o.schema)),
          "mark" === u && (s = Mt(t, o.schema)),
          i &&
            r.selection.ranges.forEach(function (t) {
              o.doc.nodesBetween(t.$from.pos, t.$to.pos, function (t, n) {
                (a &&
                  a === t.type &&
                  r.setNodeMarkup(n, void 0, Gt(t.attrs, e)),
                  s &&
                    t.marks.length &&
                    t.marks.forEach(function (o) {
                      s === o.type &&
                        r.addMark(n, n + t.nodeSize, s.create(Gt(o.attrs, e)));
                    }));
              });
            }),
          !0)
        );
      };
    },
    Jt = function () {
      return function (t) {
        var e = t.tr,
          n = t.dispatch;
        return (n && e.scrollIntoView(), !0);
      };
    },
    te = function () {
      return function (t) {
        var e = t.tr,
          n = t.commands;
        return n.setTextSelection({ from: 0, to: e.doc.content.size });
      };
    },
    ee = function () {
      return function (t) {
        var e = t.state,
          n = t.dispatch;
        return (0, y._M)(e, n);
      };
    },
    ne = function () {
      return function (t) {
        var e = t.state,
          n = t.dispatch;
        return (0, y.o)(e, n);
      };
    },
    re = function () {
      return function (t) {
        var e = t.state,
          n = t.dispatch;
        return (0, y.N0)(e, n);
      };
    },
    oe = function () {
      return function (t) {
        var e = t.state,
          n = t.dispatch;
        return (0, y.nw)(e, n);
      };
    },
    ie = function () {
      return function (t) {
        var e = t.state,
          n = t.dispatch;
        return (0, y.U9)(e, n);
      };
    };
  function ae(t, e) {
    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    return Lt(t, e, { slice: !1, parseOptions: n });
  }
  var se = function (t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    return function (r) {
      var o = r.tr,
        i = r.editor,
        a = r.dispatch,
        s = o.doc,
        u = ae(t, i.schema, n);
      return (
        a && o.replaceWith(0, s.content.size, u).setMeta("preventUpdate", !e),
        !0
      );
    };
  };
  function ue(t, e) {
    var n = Mt(e, t.schema),
      r = t.selection,
      o = r.from,
      i = r.to,
      a = r.empty,
      s = [];
    a
      ? (t.storedMarks && s.push.apply(s, (0, u.Z)(t.storedMarks)),
        s.push.apply(s, (0, u.Z)(t.selection.$head.marks())))
      : t.doc.nodesBetween(o, i, function (t) {
          s.push.apply(s, (0, u.Z)(t.marks));
        });
    var c = s.find(function (t) {
      return t.type.name === n.name;
    });
    return c ? (0, f.Z)({}, c.attrs) : {};
  }
  function ce(t, e) {
    for (var n = t.depth; n > 0; n -= 1) {
      var r = t.node(n);
      if (e(r))
        return {
          pos: n > 0 ? t.before(n) : 0,
          start: t.start(n),
          depth: n,
          node: r,
        };
    }
  }
  function le(t) {
    return function (e) {
      return ce(e.$from, t);
    };
  }
  function de(t, e) {
    var n = new g.wx(t);
    return (
      e.forEach(function (t) {
        t.steps.forEach(function (t) {
          n.step(t);
        });
      }),
      n
    );
  }
  function fe(t) {
    for (var e = 0; e < t.edgeCount; e += 1) {
      var n = t.edge(e),
        r = n.type;
      if (r.isTextblock && !r.hasRequiredAttrs()) return r;
    }
    return null;
  }
  function pe(t, e, n) {
    var r = [];
    return (
      t.nodesBetween(e.from, e.to, function (t, e) {
        n(t) && r.push({ node: t, pos: e });
      }),
      r
    );
  }
  function he(t, e) {
    var n = v.PW.fromSchema(e).serializeFragment(t),
      r = document.implementation.createHTMLDocument(),
      o = r.createElement("div");
    return (o.appendChild(n), o.innerHTML);
  }
  function me(t, e) {
    var n = { from: 0, to: t.content.size };
    return nt(t, n, e);
  }
  function ve(t, e) {
    var n = C(e, t.schema),
      r = t.selection,
      o = r.from,
      i = r.to,
      a = [];
    t.doc.nodesBetween(o, i, function (t) {
      a.push(t);
    });
    var s = a.reverse().find(function (t) {
      return t.type.name === n.name;
    });
    return s ? (0, f.Z)({}, s.attrs) : {};
  }
  function ge(t, e) {
    var n = Kt("string" === typeof e ? e : e.name, t.schema);
    return "node" === n ? ve(t, e) : "mark" === n ? ue(t, e) : {};
  }
  function ye(t) {
    var e =
        arguments.length > 1 && void 0 !== arguments[1]
          ? arguments[1]
          : JSON.stringify,
      n = {};
    return t.filter(function (t) {
      var r = e(t);
      return !Object.prototype.hasOwnProperty.call(n, r) && (n[r] = !0);
    });
  }
  function be(t) {
    var e = ye(t);
    return 1 === e.length
      ? e
      : e.filter(function (t, n) {
          var r = e.filter(function (t, e) {
            return e !== n;
          });
          return !r.some(function (e) {
            return (
              t.oldRange.from >= e.oldRange.from &&
              t.oldRange.to <= e.oldRange.to &&
              t.newRange.from >= e.newRange.from &&
              t.newRange.to <= e.newRange.to
            );
          });
        });
  }
  function we(t) {
    var e = t.mapping,
      n = t.steps,
      r = [];
    return (
      e.maps.forEach(function (t, o) {
        var i = [];
        if (t.ranges.length)
          t.forEach(function (t, e) {
            i.push({ from: t, to: e });
          });
        else {
          var a = n[o],
            s = a.from,
            u = a.to;
          if (void 0 === s || void 0 === u) return;
          i.push({ from: s, to: u });
        }
        i.forEach(function (t) {
          var n = t.from,
            i = t.to,
            a = e.slice(o).map(n, -1),
            s = e.slice(o).map(i),
            u = e.invert().map(a, -1),
            c = e.invert().map(s);
          r.push({
            oldRange: { from: u, to: c },
            newRange: { from: a, to: s },
          });
        });
      }),
      be(r)
    );
  }
  function Me(t, e, n) {
    var r = [];
    return (
      t === e
        ? n
            .resolve(t)
            .marks()
            .forEach(function (e) {
              var o = n.resolve(t - 1),
                i = wt(o, e.type);
              i && r.push((0, f.Z)({ mark: e }, i));
            })
        : n.nodesBetween(t, e, function (t, e) {
            r.push.apply(
              r,
              (0, u.Z)(
                t.marks.map(function (n) {
                  return { from: e, to: e + t.nodeSize, mark: n };
                }),
              ),
            );
          }),
      r
    );
  }
  function Ee(t, e, n) {
    return Object.fromEntries(
      Object.entries(n).filter(function (n) {
        var r = (0, c.Z)(n, 1),
          o = r[0],
          i = t.find(function (t) {
            return t.type === e && t.name === o;
          });
        return !!i && i.attribute.keepOnSplit;
      }),
    );
  }
  function _e(t, e) {
    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
      r = t.selection,
      o = r.empty,
      i = r.ranges,
      a = e ? Mt(e, t.schema) : null;
    if (o)
      return !!(t.storedMarks || t.selection.$from.marks())
        .filter(function (t) {
          return !a || a.name === t.type.name;
        })
        .find(function (t) {
          return gt(t.attrs, n, { strict: !1 });
        });
    var s = 0,
      c = [];
    if (
      (i.forEach(function (e) {
        var n = e.$from,
          r = e.$to,
          o = n.pos,
          i = r.pos;
        t.doc.nodesBetween(o, i, function (t, e) {
          if (t.isText || t.marks.length) {
            var n = Math.max(o, e),
              r = Math.min(i, e + t.nodeSize),
              a = r - n;
            ((s += a),
              c.push.apply(
                c,
                (0, u.Z)(
                  t.marks.map(function (t) {
                    return { mark: t, from: n, to: r };
                  }),
                ),
              ));
          }
        });
      }),
      0 === s)
    )
      return !1;
    var l = c
        .filter(function (t) {
          return !a || a.name === t.mark.type.name;
        })
        .filter(function (t) {
          return gt(t.mark.attrs, n, { strict: !1 });
        })
        .reduce(function (t, e) {
          return t + e.to - e.from;
        }, 0),
      d = c
        .filter(function (t) {
          return !a || (t.mark.type !== a && t.mark.type.excludes(a));
        })
        .reduce(function (t, e) {
          return t + e.to - e.from;
        }, 0),
      f = l > 0 ? l + d : l;
    return f >= s;
  }
  function Te(t, e) {
    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    if (!e) return Yt(t, null, n) || _e(t, null, n);
    var r = Kt(e, t.schema);
    return "node" === r ? Yt(t, e, n) : "mark" === r && _e(t, e, n);
  }
  function xe(t, e) {
    var n = x(e),
      r = n.nodeExtensions,
      o = r.find(function (e) {
        return e.name === t;
      });
    if (!o) return !1;
    var i = { name: o.name, options: o.options, storage: o.storage },
      a = N(T(o, "group", i));
    return "string" === typeof a && a.split(" ").includes("list");
  }
  function Se(t) {
    var e,
      n =
        null === (e = t.type.createAndFill()) || void 0 === e
          ? void 0
          : e.toJSON(),
      r = t.toJSON();
    return JSON.stringify(n) === JSON.stringify(r);
  }
  function Ce(t) {
    return t instanceof p.qv;
  }
  function Oe(t, e, n) {
    var r = 0,
      o = t.state.doc.content.size,
      i = xt(e, r, o),
      a = xt(n, r, o),
      s = t.coordsAtPos(i),
      u = t.coordsAtPos(a, -1),
      c = Math.min(s.top, u.top),
      l = Math.max(s.bottom, u.bottom),
      d = Math.min(s.left, u.left),
      p = Math.max(s.right, u.right),
      h = p - d,
      m = l - c,
      v = d,
      g = c,
      y = {
        top: c,
        bottom: l,
        left: d,
        right: p,
        width: h,
        height: m,
        x: v,
        y: g,
      };
    return (0, f.Z)(
      (0, f.Z)({}, y),
      {},
      {
        toJSON: function () {
          return y;
        },
      },
    );
  }
  function Ae(t, e, n) {
    var r,
      o = e.selection,
      i = null;
    if ((Tt(o) && (i = o.$cursor), i)) {
      var a = null !== (r = t.storedMarks) && void 0 !== r ? r : i.marks();
      return (
        !!n.isInSet(a) ||
        !a.some(function (t) {
          return t.type.excludes(n);
        })
      );
    }
    var s = o.ranges;
    return s.some(function (e) {
      var r = e.$from,
        o = e.$to,
        i =
          0 === r.depth && t.doc.inlineContent && t.doc.type.allowsMarkType(n);
      return (
        t.doc.nodesBetween(r.pos, o.pos, function (t, e, r) {
          if (i) return !1;
          if (t.isInline) {
            var o = !r || r.type.allowsMarkType(n),
              a =
                !!n.isInSet(t.marks) ||
                !t.marks.some(function (t) {
                  return t.type.excludes(n);
                });
            i = o && a;
          }
          return !i;
        }),
        i
      );
    });
  }
  var ke = function (t) {
      var e =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return function (n) {
        var r = n.tr,
          o = n.state,
          i = n.dispatch,
          a = r.selection,
          s = a.empty,
          u = a.ranges,
          c = Mt(t, o.schema);
        if (i)
          if (s) {
            var l = ue(o, c);
            r.addStoredMark(c.create((0, f.Z)((0, f.Z)({}, l), e)));
          } else
            u.forEach(function (t) {
              var n = t.$from.pos,
                i = t.$to.pos;
              o.doc.nodesBetween(n, i, function (t, o) {
                var a = Math.max(o, n),
                  s = Math.min(o + t.nodeSize, i),
                  u = t.marks.find(function (t) {
                    return t.type === c;
                  });
                u
                  ? t.marks.forEach(function (t) {
                      c === t.type &&
                        r.addMark(
                          a,
                          s,
                          c.create((0, f.Z)((0, f.Z)({}, t.attrs), e)),
                        );
                    })
                  : r.addMark(a, s, c.create(e));
              });
            });
        return Ae(o, r, c);
      };
    },
    Ne = function (t, e) {
      return function (n) {
        var r = n.tr;
        return (r.setMeta(t, e), !0);
      };
    },
    Le = function (t) {
      var e =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return function (n) {
        var r = n.state,
          o = n.dispatch,
          i = n.chain,
          a = C(t, r.schema);
        return a.isTextblock
          ? i()
              .command(function (t) {
                var n = t.commands,
                  o = (0, y.uJ)(a, e)(r);
                return !!o || n.clearNodes();
              })
              .command(function (t) {
                var n = t.state;
                return (0, y.uJ)(a, e)(n, o);
              })
              .run()
          : (w.warn(
              '[tiptap warn]: Currently "setNode()" only supports text block nodes.',
            ),
            !1);
      };
    },
    Re = function (t) {
      return function (e) {
        var n = e.tr,
          r = e.dispatch;
        if (r) {
          var o = n.doc,
            i = xt(t, 0, o.content.size),
            a = p.qv.create(o, i);
          n.setSelection(a);
        }
        return !0;
      };
    },
    Pe = function (t) {
      return function (e) {
        var n = e.tr,
          r = e.dispatch;
        if (r) {
          var o = n.doc,
            i = "number" === typeof t ? { from: t, to: t } : t,
            a = i.from,
            s = i.to,
            u = p.Bs.atStart(o).from,
            c = p.Bs.atEnd(o).to,
            l = xt(a, u, c),
            d = xt(s, u, c),
            f = p.Bs.create(o, l, d);
          n.setSelection(f);
        }
        return !0;
      };
    },
    Ie = function (t) {
      return function (e) {
        var n = e.state,
          r = e.dispatch,
          o = C(t, n.schema);
        return (0, b.bw)(o)(n, r);
      };
    };
  function He(t, e) {
    var n =
      t.storedMarks ||
      (t.selection.$to.parentOffset && t.selection.$from.marks());
    if (n) {
      var r = n.filter(function (t) {
        return null === e || void 0 === e ? void 0 : e.includes(t.type.name);
      });
      t.tr.ensureMarks(r);
    }
  }
  var De = function () {
      var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        e = t.keepMarks,
        n = void 0 === e || e;
      return function (t) {
        var e = t.tr,
          r = t.state,
          o = t.dispatch,
          i = t.editor,
          a = e.selection,
          s = e.doc,
          u = a.$from,
          c = a.$to,
          l = i.extensionManager.attributes,
          d = Ee(l, u.node().type.name, u.node().attrs);
        if (a instanceof p.qv && a.node.isBlock)
          return (
            !(!u.parentOffset || !(0, g.Ax)(s, u.pos)) &&
            (o &&
              (n && He(r, i.extensionManager.splittableMarks),
              e.split(u.pos).scrollIntoView()),
            !0)
          );
        if (!u.parent.isBlock) return !1;
        if (o) {
          var f = c.parentOffset === c.parent.content.size;
          a instanceof p.Bs && e.deleteSelection();
          var h =
              0 === u.depth
                ? void 0
                : fe(u.node(-1).contentMatchAt(u.indexAfter(-1))),
            m = f && h ? [{ type: h, attrs: d }] : void 0,
            v = (0, g.Ax)(e.doc, e.mapping.map(u.pos), 1, m);
          if (
            (m ||
              v ||
              !(0, g.Ax)(
                e.doc,
                e.mapping.map(u.pos),
                1,
                h ? [{ type: h }] : void 0,
              ) ||
              ((v = !0), (m = h ? [{ type: h, attrs: d }] : void 0)),
            v &&
              (e.split(e.mapping.map(u.pos), 1, m),
              h && !f && !u.parentOffset && u.parent.type !== h))
          ) {
            var y = e.mapping.map(u.before()),
              b = e.doc.resolve(y);
            u.node(-1).canReplaceWith(b.index(), b.index() + 1, h) &&
              e.setNodeMarkup(e.mapping.map(u.before()), h);
          }
          (n && He(r, i.extensionManager.splittableMarks), e.scrollIntoView());
        }
        return !0;
      };
    },
    Be = function (t) {
      return function (e) {
        var n,
          r = e.tr,
          o = e.state,
          i = e.dispatch,
          a = e.editor,
          s = C(t, o.schema),
          u = o.selection,
          c = u.$from,
          l = u.$to,
          d = o.selection.node;
        if ((d && d.isBlock) || c.depth < 2 || !c.sameParent(l)) return !1;
        var f = c.node(-1);
        if (f.type !== s) return !1;
        var h = a.extensionManager.attributes;
        if (
          0 === c.parent.content.size &&
          c.node(-1).childCount === c.indexAfter(-1)
        ) {
          if (
            2 === c.depth ||
            c.node(-3).type !== s ||
            c.index(-2) !== c.node(-2).childCount - 1
          )
            return !1;
          if (i) {
            for (
              var m = v.HY.empty,
                y = c.index(-1) ? 1 : c.index(-2) ? 2 : 3,
                b = c.depth - y;
              b >= c.depth - 3;
              b -= 1
            )
              m = v.HY.from(c.node(b).copy(m));
            var w =
                c.indexAfter(-1) < c.node(-2).childCount
                  ? 1
                  : c.indexAfter(-2) < c.node(-3).childCount
                    ? 2
                    : 3,
              M = Ee(h, c.node().type.name, c.node().attrs),
              E =
                (null === (n = s.contentMatch.defaultType) || void 0 === n
                  ? void 0
                  : n.createAndFill(M)) || void 0;
            m = m.append(v.HY.from(s.createAndFill(null, E) || void 0));
            var _ = c.before(c.depth - (y - 1));
            r.replace(_, c.after(-w), new v.p2(m, 4 - y, 0));
            var T = -1;
            (r.doc.nodesBetween(_, r.doc.content.size, function (t, e) {
              if (T > -1) return !1;
              t.isTextblock && 0 === t.content.size && (T = e + 1);
            }),
              T > -1 && r.setSelection(p.Bs.near(r.doc.resolve(T))),
              r.scrollIntoView());
          }
          return !0;
        }
        var x = l.pos === c.end() ? f.contentMatchAt(0).defaultType : null,
          S = Ee(h, f.type.name, f.attrs),
          O = Ee(h, c.node().type.name, c.node().attrs);
        r.delete(c.pos, l.pos);
        var A = x
          ? [
              { type: s, attrs: S },
              { type: x, attrs: O },
            ]
          : [{ type: s, attrs: S }];
        if (!(0, g.Ax)(r.doc, c.pos, 2)) return !1;
        if (i) {
          var k = o.selection,
            N = o.storedMarks,
            L = a.extensionManager.splittableMarks,
            R = N || (k.$to.parentOffset && k.$from.marks());
          if ((r.split(c.pos, 2, A).scrollIntoView(), !R || !i)) return !0;
          var P = R.filter(function (t) {
            return L.includes(t.type.name);
          });
          r.ensureMarks(P);
        }
        return !0;
      };
    },
    Ze = function (t, e) {
      var n = le(function (t) {
        return t.type === e;
      })(t.selection);
      if (!n) return !0;
      var r = t.doc.resolve(Math.max(0, n.pos - 1)).before(n.depth);
      if (void 0 === r) return !0;
      var o = t.doc.nodeAt(r),
        i =
          n.node.type === (null === o || void 0 === o ? void 0 : o.type) &&
          (0, g.Mn)(t.doc, n.pos);
      return !i || (t.join(n.pos), !0);
    },
    je = function (t, e) {
      var n = le(function (t) {
        return t.type === e;
      })(t.selection);
      if (!n) return !0;
      var r = t.doc.resolve(n.start).after(n.depth);
      if (void 0 === r) return !0;
      var o = t.doc.nodeAt(r),
        i =
          n.node.type === (null === o || void 0 === o ? void 0 : o.type) &&
          (0, g.Mn)(t.doc, r);
      return !i || (t.join(r), !0);
    },
    Ue = function (t, e, n) {
      var r =
        arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      return function (o) {
        var i = o.editor,
          a = o.tr,
          s = o.state,
          u = o.dispatch,
          c = o.chain,
          l = o.commands,
          d = o.can,
          f = i.extensionManager,
          p = f.extensions,
          h = f.splittableMarks,
          m = C(t, s.schema),
          v = C(e, s.schema),
          g = s.selection,
          y = s.storedMarks,
          b = g.$from,
          w = g.$to,
          M = b.blockRange(w),
          E = y || (g.$to.parentOffset && g.$from.marks());
        if (!M) return !1;
        var _ = le(function (t) {
          return xe(t.type.name, p);
        })(g);
        if (M.depth >= 1 && _ && M.depth - _.depth <= 1) {
          if (_.node.type === m) return l.liftListItem(v);
          if (xe(_.node.type.name, p) && m.validContent(_.node.content) && u)
            return c()
              .command(function () {
                return (a.setNodeMarkup(_.pos, m), !0);
              })
              .command(function () {
                return Ze(a, m);
              })
              .command(function () {
                return je(a, m);
              })
              .run();
        }
        return n && E && u
          ? c()
              .command(function () {
                var t = d().wrapInList(m, r),
                  e = E.filter(function (t) {
                    return h.includes(t.type.name);
                  });
                return (a.ensureMarks(e), !!t || l.clearNodes());
              })
              .wrapInList(m, r)
              .command(function () {
                return Ze(a, m);
              })
              .command(function () {
                return je(a, m);
              })
              .run()
          : c()
              .command(function () {
                var t = d().wrapInList(m, r);
                return !!t || l.clearNodes();
              })
              .wrapInList(m, r)
              .command(function () {
                return Ze(a, m);
              })
              .command(function () {
                return je(a, m);
              })
              .run();
      };
    },
    Fe = function (t) {
      var e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      return function (r) {
        var o = r.state,
          i = r.commands,
          a = n.extendEmptyMarkRange,
          s = void 0 !== a && a,
          u = Mt(t, o.schema),
          c = _e(o, u, e);
        return c
          ? i.unsetMark(u, { extendEmptyMarkRange: s })
          : i.setMark(u, e);
      };
    },
    Ve = function (t, e) {
      var n =
        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      return function (r) {
        var o = r.state,
          i = r.commands,
          a = C(t, o.schema),
          s = C(e, o.schema),
          u = Yt(o, a, n);
        return u ? i.setNode(s) : i.setNode(a, n);
      };
    },
    $e = function (t) {
      var e =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return function (n) {
        var r = n.state,
          o = n.commands,
          i = C(t, r.schema),
          a = Yt(r, i, e);
        return a ? o.lift(i) : o.wrapIn(i, e);
      };
    },
    Ye = function () {
      return function (t) {
        for (
          var e = t.state, n = t.dispatch, r = e.plugins, o = 0;
          o < r.length;
          o += 1
        ) {
          var i = r[o],
            a = void 0;
          if (i.spec.isInputRules && (a = i.getState(e))) {
            if (n) {
              for (
                var s = e.tr, u = a.transform, c = u.steps.length - 1;
                c >= 0;
                c -= 1
              )
                s.step(u.steps[c].invert(u.docs[c]));
              if (a.text) {
                var l = s.doc.resolve(a.from).marks();
                s.replaceWith(a.from, a.to, e.schema.text(a.text, l));
              } else s.delete(a.from, a.to);
            }
            return !0;
          }
        }
        return !1;
      };
    },
    ze = function () {
      return function (t) {
        var e = t.tr,
          n = t.dispatch,
          r = e.selection,
          o = r.empty,
          i = r.ranges;
        return (
          o ||
            (n &&
              i.forEach(function (t) {
                e.removeMark(t.$from.pos, t.$to.pos);
              })),
          !0
        );
      };
    },
    We = function (t) {
      var e =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return function (n) {
        var r,
          o = n.tr,
          i = n.state,
          a = n.dispatch,
          s = e.extendEmptyMarkRange,
          u = void 0 !== s && s,
          c = o.selection,
          l = Mt(t, i.schema),
          d = c.$from,
          f = c.empty,
          p = c.ranges;
        if (!a) return !0;
        if (f && u) {
          var h = c.from,
            m = c.to,
            v =
              null ===
                (r = d.marks().find(function (t) {
                  return t.type === l;
                })) || void 0 === r
                ? void 0
                : r.attrs,
            g = wt(d, l, v);
          (g && ((h = g.from), (m = g.to)), o.removeMark(h, m, l));
        } else
          p.forEach(function (t) {
            o.removeMark(t.$from.pos, t.$to.pos, l);
          });
        return (o.removeStoredMark(l), !0);
      };
    },
    qe = function (t) {
      var e =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return function (n) {
        var r = n.tr,
          o = n.state,
          i = n.dispatch,
          a = null,
          s = null,
          u = Kt("string" === typeof t ? t : t.name, o.schema);
        return (
          !!u &&
          ("node" === u && (a = C(t, o.schema)),
          "mark" === u && (s = Mt(t, o.schema)),
          i &&
            r.selection.ranges.forEach(function (t) {
              var n = t.$from.pos,
                i = t.$to.pos;
              o.doc.nodesBetween(n, i, function (t, o) {
                (a &&
                  a === t.type &&
                  r.setNodeMarkup(
                    o,
                    void 0,
                    (0, f.Z)((0, f.Z)({}, t.attrs), e),
                  ),
                  s &&
                    t.marks.length &&
                    t.marks.forEach(function (a) {
                      if (s === a.type) {
                        var u = Math.max(o, n),
                          c = Math.min(o + t.nodeSize, i);
                        r.addMark(
                          u,
                          c,
                          s.create((0, f.Z)((0, f.Z)({}, a.attrs), e)),
                        );
                      }
                    }));
              });
            }),
          !0)
        );
      };
    },
    Xe = function (t) {
      var e =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return function (n) {
        var r = n.state,
          o = n.dispatch,
          i = C(t, r.schema);
        return (0, y.ym)(i, e)(r, o);
      };
    },
    Ke = function (t) {
      var e =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return function (n) {
        var r = n.state,
          o = n.dispatch,
          i = C(t, r.schema);
        return (0, b.KI)(i, e)(r, o);
      };
    },
    Ge = Object.freeze({
      __proto__: null,
      blur: it,
      clearContent: at,
      clearNodes: st,
      command: ut,
      createParagraphNear: ct,
      cut: lt,
      deleteCurrentNode: dt,
      deleteNode: ft,
      deleteRange: pt,
      deleteSelection: ht,
      enter: mt,
      exitCode: vt,
      extendMarkRange: Et,
      first: _t,
      focus: Ot,
      forEach: At,
      insertContent: kt,
      insertContentAt: It,
      joinUp: Ht,
      joinDown: Dt,
      joinBackward: Bt,
      joinForward: Zt,
      joinItemBackward: jt,
      joinItemForward: Ut,
      keyboardShortcut: $t,
      lift: zt,
      liftEmptyBlock: Wt,
      liftListItem: qt,
      newlineInCode: Xt,
      resetAttributes: Qt,
      scrollIntoView: Jt,
      selectAll: te,
      selectNodeBackward: ee,
      selectNodeForward: ne,
      selectParentNode: re,
      selectTextblockEnd: oe,
      selectTextblockStart: ie,
      setContent: se,
      setMark: ke,
      setMeta: Ne,
      setNode: Le,
      setNodeSelection: Re,
      setTextSelection: Pe,
      sinkListItem: Ie,
      splitBlock: De,
      splitListItem: Be,
      toggleList: Ue,
      toggleMark: Fe,
      toggleNode: Ve,
      toggleWrap: $e,
      undoInputRule: Ye,
      unsetAllMarks: ze,
      unsetMark: We,
      updateAttributes: qe,
      wrapIn: Xe,
      wrapInList: Ke,
    }),
    Qe = et.create({
      name: "commands",
      addCommands: function () {
        return (0, f.Z)({}, Ge);
      },
    }),
    Je = et.create({
      name: "editable",
      addProseMirrorPlugins: function () {
        var t = this;
        return [
          new p.Sy({
            key: new p.H$("editable"),
            props: {
              editable: function () {
                return t.editor.options.editable;
              },
            },
          }),
        ];
      },
    }),
    tn = et.create({
      name: "focusEvents",
      addProseMirrorPlugins: function () {
        var t = this.editor;
        return [
          new p.Sy({
            key: new p.H$("focusEvents"),
            props: {
              handleDOMEvents: {
                focus: function (e, n) {
                  t.isFocused = !0;
                  var r = t.state.tr
                    .setMeta("focus", { event: n })
                    .setMeta("addToHistory", !1);
                  return (e.dispatch(r), !1);
                },
                blur: function (e, n) {
                  t.isFocused = !1;
                  var r = t.state.tr
                    .setMeta("blur", { event: n })
                    .setMeta("addToHistory", !1);
                  return (e.dispatch(r), !1);
                },
              },
            },
          }),
        ];
      },
    }),
    en = et.create({
      name: "keymap",
      addKeyboardShortcuts: function () {
        var t = this,
          e = function () {
            return t.editor.commands.first(function (t) {
              var e = t.commands;
              return [
                function () {
                  return e.undoInputRule();
                },
                function () {
                  return e.command(function (t) {
                    var n = t.tr,
                      r = n.selection,
                      o = n.doc,
                      i = r.empty,
                      a = r.$anchor,
                      s = a.pos,
                      u = a.parent,
                      c = a.parent.isTextblock ? n.doc.resolve(s - 1) : a,
                      l = c.parent.type.spec.isolating,
                      d = a.pos - a.parentOffset,
                      f =
                        l && 1 === c.parent.childCount
                          ? d === a.pos
                          : p.Y1.atStart(o).from === s;
                    return (
                      !(
                        !(i && f && u.type.isTextblock) || u.textContent.length
                      ) && e.clearNodes()
                    );
                  });
                },
                function () {
                  return e.deleteSelection();
                },
                function () {
                  return e.joinBackward();
                },
                function () {
                  return e.selectNodeBackward();
                },
              ];
            });
          },
          n = function () {
            return t.editor.commands.first(function (t) {
              var e = t.commands;
              return [
                function () {
                  return e.deleteSelection();
                },
                function () {
                  return e.deleteCurrentNode();
                },
                function () {
                  return e.joinForward();
                },
                function () {
                  return e.selectNodeForward();
                },
              ];
            });
          },
          r = function () {
            return t.editor.commands.first(function (t) {
              var e = t.commands;
              return [
                function () {
                  return e.newlineInCode();
                },
                function () {
                  return e.createParagraphNear();
                },
                function () {
                  return e.liftEmptyBlock();
                },
                function () {
                  return e.splitBlock();
                },
              ];
            });
          },
          o = {
            Enter: r,
            "Mod-Enter": function () {
              return t.editor.commands.exitCode();
            },
            Backspace: e,
            "Mod-Backspace": e,
            "Shift-Backspace": e,
            Delete: n,
            "Mod-Delete": n,
            "Mod-a": function () {
              return t.editor.commands.selectAll();
            },
          },
          i = (0, f.Z)({}, o),
          a = (0, f.Z)(
            (0, f.Z)({}, o),
            {},
            {
              "Ctrl-h": e,
              "Alt-Backspace": e,
              "Ctrl-d": n,
              "Ctrl-Alt-Backspace": n,
              "Alt-Delete": n,
              "Alt-d": n,
              "Ctrl-a": function () {
                return t.editor.commands.selectTextblockStart();
              },
              "Ctrl-e": function () {
                return t.editor.commands.selectTextblockEnd();
              },
            },
          );
        return Ct() || Ft() ? a : i;
      },
      addProseMirrorPlugins: function () {
        var t = this;
        return [
          new p.Sy({
            key: new p.H$("clearDocument"),
            appendTransaction: function (e, n, r) {
              var o =
                e.some(function (t) {
                  return t.docChanged;
                }) && !n.doc.eq(r.doc);
              if (o) {
                var i = n.selection,
                  a = i.empty,
                  s = i.from,
                  u = i.to,
                  c = p.Y1.atStart(n.doc).from,
                  l = p.Y1.atEnd(n.doc).to,
                  d = s === c && u === l;
                if (!a && d) {
                  var f =
                    0 ===
                    r.doc.textBetween(0, r.doc.content.size, " ", " ").length;
                  if (f) {
                    var h = r.tr,
                      m = M({ state: r, transaction: h }),
                      v = new E({ editor: t.editor, state: m }),
                      g = v.commands;
                    if ((g.clearNodes(), h.steps.length)) return h;
                  }
                }
              }
            },
          }),
        ];
      },
    }),
    nn = et.create({
      name: "tabindex",
      addProseMirrorPlugins: function () {
        return [
          new p.Sy({
            key: new p.H$("tabindex"),
            props: {
              attributes: this.editor.isEditable ? { tabindex: "0" } : {},
            },
          }),
        ];
      },
    }),
    rn = Object.freeze({
      __proto__: null,
      ClipboardTextSerializer: ot,
      Commands: Qe,
      Editable: Je,
      FocusEvents: tn,
      Keymap: en,
      Tabindex: nn,
    }),
    on =
      '.ProseMirror {\n  position: relative;\n}\n\n.ProseMirror {\n  word-wrap: break-word;\n  white-space: pre-wrap;\n  white-space: break-spaces;\n  -webkit-font-variant-ligatures: none;\n  font-variant-ligatures: none;\n  font-feature-settings: "liga" 0; /* the above doesn\'t seem to work in Edge */\n}\n\n.ProseMirror [contenteditable="false"] {\n  white-space: normal;\n}\n\n.ProseMirror [contenteditable="false"] [contenteditable="true"] {\n  white-space: pre-wrap;\n}\n\n.ProseMirror pre {\n  white-space: pre-wrap;\n}\n\nimg.ProseMirror-separator {\n  display: inline !important;\n  border: none !important;\n  margin: 0 !important;\n  width: 1px !important;\n  height: 1px !important;\n}\n\n.ProseMirror-gapcursor {\n  display: none;\n  pointer-events: none;\n  position: absolute;\n  margin: 0;\n}\n\n.ProseMirror-gapcursor:after {\n  content: "";\n  display: block;\n  position: absolute;\n  top: -2px;\n  width: 20px;\n  border-top: 1px solid black;\n  animation: ProseMirror-cursor-blink 1.1s steps(2, start) infinite;\n}\n\n@keyframes ProseMirror-cursor-blink {\n  to {\n    visibility: hidden;\n  }\n}\n\n.ProseMirror-hideselection *::selection {\n  background: transparent;\n}\n\n.ProseMirror-hideselection *::-moz-selection {\n  background: transparent;\n}\n\n.ProseMirror-hideselection * {\n  caret-color: transparent;\n}\n\n.ProseMirror-focused .ProseMirror-gapcursor {\n  display: block;\n}\n\n.tippy-box[data-animation=fade][data-state=hidden] {\n  opacity: 0\n}';
  function an(t, e, n) {
    var r = document.querySelector(
      "style[data-tiptap-style".concat(n ? "-".concat(n) : "", "]"),
    );
    if (null !== r) return r;
    var o = document.createElement("style");
    return (
      e && o.setAttribute("nonce", e),
      o.setAttribute("data-tiptap-style".concat(n ? "-".concat(n) : ""), ""),
      (o.innerHTML = t),
      document.getElementsByTagName("head")[0].appendChild(o),
      o
    );
  }
  var sn = (function (t) {
    (0, o.Z)(n, t);
    var e = (0, i.Z)(n);
    function n() {
      var t,
        o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return (
        (0, l.Z)(this, n),
        (t = e.call(this)),
        (t.isFocused = !1),
        (t.extensionStorage = {}),
        (t.options = {
          element: document.createElement("div"),
          content: "",
          injectCSS: !0,
          injectNonce: void 0,
          extensions: [],
          autofocus: !1,
          editable: !0,
          editorProps: {},
          parseOptions: {},
          enableInputRules: !0,
          enablePasteRules: !0,
          enableCoreExtensions: !0,
          onBeforeCreate: function () {
            return null;
          },
          onCreate: function () {
            return null;
          },
          onUpdate: function () {
            return null;
          },
          onSelectionUpdate: function () {
            return null;
          },
          onTransaction: function () {
            return null;
          },
          onFocus: function () {
            return null;
          },
          onBlur: function () {
            return null;
          },
          onDestroy: function () {
            return null;
          },
        }),
        (t.isCapturingTransaction = !1),
        (t.capturedTransaction = null),
        t.setOptions(o),
        t.createExtensionManager(),
        t.createCommandManager(),
        t.createSchema(),
        t.on("beforeCreate", t.options.onBeforeCreate),
        t.emit("beforeCreate", { editor: (0, r.Z)(t) }),
        t.createView(),
        t.injectCSS(),
        t.on("create", t.options.onCreate),
        t.on("update", t.options.onUpdate),
        t.on("selectionUpdate", t.options.onSelectionUpdate),
        t.on("transaction", t.options.onTransaction),
        t.on("focus", t.options.onFocus),
        t.on("blur", t.options.onBlur),
        t.on("destroy", t.options.onDestroy),
        window.setTimeout(function () {
          t.isDestroyed ||
            (t.commands.focus(t.options.autofocus),
            t.emit("create", { editor: (0, r.Z)(t) }));
        }, 0),
        t
      );
    }
    return (
      (0, d.Z)(n, [
        {
          key: "storage",
          get: function () {
            return this.extensionStorage;
          },
        },
        {
          key: "commands",
          get: function () {
            return this.commandManager.commands;
          },
        },
        {
          key: "chain",
          value: function () {
            return this.commandManager.chain();
          },
        },
        {
          key: "can",
          value: function () {
            return this.commandManager.can();
          },
        },
        {
          key: "injectCSS",
          value: function () {
            this.options.injectCSS &&
              document &&
              (this.css = an(on, this.options.injectNonce));
          },
        },
        {
          key: "setOptions",
          value: function () {
            var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            ((this.options = (0, f.Z)((0, f.Z)({}, this.options), t)),
              this.view &&
                this.state &&
                !this.isDestroyed &&
                (this.options.editorProps &&
                  this.view.setProps(this.options.editorProps),
                this.view.updateState(this.state)));
          },
        },
        {
          key: "setEditable",
          value: function (t) {
            var e =
              !(arguments.length > 1 && void 0 !== arguments[1]) ||
              arguments[1];
            (this.setOptions({ editable: t }),
              e &&
                this.emit("update", {
                  editor: this,
                  transaction: this.state.tr,
                }));
          },
        },
        {
          key: "isEditable",
          get: function () {
            return this.options.editable && this.view && this.view.editable;
          },
        },
        {
          key: "state",
          get: function () {
            return this.view.state;
          },
        },
        {
          key: "registerPlugin",
          value: function (t, e) {
            var n = k(e)
                ? e(t, (0, u.Z)(this.state.plugins))
                : [].concat((0, u.Z)(this.state.plugins), [t]),
              r = this.state.reconfigure({ plugins: n });
            this.view.updateState(r);
          },
        },
        {
          key: "unregisterPlugin",
          value: function (t) {
            if (!this.isDestroyed) {
              var e = "string" === typeof t ? "".concat(t, "$") : t.key,
                n = this.state.reconfigure({
                  plugins: this.state.plugins.filter(function (t) {
                    return !t.key.startsWith(e);
                  }),
                });
              this.view.updateState(n);
            }
          },
        },
        {
          key: "createExtensionManager",
          value: function () {
            var t = this.options.enableCoreExtensions ? Object.values(rn) : [],
              e = []
                .concat((0, u.Z)(t), (0, u.Z)(this.options.extensions))
                .filter(function (t) {
                  return ["extension", "node", "mark"].includes(
                    null === t || void 0 === t ? void 0 : t.type,
                  );
                });
            this.extensionManager = new G(e, this);
          },
        },
        {
          key: "createCommandManager",
          value: function () {
            this.commandManager = new E({ editor: this });
          },
        },
        {
          key: "createSchema",
          value: function () {
            this.schema = this.extensionManager.schema;
          },
        },
        {
          key: "createView",
          value: function () {
            var t = ae(
                this.options.content,
                this.schema,
                this.options.parseOptions,
              ),
              e = St(t, this.options.autofocus);
            this.view = new h.tk(
              this.options.element,
              (0, f.Z)(
                (0, f.Z)({}, this.options.editorProps),
                {},
                {
                  dispatchTransaction: this.dispatchTransaction.bind(this),
                  state: p.yy.create({ doc: t, selection: e || void 0 }),
                },
              ),
            );
            var n = this.state.reconfigure({
              plugins: this.extensionManager.plugins,
            });
            (this.view.updateState(n),
              this.createNodeViews(),
              this.prependClass());
            var r = this.view.dom;
            r.editor = this;
          },
        },
        {
          key: "createNodeViews",
          value: function () {
            this.view.setProps({ nodeViews: this.extensionManager.nodeViews });
          },
        },
        {
          key: "prependClass",
          value: function () {
            this.view.dom.className = "tiptap ".concat(this.view.dom.className);
          },
        },
        {
          key: "captureTransaction",
          value: function (t) {
            ((this.isCapturingTransaction = !0),
              t(),
              (this.isCapturingTransaction = !1));
            var e = this.capturedTransaction;
            return ((this.capturedTransaction = null), e);
          },
        },
        {
          key: "dispatchTransaction",
          value: function (t) {
            var e = this;
            if (!this.view.isDestroyed) {
              if (this.isCapturingTransaction)
                return this.capturedTransaction
                  ? void t.steps.forEach(function (t) {
                      var n;
                      return null === (n = e.capturedTransaction) ||
                        void 0 === n
                        ? void 0
                        : n.step(t);
                    })
                  : void (this.capturedTransaction = t);
              var n = this.state.apply(t),
                r = !this.state.selection.eq(n.selection);
              (this.view.updateState(n),
                this.emit("transaction", { editor: this, transaction: t }),
                r &&
                  this.emit("selectionUpdate", {
                    editor: this,
                    transaction: t,
                  }));
              var o = t.getMeta("focus"),
                i = t.getMeta("blur");
              (o &&
                this.emit("focus", {
                  editor: this,
                  event: o.event,
                  transaction: t,
                }),
                i &&
                  this.emit("blur", {
                    editor: this,
                    event: i.event,
                    transaction: t,
                  }),
                t.docChanged &&
                  !t.getMeta("preventUpdate") &&
                  this.emit("update", { editor: this, transaction: t }));
            }
          },
        },
        {
          key: "getAttributes",
          value: function (t) {
            return ge(this.state, t);
          },
        },
        {
          key: "isActive",
          value: function (t, e) {
            var n = "string" === typeof t ? t : null,
              r = "string" === typeof t ? e : t;
            return Te(this.state, n, r);
          },
        },
        {
          key: "getJSON",
          value: function () {
            return this.state.doc.toJSON();
          },
        },
        {
          key: "getHTML",
          value: function () {
            return he(this.state.doc.content, this.schema);
          },
        },
        {
          key: "getText",
          value: function (t) {
            var e = t || {},
              n = e.blockSeparator,
              r = void 0 === n ? "\n\n" : n,
              o = e.textSerializers,
              i = void 0 === o ? {} : o;
            return me(this.state.doc, {
              blockSeparator: r,
              textSerializers: (0, f.Z)((0, f.Z)({}, rt(this.schema)), i),
            });
          },
        },
        {
          key: "isEmpty",
          get: function () {
            return Se(this.state.doc);
          },
        },
        {
          key: "getCharacterCount",
          value: function () {
            return (
              w.warn(
                '[tiptap warn]: "editor.getCharacterCount()" is deprecated. Please use "editor.storage.characterCount.characters()" instead.',
              ),
              this.state.doc.content.size - 2
            );
          },
        },
        {
          key: "destroy",
          value: function () {
            (this.emit("destroy"),
              this.view && this.view.destroy(),
              this.removeAllListeners());
          },
        },
        {
          key: "isDestroyed",
          get: function () {
            var t;
            return !(null === (t = this.view) || void 0 === t
              ? void 0
              : t.docView);
          },
        },
      ]),
      n
    );
  })(_);
  function un(t) {
    return new U({
      find: t.find,
      handler: function (e) {
        var n = e.state,
          r = e.range,
          o = e.match,
          i = N(t.getAttributes, void 0, o);
        if (!1 === i || null === i) return null;
        var a = n.tr,
          s = o[o.length - 1],
          u = o[0];
        if (s) {
          var c = u.search(/\S/),
            l = r.from + u.indexOf(s),
            d = l + s.length,
            f = Me(r.from, r.to, n.doc)
              .filter(function (e) {
                var n = e.mark.type.excluded;
                return n.find(function (n) {
                  return n === t.type && n !== e.mark.type;
                });
              })
              .filter(function (t) {
                return t.to > l;
              });
          if (f.length) return null;
          (d < r.to && a.delete(d, r.to),
            l > r.from && a.delete(r.from + c, l));
          var p = r.from + c + s.length;
          (a.addMark(r.from + c, p, t.type.create(i || {})),
            a.removeStoredMark(t.type));
        }
      },
    });
  }
  function cn(t) {
    return new U({
      find: t.find,
      handler: function (e) {
        var n,
          r = e.state,
          o = e.range,
          i = e.match,
          a = N(t.getAttributes, void 0, i) || {},
          s = r.tr,
          u = t.blockReplace ? o.from - 1 : o.from,
          c = o.to,
          l = t.type.create(a),
          d = s.selection.$to;
        if (i[1]) {
          var f = i[0].lastIndexOf(i[1]),
            h = u + f;
          h > c ? (h = c) : (c = h + i[1].length);
          var m = i[0][i[0].length - 1];
          (s.insertText(m, u + i[0].length - 1), s.replaceWith(h, c, l));
        } else i[0] && s.replaceWith(u, c, l);
        if (t.blockReplace && t.addExtraNewline) {
          var v = d.end();
          if (d.nodeAfter)
            (w.log(d.node().type.name),
              d.nodeAfter.isTextblock
                ? s.setSelection(p.Bs.create(s.doc, d.pos + 1))
                : d.nodeAfter.isBlock
                  ? s.setSelection(p.qv.create(s.doc, d.pos))
                  : s.setSelection(p.Bs.create(s.doc, d.pos)));
          else {
            var g =
              null === (n = d.parent.type.contentMatch.defaultType) ||
              void 0 === n
                ? void 0
                : n.create();
            g && (s.insert(v, g), s.setSelection(p.Bs.create(s.doc, v + 1)));
          }
          s.scrollIntoView();
        }
      },
    });
  }
  function ln(t) {
    return new U({
      find: t.find,
      handler: function (e) {
        var n = e.state,
          r = e.range,
          o = e.match,
          i = n.doc.resolve(r.from),
          a = N(t.getAttributes, void 0, o) || {};
        if (!i.node(-1).canReplaceWith(i.index(-1), i.indexAfter(-1), t.type))
          return null;
        n.tr.delete(r.from, r.to).setBlockType(r.from, r.from, t.type, a);
      },
    });
  }
  function dn(t) {
    return new U({
      find: t.find,
      handler: function (e) {
        var n = e.state,
          r = e.range,
          o = e.match,
          i = e.chain,
          a = N(t.getAttributes, void 0, o) || {},
          s = n.tr.delete(r.from, r.to),
          u = s.doc.resolve(r.from),
          c = u.blockRange(),
          l = c && (0, g.nd)(c, t.type, a);
        if (!l) return null;
        if ((s.wrap(c, l), t.keepMarks && t.editor)) {
          var d = n.selection,
            f = n.storedMarks,
            p = t.editor.extensionManager.splittableMarks,
            h = f || (d.$to.parentOffset && d.$from.marks());
          if (h) {
            var m = h.filter(function (t) {
              return p.includes(t.type.name);
            });
            s.ensureMarks(m);
          }
        }
        if (t.keepAttributes) {
          var v =
            "bulletList" === t.type.name || "orderedList" === t.type.name
              ? "listItem"
              : "taskList";
          i().updateAttributes(v, a).run();
        }
        var y = s.doc.resolve(r.from - 1).nodeBefore;
        y &&
          y.type === t.type &&
          (0, g.Mn)(s.doc, r.from - 1) &&
          (!t.joinPredicate || t.joinPredicate(o, y)) &&
          s.join(r.from - 1);
      },
    });
  }
  var fn = (function () {
      function t() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        ((0, l.Z)(this, t),
          (this.type = "mark"),
          (this.name = "mark"),
          (this.parent = null),
          (this.child = null),
          (this.config = { name: this.name, defaultOptions: {} }),
          (this.config = (0, f.Z)((0, f.Z)({}, this.config), e)),
          (this.name = this.config.name),
          e.defaultOptions &&
            w.warn(
              '[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "'.concat(
                this.name,
                '".',
              ),
            ),
          (this.options = this.config.defaultOptions),
          this.config.addOptions &&
            (this.options = N(T(this, "addOptions", { name: this.name }))),
          (this.storage =
            N(
              T(this, "addStorage", { name: this.name, options: this.options }),
            ) || {}));
      }
      return (
        (0, d.Z)(
          t,
          [
            {
              key: "configure",
              value: function () {
                var t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  e = this.extend();
                return (
                  (e.options = tt(this.options, t)),
                  (e.storage = N(
                    T(e, "addStorage", { name: e.name, options: e.options }),
                  )),
                  e
                );
              },
            },
            {
              key: "extend",
              value: function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  n = new t(e);
                return (
                  (n.parent = this),
                  (this.child = n),
                  (n.name = e.name ? e.name : n.parent.name),
                  e.defaultOptions &&
                    w.warn(
                      '[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "'.concat(
                        n.name,
                        '".',
                      ),
                    ),
                  (n.options = N(T(n, "addOptions", { name: n.name }))),
                  (n.storage = N(
                    T(n, "addStorage", { name: n.name, options: n.options }),
                  )),
                  n
                );
              },
            },
          ],
          [
            {
              key: "create",
              value: function () {
                var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                return new t(e);
              },
            },
            {
              key: "handleExit",
              value: function (t) {
                var e = t.editor,
                  n = t.mark,
                  r = e.state.tr,
                  o = e.state.selection.$from,
                  i = o.pos === o.end();
                if (i) {
                  var a = o.marks(),
                    s = !!a.find(function (t) {
                      return (
                        (null === t || void 0 === t ? void 0 : t.type.name) ===
                        n.name
                      );
                    });
                  if (!s) return !1;
                  var u = a.find(function (t) {
                    return (
                      (null === t || void 0 === t ? void 0 : t.type.name) ===
                      n.name
                    );
                  });
                  return (
                    u && r.removeStoredMark(u),
                    r.insertText(" ", o.pos),
                    e.view.dispatch(r),
                    !0
                  );
                }
                return !1;
              },
            },
          ],
        ),
        t
      );
    })(),
    pn = (function () {
      function t() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        ((0, l.Z)(this, t),
          (this.type = "node"),
          (this.name = "node"),
          (this.parent = null),
          (this.child = null),
          (this.config = { name: this.name, defaultOptions: {} }),
          (this.config = (0, f.Z)((0, f.Z)({}, this.config), e)),
          (this.name = this.config.name),
          e.defaultOptions &&
            w.warn(
              '[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "'.concat(
                this.name,
                '".',
              ),
            ),
          (this.options = this.config.defaultOptions),
          this.config.addOptions &&
            (this.options = N(T(this, "addOptions", { name: this.name }))),
          (this.storage =
            N(
              T(this, "addStorage", { name: this.name, options: this.options }),
            ) || {}));
      }
      return (
        (0, d.Z)(
          t,
          [
            {
              key: "configure",
              value: function () {
                var t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  e = this.extend();
                return (
                  (e.options = tt(this.options, t)),
                  (e.storage = N(
                    T(e, "addStorage", { name: e.name, options: e.options }),
                  )),
                  e
                );
              },
            },
            {
              key: "extend",
              value: function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  n = new t(e);
                return (
                  (n.parent = this),
                  (this.child = n),
                  (n.name = e.name ? e.name : n.parent.name),
                  e.defaultOptions &&
                    w.warn(
                      '[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "'.concat(
                        n.name,
                        '".',
                      ),
                    ),
                  (n.options = N(T(n, "addOptions", { name: n.name }))),
                  (n.storage = N(
                    T(n, "addStorage", { name: n.name, options: n.options }),
                  )),
                  n
                );
              },
            },
          ],
          [
            {
              key: "create",
              value: function () {
                var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                return new t(e);
              },
            },
          ],
        ),
        t
      );
    })();
  function hn() {
    return (
      "Android" === navigator.platform || /android/i.test(navigator.userAgent)
    );
  }
  var mn = (function () {
    function t(e, n, r) {
      ((0, l.Z)(this, t),
        (this.isDragging = !1),
        (this.component = e),
        (this.editor = n.editor),
        (this.options = (0, f.Z)({ stopEvent: null, ignoreMutation: null }, r)),
        (this.extension = n.extension),
        (this.node = n.node),
        (this.decorations = n.decorations),
        (this.getPos = n.getPos),
        this.mount());
    }
    return (
      (0, d.Z)(t, [
        { key: "mount", value: function () {} },
        {
          key: "dom",
          get: function () {
            return this.editor.view.dom;
          },
        },
        {
          key: "contentDOM",
          get: function () {
            return null;
          },
        },
        {
          key: "onDragStart",
          value: function (t) {
            var e,
              n,
              r,
              o,
              i,
              a,
              s,
              u = this.editor.view,
              c = t.target,
              l =
                3 === c.nodeType
                  ? null === (e = c.parentElement) || void 0 === e
                    ? void 0
                    : e.closest("[data-drag-handle]")
                  : c.closest("[data-drag-handle]");
            if (
              this.dom &&
              !(null === (n = this.contentDOM) || void 0 === n
                ? void 0
                : n.contains(c)) &&
              l
            ) {
              var d = 0,
                f = 0;
              if (this.dom !== l) {
                var h = this.dom.getBoundingClientRect(),
                  m = l.getBoundingClientRect(),
                  v =
                    null !== (r = t.offsetX) && void 0 !== r
                      ? r
                      : null === (o = t.nativeEvent) || void 0 === o
                        ? void 0
                        : o.offsetX,
                  g =
                    null !== (i = t.offsetY) && void 0 !== i
                      ? i
                      : null === (a = t.nativeEvent) || void 0 === a
                        ? void 0
                        : a.offsetY;
                ((d = m.x - h.x + v), (f = m.y - h.y + g));
              }
              null === (s = t.dataTransfer) ||
                void 0 === s ||
                s.setDragImage(this.dom, d, f);
              var y = p.qv.create(u.state.doc, this.getPos()),
                b = u.state.tr.setSelection(y);
              u.dispatch(b);
            }
          },
        },
        {
          key: "stopEvent",
          value: function (t) {
            var e,
              n = this;
            if (!this.dom) return !1;
            if ("function" === typeof this.options.stopEvent)
              return this.options.stopEvent({ event: t });
            var r = t.target,
              o =
                this.dom.contains(r) &&
                !(null === (e = this.contentDOM) || void 0 === e
                  ? void 0
                  : e.contains(r));
            if (!o) return !1;
            var i = t.type.startsWith("drag"),
              a = "drop" === t.type,
              s =
                ["INPUT", "BUTTON", "SELECT", "TEXTAREA"].includes(r.tagName) ||
                r.isContentEditable;
            if (s && !a && !i) return !0;
            var u = this.editor.isEditable,
              c = this.isDragging,
              l = !!this.node.type.spec.draggable,
              d = p.qv.isSelectable(this.node),
              f = "copy" === t.type,
              h = "paste" === t.type,
              m = "cut" === t.type,
              v = "mousedown" === t.type;
            if ((!l && d && i && t.preventDefault(), l && i && !c))
              return (t.preventDefault(), !1);
            if (l && u && !c && v) {
              var g = r.closest("[data-drag-handle]"),
                y = g && (this.dom === g || this.dom.contains(g));
              y &&
                ((this.isDragging = !0),
                document.addEventListener(
                  "dragend",
                  function () {
                    n.isDragging = !1;
                  },
                  { once: !0 },
                ),
                document.addEventListener(
                  "drop",
                  function () {
                    n.isDragging = !1;
                  },
                  { once: !0 },
                ),
                document.addEventListener(
                  "mouseup",
                  function () {
                    n.isDragging = !1;
                  },
                  { once: !0 },
                ));
            }
            return !(c || a || f || h || m || (v && d));
          },
        },
        {
          key: "ignoreMutation",
          value: function (t) {
            if (!this.dom || !this.contentDOM) return !0;
            if ("function" === typeof this.options.ignoreMutation)
              return this.options.ignoreMutation({ mutation: t });
            if (this.node.isLeaf || this.node.isAtom) return !0;
            if ("selection" === t.type) return !1;
            if (
              this.dom.contains(t.target) &&
              "childList" === t.type &&
              (Ct() || hn()) &&
              this.editor.isFocused
            ) {
              var e = [].concat(
                (0, u.Z)(Array.from(t.addedNodes)),
                (0, u.Z)(Array.from(t.removedNodes)),
              );
              if (
                e.every(function (t) {
                  return t.isContentEditable;
                })
              )
                return !1;
            }
            return (
              (this.contentDOM === t.target && "attributes" === t.type) ||
              !this.contentDOM.contains(t.target)
            );
          },
        },
        {
          key: "updateAttributes",
          value: function (t) {
            var e = this;
            this.editor.commands.command(function (n) {
              var r = n.tr,
                o = e.getPos();
              return (
                r.setNodeMarkup(
                  o,
                  void 0,
                  (0, f.Z)((0, f.Z)({}, e.node.attrs), t),
                ),
                !0
              );
            });
          },
        },
        {
          key: "deleteNode",
          value: function () {
            var t = this.getPos(),
              e = t + this.node.nodeSize;
            this.editor.commands.deleteRange({ from: t, to: e });
          },
        },
      ]),
      t
    );
  })();
  function vn(t) {
    return new z({
      find: t.find,
      handler: function (e) {
        var n = e.state,
          r = e.range,
          o = e.match,
          i = N(t.getAttributes, void 0, o);
        if (!1 === i || null === i) return null;
        var a = n.tr,
          s = o[o.length - 1],
          u = o[0],
          c = r.to;
        if (s) {
          var l = u.search(/\S/),
            d = r.from + u.indexOf(s),
            f = d + s.length,
            p = Me(r.from, r.to, n.doc)
              .filter(function (e) {
                var n = e.mark.type.excluded;
                return n.find(function (n) {
                  return n === t.type && n !== e.mark.type;
                });
              })
              .filter(function (t) {
                return t.to > d;
              });
          if (p.length) return null;
          (f < r.to && a.delete(f, r.to),
            d > r.from && a.delete(r.from + l, d),
            (c = r.from + l + s.length),
            a.addMark(r.from + l, c, t.type.create(i || {})),
            a.removeStoredMark(t.type));
        }
      },
    });
  }
};
