// Source: decompiled/web-modules-acorn/chunk-common-14b21198.4bf44df8/36449.js
// Webpack module id: 36449
const __webpack_module_36449 = function (e, t, n) {
  n.d(t, {
    Qi: function () {
      return bt;
    },
    Tg: function () {
      return It;
    },
    yt: function () {
      return st;
    },
    M$: function () {
      return ct;
    },
    Kl: function () {
      return _t;
    },
    uh: function () {
      return kt;
    },
    _B: function () {
      return vt;
    },
    _j: function () {
      return ut;
    },
    DE: function () {
      return mt;
    },
    uY: function () {
      return Ct;
    },
    f_: function () {
      return ft;
    },
    H5: function () {
      return pt;
    },
    Wz: function () {
      return gt;
    },
    IN: function () {
      return dt;
    },
  });
  (n(21249),
    n(34553),
    n(57658),
    n(40561),
    n(92222),
    n(26699),
    n(32023),
    n(57327),
    n(41539),
    n(69826),
    n(78783),
    n(33948),
    n(74916),
    n(77601),
    n(9653),
    n(23123),
    n(15306));
  var o = n(70655),
    i = n(5877),
    l = n(77577),
    a = n(96486),
    r = n.n(a),
    s = n(12009),
    c = n(99580),
    u = n(4838),
    m = n(71329),
    d = n(15063),
    p = n(91248),
    v = n(23352);
  function f(e, t, n, o, i, a) {
    var r = (0, l.resolveComponent)("svg-icon"),
      s = (0, l.resolveComponent)("QuestionDetail"),
      c = (0, l.resolveComponent)("ReplyItem"),
      u = (0, l.resolveComponent)("ion-content"),
      m = (0, l.resolveComponent)("WriteComment"),
      d = (0, l.resolveComponent)("ion-toolbar"),
      p = (0, l.resolveComponent)("ion-footer"),
      v = (0, l.resolveComponent)("ion-page");
    return (
      (0, l.openBlock)(),
      (0, l.createBlock)(v, null, {
        default: (0, l.withCtx)(function () {
          return [
            (0, l.createElementVNode)(
              "div",
              { class: (0, l.normalizeClass)(e.$style.header) },
              [
                (0, l.createElementVNode)(
                  "div",
                  { class: (0, l.normalizeClass)(e.$style.cancel) },
                  null,
                  2,
                ),
                (0, l.createElementVNode)(
                  "div",
                  { class: (0, l.normalizeClass)(e.$style.title) },
                  [
                    (0, l.createElementVNode)(
                      "div",
                      { class: (0, l.normalizeClass)(e.$style.text) },
                      (0, l.toDisplayString)(e.$tc("comment.questionReply")),
                      3,
                    ),
                  ],
                  2,
                ),
                (0, l.createElementVNode)(
                  "div",
                  {
                    class: (0, l.normalizeClass)(e.$style.closeIcon),
                    onClick:
                      t[0] ||
                      (t[0] = function () {
                        for (var t = [], n = 0; n < arguments.length; n++)
                          t[n] = arguments[n];
                        return e.confirm && e.confirm.apply(e, t);
                      }),
                  },
                  [(0, l.createVNode)(r, { name: "close" })],
                  2,
                ),
              ],
              2,
            ),
            (0, l.createVNode)(u, null, {
              default: (0, l.withCtx)(function () {
                return [
                  (0, l.createElementVNode)(
                    "div",
                    { class: (0, l.normalizeClass)(e.$style.commentDetail) },
                    [
                      (0, l.createVNode)(
                        s,
                        {
                          showReplyList: !1,
                          activityId: e.activityId,
                          question: e.question,
                          showReplyIcon: !1,
                          showAttachmentFile: !1,
                        },
                        null,
                        8,
                        ["activityId", "question"],
                      ),
                    ],
                    2,
                  ),
                  (0, l.createElementVNode)(
                    "div",
                    { class: (0, l.normalizeClass)(e.$style.replyList) },
                    [
                      (0, l.createElementVNode)(
                        "div",
                        { class: (0, l.normalizeClass)(e.$style.replyTitle) },
                        [
                          (0, l.createElementVNode)(
                            "span",
                            null,
                            (0, l.toDisplayString)(
                              e.$tc("comment.allQuestionReplies"),
                            ),
                            1,
                          ),
                          (0, l.createElementVNode)(
                            "span",
                            {
                              class: (0, l.normalizeClass)(e.$style.replyCount),
                            },
                            "(" +
                              (0, l.toDisplayString)(e.question.replyCount) +
                              ")",
                            3,
                          ),
                        ],
                        2,
                      ),
                      ((0, l.openBlock)(!0),
                      (0, l.createElementBlock)(
                        l.Fragment,
                        null,
                        (0, l.renderList)(e.replyList, function (t) {
                          return (
                            (0, l.openBlock)(),
                            (0, l.createBlock)(
                              c,
                              {
                                key: t.id,
                                question: e.question,
                                reply: t,
                                activityId: e.activityId,
                              },
                              null,
                              8,
                              ["question", "reply", "activityId"],
                            )
                          );
                        }),
                        128,
                      )),
                    ],
                    2,
                  ),
                ];
              }),
              _: 1,
            }),
            e.isInstructor && e.materialQuestionFeaturePoint.canReply
              ? ((0, l.openBlock)(),
                (0, l.createBlock)(
                  p,
                  { key: 0 },
                  {
                    default: (0, l.withCtx)(function () {
                      return [
                        (0, l.createVNode)(
                          d,
                          { class: "toolbar" },
                          {
                            default: (0, l.withCtx)(function () {
                              return [
                                (0, l.createVNode)(
                                  m,
                                  {
                                    comment: e.question,
                                    canAnonymous: !1,
                                    type: "question",
                                  },
                                  null,
                                  8,
                                  ["comment"],
                                ),
                              ];
                            }),
                            _: 1,
                          },
                        ),
                      ];
                    }),
                    _: 1,
                  },
                ))
              : (0, l.createCommentVNode)("", !0),
          ];
        }),
        _: 1,
      })
    );
  }
  var y = n(88072);
  function g(e, t, n, o, i, a) {
    var r = (0, l.resolveComponent)("svg-icon"),
      s = (0, l.resolveComponent)("avatar"),
      c = (0, l.resolveComponent)("rich-content-viewer");
    return (
      (0, l.openBlock)(),
      (0, l.createElementBlock)(
        "div",
        { class: (0, l.normalizeClass)(e.$style.replyItem) },
        [
          (0, l.createElementVNode)(
            "div",
            { class: (0, l.normalizeClass)(e.$style.avatar) },
            [
              e.reply.anonymous
                ? ((0, l.openBlock)(),
                  (0, l.createBlock)(
                    r,
                    {
                      key: 0,
                      name: "anonymous-head",
                      class: (0, l.normalizeClass)(e.$style.anonymousHead),
                    },
                    null,
                    8,
                    ["class"],
                  ))
                : ((0, l.openBlock)(),
                  (0, l.createBlock)(
                    s,
                    {
                      key: 1,
                      url: e.reply.createdBy.avatarUrl,
                      userName: e.reply.createdBy.name,
                      user: e.reply.createdBy,
                    },
                    null,
                    8,
                    ["url", "userName", "user"],
                  )),
            ],
            2,
          ),
          (0, l.createElementVNode)(
            "div",
            { class: (0, l.normalizeClass)(e.$style.replyDetail) },
            [
              (0, l.createElementVNode)(
                "div",
                { class: (0, l.normalizeClass)(e.$style.replyHeader) },
                [
                  (0, l.createElementVNode)(
                    "div",
                    { class: (0, l.normalizeClass)(e.$style.replyHeaderLeft) },
                    [
                      (0, l.createElementVNode)(
                        "span",
                        { class: (0, l.normalizeClass)(e.$style.name) },
                        (0, l.toDisplayString)(
                          e.reply.anonymous
                            ? e.$tc("comment.anonymous")
                            : e.reply.createdBy.name,
                        ),
                        3,
                      ),
                    ],
                    2,
                  ),
                  e.canClickMoreAction(e.reply)
                    ? ((0, l.openBlock)(),
                      (0, l.createElementBlock)(
                        "div",
                        {
                          key: 0,
                          onClick:
                            t[0] ||
                            (t[0] = function (t) {
                              return e.replyTriggerMoreAction(
                                e.question,
                                e.reply,
                              );
                            }),
                          "data-testid": "moreActionsBtn",
                          class: (0, l.normalizeClass)(e.$style.moreHandler),
                        },
                        [
                          (0, l.createVNode)(
                            r,
                            {
                              name: "more",
                              class: (0, l.normalizeClass)(e.$style.more),
                            },
                            null,
                            8,
                            ["class"],
                          ),
                        ],
                        2,
                      ))
                    : (0, l.createCommentVNode)("", !0),
                ],
                2,
              ),
              (0, l.createElementVNode)(
                "div",
                { class: (0, l.normalizeClass)(e.$style.replyContent) },
                [
                  (0, l.createVNode)(
                    c,
                    {
                      "data-testid": "topicListContent",
                      class: (0, l.normalizeClass)(e.$style.content),
                      content: e.reply.content,
                      mode: "alt",
                    },
                    null,
                    8,
                    ["class", "content"],
                  ),
                ],
                2,
              ),
              (0, l.createElementVNode)(
                "div",
                { class: (0, l.normalizeClass)(e.$style.replyFooter) },
                [
                  (0, l.createElementVNode)(
                    "span",
                    { class: (0, l.normalizeClass)(e.$style.time) },
                    (0, l.toDisplayString)(
                      e.$filter.dateFormat(e.reply.createdAt),
                    ),
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
      )
    );
  }
  var _ = n(58086),
    C = n(77973),
    h = (0, l.defineComponent)({
      components: { Avatar: _.Z, RichContentViewer: C["default"] },
      props: {
        question: { type: Object, required: !0 },
        reply: { type: Object, required: !0 },
        activityId: { type: Number, required: !0 },
      },
      setup: function () {
        var e = pt(),
          t = e.replyTriggerMoreAction,
          n = e.canClickMoreAction;
        return { canClickMoreAction: n, replyTriggerMoreAction: t };
      },
    }),
    k = {
      replyContent: "replyItem__replyContent-rqhS0",
      title: "replyItem__title-_wqv5",
      replyHeader: "replyItem__replyHeader-_tpIj",
      name: "replyItem__name-gyVKF",
      markdownBody: "replyItem__markdown-body-qTW5F",
      loginTypeLogo: "replyItem__login-type-logo-vGS3F",
      loginTemplateTitle: "replyItem__login-template-title-qMXPX",
      loginTemplateLoginOptions: "replyItem__login-template-loginOptions-R2mmT",
      modalOnTop: "replyItem__modal-on-top-UBi0_",
      modalWrapper: "replyItem__modal-wrapper-LRftL",
      scIonModalIos: "replyItem__sc-ion-modal-ios-YSJUa",
      modalFullscreen: "replyItem__modal-fullscreen-Y6HxH",
      scIonModalIosH: "replyItem__sc-ion-modal-ios-h-_D3WL",
      replyItem: "replyItem__replyItem-tcHyi",
      avatar: "replyItem__avatar-WT_we",
      anonymousHead: "replyItem__anonymousHead-dOlTq",
      replyDetail: "replyItem__replyDetail-r_HiO",
      replyHeaderLeft: "replyItem__replyHeaderLeft-N5Zfs",
      moreHandler: "replyItem__more-handler-izHos",
      more: "replyItem__more-jE6S4",
      content: "replyItem__content-CJ6QL",
      replyFooter: "replyItem__replyFooter-FqLLZ",
      time: "replyItem__time-jnkvL",
    },
    I = n(46021);
  const b = {};
  b["$style"] = k;
  const B = (0, I.Z)(h, [
    ["render", g],
    ["__cssModules", b],
  ]);
  var w = B,
    T = n(36852),
    E = n(25682),
    N = (0, l.defineComponent)({
      props: {
        showBack: { type: Boolean, required: !1, default: !1 },
        question: { type: Object, required: !0 },
        activityId: { type: Number, required: !0 },
        close: { type: Function, required: !0 },
      },
      components: { QuestionDetail: y.Z, ReplyItem: w, WriteComment: T.Z },
      setup: function (e) {
        var t = (0, E.xt)().isInstructor,
          n = _t().activityCommentsInfo,
          o = (0, l.toRef)(n, "questionReplies"),
          i = (0, l.computed)(function () {
            var t = o.value["".concat(e.question.id)];
            return t || [];
          }),
          a = function () {
            e.close();
          },
          r = (0, l.computed)(function () {
            var t;
            return !(null === (t = n.questionPageInfo.comments) || void 0 === t
              ? void 0
              : t.find(function (t) {
                  return t.id === e.question.id;
                }));
          });
        return (
          (0, l.watch)(r, function () {
            r.value && a();
          }),
          {
            isInstructor: t,
            replyList: i,
            confirm: a,
            materialQuestionFeaturePoint: ct,
          }
        );
      },
    }),
    M = {
      markdownBody: "reply__markdown-body-m8eO7",
      loginTypeLogo: "reply__login-type-logo-ioJRY",
      loginTemplateTitle: "reply__login-template-title-drOc3",
      loginTemplateLoginOptions: "reply__login-template-loginOptions-zD4E9",
      modalOnTop: "reply__modal-on-top-K970A",
      modalWrapper: "reply__modal-wrapper-SbdXy",
      scIonModalIos: "reply__sc-ion-modal-ios-oEBjD",
      modalFullscreen: "reply__modal-fullscreen-muG4H",
      scIonModalIosH: "reply__sc-ion-modal-ios-h-K0Nq0",
      header: "reply__header-vpL_t",
      title: "reply__title-QVIhW",
      text: "reply__text-qP7OG",
      closeIcon: "reply__closeIcon-JWAi3",
      commentDetail: "reply__commentDetail-MpBdv",
      replyTitle: "reply__replyTitle-zrGeU",
      replyCount: "reply__replyCount-w74rx",
      replyList: "reply__replyList-fLRo5",
      replyItem: "reply__replyItem-fxG43",
    };
  const V = {};
  V["$style"] = M;
  const S = (0, I.Z)(N, [
    ["render", f],
    ["__cssModules", V],
  ]);
  var $ = S;
  function A(e, t, n, o, i, a) {
    var r = (0, l.resolveComponent)("svg-icon"),
      s = (0, l.resolveComponent)("pull-refresher"),
      c = (0, l.resolveComponent)("avatar"),
      u = (0, l.resolveComponent)("EnrollmentRoleTag"),
      m = (0, l.resolveComponent)("rich-content-viewer"),
      d = (0, l.resolveComponent)("ReplyItem"),
      p = (0, l.resolveComponent)("ion-infinite-scroll-content"),
      v = (0, l.resolveComponent)("ion-infinite-scroll"),
      f = (0, l.resolveComponent)("ion-content"),
      y = (0, l.resolveComponent)("WriteComment"),
      g = (0, l.resolveComponent)("ion-toolbar"),
      _ = (0, l.resolveComponent)("ion-footer"),
      C = (0, l.resolveComponent)("ion-page");
    return (
      (0, l.openBlock)(),
      (0, l.createBlock)(C, null, {
        default: (0, l.withCtx)(function () {
          return [
            (0, l.createElementVNode)(
              "div",
              { class: (0, l.normalizeClass)(e.$style.header) },
              [
                (0, l.createElementVNode)(
                  "div",
                  { class: (0, l.normalizeClass)(e.$style.cancel) },
                  null,
                  2,
                ),
                (0, l.createElementVNode)(
                  "div",
                  { class: (0, l.normalizeClass)(e.$style.title) },
                  (0, l.toDisplayString)(e.title),
                  3,
                ),
                (0, l.createElementVNode)(
                  "div",
                  {
                    class: (0, l.normalizeClass)(e.$style.confirm),
                    onClick:
                      t[0] ||
                      (t[0] = function () {
                        for (var t = [], n = 0; n < arguments.length; n++)
                          t[n] = arguments[n];
                        return e.confirm && e.confirm.apply(e, t);
                      }),
                  },
                  [(0, l.createVNode)(r, { name: "dialog-close-icon" })],
                  2,
                ),
              ],
              2,
            ),
            (0, l.createVNode)(f, null, {
              default: (0, l.withCtx)(function () {
                var n;
                return [
                  (0, l.createVNode)(
                    s,
                    {
                      slot: "fixed",
                      immediate: !0,
                      onRefresh: e.refreshData,
                      ref: "refresher",
                      refreshKey: "replyList",
                    },
                    null,
                    8,
                    ["onRefresh"],
                  ),
                  (0, l.createElementVNode)(
                    "div",
                    { class: (0, l.normalizeClass)(e.$style.commentDetail) },
                    [
                      (0, l.createElementVNode)(
                        "div",
                        { class: (0, l.normalizeClass)(e.$style.itemHeader) },
                        [
                          (0, l.createElementVNode)(
                            "div",
                            {
                              class: (0, l.normalizeClass)(
                                e.$style.itemHeaderLeft,
                              ),
                            },
                            [
                              e.comment.anonymous
                                ? ((0, l.openBlock)(),
                                  (0, l.createBlock)(
                                    r,
                                    {
                                      key: 0,
                                      name: "anonymous-head",
                                      class: (0, l.normalizeClass)(
                                        e.$style.anonymousHead,
                                      ),
                                    },
                                    null,
                                    8,
                                    ["class"],
                                  ))
                                : ((0, l.openBlock)(),
                                  (0, l.createBlock)(
                                    c,
                                    {
                                      key: 1,
                                      url: e.comment.createdBy.avatarUrl,
                                      userName: e.comment.createdBy.name,
                                      user: e.comment.createdBy,
                                    },
                                    null,
                                    8,
                                    ["url", "userName", "user"],
                                  )),
                              (0, l.createElementVNode)(
                                "span",
                                {
                                  class: (0, l.normalizeClass)([
                                    e.$style.name,
                                    e.$style.ml8,
                                  ]),
                                },
                                (0, l.toDisplayString)(
                                  e.comment.anonymous
                                    ? e.$tc("comment.anonymous")
                                    : e.comment.createdBy.name,
                                ),
                                3,
                              ),
                              e.showTag
                                ? ((0, l.openBlock)(),
                                  (0, l.createBlock)(
                                    u,
                                    {
                                      key: 2,
                                      class: (0, l.normalizeClass)(
                                        e.$style.ml8,
                                      ),
                                      "data-testid": "enrollmentRoleTag",
                                      "enrollment-role": e.commentRole,
                                      "role-aliases":
                                        e.comment.createdBy.aliases,
                                    },
                                    null,
                                    8,
                                    [
                                      "class",
                                      "enrollment-role",
                                      "role-aliases",
                                    ],
                                  ))
                                : (0, l.createCommentVNode)("", !0),
                              e.showUserNo
                                ? ((0, l.openBlock)(),
                                  (0, l.createElementBlock)(
                                    "span",
                                    {
                                      key: 3,
                                      class: (0, l.normalizeClass)(
                                        e.$style.name,
                                      ),
                                    },
                                    " （" +
                                      (0, l.toDisplayString)(
                                        e.comment.createdBy.userNo,
                                      ) +
                                      "） ",
                                    3,
                                  ))
                                : (0, l.createCommentVNode)("", !0),
                            ],
                            2,
                          ),
                          e.canClickAction(e.comment)
                            ? ((0, l.openBlock)(),
                              (0, l.createElementBlock)(
                                "div",
                                {
                                  key: 0,
                                  onClick:
                                    t[1] ||
                                    (t[1] = function (t) {
                                      return e.triggerMoreAction(
                                        e.comment,
                                        e.index,
                                      );
                                    }),
                                  "data-testid": "moreActionsBtn",
                                  class: (0, l.normalizeClass)(
                                    e.$style.moreHandler,
                                  ),
                                },
                                [
                                  (0, l.createVNode)(
                                    r,
                                    {
                                      name: "more",
                                      class: (0, l.normalizeClass)(
                                        e.$style.more,
                                      ),
                                    },
                                    null,
                                    8,
                                    ["class"],
                                  ),
                                ],
                                2,
                              ))
                            : (0, l.createCommentVNode)("", !0),
                        ],
                        2,
                      ),
                      (0, l.createElementVNode)(
                        "div",
                        { class: (0, l.normalizeClass)(e.$style.itemContent) },
                        [
                          (0, l.createVNode)(
                            m,
                            {
                              "data-testid": "topicListContent",
                              class: (0, l.normalizeClass)(e.$style.content),
                              content: e.comment.content,
                              mode: "alt",
                            },
                            null,
                            8,
                            ["class", "content"],
                          ),
                        ],
                        2,
                      ),
                      (0, l.createElementVNode)(
                        "div",
                        { class: (0, l.normalizeClass)(e.$style.itemFooter) },
                        [
                          (0, l.createElementVNode)(
                            "span",
                            { class: (0, l.normalizeClass)(e.$style.time) },
                            (0, l.toDisplayString)(
                              e.$filter.dateFormat(e.comment.createdAt),
                            ),
                            3,
                          ),
                          (0, l.createElementVNode)(
                            "div",
                            {
                              onClick:
                                t[2] ||
                                (t[2] = function (t) {
                                  return e.replyHandleClick(e.comment);
                                }),
                              "data-clickoutside-ignore": "1",
                              "data-testid": "topicListComment",
                              class: (0, l.normalizeClass)(
                                e.$style.commentHandler,
                              ),
                            },
                            [
                              (0, l.createVNode)(r, { name: "comment" }),
                              (0, l.createElementVNode)(
                                "strong",
                                null,
                                (0, l.toDisplayString)(e.comment.replyCount),
                                1,
                              ),
                            ],
                            2,
                          ),
                          (0, l.createElementVNode)(
                            "div",
                            {
                              onClick:
                                t[3] ||
                                (t[3] = function (t) {
                                  return e.likeOrUnlikeComment(
                                    e.comment,
                                    e.isLike,
                                  );
                                }),
                              "data-testid": "topicListLike",
                              class: (0, l.normalizeClass)(
                                ((n = {}),
                                (n[e.$style.likeHandler] = !0),
                                (n[e.$style.currentUserLiked] = e.isLike),
                                n),
                              ),
                            },
                            [
                              e.isLike
                                ? ((0, l.openBlock)(),
                                  (0, l.createBlock)(r, {
                                    key: 1,
                                    name: "liked",
                                  }))
                                : ((0, l.openBlock)(),
                                  (0, l.createBlock)(r, {
                                    key: 0,
                                    name: "like",
                                  })),
                              (0, l.createElementVNode)(
                                "strong",
                                null,
                                (0, l.toDisplayString)(e.comment.approvalCount),
                                1,
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
                  (0, l.createElementVNode)(
                    "div",
                    { class: (0, l.normalizeClass)(e.$style.repliesCount) },
                    [
                      (0, l.createTextVNode)(
                        (0, l.toDisplayString)(e.$tc("comment.allReply")) + " ",
                        1,
                      ),
                      (0, l.createElementVNode)(
                        "span",
                        null,
                        "(" +
                          (0, l.toDisplayString)(e.comment.replyCount) +
                          ")",
                        1,
                      ),
                    ],
                    2,
                  ),
                  e.comment.replyCount && e.replyInfo
                    ? ((0, l.openBlock)(),
                      (0, l.createElementBlock)(
                        l.Fragment,
                        { key: 0 },
                        [
                          (0, l.createElementVNode)(
                            "div",
                            {
                              class: (0, l.normalizeClass)(
                                e.$style.commentRepliesList,
                              ),
                            },
                            [
                              ((0, l.openBlock)(!0),
                              (0, l.createElementBlock)(
                                l.Fragment,
                                null,
                                (0, l.renderList)(
                                  e.replyInfo.replies,
                                  function (t) {
                                    return (
                                      (0, l.openBlock)(),
                                      (0, l.createBlock)(
                                        d,
                                        {
                                          key: t.id,
                                          comment: e.comment,
                                          reply: t,
                                          activityId: e.activityId,
                                        },
                                        null,
                                        8,
                                        ["comment", "reply", "activityId"],
                                      )
                                    );
                                  },
                                ),
                                128,
                              )),
                            ],
                            2,
                          ),
                          (0, l.createVNode)(
                            v,
                            {
                              class: "ion-infinite-scroll",
                              disabled: !e.hasMoreData,
                              onIonInfinite: e.loadMoreData,
                            },
                            {
                              default: (0, l.withCtx)(function () {
                                return [(0, l.createVNode)(p)];
                              }),
                              _: 1,
                            },
                            8,
                            ["disabled", "onIonInfinite"],
                          ),
                        ],
                        64,
                      ))
                    : (0, l.createCommentVNode)("", !0),
                ];
              }),
              _: 1,
            }),
            e.materialForumFeaturePoint.canReply
              ? ((0, l.openBlock)(),
                (0, l.createBlock)(
                  _,
                  { key: 0 },
                  {
                    default: (0, l.withCtx)(function () {
                      return [
                        (0, l.createVNode)(
                          g,
                          { class: "toolbar" },
                          {
                            default: (0, l.withCtx)(function () {
                              return [
                                (0, l.createVNode)(
                                  y,
                                  { comment: e.comment },
                                  null,
                                  8,
                                  ["comment"],
                                ),
                              ];
                            }),
                            _: 1,
                          },
                        ),
                      ];
                    }),
                    _: 1,
                  },
                ))
              : (0, l.createCommentVNode)("", !0),
          ];
        }),
        _: 1,
      })
    );
  }
  var P = n(48235);
  function L(e, t, n, o, i, a) {
    var r,
      s = (0, l.resolveComponent)("svg-icon"),
      c = (0, l.resolveComponent)("avatar"),
      u = (0, l.resolveComponent)("EnrollmentRoleTag"),
      m = (0, l.resolveComponent)("rich-content-viewer");
    return (
      (0, l.openBlock)(),
      (0, l.createElementBlock)(
        "div",
        { class: (0, l.normalizeClass)(e.$style.repliesItem) },
        [
          (0, l.createElementVNode)(
            "div",
            { class: (0, l.normalizeClass)(e.$style.avatar) },
            [
              e.reply.anonymous
                ? ((0, l.openBlock)(),
                  (0, l.createBlock)(
                    s,
                    {
                      key: 0,
                      name: "anonymous-head",
                      class: (0, l.normalizeClass)(e.$style.anonymousHead),
                    },
                    null,
                    8,
                    ["class"],
                  ))
                : ((0, l.openBlock)(),
                  (0, l.createBlock)(
                    c,
                    {
                      key: 1,
                      url: e.reply.createdBy.avatarUrl,
                      userName: e.reply.createdBy.name,
                      user: e.reply.createdBy,
                    },
                    null,
                    8,
                    ["url", "userName", "user"],
                  )),
            ],
            2,
          ),
          (0, l.createElementVNode)(
            "div",
            { class: (0, l.normalizeClass)(e.$style.commentDetail) },
            [
              (0, l.createElementVNode)(
                "div",
                { class: (0, l.normalizeClass)(e.$style.itemHeader) },
                [
                  (0, l.createElementVNode)(
                    "div",
                    { class: (0, l.normalizeClass)(e.$style.itemHeaderLeft) },
                    [
                      (0, l.createElementVNode)(
                        "span",
                        { class: (0, l.normalizeClass)(e.$style.name) },
                        (0, l.toDisplayString)(
                          e.reply.anonymous
                            ? e.$tc("comment.anonymous")
                            : e.reply.createdBy.name,
                        ),
                        3,
                      ),
                      e.showReplyUserNo
                        ? ((0, l.openBlock)(),
                          (0, l.createElementBlock)(
                            "span",
                            {
                              key: 0,
                              class: (0, l.normalizeClass)(e.$style.name),
                            },
                            " （" +
                              (0, l.toDisplayString)(e.reply.createdBy.userNo) +
                              "） ",
                            3,
                          ))
                        : e.showTag
                          ? ((0, l.openBlock)(),
                            (0, l.createBlock)(
                              u,
                              {
                                key: 1,
                                "data-testid": "enrollmentRoleTag",
                                "enrollment-role": e.replyRole,
                                "role-aliases": e.reply.createdBy.aliases,
                              },
                              null,
                              8,
                              ["enrollment-role", "role-aliases"],
                            ))
                          : (0, l.createCommentVNode)("", !0),
                    ],
                    2,
                  ),
                  e.canClickAction(e.reply)
                    ? ((0, l.openBlock)(),
                      (0, l.createElementBlock)(
                        "div",
                        {
                          key: 0,
                          onClick:
                            t[0] ||
                            (t[0] = function (t) {
                              return e.replyTriggerMoreAction(
                                e.comment,
                                e.reply,
                              );
                            }),
                          "data-testid": "moreActionsBtn",
                          class: (0, l.normalizeClass)(e.$style.moreHandler),
                        },
                        [
                          (0, l.createVNode)(
                            s,
                            {
                              name: "more",
                              class: (0, l.normalizeClass)(e.$style.more),
                            },
                            null,
                            8,
                            ["class"],
                          ),
                        ],
                        2,
                      ))
                    : (0, l.createCommentVNode)("", !0),
                ],
                2,
              ),
              (0, l.createElementVNode)(
                "div",
                { class: (0, l.normalizeClass)(e.$style.itemContent) },
                [
                  (0, l.createVNode)(
                    m,
                    {
                      "data-testid": "topicListContent",
                      class: (0, l.normalizeClass)(e.$style.content),
                      content: e.reply.content,
                      mode: "alt",
                    },
                    null,
                    8,
                    ["class", "content"],
                  ),
                ],
                2,
              ),
              e.reply.parent
                ? ((0, l.openBlock)(),
                  (0, l.createElementBlock)(
                    "div",
                    {
                      key: 0,
                      class: (0, l.normalizeClass)(e.$style.replyContent),
                    },
                    [
                      (0, l.createElementVNode)(
                        "div",
                        { class: (0, l.normalizeClass)(e.$style.replyItem) },
                        [
                          (0, l.createElementVNode)(
                            "span",
                            { class: (0, l.normalizeClass)(e.$style.name) },
                            (0, l.toDisplayString)(
                              e.reply.parent.anonymous
                                ? e.$tc("comment.anonymous")
                                : e.reply.parent.created_by.name,
                            ) + "： ",
                            3,
                          ),
                          (0, l.createElementVNode)(
                            "span",
                            { class: (0, l.normalizeClass)(e.$style.reply) },
                            (0, l.toDisplayString)(e.reply.parent.content),
                            3,
                          ),
                        ],
                        2,
                      ),
                    ],
                    2,
                  ))
                : (0, l.createCommentVNode)("", !0),
              (0, l.createElementVNode)(
                "div",
                { class: (0, l.normalizeClass)(e.$style.itemFooter) },
                [
                  (0, l.createElementVNode)(
                    "span",
                    { class: (0, l.normalizeClass)(e.$style.time) },
                    (0, l.toDisplayString)(
                      e.$filter.dateFormat(e.reply.createdAt),
                    ),
                    3,
                  ),
                  (0, l.createElementVNode)(
                    "div",
                    {
                      onClick:
                        t[1] ||
                        (t[1] = function (t) {
                          return e.replyHandleClick(e.reply);
                        }),
                      "data-clickoutside-ignore": "1",
                      "data-testid": "topicListComment",
                      class: (0, l.normalizeClass)(e.$style.commentHandler),
                    },
                    [
                      (0, l.createVNode)(s, { name: "comment" }),
                      (0, l.createElementVNode)(
                        "strong",
                        null,
                        (0, l.toDisplayString)(e.reply.replyCount),
                        1,
                      ),
                    ],
                    2,
                  ),
                  (0, l.createElementVNode)(
                    "div",
                    {
                      onClick:
                        t[2] ||
                        (t[2] = function (t) {
                          return e.likeOrUnlikeComment(e.reply, e.isLike);
                        }),
                      "data-testid": "topicListLike",
                      class: (0, l.normalizeClass)(
                        ((r = {}),
                        (r[e.$style.likeHandler] = !0),
                        (r[e.$style.currentUserLiked] = e.isLike),
                        r),
                      ),
                    },
                    [
                      e.isLike
                        ? ((0, l.openBlock)(),
                          (0, l.createBlock)(s, { key: 1, name: "liked" }))
                        : ((0, l.openBlock)(),
                          (0, l.createBlock)(s, { key: 0, name: "like" })),
                      (0, l.createElementVNode)(
                        "strong",
                        null,
                        (0, l.toDisplayString)(e.reply.approvalCount),
                        1,
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
        ],
        2,
      )
    );
  }
  var z = (0, l.defineComponent)({
      components: {
        Avatar: _.Z,
        EnrollmentRoleTag: P.Z,
        RichContentViewer: C["default"],
      },
      props: {
        comment: { type: Object, required: !0 },
        reply: { type: Object, required: !0 },
        activityId: { type: Number, required: !0 },
      },
      setup: function (e) {
        var t = (0, c.y)(),
          n = _t().activityCommentsInfo,
          o = ut(),
          i = o.canClickAction,
          a = o.likeOrUnlikeComment,
          r = o.replyTriggerMoreAction,
          s = dt(e.comment, "comment").replyHandleClick,
          u = (0, l.computed)(function () {
            var n, o;
            return t.getEnrollmentRole(
              null ===
                (o =
                  null === (n = e.reply) || void 0 === n
                    ? void 0
                    : n.createdBy) || void 0 === o
                ? void 0
                : o.courseRoles,
            );
          }),
          m = (0, l.computed)(function () {
            return !e.reply.anonymous && t.isCourseInstructorViewpoint(u.value);
          }),
          d = (0, l.computed)(function () {
            return !e.reply.anonymous && t.isCourseStudentViewpoint(u.value);
          }),
          p = (0, l.computed)(function () {
            var t;
            return n.commentOperateList.includes(
              null === (t = e.reply) || void 0 === t ? void 0 : t.id,
            );
          });
        return {
          canClickAction: i,
          replyTriggerMoreAction: r,
          replyRole: u,
          showTag: m,
          isLike: p,
          showReplyUserNo: d,
          likeOrUnlikeComment: a,
          replyHandleClick: s,
        };
      },
    }),
    R = {
      repliesItem: "replyItem__repliesItem-w5pmk",
      commentDetail: "replyItem__commentDetail-HRvpS",
      itemContent: "replyItem__itemContent-xWtV3",
      title: "replyItem__title-j3Gve",
      itemHeader: "replyItem__itemHeader-O2qV4",
      itemHeaderLeft: "replyItem__itemHeaderLeft-f18IZ",
      name: "replyItem__name-XwVtY",
      markdownBody: "replyItem__markdown-body-D6FsO",
      loginTypeLogo: "replyItem__login-type-logo-tJq0b",
      loginTemplateTitle: "replyItem__login-template-title-EqC2P",
      loginTemplateLoginOptions: "replyItem__login-template-loginOptions-dGM8G",
      modalOnTop: "replyItem__modal-on-top-aqMpp",
      modalWrapper: "replyItem__modal-wrapper-do9mX",
      scIonModalIos: "replyItem__sc-ion-modal-ios-bkw_1",
      modalFullscreen: "replyItem__modal-fullscreen-WZ6lh",
      scIonModalIosH: "replyItem__sc-ion-modal-ios-h-lJcE9",
      avatar: "replyItem__avatar-ktfZ8",
      anonymousHead: "replyItem__anonymousHead-w783z",
      tag: "replyItem__tag-bFFwH",
      top: "replyItem__top-M_EAY",
      moreHandler: "replyItem__more-handler-cHVS7",
      more: "replyItem__more-Dfmtc",
      content: "replyItem__content-zYnDS",
      replyContent: "replyItem__replyContent-srU3s",
      replyItem: "replyItem__replyItem-sY6IS",
      reply: "replyItem__reply-Mr0QM",
      replyTotal: "replyItem__replyTotal-xHK21",
      itemFooter: "replyItem__itemFooter-_YZhm",
      time: "replyItem__time-l3ie4",
      commentHandler: "replyItem__commentHandler-ECD5g",
      likeHandler: "replyItem__likeHandler-pkFZ3",
      currentUserLiked: "replyItem__current-user-liked-Fy_TN",
    };
  const x = {};
  x["$style"] = R;
  const D = (0, I.Z)(z, [
    ["render", L],
    ["__cssModules", x],
  ]);
  var O = D,
    F = (0, l.defineComponent)({
      components: {
        Avatar: _.Z,
        EnrollmentRoleTag: P.Z,
        RichContentViewer: C["default"],
        WriteComment: T.Z,
        ReplyItem: O,
      },
      props: {
        title: { type: String, default: "title" },
        comment: { type: Object, required: !0 },
        activityId: { type: Number, required: !0 },
        index: { type: Number, required: !0 },
        close: { type: Function, required: !0 },
      },
      setup: function (e) {
        var t = this,
          n = _t().activityCommentsInfo,
          i = ut(),
          a = i.triggerMoreAction,
          r = i.likeOrUnlikeComment,
          s = i.getCommentsRepliesById,
          c = i.canClickAction,
          u = mt(e.comment),
          m = u.commentRole,
          d = u.showTag,
          p = u.showUserNo,
          v = u.replyInfo,
          f = u.isLike,
          y = dt(e.comment, "comment").replyHandleClick,
          g = function () {
            e.close();
          },
          _ = (0, l.computed)(function () {
            var t;
            return !(null === (t = n.forumPageInfo.comments) || void 0 === t
              ? void 0
              : t.find(function (t) {
                  return t.id === e.comment.id;
                }));
          });
        (0, l.watch)(_, function (e) {
          e && g();
        });
        var C = function (n) {
            return (0, o.mG)(t, void 0, void 0, function () {
              return (0, o.Jh)(this, function (t) {
                switch (t.label) {
                  case 0:
                    return (t.trys.push([0, , 2, 3]), [4, s(e.comment.id, !0)]);
                  case 1:
                    return (t.sent(), [3, 3]);
                  case 2:
                    return (
                      null === n || void 0 === n || n.subscriber.next(),
                      [7]
                    );
                  case 3:
                    return [2];
                }
              });
            });
          },
          h = (0, l.computed)(function () {
            return v.value.page > 0 && v.value.page < v.value.pages;
          }),
          k = function (n) {
            return (0, o.mG)(t, void 0, void 0, function () {
              return (0, o.Jh)(this, function (t) {
                switch (t.label) {
                  case 0:
                    return (t.trys.push([0, , 2, 4]), [4, s(e.comment.id)]);
                  case 1:
                    return (t.sent(), [3, 4]);
                  case 2:
                    return [4, n.target.complete()];
                  case 3:
                    return (t.sent(), [7]);
                  case 4:
                    return [2];
                }
              });
            });
          };
        return {
          confirm: g,
          activityCommentsInfo: n,
          canClickAction: c,
          triggerMoreAction: a,
          replyInfo: v,
          commentRole: m,
          showTag: d,
          showUserNo: p,
          isLike: f,
          getCommentsRepliesById: s,
          likeOrUnlikeComment: r,
          replyHandleClick: y,
          refreshData: C,
          hasMoreData: h,
          loadMoreData: k,
          materialForumFeaturePoint: st,
        };
      },
    }),
    q = {
      commentDetail: "reply__commentDetail-CBAAp",
      itemContent: "reply__itemContent-rBCK4",
      title: "reply__title-QFqai",
      itemHeader: "reply__itemHeader-ROEVd",
      itemHeaderLeft: "reply__itemHeaderLeft-nEnop",
      name: "reply__name-AtJUq",
      markdownBody: "reply__markdown-body-IBYge",
      loginTypeLogo: "reply__login-type-logo-HXSI3",
      loginTemplateTitle: "reply__login-template-title-p7mkJ",
      loginTemplateLoginOptions: "reply__login-template-loginOptions-_9gX6",
      modalOnTop: "reply__modal-on-top-tF9iU",
      modalWrapper: "reply__modal-wrapper-VdjuB",
      scIonModalIos: "reply__sc-ion-modal-ios-PH6ez",
      modalFullscreen: "reply__modal-fullscreen-eCXs9",
      scIonModalIosH: "reply__sc-ion-modal-ios-h-J17hQ",
      ml8: "reply__ml8-kpNg7",
      header: "reply__header-sVxxq",
      cancel: "reply__cancel-ow4hR",
      confirm: "reply__confirm-vRRHN",
      anonymousHead: "reply__anonymousHead-TTC8O",
      tag: "reply__tag-NmS5k",
      top: "reply__top-zrlFh",
      moreHandler: "reply__more-handler-h1jmi",
      more: "reply__more-VEOP7",
      content: "reply__content-GE1nT",
      itemFooter: "reply__itemFooter-f7bRe",
      time: "reply__time-tYzeq",
      commentHandler: "reply__commentHandler-opzxA",
      likeHandler: "reply__likeHandler-YTgSJ",
      currentUserLiked: "reply__current-user-liked-FXqW8",
      repliesCount: "reply__repliesCount-mO18n",
      commentRepliesList: "reply__commentRepliesList-X2p7_",
    };
  const Z = {};
  Z["$style"] = q;
  const H = (0, I.Z)(F, [
    ["render", A],
    ["__cssModules", Z],
  ]);
  var Q = H,
    U = ["onClick"],
    j = { class: "flex row x-left y-center" };
  function G(e, t, n, o, i, a) {
    var r = (0, l.resolveComponent)("svg-icon"),
      s = (0, l.resolveComponent)("ion-content"),
      c = (0, l.resolveComponent)("ion-page");
    return (
      (0, l.openBlock)(),
      (0, l.createBlock)(c, null, {
        default: (0, l.withCtx)(function () {
          return [
            (0, l.createElementVNode)(
              "div",
              { class: (0, l.normalizeClass)(e.$style.header) },
              [
                (0, l.createElementVNode)(
                  "div",
                  { class: (0, l.normalizeClass)(e.$style.title) },
                  [
                    (0, l.createElementVNode)(
                      "div",
                      { class: (0, l.normalizeClass)(e.$style.text) },
                      (0, l.toDisplayString)(e.$tc("comment.selectFile")),
                      3,
                    ),
                  ],
                  2,
                ),
                (0, l.createElementVNode)(
                  "div",
                  {
                    class: (0, l.normalizeClass)(e.$style.closeIcon),
                    onClick:
                      t[0] ||
                      (t[0] = function () {
                        for (var t = [], n = 0; n < arguments.length; n++)
                          t[n] = arguments[n];
                        return e.confirm && e.confirm.apply(e, t);
                      }),
                  },
                  [(0, l.createVNode)(r, { name: "close" })],
                  2,
                ),
              ],
              2,
            ),
            (0, l.createVNode)(
              s,
              { class: (0, l.normalizeClass)(e.$style.filterFileList) },
              {
                default: (0, l.withCtx)(function () {
                  return [
                    ((0, l.openBlock)(!0),
                    (0, l.createElementBlock)(
                      l.Fragment,
                      null,
                      (0, l.renderList)(
                        e.activityUploadReferrers,
                        function (t) {
                          return (
                            (0, l.openBlock)(),
                            (0, l.createElementBlock)(
                              "div",
                              {
                                class: (0, l.normalizeClass)(
                                  e.$style.filterFileItem,
                                ),
                                key: t.name,
                                onClick: function (n) {
                                  return e.changeCurrentReferrerId(t);
                                },
                              },
                              [
                                (0, l.createElementVNode)(
                                  "div",
                                  {
                                    class: (0, l.normalizeClass)([
                                      e.$style.fileIcon,
                                      "disabled-event",
                                    ]),
                                  },
                                  [
                                    (0, l.createVNode)(
                                      r,
                                      { name: e.getQuestionFileIcon(t) },
                                      null,
                                      8,
                                      ["name"],
                                    ),
                                  ],
                                  2,
                                ),
                                (0, l.createElementVNode)(
                                  "div",
                                  {
                                    class: (0, l.normalizeClass)(
                                      e.$style.fileTitle,
                                    ),
                                  },
                                  [
                                    (0, l.createElementVNode)(
                                      "div",
                                      {
                                        class: (0, l.normalizeClass)(
                                          e.$style.fileName,
                                        ),
                                      },
                                      (0, l.toDisplayString)(t.name),
                                      3,
                                    ),
                                    (0, l.createElementVNode)(
                                      "div",
                                      {
                                        class: (0, l.normalizeClass)(
                                          e.$style.questionCount,
                                        ),
                                      },
                                      (0, l.toDisplayString)(
                                        e.$tc(
                                          "comment.numberOfQuestion",
                                          e.questionCountStats[t.id] || 0,
                                        ),
                                      ),
                                      3,
                                    ),
                                  ],
                                  2,
                                ),
                                (0, l.createElementVNode)("div", j, [
                                  e.currentReferrerId === t.id
                                    ? ((0, l.openBlock)(),
                                      (0, l.createBlock)(r, {
                                        key: 0,
                                        name: "checkbox",
                                      }))
                                    : ((0, l.openBlock)(),
                                      (0, l.createBlock)(r, {
                                        key: 1,
                                        name: "checkbox-uncheck",
                                      })),
                                ]),
                              ],
                              10,
                              U,
                            )
                          );
                        },
                      ),
                      128,
                    )),
                  ];
                }),
                _: 1,
              },
              8,
              ["class"],
            ),
          ];
        }),
        _: 1,
      })
    );
  }
  var W = (0, l.defineComponent)({
      setup: function () {
        var e = vt(),
          t = e.currentReferrerId,
          n = e.activityUploadReferrers,
          o = e.questionCountStats,
          i = e.closeModal,
          l = e.changeCurrentReferrerId;
        return {
          currentReferrerId: t,
          activityUploadReferrers: n,
          questionCountStats: o,
          confirm: i,
          getQuestionFileIcon: It,
          changeCurrentReferrerId: l,
        };
      },
    }),
    J = {
      markdownBody: "FilterReferrerModal__markdown-body-SOx1I",
      loginTypeLogo: "FilterReferrerModal__login-type-logo-_7EAK",
      loginTemplateTitle: "FilterReferrerModal__login-template-title-fYd66",
      loginTemplateLoginOptions:
        "FilterReferrerModal__login-template-loginOptions-s33MC",
      modalOnTop: "FilterReferrerModal__modal-on-top-NT9zz",
      modalWrapper: "FilterReferrerModal__modal-wrapper-NWuQo",
      scIonModalIos: "FilterReferrerModal__sc-ion-modal-ios-zlO8j",
      modalFullscreen: "FilterReferrerModal__modal-fullscreen-rJAxO",
      scIonModalIosH: "FilterReferrerModal__sc-ion-modal-ios-h-vJbZR",
      header: "FilterReferrerModal__header-ExqbB",
      title: "FilterReferrerModal__title-pFQJ5",
      text: "FilterReferrerModal__text-YcNIX",
      closeIcon: "FilterReferrerModal__closeIcon-sQ3Bj",
      filterFileList: "FilterReferrerModal__filterFileList-DpLwo",
      filterFileItem: "FilterReferrerModal__filterFileItem-VzAAc",
      fileIcon: "FilterReferrerModal__fileIcon-uXKKM",
      fileTitle: "FilterReferrerModal__fileTitle-F97WQ",
      questionCount: "FilterReferrerModal__questionCount-jPeNs",
    };
  const Y = {};
  Y["$style"] = J;
  const K = (0, I.Z)(W, [
    ["render", G],
    ["__cssModules", Y],
  ]);
  var X = K,
    ee = ["onClick"],
    te = (0, l.createElementVNode)(
      "div",
      { id: "modal-write-comment-teleport" },
      null,
      -1,
    );
  function ne(e, t, n, o, i, a) {
    var r = (0, l.resolveComponent)("svg-icon"),
      s = (0, l.resolveComponent)("QuestionItem"),
      c = (0, l.resolveComponent)("ion-infinite-scroll-content"),
      u = (0, l.resolveComponent)("ion-infinite-scroll"),
      m = (0, l.resolveComponent)("blank-list"),
      d = (0, l.resolveComponent)("ion-content"),
      p = (0, l.resolveComponent)("WriteQuestion"),
      v = (0, l.resolveComponent)("ion-toolbar"),
      f = (0, l.resolveComponent)("ion-footer"),
      y = (0, l.resolveComponent)("ion-page");
    return (
      (0, l.openBlock)(),
      (0, l.createBlock)(y, null, {
        default: (0, l.withCtx)(function () {
          return [
            (0, l.createElementVNode)(
              "div",
              { class: (0, l.normalizeClass)(e.$style.header) },
              [
                (0, l.createElementVNode)(
                  "div",
                  { class: (0, l.normalizeClass)(e.$style.cancel) },
                  null,
                  2,
                ),
                (0, l.createElementVNode)(
                  "div",
                  { class: (0, l.normalizeClass)(e.$style.title) },
                  [
                    (0, l.createElementVNode)(
                      "div",
                      { class: (0, l.normalizeClass)(e.$style.text) },
                      (0, l.toDisplayString)(e.$tc("comment.allQuestion")) +
                        "·" +
                        (0, l.toDisplayString)(e.questionCount),
                      3,
                    ),
                  ],
                  2,
                ),
                (0, l.createElementVNode)(
                  "div",
                  {
                    class: (0, l.normalizeClass)(e.$style.closeIcon),
                    onClick:
                      t[0] ||
                      (t[0] = function () {
                        for (var t = [], n = 0; n < arguments.length; n++)
                          t[n] = arguments[n];
                        return e.cancel && e.cancel.apply(e, t);
                      }),
                  },
                  [(0, l.createVNode)(r, { name: "close" })],
                  2,
                ),
              ],
              2,
            ),
            (0, l.createElementVNode)(
              "div",
              { class: (0, l.normalizeClass)(e.$style.statsBox) },
              [
                ((0, l.openBlock)(!0),
                (0, l.createElementBlock)(
                  l.Fragment,
                  null,
                  (0, l.renderList)(e.pageStats, function (t, n) {
                    var o;
                    return (
                      (0, l.openBlock)(),
                      (0, l.createElementBlock)(
                        "span",
                        {
                          key: n,
                          onClick: function (t) {
                            return e.changePage(Number(n));
                          },
                          class: (0, l.normalizeClass)([
                            e.$style.statsLabel,
                            ((o = {}),
                            (o[e.$style.selected] =
                              e.currentLocation === Number(n)),
                            o),
                          ]),
                        },
                        (0, l.toDisplayString)(
                          e.$tc("comment.currentPage", { n: n }),
                        ) +
                          "·" +
                          (0, l.toDisplayString)(t),
                        11,
                        ee,
                      )
                    );
                  }),
                  128,
                )),
              ],
              2,
            ),
            (0, l.createVNode)(
              d,
              {
                ref: "questionContentRef",
                class: (0, l.normalizeClass)(e.$style.questionContent),
              },
              {
                default: (0, l.withCtx)(function () {
                  return [
                    e.loaded && e.questionCount > 0
                      ? ((0, l.openBlock)(),
                        (0, l.createElementBlock)(
                          "div",
                          {
                            key: 0,
                            class: (0, l.normalizeClass)(e.$style.questionList),
                          },
                          [
                            ((0, l.openBlock)(!0),
                            (0, l.createElementBlock)(
                              l.Fragment,
                              null,
                              (0, l.renderList)(
                                e.questionPageInfo.comments,
                                function (t) {
                                  return (
                                    (0, l.openBlock)(),
                                    (0, l.createBlock)(
                                      s,
                                      {
                                        ref_for: !0,
                                        ref: "questionItemRefs",
                                        key: t.id,
                                        activityId: e.activityId,
                                        question: t,
                                        contentEllipsis: !0,
                                        showAttachmentFile: !1,
                                        teleportTo:
                                          "#modal-write-comment-teleport",
                                      },
                                      null,
                                      8,
                                      ["activityId", "question"],
                                    )
                                  );
                                },
                              ),
                              128,
                            )),
                            (0, l.createVNode)(
                              u,
                              {
                                class: "ion-infinite-scroll",
                                disabled: !e.hasMoreData,
                                onIonInfinite: e.loadMoreData,
                              },
                              {
                                default: (0, l.withCtx)(function () {
                                  return [(0, l.createVNode)(c)];
                                }),
                                _: 1,
                              },
                              8,
                              ["disabled", "onIonInfinite"],
                            ),
                          ],
                          2,
                        ))
                      : (0, l.createCommentVNode)("", !0),
                    0 === e.questionCount
                      ? ((0, l.openBlock)(),
                        (0, l.createElementBlock)(
                          "div",
                          {
                            key: 1,
                            class: (0, l.normalizeClass)(e.$style.blankList),
                          },
                          [
                            (0, l.createVNode)(
                              m,
                              {
                                name: "doubt",
                                message: e.$tc("comment.noQuestion"),
                              },
                              null,
                              8,
                              ["message"],
                            ),
                          ],
                          2,
                        ))
                      : (0, l.createCommentVNode)("", !0),
                  ];
                }),
                _: 1,
              },
              8,
              ["class"],
            ),
            (0, l.withDirectives)(
              (0, l.createVNode)(
                f,
                null,
                {
                  default: (0, l.withCtx)(function () {
                    return [
                      (0, l.createVNode)(
                        v,
                        { class: "toolbar" },
                        {
                          default: (0, l.withCtx)(function () {
                            return [
                              e.canSendQuestion
                                ? ((0, l.openBlock)(),
                                  (0, l.createBlock)(
                                    p,
                                    {
                                      key: 0,
                                      placeholder: e.$tc(
                                        "comment.askQuestionPage",
                                        e.currentLocation,
                                      ),
                                      location: e.currentLocation,
                                    },
                                    null,
                                    8,
                                    ["placeholder", "location"],
                                  ))
                                : (0, l.createCommentVNode)("", !0),
                              te,
                            ];
                          }),
                          _: 1,
                        },
                      ),
                    ];
                  }),
                  _: 1,
                },
                512,
              ),
              [[l.vShow, e.showFooter]],
            ),
          ];
        }),
        _: 1,
      })
    );
  }
  (n(47941), n(85827), n(26833));
  var oe = ["placeholder"],
    ie = { "data-clickoutside-ignore": "1" };
  function le(e, t, n, o, i, a) {
    var r,
      s,
      c = (0, l.resolveComponent)("svg-icon"),
      u = (0, l.resolveComponent)("x-button");
    return (
      (0, l.openBlock)(),
      (0, l.createElementBlock)(
        "footer",
        {
          class: (0, l.normalizeClass)([
            e.$style.footer,
            ((r = {}), (r[e.$style.anonymous] = e.canAnonymous), r),
          ]),
          "data-testid": "writeQuestionFooter",
          ref: "footerRef",
          "data-clickoutside-ignore": "1",
        },
        [
          (0, l.createElementVNode)(
            "div",
            {
              class: (0, l.normalizeClass)(
                ((s = {}),
                (s[e.$style.inputComment] = !0),
                (s[e.$style.focused] = e.isEditing),
                s),
              ),
            },
            [
              e.isEditing
                ? (0, l.createCommentVNode)("", !0)
                : ((0, l.openBlock)(),
                  (0, l.createBlock)(c, { key: 0, name: "write" })),
              (0, l.withDirectives)(
                (0, l.createElementVNode)(
                  "textarea",
                  {
                    "onUpdate:modelValue":
                      t[0] ||
                      (t[0] = function (t) {
                        return (e.postPayLoad.content = t);
                      }),
                    placeholder: e.placeholder,
                    class: (0, l.normalizeClass)(e.$style.inputText),
                    onFocus:
                      t[1] ||
                      (t[1] = function () {
                        for (var t = [], n = 0; n < arguments.length; n++)
                          t[n] = arguments[n];
                        return e.handleFocus && e.handleFocus.apply(e, t);
                      }),
                    "data-clickoutside-ignore": "1",
                    type: "text",
                    ref: "input",
                    "data-testid": "writeQuestion",
                  },
                  null,
                  42,
                  oe,
                ),
                [[l.vModelText, e.postPayLoad.content, void 0, { trim: !0 }]],
              ),
            ],
            2,
          ),
          e.isEditing
            ? ((0, l.openBlock)(),
              (0, l.createElementBlock)(
                "div",
                {
                  key: 0,
                  class: (0, l.normalizeClass)(e.$style.button),
                  "data-clickoutside-ignore": "1",
                },
                [
                  e.canAnonymous
                    ? ((0, l.openBlock)(),
                      (0, l.createElementBlock)(
                        "div",
                        {
                          key: 0,
                          onClick:
                            t[2] ||
                            (t[2] = (0, l.withModifiers)(
                              function () {
                                for (
                                  var t = [], n = 0;
                                  n < arguments.length;
                                  n++
                                )
                                  t[n] = arguments[n];
                                return (
                                  e.setAnonymous && e.setAnonymous.apply(e, t)
                                );
                              },
                              ["stop"],
                            )),
                          class: (0, l.normalizeClass)(e.$style.anonymous),
                          "data-clickoutside-ignore": "1",
                        },
                        [
                          (0, l.createVNode)(
                            c,
                            {
                              "data-clickoutside-ignore": "1",
                              name: e.postPayLoad.anonymous
                                ? "checkbox"
                                : "checkbox-uncheck",
                            },
                            null,
                            8,
                            ["name"],
                          ),
                          (0, l.createElementVNode)(
                            "span",
                            ie,
                            (0, l.toDisplayString)(e.$tc("comment.anonymous")),
                            1,
                          ),
                        ],
                        2,
                      ))
                    : (0, l.createCommentVNode)("", !0),
                  (0, l.createVNode)(
                    u,
                    {
                      "data-clickoutside-ignore": "1",
                      type: "primary",
                      disabled: e.sendDisabled,
                      "data-testid": "addComment",
                      class: (0, l.normalizeClass)(e.$style.postButton),
                      onClick: (0, l.withModifiers)(e.sendPost, ["stop"]),
                      loading: e.loading,
                    },
                    {
                      default: (0, l.withCtx)(function () {
                        return [
                          (0, l.createTextVNode)(
                            (0, l.toDisplayString)(e.$tc("buttons.send")),
                            1,
                          ),
                        ];
                      }),
                      _: 1,
                    },
                    8,
                    ["disabled", "class", "onClick", "loading"],
                  ),
                ],
                2,
              ))
            : (0, l.createCommentVNode)("", !0),
        ],
        2,
      )
    );
  }
  var ae = n(3967),
    re = n(12483),
    se = (0, l.defineComponent)({
      props: {
        location: { type: Number, required: !1 },
        canAnonymous: { type: Boolean, required: !1, default: !0 },
        placeholder: {
          type: String,
          required: !1,
          default: v["default"].global.t("comment.questionPlaceholder"),
        },
      },
      setup: function (e) {
        var t = this,
          n = (0, l.ref)(!1),
          i = (0, l.reactive)({ content: "", anonymous: !1 }),
          a = function () {
            n.value = !0;
          },
          r = function () {
            ((n.value = !1), (i.content = ""), (i.anonymous = !1));
          },
          s = function (e) {
            ((null === e || void 0 === e
              ? void 0
              : e.target.dataset.clickoutsideIgnore) &&
              "1" ===
                (null === e || void 0 === e
                  ? void 0
                  : e.target.dataset.clickoutsideIgnore)) ||
              r();
          },
          c = (0, l.ref)();
        (0, ae.i9H)(c, s);
        var u = function () {
            i.anonymous = !i.anonymous;
          },
          m = (0, l.computed)(function () {
            return 0 === i.content.length;
          }),
          d = gt().callAddQuestionApi,
          f = (0, l.ref)(!1),
          y = function () {
            return (0, o.mG)(t, void 0, void 0, function () {
              var t, n;
              return (0, o.Jh)(this, function (o) {
                switch (o.label) {
                  case 0:
                    return f.value
                      ? [2]
                      : ((f.value = !0),
                        (t = re.ZP.createQuestionForm(i.content, {
                          anonymous: i.anonymous,
                        })),
                        e.location && (t.location = e.location + ""),
                        [4, d(t)]);
                  case 1:
                    return (
                      (n = o.sent()),
                      n
                        ? (r(),
                          p["default"].showMessage(
                            v["default"].global.t("comment.saveSuccessfully"),
                          ),
                          (f.value = !1))
                        : (p["default"].showMessage(
                            v["default"].global.t("comment.saveFailed"),
                          ),
                          (f.value = !1)),
                      [2]
                    );
                }
              });
            });
          };
        return {
          isEditing: n,
          postPayLoad: i,
          handleFocus: a,
          setAnonymous: u,
          sendDisabled: m,
          sendPost: y,
          atFocusOut: s,
          footerRef: c,
          loading: f,
        };
      },
    }),
    ce = {
      markdownBody: "WriteQuestion__markdown-body-TdnaY",
      loginTypeLogo: "WriteQuestion__login-type-logo-BBTkT",
      loginTemplateTitle: "WriteQuestion__login-template-title-hcqGk",
      loginTemplateLoginOptions:
        "WriteQuestion__login-template-loginOptions-xkgAE",
      modalOnTop: "WriteQuestion__modal-on-top-kDXBB",
      modalWrapper: "WriteQuestion__modal-wrapper-iD7v3",
      scIonModalIos: "WriteQuestion__sc-ion-modal-ios-yi3A0",
      modalFullscreen: "WriteQuestion__modal-fullscreen-vmROG",
      scIonModalIosH: "WriteQuestion__sc-ion-modal-ios-h-Zry4Q",
      footer: "WriteQuestion__footer-jlMuS",
      inputComment: "WriteQuestion__inputComment-dMLnn",
      focused: "WriteQuestion__focused-osgJ5",
      inputCommentFocus: "WriteQuestion__inputCommentFocus-M1c1K",
      inputText: "WriteQuestion__input-text-obLin",
      button: "WriteQuestion__button-KADYU",
      anonymous: "WriteQuestion__anonymous-h8g46",
      postButton: "WriteQuestion__postButton-nNP_q",
    };
  const ue = {};
  ue["$style"] = ce;
  const me = (0, I.Z)(se, [
    ["render", le],
    ["__cssModules", ue],
  ]);
  var de = me,
    pe = (0, l.defineComponent)({
      props: {
        activityId: { type: Number, required: !0 },
        location: { type: Number, required: !0 },
      },
      components: { QuestionItem: y.Z, WriteQuestion: de },
      setup: function (e) {
        var t,
          n = this,
          i = ft(),
          a = i.pageStats,
          r = i.questionPageInfo,
          s = i.currentLocation,
          c = i.loadMoreData,
          u = i.cancel,
          m = i.changeLocation,
          d = (0, l.computed)(function () {
            return !(!r || !r.page) && r.page > 0 && r.page < r.pages;
          }),
          f = null === (t = a.value) || void 0 === t ? void 0 : t[e.location];
        f ||
          p["default"].showMessage(
            v["default"].global.t("comment.pageNoQuestion", { n: e.location }),
          );
        var y = (0, l.ref)(!1),
          g = function (e) {
            var t,
              n = null === (t = a.value) || void 0 === t ? void 0 : t[e];
            return n
              ? e
              : a.value
                ? Math.min.apply(
                    Math,
                    Object.keys(a.value).map(function (e) {
                      return Number(e);
                    }),
                  )
                : 1;
          },
          _ = function (t) {
            return (0, o.mG)(n, void 0, void 0, function () {
              var n;
              return (0, o.Jh)(this, function (o) {
                switch (o.label) {
                  case 0:
                    return (
                      o.trys.push([0, , 2, 3]),
                      (n = t || g(e.location)),
                      (y.value = !1),
                      [4, m(n)]
                    );
                  case 1:
                    return (o.sent(), [3, 3]);
                  case 2:
                    return ((y.value = !0), [7]);
                  case 3:
                    return [2];
                }
              });
            });
          };
        (_(),
          (0, l.watch)(a, function () {
            var e = g(s.value);
            e !== s.value && m(e);
          }));
        var C = (0, l.ref)(null),
          h = function (e) {
            return (0, o.mG)(n, void 0, void 0, function () {
              var t;
              return (0, o.Jh)(this, function (n) {
                return (
                  s.value !== e &&
                    (null === (t = C.value) ||
                      void 0 === t ||
                      t.$el.scrollToTop(),
                    _(e)),
                  [2]
                );
              });
            });
          },
          k = (0, l.computed)(function () {
            return Object.values(a.value).reduce(function (e, t) {
              return e + t;
            }, 0);
          }),
          I = (0, E.xt)().isInstructor,
          b = (0, l.computed)(function () {
            return ct.value.canAdd && !I.value && k.value > 0;
          }),
          B = (0, l.ref)(),
          w = (0, l.computed)(function () {
            var e;
            return null === (e = B.value) || void 0 === e
              ? void 0
              : e.some(function (e) {
                  return e.replying;
                });
          }),
          T = (0, l.computed)(function () {
            return w.value || b.value;
          });
        return {
          loaded: y,
          cancel: u,
          questionCount: k,
          currentLocation: s,
          changeLocation: m,
          pageStats: a,
          questionPageInfo: r,
          hasMoreData: d,
          loadMoreData: c,
          changePage: h,
          questionContentRef: C,
          canSendQuestion: b,
          questionItemRefs: B,
          showFooter: T,
        };
      },
    }),
    ve = {
      markdownBody: "QuestionByPageModal__markdown-body-SR0Bz",
      loginTypeLogo: "QuestionByPageModal__login-type-logo-kFLIp",
      loginTemplateTitle: "QuestionByPageModal__login-template-title-wWWNP",
      loginTemplateLoginOptions:
        "QuestionByPageModal__login-template-loginOptions-dccMs",
      modalOnTop: "QuestionByPageModal__modal-on-top-jNH9o",
      modalWrapper: "QuestionByPageModal__modal-wrapper-Z5vQw",
      scIonModalIos: "QuestionByPageModal__sc-ion-modal-ios-zX2A7",
      modalFullscreen: "QuestionByPageModal__modal-fullscreen-ax41_",
      scIonModalIosH: "QuestionByPageModal__sc-ion-modal-ios-h-I8hMK",
      header: "QuestionByPageModal__header-oF4pG",
      title: "QuestionByPageModal__title-GA04z",
      text: "QuestionByPageModal__text-TvJsy",
      closeIcon: "QuestionByPageModal__closeIcon-POZhR",
      statsBox: "QuestionByPageModal__statsBox-Sb5T_",
      statsLabel: "QuestionByPageModal__statsLabel-PuoaS",
      selected: "QuestionByPageModal__selected-PfkDn",
      questionContent: "QuestionByPageModal__questionContent-Q3ktu",
      blankList: "QuestionByPageModal__blankList-ps2AE",
    };
  const fe = {};
  fe["$style"] = ve;
  const ye = (0, I.Z)(pe, [
    ["render", ne],
    ["__cssModules", fe],
  ]);
  var ge = ye,
    _e = n(75370),
    Ce = ["placeholder"];
  function he(e, t, n, o, i, a) {
    var r = (0, l.resolveComponent)("modal-header"),
      s = (0, l.resolveComponent)("ListItem"),
      c = (0, l.resolveComponent)("svg-icon"),
      u = (0, l.resolveComponent)("ion-page");
    return (
      (0, l.openBlock)(),
      (0, l.createBlock)(u, null, {
        default: (0, l.withCtx)(function () {
          return [
            (0, l.createVNode)(
              r,
              {
                onConfirm: e.sendQuestionComment,
                onCancel: e.cancel,
                confirmDisabled:
                  "" === e.postCreateQuestionPayload.content || e.sendLoading,
                confirmText: e.$tc("comment.save"),
                title: e.$tc("comment.postQuestion"),
              },
              null,
              8,
              [
                "onConfirm",
                "onCancel",
                "confirmDisabled",
                "confirmText",
                "title",
              ],
            ),
            (0, l.createElementVNode)(
              "div",
              { class: (0, l.normalizeClass)(e.$style.content) },
              [
                e.maximum
                  ? ((0, l.openBlock)(),
                    (0, l.createElementBlock)(
                      l.Fragment,
                      { key: 0 },
                      [
                        e.isVideoOrAudioActivity
                          ? ((0, l.openBlock)(),
                            (0, l.createBlock)(
                              s,
                              {
                                key: 0,
                                "data-testid": "locationTime",
                                title: e.$tc("comment.markerTime"),
                                value: e.postCreateQuestionPayload.location,
                                "can-click": "",
                                onClick:
                                  t[0] ||
                                  (t[0] = function (t) {
                                    return e.openLocationDurationSelector(
                                      e.maximum,
                                    );
                                  }),
                              },
                              null,
                              8,
                              ["title", "value"],
                            ))
                          : ((0, l.openBlock)(),
                            (0, l.createBlock)(
                              s,
                              {
                                key: 1,
                                "data-testid": "locationPage",
                                title: e.$tc("comment.markerPage"),
                                value: e.$tc("comment.currentPage", {
                                  n: e.postCreateQuestionPayload.location,
                                }),
                                "can-click": "",
                                onClick:
                                  t[1] ||
                                  (t[1] = function (t) {
                                    return e.openLocationPageSelector(
                                      e.maximum,
                                    );
                                  }),
                              },
                              null,
                              8,
                              ["title", "value"],
                            )),
                      ],
                      64,
                    ))
                  : (0, l.createCommentVNode)("", !0),
                (0, l.withDirectives)(
                  (0, l.createElementVNode)(
                    "textarea",
                    {
                      class: (0, l.normalizeClass)(e.$style.inputText),
                      placeholder: e.$tc("comment.questionPlaceholder"),
                      "onUpdate:modelValue":
                        t[2] ||
                        (t[2] = function (t) {
                          return (e.postCreateQuestionPayload.content = t);
                        }),
                    },
                    null,
                    10,
                    Ce,
                  ),
                  [
                    [
                      l.vModelText,
                      e.postCreateQuestionPayload.content,
                      void 0,
                      { trim: !0 },
                    ],
                  ],
                ),
              ],
              2,
            ),
            (0, l.createElementVNode)(
              "div",
              {
                onClick:
                  t[3] ||
                  (t[3] = (0, l.withModifiers)(
                    function (t) {
                      return e.setAnonymous();
                    },
                    ["stop"],
                  )),
                class: (0, l.normalizeClass)(e.$style.anonymous),
              },
              [
                (0, l.createVNode)(
                  c,
                  {
                    name: e.postCreateQuestionPayload.anonymous
                      ? "checkbox"
                      : "checkbox-uncheck",
                  },
                  null,
                  8,
                  ["name"],
                ),
                (0, l.createElementVNode)(
                  "span",
                  null,
                  (0, l.toDisplayString)(e.$tc("comment.anonymous")),
                  1,
                ),
              ],
              2,
            ),
          ];
        }),
        _: 1,
      })
    );
  }
  var ke = n(31619),
    Ie = n(37058),
    be = (0, l.defineComponent)({
      components: { ModalHeader: ke.Z, ListItem: Ie.Z },
      props: {
        maximum: { type: Number, required: !1 },
        modalId: { type: String, required: !0 },
      },
      setup: function (e) {
        var t = _t().isVideoOrAudioActivity,
          n = gt(),
          o = n.postCreateQuestionPayload,
          i = n.openLocationPageSelector,
          l = n.openLocationDurationSelector,
          a = n.setAnonymous,
          r = n.sendQuestionComment,
          s = n.sendLoading,
          c = function () {
            p["default"].closeModalById(e.modalId);
          };
        return {
          postCreateQuestionPayload: o,
          confirm: confirm,
          cancel: c,
          openLocationPageSelector: i,
          openLocationDurationSelector: l,
          setAnonymous: a,
          sendQuestionComment: r,
          isVideoOrAudioActivity: t,
          sendLoading: s,
        };
      },
    }),
    Be = {
      markdownBody: "CreateModal__markdown-body-Dwrnv",
      loginTypeLogo: "CreateModal__login-type-logo-LJNLv",
      loginTemplateTitle: "CreateModal__login-template-title-kNiId",
      loginTemplateLoginOptions:
        "CreateModal__login-template-loginOptions-G3M8Y",
      modalOnTop: "CreateModal__modal-on-top-y8zNF",
      modalWrapper: "CreateModal__modal-wrapper-nV583",
      scIonModalIos: "CreateModal__sc-ion-modal-ios-qjnWv",
      modalFullscreen: "CreateModal__modal-fullscreen-KYcPe",
      scIonModalIosH: "CreateModal__sc-ion-modal-ios-h-IVTgf",
      content: "CreateModal__content-vad5j",
      locationInput: "CreateModal__locationInput-o4SwZ",
      inputText: "CreateModal__inputText-hrzrC",
      anonymous: "CreateModal__anonymous-RFbfv",
    };
  const we = {};
  we["$style"] = Be;
  const Te = (0, I.Z)(be, [
    ["render", he],
    ["__cssModules", we],
  ]);
  var Ee = Te,
    Ne = n(12947),
    Me = n(51688),
    Ve = n(28838),
    Se = n(95236),
    $e = n(51619),
    Ae = n(29511),
    Pe = n(59109),
    Le = n(28339),
    ze = n(27486),
    Re = n(56022),
    xe = n(34165),
    De = n(89564),
    Oe = n(24424),
    Fe = n(76584),
    qe = n(771),
    Ze = n(25108),
    He = Re.Z.get("comment-composable"),
    Qe = { page: 0, pageSize: i.IV, total: null, pages: null, comments: null },
    Ue = { page: 0, pageSize: i.IV, total: null, pages: null, replies: null },
    je = {
      activityId: 0,
      activityType: null,
      activityCommentsCount: { forum: 0, question: 0 },
      forumPageInfo: r().cloneDeep(Qe),
      references: [],
      questionPageInfo: r().cloneDeep(Qe),
      repliesPagesInfo: {},
      questionReplies: {},
      commentOperateList: [],
      pageStats: {},
      questionCountStats: {},
    },
    Ge = (0, l.ref)(!1),
    We = (0, l.ref)([]),
    Je = (0, l.ref)(0),
    Ye = (0, l.ref)(0),
    Ke = (0, l.reactive)(r().cloneDeep(je)),
    Xe = (0, l.reactive)(new s.Du()),
    et = 0,
    tt = function () {
      ((Ge.value = !1),
        (We.value = []),
        (Je.value = 0),
        (Ye.value = 0),
        Object.assign(Ke, r().cloneDeep(je)),
        Object.assign(Xe, new s.Du()),
        (et = 0));
    },
    nt = ["link", "lesson"],
    ot = function () {
      return (0, o.mG)(void 0, void 0, void 0, function () {
        var e;
        return (0, o.Jh)(this, function (t) {
          switch (t.label) {
            case 0:
              return [4, u.ZP.getCommentsCount(Ke.activityId)];
            case 1:
              return (
                (e = t.sent().question),
                (Ke.activityCommentsCount.question = e),
                [2]
              );
          }
        });
      });
    },
    it = function (e) {
      return (0, o.mG)(void 0, void 0, void 0, function () {
        var t;
        return (0, o.Jh)(this, function (n) {
          switch (n.label) {
            case 0:
              return [4, u.ZP.getCommentsRepliesList(Ke.activityId, e)];
            case 1:
              return (
                (t = n.sent()),
                (Ke.questionReplies = (0, o.pi)(
                  (0, o.pi)({}, Ke.questionReplies),
                  t,
                )),
                [2]
              );
          }
        });
      });
    },
    lt = function (e) {
      return (0, o.mG)(void 0, void 0, void 0, function () {
        var t;
        return (0, o.Jh)(this, function (n) {
          switch (n.label) {
            case 0:
              return [
                4,
                u.ZP.getCommentsOperate(
                  Ke.activityId,
                  e.map(function (e) {
                    return e.id;
                  }),
                ),
              ];
            case 1:
              return (
                (t = n.sent()),
                (Ke.commentOperateList = r().uniq(
                  (0, o.ev)((0, o.ev)([], Ke.commentOperateList, !0), t, !0),
                )),
                [2]
              );
          }
        });
      });
    },
    at = function (e, t) {
      return (0, o.mG)(void 0, void 0, void 0, function () {
        var n;
        return (0, o.Jh)(this, function (o) {
          switch (o.label) {
            case 0:
              return (
                (n = Ke.commentOperateList.findIndex(function (t) {
                  return t === e.id;
                })),
                t ? [3, 2] : [4, u.ZP.likeComment(Ke.activityId, e.id)]
              );
            case 1:
              return (
                o.sent(),
                -1 === n &&
                  (Ke.commentOperateList.push(e.id), e.approvalCount++),
                [3, 4]
              );
            case 2:
              return [4, u.ZP.unlikeComment(Ke.activityId, e.id)];
            case 3:
              (o.sent(),
                -1 !== n &&
                  (Ke.commentOperateList.splice(n, 1), e.approvalCount--),
                (o.label = 4));
            case 4:
              return [2];
          }
        });
      });
    },
    rt = function (e, t) {
      return (
        void 0 === t && (t = !1),
        (0, o.mG)(void 0, void 0, void 0, function () {
          var n, i, l, a, s, c, m;
          return (0, o.Jh)(this, function (o) {
            switch (o.label) {
              case 0:
                return (
                  Ke.repliesPagesInfo[e] ||
                    (Ke.repliesPagesInfo[e] = r().cloneDeep(Ue)),
                  (n = Ke.repliesPagesInfo[e]),
                  (i = { page: t ? 1 : n.page + 1, page_size: n.pageSize }),
                  [4, u.ZP.getCommentsRepliesById(Ke.activityId, e, i)]
                );
              case 1:
                return (
                  (l = o.sent()),
                  (a = l.replies),
                  (s = l.pages),
                  (c = l.total),
                  (m = l.page),
                  (n.page = m),
                  (n.total = c),
                  (n.pages = s),
                  (n.replies = t ? a : (n.replies || []).concat(a)),
                  [2]
                );
            }
          });
        })
      );
    },
    st = (0, l.computed)(function () {
      return {
        canAdd: (0, Pe.T)(Ae.k.COURSE_MATERIAL_FORUM_ADD),
        canLike: (0, Pe.T)(Ae.k.COURSE_MATERIAL_FORUM_LIKE),
        canReply: (0, Pe.T)(Ae.k.COURSE_MATERIAL_FORUM_REPLY),
        canDelete: (0, Pe.T)(Ae.k.COURSE_MATERIAL_FORUM_DELETE),
      };
    }),
    ct = (0, l.computed)(function () {
      return {
        canAdd: (0, Pe.T)(Ae.k.COURSE_MATERIAL_QUESTION_ADD),
        canPlusOne: (0, Pe.T)(Ae.k.COURSE_MATERIAL_QUESTION_PLUS_ONE),
        canReply: (0, Pe.T)(Ae.k.COURSE_MATERIAL_QUESTION_REPLY),
        canDelete: (0, Pe.T)(Ae.k.COURSE_MATERIAL_QUESTION_DELETE),
      };
    }),
    ut = function () {
      var e = (0, c.y)(),
        t = (0, E.xt)().isInstructor,
        n = function (e) {
          return (0, o.mG)(void 0, void 0, void 0, function () {
            var t, n, i, l, a, s;
            return (0, o.Jh)(this, function (o) {
              switch (o.label) {
                case 0:
                  return (
                    e && (Ke.forumPageInfo = r().cloneDeep(Qe)),
                    (t = {
                      page: e ? 1 : Ke.forumPageInfo.page + 1,
                      page_size: Ke.forumPageInfo.pageSize,
                      conditions: { referrer_type: "none", type: "forum" },
                    }),
                    [4, u.ZP.getCommentsList(Ke.activityId, t)]
                  );
                case 1:
                  return (
                    (n = o.sent()),
                    (i = n.comments),
                    (l = n.pages),
                    (a = n.total),
                    (s = n.page),
                    (Ke.activityCommentsCount.forum = a),
                    (Ke.forumPageInfo.page = s),
                    (Ke.forumPageInfo.total = a),
                    (Ke.forumPageInfo.pages = l),
                    (Ke.forumPageInfo.comments = e
                      ? i
                      : (Ke.forumPageInfo.comments || []).concat(i)),
                    lt(i),
                    [2]
                  );
              }
            });
          });
        },
        i = function (e, t) {
          return (
            void 0 === t && (t = !1),
            (0, o.mG)(void 0, void 0, void 0, function () {
              var n, i;
              return (0, o.Jh)(this, function (o) {
                switch (o.label) {
                  case 0:
                    return (
                      (n = re.ZP.createForumForm(e, t)),
                      [4, u.ZP.addActivityComment(Ke.activityId, n)]
                    );
                  case 1:
                    return ((i = o.sent()), [2, i]);
                }
              });
            })
          );
        },
        l = function (e, t) {
          return (0, o.mG)(void 0, void 0, void 0, function () {
            return (0, o.Jh)(this, function (n) {
              return (
                p["default"].showConfirm(
                  v["default"].global.t("comment.deleteConfirm"),
                  function () {
                    return (0, o.mG)(void 0, void 0, void 0, function () {
                      var n, i, l, a, s, c;
                      return (0, o.Jh)(this, function (o) {
                        switch (o.label) {
                          case 0:
                            return [4, u.ZP.deleteComment(Ke.activityId, e.id)];
                          case 1:
                            return (
                              o.sent(),
                              [
                                4,
                                p["default"].showMessage(
                                  v["default"].global.t("common.deleteSuccess"),
                                  { timeout: 2e3 },
                                ),
                              ]
                            );
                          case 2:
                            return (
                              (n = o.sent()),
                              (i = t),
                              void 0 === i &&
                                (i = r().findIndex(Ke.forumPageInfo.comments, {
                                  id: e.id,
                                })),
                              -1 !== i &&
                                (null === (c = Ke.forumPageInfo.comments) ||
                                  void 0 === c ||
                                  c.splice(i, 1)),
                              (l = Ke.forumPageInfo.total - 1),
                              (a = Math.ceil(l / Ke.forumPageInfo.pageSize)),
                              (s =
                                Ke.forumPageInfo.page > a
                                  ? a
                                  : Ke.forumPageInfo.page),
                              (Ke.forumPageInfo.total = l),
                              (Ke.forumPageInfo.pages = a),
                              (Ke.forumPageInfo.page = s),
                              (Ke.activityCommentsCount.forum = l),
                              [4, n.onDidDismiss()]
                            );
                          case 3:
                            return (o.sent(), [2]);
                        }
                      });
                    });
                  },
                ),
                [2]
              );
            });
          });
        },
        a = function (e, t) {
          var n = [
            {
              text: v["default"].global.t("common.delete"),
              role: "destructive",
              handler: function () {
                l(e, t);
              },
            },
            { text: v["default"].global.t("common.cancel"), role: "cancel" },
          ];
          Se.BO.create({ cssClass: "action-sheet", buttons: n }).then(
            function (e) {
              return e.present();
            },
          );
        },
        s = function (n) {
          var o;
          if (!st.value.canDelete) return !1;
          if (n.createdBy.id === De.Z.userID) return !0;
          var i = e.getEnrollmentRole(
            null === (o = null === n || void 0 === n ? void 0 : n.createdBy) ||
              void 0 === o
              ? void 0
              : o.courseRoles,
          );
          return !(!e.isCourseStudentViewpoint(i) || !t.value);
        },
        m = function (e, t) {
          var n = [
            {
              text: v["default"].global.t("common.delete"),
              role: "destructive",
              handler: function () {
                d(e, t);
              },
            },
            { text: v["default"].global.t("common.cancel"), role: "cancel" },
          ];
          Se.BO.create({ cssClass: "action-sheet", buttons: n }).then(
            function (e) {
              return e.present();
            },
          );
        },
        d = function (e, t) {
          return (0, o.mG)(void 0, void 0, void 0, function () {
            return (0, o.Jh)(this, function (n) {
              return (
                p["default"].showConfirm(
                  v["default"].global.t("comment.deleteConfirm"),
                  function () {
                    return (0, o.mG)(void 0, void 0, void 0, function () {
                      return (0, o.Jh)(this, function (n) {
                        switch (n.label) {
                          case 0:
                            return [4, u.ZP.deleteReply(Ke.activityId, t.id)];
                          case 1:
                            return (
                              n.sent(),
                              [
                                4,
                                p["default"].showMessage(
                                  v["default"].global.t("common.deleteSuccess"),
                                  { timeout: 2e3 },
                                ),
                              ]
                            );
                          case 2:
                            return (n.sent(), [4, rt(e.id, !0)]);
                          case 3:
                            return (
                              n.sent(),
                              (e.replyCount =
                                Ke.repliesPagesInfo[e.id].total ||
                                e.replyCount - 1),
                              [2]
                            );
                        }
                      });
                    });
                  },
                ),
                [2]
              );
            });
          });
        },
        f = function (e, t) {
          return (0, o.mG)(void 0, void 0, void 0, function () {
            return (0, o.Jh)(this, function (n) {
              return st.value.canLike
                ? e.createdBy.id === De.Z.userID
                  ? (p["default"].showMessage(
                      void 0 === e.parentId
                        ? v["default"].global.t("comment.cannotLikeOwnComment")
                        : v["default"].global.t("comment.cannotLikeOwnReply"),
                    ),
                    [2])
                  : (at(e, t), [2])
                : [2];
            });
          });
        },
        y = "replyCommentModal",
        g = function (e, t) {
          return (0, o.mG)(void 0, void 0, void 0, function () {
            return (0, o.Jh)(this, function (n) {
              switch (n.label) {
                case 0:
                  return (
                    (Ge.value = !0),
                    [
                      4,
                      p["default"].showModal(
                        Q,
                        {
                          title: v["default"].global.t("comment.reply"),
                          comment: e,
                          activityId: Ke.activityId,
                          index: t,
                          close: _,
                        },
                        "reply-modal",
                        { backdropDismiss: !1, id: y },
                      ),
                    ]
                  );
                case 1:
                  return (n.sent(), [2]);
              }
            });
          });
        },
        _ = function () {
          (p["default"].closeModalById(y), (Ge.value = !1));
        };
      return {
        getForumList: n,
        getCommentsRepliesById: rt,
        sendForumComment: i,
        canClickAction: s,
        triggerMoreAction: a,
        replyTriggerMoreAction: m,
        likeOrUnlikeComment: f,
        showReplyComment: g,
        closeReplyComment: _,
      };
    },
    mt = function (e) {
      var t = (0, c.y)(),
        n = (0, l.computed)(function () {
          return Ke.repliesPagesInfo[e.id] || null;
        }),
        o = (0, l.computed)(function () {
          var n;
          return t.getEnrollmentRole(
            null === (n = null === e || void 0 === e ? void 0 : e.createdBy) ||
              void 0 === n
              ? void 0
              : n.courseRoles,
          );
        }),
        i = (0, l.computed)(function () {
          return !e.anonymous && t.isCourseInstructorViewpoint(o.value);
        }),
        a = (0, l.computed)(function () {
          return !e.anonymous && t.isCourseStudentViewpoint(o.value);
        }),
        r = (0, l.computed)(function () {
          return Ke.commentOperateList.includes(
            null === e || void 0 === e ? void 0 : e.id,
          );
        });
      return {
        replyInfo: n,
        commentRole: o,
        showTag: i,
        showUserNo: a,
        isLike: r,
      };
    },
    dt = function (e, t) {
      var n = "question" === t ? ct.value.canReply : st.value.canReply,
        i = function (t) {
          n &&
            t.id !== Xe.parentId &&
            ((Xe.anonymous = !1),
            (Xe.content = ""),
            (Xe.parentCreatedBy = t.anonymous ? "anonymous" : t.createdBy),
            (Xe.commentId = e.id),
            t.parentId > -1 && (Xe.parentId = t.id));
        },
        a = function () {
          ((Xe.anonymous = !1),
            (Xe.commentId = 0),
            (Xe.content = ""),
            (Xe.parentCreatedBy = null),
            (Xe.parentId = null));
        },
        s = function () {
          Xe.anonymous = !Xe.anonymous;
        },
        c = (0, l.computed)(function () {
          return Boolean(
            Xe.commentId && Xe.commentId > 0 && e.id === Xe.commentId,
          );
        }),
        m = (0, l.computed)(function () {
          return "" !== Xe.content;
        }),
        d = (0, l.computed)(function () {
          var e;
          return Xe.commentId
            ? Xe.content
              ? Xe.content
              : "anonymous" === Xe.parentCreatedBy
                ? v["default"].global.t("comment.replyTo", [
                    v["default"].global.t("comment.anonymous"),
                  ])
                : v["default"].global.t("comment.replyTo", [
                    null === (e = Xe.parentCreatedBy) || void 0 === e
                      ? void 0
                      : e.name,
                  ])
            : v["default"].global.t("comment.writeComment");
        }),
        p = (0, l.ref)(!1),
        f = function () {
          return (0, o.mG)(void 0, void 0, void 0, function () {
            var t, n;
            return (0, o.Jh)(this, function (o) {
              switch (o.label) {
                case 0:
                  return p.value
                    ? [2]
                    : ((p.value = !0),
                      (t = r().cloneDeep(Xe)),
                      (n = t.commentId),
                      t.parentId || delete t.parentId,
                      delete t.parentCreatedBy,
                      delete t.commentId,
                      [4, u.ZP.commentsReply(Ke.activityId, n, t)]);
                case 1:
                  return (
                    o.sent(),
                    a(),
                    "question" !== e.type ? [3, 3] : [4, it([e.id])]
                  );
                case 2:
                  return (
                    o.sent(),
                    (e.replyCount = Ke.questionReplies[e.id].length),
                    (p.value = !1),
                    [3, 5]
                  );
                case 3:
                  return [4, rt(n, !0)];
                case 4:
                  (o.sent(),
                    (e.replyCount =
                      Ke.repliesPagesInfo[e.id].total || e.replyCount + 1),
                    (p.value = !1),
                    (o.label = 5));
                case 5:
                  return [2];
              }
            });
          });
        };
      return {
        postReplyPayLoad: Xe,
        replyHandleClick: i,
        replyPost: f,
        setAnonymous: s,
        canPost: m,
        isEditing: c,
        replyPayLoadReset: a,
        placeholder: d,
        loading: p,
      };
    },
    pt = function () {
      var e = (0, Le.tv)(),
        t = (0, m.Xm)(),
        n = (0, c.y)(),
        i = (0, E.xt)().isInstructor,
        a = Ct();
      (a.registerEvent(), (0, qe.B)(a.unregisterEvent));
      var s = (0, l.computed)(function () {
          return t.value.canSubmitQuestion;
        }),
        f = function (t, n) {
          s.value
            ? ((null === n || void 0 === n ? void 0 : n.inFullScreen) &&
                Me.Z.emit("toggle-fullscreen"),
              a.pause(),
              e.push({
                name: ze.q.CommentQuestion,
                extData: { activityInfo: (0, l.toRaw)(t), player: a },
              }))
            : He.warn("can not go to question page!!!");
        },
        y = function () {
          return (0, o.mG)(void 0, void 0, void 0, function () {
            var e, t;
            return (0, o.Jh)(this, function (n) {
              switch (n.label) {
                case 0:
                  return [4, u.ZP.getActivityUploadReferences(Ke.activityId)];
                case 1:
                  return (
                    (e = n.sent()),
                    (t = [
                      "doc",
                      "docx",
                      "ppt",
                      "pptx",
                      "xls",
                      "xlsx",
                      "csv",
                      "pdf",
                    ]),
                    (We.value = e.filter(function (e) {
                      return (
                        "materialactivity" !== e.parentType ||
                        t.includes(d.ET.getUploadFileNamePostfix(e.upload.name))
                      );
                    })),
                    We.value.length > 0 &&
                      (et && r().find(We.value, { id: et })
                        ? (Je.value = et)
                        : ((Je.value = We.value[0].id), (et = 0))),
                    [2]
                  );
              }
            });
          });
        },
        g = function (e) {
          return (0, o.mG)(void 0, void 0, void 0, function () {
            var t, n;
            return (0, o.Jh)(this, function (i) {
              switch (i.label) {
                case 0:
                  return e
                    ? [4, u.ZP.getCommentsPageCount(Ke.activityId, e)]
                    : [2];
                case 1:
                  return (
                    (t = i.sent().total),
                    (Ke.questionCountStats = (0, o.pi)(
                      (0, o.pi)({}, Ke.questionCountStats),
                      ((n = {}), (n[e] = t), n),
                    )),
                    [2]
                  );
              }
            });
          });
        },
        _ = function () {
          return (0, o.mG)(void 0, void 0, void 0, function () {
            return (0, o.Jh)(this, function (e) {
              switch (e.label) {
                case 0:
                  return [
                    4,
                    Promise.all(
                      We.value.map(function (e) {
                        return g(e.id);
                      }),
                    ),
                  ];
                case 1:
                  return (e.sent(), [2]);
              }
            });
          });
        },
        C = function (e) {
          return (0, o.mG)(void 0, void 0, void 0, function () {
            var t, n, i, l, a, r, s;
            return (0, o.Jh)(this, function (o) {
              switch (o.label) {
                case 0:
                  return (
                    (t = {
                      referrer_id: Je.value,
                      referrer_type: "upload_reference",
                      type: "question",
                    }),
                    nt.includes(Ke.activityType) &&
                      ((t.referrer_id = null),
                      (t.referrer_type = Ke.activityType)),
                    Ye.value && (t["location"] = Ye.value),
                    (n = {
                      page: e ? 1 : Ke.questionPageInfo.page + 1,
                      page_size: Ke.questionPageInfo.pageSize,
                      conditions: t,
                    }),
                    [4, u.ZP.getCommentsList(Ke.activityId, n)]
                  );
                case 1:
                  return (
                    (i = o.sent()),
                    (l = i.comments),
                    (a = i.pages),
                    (r = i.total),
                    (s = i.page),
                    (Ke.questionPageInfo.page = s),
                    (Ke.questionPageInfo.total = r),
                    (Ke.questionPageInfo.pages = a),
                    [
                      4,
                      Promise.all([
                        it(
                          l.map(function (e) {
                            return e.id;
                          }),
                        ),
                        lt(l),
                      ]),
                    ]
                  );
                case 2:
                  return (
                    o.sent(),
                    (Ke.questionPageInfo.comments = e
                      ? l
                      : (Ke.questionPageInfo.comments || []).concat(l)),
                    [2]
                  );
              }
            });
          });
        },
        h = function () {
          return (0, o.mG)(void 0, void 0, void 0, function () {
            var e;
            return (0, o.Jh)(this, function (t) {
              switch (t.label) {
                case 0:
                  return Je.value
                    ? [4, u.ZP.getCommentsPageCount(Ke.activityId, Je.value)]
                    : [2];
                case 1:
                  return ((e = t.sent().pageStats), (Ke.pageStats = e), [2]);
              }
            });
          });
        },
        k = function () {
          return (0, o.mG)(void 0, void 0, void 0, function () {
            return (0, o.Jh)(this, function (e) {
              switch (e.label) {
                case 0:
                  return [4, y()];
                case 1:
                  return (
                    e.sent(),
                    Je.value || nt.includes(Ke.activityType)
                      ? [4, Promise.all([C(!0), h(), _()])]
                      : [3, 3]
                  );
                case 2:
                  (e.sent(), (e.label = 3));
                case 3:
                  return [2];
              }
            });
          });
        },
        I = function (e) {
          return (0, o.mG)(void 0, void 0, void 0, function () {
            return (0, o.Jh)(this, function (t) {
              return (
                p["default"].showConfirm(
                  v["default"].global.t("comment.deleteConfirm"),
                  function () {
                    return (0, o.mG)(void 0, void 0, void 0, function () {
                      var t, n, i;
                      return (0, o.Jh)(this, function (o) {
                        switch (o.label) {
                          case 0:
                            return [4, u.ZP.deleteComment(Ke.activityId, e.id)];
                          case 1:
                            return (
                              o.sent(),
                              [
                                4,
                                p["default"].showMessage(
                                  v["default"].global.t("common.deleteSuccess"),
                                  { timeout: 2e3 },
                                ),
                              ]
                            );
                          case 2:
                            return (
                              (t = o.sent()),
                              (n = r().findIndex(Ke.questionPageInfo.comments, {
                                id: e.id,
                              })),
                              -1 !== n &&
                                (null === (i = Ke.questionPageInfo.comments) ||
                                  void 0 === i ||
                                  i.splice(n, 1)),
                              [4, Promise.all([C(!0), h(), ot(), g(Je.value)])]
                            );
                          case 3:
                            return (o.sent(), [4, t.onDidDismiss()]);
                          case 4:
                            return (o.sent(), [2]);
                        }
                      });
                    });
                  },
                ),
                [2]
              );
            });
          });
        },
        b = function (e) {
          var t = [
            {
              text: v["default"].global.t("common.delete"),
              role: "destructive",
              handler: function () {
                I(e);
              },
            },
            { text: v["default"].global.t("common.cancel"), role: "cancel" },
          ];
          Se.BO.create({ cssClass: "action-sheet", buttons: t }).then(
            function (e) {
              return e.present();
            },
          );
        },
        B = function (e) {
          var t;
          if (!ct.value.canDelete) return !1;
          if (e.createdBy.id === De.Z.userID) return !0;
          var o = n.getEnrollmentRole(
            null === (t = null === e || void 0 === e ? void 0 : e.createdBy) ||
              void 0 === t
              ? void 0
              : t.courseRoles,
          );
          return !(!n.isCourseStudentViewpoint(o) || !i.value);
        },
        w = function (e, t) {
          return (0, o.mG)(void 0, void 0, void 0, function () {
            return (0, o.Jh)(this, function (n) {
              return (
                p["default"].showConfirm(
                  v["default"].global.t("comment.deleteConfirm"),
                  function () {
                    return (0, o.mG)(void 0, void 0, void 0, function () {
                      return (0, o.Jh)(this, function (n) {
                        switch (n.label) {
                          case 0:
                            return [4, u.ZP.deleteReply(Ke.activityId, t.id)];
                          case 1:
                            return (
                              n.sent(),
                              [
                                4,
                                p["default"].showMessage(
                                  v["default"].global.t("common.deleteSuccess"),
                                  { timeout: 2e3 },
                                ),
                              ]
                            );
                          case 2:
                            return (n.sent(), [4, it([e.id])]);
                          case 3:
                            return (
                              n.sent(),
                              (e.replyCount = Ke.questionReplies[e.id].length),
                              [2]
                            );
                        }
                      });
                    });
                  },
                ),
                [2]
              );
            });
          });
        },
        T = function (e, t) {
          var n = [
            {
              text: v["default"].global.t("common.delete"),
              role: "destructive",
              handler: function () {
                w(e, t);
              },
            },
            { text: v["default"].global.t("common.cancel"), role: "cancel" },
          ];
          Se.BO.create({ cssClass: "action-sheet", buttons: n }).then(
            function (e) {
              return e.present();
            },
          );
        },
        N = function (e, t) {
          if (!ct.value.canPlusOne) return !1;
          e.createdBy.id !== De.Z.userID
            ? at(e, t)
            : p["default"].showMessage(
                v["default"].global.t("comment.plusOneSelfQuestion"),
              );
        },
        M = "replyQuestionModal",
        V = function (e, t) {
          return (
            void 0 === t && (t = !1),
            (0, o.mG)(void 0, void 0, void 0, function () {
              return (0, o.Jh)(this, function (n) {
                switch (n.label) {
                  case 0:
                    return (
                      (Ge.value = !0),
                      [
                        4,
                        p["default"].showModal(
                          $,
                          {
                            question: e,
                            activityId: Ke.activityId,
                            showBack: t,
                            close: S,
                          },
                          "reply-question-modal",
                          {
                            backdropDismiss: !1,
                            enableMultipleAnimation: !0,
                            id: M,
                          },
                        ),
                      ]
                    );
                  case 1:
                    return (n.sent(), [2]);
                }
              });
            })
          );
        },
        S = function () {
          (p["default"].closeModalById(M), (Ge.value = !1));
        };
      return {
        enableMaterialQuestion: s,
        goToCommentQuestion: f,
        currentReferrerId: Je,
        activityUploadReferrers: We,
        getUploadReferences: y,
        getQuestionList: C,
        getQuestionPageCount: h,
        getQuestionCountByReferrerId: g,
        initQuestion: k,
        triggerMoreAction: b,
        canClickMoreAction: B,
        replyTriggerMoreAction: T,
        questionPlusOneOrCancel: N,
        showReplyQuestionModal: V,
      };
    },
    vt = function () {
      var e = pt(),
        t = e.getQuestionList,
        n = e.getQuestionPageCount,
        i = "questionFilterReferrerModal",
        l = function (e) {
          ((Je.value = e.id), (et = e.id), r());
        },
        a = function () {
          return (0, o.mG)(void 0, void 0, void 0, function () {
            var e;
            return (0, o.Jh)(this, function (t) {
              switch (t.label) {
                case 0:
                  return [
                    4,
                    p["default"].showModal(X, {}, "filter-referrer-modal", {
                      backdropDismiss: !1,
                      id: i,
                    }),
                  ];
                case 1:
                  return ((e = t.sent()), [4, e.onDidDismiss()]);
                case 2:
                  return (t.sent(), [2]);
              }
            });
          });
        },
        r = function () {
          (p["default"].closeModalById(i, { action: _e.XL.Confirm }),
            t(!0),
            n());
        };
      return {
        questionCountStats: Ke.questionCountStats,
        currentReferrerId: Je,
        activityUploadReferrers: We,
        closeModal: r,
        openModal: a,
        changeCurrentReferrerId: l,
      };
    },
    ft = function () {
      var e = pt(),
        t = e.getQuestionList,
        n = e.getQuestionPageCount,
        i = "QuestionByPageModal",
        a = function (e, t) {
          return (0, o.mG)(void 0, void 0, void 0, function () {
            var l;
            return (0, o.Jh)(this, function (o) {
              switch (o.label) {
                case 0:
                  return (
                    (Je.value = e),
                    n(),
                    $e.Z.lockOrientation("PORTRAIT_PRIMARY"),
                    [
                      4,
                      p["default"].showModal(
                        ge,
                        { activityId: Ke.activityId, location: t },
                        "reply-question-modal",
                        {
                          backdropDismiss: !1,
                          id: i,
                          enableMultipleAnimation: !0,
                        },
                      ),
                    ]
                  );
                case 1:
                  return ((l = o.sent()), [4, l.onDidDismiss()]);
                case 2:
                  return (o.sent(), $e.Z.unlockOrientation(), [2]);
              }
            });
          });
        },
        r = function () {
          return (0, o.mG)(void 0, void 0, void 0, function () {
            return (0, o.Jh)(this, function (e) {
              switch (e.label) {
                case 0:
                  return [4, t(!0)];
                case 1:
                  return (e.sent(), [2]);
              }
            });
          });
        },
        s = function () {
          return (0, o.mG)(void 0, void 0, void 0, function () {
            return (0, o.Jh)(this, function (e) {
              switch (e.label) {
                case 0:
                  return [4, t(!1)];
                case 1:
                  return (e.sent(), [2]);
              }
            });
          });
        },
        c = function (e) {
          return (0, o.mG)(void 0, void 0, void 0, function () {
            return (0, o.Jh)(this, function (t) {
              switch (t.label) {
                case 0:
                  return ((Ye.value = e), [4, r()]);
                case 1:
                  return (t.sent(), [2]);
              }
            });
          });
        },
        u = function () {
          (c(0), p["default"].closeModalById(i, { action: _e.XL.Confirm }));
        },
        m = (0, l.toRefs)(Ke).pageStats;
      return {
        currentLocation: Ye,
        pageStats: m,
        questionPageInfo: Ke.questionPageInfo,
        openModal: a,
        changeLocation: c,
        cancel: u,
        loadMoreData: s,
      };
    },
    yt = (0, l.reactive)(re.ZP.createQuestionForm("", { anonymous: !1 })),
    gt = function () {
      var e = "createQuestionModal",
        t = function (t, n, i) {
          return (0, o.mG)(void 0, void 0, void 0, function () {
            var l;
            return (0, o.Jh)(this, function (o) {
              switch (o.label) {
                case 0:
                  return (
                    (yt.content = ""),
                    (yt.referrerId = t),
                    (yt.anonymous = !1),
                    (Je.value = t),
                    c(n),
                    $e.Z.lockOrientation("PORTRAIT_PRIMARY"),
                    [
                      4,
                      p["default"].showModal(
                        Ee,
                        { maximum: i, activityId: Ke.activityId, modalId: e },
                        "question-modal",
                        { id: e },
                      ),
                    ]
                  );
                case 1:
                  return ((l = o.sent()), [4, l.onDidDismiss()]);
                case 2:
                  return (o.sent(), $e.Z.unlockOrientation(), [2]);
              }
            });
          });
        },
        n = function () {
          yt.anonymous = !yt.anonymous;
        },
        i = (0, l.computed)(function () {
          return (
            !!Ke.activityType &&
            ["online_video", "lesson", "link"].includes(Ke.activityType)
          );
        }),
        a = /(\d+):(\d+):(\d+)/,
        r = ":",
        s = function (e) {
          return a.test(e)
            ? e
            : re.ZP.numberToTime(Number(e))
                .map(function (e) {
                  return String(e).length < 2 ? "0".concat(e) : "".concat(e);
                })
                .join(r);
        },
        c = function (e) {
          i.value ? (yt.location = s(e)) : (yt.location = e);
        },
        m = function (e) {
          var t = v["default"].global.t("comment.selectPage"),
            n = Ne.pR(e + 1, 1, 1);
          Ne.$J(
            [
              n.map(function (e) {
                return (
                  (e.value = v["default"].global.t("comment.currentPage", {
                    n: e.value,
                  })),
                  e
                );
              }),
            ],
            t,
            Number(yt.location),
            function (e) {
              c(e.id);
            },
          );
        },
        d = function (e) {
          var t = 1,
            n = 1,
            o = 1;
          if (-1 === e) ((t = 100), (n = 60), (o = 60));
          else {
            var i = re.ZP.numberToTime(e),
              l = i[0],
              a = i[1],
              r = i[2];
            ((t = l + 1), (n = l > 1 ? 60 : a + 1), (o = a > 1 ? 60 : r + 1));
          }
          var s = Ne.pR(t).map(function (e) {
              return {
                id: e.id,
                realvalue: e.value,
                value: ""
                  .concat(e.value)
                  .concat(v["default"].global.t("moment.h")),
              };
            }),
            c = Ne.pR(n).map(function (e) {
              return {
                id: e.id,
                realvalue: e.value,
                value: ""
                  .concat(e.value)
                  .concat(v["default"].global.t("moment.m")),
              };
            }),
            u = Ne.pR(o).map(function (e) {
              return {
                id: e.id,
                realvalue: e.value,
                value: ""
                  .concat(e.value)
                  .concat(v["default"].global.t("moment.s")),
              };
            });
          return [s, c, u];
        },
        f = function (e) {
          var t = s(yt.location)
            .split(r)
            .map(function (e) {
              return Number(e);
            });
          Ne.Yn(
            d(e),
            v["default"].global.t("comment.selectTime"),
            t,
            function () {
              for (var t = [], n = 0; n < arguments.length; n++)
                t[n] = arguments[n];
              var o = t[0],
                i = t[1],
                l = t[2],
                a = ""
                  .concat(o.realvalue)
                  .concat(r)
                  .concat(i.realvalue)
                  .concat(r)
                  .concat(l.realvalue);
              if (e > 0) {
                var s = re.ZP.timeToNumber(a);
                if (s > e)
                  return void p["default"].showMessage(
                    v["default"].global.t("comment.exceedingDuration"),
                  );
              }
              c(a);
            },
            "three-columns-picker",
          );
        },
        y = pt(),
        g = y.getQuestionList,
        _ = y.getQuestionPageCount,
        C = y.getQuestionCountByReferrerId,
        h = function (e) {
          return (0, o.mG)(void 0, void 0, void 0, function () {
            var t, n;
            return (0, o.Jh)(this, function (o) {
              switch (o.label) {
                case 0:
                  return (
                    (t = e || yt),
                    nt.includes(Ke.activityType)
                      ? ((t.referrerType = Ke.activityType),
                        (t.referrerId = null))
                      : ((t.referrerType = "upload_reference"),
                        (t.referrerId = Je.value)),
                    [4, u.ZP.addActivityComment(Ke.activityId, t)]
                  );
                case 1:
                  return (
                    (n = o.sent()),
                    n && Promise.all([g(!0), _(), ot(), C(Je.value)]),
                    [2, n]
                  );
              }
            });
          });
        },
        k = (0, l.ref)(!1),
        I = function () {
          return (0, o.mG)(void 0, void 0, void 0, function () {
            var t, n;
            return (0, o.Jh)(this, function (o) {
              switch (o.label) {
                case 0:
                  return k.value ? [2] : [4, p["default"].showLoading()];
                case 1:
                  return ((t = o.sent()), (k.value = !0), [4, h()]);
                case 2:
                  return ((n = o.sent()), [4, t.dismiss()]);
                case 3:
                  return (
                    o.sent(),
                    n
                      ? (p["default"].closeModalById(e),
                        p["default"].showMessage(
                          v["default"].global.t("comment.saveSuccessfully"),
                          { timeout: 2e3 },
                        ),
                        (k.value = !1))
                      : (p["default"].showMessage(
                          v["default"].global.t("comment.saveFailed"),
                          { timeout: 2e3 },
                        ),
                        (k.value = !1)),
                    [2]
                  );
              }
            });
          });
        };
      return {
        postCreateQuestionPayload: yt,
        callAddQuestionApi: h,
        showQuestionCreateModal: t,
        setAnonymous: n,
        openLocationPageSelector: m,
        openLocationDurationSelector: f,
        sendQuestionComment: I,
        sendLoading: k,
      };
    },
    _t = function (e) {
      var t = (0, m.Xm)(),
        n = (0, l.computed)(function () {
          return t.value.canSubmitComment;
        });
      e && Ke.activityId !== e && tt();
      var i = function (e) {
          Ke.activityId !== e.id &&
            ((Ke.activityId = e.id),
            "online_video" === e.type && e.data.link
              ? (Ke.activityType = "link")
              : (Ke.activityType = e.type),
            p());
        },
        a = (0, l.computed)(function () {
          return (
            !!Ke.activityType &&
            ["online_video", "lesson", "link"].includes(Ke.activityType)
          );
        }),
        r = (0, l.computed)(function () {
          return "link" === Ke.activityType;
        }),
        s = (0, l.computed)(function () {
          return nt.includes(Ke.activityType);
        }),
        c = ut().getForumList,
        u = pt().initQuestion,
        d = !1,
        p = function () {
          return (0, o.mG)(void 0, void 0, void 0, function () {
            return (0, o.Jh)(this, function (e) {
              switch (e.label) {
                case 0:
                  return Ke.activityId
                    ? d
                      ? [2]
                      : ((d = !0), [4, Promise.all([ot(), u(), c(!0)])])
                    : (Ze.error("refresh comment error: activityId is null"),
                      [2]);
                case 1:
                  return (e.sent(), (d = !1), [2]);
              }
            });
          });
        },
        v = function (e) {
          Ge.value = e;
        },
        f = (0, l.computed)(function () {
          return !Ge.value && Xe.commentId && Xe.commentId > 0;
        });
      return {
        activityCommentsInfo: Ke,
        refreshData: p,
        changeShowReplyModal: v,
        isShowCommentTeleport: f,
        setCommentActivity: i,
        isVideoOrAudioActivity: a,
        isOnlineLinkActivity: r,
        notNeedReferrerId: s,
        resetActivityCommentsInfo: tt,
        enableMaterialComment: n,
      };
    },
    Ct = function () {
      var e = (0, l.ref)(null),
        t = (0, l.ref)(null),
        n = (0, l.ref)(!1),
        o = function (t) {
          ((e.value = t), (n.value = !1));
        },
        i = function (e) {
          ((t.value = e), (n.value = !0));
        },
        a = (0, l.computed)(function () {
          return n.value ? Boolean(t.value) : Boolean(e.value);
        }),
        r = function (o) {
          var i;
          a.value &&
            (n.value
              ? (t.value.currentTime = o)
              : null === (i = e.value) || void 0 === i || i.currentTime(o));
        },
        s = function () {
          var o = 0;
          return a.value
            ? ((o = n.value ? t.value.currentTime : e.value.currentTime()), o)
            : o;
        },
        c = function () {
          var o = 0;
          return a.value
            ? (n.value
                ? (o = t.value.duration)
                : ((o = e.value.duration()), isNaN(o) && (o = 0)),
              o)
            : o;
        },
        u = function () {
          var o, i;
          a.value &&
            (n.value
              ? null === (o = t.value) || void 0 === o || o.play()
              : null === (i = e.value) || void 0 === i || i.play());
        },
        m = function () {
          var o, i;
          a.value &&
            (n.value
              ? null === (o = t.value) || void 0 === o || o.pause()
              : null === (i = e.value) || void 0 === i || i.pause());
        },
        d = function () {
          (Me.Z.on(Ve.rr, o), Me.Z.on(Ve.fD, i));
        },
        p = function () {
          (Me.Z.off(Ve.rr, o), Me.Z.off(Ve.fD, i));
        };
      return {
        isExist: a,
        getCurrentTime: s,
        setCurrentTime: r,
        play: u,
        pause: m,
        getDuration: c,
        registerEvent: d,
        unregisterEvent: p,
      };
    },
    ht = (0, l.ref)(0),
    kt = function (e) {
      void 0 === e && (e = []);
      var t = (0, xe.z)().showVideoTopic,
        n = (0, Fe.Y)().enableChapter,
        o = (0, Oe.$)().enableVerbatim,
        i = (0, l.computed)(function () {
          var i = [];
          return (
            i.push(v["default"].global.t("comment.description")),
            n.value
              ? i.push(v["default"].global.t("player.chapter.title"))
              : i.push(""),
            o.value
              ? i.push(v["default"].global.t("player.caption.verbatim"))
              : i.push(""),
            t.value
              ? i.push(v["default"].global.t("player.topic.title"))
              : i.push(""),
            i.filter(function (e) {
              return "" !== e;
            }).length > 1
              ? i.concat(e)
              : []
          );
        }),
        a = function (e) {
          ht.value = e;
        };
      return { slideTabs: i, slideTab: ht, changeSlideTab: a };
    },
    It = function (e) {
      var t = d.ET.getUploadFileNamePostfix(e.name),
        n = "other";
      return (
        ["doc", "ppt", "xls", "docx", "pptx", "xlsx", "pdf"].includes(t) &&
          (n = t),
        n
      );
    },
    bt = function (e, t) {
      if ((void 0 === t && (t = !1), t)) e.$el.scrollToTop();
      else {
        var n = document.querySelector("#activityInfoDefaultSlot");
        if (n) {
          var o = !(0, d.Ug)(n, !0);
          if (o) {
            var i = n.offsetTop,
              l = n.nextElementSibling;
            if (l) {
              var a = window.getComputedStyle(l, null).height.replace("px", "");
              i += Math.ceil(Number(a));
            }
            e.$el.scrollToPoint(0, i);
          }
        }
      }
    };
};
