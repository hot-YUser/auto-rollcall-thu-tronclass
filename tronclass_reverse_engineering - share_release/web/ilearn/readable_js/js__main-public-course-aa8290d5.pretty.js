(self.webpackChunklms=self.webpackChunklms||[
]).push([
  [
    74538
  ], {
    5684:(e, t, r)=>{
      r(906048);
      var n=Object.prototype.toString;
      e.exports=function(e){
        return n.call(e)
      }
    }, 119944:(e, t, r)=>{
      r(714913), r(640173);
      var n=r(379787), o=r(208428), a=/^\s+|\s+$/g, s=/^[
        -+
      ]
      0x[
        0-9a-f
      ]
      +$/i, i=/^0b[
        01
      ]
      +$/i, c=/^0o[
        0-7
      ]
      +$/i, u=parseInt;
      e.exports=function(e){
        if("number"==typeof e)return e;
        if(o(e))return NaN;
        if(n(e)){
          var t="function"==typeof e.valueOf?e.valueOf():e;
          e=n(t)?t+"":t
        }
        if("string"!=typeof e)return 0===e?e:+e;
        e=e.replace(a, "");
        var r=i.test(e);
        return r||c.test(e)?u(e.slice(2), r?2:8):s.test(e)?NaN:+e
      }
    }, 164464:(e, t, r)=>{
      var n=r(903087), o=r(542900);
      (0, n.Y)(o.a)
    }, 208428:(e, t, r)=>{
      var n=r(395346), o=r(290484);
      e.exports=function(e){
        return"symbol"==typeof e||o(e)&&"[object Symbol]"==n(e)
      }
    }, 238696:(e, t, r)=>{
      var n=r(962893), o=r(846413), a=r(552979), s=(r(540590), r(418665), r(700533), r(334867), r(269193), r(658379), r(14602), r(595738)), i=r(255634), c=r(731904), u=r(979278), l=r(703066), d=function(e, t, r, n){
        return new(r||(r=Promise))((function(o, a){
          function s(e){
            try{
              c(n.next(e))
            }
            catch(e){
              a(e)
            }
          }
          function i(e){
            try{
              c(n.throw(e))
            }
            catch(e){
              a(e)
            }
          }
          function c(e){
            var t;
            e.done?o(e.value):(t=e.value, t instanceof r?t:new r((function(e){
              e(t)
            }))).then(s, i)
          }
          c((n=n.apply(e, t||[
          ])).next())
        }))
      }, p=function(e, t){
        var r, n, o, a, s={
          label:0, sent:function(){
            if(1&o[
              0
            ])throw o[
              1
            ];
            return o[
              1
            ]
          }, trys:[
          ], ops:[
          ]
        };
        return a={
          next:i(0), throw:i(1), return:i(2)
        }, "function"==typeof Symbol&&(a[
          Symbol.iterator
        ]
        =function(){
          return this
        }), a;
        function i(i){
          return function(c){
            return function(i){
              if(r)throw new TypeError("Generator is already executing.");
              for(;
              a&&(a=0, i[
                0
              ]
              &&(s=0)), s;
              )try{
                if(r=1, n&&(o=2&i[
                  0
                ]
                ?n.return:i[
                  0
                ]
                ?n.throw||((o=n.return)&&o.call(n), 0):n.next)&&!(o=o.call(n, i[
                  1
                ])).done)return o;
                switch(n=0, o&&(i=[
                  2&i[
                    0
                  ], o.value
                ]), i[
                  0
                ]){
                  case 0:case 1:o=i;
                  break;
                  case 4:return s.label++, {
                    value:i[
                      1
                    ], done:!1
                  };
                  case 5:s.label++, n=i[
                    1
                  ], i=[
                    0
                  ];
                  continue;
                  case 7:i=s.ops.pop(), s.trys.pop();
                  continue;
                  default:if(!(o=s.trys, (o=o.length>0&&o[
                    o.length-1
                  ])||6!==i[
                    0
                  ]
                  &&2!==i[
                    0
                  ])){
                    s=0;
                    continue
                  }
                  if(3===i[
                    0
                  ]
                  &&(!o||i[
                    1
                  ]
                  >o[
                    0
                  ]
                  &&i[
                    1
                  ]
                  <o[
                    3
                  ])){
                    s.label=i[
                      1
                    ];
                    break
                  }
                  if(6===i[
                    0
                  ]
                  &&s.label<o[
                    1
                  ]){
                    s.label=o[
                      1
                    ], o=i;
                    break
                  }
                  if(o&&s.label<o[
                    2
                  ]){
                    s.label=o[
                      2
                    ], s.ops.push(i);
                    break
                  }
                  o[
                    2
                  ]
                  &&s.ops.pop(), s.trys.pop();
                  continue
                }
                i=t.call(e, s)
              }
              catch(e){
                i=[
                  6, e
                ], n=0
              }
              finally{
                r=o=0
              }
              if(5&i[
                0
              ])throw i[
                1
              ];
              return{
                value:i[
                  0
                ]
                ?i[
                  1
                ]
                :void 0, done:!0
              }
            }
            ([
              i, c
            ])
          }
        }
      };
      const v=(0, s.pM)({
        props:{
          value:{
            type:Boolean, default:!1
          }
        }, setup:function(e, t){
          var r=this, n=t.emit, o=(0, s.KR)(""), a=function(){
            n("input", !1), o.value=""
          };
          return{
            toggleOpen:function(e){
              return d(r, void 0, void 0, (function(){
                return p(this, (function(t){
                  return n("input", e), o.value="", [
                    2
                  ]
                }))
              }))
            }, close:a, groupName:o, commit:function(){
              n("on-submit", o.value), a()
            }
          }
        }
      });
      var f=r(514486);
      const m=(0, f.A)(v, (function(){
        var e=this, t=e.$createElement, r=e._self._c||t;
        return r("Modal", {
          staticClass:"create-group-modal", attrs:{
            value:e.value, "footer-hide":!0, width:400, title:e.$t("courseScore.scoreItemGroup.createGroup")
          }, on:{
            "on-visible-change":e.toggleOpen
          }
        }, [
          r("div", [
            r("div", {
              staticClass:"name-input"
            }, [
              r("div", {
                staticClass:"label-name"
              }, [
                e._v(e._s(e.$t("courseScore.scoreItemGroup.groupName")))
              ]), e._v(" "), r("div", {
                staticClass:"input-div"
              }, [
                r("Input", {
                  model:{
                    value:e.groupName, callback:function(t){
                      e.groupName=t
                    }, expression:"groupName"
                  }
                })
              ], 1)
            ]), e._v(" "), r("div", {
              staticClass:"buttons"
            }, [
              r("Button", {
                attrs:{
                  type:"primary", disabled:!e.groupName
                }, on:{
                  click:e.commit
                }
              }, [
                e._v(e._s(e.$t("confirm")))
              ]), e._v(" "), r("Button", {
                attrs:{
                  type:"default"
                }, on:{
                  click:e.close
                }
              }, [
                e._v(e._s(e.$t("cancel")))
              ])
            ], 1)
          ])
        ])
      }), [
      ], !1, null, "7c1b6552", null).exports;
      var h=function(e, t, r, n){
        return new(r||(r=Promise))((function(o, a){
          function s(e){
            try{
              c(n.next(e))
            }
            catch(e){
              a(e)
            }
          }
          function i(e){
            try{
              c(n.throw(e))
            }
            catch(e){
              a(e)
            }
          }
          function c(e){
            var t;
            e.done?o(e.value):(t=e.value, t instanceof r?t:new r((function(e){
              e(t)
            }))).then(s, i)
          }
          c((n=n.apply(e, t||[
          ])).next())
        }))
      }, _=function(e, t){
        var r, n, o, a, s={
          label:0, sent:function(){
            if(1&o[
              0
            ])throw o[
              1
            ];
            return o[
              1
            ]
          }, trys:[
          ], ops:[
          ]
        };
        return a={
          next:i(0), throw:i(1), return:i(2)
        }, "function"==typeof Symbol&&(a[
          Symbol.iterator
        ]
        =function(){
          return this
        }), a;
        function i(i){
          return function(c){
            return function(i){
              if(r)throw new TypeError("Generator is already executing.");
              for(;
              a&&(a=0, i[
                0
              ]
              &&(s=0)), s;
              )try{
                if(r=1, n&&(o=2&i[
                  0
                ]
                ?n.return:i[
                  0
                ]
                ?n.throw||((o=n.return)&&o.call(n), 0):n.next)&&!(o=o.call(n, i[
                  1
                ])).done)return o;
                switch(n=0, o&&(i=[
                  2&i[
                    0
                  ], o.value
                ]), i[
                  0
                ]){
                  case 0:case 1:o=i;
                  break;
                  case 4:return s.label++, {
                    value:i[
                      1
                    ], done:!1
                  };
                  case 5:s.label++, n=i[
                    1
                  ], i=[
                    0
                  ];
                  continue;
                  case 7:i=s.ops.pop(), s.trys.pop();
                  continue;
                  default:if(!(o=s.trys, (o=o.length>0&&o[
                    o.length-1
                  ])||6!==i[
                    0
                  ]
                  &&2!==i[
                    0
                  ])){
                    s=0;
                    continue
                  }
                  if(3===i[
                    0
                  ]
                  &&(!o||i[
                    1
                  ]
                  >o[
                    0
                  ]
                  &&i[
                    1
                  ]
                  <o[
                    3
                  ])){
                    s.label=i[
                      1
                    ];
                    break
                  }
                  if(6===i[
                    0
                  ]
                  &&s.label<o[
                    1
                  ]){
                    s.label=o[
                      1
                    ], o=i;
                    break
                  }
                  if(o&&s.label<o[
                    2
                  ]){
                    s.label=o[
                      2
                    ], s.ops.push(i);
                    break
                  }
                  o[
                    2
                  ]
                  &&s.ops.pop(), s.trys.pop();
                  continue
                }
                i=t.call(e, s)
              }
              catch(e){
                i=[
                  6, e
                ], n=0
              }
              finally{
                r=o=0
              }
              if(5&i[
                0
              ])throw i[
                1
              ];
              return{
                value:i[
                  0
                ]
                ?i[
                  1
                ]
                :void 0, done:!0
              }
            }
            ([
              i, c
            ])
          }
        }
      };
      const g=(0, s.pM)({
        props:{
          value:{
            type:Boolean, default:!1
          }
        }, setup:function(e, t){
          var r=this, n=t.emit, o=function(){
            n("input", !1)
          };
          return{
            toggleOpen:function(e){
              return h(r, void 0, void 0, (function(){
                return _(this, (function(t){
                  return n("input", e), [
                    2
                  ]
                }))
              }))
            }, close:o, commit:function(){
              n("on-submit"), o()
            }
          }
        }
      });
      const b=(0, f.A)(g, (function(){
        var e=this, t=e.$createElement, r=e._self._c||t;
        return r("Modal", {
          staticClass:"delete-group-modal", attrs:{
            value:e.value, "footer-hide":!0, width:400, title:e.$t("courseScore.scoreItemGroup.deleteGroup")
          }, on:{
            "on-visible-change":e.toggleOpen
          }
        }, [
          r("div", [
            r("div", {
              staticClass:"delete-tips"
            }, [
              e._v("\n      "+e._s(e.$t("courseScore.scoreItemGroup.deleteGroupTips"))+"\n    ")
            ]), e._v(" "), r("div", {
              staticClass:"buttons"
            }, [
              r("Button", {
                attrs:{
                  type:"primary"
                }, on:{
                  click:e.commit
                }
              }, [
                e._v(e._s(e.$t("confirm")))
              ]), e._v(" "), r("Button", {
                attrs:{
                  type:"default"
                }, on:{
                  click:e.close
                }
              }, [
                e._v(e._s(e.$t("cancel")))
              ])
            ], 1)
          ])
        ])
      }), [
      ], !1, null, "0ac4bcc4", null).exports;
      var y=function(e, t, r, n){
        return new(r||(r=Promise))((function(o, a){
          function s(e){
            try{
              c(n.next(e))
            }
            catch(e){
              a(e)
            }
          }
          function i(e){
            try{
              c(n.throw(e))
            }
            catch(e){
              a(e)
            }
          }
          function c(e){
            var t;
            e.done?o(e.value):(t=e.value, t instanceof r?t:new r((function(e){
              e(t)
            }))).then(s, i)
          }
          c((n=n.apply(e, t||[
          ])).next())
        }))
      }, S=function(e, t){
        var r, n, o, a, s={
          label:0, sent:function(){
            if(1&o[
              0
            ])throw o[
              1
            ];
            return o[
              1
            ]
          }, trys:[
          ], ops:[
          ]
        };
        return a={
          next:i(0), throw:i(1), return:i(2)
        }, "function"==typeof Symbol&&(a[
          Symbol.iterator
        ]
        =function(){
          return this
        }), a;
        function i(i){
          return function(c){
            return function(i){
              if(r)throw new TypeError("Generator is already executing.");
              for(;
              a&&(a=0, i[
                0
              ]
              &&(s=0)), s;
              )try{
                if(r=1, n&&(o=2&i[
                  0
                ]
                ?n.return:i[
                  0
                ]
                ?n.throw||((o=n.return)&&o.call(n), 0):n.next)&&!(o=o.call(n, i[
                  1
                ])).done)return o;
                switch(n=0, o&&(i=[
                  2&i[
                    0
                  ], o.value
                ]), i[
                  0
                ]){
                  case 0:case 1:o=i;
                  break;
                  case 4:return s.label++, {
                    value:i[
                      1
                    ], done:!1
                  };
                  case 5:s.label++, n=i[
                    1
                  ], i=[
                    0
                  ];
                  continue;
                  case 7:i=s.ops.pop(), s.trys.pop();
                  continue;
                  default:if(!(o=s.trys, (o=o.length>0&&o[
                    o.length-1
                  ])||6!==i[
                    0
                  ]
                  &&2!==i[
                    0
                  ])){
                    s=0;
                    continue
                  }
                  if(3===i[
                    0
                  ]
                  &&(!o||i[
                    1
                  ]
                  >o[
                    0
                  ]
                  &&i[
                    1
                  ]
                  <o[
                    3
                  ])){
                    s.label=i[
                      1
                    ];
                    break
                  }
                  if(6===i[
                    0
                  ]
                  &&s.label<o[
                    1
                  ]){
                    s.label=o[
                      1
                    ], o=i;
                    break
                  }
                  if(o&&s.label<o[
                    2
                  ]){
                    s.label=o[
                      2
                    ], s.ops.push(i);
                    break
                  }
                  o[
                    2
                  ]
                  &&s.ops.pop(), s.trys.pop();
                  continue
                }
                i=t.call(e, s)
              }
              catch(e){
                i=[
                  6, e
                ], n=0
              }
              finally{
                r=o=0
              }
              if(5&i[
                0
              ])throw i[
                1
              ];
              return{
                value:i[
                  0
                ]
                ?i[
                  1
                ]
                :void 0, done:!0
              }
            }
            ([
              i, c
            ])
          }
        }
      };
      const w=(0, s.pM)({
        props:{
          value:{
            type:Boolean, default:!1
          }, name:{
            type:String, required:!0
          }, groupId:{
            type:Number, required:!0
          }
        }, setup:function(e, t){
          var r=this, n=t.emit, o=(0, s.KR)(""), a=function(){
            n("input", !1), o.value=""
          };
          return{
            toggleOpen:function(t){
              return y(r, void 0, void 0, (function(){
                return S(this, (function(r){
                  return n("input", t), o.value=t?e.name:"", [
                    2
                  ]
                }))
              }))
            }, close:a, groupName:o, commit:function(){
              n("on-submit", e.groupId, o.value), a()
            }
          }
        }
      });
      const I=(0, f.A)(w, (function(){
        var e=this, t=e.$createElement, r=e._self._c||t;
        return r("Modal", {
          staticClass:"edit-group-modal", attrs:{
            value:e.value, "footer-hide":!0, width:400, title:e.$t("courseScore.scoreItemGroup.editGroup")
          }, on:{
            "on-visible-change":e.toggleOpen
          }
        }, [
          r("div", [
            r("div", {
              staticClass:"name-input"
            }, [
              r("div", {
                staticClass:"label-name"
              }, [
                e._v(e._s(e.$t("courseScore.scoreItemGroup.groupName")))
              ]), e._v(" "), r("div", {
                staticClass:"input-div"
              }, [
                r("Input", {
                  model:{
                    value:e.groupName, callback:function(t){
                      e.groupName=t
                    }, expression:"groupName"
                  }
                })
              ], 1)
            ]), e._v(" "), r("div", {
              staticClass:"buttons"
            }, [
              r("Button", {
                attrs:{
                  type:"primary", disabled:!e.groupName
                }, on:{
                  click:e.commit
                }
              }, [
                e._v(e._s(e.$t("confirm")))
              ]), e._v(" "), r("Button", {
                attrs:{
                  type:"default"
                }, on:{
                  click:e.close
                }
              }, [
                e._v(e._s(e.$t("cancel")))
              ])
            ], 1)
          ])
        ])
      }), [
      ], !1, null, "42c83758", null).exports;
      var x=r(297786), C=(r(169218), r(795093)), k=r(454985), A=function(){
        return(A=Object.assign||function(e){
          for(var t, r=1, n=arguments.length;
          r<n;
          r++)for(var o in t=arguments[
            r
          ])Object.prototype.hasOwnProperty.call(t, o)&&(e[
            o
          ]
          =t[
            o
          ]);
          return e
        }).apply(this, arguments)
      }, $=function(e, t, r, n){
        return new(r||(r=Promise))((function(o, a){
          function s(e){
            try{
              c(n.next(e))
            }
            catch(e){
              a(e)
            }
          }
          function i(e){
            try{
              c(n.throw(e))
            }
            catch(e){
              a(e)
            }
          }
          function c(e){
            var t;
            e.done?o(e.value):(t=e.value, t instanceof r?t:new r((function(e){
              e(t)
            }))).then(s, i)
          }
          c((n=n.apply(e, t||[
          ])).next())
        }))
      }, G=function(e, t){
        var r, n, o, a, s={
          label:0, sent:function(){
            if(1&o[
              0
            ])throw o[
              1
            ];
            return o[
              1
            ]
          }, trys:[
          ], ops:[
          ]
        };
        return a={
          next:i(0), throw:i(1), return:i(2)
        }, "function"==typeof Symbol&&(a[
          Symbol.iterator
        ]
        =function(){
          return this
        }), a;
        function i(i){
          return function(c){
            return function(i){
              if(r)throw new TypeError("Generator is already executing.");
              for(;
              a&&(a=0, i[
                0
              ]
              &&(s=0)), s;
              )try{
                if(r=1, n&&(o=2&i[
                  0
                ]
                ?n.return:i[
                  0
                ]
                ?n.throw||((o=n.return)&&o.call(n), 0):n.next)&&!(o=o.call(n, i[
                  1
                ])).done)return o;
                switch(n=0, o&&(i=[
                  2&i[
                    0
                  ], o.value
                ]), i[
                  0
                ]){
                  case 0:case 1:o=i;
                  break;
                  case 4:return s.label++, {
                    value:i[
                      1
                    ], done:!1
                  };
                  case 5:s.label++, n=i[
                    1
                  ], i=[
                    0
                  ];
                  continue;
                  case 7:i=s.ops.pop(), s.trys.pop();
                  continue;
                  default:if(!(o=s.trys, (o=o.length>0&&o[
                    o.length-1
                  ])||6!==i[
                    0
                  ]
                  &&2!==i[
                    0
                  ])){
                    s=0;
                    continue
                  }
                  if(3===i[
                    0
                  ]
                  &&(!o||i[
                    1
                  ]
                  >o[
                    0
                  ]
                  &&i[
                    1
                  ]
                  <o[
                    3
                  ])){
                    s.label=i[
                      1
                    ];
                    break
                  }
                  if(6===i[
                    0
                  ]
                  &&s.label<o[
                    1
                  ]){
                    s.label=o[
                      1
                    ], o=i;
                    break
                  }
                  if(o&&s.label<o[
                    2
                  ]){
                    s.label=o[
                      2
                    ], s.ops.push(i);
                    break
                  }
                  o[
                    2
                  ]
                  &&s.ops.pop(), s.trys.pop();
                  continue
                }
                i=t.call(e, s)
              }
              catch(e){
                i=[
                  6, e
                ], n=0
              }
              finally{
                r=o=0
              }
              if(5&i[
                0
              ])throw i[
                1
              ];
              return{
                value:i[
                  0
                ]
                ?i[
                  1
                ]
                :void 0, done:!0
              }
            }
            ([
              i, c
            ])
          }
        }
      };
      const D=(0, s.pM)({
        name:"common-setting-modal", components:{
          DatePickerExt:k.default
        }, emits:[
          "on-submit"
        ], props:{
          value:{
            type:Boolean, required:!0
          }, scoreItem:{
            type:Object, required:!0
          }, scoreItemGroups:{
            type:Array, required:!0
          }
        }, setup:function(e, t){
          var r=this, n=(0, x.hRP)(e, "value", t.emit, {
            eventName:"input"
          }), o=(0, s.EW)((function(){
            return{
              scored:String(e.scoreItem.scored), groupId:e.scoreItem.groupId, announceScoreType:e.scoreItem.announceScoreType, announceScoreTime:e.scoreItem.announceScoreTime
            }
          })), i=(0, s.KR)(A({
          }, o.value)), u=(0, s.EW)((function(){
            return[
              "custom", "homework_activity", "exam_activity", "forum_activity"
            ].includes(e.scoreItem.type)
          }));
          (0, s.wB)((function(){
            return i.value.scored
          }), (function(t){
            "false"===t?(i.value.groupId=0, i.value.announceScoreType="no_announce", i.value.announceScoreTime=null):i.value.groupId=e.scoreItemGroups[
              0
            ].id
          }));
          return{
            ok:function(){
              return $(r, void 0, void 0, (function(){
                var r;
                return G(this, (function(o){
                  switch(o.label){
                    case 0:return o.trys.push([
                      0, 2, , 3
                    ]), [
                      4, (0, l.np)(e.scoreItem.id, i.value)
                    ];
                    case 1:return r=o.sent(), t.emit("on-submit"), c.Toast.success(r.message), [
                      3, 3
                    ];
                    case 2:return o.sent(), c.Toast.error(a.default.t("save_error")), [
                      3, 3
                    ];
                    case 3:return n.value=!1, [
                      2
                    ]
                  }
                }))
              }))
            }, cancel:function(){
              n.value=!1
            }, show:n, formData:i, onChangeAnnounceScore:function(e){
              i.value.announceScoreTime="no_announce"===e?null:C().toISOString()
            }, needAnnounceScore:u, visibleChangeHandler:function(e){
              e&&(i.value=A({
              }, o.value))
            }
          }
        }
      });
      const T=(0, f.A)(D, (function(){
        var e=this, t=e.$createElement, r=e._self._c||t;
        return r("Modal", {
          ref:"modal", staticClass:"common-setting-modal", attrs:{
            width:"660", title:e.$t("rollcallScoreSettingPage.title")
          }, on:{
            "on-visible-change":e.visibleChangeHandler
          }, model:{
            value:e.show, callback:function(t){
              e.show=t
            }, expression:"show"
          }
        }, [
          r("Form", {
            staticClass:"setting-form-area", attrs:{
              model:e.formData, "label-position":"left", "label-width":120
            }
          }, [
            r("FormItem", {
              class:{
                "no-margin-bottom":"true"===e.formData.scored
              }, attrs:{
                label:e.$t("courseScore.scoreItemGroup.unscoredName"), prop:"scored"
              }
            }, [
              r("RadioGroup", {
                model:{
                  value:e.formData.scored, callback:function(t){
                    e.$set(e.formData, "scored", t)
                  }, expression:"formData.scored"
                }
              }, [
                r("Radio", {
                  attrs:{
                    label:"true"
                  }
                }, [
                  r("span", [
                    e._v(e._s(e.$t("yes")))
                  ])
                ]), e._v(" "), r("Radio", {
                  attrs:{
                    label:"false"
                  }
                }, [
                  r("span", [
                    e._v(e._s(e.$t("no")))
                  ])
                ])
              ], 1)
            ], 1), e._v(" "), "true"===e.formData.scored?r("FormItem", {
              staticClass:"no-margin-bottom select-score-group", attrs:{
                label:e.$t("courseScore.scoreItemGroup.scoreGroupName"), required:"", props:"groupId"
              }
            }, [
              r("Select", {
                model:{
                  value:e.formData.groupId, callback:function(t){
                    e.$set(e.formData, "groupId", t)
                  }, expression:"formData.groupId"
                }
              }, e._l(e.scoreItemGroups, (function(e){
                return r("Option", {
                  key:e.id, attrs:{
                    value:e.id, label:e.name
                  }
                })
              })), 1)
            ], 1):e._e(), e._v(" "), e.needAnnounceScore?r("FormItem", {
              attrs:{
                label:e.$t("courseScore.scoreItemGroup.publishScore"), props:"announceScoreType"
              }
            }, [
              r("RadioGroup", {
                on:{
                  "on-change":e.onChangeAnnounceScore
                }, model:{
                  value:e.formData.announceScoreType, callback:function(t){
                    e.$set(e.formData, "announceScoreType", t)
                  }, expression:"formData.announceScoreType"
                }
              }, [
                r("Radio", {
                  attrs:{
                    label:"no_announce"
                  }
                }, [
                  e._v(e._s(e.$t("courseScore.scoreItemGroup.willNotPublish")))
                ]), e._v(" "), r("Radio", {
                  attrs:{
                    label:"immediate_announce"
                  }
                }, [
                  "exam_activity"===e.scoreItem.type?r("span", [
                    e._v("\n            "+e._s(e.$t("courseScore.scoreItemGroup.immediateSubmit"))+"\n          ")
                  ]):r("span", [
                    e._v(e._s(e.$t("courseScore.scoreItemGroup.immediatePublish")))
                  ])
                ]), e._v(" "), r("Radio", {
                  attrs:{
                    label:"timed_announce"
                  }
                }, [
                  e._v(e._s(e.$t("courseScore.scoreItemGroup.customPublishScoreTime")))
                ])
              ], 1), e._v(" "), "timed_announce"===e.formData.announceScoreType?r("div", [
                r("DatePickerExt", {
                  staticStyle:{
                    width:"175px"
                  }, attrs:{
                    type:"datetime", format:"yyyy-MM-dd HH:mm", clearable:!1
                  }, model:{
                    value:e.formData.announceScoreTime, callback:function(t){
                      e.$set(e.formData, "announceScoreTime", t)
                    }, expression:"formData.announceScoreTime"
                  }
                })
              ], 1):e._e()
            ], 1):e._e()
          ], 1), e._v(" "), r("div", {
            staticClass:"modal-footer", attrs:{
              slot:"footer"
            }, slot:"footer"
          }, [
            r("Button", {
              attrs:{
                type:"primary"
              }, on:{
                click:e.ok
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
          ], 1)
        ], 1)
      }), [
      ], !1, null, "23d8035b", null).exports;
      r(168763);
      var E=r(302543), P=r.n(E), R=function(){
        return(R=Object.assign||function(e){
          for(var t, r=1, n=arguments.length;
          r<n;
          r++)for(var o in t=arguments[
            r
          ])Object.prototype.hasOwnProperty.call(t, o)&&(e[
            o
          ]
          =t[
            o
          ]);
          return e
        }).apply(this, arguments)
      }, M=function(e, t, r, n){
        return new(r||(r=Promise))((function(o, a){
          function s(e){
            try{
              c(n.next(e))
            }
            catch(e){
              a(e)
            }
          }
          function i(e){
            try{
              c(n.throw(e))
            }
            catch(e){
              a(e)
            }
          }
          function c(e){
            var t;
            e.done?o(e.value):(t=e.value, t instanceof r?t:new r((function(e){
              e(t)
            }))).then(s, i)
          }
          c((n=n.apply(e, t||[
          ])).next())
        }))
      }, N=function(e, t){
        var r, n, o, a, s={
          label:0, sent:function(){
            if(1&o[
              0
            ])throw o[
              1
            ];
            return o[
              1
            ]
          }, trys:[
          ], ops:[
          ]
        };
        return a={
          next:i(0), throw:i(1), return:i(2)
        }, "function"==typeof Symbol&&(a[
          Symbol.iterator
        ]
        =function(){
          return this
        }), a;
        function i(i){
          return function(c){
            return function(i){
              if(r)throw new TypeError("Generator is already executing.");
              for(;
              a&&(a=0, i[
                0
              ]
              &&(s=0)), s;
              )try{
                if(r=1, n&&(o=2&i[
                  0
                ]
                ?n.return:i[
                  0
                ]
                ?n.throw||((o=n.return)&&o.call(n), 0):n.next)&&!(o=o.call(n, i[
                  1
                ])).done)return o;
                switch(n=0, o&&(i=[
                  2&i[
                    0
                  ], o.value
                ]), i[
                  0
                ]){
                  case 0:case 1:o=i;
                  break;
                  case 4:return s.label++, {
                    value:i[
                      1
                    ], done:!1
                  };
                  case 5:s.label++, n=i[
                    1
                  ], i=[
                    0
                  ];
                  continue;
                  case 7:i=s.ops.pop(), s.trys.pop();
                  continue;
                  default:if(!(o=s.trys, (o=o.length>0&&o[
                    o.length-1
                  ])||6!==i[
                    0
                  ]
                  &&2!==i[
                    0
                  ])){
                    s=0;
                    continue
                  }
                  if(3===i[
                    0
                  ]
                  &&(!o||i[
                    1
                  ]
                  >o[
                    0
                  ]
                  &&i[
                    1
                  ]
                  <o[
                    3
                  ])){
                    s.label=i[
                      1
                    ];
                    break
                  }
                  if(6===i[
                    0
                  ]
                  &&s.label<o[
                    1
                  ]){
                    s.label=o[
                      1
                    ], o=i;
                    break
                  }
                  if(o&&s.label<o[
                    2
                  ]){
                    s.label=o[
                      2
                    ], s.ops.push(i);
                    break
                  }
                  o[
                    2
                  ]
                  &&s.ops.pop(), s.trys.pop();
                  continue
                }
                i=t.call(e, s)
              }
              catch(e){
                i=[
                  6, e
                ], n=0
              }
              finally{
                r=o=0
              }
              if(5&i[
                0
              ])throw i[
                1
              ];
              return{
                value:i[
                  0
                ]
                ?i[
                  1
                ]
                :void 0, done:!0
              }
            }
            ([
              i, c
            ])
          }
        }
      };
      const L=(0, s.pM)({
        name:"online-video-completeness-setting-modal", components:{
        }, emits:[
          "on-submit"
        ], props:{
          value:{
            type:Boolean, required:!0
          }, scoreItem:{
            type:Object, required:!0
          }, scoreItemGroups:{
            type:Array, required:!0
          }
        }, setup:function(e, t){
          var r=this, n=(0, x.hRP)(e, "value", t.emit, {
            eventName:"input"
          }), o=(0, s.EW)((function(){
            return{
              scored:String(e.scoreItem.scored), groupId:e.scoreItem.groupId, scoreMethod:"rate", customScoreRule:[
                {
                  percentage:80, score:100
                }, {
                  percentage:60, score:80
                }, {
                  percentage:30, score:60
                }, {
                  percentage:0, score:30
                }
              ], includeNoneCriterion:!1
            }
          })), i=(0, s.KR)({
          }), u=(0, s.KR)(P().cloneDeep(o.value));
          (0, s.wB)((function(){
            return u.value.scored
          }), (function(t){
            u.value.groupId="false"===t?0:e.scoreItemGroups[
              0
            ].id
          })), (0, s.sV)((function(){
            return M(r, void 0, void 0, (function(){
              var t;
              return N(this, (function(r){
                switch(r.label){
                  case 0:return t=i, [
                    4, (0, l.$n)(e.scoreItem.teachingUnitId)
                  ];
                  case 1:return t.value=r.sent(), u.value=R(R({
                  }, u.value), P().cloneDeep(i.value)), [
                    2
                  ]
                }
              }))
            }))
          }));
          return{
            ok:function(){
              return M(r, void 0, void 0, (function(){
                var r;
                return N(this, (function(o){
                  switch(o.label){
                    case 0:return o.trys.push([
                      0, 2, , 3
                    ]), [
                      4, (0, l.wm)(e.scoreItem.teachingUnitId, u.value)
                    ];
                    case 1:return o.sent(), t.emit("on-submit"), c.Toast.success(a.default.t("save_success")), [
                      3, 3
                    ];
                    case 2:return o.sent(), c.Toast.error(a.default.t("save_error")), [
                      3, 3
                    ];
                    case 3:return n.value=!1, r=i, [
                      4, (0, l.$n)(e.scoreItem.teachingUnitId)
                    ];
                    case 4:return r.value=o.sent(), [
                      2
                    ]
                  }
                }))
              }))
            }, cancel:function(){
              n.value=!1
            }, show:n, formData:u, addRule:function(e){
              var t=u.value.customScoreRule, r=t[
                e
              ], n=r.percentage>0?r.percentage-1:0;
              t.splice(e+1, 0, {
                percentage:n, score:r.score
              })
            }, deleteRule:function(e){
              u.value.customScoreRule.splice(e, 1)
            }, blurHandler:function(e){
              var t=u.value.customScoreRule, r=t[
                e
              ];
              r.percentage||(e===t.length-1?r.percentage=0:r.percentage=t[
                e+1
              ].percentage+1)
            }, blurScoreHandler:function(e){
              var t=u.value.customScoreRule, r=t[
                e
              ];
              r.score||(e===t.length-1?r.score=0:r.score=t[
                e+1
              ].score+1)
            }, visibleChangeHandler:function(e){
              e&&0!==Object.keys(i.value).length&&(u.value=R(R({
              }, P().cloneDeep(o.value)), P().cloneDeep(i.value)))
            }
          }
        }
      });
      const O=(0, f.A)(L, (function(){
        var e=this, t=e.$createElement, r=e._self._c||t;
        return r("Modal", {
          ref:"modal", staticClass:"onlin-video-completeness-setting-modal", attrs:{
            width:"640", title:e.$t("rollcallScoreSettingPage.title")
          }, on:{
            "on-visible-change":e.visibleChangeHandler
          }, model:{
            value:e.show, callback:function(t){
              e.show=t
            }, expression:"show"
          }
        }, [
          r("div", {
            staticClass:"setting-tip"
          }, [
            r("i", {
              staticClass:"font font-info"
            }), e._v(" "), r("span", [
              e._v(e._s(e.$t("courseScore.scoreItemGroup.onlineVideoTip")))
            ])
          ]), e._v(" "), r("Form", {
            staticClass:"setting-form-area", attrs:{
              model:e.formData, "label-position":"left", "label-width":120
            }
          }, [
            r("FormItem", {
              class:{
                "no-margin-bottom":"true"===e.formData.scored
              }, attrs:{
                label:e.$t("courseScore.scoreItemGroup.unscoredName"), prop:"scored"
              }
            }, [
              r("RadioGroup", {
                model:{
                  value:e.formData.scored, callback:function(t){
                    e.$set(e.formData, "scored", t)
                  }, expression:"formData.scored"
                }
              }, [
                r("Radio", {
                  attrs:{
                    label:"true"
                  }
                }, [
                  r("span", [
                    e._v(e._s(e.$t("yes")))
                  ])
                ]), e._v(" "), r("Radio", {
                  attrs:{
                    label:"false"
                  }
                }, [
                  r("span", [
                    e._v(e._s(e.$t("no")))
                  ])
                ])
              ], 1)
            ], 1), e._v(" "), "true"===e.formData.scored?r("FormItem", {
              staticClass:"no-margin-bottom select-score-group", attrs:{
                label:e.$t("courseScore.scoreItemGroup.scoreGroupName"), required:"", props:"groupId"
              }
            }, [
              r("Select", {
                model:{
                  value:e.formData.groupId, callback:function(t){
                    e.$set(e.formData, "groupId", t)
                  }, expression:"formData.groupId"
                }
              }, e._l(e.scoreItemGroups, (function(e){
                return r("Option", {
                  key:e.id, attrs:{
                    value:e.id, label:e.name
                  }
                })
              })), 1)
            ], 1):e._e(), e._v(" "), r("FormItem", {
              attrs:{
                label:e.$t("courseScore.scoreItemGroup.criterion")
              }
            }, [
              r("Checkbox", {
                model:{
                  value:e.formData.includeNoneCriterion, callback:function(t){
                    e.$set(e.formData, "includeNoneCriterion", t)
                  }, expression:"formData.includeNoneCriterion"
                }
              }, [
                e._v("\n        "+e._s(e.$t("courseScore.scoreItemGroup.videoCriterionTip"))+"\n      ")
              ])
            ], 1), e._v(" "), r("FormItem", {
              attrs:{
                label:e.$t("courseScore.scoreItemGroup.scoreType"), props:"scoreMethod"
              }
            }, [
              r("RadioGroup", {
                model:{
                  value:e.formData.scoreMethod, callback:function(t){
                    e.$set(e.formData, "scoreMethod", t)
                  }, expression:"formData.scoreMethod"
                }
              }, [
                r("Radio", {
                  attrs:{
                    label:"rate"
                  }
                }, [
                  e._v(e._s(e.$t("courseScore.scoreItemGroup.preSet")))
                ]), e._v(" "), r("div", {
                  staticStyle:{
                    "margin-left":"24px"
                  }
                }, [
                  e._v(e._s(e.$t("courseScore.scoreItemGroup.videoScoreTips")))
                ]), e._v(" "), r("Radio", {
                  attrs:{
                    label:"custom"
                  }
                }, [
                  e._v(e._s(e.$t("courseScore.scoreItemGroup.customPercent")))
                ])
              ], 1), e._v(" "), "custom"===e.formData.scoreMethod?r("div", {
                staticClass:"custom-percentage-area"
              }, [
                r("Row", {
                  staticClass:"custom-percentage-row first-row"
                }, [
                  r("Col", {
                    attrs:{
                      span:"12"
                    }
                  }, [
                    e._v(e._s(e.$t("courseScore.scoreItemGroup.viewPercent")))
                  ]), e._v(" "), r("Col", {
                    attrs:{
                      span:"12"
                    }
                  }, [
                    e._v(e._s(e.$t("courseScore.scoreItemGroup.percentValue")))
                  ])
                ], 1), e._v(" "), e._l(e.formData.customScoreRule, (function(t, n){
                  return r("Row", {
                    key:n, staticClass:"custom-percentage-row"
                  }, [
                    r("Col", {
                      attrs:{
                        span:"12"
                      }
                    }, [
                      r("InputNumber", {
                        attrs:{
                          max:100, min:0, precision:0
                        }, on:{
                          "on-blur":function(t){
                            return e.blurHandler(n)
                          }
                        }, model:{
                          value:t.percentage, callback:function(r){
                            e.$set(t, "percentage", r)
                          }, expression:"row.percentage"
                        }
                      }), e._v(" "), r("span", {
                        staticClass:"percent-span"
                      }, [
                        e._v("%")
                      ]), e._v(" "), r("span", {
                        staticClass:"period-span"
                      }, [
                        e._v(e._s(e.$t("courseScore.scoreItemGroup.to")))
                      ]), e._v(" "), r("span", 0===n?[
                        e._v("100")
                      ]
                      :[
                        e._v("< "+e._s(e.formData.customScoreRule[
                          n-1
                        ].percentage))
                      ]), e._v(" "), r("span", {
                        staticClass:"percent-span"
                      }, [
                        e._v("%")
                      ])
                    ], 1), e._v(" "), r("Col", {
                      attrs:{
                        span:"12"
                      }
                    }, [
                      r("InputNumber", {
                        attrs:{
                          max:100, min:0
                        }, on:{
                          "on-blur":function(t){
                            return e.blurScoreHandler(n)
                          }
                        }, model:{
                          value:t.score, callback:function(r){
                            e.$set(t, "score", r)
                          }, expression:"row.score"
                        }
                      }), e._v(" "), r("span", {
                        staticClass:"button-area"
                      }, [
                        n!==e.formData.customScoreRule.length-1&&e.formData.customScoreRule.length<10?r("i", {
                          staticClass:"font font-option-plus", on:{
                            click:function(t){
                              return t.stopPropagation(), e.addRule(n)
                            }
                          }
                        }):e._e(), e._v(" "), n>0&&n!==e.formData.customScoreRule.length-1?r("i", {
                          staticClass:"font font-option-minus", on:{
                            click:function(t){
                              return t.stopPropagation(), e.deleteRule(n)
                            }
                          }
                        }):e._e()
                      ])
                    ], 1)
                  ], 1)
                }))
              ], 2):e._e()
            ], 1)
          ], 1), e._v(" "), r("div", {
            staticClass:"modal-footer", attrs:{
              slot:"footer"
            }, slot:"footer"
          }, [
            r("Button", {
              attrs:{
                type:"primary"
              }, on:{
                click:e.ok
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
          ], 1)
        ], 1)
      }), [
      ], !1, null, "6a92d042", null).exports;
      var B=function(){
        return(B=Object.assign||function(e){
          for(var t, r=1, n=arguments.length;
          r<n;
          r++)for(var o in t=arguments[
            r
          ])Object.prototype.hasOwnProperty.call(t, o)&&(e[
            o
          ]
          =t[
            o
          ]);
          return e
        }).apply(this, arguments)
      }, W=function(e, t, r, n){
        return new(r||(r=Promise))((function(o, a){
          function s(e){
            try{
              c(n.next(e))
            }
            catch(e){
              a(e)
            }
          }
          function i(e){
            try{
              c(n.throw(e))
            }
            catch(e){
              a(e)
            }
          }
          function c(e){
            var t;
            e.done?o(e.value):(t=e.value, t instanceof r?t:new r((function(e){
              e(t)
            }))).then(s, i)
          }
          c((n=n.apply(e, t||[
          ])).next())
        }))
      }, z=function(e, t){
        var r, n, o, a, s={
          label:0, sent:function(){
            if(1&o[
              0
            ])throw o[
              1
            ];
            return o[
              1
            ]
          }, trys:[
          ], ops:[
          ]
        };
        return a={
          next:i(0), throw:i(1), return:i(2)
        }, "function"==typeof Symbol&&(a[
          Symbol.iterator
        ]
        =function(){
          return this
        }), a;
        function i(i){
          return function(c){
            return function(i){
              if(r)throw new TypeError("Generator is already executing.");
              for(;
              a&&(a=0, i[
                0
              ]
              &&(s=0)), s;
              )try{
                if(r=1, n&&(o=2&i[
                  0
                ]
                ?n.return:i[
                  0
                ]
                ?n.throw||((o=n.return)&&o.call(n), 0):n.next)&&!(o=o.call(n, i[
                  1
                ])).done)return o;
                switch(n=0, o&&(i=[
                  2&i[
                    0
                  ], o.value
                ]), i[
                  0
                ]){
                  case 0:case 1:o=i;
                  break;
                  case 4:return s.label++, {
                    value:i[
                      1
                    ], done:!1
                  };
                  case 5:s.label++, n=i[
                    1
                  ], i=[
                    0
                  ];
                  continue;
                  case 7:i=s.ops.pop(), s.trys.pop();
                  continue;
                  default:if(!(o=s.trys, (o=o.length>0&&o[
                    o.length-1
                  ])||6!==i[
                    0
                  ]
                  &&2!==i[
                    0
                  ])){
                    s=0;
                    continue
                  }
                  if(3===i[
                    0
                  ]
                  &&(!o||i[
                    1
                  ]
                  >o[
                    0
                  ]
                  &&i[
                    1
                  ]
                  <o[
                    3
                  ])){
                    s.label=i[
                      1
                    ];
                    break
                  }
                  if(6===i[
                    0
                  ]
                  &&s.label<o[
                    1
                  ]){
                    s.label=o[
                      1
                    ], o=i;
                    break
                  }
                  if(o&&s.label<o[
                    2
                  ]){
                    s.label=o[
                      2
                    ], s.ops.push(i);
                    break
                  }
                  o[
                    2
                  ]
                  &&s.ops.pop(), s.trys.pop();
                  continue
                }
                i=t.call(e, s)
              }
              catch(e){
                i=[
                  6, e
                ], n=0
              }
              finally{
                r=o=0
              }
              if(5&i[
                0
              ])throw i[
                1
              ];
              return{
                value:i[
                  0
                ]
                ?i[
                  1
                ]
                :void 0, done:!0
              }
            }
            ([
              i, c
            ])
          }
        }
      };
      const F=(0, s.pM)({
        name:"performance-setting-modal", components:{
          SvgIcon:u.A, DatePickerExt:k.default
        }, emits:[
          "on-submit"
        ], props:{
          value:{
            type:Boolean, required:!0
          }, scoreItem:{
            type:Object, required:!0
          }, scoreItemGroups:{
            type:Array, required:!0
          }
        }, setup:function(e, t){
          var r=this, n=(0, x.hRP)(e, "value", t.emit, {
            eventName:"input"
          }), o=(0, s.KR)(!1), i=(0, s.EW)((function(){
            return{
              scored:String(e.scoreItem.scored), groupId:e.scoreItem.groupId, announceScoreSetting:"no_announce", announceScoreTime:null, scoreUnit:1, standardScore:1
            }
          })), u=(0, s.KR)({
          }), d=(0, s.KR)(B({
          }, i.value));
          (0, s.sV)((function(){
            return W(r, void 0, void 0, (function(){
              var t;
              return z(this, (function(r){
                switch(r.label){
                  case 0:return o.value=!0, t=u, [
                    4, (0, l.md)(e.scoreItem.teachingUnitId)
                  ];
                  case 1:return t.value=r.sent(), d.value=B(B({
                  }, d.value), u.value), o.value=!1, [
                    2
                  ]
                }
              }))
            }))
          }));
          (0, s.wB)((function(){
            return d.value.scored
          }), (function(t){
            "false"===t?(d.value.groupId=0, d.value.announceScoreSetting="no_announce", d.value.announceScoreTime=null):d.value.groupId=e.scoreItemGroups[
              0
            ].id
          }));
          return{
            ok:function(){
              return W(r, void 0, void 0, (function(){
                var r, o, s;
                return z(this, (function(i){
                  switch(i.label){
                    case 0:r=B(B({
                      name:"performance"
                    }, d.value), {
                      announceScoreTime:"timed_announce"===d.value.announceScoreSetting?d.value.announceScoreTime:null
                    }), o=null, i.label=1;
                    case 1:return i.trys.push([
                      1, 3, , 4
                    ]), [
                      4, (0, l.BE)(e.scoreItem.teachingUnitId, r)
                    ];
                    case 2:return o=i.sent(), t.emit("on-submit"), c.Toast.success(o.message), [
                      3, 4
                    ];
                    case 3:return i.sent(), c.Toast.error(o?o.message:a.default.t("save_error")), [
                      3, 4
                    ];
                    case 4:return n.value=!1, s=u, [
                      4, (0, l.md)(e.scoreItem.teachingUnitId)
                    ];
                    case 5:return s.value=i.sent(), [
                      2
                    ]
                  }
                }))
              }))
            }, cancel:function(){
              n.value=!1
            }, show:n, formData:d, loading:o, blurHandler:function(e){
              var t=e;
              d.value[
                t
              ]
              ||(d.value[
                t
              ]
              =1)
            }, onChangeAnnounceScore:function(e){
              d.value.announceScoreTime="timed_announce"===e?C().toISOString():null
            }, visibleChangeHandler:function(e){
              e&&0!==Object.keys(u.value).length&&(d.value=B(B({
              }, i.value), u.value))
            }
          }
        }
      });
      const K=(0, f.A)(F, (function(){
        var e=this, t=e.$createElement, r=e._self._c||t;
        return r("Modal", {
          staticClass:"performance-setting-modal", attrs:{
            width:"700", title:e.$t("rollcallScoreSettingPage.title")
          }, on:{
            "on-visible-change":e.visibleChangeHandler
          }, model:{
            value:e.show, callback:function(t){
              e.show=t
            }, expression:"show"
          }
        }, [
          r("div", {
            staticClass:"setting-tip"
          }, [
            r("i", {
              staticClass:"font font-info"
            }), e._v(" "), r("span", [
              e._v(e._s(e.$t("courseScore.scoreItemGroup.performanceScoreTips")))
            ])
          ]), e._v(" "), r("Form", {
            staticClass:"setting-form-area", attrs:{
              model:e.formData, "label-position":"left", "label-width":120, loading:e.loading
            }
          }, [
            r("FormItem", {
              class:{
                "no-margin-bottom":"true"===e.formData.scored
              }, attrs:{
                label:e.$t("courseScore.scoreItemGroup.unscoredName"), prop:"scored"
              }
            }, [
              r("RadioGroup", {
                model:{
                  value:e.formData.scored, callback:function(t){
                    e.$set(e.formData, "scored", t)
                  }, expression:"formData.scored"
                }
              }, [
                r("Radio", {
                  attrs:{
                    label:"true"
                  }
                }, [
                  r("span", [
                    e._v(e._s(e.$t("yes")))
                  ])
                ]), e._v(" "), r("Radio", {
                  attrs:{
                    label:"false"
                  }
                }, [
                  r("span", [
                    e._v(e._s(e.$t("no")))
                  ])
                ])
              ], 1)
            ], 1), e._v(" "), "true"===e.formData.scored?r("FormItem", {
              staticClass:"no-margin-bottom select-score-group", attrs:{
                label:e.$t("courseScore.scoreItemGroup.scoreGroupName"), required:"", props:"groupId"
              }
            }, [
              r("Select", {
                model:{
                  value:e.formData.groupId, callback:function(t){
                    e.$set(e.formData, "groupId", t)
                  }, expression:"formData.groupId"
                }
              }, e._l(e.scoreItemGroups, (function(e){
                return r("Option", {
                  key:e.id, attrs:{
                    value:e.id, label:e.name
                  }
                })
              })), 1)
            ], 1):e._e(), e._v(" "), r("FormItem", {
              attrs:{
                label:e.$t("courseScore.scoreItemGroup.publishScore"), props:"announceScoreSetting"
              }
            }, [
              r("RadioGroup", {
                on:{
                  "on-change":e.onChangeAnnounceScore
                }, model:{
                  value:e.formData.announceScoreSetting, callback:function(t){
                    e.$set(e.formData, "announceScoreSetting", t)
                  }, expression:"formData.announceScoreSetting"
                }
              }, [
                r("Radio", {
                  attrs:{
                    label:"no_announce"
                  }
                }, [
                  e._v(e._s(e.$t("courseScore.scoreItemGroup.doNotPublish")))
                ]), e._v(" "), r("Radio", {
                  attrs:{
                    label:"immediate_announce"
                  }
                }, [
                  e._v(e._s(e.$t("courseScore.scoreItemGroup.immediateScore")))
                ]), e._v(" "), r("Radio", {
                  attrs:{
                    label:"timed_announce"
                  }
                }, [
                  e._v(e._s(e.$t("courseScore.scoreItemGroup.scheduledPublishing")))
                ])
              ], 1), e._v(" "), "timed_announce"===e.formData.announceScoreSetting?r("div", [
                r("DatePickerExt", {
                  staticStyle:{
                    width:"175px"
                  }, attrs:{
                    type:"datetime", format:"yyyy-MM-dd HH:mm", clearable:!1
                  }, model:{
                    value:e.formData.announceScoreTime, callback:function(t){
                      e.$set(e.formData, "announceScoreTime", t)
                    }, expression:"formData.announceScoreTime"
                  }
                })
              ], 1):e._e()
            ], 1), e._v(" "), r("FormItem", {
              attrs:{
                required:"", props:"scoreUnit"
              }, scopedSlots:e._u([
                {
                  key:"label", fn:function(){
                    return[
                      e._v("\n        "+e._s(e.$t("courseScore.scoreItemGroup.scoreUnit"))+"\n        "), r("Tooltip", {
                        attrs:{
                          content:e.$t("courseScore.scoreItemGroup.scoreUnitTip"), placement:"top"
                        }
                      }, [
                        r("SvgIcon", {
                          attrs:{
                            name:"tips"
                          }
                        })
                      ], 1)
                    ]
                  }, proxy:!0
                }
              ])
            }, [
              e._v(" "), r("InputNumber", {
                attrs:{
                  min:1, precision:0
                }, on:{
                  "on-blur":function(t){
                    return e.blurHandler("scoreUnit")
                  }
                }, model:{
                  value:e.formData.scoreUnit, callback:function(t){
                    e.$set(e.formData, "scoreUnit", t)
                  }, expression:"formData.scoreUnit"
                }
              }), e._v(" "), r("span", [
                e._v(e._s(e.$t("courseScore.scoreItemGroup.points")))
              ])
            ], 1), e._v(" "), r("FormItem", {
              attrs:{
                required:"", props:"standardScore"
              }, scopedSlots:e._u([
                {
                  key:"label", fn:function(){
                    return[
                      e._v("\n        "+e._s(e.$t("courseScore.scoreItemGroup.baseScore"))+"\n        "), r("Tooltip", {
                        attrs:{
                          content:e.$t("courseScore.scoreItemGroup.baseScoreTip"), placement:"top"
                        }
                      }, [
                        r("SvgIcon", {
                          attrs:{
                            name:"tips"
                          }
                        })
                      ], 1)
                    ]
                  }, proxy:!0
                }
              ])
            }, [
              e._v(" "), r("InputNumber", {
                attrs:{
                  min:0, precision:0
                }, on:{
                  "on-blur":function(t){
                    return e.blurHandler("standardScore")
                  }
                }, model:{
                  value:e.formData.standardScore, callback:function(t){
                    e.$set(e.formData, "standardScore", t)
                  }, expression:"formData.standardScore"
                }
              }), e._v(" "), r("span", [
                e._v(e._s(e.$t("courseScore.scoreItemGroup.points")))
              ])
            ], 1)
          ], 1), e._v(" "), r("div", {
            staticClass:"modal-footer", attrs:{
              slot:"footer"
            }, slot:"footer"
          }, [
            r("Button", {
              attrs:{
                type:"primary"
              }, on:{
                click:e.ok
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
          ], 1)
        ], 1)
      }), [
      ], !1, null, "6a9cca4d", null).exports;
      var q=function(){
        return(q=Object.assign||function(e){
          for(var t, r=1, n=arguments.length;
          r<n;
          r++)for(var o in t=arguments[
            r
          ])Object.prototype.hasOwnProperty.call(t, o)&&(e[
            o
          ]
          =t[
            o
          ]);
          return e
        }).apply(this, arguments)
      }, V=function(e, t, r, n){
        return new(r||(r=Promise))((function(o, a){
          function s(e){
            try{
              c(n.next(e))
            }
            catch(e){
              a(e)
            }
          }
          function i(e){
            try{
              c(n.throw(e))
            }
            catch(e){
              a(e)
            }
          }
          function c(e){
            var t;
            e.done?o(e.value):(t=e.value, t instanceof r?t:new r((function(e){
              e(t)
            }))).then(s, i)
          }
          c((n=n.apply(e, t||[
          ])).next())
        }))
      }, U=function(e, t){
        var r, n, o, a, s={
          label:0, sent:function(){
            if(1&o[
              0
            ])throw o[
              1
            ];
            return o[
              1
            ]
          }, trys:[
          ], ops:[
          ]
        };
        return a={
          next:i(0), throw:i(1), return:i(2)
        }, "function"==typeof Symbol&&(a[
          Symbol.iterator
        ]
        =function(){
          return this
        }), a;
        function i(i){
          return function(c){
            return function(i){
              if(r)throw new TypeError("Generator is already executing.");
              for(;
              a&&(a=0, i[
                0
              ]
              &&(s=0)), s;
              )try{
                if(r=1, n&&(o=2&i[
                  0
                ]
                ?n.return:i[
                  0
                ]
                ?n.throw||((o=n.return)&&o.call(n), 0):n.next)&&!(o=o.call(n, i[
                  1
                ])).done)return o;
                switch(n=0, o&&(i=[
                  2&i[
                    0
                  ], o.value
                ]), i[
                  0
                ]){
                  case 0:case 1:o=i;
                  break;
                  case 4:return s.label++, {
                    value:i[
                      1
                    ], done:!1
                  };
                  case 5:s.label++, n=i[
                    1
                  ], i=[
                    0
                  ];
                  continue;
                  case 7:i=s.ops.pop(), s.trys.pop();
                  continue;
                  default:if(!(o=s.trys, (o=o.length>0&&o[
                    o.length-1
                  ])||6!==i[
                    0
                  ]
                  &&2!==i[
                    0
                  ])){
                    s=0;
                    continue
                  }
                  if(3===i[
                    0
                  ]
                  &&(!o||i[
                    1
                  ]
                  >o[
                    0
                  ]
                  &&i[
                    1
                  ]
                  <o[
                    3
                  ])){
                    s.label=i[
                      1
                    ];
                    break
                  }
                  if(6===i[
                    0
                  ]
                  &&s.label<o[
                    1
                  ]){
                    s.label=o[
                      1
                    ], o=i;
                    break
                  }
                  if(o&&s.label<o[
                    2
                  ]){
                    s.label=o[
                      2
                    ], s.ops.push(i);
                    break
                  }
                  o[
                    2
                  ]
                  &&s.ops.pop(), s.trys.pop();
                  continue
                }
                i=t.call(e, s)
              }
              catch(e){
                i=[
                  6, e
                ], n=0
              }
              finally{
                r=o=0
              }
              if(5&i[
                0
              ])throw i[
                1
              ];
              return{
                value:i[
                  0
                ]
                ?i[
                  1
                ]
                :void 0, done:!0
              }
            }
            ([
              i, c
            ])
          }
        }
      };
      const H=(0, s.pM)({
        name:"rollcall-setting-modal", components:{
          SvgIcon:u.A, DatePickerExt:k.default
        }, emits:[
          "on-submit"
        ], props:{
          value:{
            type:Boolean, required:!0
          }, scoreItem:{
            type:Object, required:!0
          }, scoreItemGroups:{
            type:Array, required:!0
          }
        }, setup:function(e, t){
          var r, n=this, o=(0, x.hRP)(e, "value", t.emit, {
            eventName:"input"
          }), i=(0, s.EW)((function(){
            return{
              scored:String(e.scoreItem.scored), groupId:e.scoreItem.groupId, announceScore:"no_announce", announceScoreTime:null, scoreMethod:"rate", punishScoreOnAbsence:null, arriveLateAsAbsence:null, leaveEarlyAsAbsence:null, lateCombineEarlyAsAbsence:null, onSickLeaveAsAbsence:null, onPersonalLeaveAsAbsence:null, maxAbsenceTimes:null
            }
          })), u=(0, s.KR)({
          }), d=(0, s.Kh)({
            advancedSettings:!0, arriveLateAsAbsence:!1, leaveEarlyAsAbsence:!1, lateCombineEarlyAsAbsence:!1, onPersonalLeaveAsAbsence:!1, onSickLeaveAsAbsence:!1, maxAbsenceTimes:!1
          }), p=(0, s.KR)(q({
          }, i.value)), v=null!==(r=window.featureToggles.leaveConsideredAbsence)&&void 0!==r&&r;
          (0, s.wB)([
            function(){
              return d.lateCombineEarlyAsAbsence
            }, function(){
              return d.arriveLateAsAbsence
            }, function(){
              return d.leaveEarlyAsAbsence
            }, function(){
              return d.maxAbsenceTimes
            }, function(){
              return d.onPersonalLeaveAsAbsence
            }, function(){
              return d.onSickLeaveAsAbsence
            }
          ], (function(e, t){
            var r=function(e, t){
              return{
                cancelLeaveEarlyAndArriveLateSettings:e[
                  0
                ]
                !==t[
                  0
                ]
                &&!0===e[
                  0
                ], cancelLateCombineEarlysettings:e[
                  1
                ]
                !==t[
                  1
                ]
                &&!0===e[
                  1
                ]
                ||e[
                  2
                ]
                !==t[
                  2
                ]
                &&!0===e[
                  2
                ]
              }
            }
            (e, t);
            r.cancelLeaveEarlyAndArriveLateSettings&&(p.value.arriveLateAsAbsence=null, p.value.leaveEarlyAsAbsence=null, d.arriveLateAsAbsence=!1, d.leaveEarlyAsAbsence=!1), r.cancelLateCombineEarlysettings&&(p.value.lateCombineEarlyAsAbsence=null, d.lateCombineEarlyAsAbsence=!1), d.lateCombineEarlyAsAbsence?p.value.lateCombineEarlyAsAbsence=p.value.lateCombineEarlyAsAbsence||1:p.value.lateCombineEarlyAsAbsence=null, d.arriveLateAsAbsence?p.value.arriveLateAsAbsence=p.value.arriveLateAsAbsence||1:p.value.arriveLateAsAbsence=null, d.leaveEarlyAsAbsence?p.value.leaveEarlyAsAbsence=p.value.leaveEarlyAsAbsence||1:p.value.leaveEarlyAsAbsence=null, d.onPersonalLeaveAsAbsence?p.value.onPersonalLeaveAsAbsence=p.value.onPersonalLeaveAsAbsence||1:p.value.onPersonalLeaveAsAbsence=null, d.onSickLeaveAsAbsence?p.value.onSickLeaveAsAbsence=p.value.onSickLeaveAsAbsence||1:p.value.onSickLeaveAsAbsence=null, d.maxAbsenceTimes?p.value.maxAbsenceTimes=p.value.maxAbsenceTimes||1:p.value.maxAbsenceTimes=null
          }));
          (0, s.wB)((function(){
            return p.value.scored
          }), (function(t){
            p.value.groupId="false"===t?0:e.scoreItemGroups[
              0
            ].id
          }));
          var f=function(){
            d.arriveLateAsAbsence=!!p.value.arriveLateAsAbsence, d.leaveEarlyAsAbsence=!!p.value.leaveEarlyAsAbsence, d.lateCombineEarlyAsAbsence=!!p.value.lateCombineEarlyAsAbsence, d.maxAbsenceTimes=!!p.value.maxAbsenceTimes, d.onPersonalLeaveAsAbsence=!!p.value.onPersonalLeaveAsAbsence, d.onSickLeaveAsAbsence=!!p.value.onSickLeaveAsAbsence
          };
          (0, s.sV)((function(){
            return V(n, void 0, void 0, (function(){
              var t;
              return U(this, (function(r){
                switch(r.label){
                  case 0:return t=u, [
                    4, (0, l.U1)(e.scoreItem.teachingUnitId)
                  ];
                  case 1:return t.value=r.sent(), p.value=q(q({
                  }, p.value), u.value), p.value.announceScore=p.value.announceScoreTime?"timed_announce":"no_announce", f(), [
                    2
                  ]
                }
              }))
            }))
          }));
          return{
            ok:function(){
              return V(n, void 0, void 0, (function(){
                var r, n;
                return U(this, (function(s){
                  switch(s.label){
                    case 0:return s.trys.push([
                      0, 2, , 3
                    ]), [
                      4, (0, l.br)(e.scoreItem.teachingUnitId, p.value)
                    ];
                    case 1:return r=s.sent(), t.emit("on-submit"), c.Toast.success(r.message), [
                      3, 3
                    ];
                    case 2:return s.sent(), c.Toast.error(a.default.t("save_error")), [
                      3, 3
                    ];
                    case 3:return o.value=!1, n=u, [
                      4, (0, l.U1)(e.scoreItem.teachingUnitId)
                    ];
                    case 4:return n.value=s.sent(), [
                      2
                    ]
                  }
                }))
              }))
            }, cancel:function(){
              o.value=!1
            }, show:o, formData:p, uiSetting:d, onChangeAnnounceScore:function(e){
              p.value.announceScoreTime="timed_announce"===e?C().toISOString():null
            }, onChangeScoreMethod:function(e){
              p.value.punishScoreOnAbsence="count"===e?1:null
            }, inputNumberBlurHandler:function(e){
              var t=e;
              p.value[
                t
              ]
              ||(p.value[
                t
              ]
              =1)
            }, visibleChangeHandler:function(e){
              e&&0!==Object.keys(u.value).length&&(p.value=q(q({
              }, i.value), u.value), p.value.announceScore=p.value.announceScoreTime?"timed_announce":"no_announce", f())
            }, diableLeaveRollcallSetting:v
          }
        }
      });
      const j=(0, f.A)(H, (function(){
        var e=this, t=e.$createElement, r=e._self._c||t;
        return r("Modal", {
          ref:"modal", staticClass:"rollcall-setting-modal", attrs:{
            width:"900", title:e.$t("rollcallScoreSettingPage.title")
          }, on:{
            "on-visible-change":e.visibleChangeHandler
          }, model:{
            value:e.show, callback:function(t){
              e.show=t
            }, expression:"show"
          }
        }, [
          r("div", {
            staticClass:"setting-tip"
          }, [
            r("i", {
              staticClass:"font font-info"
            }), e._v(" "), "rate"===e.formData.scoreMethod?r("span", [
              e._v(e._s(e.$t("courseScore.scoreItemGroup.rollcallScoreTips1")))
            ]):r("span", [
              e._v(e._s(e.$t("courseScore.scoreItemGroup.rollcallScoreTips2")))
            ])
          ]), e._v(" "), r("div", {
            staticClass:"modal-content"
          }, [
            r("Form", {
              staticClass:"setting-form-area", attrs:{
                model:e.formData, "label-position":"left", "label-width":120
              }
            }, [
              r("FormItem", {
                class:{
                  "no-margin-bottom":"true"===e.formData.scored
                }, attrs:{
                  label:e.$t("courseScore.scoreItemGroup.unscoredName"), prop:"scored"
                }
              }, [
                r("RadioGroup", {
                  model:{
                    value:e.formData.scored, callback:function(t){
                      e.$set(e.formData, "scored", t)
                    }, expression:"formData.scored"
                  }
                }, [
                  r("Radio", {
                    attrs:{
                      label:"true"
                    }
                  }, [
                    r("span", [
                      e._v(e._s(e.$t("yes")))
                    ])
                  ]), e._v(" "), r("Radio", {
                    attrs:{
                      label:"false"
                    }
                  }, [
                    r("span", [
                      e._v(e._s(e.$t("no")))
                    ])
                  ])
                ], 1)
              ], 1), e._v(" "), "true"===e.formData.scored?r("FormItem", {
                staticClass:"no-margin-bottom select-score-group", attrs:{
                  label:e.$t("courseScore.scoreItemGroup.scoreGroupName"), required:"", props:"groupId"
                }
              }, [
                r("Select", {
                  model:{
                    value:e.formData.groupId, callback:function(t){
                      e.$set(e.formData, "groupId", t)
                    }, expression:"formData.groupId"
                  }
                }, e._l(e.scoreItemGroups, (function(e){
                  return r("Option", {
                    key:e.id, attrs:{
                      value:e.id, label:e.name
                    }
                  })
                })), 1)
              ], 1):e._e(), e._v(" "), r("FormItem", {
                attrs:{
                  label:e.$t("courseScore.scoreItemGroup.publishScore"), props:"announceScore"
                }
              }, [
                r("RadioGroup", {
                  on:{
                    "on-change":e.onChangeAnnounceScore
                  }, model:{
                    value:e.formData.announceScore, callback:function(t){
                      e.$set(e.formData, "announceScore", t)
                    }, expression:"formData.announceScore"
                  }
                }, [
                  r("Radio", {
                    attrs:{
                      label:"no_announce"
                    }
                  }, [
                    e._v(e._s(e.$t("courseScore.scoreItemGroup.willNotPublish")))
                  ]), e._v(" "), r("Radio", {
                    attrs:{
                      label:"timed_announce"
                    }
                  }, [
                    e._v(e._s(e.$t("courseScore.scoreItemGroup.customPublishScoreTime")))
                  ])
                ], 1), e._v(" "), "timed_announce"===e.formData.announceScore?r("div", [
                  r("DatePickerExt", {
                    staticStyle:{
                      width:"175px"
                    }, attrs:{
                      type:"datetime", format:"yyyy-MM-dd HH:mm", clearable:!1
                    }, model:{
                      value:e.formData.announceScoreTime, callback:function(t){
                        e.$set(e.formData, "announceScoreTime", t)
                      }, expression:"formData.announceScoreTime"
                    }
                  })
                ], 1):e._e()
              ], 1)
            ], 1), e._v(" "), r("div", {
              staticClass:"all-setting-area"
            }, [
              r("Row", [
                r("Col", {
                  staticClass:"icon-area", attrs:{
                    span:"6"
                  }
                }, [
                  r("div", {
                    staticClass:"icon-wrapper"
                  }, [
                    r("SvgIcon", {
                      attrs:{
                        name:"activity-timing"
                      }
                    })
                  ], 1), e._v(" "), r("div", {
                    staticClass:"icon-tip"
                  }, [
                    e._v(e._s(e.$t("courseScore.scoreItemGroup.scoreMethod")))
                  ])
                ]), e._v(" "), r("Col", {
                  staticClass:"radios-area", attrs:{
                    span:"18"
                  }
                }, [
                  r("RadioGroup", {
                    attrs:{
                      vertical:""
                    }, on:{
                      "on-change":e.onChangeScoreMethod
                    }, model:{
                      value:e.formData.scoreMethod, callback:function(t){
                        e.$set(e.formData, "scoreMethod", t)
                      }, expression:"formData.scoreMethod"
                    }
                  }, [
                    r("Radio", {
                      attrs:{
                        label:"rate"
                      }
                    }, [
                      e._v("\n              "+e._s(e.$t("rollcallScoreSettingPage.scoreWithAttendance"))+"\n              "), r("div", {
                        staticClass:"radio-tips"
                      }, [
                        e._v(e._s(e.$t("courseScore.scoreItemGroup.rollcallScoreTips1")))
                      ])
                    ]), e._v(" "), r("Radio", {
                      attrs:{
                        label:"count"
                      }
                    }, [
                      e._v("\n              "+e._s(e.$t("courseScore.scoreItemGroup.scoreWithRule"))+"\n              "), r("div", {
                        staticClass:"radio-tips"
                      }, [
                        e._v("\n                "+e._s(e.$t("rollcallScoreSettingPage.punishScoreOnAbsence"))+"\n                "), r("InputNumber", {
                          attrs:{
                            min:1, disabled:"count"!==e.formData.scoreMethod
                          }, on:{
                            "on-blur":function(t){
                              return e.inputNumberBlurHandler("punishScoreOnAbsence")
                            }
                          }, model:{
                            value:e.formData.punishScoreOnAbsence, callback:function(t){
                              e.$set(e.formData, "punishScoreOnAbsence", t)
                            }, expression:"formData.punishScoreOnAbsence"
                          }
                        }), e._v("\n                "+e._s(e.$t("courseScore.scoreItemGroup.points"))+"\n              ")
                      ], 1)
                    ])
                  ], 1)
                ], 1)
              ], 1), e._v(" "), r("div", {
                staticClass:"advance-setting-area"
              }, [
                r("div", {
                  staticClass:"button-area", on:{
                    click:function(t){
                      t.stopPropagation(), e.uiSetting.advancedSettings=!e.uiSetting.advancedSettings
                    }
                  }
                }, [
                  e.uiSetting.advancedSettings?r("div", [
                    e._v("\n            "+e._s(e.$t("hideAdvanceControl"))+"\n            "), r("i", {
                      staticClass:"font font font-down-arrow"
                    })
                  ]):r("div", [
                    e._v("\n            "+e._s(e.$t("showAdvanceControl"))+"\n            "), r("i", {
                      staticClass:"font font-up-arrow"
                    })
                  ])
                ]), e._v(" "), e.uiSetting.advancedSettings?r("Row", [
                  r("Col", {
                    attrs:{
                      span:"10"
                    }
                  }, [
                    r("div", {
                      staticClass:"setting-area"
                    }, [
                      r("div", [
                        r("Checkbox", {
                          model:{
                            value:e.uiSetting.arriveLateAsAbsence, callback:function(t){
                              e.$set(e.uiSetting, "arriveLateAsAbsence", t)
                            }, expression:"uiSetting.arriveLateAsAbsence"
                          }
                        }), e._v("\n                "+e._s(e.$t("rollcallRecordPage.arriveLate"))+"\n                "), r("InputNumber", {
                          attrs:{
                            min:1, disabled:!e.uiSetting.arriveLateAsAbsence
                          }, on:{
                            "on-blur":function(t){
                              return e.inputNumberBlurHandler("arriveLateAsAbsence")
                            }
                          }, model:{
                            value:e.formData.arriveLateAsAbsence, callback:function(t){
                              e.$set(e.formData, "arriveLateAsAbsence", t)
                            }, expression:"formData.arriveLateAsAbsence"
                          }
                        }), e._v("\n                "+e._s(e.$t("rollcallScoreSettingPage.considerAsAbsent"))+"\n              ")
                      ], 1), e._v(" "), r("div", [
                        r("Checkbox", {
                          model:{
                            value:e.uiSetting.leaveEarlyAsAbsence, callback:function(t){
                              e.$set(e.uiSetting, "leaveEarlyAsAbsence", t)
                            }, expression:"uiSetting.leaveEarlyAsAbsence"
                          }
                        }), e._v("\n                "+e._s(e.$t("rollcallRecordPage.leaveEarly"))+"\n                "), r("InputNumber", {
                          attrs:{
                            min:1, disabled:!e.uiSetting.leaveEarlyAsAbsence
                          }, on:{
                            "on-blur":function(t){
                              return e.inputNumberBlurHandler("leaveEarlyAsAbsence")
                            }
                          }, model:{
                            value:e.formData.leaveEarlyAsAbsence, callback:function(t){
                              e.$set(e.formData, "leaveEarlyAsAbsence", t)
                            }, expression:"formData.leaveEarlyAsAbsence"
                          }
                        }), e._v("\n                "+e._s(e.$t("rollcallScoreSettingPage.considerAsAbsent"))+"\n              ")
                      ], 1), e._v(" "), r("div", [
                        r("Checkbox", {
                          model:{
                            value:e.uiSetting.lateCombineEarlyAsAbsence, callback:function(t){
                              e.$set(e.uiSetting, "lateCombineEarlyAsAbsence", t)
                            }, expression:"uiSetting.lateCombineEarlyAsAbsence"
                          }
                        }), e._v("\n                "+e._s(e.$t("rollcallRecordPage.lateCombineEarly"))+"\n                "), r("InputNumber", {
                          attrs:{
                            min:1, disabled:!e.uiSetting.lateCombineEarlyAsAbsence
                          }, on:{
                            "on-blur":function(t){
                              return e.inputNumberBlurHandler("lateCombineEarlyAsAbsence")
                            }
                          }, model:{
                            value:e.formData.lateCombineEarlyAsAbsence, callback:function(t){
                              e.$set(e.formData, "lateCombineEarlyAsAbsence", t)
                            }, expression:"formData.lateCombineEarlyAsAbsence"
                          }
                        }), e._v("\n                "+e._s(e.$t("rollcallScoreSettingPage.considerAsAbsent"))+"\n              ")
                      ], 1), e._v(" "), r("div", [
                        r("Checkbox", {
                          attrs:{
                            disabled:e.diableLeaveRollcallSetting
                          }, model:{
                            value:e.uiSetting.onPersonalLeaveAsAbsence, callback:function(t){
                              e.$set(e.uiSetting, "onPersonalLeaveAsAbsence", t)
                            }, expression:"uiSetting.onPersonalLeaveAsAbsence"
                          }
                        }), e._v("\n                "+e._s(e.$t("rollcallScoreSettingPage.personalLeave"))+"\n                "), r("InputNumber", {
                          attrs:{
                            min:1, disabled:e.diableLeaveRollcallSetting||!e.uiSetting.onPersonalLeaveAsAbsence
                          }, on:{
                            "on-blur":function(t){
                              return e.inputNumberBlurHandler("onPersonalLeaveAsAbsence")
                            }
                          }, model:{
                            value:e.formData.onPersonalLeaveAsAbsence, callback:function(t){
                              e.$set(e.formData, "onPersonalLeaveAsAbsence", t)
                            }, expression:"formData.onPersonalLeaveAsAbsence"
                          }
                        }), e._v("\n                "+e._s(e.$t("rollcallScoreSettingPage.considerAsAbsent"))+"\n              ")
                      ], 1), e._v(" "), r("div", [
                        r("Checkbox", {
                          attrs:{
                            disabled:e.diableLeaveRollcallSetting
                          }, model:{
                            value:e.uiSetting.onSickLeaveAsAbsence, callback:function(t){
                              e.$set(e.uiSetting, "onSickLeaveAsAbsence", t)
                            }, expression:"uiSetting.onSickLeaveAsAbsence"
                          }
                        }), e._v("\n                "+e._s(e.$t("rollcallScoreSettingPage.sickLeave"))+"\n                "), r("InputNumber", {
                          attrs:{
                            min:1, disabled:e.diableLeaveRollcallSetting||!e.uiSetting.onSickLeaveAsAbsence
                          }, on:{
                            "on-blur":function(t){
                              return e.inputNumberBlurHandler("onSickLeaveAsAbsence")
                            }
                          }, model:{
                            value:e.formData.onSickLeaveAsAbsence, callback:function(t){
                              e.$set(e.formData, "onSickLeaveAsAbsence", t)
                            }, expression:"formData.onSickLeaveAsAbsence"
                          }
                        }), e._v("\n                "+e._s(e.$t("rollcallScoreSettingPage.considerAsAbsent"))+"\n              ")
                      ], 1), e._v(" "), r("div", [
                        r("Checkbox", {
                          model:{
                            value:e.uiSetting.maxAbsenceTimes, callback:function(t){
                              e.$set(e.uiSetting, "maxAbsenceTimes", t)
                            }, expression:"uiSetting.maxAbsenceTimes"
                          }
                        }), e._v("\n                "+e._s(e.$t("rollcallScoreSettingPage.reach"))+"\n                "), r("InputNumber", {
                          attrs:{
                            min:1, disabled:!e.uiSetting.maxAbsenceTimes
                          }, on:{
                            "on-blur":function(t){
                              return e.inputNumberBlurHandler("maxAbsenceTimes")
                            }
                          }, model:{
                            value:e.formData.maxAbsenceTimes, callback:function(t){
                              e.$set(e.formData, "maxAbsenceTimes", t)
                            }, expression:"formData.maxAbsenceTimes"
                          }
                        }), e._v("\n                "+e._s(e.$t("rollcallScoreSettingPage.considerAsZeroScore"))+"\n              ")
                      ], 1)
                    ])
                  ]), e._v(" "), r("Col", {
                    attrs:{
                      span:"14"
                    }
                  }, [
                    r("div", {
                      staticClass:"tip-area"
                    }, [
                      e._v("\n              "+e._s(e.$t("rollcallScoreSettingPage.settingInfo"))+"\n              "), r("i", {
                        staticClass:"arrow-left"
                      })
                    ])
                  ])
                ], 1):e._e()
              ], 1)
            ], 1)
          ], 1), e._v(" "), r("div", {
            staticClass:"modal-footer", attrs:{
              slot:"footer"
            }, slot:"footer"
          }, [
            r("Button", {
              attrs:{
                type:"primary"
              }, on:{
                click:e.ok
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
          ], 1)
        ])
      }), [
      ], !1, null, "ed15eaae", null).exports;
      var Y=function(){
        return(Y=Object.assign||function(e){
          for(var t, r=1, n=arguments.length;
          r<n;
          r++)for(var o in t=arguments[
            r
          ])Object.prototype.hasOwnProperty.call(t, o)&&(e[
            o
          ]
          =t[
            o
          ]);
          return e
        }).apply(this, arguments)
      }, J=function(e, t, r, n){
        return new(r||(r=Promise))((function(o, a){
          function s(e){
            try{
              c(n.next(e))
            }
            catch(e){
              a(e)
            }
          }
          function i(e){
            try{
              c(n.throw(e))
            }
            catch(e){
              a(e)
            }
          }
          function c(e){
            var t;
            e.done?o(e.value):(t=e.value, t instanceof r?t:new r((function(e){
              e(t)
            }))).then(s, i)
          }
          c((n=n.apply(e, t||[
          ])).next())
        }))
      }, Q=function(e, t){
        var r, n, o, a, s={
          label:0, sent:function(){
            if(1&o[
              0
            ])throw o[
              1
            ];
            return o[
              1
            ]
          }, trys:[
          ], ops:[
          ]
        };
        return a={
          next:i(0), throw:i(1), return:i(2)
        }, "function"==typeof Symbol&&(a[
          Symbol.iterator
        ]
        =function(){
          return this
        }), a;
        function i(i){
          return function(c){
            return function(i){
              if(r)throw new TypeError("Generator is already executing.");
              for(;
              a&&(a=0, i[
                0
              ]
              &&(s=0)), s;
              )try{
                if(r=1, n&&(o=2&i[
                  0
                ]
                ?n.return:i[
                  0
                ]
                ?n.throw||((o=n.return)&&o.call(n), 0):n.next)&&!(o=o.call(n, i[
                  1
                ])).done)return o;
                switch(n=0, o&&(i=[
                  2&i[
                    0
                  ], o.value
                ]), i[
                  0
                ]){
                  case 0:case 1:o=i;
                  break;
                  case 4:return s.label++, {
                    value:i[
                      1
                    ], done:!1
                  };
                  case 5:s.label++, n=i[
                    1
                  ], i=[
                    0
                  ];
                  continue;
                  case 7:i=s.ops.pop(), s.trys.pop();
                  continue;
                  default:if(!(o=s.trys, (o=o.length>0&&o[
                    o.length-1
                  ])||6!==i[
                    0
                  ]
                  &&2!==i[
                    0
                  ])){
                    s=0;
                    continue
                  }
                  if(3===i[
                    0
                  ]
                  &&(!o||i[
                    1
                  ]
                  >o[
                    0
                  ]
                  &&i[
                    1
                  ]
                  <o[
                    3
                  ])){
                    s.label=i[
                      1
                    ];
                    break
                  }
                  if(6===i[
                    0
                  ]
                  &&s.label<o[
                    1
                  ]){
                    s.label=o[
                      1
                    ], o=i;
                    break
                  }
                  if(o&&s.label<o[
                    2
                  ]){
                    s.label=o[
                      2
                    ], s.ops.push(i);
                    break
                  }
                  o[
                    2
                  ]
                  &&s.ops.pop(), s.trys.pop();
                  continue
                }
                i=t.call(e, s)
              }
              catch(e){
                i=[
                  6, e
                ], n=0
              }
              finally{
                r=o=0
              }
              if(5&i[
                0
              ])throw i[
                1
              ];
              return{
                value:i[
                  0
                ]
                ?i[
                  1
                ]
                :void 0, done:!0
              }
            }
            ([
              i, c
            ])
          }
        }
      };
      const X=(0, s.pM)({
        name:"questionnaire-setting-modal", components:{
          DatePickerExt:k.default
        }, emits:[
          "on-submit"
        ], props:{
          value:{
            type:Boolean, required:!0
          }, scoreItem:{
            type:Object, required:!0
          }, scoreItemGroups:{
            type:Array, required:!0
          }
        }, setup:function(e, t){
          var r=this, n=(0, x.hRP)(e, "value", t.emit, {
            eventName:"input"
          }), o=(0, s.EW)((function(){
            return{
              scored:String(e.scoreItem.scored), groupId:e.scoreItem.groupId, announceScoreType:e.scoreItem.announceScoreType, announceScoreTime:e.scoreItem.announceScoreTime
            }
          })), i=(0, s.KR)(Y({
          }, o.value));
          (0, s.wB)((function(){
            return i.value.scored
          }), (function(t){
            "false"===t?(i.value.groupId=0, i.value.announceScoreType="no_announce", i.value.announceScoreTime=null):i.value.groupId=e.scoreItemGroups[
              0
            ].id
          }));
          return{
            ok:function(){
              return J(r, void 0, void 0, (function(){
                var r;
                return Q(this, (function(o){
                  switch(o.label){
                    case 0:return o.trys.push([
                      0, 2, , 3
                    ]), [
                      4, (0, l.np)(e.scoreItem.id, i.value)
                    ];
                    case 1:return r=o.sent(), t.emit("on-submit"), c.Toast.success(r.message), [
                      3, 3
                    ];
                    case 2:return o.sent(), c.Toast.error(a.default.t("save_error")), [
                      3, 3
                    ];
                    case 3:return n.value=!1, [
                      2
                    ]
                  }
                }))
              }))
            }, cancel:function(){
              n.value=!1
            }, show:n, formData:i, onChangeAnnounceScore:function(e){
              i.value.announceScoreTime="no_announce"===e?null:C().toISOString()
            }, visibleChangeHandler:function(e){
              e&&(i.value=Y({
              }, o.value))
            }
          }
        }
      });
      const Z=(0, f.A)(X, (function(){
        var e=this, t=e.$createElement, r=e._self._c||t;
        return r("Modal", {
          ref:"modal", staticClass:"questionnaire-setting-modal", attrs:{
            width:"620", title:e.$t("rollcallScoreSettingPage.title")
          }, on:{
            "on-visible-change":e.visibleChangeHandler
          }, model:{
            value:e.show, callback:function(t){
              e.show=t
            }, expression:"show"
          }
        }, [
          r("Form", {
            staticClass:"setting-form-area", attrs:{
              model:e.formData, "label-position":"left", "label-width":120
            }
          }, [
            r("FormItem", {
              class:{
                "no-margin-bottom":"true"===e.formData.scored
              }, attrs:{
                label:e.$t("courseScore.scoreItemGroup.unscoredName"), prop:"scored"
              }
            }, [
              r("RadioGroup", {
                model:{
                  value:e.formData.scored, callback:function(t){
                    e.$set(e.formData, "scored", t)
                  }, expression:"formData.scored"
                }
              }, [
                r("Radio", {
                  attrs:{
                    label:"true"
                  }
                }, [
                  r("span", [
                    e._v(e._s(e.$t("yes")))
                  ])
                ]), e._v(" "), r("Radio", {
                  attrs:{
                    label:"false"
                  }
                }, [
                  r("span", [
                    e._v(e._s(e.$t("no")))
                  ])
                ])
              ], 1)
            ], 1), e._v(" "), "true"===e.formData.scored?r("div", {
              staticClass:"scored-tip scored-true"
            }, [
              r("i", {
                staticClass:"arrow-top"
              }), e._v(" "), r("div", {
                staticClass:"group-row"
              }, [
                r("div", {
                  staticClass:"required-label"
                }, [
                  e._v(e._s(e.$t("courseScore.scoreItemGroup.scoreGroupName")))
                ]), e._v(" "), r("Select", {
                  staticClass:"select-group", model:{
                    value:e.formData.groupId, callback:function(t){
                      e.$set(e.formData, "groupId", t)
                    }, expression:"formData.groupId"
                  }
                }, e._l(e.scoreItemGroups, (function(e){
                  return r("Option", {
                    key:e.id, attrs:{
                      value:e.id, label:e.name
                    }
                  })
                })), 1)
              ], 1), e._v(" "), r("div", {
                staticClass:"tip-row"
              }, [
                e._v(e._s(e.$t("courseScore.scoreItemGroup.questionnaireScoredTip")))
              ])
            ]):r("div", {
              staticClass:"scored-tip scored-false"
            }, [
              r("i", {
                staticClass:"arrow-top"
              }), e._v(" "), r("div", {
                staticClass:"tip-row"
              }, [
                e._v(e._s(e.$t("courseScore.scoreItemGroup.questionnaireNotScoredTip")))
              ])
            ])
          ], 1), e._v(" "), r("div", {
            staticClass:"modal-footer", attrs:{
              slot:"footer"
            }, slot:"footer"
          }, [
            r("Button", {
              attrs:{
                type:"primary"
              }, on:{
                click:e.ok
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
          ], 1)
        ], 1)
      }), [
      ], !1, null, "1f7e2ea6", null).exports, ee=(0, s.pM)({
        name:"score-setting-modal", components:{
          common:T, onlineVideoCompleteness:O, performance:K, rollcall:j, questionnaire:Z
        }, emits:[
          "on-submit"
        ], props:{
          value:{
            type:Boolean, required:!0
          }, scoreItem:{
            type:Object, required:!0
          }, scoreItemGroups:{
            type:Array, required:!0
          }
        }, setup:function(e, t){
          return{
            visible:(0, x.hRP)(e, "value", t.emit, {
              eventName:"input"
            }), comp:(0, s.EW)((function(){
              return"performance_score_setting"===e.scoreItem.type?K:"rollcall_score_setting"===e.scoreItem.type?j:"online_video_completeness_score_setting"===e.scoreItem.type?O:"questionnaire_activity"===e.scoreItem.type?Z:T
            }))
          }
        }
      });
      const te=(0, f.A)(ee, (function(){
        var e=this, t=e.$createElement;
        return(e._self._c||t)(e.comp, {
          tag:"component", attrs:{
            "score-item":e.scoreItem, "score-item-groups":e.scoreItemGroups
          }, on:{
            "on-submit":function(t){
              return e.$emit("on-submit")
            }
          }, model:{
            value:e.visible, callback:function(t){
              e.visible=t
            }, expression:"visible"
          }
        })
      }), [
      ], !1, null, "f3269d22", null).exports;
      var re=function(e, t, r, n){
        return new(r||(r=Promise))((function(o, a){
          function s(e){
            try{
              c(n.next(e))
            }
            catch(e){
              a(e)
            }
          }
          function i(e){
            try{
              c(n.throw(e))
            }
            catch(e){
              a(e)
            }
          }
          function c(e){
            var t;
            e.done?o(e.value):(t=e.value, t instanceof r?t:new r((function(e){
              e(t)
            }))).then(s, i)
          }
          c((n=n.apply(e, t||[
          ])).next())
        }))
      }, ne=function(e, t){
        var r, n, o, a, s={
          label:0, sent:function(){
            if(1&o[
              0
            ])throw o[
              1
            ];
            return o[
              1
            ]
          }, trys:[
          ], ops:[
          ]
        };
        return a={
          next:i(0), throw:i(1), return:i(2)
        }, "function"==typeof Symbol&&(a[
          Symbol.iterator
        ]
        =function(){
          return this
        }), a;
        function i(i){
          return function(c){
            return function(i){
              if(r)throw new TypeError("Generator is already executing.");
              for(;
              a&&(a=0, i[
                0
              ]
              &&(s=0)), s;
              )try{
                if(r=1, n&&(o=2&i[
                  0
                ]
                ?n.return:i[
                  0
                ]
                ?n.throw||((o=n.return)&&o.call(n), 0):n.next)&&!(o=o.call(n, i[
                  1
                ])).done)return o;
                switch(n=0, o&&(i=[
                  2&i[
                    0
                  ], o.value
                ]), i[
                  0
                ]){
                  case 0:case 1:o=i;
                  break;
                  case 4:return s.label++, {
                    value:i[
                      1
                    ], done:!1
                  };
                  case 5:s.label++, n=i[
                    1
                  ], i=[
                    0
                  ];
                  continue;
                  case 7:i=s.ops.pop(), s.trys.pop();
                  continue;
                  default:if(!(o=s.trys, (o=o.length>0&&o[
                    o.length-1
                  ])||6!==i[
                    0
                  ]
                  &&2!==i[
                    0
                  ])){
                    s=0;
                    continue
                  }
                  if(3===i[
                    0
                  ]
                  &&(!o||i[
                    1
                  ]
                  >o[
                    0
                  ]
                  &&i[
                    1
                  ]
                  <o[
                    3
                  ])){
                    s.label=i[
                      1
                    ];
                    break
                  }
                  if(6===i[
                    0
                  ]
                  &&s.label<o[
                    1
                  ]){
                    s.label=o[
                      1
                    ], o=i;
                    break
                  }
                  if(o&&s.label<o[
                    2
                  ]){
                    s.label=o[
                      2
                    ], s.ops.push(i);
                    break
                  }
                  o[
                    2
                  ]
                  &&s.ops.pop(), s.trys.pop();
                  continue
                }
                i=t.call(e, s)
              }
              catch(e){
                i=[
                  6, e
                ], n=0
              }
              finally{
                r=o=0
              }
              if(5&i[
                0
              ])throw i[
                1
              ];
              return{
                value:i[
                  0
                ]
                ?i[
                  1
                ]
                :void 0, done:!0
              }
            }
            ([
              i, c
            ])
          }
        }
      };
      const oe=(0, s.pM)({
        props:{
          course:{
            type:Object
          }, allowChangeGroups:{
            type:Boolean, default:!0
          }
        }, components:{
          TooltipExt:i.A, AddScoreGroupModal:m, DeleteScoreGroupModal:b, EditScoreGroupModal:I, SvgIcon:u.A, ScoreItemSettingModal:te
        }, setup:function(e, t){
          var r=this, n=(t.emit, (0, s.KR)(!1)), o=(0, s.KR)(!1), i=(0, s.KR)(!1), u=(0, s.KR)(0), d=(0, s.KR)(0), p=(0, s.KR)(""), v=(0, s.KR)(!1), f=(0, s.KR)(), m=(0, s.KR)([
          ]), h=[
            {
              title:a.default.t("courseScore.scoreItemGroup.scoreItem"), key:"name", slot:"name"
            }, {
              title:a.default.t("courseScore.scoreItemGroup.weight"), key:"weight", slot:"weight"
            }, {
              title:a.default.t("courseScore.scoreItemGroup.operation"), key:"option", slot:"option", width:140
            }
          ], _=(0, s.EW)((function(){
            return c._.sum(c._.map(m.value, (function(e){
              return Number(e.percentage)
            }))).toFixed(1)
          })), g=(0, s.EW)((function(){
            var e={
            };
            return m.value.forEach((function(t){
              e[
                t.id
              ]
              =c._.sum(c._.map(t.items, (function(e){
                return Number(e.weight)
              }))).toFixed(1)
            })), e
          })), b=(0, s.EW)((function(){
            var e={
            };
            return m.value.forEach((function(t){
              e[
                t.id
              ]
              =c._.sum(c._.map(t.items, (function(e){
                return e.customWeightEnabled?Number(e.weight):0
              }))).toFixed(1)
            })), e
          })), y=(0, s.EW)((function(){
            var e={
            };
            return m.value.forEach((function(t){
              t.items.forEach((function(t){
                e[
                  t.id
                ]
                =t
              }))
            })), e
          })), S=c._.debounce((function(){
            return re(r, void 0, void 0, (function(){
              return ne(this, (function(t){
                switch(t.label){
                  case 0:return[
                    4, (0, l.Px)(e.course.id, m.value.filter((function(e){
                      return e.id>0
                    })))
                  ];
                  case 1:return t.sent(), c.Toast.success(a.default.t("save_success")), [
                    2
                  ]
                }
              }))
            }))
          }), 1e3), w=function(e){
            var t=e.items, r=t.filter((function(e){
              return e.customWeightEnabled
            })), n=t.filter((function(e){
              return!e.customWeightEnabled
            })), o=+(100-r.reduce((function(e, t){
              return e+(parseFloat(t.weight)||0)
            }), 0)).toFixed(1), a=n.length;
            if(0!==a){
              var s=Math.floor(o/a*10)/10, i=+(o-(s=s<.1?0:s)*a).toFixed(1), c=0;
              t.forEach((function(e, t){
                if(!e.customWeightEnabled){
                  if(c===a-1){
                    var r=+(s+i).toFixed(1);
                    e.weight=r<.1?0:r
                  }
                  else e.weight=s;
                  c++
                }
              }))
            }
          }, I=(0, s.EW)((function(){
            return m.value.some((function(e){
              return!!e.importedFrom
            }))
          }));
          (0, s.wB)((function(){
            return e.course
          }), (function(){
            return re(r, void 0, void 0, (function(){
              var t;
              return ne(this, (function(r){
                switch(r.label){
                  case 0:return e.course&&e.course.id?(t=m, [
                    4, (0, l.Ad)(e.course.id)
                  ]):[
                    3, 2
                  ];
                  case 1:t.value=r.sent(), m.value.length>0&&m.value.forEach((function(e){
                    0!==e.id&&w(e)
                  })), r.label=2;
                  case 2:return[
                    2
                  ]
                }
              }))
            }))
          }), {
            immediate:!0
          });
          return{
            goBackScorePage:function(){
              var t;
              window.location.href="/course/".concat(null===(t=e.course)||void 0===t?void 0:t.id, "/score")
            }, editScoreItemSetting:function(e){
              f.value=e, v.value=!0
            }, columns:h, scoreItemGroups:m, editGroup:function(t, n){
              return re(r, void 0, void 0, (function(){
                var r;
                return ne(this, (function(o){
                  switch(o.label){
                    case 0:return(null===(r=e.course)||void 0===r?void 0:r.id)?[
                      4, (0, l.YL)(e.course.id, t, n)
                    ]
                    :[
                      2
                    ];
                    case 1:return o.sent(), c._.find(m.value, (function(e){
                      return e.id===t
                    })).name=n, c.Toast.success(a.default.t("save_success")), [
                      2
                    ]
                  }
                }))
              }))
            }, deleteGroup:function(){
              return re(r, void 0, void 0, (function(){
                var t, r;
                return ne(this, (function(n){
                  switch(n.label){
                    case 0:return(null===(r=e.course)||void 0===r?void 0:r.id)?[
                      4, (0, l.BT)(e.course.id, u.value)
                    ]
                    :[
                      2
                    ];
                    case 1:return n.sent(), u.value=0, c.Toast.success(a.default.t("save_success")), t=m, [
                      4, (0, l.Ad)(e.course.id)
                    ];
                    case 2:return t.value=n.sent(), [
                      2
                    ]
                  }
                }))
              }))
            }, getScoreItemIcon:function(e){
              return"homework_activity"===e?"font-syllabus-homework":"forum_activity"===e?"font-syllabus-forum":"exam_activity"===e?"font-syllabus-exam":"questionnaire_activity"===e?"font-syllabus-questionnaire":"web_link_activity"===e?"font-syllabus-web-link":"classroom_exam_activity"===e?"font-syllabus-classroom":"virtual_experiment_activity"===e?window.orgSettings.enableLamsLessonVirtualExperiment?"font-syllabus-lams-lesson-virtual-experiment":"font-syllabus-virtual-experiment":"online_video_completeness_score_setting"===e?"font-score-item-video-completeness":"performance_score_setting"===e?"font-score-item-performance":"rollcall_score_setting"===e?"font-score-item-rollcall":"interaction_activity"===e?"font-syllabus-interaction":"font-score-item-custom"
            }, getActivityJumpUrl:function(t){
              var r, n, o, a, s, i;
              return"exam_activity"===t.type?"/course/".concat(null===(r=e.course)||void 0===r?void 0:r.id, "/learning-activity#/exam/").concat(t.referrerId):"classroom_exam_activity"===t.type?"/course/".concat(null===(n=e.course)||void 0===n?void 0:n.id, "/learning-activity#/classroom/").concat(t.referrerId):"questionnaire_activity"===t.type?"/course/".concat(null===(o=e.course)||void 0===o?void 0:o.id, "/learning-activity#/questionnaire/").concat(t.referrerId):"performance_score_setting"===t.type?"/course/".concat(null===(a=e.course)||void 0===a?void 0:a.id, "/performance"):"rollcall_score_setting"===t.type?"/course/".concat(null===(s=e.course)||void 0===s?void 0:s.id, "/rollcall"):"/course/".concat(null===(i=e.course)||void 0===i?void 0:i.id, "/learning-activity#/").concat(t.referrerId)
            }, showAddGroupModal:n, openAddGroupModal:function(){
              n.value=!0
            }, createGroup:function(t){
              return re(r, void 0, void 0, (function(){
                var r, n;
                return ne(this, (function(o){
                  switch(o.label){
                    case 0:return(null===(n=e.course)||void 0===n?void 0:n.id)?[
                      4, (0, l.UT)(e.course.id, t)
                    ]
                    :[
                      2
                    ];
                    case 1:return o.sent(), c.Toast.success(a.default.t("save_success")), r=m, [
                      4, (0, l.Ad)(e.course.id)
                    ];
                    case 2:return r.value=o.sent(), [
                      2
                    ]
                  }
                }))
              }))
            }, showDeleteGroupModal:o, openDeleteGroupModal:function(e){
              o.value=!0, u.value=e
            }, showEditGroupModal:i, openEditGroupModal:function(e){
              d.value=e.id, p.value=e.name, i.value=!0
            }, needEditGroupName:p, needEditGroupId:d, currentGroupsPercentage:_, currentGroupItemsPercentageMap:g, groupItemsMap:y, groupPercentageChange:function(e, t){
              _.value>100&&(0, s.dY)((function(){
                t.percentage=e-_.value+100
              })), S()
            }, itemWeightChange:function(e, t, r){
              b.value[
                t.id
              ]
              >100&&(0, s.dY)((function(){
                r.weight=e-b.value[
                  t.id
                ]
                +100
              })), w(t), S()
            }, customWeightEnabledChange:function(e, t){
              e||w(t), S()
            }, showSettingModal:v, currentScoreItem:f, afterScoreItemSettingUpdated:function(){
              return re(r, void 0, void 0, (function(){
                var t;
                return ne(this, (function(r){
                  switch(r.label){
                    case 0:return e.course?(t=m, [
                      4, (0, l.Ad)(e.course.id)
                    ]):[
                      2
                    ];
                    case 1:return t.value=r.sent(), [
                      2
                    ]
                  }
                }))
              }))
            }, groupImportFromExternal:I
          }
        }
      });
      const ae=(0, f.A)(oe, (function(){
        var e=this, t=e.$createElement, r=e._self._c||t;
        return r("div", {
          staticClass:"score-group-setting-content"
        }, [
          r("div", {
            staticClass:"main-content"
          }, [
            r("div", {
              staticClass:"header-content"
            }, [
              r("div", {
                staticClass:"go-back-link", on:{
                  click:e.goBackScorePage
                }
              }, [
                r("i", {
                  staticClass:"font font-arrow-left-middle"
                }), e._v(" "), r("span", [
                  e._v(e._s(e.$t("courseScore.scoreItemGroup.gradeRatioSetting")))
                ])
              ])
            ]), e._v(" "), r("div", {
              staticClass:"body-content"
            }, [
              r("div", {
                staticClass:"group-percentage-tip", class:{
                  incomplete:e.currentGroupsPercentage<100
                }
              }, [
                e.currentGroupsPercentage<100?r("Icon", {
                  staticClass:"warning", attrs:{
                    type:"ios-alert", size:"18"
                  }
                }):r("i", {
                  staticClass:"font font-success"
                }), e._v(" "), r("span", {
                  domProps:{
                    innerHTML:e._s(e.$t("courseScore.scoreItemGroup.percentageTip", [
                      e.currentGroupsPercentage, (100-e.currentGroupsPercentage).toFixed(1)
                    ]))
                  }
                })
              ], 1), e._v(" "), r("div", {
                staticClass:"title-area-div"
              }, [
                r("div", {
                  staticClass:"group-count"
                }, [
                  e._v(e._s(e.$t("courseScore.scoreItemGroup.total", [
                    e.scoreItemGroups.length-1
                  ])))
                ]), e._v(" "), !e.groupImportFromExternal&&e.allowChangeGroups?r("a", {
                  on:{
                    click:e.openAddGroupModal
                  }
                }, [
                  r("i", {
                    staticClass:"font font-add-new-elem"
                  }), e._v(" "), r("span", [
                    e._v(e._s(e.$t("courseScore.scoreItemGroup.createGroup")))
                  ])
                ]):e._e()
              ]), e._v(" "), e._l(e.scoreItemGroups, (function(t){
                return r("div", {
                  key:t.id, staticClass:"item-group"
                }, [
                  r("div", {
                    staticClass:"item-group-header"
                  }, [
                    r("div", {
                      staticClass:"left-area"
                    }, [
                      r("span", {
                        staticClass:"group-name"
                      }, [
                        e._v(e._s(t.name))
                      ]), e._v(" "), t.id>0?r("InputNumber", {
                        attrs:{
                          max:100, min:0, disabled:e.groupImportFromExternal, precision:0, "active-change":!1
                        }, on:{
                          "on-change":function(r){
                            return e.groupPercentageChange(r, t)
                          }
                        }, model:{
                          value:t.percentage, callback:function(r){
                            e.$set(t, "percentage", r)
                          }, expression:"group.percentage"
                        }
                      }):e._e(), e._v(" "), t.id>0?r("span", [
                        e._v("%")
                      ]):e._e()
                    ], 1), e._v(" "), t.id>0&&!e.groupImportFromExternal&&e.allowChangeGroups?r("div", {
                      staticClass:"right-area"
                    }, [
                      r("a", {
                        on:{
                          click:function(r){
                            return e.openEditGroupModal(t)
                          }
                        }
                      }, [
                        r("i", {
                          staticClass:"font font-edit"
                        })
                      ]), e._v(" "), r("a", {
                        on:{
                          click:function(r){
                            return e.openDeleteGroupModal(t.id)
                          }
                        }
                      }, [
                        r("i", {
                          staticClass:"font font-delete"
                        })
                      ])
                    ]):e._e()
                  ]), e._v(" "), r("div", {
                    staticClass:"item-group-body"
                  }, [
                    0!==t.id?r("div", {
                      staticClass:"item-group-percentage-tip", class:{
                        incomplete:e.currentGroupItemsPercentageMap[
                          t.id
                        ]
                        <100
                      }
                    }, [
                      r("span", {
                        domProps:{
                          innerHTML:e._s(e.$t("courseScore.scoreItemGroup.itemGroupPercentageTip", [
                            e.currentGroupItemsPercentageMap[
                              t.id
                            ], (100-e.currentGroupItemsPercentageMap[
                              t.id
                            ]).toFixed(1)
                          ]))
                        }
                      })
                    ]):e._e(), e._v(" "), r("Table", {
                      attrs:{
                        columns:e.columns, data:t.items, size:"small"
                      }, scopedSlots:e._u([
                        {
                          key:"name", fn:function(t){
                            var n=t.row;
                            return[
                              r("div", {
                                staticClass:"score-item-name"
                              }, [
                                r("i", {
                                  staticClass:"font", class:e.getScoreItemIcon(n.type)
                                }), e._v(" "), [
                                  "online_video_completeness_score_setting", "custom"
                                ].includes(n.type)?r("TooltipExt", {
                                  attrs:{
                                    text:n.name
                                  }
                                }):r("a", {
                                  staticClass:"activity-jump-btn", attrs:{
                                    href:e.getActivityJumpUrl(n), target:"_blank"
                                  }
                                }, [
                                  r("TooltipExt", {
                                    attrs:{
                                      text:n.name
                                    }
                                  })
                                ], 1)
                              ], 1)
                            ]
                          }
                        }, {
                          key:"weight", fn:function(n){
                            var o=n.row;
                            return[
                              r("div", {
                                staticClass:"item-weight-div"
                              }, [
                                r("div", {
                                  staticClass:"weight-div"
                                }, [
                                  r("InputNumber", {
                                    attrs:{
                                      max:100, min:0, precision:1, "active-change":!1, disabled:!e.groupItemsMap[
                                        o.id
                                      ].customWeightEnabled
                                    }, on:{
                                      "on-change":function(r){
                                        return e.itemWeightChange(r, t, e.groupItemsMap[
                                          o.id
                                        ])
                                      }
                                    }, model:{
                                      value:e.groupItemsMap[
                                        o.id
                                      ].weight, callback:function(t){
                                        e.$set(e.groupItemsMap[
                                          o.id
                                        ], "weight", t)
                                      }, expression:"groupItemsMap[row.id].weight"
                                    }
                                  }), e._v(" "), r("span", [
                                    e._v("%")
                                  ])
                                ], 1), e._v(" "), t.id>0?r("Checkbox", {
                                  on:{
                                    "on-change":function(r){
                                      return e.customWeightEnabledChange(r, t)
                                    }
                                  }, model:{
                                    value:e.groupItemsMap[
                                      o.id
                                    ].customWeightEnabled, callback:function(t){
                                      e.$set(e.groupItemsMap[
                                        o.id
                                      ], "customWeightEnabled", t)
                                    }, expression:"groupItemsMap[row.id].customWeightEnabled"
                                  }
                                }, [
                                  e._v("\n                  "+e._s(e.$t("courseScore.scoreItemGroup.customWeight"))+"\n                ")
                                ]):e._e()
                              ], 1)
                            ]
                          }
                        }, {
                          key:"option", fn:function(t){
                            var n=t.row;
                            return[
                              r("div", {
                                staticClass:"options-div"
                              }, [
                                r("a", {
                                  on:{
                                    click:function(t){
                                      return e.editScoreItemSetting(n)
                                    }
                                  }
                                }, [
                                  e._v(e._s(e.$t("courseScore.scoreItemGroup.settings")))
                                ])
                              ])
                            ]
                          }
                        }
                      ], null, !0)
                    })
                  ], 1)
                ])
              }))
            ], 2)
          ]), e._v(" "), r("AddScoreGroupModal", {
            on:{
              "on-submit":e.createGroup
            }, model:{
              value:e.showAddGroupModal, callback:function(t){
                e.showAddGroupModal=t
              }, expression:"showAddGroupModal"
            }
          }), e._v(" "), r("DeleteScoreGroupModal", {
            on:{
              "on-submit":e.deleteGroup
            }, model:{
              value:e.showDeleteGroupModal, callback:function(t){
                e.showDeleteGroupModal=t
              }, expression:"showDeleteGroupModal"
            }
          }), e._v(" "), r("EditScoreGroupModal", {
            attrs:{
              "group-id":e.needEditGroupId, name:e.needEditGroupName
            }, on:{
              "on-submit":e.editGroup
            }, model:{
              value:e.showEditGroupModal, callback:function(t){
                e.showEditGroupModal=t
              }, expression:"showEditGroupModal"
            }
          }), e._v(" "), e.currentScoreItem?r("ScoreItemSettingModal", {
            attrs:{
              "score-item":e.currentScoreItem, "score-item-groups":e.scoreItemGroups.filter((function(e){
                return e.id
              }))
            }, on:{
              "on-submit":e.afterScoreItemSettingUpdated
            }, model:{
              value:e.showSettingModal, callback:function(t){
                e.showSettingModal=t
              }, expression:"showSettingModal"
            }
          }):e._e()
        ], 1)
      }), [
      ], !1, null, "b705a394", null).exports;
      r(906048);
      var se=r(88595), ie=r(33400), ce=r(660787), ue=function(e, t, r, n){
        return new(r||(r=Promise))((function(o, a){
          function s(e){
            try{
              c(n.next(e))
            }
            catch(e){
              a(e)
            }
          }
          function i(e){
            try{
              c(n.throw(e))
            }
            catch(e){
              a(e)
            }
          }
          function c(e){
            var t;
            e.done?o(e.value):(t=e.value, t instanceof r?t:new r((function(e){
              e(t)
            }))).then(s, i)
          }
          c((n=n.apply(e, t||[
          ])).next())
        }))
      }, le=function(e, t){
        var r, n, o, a, s={
          label:0, sent:function(){
            if(1&o[
              0
            ])throw o[
              1
            ];
            return o[
              1
            ]
          }, trys:[
          ], ops:[
          ]
        };
        return a={
          next:i(0), throw:i(1), return:i(2)
        }, "function"==typeof Symbol&&(a[
          Symbol.iterator
        ]
        =function(){
          return this
        }), a;
        function i(i){
          return function(c){
            return function(i){
              if(r)throw new TypeError("Generator is already executing.");
              for(;
              a&&(a=0, i[
                0
              ]
              &&(s=0)), s;
              )try{
                if(r=1, n&&(o=2&i[
                  0
                ]
                ?n.return:i[
                  0
                ]
                ?n.throw||((o=n.return)&&o.call(n), 0):n.next)&&!(o=o.call(n, i[
                  1
                ])).done)return o;
                switch(n=0, o&&(i=[
                  2&i[
                    0
                  ], o.value
                ]), i[
                  0
                ]){
                  case 0:case 1:o=i;
                  break;
                  case 4:return s.label++, {
                    value:i[
                      1
                    ], done:!1
                  };
                  case 5:s.label++, n=i[
                    1
                  ], i=[
                    0
                  ];
                  continue;
                  case 7:i=s.ops.pop(), s.trys.pop();
                  continue;
                  default:if(!(o=s.trys, (o=o.length>0&&o[
                    o.length-1
                  ])||6!==i[
                    0
                  ]
                  &&2!==i[
                    0
                  ])){
                    s=0;
                    continue
                  }
                  if(3===i[
                    0
                  ]
                  &&(!o||i[
                    1
                  ]
                  >o[
                    0
                  ]
                  &&i[
                    1
                  ]
                  <o[
                    3
                  ])){
                    s.label=i[
                      1
                    ];
                    break
                  }
                  if(6===i[
                    0
                  ]
                  &&s.label<o[
                    1
                  ]){
                    s.label=o[
                      1
                    ], o=i;
                    break
                  }
                  if(o&&s.label<o[
                    2
                  ]){
                    s.label=o[
                      2
                    ], s.ops.push(i);
                    break
                  }
                  o[
                    2
                  ]
                  &&s.ops.pop(), s.trys.pop();
                  continue
                }
                i=t.call(e, s)
              }
              catch(e){
                i=[
                  6, e
                ], n=0
              }
              finally{
                r=o=0
              }
              if(5&i[
                0
              ])throw i[
                1
              ];
              return{
                value:i[
                  0
                ]
                ?i[
                  1
                ]
                :void 0, done:!0
              }
            }
            ([
              i, c
            ])
          }
        }
      };
      const de=(0, s.pM)({
        components:{
          TooltipExt:i.A, Avatar:ie.A
        }, props:{
          course:{
            type:Object
          }
        }, setup:function(e, t){
          var r, n, o=this, i=(t.emit, null===(n=null===(r=window.globalData)||void 0===r?void 0:r.user)||void 0===n?void 0:n.id), u=(0, s.KR)(), d=(0, s.KR)(), p=(0, s.KR)(), v=(0, s.KR)(), f=(0, s.KR)([
          ]), m=(0, s.KR)([
          ]), h=(0, s.KR)([
          ]), _=(0, s.KR)([
          ]), g=(0, s.KR)([
          ]), b=(0, s.KR)([
          ]), y=(0, s.KR)([
          ]), S=(0, s.KR)({
          }), w=(0, s.KR)({
          }), I=(0, s.KR)({
          }), x=(0, s.KR)(), C=(0, s.KR)(), k=(0, s.KR)([
          ]), A=(0, s.KR)(!0), $=[
            {
              title:a.default.t("courseScore.scoreItemGroup.scoreItem"), key:"name", slot:"name"
            }, {
              title:a.default.t("courseScore.scoreItemGroup.weightedScore"), key:"weightedScore", slot:"score", sortable:!0
            }
          ], G=function(e, t){
            var r=Math.round(e*(t/100)*10)/10;
            return Number.isInteger(r)?Math.trunc(r):r
          }, D=function(e){
            return"scored"===e?"published":[
              "unpublished", "unsubmitted", "unmarked", "unscored", "published"
            ].includes(e)?e:[
              "un_submitted"
            ].includes(e)?"unsubmitted":[
              "un_marked"
            ].includes(e)?"unmarked":[
              "un_scored"
            ].includes(e)?"unscored":"unpublished"
          }, T=(0, s.EW)((function(){
            var e=!1, t=0;
            return c._.forEach(f.value, (function(r){
              var n=0;
              c._.forEach(r.items, (function(t){
                [
                  "unpublished", "unsubmitted", "unmarked", "unscored"
                ].includes(t.status)?"unpublished"===t.status&&(e=!0):n+=t.rawScore*t.weight/100
              })), t+=n*r.percentage/100
            })), e?x.value.rawScore:G(t, 100)
          })), E=(0, s.EW)((function(){
            var e, t, r;
            return(null===(e=x.value)||void 0===e?void 0:e.instructorScoreTime)?x.value.totalScore:null!==(t=T.value)&&void 0!==t?t:null===(r=x.value)||void 0===r?void 0:r.totalScore
          })), P=(0, s.EW)((function(){
            return!!C.value&&("immediate_announce"===C.value.announceScoreType||"timed_announce"===C.value.announceScoreType&&C.value.isAnnounceScoreTimePassed)
          })), R=(0, s.EW)((function(){
            if(!C.value)return"--";
            if("immediate_announce"===C.value.announceRawScoreType)return String(Math.round(10*T.value)/10);
            if("timed_announce"===C.value.announceRawScoreType){
              if(C.value.isAnnounceRawScoreTimePassed)return String(Math.round(10*T.value)/10);
              var e=se.A.formatDatetime(C.value.announceRawScoreTime, "YYYY-MM-DD HH:mm");
              return a.default.t("courseScore.scoreItemGroup.publishTip", [
                e
              ])
            }
            return a.default.t("courseScore.scoreItemGroup.unpublish")
          })), M=(0, s.EW)((function(){
            if(!C.value)return"--";
            var e=se.A.formatDatetime(C.value.announceScoreTime, "YYYY-MM-DD HH:mm");
            return a.default.t("courseScore.scoreItemGroup.publishTip", [
              e
            ])
          })), N=function(){
            return ue(o, void 0, void 0, (function(){
              var t, r, n, o, a, s, $, T, E, P, R, M, N, L, O, B, W, z, F;
              return le(this, (function(K){
                switch(K.label){
                  case 0:return(null===(F=e.course)||void 0===F?void 0:F.id)?[
                    4, Promise.all([
                      (0, ce.B)(e.course.id, i), (0, l._p)(e.course.id), (0, l.HE)(e.course.id), (0, l.kX)(e.course.id), (0, l.ke)(e.course.id), (0, l.LL)(e.course.id), (0, l.g7)(e.course.id), (0, l.WD)(e.course.id), (0, l.BI)(e.course.id), (0, l.Pj)(e.course.id), (0, l.rZ)(e.course.id), (0, l.BV)(e.course.id), (0, l.K3)(e.course.id), (0, l._i)(e.course.id), (0, l.Qi)(e.course.id), (0, l.zc)(e.course.id), (0, l.DU)(e.course.id)
                    ])
                  ]
                  :[
                    2
                  ];
                  case 1:return t=K.sent(), r=t[
                    0
                  ], n=t[
                    1
                  ], o=t[
                    2
                  ], a=t[
                    3
                  ], s=t[
                    4
                  ], $=t[
                    5
                  ], T=t[
                    6
                  ], E=t[
                    7
                  ], P=t[
                    8
                  ], R=t[
                    9
                  ], M=t[
                    10
                  ], N=t[
                    11
                  ], L=t[
                    12
                  ], O=t[
                    13
                  ], B=t[
                    14
                  ], W=t[
                    15
                  ], z=t[
                    16
                  ], u.value=r, d.value=n, p.value=o, v.value=a, m.value=s, h.value=$, S.value=T, y.value=E, w.value=P, _.value=R, g.value=M, b.value=N, I.value=L, x.value=O, k.value=B, C.value=W, f.value=z, c._.forEach(f.value, (function(e){
                    c._.forEach(e.items, (function(t){
                      if("rollcall_score_setting"===t.type&&d.value)d.value.public&&(t.rawScore=d.value.score, t.weightedScore=G(t.rawScore, t.weight)), t.status=d.value.public?"published":"unpublished";
                      else if("performance_score_setting"===t.type&&p.value)p.value.scoreAnnounced&&(t.rawScore=p.value.score, t.weightedScore=G(t.rawScore, t.weight)), t.status=p.value.scoreAnnounced?"published":"unpublished";
                      else if("online_video_completeness_score_setting"===t.type&&v.value)t.rawScore=v.value.score, t.weightedScore=G(t.rawScore, t.weight), t.status="published";
                      else if("interaction_activity"===t.type){
                        var r=c._.find(m.value, (function(e){
                          return e.activityId===t.referrerId
                        }));
                        r?(t.rawScore=r.score, t.weightedScore=G(t.rawScore, t.weight), t.status="published"):t.status="unscored"
                      }
                      else if("exam_activity"===t.type){
                        var n=c._.find(h.value, (function(e){
                          return e.activityId===t.referrerId
                        })), o="unsubmitted";
                        S.value[
                          t.referrerId
                        ]
                        &&S.value[
                          t.referrerId
                        ]
                        [
                          i
                        ]
                        &&(o=D(S.value[
                          t.referrerId
                        ]
                        [
                          i
                        ])), n&&t.isAnnounceScore?(t.rawScore=n.score, t.weightedScore=G(t.rawScore, t.weight)):(t.rawScore=0, t.weightedScore=0), t.status=t.isAnnounceScore?o:"unpublished"
                      }
                      else if("homework_activity"===t.type){
                        var a=c._.find(y.value, (function(e){
                          return e.activityId===t.referrerId
                        })), s="unsubmitted";
                        w.value[
                          t.referrerId
                        ]
                        &&w.value[
                          t.referrerId
                        ]
                        [
                          i
                        ]
                        &&"unmarked"===(s=D(w.value[
                          t.referrerId
                        ]
                        [
                          i
                        ]))&&(s="unscored"), a&&t.isAnnounceScore?(t.rawScore=a.score, t.weightedScore=G(t.rawScore, t.weight)):(t.rawScore=0, t.weightedScore=0), t.status=t.isAnnounceScore?s:"unpublished"
                      }
                      else if("forum_activity"===t.type){
                        var u=c._.find(_.value, (function(e){
                          return e.activityId===t.referrerId
                        })), l="published";
                        t.isAnnounceScore&&u&&(null!==u.score||void 0!==u.score)?(t.rawScore=u.score, t.weightedScore=G(t.rawScore, t.weight)):l="unscored", t.status=t.isAnnounceScore?l:"unpublished"
                      }
                      else if("questionnaire_activity"===t.type){
                        var f=c._.find(g.value, (function(e){
                          return e.activityId===t.referrerId
                        }));
                        !f||null===f.score&&void 0===f.score?(t.rawScore=0, t.weightedScore=0, t.status="unscored"):(t.rawScore=f.score, t.weightedScore=G(t.rawScore, t.weight), t.status="published")
                      }
                      else if("classroom_exam_activity"===t.type){
                        var x=c._.find(b.value, (function(e){
                          return e.activityId===t.referrerId
                        })), C="unsubmitted";
                        I.value[
                          t.referrerId
                        ]
                        &&I.value[
                          t.referrerId
                        ]
                        [
                          i
                        ]
                        &&(C=D(I.value[
                          t.referrerId
                        ]
                        [
                          i
                        ])), t.status=t.isAnnounceScore?C:"unpublished", !x||"published"!==t.status||null===x.score&&void 0===x.score?(t.rawScore=0, t.weightedScore=0):(t.rawScore=x.score, t.weightedScore=G(t.rawScore, t.weight))
                      }
                      else if("custom"===t.type){
                        var A=c._.find(k.value, (function(e){
                          return e.id===t.id
                        })), $="published";
                        A&&null!==A.score&&void 0!==A.score?(t.rawScore=G(parseFloat(A.score.toString()), 100), t.weightedScore=G(t.rawScore, t.weight)):$="unscored", t.status=t.isAnnounceScore?$:"unpublished"
                      }
                      [
                        "unpublished", "unsubmitted", "unmarked", "unscored"
                      ].includes(t.status)||(e.weightedScore=Math.round(10*(t.weightedScore+e.weightedScore))/10)
                    }))
                  })), A.value=!1, [
                    2
                  ]
                }
              }))
            }))
          };
          return(0, s.sV)((function(){
            N()
          })), {
            currentUserDetail:u, scoreItemGroups:f, columns:$, getScoreItemIcon:function(e){
              return"homework_activity"===e?"font-syllabus-homework":"forum_activity"===e?"font-syllabus-forum":"exam_activity"===e?"font-syllabus-exam":"questionnaire_activity"===e?"font-syllabus-questionnaire":"web_link_activity"===e?"font-syllabus-web-link":"classroom_exam_activity"===e?"font-syllabus-classroom":"virtual_experiment_activity"===e?window.orgSettings.enableLamsLessonVirtualExperiment?"font-syllabus-lams-lesson-virtual-experiment":"font-syllabus-virtual-experiment":"online_video_completeness_score_setting"===e?"font-score-item-video-completeness":"performance_score_setting"===e?"font-score-item-performance":"rollcall_score_setting"===e?"font-score-item-rollcall":"interaction_activity"===e?"font-syllabus-interaction":"font-score-item-custom"
            }, getActivityJumpUrl:function(t){
              var r, n, o, a, s;
              return"exam_activity"===t.type?"/course/".concat(null===(r=e.course)||void 0===r?void 0:r.id, "/learning-activity#/exam/").concat(t.referrerId):"classroom_exam_activity"===t.type?"/course/".concat(null===(n=e.course)||void 0===n?void 0:n.id, "/learning-activity#/classroom/").concat(t.referrerId):"questionnaire_activity"===t.type?"/course/".concat(null===(o=e.course)||void 0===o?void 0:o.id, "/learning-activity#/questionnaire/").concat(t.referrerId):"rollcall_score_setting"===t.type?"/course/".concat(null===(a=e.course)||void 0===a?void 0:a.id, "/rollcall"):"/course/".concat(null===(s=e.course)||void 0===s?void 0:s.id, "/learning-activity#/").concat(t.referrerId)
            }, totalScore:E, videoScore:v, totalScorePublishTimeStr:M, rawScoreValue:R, displayFinalScore:P, announceScoreSettings:C, loading:A, hasUnpublishedItems:function(e){
              return c._.some(e.items, (function(e){
                return"unpublished"===e.status
              }))
            }
          }
        }
      });
      const pe=(0, f.A)(de, (function(){
        var e=this, t=e.$createElement, r=e._self._c||t;
        return r("div", {
          staticClass:"student-score-page"
        }, [
          e.loading?e._e():r("div", {
            staticClass:"student-info-area"
          }, [
            e.currentUserDetail?r("div", {
              staticClass:"student-infos"
            }, [
              r("div", {
                staticClass:"student-avatar"
              }, [
                r("Avatar", {
                  staticClass:"avatar64", attrs:{
                    user:e.currentUserDetail
                  }
                })
              ], 1), e._v(" "), r("div", {
                staticClass:"student-info"
              }, [
                r("div", {
                  staticClass:"student-name"
                }, [
                  e._v(e._s(e.currentUserDetail.name)+"（"+e._s(e.currentUserDetail.userNo)+"）")
                ]), e._v(" "), r("div", {
                  staticClass:"department-info"
                }, [
                  e.currentUserDetail.department&&e.currentUserDetail.department.name?r("div", {
                    staticClass:"department"
                  }, [
                    e._v("\n            "+e._s(e.currentUserDetail.department.name)+"\n          ")
                  ]):e._e(), e._v(" "), e.currentUserDetail.department&&e.currentUserDetail.department.name&&e.currentUserDetail.grade&&e.currentUserDetail.grade.name?r("div", {
                    staticClass:"split"
                  }):e._e(), e._v(" "), e.currentUserDetail.grade&&e.currentUserDetail.grade.name?r("div", {
                    staticClass:"grade"
                  }, [
                    e._v("\n            "+e._s(e.currentUserDetail.grade.name)+"\n          ")
                  ]):e._e(), e._v(" "), (e.currentUserDetail.department&&e.currentUserDetail.department.name||e.currentUserDetail.grade&&e.currentUserDetail.grade.name)&&e.currentUserDetail.klass&&e.currentUserDetail.klass.name?r("div", {
                    staticClass:"split"
                  }):e._e(), e._v(" "), e.currentUserDetail.klass&&e.currentUserDetail.klass.name?r("div", {
                    staticClass:"klass"
                  }, [
                    e._v("\n            "+e._s(e.currentUserDetail.klass.name)+"\n          ")
                  ]):e._e()
                ])
              ])
            ]):e._e(), e._v(" "), r("div", {
              staticClass:"student-score-area"
            }, [
              e.displayFinalScore?r("div", {
                staticClass:"total-score"
              }, [
                r("div", {
                  staticClass:"final-score-label"
                }, [
                  e._v(e._s(e.$t("courseScore.scoreItemGroup.finalScore"))+"：")
                ]), e._v(" "), r("div", {
                  staticClass:"final-scores"
                }, [
                  r("div", {
                    staticClass:"final-score-value"
                  }, [
                    e._v(e._s(e.totalScore))
                  ])
                ])
              ]):r("div", {
                staticClass:"no-announce-score"
              }, [
                r("div", {
                  staticClass:"first-line-info"
                }, [
                  r("div", {
                    staticClass:"final-score-label"
                  }, [
                    e._v(e._s(e.$t("courseScore.scoreItemGroup.finalScore"))+"：")
                  ]), e._v(" "), e.announceScoreSettings&&"no_announce"===e.announceScoreSettings.announceScoreType?r("div", {
                    staticClass:"announce-status"
                  }, [
                    e._v("\n            "+e._s(e.$t("courseScore.scoreItemGroup.unpublish"))+"\n          ")
                  ]):e._e(), e._v(" "), e.announceScoreSettings&&"timed_announce"===e.announceScoreSettings.announceScoreType?r("div", {
                    staticClass:"announce-status"
                  }, [
                    e._v("\n            "+e._s(e.totalScorePublishTimeStr)+"\n          ")
                  ]):e._e()
                ])
              ]), e._v(" "), r("div", {
                staticClass:"raw-score"
              }, [
                r("div", {
                  staticClass:"raw-score-label"
                }, [
                  e._v("\n          "+e._s(e.$t("scoreRecord.originalScore"))+"\n          "), r("Tooltip", {
                    staticStyle:{
                      display:"inline"
                    }, attrs:{
                      content:e.$t("courseScore.scoreItemGroup.originalScoreTip"), placement:"top"
                    }
                  }, [
                    r("i", {
                      staticClass:"font font-question"
                    })
                  ]), e._v("\n          ：\n        ")
                ], 1), e._v(" "), r("div", {
                  staticClass:"raw-score-value"
                }, [
                  e._v(e._s(e.rawScoreValue))
                ])
              ])
            ])
          ]), e._v(" "), e.loading?e._e():r("div", {
            staticClass:"student-score-groups-area"
          }, [
            e.scoreItemGroups.length>0?e._l(e.scoreItemGroups, (function(t){
              return r("div", {
                key:t.id, staticClass:"item-group"
              }, [
                r("div", {
                  staticClass:"item-group-header"
                }, [
                  r("div", {
                    staticClass:"left-area"
                  }, [
                    r("span", {
                      staticClass:"group-name"
                    }, [
                      e._v(e._s(t.name)+" ("+e._s(t.percentage)+"%)")
                    ])
                  ]), e._v(" "), r("div", {
                    staticClass:"right-area"
                  }, [
                    e._v("\n            "+e._s(e.$t("courseScore.scoreItemGroup.score"))+"：\n            "), e.hasUnpublishedItems(t)?r("span", [
                      e._v(e._s(e.$t("courseScore.scoreItemGroup.partiallyUnpublished")))
                    ]):r("span", [
                      e._v(e._s(t.weightedScore))
                    ])
                  ])
                ]), e._v(" "), r("div", {
                  staticClass:"item-group-body"
                }, [
                  r("Table", {
                    attrs:{
                      columns:e.columns, data:t.items, size:"small"
                    }, scopedSlots:e._u([
                      {
                        key:"name", fn:function(t){
                          var n=t.row;
                          return[
                            r("div", {
                              staticClass:"score-item-name"
                            }, [
                              r("i", {
                                staticClass:"font", class:e.getScoreItemIcon(n.type)
                              }), e._v(" "), r("div", [
                                [
                                  "online_video_completeness_score_setting", "performance_score_setting", "custom"
                                ].includes(n.type)?r("TooltipExt", {
                                  attrs:{
                                    text:n.name
                                  }
                                }):e._e(), e._v(" "), [
                                  "online_video_completeness_score_setting", "performance_score_setting", "custom"
                                ].includes(n.type)?e._e():r("a", {
                                  staticClass:"activity-jump-btn", attrs:{
                                    href:e.getActivityJumpUrl(n), target:"_blank"
                                  }
                                }, [
                                  r("TooltipExt", {
                                    attrs:{
                                      text:n.name
                                    }
                                  })
                                ], 1), e._v(" "), "online_video_completeness_score_setting"===n.type&&e.videoScore?r("div", {
                                  staticClass:"item-tips"
                                }, [
                                  e.videoScore.percentageRange?r("div", [
                                    e._v("\n                      "+e._s(e.$t("courseScore.scoreItemGroup.videoScoreCustomedTips", [
                                      e.videoScore.completeRate
                                    ].concat(e.videoScore.percentageRange, [
                                      e.videoScore.score
                                    ])))+"\n                    ")
                                  ]):r("div", [
                                    e._v(e._s(e.$t("courseScore.scoreItemGroup.videoScoreTips")))
                                  ])
                                ]):e._e(), e._v(" "), "performance_score_setting"===n.type?r("div", {
                                  staticClass:"item-tips"
                                }, [
                                  e._v("\n                    "+e._s(e.$t("courseScore.scoreItemGroup.performanceScoreTips"))+"\n                  ")
                                ]):e._e(), e._v(" "), "rollcall_score_setting"===n.type&&"rate"===n.scoreMethod?r("div", {
                                  staticClass:"item-tips"
                                }, [
                                  e._v("\n                    "+e._s(e.$t("courseScore.scoreItemGroup.rollcallScoreTips1"))+"\n                  ")
                                ]):e._e(), e._v(" "), "rollcall_score_setting"===n.type&&"count"===n.scoreMethod?r("div", {
                                  staticClass:"item-tips"
                                }, [
                                  e._v("\n                    "+e._s(e.$t("courseScore.scoreItemGroup.rollcallScoreTips2"))+"\n                  ")
                                ]):e._e()
                              ], 1)
                            ])
                          ]
                        }
                      }, {
                        key:"score", fn:function(t){
                          var n=t.row;
                          return[
                            r("div", {
                              staticClass:"item-score-div"
                            }, [
                              [
                                "unpublished", "unsubmitted", "unmarked", "unscored"
                              ].includes(n.status)?e._e():r("span", {
                                staticClass:"score"
                              }, [
                                e._v("\n                  "+e._s(n.weightedScore)+"\n                ")
                              ]), e._v(" "), [
                                "unpublished", "unsubmitted", "unmarked", "unscored"
                              ].includes(n.status)?r("div", {
                                staticClass:"no-score"
                              }, [
                                r("span", {
                                  staticClass:"icon", class:n.status
                                }), e._v(" "), "homework_activity"===n.type&&[
                                  "unmarked", "unscored"
                                ].includes(n.status)?r("span", {
                                  staticClass:"status"
                                }, [
                                  e._v("\n                    "+e._s(e.$t("courseScore.scoreItemGroup.unscored"))+"\n                  ")
                                ]):r("span", {
                                  staticClass:"status"
                                }, [
                                  e._v(e._s(e.$t("courseScore.scoreItemGroup."+n.status)))
                                ])
                              ]):e._e(), e._v(" "), [
                                "unpublished", "unsubmitted", "unmarked", "unscored"
                              ].includes(n.status)?e._e():r("span", {
                                staticClass:"tips"
                              }, [
                                e._v("\n                  ("+e._s(e.$t("courseScore.scoreItemGroup.rawScore"))+": "+e._s(n.rawScore)+" *\n                  "+e._s(e.$t("courseScore.scoreItemGroup.weight"))+": "+e._s(n.weight)+"%)\n                ")
                              ]), e._v(" "), [
                                "unpublished", "unsubmitted", "unmarked", "unscored"
                              ].includes(n.status)?r("span", {
                                staticClass:"tips"
                              }, [
                                e._v("\n                  ("+e._s(e.$t("courseScore.scoreItemGroup.rawScore"))+": -- *\n                  "+e._s(e.$t("courseScore.scoreItemGroup.weight"))+": "+e._s(n.weight)+"%)\n                ")
                              ]):e._e()
                            ])
                          ]
                        }
                      }
                    ], null, !0)
                  })
                ], 1)
              ])
            })):e._e(), e._v(" "), 0===e.scoreItemGroups.length?r("div", {
              staticClass:"no-score-group"
            }, [
              r("Icon", {
                attrs:{
                  custom:"font font-no-score-record", size:"90"
                }
              }), e._v(" "), r("span", [
                e._v(e._s(e.$t("courseScore.scoreItemGroup.noScoreGroupMsg")))
              ])
            ], 1):e._e()
          ], 2)
        ])
      }), [
      ], !1, null, "2b908a95", null).exports;
      r(184095), r(979073), r(43148), r(754989);
      var ve=r(311629), fe=r(307974), me=r(772297), he=function(){
        return(he=Object.assign||function(e){
          for(var t, r=1, n=arguments.length;
          r<n;
          r++)for(var o in t=arguments[
            r
          ])Object.prototype.hasOwnProperty.call(t, o)&&(e[
            o
          ]
          =t[
            o
          ]);
          return e
        }).apply(this, arguments)
      }, _e=function(e, t, r, n){
        return new(r||(r=Promise))((function(o, a){
          function s(e){
            try{
              c(n.next(e))
            }
            catch(e){
              a(e)
            }
          }
          function i(e){
            try{
              c(n.throw(e))
            }
            catch(e){
              a(e)
            }
          }
          function c(e){
            var t;
            e.done?o(e.value):(t=e.value, t instanceof r?t:new r((function(e){
              e(t)
            }))).then(s, i)
          }
          c((n=n.apply(e, t||[
          ])).next())
        }))
      }, ge=function(e, t){
        var r, n, o, a, s={
          label:0, sent:function(){
            if(1&o[
              0
            ])throw o[
              1
            ];
            return o[
              1
            ]
          }, trys:[
          ], ops:[
          ]
        };
        return a={
          next:i(0), throw:i(1), return:i(2)
        }, "function"==typeof Symbol&&(a[
          Symbol.iterator
        ]
        =function(){
          return this
        }), a;
        function i(i){
          return function(c){
            return function(i){
              if(r)throw new TypeError("Generator is already executing.");
              for(;
              a&&(a=0, i[
                0
              ]
              &&(s=0)), s;
              )try{
                if(r=1, n&&(o=2&i[
                  0
                ]
                ?n.return:i[
                  0
                ]
                ?n.throw||((o=n.return)&&o.call(n), 0):n.next)&&!(o=o.call(n, i[
                  1
                ])).done)return o;
                switch(n=0, o&&(i=[
                  2&i[
                    0
                  ], o.value
                ]), i[
                  0
                ]){
                  case 0:case 1:o=i;
                  break;
                  case 4:return s.label++, {
                    value:i[
                      1
                    ], done:!1
                  };
                  case 5:s.label++, n=i[
                    1
                  ], i=[
                    0
                  ];
                  continue;
                  case 7:i=s.ops.pop(), s.trys.pop();
                  continue;
                  default:if(!(o=s.trys, (o=o.length>0&&o[
                    o.length-1
                  ])||6!==i[
                    0
                  ]
                  &&2!==i[
                    0
                  ])){
                    s=0;
                    continue
                  }
                  if(3===i[
                    0
                  ]
                  &&(!o||i[
                    1
                  ]
                  >o[
                    0
                  ]
                  &&i[
                    1
                  ]
                  <o[
                    3
                  ])){
                    s.label=i[
                      1
                    ];
                    break
                  }
                  if(6===i[
                    0
                  ]
                  &&s.label<o[
                    1
                  ]){
                    s.label=o[
                      1
                    ], o=i;
                    break
                  }
                  if(o&&s.label<o[
                    2
                  ]){
                    s.label=o[
                      2
                    ], s.ops.push(i);
                    break
                  }
                  o[
                    2
                  ]
                  &&s.ops.pop(), s.trys.pop();
                  continue
                }
                i=t.call(e, s)
              }
              catch(e){
                i=[
                  6, e
                ], n=0
              }
              finally{
                r=o=0
              }
              if(5&i[
                0
              ])throw i[
                1
              ];
              return{
                value:i[
                  0
                ]
                ?i[
                  1
                ]
                :void 0, done:!0
              }
            }
            ([
              i, c
            ])
          }
        }
      };
      const be=(0, s.pM)({
        name:"add-score-item", props:{
          value:{
            type:Boolean
          }, scoreItem:{
            type:Object
          }, scoreItemGroups:{
            type:Array
          }, courseId:{
            type:Number
          }
        }, components:{
          DatePickerExt:k.default
        }, setup:function(e, t){
          var r=this, n=(0, x.hRP)(e, "value", t.emit, {
            eventName:"input"
          }), o=(0, s.EW)((function(){
            var t, r, n, o, a;
            return{
              name:(null===(t=e.scoreItem)||void 0===t?void 0:t.name)||"", scored:(null===(r=e.scoreItem)||void 0===r?void 0:r.scored)||!0, groupId:(null===(n=e.scoreItem)||void 0===n?void 0:n.groupId)||(e.scoreItemGroups?e.scoreItemGroups[
                0
              ].id:0), announceScoreType:(null===(o=e.scoreItem)||void 0===o?void 0:o.announceScoreType)||"immediate_announce", announceScoreTime:(null===(a=e.scoreItem)||void 0===a?void 0:a.announceScoreTime)||C().toISOString()
            }
          })), i=(0, s.EW)((function(){
            return void 0!==e.scoreItem
          })), u=(0, s.KR)(he({
          }, o.value)), d=(0, s.EW)((function(){
            var t;
            return!!i.value&&!!(null===(t=e.scoreItem)||void 0===t?void 0:t.externalCode)
          }));
          return{
            show:n, formData:u, onChangeAnnounceScore:function(e){
              u.value.announceScoreTime="no_announce"===e?null:C().toISOString()
            }, ok:function(){
              return _e(r, void 0, void 0, (function(){
                return ge(this, (function(o){
                  switch(o.label){
                    case 0:return i.value?[
                      4, _e(r, void 0, void 0, (function(){
                        var r, n;
                        return ge(this, (function(o){
                          switch(o.label){
                            case 0:return o.trys.push([
                              0, 2, , 3
                            ]), [
                              4, (0, l.np)((null===(n=e.scoreItem)||void 0===n?void 0:n.id)||0, u.value)
                            ];
                            case 1:return r=o.sent(), t.emit("afterUpdateScoreItem"), c.Toast.success(r.message), [
                              3, 3
                            ];
                            case 2:return o.sent(), c.Toast.error(a.default.t("save_error")), [
                              3, 3
                            ];
                            case 3:return[
                              2
                            ]
                          }
                        }))
                      }))
                    ]
                    :[
                      3, 2
                    ];
                    case 1:return o.sent(), [
                      3, 4
                    ];
                    case 2:return[
                      4, _e(r, void 0, void 0, (function(){
                        var r;
                        return ge(this, (function(n){
                          switch(n.label){
                            case 0:return n.trys.push([
                              0, 2, , 3
                            ]), [
                              4, (0, l.AW)(e.courseId||0, u.value)
                            ];
                            case 1:return r=n.sent(), t.emit("afterCreateScoreItem", {
                              groupId:u.value.groupId
                            }), c.Toast.success(r.message), [
                              3, 3
                            ];
                            case 2:return n.sent(), c.Toast.error(a.default.t("save_error")), [
                              3, 3
                            ];
                            case 3:return[
                              2
                            ]
                          }
                        }))
                      }))
                    ];
                    case 3:o.sent(), o.label=4;
                    case 4:return n.value=!1, window.location.reload(), [
                      2
                    ]
                  }
                }))
              }))
            }, cancel:function(){
              n.value=!1
            }, visibleChangeHandler:function(e){
              e&&(u.value=he({
              }, o.value))
            }, isUpdate:i, hasExternalCode:d
          }
        }
      });
      const ye=(0, f.A)(be, (function(){
        var e=this, t=e.$createElement, r=e._self._c||t;
        return r("Modal", {
          ref:"modal", staticClass:"add-score-item", attrs:{
            width:"700", title:e.isUpdate?e.$t("courseScore.scoreItemGroup.editOne"):e.$t("courseScore.scoreItemGroup.addOne")
          }, on:{
            "on-visible-change":e.visibleChangeHandler
          }, model:{
            value:e.show, callback:function(t){
              e.show=t
            }, expression:"show"
          }
        }, [
          r("div", {
            staticClass:"setting-tip"
          }, [
            r("i", {
              staticClass:"font font-info"
            }), e._v(" "), r("span", [
              e._v(e._s(e.$t("courseScore.scoreItemGroup.addOneTip")))
            ])
          ]), e._v(" "), r("Form", {
            staticClass:"add-score-item-form-area", attrs:{
              model:e.formData, "label-position":"left", "label-width":120
            }
          }, [
            r("FormItem", {
              staticClass:"no-margin-bottom score-item-name", attrs:{
                label:e.$t("courseScore.scoreItemGroup.scoreItemName"), required:"", props:"name"
              }
            }, [
              r("Input", {
                staticClass:"name", attrs:{
                  placeholder:e.$t("vtrs.userIndex.pleaseInput"), disabled:e.hasExternalCode
                }, model:{
                  value:e.formData.name, callback:function(t){
                    e.$set(e.formData, "name", t)
                  }, expression:"formData.name"
                }
              })
            ], 1), e._v(" "), r("FormItem", {
              staticClass:"no-margin-bottom select-score-group", attrs:{
                label:e.$t("courseScore.scoreItemGroup.scoreGroupName"), required:"", props:"groupId"
              }
            }, [
              r("Select", {
                attrs:{
                  transfer:""
                }, model:{
                  value:e.formData.groupId, callback:function(t){
                    e.$set(e.formData, "groupId", t)
                  }, expression:"formData.groupId"
                }
              }, e._l(e.scoreItemGroups, (function(e){
                return r("Option", {
                  key:e.id, attrs:{
                    value:e.id, label:e.name
                  }
                })
              })), 1)
            ], 1), e._v(" "), r("FormItem", {
              attrs:{
                label:e.$t("homework.publishScore"), props:"announceScoreType"
              }
            }, [
              r("RadioGroup", {
                on:{
                  "on-change":e.onChangeAnnounceScore
                }, model:{
                  value:e.formData.announceScoreType, callback:function(t){
                    e.$set(e.formData, "announceScoreType", t)
                  }, expression:"formData.announceScoreType"
                }
              }, [
                r("Radio", {
                  attrs:{
                    label:"immediate_announce"
                  }
                }, [
                  e._v(e._s(e.$t("homework.publishNow")))
                ]), e._v(" "), r("Radio", {
                  attrs:{
                    label:"no_announce"
                  }
                }, [
                  e._v(e._s(e.$t("homework.willNotPublish")))
                ]), e._v(" "), r("Radio", {
                  attrs:{
                    label:"timed_announce"
                  }
                }, [
                  e._v(e._s(e.$t("homework.customPublishScoreTime")))
                ])
              ], 1), e._v(" "), "timed_announce"===e.formData.announceScoreType?r("div", [
                r("DatePickerExt", {
                  staticStyle:{
                    width:"175px"
                  }, attrs:{
                    type:"datetime", format:"yyyy-MM-dd HH:mm", clearable:!1, transfer:!0
                  }, model:{
                    value:e.formData.announceScoreTime, callback:function(t){
                      e.$set(e.formData, "announceScoreTime", t)
                    }, expression:"formData.announceScoreTime"
                  }
                })
              ], 1):e._e()
            ], 1)
          ], 1), e._v(" "), r("div", {
            staticClass:"modal-footer", attrs:{
              slot:"footer"
            }, slot:"footer"
          }, [
            r("Button", {
              attrs:{
                type:"primary"
              }, on:{
                click:e.ok
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
          ], 1)
        ], 1)
      }), [
      ], !1, null, "9ae5b846", null).exports;
      r(714913), r(335231);
      var Se=r(818183), we=r(218831), Ie=r(769075), xe=r(209624);
      const Ce=(0, s.pM)({
        name:"score-filter", props:{
          position:{
            type:Object, default:function(){
              return{
                top:"0", left:"0"
              }
            }
          }, scoreItem:{
            type:Object, required:!0
          }
        }, directives:{
          TransferDom:xe.A
        }, components:{
        }, setup:function(e, t){
          var r=(0, s.KR)({
            scoreState:"all", scoreLowLimit:0, scoreUpperLimit:0
          }), n=function(){
            t.emit("close")
          }, o=(0, s.EW)((function(){
            return"all"===r.value.scoreState&&0===r.value.scoreLowLimit&&0===r.value.scoreUpperLimit
          })), a=function(){
            t.emit("set-score-filters", !o.value)
          }, i=(0, s.EW)((function(){
            var t="item-".concat(e.scoreItem.id, "-score");
            return[
              "raw_score", "total_score"
            ].includes(e.scoreItem.type)?t=e.scoreItem.type:"group"===e.scoreItem.type&&(t="group-".concat(e.scoreItem.id, "-score")), t
          }));
          return{
            condition:r, close:n, reset:function(){
              o.value||(r.value={
                scoreState:"all", scoreLowLimit:0, scoreUpperLimit:0
              }, t.emit("set-score-filters", !o.value), ve.A.$emit("send-score-filter", {
                key:i.value, value:void 0
              }))
            }, ok:function(){
              "all"!==r.value.scoreState?o.value||(ve.A.$emit("send-score-filter", {
                key:i.value, value:r.value
              }), n()):n()
            }, disabled:o, filterChange:a, formatter:function(e){
              return 0===e?"":e
            }, parser:function(e){
              return""===e?0:e
            }, filterStateChange:function(e){
              [
                "all", "unscored"
              ].includes(e)&&(r.value.scoreLowLimit=0, r.value.scoreUpperLimit=0), a(), "all"===e&&ve.A.$emit("send-score-filter", {
                key:i.value, value:void 0
              })
            }
          }
        }
      });
      const ke=(0, f.A)(Ce, (function(){
        var e=this, t=e.$createElement, r=e._self._c||t;
        return r("div", {
          directives:[
            {
              name:"transfer-dom", rawName:"v-transfer-dom"
            }, {
              name:"click-outside-el", rawName:"v-click-outside-el", value:e.close, expression:"close"
            }
          ], staticClass:"score-filter", style:{
            top:e.position.top, left:e.position.left
          }, attrs:{
            "data-transfer":!0
          }
        }, [
          r("div", {
            staticClass:"score-filter-container"
          }, [
            r("div", {
              staticClass:"score-state-filter"
            }, [
              r("div", {
                staticClass:"score-filter-left"
              }, [
                e._v(e._s(e.$t("vtrs.table.status")))
              ]), e._v(" "), r("div", {
                staticClass:"score-filter-right"
              }, [
                r("RadioGroup", {
                  attrs:{
                    vertical:""
                  }, on:{
                    "on-change":e.filterStateChange
                  }, model:{
                    value:e.condition.scoreState, callback:function(t){
                      e.$set(e.condition, "scoreState", t)
                    }, expression:"condition.scoreState"
                  }
                }, [
                  r("Radio", {
                    attrs:{
                      label:"all"
                    }
                  }, [
                    r("span", [
                      e._v(e._s(e.$t("courseScore.scoreItemGroup.state.all")))
                    ])
                  ]), e._v(" "), r("Radio", {
                    attrs:{
                      label:"scored"
                    }
                  }, [
                    r("span", [
                      e._v(e._s(e.$t("courseScore.scoreItemGroup.state.scored")))
                    ])
                  ]), e._v(" "), r("Radio", {
                    attrs:{
                      label:"unscored"
                    }
                  }, [
                    r("span", [
                      e._v(e._s(e.$t("courseScore.scoreItemGroup.state.unscored")))
                    ])
                  ])
                ], 1)
              ], 1)
            ]), e._v(" "), r("div", {
              staticClass:"score-filter-divider"
            }), e._v(" "), r("div", {
              staticClass:"score-range-filter"
            }, [
              r("div", {
                staticClass:"score-filter-left"
              }, [
                e._v(e._s(e.$t("courseScore.scoreItemGroup.scoreRange")))
              ]), e._v(" "), r("div", {
                staticClass:"score-filter-right"
              }, [
                r("InputNumber", {
                  attrs:{
                    step:1, precision:1, min:.1, max:100, formatter:e.formatter, parser:e.parser, "active-change":!1, disabled:[
                      "all", "unscored"
                    ].includes(e.condition.scoreState)
                  }, on:{
                    "on-change":e.filterChange
                  }, model:{
                    value:e.condition.scoreLowLimit, callback:function(t){
                      e.$set(e.condition, "scoreLowLimit", t)
                    }, expression:"condition.scoreLowLimit"
                  }
                }), e._v(" "), r("span", [
                  e._v(e._s(e.$t("courseScore.scoreItemGroup.to")))
                ]), e._v(" "), r("InputNumber", {
                  attrs:{
                    step:1, precision:1, min:e.condition.scoreLowLimit, max:100, formatter:e.formatter, parser:e.parser, "active-change":!1, disabled:[
                      "all", "unscored"
                    ].includes(e.condition.scoreState)
                  }, on:{
                    "on-change":e.filterChange
                  }, model:{
                    value:e.condition.scoreUpperLimit, callback:function(t){
                      e.$set(e.condition, "scoreUpperLimit", t)
                    }, expression:"condition.scoreUpperLimit"
                  }
                })
              ], 1)
            ])
          ]), e._v(" "), r("div", {
            staticClass:"score-filter-footer"
          }, [
            r("div", {
              staticClass:"score-filter-button score-filter-reset", class:{
                disabled:e.disabled
              }, on:{
                click:e.reset
              }
            }, [
              e._v("\n      "+e._s(e.$t("courseScore.scoreItemGroup.reset"))+"\n    ")
            ]), e._v(" "), r("div", {
              staticClass:"score-filter-button score-filter-ok", class:{
                disabled:e.disabled&&"all"!==e.condition.scoreState
              }, on:{
                click:e.ok
              }
            }, [
              e._v("\n      "+e._s(e.$t("ok"))+"\n    ")
            ])
          ])
        ])
      }), [
      ], !1, null, "60abffd0", null).exports;
      var Ae=function(e, t, r, n){
        return new(r||(r=Promise))((function(o, a){
          function s(e){
            try{
              c(n.next(e))
            }
            catch(e){
              a(e)
            }
          }
          function i(e){
            try{
              c(n.throw(e))
            }
            catch(e){
              a(e)
            }
          }
          function c(e){
            var t;
            e.done?o(e.value):(t=e.value, t instanceof r?t:new r((function(e){
              e(t)
            }))).then(s, i)
          }
          c((n=n.apply(e, t||[
          ])).next())
        }))
      }, $e=function(e, t){
        var r, n, o, a, s={
          label:0, sent:function(){
            if(1&o[
              0
            ])throw o[
              1
            ];
            return o[
              1
            ]
          }, trys:[
          ], ops:[
          ]
        };
        return a={
          next:i(0), throw:i(1), return:i(2)
        }, "function"==typeof Symbol&&(a[
          Symbol.iterator
        ]
        =function(){
          return this
        }), a;
        function i(i){
          return function(c){
            return function(i){
              if(r)throw new TypeError("Generator is already executing.");
              for(;
              a&&(a=0, i[
                0
              ]
              &&(s=0)), s;
              )try{
                if(r=1, n&&(o=2&i[
                  0
                ]
                ?n.return:i[
                  0
                ]
                ?n.throw||((o=n.return)&&o.call(n), 0):n.next)&&!(o=o.call(n, i[
                  1
                ])).done)return o;
                switch(n=0, o&&(i=[
                  2&i[
                    0
                  ], o.value
                ]), i[
                  0
                ]){
                  case 0:case 1:o=i;
                  break;
                  case 4:return s.label++, {
                    value:i[
                      1
                    ], done:!1
                  };
                  case 5:s.label++, n=i[
                    1
                  ], i=[
                    0
                  ];
                  continue;
                  case 7:i=s.ops.pop(), s.trys.pop();
                  continue;
                  default:if(!(o=s.trys, (o=o.length>0&&o[
                    o.length-1
                  ])||6!==i[
                    0
                  ]
                  &&2!==i[
                    0
                  ])){
                    s=0;
                    continue
                  }
                  if(3===i[
                    0
                  ]
                  &&(!o||i[
                    1
                  ]
                  >o[
                    0
                  ]
                  &&i[
                    1
                  ]
                  <o[
                    3
                  ])){
                    s.label=i[
                      1
                    ];
                    break
                  }
                  if(6===i[
                    0
                  ]
                  &&s.label<o[
                    1
                  ]){
                    s.label=o[
                      1
                    ], o=i;
                    break
                  }
                  if(o&&s.label<o[
                    2
                  ]){
                    s.label=o[
                      2
                    ], s.ops.push(i);
                    break
                  }
                  o[
                    2
                  ]
                  &&s.ops.pop(), s.trys.pop();
                  continue
                }
                i=t.call(e, s)
              }
              catch(e){
                i=[
                  6, e
                ], n=0
              }
              finally{
                r=o=0
              }
              if(5&i[
                0
              ])throw i[
                1
              ];
              return{
                value:i[
                  0
                ]
                ?i[
                  1
                ]
                :void 0, done:!0
              }
            }
            ([
              i, c
            ])
          }
        }
      };
      const Ge=(0, s.pM)({
        name:"score-item-option", props:{
          scoreItem:{
            type:Object, required:!0
          }, scoreItemGroups:{
            type:Array, required:!0
          }, scoreStatus:{
            type:String
          }
        }, components:{
          EditScoreItem:ye, Confirm:Ie.A, ScoreFilter:ke, SvgIcon:u.A
        }, setup:function(e, t){
          var r, n, o=this, i=(0, s.KR)(!1), c=(0, s.nI)(), u=(0, s.KR)(!1), d=(0, s.KR)(!1), p=(0, s.KR)({
            top:"0", left:"0"
          }), v=(null===(n=null===(r=window.globalData)||void 0===r?void 0:r.course)||void 0===n?void 0:n.isSimulatingInstructor)||!1, f=(0, s.EW)((function(){
            return d.value?a.default.t("courseScore.scoreItemGroup.hasFilter"):a.default.t("courseScore.scoreItemGroup.filter")
          }));
          return{
            visible:i, selectOption:function(t, r){
              return Ae(o, void 0, void 0, (function(){
                var r, n, o;
                return $e(this, (function(s){
                  switch(s.label){
                    case 0:return"edit"!==t?[
                      3, 1
                    ]
                    :(i.value=!0, [
                      3, 6
                    ]);
                    case 1:return"delete"!==t?[
                      3, 5
                    ]
                    :[
                      4, Ie.A.open({
                        type:"warning", title:a.default.t("courseScore.scoreItemGroup.deleteOne"), content:"".concat(a.default.t("courseScore.scoreItemGroup.deleteScoreItemConfirm"), "“").concat(e.scoreItem.name, "”?"), width:416, verticalCenter:!1
                      })
                    ];
                    case 2:return s.sent()?[
                      4, (0, l.fK)(e.scoreItem.id)
                    ]
                    :[
                      3, 4
                    ];
                    case 3:s.sent(), Se.A.success(a.default.t("delete_success")), window.location.reload(), s.label=4;
                    case 4:return[
                      3, 6
                    ];
                    case 5:r=null===(o=null==c?void 0:c.proxy)||void 0===o?void 0:o.$el, n=r.getBoundingClientRect(), p.value={
                      top:"".concat(n.bottom+window.scrollY, "px"), left:"".concat(n.left+window.scrollX-290, "px")
                    }, u.value=!0, s.label=6;
                    case 6:return[
                      2
                    ]
                  }
                }))
              }))
            }, showFilter:u, filterPosition:p, handleScoreFilters:function(e){
              d.value=e
            }, hasScoreFilter:d, filterLabel:f, isSimulatingInstructor:v
          }
        }
      });
      const De=(0, f.A)(Ge, (function(){
        var e=this, t=e.$createElement, r=e._self._c||t;
        return r("div", {
          staticClass:"score-item-option", class:{
            "has-filter":e.hasScoreFilter
          }
        }, [
          "custom"!==e.scoreItem.type||e.isSimulatingInstructor?r("div", {
            staticClass:"other-filter-icon"
          }, [
            r("SvgIcon", {
              staticClass:"new-filter-icon", class:{
                "has-filter":e.hasScoreFilter
              }, attrs:{
                name:"new-filter"
              }, nativeOn:{
                click:function(t){
                  return r=t, e.selectOption("filter", r);
                  var r
                }
              }
            })
          ], 1):r("div", [
            r("Dropdown", {
              attrs:{
                transfer:"", "transfer-class-name":"score-item-option-container"
              }, on:{
                "on-click":function(t, r){
                  return e.selectOption(t, r)
                }
              }, scopedSlots:e._u([
                {
                  key:"list", fn:function(){
                    return[
                      r("DropdownMenu", [
                        r("DropdownItem", {
                          class:{
                            "has-filter":e.hasScoreFilter
                          }, attrs:{
                            name:"filter"
                          }
                        }, [
                          e._v(e._s(e.filterLabel))
                        ]), e._v(" "), "submitted"!==e.scoreStatus?r("DropdownItem", {
                          attrs:{
                            name:"edit"
                          }
                        }, [
                          e._v("\n            "+e._s(e.$t("edit"))+"\n          ")
                        ]):e._e(), e._v(" "), "submitted"===e.scoreStatus||e.scoreItem.externalCode?e._e():r("DropdownItem", {
                          attrs:{
                            name:"delete"
                          }
                        }, [
                          e._v("\n            "+e._s(e.$t("delete"))+"\n          ")
                        ])
                      ], 1)
                    ]
                  }, proxy:!0
                }
              ], null, !1, 2615472871)
            }, [
              r("div", {
                staticClass:"dropdown-header"
              }, [
                r("i", {
                  staticClass:"font font-ellipsis", class:{
                    "has-filter":e.hasScoreFilter
                  }
                })
              ])
            ])
          ], 1), e._v(" "), "custom"===e.scoreItem.type?r("EditScoreItem", {
            attrs:{
              "score-item-groups":e.scoreItemGroups, "score-item":e.scoreItem
            }, model:{
              value:e.visible, callback:function(t){
                e.visible=t
              }, expression:"visible"
            }
          }):e._e(), e._v(" "), r("ScoreFilter", {
            directives:[
              {
                name:"show", rawName:"v-show", value:e.showFilter, expression:"showFilter"
              }
            ], attrs:{
              position:e.filterPosition, "score-item":e.scoreItem
            }, on:{
              close:function(t){
                e.showFilter=!1
              }, "set-score-filters":e.handleScoreFilters
            }
          })
        ], 1)
      }), [
      ], !1, null, "2c3bcd05", null).exports;
      var Te=function(e, t, r, n){
        return new(r||(r=Promise))((function(o, a){
          function s(e){
            try{
              c(n.next(e))
            }
            catch(e){
              a(e)
            }
          }
          function i(e){
            try{
              c(n.throw(e))
            }
            catch(e){
              a(e)
            }
          }
          function c(e){
            var t;
            e.done?o(e.value):(t=e.value, t instanceof r?t:new r((function(e){
              e(t)
            }))).then(s, i)
          }
          c((n=n.apply(e, t||[
          ])).next())
        }))
      }, Ee=function(e, t){
        var r, n, o, a, s={
          label:0, sent:function(){
            if(1&o[
              0
            ])throw o[
              1
            ];
            return o[
              1
            ]
          }, trys:[
          ], ops:[
          ]
        };
        return a={
          next:i(0), throw:i(1), return:i(2)
        }, "function"==typeof Symbol&&(a[
          Symbol.iterator
        ]
        =function(){
          return this
        }), a;
        function i(i){
          return function(c){
            return function(i){
              if(r)throw new TypeError("Generator is already executing.");
              for(;
              a&&(a=0, i[
                0
              ]
              &&(s=0)), s;
              )try{
                if(r=1, n&&(o=2&i[
                  0
                ]
                ?n.return:i[
                  0
                ]
                ?n.throw||((o=n.return)&&o.call(n), 0):n.next)&&!(o=o.call(n, i[
                  1
                ])).done)return o;
                switch(n=0, o&&(i=[
                  2&i[
                    0
                  ], o.value
                ]), i[
                  0
                ]){
                  case 0:case 1:o=i;
                  break;
                  case 4:return s.label++, {
                    value:i[
                      1
                    ], done:!1
                  };
                  case 5:s.label++, n=i[
                    1
                  ], i=[
                    0
                  ];
                  continue;
                  case 7:i=s.ops.pop(), s.trys.pop();
                  continue;
                  default:if(!(o=s.trys, (o=o.length>0&&o[
                    o.length-1
                  ])||6!==i[
                    0
                  ]
                  &&2!==i[
                    0
                  ])){
                    s=0;
                    continue
                  }
                  if(3===i[
                    0
                  ]
                  &&(!o||i[
                    1
                  ]
                  >o[
                    0
                  ]
                  &&i[
                    1
                  ]
                  <o[
                    3
                  ])){
                    s.label=i[
                      1
                    ];
                    break
                  }
                  if(6===i[
                    0
                  ]
                  &&s.label<o[
                    1
                  ]){
                    s.label=o[
                      1
                    ], o=i;
                    break
                  }
                  if(o&&s.label<o[
                    2
                  ]){
                    s.label=o[
                      2
                    ], s.ops.push(i);
                    break
                  }
                  o[
                    2
                  ]
                  &&s.ops.pop(), s.trys.pop();
                  continue
                }
                i=t.call(e, s)
              }
              catch(e){
                i=[
                  6, e
                ], n=0
              }
              finally{
                r=o=0
              }
              if(5&i[
                0
              ])throw i[
                1
              ];
              return{
                value:i[
                  0
                ]
                ?i[
                  1
                ]
                :void 0, done:!0
              }
            }
            ([
              i, c
            ])
          }
        }
      };
      const Pe=(0, s.pM)({
        name:"score-log-dropdown", components:{
          TooltipExt:i.A
        }, directives:{
          TransferDom:xe.A
        }, props:{
          items:{
            type:Array, required:!0
          }
        }, setup:function(e){
          var t, r=this, n=null===(t=document.documentElement.getAttribute("lang"))||void 0===t?void 0:t.startsWith("en"), o=n?285:240, a=o/2, i=(0, s.KR)(!1), c=(0, s.KR)(null), u=(0, s.KR)(null), l=(0, s.KR)("top"), d=(0, s.KR)(), p=function(e){
            c.value&&u.value&&(u.value.contains(e.target)||c.value.contains(e.target)||(i.value=!1))
          };
          (0, s.sV)((function(){
            document.addEventListener("click", p, !0)
          })), (0, s.xo)((function(){
            document.removeEventListener("click", p, !0)
          }));
          var v=(0, s.EW)((function(){
            return"top"===l.value?"top":"bottom"
          }));
          return{
            isExpanded:i, toggleDropdown:function(){
              return Te(r, void 0, void 0, (function(){
                var e, t, r, n, p, v, f, m, h, _, g;
                return Ee(this, (function(b){
                  switch(b.label){
                    case 0:return i.value?(i.value=!1, [
                      2
                    ]):c.value&&u.value?[
                      4, (0, s.dY)()
                    ]
                    :[
                      2
                    ];
                    case 1:return b.sent(), e=c.value, t=u.value, r=e.getBoundingClientRect(), n=r.top, p=r.left, v=r.height, f=r.width, m=window.innerHeight, [
                      4, (0, s.dY)()
                    ];
                    case 2:return b.sent(), h=t.offsetHeight, _="top", g=n+v+10, m-n-v/2-100<h&&(_="bottom", g=n-h-10), l.value=_, d.value={
                      position:"absolute", top:"".concat(g, "px"), left:"".concat(p+f/2-a, "px"), width:"".concat(o, "px"), background:"white", borderRadius:"3px", boxShadow:"0px 0px 1px rgba(38, 40, 51, 0.24), 0px 4px 20px rgba(38, 40, 51, 0.16)", zIndex:1, transformStyle:"preserve-3d"
                    }, i.value=!0, [
                      2
                    ]
                  }
                }))
              }))
            }, triggerRef:c, menuRef:u, menuStyle:d, arrowClass:v, formatTime:function(e){
              return C(e).format("YYYY-MM-DD HH:mm:ss")
            }, isEnglish:n
          }
        }
      });
      const Re=(0, f.A)(Pe, (function(){
        var e=this, t=e.$createElement, r=e._self._c||t;
        return r("div", {
          directives:[
            {
              name:"show", rawName:"v-show", value:e.items.length>0, expression:"items.length > 0"
            }
          ], staticClass:"score-log-dropdown"
        }, [
          r("div", {
            ref:"triggerRef", staticClass:"clickable-icon", on:{
              click:function(t){
                return t.stopPropagation(), e.toggleDropdown(t)
              }
            }
          }, [
            e._t("default")
          ], 2), e._v(" "), r("div", {
            directives:[
              {
                name:"transfer-dom", rawName:"v-transfer-dom"
              }
            ], ref:"menuRef", class:[
              "dropdown-menu", {
                visible:e.isExpanded
              }
            ], style:e.menuStyle, attrs:{
              "data-transfer":!0
            }, on:{
              click:function(e){
                e.stopPropagation()
              }
            }
          }, [
            r("div", {
              staticClass:"dropdown-arrow", class:e.arrowClass
            }), e._v(" "), r("div", {
              staticClass:"dropdown-title"
            }, [
              e._v(e._s(e.$t("courseScore.finalScoreChangeLog.title")))
            ]), e._v(" "), r("div", {
              staticClass:"dropdown-items"
            }, e._l(e.items, (function(t, n){
              return r("div", {
                key:n, staticClass:"dropdown-item"
              }, [
                r("div", {
                  staticClass:"dropdown-time"
                }, [
                  e._v(e._s(e.formatTime(t.scoredAt)))
                ]), e._v(" "), r("div", {
                  staticClass:"dropdown-info"
                }, [
                  r("TooltipExt", {
                    staticClass:"scored-by", attrs:{
                      text:t.scoredBy
                    }
                  }), e._v(" "), t.deleteFinalScore?e._e():r("span", {
                    staticClass:"change-to"
                  }, [
                    e._v("\n            "+e._s(e.$t("courseScore.finalScoreChangeLog.changeTo"))+"\n          ")
                  ]), e._v(" "), r("span", {
                    staticClass:"score-text"
                  }, [
                    e._v("\n            "+e._s(t.deleteFinalScore?e.$t("courseScore.finalScoreChangeLog.clearScore"):Number(t.score)+(e.isEnglish?" ":"")+e.$t("courseScore.finalScoreChangeLog.points"))+"\n          ")
                  ])
                ], 1)
              ])
            })), 0)
          ])
        ])
      }), [
      ], !1, null, "2606f8b2", null).exports;
      var Me=r(272505), Ne=r.n(Me), Le=function(e, t, r, n){
        return new(r||(r=Promise))((function(o, a){
          function s(e){
            try{
              c(n.next(e))
            }
            catch(e){
              a(e)
            }
          }
          function i(e){
            try{
              c(n.throw(e))
            }
            catch(e){
              a(e)
            }
          }
          function c(e){
            var t;
            e.done?o(e.value):(t=e.value, t instanceof r?t:new r((function(e){
              e(t)
            }))).then(s, i)
          }
          c((n=n.apply(e, t||[
          ])).next())
        }))
      }, Oe=function(e, t){
        var r, n, o, a, s={
          label:0, sent:function(){
            if(1&o[
              0
            ])throw o[
              1
            ];
            return o[
              1
            ]
          }, trys:[
          ], ops:[
          ]
        };
        return a={
          next:i(0), throw:i(1), return:i(2)
        }, "function"==typeof Symbol&&(a[
          Symbol.iterator
        ]
        =function(){
          return this
        }), a;
        function i(i){
          return function(c){
            return function(i){
              if(r)throw new TypeError("Generator is already executing.");
              for(;
              a&&(a=0, i[
                0
              ]
              &&(s=0)), s;
              )try{
                if(r=1, n&&(o=2&i[
                  0
                ]
                ?n.return:i[
                  0
                ]
                ?n.throw||((o=n.return)&&o.call(n), 0):n.next)&&!(o=o.call(n, i[
                  1
                ])).done)return o;
                switch(n=0, o&&(i=[
                  2&i[
                    0
                  ], o.value
                ]), i[
                  0
                ]){
                  case 0:case 1:o=i;
                  break;
                  case 4:return s.label++, {
                    value:i[
                      1
                    ], done:!1
                  };
                  case 5:s.label++, n=i[
                    1
                  ], i=[
                    0
                  ];
                  continue;
                  case 7:i=s.ops.pop(), s.trys.pop();
                  continue;
                  default:if(!(o=s.trys, (o=o.length>0&&o[
                    o.length-1
                  ])||6!==i[
                    0
                  ]
                  &&2!==i[
                    0
                  ])){
                    s=0;
                    continue
                  }
                  if(3===i[
                    0
                  ]
                  &&(!o||i[
                    1
                  ]
                  >o[
                    0
                  ]
                  &&i[
                    1
                  ]
                  <o[
                    3
                  ])){
                    s.label=i[
                      1
                    ];
                    break
                  }
                  if(6===i[
                    0
                  ]
                  &&s.label<o[
                    1
                  ]){
                    s.label=o[
                      1
                    ], o=i;
                    break
                  }
                  if(o&&s.label<o[
                    2
                  ]){
                    s.label=o[
                      2
                    ], s.ops.push(i);
                    break
                  }
                  o[
                    2
                  ]
                  &&s.ops.pop(), s.trys.pop();
                  continue
                }
                i=t.call(e, s)
              }
              catch(e){
                i=[
                  6, e
                ], n=0
              }
              finally{
                r=o=0
              }
              if(5&i[
                0
              ])throw i[
                1
              ];
              return{
                value:i[
                  0
                ]
                ?i[
                  1
                ]
                :void 0, done:!0
              }
            }
            ([
              i, c
            ])
          }
        }
      }, Be=function(e){
        return Le(void 0, void 0, void 0, (function(){
          return Oe(this, (function(t){
            switch(t.label){
              case 0:return"id,name,department(name),grade(name),klass(name),created_user(id),subject_code,imported_from", [
                4, Ne().get("/api/courses/".concat(e), {
                  params:{
                    fields:"id,name,department(name),grade(name),klass(name),created_user(id),subject_code,imported_from"
                  }
                })
              ];
              case 1:return[
                2, t.sent().data
              ]
            }
          }))
        }))
      }, We=function(e){
        return Le(void 0, void 0, void 0, (function(){
          var t;
          return Oe(this, (function(r){
            switch(r.label){
              case 0:return t="/api/courses/".concat(e, "/score-status"), [
                4, Ne().get(t)
              ];
              case 1:return[
                2, r.sent().data
              ]
            }
          }))
        }))
      }, ze=function(e){
        return Le(void 0, void 0, void 0, (function(){
          var t;
          return Oe(this, (function(r){
            switch(r.label){
              case 0:return t="/api/courses/".concat(e, "/score-type-settings"), [
                4, Ne().get(t)
              ];
              case 1:return[
                2, r.sent().data
              ]
            }
          }))
        }))
      }, Fe=function(e){
        return Le(void 0, void 0, void 0, (function(){
          var t;
          return Oe(this, (function(r){
            switch(r.label){
              case 0:return"id,title,data,start_time,end_time,is_announce_score_time_passed,score_percentage,created_at,published,module_sort,syllabus_sort,sort,has_assign_student,assign_student_ids,publish_type,is_in_progress", t="/api/course/".concat(e, "/homework-scores"), [
                4, Ne().get(t, {
                  params:{
                    fields:"id,title,data,start_time,end_time,is_announce_score_time_passed,score_percentage,created_at,published,module_sort,syllabus_sort,sort,has_assign_student,assign_student_ids,publish_type,is_in_progress"
                  }
                })
              ];
              case 1:return[
                2, r.sent().data
              ]
            }
          }))
        }))
      }, Ke=function(e){
        return Le(void 0, void 0, void 0, (function(){
          var t;
          return Oe(this, (function(r){
            switch(r.label){
              case 0:return t="/api/course/".concat(e, "/homework-student-status"), [
                4, Ne().get(t)
              ];
              case 1:return[
                2, r.sent().data
              ]
            }
          }))
        }))
      }, qe=function(e){
        return Le(void 0, void 0, void 0, (function(){
          var t;
          return Oe(this, (function(r){
            switch(r.label){
              case 0:return t="/api/course/".concat(e, "/exam-student-status"), [
                4, Ne().get(t)
              ];
              case 1:return[
                2, r.sent().data
              ]
            }
          }))
        }))
      }, Ve=function(e){
        return Le(void 0, void 0, void 0, (function(){
          var t;
          return Oe(this, (function(r){
            switch(r.label){
              case 0:return t="/api/course/".concat(e, "/classroom-student-status"), [
                4, Ne().get(t)
              ];
              case 1:return[
                2, r.sent().data
              ]
            }
          }))
        }))
      }, Ue=function(e){
        return Le(void 0, void 0, void 0, (function(){
          var t;
          return Oe(this, (function(r){
            switch(r.label){
              case 0:return t="/api/course/".concat(e, "/rollcall/setting"), [
                4, Ne().get(t)
              ];
              case 1:return[
                2, r.sent().data
              ]
            }
          }))
        }))
      }, He=function(e){
        return Le(void 0, void 0, void 0, (function(){
          var t;
          return Oe(this, (function(r){
            switch(r.label){
              case 0:return t="/api/course/".concat(e, "/rollcall/scores"), [
                4, Ne().get(t)
              ];
              case 1:return[
                2, r.sent().data
              ]
            }
          }))
        }))
      }, je=function(e){
        return Le(void 0, void 0, void 0, (function(){
          var t;
          return Oe(this, (function(r){
            switch(r.label){
              case 0:return t="/api/courses/".concat(e, "/custom-score-items"), [
                4, Ne().get(t)
              ];
              case 1:return[
                2, r.sent().data
              ]
            }
          }))
        }))
      }, Ye=function(e, t, r){
        return Le(void 0, void 0, void 0, (function(){
          var n;
          return Oe(this, (function(o){
            switch(o.label){
              case 0:return n="/api/custom-score-items/".concat(e, "/students/").concat(t, "/score"), [
                4, Ne().put(n, {
                  score:r
                })
              ];
              case 1:return[
                2, o.sent().data
              ]
            }
          }))
        }))
      }, Je=function(e){
        return Le(void 0, void 0, void 0, (function(){
          var t;
          return Oe(this, (function(r){
            switch(r.label){
              case 0:return"id,roles,user(id,name,nickname,user_no,comment,grade(id,name),klass(id,name,code),department(id,name,code,stopped),org(id,name),user_attributes(tag)),seat_number,total_score,score_comment,published,instructor_score_time,scored_instructor(name),exceptional_case,original_exceptional_case,data", t="/api/course/".concat(e, "/enrollments"), [
                4, Ne().get(t, {
                  params:{
                    fields:"id,roles,user(id,name,nickname,user_no,comment,grade(id,name),klass(id,name,code),department(id,name,code,stopped),org(id,name),user_attributes(tag)),seat_number,total_score,score_comment,published,instructor_score_time,scored_instructor(name),exceptional_case,original_exceptional_case,data"
                  }
                })
              ];
              case 1:return[
                2, r.sent().data
              ]
            }
          }))
        }))
      }, Qe=function(e){
        return Le(void 0, void 0, void 0, (function(){
          var t;
          return Oe(this, (function(r){
            switch(r.label){
              case 0:return"enrollment_id,total_score,original_total_score,admin_comment", t="/api/course/".concat(e, "/scores"), [
                4, Ne().get(t, {
                  params:{
                    fields:"enrollment_id,total_score,original_total_score,admin_comment"
                  }
                })
              ];
              case 1:return[
                2, r.sent().data
              ]
            }
          }))
        }))
      }, Xe=function(e){
        return Le(void 0, void 0, void 0, (function(){
          var t;
          return Oe(this, (function(r){
            switch(r.label){
              case 0:return t="/api/courses/".concat(e, "/enrollment-raw-score"), [
                4, Ne().get(t)
              ];
              case 1:return[
                2, r.sent().data
              ]
            }
          }))
        }))
      }, Ze=function(e){
        return Le(void 0, void 0, void 0, (function(){
          var t;
          return Oe(this, (function(r){
            switch(r.label){
              case 0:return t="/api/courses/".concat(e, "/score-ranks"), [
                4, Ne().get(t)
              ];
              case 1:return[
                2, r.sent().data
              ]
            }
          }))
        }))
      }, et=function(e, t){
        return Le(void 0, void 0, void 0, (function(){
          var r;
          return Oe(this, (function(n){
            switch(n.label){
              case 0:return r="/api/enrollment/".concat(e, "/exceptional-case"), [
                4, Ne().put(r, (0, we.decamelizeKeys)({
                  exceptionalCase:t
                }))
              ];
              case 1:return[
                2, n.sent().data
              ]
            }
          }))
        }))
      }, tt=function(e, t){
        return Le(void 0, void 0, void 0, (function(){
          var r;
          return Oe(this, (function(n){
            switch(n.label){
              case 0:return r="/api/enrollment/".concat(e, "/total-score"), [
                4, Ne().put(r, (0, we.decamelizeKeys)(t))
              ];
              case 1:return[
                2, n.sent().data
              ]
            }
          }))
        }))
      }, rt=(r(215195), r(678636), {
        homework_activity:"homework", exam_activity:"exam", classroom_exam_activity:"classroom", forum_activity:"forum", questionnaire_activity:"questionnaire", interaction_activity:"interaction", web_link_activity:"web_link", virtual_experiment_activity:"virtual_experiment"
      }), nt=function(e, t, r){
        if(void 0===r&&(r=null), "rollcall_score_setting"===e.type)return null;
        if("online_video_completeness_score_setting"===e.type)return null;
        if("custom"===e.type)return null;
        if("performance_score_setting"===e.type)return null;
        var n=rt[
          e.type
        ];
        return r&&!r.includes(n)?null:P().find(t, {
          type:n, id:e.referrerId
        })
      }, ot=r(756029), at=function(){
        return(at=Object.assign||function(e){
          for(var t, r=1, n=arguments.length;
          r<n;
          r++)for(var o in t=arguments[
            r
          ])Object.prototype.hasOwnProperty.call(t, o)&&(e[
            o
          ]
          =t[
            o
          ]);
          return e
        }).apply(this, arguments)
      }, st=function(e, t, r, n){
        return new(r||(r=Promise))((function(o, a){
          function s(e){
            try{
              c(n.next(e))
            }
            catch(e){
              a(e)
            }
          }
          function i(e){
            try{
              c(n.throw(e))
            }
            catch(e){
              a(e)
            }
          }
          function c(e){
            var t;
            e.done?o(e.value):(t=e.value, t instanceof r?t:new r((function(e){
              e(t)
            }))).then(s, i)
          }
          c((n=n.apply(e, t||[
          ])).next())
        }))
      }, it=function(e, t){
        var r, n, o, a, s={
          label:0, sent:function(){
            if(1&o[
              0
            ])throw o[
              1
            ];
            return o[
              1
            ]
          }, trys:[
          ], ops:[
          ]
        };
        return a={
          next:i(0), throw:i(1), return:i(2)
        }, "function"==typeof Symbol&&(a[
          Symbol.iterator
        ]
        =function(){
          return this
        }), a;
        function i(i){
          return function(c){
            return function(i){
              if(r)throw new TypeError("Generator is already executing.");
              for(;
              a&&(a=0, i[
                0
              ]
              &&(s=0)), s;
              )try{
                if(r=1, n&&(o=2&i[
                  0
                ]
                ?n.return:i[
                  0
                ]
                ?n.throw||((o=n.return)&&o.call(n), 0):n.next)&&!(o=o.call(n, i[
                  1
                ])).done)return o;
                switch(n=0, o&&(i=[
                  2&i[
                    0
                  ], o.value
                ]), i[
                  0
                ]){
                  case 0:case 1:o=i;
                  break;
                  case 4:return s.label++, {
                    value:i[
                      1
                    ], done:!1
                  };
                  case 5:s.label++, n=i[
                    1
                  ], i=[
                    0
                  ];
                  continue;
                  case 7:i=s.ops.pop(), s.trys.pop();
                  continue;
                  default:if(!(o=s.trys, (o=o.length>0&&o[
                    o.length-1
                  ])||6!==i[
                    0
                  ]
                  &&2!==i[
                    0
                  ])){
                    s=0;
                    continue
                  }
                  if(3===i[
                    0
                  ]
                  &&(!o||i[
                    1
                  ]
                  >o[
                    0
                  ]
                  &&i[
                    1
                  ]
                  <o[
                    3
                  ])){
                    s.label=i[
                      1
                    ];
                    break
                  }
                  if(6===i[
                    0
                  ]
                  &&s.label<o[
                    1
                  ]){
                    s.label=o[
                      1
                    ], o=i;
                    break
                  }
                  if(o&&s.label<o[
                    2
                  ]){
                    s.label=o[
                      2
                    ], s.ops.push(i);
                    break
                  }
                  o[
                    2
                  ]
                  &&s.ops.pop(), s.trys.pop();
                  continue
                }
                i=t.call(e, s)
              }
              catch(e){
                i=[
                  6, e
                ], n=0
              }
              finally{
                r=o=0
              }
              if(5&i[
                0
              ])throw i[
                1
              ];
              return{
                value:i[
                  0
                ]
                ?i[
                  1
                ]
                :void 0, done:!0
              }
            }
            ([
              i, c
            ])
          }
        }
      }, ct=(0, s.Kh)({
        loaded:!1, course:null, isAllowPerformanceView:!0, activityStudentStatus:{
        }, condition:{
          score:{
          }, groupScore:{
          }, filters:{
            departmentIds:[
            ], gradeIds:[
            ], classIds:[
            ]
          }
        }, students:[
        ], allStudents:[
        ], members:[
        ], activities:[
        ], percentageData:{
        }, allScoresItem:[
        ], sharedBetweenScopes:{
          students:[
          ], filteredStudents:[
          ]
        }, rollcall:0, performance:0, onlineVideoCompletenessScore:0, classes:[
        ], grades:[
        ], departments:[
        ]
      }), ut=function(e){
        isNaN(e.final_score)||null===e.final_score||(e.score=e.final_score)
      }, lt=function(e){
        return st(void 0, void 0, void 0, (function(){
          var t, r;
          return it(this, (function(n){
            switch(n.label){
              case 0:return t=function(e){
                return Le(void 0, void 0, void 0, (function(){
                  var t;
                  return Oe(this, (function(r){
                    switch(r.label){
                      case 0:return t="/api/courses/".concat(e, "/exams"), [
                        4, Ne().get(t)
                      ];
                      case 1:return[
                        2, r.sent().data
                      ]
                    }
                  }))
                }))
              }
              (e), r=function(e){
                return Le(void 0, void 0, void 0, (function(){
                  var t;
                  return Oe(this, (function(r){
                    switch(r.label){
                      case 0:return t="/api/courses/".concat(e, "/exam-scores?no-intercept=true"), [
                        4, Ne().get(t)
                      ];
                      case 1:return[
                        2, r.sent().data
                      ]
                    }
                  }))
                }))
              }
              (e), [
                4, Promise.all([
                  t, r
                ]).then((function(){
                  for(var e=[
                  ], t=0;
                  t<arguments.length;
                  t++)e[
                    t
                  ]
                  =arguments[
                    t
                  ];
                  var r=Array.from(e[
                    0
                  ]), n=r[
                    0
                  ].exams, o=r[
                    1
                  ].exam_scores;
                  ct.exams=P().each(ot.copy(n), (function(e){
                    return e.type="exam", e.score_published=e.is_announce_score_time_passed, e.url="/course/".concat(ct.courseId, "/learning-activity#/exam/").concat(e.id), e.scores=P().filter(o, {
                      activity_id:e.id
                    }), P().each(e.scores, (function(e){
                      ut(e)
                    }))
                  }))
                }))
              ];
              case 1:return n.sent(), [
                2
              ]
            }
          }))
        }))
      }, dt=function(e){
        return st(void 0, void 0, void 0, (function(){
          var t, r;
          return it(this, (function(n){
            switch(n.label){
              case 0:return t=function(e){
                return Le(void 0, void 0, void 0, (function(){
                  var t;
                  return Oe(this, (function(r){
                    switch(r.label){
                      case 0:return t="/api/courses/".concat(e, "/classroom-list"), [
                        4, Ne().get(t)
                      ];
                      case 1:return[
                        2, r.sent().data
                      ]
                    }
                  }))
                }))
              }
              (e), r=function(e){
                return Le(void 0, void 0, void 0, (function(){
                  var t;
                  return Oe(this, (function(r){
                    switch(r.label){
                      case 0:return t="/api/course/".concat(e, "/classroom-exam-scores"), [
                        4, Ne().get(t)
                      ];
                      case 1:return[
                        2, r.sent().data
                      ]
                    }
                  }))
                }))
              }
              (e), [
                4, Promise.all([
                  t, r
                ]).then((function(){
                  for(var t=[
                  ], r=0;
                  r<arguments.length;
                  r++)t[
                    r
                  ]
                  =arguments[
                    r
                  ];
                  var n=Array.from(t[
                    0
                  ]), o=n[
                    0
                  ].classrooms, a=n[
                    1
                  ].classroom_scores;
                  ct.classrooms=P().filter(o, {
                    type:"classroom"
                  }), ct.classrooms=P().each(ot.copy(ct.classrooms), (function(t){
                    return t.url="/course/".concat(e, "/learning-activity#/classroom/").concat(t.id), t.scores=P().filter(a, {
                      activity_id:t.id
                    }), t.start_time=t.created_at
                  }))
                }))
              ];
              case 1:return n.sent(), [
                2
              ]
            }
          }))
        }))
      }, pt=function(e){
        return st(void 0, void 0, void 0, (function(){
          var t, r;
          return it(this, (function(n){
            switch(n.label){
              case 0:return ct.performanceSetting={
                score_percentage:0
              }, ct.performanceScore=[
              ], t=function(e){
                return Le(void 0, void 0, void 0, (function(){
                  var t;
                  return Oe(this, (function(r){
                    switch(r.label){
                      case 0:return t="/api/course/".concat(e, "/performance/score-percentage"), [
                        4, Ne().get(t)
                      ];
                      case 1:return[
                        2, r.sent().data
                      ]
                    }
                  }))
                }))
              }
              (e), r=function(e){
                return Le(void 0, void 0, void 0, (function(){
                  var t;
                  return Oe(this, (function(r){
                    switch(r.label){
                      case 0:return t="/api/course/".concat(e, "/performance/scores?isOriginalScore=true"), [
                        4, Ne().get(t)
                      ];
                      case 1:return[
                        2, r.sent().data
                      ]
                    }
                  }))
                }))
              }
              (e), [
                4, Promise.all([
                  t, r
                ]).then((function(){
                  for(var e=[
                  ], t=0;
                  t<arguments.length;
                  t++)e[
                    t
                  ]
                  =arguments[
                    t
                  ];
                  var r=Array.from(e[
                    0
                  ]), n=r[
                    0
                  ], o=r[
                    1
                  ].scores;
                  ct.performanceSetting=n, ct.performanceScore=o||[
                  ]
                }))
              ];
              case 1:return n.sent(), [
                2
              ]
            }
          }))
        }))
      }, vt=function(e){
        return st(void 0, void 0, void 0, (function(){
          var t, r;
          return it(this, (function(n){
            switch(n.label){
              case 0:return t=function(e){
                return Le(void 0, void 0, void 0, (function(){
                  var t;
                  return Oe(this, (function(r){
                    switch(r.label){
                      case 0:return t="/api/course/".concat(e, "/virtual-experiments"), [
                        4, Ne().get(t)
                      ];
                      case 1:return[
                        2, r.sent().data
                      ]
                    }
                  }))
                }))
              }
              (e), r=function(e){
                return Le(void 0, void 0, void 0, (function(){
                  var t;
                  return Oe(this, (function(r){
                    switch(r.label){
                      case 0:return t="/api/course/".concat(e, "/virtual-experiment-scores"), [
                        4, Ne().get(t)
                      ];
                      case 1:return[
                        2, r.sent().data
                      ]
                    }
                  }))
                }))
              }
              (e), [
                4, Promise.all([
                  t, r
                ]).then((function(){
                  for(var t=[
                  ], r=0;
                  r<arguments.length;
                  r++)t[
                    r
                  ]
                  =arguments[
                    r
                  ];
                  var n=Array.from(t[
                    0
                  ]), o=n[
                    0
                  ].virtual_experiments, a=n[
                    1
                  ].virtual_experiments_scores;
                  ct.virtualExperimentActivities=P().each(ot.copy(o), (function(t){
                    return t.type="virtual_experiment", t.url="/course/".concat(e, "/learning-activity#/").concat(t.id), t.scores=P().filter(a, {
                      activity_id:t.id
                    }), t.public=t.can_show_score, !0
                  }))
                }))
              ];
              case 1:return n.sent(), [
                2
              ]
            }
          }))
        }))
      }, ft=function(e){
        return st(void 0, void 0, void 0, (function(){
          var t, r;
          return it(this, (function(n){
            switch(n.label){
              case 0:return t=function(e){
                return Le(void 0, void 0, void 0, (function(){
                  var t;
                  return Oe(this, (function(r){
                    switch(r.label){
                      case 0:return t="/api/course/".concat(e, "/forum-activities"), [
                        4, Ne().get(t)
                      ];
                      case 1:return[
                        2, r.sent().data
                      ]
                    }
                  }))
                }))
              }
              (e), r=function(e){
                return Le(void 0, void 0, void 0, (function(){
                  var t;
                  return Oe(this, (function(r){
                    switch(r.label){
                      case 0:return t="/api/course/".concat(e, "/forum-scores"), [
                        4, Ne().get(t)
                      ];
                      case 1:return[
                        2, r.sent().data
                      ]
                    }
                  }))
                }))
              }
              (e), [
                4, Promise.all([
                  t, r
                ]).then((function(){
                  for(var t=[
                  ], r=0;
                  r<arguments.length;
                  r++)t[
                    r
                  ]
                  =arguments[
                    r
                  ];
                  var n=Array.from(t[
                    0
                  ]), o=n[
                    0
                  ].forum_activities, a=n[
                    1
                  ].forum_scores;
                  ct.forumActivities=P().each(ot.copy(o), (function(t){
                    return t.type="forum", t.url="/course/".concat(e, "/learning-activity#/").concat(t.id), t.scores=P().filter(a, {
                      activity_id:t.id
                    }), t.start_time=t.start_time||t.created_at, t.public=t.can_show_score, !0
                  }))
                }))
              ];
              case 1:return n.sent(), [
                2
              ]
            }
          }))
        }))
      }, mt=function(e){
        return st(void 0, void 0, void 0, (function(){
          var t, r;
          return it(this, (function(n){
            switch(n.label){
              case 0:return t=function(e){
                return Le(void 0, void 0, void 0, (function(){
                  var t;
                  return Oe(this, (function(r){
                    switch(r.label){
                      case 0:return t="/api/course/".concat(e, "/web-link-activities"), [
                        4, Ne().get(t)
                      ];
                      case 1:return[
                        2, r.sent().data
                      ]
                    }
                  }))
                }))
              }
              (e), r=function(e){
                return Le(void 0, void 0, void 0, (function(){
                  var t;
                  return Oe(this, (function(r){
                    switch(r.label){
                      case 0:return t="/api/course/".concat(e, "/web-link-scores"), [
                        4, Ne().get(t)
                      ];
                      case 1:return[
                        2, r.sent().data
                      ]
                    }
                  }))
                }))
              }
              (e), [
                4, Promise.all([
                  t, r
                ]).then((function(){
                  for(var t=[
                  ], r=0;
                  r<arguments.length;
                  r++)t[
                    r
                  ]
                  =arguments[
                    r
                  ];
                  var n=Array.from(t[
                    0
                  ]), o=n[
                    0
                  ].web_link_activities, a=n[
                    1
                  ].web_link_scores;
                  ct.weblinkActivities=P().each(ot.copy(o), (function(t){
                    return t.type="web_link", t.url="/course/".concat(e, "/learning-activity#/").concat(t.id), t.scores=P().filter(a, {
                      activity_id:t.id
                    }), t.start_time=t.start_time||t.created_at, t.public=t.can_show_score, !0
                  }))
                }))
              ];
              case 1:return n.sent(), [
                2
              ]
            }
          }))
        }))
      }, ht=function(e){
        return st(void 0, void 0, void 0, (function(){
          var t, r;
          return it(this, (function(n){
            switch(n.label){
              case 0:return t=function(e){
                return Le(void 0, void 0, void 0, (function(){
                  var t;
                  return Oe(this, (function(r){
                    switch(r.label){
                      case 0:return t="/api/course/".concat(e, "/questionnaires"), [
                        4, Ne().get(t)
                      ];
                      case 1:return[
                        2, r.sent().data
                      ]
                    }
                  }))
                }))
              }
              (e), r=function(e){
                return Le(void 0, void 0, void 0, (function(){
                  var t;
                  return Oe(this, (function(r){
                    switch(r.label){
                      case 0:return t="/api/course/".concat(e, "/questionnaire-scores"), [
                        4, Ne().get(t)
                      ];
                      case 1:return[
                        2, r.sent().data
                      ]
                    }
                  }))
                }))
              }
              (e), [
                4, Promise.all([
                  t, r
                ]).then((function(){
                  for(var t=[
                  ], r=0;
                  r<arguments.length;
                  r++)t[
                    r
                  ]
                  =arguments[
                    r
                  ];
                  var n=Array.from(t[
                    0
                  ]), o=n[
                    0
                  ], a=n[
                    1
                  ], s=o.questionnaires, i=a.questionnaire_scores, c=P().filter(s, (function(e){
                    return e.data.is_scored
                  }));
                  ct.questionnaireActivities=P().each(P().cloneDeep(c), (function(t){
                    return t.type="questionnaire", t.url="/course/".concat(e, "/learning-activity/full-screen#/questionnaire/").concat(t.id), t.scores=P().filter(i, {
                      activity_id:t.id
                    }), t.start_time=t.start_time||t.created_at, t.public=!0, !0
                  }))
                }))
              ];
              case 1:return n.sent(), [
                2
              ]
            }
          }))
        }))
      }, _t=function(e){
        return st(void 0, void 0, void 0, (function(){
          var t, r;
          return it(this, (function(n){
            switch(n.label){
              case 0:return t=function(e){
                return Le(void 0, void 0, void 0, (function(){
                  var t;
                  return Oe(this, (function(r){
                    switch(r.label){
                      case 0:return t="/api/course/".concat(e, "/interactions"), [
                        4, Ne().get(t)
                      ];
                      case 1:return[
                        2, r.sent().data
                      ]
                    }
                  }))
                }))
              }
              (e), r=function(e){
                return Le(void 0, void 0, void 0, (function(){
                  var t;
                  return Oe(this, (function(r){
                    switch(r.label){
                      case 0:return t="/api/course/".concat(e, "/interaction-scores"), [
                        4, Ne().get(t)
                      ];
                      case 1:return[
                        2, r.sent().data
                      ]
                    }
                  }))
                }))
              }
              (e), [
                4, Promise.all([
                  t, r
                ]).then((function(){
                  for(var e=[
                  ], t=0;
                  t<arguments.length;
                  t++)e[
                    t
                  ]
                  =arguments[
                    t
                  ];
                  var r=Array.from(e[
                    0
                  ]), n=r[
                    0
                  ].interactions, o=r[
                    1
                  ].interaction_scores;
                  ct.interactionActivities=P().each(ot.copy(n), (function(e){
                    return e.type="interaction", e.url="/course/".concat(ct.courseId, "/learning-activity/full-screen#/").concat(e.id), e.scores=P().filter(o, {
                      activity_id:e.id
                    }), e.start_time=e.start_time||e.created_at, e.public=!0, !0
                  }))
                }))
              ];
              case 1:return n.sent(), [
                2
              ]
            }
          }))
        }))
      }, gt=function(e){
        return st(void 0, void 0, void 0, (function(){
          var t, r;
          return it(this, (function(n){
            switch(n.label){
              case 0:return t=function(e){
                return Le(void 0, void 0, void 0, (function(){
                  var t;
                  return Oe(this, (function(r){
                    switch(r.label){
                      case 0:return t="/api/course/".concat(e, "/online-video-completeness/setting?no-loading-animation=true"), [
                        4, Ne().get(t)
                      ];
                      case 1:return[
                        2, r.sent().data
                      ]
                    }
                  }))
                }))
              }
              (e), r=function(e){
                return Le(void 0, void 0, void 0, (function(){
                  var t;
                  return Oe(this, (function(r){
                    switch(r.label){
                      case 0:return t="/api/course/".concat(e, "/online-video-completeness/scores"), [
                        4, Ne().get(t)
                      ];
                      case 1:return[
                        2, r.sent().data
                      ]
                    }
                  }))
                }))
              }
              (e), [
                4, Promise.all([
                  t, r
                ]).then((function(){
                  for(var e=[
                  ], t=0;
                  t<arguments.length;
                  t++)e[
                    t
                  ]
                  =arguments[
                    t
                  ];
                  var r=Array.from(e[
                    0
                  ]), n=r[
                    0
                  ], o=r[
                    1
                  ];
                  ct.onlineVideoCompletenessScoreSetting=P().cloneDeep(n), ct.onlineVideoCompletenessScore=o
                }))
              ];
              case 1:return n.sent(), [
                2
              ]
            }
          }))
        }))
      }, bt=function(e){
        return st(void 0, void 0, void 0, (function(){
          var t;
          return it(this, (function(r){
            switch(r.label){
              case 0:return[
                4, je(e)
              ];
              case 1:return t=r.sent(), ct.customScoreItems=P().each(t.custom_score_items, (function(e){
                e.score_count=e.scores.length;
                for(var t={
                }, r=0, n=e.scores;
                r<n.length;
                r++){
                  var o=n[
                    r
                  ];
                  t[
                    o.user_id
                  ]
                  =o.score
                }
                return e.scores=t
              })), [
                2
              ]
            }
          }))
        }))
      }, yt=function(e){
        return st(void 0, void 0, void 0, (function(){
          var t;
          return it(this, (function(r){
            switch(r.label){
              case 0:return[
                4, Qe(e)
              ];
              case 1:return t=r.sent().course_scores, P().each(ct.students, (function(e){
                var r=P().find(t, {
                  enrollment_id:e.enrollment_id
                });
                e.total_score=r.total_score, e.original_total_score=r.original_total_score, e.admin_comment=r.admin_comment
              })), [
                2
              ]
            }
          }))
        }))
      }, St=function(e){
        return st(void 0, void 0, void 0, (function(){
          var t;
          return it(this, (function(r){
            switch(r.label){
              case 0:return[
                4, Je(e)
              ];
              case 1:return t=r.sent(), ct.members=t.enrollments.map((function(e){
                e.enrollment_id=e.id, e.raw_score=0;
                var t=at(at({
                }, e), e.user);
                return delete t.user, t
              })), ct.students=P().filter(ct.members, (function(e){
                return e.roles.includes("student")
              })), P().forEach(ct.students, (function(e){
                e.total_score=parseFloat(e.total_score), e.department_code=e.department&&e.department.code?e.department.code:void 0, e.grade_name=e.grade&&e.grade.name?e.grade.name:void 0, e.class_code=e.klass&&e.klass.code?e.klass.code:void 0, e.user_no=e.user_no?e.user_no:void 0, e.selected=!1, e.dissertation_finished=e.instructor_score_time&&"finish_dissertation_rule"===ct.scoreTypeSettings.score_type
              })), n=ct.students, ct.departments=P().sortedUniqBy(P().sortBy(P().map(n, (function(e){
                return e.department
              })), "id"), "id"), ct.grades=P().sortedUniqBy(P().sortBy(P().map(n, (function(e){
                return e.grade?e.grade:{
                  id:0
                }
              })), "id"), "id"), ct.classes=P().sortedUniqBy(P().sortBy(P().map(n, (function(e){
                return e.klass?e.klass:{
                  id:0
                }
              })), "id"), "id"), ct.sharedBetweenScopes.students=ct.students, ct.filteredStudents=ct.students, ct.sharedBetweenScopes.filteredStudents=ct.filteredStudents, ct.courseScoresPublished||"partial_submitted"===ct.scoreStatus?[
                2, yt(e)
              ]
              :[
                2
              ]
            }
            var n
          }))
        }))
      }, wt=function(e){
        return st(void 0, void 0, void 0, (function(){
          var t, r;
          return it(this, (function(n){
            switch(n.label){
              case 0:return e.total_score||(e.total_score=0), t={
                total_score:e.total_score, delete_instructor_score_time:!1
              }, [
                4, tt(e.enrollment_id, t)
              ];
              case 1:return r=n.sent(), e.scored_instructor=r.scored_instructor, e.instructor_score_time=r.instructor_score_time, e.original_total_score=e.total_score, e.data=r.data, [
                2
              ]
            }
          }))
        }))
      }, It=function(e){
        return st(void 0, void 0, void 0, (function(){
          var t, r;
          return it(this, (function(n){
            switch(n.label){
              case 0:return[
                4, Xe(e)
              ];
              case 1:return t=n.sent(), r=P().keyBy(t.data, "enrollment_id"), P().forEach(ct.students, (function(e){
                if(e.rawScoreNotFixed=parseFloat(r[
                  e.enrollment_id
                ].raw_score_not_fixed), e.raw_score=parseFloat(r[
                  e.enrollment_id
                ].raw_score), e.instructor_score_time||ct.courseScoresPublished||function(e){
                  ct.enableUpdateAllStudentsFinalScore?e.total_score=e.instructor_score_time?e.total_score:NaN:e.total_score=e.raw_score<0?0:e.raw_score
                }
                (e), e.final_exam_score&&(e.final_exam_score=parseFloat(e.final_exam_score)), ct.totalScoreInteger)return e.total_score=Math.round(e.total_score)
              })), [
                2
              ]
            }
          }))
        }))
      }, xt=function(e, t){
        return((ct.activityStudentStatus[
          e.type
        ]
        ||{
        })[
          e.id
        ]
        ||{
        })[
          t.id
        ]
        ||""
      }, Ct=function(e, t, r){
        t.forEach((function(t){
          var n=0;
          t.items.forEach((function(t){
            var o, a=function(e, t){
              if("rollcall_score_setting"===e.type)return t.rollcall;
              if("online_video_completeness_score_setting"===e.type)return t.onlineVideoCompletenessScore;
              if("performance_score_setting"===e.type)return t.performance;
              if("custom"===e.type)return t[
                "custom".concat(e.id)
              ];
              var r=rt[
                e.type
              ];
              return t[
                "".concat(r).concat(e.referrerId)
              ]
            }
            (t, e), s=nt(t, r), i=!s||(null===(o=s.published)||void 0===o||o);
            e[
              "item-".concat(t.id, "-score")
            ]
            =a, a>0&&i&&(n+=a*t.weight/100)
          })), e[
            "group-".concat(t.id, "-score")
          ]
          =Math.round(100*n)/100
        }))
      }, kt=function(e){
        var t=ct.customScoreItems.reduce((function(e, t){
          return e+parseFloat(t.score_percentage)
        }), 0);
        P().forEach(ct.students, (function(r){
          r.rollcall=null!=ct.rollcallScore[
            r.id
          ]
          ?ct.rollcallScore[
            r.id
          ]
          :-1, ct.onlineVideoCompletenessScoreSetting.id&&(r.onlineVideoCompletenessScore=ct.onlineVideoCompletenessScore[
            r.id
          ].score), P().forEach(ct.customScoreItems, (function(e){
            return r[
              "custom".concat(e.id)
            ]
            =null!=e.scores[
              r.id
            ]
            ?e.scores[
              r.id
            ]
            :-1
          })), r.score_total_percentage=0, r.score_total_percentage+=parseFloat(ct.rollcallSetting.score_percentage), r.score_total_percentage+=t, ct.isAllowPerformanceView&&(r.performance=null!=ct.performanceScore[
            r.id
          ]
          ?ct.performanceScore[
            r.id
          ]
          :-1, r.score_total_percentage+=parseFloat(ct.performanceSetting.score_percentage)), r.score_total_percentage+=parseFloat(ct.onlineVideoCompletenessScoreSetting.score_percentage||0), P().forEach(ct.activities, (function(e){
            var t=function(e, t){
              var r=P().find(e.scores, {
                activity_id:e.id, student_id:t.id
              });
              return r&&(r.score||0===r.score)?parseFloat(r.score):""
            }
            (e, r);
            "un_assigned"!==xt(e, r)&&(r.score_total_percentage+=parseFloat(e.score_percentage)), r[
              e.type+e.id
            ]
            =""!==t?t:-1
          })), Ct(r, e, ct.activities)
        }))
      }, At=function(){
        if(function(){
          var e=P().find(ct.allScoresItem, {
            name:"rollcall"
          });
          if(!e)return e={
            name:"rollcall", ref_obj:"rollcall", hasScoreCount:0, edu_score_key:"null", score_type:"rollcall"
          }, ct.allScoresItem.splice(0, 0, e);
          var t=P().findIndex(ct.allScoresItem, {
            name:"rollcall"
          });
          t>=0&&ct.allScoresItem.splice(t, 1)
        }
        (), ct.allScoresItem){
          var e=P().find(ct.allScoresItem, {
            name:"rollcall"
          });
          if(e){
            var t=P().filter(ct.students, (function(e){
              return e.rollcall>0
            }));
            e.hasScoreCount=t.length
          }
        }
        return 0
      }, $t=function(e){
        var t=ct.homeworks.concat(ct.exams).concat(ct.classrooms).concat(ct.forumActivities).concat(ct.questionnaireActivities).concat(ct.virtualExperimentActivities).concat(ct.interactionActivities);
        ct.isToggleWeblinkScoreSettingOpened&&(t=t.concat(ct.weblinkActivities)), ct.activities=P().sortBy(t, [
          "module_sort", "syllabus_sort", "sort", "created_at"
        ]), ct.percentageData.activityList=ot.copy(ct.activities), ct.percentageData.customScoreItemList=ot.copy(ct.customScoreItems), kt(e), At(), ct.allStudents=ct.students, ct.loaded=!0
      }, Gt=[
      ], Dt=function(e, t){
        return st(void 0, void 0, void 0, (function(){
          var r, n;
          return it(this, (function(o){
            return Gt.push(function(e){
              return st(void 0, void 0, void 0, (function(){
                var t;
                return it(this, (function(r){
                  switch(r.label){
                    case 0:return t=ct, [
                      4, Be(e)
                    ];
                    case 1:return t.course=r.sent(), [
                      2
                    ]
                  }
                }))
              }))
            }
            (e)), r=function(e){
              return st(void 0, void 0, void 0, (function(){
                var t;
                return it(this, (function(r){
                  switch(r.label){
                    case 0:return[
                      4, We(e)
                    ];
                    case 1:return t=r.sent(), ct.scoreSettings={
                      autoPublish:t.auto_publish, canPublishScore:t.can_publish_score
                    }, ct.scoreSettings.isScorePublishStarted=C().diff(C(t.score_publish_start), "seconds")>0, ct.scorePublishDeadline=t.score_publish_deadline, ct.scoreStatus=t.score_status, ct.published_name=t.published_name, ct.courseScoresPublished="submitted"===ct.scoreStatus, "string"==typeof t.published_at&&(ct.published_at=C(t.published_at).format("YYYY.MM.DD HH:mm")), [
                      2
                    ]
                  }
                }))
              }))
            }
            (e), n=function(e){
              return st(void 0, void 0, void 0, (function(){
                var t;
                return it(this, (function(r){
                  switch(r.label){
                    case 0:return[
                      4, ze(e)
                    ];
                    case 1:return t=r.sent(), ct.scoreTypeSettings={
                      score_type:t.score_type, passing_score:t.passing_score
                    }, [
                      2
                    ]
                  }
                }))
              }))
            }
            (e), Gt.push(r, n), Gt.push(function(e){
              return st(void 0, void 0, void 0, (function(){
                var t;
                return it(this, (function(r){
                  switch(r.label){
                    case 0:return[
                      4, Fe(e)
                    ];
                    case 1:return t=r.sent(), ct.homeworks=P().each(t.homework_activities, (function(e){
                      return e.type="homework", e.score_published=e.is_announce_score_time_passed, e.url="/course/".concat(ct.courseId, "/learning-activity#/").concat(e.id), e.scores=P().find(t.scores, {
                        homework_id:e.id
                      }).scores, P().each(e.scores, (function(e){
                        ut(e)
                      }))
                    })), [
                      2
                    ]
                  }
                }))
              }))
            }
            (e)), Gt.push(function(e){
              return st(void 0, void 0, void 0, (function(){
                var t;
                return it(this, (function(r){
                  switch(r.label){
                    case 0:return[
                      4, Ke(e)
                    ];
                    case 1:return t=r.sent(), ct.activityStudentStatus.homework=t, [
                      2
                    ]
                  }
                }))
              }))
            }
            (e)), Gt.push(lt(e)), Gt.push(function(e){
              return st(void 0, void 0, void 0, (function(){
                var t;
                return it(this, (function(r){
                  switch(r.label){
                    case 0:return[
                      4, qe(e)
                    ];
                    case 1:return t=r.sent(), ct.activityStudentStatus.exam=t, [
                      2
                    ]
                  }
                }))
              }))
            }
            (e)), Gt.push(dt(e)), Gt.push(function(e){
              return st(void 0, void 0, void 0, (function(){
                var t;
                return it(this, (function(r){
                  switch(r.label){
                    case 0:return[
                      4, Ve(e)
                    ];
                    case 1:return t=r.sent(), ct.activityStudentStatus.classroom=t, [
                      2
                    ]
                  }
                }))
              }))
            }
            (e)), Gt.push(function(e){
              return st(void 0, void 0, void 0, (function(){
                var t;
                return it(this, (function(r){
                  switch(r.label){
                    case 0:return[
                      4, Ue(e)
                    ];
                    case 1:return t=r.sent(), ct.rollcallSetting=at({
                      score_percentage:0
                    }, t), [
                      2
                    ]
                  }
                }))
              }))
            }
            (e)), Gt.push(function(e){
              return st(void 0, void 0, void 0, (function(){
                var t;
                return it(this, (function(r){
                  switch(r.label){
                    case 0:return[
                      4, He(e)
                    ];
                    case 1:return t=r.sent(), ct.rollcallScore=t.scores||[
                    ], [
                      2
                    ]
                  }
                }))
              }))
            }
            (e)), ct.isAllowPerformanceView&&Gt.push(pt(e)), Gt.push(vt(e)), Gt.push(ft(e)), Gt.push(mt(e)), Gt.push(ht(e)), Gt.push(_t(e)), Gt.push(gt(e)), Gt.push(bt(e)), ct.allowDisplayScoreRanks&&Gt.push(function(e){
              return st(void 0, void 0, void 0, (function(){
                var t;
                return it(this, (function(r){
                  switch(r.label){
                    case 0:return[
                      4, Ze(e)
                    ];
                    case 1:return t=r.sent(), ct.scoreRanks=t.score_ranks, ct.passScoreValue=100, P().each(ct.scoreRanks, (function(e){
                      if(e.min<ct.passScoreValue&&!0===e.pass)return ct.passScoreValue=e.min
                    })), [
                      2
                    ]
                  }
                }))
              }))
            }
            (e)), Promise.all([
              r, n
            ]).then((function(){
              return st(void 0, void 0, void 0, (function(){
                return it(this, (function(r){
                  switch(r.label){
                    case 0:return[
                      4, St(e)
                    ];
                    case 1:return r.sent(), Gt.push(It(e)), Promise.all(Gt).then((function(){
                      return $t(t)
                    })), [
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
      }, Tt=function(e, t, r, n){
        return new(r||(r=Promise))((function(o, a){
          function s(e){
            try{
              c(n.next(e))
            }
            catch(e){
              a(e)
            }
          }
          function i(e){
            try{
              c(n.throw(e))
            }
            catch(e){
              a(e)
            }
          }
          function c(e){
            var t;
            e.done?o(e.value):(t=e.value, t instanceof r?t:new r((function(e){
              e(t)
            }))).then(s, i)
          }
          c((n=n.apply(e, t||[
          ])).next())
        }))
      }, Et=function(e, t){
        var r, n, o, a, s={
          label:0, sent:function(){
            if(1&o[
              0
            ])throw o[
              1
            ];
            return o[
              1
            ]
          }, trys:[
          ], ops:[
          ]
        };
        return a={
          next:i(0), throw:i(1), return:i(2)
        }, "function"==typeof Symbol&&(a[
          Symbol.iterator
        ]
        =function(){
          return this
        }), a;
        function i(i){
          return function(c){
            return function(i){
              if(r)throw new TypeError("Generator is already executing.");
              for(;
              a&&(a=0, i[
                0
              ]
              &&(s=0)), s;
              )try{
                if(r=1, n&&(o=2&i[
                  0
                ]
                ?n.return:i[
                  0
                ]
                ?n.throw||((o=n.return)&&o.call(n), 0):n.next)&&!(o=o.call(n, i[
                  1
                ])).done)return o;
                switch(n=0, o&&(i=[
                  2&i[
                    0
                  ], o.value
                ]), i[
                  0
                ]){
                  case 0:case 1:o=i;
                  break;
                  case 4:return s.label++, {
                    value:i[
                      1
                    ], done:!1
                  };
                  case 5:s.label++, n=i[
                    1
                  ], i=[
                    0
                  ];
                  continue;
                  case 7:i=s.ops.pop(), s.trys.pop();
                  continue;
                  default:if(!(o=s.trys, (o=o.length>0&&o[
                    o.length-1
                  ])||6!==i[
                    0
                  ]
                  &&2!==i[
                    0
                  ])){
                    s=0;
                    continue
                  }
                  if(3===i[
                    0
                  ]
                  &&(!o||i[
                    1
                  ]
                  >o[
                    0
                  ]
                  &&i[
                    1
                  ]
                  <o[
                    3
                  ])){
                    s.label=i[
                      1
                    ];
                    break
                  }
                  if(6===i[
                    0
                  ]
                  &&s.label<o[
                    1
                  ]){
                    s.label=o[
                      1
                    ], o=i;
                    break
                  }
                  if(o&&s.label<o[
                    2
                  ]){
                    s.label=o[
                      2
                    ], s.ops.push(i);
                    break
                  }
                  o[
                    2
                  ]
                  &&s.ops.pop(), s.trys.pop();
                  continue
                }
                i=t.call(e, s)
              }
              catch(e){
                i=[
                  6, e
                ], n=0
              }
              finally{
                r=o=0
              }
              if(5&i[
                0
              ])throw i[
                1
              ];
              return{
                value:i[
                  0
                ]
                ?i[
                  1
                ]
                :void 0, done:!0
              }
            }
            ([
              i, c
            ])
          }
        }
      }, Pt=function(e, t, r){
        if(r||2===arguments.length)for(var n, o=0, a=t.length;
        o<a;
        o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t, 0, o)), n[
          o
        ]
        =t[
          o
        ]);
        return e.concat(n||Array.prototype.slice.call(t))
      };
      const Rt=(0, s.pM)({
        name:"total-score-table", components:{
          TooltipExt:i.A, SvgIcon:u.A, ScoreItemOption:De, ScoreLogDropdown:Re
        }, props:{
          scoreItemGroups:{
            type:Array, required:!0
          }, height:{
            type:Number, required:!0
          }, scoreStatus:{
            type:String
          }
        }, setup:function(e){
          var t, r, n, o, c=this, l=(null===(r=null===(t=window.globalData)||void 0===t?void 0:t.course)||void 0===r?void 0:r.id)||0, d=(0, s.KR)({
            key:"", order:"asc"
          }), p=function(e, t){
            if(ct.loaded){
              ct.students.sort((function(r, n){
                var o="number"==typeof r[
                  e
                ]
                ?r[
                  e
                ]
                :0, a="number"==typeof n[
                  e
                ]
                ?n[
                  e
                ]
                :0;
                return(t?-1:1)*(o-a)
              }));
              var r=t?"desc":"asc";
              d.value={
                key:e, order:r
              }
            }
          }, v=function(e, t){
            if(ct.loaded){
              ct.students.sort((function(r, n){
                return(t?-1:1)*r[
                  e
                ].localeCompare(n[
                  e
                ])
              }));
              var r=t?"desc":"asc";
              d.value={
                key:e, order:r
              }
            }
          }, f=function(e, t){
            return d.value.key===e&&d.value.order===t
          }, m=(0, s.EW)((function(){
            var t, r=[
              {
                title:a.default.t("courseScore.classMember"), slot:"name", width:160, fixed:"left", renderHeader:function(e, t){
                  return e("div", [
                    e("span", a.default.t("courseScore.classMember")), e("span", {
                      class:"ivu-table-sort"
                    }, [
                      e("i", {
                        class:[
                          "ivu-icon", "ivu-icon-md-arrow-dropup", {
                            on:f("user_no", "asc")
                          }
                        ], on:{
                          click:function(){
                            return v("user_no", !1)
                          }
                        }
                      }), e("i", {
                        class:[
                          "ivu-icon", "ivu-icon-md-arrow-dropdown", {
                            on:f("user_no", "desc")
                          }
                        ], on:{
                          click:function(){
                            return v("user_no", !0)
                          }
                        }
                      })
                    ])
                  ])
                }
              }, {
                title:a.default.t("scoreRecord.originalScore"), key:"raw_score", slot:"rawScore", width:142, fixed:"right", className:"right-column", renderHeader:function(t, r){
                  return t("div", {
                    class:"raw-score"
                  }, [
                    t("div", [
                      t("span", a.default.t("scoreRecord.originalScore")), t("Tooltip", {
                        props:{
                          transfer:!0, content:a.default.t("courseScore.scoreItemGroup.scoreFormula"), placement:"top"
                        }
                      }, [
                        t(u.A, {
                          props:{
                            name:"help"
                          }
                        })
                      ]), t("span", {
                        class:"ivu-table-sort"
                      }, [
                        t("i", {
                          class:[
                            "ivu-icon", "ivu-icon-md-arrow-dropup", {
                              on:f("raw_score", "asc")
                            }
                          ], on:{
                            click:function(){
                              return p("raw_score", !1)
                            }
                          }
                        }), t("i", {
                          class:[
                            "ivu-icon", "ivu-icon-md-arrow-dropdown", {
                              on:f("raw_score", "desc")
                            }
                          ], on:{
                            click:function(){
                              return p("raw_score", !0)
                            }
                          }
                        })
                      ]), t(De, {
                        props:{
                          "score-item":{
                            id:0, type:"raw_score"
                          }, "score-item-groups":e.scoreItemGroups, "score-status":e.scoreStatus
                        }
                      })
                    ]), t("div", {
                      class:"raw-score-tip"
                    }, a.default.t("scoreRecord.fullMarksTip"))
                  ])
                }
              }, {
                title:a.default.t("scoreRecord.finalScore"), key:"total_score", width:142, fixed:"right", className:"right-column", slot:"totalScore", renderHeader:function(t, r){
                  return t("div", {
                    class:"total-score"
                  }, [
                    t("div", [
                      t("span", a.default.t("scoreRecord.finalScore")), t("span", {
                        class:"ivu-table-sort"
                      }, [
                        t("i", {
                          class:[
                            "ivu-icon", "ivu-icon-md-arrow-dropup", {
                              on:f("total_score", "asc")
                            }
                          ], on:{
                            click:function(){
                              return p("total_score", !1)
                            }
                          }
                        }), t("i", {
                          class:[
                            "ivu-icon", "ivu-icon-md-arrow-dropdown", {
                              on:f("total_score", "desc")
                            }
                          ], on:{
                            click:function(){
                              return p("total_score", !0)
                            }
                          }
                        })
                      ]), t(De, {
                        props:{
                          "score-item":{
                            id:0, type:"total_score"
                          }, "score-item-groups":e.scoreItemGroups, "score-status":e.scoreStatus
                        }
                      })
                    ])
                  ])
                }
              }, {
                title:a.default.t("scoreRecord.exceptional"), width:98, fixed:"right", slot:"exceptionalCases", className:"right-column"
              }, {
                title:a.default.t("tencent_meeting.note"), width:98, fixed:"right", slot:"scoreComment", className:"right-column"
              }
            ];
            (null===(t=window.exceptionalCaseInfo)||void 0===t?void 0:t.enabled)||(r=r.filter((function(e){
              return"exceptionalCases"!==e.slot
            })));
            var n=e.scoreItemGroups.map((function(t){
              var r="group-".concat(t.id, "-score");
              return{
                title:t.name, key:r, minWidth:180, renderHeader:function(n, o){
                  return n("div", {
                    class:"group-name"
                  }, [
                    n("div", [
                      n(i.A, {
                        props:{
                          text:t.name
                        }
                      }), n("span", {
                        class:"ivu-table-sort"
                      }, [
                        n("i", {
                          class:[
                            "ivu-icon", "ivu-icon-md-arrow-dropup", {
                              on:f(r, "asc")
                            }
                          ], on:{
                            click:function(){
                              return p(r, !1)
                            }
                          }
                        }), n("i", {
                          class:[
                            "ivu-icon", "ivu-icon-md-arrow-dropdown", {
                              on:f(r, "desc")
                            }
                          ], on:{
                            click:function(){
                              return p(r, !0)
                            }
                          }
                        })
                      ]), n(De, {
                        props:{
                          "score-item":{
                            id:t.id, type:"group"
                          }, "score-item-groups":e.scoreItemGroups, "score-status":e.scoreStatus
                        }
                      })
                    ]), n("div", {
                      class:"score-percentage"
                    }, "".concat(t.percentage, "%"))
                  ])
                }
              }
            }));
            return r.splice.apply(r, Pt([
              1, 0
            ], n, !1)), r
          })), h=(0, s.EW)((function(){
            return ct.loaded?ct.students:[
            ]
          })), _=(null===(o=null===(n=window.globalData)||void 0===n?void 0:n.course)||void 0===o?void 0:o.isSimulatingInstructor)||!1;
          ve.A.$on("refreshScore", (function(){
            (0, s.dY)((function(){
              return Tt(c, void 0, void 0, (function(){
                return Et(this, (function(t){
                  switch(t.label){
                    case 0:return[
                      4, bt(l)
                    ];
                    case 1:return t.sent(), ct.loaded=!1, [
                      4, It(l)
                    ];
                    case 2:return t.sent(), $t(e.scoreItemGroups), [
                      2
                    ]
                  }
                }))
              }))
            }))
          })), ve.A.$on("refreshErrorScore", (function(){
            ct.loaded=!1, setTimeout((function(){
              ct.loaded=!0
            }), 300)
          })), ve.A.$on("clear-sorted-by", (function(){
            d.value.key=""
          }));
          var g=(0, s.EW)((function(){
            var e=window;
            if(!e.exceptionalCaseInfo)return{
            };
            var t=e.exceptionalCaseInfo, r={
            };
            return Object.keys(t.mapping).forEach((function(e){
              t.allowExceptionalCaseType.includes(e)&&(r[
                e
              ]
              =t.mapping[
                e
              ])
            })), r
          })), b=P().debounce((function(e, t){
            return Tt(c, void 0, void 0, (function(){
              var r;
              return Et(this, (function(n){
                switch(n.label){
                  case 0:if(!t)return[
                    2
                  ];
                  r={
                  }, n.label=1;
                  case 1:return n.trys.push([
                    1, 3, , 4
                  ]), [
                    4, et(e.enrollment_id, t)
                  ];
                  case 2:return r=n.sent(), Se.A.success(a.default.t("save_success")), [
                    3, 4
                  ];
                  case 3:return n.sent(), console.error("updateStudentExceptionalCase failed with:", r), Se.A.error(a.default.t("save_error")), [
                    3, 4
                  ];
                  case 4:return[
                    2
                  ]
                }
              }))
            }))
          }), 600), y=P().debounce((function(e){
            return Tt(c, void 0, void 0, (function(){
              var t;
              return Et(this, (function(r){
                switch(r.label){
                  case 0:t={
                  }, r.label=1;
                  case 1:return r.trys.push([
                    1, 3, , 4
                  ]), [
                    4, (n=e.enrollment_id, o=e.score_comment, Le(void 0, void 0, void 0, (function(){
                      var e;
                      return Oe(this, (function(t){
                        switch(t.label){
                          case 0:return e="/api/enrollment/".concat(n, "/score-comment"), [
                            4, Ne().put(e, (0, we.decamelizeKeys)({
                              scoreComment:o
                            }))
                          ];
                          case 1:return[
                            2, t.sent().data
                          ]
                        }
                      }))
                    })))
                  ];
                  case 2:return t=r.sent(), Se.A.success(a.default.t("save_success")), [
                    3, 4
                  ];
                  case 3:return r.sent(), console.error("updateStudentScoreComment failed with:", t), Se.A.error(a.default.t("save_error")), [
                    3, 4
                  ];
                  case 4:return[
                    2
                  ]
                }
                var n, o
              }))
            }))
          }), 2e3), S=P().debounce((function(e){
            return Tt(c, void 0, void 0, (function(){
              var t;
              return Et(this, (function(r){
                switch(r.label){
                  case 0:t={
                  }, r.label=1;
                  case 1:return r.trys.push([
                    1, 3, , 4
                  ]), [
                    4, wt(e)
                  ];
                  case 2:return t=r.sent(), Se.A.success(a.default.t("save_success")), [
                    3, 4
                  ];
                  case 3:return r.sent(), console.error("updateTotalScore failed with:", t), Se.A.error(a.default.t("save_error")), [
                    3, 4
                  ];
                  case 4:return[
                    2
                  ]
                }
              }))
            }))
          }), 1500);
          return{
            columns:m, scoreDatas:ct, items:h, exceptionalMapping:g, caseChangeHandler:b, commentChangeHandler:y, getEditTip:function(e){
              return"".concat(a.default.t("scoreRecord.lastEditTime"), ": ").concat(function(e, t){
                void 0===t&&(t="YYYY.MM.DD HH:mm");
                var r=C(e);
                return r.isValid()?r.format(t):e
              }
              (e.data.manual_change_final_score_time), " ").concat(e.data.manual_scored_instructor)
            }, totalScoreChangeHandler:S, getManualChangeFinalScore:function(e){
              var t, r;
              return(null===(t=e.data)||void 0===t?void 0:t.manual_change_final_score)?(null===(r=e.data)||void 0===r?void 0:r.manual_change_final_score.length)?(0, we.camelizeKeys)(e.data.manual_change_final_score):[
                {
                  scoredAt:e.data.manual_change_final_score_time, scoredBy:e.data.manual_scored_instructor, score:e.total_score, deleteFinalScore:!1
                }
              ]
              :[
              ]
            }, isSimulatingInstructor:_
          }
        }
      });
      const Mt=(0, f.A)(Rt, (function(){
        var e=this, t=e.$createElement, r=e._self._c||t;
        return r("div", {
          staticClass:"total-score-table"
        }, [
          r("Table", {
            staticClass:"table-content", attrs:{
              height:e.height, columns:e.columns, data:e.items, loading:!e.scoreDatas.loaded
            }, scopedSlots:e._u([
              {
                key:"name", fn:function(t){
                  var n=t.row;
                  return[
                    r("div", {
                      staticClass:"student-name-area"
                    }, [
                      r("div", {
                        staticClass:"student-name"
                      }, [
                        r("TooltipExt", {
                          attrs:{
                            text:n.name
                          }
                        })
                      ], 1), e._v(" "), r("div", {
                        staticClass:"student-no"
                      }, [
                        r("TooltipExt", {
                          attrs:{
                            text:n.user_no
                          }
                        })
                      ], 1)
                    ])
                  ]
                }
              }, {
                key:"rawScore", fn:function(t){
                  var n=t.row;
                  return[
                    r("div", [
                      e._v(e._s(n.raw_score))
                    ])
                  ]
                }
              }, {
                key:"totalScore", fn:function(t){
                  var n=t.row;
                  return[
                    r("div", {
                      staticClass:"total-score-area"
                    }, [
                      "submitted"===e.scoreStatus||e.isSimulatingInstructor?r("span", [
                        e._v(e._s(n.total_score))
                      ]):r("Input", {
                        staticClass:"input-total-score", class:{
                          "has-score-time":Boolean(n.data&&n.data.manualChangeFinalScore&&n.data.manualChangeFinalScore.length)
                        }, on:{
                          "on-change":function(t){
                            return e.totalScoreChangeHandler(n)
                          }
                        }, model:{
                          value:n.total_score, callback:function(t){
                            e.$set(n, "total_score", t)
                          }, expression:"row.total_score"
                        }
                      }), e._v(" "), r("ScoreLogDropdown", {
                        attrs:{
                          items:e.getManualChangeFinalScore(n)
                        }
                      }, [
                        r("i", {
                          staticClass:"icon icon-total-score-changed"
                        })
                      ])
                    ], 1)
                  ]
                }
              }, {
                key:"exceptionalCases", fn:function(t){
                  var n=t.row;
                  return[
                    e.isSimulatingInstructor?r("span", {
                      staticClass:"select-exceptional-case"
                    }, [
                      e._v("\n        "+e._s(e.exceptionalMapping[
                        n.exceptional_case
                      ])+"\n      ")
                    ]):r("Select", {
                      staticClass:"select-exceptional-case", attrs:{
                        disabled:"submitted"===e.scoreStatus
                      }, on:{
                        "on-change":function(t){
                          return e.caseChangeHandler(n, t)
                        }
                      }, model:{
                        value:n.exceptional_case, callback:function(t){
                          e.$set(n, "exceptional_case", t)
                        }, expression:"row.exceptional_case"
                      }
                    }, e._l(e.exceptionalMapping, (function(t, n){
                      return r("Option", {
                        key:n, attrs:{
                          value:n
                        }
                      }, [
                        e._v(e._s(t))
                      ])
                    })), 1)
                  ]
                }
              }, {
                key:"scoreComment", fn:function(t){
                  var n=t.row;
                  return[
                    "submitted"===e.scoreStatus||e.isSimulatingInstructor?r("span", {
                      staticClass:"input-score-comment"
                    }, [
                      e._v("\n        "+e._s(n.score_comment)+"\n      ")
                    ]):r("Input", {
                      staticClass:"input-score-comment", on:{
                        "on-change":function(t){
                          return e.commentChangeHandler(n)
                        }
                      }, model:{
                        value:n.score_comment, callback:function(t){
                          e.$set(n, "score_comment", t)
                        }, expression:"row.score_comment"
                      }
                    })
                  ]
                }
              }
            ])
          })
        ], 1)
      }), [
      ], !1, null, "5236ffc3", null).exports;
      var Nt=function(e, t, r, n){
        return new(r||(r=Promise))((function(o, a){
          function s(e){
            try{
              c(n.next(e))
            }
            catch(e){
              a(e)
            }
          }
          function i(e){
            try{
              c(n.throw(e))
            }
            catch(e){
              a(e)
            }
          }
          function c(e){
            var t;
            e.done?o(e.value):(t=e.value, t instanceof r?t:new r((function(e){
              e(t)
            }))).then(s, i)
          }
          c((n=n.apply(e, t||[
          ])).next())
        }))
      }, Lt=function(e, t){
        var r, n, o, a, s={
          label:0, sent:function(){
            if(1&o[
              0
            ])throw o[
              1
            ];
            return o[
              1
            ]
          }, trys:[
          ], ops:[
          ]
        };
        return a={
          next:i(0), throw:i(1), return:i(2)
        }, "function"==typeof Symbol&&(a[
          Symbol.iterator
        ]
        =function(){
          return this
        }), a;
        function i(i){
          return function(c){
            return function(i){
              if(r)throw new TypeError("Generator is already executing.");
              for(;
              a&&(a=0, i[
                0
              ]
              &&(s=0)), s;
              )try{
                if(r=1, n&&(o=2&i[
                  0
                ]
                ?n.return:i[
                  0
                ]
                ?n.throw||((o=n.return)&&o.call(n), 0):n.next)&&!(o=o.call(n, i[
                  1
                ])).done)return o;
                switch(n=0, o&&(i=[
                  2&i[
                    0
                  ], o.value
                ]), i[
                  0
                ]){
                  case 0:case 1:o=i;
                  break;
                  case 4:return s.label++, {
                    value:i[
                      1
                    ], done:!1
                  };
                  case 5:s.label++, n=i[
                    1
                  ], i=[
                    0
                  ];
                  continue;
                  case 7:i=s.ops.pop(), s.trys.pop();
                  continue;
                  default:if(!(o=s.trys, (o=o.length>0&&o[
                    o.length-1
                  ])||6!==i[
                    0
                  ]
                  &&2!==i[
                    0
                  ])){
                    s=0;
                    continue
                  }
                  if(3===i[
                    0
                  ]
                  &&(!o||i[
                    1
                  ]
                  >o[
                    0
                  ]
                  &&i[
                    1
                  ]
                  <o[
                    3
                  ])){
                    s.label=i[
                      1
                    ];
                    break
                  }
                  if(6===i[
                    0
                  ]
                  &&s.label<o[
                    1
                  ]){
                    s.label=o[
                      1
                    ], o=i;
                    break
                  }
                  if(o&&s.label<o[
                    2
                  ]){
                    s.label=o[
                      2
                    ], s.ops.push(i);
                    break
                  }
                  o[
                    2
                  ]
                  &&s.ops.pop(), s.trys.pop();
                  continue
                }
                i=t.call(e, s)
              }
              catch(e){
                i=[
                  6, e
                ], n=0
              }
              finally{
                r=o=0
              }
              if(5&i[
                0
              ])throw i[
                1
              ];
              return{
                value:i[
                  0
                ]
                ?i[
                  1
                ]
                :void 0, done:!0
              }
            }
            ([
              i, c
            ])
          }
        }
      }, Ot=function(e, t, r){
        if(r||2===arguments.length)for(var n, o=0, a=t.length;
        o<a;
        o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t, 0, o)), n[
          o
        ]
        =t[
          o
        ]);
        return e.concat(n||Array.prototype.slice.call(t))
      };
      const Bt=(0, s.pM)({
        name:"group-score-table", components:{
          TooltipExt:i.A, scoreItemOption:De
        }, props:{
          itemGroup:{
            type:Object, required:!0
          }, courseId:{
            type:Number, required:!0
          }, height:{
            type:Number, required:!0
          }, scoreItemGroups:{
            type:Array
          }, scoreStatus:{
            type:String
          }
        }, setup:function(e){
          var t, r, n=this, o=function(t){
            var r=function(e, t, r){
              if("rollcall_score_setting"===e.type)return"/course/".concat(t, "/rollcall");
              if("online_video_completeness_score_setting"===e.type)return"";
              if("custom"===e.type)return"";
              if("performance_score_setting"===e.type)return"/course/".concat(t, "/performance");
              var n=rt[
                e.type
              ], o=P().find(r, {
                type:n, id:e.referrerId
              });
              return o?o.url:""
            }
            (t, e.courseId, ct.activities);
            r&&(window.location.href=r)
          }, c=(0, s.KR)({
            key:"", order:"asc"
          }), u=function(e, t){
            if(ct.loaded){
              ct.students.sort((function(r, n){
                return(t?-1:1)*(r[
                  e
                ]
                -n[
                  e
                ])
              }));
              var r=t?"desc":"asc";
              c.value={
                key:e, order:r
              }
            }
          }, l=function(e, t){
            if(ct.loaded){
              ct.students.sort((function(r, n){
                return(t?-1:1)*r[
                  e
                ].localeCompare(n[
                  e
                ])
              }));
              var r=t?"desc":"asc";
              c.value={
                key:e, order:r
              }
            }
          }, d=function(e, t){
            return c.value.key===e&&c.value.order===t
          }, p=(null===(r=null===(t=window.globalData)||void 0===t?void 0:t.course)||void 0===r?void 0:r.isSimulatingInstructor)||!1, v=(0, s.EW)((function(){
            if(0===e.itemGroup.items.length)return[
              {
                title:a.default.t("courseScore.classMember"), slot:"name", width:160, fixed:"left", renderHeader:function(e, t){
                  return e("div", [
                    e("span", a.default.t("courseScore.classMember")), e("span", {
                      class:"ivu-table-sort"
                    }, [
                      e("i", {
                        class:[
                          "ivu-icon", "ivu-icon-md-arrow-dropup", {
                            on:d("user_no", "asc")
                          }
                        ], on:{
                          click:function(){
                            return l("user_no", !1)
                          }
                        }
                      }), e("i", {
                        class:[
                          "ivu-icon", "ivu-icon-md-arrow-dropdown", {
                            on:d("user_no", "desc")
                          }
                        ], on:{
                          click:function(){
                            return l("user_no", !0)
                          }
                        }
                      })
                    ])
                  ])
                }
              }, {
                title:e.itemGroup.name, render:function(e, t){
                  return e("div", String(0))
                }
              }
            ];
            var t=[
              {
                title:a.default.t("courseScore.classMember"), slot:"name", width:160, fixed:"left", renderHeader:function(e, t){
                  return e("div", [
                    e("span", a.default.t("courseScore.classMember")), e("span", {
                      class:"ivu-table-sort"
                    }, [
                      e("i", {
                        class:[
                          "ivu-icon", "ivu-icon-md-arrow-dropup", {
                            on:d("user_no", "asc")
                          }
                        ], on:{
                          click:function(){
                            return l("user_no", !1)
                          }
                        }
                      }), e("i", {
                        class:[
                          "ivu-icon", "ivu-icon-md-arrow-dropdown", {
                            on:d("user_no", "desc")
                          }
                        ], on:{
                          click:function(){
                            return l("user_no", !0)
                          }
                        }
                      })
                    ])
                  ])
                }
              }, {
                title:e.itemGroup.name, width:155, fixed:"right", render:function(t, r){
                  var n=function(t){
                    return t[
                      "group-".concat(e.itemGroup.id, "-score")
                    ]
                  }
                  (r.row);
                  return t("div", String(n))
                }
              }
            ], r=P().debounce((function(e, t, r){
              return Nt(n, void 0, void 0, (function(){
                var n;
                return Lt(this, (function(o){
                  switch(o.label){
                    case 0:return n=Number(e), !Number.isFinite(n)||n<0||n>100?(Se.A.error(a.default.t("save_error")), ve.A.$emit("refreshErrorScore"), [
                      2
                    ]):[
                      4, Ye(t, r, e)
                    ];
                    case 1:return o.sent(), Se.A.success(a.default.t("save_success")), ve.A.$emit("refreshScore"), [
                      2
                    ]
                  }
                }))
              }))
            }), 600), s=e.itemGroup.items.map((function(t){
              var n="item-".concat(t.id, "-score");
              return{
                title:t.name, key:n, scoreItemId:t.id, itemType:t.type, minWidth:180, renderHeader:function(r, s){
                  var c, l=r("div", {
                    on:{
                      click:function(){
                        return o(t)
                      }
                    }, class:{
                      "clickable-item":![
                        "custom", "online_video_completeness_score_setting"
                      ].includes(t.type)
                    }
                  }, [
                    r(i.A, {
                      props:{
                        text:t.name
                      }
                    })
                  ]), p=[
                  ], v=nt(t, ct.activities);
                  return v&&null!==(c=v.published)&&void 0!==c&&!c&&p.push(r("div", {
                    class:"publish-text"
                  }, a.default.t("activityPublish.unpublished"))), r("div", {
                    class:"group-name"
                  }, Ot([
                    r("div", {
                      class:"name-tooltip"
                    }, [
                      l, r("div", {
                        class:"ivu-table-sort"
                      }, [
                        r("i", {
                          class:[
                            "ivu-icon", "ivu-icon-md-arrow-dropup", {
                              on:d(n, "asc")
                            }
                          ], on:{
                            click:function(){
                              return u(n, !1)
                            }
                          }
                        }), r("i", {
                          class:[
                            "ivu-icon", "ivu-icon-md-arrow-dropdown", {
                              on:d(n, "desc")
                            }
                          ], on:{
                            click:function(){
                              return u(n, !0)
                            }
                          }
                        })
                      ]), r(De, {
                        props:{
                          "score-item":t, "score-item-groups":e.scoreItemGroups, "score-status":e.scoreStatus
                        }
                      })
                    ]), r("div", {
                      class:"percent-text"
                    }, "".concat(t.weight, "%"))
                  ], p, !0))
                }, render:function(o, s){
                  var i=s.row, c=i[
                    n
                  ], u=nt(t, ct.activities, [
                    "homework", "exam", "classroom"
                  ]), l="score-item", d=-1===c?"0":String(c);
                  if(u){
                    var v=xt(u, i);
                    "un_assigned"===v?(l="score-item-info", d=a.default.t("courseScore.scoreItemGroup.unAssigned")):"un_submitted"===v?(l="score-item-warning", d=a.default.t("courseScore.scoreItemGroup.unsubmitted")):"un_marked"===v?(l="score-item-info", d=a.default.t("courseScore.scoreItemGroup.unMarked")):"un_scored"===v&&(l="score-item-info", d=a.default.t("courseScore.scoreItemGroup.unScored"))
                  }
                  else{
                    if("custom"===s.column.itemType&&"submitted"!==e.scoreStatus&&!p)return o("Input", {
                      props:{
                        value:d=-1===c?"":String(c)
                      }, class:"input-score-comment", on:{
                        input:function(e){
                          return r(e, s.column.scoreItemId, s.row.id)
                        }
                      }
                    });
                    "custom"===s.column.itemType&&(d=-1===c?"":String(c))
                  }
                  return o("div", {
                    class:l
                  }, d)
                }
              }
            }));
            return t.splice.apply(t, Ot([
              1, 0
            ], s, !1)), t
          })), f=(0, s.EW)((function(){
            return ct.loaded?ct.students:[
            ]
          }));
          return ve.A.$on("clear-sorted-by", (function(){
            c.value.key=""
          })), {
            columns:v, scoreDatas:ct, items:f
          }
        }
      });
      const Wt=(0, f.A)(Bt, (function(){
        var e=this, t=e.$createElement, r=e._self._c||t;
        return r("div", {
          staticClass:"group-score-table"
        }, [
          r("Table", {
            staticClass:"table-content", attrs:{
              height:e.height, columns:e.columns, data:e.items, loading:!e.scoreDatas.loaded
            }, scopedSlots:e._u([
              {
                key:"name", fn:function(t){
                  var n=t.row;
                  return[
                    r("div", {
                      staticClass:"student-name-area"
                    }, [
                      r("div", {
                        staticClass:"student-name"
                      }, [
                        r("TooltipExt", {
                          attrs:{
                            text:n.name
                          }
                        })
                      ], 1), e._v(" "), r("div", {
                        staticClass:"student-no"
                      }, [
                        r("TooltipExt", {
                          attrs:{
                            text:n.user_no
                          }
                        })
                      ], 1)
                    ])
                  ]
                }
              }
            ])
          })
        ], 1)
      }), [
      ], !1, null, "a5d5fb06", null).exports;
      const zt=(0, s.pM)({
        name:"alert-message", props:{
          scoreStatus:{
            type:Object
          }
        }, setup:function(e){
          return{
            isScorePublishStarted:(0, s.EW)((function(){
              return!(!e.scoreStatus||!e.scoreStatus.scorePublishStart)&&C().diff(e.scoreStatus.scorePublishStart, "seconds")>0
            }))
          }
        }
      });
      const Ft=(0, f.A)(zt, (function(){
        var e=this, t=e.$createElement, r=e._self._c||t;
        return e.scoreStatus&&e.isScorePublishStarted?r("div", {
          staticClass:"alert-div"
        }, [
          "submitted"===e.scoreStatus.scoreStatus?r("div", {
            staticClass:"ivu-alert ivu-alert-success ivu-alert-with-icon"
          }, [
            e._m(0), e._v(" "), r("div", {
              staticClass:"ivu-alert-message status"
            }, [
              r("b", [
                e._v(e._s(e.$t("courseScore.scoreItemGroup.scoreSubmitted")))
              ]), e._v(" "), e.scoreStatus.publishedAt?r("span", [
                e._v("\n        （\n        "), e.scoreStatus.publishedName?r("span", [
                  e._v(e._s(e.scoreStatus.publishedName))
                ]):e._e(), e._v(" "), e.scoreStatus.publishedName?e._e():r("span", [
                  e._v(e._s(e.$t("courseScore.scoreItemGroup.autoSubmit")))
                ]), e._v("\n        ,\n        "), r("span", [
                  e._v(e._s(e._f("datetime")(e.scoreStatus.publishedAt)))
                ]), e._v("\n        ）\n      ")
              ]):e._e()
            ])
          ]):e._e(), e._v(" "), "submitted"!==e.scoreStatus.scoreStatus&&"partial_submitted"!==e.scoreStatus.scoreStatus&&e.scoreStatus.scorePublishDeadline?r("div", {
            staticClass:"ivu-alert ivu-alert-warning ivu-alert-with-icon"
          }, [
            e._m(1), e._v(" "), r("div", {
              staticClass:"ivu-alert-message status"
            }, [
              r("b", [
                "submitting"===e.scoreStatus.scoreStatus?r("span", [
                  e._v("\n          "+e._s(e.$t("courseScore.scoreItemGroup.scoreSubmitting"))+"\n        ")
                ]):e._e(), e._v(" "), "unsubmitted"===e.scoreStatus.scoreStatus?r("span", [
                  e._v("\n          "+e._s(e.$t("courseScore.scoreItemGroup.unsubmitScore"))+"\n        ")
                ]):e._e(), e._v(" "), "expired"===e.scoreStatus.scoreStatus?r("span", [
                  e._v("\n          "+e._s(e.$t("courseScore.scoreItemGroup.unsubmitScore"))+"\n        ")
                ]):e._e()
              ]), e._v(" "), e.scoreStatus.scorePublishDeadline?r("span", [
                "unsubmitted"==e.scoreStatus.scoreStatus?r("span", [
                  e._v("\n          （\n          "), r("span", [
                    e._v(e._s(e.$t("courseScore.scoreItemGroup.scorePublishDeadline"))+":")
                  ]), e._v(" "), r("span", [
                    e._v(e._s(e._f("datetime")(e.scoreStatus.scorePublishDeadline)))
                  ]), e._v(" "), e.scoreStatus.autoPublish?r("span", [
                    e._v(e._s(e.$t("courseScore.scoreItemGroup.autoSubmitWhenDeadline")))
                  ]):e._e(), e._v("\n          ）\n        ")
                ]):e._e(), e._v(" "), "expired"===e.scoreStatus.scoreStatus?r("span", [
                  e._v("\n          （\n          "), r("span", [
                    e._v(e._s(e.$t("courseScore.scoreItemGroup.expiredDeadlineTips"))+":")
                  ]), e._v(" "), r("span", [
                    e._v(e._s(e._f("datetime")(e.scoreStatus.scorePublishDeadline)))
                  ]), e._v("\n          ）\n        ")
                ]):e._e()
              ]):e._e()
            ])
          ]):e._e()
        ]):e._e()
      }), [
        function(){
          var e=this.$createElement, t=this._self._c||e;
          return t("span", {
            staticClass:"ivu-alert-icon"
          }, [
            t("i", {
              staticClass:"ivu-icon font font-checkmark-circle"
            })
          ])
        }, function(){
          var e=this.$createElement, t=this._self._c||e;
          return t("span", {
            staticClass:"ivu-alert-icon"
          }, [
            t("i", {
              staticClass:"ivu-icon font font-alert-circle"
            })
          ])
        }
      ], !1, null, "43167de5", null).exports;
      var Kt=r(516844), qt=(r(868329), r(793110)), Vt=r.n(qt), Ut=r(630240), Ht=r(953768), jt=r(545620);
      r(164464), r(700329);
      Ut.Yx([
        jt.a
      ]);
      const Yt=(0, s.pM)({
        name:"chart-page", components:{
          ECharts:Ht.A
        }, props:{
          courseId:{
            type:Number, required:!0
          }
        }, setup:function(e){
          var t=(0, s.KR)([
            a.default.t("learningAnalysis.scoreLevel.under60"), a.default.t("learningAnalysis.scoreLevel.between60To70"), a.default.t("learningAnalysis.scoreLevel.between70To80"), a.default.t("learningAnalysis.scoreLevel.between80To90"), a.default.t("learningAnalysis.scoreLevel.between90To100")
          ]), r=getComputedStyle(document.documentElement).getPropertyValue("--primary-brand-color-lightened-1").trim(), n=(0, s.EW)((function(){
            return ct.loaded?ct.students:[
            ]
          })), o=function(e){
            return null!=e.total_score&&!Number.isNaN(e.total_score)
          }, i=(0, s.EW)((function(){
            var e=new(Vt())(0);
            c._.each(n.value, (function(t){
              o(t)&&(e=e.plus(new(Vt())(t.total_score||0)))
            }));
            var t, r=e.dividedBy((t=0, c._.each(n.value, (function(e){
              o(e)&&(t+=1)
            })), t));
            return r>new(Vt())(0)?parseFloat(r.toFixed(1)):0
          })), u=(0, s.EW)((function(){
            var e=c._.maxBy(c._.filter(n.value, (function(e){
              return o(e)
            })), (function(e){
              return parseFloat(e.total_score)
            }));
            return e&&!Number.isNaN(e.total_score)?parseFloat(e.total_score):0
          })), l=(0, s.EW)((function(){
            if(!ct.loaded)return 0;
            var e=c._.minBy(c._.filter(n.value, (function(e){
              return o(e)
            })), (function(e){
              return parseFloat(e.total_score)
            }));
            return e&&!Number.isNaN(e.total_score)?parseFloat(e.total_score):0
          })), d=(0, s.EW)((function(){
            var e=[
              1, 2, 3, 4, 5
            ].map((function(e){
              return 0
            }));
            return c._.each(n.value, (function(t){
              o(t)&&(t.total_score<60?e[
                0
              ]
              ++:t.total_score>=60&&t.total_score<70?e[
                1
              ]
              ++:t.total_score>=70&&t.total_score<80?e[
                2
              ]
              ++:t.total_score>=80&&t.total_score<90?e[
                3
              ]
              ++:t.total_score>=90&&e[
                4
              ]
              ++)
            })), e
          })), p=(0, s.EW)((function(){
            return{
              backgroundColor:"white", color:[
                r
              ], tooltip:{
                show:!0, trigger:"axis", axisPointer:{
                  type:"none"
                }
              }, grid:{
                borderWidth:0
              }, xAxis:{
                type:"category", data:t.value, axisLabel:{
                  interval:0
                }, splitLine:{
                  show:!0, lineStyle:{
                    opacity:.2
                  }
                }, splitArea:{
                  show:!1
                }, axisLine:{
                  lineStyle:{
                    color:"#aaaaaa"
                  }
                }, axisTick:{
                  lineStyle:{
                    color:"#aaaaaa"
                  }
                }
              }, yAxis:{
                name:a.default.t("courseScore.scoreItemGroup.studentCount"), type:"value", splitArea:{
                  show:!0, areaStyle:{
                    color:[
                      "rgba(250,250,250,0.3)", "rgba(200,200,200,0.1)"
                    ]
                  }
                }, splitLine:{
                  show:!0, lineStyle:{
                    opacity:.2
                  }
                }, axisLine:{
                  lineStyle:{
                    color:"#aaaaaa"
                  }
                }
              }, series:[
                {
                  name:a.default.t("courseScore.scoreItemGroup.studentCount"), data:d.value, type:"bar", barMaxWidth:40, itemStyle:{
                    normal:{
                      barBorderRadius:0
                    }
                  }
                }
              ]
            }
          }));
          return{
            students:n, averageScore:i, highestScore:u, lowestScore:l, options:p
          }
        }
      });
      const Jt=(0, f.A)(Yt, (function(){
        var e=this, t=e.$createElement, r=e._self._c||t;
        return r("div", {
          staticClass:"chart-page"
        }, [
          r("div", {
            staticClass:"chart-page-title"
          }, [
            e._v(e._s(e.$t("courseScore.scoreItemGroup.totalScoreStatistics")))
          ]), e._v(" "), r("div", {
            staticClass:"score-summary-section"
          }, [
            r("div", {
              staticClass:"summary-card"
            }, [
              r("div", {
                staticClass:"summary-label"
              }, [
                e._v(e._s(e.$t("courseScore.scoreItemGroup.avgScore")))
              ]), e._v(" "), r("div", {
                staticClass:"summary-info"
              }, [
                r("span", {
                  staticClass:"value"
                }, [
                  e._v(e._s(e.averageScore))
                ]), e._v(" "), r("span", {
                  staticClass:"unit"
                }, [
                  e._v(e._s(e.$t("courseScore.scoreItemGroup.points")))
                ])
              ])
            ]), e._v(" "), r("div", {
              staticClass:"summary-card"
            }, [
              r("div", {
                staticClass:"summary-label"
              }, [
                e._v(e._s(e.$t("courseScore.scoreItemGroup.highestScore")))
              ]), e._v(" "), r("div", {
                staticClass:"summary-info"
              }, [
                r("span", {
                  staticClass:"value"
                }, [
                  e._v(e._s(e.highestScore))
                ]), e._v(" "), r("span", {
                  staticClass:"unit"
                }, [
                  e._v(e._s(e.$t("courseScore.scoreItemGroup.points")))
                ])
              ])
            ]), e._v(" "), r("div", {
              staticClass:"summary-card"
            }, [
              r("div", {
                staticClass:"summary-label"
              }, [
                e._v(e._s(e.$t("courseScore.scoreItemGroup.lowestScore")))
              ]), e._v(" "), r("div", {
                staticClass:"summary-info"
              }, [
                r("span", {
                  staticClass:"value"
                }, [
                  e._v(e._s(e.lowestScore))
                ]), e._v(" "), r("span", {
                  staticClass:"unit"
                }, [
                  e._v(e._s(e.$t("courseScore.scoreItemGroup.points")))
                ])
              ])
            ])
          ]), e._v(" "), r("div", {
            staticClass:"chart-section-div"
          }, [
            r("ECharts", {
              staticStyle:{
                height:"100%", width:"100%"
              }, attrs:{
                options:e.options, autoresize:""
              }
            })
          ], 1)
        ])
      }), [
      ], !1, null, "458eb4d4", null).exports;
      const Qt=(0, s.pM)({
        name:"ScoreExportModal", components:{
          SvgIcon:u.A
        }, props:{
          value:{
            type:Boolean, default:!1
          }
        }, emits:[
          "on-export", "on-custom-export"
        ], setup:function(e, t){
          var r=t.emit, n=(0, x.hRP)(e, "value", r, {
            eventName:"input"
          }), o=(0, s.KR)("generic");
          return{
            visible:n, selectedOption:o, selectOption:function(e){
              o.value=e
            }, handleExport:function(){
              "template"===o.value?r("on-custom-export"):r("on-export"), o.value="generic", n.value=!1
            }, handleCancel:function(){
              o.value="generic", n.value=!1
            }
          }
        }
      });
      const Xt=(0, f.A)(Qt, (function(){
        var e=this, t=e.$createElement, r=e._self._c||t;
        return r("Modal", {
          attrs:{
            "class-name":"vertical-center-modal", title:e.$t("courseScore.scoreItemGroup.exportScore"), "mask-closable":!1, closable:!0, width:"600"
          }, on:{
            "on-cancel":e.handleCancel
          }, scopedSlots:e._u([
            {
              key:"footer", fn:function(){
                return[
                  r("div", {
                    staticClass:"flex"
                  }, [
                    r("Button", {
                      attrs:{
                        type:"primary"
                      }, on:{
                        click:e.handleExport
                      }
                    }, [
                      e._v(e._s(e.$t("export")))
                    ]), e._v(" "), r("Button", {
                      on:{
                        click:e.handleCancel
                      }
                    }, [
                      e._v(e._s(e.$t("cancel")))
                    ])
                  ], 1)
                ]
              }, proxy:!0
            }
          ]), model:{
            value:e.visible, callback:function(t){
              e.visible=t
            }, expression:"visible"
          }
        }, [
          r("div", {
            staticClass:"score-export-container"
          }, [
            r("Row", {
              attrs:{
                gutter:20
              }
            }, [
              r("Col", {
                attrs:{
                  span:"12"
                }
              }, [
                r("div", {
                  class:[
                    "export-option", {
                      selected:"generic"===e.selectedOption
                    }
                  ], on:{
                    click:function(t){
                      return e.selectOption("generic")
                    }
                  }
                }, [
                  r("div", {
                    staticClass:"export-card"
                  }, [
                    r("div", {
                      staticClass:"checkmark"
                    }, [
                      r("i", {
                        staticClass:"font font-check-mark"
                      })
                    ]), e._v(" "), r("div", {
                      staticClass:"card-content"
                    }, [
                      r("div", {
                        staticClass:"icon-placeholder green-bg"
                      }, [
                        r("SvgIcon", {
                          attrs:{
                            name:"resources-cover-excel-v1", size:28
                          }
                        })
                      ], 1), e._v(" "), r("div", {
                        staticClass:"export-type-text"
                      }, [
                        e._v(e._s(e.$t("courseScore.scoreItemGroup.commonExport")))
                      ]), e._v(" "), r("div", {
                        staticClass:"exort-desc-text"
                      }, [
                        e._v(e._s(e.$t("courseScore.scoreItemGroup.commonExportTip")))
                      ])
                    ])
                  ])
                ])
              ]), e._v(" "), r("Col", {
                attrs:{
                  span:"12"
                }
              }, [
                r("div", {
                  class:[
                    "export-option", {
                      selected:"template"===e.selectedOption
                    }
                  ], on:{
                    click:function(t){
                      return e.selectOption("template")
                    }
                  }
                }, [
                  r("div", {
                    staticClass:"export-card"
                  }, [
                    r("div", {
                      staticClass:"checkmark"
                    }, [
                      r("i", {
                        staticClass:"font font-check-mark"
                      })
                    ]), e._v(" "), r("div", {
                      staticClass:"card-content"
                    }, [
                      r("div", {
                        staticClass:"icon-placeholder orange-bg"
                      }, [
                        r("SvgIcon", {
                          attrs:{
                            name:"template-score", size:28
                          }
                        })
                      ], 1), e._v(" "), r("div", {
                        staticClass:"export-type-text"
                      }, [
                        e._v(e._s(e.$t("courseScore.scoreItemGroup.customExport")))
                      ]), e._v(" "), r("div", {
                        staticClass:"export-desc-text"
                      }, [
                        e._v(e._s(e.$t("courseScore.scoreItemGroup.customExportTip")))
                      ])
                    ])
                  ])
                ])
              ])
            ], 1)
          ], 1)
        ])
      }), [
      ], !1, null, "43f1f394", null).exports;
      var Zt=r(248124), er=function(){
        return(er=Object.assign||function(e){
          for(var t, r=1, n=arguments.length;
          r<n;
          r++)for(var o in t=arguments[
            r
          ])Object.prototype.hasOwnProperty.call(t, o)&&(e[
            o
          ]
          =t[
            o
          ]);
          return e
        }).apply(this, arguments)
      }, tr=function(e, t, r, n){
        return new(r||(r=Promise))((function(o, a){
          function s(e){
            try{
              c(n.next(e))
            }
            catch(e){
              a(e)
            }
          }
          function i(e){
            try{
              c(n.throw(e))
            }
            catch(e){
              a(e)
            }
          }
          function c(e){
            var t;
            e.done?o(e.value):(t=e.value, t instanceof r?t:new r((function(e){
              e(t)
            }))).then(s, i)
          }
          c((n=n.apply(e, t||[
          ])).next())
        }))
      }, rr=function(e, t){
        var r, n, o, a, s={
          label:0, sent:function(){
            if(1&o[
              0
            ])throw o[
              1
            ];
            return o[
              1
            ]
          }, trys:[
          ], ops:[
          ]
        };
        return a={
          next:i(0), throw:i(1), return:i(2)
        }, "function"==typeof Symbol&&(a[
          Symbol.iterator
        ]
        =function(){
          return this
        }), a;
        function i(i){
          return function(c){
            return function(i){
              if(r)throw new TypeError("Generator is already executing.");
              for(;
              a&&(a=0, i[
                0
              ]
              &&(s=0)), s;
              )try{
                if(r=1, n&&(o=2&i[
                  0
                ]
                ?n.return:i[
                  0
                ]
                ?n.throw||((o=n.return)&&o.call(n), 0):n.next)&&!(o=o.call(n, i[
                  1
                ])).done)return o;
                switch(n=0, o&&(i=[
                  2&i[
                    0
                  ], o.value
                ]), i[
                  0
                ]){
                  case 0:case 1:o=i;
                  break;
                  case 4:return s.label++, {
                    value:i[
                      1
                    ], done:!1
                  };
                  case 5:s.label++, n=i[
                    1
                  ], i=[
                    0
                  ];
                  continue;
                  case 7:i=s.ops.pop(), s.trys.pop();
                  continue;
                  default:if(!(o=s.trys, (o=o.length>0&&o[
                    o.length-1
                  ])||6!==i[
                    0
                  ]
                  &&2!==i[
                    0
                  ])){
                    s=0;
                    continue
                  }
                  if(3===i[
                    0
                  ]
                  &&(!o||i[
                    1
                  ]
                  >o[
                    0
                  ]
                  &&i[
                    1
                  ]
                  <o[
                    3
                  ])){
                    s.label=i[
                      1
                    ];
                    break
                  }
                  if(6===i[
                    0
                  ]
                  &&s.label<o[
                    1
                  ]){
                    s.label=o[
                      1
                    ], o=i;
                    break
                  }
                  if(o&&s.label<o[
                    2
                  ]){
                    s.label=o[
                      2
                    ], s.ops.push(i);
                    break
                  }
                  o[
                    2
                  ]
                  &&s.ops.pop(), s.trys.pop();
                  continue
                }
                i=t.call(e, s)
              }
              catch(e){
                i=[
                  6, e
                ], n=0
              }
              finally{
                r=o=0
              }
              if(5&i[
                0
              ])throw i[
                1
              ];
              return{
                value:i[
                  0
                ]
                ?i[
                  1
                ]
                :void 0, done:!0
              }
            }
            ([
              i, c
            ])
          }
        }
      };
      const nr=(0, s.pM)({
        name:"score-page", components:{
          TotalScore:Mt, GroupScore:Wt, SvgIcon:u.A, TooltipExt:i.A, AddScoreItem:ye, AlertMessage:Ft, chartPage:Jt, TreeSelect:fe.A, ExportScoreModal:Xt
        }, props:{
          course:{
            type:Object
          }
        }, setup:function(e){
          var t, r, n=this, o=(0, s.KR)([
          ]), c=(0, s.KR)("total"), u=(0, s.KR)(""), d=(0, s.KR)(!1), p=(0, s.KR)("list"), v=(0, s.KR)(), f=(0, s.KR)(), m=(0, s.KR)([
          ]), h=(0, s.KR)([
          ]), _=(0, s.KR)([
          ]), g=(0, s.KR)(!1);
          (0, s.wB)((function(){
            return ct.loaded
          }), (function(e){
            if(e){
              var t=a.default.t("notSpecifiedText");
              m.value=(0, me.oM)(ct.departments.map((function(e){
                return er(er({
                }, e), {
                  name:e.name||t
                })
              }))), h.value=ct.grades.map((function(e){
                return{
                  id:e.id, title:e.name||t
                }
              })), _.value=ct.classes.map((function(e){
                return{
                  id:e.id, title:e.name||t
                }
              }))
            }
          }), {
            immediate:!0
          });
          var b=(0, s.EW)((function(){
            return f.value?f.value.clientHeight-136:0
          })), y=(0, s.EW)((function(){
            return v.value?v.value.scoreStatus:""
          })), S=(0, s.EW)((function(){
            return new RegExp(u.value, "g")
          })), w=(0, s.EW)((function(){
            var e;
            return null===(e=window.orgSettings)||void 0===e?void 0:e.splitDepartmentsAndGradesAndHideClasses
          })), I=function(e){
            var t, r, n;
            if(u.value&&!S.value.test(e.name)&&!S.value.test(e.user_no))return!1;
            for(var o="total"===c.value?ct.condition.groupScore:ct.condition.score, a=0, s=Object.entries(o);
            a<s.length;
            a++){
              var i=s[
                a
              ], l=i[
                0
              ], d=i[
                1
              ];
              if(d){
                var p=e[
                  l
                ];
                if("unscored"===d.scoreState){
                  if(P().isNumber(p)&&p>-1)return!1
                }
                else{
                  if("all"===d.scoreState)continue;
                  if((d.scoreLowLimit||d.scoreUpperLimit)&&!(P().isNumber(p)&&p>=d.scoreLowLimit&&p<=d.scoreUpperLimit))return!1
                }
              }
            }
            for(var v=0, f=Object.entries(ct.condition.filters);
            v<f.length;
            v++){
              var m=f[
                v
              ], h=(l=m[
                0
              ], m[
                1
              ]);
              if(!P().isEmpty(h))if("departmentIds"===l){
                if(!h.includes((null===(t=e.department)||void 0===t?void 0:t.id)||0))return!1
              }
              else if("gradeIds"===l){
                if(!h.includes((null===(r=e.grade)||void 0===r?void 0:r.id)||0))return!1
              }
              else if("classIds"===l&&!h.includes((null===(n=e.klass)||void 0===n?void 0:n.id)||0))return!1
            }
            return!0
          }, x=function(){
            ct.loaded&&(ct.students=ct.allStudents.filter(I), ve.A.$emit("clear-sorted-by"))
          };
          (0, s.wB)((function(){
            return e.course
          }), (function(){
            return tr(n, void 0, void 0, (function(){
              var t;
              return rr(this, (function(r){
                switch(r.label){
                  case 0:return e.course&&e.course.id?[
                    4, (0, l.Ad)(e.course.id)
                  ]
                  :[
                    3, 2
                  ];
                  case 1:t=r.sent(), o.value=t.filter((function(e){
                    return e.id
                  })), Dt(e.course.id, o.value), r.label=2;
                  case 2:return[
                    2
                  ]
                }
              }))
            }))
          }), {
            immediate:!0
          }), (0, s.wB)(c, (function(){
            return x()
          }));
          var C=(null===(r=null===(t=window.globalData)||void 0===t?void 0:t.course)||void 0===r?void 0:r.isSimulatingInstructor)||!1, k=function(e){
            var t;
            if(void 0===e&&(e=!0), "XMU"===(null===(t=window.globalData)||void 0===t?void 0:t.deliveryOrg)&&e)g.value=!0;
            else{
              var r="score/list/excel?column=all&conditions=".concat(JSON.stringify({
              }));
              window.location.href=r
            }
          };
          return(0, s.sV)((function(){
            return tr(n, void 0, void 0, (function(){
              var t;
              return rr(this, (function(r){
                switch(r.label){
                  case 0:return e.course&&e.course.id?(t=v, [
                    4, (0, l.z9)(e.course.id)
                  ]):[
                    3, 2
                  ];
                  case 1:t.value=r.sent(), r.label=2;
                  case 2:return ve.A.$on("send-score-filter", (function(e){
                    if(ct.loaded){
                      var t=e.key;
                      t.startsWith("item-")?ct.condition.score[
                        t
                      ]
                      =e.value:ct.condition.groupScore[
                        t
                      ]
                      =e.value, ct.students=ct.allStudents.filter(I), ve.A.$emit("clear-sorted-by")
                    }
                  })), [
                    2
                  ]
                }
              }))
            }))
          })), (0, s.xo)((function(){
            ve.A.$off("send-score-filter")
          })), {
            addOneScoreItemVisible:d, scoreItemGroups:o, activeTab:c, inputValue:u, search:x, renderLabel:function(e){
              return function(t){
                return t(i.A, {
                  props:{
                    transfer:!0, placement:"top", effect:"light", "white-space":"normal", text:e
                  }
                })
              }
            }, addScoreItem:function(e){
              if("addOne"===e)d.value=!0;
              else{
                var t=document.querySelector("[ng-controller=NewScoreCtrl]"), r=(0, Kt.useAngularScope)(t);
                r.openBatchAddScoreItemModal(), r.scoreItemGroups=o.value
              }
            }, jumpToScoreGroupSetting:function(){
              e.course&&e.course.id&&(window.location.href="/course/".concat(e.course.id, "/score-item-group/setting"))
            }, switchDisplayMode:function(e){
              p.value=e, console.log("displayMode is ", p.value)
            }, displayMode:p, openPublicScoreModal:function(){
              Zt("#course-announce-score-settings").foundation("reveal", "open")
            }, scoreStatus:v, scoreStatusLabel:y, openPublishScoreConfirm:function(){
              var e=document.querySelector("[ng-controller=NewScoreCtrl]");
              (0, Kt.useAngularScope)(e).students=ct.allStudents, Zt("#score-confirmation-popup").foundation("reveal", "open")
            }, height:b, scoreContentRef:f, filterDepartments:m, departmentChanged:function(e){
              ct.condition.filters.departmentIds=e.map((function(e){
                return e.id
              })), ct.students=ct.allStudents.filter(I)
            }, filterGrades:h, gradeChanged:function(e){
              ct.condition.filters.gradeIds=e.map((function(e){
                return e.id
              })), ct.students=ct.allStudents.filter(I)
            }, filterClasses:_, classChanged:function(e){
              ct.condition.filters.classIds=e.map((function(e){
                return e.id
              })), ct.students=ct.allStudents.filter(I)
            }, exportScore:k, exportScoreByType:function(e){
              "details"!==e?k():window.location.href="score/detail/excel"
            }, hideClasses:w, exportModalVisible:g, exportCustomScore:function(){
              window.location.href="score/custom/excel"
            }, isSimulatingInstructor:C
          }
        }
      });
      const or=(0, f.A)(nr, (function(){
        var e=this, t=e.$createElement, r=e._self._c||t;
        return r("div", {
          attrs:{
            id:"score-page"
          }
        }, [
          r("AlertMessage", {
            attrs:{
              "score-status":e.scoreStatus
            }
          }), e._v(" "), r("div", {
            staticClass:"score-config-area"
          }, [
            r("div", {
              staticClass:"config-left-area"
            }, [
              e.scoreStatus&&"submitted"!==e.scoreStatus.scoreStatus&&!e.isSimulatingInstructor?r("Dropdown", {
                on:{
                  "on-click":e.addScoreItem
                }, scopedSlots:e._u([
                  {
                    key:"list", fn:function(){
                      return[
                        r("DropdownMenu", [
                          r("DropdownItem", {
                            attrs:{
                              name:"addOne"
                            }
                          }, [
                            e._v(e._s(e.$t("courseScore.scoreItemGroup.addOne")))
                          ]), e._v(" "), r("DropdownItem", {
                            attrs:{
                              name:"batchAdd"
                            }
                          }, [
                            e._v(e._s(e.$t("courseScore.scoreItemGroup.batchAdd")))
                          ])
                        ], 1)
                      ]
                    }, proxy:!0
                  }
                ], null, !1, 3636309533)
              }, [
                r("div", {
                  staticClass:"dropdown-header"
                }, [
                  r("div", {
                    staticClass:"dropdown-header-left"
                  }, [
                    r("SvgIcon", {
                      staticClass:"img", attrs:{
                        name:"add"
                      }
                    }), e._v(" "), r("div", {
                      staticClass:"dropdown-header-title"
                    }, [
                      e._v(e._s(e.$t("courseScore.scoreItemGroup.addScore")))
                    ])
                  ], 1), e._v(" "), r("div", {
                    staticClass:"dropdown-header-right"
                  }, [
                    r("SvgIcon", {
                      staticClass:"img", attrs:{
                        name:"arrow-down-solid"
                      }
                    })
                  ], 1)
                ])
              ]):e._e(), e._v(" "), e.scoreStatus&&"submitted"!==e.scoreStatus.scoreStatus&&!e.isSimulatingInstructor?r("Button", {
                on:{
                  click:e.jumpToScoreGroupSetting
                }
              }, [
                r("i", {
                  staticClass:"font font-score-percent"
                }), e._v("\n        "+e._s(e.$t("courseScore.scoreItemGroup.gradeRatioSetting"))+"\n      ")
              ]):e._e(), e._v(" "), r("Dropdown", {
                on:{
                  "on-click":e.exportScoreByType
                }, scopedSlots:e._u([
                  {
                    key:"list", fn:function(){
                      return[
                        r("DropdownMenu", [
                          r("DropdownItem", {
                            attrs:{
                              name:"overview"
                            }
                          }, [
                            e._v(e._s(e.$t("courseScore.scoreItemGroup.exportOverview")))
                          ]), e._v(" "), r("DropdownItem", {
                            attrs:{
                              name:"details"
                            }
                          }, [
                            e._v(e._s(e.$t("courseScore.scoreItemGroup.exportDetails")))
                          ])
                        ], 1)
                      ]
                    }, proxy:!0
                  }
                ])
              }, [
                r("div", {
                  staticClass:"dropdown-export-button"
                }, [
                  r("span", [
                    e._v(e._s(e.$t("courseScore.scoreItemGroup.export")))
                  ])
                ])
              ]), e._v(" "), e.scoreStatus&&[
                "unsubmitted", "submitting", "partial_submitted"
              ].includes(e.scoreStatus.scoreStatus)&&e.scoreStatus.canPublishScore&&!e.isSimulatingInstructor?r("Button", {
                on:{
                  click:e.openPublishScoreConfirm
                }
              }, [
                e._v("\n        "+e._s(e.$t("courseScore.scoreItemGroup.submitScore"))+"\n      ")
              ]):e._e(), e._v(" "), e.scoreStatus&&"submitted"!==e.scoreStatus.scoreStatus&&!e.isSimulatingInstructor?r("Button", {
                on:{
                  click:e.openPublicScoreModal
                }
              }, [
                e._v("\n        "+e._s(e.$t("courseScore.scoreItemGroup.publicScore"))+"\n      ")
              ]):e._e()
            ], 1), e._v(" "), r("div", {
              staticClass:"config-right-area"
            }, [
              r("div", {
                staticClass:"display-mode-buttons"
              }, [
                r("div", {
                  staticClass:"display-mode-button list", class:{
                    active:"list"===e.displayMode
                  }, on:{
                    click:function(t){
                      return e.switchDisplayMode("list")
                    }
                  }
                }, [
                  r("SvgIcon", {
                    attrs:{
                      name:"list"
                    }
                  }), e._v("\n          "+e._s(e.$t("courseScore.scoreItemGroup.list"))+"\n        ")
                ], 1), e._v(" "), r("div", {
                  staticClass:"display-mode-button chart", class:{
                    active:"chart"===e.displayMode
                  }, on:{
                    click:function(t){
                      return e.switchDisplayMode("chart")
                    }
                  }
                }, [
                  r("SvgIcon", {
                    attrs:{
                      name:"chart"
                    }
                  }), e._v("\n          "+e._s(e.$t("courseScore.scoreItemGroup.chart"))+"\n        ")
                ], 1)
              ])
            ])
          ]), e._v(" "), r("div", {
            directives:[
              {
                name:"show", rawName:"v-show", value:"list"===e.displayMode, expression:"displayMode === 'list'"
              }
            ], ref:"scoreContentRef", staticClass:"score-content-area"
          }, [
            r("div", {
              staticClass:"score-filter-area"
            }, [
              r("div", {
                staticClass:"filter-left-area"
              }, [
                r("div", [
                  r("span", {
                    staticClass:"title"
                  }, [
                    e._v(e._s(e.$t("department")))
                  ]), e._v(" "), r("TreeSelect", {
                    attrs:{
                      data:e.filterDepartments, "min-width":142
                    }, on:{
                      "on-checked-data":e.departmentChanged
                    }
                  })
                ], 1), e._v(" "), r("div", [
                  r("span", {
                    staticClass:"title"
                  }, [
                    e._v(e._s(e.$t("grade")))
                  ]), e._v(" "), r("TreeSelect", {
                    attrs:{
                      data:e.filterGrades, "min-width":142
                    }, on:{
                      "on-checked-data":e.gradeChanged
                    }
                  })
                ], 1), e._v(" "), e.hideClasses?r("div", [
                  r("span", {
                    staticClass:"title"
                  }, [
                    e._v(e._s(e.$t("clazz")))
                  ]), e._v(" "), r("TreeSelect", {
                    attrs:{
                      data:e.filterClasses, "min-width":142
                    }, on:{
                      "on-checked-data":e.classChanged
                    }
                  })
                ], 1):e._e()
              ]), e._v(" "), r("div", {
                staticClass:"filter-right-area"
              }, [
                r("Input", {
                  staticStyle:{
                    width:"200px"
                  }, attrs:{
                    suffix:"ios-search", clearable:"", search:"", placeholder:e.$t("courseScore.scoreItemGroup.scorePlaceholder")
                  }, on:{
                    "on-change":e.search
                  }, model:{
                    value:e.inputValue, callback:function(t){
                      e.inputValue=t
                    }, expression:"inputValue"
                  }
                })
              ], 1)
            ]), e._v(" "), r("Tabs", {
              staticClass:"tabs", attrs:{
                name:"score-item-group-tab", animated:!1
              }, model:{
                value:e.activeTab, callback:function(t){
                  e.activeTab=t
                }, expression:"activeTab"
              }
            }, [
              r("TabPane", {
                key:0, attrs:{
                  label:e.$t("courseScore.scoreItemGroup.totalScore"), name:"total"
                }
              }, [
                r("TotalScore", {
                  attrs:{
                    "score-item-groups":e.scoreItemGroups, "score-status":e.scoreStatusLabel, height:e.height
                  }
                })
              ], 1), e._v(" "), e._l(e.scoreItemGroups, (function(t){
                return r("TabPane", {
                  key:t.id, attrs:{
                    label:e.renderLabel(t.name), name:""+t.id
                  }
                }, [
                  e.course?r("GroupScore", {
                    attrs:{
                      "item-group":t, height:e.height, "course-id":e.course.id, "score-item-groups":e.scoreItemGroups, "score-status":e.scoreStatusLabel
                    }
                  }):e._e()
                ], 1)
              }))
            ], 2)
          ], 1), e._v(" "), r("div", {
            directives:[
              {
                name:"show", rawName:"v-show", value:"chart"===e.displayMode, expression:"displayMode === 'chart'"
              }
            ], staticClass:"chart-score-content-area"
          }, [
            e.course?r("chartPage", {
              attrs:{
                "course-id":e.course.id
              }
            }):e._e()
          ], 1), e._v(" "), e.scoreItemGroups.length>0&&e.course?r("AddScoreItem", {
            attrs:{
              "course-id":e.course.id, "score-item-groups":e.scoreItemGroups
            }, model:{
              value:e.addOneScoreItemVisible, callback:function(t){
                e.addOneScoreItemVisible=t
              }, expression:"addOneScoreItemVisible"
            }
          }):e._e(), e._v(" "), r("ExportScoreModal", {
            on:{
              "on-export":function(t){
                return e.exportScore(!1)
              }, "on-custom-export":e.exportCustomScore
            }, model:{
              value:e.exportModalVisible, callback:function(t){
                e.exportModalVisible=t
              }, expression:"exportModalVisible"
            }
          })
        ], 1)
      }), [
      ], !1, null, "3415d172", null).exports;
      var ar=r(86023), sr=function(){
        return(sr=Object.assign||function(e){
          for(var t, r=1, n=arguments.length;
          r<n;
          r++)for(var o in t=arguments[
            r
          ])Object.prototype.hasOwnProperty.call(t, o)&&(e[
            o
          ]
          =t[
            o
          ]);
          return e
        }).apply(this, arguments)
      };
      const ir=(0, s.pM)({
        name:"batch-add-score-items", props:{
          scoreItemGroups:{
            type:Array
          }
        }, components:{
          ValidateResult:ar.A, DatePickerExt:k.default
        }, setup:function(e, t){
          var r=(0, s.EW)((function(){
            return{
              scored:!0, groupId:e.scoreItemGroups&&e.scoreItemGroups.length>0?e.scoreItemGroups[
                0
              ].id:0, announceScoreType:"immediate_announce", announceScoreTime:C().toISOString()
            }
          })), n=(0, s.KR)(sr({
          }, r.value)), o=function(){
            var e=sr({
            }, n.value);
            window.dispatchEvent(new CustomEvent("send-score-item-form-data", {
              detail:(0, we.decamelizeKeys)(e)
            }))
          };
          (0, s.wB)((function(){
            return e.scoreItemGroups
          }), (function(){
            e.scoreItemGroups&&e.scoreItemGroups.length>0&&(n.value.groupId=e.scoreItemGroups[
              0
            ].id, o())
          }));
          return{
            formData:n, onChangeAnnounceScore:function(e){
              n.value.announceScoreTime="no_announce"===e?null:C().toISOString(), o()
            }, onChange:function(){
              o()
            }
          }
        }
      });
      const cr=(0, f.A)(ir, (function(){
        var e=this, t=e.$createElement, r=e._self._c||t;
        return r("Form", {
          staticClass:"add-score-item-form-area", attrs:{
            model:e.formData, "label-position":"left", "label-width":120
          }
        }, [
          r("FormItem", {
            staticClass:"no-margin-bottom select-score-group", attrs:{
              label:e.$t("courseScore.scoreItemGroup.scoreGroupName"), required:"", props:"groupId"
            }
          }, [
            r("Select", {
              on:{
                "on-change":e.onChange
              }, model:{
                value:e.formData.groupId, callback:function(t){
                  e.$set(e.formData, "groupId", t)
                }, expression:"formData.groupId"
              }
            }, e._l(e.scoreItemGroups, (function(e){
              return r("Option", {
                key:e.id, attrs:{
                  value:e.id, label:e.name
                }
              })
            })), 1)
          ], 1), e._v(" "), r("FormItem", {
            staticClass:"publish-score", attrs:{
              label:e.$t("homework.publishScore"), props:"announceScoreType"
            }
          }, [
            r("RadioGroup", {
              on:{
                "on-change":e.onChangeAnnounceScore
              }, model:{
                value:e.formData.announceScoreType, callback:function(t){
                  e.$set(e.formData, "announceScoreType", t)
                }, expression:"formData.announceScoreType"
              }
            }, [
              r("Radio", {
                attrs:{
                  label:"immediate_announce"
                }
              }, [
                e._v(e._s(e.$t("homework.publishNow")))
              ]), e._v(" "), r("Radio", {
                attrs:{
                  label:"no_announce"
                }
              }, [
                e._v(e._s(e.$t("homework.willNotPublish")))
              ]), e._v(" "), r("Radio", {
                attrs:{
                  label:"timed_announce"
                }
              }, [
                e._v(e._s(e.$t("homework.customPublishScoreTime")))
              ])
            ], 1), e._v(" "), "timed_announce"===e.formData.announceScoreType?r("div", [
              r("DatePickerExt", {
                staticStyle:{
                  width:"175px"
                }, attrs:{
                  type:"datetime", format:"yyyy-MM-dd HH:mm", clearable:!1
                }, model:{
                  value:e.formData.announceScoreTime, callback:function(t){
                    e.$set(e.formData, "announceScoreTime", t)
                  }, expression:"formData.announceScoreTime"
                }
              })
            ], 1):e._e()
          ], 1)
        ], 1)
      }), [
      ], !1, null, "4a545dd2", null).exports;
      var ur=r(384027), lr=(r(158649), "ivu-input-number"), dr="ivu-icon";
      function pr(e, t){
        var r, n, o;
        try{
          r=e.toString().split(".")[
            1
          ].length
        }
        catch(e){
          r=0
        }
        try{
          n=t.toString().split(".")[
            1
          ].length
        }
        catch(e){
          n=0
        }
        return o=Math.pow(10, Math.max(r, n)), (Math.round(e*o)+Math.round(t*o))/o
      }
      const vr={
        name:"InputNumber", props:{
          max:{
            type:Number, default:1/0
          }, min:{
            type:Number, default:-1/0
          }, step:{
            type:Number, default:1
          }, activeChange:{
            type:Boolean, default:!0
          }, value:{
            type:Number, default:1
          }, size:{
            validator:e=>!0, default(){
              return this.$IVIEW&&""!==this.$IVIEW.size?this.$IVIEW.size:"default"
            }
          }, disabled:{
            type:Boolean, default:!1
          }, autofocus:{
            type:Boolean, default:!1
          }, readonly:{
            type:Boolean, default:!1
          }, editable:{
            type:Boolean, default:!0
          }, name:{
            type:String
          }, precision:{
            type:Number
          }, elementId:{
            type:String
          }, formatter:{
            type:Function
          }, parser:{
            type:Function
          }, placeholder:{
            type:String, default:""
          }
        }, data(){
          return{
            focused:!1, upDisabled:!1, downDisabled:!1, currentValue:this.value
          }
        }, computed:{
          wrapClasses(){
            return[
              "".concat(lr), {
                [
                  "".concat(lr, "-").concat(this.size)
                ]
                :!!this.size, [
                  "".concat(lr, "-disabled")
                ]
                :this.disabled, [
                  "".concat(lr, "-focused")
                ]
                :this.focused
              }
            ]
          }, handlerClasses:()=>"".concat(lr, "-handler-wrap"), upClasses(){
            return[
              "".concat(lr, "-handler"), "".concat(lr, "-handler-up"), {
                [
                  "".concat(lr, "-handler-up-disabled")
                ]
                :this.upDisabled
              }
            ]
          }, innerUpClasses:()=>"".concat(lr, "-handler-up-inner ").concat(dr, " ").concat(dr, "-ios-arrow-up"), downClasses(){
            return[
              "".concat(lr, "-handler"), "".concat(lr, "-handler-down"), {
                [
                  "".concat(lr, "-handler-down-disabled")
                ]
                :this.downDisabled
              }
            ]
          }, innerDownClasses:()=>"".concat(lr, "-handler-down-inner ").concat(dr, " ").concat(dr, "-ios-arrow-down"), inputWrapClasses:()=>"".concat(lr, "-input-wrap"), inputClasses:()=>"".concat(lr, "-input"), precisionValue(){
            return this.currentValue&&this.precision?this.formatByPrecision(this.currentValue, this.precision):this.currentValue
          }, formatterValue(){
            return this.formatter&&null!==this.precisionValue?this.formatter(this.precisionValue):this.precisionValue
          }
        }, methods:{
          formatByPrecision:(e, t)=>Math.floor(e*Math.pow(10, t))/Math.pow(10, t), preventDefault(e){
            e.preventDefault()
          }, up(e){
            var t=Number(e.target.value);
            this.upDisabled&&Number.isNaN(t)||this.changeStep("up", e)
          }, down(e){
            var t=Number(e.target.value);
            this.downDisabled&&Number.isNaN(t)||this.changeStep("down", e)
          }, changeStep(e, t){
            if(!this.disabled&&!this.readonly){
              var r=Number(t.target.value), n=Number(this.currentValue), o=Number(this.step);
              if(!Number.isNaN(n)){
                if(!Number.isNaN(r))if("up"===e){
                  if(!(pr(r, o)<=this.max))return;
                  n=r
                }
                else if("down"===e){
                  if(!(pr(r, -o)>=this.min))return;
                  n=r
                }
                "up"===e?n=pr(n, o):"down"===e&&(n=pr(n, -o)), this.setValue(n)
              }
            }
          }, setValue(e){
            e&&!Number.isNaN(this.precision)&&(e=Number(this.formatByPrecision(e, this.precision)));
            var t=this.min, r=this.max;
            null!==e&&(e>r?e=r:e<t&&(e=t)), this.$nextTick((()=>{
              this.currentValue=e, this.$emit("input", e), this.$emit("on-change", e)
            }))
          }, focus(e){
            this.focused=!0, this.$emit("on-focus", e)
          }, blur(){
            this.focused=!1, this.$emit("on-blur")
          }, keyDown(e){
            38===e.keyCode?(e.preventDefault(), this.up(e)):40===e.keyCode&&(e.preventDefault(), this.down(e))
          }, change(e){
            if(("change"!==e.type||!this.activeChange)&&("input"!==e.type||this.activeChange)){
              var t=e.target.value.trim();
              if(this.parser&&(t=this.parser(t)), 0===t.length)return this.setValue(0), void(e.target.value=0);
              if("input"!==e.type||!t.match(/^-?\.?$|\.$/g)){
                var r=this.precision, n=this.currentValue;
                if(r){
                  var o="".concat(t).match(/\./g);
                  o&&o.length>=2&&(n="".concat(this.currentValue, "."))
                }
                t=Number(t), Number.isNaN(t)?e.target.value=n:(this.currentValue=t, this.setValue(t))
              }
            }
          }, changeVal(e){
            if(e=Number(e), Number.isNaN(e))this.upDisabled=!0, this.downDisabled=!0;
            else{
              var t=this.step;
              this.upDisabled=e+t>this.max, this.downDisabled=e-t<this.min
            }
          }
        }, mounted(){
          this.changeVal(this.currentValue)
        }, watch:{
          value(e){
            this.currentValue=e
          }, currentValue(e){
            this.changeVal(e), this.$nextTick((()=>{
              if(this.precision){
                var e=(this.currentValue||0).toString().length, t=this.$refs.precisionCursor;
                t.selectionStart=t.selectionEnd=e
              }
            }))
          }, min(){
            this.changeVal(this.currentValue)
          }, max(){
            this.changeVal(this.currentValue)
          }
        }
      };
      const fr=(0, f.A)(vr, (function(){
        var e=this, t=e.$createElement, r=e._self._c||t;
        return r("div", {
          class:e.wrapClasses
        }, [
          r("div", {
            class:e.handlerClasses
          }, [
            r("a", {
              class:e.upClasses, on:{
                click:e.up
              }
            }, [
              r("span", {
                class:e.innerUpClasses, on:{
                  click:e.preventDefault
                }
              })
            ]), e._v(" "), r("a", {
              class:e.downClasses, on:{
                click:e.down
              }
            }, [
              r("span", {
                class:e.innerDownClasses, on:{
                  click:e.preventDefault
                }
              })
            ])
          ]), e._v(" "), r("div", {
            class:e.inputWrapClasses
          }, [
            r("input", {
              ref:"precisionCursor", class:e.inputClasses, attrs:{
                id:e.elementId, disabled:e.disabled, autocomplete:"off", spellcheck:"false", autofocus:e.autofocus, readonly:e.readonly||!e.editable, name:e.name, placeholder:e.placeholder
              }, domProps:{
                value:e.formatterValue
              }, on:{
                focus:e.focus, blur:e.blur, keydown:function(t){
                  return t.stopPropagation(), e.keyDown(t)
                }, input:e.change, mouseup:e.preventDefault, change:e.change
              }
            })
          ])
        ])
      }), [
      ], !1, null, null, null).exports, mr=(0, s.pM)({
        components:{
          InputNumber:fr, SvgIcon:u.A
        }, model:{
          prop:"percentage", event:"input"
        }, props:{
          name:{
            type:String, required:!0
          }, icon:{
            type:String, required:!0
          }, percentage:{
            type:Number, default:0
          }, desc:{
            type:String, default:""
          }, disabled:{
            type:Boolean, default:!1
          }, max:{
            type:Number, default:100
          }
        }, setup:function(e, t){
          var r=(0, s.WQ)("hasChanged");
          return{
            percentageChange:function(e){
              r&&(r.value=!0), t.emit("input", null!=e?e:0)
            }, formatNumber:function(e){
              return Number(null!=e?e:0)
            }
          }
        }
      });
      const hr=(0, f.A)(mr, (function(){
        var e=this, t=e.$createElement, r=e._self._c||t;
        return r("div", {
          staticClass:"score-setting-category-wrapper"
        }, [
          r("div", {
            staticClass:"score-setting-category-name flex-shrink-0"
          }, [
            r("span", [
              r("SvgIcon", {
                class:e.icon, attrs:{
                  name:e.icon
                }
              })
            ], 1), e._v(" "), r("span", {
              staticClass:"break-all"
            }, [
              e._v(e._s(e.name))
            ])
          ]), e._v(" "), r("div", {
            staticClass:"score-setting-category-percentage flex-shrink-0"
          }, [
            r("InputNumber", {
              attrs:{
                value:e.percentage, max:e.max, min:0, disabled:e.disabled, formatter:e.formatNumber, precision:0
              }, on:{
                input:e.percentageChange
              }
            }), e._v("\n    %\n  ")
          ], 1), e._v(" "), r("div", {
            staticClass:"score-setting-category-desc"
          }, [
            e._v(e._s(e.desc))
          ]), e._v(" "), r("div", {
            staticClass:"score-setting-category-actions"
          }, [
            e._t("default")
          ], 2)
        ])
      }), [
      ], !1, null, "5e61044c", null).exports, _r=(0, s.pM)({
        components:{
          ScoreCategoryWrapper:hr, Button:ur.Button
        }, model:{
          prop:"percentage", event:"input"
        }, props:{
          percentage:{
            type:Number, default:0
          }, icon:{
            type:String, default:""
          }, name:{
            type:String, default:""
          }, desc:{
            type:String, default:""
          }, btnText:{
            type:String, default:""
          }, type:{
            type:String, required:!0
          }, left:{
            type:Number, required:!0
          }, scoreMode:{
            type:String
          }
        }, setup:function(e, t){
          return{
            handleClick:function(){
              t.emit("on-click", e.type)
            }, percentageChange:function(e){
              t.emit("input", e)
            }, max:(0, s.EW)((function(){
              return new qt.Decimal(e.left||0).plus(new qt.Decimal(e.percentage||0)).toNumber()
            })), disabled:"onlineVideo"===e.type&&!e.scoreMode
          }
        }
      });
      const gr=(0, f.A)(_r, (function(){
        var e=this, t=e.$createElement, r=e._self._c||t;
        return r("div", {
          staticClass:"score-setting-rollcall"
        }, [
          r("ScoreCategoryWrapper", {
            attrs:{
              name:e.name, icon:e.icon, desc:e.desc, percentage:e.percentage, max:e.max, disabled:e.disabled
            }, on:{
              input:e.percentageChange
            }
          }, [
            e.btnText?r("Button", {
              attrs:{
                ghost:"", size:"small"
              }, on:{
                click:e.handleClick
              }
            }, [
              e._v(e._s(e.btnText))
            ]):e._e()
          ], 1)
        ], 1)
      }), [
      ], !1, null, null, null).exports;
      var br=r(408576);
      const yr=(0, s.pM)({
        name:"activity-publish-status", props:{
          isInstructor:{
            type:Boolean, required:!0
          }, activity:{
            type:Object, required:!0
          }
        }, setup:e=>({
          unPublished:(0, s.EW)((()=>!e.activity.published))
        })
      });
      const Sr=(0, f.A)(yr, (function(){
        var e=this, t=e.$createElement, r=e._self._c||t;
        return e.unPublished?r("span", {
          staticClass:"publish-status-reminder", attrs:{
            "ng-if":"isInstructor"
          }
        }, [
          e._v("\n  "+e._s(e.$t("activityPublish.unpublishedReminder"))+"\n")
        ]):e._e()
      }), [
      ], !1, null, "0e26cde0", null).exports;
      var wr=function(){
        return(wr=Object.assign||function(e){
          for(var t, r=1, n=arguments.length;
          r<n;
          r++)for(var o in t=arguments[
            r
          ])Object.prototype.hasOwnProperty.call(t, o)&&(e[
            o
          ]
          =t[
            o
          ]);
          return e
        }).apply(this, arguments)
      }, Ir=function(e){
        return JSON.parse(JSON.stringify(e))
      }, xr=[
        {
          title:a.default.t("activityName"), slot:"title", width:320
        }, {
          title:a.default.t("weight"), slot:"scorePercentage"
        }
      ], Cr=function(e){
        return e.reduce((function(e, t){
          var r;
          return new qt.Decimal(null!==(r=t.value)&&void 0!==r?r:0).plus(e)
        }), new qt.Decimal(0)).toNumber()
      };
      const kr=(0, s.pM)({
        components:{
          ScoreCategoryWrapper:hr, Button:ur.Button, Icon:ur.Icon, RadioGroup:ur.RadioGroup, Radio:ur.Radio, Table:ur.Table, InputNumber:fr, ActivityPublishStatus:br.A, UnpublishedReminder:Sr, TooltipExt:i.A
        }, props:{
          activities:{
            type:Array, default:function(){
              return[
              ]
            }
          }, left:{
            type:Number, required:!0
          }, scoreType:{
            type:String, default:"percentage"
          }, weight:{
            type:Number, default:0
          }, isInstructor:Boolean
        }, setup:function(e, t){
          var r, n, o, a, i=(0, s.WQ)("hasChanged"), c=(0, s.KR)(0), u=(0, s.KR)(0), l=(0, s.KR)(100), d=(0, s.KR)(!1), p=(0, s.KR)(e.scoreType), v=(r=e.activities, n=p.value, o=Ir(r), a=Ir(r).map((function(e){
            return wr(wr({
            }, e), {
              value:0
            })
          })), "weight"===n?{
            weight:o, percentage:a
          }
          :{
            weight:a, percentage:o
          }), f=(0, s.KR)(v[
            p.value
          ]), m=function(e){
            var t=e.filter((function(e){
              return!1!==e.isScored
            })).length, r=100%t, n=(100-r)/t;
            e.forEach((function(e){
              !1!==e.isScored&&(e.value=n+r, r=0)
            }))
          };
          return(0, s.nT)((function(){
            c.value="weight"===p.value?e.weight:Cr(e.activities), u.value=Cr(e.activities), "weight"===p.value?l.value=new qt.Decimal(100).minus(Cr(e.activities)).toNumber():l.value=e.left
          })), (0, s.nT)((function(){
            f.value=v[
              p.value
            ]
          })), {
            totalPercentage:c, expanded:d, columns:xr, mode:p, totalWeight:u, weightLeft:l, data:f, percentageChange:function(t){
              var r, n;
              i&&(i.value=!0);
              var o=e.activities.find((function(e){
                return e.scoreItemId===t.scoreItemId
              })), a=f.value.find((function(e){
                return e.scoreItemId===t.scoreItemId
              }));
              a&&(a.value=null!==(r=t.value)&&void 0!==r?r:0), o&&(o.value=null!==(n=t.value)&&void 0!==n?n:0, u.value=Cr(e.activities)), "weight"!==p.value?c.value=u.value:l.value=new qt.Decimal(100).minus(Cr(e.activities)).toNumber()
            }, formatNumber:function(e){
              return Number(null!=e?e:0)
            }, modeChange:function(r){
              t.emit("on-score-type-change", r);
              var n=v[
                r
              ];
              e.activities.forEach((function(e, t){
                var r=n[
                  t
                ];
                r&&(e.value=r.value)
              }))
            }, changeTotalPercentage:function(e){
              "weight"===p.value&&(t.emit("on-weight-change", e), c.value=Number(null!=e?e:0))
            }, resetWeight:function(){
              "weight"===p.value&&(m(e.activities), m(f.value))
            }
          }
        }
      });
      const Ar=(0, f.A)(kr, (function(){
        var e=this, t=e.$createElement, r=e._self._c||t;
        return r("div", {
          staticClass:"score-setting-activity"
        }, [
          r("ScoreCategoryWrapper", e._b({
            attrs:{
              percentage:e.totalPercentage, disabled:"percentage"===e.mode, max:e.totalPercentage+e.left
            }, on:{
              input:e.changeTotalPercentage
            }
          }, "ScoreCategoryWrapper", e.$attrs, !1), [
            r("Button", {
              attrs:{
                ghost:"", size:"small", type:100===e.totalWeight||e.expanded||"weight"!==e.mode?"default":"error"
              }, on:{
                click:function(t){
                  e.expanded=!e.expanded
                }
              }
            }, [
              e._v("\n      "+e._s(e.$t("scorePercentageSetting.assignedWeight"))+"\n      "), e.expanded?r("Icon", {
                attrs:{
                  type:"ios-arrow-up"
                }
              }):r("Icon", {
                attrs:{
                  type:"ios-arrow-down"
                }
              })
            ], 1)
          ], 1), e._v(" "), e.expanded?r("div", {
            staticClass:"score-setting-activity-detail"
          }, [
            r("div", {
              staticClass:"score-setting-activity-mode-wrapper"
            }, [
              r("RadioGroup", {
                staticClass:"score-setting-activity-mode", on:{
                  "on-change":e.modeChange
                }, model:{
                  value:e.mode, callback:function(t){
                    e.mode=t
                  }, expression:"mode"
                }
              }, [
                r("Radio", {
                  attrs:{
                    label:"weight"
                  }
                }, [
                  e._v(e._s(e.$t("scorePercentageSetting.weightMode")))
                ]), e._v(" "), r("Radio", {
                  attrs:{
                    label:"percentage"
                  }
                }, [
                  e._v(e._s(e.$t("scorePercentageSetting.courseMode")))
                ])
              ], 1), e._v(" "), "weight"===e.mode?r("Button", {
                attrs:{
                  size:"small", type:"primary"
                }, on:{
                  click:e.resetWeight
                }
              }, [
                e._v("\n        "+e._s(e.$t("scorePercentageSetting.resetWeight"))+"\n      ")
              ]):e._e()
            ], 1), e._v(" "), r("div", {
              staticClass:"score-setting-activity-item-wrapper"
            }, [
              r("div", {
                staticClass:"score-setting-activity-weight-total"
              }, [
                r("span", [
                  e._v(e._s(e.$t("scorePercentageSetting.totalWeight", [
                    "weight"===e.mode?100:e.totalWeight
                  ])))
                ]), e._v(" "), "weight"===e.mode?r("span", [
                  e._v("\n          "+e._s(e.$t("scorePercentageSetting.assignedActivityWeight"))+"\n          "), r("span", {
                    staticStyle:{
                      color:"#ff9700"
                    }
                  }, [
                    e._v(e._s(e.totalWeight)+"%")
                  ])
                ]):e._e(), e._v(" "), "weight"===e.mode?r("span", [
                  e._v("\n          "+e._s(e.$t("scorePercentageSetting.leftActivityWeight"))+"\n          "), r("span", {
                    staticStyle:{
                      color:"#20bec8"
                    }
                  }, [
                    e._v(e._s(e.weightLeft)+"%")
                  ])
                ]):e._e(), e._v(" "), e.totalWeight<100&&"weight"===e.mode?r("span", {
                  staticStyle:{
                    color:"#f85353"
                  }
                }, [
                  r("i", {
                    staticClass:"font font-info"
                  }), e._v("\n          "+e._s(e.$t("scorePercentageSetting.totalWeightTip"))+"\n        ")
                ]):e._e()
              ]), e._v(" "), r("Table", {
                attrs:{
                  data:e.data, columns:e.columns
                }, scopedSlots:e._u([
                  {
                    key:"title", fn:function(e){
                      var t=e.row;
                      return[
                        r("TooltipExt", {
                          attrs:{
                            text:t.title
                          }
                        })
                      ]
                    }
                  }, {
                    key:"scorePercentage", fn:function(t){
                      var n=t.row;
                      return[
                        r("InputNumber", {
                          attrs:{
                            max:n.value+e.weightLeft, min:0, precision:0, formatter:e.formatNumber, disabled:!1===n.isScored
                          }, on:{
                            "on-change":function(t){
                              return e.percentageChange(n)
                            }
                          }, model:{
                            value:n.value, callback:function(t){
                              e.$set(n, "value", t)
                            }, expression:"row.value"
                          }
                        }), e._v("\n          %\n          "), r("ActivityPublishStatus", {
                          attrs:{
                            "is-instructor":e.isInstructor, activity:n
                          }
                        }), e._v(" "), r("UnpublishedReminder", {
                          attrs:{
                            "is-instructor":e.isInstructor, activity:n
                          }
                        })
                      ]
                    }
                  }
                ], null, !1, 3870415088)
              })
            ], 1)
          ]):e._e()
        ], 1)
      }), [
      ], !1, null, "e850f37e", null).exports;
      var $r=r(944315), Gr=r(783679), Dr=r(248124), Tr=function(e, t, r, n){
        return new(r||(r=Promise))((function(o, a){
          function s(e){
            try{
              c(n.next(e))
            }
            catch(e){
              a(e)
            }
          }
          function i(e){
            try{
              c(n.throw(e))
            }
            catch(e){
              a(e)
            }
          }
          function c(e){
            var t;
            e.done?o(e.value):(t=e.value, t instanceof r?t:new r((function(e){
              e(t)
            }))).then(s, i)
          }
          c((n=n.apply(e, t||[
          ])).next())
        }))
      }, Er=function(e, t){
        var r, n, o, a, s={
          label:0, sent:function(){
            if(1&o[
              0
            ])throw o[
              1
            ];
            return o[
              1
            ]
          }, trys:[
          ], ops:[
          ]
        };
        return a={
          next:i(0), throw:i(1), return:i(2)
        }, "function"==typeof Symbol&&(a[
          Symbol.iterator
        ]
        =function(){
          return this
        }), a;
        function i(i){
          return function(c){
            return function(i){
              if(r)throw new TypeError("Generator is already executing.");
              for(;
              a&&(a=0, i[
                0
              ]
              &&(s=0)), s;
              )try{
                if(r=1, n&&(o=2&i[
                  0
                ]
                ?n.return:i[
                  0
                ]
                ?n.throw||((o=n.return)&&o.call(n), 0):n.next)&&!(o=o.call(n, i[
                  1
                ])).done)return o;
                switch(n=0, o&&(i=[
                  2&i[
                    0
                  ], o.value
                ]), i[
                  0
                ]){
                  case 0:case 1:o=i;
                  break;
                  case 4:return s.label++, {
                    value:i[
                      1
                    ], done:!1
                  };
                  case 5:s.label++, n=i[
                    1
                  ], i=[
                    0
                  ];
                  continue;
                  case 7:i=s.ops.pop(), s.trys.pop();
                  continue;
                  default:if(!(o=s.trys, (o=o.length>0&&o[
                    o.length-1
                  ])||6!==i[
                    0
                  ]
                  &&2!==i[
                    0
                  ])){
                    s=0;
                    continue
                  }
                  if(3===i[
                    0
                  ]
                  &&(!o||i[
                    1
                  ]
                  >o[
                    0
                  ]
                  &&i[
                    1
                  ]
                  <o[
                    3
                  ])){
                    s.label=i[
                      1
                    ];
                    break
                  }
                  if(6===i[
                    0
                  ]
                  &&s.label<o[
                    1
                  ]){
                    s.label=o[
                      1
                    ], o=i;
                    break
                  }
                  if(o&&s.label<o[
                    2
                  ]){
                    s.label=o[
                      2
                    ], s.ops.push(i);
                    break
                  }
                  o[
                    2
                  ]
                  &&s.ops.pop(), s.trys.pop();
                  continue
                }
                i=t.call(e, s)
              }
              catch(e){
                i=[
                  6, e
                ], n=0
              }
              finally{
                r=o=0
              }
              if(5&i[
                0
              ])throw i[
                1
              ];
              return{
                value:i[
                  0
                ]
                ?i[
                  1
                ]
                :void 0, done:!0
              }
            }
            ([
              i, c
            ])
          }
        }
      }, Pr={
        rollcall:"rollcall-score-setting", performance:"performance-score-setting-popup", onlineVideo:"online-video-completeness-setting"
      };
      const Rr=(0, s.pM)({
        components:{
          Button:ur.Button, Alert:ur.Alert, Icon:ur.Icon, ScoreItemPercentage:gr, ActivityPercentage:Ar, SvgIcon:u.A
        }, props:[
          "courseId", "usePerformance", "useVirtualExperiment", "useRollcall", "useWeblink"
        ], setup:function(e, t){
          var r=this, n=(0, $r.w)(e), o=n.categories, i=n.currentScorePercentage, c=n.getPercentageData, u=n.rollcallSetting, d=n.onlineVideoSetting, p=n.performanceSetting, v=n.loading, f=(0, s.KR)(!1), m=(0, s.KR)([
          ]), h=(0, s.KR)(!1);
          (0, s.Gt)("hasChanged", h);
          var _, g, b, y=(0, s.EW)((function(){
            return m.value.some((function(e){
              return"weight"===e.mode&&e.weightLeft>0
            }))
          })), S=function(t){
            return Tr(r, void 0, void 0, (function(){
              var r;
              return Er(this, (function(n){
                switch(n.label){
                  case 0:return r=!0, h.value?[
                    4, Ie.A.open({
                      title:a.default.t("tips"), content:a.default.t("scorePercentageSetting.leaveTip")
                    })
                  ]
                  :[
                    3, 2
                  ];
                  case 1:r=n.sent(), n.label=2;
                  case 2:return r&&(window.location.href=null!=t?t:"/course/".concat(e.courseId, "/score")), [
                    2
                  ]
                }
              }))
            }))
          }, w=function(t){
            t.preventDefault(), S("/course/".concat(e.courseId, "/content"))
          };
          return(0, s.sV)((function(){
            document.body.classList.add("score-setting");
            var t=(0, Kt.useAngularScope)();
            g=t.$on("onlineVideoCompletenessScoreSettingChanged", (function(e, t){
              var r;
              if(d.value){
                var n=Gr.hN.createByType("online_video_completeness_score_setting");
                n.scoreItemId=t.score_item_id, n.value=Number(null!==(r=t.score_percentage)&&void 0!==r?r:0), n.scoreMethod=t.score_method, d.value=n
              }
            })), _=t.$on("rollcallScoreSettingUpdated", (function(e, t){
              var r;
              u.value&&(u.value.value=Number(null!==(r=t.score_percentage)&&void 0!==r?r:0), u.value.scoreMethod=t.score_method, u.value.punishScoreOnAbsence=t.punish_score_on_absence)
            })), e.usePerformance&&(b=t.$on("updatedPerformanceSetting", (function(e, t){
              var r;
              if(p.value){
                var n=Gr.hN.createByType("performance_score_setting");
                n.scoreItemId=t.score_item_id, n.value=Number(null!==(r=t.score_percentage)&&void 0!==r?r:0), p.value=n
              }
            })));
            var r=document.querySelector(".back-to-course");
            r&&r.addEventListener("click", w)
          })), (0, s.hi)((function(){
            null==_||_(), null==g||g(), null==b||b();
            var e=document.querySelector(".back-to-course");
            e&&e.removeEventListener("click", w)
          })), {
            categories:o, currentScorePercentage:i, handleVisibleChange:function(e){
              e||t.emit("input", e)
            }, save:function(){
              return Tr(r, void 0, void 0, (function(){
                var t, r;
                return Er(this, (function(n){
                  switch(n.label){
                    case 0:f.value=!0, t=c(), r=t.map((function(e){
                      var t;
                      return{
                        type:e.type, score_type:e.scoreType, score_item_id:e.scoreItemId, value:e.value, children:(null!==(t=e.children)&&void 0!==t?t:[
                        ]).map((function(e){
                          return{
                            score_item_id:e.scoreItemId, value:e.value
                          }
                        }))
                      }
                    })), n.label=1;
                    case 1:return n.trys.push([
                      1, 5, 6, 7
                    ]), [
                      4, Ie.A.open({
                        type:"info", title:a.default.t("tips"), content:a.default.t("scorePercentageSetting.modifiedTip")
                      })
                    ];
                    case 2:return n.sent()?[
                      4, (0, l.m$)(e.courseId, {
                        items:r
                      })
                    ]
                    :[
                      3, 4
                    ];
                    case 3:n.sent(), window.location.href="/course/".concat(e.courseId, "/score"), n.label=4;
                    case 4:return[
                      3, 7
                    ];
                    case 5:return n.sent(), ur.Message.error(a.default.t("operationFailed")), [
                      3, 7
                    ];
                    case 6:return f.value=!1, [
                      7
                    ];
                    case 7:return[
                      2
                    ]
                  }
                }))
              }))
            }, handleClick:function(e){
              var t, r, n, o=Pr[
                e
              ];
              if(o){
                Dr("#".concat(o)).foundation("reveal", "open");
                var a=(0, Kt.useAngularScope)();
                switch(a.currentScorePercentageLeft=i.value.left, e){
                  case"rollcall":a.currentScorePercentage=null===(t=u.value)||void 0===t?void 0:t.value;
                  break;
                  case"onlineVideo":a.currentScorePercentage=null===(r=d.value)||void 0===r?void 0:r.value;
                  break;
                  case"performance":a.currentScorePercentage=null===(n=p.value)||void 0===n?void 0:n.value
                }
              }
            }, back:S, loading:v, saving:f, onScoreTypeChange:function(e, t){
              t.setting.scoreType=e
            }, onWeightChange:function(e, t){
              t.setting.value=e
            }, activityPercentageRefs:m, disabledSaveBtn:y
          }
        }
      });
      const Mr=(0, f.A)(Rr, (function(){
        var e=this, t=e.$createElement, r=e._self._c||t;
        return e.loading?r("div", {
          staticClass:"loading-container"
        }, [
          r("SvgIcon", {
            attrs:{
              name:"loading-spinner"
            }
          })
        ], 1):r("div", {
          ref:"eleRef", staticClass:"score-setting-container"
        }, [
          r("div", {
            staticClass:"score-setting-header"
          }, [
            r("div", {
              staticClass:"score-setting-header-left"
            }, [
              r("a", {
                on:{
                  click:function(){
                    return e.back()
                  }
                }
              }, [
                r("Icon", {
                  attrs:{
                    type:"ios-arrow-back"
                  }
                })
              ], 1), e._v(" "), r("span", {
                staticClass:"score-setting-header-title"
              }, [
                e._v(e._s(e.$t("scorePercentageSetting.percentageSetting")))
              ])
            ]), e._v(" "), r("Button", {
              attrs:{
                size:"small", type:"primary", disabled:e.currentScorePercentage.left<0||e.disabledSaveBtn, loading:e.saving
              }, on:{
                click:e.save
              }
            }, [
              e._v("\n      "+e._s(e.$t("save"))+"\n    ")
            ])
          ], 1), e._v(" "), r("div", {
            staticClass:"score-setting-content"
          }, [
            r("div", {
              staticClass:"percentage-overview"
            }, [
              r("Alert", {
                attrs:{
                  "show-icon":""
                }
              }, [
                r("span", [
                  e._v(e._s(e.$t("scorePercentageSetting.assignedPercentage")))
                ]), e._v(" "), r("span", {
                  staticClass:"percentage-assigned"
                }, [
                  e._v(e._s(e.currentScorePercentage.used)+"%")
                ]), e._v(" "), r("span", [
                  e._v(", "+e._s(e.$t("scorePercentageSetting.availablePercentage")))
                ]), e._v(" "), r("span", {
                  staticClass:"percentage-remaining"
                }, [
                  e._v(e._s(Math.max(e.currentScorePercentage.left, 0))+"%")
                ]), e._v(" "), r("span", [
                  e._v(", "+e._s(e.$t("scorePercentageSetting.unpublishedPercentage")))
                ]), e._v(" "), r("span", {
                  staticClass:"percentage-error"
                }, [
                  e._v(e._s(e.currentScorePercentage.unpublished)+"%")
                ]), e._v(" "), r("span", [
                  e._v(e._s(e.$t("scorePercentageSetting.unpublishedReminder")))
                ]), e._v(" "), e.currentScorePercentage.left<0?r("span", [
                  e._v(", "+e._s(e.$t("scorePercentageSetting.excessPercentage")))
                ]):e._e(), e._v(" "), e.currentScorePercentage.left<0?r("span", {
                  staticClass:"percentage-error"
                }, [
                  e._v("\n          "+e._s(e.currentScorePercentage.left)+"%\n        ")
                ]):e._e()
              ])
            ], 1), e._v(" "), r("div", {
              staticClass:"score-setting-category-container"
            }, [
              e._l(e.categories, (function(t, n){
                return[
                  "activity"===t.type?r("ActivityPercentage", {
                    key:n, ref:"activityPercentageRefs", refInFor:!0, attrs:{
                      name:t.name, icon:t.icon, desc:t.desc, "score-type":t.setting.scoreType, weight:t.setting.value, left:e.currentScorePercentage.left, activities:t.setting.children
                    }, on:{
                      "on-score-type-change":function(r){
                        return e.onScoreTypeChange(r, t)
                      }, "on-weight-change":function(r){
                        return e.onWeightChange(r, t)
                      }
                    }
                  }):r("ScoreItemPercentage", {
                    key:n, attrs:{
                      name:t.name, icon:t.icon, desc:t.desc, "btn-text":t.btnText, type:t.type, "score-mode":t.setting.scoreMethod, left:e.currentScorePercentage.left
                    }, on:{
                      "on-click":e.handleClick
                    }, model:{
                      value:t.setting.value, callback:function(r){
                        e.$set(t.setting, "value", r)
                      }, expression:"item.setting.value"
                    }
                  })
                ]
              }))
            ], 2)
          ])
        ])
      }), [
      ], !1, null, "73866983", null).exports;
      n.default.use(o.A), n.default.use(a.default), n.default.customElement("score-setting", Mr), n.default.customElement("score-item-setting", ae), n.default.customElement("student-score-index", pe), n.default.customElement("score-page", or), n.default.customElement("score-item-form", cr)
    }, 248934:(e, t, r)=>{
      var n=r(614619);
      e.exports=function(){
        return n.Date.now()
      }
    }, 272654:(e, t, r)=>{
      r(846129);
      var n=r(248124);
      r(248723), r(457306), r(678218);
      var o=r(508568);
      o.bootNgAppOnDemand(), r(595434), r(851334), r(246058), r(50388), r(212296), r(651750), r(198342), r(320542), r(858921), r(318377), r(341065), r(238696), n(document).ready((()=>{
        o.JSLoad()
      }))
    }, 290484:e=>{
      e.exports=function(e){
        return null!=e&&"object"==typeof e
      }
    }, 355503:(e, t, r)=>{
      var n=r(614619).Symbol;
      e.exports=n
    }, 379787:e=>{
      e.exports=function(e){
        var t=typeof e;
        return null!=e&&("object"==t||"function"==t)
      }
    }, 395346:(e, t, r)=>{
      var n=r(355503), o=r(574801), a=r(5684), s=n?n.toStringTag:void 0;
      e.exports=function(e){
        return null==e?void 0===e?"[object Undefined]":"[object Null]":s&&s in Object(e)?o(e):a(e)
      }
    }, 556918:(e, t, r)=>{
      var n="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g;
      e.exports=n
    }, 574801:(e, t, r)=>{
      r(906048);
      var n=r(355503), o=Object.prototype, a=o.hasOwnProperty, s=o.toString, i=n?n.toStringTag:void 0;
      e.exports=function(e){
        var t=a.call(e, i), r=e[
          i
        ];
        try{
          e[
            i
          ]
          =void 0;
          var n=!0
        }
        catch(e){
        }
        var o=s.call(e);
        return n&&(t?e[
          i
        ]
        =r:delete e[
          i
        ]), o
      }
    }, 614619:(e, t, r)=>{
      var n=r(556918), o="object"==typeof self&&self&&self.Object===Object&&self, a=n||o||Function("return this")();
      e.exports=a
    }, 630240:(e, t, r)=>{
      r.d(t, {
        Ay:()=>u, Yx:()=>n.Yx, fA:()=>n.fA
      });
      var n=r(234123), o=r(903087), a=r(247988), s=r(689952), i=r(376302), c=r(535278);
      (0, o.Y)([
        s.a, i.a
      ]);
      const u={
        init:function(){
          return a.Ts.apply(null, arguments)
        }
      };
      (0, o.Y)(c._)
    }, 697652:(e, t, r)=>{
      var n=r(962893), o=r(846413), a=r(981355), s=r(882579);
      n.default.use(o.A), n.default.customElement("export-course-package-modal", a.A), n.default.customElement("course-package-list", s.A)
    }, 700329:(e, t, r)=>{
      var n=r(903087), o=r(606641);
      (0, n.Y)(o.a)
    }, 931135:(e, t, r)=>{
      var n=r(379787), o=r(248934), a=r(119944), s=Math.max, i=Math.min;
      e.exports=function(e, t, r){
        var c, u, l, d, p, v, f=0, m=!1, h=!1, _=!0;
        if("function"!=typeof e)throw new TypeError("Expected a function");
        function g(t){
          var r=c, n=u;
          return c=u=void 0, f=t, d=e.apply(n, r)
        }
        function b(e){
          return f=e, p=setTimeout(S, t), m?g(e):d
        }
        function y(e){
          var r=e-v;
          return void 0===v||r>=t||r<0||h&&e-f>=l
        }
        function S(){
          var e=o();
          if(y(e))return w(e);
          p=setTimeout(S, function(e){
            var r=t-(e-v);
            return h?i(r, l-(e-f)):r
          }
          (e))
        }
        function w(e){
          return p=void 0, _&&c?g(e):(c=u=void 0, d)
        }
        function I(){
          var e=o(), r=y(e);
          if(c=arguments, u=this, v=e, r){
            if(void 0===p)return b(v);
            if(h)return clearTimeout(p), p=setTimeout(S, t), g(v)
          }
          return void 0===p&&(p=setTimeout(S, t)), d
        }
        return t=a(t)||0, n(r)&&(m=!!r.leading, l=(h="maxWait"in r)?s(a(r.maxWait)||0, t):l, _="trailing"in r?!!r.trailing:_), I.cancel=function(){
          void 0!==p&&clearTimeout(p), f=0, c=v=u=p=void 0
        }, I.flush=function(){
          return void 0===p?d:w(o())
        }, I
      }
    }, 944315:(e, t, r)=>{
      r.d(t, {
        w:()=>d
      });
      r(540590), r(418665), r(700533), r(714913), r(269193), r(14602);
      var n=r(595738), o=r(793110), a=r(552979), s=r(703066), i=r(783679), c=function(e, t, r, n){
        return new(r||(r=Promise))((function(o, a){
          function s(e){
            try{
              c(n.next(e))
            }
            catch(e){
              a(e)
            }
          }
          function i(e){
            try{
              c(n.throw(e))
            }
            catch(e){
              a(e)
            }
          }
          function c(e){
            var t;
            e.done?o(e.value):(t=e.value, t instanceof r?t:new r((function(e){
              e(t)
            }))).then(s, i)
          }
          c((n=n.apply(e, t||[
          ])).next())
        }))
      }, u=function(e, t){
        var r, n, o, a, s={
          label:0, sent:function(){
            if(1&o[
              0
            ])throw o[
              1
            ];
            return o[
              1
            ]
          }, trys:[
          ], ops:[
          ]
        };
        return a={
          next:i(0), throw:i(1), return:i(2)
        }, "function"==typeof Symbol&&(a[
          Symbol.iterator
        ]
        =function(){
          return this
        }), a;
        function i(i){
          return function(c){
            return function(i){
              if(r)throw new TypeError("Generator is already executing.");
              for(;
              a&&(a=0, i[
                0
              ]
              &&(s=0)), s;
              )try{
                if(r=1, n&&(o=2&i[
                  0
                ]
                ?n.return:i[
                  0
                ]
                ?n.throw||((o=n.return)&&o.call(n), 0):n.next)&&!(o=o.call(n, i[
                  1
                ])).done)return o;
                switch(n=0, o&&(i=[
                  2&i[
                    0
                  ], o.value
                ]), i[
                  0
                ]){
                  case 0:case 1:o=i;
                  break;
                  case 4:return s.label++, {
                    value:i[
                      1
                    ], done:!1
                  };
                  case 5:s.label++, n=i[
                    1
                  ], i=[
                    0
                  ];
                  continue;
                  case 7:i=s.ops.pop(), s.trys.pop();
                  continue;
                  default:if(!(o=s.trys, (o=o.length>0&&o[
                    o.length-1
                  ])||6!==i[
                    0
                  ]
                  &&2!==i[
                    0
                  ])){
                    s=0;
                    continue
                  }
                  if(3===i[
                    0
                  ]
                  &&(!o||i[
                    1
                  ]
                  >o[
                    0
                  ]
                  &&i[
                    1
                  ]
                  <o[
                    3
                  ])){
                    s.label=i[
                      1
                    ];
                    break
                  }
                  if(6===i[
                    0
                  ]
                  &&s.label<o[
                    1
                  ]){
                    s.label=o[
                      1
                    ], o=i;
                    break
                  }
                  if(o&&s.label<o[
                    2
                  ]){
                    s.label=o[
                      2
                    ], s.ops.push(i);
                    break
                  }
                  o[
                    2
                  ]
                  &&s.ops.pop(), s.trys.pop();
                  continue
                }
                i=t.call(e, s)
              }
              catch(e){
                i=[
                  6, e
                ], n=0
              }
              finally{
                r=o=0
              }
              if(5&i[
                0
              ])throw i[
                1
              ];
              return{
                value:i[
                  0
                ]
                ?i[
                  1
                ]
                :void 0, done:!0
              }
            }
            ([
              i, c
            ])
          }
        }
      }, l=function(e, t, r){
        if(r||2===arguments.length)for(var n, o=0, a=t.length;
        o<a;
        o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t, 0, o)), n[
          o
        ]
        =t[
          o
        ]);
        return e.concat(n||Array.prototype.slice.call(t))
      }, d=function(e){
        var t=(0, n.KR)(), r=(0, n.KR)(), d=(0, n.KR)(), p=(0, n.KR)(), v=(0, n.KR)(), f=(0, n.KR)(), m=(0, n.KR)(), h=(0, n.KR)(), _=(0, n.KR)(), g=(0, n.KR)(), b=(0, n.KR)([
        ]), y=(0, n.KR)([
        ]), S=((0, n.KR)(), (0, n.KR)()), w=(0, n.KR)(!0), I=(0, n.EW)((function(){
          return l(l([
            t.value, r.value, d.value, p.value, v.value, f.value, m.value, h.value, _.value, g.value
          ], b.value, !0), y.value, !0)
        })), x=new o.Decimal(0), C=function(){
          return I.value.reduce((function(e, t){
            return"weight"!==t.scoreType&&t.children?t.children?e.plus(t.children.reduce((function(e, t){
              return e.plus(new o.Decimal(t.value||0))
            }), new o.Decimal(0))):e:e.plus(new o.Decimal(t.value||0))
          }), new o.Decimal(0))
        }, k=(0, n.EW)((function(){
          var e, t, r, n, a=C().plus(x).toNumber();
          return{
            used:a, left:new o.Decimal(null!==(t=null===(e=S.value)||void 0===e?void 0:e.scorePercentageTotal)&&void 0!==t?t:100).minus(a).toNumber(), unpublished:new o.Decimal(null!==(n=null===(r=S.value)||void 0===r?void 0:r.unpublishedPercentage)&&void 0!==n?n:0).toNumber()
          }
        })), A=(0, n.EW)((function(){
          var n, o, s, c, u, S, w, I, x, C, k, A, $, G=l(l([
            {
              name:a.default.t("scorePercentageSetting.rollcall"), icon:"score-rollcall", desc:"count"===(null===(n=m.value)||void 0===n?void 0:n.scoreMethod)?a.default.t("scorePercentageSetting.rollcallScoreWithRule", [
                null!==(o=m.value.punishScoreOnAbsence)&&void 0!==o?o:0
              ]):a.default.t("scorePercentageSetting.rollcallScoreMethods"), setting:null!==(s=m.value)&&void 0!==s?s:{
              }, btnText:a.default.t("scorePercentageSetting.scoreSetting"), type:"rollcall"
            }, {
              name:a.default.t("activityType.homework"), icon:"score-homework", desc:a.default.t("scorePercentageSetting.homeworkScoreMethods"), type:"activity", setting:null!==(c=t.value)&&void 0!==c?c:i.hN.createByType("homework_activity")
            }, {
              name:a.default.t("activityType.exam"), icon:"score-exam", desc:a.default.t("scorePercentageSetting.examScoreMethods"), type:"activity", setting:null!==(u=r.value)&&void 0!==u?u:i.hN.createByType("exam_activity")
            }, {
              name:a.default.t("activityType.forum"), icon:"score-forum", desc:a.default.t("scorePercentageSetting.forumScoreMethods"), type:"activity", setting:null!==(S=d.value)&&void 0!==S?S:i.hN.createByType("forum_activity")
            }, {
              name:a.default.t("activityType.classroom"), icon:"score-classroom", desc:a.default.t("scorePercentageSetting.singleActivity"), type:"activity", setting:null!==(w=p.value)&&void 0!==w?w:i.hN.createByType("classroom_exam_activity")
            }, {
              name:a.default.t("activityType.questionnaire"), icon:"score-questionnaire", desc:a.default.t("scorePercentageSetting.questionnaireMethods"), type:"activity", setting:null!==(I=v.value)&&void 0!==I?I:i.hN.createByType("questionnaire_activity")
            }, {
              name:a.default.t("activityType.interaction"), icon:"score-interaction", desc:a.default.t("scorePercentageSetting.singleActivity"), type:"activity", setting:null!==(x=f.value)&&void 0!==x?x:i.hN.createByType("interaction_activity")
            }, {
              name:a.default.t("web_link"), icon:"weblink-icon", desc:a.default.t("scorePercentageSetting.singleActivity"), type:"activity", setting:null!==(C=_.value)&&void 0!==C?C:i.hN.createByType("web_link_activity")
            }, {
              name:a.default.t("scorePercentageSetting.onlineVideo"), icon:"score-online-video", desc:"custom"===(null===(k=h.value)||void 0===k?void 0:k.scoreMethod)?a.default.t("scorePercentageSetting.customRate"):a.default.t("scorePercentageSetting.onlineVideoScoreMethods"), setting:null!==(A=h.value)&&void 0!==A?A:{
              }, type:"onlineVideo", btnText:a.default.t("scorePercentageSetting.scoreSetting")
            }, {
              name:a.default.t("performance"), icon:"score-performance", desc:a.default.t("scorePercentageSetting.performanceScoreMethods"), setting:null!==($=g.value)&&void 0!==$?$:{
              }, type:"performance", btnText:a.default.t("scorePercentageSetting.scoreSetting")
            }
          ], b.value.map((function(e){
            return{
              name:e.title, icon:"score-custom", desc:"", setting:e, type:"custom"
            }
          })), !0), y.value.map((function(e){
            return{
              name:e.title, icon:"score-virtual-experiment", desc:"", setting:e, type:"virtual-experiment"
            }
          })), !0);
          return e.useWeblink||(G=G.filter((function(e){
            return"weblink-icon"!==e.icon
          }))), e.usePerformance||(G=G.filter((function(e){
            return"performance"!==e.type
          }))), e.useRollcall||(G=G.filter((function(e){
            return"rollcall"!==e.type
          }))), G
        }));
        (0, n.sV)((function(){
          return c(void 0, void 0, void 0, (function(){
            var n, a, l, I, k, A, $, G, D, T, E, P, R, M, N;
            return u(this, (function(L){
              switch(L.label){
                case 0:return w.value=!0, [
                  4, (O=e.courseId, c(void 0, void 0, void 0, (function(){
                    var e, t, r;
                    return u(this, (function(n){
                      switch(n.label){
                        case 0:return[
                          4, Promise.all([
                            (0, s.OW)(O), (0, s.rv)(O)
                          ])
                        ];
                        case 1:return e=n.sent(), t=e[
                          0
                        ], r=e[
                          1
                        ], [
                          2, {
                            coursePercentage:t, activityScoreSettings:r
                          }
                        ]
                      }
                    }))
                  })))
                ];
                case 1:return n=L.sent(), a=n.coursePercentage, l=n.activityScoreSettings, b.value=l.filter((function(e){
                  return"custom"===e.type
                })), y.value=l.filter((function(e){
                  return"virtual_experiment_activity"===e.type
                })), m.value=null!==(I=l.find((function(e){
                  return"rollcall_score_setting"===e.type
                })))&&void 0!==I?I:i.hN.createByType("rollcall_score_setting"), h.value=null!==(k=l.find((function(e){
                  return"online_video_completeness_score_setting"===e.type
                })))&&void 0!==k?k:i.hN.createByType("online_video_completeness_score_setting"), g.value=null!==(A=l.find((function(e){
                  return"performance_score_setting"===e.type
                })))&&void 0!==A?A:i.hN.createByType("performance_score_setting"), S.value=a, t.value=null!==($=l.find((function(e){
                  return"homework_activity"===e.type
                })))&&void 0!==$?$:i.hN.createByType("homework_activity"), r.value=null!==(G=l.find((function(e){
                  return"exam_activity"===e.type
                })))&&void 0!==G?G:i.hN.createByType("exam_activity"), d.value=null!==(D=l.find((function(e){
                  return"forum_activity"===e.type
                })))&&void 0!==D?D:i.hN.createByType("forum_activity"), p.value=null!==(T=l.find((function(e){
                  return"classroom_exam_activity"===e.type
                })))&&void 0!==T?T:i.hN.createByType("classroom_exam_activity"), v.value=null!==(E=l.find((function(e){
                  return"questionnaire_activity"===e.type
                })))&&void 0!==E?E:i.hN.createByType("questionnaire_activity"), f.value=null!==(P=l.find((function(e){
                  return"interaction_activity"===e.type
                })))&&void 0!==P?P:i.hN.createByType("interaction_activity"), _.value=null!==(R=l.find((function(e){
                  return"web_link_activity"===e.type
                })))&&void 0!==R?R:i.hN.createByType("web_link_activity"), x=new o.Decimal(null!==(M=a.scorePercentageTotal)&&void 0!==M?M:100).minus(C()).minus(null!==(N=a.scorePercentageLeft)&&void 0!==N?N:0), w.value=!1, [
                  2
                ]
              }
              var O
            }))
          }))
        }));
        return{
          categories:A, currentScorePercentage:k, rollcallSetting:m, onlineVideoSetting:h, performanceSetting:g, loading:w, getPercentageData:function(){
            return A.value.map((function(e){
              return e.setting
            })).filter((function(e){
              var t;
              return void 0!==e.value||!!(null===(t=e.children)||void 0===t?void 0:t.length)
            }))
          }
        }
      }
    }, 953768:(e, t, r)=>{
      r.d(t, {
        A:()=>p
      });
      r(418665), r(14602);
      var n=r(630240), o=r(931135), a=r.n(o), s=r(957221), i=[
        "legendselectchanged", "legendselected", "legendunselected", "legendscroll", "datazoom", "datarangeselected", "timelinechanged", "timelineplaychanged", "restore", "dataviewchanged", "magictypechanged", "geoselectchanged", "geoselected", "geounselected", "pieselectchanged", "pieselected", "pieunselected", "mapselectchanged", "mapselected", "mapunselected", "axisareaselected", "focusnodeadjacency", "unfocusnodeadjacency", "brush", "brushselected", "rendered", "finished", "click", "dblclick", "mouseover", "mouseout", "mousemove", "mousedown", "mouseup", "globalout", "contextmenu"
      ], c=[
        "click", "mousedown", "mouseup", "mousewheel", "dblclick", "contextmenu"
      ], u=[
        "theme", "initOptions", "autoresize"
      ], l=[
        "manualUpdate", "watchShallow"
      ];
      const d={
        props:{
          options:Object, theme:[
            String, Object
          ], initOptions:Object, group:String, autoresize:Boolean, watchShallow:Boolean, manualUpdate:Boolean
        }, data:()=>({
          lastArea:0
        }), watch:{
          group(e){
            this.chart.group=e
          }
        }, methods:{
          mergeOptions(e, t, r){
            this.manualUpdate&&(this.manualOptions=e), this.chart?this.delegateMethod("setOption", e, t, r):this.init(e)
          }, appendData(e){
            this.delegateMethod("appendData", e)
          }, resize(e){
            this.delegateMethod("resize", e)
          }, dispatchAction(e){
            this.delegateMethod("dispatchAction", e)
          }, convertToPixel(e, t){
            return this.delegateMethod("convertToPixel", e, t)
          }, convertFromPixel(e, t){
            return this.delegateMethod("convertFromPixel", e, t)
          }, containPixel(e, t){
            return this.delegateMethod("containPixel", e, t)
          }, showLoading(e, t){
            this.delegateMethod("showLoading", e, t)
          }, hideLoading(){
            this.delegateMethod("hideLoading")
          }, getDataURL(e){
            return this.delegateMethod("getDataURL", e)
          }, getConnectedDataURL(e){
            return this.delegateMethod("getConnectedDataURL", e)
          }, clear(){
            this.delegateMethod("clear")
          }, dispose(){
            this.delegateMethod("dispose")
          }, delegateMethod(e){
            this.chart||this.init();
            for(var t=arguments.length, r=new Array(t>1?t-1:0), n=1;
            n<t;
            n++)r[
              n-1
            ]
            =arguments[
              n
            ];
            return this.chart[
              e
            ]
            (...r)
          }, delegateGet(e){
            return this.chart||this.init(), this.chart[
              e
            ]
            ()
          }, getArea(){
            return this.$el.offsetWidth*this.$el.offsetHeight
          }, init(e){
            if(!this.chart){
              var t=n.Ay.init(this.$el, this.theme, this.initOptions);
              this.group&&(t.group=this.group), t.setOption(e||this.manualOptions||this.options||{
              }, !0), i.forEach((e=>{
                t.on(e, (t=>{
                  this.$emit(e, t)
                }))
              })), c.forEach((e=>{
                t.getZr().on(e, (t=>{
                  this.$emit("zr:".concat(e), t)
                }))
              })), this.autoresize&&(this.lastArea=this.getArea(), this.__resizeHandler=a()((()=>{
                0===this.lastArea?(this.mergeOptions({
                }, !0), this.resize(), this.mergeOptions(this.options||this.manualOptions||{
                }, !0)):this.resize(), this.lastArea=this.getArea()
              }), 100, {
                leading:!0
              }), (0, s.c)(this.$el, this.__resizeHandler)), Object.defineProperties(this, {
                width:{
                  configurable:!0, get:()=>this.delegateGet("getWidth")
                }, height:{
                  configurable:!0, get:()=>this.delegateGet("getHeight")
                }, isDisposed:{
                  configurable:!0, get:()=>!!this.delegateGet("isDisposed")
                }, computedOptions:{
                  configurable:!0, get:()=>this.delegateGet("getOption")
                }
              }), this.chart=t
            }
          }, initOptionsWatcher(){
            this.__unwatchOptions&&(this.__unwatchOptions(), this.__unwatchOptions=null), this.manualUpdate||(this.__unwatchOptions=this.$watch("options", ((e, t)=>{
              !this.chart&&e?this.init():this.chart.setOption(e, e!==t)
            }), {
              deep:!this.watchShallow
            }))
          }, destroy(){
            this.autoresize&&(0, s.p)(this.$el, this.__resizeHandler), this.dispose(), this.chart=null
          }, refresh(){
            this.chart&&(this.destroy(), this.init())
          }
        }, created(){
          this.initOptionsWatcher(), u.forEach((e=>{
            this.$watch(e, (()=>{
              this.refresh()
            }), {
              deep:!0
            })
          })), l.forEach((e=>{
            this.$watch(e, (()=>{
              this.initOptionsWatcher(), this.refresh()
            }))
          }))
        }, mounted(){
          this.options&&this.init()
        }, activated(){
          this.autoresize&&this.chart&&this.chart.resize()
        }, destroyed(){
          this.chart&&this.destroy()
        }, connect(e){
          "string"!=typeof e&&(e=e.map((e=>e.chart))), n.Ay.connect(e)
        }, disconnect(e){
          n.Ay.disConnect(e)
        }, registerMap(e, t, r){
          n.Ay.registerMap(e, t, r)
        }, registerTheme(e, t){
          n.Ay.registerTheme(e, t)
        }, graphic:n.Ay.graphic
      };
      const p=(0, r(514486).A)(d, (function(){
        var e=this.$createElement;
        return(this._self._c||e)("div", {
          staticClass:"echarts"
        })
      }), [
      ], !1, null, null, null).exports
    }, 957221:(e, t, r)=>{
      r.d(t, {
        c:()=>l, p:()=>d
      });
      r(219693), r(168763), r(658379);
      var n=null;
      var o=null;
      function a(e){
        var t=arguments.length>1&&void 0!==arguments[
          1
        ]
        ?arguments[
          1
        ]
        :{
        }, r=document.createElement(e);
        return Object.keys(t).forEach((e=>{
          r[
            e
          ]
          =t[
            e
          ]
        })), r
      }
      function s(e, t, r){
        return(window.getComputedStyle(e, r||null)||{
          display:"none"
        })[
          t
        ]
      }
      function i(e){
        if(!document.documentElement.contains(e))return{
          detached:!0, rendered:!1
        };
        for(var t=e;
        t!==document;
        ){
          if("none"===s(t, "display"))return{
            detached:!1, rendered:!1
          };
          t=t.parentNode
        }
        return{
          detached:!1, rendered:!0
        }
      }
      var c=0, u=null;
      function l(e, t){
        if(e.__resize_mutation_handler__||(e.__resize_mutation_handler__=p.bind(e)), !e.__resize_listeners__)if(e.__resize_listeners__=[
        ], window.ResizeObserver){
          var r=e.offsetWidth, n=e.offsetHeight, o=new ResizeObserver((()=>{
            (e.__resize_observer_triggered__||(e.__resize_observer_triggered__=!0, e.offsetWidth!==r||e.offsetHeight!==n))&&f(e)
          })), l=i(e), d=l.detached, h=l.rendered;
          e.__resize_observer_triggered__=!1===d&&!1===h, e.__resize_observer__=o, o.observe(e)
        }
        else if(e.attachEvent&&e.addEventListener)e.__resize_legacy_resize_handler__=function(){
          f(e)
        }, e.attachEvent("onresize", e.__resize_legacy_resize_handler__), document.addEventListener("DOMSubtreeModified", e.__resize_mutation_handler__);
        else if(c||(u=function(e){
          var t=document.createElement("style");
          return t.type="text/css", t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e)), (document.querySelector("head")||document.body).appendChild(t), t
        }
        ('.resize-triggers{visibility:hidden;opacity:0}.resize-contract-trigger,.resize-contract-trigger:before,.resize-expand-trigger,.resize-triggers{content:"";position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden}.resize-contract-trigger,.resize-expand-trigger{background:#eee;overflow:auto}.resize-contract-trigger:before{width:200%;height:200%}')), function(e){
          var t=s(e, "position");
          t&&"static"!==t||(e.style.position="relative");
          e.__resize_old_position__=t, e.__resize_last__={
          };
          var r=a("div", {
            className:"resize-triggers"
          }), n=a("div", {
            className:"resize-expand-trigger"
          }), o=a("div"), i=a("div", {
            className:"resize-contract-trigger"
          });
          n.appendChild(o), r.appendChild(n), r.appendChild(i), e.appendChild(r), e.__resize_triggers__={
            triggers:r, expand:n, expandChild:o, contract:i
          }, m(e), e.addEventListener("scroll", v, !0), e.__resize_last__={
            width:e.offsetWidth, height:e.offsetHeight
          }
        }
        (e), e.__resize_rendered__=i(e).rendered, window.MutationObserver){
          var _=new MutationObserver(e.__resize_mutation_handler__);
          _.observe(document, {
            attributes:!0, childList:!0, characterData:!0, subtree:!0
          }), e.__resize_mutation_observer__=_
        }
        e.__resize_listeners__.push(t), c++
      }
      function d(e, t){
        if(e.detachEvent&&e.removeEventListener)return e.detachEvent("onresize", e.__resize_legacy_resize_handler__), void document.removeEventListener("DOMSubtreeModified", e.__resize_mutation_handler__);
        var r=e.__resize_listeners__;
        r&&(r.splice(r.indexOf(t), 1), r.length||(e.__resize_observer__?(e.__resize_observer__.unobserve(e), e.__resize_observer__.disconnect(), e.__resize_observer__=null):(e.__resize_mutation_observer__&&(e.__resize_mutation_observer__.disconnect(), e.__resize_mutation_observer__=null), e.removeEventListener("scroll", v), e.removeChild(e.__resize_triggers__.triggers), e.__resize_triggers__=null), e.__resize_listeners__=null), !--c&&u&&u.parentNode.removeChild(u))
      }
      function p(){
        var e=i(this), t=e.rendered, r=e.detached;
        t!==this.__resize_rendered__&&(!r&&this.__resize_triggers__&&(m(this), this.addEventListener("scroll", v, !0)), this.__resize_rendered__=t, f(this))
      }
      function v(){
        var e, t;
        m(this), this.__resize_raf__&&(e=this.__resize_raf__, o||(o=(window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||function(e){
          clearTimeout(e)
        }).bind(window)), o(e)), this.__resize_raf__=(t=()=>{
          var e, t, r, n, o, a, s=(t=(e=this).__resize_last__, r=t.width, n=t.height, o=e.offsetWidth, a=e.offsetHeight, o!==r||a!==n?{
            width:o, height:a
          }
          :null);
          s&&(this.__resize_last__=s, f(this))
        }, n||(n=(window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){
          return setTimeout(e, 16)
        }).bind(window)), n(t))
      }
      function f(e){
        e&&e.__resize_listeners__&&e.__resize_listeners__.forEach((t=>{
          t.call(e)
        }))
      }
      function m(e){
        var t=e.__resize_triggers__, r=t.expand, n=t.expandChild, o=t.contract, a=o.scrollWidth, s=o.scrollHeight, i=r.offsetWidth, c=r.offsetHeight, u=r.scrollWidth, l=r.scrollHeight;
        o.scrollLeft=a, o.scrollTop=s, n.style.width=i+1+"px", n.style.height=c+1+"px", r.scrollLeft=u, r.scrollTop=l
      }
    }, 995369:(e, t, r)=>{
      r(846129), r(272654)
    }
  }, e=>{
    e.O(0, [
      57216, 95093, 56662, 62893, 61409, 93110, 54989, 84027, 25996, 10246, 23223, 21892, 59925, 91915, 63343, 14572, 39176, 96431, 33489, 90887, 6641, 67888, 13958, 55789, 47959, 68924, 42789, 73384, 43812, 42962, 40661, 30803, 49123, 23268, 50489, 79392, 37519, 56834, 48938, 22541, 13149, 56029, 45286, 91962, 54964, 98133, 46056, 78435, 3985, 95738, 97786, 13067, 99418, 11876, 18774, 79278, 38579, 65238, 5636, 82611, 37066, 56964, 56748, 72914, 47485, 77503, 60859, 3738, 46706, 22924, 9371, 39591, 67016, 78796, 26132, 21093, 7899, 67184, 70619, 31417, 6485, 83735, 67853, 82017
    ], (()=>{
      return t=995369, e(e.s=t);
      var t
    }));
    e.O()
  }
]);
