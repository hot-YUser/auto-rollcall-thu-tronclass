(self.webpackChunklms=self.webpackChunklms||[
]).push([
  [
    15134, 40204, 44346, 52032, 74302
  ], {
    1135:(e, t, r)=>{
      var o=r(302543);
      e.exports=[
        "$http", "toastr", "commonApi", function(e, t, r){
          return{
            course:r.course, createSyllabus(r, n){
              var i=arguments.length>2&&void 0!==arguments[
                2
              ]
              ?arguments[
                2
              ]
              :o.noop;
              return e.post("/api/syllabus", r).success(t.decorateSuccess(n)).error(t.decorateError(i))
            }, updateSyllabus(r, n){
              var i=arguments.length>2&&void 0!==arguments[
                2
              ]
              ?arguments[
                2
              ]
              :o.noop;
              return e.put("/api/syllabus/".concat(r.id), r).success(n).error(t.decorateError(i))
            }, deleteSyllabus(r, n){
              var i=arguments.length>2&&void 0!==arguments[
                2
              ]
              ?arguments[
                2
              ]
              :o.noop, s="/api/syllabus/".concat(r.id);
              return r.deleteRelatedActivity&&(s+="?delete_related_activity=true"), e.delete(s).success(n).error(t.decorateError(i))
            }, getSyllabusHasDependents(r, n){
              var i=arguments.length>2&&void 0!==arguments[
                2
              ]
              ?arguments[
                2
              ]
              :o.noop;
              return e.get("/api/syllabuses/".concat(r, "/has-dependents")).success(t.decorateSuccess(n)).error(t.decorateError(i))
            }, startRollcall(r, n, i){
              var s=arguments.length>3&&void 0!==arguments[
                3
              ]
              ?arguments[
                3
              ]
              :o.noop;
              return e.post("/api/rollcall/".concat(r, "/start-rollcall"), n).success(i).error(t.decorateError(s))
            }, getRollcalls(r, n){
              var i=arguments.length>2&&void 0!==arguments[
                2
              ]
              ?arguments[
                2
              ]
              :o.noop;
              return e.get("/api/course/".concat(r, "/rollcalls")).success(n).error(t.decorateError(i))
            }
          }
        }
      ]
    }, 5782:(e, t, r)=>{
      r.r(t), r.d(t, {
        default:()=>u, install:()=>c
      });
      var o=r(962893);
      function n(e, t){
        var r=Object.keys(e);
        if(Object.getOwnPropertySymbols){
          var o=Object.getOwnPropertySymbols(e);
          t&&(o=o.filter((function(t){
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, o)
        }
        return r
      }
      function i(e){
        for(var t=1;
        t<arguments.length;
        t++){
          var r=null!=arguments[
            t
          ]
          ?arguments[
            t
          ]
          :{
          };
          t%2?n(Object(r), !0).forEach((function(t){
            s(e, t, r[
              t
            ])
          })):Object.getOwnPropertyDescriptors?Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }
      function s(e, t, r){
        return t in e?Object.defineProperty(e, t, {
          value:r, enumerable:!0, configurable:!0, writable:!0
        }):e[
          t
        ]
        =r, e
      }
      function a(e){
        var t=arguments.length>1&&void 0!==arguments[
          1
        ]
        ?arguments[
          1
        ]
        :{
        }, r=arguments.length>2&&void 0!==arguments[
          2
        ]
        ?arguments[
          2
        ]
        :null, n=arguments.length>3&&void 0!==arguments[
          3
        ]
        ?arguments[
          3
        ]
        :{
        }, s=o.default.extend({
          render:r=>r(e, i({
            props:t
          }, n))
        }), a=new s({
          parent:r
        }).$mount();
        document.body.appendChild(a.$el);
        var c=a.$children[
          0
        ];
        c.visible=!0;
        var u=c.$refs.modal;
        u&&(u.$on("on-cancel", (()=>{
          setTimeout((()=>{
            (c.getComponentName&&"VocabularyForm"===c.getComponentName()||t.destroyComponent)&&(a.$destroy(), a.$el.remove())
          }), 300)
        })), u.$on("on-visible-change", (e=>{
          !e&&t.destroyComponent&&setTimeout((()=>{
            a.$destroy(), a.$el.remove()
          }), 1e3)
        })))
      }
      var c=()=>{
        o.default.prototype.$Modal&&(o.default.prototype.$Modal.show=a)
      };
      const u=a
    }, 21331:(e, t, r)=>{
      r(795093);
      e.exports=[
        "$rootScope", "$scope", "publishHelper", function(e, t, r){
          t.unPublished=!1;
          var o=()=>{
            var e;
            t.currentActivity?e=t.currentActivity:t.activity&&(e=t.activity), e&&(t.unPublished=!e.published)
          };
          e.$on("refreshPublishStatusWhenEditActivity", (()=>{
            o()
          })), e.$on("activity-publish-changed", ((e, n)=>{
            r.updateActivitiesPublishType(t.activities, n), o(), r.closePublishPopup()
          }));
          o()
        }
      ]
    }, 22033:(e, t, r)=>{
      var o=r(248124), n=r(302543);
      r(418665), r(43148), r(658379), r(14602), e.exports=[
        "$scope", "$q", "modelHelper", "publishHelper", "$window", function(e, t, r, i, s){
          e.isTogglePrerequisiteOpened="True"===o("#is-toggle-prerequisite-opened").val(), e.enrollmentIsStudent="True"===o("#enrollment-is-student").val(), e.isCourseInCheckpointMode="True"===o("#is-course-in-checkpoint-mode").val();
          var a=o("#courseId").val();
          return e.activityIsLocked=t=>e.isCourseInCheckpointMode&&e.isTogglePrerequisiteOpened&&(!e.enrollmentIsStudent&&e.activityHasPrerequisite(t)||e.enrollmentIsStudent&&e.activityHasNotFinishedPrerequisite(t)), e.activityHasPrerequisite=t=>e.isCourseInCheckpointMode&&t.prerequisites&&t.prerequisites.length>0, e.activityHasNotFinishedPrerequisite=t=>e.activityHasPrerequisite(t)&&n.some(t.prerequisites, (e=>!1===e.completion_criterion.has_completed)), e.activityCanOperate=t=>!e.enrollmentIsStudent||!e.activityIsLocked(t), e.confirm=function(){
            return o("#confirmation-popup").foundation("reveal", "close"), null
          }, e.canOpenActivity=function(t){
            var r, n=!(arguments.length>1&&void 0!==arguments[
              1
            ])||arguments[
              1
            ];
            return("chinamcloud_live"!==t.type||null===(r=t.data)||void 0===r||!r.is_off_shelf)&&(!e.isTogglePrerequisiteOpened||(!e.needToLoadPrerequisitesInfo()||(!e.activityHasNotFinishedPrerequisite(t)||(e.hideCancel=!0, n&&o("#prerequisites-confirmation-popup-".concat(t.type, "-").concat(t.id)).foundation("reveal", "open"), !1))))
          }, e.viewFiles=e=>{
            var t, r, o=[
            ];
            return null===(t=e.data)||void 0===t||null===(r=t.other_resources)||void 0===r||r.forEach((e=>{
              "LARK"!==e.source&&"WEDRIVE"!==e.source||o.push(e)
            })), o.push(...e.uploads), o
          }, e.isShowViewFiles=e=>{
            var t;
            return Boolean(e.uploads||(null===(t=e.data)||void 0===t?void 0:t.other_resources))
          }, e.openActivity=function(t){
            var n, c=!(arguments.length>1&&void 0!==arguments[
              1
            ])||arguments[
              1
            ], u=arguments.length>2&&void 0!==arguments[
              2
            ]
            ?arguments[
              2
            ]
            :"";
            "exam"===t.type&&window.localStorage.setItem("examDefaultBackPlace", u);
            var l, d, p=[
              "race_answer", "select_student", "select_group", "group_rollcall"
            ];
            return null!==(n=window.featureToggles)&&void 0!==n&&n.askQuestion&&(p=[
              "race_answer", "group_rollcall"
            ]), p.includes(t.type)||"vote"===t.type&&!e.isInstructorView?(e.hintTarget=t.type, o("#interaction-warning-popup").foundation("reveal", "open")):e.canOpenActivity(t)?i.canViewActivityPermission(e.isInstructorView||(null===(l=window.globalData)||void 0===l||null===(d=l.courseRoles)||void 0===d?void 0:d.includes("student_assistant")), t)||i.allowViewUnpublishedActivityDetail(t)?s.location.href=r.activityUrl(t, a, c):(o("#access-forbidden-popup").foundation("reveal", "open"), void(e.__accessForbidden=t)):void 0
          }, e.$on("fetchCourseNavSetting", (function(t, r){
            e.$broadcast("initedCourseNavSetting", r)
          })), e.needToLoadPrerequisitesInfo=()=>e.enrollmentIsStudent&&e.isCourseInCheckpointMode&&e.isTogglePrerequisiteOpened
        }
      ]
    }, 43588:(e, t, r)=>{
      var o=r(302543), n=r(756029), i=r(287092), s=r(248124);
      function a(e, t){
        var r=Object.keys(e);
        if(Object.getOwnPropertySymbols){
          var o=Object.getOwnPropertySymbols(e);
          t&&(o=o.filter((function(t){
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, o)
        }
        return r
      }
      function c(e, t, r){
        return t in e?Object.defineProperty(e, t, {
          value:r, enumerable:!0, configurable:!0, writable:!0
        }):e[
          t
        ]
        =r, e
      }
      r(335231), r(754989), r(658379), e.exports=[
        "$rootScope", "api", "activityRepository", function(e, t, r){
          var u={
            course:{
            }, addModule(e, r, n){
              var i=o.maxBy(this.course.modules, "sort"), s=0;
              i&&(s=i.sort+1);
              var a=l(e);
              return a.sort=s, t.addModule(this.course.id, a, (t=>{
                var n=this.course.modules;
                return n.length>0?(e=o.maxBy(n, "sort"), t.sort=e.sort+1):t.sort=0, t.allow_delete=!0, t.allow_update=!0, t.directActivities=[
                ], n.push(t), d(this.course), (r||noop)(t)
              }), (e=>(n||noop)(e)))
            }, addModulesCallback(e, t){
              var r=o.maxBy(this.course.modules, "sort"), n=0;
              r&&(n=r.sort+1);
              var i=this.course.modules;
              return o.forEach(e, (e=>{
                e.sort=n, e.allow_delete=!0, e.allow_update=!0, e.directActivities=[
                ], i.push(e), n++
              })), d(this.course), (t||noop)(e)
            }, deleteModule:(e, o, n)=>t.deleteModule(e, (function(){
              return r._course.deleteModule(e), (o||noop)()
            }), (e=>(n||noop)(e))), updateModule(e, r, n){
              return t.updateModule(e, (t=>{
                var n=this.course.modules;
                return o.find(n, {
                  id:e.id
                }).name=t.name, r()
              }), ((e, t)=>(n||noop)(e, t)))
            }, exchangeModule(e, r, s, a){
              if(void 0===r||e!==r){
                var c=n.copy(this.course.modules), u=n.copy(this.course.modules), l=o.find(c, {
                  sort:e
                }), d=r<e, p=i.range(e, r, !0);
                o.each(p, (function(e){
                  if(d&&c[
                    e
                  ].sort++, !d)return c[
                    e
                  ].sort--
                })), l.sort=r;
                var v={
                  modules:o.sortBy(c, "sort")
                }, f=o.map(v.modules, (e=>({
                  id:e.id, sort:e.sort
                })));
                return t.updateModuleSort(this.course.id, f, (()=>(this.course.modules=v.modules, s())), (()=>(this.course.modules=u, a())))
              }
            }, exchangeSyllabus(e, r, o){
              t.updateSyllabusSort(e, r, o)
            }, changeSortableState(e, t){
              var r, o="";
              if("module"===e&&(r=s(".module-sort")), "syllabus"===e&&(r=s(".course-syllabus-wrapper")), r)for(var n=0;
              n<r.length;
              n++){
                var i=r[
                  n
                ];
                Object.keys(i).forEach((e=>{
                  e.startsWith("Sortable")&&(o=e)
                })), o&&i[
                  o
                ].option("disabled", t)
              }
            }, disableContentSortable(e){
              this.changeSortableState(e, !0)
            }, enableContentSortable(e){
              this.changeSortableState(e, !1)
            }, getModuleHasDependents:(e, r, o)=>t.getModuleHasDependents(e, r, o)
          }, l=e=>function(e){
            for(var t=1;
            t<arguments.length;
            t++){
              var r=null!=arguments[
                t
              ]
              ?arguments[
                t
              ]
              :{
              };
              t%2?a(Object(r), !0).forEach((function(t){
                c(e, t, r[
                  t
                ])
              })):Object.getOwnPropertyDescriptors?Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              }))
            }
            return e
          }
          ({
          }, e), d=function(e){
            e.modules=o.sortBy(e.modules, [
              "sort", "name"
            ]);
            var t=0;
            return e.modules=o.forEach(e.modules, (e=>e.sort=t++))
          };
          return r.initCourseAndModules().then((e=>u.course=e)), u
        }
      ]
    }, 49740:(e, t, r)=>{
      r(248124);
      var o=r(302543), n=r(571478);
      e.exports=[
        "$rootScope", "$scope", "$http", "toastr", "pkgAPI", function(e, t, r, i, s){
          var a=n(t), c="before", u="processing", l="finished", d="failed", p=function(){
            t.coursePkg={
              status:c, name:""
            }, t.currentCourse=null
          };
          t.$on("coursePkg.create", (function(e, r){
            p(), t.currentCourse=r, r&&(t.coursePkg.name=(t.coursePkgPrefix||"[Course Package] ")+r.name)
          })), t.confirm=function(){
            var e={
              name:t.coursePkg.name
            };
            a.show(), t.coursePkg.status=u, s.createPackage(t.currentCourse.id, e, (function(e){
              a.hide(), t.coursePkg.status=l, o.merge(t.coursePkg, e.course_pkg)
            }), (function(e){
              t.errors=e.errors, o.isEmpty(t.errors)&&(t.coursePkg.status=d)
            }))
          }, p()
        }
      ]
    }, 52340:e=>{
      e.exports=[
        "$http", "toastr", "commonApi", function(e, t, r){
          return{
            course:r.course, addModule:(r, o, n, i)=>e.post("/api/course/".concat(r, "/module"), o).success(n).error(t.decorateError(i)), deleteModule(r, o, n){
              var i="/api/module/".concat(r.id);
              return r.deleteRelatedActivity&&(i+="?delete_related_activity=true"), e.delete(i).success(o).error(t.decorateError(n))
            }, updateModule:(r, o, n)=>e.put("/api/module/"+r.id, r).success(o).error(t.decorateError(n)), updateModuleSort(r, o, n, i){
              var s={
                modules:o
              };
              return e.put("/api/course/".concat(r), s).success(n).error(t.decorateError(i))
            }, updateSyllabusSort:(r, o, n)=>e.put("/api/syllabus/resort", r).success(o).error(t.decorateError(n)), getModuleHasDependents:(r, o, n)=>e.get("/api/modules/".concat(r, "/has-dependents")).success(t.decorateSuccess(o)).error(t.decorateError(n))
          }
        }
      ]
    }, 52823:(e, t, r)=>{
      r.d(t, {
        A:()=>m, N:()=>a
      });
      r(418665), r(269193), r(979073), r(906048), r(43148), r(640173), r(658379), r(14602);
      var o=r(592207), n=r.n(o);
      r(207452);
      function i(e, t, r, o, n, i, s){
        try{
          var a=e[
            i
          ]
          (s), c=a.value
        }
        catch(e){
          return void r(e)
        }
        a.done?t(c):Promise.resolve(c).then(o, n)
      }
      function s(e){
        return function(){
          var t=this, r=arguments;
          return new Promise((function(o, n){
            var s=e.apply(t, r);
            function a(e){
              i(s, o, n, a, c, "next", e)
            }
            function c(e){
              i(s, o, n, a, c, "throw", e)
            }
            a(void 0)
          }))
        }
      }
      var a={
        ABOVE:"drag-above", BELOW:"drag-below", ON:"drag-on"
      };
      function c(e){
        return e.path?e.path:e.composedPath?e.composedPath():function(e){
          for(var t=e.target, r=[
          ];
          t;
          ){
            if(r.push(t), "HTML"===t.tagName)return r.push(document), r.push(window), r;
            t=t.parentElement
          }
          return r
        }
        (e)
      }
      function u(e){
        var t=function(e){
          for(var t, r=0, o=c(e);
          r<o.length;
          r++)if(t=o[
            r
          ].className||"", /tree-node/.test(t))return o[
            r
          ];
          return null
        }
        (e);
        return t||null
      }
      function l(e, t){
        if(e){
          var r=e.className;
          if(t)new RegExp(t).test(r)||(r+=" ".concat(t));
          else{
            for(var o in a)r=r.replace(a[
              o
            ], "");
            r.replace("dragging", "")
          }
          e.className=r.replace(/\s+/g, " ")
        }
      }
      function d(e, t){
        var r=t.getBoundingClientRect(), o=r.height/3, n=a.ON;
        return r.top+o>=e.clientY?n=a.ABOVE:r.top+2*o<=e.clientY&&(n=a.BELOW), n
      }
      function p(e, t, r){
        return v.apply(this, arguments)
      }
      function v(){
        return(v=s(n().mark((function e(t, r, o){
          return n().wrap((function(e){
            for(;
            ;
            )switch(e.prev=e.next){
              case 0:if(r&&r[
                o
              ]
              &&"function"==typeof r[
                o
              ]){
                e.next=2;
                break
              }
              return e.abrupt("return");
              case 2:return e.next=4, r[
                o
              ]
              (...t);
              case 4:return e.t0=e.sent, e.abrupt("return", !1!==e.t0);
              case 6:case"end":return e.stop()
            }
          }), e)
        })))).apply(this, arguments)
      }
      function f(e){
        for(var t in a)for(var r=e.querySelectorAll(".".concat(a[
          t
        ])), o=0;
        o<r.length;
        o++)l(r[
          o
        ])
      }
      const m={
        methods:{
          getDropDestination:u, getDropPosition:d, updateHelperClasses:l, clearDropClasses:f, onDragStart(e){
            e.preventDefault()
          }, startDragging(e, t){
            var r=this;
            return s(n().mark((function o(){
              return n().wrap((function(o){
                for(;
                ;
                )switch(o.prev=o.next){
                  case 0:if(o.t0=!e.isDraggable(), o.t0){
                    o.next=6;
                    break
                  }
                  return o.next=4, p([
                    e
                  ], r.tree.options.dnd, "onDragStart");
                  case 4:o.t1=o.sent, o.t0=!1===o.t1;
                  case 6:if(!o.t0){
                    o.next=8;
                    break
                  }
                  return o.abrupt("return");
                  case 8:r.$$startDragPosition=[
                    t.clientX, t.clientY
                  ], r.$$possibleDragNode=e, r.$$possibleDragEle=e.vm.$el, r.initDragListeners();
                  case 12:case"end":return o.stop()
                }
              }), o)
            })))()
          }, initDragListeners(){
            var e, t=this, r=e=>{
              this.$el.style.userSelect=e?"none":null, this.$el.querySelectorAll(".tree-operate").forEach((t=>{
                t instanceof HTMLElement&&(t.style.pointerEvents=e?"none":null)
              })), document.body.style.cursor=e?"grabbing":null
            }, o=()=>{
              window.removeEventListener("mouseup", i, !0), window.removeEventListener("mousemove", c, !0), r(!1)
            }, i=function(){
              var r=s(n().mark((function r(i){
                return n().wrap((function(r){
                  for(;
                  ;
                  )switch(r.prev=r.next){
                    case 0:if(t.$$startDragPosition||i.stopPropagation(), t.draggableNode&&t.draggableNode.node.state("dragging", !1), !(t.$$dropDestination&&t.tree.isNode(t.$$dropDestination)&&t.$$dropDestination.vm)){
                      r.next=9;
                      break
                    }
                    return l(t.$$dropDestination.vm.$el, null), r.next=6, p([
                      t.draggableNode.node, t.$$dropDestination, e
                    ], t.tree.options.dnd, "onDragFinish");
                    case 6:!1!==r.sent&&(t.$$dropDestination.isDropable()||e!==a.ON)&&e&&(t.draggableNode.node.finishDragging(t.$$dropDestination, e), t.draggableNode.node.parent=t.$$dropDestination, t.$emit("dragFinish")), t.$$dropDestination=null;
                    case 9:f(t.$el), t.$$possibleDragNode=null, t.$$possibleDragEle=null, t.$set(t, "draggableNode", null), o();
                    case 14:case"end":return r.stop()
                  }
                }), r)
              })));
              return function(e){
                return r.apply(this, arguments)
              }
            }
            (), c=function(){
              var i=s(n().mark((function i(s){
                var c, v, m, y, h;
                return n().wrap((function(n){
                  for(;
                  ;
                  )switch(n.prev=n.next){
                    case 0:if(r(!0), !t.$$startDragPosition||(i=s, g=t.$$startDragPosition, Math.abs(i.clientX-g[
                      0
                    ])>5||Math.abs(i.clientY-g[
                      1
                    ])>5)){
                      n.next=3;
                      break
                    }
                    return n.abrupt("return");
                    case 3:if(t.$$startDragPosition=null, !t.$$possibleDragNode){
                      n.next=12;
                      break
                    }
                    if(!1!==t.$$possibleDragNode.startDragging()){
                      n.next=10;
                      break
                    }
                    return o(), t.$$possibleDragNode=null, t.$$possibleDragEle=null, n.abrupt("return");
                    case 10:t.$set(t, "draggableNode", {
                      node:t.$$possibleDragNode, ele:t.$$possibleDragEle, left:0, top:0
                    }), t.$$possibleDragNode=null;
                    case 12:if(t.draggableNode.left=s.clientX, t.draggableNode.top=s.clientY, m=u(s), f(t.$el), m){
                      n.next=19;
                      break
                    }
                    return t.$$dropDestination=null, n.abrupt("return");
                    case 19:if(y=m.getAttribute("data-id"), t.draggableNode.node.id!==y){
                      n.next=22;
                      break
                    }
                    return n.abrupt("return");
                    case 22:if(t.$$dropDestination&&t.$$dropDestination.id===y||(t.$$dropDestination=t.tree.getNodeById(y)), !t.$$dropDestination||!t.draggableNode.node){
                      n.next=28;
                      break
                    }
                    if(!t.$$dropDestination.getPath().includes(t.draggableNode.node)){
                      n.next=28;
                      break
                    }
                    return t.$$dropDestination=null, n.abrupt("return");
                    case 28:if((e=d(s, m))!==a.ON||!m.contains(null===(c=t.draggableNode)||void 0===c||null===(v=c.ele)||void 0===v?void 0:v.parentElement)){
                      n.next=32;
                      break
                    }
                    return t.$$dropDestination=null, n.abrupt("return");
                    case 32:if(!t.options.dndChecker){
                      n.next=36;
                      break
                    }
                    if(t.options.dndChecker(t.draggableNode.node, t.$$dropDestination, e)){
                      n.next=36;
                      break
                    }
                    return t.$$dropDestination=null, n.abrupt("return");
                    case 36:return n.next=38, p([
                      t.draggableNode.node, t.$$dropDestination, e
                    ], t.tree.options.dnd, "onDragOn");
                    case 38:h=n.sent, t.$$dropDestination.isDropable()&&!1!==h||e!==a.ON||(e=null), l(m, e);
                    case 42:case"end":return n.stop()
                  }
                  var i, g
                }), i)
              })));
              return function(e){
                return i.apply(this, arguments)
              }
            }
            ();
            window.addEventListener("mouseup", i, !0), window.addEventListener("mousemove", c, !0)
          }
        }
      }
    }, 82246:(e, t, r)=>{
      var o=r(248124), n=r(302543);
      r(195755), r(379432), r(658379);
      var i=r(592207);
      function s(e, t, r, o, n, i, s){
        try{
          var a=e[
            i
          ]
          (s), c=a.value
        }
        catch(e){
          return void r(e)
        }
        a.done?t(c):Promise.resolve(c).then(o, n)
      }
      function a(e){
        return function(){
          var t=this, r=arguments;
          return new Promise((function(o, n){
            var i=e.apply(t, r);
            function a(e){
              s(i, o, n, a, c, "next", e)
            }
            function c(e){
              s(i, o, n, a, c, "throw", e)
            }
            a(void 0)
          }))
        }
      }
      function c(e, t){
        var r;
        if("undefined"==typeof Symbol||null==e[
          Symbol.iterator
        ]){
          if(Array.isArray(e)||(r=function(e, t){
            if(!e)return;
            if("string"==typeof e)return u(e, t);
            var r=Object.prototype.toString.call(e).slice(8, -1);
            "Object"===r&&e.constructor&&(r=e.constructor.name);
            if("Map"===r||"Set"===r)return Array.from(e);
            if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(e, t)
          }
          (e))||t&&e&&"number"==typeof e.length){
            r&&(e=r);
            var o=0, n=function(){
            };
            return{
              s:n, n:function(){
                return o>=e.length?{
                  done:!0
                }
                :{
                  done:!1, value:e[
                    o++
                  ]
                }
              }, e:function(e){
                throw e
              }, f:n
            }
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var i, s=!0, a=!1;
        return{
          s:function(){
            r=e[
              Symbol.iterator
            ]
            ()
          }, n:function(){
            var e=r.next();
            return s=e.done, e
          }, e:function(e){
            a=!0, i=e
          }, f:function(){
            try{
              s||null==r.return||r.return()
            }
            finally{
              if(a)throw i
            }
          }
        }
      }
      function u(e, t){
        (null==t||t>e.length)&&(t=e.length);
        for(var r=0, o=new Array(t);
        r<t;
        r++)o[
          r
        ]
        =e[
          r
        ];
        return o
      }
      r(207452);
      var l=r(181769), d=l.canEditActivity, p=l.hasEditPermissionForBlueprint, v=r(901499), f=r(822087).ActivityAirHelper, m=r(966491), y=r(951708).getActivityAiQuizzes;
      e.exports=[
        "$rootScope", "$scope", "activityRepository", "moduleRepository", "modelHelper", "$timeout", "toastr", "$window", "$http", "onlineVideoCompletenessRepository", function(e, t, r, s, u, l, h, g, b, _){
          t.userId=o("#userId").data("id"), t.completedInfo={
            material:t.materialCompletedInfo
          }, t.resort=function(e, o){
            return t.syllabus?r.exchangeSyllabusActivities(t.syllabus, e, o):r.exchangeModuleActivities(t.module, e, o)
          }, t.resortWhenRemove=e=>t.syllabus?r.updateActivitiesAfterExchangeSyllabus(t.syllabus, e):r.updateActivitiesAfterExchangeModule(t.module, e), t.beforeSort=()=>{
            s.disableContentSortable("syllabus"), s.disableContentSortable("module")
          }, t.afterSort=()=>{
            s.enableContentSortable("syllabus"), s.enableContentSortable("module")
          }, t.resortForModuleOrSyllabus=(e, o, n)=>{
            var i, s, a=(null===(i=t.module)||void 0===i?void 0:i.id)!==n.oldModule, c=(null===(s=t.syllabus)||void 0===s?void 0:s.id)!==n.oldSyllabus;
            return a?r.exchangeModuleOrSyllabus(e, o, n, t.module, t.syllabus):c?r.justExchangeInsiderModule(e, o, n, t.module, t.syllabus):void 0
          }, t.reTranscode=function(e){
            m.retryTranscode(b, h, g, e)
          }, t.downloadBlob=function(e, n){
            var i=arguments.length>2&&void 0!==arguments[
              2
            ]
            ?arguments[
              2
            ]
            :"download", s=o("#courseId").val();
            if(!n.deleted){
              var a=function(r){
                if(u.refreshActivitiesReadForMaterialActivity(t.activitiesRead, r), e.icon=u.getActivityIcon(e, t.activitiesRead, t.isInstructorView), "full"===r.completeness&&e.completion_criterion&&t.isCourseInCheckpointMode&&t.isTogglePrerequisiteOpened)return u.refreshPrerequisitesStatus(e, t, !0, t.completedInfo[
                  e.type
                ])
              };
              return r.logActivityRead(e.id, {
                upload_id:n.id
              }, a, (function(){
              })), st.inPage({
                course_id:s, syllabus_id:e.syllabus_id
              }), st.track(e.type, i, {
                activity_id:e.id, upload_id:n.id, file_name:n.name
              })
            }
          };
          var w=e=>!!Number(e.score_percentage)||"online_video"===e.type&&(Number(_.setting.score_percentage)>0&&(_.setting.include_none_criterion||e.completion_criterion));
          t.filterLearningActivity=e=>{
            var r, o=[
            ];
            return r="PPT"===t.filterCategory?"PPT"===e.data.material_type&&"material"===e.type:"material"===t.filterCategory?t.filterCategory===e.type&&"PPT"!==e.data.material_type:"all"===t.filterCategory||t.filterCategory===e.type, o.push(r), t.onlyShowFromativeTasks&&o.push(w(e)), n.every(o)
          }, t.allowResort=e=>"all"===t.filterCategory, t.canShowOperations=e=>d(e), t.canEditActivitySelf=e=>p(e), e.$on("activityUpdated", ((e, r)=>n.each(t.course.modules, (function(e){
            var t=n.find(e.activities, {
              id:r.id, type:r.type
            });
            return t&&n.extend(t, r), u.removeOldActivity(e, r), u.addNewActivity(r, e)
          })))), e.$on("dependantsUpdated", (function(e, o){
            return v(t, r, o, u, [
            ]).refreshPrerequisitesAfterActivityEdit()
          })), e.$on("prerequisitesUpdated", (function(e, r){
            n.find(t.course.activities, {
              unique_key:r.unique_key
            }).prerequisites=r.prerequisites;
            var o, i=c(t.course.modules);
            try{
              for(i.s();
              !(o=i.n()).done;
              ){
                var s=o.value, a=n.find(s.directActivities, {
                  unique_key:r.unique_key
                });
                if(a)return void(a.prerequisites=r.prerequisites);
                var u, l=c(s.syllabuses);
                try{
                  for(l.s();
                  !(u=l.n()).done;
                  ){
                    var d=u.value;
                    if(a=n.find(d.activities, {
                      unique_key:r.unique_key
                    }))return void(a.prerequisites=r.prerequisites)
                  }
                }
                catch(e){
                  l.e(e)
                }
                finally{
                  l.f()
                }
              }
            }
            catch(e){
              i.e(e)
            }
            finally{
              i.f()
            }
          }));
          e.$on("refreshActivity", ((e, o)=>{
            var i=o.activity;
            if(o.isEditing&&r.removeActivityFromCourse(i.id, t.course), !n.find(t.course.activities, {
              id:i.id
            })){
              var s=n.find(t.course.modules, {
                id:i.module_id
              });
              if(t.course.activities=t.course.activities||[
              ], t.course.activities.push(i), s){
                if(s.activities=s.activities||[
                ], s.activities.push(i), i.syllabus_id){
                  var a=n.find(s.syllabuses, {
                    id:i.syllabus_id
                  });
                  return a.activities=a.activities||[
                  ], a.activities.push(i), (e=>{
                    e.activities=n.sortBy(e.activities, [
                      "sort", "id"
                    ])
                  })(a)
                }
                return s.directActivities=s.directActivities||[
                ], s.directActivities.push(i), (e=>{
                  e.directActivities=n.sortBy(e.directActivities, [
                    "sort", "id"
                  ])
                })(s)
              }
            }
          })), t.setUploadsStatus=function(e){
            return m.setUploadsOriginStatus(e), m.setUploadsFeature(e)
          }, t.hasFailedUpload=function(e, t){
            var r, o=c(e);
            try{
              for(o.s();
              !(r=o.n()).done;
              ){
                var n=r.value;
                if("failed"===t[
                  n.id
                ]
                &&!m.wpsPreview(n))return!0
              }
            }
            catch(e){
              o.e(e)
            }
            finally{
              o.f()
            }
            return!1
          }, t.loadingAiQuizzes=!1;
          var S=function(){
            var r=a(i.mark((function r(o){
              var n;
              return i.wrap((function(r){
                for(;
                ;
                )switch(r.prev=r.next){
                  case 0:if(e.aiQuizCount=0, o){
                    r.next=3;
                    break
                  }
                  return r.abrupt("return");
                  case 3:return t.loadingAiQuizzes=!0, m.setUploadsOriginStatus(o.uploads), r.next=7, y(o.id);
                  case 7:(n=r.sent)&&n.length?(e.aiQuizCount=n.length, o.uploads.forEach((e=>{
                    e.aiQuiz=n.find((t=>t.uploadReferenceId===e.reference_id||null))
                  }))):o.uploads.forEach((e=>{
                    e.aiQuiz=null
                  })), t.loadingAiQuizzes=!1, t.$apply();
                  case 11:case"end":return r.stop()
                }
              }), r)
            })));
            return function(e){
              return r.apply(this, arguments)
            }
          }
          (), x=function(){
            var e=a(i.mark((function e(t, r, o){
              return i.wrap((function(e){
                for(;
                ;
                )switch(e.prev=e.next){
                  case 0:(t.syllabus?t.module.syllabuses.flatMap((e=>e.activities)):t.module.directActivities).forEach(function(){
                    var e=a(i.mark((function e(t){
                      return i.wrap((function(e){
                        for(;
                        ;
                        )switch(e.prev=e.next){
                          case 0:if(t.id!==r){
                            e.next=4;
                            break
                          }
                          return e.next=3, S(t);
                          case 3:o&&o(t);
                          case 4:case"end":return e.stop()
                        }
                      }), e)
                    })));
                    return function(t){
                      return e.apply(this, arguments)
                    }
                  }
                  ());
                  case 2:case"end":return e.stop()
                }
              }), e)
            })));
            return function(t, r, o){
              return e.apply(this, arguments)
            }
          }
          ();
          e.$on("coursewareUpdated", (function(e, o){
            if(n.uniq(n.union([
              o
            ], t.module.directActivities, "id")), t.isCourseInCheckpointMode)return v(t, r, o, u, t.activities).refreshPrerequisitesAfterActivityEdit();
            x(t, o.id)
          })), t.$on("updateActivityQuizzes", function(){
            var r=a(i.mark((function r(n, s){
              var a, c, u, l;
              return i.wrap((function(r){
                for(;
                ;
                )switch(r.prev=r.next){
                  case 0:a=s.previewFile, c=s.openQuizPanel, u=s.uploadId, l=s.activityId, x(t, l, (t=>{
                    a&&(o("#file-previewer").foundation("reveal", "open"), e.$emit("previewFile", t.uploads.find((e=>e.id===u)), t)), c&&e.$emit("openAiQuizPanel")
                  }));
                  case 2:case"end":return r.stop()
                }
              }), r)
            })));
            return function(e, t){
              return r.apply(this, arguments)
            }
          }
          ());
          var C=function(e, r){
            var o;
            if(!r||![
              "full", "part", "none"
            ].includes(e))return"";
            o=null!=r.completion_criterion_key&&"none"!==r.completion_criterion_key?r.completion_criterion:t.criterionMessageMap.none;
            var n="<b>".concat(t.completenessTipMap[
              e
            ], "</b></br>").concat(t.criterion, "：").concat(o);
            return r.completenessTip=n
          };
          t.getActivityCompleteness=function(e){
            var r=n.find(t.activitiesRead, {
              activity_id:e.id, activity_type:e.readType
            });
            if("exam_activity"===e.readType&&r){
              var o=t.activitiesRead.find((t=>{
                var r;
                return(null===(r=t.data)||void 0===r?void 0:r.referrer_exam_id)===e.id
              }));
              if(o&&"part"===r.completeness){
                var i;
                if("score"!==e.completion_criterion_key){
                  var s=(null==o?void 0:o.completeness)||r.completeness;
                  return C(s, e), s
                }
                if(u.activityHasCriterion(e)&&(e.criterion=u.getCriterion(e)), e.criterion&&(r.score>=e.criterion||((null===(i=o.data)||void 0===i?void 0:i.score)||0)>=e.criterion)){
                  var a="full";
                  return C(a, e), a
                }
              }
              return C(r.completeness, e), r.completeness
            }
            if(r){
              if(u.activityHasCriterion(e)&&(e.criterion=u.getCriterion(e)), e.criterion||"reviewed"===e.completion_criterion_key){
                var c=100===u.calculateCompletenessForHasCriterionActivity(r, e)?"full":"part";
                return C(c, e), c
              }
              if("virtual_experiment"===e.type){
                var l, d=null!==(l=r.data)&&void 0!==l&&l.completeness?"full":"none";
                return C(d, e), d
              }
              return"h5_courseware"===e.type&&"none"===e.completion_criterion_key&&"part"===r.completeness?(C("full", e), "full"):(C(r.completeness, e), r.completeness)
            }
            return C("none", e), "none"
          }, t.airHelper=new f(e, t), t.getActivityGreyIcon=u.getActivityGreyIcon, t.getActivityI18nMessage=u.getActivityI18nMessage, t.getActivityIcon=u.getActivityIcon, t.activityExpired=u.activityExpired, t.activityUpcoming=u.activityUpcoming, t.activityOBERelated=u.activityOBERelated, t.activityUrl=u.activityUrl, t.newActivityUrl=u.newActivityUrl, t.lessonDuration=u.lessonDuration, t.videoDuration=u.videoDuration, t.isActivityRead=u.isActivityRead, t.isFormativeTask=w, _.init()
        }
      ]
    }, 88595:(e, t, r)=>{
      r.d(t, {
        A:()=>s
      });
      r(714913), r(158649);
      var o=r(184743), n="YYYY.MM.DD HH:mm:ss", i="Asia/ShangHai";
      const s=function(){
        function e(){
        }
        return e.toLocalDateTime=function(e){
          return this.formatDatetime(e)
        }, e.toDefaultDateTime=function(e){
          return o.utc(e).tz(i)
        }, e.toUtcDateTime=function(e){
          return o.utc(e)
        }, e.isAfterByNow=function(e){
          return"string"==typeof e?new Date(e)>=new Date:e>=new Date
        }, e.isAfter=function(e, t){
          var r="string"==typeof e?new Date(e):e;
          return("string"==typeof t?new Date(t):t)>r
        }, e.diffByHours=function(e, t){
          return void 0===t&&(t=null), t?o(t).diff(o(e), "hours"):o.utc().diff(o(e), "hours")
        }, e.formatDatetime=function(e, t){
          return void 0===t&&(t=n), o(e).tz(i).format(t)
        }, e.formatUtcDatetime=function(e, t){
          return void 0===t&&(t=n), o.utc(e).tz(i).format(t)
        }, e.diffByMinutes=function(e, t){
          return void 0===t&&(t=null), t?o(t).diff(o(e), "minutes"):o.utc().diff(o(e), "minutes")
        }, e.diffBySeconds=function(e, t){
          return void 0===t&&(t=null), t?o(t).diff(o(e), "seconds"):o.utc().diff(o(e), "seconds")
        }, e.toYmd=function(e){
          return"string"==typeof e?o(e).format("YYYY.MM.DD"):o(e).tz(i).format("YYYY.MM.DD")
        }, e.toHm=function(e){
          return"string"==typeof e?o(e).format("HH:mm"):o(e).tz(i).format("HH:mm")
        }, e.toHms=function(e){
          return"string"==typeof e?o(e).format("HH:mm:ss"):o(e).tz(i).format("HH:mm:ss")
        }, e.pad=function(e){
          return e>10?e:"0".concat(e).slice(-2)
        }, e.secondsToHms=function(e){
          var t=Math.floor(e/60), r=e%60, o=Math.floor(t/60);
          return t%=60, "".concat(this.pad(o), ":").concat(this.pad(t), ":").concat(this.pad(r))
        }, e.millisecondToHms=function(e){
          var t=Math.floor(e/1e3);
          return this.secondsToHms(t)
        }, e.startOfToday=function(){
          return o().tz(i).startOf("day")
        }, e.endOfToday=function(){
          return o.tz(i).endOf("day")
        }, e.endOfDay=function(e){
          return o.tz(e, i).endOf("day").toDate()
        }, e.startOfWeek=function(){
          return o().tz(i).startOf("week")
        }, e.endOfWeek=function(){
          return o().tz(i).endOf("week")
        }, e.toLocalDate=function(e){
          return o(e).toDate()
        }, e.utcDateToLocal=function(e, t){
          return void 0===t&&(t="YYYY.MM.DD HH:mm"), o.utc(e).local().format(t)
        }, e.localDateFormat=function(e, t){
          return void 0===t&&(t="YYYY.MM.DD HH.mm"), o(e).format(t)
        }, e.todayRange=function(){
          return[
            this.startOfToday().toDate(), this.endOfToday().toDate()
          ]
        }, e.latestNDayRange=function(e){
          var t=this.endOfToday();
          return[
            this.endOfToday().subtract("days", e).add("seconds", 1).toDate(), t.toDate()
          ]
        }, e.timeDifferenceMsg=function(e, t){
          var r=o(e), n=o(t);
          if(n.diff(r, "seconds")<0)return"-1";
          var i=n.diff(r, "days"), s=n.diff(r, "hours")-24*i, a=n.diff(r, "minutes")-60*n.diff(r, "hours"), c="";
          return c+=i<=0?"":"".concat(i, "days"), c+=s<=0?"":"".concat(s, "hours"), i>0?c:c+="".concat(a<=0?1:a, "minutes")
        }, e.timestampFormatDatetime=function(e, t){
          return void 0===t&&(t="YYYY-MM-DD HH:mm:ss"), o.unix(e).format(t)
        }, e.getMinutesDiff=function(e, t){
          if(!e||!t)return 0;
          var r=e.split(":").map(Number), o=r[
            0
          ], n=r[
            1
          ], i=t.split(":").map(Number), s=60*o+n, a=60*i[
            0
          ]
          +i[
            1
          ];
          return Math.abs(a-s)
        }, e
      }
      ()
    }, 97090:(e, t, r)=>{
      var o=r(640241).PublishStatus;
      e.exports=[
        "$scope", "$rootScope", (e, t)=>{
          e.filterData=[
            {
              id:o.UNPUBLISH, name:e.$t("moduleAndSyllabus.unpublished"), selected:!1
            }, {
              id:o.PUBLISHED, name:e.$t("moduleAndSyllabus.published"), selected:!1
            }
          ], e.selection=[
          ], e.filterText=e.$t("moduleAndSyllabus.all"), e.selectChange=()=>{
            e.selection=e.filterData.filter((e=>e.selected)).map((e=>e.id));
            var r=e.selection.length;
            e.filterText=r?e.$t("moduleAndSyllabus.selected", [
              r
            ]):e.$t("moduleAndSyllabus.all"), t.publishStatusFilterSelection=e.selection
          }
        }
      ]
    }, 111172:(e, t, r)=>{
      var o=r(302543);
      r(219693), r(714913), r(640173), r(850785);
      var n=r(571478);
      e.exports=function(e, t, r){
        e.pageItems=[
        ];
        var i=t.search().pageIndex;
        e.pageIndex=i?o.parseInt(i):1;
        var s=n(e);
        e.ui||(e.ui={
        }), e.ui.searching=!1, e.pageSizeOptions=[
          10, 20, 30, 50, 100
        ], e.pageSize=e.pageSize?e.pageSize:e.pageSizeOptions[
          0
        ], e.updatePageSize=function(t){
          return e.pageSize=t, e.search()
        }, e.verifyPageIndexInput=function(){
          if(e.ui.pageIndexInput){
            var t=e.result.pages, r=String(e.ui.pageIndexInput).replace(/\./, "");
            return e.ui.pageIndexInput=isNaN(r)||r<1||r>t?e.pageIndex:parseInt(r)
          }
        };
        var a={
          changePage(n, i, s, a){
            var c=arguments.length>4&&void 0!==arguments[
              4
            ]
            ?arguments[
              4
            ]
            :[
            ];
            n||(n=1);
            return i(n, e.pageSize||e.pageSizeOptions[
              0
            ], (function(n){
              return e.result=n, function(r){
                if(e.pageIndex=r, e.ui.pageIndexInput=e.pageIndex, !e.ui.disableLocationSearch)t.search("pageIndex", r>=1?r:null)
              }
              (o.parseInt(n.page)), s(n), function(n){
                if(0!==n.length){
                  var i=t.path();
                  if(e.result[
                    r
                  ].length>0){
                    var s=e.result[
                      r
                    ]
                    [
                      0
                    ].id;
                    o.each(n, (function(e){
                      if(i.indexOf(e)>0)return t.path("/".concat(s).concat(e))
                    }))
                  }
                  return 0===e.result.total?t.path("/"):void 0
                }
              }
              (c)
            }), a)
          }, search(t, r, o, n){
            var i=arguments.length>4&&void 0!==arguments[
              4
            ]
            ?arguments[
              4
            ]
            :[
            ];
            e.ui.searching=!0;
            return s.show(), a.changePage(t, r, (function(e){
              return o(e), s.hide()
            }), (function(){
              return n(), s.hide()
            }), i)
          }, updatePaginationData:(e, t)=>(t.length>parseInt(e.page_size)?e.pages++:1===t.length?(e.start++, e.end++, e.pages++, e.page++):e.end++, e.total++), buildPaginationResult(e, t, r){
            var o, n=arguments.length>3&&void 0!==arguments[
              3
            ]
            ?arguments[
              3
            ]
            :20, i=e.length;
            if(0===i)(o={
              start:0, end:0, total:0, pages:0, page:0, page_size:n
            })[
              r
            ]
            =e;
            else{
              var s=Math.ceil(i/n);
              t>s&&(t=s);
              var a=n*(t-1), c=Math.min(n*t, i), u=e.slice(a, c);
              (o={
                start:a+1, end:c, total:i, pages:s, page:t, page_size:n
              })[
                r
              ]
              =u
            }
            return o
          }, changePageAtFrontEnd(t, r, n){
            var i=arguments.length>3&&void 0!==arguments[
              3
            ]
            ?arguments[
              3
            ]
            :"data";
            t||(t=1);
            var s=e.pageSize||e.pageSizeOptions[
              0
            ], c=a.buildPaginationResult(r, t, i, s);
            return e.result=c, e.pageIndex=o.parseInt(c.page), e.ui.pageIndexInput=e.pageIndex, n(c)
          }
        };
        return a
      }
    }, 121087:(e, t, r)=>{
      r.d(t, {
        Ay:()=>s, Hl:()=>i.U, Nz:()=>n.N
      });
      var o=r(594554), n=(r(220463), r(504078), r(52823)), i=r(249077);
      const s=o.A
    }, 138566:(e, t, r)=>{
      var o=r(248124), n=r(302543);
      r(219693), r(700533), r(714913), r(169218), r(269193), r(640173), r(850785), r(658379);
      var i=r(592207);
      function s(e, t){
        var r=Object.keys(e);
        if(Object.getOwnPropertySymbols){
          var o=Object.getOwnPropertySymbols(e);
          t&&(o=o.filter((function(t){
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, o)
        }
        return r
      }
      function a(e, t, r){
        return t in e?Object.defineProperty(e, t, {
          value:r, enumerable:!0, configurable:!0, writable:!0
        }):e[
          t
        ]
        =r, e
      }
      function c(e, t, r, o, n, i, s){
        try{
          var a=e[
            i
          ]
          (s), c=a.value
        }
        catch(e){
          return void r(e)
        }
        a.done?t(c):Promise.resolve(c).then(o, n)
      }
      function u(e){
        return function(){
          var t=this, r=arguments;
          return new Promise((function(o, n){
            var i=e.apply(t, r);
            function s(e){
              c(i, o, n, s, a, "next", e)
            }
            function a(e){
              c(i, o, n, s, a, "throw", e)
            }
            s(void 0)
          }))
        }
      }
      r(207452);
      var l=r(793110).default, d=r(181769), p=d.canEditActivity, v=d.hasEditPermissionForBlueprint, f=r(966491), m=r(181769).scoreRules, y=r(5782).default, h=r(790679).A;
      e.exports=[
        "$scope", "$rootScope", "$window", "$location", "$routeParams", "$timeout", "modelHelper", "$http", "toastr", "ExamHelper", "examRepository", "activityRepository", "$filter", "$compile", "publishHelper", "fileSelectModel", function(e, t, c, d, g, b, _, w, S, x, C, A, k, E, O, I){
          Promise.all([
            r.e(28492), r.e(3564), r.e(821), r.e(64288)
          ]).then(r.bind(r, 964288)), -1!==d.path().indexOf("/score-list")?e.tabView=[
            "exam-paged-student-stats", "exam-score-stats", "exam-subject-stats"
          ].includes(g.view)?g.view:"exam-student-stats":e.tabView="exam-basic-info", e.scoreRules=m(), e.activityReferrer=window.sessionStorage.getItem("activityReferrer"), e.examineesWithSubmission=[
          ], e.groupsWithSubmission=[
          ], e.showInvigilationPopup=!1, e.showExamTips=!1, e.showMakeupExamTips=!1, e.showExamEditNotice=!1, e.batchDeleteItems={
            batchOperation:!1, selectedSubjectCount:0
          }, e.loadComponents=()=>{
            Promise.all([
              r.e(74722), r.e(15471), r.e(10035), r.e(26541)
            ]).then(r.bind(r, 207612))
          }, e.canShowOperations=e=>p(e), e.canEditActivitySelf=e=>v(e), e.canEditExamSelf=e=>!!v(e)||e.can_edit_subject_in_blueprint_sub_exam, e.canEditMakeupExamSelf=e=>!!v(e)||e.can_edit_subject_in_blueprint_sub_makeup_exam, e.uploadWithName=function(e){
            return e.name
          }, e.manageMakeUpExamSubjects=function(){
            w.post("/api/exams/".concat(e.exam.id, "/makeup-exam-paper")).success((function(e){
              c.location.href="/exam/".concat(e.id, "/subjects")
            })).error(S.decorateError((function(){
            })))
          }, e.getSubjectAnswerState=function(e){
            var t=arguments.length>1&&void 0!==arguments[
              1
            ]
            ?arguments[
              1
            ]
            :null;
            return x.getSubjectAnswerState(e, t)
          }, e.isAnswerOnly=function(e){
            return!(e.answeredCorrectly&&e.answer_explanation||!e.answeredCorrectly&&e.wrong_explanation)
          }, e.submitAnswer=function(e, r){
            var o=arguments.length>2&&void 0!==arguments[
              2
            ]
            ?arguments[
              2
            ]
            :"course", n=arguments.length>3?arguments[
              3
            ]
            :void 0, i=arguments.length>4?arguments[
              4
            ]
            :void 0;
            return t.$broadcast("submitAnswer", {
              teachingUnitId:e, examId:r, teachingUnitType:o, isSystemSubmit:n, reason:i
            })
          }, e.redirectByUrl=()=>window.location.replace(e.goToUrl), e.$on("onBackToSpecificUrl", (()=>e.redirectByUrl())), e.hasUnsavedSubjects=function(t, r){
            return e.goToUrl=t, e.confirmTitle=r, "/"===d.path()||d.path().indexOf("editingId")>-1?e.$broadcast("checkUnsavedSubject"):e.redirectByUrl()
          }, e.closePopup=function(){
            return o("#exit-subjects-confirmation-popup").foundation("reveal", "close"), !1
          };
          var T=(e, t)=>{
            e&&(e.published=t.published, "exam"===e.type&&n.isEmpty(t.published)&&(e.publish_time=""))
          };
          e.checkActivity=function(){
            var r=u(i.mark((function r(o){
              var n;
              return i.wrap((function(r){
                for(;
                ;
                )switch(r.prev=r.next){
                  case 0:return n=[
                    "".concat(o.type, "-").concat(o.id)
                  ], r.next=3, O.publishActivies(e.course.id, n, {
                    type:!o.published
                  }, !1);
                  case 3:o.published=!o.published, T(e.currentActivity, o), T(e.activity, o), T(e.exam, o), t.$emit("activity-publish-changed", {
                    type:o.published
                  });
                  case 8:case"end":return r.stop()
                }
              }), r)
            })));
            return function(e){
              return r.apply(this, arguments)
            }
          }
          (), e.cancelPublish=r(370102).M, e.editExam=function(r, o){
            var n, i;
            return"module"===o.referrer_type&&(n=o.referrer_id), "syllabus"===o.referrer_type&&(i=o.referrer_id), _.editActivity(t, e, r, n, i, b, o)
          }, e.updateFinalScore=function(e){
            var t=null;
            if(e.score_id)t=w.put("/api/exam-scores/".concat(e.score_id), {
              final_score:e.final_score
            });
            else{
              var r={
                exam_id:e.exam_id, org_id:e.org_id, examinee_id:e.id, final_score:e.final_score
              };
              t=w.post("/api/exam-scores", r)
            }
            e.is_resubmitted=!1;
            return t.success(S.decorateSuccess((function(t){
              return t.score_id&&(e.score_id=t.score_id), statistics.track({
                activity_type:"exam", activity_id:e.exam_id, action:statistics.enums.Action.give_score, mode:statistics.enums.Mode.normal, channel:statistics.enums.Channel.web, target_info:{
                  id:e.id, type:"personal", is_student:!0
                }
              })
            }))).error(S.decorateError((function(){
            })))
          }, e.autoSaveStatusComment=function(t){
            var r={
              student_id:t.id, status_comment:t.status_comment
            };
            return w.put("/api/exam-scores/".concat(e.examId, "/status-comment"), r).success(S.decorateSuccess((function(e){
              if(e.status_comment)return t.status_comment=e.status_comment
            }))).error(S.decorateError((function(){
            })))
          }, e.addSubjectAtHeader=t=>e.$broadcast("addSubject", t), e.setUIEditSubjects=()=>e.examUI={
            editSubjects:!0
          }, e.calUnsavedSubjects=()=>e.$broadcast("calUnsavedSubjects"), e.storageSubmissions=()=>e.$broadcast("storageSubmissions"), e.confirmSubmissions=()=>e.$broadcast("confirmSubmissions"), e.closeWarning=function(){
            return o(".select_subjects_randomly_rule_warning").addClass("hide"), !0
          }, e.lastOne=function(){
            var t, r;
            if(e.exam.submit_by_group){
              if((null===(r=e.groupsWithSubmission[
                0
              ])||void 0===r?void 0:r.id)===e.currentGroup.id)return"unclickable"
            }
            else if((null===(t=e.examineesWithSubmission[
              0
            ])||void 0===t?void 0:t.id)===e.currentExaminee.id)return"unclickable";
            return"clickable"
          }, e.nextOne=function(){
            var t, r;
            if(e.exam.submit_by_group){
              if((null===(r=e.groupsWithSubmission.slice().pop())||void 0===r?void 0:r.id)===e.currentGroup.id)return"unclickable"
            }
            else if((null===(t=e.examineesWithSubmission.slice().pop())||void 0===t?void 0:t.id)===e.currentExaminee.id)return"unclickable";
            return"clickable"
          }, e.goToLastOne=function(){
            if("clickable"===e.lastOne()){
              if(e.exam.submit_by_group){
                var t=e.groupsWithSubmission.findIndex((t=>t.id===e.currentGroup.id))-1;
                return e.currentOne.id=e.groupsWithSubmission[
                  t
                ].id
              }
              var r=e.examineesWithSubmission.findIndex((t=>e.currentExaminee.id===t.id))-1;
              return e.currentOne.id=e.examineesWithSubmission[
                r
              ].id
            }
          }, e.goToNextOne=function(){
            if("clickable"===e.nextOne()){
              if(e.exam.submit_by_group){
                var t=e.groupsWithSubmission.findIndex((t=>t.id===e.currentGroup.id))+1;
                return e.currentOne.id=e.groupsWithSubmission[
                  t
                ].id
              }
              var r=e.examineesWithSubmission.findIndex((t=>e.currentExaminee.id===t.id))+1;
              return e.currentOne.id=e.examineesWithSubmission[
                r
              ].id
            }
          }, e.refreshSubmissionCount=function(){
            C.loadExamSubmissionCountStatus(e.exam.id).then((function(t){
              e.allSubmissionCount=t.all_submission_count, e.submissionHasMarkedCount=t.submission_has_marked_count
            }))
          }, e.$watch("currentExaminee.id", (function(t, r){
            if(parseInt(t)!==parseInt(r)&&t&&!r){
              if(0===e.examineesWithSubmission.length){
                var o, n=null===(o=d.search())||void 0===o?void 0:o.conditions;
                C.loadExamExamineeHasSubmission(e.examId, n).then((function(r){
                  e.examineesWithSubmission=r, e.currentOne={
                    id:t
                  }
                }))
              }
              else e.currentOne={
                id:t
              };
              return e.refreshSubmissionCount()
            }
          })), e.$watch("currentGroup.id", (function(t, r){
            if(parseInt(t)!==parseInt(r)&&t&&!r)return 0===e.groupsWithSubmission.length?C.loadExamGroupsWithExamineeHasSubmission(e.examId).then((function(r){
              e.groupsWithSubmission=r, e.currentOne={
                id:t
              }
            })):e.currentOne={
              id:t
            }, e.refreshSubmissionCount()
          })), e.$watch("currentOne.id", (function(t, r){
            if(parseInt(t)!==parseInt(r)&&t&&r){
              if(e.exam.submit_by_group){
                var o=n.find(e.groupsWithSubmission, (e=>e.id===parseInt(t)));
                return d.path("/examinee/".concat(o.examinee_ids[
                  0
                ]))
              }
              return d.path("/examinee/".concat(t))
            }
          })), e.invigilateButtonTips=function(e, t){
            return e?e.submit_by_group?t.group:e.is_practice_mode?t.practice:"":""
          }, e.invigilationDisabled=function(t){
            return!e.exam||!e.exam.enable_invigilation||(e.exam.is_practice_mode||e.exam.submit_by_group)
          }, e.trace=t=>{
            var r={
              activity_id:e.activity.id, activity_type:e.activity.type, mode:statistics.enums.Mode.normal, channel:statistics.enums.Channel.web, action:t
            };
            statistics.track(r)
          }, e.changeTab=(t, r)=>{
            e.tabView=t, r&&e.trace(r)
          };
          var $=(e, t)=>{
            var r;
            return e.id!==t&&(null===(r=e.makeup_exam_paper)||void 0===r?void 0:r.id)===t
          };
          e.showImportSubjectPopup=!1, e.canImport=!1, document.addEventListener("__import-exam-subject-popup-visible", (t=>{
            var r=t.detail.show, o=document.querySelector("import-exam-subject-popup");
            o&&o.show!==r&&(o.show=r, e.showImportSubjectPopup=r)
          }));
          var P=function(){
            var r=g.examId||o("#examId").val();
            if(r)return e.examId=parseInt(r), t.limitedModify=!0, C.initExam(e.examId).then((function(o){
              if(e.exam=o, A.initPublishInfo(e, e.exam), $(o, Number(r))){
                var n=o.make_up_record.makeup_exam, i=n.subjects_rule;
                if(e.exam.exam_subjects_rule=function(e){
                  for(var t=1;
                  t<arguments.length;
                  t++){
                    var r=null!=arguments[
                      t
                    ]
                    ?arguments[
                      t
                    ]
                    :{
                    };
                    t%2?s(Object(r), !0).forEach((function(t){
                      a(e, t, r[
                        t
                      ])
                    })):Object.getOwnPropertyDescriptors?Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){
                      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                  }
                  return e
                }
                ({
                }, e.exam.subjects_rule), Object.assign(e.exam.subjects_rule, i), e.exam.default_options_layout=n.default_options_layout, e.exam.isMakeupExam=!0, (e=>{
                  var t, r=null===(t=e.make_up_record)||void 0===t?void 0:t.makeup_exam;
                  if(!r)return S.error();
                  var o=e.subjects_count, n=r.subjects_count;
                  return o>0&&0===n
                })(o))if((e=>{
                  var t, r, o=e.exam_subjects_rule, n=null===(t=e.make_up_record)||void 0===t||null===(r=t.makeup_exam)||void 0===r?void 0:r.subjects_rule;
                  return o.select_subjects_randomly===n.select_subjects_randomly
                })(o)){
                  var c=document.querySelector("import-exam-subject-popup");
                  c&&(e.showImportSubjectPopup=!0, c.show=e.showImportSubjectPopup)
                }
                else S.info(e.$t("importSubject.canNot"), {
                  timeOut:4e3
                })
              }
              var u;
              e.showExamEditNotice=!(null===(u=e.examUI)||void 0===u||!u.editSubjects||t.progressUi&&(!t.progressUi||t.progressUi.inPreview))&&(e.exam.isMakeupExam?e.exam.makeup_exam_start_notice:e.exam.is_started), D(), z(), e.selectRandomlyExam=!!e.examId&&e.exam.subjects_rule.select_subjects_randomly, e.$emit("activityLoaded", o), e.inMakeUpExam=$(e.exam, e.examId), t.limitedModify=e.exam.limited_modify
            }))
          }, M=(e, t)=>{
            var r, o=null!==(r=t.subjects_rule)&&void 0!==r?r:{
            };
            if(!o.select_subjects_randomly)return!1;
            if(!o.select_subjects_randomly_rule)return!0;
            var n={
            };
            return Object.keys(o.select_subjects_randomly_rule).forEach((function(e){
              n=Object.assign(n, o.select_subjects_randomly_rule[
                e
              ])
            })), !function(e, t){
              if(!t)return!1;
              for(var r=0;
              r<e.length;
              r++){
                var o=e[
                  r
                ].type;
                if("analysis"!==o){
                  if(!t[
                    o
                  ])return!1
                }
                else{
                  var n=e[
                    r
                  ].sub_subjects;
                  if(!n)continue;
                  n.forEach((e=>{
                    if(!t[
                      e.type
                    ])return!1
                  }))
                }
              }
              return!0
            }
            (e, n)
          }, j=t=>{
            var r, o, n;
            if(e.exam.is_practice_mode)return!1;
            var i=null===(r=e.exam.makeup_exam_paper)||void 0===r?void 0:r.id, s=null!==(o=null===(n=e.exam.make_up_record)||void 0===n?void 0:n.makeup_exam)&&void 0!==o?o:{
            };
            return!!i&&M(t, s)
          };
          e.$on("makeup-rule-change", (t=>{
            e.showMakeupExamTips=j(e.makeupExamSubjects)
          }));
          var D=function(){
            var t, r;
            e.exam_or_makeup_exam=e.examId==(null===(t=e.exam.make_up_record)||void 0===t||null===(r=t.makeup_exam)||void 0===r?void 0:r.id)?e.exam.make_up_record.makeup_exam:e.exam, e.exam.makeup_exam_paper&&C.initExamSubjectsSummary(e.exam.makeup_exam_paper.id).then((function(t){
              return e.showMakeupExamTips=j(t), e.makeupExamSubjects=t, e.makeupExamGroupedSubjects=x.groupSubjects(t), e.makeupExamTotalScore=n.reduce(t, ((e, t)=>e.plus(new l(t.point))), new l(0))
            }))
          }, z=function(){
            var t=u(i.mark((function t(){
              var r, n;
              return i.wrap((function(t){
                for(;
                ;
                )switch(t.prev=t.next){
                  case 0:if(r=g.examId||o("#examId").val(), !$(e.exam, r)){
                    t.next=3;
                    break
                  }
                  return t.abrupt("return");
                  case 3:return t.next=5, C.initExamAllSubjects(r);
                  case 5:n=t.sent, e.showExamTips=M(n, e.exam), e.examSubjects=n, e.totalScore=n.reduce(((e, t)=>e.plus(new l(t.point))), new l(0));
                  case 9:case"end":return t.stop()
                }
              }), t)
            })));
            return function(){
              return t.apply(this, arguments)
            }
          }
          ();
          if(e.openBatchOperation=()=>{
            e.batchDeleteItems.batchOperation=!0
          }, e.closeBatchOperation=()=>{
            e.batchDeleteItems.batchOperation=!1, e.$broadcast("close-batch-operation")
          }, e.batchDelete=()=>{
            e.$broadcast("batch-delete")
          }, e.select2OptionsWithUserNo={
            containerCssClass:"select2-user_no", dropdownCssClass:"select2-user_no-drop", formatResult(t){
              var r=o(t.element).data("student"), n="<span class='name truncate-text' tipsy-literal='".concat(k("displayName")(r), "' ng-attr-tipsy-ellipsis='yes' ng-attr-tipsy-ellipsis-check-method='width'>").concat(k("displayName")(r), "</span>"), i="<span class='user_no truncate-text' tipsy-literal='".concat(r.user_no, "' ng-attr-tipsy-ellipsis='yes' ng-attr-tipsy-ellipsis-check-method='width'>").concat(r.user_no, "</span>");
              return E("<div class='result-wrapper'>".concat(n).concat("<span class='gap'></span>").concat(i, "</div>"))(e)
            }, formatSelection(e){
              return this.formatResult(e)
            }
          }, e.startInvigilate=function(){
            var t=arguments.length>0&&void 0!==arguments[
              0
            ]
            &&arguments[
              0
            ];
            e.exam.is_eztest?window.open(e.exam.invigilation_url, "_blank"):e.invigilationDisabled()||(!0===t?(window.open("/exam/".concat(e.exam.id, "/invigilate"), "_blank"), e.closeInvigilationPopup()):e.startInvigilate(!0))
          }, e.closeInvigilationPopup=function(){
            e.showInvigilationPopup=!1
          }, t.$on("refreshExamSubjectRules", ((e, t)=>{
            C.cleardeferredExam(t), P()
          })), P(), localStorage.getItem("otherDevicesAnsweringTime")){
            var R=localStorage.getItem("otherDevicesAnsweringTime");
            t.otherDevicesAnsweringTime=f.formatDatetime(R), o("#active-on-other-devices-popup").foundation("reveal", "open"), localStorage.removeItem("otherDevicesAnsweringTime")
          }
          e.aiGenerateSubject=u(i.mark((function t(){
            var r;
            return i.wrap((function(t){
              for(;
              ;
              )switch(t.prev=t.next){
                case 0:return t.next=2, C.initExam(e.examId);
                case 2:r=t.sent, y(h, {
                  context:{
                    targetId:r.id, targetType:r.type, isLearningActivity:!0, courseId:e.courseId, moduleId:r.module_id
                  }, airMaxTextLength:Number(e.airMaxTextLength), destroyComponent:!0
                });
                case 4:case"end":return t.stop()
              }
            }), t)
          })))
        }
      ]
    }, 150296:(e, t, r)=>{
      var o=r(248124), n=r(302543), i=r(962893).default;
      r(215195), r(418665), r(269193), r(445708), r(43148), r(658379), r(14602);
      var s=r(592207);
      function a(e, t){
        return function(e){
          if(Array.isArray(e))return e
        }
        (e)||function(e, t){
          if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;
          var r=[
          ], o=!0, n=!1, i=void 0;
          try{
            for(var s, a=e[
              Symbol.iterator
            ]
            ();
            !(o=(s=a.next()).done)&&(r.push(s.value), !t||r.length!==t);
            o=!0);
          }
          catch(e){
            n=!0, i=e
          }
          finally{
            try{
              o||null==a.return||a.return()
            }
            finally{
              if(n)throw i
            }
          }
          return r
        }
        (e, t)||function(e, t){
          if(!e)return;
          if("string"==typeof e)return c(e, t);
          var r=Object.prototype.toString.call(e).slice(8, -1);
          "Object"===r&&e.constructor&&(r=e.constructor.name);
          if("Map"===r||"Set"===r)return Array.from(e);
          if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(e, t)
        }
        (e, t)||function(){
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        ()
      }
      function c(e, t){
        (null==t||t>e.length)&&(t=e.length);
        for(var r=0, o=new Array(t);
        r<t;
        r++)o[
          r
        ]
        =e[
          r
        ];
        return o
      }
      function u(e, t, r, o, n, i, s){
        try{
          var a=e[
            i
          ]
          (s), c=a.value
        }
        catch(e){
          return void r(e)
        }
        a.done?t(c):Promise.resolve(c).then(o, n)
      }
      function l(e){
        return function(){
          var t=this, r=arguments;
          return new Promise((function(o, n){
            var i=e.apply(t, r);
            function s(e){
              u(i, o, n, s, a, "next", e)
            }
            function a(e){
              u(i, o, n, s, a, "throw", e)
            }
            s(void 0)
          }))
        }
      }
      r(207452);
      var d=r(909308), p=r(951708).getActivityAiQuizzes;
      e.exports=[
        "$rootScope", "$scope", "$q", "activityRepository", "$timeout", "modelHelper", "revealModalParams", "$window", function(e, t, r, c, u, v, f, m){
          var y;
          e.ui=e.ui||{
          }, e.ui.courseInitiated=!1, t.expandedMap={
          }, t.courseId=o("#courseId").val();
          var h=function(){
            var e=t._course, r=e.getActivitiesByType("homework");
            if(0!==Object.keys(r).length)return c.loadHomeworkSubmissionStatuses(e.id).then((e=>n.each(e.homework_activities, (function(e){
              if(r[
                e.id
              ])return r[
                e.id
              ].status_code=e.status_code, r[
                e.id
              ].score=(t=e).is_announce_score_time_passed&&t.score?t.score:"-";
              var t
            }))))
          };
          e.courseDefer=r.defer(), t.createActivity=(r, o, n)=>v.createActivity(e, t, t.course, o, n, u, r, !0), t.createHomeworkWithDefaultValues=(r, o)=>v.createActivity(e, t, t.course, void 0, void 0, u, r, !0, o), t.editActivity=(r, o, n)=>{
            v.editActivity(e, t, t.course, o, n, u, r)
          }, t.materialFilesToggle=function(){
            var r=l(s.mark((function r(o){
              var n;
              return s.wrap((function(r){
                for(;
                ;
                )switch(r.prev=r.next){
                  case 0:return e.aiQuizCount=0, r.next=3, p(o.id);
                  case 3:(n=r.sent)&&(e.aiQuizCount=n.length, o.uploads.forEach((e=>{
                    var t=n.find((t=>t.uploadReferenceId===e.reference_id));
                    e.aiQuiz=t||null
                  }))), t.expandedMap[
                    o.id
                  ]
                  =!t.expandedMap[
                    o.id
                  ], t.$apply();
                  case 7:case"end":return r.stop()
                }
              }), r)
            })));
            return function(e){
              return r.apply(this, arguments)
            }
          }
          (), t.editClassroom=r=>v.editActivity(e, t, t.course, r.module_id, r.syllabus_id, u, r), t.canViewKnowledgeNodeReference=()=>!!t.isInstructorView||"published"===t.course.knowledge_graph_publish_type;
          var g=(e, t, r)=>n.each(e, (function(e){
            if(e.submitted=t.includes(e.id), e.hasSubmitted=t.includes(e.id), e.submitted&&r){
              var o=n.find(r, {
                activity_id:e.id
              });
              return e.submitted=e.submitted&&!e.announce_score_time, e.unscored=e.announce_score_time&&(!e.is_announce_score_time_passed||!o), e.scored=e.announce_score_time&&e.is_announce_score_time_passed&&o, e.scored?e.score=o.score:void 0
            }
          })), b=new Set, _=function(){
            var e=l(s.mark((function e(){
              var r, o, n, i, u, l, d, p, v, f;
              return s.wrap((function(e){
                for(;
                ;
                )switch(e.prev=e.next){
                  case 0:if(r=[
                    ...b
                  ], b.clear(), 0!==(o=c.getNotLoadedModuleId(r)).length){
                    e.next=5;
                    break
                  }
                  return e.abrupt("return");
                  case 5:return o.forEach((e=>t._course.loadingModule(e, !0))), e.next=8, c.getActivitiesByModuleIds(t.courseId, r, (s=void 0, s=[
                    "learning_activities", "exams", "classrooms"
                  ], t.enableLiveStreaming&&s.push("live_records"), t.allowInteractionInActivity&&s.push("interactions"), t.allowRollcallView&&s.push("rollcalls"), s.join(",")), !1);
                  case 8:n=e.sent, c.setLoadedModuleId(o), i=n.data, u=i.classrooms, l=i.exams, d=i.learning_activities, p=i.interactions, v=i.live_records, f=i.rollcalls, c.fillClassroomsInModuleAndSyllabus(t._course, u), c.fillExamsInModuleAndSyllabus(t._course, l), c.fillActivitiesInModuleAndSyllabus(t._course, d), p&&c.fillInClassInteractionsInModule(t._course, p), f&&c.fillRollCallInModule(t._course, f), v&&c.fillLiveRecordsInModule(t._course, v), t.isInstructorView||h(), t.isInstructorView||c.initExamsSubmitted(t.course.id).then((function(){
                    var e=Array.from(arguments.length<=0?void 0:arguments[
                      0
                    ]), r=a(e, 2), o=r[
                      0
                    ], n=r[
                      1
                    ];
                    if(t.examsSubmitted=o, o)return g(l, o, n)
                  })), o.forEach((e=>t._course.loadingModule(e, !1)));
                  case 20:case"end":return e.stop()
                }
                var s
              }), e)
            })));
            return function(){
              return e.apply(this, arguments)
            }
          }
          (), w=n.debounce(_, 100);
          null!==(y=window.featureToggles)&&void 0!==y&&y.lazyLoadCourseSection&&t.$on("expandableContentExpanded", function(){
            var e=l(s.mark((function e(t, r){
              var o;
              return s.wrap((function(e){
                for(;
                ;
                )switch(e.prev=e.next){
                  case 0:if(r.syllabuses&&!r.syllabus_id){
                    e.next=2;
                    break
                  }
                  return e.abrupt("return");
                  case 2:if(o=r.id){
                    e.next=5;
                    break
                  }
                  return e.abrupt("return");
                  case 5:b.add(o), w();
                  case 7:case"end":return e.stop()
                }
              }), e)
            })));
            return function(t, r){
              return e.apply(this, arguments)
            }
          }
          ());
          return t.activityOBERelated=v.activityOBERelated, m.addEventListener("refresh-all-items-sub-count", (e=>{
            var r=e=>{
              n.forEach(e.items, (e=>{
                var r=n.find(t.course.activities, (t=>t.id===e.id&&t.type===e.type));
                r&&(r.sub_activity_count=e.count)
              }))
            };
            e.detail.refreshAllActivities?c.getAllSubActivitiesCount(t.course.id, r):c.getSubItemsCount(t.course.id, e.detail.activities, r)
          })), m.addEventListener("refresh-item-sub-count", (e=>{
            var r=n.find(t.course.activities, (t=>t.id===e.detail.id&&t.type===e.detail.type));
            r&&(r.sub_activity_count=e.detail.count)
          })), d(t, c, f, m), c.initCourseAndModules().then((function(){
            var o, n, s, l, d, p;
            if(t.course=c.course, null!==(o=t.course.course_attributes)&&void 0!==o&&null!==(n=o.data)&&void 0!==n&&n.is_combining&&10!==t.course.course_type&&null!==(s=window.globalData)&&void 0!==s&&null!==(l=s.course)&&void 0!==l&&l.isInstructorView&&i.prototype.$Modal.info({
              title:t.$t("combineCourse.courseMerging"), content:t.$t("combineCourse.courseMergingTip"), okText:t.$t("gotIt"), onOk:()=>{
                m.location.href="/user/courses"
              }
            }), t._course=c._course, e.courseDefer.resolve(t._course), e.$broadcast("loadCourseDataFinished", {
              courseId:null===(d=t.course)||void 0===d?void 0:d.id
            }), c.initActivitiesReadForUser(t.course.id).then((function(e){
              t.activitiesRead=e
            })), null!==(p=window.featureToggles)&&void 0!==p&&p.lazyLoadCourseSection)u((()=>e.ui.courseInitiated=!0));
            else{
              var v=[
                c.initActivitiesForActivityList(t._course), c.initClassroomsForActivityList(t._course), c.initExamsForActivityList(t._course)
              ];
              t.enableLiveStreaming?v.push(c.initLiveRecordsForActivityList(t._course)):v.push(Promise.resolve([
              ])), t.allowInteractionInActivity?v.push(c.initInClassInteractionsForActivityList(t._course.id)):v.push(Promise.resolve([
              ])), t.allowRollcallView?v.push(c.initRollCallsForActivityList(t._course.id)):v.push(Promise.resolve([
              ])), t.allowAskQuestion?v.push(c.initAskQuestionForActivityList(t._course)):v.push(Promise.resolve([
              ])), r.all(v).then((function(){
                var r=Array.from(arguments.length<=0?void 0:arguments[
                  0
                ]), o=a(r, 7), n=(o[
                  0
                ], o[
                  1
                ], o[
                  2
                ]), i=(o[
                  3
                ], o[
                  4
                ]), s=o[
                  5
                ];
                return o[
                  6
                ], t.isInstructorView||h(), t.isInstructorView||c.initExamsSubmitted(t.course.id).then((function(){
                  var e=Array.from(arguments.length<=0?void 0:arguments[
                    0
                  ]), r=a(e, 2), o=r[
                    0
                  ], i=r[
                    1
                  ];
                  if(t.examsSubmitted=o, o)return g(n, o, i)
                })), c.fillInClassInteractionsInModule(t._course, i), c.fillRollCallInModule(t._course, s), u((()=>e.ui.courseInitiated=!0))
              }))
            }
          }))
        }
      ]
    }, 166403:(e, t, r)=>{
      var o=r(248124);
      r(909308), r(951708).getActivityAiQuizzes;
      e.exports=[
        "$rootScope", "$scope", "$timeout", "$window", function(e, t, r, n){
          e.$on("loadCourseDataFinished", ((e, r)=>{
            var n, i;
            null!==(n=window.featureToggles)&&void 0!==n&&n.relationCourses&&null!==(i=t.course)&&void 0!==i&&i.is_blocked&&o("#course-blocked-confirmation-popup").foundation("reveal", "open")
          }))
        }
      ]
    }, 180287:(e, t, r)=>{
      r.d(t, {
        A:()=>o
      });
      r(418665), r(678636), r(658379), r(14602);
      const o=function(e){
        var t={
        };
        return e.keys().forEach((function(r){
          var o=e(r);
          return t[
            r.match(/[
              \w-
            ]
            +/)[
              0
            ]
          ]
          =o.default||o
        })), t
      }
    }, 204893:(e, t, r)=>{
      var o=r(302543), n=r(795093), i=r(248124), s=r(756029);
      r(418665), r(714913), r(658379), r(14602);
      var a=r(571478);
      e.exports=[
        "$scope", "activityRepository", "$rootScope", "$timeout", "$document", "moduleRepository", "syllabusApi", function(e, t, r, c, u, l, d){
          var p, v=a(e);
          e.teachingWeekList=[
            ...Array(21).keys()
          ].slice(1), e.teachingWeekOptions=[
          ], o.forEach(e.teachingWeekList, (t=>{
            e.teachingWeekOptions.push({
              value:t, description:e.$t("syllabus.teachingWeek.optionsFormat", [
                t
              ])
            })
          }));
          var f=(e, t)=>{
            var r=n(e).diff(t, "d");
            if(!(r<0)){
              var o=r/7;
              return o%1==0?o+1:o-o%1+1
            }
          }, m=(e, t)=>{
            var r, o, i=(r=n(t), o=r.day(), r.clone().subtract(o, "d"));
            return f(e, i)
          }, y=(e, t)=>{
            var r, o, i=(r=n(t), 0==(o=r.day())?r.clone().subtract(6, "d"):r.clone().subtract(o-1, "d"));
            return f(e, i)
          };
          e.syllabusDateChange=(t, r)=>{
            var o={
              startDate:f, Sunday:m, Monday:y
            };
            if(o.hasOwnProperty(r)||(r="Sunday"), t){
              var n=o[
                r
              ]
              (e.syllabus.date, e.course.start_date);
              e.syllabus.teaching_week=n<=20?n:void 0
            }
          }, u.on("open.fndtn.reveal", "#edit-syllabus", (()=>c((function(){
            if(e.syllabus=e.copiedSyllabus, !e.syllabus)return r.courseDefer.promise.then(h)
          })))), u.on("close.fndtn.reveal", "#edit-syllabus", (()=>c((function(){
            return delete e.$parent.copiedSyllabus, delete e.$parent.copiedModule, delete e.errors
          })))), u.on("select2-before-create-new", (function(e, t, r){
            return l.addModule({
              name:t
            }, (e=>c((()=>r(e.id)))), (function(){
            }))
          }));
          var h=function(){
            var t=e.copiedModule?e.copiedModule.id:e._course.defaultModuleId();
            if(t)return e.syllabus={
              module_id:t
            }
          };
          e.save=function(){
            return e.syllabus&&e.syllabus.id?p():g()
          };
          var g=function(){
            return v.show(), d.createSyllabus(e.syllabus, (function(t){
              return e._course.addSyllabus(t), v.hide(), c((function(){
                i("#edit-syllabus").foundation("reveal", "close");
                var e=s.element(document.getElementById("syllabus-".concat(t.id)));
                return u.scrollToElement(e, 53, 500), c((()=>u.highlight(e)), 500)
              }))
            }), (function(t, r){
              return 400===r&&(e.errors=t.errors), v.hide()
            }))
          };
          p=function(){
            v.show(), d.updateSyllabus(e.syllabus, (function(r){
              return r.allow_resort=e.syllabus.allow_resort, r.allow_update=e.syllabus.allow_update, r.allow_delete=e.syllabus.allow_delete, e._course.updateSyllabus(r, e.syllabus.activities), e.allowExamEdit&&t.initExamsForActivityList(e._course), t.initClassroomsForActivityList(e._course), v.hide(), c((()=>i("#edit-syllabus").foundation("reveal", "close")))
            }), (function(t, r){
              return 400===r&&(e.errors=t.errors), v.hide()
            }))
          }
        }
      ]
    }, 205057:(e, t, r)=>{
      r.d(t, {
        $J:()=>s, GB:()=>a, c$:()=>c
      });
      r(169218);
      var o=r(152229), n=function(e, t, r, o){
        var n, i=arguments.length, s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t, r):o;
        if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e, t, r, o);
        else for(var a=e.length-1;
        a>=0;
        a--)(n=e[
          a
        ])&&(s=(i<3?n(s):i>3?n(t, r, s):n(t, r))||s);
        return i>3&&s&&Object.defineProperty(t, r, s), s
      }, i=function(){
        this.creditRemaining=0, this.status=""
      }, s=function(){
        function e(){
          this.id=0, this.name="", this.cover="", this.instructors=[
          ], this.subCourseCount=0
        }
        return n([
          (0, o.Z)((function(){
            return i
          }))
        ], e.prototype, "creditState", void 0), e
      }
      (), a=function(){
      }, c=function(){
      }
    }, 215698:(e, t, r)=>{
      var o=r(248124), n=r(756029), i=r(302543), s=r(962893).default;
      r(215195), r(418665), r(700533), r(269193), r(683396), r(445708), r(158649), r(868329), r(658379), r(14602);
      var a=r(592207);
      function c(e, t, r, o, n, i, s){
        try{
          var a=e[
            i
          ]
          (s), c=a.value
        }
        catch(e){
          return void r(e)
        }
        a.done?t(c):Promise.resolve(c).then(o, n)
      }
      function u(e){
        return function(){
          var t=this, r=arguments;
          return new Promise((function(o, n){
            var i=e.apply(t, r);
            function s(e){
              c(i, o, n, s, a, "next", e)
            }
            function a(e){
              c(i, o, n, s, a, "throw", e)
            }
            s(void 0)
          }))
        }
      }
      function l(e, t){
        return function(e){
          if(Array.isArray(e))return e
        }
        (e)||function(e, t){
          if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;
          var r=[
          ], o=!0, n=!1, i=void 0;
          try{
            for(var s, a=e[
              Symbol.iterator
            ]
            ();
            !(o=(s=a.next()).done)&&(r.push(s.value), !t||r.length!==t);
            o=!0);
          }
          catch(e){
            n=!0, i=e
          }
          finally{
            try{
              o||null==a.return||a.return()
            }
            finally{
              if(n)throw i
            }
          }
          return r
        }
        (e, t)||function(e, t){
          if(!e)return;
          if("string"==typeof e)return d(e, t);
          var r=Object.prototype.toString.call(e).slice(8, -1);
          "Object"===r&&e.constructor&&(r=e.constructor.name);
          if("Map"===r||"Set"===r)return Array.from(e);
          if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return d(e, t)
        }
        (e, t)||function(){
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        ()
      }
      function d(e, t){
        (null==t||t>e.length)&&(t=e.length);
        for(var r=0, o=new Array(t);
        r<t;
        r++)o[
          r
        ]
        =e[
          r
        ];
        return o
      }
      r(207452);
      var p=r(269634).createActivity, v=r(622571), f=v.syncItem, m=v.syncedInfo, y=r(272505).default, h=r(640241).filterFactory;
      e.exports=[
        "$rootScope", "$scope", "$q", "syllabusApi", "modelHelper", "publishHelper", "$timeout", "$http", "moduleRepository", "toastr", "activityRepository", "activityService", function(e, t, c, d, v, g, b, _, w, S, x, C){
          var A, k=o("#courseId").val();
          t.controller="SyllabusCtrl", t.filterCategory="all", t.onlyShowFromativeTasks=!1, t.confirmedOption={
            deleteRelatedActivity:!1
          }, t.activityBatchSelectMode="";
          var E=h((()=>({
            category:t.filterCategory, subCourses:e.subCourseFilterSelection, publishStatus:e.publishStatusFilterSelection
          }))), O=E.filterModule, I=E.filterSyllabus, T=E.filterActivity;
          t.viewMode="module", t.setViewMode=e=>{
            t.viewMode=e
          }, t.filterModule=O, t.filterSyllabus=I, t.filterActivity=T, t.publishActivitiesUnderModule=(e, r)=>{
            if(!e.__publishing){
              var o=[
                ...e.directActivities||[
                ], ...e.activities||[
                ]
              ];
              e.syllabuses&&e.syllabuses.forEach((e=>{
                o.push(...e.activities||[
                ])
              })), e.__publishing=!0;
              var n=o.filter(T).map((e=>"".concat(e.type, "-").concat(e.id)));
              n.length&&g.publishActivies(t.course.id, Array.from(new Set(n)), {
                type:!!r
              }).finally((()=>{
                e.__publishing=!1
              }))
            }
          }, t.editSyllabus=function(e){
            return t.copiedSyllabus=n.copy(e), o("#edit-syllabus").foundation("reveal", "open"), null
          }, t.createSyllabus=function(){
            var e=arguments.length>0&&void 0!==arguments[
              0
            ]
            ?arguments[
              0
            ]
            :t.course.modules[
              0
            ];
            return t.copiedSyllabus={
              module_id:e.id, teaching_type:"face_to_face"
            }, t.copiedModule=n.copy(e), o("#edit-syllabus").foundation("reveal", "open"), null
          }, t.deleteSyllabus=function(e){
            return t.hasDependents=!1, t.deleteType="syllabus", t.deleteModel=e, t.isCourseInCheckpointMode?d.getSyllabusHasDependents(e.id, M, j):j()
          }, t.startRollcall=e=>d.startRollcall(e.id), t.confirmDelete=function(){
            if(o("#delete-confirmation-popup").foundation("reveal", "close"), t.deleteModel.deleteRelatedActivity=t.confirmedOption.deleteRelatedActivity, "syllabus"===t.deleteType){
              return d.deleteSyllabus(t.deleteModel, (()=>{
                t._course.deleteSyllabus(t.deleteModel), t.confirmedOption.deleteRelatedActivity=!1
              }), (function(){
              }))
            }
            if("module"===t.deleteType){
              return w.deleteModule(t.deleteModel, (()=>{
                t.confirmedOption.deleteRelatedActivity=!1
              }), (function(){
              }))
            }
          };
          var $=()=>{
          }, P=()=>{
          }, M=function(e){
            return t.hasDependents=e.has_dependents, j()
          }, j=function(){
            return o("#delete-confirmation-popup").foundation("reveal", "open"), !0
          };
          t.resortSyllabus=(e, r, o)=>{
            var n={
              courseId:t.courseId, newIndex:r, oldModule:o.oldModule, newModule:o.newModule?o.newModule:o.oldModule, syllabusId:o.oldSyllabus
            };
            w.exchangeSyllabus(n, $, P)
          }, t.allowResort=()=>"all"===t.filterCategory, t.expandModulesAndContents=()=>{
            o(".expand-collapse-all-button").each(((e, t)=>{
              b((()=>{
                o(t).trigger("click-to-expand")
              }), 10)
            }))
          }, t.beforeSort=e=>{
            var t=document.getElementsByClassName("module-container")[
              0
            ].scrollHeight;
            document.getElementsByClassName("module-container")[
              0
            ].style.height="".concat(t, "px"), "syllabus"===e&&w.disableContentSortable("module")
          }, t.collapseAll=()=>{
            o(".module-content").each(((e, t)=>{
              t.classList.add("hidden-when-drag")
            }))
          }, t.expandAll=()=>{
            document.getElementsByClassName("module-container")[
              0
            ].style.height="", o(".module-content").each(((e, t)=>{
              t.classList.remove("hidden-when-drag")
            }))
          }, t.resort=(e, t)=>{
            w.exchangeModule(e, t, $, P)
          }, t.collapseActivities=()=>{
            o(".learning-activity, .module-activities").each(((e, t)=>{
              t.classList.add("hidden-when-drag")
            }))
          }, t.expandActivities=()=>{
            document.getElementsByClassName("module-container")[
              0
            ].style.height="", w.enableContentSortable("module"), o(".learning-activity, .module-activities").each(((e, t)=>{
              t.classList.remove("hidden-when-drag")
            }))
          }, t.hasFilteredResult=function(){
            return i.some(t.course.modules, O)
          }, t.toggleFormativeTaskFilter=()=>{
            t.onlyShowFromativeTasks=!t.onlyShowFromativeTasks
          }, t.showSyllabusSubItem=v.showSyllabusSubItem, t.activityFinish=v.activityFinish;
          var D=v.editModule;
          t.addModuleOrSyllabusIdIfExist=function(e, t){
            return t?"/syllabuses/".concat(t):e?"/modules/".concat(e):""
          }, t.closeCreateModulePopup=function(){
            return o("#create-or-edit-module").foundation("reveal", "close"), t.ui.newModuleName="", t.hasError=!1
          };
          var z=function(){
            return window.scrollTo(0, document.body.scrollHeight), t.closeCreateModulePopup()
          }, R=()=>S.error(t.createFailed);
          t.createModule=function(){
            o.trim(t.ui.newModuleName)||(t.hasError=!0);
            var e={
              name:t.ui.newModuleName
            };
            return w.addModule(e, z, R)
          }, t.createModuleWithData=function(e){
            return w.addModule(e, z, R)
          }, t.updateModuleWithData=function(e){
            return w.updateModule(e, z, R)
          }, e.$on("$addNewModule", (()=>t.addModule())), t.currentEditModule=null, t.openCreateModulePopup=()=>(t.currentEditModule=null, o("#create-or-edit-module").foundation("reveal", "open")), t.openCreateModuleByTeachingWeekPopup=()=>{
            s.prototype.$Modal.show(r(391259).A, {
              courseId:parseInt(k)
            })
          }, t.createModuleByTeachingWeekSuccessCallback=e=>{
            w.addModulesCallback(e, (()=>{
              z(), t.$apply()
            }))
          }, t.addModule=function(){
            return t.enableCoTeaching?t.openCreateModulePopup():(t.newModule={
              name:"", syllabuses:[
              ], activities:[
              ], directActivities:[
              ], editing:!1, newAdded:!0
            }, D(t.newModule, w, t, b))
          }, t.editModule=e=>t.enableCoTeaching?(t.currentEditModule=e, o("#create-or-edit-module").foundation("reveal", "open")):D(e, w, t, b), t.deleteModule=function(e){
            return t.hasDependents=!1, t.deleteType="module", t.deleteModel=e, t.isCourseInCheckpointMode?w.getModuleHasDependents(e.id, M, j):j()
          }, t.getActivityIcon=v.getActivityIcon, t.activityExpired=v.activityExpired, t.activityUpcoming=v.activityUpcoming, t.activityPublishing=v.activityPublishing, t.activityUrl=v.activityUrl, t.activityPopupName=v.activityPopupName, t.newActivityUrl=v.newActivityUrl, t.lessonDuration=v.lessonDuration, t.videoDuration=v.videoDuration, e.$on("syllabus_updated", ((e, r)=>i.merge(t._course.getSyllabuses(), r))), t.activityResourceSave=function(e){
            var r=()=>o("#save-confirmation-popup").foundation("reveal", "close");
            return t.confirm=function(){
              return C.saveActivityResource(e, r, r)
            }, o("#save-confirmation-popup").foundation("reveal", "open"), null
          }, t.toggleSetting=function(e){
            e&&(g.initPublisher(t), this.expandModulesAndContents()), t.activityBatchSelectMode=e?"publish":"", g.toggleSetting(t, t.activityBatchSelectMode);
            var r={
              mode:t.activityBatchSelectMode
            }, o=new CustomEvent("activity-batch-select-mode", {
              detail:r
            });
            window.dispatchEvent(o)
          }, t.toggleBatchActivitySync=function(e){
            t.activityBatchSelectMode=e?"sync":"", g.toggleSetting(t, t.activityBatchSelectMode);
            var r={
              mode:t.activityBatchSelectMode
            }, o=new CustomEvent("activity-batch-select-mode", {
              detail:r
            });
            window.dispatchEvent(o)
          }, t.syncModal=()=>{
            var e=t.checkedActivities.map((e=>{
              var t=l(e.split("-"), 2);
              return{
                type:t[
                  0
                ], id:t[
                  1
                ]
              }
            }));
            s.prototype.$Modal.show(r(740204).default, {
              courseId:parseInt(k), sources:e
            })
          }, window.addEventListener("refresh-all-items-sub-count", (()=>{
            t.toggleSetting(!1)
          })), t.hasChecked=function(){
            return t.checkedActivities&&t.checkedActivities.length>0
          }, t.checkAllOption=function(){
            t.checkedActivities=g.checkAllOption(t.filterCategory)
          }, t.checkOption=function(e, r, o){
            t.checkedActivities=g.checkOption(e, r, o)
          }, t.cancelPublish=r(370102).M, t.checkActivity=function(){
            var e=u(a.mark((function e(r){
              return a.wrap((function(e){
                for(;
                ;
                )switch(e.prev=e.next){
                  case 0:return r.__publishing=!0, e.next=3, g.checkActivity(t, r);
                  case 3:t.checkedActivities=e.sent, r.__publishing=!1;
                  case 5:case"end":return e.stop()
                }
              }), e)
            })));
            return function(t){
              return e.apply(this, arguments)
            }
          }
          (), t.publish=function(){
            t.loading=!0, g.publishActivies(k, t.checkedActivities, t.publishSetting).finally((()=>{
              t.loading=!1
            }))
          }, e.$on("activity-publish-changed", ((e, r)=>{
            i(t.course.modules).forEach((function(e){
              g.updateActivitiesPublishType(e.directActivities, r), i(e.syllabuses).forEach((function(e){
                g.updateActivitiesPublishType(e.activities, r)
              }))
            })), t.toggleSetting(!1), g.closePublishPopup()
          }));
          var N=window.globalData.user.id;
          t.$watch("course.modules", (()=>{
            var e, r;
            g.initPublisher(t), t.enableCoTeaching&&(t.isInstructorView||t.isAssistantView)&&t.course.modules&&(e="".concat(N, ":").concat(k, ":syllabus:toggle_ops"), r=t.course.modules.reduce(((e, t)=>(e[
              t.id
            ]
            =null===t.lecturer_id||0===t.lecturer_id||t.lecturer_id===N, e)), {
            }), o.cookie(e, JSON.stringify(r), {
              expires:365
            }))
          })), t.vueCreateActivity=p, t.vueSyncItem=f, t.vueSyncedInfo=m, e.$on("changeFile", ((e, t, r)=>{
            U(r, t)
          }));
          var U=(e, r)=>{
            x.logActivityRead(e.id, {
              upload_id:r.id
            }, (function(r){
              if(v.refreshActivitiesReadForMaterialActivity(t.activitiesRead, r), e.icon=v.getActivityIcon(e, t.activitiesRead, t.isInstructorView), "full"===r.completeness&&e.completion_criterion&&t.isCourseInCheckpointMode&&t.isTogglePrerequisiteOpened)return v.refreshPrerequisitesStatus(e, t, !0, t.completedInfo?t.completedInfo[
                e.type
              ]
              :"")
            }), (function(){
            })), st.track(e.type, "view", {
              activity_id:e.id, upload_id:r.id, file_name:r.name
            })
          }, L=function(){
            var e=u(a.mark((function e(){
              var r;
              return a.wrap((function(e){
                for(;
                ;
                )switch(e.prev=e.next){
                  case 0:return e.next=2, y.get("/api/course/".concat(k, "/lesson-times"));
                  case 2:r=e.sent, t.lessonTimes=r.data;
                  case 4:case"end":return e.stop()
                }
              }), e)
            })));
            return function(){
              return e.apply(this, arguments)
            }
          }
          ();
          return null!==(A=window.orgSettings.course_lesson_time_view)&&void 0!==A&&A.enable&&(t.enableLessonTime=!0, t.lessonTimes=[
          ], L()), t.enableCoTeaching&&Promise.all([
            r.e(79055), r.e(83696)
          ]).then(r.bind(r, 291512)), t.resetPrerequisitesTipsPosition=function(e){
            var t=e.currentTarget, r=o(t).find(".prerequisites-tips");
            return r.height()+o(t).offset().top>o(".footer").offset().top&&o(t).find(".prerequisites-tips").css("bottom", r.height()-38), !0
          }
        }
      ]
    }, 265356:(e, t, r)=>{
      r.d(t, {
        MM:()=>f, cd:()=>m, h2:()=>v, nC:()=>l
      });
      var o, n=r(738645), i=r(152229), s=r(510543), a=r(731904), c=(o=function(e, t){
        return(o=Object.setPrototypeOf||{
          __proto__:[
          ]
        }
        instanceof Array&&function(e, t){
          e.__proto__=t
        }
        ||function(e, t){
          for(var r in t)Object.prototype.hasOwnProperty.call(t, r)&&(e[
            r
          ]
          =t[
            r
          ])
        })(e, t)
      }, function(e, t){
        if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");
        function r(){
          this.constructor=e
        }
        o(e, t), e.prototype=null===t?Object.create(t):(r.prototype=t.prototype, new r)
      }), u=function(e, t, r, o){
        var n, i=arguments.length, s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t, r):o;
        if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e, t, r, o);
        else for(var a=e.length-1;
        a>=0;
        a--)(n=e[
          a
        ])&&(s=(i<3?n(s):i>3?n(t, r, s):n(t, r))||s);
        return i>3&&s&&Object.defineProperty(t, r, s), s
      }, l=function(){
        function e(){
        }
        return u([
          (0, n.v)()
        ], e.prototype, "id", void 0), u([
          (0, n.v)()
        ], e.prototype, "name", void 0), e
      }
      (), d=function(){
        function e(){
        }
        return u([
          (0, n.v)()
        ], e.prototype, "name", void 0), u([
          (0, n.v)()
        ], e.prototype, "id", void 0), u([
          (0, n.v)()
        ], e.prototype, "userNo", void 0), e
      }
      (), p=function(e){
        function t(){
          return null!==e&&e.apply(this, arguments)||this
        }
        return c(t, e), u([
          (0, n.v)(), (0, i.Z)((function(){
            return l
          }))
        ], t.prototype, "department", void 0), t
      }
      (d), v=function(){
        function e(){
        }
        return u([
          (0, n.v)()
        ], e.prototype, "id", void 0), u([
          (0, n.v)()
        ], e.prototype, "status", void 0), u([
          (0, n.v)(), (0, s.d)((function(e){
            var t=e.value;
            return a.TimeUtils.toLocalDate(t)
          }), {
            toClassOnly:!0
          })
        ], e.prototype, "createdAt", void 0), u([
          (0, n.v)(), (0, i.Z)((function(){
            return p
          }))
        ], e.prototype, "user", void 0), e
      }
      (), f=function(){
        function e(){
          this.knowledgeNodeCount=void 0, this.owners=[
          ], this.ownerIds=[
          ], this.enrolledProject=!0, this.audit=void 0
        }
        return u([
          (0, n.v)()
        ], e.prototype, "id", void 0), u([
          (0, n.v)()
        ], e.prototype, "name", void 0), u([
          (0, n.v)()
        ], e.prototype, "knowledgeNodeCount", void 0), u([
          (0, n.v)({
            name:"classroomSchedule"
          })
        ], e.prototype, "description", void 0), u([
          (0, n.v)({
            name:"instructors"
          }), (0, i.Z)((function(){
            return d
          }))
        ], e.prototype, "owners", void 0), u([
          (0, n.v)()
        ], e.prototype, "enrolledProject", void 0), u([
          (0, n.v)(), (0, i.Z)((function(){
            return v
          }))
        ], e.prototype, "audit", void 0), e
      }
      (), m=function(){
        function e(){
          this.refParentId=null
        }
        return u([
          (0, n.v)()
        ], e.prototype, "id", void 0), u([
          (0, n.v)()
        ], e.prototype, "name", void 0), u([
          (0, n.v)(), (0, s.d)((function(e){
            var t=e.value;
            return a.TimeUtils.toLocalDate(t)
          }), {
            toClassOnly:!0
          })
        ], e.prototype, "createdAt", void 0), u([
          (0, n.v)()
        ], e.prototype, "createdById", void 0), u([
          (0, n.v)()
        ], e.prototype, "refParentId", void 0), u([
          (0, n.v)()
        ], e.prototype, "upload", void 0), u([
          (0, n.v)()
        ], e.prototype, "allowDownload", void 0), u([
          (0, n.v)()
        ], e.prototype, "knowledgeCount", void 0), u([
          (0, n.v)()
        ], e.prototype, "knowledgeNodes", void 0), e
      }
      ()
    }, 308316:(e, t, r)=>{
      var o=r(302543), n=r(822087).ActivityAirHelper;
      e.exports=[
        "$rootScope", "$scope", "publishHelper", function(e, t, r){
          t.airHelper=new n(e, t), t.newSyllabusClass=function(){
            return e.ui.addingSyllabus?"active":""
          }, t.setFilterCategory=function(n, i){
            if(r.resetCheckedOptions(), t.$parent.checkedActivities=[
            ], t.$parent.filterCategory=n, e.categoryName=i, t.categoryName=i, t.course)return o.each(t.course.modules, (e=>delete e.newAdded))
          }, t.openCoursePkgCreatePopup=function(t){
            e.$broadcast("coursePkg.create", t)
          }
        }
      ]
    }, 344651:(e, t, r)=>{
      r.d(t, {
        $A:()=>_, Il:()=>p, sB:()=>w, uJ:()=>n, ul:()=>b, xY:()=>f, z$:()=>m
      });
      r(540590);
      var o, n, i=r(738645), s=r(510543), a=r(152229), c=r(731904), u=(o=function(e, t){
        return(o=Object.setPrototypeOf||{
          __proto__:[
          ]
        }
        instanceof Array&&function(e, t){
          e.__proto__=t
        }
        ||function(e, t){
          for(var r in t)Object.prototype.hasOwnProperty.call(t, r)&&(e[
            r
          ]
          =t[
            r
          ])
        })(e, t)
      }, function(e, t){
        if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");
        function r(){
          this.constructor=e
        }
        o(e, t), e.prototype=null===t?Object.create(t):(r.prototype=t.prototype, new r)
      }), l=function(e, t, r, o){
        var n, i=arguments.length, s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t, r):o;
        if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e, t, r, o);
        else for(var a=e.length-1;
        a>=0;
        a--)(n=e[
          a
        ])&&(s=(i<3?n(s):i>3?n(t, r, s):n(t, r))||s);
        return i>3&&s&&Object.defineProperty(t, r, s), s
      }, d=[
        "none", "auditing", "agree", "reject"
      ], p=(function(){
        function e(){
        }
        l([
          (0, i.v)()
        ], e.prototype, "id", void 0), l([
          (0, i.v)()
        ], e.prototype, "duration", void 0)
      }
      (), function(){
        function e(){
        }
        l([
          (0, i.v)()
        ], e.prototype, "id", void 0), l([
          (0, i.v)()
        ], e.prototype, "name", void 0), l([
          (0, i.v)()
        ], e.prototype, "size", void 0), l([
          (0, i.v)()
        ], e.prototype, "deleted", void 0), l([
          (0, i.v)()
        ], e.prototype, "type", void 0), l([
          (0, i.v)()
        ], e.prototype, "status", void 0), l([
          (0, i.v)()
        ], e.prototype, "videoSrcType", void 0), l([
          (0, i.v)()
        ], e.prototype, "allowDownload", void 0), l([
          (0, i.v)()
        ], e.prototype, "audio", void 0), l([
          (0, i.v)()
        ], e.prototype, "videos", void 0)
      }
      (), function(){
        function e(){
        }
        l([
          (0, i.v)()
        ], e.prototype, "id", void 0), l([
          (0, i.v)()
        ], e.prototype, "uploads", void 0)
      }
      (), function(){
        function e(){
        }
        l([
          (0, i.v)()
        ], e.prototype, "id", void 0), l([
          (0, i.v)()
        ], e.prototype, "videoQuiz", void 0)
      }
      (), function(){
        function e(){
        }
        l([
          (0, i.v)()
        ], e.prototype, "cameraType", void 0), l([
          (0, i.v)()
        ], e.prototype, "fileUrl", void 0), l([
          (0, i.v)()
        ], e.prototype, "label", void 0)
      }
      (), function(){
        function e(){
        }
        l([
          (0, i.v)()
        ], e.prototype, "duration", void 0), l([
          (0, i.v)()
        ], e.prototype, "status", void 0)
      }
      (), function(){
        function e(){
        }
        l([
          (0, i.v)()
        ], e.prototype, "id", void 0), l([
          (0, i.v)()
        ], e.prototype, "name", void 0), l([
          (0, i.v)()
        ], e.prototype, "mimetype", void 0), l([
          (0, i.v)()
        ], e.prototype, "appId", void 0), l([
          (0, i.v)()
        ], e.prototype, "properties", void 0)
      }
      (), function(){
        function e(){
        }
        l([
          (0, i.v)(), (0, s.d)((function(e){
            var t=e.value;
            return c.TimeUtils.toLocalDate(t)
          }), {
            toClassOnly:!0
          })
        ], e.prototype, "startTime", void 0), l([
          (0, i.v)(), (0, s.d)((function(e){
            var t=e.value;
            return c.TimeUtils.toLocalDate(t)
          }), {
            toClassOnly:!0
          })
        ], e.prototype, "endTime", void 0), l([
          (0, i.v)()
        ], e.prototype, "videos", void 0)
      }
      (), function(){
        function e(){
        }
        return l([
          (0, i.v)()
        ], e.prototype, "id", void 0), l([
          (0, i.v)()
        ], e.prototype, "title", void 0), l([
          (0, i.v)()
        ], e.prototype, "courseId", void 0), l([
          (0, i.v)()
        ], e.prototype, "type", void 0), l([
          (0, i.v)()
        ], e.prototype, "data", void 0), l([
          (0, i.v)(), (0, s.d)((function(e){
            var t=e.value;
            return c.TimeUtils.toLocalDate(t)
          }), {
            toClassOnly:!0
          })
        ], e.prototype, "startTime", void 0), l([
          (0, i.v)(), (0, s.d)((function(e){
            var t=e.value;
            return c.TimeUtils.toLocalDate(t)
          }), {
            toClassOnly:!0
          })
        ], e.prototype, "endTime", void 0), l([
          (0, i.v)(), (0, s.d)((function(e){
            var t=e.value;
            return c.TimeUtils.toLocalDate(t)
          }), {
            toClassOnly:!0
          })
        ], e.prototype, "lastSubMeetingEndTime", void 0), l([
          (0, i.v)()
        ], e.prototype, "canReprocessReplay", void 0), l([
          (0, i.v)()
        ], e.prototype, "completionCriterion", void 0), l([
          (0, i.v)()
        ], e.prototype, "completionCriterionKey", void 0), l([
          (0, i.v)()
        ], e.prototype, "completionCriterionValue", void 0), l([
          (0, i.v)()
        ], e.prototype, "interScoreMap", void 0), l([
          (0, i.v)()
        ], e.prototype, "intraScoreMap", void 0), l([
          (0, i.v)(), (0, s.d)((function(e){
            return function(e){
              return c.TimeUtils.isAfterByNow(e.startTime)?"notStarted":e.lastSubMeetingEndTime&&c.TimeUtils.isAfterByNow(e.lastSubMeetingEndTime)||!e.endTime||c.TimeUtils.isAfterByNow(e.endTime)?"inProgress":"expired"
            }
            (e.obj)
          }))
        ], e.prototype, "status", void 0), l([
          (0, i.v)(), (0, s.d)((function(e){
            var t=e.obj;
            return d[
              t.data.auditStatus
            ]
          }))
        ], e.prototype, "auditStatus", void 0), l([
          (0, i.v)(), (0, s.d)((function(e){
            var t=e.value;
            return c.TimeUtils.toLocalDate(t)
          }), {
            toClassOnly:!0
          })
        ], e.prototype, "createdAt", void 0), l([
          (0, i.v)()
        ], e.prototype, "createdBy", void 0), l([
          (0, i.v)()
        ], e.prototype, "meetingHostUser", void 0), l([
          (0, i.v)()
        ], e.prototype, "isBookedLive", void 0), l([
          (0, i.v)()
        ], e.prototype, "bookedCount", void 0), l([
          (0, i.v)()
        ], e.prototype, "tencentMeetingType", void 0), l([
          (0, i.v)()
        ], e.prototype, "orgId", void 0), l([
          (0, i.v)()
        ], e.prototype, "moduleId", void 0), l([
          (0, i.v)()
        ], e.prototype, "syllabusId", void 0), l([
          (0, i.v)()
        ], e.prototype, "uploads", void 0), l([
          (0, i.v)()
        ], e.prototype, "interactionActivityAttributes", void 0), l([
          (0, i.v)()
        ], e.prototype, "lessonResource", void 0), l([
          (0, i.v)()
        ], e.prototype, "videoSuite", void 0), l([
          (0, i.v)()
        ], e.prototype, "viewUrl", void 0), e
      }
      ()), v=function(e){
        this.type=e, this.recurringType=-1
      }, f=function(e){
        function t(){
          return e.call(this, "chinamcloud_live")||this
        }
        return u(t, e), t
      }
      (v), m=function(e){
        function t(){
          var t=e.call(this, "lesson")||this;
          return t.lessonType="lesson_replay", t
        }
        return u(t, e), t
      }
      (v), y=function(){
        function e(){
          this.leftSecond=0, this.progress=0, this.retryTimes=0
        }
        return l([
          (0, i.v)()
        ], e.prototype, "leftSecond", void 0), l([
          (0, i.v)()
        ], e.prototype, "progress", void 0), l([
          (0, i.v)()
        ], e.prototype, "retryTimes", void 0), e
      }
      (), h=function(){
        function e(){
        }
        return l([
          (0, i.v)()
        ], e.prototype, "label", void 0), l([
          (0, i.v)()
        ], e.prototype, "muted", void 0), l([
          (0, i.v)()
        ], e.prototype, "streamUrl", void 0), l([
          (0, i.v)()
        ], e.prototype, "type", void 0), l([
          (0, i.v)()
        ], e.prototype, "flvSrc", void 0), l([
          (0, i.v)()
        ], e.prototype, "flvType", void 0), l([
          (0, i.v)()
        ], e.prototype, "defaultProtocal", void 0), e
      }
      (), g=function(){
        function e(){
        }
        return l([
          (0, i.v)()
        ], e.prototype, "cameraType", void 0), l([
          (0, i.v)()
        ], e.prototype, "cameraId", void 0), l([
          (0, i.v)()
        ], e.prototype, "mute", void 0), l([
          (0, i.v)()
        ], e.prototype, "url", void 0), l([
          (0, i.v)()
        ], e.prototype, "mediaProtocol", void 0), e
      }
      (), b=function(){
        function e(){
          this.description="", this.progress=null, this.streams=null, this.replayVideos=null, this.controllerConfig={
          }, this.liveCaptionConfig={
          }, this.viewLive=!0, this.viewRecord=!0
        }
        return l([
          (0, i.v)()
        ], e.prototype, "instructorNames", void 0), l([
          (0, i.v)()
        ], e.prototype, "description", void 0), l([
          (0, i.v)(), (0, a.Z)((function(){
            return y
          }))
        ], e.prototype, "progress", void 0), l([
          (0, i.v)(), (0, a.Z)((function(){
            return h
          }))
        ], e.prototype, "streams", void 0), l([
          (0, i.v)()
        ], e.prototype, "status", void 0), l([
          (0, i.v)()
        ], e.prototype, "replayId", void 0), l([
          (0, i.v)(), (0, a.Z)((function(){
            return g
          }))
        ], e.prototype, "replayVideos", void 0), l([
          (0, i.v)(), (0, s.d)((function(e){
            return e.value||{
            }
          }), {
            toClassOnly:!0
          })
        ], e.prototype, "controllerConfig", void 0), l([
          (0, i.v)(), (0, s.d)((function(e){
            return e.value||{
            }
          }), {
            toClassOnly:!0
          })
        ], e.prototype, "liveCaptionConfig", void 0), l([
          (0, i.v)(), (0, s.d)((function(e){
            return e.value.roomName
          }), {
            toClassOnly:!0
          })
        ], e.prototype, "room", void 0), l([
          (0, i.v)()
        ], e.prototype, "type", void 0), l([
          (0, i.v)()
        ], e.prototype, "isBookedLive", void 0), l([
          (0, i.v)()
        ], e.prototype, "bookedCount", void 0), l([
          (0, i.v)()
        ], e.prototype, "viewLive", void 0), l([
          (0, i.v)()
        ], e.prototype, "viewRecord", void 0), e
      }
      (), _=function(){
        function e(){
        }
        return l([
          (0, i.v)()
        ], e.prototype, "id", void 0), l([
          (0, i.v)()
        ], e.prototype, "displayName", void 0), l([
          (0, i.v)()
        ], e.prototype, "type", void 0), l([
          (0, i.v)()
        ], e.prototype, "percentage", void 0), e
      }
      ();
      !function(e){
        function t(){
          return null!==e&&e.apply(this, arguments)||this
        }
        u(t, e)
      }
      (v);
      !function(e){
        e[
          e.init=0
        ]
        ="init", e[
          e.running=1
        ]
        ="running", e[
          e.success=2
        ]
        ="success", e[
          e.failed=3
        ]
        ="failed", e[
          e.cancel=4
        ]
        ="cancel"
      }
      (n||(n={
      }));
      var w=function(){
        function e(){
        }
        return l([
          (0, i.v)()
        ], e.prototype, "id", void 0), l([
          (0, i.v)()
        ], e.prototype, "createdAt", void 0), l([
          (0, i.v)()
        ], e.prototype, "scoreMethod", void 0), l([
          (0, i.v)()
        ], e.prototype, "version", void 0), l([
          (0, i.v)()
        ], e.prototype, "oldScore", void 0), l([
          (0, i.v)()
        ], e.prototype, "score", void 0), l([
          (0, i.v)()
        ], e.prototype, "oldFinalScore", void 0), l([
          (0, i.v)()
        ], e.prototype, "finalScore", void 0), l([
          (0, i.v)()
        ], e.prototype, "operatorName", void 0), l([
          (0, i.v)()
        ], e.prototype, "operatorId", void 0), e
      }
      ()
    }, 370102:(e, t, r)=>{
      r.d(t, {
        M:()=>i
      });
      var o=r(962893), n=r(379681), i=e=>{
        var t=e.activity, r=e.scope, i=e.batch;
        o.default.prototype.$Modal.show(n.A, {
          destroyComponent:!0, activity:t, scope:r, batch:i
        })
      }
    }, 374302:(e, t, r)=>{
      r.r(t), r.d(t, {
        addActivityComment:()=>B, applyCommentLikeOperation:()=>V, checkTencentMeetingUserAuth:()=>ae, checkUserLarkAuth:()=>P, createActivitiesInCourses:()=>E, createActivity:()=>p, createCalendarMeeting:()=>O, deleteActivity:()=>v, deleteActivityResource:()=>C, deleteSubmissionAttachMarkUpload:()=>R, getActivityCommentReplies:()=>F, getActivityComments:()=>U, getActivityCommentsReplies:()=>L, getActivityDetail:()=>g, getActivityHaveDependents:()=>S, getActivityReferences:()=>Q, getActivityResource:()=>x, getClasinJoinUrl:()=>y, getClassinWebcastUrl:()=>h, getCommentCountWithType:()=>J, getCompletionCriteria:()=>m, getCourseActivities:()=>_, getDingtalkWatchStats:()=>ce, getGroupSubmission:()=>oe, getGroupSubmissions:()=>M, getH5CoursewareViewUrl:()=>ue, getHomeworkDuplicateRate:()=>ie, getHomeworkInterScores:()=>X, getInterGroupScores:()=>ee, getIntraGroupScores:()=>te, getMeetingStatistics:()=>A, getPageCommentStat:()=>Y, getScoreItems:()=>k, getScoreRecords:()=>b, getStudentSubmission:()=>re, getStudentSubmissions:()=>j, getSubmissionAttachements:()=>D, logActivityRead:()=>I, logMgs:()=>T, refreshMarkedAttachment:()=>z, removeActivityComment:()=>H, removeActivityCommentReply:()=>G, replaceSubmissionCorrectUploadReference:()=>N, replyActivityComment:()=>K, reprocessLectureLiveReplay:()=>w, trackSchedulePlay:()=>$, updateActivity:()=>f, updateActivityComment:()=>q, updateActivityCommentReply:()=>W, updateActivityResource:()=>le, updateCorrectUploads:()=>se, updateHomeworkAnnounceMarkStatus:()=>ne, updateHomeworkScoreAndComment:()=>Z, upsertH5CoursewareCmi:()=>de
      });
      r(540590), r(418665), r(169218), r(269193), r(14602);
      var o=r(272505), n=r.n(o), i=r(218831), s=r(920453), a=r(344651), c=r(854184), u=function(){
        return(u=Object.assign||function(e){
          for(var t, r=1, o=arguments.length;
          r<o;
          r++)for(var n in t=arguments[
            r
          ])Object.prototype.hasOwnProperty.call(t, n)&&(e[
            n
          ]
          =t[
            n
          ]);
          return e
        }).apply(this, arguments)
      }, l=function(e, t, r, o){
        return new(r||(r=Promise))((function(n, i){
          function s(e){
            try{
              c(o.next(e))
            }
            catch(e){
              i(e)
            }
          }
          function a(e){
            try{
              c(o.throw(e))
            }
            catch(e){
              i(e)
            }
          }
          function c(e){
            var t;
            e.done?n(e.value):(t=e.value, t instanceof r?t:new r((function(e){
              e(t)
            }))).then(s, a)
          }
          c((o=o.apply(e, t||[
          ])).next())
        }))
      }, d=function(e, t){
        var r, o, n, i, s={
          label:0, sent:function(){
            if(1&n[
              0
            ])throw n[
              1
            ];
            return n[
              1
            ]
          }, trys:[
          ], ops:[
          ]
        };
        return i={
          next:a(0), throw:a(1), return:a(2)
        }, "function"==typeof Symbol&&(i[
          Symbol.iterator
        ]
        =function(){
          return this
        }), i;
        function a(a){
          return function(c){
            return function(a){
              if(r)throw new TypeError("Generator is already executing.");
              for(;
              i&&(i=0, a[
                0
              ]
              &&(s=0)), s;
              )try{
                if(r=1, o&&(n=2&a[
                  0
                ]
                ?o.return:a[
                  0
                ]
                ?o.throw||((n=o.return)&&n.call(o), 0):o.next)&&!(n=n.call(o, a[
                  1
                ])).done)return n;
                switch(o=0, n&&(a=[
                  2&a[
                    0
                  ], n.value
                ]), a[
                  0
                ]){
                  case 0:case 1:n=a;
                  break;
                  case 4:return s.label++, {
                    value:a[
                      1
                    ], done:!1
                  };
                  case 5:s.label++, o=a[
                    1
                  ], a=[
                    0
                  ];
                  continue;
                  case 7:a=s.ops.pop(), s.trys.pop();
                  continue;
                  default:if(!(n=s.trys, (n=n.length>0&&n[
                    n.length-1
                  ])||6!==a[
                    0
                  ]
                  &&2!==a[
                    0
                  ])){
                    s=0;
                    continue
                  }
                  if(3===a[
                    0
                  ]
                  &&(!n||a[
                    1
                  ]
                  >n[
                    0
                  ]
                  &&a[
                    1
                  ]
                  <n[
                    3
                  ])){
                    s.label=a[
                      1
                    ];
                    break
                  }
                  if(6===a[
                    0
                  ]
                  &&s.label<n[
                    1
                  ]){
                    s.label=n[
                      1
                    ], n=a;
                    break
                  }
                  if(n&&s.label<n[
                    2
                  ]){
                    s.label=n[
                      2
                    ], s.ops.push(a);
                    break
                  }
                  n[
                    2
                  ]
                  &&s.ops.pop(), s.trys.pop();
                  continue
                }
                a=t.call(e, s)
              }
              catch(e){
                a=[
                  6, e
                ], o=0
              }
              finally{
                r=n=0
              }
              if(5&a[
                0
              ])throw a[
                1
              ];
              return{
                value:a[
                  0
                ]
                ?a[
                  1
                ]
                :void 0, done:!0
              }
            }
            ([
              a, c
            ])
          }
        }
      };
      function p(e, t){
        return n().post("/api/courses/".concat(e, "/activities"), t)
      }
      function v(e, t){
        var r;
        void 0===t&&(t={
        });
        var o={
          params:t
        };
        return(null===(r=window.orgSettings)||void 0===r?void 0:r.enableShanghaitechMeeting)&&(o.validateStatus=function(){
          return!0
        }), n().delete("/api/activities/".concat(e), o)
      }
      function f(e, t){
        return n().put("/api/activities/".concat(e), t)
      }
      function m(e, t){
        return n().get("/api/completion-criteria", {
          params:{
            activity_type:t, course_id:e
          }
        })
      }
      function y(e, t, r){
        return l(this, void 0, void 0, (function(){
          return d(this, (function(o){
            switch(o.label){
              case 0:return[
                4, n().get("/api/activies/classin/join-url", {
                  params:{
                    course_id:e, activity_id:t, user_id:r
                  }
                })
              ];
              case 1:return[
                2, o.sent().data.url
              ]
            }
          }))
        }))
      }
      function h(e, t){
        return l(this, void 0, void 0, (function(){
          return d(this, (function(r){
            switch(r.label){
              case 0:return[
                4, n().get("/api/activities/classin/webcast-url", {
                  params:{
                    course_id:e, activity_id:t
                  }
                })
              ];
              case 1:return[
                2, r.sent().data.url
              ]
            }
          }))
        }))
      }
      function g(e){
        return l(this, void 0, void 0, (function(){
          var t, r;
          return d(this, (function(o){
            switch(o.label){
              case 0:return[
                4, n().get("/api/activities/".concat(e))
              ];
              case 1:return t=o.sent(), r=(0, i.camelizeKeys)(t.data), [
                2, (0, s.plainToClass)(a.Il, r)
              ]
            }
          }))
        }))
      }
      var b=function(e, t, r, o){
        return l(void 0, void 0, void 0, (function(){
          var c, u, l, p;
          return d(this, (function(d){
            switch(d.label){
              case 0:return c=(0, i.decamelizeKeys)({
                page:e, pageSize:t
              }), [
                4, n().get("/api/activity/".concat(r, "/submitter/").concat(o, "/score-records"), {
                  params:c
                })
              ];
              case 1:return u=d.sent(), l=(0, i.camelizeKeys)(u.data), p=(0, s.plainToClass)(a.sB, l.records, {
                excludeExtraneousValues:!0
              }), [
                2, {
                  page:e, pageSize:t, pages:l.pages, total:l.total, start:l.start, end:l.end, items:p
                }
              ]
            }
          }))
        }))
      }, _=function(e){
        return l(void 0, void 0, void 0, (function(){
          var t;
          return d(this, (function(r){
            switch(r.label){
              case 0:return[
                4, n().get("/api/courses/".concat(e, "/activities"))
              ];
              case 1:return t=r.sent().data, [
                2, (0, s.plainToClass)(a.Il, (0, i.camelizeKeys)(t.activities))
              ]
            }
          }))
        }))
      };
      function w(e, t){
        return l(this, void 0, void 0, (function(){
          return d(this, (function(r){
            switch(r.label){
              case 0:return[
                4, n().post("/api/courses/lecture-live-activity/".concat(e, "/reprocess"), {
                  replay_id:t
                })
              ];
              case 1:return r.sent(), [
                2
              ]
            }
          }))
        }))
      }
      function S(e, t){
        return l(this, void 0, void 0, (function(){
          return d(this, (function(r){
            switch(r.label){
              case 0:return[
                4, n().get("/api/activities/have-dependents", {
                  params:{
                    activity_ids:e, activity_type:t
                  }
                })
              ];
              case 1:return[
                2, r.sent().data.has_dependents
              ]
            }
          }))
        }))
      }
      function x(e){
        return l(this, void 0, void 0, (function(){
          return d(this, (function(t){
            switch(t.label){
              case 0:return[
                4, n().get("/api/activities/".concat(e, "/resources"))
              ];
              case 1:return[
                2, t.sent().data
              ]
            }
          }))
        }))
      }
      function C(e, t){
        return l(this, void 0, void 0, (function(){
          return d(this, (function(r){
            return[
              2, n().delete("/api/activities/".concat(e, "/resources/").concat(t))
            ]
          }))
        }))
      }
      function A(e, t, r){
        return l(this, void 0, void 0, (function(){
          var o;
          return d(this, (function(i){
            return o="".concat(e, "/api/meeting/").concat(t, "/metrics?group_by=activity,upload_ref,student&meeting_type=").concat(r, "&jwt=").concat(window.statisticsSettings.mgsJwt), [
              2, n().get(o)
            ]
          }))
        }))
      }
      function k(e){
        return l(this, void 0, void 0, (function(){
          var t, r;
          return d(this, (function(o){
            switch(o.label){
              case 0:return[
                4, n().get("/api/courses/".concat(e, "/grade-score-items"))
              ];
              case 1:return t=o.sent(), r=(0, i.camelizeKeys)(t.data), [
                2, (0, s.plainToClass)(a.$A, r, {
                  excludeExtraneousValues:!1
                })
              ]
            }
          }))
        }))
      }
      function E(e, t){
        var r=u(u({
        }, e), {
          courses:t
        });
        return n().post("/api/courses/tencent-meeting/activities", r)
      }
      function O(e){
        return n().post("/api/calendar-meeting", e)
      }
      function I(e, t){
        return n().post("/api/course/activities-read/".concat(t), e)
      }
      function T(e, t){
        window.st&&!window.st.isCanTrack()||n().post("".concat(e, "/api/lecture-live?jwt=").concat(window.statisticsSettings.mgsJwt), t)
      }
      function $(e, t){
        return l(this, void 0, void 0, (function(){
          var r;
          return d(this, (function(o){
            return r=u(u({
            }, t), {
              clientType:"web"
            }), [
              2, n().post("/api/lecture-live/schedule/".concat(e, "/player-visits"), (0, i.decamelizeKeys)(r))
            ]
          }))
        }))
      }
      function P(){
        return n().get("/api/lark/authorization/check")
      }
      function M(e, t){
        return n().get("/api/activities/".concat(e, "/groups/").concat(t, "/submission_list"))
      }
      function j(e, t){
        return n().get("/api/activities/".concat(e, "/students/").concat(t, "/submission_list"))
      }
      function D(e){
        return n().get("/api/submissions/".concat(e, "/marked_attachments"))
      }
      function z(e, t){
        return n().get("/api/submissions/".concat(e, "/marked_attachments/").concat(t)).then((function(e){
          return e.data.marked_attachment
        }))
      }
      function R(e){
        return n().delete("/api/uploads/marked_attachment/".concat(e))
      }
      function N(e, t){
        return n().put("/api/uploads/references/".concat(e), {
          upload_id:t
        })
      }
      function U(e, t, r, o, i, s){
        return n().get("/api/activities/".concat(e, "/comments?page=").concat(t, "&page_size=").concat(r, "&order_key=").concat(o, "&order=").concat(i, "&conditions=").concat(JSON.stringify(s)))
      }
      function L(e, t){
        return n().get("/api/activities/".concat(e, "/comments/replies"), {
          params:{
            comment_ids:t
          }
        })
      }
      function F(e, t, r, o){
        return n().get("/api/activities/".concat(e, "/comments/").concat(t, "/replies?page=").concat(r, "&page_size=").concat(o))
      }
      function B(e, t){
        return n().post("/api/activities/".concat(e, "/comments"), t)
      }
      function q(e, t, r){
        return n().put("/api/activities/".concat(e, "/comments/").concat(t), r)
      }
      function H(e, t){
        return n().delete("/api/activities/".concat(e, "/comments/").concat(t))
      }
      function K(e, t, r){
        return n().post("/api/activities/".concat(e, "/comments/").concat(t, "/reply"), r)
      }
      function W(e, t, r){
        return n().put("/api/activities/".concat(e, "/reply/").concat(t), r)
      }
      function G(e, t){
        return n().delete("/api/activities/".concat(e, "/reply/").concat(t))
      }
      function V(e, t){
        return n().post("/api/activities/".concat(e, "/comments/operate"), t)
      }
      function Q(e){
        return n().get("/api/activities/".concat(e, "/upload_references"))
      }
      function Y(e, t){
        return n().get("/api/activities/".concat(e, "/comment/page-count?conditions=").concat(JSON.stringify(t)))
      }
      function J(e, t){
        return n().get("/api/activities/".concat(e, "/comment/count?conditions=").concat(JSON.stringify(t)))
      }
      function Z(e, t, r, o){
        var s=(0, i.decamelizeKeys)(t);
        n()({
          method:"PUT", url:"/api/course/activities/".concat(e, "/submission/score?fields=id,score,instructor_comment,rubric_score,final_score&need_submission_correct=true"), data:s, transformResponse:function(e){
            var t=JSON.parse(e);
            if(t.id)return t;
            if(t.message)throw t.message;
            if(t.errors)throw t.errors;
            throw"unknown error"
          }
        }).then((function(e){
          r(e)
        })).catch((function(e){
          o(e)
        }))
      }
      function X(e){
        return l(this, void 0, void 0, (function(){
          var t;
          return d(this, (function(r){
            switch(r.label){
              case 0:return[
                4, n().get("/api/homework/".concat(e, "/inter-scores"))
              ];
              case 1:return t=r.sent(), [
                2, (0, i.camelizeKeys)(t.data)
              ]
            }
          }))
        }))
      }
      function ee(e){
        return l(this, void 0, void 0, (function(){
          var t;
          return d(this, (function(r){
            switch(r.label){
              case 0:return[
                4, n().get("/api/homework/".concat(e, "/intra-scores"))
              ];
              case 1:return t=r.sent(), [
                2, (0, i.camelizeKeys)(t.data)
              ]
            }
          }))
        }))
      }
      function te(e, t){
        return l(this, void 0, void 0, (function(){
          var r;
          return d(this, (function(o){
            switch(o.label){
              case 0:return[
                4, n().get("/api/activities/".concat(e, "/group/").concat(t, "/intra_submission"))
              ];
              case 1:return r=o.sent(), [
                2, (0, i.camelizeKeys)(r.data)
              ]
            }
          }))
        }))
      }
      function re(e, t){
        return l(this, void 0, void 0, (function(){
          return d(this, (function(r){
            switch(r.label){
              case 0:return[
                4, n().get("/api/course/activities/".concat(e, "/students/").concat(t, "/submission"))
              ];
              case 1:return[
                2, r.sent().data
              ]
            }
          }))
        }))
      }
      function oe(e, t){
        return l(this, void 0, void 0, (function(){
          return d(this, (function(r){
            switch(r.label){
              case 0:return[
                4, n().get("/api/activities/".concat(e, "/groups/").concat(t, "/submission"))
              ];
              case 1:return[
                2, r.sent().data
              ]
            }
          }))
        }))
      }
      function ne(e, t, r, o){
        return l(this, void 0, void 0, (function(){
          var s;
          return d(this, (function(a){
            switch(a.label){
              case 0:return s=(0, i.decamelizeKeys)(t), [
                4, n().put("/api/homework/".concat(e, "/announce-mark-status"), s).then((function(e){
                  return r(e)
                })).catch((function(e){
                  return o(e)
                }))
              ];
              case 1:return a.sent(), [
                2
              ]
            }
          }))
        }))
      }
      function ie(e, t){
        return l(this, void 0, void 0, (function(){
          var r;
          return d(this, (function(o){
            switch(o.label){
              case 0:return r="/api/homework/".concat(e, "/duplicate-detect/rate?target_ids=").concat(t.join(",")), [
                4, n().get(r)
              ];
              case 1:return[
                2, o.sent().data
              ]
            }
          }))
        }))
      }
      function se(e, t){
        return l(this, void 0, void 0, (function(){
          var r, o;
          return d(this, (function(s){
            switch(s.label){
              case 0:return r=(0, i.decamelizeKeys)(t), o="/api/course/activities/".concat(e, "/submissions/correct-uploads"), [
                4, n().put(o, r)
              ];
              case 1:return[
                2, s.sent().data
              ]
            }
          }))
        }))
      }
      function ae(){
        return l(this, void 0, void 0, (function(){
          return d(this, (function(e){
            switch(e.label){
              case 0:return"/api/tencent_meeting/check-user-auth", [
                4, n().get("/api/tencent_meeting/check-user-auth")
              ];
              case 1:return[
                2, e.sent().data
              ]
            }
          }))
        }))
      }
      function ce(e){
        return l(this, void 0, void 0, (function(){
          var t, r, o;
          return d(this, (function(a){
            switch(a.label){
              case 0:return t="/api/dingtalk-lives/".concat(e, "/watch-stats"), [
                4, n().get(t)
              ];
              case 1:return r=a.sent(), o=(0, i.camelizeKeys)(r.data), [
                2, (0, s.plainToClass)(c.n, o, {
                  excludeExtraneousValues:!1
                })
              ]
            }
          }))
        }))
      }
      function ue(e, t){
        return l(this, void 0, void 0, (function(){
          var r, o;
          return d(this, (function(s){
            switch(s.label){
              case 0:return r="/api/h5-courseware/".concat(e, "/upload/").concat(t, "/url"), [
                4, n().get(r)
              ];
              case 1:return o=s.sent(), [
                2, (0, i.camelizeKeys)(o.data)
              ]
            }
          }))
        }))
      }
      function le(e, t, r){
        return l(this, void 0, void 0, (function(){
          return d(this, (function(o){
            return[
              2, n().put("/api/activities/".concat(e, "/resources/").concat(t), r)
            ]
          }))
        }))
      }
      function de(e, t, r){
        return l(this, void 0, void 0, (function(){
          var o, s, a;
          return d(this, (function(c){
            switch(c.label){
              case 0:return o=(0, i.decamelizeKeys)({
                base64State:r
              }), s="/api/h5-courseware/".concat(e, "/upload/").concat(t, "/cmi"), [
                4, n().post(s, o)
              ];
              case 1:return a=c.sent(), [
                2, (0, i.camelizeKeys)(a.data)
              ]
            }
          }))
        }))
      }
    }, 379681:(e, t, r)=>{
      r.d(t, {
        A:()=>i
      });
      var o=r(595738);
      const n=(0, o.pM)({
        props:{
          activity:{
            type:Object
          }, scope:{
            type:Object, required:!0
          }, batch:{
            type:Boolean
          }
        }, setup:function(e, t){
          var r, n=(0, o.KR)(!0), i=(null===(r=window.orgSettings)||void 0===r?void 0:r.enableLamsLessonVirtualExperiment)||!1;
          return{
            modalStatus:n, enableLamsLessonVirtualExperiment:i, confirm:function(){
              e.batch?e.scope.publishActivitiesUnderModule(e.scope.data, !1):e.scope.checkActivity(e.activity), n.value=!1
            }, cancel:function(){
              n.value=!1
            }
          }
        }
      });
      const i=(0, r(514486).A)(n, (function(){
        var e=this, t=e.$createElement, r=e._self._c||t;
        return r("Modal", {
          ref:"modal", staticClass:"publish-cancel-modal", attrs:{
            title:e.$t("activityPublish.publishCancel")
          }, scopedSlots:e._u([
            {
              key:"footer", fn:function(){
                return[
                  r("Button", {
                    attrs:{
                      type:"primary"
                    }, on:{
                      click:e.confirm
                    }
                  }, [
                    e._v(e._s(e.$t("confirm")))
                  ]), e._v(" "), r("Button", {
                    on:{
                      click:e.cancel
                    }
                  }, [
                    e._v(e._s(e.$t("cancel")))
                  ])
                ]
              }, proxy:!0
            }
          ]), model:{
            value:e.modalStatus, callback:function(t){
              e.modalStatus=t
            }, expression:"modalStatus"
          }
        }, [
          e.enableLamsLessonVirtualExperiment&&e.activity&&"virtual_experiment"===e.activity.type?[
            e._v("\n    "+e._s(e.$t("activityPublish.virtualExperimentPublishCancelTips"))+"\n  ")
          ]
          :[
            e._v("\n    "+e._s(e.$t("activityPublish.publishCancelTips"))+"\n  ")
          ]
        ], 2)
      }), [
      ], !1, null, null, null).exports
    }, 382424:(e, t, r)=>{
      r.d(t, {
        A:()=>o
      });
      const o=new(r(962893).default)
    }, 391259:(e, t, r)=>{
      r.d(t, {
        A:()=>y
      });
      r(540590), r(418665), r(335231), r(269193), r(14602);
      var o=r(595738), n=r(552979), i=r(516844), s=r(272505), a=r.n(s), c=r(731904), u=r(738645), l=r(920453), d=function(e, t, r, o){
        var n, i=arguments.length, s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t, r):o;
        if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e, t, r, o);
        else for(var a=e.length-1;
        a>=0;
        a--)(n=e[
          a
        ])&&(s=(i<3?n(s):i>3?n(t, r, s):n(t, r))||s);
        return i>3&&s&&Object.defineProperty(t, r, s), s
      }, p=function(e, t, r, o){
        return new(r||(r=Promise))((function(n, i){
          function s(e){
            try{
              c(o.next(e))
            }
            catch(e){
              i(e)
            }
          }
          function a(e){
            try{
              c(o.throw(e))
            }
            catch(e){
              i(e)
            }
          }
          function c(e){
            var t;
            e.done?n(e.value):(t=e.value, t instanceof r?t:new r((function(e){
              e(t)
            }))).then(s, a)
          }
          c((o=o.apply(e, t||[
          ])).next())
        }))
      }, v=function(e, t){
        var r, o, n, i, s={
          label:0, sent:function(){
            if(1&n[
              0
            ])throw n[
              1
            ];
            return n[
              1
            ]
          }, trys:[
          ], ops:[
          ]
        };
        return i={
          next:a(0), throw:a(1), return:a(2)
        }, "function"==typeof Symbol&&(i[
          Symbol.iterator
        ]
        =function(){
          return this
        }), i;
        function a(a){
          return function(c){
            return function(a){
              if(r)throw new TypeError("Generator is already executing.");
              for(;
              i&&(i=0, a[
                0
              ]
              &&(s=0)), s;
              )try{
                if(r=1, o&&(n=2&a[
                  0
                ]
                ?o.return:a[
                  0
                ]
                ?o.throw||((n=o.return)&&n.call(o), 0):o.next)&&!(n=n.call(o, a[
                  1
                ])).done)return n;
                switch(o=0, n&&(a=[
                  2&a[
                    0
                  ], n.value
                ]), a[
                  0
                ]){
                  case 0:case 1:n=a;
                  break;
                  case 4:return s.label++, {
                    value:a[
                      1
                    ], done:!1
                  };
                  case 5:s.label++, o=a[
                    1
                  ], a=[
                    0
                  ];
                  continue;
                  case 7:a=s.ops.pop(), s.trys.pop();
                  continue;
                  default:if(!(n=s.trys, (n=n.length>0&&n[
                    n.length-1
                  ])||6!==a[
                    0
                  ]
                  &&2!==a[
                    0
                  ])){
                    s=0;
                    continue
                  }
                  if(3===a[
                    0
                  ]
                  &&(!n||a[
                    1
                  ]
                  >n[
                    0
                  ]
                  &&a[
                    1
                  ]
                  <n[
                    3
                  ])){
                    s.label=a[
                      1
                    ];
                    break
                  }
                  if(6===a[
                    0
                  ]
                  &&s.label<n[
                    1
                  ]){
                    s.label=n[
                      1
                    ], n=a;
                    break
                  }
                  if(n&&s.label<n[
                    2
                  ]){
                    s.label=n[
                      2
                    ], s.ops.push(a);
                    break
                  }
                  n[
                    2
                  ]
                  &&s.ops.pop(), s.trys.pop();
                  continue
                }
                a=t.call(e, s)
              }
              catch(e){
                a=[
                  6, e
                ], o=0
              }
              finally{
                r=n=0
              }
              if(5&a[
                0
              ])throw a[
                1
              ];
              return{
                value:a[
                  0
                ]
                ?a[
                  1
                ]
                :void 0, done:!0
              }
            }
            ([
              a, c
            ])
          }
        }
      }, f=function(){
        function e(){
          this.sort=0
        }
        return d([
          (0, u.v)()
        ], e.prototype, "sort", void 0), d([
          (0, u.v)()
        ], e.prototype, "name", void 0), d([
          (0, u.v)()
        ], e.prototype, "description", void 0), e
      }
      ();
      const m=(0, o.pM)({
        name:"create-module-by-teaching-week-modal", i18n:n.default, props:{
          courseId:{
            type:Number
          }
        }, setup:function(e){
          var t=this, r=(0, o.KR)(!1), s=(0, i.useAngularScope)(document.querySelector("[ng-controller=SyllabusCtrl]")), u=(0, o.KR)(!1), d=(0, o.KR)([
          ]), m=(0, o.KR)([
          ]), y=[
            {
              type:"selection", width:60, align:"center"
            }, {
              title:n.default.t("addModuleByTeachingWeek.week"), key:"name", width:"140px"
            }, {
              title:n.default.t("addModuleByTeachingWeek.description"), key:"description"
            }
          ], h=(0, o.EW)((function(){
            return 0===m.value.length
          })), g=function(){
            r.value=!1
          };
          return(0, o.sV)((function(){
            return p(t, void 0, void 0, (function(){
              var r;
              return v(this, (function(o){
                switch(o.label){
                  case 0:return r=d, [
                    4, (n=e.courseId, p(t, void 0, void 0, (function(){
                      var e;
                      return v(this, (function(t){
                        switch(t.label){
                          case 0:return[
                            4, a().get("/api/courses/".concat(n, "/teaching-weeks"))
                          ];
                          case 1:return e=t.sent(), [
                            2, (0, l.plainToClass)(f, e.data.items)
                          ]
                        }
                      }))
                    })))
                  ];
                  case 1:return r.value=o.sent(), [
                    2
                  ]
                }
                var n
              }))
            }))
          })), {
            cancel:g, saveModule:function(){
              return p(t, void 0, void 0, (function(){
                var r, o;
                return v(this, (function(i){
                  switch(i.label){
                    case 0:return u.value=!0, r=c._.map(m.value, (function(e){
                      return"".concat(e.name, "：").concat(e.description)
                    })), [
                      4, (l=e.courseId, d={
                        module_names:r
                      }, p(t, void 0, void 0, (function(){
                        return v(this, (function(e){
                          switch(e.label){
                            case 0:return[
                              4, a().post("/api/course/".concat(l, "/modules"), d)
                            ];
                            case 1:return[
                              2, e.sent().data
                            ]
                          }
                        }))
                      })))
                    ];
                    case 1:return o=i.sent(), s.createModuleByTeachingWeekSuccessCallback(o), g(), c.Toast.success(n.default.t("save_success")), [
                      2
                    ]
                  }
                  var l, d
                }))
              }))
            }, handleSelectionChange:function(e){
              m.value=e
            }, loading:u, visible:r, columns:y, teachingWeeks:d, disableSave:h
          }
        }
      });
      const y=(0, r(514486).A)(m, (function(){
        var e=this, t=e.$createElement, r=e._self._c||t;
        return r("Modal", {
          ref:"modal", attrs:{
            title:e.$t("addModuleByTeachingWeek.title"), width:800
          }, model:{
            value:e.visible, callback:function(t){
              e.visible=t
            }, expression:"visible"
          }
        }, [
          r("div", {
            staticClass:"teaching-weeks-table"
          }, [
            r("Table", {
              attrs:{
                border:"", columns:e.columns, data:e.teachingWeeks
              }, on:{
                "on-selection-change":e.handleSelectionChange
              }
            })
          ], 1), e._v(" "), r("div", {
            attrs:{
              slot:"footer"
            }, slot:"footer"
          }, [
            r("div", {
              staticClass:"form-footer-container"
            }, [
              r("Button", {
                staticClass:"btn-primary btn-default", attrs:{
                  type:"primary", loading:e.loading, disabled:e.disableSave
                }, on:{
                  click:e.saveModule
                }
              }, [
                e._v("\n        "+e._s(e.$t("save"))+"\n      ")
              ]), e._v(" "), r("Button", {
                staticClass:"btn-primary btn-default form-cancel-btn", on:{
                  click:e.cancel
                }
              }, [
                e._v(e._s(e.$t("cancel")))
              ])
            ], 1)
          ])
        ])
      }), [
      ], !1, null, "170759ea", null).exports
    }, 392445:(e, t, r)=>{
      r.d(t, {
        A:()=>o
      });
      const o=new(r(962893).default)
    }, 464649:(e, t, r)=>{
      r.d(t, {
        AY:()=>h, B9:()=>m, Dx:()=>v, I8:()=>y, Id:()=>f, e9:()=>g, gx:()=>p, mS:()=>l, ni:()=>d
      });
      r(540590), r(418665), r(269193), r(14602);
      var o=r(272505), n=r.n(o), i=r(218831), s=r(920453), a=r(205057), c=function(e, t, r, o){
        return new(r||(r=Promise))((function(n, i){
          function s(e){
            try{
              c(o.next(e))
            }
            catch(e){
              i(e)
            }
          }
          function a(e){
            try{
              c(o.throw(e))
            }
            catch(e){
              i(e)
            }
          }
          function c(e){
            var t;
            e.done?n(e.value):(t=e.value, t instanceof r?t:new r((function(e){
              e(t)
            }))).then(s, a)
          }
          c((o=o.apply(e, t||[
          ])).next())
        }))
      }, u=function(e, t){
        var r, o, n, i, s={
          label:0, sent:function(){
            if(1&n[
              0
            ])throw n[
              1
            ];
            return n[
              1
            ]
          }, trys:[
          ], ops:[
          ]
        };
        return i={
          next:a(0), throw:a(1), return:a(2)
        }, "function"==typeof Symbol&&(i[
          Symbol.iterator
        ]
        =function(){
          return this
        }), i;
        function a(a){
          return function(c){
            return function(a){
              if(r)throw new TypeError("Generator is already executing.");
              for(;
              i&&(i=0, a[
                0
              ]
              &&(s=0)), s;
              )try{
                if(r=1, o&&(n=2&a[
                  0
                ]
                ?o.return:a[
                  0
                ]
                ?o.throw||((n=o.return)&&n.call(o), 0):o.next)&&!(n=n.call(o, a[
                  1
                ])).done)return n;
                switch(o=0, n&&(a=[
                  2&a[
                    0
                  ], n.value
                ]), a[
                  0
                ]){
                  case 0:case 1:n=a;
                  break;
                  case 4:return s.label++, {
                    value:a[
                      1
                    ], done:!1
                  };
                  case 5:s.label++, o=a[
                    1
                  ], a=[
                    0
                  ];
                  continue;
                  case 7:a=s.ops.pop(), s.trys.pop();
                  continue;
                  default:if(!(n=s.trys, (n=n.length>0&&n[
                    n.length-1
                  ])||6!==a[
                    0
                  ]
                  &&2!==a[
                    0
                  ])){
                    s=0;
                    continue
                  }
                  if(3===a[
                    0
                  ]
                  &&(!n||a[
                    1
                  ]
                  >n[
                    0
                  ]
                  &&a[
                    1
                  ]
                  <n[
                    3
                  ])){
                    s.label=a[
                      1
                    ];
                    break
                  }
                  if(6===a[
                    0
                  ]
                  &&s.label<n[
                    1
                  ]){
                    s.label=n[
                      1
                    ], n=a;
                    break
                  }
                  if(n&&s.label<n[
                    2
                  ]){
                    s.label=n[
                      2
                    ], s.ops.push(a);
                    break
                  }
                  n[
                    2
                  ]
                  &&s.ops.pop(), s.trys.pop();
                  continue
                }
                a=t.call(e, s)
              }
              catch(e){
                a=[
                  6, e
                ], o=0
              }
              finally{
                r=n=0
              }
              if(5&a[
                0
              ])throw a[
                1
              ];
              return{
                value:a[
                  0
                ]
                ?a[
                  1
                ]
                :void 0, done:!0
              }
            }
            ([
              a, c
            ])
          }
        }
      }, l=function(e, t, r){
        return c(void 0, void 0, void 0, (function(){
          var o, c, l, d, p, v;
          return u(this, (function(u){
            switch(u.label){
              case 0:return o="id,name,course_code,instructors(id,name),cover,created_user(id,name)", (null===(v=window.featureToggles)||void 0===v?void 0:v.airCreditManage)&&(o+=",credit_state(status,credit_remaining)"), c=(0, i.decamelizeKeys)({
                page:e, pageSize:t, conditions:r, fields:o
              }), [
                4, n().post("/api/my-courses", c)
              ];
              case 1:return l=u.sent(), d=(0, i.camelizeKeys)(l.data), p=(0, s.plainToClass)(a.$J, d.courses), [
                2, {
                  page:e, pageSize:t, pages:d.pages, total:d.total, start:d.start, end:d.end, items:p
                }
              ]
            }
          }))
        }))
      }, d=function(e, t, r, o){
        return void 0===o&&(o=!1), c(void 0, void 0, void 0, (function(){
          return u(this, (function(s){
            return[
              2, n().post("/api/blueprint/".concat(e, "/sync"), (0, i.decamelizeKeys)({
                sources:t, targetCourseIds:r, publish:o
              }))
            ]
          }))
        }))
      }, p=function(e){
        return c(void 0, void 0, void 0, (function(){
          return u(this, (function(t){
            return[
              2, n().delete("/api/blueprint/".concat(e))
            ]
          }))
        }))
      }, v=function(e, t, r){
        return c(void 0, void 0, void 0, (function(){
          var o;
          return u(this, (function(c){
            switch(c.label){
              case 0:return[
                4, n().get("/api/blueprint/".concat(e, "/sub-items"), {
                  params:{
                    type:r, id:t
                  }
                })
              ];
              case 1:return o=c.sent(), [
                2, (0, s.plainToClass)(a.GB, (0, i.camelizeKeys)(o.data.items))
              ]
            }
          }))
        }))
      }, f=function(e, t, r){
        return c(void 0, void 0, void 0, (function(){
          var o, i;
          return u(this, (function(s){
            switch(s.label){
              case 0:return[
                4, n().get("/api/blueprint/".concat(e, "/sub-items-count"), {
                  params:{
                    activities:JSON.stringify([
                      {
                        id:t, type:r
                      }
                    ])
                  }
                })
              ];
              case 1:return o=s.sent(), [
                2, (null===(i=o.data.items[
                  0
                ])||void 0===i?void 0:i.count)||0
              ]
            }
          }))
        }))
      }, m=function(e, t){
        return c(void 0, void 0, void 0, (function(){
          return u(this, (function(r){
            return[
              2, n().post("/api/courses/".concat(e, "/publish-activities"), (0, i.decamelizeKeys)(t))
            ]
          }))
        }))
      }, y=function(e, t, r, o, s){
        return c(void 0, void 0, void 0, (function(){
          return u(this, (function(a){
            return[
              2, n().delete("/api/blueprint/".concat(e, "/activities/").concat(t, "/cancel-sync"), {
                data:(0, i.decamelizeKeys)({
                  targetCourseId:o, id:s, type:r
                })
              })
            ]
          }))
        }))
      }, h=function(e, t, r){
        return c(void 0, void 0, void 0, (function(){
          var o, c, l;
          return u(this, (function(u){
            switch(u.label){
              case 0:return[
                4, n().get("/api/blueprint/".concat(e, "/").concat(r, "/").concat(t, "/submitted-info"))
              ];
              case 1:return o=u.sent(), c=(0, s.plainToClass)(a.c$, (0, i.camelizeKeys)(o.data.unable_sync)), l=(0, s.plainToClass)(a.c$, (0, i.camelizeKeys)(o.data.need_sync)), [
                2, {
                  unableSyncInfos:c, needSyncInfos:l
                }
              ]
            }
          }))
        }))
      }, g=function(e, t, r){
        return c(void 0, void 0, void 0, (function(){
          return u(this, (function(o){
            return[
              2, n().post("/api/blueprint/".concat(e, "/").concat(r, "/").concat(t, "/sync-subject"))
            ]
          }))
        }))
      }
    }, 465857:(e, t, r)=>{
      var o=r(302543);
      e.exports=[
        "$http", "toastr", function(e, t){
          return{
            getMyGroup(t, r){
              var n=arguments.length>2&&void 0!==arguments[
                2
              ]
              ?arguments[
                2
              ]
              :o.noop;
              return e.get("/api/group-sets/".concat(t, "/group")).success(r).error(n)
            }, getGroupSets(r){
              var o=arguments.length>1&&void 0!==arguments[
                1
              ]
              ?arguments[
                1
              ]
              :null, n=arguments.length>2?arguments[
                2
              ]
              :void 0, i={
              };
              return null!=o&&(i.preload_id=o), e.get("/api/courses/".concat(r, "/group-sets"), {
                params:i
              }).success(n).error(t.decorateError())
            }, getGroupSet:(r, o)=>e.get("/api/group-sets/".concat(r)).success(o).error(t.decorateError()), addGroupSet(r, n, i){
              var s=arguments.length>3&&void 0!==arguments[
                3
              ]
              ?arguments[
                3
              ]
              :o.noop;
              return e.post("/api/courses/".concat(r, "/group-sets"), n).success(i).error(t.decorateError(s))
            }, updateGroupSet(r, n, i){
              var s=arguments.length>3&&void 0!==arguments[
                3
              ]
              ?arguments[
                3
              ]
              :o.noop;
              return e.put("/api/group-sets/".concat(r), n).success(i).error(t.decorateError(s))
            }, deleteGroupSet:(r, o)=>e.delete("/api/group-sets/".concat(r)).success(o).error(t.decorateError()), copyGroupSet(r, n, i, s){
              var a=arguments.length>4&&void 0!==arguments[
                4
              ]
              ?arguments[
                4
              ]
              :o.noop;
              return e.post("/api/courses/".concat(r, "/group-sets/").concat(n, "/copy"), {
                name:i
              }).success(s).error(t.decorateError(a))
            }, getStudents(r, o){
              var n=arguments.length>3&&void 0!==arguments[
                3
              ]
              ?arguments[
                3
              ]
              :null, i={
                ignore_avatar:arguments.length>2&&void 0!==arguments[
                  2
                ]
                &&arguments[
                  2
                ]
              };
              return n&&(i.fields=n), e.get("/api/course/".concat(r, "/students"), {
                params:i
              }).success(o).error(t.decorateError())
            }, getEnrollments:(r, o)=>e.post("/api/course/".concat(r, "/enrollments")).success(o).error(t.decorateError()), getGroups(t, r){
              var n=arguments.length>2&&void 0!==arguments[
                2
              ]
              ?arguments[
                2
              ]
              :o.noop, i=arguments.length>3&&void 0!==arguments[
                3
              ]
              ?arguments[
                3
              ]
              :null, s={
              };
              return i&&(s.fields=i), e.get("/api/group-sets/".concat(t, "/groups"), {
                params:s
              }).success(r).error(n)
            }, updateGroup(r, n, i){
              var s=arguments.length>3&&void 0!==arguments[
                3
              ]
              ?arguments[
                3
              ]
              :o.noop;
              return e.put("/api/groups/".concat(r.id), n).success(t.decorateSuccess(i)).error(t.decorateError(s))
            }, addGroupMembers(r, n, i){
              var s=arguments.length>3&&void 0!==arguments[
                3
              ]
              ?arguments[
                3
              ]
              :o.noop;
              return e.put("/api/groups/".concat(r.id, "/members"), n).success(t.decorateSuccess(i)).error(t.decorateError(s))
            }, deleteGroupMember(r, n, i){
              var s=arguments.length>3&&void 0!==arguments[
                3
              ]
              ?arguments[
                3
              ]
              :o.noop;
              return e.delete("/api/groups/".concat(r.id, "/members/").concat(n.id)).success(t.decorateSuccess(i)).error(t.decorateError(s))
            }, updateGroupMember(r, n, i, s){
              var a=arguments.length>4&&void 0!==arguments[
                4
              ]
              ?arguments[
                4
              ]
              :o.noop;
              return e.put("/api/groups/".concat(r.id, "/members/").concat(n.id), i).success(t.decorateSuccess(s)).error(t.decorateError(a))
            }, updateGroupInfo(r, n, i){
              var s=arguments.length>3&&void 0!==arguments[
                3
              ]
              ?arguments[
                3
              ]
              :o.noop;
              return e.put("/api/groups/".concat(r, "/info"), n).success(t.decorateSuccess(i)).error(t.decorateError(s))
            }, addGroup(r, n, i){
              var s=arguments.length>3&&void 0!==arguments[
                3
              ]
              ?arguments[
                3
              ]
              :o.noop;
              return e.post("/api/group-sets/".concat(r, "/groups"), n).success(t.decorateSuccess(i)).error(t.decorateError(s))
            }, deleteGroup(r, n){
              var i=arguments.length>2&&void 0!==arguments[
                2
              ]
              ?arguments[
                2
              ]
              :o.noop;
              return e.delete("/api/groups/".concat(r.id)).success(t.decorateSuccess(n)).error(t.decorateError(i))
            }, sortGroups(r, n, i){
              var s=arguments.length>3&&void 0!==arguments[
                3
              ]
              ?arguments[
                3
              ]
              :o.noop;
              return e.put("/api/group-sets/".concat(r.id, "/sort"), {
                groupsSorting:n
              }).success(t.decorateSuccess(i)).error(t.decorateError(s))
            }, uploadFileToGroup(r, n, i){
              var s=arguments.length>3&&void 0!==arguments[
                3
              ]
              ?arguments[
                3
              ]
              :o.noop;
              return e.put("/api/groups/".concat(r.id, "/upload"), {
                uploads:n
              }).success(t.decorateSuccess(i)).error(t.decorateError(s))
            }, deleteFile(r, n, i){
              var s=arguments.length>3&&void 0!==arguments[
                3
              ]
              ?arguments[
                3
              ]
              :o.noop;
              return e.delete("/api/groups/".concat(r.id, "/upload/").concat(n.reference_id)).success(t.decorateSuccess(i)).error(t.decorateError(s))
            }, batchDownload(r, n){
              var i=arguments.length>2&&void 0!==arguments[
                2
              ]
              ?arguments[
                2
              ]
              :o.noop;
              return e.post("/api/uploads/batch/blob", {
                id:r
              }).success(n).error(t.decorateError(i))
            }, sendBatchDownload(r, n, i){
              var s=arguments.length>3&&void 0!==arguments[
                3
              ]
              ?arguments[
                3
              ]
              :o.noop;
              return e.post(r, {
                data:n
              }).success(i).error(t.decorateError(s))
            }, randomGrouping(r, n, i){
              var s=arguments.length>3&&void 0!==arguments[
                3
              ]
              ?arguments[
                3
              ]
              :o.noop;
              return e.post("/api/group-sets/".concat(r, "/random-grouping"), n).success(t.decorateSuccess(i)).error(t.decorateError(s))
            }, exportCourseGroupSetInfoToExcel(r, n){
              var i=arguments.length>2&&void 0!==arguments[
                2
              ]
              ?arguments[
                2
              ]
              :o.noop;
              return e({
                url:"/api/courses/".concat(r, "/group-sets/export/excel"), method:"GET", responseType:"arraybuffer"
              }).success(t.decorateSuccess(n)).error(t.decorateError(i))
            }, exportGroupSetInfoToExcel(r, n){
              var i=arguments.length>2&&void 0!==arguments[
                2
              ]
              ?arguments[
                2
              ]
              :o.noop;
              return e({
                url:"/api/group-sets/".concat(r, "/export/excel"), method:"GET", responseType:"arraybuffer"
              }).success(t.decorateSuccess(n)).error(t.decorateError(i))
            }, getGroupsSubmissionStatusOfUser(r, n){
              var i=arguments.length>2&&void 0!==arguments[
                2
              ]
              ?arguments[
                2
              ]
              :o.noop;
              return e.get("/api/courses/".concat(r, "/groups/submission-status")).success(n).error(t.decorateError(i))
            }, getActivitiesByGroupSet(r, n){
              var i=arguments.length>2&&void 0!==arguments[
                2
              ]
              ?arguments[
                2
              ]
              :o.noop;
              return e.get("/api/group-sets/".concat(r, "/activities")).success(n).error(t.decorateError(i))
            }, getTeachingTeamGroups(t, r){
              var n=arguments.length>2&&void 0!==arguments[
                2
              ]
              ?arguments[
                2
              ]
              :o.noop;
              return e.get("/api/courses/".concat(t, "/teaching-team/groups")).success(r).error(n)
            }
          }
        }
      ]
    }, 489491:(e, t, r)=>{
      r.d(t, {
        A:()=>d
      });
      var o=r(962893), n=r(695353), i=r(590815), s=r(82240), a=r(755805);
      function c(e, t){
        var r=Object.keys(e);
        if(Object.getOwnPropertySymbols){
          var o=Object.getOwnPropertySymbols(e);
          t&&(o=o.filter((function(t){
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, o)
        }
        return r
      }
      function u(e){
        for(var t=1;
        t<arguments.length;
        t++){
          var r=null!=arguments[
            t
          ]
          ?arguments[
            t
          ]
          :{
          };
          t%2?c(Object(r), !0).forEach((function(t){
            l(e, t, r[
              t
            ])
          })):Object.getOwnPropertyDescriptors?Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }
      function l(e, t, r){
        return t in e?Object.defineProperty(e, t, {
          value:r, enumerable:!0, configurable:!0, writable:!0
        }):e[
          t
        ]
        =r, e
      }
      o.default.use(n.Ay);
      const d=new n.Ay.Store(u(u({
      }, i.A), {
      }, {
        modules:{
          homeworkMark:s.A, airCredit:a.A
        }, strict:!1
      }))
    }, 531122:e=>{
      e.exports=[
        "$http", "toastr", function(e, t){
          return{
            getPackageCourse:function(t, r, o, n){
              var i="/api/course-packages/".concat(t, "/course");
              return r&&(i="".concat(i, "?fields=").concat(r)), e.get(i).success(o).error(n)
            }, getPackages:function(t, r, o){
              return e.get("/api/course-packages", t).success(r).error(o)
            }, editPackage:function(r, o, n, i){
              return e.put("/api/course-packages/".concat(r), o).success(t.decorateSuccess(n)).error(t.decorateError(i))
            }, deletePackages:function(r, o, n){
              return e.delete("/api/course-packages", r).success(t.decorateSuccess(o)).error(t.decorateError(n))
            }, createPackage:function(r, o, n, i){
              return e.post("/api/courses/".concat(r, "/course-package"), o).success(n).error(t.decorateError(i))
            }, importCourse:function(r, o, n, i){
              return e.post("/api/course-packages/".concat(r, "/import"), o).success(n).error(t.decorateError(i))
            }
          }
        }
      ]
    }, 533636:(e, t, r)=>{
      var o=r(756029), n=r(305508);
      o.module("syllabus", [
        "common"
      ]).factory("syllabusApi", r(1135)).factory("classroomApi", r(612849)).factory("util", r(933446)).factory("footprint", r(544061)).factory("ExamHelper", r(715738)).factory("examRepository", r(489442)).factory("classroomRepository", r(746798)).factory("rubricRepository", r(651534)).factory("Rubric", r(131828)).factory("Course", r(653944)).factory("moduleRepository", r(43588)).factory("groupApi", r(465857)).factory("homeworkApi", r(946650)).factory("homeworkRepository", r(429800)).factory("api", r(52340)).factory("pkgAPI", r(531122)).factory("entryContentApi", r(413976)).factory("activityService", r(647750)).factory("publishHelper", r(664011)).factory("forumApi", r(675139)).factory("forumRepository", r(722538)).factory("activityRepository", r(566117)).directive("resetable", n.resetable).directive("reveal", n.reveal).directive("closePopup", n.closePopup).controller("UserCheckpointActivityController", r(22033)).controller("SyllabusCourseController", r(150296)).controller("ModuleCtrl", r(639012)).controller("NewModuleCtrl", r(838215)).controller("EditModuleCtrl", r(637077)).controller("ShowModuleCtrl", r(869536)).controller("SyllabusCtrl", r(215698)).controller("ToolbarCtrl", r(308316)).controller("EditSyllabusCtrl", r(204893)).controller("WebLinkController", r(690561)).controller("WebLinkScoreController", r(869160)).controller("ActivityListController", r(82246)).controller("ActivityItemController", r(975635)).controller("AddActivityController", r(841151)).controller("UploadEsignController", r(261019)).controller("MaterialController", r(798233)).controller("QuestionnaireActivityController", r(964457)).controller("ScormController", r(743130)).controller("HomeworkActivityCtrl", r(618478)).controller("AddOrEditRubricPopupController", r(308227)).controller("ForumController", r(781757)).controller("OnlineVideoController", r(162145)).controller("RollCallController", r(41546)).controller("InteractionActivityController", r(261656)).controller("RubricController", r(905519)).controller("SlideController", r(203225)).controller("LessonController", r(494324)).controller("LessonControllerTca", r(205589)).controller("ChatroomController", r(857465)).controller("PageController", r(163295)).controller("ActivitySelectStudentController", r(550010)).controller("ExamController", r(138566)).controller("ExamActivityEditController", r(153645)).controller("ClassroomController", r(925789)).controller("EditClassroomController", r(154383)).controller("QuestionnaireController", r(835774)).controller("ActivityDeletePopupController", r(628325)).controller("VirtualClassroomController", r(73009)).controller("ZoomController", r(662175)).controller("MicrosoftTeamsMeetingController", r(717079)).controller("GoogleMeetingController", r(196339)).controller("WelinkController", r(954970)).controller("TencentMeetingController", r(36375)).controller("SelectStudentController", r(963880)).controller("RaceAnswerController", r(724218)).controller("CoursePkgCreateCtrl", r(49740)).controller("EntryContentController", r(530172)).controller("VocabularyActivityController", r(656264)).controller("EntryDetailController", r(533282)).controller("VirtualExperimentController", r(438489)).controller("ActivityPublishStatusController", r(21331)).controller("SubCourseFilterController", r(356566)).controller("PublishStatusFilterController", r(97090)).controller("CourseBlockCheckpointCtrl", r(166403)).controller("WisdomMasterImportController", r(668985)).config([
        "$routeProvider", e=>e.when("/", {
          templateUrl:"syllabus/_list.html"
        }).when("/module", {
          templateUrl:"module/_main.html"
        }).otherwise({
          redirectTo:"/"
        })
      ])
    }, 534364:(e, t, r)=>{
      r.d(t, {
        A:()=>a
      });
      var o=r(716880), n=r(595738), i=r(552979);
      const s=(0, n.pM)({
        props:{
          text:{
            type:String, default:i.default.t("blueprint.noData")
          }
        }, setup:function(){
          return{
            svg:o
          }
        }
      });
      const a=(0, r(514486).A)(s, (function(){
        var e=this, t=e.$createElement, r=e._self._c||t;
        return r("div", {
          staticClass:"no-data-div"
        }, [
          r("img", {
            attrs:{
              src:e.svg, alt:""
            }
          }), e._v(" "), r("span", {
            staticClass:"no-data-tips"
          }, [
            e._v(e._s(e.text))
          ])
        ])
      }), [
      ], !1, null, "35c3bc72", null).exports
    }, 539963:(e, t, r)=>{
      r.d(t, {
        $D:()=>u, bC:()=>c, df:()=>a, eg:()=>s, vB:()=>l
      });
      var o=r(552979), n=r(795093), i=(e, t)=>{
        if((e=>{
          e.make_up_record&&(e.make_up_record.is_closed=n()>n(e.make_up_record.closed_time)), e.resubmit_record&&(e.resubmit_record.is_closed=n()>n(e.resubmit_record.closed_time))
        })(t), !t.resubmit_record&&!t.make_up_record)return"";
        if(!t.resubmit_record&&t.make_up_record)return"makeUp";
        if(!t.make_up_record&&e)return"resubmit";
        if(!e)return"makeUp";
        var r=t.make_up_record.updated_at||t.make_up_record.created_at, o=t.resubmit_record.updated_at||t.resubmit_record.created_at;
        return r>=o?"makeUp":r<o?"resubmit":""
      };
      function s(e, t){
        var r={
          isMarked:null, submitStatus:""
        };
        r.isMarked="marked"===t.mark;
        var n=i(e, t);
        return t.markedSubmitted&&[
          "makeUp", "resubmit"
        ].includes(n)?(r.submitStatus=o.default.t("homework.makeUp"), r):r
      }
      function a(e){
        var t=e.submission_correct;
        return t.instructor_score||t.comment
      }
      function c(e){
        return(!e.submit_by_instructor||e.marked_submitted)&&!e.is_draft&&!e.is_redo
      }
      function u(e){
        return e.submit_by_instructor&&!e.is_draft
      }
      function l(e){
        return e.final_score||e.submission_correct.instructor_score||e.submission_correct.comment?"marked":"unmarked"
      }
    }, 544061:e=>{
      e.exports=[
        "$http", e=>({
          tread:t=>(t.scope||(t.scope="course"), t.scope||(t.target_type="course"), e.post("/api/footprint/tread", t).success((function(){
          })).error((function(){
          })))
        })
      ]
    }, 547200:(e, t, r)=>{
      r(533636)
    }, 606913:(e, t, r)=>{
      r.r(t), r.d(t, {
        deleteInteraction:()=>c, getCourseUsers:()=>a, getDanmuActivity:()=>i, getDanmuConfig:()=>s
      });
      var o=r(272505), n=r.n(o), i=function(e, t){
        return n().get("/api/courses/interactions/".concat(e, "?conditions=").concat(JSON.stringify(t)))
      }, s=function(e){
        return n().get("/api/courses/danmu/".concat(e, "/config"))
      }, a=function(e, t){
        return n().post("/api/course/".concat(e, "/enrollments"), t)
      }, c=function(e){
        return n().delete("/api/interactions/".concat(e))
      }
    }, 612849:(e, t, r)=>{
      var o=r(302543);
      e.exports=[
        "$http", "toastr", function(e, t){
          return{
            initClassroomsWithPage(r, n, i){
              var s=arguments.length>3&&void 0!==arguments[
                3
              ]
              ?arguments[
                3
              ]
              :o.noop, a="/api/courses/".concat(r, "/classroom-list");
              return e.get(a, {
                params:n
              }).success(t.decorateSuccess(i)).error(t.decorateError(s))
            }, deleteClassroom(r, n){
              var i=arguments.length>2&&void 0!==arguments[
                2
              ]
              ?arguments[
                2
              ]
              :o.noop;
              return e.delete("/api/classrooms/".concat(r)).success(t.decorateSuccess(n)).error(t.decorateError(i))
            }, startClassroom(r, n){
              var i=arguments.length>2&&void 0!==arguments[
                2
              ]
              ?arguments[
                2
              ]
              :o.noop;
              return e.put("/api/classrooms/".concat(r, "/status"), {
                status:1
              }).success(t.decorateSuccess(n)).error(t.decorateError(i))
            }, finishClassroom(r, n){
              var i=arguments.length>2&&void 0!==arguments[
                2
              ]
              ?arguments[
                2
              ]
              :o.noop;
              return e.put("/api/classrooms/".concat(r, "/status"), {
                status:2
              }).success(t.decorateSuccess(n)).error(t.decorateError(i))
            }, updateClassroomSubjectStatus(r, n, i, s){
              var a=arguments.length>4&&void 0!==arguments[
                4
              ]
              ?arguments[
                4
              ]
              :o.noop;
              return e.put("/api/classrooms/".concat(r, "/subjects/").concat(n, "/status"), {
                status:i
              }).success(t.decorateSuccess(s)).error(t.decorateError(a))
            }, saveClassroomSubjects:(t, r, o, n)=>e.post("/api/classroom-exams/".concat(t, "/subjects"), r).success(o).error(n), getClassroomExam(t, r){
              var n=arguments.length>2&&void 0!==arguments[
                2
              ]
              ?arguments[
                2
              ]
              :o.noop;
              return e.get("/api/classroom-exams/".concat(t)).success(r).error(n)
            }, getFeedbackActivity(t, r){
              var n=arguments.length>2&&void 0!==arguments[
                2
              ]
              ?arguments[
                2
              ]
              :o.noop;
              return e.get("/api/feedback-activities/".concat(t)).success(r).error(n)
            }, getSubjectsRule(t, r){
              var n=arguments.length>2&&void 0!==arguments[
                2
              ]
              ?arguments[
                2
              ]
              :o.noop;
              return e.get("/api/classroom/".concat(t, "/subjects-rule")).success(r).error(n)
            }, getSubjects(t, r){
              var n=arguments.length>2&&void 0!==arguments[
                2
              ]
              ?arguments[
                2
              ]
              :o.noop;
              return e.get("/api/classroom/".concat(t, "/subject")).success(r).error(n)
            }, getSubjectsWithStatInfo(t, r){
              var n=arguments.length>2&&void 0!==arguments[
                2
              ]
              ?arguments[
                2
              ]
              :o.noop;
              return e.get("/api/classrooms/".concat(t, "/subjects-stat")).success(r).error(n)
            }, getMySubmissions(t, r){
              var n=arguments.length>2&&void 0!==arguments[
                2
              ]
              ?arguments[
                2
              ]
              :o.noop;
              return e.get("/api/classroom-exams/".concat(t, "/my-submissions")).success(r).error(n)
            }, getClassroomExamSubmissions(t, r, n){
              var i=arguments.length>3&&void 0!==arguments[
                3
              ]
              ?arguments[
                3
              ]
              :o.noop;
              return e.get("/api/classroom-exams/".concat(t, "/submissions/").concat(r)).success(n, i)
            }, getExaminees(t, r){
              var n=arguments.length>2&&void 0!==arguments[
                2
              ]
              ?arguments[
                2
              ]
              :o.noop, i=arguments.length>3&&void 0!==arguments[
                3
              ]
              &&arguments[
                3
              ], s=arguments.length>4&&void 0!==arguments[
                4
              ]
              ?arguments[
                4
              ]
              :null;
              if(null!==s){
                var a={
                  examinee_ids:s
                };
                return e.get("/api/classroom-exams/".concat(t, "/score-list?ignore_avatar=").concat(i, "&conditions=").concat(JSON.stringify(a))).success(r).error(n)
              }
              return e.get("/api/classroom-exams/".concat(t, "/score-list?ignore_avatar=").concat(i)).success(r).error(n)
            }, createFeedback(t, r, n){
              var i=arguments.length>3&&void 0!==arguments[
                3
              ]
              ?arguments[
                3
              ]
              :o.noop;
              return e.post("/api/feedback-activities/".concat(t, "/feedbacks"), r).success(n).error(i)
            }, updateFeedback(t, r, n, i){
              var s=arguments.length>4&&void 0!==arguments[
                4
              ]
              ?arguments[
                4
              ]
              :o.noop;
              return e.put("/api/feedback-activities/".concat(t, "/feedbacks/").concat(r), n).success(i).error(s)
            }, deleteFeedback(t, r){
              var n=arguments.length>2&&void 0!==arguments[
                2
              ]
              ?arguments[
                2
              ]
              :o.noop;
              return e.delete("/api/feedbacks/".concat(t)).success(r).error(n)
            }, batchDeleteClassroomSubjects(t, r){
              var o="/api/classroom-exams/".concat(t, "/subjects/batch_delete");
              return e.delete(o, {
                data:r, headers:{
                  "Content-Type":"application/json"
                }
              }).then((e=>e.data))
            }, getExamineesList(t, r){
              var n=arguments.length>2&&void 0!==arguments[
                2
              ]
              ?arguments[
                2
              ]
              :o.noop;
              return e.get("/api/classroom-exams/".concat(t, "/examinees")).success(r).error(n)
            }, getSubmissionCountStatus(t, r){
              var n=arguments.length>2&&void 0!==arguments[
                2
              ]
              ?arguments[
                2
              ]
              :o.noop;
              return e.get("/api/classroom-exams/".concat(t, "/submission-count-status")).success(r).error(n)
            }
          }
        }
      ]
    }, 622571:(e, t, r)=>{
      r.r(t), r.d(t, {
        syncItem:()=>d, syncedInfo:()=>p
      });
      r(269193);
      var o=r(592207), n=r.n(o), i=(r(207452), r(962893)), s=r(552979);
      function a(e, t, r, o, n, i, s){
        try{
          var a=e[
            i
          ]
          (s), c=a.value
        }
        catch(e){
          return void r(e)
        }
        a.done?t(c):Promise.resolve(c).then(o, n)
      }
      function c(e){
        return function(){
          var t=this, r=arguments;
          return new Promise((function(o, n){
            var i=e.apply(t, r);
            function s(e){
              a(i, o, n, s, c, "next", e)
            }
            function c(e){
              a(i, o, n, s, c, "throw", e)
            }
            s(void 0)
          }))
        }
      }
      var u=()=>Promise.all([
        r.e(42858), r.e(95738), r.e(339), r.e(97786), r.e(40827)
      ]).then(r.bind(r, 940827)), l=()=>Promise.all([
        r.e(95738), r.e(52032), r.e(40204), r.e(93610)
      ]).then(r.bind(r, 740204)), d=function(){
        var e=c(n().mark((function e(t){
          var r, o;
          return n().wrap((function(e){
            for(;
            ;
            )switch(e.prev=e.next){
              case 0:return r=t.source, o=t.courseId, e.t0=i.default.prototype.$Modal, e.next=4, l();
              case 4:e.t1=e.sent.default, e.t2={
                sources:[
                  {
                    type:r.type, id:r.id
                  }
                ], courseId:o, isSingleSync:!0, title:s.default.t("blueprint.addSyncedClass")
              }, e.t0.show.call(e.t0, e.t1, e.t2);
              case 7:case"end":return e.stop()
            }
          }), e)
        })));
        return function(t){
          return e.apply(this, arguments)
        }
      }
      (), p=function(){
        var e=c(n().mark((function e(t){
          var r, o, s;
          return n().wrap((function(e){
            for(;
            ;
            )switch(e.prev=e.next){
              case 0:return r=t.source, o=t.courseId, s=t.subCourseCount, e.t0=i.default.prototype.$Modal, e.next=4, u();
              case 4:e.t1=e.sent.default, e.t2={
                source:r, courseId:o, subCourseCount:s
              }, e.t0.show.call(e.t0, e.t1, e.t2);
              case 7:case"end":return e.stop()
            }
          }), e)
        })));
        return function(t){
          return e.apply(this, arguments)
        }
      }
      ()
    }, 637077:(e, t, r)=>{
      var o=r(571478);
      e.exports=[
        "$scope", "$rootScope", "moduleRepository", "toastr", function(e, t, r, n){
          var i=o(e), s=e.module;
          return e.module=t.copiedModule, e.cancel=()=>s.inEdit=!1, e.save=function(){
            return i.show(), r.updateModule(e.module, (function(){
              return s.inEdit=!1, i.hide()
            }), (function(t, r){
              return 400===r?e.errors=t.errors:n.warning(), i.hide()
            }))
          }
        }
      ]
    }, 639012:e=>{
      e.exports=[
        "$scope", "moduleRepository", "activityRepository", function(e, t, r){
          return e.resort=(e, r)=>t.exchangeModule(e, r, (function(){
          }), (function(){
          })), r.initCourseAndModules().then((t=>e.course=t))
        }
      ]
    }, 640241:(e, t, r)=>{
      r(43148);
      r(795093);
      var o={
        UNPUBLISH:0, PUBLISHED:1
      };
      e.exports.PublishStatus=o;
      e.exports.filterFactory=e=>{
        var t=()=>{
          var t=e(), r=t.category, o=t.subCourses, n=t.publishStatus;
          return[
            "all"!==r, !(null==o||!o.length), !(null==n||!n.length)
          ].some((e=>e))
        }, r=()=>{
          var t=e(), r=t.category, n=t.subCourses, i=t.publishStatus;
          return e=>{
            return("all"===r||"material"===r&&e.type===r&&"PPT"!==e.data.material_type||"PPT"===r&&"material"===e.type&&"PPT"===e.data.material_type||"ask_question"===r&&[
              "select_student", "select_group"
            ].includes(e.type)||e.type===r)&&(!n||!n.length||(t=n, 0===(c=null!==(s=null===(a=e.data)||void 0===a?void 0:a.sub_course_ids)&&void 0!==s?s:[
            ]).length&&t.includes(0)||c.some((e=>t.includes(e)))))&&(!i||!i.length||i.includes((e=>e.published?o.PUBLISHED:o.UNPUBLISH)(e)));
            var t, s, a, c
          }
        };
        return{
          filterModule:e=>{
            if(!t())return!0;
            var o=r();
            return e.directActivities.some(o)||e.syllabuses.some((e=>e.activities.some(o)))
          }, filterSyllabus:e=>{
            if(!t())return!0;
            var o=r();
            return e.activities.some(o)
          }, filterActivity:e=>!t()||r()(e)
        }
      }
    }, 668985:(e, t, r)=>{
      var o=r(248124);
      r(640173), r(158649);
      var n=r(966491), i=r(571478), s=r(552979).default;
      e.exports=[
        "$rootScope", "$scope", "toastr", "Upload", "uploadService", function(e, t, r, a, c){
          var u=o("#courseId").val(), l=i(t);
          t.humanizeBytes=n.humanizeBytes, t.ui.error=!1;
          var d=function(){
            t.ui.error=!1
          };
          t.setUploaded=t=>e.uploaded=t, t.getUploaded=()=>e.uploaded;
          t.deleteUploaded=function(t){
            return delete e.uploaded, t.uploadSucceeded=!1
          }, t.cancel=function(){
            t.uploadPromise&&t.uploadPromise.xhr&&t.uploadPromise.xhr().abort(), d(), t.deleteUploaded(t.ui), o("#wisdom-popup").foundation("reveal", "close")
          }, t.selectFile=function(){
            return o('input[name="fileSelector"]').click(), !0
          }, t.onFileSelect=function(e, o){
            var n=[
              "xml"
            ];
            if(!(e.length<=0))if(e.length>1)r.warning(t.errorText.singleFile);
            else{
              var i=e[
                0
              ].name.split(".").pop().toLowerCase();
              if(n.includes(i)){
                if(c.checkFiles(e, o, n))return t.ui.uploadSucceeded=!0, d(), t.setUploaded(e);
                var s=o;
                "object"==typeof o&&void 0!==o.DOCUMENT&&(s=o.DOCUMENT);
                var a=c.humanizeBytes(s);
                r.warning(t.errorText.formatAndLimit.replace(/\{
                  0\
                }
                /gi, a).replace(/\{
                  1\
                }
                /gi, n))
              }
            }
          }, t.uploadXml=function(){
            l.show();
            var e=a.upload({
              url:"/api/course/".concat(u, "/content/wisdom-master-import"), data:{
                file:t.getUploaded()[
                  0
                ]
              }, method:"POST"
            });
            return t.uploadPromise=e, e.then((function(){
              l.hide(), r.success(s.t("moodleCourseImport.importedSuccess")), o("#wisdom-popup").foundation("reveal", "close"), setTimeout((function(){
                window.location.reload()
              }), 1e3)
            }), (function(e){
              l.hide(), e&&-1===e.status||(t.ui.error=!0)
            }))
          }
        }
      ]
    }, 675139:(e, t, r)=>{
      var o=r(302543);
      function n(e, t){
        var r=Object.keys(e);
        if(Object.getOwnPropertySymbols){
          var o=Object.getOwnPropertySymbols(e);
          t&&(o=o.filter((function(t){
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, o)
        }
        return r
      }
      function i(e){
        for(var t=1;
        t<arguments.length;
        t++){
          var r=null!=arguments[
            t
          ]
          ?arguments[
            t
          ]
          :{
          };
          t%2?n(Object(r), !0).forEach((function(t){
            s(e, t, r[
              t
            ])
          })):Object.getOwnPropertyDescriptors?Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }
      function s(e, t, r){
        return t in e?Object.defineProperty(e, t, {
          value:r, enumerable:!0, configurable:!0, writable:!0
        }):e[
          t
        ]
        =r, e
      }
      function a(e, t){
        if(null==e)return{
        };
        var r, o, n=function(e, t){
          if(null==e)return{
          };
          var r, o, n={
          }, i=Object.keys(e);
          for(o=0;
          o<i.length;
          o++)r=i[
            o
          ], t.indexOf(r)>=0||(n[
            r
          ]
          =e[
            r
          ]);
          return n
        }
        (e, t);
        if(Object.getOwnPropertySymbols){
          var i=Object.getOwnPropertySymbols(e);
          for(o=0;
          o<i.length;
          o++)r=i[
            o
          ], t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e, r)&&(n[
            r
          ]
          =e[
            r
          ])
        }
        return n
      }
      r(219693);
      var c=r(791936);
      e.exports=[
        "$http", "toastr", function(e, t){
          return{
            likeTopic(r, n){
              var i=arguments.length>2&&void 0!==arguments[
                2
              ]
              ?arguments[
                2
              ]
              :o.noop;
              return e.post("/api/topics/".concat(r, "/likes")).success(t.decorateSuccess(n)).error(t.decorateError(i))
            }, unlikeTopic(r, n){
              var i=arguments.length>2&&void 0!==arguments[
                2
              ]
              ?arguments[
                2
              ]
              :o.noop;
              return e.delete("/api/topics/".concat(r, "/likes")).success(t.decorateSuccess(n)).error(t.decorateError(i))
            }, likeReply(r, n){
              var i=arguments.length>2&&void 0!==arguments[
                2
              ]
              ?arguments[
                2
              ]
              :o.noop;
              return e.post("/api/replies/".concat(r, "/likes")).success(t.decorateSuccess(n)).error(t.decorateError(i))
            }, unlikeReply(r, n){
              var i=arguments.length>2&&void 0!==arguments[
                2
              ]
              ?arguments[
                2
              ]
              :o.noop;
              return e.delete("/api/replies/".concat(r, "/likes")).success(t.decorateSuccess(n)).error(t.decorateError(i))
            }, readReply(r, n){
              var i=arguments.length>2&&void 0!==arguments[
                2
              ]
              ?arguments[
                2
              ]
              :o.noop;
              return e.post("/api/replies/".concat(r, "/read")).success(t.decorateSuccess(n)).error(t.decorateError(i))
            }, unreadReply(r, n){
              var i=arguments.length>2&&void 0!==arguments[
                2
              ]
              ?arguments[
                2
              ]
              :o.noop;
              return e.delete("/api/replies/".concat(r, "/read")).success(t.decorateSuccess(n)).error(t.decorateError(i))
            }, getForumScores(t, r){
              var n=arguments.length>2&&void 0!==arguments[
                2
              ]
              ?arguments[
                2
              ]
              :o.noop;
              return e.get("/api/activities/".concat(t, "/forum-scores")).success(r).error(n)
            }, getStudentForumScore(t, r, n){
              var i=arguments.length>3&&void 0!==arguments[
                3
              ]
              ?arguments[
                3
              ]
              :o.noop;
              return e.get("/api/activities/".concat(t, "/students/").concat(r, "/forum-score")).success(n).error(i)
            }, getForumActivityTopics(t, r){
              var n=arguments.length>2&&void 0!==arguments[
                2
              ]
              ?arguments[
                2
              ]
              :o.noop;
              return e.get("/api/activities/".concat(t, "/topics")).success(r).error(n)
            }, getForumActivityTopicsByCondition(t, r){
              var o=r.user_ids, n=a(r, [
                "user_ids"
              ]), s="/api/activities/".concat(t, "/topics");
              return(null==o?void 0:o.length)>0&&(s="/api/activities/".concat(t, "/topics?user_ids=[").concat(o.join(","), "]")), e.get(s, {
                params:i({
                }, n)
              }).then((e=>e.data.topics))
            }, getTopicCategories(r){
              var o=arguments.length>1&&void 0!==arguments[
                1
              ]
              ?arguments[
                1
              ]
              :null;
              return e.get("/api/courses/".concat(r, "/topic-categories?fields=").concat(o, "&include_group_topic_categories=True")).catch(t.toastError)
            }, getTopicCategory(r){
              var o={
                fields:arguments.length>4&&void 0!==arguments[
                  4
                ]
                ?arguments[
                  4
                ]
                :null, page:arguments.length>1&&void 0!==arguments[
                  1
                ]
                ?arguments[
                  1
                ]
                :null, pageSize:arguments.length>2&&void 0!==arguments[
                  2
                ]
                ?arguments[
                  2
                ]
                :null, conditions:arguments.length>3&&void 0!==arguments[
                  3
                ]
                ?arguments[
                  3
                ]
                :null
              };
              return e.get("/api/forum/categories/".concat(r), {
                params:o
              }).catch(t.toastError)
            }, saveForumScore(t, r, n, i){
              var s=arguments.length>4&&void 0!==arguments[
                4
              ]
              ?arguments[
                4
              ]
              :o.noop;
              return e.put("/api/activities/".concat(t, "/forum-scores"), {
                student_id:r, score:n
              }).success(i).error(s)
            }, saveForumGroupScore(t, r, n, i){
              var s=arguments.length>4&&void 0!==arguments[
                4
              ]
              ?arguments[
                4
              ]
              :o.noop;
              return e.put("/api/activities/".concat(t, "/forum-scores"), {
                group_id:r, score:n
              }).success(i).error(s)
            }, exportCategoryTopics:t=>e({
              url:"/api/categories/".concat(t, "/export/excel"), method:"POST", responseType:"arraybuffer", data:{
              }
            }).success((function(e){
              statistics.track({
                activity_id:t, activity_type:"forum", action:statistics.enums.ForumAction.export, mode:statistics.enums.Mode.normal, channel:statistics.enums.Channel.web
              });
              var r=new Blob([
                e
              ], {
                type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
              });
              return c.saveAs(r, "topic_export.xlsx")
            })), exportTopic:t=>e({
              url:"/api/topics/".concat(t, "/export/excel"), method:"POST", responseType:"arraybuffer", data:{
              }
            }).success((function(e){
              var t=new Blob([
                e
              ], {
                type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
              });
              return c.saveAs(t, "topic_export.xlsx")
            })), handleForumStatus:(t, r, o, n)=>e.put("/api/activities/".concat(t, "/forum-status"), {
              enable:r
            }).success(o).error(n)
          }
        }
      ]
    }, 716880:(e, t, r)=>{
      e.exports=r.p+"assets/images/32ce719a510ad8aecf9d.svg"
    }, 722538:(e, t, r)=>{
      var o=r(248124), n=r(302543);
      function i(e, t){
        return function(e){
          if(Array.isArray(e))return e
        }
        (e)||function(e, t){
          if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;
          var r=[
          ], o=!0, n=!1, i=void 0;
          try{
            for(var s, a=e[
              Symbol.iterator
            ]
            ();
            !(o=(s=a.next()).done)&&(r.push(s.value), !t||r.length!==t);
            o=!0);
          }
          catch(e){
            n=!0, i=e
          }
          finally{
            try{
              o||null==a.return||a.return()
            }
            finally{
              if(n)throw i
            }
          }
          return r
        }
        (e, t)||function(e, t){
          if(!e)return;
          if("string"==typeof e)return s(e, t);
          var r=Object.prototype.toString.call(e).slice(8, -1);
          "Object"===r&&e.constructor&&(r=e.constructor.name);
          if("Map"===r||"Set"===r)return Array.from(e);
          if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return s(e, t)
        }
        (e, t)||function(){
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        ()
      }
      function s(e, t){
        (null==t||t>e.length)&&(t=e.length);
        for(var r=0, o=new Array(t);
        r<t;
        r++)o[
          r
        ]
        =e[
          r
        ];
        return o
      }
      r(215195), r(700533), e.exports=[
        "$q", "commonApi", "activityApi", "forumApi", "groupApi", "toastr", function(e, t, r, s, a, c){
          var u="id,sort,module_id,syllabus_id,start_time,end_time,is_started,is_closed,data,can_show_score,score_percentage,title,prerequisites,submit_by_group,group_set_id,group_set_name,imported_from,completion_criterion_key,published,is_in_progress,completion_criterion,score_item_group_id,score_item_scored", l="id,title,activity(".concat(u, "),referrer_type"), d="id,title,created_by(id,name,nickname,comment),group_id,created_at,updated_at,content,read_replies(reply_id),reply_count,unread_reply_count,like_count,current_user_read,current_user_liked,in_common_category,enrollments(roles,aliases),has_matched_replies,uploads", p="id,learning_mode,modules(id,sort,name,syllabuses(id,summary,date,module_id)),score_published,syllabus_enabled", v=null, f=null, m={
          }, y={
          }, h=function(t){
            var r=arguments.length>1&&void 0!==arguments[
              1
            ]
            &&arguments[
              1
            ], o=e.defer(), n=e=>o.resolve(e.students);
            return a.getStudents(t, n, r, null), o.promise
          }, g=function(t){
            var r=e.defer();
            return s.getForumScores(t, (e=>r.resolve(e.forum_scores)), c.decorateError()), r.promise
          }, b=function(t){
            var r=e.defer();
            return s.getForumActivityTopics(t, (e=>r.resolve(e.topics))), r.promise
          };
          return{
            toggleTopicLiked:function(e, t){
              var r, o=e=>c.warning(e.message);
              return e.current_user_liked?(r=()=>e.like_count--, s.unlikeTopic(e.id, r, o)):(t&&statistics.track({
                activity_type:"forum", activity_id:t.topic.category_id, action:statistics.enums.ForumAction.like, topic_name:t.topic.title, mode:statistics.enums.Mode.normal, channel:statistics.enums.Channel.web, sub_id:e.id
              }), r=()=>e.like_count++, s.likeTopic(e.id, r, o)), e.current_user_liked=!e.current_user_liked
            }, toggleReplyLiked:function(e, t){
              var r, o=e=>c.warning(e.message);
              return e.current_user_liked?(r=()=>e.like_count--, s.unlikeReply(e.id, r, o)):(t&&statistics.track({
                activity_type:"forum", activity_id:t.topic.category_id, action:statistics.enums.ForumAction.like, topic_name:t.topic.title, mode:statistics.enums.Mode.normal, sub_id:e.topic_id, channel:statistics.enums.Channel.web, point:1
              }), r=()=>e.like_count++, s.likeReply(e.id, r, o)), e.current_user_liked=!e.current_user_liked
            }, loadStudentForumScore:function(t){
              var r=e.defer(), n=o("#userId").data("id");
              return s.getStudentForumScore(t, n, (e=>r.resolve(e.forum_score)), c.decorateError()), r.promise
            }, loadEnrollmentsForInstructor:function(t){
              var r=e.defer();
              return e.all([
                h(t.course_id, !0), g(t.activity_id), b(t.activity_id)
              ]).then((function(){
                var e=Array.from(arguments.length<=0?void 0:arguments[
                  0
                ]), t=i(e, 3), o=t[
                  0
                ], s=t[
                  1
                ], a=t[
                  2
                ], c=[
                ];
                return n.each(o, (function(e){
                  var t=n.reduce(a, ((e, t)=>e.concat(t.replies)), [
                  ]), r={
                  };
                  r.final_score=n.find(s, {
                    student_id:e.id
                  })||{
                  }, r.student=e;
                  var o=n.filter(a, (t=>t.created_by.id===e.id));
                  r.topic_count=o.length, r.topic_liked_count=n.reduce(o, ((e, t)=>e+t.like_count), 0);
                  var i=n.filter(t, (t=>t.created_by.id===e.id));
                  return r.reply_count=i.length, r.reply_liked_count=n.reduce(i, ((e, t)=>e+t.like_count), 0), c.push(r)
                })), r.resolve(c)
              })), r.promise
            }, saveStudentScore:(e, t, r, o, n)=>s.saveForumScore(e, t, r, o, n), loadGroups:t=>m[
              t
            ]
            ?e.resolve(m[
              t
            ]):a.getGroups(t, n.noop, null, "id,name,sort,members").then((e=>(m[
              t
            ]
            =e.data.groups, m[
              t
            ]))), getTopicCategory:function(e){
              var t=arguments.length>1&&void 0!==arguments[
                1
              ]
              ?arguments[
                1
              ]
              :null, r=arguments.length>2&&void 0!==arguments[
                2
              ]
              ?arguments[
                2
              ]
              :null, o=arguments.length>3&&void 0!==arguments[
                3
              ]
              ?arguments[
                3
              ]
              :{
              }, n=arguments.length>4&&void 0!==arguments[
                4
              ]
              ?arguments[
                4
              ]
              :d;
              return s.getTopicCategory(e, t, r, o, n).then((e=>e.data))
            }, loadActivity:function(t){
              var o=arguments.length>1&&void 0!==arguments[
                1
              ]
              ?arguments[
                1
              ]
              :u;
              return y[
                t
              ]
              ?e.resolve(y[
                t
              ]):r.getActivity(t, n.noop, null, o).then((e=>(y[
                t
              ]
              =e.data, y[
                t
              ])))
            }, loadCourse:function(r){
              var o=arguments.length>1&&void 0!==arguments[
                1
              ]
              ?arguments[
                1
              ]
              :p;
              return v?e.resolve(v):t.course(r, o, n.noop, null).then((e=>v=e.data))
            }, loadTopicCategories:function(t){
              var r=arguments.length>1&&void 0!==arguments[
                1
              ]
              ?arguments[
                1
              ]
              :l;
              return f?e.resolve(f):s.getTopicCategories(t, r).then((e=>f=e.data.topic_categories))
            }, clearCachedTopicCategories:()=>{
              f=null
            }, loadForumScores:g
          }
        }
      ]
    }, 740204:(e, t, r)=>{
      r.r(t), r.d(t, {
        default:()=>m
      });
      r(540590), r(418665), r(269193), r(43148), r(14602);
      var o=r(595738), n=r(552979), i=r(464649), s=r(382424), a=r(818183), c=r(731904), u=r(957174), l=r(793022), d=r(534364), p=function(e, t, r, o){
        return new(r||(r=Promise))((function(n, i){
          function s(e){
            try{
              c(o.next(e))
            }
            catch(e){
              i(e)
            }
          }
          function a(e){
            try{
              c(o.throw(e))
            }
            catch(e){
              i(e)
            }
          }
          function c(e){
            var t;
            e.done?n(e.value):(t=e.value, t instanceof r?t:new r((function(e){
              e(t)
            }))).then(s, a)
          }
          c((o=o.apply(e, t||[
          ])).next())
        }))
      }, v=function(e, t){
        var r, o, n, i, s={
          label:0, sent:function(){
            if(1&n[
              0
            ])throw n[
              1
            ];
            return n[
              1
            ]
          }, trys:[
          ], ops:[
          ]
        };
        return i={
          next:a(0), throw:a(1), return:a(2)
        }, "function"==typeof Symbol&&(i[
          Symbol.iterator
        ]
        =function(){
          return this
        }), i;
        function a(a){
          return function(c){
            return function(a){
              if(r)throw new TypeError("Generator is already executing.");
              for(;
              i&&(i=0, a[
                0
              ]
              &&(s=0)), s;
              )try{
                if(r=1, o&&(n=2&a[
                  0
                ]
                ?o.return:a[
                  0
                ]
                ?o.throw||((n=o.return)&&n.call(o), 0):o.next)&&!(n=n.call(o, a[
                  1
                ])).done)return n;
                switch(o=0, n&&(a=[
                  2&a[
                    0
                  ], n.value
                ]), a[
                  0
                ]){
                  case 0:case 1:n=a;
                  break;
                  case 4:return s.label++, {
                    value:a[
                      1
                    ], done:!1
                  };
                  case 5:s.label++, o=a[
                    1
                  ], a=[
                    0
                  ];
                  continue;
                  case 7:a=s.ops.pop(), s.trys.pop();
                  continue;
                  default:if(!(n=s.trys, (n=n.length>0&&n[
                    n.length-1
                  ])||6!==a[
                    0
                  ]
                  &&2!==a[
                    0
                  ])){
                    s=0;
                    continue
                  }
                  if(3===a[
                    0
                  ]
                  &&(!n||a[
                    1
                  ]
                  >n[
                    0
                  ]
                  &&a[
                    1
                  ]
                  <n[
                    3
                  ])){
                    s.label=a[
                      1
                    ];
                    break
                  }
                  if(6===a[
                    0
                  ]
                  &&s.label<n[
                    1
                  ]){
                    s.label=n[
                      1
                    ], n=a;
                    break
                  }
                  if(n&&s.label<n[
                    2
                  ]){
                    s.label=n[
                      2
                    ], s.ops.push(a);
                    break
                  }
                  n[
                    2
                  ]
                  &&s.ops.pop(), s.trys.pop();
                  continue
                }
                a=t.call(e, s)
              }
              catch(e){
                a=[
                  6, e
                ], o=0
              }
              finally{
                r=n=0
              }
              if(5&a[
                0
              ])throw a[
                1
              ];
              return{
                value:a[
                  0
                ]
                ?a[
                  1
                ]
                :void 0, done:!0
              }
            }
            ([
              a, c
            ])
          }
        }
      };
      const f=(0, o.pM)({
        components:{
          NoSearchResult:d.A
        }, props:{
          courseId:{
            type:Number, required:!0
          }, title:{
            type:String, default:n.default.t("blueprint.batchSync")
          }, sources:{
            type:Array, required:!0
          }, isSingleSync:{
            type:Boolean, default:!1
          }
        }, setup:function(e){
          var t=this, r=(0, o.KR)(!1), d=(0, o.KR)("nopublish"), f=(0, o.KR)(!1), m=(0, o.KR)([
          ]), y=(0, o.KR)(!1), h=(0, o.KR)([
          ]), g=(0, o.EW)((function(){
            return h.value.length
          })), b=function(){
            var e=0===h.value.length, t=h.value.length===m.value.length&&!e;
            f.value=!!t
          };
          (0, o.wB)(h, (function(){
            b()
          }), {
            deep:!0
          });
          (0, o.wB)((function(){
            return e.sources
          }), (function(){
            p(t, void 0, void 0, (function(){
              var t, r, o;
              return v(this, (function(n){
                switch(n.label){
                  case 0:return t=0, r="", e.isSingleSync&&e.sources&&e.sources.length>0&&(t=e.sources[
                    0
                  ].id, r=e.sources[
                    0
                  ].type), [
                    4, (0, u.gW)(e.courseId, "", t, r)
                  ];
                  case 1:return o=n.sent(), m.value=(0, l.y)(o), b(), [
                    2
                  ]
                }
              }))
            })), p(t, void 0, void 0, (function(){
              var t, r, o;
              return v(this, (function(n){
                switch(n.label){
                  case 0:return(t=e.sources.filter((function(e){
                    return![
                      "feedback", "classroom", "bulletin", "course_subject_lib", "course_outline", "course_setting"
                    ].includes(e.type)
                  }))).length>0?(r=t.map((function(e){
                    return{
                      id:e.id, type:e.type
                    }
                  })), o=y, [
                    4, (0, u.rt)(e.courseId, r)
                  ]):[
                    3, 2
                  ];
                  case 1:o.value=n.sent(), n.label=2;
                  case 2:return[
                    2
                  ]
                }
              }))
            }))
          }), {
            immediate:!0
          });
          var _=(0, o.EW)((function(){
            return 1===e.sources.length&&"course_subject_lib"===e.sources[
              0
            ].type
          })), w=(0, o.EW)((function(){
            return 1===e.sources.length&&"course_outline"===e.sources[
              0
            ].type
          })), S=(0, o.EW)((function(){
            return 1===e.sources.length&&"course_setting"===e.sources[
              0
            ].type
          })), x=(0, o.EW)((function(){
            return!!e.sources&&!c._.find(e.sources, (function(e){
              return![
                "feedback", "classroom", "bulletin", "course_subject_lib", "course_outline", "course_setting"
              ].includes(e.type)
            }))
          })), C=(0, o.KR)(!1);
          return{
            indeterminate:(0, o.EW)((function(){
              return 0!==h.value.length&&!f.value
            })), publishStatus:d, selectAll:f, toggleSelectAll:function(){
              h.value=f.value?m.value.map((function(e){
                return e.id
              })):[
              ]
            }, selectedCount:g, updateSelectAll:b, visible:r, subCourses:m, selectedIds:h, toggleSelect:function(e, t){
              e?h.value.push(t.id):h.value=h.value.filter((function(e){
                return e!==t.id
              }))
            }, actionLoading:C, doAction:function(){
              return p(t, void 0, void 0, (function(){
                var t, o, c;
                return v(this, (function(u){
                  switch(u.label){
                    case 0:C.value=!0, u.label=1;
                    case 1:return u.trys.push([
                      1, 3, 4, 5
                    ]), [
                      4, (l="publish"===d.value, x.value&&(l=!0), (0, i.ni)(e.courseId, e.sources, h.value, l))
                    ];
                    case 2:return u.sent(), s.A.$emit("refreshSubActivities"), y.value?window.dispatchEvent(new CustomEvent("refresh-all-items-sub-count", {
                      detail:{
                        refreshAllActivities:!0
                      }
                    })):window.dispatchEvent(new CustomEvent("refresh-all-items-sub-count", {
                      detail:{
                        activities:e.sources, count:h.value.length
                      }
                    })), r.value=!1, a.A.success(n.default.t("eztest.syncSuccess")), [
                      3, 5
                    ];
                    case 3:return"ECONNABORTED"===(t=u.sent()).code||(null===(o=t.message)||void 0===o?void 0:o.includes("timeout"))?(r.value=!1, a.A.error(n.default.t("blueprint.syncTimeoutTip"))):409===(null===(c=t.response)||void 0===c?void 0:c.status)?a.A.warning(n.default.t("blueprint.syncConflictTip")):a.A.error(n.default.t("systemError")), [
                      3, 5
                    ];
                    case 4:return C.value=!1, [
                      7
                    ];
                    case 5:return[
                      2
                    ]
                  }
                  var l
                }))
              }))
            }, noPublish:x, showPrerequisiteTip:y, showSubjectLibTips:_, showCourseOutlineTips:w, showCourseSettingTips:S
          }
        }
      });
      const m=(0, r(514486).A)(f, (function(){
        var e=this, t=e.$createElement, r=e._self._c||t;
        return r("Modal", {
          ref:"modal", attrs:{
            width:900, title:e.title
          }, scopedSlots:e._u([
            {
              key:"footer", fn:function(){
                return[
                  r("Button", {
                    on:{
                      click:function(t){
                        e.visible=!1
                      }
                    }
                  }, [
                    e._v(e._s(e.$t("cancel")))
                  ]), e._v(" "), r("Button", {
                    attrs:{
                      loading:e.actionLoading, disabled:0===e.selectedCount, type:"primary"
                    }, on:{
                      click:e.doAction
                    }
                  }, [
                    e._v("\n      "+e._s(e.$t("confirm"))+"\n    ")
                  ])
                ]
              }, proxy:!0
            }
          ]), model:{
            value:e.visible, callback:function(t){
              e.visible=t
            }, expression:"visible"
          }
        }, [
          e.showPrerequisiteTip?r("div", {
            staticClass:"prerequisite-tip"
          }, [
            r("div", [
              r("i", {
                staticClass:"font font-delete-warning"
              })
            ]), e._v(" "), e.isSingleSync?r("div", [
              e._v(e._s(e.$t("blueprint.blueprintLearningModeTip3")))
            ]):r("div", [
              e._v(e._s(e.$t("blueprint.blueprintLearningModeTip4")))
            ])
          ]):e._e(), e._v(" "), e.showSubjectLibTips?r("div", {
            staticClass:"subject-lib-tips"
          }, [
            r("div", [
              r("i", {
                staticClass:"font font-delete-warning"
              })
            ]), e._v(" "), r("div", [
              e._v(e._s(e.$t("blueprint.addSubjectLibToSubCourseTips")))
            ])
          ]):e._e(), e._v(" "), e.showCourseOutlineTips?r("div", {
            staticClass:"subject-lib-tips"
          }, [
            r("div", [
              r("i", {
                staticClass:"font font-delete-warning"
              })
            ]), e._v(" "), r("div", [
              e._v(e._s(e.$t("blueprint.addOutlineToSubCourseTips")))
            ])
          ]):e._e(), e._v(" "), e.showCourseSettingTips?r("div", {
            staticClass:"subject-lib-tips"
          }, [
            r("div", [
              r("i", {
                staticClass:"font font-delete-warning"
              })
            ]), e._v(" "), r("div", [
              e._v(e._s(e.$t("blueprint.coverToSubCourseTips")))
            ])
          ]):e._e(), e._v(" "), r("div", {
            staticClass:"body-area"
          }, [
            r("h1", {
              staticClass:"header-title"
            }, [
              e._v(e._s(e.$t("blueprint.selectTeachingClass")))
            ]), e._v(" "), r("div", {
              staticClass:"course-panel"
            }, [
              r("div", {
                staticClass:"select-all-section"
              }, [
                r("label", {
                  staticClass:"checkbox-label"
                }, [
                  r("Checkbox", {
                    staticClass:"checkbox", attrs:{
                      indeterminate:e.indeterminate
                    }, on:{
                      "on-change":e.toggleSelectAll
                    }, model:{
                      value:e.selectAll, callback:function(t){
                        e.selectAll=t
                      }, expression:"selectAll"
                    }
                  }), e._v(" "), r("span", {
                    staticClass:"select-all-text"
                  }, [
                    e._v(e._s(e.$t("selectAll")))
                  ])
                ], 1), e._v(" "), r("span", {
                  staticClass:"counter-text"
                }, [
                  e._v("\n          "+e._s(e.$t("moduleAndSyllabus.selected", [
                    e.selectedCount+"/"+e.subCourses.length
                  ]))+"\n        ")
                ])
              ]), e._v(" "), 0===e.subCourses.length?r("div", {
                staticClass:"course-list"
              }, [
                r("NoSearchResult", {
                  attrs:{
                    text:e.$t("blueprint.noClass")
                  }
                })
              ], 1):r("div", {
                staticClass:"course-list"
              }, e._l(e.subCourses, (function(t){
                return r("div", {
                  key:t.id, class:[
                    "course-item", {
                      selected:e.selectedIds.includes(t.id)
                    }
                  ]
                }, [
                  r("label", {
                    staticClass:"course-label"
                  }, [
                    r("div", {
                      staticClass:"flex items-center w-full name-box"
                    }, [
                      r("Checkbox", {
                        staticClass:"checkbox", attrs:{
                          value:e.selectedIds.includes(t.id)
                        }, on:{
                          "on-change":function(r){
                            e.toggleSelect(r, t)
                          }
                        }
                      }), e._v(" "), r("h3", {
                        staticClass:"course-name"
                      }, [
                        e._v(e._s(t.displayName))
                      ])
                    ], 1), e._v(" "), r("div", {
                      staticClass:"course-details"
                    }, [
                      r("span", {
                        staticClass:"detail-item"
                      }, [
                        e._v("\n                "+e._s(e.$t("academic_year"))+"\n                "), r("span", {
                          staticClass:"detail-value"
                        }, [
                          e._v("\n                  "+e._s(t.academicYear)+"\n                ")
                        ])
                      ]), e._v(" "), r("span", {
                        staticClass:"detail-item"
                      }, [
                        e._v("\n                "+e._s(e.$t("semester"))+"\n                "), r("span", {
                          staticClass:"detail-value"
                        }, [
                          e._v("\n                  "+e._s(t.semester)+"\n                ")
                        ])
                      ]), e._v(" "), r("span", {
                        staticClass:"detail-item"
                      }, [
                        e._v("\n                "+e._s(e.$t("courseCode"))+"\n                "), r("span", {
                          staticClass:"detail-value"
                        }, [
                          e._v("\n                  "+e._s(t.courseCode)+"\n                ")
                        ])
                      ])
                    ])
                  ])
                ])
              })), 0)
            ]), e._v(" "), e.noPublish?e._e():r("div", {
              staticClass:"publish-panel"
            }, [
              r("h2", {
                staticClass:"publish-title"
              }, [
                e._v(e._s(e.$t("moduleAndSyllabus.setPublishStatus")))
              ]), e._v(" "), r("div", {
                staticClass:"flex items-center"
              }, [
                r("div", {
                  staticClass:"mr-4"
                }, [
                  e._v(e._s(e.$t("moduleAndSyllabus.publishStatus")))
                ]), e._v(" "), r("div", {
                  staticClass:"radio-group"
                }, [
                  r("RadioGroup", {
                    model:{
                      value:e.publishStatus, callback:function(t){
                        e.publishStatus=t
                      }, expression:"publishStatus"
                    }
                  }, [
                    r("Radio", {
                      attrs:{
                        label:"nopublish"
                      }
                    }, [
                      e._v("\n              "+e._s(e.$t("activityPublish.unpublish"))+"\n            ")
                    ]), e._v(" "), r("Radio", {
                      attrs:{
                        label:"publish"
                      }
                    }, [
                      e._v("\n              "+e._s(e.$t("activityPublish.publishImmediately"))+"\n            ")
                    ])
                  ], 1)
                ], 1)
              ])
            ])
          ])
        ])
      }), [
      ], !1, null, "19c3d020", null).exports
    }, 746798:(e, t, r)=>{
      var o=r(552979).default;
      e.exports=[
        "classroomApi", "$q", "toastr", function(e, t, r){
          var n={
          }, i={
          }, s={
          }, a={
          }, c={
          }, u={
          }, l={
          };
          return{
            initClassroom(r){
              if(n[
                r
              ])return n[
                r
              ].promise;
              n[
                r
              ]
              =t.defer();
              return e.getClassroomExam(r, (e=>n[
                r
              ].resolve(e)), (()=>n[
                r
              ].resolve(null))), n[
                r
              ].promise
            }, deleteClassroomCache(e){
              if(n[
                e
              ])return delete n[
                e
              ]
            }, deleteFeedbackCache(e){
              if(i[
                e
              ])return delete i[
                e
              ]
            }, startClassroom:(t, r, o)=>e.startClassroom(t, (function(e){
              return n[
                t
              ]
              &&delete n[
                t
              ], r(e)
            }), (function(e){
              return n[
                t
              ]
              &&delete n[
                t
              ], o(e)
            })), finishClassroom:(t, r, o)=>e.finishClassroom(t, (function(e){
              return n[
                t
              ]
              &&delete n[
                t
              ], r(e)
            }), (function(e){
              return n[
                t
              ]
              &&delete n[
                t
              ], o(e)
            })), initFeedbackActivity(r){
              if(i[
                r
              ])return i[
                r
              ].promise;
              i[
                r
              ]
              =t.defer();
              return e.getFeedbackActivity(r, (e=>i[
                r
              ].resolve(e)), (()=>i[
                r
              ].resolve(null))), i[
                r
              ].promise
            }, initSubjectsRule(r){
              if(s[
                r
              ])return s[
                r
              ].promise;
              s[
                r
              ]
              =t.defer();
              return r?e.getSubjectsRule(r, (e=>s[
                r
              ].resolve(e)), (()=>s[
                r
              ].resolve(null))):s[
                r
              ].resolve({
                subject_by_subject_control:!1, public:!1
              }), s[
                r
              ].promise
            }, initSubjects(r){
              if(a[
                r
              ])return a[
                r
              ].promise;
              a[
                r
              ]
              =t.defer();
              return e.getSubjects(r, (e=>a[
                r
              ].resolve(e)), (()=>a[
                r
              ].resolve(null))), a[
                r
              ].promise
            }, initSubjectsWithStatInfo(r){
              if(c[
                r
              ])return c[
                r
              ].promise;
              c[
                r
              ]
              =t.defer();
              return e.getSubjectsWithStatInfo(r, (e=>c[
                r
              ].resolve(e.subjects)), (()=>c[
                r
              ].resolve([
              ]))), c[
                r
              ].promise
            }, initMyClassroomSubmissions(r){
              if(l[
                r
              ])return l[
                r
              ].promise;
              l[
                r
              ]
              =t.defer();
              return e.getMySubmissions(r, (e=>l[
                r
              ].resolve(e)), (()=>l[
                r
              ].resolve({
              }))), l[
                r
              ].promise
            }, initExaminees(r){
              var o=arguments.length>1&&void 0!==arguments[
                1
              ]
              &&arguments[
                1
              ], n=arguments.length>2&&void 0!==arguments[
                2
              ]
              ?arguments[
                2
              ]
              :null, i=arguments.length>3&&void 0!==arguments[
                3
              ]
              &&arguments[
                3
              ];
              if(u[
                r
              ]
              &&!i)return u[
                r
              ].promise;
              u[
                r
              ]
              =t.defer();
              return e.getExaminees(r, (e=>u[
                r
              ].resolve(e.examinees)), (()=>u[
                r
              ].resolve([
              ])), o=o, n), u[
                r
              ].promise
            }, getClassroomExamSubmissions(r, o){
              var n=t.defer();
              return e.getClassroomExamSubmissions(r, o, (e=>n.resolve(e)), (()=>n.resolve(null))), n.promise
            }, syncClassroomSubject(t, n, i){
              e.syncClassroomSubject(t, n, (e=>{
                r.success(o.t("blueprint.syncSuccess")), i()
              }), (function(e){
                r.warning(o.t("blueprint.syncFailed")), i()
              }))
            }, getExamineesList(r){
              var o=t.defer();
              return e.getExamineesList(r, (e=>o.resolve(e.examinees)), (()=>o.resolve([
              ]))), o.promise
            }, getSubmissionCountStatus(r){
              var o=t.defer();
              return e.getSubmissionCountStatus(r, (e=>o.resolve(e)), (()=>o.resolve({
                all_submission_count:0, submission_has_marked_count:0
              }))), o.promise
            }
          }
        }
      ]
    }, 759513:(e, t, r)=>{
      r.d(t, {
        Fu:()=>f, SR:()=>l, ae:()=>d, nG:()=>v, nP:()=>u, nX:()=>o, r2:()=>p
      });
      r(335231);
      var o, n=r(738645), i=r(152229), s=r(510543), a=r(731904), c=function(e, t, r, o){
        var n, i=arguments.length, s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t, r):o;
        if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e, t, r, o);
        else for(var a=e.length-1;
        a>=0;
        a--)(n=e[
          a
        ])&&(s=(i<3?n(s):i>3?n(t, r, s):n(t, r))||s);
        return i>3&&s&&Object.defineProperty(t, r, s), s
      }, u=function(){
        function e(){
          this.todaySignedIn=!1, this.monthSignedInCount=0, this.monthSignedInDates=[
          ], this.learnedKnowledgeNodeCount=0, this.visitSeconds=0, this.continueSignInCount=0
        }
        return c([
          (0, n.v)({
            name:"today_signed_in"
          })
        ], e.prototype, "todaySignedIn", void 0), c([
          (0, n.v)({
            name:"month_signed_in_count"
          })
        ], e.prototype, "monthSignedInCount", void 0), c([
          (0, n.v)({
            name:"month_signed_in_dates"
          })
        ], e.prototype, "monthSignedInDates", void 0), c([
          (0, n.v)({
            name:"learned_knowledge_node_count"
          })
        ], e.prototype, "learnedKnowledgeNodeCount", void 0), c([
          (0, n.v)({
            name:"visit_seconds"
          })
        ], e.prototype, "visitSeconds", void 0), c([
          (0, n.v)({
            name:"continue_sign_in_count"
          })
        ], e.prototype, "continueSignInCount", void 0), e
      }
      (), l=function(){
        function e(){
        }
        return c([
          (0, n.v)()
        ], e.prototype, "id", void 0), c([
          (0, n.v)()
        ], e.prototype, "name", void 0), e
      }
      (), d=function(){
        function e(){
          this.instructors=[
          ]
        }
        return c([
          (0, n.v)()
        ], e.prototype, "id", void 0), c([
          (0, n.v)()
        ], e.prototype, "orgId", void 0), c([
          (0, n.v)()
        ], e.prototype, "name", void 0), c([
          (0, n.v)()
        ], e.prototype, "cover", void 0), c([
          (0, n.v)(), (0, i.Z)((function(){
            return l
          }))
        ], e.prototype, "instructors", void 0), c([
          (0, n.v)()
        ], e.prototype, "courseCode", void 0), c([
          (0, n.v)()
        ], e.prototype, "startDate", void 0), c([
          (0, n.v)()
        ], e.prototype, "endDate", void 0), c([
          (0, n.v)()
        ], e.prototype, "isProject", void 0), e
      }
      (), p=function(){
        function e(){
          this.isActive=!1, this.sort=0
        }
        return c([
          (0, n.v)()
        ], e.prototype, "id", void 0), c([
          (0, n.v)()
        ], e.prototype, "isActive", void 0), c([
          (0, n.v)()
        ], e.prototype, "name", void 0), c([
          (0, n.v)()
        ], e.prototype, "sort", void 0), e
      }
      (), v=function(){
        function e(){
          this.realName="", this.sort=0, this.academicYearId=0
        }
        return c([
          (0, n.v)()
        ], e.prototype, "id", void 0), c([
          (0, n.v)()
        ], e.prototype, "name", void 0), c([
          (0, n.v)()
        ], e.prototype, "isActive", void 0), c([
          (0, n.v)()
        ], e.prototype, "realName", void 0), c([
          (0, n.v)()
        ], e.prototype, "sort", void 0), c([
          (0, n.v)()
        ], e.prototype, "academicYearId", void 0), e
      }
      (), f=(function(){
        function e(){
        }
        c([
          (0, n.v)()
        ], e.prototype, "activityId", void 0), c([
          (0, n.v)()
        ], e.prototype, "completionCriterion", void 0), c([
          (0, n.v)()
        ], e.prototype, "activityType", void 0), c([
          (0, n.v)()
        ], e.prototype, "title", void 0)
      }
      (), function(){
        function e(){
          this.isLocked=!1, this.notScoredNum=0, this.prerequisites=[
          ]
        }
        return c([
          (0, n.v)()
        ], e.prototype, "id", void 0), c([
          (0, n.v)()
        ], e.prototype, "title", void 0), c([
          (0, n.v)()
        ], e.prototype, "courseId", void 0), c([
          (0, n.v)()
        ], e.prototype, "courseName", void 0), c([
          (0, n.v)()
        ], e.prototype, "courseType", void 0), c([
          (0, s.d)((function(e){
            var t=e.value;
            return t?a.TimeUtils.toLocalDate(t):null
          }), {
            toClassOnly:!0
          }), (0, n.v)()
        ], e.prototype, "endTime", void 0), c([
          (0, n.v)()
        ], e.prototype, "type", void 0), c([
          (0, n.v)()
        ], e.prototype, "isLocked", void 0), c([
          (0, n.v)()
        ], e.prototype, "notScoredNum", void 0), c([
          (0, n.v)()
        ], e.prototype, "prerequisites", void 0), e
      }
      ());
      !function(e){
        e.RESOURCE="resource", e.COURSE="course", e.PROJECT="project"
      }
      (o||(o={
      }))
    }, 765321:(e, t, r)=>{
      r.d(t, {
        Gw:()=>u, KJ:()=>l, SR:()=>d, rU:()=>n, sY:()=>i
      });
      var o, n, i, s=r(738645), a=r(152229), c=function(e, t, r, o){
        var n, i=arguments.length, s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t, r):o;
        if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e, t, r, o);
        else for(var a=e.length-1;
        a>=0;
        a--)(n=e[
          a
        ])&&(s=(i<3?n(s):i>3?n(t, r, s):n(t, r))||s);
        return i>3&&s&&Object.defineProperty(t, r, s), s
      };
      !function(e){
        e[
          e.INSTRUCTOR=0
        ]
        ="INSTRUCTOR", e[
          e.STUDENT=1
        ]
        ="STUDENT", e[
          e.ADMIN=2
        ]
        ="ADMIN", e[
          e.WG_ADMIN=3
        ]
        ="WG_ADMIN"
      }
      (o||(o={
      })), function(e){
        e.qq="qq", e.wechat="wechat", e.weibo="weibo"
      }
      (n||(n={
      })), function(e){
        e.home="home", e.shipping="shipping"
      }
      (i||(i={
      }));
      var u=function(){
        function e(){
        }
        return c([
          (0, s.v)()
        ], e.prototype, "id", void 0), c([
          (0, s.v)(), (0, a.Z)((function(){
            return l
          }))
        ], e.prototype, "user", void 0), e
      }
      (), l=function(){
        function e(e, t, r, o){
          this.webexAuth=!1, this.larkAuth=!1, this.id=e, this.userNo=t, this.name=r, this.role=o
        }
        return e.prototype.isInstructor=function(){
          return o.INSTRUCTOR===this.role
        }, c([
          (0, s.v)()
        ], e.prototype, "id", void 0), c([
          (0, s.v)()
        ], e.prototype, "userNo", void 0), c([
          (0, s.v)()
        ], e.prototype, "name", void 0), c([
          (0, s.v)()
        ], e.prototype, "role", void 0), c([
          (0, s.v)()
        ], e.prototype, "org", void 0), c([
          (0, s.v)()
        ], e.prototype, "groupName", void 0), c([
          (0, s.v)()
        ], e.prototype, "department", void 0), c([
          (0, s.v)()
        ], e.prototype, "avatarBigUrl", void 0), c([
          (0, s.v)()
        ], e.prototype, "isLeader", void 0), c([
          (0, s.v)()
        ], e.prototype, "sex", void 0), c([
          (0, s.v)()
        ], e.prototype, "education", void 0), c([
          (0, s.v)()
        ], e.prototype, "teachingDate", void 0), c([
          (0, s.v)()
        ], e.prototype, "occupationType", void 0), c([
          (0, s.v)()
        ], e.prototype, "mobilePhone", void 0), c([
          (0, s.v)()
        ], e.prototype, "email", void 0), c([
          (0, s.v)()
        ], e.prototype, "userAttributes", void 0), c([
          (0, s.v)()
        ], e.prototype, "userAddresses", void 0), c([
          (0, s.v)()
        ], e.prototype, "userAuthExternals", void 0), c([
          (0, s.v)()
        ], e.prototype, "klass", void 0), c([
          (0, s.v)()
        ], e.prototype, "program", void 0), c([
          (0, s.v)()
        ], e.prototype, "grade", void 0), c([
          (0, s.v)()
        ], e.prototype, "webexAuth", void 0), c([
          (0, s.v)()
        ], e.prototype, "larkAuth", void 0), e
      }
      (), d=function(){
        function e(){
        }
        return c([
          (0, s.v)()
        ], e.prototype, "id", void 0), c([
          (0, s.v)()
        ], e.prototype, "name", void 0), e
      }
      ()
    }, 769075:(e, t, r)=>{
      r.d(t, {
        A:()=>c
      });
      r(269193);
      var o=r(962893), n=r(679578);
      function i(e, t){
        var r=Object.keys(e);
        if(Object.getOwnPropertySymbols){
          var o=Object.getOwnPropertySymbols(e);
          t&&(o=o.filter((function(t){
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, o)
        }
        return r
      }
      function s(e){
        for(var t=1;
        t<arguments.length;
        t++){
          var r=null!=arguments[
            t
          ]
          ?arguments[
            t
          ]
          :{
          };
          t%2?i(Object(r), !0).forEach((function(t){
            a(e, t, r[
              t
            ])
          })):Object.getOwnPropertyDescriptors?Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }
      function a(e, t, r){
        return t in e?Object.defineProperty(e, t, {
          value:r, enumerable:!0, configurable:!0, writable:!0
        }):e[
          t
        ]
        =r, e
      }
      n.A.open=function(){
        var e=arguments.length>0&&void 0!==arguments[
          0
        ]
        ?arguments[
          0
        ]
        :{
        };
        return new Promise((t=>{
          var r=new o.default({
            data:()=>({
              visible:!1
            }), render(t){
              var o={
              };
              return e.render&&(o.default=()=>e.render(t, r)), e.renderHeader&&(o.header=()=>e.renderHeader(t, r)), e.renderFooter&&(o.footer=()=>e.renderFooter(t, r)), t(n.A, {
                props:s(s({
                }, e), {
                }, {
                  value:this.visible
                }), scopedSlots:o
              })
            }, methods:{
              show(){
                this.visible=!0
              }, close(){
                this.visible=!1
              }
            }
          });
          r.$mount(), document.body.append(r.$el), r.show();
          var i=r.$children[
            0
          ];
          i.$on("on-ok", (()=>{
            r.visible=!1, t(!0)
          })), i.$on("on-cancel", (()=>{
            r.visible=!1, t(!1)
          })), i.$on("on-hidden", (()=>{
            t(!1), r.$el.remove()
          }))
        }))
      };
      const c=n.A
    }, 781757:(e, t, r)=>{
      var o=r(302543), n=r(793110), i=r(248124), s=r(756029);
      r(540590), r(418665), r(269193), r(979073), r(906048), r(445708), r(67500), r(14602);
      var a=r(592207);
      function c(e, t){
        var r;
        if("undefined"==typeof Symbol||null==e[
          Symbol.iterator
        ]){
          if(Array.isArray(e)||(r=function(e, t){
            if(!e)return;
            if("string"==typeof e)return u(e, t);
            var r=Object.prototype.toString.call(e).slice(8, -1);
            "Object"===r&&e.constructor&&(r=e.constructor.name);
            if("Map"===r||"Set"===r)return Array.from(e);
            if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(e, t)
          }
          (e))||t&&e&&"number"==typeof e.length){
            r&&(e=r);
            var o=0, n=function(){
            };
            return{
              s:n, n:function(){
                return o>=e.length?{
                  done:!0
                }
                :{
                  done:!1, value:e[
                    o++
                  ]
                }
              }, e:function(e){
                throw e
              }, f:n
            }
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var i, s=!0, a=!1;
        return{
          s:function(){
            r=e[
              Symbol.iterator
            ]
            ()
          }, n:function(){
            var e=r.next();
            return s=e.done, e
          }, e:function(e){
            a=!0, i=e
          }, f:function(){
            try{
              s||null==r.return||r.return()
            }
            finally{
              if(a)throw i
            }
          }
        }
      }
      function u(e, t){
        (null==t||t>e.length)&&(t=e.length);
        for(var r=0, o=new Array(t);
        r<t;
        r++)o[
          r
        ]
        =e[
          r
        ];
        return o
      }
      function l(e, t, r, o, n, i, s){
        try{
          var a=e[
            i
          ]
          (s), c=a.value
        }
        catch(e){
          return void r(e)
        }
        a.done?t(c):Promise.resolve(c).then(o, n)
      }
      r(207452);
      var d=r(966491), p=r(921443), v=r(955641);
      e.exports=[
        "$rootScope", "$scope", "activityRepository", "forumRepository", "modelHelper", "$timeout", "$window", "$compile", "toastr", "activityApi", "commonApi", "$http", function(e, t, r, u, f, m, y, h, g, b, _, w){
          var S, x=null;
          t.forum={
            score_percentage:0
          }, t.firstAddTopicRuler=!0, t.enableScoreItemGroup=(null===(S=y.featureToggles)||void 0===S?void 0:S.enableScoreItemGroup)||!1;
          var C=new RegExp("^(\\d|[1-9]\\d|100)$"), A=function(){
            if(!x)return x=p(t, t.$parent.course, r, f, y)
          }, k=function(){
            return r.getLeftScorePercentage(t.$parent.course.id).then((e=>t.leftScorePercentage=e)), t.forum={
              type:"forum", is_never_expire:!0, start_time:"", end_time:"", score_percentage:0, announce_score_type:2, announce_score_time:"", submit_by_group:!1, group_set_id:null, auto_compute:!1, each_reply_score:0, max_reply_score:0, each_praise_score:0, max_praise_score:0, set_reply_rulers:!1, set_praise_rulers:!1, knowledge_node_ids:[
              ], score_item_scored:!1, score_item_group_id:0
            }, t.currentActivity=t.forum, t.ui={
              announceScoreType:2, showForumPopup:!0, selectedActivityId:0, participationScope:"inCourse"
            }, t.activitiesNotInModule=o.filter(r.course.activities, (e=>"forum"===e.type&&!e.module_id)), t.currentGroupSet&&(t.forum.submit_by_group=!0, t.forum.group_set_id=t.currentGroupSet.id), _.getCourseScoreType(t.course.id, "forum").then((e=>{
              t.forum.score_type=e.data.score_type
            })), A(), x.initActivity()
          };
          t.validateSliderModel=e=>""!==e&&!d.endsWith(e, "."), t.verifySliderModel=e=>parseFloat(e)>t.leftScorePercentage;
          var E=function(e){
            return r.getLeftScorePercentage(t.$parent.course.id).then((function(r){
              var i, s, a, c;
              t.leftScorePercentage=r, t.forum=e, t.currentActivity=t.forum, t.forum.description=e.data.description, t.forum.is_never_expire=!t.forum.end_time, t.forum.announce_score_type=e.data.announce_score_type||1, t.forum.announce_score_time=e.data.announce_score_time||"", t.forum.participation_scope=e.data.participation_scope||"inCourse", t.forum.score_percentage=e.score_percentage||0, t.forum.auto_compute=e.data.auto_compute||!1, t.forum.each_reply_score=parseInt((null===(i=e.data.auto_compute_rules)||void 0===i?void 0:i.each_reply_score)||0), t.forum.max_reply_score=parseInt((null===(s=e.data.auto_compute_rules)||void 0===s?void 0:s.max_reply_score)||0), t.forum.each_praise_score=parseInt((null===(a=e.data.auto_compute_rules)||void 0===a?void 0:a.each_praise_score)||0), t.forum.max_praise_score=parseInt((null===(c=e.data.auto_compute_rules)||void 0===c?void 0:c.max_praise_score)||0), t.forum.set_reply_rulers=e.data.set_reply_rulers||!1, t.forum.set_praise_rulers=e.data.set_praise_rulers||!1, t.forum.knowledge_node_reference=e.knowledge_node_reference, t.forum.knowledge_node_ids=e.knowledge_node_ids, t.forum.score_item_group_id=e.score_item_group_id, t.forum.score_item_scored=e.score_item_scored;
              var u=new n(t.forum.score_percentage);
              return t.leftScorePercentage=new n(o.min([
                t.leftScorePercentage.plus(u), 100
              ])), t.ui={
                announceScoreType:t.forum.announce_score_type, participationScope:t.forum.participation_scope, selectedActivityId:0
              }, A(), x.bindActivityForEdit(e)
            }))
          };
          t.scoreItemGroups=[
          ];
          var O=function(){
            var e, r=(e=a.mark((function e(r){
              var o;
              return a.wrap((function(e){
                for(;
                ;
                )switch(e.prev=e.next){
                  case 0:o=function(e){
                    t.scoreItemGroups=e.data.items, t.forum.score_item_scored&&!t.forum.score_item_group_id&&(t.forum.score_item_group_id=t.scoreItemGroups[
                      0
                    ].id)
                  }, w.get("/api/courses/".concat(r, "/score-item-groups?without_score_item=true")).then(o);
                  case 2:case"end":return e.stop()
                }
              }), e)
            })), function(){
              var t=this, r=arguments;
              return new Promise((function(o, n){
                var i=e.apply(t, r);
                function s(e){
                  l(i, o, n, s, a, "next", e)
                }
                function a(e){
                  l(i, o, n, s, a, "throw", e)
                }
                s(void 0)
              }))
            });
            return function(e){
              return r.apply(this, arguments)
            }
          }
          ();
          t.enableScoreItemGroup&&O(i("#courseId").val()), t.$watch("forum.score_item_scored", (()=>{
            t.forum.score_item_scored?t.forum.score_item_group_id||(t.forum.score_item_group_id=t.scoreItemGroups[
              0
            ].id):t.forum.score_item_group_id=0
          })), t.changeActivity=function(){
            if(0===t.ui.selectedActivityId)return k();
            var e=o.find(t.activitiesNotInModule, {
              id:t.ui.selectedActivityId
            });
            return E(s.copy(e), t.ui.selectedActivityId)
          }, t.validateTopicScopeRule=function(){
            if(delete t.errors.each_reply_score, delete t.errors.max_reply_score, delete t.errors.each_praise_score, delete t.errors.max_praise_score, delete t.errors.set_reply_rulers, delete t.errors.set_praise_rulers, t.forum.auto_compute){
              if(t.firstAddTopicRuler&&t.forum.auto_compute&&(t.forum.is_never_expire=!1, t.firstAddTopicRuler=!1), t.forum.set_reply_rulers&&t.forum.set_praise_rulers)if(t.forum.max_reply_score&&0===t.forum.max_praise_score)t.forum.max_praise_score=Math.max(100-t.forum.max_reply_score, 0);
              else if(0===t.forum.max_reply_score&&t.forum.max_praise_score)t.forum.max_reply_score=Math.max(100-t.forum.max_praise_score, 0);
              else if(t.forum.max_reply_score&&t.forum.max_praise_score&&parseInt(t.forum.max_praise_score)+parseInt(t.forum.max_reply_score)>100)return t.errors.max_reply_score=[
                t.scoreValueError
              ], void(t.errors.max_praise_score=[
                ""
              ]);
              var e={
                set_reply_rulers:[
                  "each_reply_score", "max_reply_score"
                ], set_praise_rulers:[
                  "each_praise_score", "max_praise_score"
                ]
              };
              for(var r in e){
                var o, n=e[
                  r
                ], i=c(n);
                try{
                  for(i.s();
                  !(o=i.n()).done;
                  ){
                    var s=o.value;
                    if(t.forum[
                      r
                    ]
                    &&t.forum[
                      s
                    ]
                    &&!C.test(parseInt(t.forum[
                      s
                    ])))return void(t.errors[
                      s
                    ]
                    =[
                      t.scoreValueError
                    ]);
                    if(t.forum[
                      r
                    ]
                    &&!t.forum[
                      s
                    ])return t.errors.set_reply_rulers=[
                      t.missScoreValue
                    ], void(t.errors[
                      s
                    ]
                    =[
                      ""
                    ]);
                    if(t.forum[
                      r
                    ]
                    &&t.forum[
                      s
                    ]
                    &&!C.test(parseInt(t.forum[
                      s
                    ])))return void(t.errors[
                      s
                    ]
                    =[
                      t.scoreValueError
                    ])
                  }
                }
                catch(e){
                  i.e(e)
                }
                finally{
                  i.f()
                }
                if(t.forum[
                  r
                ]
                &&parseInt(t.forum[
                  n[
                    0
                  ]
                ])>parseInt(t.forum[
                  n[
                    1
                  ]
                ]))return void(t.errors[
                  n[
                    0
                  ]
                ]
                =[
                  t.scoreValueRuleError
                ])
              }
            }
            else t.firstAddTopicRuler=!0
          }, t.isTopicRulerDisable=function(e){
            if(!t.forum[
              e
            ])return"topic-setting-checkbox-input"
          }, t.$on("bindForumForNew", (function(e, r){
            t.showSelectActivity=r&&r.showSelectActivity, k()
          })), t.$on("bindForumForEdit", (function(e, r){
            t.showSelectActivity=!1;
            var o=s.copy(r);
            t.forum.id=r.id, E(o)
          })), t.createShtvuGroups=function(){
            return t.loading=!0, b.createShtvuGroups(t.course.id, (function(e){
              if(t.loading=!1, g.success(e.message), t.groupSets=e.group_sets, (null!=t.groupSets?t.groupSets.length:void 0)&&t.groupSets[
                0
              ].group_count)return delete t.errors.group_set_id
            }), (function(e){
              return t.loading=!1, e.empty_group?g.warning(e.message):g.error(e.message)
            }))
          };
          return t.save=function(e){
            t.errors.set_praise_rulers===[
              t.missScoreRule
            ]
            &&delete t.errors.set_praise_rulers, !t.forum.auto_compute||t.forum.set_reply_rulers||t.forum.set_praise_rulers||(t.errors.set_praise_rulers=[
              t.missScoreRule
            ], t.errors.each_reply_score=[
              ""
            ]);
            for(var r=0, o=[
              "each_reply_score", "max_reply_score", "each_praise_score", "max_praise_score", "set_reply_rulers"
            ];
            r<o.length;
            r++){
              var n=o[
                r
              ];
              if(t.errors.hasOwnProperty(n))return void g.error(t.saveFailed)
            }
            if(t.forum.auto_compute||(t.forum.set_reply_rulers=!1, t.forum.set_praise_rulers=!1), t.forum.set_reply_rulers||(t.forum.each_reply_score=0, t.forum.max_reply_score=0), t.forum.set_praise_rulers||(t.forum.each_praise_score=0, t.forum.max_praise_score=0), t.forum.description){
              var i=d.parseUploadsFromRichText(t.forum.description, "img", "image");
              t.forum.uploads=[
                ...new Set(i.map((e=>e.id)))
              ]
            }
            var a=s.copy(t.forum);
            a.announce_score_type=t.ui.announceScoreType, "SHTVU"===t.deliveryOrg&&t.groupSets.length>0&&(a.group_set_id=t.groupSets[
              0
            ].id), 3!==t.ui.announceScoreType&&delete a.announce_score_time, a.participation_scope=t.ui.participationScope, "crossCourse"==t.ui.participationScope&&(a.score_percentage=0, a.prerequisites=[
            ]), void 0!==e&&(a.published=e), t.startActivityType=null, a.is_never_expire=t.never_expire, x.saveActivity(a, t).then((()=>{
              if(t.needSetObeWeight){
                var e="/course/".concat(t.course.id, "/edit#/obe-setting");
                y.location.href=e
              }
            })), u.clearCachedTopicCategories()
          }, t.needSetObeWeight=!1, t.close=()=>i("#forum-popup").foundation("reveal", "close"), t.reset=()=>t.errors={
          }, t.handleErrors=function(){
            g.error(t.saveFailed)
          }, y.addEventListener("obe-metrics-changed-event", (e=>{
            e.detail&&"forum"===e.detail.activityType&&(t.forum.metrics=e.detail.metrics, t.forum.type="forum", v(t, t.$parent.course.id, t.forum, r).getNeedSetObeWeight())
          })), y.addEventListener("knowledge-node-changed-event", (e=>{
            e.detail&&"forum"===e.detail.activityType&&(t.forum.knowledge_node_ids=e.detail.knowledgeNodeIds, t.forum.type="forum", t.$apply())
          })), t.activityOBERelated=f.activityOBERelated, t.$watch("forum.auto_compute", ((e, r)=>{
            e&&t.never_expire&&(t.never_expire=!1)
          })), t.select2OptionsWithGroupCount={
            containerCssClass:"select2-user_no", dropdownCssClass:"select2-user_no-drop select2-drop-without-search", formatNoMatches:()=>t.notGroupSetTip, formatSelection:e=>h("<div class='name truncate-text' tipsy-literal='".concat(e.text, "' ng-attr-tipsy-ellipsis='yes' ng-attr-tipsy-ellipsis-check-method='width'>").concat(e.text, "</div>"))(t), formatResult(e){
              var r=i(e.element).data("groupCount"), o="<span class='name truncate-text' tipsy-literal='".concat(e.text, "' ng-attr-tipsy-ellipsis='yes' ng-attr-tipsy-ellipsis-check-method='width'>").concat(e.text, "</span>"), n="<span class='user_no truncate-text' tipsy-literal='".concat(r, "' ng-attr-tipsy-ellipsis='yes' ng-attr-tipsy-ellipsis-check-method='width'>").concat(r, "</span>");
              return h("<div class='result-wrapper'>".concat(o).concat("<span class='gap'></span>").concat(n, "</div>"))(t)
            }
          }
        }
      ]
    }, 793022:(e, t, r)=>{
      r.d(t, {
        k:()=>o, y:()=>n
      });
      r(219693);
      var o=function(e){
        return e&&0===e.indexOf("_uuid_")?"":e
      }, n=function(e){
        return e.map((function(e){
          return{
            id:e.id, displayName:e.courseAttributes.teachingClassName?e.courseAttributes.teachingClassName:e.name, courseCode:o(e.courseCode), academicYear:e.academicYear?e.academicYear.name:"--", semester:e.semester?e.semester.realName:"--", studentCount:e.courseAttributes.studentCount, instructorCount:e.instructors.length, instructors:e.instructors, importedFrom:e.importedFrom, isInstructor:e.isInstructor
          }
        }))
      }
    }, 815134:(e, t, r)=>{
      r.r(t), r.d(t, {
        addCourse:()=>A, assignActivityToModule:()=>$, assignUploadsToCourse:()=>P, combineCourse:()=>O, combineCourseContent:()=>T, getAllMyCoursesByConditions:()=>D, getAvaLives:()=>m, getCanBeCombinedCourses:()=>I, getCourse:()=>y, getCourseEducators:()=>b, getCourseHosts:()=>g, getCourseInstructors:()=>h, getCourseLives:()=>f, getCourseModules:()=>v, getCoursesAuditResource:()=>x, getCoursesToMerged:()=>M, getCoursesWithResourceNum:()=>S, getMyCoursesByPage:()=>k, getMySemesters:()=>E, getOnoCourseVisitStat:()=>C, getSubCourses:()=>j, getUsersByGroupName:()=>_, inspectCourse:()=>w
      });
      r(540590), r(418665), r(169218), r(269193), r(14602);
      var o=r(272505), n=r.n(o), i=r(920453), s=r(218831), a=r(448743), c=r(765321), u=r(731904), l=function(){
        return(l=Object.assign||function(e){
          for(var t, r=1, o=arguments.length;
          r<o;
          r++)for(var n in t=arguments[
            r
          ])Object.prototype.hasOwnProperty.call(t, n)&&(e[
            n
          ]
          =t[
            n
          ]);
          return e
        }).apply(this, arguments)
      }, d=function(e, t, r, o){
        return new(r||(r=Promise))((function(n, i){
          function s(e){
            try{
              c(o.next(e))
            }
            catch(e){
              i(e)
            }
          }
          function a(e){
            try{
              c(o.throw(e))
            }
            catch(e){
              i(e)
            }
          }
          function c(e){
            var t;
            e.done?n(e.value):(t=e.value, t instanceof r?t:new r((function(e){
              e(t)
            }))).then(s, a)
          }
          c((o=o.apply(e, t||[
          ])).next())
        }))
      }, p=function(e, t){
        var r, o, n, i, s={
          label:0, sent:function(){
            if(1&n[
              0
            ])throw n[
              1
            ];
            return n[
              1
            ]
          }, trys:[
          ], ops:[
          ]
        };
        return i={
          next:a(0), throw:a(1), return:a(2)
        }, "function"==typeof Symbol&&(i[
          Symbol.iterator
        ]
        =function(){
          return this
        }), i;
        function a(a){
          return function(c){
            return function(a){
              if(r)throw new TypeError("Generator is already executing.");
              for(;
              i&&(i=0, a[
                0
              ]
              &&(s=0)), s;
              )try{
                if(r=1, o&&(n=2&a[
                  0
                ]
                ?o.return:a[
                  0
                ]
                ?o.throw||((n=o.return)&&n.call(o), 0):o.next)&&!(n=n.call(o, a[
                  1
                ])).done)return n;
                switch(o=0, n&&(a=[
                  2&a[
                    0
                  ], n.value
                ]), a[
                  0
                ]){
                  case 0:case 1:n=a;
                  break;
                  case 4:return s.label++, {
                    value:a[
                      1
                    ], done:!1
                  };
                  case 5:s.label++, o=a[
                    1
                  ], a=[
                    0
                  ];
                  continue;
                  case 7:a=s.ops.pop(), s.trys.pop();
                  continue;
                  default:if(!(n=s.trys, (n=n.length>0&&n[
                    n.length-1
                  ])||6!==a[
                    0
                  ]
                  &&2!==a[
                    0
                  ])){
                    s=0;
                    continue
                  }
                  if(3===a[
                    0
                  ]
                  &&(!n||a[
                    1
                  ]
                  >n[
                    0
                  ]
                  &&a[
                    1
                  ]
                  <n[
                    3
                  ])){
                    s.label=a[
                      1
                    ];
                    break
                  }
                  if(6===a[
                    0
                  ]
                  &&s.label<n[
                    1
                  ]){
                    s.label=n[
                      1
                    ], n=a;
                    break
                  }
                  if(n&&s.label<n[
                    2
                  ]){
                    s.label=n[
                      2
                    ], s.ops.push(a);
                    break
                  }
                  n[
                    2
                  ]
                  &&s.ops.pop(), s.trys.pop();
                  continue
                }
                a=t.call(e, s)
              }
              catch(e){
                a=[
                  6, e
                ], o=0
              }
              finally{
                r=n=0
              }
              if(5&a[
                0
              ])throw a[
                1
              ];
              return{
                value:a[
                  0
                ]
                ?a[
                  1
                ]
                :void 0, done:!0
              }
            }
            ([
              a, c
            ])
          }
        }
      };
      function v(e){
        return d(this, void 0, void 0, (function(){
          var t;
          return p(this, (function(r){
            switch(r.label){
              case 0:return[
                4, n().get("/api/courses/".concat(e, "/modules"))
              ];
              case 1:return t=r.sent(), [
                2, (0, i.plainToClass)(a.Module, t.data.modules)
              ]
            }
          }))
        }))
      }
      function f(e, t){
        return d(this, void 0, void 0, (function(){
          var r, o;
          return p(this, (function(c){
            switch(c.label){
              case 0:return[
                4, n().get("/api/courses/".concat(e, "/extension-lives?source=").concat(t))
              ];
              case 1:return r=c.sent(), o=(0, s.camelizeKeys)(r.data.lives), [
                2, (0, i.plainToClass)(a.ChinamCloudLive, o)
              ]
            }
          }))
        }))
      }
      function m(e, t, r, o){
        return d(this, void 0, void 0, (function(){
          var c, l, d;
          return p(this, (function(p){
            switch(p.label){
              case 0:return u._.assign(o, {
                pageIndex:e, pageSize:t
              }), [
                4, n().get("/api/courses/".concat(r, "/extension-lives"), {
                  params:o
                })
              ];
              case 1:return c=p.sent(), l=(0, s.camelizeKeys)(c.data.items), d=(0, i.plainToClass)(a.AvaLiveInfo, l), [
                2, {
                  page:e, pageSize:t, pages:c.data.pages, total:c.data.total, start:c.data.start, end:c.data.end, items:d
                }
              ]
            }
          }))
        }))
      }
      function y(e, t){
        return d(this, void 0, void 0, (function(){
          var r;
          return p(this, (function(o){
            switch(o.label){
              case 0:return[
                4, n().get("/api/courses/".concat(e), {
                  params:{
                    fields:t
                  }
                })
              ];
              case 1:return r=o.sent().data, [
                2, (0, i.plainToClass)(a.BaseCourse, (0, s.camelizeKeys)(r))
              ]
            }
          }))
        }))
      }
      function h(e){
        return d(this, void 0, void 0, (function(){
          var t;
          return p(this, (function(r){
            switch(r.label){
              case 0:return[
                4, n().get("/api/courses/".concat(e, "/instructors"))
              ];
              case 1:return t=r.sent(), [
                2, (0, i.plainToClass)(c.KJ, t.data.instructors)
              ]
            }
          }))
        }))
      }
      function g(e, t){
        return d(this, void 0, void 0, (function(){
          var r;
          return p(this, (function(o){
            switch(o.label){
              case 0:return[
                4, n().get("/api/courses/".concat(e, "/hosts?type=").concat(t))
              ];
              case 1:return r=o.sent(), [
                2, (0, i.plainToClass)(c.KJ, (0, s.camelizeKeys)(r.data.hosts), {
                  excludeExtraneousValues:!0
                })
              ]
            }
          }))
        }))
      }
      function b(e, t){
        return void 0===t&&(t=""), d(this, void 0, void 0, (function(){
          var r, o, a;
          return p(this, (function(u){
            switch(u.label){
              case 0:return r="/api/courses/".concat(e, "/educators"), t&&(r="".concat(r, "?fields=").concat(t)), [
                4, n().get(r)
              ];
              case 1:return o=u.sent(), a=(0, s.camelizeKeys)(o.data.enrollments), [
                2, (0, i.plainToClass)(c.Gw, a)
              ]
            }
          }))
        }))
      }
      function _(e, t){
        return d(this, void 0, void 0, (function(){
          var r;
          return p(this, (function(o){
            switch(o.label){
              case 0:return[
                4, n().get("/api/courses/".concat(e, "/group-users?group_name=").concat(t))
              ];
              case 1:return r=o.sent(), [
                2, (0, i.plainToClass)(c.KJ, r.data.result)
              ]
            }
          }))
        }))
      }
      function w(e){
        return d(this, void 0, void 0, (function(){
          return p(this, (function(t){
            return[
              2, n().put("/api/courses/".concat(e, "/inspect"))
            ]
          }))
        }))
      }
      var S=function(e, t, r){
        return d(void 0, void 0, void 0, (function(){
          var o, c, u, l;
          return p(this, (function(d){
            switch(d.label){
              case 0:return o=(0, s.decamelizeKeys)({
                page:e, pageSize:t, conditions:r, includeChildrenTenant:1
              }), [
                4, n().get("/api/courses/statistic/resource-audit", {
                  params:o
                })
              ];
              case 1:return c=d.sent(), u=(0, s.camelizeKeys)(c.data.courses), l=(0, i.plainToClass)(a.CourseWithResourceNum, u, {
                excludeExtraneousValues:!0
              }), [
                2, {
                  page:e, pageSize:t, pages:c.data.pages, total:c.data.total, start:c.data.start, end:c.data.end, items:l
                }
              ]
            }
          }))
        }))
      }, x=function(e, t, r, o){
        return d(void 0, void 0, void 0, (function(){
          var c, u, l, d;
          return p(this, (function(p){
            switch(p.label){
              case 0:return c=(0, s.decamelizeKeys)({
                page:t, pageSize:r, conditions:o
              }), [
                4, n().get("/api/courses/".concat(e, "/resource-audit"), {
                  params:c
                })
              ];
              case 1:return u=p.sent(), l=(0, s.camelizeKeys)(u.data.audit_references), d=(0, i.plainToClass)(a.CourseAuditReference, l, {
                excludeExtraneousValues:!0
              }), [
                2, {
                  page:t, pageSize:r, pages:u.data.pages, total:u.data.total, start:u.data.start, end:u.data.end, items:d
                }
              ]
            }
          }))
        }))
      };
      function C(e, t, r, o, c){
        return d(this, void 0, void 0, (function(){
          var u, l, d;
          return p(this, (function(p){
            switch(p.label){
              case 0:return u=(0, s.decamelizeKeys)({
                courseIds:e, startDate:r, endDate:o, statType:t, conditions:c
              }), [
                4, n().get("/api/courses/tpdoe/stat-students?", {
                  params:u
                })
              ];
              case 1:return l=p.sent(), d=(0, s.camelizeKeys)(l.data.result), [
                2, (0, i.plainToClass)(a.OnoCourseStatUser, d)
              ]
            }
          }))
        }))
      }
      function A(e){
        return d(this, void 0, void 0, (function(){
          var t;
          return p(this, (function(r){
            switch(r.label){
              case 0:return[
                4, n().post("/api/course", e)
              ];
              case 1:return t=r.sent(), [
                2, (0, s.camelizeKeys)(t.data)
              ]
            }
          }))
        }))
      }
      function k(e, t, r, o){
        return void 0===e&&(e=1), void 0===t&&(t=100), void 0===r&&(r=""), void 0===o&&(o={
        }), d(this, void 0, void 0, (function(){
          var i, a;
          return p(this, (function(c){
            switch(c.label){
              case 0:return i=(0, s.decamelizeKeys)({
                page:e, pageSize:t, fields:r, conditions:l({
                }, o)
              }), [
                4, n().post("/api/my-courses", i)
              ];
              case 1:return a=c.sent(), [
                2, (0, s.camelizeKeys)(a.data)
              ]
            }
          }))
        }))
      }
      function E(e){
        return void 0===e&&(e={
        }), d(this, void 0, void 0, (function(){
          var t;
          return p(this, (function(r){
            switch(r.label){
              case 0:return[
                4, n().get("/api/my-semesters", {
                  params:(0, s.decamelizeKeys)(e)
                })
              ];
              case 1:return t=r.sent(), [
                2, (0, s.camelizeKeys)(t.data.semesters)
              ]
            }
          }))
        }))
      }
      function O(e){
        return d(this, void 0, void 0, (function(){
          var t;
          return p(this, (function(r){
            switch(r.label){
              case 0:return[
                4, n().post("/api/combine-courses", (0, s.decamelizeKeys)(e))
              ];
              case 1:return t=r.sent(), [
                2, (0, s.camelizeKeys)(t.data)
              ]
            }
          }))
        }))
      }
      function I(e){
        return d(this, void 0, void 0, (function(){
          var t;
          return p(this, (function(r){
            switch(r.label){
              case 0:return[
                4, n().get("/api/combine-courses", {
                  params:{
                    conditions:(0, s.decamelizeKeys)(e)
                  }
                })
              ];
              case 1:return t=r.sent(), [
                2, (0, s.camelizeKeys)(t.data)
              ]
            }
          }))
        }))
      }
      function T(e, t){
        return d(this, void 0, void 0, (function(){
          return p(this, (function(r){
            return[
              2, n().post("/api/combine-courses/".concat(e, "/combine-contents"), t)
            ]
          }))
        }))
      }
      function $(e, t){
        return d(this, void 0, void 0, (function(){
          return p(this, (function(r){
            return[
              2, n().post("/api/courses/".concat(e, "/assign-activity-to-module"), t)
            ]
          }))
        }))
      }
      function P(e){
        return d(this, void 0, void 0, (function(){
          return p(this, (function(t){
            return[
              2, n().post("/api/uploads/share-to-courses", e)
            ]
          }))
        }))
      }
      function M(e){
        return d(this, void 0, void 0, (function(){
          var t;
          return p(this, (function(r){
            switch(r.label){
              case 0:return[
                4, n().get("/api/combine-courses/".concat(e, "/courses-to-merged"))
              ];
              case 1:return t=r.sent(), [
                2, (0, s.camelizeKeys)(t.data).courses
              ]
            }
          }))
        }))
      }
      function j(e, t){
        return d(this, void 0, void 0, (function(){
          var r, o, i;
          return p(this, (function(a){
            switch(a.label){
              case 0:return r="/api/combine-courses/".concat(e, "/sub-courses"), o={
              }, t&&(o.fields=t), [
                4, n().get(r, {
                  params:o
                })
              ];
              case 1:return i=a.sent(), [
                2, (0, s.camelizeKeys)(i.data).subCourses
              ]
            }
          }))
        }))
      }
      function D(e, t){
        return void 0===e&&(e=""), void 0===t&&(t={
        }), d(this, void 0, void 0, (function(){
          var r, o;
          return p(this, (function(i){
            switch(i.label){
              case 0:return r=(0, s.decamelizeKeys)({
                fields:e, conditions:l({
                }, t)
              }), [
                4, n().post("/api/my-courses", r)
              ];
              case 1:return o=i.sent(), [
                2, (0, s.camelizeKeys)(o.data)
              ]
            }
          }))
        }))
      }
    }, 818183:(e, t, r)=>{
      r.d(t, {
        A:()=>i
      });
      var o=r(962893), n=function(){
        function e(){
        }
        return e.success=function(e, t, r, n){
          void 0===t&&(t=3), void 0===r&&(r=24), o.default.prototype.$Message.config({
            top:r
          }), o.default.prototype.$Message.success({
            content:e, duration:t, onClose:function(){
              n&&n()
            }
          })
        }, e.warning=function(e, t, r, n){
          void 0===t&&(t=3), void 0===r&&(r=24), o.default.prototype.$Message.config({
            top:r
          }), o.default.prototype.$Message.warning({
            content:e, duration:t, onClose:function(){
              n&&n()
            }
          })
        }, e.error=function(e, t, r, n){
          void 0===t&&(t=3), void 0===r&&(r=24), o.default.prototype.$Message.config({
            top:r
          }), o.default.prototype.$Message.error({
            content:e, duration:t, onClose:function(){
              n&&n()
            }
          })
        }, e.info=function(e, t, r, n){
          void 0===t&&(t=3), void 0===r&&(r=24), o.default.prototype.$Message.config({
            top:r
          }), o.default.prototype.$Message.info({
            content:e, duration:t, onClose:function(){
              n&&n()
            }
          })
        }, e
      }
      ();
      const i=n;
      window.toast=n
    }, 838215:(e, t, r)=>{
      var o=r(571478);
      e.exports=[
        "$scope", "moduleRepository", function(e, t){
          e.module={
          };
          var r=o(e), n=function(){
            return e.module.name="", r.hide()
          }, i=function(t){
            return e.errors=t.errors, r.hide()
          };
          return e.save=function(){
            return r.show(), t.addModule(e.module, n, i)
          }
        }
      ]
    }, 841151:(e, t, r)=>{
      var o=r(248124);
      e.exports=[
        "$scope", e=>e.addActivity=function(e){
          var t=e.currentTarget;
          o(t).addClass("hide"), o(t).parent("div").find(".select-activity").removeClass("hide");
          var r=function e(r){
            if(r.target!==o(t)&&("keydown"!==r.type||27===r.keyCode||13===r.keyCode))return o(".add-activity-button").removeClass("hide"), o(".select-activity").addClass("hide"), o("body")[
              0
            ].removeEventListener("click", e, !0), o("body")[
              0
            ].removeEventListener("keydown", e)
          };
          o("body")[
            0
          ].addEventListener("click", r, !0), o("body")[
            0
          ].addEventListener("keydown", r)
        }
      ]
    }, 869536:(e, t, r)=>{
      var o=r(756029), n=r(571478);
      e.exports=[
        "$scope", "$rootScope", "moduleRepository", function(e, t, r){
          var i=n(e);
          return e.showUpdateModule=function(e){
            return t.copiedModule=o.copy(e), e.inEdit=!0
          }, e.delModule=function(e){
            var t=()=>i.hide();
            return i.show(), r.deleteModule(e, t, t)
          }
        }
      ]
    }, 901499:(e, t, r)=>{
      var o=r(302543);
      e.exports=function(e, t, r, n, i){
        var s=function(r){
          return t.removeAllDependants(r, (function(){
            if(n.refreshPrerequisitesForAllDependantActivities(e.course, r), i.length>0)return n.updateCriterionInfoForActivities(e.course, i)
          }))
        };
        return{
          refreshPrerequisitesAfterActivityEdit:()=>(r.module_id&&0!==r.module_id||s(r), function(t){
            if(e.isCourseInCheckpointMode){
              var r=n.getDependantActivities(t, e.course, e);
              if(r.length>0)return o.isEmpty(t.completion_criterion)?s(t):n.changeInfoOfDependantActivities(r, t)
            }
            else if(o.isEmpty(t.completion_criterion))return s(t)
          }
          (r))
        }
      }
    }, 909308:(e, t, r)=>{
      var o=r(248124);
      r(269193), r(683396);
      r(606913).deleteInteraction;
      var n=r(955641);
      e.exports=function(e, t, r, i){
        var s, a=[
          "web_link", "material", "online_video", "interaction", "slide", "page", "scorm", "lesson"
        ], c=[
          "homework", "forum", "questionnaire", "virtual_experiment", "online_video", "exam", "classroom"
        ], u="#activity-delete-popup", l=[
          "select_student", "select_group"
        ];
        function d(){
          return o(u).foundation("reveal", "open"), null
        }
        e.deleteActivity=o=>function(o){
          var n=a.includes(o.type)?"courseware":o.type;
          l.includes(o.type)&&(n="classroom");
          var i=![
            "questionnaire", "chatroom", "zoom"
          ].includes(o.type);
          r[
            u
          ]
          ={
            fromPage:"module", activityType:n, noOption:!i
          }, e.safeDelete=!1, e.deletingActivity=o, e.confirmedOption={
            deleteOriginal:!0
          }, e.confirm=()=>t.deleteActivityFromCourse(o, e.course, p(), s, s), c.includes(o.type)?t.loadActivityDeleteCheck(o.id, o.type).then((t=>{
            e.safeDelete=t.safe_delete
          })).finally((()=>{
            d()
          })):d()
        }
        (o), e.deleteExam=o=>function(o){
          var a;
          null!==(a=i.featureToggles)&&void 0!==a&&a.outcomeBasedEducation&&n(e, e.course.id, o, t).getObeRelation(), r[
            u
          ]
          ={
            fromPage:"module", activityType:"exam"
          }, e.safeDelete=!1, e.deletingActivity=o, e.confirmedOption={
            deleteOriginal:!0
          }, e.confirm=()=>t.deleteExam(o, e.course, p(), s, s), c.includes(o.type)?t.loadActivityDeleteCheck(o.id, o.type).then((t=>{
            e.safeDelete=t.safe_delete
          })).finally((()=>{
            d()
          })):d()
        }
        (o), e.deleteClassroom=o=>function(o){
          r[
            u
          ]
          ={
            fromPage:"module", activityType:"classroom"
          }, e.safeDelete=!1, e.deletingActivity=o, e.confirmedOption={
            deleteOriginal:!0
          }, e.confirm=()=>t.deleteClassroom(o, e.course, p(), s, s), c.includes(o.type)?t.loadActivityDeleteCheck(o.id, o.type).then((t=>{
            e.safeDelete=t.safe_delete
          })).finally((()=>{
            d()
          })):d()
        }
        (o), e.deleteAskQuestion=o=>function(o){
          r[
            u
          ]
          ={
            fromPage:"module", activityType:"classroom"
          }, e.safeDelete=!1, e.deletingActivity=o, e.confirmedOption={
            deleteOriginal:!0
          }, e.confirm=()=>t.deleteAskQuestion(o, e.course, p(), s, s), d()
        }
        (o);
        var p=function(){
          return e.confirmedOption.deleteOriginal?{
          }
          :{
            keep_original:!0
          }
        };
        return s=()=>{
          if(o(u).foundation("reveal", "close"), e.deletingActivity.length?deletingActivity.some((e=>$scope.activityOBERelated(e))):e.activityOBERelated(e.deletingActivity)){
            var t="/course/".concat(e.course.id, "/edit#/obe-setting");
            i.location.href=t
          }
        }
      }
    }, 951708:(e, t, r)=>{
      r.r(t), r.d(t, {
        addStoreQuizAnalysis:()=>te, createAiQuizzes:()=>O, deleteKnowledgeBaseResource:()=>J, generateAiQuizzes:()=>A, generateAiQuizzesByResource:()=>k, generateAiQuizzesByText:()=>E, getActivitiesByModule:()=>C, getActivityAiQuizzes:()=>T, getAiQuizSettings:()=>P, getAiQuizSubjects:()=>$, getAirActivityEnableMap:()=>H, getAirQuizAnalyze:()=>q, getAnalysisStatus:()=>X, getCourseModules:()=>x, getCurrentCourseCredits:()=>U, getCurrentUserAirToken:()=>L, getCurrentUserCredits:()=>R, getDocumentModule:()=>Y, getDocumentPreviewUrl:()=>Q, getFormatStreamSubjects:()=>B, getInstructorCreditsByResource:()=>N, getKnowledgeBase:()=>W, getKnowledgeBaseResources:()=>V, getSelfSubmissions:()=>j, getStatistics:()=>D, getStoredQuizAnalysis:()=>ee, getSubjectAnswerStatistic:()=>z, getUserHasAnyCourseAiAbility:()=>K, retryKnowledgeBaseResource:()=>Z, startSSEStream:()=>F, submitSubmissions:()=>M, updateAiQuizzes:()=>I, uploadKnowledgeBaseResource:()=>G
      });
      r(540590), r(418665), r(335231), r(107918), r(169218), r(269193), r(445708), r(658379), r(14602);
      var o=r(272505), n=r.n(o), i=r(302543), s=r.n(i), a=r(920453), c=r(218831), u=r(552979), l=r(940085), d=r(467086), p=r(448941), v=r(886009), f=r(731904), m=function(){
        return(m=Object.assign||function(e){
          for(var t, r=1, o=arguments.length;
          r<o;
          r++)for(var n in t=arguments[
            r
          ])Object.prototype.hasOwnProperty.call(t, n)&&(e[
            n
          ]
          =t[
            n
          ]);
          return e
        }).apply(this, arguments)
      }, y=function(e, t, r, o){
        return new(r||(r=Promise))((function(n, i){
          function s(e){
            try{
              c(o.next(e))
            }
            catch(e){
              i(e)
            }
          }
          function a(e){
            try{
              c(o.throw(e))
            }
            catch(e){
              i(e)
            }
          }
          function c(e){
            var t;
            e.done?n(e.value):(t=e.value, t instanceof r?t:new r((function(e){
              e(t)
            }))).then(s, a)
          }
          c((o=o.apply(e, t||[
          ])).next())
        }))
      }, h=function(e, t){
        var r, o, n, i, s={
          label:0, sent:function(){
            if(1&n[
              0
            ])throw n[
              1
            ];
            return n[
              1
            ]
          }, trys:[
          ], ops:[
          ]
        };
        return i={
          next:a(0), throw:a(1), return:a(2)
        }, "function"==typeof Symbol&&(i[
          Symbol.iterator
        ]
        =function(){
          return this
        }), i;
        function a(a){
          return function(c){
            return function(a){
              if(r)throw new TypeError("Generator is already executing.");
              for(;
              i&&(i=0, a[
                0
              ]
              &&(s=0)), s;
              )try{
                if(r=1, o&&(n=2&a[
                  0
                ]
                ?o.return:a[
                  0
                ]
                ?o.throw||((n=o.return)&&n.call(o), 0):o.next)&&!(n=n.call(o, a[
                  1
                ])).done)return n;
                switch(o=0, n&&(a=[
                  2&a[
                    0
                  ], n.value
                ]), a[
                  0
                ]){
                  case 0:case 1:n=a;
                  break;
                  case 4:return s.label++, {
                    value:a[
                      1
                    ], done:!1
                  };
                  case 5:s.label++, o=a[
                    1
                  ], a=[
                    0
                  ];
                  continue;
                  case 7:a=s.ops.pop(), s.trys.pop();
                  continue;
                  default:if(!(n=s.trys, (n=n.length>0&&n[
                    n.length-1
                  ])||6!==a[
                    0
                  ]
                  &&2!==a[
                    0
                  ])){
                    s=0;
                    continue
                  }
                  if(3===a[
                    0
                  ]
                  &&(!n||a[
                    1
                  ]
                  >n[
                    0
                  ]
                  &&a[
                    1
                  ]
                  <n[
                    3
                  ])){
                    s.label=a[
                      1
                    ];
                    break
                  }
                  if(6===a[
                    0
                  ]
                  &&s.label<n[
                    1
                  ]){
                    s.label=n[
                      1
                    ], n=a;
                    break
                  }
                  if(n&&s.label<n[
                    2
                  ]){
                    s.label=n[
                      2
                    ], s.ops.push(a);
                    break
                  }
                  n[
                    2
                  ]
                  &&s.ops.pop(), s.trys.pop();
                  continue
                }
                a=t.call(e, s)
              }
              catch(e){
                a=[
                  6, e
                ], o=0
              }
              finally{
                r=n=0
              }
              if(5&a[
                0
              ])throw a[
                1
              ];
              return{
                value:a[
                  0
                ]
                ?a[
                  1
                ]
                :void 0, done:!0
              }
            }
            ([
              a, c
            ])
          }
        }
      };
      var g, b, _, w, S, x=function(e){
        return y(void 0, void 0, void 0, (function(){
          return h(this, (function(t){
            switch(t.label){
              case 0:return[
                4, n().get("/api/courses/".concat(e, "/modules"))
              ];
              case 1:return[
                2, t.sent().data.modules
              ]
            }
          }))
        }))
      }, C=function(e){
        return y(void 0, void 0, void 0, (function(){
          return h(this, (function(t){
            switch(t.label){
              case 0:return[
                4, n().get("/api/courses/".concat(e, "/activities?sub_course_id=0"))
              ];
              case 1:return[
                2, t.sent().data.activities
              ]
            }
          }))
        }))
      }, A=function(e, t){
        return y(void 0, void 0, void 0, (function(){
          return h(this, (function(r){
            switch(r.label){
              case 0:return[
                4, n().post("/api/courseware-quiz/activity/".concat(e, "/subjects"), t)
              ];
              case 1:return[
                2, r.sent().data.subjects.map((function(e){
                  return(0, a.plainToClass)(d.AiSubject, e, {
                    excludeExtraneousValues:!0
                  })
                }))
              ]
            }
          }))
        }))
      }, k=function(e){
        return y(void 0, void 0, void 0, (function(){
          return h(this, (function(t){
            switch(t.label){
              case 0:return[
                4, n().post("/api/courseware-quiz/generate-subjects", e)
              ];
              case 1:return[
                2, t.sent().data.subjects.map((function(e){
                  return(0, a.plainToClass)(d.AiSubject, e, {
                    excludeExtraneousValues:!0
                  })
                }))
              ]
            }
          }))
        }))
      }, E=function(e){
        return y(void 0, void 0, void 0, (function(){
          return h(this, (function(t){
            switch(t.label){
              case 0:return[
                4, n().post("/api/courseware-quiz/generate-subjects-by-text", e)
              ];
              case 1:return[
                2, t.sent().data.subjects.map((function(e){
                  return(0, a.plainToClass)(d.AiSubject, e, {
                    excludeExtraneousValues:!0
                  })
                }))
              ]
            }
          }))
        }))
      }, O=function(e, t){
        return y(void 0, void 0, void 0, (function(){
          return h(this, (function(r){
            switch(r.label){
              case 0:return r.trys.push([
                0, 2, , 3
              ]), [
                4, n().post("/api/courseware-quiz/activity/".concat(e, "/quizzes"), {
                  upload_reference_id:t.uploadReferenceId, subjects:t.subjects.map((function(e){
                    return(0, a.classToPlain)(e)
                  }))
                })
              ];
              case 1:return[
                2, 200===r.sent().status
              ];
              case 2:return r.sent(), [
                2, !1
              ];
              case 3:return[
                2
              ]
            }
          }))
        }))
      }, I=function(e, t, r){
        return void 0===r&&(r=!1), y(void 0, void 0, void 0, (function(){
          var o;
          return h(this, (function(i){
            switch(i.label){
              case 0:return i.trys.push([
                0, 2, , 3
              ]), o=t.subjects.map((function(e){
                return(0, a.classToPlain)(e)
              })), r&&o.forEach((function(e){
                delete e.id
              })), [
                4, n().put("/api/courseware-quiz/quiz/".concat(e, "/subjects"), {
                  subjects:o
                })
              ];
              case 1:return[
                2, [
                  i.sent().data.quiz_id, !0
                ]
              ];
              case 2:return i.sent(), [
                2, [
                  e, !1
                ]
              ];
              case 3:return[
                2
              ]
            }
          }))
        }))
      }, T=function(e){
        return y(void 0, void 0, void 0, (function(){
          var t, r;
          return h(this, (function(o){
            switch(o.label){
              case 0:return o.trys.push([
                0, 2, , 3
              ]), [
                4, n().get("/api/courseware-quiz/activity/".concat(e, "/quizzes"))
              ];
              case 1:return t=o.sent(), r=t.data, 200===t.status?[
                2, r.map((function(e){
                  return(0, a.plainToClass)(d.CoursewareQuizzes, e, {
                    excludeExtraneousValues:!0
                  })
                }))
              ]
              :[
                2, null
              ];
              case 2:return o.sent(), [
                2, null
              ];
              case 3:return[
                2
              ]
            }
          }))
        }))
      }, $=function(e){
        return y(void 0, void 0, void 0, (function(){
          var t, r;
          return h(this, (function(o){
            switch(o.label){
              case 0:return o.trys.push([
                0, 2, , 3
              ]), [
                4, n().get("/api/courseware-quiz/quiz/".concat(e, "/subjects"))
              ];
              case 1:return t=o.sent(), r=t.data, 200===t.status?[
                2, r.subjects.sort((function(e, t){
                  return e.sort-t.sort
                })).map((function(e){
                  return(0, a.plainToClass)(d.AiSubject, e, {
                    excludeExtraneousValues:!0
                  })
                }))
              ]
              :[
                2, null
              ];
              case 2:return o.sent(), [
                2, null
              ];
              case 3:return[
                2
              ]
            }
          }))
        }))
      }, P=function(){
        return y(void 0, void 0, void 0, (function(){
          var e, t;
          return h(this, (function(r){
            switch(r.label){
              case 0:return r.trys.push([
                0, 2, , 3
              ]), [
                4, n().get("/api/courseware-quiz/settings")
              ];
              case 1:return e=r.sent(), t=e.data, 200===e.status?[
                2, (0, a.plainToClass)(d.QuizSettings, t.setting, {
                  excludeExtraneousValues:!0
                })
              ]
              :[
                2, null
              ];
              case 2:return r.sent(), [
                2, null
              ];
              case 3:return[
                2
              ]
            }
          }))
        }))
      }, M=function(e, t){
        return y(void 0, void 0, void 0, (function(){
          var r, o, i;
          return h(this, (function(s){
            switch(s.label){
              case 0:return s.trys.push([
                0, 2, , 3
              ]), [
                4, n().post("/api/courseware-quiz/quiz/".concat(e, "/submissions"), (0, a.classToPlain)(t))
              ];
              case 1:return[
                2, 200===s.sent().status
              ];
              case 2:return r=s.sent(), o=r.response.data.errors, i=(0, v.u1)(o), f.Toast.error("".concat(u.default.t("air.saveFail"), ",").concat(i)), [
                2, !1
              ];
              case 3:return[
                2
              ]
            }
          }))
        }))
      }, j=function(e){
        return y(void 0, void 0, void 0, (function(){
          var t, r, o;
          return h(this, (function(i){
            switch(i.label){
              case 0:return i.trys.push([
                0, 2, , 3
              ]), [
                4, n().get("/api/courseware-quiz/quiz/".concat(e, "/my-submission"))
              ];
              case 1:return t=i.sent(), r=t.status, o=t.data, 200===r?[
                2, (0, a.plainToClass)(d.StudentSubmission, o, {
                  excludeExtraneousValues:!0
                })
              ]
              :[
                2, null
              ];
              case 2:return i.sent(), [
                2, null
              ];
              case 3:return[
                2
              ]
            }
          }))
        }))
      }, D=function(e){
        return y(void 0, void 0, void 0, (function(){
          var t, r, o;
          return h(this, (function(i){
            switch(i.label){
              case 0:return i.trys.push([
                0, 2, , 3
              ]), [
                4, n().get("/api/courseware-quiz/quiz/".concat(e, "/statistic"))
              ];
              case 1:return t=i.sent(), r=t.status, o=t.data, 200===r?[
                2, (0, a.plainToClass)(d.AiQuizStatistic, o, {
                  excludeExtraneousValues:!0
                })
              ]
              :[
                2, null
              ];
              case 2:return i.sent(), [
                2, null
              ];
              case 3:return[
                2
              ]
            }
          }))
        }))
      }, z=function(e, t, r, o, i, s){
        return void 0===i&&(i=1), void 0===s&&(s=10), y(void 0, void 0, void 0, (function(){
          var u, l, p;
          return h(this, (function(v){
            switch(v.label){
              case 0:return u=(0, c.decamelizeKeys)({
                page:i, pageSize:s, conditions:o
              }), [
                4, n().get("/api/course/".concat(e, "/courseware-quiz/quiz/").concat(t, "/subject/").concat(r, "/statistic"), {
                  params:u
                })
              ];
              case 1:return l=v.sent(), p=(0, a.plainToClass)(d.UserAnswerSubjectStatistic, l.data.items), [
                2, {
                  page:l.data.page, pageSize:l.data.page_size, pages:l.data.pages, total:l.data.total, items:p
                }
              ]
            }
          }))
        }))
      }, R=(g=function(){
        return y(void 0, void 0, void 0, (function(){
          var e;
          return h(this, (function(t){
            switch(t.label){
              case 0:return[
                4, n().get("/api/air-credit/user")
              ];
              case 1:return e=t.sent().data, [
                2, (0, a.plainToClass)(p.mU, e)
              ]
            }
          }))
        }))
      }, _=new Set, w=new Set, S=s().debounce((function(e){
        g.apply(void 0, e).then((function(){
          for(var e=[
          ], t=0;
          t<arguments.length;
          t++)e[
            t
          ]
          =arguments[
            t
          ];
          _.forEach((function(t){
            return t.apply(void 0, e)
          })), _.clear()
        })).catch((function(){
          for(var e=[
          ], t=0;
          t<arguments.length;
          t++)e[
            t
          ]
          =arguments[
            t
          ];
          w.forEach((function(t){
            return t.apply(void 0, e)
          })), w.clear()
        }))
      }), b), function(){
        for(var e=[
        ], t=0;
        t<arguments.length;
        t++)e[
          t
        ]
        =arguments[
          t
        ];
        return new Promise((function(t, r){
          _.add(t), w.add(r), S(e)
        }))
      }), N=function(e){
        return y(void 0, void 0, void 0, (function(){
          var t;
          return h(this, (function(r){
            switch(r.label){
              case 0:return[
                4, n().get("/api/air-credit/resources/".concat(e, "/credits"))
              ];
              case 1:return t=r.sent().data, [
                2, (0, a.plainToClass)(p.mU, t)
              ]
            }
          }))
        }))
      }, U=function(e){
        return y(void 0, void 0, void 0, (function(){
          var t;
          return h(this, (function(r){
            switch(r.label){
              case 0:return[
                4, n().get("/api/air-credit/course", {
                  params:{
                    course_id:e
                  }
                })
              ];
              case 1:return t=r.sent().data, [
                2, (0, a.plainToClass)(p.aN, t)
              ]
            }
          }))
        }))
      }, L=function(e, t){
        return y(void 0, void 0, void 0, (function(){
          var r, o, i;
          return h(this, (function(a){
            switch(a.label){
              case 0:return r={
              }, s().isEmpty(e)||(e.id&&(r.module_id=e.id), e.type&&(r.module_type=e.type)), t&&("lesson"===t.type?r.resource_name=null!==(i=t.resourceName)&&void 0!==i?i:"":r.upload_id=t.id), [
                4, n().get("/api/air-credit/user/token", {
                  params:r
                })
              ];
              case 1:return o=a.sent().data, [
                2, (0, c.camelizeKeys)(o)
              ]
            }
          }))
        }))
      }, F=function(e, t, r){
        var o=r.onOpen, n=r.onMessage, i=r.onMessageError, s=r.onClose, a=r.onError, c=new AbortController, u=c.signal;
        return(0, l.y)(e, {
          method:"POST", headers:{
            "Content-Type":"application/json"
          }, body:JSON.stringify(t), signal:u, onopen:function(e){
            return y(this, void 0, void 0, (function(){
              var t, r;
              return h(this, (function(n){
                switch(n.label){
                  case 0:return e.ok?o?[
                    4, o(e)
                  ]
                  :[
                    3, 2
                  ]
                  :[
                    3, 3
                  ];
                  case 1:n.sent(), n.label=2;
                  case 2:return[
                    3, 5
                  ];
                  case 3:return[
                    4, e.json()
                  ];
                  case 4:throw t=n.sent(), r="", t&&(r=t.message), new Error(r);
                  case 5:return[
                    2
                  ]
                }
              }))
            }))
          }, openWhenHidden:!0, onmessage:function(e){
            if(""===e.event||"message"===e.event){
              if("error"in JSON.parse(e.data)){
                var t=JSON.parse(e.data), r=null==t?void 0:t.error;
                throw f.Toast.error(r), i&&i(r), new Error("onMessageError")
              }
              n&&n(e.data)
            }
          }, onclose:function(){
            s&&s()
          }, onerror:function(e){
            throw"onMessageError"!==e.message&&a&&a(e), e
          }
        }), c
      }, B=function(e){
        return y(void 0, void 0, void 0, (function(){
          var t, r;
          return h(this, (function(o){
            switch(o.label){
              case 0:return o.trys.push([
                0, 2, , 3
              ]), [
                4, n().post("/api/courseware-quiz/format-question", e)
              ];
              case 1:return t=o.sent(), r=t.data, 200===t.status?[
                2, r.subjects.map((function(e){
                  return(0, a.plainToClass)(d.AiSubject, e, {
                    excludeExtraneousValues:!0
                  })
                }))
              ]
              :[
                2, null
              ];
              case 2:return o.sent(), [
                2, null
              ];
              case 3:return[
                2
              ]
            }
          }))
        }))
      }, q=function(e){
        return y(void 0, void 0, void 0, (function(){
          var t, r;
          return h(this, (function(o){
            switch(o.label){
              case 0:return o.trys.push([
                0, 2, , 3
              ]), [
                4, n().post("/api/courseware-quiz/quiz/".concat(e, "/analyze"))
              ];
              case 1:return t=o.sent(), r=t.data, t.status, [
                2, r
              ];
              case 2:return o.sent(), [
                2, null
              ];
              case 3:return[
                2
              ]
            }
          }))
        }))
      }, H=function(){
        var e, t, r;
        return new Map([
          [
            "lesson", null===(e=window.featureToggles)||void 0===e?void 0:e.airLessonQuiz
          ], [
            "material", null===(t=window.featureToggles)||void 0===t?void 0:t.airDocQuiz
          ], [
            "online_video", null===(r=window.featureToggles)||void 0===r?void 0:r.airVideoQuiz
          ]
        ])
      }, K=function(){
        return y(void 0, void 0, void 0, (function(){
          var e;
          return h(this, (function(t){
            switch(t.label){
              case 0:return[
                4, n().get("/api/air-credit/user/courses/ai-ability")
              ];
              case 1:return e=t.sent().data, [
                2, (0, c.camelizeKeys)(e)
              ]
            }
          }))
        }))
      }, W=function(e){
        return y(void 0, void 0, void 0, (function(){
          return h(this, (function(t){
            switch(t.label){
              case 0:return[
                4, n().get("/api/course/".concat(e, "/knowledge-base"))
              ];
              case 1:return[
                2, t.sent().data
              ]
            }
          }))
        }))
      }, G=function(e, t, r){
        return y(void 0, void 0, void 0, (function(){
          var o;
          return h(this, (function(i){
            switch(i.label){
              case 0:return(o=new FormData).append("file", r), [
                4, n().post("/api/course/".concat(e, "/knowledge-base/").concat(t, "/resources/uploads"), o)
              ];
              case 1:return[
                2, i.sent().data
              ]
            }
          }))
        }))
      }, V=function(e, t, r, o, i){
        return y(void 0, void 0, void 0, (function(){
          var s, a;
          return h(this, (function(u){
            switch(u.label){
              case 0:return s=(0, c.decamelizeKeys)(m({
                page:r, pageSize:o
              }, i)), [
                4, n().get("/api/course/".concat(e, "/knowledge-base/").concat(t, "/resources"), {
                  params:s
                })
              ];
              case 1:return a=u.sent().data, [
                2, (0, c.camelizeKeys)(a)
              ]
            }
          }))
        }))
      }, Q=function(e){
        return y(void 0, void 0, void 0, (function(){
          return h(this, (function(t){
            switch(t.label){
              case 0:return[
                4, n().get("/api/uploads/document/".concat(e, "/url?preview=true"))
              ];
              case 1:return[
                2, t.sent().data
              ]
            }
          }))
        }))
      }, Y=function(e, t){
        return y(void 0, void 0, void 0, (function(){
          var r, o;
          return h(this, (function(i){
            switch(i.label){
              case 0:return r=(0, c.decamelizeKeys)({
                courseId:e, uploadIds:t
              }), [
                4, n().post("/api/uploads/details/query", r)
              ];
              case 1:return o=i.sent().data, [
                2, (0, c.camelizeKeys)(o.items)
              ]
            }
          }))
        }))
      }, J=function(e, t, r){
        return y(void 0, void 0, void 0, (function(){
          return h(this, (function(o){
            switch(o.label){
              case 0:return[
                4, n().post("/api/course/".concat(e, "/knowledge-base/").concat(t, "/resources/remove"), {
                  resource_id:r
                })
              ];
              case 1:return[
                2, o.sent().data
              ]
            }
          }))
        }))
      }, Z=function(e, t, r){
        return y(void 0, void 0, void 0, (function(){
          return h(this, (function(o){
            switch(o.label){
              case 0:return[
                4, n().post("/api/course/".concat(e, "/knowledge-base/").concat(t, "/resources/retry"), {
                  resource_ids:r
                })
              ];
              case 1:return[
                2, o.sent().data
              ]
            }
          }))
        }))
      }, X=function(e, t){
        return y(void 0, void 0, void 0, (function(){
          var r;
          return h(this, (function(o){
            switch(o.label){
              case 0:return[
                4, n().get("/api/submissions/".concat(e, "/").concat(t, "/analysis/can-reanalyze"))
              ];
              case 1:return r=o.sent().data, [
                2, (0, c.camelizeKeys)(r)
              ]
            }
          }))
        }))
      }, ee=function(e, t){
        return y(void 0, void 0, void 0, (function(){
          var r;
          return h(this, (function(o){
            switch(o.label){
              case 0:return[
                4, n().get("/api/submissions/".concat(e, "/").concat(t, "/analysis"))
              ];
              case 1:return r=o.sent().data, [
                2, (0, c.camelizeKeys)(r)
              ]
            }
          }))
        }))
      }, te=function(e, t, r){
        return y(void 0, void 0, void 0, (function(){
          return h(this, (function(o){
            switch(o.label){
              case 0:return[
                4, n().post("/api/submissions/".concat(e, "/").concat(t, "/analysis"), {
                  content:r
                })
              ];
              case 1:return[
                2, o.sent()
              ]
            }
          }))
        }))
      }
    }, 957174:(e, t, r)=>{
      r.d(t, {
        FD:()=>g, rt:()=>b, gW:()=>_, iN:()=>h, MB:()=>w, CT:()=>S
      });
      r(540590), r(418665), r(269193), r(14602);
      var o=r(218831), n=r(272505), i=r.n(n), s=r(920453), a=r(738645), c=r(152229), u=r(759513), l=r(265356), d=function(e, t, r, o){
        var n, i=arguments.length, s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t, r):o;
        if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e, t, r, o);
        else for(var a=e.length-1;
        a>=0;
        a--)(n=e[
          a
        ])&&(s=(i<3?n(s):i>3?n(t, r, s):n(t, r))||s);
        return i>3&&s&&Object.defineProperty(t, r, s), s
      }, p=function(){
        function e(){
        }
        return d([
          (0, a.v)()
        ], e.prototype, "id", void 0), d([
          (0, a.v)()
        ], e.prototype, "name", void 0), d([
          (0, a.v)()
        ], e.prototype, "userNo", void 0), e
      }
      (), v=function(){
        function e(){
          this.studentCount=0
        }
        return d([
          (0, a.v)()
        ], e.prototype, "published", void 0), d([
          (0, a.v)()
        ], e.prototype, "teachingClassName", void 0), d([
          (0, a.v)()
        ], e.prototype, "studentCount", void 0), e
      }
      (), f=function(){
        function e(){
          this.academicYear=null
        }
        return d([
          (0, a.v)(), (0, c.Z)((function(){
            return u.r2
          }))
        ], e.prototype, "academicYear", void 0), d([
          (0, a.v)()
        ], e.prototype, "archived", void 0), d([
          (0, a.v)()
        ], e.prototype, "status", void 0), d([
          (0, a.v)(), (0, c.Z)((function(){
            return v
          }))
        ], e.prototype, "courseAttributes", void 0), d([
          (0, a.v)()
        ], e.prototype, "courseCode", void 0), d([
          (0, a.v)()
        ], e.prototype, "courseType", void 0), d([
          (0, a.v)(), (0, c.Z)((function(){
            return l.nC
          }))
        ], e.prototype, "department", void 0), d([
          (0, a.v)()
        ], e.prototype, "id", void 0), d([
          (0, a.v)()
        ], e.prototype, "importedFrom", void 0), d([
          (0, a.v)(), (0, c.Z)((function(){
            return p
          }))
        ], e.prototype, "instructors", void 0), d([
          (0, a.v)()
        ], e.prototype, "name", void 0), d([
          (0, a.v)(), (0, c.Z)((function(){
            return u.nG
          }))
        ], e.prototype, "semester", void 0), d([
          (0, a.v)()
        ], e.prototype, "semesterId", void 0), d([
          (0, a.v)()
        ], e.prototype, "isInstructor", void 0), e
      }
      (), m=function(e, t, r, o){
        return new(r||(r=Promise))((function(n, i){
          function s(e){
            try{
              c(o.next(e))
            }
            catch(e){
              i(e)
            }
          }
          function a(e){
            try{
              c(o.throw(e))
            }
            catch(e){
              i(e)
            }
          }
          function c(e){
            var t;
            e.done?n(e.value):(t=e.value, t instanceof r?t:new r((function(e){
              e(t)
            }))).then(s, a)
          }
          c((o=o.apply(e, t||[
          ])).next())
        }))
      }, y=function(e, t){
        var r, o, n, i, s={
          label:0, sent:function(){
            if(1&n[
              0
            ])throw n[
              1
            ];
            return n[
              1
            ]
          }, trys:[
          ], ops:[
          ]
        };
        return i={
          next:a(0), throw:a(1), return:a(2)
        }, "function"==typeof Symbol&&(i[
          Symbol.iterator
        ]
        =function(){
          return this
        }), i;
        function a(a){
          return function(c){
            return function(a){
              if(r)throw new TypeError("Generator is already executing.");
              for(;
              i&&(i=0, a[
                0
              ]
              &&(s=0)), s;
              )try{
                if(r=1, o&&(n=2&a[
                  0
                ]
                ?o.return:a[
                  0
                ]
                ?o.throw||((n=o.return)&&n.call(o), 0):o.next)&&!(n=n.call(o, a[
                  1
                ])).done)return n;
                switch(o=0, n&&(a=[
                  2&a[
                    0
                  ], n.value
                ]), a[
                  0
                ]){
                  case 0:case 1:n=a;
                  break;
                  case 4:return s.label++, {
                    value:a[
                      1
                    ], done:!1
                  };
                  case 5:s.label++, o=a[
                    1
                  ], a=[
                    0
                  ];
                  continue;
                  case 7:a=s.ops.pop(), s.trys.pop();
                  continue;
                  default:if(!(n=s.trys, (n=n.length>0&&n[
                    n.length-1
                  ])||6!==a[
                    0
                  ]
                  &&2!==a[
                    0
                  ])){
                    s=0;
                    continue
                  }
                  if(3===a[
                    0
                  ]
                  &&(!n||a[
                    1
                  ]
                  >n[
                    0
                  ]
                  &&a[
                    1
                  ]
                  <n[
                    3
                  ])){
                    s.label=a[
                      1
                    ];
                    break
                  }
                  if(6===a[
                    0
                  ]
                  &&s.label<n[
                    1
                  ]){
                    s.label=n[
                      1
                    ], n=a;
                    break
                  }
                  if(n&&s.label<n[
                    2
                  ]){
                    s.label=n[
                      2
                    ], s.ops.push(a);
                    break
                  }
                  n[
                    2
                  ]
                  &&s.ops.pop(), s.trys.pop();
                  continue
                }
                a=t.call(e, s)
              }
              catch(e){
                a=[
                  6, e
                ], o=0
              }
              finally{
                r=n=0
              }
              if(5&a[
                0
              ])throw a[
                1
              ];
              return{
                value:a[
                  0
                ]
                ?a[
                  1
                ]
                :void 0, done:!0
              }
            }
            ([
              a, c
            ])
          }
        }
      }, h=function(e, t, r){
        return m(void 0, void 0, void 0, (function(){
          var n, a, c, u;
          return y(this, (function(l){
            switch(l.label){
              case 0:return"id,name,course_code,department(id,name),course_type,status,academic_year_id,semester_id,semester,academic_year,imported_from,archived,instructors(id,name),course_attributes(teaching_class_name)", n=(0, o.decamelizeKeys)({
                page:e, pageSize:t, conditions:r, fields:"id,name,course_code,department(id,name),course_type,status,academic_year_id,semester_id,semester,academic_year,imported_from,archived,instructors(id,name),course_attributes(teaching_class_name)"
              }), [
                4, i().post("/api/my-courses", n)
              ];
              case 1:return a=l.sent(), c=(0, o.camelizeKeys)(a.data), u=(0, s.plainToClass)(f, c.courses), [
                2, {
                  page:e, pageSize:t, pages:c.pages, total:c.total, start:c.start, end:c.end, items:u
                }
              ]
            }
          }))
        }))
      }, g=function(e, t){
        var r={
          subCourseIds:t
        };
        return i().post("/api/blueprint/".concat(e, "/sub-courses"), (0, o.decamelizeKeys)(r))
      }, b=function(e, t){
        return m(void 0, void 0, void 0, (function(){
          var r, n;
          return y(this, (function(s){
            switch(s.label){
              case 0:return r={
                sources:t
              }, [
                4, i().post("/api/blueprint/".concat(e, "/check-prerequisites"), r)
              ];
              case 1:return n=s.sent(), [
                2, (0, o.camelizeKeys)(n.data).hasPrerequisites||!1
              ]
            }
          }))
        }))
      }, _=function(e, t, r, n){
        return void 0===r&&(r=0), void 0===n&&(n=""), m(void 0, void 0, void 0, (function(){
          var a, c;
          return y(this, (function(u){
            switch(u.label){
              case 0:return[
                4, i().get("/api/blueprint/".concat(e, "/sub-courses"), {
                  params:{
                    keyword:t, source_id:r, source_type:n
                  }
                })
              ];
              case 1:return a=u.sent(), c=(0, o.camelizeKeys)(a.data), [
                2, (0, s.plainToClass)(f, c.courses)
              ]
            }
          }))
        }))
      }, w=function(e, t){
        return i().delete("/api/blueprint/".concat(e, "/sub-courses/").concat(t))
      }, S=function(e, t){
        return i().post("/api/blueprint/sub-courses/".concat(e, "/name"), {
          name:t
        })
      }
    }, 975635:(e, t, r)=>{
      r(658379);
      var o=r(592207);
      function n(e, t, r, o, n, i, s){
        try{
          var a=e[
            i
          ]
          (s), c=a.value
        }
        catch(e){
          return void r(e)
        }
        a.done?t(c):Promise.resolve(c).then(o, n)
      }
      r(207452);
      r(181769).canEditActivity, r(5782).default, r(874254).A, r(901499);
      var i=r(951708).getActivityAiQuizzes;
      e.exports=[
        "$rootScope", "$scope", function(e, t){
          t.loadingAiQuizzes=!1;
          var r=function(){
            var r, s=(r=o.mark((function r(n){
              var s;
              return o.wrap((function(r){
                for(;
                ;
                )switch(r.prev=r.next){
                  case 0:if(e.aiQuizCount=0, n){
                    r.next=3;
                    break
                  }
                  return r.abrupt("return");
                  case 3:return t.loadingAiQuizzes=!0, r.next=6, i(n.id);
                  case 6:(s=r.sent)&&(e.aiQuizCount=s.length, n.uploads.forEach((e=>{
                    var t=s.find((t=>t.uploadReferenceId===e.reference_id));
                    e.aiQuiz=t||null
                  }))), t.loadingAiQuizzes=!1, t.$apply();
                  case 10:case"end":return r.stop()
                }
              }), r)
            })), function(){
              var e=this, t=arguments;
              return new Promise((function(o, i){
                var s=r.apply(e, t);
                function a(e){
                  n(s, o, i, a, c, "next", e)
                }
                function c(e){
                  n(s, o, i, a, c, "throw", e)
                }
                a(void 0)
              }))
            });
            return function(e){
              return s.apply(this, arguments)
            }
          }
          ();
          t.materialFilesToggle=e=>{
            r(e), t.expandedMap[
              e.id
            ]
            =!t.expandedMap[
              e.id
            ]
          }
        }
      ]
    }
  }
]);
