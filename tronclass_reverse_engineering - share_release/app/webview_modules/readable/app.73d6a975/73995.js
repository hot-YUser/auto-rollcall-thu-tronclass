// Source: decompiled/web-modules-acorn/app.73d6a975/73995.js
// Webpack module id: 73995
const __webpack_module_73995 = function (e, t, n) {
  "use strict";
  (n.r(t),
    n.d(t, {
      default: function () {
        return Kr;
      },
      initStore: function () {
        return Cr;
      },
    }));
  var o,
    i,
    r = n(25979),
    a =
      (n(57658),
      n(26699),
      n(38862),
      n(9653),
      n(41539),
      n(78783),
      n(33948),
      n(70655)),
    s = n(67462),
    l = n(5877),
    c = n(89564),
    u = n(28249),
    d = n(39626),
    p = n(42132),
    m = n(51688),
    f = n(28838),
    v = n(67674),
    g = n(31239),
    h = n(88519),
    C = n(31443),
    y = n(62328),
    A = n(63621),
    w = n(23442),
    b = n(29081),
    E = n(77386),
    S = n(9369),
    T = n(53366),
    _ = n(57133),
    I = n(82747),
    L = n(25108),
    k = function () {
      return (0, a.mG)(void 0, void 0, void 0, function () {
        var e, t;
        return (0, a.Jh)(this, function (n) {
          switch (n.label) {
            case 0:
              if (!(0, h.B)()) return [3, 7];
              ((e = !1), (n.label = 1));
            case 1:
              return (
                n.trys.push([1, , 3, 7]),
                (t = Boolean),
                [4, d.DataStorage.getItem("jpush_app_installed")]
              );
            case 2:
              return ((e = t.apply(void 0, [n.sent()])), [3, 7]);
            case 3:
              return e ? [3, 6] : [4, g.Z.addCountEvent("install", C.x())];
            case 4:
              return (
                n.sent(),
                [
                  4,
                  d.DataStorage.setItem(
                    "jpush_app_installed",
                    String(new Date().getTime()),
                  ),
                ]
              );
            case 5:
              (n.sent(), (n.label = 6));
            case 6:
              return [7];
            case 7:
              return [2];
          }
        });
      });
    },
    P =
      ((o = {}),
      (o[s.rQ] = function (e, t) {
        var n = e.commit,
          o = e.dispatch;
        return (0, a.mG)(this, void 0, void 0, function () {
          return (0, a.Jh)(this, function (e) {
            return (
              t && ["tw", "hk", "mo"].includes(t)
                ? ((c.Z.apiPrefix.api = l.f7), (c.Z.apiPrefix.ntf = l.E2))
                : ((c.Z.apiPrefix.api = l.cI), (c.Z.apiPrefix.ntf = l.x3)),
              (c.Z.area = t),
              (c.Z.org = null),
              window.APPRuntime.setAreaInfo(c.Z),
              o(s.lr, c.Z, { root: !0 }),
              n(s.rQ, t),
              m.Z.emit(f.Xt),
              [2]
            );
          });
        });
      }),
      (o[s.j9] = function (e, t) {
        var n = e.commit,
          o = e.dispatch;
        return (0, a.mG)(this, void 0, void 0, function () {
          var e;
          return (0, a.Jh)(this, function (i) {
            switch (i.label) {
              case 0:
                return (
                  window.APPRuntime.LOGIN_HIDDEN_AREA &&
                    ((c.Z.area =
                      (null === t || void 0 === t ? void 0 : t.area) || null),
                    window.APPRuntime.setAreaInfo(c.Z)),
                  (c.Z.org = t),
                  [4, o(s.lr, c.Z, { root: !0 })]
                );
              case 1:
                return (
                  i.sent(),
                  (e = (0, u.lB)(t)),
                  L.log("loginType:", e),
                  (c.Z.loginType = e),
                  n(s.j9, { org: t, loginType: e }),
                  t ? [4, (0, v.g)(t.deliveryOrg)] : [3, 3]
                );
              case 2:
                (i.sent(), (0, y.F)(t.deliveryOrg), (i.label = 3));
              case 3:
                return (
                  (window.APPRuntime.ORG = JSON.parse(
                    JSON.stringify(t || null),
                  )),
                  m.Z.emit(f.Xt),
                  [2]
                );
            }
          });
        });
      }),
      (o[s.ym] = function (e, t) {
        var n = e.commit,
          o = e.dispatch;
        return (0, a.mG)(this, void 0, void 0, function () {
          return (0, a.Jh)(this, function (e) {
            return (
              (c.Z.account = t.account),
              o(s.lr, c.Z, { root: !0 }),
              n(s.ym, t),
              [2]
            );
          });
        });
      }),
      (o[s.Fw] = function (e, t) {
        var n = e.commit,
          o = e.dispatch;
        return (0, a.mG)(this, void 0, void 0, function () {
          var e = this;
          return (0, a.Jh)(this, function (i) {
            switch (i.label) {
              case 0:
                return b.Z.loggedInActionExecuted
                  ? [2]
                  : ((b.Z.loggedInActionExecuted = !0),
                    (c.Z.isLogin = !0),
                    (c.Z.userID = Number(t)),
                    k(),
                    n(s.Fw),
                    [
                      4,
                      Promise.all([
                        o(s.P4, void 0, { root: !0 }),
                        (function () {
                          return (0, a.mG)(e, void 0, void 0, function () {
                            var e;
                            return (0, a.Jh)(this, function (t) {
                              switch (t.label) {
                                case 0:
                                  return (
                                    (e = c.Z.settings),
                                    [4, (0, _.P)(c.Z.org.id)]
                                  );
                                case 1:
                                  return (
                                    (e.supportedLangs = t.sent()),
                                    [4, I.Z.setAppLanguage()]
                                  );
                                case 2:
                                  return (t.sent(), [2]);
                              }
                            });
                          });
                        })(),
                      ]),
                    ]);
              case 1:
                return (i.sent(), [4, o(s.lr, c.Z, { root: !0 })]);
              case 2:
                return (i.sent(), m.Z.emit(f.Jj), [2]);
            }
          });
        });
      }),
      (o[s.Nv] = function (e) {
        var t = e.commit,
          n = e.dispatch;
        return (0, a.mG)(this, void 0, void 0, function () {
          return (0, a.Jh)(this, function (e) {
            switch (e.label) {
              case 0:
                return (
                  d.AppState.destroy(),
                  S.Z.destroy(),
                  A.ZP.teardownPubSub(),
                  p.ZP.reset(),
                  w.g.reset(),
                  T.Z.destroy(),
                  [4, d.PushNotification.reset()]
                );
              case 1:
                return (e.sent(), [4, E.Z.processLogout()]);
              case 2:
                return (
                  e.sent(),
                  (c.Z.isLogin = !1),
                  (c.Z.userID = void 0),
                  (c.Z.sessionID = void 0),
                  (c.Z.settings.supportedLangs = null),
                  [4, n(s.lr, c.Z, { root: !0 })]
                );
              case 3:
                return (
                  e.sent(),
                  t(s.Nv),
                  [4, d.CacheStorage.removeItem("courseFaceCheckMark")]
                );
              case 4:
                return (
                  e.sent(),
                  localStorage.removeItem("loginFaceCheck"),
                  [2]
                );
            }
          });
        });
      }),
      (o[s.VB] = function (e, t) {
        var n = e.commit;
        return (0, a.mG)(this, void 0, void 0, function () {
          return (0, a.Jh)(this, function (e) {
            return ((c.Z.loginType = t), n(s.VB, t), [2]);
          });
        });
      }),
      o),
    B = P,
    R = n(96486),
    x = n.n(R),
    O =
      ((i = {}),
      (i[s.rQ] = function (e, t) {
        ((e.area = t), (e.org = null), (e.loginType = "normal"));
      }),
      (i[s.j9] = function (e, t) {
        ((e.org = x().cloneDeep(t.org)), (e.loginType = t.loginType));
      }),
      (i[s.ym] = function (e, t) {
        e.user.account = t.account;
      }),
      (i[s.Fw] = function (e) {
        e.isLogin = !0;
      }),
      (i[s.Nv] = function (e) {
        e.isLogin = !1;
      }),
      (i[s.VB] = function (e, t) {
        e.loginType = t;
      }),
      i),
    M = O,
    V = {
      area: c.Z.area,
      org: c.Z.org,
      isLogin: !1,
      user: { account: "" },
      loginType: "normal",
    },
    N = V,
    D =
      (n(96647),
      n(39714),
      n(94986),
      {
        isDefaultOrg: function (e) {
          var t,
            n,
            o =
              null ===
                (n = null === (t = e.org) || void 0 === t ? void 0 : t.flag) ||
              void 0 === n
                ? void 0
                : n.toString(2);
          return !!o && o.lastIndexOf("1") === o.length - 1;
        },
      }),
    Z = D,
    U = { namespaced: !0, state: N, actions: B, mutations: M, getters: Z },
    H = U,
    F = (n(2707), n(54747), n(88376)),
    G = n(30381),
    z = n.n(G),
    Q = (n(21249), n(15063)),
    j = n(7517),
    q = n(88255);
  function J(e) {
    return (0, a.mG)(this, void 0, Promise, function () {
      var t;
      return (0, a.Jh)(this, function (n) {
        switch (n.label) {
          case 0:
            return [4, Promise.all(e.map(_.Z.getCourseCover))];
          case 1:
            return (
              (t = n.sent()),
              [
                2,
                x()(t)
                  .map(function (e) {
                    var t = e.data;
                    return t;
                  })
                  .keyBy(function (e) {
                    var t = e.id;
                    return t;
                  })
                  .mapValues(function (e) {
                    var t = e.cover;
                    return (0, q.zP)(t);
                  })
                  .value(),
              ]
            );
        }
      });
    });
  }
  function W() {
    var e;
    return (0, a.mG)(this, void 0, Promise, function () {
      var t, n, o;
      return (0, a.Jh)(this, function (i) {
        switch (i.label) {
          case 0:
            return [4, _.Z.getOngoingRollcalls()];
          case 1:
            return (
              (t = i.sent().data),
              (n =
                null !== (e = Q.N0.toClasses(t, j.xR, "rollcalls")) &&
                void 0 !== e
                  ? e
                  : []),
              [
                4,
                J(
                  n.map(function (e) {
                    return e.courseId;
                  }),
                ),
              ]
            );
          case 2:
            return (
              (o = i.sent()),
              [
                2,
                x().map(n, function (e) {
                  return ((e.courseCover = o[e.courseId]), e);
                }),
              ]
            );
        }
      });
    });
  }
  var X,
    Y,
    K,
    $,
    ee,
    te,
    ne,
    oe,
    ie,
    re,
    ae,
    se,
    le,
    ce,
    ue,
    de,
    pe,
    me,
    fe,
    ve,
    ge,
    he,
    Ce,
    ye,
    Ae,
    we,
    be,
    Ee,
    Se,
    Te,
    _e,
    Ie,
    Le,
    ke,
    Pe,
    Be,
    Re,
    xe,
    Oe,
    Me,
    Ve,
    Ne,
    De,
    Ze = function () {
      return (0, a.mG)(void 0, void 0, void 0, function () {
        var e, t;
        return (0, a.Jh)(this, function (n) {
          switch (n.label) {
            case 0:
              return (
                null === (t = c.Z.org) || void 0 === t ? void 0 : t.rmsUrl
              )
                ? [4, _.Z.getRmsVersion()]
                : [2, ""];
            case 1:
              return (
                (e = n.sent()),
                (c.Z.rmsVersion = e),
                (window.APPRuntime.rmsVersion = e),
                [2, e]
              );
          }
        });
      });
    },
    Ue = function () {
      return (0, a.mG)(void 0, void 0, void 0, function () {
        var e;
        return (0, a.Jh)(this, function (t) {
          switch (t.label) {
            case 0:
              return [4, _.Z.getLMSVersion()];
            case 1:
              return (
                (e = t.sent() || "0.0.1"),
                (c.Z.lmsVersion = e),
                (window.APPRuntime.lmsVersion = e),
                m.Z.emit(f.qe, e),
                [2, e]
              );
          }
        });
      });
    },
    He = n(59109),
    Fe = n(29511),
    Ge =
      ((X = {}),
      (X[s.Vv] = function (e) {
        var t = e.commit,
          n = e.dispatch,
          o = (0, He.T)(Fe.k.HOME_NOTIFICATION),
          i = (0, He.T)(Fe.k.HOME_TODO);
        (o &&
          _.Z.getOrgBulletins({ conditions: {}, page: 1, page_size: 1 }).then(
            function (e) {
              t(s.Vv, { orgBulletins: e });
            },
          ),
          i &&
            _.Z.getTodos().then(function (e) {
              (e &&
                e.sort(function (e, t) {
                  var n = z()(l._o),
                    o = z()(e.endTime ? z()(e.endTime) : n),
                    i = z()(t.endTime ? z()(t.endTime) : n);
                  return e.type === F.jf.pendingSurvey &&
                    t.type !== F.jf.pendingSurvey
                    ? -1
                    : t.type === F.jf.pendingSurvey &&
                        e.type !== F.jf.pendingSurvey
                      ? 1
                      : o.isBefore(i)
                        ? -1
                        : 1;
                }),
                t(s.Vv, { todoList: e || [] }));
            }),
          n(s.Cj));
      }),
      (X[s.Cj] = function (e) {
        var t = e.commit;
        return (0, a.mG)(this, void 0, void 0, function () {
          var e, n;
          return (0, a.Jh)(this, function (o) {
            switch (o.label) {
              case 0:
                return (
                  (e = (0, He.T)(Fe.k.HOME_RECENTLY_VISITED)),
                  e ? [4, _.Z.recentlyVisitedCourses()] : [3, 2]
                );
              case 1:
                if (((n = o.sent()), !n)) return [2];
                (x().forEach(n, function (e, t) {
                  e.updateTime = x().now() - 10 * t;
                }),
                  t(s.Vv, { recentlyVisitedCourses: n }),
                  (o.label = 2));
              case 2:
                return [2];
            }
          });
        });
      }),
      (X[s.gl] = function (e) {
        var t = e.commit;
        return (0, a.mG)(this, void 0, void 0, function () {
          var e;
          return (0, a.Jh)(this, function (n) {
            switch (n.label) {
              case 0:
                return [4, W()];
              case 1:
                return ((e = n.sent()), t(s.gl, e), [2]);
            }
          });
        });
      }),
      X),
    ze = Ge,
    Qe =
      ((Y = {}),
      (Y[s.Vv] = function (e, t) {
        Object.assign(e, t);
      }),
      (Y[s.gl] = function (e, t) {
        e["ongoingRollcalls"] = t;
      }),
      Y),
    je = Qe,
    qe =
      ((K = {}),
      (K[s.VZ] = function (e) {
        return e.notifications;
      }),
      (K[s.Cj] = function (e) {
        return e.recentlyVisitedCourses;
      }),
      (K[s.cR] = function (e) {
        return e.todoList;
      }),
      (K[s.$Y] = function (e) {
        return e.orgBulletins;
      }),
      K),
    Je = qe,
    We = {
      todoList: [],
      recentlyVisitedCourses: [],
      notifications: [],
      init: !1,
      ongoingRollcalls: [],
      orgBulletins: [],
    },
    Xe = We,
    Ye = { namespaced: !0, state: Xe, actions: ze, getters: Je, mutations: je },
    Ke = Ye,
    $e =
      (n(23157),
      n(82526),
      n(41817),
      n(92222),
      n(57327),
      n(69826),
      n(65069),
      n(30541),
      n(87066)),
    et = n(57878),
    tt = n(27954),
    nt = n(47640),
    ot = n(58509),
    it = n(9535),
    rt = n(56022),
    at = n(39920),
    st = n(75370),
    lt = n(30979),
    ct = n(4053),
    ut = n(42886),
    dt = n(99580),
    pt = n(61375),
    mt = n(51573),
    ft = n(85677),
    vt = n(25108),
    gt = rt.Z.get("Course Detail Action"),
    ht =
      (($ = {}),
      ($[s.VH.FETCH_COURSE_INFO] = function (e, t) {
        var n,
          o,
          i,
          r,
          l,
          u,
          d,
          p,
          m,
          f,
          v,
          g,
          h,
          C = e.commit,
          y = e.dispatch,
          A = e.rootState;
        return (0, a.mG)(this, void 0, void 0, function () {
          var e, w, b, E, S, T, _, I, L, k, P, B, R, O, M, V, N;
          return (0, a.Jh)(this, function (a) {
            switch (a.label) {
              case 0:
                ((e = t.courseId),
                  (w = t.accessCode),
                  (b = null),
                  (E = null),
                  (S = null),
                  (T = null),
                  (_ = new ct.tM()),
                  (a.label = 1));
              case 1:
                return (
                  a.trys.push([1, 4, , 5]),
                  [
                    4,
                    Promise.all([
                      $e.Z.get(tt.ZP.getCourseInfo(e)),
                      tt.ZP.getCourseEnrollmentRole(e),
                      $e.Z.get(et.Z.getNavSetting(e)),
                    ]),
                  ]
                );
              case 2:
                return (
                  (N = a.sent()),
                  (b = N[0]),
                  (E = N[1]),
                  (S = N[2]),
                  [
                    4,
                    mt.Z.compatibleCustomRole()
                      ? tt.ZP.getCourseAssistantRoles(e, E)
                      : tt.ZP.getCourseAssistantPermission(e, E),
                  ]
                );
              case 3:
                return ((T = a.sent()), [3, 5]);
              case 4:
                return (
                  (I = a.sent()),
                  gt.error(I),
                  (b = null),
                  (E = null),
                  (S = null),
                  [3, 5]
                );
              case 5:
                return (
                  E || (E = { enrollment: st.EN.Student }),
                  (L = (0, dt.y)().isCourseInstructorViewpoint(E.enrollment)),
                  (null === b || void 0 === b ? void 0 : b.data) &&
                    ((_.importedFrom = b.data["imported_from"]),
                    (_.teachingMode =
                      null !== (n = b.data["teaching_mode"]) && void 0 !== n
                        ? n
                        : ""),
                    (_.learningMode =
                      null !== (o = b.data["learning_mode"]) && void 0 !== o
                        ? o
                        : "freedom"),
                    (_.isBlocked = b.data["is_blocked"])),
                  (null === b || void 0 === b ? void 0 : b.data) &&
                  (null === S || void 0 === S ? void 0 : S.data)
                    ? ((_.notJoined = !1),
                      (_.id = b.data.id),
                      (_.courseName =
                        c.Z.language.startsWith("en") && b.data.second_name
                          ? b.data.second_name
                          : b.data.name),
                      (_.courseType = b.data["course_type"]),
                      (_.instructors = b.data.instructors),
                      (_.cover = b.data.cover),
                      (_.courseAttributes = b.data["course_attributes"]),
                      (_.allowZoom = b.data["allow_zoom"]),
                      (_.enrollment = E.enrollment),
                      (_.roleAlias = E.roleAlias),
                      (_.navSetting = S.data["nav_setting"]),
                      (_.plugins = []),
                      (_.isChild = !!b.data["is_child"]),
                      (_.orgId =
                        null !== (i = b.data["org_id"]) && void 0 !== i
                          ? i
                          : null === (r = c.Z.org) || void 0 === r
                            ? void 0
                            : r.id),
                      (_.code = b.data["course_code"]),
                      (_.masterCourseId =
                        null === (l = b.data["master_course"]) || void 0 === l
                          ? void 0
                          : l.id),
                      (_.knowledgeGraphPublishType =
                        b.data["knowledge_graph_publish_type"]),
                      (_.archived = b.data.archived),
                      (_.showArchiveCourseTips =
                        null === (u = b.data) || void 0 === u
                          ? void 0
                          : u.show_archive_course_tips),
                      (_.autoArchiveCourseDate =
                        null === (d = b.data) || void 0 === d
                          ? void 0
                          : d.auto_archive_course_date),
                      (_.creditState = {
                        creditRemaining:
                          null ===
                            (m =
                              null === (p = b.data) || void 0 === p
                                ? void 0
                                : p.credit_state) || void 0 === m
                            ? void 0
                            : m.credit_remaining,
                        status:
                          null ===
                            (v =
                              null === (f = b.data) || void 0 === f
                                ? void 0
                                : f.credit_state) || void 0 === v
                            ? void 0
                            : v.status,
                      }),
                      (_.hasAiAbility =
                        null === (g = b.data) || void 0 === g
                          ? void 0
                          : g.has_ai_ability),
                      A.featureToggle.inviteUser &&
                      L &&
                      _.courseAttributes &&
                      !(null === (h = _.courseAttributes) || void 0 === h
                        ? void 0
                        : h.access_code)
                        ? ((k = _.courseAttributes),
                          [4, tt.ZP.resetCourseAccessCode(e)])
                        : [3, 7])
                    : [3, 8]
                );
              case 6:
                ((k.access_code = a.sent()), (a.label = 7));
              case 7:
                return [3, 10];
              case 8:
                return (
                  (null === b || void 0 === b ? void 0 : b.data) &&
                    (_.courseType = b.data["course_type"]),
                  w ? [4, $e.Z.get(et.Z.getCourseByAccessCode(w))] : [3, 10]
                );
              case 9:
                ((P = a.sent().data),
                  (B = Q.N0.toClass(P, at.ah)),
                  B &&
                    ((_.id = B.id),
                    (_.credit = B.credit),
                    (_.description = B.description),
                    (_.compulsory = B.compulsory),
                    (_.code = B.courseCode),
                    (_.subjectCode = B.subjectCode),
                    (_.startDate = B.startDate),
                    (_.endDate = B.endDate),
                    (_.enrollment = E.enrollment),
                    (_.roleAlias = E.roleAlias),
                    (_.courseName = B.name),
                    (_.instructors = x().map(B.instructors, function (e) {
                      return {
                        avatar_big_url: e.avatar,
                        id: e.id,
                        name: e.name,
                      };
                    })),
                    (_.cover = B.cover)),
                  (_.notJoined = !0),
                  (_.courseAttributes = { access_code: w }),
                  (_.plugins = []),
                  (_.navSetting = [
                    {
                      can_disabled: !1,
                      can_enabled: !0,
                      disabled: !1,
                      parent: "info",
                      type: "content",
                    },
                    {
                      can_disabled: !0,
                      can_enabled: !0,
                      disabled: !1,
                      parent: "info",
                      type: "bulletin",
                    },
                    {
                      can_disabled: !0,
                      can_enabled: !0,
                      disabled: !1,
                      parent: "info",
                      type: "enrollments",
                    },
                    {
                      can_disabled: !0,
                      can_enabled: !0,
                      disabled: !1,
                      parent: "info",
                      type: "outline",
                    },
                    {
                      can_disabled: !0,
                      can_enabled: !0,
                      disabled: !1,
                      parent: "material",
                      type: "courseware",
                    },
                    {
                      can_disabled: !0,
                      can_enabled: !0,
                      disabled: !1,
                      parent: "material",
                      type: "homework",
                    },
                    {
                      can_disabled: !0,
                      can_enabled: !0,
                      disabled: !1,
                      parent: "material",
                      type: "exam",
                    },
                    {
                      can_disabled: !0,
                      can_enabled: !0,
                      disabled: !1,
                      parent: "material",
                      type: "forum",
                    },
                    {
                      can_disabled: !0,
                      can_enabled: !0,
                      disabled: !1,
                      parent: "material",
                      type: "classroom",
                    },
                    {
                      can_disabled: !0,
                      can_enabled: !0,
                      disabled: !1,
                      parent: "material",
                      type: "group",
                    },
                    {
                      can_disabled: !0,
                      can_enabled: !0,
                      disabled: !1,
                      parent: "material",
                      type: "rollcall",
                    },
                    {
                      can_disabled: !1,
                      can_enabled: !0,
                      disabled: !1,
                      parent: "material",
                      type: "live",
                    },
                    {
                      can_disabled: !0,
                      can_enabled: !0,
                      disabled: !1,
                      parent: "material",
                      type: "performance",
                    },
                    {
                      can_disabled: !0,
                      can_enabled: !0,
                      disabled: !1,
                      parent: "result",
                      type: "score",
                    },
                    {
                      can_disabled: !0,
                      can_enabled: !0,
                      disabled: !1,
                      parent: "result",
                      type: "stat",
                    },
                    {
                      can_disabled: !0,
                      can_enabled: !0,
                      disabled: !1,
                      parent: "result",
                      type: "classroom_report",
                    },
                    { can_disabled: !0, disabled: !1, type: "note" },
                    {
                      can_disabled: !0,
                      disabled: !1,
                      type: "correction-books",
                    },
                  ]),
                  (a.label = 10));
              case 10:
                return (
                  T && (_.assistantPermission = T),
                  _.id
                    ? ((R = [y(s.VH.GET_STUDENTS, e)]),
                      A.featureToggle.pluginIntegration &&
                        R.push(
                          y(s.VH.INIT_PLUGINS, {
                            courseId: e,
                            enrollment: _.enrollment,
                          }),
                        ),
                      [4, Promise.all(R)])
                    : [3, 12]
                );
              case 11:
                ((O = a.sent()),
                  (M = O[0]),
                  (V = O[1]),
                  (_.students = null !== M && void 0 !== M ? M : []),
                  (_.studentCounts = _.students.length),
                  (_.plugins = null !== V && void 0 !== V ? V : []),
                  C(s.VH.FETCH_COURSE_INFO, { courseId: e, data: _ }),
                  (a.label = 12));
              case 12:
                return [2, _];
            }
          });
        });
      }),
      ($[s.VH.UPDATE_COURSE_JOIN_STATUS] = function (e, t) {
        var n = e.commit;
        return (0, a.mG)(this, void 0, void 0, function () {
          var e;
          return (0, a.Jh)(this, function (o) {
            switch (o.label) {
              case 0:
                return [4, $e.Z.get(et.Z.getNavSetting(t))];
              case 1:
                return (
                  (e = o.sent().status),
                  [403, 200].includes(e) &&
                    n(s.VH.UPDATE_COURSE_JOIN_STATUS, {
                      courseId: t,
                      notJoined: 403 === e,
                    }),
                  [2]
                );
            }
          });
        });
      }),
      ($[s.VH.INIT_CONTENT] = function (e, t) {
        var n = e.commit,
          o = e.state;
        return (0, a.mG)(this, void 0, void 0, function () {
          var e, i, r, l, c, u, d;
          return (0, a.Jh)(this, function (a) {
            switch (a.label) {
              case 0:
                return (
                  vt.time("content activity fetch"),
                  [
                    4,
                    Promise.all([
                      tt.ZP.getModuleSyllabusInfo(t),
                      tt.ZP.getActivities(t),
                      tt.ZP.getClassrooms(t),
                      tt.ZP.getExams(t),
                    ]),
                  ]
                );
              case 1:
                return (
                  (e = a.sent()),
                  (i = e[0]),
                  (r = e[1]),
                  (l = e[2]),
                  (c = e[3]),
                  vt.timeEnd("content activity fetch"),
                  lt.ZP.examActivityFormat(c, i),
                  (u = r.concat(c).concat(l)),
                  (d = lt.ZP.initActivityStatus(u, i)),
                  vt.time("db store"),
                  pt.Z.mutations.pushLearningActivities(r),
                  pt.Z.mutations.pushExamTempActivities(c),
                  pt.Z.mutations.pushClassroomActivities(l),
                  vt.timeEnd("db store"),
                  n(s.VH.GET_MODULE_AND_SYLLABUS, {
                    courseId: t,
                    modules: lt.ZP.formatCourseModules(i, o[t]),
                  }),
                  n(s.VH.SET_COURSE_ACTIVITY_TREE, {
                    courseId: t,
                    activityMapperTree: d,
                  }),
                  [2]
                );
            }
          });
        });
      }),
      ($[s.VH.INIT_CONTENT_INTERACTIONS] = function (e, t) {
        var n = e.commit,
          o = e.state;
        return (0, a.mG)(this, void 0, void 0, function () {
          var e, i, r, l, c;
          return (0, a.Jh)(this, function (a) {
            switch (a.label) {
              case 0:
                return o.currentCourse.activityMapperTree &&
                  o.currentCourse.modules
                  ? [4, Promise.all([nt.ZP.getAskQuestions(t)])]
                  : [2];
              case 1:
                return (
                  (e = a.sent()[0]),
                  (i = e.filter(function (e) {
                    return !(!e.moduleId && !e.syllabusId);
                  })),
                  (r = lt.ZP.updateActivityMapperTree(
                    i,
                    (0, ft.Z)(o.currentCourse.activityMapperTree),
                    (0, ft.Z)(o.currentCourse.modules),
                  )),
                  (l = r.activityMapperTree),
                  (c = r.modules),
                  pt.Z.mutations.pushInteractionsActivities(e),
                  n(s.VH.SET_COURSE_ACTIVITY_TREE, {
                    courseId: t,
                    activityMapperTree: l,
                  }),
                  n(s.VH.GET_MODULE_AND_SYLLABUS, { courseId: t, modules: c }),
                  [2]
                );
            }
          });
        });
      }),
      ($[s.VH.PUT_RECENT_VISIT] = function (e, t) {
        var n = e.commit,
          o = e.rootState,
          i = e.dispatch;
        return (0, a.mG)(this, void 0, void 0, function () {
          var e, r, l;
          return (0, a.Jh)(this, function (a) {
            switch (a.label) {
              case 0:
                return (
                  (e = x().cloneDeep(o.home)),
                  (r = x().find(e.recentlyVisitedCourses, function (e) {
                    return e.id === Number(t);
                  })),
                  (l = x().map(e.recentlyVisitedCourses, function (e) {
                    return e.id;
                  })),
                  r
                    ? ((r.updateTime = x().now()),
                      (e.recentlyVisitedCourses = x()
                        .sortBy(e.recentlyVisitedCourses, "updateTime")
                        .reverse()),
                      n("home/".concat(s.Vv), e, { root: !0 }),
                      (l = x().map(e.recentlyVisitedCourses, function (e) {
                        return e.id;
                      })))
                    : l.unshift(t),
                  [4, tt.ZP.putRecentVisitedCourses(l)]
                );
              case 1:
                return (
                  a.sent(),
                  i("home/".concat(s.Cj), {}, { root: !0 }),
                  [2]
                );
            }
          });
        });
      }),
      ($[s.VH.INIT_PLUGINS] = function (e, t) {
        var n,
          o = e.commit,
          i = e.state,
          r = t.courseId,
          l = t.enrollment;
        return (0, a.mG)(this, void 0, void 0, function () {
          var e, t, u, d, p;
          return (0, a.Jh)(this, function (a) {
            switch (a.label) {
              case 0:
                return (
                  (e =
                    null !== l && void 0 !== l
                      ? l
                      : null === (n = i[r]) || void 0 === n
                        ? void 0
                        : n.enrollment),
                  e
                    ? ((t = (0, dt.y)().isCourseStudentViewpoint(e)),
                      (u = {
                        "zh-Hans": "zh-CN",
                        "zh-Hant": "zh-TW",
                        "en-US": "en-US",
                        "th-TH": "th-TH",
                        "ko-KR": "ko-KR",
                        "pt-PT": "pt-PT",
                      }),
                      (d = u[c.Z.language] || "en-US"),
                      [4, tt.ZP.getPlugins(c.Z.org.id, r, d, t)])
                    : [2, null]
                );
              case 1:
                return (
                  (p = a.sent()),
                  o(s.VH.INIT_PLUGINS, { courseId: r, plugins: p }),
                  [2, p]
                );
            }
          });
        });
      }),
      ($[s.VH.GET_ACTIVITY_READ] = function (e, t) {
        var n = e.commit;
        return (0, a.mG)(this, void 0, void 0, function () {
          var e;
          return (0, a.Jh)(this, function (o) {
            switch (o.label) {
              case 0:
                return [4, tt.ZP.getActivityReadsForUser(t)];
              case 1:
                return ((e = o.sent()), e && n(s.VH.GET_ACTIVITY_READ, e), [2]);
            }
          });
        });
      }),
      ($[s.VH.GET_ACTIVITY_INFO] = function (e, t) {
        return (0, a.mG)(this, void 0, void 0, function () {
          var e;
          return (0, a.Jh)(this, function (n) {
            switch (n.label) {
              case 0:
                return [4, tt.ZP.getActivity(t)];
              case 1:
                return (
                  (e = n.sent()),
                  e && pt.Z.mutations.pushLearningActivities([e]),
                  [2, e]
                );
            }
          });
        });
      }),
      ($[s.VH.GET_HOMEWORK_ACTIVITY_INFO] = function (e, t) {
        return (0, a.mG)(this, void 0, void 0, function () {
          var e, n, o;
          return (0, a.Jh)(this, function (i) {
            switch (i.label) {
              case 0:
                return [4, tt.ZP.getActivityWithStatus(t)];
              case 1:
                return (
                  (e = i.sent()),
                  (n = e.activity),
                  (o = e.status),
                  403 === o
                    ? pt.Z.mutations.popLearningActivities([t])
                    : n && pt.Z.mutations.pushLearningActivities([n]),
                  [2, { activity: n, status: o }]
                );
            }
          });
        });
      }),
      ($[s.VH.DELETE_ACTIVITY] = function (e, t) {
        var n = t.activityId;
        return (0, a.mG)(this, void 0, void 0, function () {
          var e;
          return (0, a.Jh)(this, function (t) {
            switch (t.label) {
              case 0:
                return [4, tt.ZP.deleteActivity(n)];
              case 1:
                return (
                  (e = t.sent()),
                  e && pt.Z.mutations.popLearningActivities([n]),
                  [2, e]
                );
            }
          });
        });
      }),
      ($[s.VH.GET_OUTLINE] = function (e, t) {
        var n = e.commit;
        return (0, a.mG)(this, void 0, void 0, function () {
          var e;
          return (0, a.Jh)(this, function (o) {
            switch (o.label) {
              case 0:
                return [4, tt.ZP.getCourseWithOutline(t)];
              case 1:
                return ((e = o.sent()), e && n(s.VH.GET_OUTLINE, e), [2]);
            }
          });
        });
      }),
      ($[s.VH.JOIN_COURSE] = function (e, t) {
        return (0, a.mG)(this, void 0, void 0, function () {
          return (0, a.Jh)(this, function (e) {
            return [2, $e.Z.put(et.Z.joinCourse(t))];
          });
        });
      }),
      ($[s.VH.GET_BULLETINS] = function (e, t) {
        var n = e.commit;
        return (0, a.mG)(this, void 0, void 0, function () {
          var e;
          return (0, a.Jh)(this, function (o) {
            switch (o.label) {
              case 0:
                return [4, ot.pr(t)];
              case 1:
                return (
                  (e = o.sent()),
                  e && n(s.VH.GET_BULLETINS, { courseId: t, bulletins: e }),
                  [2]
                );
            }
          });
        });
      }),
      ($[s.VH.GET_BULLETIN] = function (e, t) {
        var n = e.commit,
          o = t.courseId,
          i = t.bulletinId;
        return (0, a.mG)(this, void 0, void 0, function () {
          var e;
          return (0, a.Jh)(this, function (t) {
            switch (t.label) {
              case 0:
                return [4, ot.fL(o, i)];
              case 1:
                return (
                  (e = t.sent()),
                  e && n(s.VH.GET_BULLETIN, { courseId: o, bulletin: e }),
                  [2, e]
                );
            }
          });
        });
      }),
      ($[s.VH.DELETE_BULLETIN] = function (e, t) {
        var n = e.commit,
          o = t.courseId,
          i = t.bulletinId;
        return (0, a.mG)(this, void 0, void 0, function () {
          var e;
          return (0, a.Jh)(this, function (t) {
            switch (t.label) {
              case 0:
                return [4, ot.Cb(i)];
              case 1:
                return (
                  (e = t.sent()),
                  e && n(s.VH.DELETE_BULLETIN, { courseId: o, bulletinId: i }),
                  [2, e]
                );
            }
          });
        });
      }),
      ($[s.VH.CREATE_BULLETIN] = function (e, t) {
        var n = e.commit,
          o = t.courseId,
          i = t.bulletin;
        return (0, a.mG)(this, void 0, void 0, function () {
          var e;
          return (0, a.Jh)(this, function (t) {
            switch (t.label) {
              case 0:
                return [4, ot.WX(o, i)];
              case 1:
                return (
                  (e = t.sent()),
                  e && n(s.VH.CREATE_BULLETIN, { courseId: o, bulletin: e }),
                  [2, e]
                );
            }
          });
        });
      }),
      ($[s.VH.EDIT_BULLETIN] = function (e, t) {
        var n = e.commit,
          o = t.courseId,
          i = t.bulletinId,
          r = t.bulletin;
        return (0, a.mG)(this, void 0, void 0, function () {
          var e;
          return (0, a.Jh)(this, function (t) {
            switch (t.label) {
              case 0:
                return [4, ot.KS(i, r)];
              case 1:
                return (
                  (e = t.sent()),
                  e && n(s.VH.EDIT_BULLETIN, { courseId: o, bulletin: e }),
                  [2, e]
                );
            }
          });
        });
      }),
      ($[s.VH.GET_TOPIC_CATEGORIES] = function (e, t) {
        var n = e.commit,
          o = e.state,
          i = e.dispatch,
          r = t.courseId,
          l = t.page,
          c = t.groupId,
          u = t.byGroup,
          d = t.conditions;
        return (0, a.mG)(this, void 0, void 0, function () {
          var e, t, p, m, f;
          return (0, a.Jh)(this, function (a) {
            switch (a.label) {
              case 0:
                return (
                  (e = o[r]),
                  e ? [3, 2] : [4, i(s.VH.FETCH_COURSE_INFO, { courseId: r })]
                );
              case 1:
                (a.sent(), (e = o[r]), (a.label = 2));
              case 2:
                return e
                  ? ((t = (0, dt.y)().isCourseStudentViewpoint(
                      o[r].enrollment,
                    )),
                    (p = u ? it.W$(t, c, l, d) : it.Bz(t, r, l, d)),
                    [4, p])
                  : [2];
              case 3:
                return (
                  (m = a.sent()),
                  m &&
                    ((f = []),
                    x().forEach(m.topicCategories, function (e) {
                      (e.activity && f.push(e.activity),
                        n(
                          "".concat(s.DB.NAME, "/").concat(s.DB.PUSH_TOPICS),
                          e.topics,
                          { root: !0 },
                        ),
                        n(s.VH.GET_TOPIC_CATEGORY, {
                          topicCategory: e,
                          page: 1,
                          groupId: c,
                          courseId: r,
                        }),
                        delete e.activity);
                    }),
                    n(
                      "".concat(s.DB.NAME, "/").concat(s.DB.PUSH_CATEGORIES),
                      m.topicCategories.map(function (e) {
                        return e.toTopicCategoryDBItem();
                      }),
                      { root: !0 },
                    ),
                    n(s.VH.GET_TOPIC_CATEGORIES, {
                      courseId: r,
                      forum: m,
                      page: l || 1,
                    }),
                    pt.Z.mutations.pushLearningActivities(f)),
                  [2]
                );
            }
          });
        });
      }),
      ($[s.VH.GET_TOPIC_CATEGORY_BASE_INFO] = function (e, t) {
        var n = e.dispatch,
          o = e.state;
        return (0, a.mG)(this, void 0, void 0, function () {
          var e;
          return (0, a.Jh)(this, function (i) {
            return (
              (e = [
                function () {
                  return n(s.VH.GET_COMPLETION_CRITERIA, {
                    courseId: t,
                    activityType: "forum",
                  });
                },
                function () {
                  return n(s.VH.GET_GROUP_SETS, t);
                },
              ]),
              o[t].modules ||
                e.unshift(function () {
                  return n(s.VH.GET_MODULE_AND_SYLLABUS, t);
                }),
              [
                2,
                Promise.all(
                  e.map(function (e) {
                    return e();
                  }),
                ),
              ]
            );
          });
        });
      }),
      ($[s.VH.GET_TOPIC_CATEGORY] = function (e, t) {
        var n = e.commit,
          o = t.courseId,
          i = t.groupId,
          r = t.topicCategoryId,
          l = t.page;
        return (0, a.mG)(this, void 0, void 0, function () {
          var e;
          return (0, a.Jh)(this, function (t) {
            switch (t.label) {
              case 0:
                return [4, it.pD(r, { page: l, groupId: i })];
              case 1:
                return (
                  (e = t.sent()),
                  e &&
                    (n(
                      "".concat(s.DB.NAME, "/").concat(s.DB.PUSH_TOPICS),
                      e.topics,
                      { root: !0 },
                    ),
                    n(s.VH.GET_TOPIC_CATEGORY, {
                      courseId: o,
                      topicCategory: e,
                      page: l,
                      groupId: i,
                    })),
                  [2]
                );
            }
          });
        });
      }),
      ($[s.VH.POST_TOPIC_CATEGORY] = function (e, t) {
        var n = t.courseId,
          o = t.form;
        return (0, a.mG)(this, void 0, void 0, function () {
          var e;
          return (0, a.Jh)(this, function (t) {
            switch (t.label) {
              case 0:
                return [4, it.t(n, o)];
              case 1:
                return ((e = t.sent()), [2, e]);
            }
          });
        });
      }),
      ($[s.VH.EDIT_TOPIC_CATEGORY] = function (e, t) {
        var n = e.commit,
          o = t.topicCategoryId,
          i = t.activityId,
          r = t.form;
        return (0, a.mG)(this, void 0, void 0, function () {
          var e, t, l;
          return (0, a.Jh)(this, function (a) {
            switch (a.label) {
              case 0:
                return [4, it.pf(i, r)];
              case 1:
                return (
                  (e = a.sent()),
                  (t = e.success),
                  (l = e.activity),
                  t &&
                    (n(s.VH.EDIT_TOPIC_CATEGORY, {
                      topicCategoryId: o,
                      form: r,
                    }),
                    l && pt.Z.mutations.pushLearningActivities([l])),
                  [2, t ? o : 0]
                );
            }
          });
        });
      }),
      ($[s.VH.GET_TOPIC_CATEGORY_GROUP] = function (e, t) {
        var n = e.commit,
          o = t.topicCategoryId,
          i = t.groupSetId;
        return (0, a.mG)(this, void 0, void 0, function () {
          var e;
          return (0, a.Jh)(this, function (t) {
            switch (t.label) {
              case 0:
                return [4, it.Cy(o, i)];
              case 1:
                return (
                  (e = t.sent()),
                  e &&
                    n(
                      ""
                        .concat(s.DB.NAME, "/")
                        .concat(s.DB.UPDATE_TOPIC_CATEGORY_GROUPS),
                      { topicCategoryId: o, groups: e },
                      { root: !0 },
                    ),
                  [2]
                );
            }
          });
        });
      }),
      ($[s.VH.DELETE_TOPIC_CATEGORY] = function (e, t) {
        var n = e.commit,
          o = t.courseId,
          i = t.activityId;
        return (0, a.mG)(this, void 0, void 0, function () {
          var e;
          return (0, a.Jh)(this, function (t) {
            switch (t.label) {
              case 0:
                return [4, it.pB(i)];
              case 1:
                return (
                  (e = t.sent()),
                  e &&
                    n(s.VH.DELETE_TOPIC_CATEGORY, {
                      courseId: o,
                      activityId: i,
                    }),
                  [2, e]
                );
            }
          });
        });
      }),
      ($[s.VH.LIKE_OR_UNLIKE_TOPIC] = function (e, t) {
        var n = e.commit,
          o = t.courseId,
          i = t.topicCategoryId,
          r = t.groupId,
          l = t.topicId,
          c = t.like;
        return (0, a.mG)(this, void 0, void 0, function () {
          var e;
          return (0, a.Jh)(this, function (t) {
            switch (t.label) {
              case 0:
                return c ? [4, it.fz(l)] : [3, 2];
              case 1:
                return ((e = t.sent()), [3, 4]);
              case 2:
                return [4, it.b0(l)];
              case 3:
                ((e = t.sent()), (t.label = 4));
              case 4:
                return (
                  e &&
                    n(s.VH.LIKE_OR_UNLIKE_TOPIC, {
                      courseId: o,
                      topicCategoryId: i,
                      groupId: r,
                      topicId: l,
                      like: c,
                    }),
                  [2, e]
                );
            }
          });
        });
      }),
      ($[s.VH.LIKE_OR_UNLIKE_REPLY] = function (e, t) {
        var n = e.commit,
          o = t.courseId,
          i = t.topicCategoryId,
          r = t.groupId,
          l = t.topicId,
          c = t.replyId,
          u = t.like;
        return (0, a.mG)(this, void 0, void 0, function () {
          var e;
          return (0, a.Jh)(this, function (t) {
            switch (t.label) {
              case 0:
                return u ? [4, it.YO(c)] : [3, 2];
              case 1:
                return ((e = t.sent()), [3, 4]);
              case 2:
                return [4, it.DM(c)];
              case 3:
                ((e = t.sent()), (t.label = 4));
              case 4:
                return (
                  e &&
                    n(s.VH.LIKE_OR_UNLIKE_REPLY, {
                      courseId: o,
                      topicCategoryId: i,
                      groupId: r,
                      topicId: l,
                      replyId: c,
                      like: u,
                    }),
                  [2, e]
                );
            }
          });
        });
      }),
      ($[s.VH.TOP_OR_UNTOP_TOPIC] = function (e, t) {
        var n = e.dispatch,
          o = t.courseId,
          i = t.topicCategoryId,
          r = t.groupId,
          l = t.topicId,
          c = t.top,
          u = t.isTeacherTop;
        return (0, a.mG)(this, void 0, void 0, function () {
          var e;
          return (0, a.Jh)(this, function (t) {
            switch (t.label) {
              case 0:
                return c ? [4, it.qT(l, u)] : [3, 2];
              case 1:
                return ((e = t.sent()), [3, 4]);
              case 2:
                return [4, it.mB(l, u)];
              case 3:
                ((e = t.sent()), (t.label = 4));
              case 4:
                return e
                  ? [
                      4,
                      n(
                        s.VH.GET_TOPIC_CATEGORY,
                        {
                          courseId: o,
                          topicCategoryId: i,
                          groupId: r,
                          page: 1,
                        },
                        { root: !1 },
                      ),
                    ]
                  : [3, 6];
              case 5:
                (t.sent(), (t.label = 6));
              case 6:
                return [2, e];
            }
          });
        });
      }),
      ($[s.VH.DELETE_TOPIC] = function (e, t) {
        var n = e.commit,
          o = t.courseId,
          i = t.topicCategoryId,
          r = t.groupId,
          l = t.topicId;
        return (0, a.mG)(this, void 0, void 0, function () {
          var e;
          return (0, a.Jh)(this, function (t) {
            switch (t.label) {
              case 0:
                return [4, it.BK(l)];
              case 1:
                return (
                  (e = t.sent()),
                  e &&
                    n(s.VH.DELETE_TOPIC, {
                      courseId: o,
                      topicCategoryId: i,
                      groupId: r,
                      topicId: l,
                    }),
                  [2, e]
                );
            }
          });
        });
      }),
      ($[s.VH.UPDATE_TOPIC] = function (e, t) {
        var n = e.commit,
          o = t.topicId,
          i = t.topic;
        return (0, a.mG)(this, void 0, void 0, function () {
          var e, t, r;
          return (0, a.Jh)(this, function (a) {
            switch (a.label) {
              case 0:
                return [4, it.Cn(o, i)];
              case 1:
                return (
                  (e = a.sent()),
                  (t = e.success),
                  (r = e.topic),
                  t && n(s.VH.UPDATE_TOPIC, { topicId: o, newTopic: r }),
                  [2, t]
                );
            }
          });
        });
      }),
      ($[s.VH.UPDATE_REPLY] = function (e, t) {
        var n = e.commit,
          o = t.replyId,
          i = t.topicId,
          r = t.reply;
        return (0, a.mG)(this, void 0, void 0, function () {
          var e, t, l;
          return (0, a.Jh)(this, function (a) {
            switch (a.label) {
              case 0:
                return [4, it.uf(o, r)];
              case 1:
                return (
                  (e = a.sent()),
                  (t = e.success),
                  (l = e.reply),
                  t &&
                    n(s.VH.UPDATE_REPLY, {
                      replyId: o,
                      topicId: i,
                      newReply: l,
                    }),
                  [2, t]
                );
            }
          });
        });
      }),
      ($[s.VH.CREATE_TOPIC] = function (e, t) {
        var n = e.commit,
          o = t.topicDto;
        return (0, a.mG)(this, void 0, void 0, function () {
          var e;
          return (0, a.Jh)(this, function (t) {
            switch (t.label) {
              case 0:
                return [4, it.HV(o)];
              case 1:
                return (
                  (e = t.sent()),
                  e &&
                    (n(s.VH.CREATE_TOPIC, e),
                    n("".concat(s.DB.NAME, "/").concat(s.DB.PUSH_TOPICS), [e], {
                      root: !0,
                    })),
                  [2, e]
                );
            }
          });
        });
      }),
      ($[s.VH.GET_TOPIC] = function (e, t) {
        var n = e.commit,
          o = t.topicId;
        return (0, a.mG)(this, void 0, void 0, function () {
          var e;
          return (0, a.Jh)(this, function (t) {
            switch (t.label) {
              case 0:
                return [4, it.BN(o)];
              case 1:
                return (
                  (e = t.sent()),
                  e &&
                    n("".concat(s.DB.NAME, "/").concat(s.DB.UPDATE_TOPIC), e, {
                      root: !0,
                    }),
                  [2, e]
                );
            }
          });
        });
      }),
      ($[s.VH.GET_TOPIC_SCORE] = function (e, t) {
        var n = e.commit,
          o = t.activityId;
        return (0, a.mG)(this, void 0, void 0, function () {
          var e;
          return (0, a.Jh)(this, function (t) {
            switch (t.label) {
              case 0:
                return [4, it.Wp(o)];
              case 1:
                return (
                  (e = t.sent()),
                  e &&
                    n(
                      "".concat(s.DB.NAME, "/").concat(s.DB.TOPIC_SCORE),
                      { activityId: o, topicScore: e },
                      { root: !0 },
                    ),
                  [2, e]
                );
            }
          });
        });
      }),
      ($[s.VH.SET_TOPIC_SCORE] = function (e, t) {
        var n = e.commit,
          o = t.activityId,
          i = t.studentId,
          r = t.score;
        return (0, a.mG)(this, void 0, void 0, function () {
          var e;
          return (0, a.Jh)(this, function (t) {
            switch (t.label) {
              case 0:
                return [4, it.IG(o, i, r)];
              case 1:
                return (
                  (e = t.sent()),
                  e &&
                    n(
                      "".concat(s.DB.NAME, "/").concat(s.DB.SET_TOPIC_SCORE),
                      { activityId: o, studentId: i, score: r },
                      { root: !0 },
                    ),
                  [2, e]
                );
            }
          });
        });
      }),
      ($[s.VH.OPEN_OR_CLOSE_FORUM] = function (e, t) {
        return (0, a.mG)(this, void 0, void 0, function () {
          var e, n, o;
          return (0, a.Jh)(this, function (i) {
            switch (i.label) {
              case 0:
                return (
                  (e = pt.Z.getters.getLearningActivity(t)),
                  e && e.data
                    ? ((n = e.data.enable),
                      void 0 === e.data.enable && (n = !0),
                      [4, (n ? it.a_ : it.SS)(t)])
                    : [2, !1]
                );
              case 1:
                return (
                  (o = i.sent()),
                  o &&
                    pt.Z.mutations.changeForumEnable({
                      activityId: t,
                      enable: !n,
                    }),
                  [2, o]
                );
            }
          });
        });
      }),
      ($[s.VH.ADD_REPLY_OR_COMMENT] = function (e, t) {
        var n = e.commit,
          o = t.topicId,
          i = t.replyId,
          r = t.content,
          l = t.uploads;
        return (0, a.mG)(this, void 0, void 0, function () {
          var e;
          return (0, a.Jh)(this, function (t) {
            switch (t.label) {
              case 0:
                return i ? [4, it.Ir(i, { content: r, uploads: l })] : [3, 2];
              case 1:
                return ((e = t.sent()), [3, 4]);
              case 2:
                return [4, it.Bn(o, { content: r, uploads: l })];
              case 3:
                ((e = t.sent()), (t.label = 4));
              case 4:
                return (
                  e &&
                    n(s.VH.ADD_REPLY_OR_COMMENT, {
                      topicId: o,
                      replyId: i,
                      reply: e,
                    }),
                  [2, e]
                );
            }
          });
        });
      }),
      ($[s.VH.GET_MODULE_AND_SYLLABUS] = function (e, t) {
        var n = e.commit,
          o = e.state;
        return (0, a.mG)(this, void 0, void 0, function () {
          var e;
          return (0, a.Jh)(this, function (i) {
            switch (i.label) {
              case 0:
                return [4, tt.ZP.getModuleSyllabusInfo(t)];
              case 1:
                return (
                  (e = i.sent()),
                  n(s.VH.GET_MODULE_AND_SYLLABUS, {
                    courseId: t,
                    modules: lt.ZP.formatCourseModules(e, o[t]),
                  }),
                  [2]
                );
            }
          });
        });
      }),
      ($[s.VH.GET_SCORE_PERCENTAGES] = function (e, t) {
        var n = e.commit;
        return (0, a.mG)(this, void 0, void 0, function () {
          var e, o;
          return (0, a.Jh)(this, function (i) {
            switch (i.label) {
              case 0:
                return [4, lt.ZP.getScorePercentageResidual(t)];
              case 1:
                return (
                  (e = i.sent()),
                  [4, lt.ZP.getScorePercentagesSetting(t)]
                );
              case 2:
                return (
                  (o = i.sent()),
                  n(s.VH.GET_SCORE_PERCENTAGES, {
                    courseId: t,
                    scorePercentageResidual: e,
                    scorePercentagesSetting: o,
                  }),
                  [2]
                );
            }
          });
        });
      }),
      ($[s.VH.GET_SCORE_ITEM_GROUPS] = function (e, t) {
        var n = e.commit;
        return (0, a.mG)(this, void 0, void 0, function () {
          var e;
          return (0, a.Jh)(this, function (o) {
            switch (o.label) {
              case 0:
                return [4, tt.ZP.getCourseScoreItemGroups(t)];
              case 1:
                return (
                  (e = o.sent()),
                  n(s.VH.GET_SCORE_ITEM_GROUPS, {
                    courseId: t,
                    scoreItemGroups: e,
                  }),
                  [2]
                );
            }
          });
        });
      }),
      ($[s.VH.GET_COMPLETION_CRITERIA] = function (e, t) {
        var n = e.commit,
          o = t.activityType,
          i = t.courseId;
        return (0, a.mG)(this, void 0, void 0, function () {
          var e;
          return (0, a.Jh)(this, function (t) {
            switch (t.label) {
              case 0:
                return [4, tt.ZP.getCompletionCriteria(i, o)];
              case 1:
                return (
                  (e = t.sent()),
                  e &&
                    n(s.VH.GET_COMPLETION_CRITERIA, {
                      courseId: i,
                      completionCriteriaData: e,
                    }),
                  [2, e]
                );
            }
          });
        });
      }),
      ($[s.VH.GET_GROUP_SETS] = function (e, t) {
        var n = e.commit;
        return (0, a.mG)(this, void 0, void 0, function () {
          var e;
          return (0, a.Jh)(this, function (o) {
            switch (o.label) {
              case 0:
                return [4, tt.ZP.getGroupSets(t)];
              case 1:
                return (
                  (e = o.sent()),
                  e && n(s.VH.GET_GROUP_SETS, { courseId: t, groupSets: e }),
                  [2, e]
                );
            }
          });
        });
      }),
      ($[s.VH.GET_GROUP_SET] = function (e, t) {
        var n = e.commit,
          o = t.courseId,
          i = t.groupSetId;
        return (0, a.mG)(this, void 0, void 0, function () {
          var e;
          return (0, a.Jh)(this, function (t) {
            switch (t.label) {
              case 0:
                return [4, tt.ZP.getGroupSet(i)];
              case 1:
                return (
                  (e = t.sent()),
                  e &&
                    n(s.VH.GET_GROUP_SET, {
                      courseId: o,
                      groupSetId: i,
                      groupSet: e,
                    }),
                  [2, e]
                );
            }
          });
        });
      }),
      ($[s.VH.GET_STUDENTS] = function (e, t) {
        var n = e.commit;
        return (0, a.mG)(this, void 0, void 0, function () {
          var e;
          return (0, a.Jh)(this, function (o) {
            switch (o.label) {
              case 0:
                return [4, tt.ZP.getStudents(t)];
              case 1:
                return (
                  (e = o.sent()),
                  e && n(s.VH.GET_STUDENTS, { courseId: t, students: e }),
                  [2, e]
                );
            }
          });
        });
      }),
      ($[s.VH.GET_GROUPS] = function (e, t) {
        var n = e.commit,
          o = t.groupSetId,
          i = t.courseId;
        return (0, a.mG)(this, void 0, void 0, function () {
          var e;
          return (0, a.Jh)(this, function (t) {
            switch (t.label) {
              case 0:
                return [4, tt.ZP.getGroups(o)];
              case 1:
                return (
                  (e = t.sent()),
                  e &&
                    n(s.VH.GET_GROUPS, {
                      courseId: i,
                      groupSetId: o,
                      groups: e,
                    }),
                  [2, e]
                );
            }
          });
        });
      }),
      ($[s.VH.UPDATE_GROUP] = function (e, t) {
        var n = e.commit,
          o = t.groupId,
          i = t.courseId,
          r = t.payload;
        return (0, a.mG)(this, void 0, void 0, function () {
          var e;
          return (0, a.Jh)(this, function (t) {
            switch (t.label) {
              case 0:
                return [4, tt.ZP.updateGroup(o, r)];
              case 1:
                return (
                  (e = t.sent()),
                  e && n(s.VH.UPDATE_GROUP, { courseId: i, group: e }),
                  [2, e]
                );
            }
          });
        });
      }),
      ($[s.VH.GET_STUDENT_ANSWER_TIMES] = function (e, t) {
        var n = e.commit;
        return (0, a.mG)(this, void 0, void 0, function () {
          var e;
          return (0, a.Jh)(this, function (o) {
            switch (o.label) {
              case 0:
                return [4, nt.ZP.getInteractionStatistics(t)];
              case 1:
                return (
                  (e = o.sent()),
                  e &&
                    n(s.VH.GET_STUDENT_ANSWER_TIMES, {
                      courseId: t,
                      studentAnswerTimes: e,
                    }),
                  [2, e]
                );
            }
          });
        });
      }),
      ($[s.VH.GET_COURSE_ENROLLMENT] = function (e, t) {
        var n = e.commit;
        return (0, a.mG)(this, void 0, void 0, function () {
          var e;
          return (0, a.Jh)(this, function (o) {
            switch (o.label) {
              case 0:
                return [4, ut.Z.getCourseEnrollments(t)];
              case 1:
                return (
                  (e = o.sent()),
                  n(s.VH.GET_COURSE_ENROLLMENT, {
                    courseId: t,
                    enrollments: e,
                  }),
                  [2, e]
                );
            }
          });
        });
      }),
      $),
    Ct = ht,
    yt = (n(34553), n(40561), n(85827), n(85290)),
    At = function (e) {
      for (var t = 0, n = e; t < n.length; t++) {
        var o = n[t];
        o.syllabuses.sort(function (e, t) {
          return e.sort - t.sort;
        });
      }
      e.sort(function (e, t) {
        return e.sort - t.sort;
      });
    },
    wt =
      ((ee = {}),
      (ee[s.VH.FETCH_COURSE_INFO] = function (e, t) {
        t.courseId in e
          ? Object.assign(e[t.courseId] || {}, t.data)
          : (e[t.courseId] = t.data);
      }),
      (ee[s.VH.UPDATE_COURSE_JOIN_STATUS] = function (e, t) {
        var n = t.courseId,
          o = t.notJoined,
          i = e[n];
        i.notJoined = o;
      }),
      (ee[s.VH.INIT_PLUGINS] = function (e, t) {
        var n = t.courseId,
          o = t.plugins;
        e[n] && (e[n]["plugins"] = o);
      }),
      (ee[s.VH.SET_CURRENT_COURSE] = function (e, t) {
        t in e && (e["currentCourse"] = e[t]);
      }),
      (ee[s.VH.INIT_CURRENT_COURSE] = function (e) {
        e["currentCourse"] = new ct.tM();
      }),
      (ee[s.VH.SET_COURSE_ACTIVITY_TREE] = function (e, t) {
        var n = t.courseId,
          o = t.activityMapperTree;
        e[n]["activityMapperTree"] = o;
      }),
      (ee[s.VH.CHANGE_SHOW_ACTIVITIES_TOGGLE] = function (e, t) {
        var n,
          o,
          i =
            null ===
              (o =
                null === (n = e[t.courseId]) || void 0 === n
                  ? void 0
                  : n.modules) || void 0 === o
              ? void 0
              : o.find(function (e) {
                  return e.id === t.moduleId;
                });
        if (i)
          if (t.syllabusId) {
            var r = i.syllabuses.find(function (e) {
              return e.id === t.syllabusId;
            });
            r && (r.showActivities = t.status);
          } else i.showActivities = t.status;
      }),
      (ee[s.VH.GET_ACTIVITY_READ] = function (e, t) {
        lt.ZP.formatActivityWithReads(t);
      }),
      (ee[s.VH.GET_OUTLINE] = function (e, t) {
        Object.assign(e[t.id.toString()], t);
      }),
      (ee[s.VH.GET_BULLETINS] = function (e, t) {
        var n = t.courseId,
          o = t.bulletins;
        e[n]["bulletins"] = o.sort(function (e, t) {
          return t.id - e.id;
        });
      }),
      (ee[s.VH.GET_BULLETIN] = function (e, t) {
        var n = t.courseId,
          o = t.bulletin,
          i = e[n].bulletins;
        if (i) {
          var r = i.findIndex(function (e) {
            return e.id === o.id;
          });
          -1 !== r ? i.splice(r, 1, o) : i.push(o);
        } else e[n].bulletins = [o];
      }),
      (ee[s.VH.DELETE_BULLETIN] = function (e, t) {
        var n = t.courseId,
          o = t.bulletinId,
          i = e[n].bulletins;
        if (i) {
          var r = i.findIndex(function (e) {
            return e.id.toString() === o.toString();
          });
          -1 !== r && i.splice(r, 1);
        }
      }),
      (ee[s.VH.CREATE_BULLETIN] = function (e, t) {
        var n = t.courseId,
          o = t.bulletin,
          i = e[n].bulletins;
        i && i.unshift(o);
      }),
      (ee[s.VH.EDIT_BULLETIN] = function (e, t) {
        var n = t.courseId,
          o = t.bulletin,
          i = e[n].bulletins;
        if (i) {
          var r = i.findIndex(function (e) {
            return e.id === o.id;
          });
          -1 !== r && i.splice(r, 1, o);
        }
      }),
      (ee[s.VH.GET_SCORE_PERCENTAGES] = function (e, t) {
        var n = t.courseId,
          o = t.scorePercentageResidual,
          i = t.scorePercentagesSetting;
        ((e[n].scorePercentageResidual = o),
          (e[n].scorePercentagesSetting = i));
      }),
      (ee[s.VH.GET_SCORE_ITEM_GROUPS] = function (e, t) {
        var n = t.courseId,
          o = t.scoreItemGroups;
        e[n].scoreItemGroups = o;
      }),
      (ee[s.VH.GET_GROUP_SETS] = function (e, t) {
        var n = t.courseId,
          o = t.groupSets;
        e[n]["groupSets"] = o;
      }),
      (ee[s.VH.GET_GROUP_SET] = function (e, t) {
        var n = t.courseId,
          o = t.groupSetId,
          i = t.groupSet,
          r = x()
            .cloneDeep(e[n].groupSets)
            .map(function (e) {
              return e.id === Number(o) ? i : e;
            });
        e[n]["groupSets"] = r;
      }),
      (ee[s.VH.GET_GROUPS] = function (e, t) {
        var n = t.courseId,
          o = t.groupSetId,
          i = t.groups,
          r = e[n].groupSets.find(function (e) {
            return e.id === o;
          });
        if (r) r.groups = i;
        else {
          var a = new ct.Nl();
          ((a.groupCount = i.length),
            (a.id = o),
            (a.groups = i),
            e[n].groupSets.push(a));
        }
      }),
      (ee[s.VH.UPDATE_GROUP] = function (e, t) {
        var n = t.courseId,
          o = t.group,
          i = e[n].groupSets[0];
        if (
          (o.groupSetId &&
            (i = e[n].groupSets.find(function (e) {
              return e.id === o.groupSetId;
            })),
          i)
        ) {
          var r = x()
            .cloneDeep(i.groups)
            .map(function (e) {
              return e.id === o.id ? o : e;
            });
          i.groups = r;
        }
      }),
      (ee[s.VH.GET_STUDENTS] = function (e, t) {
        var n = t.courseId,
          o = t.students;
        e[n] && ((e[n]["students"] = o), (e[n]["studentCounts"] = o.length));
      }),
      (ee[s.VH.GET_STUDENT_ANSWER_TIMES] = function (e, t) {
        var n = t.courseId,
          o = t.studentAnswerTimes;
        e[n]["studentAnswerTimes"] = o;
      }),
      (ee[s.VH.GET_COMPLETION_CRITERIA] = function (e, t) {
        var n = t.courseId,
          o = t.completionCriteriaData;
        e[n]["completionCriteria"] = o;
      }),
      (ee[s.VH.GET_MODULE_AND_SYLLABUS] = function (e, t) {
        var n = t.courseId,
          o = t.modules;
        (At(o), (e[n]["modules"] = o));
      }),
      (ee[s.VH.GET_TOPIC_CATEGORIES] = function (e, t) {
        var n = t.courseId,
          o = t.forum,
          i = t.page;
        if (1 === i) {
          var r = new yt.uW();
          ((r.page = i),
            (r.pages = o.pages),
            (r.topicCategoryIds = o.topicCategories.map(function (e) {
              return e.id;
            })),
            (e[n]["forum"] = r));
        } else
          ((e[n].forum.page = o.page),
            (e[n].forum.hasMoreData = o.hasMoreData),
            (e[n].forum.topicCategoryIds = e[n].forum.topicCategoryIds.concat(
              o.topicCategories.map(function (e) {
                return e.id;
              }),
            )));
      }),
      (ee[s.VH.GET_TOPIC_CATEGORY] = function (e, t) {
        var n,
          o = t.topicCategory,
          i = t.page,
          r = t.groupId,
          a = t.courseId,
          s = new yt.Nd(),
          l = r ? "".concat(o.id, "/group/").concat(r) : "".concat(o.id);
        if (
          ((s.page = i),
          (s.pages = o.pages),
          (s.total = o.total),
          o.activityId
            ? (s.replyCount = o.topics.reduce(function (e, t) {
                return t.replyCount + e;
              }, 0))
            : (s.replyCount =
                o.replyCount ||
                (null === (n = e[a].topicCategory[l]) || void 0 === n
                  ? void 0
                  : n.replyCount)),
          1 === i)
        )
          s.topicIds = o.topics.map(function (e) {
            return e.id;
          });
        else {
          var c = e[a].topicCategory[l];
          s.topicIds = (
            (null === c || void 0 === c ? void 0 : c.topicIds) || []
          ).concat(
            o.topics.map(function (e) {
              return e.id;
            }),
          );
        }
        e[a].topicCategory[l] = s;
      }),
      (ee[s.VH.DELETE_TOPIC_CATEGORY] = function (e, t) {
        var n = t.courseId,
          o = t.activityId,
          i = e[n].forum.topicCategoryIds;
        if (i) {
          var r = i.findIndex(function (e) {
            var t;
            return (
              (null === (t = Kr.state.db.topicCategories[e].activityId) ||
              void 0 === t
                ? void 0
                : t.toString()) === o.toString()
            );
          });
          -1 !== r && i.splice(r, 1);
        }
      }),
      (ee[s.VH.EDIT_TOPIC_CATEGORY] = function (e, t) {
        var n = t.topicCategoryId,
          o = t.form,
          i = Kr.state.db.topicCategories[n];
        i && (i.title = o.title);
      }),
      (ee[s.VH.LIKE_OR_UNLIKE_TOPIC] = function (e, t) {
        var n = t.topicId,
          o = t.like,
          i = Kr.state.db.topics[Number(n)];
        i &&
          (o
            ? ((i.currentUserLiked = !0), i.likeCount++)
            : ((i.currentUserLiked = !1), i.likeCount--));
      }),
      (ee[s.VH.LIKE_OR_UNLIKE_REPLY] = function (e, t) {
        var n = t.topicId,
          o = t.replyId,
          i = t.like,
          r = Kr.state.db.topics[Number(n)];
        if (r) {
          var a = x().find(r.replies, function (e) {
            return e.id === Number(o);
          });
          a &&
            (i
              ? ((a.currentUserLiked = !0), a.likeCount++)
              : ((a.currentUserLiked = !1), a.likeCount--));
        }
      }),
      (ee[s.VH.DELETE_TOPIC] = function (e, t) {
        var n = t.topicId,
          o = t.topicCategoryId,
          i = t.groupId,
          r = e.currentCourse.topicCategory,
          a = Number(n),
          s = r[o],
          l = r["".concat(o, "/group/").concat(i)];
        (s &&
          (s.topicIds = s.topicIds.filter(function (e) {
            return e !== a;
          })),
          l &&
            (l.topicIds = l.topicIds.filter(function (e) {
              return e !== a;
            })),
          delete Kr.state.db.topics[Number(n)]);
        var c = Kr.state.db.topicCategories[o];
        c && (c.topicCount = Math.max(0, c.topicCount - 1));
      }),
      (ee[s.VH.CREATE_TOPIC] = function (e, t) {
        var n = Kr.state.db.topicCategories[t.categoryId];
        n && (n.topicCount = n.topicCount + 1);
      }),
      (ee[s.VH.UPDATE_TOPIC] = function (e, t) {
        var n = t.topicId,
          o = t.newTopic,
          i = Kr.state.db.topics[Number(n)];
        ((i.title = o.title), (i.content = o.content), (i.uploads = o.uploads));
      }),
      (ee[s.VH.UPDATE_REPLY] = function (e, t) {
        var n = t.topicId,
          o = t.replyId,
          i = t.newReply,
          r = Kr.state.db.topics[Number(n)];
        if (r) {
          var a = r.replies.find(function (e) {
            return e.id === Number(o);
          });
          a
            ? ((a.content = i.content), (a.uploads = i.uploads))
            : r.replies.unshift(i);
        }
      }),
      (ee[s.VH.ADD_REPLY_OR_COMMENT] = function (e, t) {
        var n = t.topicId,
          o = t.replyId,
          i = t.reply,
          r = Kr.state.db.topics[Number(n)];
        if (o) {
          var a = x().find(r.replies, function (e) {
            return e.id === Number(o);
          });
          a.comments.unshift(i);
        } else r.replies.unshift(i);
      }),
      (ee[s.VH.FETCH_HOMEWORK_LIST] = function (e, t) {
        var n = t.courseId,
          o = t.homeworkInfo;
        ((e[n].homework.page = o.page),
          (e[n].homework.pages = o.pages),
          (e[n].homework.hasMoreData = o.hasMoreData),
          (e[n].homework.pageSize = o.pageSize));
        var i = o.list.map(function (e) {
          return e.id;
        });
        o.page <= 1
          ? (e[n].homework["list"] = i)
          : (e[n].homework["list"] = e[n].homework.list.concat(i));
      }),
      (ee[s.VH.GET_COURSE_ENROLLMENT] = function (e, t) {
        var n = t.courseId,
          o = t.enrollments;
        return (0, a.mG)(this, void 0, void 0, function () {
          return (0, a.Jh)(this, function (t) {
            return ((e[n].enrollments = o), [2]);
          });
        });
      }),
      (ee[s.VH.SET_ONGOING_ACTIVITY] = function (e, t) {
        var n = t.courseId,
          o = t.ongoingActivity,
          i = t.force;
        return (0, a.mG)(this, void 0, void 0, function () {
          return (0, a.Jh)(this, function (t) {
            return (
              (e[Number(n)].ongoingActivity = Object.assign(
                {},
                i ? {} : e[Number(n)].ongoingActivity,
                o,
              )),
              [2]
            );
          });
        });
      }),
      ee),
    bt = wt,
    Et =
      (n(32023),
      function (e, t, n) {
        var o,
          i = x().cloneDeep(
            (null === (o = e[t]) || void 0 === o ? void 0 : o.bulletins) || [],
          );
        return n
          ? i.filter(function (e) {
              return e.title.includes(n);
            })
          : i;
      }),
    St =
      ((te = {}),
      (te[s.VH.CURRENT_COURSE_INFO] = function (e) {
        return function (t) {
          return e[t];
        };
      }),
      (te[s.VH.GET_BULLETINS] = function (e) {
        return function (t, n) {
          return Et(e, t, n);
        };
      }),
      (te[s.VH.GET_STUDENTS] = function (e) {
        return function (t) {
          return e[t].students;
        };
      }),
      (te[s.VH.GET_GROUP_SET] = function (e) {
        return function (t, n) {
          return e[t].groupSets.find(function (e) {
            return e.id === Number(n);
          });
        };
      }),
      (te[s.VH.GET_GROUP_SETS] = function (e) {
        return function (t) {
          return e[t].groupSets;
        };
      }),
      (te[s.VH.GET_STUDENT_ANSWER_TIMES] = function (e) {
        return function (t) {
          return e[t].studentAnswerTimes;
        };
      }),
      (te[s.VH.GET_BULLETIN] = function (e) {
        return function (t, n) {
          var o = Et(e, t);
          return o.find(function (e) {
            return e.id.toString() === n.toString();
          });
        };
      }),
      (te[s.VH.GET_TOPIC_CATEGORIES] = function (e) {
        return function (t, n) {
          var o,
            i = new yt.lW(),
            r = null === (o = e[t]) || void 0 === o ? void 0 : o.forum,
            a = [];
          return (
            r &&
              ((a = r.topicCategoryIds || []),
              r.pages &&
                r.page &&
                ((i.pages = r.pages),
                (i.page = r.page),
                (i.hasMoreData = r.pages > r.page))),
            (i.topicCategories = a.map(function (o) {
              var i, r, a, s, l;
              l = n
                ? (null ===
                    (r =
                      null === (i = e[t]) || void 0 === i
                        ? void 0
                        : i.topicCategory[o + "/group/".concat(n)]) ||
                  void 0 === r
                    ? void 0
                    : r.topicIds) || []
                : (null ===
                    (s =
                      null === (a = e[t]) || void 0 === a
                        ? void 0
                        : a.topicCategory[o]) || void 0 === s
                    ? void 0
                    : s.topicIds) || [];
              var c = l.map(function (e) {
                  return Kr.state.db.topics[e];
                }),
                u = Kr.state.db.topicCategories[o],
                d = x().cloneDeep(u);
              return ((d.topics = c), d);
            })),
            i
          );
        };
      }),
      (te[s.VH.GET_TOPIC_CATEGORY] = function (e) {
        return function (t, n) {
          var o,
            i = n ? "".concat(t, "/group/").concat(n) : "".concat(t),
            r = e.currentCourse.topicCategory,
            a = r[i],
            s = (null === a || void 0 === a ? void 0 : a.topicIds) || [],
            l = s
              .map(function (e) {
                return Kr.state.db.topics[e];
              })
              .filter(function (e) {
                return !!e;
              }),
            c = Kr.state.db.topicCategories[Number(t)],
            u = new yt.t4();
          return (
            c && Object.assign(u, c),
            (u.topics = l),
            (u.replyCount =
              null !==
                (o = null === a || void 0 === a ? void 0 : a.replyCount) &&
              void 0 !== o
                ? o
                : 0),
            a &&
              a.pages &&
              a.page &&
              ((u.page = a.page),
              (u.pages = a.pages),
              (u.total = a.total),
              (u.hasMoreData = a.pages > a.page)),
            u
          );
        };
      }),
      (te[s.VH.GET_TOPIC_CATEGORY_GROUP] = function (e) {
        return function (e) {
          var t = Kr.state.db.topicCategories[Number(e)];
          return t ? t.groups : [];
        };
      }),
      (te[s.VH.GET_TOPIC] = function (e) {
        return function (e) {
          return Kr.state.db.topics[Number(e)];
        };
      }),
      (te[s.VH.GET_TOPIC_SCORE] = function (e) {
        return function (e, t) {
          var n = Kr.state.db.topicScore[e] || [],
            o = n.find(function (e) {
              return t === e.studentId;
            });
          if (o) return o.score;
        };
      }),
      (te[s.VH.GET_TOPIC_SCORES] = function (e) {
        return function (e) {
          var t = Kr.state.db.topicScore[e];
          return void 0 !== t;
        };
      }),
      (te[s.VH.GET_ONGOING_ACTIVITY] = function (e) {
        return function (t) {
          var n, o;
          return null !==
            (o =
              null === (n = e[t]) || void 0 === n
                ? void 0
                : n.ongoingActivity) && void 0 !== o
            ? o
            : {};
        };
      }),
      te),
    Tt = { currentCourse: new ct.tM() },
    _t = Tt,
    It = (n(51532), n(21703), n(30197)),
    Lt = n(28989),
    kt = n(27486),
    Pt =
      ((ne = {}),
      (ne[s.VH.GET_HOMEWORK_BASE_INFO] = function (e, t) {
        var n = e.dispatch,
          o = e.commit;
        return (0, a.mG)(this, void 0, void 0, function () {
          var e, i;
          return (0, a.Jh)(this, function (r) {
            switch (r.label) {
              case 0:
                return (
                  (e = [
                    function () {
                      return n(s.VH.GET_MODULE_AND_SYLLABUS, t);
                    },
                    function () {
                      return n(
                        "".concat(s.Wv.NAME, "/").concat(s.Wv.GET_RUBRICS),
                        t,
                        { root: !0 },
                      );
                    },
                    function () {
                      return n(s.VH.GET_COMPLETION_CRITERIA, {
                        courseId: t,
                        activityType: "homework",
                      });
                    },
                    function () {
                      return n(s.VH.GET_GROUP_SETS, t);
                    },
                  ]),
                  [
                    4,
                    Promise.all(
                      e.map(function (e) {
                        return e();
                      }),
                    ),
                  ]
                );
              case 1:
                return (
                  (i = r.sent()),
                  i[i.length - 1] &&
                    i[i.length - 1].forEach(function (e) {
                      n(s.VH.GET_GROUPS, { courseId: t, groupSetId: e.id });
                    }),
                  o(s.VH.SET_COURSE_ACTIVITY_TREE, {
                    courseId: t,
                    activityMapperTree: void 0,
                  }),
                  [2, i]
                );
            }
          });
        });
      }),
      (ne[s.VH.FETCH_HOMEWORK_LIST] = function (e, t) {
        var n = e.commit,
          o = e.state,
          i = t.courseId,
          r = t.refresh,
          l = t.conditions;
        return (0, a.mG)(this, void 0, void 0, function () {
          var e, t;
          return (0, a.Jh)(this, function (a) {
            switch (a.label) {
              case 0:
                return (
                  (e = o[i].homework),
                  [4, It.Z.getHomeworkList(i, r ? 1 : e.page + 1, l)]
                );
              case 1:
                return (
                  (t = a.sent()),
                  t &&
                    t.list &&
                    (n(s.VH.FETCH_HOMEWORK_LIST, {
                      courseId: i,
                      homeworkInfo: t,
                    }),
                    pt.Z.mutations.pushLearningActivities(t.list)),
                  [2, t]
                );
            }
          });
        });
      }),
      (ne[s.VH.FETCH_SUBMISSION_LIST] = function (e, t) {
        var n,
          o = e.state,
          i = e.dispatch,
          r = t.homeworkId,
          l = t.isGroup;
        return (0, a.mG)(this, void 0, void 0, function () {
          var e, t, c;
          return (0, a.Jh)(this, function (a) {
            switch (a.label) {
              case 0:
                return (
                  (e = l
                    ? It.Z.getGroupsSubmissionList(r)
                    : It.Z.getSubmissionList(r)),
                  [4, e]
                );
              case 1:
                return (
                  (t = a.sent() || []),
                  l || !t.length
                    ? [3, 4]
                    : (
                          null === (n = o.currentCourse.students) ||
                          void 0 === n
                            ? void 0
                            : n.length
                        )
                      ? [3, 3]
                      : [4, i(s.VH.GET_STUDENTS, o.currentCourse.id)]
                );
              case 2:
                (a.sent(), (a.label = 3));
              case 3:
                ((c = new Map(
                  (o.currentCourse.students || []).map(function (e) {
                    return [e.id, e];
                  }),
                )),
                  t.forEach(function (e) {
                    var t,
                      n =
                        null === (t = e.createdBy) || void 0 === t
                          ? void 0
                          : t.id;
                    n && c.has(n) && (e.createdBy = c.get(n));
                  }),
                  (a.label = 4));
              case 4:
                return (
                  pt.Z.mutations.setHomeworkSubmission({
                    id: r,
                    submissions: t,
                  }),
                  [2, t]
                );
            }
          });
        });
      }),
      (ne[s.VH.SET_SUBMISSION_MARKED] = function (e, t) {
        return (0, a.mG)(this, void 0, void 0, function () {
          var e, n, o, i;
          return (0, a.Jh)(this, function (r) {
            switch (r.label) {
              case 0:
                return (
                  (e = t.homeworkId),
                  (n = t.submissionIds),
                  (o = t.submitterIds),
                  (i = t.isMarked),
                  [4, It.Z.setSubmissionMarked(e, n, o, i)]
                );
              case 1:
                return (r.sent(), [2]);
            }
          });
        });
      }),
      (ne[s.VH.SET_SUBMISSION_RESUBMIT] = function (e, t) {
        return (0, a.mG)(this, void 0, void 0, function () {
          var e;
          return (0, a.Jh)(this, function (n) {
            return (
              (e = pt.Z.state.learningActivities[t.homeworkId]),
              e
                ? z()(t.closedTime) <= z()()
                  ? [
                      2,
                      Promise.reject(
                        new Error("submission.tips.makeupTimeLaterNow"),
                      ),
                    ]
                  : [
                      2,
                      It.Z.setSubmissionResubmit(
                        t.groupIds,
                        t.closedTime,
                        t.homeworkId,
                        t.studentIds,
                        t.submissionIds,
                      ),
                    ]
                : [2]
            );
          });
        });
      }),
      (ne[s.VH.RECOMMEND] = function (e, t) {
        return (0, a.mG)(this, void 0, void 0, function () {
          return (0, a.Jh)(this, function (e) {
            switch (e.label) {
              case 0:
                return t.isRecommend
                  ? [4, It.Z.setRecommend(t.submissionIds)]
                  : [3, 2];
              case 1:
                return (e.sent(), [3, 4]);
              case 2:
                return [4, It.Z.cancelRecommend(t.submissionIds)];
              case 3:
                (e.sent(), (e.label = 4));
              case 4:
                return (Lt.Z.willBeRefresh([kt.q.HomeworkDetail]), [2]);
            }
          });
        });
      }),
      (ne[s.VH.FETCH_RECOMMEND_HOMEWORK_SUBMISSIONS] = function (e, t) {
        return (0, a.mG)(this, void 0, void 0, function () {
          var e;
          return (0, a.Jh)(this, function (n) {
            switch (n.label) {
              case 0:
                return [4, It.Z.getRecommendHomeworkSubmissions(t)];
              case 1:
                return (
                  (e = n.sent()),
                  e &&
                    pt.Z.mutations.setHomeworkRecommendSubmissions({
                      id: t,
                      recommendSubmissions: e,
                    }),
                  [2]
                );
            }
          });
        });
      }),
      (ne[s.VH.FETCH_STUDENT_MAKE_UP_RECORD] = function (e, t) {
        return (0, a.mG)(this, void 0, void 0, function () {
          var e;
          return (0, a.Jh)(this, function (n) {
            switch (n.label) {
              case 0:
                return [4, It.Z.getStudentMakeUpRecord(t)];
              case 1:
                return (
                  (e = n.sent()),
                  e &&
                    pt.Z.mutations.setHomeworkSelfMakeUpRecord({
                      id: t,
                      makeUpRecord: e,
                    }),
                  [2]
                );
            }
          });
        });
      }),
      (ne[s.VH.FETCH_STUDENT_RESUBMIT_RECORD] = function (e, t) {
        return (0, a.mG)(this, void 0, void 0, function () {
          var e;
          return (0, a.Jh)(this, function (n) {
            switch (n.label) {
              case 0:
                return [4, It.Z.getStudentResubmitRecord(t)];
              case 1:
                return (
                  (e = n.sent()),
                  e &&
                    pt.Z.mutations.setHomeworkSelfResubmitRecord({
                      id: t,
                      resubmitRecord: e,
                    }),
                  [2]
                );
            }
          });
        });
      }),
      (ne[s.VH.FETCH_STUDENT_SUBMISSION_LIST] = function (e, t) {
        var n = t.homeworkId,
          o = t.studentId;
        return (0, a.mG)(this, void 0, void 0, function () {
          var e;
          return (0, a.Jh)(this, function (t) {
            switch (t.label) {
              case 0:
                return [4, It.Z.getStudentSubmissionList(n, o)];
              case 1:
                return (
                  (e = t.sent()),
                  e &&
                    pt.Z.mutations.setHomeworkSelfSubmission({
                      id: n,
                      submissions: e,
                    }),
                  [2, e]
                );
            }
          });
        });
      }),
      (ne[s.VH.FETCH_GROUP_SUBMISSION_LIST] = function (e, t) {
        var n = t.homeworkId,
          o = t.groupId;
        return (0, a.mG)(this, void 0, void 0, function () {
          var e;
          return (0, a.Jh)(this, function (t) {
            switch (t.label) {
              case 0:
                return [4, It.Z.getGroupSubmissionList(n, o)];
              case 1:
                return (
                  (e = t.sent()),
                  e &&
                    pt.Z.mutations.setHomeworkSelfSubmission({
                      id: n,
                      submissions: e,
                    }),
                  [2, e]
                );
            }
          });
        });
      }),
      (ne[s.VH.POST_HOMEWORK_SUBMISSION] = function (e, t) {
        var n = t.homeworkId,
          o = t.from;
        return (0, a.mG)(this, void 0, void 0, function () {
          var e;
          return (0, a.Jh)(this, function (t) {
            switch (t.label) {
              case 0:
                return [4, It.Z.createHomeworkSubmission(n, o)];
              case 1:
                return (
                  (e = t.sent()),
                  e &&
                    pt.Z.mutations.setHomeworkSelfSubmissionCount({
                      id: n,
                      count: void 0,
                    }),
                  [2, e]
                );
            }
          });
        });
      }),
      (ne[s.VH.POST_HOMEWORK] = function (e, t) {
        var n = t.courseId,
          o = t.from;
        return (0, a.mG)(this, void 0, void 0, function () {
          var e;
          return (0, a.Jh)(this, function (t) {
            switch (t.label) {
              case 0:
                return [4, It.Z.createHomework(n, o)];
              case 1:
                return (
                  (e = t.sent()),
                  e && pt.Z.mutations.pushLearningActivities([e]),
                  [2, e]
                );
            }
          });
        });
      }),
      (ne[s.VH.EDIT_HOMEWORK] = function (e, t) {
        var n = t.homeworkId,
          o = t.from;
        return (0, a.mG)(this, void 0, void 0, function () {
          var e;
          return (0, a.Jh)(this, function (t) {
            switch (t.label) {
              case 0:
                return [4, It.Z.editHomework(n, o)];
              case 1:
                return (
                  (e = t.sent()),
                  e && pt.Z.mutations.pushLearningActivities([e]),
                  [2, e]
                );
            }
          });
        });
      }),
      (ne[s.VH.REMIND_SUBMIT] = function (e, t) {
        var n = t.homeworkId,
          o = t.studentIds;
        return (0, a.mG)(this, void 0, void 0, function () {
          return (0, a.Jh)(this, function (e) {
            return [2, It.Z.remindSubmit(n, o)];
          });
        });
      }),
      (ne[s.VH.INTRA_SCORES] = function (e, t) {
        return (0, a.mG)(this, void 0, void 0, function () {
          var e;
          return (0, a.Jh)(this, function (n) {
            switch (n.label) {
              case 0:
                return [4, tt.ZP.getIntraScores(t)];
              case 1:
                return (
                  (e = n.sent()),
                  e &&
                    pt.Z.mutations.setHomeworkIntraScores({
                      id: t,
                      intraScores: e,
                    }),
                  [2, e]
                );
            }
          });
        });
      }),
      (ne[s.VH.INTER_SCORES] = function (e, t) {
        return (0, a.mG)(this, void 0, void 0, function () {
          var e;
          return (0, a.Jh)(this, function (n) {
            switch (n.label) {
              case 0:
                return [4, tt.ZP.getInterScores(t)];
              case 1:
                return (
                  (e = n.sent()),
                  e &&
                    pt.Z.mutations.setHomeworkInterScores({
                      id: t,
                      interScores: e,
                    }),
                  [2, e]
                );
            }
          });
        });
      }),
      (ne[s.VH.SUBMISSION_DETAIL] = function (e, t) {
        var n = t.homeworkId,
          o = t.committerId,
          i = t.isGroup;
        return (0, a.mG)(this, void 0, void 0, function () {
          var e;
          return (0, a.Jh)(this, function (t) {
            switch (t.label) {
              case 0:
                return [4, tt.ZP.getSubmissionDetail(n, o, i)];
              case 1:
                return (
                  (e = t.sent()),
                  pt.Z.mutations.setHomeworkSubmissionDetail(e),
                  [2, e]
                );
            }
          });
        });
      }),
      (ne[s.VH.FETCH_STUDENT_INTER_REVIEW_LIST] = function (e, t) {
        var n;
        return (0, a.mG)(this, void 0, void 0, function () {
          var e, o;
          return (0, a.Jh)(this, function (i) {
            switch (i.label) {
              case 0:
                return (
                  (e = pt.Z.state.learningActivities[t]),
                  (o = []),
                  (
                    null === (n = e.interScoreMap) || void 0 === n
                      ? void 0
                      : n.id
                  )
                    ? [4, It.Z.getInterScoreRules(t)]
                    : [3, 2]
                );
              case 1:
                ((o = i.sent()), (i.label = 2));
              case 2:
                return (
                  pt.Z.mutations.setHomeworkSelfInterReviewList({
                    id: t,
                    interReviewList: o,
                  }),
                  [2, o]
                );
            }
          });
        });
      }),
      (ne[s.VH.FETCH_STUDENT_INTRA_REVIEW_LIST] = function (e, t) {
        var n;
        return (0, a.mG)(this, void 0, void 0, function () {
          var e, o;
          return (0, a.Jh)(this, function (i) {
            switch (i.label) {
              case 0:
                return (
                  (e = pt.Z.state.learningActivities[t]),
                  (o = []),
                  (
                    null === (n = e.intraScoreMap) || void 0 === n
                      ? void 0
                      : n.id
                  )
                    ? [4, It.Z.getIntraScoreRules(t)]
                    : [3, 2]
                );
              case 1:
                ((o = i.sent()), (i.label = 2));
              case 2:
                return (
                  pt.Z.mutations.setHomeworkSelfIntraReviewList({
                    id: t,
                    intraReviewList: o,
                  }),
                  [2, o]
                );
            }
          });
        });
      }),
      (ne[s.VH.GET_HOMEWORK_SCORES] = function (e, t) {
        return (0, a.mG)(this, void 0, void 0, function () {
          var e;
          return (0, a.Jh)(this, function (n) {
            switch (n.label) {
              case 0:
                return [4, It.Z.getScoreList(t)];
              case 1:
                return (
                  (e = n.sent()),
                  e &&
                    pt.Z.mutations.setHomeworkScores({
                      homeworkId: t,
                      scores: e,
                    }),
                  [2, e]
                );
            }
          });
        });
      }),
      (ne[s.VH.GET_MAKEUP_RECORDS] = function (e, t) {
        return (0, a.mG)(this, void 0, void 0, function () {
          var e;
          return (0, a.Jh)(this, function (n) {
            switch (n.label) {
              case 0:
                return [4, It.Z.getMakeupRecords(t)];
              case 1:
                return (
                  (e = n.sent()),
                  e &&
                    pt.Z.mutations.setHomeworkMakeUpRecord({
                      homeworkId: t,
                      makeupRecords: e,
                    }),
                  [2, e]
                );
            }
          });
        });
      }),
      ne),
    Bt = Pt,
    Rt = {},
    xt = Rt,
    Ot = n(12396),
    Mt = n(83468),
    Vt = n(65655),
    Nt =
      ((oe = {}),
      (oe[s.VH.GET_ROLLCALLS] = function (e, t) {
        var n = e.commit;
        return (0, a.mG)(this, void 0, void 0, function () {
          var e;
          return (0, a.Jh)(this, function (o) {
            switch (o.label) {
              case 0:
                return [4, Ot.Z.getRollcalls(t)];
              case 1:
                return (
                  (e = o.sent()),
                  n(s.VH.GET_ROLLCALLS, { courseId: t, rollcalls: e }),
                  [2]
                );
            }
          });
        });
      }),
      (oe[s.VH.GET_STUDENTS_ROLLCALL_STATS] = function (e, t) {
        var n = e.commit;
        return (0, a.mG)(this, void 0, void 0, function () {
          var e;
          return (0, a.Jh)(this, function (o) {
            switch (o.label) {
              case 0:
                return [4, Ot.Z.getStudentsRollcallsStats(t)];
              case 1:
                return (
                  (e = o.sent()),
                  n(s.VH.GET_STUDENTS_ROLLCALL_STATS, {
                    courseId: t,
                    stats: e,
                  }),
                  [2]
                );
            }
          });
        });
      }),
      (oe[s.VH.GET_ROLLCALL_HISTORY_OF_STUDENT] = function (e, t) {
        var o = e.commit,
          i = t.courseId,
          r = t.studentId,
          l = t.splitOngoingRollCall;
        return (0, a.mG)(this, void 0, void 0, function () {
          var e, t, c, u;
          return (0, a.Jh)(this, function (a) {
            switch (a.label) {
              case 0:
                return [4, Vt.Z.getRollcallsOfStudent(i, r)];
              case 1:
                return (
                  (e = a.sent()),
                  l
                    ? (o(s.VH.GET_ROLLCALL_HISTORY_OF_STUDENT, {
                        courseId: i,
                        rollcalls: e,
                      }),
                      [2, e])
                    : ((t = n(32571).JN),
                      (c = []),
                      (u = []),
                      e.forEach(function (e) {
                        t(e, "rollcallStatus", Mt.Ft.inProgress)
                          ? u.push(e)
                          : c.push(e);
                      }),
                      o(s.VH.GET_ROLLCALL_HISTORY_OF_STUDENT, {
                        courseId: i,
                        rollcalls: c,
                      }),
                      o(s.VH.GET_ONGOING_ROLLCALLS_OF_STUDENT, {
                        courseId: i,
                        rollcalls: u,
                      }),
                      [2, c])
                );
            }
          });
        });
      }),
      (oe[s.VH.GET_ONGOING_ROLLCALLS_OF_STUDENT] = function (e, t) {
        var n = e.commit;
        return (0, a.mG)(this, void 0, void 0, function () {
          var e;
          return (0, a.Jh)(this, function (o) {
            switch (o.label) {
              case 0:
                return [4, Vt.Z.getOngoingStudentRollCalls(t)];
              case 1:
                return (
                  (e = o.sent()),
                  n(s.VH.GET_ONGOING_ROLLCALLS_OF_STUDENT, {
                    courseId: t,
                    rollcalls: e,
                  }),
                  [2, e]
                );
            }
          });
        });
      }),
      (oe[s.VH.GET_STUDENT_ROLLCALLS] = function (e, t) {
        var n = e.commit,
          o = t.courseId,
          i = t.rollcallId;
        return (0, a.mG)(this, void 0, void 0, function () {
          var e;
          return (0, a.Jh)(this, function (t) {
            switch (t.label) {
              case 0:
                return [4, Ot.Z.getStudentRollcalls(i)];
              case 1:
                return (
                  (e = t.sent()),
                  n(s.VH.GET_STUDENT_ROLLCALLS, {
                    courseId: o,
                    rollcallId: i,
                    studentRollcalls: e,
                  }),
                  [2]
                );
            }
          });
        });
      }),
      (oe[s.VH.CREATE_ROLLCALL] = function (e, t) {
        var n = e.commit,
          o = t.courseId,
          i = t.studentRollcalls,
          r = t.rollcallConfig;
        return (0, a.mG)(this, void 0, Promise, function () {
          var e;
          return (0, a.Jh)(this, function (t) {
            switch (t.label) {
              case 0:
                return [4, Ot.Z.createRollcall(o, i, r)];
              case 1:
                return (
                  (e = t.sent()),
                  e.rollcall && n(s.VH.CREATE_ROLLCALL, e.rollcall),
                  [2, e]
                );
            }
          });
        });
      }),
      (oe[s.VH.UPDATE_ROLLCALL] = function (e, t) {
        var n = e.commit;
        return (0, a.mG)(this, void 0, Promise, function () {
          var e, o;
          return (0, a.Jh)(this, function (i) {
            switch (i.label) {
              case 0:
                return [4, Ot.Z.updateRollcall(t)];
              case 1:
                return (
                  (e = i.sent()),
                  e &&
                    ((o = x().cloneDeep(t)),
                    (o.updatedAt = e),
                    n(s.VH.UPDATE_ROLLCALL, o)),
                  [2, Boolean(e)]
                );
            }
          });
        });
      }),
      (oe[s.VH.UPDATE_ROLLCALL_INFO] = function (e, t) {
        var n = e.commit,
          o = t.rollcall,
          i = t.rollcallConfig;
        return (0, a.mG)(this, void 0, Promise, function () {
          var e, t;
          return (0, a.Jh)(this, function (r) {
            switch (r.label) {
              case 0:
                return [4, Ot.Z.updateRollcallInfo(o, i)];
              case 1:
                return (
                  (e = r.sent()),
                  e &&
                    ((t = x().cloneDeep(o)),
                    (t.updatedAt = e),
                    n(s.VH.UPDATE_ROLLCALL, t)),
                  [2, Boolean(e)]
                );
            }
          });
        });
      }),
      (oe[s.VH.STOP_ROLLCALL] = function (e, t) {
        var n = e.commit;
        return (0, a.mG)(this, void 0, Promise, function () {
          var e, o;
          return (0, a.Jh)(this, function (i) {
            switch (i.label) {
              case 0:
                return t.isNumber
                  ? [4, Vt.Z.stopNumberRollcall(t.rollcallId)]
                  : [3, 2];
              case 1:
                return ((e = i.sent()), [3, 10]);
              case 2:
                return t.isRadar
                  ? [4, Vt.Z.stopRadarRollcall(t.rollcallId)]
                  : [3, 4];
              case 3:
                return ((e = i.sent()), [3, 10]);
              case 4:
                return t.type !== Mt.IV.selfRegistration
                  ? [3, 6]
                  : [4, Vt.Z.stopTimeTableRollcall(t.rollcallId)];
              case 5:
                return ((e = i.sent()), [3, 10]);
              case 6:
                return t.source !== Mt.S3.manual
                  ? [3, 8]
                  : [4, Vt.Z.stopManualRollcall(t.rollcallId)];
              case 7:
                return ((e = i.sent()), [3, 10]);
              case 8:
                return t.source !== Mt.S3.qrCode
                  ? [3, 10]
                  : [4, Vt.Z.stopManualRollcall(t.rollcallId)];
              case 9:
                ((e = i.sent()), (i.label = 10));
              case 10:
                return e
                  ? ((o = { status: Mt.Ft.finished }),
                    n(s.VH.MODIFY_ROLLCALL, { rollcall: t, rollcallConfig: o }),
                    [2, !0])
                  : [2, !1];
            }
          });
        });
      }),
      (oe[s.VH.DELETE_ROLLCALL] = function (e, t) {
        var n = e.commit,
          o = t.courseId,
          i = t.rollcallId;
        return (0, a.mG)(this, void 0, Promise, function () {
          var e;
          return (0, a.Jh)(this, function (t) {
            switch (t.label) {
              case 0:
                return [4, Ot.Z.deleteRollcall(i)];
              case 1:
                return (
                  (e = t.sent()),
                  e && n(s.VH.DELETE_ROLLCALL, { courseId: o, rollcallId: i }),
                  [2, e]
                );
            }
          });
        });
      }),
      (oe[s.VH.GET_LEAVE_RECORDS] = function (e, t) {
        var n = e.commit,
          o = t.courseId,
          i = t.rollcall;
        return (0, a.mG)(this, void 0, Promise, function () {
          var e;
          return (0, a.Jh)(this, function (t) {
            switch (t.label) {
              case 0:
                return [4, Ot.Z.getLeaveRecordStudents(o, i)];
              case 1:
                return (
                  (e = t.sent()),
                  e &&
                    n(s.VH.GET_LEAVE_RECORDS, { courseId: o, leaveRecords: e }),
                  [2, e]
                );
            }
          });
        });
      }),
      oe),
    Dt = Nt,
    Zt =
      ((ie = {}),
      (ie[s.VH.GET_ROLLCALLS] = function (e, t) {
        var n = t.courseId,
          o = t.rollcalls;
        e[String(n)]["rollcalls"] = o;
      }),
      (ie[s.VH.GET_STUDENTS_ROLLCALL_STATS] = function (e, t) {
        var n = t.courseId,
          o = t.stats;
        e[String(n)]["studentsRollcallStats"] = o;
      }),
      (ie[s.VH.GET_ROLLCALL_HISTORY_OF_STUDENT] = function (e, t) {
        var n = t.courseId,
          o = t.rollcalls;
        e[String(n)].studentRollcallHistory = o;
      }),
      (ie[s.VH.GET_ONGOING_ROLLCALLS_OF_STUDENT] = function (e, t) {
        var n = t.courseId,
          o = t.rollcalls;
        e[String(n)].studentOngoingRollCalls = o;
      }),
      (ie[s.VH.GET_STUDENT_ROLLCALLS] = function (e, t) {
        var n = t.courseId,
          o = t.rollcallId,
          i = t.studentRollcalls;
        (x().isEmpty(e[String(n)].studentRollcalls) &&
          (e[String(n)]["studentRollcalls"] = {}),
          (e[String(n)].studentRollcalls[String(o)] = x().keyBy(
            i,
            function (e) {
              return String(e.studentId);
            },
          )));
      }),
      (ie[s.VH.CREATE_ROLLCALL] = function (e, t) {
        (e[String(t.courseId)].rollcalls.push(t),
          (e[String(t.courseId)].studentRollcalls[String(t.rollcallId)] =
            x().keyBy(t.studentRollcalls, function (e) {
              return String(e.studentId);
            })));
      }),
      (ie[s.VH.UPDATE_ROLLCALL] = function (e, t) {
        var n = x().findIndex(e[String(t.courseId)].rollcalls, function (e) {
          return String(e.rollcallId) === String(t.rollcallId);
        });
        n >= 0 &&
          ((e[String(t.courseId)].rollcalls[n] = t),
          (e[String(t.courseId)].studentRollcalls[String(t.rollcallId)] =
            x().keyBy(t.studentRollcalls, function (e) {
              return String(e.studentId);
            })));
      }),
      (ie[s.VH.MODIFY_ROLLCALL] = function (e, t) {
        var n = t.rollcall,
          o = t.rollcallConfig,
          i = x().findIndex(e[String(n.courseId)].rollcalls, function (e) {
            return String(e.rollcallId) === String(n.rollcallId);
          });
        return (
          i >= 0 &&
            (e[String(n.courseId)].rollcalls[i] = Object.assign(
              e[String(n.courseId)].rollcalls[i],
              o,
            )),
          n
        );
      }),
      (ie[s.VH.DELETE_ROLLCALL] = function (e, t) {
        var n = t.courseId,
          o = t.rollcallId,
          i = x().findIndex(e[String(n)].rollcalls, function (e) {
            return String(e.rollcallId) === String(o);
          });
        i >= 0 &&
          (e[String(n)].studentRollcalls &&
            delete e[String(n)].studentRollcalls[String(o)],
          e[String(n)].rollcalls.splice(i, 1));
      }),
      (ie[s.VH.GET_LEAVE_RECORDS] = function (e, t) {
        var n = t.courseId,
          o = t.leaveRecords;
        e[String(n)]["leaveRecords"] = o;
      }),
      ie),
    Ut = Zt,
    Ht = function e(t) {
      var n = [];
      return (
        t.forEach(function (t) {
          (n.push(t),
            t.source === Mt.S3.merged &&
              t.children &&
              n.push.apply(n, e(t.children)));
        }),
        n
      );
    },
    Ft =
      ((re = {}),
      (re[s.VH.GET_ROLLCALLS] = function (e) {
        return function (t) {
          return x()(e[String(t)].rollcalls || [])
            .sortBy(function (e) {
              return e.rollcallTime;
            })
            .reverse()
            .value();
        };
      }),
      (re[s.VH.GET_ROLLCALL] = function (e) {
        return function (t, n) {
          var o = Ht(e[String(t)].rollcalls || []);
          return (
            o.find(function (e) {
              return String(e.rollcallId) === String(n);
            }) || null
          );
        };
      }),
      (re[s.VH.GET_STUDENTS_ROLLCALL_STATS] = function (e) {
        return function (t) {
          var n = x().keyBy(e[String(t)].students, "id");
          return x()(x().cloneDeep(e[String(t)].studentsRollcallStats) || [])
            .map(function (e) {
              return e.studentId && n && String(e.studentId) in n
                ? Object.assign(e, n[e.studentId])
                : null;
            })
            .compact()
            .sortBy(function (e) {
              return e.userNo;
            })
            .value();
        };
      }),
      (re[s.VH.GET_ROLLCALL_HISTORY_OF_STUDENT] = function (e) {
        return function (t) {
          return x()(e[String(t)].studentRollcallHistory || [])
            .sortBy(function (e) {
              return e.rollcallTime;
            })
            .reverse()
            .value();
        };
      }),
      (re[s.VH.GET_ONGOING_ROLLCALLS_OF_STUDENT] = function (e) {
        return function (t) {
          return x()(e[String(t)].studentOngoingRollCalls || [])
            .sortBy(function (e) {
              return e.rollcallTime;
            })
            .reverse()
            .value();
        };
      }),
      (re[s.VH.GET_STUDENT_ROLLCALLS] = function (e) {
        return function (t, n, o) {
          void 0 === o && (o = !1);
          var i = e[String(t)].students.map(function (i) {
            var r, a;
            return (
              null ===
                (a =
                  null === (r = e[String(t)]) || void 0 === r
                    ? void 0
                    : r.studentRollcalls[String(n)]) || void 0 === a
                ? void 0
                : a[String(i.id)]
            )
              ? Object.assign(
                  {},
                  i,
                  e[String(t)].studentRollcalls[String(n)][String(i.id)],
                )
              : o
                ? Object.assign({}, i, Mt.Wm.create(i.id))
                : null;
          });
          return i.filter(function (e) {
            return e;
          });
        };
      }),
      (re[s.VH.GET_LEAVE_RECORDS] = function (e) {
        return function (t) {
          return e[String(t)].leaveRecords || [];
        };
      }),
      re),
    Gt = Ft,
    zt = n(1064),
    Qt = n(14480),
    jt = n(96638),
    qt = n(12009),
    Jt =
      ((ae = {}),
      (ae[s.VH.FETCH_CLASSROOM_ACTIVITIES] = function (e, t) {
        var n,
          o = e.commit,
          i = e.state,
          r = t.courseId,
          l = t.refresh;
        return (0, a.mG)(this, void 0, void 0, function () {
          var e, t;
          return (0, a.Jh)(this, function (a) {
            switch (a.label) {
              case 0:
                return (
                  (e =
                    null !== (n = i[r].classroom.page) && void 0 !== n ? n : 0),
                  [4, zt.Z.getClassroomExams(r, l ? 1 : e + 1)]
                );
              case 1:
                return (
                  (t = a.sent()),
                  t &&
                    t.list &&
                    (o(s.VH.FETCH_CLASSROOM_ACTIVITIES, {
                      courseId: r,
                      classroomInfo: t,
                    }),
                    pt.Z.mutations.pushClassroomActivities(t.list)),
                  [2, t]
                );
            }
          });
        });
      }),
      (ae[s.VH.GET_CLASSROOM_EXAM] = function (e, t) {
        return (0, a.mG)(this, void 0, Promise, function () {
          var e;
          return (0, a.Jh)(this, function (n) {
            switch (n.label) {
              case 0:
                return [4, zt.Z.getClassroomExam(t)];
              case 1:
                return (
                  (e = n.sent()),
                  e
                    ? (pt.Z.mutations.pushClassroomActivities([e]), [2, e])
                    : [2, null]
                );
            }
          });
        });
      }),
      (ae[s.VH.DELETE_CLASSROOM_EXAM] = function (e, t) {
        var n = e.commit;
        return (0, a.mG)(this, void 0, Promise, function () {
          var e, o;
          return (0, a.Jh)(this, function (i) {
            switch (i.label) {
              case 0:
                return (
                  (e = pt.Z.state.classroomActivities[t]),
                  e ? [4, zt.Z.deleteClassroomExam(e.id)] : [2, !0]
                );
              case 1:
                return (
                  (o = i.sent()),
                  o
                    ? (n(s.VH.DELETE_CLASSROOM_EXAM, e.id),
                      pt.Z.mutations.popClassroomActivities([e.id]),
                      n(
                        ""
                          .concat(s.DB.NAME, "/")
                          .concat(s.DB.POP_EXAM_PAPER_TEMPLATES),
                        [e.paperTemplateId],
                        { root: !0 },
                      ),
                      [2, !0])
                    : [2, !1]
                );
            }
          });
        });
      }),
      (ae[s.VH.UPDATE_CLASSROOM_EXAM_STATUS] = function (e, t) {
        var n = e.commit,
          o = e.rootState,
          i = t.activityId,
          r = t.status;
        return (0, a.mG)(this, void 0, Promise, function () {
          var e, t, l;
          return (0, a.Jh)(this, function (a) {
            switch (a.label) {
              case 0:
                return i in pt.Z.state.classroomActivities
                  ? [4, Qt.Z.updateClassroomActivityStatus(i, r)]
                  : [2, null];
              case 1:
                return (
                  (e = a.sent()),
                  (t = x().cloneDeep(pt.Z.state.classroomActivities[i])),
                  (l = x().cloneDeep(
                    o.db.examPaperTemplates[t.paperTemplateId],
                  )),
                  e &&
                    ((t.status = r),
                    ((l && !t.isQuizControlBySubject) || r === qt.js.finish) &&
                      l.subjects.forEach(function (e) {
                        e.settings.status = r;
                      }),
                    pt.Z.mutations.pushClassroomActivities([t]),
                    n(
                      ""
                        .concat(s.DB.NAME, "/")
                        .concat(s.DB.PUSH_EXAM_PAPER_TEMPLATES),
                      [l],
                      { root: !0 },
                    )),
                  [2, t]
                );
            }
          });
        });
      }),
      (ae[s.VH.UPDATE_CLASSROOM_EXAM_SUBJECT_STATUS] = function (e, t) {
        var n = e.commit,
          o = e.rootState,
          i = t.activityId,
          r = t.subjectId,
          l = t.status;
        return (0, a.mG)(this, void 0, Promise, function () {
          var e, t, c, u;
          return (0, a.Jh)(this, function (a) {
            switch (a.label) {
              case 0:
                return i in pt.Z.state.classroomActivities
                  ? ((e = pt.Z.state.classroomActivities[i]),
                    (t = x().cloneDeep(
                      o.db.examPaperTemplates[e.paperTemplateId],
                    )),
                    (c = x().find(t.subjects, { id: r })),
                    c
                      ? [4, zt.Z.updateClassroomSubjectStatus(i, r, l)]
                      : [2, null])
                  : [2, null];
              case 1:
                return (
                  (u = a.sent()),
                  u &&
                    ((c.settings.status = l),
                    n(
                      ""
                        .concat(s.DB.NAME, "/")
                        .concat(s.DB.PUSH_EXAM_PAPER_TEMPLATES),
                      [t],
                      { root: !0 },
                    )),
                  [2, t]
                );
            }
          });
        });
      }),
      (ae[s.VH.UPDATE_CLASSROOM_EXAM_SUBJECT] = function (e, t) {
        var n = e.commit,
          o = e.rootState,
          i = t.activityId,
          r = t.subjectId,
          l = t.subject;
        return (0, a.mG)(this, void 0, Promise, function () {
          var e, t, c;
          return (0, a.Jh)(this, function (a) {
            return i in pt.Z.state.classroomActivities
              ? ((e = pt.Z.state.classroomActivities[i]),
                (t = x().cloneDeep(o.db.examPaperTemplates[e.paperTemplateId])),
                (c = x().findIndex(t.subjects, { id: r })),
                -1 === c
                  ? [2, null]
                  : ((t.subjects[c] = l),
                    n(
                      ""
                        .concat(s.DB.NAME, "/")
                        .concat(s.DB.PUSH_EXAM_PAPER_TEMPLATES),
                      [t],
                      { root: !0 },
                    ),
                    [2, t]))
              : [2, null];
          });
        });
      }),
      (ae[s.VH.GET_CLASSROOM_EXAM_PAPER] = function (e, t) {
        var n = e.commit;
        return (0, a.mG)(this, void 0, Promise, function () {
          var e, o, i;
          return (0, a.Jh)(this, function (r) {
            switch (r.label) {
              case 0:
                return t in pt.Z.state.classroomActivities
                  ? ((e = pt.Z.state.classroomActivities[t]),
                    [4, zt.Z.getClassroomSubjects(t)])
                  : [2, null];
              case 1:
                return (
                  (o = r.sent()),
                  (i = new jt.rY()),
                  (i.subjects = o),
                  (i.templateId = e.paperTemplateId),
                  n(
                    ""
                      .concat(s.DB.NAME, "/")
                      .concat(s.DB.PUSH_EXAM_PAPER_TEMPLATES),
                    [i],
                    { root: !0 },
                  ),
                  [2, i]
                );
            }
          });
        });
      }),
      (ae[s.VH.GIVE_CLASSROOM_EXAM_SCORE] = function (e, t) {
        var n = e.commit,
          o = e.rootState,
          i = t.activityId,
          r = t.subjectId,
          l = t.form;
        return (0, a.mG)(this, void 0, Promise, function () {
          var e, t, c, u, d;
          return (0, a.Jh)(this, function (a) {
            switch (a.label) {
              case 0:
                return i in pt.Z.state.classroomActivities
                  ? ((e = x().cloneDeep(pt.Z.state.classroomActivities[i])),
                    (t = x().cloneDeep(
                      o.db.examPaperTemplates[e.paperTemplateId],
                    )),
                    (c = x().find(
                      null === t || void 0 === t ? void 0 : t.subjects,
                      { id: r },
                    )),
                    (u = x().find(
                      null === c || void 0 === c
                        ? void 0
                        : c.subjectSubmissions,
                      { submissionId: l.submissionId },
                    )),
                    u ? [4, zt.Z.giveClassroomScore(i, l)] : [2, !1])
                  : [2, !1];
              case 1:
                return (
                  (d = a.sent()),
                  d &&
                    (l.gradedSubjects.forEach(function (t) {
                      if (
                        ((u.submmitScore = t.score),
                        (u.marked = Boolean(t.score)),
                        l.examineeId)
                      ) {
                        var n = e.submissions[l.examineeId].scoreData;
                        (n || (n = {}), (n[t.subjectId] = t.score));
                      }
                    }),
                    pt.Z.mutations.pushClassroomActivities([e]),
                    n(
                      ""
                        .concat(s.DB.NAME, "/")
                        .concat(s.DB.PUSH_EXAM_PAPER_TEMPLATES),
                      [t],
                      { root: !0 },
                    )),
                  [2, d]
                );
            }
          });
        });
      }),
      ae),
    Wt = Jt,
    Xt =
      (n(82772),
      (se = {}),
      (se[s.VH.FETCH_CLASSROOM_ACTIVITIES] = function (e, t) {
        var n = t.courseId,
          o = t.classroomInfo;
        ((e[n].classroom.page = o.page),
          (e[n].classroom.pages = o.pages),
          (e[n].classroom.hasMoreData = o.hasMoreData),
          (e[n].classroom.pageSize = o.pageSize));
        var i = o.list.map(function (e) {
          return e.id;
        });
        1 === o.page
          ? (e[n].classroom["list"] = i)
          : (e[n].classroom["list"] = e[n].classroom.list.concat(i));
      }),
      (se[s.VH.DELETE_CLASSROOM_EXAM] = function (e, t) {
        var n = x().indexOf(e.currentCourse.classroom.list, t);
        e.currentCourse.classroom.list.splice(n, 1);
      }),
      (se.updateSubjectOptionAttachments = function (e, t) {
        var n = t.option,
          o = t.attachments;
        n.attachments = o;
      }),
      se),
    Yt = Xt,
    Kt =
      ((le = {}),
      (le[s.VH.GET_CLASSROOM_EXAM] = function () {
        return function (e) {
          return e && e in pt.Z.state.classroomActivities
            ? pt.Z.state.classroomActivities[e]
            : null;
        };
      }),
      (le[s.VH.GET_CLASSROOM_ACTIVITIES] = function (e) {
        return function (t) {
          return String(t) in e
            ? e[String(t)].classroom.list.map(function (e) {
                return pt.Z.state.classroomActivities[e];
              })
            : [];
        };
      }),
      (le[s.VH.GET_CLASSROOM_EXAM_PAPER] = function (e, t, n) {
        return function (e) {
          if (e in pt.Z.state.classroomActivities) {
            var t = pt.Z.state.classroomActivities[e];
            if (
              t.paperTemplateId &&
              t.paperTemplateId in n.db.examPaperTemplates
            )
              return n.db.examPaperTemplates[t.paperTemplateId];
          }
          return null;
        };
      }),
      (le[s.VH.DISTRIBUTE_CLASSROOM_EXAM_PAPER] = function (e, t, n) {
        return function (e) {
          if (e in pt.Z.state.classroomActivities) {
            var t = pt.Z.state.classroomActivities[e];
            if (
              t.paperInstanceId &&
              t.paperInstanceId in n.db.examPaperInstances
            )
              return n.db.examPaperInstances[t.paperInstanceId];
          }
          return null;
        };
      }),
      le),
    $t = Kt,
    en = n(3336),
    tn = (n(47941), n(26833), n(94708)),
    nn = function (e, t) {
      return Array.isArray(e) ? new t() : Q.N0.toClass(e, t);
    },
    on = function (e) {
      return (0, a.mG)(void 0, void 0, void 0, function () {
        var t;
        return (0, a.Jh)(this, function (n) {
          switch (n.label) {
            case 0:
              return [4, $e.Z.get(et.Z.getCourseStatInfoForStudent(e))];
            case 1:
              return ((t = n.sent().data), [2, nn(t, tn.df)]);
          }
        });
      });
    },
    rn = function (e, t) {
      return (0, a.mG)(void 0, void 0, void 0, function () {
        var n;
        return (0, a.Jh)(this, function (o) {
          switch (o.label) {
            case 0:
              return [4, $e.Z.get(et.Z.getStudentStatInfoForStudent(e, t))];
            case 1:
              return ((n = o.sent().data), [2, nn(n, tn.HG)]);
          }
        });
      });
    },
    an = function (e) {
      return (0, a.mG)(void 0, void 0, void 0, function () {
        var t;
        return (0, a.Jh)(this, function (n) {
          switch (n.label) {
            case 0:
              return [
                4,
                $e.Z.get(et.Z.getStudentStatInfoForStudent(e, c.Z.userID)),
              ];
            case 1:
              return ((t = n.sent().data), [2, nn(t, tn.vo)]);
          }
        });
      });
    },
    sn = function (e, t) {
      return (0, a.mG)(void 0, void 0, void 0, function () {
        var n;
        return (0, a.Jh)(this, function (o) {
          switch (o.label) {
            case 0:
              return [4, $e.Z.get(et.Z.getUserCourseVisits(e, t))];
            case 1:
              return ((n = o.sent().data), [2, nn(n, tn.DF)]);
          }
        });
      });
    },
    ln = function (e, t) {
      return (0, a.mG)(void 0, void 0, void 0, function () {
        var n;
        return (0, a.Jh)(this, function (o) {
          switch (o.label) {
            case 0:
              return [4, $e.Z.get(et.Z.getUserVideosVisit(e, t))];
            case 1:
              return ((n = o.sent().data), [2, Q.N0.toClasses(n, tn.nx)]);
          }
        });
      });
    },
    cn = function (e, t) {
      return (0, a.mG)(void 0, void 0, void 0, function () {
        var n;
        return (0, a.Jh)(this, function (o) {
          switch (o.label) {
            case 0:
              return [4, $e.Z.get(et.Z.getUserInteractionsVisit(e, t))];
            case 1:
              return ((n = o.sent().data), [2, Q.N0.toClasses(n, tn.nx)]);
          }
        });
      });
    },
    un = function (e, t) {
      return (0, a.mG)(void 0, void 0, void 0, function () {
        var n;
        return (0, a.Jh)(this, function (o) {
          switch (o.label) {
            case 0:
              return [4, $e.Z.get(et.Z.getUserMaterialDownload(e, t))];
            case 1:
              return ((n = o.sent().data), [2, nn(n, tn.Tb)]);
          }
        });
      });
    },
    dn = function (e) {
      return (0, a.mG)(void 0, void 0, void 0, function () {
        var t;
        return (0, a.Jh)(this, function (n) {
          switch (n.label) {
            case 0:
              return [4, $e.Z.get(et.Z.getCourseStatInfoForInstructor(e))];
            case 1:
              return (
                (t = n.sent().data),
                t &&
                  void 0 === t["bulletin"] &&
                  void 0 !== t["bulletin_visits"] &&
                  (t["bulletin"] = t["bulletin_visits"]),
                [2, nn(t, tn.df)]
              );
          }
        });
      });
    },
    pn = function (e) {
      return (0, a.mG)(void 0, void 0, void 0, function () {
        var t;
        return (0, a.Jh)(this, function (n) {
          switch (n.label) {
            case 0:
              return [4, $e.Z.get(et.Z.getStudentsStat(e))];
            case 1:
              return (
                (t = n.sent().data),
                Object.keys(t).forEach(function (e) {
                  return (t[e]["user_id"] = e);
                }),
                [2, Q.N0.toClasses(Object.values(t), tn.HG)]
              );
          }
        });
      });
    },
    mn = function (e) {
      return (0, a.mG)(void 0, void 0, Promise, function () {
        var t, n;
        return (0, a.Jh)(this, function (o) {
          switch (o.label) {
            case 0:
              return [4, $e.Z.get(et.Z.getStudentsStat(e))];
            case 1:
              return (
                (t = o.sent().data),
                t && 0 !== Object.keys(t).length
                  ? ((n = []),
                    Object.keys(t).forEach(function (e) {
                      var o = t[e];
                      "object" === (0, en.Z)(o) &&
                        ((o["user_id"] = Number(e)), n.push(o));
                    }),
                    [2, { studentsStatInfo: Q.N0.toClasses(n, tn.FO) || [] }])
                  : [2, null]
              );
          }
        });
      });
    },
    fn = function (e) {
      return (0, a.mG)(void 0, void 0, void 0, function () {
        var t;
        return (0, a.Jh)(this, function (n) {
          switch (n.label) {
            case 0:
              return [4, $e.Z.get(et.Z.getStudentsVisits(e))];
            case 1:
              return ((t = n.sent().data), [2, Q.N0.toClasses(t, tn.DF)]);
          }
        });
      });
    },
    vn = function (e) {
      return (0, a.mG)(void 0, void 0, void 0, function () {
        var t, n, o, i, r, s;
        return (0, a.Jh)(this, function (a) {
          switch (a.label) {
            case 0:
              return (
                (t = {
                  material: ["user", "activity", "upload"],
                  web_link: ["user", "activity"],
                  lesson: ["user", "activity"],
                  online_video: ["user", "activity"],
                }),
                [
                  4,
                  $e.Z.get(
                    et.Z.getCourseActivitiesStatisticsByTypes(
                      e,
                      JSON.stringify(t),
                    ),
                  ),
                ]
              );
            case 1:
              return (
                (n = a.sent().data),
                (o = Q.N0.toClasses(n, tn.Tb, "material")),
                (i = Q.N0.toClasses(n, tn.nx, "web_link")),
                (r = Q.N0.toClasses(n, tn.nx, "lesson")),
                (s = Q.N0.toClasses(n, tn.nx, "online_video")),
                [2, { material: o, webLink: i, onlineVideo: s, lesson: r }]
              );
          }
        });
      });
    },
    gn = {
      getCourseStatInfoForStudent: on,
      getStudentStatInfoForStudent: rn,
      getStudentStatInfoForSelf: an,
      getUserCourseVisits: sn,
      getUserVideosVisit: ln,
      getUserInteractionsVisit: cn,
      getUserMaterialDownload: un,
      getCourseStatInfoForInstructor: dn,
      getStudentsStat: pn,
      getAggregatedStudentsStat: mn,
      getStudentsVisits: fn,
      getCourseActivitiesStatisticsByTypes: vn,
    },
    hn =
      ((ce = {}),
      (ce[s.VH.GET_USER_ANALYSIS_DATA] = function (e, t) {
        var n = e.commit,
          o = t.courseId,
          i = t.userId;
        return (0, a.mG)(this, void 0, void 0, function () {
          var e, t, r, l, c, u, d;
          return (0, a.Jh)(this, function (a) {
            switch (a.label) {
              case 0:
                return [
                  4,
                  Promise.all([
                    gn.getCourseStatInfoForStudent(o),
                    gn.getStudentStatInfoForStudent(o, i),
                    gn.getUserCourseVisits(o, i),
                    gn.getUserMaterialDownload(o, i),
                    gn.getUserVideosVisit(o, i),
                    gn.getUserInteractionsVisit(o, i),
                  ]),
                ];
              case 1:
                return (
                  (e = a.sent()),
                  (t = e[0]),
                  (r = e[1]),
                  (l = e[2]),
                  (c = e[3]),
                  (u = e[4]),
                  (d = e[5]),
                  [t, r, l, c, u, d].every(function (e) {
                    return !!e;
                  }) &&
                    n(s.VH.GET_USER_ANALYSIS_DATA, {
                      courseId: o,
                      analysisData: {
                        courseStatInfo: t,
                        studentStatInfo: r,
                        userCourseVisit: l,
                        materialDownload: c,
                        onlineVideoVisits: u,
                        interactionVisits: d,
                      },
                    }),
                  [2]
                );
            }
          });
        });
      }),
      (ce[s.VH.GET_SELF_ANALYSIS_DATA] = function (e, t) {
        var n = e.commit,
          o = t.courseId;
        return (0, a.mG)(this, void 0, void 0, function () {
          var e, t, i;
          return (0, a.Jh)(this, function (r) {
            switch (r.label) {
              case 0:
                return [
                  4,
                  Promise.all([
                    gn.getCourseStatInfoForStudent(o),
                    gn.getStudentStatInfoForSelf(o),
                  ]),
                ];
              case 1:
                return (
                  (e = r.sent()),
                  (t = e[0]),
                  (i = e[1]),
                  [t, i].every(function (e) {
                    return !!e;
                  }) &&
                    n(s.VH.GET_SELF_ANALYSIS_DATA, {
                      courseId: o,
                      analysisData: { courseStatInfo: t, studentStatInfo: i },
                    }),
                  [2]
                );
            }
          });
        });
      }),
      (ce[s.VH.GET_ANALYSIS_OVERVIEW_DATA] = function (e, t) {
        var n = e.commit;
        return (0, a.mG)(this, void 0, void 0, function () {
          var e, o, i;
          return (0, a.Jh)(this, function (r) {
            switch (r.label) {
              case 0:
                return [
                  4,
                  Promise.all([
                    gn.getCourseStatInfoForInstructor(t),
                    gn.getCourseActivitiesStatisticsByTypes(t),
                  ]),
                ];
              case 1:
                return (
                  (e = r.sent()),
                  (o = e[0]),
                  (i = e[1]),
                  [o, i].every(function (e) {
                    return !!e;
                  }) &&
                    n(s.VH.GET_ANALYSIS_OVERVIEW_DATA, {
                      courseId: t,
                      analysisData: {
                        courseStatInfo: o,
                        courseActivitiesInfo: i,
                      },
                    }),
                  [2]
                );
            }
          });
        });
      }),
      (ce[s.VH.GET_USERS_ANALYSIS_DATA] = function (e, t) {
        var n = e.commit;
        return (0, a.mG)(this, void 0, void 0, function () {
          var e, o, i;
          return (0, a.Jh)(this, function (r) {
            switch (r.label) {
              case 0:
                return [
                  4,
                  Promise.all([gn.getStudentsStat(t), gn.getStudentsVisits(t)]),
                ];
              case 1:
                return (
                  (e = r.sent()),
                  (o = e[0]),
                  (i = e[1]),
                  [o, i].every(function (e) {
                    return !!e;
                  }) &&
                    n(s.VH.GET_USERS_ANALYSIS_DATA, {
                      courseId: t,
                      analysisData: {
                        studentsStatInfo: o,
                        usersCourseVisit: i,
                      },
                    }),
                  [2]
                );
            }
          });
        });
      }),
      (ce[s.VH.GET_USERS_ANALYSIS_AGGREGATED_DATA] = function (e, t) {
        var n = e.commit;
        return (0, a.mG)(this, void 0, void 0, function () {
          var e;
          return (0, a.Jh)(this, function (o) {
            switch (o.label) {
              case 0:
                return [4, gn.getAggregatedStudentsStat(t)];
              case 1:
                return (
                  (e = o.sent()),
                  e &&
                    n(s.VH.GET_USERS_ANALYSIS_AGGREGATED_DATA, {
                      courseId: t,
                      analysisData: e,
                    }),
                  [2]
                );
            }
          });
        });
      }),
      ce),
    Cn = hn,
    yn =
      ((ue = {}),
      (ue[s.VH.GET_USER_ANALYSIS_DATA] = function (e, t) {
        var n = t.courseId,
          o = t.analysisData;
        e[n]["userAnalysisData"] = o;
      }),
      (ue[s.VH.GET_SELF_ANALYSIS_DATA] = function (e, t) {
        var n = t.courseId,
          o = t.analysisData;
        e[n]["selfAnalysisData"] = o;
      }),
      (ue[s.VH.GET_ANALYSIS_OVERVIEW_DATA] = function (e, t) {
        var n = t.courseId,
          o = t.analysisData;
        e[n]["analysisOverviewData"] = o;
      }),
      (ue[s.VH.GET_USERS_ANALYSIS_DATA] = function (e, t) {
        var n = t.courseId,
          o = t.analysisData;
        e[n]["usersAnalysisData"] = o;
      }),
      (ue[s.VH.GET_USERS_ANALYSIS_AGGREGATED_DATA] = function (e, t) {
        var n = t.courseId,
          o = t.analysisData;
        e[n]["usersAggregatedAnalysisData"] = o;
      }),
      ue),
    An = yn,
    wn = n(28550),
    bn = {
      getPerformanceScoreSetting: function (e) {
        return (0, a.mG)(void 0, void 0, void 0, function () {
          var t;
          return (0, a.Jh)(this, function (n) {
            switch (n.label) {
              case 0:
                return [4, $e.Z.get(et.Z.getPerformanceScoreSetting(e))];
              case 1:
                return (
                  (t = n.sent().data),
                  [2, Q.N0.toClass(t, wn.Wl, "setting")]
                );
            }
          });
        });
      },
      getStudentsPerformance: function (e, t) {
        return (
          void 0 === t && (t = !0),
          (0, a.mG)(void 0, void 0, void 0, function () {
            var n;
            return (0, a.Jh)(this, function (o) {
              switch (o.label) {
                case 0:
                  return [
                    4,
                    $e.Z.get(et.Z.getStudentsPerformance(e), {
                      params: { isOriginalScore: t },
                    }),
                  ];
                case 1:
                  return ((n = o.sent().data), [2, Q.N0.toClass(n, wn.lt)]);
              }
            });
          })
        );
      },
      updateStudentPerformanceScore: function (e, t, n) {
        return (0, a.mG)(void 0, void 0, void 0, function () {
          var o;
          return (0, a.Jh)(this, function (i) {
            switch (i.label) {
              case 0:
                return [
                  4,
                  $e.Z.put(et.Z.updateStudentPerformanceScore(e), {
                    student_id: t,
                    score: n,
                  }),
                ];
              case 1:
                return ((o = i.sent().status), [2, 200 === o]);
            }
          });
        });
      },
      getCurrentUserPerformanceScore: function (e, t) {
        return (
          void 0 === t && (t = !0),
          (0, a.mG)(void 0, void 0, void 0, function () {
            var n;
            return (0, a.Jh)(this, function (o) {
              switch (o.label) {
                case 0:
                  return [
                    4,
                    $e.Z.get(et.Z.getCurrentUserPerformanceScore(e), {
                      params: { isOriginalScore: t },
                    }),
                  ];
                case 1:
                  return ((n = o.sent().data), [2, Q.N0.toClass(n, wn.PY)]);
              }
            });
          })
        );
      },
      updateStudentInteractionScore: function (e, t, n) {
        return (0, a.mG)(void 0, void 0, void 0, function () {
          var o;
          return (0, a.Jh)(this, function (i) {
            switch (i.label) {
              case 0:
                return [
                  4,
                  $e.Z.put(et.Z.updateStudentInteractionScore(e), [
                    { student_id: t, score: n },
                  ]),
                ];
              case 1:
                return ((o = i.sent().status), [2, 200 === o]);
            }
          });
        });
      },
    },
    En =
      ((de = {}),
      (de[s.VH.GET_PERFORMANCE_INFO] = function (e, t) {
        var n = e.commit,
          o = e.state,
          i = e.dispatch;
        return (0, a.mG)(this, void 0, void 0, function () {
          var e, r, l, u, d, p, m, f, v;
          return (0, a.Jh)(this, function (a) {
            switch (a.label) {
              case 0:
                return (
                  (e = (0, dt.y)().isCourseInstructorViewpoint(
                    o[t].enrollment,
                  )),
                  (r = new wn.RT()),
                  (r.courseId = Number(t)),
                  e
                    ? [
                        4,
                        Promise.all([
                          bn.getPerformanceScoreSetting(t),
                          bn.getStudentsPerformance(t),
                        ]),
                      ]
                    : [3, 2]
                );
              case 1:
                return (
                  (l = a.sent()),
                  (u = l[0]),
                  (d = l[1]),
                  (r.setting = u),
                  d &&
                    ((r.studentsPerformance = d),
                    (p = x().keyBy(o[t].students, "id")),
                    r.studentsPerformance.studentPerformances.forEach(
                      function (e) {
                        e.id in p && e.updateStudentInfo(p[e.id]);
                      },
                    )),
                  [3, 4]
                );
              case 2:
                return (
                  (m = [bn.getCurrentUserPerformanceScore(t)]),
                  (f = o[t].students.find(function (e) {
                    return e.id === c.Z.userID;
                  })),
                  f || m.push(i(s.VH.GET_STUDENTS, t)),
                  [4, Promise.all(m)]
                );
              case 3:
                ((v = a.sent()[0]),
                  (f =
                    f ||
                    o[t].students.find(function (e) {
                      return e.id === c.Z.userID;
                    })),
                  v &&
                    f &&
                    (v.updateStudentInfo(f),
                    r.studentsPerformance.studentPerformances.push(v)),
                  (a.label = 4));
              case 4:
                return (
                  n(s.VH.GET_PERFORMANCE_INFO, {
                    courseId: t,
                    performanceInfo: r,
                  }),
                  [2, r]
                );
            }
          });
        });
      }),
      (de[s.VH.UPDATE_STUDENT_PERFORMANCE_SCORE] = function (e, t) {
        var n = e.commit,
          o = e.getters,
          i = t.courseId,
          r = t.studentId,
          l = t.score;
        return (0, a.mG)(this, void 0, void 0, function () {
          var e, t;
          return (0, a.Jh)(this, function (a) {
            switch (a.label) {
              case 0:
                return (
                  (e = o[s.VH.GET_STUDENT_PERFORMANCE](i, r)),
                  e
                    ? [
                        4,
                        bn.updateStudentPerformanceScore(
                          i,
                          r,
                          l - e.interactionScore,
                        ),
                      ]
                    : [2, !1]
                );
              case 1:
                return (
                  (t = a.sent()),
                  t &&
                    n(s.VH.UPDATE_STUDENT_PERFORMANCE_SCORE, {
                      courseId: i,
                      studentId: r,
                      score: l,
                    }),
                  [2, t]
                );
            }
          });
        });
      }),
      (de[s.VH.UPDATE_STUDENT_INTERACTION_PERFORMANCE_SCORE] = function (e, t) {
        var n,
          o = e.commit,
          i = e.rootState,
          r = t.courseId,
          l = t.interactionId,
          c = t.studentId,
          u = t.score;
        return (0, a.mG)(this, void 0, void 0, function () {
          var e, t, d;
          return (0, a.Jh)(this, function (a) {
            switch (a.label) {
              case 0:
                return (
                  (e = x().cloneDeep(i.db.interactions[l])),
                  e
                    ? ((t = x().find(e.studentInteractions, { studentId: c })),
                      t
                        ? [4, bn.updateStudentInteractionScore(l, c, u)]
                        : [2, !1])
                    : [2, !1]
                );
              case 1:
                return (
                  (d = a.sent()),
                  d &&
                    (o(s.VH.UPDATE_STUDENT_INTERACTION_PERFORMANCE_SCORE, {
                      courseId: r,
                      studentId: c,
                      scoreDiff:
                        u - (null !== (n = t.score) && void 0 !== n ? n : 0),
                    }),
                    (t.score = u),
                    o(
                      "".concat(s.DB.NAME, "/").concat(s.DB.PUSH_INTERACTIONS),
                      [e],
                      { root: !0 },
                    )),
                  [2, d]
                );
            }
          });
        });
      }),
      de),
    Sn = En,
    Tn =
      ((pe = {}),
      (pe[s.VH.GET_PERFORMANCE_INFO] = function (e, t) {
        var n = t.courseId,
          o = t.performanceInfo;
        e[n]["performanceInfo"] = o;
      }),
      (pe[s.VH.UPDATE_STUDENT_PERFORMANCE_SCORE] = function (e, t) {
        var n = t.courseId,
          o = t.studentId,
          i = t.score,
          r = e[n].performanceInfo.studentsPerformance.studentPerformances.find(
            function (e) {
              return e.id === o;
            },
          );
        r && (r["score"] = i);
      }),
      (pe[s.VH.UPDATE_STUDENT_INTERACTION_PERFORMANCE_SCORE] = function (e, t) {
        var n,
          o = t.courseId,
          i = t.studentId,
          r = t.scoreDiff,
          a = e[o].performanceInfo.studentsPerformance.studentPerformances.find(
            function (e) {
              return e.id === i;
            },
          );
        a &&
          ((a["score"] = (null !== (n = a.score) && void 0 !== n ? n : 0) + r),
          (a["interactionScore"] = a.interactionScore + r));
      }),
      pe),
    _n = Tn,
    In =
      ((me = {}),
      (me[s.VH.GET_PERFORMANCE_INFO] = function (e) {
        return function (t) {
          return e[t].performanceInfo;
        };
      }),
      (me[s.VH.GET_STUDENT_PERFORMANCE] = function (e) {
        return function (t, n) {
          var o;
          return null !==
            (o = e[
              t
            ].performanceInfo.studentsPerformance.studentPerformances.find(
              function (e) {
                return e.id === n;
              },
            )) && void 0 !== o
            ? o
            : null;
        };
      }),
      me),
    Ln = In,
    kn =
      ((fe = {}),
      (fe[s.VH.FETCH_INTERACTIONS] = function (e, t) {
        var n = e.commit;
        return (0, a.mG)(this, void 0, void 0, function () {
          var e;
          return (0, a.Jh)(this, function (o) {
            switch (o.label) {
              case 0:
                return [4, nt.ZP.getInteractions(t)];
              case 1:
                return (
                  (e = o.sent()),
                  (null === e || void 0 === e ? void 0 : e.list)
                    ? (n(s.VH.FETCH_INTERACTIONS, {
                        courseId: t,
                        interactionsInfo: e,
                      }),
                      n(
                        ""
                          .concat(s.DB.NAME, "/")
                          .concat(s.DB.PUSH_INTERACTIONS),
                        e.list,
                        { root: !0 },
                      ),
                      [2, e.list])
                    : [2, []]
                );
            }
          });
        });
      }),
      fe),
    Pn = kn,
    Bn =
      ((ve = {}),
      (ve[s.VH.FETCH_INTERACTIONS] = function (e, t) {
        var n = t.courseId,
          o = t.interactionsInfo,
          i = o.list.map(function (e) {
            return e.id;
          });
        e[n].interactions["list"] = i;
      }),
      ve),
    Rn = Bn,
    xn =
      (n(86535),
      n(99244),
      (ge = {}),
      (ge[s.VH.GET_INTERACTIONS] = function (e, t, n) {
        return function (t) {
          return String(t) in e
            ? e[String(t)].interactions.list.map(function (e) {
                return n.db.interactions[e];
              })
            : [];
        };
      }),
      (ge[s.VH.GET_STUDENT_INTERACTIONS] = function (e, t) {
        return function (n, o) {
          var i = (0, dt.y)().isCourseInstructorViewpoint(e[n].enrollment),
            r = t[s.VH.GET_INTERACTIONS](n);
          return x()(r)
            .flatMap(function (e) {
              var t,
                n = x().cloneDeep(e);
              if (x().get(n, "data.is_anonymous_vote")) return [];
              if (i) {
                var r = x().find(n.studentInteractions, { studentId: o });
                t = null === r || void 0 === r ? void 0 : r.score;
              } else t = null === n || void 0 === n ? void 0 : n.score;
              return void 0 !== t
                ? ((n.studentId = o),
                  (n.score = null !== t && void 0 !== t ? t : 0),
                  [n])
                : [];
            })
            .flatten()
            .value();
        };
      }),
      ge),
    On = xn,
    Mn = n(43673),
    Vn = n(10715),
    Nn = n(23190),
    Dn = n(65042),
    Zn = rt.Z.get("Exam Vuex Actions"),
    Un =
      ((he = {}),
      (he[s.VH.FETCH_EXAM_ACTIVITIES] = function (e, t) {
        var n,
          o = e.commit,
          i = e.state,
          r = e.dispatch,
          l = t.courseId,
          c = t.refresh,
          u = t.conditions;
        return (0, a.mG)(this, void 0, void 0, function () {
          var e, t;
          return (0, a.Jh)(this, function (a) {
            switch (a.label) {
              case 0:
                return (
                  (e = null !== (n = i[l].exam.page) && void 0 !== n ? n : 0),
                  [
                    4,
                    Promise.all([
                      Mn.Z.getExams(l, c ? 1 : e + 1, u),
                      r(s.VH.GET_GROUP_SETS, l),
                    ]),
                  ]
                );
              case 1:
                return (
                  (t = a.sent()[0]),
                  t &&
                    t.list &&
                    (o(s.VH.FETCH_EXAM_ACTIVITIES, {
                      courseId: l,
                      examInfo: t,
                    }),
                    o(
                      ""
                        .concat(s.DB.NAME, "/")
                        .concat(s.DB.PUSH_EXAM_ACTIVITIES),
                      t.list,
                      { root: !0 },
                    )),
                  [2, t]
                );
            }
          });
        });
      }),
      (he[s.VH.GET_EXAM_ACTIVITY] = function (e, t) {
        var n,
          o,
          i = e.commit,
          r = e.dispatch,
          l = e.rootState,
          c = t.courseId,
          u = t.activityId;
        return (0, a.mG)(this, void 0, Promise, function () {
          var e, t, d, p, m;
          return (0, a.Jh)(this, function (a) {
            switch (a.label) {
              case 0:
                return [
                  4,
                  Promise.all([
                    Mn.Z.getExam(u),
                    Mn.Z.getExamSubjectsSummary(u),
                    l.featureToggle.examSubjectGroup
                      ? Mn.Z.getExamSubjectGroups(u)
                      : Promise.resolve(null),
                  ]),
                ];
              case 1:
                return (
                  (e = a.sent()),
                  (t = e[0]),
                  (d = e[1]),
                  (p = e[2]),
                  t
                    ? ((t.subjectGroups = p),
                      d &&
                        ((t.totalPoints = (0, Nn.il)(d)),
                        (t.hasAudioSubject = (0, Nn.DG)(d))),
                      t.groupSetId
                        ? [
                            4,
                            r(s.VH.GET_GROUPS, {
                              groupSetId: t.groupSetId,
                              courseId: c,
                            }),
                          ]
                        : [3, 3])
                    : [2, null]
                );
              case 2:
                (a.sent(), (a.label = 3));
              case 3:
                return (
                  (m = [t]),
                  (null === (n = t.makeUpRecord) || void 0 === n
                    ? void 0
                    : n.makeUpExam) &&
                    ((t.makeUpRecord.makeUpExam.hasTemporarySubmission =
                      t.makeUpRecord.hasTemporarySubmission),
                    t.makeUpRecord.examPaperType === jt.hE.makeUpExam
                      ? (t.makeUpRecord.makeUpExam.subjectsCount =
                          null === (o = t.makeUpExamPaper) || void 0 === o
                            ? void 0
                            : o.subjectsCount)
                      : (t.makeUpRecord.makeUpExam.subjectsCount =
                          t.subjectsCount),
                    (t.makeUpRecord.makeUpExam.submittedTimes = t.makeUpRecord
                      .hasSubmitted
                      ? 1
                      : 0),
                    m.push(t.makeUpRecord.makeUpExam)),
                  i(
                    "".concat(s.DB.NAME, "/").concat(s.DB.PUSH_EXAM_ACTIVITIES),
                    m,
                    { root: !0 },
                  ),
                  [2, t]
                );
            }
          });
        });
      }),
      (he[s.VH.DELETE_EXAM_ACTIVITY] = function (e, t) {
        var n = e.commit,
          o = e.rootState;
        return (0, a.mG)(this, void 0, Promise, function () {
          var e, i;
          return (0, a.Jh)(this, function (r) {
            switch (r.label) {
              case 0:
                return (
                  (e = o.db.examActivities[t]),
                  e ? [4, Mn.Z.deleteExam(e.id)] : [2, !0]
                );
              case 1:
                return (
                  (i = r.sent()),
                  i
                    ? (n(s.VH.DELETE_EXAM_ACTIVITY, e.id),
                      n(
                        ""
                          .concat(s.DB.NAME, "/")
                          .concat(s.DB.POP_EXAM_ACTIVITIES),
                        [e.id],
                        { root: !0 },
                      ),
                      [2, !0])
                    : [2, !1]
                );
            }
          });
        });
      }),
      (he[s.VH.GET_EXAM_SUBMITTERS] = function (e, t) {
        var n,
          o = e.commit,
          i = e.rootState;
        return (0, a.mG)(this, void 0, Promise, function () {
          var e, r, l, u;
          return (0, a.Jh)(this, function (a) {
            switch (a.label) {
              case 0:
                return (
                  (e = (0, dt.y)().isCourseInstructorViewpoint(
                    i.course.currentCourse.enrollment,
                  )),
                  (r = x().cloneDeep(i.db.examActivities[t])),
                  r
                    ? ((l = []), e ? [4, Mn.Z.getExamExaminees(t)] : [3, 2])
                    : [2, []]
                );
              case 1:
                return ((l = a.sent()), [3, 4]);
              case 2:
                return [
                  4,
                  Mn.Z.getExamExaminee(
                    t,
                    null !== (n = c.Z.userID) && void 0 !== n ? n : 0,
                  ),
                ];
              case 3:
                ((u = a.sent()), u && l.push(u), (a.label = 4));
              case 4:
                return (
                  (r.submitters = Vn.Z.getExamSubmitters(
                    i.course.currentCourse,
                    r,
                    l,
                  )),
                  o(
                    "".concat(s.DB.NAME, "/").concat(s.DB.PUSH_EXAM_ACTIVITIES),
                    [r],
                    { root: !0 },
                  ),
                  [2, r.submitters]
                );
            }
          });
        });
      }),
      (he[s.VH.GET_EXAM_SUBMISSIONS] = function (e, t) {
        var n = e.commit,
          o = e.rootState;
        return (0, a.mG)(this, void 0, Promise, function () {
          var e, i;
          return (0, a.Jh)(this, function (r) {
            switch (r.label) {
              case 0:
                return (
                  (e = x().cloneDeep(o.db.examActivities[t])),
                  e ? [4, Mn.Z.getExamSubmissions(t)] : [2, []]
                );
              case 1:
                return (
                  (i = r.sent()),
                  i
                    ? ((e.finalScore = i.finalScore),
                      (e.score = i.score),
                      (e.scoreRule = i.scoreRule),
                      i.submissions.map(function (t) {
                        var n;
                        e.submissions || (e.submissions = {});
                        var o = null !== (n = t.id) && void 0 !== n ? n : 0;
                        o in e.submissions
                          ? Object.assign(e.submissions[o], Q.N0.cleanObject(t))
                          : (e.submissions[o] = t);
                      }),
                      n(
                        ""
                          .concat(s.DB.NAME, "/")
                          .concat(s.DB.PUSH_EXAM_ACTIVITIES),
                        [e],
                        { root: !0 },
                      ),
                      [2, i.submissions])
                    : [2, []]
                );
            }
          });
        });
      }),
      (he[s.VH.GET_EXAM_SUBMISSION] = function (e, t) {
        var n = e.commit,
          o = e.rootState,
          i = t.activityId,
          r = t.submissionId;
        return (0, a.mG)(this, void 0, Promise, function () {
          var e, t, l;
          return (0, a.Jh)(this, function (a) {
            switch (a.label) {
              case 0:
                return (
                  (e = x().cloneDeep(o.db.examActivities[i])),
                  e
                    ? ((t = x().find(e.submitters, function (e) {
                        return Boolean(x().find(e.submissions, { id: r }));
                      })),
                      [4, Mn.Z.getExamSubmission(i, r)])
                    : [2, null]
                );
              case 1:
                return (
                  (l = a.sent()),
                  l
                    ? (e.submissions || (e.submissions = {}),
                      (l.id = r),
                      t && (l.submitterId = t.submitterId),
                      r in e.submissions
                        ? Object.assign(e.submissions[r], Q.N0.cleanObject(l))
                        : (e.submissions[r] = l),
                      n(
                        ""
                          .concat(s.DB.NAME, "/")
                          .concat(s.DB.PUSH_EXAM_ACTIVITIES),
                        [e],
                        { root: !0 },
                      ),
                      [2, l])
                    : [2, null]
                );
            }
          });
        });
      }),
      (he[s.VH.SUBMIT_SINGLE_EXAM_SUBMISSION] = function (e, t) {
        var n,
          o = e.commit,
          i = e.rootState,
          r = t.activityId,
          l = t.submissionId,
          c = t.form;
        return (0, a.mG)(this, void 0, Promise, function () {
          var e, t, u, d, p, m;
          return (0, a.Jh)(this, function (a) {
            switch (a.label) {
              case 0:
                return (
                  (e = x().cloneDeep(i.db.examActivities[r])),
                  l === e.temporarySubmissionId &&
                  e.submissions &&
                  l in e.submissions
                    ? [4, Mn.Z.submitSingleSubmission(l, c)]
                    : (Zn.warn(
                        "[SUBMIT_SINGLE_EXAM_SUBMISSION] mobile data error.",
                        "submissionId is ".concat(l),
                        "temporarySubmissionId is ".concat(
                          e.temporarySubmissionId,
                        ),
                        "submissions key is ".concat(
                          Object.keys(
                            null !== (n = e.submissions) && void 0 !== n
                              ? n
                              : {},
                          ),
                        ),
                      ),
                      [2, !1])
                );
              case 1:
                return (
                  (t = a.sent()),
                  (u = t.success),
                  (d = t.status),
                  (p = t.leftTime),
                  200 !== d &&
                    Zn.warn(
                      "[SUBMIT_SINGLE_EXAM_SUBMISSION] fetch submitSingleSubmission error.",
                      "status is ".concat(d),
                      "params.submissionId is ".concat(l),
                      "params.form is ".concat(JSON.stringify(c)),
                    ),
                  u &&
                    ((m = e.submissions[l].answers.findIndex(function (e) {
                      return e.subjectId === c.subject.id;
                    })),
                    -1 !== m &&
                      (e.submissions[l].answers[m] =
                        jt._T.fromSingleSubmissionForm(c)),
                    (e.submissions[l].leftTime = p),
                    (e.submissions[l].endTime = (0, Nn.c2)(p)),
                    o(
                      ""
                        .concat(s.DB.NAME, "/")
                        .concat(s.DB.PUSH_EXAM_ACTIVITIES),
                      [e],
                      { root: !0 },
                    )),
                  [2, u]
                );
            }
          });
        });
      }),
      (he[s.VH.SUBMIT_MULTIPLE_EXAM_SUBMISSION] = function (e, t) {
        var n,
          o = e.commit,
          i = e.rootState,
          r = t.activityId,
          l = t.submissionId,
          c = t.form;
        return (0, a.mG)(this, void 0, Promise, function () {
          var e, t, u, d, p;
          return (0, a.Jh)(this, function (a) {
            switch (a.label) {
              case 0:
                return (
                  (e = x().cloneDeep(i.db.examActivities[r])),
                  l === e.temporarySubmissionId &&
                  e.submissions &&
                  l in e.submissions
                    ? [4, Mn.Z.submitMultipleSubmission(l, c)]
                    : (Zn.warn(
                        "[SUBMIT_MULTIPLE_EXAM_SUBMISSION] mobile data error.",
                        "submissionId is ".concat(l),
                        "temporarySubmissionId is ".concat(
                          e.temporarySubmissionId,
                        ),
                        "submissions key is ".concat(
                          Object.keys(
                            null !== (n = e.submissions) && void 0 !== n
                              ? n
                              : {},
                          ),
                        ),
                      ),
                      [2, !1])
                );
              case 1:
                return (
                  (t = a.sent()),
                  (u = t.success),
                  (d = t.status),
                  (p = t.leftTime),
                  200 !== d &&
                    Zn.warn(
                      "[SUBMIT_MULTIPLE_EXAM_SUBMISSION] fetch submitSingleSubmission error.",
                      "status is ".concat(d),
                      "params.submissionId is ".concat(l),
                      "params.form is ".concat(JSON.stringify(c)),
                    ),
                  u &&
                    (jt._T.fromMultipleSubmissionFrom(e, l, c),
                    (e.submissions[l].leftTime = p),
                    (e.submissions[l].endTime = (0, Nn.c2)(p)),
                    o(
                      ""
                        .concat(s.DB.NAME, "/")
                        .concat(s.DB.PUSH_EXAM_ACTIVITIES),
                      [e],
                      { root: !0 },
                    )),
                  [2, u]
                );
            }
          });
        });
      }),
      (he[s.VH.INIT_EXAM_TEMPORARY_SUBMISSION] = function (e, t) {
        var n,
          o,
          i = e.commit,
          r = e.rootState;
        return (0, a.mG)(this, void 0, Promise, function () {
          var e, l, c, u, d, p, m, f, v;
          return (0, a.Jh)(this, function (a) {
            switch (a.label) {
              case 0:
                return (
                  (e = x().cloneDeep(r.db.examActivities[t])),
                  e ? [4, Mn.Z.distributeExamPaper(t)] : [2, null]
                );
              case 1:
                return (
                  (l = a.sent()),
                  l ? [4, Mn.Z.getExamTemporarySubmission(t)] : [2, null]
                );
              case 2:
                return (
                  (c = a.sent()),
                  (u = c.submission),
                  (d = c.success),
                  (e.paperInstanceId = l.instanceId),
                  (p = !1),
                  u || !d
                    ? [3, 5]
                    : ((p = !0),
                      [
                        4,
                        Mn.Z.submitExamTemporarySubmission(
                          t,
                          jt.hC.fromPaper(l),
                        ),
                      ])
                );
              case 3:
                return (a.sent(), [4, Mn.Z.getExamTemporarySubmission(t)]);
              case 4:
                ((v = a.sent()),
                  (u = v.submission),
                  (d = v.success),
                  (a.label = 5));
              case 5:
                return u
                  ? (e.submissions || (e.submissions = {}),
                    (m = null !== (n = u.id) && void 0 !== n ? n : 0),
                    (u.examSubjects = l.rawSubjects),
                    (e.temporarySubmissionId = m),
                    (e.submissions[m] = u),
                    r.featureToggle.examSubjectGroup &&
                      (null === (o = e.subjectGroups) || void 0 === o
                        ? void 0
                        : o.length) &&
                      ((f = Dn.Z.sortSubjectGroups(
                        Dn.Z.buildSubjectGroups(
                          e.subjectGroups,
                          u.examSubjects,
                        ),
                      )),
                      (e.subjectGroups = f)),
                    i(
                      ""
                        .concat(s.DB.NAME, "/")
                        .concat(s.DB.PUSH_EXAM_ACTIVITIES),
                      [e],
                      { root: !0 },
                    ),
                    [2, { submission: u, isNewSubmission: p }])
                  : (i(
                      ""
                        .concat(s.DB.NAME, "/")
                        .concat(s.DB.PUSH_EXAM_ACTIVITIES),
                      [e],
                      { root: !0 },
                    ),
                    [2, null]);
            }
          });
        });
      }),
      (he[s.VH.DELETE_EXAM_TEMPORARY_SUBMISSION] = function (e, t) {
        var n = e.commit,
          o = e.rootState;
        return (0, a.mG)(this, void 0, Promise, function () {
          var e, i;
          return (0, a.Jh)(this, function (r) {
            return (
              (e = x().cloneDeep(o.db.examActivities[t])),
              e
                ? ((i = Vn.Z.cleanTemporarySubmission(e)),
                  i &&
                    n(
                      ""
                        .concat(s.DB.NAME, "/")
                        .concat(s.DB.PUSH_EXAM_ACTIVITIES),
                      [e],
                      { root: !0 },
                    ),
                  [2, i])
                : [2, !1]
            );
          });
        });
      }),
      (he[s.VH.GIVE_EXAM_SCORE] = function (e, t) {
        var n,
          o = e.commit,
          i = e.rootState,
          r = t.activityId,
          l = t.form;
        return (0, a.mG)(this, void 0, Promise, function () {
          var e, t, c;
          return (0, a.Jh)(this, function (a) {
            switch (a.label) {
              case 0:
                return (
                  (e = x().cloneDeep(i.db.examActivities[r])),
                  e && e.submissions
                    ? ((t =
                        e.submissions[
                          null !== (n = l.submissionId) && void 0 !== n ? n : 0
                        ]),
                      t ? [4, Vn.Z.giveExamScore(r, l)] : [2, !1])
                    : [2, !1]
                );
              case 1:
                return (
                  (c = a.sent()),
                  c &&
                    (l.gradedSubjects.forEach(function (e) {
                      t.scores[e.subjectId] = e.score;
                    }),
                    o(
                      ""
                        .concat(s.DB.NAME, "/")
                        .concat(s.DB.PUSH_EXAM_ACTIVITIES),
                      [e],
                      { root: !0 },
                    )),
                  [2, c]
                );
            }
          });
        });
      }),
      (he[s.VH.GIVE_EXAM_COMMENT] = function (e, t) {
        var n = e.commit,
          o = e.rootState,
          i = t.activityId,
          r = t.submissionId,
          l = t.subjectId,
          c = t.comment;
        return (0, a.mG)(this, void 0, Promise, function () {
          var e, t, u;
          return (0, a.Jh)(this, function (a) {
            switch (a.label) {
              case 0:
                return (
                  (e = x().cloneDeep(o.db.examActivities[i])),
                  e && e.submissions
                    ? ((t = e.submissions[r]),
                      t ? [4, Mn.Z.giveExamComment(i, r, l, c)] : [2, !1])
                    : [2, !1]
                );
              case 1:
                return (
                  (u = a.sent()),
                  u &&
                    ((t.submissionComments[l] = c),
                    n(
                      ""
                        .concat(s.DB.NAME, "/")
                        .concat(s.DB.PUSH_EXAM_ACTIVITIES),
                      [e],
                      { root: !0 },
                    )),
                  [2, u]
                );
            }
          });
        });
      }),
      (he[s.VH.GET_EXAM_PREVIEW_PAPER] = function (e, t) {
        var n,
          o,
          i = e.commit,
          r = e.rootState;
        return (0, a.mG)(this, void 0, void 0, function () {
          var e, l, c;
          return (0, a.Jh)(this, function (a) {
            switch (a.label) {
              case 0:
                return (
                  (e = x().cloneDeep(r.db.examActivities[t])),
                  e ? [4, Mn.Z.getExamPreviewPaper(t)] : [2, null]
                );
              case 1:
                return (
                  (l = a.sent()),
                  l
                    ? (r.featureToggle.examSubjectGroup &&
                      (null === (n = e.subjectGroups) || void 0 === n
                        ? void 0
                        : n.length)
                        ? ((c = Dn.Z.sortSubjectGroups(
                            Dn.Z.buildSubjectGroups(
                              e.subjectGroups,
                              l.rawSubjects,
                            ),
                          )),
                          (l.subjectGroups = c),
                          (e.subjectGroups = c),
                          c &&
                            (l.subjects = Dn.Z.rearrangeSubjects(
                              c,
                              l.rawSubjects,
                            )))
                        : delete l.subjectGroups,
                      null === (o = l.subjects) ||
                        void 0 === o ||
                        o.forEach(function (e) {
                          [jt.jj.matching].includes(e.type) &&
                            e.subSubjects.forEach(function (t) {
                              t.options = x()
                                .chain(e.options)
                                .cloneDeep()
                                .sortBy("sort")
                                .value();
                            });
                        }),
                      (l.instanceId = "".concat(t, "-preview")),
                      (e.paperInstanceId = l.instanceId),
                      i(
                        ""
                          .concat(s.DB.NAME, "/")
                          .concat(s.DB.PUSH_EXAM_ACTIVITIES),
                        [e],
                        { root: !0 },
                      ),
                      i(
                        ""
                          .concat(s.DB.NAME, "/")
                          .concat(s.DB.PUSH_EXAM_PAPER_INSTANCES),
                        [l],
                        { root: !0 },
                      ),
                      [2, l])
                    : [2, null]
                );
            }
          });
        });
      }),
      (he[s.VH.GET_EXAM_SUBMISSION_LEFT_TIME] = function (e, t) {
        var n = e.commit,
          o = e.rootState,
          i = t.activityId,
          r = t.submissionId;
        return (0, a.mG)(this, void 0, void 0, function () {
          var e, t, l, c;
          return (0, a.Jh)(this, function (a) {
            switch (a.label) {
              case 0:
                return (
                  (e = x().cloneDeep(o.db.examActivities[i])),
                  [4, Mn.Z.getSubmissionLeftTime(r)]
                );
              case 1:
                return (
                  (t = a.sent()),
                  (l = t.success),
                  (c = t.leftTime),
                  l && e.submissions && r in e.submissions
                    ? ((e.submissions[r].leftTime = c),
                      (e.submissions[r].endTime = (0, Nn.c2)(c)),
                      n(
                        ""
                          .concat(s.DB.NAME, "/")
                          .concat(s.DB.PUSH_EXAM_ACTIVITIES),
                        [e],
                        { root: !0 },
                      ),
                      [2, !0])
                    : [2, !1]
                );
            }
          });
        });
      }),
      he),
    Hn = Un,
    Fn =
      ((Ce = {}),
      (Ce[s.VH.FETCH_EXAM_ACTIVITIES] = function (e, t) {
        var n = t.courseId,
          o = t.examInfo;
        ((e[n].exam.page = o.page),
          (e[n].exam.pages = o.pages),
          (e[n].exam.hasMoreData = o.hasMoreData),
          (e[n].exam.pageSize = o.pageSize));
        var i = o.list.map(function (e) {
          return e.id;
        });
        1 === o.page
          ? (e[n].exam["list"] = i)
          : (e[n].exam["list"] = e[n].exam.list.concat(i));
      }),
      (Ce[s.VH.DELETE_EXAM_ACTIVITY] = function (e, t) {
        var n = x().indexOf(e.currentCourse.exam.list, t);
        e.currentCourse.exam.list.splice(n, 1);
      }),
      (Ce[s.VH.UPDATE_EXAM_COMPREHENSIVE_CONTENT_AUDIO_RECORD] = function (
        e,
        t,
      ) {
        var n = x().cloneDeep(
          e.currentCourse.exam.comprehensiveContentAudioRecord,
        );
        (n.audioPlayerId.push(t.audioPlayerId),
          (e.currentCourse.exam["comprehensiveContentAudioRecord"] = n));
      }),
      (Ce[s.VH.RESTORE_EXAM_COMPREHENSIVE_CONTENT_AUDIO_RECORD] = function (e) {
        var t = x().cloneDeep(
          e.currentCourse.exam.comprehensiveContentAudioRecord,
        );
        ((t.audioPlayerId = []),
          (e.currentCourse.exam["comprehensiveContentAudioRecord"] = t));
      }),
      (Ce[s.VH.SAVE_EXAM_PLAY_RECORD] = function (e, t) {
        Object.assign(e.currentCourse.exam.playRecord, t);
      }),
      (Ce[s.VH.CLEAN_EXAM_PLAY_RECORD] = function (e) {
        e.currentCourse.exam.playRecord = {};
      }),
      Ce),
    Gn = Fn,
    zn =
      ((ye = {}),
      (ye[s.VH.GET_EXAM_ACTIVITY] = function (e, t, n) {
        return function (e) {
          return e in n.db.examActivities ? n.db.examActivities[e] : null;
        };
      }),
      (ye[s.VH.GET_EXAM_ACTIVITIES] = function (e, t, n) {
        return function (t) {
          return String(t) in e
            ? e[String(t)].exam.list.map(function (e) {
                return n.db.examActivities[e];
              })
            : [];
        };
      }),
      (ye[s.VH.GET_EXAM_SUBMITTERS] = function (e, t, n) {
        return function (e) {
          var t = n.db.examActivities[e];
          return t && t.submitters ? t.submitters : [];
        };
      }),
      (ye[s.VH.GET_EXAM_SUBMISSIONS] = function (e, t, n) {
        return function (e) {
          var t = n.db.examActivities[e];
          return t && t.submissions
            ? x()(t.submissions)
                .values()
                .filter(function (e) {
                  return Boolean(e.submittedAt);
                })
                .orderBy("submittedAt")
                .reverse()
                .value()
            : [];
        };
      }),
      (ye[s.VH.GET_EXAM_SUBMISSION] = function (e, t, n) {
        return function (e, t) {
          var o = n.db.examActivities[e];
          return o && o.submissions && t in o.submissions
            ? o.submissions[t]
            : new jt.Vn();
        };
      }),
      (ye[s.VH.GET_EXAM_TEMPORARY_SUBMISSION] = function (e, t, n) {
        return function (e) {
          var t = n.db.examActivities[e];
          return t &&
            t.submissions &&
            t.temporarySubmissionId &&
            t.temporarySubmissionId in t.submissions
            ? t.submissions[t.temporarySubmissionId]
            : new jt.Vn();
        };
      }),
      (ye[s.VH.GET_EXAM_PAPER] = function (e, t, n) {
        return function (e, t) {
          var o = n.db.examActivities[e];
          if (!o || !o.submissions) return null;
          var i = o.submissions[t];
          return i && i.examSubjects
            ? Vn.Z.processSubmission(x().cloneDeep(i), {
                subjectGroups: o.subjectGroups,
              })
            : null;
        };
      }),
      (ye[s.VH.GET_EXAM_PREVIEW_PAPER] = function (e, t, n) {
        return function (e) {
          var t,
            o = n.db.examActivities[e];
          return o &&
            o.paperInstanceId &&
            null !==
              (t = x().cloneDeep(n.db.examPaperInstances[o.paperInstanceId])) &&
            void 0 !== t
            ? t
            : null;
        };
      }),
      (ye[s.VH.GET_EXAM_COMPREHENSIVE_CONTENT_AUDIO_RECORD] = function (e) {
        return function () {
          return e.currentCourse.exam.comprehensiveContentAudioRecord;
        };
      }),
      ye),
    Qn = zn,
    jn = (n(54678), n(91058), n(84944), n(33792), n(87237)),
    qn = n(74125),
    Jn = function (e, t, n, o) {
      e.map(function (e) {
        var i = {
          type: n,
          percentageScore: parseFloat(e.scorePercentage) || 0,
          scores: {},
          title: e.title,
          sort: e.moduleSort,
          syllabusSort: e.syllabusSort,
          moduleSort: e.moduleSort,
          createdAt: e.createdAt,
          noPublishScore: "no_announce" === e.announceScoreType,
          customAnnounceTime: "timed_announce" === e.announceScoreType,
          activityStudentStatus: e.activityStudentStatus,
          announceScoreTime: e.announceScoreTime,
          isPublish:
            !0 === e.public ||
            "immediate_announce" === e.announceScoreType ||
            !0 === e.isAnnounceScoreTimePassed ||
            !0 === e.isScorePublic ||
            !0 === e.canShowScore,
          published: e.published,
          startTime: e.startTime,
          endTime: e.endTime,
        };
        (t
          .filter(function (t) {
            return t.activityId === e.id;
          })
          .forEach(function (e) {
            var t = e.finalScore || e.score;
            i.scores[e.studentId || parseInt(String(c.Z.userID))] = x().isNaN(
              parseFloat(t),
            )
              ? null
              : parseFloat(t);
          }),
          o.push(i));
      });
    },
    Wn = function (e, t) {
      return (0, a.mG)(void 0, void 0, void 0, function () {
        var n, o, i;
        return (0, a.Jh)(this, function (r) {
          switch (r.label) {
            case 0:
              return [
                4,
                Promise.all([
                  ut.Z.getVirtualExperiments(e),
                  ut.Z.getVirtualExperimentScores(e),
                ]),
              ];
            case 1:
              return (
                (n = r.sent()),
                (o = n[0]),
                (i = n[1]),
                Jn(o, i, "activity", t),
                [2]
              );
          }
        });
      });
    },
    Xn = function (e, t) {
      return (0, a.mG)(void 0, void 0, void 0, function () {
        var n, o, i;
        return (0, a.Jh)(this, function (r) {
          switch (r.label) {
            case 0:
              return [
                4,
                Promise.all([
                  ut.Z.getInteractionActivities(e),
                  ut.Z.getInteractionScores(e),
                ]),
              ];
            case 1:
              return (
                (n = r.sent()),
                (o = n[0]),
                (i = n[1]),
                Jn(o, i, "activity", t),
                [2]
              );
          }
        });
      });
    },
    Yn = function (e, t, n) {
      return (0, a.mG)(void 0, void 0, void 0, function () {
        var o, i, r, s, l;
        return (0, a.Jh)(this, function (a) {
          switch (a.label) {
            case 0:
              return [
                4,
                Promise.all([
                  ut.Z.getClassrooms(e),
                  ut.Z.getClassroomExamScores(e),
                ]),
              ];
            case 1:
              return (
                (o = a.sent()),
                (i = o[0]),
                (r = o[1]),
                n ? [4, ut.Z.getClassroomStudentStatus(e)] : [3, 3]
              );
            case 2:
              ((s = a.sent()),
                i.forEach(function (e) {
                  var t = s[e.id];
                  e.activityStudentStatus = t;
                }),
                (a.label = 3));
            case 3:
              return (
                (l = i.filter(function (e) {
                  return "classroom" === e.type;
                })),
                Jn(l, r, "activity", t),
                [2]
              );
          }
        });
      });
    },
    Kn = function (e, t) {
      return (0, a.mG)(void 0, void 0, void 0, function () {
        var n, o, i;
        return (0, a.Jh)(this, function (r) {
          switch (r.label) {
            case 0:
              return [
                4,
                Promise.all([
                  ut.Z.getForumActivites(e),
                  ut.Z.getForumScores(e),
                ]),
              ];
            case 1:
              return (
                (n = r.sent()),
                (o = n[0]),
                (i = n[1]),
                null === o ||
                  void 0 === o ||
                  o.forEach(function (e) {
                    var t, n;
                    (null === e || void 0 === e ? void 0 : e.data) &&
                      (null ===
                        (t = null === e || void 0 === e ? void 0 : e.data) ||
                      void 0 === t
                        ? void 0
                        : t.announceScoreType) &&
                      (e.announceScoreType =
                        jn.Fu[
                          (null ===
                            (n =
                              null === e || void 0 === e ? void 0 : e.data) ||
                          void 0 === n
                            ? void 0
                            : n.announceScoreType) - 1
                        ]);
                  }),
                Jn(o, i, "activity", t),
                [2]
              );
          }
        });
      });
    },
    $n =
      ((Ae = {}),
      (Ae[s.VH.STUDENT_SCORES] = function (e, t) {
        var n,
          o,
          i = e.commit,
          r = t.courseId,
          l = t.isInstructor;
        return (0, a.mG)(this, void 0, void 0, function () {
          var e,
            t,
            u,
            d,
            p,
            m,
            f,
            v,
            g,
            h,
            C,
            y,
            A,
            w,
            b,
            E,
            S,
            T,
            _,
            I,
            L,
            k,
            P,
            B,
            R,
            O,
            M,
            V,
            N,
            D,
            Z,
            U,
            H,
            F,
            G,
            z;
          return (0, a.Jh)(this, function (a) {
            switch (a.label) {
              case 0:
                return (
                  (e = ["rollcall", "performance", "activity"]),
                  (t = []),
                  [4, ut.Z.getCustomScores(r)]
                );
              case 1:
                return (
                  (u = a.sent()),
                  (d = {}),
                  [
                    4,
                    Promise.all([
                      ut.Z.getQuestionnaires(r),
                      ut.Z.getQuestionnaireScores(r),
                    ]),
                  ]
                );
              case 2:
                return (
                  (p = a.sent()),
                  (m = p[0]),
                  (f = p[1]),
                  [
                    4,
                    Promise.all([
                      ut.Z.getWeblinkActivities(r),
                      ut.Z.getWeblinkScores(r),
                    ]),
                  ]
                );
              case 3:
                return (
                  (v = a.sent()),
                  (g = v[0]),
                  (h = v[1]),
                  [
                    4,
                    Promise.all([
                      ut.Z.getHomeworkScores(r),
                      ut.Z.getHomeworkStudentStatus(r),
                    ]),
                  ]
                );
              case 4:
                return (
                  (C = a.sent()),
                  (y = C[0]),
                  (A = C[1]),
                  null === y ||
                    void 0 === y ||
                    y.activities.forEach(function (e) {
                      var t, n;
                      (null === e || void 0 === e ? void 0 : e.data) &&
                        (null ===
                          (t = null === e || void 0 === e ? void 0 : e.data) ||
                        void 0 === t
                          ? void 0
                          : t.announceScoreType) &&
                        (e.announceScoreType =
                          jn.Fu[
                            (null ===
                              (n =
                                null === e || void 0 === e ? void 0 : e.data) ||
                            void 0 === n
                              ? void 0
                              : n.announceScoreType) - 1
                          ]);
                    }),
                  l
                    ? [
                        4,
                        Promise.all([
                          ut.Z.getOnlineVideoSetting(r),
                          ut.Z.getOnlineVideoScores(r),
                        ]),
                      ]
                    : [3, 9]
                );
              case 5:
                return (
                  (w = a.sent()),
                  (M = w[0]),
                  (b = w[1]),
                  (E = b),
                  [
                    4,
                    Promise.all([
                      ut.Z.getRollcallSetting(r),
                      ut.Z.getRollcallScores(r),
                    ]),
                  ]
                );
              case 6:
                return (
                  (S = a.sent()),
                  (T = S[0]),
                  (_ = S[1]),
                  [
                    4,
                    Promise.all([
                      ut.Z.getPerformanceScorePercentage(r),
                      ut.Z.getPerformanceScores(r),
                    ]),
                  ]
                );
              case 7:
                return (
                  (I = a.sent()),
                  (L = I[0]),
                  (k = I[1]),
                  [
                    4,
                    Promise.all([
                      ut.Z.getExams(r),
                      ut.Z.getExamScores(r),
                      ut.Z.getExamStudentStatus(r),
                    ]),
                  ]
                );
              case 8:
                return (
                  (P = a.sent()),
                  (D = P[0]),
                  (Z = P[1]),
                  (B = P[2]),
                  E &&
                    Object.keys(E).forEach(function (e) {
                      d[parseInt(e)] = parseFloat(E[e].score);
                    }),
                  t.push({
                    type: "rollcall",
                    percentageScore: T.scorePercentage,
                    scores: _.scores,
                    isPublish: _.public,
                  }),
                  t.push({
                    type: "performance",
                    percentageScore:
                      (null === L || void 0 === L
                        ? void 0
                        : L.scorePercentage) || 0,
                    scores:
                      (null === k || void 0 === k ? void 0 : k.scores) || [],
                    isPublish:
                      (null === k || void 0 === k
                        ? void 0
                        : k.scoreAnnounced) || !0,
                  }),
                  (null !== (n = null === M || void 0 === M ? void 0 : M.id) &&
                  void 0 !== n
                    ? n
                    : 0) > 0 &&
                    (e.splice(2, 0, "video"),
                    t.push({
                      type: "video",
                      percentageScore:
                        (null === M || void 0 === M
                          ? void 0
                          : M.scorePercentage) || 0,
                      scores: d,
                    })),
                  x().forEach(D, function (e) {
                    e.activityStudentStatus = x().get(B, e.id);
                  }),
                  Jn(D, Z, "activity", t),
                  [3, 14]
                );
              case 9:
                return [4, ut.Z.getSelfRollcallScores(r)];
              case 10:
                return (
                  (R = a.sent()),
                  [
                    4,
                    Promise.all([
                      ut.Z.getOnlineVideoSetting(r),
                      ut.Z.getSelfOnlineVideoScores(r),
                    ]),
                  ]
                );
              case 11:
                return (
                  (O = a.sent()),
                  (M = O[0]),
                  (V = O[1]),
                  [
                    4,
                    Promise.all([ut.Z.getExams(r), ut.Z.getSelfExamScores(r)]),
                  ]
                );
              case 12:
                return (
                  (N = a.sent()),
                  (D = N[0]),
                  (Z = N[1]),
                  [4, ut.Z.getStudentPerformanceScore(r)]
                );
              case 13:
                ((U = a.sent()),
                  Jn(D, Z, "activity", t),
                  t.push({
                    type: "rollcall",
                    percentageScore:
                      (null === R || void 0 === R
                        ? void 0
                        : R.scorePercentage) || 0,
                    scores:
                      ((F = {}),
                      (F[parseInt(String(c.Z.userID))] =
                        (null === R || void 0 === R ? void 0 : R.score) || 0),
                      F),
                    isPublish: null === R || void 0 === R ? void 0 : R.public,
                  }),
                  t.push({
                    type: "performance",
                    percentageScore:
                      (null === U || void 0 === U
                        ? void 0
                        : U.scorePercentage) || 0,
                    scores:
                      ((G = {}),
                      (G[parseInt(String(c.Z.userID))] =
                        (null === U || void 0 === U ? void 0 : U.score) || 0),
                      G),
                    isPublish:
                      !0 ===
                      (null === U || void 0 === U ? void 0 : U.scoreAnnounced),
                  }),
                  (null !== (o = null === M || void 0 === M ? void 0 : M.id) &&
                  void 0 !== o
                    ? o
                    : 0) > 0 &&
                    (e.splice(2, 0, "video"),
                    t.push({
                      type: "video",
                      percentageScore:
                        (null === M || void 0 === M
                          ? void 0
                          : M.scorePercentage) || 0,
                      scores:
                        ((z = {}),
                        (z[parseInt(String(c.Z.userID))] =
                          (null === V || void 0 === V ? void 0 : V.score) || 0),
                        z),
                      isPublish: !0,
                    })),
                  (a.label = 14));
              case 14:
                return (
                  u.length &&
                    (e.push("custom"),
                    u.forEach(function (e) {
                      var n = {};
                      (l
                        ? x().each(e.scores, function (e) {
                            n[e.userId] = Number(e.score) || 0;
                          })
                        : e.score &&
                          (n[parseInt(String(c.Z.userID))] = Number(e.score)),
                        t.push({
                          type: "custom",
                          percentageScore: e.scorePercentage || 0,
                          scores: n,
                          isPublish: e.canAnnounceScore,
                          title: e.name,
                        }));
                    })),
                  (m || []).forEach(function (e) {
                    return (e.public = !0);
                  }),
                  (H = m.filter(function (e) {
                    var t;
                    return null === (t = e.data) || void 0 === t
                      ? void 0
                      : t.isScored;
                  })),
                  Jn(H, f, "activity", t),
                  Jn(g, h, "activity", t),
                  [4, Promise.all([Kn(r, t), Yn(r, t, l), Wn(r, t), Xn(r, t)])]
                );
              case 15:
                return (
                  a.sent(),
                  y &&
                    (l
                      ? (x().forEach(y.activities, function (e) {
                          e.activityStudentStatus = x().get(A, e.id);
                        }),
                        (y.scores = (
                          (null === y || void 0 === y ? void 0 : y.scores) || []
                        )
                          .map(function (e) {
                            return Q.N0.toClasses(
                              x().get(e, "scores") || [],
                              ct.MH,
                            );
                          })
                          .flat()))
                      : (y.scores = (
                          (null === y || void 0 === y ? void 0 : y.scores) || []
                        ).map(function (e) {
                          return Q.N0.toClass(e || {}, ct.ZU);
                        }))),
                  Jn(
                    null === y || void 0 === y ? void 0 : y.activities,
                    null === y || void 0 === y ? void 0 : y.scores,
                    "activity",
                    t,
                  ),
                  i(s.VH.STUDENT_SCORES, { courseId: r, scores: t }),
                  i(s.VH.SCORE_CATEGORY, { courseId: r, categories: e }),
                  [2, t]
                );
            }
          });
        });
      }),
      (Ae[s.VH.STUDENT_LIST] = function (e, t) {
        var n = e.commit,
          o = t.courseId,
          i = t.isInstructor;
        return (0, a.mG)(this, void 0, void 0, function () {
          var e, t, r, l, u, d, p;
          return (0, a.Jh)(this, function (a) {
            switch (a.label) {
              case 0:
                return [4, qn.K.getScoreRankProvider(o)];
              case 1:
                return (
                  (e = a.sent()),
                  i ? [4, ut.Z.getCourseEnrollments(o)] : [3, 6]
                );
              case 2:
                return ((u = a.sent()), [4, ut.Z.getEnrollmentRawScores(o)]);
              case 3:
                return ((t = a.sent()), [4, ut.Z.getEnrollmentScores(o)]);
              case 4:
                return (
                  (r = a.sent()),
                  [4, lt.ZP.getScorePercentageConsumed(o)]
                );
              case 5:
                return (
                  (l = a.sent()),
                  (p = x()
                    .chain(u)
                    .map(function (e) {
                      return {
                        id: e.user.id,
                        enrollmentId: e.id,
                        roles: e.roles,
                        totalScore: e.totalScore,
                        department: e.user.department,
                        klass: e.user.klass,
                        grade: e.user.grade,
                        avatarUrl: e.user.avatarUrl || e.user.avatarSmallUrl,
                        submitterName: e.user.name,
                        studentNo: e.user.userNo,
                        comment: e.user.comment,
                        isAuditor: e.isAuditor,
                        userAttributes: e.user.userAttributes,
                        retakeStatus: e.retakeStatus,
                      };
                    })
                    .filter(function (e) {
                      return e.roles.includes("student");
                    })
                    .each(function (n) {
                      var o,
                        i,
                        a =
                          (null ===
                            (o = (r || []).find(function (e) {
                              return e.enrollmentId === n.enrollmentId;
                            })) || void 0 === o
                            ? void 0
                            : o.totalScore) || void 0;
                      ((n.totalScore = a ? e.processFinalScore(a) : a),
                        (n.rawScore =
                          (null ===
                            (i = (t || []).find(function (e) {
                              return e.enrollmentId === n.enrollmentId;
                            })) || void 0 === i
                            ? void 0
                            : i.rawScore) || void 0),
                        (n.scorePercentage = l));
                    })
                    .value()),
                  n(s.VH.STUDENT_LIST, { courseId: o, students: p }),
                  [2, p]
                );
              case 6:
                return [4, ut.Z.getCourseEnrollments(o)];
              case 7:
                return ((u = a.sent()), [4, ut.Z.getSelfScore(o)]);
              case 8:
                return (
                  (d = a.sent()),
                  (p = x()
                    .chain(u)
                    .filter(function (e) {
                      var t;
                      return (
                        (null ===
                          (t = null === e || void 0 === e ? void 0 : e.user) ||
                        void 0 === t
                          ? void 0
                          : t.id) === c.Z.userID
                      );
                    })
                    .map(function (e) {
                      return {
                        id: e.user.id,
                        enrollmentId: e.id,
                        roles: e.roles,
                        totalScore: e.totalScore,
                        department: e.user.department,
                        klass: e.user.klass,
                        grade: e.user.grade,
                        avatarUrl: e.user.avatarUrl || e.user.avatarSmallUrl,
                        submitterName: e.user.name,
                        studentNo: e.user.userNo,
                        comment: e.user.comment,
                      };
                    })
                    .filter(function (e) {
                      return e.roles.includes("student");
                    })
                    .each(function (t) {
                      ((t.totalScore = (
                        null === d || void 0 === d ? void 0 : d.totalScore
                      )
                        ? e.processFinalScore(d.totalScore)
                        : "0"),
                        (t.rawScore =
                          (null === d || void 0 === d ? void 0 : d.rawScore) ||
                          "0"),
                        (t.instructorScoreTime =
                          null === d || void 0 === d
                            ? void 0
                            : d.instructorScoreTime));
                    })
                    .value()),
                  n(s.VH.STUDENT_LIST, { courseId: o, students: p }),
                  [2, p]
                );
            }
          });
        });
      }),
      Ae),
    eo = $n,
    to =
      ((we = {}),
      (we[s.VH.STUDENT_LIST] = function (e) {
        return function (t) {
          return String(t) in e ? e[t].scoredStudents : [];
        };
      }),
      (we[s.VH.STUDENT_SCORES] = function (e) {
        return function (t) {
          return String(t) in e ? e[t].studentScores : [];
        };
      }),
      we),
    no = to,
    oo =
      ((be = {}),
      (be[s.VH.STUDENT_LIST] = function (e, t) {
        var n = t.courseId,
          o = t.students,
          i = e[n];
        i && (i.scoredStudents = o);
      }),
      (be[s.VH.STUDENT_SCORES] = function (e, t) {
        var n = t.courseId,
          o = t.scores,
          i = e[n];
        i && (i.studentScores = o);
      }),
      (be[s.VH.SCORE_CATEGORY] = function (e, t) {
        var n = t.courseId,
          o = t.categories,
          i = e[n];
        i && (i.scoreCategories = o);
      }),
      be),
    io = oo,
    ro = n(95742),
    ao = n(10202),
    so =
      ((Ee = {}),
      (Ee[s.VH.GET_QUESTIONNAIRE] = function (e, t) {
        return (0, a.mG)(this, void 0, void 0, function () {
          var e;
          return (0, a.Jh)(this, function (n) {
            switch (n.label) {
              case 0:
                return [4, ro.Z.getQuestionnaire(t)];
              case 1:
                return (
                  (e = n.sent()),
                  e && pt.Z.mutations.pushLearningActivities([e]),
                  [2, e]
                );
            }
          });
        });
      }),
      (Ee[s.VH.GET_QUESTIONNAIRE_SUBMITTERS] = function (e, t) {
        var n = e.commit,
          o = e.rootState;
        return (0, a.mG)(this, void 0, Promise, function () {
          var e, i, r, l;
          return (0, a.Jh)(this, function (a) {
            switch (a.label) {
              case 0:
                return (
                  (e = (0, dt.y)().isCourseInstructorViewpoint(
                    o.course.currentCourse.enrollment,
                  )),
                  (i = pt.Z.state.learningActivities[t]),
                  i
                    ? ((r = []),
                      e ? [4, ro.Z.getQuestionnaireExaminees(t)] : [3, 2])
                    : [2, []]
                );
              case 1:
                ((r = a.sent()), (a.label = 2));
              case 2:
                return (
                  (l = r.map(ao.yM.fromExaminee)),
                  n(
                    ""
                      .concat(s.DB.NAME, "/")
                      .concat(s.DB.PUSH_QUESTIONNAIRE_SUBMITTERS),
                    { activityId: t, submitters: l },
                    { root: !0 },
                  ),
                  [2, l]
                );
            }
          });
        });
      }),
      (Ee[s.VH.GET_QUESTIONNAIRE_SUBMISSIONS] = function (e, t) {
        var n = e.commit;
        return (0, a.mG)(this, void 0, Promise, function () {
          var e, o;
          return (0, a.Jh)(this, function (i) {
            switch (i.label) {
              case 0:
                return (
                  (e = x().cloneDeep(pt.Z.state.learningActivities[t])),
                  e ? [4, ro.Z.getQuestionnaireSubmissions(t)] : [2, []]
                );
              case 1:
                return (
                  (o = i.sent()),
                  o
                    ? (o.submissions.forEach(function (e) {
                        e.activityId = t;
                      }),
                      n(
                        ""
                          .concat(s.DB.NAME, "/")
                          .concat(s.DB.PUSH_QUESTIONNAIRE_SUBMISSION),
                        o.submissions,
                        { root: !0 },
                      ),
                      [2, o.submissions])
                    : [2, []]
                );
            }
          });
        });
      }),
      (Ee[s.VH.GET_QUESTIONNAIRE_SUBMISSION] = function (e, t) {
        var n = e.commit,
          o = e.rootState,
          i = t.activityId,
          r = t.submissionId;
        return (0, a.mG)(this, void 0, Promise, function () {
          var e, t, l, c;
          return (0, a.Jh)(this, function (a) {
            switch (a.label) {
              case 0:
                return (
                  (e = pt.Z.state.learningActivities[i]),
                  (t = o.db.questionnaireSubmitters[i]),
                  e
                    ? ((l = x().find(t, function (e) {
                        return Boolean(x().find(e.submissions, { id: r }));
                      })),
                      [4, ro.Z.getQuestionnaireSubmission(i, r)])
                    : [2, null]
                );
              case 1:
                return (
                  (c = a.sent()),
                  c
                    ? ((c.id = r),
                      (c.activityId = i),
                      l && (c.submitterId = l.submitterId),
                      n(
                        ""
                          .concat(s.DB.NAME, "/")
                          .concat(s.DB.PUSH_QUESTIONNAIRE_SUBMISSION),
                        [c],
                        { root: !0 },
                      ),
                      [2, c])
                    : [2, null]
                );
            }
          });
        });
      }),
      (Ee[s.VH.DISTRIBUTE_QUESTIONNAIRE_PAPER] = function (e, t) {
        var n = e.commit;
        return (0, a.mG)(this, void 0, Promise, function () {
          var e, o, i;
          return (0, a.Jh)(this, function (r) {
            switch (r.label) {
              case 0:
                return (
                  (e = pt.Z.state.learningActivities[t]),
                  e ? [4, ro.Z.distributeQuestionnairePaper(t)] : [2, null]
                );
              case 1:
                return (
                  (o = r.sent()),
                  [4, ro.Z.getQuestionnaireTemporarySubmission(t)]
                );
              case 2:
                return (
                  (i = r.sent()),
                  o
                    ? i
                      ? [3, 5]
                      : [
                          4,
                          ro.Z.submitQuestionnaireTemporarySubmission(
                            t,
                            ao.hC.fromPaper(o),
                          ),
                        ]
                    : [3, 6]
                );
              case 3:
                return (
                  r.sent(),
                  [4, ro.Z.getQuestionnaireTemporarySubmission(t)]
                );
              case 4:
                ((i = r.sent()), (r.label = 5));
              case 5:
                return (
                  i &&
                    ((i.examSubjects = o.rawSubjects),
                    (i.activityId = t),
                    (i.isTemporary = !0),
                    n(
                      ""
                        .concat(s.DB.NAME, "/")
                        .concat(s.DB.PUSH_QUESTIONNAIRE_SUBMISSION),
                      [i],
                      { root: !0 },
                    )),
                  n(
                    ""
                      .concat(s.DB.NAME, "/")
                      .concat(s.DB.PUSH_EXAM_PAPER_INSTANCES),
                    [o],
                    { root: !0 },
                  ),
                  [2, o]
                );
              case 6:
                return [2, null];
            }
          });
        });
      }),
      (Ee[s.VH.GET_QUESTIONNAIRE_PREVIEW_PAPER] = function (e, t) {
        var n = e.commit;
        return (0, a.mG)(this, void 0, Promise, function () {
          var e, o;
          return (0, a.Jh)(this, function (i) {
            switch (i.label) {
              case 0:
                return (
                  (e = pt.Z.state.learningActivities[t]),
                  e && e.data.exam_paper_template_id
                    ? [4, ro.Z.getQuestionnairePreviewPaper(t)]
                    : [2, null]
                );
              case 1:
                return (
                  (o = i.sent()),
                  o
                    ? ((o.templateId = e.data.exam_paper_template_id),
                      n(
                        ""
                          .concat(s.DB.NAME, "/")
                          .concat(s.DB.PUSH_EXAM_PAPER_TEMPLATES),
                        [o],
                        { root: !0 },
                      ),
                      [2, o])
                    : [2, null]
                );
            }
          });
        });
      }),
      (Ee[s.VH.FETCH_QUESTIONNAIRES] = function (e, t) {
        var n,
          o = e.commit,
          i = e.state,
          r = t.courseId,
          l = t.refresh,
          c = t.conditions;
        return (0, a.mG)(this, void 0, void 0, function () {
          var e, t;
          return (0, a.Jh)(this, function (a) {
            switch (a.label) {
              case 0:
                return (
                  (e =
                    null !== (n = i[r].questionnaire.page) && void 0 !== n
                      ? n
                      : 0),
                  [
                    4,
                    Promise.all([ro.Z.getQuestionnaires(r, l ? 1 : e + 1, c)]),
                  ]
                );
              case 1:
                return (
                  (t = a.sent()[0]),
                  t &&
                    t.list &&
                    (o(s.VH.FETCH_QUESTIONNAIRES, {
                      courseId: r,
                      questionnaireInfo: t,
                    }),
                    o(
                      ""
                        .concat(s.DB.NAME, "/")
                        .concat(s.DB.PUSH_QUESTIONNAIRES),
                      t.list,
                      { root: !0 },
                    )),
                  [2, t]
                );
            }
          });
        });
      }),
      (Ee[s.VH.DELETE_QUESTIONNAIRE] = function (e, t) {
        var n = e.commit,
          o = e.rootState;
        return (0, a.mG)(this, void 0, Promise, function () {
          var e, i;
          return (0, a.Jh)(this, function (r) {
            switch (r.label) {
              case 0:
                return (
                  (e = o.db.questionnaires[t]),
                  e ? [4, tt.ZP.deleteActivity(e.id)] : [2, !0]
                );
              case 1:
                return (
                  (i = r.sent()),
                  i
                    ? (n(s.VH.DELETE_QUESTIONNAIRE, e.id),
                      n(
                        ""
                          .concat(s.DB.NAME, "/")
                          .concat(s.DB.POP_QUESTIONNAIRES),
                        [e.id],
                        { root: !0 },
                      ),
                      [2, !0])
                    : [2, !1]
                );
            }
          });
        });
      }),
      Ee),
    lo = so,
    co =
      ((Se = {}),
      (Se[s.VH.GET_QUESTIONNAIRE] = function () {
        return function (e) {
          var t = pt.Z.state.learningActivities[e];
          return t ? Object.assign(new ao.Jm(), t) : null;
        };
      }),
      (Se[s.VH.GET_QUESTIONNAIRE_SUBMITTERS] = function (e, t, n) {
        return function (e) {
          return e in n.db.questionnaireSubmitters
            ? n.db.questionnaireSubmitters[e]
            : [];
        };
      }),
      (Se[s.VH.GET_QUESTIONNAIRE_SUBMISSIONS] = function (e, t, n) {
        return function (e) {
          return x()(n.db.questionnaireSubmissions)
            .values()
            .filter(function (t) {
              return t.activityId === e && !t.isTemporary;
            })
            .orderBy("submittedAt")
            .reverse()
            .value();
        };
      }),
      (Se[s.VH.GET_QUESTIONNAIRE_SUBMISSION] = function (e, t, n) {
        return function (e) {
          return e in n.db.questionnaireSubmissions
            ? n.db.questionnaireSubmissions[e]
            : new jt.Vn();
        };
      }),
      (Se[s.VH.GET_QUESTIONNAIRE_TEMPORARY_SUBMISSION] = function (e, t, n) {
        return function (e) {
          var t;
          return null !==
            (t = x().find(
              x().values(n.db.questionnaireSubmissions),
              function (t) {
                return t.activityId === e && t.isTemporary;
              },
            )) && void 0 !== t
            ? t
            : null;
        };
      }),
      (Se[s.VH.GET_QUESTIONNAIRE_PAPER] = function (e, t, n) {
        return function (e) {
          if (!(e in n.db.questionnaireSubmissions)) return null;
          var t = n.db.questionnaireSubmissions[e],
            o = [Vn.Z.assignSubmissionToSubject];
          return Vn.Z.processSubmission(t, { processes: o });
        };
      }),
      (Se[s.VH.GET_QUESTIONNAIRE_PREVIEW_PAPER] = function (e, t, n) {
        return function (e) {
          var t,
            o = pt.Z.state.learningActivities[e];
          return o &&
            o.data.exam_paper_template_id &&
            null !==
              (t = n.db.examPaperTemplates[o.data.exam_paper_template_id]) &&
            void 0 !== t
            ? t
            : null;
        };
      }),
      (Se[s.VH.GET_QUESTIONNAIRES] = function (e, t, n) {
        return function (t) {
          return String(t) in e
            ? e[String(t)].questionnaire.list.map(function (e) {
                return n.db.questionnaires[e];
              })
            : [];
        };
      }),
      Se),
    uo = co,
    po =
      ((Te = {}),
      (Te[s.VH.FETCH_QUESTIONNAIRES] = function (e, t) {
        var n = t.courseId,
          o = t.questionnaireInfo;
        ((e[n].questionnaire.page = o.page),
          (e[n].questionnaire.pages = o.pages),
          (e[n].questionnaire.hasMoreData = o.hasMoreData),
          (e[n].questionnaire.pageSize = o.pageSize));
        var i = o.list.map(function (e) {
          return e.id;
        });
        1 === o.page
          ? (e[n].questionnaire["list"] = i)
          : (e[n].questionnaire["list"] = e[n].questionnaire.list.concat(i));
      }),
      (Te[s.VH.DELETE_QUESTIONNAIRE] = function (e, t) {
        var n = x().indexOf(e.currentCourse.questionnaire.list, t);
        e.currentCourse.questionnaire.list.splice(n, 1);
      }),
      Te),
    mo = po,
    fo = (n(70189), n(91038), n(81487)),
    vo = n(67831),
    go = n(70543),
    ho =
      ((_e = {}),
      (_e[s.VH.GET_LECTURE_LIVE_ACTIVITIES] = function (e, t) {
        var n,
          o,
          i = e.commit,
          r = e.state,
          l = t.courseId,
          c = t.status,
          u = t.refresh;
        return (0, a.mG)(this, void 0, void 0, function () {
          var e, t, d;
          return (0, a.Jh)(this, function (a) {
            switch (a.label) {
              case 0:
                return (
                  (e = u
                    ? 1
                    : (null !==
                        (o =
                          null === (n = r[l].lectureLives[c]) || void 0 === n
                            ? void 0
                            : n.page) && void 0 !== o
                        ? o
                        : 0) + 1),
                  [
                    4,
                    fo.Z.getLectureLiveActivities(
                      l,
                      e,
                      c !== ct.fU.all ? c : void 0,
                    ),
                  ]
                );
              case 1:
                return (
                  (t = a.sent()),
                  t
                    ? t.list
                      ? [
                          4,
                          Promise.all(
                            x()(t.list)
                              .map(function (e) {
                                return fo.Z.getLectureLiveActivity(e.id);
                              })
                              .value(),
                          ),
                        ]
                      : [3, 3]
                    : [2, null]
                );
              case 2:
                ((d = a.sent()), (t.list = x().compact(d)), (a.label = 3));
              case 3:
                return (
                  i(s.VH.GET_LECTURE_LIVE_ACTIVITIES, {
                    courseId: l,
                    lives: t,
                    status: c,
                  }),
                  pt.Z.mutations.pushLearningActivities(t.list || []),
                  [2, t]
                );
            }
          });
        });
      }),
      (_e[s.VH.GET_LECTURE_LIVE_ACTIVITY] = function (e, t) {
        return (0, a.mG)(this, void 0, void 0, function () {
          var e;
          return (0, a.Jh)(this, function (n) {
            switch (n.label) {
              case 0:
                return [4, fo.Z.getLectureLiveActivity(t)];
              case 1:
                return (
                  (e = n.sent()),
                  e && pt.Z.mutations.pushLearningActivities([e]),
                  [2, e]
                );
            }
          });
        });
      }),
      (_e[s.VH.GET_EXTENSION_LIVE_ACTIVITY] = function (e, t) {
        var n = e.commit;
        return (0, a.mG)(this, void 0, void 0, function () {
          var e;
          return (0, a.Jh)(this, function (o) {
            switch (o.label) {
              case 0:
                return [4, tt.ZP.getActivity(t)];
              case 1:
                return (
                  (e = o.sent()),
                  e
                    ? (e.type in vo.Gg &&
                        e.live &&
                        (n(
                          ""
                            .concat(s.DB.NAME, "/")
                            .concat(s.DB.PUSH_EXTENSION_LIVES),
                          { lives: [e.live], source: vo.Gg[e.type] },
                          { root: !0 },
                        ),
                        (e.data = { liveId: e.live.id }),
                        (e.live = null)),
                      pt.Z.mutations.pushLearningActivities([e]),
                      [2, e])
                    : [2, null]
                );
            }
          });
        });
      }),
      (_e[s.VH.GET_EXTENSION_LIVES] = function (e, t) {
        var n,
          o,
          i,
          r = e.commit,
          l = e.state,
          c = t.courseId,
          u = t.source,
          d = t.refresh,
          p = t.status;
        return (0, a.mG)(this, void 0, void 0, function () {
          var e, t, m;
          return (0, a.Jh)(this, function (a) {
            switch (a.label) {
              case 0:
                return (
                  (e =
                    null ===
                      (i =
                        null ===
                          (o =
                            null === (n = l[c]) || void 0 === n
                              ? void 0
                              : n.extensionLives) || void 0 === o
                          ? void 0
                          : o[u]) || void 0 === i
                      ? void 0
                      : i[p]),
                  (t = d
                    ? 1
                    : (null === e || void 0 === e ? void 0 : e.page) + 1),
                  [4, (0, go.S)(c, { source: u, page: t, status: p })]
                );
              case 1:
                return (
                  (m = a.sent()),
                  m
                    ? (r(s.VH.GET_EXTENSION_LIVES, {
                        courseId: c,
                        liveInfo: m,
                        source: u,
                        status: p,
                      }),
                      pt.Z.mutations.pushExtensionLives({
                        lives: m.lives,
                        source: u,
                      }),
                      [2])
                    : [2]
                );
            }
          });
        });
      }),
      (_e[s.VH.REFRESH_MEETING_ACTIVITIES] = function (e, t) {
        return (0, a.mG)(this, void 0, void 0, function () {
          var e, n, o;
          return (0, a.Jh)(this, function (i) {
            switch (i.label) {
              case 0:
                return [4, tt.ZP.getActivities(t)];
              case 1:
                return (
                  (e = i.sent()),
                  (n = []),
                  (o = new Set()),
                  e.forEach(function (e) {
                    qt.zH.includes(e.type) && (n.push(e), o.add(e.type));
                  }),
                  pt.Z.mutations.setMeetingActivities(n, Array.from(o), !0),
                  [2]
                );
            }
          });
        });
      }),
      _e),
    Co = ho,
    yo =
      ((Ie = {}),
      (Ie[s.VH.GET_LECTURE_LIVE_ACTIVITIES] = function (e, t) {
        var n = t.courseId,
          o = t.lives,
          i = t.status;
        ((e[n].lectureLives[i].page = o.page),
          (e[n].lectureLives[i].pages = o.pages),
          (e[n].lectureLives[i].hasMoreData = o.hasMoreData),
          (e[n].lectureLives[i].pageSize = o.pageSize));
        var r = o.list.map(function (e) {
          return e.id;
        });
        1 === o.page || 0 === o.page
          ? (e[n].lectureLives[i]["list"] = r)
          : (e[n].lectureLives[i]["list"] =
              e[n].lectureLives[i].list.concat(r));
      }),
      (Ie[s.VH.GET_EXTENSION_LIVES] = function (e, t) {
        var n = t.courseId,
          o = t.liveInfo,
          i = t.source,
          r = t.status;
        if (e[n]) {
          e[n].extensionLives[i] || (e[n].extensionLives[i] = {});
          var s = e[n].extensionLives[i][r],
            l = o.lives,
            c = (0, a._T)(o, ["lives"]),
            u = l.map(function (e) {
              return e.id;
            });
          s
            ? ((s.page = c.page),
              (s.pages = c.pages),
              (s.hasMoreData = c.hasMoreData),
              (s.pageSize = c.pageSize),
              1 === c.page || 0 === c.page
                ? (s.liveIds = u)
                : (s.liveIds = s.liveIds.concat(u)))
            : (e[n].extensionLives[i][r] = (0, a.pi)((0, a.pi)({}, c), {
                liveIds: u,
              }));
        }
      }),
      (Ie[s.VH.UPDATE_LECTURE_LIVE_ACTIVITY_BOOK_STATUS] = function (e, t) {
        var n = t.activityId,
          o = t.isBookedLive,
          i = pt.Z.state.learningActivities[n];
        i && (i.isBookedLive = o);
      }),
      Ie),
    Ao = yo,
    wo =
      ((Le = {}),
      (Le[s.VH.GET_LECTURE_LIVE_ACTIVITY] = function () {
        return function (e) {
          return pt.Z.state.learningActivities[e];
        };
      }),
      (Le[s.VH.GET_LECTURE_LIVE_ACTIVITIES] = function (e) {
        return function (t, n) {
          return String(t) in e
            ? e[t].lectureLives[n].list.map(function (e) {
                return pt.Z.state.learningActivities[e];
              })
            : [];
        };
      }),
      (Le[s.VH.GET_EXTENSION_LIVE_ACTIVITY] = function () {
        return function (e) {
          var t = pt.Z.state.learningActivities[e];
          return (
            t &&
              "chinamcloud_live" === t.type &&
              ((t = x().cloneDeep(t)),
              (t.live =
                pt.Z.state.extensionLives.ChinamcloudLive[t.data.liveId])),
            t || null
          );
        };
      }),
      (Le[s.VH.GET_EXTENSION_LIVE] = function () {
        return function (e, t) {
          return pt.Z.state.extensionLives[t][e] || null;
        };
      }),
      (Le[s.VH.GET_EXTENSION_LIVES] = function (e) {
        return function (t, n) {
          var o,
            i,
            r,
            s = n.source,
            l = n.status,
            c =
              null ===
                (r =
                  null ===
                    (i =
                      null === (o = e[t]) || void 0 === o
                        ? void 0
                        : o.extensionLives) || void 0 === i
                    ? void 0
                    : i[s]) || void 0 === r
                ? void 0
                : r[l];
          if (!c) return null;
          var u = c.liveIds,
            d = (0, a._T)(c, ["liveIds"]);
          return (0, a.pi)((0, a.pi)({}, d), {
            lives: x()(u)
              .map(function (e) {
                return pt.Z.state.extensionLives[s][e];
              })
              .compact()
              .sortBy("startTime")
              .reverse()
              .value(),
          });
        };
      }),
      (Le[s.VH.GET_MEETING_ACTIVITIES] = function () {
        return function (e) {
          var t = pt.Z.state.learningActivities;
          return x()(t)
            .values()
            .compact()
            .filter(function (t) {
              return t.courseId === e && qt.zH.includes(t.type);
            })
            .value();
        };
      }),
      Le),
    bo = wo,
    Eo =
      ((ke = {}),
      (ke[s.VH.SAVE_NEW_ACTIVITY] = function (e, t) {
        e.currentCourse.newActivity = (0, a.pi)(
          (0, a.pi)({}, e.currentCourse.newActivity),
          t,
        );
      }),
      (ke[s.VH.CLEAN_NEW_ACTIVITY] = function (e) {
        delete e.currentCourse.newActivity;
      }),
      ke),
    So = Eo,
    To =
      ((Pe = {}),
      (Pe[s.VH.GET_NEW_ACTIVITY] = function (e) {
        return function () {
          return e.currentCourse.newActivity;
        };
      }),
      Pe),
    _o = To,
    Io = {
      namespaced: !0,
      state: _t,
      actions: (0, a.pi)(
        (0, a.pi)(
          (0, a.pi)(
            (0, a.pi)(
              (0, a.pi)(
                (0, a.pi)(
                  (0, a.pi)(
                    (0, a.pi)(
                      (0, a.pi)((0, a.pi)((0, a.pi)({}, Ct), Bt), Dt),
                      Wt,
                    ),
                    Cn,
                  ),
                  Sn,
                ),
                Pn,
              ),
              Hn,
            ),
            eo,
          ),
          lo,
        ),
        Co,
      ),
      mutations: (0, a.pi)(
        (0, a.pi)(
          (0, a.pi)(
            (0, a.pi)(
              (0, a.pi)(
                (0, a.pi)(
                  (0, a.pi)(
                    (0, a.pi)(
                      (0, a.pi)((0, a.pi)((0, a.pi)({}, bt), Ut), Yt),
                      An,
                    ),
                    _n,
                  ),
                  Rn,
                ),
                Gn,
              ),
              io,
            ),
            Ao,
          ),
          So,
        ),
        mo,
      ),
      getters: (0, a.pi)(
        (0, a.pi)(
          (0, a.pi)(
            (0, a.pi)(
              (0, a.pi)(
                (0, a.pi)(
                  (0, a.pi)(
                    (0, a.pi)(
                      (0, a.pi)((0, a.pi)((0, a.pi)({}, St), xt), Gt),
                      $t,
                    ),
                    Ln,
                  ),
                  On,
                ),
                Qn,
              ),
              no,
            ),
            uo,
          ),
          bo,
        ),
        _o,
      ),
    },
    Lo = Io,
    ko =
      ((Be = {}),
      (Be[s.Wv.GET_SEARCH_HISTORY] = function (e) {
        var t = e.searchHistory;
        return t.filter(function (e) {
          return e.length > 0;
        });
      }),
      (Be[s.Wv.PUBLIC_COURSE_DETAIL] = function (e) {
        return function (t) {
          return e.publicCourseDetail[t] || new at.US();
        };
      }),
      (Be[s.Wv.GET_MY_COURSES] = function (e) {
        return function () {
          return e.myCourses;
        };
      }),
      (Be[s.Wv.GET_COURSE_NAME] = function (e) {
        return function (t) {
          for (var n = 0, o = e.myCourses.courses; n < o.length; n++) {
            var i = o[n];
            if (i.courseCode === t) return i.name;
          }
        };
      }),
      Be),
    Po = ko,
    Bo = n(82951),
    Ro = n(37256),
    xo =
      ((Re = {}),
      (Re[s.Wv.MY_COURSES] = function (e, t) {
        var n = e.state,
          o = e.commit,
          i = t.params,
          r = t.page;
        return (0, a.mG)(this, void 0, void 0, function () {
          var e, t, l, c;
          return (0, a.Jh)(this, function (a) {
            switch (a.label) {
              case 0:
                return (
                  (e = (0, ft.Z)((0, Ro.Z)({}, n.myCourseQuery, i))),
                  (t = (0, q.xx)()),
                  t &&
                    ((l = e.customRoleFilter || at.Pd.TEACHING),
                    delete e.customRoleFilter,
                    l === at.Pd.TEACHING
                      ? (e.conditions.role = ["instructor"])
                      : l === at.Pd.ASSISTING
                        ? (e.conditions.role = ["instructor_assistant"])
                        : l !== at.Pd.LEARNING ||
                          e.conditions.role.length ||
                          (e.conditions.role = [
                            "student_assistant",
                            "student",
                          ])),
                  [4, Bo.ZP.getCourseList(e, r)]
                );
              case 1:
                return (
                  (c = a.sent()),
                  c && o(s.Wv.MY_COURSES, { courseList: c, page: r }),
                  [2]
                );
            }
          });
        });
      }),
      (Re[s.Wv.MY_COURSES_QUERY] = function (e, t) {
        var n = e.commit;
        return (0, a.mG)(this, void 0, void 0, function () {
          return (0, a.Jh)(this, function (e) {
            return (n(s.Wv.MY_COURSES_QUERY, t), [2]);
          });
        });
      }),
      (Re[s.Wv.PUBLIC_COURSES] = function (e, t) {
        var n = e.commit,
          o = t.params,
          i = t.page;
        return (0, a.mG)(this, void 0, void 0, function () {
          var e;
          return (0, a.Jh)(this, function (t) {
            switch (t.label) {
              case 0:
                return [4, Bo.ZP.getPublicCourseList(o, i)];
              case 1:
                return (
                  (e = t.sent()),
                  e && n(s.Wv.PUBLIC_COURSES, { publicCourseList: e, page: i }),
                  [2]
                );
            }
          });
        });
      }),
      (Re[s.Wv.PUBLIC_COURSES_QUERY] = function (e, t) {
        var n = e.commit;
        return (0, a.mG)(this, void 0, void 0, function () {
          return (0, a.Jh)(this, function (e) {
            return (n(s.Wv.PUBLIC_COURSES_QUERY, t), [2]);
          });
        });
      }),
      (Re[s.Wv.ACADEMIC_YEARS] = function (e) {
        var t = e.commit;
        return (0, a.mG)(this, void 0, void 0, function () {
          var e;
          return (0, a.Jh)(this, function (n) {
            switch (n.label) {
              case 0:
                return [4, Bo.ZP.getAcademicYears()];
              case 1:
                return ((e = n.sent()), e && t(s.Wv.ACADEMIC_YEARS, e), [2]);
            }
          });
        });
      }),
      (Re[s.Wv.SEMESTERS] = function (e) {
        var t = e.commit;
        return (0, a.mG)(this, void 0, void 0, function () {
          var e;
          return (0, a.Jh)(this, function (n) {
            switch (n.label) {
              case 0:
                return [4, Bo.ZP.getSemesters()];
              case 1:
                return ((e = n.sent()), e && t(s.Wv.SEMESTERS, e), [2]);
            }
          });
        });
      }),
      (Re[s.Wv.CLASSIFICATION] = function (e) {
        var t = e.commit;
        return (0, a.mG)(this, void 0, void 0, function () {
          var e;
          return (0, a.Jh)(this, function (n) {
            switch (n.label) {
              case 0:
                return [4, Bo.ZP.getCourseClassifications()];
              case 1:
                return ((e = n.sent()), e && t(s.Wv.CLASSIFICATION, e), [2]);
            }
          });
        });
      }),
      (Re[s.Wv.GET_OUTLINE_OPTIONS] = function (e) {
        var t = e.commit;
        return (0, a.mG)(this, void 0, void 0, function () {
          var e;
          return (0, a.Jh)(this, function (n) {
            switch (n.label) {
              case 0:
                return [4, Bo.ZP.getOutlineOptions()];
              case 1:
                return (
                  (e = n.sent()),
                  e && t(s.Wv.GET_OUTLINE_OPTIONS, e),
                  [2]
                );
            }
          });
        });
      }),
      (Re[s.Wv.PUBLIC_COURSE_DETAIL] = function (e, t) {
        var n = e.commit;
        return (0, a.mG)(this, void 0, void 0, function () {
          var e;
          return (0, a.Jh)(this, function (o) {
            switch (o.label) {
              case 0:
                return [4, Bo.ZP.getPublicCourseDetail(t)];
              case 1:
                return ((e = o.sent()), n(s.Wv.PUBLIC_COURSE_DETAIL, e), [2]);
            }
          });
        });
      }),
      (Re[s.Wv.GET_RUBRICS] = function (e) {
        var t = e.commit;
        return (0, a.mG)(this, void 0, void 0, function () {
          var e;
          return (0, a.Jh)(this, function (n) {
            switch (n.label) {
              case 0:
                return [4, tt.ZP.getRubrics()];
              case 1:
                return ((e = n.sent()), e && t(s.Wv.GET_RUBRICS, e), [2, e]);
            }
          });
        });
      }),
      (Re[s.Wv.MY_STUDIOS] = function (e, t) {
        var n = e.commit,
          o = t.params,
          i = t.page;
        return (0, a.mG)(this, void 0, void 0, function () {
          var e;
          return (0, a.Jh)(this, function (t) {
            switch (t.label) {
              case 0:
                return [4, Bo.ZP.getStudioList(o, i)];
              case 1:
                return (
                  (e = t.sent()),
                  e && n(s.Wv.MY_STUDIOS, { studioList: e, page: i }),
                  [2]
                );
            }
          });
        });
      }),
      Re),
    Oo = xo,
    Mo =
      ((xe = {}),
      (xe[s.Wv.MY_COURSES] = function (e, t) {
        var n = t.courseList,
          o = t.page;
        1 === o
          ? (e.myCourses = x().cloneDeep(n))
          : ((e.myCourses.page = o),
            (e.myCourses.hasMoreData = n.hasMoreData),
            (e.myCourses.courses = e.myCourses.courses.concat(n.courses)));
      }),
      (xe[s.Wv.MY_COURSES_QUERY] = function (e, t) {
        var n = x().cloneDeep(t);
        (e.myCourseQuery.customRoleFilter !== t.customRoleFilter &&
          (n.conditions.role = []),
          (e.myCourseQuery = n));
      }),
      (xe[s.Wv.PUBLIC_COURSES] = function (e, t) {
        var n = t.publicCourseList,
          o = t.page;
        1 === o
          ? (e.publicCourses = x().cloneDeep(n))
          : ((e.publicCourses.page = o),
            (e.publicCourses.hasMoreData = n.hasMoreData),
            (e.publicCourses.courses = e.publicCourses.courses.concat(
              n.courses,
            )));
      }),
      (xe[s.Wv.PUBLIC_COURSES_QUERY] = function (e, t) {
        e.publicCourseQuery = x().cloneDeep(t);
      }),
      (xe[s.Wv.CLASSIFICATION] = function (e, t) {
        e.classifications = t;
      }),
      (xe[s.Wv.ACADEMIC_YEARS] = function (e, t) {
        e.academicYears = t;
      }),
      (xe[s.Wv.SEMESTERS] = function (e, t) {
        e.semesters = t;
      }),
      (xe[s.Wv.SET_SEARCH_HISTORY] = function (e, t) {
        e.searchHistory = t;
      }),
      (xe[s.Wv.CLEAR_SEARCH_HISTORY] = function (e) {
        e.searchHistory = [];
      }),
      (xe[s.Wv.GET_OUTLINE_OPTIONS] = function (e, t) {
        e.courseOutlineOptions = t;
      }),
      (xe[s.Wv.PUBLIC_COURSE_DETAIL] = function (e, t) {
        e.publicCourseDetail[t.id] = t;
      }),
      (xe[s.Wv.GET_RUBRICS] = function (e, t) {
        e["rubrics"] = t;
      }),
      (xe[s.Wv.MY_STUDIOS] = function (e, t) {
        var n = t.studioList,
          o = t.page;
        1 === o
          ? (e.myStudios = x().cloneDeep(n))
          : ((e.myStudios.page = o),
            (e.myStudios.hasMoreData = n.hasMoreData),
            (e.myStudios.courses = e.myStudios.courses.concat(n.courses)));
      }),
      (xe[s.Wv.MY_STUDIOS_QUERY] = function (e, t) {
        e.myStudiosQuery = x().cloneDeep(t);
      }),
      (xe[s.Wv.MY_STUDIOS_INIT] = function (e) {
        ((e.myStudios = new at.GX()), (e.myStudiosQuery = new at.xm()));
      }),
      xe),
    Vo = Mo,
    No = {
      myCourses: new at.l0(),
      myCourseQuery: new at.XA(),
      publicCourses: new at.l0(),
      publicCourseQuery: new at.zn(),
      myStudios: new at.GX(),
      myStudiosQuery: new at.xm(),
      semesters: [],
      academicYears: [],
      classifications: [],
      searchHistory: [],
      publicCourseDetail: {},
      courseOutlineOptions: [],
      rubrics: [],
    },
    Do = { namespaced: !0, state: No, getters: Po, actions: Oo, mutations: Vo },
    Zo = Do,
    Uo = n(57415),
    Ho =
      ((Oe = {}),
      (Oe[s.vi.PUBLIC_CURRICULUM_DETAIL] = function (e) {
        return function (t) {
          return e.publicCurriculumDetail[t] || new Uo.PU();
        };
      }),
      Oe),
    Fo = Ho,
    Go = n(27621),
    zo =
      ((Me = {}),
      (Me[s.vi.MY_CURRICULUMS] = function (e, t) {
        var n = e.commit,
          o = t.params,
          i = t.page;
        return (0, a.mG)(this, void 0, void 0, function () {
          var e;
          return (0, a.Jh)(this, function (t) {
            switch (t.label) {
              case 0:
                return [4, Go.ZP.getMyCurriculums(o, i)];
              case 1:
                return (
                  (e = t.sent()),
                  e && n(s.vi.MY_CURRICULUMS, { myCurriculumList: e, page: i }),
                  [2]
                );
            }
          });
        });
      }),
      (Me[s.vi.SIGN_UP_CURRICULUMS] = function (e, t) {
        var n = e.commit,
          o = t.page;
        return (0, a.mG)(this, void 0, void 0, function () {
          var e;
          return (0, a.Jh)(this, function (t) {
            switch (t.label) {
              case 0:
                return [4, Go.ZP.getSignUpCurriculums(o)];
              case 1:
                return (
                  (e = t.sent()),
                  e &&
                    n(s.vi.SIGN_UP_CURRICULUMS, {
                      signUpCurriculumList: e,
                      page: o,
                    }),
                  [2]
                );
            }
          });
        });
      }),
      (Me[s.vi.PUBLIC_CURRICULUM_DETAIL] = function (e, t) {
        var n = e.commit;
        return (0, a.mG)(this, void 0, void 0, function () {
          var e;
          return (0, a.Jh)(this, function (o) {
            switch (o.label) {
              case 0:
                return [4, Go.ZP.getPublicCurriculumDetail(t)];
              case 1:
                return (
                  (e = o.sent()),
                  n(s.vi.PUBLIC_CURRICULUM_DETAIL, e),
                  [2]
                );
            }
          });
        });
      }),
      (Me[s.vi.MY_CURRICULUMS_QUERY] = function (e, t) {
        var n = e.commit;
        return (0, a.mG)(this, void 0, void 0, function () {
          return (0, a.Jh)(this, function (e) {
            return (n(s.vi.MY_CURRICULUMS_QUERY, t), [2]);
          });
        });
      }),
      (Me[s.vi.ACADEMIC_YEARS] = function (e) {
        var t = e.commit;
        return (0, a.mG)(this, void 0, void 0, function () {
          var e;
          return (0, a.Jh)(this, function (n) {
            switch (n.label) {
              case 0:
                return [4, Go.ZP.getAcademicYears()];
              case 1:
                return ((e = n.sent()), e && t(s.vi.ACADEMIC_YEARS, e), [2]);
            }
          });
        });
      }),
      (Me[s.vi.SEMESTERS] = function (e) {
        var t = e.commit;
        return (0, a.mG)(this, void 0, void 0, function () {
          var e;
          return (0, a.Jh)(this, function (n) {
            switch (n.label) {
              case 0:
                return [4, Go.ZP.getSemesters()];
              case 1:
                return ((e = n.sent()), e && t(s.vi.SEMESTERS, e), [2]);
            }
          });
        });
      }),
      (Me[s.vi.DEPARTMENTS] = function (e) {
        var t = e.commit;
        return (0, a.mG)(this, void 0, void 0, function () {
          var e;
          return (0, a.Jh)(this, function (n) {
            switch (n.label) {
              case 0:
                return [4, Go.ZP.getDepartments()];
              case 1:
                return ((e = n.sent()), e && t(s.vi.DEPARTMENTS, e), [2]);
            }
          });
        });
      }),
      Me),
    Qo = zo,
    jo =
      ((Ve = {}),
      (Ve[s.vi.MY_CURRICULUMS] = function (e, t) {
        var n = t.myCurriculumList,
          o = t.page;
        1 === o
          ? (e.myCurriculums = x().cloneDeep(n))
          : ((e.myCurriculums.page = o),
            (e.myCurriculums.hasMoreData = n.hasMoreData),
            (e.myCurriculums.curriculums = e.myCurriculums.curriculums.concat(
              n.curriculums,
            )));
      }),
      (Ve[s.vi.SIGN_UP_CURRICULUMS] = function (e, t) {
        var n = t.signUpCurriculumList,
          o = t.page;
        1 === o
          ? (e.signUpCurriculums = x().cloneDeep(n))
          : ((e.signUpCurriculums.page = o),
            (e.signUpCurriculums.hasMoreData = n.hasMoreData),
            (e.signUpCurriculums.curriculums =
              e.signUpCurriculums.curriculums.concat(n.curriculums)));
      }),
      (Ve[s.vi.PUBLIC_CURRICULUM_DETAIL] = function (e, t) {
        e.publicCurriculumDetail[t.id] = t;
      }),
      (Ve[s.vi.MY_CURRICULUMS_QUERY] = function (e, t) {
        e.myCurriculumQuery = x().cloneDeep(t);
      }),
      (Ve[s.vi.ACADEMIC_YEARS] = function (e, t) {
        e.academicYears = t;
      }),
      (Ve[s.vi.SEMESTERS] = function (e, t) {
        e.semesters = t;
      }),
      (Ve[s.vi.DEPARTMENTS] = function (e, t) {
        e.departments = t;
      }),
      Ve),
    qo = jo,
    Jo = {
      myCurriculums: new Uo.jL(),
      signUpCurriculums: new Uo.jL(),
      publicCurriculumDetail: {},
      myCurriculumQuery: new Uo.$G(),
      semesters: [],
      academicYears: [],
      departments: [],
    },
    Wo = { namespaced: !0, state: Jo, getters: Fo, actions: Qo, mutations: qo },
    Xo = Wo,
    Yo = n(21621),
    Ko =
      ((Ne = {}),
      (Ne[s.wI.GET_LIVES] = function (e, t) {
        var n = e.commit,
          o = t.page;
        return (0, a.mG)(this, void 0, void 0, function () {
          var e;
          return (0, a.Jh)(this, function (t) {
            switch (t.label) {
              case 0:
                return [4, Yo.Z.getLives(o)];
              case 1:
                return (
                  (e = t.sent()),
                  e && n(s.wI.GET_LIVES, { live: e, page: o }),
                  [2]
                );
            }
          });
        });
      }),
      Ne),
    $o = Ko,
    ei =
      ((De = {}),
      (De[s.wI.GET_LIVES] = function (e, t) {
        var n = t.live,
          o = t.page;
        1 === o
          ? (e.live = n)
          : ((e.live.page = o),
            (e.live.hasMoreData = n.hasMoreData),
            (e.live.lives = e.live.lives.concat(n.lives)));
      }),
      De),
    ti = ei,
    ni = n(52042),
    oi = { live: new ni.vk() },
    ii = oi,
    ri = { namespaced: !0, state: ii, actions: $o, mutations: ti },
    ai = ri,
    si = n(70930),
    li = n(3718),
    ci = li.W_.reduce(function (e, t) {
      return ((e[t] = new si.z()), e);
    }, {});
  ((ci.currentSlideIndex = 0), (ci.totalUnreadCount = 0));
  var ui,
    di,
    pi,
    mi,
    fi,
    vi,
    gi,
    hi,
    Ci,
    yi,
    Ai = ci,
    wi = n(69448),
    bi =
      ((ui = {}),
      (ui[s.qq.GET_NOTIFICATIONS] = function (e, t) {
        var n = e.commit,
          o = e.state,
          i = e.dispatch,
          r = t.type,
          l = t.refresh;
        return (0, a.mG)(this, void 0, void 0, function () {
          var e;
          return (0, a.Jh)(this, function (t) {
            switch (t.label) {
              case 0:
                return [4, wi.TH(li.XY, l ? 0 : o[r].offset, li.JK[r])];
              case 1:
                return (
                  (e = t.sent()),
                  e &&
                    n(s.qq.GET_NOTIFICATIONS, { data: e, type: r, refresh: l }),
                  l ? [4, i(s.qq.GET_NOTIFICATIONS_UNREAD_COUNT, r)] : [3, 3]
                );
              case 2:
                (t.sent(), (t.label = 3));
              case 3:
                return [2];
            }
          });
        });
      }),
      (ui[s.qq.MARK_NOTIFICATION_READ] = function (e, t) {
        var n = e.commit;
        return (0, a.mG)(this, void 0, void 0, function () {
          var e;
          return (0, a.Jh)(this, function (o) {
            switch (o.label) {
              case 0:
                return [4, wi.qS(li.JK[t])];
              case 1:
                return (
                  (e = o.sent()),
                  e && n(s.qq.MARK_NOTIFICATION_READ, t),
                  [2]
                );
            }
          });
        });
      }),
      (ui[s.qq.GET_NOTIFICATIONS_UNREAD_COUNT] = function (e, t) {
        var n = e.commit;
        return (0, a.mG)(this, void 0, void 0, function () {
          var e;
          return (0, a.Jh)(this, function (o) {
            switch (o.label) {
              case 0:
                return [4, wi.rp(li.JK[t])];
              case 1:
                return (
                  (e = o.sent()),
                  n(s.qq.GET_NOTIFICATIONS_UNREAD_COUNT, { type: t, count: e }),
                  [2]
                );
            }
          });
        });
      }),
      (ui[s.qq.GET_NOTIFICATIONS_UNREAD_COUNT_FOR_ALL_TYPES] = function (e) {
        var t = e.commit;
        return (0, a.mG)(this, void 0, void 0, function () {
          var e;
          return (0, a.Jh)(this, function (n) {
            switch (n.label) {
              case 0:
                return [4, wi.rp(Array.from(li.Nq.keys()))];
              case 1:
                return (
                  (e = n.sent()),
                  t(s.qq.GET_NOTIFICATIONS_UNREAD_COUNT_FOR_ALL_TYPES, e),
                  [2]
                );
            }
          });
        });
      }),
      (ui[s.qq.TOP_OR_UNTOP_NOTIFICATION] = function (e, t) {
        var n = e.dispatch,
          o = t.notificationId,
          i = t.userId,
          r = t.top,
          l = t.type;
        return (0, a.mG)(this, void 0, void 0, function () {
          var e;
          return (0, a.Jh)(this, function (t) {
            switch (t.label) {
              case 0:
                return [4, wi.aP(o, i, r)];
              case 1:
                return (
                  (e = t.sent()),
                  e
                    ? [
                        4,
                        n(
                          s.qq.GET_NOTIFICATIONS,
                          { type: l, refresh: !1 },
                          { root: !1 },
                        ),
                      ]
                    : [3, 3]
                );
              case 2:
                (t.sent(), (t.label = 3));
              case 3:
                return [2, e];
            }
          });
        });
      }),
      ui),
    Ei = bi,
    Si = function (e) {
      return li.W_.reduce(function (t, n) {
        var o;
        return (
          (t +=
            (null === (o = e[n]) || void 0 === o ? void 0 : o.unreadCount) ||
            0),
          t
        );
      }, 0);
    },
    Ti =
      ((di = {}),
      (di[s.qq.GET_NOTIFICATIONS] = function (e, t) {
        var n = t.data,
          o = t.type,
          i = t.refresh;
        (e[o] || (e[o] = new si.z()),
          (e[o].notifications = i
            ? n.notifications
            : e[o].notifications.concat(n.notifications)),
          (e[o].hasMoreData = n.notifications.length === li.XY),
          (e[o].offset = e[o].notifications.length));
      }),
      (di[s.qq.MARK_NOTIFICATION_READ] = function (e, t) {
        ((e[t].unreadCount = 0), (e.totalUnreadCount = Si(e)));
      }),
      (di[s.qq.GET_NOTIFICATIONS_UNREAD_COUNT] = function (e, t) {
        var n = t.type,
          o = t.count;
        ((e[n].unreadCount = o), (e.totalUnreadCount = Si(e)));
      }),
      (di[s.qq.GET_NOTIFICATIONS_UNREAD_COUNT_FOR_ALL_TYPES] = function (e, t) {
        e.totalUnreadCount = t;
      }),
      (di[s.qq.INCREASE_NOTIFICATIONS_UNREAD_COUNT] = function (e, t) {
        e[t].unreadCount = e[t].unreadCount + 1;
      }),
      (di[s.qq.SET_NOTIFICATION_SLIDE_INDEX] = function (e, t) {
        e.currentSlideIndex = t;
      }),
      di),
    _i = Ti,
    Ii =
      ((pi = {}),
      (pi[s.qq.GET_TAB_NOTIFICATION] = function (e) {
        return function (t) {
          return x().cloneDeep(e[t]);
        };
      }),
      pi),
    Li = { namespaced: !0, state: Ai, actions: Ei, mutations: _i, getters: Ii },
    ki = Li,
    Pi = n(35614),
    Bi =
      ((mi = {}),
      (mi[s.L9] = function (e) {
        var t = e.commit,
          n = e.dispatch;
        return (0, a.mG)(this, void 0, void 0, function () {
          var e, o;
          return (0, a.Jh)(this, function (i) {
            switch (i.label) {
              case 0:
                return [4, Pi.Z.getProfile()];
              case 1:
                return (
                  (e = i.sent()),
                  e &&
                    ((c.Z.user = e),
                    (o = (0, ft.Z)(c.Z)),
                    o.org && ((o.org.code = e.org.code), (c.Z.org = o.org)),
                    n("login/" + s.j9, o.org, { root: !0 }),
                    n(s.lr, o, { root: !0 }),
                    t(s.L9, e)),
                  [2]
                );
            }
          });
        });
      }),
      (mi[s.ih.CHANGE_AVATAR] = function (e, t) {
        var n = e.commit,
          o = e.dispatch;
        return (0, a.mG)(this, void 0, Promise, function () {
          var e;
          return (0, a.Jh)(this, function (i) {
            switch (i.label) {
              case 0:
                return [4, I.Z.changeAvatar(t)];
              case 1:
                return (
                  (e = i.sent()),
                  e.success &&
                    e.avatar &&
                    ((c.Z.user.avatarUrl = e.avatar.bigAvatar),
                    n(s.ih.CHANGE_AVATAR, e.avatar),
                    o(s.lr, c.Z, { root: !0 })),
                  [2, e.success]
                );
            }
          });
        });
      }),
      (mi[s.ih.CHANGE_NAME] = function (e, t) {
        var n = e.commit,
          o = e.dispatch;
        return (0, a.mG)(this, void 0, Promise, function () {
          var e;
          return (0, a.Jh)(this, function (i) {
            switch (i.label) {
              case 0:
                return [4, I.Z.changeName(t)];
              case 1:
                return (
                  (e = i.sent()),
                  e &&
                    ((c.Z.user.name = t),
                    n(s.ih.CHANGE_NAME, t),
                    o(s.lr, c.Z, { root: !0 })),
                  [2, e]
                );
            }
          });
        });
      }),
      (mi[s.ih.CHANGE_MOBILE_PHONE] = function (e, t) {
        var n = e.commit,
          o = e.dispatch,
          i = t.mobilePhone,
          r = t.verificationCode;
        return (0, a.mG)(this, void 0, Promise, function () {
          var e;
          return (0, a.Jh)(this, function (t) {
            switch (t.label) {
              case 0:
                return [4, I.Z.changeMobilePhone(i, r)];
              case 1:
                return (
                  (e = t.sent()),
                  e &&
                    ((c.Z.user.mobilePhone = i),
                    n(s.ih.CHANGE_MOBILE_PHONE, i),
                    o(s.lr, c.Z, { root: !0 })),
                  [2, e]
                );
            }
          });
        });
      }),
      (mi[s.ih.SEND_SMS_VERIFICATION_CODE] = function (e, t) {
        var n = e.commit;
        return (0, a.mG)(this, void 0, Promise, function () {
          var e;
          return (0, a.Jh)(this, function (o) {
            switch (o.label) {
              case 0:
                return [4, I.Z.sendSMSVerificationCode(t)];
              case 1:
                return (
                  (e = o.sent()),
                  e.success && n(s.ih.SEND_SMS_VERIFICATION_CODE, t),
                  [2, e]
                );
            }
          });
        });
      }),
      mi),
    Ri = Bi,
    xi = n(94682),
    Oi =
      ((fi = {}),
      (fi[s.L9] = function (e, t) {
        (Object.assign(e.userInfo, t),
          (window.APPRuntime.USER = JSON.parse(JSON.stringify(t))),
          m.Z.emit(f.ZK, t));
      }),
      (fi[s.ih.CHANGE_AVATAR] = function (e, t) {
        e.userInfo.avatarUrl = t.bigAvatar;
      }),
      (fi[s.ih.CHANGE_NAME] = function (e, t) {
        e.userInfo.name = t;
      }),
      (fi[s.ih.CHANGE_MOBILE_PHONE] = function (e, t) {
        ((e.userInfo.mobilePhone = t), (e.phoneVerification = null));
      }),
      (fi[s.ih.SEND_SMS_VERIFICATION_CODE] = function (e, t) {
        e.phoneVerification = {
          phone: t,
          nextSMSTime: z()().add(xi.Z.SMS_RETRY_TIMEOUT, "seconds"),
        };
      }),
      fi),
    Mi = Oi,
    Vi = n(63584),
    Ni = { userInfo: new Vi.n5(), phoneVerification: null },
    Di = Ni,
    Zi = { namespaced: !0, state: Di, actions: Ri, mutations: Mi },
    Ui = Zi,
    Hi = n(12384),
    Fi = (n(52586), n(81299), n(38698)),
    Gi = (function (e) {
      function t(t) {
        var n = e.call(this) || this;
        return (
          (n.list = []),
          t &&
            (Object.assign(n, t),
            (n.list = t.uploads.map(function (e) {
              return e.id;
            })),
            Reflect.deleteProperty(n, "uploads")),
          n
        );
      }
      return ((0, a.ZT)(t, e), t);
    })(Fi.tl),
    zi =
      ((vi = {}),
      (vi[s.YI.FETCH_USER_RESOURCES] = function (e, t) {
        var n = e.commit,
          o = e.state,
          i = t.condition,
          r = t.page,
          l = t.isStorageUserResourcesCondition;
        return (0, a.mG)(this, void 0, void 0, function () {
          var e, t;
          return (0, a.Jh)(this, function (a) {
            switch (a.label) {
              case 0:
                return [4, (0, Hi.p1)(i, r, o.userResources.data.pageSize)];
              case 1:
                return (
                  (e = a.sent()),
                  e
                    ? (n(
                        "".concat(s.DB.NAME, "/").concat(s.DB.PUSH_UPLOADS),
                        e.uploads,
                        { root: !0 },
                      ),
                      (t = new Gi(e)),
                      n(
                        s.YI.FETCH_USER_RESOURCES,
                        l
                          ? { userResources: t, condition: i }
                          : { userResources: t },
                      ),
                      [2])
                    : [2]
                );
            }
          });
        });
      }),
      (vi[s.YI.FETCH_PUBLIC_RESOURCES] = function (e, t) {
        var n = e.commit,
          o = t.condition,
          i = t.page,
          r = t.isStoragePublicResourcesCondition;
        return (0, a.mG)(this, void 0, void 0, function () {
          var e;
          return (0, a.Jh)(this, function (t) {
            switch (t.label) {
              case 0:
                return [4, (0, Hi.G6)(o, i, l.IV)];
              case 1:
                return (
                  (e = t.sent()),
                  e
                    ? (n(
                        s.YI.FETCH_PUBLIC_RESOURCES,
                        r
                          ? { publicResources: e, condition: o }
                          : { publicResources: e },
                      ),
                      [2])
                    : [2]
                );
            }
          });
        });
      }),
      vi),
    Qi =
      ((gi = {}),
      (gi[s.YI.FETCH_USER_RESOURCES] = function (e, t) {
        var n = t.userResources,
          o = t.condition;
        ((e.userResources.data.hasMoreData = n.hasMoreData),
          (e.userResources.data.page = n.page),
          (e.userResources.data.pages = n.pages),
          (e.userResources.data.pageSize = n.pageSize),
          1 === n.page
            ? (e.userResources.data.list = n.list)
            : (e.userResources.data.list = e.userResources.data.list.concat(
                n.list,
              )),
          o && (e.userResources.condition = x().clone(o)));
      }),
      (gi[s.YI.SET_CURRENT_UPLOAD_INFO] = function (e, t) {
        e.userResources["uploadInfo"] = t;
      }),
      (gi[s.YI.FETCH_PUBLIC_RESOURCES] = function (e, t) {
        var n = t.publicResources,
          o = t.condition;
        ((e.publicResources.data.hasMoreData = n.hasMoreData),
          (e.publicResources.data.page = n.page),
          (e.publicResources.data.pages = n.pages),
          (e.publicResources.data.pageSize = n.pageSize),
          1 === n.page
            ? (e.publicResources.data.resources = n.resources)
            : 0 === n.page
              ? (e.publicResources.data.resources = [])
              : (e.publicResources.data.resources =
                  e.publicResources.data.resources.concat(n.resources)),
          o && (e.publicResources.condition = x().clone(o)));
      }),
      gi),
    ji = n(96263),
    qi = {
      userResources: {
        data: new Gi(),
        condition: new ji.e0(),
        uploadInfo: null,
      },
      publicResources: {
        data: new ji.e9(),
        condition: new ji._R(),
        uploadInfo: null,
      },
    },
    Ji = qi,
    Wi =
      ((hi = {}),
      (hi[s.YI.GET_CURRENT_UPLOAD_INFO] = function (e) {
        return e.userResources.uploadInfo;
      }),
      hi),
    Xi = { namespaced: !0, state: Ji, actions: zi, mutations: Qi, getters: Wi },
    Yi = Xi,
    Ki =
      ((Ci = {}),
      (Ci[s.lr] = function (e, t) {
        return (0, a.mG)(this, void 0, void 0, function () {
          return (0, a.Jh)(this, function (e) {
            switch (e.label) {
              case 0:
                return [4, d.DataStorage.setItem("global", JSON.stringify(t))];
              case 1:
                return (e.sent(), [2]);
            }
          });
        });
      }),
      (Ci[s.AF] = function (e, t) {
        var n = e.commit;
        n(s.AF, t);
      }),
      (Ci[s.P4] = function (e) {
        var t,
          n,
          o = e.commit,
          i = e.dispatch;
        return (0, a.mG)(this, void 0, void 0, function () {
          var e,
            r,
            l,
            u,
            d,
            v,
            g = this;
          return (0, a.Jh)(this, function (h) {
            switch (h.label) {
              case 0:
                return (
                  (e = new Promise(function (e) {
                    return (0, a.mG)(g, void 0, void 0, function () {
                      return (0, a.Jh)(this, function (t) {
                        switch (t.label) {
                          case 0:
                            return [4, i("profile/" + s.L9)];
                          case 1:
                            return (t.sent(), e(), [2]);
                        }
                      });
                    });
                  })),
                  (r = new Promise(function (e) {
                    return (0, a.mG)(g, void 0, void 0, function () {
                      return (0, a.Jh)(this, function (t) {
                        switch (t.label) {
                          case 0:
                            return [4, p.ZP.updateConfig()];
                          case 1:
                            return (t.sent(), e(), [2]);
                        }
                      });
                    });
                  })),
                  [
                    4,
                    Promise.all([
                      _.Z.getFeatureToggle(),
                      _.Z.getLiveRecordSettings(
                        null === (t = c.Z.org) || void 0 === t ? void 0 : t.id,
                      ),
                      _.Z.getOrgSetting(
                        null === (n = c.Z.org) || void 0 === n ? void 0 : n.id,
                      ),
                      Ue(),
                      Ze(),
                      e,
                      r,
                    ]),
                  ]
                );
              case 1:
                return (
                  (l = h.sent()),
                  (u = l[0]),
                  (d = l[1]),
                  (v = l[2]),
                  u && (o(s.y5, u), m.Z.emit(f.XD, u)),
                  o(s.SY, d || {}),
                  v && (c.Z.settings.orgSetting = v),
                  i(s.lr, c.Z, { root: !0 }),
                  [2]
                );
            }
          });
        });
      }),
      Ci),
    $i =
      ((yi = {}),
      (yi[s.AF] = function (e, t) {
        e.appInfo.currentLanguage = t;
      }),
      (yi[s.y5] = function (e, t) {
        ((t.createCourse = !1),
          (e["featureToggle"] = t),
          (window.APPRuntime.FEATURE_TOGGLE = t));
      }),
      (yi[s.SY] = function (e, t) {
        e["liveRecordSettings"] = t;
      }),
      yi),
    er = n(50312),
    tr = { currentLanguage: "en-US", stateVersion: l.Li },
    nr = new er.e();
  window.APPRuntime.FEATURE_TOGGLE = nr;
  var or,
    ir,
    rr,
    ar,
    sr,
    lr,
    cr,
    ur,
    dr = {
      appInfo: tr,
      liveRecordSettings: {},
      featureToggle: nr,
      statisticsConfig: null,
    },
    pr = n(32456),
    mr = rt.Z.get("cache store"),
    fr = "state",
    vr = "db",
    gr = x().debounce(
      function (e, t) {
        return (0, a.mG)(void 0, void 0, void 0, function () {
          var e, n;
          return (0, a.Jh)(this, function (o) {
            switch (o.label) {
              case 0:
                return (
                  (e = JSON.stringify(t)),
                  (n = JSON.stringify(pt.Z.state)),
                  [4, pr.x.setItem(fr, e)]
                );
              case 1:
                return (o.sent(), [4, pr.x.setItem(vr, n)]);
              case 2:
                return (o.sent(), [2]);
            }
          });
        });
      },
      2e3,
      { leading: !1, trailing: !0, maxWait: 8e3 },
    ),
    hr = function (e, t) {
      var n;
      return (
        e.appInfo.stateVersion ===
        (null === (n = null === t || void 0 === t ? void 0 : t.appInfo) ||
        void 0 === n
          ? void 0
          : n.stateVersion)
      );
    },
    Cr = function (e) {
      return (0, a.mG)(void 0, void 0, void 0, function () {
        var t, n, o, i, r;
        return (0, a.Jh)(this, function (l) {
          switch (l.label) {
            case 0:
              ((t = null), (l.label = 1));
            case 1:
              return (l.trys.push([1, 3, , 4]), [4, pr.x.getItem(fr)]);
            case 2:
              return ((n = l.sent()), (t = JSON.parse(n)), [3, 4]);
            case 3:
              return (
                (o = l.sent()),
                mr.error("init store error: ".concat(o)),
                [3, 4]
              );
            case 4:
              if (!hr(e.state, t)) return [3, 8];
              (e.replaceState(t),
                (window.APPRuntime.FEATURE_TOGGLE = e.state.featureToggle),
                (l.label = 5));
            case 5:
              return (l.trys.push([5, 7, , 8]), [4, pr.x.getItem(vr)]);
            case 6:
              return (
                (i = l.sent()),
                Object.assign(pt.Z.state, JSON.parse(i)),
                [3, 8]
              );
            case 7:
              return (
                (r = l.sent()),
                mr.error("init db error: ".concat(r)),
                [3, 8]
              );
            case 8:
              return (
                (window._vuexstate = e.state),
                e.subscribe(function (e, t) {
                  return (0, a.mG)(void 0, void 0, void 0, function () {
                    return (0, a.Jh)(this, function (n) {
                      switch (n.label) {
                        case 0:
                          return e.type !== "login/".concat(s.Nv)
                            ? [3, 3]
                            : (gr.cancel(), [4, pr.x.removeItem(fr)]);
                        case 1:
                          return (n.sent(), [4, pr.x.removeItem(vr)]);
                        case 2:
                          return (n.sent(), [3, 4]);
                        case 3:
                          (gr(e, t), (n.label = 4));
                        case 4:
                          return [2];
                      }
                    });
                  });
                }),
                [2]
              );
          }
        });
      });
    },
    yr =
      ((or = {}),
      (or[s.DB.PUSH_EXAM_PAPER_TEMPLATES] = function (e, t) {
        t.forEach(function (t) {
          e.examPaperTemplates[t.templateId] = t;
        });
      }),
      (or[s.DB.UPDATE_EXAM_PAPER_TEMPLATE_UPLOAD] = function (e, t) {
        var n = t.attachment,
          o = t.upload;
        n.upload = o;
      }),
      (or[s.DB.POP_EXAM_PAPER_TEMPLATES] = function (e, t) {
        t.forEach(function (t) {
          delete e.examPaperTemplates[t];
        });
      }),
      (or[s.DB.PUSH_EXAM_PAPER_INSTANCES] = function (e, t) {
        t.forEach(function (t) {
          e.examPaperInstances[t.instanceId] = t;
        });
      }),
      or),
    Ar = yr,
    wr =
      ((ir = {}),
      (ir[s.DB.PUSH_INTERACTIONS] = function (e, t) {
        t.forEach(function (t) {
          e.interactions[t.id] = t;
        });
      }),
      ir),
    br = wr,
    Er = n(62918),
    Sr =
      ((rr = {}),
      (rr[s.DB.PUSH_EXAM_ACTIVITIES] = function (e, t) {
        t.forEach(function (t) {
          var n,
            o,
            i,
            r = e.examActivities[t.id];
          r
            ? (t.hasTemporarySubmission || Vn.Z.cleanTemporarySubmission(r),
              !(null ===
                (o =
                  null === (n = t.makeUpRecord) || void 0 === n
                    ? void 0
                    : n.makeUpExam) || void 0 === o
                ? void 0
                : o.hasTemporarySubmission) &&
                (null === (i = r.makeUpRecord) || void 0 === i
                  ? void 0
                  : i.makeUpExam) &&
                Vn.Z.cleanTemporarySubmission(r.makeUpRecord.makeUpExam),
              (e.examActivities[t.id] = (0, Er.P)(r, t)))
            : (e.examActivities[t.id] = t);
        });
      }),
      (rr[s.DB.POP_EXAM_ACTIVITIES] = function (e, t) {
        t.forEach(function (t) {
          delete e.examActivities[t];
        });
      }),
      (rr[s.DB.UPDATE_EXAM_SUBMISSION] = function (e, t) {
        if (t.activityId in e.examActivities) {
          var n = e.examActivities[t.activityId];
          n.submissions &&
            t.submission.id in n.submissions &&
            (n.submissions[t.submission.id] = t.submission);
        }
      }),
      (rr[s.DB.UPDATE_EXAM_SUBMISSION_UPLOAD] = function (e, t) {
        if (t.activityId in e.examActivities) {
          var n = e.examActivities[t.activityId];
          if (n.submissions && t.submissionId in n.submissions) {
            var o = n.submissions[t.submissionId],
              i = x().find(o.answers, { subjectId: t.subjectId });
            if (i) {
              var r = x().find(i.attachments, { id: t.upload.id });
              r && (r.upload = t.upload);
            }
          }
        }
      }),
      rr),
    Tr = Sr,
    _r =
      ((ar = {}),
      (ar[s.DB.PUSH_CATEGORIES] = function (e, t) {
        t.forEach(function (t) {
          var n,
            o =
              (null === (n = e.topicCategories[t.id]) || void 0 === n
                ? void 0
                : n.groups) || [];
          ((e.topicCategories[t.id] = t), (e.topicCategories[t.id].groups = o));
        });
      }),
      (ar[s.DB.UPDATE_TOPIC_CATEGORY_GROUPS] = function (e, t) {
        var n = t.topicCategoryId,
          o = t.groups,
          i = e.topicCategories[Number(n)];
        i.groups = o;
      }),
      ar),
    Ir = _r,
    Lr =
      ((sr = {}),
      (sr[s.DB.PUSH_TOPICS] = function (e, t) {
        if (t.length) {
          var n = {};
          (t.forEach(function (e) {
            n[e.id] = e;
          }),
            (e.topics = (0, a.pi)((0, a.pi)({}, e.topics), n)));
        }
      }),
      (sr[s.DB.UPDATE_TOPIC] = function (e, t) {
        var n,
          o,
          i = e.topics[t.id];
        (i
          ? ((t.createdBy.retakeStatus =
              null === (n = i.createdBy) || void 0 === n
                ? void 0
                : n.retakeStatus),
            (o = (0, a.pi)((0, a.pi)({}, i), t)))
          : (o = t),
          (e.topics[t.id] = o));
      }),
      (sr[s.DB.TOPIC_SCORE] = function (e, t) {
        e.topicScore[t.activityId] = t.topicScore.forumScores;
      }),
      (sr[s.DB.SET_TOPIC_SCORE] = function (e, t) {
        var n = t.activityId,
          o = e.topicScore[n] || [],
          i = o.findIndex(function (e) {
            return e.studentId === t.studentId;
          });
        i > -1 ? (e.topicScore[n][i] = t) : (e.topicScore[n][o.length] = t);
      }),
      sr),
    kr = Lr,
    Pr = function (e, t) {
      var n,
        o,
        i = e.answers.find(function (e) {
          return e.subjectId === t.id;
        });
      (i || ((i = new jt._T()), (i.subjectId = t.id), e.answers.push(i)),
        t.type === jt.jj.shortAnswer
          ? (i.answer =
              null !==
                (o =
                  null === (n = t.options[0]) || void 0 === n
                    ? void 0
                    : n.content) && void 0 !== o
                ? o
                : "")
          : (i.answerOptionIds = t.options
              .filter(function (e) {
                return e.isSelected;
              })
              .map(function (e) {
                return e.id;
              })));
    },
    Br =
      ((lr = {}),
      (lr[s.DB.UPDATE_QUESTIONNAIRE_SUBMISSION_SUBJECT] = function (e, t) {
        var n = t.submissionId,
          o = t.subject,
          i = e.questionnaireSubmissions[n];
        if (i) {
          var r = i.examSubjects.findIndex(function (e) {
            return e.id === o.id;
          });
          (-1 !== r && (i.examSubjects[r] = (0, ft.Z)(o)), Pr(i, o));
        }
      }),
      (lr[s.DB.PUSH_QUESTIONNAIRE_SUBMISSION] = function (e, t) {
        t.forEach(function (t) {
          t.id in e.questionnaireSubmissions
            ? (e.questionnaireSubmissions[t.id] = Object.assign(
                e.questionnaireSubmissions[t.id],
                Q.N0.cleanObject(t),
              ))
            : (e.questionnaireSubmissions[t.id] = Object.assign(
                new jt.Vn(),
                t,
              ));
        });
      }),
      (lr[s.DB.PUSH_QUESTIONNAIRE_SUBMITTERS] = function (e, t) {
        var n = t.activityId,
          o = t.submitters;
        e.questionnaireSubmitters[n] = o;
      }),
      (lr[s.DB.PUSH_QUESTIONNAIRES] = function (e, t) {
        t.forEach(function (t) {
          var n = e.questionnaires[t.id];
          e.questionnaires[t.id] = n
            ? Object.assign(n, Q.N0.cleanObject(t))
            : t;
        });
      }),
      (lr[s.DB.POP_QUESTIONNAIRES] = function (e, t) {
        t.forEach(function (t) {
          delete e.questionnaires[t];
        });
      }),
      lr),
    Rr = Br,
    xr =
      ((cr = {}),
      (cr[s.DB.PUSH_UPLOADS] = function (e, t) {
        t.forEach(function (t) {
          e.uploads[t.id] = t;
        });
      }),
      cr),
    Or = xr,
    Mr = {
      setEntity: function (e, t) {
        (e.entries || (e.entries = {}), (e.entries[t.id] = t));
      },
      deleteEntity: function (e, t) {
        (e.entries || (e.entries = {}), delete e.entries[t]);
      },
    },
    Vr = Mr,
    Nr = {},
    Dr = (0, a.pi)(
      (0, a.pi)(
        (0, a.pi)(
          (0, a.pi)(
            (0, a.pi)(
              (0, a.pi)((0, a.pi)((0, a.pi)((0, a.pi)({}, Nr), Ar), br), Tr),
              Ir,
            ),
            kr,
          ),
          Rr,
        ),
        Or,
      ),
      Vr,
    ),
    Zr = function (e) {
      switch (e) {
        case "exam":
          return "examsTemp";
        case "classroom":
        case "feedback":
          return "classroomActivities";
        default:
          return "learningActivities";
      }
    },
    Ur = {
      pushActivities: function (e, t) {
        t.forEach(function (t) {
          e[t.id] = t;
        });
      },
      popActivities: function (e, t) {
        t.forEach(function (t) {
          delete e[t];
        });
      },
      getSpecifiedActivities: function (e) {
        return function (t) {
          return t
            .map(function (t) {
              return e[t];
            })
            .filter(function (e) {
              return e;
            });
        };
      },
      getSpecifiedActivity: function (e) {
        return function (t) {
          return e[t] || null;
        };
      },
      getActivities: function (e) {
        return function (t) {
          return t
            .map(function (t) {
              return e[Zr(t.type)][t.id];
            })
            .filter(function (e) {
              return e;
            });
        };
      },
      getActivity: function (e) {
        return function (t) {
          return e[Zr(t.type)][t.id] || null;
        };
      },
      getUploads: function (e) {
        return function (t) {
          return t
            .map(function (t) {
              return e.uploads[t];
            })
            .filter(function (e) {
              return e;
            });
        };
      },
    },
    Hr =
      ((ur = {}),
      (ur[s.DB.GET_UPLOADS] = function (e) {
        return Ur.getUploads(e);
      }),
      ur),
    Fr = Hr,
    Gr = (function () {
      function e() {
        ((this.classroomActivities = {}),
          (this.examPaperTemplates = {}),
          (this.examPaperInstances = {}),
          (this.interactions = {}),
          (this.examActivities = {}),
          (this.topicCategories = {}),
          (this.topics = {}),
          (this.topicScore = {}),
          (this.questionnaireSubmitters = {}),
          (this.questionnaireSubmissions = {}),
          (this.learningActivities = {}),
          (this.examsTemp = {}),
          (this.uploads = {}),
          (this.entries = {}),
          (this.questionnaires = {}));
      }
      return e;
    })(),
    zr = new Gr(),
    Qr = zr,
    jr = { namespaced: !0, state: Qr, mutations: Dr, getters: Fr },
    qr = jr,
    Jr = {
      login: H,
      home: Ke,
      course: Lo,
      courses: Zo,
      curriculums: Xo,
      live: ai,
      notification: ki,
      profile: Ui,
      resource: Yi,
      db: qr,
    },
    Wr = function () {
      return dr;
    },
    Xr = { modules: Jr, actions: Ki, mutations: $i, state: Wr(), strict: !0 },
    Yr = r.MT(Xr),
    Kr = Yr;
};
