(self.webpackChunklms=self.webpackChunklms||[
]).push([
  [
    15731, 42535, 48941, 49294, 79055
  ], {
    6349:(e, t, n)=>{
      n.d(t, {
        ey:()=>o, vh:()=>l
      });
      var o, r=n(738645), i=n(152229), a=function(e, t, n, o){
        var r, i=arguments.length, a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t, n):o;
        if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e, t, n, o);
        else for(var s=e.length-1;
        s>=0;
        s--)(r=e[
          s
        ])&&(a=(i<3?r(a):i>3?r(t, n, a):r(t, n))||a);
        return i>3&&a&&Object.defineProperty(t, n, a), a
      }, s=function(){
        function e(){
        }
        return a([
          (0, r.v)()
        ], e.prototype, "title", void 0), a([
          (0, r.v)()
        ], e.prototype, "moduleName", void 0), e
      }
      (), l=function(){
        function e(){
        }
        return a([
          (0, r.v)()
        ], e.prototype, "id", void 0), a([
          (0, r.v)()
        ], e.prototype, "subjectId", void 0), a([
          (0, r.v)()
        ], e.prototype, "description", void 0), a([
          (0, r.v)()
        ], e.prototype, "type", void 0), a([
          (0, r.v)()
        ], e.prototype, "difficultyLevel", void 0), a([
          (0, r.v)()
        ], e.prototype, "total", void 0), a([
          (0, r.v)(), (0, i.Z)((function(){
            return s
          }))
        ], e.prototype, "activity", void 0), a([
          (0, r.v)()
        ], e.prototype, "publishStatus", void 0), e
      }
      ();
      !function(e){
        e[
          e.none=0
        ]
        ="none", e[
          e.hard=1
        ]
        ="hard", e[
          e.medium=2
        ]
        ="medium", e[
          e.easy=3
        ]
        ="easy"
      }
      (o||(o={
      }))
    }, 39134:(e, t, n)=>{
      n.d(t, {
        A:()=>a
      });
      n(168763), n(640173), n(158649);
      var o=n(595738), r=n(384027);
      const i=(0, o.pM)({
        components:{
          Tooltip:r.Tooltip
        }, props:{
          line:{
            type:Number, default:2
          }, useTipsy:{
            type:Boolean, default:!1
          }, text:{
            type:String, required:!0
          }, transfer:{
            type:Boolean, default:!0
          }, suffixCount:{
            type:Number, default:6
          }, transferClassName:{
            type:String, default:""
          }
        }, data:()=>({
          done:!1, content:""
        }), methods:{
          toNumber(e){
            var t=Number(e);
            return Number.isNaN(t)?0:t
          }, getCssAttributeToNumber(e, t){
            var n=window.getComputedStyle(e)[
              t
            ];
            return"string"!=typeof n?0:this.toNumber(n.replace("px", ""))
          }, ellipsis(){
            this.done=!1;
            var e=this.$refs.eleRef;
            if(e){
              var t=this.getCssAttributeToNumber(e, "lineHeight");
              setTimeout((()=>{
                var n=e.offsetHeight;
                if(t&&n){
                  var o=this.line*t;
                  if(!(n<=o)){
                    for(var r=this.text.split(""), i=this.suffixCount?r.splice(-this.suffixCount):[
                      ""
                    ], a="";
                    n>o&&r.length;
                    )r.pop(), a="".concat(r.join(""), "...").concat(i.join("")), e.innerText=a, n=e.offsetHeight;
                    this.done=!0, this.content=a
                  }
                }
              }), 100)
            }
          }
        }, watch:{
          text(){
            this.ellipsis()
          }
        }, mounted(){
          this.ellipsis()
        }
      });
      const a=(0, n(514486).A)(i, (function(){
        var e=this, t=e.$createElement, n=e._self._c||t;
        return e.done&&e.useTipsy?n("Tooltip", {
          staticClass:"ellipsis-text", attrs:{
            placement:"top", content:e.text, transfer:"", "transfer-class-name":e.transferClassName
          }
        }, [
          e._v("\n  "+e._s(e.content)+"\n")
        ]):n("span", {
          ref:"eleRef", staticClass:"ellipsis-text"
        }, [
          e._v(e._s(e.text))
        ])
      }), [
      ], !1, null, "27e5d613", null).exports
    }, 52823:(e, t, n)=>{
      n.d(t, {
        A:()=>h, N:()=>s
      });
      n(418665), n(269193), n(979073), n(906048), n(43148), n(640173), n(658379), n(14602);
      var o=n(592207), r=n.n(o);
      n(207452);
      function i(e, t, n, o, r, i, a){
        try{
          var s=e[
            i
          ]
          (a), l=s.value
        }
        catch(e){
          return void n(e)
        }
        s.done?t(l):Promise.resolve(l).then(o, r)
      }
      function a(e){
        return function(){
          var t=this, n=arguments;
          return new Promise((function(o, r){
            var a=e.apply(t, n);
            function s(e){
              i(a, o, r, s, l, "next", e)
            }
            function l(e){
              i(a, o, r, s, l, "throw", e)
            }
            s(void 0)
          }))
        }
      }
      var s={
        ABOVE:"drag-above", BELOW:"drag-below", ON:"drag-on"
      };
      function l(e){
        return e.path?e.path:e.composedPath?e.composedPath():function(e){
          for(var t=e.target, n=[
          ];
          t;
          ){
            if(n.push(t), "HTML"===t.tagName)return n.push(document), n.push(window), n;
            t=t.parentElement
          }
          return n
        }
        (e)
      }
      function c(e){
        var t=function(e){
          for(var t, n=0, o=l(e);
          n<o.length;
          n++)if(t=o[
            n
          ].className||"", /tree-node/.test(t))return o[
            n
          ];
          return null
        }
        (e);
        return t||null
      }
      function u(e, t){
        if(e){
          var n=e.className;
          if(t)new RegExp(t).test(n)||(n+=" ".concat(t));
          else{
            for(var o in s)n=n.replace(s[
              o
            ], "");
            n.replace("dragging", "")
          }
          e.className=n.replace(/\s+/g, " ")
        }
      }
      function d(e, t){
        var n=t.getBoundingClientRect(), o=n.height/3, r=s.ON;
        return n.top+o>=e.clientY?r=s.ABOVE:n.top+2*o<=e.clientY&&(r=s.BELOW), r
      }
      function p(e, t, n){
        return v.apply(this, arguments)
      }
      function v(){
        return(v=a(r().mark((function e(t, n, o){
          return r().wrap((function(e){
            for(;
            ;
            )switch(e.prev=e.next){
              case 0:if(n&&n[
                o
              ]
              &&"function"==typeof n[
                o
              ]){
                e.next=2;
                break
              }
              return e.abrupt("return");
              case 2:return e.next=4, n[
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
        for(var t in s)for(var n=e.querySelectorAll(".".concat(s[
          t
        ])), o=0;
        o<n.length;
        o++)u(n[
          o
        ])
      }
      const h={
        methods:{
          getDropDestination:c, getDropPosition:d, updateHelperClasses:u, clearDropClasses:f, onDragStart(e){
            e.preventDefault()
          }, startDragging(e, t){
            var n=this;
            return a(r().mark((function o(){
              return r().wrap((function(o){
                for(;
                ;
                )switch(o.prev=o.next){
                  case 0:if(o.t0=!e.isDraggable(), o.t0){
                    o.next=6;
                    break
                  }
                  return o.next=4, p([
                    e
                  ], n.tree.options.dnd, "onDragStart");
                  case 4:o.t1=o.sent, o.t0=!1===o.t1;
                  case 6:if(!o.t0){
                    o.next=8;
                    break
                  }
                  return o.abrupt("return");
                  case 8:n.$$startDragPosition=[
                    t.clientX, t.clientY
                  ], n.$$possibleDragNode=e, n.$$possibleDragEle=e.vm.$el, n.initDragListeners();
                  case 12:case"end":return o.stop()
                }
              }), o)
            })))()
          }, initDragListeners(){
            var e, t=this, n=e=>{
              this.$el.style.userSelect=e?"none":null, this.$el.querySelectorAll(".tree-operate").forEach((t=>{
                t instanceof HTMLElement&&(t.style.pointerEvents=e?"none":null)
              })), document.body.style.cursor=e?"grabbing":null
            }, o=()=>{
              window.removeEventListener("mouseup", i, !0), window.removeEventListener("mousemove", l, !0), n(!1)
            }, i=function(){
              var n=a(r().mark((function n(i){
                return r().wrap((function(n){
                  for(;
                  ;
                  )switch(n.prev=n.next){
                    case 0:if(t.$$startDragPosition||i.stopPropagation(), t.draggableNode&&t.draggableNode.node.state("dragging", !1), !(t.$$dropDestination&&t.tree.isNode(t.$$dropDestination)&&t.$$dropDestination.vm)){
                      n.next=9;
                      break
                    }
                    return u(t.$$dropDestination.vm.$el, null), n.next=6, p([
                      t.draggableNode.node, t.$$dropDestination, e
                    ], t.tree.options.dnd, "onDragFinish");
                    case 6:!1!==n.sent&&(t.$$dropDestination.isDropable()||e!==s.ON)&&e&&(t.draggableNode.node.finishDragging(t.$$dropDestination, e), t.draggableNode.node.parent=t.$$dropDestination, t.$emit("dragFinish")), t.$$dropDestination=null;
                    case 9:f(t.$el), t.$$possibleDragNode=null, t.$$possibleDragEle=null, t.$set(t, "draggableNode", null), o();
                    case 14:case"end":return n.stop()
                  }
                }), n)
              })));
              return function(e){
                return n.apply(this, arguments)
              }
            }
            (), l=function(){
              var i=a(r().mark((function i(a){
                var l, v, h, m, y;
                return r().wrap((function(r){
                  for(;
                  ;
                  )switch(r.prev=r.next){
                    case 0:if(n(!0), !t.$$startDragPosition||(i=a, g=t.$$startDragPosition, Math.abs(i.clientX-g[
                      0
                    ])>5||Math.abs(i.clientY-g[
                      1
                    ])>5)){
                      r.next=3;
                      break
                    }
                    return r.abrupt("return");
                    case 3:if(t.$$startDragPosition=null, !t.$$possibleDragNode){
                      r.next=12;
                      break
                    }
                    if(!1!==t.$$possibleDragNode.startDragging()){
                      r.next=10;
                      break
                    }
                    return o(), t.$$possibleDragNode=null, t.$$possibleDragEle=null, r.abrupt("return");
                    case 10:t.$set(t, "draggableNode", {
                      node:t.$$possibleDragNode, ele:t.$$possibleDragEle, left:0, top:0
                    }), t.$$possibleDragNode=null;
                    case 12:if(t.draggableNode.left=a.clientX, t.draggableNode.top=a.clientY, h=c(a), f(t.$el), h){
                      r.next=19;
                      break
                    }
                    return t.$$dropDestination=null, r.abrupt("return");
                    case 19:if(m=h.getAttribute("data-id"), t.draggableNode.node.id!==m){
                      r.next=22;
                      break
                    }
                    return r.abrupt("return");
                    case 22:if(t.$$dropDestination&&t.$$dropDestination.id===m||(t.$$dropDestination=t.tree.getNodeById(m)), !t.$$dropDestination||!t.draggableNode.node){
                      r.next=28;
                      break
                    }
                    if(!t.$$dropDestination.getPath().includes(t.draggableNode.node)){
                      r.next=28;
                      break
                    }
                    return t.$$dropDestination=null, r.abrupt("return");
                    case 28:if((e=d(a, h))!==s.ON||!h.contains(null===(l=t.draggableNode)||void 0===l||null===(v=l.ele)||void 0===v?void 0:v.parentElement)){
                      r.next=32;
                      break
                    }
                    return t.$$dropDestination=null, r.abrupt("return");
                    case 32:if(!t.options.dndChecker){
                      r.next=36;
                      break
                    }
                    if(t.options.dndChecker(t.draggableNode.node, t.$$dropDestination, e)){
                      r.next=36;
                      break
                    }
                    return t.$$dropDestination=null, r.abrupt("return");
                    case 36:return r.next=38, p([
                      t.draggableNode.node, t.$$dropDestination, e
                    ], t.tree.options.dnd, "onDragOn");
                    case 38:y=r.sent, t.$$dropDestination.isDropable()&&!1!==y||e!==s.ON||(e=null), u(h, e);
                    case 42:case"end":return r.stop()
                  }
                  var i, g
                }), i)
              })));
              return function(e){
                return i.apply(this, arguments)
              }
            }
            ();
            window.addEventListener("mouseup", i, !0), window.addEventListener("mousemove", l, !0)
          }
        }
      }
    }, 88595:(e, t, n)=>{
      n.d(t, {
        A:()=>a
      });
      n(714913), n(158649);
      var o=n(184743), r="YYYY.MM.DD HH:mm:ss", i="Asia/ShangHai";
      const a=function(){
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
          var n="string"==typeof e?new Date(e):e;
          return("string"==typeof t?new Date(t):t)>n
        }, e.diffByHours=function(e, t){
          return void 0===t&&(t=null), t?o(t).diff(o(e), "hours"):o.utc().diff(o(e), "hours")
        }, e.formatDatetime=function(e, t){
          return void 0===t&&(t=r), o(e).tz(i).format(t)
        }, e.formatUtcDatetime=function(e, t){
          return void 0===t&&(t=r), o.utc(e).tz(i).format(t)
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
          var t=Math.floor(e/60), n=e%60, o=Math.floor(t/60);
          return t%=60, "".concat(this.pad(o), ":").concat(this.pad(t), ":").concat(this.pad(n))
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
          var n=o(e), r=o(t);
          if(r.diff(n, "seconds")<0)return"-1";
          var i=r.diff(n, "days"), a=r.diff(n, "hours")-24*i, s=r.diff(n, "minutes")-60*r.diff(n, "hours"), l="";
          return l+=i<=0?"":"".concat(i, "days"), l+=a<=0?"":"".concat(a, "hours"), i>0?l:l+="".concat(s<=0?1:s, "minutes")
        }, e.timestampFormatDatetime=function(e, t){
          return void 0===t&&(t="YYYY-MM-DD HH:mm:ss"), o.unix(e).format(t)
        }, e.getMinutesDiff=function(e, t){
          if(!e||!t)return 0;
          var n=e.split(":").map(Number), o=n[
            0
          ], r=n[
            1
          ], i=t.split(":").map(Number), a=60*o+r, s=60*i[
            0
          ]
          +i[
            1
          ];
          return Math.abs(s-a)
        }, e
      }
      ()
    }, 97248:(e, t, n)=>{
      n.d(t, {
        A:()=>l
      });
      n(169218);
      var o=n(731904), r=n(795093), i=n(595738), a=n(552979), s=function(){
        return(s=Object.assign||function(e){
          for(var t, n=1, o=arguments.length;
          n<o;
          n++)for(var r in t=arguments[
            n
          ])Object.prototype.hasOwnProperty.call(t, r)&&(e[
            r
          ]
          =t[
            r
          ]);
          return e
        }).apply(this, arguments)
      };
      const l=(0, i.pM)({
        props:{
          value:{
            type:[
              Array, Array, String, Date
            ], default:""
          }, type:{
            type:String, default:"date"
          }, format:{
            type:String, default:"yyyy.MM.dd"
          }, disabled:{
            type:Boolean, default:!1
          }, placement:{
            type:String, default:"bottom-start"
          }, placeholder:{
            type:String, default:""
          }, options:{
            type:Object, default:null
          }, splitPanels:{
            type:Boolean, default:!0
          }, returnformat:{
            type:String, default:""
          }, transfer:{
            type:Boolean, default:!1
          }, transferClassName:{
            type:String, default:""
          }, clearable:{
            type:Boolean, default:!0
          }, size:{
            type:String, default:"default"
          }, displayMode:{
            type:String, default:""
          }, useDefaultShortcuts:{
            type:Boolean, default:!1
          }
        }, setup:function(e, t){
          var n=t.emit, l=(0, i.KR)(null), c={
            shortcuts:[
              {
                text:a.default.t("teachingCalendar.today"), value:function(){
                  var e=new Date;
                  return[
                    e, e
                  ]
                }
              }, {
                text:a.default.t("filter.range.week"), value:function(){
                  var e=new Date, t=new Date;
                  return t.setDate(t.getDate()-6), [
                    t, e
                  ]
                }
              }, {
                text:a.default.t("filter.range.month"), value:function(){
                  var e=new Date, t=new Date;
                  return t.setDate(t.getDate()-29), [
                    t, e
                  ]
                }
              }
            ]
          }, u=function(e){
            return"string"==typeof e&&e?o.TimeUtils.toLocalDate(e):(0, o.isDate)(e)?e:null
          };
          return(0, i.wB)((function(){
            return e.value
          }), (function(){
            Array.isArray(e.value)?l.value=o._.map(e.value, (function(e){
              return u(e)
            })):l.value=u(e.value)
          }), {
            deep:!0, immediate:!0
          }), {
            dateValue:l, change:function(){
              var t;
              if(Array.isArray(l.value)){
                var i=(0, o._)(l.value).filter(o.isDate).value();
                t=2===i.length?e.returnformat?[
                  r(i[
                    0
                  ]).format(e.returnformat), r(i[
                    1
                  ]).format(e.returnformat)
                ]
                :[
                  i[
                    0
                  ].toISOString(), o.TimeUtils.endOfDay(i[
                    1
                  ]).toISOString()
                ]
                :[
                ]
              }
              else t=l.value?e.returnformat?r(l.value).format(e.returnformat):l.value.toISOString():"";
              n("input", t), n("on-change", t)
            }, getOptions:function(){
              var t={
                disabledDate:function(){
                  return!1
                }
              };
              return e.useDefaultShortcuts&&(t=s(s({
              }, t), c)), e.options&&(t=s(s({
              }, t), e.options)), t
            }
          }
        }
      })
    }, 121087:(e, t, n)=>{
      n.d(t, {
        Ay:()=>a, Hl:()=>i.U, Nz:()=>r.N
      });
      var o=n(594554), r=(n(220463), n(504078), n(52823)), i=n(249077);
      const a=o.A
    }, 150655:(e, t, n)=>{
      n.d(t, {
        A:()=>o
      });
      const o=n(97248).A
    }, 156765:(e, t, n)=>{
      n.d(t, {
        A:()=>s
      });
      var o=n(595738), r=n(552979), i=n(953768);
      n(739623), n(707369);
      const a=(0, o.pM)({
        components:{
          Echarts:i.A
        }, props:{
          data:{
            type:Array, required:!0
          }, colors:{
            type:Array
          }, left:{
            type:Number, default:70
          }
        }, setup:function(e){
          return{
            options:(0, o.EW)((function(){
              var t={
                legend:{
                  show:!0, orient:"vertical", left:"".concat(Number(e.left)+75, "px"), top:"middle", icon:"circle", itemHeight:12, formatter:function(t){
                    var n=e.data.find((function(e){
                      return e.name===t
                    }));
                    return n?"".concat(t, ": ").concat(r.default.t("knowledgeGraph.statistics.people", [
                      n.value
                    ])):t
                  }
                }, series:[
                  {
                    type:"pie", radius:[
                      "45%", "75%"
                    ], avoidLabelOverlap:!1, hoverOffset:5, itemStyle:{
                      borderColor:"#fff", borderWidth:2
                    }, label:{
                      show:!1
                    }, labelLine:{
                      show:!1
                    }, center:[
                      "".concat(e.left), "50%"
                    ], data:e.data
                  }
                ]
              };
              return e.colors&&(t.color=e.colors), e.data.every((function(e){
                return 0===e.value
              }))&&(t.legend.selectedMode=!1, t.color=[
                "#f0f1f3"
              ], t.series[
                0
              ].silent=!0, t.series[
                0
              ].itemStyle.borderWidth=0), t
            }))
          }
        }
      });
      const s=(0, n(514486).A)(a, (function(){
        var e=this, t=e.$createElement, n=e._self._c||t;
        return n("div", {
          staticClass:"statistics-card"
        }, [
          n("div", {
            staticClass:"title"
          }, [
            e._t("default")
          ], 2), e._v(" "), n("Echarts", {
            staticClass:"chart", attrs:{
              options:e.options, autoresize:""
            }
          })
        ], 1)
      }), [
      ], !1, null, "77656c73", null).exports
    }, 177673:(e, t, n)=>{
      n.d(t, {
        Eg:()=>i, eQ:()=>r, nJ:()=>o
      });
      var o=function(e, t, n){
        if(void 0===n&&(n=1), 0===t)return 0;
        var o=Math.pow(10, n);
        return Math.floor(e/t*100*o)/o
      }, r=function(e, t, n){
        if(void 0===n&&(n=1), 0===t)return 0;
        var o=Math.pow(10, n);
        return Math.floor(e/t*o)/o
      }, i=new Intl.NumberFormat("en-US")
    }, 180287:(e, t, n)=>{
      n.d(t, {
        A:()=>o
      });
      n(418665), n(678636), n(658379), n(14602);
      const o=function(e){
        var t={
        };
        return e.keys().forEach((function(n){
          var o=e(n);
          return t[
            n.match(/[
              \w-
            ]
            +/)[
              0
            ]
          ]
          =o.default||o
        })), t
      }
    }, 194725:(e, t, n)=>{
      n.d(t, {
        M:()=>l
      });
      n(540590), n(418665), n(269193), n(683396), n(14602);
      var o=n(595738), r=n(218831), i=n(497248), a=function(e, t, n, o){
        return new(n||(n=Promise))((function(r, i){
          function a(e){
            try{
              l(o.next(e))
            }
            catch(e){
              i(e)
            }
          }
          function s(e){
            try{
              l(o.throw(e))
            }
            catch(e){
              i(e)
            }
          }
          function l(e){
            var t;
            e.done?r(e.value):(t=e.value, t instanceof n?t:new n((function(e){
              e(t)
            }))).then(a, s)
          }
          l((o=o.apply(e, t||[
          ])).next())
        }))
      }, s=function(e, t){
        var n, o, r, i, a={
          label:0, sent:function(){
            if(1&r[
              0
            ])throw r[
              1
            ];
            return r[
              1
            ]
          }, trys:[
          ], ops:[
          ]
        };
        return i={
          next:s(0), throw:s(1), return:s(2)
        }, "function"==typeof Symbol&&(i[
          Symbol.iterator
        ]
        =function(){
          return this
        }), i;
        function s(s){
          return function(l){
            return function(s){
              if(n)throw new TypeError("Generator is already executing.");
              for(;
              i&&(i=0, s[
                0
              ]
              &&(a=0)), a;
              )try{
                if(n=1, o&&(r=2&s[
                  0
                ]
                ?o.return:s[
                  0
                ]
                ?o.throw||((r=o.return)&&r.call(o), 0):o.next)&&!(r=r.call(o, s[
                  1
                ])).done)return r;
                switch(o=0, r&&(s=[
                  2&s[
                    0
                  ], r.value
                ]), s[
                  0
                ]){
                  case 0:case 1:r=s;
                  break;
                  case 4:return a.label++, {
                    value:s[
                      1
                    ], done:!1
                  };
                  case 5:a.label++, o=s[
                    1
                  ], s=[
                    0
                  ];
                  continue;
                  case 7:s=a.ops.pop(), a.trys.pop();
                  continue;
                  default:if(!(r=a.trys, (r=r.length>0&&r[
                    r.length-1
                  ])||6!==s[
                    0
                  ]
                  &&2!==s[
                    0
                  ])){
                    a=0;
                    continue
                  }
                  if(3===s[
                    0
                  ]
                  &&(!r||s[
                    1
                  ]
                  >r[
                    0
                  ]
                  &&s[
                    1
                  ]
                  <r[
                    3
                  ])){
                    a.label=s[
                      1
                    ];
                    break
                  }
                  if(6===s[
                    0
                  ]
                  &&a.label<r[
                    1
                  ]){
                    a.label=r[
                      1
                    ], r=s;
                    break
                  }
                  if(r&&a.label<r[
                    2
                  ]){
                    a.label=r[
                      2
                    ], a.ops.push(s);
                    break
                  }
                  r[
                    2
                  ]
                  &&a.ops.pop(), a.trys.pop();
                  continue
                }
                s=t.call(e, a)
              }
              catch(e){
                s=[
                  6, e
                ], o=0
              }
              finally{
                n=r=0
              }
              if(5&s[
                0
              ])throw s[
                1
              ];
              return{
                value:s[
                  0
                ]
                ?s[
                  1
                ]
                :void 0, done:!0
              }
            }
            ([
              s, l
            ])
          }
        }
      }, l=function(e, t, n){
        var l=(0, o.Kh)({
          keyword:"", order:[
          ]
        }), c=(0, o.KR)({
          page:0, pageSize:0, pages:0, total:0, items:[
          ]
        }), u=(0, o.KR)(!1), d=(0, i.WQ)((function(e, o){
          return u.value=!0, t(n, l, e, o).finally((function(){
            u.value=!1
          }))
        }));
        return(0, o.sV)((function(){
          return a(void 0, void 0, void 0, (function(){
            return s(this, (function(e){
              switch(e.label){
                case 0:return[
                  4, d.fetch()
                ];
                case 1:return e.sent(), [
                  2
                ]
              }
            }))
          }))
        })), (0, o.wB)((function(){
          return e.keyword
        }), (function(e){
          l.keyword=e
        })), (0, o.wB)(l, (function(){
          return a(void 0, void 0, void 0, (function(){
            return s(this, (function(e){
              switch(e.label){
                case 0:return[
                  4, d.fetch(1)
                ];
                case 1:return e.sent(), [
                  2
                ]
              }
            }))
          }))
        })), {
          conditions:l, data:c, pagination:d, sortChange:function(e){
            var t=e.key, n=e.order;
            l.order="normal"===n?[
            ]
            :[
              (0, r.decamelize)(t), n
            ]
          }, loading:u
        }
      }
    }, 208306:(e, t, n)=>{
      n.d(t, {
        t:()=>c
      });
      n(418665), n(700533), n(714913), n(900956), n(445708), n(658379), n(14602);
      var o, r=n(572366), i=n(767747), a=n(333706), s=(o=function(e, t){
        return(o=Object.setPrototypeOf||{
          __proto__:[
          ]
        }
        instanceof Array&&function(e, t){
          e.__proto__=t
        }
        ||function(e, t){
          for(var n in t)Object.prototype.hasOwnProperty.call(t, n)&&(e[
            n
          ]
          =t[
            n
          ])
        })(e, t)
      }, function(e, t){
        if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");
        function n(){
          this.constructor=e
        }
        o(e, t), e.prototype=null===t?Object.create(t):(n.prototype=t.prototype, new n)
      }), l=function(e, t, n){
        if(n||2===arguments.length)for(var o, r=0, i=t.length;
        r<i;
        r++)!o&&r in t||(o||(o=Array.prototype.slice.call(t, 0, r)), o[
          r
        ]
        =t[
          r
        ]);
        return e.concat(o||Array.prototype.slice.call(t))
      }, c=function(e){
        function t(t, n, o){
          void 0===n&&(n={
          });
          var r=e.call(this, t)||this;
          return r.action=n, r.tooltipHtml=o, r.status={
            dragging:!1
          }, r.minNodeRadius=4, r.defs=r.svg.append("defs"), r.tooltipHtml&&(r.tooltip=r.div.append("div").attr("class", "d3-tooltip").style("background-color", "#464C5B").style("color", "white").style("border-radius", "5px").style("padding", "10px").style("position", "absolute").style("display", "none").style("z-index", "999")), r
        }
        return s(t, e), t.prototype.defaultForces=function(){
          this.forceCharge(-500).forceX().forceY().forceCenter({
            x:this.width/2, y:this.height/2
          })
        }, t.prototype.getNodeRadius=function(e){
          return Math.max(e.r-4*e.level, this.minNodeRadius)
        }, t.prototype.getRelation=function(e){
          var t=(0, r.Ltv)(e.target).datum().id, n=new Set([
            t
          ]), o=new Set([
          ]);
          return this.link.data().filter((function(e){
            return e.source.id===t||e.target.id===t
          })).forEach((function(e){
            o.add(e.id), n.add(e.source.id), n.add(e.target.id)
          })), [
            this.node.filter((function(e){
              return n.has(e.id)
            })), this.link.filter((function(e){
              return o.has(e.id)
            })), this.text.filter((function(e){
              return n.has(e.id)
            }))
          ]
        }, t.prototype.drawArrow=function(e){
          var t=this, n=e.map((function(e){
            return{
              type:e.id<0?"hollow":"solid", color:e.color
            }
          })).reduce((function(e, t){
            return e.find((function(e){
              return e.type===t.type&&e.color===t.color
            }))?l([
            ], e, !0):l(l([
            ], e, !0), [
              t
            ], !1)
          }), [
          ]);
          this.defs.selectAll("marker").remove(), n.forEach((function(e){
            var n=t.defs.append("marker").attr("id", "arrow-".concat(e.color)).attr("markerUnits", "userSpaceOnUse").attr("viewBox", "0 -5 10 10").attr("refX", 10).attr("markerWidth", 8).attr("markerHeight", 8).attr("orient", "auto").attr("stroke-width", .3).append("path").attr("d", "M 0 -5 L 10 0 L 0 5");
            "solid"===e.type?n.attr("fill", e.color):(n.attr("stroke", e.color), n.attr("fill", "transparent"))
          }))
        }, t.prototype.mouseoverHandle=function(){
          if(!this.status.dragging){
            var e=this.getRelation(r.f0J), t=e[
              0
            ], n=e[
              1
            ], o=e[
              2
            ];
            if(this.tooltip&&this.tooltipHtml){
              var i=(0, r.Ltv)(r.f0J.target), a=i.datum(), s=parseFloat(i.attr("cx")), l=parseFloat(i.attr("cy")), c=parseFloat(i.attr("r"));
              s+=c+10, l-=c-10, this.tooltip.style("display", "block").style("top", "".concat(l, "px")).style("left", "".concat(s, "px")).html(this.tooltipHtml(a))
            }
            this.opacity(.1), this.opacityEle(null, t, n, o)
          }
        }, t.prototype.mouseoutHandle=function(){
          this.status.dragging||(this.opacity(null), this.activeNode&&this.opacityEle(.1, this.node.filter(":not([active=true])"), this.link.filter(":not([active=true])"), this.text.filter(":not([active=true])")), this.tooltip&&this.tooltipHtml&&this.tooltip.style("display", "none"))
        }, t.prototype.clickHandle=function(e){
          if(!this.status.dragging){
            var t=this.getRelation(r.f0J), n=t[
              0
            ], o=t[
              1
            ], i=t[
              2
            ];
            this.activeNode=r.f0J.target, this.removeActive(), this.opacity(.1), n.attr("active", !0), o.attr("active", !0), i.attr("active", !0), this.opacityEle(null, n, o, i), this.action.clickNode&&this.action.clickNode((0, r.Ltv)(this.activeNode).datum().id)
          }
        }, t.prototype.opacityEle=function(e){
          for(var t=[
          ], n=1;
          n<arguments.length;
          n++)t[
            n-1
          ]
          =arguments[
            n
          ];
          e?t.forEach((function(t){
            return t.transition().style("opacity", e)
          })):t.forEach((function(e){
            return e.transition().style("opacity", null)
          }))
        }, t.prototype.opacity=function(e){
          this.opacityEle(e, this.node, this.link, this.text)
        }, t.prototype.removeActive=function(){
          this.node.attr("active", null), this.link.attr("active", null), this.text.attr("active", null)
        }, t.prototype.resetStyle=function(){
          this.activeNode=void 0, this.opacity(null), this.removeActive()
        }, t.prototype.update=function(e, t){
          var n=this;
          this.drawArrow(t), this.node=this.node.data(e, (function(e){
            return e.id
          })).join((function(e){
            return e.append("circle").attr("cx", n.center.x).attr("cy", n.center.y).attr("id", (function(e){
              return"node-".concat(e.id)
            })).attr("r", (function(e){
              return n.getNodeRadius(e)
            })).attr("fill", (function(e){
              return e.color
            })).call((0, a.rq)(n.simulation, n.status)).on("mouseover", n.mouseoverHandle.bind(n)).on("mouseout", n.mouseoutHandle.bind(n)).on("click", n.clickHandle.bind(n))
          }), (function(e){
            return e
          }), (function(e){
            return e.remove()
          })), this.link=this.link.data(t, (function(e){
            return e.id
          })).join((function(e){
            return e.append("path").attr("id", (function(e){
              return"link-".concat(e.id)
            })).attr("stroke", (function(e){
              return e.color
            })).attr("stroke-width", .3).attr("stroke-dasharray", (function(e){
              return e.id<0?null:"3,3"
            })).attr("marker-end", (function(e){
              return e.isDirected?"url(#arrow-".concat(e.color, ")"):null
            }))
          }), (function(e){
            return e
          }), (function(e){
            return e.remove()
          })), this.text=this.text.data(e).join((function(e){
            return e.append("text").attr("x", (function(e){
              return e.x
            })).attr("y", (function(e){
              return e.y
            })).attr("font-size", (function(e){
              return 0===e.id?16:13
            })).style("font-weight", (function(e){
              return 0===e.id?"500":null
            })).attr("dy", "0.3em").attr("dx", "1em").style("user-select", "none").text((function(e){
              return e.name
            })).attr("fill", "#262833")
          }), (function(e){
            return e
          }), (function(e){
            return e.remove()
          })), setTimeout((function(){
            var e=n.container.getBoundingClientRect(), t=e.width, o=e.height, r=n.g.node().getBoundingClientRect(), i=r.width, a=r.height, s=Math.hypot(t, o), l=Math.hypot(i, a), c=s/l>1?1:s/l;
            s/l<1&&n.zoomer.scaleBy(n.svg.transition(), c, [
              n.center.x, n.center.y
            ])
          }), 100), this.data(e).forceLink(t, 1, 50).restart()
        }, t.prototype.resize=function(t, n){
          var o=this.container.getBoundingClientRect(), r=o.width, i=o.height;
          e.prototype.resize.call(this, null!=t?t:r, null!=n?n:i)
        }, t
      }
      (i.D)
    }, 249077:(e, t, n)=>{
      n.d(t, {
        U:()=>o
      });
      var o=function(){
        function e(){
          this.editing=!1, this.immutable=!1
        }
        return e.create=function(){
          var t=new e;
          return t.editing=!0, t.selected=!0, t
        }, e
      }
      ()
    }, 255634:(e, t, n)=>{
      n.d(t, {
        A:()=>l
      });
      var o, r=n(118657), i=(o=function(e, t){
        return(o=Object.setPrototypeOf||{
          __proto__:[
          ]
        }
        instanceof Array&&function(e, t){
          e.__proto__=t
        }
        ||function(e, t){
          for(var n in t)Object.prototype.hasOwnProperty.call(t, n)&&(e[
            n
          ]
          =t[
            n
          ])
        })(e, t)
      }, function(e, t){
        if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");
        function n(){
          this.constructor=e
        }
        o(e, t), e.prototype=null===t?Object.create(t):(n.prototype=t.prototype, new n)
      }), a=function(e, t, n, o){
        var r, i=arguments.length, a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t, n):o;
        if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e, t, n, o);
        else for(var s=e.length-1;
        s>=0;
        s--)(r=e[
          s
        ])&&(a=(i<3?r(a):i>3?r(t, n, a):r(t, n))||a);
        return i>3&&a&&Object.defineProperty(t, n, a), a
      };
      const s=function(e){
        function t(){
          return null!==e&&e.apply(this, arguments)||this
        }
        return i(t, e), t.prototype.onlyShowOverflowed=function(){
          var e=this.$refs.span, t=this.$refs.tooltip.$refs.popper;
          e.offsetWidth<e.scrollWidth||e.offsetHeight<e.scrollHeight?t.style.visibility="visiable":t.style.visibility="hidden"
        }, t.prototype.onHide=function(){
          var e=this.$refs.tooltip.$refs.popper;
          e.style.visibility=null, e.style.display="none"
        }, a([
          (0, r.kv)({
            required:!0
          })
        ], t.prototype, "text", void 0), a([
          (0, r.kv)({
            default:"top"
          })
        ], t.prototype, "placement", void 0), a([
          (0, r.kv)({
            default:!0
          })
        ], t.prototype, "transfer", void 0), a([
          (0, r.kv)({
            default:""
          })
        ], t.prototype, "transferClassName", void 0), a([
          (0, r.kv)({
            default:!1
          })
        ], t.prototype, "customContent", void 0), a([
          (0, r.kv)({
            default:!1
          })
        ], t.prototype, "htmlTips", void 0), t=a([
          (0, r.uA)({
            name:"tooltip-advanced"
          })
        ], t)
      }
      (r.lD);
      const l=(0, n(514486).A)(s, (function(){
        var e=this, t=e.$createElement, n=e._self._c||t;
        return n("Tooltip", {
          ref:"tooltip", attrs:{
            content:e.text, placement:e.placement, transfer:e.transfer, "transfer-class-name":e.transferClassName
          }, on:{
            "on-popper-show":e.onlyShowOverflowed, "on-popper-hide":e.onHide
          }, scopedSlots:e._u([
            e.customContent||e.htmlTips?{
              key:"content", fn:function(){
                return[
                  n("div", {
                    domProps:{
                      innerHTML:e._s(e.text)
                    }
                  })
                ]
              }, proxy:!0
            }
            :null
          ], null, !0)
        }, [
          e._v(" "), e.customContent?n("div", {
            ref:"span", staticClass:"text-too-long", domProps:{
              innerHTML:e._s(e.text)
            }
          }):n("span", {
            ref:"span", staticClass:"text-too-long"
          }, [
            e._v(e._s(e.text))
          ])
        ])
      }), [
      ], !1, null, "6394a288", null).exports
    }, 256164:(e, t, n)=>{
      e.exports=n.p+"assets/js/vue/views/knowledge-graph/g6-graph/img/3a5f49a633bfd99dfd9b.png"
    }, 257272:(e, t, n)=>{
      n.r(t), n.d(t, {
        default:()=>X
      });
      n(540590), n(418665), n(269193), n(640173), n(14602);
      var o=n(595738), r=n(552979), i=n(979278), a=n(766800), s=n(877401), l=n(818183), c=n(769075), u=n(794128), d=n(526320), p=n(789974), v=n(587881), f=n(592207), h=n.n(f);
      n(207452);
      function m(e, t, n, o, r, i, a){
        try{
          var s=e[
            i
          ]
          (a), l=s.value
        }
        catch(e){
          return void n(e)
        }
        s.done?t(l):Promise.resolve(l).then(o, r)
      }
      const y={
        props:{
          course_id:Number
        }, methods:{
          stopPreview(){
            var e, t=this;
            return(e=h().mark((function e(){
              return h().wrap((function(e){
                for(;
                ;
                )switch(e.prev=e.next){
                  case 0:return e.next=2, (0, s.Ve)(t.course_id);
                  case 2:window.location.reload();
                  case 3:case"end":return e.stop()
                }
              }), e)
            })), function(){
              var t=this, n=arguments;
              return new Promise((function(o, r){
                var i=e.apply(t, n);
                function a(e){
                  m(i, o, r, a, s, "next", e)
                }
                function s(e){
                  m(i, o, r, a, s, "throw", e)
                }
                a(void 0)
              }))
            })()
          }
        }
      };
      var g=n(514486);
      const w=(0, g.A)(y, (function(){
        var e=this, t=e.$createElement, n=e._self._c||t;
        return n("div", {
          staticClass:"course-preview-tips"
        }, [
          n("div", {
            staticClass:"row"
          }, [
            n("div", {
              staticClass:"large-26 left tips-title"
            }, [
              n("span", {
                staticClass:"title"
              }, [
                e._v(e._s(e.$t("coursePreviewTips.coursePreview")))
              ]), e._v(" "), n("span", {
                staticClass:"effect-title"
              }, [
                e._v("\n        ("+e._s(e.$t("coursePreviewTips.studentView"))+")\n        "), n("Tooltip", {
                  attrs:{
                    content:e.$t("coursePreviewTips.previewMessage"), placement:"bottom"
                  }
                }, [
                  n("span", {
                    staticClass:"font font-question"
                  })
                ])
              ], 1)
            ]), e._v(" "), n("div", {
              staticClass:"large-6 right text-right"
            }, [
              n("a", {
                staticClass:"button", on:{
                  click:e.stopPreview
                }
              }, [
                e._v(e._s(e.$t("coursePreviewTips.goBack")))
              ])
            ])
          ])
        ])
      }), [
      ], !1, null, "442accef", null).exports;
      var b=n(458793), _=n(623694), C=n(551137), k=n(48292), x=n(350757), S=n(32876), D=n(40842), T=(n(169218), n(972194)), R=n(316327), I=function(){
        return(I=Object.assign||function(e){
          for(var t, n=1, o=arguments.length;
          n<o;
          n++)for(var r in t=arguments[
            n
          ])Object.prototype.hasOwnProperty.call(t, r)&&(e[
            r
          ]
          =t[
            r
          ]);
          return e
        }).apply(this, arguments)
      };
      const A=(0, o.pM)({
        props:{
          viewMode:{
            type:String, required:!0
          }, svg:{
            type:Function
          }, colors:{
            type:Object
          }
        }, setup:function(e, t){
          var n=(0, o.Kh)({
            course:!0, directedRelation:!0, levelRelation:!0, undirectedRelation:!0, showLevelNumber:0
          }), r=(0, o.WQ)("course", {
            id:0, type:0
          }), i=(0, o.EW)((function(){
            return k.D4[
              e.viewMode
            ]
          })), a=(0, o.WQ)("allowedRelationTypes", {
            prev:!0, post:!0, undirected:!0
          }), s=(0, T.D)().depth, l=(0, o.KR)(!1), c=(0, o.KR)(), u=(0, o.KR)(), p=(0, o.EW)((function(){
            return e.colors?e.colors:{
              course:i.value.course, levelRelation:i.value.levelRelation, directedRelation:R.GZ, undirectedRelation:R.GZ
            }
          })), v=(0, o.EW)((function(){
            if(!u.value)return"slide-left";
            var e=u.value.getBoundingClientRect(), t=e.width;
            return e.x+t>window.innerWidth/2?"slide-right":"slide-left"
          })), f=(0, o.EW)((function(){
            return"slide-left"===v.value?{
              left:"60px"
            }
            :{
              right:"60px"
            }
          })), h=function e(t){
            var n;
            (null===(n=c.value)||void 0===n?void 0:n.contains(t.target))||(l.value=!1, document.removeEventListener("click", e))
          };
          return(0, o.wB)(n, (function(e){
            t.emit("on-setting-change", I({
            }, e))
          })), {
            setting:n, colorByMode:i, course:r, allowedRelationTypes:a, depth:s, menuRef:c, showSettingMenu:function(e){
              l.value?h(e):(l.value=!0, document.addEventListener("click", h))
            }, eleRef:u, animateName:v, menuPosition:f, isShowSettingMenu:l, customColors:p, handleFilter:function(){
              d.A.$emit("show-search-toolbar-filter")
            }, handleSearch:function(){
              d.A.$emit("show-search-toolbar")
            }
          }
        }
      });
      const M=(0, g.A)(A, (function(){
        var e=this, t=e.$createElement, n=e._self._c||t;
        return n("div", {
          staticClass:"graph-setting"
        }, [
          "forest"!==e.viewMode?n("div", {
            ref:"eleRef", staticClass:"graph-tool"
          }, [
            n("Tooltip", {
              attrs:{
                content:e.$t("search"), placement:"right", transfer:""
              }
            }, [
              n("Button", {
                attrs:{
                  type:"text"
                }, on:{
                  click:function(t){
                    return t.stopPropagation(), e.handleSearch(t)
                  }
                }
              }, [
                n("i", {
                  staticClass:"font font-nav-search"
                })
              ])
            ], 1), e._v(" "), n("Tooltip", {
              attrs:{
                content:e.$t("subjectLib.filter"), placement:"right", transfer:""
              }
            }, [
              n("Button", {
                attrs:{
                  type:"text"
                }, on:{
                  click:function(t){
                    return t.stopPropagation(), e.handleFilter(t)
                  }
                }
              }, [
                n("SvgIcon", {
                  staticClass:"button-icon", attrs:{
                    name:"filter"
                  }
                })
              ], 1)
            ], 1), e._v(" "), n("Tooltip", {
              attrs:{
                content:e.$t("knowledgeGraph.settings"), placement:"right", transfer:""
              }
            }, [
              n("Button", {
                attrs:{
                  type:"text"
                }, on:{
                  click:function(t){
                    return t.stopPropagation(), e.showSettingMenu(t)
                  }
                }
              }, [
                n("SvgIcon", {
                  staticClass:"button-icon", attrs:{
                    name:"setting"
                  }
                })
              ], 1)
            ], 1), e._v(" "), n("transition", {
              attrs:{
                name:e.animateName
              }
            }, [
              e.isShowSettingMenu?n("div", {
                ref:"menuRef", staticClass:"graph-setting-menu", style:e.menuPosition
              }, [
                n("div", [
                  n("Checkbox", {
                    model:{
                      value:e.setting.course, callback:function(t){
                        e.$set(e.setting, "course", t)
                      }, expression:"setting.course"
                    }
                  }, [
                    e.svg?n("div", {
                      staticClass:"svg-badge", domProps:{
                        innerHTML:e._s(e.svg(e.customColors.course))
                      }
                    }):n("Badge", {
                      attrs:{
                        color:e.customColors.course, size:10
                      }
                    }), e._v("\n            "+e._s(8!==e.course.type?e.$t("knowledgeGraph.course"):e.$t("project.tag"))+"\n          ")
                  ], 1)
                ], 1), e._v(" "), e.depth>1?n("div", [
                  n("Checkbox", {
                    model:{
                      value:e.setting.levelRelation, callback:function(t){
                        e.$set(e.setting, "levelRelation", t)
                      }, expression:"setting.levelRelation"
                    }
                  }, [
                    n("SvgIcon", {
                      style:{
                        color:e.customColors.levelRelation
                      }, attrs:{
                        name:"link-legend1"
                      }
                    }), e._v("\n            "+e._s(e.$t("knowledgeGraph.level"))+"\n          ")
                  ], 1)
                ], 1):e._e(), e._v(" "), e.allowedRelationTypes.prev||e.allowedRelationTypes.post?n("div", [
                  n("Checkbox", {
                    model:{
                      value:e.setting.directedRelation, callback:function(t){
                        e.$set(e.setting, "directedRelation", t)
                      }, expression:"setting.directedRelation"
                    }
                  }, [
                    n("SvgIcon", {
                      style:{
                        color:e.customColors.directedRelation
                      }, attrs:{
                        name:"link-legend2"
                      }
                    }), e._v("\n            "+e._s(e.$t("knowledgeGraph.priorOrSubsequent"))+"\n          ")
                  ], 1)
                ], 1):e._e(), e._v(" "), e.allowedRelationTypes.undirected?n("div", [
                  n("Checkbox", {
                    model:{
                      value:e.setting.undirectedRelation, callback:function(t){
                        e.$set(e.setting, "undirectedRelation", t)
                      }, expression:"setting.undirectedRelation"
                    }
                  }, [
                    n("SvgIcon", {
                      style:{
                        color:e.customColors.undirectedRelation
                      }, attrs:{
                        name:"link-legend3"
                      }
                    }), e._v("\n            "+e._s(e.$t("knowledgeGraph.related"))+"\n          ")
                  ], 1)
                ], 1):e._e()
              ]):e._e()
            ])
          ], 1):e._e()
        ])
      }), [
      ], !1, null, "124c2e16", null).exports;
      var $=n(685761), E=n(27550);
      const P=(0, o.pM)({
        props:{
          value:{
            type:Number
          }, nodes:{
            type:Array
          }
        }, setup:function(e, t){
          var n, r, i=t.emit, a=(0, o.KR)(!0), s=(0, o.KR)(e.value);
          (0, o.wB)(s, (function(e){
            i("input", e)
          }));
          var l=null===(r=null===(n=window.globalData)||void 0===n?void 0:n.course)||void 0===r?void 0:r.name;
          return{
            open:a, selectedNode:s, courseName:l, clickHandler:function(e){
              s.value===e?s.value=void 0:s.value=e
            }
          }
        }
      });
      const N=(0, g.A)(P, (function(){
        var e=this, t=e.$createElement, n=e._self._c||t;
        return n("div", {
          staticClass:"drawer-wrapper", class:{
            open:e.open
          }
        }, [
          n("div", {
            staticClass:"content"
          }, [
            n("Collapse", {
              attrs:{
                simple:"", value:"0"
              }
            }, [
              n("Panel", {
                attrs:{
                  "hide-arrow":""
                }
              }, [
                n("div", {
                  staticClass:"collapse-header"
                }, [
                  n("i", {
                    staticClass:"font font-triangle-collapsed"
                  }), e._v(" "), n("span", [
                    e._v(e._s(e.courseName))
                  ])
                ]), e._v(" "), n("div", {
                  attrs:{
                    slot:"content"
                  }, slot:"content"
                }, e._l(e.nodes, (function(t){
                  return n("label", {
                    key:t.text, on:{
                      click:function(n){
                        return n.preventDefault(), e.clickHandler(t.id)
                      }
                    }
                  }, [
                    e._v("\n            "+e._s(t.text)+"\n\n            "), n("input", {
                      directives:[
                        {
                          name:"model", rawName:"v-model", value:e.selectedNode, expression:"selectedNode"
                        }
                      ], staticClass:"hidden", attrs:{
                        type:"radio", name:"chapter"
                      }, domProps:{
                        value:t.id, checked:e._q(e.selectedNode, t.id)
                      }, on:{
                        change:function(n){
                          e.selectedNode=t.id
                        }
                      }
                    })
                  ])
                })), 0)
              ])
            ], 1)
          ], 1), e._v(" "), n("div", {
            staticClass:"handle-btn", class:{
              open:e.open
            }, on:{
              click:function(t){
                e.open=!e.open
              }
            }
          }, [
            n("Icon", {
              attrs:{
                type:"ios-arrow-forward"
              }
            })
          ], 1)
        ])
      }), [
      ], !1, null, "871b562e", null).exports;
      var O=n(990311), j=n(574799), G=n(297786), B=function(e, t, n, o){
        return new(n||(n=Promise))((function(r, i){
          function a(e){
            try{
              l(o.next(e))
            }
            catch(e){
              i(e)
            }
          }
          function s(e){
            try{
              l(o.throw(e))
            }
            catch(e){
              i(e)
            }
          }
          function l(e){
            var t;
            e.done?r(e.value):(t=e.value, t instanceof n?t:new n((function(e){
              e(t)
            }))).then(a, s)
          }
          l((o=o.apply(e, t||[
          ])).next())
        }))
      }, L=function(e, t){
        var n, o, r, i, a={
          label:0, sent:function(){
            if(1&r[
              0
            ])throw r[
              1
            ];
            return r[
              1
            ]
          }, trys:[
          ], ops:[
          ]
        };
        return i={
          next:s(0), throw:s(1), return:s(2)
        }, "function"==typeof Symbol&&(i[
          Symbol.iterator
        ]
        =function(){
          return this
        }), i;
        function s(s){
          return function(l){
            return function(s){
              if(n)throw new TypeError("Generator is already executing.");
              for(;
              i&&(i=0, s[
                0
              ]
              &&(a=0)), a;
              )try{
                if(n=1, o&&(r=2&s[
                  0
                ]
                ?o.return:s[
                  0
                ]
                ?o.throw||((r=o.return)&&r.call(o), 0):o.next)&&!(r=r.call(o, s[
                  1
                ])).done)return r;
                switch(o=0, r&&(s=[
                  2&s[
                    0
                  ], r.value
                ]), s[
                  0
                ]){
                  case 0:case 1:r=s;
                  break;
                  case 4:return a.label++, {
                    value:s[
                      1
                    ], done:!1
                  };
                  case 5:a.label++, o=s[
                    1
                  ], s=[
                    0
                  ];
                  continue;
                  case 7:s=a.ops.pop(), a.trys.pop();
                  continue;
                  default:if(!(r=a.trys, (r=r.length>0&&r[
                    r.length-1
                  ])||6!==s[
                    0
                  ]
                  &&2!==s[
                    0
                  ])){
                    a=0;
                    continue
                  }
                  if(3===s[
                    0
                  ]
                  &&(!r||s[
                    1
                  ]
                  >r[
                    0
                  ]
                  &&s[
                    1
                  ]
                  <r[
                    3
                  ])){
                    a.label=s[
                      1
                    ];
                    break
                  }
                  if(6===s[
                    0
                  ]
                  &&a.label<r[
                    1
                  ]){
                    a.label=r[
                      1
                    ], r=s;
                    break
                  }
                  if(r&&a.label<r[
                    2
                  ]){
                    a.label=r[
                      2
                    ], a.ops.push(s);
                    break
                  }
                  r[
                    2
                  ]
                  &&a.ops.pop(), a.trys.pop();
                  continue
                }
                s=t.call(e, a)
              }
              catch(e){
                s=[
                  6, e
                ], o=0
              }
              finally{
                n=r=0
              }
              if(5&s[
                0
              ])throw s[
                1
              ];
              return{
                value:s[
                  0
                ]
                ?s[
                  1
                ]
                :void 0, done:!0
              }
            }
            ([
              s, l
            ])
          }
        }
      };
      const K=(0, o.pM)({
        setup:function(e, t){
          var n=this, r=(0, o.KR)(""), i=(0, o.KR)(), a=(0, o.KR)(!1), l=(0, o.KR)(!1), c=(0, o.KR)(), u=!1, d=function(e, t){
            var n, o;
            void 0===t&&(t="*"), null===(o=null===(n=i.value)||void 0===n?void 0:n.contentWindow)||void 0===o||o.postMessage(e, t)
          };
          (0, G.MLh)("message", (function(e){
            "loaded"===e.data.type?l.value=!0:"routeChange"===e.data.type?(e.data.data.intoSecondLayer&&(u=!0), d({
              type:"clusterData", data:c.value
            })):"clickNode"===e.data.type?t.emit("on-click-node", e.data.data.id):"documentClick"===e.data.type?t.emit("on-document-click"):"iframeClick"===e.data.type?t.emit("on-iframe-click"):"graphUpdate"===e.data.type&&u&&e.data.data.topicId&&(t.emit("on-click-node", Number(e.data.data.topicId)), u=!1)
          })), (0, o.wB)([
            a, l, c
          ], (function(){
            [
              a.value, l.value
            ].every((function(e){
              return e
            }))&&d({
              type:"clusterData", data:c.value
            })
          })), (0, o.sV)((function(){
            return B(n, void 0, void 0, (function(){
              var e, t, n;
              return L(this, (function(o){
                switch(o.label){
                  case 0:return[
                    4, Promise.all([
                      (0, s.ty)(j.yW.value.id), (0, s.vG)(j.yW.value.id)
                    ])
                  ];
                  case 1:return e=o.sent(), t=e[
                    0
                  ], n=e[
                    1
                  ], r.value=t, c.value=n, a.value=!0, [
                    2
                  ]
                }
              }))
            }))
          }));
          return(0, o.n)((function(){
            return B(n, void 0, void 0, (function(){
              var e;
              return L(this, (function(t){
                switch(t.label){
                  case 0:return l.value=!1, a.value=!1, [
                    4, (0, s.vG)(j.yW.value.id)
                  ];
                  case 1:return e=t.sent(), c.value=e, a.value=!0, [
                    2
                  ]
                }
              }))
            }))
          })), {
            src:r, iframeRef:i, resetZoom:function(){
              d({
                type:"resetZoom", data:{
                }
              })
            }, zoomIn:function(){
              d({
                type:"zoomIn", data:{
                }
              })
            }, zoomOut:function(){
              d({
                type:"zoomOut", data:{
                }
              })
            }
          }
        }
      });
      const U=(0, g.A)(K, (function(){
        var e=this, t=e.$createElement;
        return(e._self._c||t)("iframe", {
          ref:"iframeRef", attrs:{
            src:e.src, frameborder:"0"
          }
        })
      }), [
      ], !1, null, "76c40fb1", null).exports;
      var W=n(390359);
      const z=(0, o.pM)({
        components:{
          KnowledgeTree:W.default
        }, props:{
          value:Boolean
        }, setup:function(e, t){
          var n=t.emit;
          return{
            show:(0, G.hRP)(e, "value", n, {
              eventName:"input"
            })
          }
        }
      });
      const F=(0, g.A)(z, (function(){
        var e=this, t=e.$createElement, n=e._self._c||t;
        return n("Modal", {
          staticClass:"modal", attrs:{
            "footer-hide":"", fullscreen:""
          }, scopedSlots:e._u([
            {
              key:"header", fn:function(){
                return[
                  n("div", {
                    staticClass:"path-header"
                  }, [
                    e._v("\n      "+e._s(e.$t("knowledgeGraph.editGraph"))+"\n    ")
                  ])
                ]
              }, proxy:!0
            }
          ]), model:{
            value:e.show, callback:function(t){
              e.show=t
            }, expression:"show"
          }
        }, [
          e._v(" "), n("div", {
            staticClass:"container"
          }, [
            n("KnowledgeTree")
          ], 1)
        ])
      }), [
      ], !1, null, "7248be22", null).exports;
      var V=n(379960), H=n(118018), q=n(839861), Y=n(260537), Z=function(e, t, n, o){
        return new(n||(n=Promise))((function(r, i){
          function a(e){
            try{
              l(o.next(e))
            }
            catch(e){
              i(e)
            }
          }
          function s(e){
            try{
              l(o.throw(e))
            }
            catch(e){
              i(e)
            }
          }
          function l(e){
            var t;
            e.done?r(e.value):(t=e.value, t instanceof n?t:new n((function(e){
              e(t)
            }))).then(a, s)
          }
          l((o=o.apply(e, t||[
          ])).next())
        }))
      }, Q=function(e, t){
        var n, o, r, i, a={
          label:0, sent:function(){
            if(1&r[
              0
            ])throw r[
              1
            ];
            return r[
              1
            ]
          }, trys:[
          ], ops:[
          ]
        };
        return i={
          next:s(0), throw:s(1), return:s(2)
        }, "function"==typeof Symbol&&(i[
          Symbol.iterator
        ]
        =function(){
          return this
        }), i;
        function s(s){
          return function(l){
            return function(s){
              if(n)throw new TypeError("Generator is already executing.");
              for(;
              i&&(i=0, s[
                0
              ]
              &&(a=0)), a;
              )try{
                if(n=1, o&&(r=2&s[
                  0
                ]
                ?o.return:s[
                  0
                ]
                ?o.throw||((r=o.return)&&r.call(o), 0):o.next)&&!(r=r.call(o, s[
                  1
                ])).done)return r;
                switch(o=0, r&&(s=[
                  2&s[
                    0
                  ], r.value
                ]), s[
                  0
                ]){
                  case 0:case 1:r=s;
                  break;
                  case 4:return a.label++, {
                    value:s[
                      1
                    ], done:!1
                  };
                  case 5:a.label++, o=s[
                    1
                  ], s=[
                    0
                  ];
                  continue;
                  case 7:s=a.ops.pop(), a.trys.pop();
                  continue;
                  default:if(!(r=a.trys, (r=r.length>0&&r[
                    r.length-1
                  ])||6!==s[
                    0
                  ]
                  &&2!==s[
                    0
                  ])){
                    a=0;
                    continue
                  }
                  if(3===s[
                    0
                  ]
                  &&(!r||s[
                    1
                  ]
                  >r[
                    0
                  ]
                  &&s[
                    1
                  ]
                  <r[
                    3
                  ])){
                    a.label=s[
                      1
                    ];
                    break
                  }
                  if(6===s[
                    0
                  ]
                  &&a.label<r[
                    1
                  ]){
                    a.label=r[
                      1
                    ], r=s;
                    break
                  }
                  if(r&&a.label<r[
                    2
                  ]){
                    a.label=r[
                      2
                    ], a.ops.push(s);
                    break
                  }
                  r[
                    2
                  ]
                  &&a.ops.pop(), a.trys.pop();
                  continue
                }
                s=t.call(e, a)
              }
              catch(e){
                s=[
                  6, e
                ], o=0
              }
              finally{
                n=r=0
              }
              if(5&s[
                0
              ])throw s[
                1
              ];
              return{
                value:s[
                  0
                ]
                ?s[
                  1
                ]
                :void 0, done:!0
              }
            }
            ([
              s, l
            ])
          }
        }
      };
      const J=(0, o.pM)({
        components:{
          HeaderWrapper:p.A, CoursePreviewTip:w, CourseName:v.A, Graph:_.Ay, Legend:x.A, Toolbar:S.A, Setting:M, Drawer:E.A, NodeDetailContent:O.A, LearningPath:$.A, ClusterGraph:U, KnowledgeTreeModal:F, SvgIcon:i.A, NoData:V.A, KnowledgeTree:W.default, CognitiveDimensionSelect:H.A, LeftDrawer:N
        }, beforeRouteEnter:function(e, t, n){
          "/knowledge-tree"===t.path?n((function(e){
            e.getNodes()
          })):n()
        }, setup:function(){
          var e, t, n, i, p, v=this, f=(0, o.WQ)("course", {
            id:0
          }), h=(0, o.WQ)("allowFacetsAndFragments", !1), m=(null===(e=window.featureToggles)||void 0===e?void 0:e.isCognitiveDimensionOpen)||!1, y=(i=h, p=[
            {
              key:"level", value:r.default.t("knowledgeGraph.graphView")
            }
          ], i&&p.unshift({
            key:"forest", value:r.default.t("knowledgeGraph.forestView")
          }), (j.cn||j.dn.value)&&p.push({
            key:"knowledge-tree", value:r.default.t("knowledgeGraph.listView")
          }), p), g=(0, o.KR)(k.nE.LEVEL), w=(0, q.rd)().route, x=(0, o.EW)((function(){
            return j.HD.value?C.A:_.Ay
          })), T=(0, o.EW)((function(){
            return j.HD.value?D.A:S.A
          }));
          !function(){
            var e, t;
            (Number.isNaN(Number(null!==(e=w.value.query.node_id)&&void 0!==e?e:0))?0:Number(null!==(t=w.value.query.node_id)&&void 0!==t?t:0))?g.value=k.nE.KNOWLEDGE_TREE:h&&"/forest"===w.value.path&&(g.value=k.nE.FOREST)
          }
          ();
          var R=8===(null===(n=null===(t=window.globalData)||void 0===t?void 0:t.course)||void 0===n?void 0:n.courseType), I=(0, o.KR)([
          ]), A=(0, o.KR)("--"), M=(0, o.KR)("--"), $=(0, o.KR)({
            course:!0, levelRelation:!0, directedRelation:!0, undirectedRelation:!0, showLevelNumber:4
          }), E=(0, o.KR)([
          ]), P=(0, o.KR)(void 0), N=(0, o.EW)((function(){
            return P.value?[
              E.value.find((function(e){
                return e.id===P.value
              }))
            ]
            :E.value
          })), O=(0, o.KR)(), G=(0, o.KR)(), B=(0, o.KR)(), L=(0, o.KR)(!1), K=(0, o.KR)(), U=(0, o.KR)(new a.w0), W=(0, o.KR)(), z=(0, o.KR)(1), F={
            course:(0, Y._k)("root"), levelRelation:(0, Y.HS)(), directedRelation:(0, Y.dn)(), undirectedRelation:(0, Y.eB)()
          };
          (0, o.Gt)("facetDetailModalStatus", {
            opened:!1
          }), (0, o.Gt)("relationContext", {
            fragmentModalInject:B
          });
          var V=(0, o.EW)((function(){
            return j.OC.value===a.M$.PUBLISHED
          })), H=(0, o.EW)((function(){
            return!j.Br&&!j.dn.value&&j.yb
          })), J=(0, o.EW)((function(){
            return!j.yb&&!V.value
          })), X=(0, o.EW)((function(){
            return!!j.Br||(!(j.dn.value||!j.yb)||V.value)
          })), ee=(0, o.EW)((function(){
            return{
              "with-toolbar":j.lj.value, "without-toolbar":!j.lj.value
            }
          })), te=function(e){
            return Z(v, void 0, void 0, (function(){
              var t;
              return Q(this, (function(n){
                return e?L.value&&U.value.id===e?(L.value=!1, [
                  2
                ]):(L.value=!0, U.value.id===e||((t=new a.w0).id=e, U.value=t), [
                  2
                ]):[
                  2
                ]
              }))
            }))
          }, ne=(0, o.EW)((function(){
            return j.Br?400:j.dn.value||!j.yb?600:400
          })), oe=(0, o.EW)((function(){
            return!!j.Br||!(j.dn.value||!j.yb)
          })), re=(0, o.EW)((function(){
            return!j.Br&&(j.dn.value?V.value:V.value&&!j.yb)
          })), ie=(0, o.EW)((function(){
            return j.dn.value||!j.yb?R?V.value?r.default.t("knowledgeGraph.noContent"):r.default.t("project.refactor.notGraphTip"):V.value?r.default.t("knowledgeGraph.noContent"):r.default.t("knowledgeGraph.NoContentTip"):r.default.t("knowledgeGraph.noContent")
          }));
          (0, o.wB)((function(){
            return w.value.path
          }), (function(e){
            "/forest"===e?g.value=k.nE.FOREST:"/graph"===e&&(g.value=k.nE.LEVEL)
          })), (0, o.sV)((function(){
            return Z(v, void 0, void 0, (function(){
              var e, t, n;
              return Q(this, (function(o){
                switch(o.label){
                  case 0:return e=E, [
                    4, (0, s.eh)(f.id)
                  ];
                  case 1:return e.value=o.sent(), j.uW.value=E.value, (t=localStorage.getItem("knowledgeGraphSelectedNodeId"))&&(te(Number(t)), localStorage.removeItem("knowledgeGraphSelectedNodeId")), re.value&&0!==j.m6?[
                    4, (0, s.bi)(f.id, j.m6)
                  ]
                  :[
                    3, 3
                  ];
                  case 2:n=o.sent(), A.value=n.overallCompletenessRate, M.value=n.overallMasteryRate, o.label=3;
                  case 3:return d.A.$on("knowledge-graph-search-selected-node", (function(e){
                    e&&e.id&&te(e.id)
                  })), [
                    2
                  ]
                }
              }))
            }))
          }));
          var ae=(0, u.$U)(), se=ae.tooltipCompletionRate, le=ae.tooltipMasteryRate, ce=ae.isNormalMode;
          return{
            overallCompletenessRate:A, overallMasteryRate:M, canViewOverallRate:re, showKnowledgeTree:function(){
              b.Q.push("/knowledge-tree")
            }, graphSetting:$, nodes:E, viewMode:g, graphViewMode:y, graphRef:O, graphWrapperRef:B, showDrawer:L, currentNode:U, drawerRef:W, clusterGraphRef:G, selectRef:K, settingChange:function(e){
              j.HD.value?($.value.directedRelation=e.directedRelation, $.value.levelRelation=e.levelRelation, $.value.undirectedRelation=e.undirectedRelation, $.value.course=!1, $.value.showLevelNumber=100):($.value.directedRelation=e.directedRelation, $.value.levelRelation=e.levelRelation, $.value.undirectedRelation=e.undirectedRelation, $.value.course=e.course, $.value.showLevelNumber=4)
            }, restPosition:function(){
              var e, t;
              null===(e=O.value)||void 0===e||e.resetZoom(), null===(t=G.value)||void 0===t||t.resetZoom()
            }, fullscreen:function(){
              var e;
              document.fullscreenElement?document.exitFullscreen():null===(e=B.value)||void 0===e||e.requestFullscreen()
            }, clickNode:te, closeDrawer:function(){
              var e;
              null===(e=O.value)||void 0===e||e.resetActive()
            }, clickDocument:function(){
              L.value=!1
            }, clickIframe:function(){
              K.value&&K.value.visible&&(K.value.visible=!1)
            }, zoomIn:function(){
              var e, t, n, o;
              null===(t=null===(e=O.value)||void 0===e?void 0:e.zoomIn)||void 0===t||t.call(e), null===(o=null===(n=G.value)||void 0===n?void 0:n.zoomIn)||void 0===o||o.call(n)
            }, zoomOut:function(){
              var e, t, n, o;
              null===(t=null===(e=O.value)||void 0===e?void 0:e.zoomOut)||void 0===t||t.call(e), null===(o=null===(n=G.value)||void 0===n?void 0:n.zoomOut)||void 0===o||o.call(n)
            }, canViewLearningPath:oe, drawerWidth:ne, haveUpdatePermission:H, publishOrCancelPublish:function(){
              return Z(v, void 0, void 0, (function(){
                var e, t;
                return Q(this, (function(n){
                  switch(n.label){
                    case 0:return e=V.value?r.default.t("knowledgeGraph.cancelPublishTip"):r.default.t("knowledgeGraph.publishTip"), [
                      4, c.A.open({
                        title:r.default.t("tips"), type:"warning", divider:!1, width:416, content:e
                      })
                    ];
                    case 1:return n.sent()?(t=V.value?a.M$.UNPUBLISHED:a.M$.PUBLISHED, [
                      4, (0, s.Dy)(f.id, t).then((function(){
                        j.OC.value=t;
                        var e=V.value?r.default.t("knowledgeGraph.publishSuccess"):r.default.t("knowledgeGraph.cancelPublishSuccess");
                        l.A.success(e)
                      })).catch((function(e){
                        var t;
                        (null===(t=e.response)||void 0===t?void 0:t.data.message)&&l.A.error(e.response.data.message)
                      }))
                    ]):[
                      2
                    ];
                    case 2:return n.sent(), [
                      2
                    ]
                  }
                }))
              }))
            }, isPublished:V, canViewContent:X, isProject:R, learningPathDisabled:J, isCognitiveDimensionOpen:m, dimensions:I, onCognitiveDimensionSelected:function(e){
              I.value=e
            }, onViewModeChange:function(){
              I.value=[
              ], b.Q.replace({
              })
            }, getNodes:function(){
              return Z(v, void 0, void 0, (function(){
                var e;
                return Q(this, (function(t){
                  switch(t.label){
                    case 0:return e=E, [
                      4, (0, s.eh)(f.id)
                    ];
                    case 1:return e.value=t.sent(), j.uW.value=E.value, [
                      2
                    ]
                  }
                }))
              }))
            }, noDataTip:ie, course:f, isSimulatingAsStudent:j.dn, tooltipCompletionRate:se, tooltipMasteryRate:le, isNormalMode:ce, allowFacetsAndFragments:h, currentTopNode:P, currentNodes:N, isDark:j.HD, clickOutside:function(){
              L.value=!1
            }, keyword:j.Si, legendColor:Y.Vl, updateNodeName:function(e){
              var t, n;
              null===(n=null===(t=O.value)||void 0===t?void 0:t.updateNodeName)||void 0===n||n.call(t, e)
            }, graphSvgBgInside:_.nx, settingColors:F, zoomChange:function(e){
              z.value=e
            }, zoom:z, zoomTo:function(e){
              var t, n, o, r;
              null===(n=null===(t=O.value)||void 0===t?void 0:t.zoomTo)||void 0===n||n.call(t, e), null===(r=null===(o=G.value)||void 0===o?void 0:o.zoomTo)||void 0===r||r.call(o, e)
            }, graphComponent:x, toolbarComponent:T, showSearchToolbar:j.lj, toolbarClass:ee
          }
        }
      });
      const X=(0, g.A)(J, (function(){
        var e=this, t=e.$createElement, n=e._self._c||t;
        return n("div", {
          staticClass:"knowledge-relation"
        }, [
          e.isSimulatingAsStudent?n("CoursePreviewTip", {
            attrs:{
              course_id:e.course.id
            }
          }):e._e(), e._v(" "), e.canViewContent?n("div", {
            staticClass:"outer-wrapper"
          }, [
            e.isDark?n("LeftDrawer", {
              staticClass:"left-drawer", attrs:{
                nodes:e.nodes
              }, model:{
                value:e.currentTopNode, callback:function(t){
                  e.currentTopNode=t
                }, expression:"currentTopNode"
              }
            }):e._e(), e._v(" "), n("div", {
              ref:"graphWrapperRef", staticClass:"graph-wrapper"
            }, [
              "level"===e.viewMode?n(e.graphComponent, {
                ref:"graphRef", tag:"component", staticClass:"graph", attrs:{
                  nodes:e.currentNodes, "view-mode":e.viewMode, keyword:e.keyword, dimensions:e.dimensions, setting:e.graphSetting
                }, on:{
                  "on-click-node":e.clickNode, "on-click-outside":e.clickOutside, "on-zoom":e.zoomChange
                }
              }):e._e(), e._v(" "), "level"===e.viewMode?n("Legend", {
                staticClass:"graph-legend", class:e.toolbarClass, attrs:{
                  "level-colors":e.legendColor(), svg:e.graphSvgBgInside, "view-mode":e.viewMode
                }, model:{
                  value:e.graphSetting.showLevelNumber, callback:function(t){
                    e.$set(e.graphSetting, "showLevelNumber", t)
                  }, expression:"graphSetting.showLevelNumber"
                }
              }):e._e(), e._v(" "), "knowledge-tree"===e.viewMode?n("KnowledgeTree", {
                attrs:{
                  keyword:e.keyword, dimensions:e.dimensions, "show-header":!1
                }
              }):e._e(), e._v(" "), "knowledge-tree"!==e.viewMode?n(e.toolbarComponent, {
                tag:"component", staticClass:"graph-toolbar", attrs:{
                  "view-mode":e.viewMode, zoom:e.zoom
                }, on:{
                  "on-setting-change":e.settingChange, "on-fullscreen":e.fullscreen, "on-position":e.restPosition, "on-zoom-in":e.zoomIn, "on-zoom-out":e.zoomOut, "on-zoom-to":e.zoomTo
                }
              }):e._e(), e._v(" "), e.isDark?e._e():n("Setting", {
                attrs:{
                  "view-mode":e.viewMode, svg:e.graphSvgBgInside, colors:e.settingColors
                }, on:{
                  "on-setting-change":e.settingChange
                }
              }), e._v(" "), e.allowFacetsAndFragments&&"forest"===e.viewMode?n("ClusterGraph", {
                ref:"clusterGraphRef", on:{
                  "on-click-node":e.clickNode, "on-document-click":e.clickDocument, "on-iframe-click":e.clickIframe
                }
              }):e._e(), e._v(" "), n("Drawer", {
                ref:"drawerRef", staticClass:"right-drawer", class:{
                  wide:e.drawerWidth>450
                }, attrs:{
                  fixed:"", width:e.drawerWidth, button:!1, mask:!1
                }, on:{
                  "on-close":e.closeDrawer
                }, model:{
                  value:e.showDrawer, callback:function(t){
                    e.showDrawer=t
                  }, expression:"showDrawer"
                }
              }, [
                e.currentNode.id?n("NodeDetailContent", {
                  attrs:{
                    node:e.currentNode, statistics:!0
                  }, on:{
                    "update-node-name":e.updateNodeName
                  }
                }):e._e()
              ], 1)
            ], 1)
          ], 1):n("NoData", [
            e._v(e._s(e.noDataTip))
          ])
        ], 1)
      }), [
      ], !1, null, "2a3f99c4", null).exports
    }, 259834:(e, t, n)=>{
      n.r(t), n.d(t, {
        default:()=>l
      });
      var o=n(512897), r=n.n(o), i=n(55042), a=n.n(i), s=new(r())({
        id:"clear", use:"clear-usage", viewBox:"0 0 16 16", content:'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="clear">\n    <g fill="none" fill-rule="evenodd">\n        <g fill-rule="nonzero">\n            <g>\n                <g transform="translate(-612 -1855) translate(612 1855)">\n                    <circle cx="8" cy="8" r="8" fill="#E8E8E8" />\n                    <g fill="#808695">\n                        <path d="M1.354.646L4 3.293 6.646.646C6.82.473 7.09.454 7.284.59l.07.057c.195.196.195.512 0 .708L4.707 4l2.647 2.646c.195.196.195.512 0 .708-.196.195-.512.195-.708 0L4 4.707 1.354 7.354c-.174.173-.443.192-.638.057l-.07-.057c-.195-.196-.195-.512 0-.708L3.293 4 .646 1.354C.451 1.158.451.842.646.646c.196-.195.512-.195.708 0z" transform="translate(4 4)" />\n                    </g>\n                </g>\n            </g>\n        </g>\n    </g>\n</symbol>'
      });
      a().add(s);
      const l=s
    }, 273227:(e, t, n)=>{
      n.r(t), n.d(t, {
        default:()=>l
      });
      var o=n(512897), r=n.n(o), i=n(55042), a=n.n(i), s=new(r())({
        id:"info", use:"info-usage", viewBox:"0 0 14 14", content:'<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 14 14" id="info">\n<style type="text/css">\n\t#info .st0{fill-rule:evenodd;clip-rule:evenodd;fill:currentColor;}\n</style>\n<title>icon/alert/常规</title>\n<desc>Created with Sketch.</desc>\n<g>\n\t<path id="info_Combined-Shape" class="st0" d="M7,1c3.3,0,6,2.7,6,6s-2.7,6-6,6s-6-2.7-6-6S3.7,1,7,1z M7.6,5.8H6.4v3.6l-0.6,0v0.9h2.4\n\t\tV9.4l-0.6,0V5.8z M6.4,5.8H5.8v0.9h0.6V5.8z M7,3.4c-0.5,0-0.9,0.4-0.9,0.9S6.5,5.2,7,5.2s0.9-0.4,0.9-0.9S7.5,3.4,7,3.4z" />\n</g>\n</symbol>'
      });
      a().add(s);
      const l=s
    }, 316075:(e, t, n)=>{
      n.d(t, {
        VY:()=>u, g4:()=>c, tQ:()=>d
      });
      var o, r=n(738645), i=n(152229), a=n(759513), s=(o=function(e, t){
        return(o=Object.setPrototypeOf||{
          __proto__:[
          ]
        }
        instanceof Array&&function(e, t){
          e.__proto__=t
        }
        ||function(e, t){
          for(var n in t)Object.prototype.hasOwnProperty.call(t, n)&&(e[
            n
          ]
          =t[
            n
          ])
        })(e, t)
      }, function(e, t){
        if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");
        function n(){
          this.constructor=e
        }
        o(e, t), e.prototype=null===t?Object.create(t):(n.prototype=t.prototype, new n)
      }), l=function(e, t, n, o){
        var r, i=arguments.length, a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t, n):o;
        if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e, t, n, o);
        else for(var s=e.length-1;
        s>=0;
        s--)(r=e[
          s
        ])&&(a=(i<3?r(a):i>3?r(t, n, a):r(t, n))||a);
        return i>3&&a&&Object.defineProperty(t, n, a), a
      }, c=function(){
        function e(){
        }
        return l([
          (0, r.v)()
        ], e.prototype, "id", void 0), l([
          (0, r.v)()
        ], e.prototype, "sequence", void 0), l([
          (0, r.v)()
        ], e.prototype, "name", void 0), e
      }
      (), u=function(){
        function e(){
          this.id=0, this.teachingWeekId=void 0, this.type="", this.content="", this.hours="", this.instructor="", this.location="", this.teachingDate=null, this.teachingTime="", this.timeRange=null, this.teachingWeek=null
        }
        return l([
          (0, r.v)()
        ], e.prototype, "id", void 0), l([
          (0, r.v)()
        ], e.prototype, "teachingWeekId", void 0), l([
          (0, r.v)()
        ], e.prototype, "type", void 0), l([
          (0, r.v)()
        ], e.prototype, "content", void 0), l([
          (0, r.v)()
        ], e.prototype, "hours", void 0), l([
          (0, r.v)()
        ], e.prototype, "instructor", void 0), l([
          (0, r.v)()
        ], e.prototype, "location", void 0), l([
          (0, r.v)()
        ], e.prototype, "teachingDate", void 0), l([
          (0, r.v)()
        ], e.prototype, "teachingTime", void 0), l([
          (0, r.v)()
        ], e.prototype, "timeRange", void 0), l([
          (0, r.v)(), (0, i.Z)((function(){
            return c
          }))
        ], e.prototype, "teachingWeek", void 0), e
      }
      (), d=function(e){
        function t(){
          return null!==e&&e.apply(this, arguments)||this
        }
        return s(t, e), l([
          (0, r.v)(), (0, i.Z)((function(){
            return a.ae
          }))
        ], t.prototype, "course", void 0), t
      }
      (u)
    }, 333706:(e, t, n)=>{
      n.d(t, {
        L$:()=>a, _l:()=>r, rq:()=>i
      });
      var o=n(572366), r=function(e, t){
        return void 0===t&&(t=0), (null!=e?e:0)+t
      }, i=function(e, t){
        return(0, o.$Er)().on("start", (function(){
          e.alphaTarget(.3).restart(), o.f0J.subject.fx=o.f0J.subject.x, o.f0J.subject.fy=o.f0J.subject.y, t&&(t.dragging=!0)
        })).on("drag", (function(){
          o.f0J.subject.fx=o.f0J.x, o.f0J.subject.fy=o.f0J.y
        })).on("end", (function(){
          t&&(t.dragging=!1), o.f0J.active||e.alphaTarget(0), o.f0J.subject.fx=void 0, o.f0J.subject.fy=void 0
        }))
      }, a=function(e, t, n){
        return e.style("transform-origin", "top left"), (0, o.s_O)().extent([
          [
            0, 0
          ], [
            t, n
          ]
        ]).scaleExtent([
          -1, 8
        ]).on("zoom", (function(){
          var t=o.f0J.transform;
          e.style("transform", "translate(".concat(t.x, "px, ").concat(t.y, "px) scale(").concat(t.k, ")")), e.selectAll("text").attr("font-size", Math.min(14, 14/t.k)), e.select(".link").selectAll("path").attr("stroke-width", Math.min(.3, .3/t.k)), e.selectAll("marker").attr("stroke-width", Math.min(.3, .3/t.k)).attr("refX", Math.min(10, 10/t.k)).selectAll("path").attr("d", "M 0 ".concat(-Math.min(5, 5/t.k), " L ").concat(Math.min(10, 10/t.k), " 0 L 0 ").concat(Math.min(5, 5/t.k)))
        }))
      }
    }, 344651:(e, t, n)=>{
      n.d(t, {
        $A:()=>b, Il:()=>p, sB:()=>_, uJ:()=>r, ul:()=>w, xY:()=>f, z$:()=>h
      });
      n(540590);
      var o, r, i=n(738645), a=n(510543), s=n(152229), l=n(731904), c=(o=function(e, t){
        return(o=Object.setPrototypeOf||{
          __proto__:[
          ]
        }
        instanceof Array&&function(e, t){
          e.__proto__=t
        }
        ||function(e, t){
          for(var n in t)Object.prototype.hasOwnProperty.call(t, n)&&(e[
            n
          ]
          =t[
            n
          ])
        })(e, t)
      }, function(e, t){
        if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");
        function n(){
          this.constructor=e
        }
        o(e, t), e.prototype=null===t?Object.create(t):(n.prototype=t.prototype, new n)
      }), u=function(e, t, n, o){
        var r, i=arguments.length, a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t, n):o;
        if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e, t, n, o);
        else for(var s=e.length-1;
        s>=0;
        s--)(r=e[
          s
        ])&&(a=(i<3?r(a):i>3?r(t, n, a):r(t, n))||a);
        return i>3&&a&&Object.defineProperty(t, n, a), a
      }, d=[
        "none", "auditing", "agree", "reject"
      ], p=(function(){
        function e(){
        }
        u([
          (0, i.v)()
        ], e.prototype, "id", void 0), u([
          (0, i.v)()
        ], e.prototype, "duration", void 0)
      }
      (), function(){
        function e(){
        }
        u([
          (0, i.v)()
        ], e.prototype, "id", void 0), u([
          (0, i.v)()
        ], e.prototype, "name", void 0), u([
          (0, i.v)()
        ], e.prototype, "size", void 0), u([
          (0, i.v)()
        ], e.prototype, "deleted", void 0), u([
          (0, i.v)()
        ], e.prototype, "type", void 0), u([
          (0, i.v)()
        ], e.prototype, "status", void 0), u([
          (0, i.v)()
        ], e.prototype, "videoSrcType", void 0), u([
          (0, i.v)()
        ], e.prototype, "allowDownload", void 0), u([
          (0, i.v)()
        ], e.prototype, "audio", void 0), u([
          (0, i.v)()
        ], e.prototype, "videos", void 0)
      }
      (), function(){
        function e(){
        }
        u([
          (0, i.v)()
        ], e.prototype, "id", void 0), u([
          (0, i.v)()
        ], e.prototype, "uploads", void 0)
      }
      (), function(){
        function e(){
        }
        u([
          (0, i.v)()
        ], e.prototype, "id", void 0), u([
          (0, i.v)()
        ], e.prototype, "videoQuiz", void 0)
      }
      (), function(){
        function e(){
        }
        u([
          (0, i.v)()
        ], e.prototype, "cameraType", void 0), u([
          (0, i.v)()
        ], e.prototype, "fileUrl", void 0), u([
          (0, i.v)()
        ], e.prototype, "label", void 0)
      }
      (), function(){
        function e(){
        }
        u([
          (0, i.v)()
        ], e.prototype, "duration", void 0), u([
          (0, i.v)()
        ], e.prototype, "status", void 0)
      }
      (), function(){
        function e(){
        }
        u([
          (0, i.v)()
        ], e.prototype, "id", void 0), u([
          (0, i.v)()
        ], e.prototype, "name", void 0), u([
          (0, i.v)()
        ], e.prototype, "mimetype", void 0), u([
          (0, i.v)()
        ], e.prototype, "appId", void 0), u([
          (0, i.v)()
        ], e.prototype, "properties", void 0)
      }
      (), function(){
        function e(){
        }
        u([
          (0, i.v)(), (0, a.d)((function(e){
            var t=e.value;
            return l.TimeUtils.toLocalDate(t)
          }), {
            toClassOnly:!0
          })
        ], e.prototype, "startTime", void 0), u([
          (0, i.v)(), (0, a.d)((function(e){
            var t=e.value;
            return l.TimeUtils.toLocalDate(t)
          }), {
            toClassOnly:!0
          })
        ], e.prototype, "endTime", void 0), u([
          (0, i.v)()
        ], e.prototype, "videos", void 0)
      }
      (), function(){
        function e(){
        }
        return u([
          (0, i.v)()
        ], e.prototype, "id", void 0), u([
          (0, i.v)()
        ], e.prototype, "title", void 0), u([
          (0, i.v)()
        ], e.prototype, "courseId", void 0), u([
          (0, i.v)()
        ], e.prototype, "type", void 0), u([
          (0, i.v)()
        ], e.prototype, "data", void 0), u([
          (0, i.v)(), (0, a.d)((function(e){
            var t=e.value;
            return l.TimeUtils.toLocalDate(t)
          }), {
            toClassOnly:!0
          })
        ], e.prototype, "startTime", void 0), u([
          (0, i.v)(), (0, a.d)((function(e){
            var t=e.value;
            return l.TimeUtils.toLocalDate(t)
          }), {
            toClassOnly:!0
          })
        ], e.prototype, "endTime", void 0), u([
          (0, i.v)(), (0, a.d)((function(e){
            var t=e.value;
            return l.TimeUtils.toLocalDate(t)
          }), {
            toClassOnly:!0
          })
        ], e.prototype, "lastSubMeetingEndTime", void 0), u([
          (0, i.v)()
        ], e.prototype, "canReprocessReplay", void 0), u([
          (0, i.v)()
        ], e.prototype, "completionCriterion", void 0), u([
          (0, i.v)()
        ], e.prototype, "completionCriterionKey", void 0), u([
          (0, i.v)()
        ], e.prototype, "completionCriterionValue", void 0), u([
          (0, i.v)()
        ], e.prototype, "interScoreMap", void 0), u([
          (0, i.v)()
        ], e.prototype, "intraScoreMap", void 0), u([
          (0, i.v)(), (0, a.d)((function(e){
            return function(e){
              return l.TimeUtils.isAfterByNow(e.startTime)?"notStarted":e.lastSubMeetingEndTime&&l.TimeUtils.isAfterByNow(e.lastSubMeetingEndTime)||!e.endTime||l.TimeUtils.isAfterByNow(e.endTime)?"inProgress":"expired"
            }
            (e.obj)
          }))
        ], e.prototype, "status", void 0), u([
          (0, i.v)(), (0, a.d)((function(e){
            var t=e.obj;
            return d[
              t.data.auditStatus
            ]
          }))
        ], e.prototype, "auditStatus", void 0), u([
          (0, i.v)(), (0, a.d)((function(e){
            var t=e.value;
            return l.TimeUtils.toLocalDate(t)
          }), {
            toClassOnly:!0
          })
        ], e.prototype, "createdAt", void 0), u([
          (0, i.v)()
        ], e.prototype, "createdBy", void 0), u([
          (0, i.v)()
        ], e.prototype, "meetingHostUser", void 0), u([
          (0, i.v)()
        ], e.prototype, "isBookedLive", void 0), u([
          (0, i.v)()
        ], e.prototype, "bookedCount", void 0), u([
          (0, i.v)()
        ], e.prototype, "tencentMeetingType", void 0), u([
          (0, i.v)()
        ], e.prototype, "orgId", void 0), u([
          (0, i.v)()
        ], e.prototype, "moduleId", void 0), u([
          (0, i.v)()
        ], e.prototype, "syllabusId", void 0), u([
          (0, i.v)()
        ], e.prototype, "uploads", void 0), u([
          (0, i.v)()
        ], e.prototype, "interactionActivityAttributes", void 0), u([
          (0, i.v)()
        ], e.prototype, "lessonResource", void 0), u([
          (0, i.v)()
        ], e.prototype, "videoSuite", void 0), u([
          (0, i.v)()
        ], e.prototype, "viewUrl", void 0), e
      }
      ()), v=function(e){
        this.type=e, this.recurringType=-1
      }, f=function(e){
        function t(){
          return e.call(this, "chinamcloud_live")||this
        }
        return c(t, e), t
      }
      (v), h=function(e){
        function t(){
          var t=e.call(this, "lesson")||this;
          return t.lessonType="lesson_replay", t
        }
        return c(t, e), t
      }
      (v), m=function(){
        function e(){
          this.leftSecond=0, this.progress=0, this.retryTimes=0
        }
        return u([
          (0, i.v)()
        ], e.prototype, "leftSecond", void 0), u([
          (0, i.v)()
        ], e.prototype, "progress", void 0), u([
          (0, i.v)()
        ], e.prototype, "retryTimes", void 0), e
      }
      (), y=function(){
        function e(){
        }
        return u([
          (0, i.v)()
        ], e.prototype, "label", void 0), u([
          (0, i.v)()
        ], e.prototype, "muted", void 0), u([
          (0, i.v)()
        ], e.prototype, "streamUrl", void 0), u([
          (0, i.v)()
        ], e.prototype, "type", void 0), u([
          (0, i.v)()
        ], e.prototype, "flvSrc", void 0), u([
          (0, i.v)()
        ], e.prototype, "flvType", void 0), u([
          (0, i.v)()
        ], e.prototype, "defaultProtocal", void 0), e
      }
      (), g=function(){
        function e(){
        }
        return u([
          (0, i.v)()
        ], e.prototype, "cameraType", void 0), u([
          (0, i.v)()
        ], e.prototype, "cameraId", void 0), u([
          (0, i.v)()
        ], e.prototype, "mute", void 0), u([
          (0, i.v)()
        ], e.prototype, "url", void 0), u([
          (0, i.v)()
        ], e.prototype, "mediaProtocol", void 0), e
      }
      (), w=function(){
        function e(){
          this.description="", this.progress=null, this.streams=null, this.replayVideos=null, this.controllerConfig={
          }, this.liveCaptionConfig={
          }, this.viewLive=!0, this.viewRecord=!0
        }
        return u([
          (0, i.v)()
        ], e.prototype, "instructorNames", void 0), u([
          (0, i.v)()
        ], e.prototype, "description", void 0), u([
          (0, i.v)(), (0, s.Z)((function(){
            return m
          }))
        ], e.prototype, "progress", void 0), u([
          (0, i.v)(), (0, s.Z)((function(){
            return y
          }))
        ], e.prototype, "streams", void 0), u([
          (0, i.v)()
        ], e.prototype, "status", void 0), u([
          (0, i.v)()
        ], e.prototype, "replayId", void 0), u([
          (0, i.v)(), (0, s.Z)((function(){
            return g
          }))
        ], e.prototype, "replayVideos", void 0), u([
          (0, i.v)(), (0, a.d)((function(e){
            return e.value||{
            }
          }), {
            toClassOnly:!0
          })
        ], e.prototype, "controllerConfig", void 0), u([
          (0, i.v)(), (0, a.d)((function(e){
            return e.value||{
            }
          }), {
            toClassOnly:!0
          })
        ], e.prototype, "liveCaptionConfig", void 0), u([
          (0, i.v)(), (0, a.d)((function(e){
            return e.value.roomName
          }), {
            toClassOnly:!0
          })
        ], e.prototype, "room", void 0), u([
          (0, i.v)()
        ], e.prototype, "type", void 0), u([
          (0, i.v)()
        ], e.prototype, "isBookedLive", void 0), u([
          (0, i.v)()
        ], e.prototype, "bookedCount", void 0), u([
          (0, i.v)()
        ], e.prototype, "viewLive", void 0), u([
          (0, i.v)()
        ], e.prototype, "viewRecord", void 0), e
      }
      (), b=function(){
        function e(){
        }
        return u([
          (0, i.v)()
        ], e.prototype, "id", void 0), u([
          (0, i.v)()
        ], e.prototype, "displayName", void 0), u([
          (0, i.v)()
        ], e.prototype, "type", void 0), u([
          (0, i.v)()
        ], e.prototype, "percentage", void 0), e
      }
      ();
      !function(e){
        function t(){
          return null!==e&&e.apply(this, arguments)||this
        }
        c(t, e)
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
      (r||(r={
      }));
      var _=function(){
        function e(){
        }
        return u([
          (0, i.v)()
        ], e.prototype, "id", void 0), u([
          (0, i.v)()
        ], e.prototype, "createdAt", void 0), u([
          (0, i.v)()
        ], e.prototype, "scoreMethod", void 0), u([
          (0, i.v)()
        ], e.prototype, "version", void 0), u([
          (0, i.v)()
        ], e.prototype, "oldScore", void 0), u([
          (0, i.v)()
        ], e.prototype, "score", void 0), u([
          (0, i.v)()
        ], e.prototype, "oldFinalScore", void 0), u([
          (0, i.v)()
        ], e.prototype, "finalScore", void 0), u([
          (0, i.v)()
        ], e.prototype, "operatorName", void 0), u([
          (0, i.v)()
        ], e.prototype, "operatorId", void 0), e
      }
      ()
    }, 390359:(e, t, n)=>{
      n.r(t), n.d(t, {
        default:()=>A
      });
      var o=n(595738), r=n(27550), i=n(379960), a=n(979278), s=n(574799), l=n(86226), c=n(990311);
      const u=(0, o.pM)({
        components:{
          SvgIcon:a.A, TeachingObjectiveSelect:l.A, NodeDetailContent:c.A, NoData:i.A
        }, props:{
          statistics:{
            type:Boolean, default:!1
          }
        }, setup:function(){
          var e=(0, o.KR)();
          return(0, o.wB)(s.gW, (function(t){
            t&&(e.value=t.selected()[
              0
            ], t.$on("node:selected", (function(t){
              e.value=t
            })), t.$on("node:saved", (function(t){
              e.value=t
            })), t.$on("node:removed", (function(t){
              e.value=null
            })))
          })), {
            currentNode:e
          }
        }
      });
      var d=n(514486);
      const p=(0, d.A)(u, (function(){
        var e=this, t=e.$createElement, n=e._self._c||t;
        return e.currentNode?n("div", {
          staticClass:"container"
        }, [
          n("NodeDetailContent", {
            attrs:{
              node:e.currentNode, statistics:e.statistics
            }
          })
        ], 1):n("NoData", [
          e._v(e._s(e.$t("knowledgeGraph.nodata")))
        ])
      }), [
      ], !1, null, "61436ae2", null).exports;
      var v=n(243248), f=(n(269193), n(592207)), h=n.n(f), m=(n(207452), n(552979)), y=n(818183), g=n(766800), w=n(877401), b=n(769075), _=n(789974), C=n(587881), k=n(458793);
      function x(e, t, n, o, r, i, a){
        try{
          var s=e[
            i
          ]
          (a), l=s.value
        }
        catch(e){
          return void n(e)
        }
        s.done?t(l):Promise.resolve(l).then(o, r)
      }
      function S(e){
        return function(){
          var t=this, n=arguments;
          return new Promise((function(o, r){
            var i=e.apply(t, n);
            function a(e){
              x(i, o, r, a, s, "next", e)
            }
            function s(e){
              x(i, o, r, a, s, "throw", e)
            }
            a(void 0)
          }))
        }
      }
      const D=(0, o.pM)({
        components:{
          HeaderWrapper:_.A, CourseName:C.A, SvgIcon:a.A
        }, setup(){
          var e=(0, o.WQ)("course", {
            id:0, type:0
          }), t=(0, o.EW)((()=>8===e.type)), n=(0, o.KR)(!1), r=(0, o.KR)("--"), i=(0, o.KR)("--"), a=(0, o.EW)((()=>s.OC.value===g.M$.PUBLISHED)), l=function(){
            var t=S(h().mark((function t(){
              var n, o;
              return h().wrap((function(t){
                for(;
                ;
                )switch(t.prev=t.next){
                  case 0:return n=a.value?m.default.t("knowledgeGraph.cancelPublishTip"):m.default.t("knowledgeGraph.publishTip"), t.next=3, b.A.open({
                    title:m.default.t("tips"), type:"warning", divider:!1, width:416, content:n
                  });
                  case 3:if(t.sent){
                    t.next=6;
                    break
                  }
                  return t.abrupt("return");
                  case 6:return o=a.value?g.M$.UNPUBLISHED:g.M$.PUBLISHED, t.next=9, (0, w.Dy)(e.id, o).then((()=>{
                    s.OC.value=o;
                    var e=a.value?m.default.t("knowledgeGraph.publishSuccess"):m.default.t("knowledgeGraph.cancelPublishSuccess");
                    y.A.success(e)
                  })).catch((e=>{
                    var t;
                    null!==(t=e.response)&&void 0!==t&&t.data.message&&y.A.error(e.response.data.message)
                  }));
                  case 9:case"end":return t.stop()
                }
              }), t)
            })));
            return function(){
              return t.apply(this, arguments)
            }
          }
          ();
          (0, o.sV)(S(h().mark((function t(){
            var n;
            return h().wrap((function(t){
              for(;
              ;
              )switch(t.prev=t.next){
                case 0:if(!s.Br.value&&!s.yb&&0!==s.m6){
                  t.next=2;
                  break
                }
                return t.abrupt("return");
                case 2:return t.next=4, (0, w.bi)(e.id, s.m6);
                case 4:n=t.sent, r.value=n.overallCompletenessRate, i.value=n.overallMasteryRate;
                case 7:case"end":return t.stop()
              }
            }), t)
          }))));
          var c=(0, o.EW)((()=>!s.Br&&(s.dn.value?a.value:a.value&&!s.yb))), u=(0, o.EW)((()=>!s.Br&&!s.dn.value&&s.yb)), d=(0, o.EW)((()=>!!s.Br||(!(s.dn.value||!s.yb)||a.value)));
          return{
            isProject:t, isInstructor:s.yb, isPublished:a, show:n, overallCompletenessRate:r, overallMasteryRate:i, toGraph:()=>{
              k.Q.push("/relation")
            }, closeModal:()=>{
              n.value=!1
            }, publishOrCancelPublish:l, canViewOverallRate:c, canPublish:u, canViewGraph:d
          }
        }
      });
      const T=(0, d.A)(D, (function(){
        var e=this, t=e.$createElement, n=e._self._c||t;
        return n("HeaderWrapper", {
          scopedSlots:e._u([
            {
              key:"btn-group", fn:function(){
                return[
                  e._t("default", [
                    n("div", {
                      staticClass:"right-content"
                    }, [
                      e.canViewOverallRate?n("div", {
                        staticClass:"flex"
                      }, [
                        n("Tooltip", {
                          attrs:{
                            content:e.isProject?e.$t("project.refactor.completeRateTip"):e.$t("knowledgeGraph.completeRateTip"), placement:"top"
                          }
                        }, [
                          n("div", {
                            staticClass:"rate"
                          }, [
                            e._v("\n              "+e._s(e.$t("knowledgeGraph.allCompleteRate"))+": "+e._s(e.overallCompletenessRate)+"\n              "), n("span", {
                              staticClass:"font font-question"
                            })
                          ])
                        ]), e._v(" "), n("Tooltip", {
                          attrs:{
                            content:e.isProject?e.$t("project.refactor.masteryRateTip"):e.$t("knowledgeGraph.masteryRateTip"), placement:"top"
                          }
                        }, [
                          n("div", {
                            staticClass:"rate"
                          }, [
                            e._v("\n              "+e._s(e.$t("knowledgeGraph.allMasteryRate"))+": "+e._s(e.overallMasteryRate)+"\n              "), n("span", {
                              staticClass:"font font-question"
                            })
                          ])
                        ])
                      ], 1):e._e(), e._v(" "), n("div", {
                        staticClass:"btn-group"
                      }, [
                        e.canPublish?n("span", [
                          e.isPublished?n("Button", {
                            staticClass:"publish-btn", on:{
                              click:e.publishOrCancelPublish
                            }
                          }, [
                            n("SvgIcon", {
                              attrs:{
                                name:"unpublish"
                              }
                            }), e._v("\n              "+e._s(e.$t("knowledgeGraph.cancelPublish"))+"\n            ")
                          ], 1):n("Button", {
                            staticClass:"publish-btn", attrs:{
                              type:"primary"
                            }, on:{
                              click:e.publishOrCancelPublish
                            }
                          }, [
                            n("SvgIcon", {
                              attrs:{
                                name:"publish"
                              }
                            }), e._v("\n              "+e._s(e.$t("knowledgeGraph.publish"))+"\n            ")
                          ], 1)
                        ], 1):e._e(), e._v(" "), n("Button", {
                          attrs:{
                            disabled:!e.canViewGraph
                          }, on:{
                            click:e.toGraph
                          }
                        }, [
                          e._v("\n            "+e._s(e.$t("knowledgeGraph.viewGraph"))+"\n          ")
                        ])
                      ], 1)
                    ])
                  ])
                ]
              }, proxy:!0
            }
          ], null, !0)
        }, [
          n("CourseName")
        ], 1)
      }), [
      ], !1, null, "0a19db4c", null).exports;
      var R=n(526320);
      const I=(0, o.pM)({
        components:{
          Content:v.A, Drawer:r.A, NoData:i.A, NodeDetail:p, Header:T
        }, props:{
          keyword:{
            type:String
          }, dimensions:{
            type:Array, default:function(){
              return[
              ]
            }
          }, showHeader:{
            type:Boolean, default:!0
          }
        }, setup:function(){
          var e, t, n=(0, o.EW)((function(){
            return s.OC.value===g.M$.PUBLISHED
          })), r=8===(null===(t=null===(e=window.globalData)||void 0===e?void 0:e.course)||void 0===t?void 0:t.courseType), i=(0, o.KR)(!1), a=(0, o.EW)((function(){
            return!!s.Br||(!(s.dn.value||!s.yb)||n.value)
          })), l=(0, o.EW)((function(){
            return s.Br?480:s.dn.value||!s.yb?600:480
          }));
          return(0, o.sV)((function(){
            R.A.$on("show-drawer", (function(){
              i.value=!0
            })), R.A.$on("close-drawer", (function(){
              i.value=!1
            }))
          })), {
            isProject:r, isPublished:n, isInstructor:s.yb, isSimulatingInstructor:s.Br, canViewContent:a, drawerWidth:l, showDrawer:i, handleFilter:function(){
              R.A.$emit("show-search-toolbar-filter")
            }, handleSearch:function(){
              R.A.$emit("show-search-toolbar")
            }
          }
        }
      });
      const A=(0, d.A)(I, (function(){
        var e=this, t=e.$createElement, n=e._self._c||t;
        return n("div", [
          n("div", {
            staticClass:"knowledge-content"
          }, [
            n("div", {
              staticClass:"graph-setting"
            }, [
              n("div", {
                ref:"eleRef", staticClass:"graph-tool"
              }, [
                n("Tooltip", {
                  attrs:{
                    content:e.$t("search"), placement:"right", transfer:""
                  }
                }, [
                  n("Button", {
                    attrs:{
                      type:"text"
                    }, on:{
                      click:function(t){
                        return t.stopPropagation(), e.handleSearch(t)
                      }
                    }
                  }, [
                    n("i", {
                      staticClass:"font font-nav-search"
                    })
                  ])
                ], 1), e._v(" "), n("Tooltip", {
                  attrs:{
                    content:e.$t("subjectLib.filter"), placement:"right", transfer:""
                  }
                }, [
                  n("Button", {
                    attrs:{
                      type:"text"
                    }, on:{
                      click:function(t){
                        return t.stopPropagation(), e.handleFilter(t)
                      }
                    }
                  }, [
                    n("SvgIcon", {
                      staticClass:"button-icon", attrs:{
                        name:"filter"
                      }
                    })
                  ], 1)
                ], 1)
              ], 1)
            ]), e._v(" "), e.canViewContent?n("Content", {
              attrs:{
                keyword:e.keyword, dimensions:e.dimensions
              }
            }):n("NoData", [
              e._v(e._s(e.isProject?e.$t("project.refactor.notGraphTip"):e.$t("knowledgeGraph.NoContentTip")))
            ]), e._v(" "), e.canViewContent?n("Drawer", {
              attrs:{
                width:e.drawerWidth
              }, model:{
                value:e.showDrawer, callback:function(t){
                  e.showDrawer=t
                }, expression:"showDrawer"
              }
            }, [
              n("NodeDetail", {
                attrs:{
                  statistics:!0
                }
              })
            ], 1):e._e()
          ], 1)
        ])
      }), [
      ], !1, null, "d5aedb90", null).exports
    }, 448743:(e, t, n)=>{
      n.r(t), n.d(t, {
        AvaLiveInfo:()=>f, BaseCourse:()=>u, ChinamCloudLive:()=>p, CourseAuditReference:()=>g, CourseDetail:()=>h, CourseForm:()=>b, CourseType:()=>o, CourseWithResourceNum:()=>m, Module:()=>d, OnoCourseStatUser:()=>w, SelectedCourse:()=>c, TopCourse:()=>l, Upload:()=>y, liveStatus:()=>v
      });
      var o, r=n(738645), i=n(510543), a=n(88595), s=function(e, t, n, o){
        var r, i=arguments.length, a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t, n):o;
        if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e, t, n, o);
        else for(var s=e.length-1;
        s>=0;
        s--)(r=e[
          s
        ])&&(a=(i<3?r(a):i>3?r(t, n, a):r(t, n))||a);
        return i>3&&a&&Object.defineProperty(t, n, a), a
      }, l=function(){
        function e(){
        }
        return s([
          (0, r.v)()
        ], e.prototype, "id", void 0), s([
          (0, r.v)()
        ], e.prototype, "name", void 0), s([
          (0, r.v)()
        ], e.prototype, "courseCode", void 0), s([
          (0, r.v)()
        ], e.prototype, "rank", void 0), e
      }
      (), c=function(){
        function e(){
          this.selected=!1
        }
        return s([
          (0, r.v)()
        ], e.prototype, "id", void 0), s([
          (0, r.v)()
        ], e.prototype, "orgId", void 0), s([
          (0, r.v)()
        ], e.prototype, "name", void 0), s([
          (0, r.v)()
        ], e.prototype, "selected", void 0), s([
          (0, r.v)()
        ], e.prototype, "courseCode", void 0), e
      }
      (), u=function(){
        function e(){
        }
        return s([
          (0, r.v)()
        ], e.prototype, "id", void 0), s([
          (0, r.v)()
        ], e.prototype, "name", void 0), s([
          (0, r.v)()
        ], e.prototype, "isProject", void 0), e
      }
      ();
      !function(e){
        e[
          e.Normal=1
        ]
        ="Normal", e[
          e.Model=2
        ]
        ="Model", e[
          e.Test=3
        ]
        ="Test", e[
          e.Invalid=4
        ]
        ="Invalid", e[
          e.Trial=5
        ]
        ="Trial", e[
          e.Master=6
        ]
        ="Master", e[
          e.Project=8
        ]
        ="Project"
      }
      (o||(o={
      }));
      var d=function(){
        function e(){
          this.syllabuses=[
          ]
        }
        return s([
          (0, i.d)((function(e){
            var t=e.value;
            return a.A.toLocalDateTime(t)
          }), {
            toClassOnly:!0
          })
        ], e.prototype, "createdAt", void 0), s([
          (0, i.d)((function(e){
            var t=e.value;
            return a.A.toLocalDateTime(t)
          }), {
            toClassOnly:!0
          })
        ], e.prototype, "updatedAt", void 0), e
      }
      (), p=function(){
      }, v=[
        "all", "not_started", "in_progress", "finished"
      ], f=function(){
        function e(){
        }
        return s([
          (0, r.v)()
        ], e.prototype, "title", void 0), s([
          (0, r.v)()
        ], e.prototype, "startTime", void 0), s([
          (0, r.v)()
        ], e.prototype, "endTime", void 0), s([
          (0, r.v)(), (0, i.d)((function(e){
            var t=e.value;
            return v[
              t
            ]
          }))
        ], e.prototype, "liveState", void 0), s([
          (0, r.v)()
        ], e.prototype, "url", void 0), e
      }
      (), h=function(){
        function e(){
        }
        return s([
          (0, r.v)()
        ], e.prototype, "id", void 0), s([
          (0, r.v)()
        ], e.prototype, "name", void 0), s([
          (0, r.v)()
        ], e.prototype, "academicYear", void 0), s([
          (0, r.v)()
        ], e.prototype, "compulsory", void 0), s([
          (0, r.v)()
        ], e.prototype, "courseCode", void 0), s([
          (0, r.v)()
        ], e.prototype, "org", void 0), s([
          (0, r.v)()
        ], e.prototype, "semester", void 0), s([
          (0, r.v)()
        ], e.prototype, "startDate", void 0), s([
          (0, r.v)()
        ], e.prototype, "activityCount", void 0), e
      }
      (), m=function(){
        function e(){
        }
        return s([
          (0, r.v)()
        ], e.prototype, "courseCode", void 0), s([
          (0, r.v)()
        ], e.prototype, "orgId", void 0), s([
          (0, r.v)()
        ], e.prototype, "id", void 0), s([
          (0, r.v)()
        ], e.prototype, "name", void 0), s([
          (0, r.v)()
        ], e.prototype, "courseType", void 0), s([
          (0, r.v)()
        ], e.prototype, "courseResourceNum", void 0), s([
          (0, r.v)()
        ], e.prototype, "agreeResourceNum", void 0), s([
          (0, r.v)()
        ], e.prototype, "rejectResourceNum", void 0), s([
          (0, r.v)()
        ], e.prototype, "auditingResourceNum", void 0), e
      }
      (), y=function(){
        function e(){
        }
        return s([
          (0, r.v)()
        ], e.prototype, "id", void 0), s([
          (0, r.v)()
        ], e.prototype, "name", void 0), s([
          (0, r.v)()
        ], e.prototype, "size", void 0), s([
          (0, r.v)()
        ], e.prototype, "type", void 0), s([
          (0, r.v)()
        ], e.prototype, "allowDownload", void 0), e
      }
      (), g=function(){
        function e(){
        }
        return s([
          (0, r.v)()
        ], e.prototype, "id", void 0), s([
          (0, r.v)()
        ], e.prototype, "auditStatus", void 0), s([
          (0, r.v)()
        ], e.prototype, "auditRemark", void 0), s([
          (0, r.v)()
        ], e.prototype, "activityTitle", void 0), s([
          (0, r.v)()
        ], e.prototype, "ccLicenseDescription", void 0), s([
          (0, r.v)()
        ], e.prototype, "upload", void 0), e
      }
      (), w=function(){
        function e(){
        }
        return s([
          (0, r.v)()
        ], e.prototype, "id", void 0), s([
          (0, r.v)()
        ], e.prototype, "name", void 0), s([
          (0, r.v)()
        ], e.prototype, "userNo", void 0), s([
          (0, r.v)()
        ], e.prototype, "seatNumber", void 0), s([
          (0, r.v)()
        ], e.prototype, "userVisitDuration", void 0), s([
          (0, r.v)()
        ], e.prototype, "onlineVideoDuration", void 0), s([
          (0, r.v)()
        ], e.prototype, "examDuration", void 0), e
      }
      (), b=function(){
        this.academicYear={
          id:0, sort:-1
        }, this.academicYearId=0, this.compulsory=null, this.courseTemplate=-1, this.courseType=1, this.instructorIds=[
        ], this.semester={
          id:0, sort:-1
        }, this.semesterId=0
      }
    }, 448941:(e, t, n)=>{
      n.d(t, {
        BM:()=>m, CR:()=>T, IT:()=>D, KJ:()=>w, Lp:()=>p, Mh:()=>y, VA:()=>R, Zd:()=>h, aN:()=>k, ae:()=>C, i3:()=>S, k6:()=>g, mU:()=>f
      });
      var o, r=n(738645), i=n(510543), a=n(152229), s=n(958793), l=n(177673), c=n(731904), u=(o=function(e, t){
        return(o=Object.setPrototypeOf||{
          __proto__:[
          ]
        }
        instanceof Array&&function(e, t){
          e.__proto__=t
        }
        ||function(e, t){
          for(var n in t)Object.prototype.hasOwnProperty.call(t, n)&&(e[
            n
          ]
          =t[
            n
          ])
        })(e, t)
      }, function(e, t){
        if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");
        function n(){
          this.constructor=e
        }
        o(e, t), e.prototype=null===t?Object.create(t):(n.prototype=t.prototype, new n)
      }), d=function(e, t, n, o){
        var r, i=arguments.length, a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t, n):o;
        if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e, t, n, o);
        else for(var s=e.length-1;
        s>=0;
        s--)(r=e[
          s
        ])&&(a=(i<3?r(a):i>3?r(t, n, a):r(t, n))||a);
        return i>3&&a&&Object.defineProperty(t, n, a), a
      }, p=function(){
        function e(){
          this.orgId=0, this.creditAssigned=0, this.creditUsed=0, this.userCreditUsed=0, this.userCreditAssigned=0, this.courseCreditUsed=0, this.courseCreditAssigned=0
        }
        return Object.defineProperty(e.prototype, "creditRemaining", {
          get:function(){
            return this.creditAssigned-this.creditUsed
          }, enumerable:!1, configurable:!0
        }), Object.defineProperty(e.prototype, "userCreditRemaining", {
          get:function(){
            return this.userCreditAssigned-this.userCreditUsed
          }, enumerable:!1, configurable:!0
        }), Object.defineProperty(e.prototype, "courseCreditRemaining", {
          get:function(){
            return this.courseCreditAssigned-this.courseCreditUsed
          }, enumerable:!1, configurable:!0
        }), e.prototype.getCreditPercentages=function(e){
          if(e.isAllocationMode){
            var t=this.calcCreditPercentage(this.userCreditAssigned, this.creditAssigned, 100), n=t-(r=this.calcCreditPercentage(this.userCreditUsed, this.userCreditAssigned, t)), o=this.calcCreditPercentage(this.courseCreditAssigned, this.creditAssigned, 100);
            return{
              creditUserUsedPercent:r, creditUserUnusedPercent:n, creditCourseUsedPercent:i=this.calcCreditPercentage(this.courseCreditUsed, this.courseCreditAssigned, o), creditCourseUnusedPercent:o-i, creditRemainingPercent:100-t-o
            }
          }
          var r, i;
          return e.isCreditPoolMode?{
            creditUserUsedPercent:r=this.calcCreditPercentage(this.userCreditUsed, this.creditAssigned, 100), creditUserUnusedPercent:0, creditCourseUsedPercent:i=this.calcCreditPercentage(this.courseCreditUsed, this.creditAssigned, 100), creditCourseUnusedPercent:0, creditRemainingPercent:100-r-i
          }
          :{
            creditUserUsedPercent:0, creditUserUnusedPercent:0, creditCourseUsedPercent:0, creditCourseUnusedPercent:0, creditRemainingPercent:100
          }
        }, e.prototype.calcCreditPercentage=function(e, t, n){
          if(!e)return 0;
          var o=Math.floor(e/t*n);
          return Math.max(o, 1)
        }, Object.defineProperty(e.prototype, "orgRemaining", {
          get:function(){
            return this.creditAssigned-this.userCreditUsed-this.courseCreditUsed
          }, enumerable:!1, configurable:!0
        }), d([
          (0, r.v)({
            name:"org_id"
          })
        ], e.prototype, "orgId", void 0), d([
          (0, r.v)({
            name:"credit_assigned"
          })
        ], e.prototype, "creditAssigned", void 0), d([
          (0, r.v)({
            name:"credit_used"
          })
        ], e.prototype, "creditUsed", void 0), d([
          (0, r.v)({
            name:"user_credit_used"
          })
        ], e.prototype, "userCreditUsed", void 0), d([
          (0, r.v)({
            name:"user_credit_assigned"
          })
        ], e.prototype, "userCreditAssigned", void 0), d([
          (0, r.v)({
            name:"course_credit_used"
          })
        ], e.prototype, "courseCreditUsed", void 0), d([
          (0, r.v)({
            name:"course_credit_assigned"
          })
        ], e.prototype, "courseCreditAssigned", void 0), e
      }
      (), v=function(){
        function e(){
          this.creditAssigned=0, this.creditUsed=0, this.creditRemaining=0, this.creditLimit=null, this.status="", this.hasCreditLimit=""
        }
        return d([
          (0, r.v)({
            name:"credit_assigned"
          }), (0, i.d)((function(e){
            var t, n=e.obj, o=e.value;
            return o||(null===(t=null==n?void 0:n.credit_state)||void 0===t?void 0:t.credit_assigned)||0
          }))
        ], e.prototype, "creditAssigned", void 0), d([
          (0, r.v)({
            name:"credit_used"
          }), (0, i.d)((function(e){
            var t, n=e.obj, o=e.value;
            return o||(null===(t=null==n?void 0:n.credit_state)||void 0===t?void 0:t.credit_used)||0
          }))
        ], e.prototype, "creditUsed", void 0), d([
          (0, r.v)({
            name:"credit_remaining"
          }), (0, i.d)((function(e){
            var t, n=e.obj, o=e.value;
            return o||(null===(t=null==n?void 0:n.credit_state)||void 0===t?void 0:t.credit_remaining)||0
          }))
        ], e.prototype, "creditRemaining", void 0), d([
          (0, r.v)({
            name:"credit_limit"
          }), (0, i.d)((function(e){
            var t, n=e.obj, o=e.value;
            return o||(null===(t=null==n?void 0:n.credit_state)||void 0===t?void 0:t.credit_limit)||null
          }))
        ], e.prototype, "creditLimit", void 0), d([
          (0, r.v)(), (0, i.d)((function(e){
            var t, n=e.obj, o=e.value;
            return o||(null===(t=null==n?void 0:n.credit_state)||void 0===t?void 0:t.status)||""
          }))
        ], e.prototype, "status", void 0), d([
          (0, r.v)({
            name:"has_credit_limit"
          }), (0, i.d)((function(e){
            var t, n=e.obj, o=e.value;
            return o||(null===(t=null==n?void 0:n.credit_state)||void 0===t?void 0:t.has_credit_limit)||""
          }))
        ], e.prototype, "hasCreditLimit", void 0), e
      }
      (), f=function(e){
        function t(){
          var t=null!==e&&e.apply(this, arguments)||this;
          return t.userId=0, t.userNo="", t.userName="", t.department="", t.role="", t.creditUsedPercent=0, t.isLowAirCredit=!1, t._checked=!1, t
        }
        return u(t, e), d([
          (0, r.v)({
            name:"user_id"
          })
        ], t.prototype, "userId", void 0), d([
          (0, r.v)({
            name:"user_no"
          })
        ], t.prototype, "userNo", void 0), d([
          (0, r.v)({
            name:"user_name"
          })
        ], t.prototype, "userName", void 0), d([
          (0, r.v)()
        ], t.prototype, "department", void 0), d([
          (0, r.v)()
        ], t.prototype, "role", void 0), d([
          (0, r.v)({
            name:"credit_used_percent"
          })
        ], t.prototype, "creditUsedPercent", void 0), d([
          (0, r.v)({
            name:"is_low_air_credit"
          })
        ], t.prototype, "isLowAirCredit", void 0), d([
          (0, r.v)({
            name:"credit_state"
          }), (0, a.Z)((function(){
            return v
          }))
        ], t.prototype, "creditState", void 0), d([
          (0, r.v)()
        ], t.prototype, "_checked", void 0), t
      }
      (v), h=function(){
        function e(){
          this.userRole="", this.creditAssigned=0, this.creditUsed="", this.moduleCreditUsed={
          }, this.material=0, this.onlineVideo=0, this.lesson=0, this.classroom=0, this.chatbot=0, this.homework=0, this.forum=0, this.exam=0, this.subjectLib=0, this.textOptimization=0, this.usageCount=0
        }
        return d([
          (0, r.v)({
            name:"user"
          }), (0, a.Z)((function(){
            return w
          }))
        ], e.prototype, "user", void 0), d([
          (0, r.v)({
            name:"user_role"
          })
        ], e.prototype, "userRole", void 0), d([
          (0, r.v)({
            name:"credit_assigned"
          })
        ], e.prototype, "creditAssigned", void 0), d([
          (0, r.v)({
            name:"credit_used"
          })
        ], e.prototype, "creditUsed", void 0), d([
          (0, r.v)({
            name:"module_credit_used"
          })
        ], e.prototype, "moduleCreditUsed", void 0), d([
          (0, r.v)({
            name:"material"
          }), (0, i.d)((function(e){
            var t, n;
            return null!==(n=null===(t=e.obj.module_credit_used)||void 0===t?void 0:t.material)&&void 0!==n?n:0
          }))
        ], e.prototype, "material", void 0), d([
          (0, r.v)({
            name:"online_video"
          }), (0, i.d)((function(e){
            var t, n;
            return null!==(n=null===(t=e.obj.module_credit_used)||void 0===t?void 0:t.online_video)&&void 0!==n?n:0
          }))
        ], e.prototype, "onlineVideo", void 0), d([
          (0, r.v)({
            name:"lesson"
          }), (0, i.d)((function(e){
            var t, n;
            return null!==(n=null===(t=e.obj.module_credit_used)||void 0===t?void 0:t.lesson)&&void 0!==n?n:0
          }))
        ], e.prototype, "lesson", void 0), d([
          (0, r.v)({
            name:"classroom"
          }), (0, i.d)((function(e){
            var t, n;
            return null!==(n=null===(t=e.obj.module_credit_used)||void 0===t?void 0:t.classroom)&&void 0!==n?n:0
          }))
        ], e.prototype, "classroom", void 0), d([
          (0, r.v)({
            name:"Chat"
          }), (0, i.d)((function(e){
            var t, n;
            return null!==(n=null===(t=e.obj.module_credit_used)||void 0===t?void 0:t.Chat)&&void 0!==n?n:0
          }))
        ], e.prototype, "chatbot", void 0), d([
          (0, r.v)({
            name:"homework"
          }), (0, i.d)((function(e){
            var t, n;
            return null!==(n=null===(t=e.obj.module_credit_used)||void 0===t?void 0:t.homework)&&void 0!==n?n:0
          }))
        ], e.prototype, "homework", void 0), d([
          (0, r.v)({
            name:"forum"
          }), (0, i.d)((function(e){
            var t, n;
            return null!==(n=null===(t=e.obj.module_credit_used)||void 0===t?void 0:t.forum)&&void 0!==n?n:0
          }))
        ], e.prototype, "forum", void 0), d([
          (0, r.v)(), (0, i.d)((function(e){
            var t, n;
            return null!==(n=null===(t=e.obj.module_credit_used)||void 0===t?void 0:t.exam)&&void 0!==n?n:0
          }))
        ], e.prototype, "exam", void 0), d([
          (0, r.v)(), (0, i.d)((function(e){
            var t, n;
            return null!==(n=null===(t=e.obj.module_credit_used)||void 0===t?void 0:t.subject_lib)&&void 0!==n?n:0
          }))
        ], e.prototype, "subjectLib", void 0), d([
          (0, r.v)(), (0, i.d)((function(e){
            var t, n;
            return null!==(n=null===(t=e.obj.module_credit_used)||void 0===t?void 0:t.TextOptimizationGenerator)&&void 0!==n?n:0
          }))
        ], e.prototype, "textOptimization", void 0), d([
          (0, r.v)({
            name:"usage_count"
          })
        ], e.prototype, "usageCount", void 0), e
      }
      (), m=function(){
        function e(){
          this.instructors=0, this.creditUsed=0, this.usageCount=0, this.studentsCount=0, this.useAirChatStudentsCount=0, this.avgStudentTimes=0
        }
        return d([
          (0, r.v)({
            name:"course"
          }), (0, a.Z)((function(){
            return C
          }))
        ], e.prototype, "course", void 0), d([
          (0, r.v)({
            name:"instructors"
          })
        ], e.prototype, "instructors", void 0), d([
          (0, r.v)({
            name:"credit_used"
          })
        ], e.prototype, "creditUsed", void 0), d([
          (0, r.v)({
            name:"usage_count"
          })
        ], e.prototype, "usageCount", void 0), d([
          (0, r.v)({
            name:"students_count"
          })
        ], e.prototype, "studentsCount", void 0), d([
          (0, r.v)({
            name:"use_air_chat_students_count"
          })
        ], e.prototype, "useAirChatStudentsCount", void 0), d([
          (0, r.v)(), (0, i.d)((function(e){
            var t=e.obj;
            return t.use_air_chat_students_count>0?Math.floor(t.usage_count/t.use_air_chat_students_count):0
          }))
        ], e.prototype, "avgStudentTimes", void 0), e
      }
      (), y=function(){
        function e(){
          this.userCounts=0, this.assignedUserCounts=0, this.usedUserCounts=0, this.creditAssigned=0, this.maxCreditUsed=0, this.totalCreditUsed=0, this.usedRatio=0
        }
        return e.prototype.avgUserCredit=function(e){
          return e.isAllocationMode?(0, l.eQ)(this.totalCreditUsed, this.assignedUserCounts):e.isCreditPoolMode?(0, l.eQ)(this.totalCreditUsed, this.usedUserCounts):0
        }, d([
          (0, r.v)({
            name:"user_counts"
          })
        ], e.prototype, "userCounts", void 0), d([
          (0, r.v)({
            name:"assigned_user_counts"
          })
        ], e.prototype, "assignedUserCounts", void 0), d([
          (0, r.v)({
            name:"used_user_counts"
          })
        ], e.prototype, "usedUserCounts", void 0), d([
          (0, r.v)({
            name:"credit_assigned"
          })
        ], e.prototype, "creditAssigned", void 0), d([
          (0, r.v)({
            name:"max_credit_used"
          })
        ], e.prototype, "maxCreditUsed", void 0), d([
          (0, r.v)({
            name:"total_credit_used"
          })
        ], e.prototype, "totalCreditUsed", void 0), d([
          (0, r.v)(), (0, i.d)((function(e){
            var t=e.obj;
            return(0, l.nJ)(t.total_credit_used, t.credit_assigned)
          }))
        ], e.prototype, "usedRatio", void 0), e
      }
      (), g=function(){
        function e(){
          this.courseCounts=0, this.assignedCourseCounts=0, this.usedCourseCounts=0, this.creditAssigned=0, this.totalCreditUsed=0, this.usedCounts=0, this.courseStudentCounts=0, this.avgUserTimes=0, this.usedRatio=0
        }
        return e.prototype.avgCourseCreditUsed=function(e){
          return e.isAllocationMode?(0, l.eQ)(this.totalCreditUsed, this.assignedCourseCounts):e.isCreditPoolMode?(0, l.eQ)(this.totalCreditUsed, this.usedCourseCounts):0
        }, d([
          (0, r.v)({
            name:"course_counts"
          })
        ], e.prototype, "courseCounts", void 0), d([
          (0, r.v)({
            name:"assigned_course_counts"
          })
        ], e.prototype, "assignedCourseCounts", void 0), d([
          (0, r.v)({
            name:"used_course_counts"
          })
        ], e.prototype, "usedCourseCounts", void 0), d([
          (0, r.v)({
            name:"credit_assigned"
          })
        ], e.prototype, "creditAssigned", void 0), d([
          (0, r.v)({
            name:"total_credit_used"
          })
        ], e.prototype, "totalCreditUsed", void 0), d([
          (0, r.v)({
            name:"used_counts"
          })
        ], e.prototype, "usedCounts", void 0), d([
          (0, r.v)({
            name:"course_student_counts"
          })
        ], e.prototype, "courseStudentCounts", void 0), d([
          (0, r.v)(), (0, i.d)((function(e){
            var t=e.obj;
            return Math.round(t.used_counts/t.course_student_counts)
          }))
        ], e.prototype, "avgUserTimes", void 0), d([
          (0, r.v)(), (0, i.d)((function(e){
            var t=e.obj;
            return(0, l.nJ)(t.total_credit_used, t.credit_assigned)
          }))
        ], e.prototype, "usedRatio", void 0), e
      }
      (), w=function(){
        function e(){
          this.aiActivation="", this._checked=!1
        }
        return Object.defineProperty(e.prototype, "creditStateStatus", {
          get:function(){
            var e, t;
            return null!==(t=null===(e=this.creditState)||void 0===e?void 0:e.status)&&void 0!==t?t:""
          }, enumerable:!1, configurable:!0
        }), Object.defineProperty(e.prototype, "departmentName", {
          get:function(){
            var e;
            return(null===(e=this.department)||void 0===e?void 0:e.name)||""
          }, enumerable:!1, configurable:!0
        }), d([
          (0, r.v)({
            name:"id"
          })
        ], e.prototype, "id", void 0), d([
          (0, r.v)({
            name:"name"
          })
        ], e.prototype, "name", void 0), d([
          (0, r.v)({
            name:"user_no"
          })
        ], e.prototype, "userNo", void 0), d([
          (0, r.v)({
            name:"department"
          })
        ], e.prototype, "department", void 0), d([
          (0, r.v)({
            name:"credit_state"
          }), (0, a.Z)((function(){
            return f
          }))
        ], e.prototype, "creditState", void 0), d([
          (0, r.v)({
            name:"ai_activation"
          })
        ], e.prototype, "aiActivation", void 0), d([
          (0, r.v)()
        ], e.prototype, "_checked", void 0), d([
          (0, r.v)()
        ], e.prototype, "creditStateStatus", null), d([
          (0, r.v)()
        ], e.prototype, "departmentName", null), e
      }
      (), b=function(){
        function e(){
        }
        return d([
          (0, r.v)()
        ], e.prototype, "id", void 0), d([
          (0, r.v)()
        ], e.prototype, "name", void 0), d([
          (0, r.v)()
        ], e.prototype, "code", void 0), d([
          (0, r.v)()
        ], e.prototype, "sort", void 0), e
      }
      (), _=function(){
        function e(){
        }
        return d([
          (0, r.v)()
        ], e.prototype, "id", void 0), d([
          (0, r.v)()
        ], e.prototype, "code", void 0), d([
          (0, r.v)()
        ], e.prototype, "name", void 0), d([
          (0, r.v)({
            name:"real_name"
          })
        ], e.prototype, "realName", void 0), d([
          (0, r.v)()
        ], e.prototype, "sort", void 0), d([
          (0, r.v)({
            name:"academic_year_id"
          })
        ], e.prototype, "academicYearId", void 0), d([
          (0, r.v)({
            name:"is_active"
          })
        ], e.prototype, "isActive", void 0), d([
          (0, r.v)(), (0, a.Z)((function(){
            return b
          }))
        ], e.prototype, "academicYear", void 0), e
      }
      (), C=function(){
        function e(){
          this.instructors="", this.klass="", this.department="", this.aiActivation="", this._checked=!1
        }
        return Object.defineProperty(e.prototype, "creditStateStatus", {
          get:function(){
            var e, t;
            return null!==(t=null===(e=this.creditState)||void 0===e?void 0:e.status)&&void 0!==t?t:""
          }, enumerable:!1, configurable:!0
        }), Object.defineProperty(e.prototype, "academicYearName", {
          get:function(){
            var e;
            return(null===(e=this.academicYear)||void 0===e?void 0:e.name)||""
          }, enumerable:!1, configurable:!0
        }), Object.defineProperty(e.prototype, "semesterName", {
          get:function(){
            var e;
            return(null===(e=this.semester)||void 0===e?void 0:e.name)||""
          }, enumerable:!1, configurable:!0
        }), d([
          (0, r.v)({
            name:"id"
          })
        ], e.prototype, "id", void 0), d([
          (0, r.v)({
            name:"name"
          })
        ], e.prototype, "name", void 0), d([
          (0, r.v)({
            name:"course_code"
          })
        ], e.prototype, "courseCode", void 0), d([
          (0, r.v)({
            name:"course_type"
          })
        ], e.prototype, "courseType", void 0), d([
          (0, r.v)({
            name:"academic_year"
          }), (0, a.Z)((function(){
            return b
          }))
        ], e.prototype, "academicYear", void 0), d([
          (0, r.v)({
            name:"semester"
          }), (0, a.Z)((function(){
            return _
          }))
        ], e.prototype, "semester", void 0), d([
          (0, r.v)(), (0, a.Z)((function(){
            return w
          }))
        ], e.prototype, "teachers", void 0), d([
          (0, r.v)({
            name:"instructors"
          }), (0, i.d)((function(e){
            var t=e.value;
            return Array.isArray(t)?t.map((function(e){
              return e.name
            })).join(", "):""
          }))
        ], e.prototype, "instructors", void 0), d([
          (0, r.v)({
            name:"klass"
          }), (0, i.d)((function(e){
            var t, n=e.value;
            return null!==(t=null==n?void 0:n.name)&&void 0!==t?t:""
          }))
        ], e.prototype, "klass", void 0), d([
          (0, r.v)({
            name:"department"
          }), (0, i.d)((function(e){
            var t, n=e.value;
            return null!==(t=null==n?void 0:n.name)&&void 0!==t?t:""
          }))
        ], e.prototype, "department", void 0), d([
          (0, r.v)({
            name:"credit_state"
          }), (0, a.Z)((function(){
            return k
          }))
        ], e.prototype, "creditState", void 0), d([
          (0, r.v)({
            name:"ai_activation"
          })
        ], e.prototype, "aiActivation", void 0), d([
          (0, r.v)()
        ], e.prototype, "_checked", void 0), d([
          (0, r.v)()
        ], e.prototype, "creditStateStatus", null), d([
          (0, r.v)()
        ], e.prototype, "academicYearName", null), d([
          (0, r.v)()
        ], e.prototype, "semesterName", null), e
      }
      (), k=function(e){
        function t(){
          var t=null!==e&&e.apply(this, arguments)||this;
          return t.department="", t.instructors="", t.name="", t.semester="", t.academicYear="", t.courseCode="", t.courseType=0, t.creditUsedPercent=0, t.courseId=0, t._checked=!1, t
        }
        return u(t, e), d([
          (0, r.v)()
        ], t.prototype, "department", void 0), d([
          (0, r.v)()
        ], t.prototype, "instructors", void 0), d([
          (0, r.v)()
        ], t.prototype, "name", void 0), d([
          (0, r.v)()
        ], t.prototype, "semester", void 0), d([
          (0, r.v)({
            name:"academic_year"
          })
        ], t.prototype, "academicYear", void 0), d([
          (0, r.v)({
            name:"course_code"
          })
        ], t.prototype, "courseCode", void 0), d([
          (0, r.v)({
            name:"course_type"
          })
        ], t.prototype, "courseType", void 0), d([
          (0, r.v)({
            name:"credit_used_percent"
          })
        ], t.prototype, "creditUsedPercent", void 0), d([
          (0, r.v)({
            name:"course_id"
          })
        ], t.prototype, "courseId", void 0), d([
          (0, r.v)()
        ], t.prototype, "_checked", void 0), d([
          (0, r.v)({
            name:"credit_state"
          }), (0, a.Z)((function(){
            return v
          }))
        ], t.prototype, "creditState", void 0), t
      }
      (v), x=function(){
        function e(){
          this.remark="", this.updatedAt="", this.auditor=null, this.read=!1, this._disabled=!1, this._checked=!1
        }
        return d([
          (0, r.v)()
        ], e.prototype, "id", void 0), d([
          (0, r.v)(), (0, a.Z)((function(){
            return w
          }))
        ], e.prototype, "user", void 0), d([
          (0, r.v)({
            name:"applied_credits"
          })
        ], e.prototype, "appliedCredits", void 0), d([
          (0, r.v)({
            name:"approved_credits"
          })
        ], e.prototype, "approvedCredits", void 0), d([
          (0, r.v)()
        ], e.prototype, "reason", void 0), d([
          (0, r.v)()
        ], e.prototype, "status", void 0), d([
          (0, r.v)()
        ], e.prototype, "remark", void 0), d([
          (0, r.v)({
            name:"created_at"
          }), (0, i.d)((function(e){
            var t=e.value;
            return c.TimeUtils.toLocalDateTime(t)
          }), {
            toClassOnly:!0
          })
        ], e.prototype, "createdAt", void 0), d([
          (0, r.v)({
            name:"updated_at"
          }), (0, i.d)((function(e){
            var t=e.value;
            return c.TimeUtils.toLocalDateTime(t)
          }), {
            toClassOnly:!0
          })
        ], e.prototype, "updatedAt", void 0), d([
          (0, r.v)(), (0, a.Z)((function(){
            return w
          }))
        ], e.prototype, "auditor", void 0), d([
          (0, r.v)()
        ], e.prototype, "read", void 0), d([
          (0, r.v)({
            name:"target_type"
          })
        ], e.prototype, "targetType", void 0), e
      }
      (), S=function(e){
        function t(){
          return null!==e&&e.apply(this, arguments)||this
        }
        return u(t, e), t
      }
      (x), D=function(e){
        function t(){
          return null!==e&&e.apply(this, arguments)||this
        }
        return u(t, e), d([
          (0, r.v)(), (0, a.Z)((function(){
            return C
          }))
        ], t.prototype, "course", void 0), t
      }
      (x), T=function(){
        function e(){
          this.creditMode="", this.courseGuidesEnable=!1, this.kbAllowedVideoType=!1, this.kbMaxSizeOfUploadFile=0, this.maxLengthOfText=0, this.maxNumOfQuizzes=0
        }
        return Object.defineProperty(e.prototype, "isAllocationMode", {
          get:function(){
            return"allocation"===this.creditMode
          }, enumerable:!1, configurable:!0
        }), Object.defineProperty(e.prototype, "isCreditPoolMode", {
          get:function(){
            return"credit_pool"===this.creditMode
          }, enumerable:!1, configurable:!0
        }), d([
          (0, r.v)({
            name:"air_credit_mode"
          })
        ], e.prototype, "creditMode", void 0), d([
          (0, r.v)({
            name:"air_course_guides_enable"
          })
        ], e.prototype, "courseGuidesEnable", void 0), d([
          (0, r.v)({
            name:"air_kb_allowed_video_type"
          })
        ], e.prototype, "kbAllowedVideoType", void 0), d([
          (0, r.v)({
            name:"air_kb_max_size_of_upload_file"
          })
        ], e.prototype, "kbMaxSizeOfUploadFile", void 0), d([
          (0, r.v)({
            name:"air_max_length_of_text"
          })
        ], e.prototype, "maxLengthOfText", void 0), d([
          (0, r.v)({
            name:"air_max_num_of_quizzes"
          })
        ], e.prototype, "maxNumOfQuizzes", void 0), e
      }
      (), R=function(){
        function e(e){
          this.items=[
          ], this.page=1, this.pageSize=10, this.pages=1, this.total=0, this.type=e
        }
        return d([
          (0, s.n)()
        ], e.prototype, "type", void 0), d([
          (0, a.Z)((function(e){
            return e.newObject.type
          })), (0, r.v)()
        ], e.prototype, "items", void 0), d([
          (0, r.v)()
        ], e.prototype, "page", void 0), d([
          (0, r.v)({
            name:"page_size"
          })
        ], e.prototype, "pageSize", void 0), d([
          (0, r.v)()
        ], e.prototype, "pages", void 0), d([
          (0, r.v)()
        ], e.prototype, "total", void 0), d([
          (0, r.v)()
        ], e.prototype, "start", void 0), d([
          (0, r.v)()
        ], e.prototype, "end", void 0), e
      }
      ()
    }, 454985:(e, t, n)=>{
      n.r(t), n.d(t, {
        default:()=>i
      });
      var o=n(611854), r=n(150655);
      const i=(0, n(514486).A)(r.A, o.X, o.Y, !1, null, "183bd19f", null).exports
    }, 458793:(e, t, n)=>{
      n.d(t, {
        Q:()=>o
      });
      n(269193);
      var o=new(n(440173).A)({
        routes:[
          {
            path:"/outline", name:"outline", component:()=>Promise.resolve().then(n.bind(n, 390359))
          }, {
            path:"/graph", name:"index", component:()=>Promise.resolve().then(n.bind(n, 257272))
          }, {
            path:"/mind-map/:id?", name:"index", component:()=>Promise.all([
              n.e(15770), n.e(71801), n.e(90201)
            ]).then(n.bind(n, 412142))
          }, {
            path:"/forest", name:"index", component:()=>Promise.resolve().then(n.bind(n, 257272))
          }, {
            path:"/extension", name:"extension", component:()=>n.e(69310).then(n.bind(n, 869310))
          }, {
            path:"/problem", name:"problem", component:()=>Promise.all([
              n.e(10246), n.e(35675), n.e(44388), n.e(73226), n.e(21116)
            ]).then(n.bind(n, 124097))
          }, {
            path:"/competency", name:"competency", component:()=>Promise.all([
              n.e(35675), n.e(44388), n.e(98747), n.e(86295)
            ]).then(n.bind(n, 998747))
          }
        ]
      });
      o.beforeEach(((e, t, n)=>{
        var o, r=null===(o=window.orgSettings)||void 0===o?void 0:o.allowFacetsAndFragments, i=localStorage.getItem("knowledgeGraphHash");
        "/"===e.path?n(i?"/".concat(i):r?"/forest":"/graph"):n()
      }))
    }, 478594:(e, t, n)=>{
      var o=n(962893), r=n(440173), i=n(846413), a=n(552979), s=(n(269193), n(592207)), l=n.n(s), c=(n(207452), n(595738)), u=n(972663), d=n(458793), p=n(574799), v=n(257272), f=(n(540590), n(418665), n(14602), n(384027)), h=n(789974), m=n(587881), y=n(839861);
      const g=(0, c.pM)({
        components:{
          HeaderWrapper:h.A, CourseName:m.A
        }, setup:function(){
          var e=(0, y.rd)(), t=e.route, n=e.router, o=(0, c.KR)(!1), r=(0, c.EW)({
            get:function(){
              var e=[
                "/graph", "/problem", "/competency"
              ], n=localStorage.getItem("knowledgeGraphHash");
              return n&&e.includes("/".concat(n))?(localStorage.removeItem("knowledgeGraphHash"), "/".concat(n)):e.includes(t.value.path)?t.value.path:"/graph"
            }, set:function(e){
              null==n||n.push(e)
            }
          }), i=[
            {
              label:"/graph", text:a.default.t("knowledgeGraph.title")
            }, {
              label:"/problem", text:a.default.t("problemGraph.graph")
            }, {
              label:"/competency", text:a.default.t("competencyGraph.name")
            }
          ];
          return(0, c.sV)((function(){
            o.value=!0
          })), {
            view:r, radioOptions:i, viewReady:o
          }
        }
      });
      var w=n(514486);
      const b=(0, w.A)(g, (function(){
        var e=this, t=e.$createElement, n=e._self._c||t;
        return n("div", [
          n("HeaderWrapper", {
            scopedSlots:e._u([
              {
                key:"center", fn:function(){
                  return[
                    e.viewReady?n("RadioGroup", {
                      attrs:{
                        type:"button", "button-style":"solid"
                      }, model:{
                        value:e.view, callback:function(t){
                          e.view=t
                        }, expression:"view"
                      }
                    }, e._l(e.radioOptions, (function(t){
                      return n("Radio", {
                        key:t.label, attrs:{
                          label:t.label
                        }
                      }, [
                        n("span", {
                          staticClass:"text"
                        }, [
                          e._v(e._s(t.text))
                        ])
                      ])
                    })), 1):e._e()
                  ]
                }, proxy:!0
              }, {
                key:"btn-group", fn:function(){
                  return[
                    e._t("btn-group")
                  ]
                }, proxy:!0
              }
            ], null, !0)
          }, [
            n("div", {
              staticClass:"gap-10 height-100"
            }, [
              n("CourseName")
            ], 1)
          ]), e._v(" "), e._t("default")
        ], 2)
      }), [
      ], !1, null, "11bf3604", null).exports;
      var _=n(786673), C=n(980797), k=function(e, t, n, o){
        return new(n||(n=Promise))((function(r, i){
          function a(e){
            try{
              l(o.next(e))
            }
            catch(e){
              i(e)
            }
          }
          function s(e){
            try{
              l(o.throw(e))
            }
            catch(e){
              i(e)
            }
          }
          function l(e){
            var t;
            e.done?r(e.value):(t=e.value, t instanceof n?t:new n((function(e){
              e(t)
            }))).then(a, s)
          }
          l((o=o.apply(e, t||[
          ])).next())
        }))
      }, x=function(e, t){
        var n, o, r, i, a={
          label:0, sent:function(){
            if(1&r[
              0
            ])throw r[
              1
            ];
            return r[
              1
            ]
          }, trys:[
          ], ops:[
          ]
        };
        return i={
          next:s(0), throw:s(1), return:s(2)
        }, "function"==typeof Symbol&&(i[
          Symbol.iterator
        ]
        =function(){
          return this
        }), i;
        function s(s){
          return function(l){
            return function(s){
              if(n)throw new TypeError("Generator is already executing.");
              for(;
              i&&(i=0, s[
                0
              ]
              &&(a=0)), a;
              )try{
                if(n=1, o&&(r=2&s[
                  0
                ]
                ?o.return:s[
                  0
                ]
                ?o.throw||((r=o.return)&&r.call(o), 0):o.next)&&!(r=r.call(o, s[
                  1
                ])).done)return r;
                switch(o=0, r&&(s=[
                  2&s[
                    0
                  ], r.value
                ]), s[
                  0
                ]){
                  case 0:case 1:r=s;
                  break;
                  case 4:return a.label++, {
                    value:s[
                      1
                    ], done:!1
                  };
                  case 5:a.label++, o=s[
                    1
                  ], s=[
                    0
                  ];
                  continue;
                  case 7:s=a.ops.pop(), a.trys.pop();
                  continue;
                  default:if(!(r=a.trys, (r=r.length>0&&r[
                    r.length-1
                  ])||6!==s[
                    0
                  ]
                  &&2!==s[
                    0
                  ])){
                    a=0;
                    continue
                  }
                  if(3===s[
                    0
                  ]
                  &&(!r||s[
                    1
                  ]
                  >r[
                    0
                  ]
                  &&s[
                    1
                  ]
                  <r[
                    3
                  ])){
                    a.label=s[
                      1
                    ];
                    break
                  }
                  if(6===s[
                    0
                  ]
                  &&a.label<r[
                    1
                  ]){
                    a.label=r[
                      1
                    ], r=s;
                    break
                  }
                  if(r&&a.label<r[
                    2
                  ]){
                    a.label=r[
                      2
                    ], a.ops.push(s);
                    break
                  }
                  r[
                    2
                  ]
                  &&a.ops.pop(), a.trys.pop();
                  continue
                }
                s=t.call(e, a)
              }
              catch(e){
                s=[
                  6, e
                ], o=0
              }
              finally{
                n=r=0
              }
              if(5&s[
                0
              ])throw s[
                1
              ];
              return{
                value:s[
                  0
                ]
                ?s[
                  1
                ]
                :void 0, done:!0
              }
            }
            ([
              s, l
            ])
          }
        }
      };
      const S=(0, c.pM)({
        components:{
          MainHeader:b
        }, setup:function(){
          var e=this, t=(0, c.KR)((0, c.WQ)("problemPublishType", "unpublished")), n=(0, c.WQ)("isBlueprint", !1), o=(0, C.j)(), r=o.batchDeleteProblemsMode, i=o.problems, s=o.checkedProblems, l=o.toggleCheckAll, u=o.isCheckedAll, d=o.del, v=o.cancel;
          return(0, c.hi)((function(){
            r.value=!1
          })), {
            toggleCollapse:function(){
              return k(e, void 0, void 0, (function(){
                var e, t, n, o, r;
                return x(this, (function(i){
                  switch(i.label){
                    case 0:return null===(e=p.Nt.value)||void 0===e||e.unManageAll(), p.yg.value?null===(t=p.Nt.value)||void 0===t||t.expandAll():null===(n=p.Nt.value)||void 0===n||n.collapseAll(), [
                      4, (0, c.dY)()
                    ];
                    case 1:return i.sent(), null===(o=p.Nt.value)||void 0===o||o.repaintEndpoints(), null===(r=p.Nt.value)||void 0===r||r.connect(), p.yg.value=!p.yg.value, [
                      2
                    ]
                  }
                }))
              }))
            }, isCollapsedAllProblem:p.yg, isInstructor:p.yb, publishType:t, publish:function(){
              return k(e, void 0, void 0, (function(){
                var e, n;
                return x(this, (function(o){
                  switch(o.label){
                    case 0:e="unpublished"===t.value?"published":"unpublished", f.Message.destroy(), o.label=1;
                    case 1:return o.trys.push([
                      1, 3, , 4
                    ]), [
                      4, (0, _.mS)(p.yW.value.id, e)
                    ];
                    case 2:return o.sent(), t.value=e, n=a.default.t("knowledgeGraph.publishSuccess"), "unpublished"===e&&(n=a.default.t("knowledgeGraph.cancelPublishSuccess")), f.Message.success(n), [
                      3, 4
                    ];
                    case 3:return o.sent(), f.Message.error(a.default.t("operationFailed")), [
                      3, 4
                    ];
                    case 4:return[
                      2
                    ]
                  }
                }))
              }))
            }, batchDeleteProblemsMode:r, problems:i, checkedProblems:s, del:d, isCheckedAll:u, toggleCheckAll:l, cancelDel:v, isBlueprint:n
          }
        }
      });
      const D=(0, w.A)(S, (function(){
        var e=this, t=e.$createElement, n=e._self._c||t;
        return n("MainHeader", {
          scopedSlots:e._u([
            {
              key:"btn-group", fn:function(){
                return[
                  e.batchDeleteProblemsMode?n("div", {
                    staticClass:"flex gap-16"
                  }, [
                    n("Checkbox", {
                      attrs:{
                        value:e.isCheckedAll
                      }, on:{
                        "on-change":e.toggleCheckAll
                      }
                    }, [
                      e._v(e._s(e.$t("selectAll")))
                    ]), e._v(" "), n("span", {
                      domProps:{
                        innerHTML:e._s(e.$t("problemGraph.totalXItemsSelectedXItems", [
                          e.problems.length, "<span style='color: var(--primary-brand-color)'>"+e.checkedProblems.length+"</span>"
                        ]))
                      }
                    }), e._v(" "), n("Button", {
                      on:{
                        click:e.cancelDel
                      }
                    }, [
                      e._v(e._s(e.$t("cancel")))
                    ]), e._v(" "), n("Button", {
                      attrs:{
                        type:"error", ghost:"", disabled:!e.checkedProblems.length
                      }, on:{
                        click:e.del
                      }
                    }, [
                      e._v(e._s(e.$t("delete")))
                    ])
                  ], 1):n("div", {
                    staticClass:"flex gap-16"
                  }, [
                    n("Button", {
                      staticClass:"expand-btn", on:{
                        click:e.toggleCollapse
                      }
                    }, [
                      n("SvgIcon", {
                        class:{
                          "rotate-180":e.isCollapsedAllProblem
                        }, attrs:{
                          name:"problem-collapse-all"
                        }
                      }), e._v("\n        "+e._s(e.isCollapsedAllProblem?e.$t("problemGraph.expandAll"):e.$t("problemGraph.collapseAll"))+"\n      ")
                    ], 1), e._v(" "), e.isInstructor&&e.problems.length?n("Button", {
                      on:{
                        click:function(t){
                          e.batchDeleteProblemsMode=!0
                        }
                      }
                    }, [
                      e._v("\n        "+e._s(e.$t("batch_delete"))+"\n      ")
                    ]):e._e(), e._v(" "), e.isInstructor&&!e.isBlueprint?n("Button", {
                      staticClass:"publish-btn", attrs:{
                        type:"primary"
                      }, on:{
                        click:e.publish
                      }
                    }, [
                      n("SvgIcon", {
                        attrs:{
                          name:"unpublished"===e.publishType?"publish":"unpublish"
                        }
                      }), e._v("\n        "+e._s("unpublished"===e.publishType?e.$t("knowledgeGraph.publish"):e.$t("knowledgeGraph.cancelPublish"))+"\n      ")
                    ], 1):e._e()
                  ], 1)
                ]
              }, proxy:!0
            }
          ])
        })
      }), [
      ], !1, null, "3130fc49", null).exports;
      var T=n(766800), R=n(769075), I=n(818183), A=n(877401), M=function(e, t, n, o){
        return new(n||(n=Promise))((function(r, i){
          function a(e){
            try{
              l(o.next(e))
            }
            catch(e){
              i(e)
            }
          }
          function s(e){
            try{
              l(o.throw(e))
            }
            catch(e){
              i(e)
            }
          }
          function l(e){
            var t;
            e.done?r(e.value):(t=e.value, t instanceof n?t:new n((function(e){
              e(t)
            }))).then(a, s)
          }
          l((o=o.apply(e, t||[
          ])).next())
        }))
      }, $=function(e, t){
        var n, o, r, i, a={
          label:0, sent:function(){
            if(1&r[
              0
            ])throw r[
              1
            ];
            return r[
              1
            ]
          }, trys:[
          ], ops:[
          ]
        };
        return i={
          next:s(0), throw:s(1), return:s(2)
        }, "function"==typeof Symbol&&(i[
          Symbol.iterator
        ]
        =function(){
          return this
        }), i;
        function s(s){
          return function(l){
            return function(s){
              if(n)throw new TypeError("Generator is already executing.");
              for(;
              i&&(i=0, s[
                0
              ]
              &&(a=0)), a;
              )try{
                if(n=1, o&&(r=2&s[
                  0
                ]
                ?o.return:s[
                  0
                ]
                ?o.throw||((r=o.return)&&r.call(o), 0):o.next)&&!(r=r.call(o, s[
                  1
                ])).done)return r;
                switch(o=0, r&&(s=[
                  2&s[
                    0
                  ], r.value
                ]), s[
                  0
                ]){
                  case 0:case 1:r=s;
                  break;
                  case 4:return a.label++, {
                    value:s[
                      1
                    ], done:!1
                  };
                  case 5:a.label++, o=s[
                    1
                  ], s=[
                    0
                  ];
                  continue;
                  case 7:s=a.ops.pop(), a.trys.pop();
                  continue;
                  default:if(!(r=a.trys, (r=r.length>0&&r[
                    r.length-1
                  ])||6!==s[
                    0
                  ]
                  &&2!==s[
                    0
                  ])){
                    a=0;
                    continue
                  }
                  if(3===s[
                    0
                  ]
                  &&(!r||s[
                    1
                  ]
                  >r[
                    0
                  ]
                  &&s[
                    1
                  ]
                  <r[
                    3
                  ])){
                    a.label=s[
                      1
                    ];
                    break
                  }
                  if(6===s[
                    0
                  ]
                  &&a.label<r[
                    1
                  ]){
                    a.label=r[
                      1
                    ], r=s;
                    break
                  }
                  if(r&&a.label<r[
                    2
                  ]){
                    a.label=r[
                      2
                    ], a.ops.push(s);
                    break
                  }
                  r[
                    2
                  ]
                  &&a.ops.pop(), a.trys.pop();
                  continue
                }
                s=t.call(e, a)
              }
              catch(e){
                s=[
                  6, e
                ], o=0
              }
              finally{
                n=r=0
              }
              if(5&s[
                0
              ])throw s[
                1
              ];
              return{
                value:s[
                  0
                ]
                ?s[
                  1
                ]
                :void 0, done:!0
              }
            }
            ([
              s, l
            ])
          }
        }
      };
      const E=(0, c.pM)({
        setup:function(e, t){
          var n=this, o=(0, c.KR)(!1), r=(0, c.WQ)("knowledgeGraphSource", "self"), i=(0, c.KR)(r);
          return{
            selfSourceName:(0, c.EW)((function(){
              var e=window.orgSettings.selfKnowledgeGraphSourceName;
              return e||a.default.t("knowledgeGraph.source.self")
            })), externalSourceName:(0, c.EW)((function(){
              var e=window.orgSettings.externalKnowledgeGraphSourceName;
              return e||a.default.t("knowledgeGraph.source.chinamcloud")
            })), visible:o, handleEditGraphSource:function(e){
              return M(n, void 0, void 0, (function(){
                var n;
                return $(this, (function(o){
                  switch(o.label){
                    case 0:return i.value===e?[
                      2
                    ]
                    :[
                      4, R.A.open({
                        title:a.default.t("knowledgeGraph.source.editTitle"), type:"warning", divider:!1, width:660, content:a.default.t("knowledgeGraph.source.editTip"), verticalCenter:!0, hideIcon:!1
                      })
                    ];
                    case 1:if(!o.sent())return[
                      2
                    ];
                    o.label=2;
                    case 2:return o.trys.push([
                      2, 9, , 10
                    ]), [
                      4, (0, A.Ab)(p.yW.value.id, e)
                    ];
                    case 3:return o.sent(), i.value=e, t.emit("graph-source-changed", e), "self"!==e?[
                      3, 6
                    ]
                    :"/extension"!==d.Q.currentRoute.path?[
                      3, 5
                    ]
                    :[
                      4, d.Q.push({
                        path:"/mind-map"
                      })
                    ];
                    case 4:o.sent(), o.label=5;
                    case 5:return window.location.reload(), [
                      3, 8
                    ];
                    case 6:return[
                      4, d.Q.push("/extension")
                    ];
                    case 7:o.sent(), o.label=8;
                    case 8:return[
                      3, 10
                    ];
                    case 9:return n=o.sent(), console.error(n), [
                      3, 10
                    ];
                    case 10:return[
                      2
                    ]
                  }
                }))
              }))
            }, onVisibleChange:function(e){
              o.value=e
            }
          }
        }
      });
      const P=(0, w.A)(E, (function(){
        var e=this, t=e.$createElement, n=e._self._c||t;
        return n("div", {
          staticClass:"edit-graph-source-wrapper"
        }, [
          n("Dropdown", {
            attrs:{
              placement:"bottom-end", trigger:"click"
            }, on:{
              "on-click":e.handleEditGraphSource, "on-visible-change":e.onVisibleChange
            }, scopedSlots:e._u([
              {
                key:"list", fn:function(){
                  return[
                    n("DropdownMenu", [
                      n("DropdownItem", {
                        attrs:{
                          name:"self"
                        }
                      }, [
                        e._v(e._s(e.selfSourceName))
                      ]), e._v(" "), n("DropdownItem", {
                        attrs:{
                          name:"chinamcloud"
                        }
                      }, [
                        e._v(e._s(e.externalSourceName))
                      ])
                    ], 1)
                  ]
                }, proxy:!0
              }
            ])
          }, [
            n("span", {
              staticClass:"edit-source-button", class:{
                open:e.visible
              }
            }, [
              e._v("\n      "+e._s(e.$t("knowledgeGraph.source.title"))+"\n      "), n("Icon", {
                attrs:{
                  custom:"font font-standard-arrow-down"
                }
              })
            ], 1)
          ])
        ], 1)
      }), [
      ], !1, null, "eacf15c0", null).exports;
      var N=n(526320), O=function(e, t, n, o){
        return new(n||(n=Promise))((function(r, i){
          function a(e){
            try{
              l(o.next(e))
            }
            catch(e){
              i(e)
            }
          }
          function s(e){
            try{
              l(o.throw(e))
            }
            catch(e){
              i(e)
            }
          }
          function l(e){
            var t;
            e.done?r(e.value):(t=e.value, t instanceof n?t:new n((function(e){
              e(t)
            }))).then(a, s)
          }
          l((o=o.apply(e, t||[
          ])).next())
        }))
      }, j=function(e, t){
        var n, o, r, i, a={
          label:0, sent:function(){
            if(1&r[
              0
            ])throw r[
              1
            ];
            return r[
              1
            ]
          }, trys:[
          ], ops:[
          ]
        };
        return i={
          next:s(0), throw:s(1), return:s(2)
        }, "function"==typeof Symbol&&(i[
          Symbol.iterator
        ]
        =function(){
          return this
        }), i;
        function s(s){
          return function(l){
            return function(s){
              if(n)throw new TypeError("Generator is already executing.");
              for(;
              i&&(i=0, s[
                0
              ]
              &&(a=0)), a;
              )try{
                if(n=1, o&&(r=2&s[
                  0
                ]
                ?o.return:s[
                  0
                ]
                ?o.throw||((r=o.return)&&r.call(o), 0):o.next)&&!(r=r.call(o, s[
                  1
                ])).done)return r;
                switch(o=0, r&&(s=[
                  2&s[
                    0
                  ], r.value
                ]), s[
                  0
                ]){
                  case 0:case 1:r=s;
                  break;
                  case 4:return a.label++, {
                    value:s[
                      1
                    ], done:!1
                  };
                  case 5:a.label++, o=s[
                    1
                  ], s=[
                    0
                  ];
                  continue;
                  case 7:s=a.ops.pop(), a.trys.pop();
                  continue;
                  default:if(!(r=a.trys, (r=r.length>0&&r[
                    r.length-1
                  ])||6!==s[
                    0
                  ]
                  &&2!==s[
                    0
                  ])){
                    a=0;
                    continue
                  }
                  if(3===s[
                    0
                  ]
                  &&(!r||s[
                    1
                  ]
                  >r[
                    0
                  ]
                  &&s[
                    1
                  ]
                  <r[
                    3
                  ])){
                    a.label=s[
                      1
                    ];
                    break
                  }
                  if(6===s[
                    0
                  ]
                  &&a.label<r[
                    1
                  ]){
                    a.label=r[
                      1
                    ], r=s;
                    break
                  }
                  if(r&&a.label<r[
                    2
                  ]){
                    a.label=r[
                      2
                    ], a.ops.push(s);
                    break
                  }
                  r[
                    2
                  ]
                  &&a.ops.pop(), a.trys.pop();
                  continue
                }
                s=t.call(e, a)
              }
              catch(e){
                s=[
                  6, e
                ], o=0
              }
              finally{
                n=r=0
              }
              if(5&s[
                0
              ])throw s[
                1
              ];
              return{
                value:s[
                  0
                ]
                ?s[
                  1
                ]
                :void 0, done:!0
              }
            }
            ([
              s, l
            ])
          }
        }
      };
      const G=(0, c.pM)({
        name:"ExportDropdown", emits:[
          "export-image"
        ], setup:function(e, t){
          var n=this, o=(t.emit, (0, c.KR)(!1)), r=(0, c.WQ)("course", {
            id:0
          });
          return{
            visible:o, onVisibleChange:function(e){
              o.value=e
            }, handleExport:function(e){
              return O(n, void 0, void 0, (function(){
                var t;
                return j(this, (function(n){
                  switch(n.label){
                    case 0:if("image"===e)return u.B.$emit("export-graph-image"), [
                      2
                    ];
                    n.label=1;
                    case 1:return n.trys.push([
                      1, 3, , 4
                    ]), [
                      4, (0, A.WZ)(r.id, e)
                    ];
                    case 2:return n.sent(), [
                      3, 4
                    ];
                    case 3:return t=n.sent(), console.error("Export failed:", t), [
                      3, 4
                    ];
                    case 4:return[
                      2
                    ]
                  }
                }))
              }))
            }
          }
        }
      });
      const B=(0, w.A)(G, (function(){
        var e=this, t=e.$createElement, n=e._self._c||t;
        return n("div", {
          staticClass:"export-dropdown-wrapper"
        }, [
          n("Dropdown", {
            attrs:{
              placement:"bottom-end", trigger:"click"
            }, on:{
              "on-click":e.handleExport, "on-visible-change":e.onVisibleChange
            }, scopedSlots:e._u([
              {
                key:"list", fn:function(){
                  return[
                    n("DropdownMenu", [
                      n("DropdownItem", {
                        attrs:{
                          name:"xlsx"
                        }
                      }, [
                        e._v("\n          "+e._s(e.$t("knowledgeGraph.exportExcel"))+"\n        ")
                      ]), e._v(" "), n("DropdownItem", {
                        attrs:{
                          name:"xmind"
                        }
                      }, [
                        e._v("\n          "+e._s(e.$t("knowledgeGraph.exportXmind"))+"\n        ")
                      ]), e._v(" "), n("DropdownItem", {
                        attrs:{
                          name:"image"
                        }
                      }, [
                        e._v("\n          "+e._s(e.$t("knowledgeGraph.exportImage"))+"\n        ")
                      ])
                    ], 1)
                  ]
                }, proxy:!0
              }
            ])
          }, [
            n("span", {
              staticClass:"export-button", class:{
                open:e.visible
              }
            }, [
              e._v("\n      "+e._s(e.$t("knowledgeGraph.export"))+"\n      "), n("Icon", {
                attrs:{
                  custom:"font font-standard-arrow-down"
                }
              })
            ], 1)
          ])
        ], 1)
      }), [
      ], !1, null, "fa189118", null).exports;
      var L=n(685761), K=function(e, t, n, o){
        return new(n||(n=Promise))((function(r, i){
          function a(e){
            try{
              l(o.next(e))
            }
            catch(e){
              i(e)
            }
          }
          function s(e){
            try{
              l(o.throw(e))
            }
            catch(e){
              i(e)
            }
          }
          function l(e){
            var t;
            e.done?r(e.value):(t=e.value, t instanceof n?t:new n((function(e){
              e(t)
            }))).then(a, s)
          }
          l((o=o.apply(e, t||[
          ])).next())
        }))
      }, U=function(e, t){
        var n, o, r, i, a={
          label:0, sent:function(){
            if(1&r[
              0
            ])throw r[
              1
            ];
            return r[
              1
            ]
          }, trys:[
          ], ops:[
          ]
        };
        return i={
          next:s(0), throw:s(1), return:s(2)
        }, "function"==typeof Symbol&&(i[
          Symbol.iterator
        ]
        =function(){
          return this
        }), i;
        function s(s){
          return function(l){
            return function(s){
              if(n)throw new TypeError("Generator is already executing.");
              for(;
              i&&(i=0, s[
                0
              ]
              &&(a=0)), a;
              )try{
                if(n=1, o&&(r=2&s[
                  0
                ]
                ?o.return:s[
                  0
                ]
                ?o.throw||((r=o.return)&&r.call(o), 0):o.next)&&!(r=r.call(o, s[
                  1
                ])).done)return r;
                switch(o=0, r&&(s=[
                  2&s[
                    0
                  ], r.value
                ]), s[
                  0
                ]){
                  case 0:case 1:r=s;
                  break;
                  case 4:return a.label++, {
                    value:s[
                      1
                    ], done:!1
                  };
                  case 5:a.label++, o=s[
                    1
                  ], s=[
                    0
                  ];
                  continue;
                  case 7:s=a.ops.pop(), a.trys.pop();
                  continue;
                  default:if(!(r=a.trys, (r=r.length>0&&r[
                    r.length-1
                  ])||6!==s[
                    0
                  ]
                  &&2!==s[
                    0
                  ])){
                    a=0;
                    continue
                  }
                  if(3===s[
                    0
                  ]
                  &&(!r||s[
                    1
                  ]
                  >r[
                    0
                  ]
                  &&s[
                    1
                  ]
                  <r[
                    3
                  ])){
                    a.label=s[
                      1
                    ];
                    break
                  }
                  if(6===s[
                    0
                  ]
                  &&a.label<r[
                    1
                  ]){
                    a.label=r[
                      1
                    ], r=s;
                    break
                  }
                  if(r&&a.label<r[
                    2
                  ]){
                    a.label=r[
                      2
                    ], a.ops.push(s);
                    break
                  }
                  r[
                    2
                  ]
                  &&a.ops.pop(), a.trys.pop();
                  continue
                }
                s=t.call(e, a)
              }
              catch(e){
                s=[
                  6, e
                ], o=0
              }
              finally{
                n=r=0
              }
              if(5&s[
                0
              ])throw s[
                1
              ];
              return{
                value:s[
                  0
                ]
                ?s[
                  1
                ]
                :void 0, done:!0
              }
            }
            ([
              s, l
            ])
          }
        }
      };
      const W=(0, c.pM)({
        components:{
        }, props:{
          value:{
            type:Boolean, required:!0
          }, courseId:{
            type:Number, required:!0
          }, courseName:{
            type:String, required:!0
          }, nodeCount:{
            type:Number, required:!0, default:0
          }, isProject:{
            type:Boolean, default:!1
          }
        }, setup:function(e, t){
          var n=this, o=(0, c.KR)(!1), r=(0, c.WQ)("course", {
            id:0
          }), i=(0, c.KR)(new T.VT), a=function(){
            o.value=!1, t.emit("input", !1)
          };
          return(0, c.wB)((function(){
            return e.value
          }), (function(t){
            t&&K(n, void 0, void 0, (function(){
              var t;
              return U(this, (function(n){
                switch(n.label){
                  case 0:return t=i, [
                    4, (0, A._m)(e.courseId)
                  ];
                  case 1:return t.value=n.sent(), [
                    2
                  ]
                }
              }))
            }))
          })), {
            referTypeStat:i, importReferResource:o, close:a, submit:function(){
              return K(n, void 0, void 0, (function(){
                var n;
                return U(this, (function(i){
                  switch(i.label){
                    case 0:return i.trys.push([
                      0, 2, 3, 4
                    ]), [
                      4, (0, A.fH)(e.courseId, r.id, o.value)
                    ];
                    case 1:return n=i.sent(), t.emit("success", n), [
                      3, 4
                    ];
                    case 2:return i.sent(), t.emit("error"), [
                      3, 4
                    ];
                    case 3:return a(), [
                      7
                    ];
                    case 4:return t.emit("input", !1), [
                      2
                    ]
                  }
                }))
              }))
            }
          }
        }
      });
      const z=(0, w.A)(W, (function(){
        var e=this, t=e.$createElement, n=e._self._c||t;
        return n("Modal", {
          attrs:{
            value:e.value, title:e.$t("knowledgeGraph.batchImport.importKnowledgeNodeTitle"), "class-name":"vertical-center-modal", width:"600"
          }, on:{
            "on-cancel":e.close
          }
        }, [
          n("div", {
            staticClass:"content"
          }, [
            n("div", {
              staticClass:"title-area"
            }, [
              e.isProject?n("span", {
                staticClass:"title"
              }, [
                e._v("\n        "+e._s(e.$t("knowledgeGraph.batchImport.importKnowledgeNodesFormProject", {
                  courseName:e.courseName
                }))+"\n      ")
              ]):n("span", {
                staticClass:"title"
              }, [
                e._v("\n        "+e._s(e.$t("knowledgeGraph.batchImport.importKnowledgeNodesFormCourse", {
                  courseName:e.courseName
                }))+"\n      ")
              ]), e._v(" "), n("span", {
                staticClass:"count"
              }, [
                e._v(e._s(e.$t("knowledgeGraph.batchImport.importKnowledgeNodeCount", {
                  num:e.nodeCount
                })))
              ])
            ]), e._v(" "), n("div", {
              staticClass:"check-type-area"
            }, [
              n("Checkbox", {
                attrs:{
                  disabled:!e.referTypeStat.resourceCount
                }, model:{
                  value:e.importReferResource, callback:function(t){
                    e.importReferResource=t
                  }, expression:"importReferResource"
                }
              }, [
                e._v("\n        "+e._s(e.$t("knowledgeGraph.batchImport.syncCopyReferResources", {
                  num:e.referTypeStat.resourceCount
                }))+"\n      ")
              ])
            ], 1)
          ]), e._v(" "), n("template", {
            slot:"footer"
          }, [
            n("Button", {
              attrs:{
                type:"primary", disabled:!e.nodeCount
              }, on:{
                click:e.submit
              }
            }, [
              e._v(e._s(e.$t("confirm")))
            ]), e._v(" "), n("Button", {
              staticClass:"button button-grey medium", on:{
                click:e.close
              }
            }, [
              e._v(e._s(e.$t("cancel")))
            ])
          ], 1)
        ], 2)
      }), [
      ], !1, null, "047d7f10", null).exports;
      var F=n(297786), V=n(516844), H=n(882971), q=n(966491), Y=n(248124), Z=function(e, t, n, o){
        return new(n||(n=Promise))((function(r, i){
          function a(e){
            try{
              l(o.next(e))
            }
            catch(e){
              i(e)
            }
          }
          function s(e){
            try{
              l(o.throw(e))
            }
            catch(e){
              i(e)
            }
          }
          function l(e){
            var t;
            e.done?r(e.value):(t=e.value, t instanceof n?t:new n((function(e){
              e(t)
            }))).then(a, s)
          }
          l((o=o.apply(e, t||[
          ])).next())
        }))
      }, Q=function(e, t){
        var n, o, r, i, a={
          label:0, sent:function(){
            if(1&r[
              0
            ])throw r[
              1
            ];
            return r[
              1
            ]
          }, trys:[
          ], ops:[
          ]
        };
        return i={
          next:s(0), throw:s(1), return:s(2)
        }, "function"==typeof Symbol&&(i[
          Symbol.iterator
        ]
        =function(){
          return this
        }), i;
        function s(s){
          return function(l){
            return function(s){
              if(n)throw new TypeError("Generator is already executing.");
              for(;
              i&&(i=0, s[
                0
              ]
              &&(a=0)), a;
              )try{
                if(n=1, o&&(r=2&s[
                  0
                ]
                ?o.return:s[
                  0
                ]
                ?o.throw||((r=o.return)&&r.call(o), 0):o.next)&&!(r=r.call(o, s[
                  1
                ])).done)return r;
                switch(o=0, r&&(s=[
                  2&s[
                    0
                  ], r.value
                ]), s[
                  0
                ]){
                  case 0:case 1:r=s;
                  break;
                  case 4:return a.label++, {
                    value:s[
                      1
                    ], done:!1
                  };
                  case 5:a.label++, o=s[
                    1
                  ], s=[
                    0
                  ];
                  continue;
                  case 7:s=a.ops.pop(), a.trys.pop();
                  continue;
                  default:if(!(r=a.trys, (r=r.length>0&&r[
                    r.length-1
                  ])||6!==s[
                    0
                  ]
                  &&2!==s[
                    0
                  ])){
                    a=0;
                    continue
                  }
                  if(3===s[
                    0
                  ]
                  &&(!r||s[
                    1
                  ]
                  >r[
                    0
                  ]
                  &&s[
                    1
                  ]
                  <r[
                    3
                  ])){
                    a.label=s[
                      1
                    ];
                    break
                  }
                  if(6===s[
                    0
                  ]
                  &&a.label<r[
                    1
                  ]){
                    a.label=r[
                      1
                    ], r=s;
                    break
                  }
                  if(r&&a.label<r[
                    2
                  ]){
                    a.label=r[
                      2
                    ], a.ops.push(s);
                    break
                  }
                  r[
                    2
                  ]
                  &&a.ops.pop(), a.trys.pop();
                  continue
                }
                s=t.call(e, a)
              }
              catch(e){
                s=[
                  6, e
                ], o=0
              }
              finally{
                n=r=0
              }
              if(5&s[
                0
              ])throw s[
                1
              ];
              return{
                value:s[
                  0
                ]
                ?s[
                  1
                ]
                :void 0, done:!0
              }
            }
            ([
              s, l
            ])
          }
        }
      };
      const J=(0, c.pM)({
        name:"selectFileModal", components:{
        }, props:{
          value:{
            type:Boolean, default:!1
          }, courseId:{
            type:Number, required:!0
          }
        }, setup:function(e, t){
          var n=this, o=t.emit, r=(0, F.hRP)(e, "value", o, {
            eventName:"input"
          }), i=function(e){
            return Z(n, void 0, void 0, (function(){
              var t, n;
              return Q(this, (function(o){
                return t=e.detail[
                  0
                ], n=50, "ppt"===(0, q.fileTypeByExtension)(t)&&(n=200), t.size>1024*n*1024?(H.A.error(a.default.t("knowledgeGraph.aiImport.fileTooLarge")), [
                  2
                ]):(N.A.$emit("open-intelligent-import-modal", t), r.value=!1, [
                  2
                ])
              }))
            }))
          };
          return{
            show:r, openFileSelector:function(e){
              var t=(0, V.useAngularService)("fileSelectModel");
              t.singleSelect=!0, t.limitTypes=[
                "document"
              ], t.fileExts=[
                e
              ], Y("#file-select").foundation("reveal", "open")
            }, onVisibleChange:function(e){
              e?window.addEventListener("filesSelected", i):window.removeEventListener("filesSelected", i)
            }
          }
        }
      });
      const X=(0, w.A)(J, (function(){
        var e=this, t=e.$createElement, n=e._self._c||t;
        return n("Modal", {
          staticClass:"ai-select-file-modal", attrs:{
            "class-name":"vertical-center-modal", "mask-closable":!1, title:e.$t("knowledgeGraph.referenceCapture"), width:"600", closable:!1, "footer-hide":""
          }, on:{
            "on-visible-change":e.onVisibleChange
          }, scopedSlots:e._u([
            {
              key:"header", fn:function(){
                return[
                  n("div", {
                    staticClass:"ai-select-file-modal-header"
                  }, [
                    n("div", {
                      staticClass:"ai-select-file-modal-title-area"
                    }, [
                      n("i", {
                        staticClass:"font font-ai-generate"
                      }), e._v(" "), n("span", {
                        staticClass:"ai-select-file-modal-title"
                      }, [
                        e._v(e._s(e.$t("knowledgeGraph.batchImport.docx")))
                      ])
                    ]), e._v(" "), n("i", {
                      staticClass:"font font-close", on:{
                        click:function(t){
                          e.show=!1
                        }
                      }
                    })
                  ])
                ]
              }, proxy:!0
            }
          ]), model:{
            value:e.show, callback:function(t){
              e.show=t
            }, expression:"show"
          }
        }, [
          e._v(" "), n("div", {
            staticClass:"ai-select-file-content"
          }, [
            n("div", {
              staticClass:"ai-select-file-type", on:{
                click:function(t){
                  return e.openFileSelector("docx")
                }
              }
            }, [
              n("SvgIcon", {
                staticClass:"ai-select-file-type-icon", attrs:{
                  name:"intelligent-import-syllabus"
                }
              }), e._v(" "), n("span", {
                staticClass:"ai-select-file-type-title"
              }, [
                e._v(e._s(e.$t("courseOutline.syllabus")))
              ]), e._v(" "), n("span", {
                staticClass:"ai-select-file-type-text"
              }, [
                e._v(e._s(e.$t("knowledgeGraph.aiImport.syllabusTip")))
              ])
            ], 1), e._v(" "), n("div", {
              staticClass:"ai-select-file-type", on:{
                click:function(t){
                  return e.openFileSelector("pdf")
                }
              }
            }, [
              n("SvgIcon", {
                staticClass:"ai-select-file-type-icon", attrs:{
                  name:"intelligent-import-pdf"
                }
              }), e._v(" "), n("span", {
                staticClass:"ai-select-file-type-title"
              }, [
                e._v(e._s(e.$t("studentStat.material")))
              ]), e._v(" "), n("span", {
                staticClass:"ai-select-file-type-text"
              }, [
                e._v(e._s(e.$t("knowledgeGraph.aiImport.pdfTip")))
              ])
            ], 1), e._v(" "), n("div", {
              staticClass:"ai-select-file-type", on:{
                click:function(t){
                  return e.openFileSelector("pptx")
                }
              }
            }, [
              n("SvgIcon", {
                staticClass:"ai-select-file-type-icon", attrs:{
                  name:"intelligent-import-ppt"
                }
              }), e._v(" "), n("span", {
                staticClass:"ai-select-file-type-title"
              }, [
                e._v(e._s(e.$t("others")))
              ]), e._v(" "), n("span", {
                staticClass:"ai-select-file-type-text"
              }, [
                e._v(e._s(e.$t("knowledgeGraph.aiImport.pptTip")))
              ])
            ], 1)
          ])
        ])
      }), [
      ], !1, null, "753adfc3", null).exports;
      var ee=n(81675);
      const te=(0, c.pM)({
        name:"CourseSelectModal", components:{
          CourseList:ee.default
        }, props:{
          showModal:{
            type:Boolean, required:!0
          }, isProject:{
            type:Boolean, default:!1
          }
        }, setup:function(e, t){
          var n=(0, c.KR)(null), o=(0, c.KR)(0), r=(0, c.EW)((function(){
            return e.showModal
          }));
          return window.addEventListener("updateSelectedMoveCourseId", (function(e){
            var n=e.detail;
            o.value=n.courseId, t.emit("confirm", n)
          })), {
            show:r, close:function(){
              n.value.selectedCourseId=0, o.value=0, t.emit("close")
            }, selectCourseId:o, courseListRef:n
          }
        }
      });
      const ne=(0, w.A)(te, (function(){
        var e=this, t=e.$createElement, n=e._self._c||t;
        return n("Modal", {
          staticClass:"file-select-modal", attrs:{
            value:e.show, title:e.isProject?e.$t("knowledgeGraph.batchImport.project"):e.$t("knowledgeGraph.batchImport.course"), width:"900", "footer-hide":""
          }, on:{
            "on-cancel":e.close
          }
        }, [
          e.show?n("CourseList", {
            ref:"courseListRef", staticClass:"course-list", attrs:{
              "show-knowledge-node-count":!0, "exclude-current-course":!0, "is-project":e.isProject
            }
          }):e._e()
        ], 1)
      }), [
      ], !1, null, "4e8bab69", null).exports;
      n(990345), n(754989), n(658379);
      var oe=n(379960);
      const re=(0, c.pM)({
        props:{
          node:{
            type:Object, required:!0
          }, edit:{
            type:Boolean, required:!1
          }, error:{
            type:Boolean, required:!1
          }
        }, setup:function(e, t){
          var n=t.emit, o="", r=(0, c.KR)(null);
          return(0, c.wB)((function(){
            return e.edit
          }), (function(){
            e.edit||""!==e.node.name||(e.node.name=o)
          })), {
            update:function(){
              n("update")
            }, startEdit:function(){
              o=e.node.name, n("start-edit"), (0, c.dY)((function(){
                r.value.focus()
              }))
            }, inputRef:r
          }
        }
      });
      const ie=(0, w.A)(re, (function(){
        var e=this, t=e.$createElement, n=e._self._c||t;
        return e.edit?n("div", {
          staticClass:"node node-edit"
        }, [
          n("input", {
            directives:[
              {
                name:"model", rawName:"v-model", value:e.node.name, expression:"node.name"
              }
            ], ref:"inputRef", attrs:{
              draggable:!0, type:"text"
            }, domProps:{
              value:e.node.name
            }, on:{
              click:function(e){
                e.stopPropagation()
              }, dragstart:function(e){
                e.stopPropagation(), e.preventDefault()
              }, keydown:function(t){
                return!t.type.indexOf("key")&&e._k(t.keyCode, "enter", 13, t.key, "Enter")?null:e.update(t)
              }, input:function(t){
                t.target.composing||e.$set(e.node, "name", t.target.value)
              }
            }
          })
        ]):n("div", {
          staticClass:"flex node"
        }, [
          n("div", [
            n("div", [
              e._v("\n      "+e._s(e.node.name)+"\n    ")
            ]), e._v(" "), e.error?n("div", {
              staticClass:"error"
            }, [
              e._v(e._s(e.$t("knowledgeGraph.nodeNameDuplicateError")))
            ]):e._e()
          ]), e._v(" "), n("div", {
            staticClass:"tree-action"
          }, [
            n("button", {
              on:{
                click:function(t){
                  return t.preventDefault(), t.stopPropagation(), e.startEdit(t)
                }
              }
            }, [
              e._v(e._s(e.$t("edit")))
            ]), e._v(" "), e._m(0)
          ])
        ])
      }), [
        function(){
          var e=this.$createElement, t=this._self._c||e;
          return t("button", [
            t("i", {
              staticClass:"font font-activity-drag"
            })
          ])
        }
      ], !1, null, "64edcf01", null).exports;
      var ae=n(972194), se=n(346920), le=n.n(se), ce=n(731904), ue=function(e, t, n, o){
        return new(n||(n=Promise))((function(r, i){
          function a(e){
            try{
              l(o.next(e))
            }
            catch(e){
              i(e)
            }
          }
          function s(e){
            try{
              l(o.throw(e))
            }
            catch(e){
              i(e)
            }
          }
          function l(e){
            var t;
            e.done?r(e.value):(t=e.value, t instanceof n?t:new n((function(e){
              e(t)
            }))).then(a, s)
          }
          l((o=o.apply(e, t||[
          ])).next())
        }))
      }, de=function(e, t){
        var n, o, r, i, a={
          label:0, sent:function(){
            if(1&r[
              0
            ])throw r[
              1
            ];
            return r[
              1
            ]
          }, trys:[
          ], ops:[
          ]
        };
        return i={
          next:s(0), throw:s(1), return:s(2)
        }, "function"==typeof Symbol&&(i[
          Symbol.iterator
        ]
        =function(){
          return this
        }), i;
        function s(s){
          return function(l){
            return function(s){
              if(n)throw new TypeError("Generator is already executing.");
              for(;
              i&&(i=0, s[
                0
              ]
              &&(a=0)), a;
              )try{
                if(n=1, o&&(r=2&s[
                  0
                ]
                ?o.return:s[
                  0
                ]
                ?o.throw||((r=o.return)&&r.call(o), 0):o.next)&&!(r=r.call(o, s[
                  1
                ])).done)return r;
                switch(o=0, r&&(s=[
                  2&s[
                    0
                  ], r.value
                ]), s[
                  0
                ]){
                  case 0:case 1:r=s;
                  break;
                  case 4:return a.label++, {
                    value:s[
                      1
                    ], done:!1
                  };
                  case 5:a.label++, o=s[
                    1
                  ], s=[
                    0
                  ];
                  continue;
                  case 7:s=a.ops.pop(), a.trys.pop();
                  continue;
                  default:if(!(r=a.trys, (r=r.length>0&&r[
                    r.length-1
                  ])||6!==s[
                    0
                  ]
                  &&2!==s[
                    0
                  ])){
                    a=0;
                    continue
                  }
                  if(3===s[
                    0
                  ]
                  &&(!r||s[
                    1
                  ]
                  >r[
                    0
                  ]
                  &&s[
                    1
                  ]
                  <r[
                    3
                  ])){
                    a.label=s[
                      1
                    ];
                    break
                  }
                  if(6===s[
                    0
                  ]
                  &&a.label<r[
                    1
                  ]){
                    a.label=r[
                      1
                    ], r=s;
                    break
                  }
                  if(r&&a.label<r[
                    2
                  ]){
                    a.label=r[
                      2
                    ], a.ops.push(s);
                    break
                  }
                  r[
                    2
                  ]
                  &&a.ops.pop(), a.trys.pop();
                  continue
                }
                s=t.call(e, a)
              }
              catch(e){
                s=[
                  6, e
                ], o=0
              }
              finally{
                n=r=0
              }
              if(5&s[
                0
              ])throw s[
                1
              ];
              return{
                value:s[
                  0
                ]
                ?s[
                  1
                ]
                :void 0, done:!0
              }
            }
            ([
              s, l
            ])
          }
        }
      };
      const pe=(0, c.pM)({
        name:"FileSelectModal", components:{
          VTree:le(), NoData:oe.A, PreviewNode:ie
        }, props:{
          value:{
            type:Boolean, required:!0
          }, format:{
            type:String, required:!0
          }
        }, setup:function(e, t){
          var n=this, o=t.emit, r=(0, c.KR)(), i=(0, F.hRP)(e, "value", o, {
            eventName:"input"
          }), s=(0, ae.D)().depth, l=(0, c.WQ)("course", {
            id:0
          }), u=(0, c.EW)((function(){
            return a.default.t("knowledgeGraph.batchImport.".concat(e.format))
          })), d=(0, c.EW)((function(){
            return a.default.t("knowledgeGraph.batchImport.supportTip", [
              s, e.format
            ])
          })), p=(0, c.EW)((function(){
            var e="zh-cn";
            return a.default.locale.startsWith("en-")&&(e="en-us"), [
              "zh-TW", "zh-MO"
            ].includes(a.default.locale)&&(e="zh-tw"), "/static/data_import_templates/knowledge-import-excel-template-".concat(e, ".xlsx")
          })), v=(0, c.KR)(!1), f=(0, c.KR)([
          ]), h=(0, c.KR)(-1), m=(0, c.KR)([
          ]), y=function e(t){
            t.forEach((function(t){
              e(t.children)
            }));
            var n=ce._.groupBy(t, (function(e){
              return e.name
            }));
            Object.values(n).forEach((function(e){
              e.length>1&&e.forEach((function(e){
                m.value.push(e.id)
              }))
            }))
          }, g=(0, c.KR)(null), w={
            confirm:function(){
            }, cancel:function(){
            }, loading:(0, c.KR)(!1)
          };
          return{
            fileSelectRef:r, show:i, title:u, support:d, downloadTemplateUrl:p, mockSelectFile:function(){
              var e=r.value;
              e&&(e.value="", e.click())
            }, selectFileHandler:function(t){
              return ue(n, void 0, void 0, (function(){
                var n, r, i, a, s, c, u, d;
                return de(this, (function(p){
                  switch(p.label){
                    case 0:if(!(null===(u=t.target.files)||void 0===u?void 0:u.length)||1!==t.target.files.length)return[
                      3, 9
                    ];
                    n=t.target.files[
                      0
                    ], p.label=1;
                    case 1:return p.trys.push([
                      1, 8, , 9
                    ]), r=void 0, "docx"!==e.format?[
                      3, 5
                    ]
                    :[
                      4, (0, A.XE)(n)
                    ];
                    case 2:return i=p.sent(), f.value=i.data, y(f.value), v.value=!0, [
                      4, new Promise((function(e, t){
                        w.confirm=function(){
                          e(g.value.getTreeData())
                        }
                      }))
                    ];
                    case 3:return a=p.sent(), w.loading.value=!0, s=function(e){
                      return e.map((function(e){
                        return{
                          name:e.name, children:e.children?s(e.children):[
                          ]
                        }
                      }))
                    }, [
                      4, (0, A.fl)(l.id, s(a))
                    ];
                    case 4:return r=p.sent(), v.value=!1, w.loading.value=!1, [
                      3, 7
                    ];
                    case 5:return[
                      4, (0, A.Is)(l.id, n, e.format)
                    ];
                    case 6:r=p.sent(), p.label=7;
                    case 7:return(null===(d=null==r?void 0:r.data)||void 0===d?void 0:d.error)?o("error", r.data.error):o("success", r), [
                      3, 9
                    ];
                    case 8:return c=p.sent(), console.error(c), o("error"), [
                      3, 9
                    ];
                    case 9:return[
                      2
                    ]
                  }
                }))
              }))
            }, showPreview:v, previewData:f, editingPreviewDataId:h, treeRef:g, preview:w, findAllErrors:function(){
              m.value=[
              ], y(g.value.getTreeData())
            }, errorSet:m
          }
        }
      });
      const ve=(0, w.A)(pe, (function(){
        var e=this, t=e.$createElement, n=e._self._c||t;
        return n("div", [
          n("Modal", {
            staticClass:"file-select-modal", attrs:{
              "footer-hide":"", title:e.title, width:"600"
            }, model:{
              value:e.show, callback:function(t){
                e.show=t
              }, expression:"show"
            }
          }, [
            n("div", {
              staticClass:"content"
            }, [
              n("input", {
                ref:"fileSelectRef", staticStyle:{
                  display:"none"
                }, attrs:{
                  type:"file", accept:"."+e.format
                }, on:{
                  change:e.selectFileHandler
                }
              }), e._v(" "), n("Button", {
                staticClass:"select-file-btn", attrs:{
                  type:"primary"
                }, on:{
                  click:e.mockSelectFile
                }
              }, [
                n("i", {
                  staticClass:"font font-file-select"
                }), e._v(" "), "docx"===e.format?n("span", {
                  staticClass:"btn-text"
                }, [
                  e._v(e._s(e.$t("knowledgeGraph.selectDocxFile")))
                ]):n("span", {
                  staticClass:"btn-text"
                }, [
                  e._v(e._s(e.$t("knowledgeGraph.batchImport.selectFile")))
                ])
              ]), e._v(" "), "docx"===e.format?n("div", {
                staticClass:"support"
              }, [
                n("i", {
                  staticClass:"font font-info-circle"
                }), e._v("\n        "+e._s(e.$t("knowledgeGraph.supportDocx"))+"\n      ")
              ]):e._e(), e._v(" "), "xmind"===e.format?n("div", {
                staticClass:"support"
              }, [
                e._v(e._s(e.support))
              ]):e._e(), e._v(" "), "xlsx"===e.format?n("div", {
                staticClass:"download-template"
              }, [
                n("a", {
                  attrs:{
                    href:e.downloadTemplateUrl
                  }
                }, [
                  n("i", {
                    staticClass:"font font-download-alt"
                  }), e._v(" "), n("span", [
                    e._v(e._s(e.$t("downloadOfficialTemplate")))
                  ])
                ])
              ]):e._e()
            ], 1)
          ]), e._v(" "), n("Modal", {
            staticClass:"preview-modal", attrs:{
              title:e.$t("knowledgeGraph.nodePreview"), width:"900"
            }, on:{
              "on-cancel":e.preview.cancel
            }, model:{
              value:e.showPreview, callback:function(t){
                e.showPreview=t
              }, expression:"showPreview"
            }
          }, [
            n("Alert", {
              attrs:{
                "show-icon":""
              }
            }, [
              e._v(e._s(e.$t("knowledgeGraph.smartImportTip")))
            ]), e._v(" "), e.previewData.length>0?n("VTree", {
              ref:"treeRef", attrs:{
                data:e.previewData, nodeMinHeight:45, draggable:"", droppable:"", defaultExpandAll:"", titleField:"name"
              }, on:{
                "node-drop":e.findAllErrors
              }, scopedSlots:e._u([
                {
                  key:"node", fn:function(t){
                    var o=t.node;
                    return[
                      n("PreviewNode", {
                        attrs:{
                          node:o, edit:e.editingPreviewDataId===o.id, error:e.errorSet.includes(o.id)
                        }, on:{
                          "start-edit":function(t){
                            e.editingPreviewDataId=o.id
                          }, update:function(){
                            e.editingPreviewDataId=-1, e.findAllErrors()
                          }
                        }
                      })
                    ]
                  }
                }
              ], null, !1, 411282307)
            }):n("NoData", {
              staticClass:"no-data"
            }, [
              e._v(e._s(e.$t("noData")))
            ]), e._v(" "), n("div", {
              attrs:{
                slot:"footer"
              }, slot:"footer"
            }, [
              n("Button", {
                attrs:{
                  disabled:0===e.previewData.length, loading:e.preview.loading.value, type:"primary"
                }, on:{
                  click:e.preview.confirm
                }
              }, [
                e._v("\n        "+e._s(e.$t("knowledgeGraph.import"))+"\n      ")
              ])
            ], 1)
          ], 1)
        ], 1)
      }), [
      ], !1, null, "f56bc338", null).exports;
      const fe=(0, c.pM)({
        name:"ImportResult", props:{
          value:{
            type:Boolean, required:!0
          }, format:{
            type:String, required:!0
          }, result:{
            type:String, required:!0
          }, count:{
            type:Number, default:0
          }, updateCount:{
            type:Number, default:0
          }, updateReferResourceCount:{
            type:Number, default:0
          }, isProject:{
            type:Boolean, default:!1
          }, importCount:{
            type:Number, default:0
          }
        }, setup:function(e, t){
          var n=t.emit, o=(0, F.hRP)(e, "value", n, {
            eventName:"input"
          }), r=(0, c.WQ)("course", {
            allowAirService:!1
          }), i=(0, c.EW)((function(){
            return e.isProject&&"course"===e.format?a.default.t("knowledgeGraph.batchImport.project"):a.default.t("knowledgeGraph.batchImport.".concat(e.format))
          })), s=(0, c.EW)((function(){
            return"course"===e.format&&"success"===e.result?"".concat(a.default.t("knowledgeGraph.batchImport.success", [
              e.count
            ]), ", ").concat(a.default.t("knowledgeGraph.batchImport.successUpdate", [
              e.updateCount
            ])):"docx"===e.format&&"success"===e.result&&r.allowAirService?a.default.t("knowledgeGraph.aiImport.success", [
              e.count, e.importCount-e.count
            ]):e.result?a.default.t("knowledgeGraph.batchImport.".concat(e.result), [
              e.count
            ]):""
          }));
          return{
            show:o, title:i, message:s, ok:function(){
              o.value=!1, N.A.$emit("close-intelligent-import-modal"), "success"===e.result&&(e.count>0||e.updateCount>0)&&window.location.reload()
            }
          }
        }
      });
      const he=(0, w.A)(fe, (function(){
        var e=this, t=e.$createElement, n=e._self._c||t;
        return n("Modal", {
          attrs:{
            width:"480", title:e.title, closable:!1
          }, scopedSlots:e._u([
            {
              key:"footer", fn:function(){
                return[
                  n("Button", {
                    attrs:{
                      type:"primary"
                    }, on:{
                      click:e.ok
                    }
                  }, [
                    e._v(e._s(e.$t("ok")))
                  ])
                ]
              }, proxy:!0
            }
          ]), model:{
            value:e.show, callback:function(t){
              e.show=t
            }, expression:"show"
          }
        }, [
          n("div", {
            staticClass:"content"
          }, [
            "success"===e.result?n("i", {
              staticClass:"font font-checkmark-circle"
            }):n("i", {
              staticClass:"font font-error"
            }), e._v(" "), n("div", {
              staticClass:"result"
            }, [
              e._v(e._s(e.message))
            ]), e._v(" "), e.updateReferResourceCount?n("div", {
              staticClass:"sync-type-result"
            }, [
              n("div", {
                staticClass:"item"
              }, [
                n("div", {
                  staticClass:"tag"
                }), e._v(" "), n("span", {
                  staticClass:"desc"
                }, [
                  e._v("\n          "+e._s(e.$t("knowledgeGraph.batchImport.successCopyReferResources", {
                    num:e.updateReferResourceCount
                  }))+"\n        ")
                ])
              ])
            ]):e._e()
          ])
        ])
      }), [
      ], !1, null, "be474d96", null).exports;
      var me=n(255634);
      const ye=(0, c.pM)({
        components:{
          TooltipExt:me.A
        }, name:"ImportIssuesModal", props:{
          value:{
            type:Boolean, required:!0
          }, format:{
            type:String, required:!0
          }, result:{
            type:String, required:!0
          }, count:{
            type:Number, default:0
          }, correctCount:{
            type:Number, default:0
          }, issues:{
            type:Array, default:!1
          }
        }, setup:function(e, t){
          var n=t.emit, o=(0, F.hRP)(e, "value", n, {
            eventName:"input"
          }), r=(0, c.EW)((function(){
            return a.default.t("knowledgeGraph.batchImport.".concat(e.format))
          }));
          return{
            show:o, title:r, retry:function(){
              o.value=!1, n("retry")
            }
          }
        }
      });
      const ge=(0, w.A)(ye, (function(){
        var e=this, t=e.$createElement, n=e._self._c||t;
        return n("Modal", {
          attrs:{
            width:"600", title:e.title
          }, scopedSlots:e._u([
            {
              key:"footer", fn:function(){
                return[
                  n("Button", {
                    attrs:{
                      type:"primary"
                    }, on:{
                      click:e.retry
                    }
                  }, [
                    e._v(e._s(e.$t("knowledgeGraph.batchImport.reupload")))
                  ])
                ]
              }, proxy:!0
            }
          ]), model:{
            value:e.show, callback:function(t){
              e.show=t
            }, expression:"show"
          }
        }, [
          n("div", {
            staticClass:"content"
          }, [
            n("div", {
              staticClass:"error-tip"
            }, [
              n("i", {
                staticClass:"font font-circle-wrong light"
              }), e._v("\n      "+e._s(e.$t("knowledgeGraph.batchImport.alertPrefix", [
                e.correctCount
              ]))+"\n      "), n("span", {
                staticClass:"light"
              }, [
                e._v(e._s(e.issues.length))
              ]), e._v("\n      "+e._s(e.$t("knowledgeGraph.batchImport.alertSuffix"))+"\n    ")
            ]), e._v(" "), n("ul", [
              n("li", {
                staticClass:"head"
              }, [
                n("div", {
                  staticClass:"line"
                }, [
                  e._v(e._s(e.$t("knowledgeGraph.batchImport.tipHeadId")))
                ]), e._v(" "), n("div", {
                  staticClass:"desc"
                }, [
                  e._v(e._s(e.$t("knowledgeGraph.batchImport.tipHeadReason")))
                ])
              ]), e._v(" "), e._l(e.issues, (function(t, o){
                return n("li", {
                  key:o, staticClass:"item"
                }, [
                  n("div", {
                    staticClass:"line"
                  }, [
                    e._v(e._s(t.id))
                  ]), e._v(" "), n("div", {
                    staticClass:"desc"
                  }, [
                    n("TooltipExt", {
                      attrs:{
                        text:t.content, placement:"top"
                      }
                    })
                  ], 1)
                ])
              }))
            ], 2)
          ])
        ])
      }), [
      ], !1, null, "096a8dc5", null).exports, we=(0, c.pM)({
        name:"BatchImportDropdown", components:{
          FileSelectModal:ve, ImportResult:he, CourseSelectModal:ne, ImportConfirmModal:z, ImportIssuesModal:ge, IntelligentImportSelectFileModal:X
        }, setup:function(e, t){
          var n, o, r=t.root, i=(0, c.KR)(!1), s=(0, c.KR)(!1), l=(0, c.KR)(!1), u=(0, c.KR)(!1), d=(0, c.KR)(!1), p=(0, c.KR)(!1), v=(0, c.KR)(""), f=(0, c.KR)(0), h=(0, c.KR)(0), m=(0, c.KR)(0), y=(0, c.KR)(""), g=(0, c.KR)(0), w=(0, c.KR)(""), b=(0, c.KR)(0), _=(0, c.KR)(0), C=(0, c.KR)([
          ]), k=8===(null===(o=null===(n=window.globalData)||void 0===n?void 0:n.course)||void 0===o?void 0:o.courseType), x=(0, c.KR)(!1), S=(0, c.WQ)("course", {
            id:0, allowAirService:!1
          }), D=(0, c.KR)(0), T=(0, c.EW)((function(){
            return r.$store.getters[
              "airCredit/hasRemainingCredits"
            ]
          })), R=function(e){
            s.value=!1, i.value=!1, v.value="success", f.value=e.data.count||0, h.value=e.data.update_count||0, m.value=e.data.update_refer_resource_count||0, _.value=e.data.correct_count||0, e.data.issues&&e.data.issues.length>0?(C.value=e.data.issues, d.value=!0):u.value=!0
          }, I=function(e){
            i.value=!1, u.value=!0, v.value=e||"failure"
          }, A=(0, c.EW)((function(){
            return window.featureToggles.knowledgeGraphBatchImportXmind
          })), M=(0, c.EW)((function(){
            return window.featureToggles.knowledgeGraphBatchImportExcel
          })), $=(0, c.EW)((function(){
            return window.featureToggles.knowledgeGraphBatchImportCourse
          }));
          return(0, c.sV)((function(){
            N.A.$on("ai-generate-success", (function(e, t){
              R(e), D.value=t
            })), N.A.$on("ai-generate-error", (function(e){
              I(e)
            }))
          })), {
            showImportFromFileModal:i, showImportFromCourseModal:s, showImportConfirmModal:l, showImportResult:u, showImportIssuesModal:d, fileFormat:y, result:v, count:f, correctCount:_, updateCount:h, updateReferResourceCount:m, issues:C, handleImport:function(e){
              if("docx"===e&&S.allowAirService)return T.value?(p.value=!0, void(y.value=e)):void H.A.error(a.default.t("air.creditsRemainingTip.noCredits"));
              s.value="course"===e, i.value=!s.value, y.value=e
            }, onSuccess:R, onError:I, reImport:function(){
              i.value=!0, u.value=!1, d.value=!1
            }, showXmindImportBtn:A, showExcelImportBtn:M, showCourseImportBtn:$, closeCourseSelectModal:function(){
              s.value=!1
            }, confirmCourseSelect:function(e){
              g.value=e.courseId, w.value=e.courseName, b.value=e.nodeCount, l.value=!0
            }, courseId:g, courseName:w, nodeCount:b, isProject:k, onVisibleChange:function(e){
              x.value=e
            }, visible:x, course:S, showIntelligentImportSelectFileModal:p, importCount:D
          }
        }
      });
      const be=(0, w.A)(we, (function(){
        var e=this, t=e.$createElement, n=e._self._c||t;
        return n("div", {
          staticClass:"header-buttons-container", class:{
            green:e.visible
          }
        }, [
          n("Dropdown", {
            attrs:{
              placement:"bottom-end", trigger:"click"
            }, on:{
              "on-click":e.handleImport, "on-visible-change":e.onVisibleChange
            }, scopedSlots:e._u([
              {
                key:"list", fn:function(){
                  return[
                    n("DropdownMenu", [
                      e.showXmindImportBtn?n("DropdownItem", {
                        attrs:{
                          name:"docx"
                        }
                      }, [
                        e.course.allowAirService?n("i", {
                          staticClass:"font font-ai-generate"
                        }):e._e(), e._v("\n          "+e._s(e.$t("knowledgeGraph.batchImport.docx"))+"\n        ")
                      ]):e._e(), e._v(" "), e.showXmindImportBtn?n("DropdownItem", {
                        attrs:{
                          name:"xmind"
                        }
                      }, [
                        e._v("\n          "+e._s(e.$t("knowledgeGraph.batchImport.xmind"))+"\n        ")
                      ]):e._e(), e._v(" "), e.showExcelImportBtn?n("DropdownItem", {
                        attrs:{
                          name:"xlsx"
                        }
                      }, [
                        e._v("\n          "+e._s(e.$t("knowledgeGraph.batchImport.xlsx"))+"\n        ")
                      ]):e._e(), e._v(" "), e.showCourseImportBtn?n("DropdownItem", {
                        attrs:{
                          name:"course"
                        }
                      }, [
                        e._v("\n          "+e._s(e.isProject?e.$t("knowledgeGraph.batchImport.project"):e.$t("knowledgeGraph.batchImport.course"))+"\n        ")
                      ]):e._e()
                    ], 1)
                  ]
                }, proxy:!0
              }
            ])
          }, [
            n("span", {
              staticClass:"batch-import-button", class:{
                open:e.visible
              }
            }, [
              e._v("\n      "+e._s(e.$t("knowledgeGraph.batchImport.title"))+"\n      "), n("Icon", {
                attrs:{
                  custom:"font font-standard-arrow-down"
                }
              })
            ], 1)
          ]), e._v(" "), n("FileSelectModal", {
            attrs:{
              format:e.fileFormat
            }, on:{
              success:e.onSuccess, error:e.onError
            }, model:{
              value:e.showImportFromFileModal, callback:function(t){
                e.showImportFromFileModal=t
              }, expression:"showImportFromFileModal"
            }
          }), e._v(" "), n("CourseSelectModal", {
            attrs:{
              "show-modal":e.showImportFromCourseModal, "is-project":e.isProject
            }, on:{
              close:e.closeCourseSelectModal, confirm:e.confirmCourseSelect, success:e.onSuccess, error:e.onError
            }
          }), e._v(" "), n("ImportResult", {
            attrs:{
              format:e.fileFormat, result:e.result, "is-project":e.isProject, count:e.count, "update-count":e.updateCount, "update-refer-resource-count":e.updateReferResourceCount, importCount:e.importCount
            }, model:{
              value:e.showImportResult, callback:function(t){
                e.showImportResult=t
              }, expression:"showImportResult"
            }
          }), e._v(" "), n("ImportIssuesModal", {
            attrs:{
              format:e.fileFormat, result:e.result, count:e.count, "correct-count":e.correctCount, issues:e.issues
            }, on:{
              retry:e.reImport
            }, model:{
              value:e.showImportIssuesModal, callback:function(t){
                e.showImportIssuesModal=t
              }, expression:"showImportIssuesModal"
            }
          }), e._v(" "), n("ImportConfirmModal", {
            attrs:{
              "is-project":e.isProject, "course-id":e.courseId, "course-name":e.courseName, "node-count":e.nodeCount
            }, on:{
              success:e.onSuccess, error:e.onError
            }, model:{
              value:e.showImportConfirmModal, callback:function(t){
                e.showImportConfirmModal=t
              }, expression:"showImportConfirmModal"
            }
          }), e._v(" "), n("IntelligentImportSelectFileModal", {
            attrs:{
              "course-id":e.course.id
            }, model:{
              value:e.showIntelligentImportSelectFileModal, callback:function(t){
                e.showIntelligentImportSelectFileModal=t
              }, expression:"showIntelligentImportSelectFileModal"
            }
          })
        ], 1)
      }), [
      ], !1, null, "7f9e4700", null).exports;
      const _e=(0, c.pM)({
        setup:function(){
          var e=(0, c.KR)(!1), t=(0, c.KR)(null);
          return u.B.$on("graphClick", (function(){
            e.value=!1
          })), {
            hide:function(){
              e.value=!1
            }, show:e, keyword:p.Si, input:t, showInput:function(){
              e.value=!0, setTimeout((function(){
                t.value.focus()
              }), 0)
            }
          }
        }
      });
      const Ce=(0, w.A)(_e, (function(){
        var e=this, t=e.$createElement, n=e._self._c||t;
        return n("div", [
          n("button", {
            on:{
              click:e.showInput
            }
          }, [
            n("i", {
              staticClass:"font font-nav-search flex items-center"
            })
          ]), e._v(" "), e.show?n("div", {
            staticClass:"input-box flex"
          }, [
            n("i", {
              staticClass:"font font-nav-search flex items-center"
            }), e._v(" "), n("input", {
              directives:[
                {
                  name:"model", rawName:"v-model", value:e.keyword, expression:"keyword"
                }
              ], ref:"input", attrs:{
                type:"text"
              }, domProps:{
                value:e.keyword
              }, on:{
                input:function(t){
                  t.target.composing||(e.keyword=t.target.value)
                }
              }
            }), e._v(" "), e.keyword?n("i", {
              staticClass:"font font-circle-wrong flex", on:{
                click:function(t){
                  e.keyword=""
                }
              }
            }):e._e(), e._v(" "), n("button", {
              on:{
                click:e.hide
              }
            }, [
              e._v(e._s(e.$t("close")))
            ])
          ]):e._e()
        ])
      }), [
      ], !1, null, "2a6158d8", null).exports;
      var ke=n(722720);
      n(169218), n(43148);
      const xe=(0, c.pM)({
        props:{
          course:{
            type:T.c5, required:!0
          }, lastSelected:{
            type:Boolean, required:!0
          }, versions:{
            type:Array, required:!0
          }, selectedVersionId:{
            type:Number, required:!0
          }, forestVersionStatsMap:{
            type:Object, required:!0
          }
        }, components:{
        }, setup:function(e, t){
          var n=t.emit;
          return{
            selectedVersionName:(0, c.EW)((function(){
              var t;
              return null===(t=e.versions.find((function(t){
                return t.id===e.selectedVersionId
              })))||void 0===t?void 0:t.name
            })), handleSelectCourseVersion:function(t){
              n("on-version-select", {
                courseId:e.course.id, versionId:t
              })
            }, selectedVersionStat:(0, c.EW)((function(){
              return e.selectedVersionId&&e.forestVersionStatsMap[
                e.selectedVersionId
              ]
              ?e.forestVersionStatsMap[
                e.selectedVersionId
              ]
              :{
                topicCount:0, dependencyCount:0, facetCount:0, fragmentCount:0
              }
            }))
          }
        }
      });
      const Se=(0, w.A)(xe, (function(){
        var e=this, t=e.$createElement, n=e._self._c||t;
        return n("div", {
          staticClass:"item"
        }, [
          n("div", {
            staticClass:"title"
          }, [
            e._v("\n    "+e._s(e.course.name)+"\n    "), e.lastSelected?n("div", {
              staticClass:"last-select"
            }, [
              e._v("\n      "+e._s(e.$t("knowledgeGraph.lastSelect"))+"\n    ")
            ]):e._e()
          ]), e._v(" "), n("div", {
            staticClass:"desc"
          }, [
            n("Dropdown", {
              on:{
                "on-click":e.handleSelectCourseVersion
              }
            }, [
              n("div", {
              }, [
                e._v("\n        "+e._s(e.$t("knowledgeGraph.version"))+": "+e._s(e.selectedVersionName)+"\n        "), n("i", {
                  staticClass:"font font-arrow-down"
                })
              ]), e._v(" "), n("DropdownMenu", {
                attrs:{
                  slot:"list"
                }, slot:"list"
              }, e._l(e.versions, (function(t){
                return n("DropdownItem", {
                  key:t.id, attrs:{
                    name:t.id, selected:e.selectedVersionId===t.id
                  }
                }, [
                  e._v("\n          "+e._s(t.name)+"\n        ")
                ])
              })), 1)
            ], 1), e._v(" "), n("Divider", {
              attrs:{
                type:"vertical"
              }
            }), e._v(" "), n("div", [
              e._v(e._s(e.$t("teachingTeam.leader"))+"：")
            ]), e._v(" "), e.course.principalsText?n("div", {
              staticClass:"leader-name"
            }, [
              n("Tooltip", {
                attrs:{
                  content:e.course.principalsText, placement:"top"
                }
              }, [
                e._v("\n        "+e._s(e.course.principalsText)+"\n      ")
              ])
            ], 1):n("div", {
              staticClass:"leader-name"
            }, [
              e._v("--")
            ]), e._v(" "), n("Divider", {
              attrs:{
                type:"vertical"
              }
            }), e._v(" "), n("div", [
              e._v(e._s(e.$t("knowledgeGraph.topic"))+"："+e._s(e.selectedVersionStat.topicCount))
            ]), e._v(" "), n("Divider", {
              attrs:{
                type:"vertical"
              }
            }), e._v(" "), n("div", [
              e._v(e._s(e.$t("knowledgeGraph.dependency"))+"："+e._s(e.selectedVersionStat.dependencyCount))
            ]), e._v(" "), n("Divider", {
              attrs:{
                type:"vertical"
              }
            }), e._v(" "), n("div", [
              e._v(e._s(e.$t("knowledgeGraph.facet"))+"："+e._s(e.selectedVersionStat.facetCount))
            ]), e._v(" "), n("Divider", {
              attrs:{
                type:"vertical"
              }
            }), e._v(" "), n("div", [
              e._v(e._s(e.$t("knowledgeGraph.fragment"))+"："+e._s(e.selectedVersionStat.fragmentCount))
            ])
          ], 1)
        ])
      }), [
      ], !1, null, "cc048d86", null).exports;
      var De=function(){
        return(De=Object.assign||function(e){
          for(var t, n=1, o=arguments.length;
          n<o;
          n++)for(var r in t=arguments[
            n
          ])Object.prototype.hasOwnProperty.call(t, r)&&(e[
            r
          ]
          =t[
            r
          ]);
          return e
        }).apply(this, arguments)
      }, Te=function(e, t, n, o){
        return new(n||(n=Promise))((function(r, i){
          function a(e){
            try{
              l(o.next(e))
            }
            catch(e){
              i(e)
            }
          }
          function s(e){
            try{
              l(o.throw(e))
            }
            catch(e){
              i(e)
            }
          }
          function l(e){
            var t;
            e.done?r(e.value):(t=e.value, t instanceof n?t:new n((function(e){
              e(t)
            }))).then(a, s)
          }
          l((o=o.apply(e, t||[
          ])).next())
        }))
      }, Re=function(e, t){
        var n, o, r, i, a={
          label:0, sent:function(){
            if(1&r[
              0
            ])throw r[
              1
            ];
            return r[
              1
            ]
          }, trys:[
          ], ops:[
          ]
        };
        return i={
          next:s(0), throw:s(1), return:s(2)
        }, "function"==typeof Symbol&&(i[
          Symbol.iterator
        ]
        =function(){
          return this
        }), i;
        function s(s){
          return function(l){
            return function(s){
              if(n)throw new TypeError("Generator is already executing.");
              for(;
              i&&(i=0, s[
                0
              ]
              &&(a=0)), a;
              )try{
                if(n=1, o&&(r=2&s[
                  0
                ]
                ?o.return:s[
                  0
                ]
                ?o.throw||((r=o.return)&&r.call(o), 0):o.next)&&!(r=r.call(o, s[
                  1
                ])).done)return r;
                switch(o=0, r&&(s=[
                  2&s[
                    0
                  ], r.value
                ]), s[
                  0
                ]){
                  case 0:case 1:r=s;
                  break;
                  case 4:return a.label++, {
                    value:s[
                      1
                    ], done:!1
                  };
                  case 5:a.label++, o=s[
                    1
                  ], s=[
                    0
                  ];
                  continue;
                  case 7:s=a.ops.pop(), a.trys.pop();
                  continue;
                  default:if(!(r=a.trys, (r=r.length>0&&r[
                    r.length-1
                  ])||6!==s[
                    0
                  ]
                  &&2!==s[
                    0
                  ])){
                    a=0;
                    continue
                  }
                  if(3===s[
                    0
                  ]
                  &&(!r||s[
                    1
                  ]
                  >r[
                    0
                  ]
                  &&s[
                    1
                  ]
                  <r[
                    3
                  ])){
                    a.label=s[
                      1
                    ];
                    break
                  }
                  if(6===s[
                    0
                  ]
                  &&a.label<r[
                    1
                  ]){
                    a.label=r[
                      1
                    ], r=s;
                    break
                  }
                  if(r&&a.label<r[
                    2
                  ]){
                    a.label=r[
                      2
                    ], a.ops.push(s);
                    break
                  }
                  r[
                    2
                  ]
                  &&a.ops.pop(), a.trys.pop();
                  continue
                }
                s=t.call(e, a)
              }
              catch(e){
                s=[
                  6, e
                ], o=0
              }
              finally{
                n=r=0
              }
              if(5&s[
                0
              ])throw s[
                1
              ];
              return{
                value:s[
                  0
                ]
                ?s[
                  1
                ]
                :void 0, done:!0
              }
            }
            ([
              s, l
            ])
          }
        }
      };
      const Ie=(0, c.pM)({
        props:{
          subjectListTitle:{
            type:String, required:!0
          }, courseListTitle:{
            type:String, required:!0
          }, courseSearchPlaceholder:{
            type:String, required:!0
          }, lastSelect:{
            type:Array, default:function(){
              return[
              ]
            }
          }, value:{
            type:Object, required:!0
          }, subjects:{
            type:Array, required:!0
          }
        }, components:{
          NoData:oe.A, KfsCourseVersionComponent:Se
        }, setup:function(e, t){
          var n=this, o=t.emit, r=(0, c.KR)(0), i=(0, c.KR)(""), a=(0, c.nI)(), s=(0, c.KR)({
          }), l=(0, c.KR)({
          }), u=(0, c.KR)({
          }), d=(0, c.EW)((function(){
            var t;
            return((null===(t=e.subjects[
              r.value
            ])||void 0===t?void 0:t.courses)||[
            ]).filter((function(e){
              return e.name.includes(i.value)
            }))
          })), p=(0, F.hRP)(e, "value", o, {
            eventName:"input"
          }), v=(0, c.EW)((function(){
            return e.value.kfsCourseId?[
              e.value.kfsCourseId
            ]
            :[
            ]
          })), f=0, h=function(e){
            e.forEach((function(e){
              l.value[
                e
              ]
              =s.value[
                e
              ]
              [
                0
              ].id
            })), a.proxy.$forceUpdate()
          };
          return(0, c.wB)((function(){
            return e.subjects
          }), (function(){
            var t=e.subjects.findIndex((function(t){
              return t.courses.find((function(t){
                return e.lastSelect.includes(t.id)
              }))
            }));
            -1!==t&&(r.value=t)
          })), (0, c.wB)((function(){
            return d.value.map((function(e){
              return e.id
            }))
          }), (function(e){
            return Te(n, void 0, void 0, (function(){
              var t, n, o, r;
              return Re(this, (function(i){
                switch(i.label){
                  case 0:return 0===e.length?[
                    2
                  ]
                  :0===(t=ce._.difference(e, Object.keys(s.value))).length?(h(e), [
                    2
                  ]):[
                    4, (0, A.Sp)(t)
                  ];
                  case 1:return n=i.sent(), o=ce._.groupBy(n, (function(e){
                    return e.courseId
                  })), s.value=De(De({
                  }, s.value), o), r=n.map((function(e){
                    return e.id
                  })), [
                    4, (0, A.gS)(r)
                  ];
                  case 2:return i.sent().forEach((function(e){
                    u.value[
                      e.id
                    ]
                    ={
                      topicCount:e.topicCount, dependencyCount:e.dependencyCount, facetCount:e.facetCount, fragmentCount:e.fragmentCount
                    }
                  })), h(e), [
                    2
                  ]
                }
              }))
            }))
          }), {
            immediate:!0, deep:!0
          }), {
            subjectIndex:r, currentCourses:d, keyword:i, selectedCourseIds:v, change:function(e){
              e.length>=1&&(f=e[
                e.length-1
              ]), p.value.kfsCourseId=f, p.value.kfsVersionId=l.value[
                f
              ]
            }, courseSelectedVersionMap:l, courseVersionsMap:s, forestVersionStatsMap:u, handleVersionSelect:function(e){
              return Te(n, void 0, void 0, (function(){
                var t, n;
                return Re(this, (function(o){
                  return t=e.courseId, n=e.versionId, l.value[
                    t
                  ]
                  =n, a.proxy.$forceUpdate(), [
                    2
                  ]
                }))
              }))
            }
          }
        }
      });
      const Ae=(0, w.A)(Ie, (function(){
        var e=this, t=e.$createElement, n=e._self._c||t;
        return n("div", {
          staticClass:"container"
        }, [
          n("div", {
            staticClass:"left"
          }, [
            n("div", {
              staticClass:"list-title"
            }, [
              e._v(e._s(e.subjectListTitle))
            ]), e._v(" "), n("RadioGroup", {
              attrs:{
                vertical:""
              }, model:{
                value:e.subjectIndex, callback:function(t){
                  e.subjectIndex=t
                }, expression:"subjectIndex"
              }
            }, e._l(e.subjects, (function(t, o){
              return n("Radio", {
                key:t.id, attrs:{
                  label:o
                }
              }, [
                n("div", {
                  staticClass:"subject"
                }, [
                  n("div", {
                    staticClass:"subject-name"
                  }, [
                    n("Tooltip", {
                      attrs:{
                        content:t.id?t.name:e.$t("knowledgeGraph.noSpecifiedSubject"), placement:"top-start", transfer:""
                      }
                    }, [
                      e._v("\n              "+e._s(t.id?t.name:e.$t("knowledgeGraph.noSpecifiedSubject"))+"\n            ")
                    ])
                  ], 1), e._v("\n          ("+e._s(t.courses.length)+")\n        ")
                ])
              ])
            })), 1)
          ], 1), e._v(" "), n("div", {
            staticClass:"right"
          }, [
            n("div", {
              staticClass:"right-header"
            }, [
              n("span", {
                staticClass:"course-list-title"
              }, [
                e._v(e._s(e.courseListTitle))
              ]), e._v(" "), n("Input", {
                staticStyle:{
                  width:"auto"
                }, attrs:{
                  placeholder:e.courseSearchPlaceholder
                }, model:{
                  value:e.keyword, callback:function(t){
                    e.keyword=t
                  }, expression:"keyword"
                }
              }, [
                n("Icon", {
                  attrs:{
                    slot:"suffix", type:"ios-search"
                  }, slot:"suffix"
                })
              ], 1)
            ], 1), e._v(" "), n("CheckboxGroup", {
              staticClass:"course-list", attrs:{
                value:e.selectedCourseIds
              }, on:{
                "on-change":e.change
              }
            }, e._l(e.currentCourses, (function(t){
              return n("Checkbox", {
                key:t.id, attrs:{
                  label:t.id
                }
              }, [
                n("KfsCourseVersionComponent", {
                  attrs:{
                    course:t, "last-selected":e.lastSelect.includes(t.id), versions:e.courseVersionsMap[
                      t.id
                    ]
                    ||[
                    ], "selected-version-id":e.courseSelectedVersionMap[
                      t.id
                    ]
                    ||0, "forest-version-stats-map":e.forestVersionStatsMap
                  }, on:{
                    "on-version-select":e.handleVersionSelect
                  }
                })
              ], 1)
            })), 1), e._v(" "), 0===e.currentCourses.length?n("NoData", [
              e._v(e._s(e.$t("noData")))
            ]):e._e()
          ], 1)
        ])
      }), [
      ], !1, null, "0eab373a", null).exports;
      var Me=function(e, t, n, o){
        return new(n||(n=Promise))((function(r, i){
          function a(e){
            try{
              l(o.next(e))
            }
            catch(e){
              i(e)
            }
          }
          function s(e){
            try{
              l(o.throw(e))
            }
            catch(e){
              i(e)
            }
          }
          function l(e){
            var t;
            e.done?r(e.value):(t=e.value, t instanceof n?t:new n((function(e){
              e(t)
            }))).then(a, s)
          }
          l((o=o.apply(e, t||[
          ])).next())
        }))
      }, $e=function(e, t){
        var n, o, r, i, a={
          label:0, sent:function(){
            if(1&r[
              0
            ])throw r[
              1
            ];
            return r[
              1
            ]
          }, trys:[
          ], ops:[
          ]
        };
        return i={
          next:s(0), throw:s(1), return:s(2)
        }, "function"==typeof Symbol&&(i[
          Symbol.iterator
        ]
        =function(){
          return this
        }), i;
        function s(s){
          return function(l){
            return function(s){
              if(n)throw new TypeError("Generator is already executing.");
              for(;
              i&&(i=0, s[
                0
              ]
              &&(a=0)), a;
              )try{
                if(n=1, o&&(r=2&s[
                  0
                ]
                ?o.return:s[
                  0
                ]
                ?o.throw||((r=o.return)&&r.call(o), 0):o.next)&&!(r=r.call(o, s[
                  1
                ])).done)return r;
                switch(o=0, r&&(s=[
                  2&s[
                    0
                  ], r.value
                ]), s[
                  0
                ]){
                  case 0:case 1:r=s;
                  break;
                  case 4:return a.label++, {
                    value:s[
                      1
                    ], done:!1
                  };
                  case 5:a.label++, o=s[
                    1
                  ], s=[
                    0
                  ];
                  continue;
                  case 7:s=a.ops.pop(), a.trys.pop();
                  continue;
                  default:if(!(r=a.trys, (r=r.length>0&&r[
                    r.length-1
                  ])||6!==s[
                    0
                  ]
                  &&2!==s[
                    0
                  ])){
                    a=0;
                    continue
                  }
                  if(3===s[
                    0
                  ]
                  &&(!r||s[
                    1
                  ]
                  >r[
                    0
                  ]
                  &&s[
                    1
                  ]
                  <r[
                    3
                  ])){
                    a.label=s[
                      1
                    ];
                    break
                  }
                  if(6===s[
                    0
                  ]
                  &&a.label<r[
                    1
                  ]){
                    a.label=r[
                      1
                    ], r=s;
                    break
                  }
                  if(r&&a.label<r[
                    2
                  ]){
                    a.label=r[
                      2
                    ], a.ops.push(s);
                    break
                  }
                  r[
                    2
                  ]
                  &&a.ops.pop(), a.trys.pop();
                  continue
                }
                s=t.call(e, a)
              }
              catch(e){
                s=[
                  6, e
                ], o=0
              }
              finally{
                n=r=0
              }
              if(5&s[
                0
              ])throw s[
                1
              ];
              return{
                value:s[
                  0
                ]
                ?s[
                  1
                ]
                :void 0, done:!0
              }
            }
            ([
              s, l
            ])
          }
        }
      };
      const Ee=(0, c.pM)({
        components:{
          NoData:oe.A, KfsSubject:Ae
        }, setup:function(){
          var e=this, t=(0, c.KR)(!1), n=(0, c.KR)(!1), o=(0, c.KR)(!1), r=(0, F.vl3)((function(){
            return(0, A.sS)(p.yW.value.id)
          }), new T.ii).state, i=(0, F.vl3)(A.yX, [
          ], {
            shallow:!0, immediate:!1
          }), s=i.state, l=i.execute;
          (0, ke.ZC)(t, (function(){
            return l()
          }));
          var u=(0, c.EW)((function(){
            return s.value.filter((function(e){
              return"project"===e.dataType
            }))
          })), d=(0, c.EW)((function(){
            return s.value.filter((function(e){
              return"subject"===e.dataType&&e.courses.length>0
            }))
          })), v=(0, c.KR)({
            project:{
              kfsCourseId:0, kfsVersionId:0
            }, subject:{
              kfsCourseId:0, kfsVersionId:0
            }
          }), f=(0, c.KR)("subject"), h=(0, c.EW)((function(){
            return v.value[
              f.value
            ]
            ||{
              kfsCourseId:0, kfsVersionId:0
            }
          })), m=(0, c.EW)((function(){
            return h.value.kfsCourseId&&h.value.kfsVersionId
          }));
          return{
            info:r, loading:n, importData:function(){
              return Me(e, void 0, void 0, (function(){
                return $e(this, (function(e){
                  return m.value?(n.value=!0, (0, A.lb)(p.yW.value.id, h.value.kfsCourseId, h.value.kfsVersionId).then((function(){
                    t.value=!1, n.value=!1, I.A.success(a.default.t("knowledgeGraph.importSucess")), setTimeout((function(){
                      window.location.reload()
                    }), 1e3)
                  })), [
                    2
                  ]):[
                    2
                  ]
                }))
              }))
            }, currentTab:f, selectedCourseMap:v, projects:u, subjects:d, state:s, show:t, currentCourseVersion:h, canImportData:m, showInnerTooltip:o
          }
        }
      });
      const Pe=(0, w.A)(Ee, (function(){
        var e=this, t=e.$createElement, n=e._self._c||t;
        return n("div", {
          staticClass:"container"
        }, [
          n("Tooltip", {
            attrs:{
              content:e.$t("knowledgeGraph.lastImportTime")+"："+e.info.importTime, transfer:"", "transfer-class-name":"knowledge-graph-outline-tooltip", placement:"bottom", disabled:e.showInnerTooltip||!e.info.importTime
            }
          }, [
            n("Button", {
              staticClass:"btn", on:{
                click:function(t){
                  e.show=!0
                }
              }
            }, [
              n("div", {
                staticClass:"btn-content"
              }, [
                n("span", {
                  staticClass:"text"
                }, [
                  e._v(e._s(e.$t("knowledgeGraph.importData")))
                ]), e._v(" "), n("Tooltip", {
                  attrs:{
                    content:e.$t("knowledgeGraph.kfsImportTip"), placement:"bottom", transfer:"", "transfer-class-name":"knowledge-graph-outline-tooltip"
                  }, on:{
                    "on-popper-show":function(t){
                      e.showInnerTooltip=!0
                    }, "on-popper-hide":function(t){
                      e.showInnerTooltip=!1
                    }
                  }
                }, [
                  n("i", {
                    staticClass:"font font-question"
                  })
                ])
              ], 1)
            ])
          ], 1), e._v(" "), n("Modal", {
            attrs:{
              width:"900", title:e.$t("knowledgeGraph.importData")
            }, model:{
              value:e.show, callback:function(t){
                e.show=t
              }, expression:"show"
            }
          }, [
            n("Tabs", {
              staticClass:"tab", model:{
                value:e.currentTab, callback:function(t){
                  e.currentTab=t
                }, expression:"currentTab"
              }
            }, [
              n("a", {
                attrs:{
                  slot:"extra", href:e.info.server, target:"_blank"
                }, slot:"extra"
              }, [
                n("Button", {
                  staticClass:"extra-btn"
                }, [
                  e._v(e._s(e.$t("knowledgeGraph.gotoKfs")))
                ])
              ], 1), e._v(" "), n("TabPane", {
                attrs:{
                  label:e.$t("knowledgeGraph.subjectCourse"), name:"subject"
                }
              }, [
                n("div", {
                  staticClass:"info"
                }, [
                  n("i", {
                    staticClass:"font font-info"
                  }), e._v("\n          "+e._s(e.$t("knowledgeGraph.kfsImportWarning"))+"\n        ")
                ]), e._v(" "), n("KfsSubject", {
                  attrs:{
                    subjects:e.subjects, "subject-list-title":e.$t("knowledgeGraph.subjectList"), "course-list-title":e.$t("knowledgeGraph.courseList"), "course-search-placeholder":e.$t("knowledgeGraph.courseName"), "last-select":e.info.importCourseIds
                  }, model:{
                    value:e.selectedCourseMap.subject, callback:function(t){
                      e.$set(e.selectedCourseMap, "subject", t)
                    }, expression:"selectedCourseMap.subject"
                  }
                })
              ], 1), e._v(" "), n("TabPane", {
                attrs:{
                  label:e.$t("knowledgeGraph.project-kfs"), name:"project"
                }
              }, [
                n("div", {
                  staticClass:"info"
                }, [
                  n("i", {
                    staticClass:"font font-info"
                  }), e._v("\n          "+e._s(e.$t("knowledgeGraph.kfsImportWarning"))+"\n        ")
                ]), e._v(" "), n("KfsSubject", {
                  attrs:{
                    subjects:e.projects, "subject-list-title":e.$t("knowledgeGraph.projectList"), "course-list-title":e.$t("knowledgeGraph.kfsList"), "course-search-placeholder":e.$t("knowledgeGraph.kfsName"), "last-select":e.info.importCourseIds
                  }, model:{
                    value:e.selectedCourseMap.project, callback:function(t){
                      e.$set(e.selectedCourseMap, "project", t)
                    }, expression:"selectedCourseMap.project"
                  }
                })
              ], 1)
            ], 1), e._v(" "), n("div", {
              attrs:{
                slot:"footer"
              }, slot:"footer"
            }, [
              n("Button", {
                attrs:{
                  type:"primary", loading:e.loading, disabled:!e.canImportData
                }, on:{
                  click:e.importData
                }
              }, [
                e._v("\n        "+e._s(e.$t("importSubject.import"))+"\n      ")
              ]), e._v(" "), n("Button", {
                on:{
                  click:function(t){
                    e.show=!1
                  }
                }
              }, [
                e._v("\n        "+e._s(e.$t("cancel"))+"\n      ")
              ])
            ], 1)
          ], 1)
        ], 1)
      }), [
      ], !1, null, "48b55da9", null).exports;
      var Ne=function(e, t, n, o){
        return new(n||(n=Promise))((function(r, i){
          function a(e){
            try{
              l(o.next(e))
            }
            catch(e){
              i(e)
            }
          }
          function s(e){
            try{
              l(o.throw(e))
            }
            catch(e){
              i(e)
            }
          }
          function l(e){
            var t;
            e.done?r(e.value):(t=e.value, t instanceof n?t:new n((function(e){
              e(t)
            }))).then(a, s)
          }
          l((o=o.apply(e, t||[
          ])).next())
        }))
      }, Oe=function(e, t){
        var n, o, r, i, a={
          label:0, sent:function(){
            if(1&r[
              0
            ])throw r[
              1
            ];
            return r[
              1
            ]
          }, trys:[
          ], ops:[
          ]
        };
        return i={
          next:s(0), throw:s(1), return:s(2)
        }, "function"==typeof Symbol&&(i[
          Symbol.iterator
        ]
        =function(){
          return this
        }), i;
        function s(s){
          return function(l){
            return function(s){
              if(n)throw new TypeError("Generator is already executing.");
              for(;
              i&&(i=0, s[
                0
              ]
              &&(a=0)), a;
              )try{
                if(n=1, o&&(r=2&s[
                  0
                ]
                ?o.return:s[
                  0
                ]
                ?o.throw||((r=o.return)&&r.call(o), 0):o.next)&&!(r=r.call(o, s[
                  1
                ])).done)return r;
                switch(o=0, r&&(s=[
                  2&s[
                    0
                  ], r.value
                ]), s[
                  0
                ]){
                  case 0:case 1:r=s;
                  break;
                  case 4:return a.label++, {
                    value:s[
                      1
                    ], done:!1
                  };
                  case 5:a.label++, o=s[
                    1
                  ], s=[
                    0
                  ];
                  continue;
                  case 7:s=a.ops.pop(), a.trys.pop();
                  continue;
                  default:if(!(r=a.trys, (r=r.length>0&&r[
                    r.length-1
                  ])||6!==s[
                    0
                  ]
                  &&2!==s[
                    0
                  ])){
                    a=0;
                    continue
                  }
                  if(3===s[
                    0
                  ]
                  &&(!r||s[
                    1
                  ]
                  >r[
                    0
                  ]
                  &&s[
                    1
                  ]
                  <r[
                    3
                  ])){
                    a.label=s[
                      1
                    ];
                    break
                  }
                  if(6===s[
                    0
                  ]
                  &&a.label<r[
                    1
                  ]){
                    a.label=r[
                      1
                    ], r=s;
                    break
                  }
                  if(r&&a.label<r[
                    2
                  ]){
                    a.label=r[
                      2
                    ], a.ops.push(s);
                    break
                  }
                  r[
                    2
                  ]
                  &&a.ops.pop(), a.trys.pop();
                  continue
                }
                s=t.call(e, a)
              }
              catch(e){
                s=[
                  6, e
                ], o=0
              }
              finally{
                n=r=0
              }
              if(5&s[
                0
              ])throw s[
                1
              ];
              return{
                value:s[
                  0
                ]
                ?s[
                  1
                ]
                :void 0, done:!0
              }
            }
            ([
              s, l
            ])
          }
        }
      };
      const je=(0, c.pM)({
        components:{
          TooltipExt:me.A
        }, props:{
          value:{
            type:Boolean, required:!0
          }, loading:{
            type:Boolean, default:!1
          }, diff:{
            type:Array, default:function(){
              return[
              ]
            }
          }
        }, setup:function(e, t){
          var n=this, o=t.emit, r=(0, F.hRP)(e, "value", o, {
            eventName:"input"
          }), i=(0, c.KR)(!1), s=(0, c.WQ)("course", {
            id:0, graphUpdated:!1, newGraphId:0
          }), l=(0, c.EW)((function(){
            return i.value?a.default.t("knowledgeGraph.diff.updating"):a.default.t("knowledgeGraph.diff.updateDetail")
          })), u=[
            {
              title:a.default.t("knowledgeGraph.diff.columns.action"), key:"action", width:100, slot:"action"
            }, {
              title:a.default.t("knowledgeGraph.diff.node:name"), key:"nodeName", width:200
            }, {
              title:a.default.t("knowledgeGraph.diff.columns.type"), key:"type", slot:"type", width:120
            }, {
              title:a.default.t("knowledgeGraph.diff.columns.before"), key:"before", slot:"before", width:306
            }, {
              title:a.default.t("knowledgeGraph.diff.columns.after"), key:"after", slot:"after"
            }
          ], d=(0, c.EW)((function(){
            return document.body.offsetHeight-320
          }));
          return{
            show:r, columns:u, handleSpan:function(t){
              var n=t.row, o=(t.column, t.rowIndex);
              if(0===t.columnIndex){
                var r=n.action, i=e.diff.findIndex((function(e){
                  return e.action===r
                })), a=e.diff.filter((function(e){
                  return e.action===r
                })).length;
                return o===i?{
                  rowspan:a, colspan:1
                }
                :{
                  rowspan:0, colspan:0
                }
              }
              return{
                rowspan:1, colspan:1
              }
            }, maxHeight:d, onConfirm:function(){
              return Ne(n, void 0, void 0, (function(){
                var t, n;
                return Oe(this, (function(o){
                  switch(o.label){
                    case 0:t={
                      add_nodes:e.diff.filter((function(e){
                        return"add"===e.action
                      })).map((function(e){
                        return e.data
                      })), delete_nodes:e.diff.filter((function(e){
                        return"delete"===e.action
                      })).map((function(e){
                        return e.data
                      })), update_nodes:e.diff.filter((function(e){
                        return"update"===e.action&&[
                          "node:name", "node:label"
                        ].includes(e.type)
                      })).map((function(e){
                        return e.data
                      }))
                    }, i.value=!0, n=!1, o.label=1;
                    case 1:return o.trys.push([
                      1, 3, , 8
                    ]), [
                      4, (0, A.SD)(s.id, t)
                    ];
                    case 2:return o.sent(), n=!0, [
                      3, 8
                    ];
                    case 3:o.sent(), o.label=4;
                    case 4:return o.trys.push([
                      4, 6, , 7
                    ]), [
                      4, (0, A.SD)(s.id, t)
                    ];
                    case 5:return o.sent(), n=!0, [
                      3, 7
                    ];
                    case 6:return o.sent(), ce.Toast.error(a.default.t("systemError")), [
                      3, 7
                    ];
                    case 7:return[
                      3, 8
                    ];
                    case 8:return i.value=!1, n&&(r.value=!1, window.location.reload()), [
                      2
                    ]
                  }
                }))
              }))
            }, updating:i, title:l
          }
        }
      });
      const Ge=(0, w.A)(je, (function(){
        var e=this, t=e.$createElement, n=e._self._c||t;
        return n("Modal", {
          staticClass:"graph-diff-modal", attrs:{
            width:"1080", title:e.title, "mask-closable":!1, closable:!e.updating, "class-name":"vertical-center-modal"
          }, scopedSlots:e._u([
            {
              key:"footer", fn:function(){
                return[
                  e.updating?e._e():n("Button", {
                    staticClass:"cancel-btn", on:{
                      click:function(t){
                        e.show=!1
                      }
                    }
                  }, [
                    e._v(e._s(e.$t("cancel")))
                  ]), e._v(" "), e.updating?e._e():n("Button", {
                    attrs:{
                      type:"primary", disabled:e.loading||!e.diff.length
                    }, on:{
                      click:e.onConfirm
                    }
                  }, [
                    e._v("\n      "+e._s(e.$t("knowledgeGraph.diff.confirm"))+"\n    ")
                  ]), e._v(" "), e.updating?n("Button", {
                    attrs:{
                      type:"primary", loading:e.updating
                    }
                  }, [
                    e._v(e._s(e.$t("knowledgeGraph.diff.updating")))
                  ]):e._e()
                ]
              }, proxy:!0
            }
          ]), model:{
            value:e.show, callback:function(t){
              e.show=t
            }, expression:"show"
          }
        }, [
          e.loading?n("div", {
            staticClass:"spin"
          }, [
            n("div", {
              staticClass:"loading-gif"
            }), e._v(" "), n("span", {
              staticClass:"loading-tip"
            }, [
              e._v(e._s(e.$t("knowledgeGraph.diff.loadingTip")))
            ])
          ]):e._e(), e._v(" "), e.loading?e._e():n("div", {
            staticClass:"content"
          }, [
            e.updating?e._e():n("div", {
              staticClass:"warning-tip"
            }, [
              n("i", {
                staticClass:"font font-info"
              }), e._v(" "), n("span", [
                e._v(e._s(e.$t("knowledgeGraph.diff.updateTip")))
              ])
            ]), e._v(" "), n("div", {
              staticClass:"table-wrap"
            }, [
              n("Table", {
                attrs:{
                  columns:e.columns, data:e.diff, border:"", "span-method":e.handleSpan, "max-height":e.maxHeight
                }, scopedSlots:e._u([
                  {
                    key:"action", fn:function(t){
                      var o=t.row;
                      return[
                        n("span", {
                          staticClass:"action", class:o.action
                        }, [
                          e._v(e._s(e.$t("knowledgeGraph.diff."+o.action)))
                        ])
                      ]
                    }
                  }, {
                    key:"type", fn:function(t){
                      var o=t.row;
                      return[
                        n("span", [
                          e._v(e._s(e.$t("knowledgeGraph.diff."+o.type)))
                        ])
                      ]
                    }
                  }, {
                    key:"before", fn:function(t){
                      var o=t.row;
                      return[
                        "node:label"===o.type?n("div", [
                          o.before.length?n("div", {
                            staticClass:"resource-items-wrap"
                          }, e._l(o.before, (function(e, t){
                            return n("div", {
                              key:t, staticClass:"label-item"
                            }, [
                              n("TooltipExt", {
                                attrs:{
                                  text:e.key
                                }
                              })
                            ], 1)
                          })), 0):n("div", [
                            e._v("/")
                          ])
                        ]):"node:resource"===o.type?n("div", [
                          o.before.length?n("div", {
                            staticClass:"resource-items-wrap"
                          }, e._l(o.before, (function(t, o){
                            return n("div", {
                              key:o, staticClass:"resource-item"
                            }, [
                              n("SvgIcon", {
                                staticClass:"file-icon", attrs:{
                                  name:"icon-"+t.type
                                }
                              }), e._v(" "), n("TooltipExt", {
                                attrs:{
                                  text:t.title
                                }
                              })
                            ], 1)
                          })), 0):n("div", [
                            e._v("/")
                          ])
                        ]):"node:edge"===o.type?n("div", [
                          o.before.length?n("div", {
                            staticClass:"resource-items-wrap"
                          }, e._l(o.before, (function(e, t){
                            return n("div", {
                              key:t, staticClass:"item"
                            }, [
                              n("TooltipExt", {
                                attrs:{
                                  text:e
                                }
                              })
                            ], 1)
                          })), 0):n("div", [
                            e._v("/")
                          ])
                        ]):n("div", [
                          o.before?n("span", [
                            e._v(e._s(o.before))
                          ]):n("span", [
                            e._v("/")
                          ])
                        ])
                      ]
                    }
                  }, {
                    key:"after", fn:function(t){
                      var o=t.row;
                      return[
                        "node:label"===o.type?n("div", [
                          o.after.length?n("div", {
                            staticClass:"resource-items-wrap"
                          }, e._l(o.after, (function(e, t){
                            return n("div", {
                              key:t, staticClass:"label-item"
                            }, [
                              n("TooltipExt", {
                                attrs:{
                                  text:e.key
                                }
                              })
                            ], 1)
                          })), 0):n("div", [
                            e._v("/")
                          ])
                        ]):"node:resource"===o.type?n("div", [
                          o.after.length?n("div", {
                            staticClass:"resource-items-wrap"
                          }, e._l(o.after, (function(t, o){
                            return n("div", {
                              key:o, staticClass:"resource-item"
                            }, [
                              n("SvgIcon", {
                                staticClass:"file-icon", attrs:{
                                  name:"icon-"+t.type
                                }
                              }), e._v(" "), n("TooltipExt", {
                                attrs:{
                                  text:t.title
                                }
                              })
                            ], 1)
                          })), 0):n("div", [
                            e._v("/")
                          ])
                        ]):"node:edge"===o.type?n("div", [
                          o.after.length?n("div", {
                            staticClass:"resource-items-wrap"
                          }, e._l(o.after, (function(e, t){
                            return n("div", {
                              key:t, staticClass:"item"
                            }, [
                              n("TooltipExt", {
                                attrs:{
                                  text:e
                                }
                              })
                            ], 1)
                          })), 0):n("div", [
                            e._v("/")
                          ])
                        ]):n("div", [
                          o.after?n("span", [
                            e._v(e._s(o.after))
                          ]):n("span", [
                            e._v("/")
                          ])
                        ])
                      ]
                    }
                  }
                ], null, !1, 1345923950)
              })
            ], 1)
          ])
        ])
      }), [
      ], !1, null, "30aba831", null).exports;
      var Be=n(301259), Le=n(873509);
      const Ke=n.p+"assets/js/vue/views/knowledge-graph/knowledge-tree/intelligent-import-modal/761b0b4815db268d7fce.lottie";
      n(868329);
      const Ue=(0, c.pM)({
        components:{
          TooltipExt:me.A
        }, props:{
          node:{
            type:Object, required:!0
          }, edit:{
            type:Boolean, required:!1
          }, error:{
            type:Boolean, required:!1
          }
        }, setup:function(e, t){
          var n, o=t.emit, r=(null===(n=window.featureToggles)||void 0===n?void 0:n.isCognitiveDimensionOpen)||!1, i="", a=(0, c.KR)(null);
          return(0, c.wB)((function(){
            return e.edit
          }), (function(){
            e.edit||""!==e.node.name||(e.node.name=i)
          })), {
            update:function(){
              e.error||o("update")
            }, startEdit:function(){
              i=e.node.name, o("start-edit"), (0, c.dY)((function(){
                a.value.focus()
              }))
            }, inputRef:a, isCognitiveDimensionOpen:r, cancelEdit:function(){
              e.node.name=i, o("update")
            }, startDelete:function(){
              o("start-delete", e.node)
            }, handleInput:function(){
              o("input", e.node)
            }
          }
        }
      });
      const We=(0, w.A)(Ue, (function(){
        var e=this, t=e.$createElement, n=e._self._c||t;
        return e.edit?n("div", {
          staticClass:"node node-edit"
        }, [
          n("input", {
            directives:[
              {
                name:"model", rawName:"v-model", value:e.node.name, expression:"node.name"
              }
            ], ref:"inputRef", attrs:{
              draggable:!0, type:"text"
            }, domProps:{
              value:e.node.name
            }, on:{
              click:function(e){
                e.stopPropagation()
              }, dragstart:function(e){
                e.stopPropagation(), e.preventDefault()
              }, keydown:function(t){
                return!t.type.indexOf("key")&&e._k(t.keyCode, "enter", 13, t.key, "Enter")?null:e.update(t)
              }, input:[
                function(t){
                  t.target.composing||e.$set(e.node, "name", t.target.value)
                }, e.handleInput
              ]
            }
          }), e._v(" "), n("div", {
            staticClass:"option-button", on:{
              click:function(t){
                return t.stopPropagation(), e.update(t)
              }
            }
          }, [
            n("i", {
              staticClass:"font font-standard-check"
            })
          ]), e._v(" "), n("div", {
            staticClass:"option-button", on:{
              click:function(t){
                return t.stopPropagation(), e.cancelEdit(t)
              }
            }
          }, [
            n("i", {
              staticClass:"font font-standard-cancel"
            })
          ]), e._v(" "), e.error?n("div", {
            staticClass:"error"
          }, [
            e._v(e._s(e.$t("knowledgeGraph.nodeNameDuplicateError")))
          ]):e._e()
        ]):n("div", {
          staticClass:"flex node"
        }, [
          n("div", {
            staticClass:"content"
          }, [
            n("div", {
              staticClass:"name", style:{
                "max-width":"calc(23vw - "+20*e.node._level+"px)"
              }
            }, [
              n("TooltipExt", {
                attrs:{
                  text:e.node.name, "transfer-class-name":"knowledge-graph-outline-tooltip"
                }
              })
            ], 1), e._v(" "), e.isCognitiveDimensionOpen&&e.node.bloomCognitiveDomain&&"undefined"!==e.node.bloomCognitiveDomain?n("div", {
              staticClass:"cognitive-dimension", class:e.node.bloomCognitiveDomain, on:{
                mousedown:function(e){
                  e.stopPropagation()
                }
              }
            }, [
              e._v("\n      "+e._s(e.$t("knowledgeGraph.cognitiveDimension."+e.node.bloomCognitiveDomain))+"\n    ")
            ]):e._e()
          ]), e._v(" "), e.error?n("div", {
            staticClass:"error"
          }, [
            e._v(e._s(e.$t("knowledgeGraph.nodeNameDuplicateError")))
          ]):e._e(), e._v(" "), n("div", {
            staticClass:"tree-action"
          }, [
            n("button", {
              on:{
                click:function(t){
                  return t.preventDefault(), t.stopPropagation(), e.startEdit(t)
                }
              }
            }, [
              e._v(e._s(e.$t("edit")))
            ]), e._v(" "), n("button", {
              on:{
                click:function(t){
                  return t.preventDefault(), t.stopPropagation(), e.startDelete(t)
                }
              }
            }, [
              e._v(e._s(e.$t("delete")))
            ]), e._v(" "), e._m(0)
          ])
        ])
      }), [
        function(){
          var e=this.$createElement, t=this._self._c||e;
          return t("button", [
            t("i", {
              staticClass:"font font-activity-drag"
            })
          ])
        }
      ], !1, null, "1c28e110", null).exports;
      var ze=n(218831), Fe=n(491618);
      const Ve=n.p+"assets/js/vue/views/knowledge-graph/knowledge-tree/intelligent-import-modal/33020d3958b2c881f60b.lottie";
      var He=function(e, t, n, o){
        return new(n||(n=Promise))((function(r, i){
          function a(e){
            try{
              l(o.next(e))
            }
            catch(e){
              i(e)
            }
          }
          function s(e){
            try{
              l(o.throw(e))
            }
            catch(e){
              i(e)
            }
          }
          function l(e){
            var t;
            e.done?r(e.value):(t=e.value, t instanceof n?t:new n((function(e){
              e(t)
            }))).then(a, s)
          }
          l((o=o.apply(e, t||[
          ])).next())
        }))
      }, qe=function(e, t){
        var n, o, r, i, a={
          label:0, sent:function(){
            if(1&r[
              0
            ])throw r[
              1
            ];
            return r[
              1
            ]
          }, trys:[
          ], ops:[
          ]
        };
        return i={
          next:s(0), throw:s(1), return:s(2)
        }, "function"==typeof Symbol&&(i[
          Symbol.iterator
        ]
        =function(){
          return this
        }), i;
        function s(s){
          return function(l){
            return function(s){
              if(n)throw new TypeError("Generator is already executing.");
              for(;
              i&&(i=0, s[
                0
              ]
              &&(a=0)), a;
              )try{
                if(n=1, o&&(r=2&s[
                  0
                ]
                ?o.return:s[
                  0
                ]
                ?o.throw||((r=o.return)&&r.call(o), 0):o.next)&&!(r=r.call(o, s[
                  1
                ])).done)return r;
                switch(o=0, r&&(s=[
                  2&s[
                    0
                  ], r.value
                ]), s[
                  0
                ]){
                  case 0:case 1:r=s;
                  break;
                  case 4:return a.label++, {
                    value:s[
                      1
                    ], done:!1
                  };
                  case 5:a.label++, o=s[
                    1
                  ], s=[
                    0
                  ];
                  continue;
                  case 7:s=a.ops.pop(), a.trys.pop();
                  continue;
                  default:if(!(r=a.trys, (r=r.length>0&&r[
                    r.length-1
                  ])||6!==s[
                    0
                  ]
                  &&2!==s[
                    0
                  ])){
                    a=0;
                    continue
                  }
                  if(3===s[
                    0
                  ]
                  &&(!r||s[
                    1
                  ]
                  >r[
                    0
                  ]
                  &&s[
                    1
                  ]
                  <r[
                    3
                  ])){
                    a.label=s[
                      1
                    ];
                    break
                  }
                  if(6===s[
                    0
                  ]
                  &&a.label<r[
                    1
                  ]){
                    a.label=r[
                      1
                    ], r=s;
                    break
                  }
                  if(r&&a.label<r[
                    2
                  ]){
                    a.label=r[
                      2
                    ], a.ops.push(s);
                    break
                  }
                  r[
                    2
                  ]
                  &&a.ops.pop(), a.trys.pop();
                  continue
                }
                s=t.call(e, a)
              }
              catch(e){
                s=[
                  6, e
                ], o=0
              }
              finally{
                n=r=0
              }
              if(5&s[
                0
              ])throw s[
                1
              ];
              return{
                value:s[
                  0
                ]
                ?s[
                  1
                ]
                :void 0, done:!0
              }
            }
            ([
              s, l
            ])
          }
        }
      };
      const Ye=(0, c.pM)({
        components:{
          VTree:le(), AIGeneratedPreviewNode:We, Confirm:R.A
        }, props:{
          courseId:{
            type:Number, required:!0
          }, upload:{
            type:Object, required:!0
          }
        }, setup:function(e, t){
          var n=this, o=(0, c.KR)(!0), r=(0, c.KR)([
          ]), i=(0, c.KR)([
          ]), s=(0, c.KR)(null), l=(0, c.KR)(-1), u=(0, c.KR)(0), d=(0, c.KR)(!1), p=(0, c.KR)(-1), v="", f=(0, c.KR)(), h=function e(t){
            t.forEach((function(t){
              e(t.children)
            }));
            var n=ce._.groupBy(t, (function(e){
              return e.name
            }));
            Object.values(n).forEach((function(e){
              e.length>1&&e.forEach((function(e){
                i.value.push(e.id)
              }))
            }))
          }, m=function(){
            i.value=[
            ], h(s.value.getTreeData()), t.emit("status-change", 0===i.value.length)
          }, y=function(){
            r.value=[
            ], i.value=[
            ], l.value=-1, u.value=0, f.value&&f.value.abort(), f.value=null
          }, g=function(){
            y(), o.value=!1, N.A.$emit("close-intelligent-import-modal")
          }, w=function(){
            return He(n, void 0, void 0, (function(){
              return qe(this, (function(n){
                return v="", y(), o.value=!0, e.upload&&e.upload.id&&(t.emit("status-change", !1), f.value=(0, A.d6)(e.courseId, e.upload.id, {
                  onMessage:function(e){
                    v+=JSON.parse(e).data
                  }, onClose:function(){
                    try{
                      var e=function(e){
                        var t=/(?:(?:```(?:json)?\s*|^)\s*)([\s\S]*?)(?:```|$)/i.exec(e);
                        if(!t)return null;
                        var n=t[
                          1
                        ].trim(), o=(0, Fe.m)(n);
                        return JSON.parse(o)
                      }
                      (v);
                      if(!e||!e.knowledge_points)throw new Error("parsed data failed");
                      r.value=(0, ze.camelizeKeys)(e.knowledge_points), (0, c.dY)((function(){
                        var e;
                        o.value=!1, u.value=null===(e=s.value)||void 0===e?void 0:e.getNodesCount(), m(), t.root.$store.dispatch("airCredit/fetchCurrentUserState")
                      }))
                    }
                    catch(e){
                      console.log(e), g(), H.A.error(a.default.t("air.generateFail"))
                    }
                  }, onMessageError:function(){
                    g()
                  }, onError:function(e){
                    console.log(e), g(), H.A.error(a.default.t("air.generateFail"))
                  }
                })), [
                  2
                ]
              }))
            }))
          };
          return(0, c.wB)((function(){
            return e.upload
          }), (function(){
            w()
          })), (0, c.sV)((function(){
            var e=new Be.j({
              autoplay:!0, loop:!0, speed:1, canvas:document.querySelector("#loading-lottie-canvas"), src:Ve, layout:{
                fit:"contain", align:[
                  .5, .5
                ]
              }
            });
            (0, c.wB)((function(){
              return o
            }), (function(t){
              t?e.play():e.pause()
            }), {
              immediate:!0
            })
          })), {
            loading:o, previewData:r, errorSet:i, findAllErrors:m, editingPreviewDataId:l, fetch:w, importKnowledgeNodesHandler:function(){
              return He(n, void 0, void 0, (function(){
                var t, n, o, r, i;
                return qe(this, (function(a){
                  switch(a.label){
                    case 0:return a.trys.push([
                      0, 4, , 5
                    ]), [
                      4, new Promise((function(e, t){
                        var n;
                        e(null===(n=s.value)||void 0===n?void 0:n.getTreeData())
                      }))
                    ];
                    case 1:return t=a.sent(), n=function(e){
                      return e.map((function(e){
                        return{
                          name:e.name, children:e.children?n(e.children):[
                          ], cognitive_dimension:"undefined"!==e.bloomCognitiveDomain?e.bloomCognitiveDomain:"none"
                        }
                      }))
                    }, t?[
                      4, (0, A.fl)(e.courseId, n(t))
                    ]
                    :[
                      3, 3
                    ];
                    case 2:o=a.sent(), (null===(i=null==o?void 0:o.data)||void 0===i?void 0:i.error)?N.A.$emit("ai-generate-error", o.data.error):(N.A.$emit("ai-generate-success", o, u.value), y()), a.label=3;
                    case 3:return[
                      3, 5
                    ];
                    case 4:return r=a.sent(), console.error(r), N.A.$emit("ai-generate-error"), [
                      3, 5
                    ];
                    case 5:return[
                      2
                    ]
                  }
                }))
              }))
            }, treeRef:s, nodesCount:u, reset:y, deleteNode:function(){
              var e, t;
              null===(e=s.value)||void 0===e||e.remove(p.value), d.value=!1, u.value=null===(t=s.value)||void 0===t?void 0:t.getNodesCount(), m()
            }, showDeleteConfirm:d, handleStartDelete:function(e){
              p.value=e.id, d.value=!0
            }, nodeIdToDelete:p, originalData:v, handleNodeDragOver:function(e, t, n){
              var o=document.querySelector(".ctree-tree__scroll-area"), r=t.clientY, i=o.getBoundingClientRect().top, a=o.getBoundingClientRect().bottom;
              r<i+100?o.scrollTop=Math.max(0, o.scrollTop-10):r>a-100&&(o.scrollTop=Math.min(o.scrollHeight-o.clientHeight, o.scrollTop+10))
            }
          }
        }
      });
      const Ze=(0, w.A)(Ye, (function(){
        var e=this, t=e.$createElement, n=e._self._c||t;
        return n("div", {
          staticClass:"ai-generated-preview-modal"
        }, [
          n("div", {
            directives:[
              {
                name:"show", rawName:"v-show", value:e.loading, expression:"loading"
              }
            ], staticClass:"pending"
          }, [
            n("canvas", {
              attrs:{
                id:"loading-lottie-canvas"
              }
            }), e._v("\n    "+e._s(e.$t("air.onGenerate"))+"\n  ")
          ]), e._v(" "), n("div", {
            directives:[
              {
                name:"show", rawName:"v-show", value:!e.loading, expression:"!loading"
              }
            ], staticClass:"completed"
          }, [
            n("Alert", {
              attrs:{
                "show-icon":""
              }
            }, [
              e._v(e._s(e.$t("knowledgeGraph.aiImport.identifyErrorTip")))
            ]), e._v(" "), n("div", {
              staticClass:"info"
            }, [
              n("span", {
                staticClass:"count"
              }, [
                e._v(e._s(e.$t("problemGraph.totalXItems", [
                  e.nodesCount
                ])))
              ]), e._v(" "), e.loading?e._e():n("span", {
                staticClass:"re-generate", on:{
                  click:e.fetch
                }
              }, [
                n("i", {
                  staticClass:"font font-ai-generate"
                }), e._v("\n        "+e._s(e.$t("knowledgeGraph.aiImport.reIdentify"))+"\n      ")
              ])
            ]), e._v(" "), e.previewData.length>0?n("VTree", {
              ref:"treeRef", attrs:{
                data:e.previewData, nodeMinHeight:45, draggable:"", droppable:"", defaultExpandAll:"", titleField:"name"
              }, on:{
                "node-dragover":e.handleNodeDragOver, "node-drop":e.findAllErrors
              }, scopedSlots:e._u([
                {
                  key:"node", fn:function(t){
                    var o=t.node;
                    return[
                      n("AIGeneratedPreviewNode", {
                        attrs:{
                          node:o, edit:e.editingPreviewDataId===o.id, error:e.errorSet.includes(o.id)
                        }, on:{
                          "start-edit":function(t){
                            e.editingPreviewDataId=o.id
                          }, "start-delete":e.handleStartDelete, update:function(){
                            e.editingPreviewDataId=-1, e.findAllErrors()
                          }, input:e.findAllErrors
                        }
                      })
                    ]
                  }
                }
              ], null, !1, 1401491002)
            }):e._e()
          ], 1), e._v(" "), n("Confirm", {
            attrs:{
              title:e.$t("delete"), content:e.$t("knowledgeGraph.aiImport.deleteNodeTip"), type:"warning"
            }, on:{
              "on-ok":e.deleteNode, "on-cancel":function(t){
                e.showDeleteConfirm=!1
              }, "on-hidden":function(t){
                e.showDeleteConfirm=!1
              }
            }, model:{
              value:e.showDeleteConfirm, callback:function(t){
                e.showDeleteConfirm=t
              }, expression:"showDeleteConfirm"
            }
          })
        ], 1)
      }), [
      ], !1, null, "276932d0", null).exports;
      var Qe=function(e, t, n, o){
        return new(n||(n=Promise))((function(r, i){
          function a(e){
            try{
              l(o.next(e))
            }
            catch(e){
              i(e)
            }
          }
          function s(e){
            try{
              l(o.throw(e))
            }
            catch(e){
              i(e)
            }
          }
          function l(e){
            var t;
            e.done?r(e.value):(t=e.value, t instanceof n?t:new n((function(e){
              e(t)
            }))).then(a, s)
          }
          l((o=o.apply(e, t||[
          ])).next())
        }))
      }, Je=function(e, t){
        var n, o, r, i, a={
          label:0, sent:function(){
            if(1&r[
              0
            ])throw r[
              1
            ];
            return r[
              1
            ]
          }, trys:[
          ], ops:[
          ]
        };
        return i={
          next:s(0), throw:s(1), return:s(2)
        }, "function"==typeof Symbol&&(i[
          Symbol.iterator
        ]
        =function(){
          return this
        }), i;
        function s(s){
          return function(l){
            return function(s){
              if(n)throw new TypeError("Generator is already executing.");
              for(;
              i&&(i=0, s[
                0
              ]
              &&(a=0)), a;
              )try{
                if(n=1, o&&(r=2&s[
                  0
                ]
                ?o.return:s[
                  0
                ]
                ?o.throw||((r=o.return)&&r.call(o), 0):o.next)&&!(r=r.call(o, s[
                  1
                ])).done)return r;
                switch(o=0, r&&(s=[
                  2&s[
                    0
                  ], r.value
                ]), s[
                  0
                ]){
                  case 0:case 1:r=s;
                  break;
                  case 4:return a.label++, {
                    value:s[
                      1
                    ], done:!1
                  };
                  case 5:a.label++, o=s[
                    1
                  ], s=[
                    0
                  ];
                  continue;
                  case 7:s=a.ops.pop(), a.trys.pop();
                  continue;
                  default:if(!(r=a.trys, (r=r.length>0&&r[
                    r.length-1
                  ])||6!==s[
                    0
                  ]
                  &&2!==s[
                    0
                  ])){
                    a=0;
                    continue
                  }
                  if(3===s[
                    0
                  ]
                  &&(!r||s[
                    1
                  ]
                  >r[
                    0
                  ]
                  &&s[
                    1
                  ]
                  <r[
                    3
                  ])){
                    a.label=s[
                      1
                    ];
                    break
                  }
                  if(6===s[
                    0
                  ]
                  &&a.label<r[
                    1
                  ]){
                    a.label=r[
                      1
                    ], r=s;
                    break
                  }
                  if(r&&a.label<r[
                    2
                  ]){
                    a.label=r[
                      2
                    ], a.ops.push(s);
                    break
                  }
                  r[
                    2
                  ]
                  &&a.ops.pop(), a.trys.pop();
                  continue
                }
                s=t.call(e, a)
              }
              catch(e){
                s=[
                  6, e
                ], o=0
              }
              finally{
                n=r=0
              }
              if(5&s[
                0
              ])throw s[
                1
              ];
              return{
                value:s[
                  0
                ]
                ?s[
                  1
                ]
                :void 0, done:!0
              }
            }
            ([
              s, l
            ])
          }
        }
      };
      const Xe=(0, c.pM)({
        components:{
          SlelectFileModal:X, AIGeneratedPreviewModal:Ze, RemainingCreditsTip:Le.A
        }, props:{
          value:Boolean, upload:{
            type:Object, required:!0
          }
        }, setup:function(e, t){
          var n=this, o=t.emit, r=t.root, i=(0, F.hRP)(e, "value", o, {
            eventName:"input"
          }), a=(0, c.KR)(!1), s=(0, c.WQ)("course", {
            id:0
          }), l=(0, c.KR)(""), u=(0, c.KR)(""), d=(0, c.KR)(), p=(0, c.KR)(null), v=(0, c.KR)(!1), f=(0, c.KR)(!1), h=(0, c.KR)(!1), m=null, y=function(){
            var e;
            p.value&&(null===(e=p.value)||void 0===e||e.reset()), i.value=!1
          }, g=(0, c.EW)((function(){
            return u.value?"/note-bene/knowledge-graph-pdf-viewer?presentation=false&file=".concat(encodeURIComponent(u.value)):null
          }));
          return(0, c.wB)((function(){
            return e.upload
          }), (function(){
            return Qe(n, void 0, void 0, (function(){
              var t;
              return Je(this, (function(o){
                switch(o.label){
                  case 0:return r.$store.dispatch("airCredit/fetchCurrentUserState"), l.value="", u.value="", m&&clearInterval(m), e.upload&&e.upload.id?(v.value=!1, "ready"===e.upload.status?[
                    3, 2
                  ]
                  :[
                    4, (i=e.upload.id, void 0===a&&(a=5e3), Qe(n, void 0, void 0, (function(){
                      var e=this;
                      return Je(this, (function(t){
                        return[
                          2, new Promise((function(t, n){
                            m=setInterval((function(){
                              return Qe(e, void 0, void 0, (function(){
                                var e;
                                return Je(this, (function(o){
                                  switch(o.label){
                                    case 0:return o.trys.push([
                                      0, 2, , 3
                                    ]), [
                                      4, (0, A.tv)(i)
                                    ];
                                    case 1:return"ready"===o.sent()&&(clearInterval(m), t()), [
                                      3, 3
                                    ];
                                    case 2:return e=o.sent(), clearInterval(m), n(e), [
                                      3, 3
                                    ];
                                    case 3:return[
                                      2
                                    ]
                                  }
                                }))
                              }))
                            }), a)
                          }))
                        ]
                      }))
                    })))
                  ]):[
                    3, 4
                  ];
                  case 1:o.sent(), o.label=2;
                  case 2:return[
                    4, (0, A.w6)(e.upload.id)
                  ];
                  case 3:t=o.sent(), l.value=t.extension, u.value=t.url, o.label=4;
                  case 4:return[
                    2
                  ]
                }
                var i, a
              }))
            }))
          })), (0, c.sV)((function(){
            N.A.$on("close-intelligent-import-modal", (function(){
              y()
            })), r.$store.dispatch("airCredit/fetchCurrentUserState");
            var e=new Be.j({
              autoplay:!0, loop:!0, speed:.5, canvas:document.querySelector("#uploading-lottie-canvas"), src:Ke, layout:{
                fit:"contain", align:[
                  0, .5
                ]
              }
            });
            (0, c.wB)((function(){
              return v
            }), (function(t){
              t?e.pause():e.play()
            }), {
              immediate:!0
            })
          })), {
            show:i, cancel:y, showSlelectFileModal:a, course:s, reImport:function(){
              a.value=!0
            }, iframeSrc:g, iframe:d, aiGeneratedPreviewModal:p, handleImport:function(){
              var e;
              p.value&&(null===(e=p.value)||void 0===e||e.importKnowledgeNodesHandler())
            }, showConfirmModal:f, isCompleted:h, handleStatusChange:function(e){
              h.value=e
            }, onVisibleChange:function(e){
              var t;
              !e&&m&&clearInterval(m), e&&(f.value=!1, p.value&&(null===(t=p.value)||void 0===t||t.reset()))
            }, handleIframeLoad:function(){
              v.value=!0
            }, isIframeLoaded:v
          }
        }
      });
      const et=(0, w.A)(Xe, (function(){
        var e=this, t=e.$createElement, n=e._self._c||t;
        return n("div", [
          n("Modal", {
            staticClass:"intelligent-import-modal", attrs:{
              "footer-hide":"", fullscreen:"", closable:!1, transfer:!1, "z-index":102
            }, on:{
              "on-visible-change":e.onVisibleChange
            }, scopedSlots:e._u([
              {
                key:"header", fn:function(){
                  return[
                    n("div", {
                      staticClass:"intelligent-import-header"
                    }, [
                      n("div", {
                        staticClass:"intelligent-import-header-title-left"
                      }, [
                        n("SvgIcon", {
                          staticClass:"icon", attrs:{
                            name:"intelligent-import"
                          }
                        }), e._v("\n          "+e._s(e.$t("knowledgeGraph.batchImport.docx"))+"\n        ")
                      ], 1), e._v(" "), n("div", {
                        staticClass:"intelligent-import-header-title-right"
                      }, [
                        n("RemainingCreditsTip", {
                          attrs:{
                            category:"classroom"
                          }
                        }), e._v(" "), n("Button", {
                          staticClass:"btn", on:{
                            click:function(t){
                              e.showConfirmModal=!0
                            }
                          }
                        }, [
                          e._v("\n            "+e._s(e.$t("cancel"))+"\n          ")
                        ]), e._v(" "), n("Button", {
                          staticClass:"btn", on:{
                            click:e.reImport
                          }
                        }, [
                          e._v("\n            "+e._s(e.$t("reImport"))+"\n          ")
                        ]), e._v(" "), n("Button", {
                          staticClass:"green-button", class:{
                            disabled:!e.isCompleted
                          }, attrs:{
                            disabled:!e.isCompleted
                          }, on:{
                            click:e.handleImport
                          }
                        }, [
                          e._v("\n            "+e._s(e.$t("confirmImport"))+"\n          ")
                        ])
                      ], 1)
                    ])
                  ]
                }, proxy:!0
              }
            ]), model:{
              value:e.show, callback:function(t){
                e.show=t
              }, expression:"show"
            }
          }, [
            e._v(" "), n("div", {
              staticClass:"container"
            }, [
              n("div", {
                staticClass:"left-section"
              }, [
                e.iframeSrc?n("iframe", {
                  directives:[
                    {
                      name:"show", rawName:"v-show", value:e.isIframeLoaded, expression:"isIframeLoaded"
                    }
                  ], ref:"iframe", attrs:{
                    width:"100%", height:"100%", src:e.iframeSrc, frameborder:"0"
                  }, on:{
                    load:e.handleIframeLoad
                  }
                }):e._e(), e._v(" "), n("div", {
                  directives:[
                    {
                      name:"show", rawName:"v-show", value:!e.isIframeLoaded, expression:"!isIframeLoaded"
                    }
                  ], staticClass:"uploading-container"
                }, [
                  n("canvas", {
                    attrs:{
                      id:"uploading-lottie-canvas"
                    }
                  }), e._v("\n          "+e._s(e.$t("air.processing"))+"\n        ")
                ])
              ]), e._v(" "), n("SvgIcon", {
                staticClass:"arrow-icon", attrs:{
                  name:"intelligent-import-arrow"
                }
              }), e._v(" "), n("div", {
                staticClass:"right-section"
              }, [
                n("AIGeneratedPreviewModal", {
                  ref:"aiGeneratedPreviewModal", attrs:{
                    "course-id":e.course.id, upload:e.upload
                  }, on:{
                    "status-change":e.handleStatusChange
                  }
                })
              ], 1)
            ], 1)
          ]), e._v(" "), n("SlelectFileModal", {
            attrs:{
              "course-id":e.course.id
            }, model:{
              value:e.showSlelectFileModal, callback:function(t){
                e.showSlelectFileModal=t
              }, expression:"showSlelectFileModal"
            }
          }), e._v(" "), n("Modal", {
            staticClass:"confirm-modal", attrs:{
              value:e.showConfirmModal, "ok-text":e.$t("ok"), "cancel-text":e.$t("cancel"), closable:!1, width:416
            }, on:{
              "on-cancel":function(t){
                e.showConfirmModal=!1
              }, "on-ok":e.cancel
            }
          }, [
            n("div", {
              staticClass:"confirm-header", attrs:{
                slot:"header"
              }, slot:"header"
            }, [
              n("div", {
                staticClass:"title"
              }, [
                n("Icon", {
                  attrs:{
                    type:"md-alert"
                  }
                }), e._v(" "), n("span", {
                  staticClass:"text"
                }, [
                  e._v(e._s(e.$t("cancel")))
                ])
              ], 1), e._v(" "), n("div", {
                staticClass:"close-button", on:{
                  click:function(t){
                    e.showConfirmModal=!1
                  }
                }
              }, [
                n("i", {
                  staticClass:"font font-cl-close"
                })
              ])
            ]), e._v("\n    "+e._s(e.$t("knowledgeGraph.aiImport.exitTip"))+"\n  ")
          ])
        ], 1)
      }), [
      ], !1, null, "bed04b72", null).exports;
      var tt=function(e, t, n, o){
        return new(n||(n=Promise))((function(r, i){
          function a(e){
            try{
              l(o.next(e))
            }
            catch(e){
              i(e)
            }
          }
          function s(e){
            try{
              l(o.throw(e))
            }
            catch(e){
              i(e)
            }
          }
          function l(e){
            var t;
            e.done?r(e.value):(t=e.value, t instanceof n?t:new n((function(e){
              e(t)
            }))).then(a, s)
          }
          l((o=o.apply(e, t||[
          ])).next())
        }))
      }, nt=function(e, t){
        var n, o, r, i, a={
          label:0, sent:function(){
            if(1&r[
              0
            ])throw r[
              1
            ];
            return r[
              1
            ]
          }, trys:[
          ], ops:[
          ]
        };
        return i={
          next:s(0), throw:s(1), return:s(2)
        }, "function"==typeof Symbol&&(i[
          Symbol.iterator
        ]
        =function(){
          return this
        }), i;
        function s(s){
          return function(l){
            return function(s){
              if(n)throw new TypeError("Generator is already executing.");
              for(;
              i&&(i=0, s[
                0
              ]
              &&(a=0)), a;
              )try{
                if(n=1, o&&(r=2&s[
                  0
                ]
                ?o.return:s[
                  0
                ]
                ?o.throw||((r=o.return)&&r.call(o), 0):o.next)&&!(r=r.call(o, s[
                  1
                ])).done)return r;
                switch(o=0, r&&(s=[
                  2&s[
                    0
                  ], r.value
                ]), s[
                  0
                ]){
                  case 0:case 1:r=s;
                  break;
                  case 4:return a.label++, {
                    value:s[
                      1
                    ], done:!1
                  };
                  case 5:a.label++, o=s[
                    1
                  ], s=[
                    0
                  ];
                  continue;
                  case 7:s=a.ops.pop(), a.trys.pop();
                  continue;
                  default:if(!(r=a.trys, (r=r.length>0&&r[
                    r.length-1
                  ])||6!==s[
                    0
                  ]
                  &&2!==s[
                    0
                  ])){
                    a=0;
                    continue
                  }
                  if(3===s[
                    0
                  ]
                  &&(!r||s[
                    1
                  ]
                  >r[
                    0
                  ]
                  &&s[
                    1
                  ]
                  <r[
                    3
                  ])){
                    a.label=s[
                      1
                    ];
                    break
                  }
                  if(6===s[
                    0
                  ]
                  &&a.label<r[
                    1
                  ]){
                    a.label=r[
                      1
                    ], r=s;
                    break
                  }
                  if(r&&a.label<r[
                    2
                  ]){
                    a.label=r[
                      2
                    ], a.ops.push(s);
                    break
                  }
                  r[
                    2
                  ]
                  &&a.ops.pop(), a.trys.pop();
                  continue
                }
                s=t.call(e, a)
              }
              catch(e){
                s=[
                  6, e
                ], o=0
              }
              finally{
                n=r=0
              }
              if(5&s[
                0
              ])throw s[
                1
              ];
              return{
                value:s[
                  0
                ]
                ?s[
                  1
                ]
                :void 0, done:!0
              }
            }
            ([
              s, l
            ])
          }
        }
      };
      const ot=(0, c.pM)({
        components:{
          EditGraphSourceDropdown:P, MainHeader:b, LearningPath:L.A, Search:Ce, BatchImportDropdown:be, DataImport:Pe, KnowledgeGraphDiffModal:Ge, IntelligentImportModal:et, ExportDropdown:B
        }, setup:function(){
          var e=this, t=(0, c.WQ)("course", {
            id:0, graphUpdated:!1, newGraphId:0
          }), n=(0, c.KR)(!1), o=(0, c.EW)((function(){
            return p.OC.value===T.M$.PUBLISHED
          })), r=(0, c.WQ)("enableExternalGraph", !1), i=(0, c.WQ)("isBlueprint", !1), s=(0, c.WQ)("knowledgeGraphSource", "self"), l=(0, c.KR)(!1), u=(0, c.KR)(!1), d=(0, c.KR)(!1), v=(0, c.KR)([
          ]), f=(0, c.KR)(!1), h=(0, c.KR)({
          }), m=(0, c.KR)(s), y=(0, c.EW)((function(){
            return!p.yb&&!o.value
          })), g=(0, c.EW)((function(){
            return t&&t.newGraphId
          })), w=(0, c.EW)((function(){
            return g.value>0
          })), b=(0, c.EW)((function(){
            return!p.Br&&!p.dn.value&&p.yb
          })), _=(0, c.EW)((function(){
            return"self"!==m.value
          })), C=(0, c.KR)(!1), k=(0, c.EW)((function(){
            return t&&t.graphUpdated&&b.value&&_.value
          })), x=function(e, t, n){
            return e("div", {
              style:{
                background:"#fff5e5", color:"#262833", padding:"8px 32px", marginLeft:"-32px", marginRight:"-32px", marginBottom:"24px", display:"flex", alignItems:"stretch", fontSize:"14px", lineHeight:"22px"
              }
            }, [
              e("i", {
                class:"ivu-icon ".concat(t), style:{
                  fontSize:"16px", color:"#ff9700", marginRight:"8px", marginTop:"2px"
                }
              }), e("span", n)
            ])
          }, S=(0, c.EW)((function(){
            var e;
            return p.yb&&(window.featureToggles.knowledgeGraphBatchImportXmind||window.featureToggles.knowledgeGraphBatchImportCourse)&&(!_.value||!(null===(e=window.orgSettings)||void 0===e?void 0:e.enableChinamCloudGraph))
          })), D=(0, c.EW)((function(){
            var e;
            return!p.Br&&!p.dn.value&&(!_.value&&(p.yb&&p.tq.value&&!(null===(e=window.orgSettings)||void 0===e?void 0:e.enableChinamCloudGraph)))
          }));
          return(0, c.sV)((function(){
            N.A.$on("open-intelligent-import-modal", (function(e){
              f.value=!0, h.value=e
            })), N.A.$on("sync-thridparty-graph-success", (function(){
              C.value=!0
            }))
          })), {
            handleKnowledgeGraphSourceChanged:function(e){
              m.value=e
            }, syncExternalSuccess:C, isExternalGraph:_, knowledgeGraphSource:s, showLearningPath:n, learningPathDisabled:y, haveUpdatePermission:b, enableExternalGraph:r, isUpdating:l, showUpdateBtn:k, updateGraph:function(){
              return tt(e, void 0, void 0, (function(){
                var e, n, o, r, i;
                return nt(this, (function(s){
                  switch(s.label){
                    case 0:if(w.value)return[
                      3, 9
                    ];
                    if(u.value=!0, v.value.length)return[
                      2
                    ];
                    d.value=!0, e=!1, s.label=1;
                    case 1:return s.trys.push([
                      1, 3, , 8
                    ]), n=v, [
                      4, (0, A.Z2)(t.id)
                    ];
                    case 2:return n.value=s.sent(), e=!0, [
                      3, 8
                    ];
                    case 3:s.sent(), s.label=4;
                    case 4:return s.trys.push([
                      4, 6, , 7
                    ]), o=v, [
                      4, (0, A.Z2)(t.id)
                    ];
                    case 5:return o.value=s.sent(), e=!0, [
                      3, 7
                    ];
                    case 6:return s.sent(), I.A.error(a.default.t("systemError")), [
                      3, 7
                    ];
                    case 7:return[
                      3, 8
                    ];
                    case 8:return d.value=!1, e||(u.value=!1), [
                      2
                    ];
                    case 9:return l.value?[
                      2
                    ]
                    :(r=function(e){
                      return e("div", [
                        x(e, "ivu-icon-ios-alert", a.default.t("knowledgeGraph.replaceTips")), e("span", {
                          domProps:{
                            innerHTML:a.default.t("knowledgeGraph.replaceContentTips")
                          }
                        })
                      ])
                    }, [
                      4, R.A.open({
                        title:a.default.t("knowledgeGraph.replaceTitle"), type:"warning", divider:!1, width:660, content:a.default.t("knowledgeGraph.updateTip"), verticalCenter:!0, hideIcon:!0, render:r
                      })
                    ]);
                    case 10:if(!s.sent())return[
                      2
                    ];
                    l.value=!0, s.label=11;
                    case 11:return s.trys.push([
                      11, 13, 14, 15
                    ]), [
                      4, (0, A.Ht)(t.id)
                    ];
                    case 12:return s.sent(), I.A.success(a.default.t("air.updateSuccess")), window.location.reload(), [
                      3, 15
                    ];
                    case 13:return i=s.sent(), console.error(i), I.A.error(a.default.t("air.updateFail")), [
                      3, 15
                    ];
                    case 14:return l.value=!1, [
                      7
                    ];
                    case 15:return[
                      2
                    ]
                  }
                }))
              }))
            }, showBatchImportDropdown:S, canImportData:D, publishOrCancelPublish:function(){
              return tt(e, void 0, void 0, (function(){
                var e, n;
                return nt(this, (function(r){
                  switch(r.label){
                    case 0:return e=o.value?a.default.t("knowledgeGraph.cancelPublishTip"):a.default.t("knowledgeGraph.publishTip"), [
                      4, R.A.open({
                        title:a.default.t("tips"), type:"warning", divider:!1, width:416, content:e
                      })
                    ];
                    case 1:return r.sent()?(n=o.value?T.M$.UNPUBLISHED:T.M$.PUBLISHED, [
                      4, (0, A.Dy)(t.id, n).then((function(){
                        p.OC.value=n;
                        var e=o.value?a.default.t("knowledgeGraph.publishSuccess"):a.default.t("knowledgeGraph.cancelPublishSuccess");
                        I.A.success(e)
                      })).catch((function(e){
                        var t;
                        (null===(t=e.response)||void 0===t?void 0:t.data.message)&&I.A.error(e.response.data.message)
                      }))
                    ]):[
                      2
                    ];
                    case 2:return r.sent(), [
                      2
                    ]
                  }
                }))
              }))
            }, goToEdit:function(){
              return tt(e, void 0, void 0, (function(){
                var e;
                return nt(this, (function(n){
                  switch(n.label){
                    case 0:return[
                      4, (0, A.BF)(t.id)
                    ];
                    case 1:return e=n.sent(), window.open(e, "_blank"), [
                      2
                    ]
                  }
                }))
              }))
            }, isPublished:o, showDiffModal:u, loadingDiff:d, graphDiff:v, showIntelligentImportModal:f, intelligentImportModalUpload:h, isBlueprint:i, isInstructor:p.yb
          }
        }
      });
      const rt=(0, w.A)(ot, (function(){
        var e=this, t=e.$createElement, n=e._self._c||t;
        return n("MainHeader", {
          scopedSlots:e._u([
            {
              key:"btn-group", fn:function(){
                return[
                  n("div", {
                    staticClass:"flex gap-8"
                  }, [
                    e.isBlueprint?e._e():n("Button", {
                      staticClass:"edit-btn", attrs:{
                        disabled:e.learningPathDisabled
                      }, on:{
                        click:function(t){
                          e.showLearningPath=!0
                        }
                      }
                    }, [
                      n("SvgIcon", {
                        staticClass:"mr-5", attrs:{
                          name:"learn-path"
                        }
                      }), e._v("\n        "+e._s(e.$t("knowledgeGraph.learningPath"))+"\n      ")
                    ], 1), e._v(" "), n("Search", {
                      staticClass:"hidden search"
                    }), e._v(" "), e.enableExternalGraph&&e.haveUpdatePermission?n("EditGraphSourceDropdown", {
                      on:{
                        "graph-source-changed":e.handleKnowledgeGraphSourceChanged
                      }
                    }):e._e(), e._v(" "), e.haveUpdatePermission&&e.enableExternalGraph&&e.isExternalGraph&&e.syncExternalSuccess?n("Button", {
                      on:{
                        click:e.goToEdit
                      }
                    }, [
                      n("i", {
                        staticClass:"font font-batch-operation-share mr-5"
                      }), e._v("\n        "+e._s(e.$t("edit"))+"\n      ")
                    ]):e._e(), e._v(" "), e.showUpdateBtn?n("Button", {
                      attrs:{
                        loading:e.isUpdating
                      }, on:{
                        click:e.updateGraph
                      }
                    }, [
                      e.isUpdating?e._e():n("SvgIcon", {
                        staticClass:"mr-5", attrs:{
                          name:"refresh"
                        }
                      }), e._v(" "), e.isUpdating?n("span", [
                        e._v("\n          "+e._s(e.$t("completeness.updating"))+"\n        ")
                      ]):n("span", [
                        e._v("\n          "+e._s(e.$t("knowledgeGraph.update"))+"\n        ")
                      ])
                    ], 1):e._e(), e._v(" "), e.showBatchImportDropdown?n("BatchImportDropdown", {
                      staticClass:"import-btn"
                    }):e._e(), e._v(" "), e.isInstructor?n("ExportDropdown", {
                      staticClass:"export-btn"
                    }):e._e(), e._v(" "), e.canImportData?n("div", [
                      n("DataImport", {
                        staticClass:"import-btn"
                      })
                    ], 1):e._e(), e._v(" "), e.haveUpdatePermission&&!e.isBlueprint?n("span", [
                      e.isPublished?n("Button", {
                        staticClass:"publish-btn", on:{
                          click:e.publishOrCancelPublish
                        }
                      }, [
                        n("SvgIcon", {
                          attrs:{
                            name:"unpublish"
                          }
                        }), e._v("\n          "+e._s(e.$t("knowledgeGraph.cancelPublish"))+"\n        ")
                      ], 1):n("Button", {
                        staticClass:"publish-btn", attrs:{
                          type:"primary"
                        }, on:{
                          click:e.publishOrCancelPublish
                        }
                      }, [
                        n("SvgIcon", {
                          attrs:{
                            name:"publish"
                          }
                        }), e._v("\n          "+e._s(e.$t("knowledgeGraph.publish"))+"\n        ")
                      ], 1)
                    ], 1):e._e()
                  ], 1)
                ]
              }, proxy:!0
            }
          ])
        }, [
          e._v(" "), n("LearningPath", {
            model:{
              value:e.showLearningPath, callback:function(t){
                e.showLearningPath=t
              }, expression:"showLearningPath"
            }
          }), e._v(" "), n("IntelligentImportModal", {
            attrs:{
              upload:e.intelligentImportModalUpload
            }, model:{
              value:e.showIntelligentImportModal, callback:function(t){
                e.showIntelligentImportModal=t
              }, expression:"showIntelligentImportModal"
            }
          }), e._v(" "), n("KnowledgeGraphDiffModal", {
            attrs:{
              diff:e.graphDiff, loading:e.loadingDiff
            }, model:{
              value:e.showDiffModal, callback:function(t){
                e.showDiffModal=t
              }, expression:"showDiffModal"
            }
          })
        ], 1)
      }), [
      ], !1, null, "7e5b0ffc", null).exports;
      n(107918), n(640173);
      var it=n(927917), at={
        outline:"/outline", mindmap:"/mind-map", graph:"/graph", forest:"/forest"
      };
      const st=(0, c.pM)({
        components:{
          ViewSelect:it.A
        }, setup:function(){
          var e=function(e){
            var t=new Map;
            return e?(t.set("outline", a.default.t("knowledgeGraph.outlineView")), t.set("graph", a.default.t("knowledgeGraph.title")), t.set("forest", a.default.t("knowledgeForest"))):(t.set("outline", a.default.t("knowledgeGraph.outlineView")), t.set("mindmap", a.default.t("knowledgeGraph.mindMap")), t.set("graph", a.default.t("knowledgeGraph.title"))), t
          }
          ((0, c.WQ)("allowFacetsAndFragments", !1)), t=(0, y.rd)(), n=t.route, o=t.router;
          return{
            viewsMap:e, view:(0, c.EW)({
              get:function(){
                return n.value.path.replace(/[
                  /-
                ]
                /g, "")
              }, set:function(e){
                var t=at[
                  e
                ];
                null==o||o.push(t)
              }
            })
          }
        }
      });
      const lt=(0, w.A)(st, (function(){
        var e=this, t=e.$createElement, n=e._self._c||t;
        return n("ViewSelect", {
          attrs:{
            "view-map":e.viewsMap
          }, model:{
            value:e.view, callback:function(t){
              e.view=t
            }, expression:"view"
          }
        }, [
          "graph"===e.view?n("Tooltip", {
            attrs:{
              content:e.$t("darkMode"), placement:"bottom"
            }
          }, [
            n("a", {
              staticClass:"btn", staticStyle:{
                color:"#333"
              }, attrs:{
                href:"#/graph?mode=dark", target:"_blank"
              }
            }, [
              n("i", {
                staticClass:"font font-dark-mode"
              })
            ])
          ]):e._e()
        ], 1)
      }), [
      ], !1, null, "5e9515e2", null).exports;
      n(714913), n(335231), n(979073), n(906048);
      var ct=n(118018), ut=function(){
        return(ut=Object.assign||function(e){
          for(var t, n=1, o=arguments.length;
          n<o;
          n++)for(var r in t=arguments[
            n
          ])Object.prototype.hasOwnProperty.call(t, r)&&(e[
            r
          ]
          =t[
            r
          ]);
          return e
        }).apply(this, arguments)
      }, dt=function(e, t, n){
        if(n||2===arguments.length)for(var o, r=0, i=t.length;
        r<i;
        r++)!o&&r in t||(o||(o=Array.prototype.slice.call(t, 0, r)), o[
          r
        ]
        =t[
          r
        ]);
        return e.concat(o||Array.prototype.slice.call(t))
      };
      const pt=(0, c.pM)({
        components:{
          VTree:le(), CognitiveDimensionSelect:ct.A, TooltipExt:me.A
        }, setup:function(){
          var e=(0, c.KR)(!1), t=(0, c.KR)(""), n=(0, c.KR)(), o=(0, y.rd)().route, r=(0, c.KR)(), i=(0, c.KR)(!1), a=(0, c.KR)(-1), s=(0, c.KR)([
          ]), l=(0, c.KR)([
          ]), u=(0, c.KR)(!1), d=(0, c.KR)([
          ]), v=(0, c.EW)((function(){
            return l.value.length>0
          })), f=(0, c.EW)((function(){
            return s.value.length>0?"180px":"130px"
          })), h=function(){
            var e, o;
            if(p.uW.value){
              var r=t.value.trim();
              if(!r&&0===l.value.length)return null===(e=n.value)||void 0===e||e.setData(p.uW.value), s.value=[
              ], a.value=-1, void(l.value=[
              ]);
              var i=function(e, t){
                return t?e.filter((function(e){
                  return e.text.includes(t)
                })).map((function(e){
                  return ut(ut({
                  }, e), {
                    children:[
                    ]
                  })
                })):e
              }
              (0===l.value.length?d.value:d.value.filter((function(e){
                return e.cognitiveDimension&&l.value.includes(e.cognitiveDimension)
              })).map((function(e){
                return ut(ut({
                }, e), {
                  children:[
                  ]
                })
              })), r);
              null===(o=n.value)||void 0===o||o.setData(i), s.value=i, p.pq.value&&s.value.length?a.value=s.value.findIndex((function(e){
                var t;
                return e.id===(null===(t=p.pq.value)||void 0===t?void 0:t.id)
              })):a.value=-1
            }
          }, m=function(e){
            if(p.uW.value){
              p.uW.value=function t(n){
                return n.filter((function(t){
                  return!e.includes(t.id)
                })).map((function(e){
                  return ut(ut({
                  }, e), {
                    children:e.children?t(e.children):[
                    ]
                  })
                }))
              }
              (p.uW.value)
            }
          }, g=function(e){
            if(p.uW.value){
              p.uW.value=function t(n){
                return e.parentId?n.map((function(n){
                  return n.id===e.parentId?ut(ut({
                  }, n), {
                    children:n.children?dt(dt([
                    ], n.children, !0), [
                      {
                        id:e.id, text:e.text, title:e.text, cognitiveDimension:e.cognitiveDimension, sort:e.sort, children:e.children||[
                        ]
                      }
                    ], !1):[
                      {
                        id:e.id, text:e.text, title:e.text, cognitiveDimension:e.cognitiveDimension, sort:e.sort, children:e.children||[
                        ]
                      }
                    ]
                  }):ut(ut({
                  }, n), {
                    children:n.children?t(n.children):[
                    ]
                  })
                })):dt(dt([
                ], n, !0), [
                  {
                    id:e.id, text:e.text, title:e.text, cognitiveDimension:e.cognitiveDimension, sort:e.sort, children:e.children||[
                    ]
                  }
                ], !1)
              }
              (p.uW.value)
            }
          }, w=function(e){
            if(p.uW.value){
              p.uW.value=function t(n){
                return n.map((function(n){
                  return n.id===e.id?ut(ut({
                  }, n), {
                    text:e.text, title:e.title, cognitiveDimension:e.cognitiveDimension, data:ut(ut({
                    }, n.data), {
                      cognitiveDimension:e.cognitiveDimension
                    })
                  }):ut(ut({
                  }, n), {
                    children:n.children?t(n.children):[
                    ]
                  })
                }))
              }
              (p.uW.value)
            }
          };
          return(0, c.wB)((function(){
            return o.value.path
          }), (function(e){
            [
              "/outline", "/graph", "/mind-map"
            ].includes(e)&&(t.value="", l.value=[
            ], a.value=-1, p.pq.value=null, p.lj.value=!1, s.value=[
            ])
          })), (0, c.wB)(p.uW, (function(e){
            (0, c.dY)((function(){
              e&&n.value&&(d.value=n.value.getFlatData(), h())
            }))
          }), {
            immediate:!0
          }), (0, c.sV)((function(){
            N.A.$on("show-search-toolbar", (function(){
              i.value=!1, p.lj.value=!p.lj.value, p.lj.value&&(0, c.dY)((function(){
                var e;
                null===(e=r.value)||void 0===e||e.focus()
              }))
            })), N.A.$on("show-search-toolbar-filter", (function(){
              p.lj.value=!0, (0, c.dY)((function(){
                i.value=!i.value
              }))
            })), N.A.$on("search-toolbar-node-deleted", m), N.A.$on("search-toolbar-node-created", g), N.A.$on("search-toolbar-node-updated", w)
          })), {
            open:e, showSearchToolbar:p.lj, searchToolbarTreeData:p.uW, searchKeyword:t, handleSearch:h, treeSearch:n, handleClick:function(e){
              p.pq.value=e, i.value=!1, s.value.length&&(a.value=s.value.findIndex((function(e){
                var t;
                return e.id===(null===(t=p.pq.value)||void 0===t?void 0:t.id)
              }))), N.A.$emit("knowledge-graph-search-selected-node", e)
            }, inputRef:r, highlightKeyword:function(e, t){
              if(!t)return e;
              var n=new RegExp("(".concat(t, ")"), "gi");
              return e.replace(n, '<span class="highlight">$1</span>')
            }, selectPrev:function(){
              var e;
              if(s.value.length){
                a.value=(a.value-1+s.value.length)%s.value.length;
                var t=s.value[
                  a.value
                ];
                p.pq.value=t, null===(e=n.value)||void 0===e||e.scrollTo(t.id||0), N.A.$emit("knowledge-graph-search-selected-node", t)
              }
            }, selectNext:function(){
              var e;
              if(s.value.length){
                a.value=(a.value+1)%s.value.length;
                var t=s.value[
                  a.value
                ];
                p.pq.value=t, null===(e=n.value)||void 0===e||e.scrollTo(t.id||0), N.A.$emit("knowledge-graph-search-selected-node", t)
              }
            }, filteredNodes:s, searchToolbarSelectedNode:p.pq, selectedDimensions:l, CognitiveDimensions:[
              "remember", "understand", "apply", "analyze", "evaluate", "create", "none"
            ], clearFilter:function(){
              t.value="", l.value=[
              ], h()
            }, hoveringFilter:u, hasDimensionFilter:v, poptipVisible:i, flatData:d, paddingBottom:f
          }
        }
      });
      const vt=(0, w.A)(pt, (function(){
        var e=this, t=e.$createElement, n=e._self._c||t;
        return n("div", {
          staticClass:"search-toolbar-wrapper", class:{
            open:e.showSearchToolbar
          }
        }, [
          n("div", {
            staticClass:"search-toolbar-content"
          }, [
            n("div", {
              staticClass:"search-wrapper"
            }, [
              n("Input", {
                ref:"inputRef", staticClass:"search-input", staticStyle:{
                  width:"224px"
                }, attrs:{
                  placeholder:e.$t("vtrs.userIndex.pleaseInput"), clearable:""
                }, on:{
                  "on-change":e.handleSearch
                }, scopedSlots:e._u([
                  {
                    key:"suffix", fn:function(){
                      return[
                        n("i", {
                          staticClass:"font font-nav-search"
                        })
                      ]
                    }, proxy:!0
                  }
                ]), model:{
                  value:e.searchKeyword, callback:function(t){
                    e.searchKeyword=t
                  }, expression:"searchKeyword"
                }
              }), e._v(" "), n("Poptip", {
                attrs:{
                  title:e.$t("subjectLib.filter"), placement:"bottom-start"
                }, scopedSlots:e._u([
                  {
                    key:"content", fn:function(){
                      return[
                        n("span", [
                          e._v(e._s(e.$t("air.bloomOptions.name")))
                        ]), e._v(" "), n("Select", {
                          staticStyle:{
                            width:"200px"
                          }, attrs:{
                            placeholder:e.$t("knowledgeGraph.cognitiveDimension.select"), multiple:""
                          }, on:{
                            "on-change":e.handleSearch
                          }, model:{
                            value:e.selectedDimensions, callback:function(t){
                              e.selectedDimensions=t
                            }, expression:"selectedDimensions"
                          }
                        }, e._l(e.CognitiveDimensions, (function(t){
                          return n("Option", {
                            key:t, attrs:{
                              value:t
                            }
                          }, [
                            n("span", [
                              e._v(e._s(e.$t("knowledgeGraph.cognitiveDimension."+t)))
                            ])
                          ])
                        })), 1)
                      ]
                    }, proxy:!0
                  }
                ]), model:{
                  value:e.poptipVisible, callback:function(t){
                    e.poptipVisible=t
                  }, expression:"poptipVisible"
                }
              }, [
                n("div", {
                  staticClass:"icon-button filter-button", class:{
                    "has-filter":e.hasDimensionFilter, "button-active":e.poptipVisible
                  }, on:{
                    mouseenter:function(t){
                      e.hoveringFilter=!0
                    }, mouseleave:function(t){
                      e.hoveringFilter=!1
                    }
                  }
                }, [
                  n("SvgIcon", {
                    staticClass:"button-icon", attrs:{
                      name:"filter"
                    }
                  }), e._v(" "), e.hoveringFilter&&e.hasDimensionFilter?n("span", {
                    staticClass:"clear-icon", on:{
                      click:function(t){
                        return t.stopPropagation(), e.clearFilter(t)
                      }
                    }
                  }, [
                    e._v("×")
                  ]):e._e()
                ], 1)
              ])
            ], 1), e._v(" "), e.filteredNodes.length>0?n("div", {
              staticClass:"search-meta"
            }, [
              n("span", [
                e._v(e._s(e.$t("knowledgeGraph.search.searchResultTip", [
                  e.filteredNodes.length
                ])))
              ]), e._v(" "), n("div", {
                staticClass:"meta-actions"
              }, [
                n("SvgIcon", {
                  staticClass:"button-icon arrow-up", attrs:{
                    name:"arrow-down"
                  }, nativeOn:{
                    click:function(t){
                      return e.selectPrev(t)
                    }
                  }
                }), e._v(" "), n("SvgIcon", {
                  staticClass:"button-icon", attrs:{
                    name:"arrow-down"
                  }, nativeOn:{
                    click:function(t){
                      return e.selectNext(t)
                    }
                  }
                })
              ], 1)
            ]):e._e(), e._v(" "), e.searchToolbarTreeData?n("VTree", {
              ref:"treeSearch", class:{
                searched:e.searchKeyword&&e.filteredNodes.length>0
              }, style:{
                paddingBottom:e.paddingBottom
              }, attrs:{
                data:e.searchToolbarTreeData, nodeMinHeight:45, emptyText:e.$t("noData")
              }, scopedSlots:e._u([
                {
                  key:"node", fn:function(t){
                    var o=t.node;
                    return[
                      n("div", {
                        staticClass:"node-content", class:{
                          "selected-node":e.searchToolbarSelectedNode&&o.id===e.searchToolbarSelectedNode.id
                        }, on:{
                          click:function(t){
                            return t.stopPropagation(), e.handleClick(o)
                          }
                        }
                      }, [
                        n("div", {
                          staticClass:"node-name", style:{
                            "max-width":"calc(14vw - "+20*o._level+"px)"
                          }
                        }, [
                          n("TooltipExt", {
                            attrs:{
                              text:e.highlightKeyword(o.text, e.searchKeyword), "transfer-class-name":"knowledge-graph-outline-tooltip", customContent:"true"
                            }
                          })
                        ], 1)
                      ])
                    ]
                  }
                }
              ], null, !1, 2127038863)
            }):e._e()
          ], 1), e._v(" "), n("div", {
            staticClass:"handle-btn", class:{
              open:e.showSearchToolbar
            }, on:{
              click:function(t){
                e.showSearchToolbar=!e.showSearchToolbar
              }
            }
          }, [
            n("Icon", {
              attrs:{
                type:"ios-arrow-forward"
              }
            })
          ], 1)
        ])
      }), [
      ], !1, null, "83b49df2", null).exports;
      var ft=n(979278), ht=n(167690);
      const mt=(0, c.pM)({
        components:{
          MainHeader:b, SvgIcon:ft.A
        }, setup:function(){
          return{
            isInstructor:p.yb, handleAddObjective:function(){
              ht.PN.value=void 0, ht.Mm.value=!0
            }, handleSortObjective:function(){
              ht.Zq.value=!0
            }, competencyObjectives:ht.eK
          }
        }
      });
      const yt=(0, w.A)(mt, (function(){
        var e=this, t=e.$createElement, n=e._self._c||t;
        return n("MainHeader", {
          scopedSlots:e._u([
            {
              key:"btn-group", fn:function(){
                return[
                  n("div", {
                    staticClass:"flex gap-16"
                  }, [
                    e.isInstructor?n("Button", {
                      attrs:{
                        disabled:e.competencyObjectives.length<=1
                      }, on:{
                        click:e.handleSortObjective
                      }
                    }, [
                      e._v("\n        "+e._s(e.$t("adjustOrder"))+"\n      ")
                    ]):e._e(), e._v(" "), e.isInstructor?n("Button", {
                      attrs:{
                        type:"primary"
                      }, on:{
                        click:e.handleAddObjective
                      }
                    }, [
                      n("i", {
                        staticClass:"font font-activity-publish"
                      }), e._v("\n        "+e._s(e.$t("competencyGraph.addObjective"))+"\n      ")
                    ]):e._e()
                  ], 1)
                ]
              }, proxy:!0
            }
          ])
        })
      }), [
      ], !1, null, "30109628", null).exports;
      n(348825), n(630789);
      var gt=n(623694), wt=n(405852), bt=function(e, t, n, o){
        return new(n||(n=Promise))((function(r, i){
          function a(e){
            try{
              l(o.next(e))
            }
            catch(e){
              i(e)
            }
          }
          function s(e){
            try{
              l(o.throw(e))
            }
            catch(e){
              i(e)
            }
          }
          function l(e){
            var t;
            e.done?r(e.value):(t=e.value, t instanceof n?t:new n((function(e){
              e(t)
            }))).then(a, s)
          }
          l((o=o.apply(e, t||[
          ])).next())
        }))
      }, _t=function(e, t){
        var n, o, r, i, a={
          label:0, sent:function(){
            if(1&r[
              0
            ])throw r[
              1
            ];
            return r[
              1
            ]
          }, trys:[
          ], ops:[
          ]
        };
        return i={
          next:s(0), throw:s(1), return:s(2)
        }, "function"==typeof Symbol&&(i[
          Symbol.iterator
        ]
        =function(){
          return this
        }), i;
        function s(s){
          return function(l){
            return function(s){
              if(n)throw new TypeError("Generator is already executing.");
              for(;
              i&&(i=0, s[
                0
              ]
              &&(a=0)), a;
              )try{
                if(n=1, o&&(r=2&s[
                  0
                ]
                ?o.return:s[
                  0
                ]
                ?o.throw||((r=o.return)&&r.call(o), 0):o.next)&&!(r=r.call(o, s[
                  1
                ])).done)return r;
                switch(o=0, r&&(s=[
                  2&s[
                    0
                  ], r.value
                ]), s[
                  0
                ]){
                  case 0:case 1:r=s;
                  break;
                  case 4:return a.label++, {
                    value:s[
                      1
                    ], done:!1
                  };
                  case 5:a.label++, o=s[
                    1
                  ], s=[
                    0
                  ];
                  continue;
                  case 7:s=a.ops.pop(), a.trys.pop();
                  continue;
                  default:if(!(r=a.trys, (r=r.length>0&&r[
                    r.length-1
                  ])||6!==s[
                    0
                  ]
                  &&2!==s[
                    0
                  ])){
                    a=0;
                    continue
                  }
                  if(3===s[
                    0
                  ]
                  &&(!r||s[
                    1
                  ]
                  >r[
                    0
                  ]
                  &&s[
                    1
                  ]
                  <r[
                    3
                  ])){
                    a.label=s[
                      1
                    ];
                    break
                  }
                  if(6===s[
                    0
                  ]
                  &&a.label<r[
                    1
                  ]){
                    a.label=r[
                      1
                    ], r=s;
                    break
                  }
                  if(r&&a.label<r[
                    2
                  ]){
                    a.label=r[
                      2
                    ], a.ops.push(s);
                    break
                  }
                  r[
                    2
                  ]
                  &&a.ops.pop(), a.trys.pop();
                  continue
                }
                s=t.call(e, a)
              }
              catch(e){
                s=[
                  6, e
                ], o=0
              }
              finally{
                n=r=0
              }
              if(5&s[
                0
              ])throw s[
                1
              ];
              return{
                value:s[
                  0
                ]
                ?s[
                  1
                ]
                :void 0, done:!0
              }
            }
            ([
              s, l
            ])
          }
        }
      };
      function Ct(){
        var e=this, t=function(e, t){
          var n=(0, wt.f4)(e), o=new gt.TO(e, t, n);
          return{
            layoutData:o.getLayoutData(), fullData:o.getData()
          }
        }, o=function(e){
          var t=function e(t){
            t.isCollapsed=!1, t.isShow=!0, t.children&&Array.isArray(t.children)&&t.children.length>0&&t.children.forEach(e)
          };
          e.nodes.forEach((function(e){
            t(e)
          })), e.edges.forEach((function(e){
            e.isShow=!0
          }))
        }, r=function(e, t, n){
          e.data(t), e.render(), n.edges.forEach((function(t){
            e.addItem("edge", t)
          })), e.getNodes().forEach((function(e){
            var t=n.nodes.find((function(t){
              return t.id===e.getModel().id
            }));
            t&&e.update(t)
          })), e.refreshPositions()
        }, i=function(e, t, n, o, r){
          e.toBlob((function(e){
            if(r(), e){
              var i=URL.createObjectURL(e), a=document.createElement("a");
              a.href=i, a.download=t, document.body.appendChild(a), a.click(), document.body.removeChild(a), URL.revokeObjectURL(i), n(i)
            }
            else o(new Error("Failed to create blob"))
          }), "image/png")
        };
        return{
          exportGraphAsImage:function(a){
            return bt(e, void 0, void 0, (function(){
              var e, s, l, c;
              return _t(this, (function(u){
                return e=new Date, s="".concat(e.getFullYear()).concat(String(e.getMonth()+1).padStart(2, "0")).concat(String(e.getDate()).padStart(2, "0"), "-").concat(String(e.getHours()).padStart(2, "0")).concat(String(e.getMinutes()).padStart(2, "0")).concat(String(e.getSeconds()).padStart(2, "0")), l="knowledge-graph-".concat(s, ".png"), c={
                  course:!0, levelRelation:!0, directedRelation:!0, undirectedRelation:!0, showLevelNumber:100
                }, [
                  2, new Promise((function(e, s){
                    try{
                      var u=document.createElement("div");
                      u.style.position="absolute", u.style.top="-9999px", u.style.left="-9999px", u.style.width="8000px", u.style.height="6000px", u.className="graph-container canvas-graph", document.body.appendChild(u);
                      var d=new gt.Fv({
                        container:u, width:8e3, height:6e3
                      }), p=t(a, c), v=p.layoutData, f=p.fullData;
                      o(f), r(d, v, f), setTimeout((function(){
                        try{
                          var p=d.getGroup().getCanvasBBox();
                          if(d.destroy(), document.body.removeChild(u), !p||0===p.width||0===p.height)return;
                          var v=Math.ceil(p.width+400), f=Math.ceil(p.height+400);
                          !function(e, a, s, l, c, u, d){
                            try{
                              var p=document.createElement("div");
                              p.style.position="absolute", p.style.top="-9999px", p.style.left="-9999px", p.style.width="".concat(s, "px"), p.style.height="".concat(l, "px"), p.className="graph-container canvas-graph", document.body.appendChild(p);
                              var v=new gt.Fv({
                                container:p, width:s, height:l
                              }), f=t(e, a), h=f.layoutData, m=f.fullData;
                              o(m), r(v, h, m), v.fitView(200), v.fitCenter();
                              var y=v.get("canvas").get("el"), g=document.createElement("canvas");
                              g.width=y.width, g.height=y.height;
                              var w=g.getContext("2d");
                              if(!w)return v.destroy(), void document.body.removeChild(p);
                              w.fillStyle="white", w.fillRect(0, 0, g.width, g.height), setTimeout((function(){
                                var e=new Image;
                                e.crossOrigin="anonymous", e.src=new URL(n(256164), n.b).href, e.onload=function(){
                                  var t, n, o, r, a=e.width/e.height;
                                  a>g.width/g.height?(t=(n=g.height)*a, o=(g.width-t)/2, r=0):(n=(t=g.width)/a, o=0, r=(g.height-n)/2), w.drawImage(e, o, r, t, n), w.drawImage(y, 0, 0), i(g, c, u, d, (function(){
                                    v.destroy(), document.body.removeChild(p)
                                  }))
                                }, e.onerror=function(){
                                  w.drawImage(y, 0, 0), i(g, c, u, d, (function(){
                                    v.destroy(), document.body.removeChild(p)
                                  }))
                                }
                              }), 100)
                            }
                            catch(e){
                              d(e)
                            }
                          }
                          (a, c, v, f, l, e, s)
                        }
                        catch(e){
                          d.destroy(), document.body.removeChild(u), s(e)
                        }
                      }), 200)
                    }
                    catch(e){
                      s(e)
                    }
                  }))
                ]
              }))
            }))
          }
        }
      }
      function kt(e, t, n, o, r, i, a){
        try{
          var s=e[
            i
          ]
          (a), l=s.value
        }
        catch(e){
          return void n(e)
        }
        s.done?t(l):Promise.resolve(l).then(o, r)
      }
      const xt=(0, c.pM)({
        router:d.Q, components:{
          RelationIndex:v.default, ProblemHeader:D, knowledgeGraphHeader:rt, KnowledgeGraphViewSelector:lt, SearchToolbar:vt, CompetencyGraphHeader:yt
        }, props:[
          "course", "treeDepth", "allowedRelationTypes", "publishType", "editDisabled", "isSimulatingAsStudent", "allowFacetsAndFragments", "enableExternalGraph", "problemPublishType", "knowledgeGraphSource", "isBlueprint"
        ], provide(){
          return{
            course:this.course, treeDepth:this.treeDepth, allowedRelationTypes:this.allowedRelationTypes, publishType:this.publishType, editDisabled:this.editDisabled, isSimulatingAsStudent:this.isSimulatingAsStudent, allowFacetsAndFragments:this.allowFacetsAndFragments, enableExternalGraph:this.enableExternalGraph, problemPublishType:this.problemPublishType, knowledgeGraphSource:this.knowledgeGraphSource, isBlueprint:this.isBlueprint
          }
        }, computed:{
          view(){
            var e=localStorage.getItem("knowledgeGraphHash");
            return e?"/".concat(e):this.$route.path
          }, viewSelectorClass(){
            return{
              "with-toolbar":p.lj.value, "without-toolbar":!p.lj.value, "simulating-student":this.isSimulatingAsStudent&&[
                "/forest", "/graph"
              ].includes(this.view)
            }
          }, viewClass:()=>({
            "with-toolbar":p.lj.value, "without-toolbar":!p.lj.value
          })
        }, watch:{
          "$route.query.mode":function(){
            "dark"===this.$route.query.mode&&(p.HD.value=!0, document.querySelector("html").classList.add("dark"))
          }
        }, created(){
          p.yW.value=this.course, p.OC.value=this.publishType, p.tq.value=this.editDisabled, p.dn.value=this.isSimulatingAsStudent
        }, setup(){
          var e=function(){
            var e, t=(e=l().mark((function e(){
              var t, n, o;
              return l().wrap((function(e){
                for(;
                ;
                )switch(e.prev=e.next){
                  case 0:return e.prev=0, t=Ct(), n=t.exportGraphAsImage, e.next=4, (0, A.eh)(p.yW.value.id);
                  case 4:return o=e.sent, e.next=7, n(o);
                  case 7:e.next=12;
                  break;
                  case 9:e.prev=9, e.t0=e.catch(0), console.error("Failed to export graph image:", e.t0);
                  case 12:case"end":return e.stop()
                }
              }), e, null, [
                [
                  0, 9
                ]
              ])
            })), function(){
              var t=this, n=arguments;
              return new Promise((function(o, r){
                var i=e.apply(t, n);
                function a(e){
                  kt(i, o, r, a, s, "next", e)
                }
                function s(e){
                  kt(i, o, r, a, s, "throw", e)
                }
                a(void 0)
              }))
            });
            return function(){
              return t.apply(this, arguments)
            }
          }
          ();
          return u.B.$on("export-graph-image", (()=>{
            e()
          })), {
            isDark:p.HD, showSearchToolbar:p.lj, exportImage:e
          }
        }
      });
      const St=(0, w.A)(xt, (function(){
        var e=this, t=e.$createElement, n=e._self._c||t;
        return n("div", {
          staticClass:"knowledge-wrapper"
        }, [
          "/problem"===e.view?n("ProblemHeader"):e._e(), e._v(" "), "/competency"===e.view?n("CompetencyGraphHeader"):e._e(), e._v(" "), "/problem"!==e.view&&"/competency"!==e.view?n("knowledgeGraphHeader"):e._e(), e._v(" "), [
            "/graph", "/forest", "/mind-map", "/outline"
          ].includes(e.view)&&!e.isDark?n("KnowledgeGraphViewSelector", {
            staticClass:"knowledge-node-graph-view-selector", class:e.viewSelectorClass
          }):e._e(), e._v(" "), n("div", {
            staticClass:"knowledge-graph-view-container"
          }, [
            [
              "/problem", "/competency"
            ].includes(e.view)||e.isDark?e._e():n("SearchToolbar"), e._v(" "), n("router-view", {
              staticClass:"view", class:e.viewClass
            })
          ], 1)
        ], 1)
      }), [
      ], !1, null, "33c46418", null).exports;
      var Dt=n(756029);
      o.default.use(i.A), o.default.use(r.A), o.default.component("SvgIcon", n(979278).A), o.default.customElement("knowledge-graph", St), Dt.module("common").directive("subjectRender", (function(){
        return{
          restrict:"A", scope:{
            subject:"=", inSubmission:"=", optionIdxToChar:"=", getSubIndex:"=", trustSrc:"="
          }, templateUrl:"subject.html"
        }
      }))
    }, 542535:(e, t, n)=>{
      n.d(t, {
        QX:()=>r.QX, SS:()=>r.SS, DO:()=>r.DO, GZ:()=>r.GZ, ne:()=>c
      });
      var o, r=n(316327), i=(n(43148), n(572366)), a=n(767747), s=n(333706), l=(o=function(e, t){
        return(o=Object.setPrototypeOf||{
          __proto__:[
          ]
        }
        instanceof Array&&function(e, t){
          e.__proto__=t
        }
        ||function(e, t){
          for(var n in t)Object.prototype.hasOwnProperty.call(t, n)&&(e[
            n
          ]
          =t[
            n
          ])
        })(e, t)
      }, function(e, t){
        if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");
        function n(){
          this.constructor=e
        }
        o(e, t), e.prototype=null===t?Object.create(t):(n.prototype=t.prototype, new n)
      }), c=function(e){
        function t(t, n){
          void 0===n&&(n={
          });
          var o, a, s=this;
          return(s=e.call(this, t)||this).action=n, s.status={
            dragging:!1
          }, s.menu=(0, i.vtF)("div").style("position", "absolute").style("z-index", 1e4), s.menu.append("button").datum({
          }).text(null!==(a=null===(o=s.action.remove)||void 0===o?void 0:o.text)&&void 0!==a?a:"").style("font-size", "12px").on("click", (function(e){
            s.action.remove&&s.action.remove.fn(e)
          })), s.svg.append("defs").append("marker").attr("id", "arrow").attr("markerUnits", "userSpaceOnUse").attr("viewBox", "0 -5 10 10").attr("refX", 10).attr("markerWidth", 8).attr("markerHeight", 8).attr("orient", "auto").attr("stroke-width", 1).attr("fill", r.GZ).append("path").attr("d", "M 0 -5 L 10 0 L 0 5"), s
        }
        return l(t, e), t.prototype.update=function(e, t){
          var n=this;
          0!==e.length&&(this.link=this.link.data(t, (function(e){
            return e.id
          })).join((function(e){
            return e.append("path").attr("id", (function(e){
              return"link-".concat(e.id)
            })).attr("stroke", r.GZ).attr("stroke-dasharray", "3,3").attr("marker-end", (function(e){
              return e.isDirected?"url(#arrow)":null
            }))
          }), (function(e){
            return e
          }), (function(e){
            return e.remove()
          })), this.node=this.node.data(e, (function(e){
            return e.id
          })).join((function(e){
            return e.append("circle").attr("cx", n.center.x).attr("cy", n.center.y).attr("id", (function(e){
              return"node-".concat(e.id)
            })).attr("r", (function(e){
              return e.r-4*e.level
            })).attr("fill", (function(e){
              return r.SS[
                e.level
              ]
            })).on("contextmenu", (function(e){
              if(i.f0J.preventDefault(), !e.current){
                var t=(0, i.Ltv)("body").node(), o=n.menu.node();
                n.menu.select("button").datum(e);
                var r=[
                  i.f0J.pageX, i.f0J.pageY
                ], a=r[
                  0
                ], s=r[
                  1
                ];
                o.style.left="".concat(a, "px"), o.style.top="".concat(s+10, "px"), t.contains(o)||t.append(o);
                var l=n;
                document.addEventListener("click", (function e(){
                  l.menu.node().remove(), document.removeEventListener("click", e)
                }))
              }
            })).call((0, s.rq)(n.simulation, n.status)).on("mouseover", (function(){
              var e=(0, i.Ltv)(i.f0J.target).datum();
              e.current||(n.node.filter((function(t){
                return!t.current&&e.id!==t.id
              })).transition().style("opacity", .1), n.text.filter((function(t){
                return!t.current&&e.id!==t.id
              })).transition().style("opacity", .1), n.link.filter((function(t){
                return![
                  t.source.id, t.target.id
                ].includes(e.id)
              })).transition().style("opacity", .1))
            })).on("mouseout", (function(){
              n.node.transition().style("opacity", null), n.link.transition().style("opacity", null), n.text.transition().style("opacity", null)
            }))
          }), (function(e){
            return e
          }), (function(e){
            return e.remove()
          })), this.text=this.text.data(e, (function(e){
            return e.id
          })).join((function(e){
            return e.append("text").attr("x", (function(e){
              return(0, s._l)(e.x, e.r)
            })).attr("y", (function(e){
              return e.y
            })).attr("dy", "0.3em").attr("dx", "1em").style("user-select", "none").text((function(e){
              return e.name
            }))
          }), (function(e){
            return e
          }), (function(e){
            return e.remove()
          })), this.wrapWord(this.text, 100), this.data(e).forceLink(t, void 0, 130).restart())
        }, t
      }
      (a.D);
      n(208306)
    }, 546780:(e, t, n)=>{
      n.d(t, {
        GG:()=>c, Vq:()=>a, m$:()=>s
      });
      var o=n(738645), r=n(152229), i=function(e, t, n, o){
        var r, i=arguments.length, a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t, n):o;
        if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e, t, n, o);
        else for(var s=e.length-1;
        s>=0;
        s--)(r=e[
          s
        ])&&(a=(i<3?r(a):i>3?r(t, n, a):r(t, n))||a);
        return i>3&&a&&Object.defineProperty(t, n, a), a
      }, a=function(){
        function e(){
          this.knowledgeNodeCount=0, this.subjectLibCount=0, this.activityCount=0, this.moduleCount=0
        }
        return i([
          (0, o.v)({
            name:"knowledge_node_count"
          })
        ], e.prototype, "knowledgeNodeCount", void 0), i([
          (0, o.v)({
            name:"subject_lib_count"
          })
        ], e.prototype, "subjectLibCount", void 0), i([
          (0, o.v)({
            name:"activity_count"
          })
        ], e.prototype, "activityCount", void 0), i([
          (0, o.v)({
            name:"module_count"
          })
        ], e.prototype, "moduleCount", void 0), e
      }
      (), s=(function(){
        function e(){
          this.knowledgeNodeCount=0, this.subjectLibCount=0, this.activityCount=0, this.moduleCount=0
        }
        i([
          (0, o.v)({
            name:"knowledge_node_count"
          })
        ], e.prototype, "knowledgeNodeCount", void 0), i([
          (0, o.v)({
            name:"subject_lib_count"
          })
        ], e.prototype, "subjectLibCount", void 0), i([
          (0, o.v)({
            name:"activity_count"
          })
        ], e.prototype, "activityCount", void 0), i([
          (0, o.v)({
            name:"module_count"
          })
        ], e.prototype, "moduleCount", void 0)
      }
      (), function(){
        function e(){
          this.id=0, this.title="", this.module="", this.percentage=0, this.type="", this.submittedNum=0, this.totalNum=0, this.scoredNum=0, this.notScoredNum=0
        }
        return i([
          (0, o.v)()
        ], e.prototype, "id", void 0), i([
          (0, o.v)()
        ], e.prototype, "title", void 0), i([
          (0, o.v)()
        ], e.prototype, "module", void 0), i([
          (0, o.v)()
        ], e.prototype, "percentage", void 0), i([
          (0, o.v)()
        ], e.prototype, "type", void 0), i([
          (0, o.v)()
        ], e.prototype, "submittedNum", void 0), i([
          (0, o.v)()
        ], e.prototype, "totalNum", void 0), i([
          (0, o.v)()
        ], e.prototype, "scoredNum", void 0), i([
          (0, o.v)()
        ], e.prototype, "notScoredNum", void 0), e
      }
      ()), l=function(){
        function e(){
          this.activityId=0, this.activityType=0, this.completeness=0
        }
        return i([
          (0, o.v)()
        ], e.prototype, "activityId", void 0), i([
          (0, o.v)()
        ], e.prototype, "activityType", void 0), i([
          (0, o.v)()
        ], e.prototype, "completeness", void 0), e
      }
      (), c=function(){
        function e(){
          this.homeworkCount=0, this.examCount=0, this.coursewareCount=0, this.otherCount=0, this.uncompletedDeadlineHomeworkCount=0, this.uncompletedDeadlineExamCount=0, this.uncompletedDeadlineCoursewareCount=0, this.uncompletedDeadlineOtherCount=0, this.completeness=[
          ]
        }
        return i([
          (0, o.v)()
        ], e.prototype, "homeworkCount", void 0), i([
          (0, o.v)()
        ], e.prototype, "examCount", void 0), i([
          (0, o.v)()
        ], e.prototype, "coursewareCount", void 0), i([
          (0, o.v)()
        ], e.prototype, "otherCount", void 0), i([
          (0, o.v)()
        ], e.prototype, "uncompletedDeadlineHomeworkCount", void 0), i([
          (0, o.v)()
        ], e.prototype, "uncompletedDeadlineExamCount", void 0), i([
          (0, o.v)()
        ], e.prototype, "uncompletedDeadlineCoursewareCount", void 0), i([
          (0, o.v)()
        ], e.prototype, "uncompletedDeadlineOtherCount", void 0), i([
          (0, o.v)(), (0, r.Z)((function(){
            return l
          }))
        ], e.prototype, "completeness", void 0), e
      }
      ()
    }, 587881:(e, t, n)=>{
      n.d(t, {
        A:()=>r
      });
      const o={
        inject:[
          "course"
        ]
      };
      const r=(0, n(514486).A)(o, (function(){
        var e=this, t=e.$createElement, n=e._self._c||t;
        return n("div", {
          staticClass:"course-name", class:{
            en:-1!==[
              "en-GB", "en-US"
            ].indexOf(e.$i18n.locale)
          }
        }, [
          n("Tooltip", {
            attrs:{
              content:e.course.name, placement:"top"
            }
          }, [
            e._v("\n    "+e._s(e.course.name)+"\n  ")
          ])
        ], 1)
      }), [
      ], !1, null, "1e5810db", null).exports
    }, 594554:(e, t, n)=>{
      n.d(t, {
        A:()=>D
      });
      n(979073), n(906048), n(269193);
      var o=n(384027), r=n(979278), i=n(552979);
      const a={
        name:"node-content", props:[
          "node"
        ], render(e){
          var t, n, a=this.node, s=this.node.tree.vm, l=null!==(t=this.node.tree.options.validate)&&void 0!==t?t:function(){
            return!0
          }, c=null!==(n=this.node.tree.options.save)&&void 0!==n?n:function(){
            return Promise.resolve(!0)
          }, u=(e, t)=>{
            if(l(e, t))try{
              c(e, t, e.text).then((n=>{
                n&&(s.$emit("node:saved", e), e.stopEditing(t))
              }))
            }
            catch(e){
              console.log(e)
            }
          };
          if(a.isEditing){
            var d=a.text;
            this.$nextTick((e=>{
              this.$refs.editCtrl.focus()
            }));
            return e("span", {
              style:{
                "flex-grow":1, display:"flex", gap:"10px", "align-items":"center"
              }
            }, [
              e("input", {
                domProps:{
                  value:a.text, type:"text"
                }, attrs:{
                  maxlength:"50"
                }, class:"tree-input", on:{
                  input(e){
                    d=e.target.value, !1
                  }, blur(){
                  }, keyup(e){
                    13===e.keyCode&&u(a, d)
                  }, mouseup(e){
                    e.stopPropagation()
                  }
                }, ref:"editCtrl"
              }), e(o.Button, {
                class:"editing-mode-btn", style:{
                  padding:"0 6px", height:"30px", "border-radius":"6px", color:"var(--primary-brand-color)", "font-size":"16px"
                }, on:{
                  click(){
                    u(a, d)
                  }
                }
              }, [
                e(o.Tooltip, {
                  props:{
                    placement:"top", content:i.default.t("confirm"), transfer:!0
                  }
                }, [
                  e(r.A, {
                    props:{
                      name:"save"
                    }
                  })
                ])
              ]), this.node.tree.options.showCancelButton&&e(o.Button, {
                class:"editing-mode-btn", style:{
                  padding:"0 8px", height:"30px", "border-radius":"6px", color:"var(--primary-brand-color)", "font-size":"12px"
                }, on:{
                  click(){
                    Number.isNaN(Number(a.id))?a.tree.remove(a):a.stopEditing(a.text)
                  }
                }
              }, [
                e(o.Tooltip, {
                  props:{
                    placement:"top", content:i.default.t("cancel"), transfer:!0
                  }
                }, [
                  e(r.A, {
                    props:{
                      name:"close"
                    }
                  })
                ])
              ])
            ])
          }
          return s.$scopedSlots.default?s.$scopedSlots.default({
            node:this.node
          }):e("span", {
            domProps:{
              innerHTML:a.text
            }
          })
        }
      };
      var s=n(514486);
      const l=(0, s.A)(a, undefined, undefined, !1, null, "d67997ba", null).exports;
      const c={
        name:"extra-content", props:[
          "node"
        ], render(e){
          var t=this.node.tree.vm;
          return t.$scopedSlots.extra?t.$scopedSlots.extra({
            node:this.node
          }):e("")
        }
      };
      const u=(0, s.A)(c, undefined, undefined, !1, null, null, null).exports;
      const d={
        name:"right-content", props:[
          "node"
        ], render(e){
          var t=this.node.tree.vm;
          return t.$scopedSlots.right?t.$scopedSlots.right({
            node:this.node
          }):e("")
        }
      };
      const p=(0, s.A)(d, undefined, undefined, !1, null, null, null).exports, v={
        props:[
          "node", "visibleChildren", "options"
        ], components:{
          Icon:o.Icon
        }, render(e){
          var t=this.node.tree.vm;
          return t.$scopedSlots.expand?t.$scopedSlots.expand({
            node:this.node
          }):this.visibleChildren.length>0?e("span", {
            class:[
              "arrow"===this.options.expandIcon?"tree-arrow":"tree-expand", {
                expanded:this.node.states.expanded, "has-child":(this.node.children.length||this.node.isBatch)&&this.visibleChildren.length>0
              }, this.options.direction
            ]
          }, [
            "arrow"===this.options.expandIcon?e(o.Icon, {
              attrs:{
                type:"md-arrow-dropright", size:18, color:"#70748C"
              }
            }):e("i")
          ]):e("span", {
            class:"arrow"===this.options.expandIcon?"tree-arrow":"tree-expand"
          })
        }
      };
      const f={
        name:"Node", inject:[
          "tree"
        ], props:[
          "node", "options"
        ], components:{
          NodeContent:l, ExtraContent:u, RightContent:p, ExpandNode:(0, s.A)(v, undefined, undefined, !1, null, null, null).exports
        }, watch:{
          node(){
            this.node.vm=this, this.node.tree.vm.$scopedSlots.extra&&this.node.tree.vm.$scopedSlots.extra({
              node:this.node
            })
          }
        }, data(){
          return this.node.vm=this, {
            loading:!1
          }
        }, computed:{
          padding(){
            return"".concat(this.node.depth*(this.options.paddingLeft?this.options.paddingLeft:this.options.nodeIndent), "px")
          }, nodeClass(){
            var e=this.node.states, t=this.hasChildren(), n={
              "has-child":t, expanded:t&&e.expanded, selected:e.selected&&this.options.selectable, disabled:e.disabled, matched:e.matched, dragging:e.dragging, loading:this.loading, draggable:e.draggable, immutable:e.immutable
            };
            return this.options.checkbox&&(n.checked=e.checked, n.indeterminate=e.indeterminate), n
          }, visibleChildren(){
            return this.node.children.filter((function(e){
              return e&&e.visible()
            }))
          }
        }, methods:{
          onNodeFocus(){
            this.tree.activeElement=this.node
          }, focus(){
            this.$refs.anchor.focus(), this.node.select()
          }, check(){
            this.node.checked()?this.node.uncheck():this.node.check()
          }, select(){
            var e=(arguments.length>0&&void 0!==arguments[
              0
            ]
            ?arguments[
              0
            ]
            :{
            }).ctrlKey, t=this.options, n=this.tree, o=this.node;
            if(n.$emit("node:clicked", o), t.checkbox&&t.checkOnSelect)return!t.parentSelect&&this.hasChildren()?this.toggleExpand():this.check(e);
            t.multiple?o.selected()?e?o.unselect():1!==this.tree.selectedNodes.length&&(n.unselectAll(), o.select()):o.select(e):o.selected()&&e?o.unselect():o.select()
          }, toggleExpand(){
            this.hasChildren()&&this.node.toggleExpand()
          }, hasChildren(){
            return this.node.hasChildren()
          }, startEditing(){
            this.tree._editingNode&&this.tree._editingNode.stopEditing(), this.node.startEditing()
          }, stopEditing(){
            this.node.stopEditing()
          }, handleMouseDown(e){
            this.options.dnd&&this.tree.vm.startDragging(this.node, e)
          }, handleMouseover(e){
            this.tree.vm.draggableNode&&e.currentTarget.classList.add("dragging"), e.currentTarget.classList.add("is-hover")
          }, handleMouseout(e){
            e.currentTarget.classList.remove("dragging"), e.currentTarget.classList.remove("is-hover")
          }, handleDblclick(){
            this.node.isEditing||this.node.tree._editingNode||this.options.editing&&this.node.editable()&&this.startEditing()
          }
        }
      };
      const h=(0, s.A)(f, (function(){
        var e=this, t=e.$createElement, n=e._self._c||t;
        return n("li", {
          staticClass:"tree-node", class:e.nodeClass, attrs:{
            role:"treeitem", "data-id":e.node.id
          }, on:{
            mouseover:function(t){
              return t.stopPropagation(), e.handleMouseover(t)
            }, mouseout:function(t){
              return t.stopPropagation(), e.handleMouseout(t)
            }
          }
        }, [
          n("div", {
            staticClass:"tree-content-wrapper", style:[
              "ltr"==e.options.direction?{
                "margin-left":e.padding
              }
              :{
                "margin-right":e.padding
              }
            ], on:{
              click:e.select
            }
          }, [
            n("div", {
              staticClass:"tree-content"
            }, [
              n("expand-node", {
                attrs:{
                  options:e.options, node:e.node, "visible-children":e.visibleChildren
                }, nativeOn:{
                  click:function(t){
                    return e.toggleExpand(t)
                  }
                }
              }), e._v(" "), e.options.checkbox?n("i", {
                staticClass:"tree-checkbox", class:{
                  checked:e.node.states.checked, indeterminate:e.node.states.indeterminate
                }, on:{
                  click:function(t){
                    return t.stopPropagation(), e.check(t)
                  }
                }
              }):e._e(), e._v(" "), n("span", {
                ref:"anchor", staticClass:"tree-anchor", class:{
                  "no-child":!((e.node.children.length||e.node.isBatch)&&e.visibleChildren.length>0)
                }, attrs:{
                  tabindex:"-1"
                }, on:{
                  focus:e.onNodeFocus, dblclick:e.handleDblclick
                }
              }, [
                n("node-content", {
                  attrs:{
                    node:e.node
                  }
                })
              ], 1)
            ], 1), e._v(" "), n("extra-content", {
              staticClass:"tree-extra", attrs:{
                node:e.node
              }, nativeOn:{
                click:function(t){
                  return e.select(t)
                }
              }
            }), e._v(" "), n("right-content", {
              staticClass:"tree-right", attrs:{
                node:e.node
              }
            })
          ], 1), e._v(" "), n("transition", {
            attrs:{
              name:"l-fade"
            }
          }, [
            e.hasChildren()&&e.node.states.expanded?n("ul", {
              staticClass:"tree-children", style:{
                "--padding-left":e.padding
              }
            }, e._l(e.visibleChildren, (function(t){
              return n("node", {
                key:t.id, attrs:{
                  node:t, options:e.options
                }
              })
            })), 1):e._e()
          ])
        ], 1)
      }), [
      ], !1, null, null, null).exports;
      const m={
        name:"DragNode", props:[
          "target"
        ], computed:{
          content(){
            var e, t=this.target.ele.cloneNode(!0);
            return null===(e=t.querySelector("ul"))||void 0===e||e.remove(), t.innerHTML
          }, style(){
            if(void 0===this.target.top)return"display: none";
            var e=this.target.ele.querySelector(".tree-content-wrapper").clientHeight, t=this.target.ele.clientWidth, n=this.getElementLeft(this.target.ele);
            return{
              top:"".concat(this.target.top-e/2, "px"), left:"".concat(n, "px"), height:"".concat(e, "px"), width:"".concat(t, "px"), background:"#eee", opacity:"0.8"
            }
          }
        }, methods:{
          getElementLeft(e){
            for(var t=e.offsetLeft, n=e.offsetParent;
            null!==n;
            )t+=n.offsetLeft, n=n.offsetParent;
            return t
          }
        }
      };
      const y=(0, s.A)(m, (function(){
        var e=this, t=e.$createElement;
        return(e._self._c||t)("div", {
          staticClass:"tree-dragnode", style:e.style, domProps:{
            innerHTML:e._s(e.content)
          }
        })
      }), [
      ], !1, null, null, null).exports;
      var g=n(322541), w=n(52823);
      function b(e, t){
        var n=Object.keys(e);
        if(Object.getOwnPropertySymbols){
          var o=Object.getOwnPropertySymbols(e);
          t&&(o=o.filter((function(t){
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, o)
        }
        return n
      }
      function _(e){
        for(var t=1;
        t<arguments.length;
        t++){
          var n=null!=arguments[
            t
          ]
          ?arguments[
            t
          ]
          :{
          };
          t%2?b(Object(n), !0).forEach((function(t){
            C(e, t, n[
              t
            ])
          })):Object.getOwnPropertyDescriptors?Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }
      function C(e, t, n){
        return t in e?Object.defineProperty(e, t, {
          value:n, enumerable:!0, configurable:!0, writable:!0
        }):e[
          t
        ]
        =n, e
      }
      var k={
        direction:"ltr", multiple:!0, checkbox:!1, checkOnSelect:!1, autoCheckChildren:!0, autoDisableChildren:!0, checkDisabledChildren:!0, parentSelect:!1, keyboardNavigation:!0, nodeIndent:24, minFetchDelay:0, fetchData:null, propertyNames:null, deletion:!1, dnd:!1, editing:!1, selectable:!0, onFetchError(e){
          throw e
        }
      }, x={
        emptyText:"Nothing found!", textMatcher(e, t){
          var n=new RegExp(e, "i").test(t.text);
          return!(n&&t.parent&&new RegExp(e, "i").test(t.parent.text))&&n
        }, plainList:!1, showChildren:!0
      };
      const S={
        name:"Tree", components:{
          TreeNode:h, DraggableNode:y
        }, mixins:[
          g.A, w.A
        ], provide:e=>({
          tree:null
        }), props:{
          data:{
          }, options:{
            type:Object, default:e=>({
            })
          }, filter:String, dimensions:{
            type:Array, default:()=>[
            ]
          }, tag:{
            type:String, default:"div"
          }
        }, data(){
          var e=_(_({
          }, k), this.options);
          return e.filter=_(_({
          }, x), e.filter), {
            model:[
            ], tree:null, loading:!1, opts:e, matches:[
            ], draggableNode:null, draggableEle:null
          }
        }, computed:{
          visibleModel(){
            return this.model.filter((function(e){
              return e&&e.visible()
            }))
          }, visibleMatches(){
            return this.matches.filter((function(e){
              return e&&e.visible()
            }))
          }, listenChange(){
            return{
              filter:this.filter, dimensions:this.dimensions
            }
          }
        }, watch:{
          listenChange(e){
            this.tree.filter(e)
          }
        }
      };
      const D=(0, s.A)(S, (function(){
        var e=this, t=e.$createElement, n=e._self._c||t;
        return n(e.tag, {
          tag:"component", class:{
            tree:!0, "tree-loading":this.loading, "tree--draggable":!!this.draggableNode
          }, attrs:{
            role:"tree"
          }
        }, [
          e.filter&&0==e.matches.length?[
            n("div", {
              staticClass:"tree-filter-empty", domProps:{
                innerHTML:e._s(e.opts.filter.emptyText)
              }
            })
          ]
          :[
            n("ul", {
              staticClass:"tree-root", on:{
                dragstart:e.onDragStart
              }
            }, [
              e.opts.filter.plainList&&e.matches.length>0?e._l(e.visibleMatches, (function(t){
                return n("TreeNode", {
                  key:t.id, attrs:{
                    node:t, options:e.opts
                  }
                })
              })):e._l(e.visibleModel, (function(t){
                return n("TreeNode", {
                  key:t.id, attrs:{
                    node:t, options:e.opts
                  }
                })
              }))
            ], 2)
          ], e._v(" "), e.draggableNode?n("DraggableNode", {
            attrs:{
              target:e.draggableNode
            }
          }):e._e()
        ], 2)
      }), [
      ], !1, null, null, null).exports
    }, 611854:(e, t, n)=>{
      n.d(t, {
        X:()=>o, Y:()=>r
      });
      var o=function(){
        var e=this, t=e.$createElement;
        return(e._self._c||t)("DatePicker", {
          ref:"datePicker", class:e.displayMode, attrs:{
            editable:!1, disabled:e.disabled, format:e.format, type:e.type, placement:e.placement, placeholder:e.placeholder, options:e.getOptions(), returnformat:e.returnformat, transfer:e.transfer, clearable:e.clearable, "split-panels":e.splitPanels, size:e.size, "transfer-class-name":e.transferClassName
          }, on:{
            "on-change":e.change
          }, model:{
            value:e.dateValue, callback:function(t){
              e.dateValue=t
            }, expression:"dateValue"
          }
        })
      }, r=[
      ]
    }, 670042:(e, t, n)=>{
      n.d(t, {
        A:()=>i
      });
      var o=n(385634), r=n(27970);
      const i=(0, n(514486).A)(r.A, o.X, o.Y, !1, null, "59a1458f", null).exports
    }, 678237:(e, t, n)=>{
      n.d(t, {
        nx:()=>o, qY:()=>r.q, fP:()=>i
      });
      n(868329), n(640173);
      var o=function(e){
        var t=e.replace("#", "");
        return'<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">\n    <mask id="mask0_'.concat(t, '" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="56" height="56">\n        <circle cx="28" cy="28" r="28" fill="white" />\n    </mask>\n    <g mask="url(#mask0_').concat(t, ')">\n        <circle cx="28" cy="28" r="28" fill="white" />\n        <circle cx="28" cy="28" r="28" fill="url(#paint0_radial_').concat(t, ')" />\n        <g filter="url(#filter0_f_').concat(t, ')">\n            <circle cx="28.0002" cy="27.3" r="23.8" stroke="url(#paint1_linear_').concat(t, ')" stroke-width="1.24675" />\n        </g>\n        <g filter="url(#filter1_f_').concat(t, ')">\n            <ellipse cx="42.7309" cy="46.5098" rx="2.10028" ry="5.27789" transform="rotate(46.4204 42.7309 46.5098)"\n                fill="white" />\n        </g>\n        <g filter="url(#filter2_f_').concat(t, ')">\n            <ellipse cx="13.1097" cy="10.89" rx="2.69508" ry="5.27789" transform="rotate(46.4204 13.1097 10.89)"\n                fill="white" />\n        </g>\n    </g>\n    <defs>\n        <filter id="filter0_f_').concat(t, '" x="-0.163111" y="-0.863642" width="56.3272" height="56.3273"\n            filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n            <feFlood flood-opacity="0" result="BackgroundImageFix" />\n            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />\n            <feGaussianBlur stdDeviation="1.87013" result="effect1_foregroundBlur_').concat(t, '" />\n        </filter>\n        <filter id="filter1_f_').concat(t, '" x="35.5343" y="39.4578" width="14.3933" height="14.104"\n            filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n            <feFlood flood-opacity="0" result="BackgroundImageFix" />\n            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />\n            <feGaussianBlur stdDeviation="1.55365" result="effect1_foregroundBlur_').concat(t, '" />\n        </filter>\n        <filter id="filter2_f_').concat(t, '" x="5.75013" y="3.65276" width="14.7185" height="14.4744"\n            filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n            <feFlood flood-opacity="0" result="BackgroundImageFix" />\n            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />\n            <feGaussianBlur stdDeviation="1.55365" result="effect1_foregroundBlur_').concat(t, '" />\n        </filter>\n        <radialGradient id="paint0_radial_').concat(t, '" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"\n            gradientTransform="translate(28 28) rotate(90) scale(28)">\n            <stop stop-color="').concat(e, '" stop-opacity="0.1" />\n            <stop offset="0.455274" stop-color="').concat(e, '" stop-opacity="0.409933" />\n            <stop offset="0.856233" stop-color="').concat(e, '" stop-opacity="0.737994" />\n            <stop offset="1" stop-color="').concat(e, '" />\n        </radialGradient>\n        <linearGradient id="paint1_linear_').concat(t, '" x1="14.2442" y1="4.81009" x2="43.2846" y2="47.8248"\n            gradientUnits="userSpaceOnUse">\n            <stop stop-color="white" stop-opacity="0.8" />\n            <stop offset="0.5" stop-color="white" stop-opacity="0" />\n            <stop offset="1" stop-color="white" />\n        </linearGradient>\n    </defs>\n</svg>')
      }, r=n(833444), i=function(e){
        return"data:image/svg+xml,".concat(encodeURIComponent(e.trim()))
      }
    }, 679578:(e, t, n)=>{
      n.d(t, {
        A:()=>i
      });
      n(219693), n(418665), n(107918), n(14602);
      var o=new Map([
        [
          "info", "ivu-icon-ios-information-circle"
        ], [
          "warning", "ivu-icon-ios-alert"
        ], [
          "success", "ivu-icon-ios-checkmark-circle"
        ], [
          "error", "ivu-icon-ios-close-circle"
        ]
      ]);
      const r={
        props:{
          value:Boolean, type:{
            type:String, default:"info", validator:e=>-1!==[
              "info", "warning", "success", "error"
            ].indexOf(e)
          }, title:{
            type:String
          }, content:{
            type:String
          }, divider:{
            type:Boolean, default:!1
          }, width:{
            type:Number, default:480
          }, verticalCenter:{
            type:Boolean, default:!1
          }, showCancel:{
            type:Boolean, default:!0
          }, confirmText:{
            type:String, default:""
          }, cancelText:{
            type:String, default:""
          }, lockScroll:{
            type:Boolean, default:!0
          }, hideIcon:{
            type:Boolean, default:!1
          }, className:{
            type:String, default:""
          }
        }, data(){
          return{
            icon:"ivu-icon-ios-information-circle", visible:this.value
          }
        }, watch:{
          value(e){
            this.visible=e
          }, visible(e){
            this.$emit("on-visible-change", e)
          }, type(e){
            this.icon=o.get(e)
          }
        }, computed:{
          modalClass(){
            return this.verticalCenter?"vertical-center-modal ".concat(this.className):this.className
          }
        }, methods:{
          ok(){
            this.$emit("on-ok")
          }, cancel(){
            this.$emit("on-cancel")
          }, hidden(){
            this.$emit("on-hidden")
          }, visibleChange(e){
            this.value=e
          }
        }
      };
      const i=(0, n(514486).A)(r, (function(){
        var e=this, t=e.$createElement, n=e._self._c||t;
        return n("Modal", {
          staticClass:"wg-confirm", class:{
            "no-border":!e.divider
          }, attrs:{
            value:e.value, "class-name":e.modalClass, width:e.width, "lock-scroll":e.lockScroll
          }, on:{
            "on-hidden":e.hidden, "on-visible-change":e.visibleChange
          }, scopedSlots:e._u([
            {
              key:"header", fn:function(){
                return[
                  e._t("header", [
                    e.hideIcon?e._e():n("div", {
                      staticClass:"ivu-modal-confirm-head-icon", class:"ivu-modal-confirm-head-icon-"+e.type
                    }, [
                      n("i", {
                        staticClass:"ivu-icon", class:e.icon
                      })
                    ]), e._v(" "), n("span", {
                      staticClass:"title"
                    }, [
                      e._v("\n        "+e._s(e.title)+"\n      ")
                    ])
                  ])
                ]
              }, proxy:!0
            }, {
              key:"footer", fn:function(){
                return[
                  e._t("footer", [
                    n("Button", {
                      attrs:{
                        type:"primary"
                      }, on:{
                        click:e.ok
                      }
                    }, [
                      e._v(e._s(e.confirmText||e.$t("confirm")))
                    ]), e._v(" "), e.showCancel?n("Button", {
                      on:{
                        click:e.cancel
                      }
                    }, [
                      e._v(e._s(e.cancelText||e.$t("cancel")))
                    ]):e._e()
                  ])
                ]
              }, proxy:!0
            }
          ], null, !0)
        }, [
          e._t("default", [
            e._v("\n    "+e._s(e.content)+"\n  ")
          ])
        ], 2)
      }), [
      ], !1, null, "5daf803e", null).exports
    }, 685761:(e, t, n)=>{
      n.d(t, {
        A:()=>I
      });
      n(540590), n(418665), n(269193), n(14602);
      var o=n(595738), r=n(297786), i=n(731904), a=n(794128), s=n(979278), l=n(587881), c=n(551137), u=n(877401), d=n(48292), p=n(350757), v=n(32876), f=(n(169218), n(552979)), h=n(405852), m=n(574799), y=function(){
        return(y=Object.assign||function(e){
          for(var t, n=1, o=arguments.length;
          n<o;
          n++)for(var r in t=arguments[
            n
          ])Object.prototype.hasOwnProperty.call(t, r)&&(e[
            r
          ]
          =t[
            r
          ]);
          return e
        }).apply(this, arguments)
      }, g=function(e, t, n, o){
        return new(n||(n=Promise))((function(r, i){
          function a(e){
            try{
              l(o.next(e))
            }
            catch(e){
              i(e)
            }
          }
          function s(e){
            try{
              l(o.throw(e))
            }
            catch(e){
              i(e)
            }
          }
          function l(e){
            var t;
            e.done?r(e.value):(t=e.value, t instanceof n?t:new n((function(e){
              e(t)
            }))).then(a, s)
          }
          l((o=o.apply(e, t||[
          ])).next())
        }))
      }, w=function(e, t){
        var n, o, r, i, a={
          label:0, sent:function(){
            if(1&r[
              0
            ])throw r[
              1
            ];
            return r[
              1
            ]
          }, trys:[
          ], ops:[
          ]
        };
        return i={
          next:s(0), throw:s(1), return:s(2)
        }, "function"==typeof Symbol&&(i[
          Symbol.iterator
        ]
        =function(){
          return this
        }), i;
        function s(s){
          return function(l){
            return function(s){
              if(n)throw new TypeError("Generator is already executing.");
              for(;
              i&&(i=0, s[
                0
              ]
              &&(a=0)), a;
              )try{
                if(n=1, o&&(r=2&s[
                  0
                ]
                ?o.return:s[
                  0
                ]
                ?o.throw||((r=o.return)&&r.call(o), 0):o.next)&&!(r=r.call(o, s[
                  1
                ])).done)return r;
                switch(o=0, r&&(s=[
                  2&s[
                    0
                  ], r.value
                ]), s[
                  0
                ]){
                  case 0:case 1:r=s;
                  break;
                  case 4:return a.label++, {
                    value:s[
                      1
                    ], done:!1
                  };
                  case 5:a.label++, o=s[
                    1
                  ], s=[
                    0
                  ];
                  continue;
                  case 7:s=a.ops.pop(), a.trys.pop();
                  continue;
                  default:if(!(r=a.trys, (r=r.length>0&&r[
                    r.length-1
                  ])||6!==s[
                    0
                  ]
                  &&2!==s[
                    0
                  ])){
                    a=0;
                    continue
                  }
                  if(3===s[
                    0
                  ]
                  &&(!r||s[
                    1
                  ]
                  >r[
                    0
                  ]
                  &&s[
                    1
                  ]
                  <r[
                    3
                  ])){
                    a.label=s[
                      1
                    ];
                    break
                  }
                  if(6===s[
                    0
                  ]
                  &&a.label<r[
                    1
                  ]){
                    a.label=r[
                      1
                    ], r=s;
                    break
                  }
                  if(r&&a.label<r[
                    2
                  ]){
                    a.label=r[
                      2
                    ], a.ops.push(s);
                    break
                  }
                  r[
                    2
                  ]
                  &&a.ops.pop(), a.trys.pop();
                  continue
                }
                s=t.call(e, a)
              }
              catch(e){
                s=[
                  6, e
                ], o=0
              }
              finally{
                n=r=0
              }
              if(5&s[
                0
              ])throw s[
                1
              ];
              return{
                value:s[
                  0
                ]
                ?s[
                  1
                ]
                :void 0, done:!0
              }
            }
            ([
              s, l
            ])
          }
        }
      };
      const b=(0, o.pM)({
        components:{
          CourseName:l.A, Graph:c.A, Legend:p.A, Toolbar:v.A
        }, props:{
          viewMode:{
            type:String, required:!0
          }, statsId:{
            type:Number, required:!0
          }, setting:{
            type:Object, required:!0
          }
        }, setup:function(e, t){
          var n, i=this, a=(0, o.KR)([
          ]), s=(0, o.KR)([
          ]), l=(0, o.KR)(((n={
          })[
            d.nE.COMPLETENESS
          ]
          ={
          }, n[
            d.nE.MASTERY
          ]
          ={
          }, n)), c=(0, o.WQ)("course", {
            id:0
          });
          g(i, void 0, void 0, (function(){
            var t;
            return w(this, (function(n){
              switch(n.label){
                case 0:return[
                  4, (0, u.Q$)(c.id, e.statsId)
                ];
                case 1:return t=n.sent(), a.value=t.tree, s.value=t.relations, l.value.completeness=t.completeness, l.value.mastery=t.mastery, [
                  2
                ]
              }
            }))
          }));
          var p=(0, o.EW)((function(){
            return l.value[
              e.viewMode
            ]
          })), v=function(t, n){
            var o, r=0;
            return r=null===(o=-1===n?l.value[
              e.viewMode
            ]
            [
              0
            ]
            :l.value[
              e.viewMode
            ]
            [
              t.id
            ])||m.dn.value?3:o>=80?0:o>=60?1:2, d.D4[
              e.viewMode
            ].nodes[
              r
            ]
          }, b=function(t){
            var n, o=(n={
            }, n[
              d.nE.COMPLETENESS
            ]
            =m.yb?f.default.t("knowledgeGraph.statistics.averageCompleteness"):f.default.t("knowledgeGraph.statistics.completeness"), n[
              d.nE.MASTERY
            ]
            =m.yb?f.default.t("knowledgeGraph.statistics.averageMastery"):f.default.t("knowledgeGraph.statistics.mastery"), n)[
              e.viewMode
            ];
            return"<div class='tooltip-title'>".concat(t.name, "</div><div> <span class='cycle' style='background: ").concat(t.color, "'></span> ").concat(o, " ").concat(m.dn.value?"--":(0, h.l9)(p.value[
              t.id
            ]), " </div>")
          }, _=(0, r.maw)("graph", null), C=(0, o.nI)();
          return(0, o.nT)((function(){
            var e, t, n, o;
            C.proxy.resetZoom=null===(e=_.value)||void 0===e?void 0:e.resetZoom, C.proxy.resetActive=null===(t=_.value)||void 0===t?void 0:t.resetActive, C.proxy.zoomIn=null===(n=_.value)||void 0===n?void 0:n.zoomIn, C.proxy.zoomOut=null===(o=_.value)||void 0===o?void 0:o.zoomOut
          })), function(){
            return(0, o.h)("Graph", {
              key:e.viewMode, ref:"graph", attrs:y({
              }, t.attrs), props:y(y({
              }, e), {
                nodes:a.value, links:s.value, nodeColor:v, tooltipHtml:b
              }), on:{
                "on-click-node":function(e){
                  t.emit("on-click-node", e)
                }, "on-click-outside":function(){
                  t.emit("on-click-outside")
                }
              }
            })
          }
        }
      });
      var _=n(514486);
      const C=(0, _.A)(b, undefined, undefined, !1, null, "5992ba57", null).exports;
      var k=n(379960), x=n(27550), S=n(990311), D=function(e, t, n, o){
        return new(n||(n=Promise))((function(r, i){
          function a(e){
            try{
              l(o.next(e))
            }
            catch(e){
              i(e)
            }
          }
          function s(e){
            try{
              l(o.throw(e))
            }
            catch(e){
              i(e)
            }
          }
          function l(e){
            var t;
            e.done?r(e.value):(t=e.value, t instanceof n?t:new n((function(e){
              e(t)
            }))).then(a, s)
          }
          l((o=o.apply(e, t||[
          ])).next())
        }))
      }, T=function(e, t){
        var n, o, r, i, a={
          label:0, sent:function(){
            if(1&r[
              0
            ])throw r[
              1
            ];
            return r[
              1
            ]
          }, trys:[
          ], ops:[
          ]
        };
        return i={
          next:s(0), throw:s(1), return:s(2)
        }, "function"==typeof Symbol&&(i[
          Symbol.iterator
        ]
        =function(){
          return this
        }), i;
        function s(s){
          return function(l){
            return function(s){
              if(n)throw new TypeError("Generator is already executing.");
              for(;
              i&&(i=0, s[
                0
              ]
              &&(a=0)), a;
              )try{
                if(n=1, o&&(r=2&s[
                  0
                ]
                ?o.return:s[
                  0
                ]
                ?o.throw||((r=o.return)&&r.call(o), 0):o.next)&&!(r=r.call(o, s[
                  1
                ])).done)return r;
                switch(o=0, r&&(s=[
                  2&s[
                    0
                  ], r.value
                ]), s[
                  0
                ]){
                  case 0:case 1:r=s;
                  break;
                  case 4:return a.label++, {
                    value:s[
                      1
                    ], done:!1
                  };
                  case 5:a.label++, o=s[
                    1
                  ], s=[
                    0
                  ];
                  continue;
                  case 7:s=a.ops.pop(), a.trys.pop();
                  continue;
                  default:if(!(r=a.trys, (r=r.length>0&&r[
                    r.length-1
                  ])||6!==s[
                    0
                  ]
                  &&2!==s[
                    0
                  ])){
                    a=0;
                    continue
                  }
                  if(3===s[
                    0
                  ]
                  &&(!r||s[
                    1
                  ]
                  >r[
                    0
                  ]
                  &&s[
                    1
                  ]
                  <r[
                    3
                  ])){
                    a.label=s[
                      1
                    ];
                    break
                  }
                  if(6===s[
                    0
                  ]
                  &&a.label<r[
                    1
                  ]){
                    a.label=r[
                      1
                    ], r=s;
                    break
                  }
                  if(r&&a.label<r[
                    2
                  ]){
                    a.label=r[
                      2
                    ], a.ops.push(s);
                    break
                  }
                  r[
                    2
                  ]
                  &&a.ops.pop(), a.trys.pop();
                  continue
                }
                s=t.call(e, a)
              }
              catch(e){
                s=[
                  6, e
                ], o=0
              }
              finally{
                n=r=0
              }
              if(5&s[
                0
              ])throw s[
                1
              ];
              return{
                value:s[
                  0
                ]
                ?s[
                  1
                ]
                :void 0, done:!0
              }
            }
            ([
              s, l
            ])
          }
        }
      };
      const R=(0, o.pM)({
        components:{
          CourseName:l.A, Graph:c.A, Legend:p.A, Toolbar:v.A, GraphContainer:C, NoData:k.A, SvgIcon:s.A, Drawer:x.A, NodeDetailContent:S.A
        }, props:{
          value:Boolean
        }, setup:function(e, t){
          var n=this, s=t.emit, l=(0, r.hRP)(e, "value", s, {
            eventName:"input"
          }), c=(0, o.WQ)("course", {
            id:0
          }), p=(0, o.KR)(0), v=(0, o.KR)(), f=(0, o.KR)(!1), y=(0, o.KR)(), g=(0, o.KR)(d.nE.COMPLETENESS), w=function(){
            return i._.find(v.value, (function(e){
              return e.statsId===p.value
            }))
          }, b=(0, o.KR)({
            course:!1, levelRelation:!0, directedRelation:!0, undirectedRelation:!0
          }), _=(0, o.KR)(), C=(0, r.vl3)((function(){
            return(0, u.mW)(c.id)
          }), [
          ], {
            immediate:!1
          }), k=(0, o.wB)(l, (function(){
            C.execute(), k()
          })), x=(0, a.$U)(), S=x.tooltipCompletionRate, R=x.tooltipMasteryRate, I=(0, o.EW)((function(){
            return"".concat(S, ";\n").concat(R)
          }));
          return(0, o.wB)((function(){
            return C.state.value.length
          }), (function(){
            setTimeout((function(){
              p.value=C.state.value[
                0
              ].id
            }), 1e3)
          })), {
            currentStatsId:p, show:l, graphSetting:b, viewMode:g, learningPathGraphViewMode:d.C1, graphRef:v, graphWrapperRef:_, settingChange:function(e){
              b.value=e
            }, restPosition:function(){
              var e=w();
              null==e||e.resetZoom(), null==e||e.resetActive()
            }, fullscreen:function(){
              var e;
              document.fullscreenElement?document.exitFullscreen():null===(e=_.value)||void 0===e||e.requestFullscreen()
            }, zoomIn:function(){
              var e=w();
              null==e||e.zoomIn()
            }, zoomOut:function(){
              var e=w();
              null==e||e.zoomOut()
            }, statsList:C, ViewMode:d.nE, viewModeDescription:I, formatPercent:h.l9, isSimulatingAsStudent:m.dn, goBack:function(){
              l.value=!1
            }, showDrawer:f, handleClickNode:function(e){
              return D(n, void 0, void 0, (function(){
                var t;
                return T(this, (function(n){
                  switch(n.label){
                    case 0:return e?[
                      4, (0, u.hy)(e)
                    ]
                    :[
                      3, 2
                    ];
                    case 1:t=n.sent(), y.value=t, f.value=!0, n.label=2;
                    case 2:return[
                      2
                    ]
                  }
                }))
              }))
            }, handleClickOutside:function(){
              f.value=!1
            }, currentNode:y
          }
        }
      });
      const I=(0, _.A)(R, (function(){
        var e=this, t=e.$createElement, n=e._self._c||t;
        return n("Modal", {
          staticClass:"modal", attrs:{
            "footer-hide":"", fullscreen:"", closable:!1, transfer:!1, "z-index":102
          }, scopedSlots:e._u([
            {
              key:"header", fn:function(){
                return[
                  n("div", {
                    staticClass:"path-header"
                  }, [
                    n("div", {
                      staticClass:"path-header-title"
                    }, [
                      n("i", {
                        staticClass:"font font-arrow-left-bold", on:{
                          click:e.goBack
                        }
                      }), e._v("\n        "+e._s(e.$t("knowledgeGraph.learningPath"))+"\n      ")
                    ]), e._v(" "), n("div", {
                      staticClass:"view-mode-selector"
                    }, [
                      n("RadioGroup", {
                        attrs:{
                          type:"button", "button-style":"solid"
                        }, model:{
                          value:e.viewMode, callback:function(t){
                            e.viewMode=t
                          }, expression:"viewMode"
                        }
                      }, e._l(e.learningPathGraphViewMode, (function(t){
                        return n("Radio", {
                          key:t.key, attrs:{
                            label:t.key
                          }
                        }, [
                          e._v(e._s(t.value))
                        ])
                      })), 1), e._v(" "), n("Poptip", {
                        attrs:{
                          placement:"bottom-end", width:"280", transfer:"", offset:"16", trigger:"hover", "transfer-class-name":"learning-path-tooltip"
                        }, scopedSlots:e._u([
                          {
                            key:"title", fn:function(){
                              return[
                                n("span", [
                                  e._v(e._s(e.$t("knowledgeGraph.statistics.functionDescription")))
                                ])
                              ]
                            }, proxy:!0
                          }
                        ])
                      }, [
                        n("SvgIcon", {
                          staticClass:"help-icon", attrs:{
                            name:"header-help"
                          }
                        }), e._v(" "), e._v(" "), n("template", {
                          slot:"content"
                        }, [
                          n("div", {
                            staticClass:"tooltip-content"
                          }, [
                            n("div", {
                              staticClass:"item"
                            }, [
                              n("span", {
                                staticClass:"content"
                              }, [
                                e._v(e._s(e.viewModeDescription))
                              ])
                            ])
                          ])
                        ])
                      ], 2)
                    ], 1)
                  ])
                ]
              }, proxy:!0
            }
          ]), model:{
            value:e.show, callback:function(t){
              e.show=t
            }, expression:"show"
          }
        }, [
          e._v(" "), n("div", {
            staticClass:"container"
          }, [
            n("div", {
              staticClass:"timeline"
            }, [
              n("Timeline", e._l(e.statsList.state.value, (function(t){
                return n("TimelineItem", {
                  key:t.id, staticClass:"line-item", class:{
                    active:e.currentStatsId===t.id
                  }
                }, [
                  n("div", {
                    staticClass:"item", on:{
                      click:function(n){
                        e.currentStatsId=t.id
                      }
                    }
                  }, [
                    n("div", {
                      staticClass:"title"
                    }, [
                      e._v("\n              "+e._s(e.$t("knowledgeGraph.weekIndex", [
                        t.week
                      ]))+"("+e._s(e.$t("knowledgeGraph.endAt", [
                        t.statDateStr
                      ]))+")\n            ")
                    ]), e._v(" "), e.viewMode===e.ViewMode.MASTERY?n("div", {
                      staticClass:"desc"
                    }, [
                      e._v("\n              "+e._s(e.$t("knowledgeGraph.statistics.averageMasteryRate"))+":\n              "+e._s(e.isSimulatingAsStudent?"--":e.formatPercent(t.masteryRate))+"\n            ")
                    ]):e._e(), e._v(" "), e.viewMode===e.ViewMode.COMPLETENESS?n("div", {
                      staticClass:"desc"
                    }, [
                      e._v("\n              "+e._s(e.$t("knowledgeGraph.statistics.averageCompletenessRate"))+":\n              "+e._s(e.isSimulatingAsStudent?"--":e.formatPercent(t.completenessRate))+"\n            ")
                    ]):e._e()
                  ])
                ])
              })), 1), e._v(" "), 0===e.statsList.state.value.length?n("NoData", {
                staticClass:"no-data"
              }, [
                e._v(e._s(e.$t("knowledgeGraph.nodata")))
              ]):e._e()
            ], 1), e._v(" "), n("div", {
              ref:"graphWrapperRef", staticClass:"graph-wrapper"
            }, [
              e._l(e.statsList.state.value, (function(t){
                return n("GraphContainer", {
                  key:t.id, ref:"graphRef", refInFor:!0, staticClass:"graph", class:{
                    visible:t.id===e.currentStatsId
                  }, attrs:{
                    "view-mode":e.viewMode, setting:e.graphSetting, "stats-id":t.id
                  }, on:{
                    "on-click-node":e.handleClickNode, "on-click-outside":e.handleClickOutside
                  }
                })
              })), e._v(" "), e.statsList.isLoading.value?n("Spin", {
                attrs:{
                  size:"large", fix:""
                }
              }):e._e(), e._v(" "), n("Legend", {
                staticClass:"graph-legend", attrs:{
                  "view-mode":e.viewMode
                }
              }), e._v(" "), e.statsList.state.value.length?n("Toolbar", {
                staticClass:"graph-toolbar", attrs:{
                  "view-mode":e.viewMode
                }, on:{
                  "on-setting-change":e.settingChange, "on-fullscreen":e.fullscreen, "on-position":e.restPosition, "on-zoom-in":e.zoomIn, "on-zoom-out":e.zoomOut
                }
              }):e._e(), e._v(" "), n("Drawer", {
                attrs:{
                  button:!1, "close-button":!0
                }, model:{
                  value:e.showDrawer, callback:function(t){
                    e.showDrawer=t
                  }, expression:"showDrawer"
                }
              }, [
                e.currentNode?n("NodeDetailContent", {
                  attrs:{
                    node:e.currentNode, statistics:!0, tab:"statistics"
                  }
                }):e._e()
              ], 1)
            ], 2)
          ])
        ])
      }), [
      ], !1, null, "d6b0824a", null).exports
    }, 716880:(e, t, n)=>{
      e.exports=n.p+"assets/images/32ce719a510ad8aecf9d.svg"
    }, 731904:(e, t, n)=>{
      n.r(t), n.d(t, {
        TimeUtils:()=>c.A, Toast:()=>l.A, UniqueToast:()=>u.A, _:()=>r.a, fileExtension:()=>f, fileTypeByExtension:()=>h, humanizeBytes:()=>v, isDate:()=>p, numberToLocaleObject:()=>m, numberToLocaleString:()=>y, parseTimeToMinuteNum:()=>S, reBuildColumns:()=>D, removeStyleAttributes:()=>k, sanitizeDisplaySubjectText:()=>x, saveBlob:()=>T, setDisableDevtool:()=>R
      });
      n(219693), n(714913), n(334867), n(906048), n(43148), n(640173), n(158649), n(754989), n(658379);
      var o=n(302543), r=n.n(o), i=n(791936), a=n(58457), s=n.n(a), l=n(818183), c=n(88595), u=n(882971), d=Object.prototype.toString;
      function p(e){
        return"[object Date]"===d.call(e)
      }
      function v(e){
        var t=[
          "Bytes", "KB", "MB", "GB", "TB"
        ];
        if(0===e)return"0 ".concat(t[
          0
        ]);
        var n=parseInt(Math.floor(Math.log(e)/Math.log(1024)), 10);
        return"".concat((e/Math.pow(1024, n)).toFixed(2), " ").concat(t[
          n
        ])
      }
      function f(e){
        var t=arguments.length>1&&void 0!==arguments[
          1
        ]
        &&arguments[
          1
        ];
        if(-1!==e.indexOf(".")){
          var n=e.split(".").pop();
          return t?n.toLowerCase():n
        }
        return e
      }
      function h(e){
        if(!e)return"";
        if(e.is_folder)return"folder";
        if("link"===e.type)return(t=e.link)&&t.is_video_link?"video-link":"link";
        var t, n=e.extension||f(e.name||e.file_name||"", !0), o=e.type;
        return"folder"===o?"folder":[
          "video-quiz", "other"
        ].includes(o)?"video":[
          "video", "image", "audio", "scorm", "evercam", "swf", "folder"
        ].includes(o)?o:[
          "doc", "docx", "dot", "dotx"
        ].includes(n)?"word":[
          "xls", "xlsx", "xlt", "xltx", "csv"
        ].includes(n)?"excel":"pdf"===n?"pdf":[
          "ppt", "pptx", "pps", "ppsx"
        ].includes(n)?"ppt":"numbers"===n?"numbers":"pages"===n?"pages":"key"===n?"keynote":"document"
      }
      function m(e, t){
        var n={
          value:String(e), unit:"", formulate:new Intl.NumberFormat("en-US").format(e)
        };
        if(!e||e<1e4)return n.value=new Intl.NumberFormat("en-US").format(e), n;
        var o=e.toString();
        return e<1e6?t.locale.value.startsWith("en")?(n.value="".concat(o.slice(0, -3), ".").concat(o.substr(-3)[
          0
        ]), n.unit="K", n):(n.value="".concat(o.slice(0, -4), ".").concat(o.substr(-4)[
          0
        ]), n.unit="".concat(t.t("10KShort")), n):e<1e8?t.locale.value.startsWith("en")?(n.value="".concat(o.slice(0, -6), ".").concat(o.substr(-6)[
          0
        ]), n.unit="".concat(t.t("1MShort")), n):(n.value="".concat(o.slice(0, -4), ".").concat(o.substr(-4)[
          0
        ]), n.unit="".concat(t.t("10KShort")), n):e<1e9?t.locale.value.startsWith("en")?(n.value="".concat(o.slice(0, -6), ".").concat(o.substr(-6)[
          0
        ]), n.unit="".concat(t.t("1MShort")), n):(n.value="".concat(o.slice(0, -8), ".").concat(o.substr(-8)[
          0
        ]), n.unit="".concat(t.t("100MShort")), n):t.locale.value.startsWith("en")?(n.value="".concat(o.slice(0, -9), ".").concat(o.substr(-9)[
          0
        ]), n.unit="".concat(t.t("1BShort")), n):(n.value="".concat(o.slice(0, -8), ".").concat(o.substr(-8)[
          0
        ]), n.unit="".concat(t.t("100MShort")), n)
      }
      function y(e, t){
        var n=m(e, t);
        return"".concat(n.value).concat(n.unit)
      }
      var g=(e, t)=>e.replace(/<img.*?(data-latex=|Wirisformula).*?>?.*?(>|\/img>|\/>)/gi, " [".concat(t.t("simditor.santilize.forlumn"), "] ")).replace(/<img.*?>?.*?(>|\/img>|\/>)/gi, " [".concat(t.t("simditor.santilize.image"), "] ")), w=e=>e.replace(/<[
        ^>
      ]
      +>/g, "").replace(/&nbsp;
      /gi, " "), b=e=>e.replace(/<span class="file-size">[
        ^>
      ]
      +<\/span>/g, ""), _=(e, t)=>e(t, {
        allowedTags:[
          "img", "p", "span"
        ], allowedAttributes:{
          img:[
            "width", "height", "data-image-size", "data-latex", "data-non-image", "class", "src"
          ], span:[
            "class"
          ]
        }, allowedSchemes:[
          "data", "http", "https"
        ]
      }), C=e=>{
        var t=document.createElement("div");
        return t.innerHTML=e, t.innerText||t.textContent
      }, k=e=>{
        var t=document.createElement("div");
        return t.innerHTML=e, t.querySelectorAll("*").forEach((e=>{
          e.removeAttribute("style")
        })), t.innerHTML
      }, x=function(e, t, n){
        var o=arguments.length>3&&void 0!==arguments[
          3
        ]
        &&arguments[
          3
        ], r=_(e, t);
        return r=g(r, n), o?r:(r=b(r), r=w(r), r=C(r))
      }, S=e=>{
        var t=e.split(":");
        return 60*parseInt(t[
          0
        ], 10)+parseInt(t[
          1
        ], 10)
      }, D=(e, t)=>r().filter(e, (e=>r().every(t, (t=>t.name!==e.slot&&t.name!==e.key||!!t.isShow)))), T=e=>{
        if(e){
          var t=e.headers, n=decodeURIComponent(t[
            "content-disposition"
          ]), o=n.substring(n.indexOf("filename*=UTF-8")+17);
          o=o.replace(/name=/g, "");
          var r=new Blob([
            e.data
          ], {
            type:t[
              "content-type"
            ]
          });
          (0, i.saveAs)(r, o)
        }
      }, R=()=>{
        window.location.host.includes("localhost")||s()({
          ondevtoolopen:()=>{
            document.body.innerHTML="", (()=>!1).constructor("debugger").call()
          }, ondevtoolclose:()=>{
            window.location.reload()
          }
        })
      }
    }, 761133:(e, t, n)=>{
      n.d(t, {
        QB:()=>p
      });
      n(335231), n(640173);
      var o=n(738645), r=n(152229), i=n(510543), a=n(366356), s=function(e, t, n, o){
        var r, i=arguments.length, a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t, n):o;
        if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e, t, n, o);
        else for(var s=e.length-1;
        s>=0;
        s--)(r=e[
          s
        ])&&(a=(i<3?r(a):i>3?r(t, n, a):r(t, n))||a);
        return i>3&&a&&Object.defineProperty(t, n, a), a
      }, l=function(){
        this.id=0, this.projectName="", this.certificationTitle="", this.studyThreshold=0
      }, c=function(){
        function e(){
          this.name="", this.id=0
        }
        return s([
          (0, o.v)()
        ], e.prototype, "name", void 0), s([
          (0, o.v)()
        ], e.prototype, "id", void 0), e
      }
      (), u=function(){
        function e(){
          this.data={
          }
        }
        return s([
          (0, o.v)()
        ], e.prototype, "data", void 0), e
      }
      (), d=function(){
        function e(){
          this.creditRemaining=0, this.status=""
        }
        return s([
          (0, o.v)()
        ], e.prototype, "creditRemaining", void 0), s([
          (0, o.v)()
        ], e.prototype, "status", void 0), e
      }
      (), p=function(){
        function e(){
          this.id=0, this.access="", this.cover="", this.studentsCount=0, this.classroomSchedule="", this.name="", this.compulsory=!1, this.courseCode="", this.coursePictures=[
          ], this.publicScope="private", this.klass=new c, this.department=new c, this.grade=new c, this.courseClassification=new c, this.startDate="", this.endDate="", this.instructors=[
          ], this.openedDepartments=[
          ], this.openedRoles=[
          ], this.selectedCertification=new l, this.courseAttributes=new u, this.modules=[
          ], this.creditState=new d, this.knowledgeGraphPublishType="", this.problemGraphPublishType="", this.url=""
        }
        return Object.defineProperty(e.prototype, "startDateDisplay", {
          get:function(){
            return this.startDate.replace(/-/g, ".")
          }, enumerable:!1, configurable:!0
        }), Object.defineProperty(e.prototype, "endDateDisplay", {
          get:function(){
            return this.endDate.replace(/-/g, ".")
          }, enumerable:!1, configurable:!0
        }), Object.defineProperty(e.prototype, "sortedModules", {
          get:function(){
            return this.modules.sort((function(e, t){
              return e.sort-t.sort
            }))
          }, enumerable:!1, configurable:!0
        }), s([
          (0, o.v)()
        ], e.prototype, "id", void 0), s([
          (0, o.v)()
        ], e.prototype, "access", void 0), s([
          (0, o.v)()
        ], e.prototype, "cover", void 0), s([
          (0, o.v)()
        ], e.prototype, "studentsCount", void 0), s([
          (0, o.v)()
        ], e.prototype, "classroomSchedule", void 0), s([
          (0, o.v)()
        ], e.prototype, "name", void 0), s([
          (0, o.v)()
        ], e.prototype, "compulsory", void 0), s([
          (0, o.v)()
        ], e.prototype, "courseCode", void 0), s([
          (0, o.v)()
        ], e.prototype, "coursePictures", void 0), s([
          (0, o.v)()
        ], e.prototype, "publicScope", void 0), s([
          (0, o.v)()
        ], e.prototype, "credit", void 0), s([
          (0, o.v)(), (0, r.Z)((function(){
            return c
          })), (0, i.d)((function(e){
            return e.value||new c
          }), {
            toClassOnly:!0
          })
        ], e.prototype, "klass", void 0), s([
          (0, o.v)(), (0, r.Z)((function(){
            return c
          })), (0, i.d)((function(e){
            return e.value||new c
          }), {
            toClassOnly:!0
          })
        ], e.prototype, "department", void 0), s([
          (0, o.v)(), (0, r.Z)((function(){
            return c
          })), (0, i.d)((function(e){
            return e.value||new c
          }), {
            toClassOnly:!0
          })
        ], e.prototype, "grade", void 0), s([
          (0, o.v)(), (0, r.Z)((function(){
            return c
          })), (0, i.d)((function(e){
            return e.value||new c
          }), {
            toClassOnly:!0
          })
        ], e.prototype, "courseClassification", void 0), s([
          (0, o.v)()
        ], e.prototype, "startDate", void 0), s([
          (0, o.v)()
        ], e.prototype, "endDate", void 0), s([
          (0, o.v)()
        ], e.prototype, "isBlocked", void 0), s([
          (0, o.v)()
        ], e.prototype, "importedFrom", void 0), s([
          (0, o.v)()
        ], e.prototype, "instructors", void 0), s([
          (0, o.v)()
        ], e.prototype, "openedDepartments", void 0), s([
          (0, o.v)()
        ], e.prototype, "openedRoles", void 0), s([
          (0, o.v)()
        ], e.prototype, "selectedCertification", void 0), s([
          (0, o.v)(), (0, r.Z)((function(){
            return u
          }))
        ], e.prototype, "courseAttributes", void 0), s([
          (0, o.v)(), (0, r.Z)((function(){
            return f
          }))
        ], e.prototype, "modules", void 0), s([
          (0, o.v)(), (0, r.Z)((function(){
            return d
          }))
        ], e.prototype, "creditState", void 0), s([
          a.P
        ], e.prototype, "sortedModules", null), s([
          (0, o.v)()
        ], e.prototype, "knowledgeGraphPublishType", void 0), s([
          (0, o.v)()
        ], e.prototype, "problemGraphPublishType", void 0), s([
          (0, o.v)()
        ], e.prototype, "url", void 0), e
      }
      (), v=function(){
        function e(){
          this.id=0, this.moduleId=0, this.sort=0, this.summary="", this.activities=[
          ]
        }
        return s([
          (0, o.v)()
        ], e.prototype, "id", void 0), s([
          (0, o.v)()
        ], e.prototype, "moduleId", void 0), s([
          (0, o.v)()
        ], e.prototype, "sort", void 0), s([
          (0, o.v)()
        ], e.prototype, "summary", void 0), e
      }
      (), f=function(){
        function e(){
          this.id=0, this.name="", this.sort=0, this.syllabuses=[
          ], this.activities=[
          ]
        }
        return Object.defineProperty(e.prototype, "sortedSyllabuses", {
          get:function(){
            return this.syllabuses.sort((function(e, t){
              return e.sort-t.sort
            }))
          }, enumerable:!1, configurable:!0
        }), s([
          (0, o.v)()
        ], e.prototype, "id", void 0), s([
          (0, o.v)()
        ], e.prototype, "name", void 0), s([
          (0, o.v)()
        ], e.prototype, "sort", void 0), s([
          (0, o.v)(), (0, r.Z)((function(){
            return v
          }))
        ], e.prototype, "syllabuses", void 0), s([
          a.P
        ], e.prototype, "sortedSyllabuses", null), e
      }
      ()
    }, 765321:(e, t, n)=>{
      n.d(t, {
        Gw:()=>c, KJ:()=>u, SR:()=>d, rU:()=>r, sY:()=>i
      });
      var o, r, i, a=n(738645), s=n(152229), l=function(e, t, n, o){
        var r, i=arguments.length, a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t, n):o;
        if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e, t, n, o);
        else for(var s=e.length-1;
        s>=0;
        s--)(r=e[
          s
        ])&&(a=(i<3?r(a):i>3?r(t, n, a):r(t, n))||a);
        return i>3&&a&&Object.defineProperty(t, n, a), a
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
      (r||(r={
      })), function(e){
        e.home="home", e.shipping="shipping"
      }
      (i||(i={
      }));
      var c=function(){
        function e(){
        }
        return l([
          (0, a.v)()
        ], e.prototype, "id", void 0), l([
          (0, a.v)(), (0, s.Z)((function(){
            return u
          }))
        ], e.prototype, "user", void 0), e
      }
      (), u=function(){
        function e(e, t, n, o){
          this.webexAuth=!1, this.larkAuth=!1, this.id=e, this.userNo=t, this.name=n, this.role=o
        }
        return e.prototype.isInstructor=function(){
          return o.INSTRUCTOR===this.role
        }, l([
          (0, a.v)()
        ], e.prototype, "id", void 0), l([
          (0, a.v)()
        ], e.prototype, "userNo", void 0), l([
          (0, a.v)()
        ], e.prototype, "name", void 0), l([
          (0, a.v)()
        ], e.prototype, "role", void 0), l([
          (0, a.v)()
        ], e.prototype, "org", void 0), l([
          (0, a.v)()
        ], e.prototype, "groupName", void 0), l([
          (0, a.v)()
        ], e.prototype, "department", void 0), l([
          (0, a.v)()
        ], e.prototype, "avatarBigUrl", void 0), l([
          (0, a.v)()
        ], e.prototype, "isLeader", void 0), l([
          (0, a.v)()
        ], e.prototype, "sex", void 0), l([
          (0, a.v)()
        ], e.prototype, "education", void 0), l([
          (0, a.v)()
        ], e.prototype, "teachingDate", void 0), l([
          (0, a.v)()
        ], e.prototype, "occupationType", void 0), l([
          (0, a.v)()
        ], e.prototype, "mobilePhone", void 0), l([
          (0, a.v)()
        ], e.prototype, "email", void 0), l([
          (0, a.v)()
        ], e.prototype, "userAttributes", void 0), l([
          (0, a.v)()
        ], e.prototype, "userAddresses", void 0), l([
          (0, a.v)()
        ], e.prototype, "userAuthExternals", void 0), l([
          (0, a.v)()
        ], e.prototype, "klass", void 0), l([
          (0, a.v)()
        ], e.prototype, "program", void 0), l([
          (0, a.v)()
        ], e.prototype, "grade", void 0), l([
          (0, a.v)()
        ], e.prototype, "webexAuth", void 0), l([
          (0, a.v)()
        ], e.prototype, "larkAuth", void 0), e
      }
      (), d=function(){
        function e(){
        }
        return l([
          (0, a.v)()
        ], e.prototype, "id", void 0), l([
          (0, a.v)()
        ], e.prototype, "name", void 0), e
      }
      ()
    }, 767747:(e, t, n)=>{
      n.d(t, {
        D:()=>u
      });
      n(906048);
      var o, r=n(572366), i=function(){
        function e(e){
          this.container=e;
          var t=this.container.getBoundingClientRect(), n=t.width, o=t.height;
          this.width=n, this.height=o, this.center={
            x:n/2, y:o/2
          }, this.div=(0, r.Ltv)(this.container).append("div").style("height", "100%"), this.svg=this.div.append("svg").attr("viewBox", "0, 0, ".concat(n, ", ").concat(o)).style("display", "block").style("overflow", "visible").style("height", "100%").style("width", "100%"), this.g=this.svg.append("g")
        }
        return e.prototype.arrow=function(e, t, n, o){
          var r=Math.atan2(t.y-e.y, t.x-e.x), i=r+n*Math.PI/180, a=r-n*Math.PI/180;
          return[
            {
              x:t.x-Math.cos(i)*o, y:t.y-Math.sin(i)*o
            }, {
              x:t.x-Math.cos(a)*o, y:t.y-Math.sin(a)*o
            }
          ]
        }, e.prototype.resize=function(e, t){
          this.width=e, this.height=t, this.svg.attr("viewBox", "0, 0, ".concat(e, ", ").concat(t)), this.center={
            x:e/2, y:t/2
          }
        }, e.prototype.crossing=function(e, t){
          var n=Math.sqrt(Math.pow(e.x-t.x, 2)+Math.pow(e.y-t.y, 2));
          return[
            {
              x:e.x+e.r*(t.x-e.x)/n, y:e.y+e.r*(t.y-e.y)/n
            }, {
              x:t.x-t.r*(t.x-e.x)/n, y:t.y-t.r*(t.y-e.y)/n
            }
          ]
        }, e
      }
      (), a=(o=function(e, t){
        return(o=Object.setPrototypeOf||{
          __proto__:[
          ]
        }
        instanceof Array&&function(e, t){
          e.__proto__=t
        }
        ||function(e, t){
          for(var n in t)Object.prototype.hasOwnProperty.call(t, n)&&(e[
            n
          ]
          =t[
            n
          ])
        })(e, t)
      }, function(e, t){
        if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");
        function n(){
          this.constructor=e
        }
        o(e, t), e.prototype=null===t?Object.create(t):(n.prototype=t.prototype, new n)
      }), s=function(e){
        function t(t){
          var n=e.call(this, t)||this;
          return n.simulation=(0, r.tXi)().on("tick", n.tick.bind(n)), n.defaultForces(), n
        }
        return a(t, e), t.prototype.defaultForces=function(){
          this.forceCenter(this.center).forceCharge(-300)
        }, t.prototype.forceX=function(e){
          var t=e?(0, r.KS8)(e):(0, r.KS8)();
          return this.simulation.force("x", t), this
        }, t.prototype.forceY=function(e){
          var t=e?(0, r.TSS)(e):(0, r.TSS)();
          return this.simulation.force("y", t), this
        }, t.prototype.forceLink=function(e, t, n){
          void 0===t&&(t=.7);
          var o=(0, r.kJC)(e).id((function(e){
            return e.id.toString()
          })).strength(t);
          return n&&(o=o.distance(n)), this.simulation.force("link", o), this
        }, t.prototype.forceCollide=function(e, t, n){
          return void 0===t&&(t=.1), void 0===n&&(n=1), this.simulation.force("collide", (0, r.eRw)().radius((function(t){
            var o;
            return(null!==(o=t.r)&&void 0!==o?o:e)*n
          })).strength(t)), this
        }, t.prototype.forceCenter=function(e){
          var t=e.x, n=e.y;
          return this.simulation.force("center", (0, r.jTM)(t, n)), this
        }, t.prototype.forceCharge=function(e){
          return this.simulation.force("charge", (0, r.xJS)().strength(e)), this
        }, t.prototype.data=function(e){
          return this.simulation.nodes(e), this
        }, t.prototype.restart=function(e){
          return void 0===e&&(e=1), this.simulation.alpha(e).restart().tick(100), this
        }, t
      }
      (i), l=(n(210557), n(158649), n(333706)), c=function(){
        var e=function(t, n){
          return(e=Object.setPrototypeOf||{
            __proto__:[
            ]
          }
          instanceof Array&&function(e, t){
            e.__proto__=t
          }
          ||function(e, t){
            for(var n in t)Object.prototype.hasOwnProperty.call(t, n)&&(e[
              n
            ]
            =t[
              n
            ])
          })(t, n)
        };
        return function(t, n){
          if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");
          function o(){
            this.constructor=t
          }
          e(t, n), t.prototype=null===n?Object.create(n):(o.prototype=n.prototype, new o)
        }
      }
      (), u=function(e){
        function t(t){
          var n=e.call(this, t)||this;
          return n.link=n.g.append("g").classed("link", !0).selectAll("path"), n.node=n.g.append("g").classed("node", !0).selectAll("circle"), n.text=n.g.append("g").classed("text", !0).selectAll("text"), n.zoomer=(0, l.L$)(n.div, n.width, n.height), (0, r.Ltv)(n.container).call(n.zoomer).on("dblclick.zoom", null), n
        }
        return c(t, e), t.prototype.tick=function(){
          var e=this;
          this.node.attr("cx", (function(e){
            return e.x
          })).attr("cy", (function(e){
            return e.y
          })), this.text.attr("x", (function(e){
            return(0, l._l)(e.x, e.r-4*e.level)
          })).attr("y", (function(e){
            return e.y
          })), this.link.attr("d", (function(t){
            var n=e.node.data().find((function(e){
              return e.id===t.source.id
            })), o=e.node.data().find((function(e){
              return e.id===t.target.id
            })), r=e.crossing({
              x:t.source.x, y:t.source.y, r:n.r-4*n.level
            }, {
              x:t.target.x, y:t.target.y, r:o.r-4*o.level
            }), i=r[
              0
            ], a=r[
              1
            ];
            return"M ".concat(i.x, " ").concat(i.y, " L ").concat(a.x, " ").concat(a.y)
          }))
        }, t.prototype.wrapWord=function(e, t){
          e.each((function(e, n, o){
            for(var i, a, s, l, c, u=(0, r.Ltv)(o[
              n
            ]).text(e.name), d=u.text().split("").reverse(), p=null!==(a=null===(i=u.node())||void 0===i?void 0:i.getBoundingClientRect().height)&&void 0!==a?a:0, v=[
            ], f=0, h=u.text(null).append("tspan").attr("line", f).attr("line-height", p);
            c=d.pop();
            )v.push(c), h.text(v.join("")), (null!==(l=null===(s=h.node())||void 0===s?void 0:s.getComputedTextLength())&&void 0!==l?l:0)>t&&(v.pop(), h.text(v.join("")), v=[
              c
            ], h=u.append("tspan").text(c).attr("line", ++f).attr("line-height", p));
            u.selectAll("tspan").attr("lines", f).attr("dy", "0.3em")
          }))
        }, t.prototype.resetZoom=function(){
          (0, r.Ltv)(this.container).transition().call(this.zoomer.transform, r.GSI)
        }, t.prototype.zoomIn=function(){
          (0, r.Ltv)(this.container).transition().call(this.zoomer.scaleBy, 2)
        }, t.prototype.zoomOut=function(){
          (0, r.Ltv)(this.container).transition().call(this.zoomer.scaleBy, .5)
        }, t.prototype.resize=function(t, n){
          var o=this.container.getBoundingClientRect(), r=o.width, i=o.height;
          e.prototype.resize.call(this, null!=t?t:r, null!=n?n:i), this.zoomer&&this.zoomer.extent([
            [
              0, 0
            ], [
              this.width, this.height
            ]
          ])
        }, t
      }
      (s)
    }, 769075:(e, t, n)=>{
      n.d(t, {
        A:()=>l
      });
      n(269193);
      var o=n(962893), r=n(679578);
      function i(e, t){
        var n=Object.keys(e);
        if(Object.getOwnPropertySymbols){
          var o=Object.getOwnPropertySymbols(e);
          t&&(o=o.filter((function(t){
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, o)
        }
        return n
      }
      function a(e){
        for(var t=1;
        t<arguments.length;
        t++){
          var n=null!=arguments[
            t
          ]
          ?arguments[
            t
          ]
          :{
          };
          t%2?i(Object(n), !0).forEach((function(t){
            s(e, t, n[
              t
            ])
          })):Object.getOwnPropertyDescriptors?Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }
      function s(e, t, n){
        return t in e?Object.defineProperty(e, t, {
          value:n, enumerable:!0, configurable:!0, writable:!0
        }):e[
          t
        ]
        =n, e
      }
      r.A.open=function(){
        var e=arguments.length>0&&void 0!==arguments[
          0
        ]
        ?arguments[
          0
        ]
        :{
        };
        return new Promise((t=>{
          var n=new o.default({
            data:()=>({
              visible:!1
            }), render(t){
              var o={
              };
              return e.render&&(o.default=()=>e.render(t, n)), e.renderHeader&&(o.header=()=>e.renderHeader(t, n)), e.renderFooter&&(o.footer=()=>e.renderFooter(t, n)), t(r.A, {
                props:a(a({
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
          n.$mount(), document.body.append(n.$el), n.show();
          var i=n.$children[
            0
          ];
          i.$on("on-ok", (()=>{
            n.visible=!1, t(!0)
          })), i.$on("on-cancel", (()=>{
            n.visible=!1, t(!1)
          })), i.$on("on-hidden", (()=>{
            t(!1), n.$el.remove()
          }))
        }))
      };
      const l=r.A
    }, 789974:(e, t, n)=>{
      n.d(t, {
        A:()=>r
      });
      const o={
      };
      const r=(0, n(514486).A)(o, (function(){
        var e=this, t=e.$createElement, n=e._self._c||t;
        return n("div", {
          staticClass:"knowledge-header"
        }, [
          n("div", {
            staticClass:"name"
          }, [
            e._t("default")
          ], 2), e._v(" "), n("div", {
            staticClass:"center", class:{
              en:-1!==[
                "en-GB", "en-US"
              ].indexOf(e.$i18n.locale)
            }
          }, [
            e._t("center")
          ], 2), e._v(" "), n("div", {
            staticClass:"group"
          }, [
            e._t("btn-group")
          ], 2)
        ])
      }), [
      ], !1, null, "2950cc18", null).exports
    }, 794128:(e, t, n)=>{
      n.d(t, {
        $0:()=>l, $U:()=>s, r7:()=>c
      });
      n(540590), n(418665), n(269193), n(14602);
      var o=n(552979), r=n(769075), i=function(e, t, n, o){
        return new(n||(n=Promise))((function(r, i){
          function a(e){
            try{
              l(o.next(e))
            }
            catch(e){
              i(e)
            }
          }
          function s(e){
            try{
              l(o.throw(e))
            }
            catch(e){
              i(e)
            }
          }
          function l(e){
            var t;
            e.done?r(e.value):(t=e.value, t instanceof n?t:new n((function(e){
              e(t)
            }))).then(a, s)
          }
          l((o=o.apply(e, t||[
          ])).next())
        }))
      }, a=function(e, t){
        var n, o, r, i, a={
          label:0, sent:function(){
            if(1&r[
              0
            ])throw r[
              1
            ];
            return r[
              1
            ]
          }, trys:[
          ], ops:[
          ]
        };
        return i={
          next:s(0), throw:s(1), return:s(2)
        }, "function"==typeof Symbol&&(i[
          Symbol.iterator
        ]
        =function(){
          return this
        }), i;
        function s(s){
          return function(l){
            return function(s){
              if(n)throw new TypeError("Generator is already executing.");
              for(;
              i&&(i=0, s[
                0
              ]
              &&(a=0)), a;
              )try{
                if(n=1, o&&(r=2&s[
                  0
                ]
                ?o.return:s[
                  0
                ]
                ?o.throw||((r=o.return)&&r.call(o), 0):o.next)&&!(r=r.call(o, s[
                  1
                ])).done)return r;
                switch(o=0, r&&(s=[
                  2&s[
                    0
                  ], r.value
                ]), s[
                  0
                ]){
                  case 0:case 1:r=s;
                  break;
                  case 4:return a.label++, {
                    value:s[
                      1
                    ], done:!1
                  };
                  case 5:a.label++, o=s[
                    1
                  ], s=[
                    0
                  ];
                  continue;
                  case 7:s=a.ops.pop(), a.trys.pop();
                  continue;
                  default:if(!(r=a.trys, (r=r.length>0&&r[
                    r.length-1
                  ])||6!==s[
                    0
                  ]
                  &&2!==s[
                    0
                  ])){
                    a=0;
                    continue
                  }
                  if(3===s[
                    0
                  ]
                  &&(!r||s[
                    1
                  ]
                  >r[
                    0
                  ]
                  &&s[
                    1
                  ]
                  <r[
                    3
                  ])){
                    a.label=s[
                      1
                    ];
                    break
                  }
                  if(6===s[
                    0
                  ]
                  &&a.label<r[
                    1
                  ]){
                    a.label=r[
                      1
                    ], r=s;
                    break
                  }
                  if(r&&a.label<r[
                    2
                  ]){
                    a.label=r[
                      2
                    ], a.ops.push(s);
                    break
                  }
                  r[
                    2
                  ]
                  &&a.ops.pop(), a.trys.pop();
                  continue
                }
                s=t.call(e, a)
              }
              catch(e){
                s=[
                  6, e
                ], o=0
              }
              finally{
                n=r=0
              }
              if(5&s[
                0
              ])throw s[
                1
              ];
              return{
                value:s[
                  0
                ]
                ?s[
                  1
                ]
                :void 0, done:!0
              }
            }
            ([
              s, l
            ])
          }
        }
      }, s=function(){
        var e=!window.orgSettings.xjtuKnowledgeMode;
        return{
          tooltipCompletionRate:e?o.default.t("knowledgeGraph.statistics.nodeCompletenessRateDescription"):o.default.t("knowledgeGraph.statistics.xjtuNodeCompletenessRateDescription"), tooltipSingleCompletionRate:e?o.default.t("knowledgeGraph.statistics.nodeCompletenessRateDescription"):o.default.t("knowledgeGraph.statistics.xjtuSingleNodeCompletenessRateDescription"), tooltipMasteryRate:e?o.default.t("knowledgeGraph.statistics.nodeMasteryRateDescription"):o.default.t("knowledgeGraph.statistics.xjtuNodeMasteryRateDescription"), isNormalMode:e
        }
      }, l=function(e){
        var t=e[
          0
        ], n=e[
          1
        ], s=e[
          2
        ], l=e[
          3
        ], c=e[
          4
        ];
        return i(void 0, void 0, void 0, (function(){
          var e;
          return a(this, (function(i){
            switch(i.label){
              case 0:return e=function(e){
                var r=function(t){
                  return e("div", {
                    style:{
                      display:"flex", "align-items":"center", gap:"10px"
                    }
                  }, [
                    e("span", {
                      style:{
                        display:"inline-block", width:"4px", height:"4px", "border-radius":"4px", background:"#70748C"
                      }
                    }), t
                  ])
                }, i=[
                ];
                return c>1&&i.push(r(o.default.t("knowledgeGraph.delTips.withChild", [
                  c-1
                ]))), n&&i.push(r(o.default.t("knowledgeGraph.delTips.withResource", [
                  n
                ]))), l&&i.push(r(o.default.t("knowledgeGraph.delTips.withCapture", [
                  l
                ]))), t&&i.push(r(o.default.t("knowledgeGraph.delTips.withActivity", [
                  t
                ]))), s&&i.push(r(o.default.t("knowledgeGraph.delTips.withSubject", [
                  s
                ]))), i.length>0?e("div", [
                  e("div", {
                    style:{
                      "font-size":"16px", "font-weight":500, padding:"10px", "text-align":"center"
                    }
                  }, o.default.t("knowledgeGraph.delTips.normal")), e("div", {
                    style:{
                      background:"#F5F5F5", padding:"12px 16px", "border-radius":"3px"
                    }
                  }, i)
                ]):e("div", o.default.t("knowledgeGraph.delTips.normal"))
              }, [
                4, r.A.open({
                  title:o.default.t("delete"), type:"warning", divider:c>1, width:c>1?480:416, render:e
                })
              ];
              case 1:return[
                2, i.sent()
              ]
            }
          }))
        }))
      }, c=function(e){
        var t=e[
          0
        ], n=e[
          1
        ], s=e[
          2
        ], l=e[
          3
        ], c=e[
          4
        ];
        return i(void 0, void 0, void 0, (function(){
          var e;
          return a(this, (function(i){
            switch(i.label){
              case 0:return e=function(e){
                var r=function(t){
                  return e("div", {
                    style:{
                      display:"flex", "align-items":"center", gap:"10px"
                    }
                  }, [
                    e("span", {
                      style:{
                        display:"inline-block", width:"4px", height:"4px", "border-radius":"4px", background:"#70748C"
                      }
                    }), t
                  ])
                }, i=[
                ];
                return n&&i.push(r(o.default.t("knowledgeGraph.delTips.withResource", [
                  n
                ]))), l&&i.push(r(o.default.t("knowledgeGraph.delTips.withCapture", [
                  l
                ]))), t&&i.push(r(o.default.t("knowledgeGraph.delTips.withActivity", [
                  t
                ]))), s&&i.push(r(o.default.t("knowledgeGraph.delTips.withSubject", [
                  s
                ]))), i.length>0?e("div", [
                  e("div", {
                    style:{
                      "font-size":"16px", "font-weight":500, padding:"10px", "text-align":"center"
                    }
                  }, o.default.t("knowledgeGraph.delTips.batchDel", [
                    c
                  ])), e("div", {
                    style:{
                      background:"#F5F5F5", padding:"12px 16px", "border-radius":"3px"
                    }
                  }, i)
                ]):e("div", o.default.t("knowledgeGraph.delTips.batchDel", [
                  c
                ]))
              }, [
                4, r.A.open({
                  title:o.default.t("delete"), type:"warning", divider:!!(t||n||s||l), width:480, render:e
                })
              ];
              case 1:return[
                2, i.sent()
              ]
            }
          }))
        }))
      }
    }, 818183:(e, t, n)=>{
      n.d(t, {
        A:()=>i
      });
      var o=n(962893), r=function(){
        function e(){
        }
        return e.success=function(e, t, n, r){
          void 0===t&&(t=3), void 0===n&&(n=24), o.default.prototype.$Message.config({
            top:n
          }), o.default.prototype.$Message.success({
            content:e, duration:t, onClose:function(){
              r&&r()
            }
          })
        }, e.warning=function(e, t, n, r){
          void 0===t&&(t=3), void 0===n&&(n=24), o.default.prototype.$Message.config({
            top:n
          }), o.default.prototype.$Message.warning({
            content:e, duration:t, onClose:function(){
              r&&r()
            }
          })
        }, e.error=function(e, t, n, r){
          void 0===t&&(t=3), void 0===n&&(n=24), o.default.prototype.$Message.config({
            top:n
          }), o.default.prototype.$Message.error({
            content:e, duration:t, onClose:function(){
              r&&r()
            }
          })
        }, e.info=function(e, t, n, r){
          void 0===t&&(t=3), void 0===n&&(n=24), o.default.prototype.$Message.config({
            top:n
          }), o.default.prototype.$Message.info({
            content:e, duration:t, onClose:function(){
              r&&r()
            }
          })
        }, e
      }
      ();
      const i=r;
      window.toast=r
    }, 831065:(e, t, n)=>{
      n.r(t), n.d(t, {
        default:()=>l
      });
      var o=n(512897), r=n.n(o), i=n(55042), a=n.n(i), s=new(r())({
        id:"loading-spinner", use:"loading-spinner-usage", viewBox:"0 0 50 50", content:'<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 50 50" id="loading-spinner">\n    <defs>\n        <mask id="loading-spinner_ring">\n            <circle cx="25" cy="25" r="22" stroke="#FFF" stroke-width="6" fill="" />\n        </mask>\n\n        <filter id="loading-spinner_blur" x="0" y="0">\n            <feGaussianBlur in="SourceGraphic" stdDeviation="1"></feGaussianBlur>\n        </filter>\n\n        <path id="loading-spinner_p" d="M 25, 25\n                        L 62.5, 25\n                        A 37.5, 37.5, 0, 0, 1, 61.6805, 32.796\n                        L 25, 25\n                        A 0, 0, 0, 0, 0, 25, 25 z" fill="" />\n    </defs>\n    <g mask="url(#loading-spinner_ring)" transform="rotate(21.6, 25, 25)">\n        <g filter="url(#loading-spinner_blur)">\n            <use xlink:href="#loading-spinner_p" fill-opacity="0" transform="rotate(0, 25, 25)" />\n            <use xlink:href="#loading-spinner_p" fill-opacity="0.03" transform="rotate(12, 25, 25)" />\n            <use xlink:href="#loading-spinner_p" fill-opacity="0.07" transform="rotate(24, 25, 25)" />\n            <use xlink:href="#loading-spinner_p" fill-opacity="0.1" transform="rotate(36, 25, 25)" />\n            <use xlink:href="#loading-spinner_p" fill-opacity="0.14" transform="rotate(48, 25, 25)" />\n            <use xlink:href="#loading-spinner_p" fill-opacity="0.17" transform="rotate(60, 25, 25)" />\n            <use xlink:href="#loading-spinner_p" fill-opacity="0.2" transform="rotate(72, 25, 25)" />\n            <use xlink:href="#loading-spinner_p" fill-opacity="0.24" transform="rotate(84, 25, 25)" />\n            <use xlink:href="#loading-spinner_p" fill-opacity="0.28" transform="rotate(96, 25, 25)" />\n            <use xlink:href="#loading-spinner_p" fill-opacity="0.31" transform="rotate(108, 25, 25)" />\n            <use xlink:href="#loading-spinner_p" fill-opacity="0.34" transform="rotate(120, 25 25)" />\n            <use xlink:href="#loading-spinner_p" fill-opacity="0.38" transform="rotate(132, 25, 25)" />\n            <use xlink:href="#loading-spinner_p" fill-opacity="0.41" transform="rotate(144, 25, 25)" />\n            <use xlink:href="#loading-spinner_p" fill-opacity="0.45" transform="rotate(156, 25, 25)" />\n            <use xlink:href="#loading-spinner_p" fill-opacity="0.48" transform="rotate(168, 25, 25)" />\n            <use xlink:href="#loading-spinner_p" fill-opacity="0.52" transform="rotate(180, 25, 25)" />\n            <use xlink:href="#loading-spinner_p" fill-opacity="0.55" transform="rotate(192, 25, 25)" />\n            <use xlink:href="#loading-spinner_p" fill-opacity="0.59" transform="rotate(204, 25, 25)" />\n            <use xlink:href="#loading-spinner_p" fill-opacity="0.62" transform="rotate(216, 25, 25)" />\n            <use xlink:href="#loading-spinner_p" fill-opacity="0.66" transform="rotate(228, 25, 25)" />\n            <use xlink:href="#loading-spinner_p" fill-opacity="0.69" transform="rotate(240, 25, 25)" />\n            <use xlink:href="#loading-spinner_p" fill-opacity="0.7" transform="rotate(252, 25, 25)" />\n            <use xlink:href="#loading-spinner_p" fill-opacity="0.72" transform="rotate(264, 25, 25)" />\n            <use xlink:href="#loading-spinner_p" fill-opacity="0.76" transform="rotate(276, 25, 25)" />\n            <use xlink:href="#loading-spinner_p" fill-opacity="0.79" transform="rotate(288, 25, 25)" />\n            <use xlink:href="#loading-spinner_p" fill-opacity="0.83" transform="rotate(300, 25, 25)" />\n            <use xlink:href="#loading-spinner_p" fill-opacity="0.86" transform="rotate(312, 25, 25)" />\n            <use xlink:href="#loading-spinner_p" fill-opacity="0.93" transform="rotate(324, 25, 25)" />\n            <use xlink:href="#loading-spinner_p" fill-opacity="0.97" transform="rotate(336, 25, 25)" />\n            <use xlink:href="#loading-spinner_p" fill-opacity="1" transform="rotate(348, 25, 25)" />\n        </g>\n    </g>\n</symbol>'
      });
      a().add(s);
      const l=s
    }, 873509:(e, t, n)=>{
      n.d(t, {
        A:()=>l
      });
      n(540590), n(418665), n(269193), n(14602);
      var o=n(595738), r=n(552979), i=function(e, t, n, o){
        return new(n||(n=Promise))((function(r, i){
          function a(e){
            try{
              l(o.next(e))
            }
            catch(e){
              i(e)
            }
          }
          function s(e){
            try{
              l(o.throw(e))
            }
            catch(e){
              i(e)
            }
          }
          function l(e){
            var t;
            e.done?r(e.value):(t=e.value, t instanceof n?t:new n((function(e){
              e(t)
            }))).then(a, s)
          }
          l((o=o.apply(e, t||[
          ])).next())
        }))
      }, a=function(e, t){
        var n, o, r, i, a={
          label:0, sent:function(){
            if(1&r[
              0
            ])throw r[
              1
            ];
            return r[
              1
            ]
          }, trys:[
          ], ops:[
          ]
        };
        return i={
          next:s(0), throw:s(1), return:s(2)
        }, "function"==typeof Symbol&&(i[
          Symbol.iterator
        ]
        =function(){
          return this
        }), i;
        function s(s){
          return function(l){
            return function(s){
              if(n)throw new TypeError("Generator is already executing.");
              for(;
              i&&(i=0, s[
                0
              ]
              &&(a=0)), a;
              )try{
                if(n=1, o&&(r=2&s[
                  0
                ]
                ?o.return:s[
                  0
                ]
                ?o.throw||((r=o.return)&&r.call(o), 0):o.next)&&!(r=r.call(o, s[
                  1
                ])).done)return r;
                switch(o=0, r&&(s=[
                  2&s[
                    0
                  ], r.value
                ]), s[
                  0
                ]){
                  case 0:case 1:r=s;
                  break;
                  case 4:return a.label++, {
                    value:s[
                      1
                    ], done:!1
                  };
                  case 5:a.label++, o=s[
                    1
                  ], s=[
                    0
                  ];
                  continue;
                  case 7:s=a.ops.pop(), a.trys.pop();
                  continue;
                  default:if(!(r=a.trys, (r=r.length>0&&r[
                    r.length-1
                  ])||6!==s[
                    0
                  ]
                  &&2!==s[
                    0
                  ])){
                    a=0;
                    continue
                  }
                  if(3===s[
                    0
                  ]
                  &&(!r||s[
                    1
                  ]
                  >r[
                    0
                  ]
                  &&s[
                    1
                  ]
                  <r[
                    3
                  ])){
                    a.label=s[
                      1
                    ];
                    break
                  }
                  if(6===s[
                    0
                  ]
                  &&a.label<r[
                    1
                  ]){
                    a.label=r[
                      1
                    ], r=s;
                    break
                  }
                  if(r&&a.label<r[
                    2
                  ]){
                    a.label=r[
                      2
                    ], a.ops.push(s);
                    break
                  }
                  r[
                    2
                  ]
                  &&a.ops.pop(), a.trys.pop();
                  continue
                }
                s=t.call(e, a)
              }
              catch(e){
                s=[
                  6, e
                ], o=0
              }
              finally{
                n=r=0
              }
              if(5&s[
                0
              ])throw s[
                1
              ];
              return{
                value:s[
                  0
                ]
                ?s[
                  1
                ]
                :void 0, done:!0
              }
            }
            ([
              s, l
            ])
          }
        }
      };
      const s=(0, o.pM)({
        name:"remaining-credits-tip", props:{
          category:{
            type:String, default:"default"
          }
        }, setup:function(e, t){
          var n=this, s=t.root, l=(0, o.EW)((function(){
            return s.$store.state.airCredit.userCreditState
          })), c=(0, o.EW)((function(){
            return s.$store.getters[
              "airCredit/hasRemainingCredits"
            ]
          })), u=(0, o.EW)((function(){
            return s.$store.getters[
              "airCredit/userRemainingCredits"
            ]
          })), d=(0, o.EW)((function(){
            var t=e.category;
            return[
              "classroom", "subject_lib", "exam"
            ].includes(t)?r.default.t("air.creditsRemainingTip.file", [
              1, 10
            ]):[
              "online_video", "lesson"
            ].includes(t)?r.default.t("air.creditsRemainingTip.video", [
              1, 10
            ]):[
              "homeworkGrading"
            ].includes(t)?r.default.t("air.creditsRemainingTip.document", [
              1, 5
            ]):[
              "rubric", "textOptimization", "examGrading"
            ].includes(t)?r.default.t("air.creditsRemainingTip.rubric", [
              1, 2
            ]):[
              "chatbot"
            ].includes(t)?r.default.t("air.creditsRemainingTip.chat", [
              1, 2
            ]):r.default.t("air.creditsRemainingTip.default")
          }));
          return(0, o.sV)((function(){
            i(n, void 0, void 0, (function(){
              return a(this, (function(e){
                return s.$store.dispatch("airCredit/fetchCurrentUserState"), [
                  2
                ]
              }))
            }))
          })), {
            hasRemainingCredits:c, remainingCredits:u, tooltipContent:d, userCreditState:l
          }
        }
      });
      const l=(0, n(514486).A)(s, (function(){
        var e=this, t=e.$createElement, n=e._self._c||t;
        return n("div", {
          staticClass:"available-credits-tip"
        }, [
          e.userCreditState.hasCreditLimit?n("div", {
            staticClass:"credits-tip-container"
          }, [
            n("span", [
              e._v(e._s(e.$t("air.creditsRemaining"))+": "+e._s(e.remainingCredits))
            ]), e._v(" "), e.hasRemainingCredits?n("Tooltip", {
              attrs:{
                content:e.tooltipContent, placement:"top", transfer:""
              }
            }, [
              n("Icon", {
                attrs:{
                  type:"ios-help-circle-outline"
                }
              })
            ], 1):n("Tooltip", {
              attrs:{
                content:e.$t("air.creditsRemainingTip.noCredits"), placement:"top", transfer:""
              }
            }, [
              n("Icon", {
                attrs:{
                  type:"ios-help-circle-outline"
                }
              })
            ], 1)
          ], 1):e._e()
        ])
      }), [
      ], !1, null, "f14e1118", null).exports
    }, 879055:(e, t, n)=>{
      n.d(t, {
        gd:()=>P, as:()=>Z, e6:()=>Y, d9:()=>j, eA:()=>O, of:()=>T, aQ:()=>L, PY:()=>ne, d2:()=>z, fW:()=>Q, gu:()=>B, ed:()=>A, Je:()=>I, Wo:()=>U, Fy:()=>ee, Ss:()=>W, kw:()=>le, DW:()=>R, j7:()=>K, rH:()=>oe, xn:()=>V, JH:()=>$, EK:()=>ae, aI:()=>re, CR:()=>ie, $5:()=>se, xv:()=>J, ol:()=>M, mt:()=>S, hV:()=>N, dO:()=>E, Em:()=>D, U1:()=>X, Cn:()=>F, dq:()=>H, CS:()=>te, iL:()=>q, v3:()=>G
      });
      n(540590), n(219693), n(418665), n(714913), n(169218), n(269193), n(14602);
      var o=n(218831), r=n(272505), i=n.n(r), a=n(920453), s=n(448743), l=n(6349), c=n(344651), u=n(765321), d=n(738645), p=n(510543), v=n(88595), f=function(e, t, n, o){
        var r, i=arguments.length, a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t, n):o;
        if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e, t, n, o);
        else for(var s=e.length-1;
        s>=0;
        s--)(r=e[
          s
        ])&&(a=(i<3?r(a):i>3?r(t, n, a):r(t, n))||a);
        return i>3&&a&&Object.defineProperty(t, n, a), a
      }, h=function(){
        function e(){
        }
        return f([
          (0, d.v)()
        ], e.prototype, "id", void 0), f([
          (0, d.v)()
        ], e.prototype, "title", void 0), f([
          (0, d.v)()
        ], e.prototype, "comments", void 0), f([
          (0, d.v)()
        ], e.prototype, "content", void 0), f([
          (0, d.v)(), (0, p.d)((function(e){
            var t=e.value;
            return v.A.formatDatetime(t, "YYYY-MM-DD HH:mm")
          }), {
            toClassOnly:!0
          })
        ], e.prototype, "createdAt", void 0), f([
          (0, d.v)()
        ], e.prototype, "createdBy", void 0), f([
          (0, d.v)()
        ], e.prototype, "receiver", void 0), f([
          (0, d.v)()
        ], e.prototype, "replyCount", void 0), e
      }
      (), m=n(316075), y=n(761133), g=n(971793), w=n(546780), b=function(){
        return(b=Object.assign||function(e){
          for(var t, n=1, o=arguments.length;
          n<o;
          n++)for(var r in t=arguments[
            n
          ])Object.prototype.hasOwnProperty.call(t, r)&&(e[
            r
          ]
          =t[
            r
          ]);
          return e
        }).apply(this, arguments)
      }, _=function(e, t, n, o){
        return new(n||(n=Promise))((function(r, i){
          function a(e){
            try{
              l(o.next(e))
            }
            catch(e){
              i(e)
            }
          }
          function s(e){
            try{
              l(o.throw(e))
            }
            catch(e){
              i(e)
            }
          }
          function l(e){
            var t;
            e.done?r(e.value):(t=e.value, t instanceof n?t:new n((function(e){
              e(t)
            }))).then(a, s)
          }
          l((o=o.apply(e, t||[
          ])).next())
        }))
      }, C=function(e, t){
        var n, o, r, i, a={
          label:0, sent:function(){
            if(1&r[
              0
            ])throw r[
              1
            ];
            return r[
              1
            ]
          }, trys:[
          ], ops:[
          ]
        };
        return i={
          next:s(0), throw:s(1), return:s(2)
        }, "function"==typeof Symbol&&(i[
          Symbol.iterator
        ]
        =function(){
          return this
        }), i;
        function s(s){
          return function(l){
            return function(s){
              if(n)throw new TypeError("Generator is already executing.");
              for(;
              i&&(i=0, s[
                0
              ]
              &&(a=0)), a;
              )try{
                if(n=1, o&&(r=2&s[
                  0
                ]
                ?o.return:s[
                  0
                ]
                ?o.throw||((r=o.return)&&r.call(o), 0):o.next)&&!(r=r.call(o, s[
                  1
                ])).done)return r;
                switch(o=0, r&&(s=[
                  2&s[
                    0
                  ], r.value
                ]), s[
                  0
                ]){
                  case 0:case 1:r=s;
                  break;
                  case 4:return a.label++, {
                    value:s[
                      1
                    ], done:!1
                  };
                  case 5:a.label++, o=s[
                    1
                  ], s=[
                    0
                  ];
                  continue;
                  case 7:s=a.ops.pop(), a.trys.pop();
                  continue;
                  default:if(!(r=a.trys, (r=r.length>0&&r[
                    r.length-1
                  ])||6!==s[
                    0
                  ]
                  &&2!==s[
                    0
                  ])){
                    a=0;
                    continue
                  }
                  if(3===s[
                    0
                  ]
                  &&(!r||s[
                    1
                  ]
                  >r[
                    0
                  ]
                  &&s[
                    1
                  ]
                  <r[
                    3
                  ])){
                    a.label=s[
                      1
                    ];
                    break
                  }
                  if(6===s[
                    0
                  ]
                  &&a.label<r[
                    1
                  ]){
                    a.label=r[
                      1
                    ], r=s;
                    break
                  }
                  if(r&&a.label<r[
                    2
                  ]){
                    a.label=r[
                      2
                    ], a.ops.push(s);
                    break
                  }
                  r[
                    2
                  ]
                  &&a.ops.pop(), a.trys.pop();
                  continue
                }
                s=t.call(e, a)
              }
              catch(e){
                s=[
                  6, e
                ], o=0
              }
              finally{
                n=r=0
              }
              if(5&s[
                0
              ])throw s[
                1
              ];
              return{
                value:s[
                  0
                ]
                ?s[
                  1
                ]
                :void 0, done:!0
              }
            }
            ([
              s, l
            ])
          }
        }
      }, k=function(e, t){
        var n={
        };
        for(var o in e)Object.prototype.hasOwnProperty.call(e, o)&&t.indexOf(o)<0&&(n[
          o
        ]
        =e[
          o
        ]);
        if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){
          var r=0;
          for(o=Object.getOwnPropertySymbols(e);
          r<o.length;
          r++)t.indexOf(o[
            r
          ])<0&&Object.prototype.propertyIsEnumerable.call(e, o[
            r
          ])&&(n[
            o[
              r
            ]
          ]
          =e[
            o[
              r
            ]
          ])
        }
        return n
      }, x=function(e, t, n){
        if(n||2===arguments.length)for(var o, r=0, i=t.length;
        r<i;
        r++)!o&&r in t||(o||(o=Array.prototype.slice.call(t, 0, r)), o[
          r
        ]
        =t[
          r
        ]);
        return e.concat(o||Array.prototype.slice.call(t))
      }, S=function(e){
        return i().get("/api/courses/".concat(e, "/sub-courses"))
      }, D=function(e){
        return i().put("/api/courses/inspect-child/".concat(e), {
        }, {
          withCredentials:!0
        })
      }, T=function(e, t, n){
        return _(void 0, void 0, void 0, (function(){
          var r, l, c, u;
          return C(this, (function(d){
            switch(d.label){
              case 0:return r=(0, o.decamelizeKeys)({
                page:e, pageSize:t, conditions:b(b({
                }, n), {
                  role:[
                    "chief_instructor", "instructor"
                  ]
                })
              }), [
                4, i().post("/api/my-courses", r)
              ];
              case 1:return l=d.sent(), c=(0, o.camelizeKeys)(l.data.courses), u=(0, a.plainToClass)(s.SelectedCourse, c, {
                excludeExtraneousValues:!0, exposeDefaultValues:!0
              }), [
                2, {
                  page:e, pageSize:t, pages:l.data.pages, total:l.data.total, items:u
                }
              ]
            }
          }))
        }))
      }, R=function(e, t, n, r, s){
        return void 0===r&&(r=1), void 0===s&&(s=10), _(void 0, void 0, void 0, (function(){
          var c, u, d, p, v;
          return C(this, (function(f){
            switch(f.label){
              case 0:return c=(0, o.decamelizeKeys)({
                page:r, pageSize:s, conditions:t
              }), u=n?"anonymous-api":"api", [
                4, i().get("/".concat(u, "/courses/").concat(e, "/typical-mistakes"), {
                  params:c
                })
              ];
              case 1:return d=f.sent(), p=(0, o.camelizeKeys)(d.data.typical_mistakes), v=(0, a.plainToClass)(l.vh, p, {
                excludeExtraneousValues:!0, exposeDefaultValues:!0
              }), [
                2, {
                  page:r, pageSize:s, total:d.data.total, items:v
                }
              ]
            }
          }))
        }))
      }, I=function(e, t, n, r, s, l, u){
        return void 0===l&&(l=1), void 0===u&&(u=10), _(void 0, void 0, void 0, (function(){
          var d, p, v, f;
          return C(this, (function(h){
            switch(h.label){
              case 0:return d={
                types:[
                  t
                ], order_keys:[
                  r
                ], orders:[
                  s
                ], page:l, page_size:u
              }, p=n?"anonymous-api":"api", [
                4, i().get("/".concat(p, "/courses/").concat(e, "/live-activities"), {
                  params:d
                })
              ];
              case 1:return v=h.sent(), f=(0, o.camelizeKeys)(v.data.items), [
                2, (0, a.plainToClass)(c.Il, f, {
                  excludeExtraneousValues:!0
                })
              ]
            }
          }))
        }))
      }, A=function(e, t){
        return _(void 0, void 0, void 0, (function(){
          var n, r, s;
          return C(this, (function(l){
            switch(l.label){
              case 0:return n=t?"anonymous-api":"api", [
                4, i().get("/".concat(n, "/courses/").concat(e, "?fields=instructors(id,name)"))
              ];
              case 1:return r=l.sent(), s=(0, o.camelizeKeys)(r.data.instructors), [
                2, (0, a.plainToClass)(u.SR, s, {
                  excludeExtraneousValues:!0
                })
              ]
            }
          }))
        }))
      }, M=function(e, t, n, r){
        return _(void 0, void 0, void 0, (function(){
          var s, l, c, u;
          return C(this, (function(d){
            switch(d.label){
              case 0:return s=t?"anonymous-api":"api", [
                4, i().get("/".concat(s, "/studio/").concat(e, "/hot-topics"), {
                  params:{
                    page:n, page_size:r
                  }
                })
              ];
              case 1:return l=d.sent(), c=(0, o.camelizeKeys)(l.data.topics), u=(0, a.plainToClass)(h, c, {
                excludeExtraneousValues:!0
              }), [
                2, {
                  page:n, pageSize:r, pages:l.data.pages, total:l.data.total, topics:u
                }
              ]
            }
          }))
        }))
      }, $=function(e, t){
        var n={
          current_date:t
        };
        return i().get("/api/courses/".concat(e, "/timetables"), {
          params:n
        })
      }, E=function(e){
        return _(void 0, void 0, void 0, (function(){
          var t, n;
          return C(this, (function(o){
            switch(o.label){
              case 0:return[
                4, i().get("/api/org/".concat(e, "/teaching-weeks"))
              ];
              case 1:return t=o.sent(), n=t.data.items, [
                2, (0, a.plainToClass)(m.g4, n)
              ]
            }
          }))
        }))
      }, P=function(e, t){
        return _(void 0, void 0, void 0, (function(){
          return C(this, (function(n){
            switch(n.label){
              case 0:return[
                4, i().post("/api/course/".concat(e, "/teaching-calendar"), t)
              ];
              case 1:return[
                2, n.sent()
              ]
            }
          }))
        }))
      }, N=function(e){
        return _(void 0, void 0, void 0, (function(){
          var t, n;
          return C(this, (function(r){
            switch(r.label){
              case 0:return[
                4, i().get("/api/course/".concat(e, "/teaching-calendars"))
              ];
              case 1:return t=r.sent(), n=(0, o.camelizeKeys)(t.data.items), [
                2, (0, a.plainToClass)(m.VY, n)
              ]
            }
          }))
        }))
      }, O=function(e, t, n){
        return void 0===t&&(t=1), void 0===n&&(n=10), _(void 0, void 0, void 0, (function(){
          var r, s, l;
          return C(this, (function(c){
            switch(c.label){
              case 0:return[
                4, i().get("/api/teaching-calendars", {
                  params:{
                    keyword:e, page:t, page_size:n
                  }
                })
              ];
              case 1:return r=c.sent(), s=(0, o.camelizeKeys)(r.data.items), l=(0, a.plainToClass)(m.tQ, s), [
                2, {
                  page:t, pageSize:n, pages:r.data.pages, total:r.data.total, items:l
                }
              ]
            }
          }))
        }))
      }, j=function(e){
        return _(void 0, void 0, void 0, (function(){
          return C(this, (function(t){
            return[
              2, i().delete("/api/teaching-calendar/".concat(e))
            ]
          }))
        }))
      }, G=function(e, t){
        return _(void 0, void 0, void 0, (function(){
          return C(this, (function(n){
            switch(n.label){
              case 0:return[
                4, i().put("/api/teaching-calendar/".concat(e), t)
              ];
              case 1:return[
                2, n.sent()
              ]
            }
          }))
        }))
      }, B=function(e, t){
        return void 0===t&&(t=!1), _(void 0, void 0, void 0, (function(){
          var t;
          return C(this, (function(n){
            switch(n.label){
              case 0:return[
                4, i().get("/api/courses/".concat(e, "/info?fields=id,name,display_name,second_name,course_subject_id,subject_code,course_code,academic_year,semester,academic_year_id,semester_id,compulsory,start_date,end_date,classroom_schedule,credit,course_type,department(id,name),imported_from,grade(id,name),klass(id,name),instructors(id,name),updated_at,created_user(id,name),created_at,updated_at,public_scope,cover,access,course_attributes(data),course_classification(id,name),classification_id,course_pictures,opened_roles,opened_departments,selected_certification,public_to_orgs,students_count,modules(id,name,sort,syllabuses(id,summary,module_id)),is_blocked,allow_extension_app"))
              ];
              case 1:return t=n.sent(), [
                2, (0, a.plainToClass)(y.QB, (0, o.camelizeKeys)(t.data), {
                  excludeExtraneousValues:!0
                })
              ]
            }
          }))
        }))
      }, L=function(e, t){
        return void 0===t&&(t=!1), _(void 0, void 0, void 0, (function(){
          var n, o;
          return C(this, (function(r){
            switch(r.label){
              case 0:return n=t?"anonymous-api":"api", [
                4, i().get("/".concat(n, "/courses/").concat(e, "/catalog-activities"))
              ];
              case 1:return o=r.sent().data, [
                2, x(x(x([
                ], o.learning_activities, !0), o.exams, !0), o.classrooms, !0)
              ]
            }
          }))
        }))
      }, K=function(e, t){
        return void 0===t&&(t=!1), _(void 0, void 0, void 0, (function(){
          var n;
          return C(this, (function(o){
            switch(o.label){
              case 0:return n=t?"anonymous-api":"api", [
                4, i().get("/".concat(n, "/courses/").concat(e, "/video?type=promotion_video"))
              ];
              case 1:return[
                2, o.sent().data
              ]
            }
          }))
        }))
      }, U=function(e, t){
        return void 0===t&&(t=!1), _(void 0, void 0, void 0, (function(){
          var n;
          return C(this, (function(o){
            switch(o.label){
              case 0:return n=t?"anonymous-api":"api", [
                4, i().get("/".concat(n, "/courses/").concat(e, "/outline"))
              ];
              case 1:return[
                2, o.sent().data.common_fields
              ]
            }
          }))
        }))
      }, W=function(e, t){
        return void 0===t&&(t=!1), _(void 0, void 0, void 0, (function(){
          var n, r;
          return C(this, (function(a){
            switch(a.label){
              case 0:return n=t?"anonymous-api":"api", [
                4, i().get("/".concat(n, "/stat/courses/").concat(e, "/overview"))
              ];
              case 1:return r=a.sent(), [
                2, (0, o.camelizeKeys)(r.data)
              ]
            }
          }))
        }))
      }, z=function(e, t){
        return void 0===t&&(t=!1), _(void 0, void 0, void 0, (function(){
          var n, r;
          return C(this, (function(a){
            switch(a.label){
              case 0:return n=t?"anonymous-api":"api", [
                4, i().get("/".concat(n, "/course-estimates/").concat(e))
              ];
              case 1:return r=a.sent(), [
                2, (0, o.camelizeKeys)(r.data.course_estimates)
              ]
            }
          }))
        }))
      }, F=function(e){
        return _(void 0, void 0, void 0, (function(){
          return C(this, (function(t){
            switch(t.label){
              case 0:return[
                4, i().post("/api/course-estimate", e)
              ];
              case 1:return[
                2, t.sent().data
              ]
            }
          }))
        }))
      }, V=function(e){
        return _(void 0, void 0, void 0, (function(){
          var t;
          return C(this, (function(n){
            switch(n.label){
              case 0:return[
                4, i().get("/api/course-estimate-replies/".concat(e))
              ];
              case 1:return t=n.sent(), [
                2, (0, o.camelizeKeys)(t.data.course_estimate_replies)
              ]
            }
          }))
        }))
      }, H=function(e){
        return _(void 0, void 0, void 0, (function(){
          return C(this, (function(t){
            switch(t.label){
              case 0:return[
                4, i().post("/api/course-estimate-reply", e)
              ];
              case 1:return[
                2, t.sent().data
              ]
            }
          }))
        }))
      }, q=function(e, t){
        return _(void 0, void 0, void 0, (function(){
          return C(this, (function(n){
            switch(n.label){
              case 0:return[
                4, i().put("/api/course-estimates/".concat(e), t)
              ];
              case 1:return[
                2, n.sent().data
              ]
            }
          }))
        }))
      }, Y=function(e){
        return _(void 0, void 0, void 0, (function(){
          return C(this, (function(t){
            switch(t.label){
              case 0:return[
                4, i().put("/api/course-estimate-reply/".concat(e, "/delete"))
              ];
              case 1:return[
                2, t.sent().data
              ]
            }
          }))
        }))
      }, Z=function(e){
        return _(void 0, void 0, void 0, (function(){
          return C(this, (function(t){
            switch(t.label){
              case 0:return[
                4, i().put("/api/course-estimate/".concat(e, "/delete"))
              ];
              case 1:return[
                2, t.sent().data
              ]
            }
          }))
        }))
      }, Q=function(e, t){
        return void 0===t&&(t=!1), _(void 0, void 0, void 0, (function(){
          var n, r;
          return C(this, (function(a){
            switch(a.label){
              case 0:return n=t?"anonymous-api":"api", [
                4, i().get("/".concat(n, "/course-estimates-replies/").concat(e))
              ];
              case 1:return r=a.sent().data, [
                2, (0, o.camelizeKeys)(r.course_estimates_replies)
              ]
            }
          }))
        }))
      }, J=function(e, t){
        return void 0===t&&(t=!1), _(void 0, void 0, void 0, (function(){
          var n;
          return C(this, (function(o){
            switch(o.label){
              case 0:return n=t?"anonymous-api":"api", [
                4, i().get("/".concat(n, "/course/").concat(e, "/registration-state"))
              ];
              case 1:return[
                2, o.sent().data
              ]
            }
          }))
        }))
      }, X=function(e){
        return _(void 0, void 0, void 0, (function(){
          return C(this, (function(t){
            switch(t.label){
              case 0:return[
                4, i().get("/api/course/".concat(e, "/join"))
              ];
              case 1:return[
                2, t.sent().data
              ]
            }
          }))
        }))
      }, ee=function(e, t){
        return _(void 0, void 0, void 0, (function(){
          var n;
          return C(this, (function(o){
            switch(o.label){
              case 0:return n={
                type:t
              }, [
                4, i().get("/api/courses/".concat(e, "/download-print-permissions"), {
                  params:n
                })
              ];
              case 1:return[
                2, o.sent().data
              ]
            }
          }))
        }))
      }, te=function(e, t){
        return _(void 0, void 0, void 0, (function(){
          return C(this, (function(n){
            switch(n.label){
              case 0:return[
                4, i().put("/api/courses/".concat(e, "/download-print-permissions"), t)
              ];
              case 1:return[
                2, n.sent().data
              ]
            }
          }))
        }))
      }, ne=function(e){
        return _(void 0, void 0, void 0, (function(){
          var t, n;
          return C(this, (function(r){
            switch(r.label){
              case 0:return t=e?"anonymous-api":"api", [
                4, i().get("/".concat(t, "/course-classifications"))
              ];
              case 1:return n=r.sent(), [
                2, (0, o.camelizeKeys)(n.data)
              ]
            }
          }))
        }))
      }, oe=function(e){
        return _(void 0, void 0, void 0, (function(){
          var t, n;
          return C(this, (function(r){
            switch(r.label){
              case 0:return t=e?"anonymous-api":"api", [
                4, i().get("/".concat(t, "/curriculum-classifications"))
              ];
              case 1:return n=r.sent(), [
                2, (0, o.camelizeKeys)(n.data)
              ]
            }
          }))
        }))
      }, re=function(e, t){
        return _(void 0, void 0, void 0, (function(){
          var n, r, s, l, c;
          return C(this, (function(u){
            switch(u.label){
              case 0:return n=t?"anonymous-api":"api", [
                4, i().get("/".concat(n, "/courses/public"), {
                  params:(0, o.decamelizeKeys)(e)
                })
              ];
              case 1:return r=u.sent(), s=r.data, l=s.courses, c=k(s, [
                "courses"
              ]), [
                2, b(b({
                }, (0, o.camelizeKeys)(c)), {
                  items:l.map((function(e){
                    return(0, a.plainToClass)(g.ae, e, {
                      excludeExtraneousValues:!0
                    })
                  }))
                })
              ]
            }
          }))
        }))
      }, ie=function(e, t){
        return _(void 0, void 0, void 0, (function(){
          var n, r, s, l, c;
          return C(this, (function(u){
            switch(u.label){
              case 0:return n=t?"anonymous-api":"api", [
                4, i().get("/".concat(n, "/curriculums"), {
                  params:(0, o.decamelizeKeys)(e)
                })
              ];
              case 1:return r=u.sent(), s=r.data, l=s.curriculums, c=k(s, [
                "curriculums"
              ]), [
                2, b(b({
                }, (0, o.camelizeKeys)(c)), {
                  items:l.map((function(e){
                    return(0, a.plainToClass)(g.ml, e, {
                      excludeExtraneousValues:!0
                    })
                  }))
                })
              ]
            }
          }))
        }))
      }, ae=function(e){
        return _(void 0, void 0, void 0, (function(){
          var t, n;
          return C(this, (function(o){
            switch(o.label){
              case 0:return t=e?"anonymous-api":"api", [
                4, i().get("/".concat(t, "/courses/public/stats"))
              ];
              case 1:return n=o.sent(), [
                2, (0, a.plainToClass)(g.BX, n.data)
              ]
            }
          }))
        }))
      }, se=function(e){
        return _(void 0, void 0, void 0, (function(){
          var t, n;
          return C(this, (function(o){
            switch(o.label){
              case 0:return t=e?"anonymous-api":"api", [
                4, i().get("/".concat(t, "/curriculums/stats"))
              ];
              case 1:return n=o.sent(), [
                2, (0, a.plainToClass)(g.HV, n.data)
              ]
            }
          }))
        }))
      }, le=function(e, t, n, r){
        return _(void 0, void 0, void 0, (function(){
          var s, l, c, u;
          return C(this, (function(d){
            switch(d.label){
              case 0:return s={
                page:t, pageSize:n, conditions:r
              }, [
                4, i().get("/api/courses/".concat(e, "/teaching-tasks"), {
                  params:(0, o.decamelizeKeys)(s)
                })
              ];
              case 1:return l=d.sent(), c=(0, o.camelizeKeys)(l.data.items), u=(0, a.plainToClass)(w.m$, c, {
                excludeExtraneousValues:!0, exposeDefaultValues:!0
              }), [
                2, {
                  page:t, pageSize:n, pages:l.data.pages, total:l.data.total, items:u
                }
              ]
            }
          }))
        }))
      }
    }, 882971:(e, t, n)=>{
      n.d(t, {
        A:()=>r
      });
      n(168763);
      var o=n(962893);
      const r=function(){
        function e(){
        }
        return e.success=function(e, t, n){
          void 0===t&&(t=3), void 0===n&&(n=24), this.resetMessage({
            type:"success", content:e, duration:t, top:n
          })
        }, e.warning=function(e, t, n){
          void 0===t&&(t=3), void 0===n&&(n=24), this.resetMessage({
            type:"warning", content:e, duration:t, top:n
          })
        }, e.error=function(e, t, n){
          void 0===t&&(t=3), void 0===n&&(n=24), this.resetMessage({
            type:"error", content:e, duration:t, top:n
          })
        }, e.resetMessage=function(e){
          var t=this, n=e.content, r=e.duration, i=e.top, a=e.type, s=this.messageList.findIndex((function(t){
            return t.type===a&&t.content===e.content
          }));
          s>=0||(this.messageList.push({
            type:e.type, content:e.content
          }), o.default.prototype.$Message.config({
            top:i
          }), o.default.prototype.$Message[
            a
          ]
          ({
            content:n, duration:r
          }), setTimeout((function(){
            t.messageList.splice(s, 1)
          }), 1e3*e.duration||3e3))
        }, e.messageList=[
        ], e
      }
      ()
    }, 886009:(e, t, n)=>{
      n.d(t, {
        H7:()=>f, M8:()=>v, V:()=>w, Zf:()=>c, eb:()=>p, u1:()=>d, wp:()=>u
      });
      n(169218), n(43148), n(658379);
      var o=n(966491), r=n(302543), i=n.n(r), a=function(){
        return(a=Object.assign||function(e){
          for(var t, n=1, o=arguments.length;
          n<o;
          n++)for(var r in t=arguments[
            n
          ])Object.prototype.hasOwnProperty.call(t, r)&&(e[
            r
          ]
          =t[
            r
          ]);
          return e
        }).apply(this, arguments)
      }, s=[
        "doc", "docx", "ppt", "pptx", "xls", "xlsx", "pdf", "txt"
      ], l=s.concat([
        "jpg", "jpeg", "png", "tif", "tiff", "webp", "bmp"
      ]), c=function(e){
        var t=(0, o.fileExtension)(e.name);
        return s.includes(t.toLowerCase())
      }, u=function(e){
        var t=(0, o.fileExtension)(e.name);
        return l.includes(t.toLowerCase())
      }, d=function(e){
        var t="";
        return function e(n){
          i().forEach(n, (function(n){
            "string"!=typeof n?(i().isObject(n)||i().isArray(n))&&e(n):t=n
          }))
        }
        (e), t
      }, p=function(e){
        return"ABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(e)
      }, v=function(e){
        var t=document.createElement("div");
        t.innerHTML=e;
        var n=t.querySelectorAll(".__blank__"), o=[
        ];
        return n.forEach((function(e, t){
          o.push({
            alternates:[
            ], content:"", sort:t, uuid:Number(e.getAttribute("data-id"))
          })
        })), o
      }, f=function(e){
        var t=i().cloneDeep(e);
        return t.forEach((function(e){
          var t=i().shuffle(e.options).map((function(e, t){
            return a(a({
            }, e), {
              id:t, sort:t
            })
          }));
          e.options=t
        })), t
      }, h=[
        "txt", "md", "markdown", "pdf", "html", "xlsx", "xls", "docx", "csv", "eml", "msg", "pptx", "ppt", "xml", "epub", "mdx", "vtt", "properties", "htm"
      ], m=[
        "jpg", "jpeg", "png", "gif", "webp", "svg"
      ], y=[
        "mp3", "m4a", "wav", "webm", "amr"
      ], g=[
        "mp4", "mov", "mpeg", "mpga"
      ];
      function w(e, t){
        var n=function(e){
          return e.map((function(e){
            return".".concat(e.toLowerCase())
          })).join(",")
        };
        switch(e){
          case"document":return n(h);
          case"image":return n(m);
          case"audio":return n(y);
          case"video":return n(g);
          case"custom":default:return t?n(t):""
        }
      }
    }, 904022:(e, t, n)=>{
      n.d(t, {
        A:()=>l
      });
      n(241128), n(995843), n(990345);
      var o=n(599418);
      function r(e, t){
        var n=Object.keys(e);
        if(Object.getOwnPropertySymbols){
          var o=Object.getOwnPropertySymbols(e);
          t&&(o=o.filter((function(t){
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, o)
        }
        return n
      }
      function i(e){
        for(var t=1;
        t<arguments.length;
        t++){
          var n=null!=arguments[
            t
          ]
          ?arguments[
            t
          ]
          :{
          };
          t%2?r(Object(n), !0).forEach((function(t){
            a(e, t, n[
              t
            ])
          })):Object.getOwnPropertyDescriptors?Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }
      function a(e, t, n){
        return t in e?Object.defineProperty(e, t, {
          value:n, enumerable:!0, configurable:!0, writable:!0
        }):e[
          t
        ]
        =n, e
      }
      var s={
        allowedTags:[
          "address", "article", "aside", "footer", "header", "h1", "h2", "h3", "h4", "h5", "h6", "hgroup", "main", "nav", "section", "blockquote", "dd", "div", "dl", "dt", "figcaption", "figure", "hr", "li", "main", "ol", "p", "pre", "ul", "a", "abbr", "b", "bdi", "bdo", "br", "cite", "code", "data", "dfn", "em", "i", "kbd", "mark", "q", "rb", "rp", "rt", "rtc", "ruby", "s", "samp", "small", "span", "strong", "sub", "sup", "time", "u", "var", "wbr", "caption", "col", "colgroup", "table", "tbody", "td", "tfoot", "th", "thead", "tr"
        ], allowedAttributes:{
          a:[
            "href", "name", "target"
          ], img:[
            "src", "srcset", "alt", "title", "width", "height", "loading"
          ]
        }
      };
      const l={
        install(e, t){
          e.prototype.$sanitize=(e, n)=>{
            var r=i(i(i({
            }, s), t), n);
            return o.A.sanitize(e, {
              ALLOWED_TAGS:r.allowedTags, ALLOWED_ATTR:Object.values(r.allowedAttributes).flat()
            })
          }
        }, defaults:s
      }
    }, 912530:(e, t, n)=>{
      n(756029).module("knowledge-graph", [
        "common"
      ]), n(478594)
    }, 945208:(e, t, n)=>{
      n.r(t), n.d(t, {
        default:()=>l
      });
      var o=n(512897), r=n.n(o), i=n(55042), a=n.n(i), s=new(r())({
        id:"avatar", use:"avatar-usage", viewBox:"0 0 32 32", content:'<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" id="avatar">\n<path fill="currentColor" class="st0" d="M27.5,27.2c1.5-1.5,2.6-3.2,3.4-5.1c0,0,0-0.1,0-0.1c0.2-0.4,0.3-0.9,0.5-1.4c0-0.1,0-0.2,0.1-0.3\n\tc0.1-0.4,0.2-0.8,0.3-1.2c0-0.2,0.1-0.4,0.1-0.6c0-0.3,0.1-0.6,0.1-0.9c0.1-0.5,0.1-1,0.1-1.6c0-4.3-1.7-8.3-4.7-11.3\n\tc-3-3-7-4.7-11.3-4.7C11.7,0,7.7,1.7,4.7,4.7c-3,3-4.7,7-4.7,11.3c0,0.5,0,1,0.1,1.5c0,0.3,0.1,0.5,0.1,0.8c0,0.2,0.1,0.5,0.1,0.7\n\tc0.1,0.4,0.2,0.7,0.3,1c0,0.1,0.1,0.3,0.1,0.4c0.1,0.4,0.3,0.8,0.4,1.2c0,0.1,0,0.1,0.1,0.2c0.2,0.4,0.4,0.9,0.6,1.3c0,0,0,0,0,0.1\n\tc0.7,1.3,1.5,2.6,2.6,3.7c0,0,0,0,0,0l0,0c0.1,0.1,0.2,0.3,0.4,0.4c3,3,7,4.7,11.3,4.7c4.3,0,8.3-1.7,11.3-4.7\n\tC27.4,27.3,27.4,27.2,27.5,27.2L27.5,27.2C27.5,27.2,27.5,27.2,27.5,27.2z M5.4,5.4C8.2,2.6,12,1,16,1s7.8,1.6,10.6,4.4S31,12,31,16\n\tc0,0.5,0,1-0.1,1.5c0,0.2-0.1,0.5-0.1,0.7c0,0.2-0.1,0.5-0.1,0.7c-0.1,0.3-0.2,0.7-0.2,1c0,0.1-0.1,0.2-0.1,0.4\n\tc-0.1,0.4-0.2,0.8-0.4,1.1c0,0.1,0,0.1-0.1,0.2c-0.2,0.4-0.3,0.8-0.6,1.2c0,0,0,0,0,0c-0.6,1.2-1.5,2.4-2.4,3.4\n\tc-1-1.3-3.3-2.2-6-2.2c-3,0-3-1.1-2.7-2.3c0.4-1.5,3.1-0.8,3.9-4.8c0,0,1.5-1.1,1.7-2.3s-0.7-1.8-1.6-1.2c0,0,1-6.7-4-7.8\n\tc-0.7-0.2-1.6-0.3-2.4-0.3c-1.1,0-2,0.2-2.8,0.4c-0.4,0.1-0.8,0.3-1.1,0.6c-0.6,0-1.6,0.1-2.4-0.1c0,0,0.1,1.4,0.3,2.4\n\tc0,0.1-0.5-0.1-0.7,0.6C9,9.7,9.2,11.4,9.4,12.4c0,0.6,0.1,1.1,0.1,1.1c-0.9-0.5-1.7,0-1.6,1.2C8,15.9,9.5,17,9.5,17\n\tc0.8,3.9,3.4,3.2,3.9,4.8c0.3,1.2,0.3,2.2-2.7,2.3c-2.6,0-4.7,0.9-5.8,2.1C4.6,25.7,4.3,25.4,4,25c0,0,0,0,0,0\n\tc-0.3-0.4-0.5-0.7-0.8-1.1c0,0,0,0,0-0.1c-0.2-0.4-0.4-0.7-0.6-1.1c0,0,0-0.1-0.1-0.1c-0.2-0.4-0.3-0.7-0.5-1.1\n\tc0-0.1-0.1-0.2-0.1-0.3c-0.1-0.3-0.2-0.7-0.3-1c0-0.2-0.1-0.3-0.1-0.5c-0.1-0.3-0.2-0.6-0.2-0.9c0-0.2-0.1-0.5-0.1-0.7\n\tc0-0.2-0.1-0.4-0.1-0.7C1,17,1,16.5,1,16C1,12,2.6,8.2,5.4,5.4z" />\n</symbol>'
      });
      a().add(s);
      const l=s
    }, 971793:(e, t, n)=>{
      n.d(t, {
        BX:()=>l, HV:()=>c, ae:()=>a, ml:()=>s
      });
      var o=n(738645), r=n(510543), i=function(e, t, n, o){
        var r, i=arguments.length, a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t, n):o;
        if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e, t, n, o);
        else for(var s=e.length-1;
        s>=0;
        s--)(r=e[
          s
        ])&&(a=(i<3?r(a):i>3?r(t, n, a):r(t, n))||a);
        return i>3&&a&&Object.defineProperty(t, n, a), a
      }, a=function(){
        function e(){
          this.type="course", this.nodeCount=0, this.resourceCount=0, this.studentCount=0, this.chapterCount=0
        }
        return e.prototype.getUrl=function(){
          return"/course/".concat(this.id)
        }, e.prototype.getAverageScore=function(){
          throw new Error("Method not implemented.")
        }, i([
          (0, o.v)()
        ], e.prototype, "id", void 0), i([
          (0, o.v)({
            name:"display_name"
          })
        ], e.prototype, "name", void 0), i([
          (0, o.v)({
            name:"small_cover"
          }), (0, o.v)({
            name:"cover"
          }), (0, r.d)((function(e){
            var t=e.obj;
            return t.small_cover||t.cover
          }))
        ], e.prototype, "cover", void 0), i([
          (0, o.v)({
            name:"knowledge_node_count"
          })
        ], e.prototype, "nodeCount", void 0), i([
          (0, o.v)({
            name:"activity_count"
          })
        ], e.prototype, "resourceCount", void 0), i([
          (0, o.v)({
            name:"course_attributes"
          }), (0, r.d)((function(e){
            var t;
            return(null===(t=e.obj.course_attributes)||void 0===t?void 0:t.student_count)||0
          }))
        ], e.prototype, "studentCount", void 0), i([
          (0, o.v)({
            name:"syllabus_count"
          }), (0, o.v)({
            name:"module_count"
          }), (0, r.d)((function(e){
            var t=e.obj;
            return(t.module_count||0)+(t.syllabus_count||0)
          }))
        ], e.prototype, "chapterCount", void 0), i([
          (0, o.v)({
            name:"public_scope"
          })
        ], e.prototype, "scope", void 0), i([
          (0, o.v)({
            name:"course_public_settings"
          }), (0, r.d)((function(e){
            var t;
            return!!(null===(t=e.obj.course_public_settings)||void 0===t?void 0:t.sign_up_charge_amount)
          }))
        ], e.prototype, "isPaidCourse", void 0), i([
          (0, o.v)({
            name:"selected_certification"
          }), (0, r.d)((function(e){
            var t;
            return(null===(t=e.obj.selected_certification)||void 0===t?void 0:t.certification_title)||""
          }))
        ], e.prototype, "certification", void 0), i([
          (0, o.v)(), (0, r.d)((function(e){
            var t=e.value;
            if(t)return t.map((function(e){
              var t=e.id, n=e.avatar_small_url;
              return{
                id:t, name:e.name, avatar:n
              }
            }))
          }))
        ], e.prototype, "instructors", void 0), i([
          (0, o.v)({
            name:"is_started"
          })
        ], e.prototype, "isStarted", void 0), i([
          (0, o.v)({
            name:"credit_state"
          }), (0, r.d)((function(e){
            return!!e.obj.credit_state
          }))
        ], e.prototype, "isAir", void 0), e
      }
      (), s=function(){
        function e(){
          this.type="curriculum", this.nodeCount=0, this.resourceCount=0, this.studentCount=0, this.chapterCount=0, this.scope=""
        }
        return e.prototype.getUrl=function(){
          return"/curriculum/".concat(this.id)
        }, e.prototype.getAverageScore=function(){
          throw new Error("Method not implemented.")
        }, i([
          (0, o.v)()
        ], e.prototype, "id", void 0), i([
          (0, o.v)()
        ], e.prototype, "name", void 0), i([
          (0, o.v)()
        ], e.prototype, "cover", void 0), i([
          (0, o.v)({
            name:"course_public_settings"
          }), (0, r.d)((function(e){
            var t;
            return!!(null===(t=e.obj.course_public_settings)||void 0===t?void 0:t.sign_up_charge_amount)
          }))
        ], e.prototype, "isPaidCourse", void 0), i([
          (0, o.v)({
            name:"selected_certification"
          }), (0, r.d)((function(e){
            var t;
            return(null===(t=e.obj.selected_certification)||void 0===t?void 0:t.certification_title)||""
          }))
        ], e.prototype, "certification", void 0), i([
          (0, o.v)({
            name:"is_started"
          })
        ], e.prototype, "isStarted", void 0), i([
          (0, o.v)({
            name:"credit_state"
          }), (0, r.d)((function(e){
            return!!e.obj.credit_state
          }))
        ], e.prototype, "isAir", void 0), e
      }
      (), l=function(){
        function e(){
        }
        return i([
          (0, o.v)({
            name:"course_count"
          })
        ], e.prototype, "courseCount", void 0), i([
          (0, o.v)({
            name:"student_count"
          })
        ], e.prototype, "studentCount", void 0), e
      }
      (), c=function(){
        function e(){
        }
        return i([
          (0, o.v)({
            name:"curriculum_count"
          })
        ], e.prototype, "courseCount", void 0), i([
          (0, o.v)({
            name:"student_count"
          })
        ], e.prototype, "studentCount", void 0), e
      }
      ()
    }, 980797:(e, t, n)=>{
      n.d(t, {
        j:()=>p, p:()=>d
      });
      n(540590), n(418665), n(269193), n(658379), n(14602);
      var o=n(595738), r=n(384027), i=n(552979), a=n(769075), s=n(574799), l=n(786673), c=function(e, t, n, o){
        return new(n||(n=Promise))((function(r, i){
          function a(e){
            try{
              l(o.next(e))
            }
            catch(e){
              i(e)
            }
          }
          function s(e){
            try{
              l(o.throw(e))
            }
            catch(e){
              i(e)
            }
          }
          function l(e){
            var t;
            e.done?r(e.value):(t=e.value, t instanceof n?t:new n((function(e){
              e(t)
            }))).then(a, s)
          }
          l((o=o.apply(e, t||[
          ])).next())
        }))
      }, u=function(e, t){
        var n, o, r, i, a={
          label:0, sent:function(){
            if(1&r[
              0
            ])throw r[
              1
            ];
            return r[
              1
            ]
          }, trys:[
          ], ops:[
          ]
        };
        return i={
          next:s(0), throw:s(1), return:s(2)
        }, "function"==typeof Symbol&&(i[
          Symbol.iterator
        ]
        =function(){
          return this
        }), i;
        function s(s){
          return function(l){
            return function(s){
              if(n)throw new TypeError("Generator is already executing.");
              for(;
              i&&(i=0, s[
                0
              ]
              &&(a=0)), a;
              )try{
                if(n=1, o&&(r=2&s[
                  0
                ]
                ?o.return:s[
                  0
                ]
                ?o.throw||((r=o.return)&&r.call(o), 0):o.next)&&!(r=r.call(o, s[
                  1
                ])).done)return r;
                switch(o=0, r&&(s=[
                  2&s[
                    0
                  ], r.value
                ]), s[
                  0
                ]){
                  case 0:case 1:r=s;
                  break;
                  case 4:return a.label++, {
                    value:s[
                      1
                    ], done:!1
                  };
                  case 5:a.label++, o=s[
                    1
                  ], s=[
                    0
                  ];
                  continue;
                  case 7:s=a.ops.pop(), a.trys.pop();
                  continue;
                  default:if(!(r=a.trys, (r=r.length>0&&r[
                    r.length-1
                  ])||6!==s[
                    0
                  ]
                  &&2!==s[
                    0
                  ])){
                    a=0;
                    continue
                  }
                  if(3===s[
                    0
                  ]
                  &&(!r||s[
                    1
                  ]
                  >r[
                    0
                  ]
                  &&s[
                    1
                  ]
                  <r[
                    3
                  ])){
                    a.label=s[
                      1
                    ];
                    break
                  }
                  if(6===s[
                    0
                  ]
                  &&a.label<r[
                    1
                  ]){
                    a.label=r[
                      1
                    ], r=s;
                    break
                  }
                  if(r&&a.label<r[
                    2
                  ]){
                    a.label=r[
                      2
                    ], a.ops.push(s);
                    break
                  }
                  r[
                    2
                  ]
                  &&a.ops.pop(), a.trys.pop();
                  continue
                }
                s=t.call(e, a)
              }
              catch(e){
                s=[
                  6, e
                ], o=0
              }
              finally{
                n=r=0
              }
              if(5&s[
                0
              ])throw s[
                1
              ];
              return{
                value:s[
                  0
                ]
                ?s[
                  1
                ]
                :void 0, done:!0
              }
            }
            ([
              s, l
            ])
          }
        }
      }, d=(0, o.KR)(!1), p=function(){
        var e=(0, o.EW)((function(){
          var e;
          return(null===(e=s.Nt.value)||void 0===e?void 0:e.getFlatProblems())||[
          ]
        })), t=(0, o.EW)((function(){
          return e.value.filter((function(e){
            return e.checked
          }))
        })), n=(0, o.EW)((function(){
          return!!e.value.length&&e.value.every((function(e){
            return e.checked
          }))
        }));
        return(0, o.wB)(d, (function(e){
          return c(void 0, void 0, void 0, (function(){
            var t, n, r, i, a, l, c;
            return u(this, (function(u){
              switch(u.label){
                case 0:return((null===(t=s.Nt.value)||void 0===t?void 0:t.getCollapsedRoots())||[
                ]).length?(null===(n=s.Nt.value)||void 0===n||n.unManageAll(), null===(r=s.Nt.value)||void 0===r||r.expandAll(), [
                  4, (0, o.dY)()
                ]):[
                  3, 2
                ];
                case 1:u.sent(), null===(i=s.Nt.value)||void 0===i||i.repaintEndpoints(), null===(a=s.Nt.value)||void 0===a||a.connect(), s.yg.value=(null===(l=s.Nt.value)||void 0===l?void 0:l.isCollapsedAll)||!1, u.label=2;
                case 2:return null===(c=s.Nt.value)||void 0===c||c.getFlatProblems().forEach((function(t){
                  var n, o;
                  e?null===(n=t.connector)||void 0===n||n.disabledDragToConnect():null===(o=t.connector)||void 0===o||o.enabledDragToConnect()
                })), [
                  2
                ]
              }
            }))
          }))
        })), {
          batchDeleteProblemsMode:d, problems:e, checkedProblems:t, isCheckedAll:n, toggleCheckAll:function(){
            var t, o=n.value;
            null===(t=e.value)||void 0===t||t.forEach((function(e){
              e.checked=!o
            }))
          }, del:function(){
            return c(void 0, void 0, void 0, (function(){
              var n, c, p, v, f;
              return u(this, (function(u){
                switch(u.label){
                  case 0:return[
                    4, a.A.open({
                      title:i.default.t("delete"), type:"warning", content:i.default.t("problemGraph.batchDeleteProblemTips", [
                        t.value.length
                      ])
                    })
                  ];
                  case 1:if(!u.sent())return[
                    2
                  ];
                  n=t.value.map((function(e){
                    return e.id
                  })), u.label=2;
                  case 2:return u.trys.push([
                    2, 5, 6, 7
                  ]), [
                    4, (0, l.eK)(s.yW.value.id, n)
                  ];
                  case 3:return u.sent(), null===(c=s.Nt.value)||void 0===c||c.unManageAll(), t.value.forEach((function(e){
                    var t;
                    null===(t=s.Nt.value)||void 0===t||t.removeProblem(e)
                  })), [
                    4, (0, o.dY)()
                  ];
                  case 4:return u.sent(), null===(p=s.Nt.value)||void 0===p||p.repaintEndpoints(), null===(v=s.Nt.value)||void 0===v||v.connect(), s.yg.value=(null===(f=s.Nt.value)||void 0===f?void 0:f.isCollapsedAll)||!1, r.Message.success(i.default.t("delete_success")), [
                    3, 7
                  ];
                  case 5:return u.sent(), r.Message.error(i.default.t("delete_error")), [
                    3, 7
                  ];
                  case 6:return d.value=!!e.value.length, [
                    7
                  ];
                  case 7:return[
                    2
                  ]
                }
              }))
            }))
          }, cancel:function(){
            var t;
            d.value=!1, null===(t=e.value)||void 0===t||t.forEach((function(e){
              e.checked=!1
            }))
          }
        }
      }
    }
  }
]);
