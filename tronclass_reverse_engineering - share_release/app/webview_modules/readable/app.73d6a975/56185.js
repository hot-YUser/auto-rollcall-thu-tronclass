// Source: decompiled/web-modules-acorn/app.73d6a975/56185.js
// Webpack module id: 56185
const __webpack_module_56185 = function (e, t, n) {
  "use strict";
  n.d(t, {
    Q: function () {
      return bl;
    },
  });
  (n(57658),
    n(41539),
    n(78783),
    n(33948),
    n(24603),
    n(28450),
    n(74916),
    n(88386),
    n(39714),
    n(77601),
    n(47941),
    n(23157),
    n(27852));
  var o = n(70655),
    i = n(77577),
    r = n(52101),
    a = (n(21249), n(58285)),
    s = n(9784),
    l = n(1024),
    c = {
      arrowDown: l.DIG,
      arrowUp: l.zJj,
      arrowBack: l.XRs,
      chevronDown: l.Dd1,
      chevronBackOutline: l.ZY4,
      close: l.xvD,
      closeOutline: l.fID,
      add: l.IHx,
      remove: l.OdJ,
      attach: l.ubX,
      closeCircle: l.XZx,
      alertCircle: l.no6,
      warning: l.KpH,
      locationOutline: l.Iv7,
    },
    u = function () {
      (0, a.a)(
        Object.assign.apply(
          Object,
          (0, o.ev)(
            [{}],
            Object.keys(c).map(function (e) {
              var t;
              return ((t = {}), (t[(0, s.o)(e)] = c[e]), t);
            }),
            !1,
          ),
        ),
      );
    },
    d = (n(92222), n(82772), n(47042), n(26699), n(9653), n(7036)),
    p = n(62328),
    m = n(67462),
    f = n(89564),
    v = n(39626),
    g = n(42132),
    h = n(91248),
    C = { class: "title" },
    y = ["disabled"],
    A = ["disabled"];
  function w(e, t, n, o, r, a) {
    var s = (0, i.resolveComponent)("svg-icon");
    return (
      (0, i.openBlock)(),
      (0, i.createElementBlock)(
        "div",
        { class: (0, i.normalizeClass)(e.$style.modal) },
        [
          (0, i.createElementVNode)(
            "div",
            { class: (0, i.normalizeClass)([e.$style.header, "flex"]) },
            [
              (0, i.createElementVNode)(
                "div",
                C,
                (0, i.toDisplayString)(e.$t("bulletin.pageTitle")) +
                  " (" +
                  (0, i.toDisplayString)(e.currentBulletinIndex + 1) +
                  "/" +
                  (0, i.toDisplayString)(e.unreadBulletins.length) +
                  ") ",
                1,
              ),
              (0, i.createElementVNode)(
                "div",
                {
                  onClick:
                    t[0] ||
                    (t[0] = function () {
                      for (var t = [], n = 0; n < arguments.length; n++)
                        t[n] = arguments[n];
                      return e.close && e.close.apply(e, t);
                    }),
                  "data-testid": "close",
                },
                [(0, i.createVNode)(s, { name: "close" })],
              ),
            ],
            2,
          ),
          (0, i.createElementVNode)(
            "div",
            {
              class: (0, i.normalizeClass)(e.$style.body),
              onClick:
                t[1] ||
                (t[1] = function () {
                  for (var t = [], n = 0; n < arguments.length; n++)
                    t[n] = arguments[n];
                  return e.enter && e.enter.apply(e, t);
                }),
            },
            [
              (0, i.createElementVNode)(
                "div",
                {
                  class: (0, i.normalizeClass)(e.$style.title),
                  "data-testid": "title",
                },
                (0, i.toDisplayString)(e.currentBulletin.title),
                3,
              ),
              (0, i.createElementVNode)(
                "div",
                { class: (0, i.normalizeClass)(e.$style.time) },
                (0, i.toDisplayString)(e.$t("bulletin.createTime")) +
                  "：" +
                  (0, i.toDisplayString)(e.createdAt),
                3,
              ),
              (0, i.createElementVNode)(
                "div",
                { class: (0, i.normalizeClass)([e.$style.tags, "flex"]) },
                [
                  ((0, i.openBlock)(!0),
                  (0, i.createElementBlock)(
                    i.Fragment,
                    null,
                    (0, i.renderList)(
                      e.currentBulletin.classifications,
                      function (t) {
                        return (
                          (0, i.openBlock)(),
                          (0, i.createElementBlock)(
                            "div",
                            {
                              key: t.id,
                              class: (0, i.normalizeClass)(e.$style.tag),
                            },
                            (0, i.toDisplayString)(t.name),
                            3,
                          )
                        );
                      },
                    ),
                    128,
                  )),
                ],
                2,
              ),
            ],
            2,
          ),
          e.unreadBulletins.length > 1
            ? ((0, i.openBlock)(),
              (0, i.createElementBlock)(
                "div",
                {
                  key: 0,
                  class: (0, i.normalizeClass)([e.$style.footer, "flex"]),
                  "data-testid": "action",
                },
                [
                  (0, i.createElementVNode)(
                    "button",
                    {
                      class: (0, i.normalizeClass)([
                        e.$style.action,
                        "flex flex-center",
                      ]),
                      onClick:
                        t[2] ||
                        (t[2] = function () {
                          for (var t = [], n = 0; n < arguments.length; n++)
                            t[n] = arguments[n];
                          return e.prev && e.prev.apply(e, t);
                        }),
                      disabled: !e.hasPrev,
                    },
                    (0, i.toDisplayString)(e.$t("buttons.prev")),
                    11,
                    y,
                  ),
                  (0, i.createElementVNode)(
                    "button",
                    {
                      class: (0, i.normalizeClass)([
                        e.$style.action,
                        "flex flex-center",
                      ]),
                      onClick:
                        t[3] ||
                        (t[3] = function () {
                          for (var t = [], n = 0; n < arguments.length; n++)
                            t[n] = arguments[n];
                          return e.next && e.next.apply(e, t);
                        }),
                      disabled: !e.hasNext,
                    },
                    (0, i.toDisplayString)(e.$t("buttons.next")),
                    11,
                    A,
                  ),
                ],
                2,
              ))
            : ((0, i.openBlock)(),
              (0, i.createElementBlock)(
                "div",
                {
                  key: 1,
                  class: (0, i.normalizeClass)([e.$style.footer, "flex"]),
                  "data-testid": "action",
                },
                [
                  (0, i.createElementVNode)(
                    "button",
                    {
                      class: (0, i.normalizeClass)([
                        [e.$style.action, e.$style.view],
                        "flex flex-center",
                      ]),
                      onClick:
                        t[4] ||
                        (t[4] = function () {
                          for (var t = [], n = 0; n < arguments.length; n++)
                            t[n] = arguments[n];
                          return e.enter && e.enter.apply(e, t);
                        }),
                    },
                    (0, i.toDisplayString)(e.$t("homework.viewDetail")),
                    3,
                  ),
                ],
                2,
              )),
        ],
        2,
      )
    );
  }
  var b = n(16956),
    E = n(15063),
    S = n(27486),
    T = (0, i.defineComponent)({
      name: "BulletinsModal",
      props: { bulletins: { type: Object, required: !0 } },
      setup: function (e) {
        var t = (0, i.ref)(0),
          n = (0, i.computed)(function () {
            return e.bulletins[t.value];
          }),
          o = (0, i.computed)(function () {
            return E.t2.format(
              n.value.createdAt,
              E.t2.Format.DATETIME_FORMAT_NO_SECONDS,
            );
          }),
          r = function () {
            h["default"].closeModal("");
          },
          a = function () {
            t.value += 1;
          },
          s = function () {
            t.value -= 1;
          },
          l = (0, i.computed)(function () {
            return t.value >= 1;
          }),
          c = (0, i.computed)(function () {
            return t.value < e.bulletins.length - 1;
          }),
          u = function () {
            (r(),
              b["default"].push({
                name: S.q.OrgBulletinDetail,
                params: { bulletinId: String(n.value.id) },
              }));
          };
        return {
          close: r,
          currentBulletin: n,
          currentBulletinIndex: t,
          next: a,
          prev: s,
          unreadBulletins: e.bulletins,
          hasPrev: l,
          hasNext: c,
          enter: u,
          createdAt: o,
        };
      },
    }),
    _ = {
      markdownBody: "bulletins-modal__markdown-body-C11AU",
      loginTypeLogo: "bulletins-modal__login-type-logo-kpdgK",
      loginTemplateTitle: "bulletins-modal__login-template-title-Ihi4u",
      loginTemplateLoginOptions:
        "bulletins-modal__login-template-loginOptions-kZ00F",
      modalOnTop: "bulletins-modal__modal-on-top-kNmaN",
      modalWrapper: "bulletins-modal__modal-wrapper-VHRDz",
      scIonModalIos: "bulletins-modal__sc-ion-modal-ios-oIrKC",
      modalFullscreen: "bulletins-modal__modal-fullscreen-ptSOo",
      scIonModalIosH: "bulletins-modal__sc-ion-modal-ios-h-SziXb",
      header: "bulletins-modal__header-mlCe_",
      body: "bulletins-modal__body-YgsDH",
      title: "bulletins-modal__title-ldW6p",
      tags: "bulletins-modal__tags-yH1kH",
      tag: "bulletins-modal__tag-yYUHN",
      time: "bulletins-modal__time-oat_W",
      footer: "bulletins-modal__footer-gsC7M",
      action: "bulletins-modal__action-wdhTd",
      view: "bulletins-modal__view-JBJsE",
    },
    I = n(46021);
  const L = {};
  L["$style"] = _;
  const k = (0, I.Z)(T, [
    ["render", w],
    ["__cssModules", L],
  ]);
  var P = k,
    B = n(58509),
    R = function () {
      return (0, o.mG)(void 0, void 0, void 0, function () {
        var e;
        return (0, o.Jh)(this, function (t) {
          switch (t.label) {
            case 0:
              return [
                4,
                (0, B.R2)({
                  conditions: { unread: !0, show_on_popup: !0 },
                  page: 1,
                  page_size: 100,
                }),
              ];
            case 1:
              return (
                (e = t.sent()),
                (null === e || void 0 === e ? void 0 : e.length) &&
                  h["default"].showModal(
                    P,
                    { bulletins: e },
                    "unreadPopupOrgBulletinsModal",
                    {
                      backdropDismiss: !1,
                      enterAnimation: h.modalEaseInOutEnterAnimation,
                      leaveAnimation: h.modalEaseInOutLeaveAnimation,
                    },
                  ),
                [2]
              );
          }
        });
      });
    },
    x = { showUnreadPopupOrgBulletinsModal: R },
    O = n(28838),
    M = n(51688),
    V = n(40222),
    N = n(84281),
    D = n(57878),
    Z = function (e) {
      var t = null;
      t && (0, D.U)(t);
    },
    U = n(77787),
    H = function (e) {
      (Z(e), (0, U.X)().updateRoute());
    },
    F = n(42325),
    G = n(31443),
    z = n(16268),
    Q = n(63621),
    j = n(23442),
    q = n(28249),
    J = n(29081),
    W = (n(38862), n(21703), n(96647), n(36409)),
    X = n(87066),
    Y = n(56022),
    K = n(32456),
    $ = Y.Z.get("http-retry-manager"),
    ee = "httpErrors",
    te = 500,
    ne = 6e4,
    oe = 1e3,
    ie = 5e3,
    re = 3,
    ae = 200,
    se = 10,
    le = 10800,
    ce = !1,
    ue = -1,
    de = [],
    pe = (0, W.Z)(
      function () {
        return (0, o.mG)(void 0, void 0, void 0, function () {
          var e, t;
          return (0, o.Jh)(this, function (n) {
            switch (n.label) {
              case 0:
                return [
                  4,
                  K.x.setItem(
                    ee,
                    JSON.stringify({
                      userIdentity: ""
                        .concat(
                          null === (e = f.Z.user) || void 0 === e
                            ? void 0
                            : e.org.id,
                          "_",
                        )
                        .concat(
                          null === (t = f.Z.user) || void 0 === t
                            ? void 0
                            : t.id,
                        ),
                      data: de,
                    }),
                  ),
                ];
              case 1:
                return (n.sent(), [2]);
            }
          });
        });
      },
      ie,
      { leading: !1, trailing: !0, maxWait: ie },
    ),
    me = function (e) {
      var t,
        n,
        o,
        i = e.config;
      i &&
        !(
          (null === (t = e.response) || void 0 === t ? void 0 : t.status) + ""
        ).startsWith("4") &&
        ["POST", "PUT"].includes((i.method || "GET").toUpperCase()) &&
        ((null === (n = i.wgData) || void 0 === n ? void 0 : n.isStatRequest) ||
          (null === (o = i.wgData) || void 0 === o
            ? void 0
            : o.isActivityReadRequest)) &&
        (de.length > oe && de.shift(),
        de.push(i),
        $.info("push error date, list length: ".concat(de.length)),
        pe());
    },
    fe = function () {
      return (0, o.mG)(void 0, void 0, void 0, function () {
        var e, t, n;
        return (0, o.Jh)(this, function (o) {
          switch (o.label) {
            case 0:
              if (!de.length || ce) return [2];
              if (J.Z.currentAxiosRequestCount > re) return [2];
              ((ce = !0),
                (e = Math.min(de.length, ae)),
                $.info(
                  "start process error data, list length: ".concat(de.length),
                ),
                (t = de.shift()),
                (n = 0),
                (o.label = 1));
            case 1:
              return t && n < e
                ? t.wgData.retryNum > se
                  ? (new Date().getTime() - t.wgData.requestTime > le &&
                      (t.wgData.retryNum = 0),
                    de.push(t),
                    [3, 5])
                  : [3, 2]
                : [3, 7];
            case 2:
              return ((t.wgData.retryNum += 1), [4, X.Z.request(t)]);
            case 3:
              return (
                o.sent(),
                [
                  4,
                  new Promise(function (e) {
                    setTimeout(function () {
                      e();
                    }, te);
                  }),
                ]
              );
            case 4:
              (o.sent(), (o.label = 5));
            case 5:
              return ((n += 1), n < e && (t = de.shift()), [4, pe()]);
            case 6:
              return (o.sent(), [3, 1]);
            case 7:
              return (
                $.info(
                  "end process error data: ".concat(n, " / ").concat(de.length),
                ),
                (ce = !1),
                [2]
              );
          }
        });
      });
    },
    ve = function () {
      return (0, o.mG)(void 0, void 0, void 0, function () {
        var e, t, n, i, r, a, s, l;
        return (0, o.Jh)(this, function (o) {
          switch (o.label) {
            case 0:
              (M.Z.on(O.HE, me), (o.label = 1));
            case 1:
              return (o.trys.push([1, 3, , 4]), [4, K.x.getItem(ee)]);
            case 2:
              if (
                ((e = o.sent() || ""),
                (t = JSON.parse(e)),
                ""
                  .concat(
                    null === (s = f.Z.user) || void 0 === s ? void 0 : s.org.id,
                    "_",
                  )
                  .concat(
                    null === (l = f.Z.user) || void 0 === l ? void 0 : l.id,
                  ) !== t["userIdentity"])
              )
                throw new Error("user changed");
              for (n = t["data"], i = 0, r = n; i < r.length; i++)
                ((a = r[i]),
                  (a.transformRequest = X.Z.defaults.transformRequest),
                  (a.transformResponse = X.Z.defaults.transformResponse),
                  (a.wgData.retryNum = 0));
              return (
                de.push.apply(de, n),
                $.info("init, list length: ".concat(de.length)),
                [3, 4]
              );
            case 3:
              return (o.sent(), K.x.removeItem(ee), [3, 4]);
            case 4:
              return (clearInterval(ue), (ue = setInterval(fe, ne)), [2]);
          }
        });
      });
    },
    ge = function () {
      (clearInterval(ue), (de.length = 0), M.Z.off(O.HE, me));
    },
    he = { init: ve, destroy: ge },
    Ce = (n(4723), n(91058), n(57327), n(43173)),
    ye = n(88519),
    Ae = Y.Z.get("OtaUpdateManager"),
    we = /^(\d+\.\d+\.\d+)\.(\d{10})\(([a-zA-Z0-9]{8})\)$/,
    be = /^\d{10}$/,
    Ee = function (e) {
      var t = e.match(we);
      if (t) {
        var n = {
          version: t[1],
          commitDate: parseInt(t[2], 10),
          commitHash: t[3],
        };
        return n.commitDate && n.commitHash && n.version ? n : void 0;
      }
    },
    Se = (function () {
      function e() {
        ((this.channel = "qa"), (this.versionData = null));
      }
      return (
        (e.prototype.getOtaVersionForDev = function () {
          var e;
          return (0, o.mG)(this, void 0, void 0, function () {
            var t, n, i;
            return (0, o.Jh)(this, function (o) {
              switch (o.label) {
                case 0:
                  return (
                    (t = "qa"),
                    ["stg", "uat"].includes(this.channel) && (t = "stg"),
                    (n = {
                      headers: {
                        "X-LC-Id": "tRcsVqctq7saBytI0LpOCznA-gzGzoHsz",
                        "X-LC-Key": "WxhKNPofCIbPUIgAx58eEkkX",
                        "Content-Type": "application/x-www-form-urlencoded",
                      },
                      params: { where: '{"env":"'.concat(t, '"}') },
                    }),
                    [
                      4,
                      X.Z.get(
                        "https://trcsvqct.lc-cn-n1-shared.com/1.1/classes/OTAVersion",
                        n,
                      ),
                    ]
                  );
                case 1:
                  return (
                    (i = o.sent().data),
                    (
                      null ===
                        (e = null === i || void 0 === i ? void 0 : i.results) ||
                      void 0 === e
                        ? void 0
                        : e.length
                    )
                      ? [2, i.results[0]]
                      : [2, null]
                  );
              }
            });
          });
        }),
        (e.prototype.getOtaVersionForProd = function () {
          return (0, o.mG)(this, void 0, void 0, function () {
            var e;
            return (0, o.Jh)(this, function (t) {
              switch (t.label) {
                case 0:
                  return [4, z.Z.getOrgInfo("OtaVersion", "earth")];
                case 1:
                  return ((e = t.sent()), e ? [2, e] : [2, null]);
              }
            });
          });
        }),
        (e.prototype.start = function () {
          window.APPRuntime.OFFLINE_MODE
            ? Ae.info("Not support ota update,because mode is offline")
            : "app" === f.Z.targetPlatform && "harmonyos" !== f.Z.platform
              ? window.APPRuntime.ENVIRONMENT
                ? "dev" !== window.APPRuntime.ENVIRONMENT
                  ? (Ae.info(
                      "OtaUpdateManager start:",
                      f.Z.platform,
                      window.APPRuntime.ENVIRONMENT,
                    ),
                    (this.channel = window.APPRuntime.ENVIRONMENT),
                    Ae.info("OtaUpdateManager start, channel:", this.channel),
                    this.check())
                  : Ae.info("Not support ota update,because ENVIRONMENT is dev")
                : Ae.error(
                    "start ota update error: ENVIRONMENT is",
                    window.APPRuntime.ENVIRONMENT,
                  )
              : Ae.info(
                  "Not support ota update,because platform is ".concat(
                    f.Z.platform,
                  ),
                );
        }),
        (e.prototype.getOatVersionInfo = function () {
          return (0, o.mG)(this, void 0, void 0, function () {
            var e, t;
            return (0, o.Jh)(this, function (n) {
              switch (n.label) {
                case 0:
                  return (0, ye.B)()
                    ? (Ae.info("getOatVersionInfo for prod"),
                      (e = this),
                      [4, this.getOtaVersionForProd()])
                    : [3, 2];
                case 1:
                  return ((e.versionData = n.sent()), [3, 4]);
                case 2:
                  return (
                    Ae.info("getOatVersionInfo for dev"),
                    (t = this),
                    [4, this.getOtaVersionForDev()]
                  );
                case 3:
                  ((t.versionData = n.sent()), (n.label = 4));
                case 4:
                  return (
                    this.versionData
                      ? ((this.versionData.info = Ee(this.versionData.version)),
                        (this.versionData.valid = !!this.versionData.info),
                        Ae.info("versionData valid:", this.versionData.valid))
                      : Ae.info("no versionData"),
                    [2]
                  );
              }
            });
          });
        }),
        (e.prototype.check = function () {
          var e;
          return (0, o.mG)(this, void 0, void 0, function () {
            var t;
            return (0, o.Jh)(this, function (n) {
              switch (n.label) {
                case 0:
                  return [4, this.getOatVersionInfo()];
                case 1:
                  return (
                    n.sent(),
                    (null === (e = this.versionData) || void 0 === e
                      ? void 0
                      : e.valid) &&
                      (this.versionData.reset
                        ? (Ae.info("reset"), this.reset())
                        : this.versionData.force &&
                            this.versionData.info.commitDate !==
                              window.APPRuntime.versionInfo.commitDate
                          ? (Ae.info("force update"), this.update())
                          : ((t = (0, Ce.M7)(
                              this.versionData.info.version,
                              f.Z.deviceInfo.appVersion,
                            )),
                            t > 0 &&
                            !0 ===
                              this.versionData.compatiblePastNativeVersion &&
                            this.versionData.info.commitDate !==
                              window.APPRuntime.versionInfo.commitDate
                              ? (Ae.info(
                                  "native version too low, compatible with past native version",
                                ),
                                this.update())
                              : 0 == t &&
                                  this.versionData.info.commitDate >
                                    window.APPRuntime.versionInfo.commitDate
                                ? (Ae.info("ota version too low"),
                                  this.update())
                                : (Ae.info(
                                    "app native version: ".concat(
                                      f.Z.deviceInfo.appVersion,
                                    ),
                                  ),
                                  Ae.info(
                                    "ota native version: ".concat(
                                      this.versionData.info.version,
                                    ),
                                  ),
                                  Ae.info("versionDiff: ".concat(t)),
                                  Ae.info(
                                    "current version commitDate: ".concat(
                                      window.APPRuntime.versionInfo.commitDate,
                                    ),
                                  ),
                                  Ae.info(
                                    "ota version commitDate: ".concat(
                                      this.versionData.info.commitDate,
                                    ),
                                  ),
                                  Ae.info("currently the latest version"),
                                  this.clean()))),
                    [2]
                  );
              }
            });
          });
        }),
        (e.prototype.clean = function () {
          return (0, o.mG)(this, void 0, void 0, function () {
            var e, t, n, i, r, a, s;
            return (0, o.Jh)(this, function (o) {
              switch (o.label) {
                case 0:
                  (Ae.info("start clean"),
                    (e = d.Vn.CapacitorUpdater),
                    (t = ""),
                    (n = ""),
                    (i = []),
                    (o.label = 1));
                case 1:
                  return (o.trys.push([1, 4, , 5]), [4, e.current()]);
                case 2:
                  return ((r = o.sent()), [4, e.list()]);
                case 3:
                  return (
                    (a = o.sent()),
                    (t = r.pathPersist || ""),
                    (n = r.serverBasePath || ""),
                    (i = a.versions || []),
                    [3, 5]
                  );
                case 4:
                  return (
                    (s = o.sent()),
                    Ae.error("version clean error:", s),
                    [3, 5]
                  );
                case 5:
                  ((i = i.filter(function (e) {
                    return be.test(e);
                  })),
                    "builtin" !== n &&
                      (i = i.filter(function (e) {
                        return e !== t;
                      })),
                    Ae.info("will be deleted versions", i));
                  try {
                    i.map(function (t) {
                      return e.delete({ version: t });
                    });
                  } catch (l) {
                    Ae.error("delete error:", l);
                  }
                  return [2];
              }
            });
          });
        }),
        (e.prototype.update = function () {
          return (0, o.mG)(this, void 0, void 0, function () {
            var e, t, n, i, r;
            return (0, o.Jh)(this, function (o) {
              switch (o.label) {
                case 0:
                  if (
                    ((e = d.Vn.CapacitorUpdater),
                    (t = this.versionData.info.commitDate + ""),
                    (n = this.versionData.zipFileUrl),
                    !window.APPRuntime.IS_CN &&
                      this.versionData.zipFileUrlTW &&
                      (n = this.versionData.zipFileUrlTW),
                    !n || !t)
                  )
                    return (
                      Ae.error("update error, no zipUrl or version: ", n, t),
                      [2]
                    );
                  o.label = 1;
                case 1:
                  return (
                    o.trys.push([1, 6, , 7]),
                    (J.Z.otaUpdate.status = "downloading"),
                    (J.Z.otaUpdate.version = this.versionData.readableVersion),
                    [4, e.download({ url: n, version: t })]
                  );
                case 2:
                  return (
                    (i = o.sent()),
                    i.version
                      ? [
                          4,
                          e.set({
                            version: t,
                            autoReload: this.versionData.autoReload,
                          }),
                        ]
                      : [3, 4]
                  );
                case 3:
                  return (
                    o.sent(),
                    (J.Z.otaUpdate.status = "downloaded"),
                    Ae.info("update success, version: ", t),
                    [3, 5]
                  );
                case 4:
                  ((J.Z.otaUpdate.status = "none"), (o.label = 5));
                case 5:
                  return [3, 7];
                case 6:
                  return (
                    (r = o.sent()),
                    (J.Z.otaUpdate.status = "none"),
                    Ae.error("update error:", r),
                    [3, 7]
                  );
                case 7:
                  return [2];
              }
            });
          });
        }),
        (e.prototype.reset = function () {
          var e = d.Vn.CapacitorUpdater;
          try {
            e.reset({ autoReload: this.versionData.autoReload });
          } catch (pn) {}
        }),
        e
      );
    })(),
    Te = new Se(),
    _e = Te,
    Ie = n(23352),
    Le = (n(69826), n(32023), n(49955)),
    ke = n(25682),
    Pe = n(96486),
    Be = n.n(Pe),
    Re = n(32636),
    xe = n(70861),
    Oe = n(30381),
    Me = n.n(Oe),
    Ve = Y.Z.get("course face photo check manager"),
    Ne = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this;
        return (
          (t.activityRule = { enter: !1, exit: !1 }),
          (t.onlineVideoRules = []),
          (t.courseRule = { enter: !1 }),
          (t.faceServiceType = Le.rk.PHOTO_CHECK_RULE),
          (t.faceCheckGeneralActivityInfo = new Le.TQ()),
          t
        );
      }
      return (
        (0, o.ZT)(t, e),
        (t.prototype.getCourseRules = function () {
          var e = (0, ke.xt)().courseInfo;
          e.value && (this.courseInfo = e.value);
          var t,
            n = e.value.courseAttributes,
            o = Be().get(n, "data.course_end_time", ""),
            i = Me()().utc().isAfter(o, "date");
          i ||
            (Be().get(n, "data.photo_check_rule")
              ? ((t = Be().get(n, "data.photo_check_rule")),
                (this.faceServiceType = Le.rk.PHOTO_CHECK_RULE))
              : Be().get(n, "data.face_service_rule") &&
                ((t = Be().get(n, "data.face_service_rule")),
                (this.faceServiceType = Le.rk.FACE_SERVICE_RULE)),
            (this.onlineVideoRules = Be().get(t, "online_video_rules", [])),
            (this.courseRule = Be().get(t, "course_rule", { enter: !1 })),
            (this.activityRule = Be().get(t, "activity_rule", {
              enter: !1,
              exit: !1,
            })));
        }),
        (t.prototype.buildFaceCheckGeneralActivityInfo = function (e) {
          var t, n;
          ((this.faceCheckGeneralActivityInfo.id = String(e.id)),
            (this.faceCheckGeneralActivityInfo.type = e.type),
            (this.faceCheckGeneralActivityInfo.title =
              null === e || void 0 === e ? void 0 : e.title));
          var o =
              null ===
                (n =
                  null === (t = this.courseInfo) || void 0 === t
                    ? void 0
                    : t.modules) || void 0 === n
                ? void 0
                : n.find(function (t) {
                    return (
                      t.id ===
                      (null === e || void 0 === e ? void 0 : e.moduleId)
                    );
                  }),
            i =
              null === o || void 0 === o
                ? void 0
                : o.syllabuses.find(function (t) {
                    return (
                      t.id ===
                      (null === e || void 0 === e ? void 0 : e.syllabusId)
                    );
                  });
          ((this.faceCheckGeneralActivityInfo.module =
            (null === o || void 0 === o ? void 0 : o.name) || ""),
            (this.faceCheckGeneralActivityInfo.syllabus =
              (null === i || void 0 === i ? void 0 : i.summary) || ""));
        }),
        t
      );
    })(Re.z),
    De = (function (e) {
      function t() {
        var t = e.call(this) || this;
        return ((t.faceCheckMark = []), t.initFaceCheckMark(), t);
      }
      return (
        (0, o.ZT)(t, e),
        (t.prototype.initFaceCheckMark = function () {
          return (0, o.mG)(this, void 0, void 0, function () {
            var e;
            return (0, o.Jh)(this, function (t) {
              switch (t.label) {
                case 0:
                  return [4, K.x.getItem("courseFaceCheckMark")];
                case 1:
                  return (
                    (e = t.sent()),
                    e && (this.faceCheckMark = JSON.parse(e)),
                    [2]
                  );
              }
            });
          });
        }),
        (t.prototype.getCurrentUserFaceCheckMark = function () {
          var e,
            t = this;
          return null !==
            (e = this.faceCheckMark.find(function (e) {
              return (
                (null === e || void 0 === e ? void 0 : e.userId) === t.user.id
              );
            })) && void 0 !== e
            ? e
            : null;
        }),
        (t.prototype.setCurrentUserFaceCheckMark = function (e) {
          this.getCurrentUserFaceCheckMark()
            ? this.getCurrentUserFaceCheckMark().courseIds.push(e)
            : this.faceCheckMark.push({ userId: this.user.id, courseIds: [e] });
        }),
        (t.prototype.init = function () {
          M.Z.on("courseFacePhotoCheck", this.allowCourseFaceCheck.bind(this));
        }),
        (t.prototype.allowCourseFaceCheck = function () {
          return (0, o.mG)(this, void 0, void 0, function () {
            var e;
            return (0, o.Jh)(this, function (t) {
              switch (t.label) {
                case 0:
                  return (
                    Ve.info(
                      "CourseEnterFaceCheckManager: check course enter rule",
                    ),
                    this.getCourseRules(),
                    this.courseRule.enter
                      ? ((e = this.getCurrentUserFaceCheckMark()),
                        (
                          null === e || void 0 === e
                            ? void 0
                            : e.courseIds.includes(this.courseInfo.id)
                        )
                          ? [3, 2]
                          : [4, this.showVerifyModal(this.faceServiceType)])
                      : [2]
                  );
                case 1:
                  (t.sent(), (t.label = 2));
                case 2:
                  return [2];
              }
            });
          });
        }),
        (t.prototype.startFacePhotoCheck = function () {
          return (0, o.mG)(this, void 0, void 0, function () {
            var e, t, n;
            return (0, o.Jh)(this, function (o) {
              switch (o.label) {
                case 0:
                  return (
                    Ve.info("CourseEnterFacePhotoCheckManager: photo check"),
                    [4, this.photoVerification()]
                  );
                case 1:
                  return (
                    (e = o.sent()),
                    e
                      ? ((t = new Le.gE(this.user, e)),
                        t.buildCoursePayload(this.courseInfo),
                        [4, this.updateFacePhotoRecordInfo(t)])
                      : (Ve.error("error! fileKey not exist"), [2])
                  );
                case 2:
                  return (
                    (n = o.sent()),
                    n
                      ? (this.setCurrentUserFaceCheckMark(this.courseInfo.id),
                        [
                          4,
                          K.x.setItem(
                            "courseFaceCheckMark",
                            JSON.stringify(this.faceCheckMark),
                          ),
                        ])
                      : [2]
                  );
                case 3:
                  return (o.sent(), [4, this.verificationSuccess()]);
                case 4:
                  return (o.sent(), [2]);
              }
            });
          });
        }),
        (t.prototype.getFaceRecognitionRecores = function () {
          return (0, o.mG)(this, void 0, void 0, function () {
            var e;
            return (0, o.Jh)(this, function (t) {
              switch (t.label) {
                case 0:
                  return (
                    (e = new Le.t4()),
                    e.buildCourseEnterPayload(this.courseInfo),
                    [4, (0, xe.Up)(e)]
                  );
                case 1:
                  return [2, t.sent()];
              }
            });
          });
        }),
        (t.prototype.saveFaceRecognitionRecord = function () {
          return (0, o.mG)(this, void 0, void 0, function () {
            var e;
            return (0, o.Jh)(this, function (t) {
              switch (t.label) {
                case 0:
                  return (
                    (e = new Le.u7()),
                    e.buildCourseEnterPayload(this.user, this.courseInfo),
                    [4, (0, xe.rg)(e)]
                  );
                case 1:
                  return (t.sent(), [2]);
              }
            });
          });
        }),
        (t.prototype.startFaceRecognitionCheck = function () {
          return (0, o.mG)(this, void 0, void 0, function () {
            var e;
            return (0, o.Jh)(this, function (t) {
              switch (t.label) {
                case 0:
                  return [4, this.getFaceRecognitionRecores()];
                case 1:
                  return (
                    (e = t.sent()),
                    (null === e || void 0 === e ? void 0 : e.status) ===
                    Le.rf.DRAFT
                      ? [3, 3]
                      : [4, this.saveFaceRecognitionRecord()]
                  );
                case 2:
                  (t.sent(), (t.label = 3));
                case 3:
                  return [4, this.faceRecognitionVerification()];
                case 4:
                  return (t.sent(), [2]);
              }
            });
          });
        }),
        (t.prototype.faceRecognitionVerification = function () {
          return (0, o.mG)(this, void 0, void 0, function () {
            var e;
            return (0, o.Jh)(this, function (t) {
              switch (t.label) {
                case 0:
                  return [4, this.getFaceRecognitionRecores()];
                case 1:
                  return (
                    (e = t.sent()),
                    (null === e || void 0 === e ? void 0 : e.status) !==
                    Le.rf.FAILURE
                      ? [3, 4]
                      : [4, this.saveFaceRecognitionRecord()]
                  );
                case 2:
                  return (t.sent(), [4, this.getFaceRecognitionRecores()]);
                case 3:
                  ((e = t.sent()), (t.label = 4));
                case 4:
                  return (null === e || void 0 === e ? void 0 : e.status) !==
                    Le.rf.SUCCESS
                    ? [3, 7]
                    : (this.setCurrentUserFaceCheckMark(this.courseInfo.id),
                      [
                        4,
                        K.x.setItem(
                          "courseFaceCheckMark",
                          JSON.stringify(this.faceCheckMark),
                        ),
                      ]);
                case 5:
                  return (t.sent(), [4, this.verificationSuccess()]);
                case 6:
                  return (t.sent(), [3, 9]);
                case 7:
                  return [4, this.h5Verification(e.url)];
                case 8:
                  (t.sent(), (t.label = 9));
                case 9:
                  return [2];
              }
            });
          });
        }),
        t
      );
    })(Ne),
    Ze = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this;
        return ((t.videoProgress = -1), t);
      }
      return (
        (0, o.ZT)(t, e),
        (t.prototype.init = function () {
          M.Z.on(
            "onlineVideoFacePhotoCheck",
            this.allowOnlineVideoFacePhotoCheck.bind(this),
          );
        }),
        (t.prototype.facePhotoCheckRecord = function () {
          return (0, o.mG)(this, void 0, void 0, function () {
            var e;
            return (0, o.Jh)(this, function (t) {
              switch (t.label) {
                case 0:
                  return (
                    (e = new Le.XS(
                      Le.Bt.ONLINE_VIDEO,
                      String(this.faceCheckGeneralActivityInfo.id),
                      this.videoProgress,
                    )),
                    [4, (0, xe.lr)(e)]
                  );
                case 1:
                  return [2, t.sent()];
              }
            });
          });
        }),
        (t.prototype.faceServiceCheckRecord = function () {
          return (0, o.mG)(this, void 0, void 0, function () {
            var e;
            return (0, o.Jh)(this, function (t) {
              switch (t.label) {
                case 0:
                  return (
                    (e = new Le.t4()),
                    e.buildOnliveVideoPayload(
                      this.faceCheckGeneralActivityInfo,
                      this.videoProgress,
                      this.courseInfo,
                    ),
                    [4, (0, xe.Up)(e)]
                  );
                case 1:
                  return [2, t.sent()];
              }
            });
          });
        }),
        (t.prototype.allowOnlineVideoFacePhotoCheck = function (e) {
          var t,
            n = e[0],
            i = e[1];
          return (0, o.mG)(this, void 0, void 0, function () {
            var e, r, a;
            return (0, o.Jh)(this, function (o) {
              switch (o.label) {
                case 0:
                  if (
                    (Ve.info(
                      "OnlineVideoFaceCheckManager: check online video rule",
                    ),
                    this.getCourseRules(),
                    !(null === (t = this.onlineVideoRules) || void 0 === t
                      ? void 0
                      : t.includes(i)))
                  )
                    return [3, 9];
                  if (!n.id)
                    return (Ve.error("error! not params activityId"), [2]);
                  switch (
                    (this.buildFaceCheckGeneralActivityInfo(n),
                    (this.videoProgress = i),
                    (e = this.faceServiceType),
                    e)
                  ) {
                    case Le.rk.PHOTO_CHECK_RULE:
                      return [3, 1];
                    case Le.rk.FACE_SERVICE_RULE:
                      return [3, 5];
                  }
                  return [3, 9];
                case 1:
                  return [4, this.facePhotoCheckRecord()];
                case 2:
                  return (
                    (r = o.sent()),
                    r ? [3, 4] : [4, this.showVerifyModal(this.faceServiceType)]
                  );
                case 3:
                  (o.sent(), (o.label = 4));
                case 4:
                  return [3, 9];
                case 5:
                  return [4, this.faceServiceCheckRecord()];
                case 6:
                  return (
                    (a = o.sent()),
                    (null === a || void 0 === a ? void 0 : a.status) ===
                    Le.rf.SUCCESS
                      ? [3, 8]
                      : [4, this.showVerifyModal(this.faceServiceType)]
                  );
                case 7:
                  (o.sent(), (o.label = 8));
                case 8:
                  return [3, 9];
                case 9:
                  return [2];
              }
            });
          });
        }),
        (t.prototype.startFacePhotoCheck = function () {
          return (0, o.mG)(this, void 0, void 0, function () {
            var e, t, n;
            return (0, o.Jh)(this, function (o) {
              switch (o.label) {
                case 0:
                  return (
                    Ve.info("OnlineVideoFacePhotoCheckManager: photo check"),
                    [4, this.photoVerification()]
                  );
                case 1:
                  return (
                    (e = o.sent()),
                    e
                      ? ((t = new Le.gE(this.user, e)),
                        t.buildOnliveVideoPayload(
                          this.faceCheckGeneralActivityInfo,
                          this.videoProgress,
                          this.courseInfo,
                        ),
                        [4, this.updateFacePhotoRecordInfo(t)])
                      : (Ve.error("error! fileKey not exist"), [2])
                  );
                case 2:
                  return (
                    (n = o.sent()),
                    n ? [4, this.verificationSuccess()] : [2]
                  );
                case 3:
                  return (o.sent(), [2]);
              }
            });
          });
        }),
        (t.prototype.startFaceRecognitionCheck = function () {
          return (0, o.mG)(this, void 0, void 0, function () {
            return (0, o.Jh)(this, function (e) {
              switch (e.label) {
                case 0:
                  return [4, this.faceRecognitionVerification()];
                case 1:
                  return (e.sent(), [2]);
              }
            });
          });
        }),
        (t.prototype.faceRecognitionVerification = function () {
          return (0, o.mG)(this, void 0, void 0, function () {
            var e, t;
            return (0, o.Jh)(this, function (n) {
              switch (n.label) {
                case 0:
                  return [4, this.faceServiceCheckRecord()];
                case 1:
                  return (
                    (e = n.sent()),
                    (null === e || void 0 === e ? void 0 : e.status) !==
                    Le.rf.FAILURE
                      ? [3, 4]
                      : ((t = new Le.u7()),
                        t.buildOnliveVideoPayload(
                          this.faceCheckGeneralActivityInfo,
                          this.videoProgress,
                          this.courseInfo,
                          this.user,
                        ),
                        [4, (0, xe.rg)(t)])
                  );
                case 2:
                  return (n.sent(), [4, this.faceServiceCheckRecord()]);
                case 3:
                  ((e = n.sent()), (n.label = 4));
                case 4:
                  return (null === e || void 0 === e ? void 0 : e.status) !==
                    Le.rf.SUCCESS
                    ? [3, 6]
                    : [4, this.verificationSuccess()];
                case 5:
                  return (n.sent(), [3, 8]);
                case 6:
                  return [4, this.h5Verification(e.url)];
                case 7:
                  (n.sent(), (n.label = 8));
                case 8:
                  return [2];
              }
            });
          });
        }),
        t
      );
    })(Ne),
    Ue = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this;
        return ((t.activityAction = Le.Ah.ENTER), t);
      }
      return (
        (0, o.ZT)(t, e),
        (t.prototype.init = function () {
          M.Z.on(
            "generalActivityFacePhotoCheck",
            this.allowGeneralActivityFacePhotoCheck.bind(this),
          );
        }),
        (t.prototype.allowGeneralActivityFacePhotoCheck = function (e) {
          var t,
            n,
            i = e[0],
            r = e[1];
          return (0, o.mG)(this, void 0, void 0, function () {
            return (0, o.Jh)(this, function (e) {
              switch (e.label) {
                case 0:
                  return (
                    Ve.info(
                      "GeneralActivityFaceCheckManager: check general activity rule",
                    ),
                    this.getCourseRules(),
                    (null === r || void 0 === r ? void 0 : r.id)
                      ? (this.buildFaceCheckGeneralActivityInfo(r),
                        (this.activityAction = i),
                        (null === (t = this.activityRule) || void 0 === t
                          ? void 0
                          : t.enter) && i === Le.Ah.ENTER
                          ? [4, this.showVerifyModal(this.faceServiceType)]
                          : [3, 2])
                      : [3, 6]
                  );
                case 1:
                  return (e.sent(), [3, 5]);
                case 2:
                  return (null === (n = this.activityRule) || void 0 === n
                    ? void 0
                    : n.exit) && i === Le.Ah.EXIT
                    ? [4, this.showVerifyModal(this.faceServiceType)]
                    : [3, 4];
                case 3:
                  return (e.sent(), [3, 5]);
                case 4:
                  (M.Z.emit("faceCheckStatus", Le.Y8.CHECK_VALID),
                    (e.label = 5));
                case 5:
                  return [3, 7];
                case 6:
                  (Ve.error("error! not params activityId"), (e.label = 7));
                case 7:
                  return [2];
              }
            });
          });
        }),
        (t.prototype.startFacePhotoCheck = function () {
          return (0, o.mG)(this, void 0, void 0, function () {
            var e, t, n;
            return (0, o.Jh)(this, function (o) {
              switch (o.label) {
                case 0:
                  return (
                    Ve.info("GeneralActivityFaceCheckManager: photo check"),
                    [4, this.photoVerification()]
                  );
                case 1:
                  return (
                    (e = o.sent()),
                    e
                      ? ((t = new Le.gE(this.user, e)),
                        t.buildGeneralActivityPayload(
                          this.faceCheckGeneralActivityInfo,
                          this.activityAction,
                          this.courseInfo,
                        ),
                        [4, this.updateFacePhotoRecordInfo(t)])
                      : (Ve.error("error! fileKey not exist"), [2])
                  );
                case 2:
                  return (
                    (n = o.sent()),
                    n ? [4, this.verificationSuccess()] : [2]
                  );
                case 3:
                  return (o.sent(), [2]);
              }
            });
          });
        }),
        (t.prototype.getFaceRecognitionRecores = function () {
          return (0, o.mG)(this, void 0, void 0, function () {
            var e;
            return (0, o.Jh)(this, function (t) {
              switch (t.label) {
                case 0:
                  return (
                    (e = new Le.t4()),
                    e.buildGeneralActivityPayload(
                      this.faceCheckGeneralActivityInfo,
                      this.activityAction,
                      this.courseInfo,
                      this.user,
                    ),
                    [4, (0, xe.Up)(e)]
                  );
                case 1:
                  return [2, t.sent()];
              }
            });
          });
        }),
        (t.prototype.saveFaceRecognitionRecord = function () {
          return (0, o.mG)(this, void 0, void 0, function () {
            var e;
            return (0, o.Jh)(this, function (t) {
              switch (t.label) {
                case 0:
                  return (
                    (e = new Le.u7()),
                    e.buildGeneralActivityPayload(
                      this.faceCheckGeneralActivityInfo,
                      this.activityAction,
                      this.courseInfo,
                      this.user,
                    ),
                    [4, (0, xe.rg)(e)]
                  );
                case 1:
                  return (t.sent(), [2]);
              }
            });
          });
        }),
        (t.prototype.startFaceRecognitionCheck = function () {
          return (0, o.mG)(this, void 0, void 0, function () {
            var e;
            return (0, o.Jh)(this, function (t) {
              switch (t.label) {
                case 0:
                  return [4, this.getFaceRecognitionRecores()];
                case 1:
                  return (
                    (e = t.sent()),
                    (null === e || void 0 === e ? void 0 : e.status) ===
                    Le.rf.DRAFT
                      ? [3, 3]
                      : [4, this.saveFaceRecognitionRecord()]
                  );
                case 2:
                  (t.sent(), (t.label = 3));
                case 3:
                  return [4, this.faceRecognitionVerification()];
                case 4:
                  return (t.sent(), [2]);
              }
            });
          });
        }),
        (t.prototype.faceRecognitionVerification = function () {
          return (0, o.mG)(this, void 0, void 0, function () {
            var e;
            return (0, o.Jh)(this, function (t) {
              switch (t.label) {
                case 0:
                  return [4, this.getFaceRecognitionRecores()];
                case 1:
                  return (
                    (e = t.sent()),
                    (null === e || void 0 === e ? void 0 : e.status) !==
                    Le.rf.FAILURE
                      ? [3, 4]
                      : [4, this.saveFaceRecognitionRecord()]
                  );
                case 2:
                  return (t.sent(), [4, this.getFaceRecognitionRecores()]);
                case 3:
                  ((e = t.sent()), (t.label = 4));
                case 4:
                  return (null === e || void 0 === e ? void 0 : e.status) !==
                    Le.rf.SUCCESS
                    ? [3, 6]
                    : [4, this.verificationSuccess()];
                case 5:
                  return (t.sent(), [3, 8]);
                case 6:
                  return [4, this.h5Verification(e.url)];
                case 7:
                  (t.sent(), (t.label = 8));
                case 8:
                  return [2];
              }
            });
          });
        }),
        t
      );
    })(Ne),
    He = n(26979),
    Fe = Y.Z.get("login face check manager"),
    Ge = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this;
        return ((t.loginRule = new Le.J4()), (t.isNotRollcallRecord = !1), t);
      }
      return (
        (0, o.ZT)(t, e),
        (t.prototype.init = function () {
          M.Z.on("loginFaceCheck", this.allowLoginFaceCheck.bind(this));
        }),
        (t.prototype.allowLoginFaceCheck = function () {
          return (0, o.mG)(this, void 0, void 0, function () {
            var e, t;
            return (0, o.Jh)(this, function (n) {
              switch (n.label) {
                case 0:
                  return (
                    Fe.info("LoginFaceCheckManager: check login rule"),
                    (e = this),
                    [4, (0, xe.yN)()]
                  );
                case 1:
                  return (
                    (e.loginRule = n.sent() || new Le.J4()),
                    this.loginRule.login
                      ? ((t = localStorage.getItem("loginFaceCheck")),
                        t
                          ? [2, !1]
                          : [
                              4,
                              this.showVerifyModal(
                                this.loginRule.faceServiceType,
                              ),
                            ])
                      : [2, !1]
                  );
                case 2:
                  return [2, n.sent()];
              }
            });
          });
        }),
        (t.prototype.startFacePhotoCheck = function () {
          return (0, o.mG)(this, void 0, void 0, function () {
            var e, t, n, i, r, a, s, l;
            return (0, o.Jh)(this, function (o) {
              switch (o.label) {
                case 0:
                  return (
                    Fe.info("LoginFaceCheckManager: check photo"),
                    (t = Me()().format(He.Format.DATE_FORMAT_WITH_YEAR)),
                    this.loginRule.rollcall
                      ? ((n = new Le.XS(
                          Le.Bt.LOGIN,
                          String(this.org.id),
                          "rollcall",
                          this.org.orgName,
                        )),
                        [4, (0, xe.lr)(n)])
                      : [3, 2]
                  );
                case 1:
                  return (
                    (i = o.sent()),
                    (r = Me()
                      .unix(i ? i["check_datetime"] : 0)
                      .format(He.Format.DATE_FORMAT_WITH_YEAR)),
                    (e = !i || Me()(r).isBefore(t, "date")),
                    [3, 3]
                  );
                case 2:
                  ((e = !1), (o.label = 3));
                case 3:
                  return [4, this.photoVerification()];
                case 4:
                  return (
                    (a = o.sent()),
                    a
                      ? ((s = new Le.gE(this.user, a)),
                        s.buildLoginPayload(this.org, e),
                        [4, this.updateFacePhotoRecordInfo(s)])
                      : (Fe.error("fileKey not exist"), [2])
                  );
                case 5:
                  return (
                    (l = o.sent()),
                    l ? [4, this.verificationSuccess()] : [2]
                  );
                case 6:
                  return (
                    o.sent(),
                    localStorage.setItem("loginFaceCheck", "true"),
                    M.Z.off("loginFaceCheck"),
                    [2]
                  );
              }
            });
          });
        }),
        (t.prototype.getFaceRecognitionCheckRecore = function (e) {
          return (0, o.mG)(this, void 0, void 0, function () {
            var t;
            return (0, o.Jh)(this, function (n) {
              switch (n.label) {
                case 0:
                  return (
                    (t = new Le.t4()),
                    t.buildLoginPayload(this.user, e),
                    [4, (0, xe.Up)(t)]
                  );
                case 1:
                  return [2, n.sent()];
              }
            });
          });
        }),
        (t.prototype.saveFaceRecognitionRecord = function (e) {
          return (
            void 0 === e && (e = !1),
            (0, o.mG)(this, void 0, void 0, function () {
              var t;
              return (0, o.Jh)(this, function (n) {
                switch (n.label) {
                  case 0:
                    return (
                      (t = new Le.u7()),
                      t.buildLoginPayload(this.user, e),
                      [4, (0, xe.rg)(t)]
                    );
                  case 1:
                    return (n.sent(), [2]);
                }
              });
            })
          );
        }),
        (t.prototype.startFaceRecognitionCheck = function () {
          return (0, o.mG)(this, void 0, void 0, function () {
            var e, t;
            return (0, o.Jh)(this, function (n) {
              switch (n.label) {
                case 0:
                  return (
                    Fe.info("startFaceRecognitionCheck"),
                    (e = !!this.loginRule.rollcall),
                    [4, this.getFaceRecognitionCheckRecore(e)]
                  );
                case 1:
                  return (
                    (t = n.sent()),
                    (null === t || void 0 === t ? void 0 : t.status) ===
                    Le.rf.DRAFT
                      ? [3, 3]
                      : [4, this.saveFaceRecognitionRecord()]
                  );
                case 2:
                  (n.sent(), (this.isNotRollcallRecord = !0), (n.label = 3));
                case 3:
                  return [4, this.faceRecognitionVerification()];
                case 4:
                  return (n.sent(), [2]);
              }
            });
          });
        }),
        (t.prototype.faceRecognitionVerification = function () {
          return (0, o.mG)(this, void 0, void 0, function () {
            var e, t;
            return (0, o.Jh)(this, function (n) {
              switch (n.label) {
                case 0:
                  return (
                    (e = !(
                      this.isNotRollcallRecord || !this.loginRule.rollcall
                    )),
                    [4, this.getFaceRecognitionCheckRecore(e)]
                  );
                case 1:
                  return (
                    (t = n.sent()),
                    (null === t || void 0 === t ? void 0 : t.status) !==
                    Le.rf.FAILURE
                      ? [3, 4]
                      : [4, this.saveFaceRecognitionRecord(e)]
                  );
                case 2:
                  return (n.sent(), [4, this.getFaceRecognitionCheckRecore(e)]);
                case 3:
                  ((t = n.sent()), (n.label = 4));
                case 4:
                  return (null === t || void 0 === t ? void 0 : t.status) !==
                    Le.rf.SUCCESS
                    ? [3, 6]
                    : [4, this.verificationSuccess()];
                case 5:
                  return (
                    n.sent(),
                    localStorage.setItem("loginFaceCheck", "true"),
                    [3, 8]
                  );
                case 6:
                  return [4, this.h5Verification(t.url)];
                case 7:
                  (n.sent(), (n.label = 8));
                case 8:
                  return [2];
              }
            });
          });
        }),
        t
      );
    })(Re.z),
    ze = (function () {
      function e() {
        (new Ge().init(), new De().init(), new Ze().init(), new Ue().init());
      }
      return (
        (e.init = function () {
          e.instance || (e.instance = new e());
        }),
        e
      );
    })(),
    Qe = n(99580),
    je = n(79375),
    qe = (n(54747), n(32150)),
    Je = n(95927),
    We = { class: "flex row x-left y-center" },
    Xe = ["onClick"],
    Ye = { key: 1 };
  function Ke(e, t, n, o, r, a) {
    var s = (0, i.resolveComponent)("svg-icon"),
      l = (0, i.resolveComponent)("ion-skeleton-text"),
      c = (0, i.resolveComponent)("ion-progress-bar"),
      u = (0, i.resolveComponent)("alert");
    return (
      (0, i.openBlock)(),
      (0, i.createBlock)(
        u,
        {
          buttons: [e.$tc("common.cancel"), e.$tc("resource.toUserResource")],
          onClickButton: e.onClick,
        },
        {
          default: (0, i.withCtx)(function () {
            var t;
            return [
              (0, i.createElementVNode)(
                "div",
                { class: (0, i.normalizeClass)(e.$style.modal) },
                [
                  (0, i.createElementVNode)(
                    "div",
                    { class: (0, i.normalizeClass)(e.$style.title) },
                    (0, i.toDisplayString)(
                      e.$tc("resource.sharedFileUploading"),
                    ),
                    3,
                  ),
                  (0, i.createElementVNode)(
                    "div",
                    { class: (0, i.normalizeClass)(e.$style.subTitle) },
                    (0, i.toDisplayString)(
                      e.$tc("resource.uploadToUserResource", 0, [
                        e.maxAttachmentCount,
                      ]),
                    ),
                    3,
                  ),
                  (0, i.createElementVNode)(
                    "div",
                    { class: (0, i.normalizeClass)(e.$style.content) },
                    [
                      (
                        null === (t = e.attachments) || void 0 === t
                          ? void 0
                          : t.length
                      )
                        ? ((0, i.openBlock)(!0),
                          (0, i.createElementBlock)(
                            i.Fragment,
                            { key: 0 },
                            (0, i.renderList)(e.attachments, function (t) {
                              return (
                                (0, i.openBlock)(),
                                (0, i.createElementBlock)(
                                  "div",
                                  {
                                    key: t.id,
                                    class: (0, i.normalizeClass)(e.$style.file),
                                    "data-testid": "attachment",
                                    "data-name": "attachment",
                                  },
                                  [
                                    (0, i.createElementVNode)(
                                      "div",
                                      {
                                        class: (0, i.normalizeClass)([
                                          e.$style.fileIcon,
                                          "disabled-event",
                                        ]),
                                      },
                                      [
                                        (0, i.createVNode)(
                                          s,
                                          {
                                            name: e.attachmentIcon(t.file.name),
                                          },
                                          null,
                                          8,
                                          ["name"],
                                        ),
                                      ],
                                      2,
                                    ),
                                    t.file
                                      ? ((0, i.openBlock)(),
                                        (0, i.createElementBlock)(
                                          "div",
                                          {
                                            key: 0,
                                            class: (0, i.normalizeClass)([
                                              e.$style.fileInfo,
                                              "disabled-event",
                                            ]),
                                          },
                                          [
                                            (0, i.createElementVNode)(
                                              "div",
                                              We,
                                              [
                                                t.file.name
                                                  ? ((0, i.openBlock)(),
                                                    (0, i.createElementBlock)(
                                                      "div",
                                                      {
                                                        key: 0,
                                                        class: (0,
                                                        i.normalizeClass)(
                                                          e.$style.fileName,
                                                        ),
                                                      },
                                                      (0, i.toDisplayString)(
                                                        t.file.name,
                                                      ),
                                                      3,
                                                    ))
                                                  : ((0, i.openBlock)(),
                                                    (0, i.createBlock)(l, {
                                                      key: 1,
                                                      animated: "",
                                                      style: { width: "80%" },
                                                    })),
                                              ],
                                            ),
                                            e.isUploaded(t.status)
                                              ? ((0, i.openBlock)(),
                                                (0, i.createElementBlock)(
                                                  "div",
                                                  {
                                                    key: 0,
                                                    class: (0,
                                                    i.normalizeClass)(
                                                      e.$style.fileSize,
                                                    ),
                                                  },
                                                  (0, i.toDisplayString)(
                                                    e.humanizeBytes(
                                                      t.file.size,
                                                    ),
                                                  ),
                                                  3,
                                                ))
                                              : (0, i.createCommentVNode)(
                                                  "",
                                                  !0,
                                                ),
                                            e.isUploadingOrWaiting(t.status)
                                              ? ((0, i.openBlock)(),
                                                (0, i.createElementBlock)(
                                                  "div",
                                                  {
                                                    key: 1,
                                                    class: (0,
                                                    i.normalizeClass)([
                                                      e.$style.progress,
                                                      "disabled-event",
                                                    ]),
                                                  },
                                                  [
                                                    (0, i.createElementVNode)(
                                                      "span",
                                                      {
                                                        class: (0,
                                                        i.normalizeClass)(
                                                          e.$style.value,
                                                        ),
                                                      },
                                                      (0, i.toDisplayString)(
                                                        e.uploadStatus(t),
                                                      ),
                                                      3,
                                                    ),
                                                    (0, i.createVNode)(
                                                      c,
                                                      { value: t.progress },
                                                      null,
                                                      8,
                                                      ["value"],
                                                    ),
                                                  ],
                                                  2,
                                                ))
                                              : (0, i.createCommentVNode)(
                                                  "",
                                                  !0,
                                                ),
                                            e.isUploadFailed(t.status)
                                              ? ((0, i.openBlock)(),
                                                (0, i.createElementBlock)(
                                                  "div",
                                                  {
                                                    key: 2,
                                                    class: (0,
                                                    i.normalizeClass)(
                                                      e.$style.uploadFailed,
                                                    ),
                                                  },
                                                  (0, i.toDisplayString)(
                                                    e.$t(
                                                      "attachment.uploadFailed",
                                                    ),
                                                  ),
                                                  3,
                                                ))
                                              : (0, i.createCommentVNode)(
                                                  "",
                                                  !0,
                                                ),
                                          ],
                                          2,
                                        ))
                                      : (0, i.createCommentVNode)("", !0),
                                    e.isUploadFailed(t.status)
                                      ? ((0, i.openBlock)(),
                                        (0, i.createElementBlock)(
                                          "div",
                                          {
                                            key: 1,
                                            class: (0, i.normalizeClass)(
                                              e.$style.downloadIcon,
                                            ),
                                            onClick: function (n) {
                                              return e.onRetry(t);
                                            },
                                            "data-name": "upload",
                                            "data-testid": "upload",
                                          },
                                          [
                                            (0, i.createVNode)(s, {
                                              class: "disabled-event",
                                              name: "upload",
                                            }),
                                          ],
                                          10,
                                          Xe,
                                        ))
                                      : (0, i.createCommentVNode)("", !0),
                                  ],
                                  2,
                                )
                              );
                            }),
                            128,
                          ))
                        : ((0, i.openBlock)(),
                          (0, i.createElementBlock)(
                            "div",
                            Ye,
                            (0, i.toDisplayString)(e.$t("blank.default")),
                            1,
                          )),
                    ],
                    2,
                  ),
                ],
                2,
              ),
            ];
          }),
          _: 1,
        },
        8,
        ["buttons", "onClickButton"],
      )
    );
  }
  var $e = n(41680),
    et = n(11108),
    tt = n(75370),
    nt = n(63978),
    ot = n(14393),
    it = n(96440),
    rt = n(23343),
    at = (0, i.defineComponent)({
      name: "ShareFrom",
      components: { Alert: ot.Z },
      props: {
        items: { type: Array, required: !0 },
        receivedCount: { type: Number, default: 1 },
        maxAttachmentCount: { type: Number, default: 5 },
      },
      setup: function (e) {
        var t = this,
          n = [],
          r = (0, i.ref)([]),
          a = e.items.slice(0, 5);
        Promise.all(
          a.map(function (e) {
            return nt.Z.statFile(e.path);
          }),
        )
          .then(function (e) {
            return e.filter(function (e) {
              return e.size;
            });
          })
          .then(function (e) {
            return (
              (r.value = e.map(function (e, t) {
                return {
                  id: Date.now() + t,
                  file: e,
                  progress: 0,
                  status: et.Dm.Waiting,
                  uploadId: 0,
                };
              })),
              e
            );
          })
          .then(function (e) {
            rt.yl(e, null);
          });
        var s = function (e) {
            var t = r.value.find(function (t) {
              return !t.uploadId && t.file.uri === e.target.uri;
            });
            t &&
              ((t.status = e.target.status),
              (t.progress = e.progress.loaded / e.progress.total));
          },
          l = function (t) {
            var o = e.items.find(function (e) {
              return t.target.uri.endsWith(e.path);
            });
            (null === o || void 0 === o ? void 0 : o.isTemp) &&
              nt.Z.deleteFile(o.path, !0);
            var i = r.value.find(function (e) {
              return !e.uploadId && e.file.uri === t.target.uri;
            });
            i &&
              ((i.uploadId = t.target.uploadId),
              (i.progress = t.result ? 100 : 0),
              (i.status = t.target.status),
              t.result ? n.push(t.target.uploadId) : (i.status = et.Dm.Failed));
          };
        ((0, i.onMounted)(function () {
          (M.Z.on(O.KM, s), M.Z.on(O.Av, l));
        }),
          (0, i.onBeforeUnmount)(function () {
            (M.Z.off(O.KM, s), M.Z.off(O.Av, l));
          }));
        var c = function () {
            return r.value.length === n.length;
          },
          u = it.Z.confirmFailedUploads(
            { attachmentUpload: { uploadedAll: c } },
            function (e) {
              d(e);
            },
          ),
          d = function (e) {
            return (0, o.mG)(t, void 0, void 0, function () {
              return (0, o.Jh)(this, function (t) {
                switch (t.label) {
                  case 0:
                    return (
                      M.Z.off(O.KM, s),
                      M.Z.off(O.Av, l),
                      [4, h["default"].closeModal({ action: tt.XL.Confirm })]
                    );
                  case 1:
                    return (
                      t.sent(),
                      0 !== e && b["default"].push({ name: S.q.UserResources }),
                      [2]
                    );
                }
              });
            });
          },
          p = function (e) {
            return e === et.Dm.Uploading;
          },
          m = function (e) {
            return p(e) || f(e);
          },
          f = function (e) {
            return e === et.Dm.Waiting;
          },
          v = function (e) {
            return e === et.Dm.Uploaded;
          },
          g = function (e) {
            return e === et.Dm.Failed;
          },
          C = function (e) {
            return E.kK(e);
          },
          y = function (e) {
            return (0, $e.sv)(e);
          },
          A = function (e) {
            return p(e.status)
              ? Math.floor(100 * e.progress) + "%"
              : Ie["default"].global.t("attachment.waiting");
          },
          w = function (e) {
            rt.LW(e.file, null);
          };
        return {
          onClick: u,
          onRetry: w,
          attachments: r,
          isUploadingOrWaiting: m,
          isWaiting: f,
          isUploaded: v,
          isUploadFailed: g,
          humanizeBytes: C,
          attachmentIcon: y,
          uploadStatus: A,
          uploadedAll: c,
        };
      },
    }),
    st = {
      file: "ShareFileUpload__file-nn0o2",
      fileInfo: "ShareFileUpload__file-info-ILNJw",
      fileName: "ShareFileUpload__file-name-aYyBJ",
      markdownBody: "ShareFileUpload__markdown-body-WmJ9Z",
      loginTypeLogo: "ShareFileUpload__login-type-logo-bbQ6Z",
      loginTemplateTitle: "ShareFileUpload__login-template-title-jyp6B",
      loginTemplateLoginOptions:
        "ShareFileUpload__login-template-loginOptions-Kmmyn",
      modalOnTop: "ShareFileUpload__modal-on-top-u30_7",
      modalWrapper: "ShareFileUpload__modal-wrapper-H8Qp1",
      scIonModalIos: "ShareFileUpload__sc-ion-modal-ios-FwDKM",
      modalFullscreen: "ShareFileUpload__modal-fullscreen-qMpKQ",
      scIonModalIosH: "ShareFileUpload__sc-ion-modal-ios-h-KLX_V",
      modal: "ShareFileUpload__modal-AsQ5S",
      title: "ShareFileUpload__title-_oRbG",
      subTitle: "ShareFileUpload__subTitle-viETw",
      content: "ShareFileUpload__content-PWJmj",
      fileIcon: "ShareFileUpload__file-icon-SsBQf",
      downloadIcon: "ShareFileUpload__download-icon-Fxm9k",
      fileSize: "ShareFileUpload__file-size-bmDuL",
      uploadFailed: "ShareFileUpload__upload-failed-whllY",
      progress: "ShareFileUpload__progress-q4cOe",
      value: "ShareFileUpload__value-UhaSQ",
    };
  const lt = {};
  lt["$style"] = st;
  const ct = (0, I.Z)(at, [
    ["render", Ke],
    ["__cssModules", lt],
  ]);
  var ut = ct,
    dt = n(25108),
    pt = 0,
    mt = 500,
    ft = function () {
      return (0, o.mG)(void 0, void 0, void 0, function () {
        var e, t, n, i, r, a;
        return (0, o.Jh)(this, function (o) {
          switch (o.label) {
            case 0:
              if ("harmonyos" === f.Z.platform) return [2];
              if ("app" !== f.Z.targetPlatform) return [2];
              if (!J.Z.isForeground) return [2];
              if (
                ((e = new Date().getTime()),
                dt.log("time diff:", e - pt),
                e - pt < mt)
              )
                return [2];
              ((pt = e), (t = null), (o.label = 1));
            case 1:
              return (
                o.trys.push([1, 3, , 4]),
                [
                  4,
                  null === (i = window.cordova) || void 0 === i
                    ? void 0
                    : i.openwith.fetchSharedData(),
                ]
              );
            case 2:
              return (
                (t = o.sent()),
                (null === t || void 0 === t ? void 0 : t.text) &&
                  (t.items || (t.items = []),
                  t.items.push({
                    uti: "public.url",
                    uri: "",
                    path: "",
                    text: t.text,
                    utis: ["public.plain-text", "public.file-url"],
                    name: "text",
                    type: "text/plain",
                  })),
                [3, 4]
              );
            case 3:
              return (o.sent(), (t = null), [3, 4]);
            case 4:
              return (
                dt.log(
                  "sharedData?.items?.length: " +
                    (null ===
                      (r = null === t || void 0 === t ? void 0 : t.items) ||
                    void 0 === r
                      ? void 0
                      : r.length),
                ),
                (
                  null ===
                    (a = null === t || void 0 === t ? void 0 : t.items) ||
                  void 0 === a
                    ? void 0
                    : a.length
                )
                  ? qe.Z.checkStoragePermission()
                    ? (t.items.forEach(function (e) {
                        e.path = e.path || e.uri;
                      }),
                      (n = t.items.filter(function (e) {
                        return (
                          e.path &&
                          e.name &&
                          (0, Je.wx)(
                            E.ET.extName(e.name),
                            f.Z.settings.orgSetting.plusSupportedMimeTypes,
                          )
                        );
                      })),
                      n.length
                        ? f.Z.isLogin
                          ? [
                              4,
                              h["default"].showCustomAlert(ut, {
                                items: n,
                                receivedCount: t.receivedCounts,
                                maxAttachmentCount: t.maxAttachmentCount,
                              }),
                            ]
                          : (h["default"].showMessage(
                              Ie["default"].global.t("resource.shareNeedLogin"),
                            ),
                            [2])
                        : (h["default"].showMessage(
                            Ie["default"].global.t(
                              "attachment.notSupportedFormat",
                            ),
                          ),
                          [2]))
                    : [2]
                  : [2]
              );
            case 5:
              return (
                o.sent(),
                t.items.length !== n.length &&
                  h["default"].showMessage(
                    Ie["default"].global.t(
                      "resource.filteredNotSupportedFormat",
                    ),
                  ),
                [2]
              );
          }
        });
      });
    };
  function vt(e, t, n, o, r, a) {
    var s = (0, i.resolveComponent)("ion-backdrop"),
      l = (0, i.resolveComponent)("svg-icon"),
      c = (0, i.resolveComponent)("float-button"),
      u = (0, i.resolveComponent)("StudentDanmuEntrFloat"),
      d = (0, i.resolveComponent)("float-controller"),
      p = (0, i.resolveComponent)("CourseSlideMenu"),
      m = (0, i.resolveDirective)("feature-point");
    return (
      (0, i.openBlock)(),
      (0, i.createElementBlock)(
        i.Fragment,
        null,
        [
          e.showInteractionsMenu
            ? ((0, i.openBlock)(),
              (0, i.createBlock)(
                s,
                { key: 0, onIonBackdropTap: e.interactionMenuToggle },
                null,
                8,
                ["onIonBackdropTap"],
              ))
            : (0, i.createCommentVNode)("", !0),
          e.showFaceRecognition
            ? ((0, i.openBlock)(),
              (0, i.createBlock)(
                c,
                {
                  key: 1,
                  class: (0, i.normalizeClass)(e.$style.faceRecognition),
                  onDragEnd: e.faceRecognitionDragEnd,
                  initPosition: e.dragablePositions["faceRecognition"],
                },
                {
                  default: (0, i.withCtx)(function () {
                    return [
                      (0, i.createVNode)(
                        l,
                        {
                          name: "timer",
                          class: (0, i.normalizeClass)(
                            e.$style.faceRecognitionIcon,
                          ),
                        },
                        null,
                        8,
                        ["class"],
                      ),
                      (0, i.createElementVNode)(
                        "label",
                        {
                          class: (0, i.normalizeClass)(
                            e.$style.faceRecognitionLabel,
                          ),
                        },
                        (0, i.toDisplayString)(e.$tc("popup.faceDetection")),
                        3,
                      ),
                      (0, i.createElementVNode)(
                        "label",
                        {
                          class: (0, i.normalizeClass)(
                            e.$style.faceRecognitionTimes,
                          ),
                        },
                        (0, i.toDisplayString)(e.faceRecognitionTimes),
                        3,
                      ),
                    ];
                  }),
                  _: 1,
                },
                8,
                ["class", "onDragEnd", "initPosition"],
              ))
            : (0, i.createCommentVNode)("", !0),
          (0, i.createVNode)(u),
          e.showFloatButton
            ? ((0, i.openBlock)(),
              (0, i.createBlock)(
                c,
                {
                  key: 2,
                  onDragEnd: e.floatButtonDragEnd,
                  onClick: e.interactionMenuToggle,
                  "data-testid": "floatButton",
                  class: (0, i.normalizeClass)(e.$style.floatButton),
                  initPosition: e.dragablePositions["floatButton"],
                  "data-status": e.inClassCastManager.state.status,
                },
                {
                  default: (0, i.withCtx)(function () {
                    return [
                      "connected" === e.inClassCastManager.state.status
                        ? ((0, i.openBlock)(),
                          (0, i.createBlock)(l, { key: 0, name: "cast" }))
                        : ((0, i.openBlock)(),
                          (0, i.createBlock)(
                            l,
                            {
                              key: 1,
                              name: "float-action",
                              class: (0, i.normalizeClass)(
                                e.$style.floatAction,
                              ),
                            },
                            null,
                            8,
                            ["class"],
                          )),
                    ];
                  }),
                  _: 1,
                },
                8,
                [
                  "onDragEnd",
                  "onClick",
                  "class",
                  "initPosition",
                  "data-status",
                ],
              ))
            : (0, i.createCommentVNode)("", !0),
          e.inClassPagerController.showPager.value
            ? ((0, i.openBlock)(),
              (0, i.createBlock)(
                d,
                {
                  key: 3,
                  "data-testid": "floatController",
                  onDragEnd: e.floatControllerDragEnd,
                  initPosition: e.dragablePositions["floatController"],
                },
                {
                  top: (0, i.withCtx)(function () {
                    return [
                      (0, i.createElementVNode)(
                        "div",
                        {
                          class: (0, i.normalizeClass)([
                            e.$style.top,
                            e.$style.pager,
                          ]),
                          onTouchstartPassive:
                            t[0] ||
                            (t[0] = function (t) {
                              return e.inClassPagerController.page("prev");
                            }),
                          onTouchendPassive:
                            t[1] ||
                            (t[1] = function () {
                              for (
                                var t, n = [], o = 0;
                                o < arguments.length;
                                o++
                              )
                                n[o] = arguments[o];
                              return (
                                e.inClassPagerController.pageStop &&
                                (t = e.inClassPagerController).pageStop.apply(
                                  t,
                                  n,
                                )
                              );
                            }),
                        },
                        [(0, i.createVNode)(l, { name: "arrow-forward" })],
                        34,
                      ),
                    ];
                  }),
                  bottom: (0, i.withCtx)(function () {
                    return [
                      (0, i.createElementVNode)(
                        "div",
                        {
                          class: (0, i.normalizeClass)([
                            e.$style.bottom,
                            e.$style.pager,
                          ]),
                          onTouchstartPassive:
                            t[2] ||
                            (t[2] = function (t) {
                              return e.inClassPagerController.page("next");
                            }),
                          onTouchendPassive:
                            t[3] ||
                            (t[3] = function () {
                              for (
                                var t, n = [], o = 0;
                                o < arguments.length;
                                o++
                              )
                                n[o] = arguments[o];
                              return (
                                e.inClassPagerController.pageStop &&
                                (t = e.inClassPagerController).pageStop.apply(
                                  t,
                                  n,
                                )
                              );
                            }),
                        },
                        [(0, i.createVNode)(l, { name: "arrow-forward" })],
                        34,
                      ),
                    ];
                  }),
                  _: 1,
                },
                8,
                ["onDragEnd", "initPosition"],
              ))
            : (0, i.createCommentVNode)("", !0),
          e.showFloatButton
            ? (0, i.withDirectives)(
                ((0, i.openBlock)(),
                (0, i.createElementBlock)(
                  "div",
                  {
                    key: 4,
                    class: (0, i.normalizeClass)(e.$style.menu),
                    ref: "menuRef",
                  },
                  [
                    (0, i.createElementVNode)(
                      "div",
                      { class: (0, i.normalizeClass)(e.$style.wrapper) },
                      [
                        (0, i.withDirectives)(
                          ((0, i.openBlock)(),
                          (0, i.createElementBlock)(
                            "div",
                            {
                              class: (0, i.normalizeClass)(
                                e.$style.castSection,
                              ),
                            },
                            [
                              "init" === e.inClassCastManager.state.status
                                ? ((0, i.openBlock)(),
                                  (0, i.createElementBlock)(
                                    "div",
                                    {
                                      key: 0,
                                      class: (0, i.normalizeClass)(
                                        e.$style.castBtn,
                                      ),
                                      onClick:
                                        t[4] ||
                                        (t[4] = function () {
                                          for (
                                            var t = [], n = 0;
                                            n < arguments.length;
                                            n++
                                          )
                                            t[n] = arguments[n];
                                          return (
                                            e.castHandler &&
                                            e.castHandler.apply(e, t)
                                          );
                                        }),
                                      "data-testid": "inClassCast",
                                    },
                                    [
                                      (0, i.createElementVNode)(
                                        "div",
                                        {
                                          class: (0, i.normalizeClass)(
                                            e.$style.icon,
                                          ),
                                        },
                                        [
                                          (0, i.createVNode)(l, {
                                            name: "cast",
                                          }),
                                        ],
                                        2,
                                      ),
                                      (0, i.createElementVNode)(
                                        "div",
                                        {
                                          class: (0, i.normalizeClass)(
                                            e.$style.castStatus,
                                          ),
                                        },
                                        (0, i.toDisplayString)(
                                          e.$t("inclass.cast"),
                                        ),
                                        3,
                                      ),
                                    ],
                                    2,
                                  ))
                                : (0, i.createCommentVNode)("", !0),
                              "loading" === e.inClassCastManager.state.status
                                ? ((0, i.openBlock)(),
                                  (0, i.createElementBlock)(
                                    "div",
                                    {
                                      key: 1,
                                      class: (0, i.normalizeClass)([
                                        e.$style.castBtn,
                                        e.$style.loading,
                                      ]),
                                      onClick:
                                        t[5] ||
                                        (t[5] = function () {
                                          for (
                                            var t = [], n = 0;
                                            n < arguments.length;
                                            n++
                                          )
                                            t[n] = arguments[n];
                                          return (
                                            e.castHandler &&
                                            e.castHandler.apply(e, t)
                                          );
                                        }),
                                      "data-testid": "inClassCast",
                                    },
                                    [
                                      (0, i.createElementVNode)(
                                        "div",
                                        {
                                          class: (0, i.normalizeClass)(
                                            e.$style.icon,
                                          ),
                                        },
                                        [
                                          (0, i.createVNode)(l, {
                                            name: "loading",
                                          }),
                                        ],
                                        2,
                                      ),
                                      (0, i.createElementVNode)(
                                        "div",
                                        {
                                          class: (0, i.normalizeClass)(
                                            e.$style.castStatus,
                                          ),
                                        },
                                        (0, i.toDisplayString)(
                                          e.$t("inclass.connecting"),
                                        ),
                                        3,
                                      ),
                                    ],
                                    2,
                                  ))
                                : (0, i.createCommentVNode)("", !0),
                              "connected" === e.inClassCastManager.state.status
                                ? ((0, i.openBlock)(),
                                  (0, i.createElementBlock)(
                                    "div",
                                    {
                                      key: 2,
                                      class: (0, i.normalizeClass)([
                                        e.$style.castBtn,
                                        e.$style.connected,
                                      ]),
                                      onClick:
                                        t[6] ||
                                        (t[6] = function () {
                                          for (
                                            var t = [], n = 0;
                                            n < arguments.length;
                                            n++
                                          )
                                            t[n] = arguments[n];
                                          return (
                                            e.castHandler &&
                                            e.castHandler.apply(e, t)
                                          );
                                        }),
                                      "data-testid": "inClassCast",
                                    },
                                    [
                                      (0, i.createElementVNode)(
                                        "div",
                                        {
                                          class: (0, i.normalizeClass)(
                                            e.$style.icon,
                                          ),
                                        },
                                        [
                                          (0, i.createVNode)(l, {
                                            name: "cast-exit",
                                          }),
                                        ],
                                        2,
                                      ),
                                      (0, i.createElementVNode)(
                                        "div",
                                        {
                                          class: (0, i.normalizeClass)(
                                            e.$style.castStatus,
                                          ),
                                        },
                                        (0, i.toDisplayString)(
                                          e.$t("inclass.exitCast"),
                                        ),
                                        3,
                                      ),
                                    ],
                                    2,
                                  ))
                                : (0, i.createCommentVNode)("", !0),
                            ],
                            2,
                          )),
                          [
                            [
                              m,
                              { featurePoint: "course:float:button:inclass" },
                            ],
                          ],
                        ),
                        (0, i.createVNode)(p),
                      ],
                      2,
                    ),
                  ],
                  2,
                )),
                [[i.vShow, e.showInteractionsMenu]],
              )
            : (0, i.createCommentVNode)("", !0),
        ],
        64,
      )
    );
  }
  var gt = n(8009),
    ht = n(95236);
  function Ct(e, t, n, o, r, a) {
    return (
      (0, i.openBlock)(),
      (0, i.createElementBlock)(
        "div",
        {
          class: (0, i.normalizeClass)(e.$style.floatBtn),
          ref: "floatBtn",
          "data-testid": "floatContainer",
          onClick:
            t[0] ||
            (t[0] = function () {
              for (var t = [], n = 0; n < arguments.length; n++)
                t[n] = arguments[n];
              return e.floatBtnClick && e.floatBtnClick.apply(e, t);
            }),
        },
        [(0, i.renderSlot)(e.$slots, "default", {}, void 0, !0)],
        2,
      )
    );
  }
  var yt = n(25108),
    At = (0, i.defineComponent)({
      name: "FloatingButton",
      components: {},
      props: { initPosition: Object },
      emits: ["dragEnd", "click"],
      setup: function (e, t) {
        var n = t.emit,
          o = (0, i.ref)();
        (0, i.onMounted)(function () {
          if (o.value) {
            var t = o.value,
              i = {
                x: document.body.clientWidth,
                y: document.body.clientHeight - 340,
              };
            (0, ke.O1)(
              document.body,
              t,
              e.initPosition || i,
              "noDrag",
              0,
              function (e, t) {
                n("dragEnd", e, t);
              },
            );
          }
        });
        var r = function (e) {
          (yt.log("event", e), n("click"));
        };
        return { floatBtn: o, floatBtnClick: r };
      },
    }),
    wt = {
      markdownBody: "float-button__markdown-body-AkzIn",
      loginTypeLogo: "float-button__login-type-logo-vTYjy",
      loginTemplateTitle: "float-button__login-template-title-G1PbF",
      loginTemplateLoginOptions:
        "float-button__login-template-loginOptions-s_Erq",
      modalOnTop: "float-button__modal-on-top-rpGSf",
      modalWrapper: "float-button__modal-wrapper-tstAe",
      scIonModalIos: "float-button__sc-ion-modal-ios-KFbrg",
      modalFullscreen: "float-button__modal-fullscreen-tTBuk",
      scIonModalIosH: "float-button__sc-ion-modal-ios-h-kTatX",
      floatBtn: "float-button__floatBtn-LWz8T",
    };
  const bt = {};
  bt["$style"] = wt;
  const Et = (0, I.Z)(At, [
    ["render", Ct],
    ["__cssModules", bt],
    ["__scopeId", "data-v-6a6f71e8"],
  ]);
  var St = Et;
  function Tt(e, t, n, o, r, a) {
    var s = (0, i.resolveComponent)("svg-icon");
    return (
      (0, i.openBlock)(),
      (0, i.createElementBlock)(
        "div",
        {
          class: (0, i.normalizeClass)(e.$style.container),
          ref: "containerRef",
        },
        [
          (0, i.renderSlot)(e.$slots, "top"),
          (0, i.createElementVNode)(
            "div",
            {
              class: (0, i.normalizeClass)([
                [e.$style.handle, e.$style.left],
                "noDrag",
              ]),
              ref: "leftResizerRef",
              "data-testid": "leftResizer",
            },
            [(0, i.createVNode)(s, { name: "drag-handle" })],
            2,
          ),
          (0, i.renderSlot)(e.$slots, "center"),
          (0, i.createElementVNode)(
            "div",
            {
              class: (0, i.normalizeClass)([
                [e.$style.handle, e.$style.right],
                "noDrag",
              ]),
              ref: "rightResizerRef",
            },
            [(0, i.createVNode)(s, { name: "drag-handle" })],
            2,
          ),
          (0, i.renderSlot)(e.$slots, "bottom"),
        ],
        2,
      )
    );
  }
  var _t = (0, i.defineComponent)({
      name: "FloatingController",
      props: { initPosition: Object },
      setup: function (e, t) {
        var n = t.emit,
          o = (0, i.ref)(),
          r = (0, i.ref)(),
          a = (0, i.ref)();
        return (
          (0, i.onMounted)(function () {
            if (o.value && r.value && a.value) {
              var t = 16,
                i = {
                  x: document.body.clientWidth,
                  y: document.body.clientHeight - 500,
                },
                s = (0, ke.O1)(
                  document.body,
                  o.value,
                  e.initPosition || i,
                  "noDrag",
                  t,
                  function (e, t) {
                    n("dragEnd", e, t);
                  },
                ),
                l = function (e, t) {
                  t
                    ? s.calcStopPosition(
                        e.deltaX < 0 ? ke.eG.left : ke.eG.right,
                      )
                    : s.calcStopPosition();
                };
              ((0, ke.ow)(
                o.value,
                r.value,
                t,
                -1,
                function (e) {
                  return s.move(e.deltaX, 0);
                },
                l,
              ),
                (0, ke.ow)(o.value, a.value, t, 1, Be().noop, l));
            }
          }),
          { containerRef: o, leftResizerRef: r, rightResizerRef: a }
        );
      },
    }),
    It = {
      markdownBody: "float-controller__markdown-body-xZeaN",
      loginTypeLogo: "float-controller__login-type-logo-XdeJV",
      loginTemplateTitle: "float-controller__login-template-title-eLjAG",
      loginTemplateLoginOptions:
        "float-controller__login-template-loginOptions-OeI87",
      modalOnTop: "float-controller__modal-on-top-rdPEf",
      modalWrapper: "float-controller__modal-wrapper-af20e",
      scIonModalIos: "float-controller__sc-ion-modal-ios-T_aC5",
      modalFullscreen: "float-controller__modal-fullscreen-x0kF2",
      scIonModalIosH: "float-controller__sc-ion-modal-ios-h-sCMql",
      container: "float-controller__container-cJnkh",
      handle: "float-controller__handle-Bt1zR",
      left: "float-controller__left-rSYJj",
      right: "float-controller__right-s9C7l",
    };
  const Lt = {};
  Lt["$style"] = It;
  const kt = (0, I.Z)(_t, [
    ["render", Tt],
    ["__cssModules", Lt],
  ]);
  var Pt = kt,
    Bt = n(60688),
    Rt = n(59109),
    xt = n(29511),
    Ot = n(73995),
    Mt = n(27954);
  function Vt(e, t, n, o, r, a) {
    var s = (0, i.resolveComponent)("svg-icon"),
      l = (0, i.resolveComponent)("float-button");
    return e.visible
      ? ((0, i.openBlock)(),
        (0, i.createBlock)(
          l,
          {
            key: 0,
            onDragEnd: e.studentDanmuEntrDragEnd,
            onClick: e.studentDanmuEntrClick,
            class: (0, i.normalizeClass)(e.$style.studentDanmuEntr),
            "data-testid": "student-danmu-entr",
            initPosition: e.dragablePositions["studentDanmuEntr"],
          },
          {
            default: (0, i.withCtx)(function () {
              return [
                (0, i.createVNode)(
                  s,
                  {
                    name: "danmu-item",
                    class: (0, i.normalizeClass)(
                      e.$style.studentDanmuEntrAction,
                    ),
                  },
                  null,
                  8,
                  ["class"],
                ),
              ];
            }),
            _: 1,
          },
          8,
          ["onDragEnd", "onClick", "class", "initPosition"],
        ))
      : (0, i.createCommentVNode)("", !0);
  }
  var Nt = n(77535),
    Dt = n(28339),
    Zt = n(59852),
    Ut = n(4053),
    Ht = (0, i.defineComponent)({
      components: { FloatButton: St },
      setup: function () {
        var e = (0, Dt.yj)(),
          t = (0, Dt.tv)(),
          n = f.Z.settings.dragablePositions,
          o = (0, gt.ol)([m.lr]),
          r = m.lr,
          a = o[r],
          s = function (e) {
            ((f.Z.settings.dragablePositions.studentDanmuEntr = e), a(f.Z));
          },
          l = (0, Zt.b)(e.params.courseId),
          c = l.ongoingActivity,
          u = l.setOngoingActivity,
          d = function () {
            t.push({ name: S.q.CourseDanmu });
          },
          p = (0, ke.xt)().isInstructor,
          v = function (e) {
            e.type === Nt.Az.EXIT && u(Ut.Du.Danmu, !1);
          };
        ((0, i.onMounted)(function () {
          (M.Z.on(O.A2, v), M.Z.on(O.LF, v));
        }),
          (0, i.onBeforeUnmount)(function () {
            (M.Z.off(O.A2, v), M.Z.off(O.LF, v));
          }));
        var g = [
            S.q.RaceAnswerSetUp,
            S.q.RaceAnswerStart,
            S.q.StudentRaceAnswer,
            S.q.SelectStudentNew,
            S.q.SelectStudentRandom,
            S.q.SelectStudentManual,
            S.q.SelectStudentResult,
            S.q.FeedbackActivityNew,
            S.q.ClassroomExamEntry,
            S.q.ClassroomExamPaper,
            S.q.ClassroomExamPaperSummary,
            S.q.ClassroomExamPaperStatistics,
            S.q.RollcallNew,
            S.q.NumberRollcall,
            S.q.NewNumberRollcall,
            S.q.SelfRegistrationRollcall,
            S.q.NewSelfRegistrationRollcall,
            S.q.NewRadarRollcall,
            S.q.RadarRollcall,
            S.q.RollcallEdit,
            S.q.CourseVote,
            S.q.CourseVoteResult,
            S.q.CourseVoteCreator,
            S.q.CourseVoteOptionResult,
            S.q.CourseDanmu,
          ],
          h = (0, i.computed)(function () {
            return (
              !p.value && Boolean(c.value[Ut.Du.Danmu]) && !g.includes(e.name)
            );
          });
        return {
          visible: h,
          dragablePositions: n,
          studentDanmuEntrDragEnd: s,
          studentDanmuEntrClick: d,
        };
      },
    }),
    Ft = {
      markdownBody: "StudentEntrFloat__markdown-body-Rlk_1",
      loginTypeLogo: "StudentEntrFloat__login-type-logo-jJKJM",
      loginTemplateTitle: "StudentEntrFloat__login-template-title-eaKSY",
      loginTemplateLoginOptions:
        "StudentEntrFloat__login-template-loginOptions-jR78r",
      modalOnTop: "StudentEntrFloat__modal-on-top-vlbz6",
      modalWrapper: "StudentEntrFloat__modal-wrapper-Qm_rB",
      scIonModalIos: "StudentEntrFloat__sc-ion-modal-ios-fv_wB",
      modalFullscreen: "StudentEntrFloat__modal-fullscreen-faV84",
      scIonModalIosH: "StudentEntrFloat__sc-ion-modal-ios-h-l73cR",
      studentDanmuEntr: "StudentEntrFloat__studentDanmuEntr-m9rxc",
      studentDanmuEntrAction: "StudentEntrFloat__studentDanmuEntrAction-lqatp",
    };
  const Gt = {};
  Gt["$style"] = Ft;
  const zt = (0, I.Z)(Ht, [
    ["render", Vt],
    ["__cssModules", Gt],
  ]);
  var Qt = zt,
    jt = n(77555),
    qt = (n(26833), n(32571)),
    Jt = n(71329),
    Wt = n(63375),
    Xt = n(83307),
    Yt = function () {
      var e = function () {
          return {
            rollCall: (0, Rt.T)(xt.k.COURSE_FLOAT_BUTTON_ROLLCALL),
            selectStudent:
              (0, Rt.T)(xt.k.COURSE_INTERACTION_SELECT_STUDENT_RANDOM) ||
              (0, Rt.T)(xt.k.COURSE_INTERACTION_SELECT_STUDENT_RANDOM_GROUP) ||
              (0, Rt.T)(xt.k.COURSE_INTERACTION_SELECT_STUDENT_MANUAL),
            danMu: (0, Rt.T)(xt.k.COURSE_FLOAT_BUTTON_DANMU),
            raceAnswer: (0, Rt.T)(xt.k.COURSE_FLOAT_BUTTON_RACE_ANSWER),
            classroom: (0, Rt.T)(xt.k.COURSE_FLOAT_BUTTON_CLASSROOM_EXAM),
            feedback: (0, Rt.T)(xt.k.COURSE_FLOAT_BUTTON_FEEDBACK),
            vote: (0, Rt.T)(xt.k.COURSE_FLOAT_BUTTON_VOTE),
          };
        },
        t = function () {
          var t = e();
          return Object.values(t).some(function (e) {
            return !0 === e;
          });
        };
      return { getPermissionMap: e, showSideMenu: t };
    },
    Kt = function (e) {
      var t,
        n,
        r = (0, Jt.Xm)(),
        a = (0, ke.xt)().courseInfo,
        s = Yt().getPermissionMap,
        l = function () {
          return (0, o.mG)(void 0, void 0, void 0, function () {
            var t, n;
            return (0, o.Jh)(this, function (o) {
              switch (o.label) {
                case 0:
                  return ((t = (0, qt.p$)().verifyRollcall), [4, t()]);
                case 1:
                  return o.sent()
                    ? ((n =
                        (!a.value.importedFrom ||
                          r.value.enableImportedCourseCreateRollcall) &&
                        (0, Rt.T)(xt.k.COURSE_ROLLCALL_CREATE)),
                      n
                        ? b["default"].push({
                            name: S.q.RollcallNew,
                            params: { courseId: e },
                          })
                        : b["default"].push({
                            name: S.q.RollcallList,
                            params: { courseId: e },
                          }),
                      [2])
                    : [2];
              }
            });
          });
        },
        c = function () {
          return (0, o.mG)(void 0, void 0, void 0, function () {
            var t, n, i;
            return (0, o.Jh)(this, function (o) {
              switch (o.label) {
                case 0:
                  return [4, h["default"].showLoading()];
                case 1:
                  return ((t = o.sent()), [4, (0, Wt.t$)(Number(e))]);
                case 2:
                  return (
                    (n = o.sent()),
                    t.dismiss(),
                    n.isOngoing
                      ? [
                          4,
                          h["default"].showMessage(
                            Ie["default"].global.t("raceAnswer.ongoing"),
                          ),
                        ]
                      : [3, 5]
                  );
                case 3:
                  return ((i = o.sent()), [4, i.onDidDismiss()]);
                case 4:
                  return (
                    o.sent(),
                    b["default"].push({
                      name: S.q.RaceAnswerStart,
                      params: { courseId: e, interactionId: String(n.id) },
                    }),
                    [3, 6]
                  );
                case 5:
                  (b["default"].push({
                    name: S.q.RaceAnswerSetUp,
                    params: { courseId: e },
                  }),
                    (o.label = 6));
                case 6:
                  return [2];
              }
            });
          });
        },
        u = function () {
          return (0, o.mG)(void 0, void 0, void 0, function () {
            var t, n, i, r;
            return (0, o.Jh)(this, function (o) {
              switch (o.label) {
                case 0:
                  return [4, h["default"].showLoading()];
                case 1:
                  return ((t = o.sent()), [4, (0, Wt.p6)(Number(e))]);
                case 2:
                  return (
                    (n = o.sent()),
                    t.dismiss(),
                    n
                      ? [
                          4,
                          h["default"].showMessage(
                            Ie["default"].global.t("vote.haveVoteInProgress"),
                          ),
                        ]
                      : [3, 5]
                  );
                case 3:
                  return ((i = o.sent()), [4, i.onDidDismiss()]);
                case 4:
                  return (
                    o.sent(),
                    b["default"].push({
                      name: S.q.CourseVote,
                      params: { courseId: e, voteId: n.id.toString() },
                    }),
                    [2]
                  );
                case 5:
                  return (
                    (r = (0, Rt.T)(xt.k.COURSE_INTERACTION_VOTE_CREATE)),
                    r
                      ? (b["default"].push({
                          name: S.q.CourseVoteCreator,
                          params: { courseId: e },
                        }),
                        [2])
                      : (b["default"].push({
                          name: S.q.Interactions,
                          params: { courseId: e },
                        }),
                        [2])
                  );
              }
            });
          });
        },
        d = (0, i.ref)([]),
        p = [
          {
            label: "interaction.rollcall",
            type: "rollcall",
            icon: "rollcall-item",
            key: "rollCall",
            click: l,
          },
          {
            label: "interaction.selectStudent",
            type: "selection",
            icon: "select-student-item",
            key: "selectStudent",
            hide:
              null === (t = window.APPRuntime.FEATURE_TOGGLE) || void 0 === t
                ? void 0
                : t.askQuestion,
            routeRaw: { name: S.q.SelectStudentNew, params: { courseId: e } },
          },
          {
            label: "interaction.askQuestion",
            type: "selection",
            icon: "ask-question-item",
            key: "selectStudent",
            hide: !(null === (n = window.APPRuntime.FEATURE_TOGGLE) ||
            void 0 === n
              ? void 0
              : n.askQuestion),
            routeRaw: { name: S.q.AskQuestionCreate, params: { courseId: e } },
          },
          {
            label: "danmu.title",
            type: "danmu",
            icon: "danmu-item",
            key: "danMu",
            routeRaw: { name: S.q.CourseDanmu, params: { courseId: e } },
          },
          {
            label: "interaction.raceAnswer",
            type: "raceAnswer",
            icon: "race-answer-item",
            key: "raceAnswer",
            click: c,
          },
          {
            label: "interaction.classroom",
            type: "classroom",
            icon: "quiz-item",
            key: "classroom",
            routeRaw: { name: "classroomExamEntry", params: { courseId: e } },
          },
          {
            label: "interaction.feedback",
            type: "feedback",
            icon: "feedback-item",
            key: "feedback",
            routeRaw: {
              name: S.q.FeedbackActivityNew,
              params: { courseId: e },
            },
          },
          {
            label: "vote.title",
            type: "vote",
            icon: "vote-item",
            key: "vote",
            click: u,
          },
        ],
        m = function () {
          var e = s(),
            t = p.filter(function (t) {
              return !t.hide && e[t.key];
            });
          d.value = (0, Xt.$)().sortSideMenus(t);
        },
        f = (0, i.computed)(function () {
          return d.value.some(function (e) {
            return e.icon;
          });
        });
      return { sideMenus: d, showSideIcon: f, initSideMenus: m };
    },
    $t = n(8802),
    en = ["data-testId"],
    tn = (0, i.defineComponent)({
      __name: "SideMenuItem",
      props: { menu: {}, iconDisplay: { type: Boolean, default: !0 } },
      emits: ["click"],
      setup: function (e, t) {
        var n = t.emit,
          o = e,
          r = (0, $t.QT)(),
          a = (0, Dt.tv)(),
          s = (0, i.computed)(function () {
            return o.menu.withoutI18n ? o.menu.label : r.t(o.menu.label);
          }),
          l = function () {
            "function" !== typeof o.menu.click
              ? o.menu.routeRaw
                ? a.push(o.menu.routeRaw)
                : n("click")
              : o.menu.click();
          };
        return function (e, t) {
          var n = (0, i.resolveComponent)("svg-icon");
          return (
            (0, i.openBlock)(),
            (0, i.createElementBlock)(
              "div",
              {
                "data-testId": e.menu.type,
                class: (0, i.normalizeClass)(e.$style.item),
                onClick: l,
              },
              [
                e.iconDisplay
                  ? ((0, i.openBlock)(),
                    (0, i.createElementBlock)(
                      "div",
                      { key: 0, class: (0, i.normalizeClass)(e.$style.icon) },
                      [
                        e.menu.icon
                          ? ((0, i.openBlock)(),
                            (0, i.createBlock)(
                              n,
                              { key: 0, name: e.menu.icon },
                              null,
                              8,
                              ["name"],
                            ))
                          : (0, i.createCommentVNode)("", !0),
                      ],
                      2,
                    ))
                  : (0, i.createCommentVNode)("", !0),
                (0, i.createElementVNode)(
                  "div",
                  { class: (0, i.normalizeClass)(e.$style.name) },
                  (0, i.toDisplayString)(s.value),
                  3,
                ),
              ],
              10,
              en,
            )
          );
        };
      },
    }),
    nn = {
      markdownBody: "SideMenuItem__markdown-body-afvWD",
      loginTypeLogo: "SideMenuItem__login-type-logo-JYE6K",
      loginTemplateTitle: "SideMenuItem__login-template-title-EUl6P",
      loginTemplateLoginOptions:
        "SideMenuItem__login-template-loginOptions-u7qwf",
      modalOnTop: "SideMenuItem__modal-on-top-P69lC",
      modalWrapper: "SideMenuItem__modal-wrapper-mwVi3",
      scIonModalIos: "SideMenuItem__sc-ion-modal-ios-UrdAv",
      modalFullscreen: "SideMenuItem__modal-fullscreen-f561l",
      scIonModalIosH: "SideMenuItem__sc-ion-modal-ios-h-bLOiJ",
      item: "SideMenuItem__item-OU4ls",
      icon: "SideMenuItem__icon-mYLHZ",
      name: "SideMenuItem__name-W87vL",
    };
  const on = {};
  on["$style"] = nn;
  const rn = (0, I.Z)(tn, [["__cssModules", on]]);
  var an = rn,
    sn = (0, i.defineComponent)(
      (0, o.pi)(
        { name: "CourseSideMenu" },
        {
          __name: "index",
          setup: function (e) {
            var t = (0, Dt.yj)(),
              n = t.params.courseId,
              o = Kt(n),
              r = o.initSideMenus,
              a = o.sideMenus,
              s = o.showSideIcon;
            return (
              r(),
              function (e, t) {
                return (
                  (0, i.openBlock)(),
                  (0, i.createElementBlock)(
                    "div",
                    { class: (0, i.normalizeClass)(e.$style.list) },
                    [
                      ((0, i.openBlock)(!0),
                      (0, i.createElementBlock)(
                        i.Fragment,
                        null,
                        (0, i.renderList)((0, i.unref)(a), function (e, t) {
                          return (
                            (0, i.openBlock)(),
                            (0, i.createBlock)(
                              an,
                              {
                                key: "".concat(t, "-").concat(e.type),
                                menu: e,
                                "icon-display": (0, i.unref)(s),
                              },
                              null,
                              8,
                              ["menu", "icon-display"],
                            )
                          );
                        }),
                        128,
                      )),
                    ],
                    2,
                  )
                );
              }
            );
          },
        },
      ),
    ),
    ln = {
      markdownBody: "index__markdown-body-qtnBF",
      loginTypeLogo: "index__login-type-logo-CU7Zj",
      loginTemplateTitle: "index__login-template-title-VvREg",
      loginTemplateLoginOptions: "index__login-template-loginOptions-DRlCx",
      modalOnTop: "index__modal-on-top-igNbr",
      modalWrapper: "index__modal-wrapper-yx1o1",
      scIonModalIos: "index__sc-ion-modal-ios-LFUzp",
      modalFullscreen: "index__modal-fullscreen-GYfiT",
      scIonModalIosH: "index__sc-ion-modal-ios-h-U2QvG",
      list: "index__list-sQwbb",
    };
  const cn = {};
  cn["$style"] = ln;
  const un = (0, I.Z)(sn, [["__cssModules", cn]]);
  var dn = un,
    pn = (0, gt._p)(m.VH.NAME),
    mn = pn.useMutations,
    fn = pn.useActions,
    vn = 0,
    gn = (0, i.defineComponent)({
      name: "CourseLayer",
      inheritAttrs: !1,
      components: {
        FloatButton: St,
        FloatController: Pt,
        StudentDanmuEntrFloat: Qt,
        CourseSlideMenu: dn,
      },
      setup: function () {
        var e = (0, Dt.yj)(),
          t = Number(e.params.courseId || 0),
          n = (0, gt.eJ)(Ot["default"], ["featureToggle"]).featureToggle,
          o = mn([m.VH.SET_CURRENT_COURSE]),
          r = m.VH.SET_CURRENT_COURSE,
          a = o[r],
          s = fn([m.VH.PUT_RECENT_VISIT]),
          l = m.VH.PUT_RECENT_VISIT,
          c = s[l];
        (a(t), t && t !== vn && (c(t), (vn = t)));
        var u,
          d = (0, gt.ol)([m.lr]),
          p = m.lr,
          g = d[p],
          h = (0, i.ref)(!1),
          C = (0, i.ref)(!1),
          y = Bt.xR.hook(),
          A = (0, Bt.G9)(Bt.xR),
          w = "13rem",
          b = Yt().showSideMenu,
          E = (0, i.computed)(function () {
            return b() || (0, Rt.T)(xt.k.COURSE_FLOAT_BUTTON_INCLASS);
          }),
          T = function () {
            switch (Bt.xR.state.status) {
              case Bt.Ue.init:
                (Bt.xR.connect(t), v.KeepScreenOn.enable());
                try {
                  (0, Mt._j)(t);
                } catch (o) {}
                break;
              case Bt.Ue.connected:
                var e = (0, jt.rV)(t).finishDanmu;
                (v.KeepScreenOn.disable(), Bt.xR.exit());
                try {
                  (e(), (0, Mt.AI)(t));
                } catch (r) {}
                break;
            }
          },
          _ = (0, i.ref)(null),
          I = function () {
            var e = (0, ht.ih)().addElement(_.value).duration(200);
            (u === ke.eG.left
              ? e.fromTo(
                  "transform",
                  "translateX(-".concat(w, ")"),
                  "translateX(0)",
                )
              : e.fromTo(
                  "transform",
                  "translateX(100vw)",
                  "translateX(calc(100vw - ".concat(w, "))"),
                ),
              h.value || e.play(),
              (h.value = !h.value));
          };
        (0, i.watch)(
          function () {
            return e.name || "";
          },
          function (e) {
            var t = [
              S.q.RaceAnswerSetUp,
              S.q.RaceAnswerStart,
              S.q.StudentRaceAnswer,
              S.q.SelectStudentNew,
              S.q.SelectStudentRandom,
              S.q.SelectStudentManual,
              S.q.SelectStudentResult,
              S.q.FeedbackActivityNew,
              S.q.ClassroomExamEntry,
              S.q.ClassroomExamPaper,
              S.q.ClassroomExamPaperSummary,
              S.q.ClassroomExamPaperStatistics,
              S.q.RollcallNew,
              S.q.NumberRollcall,
              S.q.NewNumberRollcall,
              S.q.SelfRegistrationRollcall,
              S.q.NewSelfRegistrationRollcall,
              S.q.NewRadarRollcall,
              S.q.RadarRollcall,
              S.q.RollcallEdit,
              S.q.CourseVote,
              S.q.CourseVoteResult,
              S.q.CourseVoteCreator,
              S.q.CourseVoteOptionResult,
              S.q.CourseDanmu,
            ];
            (h.value && I(), t.includes(e) ? (C.value = !0) : (C.value = !1));
          },
          { deep: !0, immediate: !0 },
        );
        var L = (0, i.computed)(function () {
            return !C.value && E.value;
          }),
          k = (0, i.ref)(null),
          P = f.Z.settings.dragablePositions,
          B = function (e, t) {
            ((u = t), (f.Z.settings.dragablePositions.floatButton = e), g(f.Z));
          },
          R = function (e) {
            ((f.Z.settings.dragablePositions.faceRecognition = e), g(f.Z));
          },
          x = function (e, t) {
            ((f.Z.settings.dragablePositions.floatController = e), g(f.Z));
          },
          O = (0, i.ref)(!1),
          M = (0, i.ref)(""),
          V = (0, ke.YT)().openEndModal;
        return (
          V(),
          {
            PageName: S.q,
            FeaturePointEnum: xt.k,
            faceRecognitionDragEnd: R,
            floatButtonDragEnd: B,
            floatControllerDragEnd: x,
            dragablePositions: P,
            castState: y,
            hasSidebarPermission: E,
            showInteractionsMenu: h,
            interactionMenuToggle: I,
            castHandler: T,
            menuRef: _,
            buttonRef: k,
            inClassCastManager: Bt.xR,
            inClassPagerController: A,
            showFloatButton: L,
            featureToggle: n,
            showFaceRecognition: O,
            faceRecognitionTimes: M,
          }
        );
      },
    }),
    hn = {
      markdownBody: "CourseLayer__markdown-body-Y23G4",
      loginTypeLogo: "CourseLayer__login-type-logo-xUXMJ",
      loginTemplateTitle: "CourseLayer__login-template-title-w9jcX",
      loginTemplateLoginOptions:
        "CourseLayer__login-template-loginOptions-SCTSV",
      modalOnTop: "CourseLayer__modal-on-top-DLmN3",
      modalWrapper: "CourseLayer__modal-wrapper-iaxRJ",
      scIonModalIos: "CourseLayer__sc-ion-modal-ios-zj3m0",
      modalFullscreen: "CourseLayer__modal-fullscreen-_ysxb",
      scIonModalIosH: "CourseLayer__sc-ion-modal-ios-h-hdbQy",
      pager: "CourseLayer__pager-ybf8n",
      top: "CourseLayer__top-AyPeK",
      bottom: "CourseLayer__bottom-YlkL3",
      floatButton: "CourseLayer__floatButton-_OXpt",
      floatAction: "CourseLayer__floatAction-G0PwX",
      faceRecognition: "CourseLayer__faceRecognition-PXw6B",
      faceRecognitionIcon: "CourseLayer__faceRecognitionIcon-vBBqX",
      faceRecognitionLabel: "CourseLayer__faceRecognitionLabel-St4qD",
      faceRecognitionTimes: "CourseLayer__faceRecognitionTimes-Q3P_Y",
      menu: "CourseLayer__menu-iqkjy",
      wrapper: "CourseLayer__wrapper-_gIKt",
      castSection: "CourseLayer__castSection-hJD67",
      castBtn: "CourseLayer__castBtn-ja4pD",
      loading: "CourseLayer__loading-HND0v",
      connected: "CourseLayer__connected-f1Cg6",
      icon: "CourseLayer__icon-hx8LU",
    };
  const Cn = {};
  Cn["$style"] = hn;
  const yn = (0, I.Z)(gn, [
    ["render", vt],
    ["__cssModules", Cn],
  ]);
  var An = yn,
    wn = (0, i.defineComponent)({
      __name: "SharedLayer",
      props: { routePath: { type: String, required: !0 } },
      setup: function (e) {
        var t = e,
          n = (0, i.computed)(function () {
            return t.routePath.startsWith("/course/");
          });
        return function (e, t) {
          return n.value
            ? ((0, i.openBlock)(), (0, i.createBlock)(An, { key: 0 }))
            : (0, i.createCommentVNode)("", !0);
        };
      },
    });
  const bn = wn;
  var En = bn,
    Sn = n(25979),
    Tn = n(29265),
    _n = ["data-testid"],
    In = ["data-testid"],
    Ln = (0, i.defineComponent)({
      __name: "TipTemplate",
      props: {
        content: {},
        testIdPrefix: {},
        color: {},
        leftIcon: {},
        canClose: { type: Boolean },
      },
      emits: ["click", "close"],
      setup: function (e) {
        return function (e, t) {
          var n,
            o = (0, i.resolveComponent)("SvgIcon");
          return (
            (0, i.openBlock)(),
            (0, i.createElementBlock)(
              "div",
              {
                class: (0, i.normalizeClass)(
                  ((n = {}),
                  (n[e.$style.tip] = !0),
                  (n[e.$style.warning] = "warning" === e.color),
                  (n[e.$style.error] = "error" === e.color),
                  n),
                ),
                "data-testid": e.testIdPrefix
                  ? "".concat(e.testIdPrefix, "-tip")
                  : null,
                onClick:
                  t[1] ||
                  (t[1] = function (t) {
                    return e.$emit("click");
                  }),
              },
              [
                (0, i.renderSlot)(e.$slots, "left-icon", {}, function () {
                  return [
                    e.leftIcon
                      ? ((0, i.openBlock)(),
                        (0, i.createBlock)(
                          o,
                          {
                            key: 0,
                            name: e.leftIcon,
                            class: (0, i.normalizeClass)(e.$style.icon),
                          },
                          null,
                          8,
                          ["name", "class"],
                        ))
                      : (0, i.createCommentVNode)("", !0),
                  ];
                }),
                (0, i.createElementVNode)(
                  "div",
                  { class: (0, i.normalizeClass)(e.$style.content) },
                  [
                    (0, i.renderSlot)(e.$slots, "default", {}, function () {
                      return [
                        (0, i.createTextVNode)(
                          (0, i.toDisplayString)(e.content),
                          1,
                        ),
                      ];
                    }),
                  ],
                  2,
                ),
                e.$slots["right"] || e.canClose
                  ? ((0, i.openBlock)(),
                    (0, i.createElementBlock)(
                      "div",
                      { key: 0, class: (0, i.normalizeClass)(e.$style.right) },
                      [
                        (0, i.renderSlot)(e.$slots, "right"),
                        e.canClose
                          ? ((0, i.openBlock)(),
                            (0, i.createElementBlock)(
                              "button",
                              {
                                key: 0,
                                "data-testid": e.testIdPrefix
                                  ? "".concat(e.testIdPrefix, "-tip-close")
                                  : null,
                                class: (0, i.normalizeClass)(
                                  e.$style.closeButton,
                                ),
                                onClick:
                                  t[0] ||
                                  (t[0] = (0, i.withModifiers)(
                                    function (t) {
                                      return e.$emit("close");
                                    },
                                    ["stop"],
                                  )),
                              },
                              [(0, i.createVNode)(o, { name: "close" })],
                              10,
                              In,
                            ))
                          : (0, i.createCommentVNode)("", !0),
                      ],
                      2,
                    ))
                  : (0, i.createCommentVNode)("", !0),
              ],
              10,
              _n,
            )
          );
        };
      },
    }),
    kn = {
      markdownBody: "TipTemplate__markdown-body-aHmaL",
      loginTypeLogo: "TipTemplate__login-type-logo-Youg0",
      loginTemplateTitle: "TipTemplate__login-template-title-ESYVD",
      loginTemplateLoginOptions:
        "TipTemplate__login-template-loginOptions-hxhym",
      modalOnTop: "TipTemplate__modal-on-top-gkYQJ",
      modalWrapper: "TipTemplate__modal-wrapper-JQloq",
      scIonModalIos: "TipTemplate__sc-ion-modal-ios-yDrAq",
      modalFullscreen: "TipTemplate__modal-fullscreen-N_5yh",
      scIonModalIosH: "TipTemplate__sc-ion-modal-ios-h-tEI85",
      tip: "TipTemplate__tip-k49Ri",
      warning: "TipTemplate__warning-HESO5",
      error: "TipTemplate__error-yMcx2",
      icon: "TipTemplate__icon-p7yf2",
      content: "TipTemplate__content-lsdoq",
      right: "TipTemplate__right-CUDfm",
      closeButton: "TipTemplate__closeButton-a80o8",
    };
  const Pn = {};
  Pn["$style"] = kn;
  const Bn = (0, I.Z)(Ln, [["__cssModules", Pn]]);
  var Rn = Bn,
    xn = n(5877),
    On = n(80129),
    Mn = n.n(On),
    Vn = n(31619),
    Nn = n(83661),
    Dn = (0, i.defineComponent)(
      (0, o.pi)(
        { name: "FeedbackModal" },
        {
          __name: "Modal",
          props: { modalId: {} },
          setup: function (e) {
            var t = e,
              n = function (e) {
                e && h["default"].closeModalById(t.modalId);
              };
            return function (e, t) {
              return (
                (0, i.openBlock)(),
                (0, i.createElementBlock)(
                  "div",
                  { class: (0, i.normalizeClass)(e.$style.page) },
                  [
                    (0, i.createVNode)(
                      Vn.Z,
                      {
                        title: e.$t("feedbackPage.title"),
                        "show-cancel": !1,
                        "show-confirm": !1,
                      },
                      null,
                      8,
                      ["title"],
                    ),
                    (0, i.createVNode)(
                      Nn.Z,
                      {
                        class: (0, i.normalizeClass)(e.$style.form),
                        onSubmitAfter: n,
                      },
                      null,
                      8,
                      ["class"],
                    ),
                  ],
                  2,
                )
              );
            };
          },
        },
      ),
    ),
    Zn = {
      markdownBody: "Modal__markdown-body-WNeoi",
      loginTypeLogo: "Modal__login-type-logo-rk0u8",
      loginTemplateTitle: "Modal__login-template-title-tAMSd",
      loginTemplateLoginOptions: "Modal__login-template-loginOptions-xpMUb",
      modalOnTop: "Modal__modal-on-top-ZSG_x",
      modalWrapper: "Modal__modal-wrapper-xdm38",
      scIonModalIos: "Modal__sc-ion-modal-ios-aoGje",
      modalFullscreen: "Modal__modal-fullscreen-O8j1q",
      scIonModalIosH: "Modal__sc-ion-modal-ios-h-JTQUW",
      page: "Modal__page-djF4C",
      form: "Modal__form-yA9_3",
    };
  const Un = {};
  Un["$style"] = Zn;
  const Hn = (0, I.Z)(Dn, [["__cssModules", Un]]);
  var Fn = Hn,
    Gn = function () {
      var e = (0, i.reactive)(xn.Rj),
        t = function () {
          var t;
          Object.assign(
            e,
            null === (t = f.Z.org) || void 0 === t
              ? void 0
              : t.weakConnectionConfig,
          );
        };
      t();
      var r = function () {
          return (0, o.mG)(void 0, void 0, void 0, function () {
            var e, t, i;
            return (0, o.Jh)(this, function (o) {
              switch (o.label) {
                case 0:
                  return (
                    (e = n(20034).Z),
                    (t = n(56022).Z),
                    (i = t.get("network weak connection")),
                    i.info("push logs"),
                    [4, e.push()]
                  );
                case 1:
                  return (o.sent(), i.info("push logs end"), [2]);
              }
            });
          });
        },
        a = function () {
          return (0, o.mG)(void 0, void 0, void 0, function () {
            var e, t, i, r, a, s, l, c, u;
            return (0, o.Jh)(this, function (o) {
              return (
                (e = n(39626)),
                (t = e.Browser),
                (i = e.Network),
                (r = {
                  clientInfo: [
                    null === (s = f.Z.org) || void 0 === s ? void 0 : s.orgName,
                    f.Z.deliveryOrg,
                    null === (l = f.Z.user) || void 0 === l ? void 0 : l.id,
                    null === (c = f.Z.user) || void 0 === c ? void 0 : c.userNo,
                    null === (u = f.Z.user) || void 0 === u ? void 0 : u.name,
                  ].join(","),
                  clientVersion: window.APPRuntime.READABLE_VERSION,
                  os: f.Z.deviceInfo.operatingSystem,
                  osVersion: f.Z.deviceInfo.osVersion,
                  netType: i.connectionType,
                  customInfo: window.navigator.userAgent,
                }),
                (a = t.open(
                  "https://support.qq.com/product/288301?" + Mn().stringify(r),
                  null,
                  { footer: !0, footercolor: "#4C525D" },
                )),
                a.on("loadstop"),
                a.on("loadstop").subscribe(function () {
                  a.insertCSS({
                    code: "#root-container{height: calc(100% - 45px)}",
                  });
                }),
                [2]
              );
            });
          });
        },
        s = function () {
          var e = "feedback-modal-id";
          h["default"].showModal(Fn, { modalId: e }, "feedback-modal", {
            id: e,
            addIonPageClass: !1,
          });
        },
        l = function () {
          (r(), window.APPRuntime.IS_CN ? a() : s());
        };
      return { toFeedback: l, weakConnectionConfig: e };
    },
    zn = (0, i.defineComponent)({
      __name: "index",
      setup: function (e) {
        var t = (0, i.ref)("connected"),
          n = (0, i.computed)(function () {
            return "connected" === t.value;
          }),
          o = (0, i.computed)(function () {
            return "offline" === t.value;
          }),
          r = (0, i.computed)(function () {
            return "weak-connected" === t.value;
          }),
          a = null,
          s = Gn(),
          l = s.weakConnectionConfig,
          c = s.toFeedback,
          u = function () {
            a && (clearTimeout(a), (a = null));
          },
          d = function () {
            (u(), (t.value = "connected"), (J.Z.isWeakConnection = !1));
          },
          p = function () {
            ((l.enable = !1), d());
          },
          m = function () {
            l.enable &&
              (o.value ||
                (u(),
                (J.Z.isWeakConnection = !0),
                (t.value = "weak-connected"),
                l.timeout > 0 && (a = setTimeout(d, l.timeout))));
          };
        M.Z.on(O._7, m);
        var f = function () {
            (d(), c());
          },
          v = function (e) {
            (u(),
              (t.value = e ? "connected" : "offline"),
              (J.Z.isWeakConnection = !1),
              (J.Z.isLostConnection = !e));
          };
        return (
          M.Z.on(O.tm, v),
          (0, i.onBeforeUnmount)(function () {
            (M.Z.off(O._7, m), M.Z.off(O.tm, v));
          }),
          function (e, t) {
            var a = (0, i.resolveComponent)("SvgIcon");
            return n.value
              ? (0, i.createCommentVNode)("", !0)
              : ((0, i.openBlock)(),
                (0, i.createElementBlock)(
                  "div",
                  {
                    key: 0,
                    class: (0, i.normalizeClass)(e.$style.networkTipStatus),
                    "data-testid": "network-status",
                  },
                  [
                    o.value
                      ? ((0, i.openBlock)(),
                        (0, i.createBlock)(
                          Rn,
                          {
                            key: 0,
                            "test-id-prefix": "network-offline",
                            "left-icon": "warning",
                            color: "error",
                            content: e.$t("error.lostConnection"),
                          },
                          null,
                          8,
                          ["content"],
                        ))
                      : r.value
                        ? ((0, i.openBlock)(),
                          (0, i.createBlock)(
                            Rn,
                            {
                              key: 1,
                              "test-id-prefix": "network-weak",
                              "left-icon": "warning",
                              color: "warning",
                              "can-close": (0, i.unref)(l).canClose,
                              onClose: p,
                            },
                            {
                              default: (0, i.withCtx)(function () {
                                return [
                                  (0, i.createElementVNode)(
                                    "span",
                                    null,
                                    (0, i.toDisplayString)(
                                      e.$t("error.weakConnection"),
                                    ),
                                    1,
                                  ),
                                  (0, i.unref)(l).canFeedback
                                    ? ((0, i.openBlock)(),
                                      (0, i.createElementBlock)(
                                        "button",
                                        {
                                          key: 0,
                                          "data-testid": "weak-feedback-button",
                                          class: (0, i.normalizeClass)(
                                            e.$style.weakFeedbackButton,
                                          ),
                                          onClick: f,
                                        },
                                        [
                                          (0, i.createElementVNode)(
                                            "span",
                                            null,
                                            (0, i.toDisplayString)(
                                              e.$t(
                                                "error.weakConnectionFeedback",
                                              ),
                                            ),
                                            1,
                                          ),
                                          (0, i.createVNode)(a, {
                                            name: "arrow-forward",
                                          }),
                                        ],
                                        2,
                                      ))
                                    : (0, i.createCommentVNode)("", !0),
                                ];
                              }),
                              _: 1,
                            },
                            8,
                            ["can-close"],
                          ))
                        : (0, i.createCommentVNode)("", !0),
                  ],
                  2,
                ));
          }
        );
      },
    }),
    Qn = {
      markdownBody: "index__markdown-body-FSQUq",
      loginTypeLogo: "index__login-type-logo-tlIgq",
      loginTemplateTitle: "index__login-template-title-UfKPJ",
      loginTemplateLoginOptions: "index__login-template-loginOptions-q8Wa4",
      modalOnTop: "index__modal-on-top-spe3S",
      modalWrapper: "index__modal-wrapper-L7GWC",
      scIonModalIos: "index__sc-ion-modal-ios-yJUqO",
      modalFullscreen: "index__modal-fullscreen-tytcm",
      scIonModalIosH: "index__sc-ion-modal-ios-h-NDrAL",
      networkTipStatus: "index__networkTipStatus-zC_bC",
      weakFeedbackButton: "index__weakFeedbackButton-Pjl3o",
    };
  const jn = {};
  jn["$style"] = Qn;
  const qn = (0, I.Z)(zn, [["__cssModules", jn]]);
  var Jn = qn,
    Wn = { "data-testid": "permissionDescriptionType" },
    Xn = (0, i.defineComponent)({
      __name: "PermissionDescription",
      setup: function (e) {
        var t = (0, i.ref)(!1),
          n = (0, i.ref)(),
          o = (0, i.computed)(function () {
            return (
              "android" === f.Z.platform &&
              t.value &&
              n.value &&
              "zh-Hans" === f.Z.language
            );
          }),
          r = function (e) {
            var o = e[0],
              i = e[1];
            ((t.value = o), (n.value = i));
          };
        return (
          M.Z.on(O.XU, r),
          function (e, t) {
            return o.value
              ? ((0, i.openBlock)(),
                (0, i.createElementBlock)(
                  "div",
                  {
                    key: 0,
                    "data-testid": "permissionDescription",
                    class: (0, i.normalizeClass)(
                      e.$style.permissionDescription,
                    ),
                  },
                  [
                    (0, i.createElementVNode)(
                      "span",
                      {
                        "data-testid": "permissionDescriptionTitle",
                        class: (0, i.normalizeClass)(
                          e.$style.permissionDescriptionTitle,
                        ),
                      },
                      (0, i.toDisplayString)(
                        e.$t("permission.permissionDescribeTitle"),
                      ),
                      3,
                    ),
                    (0, i.createElementVNode)(
                      "span",
                      Wn,
                      (0, i.toDisplayString)(
                        e.$t("permission.typesPermissionDescribe." + n.value),
                      ),
                      1,
                    ),
                  ],
                  2,
                ))
              : (0, i.createCommentVNode)("", !0);
          }
        );
      },
    }),
    Yn = {
      markdownBody: "PermissionDescription__markdown-body-xbTng",
      loginTypeLogo: "PermissionDescription__login-type-logo-uWsfk",
      loginTemplateTitle: "PermissionDescription__login-template-title-P59U9",
      loginTemplateLoginOptions:
        "PermissionDescription__login-template-loginOptions-Mu6Fe",
      modalOnTop: "PermissionDescription__modal-on-top-H1Qg4",
      modalWrapper: "PermissionDescription__modal-wrapper-S0FcU",
      scIonModalIos: "PermissionDescription__sc-ion-modal-ios-zdZTw",
      modalFullscreen: "PermissionDescription__modal-fullscreen-zFPNr",
      scIonModalIosH: "PermissionDescription__sc-ion-modal-ios-h-DpiBp",
      permissionDescription:
        "PermissionDescription__permissionDescription-UNifN",
      permissionDescriptionTitle:
        "PermissionDescription__permissionDescriptionTitle-X678t",
    };
  const Kn = {};
  Kn["$style"] = Yn;
  const $n = (0, I.Z)(Xn, [["__cssModules", Kn]]);
  var eo = $n,
    to = n(44715),
    no = n(4345),
    oo = (0, i.defineComponent)({
      __name: "index",
      setup: function (e) {
        var t = (0, Dt.yj)(),
          n = (0, Dt.tv)(),
          o = [S.q.AppUpdate],
          r = (0, to.h)(),
          a = r.manualClosed,
          s = r.manualClose,
          l = r.initManualClosed;
        l();
        var c = function (e) {
            (0, no.BC)() && !e && nt.Z.rmdir(xn.RG);
          },
          u = (0, to.P)({ callback: c }).update,
          d = (0, i.computed)(function () {
            return (
              !(a.value || !u.value) &&
              (!t.name || !o.includes(t.name)) &&
              Boolean(J.Z.appUpdateInfo)
            );
          }),
          p = (0, i.computed)(function () {
            var e;
            return (
              u.value,
              Boolean(
                null === (e = J.Z.appUpdateInfo) || void 0 === e
                  ? void 0
                  : e.forceUpdate,
              )
            );
          }),
          m = function () {
            n.push({
              name: S.q.AppUpdate,
              extData: { noAnimation: !0, noAnimationWithBack: !0 },
            });
          };
        return function (e, t) {
          var n = (0, i.resolveComponent)("SvgIcon");
          return d.value
            ? ((0, i.openBlock)(),
              (0, i.createBlock)(
                Rn,
                {
                  key: 0,
                  "test-id-prefix": "app-update",
                  content: e.$t("appUpdate.globalTip"),
                  "left-icon": "app-update",
                  color: "warning",
                  "can-close": !p.value,
                  onClick: m,
                  onClose: (0, i.unref)(s),
                },
                (0, i.createSlots)({ _: 2 }, [
                  p.value
                    ? {
                        name: "right",
                        fn: (0, i.withCtx)(function () {
                          return [
                            (0, i.createElementVNode)(
                              "div",
                              {
                                class: (0, i.normalizeClass)(
                                  e.$style.arrowForwardIcon,
                                ),
                              },
                              [
                                (0, i.createVNode)(n, {
                                  name: "arrow-forward",
                                }),
                              ],
                              2,
                            ),
                          ];
                        }),
                        key: "0",
                      }
                    : void 0,
                ]),
                1032,
                ["content", "can-close", "onClose"],
              ))
            : (0, i.createCommentVNode)("", !0);
        };
      },
    }),
    io = {
      markdownBody: "index__markdown-body-V32_q",
      loginTypeLogo: "index__login-type-logo-KyFiF",
      loginTemplateTitle: "index__login-template-title-fIFy2",
      loginTemplateLoginOptions: "index__login-template-loginOptions-trRJp",
      modalOnTop: "index__modal-on-top-e6Ko3",
      modalWrapper: "index__modal-wrapper-Bx0_r",
      scIonModalIos: "index__sc-ion-modal-ios-LDpoV",
      modalFullscreen: "index__modal-fullscreen-qKXQz",
      scIonModalIosH: "index__sc-ion-modal-ios-h-oOchX",
      arrowForwardIcon: "index__arrowForwardIcon-GYbn2",
    };
  const ro = {};
  ro["$style"] = io;
  const ao = (0, I.Z)(oo, [["__cssModules", ro]]);
  var so = ao,
    lo = ["src"],
    co = (0, i.defineComponent)({
      __name: "UpgradeModal",
      emits: ["notTip", "ignore"],
      setup: function (e) {
        var t = (0, i.computed)(function () {
          return f.Z.settings.darkMode ? "dark" : "light";
        });
        return function (e, o) {
          return (
            (0, i.openBlock)(),
            (0, i.createBlock)(i.Teleport, { to: "body" }, [
              (0, i.createElementVNode)(
                "div",
                { class: (0, i.normalizeClass)(e.$style.upgradeModal) },
                [
                  (0, i.createElementVNode)(
                    "div",
                    { class: (0, i.normalizeClass)(e.$style.container) },
                    [
                      (0, i.createElementVNode)(
                        "div",
                        { class: (0, i.normalizeClass)(e.$style.top) },
                        [
                          (0, i.createElementVNode)(
                            "img",
                            {
                              src: n(20839)(
                                "./web-upgrade-bg-".concat(t.value, ".svg"),
                              ),
                            },
                            null,
                            8,
                            lo,
                          ),
                        ],
                        2,
                      ),
                      (0, i.createElementVNode)(
                        "div",
                        { class: (0, i.normalizeClass)(e.$style.contentWrap) },
                        [
                          (0, i.createElementVNode)(
                            "h3",
                            { class: (0, i.normalizeClass)(e.$style.title) },
                            (0, i.toDisplayString)(
                              e.$t("webUpgrade.modalTitle"),
                            ),
                            3,
                          ),
                          (0, i.createElementVNode)(
                            "div",
                            null,
                            (0, i.toDisplayString)(
                              e.$t("webUpgrade.modalContent"),
                            ),
                            1,
                          ),
                        ],
                        2,
                      ),
                      (0, i.createElementVNode)(
                        "div",
                        { class: (0, i.normalizeClass)(e.$style.buttons) },
                        [
                          (0, i.createElementVNode)(
                            "button",
                            {
                              class: (0, i.normalizeClass)([
                                e.$style.button,
                                e.$style.notTip,
                              ]),
                              "data-testid": "notTipButton",
                              onClick:
                                o[0] ||
                                (o[0] = function (t) {
                                  return e.$emit("notTip");
                                }),
                            },
                            (0, i.toDisplayString)(e.$t("webUpgrade.notTip")),
                            3,
                          ),
                          (0, i.createElementVNode)(
                            "i",
                            { class: (0, i.normalizeClass)(e.$style.divider) },
                            null,
                            2,
                          ),
                          (0, i.createElementVNode)(
                            "button",
                            {
                              class: (0, i.normalizeClass)([
                                e.$style.button,
                                e.$style.ignore,
                              ]),
                              "data-testid": "ignoreButton",
                              onClick:
                                o[1] ||
                                (o[1] = function (t) {
                                  return e.$emit("ignore");
                                }),
                            },
                            (0, i.toDisplayString)(e.$t("webUpgrade.ignore")),
                            3,
                          ),
                        ],
                        2,
                      ),
                    ],
                    2,
                  ),
                ],
                2,
              ),
            ])
          );
        };
      },
    }),
    uo = {
      markdownBody: "UpgradeModal__markdown-body-uIlBX",
      loginTypeLogo: "UpgradeModal__login-type-logo-Tcp1_",
      loginTemplateTitle: "UpgradeModal__login-template-title-_gooq",
      loginTemplateLoginOptions:
        "UpgradeModal__login-template-loginOptions-nyToG",
      modalOnTop: "UpgradeModal__modal-on-top-Na10s",
      modalWrapper: "UpgradeModal__modal-wrapper-ImnNk",
      scIonModalIos: "UpgradeModal__sc-ion-modal-ios-Jsr61",
      modalFullscreen: "UpgradeModal__modal-fullscreen-FDLjs",
      scIonModalIosH: "UpgradeModal__sc-ion-modal-ios-h-AT_Y0",
      upgradeModal: "UpgradeModal__upgradeModal-ZFyOW",
      container: "UpgradeModal__container-W1M32",
      top: "UpgradeModal__top-ss48g",
      contentWrap: "UpgradeModal__contentWrap-lH4C3",
      title: "UpgradeModal__title-G9953",
      buttons: "UpgradeModal__buttons-NQNlA",
      divider: "UpgradeModal__divider-eHC8R",
      button: "UpgradeModal__button-PBXlt",
      notTip: "UpgradeModal__notTip-uCYz6",
      ignore: "UpgradeModal__ignore-Zxjcq",
    };
  const po = {};
  po["$style"] = uo;
  const mo = (0, I.Z)(co, [["__cssModules", po]]);
  var fo = mo,
    vo = n(28032),
    go = function () {
      var e = (0, i.ref)(!1),
        t = function () {
          e.value = !0;
        },
        n = function () {
          (delete vo.Z.ignoreWebUpgrade, delete vo.Z.notTipWebUpgrade);
        },
        o = function () {
          M.Z.off(O.wV, t);
        },
        r = function () {
          if (!vo.Z.notTipWebUpgrade) {
            var e = vo.Z.ignoreWebUpgrade;
            (e && Me()().isBefore(e)) || (n(), M.Z.on(O.wV, t));
          }
        },
        a = function () {
          (u(),
            (e.value = !1),
            (vo.Z.ignoreWebUpgrade = Me()().add(1, "d").format("YYYY-MM-DD")),
            o());
        },
        s = function () {
          (u(), (e.value = !1), (vo.Z.notTipWebUpgrade = !0), o());
        },
        l = (0, i.ref)(!1),
        c = function () {
          l.value = !0;
        },
        u = function () {
          l.value = !1;
        };
      return {
        visible: e,
        onAppGlobalError: r,
        onIgnore: a,
        onNotTip: s,
        visibleModal: l,
        showUpgradeModal: c,
      };
    },
    ho = { key: 0, "test-id-prefix": "web-upgrade" },
    Co = (0, i.defineComponent)({
      __name: "index",
      setup: function (e) {
        var t = go(),
          n = t.visible,
          o = t.onAppGlobalError,
          r = t.visibleModal,
          a = t.onIgnore,
          s = t.onNotTip,
          l = t.showUpgradeModal;
        return (
          o(),
          function (e, t) {
            return (0, i.unref)(n)
              ? ((0, i.openBlock)(),
                (0, i.createElementBlock)("div", ho, [
                  (0, i.createVNode)(
                    Rn,
                    {
                      "left-icon": "warning",
                      color: "error",
                      content: e.$t("webUpgrade.globalTip"),
                      onClick: (0, i.unref)(l),
                      "can-close": "",
                      onClose: (0, i.unref)(a),
                    },
                    null,
                    8,
                    ["content", "onClick", "onClose"],
                  ),
                  (0, i.unref)(r)
                    ? ((0, i.openBlock)(),
                      (0, i.createBlock)(
                        fo,
                        {
                          key: 0,
                          onNotTip: (0, i.unref)(s),
                          onIgnore: (0, i.unref)(a),
                        },
                        null,
                        8,
                        ["onNotTip", "onIgnore"],
                      ))
                    : (0, i.createCommentVNode)("", !0),
                ]))
              : (0, i.createCommentVNode)("", !0);
          }
        );
      },
    }),
    yo = {
      markdownBody: "index__markdown-body-CNBnc",
      loginTypeLogo: "index__login-type-logo-lQmrj",
      loginTemplateTitle: "index__login-template-title-lTWH4",
      loginTemplateLoginOptions: "index__login-template-loginOptions-QcI2z",
      modalOnTop: "index__modal-on-top-jMZC2",
      modalWrapper: "index__modal-wrapper-RcBju",
      scIonModalIos: "index__sc-ion-modal-ios-LA7UC",
      modalFullscreen: "index__modal-fullscreen-ECBZL",
      scIonModalIosH: "index__sc-ion-modal-ios-h-MGe2g",
    };
  const Ao = {};
  Ao["$style"] = yo;
  const wo = (0, I.Z)(Co, [["__cssModules", Ao]]);
  var bo = wo,
    Eo = (0, i.defineComponent)(
      (0, o.pi)(
        { name: "GlobalTips" },
        {
          __name: "index",
          setup: function (e) {
            return function (e, t) {
              return (
                (0, i.openBlock)(),
                (0, i.createElementBlock)(
                  "div",
                  { class: (0, i.normalizeClass)(e.$style.globalTipWarp) },
                  [
                    (0, i.createVNode)(
                      Jn,
                      { class: (0, i.normalizeClass)(e.$style.tipItem) },
                      null,
                      8,
                      ["class"],
                    ),
                    (0, i.createVNode)(
                      bo,
                      { class: (0, i.normalizeClass)(e.$style.tipItem) },
                      null,
                      8,
                      ["class"],
                    ),
                    (0, i.createVNode)(
                      so,
                      { class: (0, i.normalizeClass)(e.$style.tipItem) },
                      null,
                      8,
                      ["class"],
                    ),
                    (0, i.createVNode)(eo),
                  ],
                  2,
                )
              );
            };
          },
        },
      ),
    ),
    So = {
      markdownBody: "index__markdown-body-pnxVD",
      loginTypeLogo: "index__login-type-logo-IdoML",
      loginTemplateTitle: "index__login-template-title-zglmW",
      loginTemplateLoginOptions: "index__login-template-loginOptions-iVTsy",
      modalOnTop: "index__modal-on-top-DRcxC",
      modalWrapper: "index__modal-wrapper-GHeUH",
      scIonModalIos: "index__sc-ion-modal-ios-WSlsl",
      modalFullscreen: "index__modal-fullscreen-YrMMq",
      scIonModalIosH: "index__sc-ion-modal-ios-h-RkMrs",
      globalTipWarp: "index__globalTipWarp-yCBg0",
      tipItem: "index__tipItem-tVb4d",
    };
  const To = {};
  To["$style"] = So;
  const _o = (0, I.Z)(Eo, [["__cssModules", To]]);
  var Io = _o,
    Lo = n(9369),
    ko = n(24321),
    Po = n(35580),
    Bo = function (e, t, n) {
      return (0, o.mG)(void 0, void 0, void 0, function () {
        var i, r, a;
        return (0, o.Jh)(this, function (o) {
          switch (o.label) {
            case 0:
              return (null === (r = f.Z.org) || void 0 === r ? void 0 : r.code)
                ? [
                    4,
                    X.Z.get(Po.Z.getUsageInfo(e), {
                      params: {
                        user_no:
                          null ===
                            (a =
                              null === f.Z || void 0 === f.Z
                                ? void 0
                                : f.Z.user) || void 0 === a
                            ? void 0
                            : a.userNo,
                        course_code: t,
                        course_role: n,
                      },
                    }),
                  ]
                : [2, null];
            case 1:
              return ((i = o.sent().data), [2, i]);
          }
        });
      });
    },
    Ro = n(22173),
    xo = n(99407),
    Oo = n(771),
    Mo = n(30500),
    Vo = n(38355),
    No = function () {
      var e = (0, ke.xt)().courseInfo,
        t = (0, i.computed)(function () {
          return e.value.id;
        }),
        n = function (e) {
          return (0, o.mG)(void 0, void 0, void 0, function () {
            var n;
            return (0, o.Jh)(this, function (o) {
              switch (o.label) {
                case 0:
                  return [
                    4,
                    X.Z.post("/api/uploads/details/query", {
                      upload_ids: e,
                      course_id: t,
                    }),
                  ];
                case 1:
                  return ((n = o.sent().data), [2, n]);
              }
            });
          });
        },
        r = function (e, n, i) {
          return (0, o.mG)(void 0, void 0, void 0, function () {
            var r;
            return (0, o.Jh)(this, function (o) {
              switch (o.label) {
                case 0:
                  return [
                    4,
                    X.Z.post("/api/uploads/".concat(i, "/reupload"), {
                      kb_id: e,
                      kb_resource_id: n,
                      course_id: t,
                    }),
                  ];
                case 1:
                  return ((r = o.sent().data), [2, r]);
              }
            });
          });
        };
      return { getUploadByIds: n, reuploadKnowledgeBaseResource: r };
    },
    Do = (0, Oo.Dt)(function () {
      var e = (0, i.ref)(),
        t = (0, i.ref)([]),
        n = (0, i.ref)([]),
        o = function () {
          if (f.Z.settings.orgSetting.airChatbot) {
            var o = f.Z.settings.orgSetting.airChatbot,
              i = o.url,
              r = o.courseRoles,
              a = o.blockPlatformRoles;
            return (
              (e.value = i),
              (t.value = null !== r && void 0 !== r ? r : []),
              void (n.value = null !== a && void 0 !== a ? a : [])
            );
          }
          var s = f.Z.settings.orgSetting,
            l = s.airChatbotLib,
            c = s.airCourseRoles;
          (l && (e.value = l), c && (t.value = c));
        };
      return {
        lib: e,
        airCourseRoles: t,
        airBlockPlatformRoles: n,
        initConfig: o,
      };
    }),
    Zo = function () {
      var e = (0, ke.xt)().courseInfo,
        t = Do(),
        n = t.lib,
        r = t.airCourseRoles,
        a = t.airBlockPlatformRoles,
        s = (0, i.computed)(function () {
          return e.value.id;
        }),
        l = function (e) {
          localStorage.setItem("currentAirCourseId", e);
        },
        c = function () {
          return localStorage.getItem("currentAirCourseId") || "";
        },
        u = function () {
          localStorage.removeItem(ko.A);
        },
        d = function () {
          return localStorage.getItem(ko.A);
        },
        p = function (e) {
          localStorage.setItem(ko.A, e);
        },
        m = function () {
          return (0, o.mG)(void 0, void 0, void 0, function () {
            var e, t, n;
            return (0, o.Jh)(this, function (o) {
              switch (o.label) {
                case 0:
                  return (
                    (e = c()),
                    e && e === s.value.toString()
                      ? [2]
                      : s.value
                        ? (l(s.value.toString()),
                          [
                            4,
                            X.Z.get(
                              "/api/air-credit/course/".concat(
                                s.value,
                                "/token",
                              ),
                            ),
                          ])
                        : [3, 2]
                  );
                case 1:
                  ((t = o.sent()),
                    p(
                      null ===
                        (n = null === t || void 0 === t ? void 0 : t.data) ||
                        void 0 === n
                        ? void 0
                        : n.air_chat_token,
                    ),
                    (o.label = 2));
                case 2:
                  return [2];
              }
            });
          });
        },
        v = function () {
          return s.value
            ? (l(s.value.toString()),
              X.Z.get("/api/air-credit/course/".concat(s.value, "/token")))
            : null;
        },
        g = function () {
          var e = document.createElement("script");
          ((e.async = !0),
            (e.id = "airChatbotScript"),
            (e.src = n.value
              ? "".concat(n.value, "?_t=").concat(Date.now())
              : ""),
            document.head.appendChild(e),
            h());
        },
        h = function () {
          window.airChatbot = [
            xo.f(e.value.enrollment),
            (0, Ro.R5)(f.Z.language),
            No,
            "mobile",
          ];
        },
        C = function (e) {
          var t = (0, ke.xt)().isInstructor;
          return (
            !t.value &&
            [
              S.q.ExamPaperSubject,
              S.q.ClassroomExamPaper,
              S.q.QuestionnairePaper,
              S.q.QuestionnairePaperSubject,
            ].includes(e)
          );
        },
        y = function () {
          var e = (0, ke.xt)().courseInfo,
            t = xo.f(e.value.enrollment);
          return !!r.value.length && r.value.includes(t);
        },
        A = function () {
          var e,
            t = (0, ke.xt)().isInstructor;
          return (
            !t.value ||
            (null === (e = f.Z.user) || void 0 === e
              ? void 0
              : e.hasAiAbility) ||
            !1
          );
        },
        w = ["active", "inactive"],
        E = function () {
          var e,
            t,
            n,
            o,
            i = (0, ke.xt)().courseInfo,
            r =
              null !==
                (o =
                  null ===
                    (n =
                      null ===
                        (t =
                          null === (e = i.value) || void 0 === e
                            ? void 0
                            : e.creditState) || void 0 === t
                        ? void 0
                        : t.status) || void 0 === n
                    ? void 0
                    : n.toLowerCase()) && void 0 !== o
                ? o
                : "";
          return w.includes(r);
        },
        T = function () {
          var e;
          return (
            (null === (e = f.Z.user) || void 0 === e
              ? void 0
              : e.hasAiAbility) || E()
          );
        },
        _ = function () {
          return !!n.value && (void 0 === e.value.hasAiAbility ? A() : T());
        },
        I = function () {
          var e, t, n, o;
          return (
            !a.value.length ||
            (!!(null ===
              (t =
                null === (e = f.Z.user) || void 0 === e ? void 0 : e.roles) ||
            void 0 === t
              ? void 0
              : t[0]) &&
              !a.value.includes(
                null ===
                  (o =
                    null === (n = f.Z.user) || void 0 === n
                      ? void 0
                      : n.roles) || void 0 === o
                  ? void 0
                  : o[0],
              ))
          );
        };
      function L() {
        function t(t) {
          return (0, o.mG)(this, void 0, void 0, function () {
            var n, i, r;
            return (0, o.Jh)(this, function (o) {
              switch (o.label) {
                case 0:
                  return (
                    (n = t.detail),
                    (i = n.id || ""),
                    [4, Mt.ZP.getUploadInfo(i)]
                  );
                case 1:
                  return (
                    (r = o.sent()),
                    (r = (0, Vo.yp)(r, e.value)),
                    r
                      ? (Mo.Z.innerOpener(r),
                        window.dispatchEvent(
                          new CustomEvent(ko.j.HIDDEN_CHATBOT),
                        ),
                        [2])
                      : [2]
                  );
              }
            });
          });
        }
        function n() {
          var e = b["default"].beforeEach(function (t, n) {
            [
              S.q.CourseDocumentViewer,
              S.q.CoursePrivateWpsViewer,
              S.q.PrivateWpsViewer,
              S.q.CourseAliyunDocumentViewer,
              S.q.AliyunDocumentViewer,
              S.q.DocumentViewer,
              S.q.VideoPlayer,
              S.q.CourseVideoPlayer,
            ].includes(n.name) &&
              (window.dispatchEvent(new CustomEvent(ko.j.SHOW_CHATBOT)), e());
          });
        }
        return { preview: t, pageListener: n };
      }
      var k = function () {
        return (0, o.mG)(void 0, void 0, void 0, function () {
          var e, t, n, i;
          return (0, o.Jh)(this, function (r) {
            return (
              (e = (0, ke.xt)().courseInfo),
              (t = L()),
              (n = t.preview),
              (i = t.pageListener),
              window.addEventListener(
                ko.j.GET_AIR_CHAT_USAGE_INFO_EVENT,
                function () {
                  return (0, o.mG)(void 0, void 0, void 0, function () {
                    var t;
                    return (0, o.Jh)(this, function (n) {
                      switch (n.label) {
                        case 0:
                          return [
                            4,
                            Bo(
                              e.value.id,
                              e.value.code,
                              xo.f(e.value.enrollment),
                            ),
                          ];
                        case 1:
                          return (
                            (t = n.sent()),
                            window.dispatchEvent(
                              new CustomEvent(
                                ko.j.SEND_AIR_CHAT_USAGE_INFO_EVENT,
                                { detail: { data: t } },
                              ),
                            ),
                            [2]
                          );
                      }
                    });
                  });
                },
              ),
              window.addEventListener(
                ko.j.REFRESH_AIR_CHAT_TOKEN_EVENT,
                function () {
                  return (0, o.mG)(void 0, void 0, void 0, function () {
                    var e, t, n;
                    return (0, o.Jh)(this, function (o) {
                      switch (o.label) {
                        case 0:
                          return [4, v()];
                        case 1:
                          return (
                            (e = o.sent()),
                            (t =
                              null ===
                                (n =
                                  null === e || void 0 === e
                                    ? void 0
                                    : e.data) || void 0 === n
                                ? void 0
                                : n["air_chat_token"]),
                            t &&
                              (p(t),
                              window.dispatchEvent(
                                new CustomEvent(
                                  ko.j.FINISH_REFRESH_AIR_CHAT_TOKEN_EVENT,
                                ),
                              )),
                            [2]
                          );
                      }
                    });
                  });
                },
              ),
              window.addEventListener(ko.j.AIR_PREVIEW_FILE, function (e) {
                return (0, o.mG)(void 0, void 0, void 0, function () {
                  return (0, o.Jh)(this, function (t) {
                    return (n(e), i(), [2]);
                  });
                });
              }),
              [2]
            );
          });
        });
      };
      return {
        setCourseId: l,
        getCourseId: c,
        removeToken: u,
        getToken: d,
        setToken: p,
        getChatToken: v,
        refreshToken: m,
        createAirChatbotScript: g,
        checkEnableAirChatbot: _,
        canViewBotByAiAbility: T,
        canViewBotByPlatformRoles: I,
        canViewBotByUserState: A,
        addChatbotListener: k,
        updateWindowData: h,
        canViewBotByCourseRoles: y,
        viewBotBlacklistValid: C,
        canViewBotByCreditStatus: E,
      };
    },
    Uo = n(25108),
    Ho = function () {
      return (0, o.mG)(void 0, void 0, void 0, function () {
        var e, t, n, r, a, s, l, c, u, d, p, m;
        return (0, o.Jh)(this, function (o) {
          switch (o.label) {
            case 0:
              if (
                ((e = Zo()),
                (t = e.createAirChatbotScript),
                (n = e.getChatToken),
                (r = e.getCourseId),
                (a = e.getToken),
                (s = e.setToken),
                (l = e.removeToken),
                (c = (0, ke.xt)().courseInfo),
                (u = (0, i.computed)(function () {
                  return c.value.id;
                })),
                r() !== u.value.toString() && l(),
                a())
              )
                return (t(), [2]);
              o.label = 1;
            case 1:
              return (o.trys.push([1, 3, , 4]), [4, n()]);
            case 2:
              return (
                (d = o.sent()),
                (p =
                  null === (m = null === d || void 0 === d ? void 0 : d.data) ||
                  void 0 === m
                    ? void 0
                    : m["air_chat_token"]),
                p && (s(p), t()),
                [3, 4]
              );
            case 3:
              return (
                o.sent(),
                Uo.error("get course token error,chatbot unavailable"),
                [3, 4]
              );
            case 4:
              return [2];
          }
        });
      });
    },
    Fo = !1,
    Go = function () {
      return (0, o.mG)(void 0, void 0, void 0, function () {
        var e, t, n, i, r, a;
        return (0, o.Jh)(this, function (o) {
          switch (o.label) {
            case 0:
              return (
                (e = Zo()),
                (t = e.checkEnableAirChatbot),
                (n = e.addChatbotListener),
                (i = e.refreshToken),
                (r = Do().initConfig),
                r(),
                Fo ? [4, i()] : [3, 2]
              );
            case 1:
              return (o.sent(), [2]);
            case 2:
              return ((Fo = !0), (a = Ho), n(), t() ? [4, a()] : [3, 4]);
            case 3:
              (o.sent(), (o.label = 4));
            case 4:
              return [2];
          }
        });
      });
    },
    zo = ["code", "courseName"],
    Qo = (0, i.defineComponent)({
      __name: "index",
      setup: function (e) {
        var t = this,
          n = (0, Dt.yj)(),
          r = (0, ke.xt)().courseInfo,
          a = (0, i.ref)(!1),
          s = Zo(),
          l = s.updateWindowData,
          c = s.canViewBotByCourseRoles,
          u = s.canViewBotByUserState,
          d = s.canViewBotByPlatformRoles,
          p = s.removeToken,
          m = s.viewBotBlacklistValid,
          f = s.canViewBotByAiAbility,
          v = function () {
            return (0, o.mG)(t, void 0, void 0, function () {
              var e, t, s, p, v, g;
              return (0, o.Jh)(this, function (o) {
                switch (o.label) {
                  case 0:
                    return (
                      (e =
                        null ===
                          (s =
                            null === n || void 0 === n ? void 0 : n.params) ||
                        void 0 === s
                          ? void 0
                          : s.courseId),
                      (t =
                        null === (p = r.value) || void 0 === p ? void 0 : p.id),
                      e &&
                      t &&
                      Number(t) === Number(e) &&
                      r.value.code &&
                      ["active", "inactive"].includes(
                        null !==
                          (g =
                            null === (v = r.value.creditState) || void 0 === v
                              ? void 0
                              : v.status) && void 0 !== g
                          ? g
                          : "",
                      )
                        ? [4, Go()]
                        : ((a.value = !1), [2])
                    );
                  case 1:
                    return (
                      o.sent(),
                      (0, i.nextTick)(function () {
                        if ((l(), m(n.name))) a.value = !1;
                        else {
                          var e = !1;
                          ((e =
                            void 0 === r.value.hasAiAbility
                              ? c() && u()
                              : d() && f()),
                            (a.value = e));
                        }
                      }),
                      [2]
                    );
                }
              });
            });
          };
        ((0, i.watch)(
          function () {
            var e;
            return [
              null === (e = null === n || void 0 === n ? void 0 : n.params) ||
              void 0 === e
                ? void 0
                : e.courseId,
              r,
            ];
          },
          v,
          { deep: !0, immediate: !0 },
        ),
          (0, i.watch)(
            function () {
              return null === n || void 0 === n ? void 0 : n.name;
            },
            function () {
              (null === n || void 0 === n ? void 0 : n.name) === S.q.Login &&
                p();
            },
            { immediate: !0 },
          ));
        var g = function (e) {
            a.value &&
              e &&
              window.dispatchEvent(
                new CustomEvent("app-keyboard-will-show", {
                  detail: { keyboardHeight: e.keyboardHeight },
                }),
              );
          },
          h = function () {
            a.value &&
              window.dispatchEvent(new CustomEvent("app-keyboard-did-hide"));
          };
        return (
          M.Z.on(O.J8, g),
          M.Z.on(O.Re, h),
          (0, i.onBeforeUnmount)(function () {
            (M.Z.off(O.J8, g), M.Z.off(O.Re, h));
          }),
          function (e, t) {
            return (0, i.withDirectives)(
              ((0, i.openBlock)(),
              (0, i.createElementBlock)(
                "air-chatbot-app",
                {
                  code: (0, i.unref)(r).code,
                  courseName: (0, i.unref)(r).courseName,
                },
                null,
                8,
                zo,
              )),
              [[i.vShow, a.value]],
            );
          }
        );
      },
    });
  const jo = Qo;
  var qo = jo,
    Jo = n(2228),
    Wo = n(3606),
    Xo = n(25108),
    Yo = (0, i.createElementVNode)(
      "div",
      { id: "globalFloatWindows" },
      null,
      -1,
    ),
    Ko = (0, i.defineComponent)({
      __name: "App",
      setup: function (e, t) {
        var a = this,
          s = t.expose;
        window.Global = f.Z;
        var l = (0, Dt.yj)(),
          c = (0, Sn.oR)(),
          u = (0, Jt.Xm)(),
          C = (0, i.inject)("navManager"),
          y = function (e) {
            return c.dispatch(m.lr, e);
          },
          A = function (e) {
            return c.dispatch("login/".concat(m.j9), e);
          },
          w = function (e) {
            return c.dispatch("login/".concat(m.Fw), e);
          },
          b = function () {
            return (0, o.mG)(a, void 0, void 0, function () {
              var e;
              return (0, o.Jh)(this, function (t) {
                return (
                  Xo.log(
                    "useNotification, useNotification: "
                      .concat(
                        null === (e = f.Z.org) || void 0 === e
                          ? void 0
                          : e.useNotification,
                        ", area: ",
                      )
                      .concat(f.Z.area),
                  ),
                  "app" !== f.Z.targetPlatform ||
                    window.APPRuntime.OFFLINE_MODE ||
                    (f.Z.org
                      ? !0 === f.Z.org.useNotification &&
                        ("cn" === f.Z.area
                          ? "harmonyos" !== f.Z.platform
                            ? d.Vn.Permissions.query({
                                name: d.vH.Notifications,
                              }).then(function (e) {
                                if (
                                  (Xo.log(
                                    "ntf permission result",
                                    null === e || void 0 === e
                                      ? void 0
                                      : e.state,
                                  ),
                                  "denied" !== e.state)
                                )
                                  (v.PushNotification.init(V.N.onNotification),
                                    v.Analytics.init());
                                else if ("android" === f.Z.platform) {
                                  Xo.log("android ntf request permission");
                                  var t = setTimeout(function () {
                                    M.Z.emit(O.XU, [!0, "notifications"]);
                                  }, 1e3);
                                  d.Vn.WriteFilePermission.requestPostNotificationPermission()
                                    .then(function (e) {
                                      (clearTimeout(t),
                                        M.Z.emit(O.XU, [!1, "notifications"]),
                                        Xo.log(
                                          "ntf request permission result",
                                          null === e || void 0 === e
                                            ? void 0
                                            : e.result,
                                        ),
                                        !0 ===
                                          (null === e || void 0 === e
                                            ? void 0
                                            : e.result) &&
                                          (v.PushNotification.init(
                                            V.N.onNotification,
                                          ),
                                          v.Analytics.init()));
                                    })
                                    .catch(function (e) {
                                      (clearTimeout(t),
                                        M.Z.emit(O.XU, [!1, "notifications"]),
                                        Xo.log(
                                          "user denied permission",
                                          e.message,
                                        ));
                                    });
                                }
                              })
                            : window.Cloak.plugins.Permission.requestNotificationPermission().then(
                                function (e) {
                                  (Xo.log("harmonyos ntf permission result", e),
                                    !0 === e &&
                                      v.PushNotification.init(
                                        V.N.onNotification,
                                      ));
                                },
                              )
                          : v.PushNotification.init(V.N.onNotification))
                      : (v.PushNotification.init(V.N.onNotification),
                        "cn" === f.Z.area && v.Analytics.init())),
                  [2]
                );
              });
            });
          },
          E = (0, Jo.h)().openBindTipModal,
          S = function e() {
            return (0, o.mG)(a, void 0, void 0, function () {
              var t;
              return (0, o.Jh)(this, function (o) {
                switch (o.label) {
                  case 0:
                    return (
                      Xo.log("afterLoggedIn"),
                      E(),
                      Lo.Z.init(),
                      (0, F.W)(),
                      H(f.Z.deliveryOrg),
                      [4, b()]
                    );
                  case 1:
                    return (
                      o.sent(),
                      v.PushNotification.setBadgeNumber(0),
                      u.value.unreadOrgBulletinPopup &&
                        x.showUnreadPopupOrgBulletinsModal(),
                      (0, p.F)(f.Z.deliveryOrg, u.value),
                      g.ZP.init(),
                      Q.ZP.setUpPubSub(),
                      (u.value.facePhotoCheckService ||
                        u.value.faceRecognitionService) &&
                        (ze.init(),
                        (0, Qe.y)().isPlatformStudentViewpoint(
                          f.Z.user.roles,
                        ) && M.Z.emit("loginFaceCheck")),
                      u.value.selfRegistrationRollcall && j.g.init(),
                      he.init(),
                      (null === (t = f.Z.user) || void 0 === t
                        ? void 0
                        : t.roles.length) ||
                        h["default"].showAlert(
                          Ie["default"].global.t("common.dataError"),
                        ),
                      u.value.singleUserSessionConstraint &&
                        (0, Qe.y)().isPlatformStudentViewpoint(
                          f.Z.user.roles,
                        ) &&
                        n(3911).Z.init(),
                      setTimeout(function () {
                        return _e.start();
                      }, 1e4),
                      M.Z.off(O.Jj, e),
                      [2]
                    );
                }
              });
            });
          },
          T = function () {
            (M.Z.on(O.Jj, S),
              y(f.Z),
              window.APPRuntime.setAreaInfo(f.Z),
              (0, p.F)(f.Z.deliveryOrg, u.value));
          };
        T();
        var _ = (0, i.ref)(),
          I = function () {
            return (0, o.mG)(a, void 0, void 0, function () {
              var e, t;
              return (0, o.Jh)(this, function (n) {
                switch (n.label) {
                  case 0:
                    return (
                      (e = void 0 !== l.query["no-cas"]),
                      !e && f.Z.area && f.Z.org
                        ? [4, z.Z.getOrgInfo(f.Z.org.orgName, f.Z.area)]
                        : [3, 2]
                    );
                  case 1:
                    ((t = n.sent()),
                      t &&
                        (t.orgName === f.Z.org.orgName &&
                          f.Z.org.code &&
                          (t.code = f.Z.org.code),
                        (0, q.ms)(f.Z.area, t),
                        A(t)),
                      (n.label = 2));
                  case 2:
                    return [2];
                }
              });
            });
          },
          L = function () {
            (d.Vn.App.addListener("appUrlOpen", function (e) {
              var t = e.url,
                n = null === t || void 0 === t ? void 0 : t.substring(12);
              if (n) {
                var o = n.indexOf("?");
                -1 === o && (o = n.length);
                var i = n.slice(0, o);
                ["login-by-identity-token"].includes(i) &&
                  (window.location.href = Tn.joinPath("/", n));
              }
            }),
              v.AppState.listen(),
              v.PushNotification.deleteCachedTags(),
              f.Z.isLogin && w(f.Z.userID),
              I(),
              ft(),
              M.Z.on(O.Q7, function (e) {
                (Xo.log("APP_STATE_CHANGE: " + e),
                  (J.Z.isForeground = e === je.l.Visible),
                  J.Z.isForeground &&
                    ("android" !== f.Z.platform ||
                      J.Z.permissionWriteExternalStorage ||
                      (0, Wo.R)(),
                    ft()));
              }));
          },
          k = (0, i.ref)(!1),
          P = function () {
            var e, t;
            k.value = !0;
            var n =
              null !==
                (t = null === (e = _.value) || void 0 === e ? void 0 : e.id) &&
              void 0 !== t
                ? t
                : 1;
            ((0, i.provide)("rootOutletId", Number(n)),
              v.DarkMode.initialize(),
              N.Z.checkLatestVersion(),
              setTimeout(function () {
                (L(),
                  d.Vn.SplashScreen.hide(),
                  v.Analytics.addCalculateEvent("launch", 1, G.x()));
              }, 300),
              M.Z.on(O.vU, function () {
                null === C || void 0 === C || C.clearCurrentNavigationInfo();
              }));
          };
        (0, i.onMounted)(P);
        var B = f.Z.settings;
        return (
          s({ settingsReactive: B }),
          function (e, t) {
            return (
              (0, i.openBlock)(),
              (0, i.createBlock)(
                (0, i.unref)(r.dr),
                { id: "ionApp" },
                {
                  default: (0, i.withCtx)(function () {
                    return [
                      k.value
                        ? ((0, i.openBlock)(),
                          (0, i.createBlock)(
                            i.Teleport,
                            { key: 0, to: "#globalTipContainer" },
                            [(0, i.createVNode)(Io)],
                          ))
                        : (0, i.createCommentVNode)("", !0),
                      (0, i.createVNode)(
                        (0, i.unref)(r.jP),
                        {
                          id: "rootOutletRef",
                          ref_key: "rootOutletRef",
                          ref: _,
                        },
                        null,
                        512,
                      ),
                      (0, i.createVNode)(
                        En,
                        {
                          routePath: e.$route.fullPath,
                          "data-testid": "ShareLayer",
                        },
                        null,
                        8,
                        ["routePath"],
                      ),
                      (0, i.createVNode)(qo),
                      Yo,
                    ];
                  }),
                  _: 1,
                },
              )
            );
          }
        );
      },
    });
  const $o = Ko;
  var ei,
    ti = $o,
    ni = (n(74001), n(89884)),
    oi = (n(40561), "..."),
    ii = -3,
    ri = /^[\u4e00-\u9fa5]+$/g,
    ai = function (e, t) {
      var n = window.getComputedStyle(e),
        o = n.fontSize,
        i = n.width,
        r = n.paddingLeft,
        a = n.paddingRight,
        s = (parseInt(i, 0) - parseInt(r, 0) - parseInt(a, 0)) / parseInt(o, 0),
        l = parseInt((oi.length / 2).toFixed(0), 0),
        c = t.value;
      (c.length > s &&
        ((c = c.split("", s)),
        c.splice(ii - l, oi.length / l, oi),
        (c = c.join(""))),
        (e.innerText = c));
    },
    si = function (e) {
      ((e.style.overflow = "hidden"),
        (e.style.textOverflow = "ellipsis"),
        (e.style.whiteSpace = "nowrap"));
    },
    li = function (e) {
      ((e.style.overflow = "hidden"),
        (e.style.textOverflow = "clip"),
        (e.style.whiteSpace = "nowrap"));
    },
    ci = {
      beforeMount: function (e, t) {
        String(t.value).match(ri)
          ? ((ei = function () {
              ai(e, t);
            }),
            window.addEventListener("resize", ei),
            li(e),
            ai(e, t))
          : (si(e), (e.innerText = t.value));
      },
      mounted: function (e, t) {
        String(t.value).match(ri) && ai(e, t);
      },
      updated: function (e, t) {
        ai(e, t);
      },
      unmounted: function () {
        window.removeEventListener("resize", ei);
      },
    },
    ui = ci,
    di = (n(60285), n(41637), n(70189), n(88255)),
    pi =
      (n(15306),
      function (e) {
        return Be().isString(e) && 0 === e.indexOf("/static");
      }),
    mi = function (e) {
      return (
        (mi = function (e) {
          return pi(e)
            ? ""
                .concat(f.Z.apiPrefix.api, "/")
                .concat(encodeURIComponent(e.replace("/static/images/", "")))
            : e;
        }),
        mi(e)
      );
    },
    fi = n(51813),
    vi = Y.Z.get("Cache Manager"),
    gi = "/cache",
    hi = "cache",
    Ci = function (e) {
      return e.slice(0, +(e.indexOf("?") - 1) + 1 || void 0);
    },
    yi = new Set();
  function Ai(e, t) {
    return (0, o.mG)(this, void 0, Promise, function () {
      var n, i, r, a, s, l, c, u, p, m;
      return (0, o.Jh)(this, function (o) {
        switch (o.label) {
          case 0:
            return "harmonyos" === f.Z.platform
              ? [2, t]
              : "app" === f.Z.targetPlatform && t
                ? (
                    null === t || void 0 === t
                      ? void 0
                      : t.startsWith("data:image")
                  )
                  ? [2, t]
                  : ((n = [hi, "".concat(e), "uri"].join(".")),
                    (i = [hi, "".concat(e), "url"].join(".")),
                    (r = "".concat(gi, "/").concat(e)),
                    [4, v.Filesystem.getURI(r)])
                : [2, t];
          case 1:
            return (
              (a = o.sent()),
              (s = d.dV.convertFileSrc(a)),
              [4, v.DataStorage.getItem(n)]
            );
          case 2:
            return ((l = o.sent()), [4, v.DataStorage.getItem(i)]);
          case 3:
            if (((c = o.sent()), !c || !l || Ci(t) !== Ci(c))) return [3, 7];
            o.label = 4;
          case 4:
            return (o.trys.push([4, 6, , 7]), [4, v.Filesystem.existed(r)]);
          case 5:
            return ((u = o.sent()), u.existed ? [2, s] : [3, 7]);
          case 6:
            return (
              o.sent(),
              vi.info("cache file ".concat(l, " has been deleted")),
              [3, 7]
            );
          case 7:
            if (yi.has(t)) return (vi.warn("file downloading..."), [2, t]);
            o.label = 8;
          case 8:
            return (
              o.trys.push([8, 13, , 14]),
              yi.add(t),
              [4, v.FileTransfer.download(t, a)]
            );
          case 9:
            return (o.sent(), yi.delete(t), [4, v.Filesystem.existed(a, !0)]);
          case 10:
            if (((p = o.sent()), !p.existed))
              throw new Error("cacheFile download failed");
            return [4, v.DataStorage.setItem(n, r)];
          case 11:
            return (o.sent(), [4, v.DataStorage.setItem(i, t)]);
          case 12:
            return (o.sent(), [2, s]);
          case 13:
            return ((m = o.sent()), vi.error(m), [2, t]);
          case 14:
            return [2];
        }
      });
    });
  }
  var wi = (function () {
      function e() {}
      return (
        (e.cacheCourseCover = function (e, t) {
          var n = (0, di.zP)(t),
            o = "COURSE_COVER_" + e;
          return J.Z.permissionWriteExternalStorage
            ? Ai(o, n)
            : Promise.resolve(n);
        }),
        (e.cacheUserAvatar = function (e, t) {
          var n = (0, di.zP)(t),
            o = "USER_AVATAR_" + e;
          return J.Z.permissionWriteExternalStorage
            ? Ai(o, n)
            : Promise.resolve(n);
        }),
        (e.cacheExternalResource = function (e) {
          return J.Z.permissionWriteExternalStorage
            ? Ai("EXTERNAL_RESOURCE_".concat(fi.V.hashStr(e)), e)
            : Promise.resolve(e);
        }),
        (e.cacheCurriculumCover = function (e, t) {
          var n = mi(t),
            o = "CURRICULUM_COVER_" + e;
          return J.Z.permissionWriteExternalStorage
            ? Ai(o, n)
            : Promise.resolve(n);
        }),
        (e.cacheQueueInit = function () {
          yi = new Set();
        }),
        e
      );
    })(),
    bi = wi,
    Ei = function (e, t) {
      return (0, o.mG)(this, void 0, void 0, function () {
        var n, i, r, a, s, l, c, u, d;
        return (0, o.Jh)(this, function (o) {
          switch (o.label) {
            case 0:
              if (
                ((n = ""),
                (i = ""),
                (r = t.value || {}),
                (a = r.key),
                (s = r.value),
                (l = r.cacheType),
                (c = r.styleName),
                (i = c ? e.style[c] : e.getAttribute("src")),
                !s)
              )
                return [3, 10];
              switch (((u = l), u)) {
                case "course-cover":
                  return [3, 1];
                case "user-avatar":
                  return [3, 3];
                case "external-resource":
                  return [3, 5];
                case "curriculum-cover":
                  return [3, 7];
              }
              return [3, 9];
            case 1:
              return [4, bi.cacheCourseCover(a, s)];
            case 2:
              return ((n = o.sent()), [3, 9]);
            case 3:
              return [4, bi.cacheUserAvatar(a, s)];
            case 4:
              return ((n = o.sent()), [3, 9]);
            case 5:
              return [4, bi.cacheExternalResource(s)];
            case 6:
              return ((n = o.sent()), [3, 9]);
            case 7:
              return [4, bi.cacheCurriculumCover(a, s)];
            case 8:
              return ((n = o.sent()), [3, 9]);
            case 9:
              (!n ||
                (n === i && "user-avatar" !== l) ||
                (!n.startsWith("data:image") &&
                  ("ios" === f.Z.platform ||
                    ("android" === f.Z.platform &&
                      J.Z.permissionWriteExternalStorage)) &&
                  ((d = new URL(n)),
                  d.searchParams.set("updatedAt", Date.now().toString()),
                  (n = d.toString())),
                c
                  ? (e.style[c] = "url(".concat(n, ")"))
                  : e.setAttribute("src", n)),
                (o.label = 10));
            case 10:
              return [2];
          }
        });
      });
    },
    Si = {
      beforeMount: function (e, t) {
        return (0, o.mG)(this, void 0, void 0, function () {
          return (0, o.Jh)(this, function (n) {
            switch (n.label) {
              case 0:
                return [4, Ei(e, t)];
              case 1:
                return (n.sent(), [2]);
            }
          });
        });
      },
      updated: function (e, t) {
        return (0, o.mG)(this, void 0, void 0, function () {
          return (0, o.Jh)(this, function (n) {
            switch (n.label) {
              case 0:
                return [4, Ei(e, t)];
              case 1:
                return (n.sent(), [2]);
            }
          });
        });
      },
    },
    Ti = Si,
    _i =
      (n(34553),
      {
        updated: function (e, t) {
          var n = t.value;
          if ("enrollment" === t.arg && ((e.hidden = !0), n.length > 0)) {
            var o = n.shift();
            o &&
              (n.findIndex(function (e) {
                return e === o.enrollment;
              }) < 0
                ? e.remove()
                : (e.hidden = !1));
          }
        },
      }),
    Ii = _i,
    Li = (n(4129), new WeakMap()),
    ki = {
      mounted: function (e) {
        var t = function () {
          e === document.activeElement && e.scrollIntoView({ block: "center" });
        };
        (Li.set(e, t), M.Z.on(O.J8, t));
      },
      unmounted: function (e) {
        Li.has(e) && (M.Z.off(O.J8, Li.get(e)), Li.delete(e));
      },
    },
    Pi = ki,
    Bi = {
      beforeMount: function (e, t) {
        return (0, o.mG)(this, void 0, void 0, function () {
          var n;
          return (0, o.Jh)(this, function (o) {
            return (
              (n = (0, Rt.T)(t.value.featurePoint, t.value.payload)),
              n || (e.style.display = "none"),
              [2]
            );
          });
        });
      },
    },
    Ri = Bi,
    xi = {
      beforeMount: function (e, t) {
        var n;
        return (0, o.mG)(this, void 0, void 0, function () {
          var i;
          return (0, o.Jh)(this, function (o) {
            return (
              (i =
                null !== (n = t.value) && void 0 !== n
                  ? n
                  : He.Format.DATETIME_FORMAT),
              (e.innerText = (0, He.format)(e.innerText, i)),
              [2]
            );
          });
        });
      },
    },
    Oi = xi,
    Mi = new WeakMap(),
    Vi = {
      mounted: function (e, t) {
        if (
          !t.arg ||
          ("native" === t.arg
            ? "app" === f.Z.targetPlatform
            : t.arg === f.Z.targetPlatform)
        ) {
          var n = {
            hidden: e.hasAttribute("hidden") || e.classList.contains("hidden"),
            show: function () {
              n.hidden || e.setAttribute("hidden", "true");
            },
            hide: function () {
              n.hidden || e.removeAttribute("hidden");
            },
          };
          (Mi.set(e, n), M.Z.on(O.J8, n.show), M.Z.on(O.Re, n.hide));
        }
      },
      unmounted: function (e) {
        Mi.has(e) &&
          (M.Z.off(O.J8, Mi.get(e).show),
          M.Z.off(O.Re, Mi.get(e).hide),
          Mi.delete(e));
      },
    },
    Ni = Vi,
    Di = {
      updated: function (e, t) {
        var n = function () {
          var n = Number(e.dataset.tooltipDuraction);
          e.style.position = "relative";
          var o =
              '\n    <div class="toolTipDirective">\n        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="7" viewBox="0 0 15 7" fill="none">\n            <path d="M15 6.50466L9.34319 0.847807C8.56214 0.0667588 7.29581 0.0667587 6.51476 0.847807L0.85791 6.50466L15 6.50466Z" fill="#4D525C" fill-opacity="0.9"/>\n        </svg>\n        '.concat(
                t.value,
                "\n    </div>\n    ",
              ),
            i = new DOMParser(),
            r = i.parseFromString(o, "text/html").querySelector("div");
          r &&
            (e.appendChild(r),
            setTimeout(function () {
              r.remove();
            }, n));
        };
        t.value && n();
      },
    },
    Zi = Di,
    Ui = n(59363),
    Hi = n(47084),
    Fi = n.n(Hi),
    Gi = function (e, t) {
      (t.modifiers.katex &&
        (0, Ui.Z)(e, {
          throwOnError: !1,
          output: "mathml",
          delimiters: [
            { left: "$$", right: "$$", display: !1 },
            { left: "$", right: "$", display: !1 },
          ],
          ignoredTags: [
            "script",
            "noscript",
            "style",
            "textarea",
            "pre",
            "code",
          ],
        }),
        t.modifiers.markdown && (e.innerHTML = Fi().parse(e.innerHTML)));
    },
    zi = {
      mounted: function (e, t) {
        Gi(e, t);
      },
      updated: function (e, t) {
        Gi(e, t);
      },
    },
    Qi = zi,
    ji = {
      short: ui,
      cache: Ti,
      role: Ii,
      "input-auto-scroll": Pi,
      "feature-point": Ri,
      "format-datetime": Oi,
      "hide-on-keyboard": Ni,
      "tool-tip": Zi,
      "ai-quiz-formatter": Qi,
    },
    qi = n(33187),
    Ji = ["loginType", "home", "courses", "live", "notification", "profile"],
    Wi = !1,
    Xi = function (e) {
      Ji.includes(b["default"].currentRoute.value.name)
        ? Wi
          ? (0, qi.Z)()
          : ((Wi = !0),
            h["default"].showMessage(
              Ie["default"].global.t("common.backMessage"),
            ),
            setTimeout(function () {
              Wi = !1;
            }, 2e3))
        : e();
    },
    Yi = function () {
      var e;
      null === (e = window.Cloak) ||
        void 0 === e ||
        e.plugins.App.addEventListener("backButton", function () {
          document.dispatchEvent(new CustomEvent("backbutton"));
        });
    },
    Ki = function () {
      (Yi(),
        document.addEventListener("ionBackButton", function (e) {
          e.detail.register(xn.jy, Xi);
        }));
    },
    $i = Ki,
    er = n(57768),
    tr = n(28989),
    nr = n(72696);
  function or(e, t, n, o, r, a) {
    var s = (0, i.resolveComponent)("ion-refresher-content"),
      l = (0, i.resolveComponent)("ion-refresher"),
      c = (0, i.resolveComponent)("ion-backdrop");
    return (
      (0, i.openBlock)(),
      (0, i.createElementBlock)(
        i.Fragment,
        null,
        [
          (0, i.createVNode)(
            l,
            {
              "pull-factor": "0.5",
              slot: "fixed",
              ref: "refresherRef",
              mode: "md",
              "pull-min": e.pullMin,
              class: "pull-refresher",
              disabled: e.disabled,
              onInitialized: e.ionInitialized,
              onMoveEnd: e.onMoveEnd,
              onIonStart: e.ionStart,
              onIonPull: e.ionPull,
              onIonRefresh: e.ionRefresh,
            },
            {
              default: (0, i.withCtx)(function () {
                return [(0, i.createVNode)(s, { mode: "md" })];
              }),
              _: 1,
            },
            8,
            [
              "pull-min",
              "disabled",
              "onInitialized",
              "onMoveEnd",
              "onIonStart",
              "onIonPull",
              "onIonRefresh",
            ],
          ),
          e.lockRefreshingActions && e.refreshing
            ? ((0, i.openBlock)(),
              (0, i.createBlock)(c, {
                key: 0,
                class: "backdrop",
                tappable: !1,
              }))
            : (0, i.createCommentVNode)("", !0),
        ],
        64,
      )
    );
  }
  var ir,
    rr = n(50715),
    ar = n(53789),
    sr = n(38698),
    lr = function (e, t, n) {
      return function (o) {
        var i = o > e ? e : o;
        CSS.supports("scroll-behavior", "smooth")
          ? null === t ||
            void 0 === t ||
            t.scrollTo({ top: i, behavior: "smooth" })
          : null === n || void 0 === n || n.scrollToPoint(0, i, 300);
      };
    },
    cr = function (e) {
      return e >= 6 ? e : 6;
    },
    ur = function (e) {
      return function (t) {
        if (t < 200) return 0;
        var n = (t * (Math.random() + 0.2)) / 500,
          o = 0.2 * e * n;
        return cr(o);
      };
    },
    dr = function () {
      return /iPad|iPhone|iPod/.test(window.navigator.userAgent);
    },
    pr = n(42054),
    mr = function (e, t) {
      var n,
        o,
        i = t,
        r = !1,
        a = !1,
        s = new Date().getTime(),
        l = pr.Z,
        c = function (e) {
          return 0;
        },
        u = function () {
          if (o) {
            var e = o.scrollHeight - o.clientHeight;
            ((l = lr(e, o, n)), (c = ur(e)));
          }
        },
        d = function () {
          var t, a, s;
          dr()
            ? ((n =
                null ===
                  (a =
                    null === (t = e.value) || void 0 === t ? void 0 : t.$el) ||
                void 0 === a
                  ? void 0
                  : a.closest("ion-content")),
              (o =
                null ===
                  (s = null === n || void 0 === n ? void 0 : n.shadowRoot) ||
                void 0 === s
                  ? void 0
                  : s.querySelector("main")),
              (i = i && !!n && !!o),
              i &&
                ((r = n.scrollEvents),
                (n.scrollEvents = !0),
                n.addEventListener("ion-scroll-end", g),
                u()))
            : (i = !1);
        },
        p = function () {
          null === n ||
            void 0 === n ||
            n.addEventListener("touchstart", f, { capture: !0, passive: !0 });
        },
        m = function () {
          null === n ||
            void 0 === n ||
            n.removeEventListener("touchstart", f, {
              capture: !0,
              passive: !0,
            });
        },
        f = function () {
          var e;
          if (a) {
            var t = new Date().getTime(),
              n = t - s;
            if (n < 800) {
              if ((u(), !CSS.supports("scroll-behavior", "smooth"))) {
                var i = c(n);
                i > 0 && l(i);
              }
              (null === (e = null === o || void 0 === o ? void 0 : o.style) ||
                void 0 === e ||
                e.removeProperty("--overflow"),
                m(),
                (a = !1));
            } else s = t;
          }
        };
      (0, Oo.B)(function () {
        i &&
          n &&
          ((n.scrollEvents = r),
          n.removeEventListener("ion-scroll-end", g),
          m());
      });
      var v = function (e) {
          var t;
          i &&
            a &&
            (u(),
            e.detail.deltaY < 0 &&
              (l(cr(-Math.ceil(e.detail.deltaY))),
              null === (t = null === o || void 0 === o ? void 0 : o.style) ||
                void 0 === t ||
                t.removeProperty("--overflow"),
              m(),
              (a = !1)));
        },
        g = function () {
          var e,
            t,
            n =
              null !==
                (e = null === o || void 0 === o ? void 0 : o.scrollTop) &&
              void 0 !== e
                ? e
                : 1;
          n <= 5 &&
            (o && n > 0 && (o.scrollTop = 0),
            null === (t = null === o || void 0 === o ? void 0 : o.style) ||
              void 0 === t ||
              t.setProperty("--overflow", "hidden"),
            (a = !0),
            p());
        },
        h = function () {
          var e;
          i &&
            (n &&
              !o &&
              (o =
                null === (e = n.value) || void 0 === e
                  ? void 0
                  : e.$el.shadowRoot.querySelector("main")),
            u(),
            null === o ||
              void 0 === o ||
              o.style.setProperty("--overflow", "hidden"),
            (a = !0),
            p());
        };
      return { initialized: d, endRefresh: h, onMoveEnd: v };
    },
    fr = n(25108),
    vr = 3e3;
  (function (e) {
    ((e[(e["Inactive"] = 1)] = "Inactive"),
      (e[(e["Pulling"] = 2)] = "Pulling"),
      (e[(e["Ready"] = 4)] = "Ready"),
      (e[(e["Refreshing"] = 8)] = "Refreshing"),
      (e[(e["Cancelling"] = 16)] = "Cancelling"),
      (e[(e["Completing"] = 32)] = "Completing"),
      (e[(e["_BUSY_"] = 56)] = "_BUSY_"));
  })(ir || (ir = {}));
  var gr = (0, i.defineComponent)({
    name: "PullRefresher",
    emits: ["initialized", "refresh", "onMoveEnd"],
    inheritAttrs: !1,
    components: { IonRefresher: r.nJ, IonRefresherContent: r.Wo },
    props: {
      immediate: { type: Boolean, default: !1 },
      timeout: { type: Number, default: 3e4 },
      disabled: { type: Boolean, default: !1 },
      refreshKey: { type: String },
      lockRefreshingActions: { type: Boolean, default: !0 },
      optimizeBrowserPullDown: { type: Boolean, default: !0 },
    },
    setup: function (e, t) {
      var n,
        r,
        a = this,
        s = t.emit,
        l = (0, Dt.yj)(),
        c = (0, $t.QT)(),
        u = (0, i.ref)(),
        d = (0, i.computed)(function () {
          var e;
          return null === (e = u.value) || void 0 === e ? void 0 : e.$el;
        }),
        p = mr(u, e.optimizeBrowserPullDown),
        m = sr.n0.Cancel,
        f = (0, i.ref)(!1),
        g = (0, i.ref)(),
        C = function () {
          return (0, o.mG)(a, void 0, void 0, function () {
            var e;
            return (0, o.Jh)(this, function (t) {
              switch (t.label) {
                case 0:
                  return r
                    ? [2]
                    : [
                        4,
                        null === (e = d.value) || void 0 === e
                          ? void 0
                          : e.getScrollElement(),
                      ];
                case 1:
                  return ((r = t.sent()), [2]);
              }
            });
          });
        },
        y = function () {
          var e;
          r && (null === r || void 0 === r ? void 0 : r.scrollTop) > 0
            ? F()
            : null === (e = d.value) || void 0 === e || e.autoRefresh();
        },
        A = function () {
          var e;
          (r && r.scrollTop > 0 && (r.scrollTop = 0),
            null === (e = d.value) || void 0 === e || e.autoRefresh());
        },
        w = function (e) {
          f.value || ("auto" === e ? y() : "force" === e && A());
        },
        b = function (e) {
          var t, n;
          (O(),
            f.value &&
              (p.endRefresh(),
              (f.value = !1),
              "cancel" === e
                ? null === (t = d.value) || void 0 === t || t.cancel()
                : "complete" === e &&
                  (null === (n = d.value) || void 0 === n || n.complete(),
                  H())));
        },
        E = function () {
          var e = new rr.y(function (e) {
            n = e;
          });
          e.subscribe(function (e) {
            switch (((m = e), e)) {
              case sr.n0.Cancel:
                b("cancel");
                break;
              case sr.n0.AffectNothingStart:
                w("auto");
                break;
              case sr.n0.Start:
              case sr.n0.AutoStart:
                w("auto");
                break;
              case sr.n0.ForceStart:
                w("force");
                break;
              default:
                b("complete");
                break;
            }
          });
        },
        S = function () {
          var t;
          (E(),
            (g.value =
              null !== (t = e.refreshKey) && void 0 !== t ? t : l.name),
            tr.Z.registerSubscriber(g.value, n));
        };
      S();
      var T = 88,
        _ = (0, i.ref)(T);
      (0, i.onBeforeUnmount)(function () {
        (g.value && tr.Z.unRegisterSubscriber(g.value),
          n.unsubscribe(),
          P(),
          H(),
          b());
      });
      var I,
        L = (0, i.computed)(function () {
          return Boolean(g.value && tr.Z.isNeedRefresh(g.value));
        }),
        k = void 0,
        P = function () {
          k && (clearTimeout(k), (k = void 0));
        },
        B = function () {
          (C(),
            p.initialized(),
            s("initialized", { subscriber: n }),
            (L.value || e.immediate) &&
              (k = setTimeout(function () {
                (n.next(L.value ? sr.n0.Start : sr.n0.AutoStart),
                  tr.Z.pageRefreshed(g.value));
              }, 500)));
        },
        R = function (e) {
          (p.onMoveEnd(e), s("onMoveEnd", e));
        },
        x = !1,
        O = function () {
          (clearTimeout(I), (I = void 0));
        },
        M = function () {
          ((x = !1),
            O(),
            (I = setTimeout(function () {
              return (0, o.mG)(a, void 0, void 0, function () {
                var e, t, n;
                return (0, o.Jh)(this, function (o) {
                  switch (o.label) {
                    case 0:
                      return [
                        4,
                        null === (t = d.value) || void 0 === t
                          ? void 0
                          : t.getState(),
                      ];
                    case 1:
                      return (
                        (e = o.sent()),
                        fr.log("force end timeout, state", e),
                        e === ir.Pulling &&
                          (O(),
                          null === (n = d.value) ||
                            void 0 === n ||
                            n.forceEndPull(),
                          (f.value = !1),
                          fr.log("force end timeout executed")),
                        [2]
                      );
                  }
                });
              });
            }, vr)));
        },
        V = function () {
          return (0, o.mG)(a, void 0, void 0, function () {
            var e, t;
            return (0, o.Jh)(this, function (n) {
              switch (n.label) {
                case 0:
                  return [
                    4,
                    null === (t = d.value) || void 0 === t
                      ? void 0
                      : t.getProgress(),
                  ];
                case 1:
                  return (
                    (e = n.sent()),
                    e >= 1 && !x && ((x = !0), v.Haptics.impact()),
                    [2]
                  );
              }
            });
          });
        },
        N = void 0,
        D = void 0,
        Z = void 0,
        U = function () {
          (N && (clearTimeout(N), (N = void 0)),
            D && (D.dismiss(), (D = void 0)));
        },
        H = function () {
          (U(), Z && (Z.unsubscribe(), (Z = void 0)));
        },
        F = function () {
          f.value ||
            ((f.value = !0),
            O(),
            H(),
            (N = setTimeout(function () {
              return (0, o.mG)(a, void 0, void 0, function () {
                return (0, o.Jh)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return (
                        e.trys.push([0, 2, , 3]),
                        [
                          4,
                          h["default"].showMessage(c.t("common.networkBusy"), {
                            timeout: 0,
                            position: "middle",
                          }),
                        ]
                      );
                    case 1:
                      return ((D = e.sent()), b(), [3, 3]);
                    case 2:
                      return (e.sent(), [3, 3]);
                    case 3:
                      return [2];
                  }
                });
              });
            }, 3e4)),
            w(),
            m !== sr.n0.AffectNothingStart &&
              (s("refresh", { subscriber: n, operation: m }),
              (Z = (0, ar.H)(e.timeout).subscribe(function () {
                (n.next(sr.n0.Cancel), H());
              }))));
        },
        G = function () {
          n.next(sr.n0.Start);
        };
      return {
        onMoveEnd: R,
        refreshing: f,
        refresherRef: u,
        manualRefresh: G,
        pullMin: _,
        ionInitialized: B,
        ionStart: M,
        ionRefresh: F,
        ionPull: V,
      };
    },
  });
  const hr = (0, I.Z)(gr, [
    ["render", or],
    ["__scopeId", "data-v-714a9256"],
  ]);
  var Cr = hr,
    yr = n(65061),
    Ar = n(36246),
    wr = n(63156),
    br = n(82664),
    Er = (0, i.defineComponent)(
      (0, o.pi)(
        { name: "DeferredTeleport" },
        {
          __name: "DeferredTeleport",
          props: {
            to: {},
            disabled: { type: Boolean, default: !1 },
            timeout: { default: 3e3 },
          },
          emits: ["ready", "timeout"],
          setup: function (e, t) {
            var n = t.emit,
              o = e,
              r = (0, i.ref)(!1),
              a = null,
              s = function () {
                if (o.disabled || !o.to)
                  return ((r.value = !0), n("ready"), !0);
                var e =
                  "string" === typeof o.to
                    ? document.querySelector(o.to)
                    : o.to;
                return e
                  ? ((r.value = !0), n("ready"), d(), !0)
                  : ((r.value = !1), !1);
              },
              l = (0, br.Dj)(s, {
                config: {
                  childList: !0,
                  subtree: !0,
                  attributeFilter: ["id", "class"],
                },
              }),
              c = l.startObserve,
              u = l.stopObserve,
              d = function () {
                (u(), a && (clearTimeout(a), (a = null)));
              },
              p = function () {
                (d(),
                  s() ||
                    (c(document.body),
                    (a = setTimeout(function () {
                      r.value || (n("timeout"), d());
                    }, o.timeout))));
              };
            return (
              (0, i.onMounted)(p),
              (0, i.watch)(
                function () {
                  return [o.to, o.disabled];
                },
                p,
                { flush: "post" },
              ),
              (0, i.onBeforeUnmount)(d),
              function (e, t) {
                return r.value
                  ? ((0, i.openBlock)(),
                    (0, i.createBlock)(
                      i.Teleport,
                      { key: 0, to: e.to, disabled: e.disabled },
                      [(0, i.renderSlot)(e.$slots, "default")],
                      8,
                      ["to", "disabled"],
                    ))
                  : (0, i.createCommentVNode)("", !0);
              }
            );
          },
        },
      ),
    );
  const Sr = Er;
  var Tr = Sr,
    _r = {
      install: function (e) {
        ((e.config.globalProperties.UserRoleEnum = tt.tG),
          (e.config.globalProperties.EnrollmentRoleEnum = tt.EN),
          (e.config.globalProperties.$window = window));
      },
    },
    Ir = _r,
    Lr = n(13095),
    kr = n(76707),
    Pr = n(82747),
    Br = n(51619),
    Rr = n(54120),
    xr = JSON.parse(
      '{"publicCourse":{"evaluated":"Message"},"notification":{"type":{"course_estimate":"Course Message","course_estimate_reply":"Comment of Course"},"message":{"course_estimate":"<div>The reply of <span>[{{course_name}}]</span> has received <span>{{estimate_count}}</span> replies, go to see it.</div>","course_estimate_reply":"<div>Course <span>[{{course_name}}]</span> received <span>{{replies_num}}</span> comments, go to see it.</div>"}}}',
    ),
    Or = JSON.parse(
      '{"publicCourse":{"evaluated":"留言"},"notification":{"type":{"course_estimate":"课程留言","course_estimate_reply":"课程留言的评论"},"message":{"course_estimate":"<div>你在课程 <span>【{{course_name}}】</span> 的留言收到了 <span>{{estimate_count}}</span> 条评论，去看看吧。</div>","course_estimate_reply":"<div>课程 <span>【{{course_name}}】</span> 收到 <span>{{replies_num}}</span> 条留言，去看看吧。</div>"}}}',
    ),
    Mr = JSON.parse(
      '{"publicCourse":{"evaluated":"留言"},"notification":{"type":{"course_estimate":"課程留言","course_estimate_reply":"課程留言的回覆"},"message":{"course_estimate":"<div>你在課程 <span>【{{course_name}}】</span> 的留言收到了 <span>{{estimate_count}}</span> 條回覆，去看看吧。</div>","course_estimate_reply":"<div>課程 <span>【{{course_name}}】</span> 收到 <span>{{replies_num}}</span> 條留言，去看看吧。</div>"}}}',
    ),
    Vr = JSON.parse(
      '{"publicCourse":{"evaluated":"ข้อความ"},"notification":{"type":{"course_estimate":"ข้อความของรายวิชา","course_estimate_reply":"ความคิดเห็นของข้อความรายวิชา"},"message":{"course_estimate":"<div>ข้อความของคุณในรายวิชา <span>[{{course_name}}]</span> ได้รับความคิดเห็น <span>{{estimate_count}}</span> รายการ ไปดูเลย</div>","course_estimate_reply":"<div>รายวิชา <span>[{{course_name}}]</span> ได้รับข้อความ <span>{{replies_num}}</span> รายการ ไปดูเลย</div>"}}}',
    ),
    Nr = { "en-US": xr, "zh-Hans": Or, "zh-Hant": Mr, "th-TH": Vr },
    Dr = function (e, t) {
      return t && t.courseEstimateWithoutScore ? Nr : {};
    },
    Zr = { getMessages: Dr },
    Ur = JSON.parse(
      '{"notification":{"message":{"activity_opened":{"tencent_meeting":"<div>Class Class <span>{{activity_title}}</span> of course [{{course_name}}] is opened at {{formatDatetime(start_time)}}</div>"},"activity_expiring":{"tencent_meeting":"<div>Class Class <span>{{activity_title}}</span> of course [{{course_name}}] is going to be end from {{formatDatetime(end_time)}}</div>"}}},"content":{"tabs":{"tencentMeeting":"Live Class"}},"tencentMeeting":{"classRoom":"Class Room","notStart":"Class Class is not started","ended":"Class Class is closed","completionCriterion":{"view":"View Class Class"}}}',
    ),
    Hr = JSON.parse(
      '{"notification":{"message":{"activity_opened":{"tencent_meeting":"<div>课程 【{{course_name}}】 的课堂直播 <span>{{activity_title}}</span> 已于 {{formatDatetime(start_time)}} 开放</div>"},"activity_expiring":{"tencent_meeting":"<div>课程 【{{course_name}}】 的课堂直播 <span>{{activity_title}}</span> 即将于 {{formatDatetime(end_time)}} 截止</div>"}}},"content":{"tabs":{"tencentMeeting":"课堂直播"}},"tencentMeeting":{"classRoom":"智慧教室","notStart":"课堂直播未开始","ended":"课堂直播已结束","completionCriterion":{"view":"访问课堂直播"}}}',
    ),
    Fr = JSON.parse(
      '{"notification":{"message":{"activity_opened":{"tencent_meeting":"<div>課程 【{{course_name}}】 的騰訊會議 <span>{{activity_title}}</span> 已於 {{formatDatetime(start_time)}} 開放</div>"},"activity_expiring":{"tencent_meeting":"<div>課程 【{{course_name}}】 的騰訊會議 <span>{{activity_title}}</span> 即將於 {{formatDatetime(end_time)}} 截止</div>"}}},"content":{"tabs":{"tencentMeeting":"课堂直播"}},"tencentMeeting":{"classRoom":"智慧教室","notStart":"課堂直播 未開始","ended":"課堂直播已結束","completionCriterion":{"view":"參與課堂直播"}}}',
    ),
    Gr = JSON.parse(
      '{"notification":{"message":{"activity_opened":{"tencent_meeting":"<div>คลาสถ่ายทอดสด <span>{{activity_title}}</span> ของรายวิชา [{{course_name}}] เปิดแล้วเมื่อ {{formatDatetime(start_time)}}</div>"},"activity_expiring":{"tencent_meeting":"<div>คลาสถ่ายทอดสด <span>{{activity_title}}</span> ของรายวิชา [{{course_name}}] กำลังจะสิ้นสุดใน {{formatDatetime(end_time)}}</div>"}}},"content":{"tabs":{"tencentMeeting":"คลาสถ่ายทอดสด"}},"tencentMeeting":{"classRoom":"ห้องเรียนอัจฉริยะ","notStart":"คลาสถ่ายทอดสดยังไม่เริ่ม","ended":"คลาสถ่ายทอดสดสิ้นสุดแล้ว","completionCriterion":{"view":"เข้าชมคลาสถ่ายทอดสด"}}}',
    ),
    zr = { "en-US": Ur, "zh-Hans": Hr, "zh-Hant": Fr, "th-TH": Gr },
    Qr = function (e, t) {
      return t && t.cloudClassroom ? zr : {};
    },
    jr = { getMessages: Qr },
    qr = JSON.parse(
      '{"home":{"actions":{"score":"Grade","schedule":"Schedule","selectCourse":"Elective","questionnaire":"Questionnaire","applicationForm":"Application","paymentRecord":"Payment records"}}}',
    ),
    Jr = JSON.parse(
      '{"home":{"actions":{"score":"成绩","schedule":"课表","selectCourse":"选课","questionnaire":"问卷","applicationForm":"申请表","paymentRecord":"缴费记录"}}}',
    ),
    Wr = JSON.parse(
      '{"home":{"actions":{"score":"成績","schedule":"課表","selectCourse":"選課","questionnaire":"問卷","applicationForm":"申請表","paymentRecord":"繳費記錄"}}}',
    ),
    Xr = JSON.parse(
      '{"home":{"actions":{"score":"คะแนน","schedule":"ตารางเรียน","selectCourse":"เลือกวิชา","questionnaire":"แบบสอบถาม","applicationForm":"แบบฟอร์มคำขอ","paymentRecord":"ประวัติการชำระเงิน"}}}',
    ),
    Yr = { "en-US": qr, "zh-Hans": Jr, "zh-Hant": Wr, "th-TH": Xr },
    Kr = function (e, t) {
      return (null === e || void 0 === e ? void 0 : e.includes("tw-azure-su"))
        ? Yr
        : {};
    },
    $r = { getMessages: Kr },
    ea = JSON.parse(
      '{"content":{"tabs":{"onlineVideo":"Video","lesson":"Lession","page":"Page"}},"profile":{"userResource":"Resource"},"navs":{"types":{"material":"Resource"}},"analysis":{"overview":{"lesson":"Video Stat"}}}',
    ),
    ta = JSON.parse(
      '{"content":{"tabs":{"onlineVideo":"音视频文件","lesson":"课程视频","page":"网页资料"}},"profile":{"userResource":"课程资源"},"navs":{"types":{"material":"课程资源"}},"analysis":{"overview":{"lesson":"课程视频观看次数"}}}',
    ),
    na = JSON.parse(
      '{"content":{"tabs":{"onlineVideo":"影音文件","lesson":"課程影片","page":"頁面"}},"profile":{"userResource":"課程資源"},"navs":{"types":{"material":"課程資源"}},"analysis":{"overview":{"lesson":"課程影片觀看次數"}}}',
    ),
    oa = JSON.parse(
      '{"content":{"tabs":{"onlineVideo":"ไฟล์สื่อเสียง/วิดีโอ","lesson":"วิดีโอรายวิชา","page":"หน้าเว็บ"}},"profile":{"userResource":"ทรัพยากรรายวิชา"},"navs":{"types":{"material":"ทรัพยากรรายวิชา"}},"analysis":{"overview":{"lesson":"จำนวนการชมวิดีโอรายวิชา"}}}',
    ),
    ia = { "en-US": ea, "zh-Hans": ta, "zh-Hant": na, "th-TH": oa },
    ra = function (e, t) {
      return "jlu" === e ? ia : {};
    },
    aa = { getMessages: ra },
    sa = JSON.parse(
      '{"login":{"casLogin":"Login with OnO Account(LDAP)","tcLogin":"Login without OnO Account(LDAP)"}}',
    ),
    la = JSON.parse(
      '{"login":{"casLogin":"酷课OnO线上教室单一登入","tcLogin":"切换为非酷课OnO线上教室单一登入"}}',
    ),
    ca = JSON.parse(
      '{"login":{"casLogin":"酷課OnO線上教室單一登入","tcLogin":"切換為非酷課OnO線上教室單一登入"}}',
    ),
    ua = JSON.parse(
      '{"login":{"casLogin":"เข้าสู่ระบบด้วยบัญชี OnO (LDAP)","tcLogin":"เข้าสู่ระบบโดยไม่ใช้บัญชี OnO (LDAP)"}}',
    ),
    da = { "en-US": sa, "zh-Hans": la, "zh-Hant": ca, "th-TH": ua },
    pa = function (e, t) {
      return "TP-DOE" === e ? da : {};
    },
    ma = { getMessages: pa },
    fa = JSON.parse(
      '{"login":{"accountPlaceholder":"Please input mobile Phone"}}',
    ),
    va = JSON.parse('{"login":{"accountPlaceholder":"请输入手机号"}}'),
    ga = JSON.parse('{"login":{"accountPlaceholder":"請填寫手機號"}}'),
    ha = JSON.parse(
      '{"login":{"accountPlaceholder":"กรุณากรอกหมายเลขโทรศัพท์มือถือ"}}',
    ),
    Ca = { "en-US": fa, "zh-Hans": va, "zh-Hant": ga, "th-TH": ha },
    ya = function (e, t) {
      return e && ["NSJX", "YQJX", "ZJUTMS", "JMSCL"].includes(e) ? Ca : {};
    },
    Aa = { getMessages: ya },
    wa = JSON.parse(
      '{"login":{"accountPlaceholder":"s+StudentID/t+TeacherID","userNoPlaceholder":"s+StudentID/t+TeacherID","emailPlaceholder":"s+StudentID/t+TeacherID"}}',
    ),
    ba = JSON.parse(
      '{"login":{"accountPlaceholder":"s + 学号  /  t + 教职员编号","userNoPlaceholder":"s + 学号  /  t + 教职员编号","emailPlaceholder":"s + 学号  /  t + 教职员编号"}}',
    ),
    Ea = JSON.parse(
      '{"login":{"accountPlaceholder":"s + 學號  /  t + 教職員編號","userNoPlaceholder":"s + 學號  /  t + 教職員編號","emailPlaceholder":"s + 學號  /  t + 教職員編號"}}',
    ),
    Sa = JSON.parse(
      '{"login":{"accountPlaceholder":"s+รหัสนักศึกษา/t+รหัสบุคลากร","userNoPlaceholder":"s+รหัสนักศึกษา/t+รหัสบุคลากร","emailPlaceholder":"s+รหัสนักศึกษา/t+รหัสบุคลากร"}}',
    ),
    Ta = { "en-US": wa, "zh-Hans": ba, "zh-Hant": Ea, "th-TH": Sa },
    _a = function (e, t) {
      return "CYUT" === e ? Ta : {};
    },
    Ia = { getMessages: _a },
    La = JSON.parse(
      '{"live":{"type":{"tencentMeeting":"Live Class"}},"notification":{"message":{"activity_opened":{"tencent_meeting":"<div>Live Class <span>{{activity_title}}</span> of course [{{course_name}}] is opened at {{formatDatetime(start_time)}}</div>"},"activity_expiring":{"tencent_meeting":"<div>Live Class <span>{{activity_title}}</span> of course [{{course_name}}] is going to be end from {{formatDatetime(end_time)}}</div>"}}},"content":{"tabs":{"tencentMeeting":"Live Class"}},"tencentMeeting":{"notStart":"Live Class is not started","ended":"Live Class is closed","completionCriterion":{"view":"View Live Class"}}}',
    ),
    ka = JSON.parse(
      '{"live":{"type":{"tencentMeeting":"直播课堂"}},"notification":{"message":{"activity_opened":{"tencent_meeting":"<div>课程 【{{course_name}}】 的直播课堂 <span>{{activity_title}}</span> 已于 {{formatDatetime(start_time)}} 开放</div>"},"activity_expiring":{"tencent_meeting":"<div>课程 【{{course_name}}】 的直播课堂 <span>{{activity_title}}</span> 即将于 {{formatDatetime(end_time)}} 截止</div>"}}},"content":{"tabs":{"tencentMeeting":"直播课堂"}},"tencentMeeting":{"notStart":"直播课堂未开始","ended":"直播课堂已结束","completionCriterion":{"view":"访问直播课堂"}}}',
    ),
    Pa = JSON.parse(
      '{"live":{"type":{"tencentMeeting":"直播課堂"}},"notification":{"message":{"activity_opened":{"tencent_meeting":"<div>课程 【{{course_name}}】 的直播課堂 <span>{{activity_title}}</span> 已于 {{formatDatetime(start_time)}} 开放</div>"},"activity_expiring":{"tencent_meeting":"<div>课程 【{{course_name}}】 的直播課堂 <span>{{activity_title}}</span> 即将于 {{formatDatetime(end_time)}} 截止</div>"}}},"content":{"tabs":{"tencentMeeting":"直播課堂"}},"tencentMeeting":{"notStart":"直播課堂未开始","ended":"直播課堂已结束","completionCriterion":{"view":"访问直播課堂"}}}',
    ),
    Ba = JSON.parse(
      '{"live":{"type":{"tencentMeeting":"คลาสถ่ายทอดสด"}},"notification":{"message":{"activity_opened":{"tencent_meeting":"<div>คลาสถ่ายทอดสด <span>{{activity_title}}</span> ของรายวิชา [{{course_name}}] เปิดแล้วเมื่อ {{formatDatetime(start_time)}}</div>"},"activity_expiring":{"tencent_meeting":"<div>คลาสถ่ายทอดสด <span>{{activity_title}}</span> ของรายวิชา [{{course_name}}] กำลังจะสิ้นสุดใน {{formatDatetime(end_time)}}</div>"}}},"content":{"tabs":{"tencentMeeting":"คลาสถ่ายทอดสด"}},"tencentMeeting":{"notStart":"คลาสถ่ายทอดสดยังไม่เริ่ม","ended":"คลาสถ่ายทอดสดสิ้นสุดแล้ว","completionCriterion":{"view":"เข้าชมคลาสถ่ายทอดสด"}}}',
    ),
    Ra = { "en-US": La, "zh-Hans": ka, "zh-Hant": Pa, "th-TH": Ba },
    xa = function (e, t) {
      return (null === e || void 0 === e ? void 0 : e.includes("BJGYJS"))
        ? Ra
        : {};
    },
    Oa = { getMessages: xa },
    Ma = JSON.parse('{"share":{"info":"Scan QR Code by MOOC SPOC"}}'),
    Va = JSON.parse('{"share":{"info":"使用“成电慕课”扫码"}}'),
    Na = JSON.parse('{"share":{"info":"使用“成电慕课”掃描QR Code"}}'),
    Da = JSON.parse('{"share":{"info":"สแกน QR Code ด้วย \'MOOC\'"}}'),
    Za = { "en-US": Ma, "zh-Hans": Va, "zh-Hant": Na, "th-TH": Da },
    Ua = function (e, t) {
      return "uestc" === e ? Za : {};
    },
    Ha = { getMessages: Ua },
    Fa = {},
    Ga = JSON.parse('{"rollcall":{"status":{"absent":"未到"}}}'),
    za = JSON.parse('{"rollcall":{"status":{"absent":"未到"}}}'),
    Qa = JSON.parse('{"rollcall":{"status":{"absent":"ขาด"}}}'),
    ja = { "en-US": Fa, "zh-Hans": Ga, "zh-Hant": za, "th-TH": Qa },
    qa = function (e, t) {
      return "PU" === e ? ja : {};
    },
    Ja = { getMessages: qa },
    Wa = JSON.parse('{"navs":{"items":{"microReview":"Evaluation"}}}'),
    Xa = JSON.parse('{"navs":{"items":{"microReview":"微评"}}}'),
    Ya = JSON.parse('{"navs":{"items":{"microReview":"微評"}}}'),
    Ka = JSON.parse('{"navs":{"items":{"microReview":"การประเมิน"}}}'),
    $a = { "en-US": Wa, "zh-Hans": Xa, "zh-Hant": Ya, "th-TH": Ka },
    es = function (e, t) {
      return "CSU" === e ? $a : {};
    },
    ts = { getMessages: es },
    ns = JSON.parse(
      '{"common":{"allDepartments":"All Departments","departments":"Department"},"publicCourse":{"openedDepartments":"Open Departments","department":"Department","subjectCode":"Academic Subject Code","joinError":{"currentUserCanNotJoinCourse":"You can\'t join this course, please check the open requirements of this course.","guestCannotJoinFormalCourse":"Do not allow guest to join the formal course"}},"curriculum":{"filter":{"department":"Department","notSpecifiedDepartment":"Not Specified"}},"studio":{"department":"Department"},"outline":{"subjectCode":"Academic Subject Code","department":"Department"},"filter":{"departmentNotSpecified":"Not Specified"},"score":{"can_not_edit_score":"Score submitted, unable to update"},"notification":{"message":{"course_outline_edit":"<div>Educational Admin {{user_name}} remind you to finish editing the outline of course <span>[{{course_name}}]</span></div>"}},"user":{"contactAdmin":"Please contact Edu Admin or Super Admin to edit."},"homework":{"gradeHaveBeenDelivered":"Cannot edit assignment or score, because total score has been delivered to admin"},"loginError":{"identityAuthFailed":"Uniform Identity Account abnormal, please contact the school to confirm the login institution and account information"},"live":{"scope":{"school":"Internal","public":"Public"}},"course":{"publicScope":{"org":"On-campus","offCampus":"Off-campus"}},"login":{"tcLogin":"Off-Campus user login"},"mobilePhoneEdit":{"forOffCampus":"For Off-Campus Users"}}',
    ),
    os = JSON.parse(
      '{"common":{"allDepartments":"所有單位","departments":"單位"},"publicCourse":{"openedDepartments":"开放单位","department":"开课单位","subjectCode":"科目代码","joinError":{"currentUserCanNotJoinCourse":"请确认您的平台角色、单位是否符合「开放限制」","guestCannotJoinFormalCourse":"課程不允許訪客加入"}},"curriculum":{"filter":{"department":"单位","notSpecifiedDepartment":"无指定单位"}},"studio":{"department":"开课单位"},"outline":{"subjectCode":"科目代码","department":"开课单位"},"filter":{"departmentNotSpecified":"无指定单位"},"score":{"can_not_edit_score":"成绩已送交，无法修改"},"notification":{"message":{"course_outline_edit":"<div>{{user_name}} 提醒你完成课程 <span>【{{course_name}}】</span> 的大纲制定</div>"}},"user":{"contactAdmin":"请联系人员或管理员进行修改"},"homework":{"gradeHaveBeenDelivered":"总成绩已送交，不能进行作业编辑和成绩修改"},"loginError":{"identityAuthFailed":"统一身份认证账号异常，请联系机构内确认登录机构及账号信息"},"live":{"scope":{"school":"机构内公开","public":"机构外公开"}},"course":{"publicScope":{"org":"机构内公开","offCampus":"机构外公开"}},"login":{"tcLogin":"机构外用户登录"},"mobilePhoneEdit":{"forOffCampus":"仅支持机构外人员通过此路径找回密码"}}',
    ),
    is = JSON.parse(
      '{"common":{"allDepartments":"所有單位","departments":"單位"},"publicCourse":{"openedDepartments":"開放單位","department":"開課單位","subjectCode":"科目代碼","joinError":{"currentUserCanNotJoinCourse":"請確認您的平台身份、單位是否符合「開放限制」","guestCannotJoinFormalCourse":"課程不允許訪客加入"}},"curriculum":{"filter":{"department":"單位","notSpecifiedDepartment":"無指定單位"}},"studio":{"department":"開課單位"},"outline":{"subjectCode":"科目代碼","department":"開課單位"},"filter":{"departmentNotSpecified":"無指定單位"},"score":{"can_not_edit_score":"成績已送繳，無法修改"},"notification":{"message":{"course_outline_edit":"<div>{{user_name}} 提醒你完成課程 <span>【{{course_name}}】</span> 的大綱制定</div>"}},"user":{"contactAdmin":"請聯絡人員或管理員進行修改"},"homework":{"gradeHaveBeenDelivered":"總成績已送缴，不能編輯作業和修改成績"},"loginError":{"identityAuthFailed":"身份認證帳號異常，請聯繫機構內確認登入機構及帳號資訊"},"live":{"scope":{"school":"機構內公開","public":"機構外公開"}},"course":{"publicScope":{"org":"機構內公開","offCampus":"機構外公開"}},"login":{"tcLogin":"機構外用戶登入"},"mobilePhoneEdit":{"forOffCampus":"僅支援機構外人員取回密碼"}}',
    ),
    rs = JSON.parse(
      '{"common":{"allDepartments":"ทุกหน่วยงาน","departments":"หน่วยงาน"},"publicCourse":{"openedDepartments":"หน่วยงานที่เปิด","department":"หน่วยงานที่เปิดสอน","subjectCode":"รหัสวิชา","joinError":{"currentUserCanNotJoinCourse":"โปรดยืนยันบทบาทและหน่วยงานของคุณว่าเป็นไปตาม ‘ข้อจำกัดการเปิดรับ’","guestCannotJoinFormalCourse":"ไม่อนุญาตให้ผู้เยี่ยมชมเข้าร่วมรายวิชาแบบปกติ"}},"curriculum":{"filter":{"department":"หน่วยงาน","notSpecifiedDepartment":"ไม่ระบุหน่วยงาน"}},"studio":{"department":"หน่วยงานที่เปิดสอน"},"outline":{"subjectCode":"รหัสวิชา","department":"หน่วยงานที่เปิดสอน"},"filter":{"departmentNotSpecified":"ไม่ระบุหน่วยงาน"},"score":{"can_not_edit_score":"ได้ส่งผลการเรียนแล้ว ไม่สามารถแก้ไขได้"},"notification":{"message":{"course_outline_edit":"<div>{{user_name}} แจ้งให้คุณจัดทำโครงร่างรายวิชา <span>【{{course_name}}】</span></div>"}},"user":{"contactAdmin":"โปรดติดต่อเจ้าหน้าที่หรือผู้ดูแลระบบเพื่อแก้ไข"},"homework":{"gradeHaveBeenDelivered":"ได้ส่งผลการเรียนรวมแล้ว ไม่สามารถแก้ไขงานและคะแนนได้"},"loginError":{"identityAuthFailed":"บัญชีตรวจสอบตัวตนแบบรวมมีปัญหา โปรดยืนยันสังกัดและข้อมูลบัญชีในหน่วยงาน"},"live":{"scope":{"school":"สาธารณะภายในหน่วยงาน","public":"สาธารณะภายนอกหน่วยงาน"}},"course":{"publicScope":{"org":"สาธารณะภายในหน่วยงาน","offCampus":"สาธารณะภายนอกหน่วยงาน"}},"login":{"tcLogin":"เข้าสู่ระบบของผู้ใช้นอกหน่วยงาน"},"mobilePhoneEdit":{"forOffCampus":"รองรับเฉพาะบุคคลภายนอกหน่วยงานกู้รหัสผ่านผ่านช่องทางนี้"}}',
    ),
    as = { "en-US": ns, "zh-Hans": os, "zh-Hant": is, "th-TH": rs },
    ss = function (e, t) {
      var n, o;
      return "tw-azure-wg-su" !== e ||
        ("taia" !==
          (null === (n = window.APPRuntime.ORG) || void 0 === n
            ? void 0
            : n.code) &&
          "atdtw" !==
            (null === (o = window.APPRuntime.ORG) || void 0 === o
              ? void 0
              : o.code))
        ? {}
        : as;
    },
    ls = { getMessages: ss },
    cs = JSON.parse(
      '{"common":{"departments":"Department","allDepartments":"Departments","grades":"Job Title","allGrades":"Job Titles","classes":"Job Level ","allClasses":"Job Levels"},"course":{"filter":{"academicYear":"Year","semester":"Phase"}}}',
    ),
    us = JSON.parse(
      '{"common":{"departments":"单位","allDepartments":"所有单位","grades":"职称","allGrades":"所有职称","classes":"职级","allClasses":"所有职级"},"course":{"filter":{"academicYear":"年度","semester":"期别","filter":{"notSpecifiedAcademicYear":"无指定","notSpecifiedSemester":"无指定"}}},"filter":{"departmentNotSpecified":"无指定","gradeNotSpecified":"无指定","classNotSpecified":"无指定"}}',
    ),
    ds = JSON.parse(
      '{"common":{"departments":"單位","allDepartments":"所有單位","grades":"職稱","allGrades":"所有職稱","classes":"職級","allClasses":"所有職級"},"course":{"filter":{"academicYear":"年度","semester":"期別","filter":{"notSpecifiedAcademicYear":"無指定","notSpecifiedSemester":"無指定"}}},"filter":{"departmentNotSpecified":"無指定","gradeNotSpecified":"無指定","classNotSpecified":"無指定"}}',
    ),
    ps = JSON.parse(
      '{"common":{"departments":"หน่วยงาน","allDepartments":"ทุกหน่วยงาน","grades":"ตำแหน่งวิชาการ","allGrades":"ทุกตำแหน่งวิชาการ","classes":"ระดับตำแหน่ง","allClasses":"ทุกระดับตำแหน่ง"},"course":{"filter":{"academicYear":"ปีการศึกษา","semester":"ภาคการศึกษา","filter":{"notSpecifiedAcademicYear":"ไม่ระบุ","notSpecifiedSemester":"ไม่ระบุ"}}},"filter":{"departmentNotSpecified":"ไม่ระบุ","gradeNotSpecified":"ไม่ระบุ","classNotSpecified":"ไม่ระบุ"}}',
    ),
    ms = JSON.parse(
      '{"common":{"departments":"부서","allDepartments":"모든 부서","grades":"직함","allGrades":"모든 직함","classes":"직급","allClasses":"모든 직급"},"course":{"filter":{"academicYear":"연도","semester":"학기","filter":{"notSpecifiedAcademicYear":"지정 없음","notSpecifiedSemester":"지정 없음"}}},"filter":{"departmentNotSpecified":"지정 없음","gradeNotSpecified":"지정 없음","classNotSpecified":"지정 없음"}}',
    ),
    fs = {
      "en-US": cs,
      "zh-Hans": us,
      "zh-Hant": ds,
      "th-TH": ps,
      "ko-KR": ms,
    },
    vs = function (e, t) {
      return "tw-azure-su" === e && f.Z.settings.orgSetting.customizeI18n
        ? fs
        : {};
    },
    gs = { getMessages: vs },
    hs = JSON.parse(
      '{"common":{"allDepartments":"Class Cagegory","departments":"Class Cagegory"},"filter":{"departmentNotSpecified":"Not Specified"},"outline":{"department":"Class Cagegory"},"publicCourse":{"openedDepartments":"Class Cagegory"}}',
    ),
    Cs = JSON.parse(
      '{"common":{"allDepartments":"班级类别","departments":"班级类别"},"filter":{"departmentNotSpecified":"无指定班级类别"},"outline":{"department":"班级类别"},"publicCourse":{"openedDepartments":"班级类别"}}',
    ),
    ys = JSON.parse(
      '{"common":{"allDepartments":"班級類別","cdepartments":"班級類別"},"filter":{"departmentNotSpecified":"無指定班級類別"},"outline":{"department":"班級類別"},"publicCourse":{"openedDepartments":"班級類別"}}',
    ),
    As = { "en-US": hs, "zh-Hans": Cs, "zh-Hant": ys },
    ws = function (e) {
      return "xzzj-zhxx" ===
        (null === e || void 0 === e ? void 0 : e.toLowerCase())
        ? As
        : {};
    },
    bs = { getMessages: ws },
    Es = JSON.parse('{"home":{"activates":{"reservation":"Schedule"}}}'),
    Ss = JSON.parse('{"home":{"activates":{"reservation":"排程查询"}}}'),
    Ts = JSON.parse('{"home":{"activates":{"reservation":"排程查詢"}}}'),
    _s = { "en-US": Es, "zh-Hans": Ss, "zh-Hant": Ts },
    Is = function (e) {
      return "chd" === (null === e || void 0 === e ? void 0 : e.toLowerCase())
        ? _s
        : {};
    },
    Ls = { getMessages: Is },
    ks = JSON.parse(
      '{"role":{"instructor":"Team leader","lecturer":"Chief instructor"}}',
    ),
    Ps = JSON.parse(
      '{"role":{"instructor":"课程负责人","lecturer":"主讲教师"}}',
    ),
    Bs = JSON.parse(
      '{"role":{"instructor":"課程負責人","lecturer":"主講教師"}}',
    ),
    Rs = { "en-US": ks, "zh-Hans": Ps, "zh-Hant": Bs },
    xs = {
      getMessages: function (e, t) {
        return (
          null === t || void 0 === t ? void 0 : t.enableLecturerCourseRole
        )
          ? Rs
          : {};
      },
    },
    Os = xs,
    Ms = JSON.parse(
      '{"login":{"accountPlaceholder":"请输入邮箱或学工号","userNoPlaceholder":"请输入学工号"},"common":{"allDepartments":"所有院所","departments":"院所"},"publicCourse":{"openedDepartments":"开放院所","joinError":{"currentUserCanNotJoinCourse":"请确认您的平台角色、院所是否符合「开放限制」"}},"rollcall":{"searchPlaceholder":"姓名/学工号"},"curriculum":{"filter":{"department":"院所","notSpecifiedDepartment":"无指定院所"}},"course":{"score":{"searchPlaceholder":"姓名/学工号"}},"studio":{"department":"开课院所"},"outline":{"department":"开课院所"},"user":{"userNo":"学工号"},"questionnaire":{"searchPlaceholder":"姓名/学工号"},"selectStudent":{"searchPlaceholder":"姓名/学工号"},"filter":{"departmentNotSpecified":"无指定院所"}}',
    ),
    Vs = { "zh-Hans": Ms },
    Ns = function (e) {
      return "shanghaitech" === e ? Vs : {};
    },
    Ds = { getMessages: Ns },
    Zs = Ds,
    Us = JSON.parse(
      '{"live":{"courseSearchPlaceholder":"输入课程名称/教师/地点","liveSearchPlaceholder":"输入活动名称/主讲人/地点","oldUnifiedSearchPlaceholder":"输入活动名称/主讲人"},"publicCourse":{"gradeClass":"年级"},"outline":{"gradeClass":"年级"},"enrollments":{"memberSum":"共有 {0} 位教师 {1} 名学生"}}',
    ),
    Hs = JSON.parse(
      '{"live":{"courseSearchPlaceholder":"輸入課程名稱/教師/地點","liveSearchPlaceholder":"輸入活動名稱/主講人/地點","oldUnifiedSearchPlaceholder":"輸入活動名稱/主講人"},"publicCourse":{"gradeClass":"年級"},"outline":{"gradeClass":"年級"},"enrollments":{"memberSum":"共有 {0} 位教師 {1} 名學生"}}',
    ),
    Fs = JSON.parse(
      '{"live":{"courseSearchPlaceholder":"Course name / Teacher / Location","liveSearchPlaceholder":"Activity name / Teacher / Location","oldUnifiedSearchPlaceholder":"Activity name / speaker"},"publicCourse":{"gradeClass":"Grade"},"outline":{"gradeClass":"Grade"},"enrollments":{"memberSum":"{0} instructors, and {1} students"}}',
    ),
    Gs = { "en-US": Fs, "zh-Hans": Us, "zh-Hant": Hs },
    zs = function () {
      return f.Z.settings.orgSetting.splitDepartmentsAndGradesAndHideClasses
        ? Gs
        : {};
    },
    Qs = { getMessages: zs },
    js = Qs;
  (Rr.Z.register(Zr),
    Rr.Z.register(jr),
    Rr.Z.register($r),
    Rr.Z.register(aa),
    Rr.Z.register(ma),
    Rr.Z.register(Aa),
    Rr.Z.register(Ia),
    Rr.Z.register(Oa),
    Rr.Z.register(Ja),
    Rr.Z.register(Ha),
    Rr.Z.register(ts),
    Rr.Z.register(ls),
    Rr.Z.register(gs),
    Rr.Z.register(bs),
    Rr.Z.register(Ls),
    Rr.Z.register(Os),
    Rr.Z.register(Zs),
    Rr.Z.register(js));
  var qs = ["disabled"],
    Js = ["src"],
    Ws = ["src"],
    Xs = ["disabled"];
  function Ys(e, t, o, r, a, s) {
    var l = (0, i.resolveDirective)("cache");
    return "alt" === e.mode
      ? ((0, i.openBlock)(),
        (0, i.createElementBlock)(
          "a",
          {
            key: 0,
            "data-testid": "image",
            class: "alt-image",
            disabled: !!e.disabled || null,
            onClick:
              t[0] ||
              (t[0] = (0, i.withModifiers)(
                function () {
                  for (var t = [], n = 0; n < arguments.length; n++)
                    t[n] = arguments[n];
                  return e.viewImage && e.viewImage.apply(e, t);
                },
                ["stop"],
              )),
          },
          " [" + (0, i.toDisplayString)(e.i18n.t("common.image")) + "] ",
          9,
          qs,
        ))
      : ((0, i.openBlock)(),
        (0, i.createElementBlock)(
          "div",
          {
            key: 1,
            class: (0, i.normalizeClass)([
              "normal-image-box",
              {
                "normal-image-box__loading": e.isLoading,
                "normal-image-box__failed": e.isLoadFailed,
                "normal-image-box__loaded": e.isLoaded,
              },
            ]),
          },
          [
            e.isLoading
              ? ((0, i.openBlock)(),
                (0, i.createElementBlock)(
                  "img",
                  { key: 0, src: n(77929) },
                  null,
                  8,
                  Js,
                ))
              : e.isLoadFailed
                ? ((0, i.openBlock)(),
                  (0, i.createElementBlock)(
                    "img",
                    { key: 1, src: n(62563) },
                    null,
                    8,
                    Ws,
                  ))
                : (0, i.createCommentVNode)("", !0),
            e.isLoadFailed
              ? (0, i.createCommentVNode)("", !0)
              : (0, i.withDirectives)(
                  ((0, i.openBlock)(),
                  (0, i.createElementBlock)(
                    "img",
                    {
                      key: 2,
                      class: "image",
                      "data-testid": "image",
                      alt: "0",
                      disabled: !!e.disabled || null,
                      onClick:
                        t[1] ||
                        (t[1] = (0, i.withModifiers)(
                          function () {
                            for (var t = [], n = 0; n < arguments.length; n++)
                              t[n] = arguments[n];
                            return e.viewImage && e.viewImage.apply(e, t);
                          },
                          ["stop"],
                        )),
                      onLoad:
                        t[2] ||
                        (t[2] = function () {
                          for (var t = [], n = 0; n < arguments.length; n++)
                            t[n] = arguments[n];
                          return e.imgLoaded && e.imgLoaded.apply(e, t);
                        }),
                      onError:
                        t[3] ||
                        (t[3] = function () {
                          for (var t = [], n = 0; n < arguments.length; n++)
                            t[n] = arguments[n];
                          return e.imgError && e.imgError.apply(e, t);
                        }),
                    },
                    null,
                    40,
                    Xs,
                  )),
                  [
                    [i.vShow, e.isLoaded],
                    [l, { value: e.source, cacheType: "external-resource" }],
                  ],
                ),
          ],
          2,
        ));
  }
  var Ks = (0, i.defineComponent)({
      name: "RichContentImage",
      props: {
        src: { type: String, required: !0 },
        mode: {
          type: String,
          default: "normal",
          validator: function (e) {
            return ["normal", "alt"].includes(e);
          },
        },
        disabled: { type: Boolean },
      },
      directives: { cache: Ti },
      setup: function (e) {
        var t = this,
          n = (0, i.computed)(function () {
            return e.src.startsWith("/api/")
              ? new URL(e.src, f.Z.apiPrefix.api).href
              : e.src;
          }),
          r = (0, i.ref)("loading");
        (0, i.watch)(n, function () {
          n.value
            ? ((r.value = "loading"), bi.cacheExternalResource(n.value))
            : (r.value = "failed");
        });
        var a = (0, i.computed)(function () {
            return n.value && "loading" === r.value;
          }),
          s = (0, i.computed)(function () {
            return n.value && "loaded" === r.value;
          }),
          l = (0, i.computed)(function () {
            return !n.value || "failed" === r.value;
          }),
          c = function () {
            ((r.value = "loaded"), M.Z.emit("imgLoaded"));
          },
          u = function () {
            r.value = "failed";
          },
          d = function () {
            return (0, o.mG)(t, void 0, void 0, function () {
              var t;
              return (0, o.Jh)(this, function (o) {
                switch (o.label) {
                  case 0:
                    return e.disabled
                      ? [2]
                      : [4, bi.cacheExternalResource(n.value)];
                  case 1:
                    return ((t = o.sent()), v.ImageViewer.view(t, ""), [2]);
                }
              });
            });
          };
        return {
          i18n: window.globalI18n,
          source: n,
          viewImage: d,
          isLoading: a,
          isLoaded: s,
          isLoadFailed: l,
          imgLoaded: c,
          imgError: u,
        };
      },
    }),
    $s =
      "a.alt-image[disabled]{pointer-events:none}a.alt-image:not([disabled]){color:var(--font-color-primary)}.normal-image-box{width:100%;height:200px;border-radius:8px;background-color:var(--background-white);margin:.5rem 0}.normal-image-box__loading{display:flex;align-items:center;justify-content:center}.normal-image-box__loading img{width:24px;height:24px}.normal-image-box__failed img{width:100%;height:100%}.normal-image-box__loaded{height:auto;border-radius:0}.normal-image-box__loaded .image:not(.data-latex):not([data-latex]):not([data-non-image=mathtype-formula]){max-width:100%;vertical-align:middle}.normal-image-box__loaded .image:not(.data-latex):not([data-latex]):not([data-non-image]){-webkit-filter:var(--invert-color-filter-filter);filter:var(--invert-color-filter-filter)}.normal-image-box__loaded .image[disabled]{pointer-events:none}";
  const el = (0, I.Z)(Ks, [
    ["render", Ys],
    ["styles", [$s]],
  ]);
  var tl = el;
  function nl(e, t, n, o, r, a) {
    return (
      (0, i.openBlock)(),
      (0, i.createElementBlock)(
        "a",
        {
          class: "vocabulary-entry",
          onClick:
            t[0] ||
            (t[0] = function () {
              for (var t = [], n = 0; n < arguments.length; n++)
                t[n] = arguments[n];
              return e.showEntry && e.showEntry.apply(e, t);
            }),
        },
        (0, i.toDisplayString)(e.name),
        1,
      )
    );
  }
  var ol = (0, i.defineComponent)({
      name: "VocabularyEntry",
      props: {
        id: { type: Number, default: 0 },
        name: { type: String, default: "" },
      },
      setup: function (e) {
        var t = function () {
          b["default"].push({
            name: S.q.VocabularyEntry,
            params: { id: String(e.id) },
          });
        };
        return { showEntry: t };
      },
    }),
    il = ".vocabulary-entry{color:#068894;font-weight:600}";
  const rl = (0, I.Z)(ol, [
    ["render", nl],
    ["styles", [il]],
  ]);
  var al = rl,
    sl = (0, i.createStaticVNode)(
      '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="disabled-event clozeSvgIcon"><g clip-path="url(#clip0)"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.65291 0.292893C10.0434 -0.0976311 10.6766 -0.0976311 11.0671 0.292893L13.7071 2.93289C14.0977 3.32342 14.0977 3.95658 13.7071 4.34711L6.22713 11.8271C6.09897 11.9553 5.93839 12.0462 5.76256 12.0901L2.24256 12.9701C1.90178 13.0553 1.54129 12.9555 1.29291 12.7071C1.04453 12.4587 0.944685 12.0982 1.02988 11.7575L1.90988 8.23746C1.95384 8.06163 2.04476 7.90105 2.17291 7.77289L9.65291 0.292893ZM3.78298 8.99125L3.37439 10.6256L5.00877 10.217L8.90581 6.32L7.68002 5.09421L3.78298 8.99125ZM11.5858 3.64L10.32 4.90579L9.09423 3.68L10.36 2.41421L11.5858 3.64Z" fill="#B1B5BF"></path><path d="M1 14C0.447715 14 0 14.4477 0 15C0 15.5523 0.447715 16 1 16H15C15.5523 16 16 15.5523 16 15C16 14.4477 15.5523 14 15 14H1Z" fill="#B1B5BF"></path></g><defs><clipPath id="clip0"><rect width="16" height="16" fill="white"></rect></clipPath></defs></svg>',
      1,
    ),
    ll = [sl],
    cl = { key: 1, class: "selectedClozeEntry" };
  function ul(e, t, n, o, r, a) {
    return (
      (0, i.openBlock)(),
      (0, i.createElementBlock)(
        "span",
        {
          class: (0, i.normalizeClass)({
            clozeEntry: !0,
            selectedClozeEntry: e.selected === e.id,
          }),
          onClick:
            t[0] ||
            (t[0] = (0, i.withModifiers)(
              function () {
                for (var t = [], n = 0; n < arguments.length; n++)
                  t[n] = arguments[n];
                return e.clozeShowEntry && e.clozeShowEntry.apply(e, t);
              },
              ["stop"],
            )),
        },
        [
          e.answer
            ? ((0, i.openBlock)(),
              (0, i.createElementBlock)(
                "span",
                cl,
                (0, i.toDisplayString)(e.answer),
                1,
              ))
            : ((0, i.openBlock)(),
              (0, i.createElementBlock)(
                "span",
                {
                  key: 0,
                  class: (0, i.normalizeClass)({
                    showIcon: e.selected == e.id,
                  }),
                },
                ll,
                2,
              )),
        ],
        2,
      )
    );
  }
  var dl = (0, i.defineComponent)({
      name: "ClozeEntry",
      components: {},
      props: {
        id: { type: Number, default: 1 },
        answer: { type: String, default: "" },
      },
      setup: function (e) {
        var t = (0, i.ref)(-1),
          n = function () {
            ((t.value = e.id), M.Z.emit(O.$f, e.id));
          };
        return { selected: t, clozeShowEntry: n };
      },
    }),
    pl =
      ".disabled-event{pointer-events:none}.selectedClozeEntry{border-bottom:2px solid var(--border-color-primary);padding:0 .3125rem}.clozeEntry{margin:0 .3125rem;border-bottom:.125rem solid var(--border-color-normal);border-radius:.125rem;text-align:left}.clozeEntry .showIcon{opacity:0}.clozeEntry .clozeSvgIcon{width:1em;height:1em;vertical-align:-0.15em;fill:currentColor;margin:0 .3125rem}";
  const ml = (0, I.Z)(dl, [
    ["render", ul],
    ["styles", [pl]],
  ]);
  var fl = ml;
  (window.customElements.define(
    "rich-content-image",
    (0, i.defineCustomElement)(tl),
  ),
    window.customElements.define(
      "vocabulary-entry",
      (0, i.defineCustomElement)(al),
    ),
    window.customElements.define(
      "cloze-entry",
      (0, i.defineCustomElement)(fl),
    ));
  var vl = n(88448),
    gl = function () {
      var e = "app" !== f.Z.targetPlatform,
        t = !e || "ios" !== f.Z.deviceInfo.operatingSystem,
        n = ["android", "harmonyos"].includes(f.Z.platform);
      return {
        mode: "ios",
        swipeBackEnabled: !0,
        animated: t,
        hardwareBackButton: n,
      };
    },
    hl = n(25108),
    Cl = function () {
      (tr.Z.init(b["default"]), er.s.init(), er.c.init(), nr.Z.init());
    },
    yl = function () {
      return (0, o.mG)(void 0, void 0, void 0, function () {
        return (0, o.Jh)(this, function (e) {
          switch (e.label) {
            case 0:
              return [4, Br.Z.init()];
            case 1:
              return (e.sent(), [2]);
          }
        });
      });
    },
    Al = function () {
      return (0, o.mG)(void 0, void 0, void 0, function () {
        var e;
        return (0, o.Jh)(this, function (t) {
          switch (t.label) {
            case 0:
              return (
                t.trys.push([0, 2, , 3]),
                [
                  4,
                  Promise.all([Pr.Z.setAppLanguage(), Pr.Z.restoreFontSize()]),
                ]
              );
            case 1:
              return (t.sent(), [3, 3]);
            case 2:
              return (
                (e = t.sent()),
                hl.error('"get app version error: '.concat(e, '"')),
                [3, 3]
              );
            case 3:
              return [2];
          }
        });
      });
    },
    wl = function () {
      Promise.resolve()
        .then(n.bind(n, 69005))
        .then(function (e) {
          var t = e.initMomentPlugins;
          t();
        });
    },
    bl = function (e) {
      return (0, o.mG)(void 0, void 0, void 0, function () {
        var e, t, n, a, s;
        return (0, o.Jh)(this, function (l) {
          switch (l.label) {
            case 0:
              for (n in ((e = (0, i.createApp)(ti)),
              (t = ["date"]),
              (e.config.compilerOptions.whitespace = "condense"),
              (e.config.compilerOptions.isCustomElement = function (e) {
                return (0, o.ev)([/^ion-/], t, !0).some(function (t) {
                  return t instanceof RegExp ? t.test(e) : e === t;
                });
              }),
              e.component("ion-content", r.W2),
              e.component("ion-router-outlet", r.jP),
              e.component("ion-page", r._i),
              e.component("ion-toolbar", r.sr),
              e.component("ion-footer", r.fr),
              e.component("ion-slide", r.A$),
              e.component("ion-infinite-scroll-content", r.MB),
              e.component("ion-infinite-scroll", r.ju),
              e.component("ion-searchbar", r.VI),
              e.component("ion-icon", r.gu),
              e.component("ion-header", r.Gu),
              e.component("ion-backdrop", r.ql),
              e.component("ion-skeleton-text", r.CK),
              e.component("ion-label", r.Q$),
              e.component("ion-checkbox", r.nz),
              e.component("ion-fab", r.IJ),
              e.component("ion-fab-button", r.W4),
              e.component("ion-toggle", r.ho),
              e.component("ion-buttons", r.Sm),
              e.component("ion-progress-bar", r.X7),
              e.component("ion-button", r.YG),
              e.component("ion-range", r.I_),
              e.component("pull-refresher", Cr),
              e.component("PullRefresher", Cr),
              e.component("blank-list", yr.Z),
              e.component("BlankList", yr.Z),
              e.component("x-button", wr.ZP),
              e.component("XButton", wr.ZP),
              e.component("svg-icon", Ar.Z),
              e.component("SvgIcon", Ar.Z),
              e.component("header-component", kr.Z),
              e.component("HeaderComponent", kr.Z),
              e.component("DeferredTeleport", Tr),
              e.component("deferred-teleport", Tr),
              (e.config.globalProperties.$filter = ni),
              (e.config.globalProperties.$eventBus = M.Z),
              ji))
                e.directive(n, ji[n]);
              return [4, (0, Ot.initStore)(Ot["default"])];
            case 1:
              return (l.sent(), $i(), Cl(), [4, yl()]);
            case 2:
              return (l.sent(), [4, Al()]);
            case 3:
              return (
                l.sent(),
                e.mixin(Lr.MH),
                "android" === window.APPRuntime.PLATFORM &&
                  h["default"].initForAndroid(),
                u(),
                (a = gl()),
                e
                  .use(r.oX, a)
                  .use(Ir)
                  .use(Ie["default"])
                  .use(b["default"])
                  .use(Ot["default"]),
                b["default"].isReady().then(function () {
                  return e.mount("#app");
                }),
                (s = document.getElementById("firstPaint")),
                (s.style.opacity = "0"),
                setTimeout(function () {
                  var e;
                  (document.body.removeChild(s),
                    window.APPRuntime.SHOW_VCONSOLE && vl.Z.loadVConsole());
                  for (
                    var t = Object.keys(window.localStorage), n = 0, o = t;
                    n < o.length;
                    n++
                  ) {
                    var i = o[n];
                    i.startsWith("_cap_cache.EXTERNAL_RESOURCE_") &&
                      i.endsWith(".url") &&
                      (null === (e = window.localStorage.getItem(i)) ||
                      void 0 === e
                        ? void 0
                        : e.startsWith("data:image")) &&
                      (window.localStorage.removeItem(i),
                      window.localStorage.removeItem(
                        i.substring(0, i.length - 3) + "uri",
                      ));
                  }
                }, 1e3),
                (window.VueInstance = e),
                wl(),
                [2]
              );
          }
        });
      });
    };
  window.VueInstance;
};
