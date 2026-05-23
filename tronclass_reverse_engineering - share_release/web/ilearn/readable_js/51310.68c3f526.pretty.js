(self.webpackChunklms=self.webpackChunklms||[
]).push([
  [
    51310
  ], {
    34206:(t, e, s)=>{
      s.d(e, {
        d7:()=>m, yH:()=>f
      });
      s(540590), s(418665), s(269193), s(14602);
      var a=s(272505), n=s.n(a), i=s(152229), o=s(920453), r=s(218831), c=function(t, e, s, a){
        var n, i=arguments.length, o=i<3?e:null===a?a=Object.getOwnPropertyDescriptor(e, s):a;
        if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t, e, s, a);
        else for(var r=t.length-1;
        r>=0;
        r--)(n=t[
          r
        ])&&(o=(i<3?n(o):i>3?n(e, s, o):n(e, s))||o);
        return i>3&&o&&Object.defineProperty(e, s, o), o
      }, l=function(t, e, s, a){
        return new(s||(s=Promise))((function(n, i){
          function o(t){
            try{
              c(a.next(t))
            }
            catch(t){
              i(t)
            }
          }
          function r(t){
            try{
              c(a.throw(t))
            }
            catch(t){
              i(t)
            }
          }
          function c(t){
            var e;
            t.done?n(t.value):(e=t.value, e instanceof s?e:new s((function(t){
              t(e)
            }))).then(o, r)
          }
          c((a=a.apply(t, e||[
          ])).next())
        }))
      }, u=function(t, e){
        var s, a, n, i, o={
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
          next:r(0), throw:r(1), return:r(2)
        }, "function"==typeof Symbol&&(i[
          Symbol.iterator
        ]
        =function(){
          return this
        }), i;
        function r(r){
          return function(c){
            return function(r){
              if(s)throw new TypeError("Generator is already executing.");
              for(;
              i&&(i=0, r[
                0
              ]
              &&(o=0)), o;
              )try{
                if(s=1, a&&(n=2&r[
                  0
                ]
                ?a.return:r[
                  0
                ]
                ?a.throw||((n=a.return)&&n.call(a), 0):a.next)&&!(n=n.call(a, r[
                  1
                ])).done)return n;
                switch(a=0, n&&(r=[
                  2&r[
                    0
                  ], n.value
                ]), r[
                  0
                ]){
                  case 0:case 1:n=r;
                  break;
                  case 4:return o.label++, {
                    value:r[
                      1
                    ], done:!1
                  };
                  case 5:o.label++, a=r[
                    1
                  ], r=[
                    0
                  ];
                  continue;
                  case 7:r=o.ops.pop(), o.trys.pop();
                  continue;
                  default:if(!(n=o.trys, (n=n.length>0&&n[
                    n.length-1
                  ])||6!==r[
                    0
                  ]
                  &&2!==r[
                    0
                  ])){
                    o=0;
                    continue
                  }
                  if(3===r[
                    0
                  ]
                  &&(!n||r[
                    1
                  ]
                  >n[
                    0
                  ]
                  &&r[
                    1
                  ]
                  <n[
                    3
                  ])){
                    o.label=r[
                      1
                    ];
                    break
                  }
                  if(6===r[
                    0
                  ]
                  &&o.label<n[
                    1
                  ]){
                    o.label=n[
                      1
                    ], n=r;
                    break
                  }
                  if(n&&o.label<n[
                    2
                  ]){
                    o.label=n[
                      2
                    ], o.ops.push(r);
                    break
                  }
                  n[
                    2
                  ]
                  &&o.ops.pop(), o.trys.pop();
                  continue
                }
                r=e.call(t, o)
              }
              catch(t){
                r=[
                  6, t
                ], a=0
              }
              finally{
                s=n=0
              }
              if(5&r[
                0
              ])throw r[
                1
              ];
              return{
                value:r[
                  0
                ]
                ?r[
                  1
                ]
                :void 0, done:!0
              }
            }
            ([
              r, c
            ])
          }
        }
      }, d=function(){
      }, v=function(){
        this.isCustom=!1, this.disabled=!1
      }, p=function(){
        function t(){
        }
        return c([
          (0, i.Z)((function(){
            return d
          }))
        ], t.prototype, "entrances", void 0), c([
          (0, i.Z)((function(){
            return v
          }))
        ], t.prototype, "platforms", void 0), t
      }
      (), f=function(t){
        return l(void 0, void 0, void 0, (function(){
          var e;
          return u(this, (function(s){
            switch(s.label){
              case 0:return[
                4, n().get("/api/courses/".concat(t, "/third-party-entrance"))
              ];
              case 1:return e=s.sent().data, [
                2, (0, o.plainToClass)(p, (0, r.camelizeKeys)(e))
              ]
            }
          }))
        }))
      }, m=function(t, e){
        return l(void 0, void 0, void 0, (function(){
          return u(this, (function(s){
            return[
              2, n().post("/api/courses/".concat(t, "/audit"), e)
            ]
          }))
        }))
      }
    }, 68049:(t, e, s)=>{
      t.exports=s.p+"assets/js/vue/views/course/public-course/imgs/5920f4201fc5385e0ffd.svg"
    }, 104715:(t, e, s)=>{
      s.d(e, {
        T3:()=>x, _A:()=>S
      });
      s(540590), s(418665), s(714913), s(269193), s(445708), s(678636), s(658379), s(14602);
      var a, n, i=s(302543), o=s(623040), r=s(877401), c=s(139544), l=s(624666), u=s(552979), d=s(818183), v=s(526320), p=s(574799), f=s(306798), m=s(133325), _=s(949318), h=s(48292), g=s(207113), y=function(t, e, s, a){
        return new(s||(s=Promise))((function(n, i){
          function o(t){
            try{
              c(a.next(t))
            }
            catch(t){
              i(t)
            }
          }
          function r(t){
            try{
              c(a.throw(t))
            }
            catch(t){
              i(t)
            }
          }
          function c(t){
            var e;
            t.done?n(t.value):(e=t.value, e instanceof s?e:new s((function(t){
              t(e)
            }))).then(o, r)
          }
          c((a=a.apply(t, e||[
          ])).next())
        }))
      }, C=function(t, e){
        var s, a, n, i, o={
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
          next:r(0), throw:r(1), return:r(2)
        }, "function"==typeof Symbol&&(i[
          Symbol.iterator
        ]
        =function(){
          return this
        }), i;
        function r(r){
          return function(c){
            return function(r){
              if(s)throw new TypeError("Generator is already executing.");
              for(;
              i&&(i=0, r[
                0
              ]
              &&(o=0)), o;
              )try{
                if(s=1, a&&(n=2&r[
                  0
                ]
                ?a.return:r[
                  0
                ]
                ?a.throw||((n=a.return)&&n.call(a), 0):a.next)&&!(n=n.call(a, r[
                  1
                ])).done)return n;
                switch(a=0, n&&(r=[
                  2&r[
                    0
                  ], n.value
                ]), r[
                  0
                ]){
                  case 0:case 1:n=r;
                  break;
                  case 4:return o.label++, {
                    value:r[
                      1
                    ], done:!1
                  };
                  case 5:o.label++, a=r[
                    1
                  ], r=[
                    0
                  ];
                  continue;
                  case 7:r=o.ops.pop(), o.trys.pop();
                  continue;
                  default:if(!(n=o.trys, (n=n.length>0&&n[
                    n.length-1
                  ])||6!==r[
                    0
                  ]
                  &&2!==r[
                    0
                  ])){
                    o=0;
                    continue
                  }
                  if(3===r[
                    0
                  ]
                  &&(!n||r[
                    1
                  ]
                  >n[
                    0
                  ]
                  &&r[
                    1
                  ]
                  <n[
                    3
                  ])){
                    o.label=r[
                      1
                    ];
                    break
                  }
                  if(6===r[
                    0
                  ]
                  &&o.label<n[
                    1
                  ]){
                    o.label=n[
                      1
                    ], n=r;
                    break
                  }
                  if(n&&o.label<n[
                    2
                  ]){
                    o.label=n[
                      2
                    ], o.ops.push(r);
                    break
                  }
                  n[
                    2
                  ]
                  &&o.ops.pop(), o.trys.pop();
                  continue
                }
                r=e.call(t, o)
              }
              catch(t){
                r=[
                  6, t
                ], a=0
              }
              finally{
                s=n=0
              }
              if(5&r[
                0
              ])throw r[
                1
              ];
              return{
                value:r[
                  0
                ]
                ?r[
                  1
                ]
                :void 0, done:!0
              }
            }
            ([
              r, c
            ])
          }
        }
      }, b=function(t, e, s){
        if(s||2===arguments.length)for(var a, n=0, i=e.length;
        n<i;
        n++)!a&&n in e||(a||(a=Array.prototype.slice.call(e, 0, n)), a[
          n
        ]
        =e[
          n
        ]);
        return t.concat(a||Array.prototype.slice.call(e))
      };
      o.Ay.usePlugin(c.A), o.Ay.usePlugin(f.A), o.Ay.usePlugin(m.A), o.Ay.usePlugin(l.A), o.Ay.usePlugin(_.A);
      var w=(null===(n=null===(a=window.globalData)||void 0===a?void 0:a.course)||void 0===n?void 0:n.id)||0, S=function(t){
        var e, s=new Set([
        ]);
        return e=function(t, e, a, n){
          var i=[
          ];
          t.postRelation.forEach((function(t){
            s.has(t.relationId)||(i.push(t), s.add(t.relationId))
          }));
          var o=[
          ];
          t.undirectedRelation.forEach((function(t){
            s.has(t.relationId)||(o.push(t), s.add(t.relationId))
          }));
          var r=b(b([
          ], i, !0), o, !0), c=b(b([
          ], i.map((function(t){
            return"directed"
          })), !0), o.map((function(t){
            return"undirected"
          })), !0);
          return{
            data:{
              _counts:[
                t.data.activityRefCount, t.data.resourceRefCount, t.data.subjectRefCount, t.data.captureRefCount
              ], tag:"none"!==t.data.cognitiveDimension?[
                t.data.cognitiveDimension
              ]
              :[
              ], text:t.text, uid:String(t.id), associativeLineTypes:c, associativeLineTargets:r.map((function(t){
                return String(t.id)
              })), associativeLineTargetControlOffsets:r.map((function(t){
                var e;
                return(null===(e=t.data)||void 0===e?void 0:e.associativeLineTargetControlOffsets)||null
              })), associativeLinePoint:r.map((function(t){
                var e;
                return(null===(e=t.data)||void 0===e?void 0:e.associativeLinePoint)||{
                }
              }))
            }
          }
        }, function t(s, a, n){
          return void 0===a&&(a=0), s.map((function(s, i){
            var o=e(s, a, i, n);
            return s.children&&(o.children=t(s.children, a+1, s)), o
          }))
        }
        (t)
      }, x=function(t, e){
        var s=new o.Ay({
          el:t, initRootNodePosition:[
            "30%", "50%"
          ], deleteNodeActive:!1, customInnerElsAppendTo:t.parentNode, mousewheelAction:"zoom", enableCtrlKeyNodeSelection:!1, defaultInsertBelowSecondLevelNodeText:u.default.t("knowledgeGraph.node"), data:e, expandBtnStyle:{
            color:"white", fill:"#20BEC8", fontSize:13, strokeColor:"#20BEC8"
          }, tagFormat:function(t){
            var e=t.item, s=h.ZO[
              e
            ];
            return{
              formatedText:h.ML[
                e
              ]
              ||e, fillColor:(null==s?void 0:s.backgroundColor)||"#c6dcff", strokeColor:(null==s?void 0:s.color)||"#3471d3"
            }
          }, beforeTextEdit:function(t){
            return!t.isRoot
          }, beforeTextSave:function(t, e){
            return y(void 0, void 0, void 0, (function(){
              var a, n;
              return C(this, (function(i){
                switch(i.label){
                  case 0:if(e.match(/^\s*$/))return d.A.error(u.default.t("knowledgeGraph.nameNotEmpty")), [
                    2, !1
                  ];
                  i.label=1;
                  case 1:return i.trys.push([
                    1, 3, , 4
                  ]), [
                    4, (0, r.updateKnowledgeNode)(t.nodeData.data.uid, {
                      name:e
                    })
                  ];
                  case 2:return a=i.sent(), s.emit("detail-changed"), v.A.$emit("search-toolbar-node-updated", a), [
                    2, null
                  ];
                  case 3:return n=i.sent(), d.A.error(n.response.data.errors.name[
                    0
                  ]), [
                    2, !0
                  ];
                  case 4:return[
                    2
                  ]
                }
              }))
            }))
          }, beforeDragStart:function(){
            return y(void 0, void 0, void 0, (function(){
              return C(this, (function(t){
                return[
                  2, p.wm
                ]
              }))
            }))
          }
        });
        return s.on("node_dragend", (function(t){
          p.wm||setTimeout((function(){
            var e=t.beingDragNodeUidList[
              0
            ], a=s.renderer.findNodeByUid(e).parent.getData("uid"), n=t.prevNodeUid, i=t.nextNodeUid;
            (0, r.moveKnowledgeNode)(w, {
              parentId:Number(a), prevId:Number(n), nextId:Number(i), curId:Number(e)
            })
          }))
        })), s.on("data_change_detail", (function(t){
          var e=t[
            0
          ], a=t[
            1
          ];
          return y(void 0, void 0, void 0, (function(){
            var t, n, o, c, l;
            return C(this, (function(p){
              switch(p.label){
                case 0:return console.log(e, a), "update"===e.action&&"update"===(null==a?void 0:a.action)?[
                  2
                ]
                :"update"!==e.action||"delete"!==(null==a?void 0:a.action)?[
                  3, 2
                ]
                :[
                  4, (0, r.delKnowledgeNode)(Number(a.data.data.uid))
                ];
                case 1:return p.sent(), v.A.$emit("search-toolbar-node-deleted", [
                  Number(a.data.data.uid)
                ]), d.A.success(u.default.t("delete_success")), [
                  3, 6
                ];
                case 2:return"update"!==e.action||a?[
                  3, 6
                ]
                :(null===(c=e.data.data.associativeLineTargets)||void 0===c?void 0:c.length)===(null===(l=e.oldData.data.associativeLineTargets)||void 0===l?void 0:l.length)?[
                  3, 5
                ]
                :(t=(0, i.differenceBy)(e.data.data.associativeLineTargets, e.oldData.data.associativeLineTargets), [
                  4, Promise.all(t.map((function(t){
                    return(0, r.addRelation)(w, {
                      relations:[
                        {
                          source:Number(e.data.data.uid), target:Number(t), isDirected:!0, nodeName:""
                        }
                      ]
                    })
                  })))
                ]);
                case 3:return p.sent(), n=(0, i.differenceBy)(e.oldData.data.associativeLineTargets, e.data.data.associativeLineTargets), [
                  4, Promise.all(n.map((function(t){
                    return(0, r.updateRelation)(w, {
                      source:e.data.data.uid, target:t, type:"directed", deleted:!0
                    })
                  })))
                ];
                case 4:return p.sent(), s.emit("detail-changed"), [
                  3, 6
                ];
                case 5:if(!e.data.data.associativeLinePoint||!e.oldData.data.associativeLinePoint)return[
                  2
                ];
                if(!e.data.data.associativeLineTargetControlOffsets||!e.oldData.data.associativeLineTargetControlOffsets)return[
                  2
                ];
                if(!e.data.data.associativeLineTargets)return[
                  2
                ];
                -1!==(o=(0, g.t)(e.data.data.associativeLinePoint, e.oldData.data.associativeLinePoint))&&(0, r.updateRelation)(w, {
                  source:e.data.data.uid, target:e.data.data.associativeLineTargets[
                    o
                  ], data:{
                    associativeLinePoint:e.data.data.associativeLinePoint[
                      o
                    ], associativeLineTargetControlOffsets:e.data.data.associativeLineTargetControlOffsets[
                      o
                    ]
                  }
                }), p.label=6;
                case 6:return[
                  2
                ]
              }
            }))
          }))
        })), s.on("associative_line_reverse", (function(t){
          var e=t[
            0
          ], a=t[
            1
          ];
          return y(void 0, void 0, void 0, (function(){
            return C(this, (function(t){
              switch(t.label){
                case 0:return[
                  4, (0, r.updateRelation)(w, {
                    source:e.nodeData.data.uid, target:a.nodeData.data.uid, type:"directed"
                  })
                ];
                case 1:return t.sent(), s.emit("detail-changed"), [
                  2
                ]
              }
            }))
          }))
        })), s.on("associative_line_change_type", (function(t){
          var e=t[
            0
          ], a=t[
            1
          ], n=(t[
            2
          ], t[
            3
          ]);
          return y(void 0, void 0, void 0, (function(){
            return C(this, (function(t){
              switch(t.label){
                case 0:return[
                  4, (0, r.updateRelation)(w, {
                    source:e.nodeData.data.uid, target:a.nodeData.data.uid, type:n
                  })
                ];
                case 1:return t.sent(), s.emit("detail-changed"), [
                  2
                ]
              }
            }))
          }))
        })), s
      }
    }, 207113:(t, e, s)=>{
      s.d(e, {
        f:()=>i, t:()=>n
      });
      var a=s(302543), n=function(t, e){
        for(var s=e.length, n=0;
        n<s;
        n++)if(!(0, a.isEqual)(t[
          n
        ], e[
          n
        ]))return n;
        return-1
      }, i=function(t, e){
        e&&"none"!==e?t.setTag([
          e
        ]):t.setTag([
        ])
      }
    }, 236749:(t, e, s)=>{
      s.d(e, {
        A:()=>n
      });
      const a=(0, s(595738).pM)({
        props:{
          items:{
            type:Array, required:!0
          }
        }, setup:function(){
          return{
          }
        }
      });
      const n=(0, s(514486).A)(a, (function(){
        var t=this, e=t.$createElement, a=t._self._c||e;
        return a("table", {
          staticClass:"w-full ranking"
        }, [
          a("thead", [
            a("tr", [
              a("th", [
                t._v(t._s(t.$t("completeness.ranking")))
              ]), t._v(" "), a("th", {
                staticStyle:{
                  width:"50%"
                }
              }, [
                t._t("header")
              ], 2), t._v(" "), a("th", [
                t._v(t._s(t.$t("knowledgeGraph.masteryRate")))
              ]), t._v(" "), a("th", [
                t._v(t._s(t.$t("knowledgeGraph.completeRate")))
              ])
            ])
          ]), t._v(" "), a("tbody", t._l(t.items, (function(e, n){
            return a("tr", {
              key:n
            }, [
              a("td", {
                staticClass:"rank-name"
              }, [
                0===n?a("img", {
                  attrs:{
                    src:s(959805)
                  }
                }):1===n?a("img", {
                  attrs:{
                    src:s(365513)
                  }
                }):2===n?a("img", {
                  attrs:{
                    src:s(625912)
                  }
                }):a("span", [
                  t._v("\n          "+t._s(n+1)+"\n        ")
                ])
              ]), t._v(" "), t._t("item", null, {
                item:e
              })
            ], 2)
          })), 0)
        ])
      }), [
      ], !1, null, "0629a99c", null).exports
    }, 248505:(t, e, s)=>{
      s.d(e, {
        KJ:()=>i, bf:()=>r, lE:()=>c, lV:()=>o
      });
      var a=s(552979), n=s(366308), i=function(){
        this.department={
          name:""
        }, this.id=0, this.name="", this.userNo="", this.avatarBigUrl="", this.userPersonas={
          data:{
          }
        }
      }, o=function(t){
        void 0===t&&(t="instructor_assistant"), this.enrollmentId=0, this.user=new i, this.role="instructor_assistant", this.personas={
          title:"", direction:"", desc:""
        }, this.role=t
      }, r={
        professor:a.default.t("teachingTeam.professor"), associate_professor:a.default.t("teachingTeam.associateProfessor"), lecturer:a.default.t("teachingTeam.lecturer"), instructor_assistant:a.default.t("authz.courseRoleName.assistant")
      }, c={
        instructor_assistant:a.default.t("teachingTeam.courseRoles.instructor_assistant"), instructor:(0, n.t)("Instructor"), lecturer:a.default.t("lecturer")
      }
    }, 365513:(t, e, s)=>{
      t.exports=s.p+"assets/images/large/71c2acc0618b8d73de19.png"
    }, 366308:(t, e, s)=>{
      s.d(e, {
        t:()=>n
      });
      var a=s(552979), n=function(t){
        var e;
        if(null===(e=window.featureToggles)||void 0===e?void 0:e.enableLecturerCourseRole){
          return a.default.t({
            Instructor:"teachingTeam.courseLeader"
          }
          [
            t
          ])
        }
        return a.default.t(t)
      }
    }, 625912:(t, e, s)=>{
      t.exports=s.p+"assets/images/large/0f20c26342d08c580fdf.png"
    }, 670042:(t, e, s)=>{
      s.d(e, {
        A:()=>i
      });
      var a=s(385634), n=s(27970);
      const i=(0, s(514486).A)(n.A, a.X, a.Y, !1, null, "59a1458f", null).exports
    }, 678237:(t, e, s)=>{
      s.d(e, {
        nx:()=>a, qY:()=>n.q, fP:()=>i
      });
      s(868329), s(640173);
      var a=function(t){
        var e=t.replace("#", "");
        return'<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">\n    <mask id="mask0_'.concat(e, '" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="56" height="56">\n        <circle cx="28" cy="28" r="28" fill="white" />\n    </mask>\n    <g mask="url(#mask0_').concat(e, ')">\n        <circle cx="28" cy="28" r="28" fill="white" />\n        <circle cx="28" cy="28" r="28" fill="url(#paint0_radial_').concat(e, ')" />\n        <g filter="url(#filter0_f_').concat(e, ')">\n            <circle cx="28.0002" cy="27.3" r="23.8" stroke="url(#paint1_linear_').concat(e, ')" stroke-width="1.24675" />\n        </g>\n        <g filter="url(#filter1_f_').concat(e, ')">\n            <ellipse cx="42.7309" cy="46.5098" rx="2.10028" ry="5.27789" transform="rotate(46.4204 42.7309 46.5098)"\n                fill="white" />\n        </g>\n        <g filter="url(#filter2_f_').concat(e, ')">\n            <ellipse cx="13.1097" cy="10.89" rx="2.69508" ry="5.27789" transform="rotate(46.4204 13.1097 10.89)"\n                fill="white" />\n        </g>\n    </g>\n    <defs>\n        <filter id="filter0_f_').concat(e, '" x="-0.163111" y="-0.863642" width="56.3272" height="56.3273"\n            filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n            <feFlood flood-opacity="0" result="BackgroundImageFix" />\n            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />\n            <feGaussianBlur stdDeviation="1.87013" result="effect1_foregroundBlur_').concat(e, '" />\n        </filter>\n        <filter id="filter1_f_').concat(e, '" x="35.5343" y="39.4578" width="14.3933" height="14.104"\n            filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n            <feFlood flood-opacity="0" result="BackgroundImageFix" />\n            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />\n            <feGaussianBlur stdDeviation="1.55365" result="effect1_foregroundBlur_').concat(e, '" />\n        </filter>\n        <filter id="filter2_f_').concat(e, '" x="5.75013" y="3.65276" width="14.7185" height="14.4744"\n            filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n            <feFlood flood-opacity="0" result="BackgroundImageFix" />\n            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />\n            <feGaussianBlur stdDeviation="1.55365" result="effect1_foregroundBlur_').concat(e, '" />\n        </filter>\n        <radialGradient id="paint0_radial_').concat(e, '" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"\n            gradientTransform="translate(28 28) rotate(90) scale(28)">\n            <stop stop-color="').concat(t, '" stop-opacity="0.1" />\n            <stop offset="0.455274" stop-color="').concat(t, '" stop-opacity="0.409933" />\n            <stop offset="0.856233" stop-color="').concat(t, '" stop-opacity="0.737994" />\n            <stop offset="1" stop-color="').concat(t, '" />\n        </radialGradient>\n        <linearGradient id="paint1_linear_').concat(e, '" x1="14.2442" y1="4.81009" x2="43.2846" y2="47.8248"\n            gradientUnits="userSpaceOnUse">\n            <stop stop-color="white" stop-opacity="0.8" />\n            <stop offset="0.5" stop-color="white" stop-opacity="0" />\n            <stop offset="1" stop-color="white" />\n        </linearGradient>\n    </defs>\n</svg>')
      }, n=s(833444), i=function(t){
        return"data:image/svg+xml,".concat(encodeURIComponent(t.trim()))
      }
    }, 699377:(t, e, s)=>{
      s.d(e, {
        D7:()=>d, Ez:()=>f, QM:()=>p, cE:()=>l, ct:()=>v, it:()=>u
      });
      s(540590), s(418665), s(169218), s(269193), s(14602);
      var a=s(272505), n=s.n(a), i=s(218831), o=function(){
        return(o=Object.assign||function(t){
          for(var e, s=1, a=arguments.length;
          s<a;
          s++)for(var n in e=arguments[
            s
          ])Object.prototype.hasOwnProperty.call(e, n)&&(t[
            n
          ]
          =e[
            n
          ]);
          return t
        }).apply(this, arguments)
      }, r=function(t, e, s, a){
        return new(s||(s=Promise))((function(n, i){
          function o(t){
            try{
              c(a.next(t))
            }
            catch(t){
              i(t)
            }
          }
          function r(t){
            try{
              c(a.throw(t))
            }
            catch(t){
              i(t)
            }
          }
          function c(t){
            var e;
            t.done?n(t.value):(e=t.value, e instanceof s?e:new s((function(t){
              t(e)
            }))).then(o, r)
          }
          c((a=a.apply(t, e||[
          ])).next())
        }))
      }, c=function(t, e){
        var s, a, n, i, o={
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
          next:r(0), throw:r(1), return:r(2)
        }, "function"==typeof Symbol&&(i[
          Symbol.iterator
        ]
        =function(){
          return this
        }), i;
        function r(r){
          return function(c){
            return function(r){
              if(s)throw new TypeError("Generator is already executing.");
              for(;
              i&&(i=0, r[
                0
              ]
              &&(o=0)), o;
              )try{
                if(s=1, a&&(n=2&r[
                  0
                ]
                ?a.return:r[
                  0
                ]
                ?a.throw||((n=a.return)&&n.call(a), 0):a.next)&&!(n=n.call(a, r[
                  1
                ])).done)return n;
                switch(a=0, n&&(r=[
                  2&r[
                    0
                  ], n.value
                ]), r[
                  0
                ]){
                  case 0:case 1:n=r;
                  break;
                  case 4:return o.label++, {
                    value:r[
                      1
                    ], done:!1
                  };
                  case 5:o.label++, a=r[
                    1
                  ], r=[
                    0
                  ];
                  continue;
                  case 7:r=o.ops.pop(), o.trys.pop();
                  continue;
                  default:if(!(n=o.trys, (n=n.length>0&&n[
                    n.length-1
                  ])||6!==r[
                    0
                  ]
                  &&2!==r[
                    0
                  ])){
                    o=0;
                    continue
                  }
                  if(3===r[
                    0
                  ]
                  &&(!n||r[
                    1
                  ]
                  >n[
                    0
                  ]
                  &&r[
                    1
                  ]
                  <n[
                    3
                  ])){
                    o.label=r[
                      1
                    ];
                    break
                  }
                  if(6===r[
                    0
                  ]
                  &&o.label<n[
                    1
                  ]){
                    o.label=n[
                      1
                    ], n=r;
                    break
                  }
                  if(n&&o.label<n[
                    2
                  ]){
                    o.label=n[
                      2
                    ], o.ops.push(r);
                    break
                  }
                  n[
                    2
                  ]
                  &&o.ops.pop(), o.trys.pop();
                  continue
                }
                r=e.call(t, o)
              }
              catch(t){
                r=[
                  6, t
                ], a=0
              }
              finally{
                s=n=0
              }
              if(5&r[
                0
              ])throw r[
                1
              ];
              return{
                value:r[
                  0
                ]
                ?r[
                  1
                ]
                :void 0, done:!0
              }
            }
            ([
              r, c
            ])
          }
        }
      }, l=function(t, e, s){
        return void 0===s&&(s=!1), r(void 0, void 0, void 0, (function(){
          var a, o;
          return c(this, (function(r){
            switch(r.label){
              case 0:return a=s?"anonymous-api":"api", [
                4, n().get("/".concat(a, "/course/").concat(t, "/instructors"), {
                  params:{
                    conditions:e, fields:"id,user(id,avatar_big_url,email,name,nickname,user_no,user_personas,department(id,name,code)),roles,data,imported_from,aliases"
                  }
                })
              ];
              case 1:return o=r.sent().data, [
                2, (0, i.camelizeKeys)(o.enrollments)
              ]
            }
          }))
        }))
      }, u=function(t, e, s){
        return void 0===s&&(s=!1), r(void 0, void 0, void 0, (function(){
          return c(this, (function(a){
            switch(a.label){
              case 0:return[
                4, n().get("/api/courses/".concat(t, "/available-users"), {
                  params:{
                    conditions:{
                      keyword:e
                    }, without_student:s
                  }
                })
              ];
              case 1:return[
                2, a.sent().data
              ]
            }
          }))
        }))
      }, d=function(t, e){
        return r(void 0, void 0, void 0, (function(){
          return c(this, (function(s){
            return[
              2, n().post("/api/course/".concat(t, "/add-enrollments"), o(o({
              }, e), {
                add_type:"by_id", user_ids:[
                  e.userId
                ]
              }))
            ]
          }))
        }))
      }, v=function(t, e){
        return r(void 0, void 0, void 0, (function(){
          return c(this, (function(s){
            return[
              2, n().put("/api/course/enrollments/".concat(t), o({
              }, e))
            ]
          }))
        }))
      }, p=function(t, e){
        return r(void 0, void 0, void 0, (function(){
          return c(this, (function(s){
            return[
              2, n().delete("/api/course/".concat(t, "/students/").concat(e))
            ]
          }))
        }))
      }, f=function(t, e){
        return r(void 0, void 0, void 0, (function(){
          return c(this, (function(s){
            return[
              2, n().put("/api/courses/".concat(t, "/main-setting"), e)
            ]
          }))
        }))
      }
    }, 761133:(t, e, s)=>{
      s.d(e, {
        QB:()=>v
      });
      s(335231), s(640173);
      var a=s(738645), n=s(152229), i=s(510543), o=s(366356), r=function(t, e, s, a){
        var n, i=arguments.length, o=i<3?e:null===a?a=Object.getOwnPropertyDescriptor(e, s):a;
        if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t, e, s, a);
        else for(var r=t.length-1;
        r>=0;
        r--)(n=t[
          r
        ])&&(o=(i<3?n(o):i>3?n(e, s, o):n(e, s))||o);
        return i>3&&o&&Object.defineProperty(e, s, o), o
      }, c=function(){
        this.id=0, this.projectName="", this.certificationTitle="", this.studyThreshold=0
      }, l=function(){
        function t(){
          this.name="", this.id=0
        }
        return r([
          (0, a.v)()
        ], t.prototype, "name", void 0), r([
          (0, a.v)()
        ], t.prototype, "id", void 0), t
      }
      (), u=function(){
        function t(){
          this.data={
          }
        }
        return r([
          (0, a.v)()
        ], t.prototype, "data", void 0), t
      }
      (), d=function(){
        function t(){
          this.creditRemaining=0, this.status=""
        }
        return r([
          (0, a.v)()
        ], t.prototype, "creditRemaining", void 0), r([
          (0, a.v)()
        ], t.prototype, "status", void 0), t
      }
      (), v=function(){
        function t(){
          this.id=0, this.access="", this.cover="", this.studentsCount=0, this.classroomSchedule="", this.name="", this.compulsory=!1, this.courseCode="", this.coursePictures=[
          ], this.publicScope="private", this.klass=new l, this.department=new l, this.grade=new l, this.courseClassification=new l, this.startDate="", this.endDate="", this.instructors=[
          ], this.openedDepartments=[
          ], this.openedRoles=[
          ], this.selectedCertification=new c, this.courseAttributes=new u, this.modules=[
          ], this.creditState=new d, this.knowledgeGraphPublishType="", this.problemGraphPublishType="", this.url="", this.allowExtensionApp=!1
        }
        return Object.defineProperty(t.prototype, "startDateDisplay", {
          get:function(){
            return this.startDate.replace(/-/g, ".")
          }, enumerable:!1, configurable:!0
        }), Object.defineProperty(t.prototype, "endDateDisplay", {
          get:function(){
            return this.endDate.replace(/-/g, ".")
          }, enumerable:!1, configurable:!0
        }), Object.defineProperty(t.prototype, "sortedModules", {
          get:function(){
            return this.modules.sort((function(t, e){
              return t.sort-e.sort
            }))
          }, enumerable:!1, configurable:!0
        }), r([
          (0, a.v)()
        ], t.prototype, "id", void 0), r([
          (0, a.v)()
        ], t.prototype, "access", void 0), r([
          (0, a.v)()
        ], t.prototype, "cover", void 0), r([
          (0, a.v)()
        ], t.prototype, "studentsCount", void 0), r([
          (0, a.v)()
        ], t.prototype, "classroomSchedule", void 0), r([
          (0, a.v)()
        ], t.prototype, "name", void 0), r([
          (0, a.v)()
        ], t.prototype, "compulsory", void 0), r([
          (0, a.v)()
        ], t.prototype, "courseCode", void 0), r([
          (0, a.v)()
        ], t.prototype, "coursePictures", void 0), r([
          (0, a.v)()
        ], t.prototype, "publicScope", void 0), r([
          (0, a.v)()
        ], t.prototype, "credit", void 0), r([
          (0, a.v)(), (0, n.Z)((function(){
            return l
          })), (0, i.d)((function(t){
            return t.value||new l
          }), {
            toClassOnly:!0
          })
        ], t.prototype, "klass", void 0), r([
          (0, a.v)(), (0, n.Z)((function(){
            return l
          })), (0, i.d)((function(t){
            return t.value||new l
          }), {
            toClassOnly:!0
          })
        ], t.prototype, "department", void 0), r([
          (0, a.v)(), (0, n.Z)((function(){
            return l
          })), (0, i.d)((function(t){
            return t.value||new l
          }), {
            toClassOnly:!0
          })
        ], t.prototype, "grade", void 0), r([
          (0, a.v)(), (0, n.Z)((function(){
            return l
          })), (0, i.d)((function(t){
            return t.value||new l
          }), {
            toClassOnly:!0
          })
        ], t.prototype, "courseClassification", void 0), r([
          (0, a.v)()
        ], t.prototype, "startDate", void 0), r([
          (0, a.v)()
        ], t.prototype, "endDate", void 0), r([
          (0, a.v)()
        ], t.prototype, "isBlocked", void 0), r([
          (0, a.v)()
        ], t.prototype, "importedFrom", void 0), r([
          (0, a.v)()
        ], t.prototype, "instructors", void 0), r([
          (0, a.v)()
        ], t.prototype, "openedDepartments", void 0), r([
          (0, a.v)()
        ], t.prototype, "openedRoles", void 0), r([
          (0, a.v)()
        ], t.prototype, "selectedCertification", void 0), r([
          (0, a.v)(), (0, n.Z)((function(){
            return u
          }))
        ], t.prototype, "courseAttributes", void 0), r([
          (0, a.v)(), (0, n.Z)((function(){
            return f
          }))
        ], t.prototype, "modules", void 0), r([
          (0, a.v)(), (0, n.Z)((function(){
            return d
          }))
        ], t.prototype, "creditState", void 0), r([
          o.P
        ], t.prototype, "sortedModules", null), r([
          (0, a.v)()
        ], t.prototype, "knowledgeGraphPublishType", void 0), r([
          (0, a.v)()
        ], t.prototype, "problemGraphPublishType", void 0), r([
          (0, a.v)()
        ], t.prototype, "url", void 0), r([
          (0, a.v)()
        ], t.prototype, "allowExtensionApp", void 0), t
      }
      (), p=function(){
        function t(){
          this.id=0, this.moduleId=0, this.sort=0, this.summary="", this.activities=[
          ]
        }
        return r([
          (0, a.v)()
        ], t.prototype, "id", void 0), r([
          (0, a.v)()
        ], t.prototype, "moduleId", void 0), r([
          (0, a.v)()
        ], t.prototype, "sort", void 0), r([
          (0, a.v)()
        ], t.prototype, "summary", void 0), t
      }
      (), f=function(){
        function t(){
          this.id=0, this.name="", this.sort=0, this.syllabuses=[
          ], this.activities=[
          ]
        }
        return Object.defineProperty(t.prototype, "sortedSyllabuses", {
          get:function(){
            return this.syllabuses.sort((function(t, e){
              return t.sort-e.sort
            }))
          }, enumerable:!1, configurable:!0
        }), r([
          (0, a.v)()
        ], t.prototype, "id", void 0), r([
          (0, a.v)()
        ], t.prototype, "name", void 0), r([
          (0, a.v)()
        ], t.prototype, "sort", void 0), r([
          (0, a.v)(), (0, n.Z)((function(){
            return p
          }))
        ], t.prototype, "syllabuses", void 0), r([
          o.P
        ], t.prototype, "sortedSyllabuses", null), t
      }
      ()
    }, 944315:(t, e, s)=>{
      s.d(e, {
        w:()=>d
      });
      s(540590), s(418665), s(700533), s(714913), s(269193), s(14602);
      var a=s(595738), n=s(793110), i=s(552979), o=s(703066), r=s(783679), c=function(t, e, s, a){
        return new(s||(s=Promise))((function(n, i){
          function o(t){
            try{
              c(a.next(t))
            }
            catch(t){
              i(t)
            }
          }
          function r(t){
            try{
              c(a.throw(t))
            }
            catch(t){
              i(t)
            }
          }
          function c(t){
            var e;
            t.done?n(t.value):(e=t.value, e instanceof s?e:new s((function(t){
              t(e)
            }))).then(o, r)
          }
          c((a=a.apply(t, e||[
          ])).next())
        }))
      }, l=function(t, e){
        var s, a, n, i, o={
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
          next:r(0), throw:r(1), return:r(2)
        }, "function"==typeof Symbol&&(i[
          Symbol.iterator
        ]
        =function(){
          return this
        }), i;
        function r(r){
          return function(c){
            return function(r){
              if(s)throw new TypeError("Generator is already executing.");
              for(;
              i&&(i=0, r[
                0
              ]
              &&(o=0)), o;
              )try{
                if(s=1, a&&(n=2&r[
                  0
                ]
                ?a.return:r[
                  0
                ]
                ?a.throw||((n=a.return)&&n.call(a), 0):a.next)&&!(n=n.call(a, r[
                  1
                ])).done)return n;
                switch(a=0, n&&(r=[
                  2&r[
                    0
                  ], n.value
                ]), r[
                  0
                ]){
                  case 0:case 1:n=r;
                  break;
                  case 4:return o.label++, {
                    value:r[
                      1
                    ], done:!1
                  };
                  case 5:o.label++, a=r[
                    1
                  ], r=[
                    0
                  ];
                  continue;
                  case 7:r=o.ops.pop(), o.trys.pop();
                  continue;
                  default:if(!(n=o.trys, (n=n.length>0&&n[
                    n.length-1
                  ])||6!==r[
                    0
                  ]
                  &&2!==r[
                    0
                  ])){
                    o=0;
                    continue
                  }
                  if(3===r[
                    0
                  ]
                  &&(!n||r[
                    1
                  ]
                  >n[
                    0
                  ]
                  &&r[
                    1
                  ]
                  <n[
                    3
                  ])){
                    o.label=r[
                      1
                    ];
                    break
                  }
                  if(6===r[
                    0
                  ]
                  &&o.label<n[
                    1
                  ]){
                    o.label=n[
                      1
                    ], n=r;
                    break
                  }
                  if(n&&o.label<n[
                    2
                  ]){
                    o.label=n[
                      2
                    ], o.ops.push(r);
                    break
                  }
                  n[
                    2
                  ]
                  &&o.ops.pop(), o.trys.pop();
                  continue
                }
                r=e.call(t, o)
              }
              catch(t){
                r=[
                  6, t
                ], a=0
              }
              finally{
                s=n=0
              }
              if(5&r[
                0
              ])throw r[
                1
              ];
              return{
                value:r[
                  0
                ]
                ?r[
                  1
                ]
                :void 0, done:!0
              }
            }
            ([
              r, c
            ])
          }
        }
      }, u=function(t, e, s){
        if(s||2===arguments.length)for(var a, n=0, i=e.length;
        n<i;
        n++)!a&&n in e||(a||(a=Array.prototype.slice.call(e, 0, n)), a[
          n
        ]
        =e[
          n
        ]);
        return t.concat(a||Array.prototype.slice.call(e))
      }, d=function(t){
        var e=(0, a.KR)(), s=(0, a.KR)(), d=(0, a.KR)(), v=(0, a.KR)(), p=(0, a.KR)(), f=(0, a.KR)(), m=(0, a.KR)(), _=(0, a.KR)(), h=(0, a.KR)(), g=(0, a.KR)(), y=(0, a.KR)([
        ]), C=(0, a.KR)([
        ]), b=((0, a.KR)(), (0, a.KR)()), w=(0, a.KR)(!0), S=(0, a.EW)((function(){
          return u(u([
            e.value, s.value, d.value, v.value, p.value, f.value, m.value, _.value, h.value, g.value
          ], y.value, !0), C.value, !0)
        })), x=new n.Decimal(0), k=function(){
          return S.value.reduce((function(t, e){
            return"weight"!==e.scoreType&&e.children?e.children?t.plus(e.children.reduce((function(t, e){
              return t.plus(new n.Decimal(e.value||0))
            }), new n.Decimal(0))):t:t.plus(new n.Decimal(e.value||0))
          }), new n.Decimal(0))
        }, I=(0, a.EW)((function(){
          var t, e, s, a, i=k().plus(x).toNumber();
          return{
            used:i, left:new n.Decimal(null!==(e=null===(t=b.value)||void 0===t?void 0:t.scorePercentageTotal)&&void 0!==e?e:100).minus(i).toNumber(), unpublished:new n.Decimal(null!==(a=null===(s=b.value)||void 0===s?void 0:s.unpublishedPercentage)&&void 0!==a?a:0).toNumber()
          }
        })), T=(0, a.EW)((function(){
          var a, n, o, c, l, b, w, S, x, k, I, T, E, $=u(u([
            {
              name:i.default.t("scorePercentageSetting.rollcall"), icon:"score-rollcall", desc:"count"===(null===(a=m.value)||void 0===a?void 0:a.scoreMethod)?i.default.t("scorePercentageSetting.rollcallScoreWithRule", [
                null!==(n=m.value.punishScoreOnAbsence)&&void 0!==n?n:0
              ]):i.default.t("scorePercentageSetting.rollcallScoreMethods"), setting:null!==(o=m.value)&&void 0!==o?o:{
              }, btnText:i.default.t("scorePercentageSetting.scoreSetting"), type:"rollcall"
            }, {
              name:i.default.t("activityType.homework"), icon:"score-homework", desc:i.default.t("scorePercentageSetting.homeworkScoreMethods"), type:"activity", setting:null!==(c=e.value)&&void 0!==c?c:r.hN.createByType("homework_activity")
            }, {
              name:i.default.t("activityType.exam"), icon:"score-exam", desc:i.default.t("scorePercentageSetting.examScoreMethods"), type:"activity", setting:null!==(l=s.value)&&void 0!==l?l:r.hN.createByType("exam_activity")
            }, {
              name:i.default.t("activityType.forum"), icon:"score-forum", desc:i.default.t("scorePercentageSetting.forumScoreMethods"), type:"activity", setting:null!==(b=d.value)&&void 0!==b?b:r.hN.createByType("forum_activity")
            }, {
              name:i.default.t("activityType.classroom"), icon:"score-classroom", desc:i.default.t("scorePercentageSetting.singleActivity"), type:"activity", setting:null!==(w=v.value)&&void 0!==w?w:r.hN.createByType("classroom_exam_activity")
            }, {
              name:i.default.t("activityType.questionnaire"), icon:"score-questionnaire", desc:i.default.t("scorePercentageSetting.questionnaireMethods"), type:"activity", setting:null!==(S=p.value)&&void 0!==S?S:r.hN.createByType("questionnaire_activity")
            }, {
              name:i.default.t("activityType.interaction"), icon:"score-interaction", desc:i.default.t("scorePercentageSetting.singleActivity"), type:"activity", setting:null!==(x=f.value)&&void 0!==x?x:r.hN.createByType("interaction_activity")
            }, {
              name:i.default.t("web_link"), icon:"weblink-icon", desc:i.default.t("scorePercentageSetting.singleActivity"), type:"activity", setting:null!==(k=h.value)&&void 0!==k?k:r.hN.createByType("web_link_activity")
            }, {
              name:i.default.t("scorePercentageSetting.onlineVideo"), icon:"score-online-video", desc:"custom"===(null===(I=_.value)||void 0===I?void 0:I.scoreMethod)?i.default.t("scorePercentageSetting.customRate"):i.default.t("scorePercentageSetting.onlineVideoScoreMethods"), setting:null!==(T=_.value)&&void 0!==T?T:{
              }, type:"onlineVideo", btnText:i.default.t("scorePercentageSetting.scoreSetting")
            }, {
              name:i.default.t("performance"), icon:"score-performance", desc:i.default.t("scorePercentageSetting.performanceScoreMethods"), setting:null!==(E=g.value)&&void 0!==E?E:{
              }, type:"performance", btnText:i.default.t("scorePercentageSetting.scoreSetting")
            }
          ], y.value.map((function(t){
            return{
              name:t.title, icon:"score-custom", desc:"", setting:t, type:"custom"
            }
          })), !0), C.value.map((function(t){
            return{
              name:t.title, icon:"score-virtual-experiment", desc:"", setting:t, type:"virtual-experiment"
            }
          })), !0);
          return t.useWeblink||($=$.filter((function(t){
            return"weblink-icon"!==t.icon
          }))), t.usePerformance||($=$.filter((function(t){
            return"performance"!==t.type
          }))), t.useRollcall||($=$.filter((function(t){
            return"rollcall"!==t.type
          }))), $
        }));
        (0, a.sV)((function(){
          return c(void 0, void 0, void 0, (function(){
            var a, i, u, S, I, T, E, $, A, R, D, N, P, j, M;
            return l(this, (function(G){
              switch(G.label){
                case 0:return w.value=!0, [
                  4, (O=t.courseId, c(void 0, void 0, void 0, (function(){
                    var t, e, s;
                    return l(this, (function(a){
                      switch(a.label){
                        case 0:return[
                          4, Promise.all([
                            (0, o.OW)(O), (0, o.rv)(O)
                          ])
                        ];
                        case 1:return t=a.sent(), e=t[
                          0
                        ], s=t[
                          1
                        ], [
                          2, {
                            coursePercentage:e, activityScoreSettings:s
                          }
                        ]
                      }
                    }))
                  })))
                ];
                case 1:return a=G.sent(), i=a.coursePercentage, u=a.activityScoreSettings, y.value=u.filter((function(t){
                  return"custom"===t.type
                })), C.value=u.filter((function(t){
                  return"virtual_experiment_activity"===t.type
                })), m.value=null!==(S=u.find((function(t){
                  return"rollcall_score_setting"===t.type
                })))&&void 0!==S?S:r.hN.createByType("rollcall_score_setting"), _.value=null!==(I=u.find((function(t){
                  return"online_video_completeness_score_setting"===t.type
                })))&&void 0!==I?I:r.hN.createByType("online_video_completeness_score_setting"), g.value=null!==(T=u.find((function(t){
                  return"performance_score_setting"===t.type
                })))&&void 0!==T?T:r.hN.createByType("performance_score_setting"), b.value=i, e.value=null!==(E=u.find((function(t){
                  return"homework_activity"===t.type
                })))&&void 0!==E?E:r.hN.createByType("homework_activity"), s.value=null!==($=u.find((function(t){
                  return"exam_activity"===t.type
                })))&&void 0!==$?$:r.hN.createByType("exam_activity"), d.value=null!==(A=u.find((function(t){
                  return"forum_activity"===t.type
                })))&&void 0!==A?A:r.hN.createByType("forum_activity"), v.value=null!==(R=u.find((function(t){
                  return"classroom_exam_activity"===t.type
                })))&&void 0!==R?R:r.hN.createByType("classroom_exam_activity"), p.value=null!==(D=u.find((function(t){
                  return"questionnaire_activity"===t.type
                })))&&void 0!==D?D:r.hN.createByType("questionnaire_activity"), f.value=null!==(N=u.find((function(t){
                  return"interaction_activity"===t.type
                })))&&void 0!==N?N:r.hN.createByType("interaction_activity"), h.value=null!==(P=u.find((function(t){
                  return"web_link_activity"===t.type
                })))&&void 0!==P?P:r.hN.createByType("web_link_activity"), x=new n.Decimal(null!==(j=i.scorePercentageTotal)&&void 0!==j?j:100).minus(k()).minus(null!==(M=i.scorePercentageLeft)&&void 0!==M?M:0), w.value=!1, [
                  2
                ]
              }
              var O
            }))
          }))
        }));
        return{
          categories:T, currentScorePercentage:I, rollcallSetting:m, onlineVideoSetting:_, performanceSetting:g, loading:w, getPercentageData:function(){
            return T.value.map((function(t){
              return t.setting
            })).filter((function(t){
              var e;
              return void 0!==t.value||!!(null===(e=t.children)||void 0===e?void 0:e.length)
            }))
          }
        }
      }
    }, 951888:(t, e, s)=>{
      var a;
      s.d(e, {
        z:()=>a
      }), function(t){
        t.Directed="directed", t.Undirected="undirected"
      }
      (a||(a={
      }))
    }, 952736:(t, e, s)=>{
      s.d(e, {
        A:()=>c
      });
      var a=s(595738), n=s(552979), i=s(408820), o=s(297786);
      const r=(0, a.pM)({
        props:{
          knowledgeNodeStat:{
            type:Object, required:!0
          }
        }, setup:function(t){
          var e=(0, a.QW)(t).knowledgeNodeStat, s=(0, a.EW)((function(){
            return e.value.resourceRefCount+e.value.captureRefCount+e.value.subjectRefCount+e.value.activityRefCount
          })), r=(0, a.EW)((function(){
            return{
              legend:{
                data:[
                  n.default.t("vtrs.detail.tabs.resources"), n.default.t("lession"), n.default.t("subject.question"), n.default.t("vtrs.detail.tabs.activities")
                ], top:20, left:"center", itemWidth:10, itemHeight:10, textStyle:{
                  fontSize:12
                }, icon:"circle", itemGap:25
              }, tooltip:{
                show:!0, formatter:function(t){
                  return'<div style="padding: 0 2px;width: fit-content;">\n                        <div>\n                          <span style="color: rgba(255, 255, 255, 0.8);font-weight: 400;font-size: 12px;">\n                            '.concat(n.default.t("courseHome.refResource"), '\n                          </span>\n                        </div>\n                        <div style="display: flex;justify-content: space-between;margin-top: 6px">\n                            <div style="display: flex;align-items: center; margin-right: 50px">\n                              <span style="background-color: ').concat(t.color, ';width: 8px;height: 8px;border-radius: 8px;margin-right: 4px"></span>\n                              <span style="color: #FFFFFF;font-weight: 400;font-size: 12px;">').concat(t.name, "</span>\n                            </div>\n                            <div style='margin-left: auto;'>\n                              <span style=\"font-weight: 500;font-size: 12px;color: #FFFFFF\">").concat(t.value, "</span>\n                            </div>\n                        </div>\n                    </div>")
                }, backgroundColor:"rgba(70, 76, 91, 0.9)", padding:10
              }, series:[
                {
                  type:"pie", radius:[
                    "100%", "130%"
                  ], center:[
                    "50%", "90%"
                  ], startAngle:180, endAngle:0, avoidLabelOverlap:!1, label:{
                    show:!1
                  }, labelLine:{
                    show:!1
                  }, data:[
                    {
                      name:n.default.t("vtrs.detail.tabs.resources"), value:e.value.resourceRefCount, itemStyle:{
                        color:"#4B96FF"
                      }
                    }, {
                      name:n.default.t("lession"), value:e.value.captureRefCount, itemStyle:{
                        color:"#50C14E"
                      }
                    }, {
                      name:n.default.t("subject.question"), value:e.value.subjectRefCount, itemStyle:{
                        color:"#FF9D2B"
                      }
                    }, {
                      name:n.default.t("vtrs.detail.tabs.activities"), value:e.value.activityRefCount, itemStyle:{
                        color:"#FF5E5E"
                      }
                    }
                  ]
                }, {
                  type:"pie", radius:[
                    "0%", "0%"
                  ], center:[
                    "50%", "75%"
                  ], silent:!0, label:{
                    show:!0, position:"center", formatter:"{a|".concat(s.value||0, "}\n{b|").concat(n.default.t("courseHome.refResource"), "}"), rich:{
                      a:{
                        fontSize:30, fontWeight:"bold", lineHeight:36, padding:[
                          0, 0, 5, 0
                        ]
                      }, b:{
                        fontSize:14, lineHeight:20, color:"#70748C"
                      }
                    }
                  }, data:[
                    {
                      value:1
                    }
                  ]
                }
              ]
            }
          }));
          return(0, a.sV)((function(){
            var t=i.init(document.querySelector("#knowledge-reference"));
            t.setOption(r.value), (0, a.wB)(r, (function(){
              t.setOption(r.value)
            }), {
              deep:!0
            }), (0, o.MLh)("resize", (function(){
              t.resize()
            }))
          })), {
            allCount:s
          }
        }
      });
      const c=(0, s(514486).A)(r, (function(){
        var t=this, e=t.$createElement, s=t._self._c||e;
        return s("div", {
          staticClass:"chart-box"
        }, [
          s("div", {
            staticClass:"box-header"
          }, [
            t._v(t._s(t.$t("knowledgeGraph.refCompose")))
          ]), t._v(" "), t._m(0)
        ])
      }), [
        function(){
          var t=this.$createElement, e=this._self._c||t;
          return e("div", {
            staticClass:"overview-chart"
          }, [
            e("div", {
              staticClass:"w-full", attrs:{
                id:"knowledge-reference"
              }
            })
          ])
        }
      ], !1, null, "66b54907", null).exports
    }, 959805:(t, e, s)=>{
      t.exports=s.p+"assets/images/large/18d6a126dd009e6cc543.png"
    }, 968962:(t, e, s)=>{
      s.d(e, {
        A:()=>c
      });
      s(334867);
      var a=s(595738), n=s(297786), i=s(552979), o=s(408820);
      const r=(0, a.pM)({
        props:{
          knowledgeNodeStat:{
            type:Object, required:!0
          }
        }, setup:function(t){
          var e=(0, a.EW)((function(){
            return parseInt((t.knowledgeNodeStat.nodeWithReferenceCount/t.knowledgeNodeStat.nodeCount*100).toFixed(), 10)
          })), s=(0, a.EW)((function(){
            return{
              color:[
                "#c23531", "#2f4554", "#61a0a8", "#d48265", "#91c7ae", "#749f83", "#ca8622", "#bda29a", "#6e7074", "#546570", "#c4ccd3"
              ], grid:{
                left:"0", right:"0", bottom:"0", top:"0"
              }, series:[
                {
                  type:"pie", radius:[
                    "65%", "80%"
                  ], silent:!0, label:{
                    show:!1
                  }, data:[
                    {
                      value:100, itemStyle:{
                        color:"#E4FAFA"
                      }
                    }
                  ]
                }, {
                  type:"pie", radius:[
                    "55%", "70%"
                  ], avoidLabelOverlap:!1, label:{
                    show:!0, position:"center", formatter:"{a|".concat(e.value, "%}\n{b|").concat(i.default.t("knowledgeGraph.nodeWithRef"), "}"), rich:{
                      a:{
                        color:"#000", fontSize:28, fontWeight:"bold", lineHeight:36
                      }, b:{
                        color:"#70748C", fontSize:14, lineHeight:20
                      }
                    }
                  }, emphasis:{
                    disabled:!0
                  }, data:[
                    {
                      value:e.value, itemStyle:{
                        color:"#20B2AA"
                      }
                    }, {
                      value:100-e.value, itemStyle:{
                        color:"#E0FFFF"
                      }
                    }
                  ]
                }
              ], backgroundColor:"transparent"
            }
          }));
          return(0, a.sV)((function(){
            var t=o.init(document.querySelector("#knowledge-chart"));
            t.setOption(s.value), (0, a.wB)(e, (function(){
              t.setOption(s.value)
            })), (0, n.MLh)("resize", (function(){
              t.resize()
            }))
          })), {
            percent:e
          }
        }
      });
      const c=(0, s(514486).A)(r, (function(){
        var t=this, e=t.$createElement, s=t._self._c||e;
        return s("div", {
          staticClass:"chart-box"
        }, [
          s("div", {
            staticClass:"box-header"
          }, [
            t._v(t._s(t.$t("knowledgeGraph.construction")))
          ]), t._v(" "), s("div", {
            staticClass:"overview-chart"
          }, [
            s("div", {
              staticClass:"info"
            }, [
              s("div", [
                t._v("\n        "+t._s(t.$t("knowledgeGraph.nodeCount"))+"\n        "), s("span", [
                  t._v("\n          "+t._s(t.knowledgeNodeStat.nodeCount)+"\n        ")
                ])
              ]), t._v(" "), s("div", [
                t._v("\n        "+t._s(t.$t("knowledgeGraph.nodeWithRef"))+"\n\n        "), s("span", [
                  t._v("\n          "+t._s(t.knowledgeNodeStat.nodeWithReferenceCount)+"\n        ")
                ])
              ])
            ]), t._v(" "), s("div", {
              staticClass:"w-full", attrs:{
                id:"knowledge-chart"
              }
            })
          ])
        ])
      }), [
      ], !1, null, "fd84d1aa", null).exports
    }, 971793:(t, e, s)=>{
      s.d(e, {
        BX:()=>c, HV:()=>l, ae:()=>o, ml:()=>r
      });
      var a=s(738645), n=s(510543), i=function(t, e, s, a){
        var n, i=arguments.length, o=i<3?e:null===a?a=Object.getOwnPropertyDescriptor(e, s):a;
        if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t, e, s, a);
        else for(var r=t.length-1;
        r>=0;
        r--)(n=t[
          r
        ])&&(o=(i<3?n(o):i>3?n(e, s, o):n(e, s))||o);
        return i>3&&o&&Object.defineProperty(e, s, o), o
      }, o=function(){
        function t(){
          this.type="course", this.nodeCount=0, this.resourceCount=0, this.studentCount=0, this.chapterCount=0
        }
        return t.prototype.getUrl=function(){
          return"/course/".concat(this.id)
        }, t.prototype.getAverageScore=function(){
          throw new Error("Method not implemented.")
        }, i([
          (0, a.v)()
        ], t.prototype, "id", void 0), i([
          (0, a.v)({
            name:"display_name"
          })
        ], t.prototype, "name", void 0), i([
          (0, a.v)({
            name:"small_cover"
          }), (0, a.v)({
            name:"cover"
          }), (0, n.d)((function(t){
            var e=t.obj;
            return e.small_cover||e.cover
          }))
        ], t.prototype, "cover", void 0), i([
          (0, a.v)({
            name:"knowledge_node_count"
          })
        ], t.prototype, "nodeCount", void 0), i([
          (0, a.v)({
            name:"activity_count"
          })
        ], t.prototype, "resourceCount", void 0), i([
          (0, a.v)({
            name:"course_attributes"
          }), (0, n.d)((function(t){
            var e;
            return(null===(e=t.obj.course_attributes)||void 0===e?void 0:e.student_count)||0
          }))
        ], t.prototype, "studentCount", void 0), i([
          (0, a.v)({
            name:"syllabus_count"
          }), (0, a.v)({
            name:"module_count"
          }), (0, n.d)((function(t){
            var e=t.obj;
            return(e.module_count||0)+(e.syllabus_count||0)
          }))
        ], t.prototype, "chapterCount", void 0), i([
          (0, a.v)({
            name:"public_scope"
          })
        ], t.prototype, "scope", void 0), i([
          (0, a.v)({
            name:"course_public_settings"
          }), (0, n.d)((function(t){
            var e;
            return!!(null===(e=t.obj.course_public_settings)||void 0===e?void 0:e.sign_up_charge_amount)
          }))
        ], t.prototype, "isPaidCourse", void 0), i([
          (0, a.v)({
            name:"selected_certification"
          }), (0, n.d)((function(t){
            var e;
            return(null===(e=t.obj.selected_certification)||void 0===e?void 0:e.certification_title)||""
          }))
        ], t.prototype, "certification", void 0), i([
          (0, a.v)(), (0, n.d)((function(t){
            var e=t.value;
            if(e)return e.map((function(t){
              var e=t.id, s=t.avatar_small_url;
              return{
                id:e, name:t.name, avatar:s
              }
            }))
          }))
        ], t.prototype, "instructors", void 0), i([
          (0, a.v)({
            name:"is_started"
          })
        ], t.prototype, "isStarted", void 0), i([
          (0, a.v)({
            name:"credit_state"
          }), (0, n.d)((function(t){
            return!!t.obj.credit_state
          }))
        ], t.prototype, "isAir", void 0), t
      }
      (), r=function(){
        function t(){
          this.type="curriculum", this.nodeCount=0, this.resourceCount=0, this.studentCount=0, this.chapterCount=0, this.scope=""
        }
        return t.prototype.getUrl=function(){
          return"/curriculum/".concat(this.id)
        }, t.prototype.getAverageScore=function(){
          throw new Error("Method not implemented.")
        }, i([
          (0, a.v)()
        ], t.prototype, "id", void 0), i([
          (0, a.v)()
        ], t.prototype, "name", void 0), i([
          (0, a.v)()
        ], t.prototype, "cover", void 0), i([
          (0, a.v)({
            name:"course_public_settings"
          }), (0, n.d)((function(t){
            var e;
            return!!(null===(e=t.obj.course_public_settings)||void 0===e?void 0:e.sign_up_charge_amount)
          }))
        ], t.prototype, "isPaidCourse", void 0), i([
          (0, a.v)({
            name:"selected_certification"
          }), (0, n.d)((function(t){
            var e;
            return(null===(e=t.obj.selected_certification)||void 0===e?void 0:e.certification_title)||""
          }))
        ], t.prototype, "certification", void 0), i([
          (0, a.v)({
            name:"is_started"
          })
        ], t.prototype, "isStarted", void 0), i([
          (0, a.v)({
            name:"credit_state"
          }), (0, n.d)((function(t){
            return!!t.obj.credit_state
          }))
        ], t.prototype, "isAir", void 0), t
      }
      (), c=function(){
        function t(){
        }
        return i([
          (0, a.v)({
            name:"course_count"
          })
        ], t.prototype, "courseCount", void 0), i([
          (0, a.v)({
            name:"student_count"
          })
        ], t.prototype, "studentCount", void 0), t
      }
      (), l=function(){
        function t(){
        }
        return i([
          (0, a.v)({
            name:"curriculum_count"
          })
        ], t.prototype, "courseCount", void 0), i([
          (0, a.v)({
            name:"student_count"
          })
        ], t.prototype, "studentCount", void 0), t
      }
      ()
    }, 994821:(t, e, s)=>{
      s.r(e), s.d(e, {
        default:()=>Os
      });
      s(540590), s(418665), s(269193), s(14602);
      var a=s(504767), n=s(301259), i=s(595738), o=s(410257), r=s(734392), c=s(362208);
      const l=(0, i.pM)({
        name:"DetailButton", props:{
          isJoined:{
            type:Boolean, required:!0
          }, onClick:{
            type:Function, required:!0
          }
        }, setup:function(t){
          return{
            handleClick:function(){
              t.isJoined&&t.onClick()
            }
          }
        }
      });
      var u=s(514486);
      const d=(0, u.A)(l, (function(){
        var t=this, e=t.$createElement, s=t._self._c||e;
        return s("div", {
          staticClass:"detail-wrapper"
        }, [
          s("Tooltip", {
            attrs:{
              content:t.$t("competencyGraph.notJoinedTip"), placement:"top", disabled:t.isJoined, "transfer-class-name":"fixed-width-tooltip", transfer:"", offset:0
            }
          }, [
            s("div", {
              staticClass:"detail", class:{
                disabled:!t.isJoined
              }, on:{
                click:t.handleClick
              }
            }, [
              s("span", {
                staticClass:"text"
              }, [
                t._v(t._s(t.$t("problemGraph.detail")))
              ]), t._v(" "), s("svg-icon", {
                staticClass:"share", attrs:{
                  name:"catalog-share"
                }
              })
            ], 1)
          ])
        ], 1)
      }), [
      ], !1, null, "5ec3186c", null).exports, v=(0, i.pM)({
        props:{
          course:{
            type:Object, required:!0
          }, userId:Number, publishType:{
            type:String
          }, state:{
            type:Object, required:!0
          }
        }, components:{
          CompetencyGraph:c.default, DetailButton:d
        }, setup:function(t){
          var e=(0, i.EW)((function(){
            return"published"===t.publishType
          })), s=(0, i.EW)((function(){
            var e;
            return"enter"===(null===(e=t.state)||void 0===e?void 0:e.action)
          }));
          return{
            goToCompetencyGraph:function(){
              if(s.value){
                var e="/course/".concat(t.course.id, "/knowledge-graph#/competency");
                localStorage.setItem("knowledgeGraphHash", "competency"), window.open(e, "_blank")
              }
            }, isPublished:e, isJoined:s
          }
        }
      });
      const p=(0, u.A)(v, (function(){
        var t=this, e=t.$createElement, s=t._self._c||e;
        return s("div", {
          ref:"wrapperRef", staticClass:"competency-graph-wrapper"
        }, [
          s("CompetencyGraph", {
            attrs:{
              "course-info":t.course, "read-only":!0, "user-id":t.userId
            }
          }), t._v(" "), s("DetailButton", {
            attrs:{
              "is-joined":t.isJoined, "on-click":t.goToCompetencyGraph
            }
          })
        ], 1)
      }), [
      ], !1, null, "2aac19e4", null).exports, f=s.p+"assets/js/vue/views/course/info/ba223435b02086407caf.wasm";
      var m=s(879055), _=s(761133), h=s(966491), g=s(248124), y=s(756029);
      const C=(0, i.pM)({
        props:{
          courseId:Number, userId:Number
        }, setup:function(t){
          var e=(0, i.KR)([
          ]);
          (0, m.Wo)(t.courseId, !t.userId).then((function(t){
            e.value=t
          }));
          var s=(0, i.EW)((function(){
            return e.value.filter((function(t){
              return t.id
            }))
          }));
          return{
            outlines:e, fileTypeByExtension:h.fileTypeByExtension, preview:function(e){
              t.userId&&(g("#file-previewer").foundation("reveal", "open"), y.element(document.body).scope().$broadcast("previewFile", e, null))
            }, outlineFiltered:s
          }
        }
      });
      const b=(0, u.A)(C, (function(){
        var t=this, e=t.$createElement, s=t._self._c||e;
        return s("div", {
          staticClass:"root", class:{
            disabled:!t.userId
          }
        }, [
          t.outlineFiltered.length>0?s("Anchor", {
            staticClass:"anchor", attrs:{
              affix:!1, "show-ink":""
            }
          }, t._l(t.outlineFiltered, (function(t){
            return s("AnchorLink", {
              key:t.id, attrs:{
                href:"#"+t.id, title:t.title
              }
            })
          })), 1):t._e(), t._v(" "), s("div", {
            staticClass:"content w-full"
          }, t._l(t.outlineFiltered, (function(e){
            return s("div", {
              key:e.id, staticClass:"item"
            }, [
              s("div", {
                staticClass:"title", attrs:{
                  id:e.id
                }
              }, [
                s("div", {
                  staticClass:"icon"
                }, [
                  s("svg-icon", {
                    attrs:{
                      name:"course-shadow"
                    }
                  }), t._v(" "), s("div", {
                    staticClass:"background-container"
                  })
                ], 1), t._v("\n        "+t._s(e.title)+"\n      ")
              ]), t._v(" "), s("div", {
                domProps:{
                  innerHTML:t._s(e.description)
                }
              }), t._v(" "), s("div", {
                staticClass:"uploads"
              }, t._l(e.uploads, (function(e){
                return s("div", {
                  key:e.id, staticClass:"upload", on:{
                    click:function(s){
                      return t.preview(e)
                    }
                  }
                }, [
                  s("i", {
                    staticClass:"font type-icon", class:[
                      "font-file-"+t.fileTypeByExtension(e)
                    ]
                  }), t._v("\n          "+t._s(e.name)+"\n\n          "), t.userId?s("i", {
                    staticClass:"font font-resource-view ml-auto"
                  }):s("Tooltip", {
                    staticClass:"ml-auto", attrs:{
                      content:t.$t("visitorCannotView")
                    }
                  }, [
                    s("i", {
                      staticClass:"font font-resource-view"
                    })
                  ])
                ], 1)
              })), 0)
            ])
          })), 0)
        ], 1)
      }), [
      ], !1, null, "bb65096c", null).exports;
      s(714913), s(168763), s(906048), s(658379);
      var w=s(990695), S=s(131745), x=s(538102), k=s(445551), I=s(347086), T=s(552979), E=s(302543), $=s.n(E), A=function(t, e, s, a){
        return new(s||(s=Promise))((function(n, i){
          function o(t){
            try{
              c(a.next(t))
            }
            catch(t){
              i(t)
            }
          }
          function r(t){
            try{
              c(a.throw(t))
            }
            catch(t){
              i(t)
            }
          }
          function c(t){
            var e;
            t.done?n(t.value):(e=t.value, e instanceof s?e:new s((function(t){
              t(e)
            }))).then(o, r)
          }
          c((a=a.apply(t, e||[
          ])).next())
        }))
      }, R=function(t, e){
        var s, a, n, i, o={
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
          next:r(0), throw:r(1), return:r(2)
        }, "function"==typeof Symbol&&(i[
          Symbol.iterator
        ]
        =function(){
          return this
        }), i;
        function r(r){
          return function(c){
            return function(r){
              if(s)throw new TypeError("Generator is already executing.");
              for(;
              i&&(i=0, r[
                0
              ]
              &&(o=0)), o;
              )try{
                if(s=1, a&&(n=2&r[
                  0
                ]
                ?a.return:r[
                  0
                ]
                ?a.throw||((n=a.return)&&n.call(a), 0):a.next)&&!(n=n.call(a, r[
                  1
                ])).done)return n;
                switch(a=0, n&&(r=[
                  2&r[
                    0
                  ], n.value
                ]), r[
                  0
                ]){
                  case 0:case 1:n=r;
                  break;
                  case 4:return o.label++, {
                    value:r[
                      1
                    ], done:!1
                  };
                  case 5:o.label++, a=r[
                    1
                  ], r=[
                    0
                  ];
                  continue;
                  case 7:r=o.ops.pop(), o.trys.pop();
                  continue;
                  default:if(!(n=o.trys, (n=n.length>0&&n[
                    n.length-1
                  ])||6!==r[
                    0
                  ]
                  &&2!==r[
                    0
                  ])){
                    o=0;
                    continue
                  }
                  if(3===r[
                    0
                  ]
                  &&(!n||r[
                    1
                  ]
                  >n[
                    0
                  ]
                  &&r[
                    1
                  ]
                  <n[
                    3
                  ])){
                    o.label=r[
                      1
                    ];
                    break
                  }
                  if(6===r[
                    0
                  ]
                  &&o.label<n[
                    1
                  ]){
                    o.label=n[
                      1
                    ], n=r;
                    break
                  }
                  if(n&&o.label<n[
                    2
                  ]){
                    o.label=n[
                      2
                    ], o.ops.push(r);
                    break
                  }
                  n[
                    2
                  ]
                  &&o.ops.pop(), o.trys.pop();
                  continue
                }
                r=e.call(t, o)
              }
              catch(t){
                r=[
                  6, t
                ], a=0
              }
              finally{
                s=n=0
              }
              if(5&r[
                0
              ])throw r[
                1
              ];
              return{
                value:r[
                  0
                ]
                ?r[
                  1
                ]
                :void 0, done:!0
              }
            }
            ([
              r, c
            ])
          }
        }
      };
      const D=(0, i.pM)({
        name:"visits-stat", props:{
          courseId:{
            type:Number, required:!0
          }, statType:{
            type:String, required:!1
          }, dateRange:{
            type:Array, required:!0, default:function(){
              return[
              ]
            }
          }
        }, setup:function(t, e){
          var s=this, a=(0, i.KR)({
          }), n=(0, i.KR)(!1), r=(0, i.KR)({
          }), c=(0, i.KR)(!1), l=(0, i.EW)((function(){
            return function(t, e){
              return void 0===e&&(e=!1), $().pickBy(t, (function(t, s){
                return e?"distinct"===s:"distinct"!==s
              }))
            }
          })), u=function(t){
            var e=!1;
            return Object.keys(t).forEach((function(s){
              var a=t[
                s
              ];
              a.visits+a.visitors>0&&(e=!0)
            })), e
          }, d=function(){
            return A(s, void 0, void 0, (function(){
              var e, s, i;
              return R(this, (function(l){
                switch(l.label){
                  case 0:return t.dateRange.length?(e={
                    activity_type:"course"===t.statType?"":t.statType, start:t.dateRange[
                      0
                    ], end:t.dateRange[
                      1
                    ], timezone_offset:8
                  }, s=a, [
                    4, (0, o.a_)(t.courseId, e)
                  ]):[
                    2
                  ];
                  case 1:return s.value=l.sent(), i=r, [
                    4, (0, o.p1)(t.courseId, e)
                  ];
                  case 2:return i.value=l.sent(), n.value=u(a.value), c.value=u(r.value), [
                    2
                  ]
                }
              }))
            }))
          };
          return(0, i.wB)((function(){
            return t.statType
          }), (function(t){
            return A(s, void 0, void 0, (function(){
              return R(this, (function(t){
                switch(t.label){
                  case 0:return[
                    4, d()
                  ];
                  case 1:return t.sent(), [
                    2
                  ]
                }
              }))
            }))
          })), (0, i.wB)((function(){
            return t.dateRange
          }), (function(t){
            return A(s, void 0, void 0, (function(){
              return R(this, (function(t){
                switch(t.label){
                  case 0:return[
                    4, d()
                  ];
                  case 1:return t.sent(), [
                    2
                  ]
                }
              }))
            }))
          })), (0, i.sV)((function(){
            return A(s, void 0, void 0, (function(){
              return R(this, (function(t){
                switch(t.label){
                  case 0:return[
                    4, d()
                  ];
                  case 1:return t.sent(), [
                    2
                  ]
                }
              }))
            }))
          })), {
            webVisitsStats:a, appVisitsStats:r, visitsStatsFilter:l, hasWebVisitsStats:n, hasAppVisitsStats:c
          }
        }
      });
      const N=(0, u.A)(D, (function(){
        var t=this, e=t.$createElement, s=t._self._c||e;
        return s("div", {
          staticClass:"visits-stat"
        }, [
          s("div", {
            staticClass:"browsers"
          }, [
            s("div", {
              staticClass:"card-header"
            }, [
              s("i", {
                staticClass:"ivu-icon ivu-icon-md-desktop"
              }), t._v("\n      "+t._s(t.$t("learningAnalysis.visits.web"))+"\n    ")
            ]), t._v(" "), s("div", {
              staticClass:"body"
            }, [
              t._l(t.visitsStatsFilter(t.webVisitsStats, !0), (function(e, a){
                return s("div", {
                  directives:[
                    {
                      name:"show", rawName:"v-show", value:e.visits+e.visitors>0, expression:"visit.visits + visit.visitors > 0"
                    }
                  ], key:a, staticClass:"body-inner"
                }, [
                  s("div", {
                  }, [
                    s("span", {
                      staticClass:"visits-number"
                    }, [
                      t._v(t._s(e.visits))
                    ]), t._v(" "), s("span", [
                      t._v(t._s(t.$t("learningAnalysis.visits.visits")))
                    ])
                  ]), t._v(" "), s("div", {
                  }, [
                    s("span", {
                      staticClass:"visits-number"
                    }, [
                      t._v(t._s(e.visitors))
                    ]), t._v(" "), s("span", [
                      t._v(t._s(t.$t("learningAnalysis.visits.visitors")))
                    ])
                  ])
                ])
              })), t._v(" "), t.hasWebVisitsStats?t._e():s("div", {
                staticClass:"no-data"
              }, [
                s("span", [
                  t._v(t._s(t.$t("noData")))
                ])
              ])
            ], 2)
          ]), t._v(" "), s("div", {
            staticClass:"apps"
          }, [
            s("div", {
              staticClass:"card-header"
            }, [
              s("i", {
                staticClass:"ivu-icon ivu-icon-md-phone-portrait"
              }), t._v("\n      "+t._s(t.$t("learningAnalysis.visits.app"))+"\n    ")
            ]), t._v(" "), s("div", {
              staticClass:"body"
            }, [
              t._l(t.visitsStatsFilter(t.appVisitsStats, !0), (function(e, a){
                return s("div", {
                  directives:[
                    {
                      name:"show", rawName:"v-show", value:e.visits+e.visitors>0, expression:"visit.visits + visit.visitors > 0"
                    }
                  ], key:a, staticClass:"body-inner"
                }, [
                  s("div", {
                  }, [
                    s("span", {
                      staticClass:"visits-number"
                    }, [
                      t._v(t._s(e.visits))
                    ]), t._v(" "), s("span", [
                      t._v(t._s(t.$t("learningAnalysis.visits.visits")))
                    ])
                  ]), t._v(" "), s("div", {
                  }, [
                    s("span", {
                      staticClass:"visits-number"
                    }, [
                      t._v(t._s(e.visitors))
                    ]), t._v(" "), s("span", [
                      t._v(t._s(t.$t("learningAnalysis.visits.visitors")))
                    ])
                  ])
                ])
              })), t._v(" "), t.hasAppVisitsStats?t._e():s("div", {
                staticClass:"no-data"
              }, [
                s("span", [
                  t._v(t._s(t.$t("noData")))
                ])
              ])
            ], 2)
          ])
        ])
      }), [
      ], !1, null, "66558c5e", null).exports;
      var P=function(t, e, s, a){
        return new(s||(s=Promise))((function(n, i){
          function o(t){
            try{
              c(a.next(t))
            }
            catch(t){
              i(t)
            }
          }
          function r(t){
            try{
              c(a.throw(t))
            }
            catch(t){
              i(t)
            }
          }
          function c(t){
            var e;
            t.done?n(t.value):(e=t.value, e instanceof s?e:new s((function(t){
              t(e)
            }))).then(o, r)
          }
          c((a=a.apply(t, e||[
          ])).next())
        }))
      }, j=function(t, e){
        var s, a, n, i, o={
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
          next:r(0), throw:r(1), return:r(2)
        }, "function"==typeof Symbol&&(i[
          Symbol.iterator
        ]
        =function(){
          return this
        }), i;
        function r(r){
          return function(c){
            return function(r){
              if(s)throw new TypeError("Generator is already executing.");
              for(;
              i&&(i=0, r[
                0
              ]
              &&(o=0)), o;
              )try{
                if(s=1, a&&(n=2&r[
                  0
                ]
                ?a.return:r[
                  0
                ]
                ?a.throw||((n=a.return)&&n.call(a), 0):a.next)&&!(n=n.call(a, r[
                  1
                ])).done)return n;
                switch(a=0, n&&(r=[
                  2&r[
                    0
                  ], n.value
                ]), r[
                  0
                ]){
                  case 0:case 1:n=r;
                  break;
                  case 4:return o.label++, {
                    value:r[
                      1
                    ], done:!1
                  };
                  case 5:o.label++, a=r[
                    1
                  ], r=[
                    0
                  ];
                  continue;
                  case 7:r=o.ops.pop(), o.trys.pop();
                  continue;
                  default:if(!(n=o.trys, (n=n.length>0&&n[
                    n.length-1
                  ])||6!==r[
                    0
                  ]
                  &&2!==r[
                    0
                  ])){
                    o=0;
                    continue
                  }
                  if(3===r[
                    0
                  ]
                  &&(!n||r[
                    1
                  ]
                  >n[
                    0
                  ]
                  &&r[
                    1
                  ]
                  <n[
                    3
                  ])){
                    o.label=r[
                      1
                    ];
                    break
                  }
                  if(6===r[
                    0
                  ]
                  &&o.label<n[
                    1
                  ]){
                    o.label=n[
                      1
                    ], n=r;
                    break
                  }
                  if(n&&o.label<n[
                    2
                  ]){
                    o.label=n[
                      2
                    ], o.ops.push(r);
                    break
                  }
                  n[
                    2
                  ]
                  &&o.ops.pop(), o.trys.pop();
                  continue
                }
                r=e.call(t, o)
              }
              catch(t){
                r=[
                  6, t
                ], a=0
              }
              finally{
                s=n=0
              }
              if(5&r[
                0
              ])throw r[
                1
              ];
              return{
                value:r[
                  0
                ]
                ?r[
                  1
                ]
                :void 0, done:!0
              }
            }
            ([
              r, c
            ])
          }
        }
      }, M=function(t, e, s){
        if(s||2===arguments.length)for(var a, n=0, i=e.length;
        n<i;
        n++)!a&&n in e||(a||(a=Array.prototype.slice.call(e, 0, n)), a[
          n
        ]
        =e[
          n
        ]);
        return t.concat(a||Array.prototype.slice.call(e))
      };
      const G=(0, i.pM)({
        name:"visits-index", props:{
          courseId:{
            type:Number, required:!0
          }, statType:{
            type:String, default:"course"
          }, startDate:{
            type:String, required:!0, default:""
          }
        }, components:{
          OverviewBox:w.A, DateFilter:S.A, UserList:x.A, EchartsView:k.A, VisitsStat:I.A, DeviceStat:N
        }, setup:function(t){
          var e=this, s=(0, i.KR)(!1), a=(0, i.KR)("week"), n=(0, i.Kh)([
          ]), r=(0, i.Kh)([
            {
              title:T.default.t("learningAnalysis.visits.totalVisits"), value:"0", type:"total-visits_count"
            }, {
              title:T.default.t("learningAnalysis.visits.todayVisits"), value:"0", type:"today-visits_count"
            }, {
              title:T.default.t("learningAnalysis.visits.todayVisitors"), value:"0", type:"today-visitors_count"
            }
          ]), c=(0, i.KR)([
          ]), l=(0, i.KR)(!1), u=function(){
            return P(e, void 0, void 0, (function(){
              var e, s, a, n, i;
              return j(this, (function(l){
                switch(l.label){
                  case 0:return e={
                    activity_type:"course"===t.statType?"":t.statType
                  }, [
                    4, (0, o.kJ)(t.courseId, e)
                  ];
                  case 1:return s=l.sent(), a={
                    time_restrict:"day", activity_type:"course"===t.statType?"":t.statType
                  }, [
                    4, (0, o.kJ)(t.courseId, a)
                  ];
                  case 2:return n=l.sent(), i=n.slice(n.length-7, n.length+1), c.value=i, M([
                  ], r, !0).forEach((function(t){
                    var e, a;
                    "total-visits_count"===t.type&&(t.value=(s.count||0).toString()), "today-visits_count"===t.type&&(t.value=((null===(e=i[
                      6
                    ])||void 0===e?void 0:e.count)||0).toString()), "today-visitors_count"===t.type&&(t.value=((null===(a=i[
                      6
                    ])||void 0===a?void 0:a.distinct)||0).toString())
                  })), [
                    2
                  ]
                }
              }))
            }))
          };
          return(0, i.wB)((function(){
            return t.statType
          }), (function(){
            return P(e, void 0, void 0, (function(){
              return j(this, (function(t){
                switch(t.label){
                  case 0:return a.value="week", [
                    4, P(e, void 0, void 0, (function(){
                      return j(this, (function(t){
                        switch(t.label){
                          case 0:return[
                            4, u()
                          ];
                          case 1:return t.sent(), [
                            2
                          ]
                        }
                      }))
                    }))
                  ];
                  case 1:return t.sent(), [
                    2
                  ]
                }
              }))
            }))
          })), (0, i.wB)((function(){
            return a.value
          }), (function(s){
            return P(e, void 0, void 0, (function(){
              return j(this, (function(s){
                switch(s.label){
                  case 0:return"custom"===a.value?[
                    3, 2
                  ]
                  :[
                    4, P(e, void 0, void 0, (function(){
                      var e, s;
                      return j(this, (function(n){
                        switch(n.label){
                          case 0:return e={
                            time_restrict:"day", activity_type:"course"===t.statType?"":t.statType
                          }, "day"===a.value&&(e.time_restrict="hour"), "year"===a.value&&(e.time_restrict="month"), [
                            4, (0, o.kJ)(t.courseId, e)
                          ];
                          case 1:return s=n.sent(), "week"===a.value?c.value=s.slice(s.length-7, s.length+1):"month"===a.value||"day"===a.value||"year"===a.value?c.value=s.slice(1, s.length+1):c.value=s, [
                            2
                          ]
                        }
                      }))
                    }))
                  ];
                  case 1:s.sent(), s.label=2;
                  case 2:return[
                    2
                  ]
                }
              }))
            }))
          })), (0, i.sV)((function(){
            return P(e, void 0, void 0, (function(){
              return j(this, (function(t){
                switch(t.label){
                  case 0:return[
                    4, u()
                  ];
                  case 1:return t.sent(), [
                    2
                  ]
                }
              }))
            }))
          })), {
            visitStats:r, rangeDateChange:function(t){
              a.value=t.range, n.splice(0, n.length), n.push.apply(n, t.dateRange)
            }, isProject:l, visitsData:c, range:a, dateRange:n, loading:s
          }
        }
      });
      const O=(0, u.A)(G, (function(){
        var t=this, e=t.$createElement, s=t._self._c||e;
        return s("div", {
          staticClass:"visits"
        }, [
          s("div", {
            staticClass:"stat-count-row"
          }, t._l(t.visitStats, (function(t){
            return s("overview-box", {
              key:t.type, attrs:{
                data:t
              }
            })
          })), 1), t._v(" "), s("div", {
            staticClass:"filter-row"
          }, [
            s("date-filter", {
              attrs:{
                "start-date":t.startDate, range:t.range
              }, on:{
                change:t.rangeDateChange
              }
            })
          ], 1), t._v(" "), s("div", {
            staticClass:"view-row"
          }, [
            s("echarts-view", {
              attrs:{
                "course-id":t.courseId, "stat-type":t.statType, range:t.range, "date-range":t.dateRange, "visits-data":t.visitsData, "is-open-legend":!0
              }
            }), t._v(" "), s("DeviceStat", {
              attrs:{
                "course-id":t.courseId, "stat-type":t.statType, "date-range":t.dateRange
              }
            })
          ], 1)
        ])
      }), [
      ], !1, null, "c9ddffb8", null).exports;
      var K=s(408820), W=s(297786), B=(0, i.KR)({
      }), L=function(t, e){
        void 0===e&&(e=!1), (0, m.Ss)(t, e).then((function(t){
          B.value=t
        }))
      }, q=function(){
        return{
          load:L, statInfo:B
        }
      };
      const F=(0, i.pM)({
        setup:function(){
          var t=q().statInfo;
          return(0, i.sV)((function(){
            var e=function(){
              var e=K.init(document.querySelector(".chart")), s={
                grid:{
                  left:"3%", right:"4%", bottom:"3%", containLabel:!0
                }, xAxis:{
                  type:"category", data:[
                    T.default.t("learningAnalysis.homeworkCount"), T.default.t("learningAnalysis.examCount"), T.default.t("learningAnalysis.forumCount"), T.default.t("learningAnalysis.materialCount"), T.default.t("learningAnalysis.lessonActivityCount"), T.default.t("learningAnalysis.liveMeetingCount"), T.default.t("learningAnalysis.otherActivityCount")
                  ], axisLine:{
                    show:!1
                  }, axisTick:{
                    show:!1
                  }
                }, yAxis:{
                  type:"value", max:50, splitLine:{
                    lineStyle:{
                      type:"dashed"
                    }
                  }, axisLine:{
                    show:!1
                  }, axisTick:{
                    show:!1
                  }
                }, series:[
                  {
                    data:[
                      t.value.homeworkCount, t.value.examCount, t.value.forumCount, t.value.materialCount, t.value.lessonActivityCount, t.value.liveMeetingCount, t.value.otherCount
                    ], type:"bar", itemStyle:{
                      color:function(t){
                        return[
                          "#68C63D", "#3182F1", "#FA891B", "#00CBCF", "#A974FE", "#8C9BAE", "#4A96FF"
                        ]
                        [
                          t.dataIndex
                        ]
                      }, barBorderRadius:[
                        4, 4, 4, 4
                      ]
                    }, barWidth:"20%"
                  }
                ]
              };
              return e.setOption(s), e
            }
            ();
            (0, W.MLh)("resize", (function(){
              e.resize()
            }))
          })), {
          }
        }
      });
      const V=(0, u.A)(F, (function(){
        var t=this, e=t.$createElement;
        t._self._c;
        return t._m(0)
      }), [
        function(){
          var t=this.$createElement, e=this._self._c||t;
          return e("div", [
            e("div", {
              staticClass:"chart"
            })
          ])
        }
      ], !1, null, "6396653a", null).exports;
      s(700533), s(990345), s(158649);
      var H=s(548987);
      const U=(0, i.pM)({
        props:{
          courseId:{
            type:Number, required:!0
          }
        }, setup:function(t){
          var e=(0, i.KR)(new H.k$);
          (0, o.Sd)(t.courseId).then((function(t){
            e.value=t
          }));
          var s=(0, i.KR)(new H.k$);
          (0, o.xP)(t.courseId).then((function(t){
            s.value=t
          }));
          var a=(0, i.KR)(new H.Oe);
          (0, o.KJ)(t.courseId).then((function(t){
            a.value=t
          }));
          var n=(0, i.KR)(new H.Id);
          (0, o.Nv)(t.courseId).then((function(t){
            n.value=t
          }));
          var r=(0, i.KR)(new H.C7);
          (0, o.k$)(t.courseId).then((function(t){
            r.value=t
          }));
          var c=T.default.t("learningAnalysis.forum.instructorTitle").split("：")[
            1
          ];
          return{
            courseActivityStats:e, examActivityStats:s, forumStats:a, valuesCount:function(t){
              return t?Object.values(t).reduce((function(t, e){
                return t+e
              }), 0):0
            }, webLinkstats:n, bulletinsStat:r, forumTitle:c
          }
        }
      });
      const z=(0, u.A)(U, (function(){
        var t=this, e=t.$createElement, s=t._self._c||e;
        return s("div", {
          staticClass:"root parent"
        }, [
          s("div", {
            staticClass:"stat-item div1"
          }, [
            s("div", {
              staticClass:"stat-header"
            }, [
              s("div", {
                staticClass:"header-icon"
              }, [
                s("svg-icon", {
                  attrs:{
                    name:"stat-homework"
                  }
                })
              ], 1), t._v(" "), s("div", {
                staticClass:"header-content"
              }, [
                s("div", {
                  staticClass:"header-num"
                }, [
                  t._v(t._s(t.courseActivityStats.activityCount))
                ]), t._v(" "), s("div", {
                  staticClass:"header-title"
                }, [
                  t._v(t._s(t.$t("learningAnalysis.publishedAssignment")))
                ])
              ])
            ]), t._v(" "), s("div", {
              staticClass:"stat-body"
            }, [
              s("div", {
                staticClass:"body-item"
              }, [
                s("div", {
                  staticClass:"body-item-title"
                }, [
                  t._v(t._s(t.$t("learningAnalysis.avgSubmissionRate")))
                ]), t._v(" "), s("div", {
                  staticClass:"body-item-content"
                }, [
                  t._v(t._s(t.courseActivityStats.submittedPercentage)+"%")
                ])
              ]), t._v(" "), s("div", {
                staticClass:"body-item"
              }, [
                s("div", {
                  staticClass:"body-item-title"
                }, [
                  t._v(t._s(t.$t("learningAnalysis.avgScore")))
                ]), t._v(" "), s("div", {
                  staticClass:"body-item-content"
                }, [
                  t._v(t._s(t.courseActivityStats.scoreAvg))
                ])
              ])
            ])
          ]), t._v(" "), s("div", {
            staticClass:"stat-item div2"
          }, [
            s("div", {
              staticClass:"stat-header"
            }, [
              s("div", {
                staticClass:"header-icon"
              }, [
                s("svg-icon", {
                  attrs:{
                    name:"stat-exam"
                  }
                })
              ], 1), t._v(" "), s("div", {
                staticClass:"header-content"
              }, [
                s("div", {
                  staticClass:"header-num"
                }, [
                  t._v(t._s(t.examActivityStats.activityCount))
                ]), t._v(" "), s("div", {
                  staticClass:"header-title"
                }, [
                  t._v(t._s(t.$t("learningAnalysis.publishedExam")))
                ])
              ])
            ]), t._v(" "), s("div", {
              staticClass:"stat-body"
            }, [
              s("div", {
                staticClass:"body-item"
              }, [
                s("div", {
                  staticClass:"body-item-title"
                }, [
                  t._v(t._s(t.$t("learningAnalysis.avgSubmissionRate")))
                ]), t._v(" "), s("div", {
                  staticClass:"body-item-content"
                }, [
                  t._v(t._s(t.examActivityStats.submittedPercentage)+" %")
                ])
              ]), t._v(" "), s("div", {
                staticClass:"body-item"
              }, [
                s("div", {
                  staticClass:"body-item-title"
                }, [
                  t._v(t._s(t.$t("overviewPage.homework.avgScore")))
                ]), t._v(" "), s("div", {
                  staticClass:"body-item-content"
                }, [
                  t._v(t._s(t.examActivityStats.scoreAvg))
                ])
              ])
            ])
          ]), t._v(" "), s("div", {
            staticClass:"stat-item div3"
          }, [
            s("div", {
              staticClass:"stat-header"
            }, [
              s("div", {
                staticClass:"header-icon"
              }, [
                s("svg-icon", {
                  attrs:{
                    name:"stat-forum"
                  }
                })
              ], 1), t._v(" "), s("div", {
                staticClass:"header-content"
              }, [
                s("div", {
                  staticClass:"header-num"
                }, [
                  t._v(t._s(t.forumStats.forumCount))
                ]), t._v(" "), s("div", {
                  staticClass:"header-title"
                }, [
                  t._v(t._s(t.$t("learningAnalysis.forum.published")))
                ])
              ])
            ]), t._v(" "), s("div", {
              staticClass:"stat-body"
            }, [
              s("div", {
                staticClass:"body-item"
              }, [
                s("div", {
                  staticClass:"body-item-title"
                }, [
                  t._v(t._s(t.$t("learningAnalysis.forum.participants")))
                ]), t._v(" "), s("div", {
                  staticClass:"body-item-content"
                }, [
                  t._v(t._s(t.forumStats.participantCount))
                ])
              ]), t._v(" "), s("div", {
                staticClass:"body-item"
              }, [
                s("div", {
                  staticClass:"body-item-title"
                }, [
                  t._v(t._s(t.forumTitle))
                ]), t._v(" "), s("div", {
                  staticClass:"body-item-content"
                }, [
                  t._v("\n          "+t._s(t.valuesCount(t.forumStats.totalPosts))+" / "+t._s(t.valuesCount(t.forumStats.topicCount))+" /\n          "+t._s(t.valuesCount(t.forumStats.replyCount))+"\n        ")
                ])
              ]), t._v(" "), s("div", {
                staticClass:"body-item"
              }, [
                s("div", {
                  staticClass:"body-item-title"
                }, [
                  t._v(t._s(t.$t("learningAnalysis.forum.teacherReplyRate")))
                ]), t._v(" "), s("div", {
                  staticClass:"body-item-content"
                }, [
                  t._v("\n          "+t._s(t.forumStats.instructorReplyRate)+"\n        ")
                ])
              ])
            ])
          ]), t._v(" "), s("div", {
            staticClass:"stat-item div4"
          }, [
            s("div", {
              staticClass:"stat-header"
            }, [
              s("div", {
                staticClass:"header-icon"
              }, [
                s("svg-icon", {
                  staticClass:"weblink-icon", attrs:{
                    name:"weblink-icon"
                  }
                })
              ], 1), t._v(" "), s("div", {
                staticClass:"header-content"
              }, [
                s("div", {
                  staticClass:"header-num"
                }, [
                  t._v(t._s(t.webLinkstats.webLinkCount))
                ]), t._v(" "), s("div", {
                  staticClass:"header-title"
                }, [
                  t._v(t._s(t.$t("learningAnalysis.weblink.published")))
                ])
              ])
            ]), t._v(" "), s("div", {
              staticClass:"stat-body"
            }, [
              s("div", {
                staticClass:"body-item"
              }, [
                s("div", {
                  staticClass:"body-item-title"
                }, [
                  t._v(t._s(t.$t("learningAnalysis.weblink.avgViewRate")))
                ]), t._v(" "), s("div", {
                  staticClass:"body-item-content"
                }, [
                  t._v(t._s(t.webLinkstats.avgViewRate))
                ])
              ]), t._v(" "), s("div", {
                staticClass:"body-item"
              }, [
                s("div", {
                  staticClass:"body-item-title"
                }, [
                  t._v(t._s(t.$t("learningAnalysis.weblink.avgViews")))
                ]), t._v(" "), s("div", {
                  staticClass:"body-item-content"
                }, [
                  t._v(t._s(t.webLinkstats.avgViews))
                ])
              ])
            ])
          ]), t._v(" "), s("div", {
            staticClass:"stat-item div5"
          }, [
            s("div", {
              staticClass:"stat-header"
            }, [
              s("div", {
                staticClass:"header-icon"
              }, [
                s("svg-icon", {
                  attrs:{
                    name:"bulletin"
                  }
                })
              ], 1), t._v(" "), s("div", {
                staticClass:"header-content"
              }, [
                s("div", {
                  staticClass:"header-num"
                }, [
                  t._v(t._s(t.bulletinsStat.bulletinCount))
                ]), t._v(" "), s("div", {
                  staticClass:"header-title"
                }, [
                  t._v(t._s(t.$t("learningAnalysis.bulletinCount")))
                ])
              ])
            ]), t._v(" "), s("div", {
              staticClass:"stat-body"
            }, [
              s("div", {
                staticClass:"body-item"
              }, [
                s("div", {
                  staticClass:"body-item-title"
                }, [
                  t._v(t._s(t.$t("learningAnalysis.bulletin.avgViewRate")))
                ]), t._v(" "), s("div", {
                  staticClass:"body-item-content"
                }, [
                  t._v(t._s(t.bulletinsStat.viewRate))
                ])
              ])
            ])
          ])
        ])
      }), [
      ], !1, null, "fb4042a0", null).exports;
      const J=(0, i.pM)({
        props:{
          courseId:{
            type:Number, required:!0
          }
        }, setup:function(t){
          var e=(0, i.KR)(new H.k$);
          (0, o.s8)(t.courseId).then((function(t){
            e.value=t
          }));
          var s=(0, i.KR)(new H.k$);
          return(0, o.Wc)(t.courseId).then((function(t){
            s.value=t
          })), {
            stats:e, videoStats:s
          }
        }
      });
      const Q=(0, u.A)(J, (function(){
        var t=this, e=t.$createElement, s=t._self._c||e;
        return s("div", {
          staticClass:"root parent"
        }, [
          s("div", {
            staticClass:"stat-item div1"
          }, [
            s("div", {
              staticClass:"stat-header"
            }, [
              s("div", {
                staticClass:"header-icon"
              }, [
                s("svg-icon", {
                  attrs:{
                    name:"material"
                  }
                })
              ], 1), t._v(" "), s("div", [
                t._v(t._s(t.$t("activityType.material")))
              ]), t._v(" "), s("div", {
                staticClass:"header-content"
              }, [
                s("div", {
                  staticClass:"header-num"
                }, [
                  t._v(t._s(t.stats.publishedUploads))
                ]), t._v(" "), s("div", {
                  staticClass:"header-title"
                }, [
                  t._v(t._s(t.$t("activityPublish.published")))
                ])
              ])
            ]), t._v(" "), s("div", {
              staticClass:"stat-body"
            }, [
              s("div", {
                staticClass:"body-item"
              }, [
                s("div", {
                  staticClass:"body-item-title"
                }, [
                  t._v(t._s(t.$t("learningAnalysis.weblink.avgViewRate")))
                ]), t._v(" "), s("div", {
                  staticClass:"body-item-content"
                }, [
                  t._v(t._s(t.stats.avgViewRate)+"%")
                ])
              ]), t._v(" "), s("div", {
                staticClass:"body-item"
              }, [
                s("div", {
                  staticClass:"body-item-title"
                }, [
                  t._v(t._s(t.$t("learningAnalysis.material.avgViews")))
                ]), t._v(" "), s("div", {
                  staticClass:"body-item-content"
                }, [
                  t._v(t._s(t.stats.avgViews))
                ])
              ]), t._v(" "), s("div", {
                staticClass:"body-item"
              }, [
                s("div", {
                  staticClass:"body-item-title"
                }, [
                  t._v(t._s(t.$t("learningAnalysis.material.avgVisits")))
                ]), t._v(" "), s("div", {
                  staticClass:"body-item-content"
                }, [
                  t._v(t._s(t.stats.avgVisits))
                ])
              ]), t._v(" "), s("div", {
                staticClass:"body-item"
              }, [
                s("div", {
                  staticClass:"body-item-title"
                }, [
                  t._v(t._s(t.$t("learningAnalysis.material.avgDuration")))
                ]), t._v(" "), s("div", {
                  staticClass:"body-item-content"
                }, [
                  t._v(t._s(t.stats.avgDuration))
                ])
              ])
            ])
          ]), t._v(" "), s("div", {
            staticClass:"stat-item div2"
          }, [
            s("div", {
              staticClass:"stat-header"
            }, [
              s("div", {
                staticClass:"header-icon"
              }, [
                s("svg-icon", {
                  attrs:{
                    name:"online-video"
                  }
                })
              ], 1), t._v(" "), s("div", [
                t._v(t._s(t.$t("activityType.online_video")))
              ]), t._v(" "), s("div", {
                staticClass:"header-content"
              }, [
                s("div", {
                  staticClass:"header-num"
                }, [
                  t._v(t._s(t.videoStats.published))
                ]), t._v(" "), s("div", {
                  staticClass:"header-title"
                }, [
                  t._v(t._s(t.$t("activityPublish.published")))
                ])
              ])
            ]), t._v(" "), s("div", {
              staticClass:"stat-body"
            }, [
              t.$featureToggles.canSubmitQuestion?s("div", {
                staticClass:"body-item"
              }, [
                s("div", {
                  staticClass:"body-item-title"
                }, [
                  t._v(t._s(t.$t("learningAnalysis.unansweredQuestions")))
                ]), t._v(" "), s("div", {
                  staticClass:"body-item-content"
                }, [
                  t._v(t._s(t.videoStats.unansweredQuestions))
                ])
              ]):t._e(), t._v(" "), s("div", {
                staticClass:"body-item"
              }, [
                s("div", {
                  staticClass:"body-item-title"
                }, [
                  t._v(t._s(t.$t("learningAnalysis.video.sumViews")))
                ]), t._v(" "), s("div", {
                  staticClass:"body-item-content"
                }, [
                  t._v(t._s(t.videoStats.sumViews))
                ])
              ]), t._v(" "), s("div", {
                staticClass:"body-item"
              }, [
                s("div", {
                  staticClass:"body-item-title"
                }, [
                  t._v(t._s(t.$t("learningAnalysis.video.avgVideo")))
                ]), t._v(" "), s("div", {
                  staticClass:"body-item-content"
                }, [
                  t._v(t._s(t.videoStats.avgVideo))
                ])
              ])
            ])
          ])
        ])
      }), [
      ], !1, null, "46c9fc1c", null).exports;
      var Z=s(944315);
      s(640173);
      const Y=(0, i.pM)({
        props:{
          item:{
            type:Object, required:!0
          }
        }, setup:function(t){
          return{
            expand:(0, i.KR)(!1), getActivityGreyIcon:function(t){
              var e=t.replace("_activity", "");
              return"classroom_exam"===e?"font-syllabus-classroom":"font-syllabus-".concat((0, h.replaceActivityTypeKey)(e))
            }
          }
        }
      });
      const X=(0, u.A)(Y, (function(){
        var t=this, e=t.$createElement, s=t._self._c||e;
        return s("div", {
          staticClass:"score-item"
        }, [
          s("div", {
            staticClass:"score-header", class:{
              expand:t.expand
            }, on:{
              click:function(e){
                t.expand=!t.expand
              }
            }
          }, [
            s("svg-icon", {
              attrs:{
                name:t.item.icon
              }
            }), t._v("\n    "+t._s(t.item.name)+"\n    "), s("span", {
              staticClass:"value"
            }, [
              t._v(t._s(t.item.setting.originValue||0)+"%")
            ]), t._v(" "), t.item.setting.children?s("i", {
              staticClass:"font font-arrow-up"
            }):t._e()
          ], 1), t._v(" "), t.item.setting.children&&t.expand?s("div", {
            staticClass:"score-item-children"
          }, t._l(t.item.setting.children, (function(e){
            return s("div", {
              key:e.scoreItemId, staticClass:"score-item-child"
            }, [
              s("div", {
                staticClass:"score-item-child-title"
              }, [
                s("i", {
                  staticClass:"font activity-icon", class:t.getActivityGreyIcon(t.item.setting.type||"")
                }), t._v("\n\n        "+t._s(e.title)+"\n      ")
              ]), t._v(" "), s("div", [
                s("span", [
                  t._v(t._s(e.value)+"%")
                ])
              ])
            ])
          })), 0):t._e()
        ])
      }), [
      ], !1, null, "23c69cc1", null).exports, tt=(0, i.pM)({
        components:{
          Card:X
        }, props:{
          courseId:{
            type:Number, required:!0
          }
        }, setup:function(t){
          var e=[
            "#FF4B4B", "#FF7B7B", "#9D7BFF", "#4B9EFF", "#4BD4FF", "#4BFFD9", "#4BFF91", "#FFB74B"
          ], s=function(t){
            return e[
              t%e.length
            ]
          }, a=(0, Z.w)({
            courseId:t.courseId, useWeblink:!1, usePerformance:!1, useVirtualExperiment:!1, useRollcall:!1
          }).categories, n=(0, i.EW)((function(){
            return a.value.filter((function(t){
              return t.setting
            }))
          }));
          (0, i.wB)(a, (function(){
            var t=K.init(document.querySelector("#score-chart")), e={
              series:[
                {
                  type:"pie", radius:[
                    "60%", "90%"
                  ], label:{
                    show:!1
                  }, labelLine:{
                    show:!1
                  }, data:a.value.map((function(t, e){
                    return{
                      value:t.setting.originValue, itemStyle:{
                        color:s(e)
                      }
                    }
                  })), emphasis:{
                    scale:!1
                  }
                }
              ], animation:!1
            };
            t.setOption(e)
          }));
          return{
            categories:a, getColor:s, filteredCategories:n, key:function(t){
              var e;
              return t.type+(null===(e=t.setting)||void 0===e?void 0:e.scoreItemId)
            }
          }
        }
      });
      const et=(0, u.A)(tt, (function(){
        var t=this, e=t.$createElement, s=t._self._c||e;
        return s("div", {
          staticClass:"root"
        }, [
          s("div", {
            staticClass:"chart"
          }, [
            s("div", {
              attrs:{
                id:"score-chart"
              }
            }), t._v(" "), s("div", {
              staticClass:"grid w-full"
            }, t._l(t.filteredCategories, (function(e, a){
              return s("div", {
                key:a
              }, [
                s("div", {
                  staticClass:"flex items-center"
                }, [
                  s("div", {
                    staticClass:"indicator", style:{
                      backgroundColor:t.getColor(a)
                    }
                  }), t._v(" "), s("div", {
                    staticClass:"text"
                  }, [
                    t._v("\n            "+t._s(e.name)+"\n          ")
                  ])
                ]), t._v(" "), s("div", {
                  staticClass:"value"
                }, [
                  t._v(t._s(e.setting.originValue||0)+"%")
                ])
              ])
            })), 0)
          ]), t._v(" "), t._l(t.filteredCategories, (function(t, e){
            return s("Card", {
              key:e, attrs:{
                item:t
              }
            })
          }))
        ], 2)
      }), [
      ], !1, null, "549df192", null).exports;
      s(210557);
      var st=s(156765), at=s(316327), nt=s(877401), it=function(t, e, s, a){
        return new(s||(s=Promise))((function(n, i){
          function o(t){
            try{
              c(a.next(t))
            }
            catch(t){
              i(t)
            }
          }
          function r(t){
            try{
              c(a.throw(t))
            }
            catch(t){
              i(t)
            }
          }
          function c(t){
            var e;
            t.done?n(t.value):(e=t.value, e instanceof s?e:new s((function(t){
              t(e)
            }))).then(o, r)
          }
          c((a=a.apply(t, e||[
          ])).next())
        }))
      }, ot=function(t, e){
        var s, a, n, i, o={
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
          next:r(0), throw:r(1), return:r(2)
        }, "function"==typeof Symbol&&(i[
          Symbol.iterator
        ]
        =function(){
          return this
        }), i;
        function r(r){
          return function(c){
            return function(r){
              if(s)throw new TypeError("Generator is already executing.");
              for(;
              i&&(i=0, r[
                0
              ]
              &&(o=0)), o;
              )try{
                if(s=1, a&&(n=2&r[
                  0
                ]
                ?a.return:r[
                  0
                ]
                ?a.throw||((n=a.return)&&n.call(a), 0):a.next)&&!(n=n.call(a, r[
                  1
                ])).done)return n;
                switch(a=0, n&&(r=[
                  2&r[
                    0
                  ], n.value
                ]), r[
                  0
                ]){
                  case 0:case 1:n=r;
                  break;
                  case 4:return o.label++, {
                    value:r[
                      1
                    ], done:!1
                  };
                  case 5:o.label++, a=r[
                    1
                  ], r=[
                    0
                  ];
                  continue;
                  case 7:r=o.ops.pop(), o.trys.pop();
                  continue;
                  default:if(!(n=o.trys, (n=n.length>0&&n[
                    n.length-1
                  ])||6!==r[
                    0
                  ]
                  &&2!==r[
                    0
                  ])){
                    o=0;
                    continue
                  }
                  if(3===r[
                    0
                  ]
                  &&(!n||r[
                    1
                  ]
                  >n[
                    0
                  ]
                  &&r[
                    1
                  ]
                  <n[
                    3
                  ])){
                    o.label=r[
                      1
                    ];
                    break
                  }
                  if(6===r[
                    0
                  ]
                  &&o.label<n[
                    1
                  ]){
                    o.label=n[
                      1
                    ], n=r;
                    break
                  }
                  if(n&&o.label<n[
                    2
                  ]){
                    o.label=n[
                      2
                    ], o.ops.push(r);
                    break
                  }
                  n[
                    2
                  ]
                  &&o.ops.pop(), o.trys.pop();
                  continue
                }
                r=e.call(t, o)
              }
              catch(t){
                r=[
                  6, t
                ], a=0
              }
              finally{
                s=n=0
              }
              if(5&r[
                0
              ])throw r[
                1
              ];
              return{
                value:r[
                  0
                ]
                ?r[
                  1
                ]
                :void 0, done:!0
              }
            }
            ([
              r, c
            ])
          }
        }
      }, rt=(0, i.KR)(), ct=function(t, e){
        return it(void 0, void 0, void 0, (function(){
          var s;
          return ot(this, (function(a){
            switch(a.label){
              case 0:return[
                4, (0, nt.getKnowledgeNodeStatisticsSummary)(t, e)
              ];
              case 1:return s=a.sent(), rt.value=s, [
                2
              ]
            }
          }))
        }))
      }, lt=s(952736), ut=s(968962), dt=s(405852), vt=s(794128), pt=s(236749);
      const ft=(0, i.pM)({
        props:{
          courseId:{
            type:Number, required:!0
          }
        }, components:{
          NodeStatisticsCard:st.A, ReferencePie:lt.A, GraphConstruction:ut.A, Ranking:pt.A
        }, setup:function(){
          var t=(0, i.EW)((function(){
            var t, e=[
            ];
            return(null===(t=rt.value)||void 0===t?void 0:t.nodes)&&(0, dt.dY)(rt.value.nodes, (function(t){
              e.push(t)
            })), $().take($().sortBy(e, (function(t){
              return t.originMasteryRate
            })).reverse(), 5)
          })), e=[
            "80~100", "60~79", "below60"
          ], s=(0, i.EW)((function(){
            var t;
            return(null===(t=rt.value)||void 0===t?void 0:t.completenessRateDistribution)?e.map((function(t){
              var e;
              return{
                value:null===(e=rt.value.completenessRateDistribution)||void 0===e?void 0:e[
                  t
                ], name:T.default.t("knowledgeGraph.statistics.".concat(t))
              }
            })):[
            ]
          })), a=(0, i.EW)((function(){
            var t;
            return(null===(t=rt.value)||void 0===t?void 0:t.completenessRateDistribution)?e.map((function(t){
              var e;
              return{
                value:null===(e=rt.value.masteryRateDistribution)||void 0===e?void 0:e[
                  t
                ], name:T.default.t("knowledgeGraph.statistics.".concat(t))
              }
            })):[
            ]
          })), n=(0, vt.$U)(), o=n.tooltipCompletionRate, r=n.tooltipMasteryRate, c=n.isNormalMode;
          return{
            tooltipCompletionRate:o, tooltipMasteryRate:r, knowledgeNodeStat:rt, completenessDistribution:s, masteryDistribution:a, isNormalMode:c, topNodes:t, COMPLETENESS_LEGEND_COLORS:at.QX, MASTERY_LEGEND_COLORS:at.DO
          }
        }
      });
      const mt=(0, u.A)(ft, (function(){
        var t=this, e=t.$createElement, s=t._self._c||e;
        return s("div", [
          t.knowledgeNodeStat?s("div", {
            staticClass:"flex w-full gap-4"
          }, [
            s("GraphConstruction", {
              attrs:{
                knowledgeNodeStat:t.knowledgeNodeStat
              }
            }), t._v(" "), s("ReferencePie", {
              attrs:{
                knowledgeNodeStat:t.knowledgeNodeStat
              }
            })
          ], 1):t._e(), t._v(" "), s("div", {
            staticClass:"chart-box"
          }, [
            s("div", {
              staticClass:"box-header"
            }, [
              t._v(t._s(t.$t("knowledgeGraph.learnInfo")))
            ]), t._v(" "), s("div", {
              staticClass:"overview-chart"
            }, [
              s("NodeStatisticsCard", {
                staticClass:"stat-item", attrs:{
                  left:100, data:t.completenessDistribution, colors:t.COMPLETENESS_LEGEND_COLORS
                }
              }, [
                s("span", [
                  t._v(t._s(t.$t("knowledgeGraph.statistics.averageCompletenessRate")))
                ]), t._v(" "), s("Tooltip", {
                  attrs:{
                    placement:"top", transfer:!0, "transfer-class-name":"knowledge-graph-tooltip"
                  }
                }, [
                  s("SvgIcon", {
                    staticClass:"help-icon", attrs:{
                      name:"help"
                    }
                  }), t._v(" "), s("template", {
                    slot:"content"
                  }, [
                    s("div", {
                      staticClass:"tooltip-content"
                    }, [
                      s("div", {
                        staticClass:"item"
                      }, [
                        s("span", {
                          staticClass:"title"
                        }, [
                          t._v(t._s(t.$t("knowledgeGraph.statistics.functionDescription")))
                        ]), t._v(" "), s("span", {
                          staticClass:"content"
                        }, [
                          t._v(t._s(t.tooltipCompletionRate))
                        ])
                      ]), t._v(" "), t.isNormalMode?s("div", {
                        staticClass:"item"
                      }, [
                        s("span", {
                          staticClass:"title"
                        }, [
                          t._v(t._s(t.$t("knowledgeGraph.statistics.calculationRules")))
                        ]), t._v(" "), s("span", {
                          staticClass:"content"
                        }, [
                          t._v(t._s(t.$t("knowledgeGraph.statistics.averageCompletenessRateTip")))
                        ])
                      ]):t._e()
                    ])
                  ])
                ], 2), t._v(" "), s("span", [
                  t._v(": "+t._s(t.knowledgeNodeStat?t.knowledgeNodeStat.averageCompletenessRate:""))
                ])
              ], 1), t._v(" "), s("NodeStatisticsCard", {
                staticClass:"stat-item", attrs:{
                  left:100, data:t.masteryDistribution, colors:t.MASTERY_LEGEND_COLORS
                }
              }, [
                s("span", [
                  t._v(t._s(t.$t("knowledgeGraph.statistics.averageMasteryRate")))
                ]), t._v(" "), s("Tooltip", {
                  attrs:{
                    placement:"top", transfer:!0, "transfer-class-name":"knowledge-graph-tooltip"
                  }
                }, [
                  s("SvgIcon", {
                    staticClass:"help-icon", attrs:{
                      name:"help"
                    }
                  }), t._v(" "), s("template", {
                    slot:"content"
                  }, [
                    s("div", {
                      staticClass:"tooltip-content"
                    }, [
                      s("div", {
                        staticClass:"item"
                      }, [
                        s("span", {
                          staticClass:"title"
                        }, [
                          t._v(t._s(t.$t("knowledgeGraph.statistics.functionDescription")))
                        ]), t._v(" "), s("span", {
                          staticClass:"content"
                        }, [
                          t._v(t._s(t.tooltipMasteryRate))
                        ])
                      ]), t._v(" "), t.isNormalMode?s("div", {
                        staticClass:"item"
                      }, [
                        s("span", {
                          staticClass:"title"
                        }, [
                          t._v(t._s(t.$t("knowledgeGraph.statistics.calculationRules")))
                        ]), t._v(" "), s("span", {
                          staticClass:"content"
                        }, [
                          t._v(t._s(t.$t("knowledgeGraph.statistics.averageMasteryRateTip")))
                        ])
                      ]):t._e()
                    ])
                  ])
                ], 2), t._v(" "), s("span", [
                  t._v(": "+t._s(t.knowledgeNodeStat?t.knowledgeNodeStat.averageMasteryRate:""))
                ])
              ], 1), t._v(" "), s("div", {
                staticClass:"w-full"
              }, [
                s("div", {
                  staticClass:"title"
                }, [
                  t._v(t._s(t.$t("knowledgeGraph.top5MasteryRateNode")))
                ]), t._v(" "), s("Ranking", {
                  attrs:{
                    items:t.topNodes
                  }, scopedSlots:t._u([
                    {
                      key:"header", fn:function(){
                        return[
                          t._v("\n            "+t._s(t.$t("knowledgeGraph.node"))+"\n          ")
                        ]
                      }, proxy:!0
                    }, {
                      key:"item", fn:function(e){
                        var a=e.item;
                        return[
                          s("td", [
                            s("TooltipExt", {
                              attrs:{
                                text:a.name
                              }
                            })
                          ], 1), t._v(" "), s("td", [
                            t._v(t._s(a.averageMasteryRate))
                          ]), t._v(" "), s("td", [
                            t._v(t._s(a.averageCompletenessRate))
                          ])
                        ]
                      }
                    }
                  ])
                })
              ], 1)
            ], 1)
          ])
        ])
      }), [
      ], !1, null, "63ae0df2", null).exports, _t=(0, i.pM)({
        components:{
          Visit:O, Overview:V, Activity:z, Material:Q, ScoreSettings:et, KnowledgeGraph:mt
        }, props:{
          userId:Number, course:{
            type:Object, required:!0
          }
        }, setup:function(t){
          return ct(t.course.id, !t.userId), {
          }
        }
      });
      const ht=(0, u.A)(_t, (function(){
        var t=this, e=t.$createElement, s=t._self._c||e;
        return s("div", [
          s("div", {
            staticClass:"title"
          }, [
            s("div", {
              staticClass:"icon"
            }, [
              s("svg-icon", {
                attrs:{
                  name:"stat-item"
                }
              }), t._v(" "), s("div", {
                staticClass:"background-container"
              })
            ], 1), t._v("\n    "+t._s(t.$t("courseStat.visit"))+"\n  ")
          ]), t._v(" "), s("Visit", {
            attrs:{
              "course-id":t.course.id, "start-date":t.course.startDate
            }
          }), t._v(" "), s("div", {
            staticClass:"title"
          }, [
            s("div", {
              staticClass:"icon"
            }, [
              s("svg-icon", {
                attrs:{
                  name:"stat-item"
                }
              }), t._v(" "), s("div", {
                staticClass:"background-container"
              })
            ], 1), t._v("\n    "+t._s(t.$t("courseStat.activityOverview"))+"\n  ")
          ]), t._v(" "), s("Overview"), t._v(" "), s("div", {
            staticClass:"title"
          }, [
            s("div", {
              staticClass:"icon"
            }, [
              s("svg-icon", {
                attrs:{
                  name:"stat-item"
                }
              }), t._v(" "), s("div", {
                staticClass:"background-container"
              })
            ], 1), t._v("\n    "+t._s(t.$t("courseStat.activityDetail"))+"\n  ")
          ]), t._v(" "), s("Activity", {
            attrs:{
              "course-id":t.course.id
            }
          }), t._v(" "), s("div", {
            staticClass:"title"
          }, [
            s("div", {
              staticClass:"icon"
            }, [
              s("svg-icon", {
                attrs:{
                  name:"stat-item"
                }
              }), t._v(" "), s("div", {
                staticClass:"background-container"
              })
            ], 1), t._v("\n    "+t._s(t.$t("courseStat.material"))+"\n  ")
          ]), t._v(" "), s("Material", {
            attrs:{
              "course-id":t.course.id
            }
          }), t._v(" "), t.$featureToggles.knowledgeGraph?s("div", {
            staticClass:"title"
          }, [
            s("div", {
              staticClass:"icon"
            }, [
              s("svg-icon", {
                attrs:{
                  name:"stat-item"
                }
              }), t._v(" "), s("div", {
                staticClass:"background-container"
              })
            ], 1), t._v("\n    "+t._s(t.$t("knowledgeGraph.title"))+"\n  ")
          ]):t._e(), t._v(" "), t.$featureToggles.knowledgeGraph?s("KnowledgeGraph", {
            attrs:{
              "course-id":t.course.id
            }
          }):t._e(), t._v(" "), s("div", {
            staticClass:"title"
          }, [
            s("div", {
              staticClass:"icon"
            }, [
              s("svg-icon", {
                attrs:{
                  name:"stat-item"
                }
              }), t._v(" "), s("div", {
                staticClass:"background-container"
              })
            ], 1), t._v("\n    "+t._s(t.$t("courseStat.assessment"))+"\n  ")
          ]), t._v(" "), s("ScoreSettings", {
            attrs:{
              "course-id":t.course.id
            }
          })
        ], 1)
      }), [
      ], !1, null, "3c499e26", null).exports;
      var gt=s(766800), yt=s(8870), Ct=s(786673), bt=s(561823);
      function wt(t){
        var e=q(), s=e.load, a=e.statInfo, n=(0, i.KR)(new gt.a8), o=(0, i.KR)(new H.R5), r=(0, i.KR)([
        ]), c=(0, i.KR)([
        ]), l=(0, i.KR)(), u=(0, i.EW)((function(){
          if(!r.value)return 0;
          var t=0;
          return r.value.forEach((function(e){
            t+=e.problems.length
          })), t
        }));
        return{
          statInfo:a, knowledgeNodeStatisticsData:n, airConversationStats:o, problemCount:u, courseExtensionApps:c, competencyObjectiveStat:l, fetchCourseStats:function(){
            var e=!t.userId;
            s(t.courseId, e);
            var a=[
              (0, yt.$5)(t.courseId, {
              }, e).then((function(t){
                return o.value=t
              }))
            ];
            window.featureToggles.applicationCenter&&a.push((0, nt.getCourseExtensionApps)(t.courseId, e).then((function(t){
              return c.value=t
            }))), window.featureToggles.knowledgeGraph&&(a.push((0, bt.vb)(t.courseId, e).then((function(t){
              return l.value=t
            }))), "published"===t.knowledgeGraphPublishType&&a.push((0, nt.getKnowledgeNodeStatisticsSummary)(t.courseId, e).then((function(t){
              return n.value=t
            }))), "published"===t.problemGraphPublishType&&a.push((0, Ct.eT)(t.courseId, e).then((function(t){
              return r.value=t
            })))), Promise.all(a).catch(console.error)
          }, problemLevels:r
        }
      }
      const St=(0, i.pM)({
        props:{
          courseId:{
            type:Number, required:!0
          }, userId:{
            type:Number, required:!0
          }, knowledgeGraphPublishType:{
            type:String, default:""
          }, problemGraphPublishType:{
            type:String, default:""
          }, courseInfo:{
            type:Object, required:!0
          }
        }, setup:function(t){
          var e=wt(t), s=e.statInfo, a=e.knowledgeNodeStatisticsData, n=e.airConversationStats, o=e.problemCount, r=e.courseExtensionApps, c=e.competencyObjectiveStat, l=e.fetchCourseStats, u=(0, i.EW)((function(){
            var t=2;
            return window.featureToggles.knowledgeGraph&&(t+=3), window.featureToggles.applicationCenter&&(t+=1), "calc((100% - 96px) / ".concat(t, ")")
          }));
          return(0, i.sV)((function(){
            l()
          })), {
            statInfo:s, knowledgeNodeStatisticsData:a, airConversationStats:n, problemCount:o, courseExtensionApps:r, competencyObjectiveStat:c, itemWidth:u
          }
        }
      });
      const xt=(0, u.A)(St, (function(){
        var t=this, e=t.$createElement, s=t._self._c||e;
        return s("div", {
          staticClass:"root"
        }, [
          t.$featureToggles.knowledgeGraph?s("div", {
            staticClass:"stat-item", style:{
              width:t.itemWidth
            }
          }, [
            s("div", {
              staticClass:"item-title"
            }, [
              t._v(t._s(t.$t("problemGraph.graph")))
            ]), t._v(" "), s("div", {
              staticClass:"item-content"
            }, [
              s("span", {
                staticClass:"number"
              }, [
                t._v(t._s(t.problemCount))
              ]), t._v(" "), s("span", [
                t._v(t._s(t.$t("management.statistic.questionUnit")))
              ])
            ]), t._v(" "), s("div", {
              staticClass:"icon"
            }, [
              s("svg-icon", {
                staticClass:"svg-icon", attrs:{
                  name:"statistic-problem-graph"
                }
              })
            ], 1)
          ]):t._e(), t._v(" "), t.$featureToggles.knowledgeGraph?s("div", {
            staticClass:"stat-item", style:{
              width:t.itemWidth
            }
          }, [
            s("div", {
              staticClass:"item-title"
            }, [
              t._v(t._s(t.$t("knowledgeGraph.node")))
            ]), t._v(" "), s("div", {
              staticClass:"item-content"
            }, [
              s("span", {
                staticClass:"number"
              }, [
                t._v(t._s(t.knowledgeNodeStatisticsData.nodeCount||0))
              ]), t._v(" "), s("span", [
                t._v(t._s(t.$t("vtrs.resource.count")))
              ])
            ]), t._v(" "), s("div", {
              staticClass:"icon"
            }, [
              s("svg-icon", {
                staticClass:"svg-icon", attrs:{
                  name:"knowledge-point"
                }
              })
            ], 1)
          ]):t._e(), t._v(" "), s("div", {
            staticClass:"stat-item", style:{
              width:t.itemWidth
            }
          }, [
            s("div", {
              staticClass:"item-title"
            }, [
              t._v(t._s(t.$t("air.courseResources")))
            ]), t._v(" "), s("div", {
              staticClass:"item-content"
            }, [
              s("span", {
                staticClass:"number"
              }, [
                t._v(t._s(t.statInfo.publishedActivityCount||0))
              ]), t._v(" "), s("span", [
                t._v(t._s(t.$t("vtrs.resource.count")))
              ])
            ]), t._v(" "), s("div", {
              staticClass:"icon"
            }, [
              s("svg-icon", {
                staticClass:"svg-icon", attrs:{
                  name:"teaching-resource"
                }
              })
            ], 1)
          ]), t._v(" "), t.$featureToggles.knowledgeGraph?s("div", {
            staticClass:"stat-item", style:{
              width:t.itemWidth
            }
          }, [
            s("div", {
              staticClass:"item-title"
            }, [
              t._v(t._s(t.$t("air.competencyObjectives")))
            ]), t._v(" "), s("div", {
              staticClass:"item-content"
            }, [
              s("span", {
                staticClass:"number"
              }, [
                t._v("\n        "+t._s(t.competencyObjectiveStat&&t.competencyObjectiveStat.competency_objective_count?t.competencyObjectiveStat.competency_objective_count:0)+"\n      ")
              ]), t._v(" "), s("span", [
                t._v(t._s(t.$t("vtrs.resource.count")))
              ])
            ]), t._v(" "), s("div", {
              staticClass:"icon"
            }, [
              s("svg-icon", {
                staticClass:"svg-icon", attrs:{
                  name:"bility-goal"
                }
              })
            ], 1)
          ]):t._e(), t._v(" "), s("div", {
            staticClass:"stat-item", style:{
              width:t.itemWidth
            }
          }, [
            s("div", {
              staticClass:"item-title"
            }, [
              t._v(t._s(t.$t("air.aiInteractiveUse")))
            ]), t._v(" "), s("div", {
              staticClass:"item-content"
            }, [
              s("span", {
                staticClass:"number"
              }, [
                t._v(t._s(t.airConversationStats.totalQuestions||0))
              ]), t._v(" "), s("span", [
                t._v(t._s(t.$t("learningAnalysis.times")))
              ])
            ]), t._v(" "), s("div", {
              staticClass:"icon"
            }, [
              s("svg-icon", {
                staticClass:"svg-icon", attrs:{
                  name:"ai-interactive"
                }
              })
            ], 1)
          ]), t._v(" "), t.courseInfo.allowExtensionApp?s("div", {
            staticClass:"stat-item", style:{
              width:t.itemWidth
            }
          }, [
            s("div", {
              staticClass:"item-title"
            }, [
              t._v(t._s(t.$t("air.agent")))
            ]), t._v(" "), s("div", {
              staticClass:"item-content"
            }, [
              s("span", {
                staticClass:"number"
              }, [
                t._v(t._s(t.courseExtensionApps.length||0))
              ]), t._v(" "), s("span", [
                t._v(t._s(t.$t("vtrs.resource.count")))
              ])
            ]), t._v(" "), s("div", {
              staticClass:"icon"
            }, [
              s("svg-icon", {
                staticClass:"svg-icon", attrs:{
                  name:"agent"
                }
              })
            ], 1)
          ]):t._e()
        ])
      }), [
      ], !1, null, "03bed0e5", null).exports;
      var kt=function(t, e, s, a){
        return new(s||(s=Promise))((function(n, i){
          function o(t){
            try{
              c(a.next(t))
            }
            catch(t){
              i(t)
            }
          }
          function r(t){
            try{
              c(a.throw(t))
            }
            catch(t){
              i(t)
            }
          }
          function c(t){
            var e;
            t.done?n(t.value):(e=t.value, e instanceof s?e:new s((function(t){
              t(e)
            }))).then(o, r)
          }
          c((a=a.apply(t, e||[
          ])).next())
        }))
      }, It=function(t, e){
        var s, a, n, i, o={
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
          next:r(0), throw:r(1), return:r(2)
        }, "function"==typeof Symbol&&(i[
          Symbol.iterator
        ]
        =function(){
          return this
        }), i;
        function r(r){
          return function(c){
            return function(r){
              if(s)throw new TypeError("Generator is already executing.");
              for(;
              i&&(i=0, r[
                0
              ]
              &&(o=0)), o;
              )try{
                if(s=1, a&&(n=2&r[
                  0
                ]
                ?a.return:r[
                  0
                ]
                ?a.throw||((n=a.return)&&n.call(a), 0):a.next)&&!(n=n.call(a, r[
                  1
                ])).done)return n;
                switch(a=0, n&&(r=[
                  2&r[
                    0
                  ], n.value
                ]), r[
                  0
                ]){
                  case 0:case 1:n=r;
                  break;
                  case 4:return o.label++, {
                    value:r[
                      1
                    ], done:!1
                  };
                  case 5:o.label++, a=r[
                    1
                  ], r=[
                    0
                  ];
                  continue;
                  case 7:r=o.ops.pop(), o.trys.pop();
                  continue;
                  default:if(!(n=o.trys, (n=n.length>0&&n[
                    n.length-1
                  ])||6!==r[
                    0
                  ]
                  &&2!==r[
                    0
                  ])){
                    o=0;
                    continue
                  }
                  if(3===r[
                    0
                  ]
                  &&(!n||r[
                    1
                  ]
                  >n[
                    0
                  ]
                  &&r[
                    1
                  ]
                  <n[
                    3
                  ])){
                    o.label=r[
                      1
                    ];
                    break
                  }
                  if(6===r[
                    0
                  ]
                  &&o.label<n[
                    1
                  ]){
                    o.label=n[
                      1
                    ], n=r;
                    break
                  }
                  if(n&&o.label<n[
                    2
                  ]){
                    o.label=n[
                      2
                    ], o.ops.push(r);
                    break
                  }
                  n[
                    2
                  ]
                  &&o.ops.pop(), o.trys.pop();
                  continue
                }
                r=e.call(t, o)
              }
              catch(t){
                r=[
                  6, t
                ], a=0
              }
              finally{
                s=n=0
              }
              if(5&r[
                0
              ])throw r[
                1
              ];
              return{
                value:r[
                  0
                ]
                ?r[
                  1
                ]
                :void 0, done:!0
              }
            }
            ([
              r, c
            ])
          }
        }
      }, Tt=(0, i.KR)([
      ]), Et=(0, i.KR)(0), $t=(0, i.EW)((function(){
        var t=0;
        return Et.value=0, Tt.value.forEach((function(e){
          t+=e.score, e.score&&(Et.value+=1)
        })), 0===Et.value?0:Math.round(10*t/Et.value)/10
      })), At=(0, i.EW)((function(){
        return 2*$t.value
      })), Rt=function(t, e){
        return{
          load:function(){
            return kt(void 0, void 0, void 0, (function(){
              var s;
              return It(this, (function(a){
                switch(a.label){
                  case 0:return s=Tt, [
                    4, (0, m.d2)(t, !e)
                  ];
                  case 1:return s.value=a.sent(), [
                    2
                  ]
                }
              }))
            }))
          }, averageStar:$t, averageScore:At, courseEstimates:Tt, totalScoreNum:Et
        }
      };
      const Dt=(0, i.pM)({
        props:{
          courseId:Number, userId:Number
        }, setup:function(t){
          var e=Rt(t.courseId, t.userId);
          return{
            averageStar:e.averageStar, averageScore:e.averageScore, getStarCssClass:h.getStarCssClass
          }
        }
      });
      const Nt=(0, u.A)(Dt, (function(){
        var t=this, e=t.$createElement, s=t._self._c||e;
        return s("div", {
          staticClass:"rating"
        }, [
          s("div", {
            staticClass:"star"
          }, [
            s("i", {
              class:t.getStarCssClass(t.averageStar, 1)
            }), t._v(" "), s("i", {
              class:t.getStarCssClass(t.averageStar, 2)
            }), t._v(" "), s("i", {
              class:t.getStarCssClass(t.averageStar, 3)
            }), t._v(" "), s("i", {
              class:t.getStarCssClass(t.averageStar, 4)
            }), t._v(" "), s("i", {
              class:t.getStarCssClass(t.averageStar, 5)
            })
          ]), t._v(" "), s("span", {
            staticClass:"number"
          }, [
            t._v(t._s(t.averageScore.toFixed(1)))
          ]), t._v(" "), s("span", {
            staticClass:"unit"
          }, [
            t._v(t._s(t.$t("courseScore.finalScoreChangeLog.points")))
          ])
        ])
      }), [
      ], !1, null, "6acfefc4", null).exports;
      var Pt=s(679578);
      const jt=s.p+"assets/js/vue/views/course/info/7e7674826d5e1c149785.lottie";
      var Mt=s(731904), Gt=s(34206), Ot=function(t, e, s, a){
        return new(s||(s=Promise))((function(n, i){
          function o(t){
            try{
              c(a.next(t))
            }
            catch(t){
              i(t)
            }
          }
          function r(t){
            try{
              c(a.throw(t))
            }
            catch(t){
              i(t)
            }
          }
          function c(t){
            var e;
            t.done?n(t.value):(e=t.value, e instanceof s?e:new s((function(t){
              t(e)
            }))).then(o, r)
          }
          c((a=a.apply(t, e||[
          ])).next())
        }))
      }, Kt=function(t, e){
        var s, a, n, i, o={
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
          next:r(0), throw:r(1), return:r(2)
        }, "function"==typeof Symbol&&(i[
          Symbol.iterator
        ]
        =function(){
          return this
        }), i;
        function r(r){
          return function(c){
            return function(r){
              if(s)throw new TypeError("Generator is already executing.");
              for(;
              i&&(i=0, r[
                0
              ]
              &&(o=0)), o;
              )try{
                if(s=1, a&&(n=2&r[
                  0
                ]
                ?a.return:r[
                  0
                ]
                ?a.throw||((n=a.return)&&n.call(a), 0):a.next)&&!(n=n.call(a, r[
                  1
                ])).done)return n;
                switch(a=0, n&&(r=[
                  2&r[
                    0
                  ], n.value
                ]), r[
                  0
                ]){
                  case 0:case 1:n=r;
                  break;
                  case 4:return o.label++, {
                    value:r[
                      1
                    ], done:!1
                  };
                  case 5:o.label++, a=r[
                    1
                  ], r=[
                    0
                  ];
                  continue;
                  case 7:r=o.ops.pop(), o.trys.pop();
                  continue;
                  default:if(!(n=o.trys, (n=n.length>0&&n[
                    n.length-1
                  ])||6!==r[
                    0
                  ]
                  &&2!==r[
                    0
                  ])){
                    o=0;
                    continue
                  }
                  if(3===r[
                    0
                  ]
                  &&(!n||r[
                    1
                  ]
                  >n[
                    0
                  ]
                  &&r[
                    1
                  ]
                  <n[
                    3
                  ])){
                    o.label=r[
                      1
                    ];
                    break
                  }
                  if(6===r[
                    0
                  ]
                  &&o.label<n[
                    1
                  ]){
                    o.label=n[
                      1
                    ], n=r;
                    break
                  }
                  if(n&&o.label<n[
                    2
                  ]){
                    o.label=n[
                      2
                    ], o.ops.push(r);
                    break
                  }
                  n[
                    2
                  ]
                  &&o.ops.pop(), o.trys.pop();
                  continue
                }
                r=e.call(t, o)
              }
              catch(t){
                r=[
                  6, t
                ], a=0
              }
              finally{
                s=n=0
              }
              if(5&r[
                0
              ])throw r[
                1
              ];
              return{
                value:r[
                  0
                ]
                ?r[
                  1
                ]
                :void 0, done:!0
              }
            }
            ([
              r, c
            ])
          }
        }
      };
      const Wt=(0, i.pM)({
        name:"apply-modal", i18n:T.default, props:{
          value:{
            type:Boolean, default:!1
          }, courseId:{
            type:Number, default:0
          }
        }, components:{
        }, setup:function(t, e){
          var s=this, a=(0, W.hRP)(t, "value", e.emit, {
            eventName:"input"
          }), n=(0, i.KR)(), o=(0, i.KR)(!1), r=(0, i.Kh)({
            contact:"", reason:""
          }), c=(0, i.KR)(), l=(0, i.KR)({
            contact:"", reason:""
          }), u=(0, i.EW)((function(){
            return!r.contact||!r.reason
          })), d={
            contact:[
              {
                required:!0, validator:function(t, e, s){
                  /^1[
                    2-9
                  ]
                  \d{
                    9
                  }
                  $/.test(e)||/^[
                    ^\s@
                  ]
                  +@[
                    ^\s@
                  ]
                  +\.[
                    ^\s@
                  ]
                  +$/.test(e)?s():s(new Error(T.default.t("courseAudit.contactTip")))
                }, trigger:"blur"
              }
            ], reason:[
              {
                required:!0, message:T.default.t("airGrading.requiredField"), trigger:[
                  "blur"
                ]
              }
            ]
          };
          return{
            show:a, formRef:n, formData:r, errors:l, submitting:o, submit:function(){
              return Ot(s, void 0, void 0, (function(){
                var e=this;
                return Kt(this, (function(s){
                  return c.value.validate().then((function(s){
                    return Ot(e, void 0, void 0, (function(){
                      return Kt(this, (function(e){
                        switch(e.label){
                          case 0:return s?[
                            4, (0, Gt.d7)(t.courseId, r)
                          ]
                          :[
                            2
                          ];
                          case 1:return e.sent(), window.location.reload(), [
                            2
                          ]
                        }
                      }))
                    }))
                  })), [
                    2
                  ]
                }))
              }))
            }, close:function(){
              a.value=!1
            }, disabled:u, rules:d, applyForm:c
          }
        }
      });
      const Bt=(0, u.A)(Wt, (function(){
        var t=this, e=t.$createElement, s=t._self._c||e;
        return s("Modal", {
          ref:"formRef", attrs:{
            width:"540", closable:!1, "class-name":"apply-modal", "footer-hide":""
          }, on:{
            "on-cancel":t.close
          }, model:{
            value:t.show, callback:function(e){
              t.show=e
            }, expression:"show"
          }
        }, [
          s("div", {
            staticClass:"modal-body"
          }, [
            s("div", {
              staticClass:"modal-header"
            }, [
              s("div", {
                staticClass:"modal-title", domProps:{
                  innerHTML:t._s(t.$t("courseAudit.applyHtml"))
                }
              }), t._v(" "), s("div", {
                staticClass:"form-data-tip"
              }, [
                t._v("\n        "+t._s(t.$t("courseAudit.applyTip"))+"\n      ")
              ])
            ]), t._v(" "), s("Form", {
              ref:"applyForm", attrs:{
                model:t.formData, "label-position":"right", "label-width":100, rules:t.rules
              }
            }, [
              s("FormItem", {
                attrs:{
                  label:t.$t("courseAudit.contact"), prop:"contact", error:t.errors.contact
                }
              }, [
                s("Input", {
                  staticStyle:{
                    width:"335px"
                  }, attrs:{
                    placeholder:t.$t("courseAudit.contactTip")
                  }, model:{
                    value:t.formData.contact, callback:function(e){
                      t.$set(t.formData, "contact", e)
                    }, expression:"formData.contact"
                  }
                })
              ], 1), t._v(" "), s("FormItem", {
                attrs:{
                  label:t.$t("courseAudit.reason"), error:t.errors.reason, prop:"reason"
                }
              }, [
                s("Input", {
                  staticStyle:{
                    width:"335px"
                  }, attrs:{
                    type:"textarea", placeholder:t.$t("courseAudit.enter"), maxlength:"100", "show-word-limit":"", rows:6
                  }, model:{
                    value:t.formData.reason, callback:function(e){
                      t.$set(t.formData, "reason", e)
                    }, expression:"formData.reason"
                  }
                })
              ], 1)
            ], 1)
          ], 1), t._v(" "), s("div", {
            staticClass:"modal-footer"
          }, [
            s("Button", {
              staticClass:"btn-default btn-primary", class:{
                "btn-disabled":t.disabled
              }, attrs:{
                loading:t.submitting, disabled:t.disabled
              }, on:{
                click:t.submit
              }
            }, [
              t._v("\n      "+t._s(t.$t("confirm"))+"\n    ")
            ]), t._v(" "), s("Button", {
              staticClass:"btn-default btn-minor", on:{
                click:t.close
              }
            }, [
              t._v(t._s(t.$t("cancel")))
            ])
          ], 1)
        ])
      }), [
      ], !1, null, "09de7990", null).exports, Lt=(0, i.pM)({
        props:{
          userId:Number, course:{
            type:Object, required:!0
          }, state:{
            type:Object, required:!0
          }
        }, components:{
          ApplyModal:Bt, Confirm:Pt.A
        }, setup:function(t){
          var e=(0, i.KR)(!1), s=(0, i.KR)(!1), a=(0, i.KR)(), o=(0, i.EW)((function(){
            var e;
            return!!("middle_db"===t.course.importedFrom&&(null===(e=null===window||void 0===window?void 0:window.orgSettings)||void 0===e?void 0:e.disableManageEnrollmentInImportCourse)&&t.state&&"join"===t.state.action||t.state&&"disabled"===t.state.action)
          })), r=(0, i.EW)((function(){
            return t.state&&"waiting"===t.state.action
          })), c=function(){
            a.value.value=!1
          };
          return(0, i.sV)((function(){
            new n.j({
              autoplay:!0, loop:!0, speed:1, canvas:document.querySelector("#dotlottie-canvas"), src:jt, layout:{
                fit:"fit-width", align:[
                  0, 0
                ]
              }
            }).addEventListener("play", (function(){
              e.value=!0
            }))
          })), {
            enterCourse:function(){
              return!!t.state&&(![
                "finished", "waiting"
              ].includes(t.state.action)&&(!o.value&&("enter"===t.state.action?(window.location.href=t.course.url?t.course.url:"/course/".concat(t.course.id, "/content"), !0):"join"===t.state.action?t.userId?(0, m.U1)(t.course.id).then((function(t){
                Mt.Toast.success(t.message), window.location.reload()
              })).catch((function(t){
                Mt.Toast.warning(t.response.data.message)
              })):(window.location.href="/login?next=/course/".concat(t.course.id), !0):("apply"===t.state.action&&(s.value=!0), "rejected"===t.state.action&&(a.value.value=!0), !0))))
            }, playing:e, disableJoinCourse:o, showApplyModal:s, waiting:r, closeReApplyModal:c, openApplyModal:function(){
              c(), s.value=!0
            }, reApplyConfirm:a
          }
        }
      });
      const qt=(0, u.A)(Lt, (function(){
        var t=this, e=t.$createElement, s=t._self._c||e;
        return t.disableJoinCourse?t._e():s("button", {
          staticClass:"join-button", class:{
            playing:t.playing, waiting:t.waiting
          }, attrs:{
            disabled:t.course.isBlocked
          }, on:{
            click:t.enterCourse
          }
        }, [
          t.state?s("span", [
            t._v(t._s(t.state.state))
          ]):t._e(), t._v(" "), s("canvas", {
            attrs:{
              id:"dotlottie-canvas", width:"auto", height:"200px"
            }
          }), t._v(" "), s("apply-modal", {
            attrs:{
              "course-id":t.course.id
            }, model:{
              value:t.showApplyModal, callback:function(e){
                t.showApplyModal=e
              }, expression:"showApplyModal"
            }
          }), t._v(" "), s("Confirm", {
            ref:"reApplyConfirm", attrs:{
              type:"warning", title:t.$t("courseAudit.rejected"), "vertical-center":!0, "confirm-text":t.$t("courseAudit.reapply"), width:416, "class-name":"reapply-modal"
            }, on:{
              "on-cancel":t.closeReApplyModal, "on-ok":t.openApplyModal
            }
          }, [
            t.state?s("div", {
              staticClass:"confirm-text"
            }, [
              t._v(t._s(t.state.comment))
            ]):t._e()
          ])
        ], 1)
      }), [
      ], !1, null, "d053259e", null).exports;
      const Ft=(0, i.pM)({
        props:{
          course:{
            type:Object, required:!0
          }
        }, setup:function(t){
          return{
            roles:(0, i.EW)((function(){
              return t.course.openedRoles.map((function(t){
                return T.default.t(t.name)
              })).join(",")
            }))
          }
        }
      });
      const Vt=(0, u.A)(Ft, (function(){
        var t=this, e=t.$createElement, s=t._self._c||e;
        return s("div", {
          staticClass:"root"
        }, [
          t.course.selectedCertification.id?s("div", {
            staticClass:"part"
          }, [
            s("div", {
              staticClass:"title"
            }, [
              s("div", {
                staticClass:"icon"
              }, [
                s("svg-icon", {
                  attrs:{
                    name:"course-shadow"
                  }
                }), t._v(" "), s("div", {
                  staticClass:"background-container"
                })
              ], 1), t._v("\n      "+t._s(t.$t("certifiedCourse"))+"\n    ")
            ]), t._v(" "), s("div", {
              staticClass:"details"
            }, [
              s("div", [
                s("span", [
                  t._v(t._s(t.$t("certType"))+":")
                ]), t._v("\n\n        "+t._s(t.course.selectedCertification.certificationTitle)+"\n      ")
              ]), t._v(" "), s("div", [
                s("span", [
                  t._v(t._s(t.$t("planName"))+":")
                ]), t._v("\n        "+t._s(t.course.selectedCertification.projectName||"-")+"\n      ")
              ]), t._v(" "), s("div", [
                s("span", [
                  t._v(t._s(t.$t("passThreshold"))+":")
                ]), t._v("\n        "+t._s(t.course.selectedCertification.studyThreshold)+" "+t._s(t.$t("homework.point"))+"\n      ")
              ])
            ])
          ]):t._e(), t._v(" "), s("div", {
            staticClass:"part"
          }, [
            s("div", {
              staticClass:"title"
            }, [
              s("div", {
                staticClass:"icon"
              }, [
                s("svg-icon", {
                  attrs:{
                    name:"course-shadow"
                  }
                }), t._v(" "), s("div", {
                  staticClass:"background-container"
                })
              ], 1), t._v("\n      "+t._s(t.$t("openLimit"))+"\n    ")
            ]), t._v(" "), s("div", {
              staticClass:"details"
            }, [
              s("div", [
                s("span", [
                  t._v(t._s(t.$t("openedRole"))+":")
                ]), t._v("\n\n        "+t._s(t.roles||t.$t("subjectEdit.unlimit"))+"\n      ")
              ]), t._v(" "), s("div", [
                s("span", [
                  t._v(t._s(t.$t("openedDepartment"))+":")
                ]), t._v("\n        "+t._s(t.course.openedDepartments.map((function(t){
                  return t.name
                })).join(", ")||t.$t("subjectEdit.unlimit"))+"\n      ")
              ])
            ])
          ])
        ])
      }), [
      ], !1, null, "d4ab3d48", null).exports;
      s(335231), s(43148);
      var Ht=s(699377), Ut=s(248505), zt=s(33400);
      const Jt=(0, i.pM)({
        name:"enrollment-item", components:{
          Avatar:zt.A
        }, props:{
          enrollment:{
            type:Object, required:!0
          }
        }, setup:function(t){
          return{
            title:(0, i.EW)((function(){
              return Ut.bf[
                t.enrollment.user.userPersonas.data.title
              ]
            })), role:(0, i.EW)((function(){
              return Ut.lE[
                t.enrollment.roles[
                  0
                ]
              ]
            }))
          }
        }
      });
      const Qt=(0, u.A)(Jt, (function(){
        var t=this, e=t.$createElement, s=t._self._c||e;
        return s("div", {
          staticClass:"root"
        }, [
          s("div", {
            staticClass:"w-full"
          }, [
            s("div", {
              staticClass:"body"
            }, [
              s("div", {
                staticClass:"cover"
              }, [
                s("Avatar", {
                  attrs:{
                    user:t.enrollment.user
                  }
                })
              ], 1), t._v(" "), s("div", {
                staticClass:"content w-full"
              }, [
                s("div", {
                  staticClass:"content-header"
                }, [
                  s("div", {
                    staticClass:"title"
                  }, [
                    t._v(t._s(t.enrollment.user.name))
                  ]), t._v(" "), t.title?s("div", {
                    staticClass:"subtitle"
                  }, [
                    t._v(t._s(t.title))
                  ]):t._e(), t._v(" "), t._t("default")
                ], 2), t._v(" "), s("div", {
                  staticClass:"tags"
                }, [
                  t.enrollment.user.userPersonas.data.direction?s("div", {
                    staticClass:"direction"
                  }, [
                    s("TooltipExt", {
                      attrs:{
                        text:t.enrollment.user.userPersonas.data.direction
                      }
                    }, [
                      t._v("\n              "+t._s(t.enrollment.user.userPersonas.data.direction)+"\n            ")
                    ])
                  ], 1):t._e(), t._v(" "), s("div", [
                    t._v(t._s(t.enrollment.user.department.name))
                  ])
                ])
              ])
            ]), t._v(" "), s("div", {
              staticClass:"desc"
            }, [
              t._v("\n      "+t._s(t.enrollment.user.userPersonas.data.desc||t.$t("teachingTeam.noTeacherDesc"))+"\n    ")
            ])
          ])
        ])
      }), [
      ], !1, null, "95ae73e4", null).exports, Zt=(0, i.pM)({
        components:{
          Teacher:Qt
        }, props:{
          courseId:Number, userId:Number, leader:Number
        }, setup:function(t){
          var e=(0, i.KR)([
          ]), s=function(e){
            return window.featureToggles.enableLecturerCourseRole?e.roles.includes("instructor"):t.leader===e.user.id
          };
          return(0, Ht.cE)(t.courseId, {
          }, !t.userId).then((function(t){
            t.sort((function(t, e){
              return s(t)?-1:s(e)?1:0
            })), e.value=t
          })), {
            enrollments:e, isCourseLeader:s
          }
        }
      });
      const Yt=(0, u.A)(Zt, (function(){
        var t=this, e=t.$createElement, s=t._self._c||e;
        return s("div", {
          staticClass:"root"
        }, [
          s("div", {
            staticClass:"list"
          }, t._l(t.enrollments, (function(e, a){
            return s("Teacher", {
              key:a, attrs:{
                enrollment:e
              }
            }, [
              t.isCourseLeader(e)?s("div", {
                staticClass:"tag"
              }, [
                t._v(t._s(t.$t("teachingTeam.courseLeader")))
              ]):t._e()
            ])
          })), 1)
        ])
      }), [
      ], !1, null, "243da5a0", null).exports;
      var Xt=s(248124), te=s(756029);
      const ee=(0, i.pM)({
        props:{
          courseId:Number, userId:Number, activity:{
            type:Object, required:!0
          }
        }, setup:function(t){
          var e=(0, i.KR)(!1), s=(0, i.KR)(0), a=(0, i.EW)((function(){
            return t.activity.knowledge_node_ids&&t.activity.knowledge_node_ids.length>0&&t.activity.uploads&&t.activity.uploads.length>0&&s.value
          }));
          t.activity.uploads&&t.activity.uploads.forEach((function(t){
            t.ai_subject_count&&(s.value+=t.ai_subject_count)
          }));
          return{
            getActivityGreyIcon:function(t){
              return"font-syllabus-".concat((0, h.replaceActivityTypeKey)(t))
            }, preview:function(){
              Xt("#activity-details-previewer").foundation("reveal", "open");
              var e=te.element(document.body).scope();
              return"page"===t.activity.type?e.$broadcast("previewPageContent", t.activity):"lesson"===t.activity.type?e.$broadcast("previewLesson", t.activity):null
            }, previewUploads:function(){
              var e=t.activity.uploads;
              Xt("#file-previewer").foundation("reveal", "open"), te.element(document.body).scope().$broadcast("previewFiles", e, e[
                0
              ], t.activity, !1, !0)
            }, showUploads:e, handlePreviewUpload:function(e){
              var s=t.activity.uploads;
              Xt("#file-previewer").foundation("reveal", "open"), te.element(document.body).scope().$broadcast("previewFiles", s, e, t.activity, !1, !0)
            }, activityAiSubjectCount:s, haveAttribute:a, fileTypeByExtension:h.fileTypeByExtension
          }
        }
      });
      const se=(0, u.A)(ee, (function(){
        var t=this, e=t.$createElement, s=t._self._c||e;
        return s("div", {
          staticClass:"activity"
        }, [
          s("div", {
            staticClass:"activity-info"
          }, [
            s("i", {
              staticClass:"font activity-icon", class:t.getActivityGreyIcon(t.activity.type), style:{
                top:t.haveAttribute?"26px":"16px"
              }
            }), t._v(" "), s("div", {
              staticClass:"activity-title"
            }, [
              s("span", {
                staticClass:"title"
              }, [
                t._v(t._s(t.activity.title))
              ]), t._v(" "), s("span", {
                staticClass:"activity-attribute"
              }, [
                t.activity.knowledge_node_ids&&t.activity.knowledge_node_ids.length>0?s("div", {
                  staticClass:"knowledge-point-count"
                }, [
                  s("span", {
                    staticClass:"text"
                  }, [
                    t._v(t._s(t.$t("knowledgeGraph.node")))
                  ]), t._v(" "), s("span", {
                    staticClass:"number"
                  }, [
                    t._v(t._s(t.activity.knowledge_node_ids.length))
                  ])
                ]):t._e(), t._v(" "), t.activity.data&&t.activity.data.is_previewed&&t.activity.uploads?s("span", {
                  staticClass:"upload-count"
                }, [
                  t.activity.knowledge_node_ids&&t.activity.knowledge_node_ids.length>0?s("span", {
                    staticClass:"diver"
                  }):t._e(), t._v(" "), s("span", {
                    staticClass:"text"
                  }, [
                    t._v(t._s(t.$t("air.attachmentCount")))
                  ]), t._v(" "), s("span", {
                    staticClass:"number"
                  }, [
                    t._v(t._s(t.activity.uploads.length))
                  ]), t._v(" "), t.showUploads?s("i", {
                    staticClass:"font font-toggle-all-collapsed", on:{
                      click:function(e){
                        t.showUploads=!1
                      }
                    }
                  }):s("i", {
                    staticClass:"font font-toggle-all-expanded", on:{
                      click:function(e){
                        t.showUploads=!0
                      }
                    }
                  })
                ]):t._e(), t._v(" "), t.activityAiSubjectCount>0?s("div", {
                  staticClass:"ai-subject-count"
                }, [
                  t.activity.knowledge_node_ids&&t.activity.knowledge_node_ids.length>0||t.activity.data&&t.activity.data.is_previewed&&t.activity.uploads&&t.activity.uploads.length>0?s("span", {
                    staticClass:"diver"
                  }):t._e(), t._v(" "), s("div", {
                    staticClass:"ai-subject-tag"
                  }, [
                    s("svg-icon", {
                      staticClass:"icon", attrs:{
                        name:"air-ellipse"
                      }
                    }), t._v(" "), s("div", {
                      staticClass:"content"
                    }, [
                      s("span", [
                        t._v(t._s(t.$t("air.aiSubject")))
                      ]), t._v(" "), s("span", {
                        staticClass:"number"
                      }, [
                        t._v(t._s(t.activityAiSubjectCount))
                      ])
                    ])
                  ], 1)
                ]):t._e()
              ])
            ]), t._v(" "), t.activity.data&&t.activity.data.is_previewed?[
              t.activity.uploads&&t.activity.uploads.length>0?s("a", {
                on:{
                  click:t.previewUploads
                }
              }, [
                s("i", {
                  staticClass:"font font-resource-view"
                })
              ]):t._e(), t._v(" "), "online_video"===t.activity.type&&t.activity.data.link_original&&0==t.activity.uploads.length?s("a", {
                attrs:{
                  href:t.activity.data.link_original, target:"_blank"
                }
              }, [
                s("i", {
                  staticClass:"font font-resource-view"
                })
              ]):t._e(), t._v(" "), "web_link"===t.activity.type&&t.activity.data.link&&0==t.activity.uploads.length?s("a", {
                attrs:{
                  href:t.activity.data.link, target:"_blank"
                }
              }, [
                s("i", {
                  staticClass:"font font-resource-view"
                })
              ]):t._e(), t._v(" "), [
                "page", "lesson"
              ].includes(t.activity.type)?s("a", {
                attrs:{
                  "reveal-modal":"activity-details-previewer"
                }, on:{
                  click:t.preview
                }
              }, [
                s("i", {
                  staticClass:"font font-resource-view"
                })
              ]):t._e()
            ]
            :t._e()
          ], 2), t._v(" "), t.activity.uploads&&t.showUploads?s("div", {
            staticClass:"upload-container"
          }, t._l(t.activity.uploads, (function(e){
            return s("div", {
              key:e.id, staticClass:"upload-list"
            }, [
              s("div", {
                staticClass:"upload-item", on:{
                  click:function(s){
                    return t.handlePreviewUpload(e)
                  }
                }
              }, [
                s("div", {
                  staticClass:"upload-header"
                }, [
                  s("i", {
                    staticClass:"font upload-icon", class:"font-file-"+t.fileTypeByExtension(e)
                  }), t._v("\n          "+t._s(e.name)+"\n        ")
                ]), t._v(" "), e.ai_subject_count>0?s("div", {
                  staticClass:"air-subject-tag"
                }, [
                  s("i", {
                    staticClass:"font font-ai-generate"
                  }), t._v(" "), s("span", [
                    t._v(t._s(t.$t("air.aiSubject")))
                  ]), t._v(" "), s("span", {
                    staticClass:"number"
                  }, [
                    t._v(t._s(e.ai_subject_count))
                  ])
                ]):t._e()
              ])
            ])
          })), 0):t._e()
        ])
      }), [
      ], !1, null, "3f166533", null).exports, ae=(0, i.pM)({
        props:{
          courseId:Number, userId:Number, course:{
            type:Object, required:!0
          }
        }, components:{
          Activity:se
        }, setup:function(t){
          var e=(0, i.KR)(!1), s=(0, i.KR)({
          });
          (0, m.aQ)(t.courseId, !t.userId).then((function(t){
            t.forEach((function(t){
              var e="".concat(t.module_id, "-").concat(t.syllabus_id||0);
              s.value[
                e
              ]
              ||(s.value[
                e
              ]
              =[
              ]), s.value[
                e
              ].push(t)
            })), Object.keys(s.value).forEach((function(t){
              s.value[
                t
              ]
              =s.value[
                t
              ].sort((function(t, e){
                return t.sort-e.sort
              }))
            })), e.value=!0
          }));
          return{
            getActivities:function(t, e){
              return void 0===e&&(e=0), s.value[
                "".concat(t||0, "-").concat(e||0)
              ]
              ||[
              ]
            }, loaded:e, getActivityGreyIcon:function(t){
              return"font-syllabus-".concat((0, h.replaceActivityTypeKey)(t))
            }, getActiveKeys:function(t){
              return t.map((function(t){
                return t.summary+t.id
              }))
            }
          }
        }
      });
      const ne=(0, u.A)(ae, (function(){
        var t=this, e=t.$createElement, s=t._self._c||e;
        return t.loaded?s("div", {
          staticClass:"root"
        }, t._l(t.course.sortedModules, (function(e){
          return s("div", {
            key:e.id
          }, [
            s("div", {
              staticClass:"module-title"
            }, [
              s("div", {
                staticClass:"icon"
              }, [
                s("svg-icon", {
                  attrs:{
                    name:"course-module"
                  }
                }), t._v(" "), s("div", {
                  staticClass:"background-container"
                })
              ], 1), t._v("\n      "+t._s(e.name)+"\n    ")
            ]), t._v(" "), s("div", {
              staticClass:"module-content"
            }, [
              t._l(t.getActivities(e.id), (function(t){
                return s("Activity", {
                  key:t.id, attrs:{
                    activity:t
                  }
                })
              })), t._v(" "), e.sortedSyllabuses&&e.sortedSyllabuses.length>0?s("Collapse", {
                attrs:{
                  simple:"", value:t.getActiveKeys(e.sortedSyllabuses)
                }
              }, t._l(e.sortedSyllabuses, (function(a){
                return s("Panel", {
                  key:a.id, attrs:{
                    name:a.summary+a.id, "hide-arrow":""
                  }
                }, [
                  s("i", {
                    staticClass:"font font-triangle-collapsed"
                  }), t._v(" "), s("i", {
                    staticClass:"font font-triangle-expanded"
                  }), t._v(" "), s("span", {
                    staticClass:"title"
                  }, [
                    t._v(t._s(a.summary))
                  ]), t._v(" "), s("div", {
                    attrs:{
                      slot:"content"
                    }, slot:"content"
                  }, t._l(t.getActivities(e.id, a.id), (function(t){
                    return s("Activity", {
                      key:t.id, attrs:{
                        activity:t
                      }
                    })
                  })), 1)
                ])
              })), 1):t._e()
            ], 2)
          ])
        })), 0):t._e()
      }), [
      ], !1, null, "03a4eb55", null).exports;
      var ie=s(48292), oe=s(623694), re=s(551137), ce=s(574799), le=s(818233), ue=s(350757), de=s(32876), ve=s(40842), pe=s(260537), fe=s(927917), me=s(104715), _e=s(972194), he=function(t, e, s, a){
        return new(s||(s=Promise))((function(n, i){
          function o(t){
            try{
              c(a.next(t))
            }
            catch(t){
              i(t)
            }
          }
          function r(t){
            try{
              c(a.throw(t))
            }
            catch(t){
              i(t)
            }
          }
          function c(t){
            var e;
            t.done?n(t.value):(e=t.value, e instanceof s?e:new s((function(t){
              t(e)
            }))).then(o, r)
          }
          c((a=a.apply(t, e||[
          ])).next())
        }))
      }, ge=function(t, e){
        var s, a, n, i, o={
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
          next:r(0), throw:r(1), return:r(2)
        }, "function"==typeof Symbol&&(i[
          Symbol.iterator
        ]
        =function(){
          return this
        }), i;
        function r(r){
          return function(c){
            return function(r){
              if(s)throw new TypeError("Generator is already executing.");
              for(;
              i&&(i=0, r[
                0
              ]
              &&(o=0)), o;
              )try{
                if(s=1, a&&(n=2&r[
                  0
                ]
                ?a.return:r[
                  0
                ]
                ?a.throw||((n=a.return)&&n.call(a), 0):a.next)&&!(n=n.call(a, r[
                  1
                ])).done)return n;
                switch(a=0, n&&(r=[
                  2&r[
                    0
                  ], n.value
                ]), r[
                  0
                ]){
                  case 0:case 1:n=r;
                  break;
                  case 4:return o.label++, {
                    value:r[
                      1
                    ], done:!1
                  };
                  case 5:o.label++, a=r[
                    1
                  ], r=[
                    0
                  ];
                  continue;
                  case 7:r=o.ops.pop(), o.trys.pop();
                  continue;
                  default:if(!(n=o.trys, (n=n.length>0&&n[
                    n.length-1
                  ])||6!==r[
                    0
                  ]
                  &&2!==r[
                    0
                  ])){
                    o=0;
                    continue
                  }
                  if(3===r[
                    0
                  ]
                  &&(!n||r[
                    1
                  ]
                  >n[
                    0
                  ]
                  &&r[
                    1
                  ]
                  <n[
                    3
                  ])){
                    o.label=r[
                      1
                    ];
                    break
                  }
                  if(6===r[
                    0
                  ]
                  &&o.label<n[
                    1
                  ]){
                    o.label=n[
                      1
                    ], n=r;
                    break
                  }
                  if(n&&o.label<n[
                    2
                  ]){
                    o.label=n[
                      2
                    ], o.ops.push(r);
                    break
                  }
                  n[
                    2
                  ]
                  &&o.ops.pop(), o.trys.pop();
                  continue
                }
                r=e.call(t, o)
              }
              catch(t){
                r=[
                  6, t
                ], a=0
              }
              finally{
                s=n=0
              }
              if(5&r[
                0
              ])throw r[
                1
              ];
              return{
                value:r[
                  0
                ]
                ?r[
                  1
                ]
                :void 0, done:!0
              }
            }
            ([
              r, c
            ])
          }
        }
      };
      const ye=(0, i.pM)({
        setup:function(){
          var t=this, e=(0, i.WQ)("course", {
            id:0, name:""
          }), s=(0, i.KR)(null), a=(0, _e.D)().depth, n=(0, i.KR)(new gt.w0), o=null;
          return(0, i.sV)((function(){
            return he(t, void 0, void 0, (function(){
              var t, i;
              return ge(this, (function(r){
                switch(r.label){
                  case 0:return[
                    4, (0, nt.getKnowledgeNodeTrees)(e.id)
                  ];
                  case 1:return t=r.sent(), i=(0, me._A)(t), (o=(0, me.T3)(s.value, {
                    data:{
                      text:e.name, uid:"root"
                    }, children:i
                  })).setMode("readonly"), o.opt.maxDepth=a, o.on("node_active", (function(t){
                    t&&function(t){
                      var e=Number(t.uid);
                      t, n.value.id=e
                    }
                    (t)
                  })), window.mindMap=o, [
                    2
                  ]
                }
              }))
            }))
          })), {
            mapRef:s, currentNode:n
          }
        }
      });
      const Ce=(0, u.A)(ye, (function(){
        var t=this.$createElement, e=this._self._c||t;
        return e("div", {
          staticClass:"h-full"
        }, [
          e("div", {
            ref:"mapRef", staticClass:"mind-map"
          })
        ])
      }), [
      ], !1, null, "09a311e9", null).exports;
      const be=(0, i.pM)({
        props:{
          userId:Number, course:{
            type:Object, required:!0
          }
        }, setup:function(t){
          return rt.value||ct(t.course.id, !t.userId), {
            knowledgeNodeStat:rt
          }
        }
      });
      const we=(0, u.A)(be, (function(){
        var t=this, e=t.$createElement, s=t._self._c||e;
        return s("div", {
          staticClass:"box"
        }, [
          s("div", {
            staticClass:"item"
          }, [
            s("SvgIcon", {
              staticClass:"ref-count", attrs:{
                name:"knowledge-ref-count"
              }
            }), t._v(" "), s("div", {
              staticClass:"part"
            }, [
              s("div", {
                staticClass:"number"
              }, [
                t._v("\n        "+t._s(t.knowledgeNodeStat?t.knowledgeNodeStat.resourceRefCount:"")+"\n      ")
              ]), t._v(" "), s("div", {
                staticClass:"text"
              }, [
                t._v("\n        "+t._s(t.$t("knowledgeGraph.referenceResource"))+"\n      ")
              ])
            ]), t._v(" "), s("div", {
              staticClass:"part"
            }, [
              s("div", {
                staticClass:"number"
              }, [
                t._v("\n        "+t._s(t.knowledgeNodeStat?t.knowledgeNodeStat.subjectRefCount:"")+"\n      ")
              ]), t._v(" "), s("div", {
                staticClass:"text"
              }, [
                t._v("\n        "+t._s(t.$t("knowledgeGraph.referenceSubject"))+"\n      ")
              ])
            ]), t._v(" "), s("div", {
              staticClass:"part"
            }, [
              s("div", {
                staticClass:"number"
              }, [
                t._v("\n        "+t._s(t.knowledgeNodeStat?t.knowledgeNodeStat.activityRefCount:"")+"\n      ")
              ]), t._v(" "), s("div", {
                staticClass:"text"
              }, [
                t._v("\n        "+t._s(t.$t("knowledgeGraph.referenceActivity"))+"\n      ")
              ])
            ])
          ], 1), t._v(" "), s("div", {
            staticClass:"item"
          }, [
            s("SvgIcon", {
              attrs:{
                name:"student-stat"
              }
            }), t._v(" "), s("div", {
              staticClass:"part"
            }, [
              s("div", {
                staticClass:"number"
              }, [
                t._v("\n        "+t._s(t.knowledgeNodeStat?t.knowledgeNodeStat.averageCompletenessRate:"")+"\n      ")
              ]), t._v(" "), s("div", {
                staticClass:"text"
              }, [
                t._v(t._s(t.$t("knowledgeGraph.completeRate")))
              ])
            ]), t._v(" "), s("div", {
              staticClass:"part"
            }, [
              s("div", {
                staticClass:"number"
              }, [
                t._v("\n        "+t._s(t.knowledgeNodeStat?t.knowledgeNodeStat.averageMasteryRate:"")+"\n      ")
              ]), t._v(" "), s("div", {
                staticClass:"text"
              }, [
                t._v(t._s(t.$t("knowledgeGraph.masteryRate")))
              ])
            ])
          ], 1)
        ])
      }), [
      ], !1, null, "ee54fe40", null).exports;
      var Se=function(t, e, s, a){
        return new(s||(s=Promise))((function(n, i){
          function o(t){
            try{
              c(a.next(t))
            }
            catch(t){
              i(t)
            }
          }
          function r(t){
            try{
              c(a.throw(t))
            }
            catch(t){
              i(t)
            }
          }
          function c(t){
            var e;
            t.done?n(t.value):(e=t.value, e instanceof s?e:new s((function(t){
              t(e)
            }))).then(o, r)
          }
          c((a=a.apply(t, e||[
          ])).next())
        }))
      }, xe=function(t, e){
        var s, a, n, i, o={
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
          next:r(0), throw:r(1), return:r(2)
        }, "function"==typeof Symbol&&(i[
          Symbol.iterator
        ]
        =function(){
          return this
        }), i;
        function r(r){
          return function(c){
            return function(r){
              if(s)throw new TypeError("Generator is already executing.");
              for(;
              i&&(i=0, r[
                0
              ]
              &&(o=0)), o;
              )try{
                if(s=1, a&&(n=2&r[
                  0
                ]
                ?a.return:r[
                  0
                ]
                ?a.throw||((n=a.return)&&n.call(a), 0):a.next)&&!(n=n.call(a, r[
                  1
                ])).done)return n;
                switch(a=0, n&&(r=[
                  2&r[
                    0
                  ], n.value
                ]), r[
                  0
                ]){
                  case 0:case 1:n=r;
                  break;
                  case 4:return o.label++, {
                    value:r[
                      1
                    ], done:!1
                  };
                  case 5:o.label++, a=r[
                    1
                  ], r=[
                    0
                  ];
                  continue;
                  case 7:r=o.ops.pop(), o.trys.pop();
                  continue;
                  default:if(!(n=o.trys, (n=n.length>0&&n[
                    n.length-1
                  ])||6!==r[
                    0
                  ]
                  &&2!==r[
                    0
                  ])){
                    o=0;
                    continue
                  }
                  if(3===r[
                    0
                  ]
                  &&(!n||r[
                    1
                  ]
                  >n[
                    0
                  ]
                  &&r[
                    1
                  ]
                  <n[
                    3
                  ])){
                    o.label=r[
                      1
                    ];
                    break
                  }
                  if(6===r[
                    0
                  ]
                  &&o.label<n[
                    1
                  ]){
                    o.label=n[
                      1
                    ], n=r;
                    break
                  }
                  if(n&&o.label<n[
                    2
                  ]){
                    o.label=n[
                      2
                    ], o.ops.push(r);
                    break
                  }
                  n[
                    2
                  ]
                  &&o.ops.pop(), o.trys.pop();
                  continue
                }
                r=e.call(t, o)
              }
              catch(t){
                r=[
                  6, t
                ], a=0
              }
              finally{
                s=n=0
              }
              if(5&r[
                0
              ])throw r[
                1
              ];
              return{
                value:r[
                  0
                ]
                ?r[
                  1
                ]
                :void 0, done:!0
              }
            }
            ([
              r, c
            ])
          }
        }
      };
      const ke=(0, i.pM)({
        props:{
          course:{
            type:Object, required:!0
          }, treeDepth:Number, publishType:{
            type:String
          }, userId:Number, state:{
            type:Object, required:!1
          }
        }, components:{
          Graph:re.A, G6Graph:oe.Ay, ViewSelect:fe.A, KnowledgeTree:le.A, Mindmap:Ce, Summary:we, Toolbar:de.A, Legend:ue.A, DetailButton:d
        }, provide:function(){
          return{
            treeDepth:this.treeDepth
          }
        }, setup:function(t){
          var e=this;
          ce.yW.value.id=t.course.id, ce.yW.value.name=t.course.name, (0, i.Gt)("course", ce.yW.value), (0, i.Gt)("allowFacetsAndFragments", !1);
          var s=(0, i.KR)("outline"), a=(0, i.KR)([
          ]), n=(0, i.KR)(), o=(0, i.KR)(), r=(0, i.KR)(1), c=ie.nE.LEVEL, l=(0, i.EW)((function(){
            return"published"===t.publishType
          })), u=(0, i.EW)((function(){
            var e;
            return"enter"===(null===(e=t.state)||void 0===e?void 0:e.action)
          })), d=(0, i.EW)((function(){
            return ce.HD.value?re.A:"graph"===s.value?oe.Ay:null
          })), v=(0, i.EW)((function(){
            return ce.HD.value?ve.A:de.A
          })), p=(0, i.KR)({
            course:!0, levelRelation:!0, directedRelation:!0, undirectedRelation:!0, showLevelNumber:4
          }), f=(0, i.EW)((function(){
            return l.value?T.default.t("knowledgeGraph.noContent"):T.default.t("knowledgeGraph.NoContentTip")
          }));
          (0, i.sV)((function(){
            return Se(e, void 0, void 0, (function(){
              var e;
              return xe(this, (function(s){
                switch(s.label){
                  case 0:return e=a, [
                    4, (0, nt.getKnowledgeNodeTrees)(t.course.id)
                  ];
                  case 1:return e.value=s.sent(), [
                    2
                  ]
                }
              }))
            }))
          })), (0, i.xo)((function(){
            ce.HD.value&&(ce.HD.value=!1, document.querySelector("html").classList.remove("dark"))
          }));
          var m="", _=function(){
            if(u.value){
              var e="/course/".concat(t.course.id, "/knowledge-graph#/graph");
              localStorage.setItem("knowledgeGraphHash", "graph"), window.open(e, "_blank")
            }
          };
          return(0, i.wB)([
            s, ce.HD
          ], (function(){
            return Se(e, void 0, void 0, (function(){
              var e;
              return xe(this, (function(n){
                switch(n.label){
                  case 0:return"graph"!==s.value||ce.HD.value?[
                    3, 2
                  ]
                  :(e=a, [
                    4, (0, nt.getKnowledgeNodeTrees)(t.course.id)
                  ]);
                  case 1:e.value=n.sent(), n.label=2;
                  case 2:return[
                    2
                  ]
                }
              }))
            }))
          })), {
            enterDarkMode:function(){
              ce.HD.value?(ce.HD.value=!1, document.querySelector("html").classList.remove("dark"), p.value.course=!0, p.value.showLevelNumber=0, s.value=m):(m=s.value, s.value="graph", ce.HD.value=!0, document.querySelector("html").classList.add("dark"))
            }, nodes:a, viewMode:c, graphSetting:p, graphWrapperRef:n, graphRef:o, fullscreen:function(){
              var t;
              document.fullscreenElement?document.exitFullscreen():null===(t=n.value)||void 0===t||t.requestFullscreen()
            }, restPosition:function(){
              var t;
              null===(t=o.value)||void 0===t||t.resetZoom()
            }, zoomIn:function(){
              var t;
              null===(t=o.value)||void 0===t||t.zoomIn()
            }, zoomOut:function(){
              var t;
              null===(t=o.value)||void 0===t||t.zoomOut()
            }, noDataTip:f, isPublished:l, isJoined:u, mode:s, isDark:ce.HD, jumpToGraph:_, handleClickNode:function(t){
              localStorage.setItem("knowledgeGraphSelectedNodeId", t.toString()), _()
            }, currentGraphComponent:d, graphSvgBgInside:oe.nx, zoomTo:function(t){
              var e, s;
              null===(s=null===(e=o.value)||void 0===e?void 0:e.zoomTo)||void 0===s||s.call(e, t)
            }, zoom:r, toolbarComponent:v, settingChange:function(t){
              ce.HD.value?(p.value.directedRelation=t.directedRelation, p.value.levelRelation=t.levelRelation, p.value.undirectedRelation=t.undirectedRelation, p.value.course=!1, p.value.showLevelNumber=100):(p.value.directedRelation=t.directedRelation, p.value.levelRelation=t.levelRelation, p.value.undirectedRelation=t.undirectedRelation, p.value.course=!0, p.value.showLevelNumber=4)
            }, zoomChange:function(t){
              r.value=t
            }, legendColor:pe.Vl
          }
        }
      });
      const Ie=(0, u.A)(ke, (function(){
        var t=this, e=t.$createElement, s=t._self._c||e;
        return s("div", [
          s("Summary", {
            attrs:{
              course:t.course, userId:t.userId
            }
          }), t._v(" "), s("div", {
            staticClass:"relative graph-root knowledge-wrapper", class:{
              dark:t.isDark
            }
          }, [
            s("ViewSelect", {
              staticClass:"view-select", model:{
                value:t.mode, callback:function(e){
                  t.mode=e
                }, expression:"mode"
              }
            }, [
              t.isDark?s("div", {
                staticClass:"btn", on:{
                  click:t.enterDarkMode
                }
              }, [
                s("i", {
                  staticClass:"font font-light-mode"
                })
              ]):s("Tooltip", {
                attrs:{
                  content:t.$t("darkMode"), placement:"bottom"
                }
              }, [
                s("div", {
                  staticClass:"btn", on:{
                    click:t.enterDarkMode
                  }
                }, [
                  s("i", {
                    staticClass:"font font-dark-mode"
                  })
                ])
              ])
            ], 1), t._v(" "), t.isPublished&&t.nodes.length?s("div", {
              ref:"graphWrapperRef", staticClass:"graph-wrapper"
            }, [
              t.currentGraphComponent?s(t.currentGraphComponent, {
                key:t.isDark, ref:"graphRef", tag:"component", staticClass:"graph", attrs:{
                  nodes:t.nodes, "view-mode":t.viewMode, setting:t.graphSetting
                }, on:{
                  "on-click-node":t.handleClickNode, "on-zoom":t.zoomChange
                }
              }):t._e(), t._v(" "), "graph"!==t.mode||t.isDark?t._e():s("Legend", {
                staticClass:"graph-legend", attrs:{
                  svg:t.graphSvgBgInside, "view-mode":t.viewMode, "level-colors":t.legendColor()
                }, model:{
                  value:t.graphSetting.showLevelNumber, callback:function(e){
                    t.$set(t.graphSetting, "showLevelNumber", e)
                  }, expression:"graphSetting.showLevelNumber"
                }
              }), t._v(" "), "graph"===t.mode?s(t.toolbarComponent, {
                tag:"component", staticClass:"graph-toolbar", attrs:{
                  "view-mode":t.viewMode, zoom:t.zoom
                }, on:{
                  "on-fullscreen":t.fullscreen, "on-position":t.restPosition, "on-zoom-in":t.zoomIn, "on-zoom-out":t.zoomOut, "on-zoom-to":t.zoomTo, "on-setting-change":t.settingChange
                }
              }):t._e(), t._v(" "), "outline"===t.mode?s("KnowledgeTree", {
                staticClass:"outline-view"
              }):t._e(), t._v(" "), "mindmap"===t.mode?s("Mindmap"):t._e(), t._v(" "), "graph"===t.mode?s("DetailButton", {
                attrs:{
                  "is-joined":t.isJoined, "on-click":t.jumpToGraph
                }
              }):t._e()
            ], 1):s("div", {
              staticClass:"no-data", class:{
                "has-summary":t.isPublished
              }
            }, [
              s("i", {
                staticClass:"blank-icon font font-courseware-blank"
              }), t._v("\n      "+t._s(t.noDataTip)+"\n    ")
            ])
          ], 1)
        ], 1)
      }), [
      ], !1, null, "866c78fa", null).exports;
      var Te=s(769075);
      const Ee=s.p+"assets/js/vue/views/course/info/estimates/338bfe4946482cd9ada2.lottie", $e=s.p+"assets/js/vue/views/course/info/estimates/d510b940476f97d0bddc.lottie";
      var Ae=s(88595), Re=function(t, e, s, a){
        return new(s||(s=Promise))((function(n, i){
          function o(t){
            try{
              c(a.next(t))
            }
            catch(t){
              i(t)
            }
          }
          function r(t){
            try{
              c(a.throw(t))
            }
            catch(t){
              i(t)
            }
          }
          function c(t){
            var e;
            t.done?n(t.value):(e=t.value, e instanceof s?e:new s((function(t){
              t(e)
            }))).then(o, r)
          }
          c((a=a.apply(t, e||[
          ])).next())
        }))
      }, De=function(t, e){
        var s, a, n, i, o={
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
          next:r(0), throw:r(1), return:r(2)
        }, "function"==typeof Symbol&&(i[
          Symbol.iterator
        ]
        =function(){
          return this
        }), i;
        function r(r){
          return function(c){
            return function(r){
              if(s)throw new TypeError("Generator is already executing.");
              for(;
              i&&(i=0, r[
                0
              ]
              &&(o=0)), o;
              )try{
                if(s=1, a&&(n=2&r[
                  0
                ]
                ?a.return:r[
                  0
                ]
                ?a.throw||((n=a.return)&&n.call(a), 0):a.next)&&!(n=n.call(a, r[
                  1
                ])).done)return n;
                switch(a=0, n&&(r=[
                  2&r[
                    0
                  ], n.value
                ]), r[
                  0
                ]){
                  case 0:case 1:n=r;
                  break;
                  case 4:return o.label++, {
                    value:r[
                      1
                    ], done:!1
                  };
                  case 5:o.label++, a=r[
                    1
                  ], r=[
                    0
                  ];
                  continue;
                  case 7:r=o.ops.pop(), o.trys.pop();
                  continue;
                  default:if(!(n=o.trys, (n=n.length>0&&n[
                    n.length-1
                  ])||6!==r[
                    0
                  ]
                  &&2!==r[
                    0
                  ])){
                    o=0;
                    continue
                  }
                  if(3===r[
                    0
                  ]
                  &&(!n||r[
                    1
                  ]
                  >n[
                    0
                  ]
                  &&r[
                    1
                  ]
                  <n[
                    3
                  ])){
                    o.label=r[
                      1
                    ];
                    break
                  }
                  if(6===r[
                    0
                  ]
                  &&o.label<n[
                    1
                  ]){
                    o.label=n[
                      1
                    ], n=r;
                    break
                  }
                  if(n&&o.label<n[
                    2
                  ]){
                    o.label=n[
                      2
                    ], o.ops.push(r);
                    break
                  }
                  n[
                    2
                  ]
                  &&o.ops.pop(), o.trys.pop();
                  continue
                }
                r=e.call(t, o)
              }
              catch(t){
                r=[
                  6, t
                ], a=0
              }
              finally{
                s=n=0
              }
              if(5&r[
                0
              ])throw r[
                1
              ];
              return{
                value:r[
                  0
                ]
                ?r[
                  1
                ]
                :void 0, done:!0
              }
            }
            ([
              r, c
            ])
          }
        }
      };
      const Ne=(0, i.pM)({
        name:"Reply", components:{
          Star:Nt, Avatar:zt.A
        }, props:{
          item:{
            type:Object, required:!0
          }, isReply:{
            type:Boolean, default:!1
          }, replies:{
            type:Array, default:function(){
              return[
              ]
            }
          }, userId:Number
        }, setup:function(t, e){
          var s=this, a=e.emit, n=(0, i.KR)((0, E.clone)(t.replies));
          (0, i.wB)((function(){
            return t.replies
          }), (function(){
            n.value=(0, E.clone)(t.replies)
          }));
          var o=(0, i.EW)((function(){
            return Ae.A.utcDateToLocal(t.item.createdAt)
          })), r=(0, i.KR)(!1), c=(0, i.KR)(""), l=(0, i.KR)(!1), u=function(){
            return Re(s, void 0, void 0, (function(){
              var e;
              return De(this, (function(s){
                switch(s.label){
                  case 0:return[
                    4, (0, m.xn)(t.item.id)
                  ];
                  case 1:return e=s.sent(), n.value=e, [
                    2
                  ]
                }
              }))
            }))
          }, d=(0, i.EW)((function(){
            var e;
            return"Admin"===(null===(e=window.globalData)||void 0===e?void 0:e.user.role)||t.userId===t.item.user.id
          }));
          return{
            time:o, showReplies:r, deleteEstimate:function(t){
              return Re(s, void 0, void 0, (function(){
                return De(this, (function(e){
                  return a("delete", {
                    id:t
                  }), [
                    2
                  ]
                }))
              }))
            }, reply:function(){
              l.value=!0
            }, replyComment:c, submitReply:function(){
              return Re(s, void 0, void 0, (function(){
                return De(this, (function(e){
                  switch(e.label){
                    case 0:return[
                      4, (0, m.dq)({
                        estimate_id:t.item.id, reply:c.value
                      })
                    ];
                    case 1:return e.sent(), c.value="", l.value=!1, u(), [
                      2
                    ]
                  }
                }))
              }))
            }, localReplies:n, replyInput:l, deleteReply:function(t){
              var e=t.id;
              return Re(s, void 0, void 0, (function(){
                return De(this, (function(t){
                  switch(t.label){
                    case 0:return[
                      4, Te.A.open({
                        type:"warning", title:T.default.t("delete"), content:T.default.t("estimateDeleteConfirm"), width:416, verticalCenter:!0
                      })
                    ];
                    case 1:return t.sent()?[
                      4, (0, m.e6)(e)
                    ]
                    :[
                      2
                    ];
                    case 2:return t.sent(), u(), [
                      2
                    ]
                  }
                }))
              }))
            }, deleteAble:d, edit:function(){
              a("edit", (0, E.clone)(t.item))
            }
          }
        }
      });
      const Pe=(0, u.A)(Ne, (function(){
        var t=this, e=t.$createElement, s=t._self._c||e;
        return s("div", {
          staticClass:"box w-full"
        }, [
          s("Avatar", {
            staticClass:"avatar", attrs:{
              user:t.item.user
            }
          }), t._v(" "), s("div", {
            staticClass:"w-full min-w-0"
          }, [
            s("div", {
              staticClass:"info"
            }, [
              s("div", {
                staticClass:"name"
              }, [
                t._v(t._s(t.item.user.name))
              ]), t._v(" "), !t.$featureToggles.courseEstimateWithoutScore&&t.item.score?s("Rate", {
                staticClass:"rate", attrs:{
                  value:t.item.score, "custom-icon":"font font-whole-star", disabled:""
                }
              }):t._e()
            ], 1), t._v(" "), s("div", {
              staticClass:"reply"
            }, [
              t._v("\n      "+t._s(t.item.comment||t.item.reply)+"\n    ")
            ]), t._v(" "), s("div", {
              staticClass:"extra"
            }, [
              s("span", {
                staticClass:"time"
              }, [
                t._v("\n        "+t._s(t.time)+"\n      ")
              ]), t._v(" "), t.localReplies.length>0?s("div", {
                staticClass:"toggle-replies action", class:{
                  showReplies:t.showReplies
                }, on:{
                  click:function(e){
                    t.showReplies=!t.showReplies
                  }
                }
              }, [
                s("i", {
                  staticClass:"font font-double-array-right"
                }), t._v(" "), s("span", [
                  t._v("\n          "+t._s(t.showReplies?t.$t("collapseAll"):t.$tc("expandNReplies", t.localReplies.length))+"\n        ")
                ])
              ]):t._e(), t._v(" "), t.userId&&!t.isReply?s("div", {
                staticClass:"action flex items-center"
              }, [
                s("Divider", {
                  staticClass:"divider", attrs:{
                    type:"vertical"
                  }
                }), t._v(" "), s("div", {
                  staticClass:"cursor-pointer", on:{
                    click:t.reply
                  }
                }, [
                  s("i", {
                    staticClass:"font font-comments"
                  }), t._v("\n          "+t._s(t.$t("reply"))+"\n        ")
                ])
              ], 1):t._e(), t._v(" "), t.isReply||t.userId!==t.item.user.id?t._e():s("div", {
                staticClass:"action flex items-center"
              }, [
                s("Divider", {
                  staticClass:"divider", attrs:{
                    type:"vertical"
                  }
                }), t._v(" "), s("div", {
                  staticClass:"cursor-pointer", on:{
                    click:t.edit
                  }
                }, [
                  s("i", {
                    staticClass:"font font-edit"
                  }), t._v("\n          "+t._s(t.$t("edit"))+"\n        ")
                ])
              ], 1), t._v(" "), t.deleteAble?s("div", {
                staticClass:"action flex items-center"
              }, [
                s("Divider", {
                  staticClass:"divider", attrs:{
                    type:"vertical"
                  }
                }), t._v(" "), s("div", {
                  staticClass:"cursor-pointer delete", on:{
                    click:function(e){
                      return t.deleteEstimate(t.item.id)
                    }
                  }
                }, [
                  s("i", {
                    staticClass:"font font-delete"
                  }), t._v("\n          "+t._s(t.$t("delete"))+"\n        ")
                ])
              ], 1):t._e()
            ]), t._v(" "), t.isReply?t._e():[
              t.replyInput?s("div", {
                staticClass:"replyBox"
              }, [
                s("textarea", {
                  directives:[
                    {
                      name:"model", rawName:"v-model", value:t.replyComment, expression:"replyComment"
                    }
                  ], attrs:{
                    rows:"4", placeholder:t.$t("learningSpace.search.placeholder")
                  }, domProps:{
                    value:t.replyComment
                  }, on:{
                    input:function(e){
                      e.target.composing||(t.replyComment=e.target.value)
                    }
                  }
                }), t._v(" "), s("div", {
                  staticClass:"flex justify-end"
                }, [
                  s("Button", {
                    attrs:{
                      size:"small", type:"primary"
                    }, on:{
                      click:t.submitReply
                    }
                  }, [
                    t._v(t._s(t.$t("reply")))
                  ]), t._v(" "), s("Button", {
                    attrs:{
                      size:"small"
                    }, on:{
                      click:function(e){
                        t.replyInput=!1
                      }
                    }
                  }, [
                    t._v(t._s(t.$t("cancel")))
                  ])
                ], 1)
              ]):t._e(), t._v(" "), t.showReplies?s("div", {
                staticClass:"replies"
              }, t._l(t.localReplies, (function(e){
                return s("Reply", {
                  key:e.id, attrs:{
                    "user-id":t.userId, "is-reply":"", item:e
                  }, on:{
                    delete:t.deleteReply
                  }
                })
              })), 1):t._e()
            ]
          ], 2)
        ], 1)
      }), [
      ], !1, null, "fb7274ac", null).exports;
      var je=function(t, e, s, a){
        return new(s||(s=Promise))((function(n, i){
          function o(t){
            try{
              c(a.next(t))
            }
            catch(t){
              i(t)
            }
          }
          function r(t){
            try{
              c(a.throw(t))
            }
            catch(t){
              i(t)
            }
          }
          function c(t){
            var e;
            t.done?n(t.value):(e=t.value, e instanceof s?e:new s((function(t){
              t(e)
            }))).then(o, r)
          }
          c((a=a.apply(t, e||[
          ])).next())
        }))
      }, Me=function(t, e){
        var s, a, n, i, o={
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
          next:r(0), throw:r(1), return:r(2)
        }, "function"==typeof Symbol&&(i[
          Symbol.iterator
        ]
        =function(){
          return this
        }), i;
        function r(r){
          return function(c){
            return function(r){
              if(s)throw new TypeError("Generator is already executing.");
              for(;
              i&&(i=0, r[
                0
              ]
              &&(o=0)), o;
              )try{
                if(s=1, a&&(n=2&r[
                  0
                ]
                ?a.return:r[
                  0
                ]
                ?a.throw||((n=a.return)&&n.call(a), 0):a.next)&&!(n=n.call(a, r[
                  1
                ])).done)return n;
                switch(a=0, n&&(r=[
                  2&r[
                    0
                  ], n.value
                ]), r[
                  0
                ]){
                  case 0:case 1:n=r;
                  break;
                  case 4:return o.label++, {
                    value:r[
                      1
                    ], done:!1
                  };
                  case 5:o.label++, a=r[
                    1
                  ], r=[
                    0
                  ];
                  continue;
                  case 7:r=o.ops.pop(), o.trys.pop();
                  continue;
                  default:if(!(n=o.trys, (n=n.length>0&&n[
                    n.length-1
                  ])||6!==r[
                    0
                  ]
                  &&2!==r[
                    0
                  ])){
                    o=0;
                    continue
                  }
                  if(3===r[
                    0
                  ]
                  &&(!n||r[
                    1
                  ]
                  >n[
                    0
                  ]
                  &&r[
                    1
                  ]
                  <n[
                    3
                  ])){
                    o.label=r[
                      1
                    ];
                    break
                  }
                  if(6===r[
                    0
                  ]
                  &&o.label<n[
                    1
                  ]){
                    o.label=n[
                      1
                    ], n=r;
                    break
                  }
                  if(n&&o.label<n[
                    2
                  ]){
                    o.label=n[
                      2
                    ], o.ops.push(r);
                    break
                  }
                  n[
                    2
                  ]
                  &&o.ops.pop(), o.trys.pop();
                  continue
                }
                r=e.call(t, o)
              }
              catch(t){
                r=[
                  6, t
                ], a=0
              }
              finally{
                s=n=0
              }
              if(5&r[
                0
              ])throw r[
                1
              ];
              return{
                value:r[
                  0
                ]
                ?r[
                  1
                ]
                :void 0, done:!0
              }
            }
            ([
              r, c
            ])
          }
        }
      };
      const Ge=(0, i.pM)({
        components:{
          Star:Nt, Reply:Pe, Avatar:zt.A
        }, props:{
          courseId:Number, userId:Number
        }, setup:function(t){
          var e, s=this, a=Rt(t.courseId, t.userId), o=a.courseEstimates, r=a.totalScoreNum, c=a.averageScore, l=a.load, u=(0, i.EW)((function(){
            return(0, E.countBy)(o.value, "score")
          })), d=(0, i.KR)({
          });
          (0, m.fW)(t.courseId, !t.userId).then((function(t){
            d.value=t
          }));
          var v=(0, i.KR)({
            score:5, comment:"", id:0
          }), p=(0, i.EW)((function(){
            return v.value.id||!o.value.find((function(e){
              return e.user.id===t.userId
            }))
          })), f={
            avatarBigUrl:null===(e=document.querySelector("root-scope-variable[name=avatarBigUrl]"))||void 0===e?void 0:e.getAttribute("value")
          };
          return(0, i.sV)((function(){
            if(!window.featureToggles.courseEstimateWithoutScore){
              var t=new n.j({
                canvas:document.querySelector("#score-canvas"), src:c.value>=6?Ee:$e, autoplay:!0, loop:!0
              });
              (0, i.wB)(c, (function(){
                setTimeout((function(){
                  t.load({
                    autoplay:!0, loop:!0, src:c.value>=6?Ee:$e
                  })
                }), 100)
              }), {
                immediate:!0
              })
            }
          })), {
            courseEstimates:o, replyMap:d, totalScoreNum:r, scoreMap:u, submit:function(){
              return je(s, void 0, void 0, (function(){
                return Me(this, (function(e){
                  switch(e.label){
                    case 0:return v.value.id?[
                      4, (0, m.iL)(v.value.id, v.value)
                    ]
                    :[
                      3, 2
                    ];
                    case 1:return e.sent(), [
                      3, 4
                    ];
                    case 2:return[
                      4, (0, m.Cn)({
                        course_id:t.courseId, comment:v.value.comment, score:v.value.score
                      })
                    ];
                    case 3:e.sent(), e.label=4;
                    case 4:return v.value={
                      score:5, comment:"", id:0
                    }, l(), [
                      2
                    ]
                  }
                }))
              }))
            }, form:v, deleteReply:function(t){
              var e=t.id;
              return je(s, void 0, void 0, (function(){
                return Me(this, (function(t){
                  switch(t.label){
                    case 0:return[
                      4, Te.A.open({
                        type:"warning", title:T.default.t("delete"), content:T.default.t("estimateDeleteConfirm"), width:416, verticalCenter:!0
                      })
                    ];
                    case 1:return t.sent()?[
                      4, (0, m.as)(e)
                    ]
                    :[
                      2
                    ];
                    case 2:return t.sent(), l(), [
                      2
                    ]
                  }
                }))
              }))
            }, showInput:p, edit:function(t){
              v.value=t
            }, avatarUser:f
          }
        }
      });
      const Oe=(0, u.A)(Ge, (function(){
        var t=this, e=t.$createElement, s=t._self._c||e;
        return s("div", {
        }, [
          t.$featureToggles.courseEstimateWithoutScore?t._e():[
            s("div", {
              staticClass:"title-box"
            }, [
              s("div", {
                staticClass:"icon"
              }, [
                s("svg-icon", {
                  attrs:{
                    name:"estimates"
                  }
                }), t._v(" "), s("div", {
                  staticClass:"background-container"
                }), t._v(" "), s("div", {
                  staticClass:"background-container2"
                })
              ], 1), t._v(" "), s("span", {
                staticClass:"title"
              }, [
                t._v(t._s(t.$t("courseRating")))
              ])
            ]), t._v(" "), s("div", {
              staticClass:"flex score-box"
            }, [
              s("canvas", {
                attrs:{
                  id:"score-canvas", width:"300px", height:"230px"
                }
              }), t._v(" "), s("Star", {
                attrs:{
                  "course-id":t.courseId, "user-id":t.userId
                }
              }), t._v(" "), s("div", {
                staticClass:"lines"
              }, t._l(5, (function(e){
                return s("div", {
                  key:e, staticClass:"line"
                }, [
                  s("div", {
                    staticClass:"stars"
                  }, t._l(e, (function(t){
                    return s("i", {
                      key:t, staticClass:"font font-empty-star"
                    })
                  })), 0), t._v(" "), s("div", {
                    staticClass:"progress"
                  }, [
                    s("div", {
                      staticClass:"progress-bar", style:{
                        width:t.scoreMap[
                          e
                        ]
                        /t.totalScoreNum*100+"%"
                      }
                    })
                  ]), t._v(" "), s("div", [
                    t._v(t._s(t.scoreMap[
                      e
                    ]
                    ||0))
                  ])
                ])
              })), 0)
            ], 1)
          ], t._v(" "), s("div", {
            staticClass:"title-box"
          }, [
            s("div", {
              staticClass:"icon"
            }, [
              s("svg-icon", {
                attrs:{
                  name:"estimates"
                }
              }), t._v(" "), s("div", {
                staticClass:"background-container"
              }), t._v(" "), s("div", {
                staticClass:"background-container2"
              })
            ], 1), t._v(" "), s("span", {
              staticClass:"title"
            }, [
              t._v(t._s(t.$t("studentInteraction")))
            ])
          ]), t._v(" "), t.userId&&t.showInput?s("div", {
            staticClass:"input flex"
          }, [
            s("Avatar", {
              staticClass:"replyAvatar avatar", attrs:{
                user:t.avatarUser
              }
            }), t._v(" "), s("div", {
              staticClass:"w-full"
            }, [
              s("textarea", {
                directives:[
                  {
                    name:"model", rawName:"v-model", value:t.form.comment, expression:"form.comment"
                  }
                ], attrs:{
                  rows:"5", placeholder:t.$t("learningSpace.search.placeholder")
                }, domProps:{
                  value:t.form.comment
                }, on:{
                  input:function(e){
                    e.target.composing||t.$set(t.form, "comment", e.target.value)
                  }
                }
              }), t._v(" "), s("div", {
                staticClass:"flex items-center ratebox"
              }, [
                s("span", [
                  t._v(t._s(t.$t("estimateOfcourse")))
                ]), t._v(" "), t.$featureToggles.courseEstimateWithoutScore?t._e():s("Rate", {
                  staticClass:"rate", attrs:{
                    "custom-icon":"font\n        font-whole-star"
                  }, model:{
                    value:t.form.score, callback:function(e){
                      t.$set(t.form, "score", e)
                    }, expression:"form.score"
                  }
                }), t._v(" "), s("Button", {
                  staticClass:"ml-auto", attrs:{
                    type:"primary", size:"small"
                  }, on:{
                    click:t.submit
                  }
                }, [
                  t._v(t._s(t.$t("submitEstimate")))
                ])
              ], 1)
            ])
          ], 1):t._e(), t._v(" "), s("div", {
            staticClass:"replies"
          }, t._l(t.courseEstimates, (function(e){
            return s("Reply", {
              key:e.id, attrs:{
                "user-id":t.userId, item:e, replies:t.replyMap[
                  e.id
                ]
                ||[
                ]
              }, on:{
                edit:t.edit, delete:t.deleteReply
              }
            })
          })), 1)
        ], 2)
      }), [
      ], !1, null, "26bd28a6", null).exports;
      s(195755), s(215195), s(379432), s(107918);
      var Ke=s(819056), We=s(444425), Be=s(857327), Le=s(824072), qe=s(231950), Fe=s(945188), Ve=s(316989), He=s(303156), Ue=s(379960), ze=function(t, e, s, a){
        return new(s||(s=Promise))((function(n, i){
          function o(t){
            try{
              c(a.next(t))
            }
            catch(t){
              i(t)
            }
          }
          function r(t){
            try{
              c(a.throw(t))
            }
            catch(t){
              i(t)
            }
          }
          function c(t){
            var e;
            t.done?n(t.value):(e=t.value, e instanceof s?e:new s((function(t){
              t(e)
            }))).then(o, r)
          }
          c((a=a.apply(t, e||[
          ])).next())
        }))
      }, Je=function(t, e){
        var s, a, n, i, o={
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
          next:r(0), throw:r(1), return:r(2)
        }, "function"==typeof Symbol&&(i[
          Symbol.iterator
        ]
        =function(){
          return this
        }), i;
        function r(r){
          return function(c){
            return function(r){
              if(s)throw new TypeError("Generator is already executing.");
              for(;
              i&&(i=0, r[
                0
              ]
              &&(o=0)), o;
              )try{
                if(s=1, a&&(n=2&r[
                  0
                ]
                ?a.return:r[
                  0
                ]
                ?a.throw||((n=a.return)&&n.call(a), 0):a.next)&&!(n=n.call(a, r[
                  1
                ])).done)return n;
                switch(a=0, n&&(r=[
                  2&r[
                    0
                  ], n.value
                ]), r[
                  0
                ]){
                  case 0:case 1:n=r;
                  break;
                  case 4:return o.label++, {
                    value:r[
                      1
                    ], done:!1
                  };
                  case 5:o.label++, a=r[
                    1
                  ], r=[
                    0
                  ];
                  continue;
                  case 7:r=o.ops.pop(), o.trys.pop();
                  continue;
                  default:if(!(n=o.trys, (n=n.length>0&&n[
                    n.length-1
                  ])||6!==r[
                    0
                  ]
                  &&2!==r[
                    0
                  ])){
                    o=0;
                    continue
                  }
                  if(3===r[
                    0
                  ]
                  &&(!n||r[
                    1
                  ]
                  >n[
                    0
                  ]
                  &&r[
                    1
                  ]
                  <n[
                    3
                  ])){
                    o.label=r[
                      1
                    ];
                    break
                  }
                  if(6===r[
                    0
                  ]
                  &&o.label<n[
                    1
                  ]){
                    o.label=n[
                      1
                    ], n=r;
                    break
                  }
                  if(n&&o.label<n[
                    2
                  ]){
                    o.label=n[
                      2
                    ], o.ops.push(r);
                    break
                  }
                  n[
                    2
                  ]
                  &&o.ops.pop(), o.trys.pop();
                  continue
                }
                r=e.call(t, o)
              }
              catch(t){
                r=[
                  6, t
                ], a=0
              }
              finally{
                s=n=0
              }
              if(5&r[
                0
              ])throw r[
                1
              ];
              return{
                value:r[
                  0
                ]
                ?r[
                  1
                ]
                :void 0, done:!0
              }
            }
            ([
              r, c
            ])
          }
        }
      };
      const Qe=(0, i.pM)({
        props:{
          course:{
            type:Object, required:!0
          }, userId:Number, publishType:{
            type:String
          }, state:{
            type:Object, required:!0
          }
        }, components:{
          Wrapper:We.A, Board:Ke.A, ProblemCard:He.A, NoData:Ue.A, DetailButton:d
        }, setup:function(t){
          var e=this, s=(0, i.KR)(new Be.c), a=(0, i.KR)(), n=(0, i.KR)(), o=(0, i.KR)(), r=(0, i.KR)([
          ]), c=(0, i.KR)(), l=(0, i.KR)(!1), u=(0, i.KR)(), d=(0, i.KR)(new Be.c);
          (0, i.Gt)("canShowDetail", !1);
          var v=(0, i.EW)((function(){
            return"published"===t.publishType
          })), p=(0, i.EW)((function(){
            var e;
            return"enter"===(null===(e=t.state)||void 0===e?void 0:e.action)
          })), f=function(){
            var t;
            null===(t=a.value)||void 0===t||t.repaintEverything()
          };
          return(0, i.sV)((function(){
            return ze(e, void 0, void 0, (function(){
              var e, c;
              return Je(this, (function(l){
                switch(l.label){
                  case 0:return e=r, [
                    4, (0, nt.getKnowledgeNodeTrees)(t.course.id)
                  ];
                  case 1:return e.value=l.sent(), n.value?(a.value=(0, Le.UIf)({
                    container:n.value, dragOptions:{
                      trackScrollContainer:o.value
                    }
                  }), [
                    4, (0, Ct.eT)(t.course.id, !t.userId)
                  ]):[
                    2
                  ];
                  case 2:return c=l.sent(), s.value=Be.c.from(c), s.value.editable=!1, s.value.setInstance(a.value), ce.Nt.value=s.value, [
                    4, (0, i.dY)()
                  ];
                  case 3:return l.sent(), s.value.connect(), [
                    2
                  ]
                }
              }))
            }))
          })), {
            manager:s, instance:a, eleRef:n, wrapperRef:o, nodeTrees:r, clickItem:function(t){
              return ze(e, void 0, void 0, (function(){
                var e, n, o, r, u, v;
                return Je(this, (function(p){
                  switch(p.label){
                    case 0:return t.level!==Fe.$t.FIRST?[
                      2
                    ]
                    :(null===(v=a.value)||void 0===v||v.deleteEveryConnection(), c.value=t, e=s.value.getRelatedProblems(t).map((function(t){
                      return qe.AF.clone(t)
                    })), n=s.value.getRelationsByProblemIds(e.map((function(t){
                      return t.id
                    }))).map((function(t){
                      return qe.Ir.clone(t)
                    })), o=new Map, e.forEach((function(t){
                      var e;
                      o.has(t.level)||o.set(t.level, [
                      ]), t.relations=n.filter((function(e){
                        return e.isRelation(t.id)
                      })), null===(e=o.get(t.level))||void 0===e||e.push(t)
                    })), r=s.value.filter(Array.from(o.keys())).map((function(t){
                      var e=qe.mp.clone(t);
                      return e.problems=o.get(t.level)||[
                      ], e
                    })), (u=Be.c.from(r)).setInstance(a.value), d.value=u, [
                      4, (0, i.dY)()
                    ]);
                    case 1:return p.sent(), d.value.connect(), l.value=!0, [
                      2
                    ]
                  }
                }))
              }))
            }, enterItem:function(t){
              var e;
              if(!(t.version>0)){
                s.value.deactivate();
                var n=s.value.getRelatedProblems(t, t.version);
                0===n.length&&n.push(t), n.forEach((function(t){
                  return t.activated()
                }));
                var i=(0, Fe.kg)(n, 2).filter((function(t){
                  return 1===Math.abs(t[
                    0
                  ].level-t[
                    1
                  ].level)
                })).flatMap((function(t){
                  var e;
                  return(e=s.value).getConnections.apply(e, t)
                })).filter((function(t){
                  return!!t
                }));
                null===(e=a.value)||void 0===e||e.connections.forEach((function(t){
                  i.includes(t)?t.setPaintStyle({
                    stroke:"#3471d3", strokeWidth:3
                  }):t.setPaintStyle({
                    strokeWidth:1.5, stroke:"#3471d340"
                  })
                })), f()
              }
            }, leaveItem:function(){
              var t;
              s.value.deactivate(), null===(t=a.value)||void 0===t||t.connections.forEach((function(t){
                t.setPaintStyle({
                  strokeWidth:1.5, stroke:"#3471d3"
                })
              })), f()
            }, pathManager:d, getColors:Ve.j, showPath:l, pathRef:u, currentItem:c, goToProblemGraph:function(){
              if(p.value){
                var e="/course/".concat(t.course.id, "/knowledge-graph#/problem");
                localStorage.setItem("knowledgeGraphHash", "problem"), window.open(e, "_blank")
              }
            }, closeProblemPath:function(){
              var t;
              l.value=!1, null===(t=a.value)||void 0===t||t.deleteEveryConnection(), d.value=new Be.c, (0, i.dY)((function(){
                s.value.connect()
              }))
            }, isPublished:v, isJoined:p
          }
        }
      });
      const Ze=(0, u.A)(Qe, (function(){
        var t=this, e=t.$createElement, s=t._self._c||e;
        return s("div", [
          t.isPublished?s("div", {
            ref:"wrapperRef", staticClass:"problem-knowledge-wrapper"
          }, [
            s("div", {
              ref:"eleRef", staticClass:"problem-graph-container"
            }, [
              s("Wrapper", {
                directives:[
                  {
                    name:"show", rawName:"v-show", value:!t.showPath&&t.instance, expression:"!showPath && instance"
                  }
                ], class:{
                  "has-active":t.manager.hasActive()
                }
              }, t._l(t.manager, (function(e){
                return s("Board", {
                  key:e.id, attrs:{
                    data:e, manager:t.manager, editable:!1
                  }, on:{
                    "on-click-item":t.clickItem, "on-enter-item":t.enterItem, "on-leave-item":t.leaveItem
                  }
                })
              })), 1), t._v(" "), s("Wrapper", {
                directives:[
                  {
                    name:"show", rawName:"v-show", value:t.showPath, expression:"showPath"
                  }
                ], staticClass:"mh-100p", attrs:{
                  col:t.pathManager.length
                }
              }, t._l(t.pathManager, (function(e){
                return s("div", {
                  key:e.id, staticClass:"board"
                }, t._l(e.problems, (function(e){
                  return s("ProblemCard", {
                    key:e.id, attrs:{
                      colors:t.getColors(e.level), data:e, level:e.level, manager:t.pathManager, editable:!1, checkbox:!1
                    }
                  })
                })), 1)
              })), 0)
            ], 1), t._v(" "), t.showPath?s("div", {
              staticClass:"back", on:{
                click:t.closeProblemPath
              }
            }, [
              s("i", {
                staticClass:"font font-arrow-left-bold"
              }), t._v(" "), s("span", {
                staticClass:"text"
              }, [
                t._v(t._s(t.$t("goBack")))
              ])
            ]):t._e(), t._v(" "), s("DetailButton", {
              attrs:{
                "is-joined":t.isJoined, "on-click":t.goToProblemGraph
              }
            })
          ], 1):s("NoData", {
            staticClass:"no-data-wrapper"
          }, [
            t._v(t._s(t.$t("problemGraph.noDataTips")))
          ])
        ], 1)
      }), [
      ], !1, null, "c0b1a7b0", null).exports;
      const Ye=s.p+"assets/images/large/b33fbc2edf3eb4277c70.png", Xe=s.p+"assets/images/large/b0aa26a0e54ff489cd50.png";
      var ts=s(979278);
      const es=(0, i.pM)({
        components:{
          JoinButton:qt, Star:Nt, Statistics:xt, SvgIcon:ts.A
        }, name:"Theme5", props:{
          courseId:{
            type:Number, required:!0
          }, userId:{
            type:Number, required:!0
          }, courseInfo:{
            type:Object, required:!0
          }, visitCount:{
            type:Number, default:0
          }, instructorNames:{
            type:String, default:""
          }, state:{
            type:Object, required:!1, default:null
          }
        }, setup:function(t, e){
          var s=(0, i.KR)(!1), a=(0, i.EW)((function(){
            return t.courseInfo.cover?t.courseInfo.cover:Ye
          })), n=(0, i.EW)((function(){
            return{
              private:T.default.t("managementStat.privateCourse"), org:T.default.t("intraSchoolOpenCourse"), off_campus:T.default.t("massiveOnlineOpenCourse")
            }
            [
              t.courseInfo.publicScope
            ]
          })), o=(0, i.EW)((function(){
            var t;
            return null===(t=window.orgSettings)||void 0===t?void 0:t.hideShTechCourseType
          })), r=wt({
            courseId:t.courseId, userId:t.userId, knowledgeGraphPublishType:t.courseInfo.knowledgeGraphPublishType, problemGraphPublishType:t.courseInfo.problemGraphPublishType
          }), c=r.statInfo, l=r.knowledgeNodeStatisticsData, u=r.airConversationStats, d=r.problemCount, v=r.courseExtensionApps, p=r.competencyObjectiveStat, f=r.fetchCourseStats;
          return(0, i.sV)((function(){
            var t;
            (t=document.querySelector(".description"))&&setTimeout((function(){
              t.scrollHeight>t.clientHeight&&(s.value=!0)
            }), 0), f()
          })), {
            openDescModal:function(){
              e.emit("open-description-modal")
            }, showMoreDesc:s, hideShTechCourseType:o, courseCover:a, publicScope:n, statInfo:c, knowledgeNodeStatisticsData:l, airConversationStats:u, problemCount:d, courseExtensionApps:v, competencyObjectiveStat:p, cube:Xe
          }
        }
      });
      const ss=(0, u.A)(es, (function(){
        var t=this, e=t.$createElement, s=t._self._c||e;
        return s("div", {
          staticClass:"course-homepage-container"
        }, [
          s("div", {
            staticClass:"background-left"
          }), t._v(" "), s("div", {
            staticClass:"background-right"
          }), t._v(" "), s("div", {
            staticClass:"card-header"
          }, [
            s("div", {
              staticClass:"header-left"
            }, [
              s("svg-icon", {
                staticClass:"star", attrs:{
                  name:"little-star"
                }
              }), t._v(" "), s("TooltipExt", {
                staticClass:"course-title", attrs:{
                  text:t.courseInfo.name
                }
              }, [
                s("h1", {
                  staticClass:"title"
                }, [
                  t._v(t._s(t.courseInfo.name))
                ])
              ]), t._v(" "), s("svg-icon", {
                staticClass:"star", attrs:{
                  name:"little-star"
                }
              })
            ], 1), t._v(" "), s("div", {
              staticClass:"header-right"
            }, [
              t.courseInfo.id?s("join-button", {
                attrs:{
                  course:t.courseInfo, "user-id":t.userId, state:t.state
                }
              }):t._e()
            ], 1)
          ]), t._v(" "), s("div", {
            staticClass:"card-content-container"
          }, [
            s("div", {
              staticClass:"card-content-top"
            }, [
              s("div", {
                staticClass:"content-left"
              }, [
                s("div", {
                  staticClass:"course-info-container"
                }, [
                  s("div", {
                    staticClass:"course-info-title"
                  }, [
                    s("div", {
                      staticClass:"info-title"
                    }, [
                      t._v(t._s(t.$t("userStudio.baseInfo")))
                    ]), t._v(" "), s("div", {
                      staticClass:"info-area"
                    }, [
                      s("div", {
                        staticClass:"area-header"
                      }, [
                        s("div", {
                          staticClass:"tags"
                        }, [
                          t.hideShTechCourseType||null===t.courseInfo.compulsory?t._e():s("div", [
                            s("span", {
                              staticClass:"badge", class:{
                                compulsory:t.courseInfo.compulsory
                              }
                            }, [
                              t._v("\n                      "+t._s(t.courseInfo.compulsory?t.$t("courseList.compulsory"):t.$t("courseList.elective"))+"\n                    ")
                            ])
                          ]), t._v(" "), s("div", [
                            s("span", {
                              staticClass:"scope", class:[
                                t.courseInfo.publicScope
                              ]
                            }, [
                              t._v(t._s(t.publicScope))
                            ])
                          ])
                        ]), t._v(" "), s("div", {
                          staticClass:"rating"
                        }, [
                          s("Star", {
                            attrs:{
                              "course-id":t.courseId, "user-id":t.userId
                            }
                          })
                        ], 1), t._v(" "), s("div", {
                          staticClass:"join-count"
                        }, [
                          t.courseInfo.studentsCount?s("span", {
                            staticClass:"views"
                          }, [
                            s("i", {
                              staticClass:"font font-cl-double-student"
                            }), t._v("\n                    "+t._s(t.$t("courseHome.joinCount", [
                              t.courseInfo.studentsCount
                            ]))+"\n                  ")
                          ]):t._e()
                        ]), t._v(" "), s("div", {
                          staticClass:"views"
                        }, [
                          t.visitCount?s("span", {
                            staticClass:"views"
                          }, [
                            s("i", {
                              staticClass:"font font-resource-view"
                            }), t._v("\n                    "+t._s(t.visitCount)+" "+t._s(t.$t("studentStat.times"))+"\n                  ")
                          ]):t._e()
                        ])
                      ]), t._v(" "), s("div", {
                        staticClass:"course-divider"
                      }), t._v(" "), s("div", {
                        staticClass:"details"
                      }, [
                        s("div", {
                          staticClass:"detail-item"
                        }, [
                          s("div", {
                            staticClass:"detail-label"
                          }, [
                            t._v(t._s(t.$t("courseCode"))+":")
                          ]), t._v(" "), s("TooltipExt", {
                            staticClass:"text-ellipsis", attrs:{
                              text:t.courseInfo.courseCode
                            }
                          }), t._v(" "), s("div", {
                            staticClass:"detail-divider"
                          })
                        ], 1), t._v(" "), t.instructorNames?s("div", {
                          staticClass:"detail-item"
                        }, [
                          s("div", {
                            staticClass:"detail-label"
                          }, [
                            t._v(t._s(t.$t("alert.instructor"))+":")
                          ]), t._v(" "), s("TooltipExt", {
                            staticClass:"text-ellipsis", attrs:{
                              text:t.instructorNames
                            }
                          }), t._v(" "), s("div", {
                            staticClass:"detail-divider"
                          })
                        ], 1):t._e(), t._v(" "), t.courseInfo.department.name?s("div", {
                          staticClass:"detail-item"
                        }, [
                          s("div", {
                            staticClass:"detail-label"
                          }, [
                            t._v(t._s(t.$t("teachingTeam.department"))+":")
                          ]), t._v(" "), s("TooltipExt", {
                            staticClass:"text-ellipsis", attrs:{
                              text:t.courseInfo.department.name||"-"
                            }
                          }), t._v(" "), s("div", {
                            staticClass:"detail-divider"
                          })
                        ], 1):t._e(), t._v(" "), t.courseInfo.grade.name?s("div", {
                          staticClass:"detail-item"
                        }, [
                          s("div", {
                            staticClass:"detail-label"
                          }, [
                            t._v(t._s(t.$t("grade"))+":")
                          ]), t._v(" "), s("TooltipExt", {
                            staticClass:"text-ellipsis", attrs:{
                              text:t.courseInfo.grade.name||"-"
                            }
                          }), t._v(" "), s("div", {
                            staticClass:"detail-divider"
                          })
                        ], 1):t._e(), t._v(" "), t.courseInfo.courseClassification.name?s("div", {
                          staticClass:"detail-item"
                        }, [
                          s("div", {
                            staticClass:"detail-label"
                          }, [
                            t._v(t._s(t.$t("management.courseCategory"))+":")
                          ]), t._v(" "), s("TooltipExt", {
                            staticClass:"text-ellipsis", attrs:{
                              text:t.courseInfo.courseClassification.name||"-"
                            }
                          }), t._v(" "), s("div", {
                            staticClass:"detail-divider"
                          })
                        ], 1):t._e(), t._v(" "), t.courseInfo.klass.name?s("div", {
                          staticClass:"detail-item"
                        }, [
                          s("div", {
                            staticClass:"detail-label"
                          }, [
                            t._v(t._s(t.$t("teachingClass"))+":")
                          ]), t._v(" "), s("TooltipExt", {
                            staticClass:"text-ellipsis", attrs:{
                              text:t.courseInfo.klass.name||"-"
                            }
                          }), t._v(" "), s("div", {
                            staticClass:"detail-divider"
                          })
                        ], 1):t._e(), t._v(" "), s("span", {
                          staticClass:"date detail-item"
                        }, [
                          t._v("\n                  "+t._s(t.courseInfo.startDateDisplay)+"\n                  "), t.courseInfo.endDate?[
                            t._v("- "+t._s(t.courseInfo.endDateDisplay))
                          ]
                          :t._e(), t._v("\n                  "+t._s(t.$t("courseHome.startDate"))+"\n                ")
                        ], 2)
                      ])
                    ])
                  ])
                ])
              ]), t._v(" "), s("div", {
                staticClass:"content-right"
              }, [
                s("div", {
                  staticClass:"course-introduction-container"
                }, [
                  s("div", {
                    staticClass:"info-title"
                  }, [
                    t._v(t._s(t.$t("courseOutline.commentChinese")))
                  ]), t._v(" "), s("div", {
                    staticClass:"info-area"
                  }, [
                    s("span", {
                      staticClass:"description", domProps:{
                        innerHTML:t._s(t.courseInfo.classroomSchedule)
                      }
                    }), t._v(" "), t.showMoreDesc?s("a", {
                      staticClass:"view-all", attrs:{
                        href:"#"
                      }, on:{
                        click:t.openDescModal
                      }
                    }, [
                      t._v("\n              "+t._s(t.$t("viewAll"))+"\n              "), s("i", {
                        staticClass:"font font-arrow-right-middle"
                      })
                    ]):t._e()
                  ])
                ])
              ])
            ]), t._v(" "), s("div", {
              staticClass:"card-content-bottom"
            }, [
              s("div", {
                staticClass:"content-left"
              }, [
                s("div", {
                  staticClass:"stat-container"
                }, [
                  s("div", {
                    staticClass:"stat-items"
                  }, [
                    s("div", {
                      staticClass:"stat-item"
                    }, [
                      s("div", {
                        staticClass:"item-count"
                      }, [
                        s("div", {
                          staticClass:"stat-title"
                        }, [
                          t._v(t._s(t.$t("problemGraph.graph")))
                        ]), t._v(" "), s("div", {
                          staticClass:"stat-value"
                        }, [
                          t._v(t._s(t.problemCount))
                        ])
                      ]), t._v(" "), s("div", {
                        staticClass:"item-background"
                      }, [
                        s("img", {
                          staticClass:"cube", attrs:{
                            src:t.cube
                          }
                        }), t._v(" "), s("svg-icon", {
                          staticClass:"problem-graph", attrs:{
                            name:"problem-graph-solid-color"
                          }
                        })
                      ], 1)
                    ]), t._v(" "), s("div", {
                      staticClass:"stat-item"
                    }, [
                      s("div", {
                        staticClass:"item-count"
                      }, [
                        s("div", {
                          staticClass:"stat-title"
                        }, [
                          t._v(t._s(t.$t("knowledgeGraph.node")))
                        ]), t._v(" "), s("div", {
                          staticClass:"stat-value"
                        }, [
                          t._v(t._s(t.knowledgeNodeStatisticsData.nodeCount||0))
                        ])
                      ]), t._v(" "), s("div", {
                        staticClass:"item-background"
                      }, [
                        s("img", {
                          staticClass:"cube", attrs:{
                            src:t.cube
                          }
                        }), t._v(" "), s("svg-icon", {
                          staticClass:"knowledge-points", attrs:{
                            name:"knowledge-point-solid-color"
                          }
                        })
                      ], 1)
                    ]), t._v(" "), s("div", {
                      staticClass:"stat-item"
                    }, [
                      s("div", {
                        staticClass:"item-count"
                      }, [
                        s("div", {
                          staticClass:"stat-title"
                        }, [
                          t._v(t._s(t.$t("air.courseResources")))
                        ]), t._v(" "), s("div", {
                          staticClass:"stat-value"
                        }, [
                          t._v(t._s(t.statInfo.publishedActivityCount||0))
                        ])
                      ]), t._v(" "), s("div", {
                        staticClass:"item-background"
                      }, [
                        s("img", {
                          staticClass:"cube", attrs:{
                            src:t.cube
                          }
                        }), t._v(" "), s("svg-icon", {
                          staticClass:"teaching-resource", attrs:{
                            name:"teaching-resource-solid-color"
                          }
                        })
                      ], 1)
                    ])
                  ]), t._v(" "), s("div", {
                    staticClass:"stat-items"
                  }, [
                    s("div", {
                      staticClass:"stat-item"
                    }, [
                      s("div", {
                        staticClass:"item-count"
                      }, [
                        s("div", {
                          staticClass:"stat-title"
                        }, [
                          t._v(t._s(t.$t("air.competencyObjectives")))
                        ]), t._v(" "), s("div", {
                          staticClass:"stat-value"
                        }, [
                          t._v("\n                  "+t._s(t.competencyObjectiveStat&&t.competencyObjectiveStat.competency_objective_count?t.competencyObjectiveStat.competency_objective_count:0)+"\n                ")
                        ])
                      ]), t._v(" "), s("div", {
                        staticClass:"item-background"
                      }, [
                        s("img", {
                          staticClass:"cube", attrs:{
                            src:t.cube
                          }
                        }), t._v(" "), s("svg-icon", {
                          staticClass:"bility-goal", attrs:{
                            name:"bility-goal-solid-color"
                          }
                        })
                      ], 1)
                    ]), t._v(" "), s("div", {
                      staticClass:"stat-item"
                    }, [
                      s("div", {
                        staticClass:"item-count"
                      }, [
                        s("div", {
                          staticClass:"stat-title"
                        }, [
                          t._v(t._s(t.$t("air.aiInteractiveUse")))
                        ]), t._v(" "), s("div", {
                          staticClass:"stat-value"
                        }, [
                          t._v(t._s(t.airConversationStats.totalQuestions||0))
                        ])
                      ]), t._v(" "), s("div", {
                        staticClass:"item-background"
                      }, [
                        s("img", {
                          staticClass:"cube", attrs:{
                            src:t.cube
                          }
                        }), t._v(" "), s("svg-icon", {
                          staticClass:"ai-interactive", attrs:{
                            name:"ai-interactive-solid-color"
                          }
                        })
                      ], 1)
                    ]), t._v(" "), s("div", {
                      staticClass:"stat-item"
                    }, [
                      s("div", {
                        staticClass:"item-count"
                      }, [
                        s("div", {
                          staticClass:"stat-title"
                        }, [
                          t._v(t._s(t.$t("air.agent")))
                        ]), t._v(" "), s("div", {
                          staticClass:"stat-value"
                        }, [
                          t._v(t._s(t.courseExtensionApps.length||0))
                        ])
                      ]), t._v(" "), s("div", {
                        staticClass:"item-background"
                      }, [
                        s("img", {
                          staticClass:"cube", attrs:{
                            src:t.cube
                          }
                        }), t._v(" "), s("svg-icon", {
                          staticClass:"agent", attrs:{
                            name:"agent-solid-color"
                          }
                        })
                      ], 1)
                    ])
                  ])
                ])
              ]), t._v(" "), s("div", {
                staticClass:"content-right"
              }, [
                s("div", {
                  staticClass:"illustration-container"
                }, [
                  s("img", {
                    staticClass:"illustration-img", attrs:{
                      src:t.courseCover, alt:""
                    }
                  })
                ])
              ])
            ])
          ])
        ])
      }), [
      ], !1, null, "f2aac498", null).exports;
      const as=s.p+"assets/images/large/dcec122515d21ef2c87f.png", ns=(0, i.pM)({
        components:{
          Star:Nt, JoinButton:qt
        }, name:"Theme3", props:{
          courseId:{
            type:Number, required:!0
          }, userId:{
            type:Number, required:!0
          }, courseInfo:{
            type:Object, required:!0
          }, visitCount:{
            type:Number, default:0
          }, instructorNames:{
            type:String, default:""
          }, state:{
            type:Object, required:!1, default:null
          }
        }, setup:function(t, e){
          var s=(0, i.KR)(!1), a=(0, i.EW)((function(){
            return{
              private:T.default.t("managementStat.privateCourse"), org:T.default.t("intraSchoolOpenCourse"), off_campus:T.default.t("massiveOnlineOpenCourse")
            }
            [
              t.courseInfo.publicScope
            ]
          })), n=(0, i.EW)((function(){
            var e=t.courseInfo.startDateDisplay;
            return t.courseInfo.endDate?"".concat(e, " - ").concat(t.courseInfo.endDateDisplay, " ").concat(T.default.t("courseHome.startDate")):"".concat(e, " ").concat(T.default.t("courseHome.startDate"))
          })), o=wt({
            courseId:t.courseId, userId:t.userId, knowledgeGraphPublishType:t.courseInfo.knowledgeGraphPublishType, problemGraphPublishType:t.courseInfo.problemGraphPublishType
          }), r=o.statInfo, c=o.knowledgeNodeStatisticsData, l=o.airConversationStats, u=o.problemCount, d=o.courseExtensionApps, v=o.competencyObjectiveStat, p=o.fetchCourseStats, f=(0, i.EW)((function(){
            return t.courseInfo.cover?t.courseInfo.cover:as
          }));
          (0, i.sV)((function(){
            var t;
            (t=document.querySelector(".description"))&&setTimeout((function(){
              t.scrollHeight>t.clientHeight&&(s.value=!0)
            }), 0), p()
          }));
          var m=(0, i.EW)((function(){
            var t;
            return null===(t=window.orgSettings)||void 0===t?void 0:t.hideShTechCourseType
          }));
          return{
            courseTimeText:n, openDescModal:function(){
              e.emit("open-description-modal")
            }, statInfo:r, knowledgeNodeStatisticsData:c, airConversationStats:l, problemCount:u, courseExtensionApps:d, competencyObjectiveStat:v, showMoreDesc:s, courseCover:f, publicScope:a, hideShTechCourseType:m
          }
        }
      });
      const is=(0, u.A)(ns, (function(){
        var t=this, e=t.$createElement, s=t._self._c||e;
        return s("div", {
          staticClass:"course-detail-card"
        }, [
          s("header", {
            staticClass:"card-header"
          }, [
            s("div", {
              staticClass:"header-left"
            }, [
              s("TooltipExt", {
                staticClass:"course-title", attrs:{
                  text:t.courseInfo.name
                }
              }, [
                s("h1", {
                  staticClass:"title"
                }, [
                  t._v(t._s(t.courseInfo.name))
                ])
              ]), t._v(" "), s("div", {
                staticClass:"tag-wrap"
              }, [
                s("div", {
                  staticClass:"tags"
                }, [
                  t.hideShTechCourseType||null===t.courseInfo.compulsory?t._e():s("span", {
                    staticClass:"badge", class:{
                      compulsory:t.courseInfo.compulsory
                    }
                  }, [
                    t._v("\n            "+t._s(t.courseInfo.compulsory?t.$t("courseList.compulsory"):t.$t("courseList.elective"))+"\n          ")
                  ]), t._v(" "), s("span", {
                    staticClass:"scope", class:[
                      t.courseInfo.publicScope
                    ]
                  }, [
                    t._v(t._s(t.publicScope))
                  ])
                ]), t._v(" "), s("div", {
                  staticClass:"rating"
                }, [
                  s("Star", {
                    attrs:{
                      "course-id":t.courseId, "user-id":t.userId
                    }
                  })
                ], 1), t._v(" "), t.visitCount?s("div", {
                  staticClass:"views"
                }, [
                  s("i", {
                    staticClass:"font font-resource-view"
                  }), t._v(" "), s("span", {
                    staticClass:"view-value"
                  }, [
                    t._v(t._s(t.visitCount)+" "+t._s(t.$t("studentStat.times")))
                  ])
                ]):t._e()
              ])
            ], 1), t._v(" "), s("div", {
              staticClass:"header-right"
            }, [
              t.courseInfo.id?s("join-button", {
                attrs:{
                  course:t.courseInfo, "user-id":t.userId, state:t.state
                }
              }):t._e()
            ], 1)
          ]), t._v(" "), s("div", {
            staticClass:"course-meta"
          }, [
            s("TooltipExt", {
              staticClass:"meta-item code", attrs:{
                text:t.courseInfo.courseCode
              }
            }, [
              s("span", [
                t._v(t._s(t.courseInfo.courseCode))
              ])
            ]), t._v(" "), s("TooltipExt", {
              staticClass:"meta-item instructor", attrs:{
                text:t.instructorNames
              }
            }, [
              s("span", [
                t._v(t._s(t.instructorNames))
              ])
            ]), t._v(" "), s("TooltipExt", {
              staticClass:"meta-item", attrs:{
                text:t.$t("courseHome.joinCount", [
                  t.courseInfo.studentsCount
                ])
              }
            }, [
              s("span", [
                t._v(t._s(t.$t("courseHome.joinCount", [
                  t.courseInfo.studentsCount
                ])))
              ])
            ]), t._v(" "), t.courseInfo.department.name?s("TooltipExt", {
              staticClass:"meta-item department", attrs:{
                text:t.courseInfo.department.name
              }
            }, [
              s("span", [
                t._v(t._s(t.courseInfo.department.name))
              ])
            ]):t._e(), t._v(" "), t.courseInfo.grade.name?s("TooltipExt", {
              staticClass:"meta-item grade", attrs:{
                text:t.courseInfo.grade.name
              }
            }, [
              s("span", [
                t._v(t._s(t.courseInfo.grade.name))
              ])
            ]):t._e(), t._v(" "), t.courseInfo.klass.name?s("TooltipExt", {
              staticClass:"meta-item klass", attrs:{
                text:t.courseInfo.klass.name
              }
            }, [
              s("span", [
                t._v(t._s(t.courseInfo.klass.name))
              ])
            ]):t._e(), t._v(" "), t.courseInfo.courseClassification.name?s("TooltipExt", {
              staticClass:"meta-item category", attrs:{
                text:t.courseInfo.courseClassification.name
              }
            }, [
              s("span", [
                t._v(t._s(t.courseInfo.courseClassification.name))
              ])
            ]):t._e(), t._v(" "), s("TooltipExt", {
              staticClass:"meta-item", attrs:{
                text:t.courseTimeText
              }
            }, [
              s("span", [
                t._v("\n        "+t._s(t.courseTimeText)+"\n      ")
              ])
            ])
          ], 1), t._v(" "), s("p", {
            staticClass:"description", domProps:{
              innerHTML:t._s(t.courseInfo.classroomSchedule)
            }
          }), t._v(" "), t.showMoreDesc?s("a", {
            staticClass:"view-all", attrs:{
              href:"#"
            }, on:{
              click:t.openDescModal
            }
          }, [
            t._v("\n    "+t._s(t.$t("viewAll"))+"\n    "), s("i", {
              staticClass:"font font-arrow-right-middle"
            })
          ]):t._e(), t._v(" "), s("main", {
            staticClass:"card-body"
          }, [
            s("div", {
              staticClass:"illustration-container"
            }, [
              s("img", {
                staticClass:"illustration-img", attrs:{
                  src:t.courseCover, alt:""
                }
              })
            ]), t._v(" "), s("div", {
              staticClass:"stats-grid"
            }, [
              s("div", {
                staticClass:"stat-item bg-orange"
              }, [
                s("div", {
                  staticClass:"icon-wrapper"
                }, [
                  s("svg-icon", {
                    staticClass:"svg-icon", attrs:{
                      name:"statistic-problem-graph"
                    }
                  })
                ], 1), t._v(" "), s("div", {
                  staticClass:"stat-content"
                }, [
                  s("span", {
                    staticClass:"stat-title"
                  }, [
                    t._v(t._s(t.$t("problemGraph.graph")))
                  ]), t._v(" "), s("span", {
                    staticClass:"stat-value"
                  }, [
                    t._v(t._s(t.problemCount))
                  ])
                ])
              ]), t._v(" "), s("div", {
                staticClass:"stat-item bg-blue"
              }, [
                s("div", {
                  staticClass:"icon-wrapper"
                }, [
                  s("svg-icon", {
                    staticClass:"svg-icon", attrs:{
                      name:"knowledge-point"
                    }
                  })
                ], 1), t._v(" "), s("div", {
                  staticClass:"stat-content"
                }, [
                  s("span", {
                    staticClass:"stat-title"
                  }, [
                    t._v(t._s(t.$t("knowledgeGraph.node")))
                  ]), t._v(" "), s("span", {
                    staticClass:"stat-value"
                  }, [
                    t._v(t._s(t.knowledgeNodeStatisticsData.nodeCount||0))
                  ])
                ])
              ]), t._v(" "), s("div", {
                staticClass:"stat-item bg-cyan"
              }, [
                s("div", {
                  staticClass:"icon-wrapper"
                }, [
                  s("svg-icon", {
                    staticClass:"svg-icon", attrs:{
                      name:"teaching-resource"
                    }
                  })
                ], 1), t._v(" "), s("div", {
                  staticClass:"stat-content"
                }, [
                  s("span", {
                    staticClass:"stat-title"
                  }, [
                    t._v(t._s(t.$t("air.courseResources")))
                  ]), t._v(" "), s("span", {
                    staticClass:"stat-value"
                  }, [
                    t._v(t._s(t.statInfo.publishedActivityCount||0))
                  ])
                ])
              ]), t._v(" "), s("div", {
                staticClass:"stat-item bg-red"
              }, [
                s("div", {
                  staticClass:"icon-wrapper"
                }, [
                  s("svg-icon", {
                    staticClass:"svg-icon", attrs:{
                      name:"bility-goal"
                    }
                  })
                ], 1), t._v(" "), s("div", {
                  staticClass:"stat-content"
                }, [
                  s("span", {
                    staticClass:"stat-title"
                  }, [
                    t._v(t._s(t.$t("air.competencyObjectives")))
                  ]), t._v(" "), s("span", {
                    staticClass:"stat-value"
                  }, [
                    t._v("\n            "+t._s(t.competencyObjectiveStat&&t.competencyObjectiveStat.competency_objective_count?t.competencyObjectiveStat.competency_objective_count:0)+"\n          ")
                  ])
                ])
              ]), t._v(" "), s("div", {
                staticClass:"stat-item bg-green"
              }, [
                s("div", {
                  staticClass:"icon-wrapper"
                }, [
                  s("svg-icon", {
                    staticClass:"svg-icon", attrs:{
                      name:"ai-interactive"
                    }
                  })
                ], 1), t._v(" "), s("div", {
                  staticClass:"stat-content"
                }, [
                  s("span", {
                    staticClass:"stat-title"
                  }, [
                    t._v(t._s(t.$t("air.aiInteractiveUse")))
                  ]), t._v(" "), s("span", {
                    staticClass:"stat-value"
                  }, [
                    t._v(t._s(t.airConversationStats.totalQuestions||0))
                  ])
                ])
              ]), t._v(" "), s("div", {
                staticClass:"stat-item bg-purple"
              }, [
                s("div", {
                  staticClass:"icon-wrapper"
                }, [
                  s("svg-icon", {
                    staticClass:"svg-icon", attrs:{
                      name:"agent"
                    }
                  })
                ], 1), t._v(" "), s("div", {
                  staticClass:"stat-content"
                }, [
                  s("span", {
                    staticClass:"stat-title"
                  }, [
                    t._v(t._s(t.$t("air.agent")))
                  ]), t._v(" "), s("span", {
                    staticClass:"stat-value"
                  }, [
                    t._v(t._s(t.courseExtensionApps.length||0))
                  ])
                ])
              ])
            ])
          ])
        ])
      }), [
      ], !1, null, "53432ed8", null).exports;
      var os=s(199488);
      const rs=s.p+"assets/js/vue/views/course/info/ece4082359b9f2c09d2f.lottie";
      var cs=function(t, e, s, a){
        return new(s||(s=Promise))((function(n, i){
          function o(t){
            try{
              c(a.next(t))
            }
            catch(t){
              i(t)
            }
          }
          function r(t){
            try{
              c(a.throw(t))
            }
            catch(t){
              i(t)
            }
          }
          function c(t){
            var e;
            t.done?n(t.value):(e=t.value, e instanceof s?e:new s((function(t){
              t(e)
            }))).then(o, r)
          }
          c((a=a.apply(t, e||[
          ])).next())
        }))
      }, ls=function(t, e){
        var s, a, n, i, o={
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
          next:r(0), throw:r(1), return:r(2)
        }, "function"==typeof Symbol&&(i[
          Symbol.iterator
        ]
        =function(){
          return this
        }), i;
        function r(r){
          return function(c){
            return function(r){
              if(s)throw new TypeError("Generator is already executing.");
              for(;
              i&&(i=0, r[
                0
              ]
              &&(o=0)), o;
              )try{
                if(s=1, a&&(n=2&r[
                  0
                ]
                ?a.return:r[
                  0
                ]
                ?a.throw||((n=a.return)&&n.call(a), 0):a.next)&&!(n=n.call(a, r[
                  1
                ])).done)return n;
                switch(a=0, n&&(r=[
                  2&r[
                    0
                  ], n.value
                ]), r[
                  0
                ]){
                  case 0:case 1:n=r;
                  break;
                  case 4:return o.label++, {
                    value:r[
                      1
                    ], done:!1
                  };
                  case 5:o.label++, a=r[
                    1
                  ], r=[
                    0
                  ];
                  continue;
                  case 7:r=o.ops.pop(), o.trys.pop();
                  continue;
                  default:if(!(n=o.trys, (n=n.length>0&&n[
                    n.length-1
                  ])||6!==r[
                    0
                  ]
                  &&2!==r[
                    0
                  ])){
                    o=0;
                    continue
                  }
                  if(3===r[
                    0
                  ]
                  &&(!n||r[
                    1
                  ]
                  >n[
                    0
                  ]
                  &&r[
                    1
                  ]
                  <n[
                    3
                  ])){
                    o.label=r[
                      1
                    ];
                    break
                  }
                  if(6===r[
                    0
                  ]
                  &&o.label<n[
                    1
                  ]){
                    o.label=n[
                      1
                    ], n=r;
                    break
                  }
                  if(n&&o.label<n[
                    2
                  ]){
                    o.label=n[
                      2
                    ], o.ops.push(r);
                    break
                  }
                  n[
                    2
                  ]
                  &&o.ops.pop(), o.trys.pop();
                  continue
                }
                r=e.call(t, o)
              }
              catch(t){
                r=[
                  6, t
                ], a=0
              }
              finally{
                s=n=0
              }
              if(5&r[
                0
              ])throw r[
                1
              ];
              return{
                value:r[
                  0
                ]
                ?r[
                  1
                ]
                :void 0, done:!0
              }
            }
            ([
              r, c
            ])
          }
        }
      };
      n.j.setWasmUrl(f), (0, a.kz)();
      const us=(0, i.pM)({
        components:{
          JoinButton:qt, Star:Nt, Statistics:xt
        }, name:"Theme1", props:{
          courseId:{
            type:Number, required:!0
          }, courseInfo:{
            type:Object, required:!0
          }, userId:{
            type:Number, required:!0
          }, state:{
            type:Object, required:!1, default:null
          }, instructorNames:{
            type:String, default:""
          }, visitCount:{
            type:Number, required:!1
          }
        }, setup:function(t, e){
          var s=this, a=(0, i.KR)([
          ]), o=(0, i.KR)(!1), c=(0, i.KR)(!1), l=(0, i.KR)(!1), u=(0, i.EW)((function(){
            return t.courseInfo.cover?t.courseInfo.cover:r
          }));
          (0, i.sV)((function(){
            var e;
            (e=document.querySelector(".description"))&&(setTimeout((function(){
              e.scrollHeight>e.clientHeight&&(o.value=!0)
            }), 0), t.courseInfo&&t.courseInfo.creditState&&t.courseInfo.creditState.creditRemaining>0&&"active"===t.courseInfo.creditState.status&&(c.value=!0)), new n.j({
              autoplay:!0, loop:!0, canvas:document.querySelector("#bg"), src:rs
            })
          }));
          var d=sessionStorage.getItem("prevCoursePortalUrl"), v=(0, i.EW)((function(){
            return{
              private:T.default.t("managementStat.privateCourse"), org:T.default.t("intraSchoolOpenCourse"), off_campus:T.default.t("massiveOnlineOpenCourse")
            }
            [
              t.courseInfo.publicScope
            ]
          }));
          (0, m.j7)(t.courseId, !t.userId).then((function(e){
            return cs(s, void 0, void 0, (function(){
              var s, n, i;
              return ls(this, (function(o){
                switch(o.label){
                  case 0:return s=t.userId?"api":"anonymous-api", (n=e[
                    0
                  ])?(i=n.videos.map((function(t){
                    return{
                      src:"/".concat(s, "/uploads/video/").concat(t.id, "?preview=true&upload_reference_id=0&is_simulating_instructor=false"), label:t.resolution, type:"video/mp4"
                    }
                  })), a.value=[
                    {
                      sources:i, mute:!1, volume:.7, type:"video/mp4"
                    }
                  ], [
                    4, (0, os.A)()
                  ]):[
                    2
                  ];
                  case 1:return new(0, o.sent().WgVideoPlayer)("video-player", {
                    videos:a.value, autoPlay:!0, mode:"replay", defaultErr:!0, plugins:[
                    ]
                  }, {
                  }), [
                    2
                  ]
                }
              }))
            }))
          }));
          var p=(0, i.EW)((function(){
            var t;
            return null===(t=window.orgSettings)||void 0===t?void 0:t.hideShTechCourseType
          })), f=(0, i.EW)((function(){
            return a.value.length+t.courseInfo.coursePictures.length
          })), _=(0, i.EW)((function(){
            return window.orgSettings.splitDepartmentsAndGradesAndHideClasses||!1
          }));
          return{
            openDescModal:function(){
              e.emit("open-description-modal")
            }, prevPage:d, goBack:function(){
              d&&(window.location.href=d)
            }, swap:l, showMoreDesc:o, showAirTag:c, hideShTechCourseType:p, customSliderCount:f, videos:a, courseCover:u, publicScope:v, hideClasses:_
          }
        }
      });
      const ds=(0, u.A)(us, (function(){
        var t=this, e=t.$createElement, s=t._self._c||e;
        return s("div", [
          s("section", {
            staticClass:"detail gradient-background overflow-hidden", class:[
              t.swap?"swap":"!swap"
            ]
          }, [
            s("div", {
              staticClass:"course-info"
            }, [
              s("TooltipExt", {
                staticClass:"title", attrs:{
                  text:t.courseInfo.name
                }
              }, [
                s("h1", {
                  staticClass:"title"
                }, [
                  t._v(t._s(t.courseInfo.name))
                ])
              ]), t._v(" "), s("div", {
                staticClass:"meta"
              }, [
                t.hideShTechCourseType||null===t.courseInfo.compulsory?t._e():s("div", [
                  s("span", {
                    staticClass:"badge", class:{
                      compulsory:t.courseInfo.compulsory
                    }
                  }, [
                    t._v("\n            "+t._s(t.courseInfo.compulsory?t.$t("courseList.compulsory"):t.$t("courseList.elective"))+"\n          ")
                  ])
                ]), t._v(" "), s("div", [
                  s("span", {
                    staticClass:"scope", class:[
                      t.courseInfo.publicScope
                    ]
                  }, [
                    t._v(t._s(t.publicScope))
                  ])
                ]), t._v(" "), s("Star", {
                  attrs:{
                    "course-id":t.courseId, "user-id":t.userId
                  }
                }), t._v(" "), t.visitCount?s("div", [
                  s("span", {
                    staticClass:"views"
                  }, [
                    s("i", {
                      staticClass:"font font-resource-view"
                    }), t._v("\n            "+t._s(t.visitCount)+" "+t._s(t.$t("studentStat.times"))+"\n          ")
                  ])
                ]):t._e()
              ], 1), t._v(" "), s("div", {
                staticClass:"tags"
              }, [
                s("span", {
                  staticClass:"tag"
                }, [
                  s("Tooltip", {
                    attrs:{
                      content:t.$t("teachingTeam.department"), placement:"top"
                    }
                  }, [
                    s("i", {
                      staticClass:"font font-department"
                    })
                  ]), t._v(" "), s("TooltipExt", {
                    attrs:{
                      text:t.courseInfo.department.name||"-"
                    }
                  }, [
                    s("span", [
                      t._v("\n              "+t._s(t.courseInfo.department.name||"-")+"\n            ")
                    ])
                  ])
                ], 1), t._v(" "), s("span", {
                  staticClass:"tag"
                }, [
                  s("Tooltip", {
                    attrs:{
                      content:t.$t("course_classification"), placement:"top"
                    }
                  }, [
                    s("i", {
                      staticClass:"font font-course-info"
                    })
                  ]), t._v(" "), s("TooltipExt", {
                    attrs:{
                      text:t.courseInfo.courseClassification.name||"-"
                    }
                  }, [
                    s("span", [
                      t._v("\n              "+t._s(t.courseInfo.courseClassification.name||"-")+"\n            ")
                    ])
                  ])
                ], 1), t._v(" "), s("span", {
                  staticClass:"tag"
                }, [
                  s("Tooltip", {
                    attrs:{
                      content:t.$t("Instructor"), placement:"top"
                    }
                  }, [
                    s("i", {
                      staticClass:"font font-teacher"
                    })
                  ]), t._v(" "), s("TooltipExt", {
                    attrs:{
                      text:t.instructorNames
                    }
                  }, [
                    s("span", [
                      t._v("\n              "+t._s(t.instructorNames)+"\n            ")
                    ])
                  ])
                ], 1)
              ]), t._v(" "), s("p", {
                staticClass:"description", domProps:{
                  innerHTML:t._s(t.courseInfo.classroomSchedule)
                }
              }), t._v(" "), t.showMoreDesc?s("a", {
                staticClass:"view-all", attrs:{
                  href:"#"
                }, on:{
                  click:t.openDescModal
                }
              }, [
                t._v("\n        "+t._s(t.$t("viewAll"))+"\n        "), s("i", {
                  staticClass:"font font-arrow-right-middle"
                })
              ]):t._e(), t._v(" "), s("div", {
                staticClass:"details"
              }, [
                s("div", {
                  staticClass:"detail-item"
                }, [
                  s("div", {
                    staticClass:"detail-label"
                  }, [
                    t._v(t._s(t.$t("learningAnalysis.note.activities.forum.attendanceCount"))+":")
                  ]), t._v(" "), s("div", [
                    t._v(t._s(t.courseInfo.studentsCount))
                  ])
                ]), t._v(" "), s("div", {
                  staticClass:"detail-item"
                }, [
                  s("div", {
                    staticClass:"detail-label"
                  }, [
                    t._v(t._s(t.$t("courseCode"))+":")
                  ]), t._v(" "), s("TooltipExt", {
                    staticClass:"text-ellipsis", attrs:{
                      text:t.courseInfo.courseCode
                    }
                  })
                ], 1), t._v(" "), t.courseInfo.grade.name?s("div", {
                  staticClass:"detail-item"
                }, [
                  s("div", {
                    staticClass:"detail-label"
                  }, [
                    t._v(t._s(t.$t("grade"))+":")
                  ]), t._v(" "), s("TooltipExt", {
                    staticClass:"text-ellipsis", attrs:{
                      text:t.courseInfo.grade.name||"-"
                    }
                  })
                ], 1):t._e(), t._v(" "), t.courseInfo.credit?s("div", {
                  staticClass:"detail-item"
                }, [
                  s("div", {
                    staticClass:"detail-label"
                  }, [
                    t._v(t._s(t.$t("credit"))+":")
                  ]), t._v(" "), s("div", {
                    staticClass:"text-ellipsis"
                  }, [
                    t._v(t._s(t.courseInfo.credit||"-")+" "+t._s(t.$t("subject.point")))
                  ])
                ]):t._e(), t._v(" "), !t.hideClasses&&t.courseInfo.klass.name?s("div", {
                  staticClass:"detail-item"
                }, [
                  s("div", {
                    staticClass:"detail-label"
                  }, [
                    t._v(t._s(t.$t("teachingClass"))+":")
                  ]), t._v(" "), s("TooltipExt", {
                    staticClass:"text-ellipsis", attrs:{
                      text:t.courseInfo.klass.name||"-"
                    }
                  })
                ], 1):t._e(), t._v(" "), s("div", {
                  staticClass:"detail-item"
                }, [
                  s("div", {
                    staticClass:"detail-label"
                  }, [
                    t._v(t._s(t.$t("userProfile.course.beginTime"))+":")
                  ]), t._v(" "), s("div", {
                    staticClass:"text-ellipsis"
                  }, [
                    t._v("\n            "+t._s(t.courseInfo.startDateDisplay)+"\n            "), t.courseInfo.endDate?[
                      t._v("- "+t._s(t.courseInfo.endDateDisplay))
                    ]
                    :t._e()
                  ], 2)
                ])
              ]), t._v(" "), s("div", {
                staticClass:"actions"
              }, [
                t.courseInfo.id?s("join-button", {
                  attrs:{
                    course:t.courseInfo, "user-id":t.userId, state:t.state
                  }
                }):t._e(), t._v(" "), t.$featureToggles.shareCourseTw?s("div", {
                  staticClass:"share"
                }, [
                  s("span", [
                    t._v(t._s(t.$t("share")))
                  ]), t._v(" "), t._m(0), t._v(" "), t._m(1)
                ]):t._e()
              ], 1)
            ], 1), t._v(" "), s("div", {
              staticClass:"course-image"
            }, [
              s("canvas", {
                attrs:{
                  id:"bg", width:"900px", height:"650px"
                }
              }), t._v(" "), s("div", {
                staticClass:"image"
              }, [
                s("div", {
                  directives:[
                    {
                      name:"show", rawName:"v-show", value:t.customSliderCount>0, expression:"customSliderCount > 0"
                    }
                  ], staticClass:"swiper-button-prev"
                }, [
                  t.swap?s("svg-icon", {
                    attrs:{
                      name:"left-arrow-shadow"
                    }
                  }):s("i", {
                    staticClass:"font font-arrow-left"
                  })
                ], 1), t._v(" "), s("div", {
                  directives:[
                    {
                      name:"show", rawName:"v-show", value:t.customSliderCount>0, expression:"customSliderCount > 0"
                    }
                  ], staticClass:"swiper-button-next"
                }, [
                  t.swap?s("svg-icon", {
                    attrs:{
                      name:"left-arrow-shadow"
                    }
                  }):s("i", {
                    staticClass:"font font-arrow-right"
                  })
                ], 1), t._v(" "), s("swiper-container", {
                  staticClass:"swiper gallery-top", attrs:{
                    "slides-per-view":1, "space-between":10, navigation:!0, "navigation-next-el":".swiper-button-next", "navigation-prev-el":".swiper-button-prev"
                  }
                }, [
                  t.videos.length>0?s("swiper-slide", [
                    s("div", {
                      staticClass:"player-content h-full", attrs:{
                        id:"video-player"
                      }
                    })
                  ]):t._e(), t._v(" "), t._l(t.courseInfo.coursePictures, (function(t){
                    return s("swiper-slide", {
                      key:t.url
                    }, [
                      s("img", {
                        attrs:{
                          src:t.url, alt:""
                        }
                      })
                    ])
                  })), t._v(" "), 0===t.customSliderCount?s("swiper-slide", [
                    s("img", {
                      attrs:{
                        src:t.courseCover, alt:""
                      }
                    })
                  ]):t._e()
                ], 2)
              ], 1)
            ])
          ]), t._v(" "), t.prevPage?s("div", {
            staticClass:"back", on:{
              click:t.goBack
            }
          }, [
            s("i", {
              staticClass:"font font-arrow-left"
            }), t._v("\n    "+t._s(t.$t("goBack"))+"\n  ")
          ]):t._e(), t._v(" "), s("section", {
            staticClass:"stat"
          }, [
            t.courseInfo.id?s("Statistics", {
              attrs:{
                "course-id":t.courseId, "user-id":t.userId, "knowledge-graph-publish-type":t.courseInfo.knowledgeGraphPublishType, "problem-graph-publish-type":t.courseInfo.problemGraphPublishType, "course-info":t.courseInfo
              }
            }):t._e()
          ], 1)
        ])
      }), [
        function(){
          var t=this.$createElement, e=this._self._c||t;
          return e("a", {
            attrs:{
              onclick:"window.open('https://social-plugins.line.me/lineit/share?url=' + encodeURI(location.href), '_blank', 'height=500,width=800');"
            }
          }, [
            e("i", {
              staticClass:"font font-line-logo line", attrs:{
                id:"font-LINE_logo"
              }
            })
          ])
        }, function(){
          var t=this.$createElement, e=this._self._c||t;
          return e("a", {
            attrs:{
              onclick:"window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURI(location.href), '_blank', 'height=500,width=800');"
            }
          }, [
            e("i", {
              staticClass:"font font-facebook-logo fb", attrs:{
                id:"font-F_icon"
              }
            })
          ])
        }
      ], !1, null, "91326fe8", null).exports;
      s(754989);
      const vs=s.p+"assets/images/large/373f29c84146322c26af.png", ps=(0, i.pM)({
        components:{
          Star:Nt, JoinButton:qt, Statistics:xt
        }, name:"CourseDetailCard", props:{
          courseId:{
            type:Number, required:!0
          }, userId:{
            type:Number, required:!0
          }, courseInfo:{
            type:Object, required:!0
          }, visitCount:{
            type:Number, default:0
          }, instructorNames:{
            type:String, default:""
          }, state:{
            type:Object, required:!1, default:null
          }
        }, setup:function(t, e){
          var s=(0, i.EW)((function(){
            return{
              private:T.default.t("managementStat.privateCourse"), org:T.default.t("intraSchoolOpenCourse"), off_campus:T.default.t("massiveOnlineOpenCourse")
            }
            [
              t.courseInfo.publicScope
            ]
          })), a=(0, i.EW)((function(){
            var t;
            return null===(t=document.documentElement.getAttribute("lang"))||void 0===t?void 0:t.toLowerCase().startsWith("en")
          })), n=(0, i.KR)(!1), o=function(){
            var t=document.querySelector(".description");
            t&&setTimeout((function(){
              t.scrollHeight>t.clientHeight&&(n.value=!0)
            }), 0)
          }, r=(0, i.EW)((function(){
            return t.courseInfo.cover?t.courseInfo.cover:vs
          }));
          (0, i.sV)((function(){
            o(), window.addEventListener("resize", o)
          })), (0, i.hi)((function(){
            window.removeEventListener("resize", o)
          }));
          var c=(0, i.EW)((function(){
            var t;
            return null===(t=window.orgSettings)||void 0===t?void 0:t.hideShTechCourseType
          }));
          return{
            isEn:a, showMoreDesc:n, publicScope:s, openDescModal:function(){
              e.emit("open-description-modal")
            }, courseCover:r, hideShTechCourseType:c
          }
        }
      });
      const fs=(0, u.A)(ps, (function(){
        var t=this, e=t.$createElement, s=t._self._c||e;
        return s("div", {
          staticClass:"home-container"
        }, [
          s("section", {
            staticClass:"course-detail-container"
          }, [
            s("div", {
              staticClass:"book-card"
            }, [
              s("div", {
                staticClass:"left-panel child-panel"
              }, [
                s("div", {
                  staticClass:"illustration-wrapper"
                }, [
                  s("img", {
                    staticClass:"illustration-img", attrs:{
                      src:t.courseCover, alt:""
                    }
                  })
                ]), t._v(" "), s("div", {
                  staticClass:"info-card-wrap"
                }, [
                  s("div", {
                    staticClass:"department-card info-card"
                  }, [
                    s("span", {
                      staticClass:"name"
                    }, [
                      t._v(t._s(t.$t("teachingTeam.department")))
                    ]), t._v(" "), s("span", {
                      staticClass:"value"
                    }, [
                      s("TooltipExt", {
                        attrs:{
                          text:t.courseInfo.department.name||"--"
                        }
                      }, [
                        s("span", [
                          t._v(t._s(t.courseInfo.department.name||"--"))
                        ])
                      ])
                    ], 1), t._v(" "), s("svg-icon", {
                      staticClass:"department-icon", attrs:{
                        name:"department"
                      }
                    }), t._v(" "), s("svg-icon", {
                      staticClass:"bg-icon", attrs:{
                        name:"course-home-department-bg"
                      }
                    })
                  ], 1), t._v(" "), s("div", {
                    staticClass:"right-info-cards"
                  }, [
                    s("div", {
                      staticClass:"info-card categoty-card"
                    }, [
                      s("span", {
                        staticClass:"name"
                      }, [
                        t._v(t._s(t.$t("course_classification")))
                      ]), t._v(" "), s("span", {
                        staticClass:"value"
                      }, [
                        s("TooltipExt", {
                          attrs:{
                            text:t.courseInfo.courseClassification.name||"--"
                          }
                        }, [
                          s("span", [
                            t._v(t._s(t.courseInfo.courseClassification.name||"--"))
                          ])
                        ])
                      ], 1), t._v(" "), s("svg-icon", {
                        staticClass:"bg-icon", attrs:{
                          name:"course-home-category-bg"
                        }
                      })
                    ], 1), t._v(" "), s("div", {
                      staticClass:"info-card"
                    }, [
                      s("span", {
                        staticClass:"name"
                      }, [
                        t._v(t._s(t.$t("alert.instructor")))
                      ]), t._v(" "), s("span", {
                        staticClass:"value"
                      }, [
                        s("TooltipExt", {
                          attrs:{
                            text:t.instructorNames
                          }
                        }, [
                          s("span", [
                            t._v(t._s(t.instructorNames))
                          ])
                        ])
                      ], 1), t._v(" "), s("svg-icon", {
                        staticClass:"bg-icon", attrs:{
                          name:"course-home-instructor-bg"
                        }
                      })
                    ], 1)
                  ])
                ])
              ]), t._v(" "), s("div", {
                staticClass:"right-panel child-panel"
              }, [
                s("div", {
                  staticClass:"card-header"
                }, [
                  s("div", {
                    staticClass:"header-content"
                  }, [
                    s("TooltipExt", {
                      staticClass:"course-title", attrs:{
                        text:t.courseInfo.name
                      }
                    }, [
                      s("h1", {
                        staticClass:"title"
                      }, [
                        t._v(t._s(t.courseInfo.name))
                      ])
                    ]), t._v(" "), s("div", {
                      staticClass:"header-meta"
                    }, [
                      s("div", {
                        staticClass:"tags"
                      }, [
                        t.hideShTechCourseType||null===t.courseInfo.compulsory?t._e():s("span", {
                          staticClass:"badge", class:{
                            compulsory:t.courseInfo.compulsory
                          }
                        }, [
                          t._v("\n                  "+t._s(t.courseInfo.compulsory?t.$t("courseList.compulsory"):t.$t("courseList.elective"))+"\n                ")
                        ]), t._v(" "), s("span", {
                          staticClass:"scope", class:[
                            t.courseInfo.publicScope
                          ]
                        }, [
                          t._v(t._s(t.publicScope))
                        ])
                      ]), t._v(" "), s("div", {
                        staticClass:"rating"
                      }, [
                        s("Star", {
                          attrs:{
                            "course-id":t.courseId, "user-id":t.userId
                          }
                        })
                      ], 1), t._v(" "), t.visitCount?s("div", {
                        staticClass:"views"
                      }, [
                        s("i", {
                          staticClass:"font font-resource-view"
                        }), t._v("\n                "+t._s(t.visitCount)+" "+t._s(t.$t("studentStat.times"))+"\n              ")
                      ]):t._e()
                    ])
                  ], 1)
                ]), t._v(" "), s("p", {
                  staticClass:"description", domProps:{
                    innerHTML:t._s(t.courseInfo.classroomSchedule)
                  }
                }), t._v(" "), t.showMoreDesc?s("a", {
                  staticClass:"view-all", attrs:{
                    href:"#"
                  }, on:{
                    click:t.openDescModal
                  }
                }, [
                  t._v("\n          "+t._s(t.$t("viewAll"))+"\n          "), s("i", {
                    staticClass:"font font-arrow-right-middle"
                  })
                ]):t._e(), t._v(" "), s("div", {
                  staticClass:"metadata-grid", class:{
                    en:t.isEn
                  }
                }, [
                  s("div", {
                    staticClass:"meta-item"
                  }, [
                    s("span", {
                      staticClass:"name"
                    }, [
                      t._v(t._s(t.$t("learningAnalysis.note.activities.forum.attendanceCount"))+":")
                    ]), t._v(" "), s("span", {
                      staticClass:"value"
                    }, [
                      t._v(t._s(t.courseInfo.studentsCount)+t._s(t.$t("learningAnalysis.people")))
                    ])
                  ]), t._v(" "), s("div", {
                    staticClass:"meta-item"
                  }, [
                    s("span", {
                      staticClass:"name"
                    }, [
                      t._v(t._s(t.$t("courseCode"))+":")
                    ]), t._v(" "), s("div", {
                      staticClass:"value"
                    }, [
                      s("TooltipExt", {
                        attrs:{
                          text:t.courseInfo.courseCode
                        }
                      }, [
                        s("span", [
                          t._v(t._s(t.courseInfo.courseCode))
                        ])
                      ])
                    ], 1)
                  ]), t._v(" "), t.courseInfo.grade.name?s("div", {
                    staticClass:"meta-item"
                  }, [
                    s("span", {
                      staticClass:"name"
                    }, [
                      t._v(t._s(t.$t("grade"))+":")
                    ]), t._v(" "), s("span", {
                      staticClass:"value"
                    }, [
                      s("TooltipExt", {
                        attrs:{
                          text:t.courseInfo.grade.name||"--"
                        }
                      }, [
                        s("span", [
                          t._v(t._s(t.courseInfo.grade.name))
                        ])
                      ])
                    ], 1)
                  ]):t._e(), t._v(" "), t.courseInfo.credit?s("div", {
                    staticClass:"meta-item"
                  }, [
                    s("span", {
                      staticClass:"name"
                    }, [
                      t._v(t._s(t.$t("credit"))+":")
                    ]), t._v(" "), s("span", {
                      staticClass:"value"
                    }, [
                      t._v(t._s(t.courseInfo.credit||"--")+t._s(t.$t("subject.point")))
                    ])
                  ]):t._e(), t._v(" "), t.courseInfo.klass.name?s("div", {
                    staticClass:"meta-item"
                  }, [
                    s("span", {
                      staticClass:"name"
                    }, [
                      t._v(t._s(t.$t("teachingClass"))+":")
                    ]), t._v(" "), s("span", {
                      staticClass:"value"
                    }, [
                      s("TooltipExt", {
                        attrs:{
                          text:t.courseInfo.klass.name||"--"
                        }
                      }, [
                        s("span", [
                          t._v(t._s(t.courseInfo.klass.name))
                        ])
                      ])
                    ], 1)
                  ]):t._e(), t._v(" "), s("div", {
                    staticClass:"meta-item"
                  }, [
                    s("span", {
                      staticClass:"name"
                    }, [
                      t._v(t._s(t.$t("userProfile.course.beginTime"))+":")
                    ]), t._v(" "), s("span", {
                      staticClass:"value"
                    }, [
                      t._v("\n              "+t._s(t.courseInfo.startDateDisplay)+"\n              "), t.courseInfo.endDate?[
                        t._v("- "+t._s(t.courseInfo.endDateDisplay))
                      ]
                      :t._e()
                    ], 2)
                  ])
                ]), t._v(" "), s("div", {
                  staticClass:"footer-btn"
                }, [
                  t.courseInfo.id?s("join-button", {
                    attrs:{
                      course:t.courseInfo, "user-id":t.userId, state:t.state
                    }
                  }):t._e()
                ], 1)
              ]), t._v(" "), s("svg-icon", {
                staticClass:"left-icon", attrs:{
                  name:"course-home-theme-2-left-corner"
                }
              }), t._v(" "), s("svg-icon", {
                staticClass:"right-icon", attrs:{
                  name:"course-home-theme-2-right-corner"
                }
              })
            ], 1)
          ]), t._v(" "), s("section", {
            staticClass:"stat"
          }, [
            t.courseInfo.id?s("Statistics", {
              attrs:{
                "course-id":t.courseId, "user-id":t.userId, "knowledge-graph-publish-type":t.courseInfo.knowledgeGraphPublishType, "problem-graph-publish-type":t.courseInfo.problemGraphPublishType, "course-info":t.courseInfo
              }
            }):t._e()
          ], 1)
        ])
      }), [
      ], !1, null, "0ae00612", null).exports;
      var ms=function(t, e, s, a){
        return new(s||(s=Promise))((function(n, i){
          function o(t){
            try{
              c(a.next(t))
            }
            catch(t){
              i(t)
            }
          }
          function r(t){
            try{
              c(a.throw(t))
            }
            catch(t){
              i(t)
            }
          }
          function c(t){
            var e;
            t.done?n(t.value):(e=t.value, e instanceof s?e:new s((function(t){
              t(e)
            }))).then(o, r)
          }
          c((a=a.apply(t, e||[
          ])).next())
        }))
      }, _s=function(t, e){
        var s, a, n, i, o={
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
          next:r(0), throw:r(1), return:r(2)
        }, "function"==typeof Symbol&&(i[
          Symbol.iterator
        ]
        =function(){
          return this
        }), i;
        function r(r){
          return function(c){
            return function(r){
              if(s)throw new TypeError("Generator is already executing.");
              for(;
              i&&(i=0, r[
                0
              ]
              &&(o=0)), o;
              )try{
                if(s=1, a&&(n=2&r[
                  0
                ]
                ?a.return:r[
                  0
                ]
                ?a.throw||((n=a.return)&&n.call(a), 0):a.next)&&!(n=n.call(a, r[
                  1
                ])).done)return n;
                switch(a=0, n&&(r=[
                  2&r[
                    0
                  ], n.value
                ]), r[
                  0
                ]){
                  case 0:case 1:n=r;
                  break;
                  case 4:return o.label++, {
                    value:r[
                      1
                    ], done:!1
                  };
                  case 5:o.label++, a=r[
                    1
                  ], r=[
                    0
                  ];
                  continue;
                  case 7:r=o.ops.pop(), o.trys.pop();
                  continue;
                  default:if(!(n=o.trys, (n=n.length>0&&n[
                    n.length-1
                  ])||6!==r[
                    0
                  ]
                  &&2!==r[
                    0
                  ])){
                    o=0;
                    continue
                  }
                  if(3===r[
                    0
                  ]
                  &&(!n||r[
                    1
                  ]
                  >n[
                    0
                  ]
                  &&r[
                    1
                  ]
                  <n[
                    3
                  ])){
                    o.label=r[
                      1
                    ];
                    break
                  }
                  if(6===r[
                    0
                  ]
                  &&o.label<n[
                    1
                  ]){
                    o.label=n[
                      1
                    ], n=r;
                    break
                  }
                  if(n&&o.label<n[
                    2
                  ]){
                    o.label=n[
                      2
                    ], o.ops.push(r);
                    break
                  }
                  n[
                    2
                  ]
                  &&o.ops.pop(), o.trys.pop();
                  continue
                }
                r=e.call(t, o)
              }
              catch(t){
                r=[
                  6, t
                ], a=0
              }
              finally{
                s=n=0
              }
              if(5&r[
                0
              ])throw r[
                1
              ];
              return{
                value:r[
                  0
                ]
                ?r[
                  1
                ]
                :void 0, done:!0
              }
            }
            ([
              r, c
            ])
          }
        }
      };
      (0, a.kz)();
      const hs=(0, i.pM)({
        components:{
          SvgIcon:ts.A
        }, name:"expanded-info-card", props:{
          courseInfo:{
            type:Object, required:!0
          }
        }, setup:function(t, e){
          var s=this, a=(0, i.WQ)("userId", 0), n=(0, i.WQ)("visitCount"), o=(0, i.KR)([
          ]), c=(0, i.KR)(!1), l=(0, i.KR)(!1), u=(0, i.KR)(0), d=(0, i.KR)(), v=Rt(t.courseInfo.id, a).averageScore;
          (0, m.j7)(t.courseInfo.id, !a).then((function(t){
            return ms(s, void 0, void 0, (function(){
              var e, s, n;
              return _s(this, (function(i){
                switch(i.label){
                  case 0:return e=a?"api":"anonymous-api", (s=t[
                    0
                  ])?(n=s.videos.map((function(t){
                    return{
                      src:"/".concat(e, "/uploads/video/").concat(t.id, "?preview=true&upload_reference_id=0&is_simulating_instructor=false"), label:t.resolution, type:"video/mp4"
                    }
                  })), o.value=[
                    {
                      sources:n, mute:!1, volume:.7, type:"video/mp4"
                    }
                  ], [
                    4, (0, os.A)()
                  ]):[
                    2
                  ];
                  case 1:return new(0, i.sent().WgVideoPlayer)("video-player", {
                    videos:o.value, autoPlay:!1, mode:"replay", defaultErr:!0, plugins:[
                    ]
                  }, {
                  }), [
                    2
                  ]
                }
              }))
            }))
          }));
          var p=(0, i.EW)((function(){
            return o.value.length+t.courseInfo.coursePictures.length
          })), f=function(){
            var t=document.querySelector(".description");
            t&&setTimeout((function(){
              t.scrollHeight>t.clientHeight&&(c.value=!0)
            }), 0)
          };
          (0, i.sV)((function(){
            f()
          }));
          return{
            customSliderCount:p, videos:o, defaultCourseCover:r, setViewAllBtn:f, openDescModal:function(){
              e.emit("open-description-modal")
            }, showMoreDesc:c, slideChangeHandler:function(t){
              u.value=t.detail[
                0
              ].activeIndex, !l.value&&d.value&&(d.value.swiper.update(), l.value=!0)
            }, activeSlideIndex:u, swiperContainer:d, slideTo:function(t){
              d.value&&u.value!==t&&(u.value=t, l.value||(d.value.swiper.update(), l.value=!0), d.value.swiper.slideTo(t))
            }, averageScore:v, visitCount:n
          }
        }
      });
      const gs=(0, u.A)(hs, (function(){
        var t=this, e=t.$createElement, s=t._self._c||e;
        return s("div", {
          staticClass:"expanded-card-area"
        }, [
          s("div", {
            staticClass:"info-head-area"
          }, [
            s("div", {
              staticClass:"info-title-area"
            }, [
              s("div", {
                staticClass:"info-title"
              }, [
                t._v(t._s(t.$t("authz.basic")))
              ]), t._v(" "), s("div", {
                staticClass:"title-background"
              })
            ]), t._v(" "), s("div", {
              staticClass:"info-stat-area"
            }, [
              s("div", [
                s("div", {
                  staticClass:"stat-value"
                }, [
                  t._v(t._s(t.averageScore.toFixed(1)))
                ]), t._v(" "), s("div", {
                  staticClass:"stat-name"
                }, [
                  t._v(t._s(t.$t("interaction.vote.score")))
                ])
              ]), t._v(" "), s("div", [
                s("div", {
                  staticClass:"stat-value"
                }, [
                  t._v(t._s(t.visitCount))
                ]), t._v(" "), s("div", {
                  staticClass:"stat-name"
                }, [
                  t._v(t._s(t.$t("knowledgeGraph.statistics.visits")))
                ])
              ]), t._v(" "), s("div", [
                s("div", {
                  staticClass:"stat-value"
                }, [
                  t._v(t._s(t.courseInfo.studentsCount))
                ]), t._v(" "), s("div", {
                  staticClass:"stat-name"
                }, [
                  t._v(t._s(t.$t("danmuActivity.participants")))
                ])
              ])
            ])
          ]), t._v(" "), s("div", {
            staticClass:"info-body-area"
          }, [
            s("div", {
              staticClass:"body-left-area"
            }, [
              s("div", {
                staticClass:"image"
              }, [
                t._m(0), t._v(" "), s("swiper-container", {
                  ref:"swiperContainer", staticClass:"swiper gallery-top", attrs:{
                    "slides-per-view":1, "centered-slides-bounds":"", "space-between":0, navigation:!0, "navigation-next-el":".swiper-button-next", "navigation-prev-el":".swiper-button-prev"
                  }, on:{
                    swiperslidechange:t.slideChangeHandler
                  }
                }, [
                  s("swiper-slide", {
                    directives:[
                      {
                        name:"show", rawName:"v-show", value:t.videos.length>0, expression:"videos.length > 0"
                      }
                    ]
                  }, [
                    s("div", {
                      staticClass:"player-content h-full", attrs:{
                        id:"video-player"
                      }
                    })
                  ]), t._v(" "), t._l(t.courseInfo.coursePictures, (function(t, e){
                    return s("swiper-slide", {
                      key:"img-"+e
                    }, [
                      s("img", {
                        attrs:{
                          src:t.url, alt:""
                        }
                      })
                    ])
                  })), t._v(" "), 0===t.customSliderCount?s("swiper-slide", [
                    s("img", {
                      attrs:{
                        src:t.courseInfo.cover||t.defaultCourseCover, alt:""
                      }
                    })
                  ]):t._e()
                ], 2), t._v(" "), t._m(1)
              ], 1), t._v(" "), s("div", {
                staticClass:"little-image"
              }, [
                t.videos.length>0&&t.videos[
                  0
                ].sources?s("div", {
                  on:{
                    click:function(e){
                      return t.slideTo(0)
                    }
                  }
                }, [
                  s("video", {
                    class:{
                      "selected-image":0===t.activeSlideIndex
                    }, attrs:{
                      src:t.videos[
                        0
                      ].sources[
                        0
                      ].src
                    }
                  })
                ]):t._e(), t._v(" "), t._l(t.courseInfo.coursePictures.slice(0, 4-t.videos.length), (function(e, a){
                  return s("div", {
                    key:"little-img-"+a, on:{
                      click:function(e){
                        return t.slideTo(a+t.videos.length)
                      }
                    }
                  }, [
                    s("img", {
                      class:{
                        "selected-image":t.activeSlideIndex===a+t.videos.length
                      }, attrs:{
                        src:e.url, alt:""
                      }
                    })
                  ])
                })), t._v(" "), 0===t.customSliderCount?s("div", [
                  s("img", {
                    staticClass:"selected-image", attrs:{
                      src:t.courseInfo.cover||t.defaultCourseCover, alt:""
                    }
                  })
                ]):t._e()
              ], 2)
            ]), t._v(" "), s("Divider", {
              attrs:{
                type:"vertical"
              }
            }), t._v(" "), s("div", {
              staticClass:"body-right-area"
            }, [
              s("div", {
                staticClass:"detail-text-area"
              }, [
                s("span", {
                  staticClass:"description", domProps:{
                    innerHTML:t._s(t.courseInfo.classroomSchedule||"--")
                  }
                }), t._v(" "), t.showMoreDesc?s("a", {
                  staticClass:"view-all", attrs:{
                    href:"#"
                  }, on:{
                    click:t.openDescModal
                  }
                }, [
                  t._v("\n          "+t._s(t.$t("viewAll"))+"\n          "), s("i", {
                    staticClass:"font font-arrow-right-middle"
                  })
                ]):t._e()
              ]), t._v(" "), s("Divider"), t._v(" "), s("div", {
                staticClass:"course-info-area"
              }, [
                s("div", {
                  staticClass:"info-row"
                }, [
                  s("div", {
                    staticClass:"info-item"
                  }, [
                    s("span", {
                      staticClass:"item-label"
                    }, [
                      t._v(t._s(t.$t("danmuActivity.participants"))+": ")
                    ]), t._v(" "), s("span", {
                      staticClass:"item-value"
                    }, [
                      t._v(t._s(t.courseInfo.studentsCount))
                    ])
                  ]), t._v(" "), s("div", {
                    staticClass:"info-item"
                  }, [
                    s("span", {
                      staticClass:"item-label"
                    }, [
                      t._v(t._s(t.$t("courseList.courseCode"))+": ")
                    ]), t._v(" "), s("span", {
                      staticClass:"item-value"
                    }, [
                      s("TooltipExt", {
                        attrs:{
                          text:t.courseInfo.courseCode
                        }
                      })
                    ], 1)
                  ])
                ]), t._v(" "), s("div", {
                  staticClass:"info-row"
                }, [
                  s("div", {
                    staticClass:"info-item"
                  }, [
                    s("span", {
                      staticClass:"item-label"
                    }, [
                      t._v(t._s(t.$t("grade"))+": ")
                    ]), t._v(" "), s("span", {
                      staticClass:"item-value"
                    }, [
                      s("TooltipExt", {
                        attrs:{
                          text:t.courseInfo.grade.name||"--"
                        }
                      })
                    ], 1)
                  ]), t._v(" "), s("div", {
                    staticClass:"info-item"
                  }, [
                    s("span", {
                      staticClass:"item-label"
                    }, [
                      t._v(t._s(t.$t("credit"))+": ")
                    ]), t._v(" "), s("span", {
                      staticClass:"item-value"
                    }, [
                      t._v("\n              "+t._s(t.courseInfo.credit||"--")+"\n              "), t.courseInfo.credit?[
                        t._v(t._s(t.$t("subject.point")))
                      ]
                      :t._e()
                    ], 2)
                  ])
                ]), t._v(" "), s("div", {
                  staticClass:"info-row"
                }, [
                  s("div", {
                    staticClass:"info-item"
                  }, [
                    s("span", {
                      staticClass:"item-label"
                    }, [
                      t._v(t._s(t.$t("teachingClass"))+": ")
                    ]), t._v(" "), s("span", {
                      staticClass:"item-value"
                    }, [
                      s("TooltipExt", {
                        attrs:{
                          text:t.courseInfo.klass.name||"--"
                        }
                      })
                    ], 1)
                  ]), t._v(" "), s("div", {
                    staticClass:"info-item"
                  }, [
                    s("span", {
                      staticClass:"item-label"
                    }, [
                      t._v(t._s(t.$t("userProfile.course.beginTime"))+": ")
                    ]), t._v(" "), s("span", {
                      staticClass:"item-value"
                    }, [
                      t.courseInfo.endDate?[
                        s("TooltipExt", {
                          attrs:{
                            text:t.courseInfo.startDateDisplay+" - "+t.courseInfo.endDateDisplay
                          }
                        })
                      ]
                      :[
                        s("TooltipExt", {
                          attrs:{
                            text:t.courseInfo.startDateDisplay
                          }
                        })
                      ]
                    ], 2)
                  ])
                ])
              ])
            ], 1)
          ], 1)
        ])
      }), [
        function(){
          var t=this.$createElement, e=this._self._c||t;
          return e("div", {
            staticClass:"swiper-button-prev"
          }, [
            e("i", {
              staticClass:"font font-arrow-left"
            })
          ])
        }, function(){
          var t=this.$createElement, e=this._self._c||t;
          return e("div", {
            staticClass:"swiper-button-next"
          }, [
            e("i", {
              staticClass:"font font-arrow-right"
            })
          ])
        }
      ], !1, null, "486b94c6", null).exports;
      const ys=(0, i.pM)({
        components:{
          SvgIcon:ts.A
        }, name:"expanded-graph-card", props:{
          courseInfo:{
            type:Object, required:!0
          }, knowledgeNodeStatisticsData:{
            type:Object, default:function(){
            }
          }, problemLevels:{
            type:Array, default:function(){
              return[
              ]
            }
          }, competencyObjectiveStat:{
            type:Object, default:function(){
            }
          }
        }, setup:function(t, e){
          var s=(0, i.EW)((function(){
            var e;
            return(null===(e=t.competencyObjectiveStat)||void 0===e?void 0:e.competency_objective_count)||0
          })), a=(0, i.EW)((function(){
            var e;
            return((null===(e=t.competencyObjectiveStat)||void 0===e?void 0:e.knowledge_node_ids)||[
            ]).length
          })), n=(0, i.EW)((function(){
            var e;
            return(null===(e=t.problemLevels)||void 0===e?void 0:e.reduce((function(t, e){
              return t+((null==e?void 0:e.problems.length)||0)
            }), 0))||0
          })), o=(0, i.EW)((function(){
            var e;
            return(null===(e=t.problemLevels)||void 0===e?void 0:e.reduce((function(t, e){
              var s;
              return t+((null===(s=null==e?void 0:e.problems)||void 0===s?void 0:s.reduce((function(t, e){
                var s;
                return t+((null===(s=null==e?void 0:e.knowledgeNodes)||void 0===s?void 0:s.length)||0)
              }), 0))||0)
            }), 0))||0
          })), r=function t(e){
            return e.children&&0!==e.children.length?1+Math.max.apply(Math, e.children.map(t)):1
          };
          return{
            goToMore:function(){
              return window.open("/course/".concat(t.courseInfo.id, "/knowledge-graph"), "_blank")
            }, objectiveCount:s, objectiveKnowledgeCount:a, problemCount:n, problemKnowledgeCount:o, maxDepth:(0, i.EW)((function(){
              var e, s;
              return(0===(s=(null===(e=t.knowledgeNodeStatisticsData)||void 0===e?void 0:e.nodes)||[
              ]).length?0:Math.max.apply(Math, s.map(r)))||0
            })), nodeCount:(0, i.EW)((function(){
              var e;
              return(null===(e=t.knowledgeNodeStatisticsData)||void 0===e?void 0:e.nodeCount)||0
            }))
          }
        }
      });
      const Cs=(0, u.A)(ys, (function(){
        var t=this, e=t.$createElement, s=t._self._c||e;
        return s("div", {
          staticClass:"expanded-card-area"
        }, [
          s("div", {
            staticClass:"graph-head-area"
          }, [
            s("div", {
              staticClass:"graph-title-area"
            }, [
              s("div", {
                staticClass:"graph-title"
              }, [
                t._v(t._s(t.$t("knowledgeGraph.title")))
              ]), t._v(" "), s("div", {
                staticClass:"title-background"
              })
            ]), t._v(" "), s("div", {
              staticClass:"graph-btn-area"
            }, [
              s("span", {
                on:{
                  click:t.goToMore
                }
              }, [
                t._v(t._s(t.$t("more")))
              ])
            ])
          ]), t._v(" "), s("div", {
            staticClass:"graph-body-area"
          }, [
            s("div", {
              staticClass:"body-left-area"
            }, [
              s("div", {
                staticClass:"left-text-area"
              }, [
                s("div", {
                  staticClass:"level-1-text"
                }, [
                  t._v(t._s(t.$t("theme.theme4.competencyModel")))
                ]), t._v(" "), s("div", {
                  staticClass:"level-2-text"
                }, [
                  t._v(t._s(t.$t("theme.theme4.problemModel")))
                ]), t._v(" "), s("div", {
                  staticClass:"level-3-text"
                }, [
                  t._v(t._s(t.$t("theme.theme4.knowledgeModel")))
                ])
              ])
            ]), t._v(" "), s("div", {
              staticClass:"body-right-area"
            }, [
              s("div", [
                s("div", {
                  staticClass:"card-head-area"
                }, [
                  t._v(t._s(t.$t("theme.theme4.competencyModel")))
                ]), t._v(" "), s("div", {
                  staticClass:"card-body-area"
                }, [
                  s("div", {
                    staticClass:"stat-area"
                  }, [
                    s("div", {
                      staticClass:"stat-value"
                    }, [
                      t._v(t._s(t.objectiveCount))
                    ]), t._v(" "), s("div", {
                      staticClass:"stat-name"
                    }, [
                      t._v(t._s(t.$t("theme.theme4.competencyObjective")))
                    ])
                  ]), t._v(" "), s("div", {
                    staticClass:"stat-area"
                  }, [
                    s("div", {
                      staticClass:"stat-value"
                    }, [
                      t._v(t._s(t.objectiveKnowledgeCount))
                    ]), t._v(" "), s("div", {
                      staticClass:"stat-name"
                    }, [
                      t._v(t._s(t.$t("theme.theme4.coveredKnowledgePoints")))
                    ])
                  ])
                ])
              ]), t._v(" "), s("div", [
                s("div", {
                  staticClass:"card-head-area"
                }, [
                  t._v(t._s(t.$t("theme.theme4.problemModel")))
                ]), t._v(" "), s("div", {
                  staticClass:"card-body-area"
                }, [
                  s("div", {
                    staticClass:"stat-area"
                  }, [
                    s("div", {
                      staticClass:"stat-value"
                    }, [
                      t._v(t._s(t.problemCount))
                    ]), t._v(" "), s("div", {
                      staticClass:"stat-name"
                    }, [
                      t._v(t._s(t.$t("theme.theme4.problem")))
                    ])
                  ]), t._v(" "), s("div", {
                    staticClass:"stat-area"
                  }, [
                    s("div", {
                      staticClass:"stat-value"
                    }, [
                      t._v(t._s(t.problemKnowledgeCount))
                    ]), t._v(" "), s("div", {
                      staticClass:"stat-name"
                    }, [
                      t._v(t._s(t.$t("theme.theme4.coveredKnowledgePoints")))
                    ])
                  ])
                ])
              ]), t._v(" "), s("div", {
                staticStyle:{
                  flex:"1"
                }
              }, [
                s("div", {
                  staticClass:"card-head-area"
                }, [
                  t._v(t._s(t.$t("theme.theme4.knowledgeModel")))
                ]), t._v(" "), s("div", {
                  staticClass:"card-body-area"
                }, [
                  s("div", {
                    staticClass:"stat-area"
                  }, [
                    s("div", {
                      staticClass:"stat-value"
                    }, [
                      t._v(t._s(t.nodeCount))
                    ]), t._v(" "), s("div", {
                      staticClass:"stat-name"
                    }, [
                      t._v(t._s(t.$t("knowledgeGraph.node")))
                    ])
                  ]), t._v(" "), s("div", {
                    staticClass:"stat-area"
                  }, [
                    s("div", {
                      staticClass:"stat-value"
                    }, [
                      t._v(t._s(t.maxDepth))
                    ]), t._v(" "), s("div", {
                      staticClass:"stat-name"
                    }, [
                      t._v(t._s(t.$t("theme.theme4.knowledgeNodeLevel")))
                    ])
                  ])
                ])
              ])
            ])
          ])
        ])
      }), [
      ], !1, null, "9901da5e", null).exports;
      var bs=s(255634);
      const ws=(0, i.pM)({
        components:{
          TooltipExt:bs.A, SvgIcon:ts.A
        }, name:"expanded-ai-card", props:{
          courseInfo:{
            type:Object, required:!0
          }, agents:{
            type:Array, required:!0
          }
        }, setup:function(t, e){
          return{
            goToMore:function(){
              window.open("/course/".concat(t.courseInfo.id, "/extensions"), "_blank")
            }
          }
        }
      });
      const Ss=(0, u.A)(ws, (function(){
        var t=this, e=t.$createElement, s=t._self._c||e;
        return s("div", {
          staticClass:"expanded-card-area"
        }, [
          s("div", {
            staticClass:"ai-head-area"
          }, [
            s("div", {
              staticClass:"ai-title-area"
            }, [
              s("div", {
                staticClass:"ai-title"
              }, [
                t._v(t._s(t.$t("theme.theme4.aiAgent")))
              ]), t._v(" "), s("div", {
                staticClass:"title-background"
              })
            ]), t._v(" "), s("div", {
              staticClass:"ai-btn-area"
            }, [
              s("span", {
                on:{
                  click:t.goToMore
                }
              }, [
                t._v(t._s(t.$t("more")))
              ])
            ])
          ]), t._v(" "), s("div", {
            staticClass:"ai-body-area"
          }, t._l(t.agents, (function(e, a){
            return s("div", {
              key:a, staticClass:"agent-card"
            }, [
              s("div", {
                staticClass:"custom-app-icon-wrapper"
              }, [
                e.is_custom?s("img", {
                  staticClass:"custom-app-icon h-full w-full", attrs:{
                    src:e.icon
                  }
                }):s("svg-icon", {
                  staticClass:"custom-app-icon", attrs:{
                    name:e.icon
                  }
                })
              ], 1), t._v(" "), s("div", {
                staticClass:"info"
              }, [
                s("div", {
                  staticClass:"title"
                }, [
                  s("TooltipExt", {
                    attrs:{
                      text:e.name
                    }
                  })
                ], 1), t._v(" "), s("div", {
                  staticClass:"agent-desc-area"
                }, [
                  s("TooltipExt", {
                    attrs:{
                      text:e.description
                    }
                  })
                ], 1)
              ])
            ])
          })), 0)
        ])
      }), [
      ], !1, null, "16864caa", null).exports, xs=(0, i.pM)({
        components:{
          SvgIcon:ts.A
        }, name:"theme-4-card", emits:[
          "on-expand", "open-description-modal"
        ], props:{
          courseInfo:{
            type:Object, required:!0
          }, agents:{
            type:Array, default:function(){
              return[
              ]
            }
          }, knowledgeNodeStatisticsData:{
            type:Object, default:function(){
            }
          }, problemLevels:{
            type:Array, default:function(){
              return[
              ]
            }
          }, competencyObjectiveStat:{
            type:Object, default:function(){
            }
          }, tabName:{
            type:String, default:"info"
          }, expanded:{
            type:Boolean, default:!1
          }
        }, setup:function(t, e){
          return{
            tabCls:(0, i.EW)((function(){
              return"".concat(t.tabName, "-tab")
            })), desc:(0, i.EW)((function(){
              return"info"===t.tabName?t.courseInfo.classroomSchedule:"graph"===t.tabName?T.default.t("theme.theme4.knowledgeTip"):T.default.t("theme.theme4.aiTip")
            })), title:(0, i.EW)((function(){
              return"info"===t.tabName?T.default.t("userStudio.baseInfo"):"graph"===t.tabName?T.default.t("knowledgeGraph.title"):T.default.t("theme.theme4.aiAgent")
            })), expandedComp:(0, i.EW)((function(){
              return"info"===t.tabName?gs:"graph"===t.tabName?Cs:Ss
            }))
          }
        }
      });
      const ks=(0, u.A)(xs, (function(){
        var t=this, e=t.$createElement, s=t._self._c||e;
        return t.expanded?s("div", {
          staticClass:"expand-area", class:[
            "expand-"+t.tabCls
          ]
        }, [
          s(t.expandedComp, {
            tag:"component", attrs:{
              "course-info":t.courseInfo, agents:t.agents, "problem-levels":t.problemLevels, "competency-objective-stat":t.competencyObjectiveStat, "knowledge-node-statistics-data":t.knowledgeNodeStatisticsData
            }, on:{
              "open-description-modal":function(e){
                return t.$emit("open-description-modal")
              }
            }
          })
        ], 1):s("div", {
          staticClass:"card-area", class:[
            t.tabCls
          ]
        }, [
          s("div", {
            staticClass:"card-head-area"
          }, [
            s("div", {
              staticClass:"card-title-text"
            }, [
              t._v(t._s(t.title))
            ]), t._v(" "), s("div", {
              staticClass:"card-expand-btn", on:{
                click:function(e){
                  return t.$emit("on-expand", t.tabName)
                }
              }
            }, [
              s("SvgIcon", {
                attrs:{
                  name:"vector"
                }
              })
            ], 1)
          ]), t._v(" "), s("div", {
            staticClass:"card-info-area"
          }, [
            t._v(t._s(t.desc))
          ])
        ])
      }), [
      ], !1, null, "08d6c480", null).exports, Is=(0, i.pM)({
        components:{
          JoinButton:qt, Theme4Card:ks, Statistics:xt
        }, name:"Theme4", props:{
          courseId:{
            type:Number, required:!0
          }, userId:{
            type:Number, required:!0
          }, courseInfo:{
            type:Object, required:!0
          }, visitCount:{
            type:Number, default:0
          }, instructorNames:{
            type:String, default:""
          }, state:{
            type:Object, required:!1, default:null
          }, statRes:{
            type:Object, default:function(){
            }
          }
        }, setup:function(t, e){
          var s=(0, i.KR)(!1), a=(0, i.KR)("info");
          (0, i.Gt)("userId", t.userId);
          var n=(0, i.EW)((function(){
            return t.visitCount
          }));
          (0, i.Gt)("visitCount", n);
          var o=(0, i.EW)((function(){
            return{
              private:T.default.t("managementStat.privateCourse"), org:T.default.t("intraSchoolOpenCourse"), off_campus:T.default.t("massiveOnlineOpenCourse")
            }
            [
              t.courseInfo.publicScope
            ]
          })), r=(0, i.EW)((function(){
            return window.featureToggles.applicationCenter&&t.courseInfo.allowExtensionApp
          })), c=(0, i.EW)((function(){
            return t.statRes.statInfo
          })), l=(0, i.EW)((function(){
            return t.statRes.knowledgeNodeStatisticsData
          })), u=(0, i.EW)((function(){
            return t.statRes.airConversationStats
          })), d=(0, i.EW)((function(){
            return t.statRes.problemCount
          })), v=(0, i.EW)((function(){
            return t.statRes.courseExtensionApps
          })), p=(0, i.EW)((function(){
            return t.statRes.competencyObjectiveStat
          })), f=(0, i.EW)((function(){
            return t.statRes.problemLevels
          }));
          (0, i.sV)((function(){
            var t;
            (t=document.querySelector(".description"))&&setTimeout((function(){
              t.scrollHeight>t.clientHeight&&(s.value=!0)
            }), 0)
          }));
          return{
            problemLevels:f, allowExtensionApp:r, openDescModal:function(){
              e.emit("open-description-modal")
            }, statInfo:c, knowledgeNodeStatisticsData:l, airConversationStats:u, problemCount:d, courseExtensionApps:v, competencyObjectiveStat:p, showMoreDesc:s, defaultCourseCover:as, publicScope:o, expandTab:function(t){
              a.value=t
            }, expandedTab:a
          }
        }
      });
      const Ts=(0, u.A)(Is, (function(){
        var t=this, e=t.$createElement, s=t._self._c||e;
        return s("div", [
          s("div", {
            staticClass:"course-detail-card"
          }, [
            s("header", {
              staticClass:"card-header"
            }, [
              s("div", {
                staticClass:"header-left"
              }, [
                s("TooltipExt", {
                  staticClass:"course-title", attrs:{
                    text:t.courseInfo.name
                  }
                }, [
                  s("h1", {
                    staticClass:"title"
                  }, [
                    t._v(t._s(t.courseInfo.name))
                  ])
                ]), t._v(" "), s("div", {
                  staticClass:"tag-wrap"
                }, [
                  s("div", {
                    staticClass:"tags"
                  }, [
                    s("span", {
                      staticClass:"badge", class:{
                        compulsory:t.courseInfo.compulsory
                      }
                    }, [
                      t._v("\n              "+t._s(t.courseInfo.compulsory?t.$t("courseList.compulsory"):t.$t("courseList.elective"))+"\n            ")
                    ]), t._v(" "), s("span", {
                      staticClass:"scope", class:[
                        t.courseInfo.publicScope
                      ]
                    }, [
                      t._v(t._s(t.publicScope))
                    ])
                  ]), t._v(" "), s("div", {
                    staticClass:"infos"
                  }, [
                    t.courseInfo.department.name?s("span", {
                      staticClass:"tag"
                    }, [
                      s("TooltipExt", {
                        attrs:{
                          text:t.courseInfo.department.name||"-"
                        }
                      }, [
                        s("span", [
                          t._v("\n                  "+t._s(t.courseInfo.department.name||"-")+"\n                ")
                        ])
                      ])
                    ], 1):t._e(), t._v(" "), t.courseInfo.department.name?s("Divider", {
                      attrs:{
                        type:"vertical"
                      }
                    }):t._e(), t._v(" "), t.courseInfo.courseClassification.name?s("span", {
                      staticClass:"tag"
                    }, [
                      s("TooltipExt", {
                        attrs:{
                          text:t.courseInfo.courseClassification.name||"-"
                        }
                      }, [
                        s("span", [
                          t._v("\n                  "+t._s(t.courseInfo.courseClassification.name||"-")+"\n                ")
                        ])
                      ])
                    ], 1):t._e(), t._v(" "), t.courseInfo.courseClassification.name?s("Divider", {
                      attrs:{
                        type:"vertical"
                      }
                    }):t._e(), t._v(" "), s("span", {
                      staticClass:"tag"
                    }, [
                      s("TooltipExt", {
                        attrs:{
                          text:t.instructorNames
                        }
                      }, [
                        s("span", [
                          t._v("\n                  "+t._s(t.instructorNames)+"\n                ")
                        ])
                      ])
                    ], 1)
                  ], 1)
                ])
              ], 1), t._v(" "), s("div", {
                staticClass:"header-right"
              }, [
                t.courseInfo.id?s("join-button", {
                  attrs:{
                    course:t.courseInfo, "user-id":t.userId, state:t.state
                  }
                }):t._e()
              ], 1)
            ]), t._v(" "), s("main", {
              staticClass:"card-body"
            }, [
              s("Theme4Card", {
                attrs:{
                  "course-info":t.courseInfo, "tab-name":"info", expanded:"info"===t.expandedTab
                }, on:{
                  "on-expand":t.expandTab, "open-description-modal":t.openDescModal
                }
              }), t._v(" "), s("Theme4Card", {
                directives:[
                  {
                    name:"show", rawName:"v-show", value:t.problemLevels.length>0||t.competencyObjectiveStat||t.knowledgeNodeStatisticsData, expression:"problemLevels.length > 0 || competencyObjectiveStat || knowledgeNodeStatisticsData"
                  }
                ], attrs:{
                  "course-info":t.courseInfo, "problem-levels":t.problemLevels, "competency-objective-stat":t.competencyObjectiveStat, "knowledge-node-statistics-data":t.knowledgeNodeStatisticsData, "tab-name":"graph", expanded:"graph"===t.expandedTab
                }, on:{
                  "on-expand":t.expandTab
                }
              }), t._v(" "), s("Theme4Card", {
                directives:[
                  {
                    name:"show", rawName:"v-show", value:t.allowExtensionApp&&t.courseExtensionApps.length>0, expression:"allowExtensionApp && courseExtensionApps.length > 0"
                  }
                ], attrs:{
                  "course-info":t.courseInfo, agents:t.courseExtensionApps, "tab-name":"ai", expanded:"ai"===t.expandedTab
                }, on:{
                  "on-expand":t.expandTab
                }
              })
            ], 1)
          ])
        ])
      }), [
      ], !1, null, "26bf823e", null).exports;
      const Es=(0, i.pM)({
        name:"theme-4-tabs", props:{
          value:{
            type:String, required:!0
          }
        }, setup:function(t, e){
          return{
            tab:(0, W.hRP)(t, "value", e.emit, {
              eventName:"input"
            })
          }
        }
      });
      const $s=(0, u.A)(Es, (function(){
        var t=this, e=t.$createElement, s=t._self._c||e;
        return s("div", {
          staticClass:"theme4-tabs"
        }, [
          s("Tabs", {
            directives:[
              {
                name:"wheel-allow-scroll", rawName:"v-wheel-allow-scroll"
              }
            ], model:{
              value:t.tab, callback:function(e){
                t.tab=e
              }, expression:"tab"
            }
          }, [
            s("TabPane", {
              attrs:{
                label:t.$t("course_outline"), name:"info"
              }
            }), t._v(" "), s("TabPane", {
              attrs:{
                label:t.$t("teachingTeam.teacherTeam"), name:"teaching-team"
              }
            }), t._v(" "), s("TabPane", {
              attrs:{
                label:t.$t("courseHome.courseModule"), name:"course-module"
              }
            }), t._v(" "), t.$featureToggles.courseEstimate?s("TabPane", {
              attrs:{
                label:t.$t("courseEstimate"), name:"estimates"
              }
            }):t._e(), t._v(" "), t.$featureToggles.knowledgeGraph?s("TabPane", {
              attrs:{
                label:t.$t("knowledgeGraph.title"), name:"knowledge-graph"
              }
            }):t._e(), t._v(" "), t.$featureToggles.knowledgeGraph?s("TabPane", {
              attrs:{
                label:t.$t("problemGraph.graph"), name:"problem-graph"
              }
            }):t._e(), t._v(" "), s("TabPane", {
              attrs:{
                label:t.$t("competencyGraph.name"), name:"competency-graph"
              }
            }), t._v(" "), t.$featureToggles.newCourseHomeTeachingData?s("TabPane", {
              attrs:{
                label:t.$t("njtc.teachingData"), name:"stat"
              }
            }):t._e()
          ], 1)
        ], 1)
      }), [
      ], !1, null, "690bbe2e", null).exports;
      const As=(0, i.pM)({
        name:"stat-cards", i18n:T.default, props:{
          courseInfo:{
            type:Object, required:!0
          }, statRes:{
            type:Object, default:function(){
            }
          }
        }, components:{
          SvgIcon:ts.A
        }, setup:function(t, e){
          var s=(0, i.EW)((function(){
            return window.featureToggles.applicationCenter&&t.courseInfo.allowExtensionApp
          })), a=(0, i.EW)((function(){
            return t.statRes.statInfo
          })), n=(0, i.EW)((function(){
            return t.statRes.knowledgeNodeStatisticsData
          })), o=(0, i.EW)((function(){
            return t.statRes.airConversationStats
          })), r=(0, i.EW)((function(){
            return t.statRes.problemCount
          })), c=(0, i.EW)((function(){
            return t.statRes.courseExtensionApps
          })), l=(0, i.EW)((function(){
            return t.statRes.competencyObjectiveStat
          }));
          (0, i.EW)((function(){
            return t.statRes.problemLevels
          }));
          return{
            allowExtensionApp:s, statInfo:a, knowledgeNodeStatisticsData:n, airConversationStats:o, problemCount:r, courseExtensionApps:c, competencyObjectiveStat:l
          }
        }
      });
      const Rs=(0, u.A)(As, (function(){
        var t=this, e=t.$createElement, s=t._self._c||e;
        return s("div", {
          staticClass:"stat-cards"
        }, [
          s("div", {
            staticClass:"problem-card"
          }, [
            s("div", {
              staticClass:"card-title"
            }, [
              t._v(t._s(t.$t("theme.theme4.problem")))
            ]), t._v(" "), s("div", {
              staticClass:"card-content"
            }, [
              t._v("\n      "+t._s(t.problemCount)+"\n      "), s("span", {
                staticClass:"content-item"
              }, [
                t._v(t._s(t.$t("vtrs.resource.count")))
              ])
            ]), t._v(" "), s("SvgIcon", {
              staticClass:"stat-icon", attrs:{
                name:"stat-1"
              }
            })
          ], 1), t._v(" "), s("div", {
            staticClass:"knowledge-card"
          }, [
            s("div", {
              staticClass:"card-title"
            }, [
              t._v(t._s(t.$t("knowledgeGraph.node")))
            ]), t._v(" "), s("div", {
              staticClass:"card-content"
            }, [
              t._v("\n      "+t._s(t.knowledgeNodeStatisticsData.nodeCount||0)+"\n      "), s("span", {
                staticClass:"content-item"
              }, [
                t._v(t._s(t.$t("vtrs.resource.count")))
              ])
            ]), t._v(" "), s("SvgIcon", {
              staticClass:"stat-icon", attrs:{
                name:"stat-2"
              }
            })
          ], 1), t._v(" "), s("div", {
            staticClass:"multiple-cards"
          }, [
            s("div", {
              staticClass:"resource-card"
            }, [
              s("div", {
                staticClass:"card-title"
              }, [
                t._v(t._s(t.$t("air.courseResources")))
              ]), t._v(" "), s("div", {
                staticClass:"card-content"
              }, [
                t._v("\n        "+t._s(t.statInfo.publishedActivityCount||0)+"\n        "), s("span", {
                  staticClass:"content-item"
                }, [
                  t._v(t._s(t.$t("vtrs.resource.count")))
                ])
              ]), t._v(" "), s("SvgIcon", {
                staticClass:"stat-icon", attrs:{
                  name:"stat-3"
                }
              })
            ], 1), t._v(" "), s("div", {
              staticClass:"objective-card"
            }, [
              s("div", {
                staticClass:"card-title"
              }, [
                t._v(t._s(t.$t("theme.theme4.competencyObjective")))
              ]), t._v(" "), s("div", {
                staticClass:"card-content"
              }, [
                t._v("\n        "+t._s(t.competencyObjectiveStat&&t.competencyObjectiveStat.competency_objective_count?t.competencyObjectiveStat.competency_objective_count:0)+"\n        "), s("span", {
                  staticClass:"content-item"
                }, [
                  t._v(t._s(t.$t("vtrs.resource.count")))
                ])
              ]), t._v(" "), s("SvgIcon", {
                staticClass:"stat-icon", attrs:{
                  name:"stat-4"
                }
              })
            ], 1)
          ]), t._v(" "), s("div", {
            staticClass:"multiple-cards"
          }, [
            s("div", {
              staticClass:"ai-card"
            }, [
              s("div", {
                staticClass:"card-title"
              }, [
                t._v(t._s(t.$t("air.aiInteractiveUse")))
              ]), t._v(" "), s("div", {
                staticClass:"card-content"
              }, [
                t._v("\n        "+t._s(t.airConversationStats.totalQuestions||0)+"\n        "), s("span", {
                  staticClass:"content-item"
                }, [
                  t._v(t._s(t.$t("vtrs.trialTeaching.stat.trialTeachingUnit")))
                ])
              ]), t._v(" "), s("SvgIcon", {
                staticClass:"stat-icon", attrs:{
                  name:"stat-5"
                }
              })
            ], 1), t._v(" "), t.allowExtensionApp?s("div", {
              staticClass:"agent-card"
            }, [
              s("div", {
                staticClass:"card-title"
              }, [
                t._v(t._s(t.$t("air.agent")))
              ]), t._v(" "), s("div", {
                staticClass:"card-content"
              }, [
                t._v("\n        "+t._s(t.courseExtensionApps.length||0)+"\n        "), s("span", {
                  staticClass:"content-item"
                }, [
                  t._v(t._s(t.$t("vtrs.resource.count")))
                ])
              ]), t._v(" "), s("SvgIcon", {
                staticClass:"stat-icon", attrs:{
                  name:"stat-6"
                }
              })
            ], 1):t._e()
          ])
        ])
      }), [
      ], !1, null, "509667a8", null).exports;
      var Ds=s(68049);
      const Ns=(0, i.pM)({
        name:"teaching-team", components:{
          Avatar:zt.A, TooltipExt:bs.A, SvgIcon:ts.A
        }, props:{
          courseId:Number, userId:Number, leader:Number
        }, setup:function(t){
          var e=(0, i.KR)([
          ]), s=function(e){
            return window.featureToggles.enableLecturerCourseRole?e.roles.includes("instructor"):t.leader===e.user.id
          };
          (0, Ht.cE)(t.courseId, {
          }, !t.userId).then((function(t){
            t.sort((function(t, e){
              return s(t)?-1:s(e)?1:0
            })), e.value=t
          }));
          var a=(0, i.EW)((function(){
            var t=e.value;
            return console.log(t), t&&t.find((function(t){
              return s(t)
            }))||{
            }
          })), n=(0, i.EW)((function(){
            var t=e.value;
            return t&&Array.isArray(t)&&0!==t.length?t.filter((function(t){
              return!s(t)
            })):[
            ]
          }));
          return{
            enrollments:e, isCourseLeader:s, teachers:n, leaderEnrollment:a, getTitle:function(t){
              var e, s, a;
              return Ut.bf[
                (null===(a=null===(s=null===(e=null==t?void 0:t.user)||void 0===e?void 0:e.userPersonas)||void 0===s?void 0:s.data)||void 0===a?void 0:a.title)||""
              ]
            }, getImgUrl:function(t){
              var e, s;
              return(null===(e=null==t?void 0:t.user)||void 0===e?void 0:e.avatarBigUrl)||(null===(s=null==t?void 0:t.user)||void 0===s?void 0:s.avatarSmallUrl)||Ds
            }
          }
        }
      });
      const Ps=(0, u.A)(Ns, (function(){
        var t=this, e=t.$createElement, s=t._self._c||e;
        return s("div", {
          staticClass:"teaching-team"
        }, [
          t.leaderEnrollment&&Object.keys(t.leaderEnrollment).length>0?s("div", {
            staticClass:"leader-card"
          }, [
            s("div", {
              staticClass:"teacher-logo"
            }, [
              s("img", {
                attrs:{
                  src:t.getImgUrl(t.leaderEnrollment)
                }
              })
            ]), t._v(" "), s("div", {
              staticClass:"main-container"
            }, [
              s("div", {
                staticClass:"name"
              }, [
                t._v(t._s(t.leaderEnrollment.user.name||""))
              ]), t._v(" "), s("div", {
                staticClass:"tags"
              }, [
                s("div", {
                  staticClass:"leader-tag"
                }, [
                  s("svg-icon", {
                    attrs:{
                      name:"leader-background"
                    }
                  }), t._v(" "), s("span", [
                    t._v(t._s(t.$t("teachingTeam.courseLeader")))
                  ])
                ], 1), t._v(" "), t.getTitle(t.leaderEnrollment)?s("div", {
                  staticClass:"divider"
                }):t._e(), t._v(" "), t.getTitle(t.leaderEnrollment)?s("div", {
                  staticClass:"professional"
                }, [
                  t._v(t._s(t.getTitle(t.leaderEnrollment)))
                ]):t._e(), t._v(" "), t.leaderEnrollment.user.userPersonas.data.direction?s("div", {
                  staticClass:"divider"
                }):t._e(), t._v(" "), t.leaderEnrollment.user.userPersonas.data.direction?s("div", {
                  staticClass:"direction"
                }, [
                  s("TooltipExt", {
                    attrs:{
                      text:t.leaderEnrollment.user.userPersonas.data.direction
                    }
                  }, [
                    t._v("\n            "+t._s(t.leaderEnrollment.user.userPersonas.data.direction)+"\n          ")
                  ])
                ], 1):t._e(), t._v(" "), t.leaderEnrollment.user.department.name?s("div", {
                  staticClass:"divider"
                }):t._e(), t._v(" "), t.leaderEnrollment.user.department.name?s("div", {
                  staticClass:"major direction"
                }, [
                  s("TooltipExt", {
                    attrs:{
                      text:t.leaderEnrollment.user.department.name
                    }
                  }, [
                    t._v("\n            "+t._s(t.leaderEnrollment.user.department.name)+"\n          ")
                  ])
                ], 1):t._e()
              ]), t._v(" "), s("div", {
                staticClass:"content"
              }, [
                t._v("\n        "+t._s(t.leaderEnrollment.user.userPersonas.data.desc||t.$t("teachingTeam.noTeacherDesc"))+"\n      ")
              ])
            ])
          ]):t._e(), t._v(" "), s("div", {
            staticClass:"teacher-cards"
          }, t._l(t.teachers, (function(e){
            return s("div", {
              key:e.user.id, staticClass:"teacher-card"
            }, [
              s("div", {
                staticClass:"card-header"
              }, [
                s("div", {
                  staticClass:"teacher-logo"
                }, [
                  s("Avatar", {
                    attrs:{
                      user:e.user
                    }
                  })
                ], 1), t._v(" "), s("div", {
                  staticClass:"teacher-info"
                }, [
                  s("div", {
                    staticClass:"name"
                  }, [
                    t._v(t._s(e.user.name))
                  ]), t._v(" "), s("div", {
                    staticClass:"info"
                  }, [
                    t.getTitle(e)?s("div", {
                      staticClass:"professional"
                    }, [
                      t._v(t._s(t.getTitle(e)))
                    ]):t._e(), t._v(" "), t.getTitle(e)&&e.user.userPersonas.data.direction?s("div", {
                      staticClass:"divider"
                    }):t._e(), t._v(" "), e.user.userPersonas.data.direction?s("div", {
                      staticClass:"direction"
                    }, [
                      s("TooltipExt", {
                        attrs:{
                          text:e.user.userPersonas.data.direction
                        }
                      }, [
                        t._v("\n                "+t._s(e.user.userPersonas.data.direction)+"\n              ")
                      ])
                    ], 1):t._e(), t._v(" "), e.user.userPersonas.data.direction&&e.user.department.name?s("div", {
                      staticClass:"divider"
                    }):t._e(), t._v(" "), t.getTitle(e)&&!e.user.userPersonas.data.direction&&e.user.department.name?s("div", {
                      staticClass:"divider"
                    }):t._e(), t._v(" "), s("div", {
                      staticClass:"major direction"
                    }, [
                      s("TooltipExt", {
                        attrs:{
                          text:e.user.department.name
                        }
                      }, [
                        t._v("\n                "+t._s(e.user.department.name)+"\n              ")
                      ])
                    ], 1)
                  ])
                ])
              ]), t._v(" "), s("div", {
                staticClass:"card-content"
              }, [
                t._v(t._s(e.user.userPersonas.data.desc||t.$t("teachingTeam.noTeacherDesc")))
              ])
            ])
          })), 0)
        ])
      }), [
      ], !1, null, "14d5f5ac", null).exports;
      var js=function(t, e, s, a){
        return new(s||(s=Promise))((function(n, i){
          function o(t){
            try{
              c(a.next(t))
            }
            catch(t){
              i(t)
            }
          }
          function r(t){
            try{
              c(a.throw(t))
            }
            catch(t){
              i(t)
            }
          }
          function c(t){
            var e;
            t.done?n(t.value):(e=t.value, e instanceof s?e:new s((function(t){
              t(e)
            }))).then(o, r)
          }
          c((a=a.apply(t, e||[
          ])).next())
        }))
      }, Ms=function(t, e){
        var s, a, n, i, o={
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
          next:r(0), throw:r(1), return:r(2)
        }, "function"==typeof Symbol&&(i[
          Symbol.iterator
        ]
        =function(){
          return this
        }), i;
        function r(r){
          return function(c){
            return function(r){
              if(s)throw new TypeError("Generator is already executing.");
              for(;
              i&&(i=0, r[
                0
              ]
              &&(o=0)), o;
              )try{
                if(s=1, a&&(n=2&r[
                  0
                ]
                ?a.return:r[
                  0
                ]
                ?a.throw||((n=a.return)&&n.call(a), 0):a.next)&&!(n=n.call(a, r[
                  1
                ])).done)return n;
                switch(a=0, n&&(r=[
                  2&r[
                    0
                  ], n.value
                ]), r[
                  0
                ]){
                  case 0:case 1:n=r;
                  break;
                  case 4:return o.label++, {
                    value:r[
                      1
                    ], done:!1
                  };
                  case 5:o.label++, a=r[
                    1
                  ], r=[
                    0
                  ];
                  continue;
                  case 7:r=o.ops.pop(), o.trys.pop();
                  continue;
                  default:if(!(n=o.trys, (n=n.length>0&&n[
                    n.length-1
                  ])||6!==r[
                    0
                  ]
                  &&2!==r[
                    0
                  ])){
                    o=0;
                    continue
                  }
                  if(3===r[
                    0
                  ]
                  &&(!n||r[
                    1
                  ]
                  >n[
                    0
                  ]
                  &&r[
                    1
                  ]
                  <n[
                    3
                  ])){
                    o.label=r[
                      1
                    ];
                    break
                  }
                  if(6===r[
                    0
                  ]
                  &&o.label<n[
                    1
                  ]){
                    o.label=n[
                      1
                    ], n=r;
                    break
                  }
                  if(n&&o.label<n[
                    2
                  ]){
                    o.label=n[
                      2
                    ], o.ops.push(r);
                    break
                  }
                  n[
                    2
                  ]
                  &&o.ops.pop(), o.trys.pop();
                  continue
                }
                r=e.call(t, o)
              }
              catch(t){
                r=[
                  6, t
                ], a=0
              }
              finally{
                s=n=0
              }
              if(5&r[
                0
              ])throw r[
                1
              ];
              return{
                value:r[
                  0
                ]
                ?r[
                  1
                ]
                :void 0, done:!0
              }
            }
            ([
              r, c
            ])
          }
        }
      };
      n.j.setWasmUrl(f), (0, a.kz)();
      const Gs=(0, i.pM)({
        components:{
          Theme4Tabs:$s, Outline:b, Statistics:xt, Star:Nt, JoinButton:qt, Extra:Vt, TeachingTeam:Yt, CourseModule:ne, KnowledgeGraph:Ie, Estimates:Oe, Stat:ht, ProblemGraph:Ze, CompetencyGraph:p, Theme1:ds, Theme5:ss, Theme3:is, Theme2:fs, Theme4:Ts, StatCards:Rs, Teachers:Ps
        }, props:{
          courseId:Number, userId:Number, treeDepth:Number, theme:String, knowledgeGraphPublishType:String, problemGraphPublishType:String
        }, setup:function(t){
          var e=this, s=(0, i.KR)(!1), a=(0, i.KR)(!1), n=(0, i.KR)(!1), c=(0, i.KR)(!1), l=(0, i.KR)(new _.QB), u=(0, i.KR)(!0), d=(0, i.KR)(null), v=(0, i.KR)({
          });
          (0, m.gu)(t.courseId, !t.userId).then((function(t){
            l.value=t
          }));
          var p=(0, i.KR)({
          });
          t.userId&&(0, o.kJ)(t.courseId, {
          }).then((function(t){
            p.value=t
          }));
          var f=(0, i.EW)((function(){
            return l.value.instructors.map((function(t){
              return t.name
            })).join("、")
          })), h=(0, i.KR)("info");
          return v.value=wt({
            courseId:t.courseId, userId:t.userId, knowledgeGraphPublishType:t.knowledgeGraphPublishType, problemGraphPublishType:t.problemGraphPublishType
          }), (0, i.sV)((function(){
            return js(e, void 0, void 0, (function(){
              return Ms(this, (function(e){
                switch(e.label){
                  case 0:return u.value=!0, v.value.fetchCourseStats(), [
                    4, (0, Rt(t.courseId, t.userId).load)()
                  ];
                  case 1:return e.sent(), (0, m.xv)(t.courseId, !t.userId).then((function(t){
                    d.value=t
                  })), u.value=!1, [
                    2
                  ]
                }
              }))
            }))
          })), {
            swap:n, courseInfo:l, tabRenderFactory:function(t, e){
              return function(s){
                return s("div", {
                  class:"tab-render"
                }, [
                  s("svg-icon", {
                    props:{
                      name:e
                    }
                  }), s("span", t)
                ])
              }
            }, visitsData:p, showDescModal:s, showMoreDesc:a, defaultCourseCover:r, instructorNames:f, tab:h, showAirTag:c, isLoading:u, state:d, statRes:v
          }
        }
      });
      const Os=(0, u.A)(Gs, (function(){
        var t=this, e=t.$createElement, s=t._self._c||e;
        return s("main", {
          staticClass:"container"
        }, [
          s(t.theme, {
            tag:"component", attrs:{
              "course-id":t.courseId, "user-id":t.userId, "course-info":t.courseInfo, "visit-count":t.visitsData.count, "instructor-names":t.instructorNames, "stat-res":t.statRes, state:t.state
            }, on:{
              "open-description-modal":function(e){
                t.showDescModal=!0
              }
            }
          }), t._v(" "), s("Modal", {
            attrs:{
              width:600, title:t.$t("courseHome.courseInfo"), "footer-hide":""
            }, model:{
              value:t.showDescModal, callback:function(e){
                t.showDescModal=e
              }, expression:"showDescModal"
            }
          }, [
            s("p", {
              domProps:{
                innerHTML:t._s(t.courseInfo.classroomSchedule)
              }
            })
          ]), t._v(" "), "theme4"===t.theme?s("Theme4Tabs", {
            model:{
              value:t.tab, callback:function(e){
                t.tab=e
              }, expression:"tab"
            }
          }):t._e(), t._v(" "), s("section", [
            t.isLoading||"theme4"===t.theme?t._e():s("Tabs", {
              directives:[
                {
                  name:"wheel-allow-scroll", rawName:"v-wheel-allow-scroll"
                }
              ], model:{
                value:t.tab, callback:function(e){
                  t.tab=e
                }, expression:"tab"
              }
            }, [
              s("TabPane", {
                attrs:{
                  label:t.tabRenderFactory(t.$t("course_outline"), "course-info"), name:"info"
                }
              }), t._v(" "), s("TabPane", {
                attrs:{
                  label:t.tabRenderFactory(t.$t("teachingTeam.teacherTeam"), "teaching-team"), name:"teaching-team"
                }
              }), t._v(" "), s("TabPane", {
                attrs:{
                  label:t.tabRenderFactory(t.$t("courseHome.courseModule"), "course-catalog"), name:"course-module"
                }
              }), t._v(" "), t.$featureToggles.courseEstimate?s("TabPane", {
                attrs:{
                  label:t.tabRenderFactory(t.$t("courseEstimate"), "course-estimate"), name:"estimates"
                }
              }):t._e(), t._v(" "), t.$featureToggles.knowledgeGraph?s("TabPane", {
                attrs:{
                  label:t.tabRenderFactory(t.$t("knowledgeGraph.title"), "knowledge-graph-tab"), name:"knowledge-graph"
                }
              }):t._e(), t._v(" "), t.$featureToggles.knowledgeGraph?s("TabPane", {
                attrs:{
                  label:t.tabRenderFactory(t.$t("problemGraph.graph"), "problem-graph-tab"), name:"problem-graph"
                }
              }):t._e(), t._v(" "), t.$featureToggles.knowledgeGraph?s("TabPane", {
                attrs:{
                  label:t.tabRenderFactory(t.$t("competencyGraph.name"), "competency-graph"), name:"competency-graph"
                }
              }):t._e(), t._v(" "), t.$featureToggles.newCourseHomeTeachingData?s("TabPane", {
                attrs:{
                  label:t.tabRenderFactory(t.$t("njtc.teachingData"), "course-stat"), name:"stat"
                }
              }):t._e()
            ], 1), t._v(" "), "info"===t.tab&&"theme4"===t.theme&&t.courseId&&t.userId?s("StatCards", {
              attrs:{
                "course-info":t.courseInfo, "course-id":t.courseId, "user-id":t.userId, "stat-res":t.statRes
              }
            }):t._e(), t._v(" "), "info"===t.tab?s("Outline", {
              attrs:{
                "course-id":t.courseId, "user-id":t.userId
              }
            }):t._e(), t._v(" "), "teaching-team"===t.tab&&"theme4"!==t.theme?s("TeachingTeam", {
              attrs:{
                leader:t.courseInfo.courseAttributes.data.leader, "course-id":t.courseId, "user-id":t.userId
              }
            }):t._e(), t._v(" "), "teaching-team"===t.tab&&"theme4"===t.theme?s("Teachers", {
              attrs:{
                leader:t.courseInfo.courseAttributes.data.leader, "course-id":t.courseId, "user-id":t.userId
              }
            }):t._e(), t._v(" "), "course-module"===t.tab?s("CourseModule", {
              attrs:{
                "course-id":t.courseId, "user-id":t.userId, course:t.courseInfo
              }
            }):t._e(), t._v(" "), t.courseInfo.id&&"knowledge-graph"===t.tab?s("KnowledgeGraph", {
              attrs:{
                "publish-type":t.courseInfo.knowledgeGraphPublishType, course:t.courseInfo, "user-id":t.userId, "tree-depth":t.treeDepth, state:t.state
              }
            }):t._e(), t._v(" "), "estimates"===t.tab?s("Estimates", {
              attrs:{
                "course-id":t.courseId, "user-id":t.userId
              }
            }):t._e(), t._v(" "), t.courseInfo.id&&"stat"===t.tab?s("Stat", {
              attrs:{
                course:t.courseInfo, "user-id":t.userId
              }
            }):t._e(), t._v(" "), t.courseInfo.id&&"problem-graph"===t.tab?s("ProblemGraph", {
              attrs:{
                "publish-type":t.courseInfo.problemGraphPublishType, course:t.courseInfo, "user-id":t.userId, state:t.state
              }
            }):t._e(), t._v(" "), "competency-graph"===t.tab?s("CompetencyGraph", {
              attrs:{
                "publish-type":"courseInfo.problemGraphPublishType", course:t.courseInfo, "user-id":t.userId, state:t.state
              }
            }):t._e()
          ], 1), t._v(" "), s("section", [
            s("Extra", {
              attrs:{
                course:t.courseInfo
              }
            })
          ], 1)
        ], 1)
      }), [
      ], !1, null, "a165d81e", null).exports
    }
  }
]);
