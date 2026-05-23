// Source: decompiled/web-modules-acorn/app.73d6a975/28237.js
// Webpack module id: 28237
const __webpack_module_28237 = function (e, t, n) {
  "use strict";
  n.d(t, {
    Z: function () {
      return Yn;
    },
  });
  var o = n(77577);
  function i(e, t, n, i, r, a) {
    var s,
      l = (0, o.resolveComponent)("Control");
    return (
      (0, o.openBlock)(),
      (0, o.createBlock)(
        o.Teleport,
        {
          to: e.teleportTarget,
          class: (0, o.normalizeClass)(e.$style.wrapper),
        },
        [
          (0, o.createElementVNode)(
            "div",
            {
              id: "player",
              class: (0, o.normalizeClass)(
                ((s = {}),
                (s[e.$style.playerContainer] = !0),
                (s[e.$style.fullscreen] = e.videoStore.store.inFullScreen),
                (s[e.$style.isFloat] = e.videoStore.store.isFloat),
                s),
              ),
              ref: "playerContainerRef",
            },
            [
              e.showAntiFrame
                ? ((0, o.openBlock)(),
                  (0, o.createElementBlock)(
                    "div",
                    {
                      key: 0,
                      class: (0, o.normalizeClass)(e.$style.antiFrame),
                    },
                    null,
                    2,
                  ))
                : (0, o.createCommentVNode)("", !0),
              (0, o.createVNode)(
                l,
                {
                  class: (0, o.normalizeClass)(e.$style.controlPanel),
                  ref: "controlRef",
                  isFloat: e.isFloat,
                },
                {
                  "header-functions": (0, o.withCtx)(function () {
                    return [
                      (0, o.renderSlot)(e.$slots, "header-functions", {
                        videoStore: e.videoStore,
                      }),
                    ];
                  }),
                  "download-function": (0, o.withCtx)(function () {
                    return [(0, o.renderSlot)(e.$slots, "download-function")];
                  }),
                  _: 3,
                },
                8,
                ["class", "isFloat"],
              ),
            ],
            2,
          ),
        ],
        8,
        ["to", "class"],
      )
    );
  }
  (n(92222), n(9653));
  var r = n(70655),
    a = n(56929),
    s = n(96486),
    l = n.n(s),
    c = n(39626),
    u = n(50840),
    d = n.n(u),
    p = (n(26699), n(28339)),
    m = n(14272),
    f = n(8802),
    v = n(91248),
    g = n(24424),
    h = n(67129),
    C = (0, o.defineComponent)({
      __name: "Toggle",
      setup: function (e) {
        var t = (0, f.QT)(),
          n = (0, g.Q)(),
          i = n.captionsOpen,
          r = n.noCaption,
          a = function () {
            r.value
              ? v["default"].showMessage(t.t("player.caption.noCaption"), {
                  timeout: 2e3,
                })
              : ((i.value = !i.value),
                v["default"].showMessage(
                  i.value
                    ? t.t("player.caption.turnOn")
                    : t.t("player.caption.turnOff"),
                  { timeout: 2e3 },
                ));
          },
          s = (0, h.C8)().store,
          l = (0, o.computed)(function () {
            return s.inFullScreen;
          });
        return function (e, t) {
          var n,
            r = (0, o.resolveComponent)("SvgIcon");
          return (
            (0, o.openBlock)(),
            (0, o.createElementBlock)(
              "div",
              {
                class: (0, o.normalizeClass)(
                  ((n = {}),
                  (n[e.$style.captionsIcon] = !0),
                  (n[e.$style.inFullScreen] = l.value),
                  n),
                ),
                onClick: a,
              },
              [
                (0, o.unref)(i)
                  ? ((0, o.openBlock)(),
                    (0, o.createBlock)(r, { key: 0, name: "captions-open" }))
                  : ((0, o.openBlock)(),
                    (0, o.createBlock)(r, { key: 1, name: "captions-close" })),
              ],
              2,
            )
          );
        };
      },
    }),
    y = {
      markdownBody: "Toggle__markdown-body-FSqVn",
      loginTypeLogo: "Toggle__login-type-logo-CvhpC",
      loginTemplateTitle: "Toggle__login-template-title-EfXPW",
      loginTemplateLoginOptions: "Toggle__login-template-loginOptions-v_gUs",
      modalOnTop: "Toggle__modal-on-top-gt6JP",
      modalWrapper: "Toggle__modal-wrapper-V9_Ww",
      scIonModalIos: "Toggle__sc-ion-modal-ios-xMd9Q",
      modalFullscreen: "Toggle__modal-fullscreen-RePvA",
      scIonModalIosH: "Toggle__sc-ion-modal-ios-h-I3Kry",
      captionsIcon: "Toggle__captionsIcon-eQGhn",
      inFullScreen: "Toggle__inFullScreen-Uy7sw",
    },
    A = n(46021);
  const w = {};
  w["$style"] = y;
  const b = (0, A.Z)(C, [["__cssModules", w]]);
  var E = b;
  function S(e, t, n, i, r, a) {
    var s,
      l = (0, o.resolveComponent)("svg-icon");
    return e.showSettingValid
      ? ((0, o.openBlock)(),
        (0, o.createElementBlock)(
          "div",
          {
            key: 0,
            class: (0, o.normalizeClass)(
              ((s = {}),
              (s[e.$style.settingIcon] = !0),
              (s[e.$style.inFullScreen] = e.inFullScreen),
              s),
            ),
            onClick:
              t[0] ||
              (t[0] = function () {
                for (var t = [], n = 0; n < arguments.length; n++)
                  t[n] = arguments[n];
                return e.toggleSetting && e.toggleSetting.apply(e, t);
              }),
          },
          [(0, o.createVNode)(l, { name: "video-setting" })],
          2,
        ))
      : (0, o.createCommentVNode)("", !0);
  }
  var T = n(51688),
    _ = (0, o.defineComponent)({
      setup: function () {
        var e = (0, o.inject)("videoStore"),
          t = e.store,
          n = (0, h.Vq)().onSettingSelector,
          i = (0, o.computed)(function () {
            return t.inFullScreen;
          }),
          r = (0, o.computed)(function () {
            return (
              ("MULTI_DEFINITION" === t.type && t.embedded) ||
              "CAPTURE" === t.type
            );
          }),
          a = function () {
            i.value ? T.Z.emit("setting-slide-in") : n();
          };
        return {
          store: t,
          toggleSetting: a,
          inFullScreen: i,
          showSettingValid: r,
        };
      },
    }),
    I = {
      markdownBody: "setting__markdown-body-BsAJI",
      loginTypeLogo: "setting__login-type-logo-bCzC4",
      loginTemplateTitle: "setting__login-template-title-k1SPg",
      loginTemplateLoginOptions: "setting__login-template-loginOptions-k5Sf8",
      modalOnTop: "setting__modal-on-top-WCOr9",
      modalWrapper: "setting__modal-wrapper-bhqKJ",
      scIonModalIos: "setting__sc-ion-modal-ios-VWlZY",
      modalFullscreen: "setting__modal-fullscreen-p_sGs",
      scIonModalIosH: "setting__sc-ion-modal-ios-h-HLWHp",
      settingIcon: "setting__settingIcon-P4DTA",
      inFullScreen: "setting__inFullScreen-gh4om",
    };
  const L = {};
  L["$style"] = I;
  const k = (0, A.Z)(_, [
    ["render", S],
    ["__cssModules", L],
  ]);
  var P = k,
    B = (0, o.defineComponent)({
      __name: "header",
      props: {
        title: { type: String, required: !0 },
        isFloat: { type: Boolean, default: !1 },
      },
      setup: function (e) {
        var t = e,
          n = (0, p.tv)(),
          i = (0, o.inject)("videoStore"),
          r = i.store,
          a = (0, o.computed)(function () {
            return r.inFullScreen;
          }),
          s = (0, o.computed)(function () {
            return r.isFloat;
          }),
          l = function () {
            ((r.inFullScreen = !1),
              r.embedded || n.go(-1),
              T.Z.emit("setting-slide-out"));
          },
          c = (0, g.Q)().showCaptions,
          u = (0, m.R)().closeVideoPlayer,
          d = (0, o.computed)(function () {
            return (
              ["MULTI_DEFINITION", "CAPTURE"].includes(i.store.type) &&
              !t.isFloat
            );
          });
        return function (t, n) {
          var i,
            r,
            p,
            m,
            f = (0, o.resolveComponent)("svg-icon");
          return (
            (0, o.openBlock)(),
            (0, o.createElementBlock)(
              "div",
              {
                class: (0, o.normalizeClass)(
                  ((i = {}),
                  (i[t.$style.header] = !0),
                  (i[t.$style.fullscreen] = a.value),
                  (i[t.$style.isFloat] = s.value),
                  i),
                ),
              },
              [
                (0, o.withDirectives)(
                  (0, o.createElementVNode)(
                    "div",
                    {
                      class: (0, o.normalizeClass)([
                        ((r = {}),
                        (r[t.$style.title] = !0),
                        (r[t.$style.isFloat] = s.value),
                        r),
                        "flex row x-left y-center",
                      ]),
                    },
                    [
                      (0, o.createElementVNode)(
                        "span",
                        {
                          class: (0, o.normalizeClass)(t.$style.videoBack),
                          onClick: l,
                        },
                        [(0, o.createVNode)(f, { name: "video-back" })],
                        2,
                      ),
                      (0, o.createElementVNode)(
                        "span",
                        {
                          class: (0, o.normalizeClass)([
                            t.$style.text,
                            "ellipsis",
                          ]),
                        },
                        (0, o.toDisplayString)(e.title),
                        3,
                      ),
                    ],
                    2,
                  ),
                  [[o.vShow, a.value]],
                ),
                (0, o.withDirectives)(
                  (0, o.createElementVNode)(
                    "div",
                    {
                      class: (0, o.normalizeClass)([
                        ((p = {}),
                        (p[t.$style.title] = !0),
                        (p[t.$style.isFloat] = !0),
                        p),
                        "flex row x-left y-center",
                      ]),
                    },
                    [
                      (0, o.createElementVNode)(
                        "span",
                        {
                          class: (0, o.normalizeClass)([
                            t.$style.text,
                            "ellipsis",
                          ]),
                        },
                        (0, o.toDisplayString)(e.title),
                        3,
                      ),
                      (0, o.createElementVNode)(
                        "div",
                        {
                          onClick:
                            n[0] ||
                            (n[0] = function (e) {
                              return (0, o.unref)(u)(!0);
                            }),
                        },
                        [(0, o.createVNode)(f, { name: "close" })],
                      ),
                    ],
                    2,
                  ),
                  [[o.vShow, s.value && !a.value]],
                ),
                (0, o.createElementVNode)(
                  "div",
                  {
                    class: (0, o.normalizeClass)(
                      ((m = {}),
                      (m[t.$style.functions] = !0),
                      (m[t.$style.inFullScreen] = a.value),
                      m),
                    ),
                  },
                  [
                    (0, o.unref)(c)
                      ? ((0, o.openBlock)(), (0, o.createBlock)(E, { key: 0 }))
                      : (0, o.createCommentVNode)("", !0),
                    (0, o.renderSlot)(t.$slots, "header-functions"),
                    d.value
                      ? ((0, o.openBlock)(), (0, o.createBlock)(P, { key: 1 }))
                      : (0, o.createCommentVNode)("", !0),
                  ],
                  2,
                ),
              ],
              2,
            )
          );
        };
      },
    }),
    R = {
      markdownBody: "header__markdown-body-hLgob",
      loginTypeLogo: "header__login-type-logo-R8Dyf",
      loginTemplateTitle: "header__login-template-title-srxJi",
      loginTemplateLoginOptions: "header__login-template-loginOptions-pIkDx",
      modalOnTop: "header__modal-on-top-eTxOQ",
      modalWrapper: "header__modal-wrapper-ExQsr",
      scIonModalIos: "header__sc-ion-modal-ios-DL_yo",
      modalFullscreen: "header__modal-fullscreen-DrCig",
      scIonModalIosH: "header__sc-ion-modal-ios-h-Hzo0f",
      header: "header__header-SgkhZ",
      fullscreen: "header__fullscreen-eo5Ub",
      functions: "header__functions-GIfkl",
      title: "header__title-bSV_2",
      text: "header__text-mj3JC",
      isFloat: "header__isFloat-_s34m",
      inFullScreen: "header__inFullScreen-b5qmI",
    };
  const x = {};
  x["$style"] = R;
  const O = (0, A.Z)(B, [["__cssModules", x]]);
  var M = O,
    V = { class: "footerCenter" };
  function N(e, t, n, i, r, a) {
    var s,
      l = (0, o.resolveComponent)("progress-bar"),
      c = (0, o.resolveComponent)("Duration"),
      u = (0, o.resolveComponent)("player-function-play"),
      d = (0, o.resolveComponent)("duration"),
      p = (0, o.resolveComponent)("player-function-speed"),
      m = (0, o.resolveComponent)("player-function-source"),
      f = (0, o.resolveComponent)("player-function-fullscreen");
    return e.store
      ? ((0, o.openBlock)(),
        (0, o.createElementBlock)(
          "div",
          {
            key: 0,
            class: (0, o.normalizeClass)(
              ((s = {}),
              (s[e.$style.footer] = !0),
              (s[e.$style.fullscreen] = e.store.inFullScreen),
              (s[e.$style.isFloat] = e.store.isFloat),
              (s[e.$style.ready] = e.store.ready),
              s),
            ),
          },
          [
            (0, o.createElementVNode)("div", V, [
              e.mounted
                ? ((0, o.openBlock)(),
                  (0, o.createBlock)(
                    o.Teleport,
                    {
                      key: 0,
                      to: e.teleportTarget,
                      disabled: e.store.inFullScreen,
                    },
                    [
                      (0, o.withDirectives)(
                        (0, o.createVNode)(
                          c,
                          null,
                          {
                            default: (0, o.withCtx)(function () {
                              return [(0, o.createVNode)(l)];
                            }),
                            _: 1,
                          },
                          512,
                        ),
                        [[o.vShow, e.inFullScreen]],
                      ),
                      (0, o.withDirectives)(
                        (0, o.createVNode)(l, null, null, 512),
                        [[o.vShow, !e.inFullScreen]],
                      ),
                    ],
                    8,
                    ["to", "disabled"],
                  ))
                : (0, o.createCommentVNode)("", !0),
            ]),
            (0, o.createElementVNode)(
              "div",
              { class: (0, o.normalizeClass)(e.$style.functions) },
              [
                (0, o.createElementVNode)(
                  "div",
                  { class: (0, o.normalizeClass)(e.$style.left) },
                  [(0, o.createVNode)(u)],
                  2,
                ),
                (0, o.createElementVNode)(
                  "div",
                  {
                    class: (0, o.normalizeClass)([
                      e.$style.center,
                      "footerFunctionCenter",
                    ]),
                  },
                  [
                    e.inFullScreen
                      ? (0, o.createCommentVNode)("", !0)
                      : ((0, o.openBlock)(), (0, o.createBlock)(d, { key: 0 })),
                  ],
                  2,
                ),
                (0, o.createElementVNode)(
                  "div",
                  { class: (0, o.normalizeClass)(e.$style.right) },
                  [
                    e.showSpeedFeature
                      ? ((0, o.openBlock)(), (0, o.createBlock)(p, { key: 0 }))
                      : (0, o.createCommentVNode)("", !0),
                    e.showSourceFeature
                      ? ((0, o.openBlock)(), (0, o.createBlock)(m, { key: 1 }))
                      : (0, o.createCommentVNode)("", !0),
                    e.showFullscreenFeature
                      ? ((0, o.openBlock)(), (0, o.createBlock)(f, { key: 2 }))
                      : (0, o.createCommentVNode)("", !0),
                  ],
                  2,
                ),
              ],
              2,
            ),
          ],
          2,
        ))
      : (0, o.createCommentVNode)("", !0);
  }
  (n(32023), n(74916), n(23123));
  var D = n(30381),
    Z = n.n(D),
    U = n(71938),
    H = (0, o.defineComponent)({
      __name: "duration",
      setup: function (e) {
        var t = (0, o.inject)("videoStore"),
          n = t.store,
          i = (0, o.computed)(function () {
            return Z()
              .duration(n.progress, "seconds")
              .format(U.Z.DISPLAY_FORMAT, { trim: !1 });
          }),
          r = (0, o.computed)(function () {
            return "LIVE" === n.type
              ? null
              : Z()
                  .duration(n.duration, "seconds")
                  .format(U.Z.DISPLAY_FORMAT, { trim: !1 });
          }),
          a = function () {
            t.player &&
              t.player.on("timeupdate", function () {
                n.progress = t.player.currentTime();
              });
          },
          s = function () {
            T.Z.on("init-video-handler", a);
          };
        return (
          (0, o.onMounted)(s),
          (0, o.onBeforeUnmount)(function () {
            T.Z.off("init-video-handler", a);
          }),
          function (e, t) {
            var a;
            return (
              (0, o.openBlock)(),
              (0, o.createElementBlock)(
                "div",
                {
                  class: (0, o.normalizeClass)(
                    ((a = {}),
                    (a[e.$style.duration] = !0),
                    (a[e.$style.fullscreen] = (0, o.unref)(n).inFullScreen),
                    a),
                  ),
                },
                [
                  (0, o.createElementVNode)(
                    "span",
                    {
                      class: (0, o.normalizeClass)([
                        "hkgrotesk",
                        e.$style.currentTime,
                      ]),
                    },
                    (0, o.toDisplayString)(i.value),
                    3,
                  ),
                  e.$slots.default
                    ? ((0, o.openBlock)(),
                      (0, o.createElementBlock)(
                        "div",
                        { key: 0, class: (0, o.normalizeClass)(e.$style.slot) },
                        [(0, o.renderSlot)(e.$slots, "default")],
                        2,
                      ))
                    : ((0, o.openBlock)(),
                      (0, o.createElementBlock)(
                        "div",
                        {
                          key: 1,
                          class: (0, o.normalizeClass)(e.$style.split),
                        },
                        "/",
                        2,
                      )),
                  r.value
                    ? ((0, o.openBlock)(),
                      (0, o.createElementBlock)(
                        "span",
                        {
                          key: 2,
                          class: (0, o.normalizeClass)([
                            "hkgrotesk",
                            e.$style.totalDuration,
                          ]),
                        },
                        (0, o.toDisplayString)(r.value),
                        3,
                      ))
                    : (0, o.createCommentVNode)("", !0),
                ],
                2,
              )
            );
          }
        );
      },
    }),
    F = {
      markdownBody: "duration__markdown-body-MJ99U",
      loginTypeLogo: "duration__login-type-logo-VluGA",
      loginTemplateTitle: "duration__login-template-title-mqWsJ",
      loginTemplateLoginOptions: "duration__login-template-loginOptions-QEHFV",
      modalOnTop: "duration__modal-on-top-O8mTG",
      modalWrapper: "duration__modal-wrapper-LjVyB",
      scIonModalIos: "duration__sc-ion-modal-ios-cNijf",
      modalFullscreen: "duration__modal-fullscreen-RRS42",
      scIonModalIosH: "duration__sc-ion-modal-ios-h-qB98H",
      duration: "duration__duration-_eH5H",
      fullscreen: "duration__fullscreen-bmnZN",
      currentTime: "duration__currentTime-wobbj",
      totalDuration: "duration__totalDuration-XUcy7",
      slot: "duration__slot-mgHRY",
      split: "duration__split-tgi4J",
    };
  const G = {};
  G["$style"] = F;
  const z = (0, A.Z)(H, [["__cssModules", G]]);
  var Q = z;
  function j(e, t, n, i, r, a) {
    var s,
      l,
      c = (0, o.resolveComponent)("svg-icon");
    return (
      (0, o.openBlock)(),
      (0, o.createElementBlock)(
        "div",
        {
          class: (0, o.normalizeClass)(
            ((s = {}),
            (s[e.$style.progressBar] = !0),
            (s[e.$style.inFullScreen] = e.inFullScreen),
            s),
          ),
        },
        [
          (0, o.createElementVNode)(
            "div",
            { class: (0, o.normalizeClass)(e.$style.total), ref: "bar" },
            null,
            2,
          ),
          (0, o.createElementVNode)(
            "div",
            { class: (0, o.normalizeClass)(e.$style.buffers) },
            [
              ((0, o.openBlock)(!0),
              (0, o.createElementBlock)(
                o.Fragment,
                null,
                (0, o.renderList)(e.buffers, function (t, n) {
                  return (
                    (0, o.openBlock)(),
                    (0, o.createElementBlock)(
                      "div",
                      {
                        class: (0, o.normalizeClass)(e.$style.buffer),
                        key: n,
                        style: (0, o.normalizeStyle)({
                          width: t.width,
                          left: t.left,
                        }),
                      },
                      null,
                      6,
                    )
                  );
                }),
                128,
              )),
            ],
            2,
          ),
          e.interactiveMoments.length
            ? ((0, o.openBlock)(),
              (0, o.createElementBlock)(
                "div",
                {
                  key: 0,
                  class: (0, o.normalizeClass)(e.$style.interactiveMoments),
                },
                [
                  ((0, o.openBlock)(!0),
                  (0, o.createElementBlock)(
                    o.Fragment,
                    null,
                    (0, o.renderList)(e.interactiveMoments, function (t, n) {
                      return (
                        (0, o.openBlock)(),
                        (0, o.createElementBlock)(
                          "div",
                          {
                            class: (0, o.normalizeClass)(e.$style.tracker),
                            style: (0, o.normalizeStyle)(t),
                            key: n,
                          },
                          null,
                          6,
                        )
                      );
                    }),
                    128,
                  )),
                ],
                2,
              ))
            : e.unplayedSegments.length
              ? ((0, o.openBlock)(),
                (0, o.createElementBlock)(
                  "div",
                  { key: 1, class: (0, o.normalizeClass)(e.$style.unplayed) },
                  [
                    ((0, o.openBlock)(!0),
                    (0, o.createElementBlock)(
                      o.Fragment,
                      null,
                      (0, o.renderList)(e.unplayedSegments, function (n, i) {
                        return (
                          (0, o.openBlock)(),
                          (0, o.createElementBlock)(
                            "div",
                            {
                              key: i,
                              class: (0, o.normalizeClass)(e.$style.tracker),
                              style: (0, o.normalizeStyle)(n),
                            },
                            [
                              0 === i && e.popover
                                ? ((0, o.openBlock)(),
                                  (0, o.createElementBlock)(
                                    "div",
                                    {
                                      key: 0,
                                      class: (0, o.normalizeClass)(
                                        e.$style.popover,
                                      ),
                                    },
                                    [
                                      (0, o.createElementVNode)(
                                        "div",
                                        {
                                          class: (0, o.normalizeClass)(
                                            e.$style.main,
                                          ),
                                        },
                                        [
                                          (0, o.createElementVNode)(
                                            "span",
                                            {
                                              class: (0, o.normalizeClass)(
                                                e.$style.popoverContent,
                                              ),
                                            },
                                            (0, o.toDisplayString)(
                                              e.$tc(
                                                "onlineVideo.unplayedPopover",
                                              ),
                                            ),
                                            3,
                                          ),
                                          (0, o.createElementVNode)(
                                            "span",
                                            {
                                              class: (0, o.normalizeClass)(
                                                e.$style.closeIcon,
                                              ),
                                              onClick:
                                                t[0] ||
                                                (t[0] = function () {
                                                  for (
                                                    var t = [], n = 0;
                                                    n < arguments.length;
                                                    n++
                                                  )
                                                    t[n] = arguments[n];
                                                  return (
                                                    e.closePopover &&
                                                    e.closePopover.apply(e, t)
                                                  );
                                                }),
                                            },
                                            [
                                              (0, o.createVNode)(c, {
                                                name: "close",
                                              }),
                                            ],
                                            2,
                                          ),
                                        ],
                                        2,
                                      ),
                                      (0, o.createElementVNode)(
                                        "div",
                                        {
                                          class: (0, o.normalizeClass)(
                                            e.$style.arrow,
                                          ),
                                        },
                                        null,
                                        2,
                                      ),
                                    ],
                                    2,
                                  ))
                                : (0, o.createCommentVNode)("", !0),
                            ],
                            6,
                          )
                        );
                      }),
                      128,
                    )),
                  ],
                  2,
                ))
              : (0, o.createCommentVNode)("", !0),
          "LIVE" != e.store.type
            ? ((0, o.openBlock)(),
              (0, o.createElementBlock)(
                "div",
                {
                  key: 2,
                  class: (0, o.normalizeClass)(e.$style.progress),
                  style: (0, o.normalizeStyle)({ width: e.progress }),
                },
                [
                  (0, o.createElementVNode)(
                    "div",
                    { class: (0, o.normalizeClass)(e.$style.line) },
                    null,
                    2,
                  ),
                  e.showControl || e.onPaning
                    ? ((0, o.openBlock)(),
                      (0, o.createElementBlock)(
                        "div",
                        {
                          key: 0,
                          class: (0, o.normalizeClass)(
                            ((l = {}),
                            (l[e.$style.tracker] = !0),
                            (l[e.$style.inFullScreen] = e.inFullScreen),
                            (l[e.$style.onPaning] = e.onPaning),
                            l),
                          ),
                        },
                        null,
                        2,
                      ))
                    : (0, o.createCommentVNode)("", !0),
                  (0, o.createElementVNode)(
                    "div",
                    {
                      class: (0, o.normalizeClass)([
                        e.$style.trackerHandler,
                        "noDrag",
                      ]),
                      ref: "trackerHandler",
                    },
                    null,
                    2,
                  ),
                ],
                6,
              ))
            : (0, o.createCommentVNode)("", !0),
          (0, o.createElementVNode)(
            "div",
            {
              class: (0, o.normalizeClass)(e.$style.barHandler),
              ref: "barHandler",
            },
            null,
            2,
          ),
        ],
        2,
      )
    );
  }
  (n(57658), n(21249));
  var q = n(36246),
    J = n(29081),
    W = (0, o.defineComponent)({
      name: "ProgressBar",
      components: { SvgIcon: q.Z },
      setup: function () {
        var e = (0, o.inject)("videoStore"),
          t = e.player,
          n = e.store,
          i = (0, o.ref)(),
          r = (0, o.ref)(),
          a = (0, o.ref)(),
          s = (0, o.ref)(!1),
          l = (0, o.computed)(function () {
            return n.showControl;
          }),
          c = (0, o.computed)(function () {
            return n.inFullScreen;
          }),
          u = (0, o.computed)(function () {
            var e = (100 * n.progress) / n.duration;
            return (e > 100 && (e = 100), e + "%");
          }),
          d = (0, o.computed)(function () {
            for (var e = [], t = 0; t < n.buffered.length; t++) {
              var o = n.buffered.start(t),
                i = n.buffered.end(t),
                r = Math.ceil((100 * o) / n.duration),
                a = Math.ceil((100 * (i - o)) / n.duration);
              (r > 100 && (r = 100),
                a > 100 && (a = 100),
                e.push({ left: r + "%", width: a + "%" }));
            }
            return e;
          }),
          p = function (e) {
            var t = a.value.getBoundingClientRect(),
              o = e.center.x,
              i = Math.max(0, Math.min(1, (o - t.left) / t.width));
            return Math.floor(i * n.duration) - n.progress;
          },
          m = (0, o.ref)(!1),
          f = function (e) {
            if ((!J.Z.isInExamSession || n.allowSeek) && e.target === i.value) {
              m.value = !0;
              var t = p(e);
              0 !== t && T.Z.emit("MEDIA_SEEK", t);
            }
          },
          v = function (e) {
            (J.Z.isInExamSession && !n.allowSeek) ||
              (e.target === i.value &&
                ((m.value = !1),
                (n.forwarding = !1),
                (n.rewinding = !1),
                null === t || void 0 === t || t.currentTime(n.progress),
                T.Z.emit("play")));
          },
          g = function (e) {
            e.target === r.value && T.Z.emit("MEDIA_TAP_PROGRESS", p(e));
          },
          h = function () {
            (n.gesture.on("panleft", f),
              n.gesture.on("panright", f),
              n.gesture.on("panend", v),
              n.gesture.on("singletap", g));
          },
          C = function () {
            n.buffered = e.player.buffered();
          },
          y = function () {
            var t, n;
            (null === (t = e.player) || void 0 === t || t.on("timeupdate", C),
              null === (n = e.player) || void 0 === n || n.on("progress", C),
              w());
          },
          A = (0, o.computed)(function () {
            if (n.unplayedSegments.length) {
              var e = n.duration;
              return n.unplayedSegments.map(function (t) {
                var n = t[0],
                  o = t[1],
                  i = (((o - n) / e) * 100).toFixed(2),
                  r = ((n / e) * 100).toFixed(2);
                return "width:".concat(i, "%;left:").concat(r, "%");
              });
            }
            return [];
          }),
          w = function () {
            n.unplayedSegments.length &&
              setTimeout(function () {
                ((s.value = !0),
                  setTimeout(function () {
                    s.value = !1;
                  }, 8e3));
              }, 1e3);
          },
          b = function () {
            s.value = !1;
          };
        ((0, o.onMounted)(function () {
          "LIVE" !== n.type &&
            (T.Z.on("init-video-handler", y), T.Z.on("init-control", h));
        }),
          (0, o.onBeforeUnmount)(function () {
            (T.Z.off("init-video-handler", y), T.Z.off("init-control", h));
          }));
        var E = (0, o.computed)(function () {
          var e = n.duration || 1;
          return n.interactiveMoments.map(function (t) {
            var n = ((1 / e) * 100).toFixed(2),
              o = ((t / e) * 100).toFixed(2);
            return "width:".concat(n, "%;left:").concat(o, "%");
          });
        });
        return {
          videoStore: e,
          showControl: l,
          inFullScreen: c,
          store: n,
          progress: u,
          buffers: d,
          bar: a,
          trackerHandler: i,
          barHandler: r,
          onSingleTap: g,
          onPan: f,
          onPaning: m,
          onPanEnd: v,
          unplayedSegments: A,
          popover: s,
          closePopover: b,
          interactiveMoments: E,
        };
      },
    }),
    X = {
      markdownBody: "progress-bar__markdown-body-zb3Go",
      loginTypeLogo: "progress-bar__login-type-logo-XrZ__",
      loginTemplateTitle: "progress-bar__login-template-title-VTlMO",
      loginTemplateLoginOptions:
        "progress-bar__login-template-loginOptions-iy_7Z",
      modalOnTop: "progress-bar__modal-on-top-1qn0h",
      modalWrapper: "progress-bar__modal-wrapper-Btgdr",
      scIonModalIos: "progress-bar__sc-ion-modal-ios-TRxiQ",
      modalFullscreen: "progress-bar__modal-fullscreen-yNyvQ",
      scIonModalIosH: "progress-bar__sc-ion-modal-ios-h-oT523",
      progressBar: "progress-bar__progressBar-ImIp6",
      inFullScreen: "progress-bar__inFullScreen-It5sa",
      barHandler: "progress-bar__barHandler-TTgKV",
      total: "progress-bar__total-n3l2M",
      buffers: "progress-bar__buffers-hBjEI",
      progress: "progress-bar__progress-uuXbt",
      buffer: "progress-bar__buffer-lkQyw",
      line: "progress-bar__line-DL0eE",
      tracker: "progress-bar__tracker-gDRXk",
      onPaning: "progress-bar__onPaning-gQ1PK",
      trackerHandler: "progress-bar__trackerHandler-bcSDv",
      unplayed: "progress-bar__unplayed-X_LiB",
      popover: "progress-bar__popover-I89e1",
      main: "progress-bar__main-aAsL7",
      closeIcon: "progress-bar__closeIcon-FFnDb",
      arrow: "progress-bar__arrow-MN6rw",
      interactiveMoments: "progress-bar__interactiveMoments-Qvk9l",
    };
  const Y = {};
  Y["$style"] = X;
  const K = (0, A.Z)(W, [
    ["render", j],
    ["__cssModules", Y],
  ]);
  var $ = K,
    ee = (0, o.createElementVNode)("span", null, null, -1),
    te = (0, o.createElementVNode)("span", null, null, -1),
    ne = (0, o.createElementVNode)("span", null, null, -1),
    oe = (0, o.createElementVNode)("span", null, null, -1),
    ie = [ee, te, ne, oe];
  function re(e, t, n, i, r, a) {
    var s,
      l,
      c = (0, o.resolveComponent)("svg-icon");
    return (
      (0, o.openBlock)(),
      (0, o.createElementBlock)(
        "div",
        {
          class: (0, o.normalizeClass)(
            ((s = {}),
            (s[e.$style.wrapper] = !0),
            (s[e.$style.inFullScreen] = e.inFullScreen),
            s),
          ),
        },
        [
          e.store.ended || e.store.playing
            ? (0, o.createCommentVNode)("", !0)
            : ((0, o.openBlock)(),
              (0, o.createElementBlock)(
                "span",
                {
                  key: 0,
                  onClick:
                    t[0] ||
                    (t[0] = function () {
                      for (var t = [], n = 0; n < arguments.length; n++)
                        t[n] = arguments[n];
                      return (
                        e.togglePlayAndPause && e.togglePlayAndPause.apply(e, t)
                      );
                    }),
                  class: (0, o.normalizeClass)(e.$style.clickHandler),
                },
                [
                  (0, o.createVNode)(
                    c,
                    {
                      name: "video-play",
                      class: (0, o.normalizeClass)(e.$style.play),
                    },
                    null,
                    8,
                    ["class"],
                  ),
                ],
                2,
              )),
          e.store.playing && e.isInPlayLimitedExam
            ? ((0, o.openBlock)(),
              (0, o.createElementBlock)(
                "div",
                { key: 1, class: (0, o.normalizeClass)(e.$style.playing) },
                ie,
                2,
              ))
            : (0, o.createCommentVNode)("", !0),
          e.store.ended || !e.store.playing || e.isInPlayLimitedExam
            ? (0, o.createCommentVNode)("", !0)
            : ((0, o.openBlock)(),
              (0, o.createElementBlock)(
                "span",
                {
                  key: 2,
                  onClick:
                    t[1] ||
                    (t[1] = function () {
                      for (var t = [], n = 0; n < arguments.length; n++)
                        t[n] = arguments[n];
                      return (
                        e.togglePlayAndPause && e.togglePlayAndPause.apply(e, t)
                      );
                    }),
                  class: (0, o.normalizeClass)(
                    ((l = {}),
                    (l[e.$style.clickHandler] = !0),
                    (l[e.$style.isFullScreen] = e.inFullScreen),
                    l),
                  ),
                },
                [
                  (0, o.createVNode)(
                    c,
                    {
                      name: "video-pause",
                      class: (0, o.normalizeClass)(e.$style.pause),
                    },
                    null,
                    8,
                    ["class"],
                  ),
                ],
                2,
              )),
          e.store.ended && e.store.allowReplay
            ? ((0, o.openBlock)(),
              (0, o.createElementBlock)(
                "span",
                {
                  key: 3,
                  onClick:
                    t[2] ||
                    (t[2] = function () {
                      for (var t = [], n = 0; n < arguments.length; n++)
                        t[n] = arguments[n];
                      return (
                        e.togglePlayAndPause && e.togglePlayAndPause.apply(e, t)
                      );
                    }),
                  class: (0, o.normalizeClass)(e.$style.clickHandler),
                },
                [
                  (0, o.createVNode)(
                    c,
                    {
                      name: "video-replay",
                      class: (0, o.normalizeClass)(e.$style.replay),
                    },
                    null,
                    8,
                    ["class"],
                  ),
                ],
                2,
              ))
            : (0, o.createCommentVNode)("", !0),
        ],
        2,
      )
    );
  }
  var ae = n(28838),
    se = (0, o.defineComponent)({
      name: "VideoFunctionPlay",
      setup: function () {
        var e = (0, o.inject)("videoStore"),
          t = e.store,
          n = function () {
            var n, o, i, r;
            (null === (n = e.player) ||
              void 0 === n ||
              n.on("play", function () {
                ((t.playing = !0),
                  (t.ended = !1),
                  (t.firstPlay = !1),
                  T.Z.emit(ae.N_));
              }),
              null === (o = e.player) ||
                void 0 === o ||
                o.on("pause", function () {
                  ((t.playing = !1), (t.ended = !1), T.Z.emit(ae.qT));
                }),
              null === (i = e.player) ||
                void 0 === i ||
                i.on("ended", function () {
                  ((t.playing = !1), (t.ended = !0), T.Z.emit(ae.i9));
                }),
              null === (r = e.player) ||
                void 0 === r ||
                r.on("timeupdate", function () {
                  T.Z.emit(ae.cl, e);
                }));
          },
          i = function () {
            if (e.player)
              if (t.playing) {
                if (!e.store.allowPause) return;
                e.player.pause();
              } else e.player.play();
          },
          r = function () {
            var t;
            null === (t = e.player) || void 0 === t || t.play();
          },
          a = function () {
            var t;
            null === (t = e.player) || void 0 === t || t.pause();
          };
        ((0, o.onMounted)(function () {
          (T.Z.on("init-video-handler", n),
            T.Z.on("toggle-play-pause", i),
            T.Z.on("play", r),
            T.Z.on("pause", a));
        }),
          (0, o.onBeforeUnmount)(function () {
            (T.Z.off("init-video-handler", n),
              T.Z.off("toggle-play-pause", i),
              T.Z.off("play", r),
              T.Z.off("pause", a));
          }));
        var s = (0, o.computed)(function () {
            return J.Z.isInExamSession && !e.store.allowPause;
          }),
          l = (0, o.computed)(function () {
            return t.inFullScreen;
          });
        return {
          videoStore: e,
          store: t,
          inFullScreen: l,
          togglePlayAndPause: i,
          isInPlayLimitedExam: s,
        };
      },
    }),
    le = {
      markdownBody: "play__markdown-body-SzDHi",
      loginTypeLogo: "play__login-type-logo-SgEPs",
      loginTemplateTitle: "play__login-template-title-na1ue",
      loginTemplateLoginOptions: "play__login-template-loginOptions-quNIo",
      modalOnTop: "play__modal-on-top-MvtoA",
      modalWrapper: "play__modal-wrapper-lCowi",
      scIonModalIos: "play__sc-ion-modal-ios-WzBgf",
      modalFullscreen: "play__modal-fullscreen-oWg7f",
      scIonModalIosH: "play__sc-ion-modal-ios-h-nT_tB",
      wrapper: "play__wrapper-EWnLD",
      inFullScreen: "play__inFullScreen-sBVL9",
      clickHandler: "play__click-handler-ZsLeA",
      play: "play__play-refJx",
      pause: "play__pause-QIbww",
      replay: "play__replay-wKgIz",
      playing: "play__playing-kzmEw",
      up: "play__up-avAsU",
      down: "play__down-R4ERr",
    };
  const ce = {};
  ce["$style"] = le;
  const ue = (0, A.Z)(se, [
    ["render", re],
    ["__cssModules", ce],
  ]);
  var de = ue;
  function pe(e, t, n, i, r, a) {
    return e.visible
      ? ((0, o.openBlock)(),
        (0, o.createElementBlock)(
          "div",
          { key: 0, class: (0, o.normalizeClass)(e.$style.wrapper) },
          [
            e.isQuality
              ? ((0, o.openBlock)(),
                (0, o.createElementBlock)(
                  "span",
                  {
                    key: 0,
                    "data-testid": "quality-source",
                    class: (0, o.normalizeClass)(e.$style.src),
                    onClick:
                      t[0] ||
                      (t[0] = function (t) {
                        return e.toggleSource(e.SOURCE_PANEL_ENUM.VideoQuality);
                      }),
                  },
                  (0, o.toDisplayString)(
                    e.$t("player.quality.".concat(e.store.quality)),
                  ),
                  3,
                ))
              : e.enableAudioSwitch
                ? ((0, o.openBlock)(),
                  (0, o.createElementBlock)(
                    o.Fragment,
                    { key: 1 },
                    [
                      (0, o.createElementVNode)(
                        "span",
                        {
                          class: (0, o.normalizeClass)(e.$style.src),
                          "data-testid": "audio-channel-source",
                          onClick:
                            t[1] ||
                            (t[1] = function (t) {
                              return e.toggleSource(
                                e.SOURCE_PANEL_ENUM.AudioChannel,
                              );
                            }),
                        },
                        (0, o.toDisplayString)(
                          e.$t("player.audioChannel.label"),
                        ),
                        3,
                      ),
                      (0, o.createElementVNode)(
                        "span",
                        {
                          class: (0, o.normalizeClass)(e.$style.src),
                          "data-testid": "video-channel-source",
                          onClick:
                            t[2] ||
                            (t[2] = function (t) {
                              return e.toggleSource(
                                e.SOURCE_PANEL_ENUM.VideoChannel,
                              );
                            }),
                        },
                        (0, o.toDisplayString)(
                          e.$t("player.videoChannel.label"),
                        ),
                        3,
                      ),
                    ],
                    64,
                  ))
                : ((0, o.openBlock)(),
                  (0, o.createElementBlock)(
                    "span",
                    {
                      key: 2,
                      class: (0, o.normalizeClass)(e.$style.src),
                      "data-testid": "video-channel-source",
                      onClick:
                        t[3] ||
                        (t[3] = function (t) {
                          return e.toggleSource(
                            e.SOURCE_PANEL_ENUM.VideoChannel,
                          );
                        }),
                    },
                    (0, o.toDisplayString)(
                      e.$t("player.videoChannel.".concat(e.store.channel)),
                    ),
                    3,
                  )),
          ],
          2,
        ))
      : (0, o.createCommentVNode)("", !0);
  }
  var me = n(44349),
    fe = n(43599),
    ve = n(89564),
    ge = (0, o.defineComponent)({
      name: "VideoFunctionSource",
      setup: function () {
        var e = (0, o.inject)("videoStore"),
          t = e.store,
          n = (0, o.computed)(function () {
            return fe.Z.isMultiDefinitionStore(t.type);
          }),
          i = (0, o.computed)(function () {
            return (
              t.inFullScreen && (n.value || fe.Z.isLiveOrCaptureStore(t.type))
            );
          }),
          r = (0, o.computed)(function () {
            return (
              fe.Z.isLiveOrCaptureStore(t.type) &&
              ve.Z.settings.orgSetting.enableMobileLiveVodAudioSwitch
            );
          }),
          a = function (e) {
            t.activeSourcePanel = e;
          };
        return {
          visible: i,
          isQuality: n,
          videoStore: e,
          store: t,
          SOURCE_PANEL_ENUM: me.v1,
          toggleSource: a,
          enableAudioSwitch: r,
        };
      },
    }),
    he = {
      markdownBody: "source__markdown-body-xl8NB",
      loginTypeLogo: "source__login-type-logo-EUiLY",
      loginTemplateTitle: "source__login-template-title-rD01i",
      loginTemplateLoginOptions: "source__login-template-loginOptions-Eug8N",
      modalOnTop: "source__modal-on-top-hZ8__",
      modalWrapper: "source__modal-wrapper-sNeuc",
      scIonModalIos: "source__sc-ion-modal-ios-uUigm",
      modalFullscreen: "source__modal-fullscreen-gMFKN",
      scIonModalIosH: "source__sc-ion-modal-ios-h-W3pcO",
      wrapper: "source__wrapper-lByV5",
      src: "source__src-JkT6Y",
    };
  const Ce = {};
  Ce["$style"] = he;
  const ye = (0, A.Z)(ge, [
    ["render", pe],
    ["__cssModules", Ce],
  ]);
  var Ae = ye;
  function we(e, t, n, i, r, a) {
    return "LIVE" != e.store.type && e.store.showRate && e.store.inFullScreen
      ? ((0, o.openBlock)(),
        (0, o.createElementBlock)(
          "span",
          {
            key: 0,
            class: (0, o.normalizeClass)(e.$style.speed),
            onClick:
              t[0] ||
              (t[0] = function () {
                for (var t = [], n = 0; n < arguments.length; n++)
                  t[n] = arguments[n];
                return e.togglePlaybackRate && e.togglePlaybackRate.apply(e, t);
              }),
          },
          (0, o.toDisplayString)(
            1 === e.store.playbackRate
              ? e.$t("player.playbackRate")
              : e.store.playbackRate + "X",
          ),
          3,
        ))
      : (0, o.createCommentVNode)("", !0);
  }
  var be = (0, o.defineComponent)({
      name: "VideoFunctionSpeed",
      setup: function () {
        var e = (0, o.inject)("videoStore"),
          t = e.store,
          n = function () {
            t.showPlaybackRate
              ? T.Z.emit("playback-slide-out")
              : T.Z.emit("playback-slide-in");
          };
        return (
          (0, o.onMounted)(function () {
            T.Z.on("toggle-playback-rate", n);
          }),
          (0, o.onBeforeUnmount)(function () {
            T.Z.off("toggle-playback-rate", n);
          }),
          { store: t, togglePlaybackRate: n }
        );
      },
    }),
    Ee = {
      markdownBody: "speed__markdown-body-JK7F0",
      loginTypeLogo: "speed__login-type-logo-CpJ7M",
      loginTemplateTitle: "speed__login-template-title-UVKQc",
      loginTemplateLoginOptions: "speed__login-template-loginOptions-LcDqW",
      modalOnTop: "speed__modal-on-top-yTmIc",
      modalWrapper: "speed__modal-wrapper-kLdSO",
      scIonModalIos: "speed__sc-ion-modal-ios-ke6jj",
      modalFullscreen: "speed__modal-fullscreen-nGwVc",
      scIonModalIosH: "speed__sc-ion-modal-ios-h-QqnjL",
      speed: "speed__speed-F7nmB",
    };
  const Se = {};
  Se["$style"] = Ee;
  const Te = (0, A.Z)(be, [
    ["render", we],
    ["__cssModules", Se],
  ]);
  var _e = Te;
  function Ie(e, t, n, i, r, a) {
    var s,
      l = (0, o.resolveComponent)("svg-icon");
    return e.store.embedded
      ? ((0, o.openBlock)(),
        (0, o.createElementBlock)(
          "div",
          {
            key: 0,
            class: (0, o.normalizeClass)(
              ((s = {}),
              (s[e.$style.fullscreen] = !0),
              (s[e.$style.inFullScreen] = e.inFullScreen),
              s),
            ),
            onClick:
              t[0] ||
              (t[0] = function () {
                for (var t = [], n = 0; n < arguments.length; n++)
                  t[n] = arguments[n];
                return e.toggleFullscreen && e.toggleFullscreen.apply(e, t);
              }),
          },
          [
            (0, o.createVNode)(
              l,
              {
                name: "video-fullscreen-".concat(
                  e.store.inFullScreen ? "leave" : "enter",
                ),
              },
              null,
              8,
              ["name"],
            ),
          ],
          2,
        ))
      : (0, o.createCommentVNode)("", !0);
  }
  var Le = (0, o.defineComponent)({
      name: "PlayerFunctionFullscreen",
      setup: function () {
        var e = (0, o.inject)("videoStore"),
          t = e.store,
          n = (0, o.computed)(function () {
            return t.inFullScreen;
          }),
          i = function () {
            T.Z.emit("toggle-fullscreen");
          };
        return { store: t, toggleFullscreen: i, inFullScreen: n };
      },
    }),
    ke = {
      markdownBody: "fullscreen__markdown-body-CJVxZ",
      loginTypeLogo: "fullscreen__login-type-logo-daXXM",
      loginTemplateTitle: "fullscreen__login-template-title-us5d7",
      loginTemplateLoginOptions:
        "fullscreen__login-template-loginOptions-ZqJsx",
      modalOnTop: "fullscreen__modal-on-top-uAyJm",
      modalWrapper: "fullscreen__modal-wrapper-qM3Ow",
      scIonModalIos: "fullscreen__sc-ion-modal-ios-RilAv",
      modalFullscreen: "fullscreen__modal-fullscreen-BG1sx",
      scIonModalIosH: "fullscreen__sc-ion-modal-ios-h-fMCdC",
      fullscreen: "fullscreen__fullscreen-pLTrq",
      inFullScreen: "fullscreen__inFullScreen-EXPAp",
    };
  const Pe = {};
  Pe["$style"] = ke;
  const Be = (0, A.Z)(Le, [
    ["render", Ie],
    ["__cssModules", Pe],
  ]);
  var Re = Be,
    xe = (0, o.defineComponent)({
      name: "VideoFooter",
      components: {
        Duration: Q,
        ProgressBar: $,
        PlayerFunctionPlay: de,
        PlayerFunctionSource: Ae,
        PlayerFunctionSpeed: _e,
        PlayerFunctionFullscreen: Re,
      },
      setup: function () {
        var e = (0, o.inject)("videoStore"),
          t = e.store,
          n = (0, o.ref)(!1),
          i = (0, o.computed)(function () {
            return (null === t || void 0 === t ? void 0 : t.inFullScreen)
              ? ".footerCenter"
              : "#videoControl";
          });
        (0, o.onMounted)(function () {
          return (n.value = !0);
        });
        var r = (0, o.computed)(function () {
            return t.features.includes("source");
          }),
          a = (0, o.computed)(function () {
            return t.features.includes("speed");
          }),
          s = (0, o.computed)(function () {
            return t.features.includes("fullscreen");
          }),
          l = (0, o.computed)(function () {
            return t.inFullScreen;
          });
        return {
          store: t,
          mounted: n,
          teleportTarget: i,
          showSourceFeature: r,
          showSpeedFeature: a,
          showFullscreenFeature: s,
          inFullScreen: l,
        };
      },
    }),
    Oe = {
      markdownBody: "footer__markdown-body-OXuXQ",
      loginTypeLogo: "footer__login-type-logo-A5O31",
      loginTemplateTitle: "footer__login-template-title-MYOAx",
      loginTemplateLoginOptions: "footer__login-template-loginOptions-PN0_Y",
      modalOnTop: "footer__modal-on-top-zsnDI",
      modalWrapper: "footer__modal-wrapper-oy8lX",
      scIonModalIos: "footer__sc-ion-modal-ios-xc3cO",
      modalFullscreen: "footer__modal-fullscreen-Tv_wW",
      scIonModalIosH: "footer__sc-ion-modal-ios-h-rSarr",
      footer: "footer__footer-sFPR0",
      ready: "footer__ready-bHqMf",
      functions: "footer__functions-MWwxx",
      left: "footer__left-BNJtZ",
      right: "footer__right-vrWJN",
      center: "footer__center-ewLdF",
      fullscreen: "footer__fullscreen-zHZh6",
      isFloat: "footer__isFloat-MFXpj",
    };
  const Me = {};
  Me["$style"] = Oe;
  const Ve = (0, A.Z)(xe, [
    ["render", N],
    ["__cssModules", Me],
  ]);
  var Ne = Ve;
  function De(e, t, n, i, r, a) {
    var s = (0, o.resolveComponent)("svg-icon");
    return e.store.loading && !e.isOtherIndicatorShown
      ? ((0, o.openBlock)(),
        (0, o.createBlock)(
          s,
          {
            key: 0,
            name: "video-loading",
            class: (0, o.normalizeClass)(e.$style.loading),
          },
          null,
          8,
          ["class"],
        ))
      : (0, o.createCommentVNode)("", !0);
  }
  var Ze = (0, o.defineComponent)({
      name: "Loading",
      setup: function () {
        var e = (0, o.inject)("videoStore"),
          t = e.store,
          n = function () {
            var n, o;
            (null === (n = e.player) ||
              void 0 === n ||
              n.on("seeking", function () {
                t.loading = !0;
              }),
              null === (o = e.player) ||
                void 0 === o ||
                o.on("seeked", function () {
                  (T.Z.emit(ae.HW), (t.loading = !1));
                }));
          },
          i = (0, o.computed)(function () {
            return (
              t.forwarding ||
              t.rewinding ||
              t.brightnessIncreasing ||
              t.brightnessDecreasing ||
              t.volumeIncreasing ||
              t.volumeDecreasing
            );
          });
        return (
          (0, o.onMounted)(function () {
            T.Z.on("init-video-handler", n);
          }),
          (0, o.onBeforeUnmount)(function () {
            T.Z.off("init-video-handler", n);
          }),
          { videoStore: e, store: t, isOtherIndicatorShown: i }
        );
      },
    }),
    Ue = {
      markdownBody: "loading__markdown-body-RZEk2",
      loginTypeLogo: "loading__login-type-logo-NFAvf",
      loginTemplateTitle: "loading__login-template-title-Wv2q0",
      loginTemplateLoginOptions: "loading__login-template-loginOptions-LC3mW",
      modalOnTop: "loading__modal-on-top-Mvaic",
      modalWrapper: "loading__modal-wrapper-V1GWq",
      scIonModalIos: "loading__sc-ion-modal-ios-_yJwK",
      modalFullscreen: "loading__modal-fullscreen-irq68",
      scIonModalIosH: "loading__sc-ion-modal-ios-h-QxAOG",
      loading: "loading__loading-rKngb",
    };
  const He = {};
  He["$style"] = Ue;
  const Fe = (0, A.Z)(Ze, [
    ["render", De],
    ["__cssModules", He],
  ]);
  var Ge = Fe,
    ze = (0, o.defineComponent)({
      __name: "big-play-button",
      setup: function (e) {
        var t = (0, o.inject)("videoStore"),
          n = (0, o.readonly)(t.store),
          i = function () {
            T.Z.emit("play");
          };
        return function (e, t) {
          var r = (0, o.resolveComponent)("svg-icon");
          return (
            (0, o.openBlock)(),
            (0, o.createElementBlock)(
              "div",
              { class: (0, o.normalizeClass)(e.$style.wrapper), onClick: i },
              [
                (0, o.unref)(n).loading ||
                (0, o.unref)(n).forwarding ||
                (0, o.unref)(n).rewinding ||
                !(0, o.unref)(n).firstPlay
                  ? (0, o.createCommentVNode)("", !0)
                  : ((0, o.openBlock)(),
                    (0, o.createBlock)(
                      r,
                      {
                        key: 0,
                        name: "video-big-play",
                        class: (0, o.normalizeClass)(e.$style.bigPlay),
                      },
                      null,
                      8,
                      ["class"],
                    )),
              ],
              2,
            )
          );
        };
      },
    }),
    Qe = {
      markdownBody: "big-play-button__markdown-body-Fj76_",
      loginTypeLogo: "big-play-button__login-type-logo-BlZpy",
      loginTemplateTitle: "big-play-button__login-template-title-kaEml",
      loginTemplateLoginOptions:
        "big-play-button__login-template-loginOptions-crsb2",
      modalOnTop: "big-play-button__modal-on-top-Dicuv",
      modalWrapper: "big-play-button__modal-wrapper-yLhD2",
      scIonModalIos: "big-play-button__sc-ion-modal-ios-zEJug",
      modalFullscreen: "big-play-button__modal-fullscreen-dXWb4",
      scIonModalIosH: "big-play-button__sc-ion-modal-ios-h-sjXHe",
      wrapper: "big-play-button__wrapper-DGxN2",
      bigPlay: "big-play-button__big-play-qfQCK",
    };
  const je = {};
  je["$style"] = Qe;
  const qe = (0, A.Z)(ze, [["__cssModules", je]]);
  var Je = qe,
    We = (0, o.defineComponent)({
      __name: "progress-indicator",
      setup: function (e) {
        var t = (0, o.inject)("videoStore"),
          n = (0, o.readonly)(t.store),
          i = (0, o.computed)(function () {
            return Z()
              .duration(n.progress, "seconds")
              .format(U.Z.DISPLAY_FORMAT, { trim: !1 });
          });
        return function (e, t) {
          var r = (0, o.resolveComponent)("svg-icon");
          return (0, o.unref)(n).forwarding || (0, o.unref)(n).rewinding
            ? ((0, o.openBlock)(),
              (0, o.createElementBlock)(
                "div",
                { key: 0, class: (0, o.normalizeClass)(e.$style.indicator) },
                [
                  (0, o.createElementVNode)(
                    "div",
                    { class: (0, o.normalizeClass)(e.$style.background) },
                    null,
                    2,
                  ),
                  (0, o.unref)(n).forwarding
                    ? ((0, o.openBlock)(),
                      (0, o.createBlock)(
                        r,
                        {
                          key: 0,
                          name: "video-forward",
                          class: (0, o.normalizeClass)(e.$style.icon),
                        },
                        null,
                        8,
                        ["class"],
                      ))
                    : (0, o.createCommentVNode)("", !0),
                  (0, o.unref)(n).rewinding
                    ? ((0, o.openBlock)(),
                      (0, o.createBlock)(
                        r,
                        {
                          key: 1,
                          name: "video-rewind",
                          class: (0, o.normalizeClass)(e.$style.icon),
                        },
                        null,
                        8,
                        ["class"],
                      ))
                    : (0, o.createCommentVNode)("", !0),
                  (0, o.createElementVNode)(
                    "span",
                    { class: (0, o.normalizeClass)(e.$style.progress) },
                    (0, o.toDisplayString)(i.value),
                    3,
                  ),
                ],
                2,
              ))
            : (0, o.createCommentVNode)("", !0);
        };
      },
    }),
    Xe = {
      markdownBody: "progress-indicator__markdown-body-jEKij",
      loginTypeLogo: "progress-indicator__login-type-logo-_zHx2",
      loginTemplateTitle: "progress-indicator__login-template-title-btLKd",
      loginTemplateLoginOptions:
        "progress-indicator__login-template-loginOptions-pMi4k",
      modalOnTop: "progress-indicator__modal-on-top-eqILt",
      modalWrapper: "progress-indicator__modal-wrapper-uAtDZ",
      scIonModalIos: "progress-indicator__sc-ion-modal-ios-UQpGL",
      modalFullscreen: "progress-indicator__modal-fullscreen-uYxa7",
      scIonModalIosH: "progress-indicator__sc-ion-modal-ios-h-LlAFF",
      indicator: "progress-indicator__indicator-Ghr21",
      background: "progress-indicator__background-qdNtd",
      icon: "progress-indicator__icon-sCYQA",
      progress: "progress-indicator__progress-P8UEQ",
    };
  const Ye = {};
  Ye["$style"] = Xe;
  const Ke = (0, A.Z)(We, [["__cssModules", Ye]]);
  var $e = Ke,
    et = (0, o.defineComponent)({
      __name: "brightness-indicator",
      setup: function (e) {
        var t = (0, o.inject)("videoStore"),
          n = (0, o.readonly)(t.store),
          i = (0, o.computed)(function () {
            return 100 * n.brightness + "%";
          });
        return function (e, t) {
          var r = (0, o.resolveComponent)("svg-icon");
          return (0, o.unref)(n).brightnessDecreasing ||
            (0, o.unref)(n).brightnessIncreasing
            ? ((0, o.openBlock)(),
              (0, o.createElementBlock)(
                "div",
                { key: 0, class: (0, o.normalizeClass)(e.$style.indicator) },
                [
                  (0, o.createElementVNode)(
                    "div",
                    { class: (0, o.normalizeClass)(e.$style.background) },
                    null,
                    2,
                  ),
                  (0, o.createElementVNode)(
                    "div",
                    { class: (0, o.normalizeClass)(e.$style.container) },
                    [
                      (0, o.createVNode)(
                        r,
                        {
                          name: "video-brightness",
                          class: (0, o.normalizeClass)(e.$style.icon),
                        },
                        null,
                        8,
                        ["class"],
                      ),
                      (0, o.createElementVNode)(
                        "div",
                        { class: (0, o.normalizeClass)(e.$style.bar) },
                        [
                          (0, o.createElementVNode)(
                            "div",
                            { class: (0, o.normalizeClass)(e.$style.total) },
                            null,
                            2,
                          ),
                          (0, o.createElementVNode)(
                            "div",
                            {
                              class: (0, o.normalizeClass)(e.$style.current),
                              style: (0, o.normalizeStyle)({ width: i.value }),
                            },
                            null,
                            6,
                          ),
                        ],
                        2,
                      ),
                    ],
                    2,
                  ),
                ],
                2,
              ))
            : (0, o.createCommentVNode)("", !0);
        };
      },
    }),
    tt = {
      markdownBody: "brightness-indicator__markdown-body-F75cw",
      loginTypeLogo: "brightness-indicator__login-type-logo-rlXbt",
      loginTemplateTitle: "brightness-indicator__login-template-title-NuenM",
      loginTemplateLoginOptions:
        "brightness-indicator__login-template-loginOptions-nU1JE",
      modalOnTop: "brightness-indicator__modal-on-top-GZlHd",
      modalWrapper: "brightness-indicator__modal-wrapper-JPWyP",
      scIonModalIos: "brightness-indicator__sc-ion-modal-ios-x_Nu8",
      modalFullscreen: "brightness-indicator__modal-fullscreen-zzVSj",
      scIonModalIosH: "brightness-indicator__sc-ion-modal-ios-h-JkfM_",
      indicator: "brightness-indicator__indicator-WcwXM",
      background: "brightness-indicator__background-ddhA_",
      container: "brightness-indicator__container-lgPlZ",
      icon: "brightness-indicator__icon-gyvWC",
      bar: "brightness-indicator__bar-DNguA",
      total: "brightness-indicator__total-BCizf",
      current: "brightness-indicator__current-nNJgD",
    };
  const nt = {};
  nt["$style"] = tt;
  const ot = (0, A.Z)(et, [["__cssModules", nt]]);
  var it = ot,
    rt = (0, o.defineComponent)({
      __name: "volume-indicator",
      setup: function (e) {
        var t = (0, o.inject)("videoStore"),
          n = (0, o.readonly)(t.store),
          i = (0, o.computed)(function () {
            return 100 * n.volume + "%";
          }),
          r = (0, o.computed)(function () {
            return n.volume < 0.01;
          });
        return function (e, t) {
          var a = (0, o.resolveComponent)("svg-icon");
          return (0, o.unref)(n).volumeDecreasing ||
            (0, o.unref)(n).volumeIncreasing
            ? ((0, o.openBlock)(),
              (0, o.createElementBlock)(
                "div",
                { key: 0, class: (0, o.normalizeClass)(e.$style.indicator) },
                [
                  (0, o.createElementVNode)(
                    "div",
                    { class: (0, o.normalizeClass)(e.$style.background) },
                    null,
                    2,
                  ),
                  (0, o.createElementVNode)(
                    "div",
                    { class: (0, o.normalizeClass)(e.$style.container) },
                    [
                      r.value
                        ? (0, o.createCommentVNode)("", !0)
                        : ((0, o.openBlock)(),
                          (0, o.createBlock)(
                            a,
                            {
                              key: 0,
                              name: "video-volume",
                              class: (0, o.normalizeClass)(e.$style.icon),
                            },
                            null,
                            8,
                            ["class"],
                          )),
                      r.value
                        ? ((0, o.openBlock)(),
                          (0, o.createBlock)(
                            a,
                            {
                              key: 1,
                              name: "video-muted",
                              class: (0, o.normalizeClass)(e.$style.icon),
                            },
                            null,
                            8,
                            ["class"],
                          ))
                        : (0, o.createCommentVNode)("", !0),
                      (0, o.createElementVNode)(
                        "div",
                        { class: (0, o.normalizeClass)(e.$style.bar) },
                        [
                          (0, o.createElementVNode)(
                            "div",
                            { class: (0, o.normalizeClass)(e.$style.total) },
                            null,
                            2,
                          ),
                          (0, o.createElementVNode)(
                            "div",
                            {
                              class: (0, o.normalizeClass)(e.$style.current),
                              style: (0, o.normalizeStyle)({ width: i.value }),
                            },
                            null,
                            6,
                          ),
                        ],
                        2,
                      ),
                    ],
                    2,
                  ),
                ],
                2,
              ))
            : (0, o.createCommentVNode)("", !0);
        };
      },
    }),
    at = {
      markdownBody: "volume-indicator__markdown-body-W3qRq",
      loginTypeLogo: "volume-indicator__login-type-logo-seepJ",
      loginTemplateTitle: "volume-indicator__login-template-title-VvIm3",
      loginTemplateLoginOptions:
        "volume-indicator__login-template-loginOptions-DcmzF",
      modalOnTop: "volume-indicator__modal-on-top-L2Uag",
      modalWrapper: "volume-indicator__modal-wrapper-jIbhN",
      scIonModalIos: "volume-indicator__sc-ion-modal-ios-weimd",
      modalFullscreen: "volume-indicator__modal-fullscreen-Hw4Hc",
      scIonModalIosH: "volume-indicator__sc-ion-modal-ios-h-U19uU",
      indicator: "volume-indicator__indicator-XfUHF",
      background: "volume-indicator__background-Vt75X",
      container: "volume-indicator__container-wey5D",
      icon: "volume-indicator__icon-aQQcE",
      bar: "volume-indicator__bar-VyeUr",
      total: "volume-indicator__total-obC5N",
      current: "volume-indicator__current-FRxMm",
    };
  const st = {};
  st["$style"] = at;
  const lt = (0, A.Z)(rt, [["__cssModules", st]]);
  var ct = lt,
    ut = n(23352),
    dt = ["onClick"],
    pt = (0, o.defineComponent)({
      __name: "playback-rate",
      setup: function (e) {
        var t = (0, o.inject)("videoStore"),
          n = t.store,
          i = (0, o.ref)(U.Z.PLAYBACK_RATE),
          r = function (e) {
            var o;
            (n.playbackRate !== e &&
              ((n.playbackRate = e),
              v["default"].showMessage(
                ut["default"].global.t("player.rate", ["".concat(e, "X")]),
              ),
              null === (o = t.player) ||
                void 0 === o ||
                o.playbackRate(n.playbackRate)),
              T.Z.emit("toggle-playback-rate"));
          },
          a = function () {
            n.showPlaybackRate = !0;
          },
          s = function () {
            n.showPlaybackRate = !1;
          },
          l = function () {
            (T.Z.on("playback-slide-in", a), T.Z.on("playback-slide-out", s));
          },
          c = function () {
            (T.Z.off("playback-slide-in", a), T.Z.off("playback-slide-out", s));
          };
        return (
          l(),
          (0, o.onBeforeUnmount)(c),
          function (e, t) {
            var a;
            return (
              (0, o.openBlock)(),
              (0, o.createElementBlock)(
                "div",
                {
                  class: (0, o.normalizeClass)(
                    ((a = {}),
                    (a[e.$style.playbackRate] = !0),
                    (a[e.$style.expand] = (0, o.unref)(n).showPlaybackRate),
                    a),
                  ),
                },
                [
                  ((0, o.openBlock)(!0),
                  (0, o.createElementBlock)(
                    o.Fragment,
                    null,
                    (0, o.renderList)(i.value, function (t) {
                      var i;
                      return (
                        (0, o.openBlock)(),
                        (0, o.createElementBlock)(
                          "div",
                          {
                            class: (0, o.normalizeClass)(
                              ((i = {}),
                              (i[e.$style.active] =
                                (0, o.unref)(n).playbackRate === t),
                              (i[e.$style.rate] = !0),
                              i),
                            ),
                            onClick: function (e) {
                              return r(t);
                            },
                            key: t,
                          },
                          (0, o.toDisplayString)(t + "X"),
                          11,
                          dt,
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
    }),
    mt = {
      markdownBody: "playback-rate__markdown-body-quZ9x",
      loginTypeLogo: "playback-rate__login-type-logo-bD7qm",
      loginTemplateTitle: "playback-rate__login-template-title-gLUk5",
      loginTemplateLoginOptions:
        "playback-rate__login-template-loginOptions-c6fO3",
      modalOnTop: "playback-rate__modal-on-top-JcPTp",
      modalWrapper: "playback-rate__modal-wrapper-aaXRs",
      scIonModalIos: "playback-rate__sc-ion-modal-ios-nSD3i",
      modalFullscreen: "playback-rate__modal-fullscreen-df5rR",
      scIonModalIosH: "playback-rate__sc-ion-modal-ios-h-kNicG",
      playbackRate: "playback-rate__playback-rate-_8RPn",
      expand: "playback-rate__expand-stCpx",
      rate: "playback-rate__rate-jkTaz",
      active: "playback-rate__active-czAni",
    };
  const ft = {};
  ft["$style"] = mt;
  const vt = (0, A.Z)(pt, [["__cssModules", ft]]);
  var gt = vt,
    ht = n(49851),
    Ct = ["onClick", "title"],
    yt = (0, o.defineComponent)(
      (0, r.pi)(
        { name: "VideoQualityPanel" },
        {
          __name: "VideoQualityPanel",
          props: { videoStore: {} },
          emits: ["switched"],
          setup: function (e, t) {
            var n = this,
              i = t.emit,
              a = e,
              s = (0, ht.W2)(a.videoStore),
              l = s.source,
              c = s.sources,
              u = s.switchSource,
              d = s.initSources;
            d();
            var p = function (e) {
              return (0, r.mG)(n, void 0, void 0, function () {
                return (0, r.Jh)(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return [4, u(e)];
                    case 1:
                      return (t.sent(), i("switched"), [2]);
                  }
                });
              });
            };
            return function (e, t) {
              return (
                (0, o.openBlock)(!0),
                (0, o.createElementBlock)(
                  o.Fragment,
                  null,
                  (0, o.renderList)((0, o.unref)(c), function (t, n) {
                    var i;
                    return (
                      (0, o.openBlock)(),
                      (0, o.createElementBlock)(
                        "div",
                        {
                          class: (0, o.normalizeClass)(
                            ((i = {}),
                            (i[e.$style.source] = !0),
                            (i[e.$style.active] = (0, o.unref)(l) === t),
                            i),
                          ),
                          onClick: function (e) {
                            return p(t);
                          },
                          key: t + n,
                          title: t,
                        },
                        (0, o.toDisplayString)(
                          e.$t("player.quality.".concat(t)),
                        ),
                        11,
                        Ct,
                      )
                    );
                  }),
                  128,
                )
              );
            };
          },
        },
      ),
    ),
    At = {
      markdownBody: "VideoQualityPanel__markdown-body-R_7Vc",
      loginTypeLogo: "VideoQualityPanel__login-type-logo-Qre2X",
      loginTemplateTitle: "VideoQualityPanel__login-template-title-hYea9",
      loginTemplateLoginOptions:
        "VideoQualityPanel__login-template-loginOptions-S1X5N",
      modalOnTop: "VideoQualityPanel__modal-on-top-a9HJV",
      modalWrapper: "VideoQualityPanel__modal-wrapper-BTKyM",
      scIonModalIos: "VideoQualityPanel__sc-ion-modal-ios-wN53t",
      modalFullscreen: "VideoQualityPanel__modal-fullscreen-dji1N",
      scIonModalIosH: "VideoQualityPanel__sc-ion-modal-ios-h-EyUlL",
      source: "VideoQualityPanel__source-hbyc4",
      active: "VideoQualityPanel__active-HOeSM",
    };
  const wt = {};
  wt["$style"] = At;
  const bt = (0, A.Z)(yt, [["__cssModules", wt]]);
  var Et = bt,
    St = ["onClick", "title"],
    Tt = (0, o.defineComponent)(
      (0, r.pi)(
        { name: "VideoChannelPanel" },
        {
          __name: "VideoChannelPanel",
          props: { videoStore: {} },
          emits: ["switched"],
          setup: function (e, t) {
            var n = this,
              i = t.emit,
              a = e,
              s = (0, ht.zi)(a.videoStore),
              l = s.source,
              c = s.sources,
              u = s.switchSource,
              d = s.initSources;
            d();
            var p = function (e) {
              return (0, r.mG)(n, void 0, void 0, function () {
                return (0, r.Jh)(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return [4, u(e)];
                    case 1:
                      return (t.sent(), i("switched"), [2]);
                  }
                });
              });
            };
            return function (e, t) {
              return (
                (0, o.openBlock)(!0),
                (0, o.createElementBlock)(
                  o.Fragment,
                  null,
                  (0, o.renderList)((0, o.unref)(c), function (t, n) {
                    var i;
                    return (
                      (0, o.openBlock)(),
                      (0, o.createElementBlock)(
                        "div",
                        {
                          class: (0, o.normalizeClass)(
                            ((i = {}),
                            (i[e.$style.source] = !0),
                            (i[e.$style.active] = (0, o.unref)(l) === t),
                            i),
                          ),
                          onClick: function (e) {
                            return p(t);
                          },
                          key: t + n,
                          title: t,
                        },
                        (0, o.toDisplayString)(
                          e.$t("player.videoChannel.".concat(t)),
                        ),
                        11,
                        St,
                      )
                    );
                  }),
                  128,
                )
              );
            };
          },
        },
      ),
    ),
    _t = {
      markdownBody: "VideoChannelPanel__markdown-body-Ps2rx",
      loginTypeLogo: "VideoChannelPanel__login-type-logo-wRU_M",
      loginTemplateTitle: "VideoChannelPanel__login-template-title-a0sGb",
      loginTemplateLoginOptions:
        "VideoChannelPanel__login-template-loginOptions-dDgJe",
      modalOnTop: "VideoChannelPanel__modal-on-top-_O4nV",
      modalWrapper: "VideoChannelPanel__modal-wrapper-nAIwm",
      scIonModalIos: "VideoChannelPanel__sc-ion-modal-ios-fWbnZ",
      modalFullscreen: "VideoChannelPanel__modal-fullscreen-qoBsw",
      scIonModalIosH: "VideoChannelPanel__sc-ion-modal-ios-h-Worwy",
      source: "VideoChannelPanel__source-l4laa",
      active: "VideoChannelPanel__active-cQhO0",
    };
  const It = {};
  It["$style"] = _t;
  const Lt = (0, A.Z)(Tt, [["__cssModules", It]]);
  var kt = Lt,
    Pt = ["onClick", "title"],
    Bt = (0, o.defineComponent)(
      (0, r.pi)(
        { name: "AudioChannelPanel" },
        {
          __name: "AudioChannelPanel",
          props: { videoStore: {} },
          emits: ["switched"],
          setup: function (e, t) {
            var n = this,
              i = t.emit,
              a = e,
              s = (0, ht.BF)(a.videoStore),
              l = s.source,
              c = s.sources,
              u = s.switchSource,
              d = s.initSources;
            d();
            var p = function (e) {
              return (0, r.mG)(n, void 0, void 0, function () {
                return (0, r.Jh)(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return [4, u(e)];
                    case 1:
                      return (t.sent(), i("switched"), [2]);
                  }
                });
              });
            };
            return function (e, t) {
              return (
                (0, o.openBlock)(!0),
                (0, o.createElementBlock)(
                  o.Fragment,
                  null,
                  (0, o.renderList)((0, o.unref)(c), function (t, n) {
                    var i;
                    return (
                      (0, o.openBlock)(),
                      (0, o.createElementBlock)(
                        "div",
                        {
                          class: (0, o.normalizeClass)(
                            ((i = {}),
                            (i[e.$style.source] = !0),
                            (i[e.$style.active] = (0, o.unref)(l) === t),
                            i),
                          ),
                          onClick: function (e) {
                            return p(t);
                          },
                          key: t + n,
                          title: t,
                        },
                        (0, o.toDisplayString)(
                          e.$t("player.audioChannel.".concat(t)),
                        ),
                        11,
                        Pt,
                      )
                    );
                  }),
                  128,
                )
              );
            };
          },
        },
      ),
    ),
    Rt = {
      markdownBody: "AudioChannelPanel__markdown-body-HJ86V",
      loginTypeLogo: "AudioChannelPanel__login-type-logo-XRlcR",
      loginTemplateTitle: "AudioChannelPanel__login-template-title-ql1Tl",
      loginTemplateLoginOptions:
        "AudioChannelPanel__login-template-loginOptions-BHmcn",
      modalOnTop: "AudioChannelPanel__modal-on-top-QqeQb",
      modalWrapper: "AudioChannelPanel__modal-wrapper-JqKmM",
      scIonModalIos: "AudioChannelPanel__sc-ion-modal-ios-mLlUi",
      modalFullscreen: "AudioChannelPanel__modal-fullscreen-p1G_D",
      scIonModalIosH: "AudioChannelPanel__sc-ion-modal-ios-h-a_YGx",
      source: "AudioChannelPanel__source-rm3vs",
      active: "AudioChannelPanel__active-eMrAG",
    };
  const xt = {};
  xt["$style"] = Rt;
  const Ot = (0, A.Z)(Bt, [["__cssModules", xt]]);
  var Mt = Ot,
    Vt = (0, o.defineComponent)(
      (0, r.pi)(
        { name: "SourcesPanel" },
        {
          __name: "index",
          setup: function (e) {
            var t = (0, o.inject)("videoStore"),
              n = (0, o.computed)(function () {
                return i.value || r.value || a.value;
              }),
              i = (0, o.computed)(function () {
                return (
                  fe.Z.isMultiDefinitionStore(t.store.type) &&
                  t.store.activeSourcePanel === me.v1.VideoQuality
                );
              }),
              r = (0, o.computed)(function () {
                return (
                  fe.Z.isLiveOrCaptureStore(t.store.type) &&
                  t.store.activeSourcePanel === me.v1.VideoChannel
                );
              }),
              a = (0, o.computed)(function () {
                return (
                  fe.Z.isLiveOrCaptureStore(t.store.type) &&
                  ve.Z.settings.orgSetting.enableMobileLiveVodAudioSwitch &&
                  t.store.activeSourcePanel === me.v1.AudioChannel
                );
              }),
              s = function () {
                t.store.activeSourcePanel && (t.store.activeSourcePanel = !1);
              };
            return function (e, l) {
              var c;
              return (
                (0, o.openBlock)(),
                (0, o.createElementBlock)(
                  "div",
                  {
                    class: (0, o.normalizeClass)(
                      ((c = {}),
                      (c[e.$style.sourcesSwitch] = !0),
                      (c[e.$style.expand] = n.value),
                      c),
                    ),
                  },
                  [
                    i.value
                      ? ((0, o.openBlock)(),
                        (0, o.createBlock)(
                          Et,
                          {
                            key: 0,
                            "video-store": (0, o.unref)(t),
                            onSwitched: s,
                          },
                          null,
                          8,
                          ["video-store"],
                        ))
                      : (0, o.createCommentVNode)("", !0),
                    r.value
                      ? ((0, o.openBlock)(),
                        (0, o.createBlock)(
                          kt,
                          {
                            key: 1,
                            "video-store": (0, o.unref)(t),
                            onSwitched: s,
                          },
                          null,
                          8,
                          ["video-store"],
                        ))
                      : (0, o.createCommentVNode)("", !0),
                    a.value
                      ? ((0, o.openBlock)(),
                        (0, o.createBlock)(
                          Mt,
                          {
                            key: 2,
                            "video-store": (0, o.unref)(t),
                            onSwitched: s,
                          },
                          null,
                          8,
                          ["video-store"],
                        ))
                      : (0, o.createCommentVNode)("", !0),
                  ],
                  2,
                )
              );
            };
          },
        },
      ),
    ),
    Nt = {
      markdownBody: "index__markdown-body-ZPd8Z",
      loginTypeLogo: "index__login-type-logo-GcdZQ",
      loginTemplateTitle: "index__login-template-title-D0klS",
      loginTemplateLoginOptions: "index__login-template-loginOptions-z_twx",
      modalOnTop: "index__modal-on-top-TS5mI",
      modalWrapper: "index__modal-wrapper-goM0C",
      scIonModalIos: "index__sc-ion-modal-ios-hUMyI",
      modalFullscreen: "index__modal-fullscreen-uAmnV",
      scIonModalIosH: "index__sc-ion-modal-ios-h-hzVMv",
      sourcesSwitch: "index__sourcesSwitch-KusdJ",
      expand: "index__expand-aalt2",
    };
  const Dt = {};
  Dt["$style"] = Nt;
  const Zt = (0, A.Z)(Vt, [["__cssModules", Dt]]);
  var Ut = Zt,
    Ht = n(771),
    Ft = n(34165),
    Gt = (0, o.defineComponent)({
      __name: "SettingSlider",
      emits: ["click", "showLockInfo", "showExamActions"],
      setup: function (e, t) {
        var n = t.emit,
          i = (0, o.inject)("videoStore"),
          r = i.store,
          a = (0, g.$)(),
          s = a.enableVerbatim,
          l = a.videoVerbatim,
          c = (0, Ft.z)(),
          u = c.showVideoTopic,
          d = c.videoTopics,
          p = (0, o.ref)(!1),
          m = function () {
            l.value.length
              ? (h(!1), T.Z.emit("verbatim-slide-in"))
              : v["default"].showMessage(
                  ut["default"].global.t("player.caption.noVerbatim"),
                  { timeout: 2e3 },
                );
          },
          f = function () {
            d.value.length
              ? (h(!1), T.Z.emit("topic-slide-in"))
              : v["default"].showMessage(
                  ut["default"].global.t("player.topic.noTopic"),
                  { timeout: 2e3 },
                );
          },
          h = function (e) {
            e !== p.value &&
              (e
                ? (n("click", !0),
                  setTimeout(function () {
                    p.value = !0;
                  }, 0))
                : ((p.value = !1),
                  setTimeout(function () {
                    n("click", !1);
                  }, 300)));
          },
          C = function () {
            r.inFullScreen && h(!0);
          },
          y = function () {
            h(!1);
          },
          A = function () {
            (T.Z.on("setting-slide-in", C), T.Z.on("setting-slide-out", y));
          },
          w = function () {
            (T.Z.off("setting-slide-in", C), T.Z.off("setting-slide-out", y));
          };
        return (
          (0, Ht.u7)(A),
          (0, Ht.B)(w),
          function (e, t) {
            var n;
            return (
              (0, o.openBlock)(),
              (0, o.createElementBlock)(
                "div",
                {
                  class: (0, o.normalizeClass)(
                    ((n = {}),
                    (n[e.$style.settingSlide] = !0),
                    (n[e.$style.expand] = p.value),
                    n),
                  ),
                },
                [
                  (0, o.createElementVNode)("main", null, [
                    (0, o.unref)(s)
                      ? ((0, o.openBlock)(),
                        (0, o.createElementBlock)(
                          "div",
                          {
                            key: 0,
                            onClick: m,
                            class: (0, o.normalizeClass)(e.$style.slideItem),
                          },
                          (0, o.toDisplayString)(
                            e.$t("player.caption.verbatim"),
                          ),
                          3,
                        ))
                      : (0, o.createCommentVNode)("", !0),
                    (0, o.unref)(u)
                      ? ((0, o.openBlock)(),
                        (0, o.createElementBlock)(
                          "div",
                          {
                            key: 1,
                            onClick: f,
                            class: (0, o.normalizeClass)(e.$style.slideItem),
                          },
                          (0, o.toDisplayString)(e.$t("player.topic.title")),
                          3,
                        ))
                      : (0, o.createCommentVNode)("", !0),
                    e.$slots["download-function"]
                      ? ((0, o.openBlock)(),
                        (0, o.createElementBlock)(
                          "div",
                          {
                            key: 2,
                            class: (0, o.normalizeClass)(e.$style.slideItem),
                          },
                          [(0, o.renderSlot)(e.$slots, "download-function")],
                          2,
                        ))
                      : (0, o.createCommentVNode)("", !0),
                  ]),
                ],
                2,
              )
            );
          }
        );
      },
    }),
    zt = {
      markdownBody: "SettingSlider__markdown-body-l4v1W",
      loginTypeLogo: "SettingSlider__login-type-logo-hgls1",
      loginTemplateTitle: "SettingSlider__login-template-title-g8DRO",
      loginTemplateLoginOptions:
        "SettingSlider__login-template-loginOptions-g7bXT",
      modalOnTop: "SettingSlider__modal-on-top-cKbTA",
      modalWrapper: "SettingSlider__modal-wrapper-pItr1",
      scIonModalIos: "SettingSlider__sc-ion-modal-ios-tf5h4",
      modalFullscreen: "SettingSlider__modal-fullscreen-y_aYk",
      scIonModalIosH: "SettingSlider__sc-ion-modal-ios-h-QZe8W",
      settingSlide: "SettingSlider__settingSlide-fcgkv",
      expand: "SettingSlider__expand-wJrCr",
      slideItem: "SettingSlider__slideItem-k8npG",
    };
  const Qt = {};
  Qt["$style"] = zt;
  const jt = (0, A.Z)(Gt, [["__cssModules", Qt]]);
  var qt = jt,
    Jt = (0, o.defineComponent)({
      __name: "CaptionsBox",
      setup: function (e) {
        var t = (0, h.C8)().store,
          n = (0, g.Q)(),
          i = n.captionsOpen,
          r = n.getCaptions,
          a = n.currentCaption,
          s = (0, o.computed)(function () {
            return t.inFullScreen;
          });
        return (
          r(),
          function (e, n) {
            var r, l, c;
            return (0, o.withDirectives)(
              ((0, o.openBlock)(),
              (0, o.createElementBlock)(
                "div",
                {
                  "data-control-click": "",
                  class: (0, o.normalizeClass)(
                    ((r = {}),
                    (r[e.$style.captionBox] = !0),
                    (r[e.$style.showControl] = (0, o.unref)(t).showControl),
                    r),
                  ),
                },
                [
                  (0, o.createElementVNode)(
                    "span",
                    {
                      class: (0, o.normalizeClass)(
                        ((l = {}),
                        (l[e.$style.captionText] = !0),
                        (l[e.$style.inFullScreen] = s.value),
                        l),
                      ),
                    },
                    (0, o.toDisplayString)(
                      null === (c = (0, o.unref)(a)) || void 0 === c
                        ? void 0
                        : c.text,
                    ),
                    3,
                  ),
                ],
                2,
              )),
              [[o.vShow, (0, o.unref)(i) && (0, o.unref)(a)]],
            );
          }
        );
      },
    }),
    Wt = {
      markdownBody: "CaptionsBox__markdown-body-BThj2",
      loginTypeLogo: "CaptionsBox__login-type-logo-qgIyY",
      loginTemplateTitle: "CaptionsBox__login-template-title-OizOi",
      loginTemplateLoginOptions:
        "CaptionsBox__login-template-loginOptions-lQqcB",
      modalOnTop: "CaptionsBox__modal-on-top-_sffN",
      modalWrapper: "CaptionsBox__modal-wrapper-eVaqD",
      scIonModalIos: "CaptionsBox__sc-ion-modal-ios-g0Y6U",
      modalFullscreen: "CaptionsBox__modal-fullscreen-prhwy",
      scIonModalIosH: "CaptionsBox__sc-ion-modal-ios-h-TUBRZ",
      captionBox: "CaptionsBox__captionBox-QAeZ_",
      showControl: "CaptionsBox__showControl-Kz5ho",
      captionText: "CaptionsBox__captionText-LTmho",
      inFullScreen: "CaptionsBox__inFullScreen-NGvZN",
    };
  const Xt = {};
  Xt["$style"] = Wt;
  const Yt = (0, A.Z)(Jt, [["__cssModules", Xt]]);
  var Kt = Yt,
    $t = n(76584),
    en = n(41680),
    tn = n(82664),
    nn = ["onClick"],
    on = (0, o.defineComponent)({
      __name: "Chapter",
      setup: function (e) {
        var t = (0, $t.Y)(),
          n = t.fetchChapter,
          i = t.positionChapterHandler,
          r = t.changeStatus,
          a = t.videoChapters,
          s = t.currentChapter,
          l = t.showList,
          c = t.showCurrent,
          u = t.calculateHover;
        n();
        var d = (0, o.useCssModule)(),
          p = (0, o.ref)(),
          m = function (e) {
            var t = document.querySelectorAll(".".concat(d.onHover));
            if (0 !== t.length) {
              var n = t[t.length - 1];
              n &&
                p.value.scrollTo({
                  left: n.offsetLeft,
                  behavior: e ? "smooth" : "instant",
                });
            }
          },
          f = function (e) {
            (r(e),
              e &&
                (0, o.nextTick)(function () {
                  m();
                }));
          },
          v = function () {
            m(!0);
          },
          g = (0, tn.Dj)(v),
          h = g.startObserve,
          C = g.stopObserve;
        return (
          (0, o.onMounted)(function () {
            h(p.value);
          }),
          (0, o.onBeforeUnmount)(C),
          function (e, t) {
            var n,
              r,
              d = (0, o.resolveComponent)("svgIcon");
            return (
              (0, o.openBlock)(),
              (0, o.createElementBlock)(
                "div",
                {
                  class: (0, o.normalizeClass)(
                    ((n = {}),
                    (n[e.$style.chapterContainer] = !0),
                    (n[e.$style.showList] = (0, o.unref)(l)),
                    n),
                  ),
                },
                [
                  (0, o.withDirectives)(
                    (0, o.createElementVNode)(
                      "div",
                      { class: (0, o.normalizeClass)(e.$style.chapterList) },
                      [
                        (0, o.createElementVNode)(
                          "h2",
                          null,
                          (0, o.toDisplayString)(e.$t("player.chapter.title")),
                          1,
                        ),
                        (0, o.createElementVNode)(
                          "div",
                          {
                            class: (0, o.normalizeClass)(e.$style.content),
                            ref_key: "listRef",
                            ref: p,
                          },
                          [
                            ((0, o.openBlock)(!0),
                            (0, o.createElementBlock)(
                              o.Fragment,
                              null,
                              (0, o.renderList)((0, o.unref)(a), function (t) {
                                var n;
                                return (
                                  (0, o.openBlock)(),
                                  (0, o.createElementBlock)(
                                    "div",
                                    {
                                      onClick: function (e) {
                                        return (0, o.unref)(i)(t);
                                      },
                                      class: (0, o.normalizeClass)(
                                        ((n = {}),
                                        (n[e.$style.chapterItem] = !0),
                                        (n[e.$style.onHover] = (0, o.unref)(u)(
                                          t,
                                        )),
                                        n),
                                      ),
                                      key: t.startTs,
                                    },
                                    [
                                      (0, o.createElementVNode)("h3", null, [
                                        (0, o.unref)(u)(t)
                                          ? ((0, o.openBlock)(),
                                            (0, o.createBlock)(d, {
                                              key: 0,
                                              name: "chapter-on-hover",
                                            }))
                                          : (0, o.createCommentVNode)("", !0),
                                        (0, o.createElementVNode)(
                                          "span",
                                          {
                                            class: (0, o.normalizeClass)(
                                              e.$style.title,
                                            ),
                                          },
                                          (0, o.toDisplayString)(t.title),
                                          3,
                                        ),
                                        (0, o.createElementVNode)(
                                          "span",
                                          {
                                            class: (0, o.normalizeClass)(
                                              e.$style.time,
                                            ),
                                          },
                                          (0, o.toDisplayString)(
                                            (0, o.unref)(en.D)(
                                              Number(
                                                (t.startTs / 1e3).toFixed(0),
                                              ),
                                              !0,
                                            ),
                                          ),
                                          3,
                                        ),
                                      ]),
                                      (0, o.createElementVNode)(
                                        "p",
                                        {
                                          class: (0, o.normalizeClass)(
                                            e.$style.summary,
                                          ),
                                        },
                                        (0, o.toDisplayString)(t.summary),
                                        3,
                                      ),
                                    ],
                                    10,
                                    nn,
                                  )
                                );
                              }),
                              128,
                            )),
                          ],
                          2,
                        ),
                      ],
                      2,
                    ),
                    [[o.vShow, (0, o.unref)(l)]],
                  ),
                  (0, o.withDirectives)(
                    (0, o.createElementVNode)(
                      "div",
                      {
                        onClick:
                          t[0] ||
                          (t[0] = function (e) {
                            return f(!0);
                          }),
                        class: (0, o.normalizeClass)(e.$style.currentChapter),
                      },
                      [
                        (0, o.createElementVNode)(
                          "span",
                          null,
                          (0, o.toDisplayString)(
                            ""
                              .concat(e.$t("player.chapter.title"), "：")
                              .concat(
                                null === (r = (0, o.unref)(s)()) || void 0 === r
                                  ? void 0
                                  : r.title,
                              ),
                          ),
                          1,
                        ),
                        (0, o.createVNode)(d, { name: "arrow-forward" }),
                      ],
                      2,
                    ),
                    [[o.vShow, (0, o.unref)(c)]],
                  ),
                ],
                2,
              )
            );
          }
        );
      },
    }),
    rn = {
      chapterContainer: "Chapter__chapterContainer-qV2Ol",
      showList: "Chapter__showList-ypdCe",
      chapterList: "Chapter__chapterList-nwu3r",
      content: "Chapter__content-_O5Ow",
      chapterItem: "Chapter__chapterItem-JZVLW",
      title: "Chapter__title-K8VXI",
      markdownBody: "Chapter__markdown-body-SxAFb",
      loginTypeLogo: "Chapter__login-type-logo-WP6aR",
      loginTemplateTitle: "Chapter__login-template-title-kFOZM",
      loginTemplateLoginOptions: "Chapter__login-template-loginOptions-vfvtA",
      modalOnTop: "Chapter__modal-on-top-ztbA1",
      modalWrapper: "Chapter__modal-wrapper-Fhm6D",
      scIonModalIos: "Chapter__sc-ion-modal-ios-IvCdI",
      modalFullscreen: "Chapter__modal-fullscreen-GrlW_",
      scIonModalIosH: "Chapter__sc-ion-modal-ios-h-ySqND",
      currentChapter: "Chapter__currentChapter-f84a8",
      onHover: "Chapter__onHover-FDqWl",
      time: "Chapter__time-EuGhk",
      summary: "Chapter__summary-dT2sc",
    };
  const an = {};
  an["$style"] = rn;
  const sn = (0, A.Z)(on, [["__cssModules", an]]);
  var ln = sn,
    cn = (n(41539), n(47042), ["onClick"]),
    un = (0, o.defineComponent)(
      (0, r.pi)(
        { name: "VideoTopicItem" },
        {
          __name: "TopicItem",
          props: {
            videoTopic: {},
            showPositionLabel: { type: Boolean },
            showAllPosition: { type: Boolean, default: !1 },
          },
          emits: ["positionClick", "viewAllPosition"],
          setup: function (e, t) {
            var n = t.emit,
              i = e,
              r = (0, o.computed)(function () {
                return i.showAllPosition
                  ? i.videoTopic.positions
                  : i.videoTopic.positions.slice(0, 3);
              }),
              a = function (e, t) {
                if ((void 0 === t && (t = !1), 0 === e)) return "00:00:00";
                var n = Math.floor(e / 3600),
                  o = Math.floor((e - 3600 * n) / 60),
                  i = e - 3600 * n - 60 * o,
                  r = "".concat(n < 10 ? "0" : "").concat(n),
                  a = "".concat(o < 10 ? "0" : "").concat(o),
                  s = "".concat(i < 10 ? "0" : "").concat(i);
                return "00" === r && t ? a + ":" + s : r + ":" + a + ":" + s;
              },
              s = function (e) {
                n("positionClick", e);
              },
              l = function () {
                n("viewAllPosition", i.videoTopic);
              };
            return function (e, t) {
              var n = (0, o.resolveComponent)("SvgIcon");
              return (
                (0, o.openBlock)(),
                (0, o.createElementBlock)(
                  "div",
                  { class: (0, o.normalizeClass)(e.$style.topicItemWrapper) },
                  [
                    (0, o.createElementVNode)(
                      "div",
                      { class: (0, o.normalizeClass)(e.$style.content) },
                      (0, o.toDisplayString)(e.videoTopic.topic),
                      3,
                    ),
                    (0, o.createElementVNode)(
                      "div",
                      { class: (0, o.normalizeClass)(e.$style.positionList) },
                      [
                        ((0, o.openBlock)(!0),
                        (0, o.createElementBlock)(
                          o.Fragment,
                          null,
                          (0, o.renderList)(r.value, function (t) {
                            var n;
                            return (
                              (0, o.openBlock)(),
                              (0, o.createElementBlock)(
                                "div",
                                {
                                  key: ""
                                    .concat(e.videoTopic.id, "-")
                                    .concat(t.position),
                                  class: (0, o.normalizeClass)(
                                    e.$style.positionItem,
                                  ),
                                },
                                [
                                  (0, o.createElementVNode)(
                                    "span",
                                    {
                                      class: (0, o.normalizeClass)(
                                        e.$style.position,
                                      ),
                                      onClick: function (e) {
                                        return s(t);
                                      },
                                    },
                                    (0, o.toDisplayString)(a(t.position)),
                                    11,
                                    cn,
                                  ),
                                  e.showPositionLabel
                                    ? ((0, o.openBlock)(),
                                      (0, o.createElementBlock)(
                                        "div",
                                        {
                                          key: 0,
                                          class: (0, o.normalizeClass)(
                                            e.$style.positionLabel,
                                          ),
                                        },
                                        [
                                          (0, o.createElementVNode)(
                                            "span",
                                            {
                                              class: (0, o.normalizeClass)(
                                                ((n = {}),
                                                (n[e.$style.label] = !0),
                                                (n[e.$style[t.label]] =
                                                  t.label),
                                                n),
                                              ),
                                            },
                                            (0, o.toDisplayString)(
                                              t.label
                                                ? e.$t(
                                                    "player.topic.positionLabel.".concat(
                                                      t.label,
                                                    ),
                                                  )
                                                : "",
                                            ),
                                            3,
                                          ),
                                        ],
                                        2,
                                      ))
                                    : (0, o.createCommentVNode)("", !0),
                                ],
                                2,
                              )
                            );
                          }),
                          128,
                        )),
                        !e.showAllPosition && e.videoTopic.positions.length > 3
                          ? ((0, o.openBlock)(),
                            (0, o.createElementBlock)(
                              "div",
                              {
                                key: 0,
                                onClick: l,
                                class: (0, o.normalizeClass)(
                                  e.$style.viewAllPosition,
                                ),
                              },
                              [
                                (0, o.createElementVNode)(
                                  "span",
                                  null,
                                  (0, o.toDisplayString)(
                                    e.$t("player.topic.viewAll"),
                                  ),
                                  1,
                                ),
                                (0, o.createVNode)(n, {
                                  name: "arrow-forward",
                                }),
                              ],
                              2,
                            ))
                          : (0, o.createCommentVNode)("", !0),
                      ],
                      2,
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
    dn = {
      markdownBody: "TopicItem__markdown-body-oRWdG",
      loginTypeLogo: "TopicItem__login-type-logo-abQja",
      loginTemplateTitle: "TopicItem__login-template-title-xfrtr",
      loginTemplateLoginOptions: "TopicItem__login-template-loginOptions-_Xe6N",
      modalOnTop: "TopicItem__modal-on-top-z5sHg",
      modalWrapper: "TopicItem__modal-wrapper-uGokc",
      scIonModalIos: "TopicItem__sc-ion-modal-ios-Emtz2",
      modalFullscreen: "TopicItem__modal-fullscreen-bGQCS",
      scIonModalIosH: "TopicItem__sc-ion-modal-ios-h-b2fzE",
      topicItemWrapper: "TopicItem__topicItemWrapper-xEdMr",
      content: "TopicItem__content-Rez0_",
      positionList: "TopicItem__positionList-atBUd",
      positionItem: "TopicItem__positionItem-kX6Iu",
      viewAllPosition: "TopicItem__viewAllPosition-ODiCy",
      position: "TopicItem__position-B9Eny",
      positionLabel: "TopicItem__positionLabel-y9miv",
      label: "TopicItem__label-SCql1",
      difficulty: "TopicItem__difficulty-xbCUU",
      exam: "TopicItem__exam-ylnMQ",
      example: "TopicItem__example-p3Scg",
      emphasis: "TopicItem__emphasis-I9GNI",
      think: "TopicItem__think-AjPIB",
    };
  const pn = {};
  pn["$style"] = dn;
  const mn = (0, A.Z)(un, [["__cssModules", pn]]);
  var fn = mn,
    vn = (0, o.defineComponent)(
      (0, r.pi)(
        { name: "VideoTopicList" },
        {
          __name: "TopicsList",
          props: { videoTopics: {} },
          emits: ["videoPositionClick", "viewVideoTopic"],
          setup: function (e, t) {
            var n = t.emit,
              i = e,
              r = (0, o.computed)(function () {
                return i.videoTopics.some(function (e) {
                  return e.positions.some(function (e) {
                    return e.label;
                  });
                });
              }),
              a = (0, Ft.z)(),
              s = a.published,
              l = a.changePublished,
              c = a.isInstructor,
              u = function (e) {
                n("videoPositionClick", e);
              },
              d = function (e) {
                n("viewVideoTopic", e);
              };
            return function (e, t) {
              var n = (0, o.resolveComponent)("ion-toggle"),
                i = (0, o.resolveComponent)("ion-content");
              return (
                (0, o.openBlock)(),
                (0, o.createElementBlock)(
                  "div",
                  { class: (0, o.normalizeClass)(e.$style.topicListWrapper) },
                  [
                    (0, o.createElementVNode)(
                      "div",
                      { class: (0, o.normalizeClass)(e.$style.header) },
                      [
                        (0, o.createElementVNode)(
                          "span",
                          { class: (0, o.normalizeClass)(e.$style.title) },
                          (0, o.toDisplayString)(e.$t("player.topic.title")),
                          3,
                        ),
                        (0, o.unref)(c)
                          ? ((0, o.openBlock)(),
                            (0, o.createElementBlock)(
                              "div",
                              {
                                key: 0,
                                class: (0, o.normalizeClass)(e.$style.switch),
                              },
                              [
                                (0, o.createElementVNode)(
                                  "label",
                                  null,
                                  (0, o.toDisplayString)(
                                    e.$t("player.topic.visibleToStudents"),
                                  ),
                                  1,
                                ),
                                (0, o.createVNode)(
                                  n,
                                  {
                                    size: "small",
                                    checked: (0, o.unref)(s),
                                    onClick:
                                      t[0] ||
                                      (t[0] = function (e) {
                                        return (0, o.unref)(l)();
                                      }),
                                  },
                                  null,
                                  8,
                                  ["checked"],
                                ),
                              ],
                              2,
                            ))
                          : (0, o.createCommentVNode)("", !0),
                      ],
                      2,
                    ),
                    (0, o.createVNode)(
                      i,
                      {
                        class: (0, o.normalizeClass)(e.$style.content),
                        "scroll-y": e.videoTopics.length > 0,
                      },
                      {
                        default: (0, o.withCtx)(function () {
                          return [
                            ((0, o.openBlock)(!0),
                            (0, o.createElementBlock)(
                              o.Fragment,
                              null,
                              (0, o.renderList)(e.videoTopics, function (e) {
                                return (
                                  (0, o.openBlock)(),
                                  (0, o.createBlock)(
                                    fn,
                                    {
                                      key: e.id,
                                      videoTopic: e,
                                      showAllPosition: !1,
                                      showPositionLabel: r.value,
                                      onPositionClick: u,
                                      onViewAllPosition: d,
                                    },
                                    null,
                                    8,
                                    ["videoTopic", "showPositionLabel"],
                                  )
                                );
                              }),
                              128,
                            )),
                          ];
                        }),
                        _: 1,
                      },
                      8,
                      ["class", "scroll-y"],
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
    gn = {
      markdownBody: "TopicsList__markdown-body-v5IrO",
      loginTypeLogo: "TopicsList__login-type-logo-GURQi",
      loginTemplateTitle: "TopicsList__login-template-title-k1cex",
      loginTemplateLoginOptions:
        "TopicsList__login-template-loginOptions-nQzer",
      modalOnTop: "TopicsList__modal-on-top-U5bEv",
      modalWrapper: "TopicsList__modal-wrapper-uDCM7",
      scIonModalIos: "TopicsList__sc-ion-modal-ios-tKCYT",
      modalFullscreen: "TopicsList__modal-fullscreen-t0oHY",
      scIonModalIosH: "TopicsList__sc-ion-modal-ios-h-w48uo",
      topicListWrapper: "TopicsList__topicListWrapper-UJgx4",
      header: "TopicsList__header-sUNhv",
      title: "TopicsList__title-nMes3",
      switch: "TopicsList__switch-VP6_j",
      content: "TopicsList__content-EkxUF",
    };
  const hn = {};
  hn["$style"] = gn;
  const Cn = (0, A.Z)(vn, [["__cssModules", hn]]);
  var yn = Cn,
    An = (0, o.defineComponent)(
      (0, r.pi)(
        { name: "SingleVideoTopic" },
        {
          __name: "SingleTopic",
          props: { videoTopic: {} },
          emits: ["back", "videoPositionClick"],
          setup: function (e, t) {
            var n = t.emit,
              i = e,
              r = (0, o.computed)(function () {
                return i.videoTopic.positions.some(function (e) {
                  return e.label;
                });
              }),
              a = function () {
                n("back");
              },
              s = function (e) {
                n("videoPositionClick", e);
              };
            return function (e, t) {
              var n = (0, o.resolveComponent)("SvgIcon"),
                i = (0, o.resolveComponent)("ion-content");
              return (
                (0, o.openBlock)(),
                (0, o.createElementBlock)(
                  "div",
                  { class: (0, o.normalizeClass)(e.$style.singleTopicWrapper) },
                  [
                    (0, o.createElementVNode)(
                      "div",
                      { class: (0, o.normalizeClass)(e.$style.header) },
                      [
                        (0, o.createElementVNode)(
                          "div",
                          {
                            class: (0, o.normalizeClass)(e.$style.back),
                            onClick: a,
                          },
                          [(0, o.createVNode)(n, { name: "video-back" })],
                          2,
                        ),
                        (0, o.createElementVNode)(
                          "span",
                          { class: (0, o.normalizeClass)(e.$style.title) },
                          (0, o.toDisplayString)(e.videoTopic.topic),
                          3,
                        ),
                      ],
                      2,
                    ),
                    (0, o.createVNode)(
                      i,
                      { class: (0, o.normalizeClass)(e.$style.content) },
                      {
                        default: (0, o.withCtx)(function () {
                          return [
                            (0, o.createVNode)(
                              fn,
                              {
                                videoTopic: e.videoTopic,
                                showAllPosition: !0,
                                showPositionLabel: r.value,
                                onPositionClick: s,
                              },
                              null,
                              8,
                              ["videoTopic", "showPositionLabel"],
                            ),
                          ];
                        }),
                        _: 1,
                      },
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
    wn = {
      header: "SingleTopic__header-uAtBd",
      title: "SingleTopic__title-hFUAv",
      markdownBody: "SingleTopic__markdown-body-JJ2Cx",
      loginTypeLogo: "SingleTopic__login-type-logo-Ivrs7",
      loginTemplateTitle: "SingleTopic__login-template-title-PhmIN",
      loginTemplateLoginOptions:
        "SingleTopic__login-template-loginOptions-u_Ew0",
      modalOnTop: "SingleTopic__modal-on-top-S4bX0",
      modalWrapper: "SingleTopic__modal-wrapper-cr4pr",
      scIonModalIos: "SingleTopic__sc-ion-modal-ios-dn2Fx",
      modalFullscreen: "SingleTopic__modal-fullscreen-Dz5_2",
      scIonModalIosH: "SingleTopic__sc-ion-modal-ios-h-jiT9U",
      singleTopicWrapper: "SingleTopic__singleTopicWrapper-hi3II",
      back: "SingleTopic__back-STf75",
      content: "SingleTopic__content-KdDsI",
    };
  const bn = {};
  bn["$style"] = wn;
  const En = (0, A.Z)(An, [["__cssModules", bn]]);
  var Sn = En,
    Tn = (0, o.defineComponent)(
      (0, r.pi)(
        { name: "VideoTopicBox" },
        {
          __name: "TopicsBox",
          setup: function (e) {
            var t = (0, h.C8)().store,
              n = (0, Ft.z)(),
              i = n.videoTopicOpen,
              r = n.getVideoTopics;
            r();
            var a = function (e) {
                var n = e.position;
                T.Z.emit("MEDIA_TAP_PROGRESS", n - t.progress);
              },
              s = (0, o.ref)(),
              l = function (e) {
                s.value = e;
              },
              c = function () {
                i.value = !0;
              },
              u = function () {
                ((i.value = !1), (s.value = void 0));
              },
              d = function () {
                (T.Z.on("topic-slide-in", c),
                  T.Z.on("topic-slide-out", u),
                  T.Z.on("setting-slide-out", u));
              };
            d();
            var p = function () {
              (T.Z.off("topic-slide-in", c),
                T.Z.off("topic-slide-out", u),
                T.Z.off("setting-slide-out", u));
            };
            return (
              (0, o.onBeforeUnmount)(p),
              function (e, n) {
                var r;
                return (
                  (0, o.openBlock)(),
                  (0, o.createElementBlock)(
                    "div",
                    {
                      class: (0, o.normalizeClass)(
                        ((r = {}),
                        (r[e.$style.topicsContainer] = !0),
                        (r[e.$style.expand] = (0, o.unref)(i)),
                        r),
                      ),
                    },
                    [
                      s.value
                        ? ((0, o.openBlock)(),
                          (0, o.createBlock)(
                            Sn,
                            {
                              key: 0,
                              videoTopic: s.value,
                              onBack: l,
                              onVideoPositionClick: a,
                            },
                            null,
                            8,
                            ["videoTopic"],
                          ))
                        : (0, o.createCommentVNode)("", !0),
                      (0, o.withDirectives)(
                        (0, o.createVNode)(
                          yn,
                          {
                            videoTopics: (0, o.unref)(t).videoTopics,
                            onVideoPositionClick: a,
                            onViewVideoTopic: l,
                          },
                          null,
                          8,
                          ["videoTopics"],
                        ),
                        [[o.vShow, !s.value]],
                      ),
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
    _n = {
      markdownBody: "TopicsBox__markdown-body-OLzkF",
      loginTypeLogo: "TopicsBox__login-type-logo-FFuUW",
      loginTemplateTitle: "TopicsBox__login-template-title-JdVsR",
      loginTemplateLoginOptions: "TopicsBox__login-template-loginOptions-M_0R2",
      modalOnTop: "TopicsBox__modal-on-top-Uxdk0",
      modalWrapper: "TopicsBox__modal-wrapper-dmA2Z",
      scIonModalIos: "TopicsBox__sc-ion-modal-ios-aFo0A",
      modalFullscreen: "TopicsBox__modal-fullscreen-j0PKM",
      scIonModalIosH: "TopicsBox__sc-ion-modal-ios-h-rFxf6",
      topicsContainer: "TopicsBox__topicsContainer-KXBMl",
      expand: "TopicsBox__expand-R3hNg",
      header: "TopicsBox__header-MjdaP",
      title: "TopicsBox__title-yCVR9",
      switch: "TopicsBox__switch-qSUMV",
      content: "TopicsBox__content-f2I7K",
    };
  const In = {};
  In["$style"] = _n;
  const Ln = (0, A.Z)(Tn, [["__cssModules", In]]);
  var kn = Ln,
    Pn = ["onClick", "id"],
    Bn = (0, o.defineComponent)({
      __name: "VerbatimBox",
      setup: function (e) {
        var t = (0, h.C8)(),
          n = (0, o.useCssModule)(),
          i = (0, g.$)(),
          r = i.chapterCaptionGroup,
          a = i.videoVerbatimOpen,
          s = i.positionClick,
          c = function () {
            a.value = !0;
          },
          u = function () {
            a.value = !1;
          },
          d = function () {
            (T.Z.on("verbatim-slide-in", c),
              T.Z.on("verbatim-slide-out", u),
              T.Z.on("setting-slide-out", u));
          };
        d();
        var p = function () {
          (T.Z.off("verbatim-slide-in", c),
            T.Z.off("verbatim-slide-out", u),
            T.Z.off("setting-slide-out", u));
        };
        (0, o.onBeforeUnmount)(p);
        var m = (0, o.ref)(),
          f = (0, o.ref)(!0),
          v = (0, o.computed)(function () {
            return 1e3 * Math.ceil(t.store.progress);
          }),
          C = function (e) {
            return e.startMs <= v.value && e.endMs > v.value;
          },
          y = function () {
            var e = document.querySelectorAll(".".concat(n.onHover));
            if (0 !== e.length) {
              var t = e[e.length - 1];
              t &&
                ((f.value = !0),
                m.value.scrollTo({
                  top: t.offsetTop - 70,
                  behavior: "smooth",
                }));
            }
          },
          A = l().throttle(function () {
            f.value = !1;
          }),
          w = function () {
            f.value && y();
          },
          b = (0, tn.Dj)(w),
          E = b.startObserve,
          S = b.stopObserve;
        return (
          (0, o.onMounted)(function () {
            var e;
            (E(m.value),
              null === (e = m.value) ||
                void 0 === e ||
                e.addEventListener("touchmove", A));
          }),
          (0, o.onBeforeUnmount)(function () {
            var e;
            (S(),
              null === (e = m.value) ||
                void 0 === e ||
                e.removeEventListener("touchmove", A));
          }),
          function (e, t) {
            var i,
              l = (0, o.resolveComponent)("svgIcon");
            return (
              (0, o.openBlock)(),
              (0, o.createElementBlock)(
                "div",
                {
                  class: (0, o.normalizeClass)(
                    ((i = {}),
                    (i[e.$style.verbatimsContainer] = !0),
                    (i[e.$style.expand] = (0, o.unref)(a)),
                    i),
                  ),
                },
                [
                  (0, o.createElementVNode)(
                    "div",
                    { class: (0, o.normalizeClass)(e.$style.title) },
                    (0, o.toDisplayString)(e.$t("player.caption.verbatim")),
                    3,
                  ),
                  (0, o.createElementVNode)(
                    "div",
                    {
                      class: (0, o.normalizeClass)(e.$style.verbatimsList),
                      ref_key: "listRef",
                      ref: m,
                    },
                    [
                      ((0, o.openBlock)(!0),
                      (0, o.createElementBlock)(
                        o.Fragment,
                        null,
                        (0, o.renderList)((0, o.unref)(r), function (t, i) {
                          var r;
                          return (
                            (0, o.openBlock)(),
                            (0, o.createElementBlock)(
                              "div",
                              {
                                class: (0, o.normalizeClass)(
                                  (0, o.unref)(n).chapter,
                                ),
                                key:
                                  (null === (r = t.chapter) || void 0 === r
                                    ? void 0
                                    : r.id) || i,
                              },
                              [
                                t.chapter
                                  ? ((0, o.openBlock)(),
                                    (0, o.createElementBlock)(
                                      "div",
                                      {
                                        key: 0,
                                        class: (0, o.normalizeClass)(
                                          e.$style.chapterTitle,
                                        ),
                                      },
                                      [
                                        (0, o.createVNode)(l, {
                                          name: "chapter-flag",
                                        }),
                                        (0, o.createTextVNode)(
                                          " " +
                                            (0, o.toDisplayString)(
                                              t.chapter.title,
                                            ),
                                          1,
                                        ),
                                      ],
                                      2,
                                    ))
                                  : (0, o.createCommentVNode)("", !0),
                                ((0, o.openBlock)(!0),
                                (0, o.createElementBlock)(
                                  o.Fragment,
                                  null,
                                  (0, o.renderList)(
                                    t.paragraphs,
                                    function (t, i) {
                                      return (
                                        (0, o.openBlock)(),
                                        (0, o.createElementBlock)(
                                          "p",
                                          {
                                            class: (0, o.normalizeClass)(
                                              (0, o.unref)(n).paragraph,
                                            ),
                                            key: i,
                                          },
                                          [
                                            ((0, o.openBlock)(!0),
                                            (0, o.createElementBlock)(
                                              o.Fragment,
                                              null,
                                              (0, o.renderList)(
                                                t,
                                                function (t) {
                                                  var n;
                                                  return (
                                                    (0, o.openBlock)(),
                                                    (0, o.createElementBlock)(
                                                      "span",
                                                      {
                                                        onClick: function (e) {
                                                          return (0, o.unref)(
                                                            s,
                                                          )(t);
                                                        },
                                                        id: "caption-".concat(
                                                          t.id,
                                                        ),
                                                        key: t.id,
                                                        class: (0,
                                                        o.normalizeClass)(
                                                          ((n = {}),
                                                          (n[
                                                            e.$style.videoCaption
                                                          ] = !0),
                                                          (n[e.$style.onHover] =
                                                            C(t)),
                                                          n),
                                                        ),
                                                      },
                                                      (0, o.toDisplayString)(
                                                        t.text,
                                                      ),
                                                      11,
                                                      Pn,
                                                    )
                                                  );
                                                },
                                              ),
                                              128,
                                            )),
                                          ],
                                          2,
                                        )
                                      );
                                    },
                                  ),
                                  128,
                                )),
                              ],
                              2,
                            )
                          );
                        }),
                        128,
                      )),
                    ],
                    2,
                  ),
                ],
                2,
              )
            );
          }
        );
      },
    }),
    Rn = {
      markdownBody: "VerbatimBox__markdown-body-F7TEv",
      loginTypeLogo: "VerbatimBox__login-type-logo-fhUGz",
      loginTemplateTitle: "VerbatimBox__login-template-title-l9gm2",
      loginTemplateLoginOptions:
        "VerbatimBox__login-template-loginOptions-e26Cw",
      modalOnTop: "VerbatimBox__modal-on-top-m7mpE",
      modalWrapper: "VerbatimBox__modal-wrapper-Lt4Rb",
      scIonModalIos: "VerbatimBox__sc-ion-modal-ios-RJ2Fp",
      modalFullscreen: "VerbatimBox__modal-fullscreen-nk4xY",
      scIonModalIosH: "VerbatimBox__sc-ion-modal-ios-h-BeVVs",
      verbatimsContainer: "VerbatimBox__verbatimsContainer-iSIfx",
      expand: "VerbatimBox__expand-Sa2Nb",
      title: "VerbatimBox__title-rZIWF",
      verbatimsList: "VerbatimBox__verbatimsList-R62hI",
      chapterTitle: "VerbatimBox__chapterTitle-BBuVg",
      paragraph: "VerbatimBox__paragraph-YHsXe",
      videoCaption: "VerbatimBox__videoCaption-XkPl6",
      onHover: "VerbatimBox__onHover-FPpYN",
    };
  const xn = {};
  xn["$style"] = Rn;
  const On = (0, A.Z)(Bn, [["__cssModules", xn]]);
  var Mn = On,
    Vn = (0, o.defineComponent)({
      __name: "control",
      props: { isFloat: { type: Boolean, default: !1 } },
      setup: function (e) {
        var t = (0, g.Q)().openVideoCaption,
          n = (0, Ft.z)().enableVideoTopic,
          i = (0, g.$)(),
          r = i.enableVerbatim,
          a = i.videoVerbatimOpen,
          s = (0, $t.Y)().enableChapter,
          l = (0, o.ref)(),
          u = (0, o.inject)("videoStore"),
          p = u.store;
        (c.Volume.hideVolume(),
          (0, o.onBeforeUnmount)(function () {
            c.Volume.showVolume();
          }));
        var m = function () {
            if (l.value) {
              (p.gesture && p.gesture.destroy(),
                (p.gesture = new (d().Manager)(l.value, {
                  domEvents: !0,
                  recognizers: [[d().Pan, { direction: d().DIRECTION_ALL }]],
                })));
              var e = new (d().Tap)({ event: "singletap" }),
                t = new (d().Tap)({ event: "doubletap", taps: 2 });
              (p.gesture.add([t, e]),
                t.recognizeWith(e),
                e.requireFailure(t),
                D(),
                T.Z.emit("init-control"));
            }
          },
          f = function () {
            return p.forwarding || p.rewinding;
          },
          v = function () {
            return (
              p.brightnessIncreasing ||
              p.brightnessDecreasing ||
              p.volumeIncreasing ||
              p.volumeDecreasing
            );
          },
          C = function () {
            ((p.forwarding = !1),
              (p.rewinding = !1),
              (p.brightnessIncreasing = !1),
              (p.brightnessDecreasing = !1),
              (p.volumeIncreasing = !1),
              (p.volumeDecreasing = !1));
          },
          y = (0, o.ref)(!1),
          A = function (e) {
            y.value = e;
          },
          w = (0, h.h3)(),
          b = w.startAutoClose,
          E = w.resetAutoClose;
        b();
        var S = function (e) {
            if (!l.value) return !1;
            if (e.target === l.value) return !0;
            if (l.value.contains(e.target)) {
              if (e.target.hasAttribute("data-control-click")) return !0;
              if (e.target.closest("[data-control-click]")) return !0;
            }
            return !1;
          },
          _ = function (e) {
            (S(e) &&
              (p.showPlaybackRate
                ? T.Z.emit("playback-slide-out")
                : p.activeSourcePanel
                  ? (p.activeSourcePanel = !1)
                  : p.videoTopicOpen
                    ? T.Z.emit("topic-slide-out")
                    : y.value
                      ? T.Z.emit("setting-slide-out")
                      : a.value
                        ? T.Z.emit("verbatim-slide-out")
                        : T.Z.emit("toggle-control-show-hide")),
              E());
          },
          I = function (e) {
            (E(), S(e) && T.Z.emit("toggle-play-pause"));
          },
          L = null,
          k = function (e) {
            ((L = e),
              E(),
              S(e) &&
                c.Brightness.getBrightness().then(function (e) {
                  p.brightness = e;
                }));
          },
          P = function (e, t, n) {
            if (!t) return 0;
            var o =
              null === n || void 0 === n ? void 0 : n.getBoundingClientRect();
            if (!(null === o || void 0 === o ? void 0 : o.width)) return 0;
            var i = e.center.x - t.center.x;
            return Math.floor((i / o.width) * p.duration);
          },
          B = function (e) {
            if ((!p.isFloat || p.inFullScreen) && (E(), S(e) && !v())) {
              var t = P(e, L, l.value);
              ((L = e), 0 !== t && T.Z.emit("MEDIA_SEEK", t));
            }
          },
          R = B,
          x = B,
          O = function (e) {
            (p.isFloat && !p.inFullScreen) ||
              (E(),
              S(e) &&
                !f() &&
                (e.center.x <= (1 * p.width) / 3 &&
                  ((p.brightnessIncreasing = !0),
                  (p.brightnessDecreasing = !1),
                  (p.brightness += U.Z.PAN_TO_ADJUST_BRIGHTNESS_VELOCITY),
                  p.brightness >= 1 && (p.brightness = 1),
                  c.Brightness.setBrightness(p.brightness)),
                e.center.x >= (2 * p.width) / 3 &&
                  ((p.volumeIncreasing = !0),
                  (p.volumeDecreasing = !1),
                  (p.volume += U.Z.PAN_TO_ADJUST_VOLUME_VELOCITY),
                  p.volume >= 1 && (p.volume = 1),
                  c.Volume.setVolume(p.volume))));
          },
          V = function (e) {
            (p.isFloat && !p.inFullScreen) ||
              (E(),
              S(e) &&
                !f() &&
                (e.center.x <= (1 * p.width) / 3 &&
                  ((p.brightnessIncreasing = !1),
                  (p.brightnessDecreasing = !0),
                  (p.brightness -= U.Z.PAN_TO_ADJUST_BRIGHTNESS_VELOCITY),
                  p.brightness <= 0 && (p.brightness = 0),
                  c.Brightness.setBrightness(p.brightness)),
                e.center.x >= (2 * p.width) / 3 &&
                  ((p.volumeIncreasing = !1),
                  (p.volumeDecreasing = !0),
                  (p.volume -= U.Z.PAN_TO_ADJUST_VOLUME_VELOCITY),
                  p.volume <= 0 && (p.volume = 0),
                  c.Volume.setVolume(p.volume))));
          },
          N = function (e) {
            var t;
            ((L = null),
              E(),
              S(e) &&
                (f() &&
                  (null === (t = u.player) ||
                    void 0 === t ||
                    t.currentTime(p.progress),
                  T.Z.emit("play")),
                C()));
          },
          D = function () {
            (p.gesture.on("singletap", _),
              p.gesture.on("doubletap", I),
              p.gesture.on("panstart", k),
              "LIVE" != p.type &&
                (p.gesture.on("panright", R), p.gesture.on("panleft", x)),
              "app" === ve.Z.targetPlatform &&
                (p.gesture.on("panup", O), p.gesture.on("pandown", V)),
              p.gesture.on("panend", N));
          },
          Z = function () {
            p.showControl = !p.showControl;
          },
          H = function () {
            (T.Z.on("init-gesture", m), T.Z.on("toggle-control-show-hide", Z));
          },
          F = function () {
            (T.Z.off("init-gesture", m),
              T.Z.off("toggle-control-show-hide", Z));
          };
        return (
          (0, o.onMounted)(H),
          (0, o.onBeforeUnmount)(F),
          function (e, i) {
            var a;
            return (
              (0, o.openBlock)(),
              (0, o.createElementBlock)(
                "div",
                {
                  class: (0, o.normalizeClass)(
                    ((a = {}),
                    (a[e.$style.control] = !0),
                    (a[e.$style.isFloat] = (0, o.unref)(p).isFloat),
                    a),
                  ),
                  ref_key: "controlRef",
                  ref: l,
                  id: "videoControl",
                },
                [
                  (0, o.withDirectives)(
                    (0, o.createVNode)(
                      M,
                      { title: (0, o.unref)(p).title, isFloat: e.isFloat },
                      {
                        "header-functions": (0, o.withCtx)(function () {
                          return [
                            (0, o.renderSlot)(e.$slots, "header-functions"),
                          ];
                        }),
                        _: 3,
                      },
                      8,
                      ["title", "isFloat"],
                    ),
                    [[o.vShow, (0, o.unref)(p).showControl]],
                  ),
                  (0, o.createElementVNode)(
                    "div",
                    { class: (0, o.normalizeClass)(e.$style.status) },
                    [
                      (0, o.createVNode)(Ge),
                      (0, o.createVNode)(Je),
                      (0, o.createVNode)($e),
                      (0, o.createVNode)(it),
                      (0, o.createVNode)(ct),
                    ],
                    2,
                  ),
                  (0, o.withDirectives)(
                    (0, o.createVNode)(
                      Ne,
                      { class: (0, o.normalizeClass)(e.$style.footer) },
                      null,
                      8,
                      ["class"],
                    ),
                    [[o.vShow, (0, o.unref)(p).showControl]],
                  ),
                  (0, o.unref)(t)
                    ? ((0, o.openBlock)(),
                      (0, o.createBlock)(
                        Kt,
                        {
                          key: 0,
                          class: (0, o.normalizeClass)(
                            e.$style.videoCaptionsBox,
                          ),
                        },
                        null,
                        8,
                        ["class"],
                      ))
                    : (0, o.createCommentVNode)("", !0),
                  (0, o.unref)(s)
                    ? (0, o.withDirectives)(
                        ((0, o.openBlock)(),
                        (0, o.createBlock)(ln, { key: 1 }, null, 512)),
                        [[o.vShow, (0, o.unref)(p).inFullScreen]],
                      )
                    : (0, o.createCommentVNode)("", !0),
                  (0, o.withDirectives)(
                    (0, o.createVNode)(
                      gt,
                      { class: (0, o.normalizeClass)(e.$style.controlTopmost) },
                      null,
                      8,
                      ["class"],
                    ),
                    [[o.vShow, (0, o.unref)(p).inFullScreen]],
                  ),
                  (0, o.withDirectives)(
                    (0, o.createVNode)(
                      Ut,
                      { class: (0, o.normalizeClass)(e.$style.controlTopmost) },
                      null,
                      8,
                      ["class"],
                    ),
                    [[o.vShow, (0, o.unref)(p).inFullScreen]],
                  ),
                  (0, o.withDirectives)(
                    (0, o.createVNode)(
                      qt,
                      {
                        class: (0, o.normalizeClass)(e.$style.controlTopmost),
                        onClick: A,
                      },
                      {
                        "download-function": (0, o.withCtx)(function () {
                          return [
                            (0, o.renderSlot)(e.$slots, "download-function"),
                          ];
                        }),
                        _: 3,
                      },
                      8,
                      ["class"],
                    ),
                    [[o.vShow, y.value]],
                  ),
                  (0, o.unref)(n)
                    ? ((0, o.openBlock)(),
                      (0, o.createBlock)(
                        kn,
                        {
                          key: 2,
                          class: (0, o.normalizeClass)(e.$style.controlTopmost),
                        },
                        null,
                        8,
                        ["class"],
                      ))
                    : (0, o.createCommentVNode)("", !0),
                  (0, o.unref)(r)
                    ? ((0, o.openBlock)(),
                      (0, o.createBlock)(
                        Mn,
                        {
                          key: 3,
                          class: (0, o.normalizeClass)(e.$style.controlTopmost),
                        },
                        null,
                        8,
                        ["class"],
                      ))
                    : (0, o.createCommentVNode)("", !0),
                ],
                2,
              )
            );
          }
        );
      },
    }),
    Nn = {
      markdownBody: "control__markdown-body-jDxM5",
      loginTypeLogo: "control__login-type-logo-QM2mH",
      loginTemplateTitle: "control__login-template-title-Kjg1u",
      loginTemplateLoginOptions: "control__login-template-loginOptions-gmQZt",
      modalOnTop: "control__modal-on-top-xW30m",
      modalWrapper: "control__modal-wrapper-vl3im",
      scIonModalIos: "control__sc-ion-modal-ios-Mnejs",
      modalFullscreen: "control__modal-fullscreen-Iu4NV",
      scIonModalIosH: "control__sc-ion-modal-ios-h-mVC63",
      control: "control__control-lhZnI",
      status: "control__status-XSjwn",
      footer: "control__footer-v25V9",
      videoCaptionsBox: "control__videoCaptionsBox-YdS2l",
      controlTopmost: "control__controlTopmost-hYLeP",
      isFloat: "control__isFloat-MfyB5",
    };
  const Dn = {};
  Dn["$style"] = Nn;
  const Zn = (0, A.Z)(Vn, [["__cssModules", Dn]]);
  var Un = Zn,
    Hn = n(56022),
    Fn = n(42132),
    Gn = n(3967),
    zn = n(32636),
    Qn = n(49955),
    jn = n(27486),
    qn = (0, o.defineComponent)({
      name: "VideoPlayerComponent",
      components: { Control: Un },
      props: {
        videoInfo: {
          type: Object,
          default: function () {
            return {
              allowSeek: !0,
              seekTo: 0,
              title: "",
              type: "MULTI_DEFINITION",
            };
          },
        },
        videoList: {
          type: Array,
          default: function () {
            return [{ channel: "", quality: "HD", src: "", type: "" }];
          },
        },
        unplayedSegments: {
          type: Array,
          default: function () {
            return [];
          },
        },
        activity: { type: Object, required: !1 },
        embedded: { type: Boolean, default: !1 },
        isFloat: { type: Boolean, default: !1 },
        interactiveMoments: {
          type: Array,
          default: function () {
            return [];
          },
        },
        previewSource: { type: String },
        allowReplay: { type: Boolean, default: !0 },
        allowSeekBack: { type: Boolean, default: !0 },
        allowPause: { type: Boolean, default: !0 },
        features: {
          type: Array,
          default: function () {
            return ["source", "speed", "fullscreen"];
          },
        },
      },
      emits: ["error", "play", "ended"],
      setup: function (e, t) {
        var n = this,
          i = t.emit,
          s = Hn.Z.get("Video Player Component"),
          u = (0, p.yj)(),
          d = (0, p.tv)(),
          m = (0, o.ref)(),
          f = (0, o.ref)(),
          g = (0, o.computed)(function () {
            return b.store.inFullScreen ? "#ionApp" : "#playerContainer";
          }),
          C = !1,
          y = (0, Gn.h4X)(m),
          A = (0, o.reactive)({ width: 0, height: 0 }),
          w = (0, h.Bf)(e.videoInfo, e.videoList, e.embedded, e.isFloat),
          b = w.videoStore,
          E = w.onSeek,
          S = w.onTapProgress,
          _ = w.destroyVideoStore,
          I = (0, ht.BF)(b),
          L = I.init,
          k = I.destroy,
          P = function () {
            (e.previewSource !== b.previewSource &&
              b.setPreviewSource(e.previewSource),
              e.allowReplay !== b.store.allowReplay &&
                (b.store.allowReplay = e.allowReplay),
              e.allowSeekBack !== b.store.allowSeekBack &&
                (b.store.allowSeekBack = e.allowSeekBack),
              e.allowPause !== b.store.allowPause &&
                (b.store.allowPause = e.allowPause),
              e.features !== b.store.features &&
                (b.store.features = e.features),
              l().isEqual(b.store.unplayedSegments, e.unplayedSegments) ||
                (b.store.unplayedSegments = e.unplayedSegments),
              l().isEqual(b.store.interactiveMoments, e.interactiveMoments) ||
                (b.store.interactiveMoments = e.interactiveMoments));
          };
        P();
        var B = function () {
            var e, t;
            ((C = !0),
              A.width ||
                (A.width =
                  (null === (e = m.value) || void 0 === e
                    ? void 0
                    : e.offsetWidth) || 0),
              A.height ||
                (A.height =
                  (null === (t = m.value) || void 0 === t
                    ? void 0
                    : t.offsetHeight) || 0),
              (b.store.width = A.width),
              (b.store.height = A.height),
              (b.store.aspectRatio = ""
                .concat(b.store.width, ":")
                .concat(b.store.height)),
              b.player.aspectRatio(b.store.aspectRatio),
              (b.store.duration = b.player.duration()),
              T.Z.emit(ae.rr, b.player));
          },
          R = function () {
            ((b.store.ready = !0),
              (b.store.loading = !1),
              e.activity &&
                Fn.ZP.trackMediaPlayer.init(
                  {
                    duration: b.store.duration,
                    seekTo: e.videoInfo.seekTo,
                    player: b.player,
                  },
                  e.activity,
                ));
          },
          x = function () {
            (T.Z.emit("init-gesture"),
              e.videoInfo.seekTo
                ? (b.player.one("timeupdate", R),
                  b.player.currentTime(e.videoInfo.seekTo))
                : R());
          },
          O = function () {
            b.store.inFullScreen && (b.store.inFullScreen = !1);
          },
          M = function () {
            return (0, r.mG)(n, void 0, void 0, function () {
              var e, t, n;
              return (0, r.Jh)(this, function (o) {
                switch (o.label) {
                  case 0:
                    return (
                      (e = b.player.error()),
                      e
                        ? (s.error(e),
                          b.store.embedded
                            ? (O(), i("error", e), [2])
                            : [
                                4,
                                v["default"].showMessage(
                                  ut["default"].global.t((0, fe.e)(e)),
                                ),
                              ])
                        : [2]
                    );
                  case 1:
                    return ((t = o.sent()), [4, t.onDidDismiss()]);
                  case 2:
                    return (
                      o.sent(),
                      (null === (n = b.store.extInfo) || void 0 === n
                        ? void 0
                        : n.scheduleID) || (O(), d.go(-1)),
                      [2]
                    );
                }
              });
            });
          },
          V = function () {
            return (0, r.mG)(n, void 0, void 0, function () {
              var e,
                t,
                n,
                a,
                l,
                c = this;
              return (0, r.Jh)(this, function (u) {
                return (
                  (!b.store.embedded && U.Z.AUTO_PLAY) || b.player.pause(),
                  L(),
                  T.Z.emit("init-video-handler"),
                  s.info("Video player is good to go!"),
                  null === (e = b.player) ||
                    void 0 === e ||
                    e.on("loadedmetadata", B),
                  null === (t = b.player) ||
                    void 0 === t ||
                    t.one("canplaythrough", x),
                  null === (n = b.player) || void 0 === n || n.one("error", M),
                  null === (a = b.player) ||
                    void 0 === a ||
                    a.on("play", function () {
                      i("play");
                    }),
                  null === (l = b.player) ||
                    void 0 === l ||
                    l.on("ended", function () {
                      i("ended");
                    }),
                  setTimeout(function () {
                    return (0, r.mG)(c, void 0, void 0, function () {
                      return (0, r.Jh)(this, function (e) {
                        switch (e.label) {
                          case 0:
                            return C ? [3, 2] : (B(), [4, (0, o.nextTick)()]);
                          case 1:
                            (e.sent(), (e.label = 2));
                          case 2:
                            return ((b.store.loading = !1), [2]);
                        }
                      });
                    });
                  }, 1e3),
                  [2]
                );
              });
            });
          },
          N = "wg-video-player",
          D = (0, o.useCssModule)(),
          Z = function () {
            var e,
              t = document.querySelector("#".concat(N));
            return (
              t ||
                ((t = document.createElement("video")),
                (t.id = N),
                t.setAttribute("webkit-playsinline", "true"),
                t.setAttribute("playsinline", "true"),
                t.setAttribute("x5-video-player-type", "h5"),
                t.classList.add("video-js", D.wgVideoPlayer),
                null === (e = m.value) || void 0 === e || e.appendChild(t)),
              t
            );
          },
          H = function () {
            var e = Z(),
              t = (0, a.Z)(
                e,
                {
                  autoplay: !0,
                  controls: !1,
                  controlBar: !1,
                  loop: U.Z.LOOP,
                  muted: U.Z.MUTED,
                  children: ["mediaLoader", "posterImage"],
                  sources: b.store.currentSource,
                  fluid: !0,
                  aspectRatio: b.store.aspectRatio,
                  preload: "LIVE" === b.store.type ? "none" : "auto",
                  html5: { vhs: { overrideNative: !0 } },
                },
                V,
              );
            b.setPlayer(t);
          },
          F = function () {
            (b.player && (b.player.pause(), b.player.dispose()),
              (b.store.ready = !1),
              (b.store.loading = !0),
              H());
          };
        ((0, o.onMounted)(function () {
          (F(), T.Z.on(ae.Ow, F));
        }),
          (0, o.onBeforeUnmount)(function () {
            (T.Z.off(ae.Ow, F),
              f.value && (f.value.$el.style.display = "none"),
              k(),
              _());
          }));
        var G = (0, o.computed)(function () {
            var e, t, n;
            return (
              !(null === (e = b.player) || void 0 === e
                ? void 0
                : e.isDisposed()) &&
              !!(null === (t = b.player) || void 0 === t
                ? void 0
                : t.player()) &&
              !!(null === (n = b.player) || void 0 === n ? void 0 : n.el())
            );
          }),
          z = function () {
            if (
              (s.log("initVideoFacePhotoCheck"), !zn.z.enableFaceCheckService())
            )
              return !1;
            if (u.name !== jn.q.OnlineVideo) return !1;
            var t = !1,
              n = b.player,
              i = function (e) {
                switch (e) {
                  case Qn.Y8.CHECK_VALID:
                    if (!G.value) break;
                    t && (n.play(), (t = !1));
                    break;
                  case Qn.Y8.CHECK_INVALID:
                    if (!G.value) break;
                    n.paused() ? (t = !1) : (n.pause(), (t = !0));
                    break;
                  case Qn.Y8.OPEN_BROWSER:
                    b.store.inFullScreen &&
                      c.Orientation.lockOrientation("PORTRAIT_PRIMARY");
                    break;
                  case Qn.Y8.CLOSE_BROWSER:
                    b.store.inFullScreen &&
                      c.Orientation.lockOrientation("LANDSCAPE_SECONDARY");
                    break;
                }
              };
            T.Z.on("faceCheckStatus", i);
            var r = (0, o.computed)(function () {
              return Math.ceil(
                Number((100 * b.store.progress) / b.store.duration),
              );
            });
            (0, o.watch)(
              function () {
                return r.value;
              },
              function () {
                G.value &&
                  !n.paused() &&
                  T.Z.emit("onlineVideoFacePhotoCheck", [e.activity, r.value]);
              },
            );
          };
        ((0, o.watchEffect)(function () {
          b.store.ready &&
            b.player &&
            (b.store.inFullScreen
              ? ((b.store.width = Math.round(y.width.value)),
                (b.store.height = Math.round(y.height.value)))
              : ((b.store.width = A.width), (b.store.height = A.height)),
            P());
        }),
          (0, o.onMounted)(function () {
            setTimeout(function () {
              z();
            }, 500);
          }),
          (0, o.onBeforeUnmount)(function () {
            (T.Z.off("faceCheckStatus"), Fn.ZP.trackMediaPlayer.destroy());
          }),
          e.embedded ||
            (0, p.iS)(function () {
              var e;
              null === (e = m.value) || void 0 === e || e.remove();
            }),
          (0, o.provide)("videoStore", b));
        var Q = (0, o.computed)(function () {
          return J.Z.isInExamSession && !b.store.playing;
        });
        return {
          teleportTarget: g,
          videoStore: b,
          playerContainerRef: m,
          controlRef: f,
          whenPlayerReady: V,
          onReady: R,
          onSeek: E,
          onTapProgress: S,
          showAntiFrame: Q,
        };
      },
    }),
    Jn = {
      markdownBody: "PlayerComponent__markdown-body-wSMHk",
      loginTypeLogo: "PlayerComponent__login-type-logo-WULrc",
      loginTemplateTitle: "PlayerComponent__login-template-title-q1wRq",
      loginTemplateLoginOptions:
        "PlayerComponent__login-template-loginOptions-ftOYT",
      modalOnTop: "PlayerComponent__modal-on-top-dCVsa",
      modalWrapper: "PlayerComponent__modal-wrapper-xjmii",
      scIonModalIos: "PlayerComponent__sc-ion-modal-ios-K6YLT",
      modalFullscreen: "PlayerComponent__modal-fullscreen-uTNE7",
      scIonModalIosH: "PlayerComponent__sc-ion-modal-ios-h-gQCUa",
      wrapper: "PlayerComponent__wrapper-ZNlvA",
      playerContainer: "PlayerComponent__playerContainer-PS1RV",
      antiFrame: "PlayerComponent__antiFrame-PJPLu",
      wgVideoPlayer: "PlayerComponent__wgVideoPlayer-uPKXR",
      controlPanel: "PlayerComponent__controlPanel-k3fRD",
      fullscreen: "PlayerComponent__fullscreen-oyIVg",
      isFloat: "PlayerComponent__isFloat-AKg0R",
    };
  const Wn = {};
  Wn["$style"] = Jn;
  const Xn = (0, A.Z)(qn, [
    ["render", i],
    ["__cssModules", Wn],
  ]);
  var Yn = Xn;
};
