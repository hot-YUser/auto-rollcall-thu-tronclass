(self.webpackChunklms=self.webpackChunklms||[
]).push([
  [
    27605
  ], {
    19505:(e, t, n)=>{
      n.d(t, {
        bM:()=>E, W1:()=>T, qA:()=>b, dj:()=>m, qE:()=>g, TP:()=>N, dc:()=>C, o1:()=>k, o7:()=>w, d8:()=>_, eh:()=>D, ZY:()=>y, YO:()=>R, $u:()=>S, Oi:()=>x
      });
      n(540590), n(418665), n(269193), n(14602);
      var o=n(272505), a=n.n(o), i=n(220521), r=n(531348), l=n(218831), s=n(920453), c=n(738645), u=n(510543), d=n(152229), p=function(e, t, n, o){
        var a, i=arguments.length, r=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t, n):o;
        if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e, t, n, o);
        else for(var l=e.length-1;
        l>=0;
        l--)(a=e[
          l
        ])&&(r=(i<3?a(r):i>3?a(t, n, r):a(t, n))||r);
        return i>3&&r&&Object.defineProperty(t, n, r), r
      }, f=function(){
        function e(){
          this.children=[
          ]
        }
        return p([
          (0, c.v)({
            name:"id"
          })
        ], e.prototype, "id", void 0), p([
          (0, c.v)({
            name:"name"
          })
        ], e.prototype, "name", void 0), p([
          (0, c.v)(), (0, u.d)((function(e){
            e.value;
            return e.obj.name
          }))
        ], e.prototype, "title", void 0), p([
          (0, c.v)(), (0, u.d)((function(e){
            e.value;
            return e.obj.id
          }))
        ], e.prototype, "nodeKey", void 0), p([
          (0, c.v)(), (0, d.Z)((function(){
            return e
          }))
        ], e.prototype, "children", void 0), e
      }
      (), v=function(e, t, n, o){
        return new(n||(n=Promise))((function(a, i){
          function r(e){
            try{
              s(o.next(e))
            }
            catch(e){
              i(e)
            }
          }
          function l(e){
            try{
              s(o.throw(e))
            }
            catch(e){
              i(e)
            }
          }
          function s(e){
            var t;
            e.done?a(e.value):(t=e.value, t instanceof n?t:new n((function(e){
              e(t)
            }))).then(r, l)
          }
          s((o=o.apply(e, t||[
          ])).next())
        }))
      }, h=function(e, t){
        var n, o, a, i, r={
          label:0, sent:function(){
            if(1&a[
              0
            ])throw a[
              1
            ];
            return a[
              1
            ]
          }, trys:[
          ], ops:[
          ]
        };
        return i={
          next:l(0), throw:l(1), return:l(2)
        }, "function"==typeof Symbol&&(i[
          Symbol.iterator
        ]
        =function(){
          return this
        }), i;
        function l(l){
          return function(s){
            return function(l){
              if(n)throw new TypeError("Generator is already executing.");
              for(;
              i&&(i=0, l[
                0
              ]
              &&(r=0)), r;
              )try{
                if(n=1, o&&(a=2&l[
                  0
                ]
                ?o.return:l[
                  0
                ]
                ?o.throw||((a=o.return)&&a.call(o), 0):o.next)&&!(a=a.call(o, l[
                  1
                ])).done)return a;
                switch(o=0, a&&(l=[
                  2&l[
                    0
                  ], a.value
                ]), l[
                  0
                ]){
                  case 0:case 1:a=l;
                  break;
                  case 4:return r.label++, {
                    value:l[
                      1
                    ], done:!1
                  };
                  case 5:r.label++, o=l[
                    1
                  ], l=[
                    0
                  ];
                  continue;
                  case 7:l=r.ops.pop(), r.trys.pop();
                  continue;
                  default:if(!(a=r.trys, (a=a.length>0&&a[
                    a.length-1
                  ])||6!==l[
                    0
                  ]
                  &&2!==l[
                    0
                  ])){
                    r=0;
                    continue
                  }
                  if(3===l[
                    0
                  ]
                  &&(!a||l[
                    1
                  ]
                  >a[
                    0
                  ]
                  &&l[
                    1
                  ]
                  <a[
                    3
                  ])){
                    r.label=l[
                      1
                    ];
                    break
                  }
                  if(6===l[
                    0
                  ]
                  &&r.label<a[
                    1
                  ]){
                    r.label=a[
                      1
                    ], a=l;
                    break
                  }
                  if(a&&r.label<a[
                    2
                  ]){
                    r.label=a[
                      2
                    ], r.ops.push(l);
                    break
                  }
                  a[
                    2
                  ]
                  &&r.ops.pop(), r.trys.pop();
                  continue
                }
                l=t.call(e, r)
              }
              catch(e){
                l=[
                  6, e
                ], o=0
              }
              finally{
                n=a=0
              }
              if(5&l[
                0
              ])throw l[
                1
              ];
              return{
                value:l[
                  0
                ]
                ?l[
                  1
                ]
                :void 0, done:!0
              }
            }
            ([
              l, s
            ])
          }
        }
      };
      function m(e, t, n){
        return v(this, void 0, void 0, (function(){
          var o, r, c, u;
          return h(this, (function(d){
            switch(d.label){
              case 0:return o=(0, l.decamelizeKeys)({
                page:t, pageSize:n, includeMakeUp:!0
              }), [
                4, a().get("/api/exams/".concat(e, "/retake-record"), {
                  params:o
                })
              ];
              case 1:return r=d.sent(), c=(0, l.camelizeKeys)(r.data.items), u=(0, s.plainToClass)(i.xg, c, {
                excludeExtraneousValues:!0
              }), [
                2, {
                  page:t, pageSize:n, pages:r.data.pages, total:r.data.total, items:u
                }
              ]
            }
          }))
        }))
      }
      function g(e){
        return v(this, void 0, void 0, (function(){
          return h(this, (function(t){
            return[
              2, a().get("/api/exams/".concat(e, "/subjective-questions"))
            ]
          }))
        }))
      }
      function b(e){
        return v(this, void 0, void 0, (function(){
          return h(this, (function(t){
            return[
              2, a().get("/api/exams/".concat(e))
            ]
          }))
        }))
      }
      function y(e, t){
        return v(this, void 0, void 0, (function(){
          var n, o;
          return h(this, (function(i){
            switch(i.label){
              case 0:return[
                4, a().get("/api/subjects/".concat(e), {
                  params:{
                    can_select_sub_subject:!0, exam_id:t
                  }
                })
              ];
              case 1:return n=i.sent(), o=(0, l.camelizeKeys)(n.data), [
                2, (0, s.plainToClass)(r.B, o, {
                  excludeExtraneousValues:!0
                })
              ]
            }
          }))
        }))
      }
      function w(e, t, n){
        return v(this, void 0, void 0, (function(){
          return h(this, (function(o){
            return[
              2, a().get("/api/exams/".concat(e, "/subjects/").concat(t, "/examinees?is_makeup_exam=").concat(n))
            ]
          }))
        }))
      }
      function _(e, t, n){
        return v(this, void 0, void 0, (function(){
          return h(this, (function(o){
            return[
              2, a().get("/api/exams/".concat(e, "/subjects/").concat(t, "/groups?is_makeup_exam=").concat(n))
            ]
          }))
        }))
      }
      function C(e, t, n, o){
        return v(this, void 0, void 0, (function(){
          return h(this, (function(i){
            return[
              2, a().get("/api/exams/".concat(e, "/subjects/").concat(t, "/examinees/").concat(n, "/submissions?is_makeup_exam=").concat(o))
            ]
          }))
        }))
      }
      function k(e, t, n, o){
        return v(this, void 0, void 0, (function(){
          return h(this, (function(i){
            return[
              2, a().get("/api/exams/".concat(e, "/subjects/").concat(t, "/groups/").concat(n, "/submissions?is_makeup_exam=").concat(o))
            ]
          }))
        }))
      }
      function x(e, t, n){
        return v(this, void 0, void 0, (function(){
          return h(this, (function(o){
            return[
              2, a().put("/api/exams/".concat(e, "/submissions/").concat(t, "/comment"), n)
            ]
          }))
        }))
      }
      function R(e, t){
        return v(this, void 0, void 0, (function(){
          return h(this, (function(n){
            return[
              2, a().post("/api/exams/".concat(e, "/give-score"), t)
            ]
          }))
        }))
      }
      function S(e, t){
        return v(this, void 0, void 0, (function(){
          return h(this, (function(n){
            return[
              2, a().post("/api/exams/".concat(e, "/give-scores"), t)
            ]
          }))
        }))
      }
      function E(e){
        return v(this, void 0, void 0, (function(){
          return h(this, (function(t){
            return[
              2, a().delete("/api/uploads/marked_attachment/".concat(e))
            ]
          }))
        }))
      }
      var T=function(e){
        return v(void 0, void 0, void 0, (function(){
          var t;
          return h(this, (function(n){
            switch(n.label){
              case 0:return[
                4, a().get("/api/courses/".concat(e, "/exams"))
              ];
              case 1:return t=n.sent().data, [
                2, (0, s.plainToClass)(i.yf, (0, l.camelizeKeys)(t.exams))
              ]
            }
          }))
        }))
      }, D=function(e){
        return v(void 0, void 0, void 0, (function(){
          var t;
          return h(this, (function(n){
            switch(n.label){
              case 0:return[
                4, a().get("/api/course/".concat(e, "/knowledge-nodes"))
              ];
              case 1:return t=n.sent(), [
                2, (0, s.plainToClass)(f, t.data.items, {
                  excludeExtraneousValues:!0
                })
              ]
            }
          }))
        }))
      }, N=function(e, t, n, o){
        return v(void 0, void 0, void 0, (function(){
          var i, c;
          return h(this, (function(u){
            switch(u.label){
              case 0:return i="/api/exams/".concat(e, "/subjects?keyword=").concat(n, "&is_makeup_exam=").concat(t), "all"!==o&&(i+="&subject_type=".concat(o)), [
                4, a().get(i)
              ];
              case 1:return c=u.sent(), [
                2, (0, s.plainToClass)(r.B, (0, l.camelizeKeys)(c.data.subjects), {
                  excludeExtraneousValues:!0, exposeDefaultValues:!0
                })
              ]
            }
          }))
        }))
      }
    }, 27550:(e, t, n)=>{
      n.d(t, {
        A:()=>r
      });
      var o=n(574799), a="relative";
      const i={
        props:{
          fixed:{
            type:Boolean, default:!1
          }, mask:{
            type:Boolean, default(){
              return this.fixed
            }
          }, width:{
            type:Number, default:()=>o.yb?400:500
          }, button:{
            type:Boolean, default:!0
          }, closeButton:{
            type:Boolean, default:!1
          }, value:{
            type:Boolean, default:!1
          }, parentPosition:{
            type:[
              String, Boolean
            ], default:a
          }
        }, data(){
          return{
            open:this.value, maskHeight:0
          }
        }, computed:{
          isShowMask(){
            return this.open&&this.mask
          }
        }, watch:{
          value(e){
            this.open=e
          }, open(e){
            this.$emit("on-visible-change", e), e?this.$emit("on-open"):this.$emit("on-close")
          }
        }, methods:{
          toggleDrawer(){
            this.open=!this.open, this.$emit("input", this.open)
          }, closeDrawer(){
            this.open=!1, this.$emit("input", this.open)
          }, onAfterLeave(){
            this.$refs.eleRef&&(this.$refs.eleRef.style.width=0)
          }, onBeforeEnter(){
            this.$refs.eleRef.style.width="".concat(this.width, "px")
          }
        }, mounted(){
          var e=this.$refs.eleRef, t=e.parentElement;
          if(""===t.style.position&&(!0===this.parentPosition?t.style.position=a:this.parentPosition&&(t.style.position=this.parentPosition)), !this.fixed){
            var n=e.getBoundingClientRect().top;
            e.style.height="calc(100vh - ".concat(n, "px)")
          }
          e.style.width=this.open?"".concat(this.width, "px"):"0px", this.maskHeight=e.clientHeight
        }
      };
      const r=(0, n(514486).A)(i, (function(){
        var e=this, t=e.$createElement, n=e._self._c||t;
        return n("div", {
          ref:"eleRef", staticClass:"drawer-wrapper", class:{
            fixed:e.fixed
          }
        }, [
          n("transition", {
            attrs:{
              name:"move-right"
            }, on:{
              "after-leave":e.onAfterLeave, "before-enter":e.onBeforeEnter
            }
          }, [
            n("div", {
              directives:[
                {
                  name:"show", rawName:"v-show", value:e.open, expression:"open"
                }
              ], staticClass:"drawer-content", style:{
                width:e.width+"px"
              }
            }, [
              e._t("default")
            ], 2)
          ]), e._v(" "), n("div", {
            directives:[
              {
                name:"show", rawName:"v-show", value:e.button||e.closeButton&&e.open, expression:"button || (closeButton && open)"
              }
            ], staticClass:"handle-btn", class:{
              open:e.open
            }, style:{
              right:e.open?e.width-1+"px":""
            }, on:{
              click:e.toggleDrawer
            }
          }, [
            n("Icon", {
              attrs:{
                type:"ios-arrow-forward"
              }
            }), e._v(" "), e.open?e._e():n("span", {
              staticClass:"text"
            }, [
              e._v(e._s(e.$t("knowledgeGraph.attributes")))
            ])
          ], 1), e._v(" "), e.isShowMask?n("div", {
            staticClass:"mask", style:{
              height:e.maskHeight+"px"
            }, on:{
              click:e.closeDrawer
            }
          }):e._e()
        ], 1)
      }), [
      ], !1, null, "3f7264c8", null).exports
    }, 27761:(e, t, n)=>{
      n.d(t, {
        AO:()=>g, H_:()=>v, OR:()=>m, WG:()=>y, Zw:()=>u, dK:()=>b, ds:()=>h, iZ:()=>f, qz:()=>d, tV:()=>w, wJ:()=>p
      });
      n(540590), n(418665), n(269193), n(14602);
      var o=n(272505), a=n.n(o), i=n(920453), r=n(218831), l=n(531348), s=function(e, t, n, o){
        return new(n||(n=Promise))((function(a, i){
          function r(e){
            try{
              s(o.next(e))
            }
            catch(e){
              i(e)
            }
          }
          function l(e){
            try{
              s(o.throw(e))
            }
            catch(e){
              i(e)
            }
          }
          function s(e){
            var t;
            e.done?a(e.value):(t=e.value, t instanceof n?t:new n((function(e){
              e(t)
            }))).then(r, l)
          }
          s((o=o.apply(e, t||[
          ])).next())
        }))
      }, c=function(e, t){
        var n, o, a, i, r={
          label:0, sent:function(){
            if(1&a[
              0
            ])throw a[
              1
            ];
            return a[
              1
            ]
          }, trys:[
          ], ops:[
          ]
        };
        return i={
          next:l(0), throw:l(1), return:l(2)
        }, "function"==typeof Symbol&&(i[
          Symbol.iterator
        ]
        =function(){
          return this
        }), i;
        function l(l){
          return function(s){
            return function(l){
              if(n)throw new TypeError("Generator is already executing.");
              for(;
              i&&(i=0, l[
                0
              ]
              &&(r=0)), r;
              )try{
                if(n=1, o&&(a=2&l[
                  0
                ]
                ?o.return:l[
                  0
                ]
                ?o.throw||((a=o.return)&&a.call(o), 0):o.next)&&!(a=a.call(o, l[
                  1
                ])).done)return a;
                switch(o=0, a&&(l=[
                  2&l[
                    0
                  ], a.value
                ]), l[
                  0
                ]){
                  case 0:case 1:a=l;
                  break;
                  case 4:return r.label++, {
                    value:l[
                      1
                    ], done:!1
                  };
                  case 5:r.label++, o=l[
                    1
                  ], l=[
                    0
                  ];
                  continue;
                  case 7:l=r.ops.pop(), r.trys.pop();
                  continue;
                  default:if(!(a=r.trys, (a=a.length>0&&a[
                    a.length-1
                  ])||6!==l[
                    0
                  ]
                  &&2!==l[
                    0
                  ])){
                    r=0;
                    continue
                  }
                  if(3===l[
                    0
                  ]
                  &&(!a||l[
                    1
                  ]
                  >a[
                    0
                  ]
                  &&l[
                    1
                  ]
                  <a[
                    3
                  ])){
                    r.label=l[
                      1
                    ];
                    break
                  }
                  if(6===l[
                    0
                  ]
                  &&r.label<a[
                    1
                  ]){
                    r.label=a[
                      1
                    ], a=l;
                    break
                  }
                  if(a&&r.label<a[
                    2
                  ]){
                    r.label=a[
                      2
                    ], r.ops.push(l);
                    break
                  }
                  a[
                    2
                  ]
                  &&r.ops.pop(), r.trys.pop();
                  continue
                }
                l=t.call(e, r)
              }
              catch(e){
                l=[
                  6, e
                ], o=0
              }
              finally{
                n=a=0
              }
              if(5&l[
                0
              ])throw l[
                1
              ];
              return{
                value:l[
                  0
                ]
                ?l[
                  1
                ]
                :void 0, done:!0
              }
            }
            ([
              l, s
            ])
          }
        }
      }, u=function(e){
        return s(void 0, void 0, void 0, (function(){
          var t;
          return c(this, (function(n){
            return t=e?1:0, [
              2, a().get("/api/subject-libs?with_folder=".concat(t))
            ]
          }))
        }))
      }, d=function(e, t){
        return s(void 0, void 0, void 0, (function(){
          var n;
          return c(this, (function(o){
            return n=t?1:0, [
              2, a().get("/api/course/".concat(e, "/subject-libs?with_folder=").concat(n))
            ]
          }))
        }))
      }, p=function(){
        return s(void 0, void 0, void 0, (function(){
          return c(this, (function(e){
            return[
              2, a().get("/api/subject-libs?lib_type=questionnaire")
            ]
          }))
        }))
      }, f=function(e){
        return s(void 0, void 0, void 0, (function(){
          return c(this, (function(t){
            return[
              2, a().post("/api/subject-libs", {
                title:e
              })
            ]
          }))
        }))
      }, v=function(e, t, n){
        return s(void 0, void 0, void 0, (function(){
          return c(this, (function(o){
            return[
              "exam", "folder"
            ].includes(n)?[
              2, a().post("/api/course/".concat(e, "/subject-libs?lib_type=").concat(n), {
                title:t
              })
            ]
            :(console.error("libType: ".concat(n, " is invalidate.")), [
              2
            ])
          }))
        }))
      }, h=function(e){
        return s(void 0, void 0, void 0, (function(){
          return c(this, (function(t){
            return[
              2, a().post("/api/subject-libs?lib_type=questionnaire", {
                title:e
              })
            ]
          }))
        }))
      }, m=function(e, t){
        return s(void 0, void 0, void 0, (function(){
          var n;
          return c(this, (function(o){
            return n="/api/subject-libs/".concat(t, "/copy?examId=").concat(e), [
              2, a().post(n)
            ]
          }))
        }))
      }, g=function(e, t){
        return s(void 0, void 0, void 0, (function(){
          var n;
          return c(this, (function(o){
            return n="/api/subject-libs/".concat(t, "/copy?classroomId=").concat(e), [
              2, a().post(n)
            ]
          }))
        }))
      }, b=function(e, t){
        return s(void 0, void 0, void 0, (function(){
          var n;
          return c(this, (function(o){
            return n="/api/subject-libs/".concat(t, "/copy?videoQuizId=").concat(e), [
              2, a().post(n)
            ]
          }))
        }))
      }, y=function(e, t){
        return s(void 0, void 0, void 0, (function(){
          var n;
          return c(this, (function(o){
            return n="/api/subject-libs/".concat(t, "/copy?questionnaireId=").concat(e), [
              2, a().post(n)
            ]
          }))
        }))
      }, w=function(e, t, n){
        return s(void 0, void 0, void 0, (function(){
          var o, s;
          return c(this, (function(c){
            switch(c.label){
              case 0:return o="/api/subject-libs/".concat(e, "?keyword=").concat(t), "all"!==n&&(o+="&subject_type=".concat(n)), [
                4, a().get(o)
              ];
              case 1:return s=c.sent(), [
                2, (0, i.plainToClass)(l.B, (0, r.camelizeKeys)(s.data.subjects), {
                  excludeExtraneousValues:!0, exposeDefaultValues:!0
                })
              ]
            }
          }))
        }))
      }
    }, 27970:(e, t, n)=>{
      n.d(t, {
        A:()=>l
      });
      n(418665), n(107918), n(906048), n(658379), n(14602);
      var o=n(595738), a=n(526320), i=n(623694), r=n(405852);
      const l=(0, o.pM)({
        props:{
          nodes:{
            type:Array, required:!0
          }, links:{
            type:Array
          }, viewMode:{
            type:String
          }, setting:{
            type:Object, required:!0
          }, keyword:{
            type:String
          }, tooltipHtml:{
            type:Function
          }, dimensions:{
            type:Array, default:function(){
              return[
              ]
            }
          }
        }, setup:function(e, t){
          var n, l, s, c=t.emit, u=(0, o.KR)(null), d=function(){
            if(l){
              var e=l.getData();
              n.getNodes().forEach((function(t){
                var n=e.nodes.find((function(e){
                  return e.id===t.getModel().id
                }));
                n&&t.update(n)
              })), n.getEdges().forEach((function(t){
                var n=t.getModel(), o=e.edges.find((function(e){
                  return e.source===n.source&&e.target===n.target
                }));
                o&&t.update(o, "style")
              }))
            }
          }, p=function(){
            var t=(0, r.f4)(e.nodes), o=(l=new i.TO(e.nodes, e.setting, t)).getLayoutData();
            n.data(o), n.render(), setTimeout((function(){
              l.getData().edges.filter((function(e){
                return"level"!==e.relationType
              })).forEach((function(e){
                n.addItem("edge", e)
              })), d()
            }), 200)
          };
          (0, o.wB)((function(){
            return e.nodes
          }), (function(){
            p()
          })), (0, o.wB)((function(){
            return e.setting
          }), (function(){
            l.refresh(), d()
          }), {
            deep:!0
          });
          return(0, o.sV)((function(){
            n=new i.Fv({
              container:u.value
            }), p(), s=new ResizeObserver((function(e){
              if(n&&e.length>0){
                var t=e[
                  0
                ].contentRect, o=t.width, a=t.height;
                n.changeSize(o, a)
              }
            })), u.value&&s.observe(u.value), n.on("node-expand", (function(e){
              var t, n=null===(t=e.item)||void 0===t?void 0:t.getModel();
              n&&(n.isCollapsed=!n.isCollapsed, null==l||l.updateItem(n), d())
            })), n.on("node-click", (function(e){
              var t, n=null===(t=e.item)||void 0===t?void 0:t.getModel();
              n&&!n.isRoot&&c("on-click-node", Number(n.id))
            })), n.on("canvas:click", (function(){
              c("on-click-outside")
            })), n.on("zoom", (function(e){
              c("on-zoom", e)
            })), a.A.$on("knowledge-graph-search-selected-node", (function(e){
              !function(e){
                if(l){
                  var t=l.getData().nodes, n=new Map(t.map((function(e){
                    return[
                      e.id, e
                    ]
                  }))).get(e);
                  if(n)for(;
                  n&&n.parent;
                  ){
                    var o=n.parent;
                    o&&o.isCollapsed&&(o.isCollapsed=!1, l.updateItem(o), d()), n=o
                  }
                }
              }
              (String(e.id));
              var t=n.findById(String(e.id));
              t&&(n.focusItem(t), n.translate(-200, 0))
            }))
          })), (0, o.xo)((function(){
            s&&u.value&&(s.unobserve(u.value), s.disconnect())
          })), {
            eleRef:u, resetZoom:function(){
              n.resetZoom()
            }, zoomIn:function(){
              n.zoomIn()
            }, zoomOut:function(){
              n.zoomOut()
            }, resetActive:function(){
            }, updateNodeName:function(e){
              var t, o=e.id, a=e.name;
              l.updateNodeName(o, a), null===(t=n.findById(o.toString()))||void 0===t||t.update({
                name:a
              }, "label")
            }, zoomTo:function(e){
              n.zoomTo(e, n.center, !0)
            }
          }
        }
      })
    }, 40842:(e, t, n)=>{
      n.d(t, {
        A:()=>d
      });
      var o=n(595738), a=n(552979), i=n(979278), r=n(48292), l=n(357769), s=n(542535), c=n(972194);
      const u=(0, o.pM)({
        components:{
          SvgIcon:i.A, Badge:l.A
        }, props:{
          viewMode:{
            type:String, required:!0
          }
        }, setup:function(e, t){
          var n=(0, o.KR)(), i=(0, o.KR)(!1), l=(0, o.WQ)("course", {
            id:0, type:0
          }), u=(0, o.WQ)("allowedRelationTypes", {
            prev:!0, post:!0, undirected:!0
          }), d=(0, c.D)().depth, p=(0, o.Kh)({
            course:!0, directedRelation:!0, levelRelation:!0, undirectedRelation:!0, showLevelNumber:0
          }), f=(0, o.KR)(), v=(0, o.KR)(a.default.t("fullScreen")), h=function e(t){
            f.value.contains(t.target)||(i.value=!1, document.removeEventListener("click", e))
          }, m=(0, o.EW)((function(){
            if(!n.value)return"slide-left";
            var e=n.value.getBoundingClientRect(), t=e.width;
            return e.x+t>window.innerWidth/2?"slide-right":"slide-left"
          })), g=(0, o.EW)((function(){
            return"slide-left"===m.value?{
              left:"60px"
            }
            :{
              right:"60px"
            }
          })), b=(0, o.EW)((function(){
            return r.D4[
              e.viewMode
            ]
          }));
          return(0, o.nT)((function(){
            t.emit("on-setting-change", p)
          })), {
            isShowSettingMenu:i, menuRef:f, menuPosition:g, colorByMode:b, setting:p, animateName:m, eleRef:n, course:l, RELATION_LINK_COLOR:s.GZ, allowedRelationTypes:u, fullscreenText:v, depth:d, fullscreen:function(){
              t.emit("on-fullscreen")
            }, position:function(){
              t.emit("on-position")
            }, showSettingMenu:function(e){
              i.value?h(e):(i.value=!0, document.addEventListener("click", h))
            }, zoomIn:function(){
              t.emit("on-zoom-in")
            }, zoomOut:function(){
              t.emit("on-zoom-out")
            }
          }
        }
      });
      const d=(0, n(514486).A)(u, (function(){
        var e=this, t=e.$createElement, n=e._self._c||t;
        return n("div", {
          ref:"eleRef", staticClass:"graph-toolbar"
        }, [
          n("div", {
            staticClass:"graph-tool", staticStyle:{
              padding:"0", cursor:"pointer"
            }
          }, [
            n("SvgIcon", {
              staticStyle:{
                width:"1.8em"
              }, attrs:{
                name:"line"
              }
            })
          ], 1), e._v(" "), n("div", {
            staticClass:"graph-tool", on:{
              click:e.fullscreen
            }
          }, [
            n("Button", {
              attrs:{
                type:"text"
              }
            }, [
              n("SvgIcon", {
                attrs:{
                  name:"fullscreen-for-dark"
                }
              })
            ], 1), e._v(" "), n("span", {
              staticClass:"graph-tool-name"
            }, [
              e._v(e._s(e.fullscreenText))
            ])
          ], 1), e._v(" "), n("div", {
            staticClass:"graph-tool", on:{
              click:e.position
            }
          }, [
            n("Button", {
              attrs:{
                type:"text"
              }
            }, [
              n("SvgIcon", {
                attrs:{
                  name:"position-for-dark"
                }
              })
            ], 1), e._v(" "), n("span", {
              staticClass:"graph-tool-name"
            }, [
              e._v(e._s(e.$t("knowledgeGraph.reset")))
            ])
          ], 1), e._v(" "), n("div", {
            staticClass:"graph-tool", on:{
              click:e.zoomIn
            }
          }, [
            n("Button", {
              attrs:{
                type:"text"
              }
            }, [
              n("SvgIcon", {
                attrs:{
                  name:"zoom-in-for-dark"
                }
              })
            ], 1), e._v(" "), n("span", {
              staticClass:"graph-tool-name"
            }, [
              e._v(e._s(e.$t("zoomIn")))
            ])
          ], 1), e._v(" "), n("div", {
            staticClass:"graph-tool", on:{
              click:e.zoomOut
            }
          }, [
            n("Button", {
              attrs:{
                type:"text"
              }
            }, [
              n("SvgIcon", {
                attrs:{
                  name:"zoom-out-for-dark"
                }
              })
            ], 1), e._v(" "), n("span", {
              staticClass:"graph-tool-name"
            }, [
              e._v(e._s(e.$t("zoomOut")))
            ])
          ], 1), e._v(" "), "forest"!==e.viewMode?n("div", {
            staticClass:"graph-tool graph-setting", on:{
              click:function(t){
                return t.stopPropagation(), e.showSettingMenu(t)
              }
            }
          }, [
            n("Button", {
              attrs:{
                type:"text"
              }
            }, [
              n("SvgIcon", {
                attrs:{
                  name:"setting"
                }
              })
            ], 1), e._v(" "), n("span", {
              staticClass:"graph-tool-name"
            }, [
              e._v(e._s(e.$t("knowledgeGraph.settings")))
            ]), e._v(" "), n("transition", {
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
                    n("Badge", {
                      attrs:{
                        color:e.colorByMode.course, size:12
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
                        color:e.colorByMode.levelRelation
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
                        color:e.RELATION_LINK_COLOR
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
                        color:e.RELATION_LINK_COLOR
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
      ], !1, null, "0f6e137b", null).exports
    }, 86226:(e, t, n)=>{
      n.d(t, {
        A:()=>p
      });
      n(219693), n(168763);
      var o=n(595738), a=n(766800), i=n(552979), r=n(302543);
      const l=(0, o.pM)({
        props:{
          value:{
            type:Object, required:!0
          }
        }, setup:function(e, t){
          var n=t.emit, a=(0, o.KR)(null), l=(0, o.Kh)({
            content:e.value.data.content
          }), s={
            content:[
              {
                required:!0, trigger:"blur", message:i.default.t("fieldRequired"), pattern:/\S+/
              }
            ]
          }, c=(0, o.EW)((function(){
            return e.value
          })), u=(0, o.KR)(0), d="", p=function(e, t, n){
            return(0, r.tap)((0, r.cloneDeep)(e), (function(e){
              return(0, r.set)(e, t, n)
            }))
          }, f=function(e, t){
            n("input", p(c.value, e, t))
          };
          (0, o.wB)((function(){
            return l.content
          }), (function(){
            f("data.content", l.content)
          }));
          var v=function(){
            n("delete", e.value)
          };
          return(0, o.sV)((function(){
            u.value=e.value.data.referCount
          })), {
            confirmForm:function(){
              a.value.validate((function(e){
                var t;
                e&&(t=p(c.value, "isEditing", !1), (t=p(t, "data.content", l.content)).confirmed=!0, n("input", t))
              }))
            }, local:c, update:f, deleteItem:v, cancel:function(){
              l.content=d, f("isEditing", !1), c.value.confirmed||(0, o.dY)((function(){
                v()
              }))
            }, formState:l, ruleValidate:s, formRef:a, referCount:u, onChange:function(e){
              e?u.value+=1:u.value-=1
            }, edit:function(){
              d=c.value.data.content, f("isEditing", !0)
            }, originalContent:d
          }
        }
      });
      var s=n(514486);
      const c=(0, s.A)(l, (function(){
        var e=this, t=e.$createElement, n=e._self._c||t;
        return n("div", {
          staticClass:"item"
        }, [
          n("Checkbox", {
            staticClass:"checkbox", attrs:{
              value:e.local.selected
            }, on:{
              input:function(t){
                return e.update("selected", t)
              }, "on-change":e.onChange
            }
          }, [
            n("span")
          ]), e._v(" "), n("div", {
            staticClass:"content"
          }, [
            e.local.isEditing?n("div", {
              staticClass:"w-full"
            }, [
              n("Form", {
                ref:"formRef", attrs:{
                  model:e.formState, rules:e.ruleValidate
                }
              }, [
                n("FormItem", {
                  attrs:{
                    prop:"content"
                  }
                }, [
                  n("Input", {
                    staticClass:"w-full", attrs:{
                      maxlength:"200", "show-word-limit":"", type:"textarea", placeholder:e.$t("knowledgeGraph.inputTeachingObjective")
                    }, model:{
                      value:e.formState.content, callback:function(t){
                        e.$set(e.formState, "content", t)
                      }, expression:"formState.content"
                    }
                  })
                ], 1)
              ], 1), e._v(" "), n("div", {
                staticClass:"item-footer"
              }, [
                n("div"), e._v(" "), n("div", [
                  n("span", {
                    staticClass:"confirm", on:{
                      click:e.confirmForm
                    }
                  }, [
                    e._v(e._s(e.$t("ok")))
                  ]), e._v(" "), n("span", {
                    on:{
                      click:e.cancel
                    }
                  }, [
                    e._v(e._s(e.$t("cancel")))
                  ])
                ])
              ])
            ], 1):n("div", {
              staticClass:"w-full"
            }, [
              n("div", {
                staticClass:"text"
              }, [
                e._v("\n        "+e._s(e.local.data.content)+"\n      ")
              ]), e._v(" "), n("div", {
                staticClass:"item-footer"
              }, [
                n("span", {
                  staticClass:"info"
                }, [
                  e._v(e._s(e.$t("knowledgeGraph.relatedNode"))+": "+e._s(e.referCount))
                ]), e._v(" "), n("div", {
                  staticClass:"right"
                }, [
                  n("span", {
                    staticClass:"edit", on:{
                      click:e.edit
                    }
                  }, [
                    e._v(e._s(e.$t("edit")))
                  ]), e._v(" "), n("span", {
                    staticClass:"delete", on:{
                      click:e.deleteItem
                    }
                  }, [
                    e._v(e._s(e.$t("delete")))
                  ])
                ])
              ])
            ])
          ])
        ], 1)
      }), [
      ], !1, null, "7548236c", null).exports;
      var u=n(379960);
      const d=(0, o.pM)({
        components:{
          EditItem:c, NoData:u.A
        }, props:{
          value:{
            type:Array, required:!0
          }
        }, setup:function(e){
          var t=(0, o.EW)((function(){
            return e.value
          })), n=(0, o.EW)((function(){
            return t.value.find((function(e){
              return e.isEditing
            }))
          }));
          return{
            localItems:t, add:function(){
              var e=new a.yh(new a.bt);
              e.isEditing=!0, e.selected=!0, e.confirmed=!1, e.data.referCount=1, t.value.unshift(e)
            }, onDelete:function(e){
              var n=t.value.indexOf(e);
              t.value.splice(n, 1)
            }, editingItem:n
          }
        }
      });
      const p=(0, s.A)(d, (function(){
        var e=this, t=e.$createElement, n=e._self._c||t;
        return e.localItems.length>0?n("div", {
          staticClass:"teaching-objective-select"
        }, [
          n("Button", {
            attrs:{
              type:"primary", disabled:!!e.editingItem
            }, on:{
              click:e.add
            }
          }, [
            n("i", {
              staticClass:"font font-add-new-elem"
            }), e._v("\n    "+e._s(e.$t("new"))+"\n  ")
          ]), e._v(" "), n("div", {
            staticClass:"w-full item-list"
          }, e._l(e.localItems, (function(t, o){
            return n("EditItem", {
              key:t.data.id, staticClass:"item", on:{
                delete:e.onDelete
              }, model:{
                value:e.localItems[
                  o
                ], callback:function(t){
                  e.$set(e.localItems, o, t)
                }, expression:"localItems[index]"
              }
            })
          })), 1)
        ], 1):n("div", {
          staticClass:"teaching-objective-select no-data-container"
        }, [
          n("NoData", {
            staticClass:"no-data"
          }, [
            e._v(e._s(e.$t("knowledgeGraph.noTeachingObjective")))
          ]), e._v(" "), n("Button", {
            staticClass:"add", attrs:{
              type:"primary"
            }, on:{
              click:e.add
            }
          }, [
            n("i", {
              staticClass:"font font-add-new-elem"
            }), e._v("\n    "+e._s(e.$t("new"))+"\n  ")
          ])
        ], 1)
      }), [
      ], !1, null, "411273ed", null).exports
    }, 95050:(e, t, n)=>{
      n.d(t, {
        $5:()=>u, Jv:()=>c, Qw:()=>s
      });
      n(540590), n(418665), n(269193), n(14602);
      var o=n(595738), a=n(46258), i=n(731904), r=function(e, t, n, o){
        return new(n||(n=Promise))((function(a, i){
          function r(e){
            try{
              s(o.next(e))
            }
            catch(e){
              i(e)
            }
          }
          function l(e){
            try{
              s(o.throw(e))
            }
            catch(e){
              i(e)
            }
          }
          function s(e){
            var t;
            e.done?a(e.value):(t=e.value, t instanceof n?t:new n((function(e){
              e(t)
            }))).then(r, l)
          }
          s((o=o.apply(e, t||[
          ])).next())
        }))
      }, l=function(e, t){
        var n, o, a, i, r={
          label:0, sent:function(){
            if(1&a[
              0
            ])throw a[
              1
            ];
            return a[
              1
            ]
          }, trys:[
          ], ops:[
          ]
        };
        return i={
          next:l(0), throw:l(1), return:l(2)
        }, "function"==typeof Symbol&&(i[
          Symbol.iterator
        ]
        =function(){
          return this
        }), i;
        function l(l){
          return function(s){
            return function(l){
              if(n)throw new TypeError("Generator is already executing.");
              for(;
              i&&(i=0, l[
                0
              ]
              &&(r=0)), r;
              )try{
                if(n=1, o&&(a=2&l[
                  0
                ]
                ?o.return:l[
                  0
                ]
                ?o.throw||((a=o.return)&&a.call(o), 0):o.next)&&!(a=a.call(o, l[
                  1
                ])).done)return a;
                switch(o=0, a&&(l=[
                  2&l[
                    0
                  ], a.value
                ]), l[
                  0
                ]){
                  case 0:case 1:a=l;
                  break;
                  case 4:return r.label++, {
                    value:l[
                      1
                    ], done:!1
                  };
                  case 5:r.label++, o=l[
                    1
                  ], l=[
                    0
                  ];
                  continue;
                  case 7:l=r.ops.pop(), r.trys.pop();
                  continue;
                  default:if(!(a=r.trys, (a=a.length>0&&a[
                    a.length-1
                  ])||6!==l[
                    0
                  ]
                  &&2!==l[
                    0
                  ])){
                    r=0;
                    continue
                  }
                  if(3===l[
                    0
                  ]
                  &&(!a||l[
                    1
                  ]
                  >a[
                    0
                  ]
                  &&l[
                    1
                  ]
                  <a[
                    3
                  ])){
                    r.label=l[
                      1
                    ];
                    break
                  }
                  if(6===l[
                    0
                  ]
                  &&r.label<a[
                    1
                  ]){
                    r.label=a[
                      1
                    ], a=l;
                    break
                  }
                  if(a&&r.label<a[
                    2
                  ]){
                    r.label=a[
                      2
                    ], r.ops.push(l);
                    break
                  }
                  a[
                    2
                  ]
                  &&r.ops.pop(), r.trys.pop();
                  continue
                }
                l=t.call(e, r)
              }
              catch(e){
                l=[
                  6, e
                ], o=0
              }
              finally{
                n=a=0
              }
              if(5&l[
                0
              ])throw l[
                1
              ];
              return{
                value:l[
                  0
                ]
                ?l[
                  1
                ]
                :void 0, done:!0
              }
            }
            ([
              l, s
            ])
          }
        }
      }, s=(0, o.KR)([
      ]), c=function(e){
        return{
          id:e.id, title:e.title, expand:!1, children:[
          ], isFolder:e.isFolder
        }
      }, u=function(e, t, n){
        return r(void 0, void 0, void 0, (function(){
          var o;
          return l(this, (function(r){
            switch(r.label){
              case 0:return[
                4, (0, a.qz)(e, t)
              ];
              case 1:return o=r.sent(), s.value=i._.map(i._.filter(o, (function(e){
                return e.id!==n
              })), c), [
                2
              ]
            }
          }))
        }))
      }
    }, 118018:(e, t, n)=>{
      n.d(t, {
        A:()=>u
      });
      n(418665), n(714913), n(107918), n(169218), n(14602);
      var o=n(595738), a=n(552979), i=n(302543), r=n(48292), l=function(e, t, n){
        if(n||2===arguments.length)for(var o, a=0, i=t.length;
        a<i;
        a++)!o&&a in t||(o||(o=Array.prototype.slice.call(t, 0, a)), o[
          a
        ]
        =t[
          a
        ]);
        return e.concat(o||Array.prototype.slice.call(t))
      }, s=[
        "none", "remember", "understand", "apply", "analyze", "evaluate", "create"
      ];
      const c=(0, o.pM)({
        props:{
          value:{
            type:[
              String, Array
            ], default:"", validate:function(e){
              return"string"==typeof e?(0, i.includes)(s, e):(0, i.every)(e, (function(e){
                return(0, i.includes)(s, e)
              }))
            }
          }, multiple:{
            type:Boolean, default:!1
          }, placeholder:{
            type:String, default:a.default.t("knowledgeGraph.cognitiveDimension.all")
          }, width:{
            type:[
              Number, String
            ], default:200
          }, height:{
            type:[
              Number, String
            ], default:32
          }, withColor:{
            type:Boolean, default:!1
          }, canSelectUnspecified:{
            type:Boolean, default:!0
          }, disabled:{
            type:Boolean, default:!1
          }
        }, setup:function(e, t){
          var n=(0, o.KR)(), i=(0, o.EW)((function(){
            return e.canSelectUnspecified?l([
              {
                key:"none", value:a.default.t("knowledgeGraph.cognitiveDimension.unspecified")
              }
            ], r.oC, !0):r.oC
          })), s=(0, o.EW)((function(){
            return!e.multiple||"object"==typeof n.value&&1===n.value.length?1:0
          })), c=(0, o.EW)((function(){
            var t={
            }, n="string"==typeof e.width?parseInt(e.width, 10):e.width, o="string"==typeof e.height?parseInt(e.height, 10):e.height, a={
              width:"".concat(n, n<=100?"%":"px"), height:"".concat(o, "px")
            };
            return Object.assign(t, a), t
          })), u=new Map([
            [
              "remember", {
                background:"#f4edff", color:"#8547e8", border:"1px solid #8547e8"
              }
            ], [
              "understand", {
                background:"#eff6ff", color:"#3471d3", border:"1px solid #3471d3"
              }
            ], [
              "apply", {
                background:"#e4fafa", color:"#0e7d84", border:"1px solid #0e7d84"
              }
            ], [
              "analyze", {
                background:"#fff9c6", color:"#a78304", border:"1px solid #a78304"
              }
            ], [
              "evaluate", {
                background:"#fff5e5", color:"#ec8201", border:"1px solid #ec8201"
              }
            ], [
              "create", {
                background:"#feeeee", color:"#f85353", border:"1px solid #f85353"
              }
            ]
          ]);
          (0, o.sV)((function(){
            n.value=e.value
          })), (0, o.wB)((function(){
            return e.value
          }), (function(){
            n.value=e.value
          }));
          var d=(0, o.EW)((function(){
            if(!e.multiple&&e.withColor&&n.value)return"colorful-style ".concat(n.value)
          }));
          return{
            dimension:n, customStyle:c, availableCognitiveDimensions:i, maxCount:s, colorfulStyle:d, optionStyle:function(t){
              var n={
              };
              if(e.withColor){
                var o=u.get(t);
                Object.assign(n, {
                  padding:"1px 4px", fontSize:"12px", fontWeight:400, lineHeight:"18px", borderRadius:"4px"
                }, o)
              }
              return n
            }, maxPlaceholder:function(e){
              return"".concat(a.default.t("select")).concat(e).concat(a.default.t("item"))
            }, onChange:function(e){
              n.value=e, t.emit("input", e)
            }
          }
        }
      });
      const u=(0, n(514486).A)(c, (function(){
        var e=this, t=e.$createElement, n=e._self._c||t;
        return n("Select", {
          class:e.colorfulStyle, style:e.customStyle, attrs:{
            placeholder:e.placeholder, "max-tag-count":e.maxCount, multiple:e.multiple, "max-tag-placeholder":e.maxPlaceholder, disabled:e.disabled, clearable:""
          }, on:{
            "on-change":e.onChange
          }, model:{
            value:e.dimension, callback:function(t){
              e.dimension=t
            }, expression:"dimension"
          }
        }, e._l(e.availableCognitiveDimensions, (function(t){
          return n("Option", {
            key:t.key, attrs:{
              value:t.key, label:t.value
            }
          }, [
            n("span", {
              style:e.optionStyle(t.key)
            }, [
              e._v(e._s(t.value))
            ])
          ])
        })), 1)
      }), [
      ], !1, null, "21986838", null).exports
    }, 167690:(e, t, n)=>{
      n.d(t, {
        Mm:()=>a, PN:()=>l, Zq:()=>i, eK:()=>s, mG:()=>r
      });
      var o=n(595738), a=(0, o.KR)(!1), i=(0, o.KR)(!1), r=(0, o.KR)(null), l=(0, o.KR)(), s=(0, o.KR)([
      ])
    }, 180180:(e, t, n)=>{
      n.d(t, {
        A:()=>d
      });
      n(540590), n(418665), n(168763), n(269193), n(14602);
      var o=n(595738), a=n(552979), i=n(731904), r=n(255634), l=n(877401), s=function(e, t, n, o){
        return new(n||(n=Promise))((function(a, i){
          function r(e){
            try{
              s(o.next(e))
            }
            catch(e){
              i(e)
            }
          }
          function l(e){
            try{
              s(o.throw(e))
            }
            catch(e){
              i(e)
            }
          }
          function s(e){
            var t;
            e.done?a(e.value):(t=e.value, t instanceof n?t:new n((function(e){
              e(t)
            }))).then(r, l)
          }
          s((o=o.apply(e, t||[
          ])).next())
        }))
      }, c=function(e, t){
        var n, o, a, i, r={
          label:0, sent:function(){
            if(1&a[
              0
            ])throw a[
              1
            ];
            return a[
              1
            ]
          }, trys:[
          ], ops:[
          ]
        };
        return i={
          next:l(0), throw:l(1), return:l(2)
        }, "function"==typeof Symbol&&(i[
          Symbol.iterator
        ]
        =function(){
          return this
        }), i;
        function l(l){
          return function(s){
            return function(l){
              if(n)throw new TypeError("Generator is already executing.");
              for(;
              i&&(i=0, l[
                0
              ]
              &&(r=0)), r;
              )try{
                if(n=1, o&&(a=2&l[
                  0
                ]
                ?o.return:l[
                  0
                ]
                ?o.throw||((a=o.return)&&a.call(o), 0):o.next)&&!(a=a.call(o, l[
                  1
                ])).done)return a;
                switch(o=0, a&&(l=[
                  2&l[
                    0
                  ], a.value
                ]), l[
                  0
                ]){
                  case 0:case 1:a=l;
                  break;
                  case 4:return r.label++, {
                    value:l[
                      1
                    ], done:!1
                  };
                  case 5:r.label++, o=l[
                    1
                  ], l=[
                    0
                  ];
                  continue;
                  case 7:l=r.ops.pop(), r.trys.pop();
                  continue;
                  default:if(!(a=r.trys, (a=a.length>0&&a[
                    a.length-1
                  ])||6!==l[
                    0
                  ]
                  &&2!==l[
                    0
                  ])){
                    r=0;
                    continue
                  }
                  if(3===l[
                    0
                  ]
                  &&(!a||l[
                    1
                  ]
                  >a[
                    0
                  ]
                  &&l[
                    1
                  ]
                  <a[
                    3
                  ])){
                    r.label=l[
                      1
                    ];
                    break
                  }
                  if(6===l[
                    0
                  ]
                  &&r.label<a[
                    1
                  ]){
                    r.label=a[
                      1
                    ], a=l;
                    break
                  }
                  if(a&&r.label<a[
                    2
                  ]){
                    r.label=a[
                      2
                    ], r.ops.push(l);
                    break
                  }
                  a[
                    2
                  ]
                  &&r.ops.pop(), r.trys.pop();
                  continue
                }
                l=t.call(e, r)
              }
              catch(e){
                l=[
                  6, e
                ], o=0
              }
              finally{
                n=a=0
              }
              if(5&l[
                0
              ])throw l[
                1
              ];
              return{
                value:l[
                  0
                ]
                ?l[
                  1
                ]
                :void 0, done:!0
              }
            }
            ([
              l, s
            ])
          }
        }
      };
      const u=(0, o.pM)({
        props:{
          node:{
            type:Object, required:!0
          }, relation:{
            type:Object, required:!0
          }, canEditRelation:{
            type:Boolean, default:!1
          }, showPrefix:{
            type:Boolean, default:!0
          }, canDelete:{
            type:Boolean, default:!1
          }
        }, components:{
          TooltipExt:r.A
        }, setup:function(e){
          var t=this, n=(0, o.WQ)("course", {
            id:0
          }), r=(0, o.KR)(""), u=(0, o.KR)(!1), d=(0, o.KR)(!1), p=function(e){
            return"prev"===e?"post":"post"===e?"prev":"undirected"
          }, f=function(t, n){
            var o=e.node, a=e.node.tree.find((function(e){
              return e.id===t.id
            }))[
              0
            ], i={
              undirected:o.data.undirectedRelation, prev:o.data.prevRelation, post:o.data.postRelation
            }, r={
              undirected:a.data.undirectedRelation, prev:a.data.prevRelation, post:a.data.postRelation
            }, l=i[
              t.relationType
            ].findIndex((function(e){
              return e.relationId===t.relationId
            })), s=i[
              t.relationType
            ].splice(l, 1)[
              0
            ], c=r[
              p(t.relationType)
            ].findIndex((function(e){
              return e.relationId===t.relationId
            })), u=r[
              p(t.relationType)
            ].splice(c, 1)[
              0
            ];
            n&&(i[
              n
            ].push(s), r[
              p(n)
            ].push(u))
          };
          return{
            relationClass:function(e){
              return"undirected"===e.relationType?"undirected-relation":"prev"===e.relationType?"pre-relation":"post"===e.relationType?"post-relation":""
            }, delRelation:function(e){
              return s(t, void 0, void 0, (function(){
                return c(this, (function(t){
                  switch(t.label){
                    case 0:return[
                      4, (0, l.i4)(n.id, [
                        e.relationId
                      ])
                    ];
                    case 1:return t.sent(), f(e), i.Toast.success(a.default.t("operationSuccess")), [
                      2
                    ]
                  }
                }))
              }))
            }, editRelationType:r, onPopperShow:function(){
              r.value=e.relation.relationType
            }, upadteRelation:function(o){
              return s(t, void 0, void 0, (function(){
                var t, r, s;
                return c(this, (function(c){
                  switch(c.label){
                    case 0:return t="", r=e.node.id, s=e.relation.id, "undirected"===o?t="undirected":"prev"===o?(t="directed", r=e.relation.id, s=e.node.id):t="directed", [
                      4, (0, l.Cg)(n.id, {
                        id:e.relation.relationId, type:t, source:r, target:s
                      })
                    ];
                    case 1:return c.sent(), u.value=!1, f(e.relation, o), i.Toast.success(a.default.t("air.updateSuccess")), [
                      2
                    ]
                  }
                }))
              }))
            }, visible:u, relationTooltipText:function(t){
              var n={
                prev:a.default.t("knowledgeGraph.addPrev"), post:a.default.t("knowledgeGraph.addPost"), undirected:a.default.t("knowledgeGraph.addRelation")
              };
              return e.showPrefix?"".concat(n[
                t.relationType
              ], "：").concat(t.name):t.name
            }, closePoptip:function(t){
              e.relation.relationType===t&&(u.value=!1)
            }, hovering:d, handleMouseout:function(){
              d.value=!1
            }, handleMouseover:function(){
              d.value=!0
            }
          }
        }
      });
      const d=(0, n(514486).A)(u, (function(){
        var e=this, t=e.$createElement, n=e._self._c||t;
        return n("div", {
          class:e.relationClass(e.relation), on:{
            mouseover:e.handleMouseover, mouseout:e.handleMouseout, mousedown:function(e){
              e.stopPropagation()
            }
          }
        }, [
          n("Poptip", {
            attrs:{
              placement:"bottom", padding:"12px 16px", disabled:!e.canEditRelation, transfer:"", "transfer-class-name":"relation-item-poptip"
            }, on:{
              "on-popper-show":e.onPopperShow
            }, model:{
              value:e.visible, callback:function(t){
                e.visible=t
              }, expression:"visible"
            }
          }, [
            n("div", {
              staticClass:"rleation-area"
            }, [
              n("div", {
                staticClass:"relation-name", style:{
                  width:e.hovering&&e.canDelete?"calc(100% - 12px)":"100%"
                }
              }, [
                n("TooltipExt", {
                  attrs:{
                    text:e.relationTooltipText(e.relation), "transfer-class-name":"knowledge-graph-outline-tooltip"
                  }
                })
              ], 1), e._v(" "), e.canDelete?n("div", {
                staticClass:"delete-button"
              }, [
                n("Tooltip", {
                  attrs:{
                    content:e.$t("remove"), placement:"top", transfer:"", "transfer-class-name":"knowledge-graph-outline-tooltip"
                  }
                }, [
                  n("i", {
                    staticClass:"font font-cancel", on:{
                      click:function(t){
                        return t.stopPropagation(), e.delRelation(e.relation)
                      }
                    }
                  })
                ])
              ], 1):e._e()
            ]), e._v(" "), n("div", {
              staticClass:"poptip-content", attrs:{
                slot:"content"
              }, slot:"content"
            }, [
              n("div", {
                staticClass:"poptip-header"
              }, [
                n("span", {
                  staticClass:"title"
                }, [
                  e._v(e._s(e.$t("knowledgeGraph.setNodeRelation")))
                ]), e._v(" "), n("span", {
                  staticClass:"remove", on:{
                    click:function(t){
                      return e.delRelation(e.relation)
                    }
                  }
                }, [
                  e._v(e._s(e.$t("remove")))
                ])
              ]), e._v(" "), n("RadioGroup", {
                attrs:{
                  type:"button"
                }, on:{
                  "on-change":e.upadteRelation
                }, model:{
                  value:e.editRelationType, callback:function(t){
                    e.editRelationType=t
                  }, expression:"editRelationType"
                }
              }, [
                n("Radio", {
                  attrs:{
                    label:"undirected"
                  }, nativeOn:{
                    click:function(t){
                      return e.closePoptip("undirected")
                    }
                  }
                }, [
                  n("span", [
                    e._v(e._s(e.$t("knowledgeGraph.addRelation")))
                  ])
                ]), e._v(" "), n("Radio", {
                  attrs:{
                    label:"prev"
                  }, nativeOn:{
                    click:function(t){
                      return e.closePoptip("prev")
                    }
                  }
                }, [
                  n("span", [
                    e._v(e._s(e.$t("knowledgeGraph.addPrev")))
                  ])
                ]), e._v(" "), n("Radio", {
                  attrs:{
                    label:"post"
                  }, nativeOn:{
                    click:function(t){
                      return e.closePoptip("post")
                    }
                  }
                }, [
                  n("span", [
                    e._v(e._s(e.$t("knowledgeGraph.addPost")))
                  ])
                ])
              ], 1)
            ], 1)
          ])
        ], 1)
      }), [
      ], !1, null, "31ba78db", null).exports
    }, 193551:(e, t, n)=>{
      n.d(t, {
        E:()=>a, X:()=>o
      });
      n(714913);
      function o(e, t, n){
        return"asc"===n?parseFloat(e)>parseFloat(t)?1:-1:parseFloat(e)<parseFloat(t)?1:-1
      }
      function a(e){
        if(!e)return"00:00:00";
        var t=function(e){
          return e<10?"0".concat(e).slice(-2):"".concat(e)
        }, n=e%60, o=t(e%60), a=t((e-n)/60%60), i=t(parseInt(String((e-n)/60/60), 10));
        return"".concat(i, ":").concat(a, ":").concat(o)
      }
    }, 220521:(e, t, n)=>{
      n.d(t, {
        Od:()=>f, YJ:()=>v, dV:()=>d, vy:()=>s, xg:()=>u, yf:()=>p
      });
      var o=n(738645), a=n(152229), i=n(510543), r=n(731904), l=function(e, t, n, o){
        var a, i=arguments.length, r=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t, n):o;
        if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e, t, n, o);
        else for(var l=e.length-1;
        l>=0;
        l--)(a=e[
          l
        ])&&(r=(i<3?a(r):i>3?a(t, n, r):a(t, n))||r);
        return i>3&&r&&Object.defineProperty(t, n, r), r
      }, s=(function(){
        function e(){
        }
        l([
          (0, o.v)()
        ], e.prototype, "id", void 0), l([
          (0, o.v)()
        ], e.prototype, "userNo", void 0), l([
          (0, o.v)()
        ], e.prototype, "name", void 0)
      }
      (), function(){
        function e(){
        }
        return l([
          (0, o.v)()
        ], e.prototype, "id", void 0), l([
          (0, o.v)()
        ], e.prototype, "userNo", void 0), l([
          (0, o.v)()
        ], e.prototype, "name", void 0), l([
          (0, o.v)()
        ], e.prototype, "markStatus", void 0), e
      }
      ()), c=function(){
        function e(){
        }
        return l([
          (0, o.v)()
        ], e.prototype, "id", void 0), l([
          (0, o.v)()
        ], e.prototype, "userNo", void 0), l([
          (0, o.v)()
        ], e.prototype, "name", void 0), e
      }
      (), u=function(){
        function e(){
        }
        return l([
          (0, o.v)()
        ], e.prototype, "id", void 0), l([
          (0, o.v)()
        ], e.prototype, "examId", void 0), l([
          (0, o.v)(), (0, a.Z)((function(){
            return s
          }))
        ], e.prototype, "examinee", void 0), l([
          (0, o.v)(), (0, i.d)((function(e){
            e.value;
            return e.obj.exam.referrerType
          }), {
            toClassOnly:!0
          })
        ], e.prototype, "examType", void 0), l([
          (0, o.v)(), (0, i.d)((function(e){
            e.value;
            var t=e.obj;
            return r.TimeUtils.toLocalDate(t.submittedAt)
          }), {
            toClassOnly:!0
          })
        ], e.prototype, "submitTime", void 0), l([
          (0, o.v)(), (0, a.Z)((function(){
            return c
          })), (0, i.d)((function(e){
            e.value;
            return e.obj.createdBy
          }), {
            toClassOnly:!0
          })
        ], e.prototype, "retakeOperator", void 0), l([
          (0, o.v)(), (0, i.d)((function(e){
            e.value;
            var t=e.obj;
            return r.TimeUtils.toLocalDate(t.createdAt)
          }), {
            toClassOnly:!0
          })
        ], e.prototype, "retakeOperateTime", void 0), e
      }
      (), d=function(){
        function e(){
        }
        return l([
          (0, o.v)()
        ], e.prototype, "id", void 0), l([
          (0, o.v)()
        ], e.prototype, "description", void 0), l([
          (0, o.v)()
        ], e.prototype, "index", void 0), l([
          (0, o.v)()
        ], e.prototype, "status", void 0), l([
          (0, o.v)()
        ], e.prototype, "type", void 0), e
      }
      (), p=function(){
        function e(){
          this.completionCriterionKey="submitted", this.completionCriterionValue="0", this.hasMakeUpUser=!1
        }
        return l([
          (0, o.v)()
        ], e.prototype, "id", void 0), l([
          (0, o.v)()
        ], e.prototype, "title", void 0), l([
          (0, o.v)()
        ], e.prototype, "groupSetId", void 0), l([
          (0, o.v)()
        ], e.prototype, "completionCriterionKey", void 0), l([
          (0, o.v)()
        ], e.prototype, "completionCriterionValue", void 0), l([
          (0, o.v)()
        ], e.prototype, "hasMakeUpUser", void 0), e
      }
      (), f=function(){
        function e(){
        }
        return l([
          (0, o.v)()
        ], e.prototype, "id", void 0), l([
          (0, o.v)()
        ], e.prototype, "examId", void 0), l([
          (0, o.v)()
        ], e.prototype, "instanceId", void 0), l([
          (0, o.v)()
        ], e.prototype, "examineeId", void 0), l([
          (0, o.v)()
        ], e.prototype, "submissionData", void 0), l([
          (0, o.v)()
        ], e.prototype, "scoreData", void 0), l([
          (0, o.v)()
        ], e.prototype, "commentData", void 0), l([
          (0, o.v)()
        ], e.prototype, "markedAttachments", void 0), l([
          (0, o.v)(), (0, i.d)((function(e){
            e.value;
            var t=e.obj;
            return r.TimeUtils.toLocalDate(t.submittedAt)
          }), {
            toClassOnly:!0
          })
        ], e.prototype, "submittedAt", void 0), l([
          (0, o.v)()
        ], e.prototype, "draftData", void 0), e
      }
      (), v=function(){
        function e(){
        }
        return l([
          (0, o.v)()
        ], e.prototype, "id", void 0), l([
          (0, o.v)()
        ], e.prototype, "markStatus", void 0), l([
          (0, o.v)()
        ], e.prototype, "name", void 0), l([
          (0, o.v)()
        ], e.prototype, "examineeIds", void 0), e
      }
      ();
      !function(){
        function e(){
        }
        l([
          (0, o.v)()
        ], e.prototype, "sort", void 0), l([
          (0, o.v)()
        ], e.prototype, "content", void 0)
      }
      ()
    }, 231950:(e, t, n)=>{
      n.d(t, {
        AF:()=>p, Ir:()=>v, mp:()=>f
      });
      n(540590), n(195755), n(418665), n(714913), n(335231), n(168763), n(379432), n(107918), n(43148), n(658379), n(14602);
      var o=n(824072), a=n(418562), i=n(152229), r=n(510543), l=n(738645), s=n(920453), c=n(945188), u=function(e, t, n, o){
        var a, i=arguments.length, r=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t, n):o;
        if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e, t, n, o);
        else for(var l=e.length-1;
        l>=0;
        l--)(a=e[
          l
        ])&&(r=(i<3?a(r):i>3?a(t, n, r):a(t, n))||r);
        return i>3&&r&&Object.defineProperty(t, n, r), r
      }, d=function(e, t, n){
        if(n||2===arguments.length)for(var o, a=0, i=t.length;
        a<i;
        a++)!o&&a in t||(o||(o=Array.prototype.slice.call(t, 0, a)), o[
          a
        ]
        =t[
          a
        ]);
        return e.concat(o||Array.prototype.slice.call(t))
      }, p=function(){
        function e(){
          this.relations=[
          ], this.knowledgeNodes=[
          ], this.active=!1, this.collapsed=!1, this.showing=!0, this.numberOfFolds=0, this.uuid=(0, a.A)(), this.version=0, this.checked=!1
        }
        return e.clone=function(t){
          var n=new e;
          return n.id=t.id, n.name=t.name, n.description=t.description, n.cognitiveDimension=t.cognitiveDimension, n.levelId=t.levelId, n.knowledgeNodes=t.knowledgeNodes, n.sort=t.sort, n.level=t.level, n
        }, e.prototype.validRelation=function(e, t){
          return e===this.id||t===this.id
        }, e.prototype.getRelation=function(){
          for(var e=[
          ], t=0;
          t<arguments.length;
          t++)e[
            t
          ]
          =arguments[
            t
          ];
          if(1===e.length)return this.relations.find((function(t){
            return t.id===e[
              0
            ]
          }));
          var n=e[
            0
          ], o=e[
            1
          ];
          return this.validRelation(n, o)?this.relations.find((function(e){
            return e.isRelation([
              n, o
            ])
          })):void 0
        }, e.prototype.addRelation=function(e){
          this.validRelation(e.problemId, e.relatedProblemId)&&(this.getRelation(e.problemId, e.relatedProblemId)||this.relations.push(e))
        }, e.prototype.removeRelation=function(e){
          this.relations="number"==typeof e?this.relations.filter((function(t){
            return t.id!==e
          })):this.relations.filter((function(t){
            return!t.isRelation(e)
          }))
        }, e.prototype.activated=function(){
          this.active=!0
        }, e.prototype.deactivate=function(){
          this.active=!1
        }, e.prototype.setConnector=function(e){
          this._connector=e
        }, Object.defineProperty(e.prototype, "elId", {
          get:function(){
            return"".concat((0, c.rI)(this.id), "-").concat(this.uuid)
          }, enumerable:!1, configurable:!0
        }), Object.defineProperty(e.prototype, "connector", {
          get:function(){
            return this._connector
          }, enumerable:!1, configurable:!0
        }), u([
          (0, i.Z)((function(){
            return v
          }))
        ], e.prototype, "relations", void 0), u([
          (0, r.d)((function(e){
            var t=e.value;
            return"none"===t?"":t
          })), (0, l.v)({
            name:"cognitive_dimension"
          })
        ], e.prototype, "cognitiveDimension", void 0), u([
          (0, l.v)({
            name:"level_id"
          })
        ], e.prototype, "levelId", void 0), u([
          (0, r.d)((function(e){
            return e.obj.knowledge_nodes.map((function(e){
              return e.knowledge_node
            }))
          })), (0, l.v)({
            name:"knowledge_nodes"
          })
        ], e.prototype, "knowledgeNodes", void 0), e
      }
      (), f=function(){
        function e(){
          this.problems=[
          ]
        }
        return e.clone=function(t){
          var n=new e;
          return n.id=t.id, n.courseId=t.courseId, n.description=t.description, n
        }, e.prototype.getProblemByUuid=function(e){
          return this.problems.find((function(t){
            return t.uuid===e
          }))
        }, e.prototype.getProblemIndexByUuid=function(e){
          return this.problems.findIndex((function(t){
            return t.uuid===e
          }))
        }, e.prototype.resortProblemViaIndex=function(){
          var e=[
          ], t=1;
          this.problems.forEach((function(n){
            if(n.showing&&!n.collapsed){
              for(;
              e.includes(t);
              )t++;
              n.sort=t, e.push(t)
            }
            else e.push(n.sort)
          }))
        }, e.prototype.fixCollapsedProblemSort=function(){
          var e=new Map;
          this.problems.forEach((function(t){
            e.has(t.id)||e.set(t.id, [
            ]), e.get(t.id).push(t)
          })), e.forEach((function(e){
            if(e.length>1){
              var t=e.find((function(e){
                return!e.collapsed
              }));
              t&&e.forEach((function(e){
                e.sort=t.sort
              }))
            }
          }))
        }, e.prototype.sortProblem=function(e, t){
          if(this.level!==c.$t.FIRST){
            var n=this.problems.filter((function(e){
              return e.collapsed
            }));
            e+=n.length, t+=n.length
          }
          var o=this.problems.splice(e, 1)[
            0
          ];
          this.problems.splice(t, 0, o), this.resortProblemViaIndex(), this.fixCollapsedProblemSort()
        }, e.prototype.getSortData=function(){
          return(0, c.Am)(this.problems.map((function(e){
            return{
              id:e.id, sort:e.sort
            }
          })), "id")
        }, e.prototype.insert=function(e, t){
          var n, o=Array.isArray(e)?e:[
            e
          ];
          (n=this.problems).splice.apply(n, d([
            t, 0
          ], o, !1))
        }, e.prototype.insertAfter=function(e, t){
          var n=this.getProblemIndexByUuid(e.uuid);
          -1!==n&&this.insert(t, n+1)
        }, e.prototype.insertBefore=function(e, t){
          var n=this.getProblemIndexByUuid(e.uuid);
          -1!==n&&this.insert(t, n)
        }, e.prototype.moveProblemToFrontByVersions=function(e){
          var t=this;
          if(this.level!==c.$t.FIRST){
            this.problems.sort((function(e, t){
              return e.sort-t.sort
            }));
            var n=e.flatMap((function(e){
              return t.problems.filter((function(t){
                return t.version===e
              }))
            })), o=this.problems.filter((function(e){
              return!e.collapsed
            }));
            this.problems=d(d([
            ], n, !0), o, !0)
          }
        }, Object.defineProperty(e.prototype, "count", {
          get:function(){
            return(0, c.Am)(this.problems, "id").length
          }, enumerable:!1, configurable:!0
        }), u([
          (0, l.v)({
            name:"course_id"
          })
        ], e.prototype, "courseId", void 0), u([
          (0, r.d)((function(e){
            var t=e.value;
            return c.$t[
              t.toUpperCase()
            ]
          }))
        ], e.prototype, "level", void 0), u([
          (0, r.d)((function(e){
            var t=e.obj, n=c.$t[
              t.level.toUpperCase()
            ];
            return t.problems.map((function(e){
              var t=(0, s.plainToClass)(p, e);
              return t.level=n, t
            }))
          }), {
            toClassOnly:!0
          })
        ], e.prototype, "problems", void 0), e
      }
      (), v=function(){
        function e(){
        }
        return e.clone=function(t){
          var n=new e;
          return n.id=t.id, n.problemId=t.problemId, n.relatedProblemId=t.relatedProblemId, n
        }, e.prototype.isRelation=function(e){
          if("number"==typeof e)return this.problemId===e||this.relatedProblemId===e;
          var t, n;
          if(Array.isArray(e)?(t=e[
            0
          ], n=e[
            1
          ]):(0, o.Gvm)(e)&&(t=e.problemId, n=e.relatedProblemId), !t||!n||t===n)return!1;
          var a=[
            this.problemId, this.relatedProblemId
          ];
          return a.includes(t)&&a.includes(n)
        }, u([
          (0, l.v)({
            name:"problem_id"
          })
        ], e.prototype, "problemId", void 0), u([
          (0, l.v)({
            name:"related_problem_id"
          })
        ], e.prototype, "relatedProblemId", void 0), e
      }
      ()
    }, 237284:(e, t, n)=>{
      n.d(t, {
        A:()=>b
      });
      n(540590), n(418665), n(714913), n(269193), n(158649), n(14602);
      var o=n(595738), a=n(218831), i=n(552979), r=n(497248), l=n(255634), s=n(731904), c=n(516844), u=n(888634), d=n(302543), p=n(193551), f=n(877401), v=n(248124), h=function(e, t, n, o){
        return new(n||(n=Promise))((function(a, i){
          function r(e){
            try{
              s(o.next(e))
            }
            catch(e){
              i(e)
            }
          }
          function l(e){
            try{
              s(o.throw(e))
            }
            catch(e){
              i(e)
            }
          }
          function s(e){
            var t;
            e.done?a(e.value):(t=e.value, t instanceof n?t:new n((function(e){
              e(t)
            }))).then(r, l)
          }
          s((o=o.apply(e, t||[
          ])).next())
        }))
      }, m=function(e, t){
        var n, o, a, i, r={
          label:0, sent:function(){
            if(1&a[
              0
            ])throw a[
              1
            ];
            return a[
              1
            ]
          }, trys:[
          ], ops:[
          ]
        };
        return i={
          next:l(0), throw:l(1), return:l(2)
        }, "function"==typeof Symbol&&(i[
          Symbol.iterator
        ]
        =function(){
          return this
        }), i;
        function l(l){
          return function(s){
            return function(l){
              if(n)throw new TypeError("Generator is already executing.");
              for(;
              i&&(i=0, l[
                0
              ]
              &&(r=0)), r;
              )try{
                if(n=1, o&&(a=2&l[
                  0
                ]
                ?o.return:l[
                  0
                ]
                ?o.throw||((a=o.return)&&a.call(o), 0):o.next)&&!(a=a.call(o, l[
                  1
                ])).done)return a;
                switch(o=0, a&&(l=[
                  2&l[
                    0
                  ], a.value
                ]), l[
                  0
                ]){
                  case 0:case 1:a=l;
                  break;
                  case 4:return r.label++, {
                    value:l[
                      1
                    ], done:!1
                  };
                  case 5:r.label++, o=l[
                    1
                  ], l=[
                    0
                  ];
                  continue;
                  case 7:l=r.ops.pop(), r.trys.pop();
                  continue;
                  default:if(!(a=r.trys, (a=a.length>0&&a[
                    a.length-1
                  ])||6!==l[
                    0
                  ]
                  &&2!==l[
                    0
                  ])){
                    r=0;
                    continue
                  }
                  if(3===l[
                    0
                  ]
                  &&(!a||l[
                    1
                  ]
                  >a[
                    0
                  ]
                  &&l[
                    1
                  ]
                  <a[
                    3
                  ])){
                    r.label=l[
                      1
                    ];
                    break
                  }
                  if(6===l[
                    0
                  ]
                  &&r.label<a[
                    1
                  ]){
                    r.label=a[
                      1
                    ], a=l;
                    break
                  }
                  if(a&&r.label<a[
                    2
                  ]){
                    r.label=a[
                      2
                    ], r.ops.push(l);
                    break
                  }
                  a[
                    2
                  ]
                  &&r.ops.pop(), r.trys.pop();
                  continue
                }
                l=t.call(e, r)
              }
              catch(e){
                l=[
                  6, e
                ], o=0
              }
              finally{
                n=a=0
              }
              if(5&l[
                0
              ])throw l[
                1
              ];
              return{
                value:l[
                  0
                ]
                ?l[
                  1
                ]
                :void 0, done:!0
              }
            }
            ([
              l, s
            ])
          }
        }
      };
      const g=(0, o.pM)({
        props:{
          keyword:{
            type:String, default:""
          }, activityCount:{
            type:Number, default:0
          }, uploadCount:{
            type:Number, default:0
          }, nodeId:{
            type:Number
          }, stripe:{
            type:Boolean, default:!0
          }
        }, components:{
          TooltipExt:l.A, Pagination:u.A
        }, setup:function(e, t){
          var n, l, u, g, b=this, y=[
            {
              title:i.default.t("knowledgeGraph.statistics.resourceName"), key:"name", width:e.nodeId?"183px":"280px", slot:"name"
            }, {
              title:i.default.t("knowledgeGraph.statistics.completionStudents"), key:"completionStudent", width:e.nodeId?"212px":"178px", renderHeader:function(e, t){
                return e("span", {
                  style:{
                    display:"flex", "flex-direction":"row", "align-items":"center"
                  }
                }, [
                  e("span", {
                    style:{
                      "margin-right":"4px"
                    }
                  }, t.column.title), e("Tooltip", {
                    props:{
                      transfer:!0, placement:"top", effect:"light", "white-space":"normal", content:i.default.t("knowledgeGraph.statistics.completionConditions")
                    }
                  }, [
                    e("i", {
                      class:"font font-question"
                    })
                  ])
                ])
              }
            }, {
              title:i.default.t("knowledgeGraph.statistics.completeness"), key:"completeness", width:e.nodeId?"183px":"280px", sortable:!0, sortMethod:p.X
            }, {
              title:i.default.t("knowledgeGraph.statistics.visits"), key:"visits", width:e.nodeId?"183px":"178px", sortable:!0
            }, {
              title:i.default.t("knowledgeGraph.operation"), width:e.nodeId?"88px":"80px", key:"operation", slot:"operation"
            }
          ], w=[
            {
              title:i.default.t("knowledgeGraph.statistics.activityName"), key:"name", width:e.nodeId?"269px":"280px", slot:"name"
            }, {
              title:i.default.t("knowledgeGraph.statistics.activityType"), width:e.nodeId?"120px":"134px", key:"type", render:function(e, t){
                return e("span", i.default.t("activityType.".concat(t.row.type)))
              }
            }, {
              title:i.default.t("knowledgeGraph.statistics.completionStudents"), width:e.nodeId?"120px":"134px", key:"completionStudent"
            }, {
              title:i.default.t("knowledgeGraph.statistics.completeness"), width:e.nodeId?"120px":"134px", key:"completeness", sortable:!0, sortMethod:p.X
            }, {
              title:i.default.t("knowledgeGraph.statistics.mastery"), key:"masteryRate", width:e.nodeId?"120px":"134px", sortable:!0, sortMethod:function(e, t, n){
                return"--"===e?1:"--"===t?-1:(0, p.X)(e, t, n)
              }
            }, {
              title:i.default.t("knowledgeGraph.operation"), width:e.nodeId?"100px":"80px", key:"operation", slot:"operation"
            }
          ], _=(0, o.KR)(""), C=(0, o.KR)([
          ]), k=null!==(n=e.nodeId)&&void 0!==n?n:Number(window.location.hash.split("/").slice(-1)[
            0
          ]), x=null!==(g=null===(u=null===(l=window.globalData)||void 0===l?void 0:l.course)||void 0===u?void 0:u.id)&&void 0!==g?g:0, R=(0, o.lW)(e, "keyword"), S=(0, o.KR)(), E=function(e, t){
            return h(b, void 0, void 0, (function(){
              var n;
              return m(this, (function(o){
                return n={
                  keyword:R.value
                }, [
                  2, (0, f.RK)(k, e, t, n)
                ]
              }))
            }))
          }, T=function(e, t){
            return h(b, void 0, void 0, (function(){
              var n;
              return m(this, (function(o){
                return n={
                  keyword:R.value
                }, [
                  2, (0, f.rc)(k, e, t, n)
                ]
              }))
            }))
          }, D=function(){
            "upload"===_.value&&(S.value=(0, r.WQ)(E)), "activity"===_.value&&(S.value=(0, r.WQ)(T))
          }, N=function(e){
            "upload"===e&&(_.value=e, C.value=y), "activity"===e&&(_.value=e, C.value=w), t.emit("tab-changed", e)
          };
          return(0, o.wB)((function(){
            return e.keyword
          }), (function(){
            var e;
            D(), null===(e=S.value)||void 0===e||e.fetch()
          })), (0, o.wB)((function(){
            return _.value
          }), (function(){
            var e;
            D(), null===(e=S.value)||void 0===e||e.fetch()
          })), (0, o.sV)((function(){
            N("upload")
          })), {
            tab:_, columns:C, pagination:S, fileTypeByExtension:s.fileTypeByExtension, openDetail:function(e){
              return"activity"===_.value?"exam"===e.type?window.open("/course/".concat(x, "/learning-activity/full-screen#/exam/").concat(e.id), "_blank"):window.open("/course/".concat(x, "/learning-activity/full-screen#/").concat(e.id), "_blank"):"upload"===_.value?function(e){
                document.fullscreenElement&&document.exitFullscreen();
                var t=(0, c.useAngularScope)(), n=(0, d.map)(S.value.data.items, (function(e){
                  return(0, a.decamelizeKeys)(e)
                })), o=(0, a.decamelizeKeys)(e);
                t.$broadcast("previewFiles", n, o), v("#file-previewer").foundation("reveal", "open")
              }
              (e):null
            }, changeTab:N, formatActivityType:function(e){
              return e.split("_").join("-")
            }
          }
        }
      });
      const b=(0, n(514486).A)(g, (function(){
        var e=this, t=e.$createElement, n=e._self._c||t;
        return n("div", {
          staticClass:"content"
        }, [
          n("div", {
            staticClass:"tabs"
          }, [
            n("div", {
              staticClass:"tab", class:{
                active:"upload"===e.tab
              }, on:{
                click:function(t){
                  return e.changeTab("upload")
                }
              }
            }, [
              e._v("\n      "+e._s(e.$t("knowledgeGraph.referenceResource"))+" ("+e._s(e.uploadCount)+")\n    ")
            ]), e._v(" "), n("div", {
              staticClass:"tab", class:{
                active:"activity"===e.tab
              }, on:{
                click:function(t){
                  return e.changeTab("activity")
                }
              }
            }, [
              e._v("\n      "+e._s(e.$t("knowledgeGraph.referenceActivity"))+" ("+e._s(e.activityCount)+")\n    ")
            ])
          ]), e._v(" "), n("Table", {
            staticClass:"table-wrapper", attrs:{
              columns:e.columns, data:e.pagination&&e.pagination.data&&e.pagination.data.items||[
              ], stripe:e.stripe
            }, scopedSlots:e._u([
              {
                key:"name", fn:function(t){
                  var o=t.row;
                  return[
                    n("div", {
                      staticClass:"name-wrapper"
                    }, [
                      "upload"===e.tab?n("i", {
                        class:"font font-file-"+e.fileTypeByExtension(o)
                      }):e._e(), e._v(" "), "activity"===e.tab?n("i", {
                        class:"font font-syllabus-"+e.formatActivityType(o.type)
                      }):e._e(), e._v(" "), n("TooltipExt", {
                        staticClass:"name", attrs:{
                          text:o.name
                        }
                      })
                    ], 1)
                  ]
                }
              }, {
                key:"operation", fn:function(t){
                  var o=t.row;
                  return[
                    n("div", {
                      staticClass:"operation"
                    }, [
                      n("Tooltip", {
                        attrs:{
                          content:e.$t("view"), placement:"top"
                        }
                      }, [
                        n("i", {
                          staticClass:"font font-resource-view", on:{
                            click:function(t){
                              return t.stopPropagation(), e.openDetail(o)
                            }
                          }
                        })
                      ])
                    ], 1)
                  ]
                }
              }
            ])
          }), e._v(" "), e.pagination&&e.pagination.data&&e.pagination.data.pages>0?n("div", {
            staticClass:"pagination"
          }, [
            n("Pagination", {
              attrs:{
                total:e.pagination.data.total, "page-size":e.pagination.data.pageSize, current:e.pagination.data.page, "show-sizer":"", "show-elevator":""
              }, on:{
                "on-change":e.pagination.pageChanged, "on-page-size-change":e.pagination.pageSizeChanged
              }
            })
          ], 1):e._e()
        ], 1)
      }), [
      ], !1, null, "6895fb75", null).exports
    }, 243248:(e, t, n)=>{
      n.d(t, {
        A:()=>Se
      });
      var o=n(595738), a=n(255634), i=n(574799), r=(n(540590), n(418665), n(714913), n(269193), n(979073), n(906048), n(43148), n(868329), n(658379), n(14602), n(384027)), l=n(552979), s=n(121087), c=n(731904), u=n(526320), d=n(972194), p=n(877401), f=n(766800), v=n(405852), h=n(48292);
      const m=(0, o.pM)({
        props:{
          node:{
            type:Object, required:!0
          }
        }, setup:function(e){
          var t=(0, o.EW)((function(){
            return{
              prev:e.node.data.prevRelation.map((function(e){
                return e.name
              })).join(" \\ "), post:e.node.data.postRelation.map((function(e){
                return e.name
              })).join(" \\ "), undirected:e.node.data.undirectedRelation.map((function(e){
                return e.name
              })).join(" \\ ")
            }
          })), n=(0, o.EW)((function(){
            return h.E6.filter((function(e){
              return t.value[
                e.key
              ].length
            }))
          })), a=(0, o.KR)(!1);
          return{
            showingRelationTypes:n, relations:t, expanded:a, toggleExpand:function(e, t){
              t>0||(a.value=!a.value)
            }
          }
        }
      });
      var g=n(514486);
      const b=(0, g.A)(m, (function(){
        var e=this, t=e.$createElement, n=e._self._c||t;
        return n("div", {
          staticClass:"relation-node-wrapper"
        }, [
          e._l(e.showingRelationTypes, (function(t, o){
            return[
              n("transition", {
                key:t.key, attrs:{
                  name:"move-up"
                }
              }, [
                0===o||e.expanded?n("div", {
                  staticClass:"item", class:{
                    expanded:e.expanded, "ml-18":o>0
                  }, on:{
                    click:function(t){
                      return e.toggleExpand(t, o)
                    }
                  }
                }, [
                  0===o&&e.showingRelationTypes.length>1?n("Icon", {
                    staticClass:"icon", attrs:{
                      type:"ios-arrow-down"
                    }
                  }):e._e(), e._v(" "), n("Tooltip", {
                    directives:[
                      {
                        name:"ellipsis", rawName:"v-ellipsis"
                      }
                    ], attrs:{
                      content:e.relations[
                        t.key
                      ], placement:"top", transfer:""
                    }
                  }, [
                    n("span", [
                      e._v("\n            "+e._s(t.name)+":\n            "+e._s(e.relations[
                        t.key
                      ])+"\n          ")
                    ])
                  ])
                ], 1):e._e()
              ])
            ]
          }))
        ], 2)
      }), [
      ], !1, null, "05c814c7", null).exports;
      var y=n(794128), w=(n(215195), n(700533), n(168763), n(445708), function(e, t, n, o){
        return new(n||(n=Promise))((function(a, i){
          function r(e){
            try{
              s(o.next(e))
            }
            catch(e){
              i(e)
            }
          }
          function l(e){
            try{
              s(o.throw(e))
            }
            catch(e){
              i(e)
            }
          }
          function s(e){
            var t;
            e.done?a(e.value):(t=e.value, t instanceof n?t:new n((function(e){
              e(t)
            }))).then(r, l)
          }
          s((o=o.apply(e, t||[
          ])).next())
        }))
      }), _=function(e, t){
        var n, o, a, i, r={
          label:0, sent:function(){
            if(1&a[
              0
            ])throw a[
              1
            ];
            return a[
              1
            ]
          }, trys:[
          ], ops:[
          ]
        };
        return i={
          next:l(0), throw:l(1), return:l(2)
        }, "function"==typeof Symbol&&(i[
          Symbol.iterator
        ]
        =function(){
          return this
        }), i;
        function l(l){
          return function(s){
            return function(l){
              if(n)throw new TypeError("Generator is already executing.");
              for(;
              i&&(i=0, l[
                0
              ]
              &&(r=0)), r;
              )try{
                if(n=1, o&&(a=2&l[
                  0
                ]
                ?o.return:l[
                  0
                ]
                ?o.throw||((a=o.return)&&a.call(o), 0):o.next)&&!(a=a.call(o, l[
                  1
                ])).done)return a;
                switch(o=0, a&&(l=[
                  2&l[
                    0
                  ], a.value
                ]), l[
                  0
                ]){
                  case 0:case 1:a=l;
                  break;
                  case 4:return r.label++, {
                    value:l[
                      1
                    ], done:!1
                  };
                  case 5:r.label++, o=l[
                    1
                  ], l=[
                    0
                  ];
                  continue;
                  case 7:l=r.ops.pop(), r.trys.pop();
                  continue;
                  default:if(!(a=r.trys, (a=a.length>0&&a[
                    a.length-1
                  ])||6!==l[
                    0
                  ]
                  &&2!==l[
                    0
                  ])){
                    r=0;
                    continue
                  }
                  if(3===l[
                    0
                  ]
                  &&(!a||l[
                    1
                  ]
                  >a[
                    0
                  ]
                  &&l[
                    1
                  ]
                  <a[
                    3
                  ])){
                    r.label=l[
                      1
                    ];
                    break
                  }
                  if(6===l[
                    0
                  ]
                  &&r.label<a[
                    1
                  ]){
                    r.label=a[
                      1
                    ], a=l;
                    break
                  }
                  if(a&&r.label<a[
                    2
                  ]){
                    r.label=a[
                      2
                    ], r.ops.push(l);
                    break
                  }
                  a[
                    2
                  ]
                  &&r.ops.pop(), r.trys.pop();
                  continue
                }
                l=t.call(e, r)
              }
              catch(e){
                l=[
                  6, e
                ], o=0
              }
              finally{
                n=a=0
              }
              if(5&l[
                0
              ])throw l[
                1
              ];
              return{
                value:l[
                  0
                ]
                ?l[
                  1
                ]
                :void 0, done:!0
              }
            }
            ([
              l, s
            ])
          }
        }
      }, C=function(e, t, n){
        if(n||2===arguments.length)for(var o, a=0, i=t.length;
        a<i;
        a++)!o&&a in t||(o||(o=Array.prototype.slice.call(t, 0, a)), o[
          a
        ]
        =t[
          a
        ]);
        return e.concat(o||Array.prototype.slice.call(t))
      }, k=function(e, t){
        var n=t||(0, o.WQ)("course", {
          id:0
        });
        n.id||console.error("course id is invalid");
        var a=function(t){
          return w(void 0, void 0, void 0, (function(){
            var n, o, a;
            return _(this, (function(i){
              return n=e.value.findAll((function(e){
                return t.includes(e.id)
              })), o=n.reduce((function(e, t){
                return C(C(C(C([
                ], e, !0), t.data.prevRelation, !0), t.data.postRelation, !0), t.data.undirectedRelation, !0)
              }), [
              ]).map((function(e){
                return e.relationId
              })), o=Array.from(new Set(o)), a=function(e, t){
                var n=e.findIndex((function(e){
                  return e.relationId===t
                }));
                n>-1&&e.splice(n, 1)
              }, e.value.recurseDown((function(e){
                o.forEach((function(t){
                  a(e.data.postRelation, t), a(e.data.prevRelation, t), a(e.data.undirectedRelation, t)
                }))
              })), [
                2
              ]
            }))
          }))
        };
        return{
          addNew:function(){
            return w(void 0, void 0, void 0, (function(){
              return _(this, (function(t){
                return e.value.append(f.Vz.create()), [
                  2
                ]
              }))
            }))
          }, addSibling:function(t){
            var n;
            t.isRoot()?e.value.append(f.Vz.create()):(e.value.append(t.parent, f.Vz.create()), null===(n=t.expandTop)||void 0===n||n.call(t))
          }, addChild:function(t){
            var n=e.value.find((function(e){
              return t.id===e.id
            }));
            n&&n.length&&(t=n[
              0
            ]), t.expandTop(), e.value.append(t, f.Vz.create()), t.expand()
          }, remove:function(e){
            return w(void 0, void 0, void 0, (function(){
              return _(this, (function(t){
                switch(t.label){
                  case 0:return[
                    4, (0, p.S7)(e.id)
                  ];
                  case 1:return t.sent(), a([
                    e.id
                  ]), e.remove(), u.A.$emit("search-toolbar-node-deleted", [
                    e.id
                  ]), [
                    2
                  ]
                }
              }))
            }))
          }, batchRemove:function(){
            return w(void 0, void 0, void 0, (function(){
              var t, o;
              return _(this, (function(i){
                switch(i.label){
                  case 0:return t=e.value.checked(), o=[
                  ], (0, v.dY)(t, (function(e){
                    Number.isNaN(e.id)||o.push(Number(e.id))
                  })), 0===o.length?[
                    2
                  ]
                  :[
                    4, (0, p.Ev)(n.id, o)
                  ];
                  case 1:return i.sent(), a(o), u.A.$emit("search-toolbar-node-deleted", o), t.forEach((function(e){
                    e.remove()
                  })), [
                    2
                  ]
                }
              }))
            }))
          }
        }
      }, x=function(e, t, n, o){
        return new(n||(n=Promise))((function(a, i){
          function r(e){
            try{
              s(o.next(e))
            }
            catch(e){
              i(e)
            }
          }
          function l(e){
            try{
              s(o.throw(e))
            }
            catch(e){
              i(e)
            }
          }
          function s(e){
            var t;
            e.done?a(e.value):(t=e.value, t instanceof n?t:new n((function(e){
              e(t)
            }))).then(r, l)
          }
          s((o=o.apply(e, t||[
          ])).next())
        }))
      }, R=function(e, t){
        var n, o, a, i, r={
          label:0, sent:function(){
            if(1&a[
              0
            ])throw a[
              1
            ];
            return a[
              1
            ]
          }, trys:[
          ], ops:[
          ]
        };
        return i={
          next:l(0), throw:l(1), return:l(2)
        }, "function"==typeof Symbol&&(i[
          Symbol.iterator
        ]
        =function(){
          return this
        }), i;
        function l(l){
          return function(s){
            return function(l){
              if(n)throw new TypeError("Generator is already executing.");
              for(;
              i&&(i=0, l[
                0
              ]
              &&(r=0)), r;
              )try{
                if(n=1, o&&(a=2&l[
                  0
                ]
                ?o.return:l[
                  0
                ]
                ?o.throw||((a=o.return)&&a.call(o), 0):o.next)&&!(a=a.call(o, l[
                  1
                ])).done)return a;
                switch(o=0, a&&(l=[
                  2&l[
                    0
                  ], a.value
                ]), l[
                  0
                ]){
                  case 0:case 1:a=l;
                  break;
                  case 4:return r.label++, {
                    value:l[
                      1
                    ], done:!1
                  };
                  case 5:r.label++, o=l[
                    1
                  ], l=[
                    0
                  ];
                  continue;
                  case 7:l=r.ops.pop(), r.trys.pop();
                  continue;
                  default:if(!(a=r.trys, (a=a.length>0&&a[
                    a.length-1
                  ])||6!==l[
                    0
                  ]
                  &&2!==l[
                    0
                  ])){
                    r=0;
                    continue
                  }
                  if(3===l[
                    0
                  ]
                  &&(!a||l[
                    1
                  ]
                  >a[
                    0
                  ]
                  &&l[
                    1
                  ]
                  <a[
                    3
                  ])){
                    r.label=l[
                      1
                    ];
                    break
                  }
                  if(6===l[
                    0
                  ]
                  &&r.label<a[
                    1
                  ]){
                    r.label=a[
                      1
                    ], a=l;
                    break
                  }
                  if(a&&r.label<a[
                    2
                  ]){
                    r.label=a[
                      2
                    ], r.ops.push(l);
                    break
                  }
                  a[
                    2
                  ]
                  &&r.ops.pop(), r.trys.pop();
                  continue
                }
                l=t.call(e, r)
              }
              catch(e){
                l=[
                  6, e
                ], o=0
              }
              finally{
                n=a=0
              }
              if(5&l[
                0
              ])throw l[
                1
              ];
              return{
                value:l[
                  0
                ]
                ?l[
                  1
                ]
                :void 0, done:!0
              }
            }
            ([
              l, s
            ])
          }
        }
      };
      const S=(0, o.pM)({
        props:{
          node:{
            type:Object, required:!0
          }, tree:{
            type:Object, required:!0
          }
        }, setup:function(e, t){
          var n=this, a=(0, o.lW)(e, "tree"), r=k(a), s=(0, d.D)().depth, p=(0, o.KR)(!1), f=(0, o.EW)((function(){
            return!!e.node.tree.vm.draggableNode
          })), v=function e(t){
            for(var n=t.data.activityRefCount, o=t.data.resourceRefCount, a=t.data.subjectRefCount, i=t.data.captureRefCount, r=1, l=t.children||[
            ], s=0;
            s<l.length;
            s++){
              var c=e(l[
                s
              ]);
              n+=c[
                0
              ], o+=c[
                1
              ], a+=c[
                2
              ], i+=c[
                3
              ], r+=c[
                4
              ]
            }
            return[
              n, o, a, i, r
            ]
          }, h=function(){
            return x(n, void 0, void 0, (function(){
              var t;
              return R(this, (function(n){
                switch(n.label){
                  case 0:return t=v(e.node), [
                    4, (0, y.$0)(t)
                  ];
                  case 1:return n.sent()?[
                    4, r.remove(e.node)
                  ]
                  :[
                    3, 3
                  ];
                  case 2:n.sent(), c.UniqueToast.success(l.default.t("delete_success")), n.label=3;
                  case 3:return[
                    2
                  ]
                }
              }))
            }))
          }, m=function(e){
            !function(e){
              return e.depth+1>=s
            }
            (e)?r.addChild(e):c.UniqueToast.error(l.default.t("knowledgeGraph.maxDepthTip"))
          }, g=(0, o.EW)((function(){
            return!i.Br&&!i.dn.value&&i.yb
          }));
          return{
            handleMouseDown:function(t){
              t.preventDefault(), e.node.vm.handleMouseDown(t)
            }, dragging:f, handleOption:function(n, o){
              switch(n.stopPropagation(), o){
                case"addSibling":return r.addSibling(e.node), u.A.$emit("close-drawer");
                case"addChild":return m(e.node), u.A.$emit("close-drawer");
                case"delete":return h();
                case"relation":return e.node.$emit("relation:setting", e.node);
                case"cognitiveDimension":return t.emit("show-edit-cognitive-dimension-popper");
                case"attribute":return u.A.$emit("show-drawer");
                case"batchDelete":return e.node.$emit("batch-delete")
              }
            }, del:h, add:function(e, t){
              "peer"===e&&(r.addSibling(t), u.A.$emit("close-drawer")), "child"===e&&(m(t), u.A.$emit("close-drawer"))
            }, canEdit:g, depth:s, visible:p, onVisibleChange:function(e){
              p.value=e
            }, editDisabled:i.tq
          }
        }
      });
      const E=(0, g.A)(S, (function(){
        var e=this, t=e.$createElement, n=e._self._c||t;
        return n("div", {
          on:{
            mousedown:function(e){
              e.stopPropagation()
            }
          }
        }, [
          n("Dropdown", {
            attrs:{
              trigger:"click", placement:"bottom-start"
            }, on:{
              "on-visible-change":e.onVisibleChange
            }
          }, [
            n("Tooltip", {
              attrs:{
                transfer:"", placement:"top", disabled:e.dragging||!e.canEdit||e.visible, "transfer-class-name":"knowledge-graph-outline-tooltip"
              }
            }, [
              n("span", {
                staticClass:"drag-hand", class:{
                  fluctuation:e.canEdit, "menu-visible":e.visible&&e.canEdit
                }, on:{
                  mousedown:e.handleMouseDown
                }
              }, [
                n("span", {
                  staticClass:"circle-button", class:{
                    green:e.visible
                  }
                })
              ]), e._v(" "), n("div", {
                attrs:{
                  slot:"content"
                }, slot:"content"
              }, [
                e._v("\n        "+e._s(e.$t("knowledgeGraph.dragNodeTip"))+"\n        "), n("br"), e._v("\n        "+e._s(e.$t("knowledgeGraph.moreTip"))+"\n      ")
              ])
            ]), e._v(" "), e.canEdit?n("DropdownMenu", {
              attrs:{
                slot:"list"
              }, slot:"list"
            }, [
              e.editDisabled?e._e():n("DropdownItem", {
                attrs:{
                  name:"addSibling"
                }, nativeOn:{
                  click:function(t){
                    return e.handleOption(t, "addSibling")
                  }
                }
              }, [
                n("i", {
                  staticClass:"font font-sibling-node"
                }), e._v("\n        "+e._s(e.$t("knowledgeGraph.siblingNode"))+"\n      ")
              ]), e._v(" "), e.node.depth<e.depth-1&&!e.editDisabled?n("DropdownItem", {
                attrs:{
                  name:"addChild"
                }, nativeOn:{
                  click:function(t){
                    return e.handleOption(t, "addChild")
                  }
                }
              }, [
                n("i", {
                  staticClass:"font font-mind-child"
                }), e._v("\n        "+e._s(e.$t("knowledgeGraph.childNode"))+"\n      ")
              ]):e._e(), e._v(" "), e.editDisabled?e._e():n("DropdownItem", {
                attrs:{
                  name:"relation"
                }, nativeOn:{
                  click:function(t){
                    return e.handleOption(t, "relation")
                  }
                }
              }, [
                n("i", {
                  staticClass:"font font-relation"
                }), e._v("\n        "+e._s(e.$t("knowledgeGraph.relation"))+"\n      ")
              ]), e._v(" "), n("DropdownItem", {
                attrs:{
                  divided:!e.editDisabled, name:"cognitiveDimension"
                }, nativeOn:{
                  click:function(t){
                    return e.handleOption(t, "cognitiveDimension")
                  }
                }
              }, [
                n("i", {
                  staticClass:"font font-cognitive-dimension"
                }), e._v("\n        "+e._s(e.$t("knowledgeGraph.cognitiveDimension.name"))+"\n      ")
              ]), e._v(" "), n("DropdownItem", {
                attrs:{
                  name:"attribute"
                }, nativeOn:{
                  click:function(t){
                    return e.handleOption(t, "attribute")
                  }
                }
              }, [
                n("i", {
                  staticClass:"font font-attribute"
                }), e._v("\n        "+e._s(e.$t("knowledgeGraph.attributes"))+"\n      ")
              ]), e._v(" "), e.editDisabled?e._e():n("DropdownItem", {
                attrs:{
                  divided:"", name:"delete"
                }, nativeOn:{
                  click:function(t){
                    return e.handleOption(t, "batchDelete")
                  }
                }
              }, [
                n("SvgIcon", {
                  staticClass:"batch-delete-icon", attrs:{
                    name:"batch-delete"
                  }
                }), e._v("\n        "+e._s(e.$t("batch_delete"))+"\n      ")
              ], 1), e._v(" "), e.editDisabled?e._e():n("DropdownItem", {
                attrs:{
                  name:"delete"
                }, nativeOn:{
                  click:function(t){
                    return e.handleOption(t, "delete")
                  }
                }
              }, [
                n("i", {
                  staticClass:"font font-batch-operation-delete"
                }), e._v("\n        "+e._s(e.$t("knowledgeGraph.delete"))+"\n      ")
              ])
            ], 1):e._e()
          ], 1)
        ], 1)
      }), [
      ], !1, null, "7db6fcd3", null).exports;
      var T=n(322541), D=n(52823), N=function(e, t, n, o){
        return new(n||(n=Promise))((function(a, i){
          function r(e){
            try{
              s(o.next(e))
            }
            catch(e){
              i(e)
            }
          }
          function l(e){
            try{
              s(o.throw(e))
            }
            catch(e){
              i(e)
            }
          }
          function s(e){
            var t;
            e.done?a(e.value):(t=e.value, t instanceof n?t:new n((function(e){
              e(t)
            }))).then(r, l)
          }
          s((o=o.apply(e, t||[
          ])).next())
        }))
      }, I=function(e, t){
        var n, o, a, i, r={
          label:0, sent:function(){
            if(1&a[
              0
            ])throw a[
              1
            ];
            return a[
              1
            ]
          }, trys:[
          ], ops:[
          ]
        };
        return i={
          next:l(0), throw:l(1), return:l(2)
        }, "function"==typeof Symbol&&(i[
          Symbol.iterator
        ]
        =function(){
          return this
        }), i;
        function l(l){
          return function(s){
            return function(l){
              if(n)throw new TypeError("Generator is already executing.");
              for(;
              i&&(i=0, l[
                0
              ]
              &&(r=0)), r;
              )try{
                if(n=1, o&&(a=2&l[
                  0
                ]
                ?o.return:l[
                  0
                ]
                ?o.throw||((a=o.return)&&a.call(o), 0):o.next)&&!(a=a.call(o, l[
                  1
                ])).done)return a;
                switch(o=0, a&&(l=[
                  2&l[
                    0
                  ], a.value
                ]), l[
                  0
                ]){
                  case 0:case 1:a=l;
                  break;
                  case 4:return r.label++, {
                    value:l[
                      1
                    ], done:!1
                  };
                  case 5:r.label++, o=l[
                    1
                  ], l=[
                    0
                  ];
                  continue;
                  case 7:l=r.ops.pop(), r.trys.pop();
                  continue;
                  default:if(!(a=r.trys, (a=a.length>0&&a[
                    a.length-1
                  ])||6!==l[
                    0
                  ]
                  &&2!==l[
                    0
                  ])){
                    r=0;
                    continue
                  }
                  if(3===l[
                    0
                  ]
                  &&(!a||l[
                    1
                  ]
                  >a[
                    0
                  ]
                  &&l[
                    1
                  ]
                  <a[
                    3
                  ])){
                    r.label=l[
                      1
                    ];
                    break
                  }
                  if(6===l[
                    0
                  ]
                  &&r.label<a[
                    1
                  ]){
                    r.label=a[
                      1
                    ], a=l;
                    break
                  }
                  if(a&&r.label<a[
                    2
                  ]){
                    r.label=a[
                      2
                    ], r.ops.push(l);
                    break
                  }
                  a[
                    2
                  ]
                  &&r.ops.pop(), r.trys.pop();
                  continue
                }
                l=t.call(e, r)
              }
              catch(e){
                l=[
                  6, e
                ], o=0
              }
              finally{
                n=a=0
              }
              if(5&l[
                0
              ])throw l[
                1
              ];
              return{
                value:l[
                  0
                ]
                ?l[
                  1
                ]
                :void 0, done:!0
              }
            }
            ([
              l, s
            ])
          }
        }
      };
      const A=(0, o.pM)({
        name:"NodeContent", props:[
          "node"
        ], components:{
          TooltipExt:a.A
        }, setup:function(e){
          var t=this, n=(0, o.KR)(), a=(0, o.KR)(e.node.text), r=(0, o.KR)(!1), l=function(o, i){
            return N(t, void 0, void 0, (function(){
              var t, r, l, s, c, u;
              return I(this, (function(d){
                switch(d.label){
                  case 0:return t=o.tree.options.validate||function(){
                    for(var e=[
                    ], t=0;
                    t<arguments.length;
                    t++)e[
                      t
                    ]
                    =arguments[
                      t
                    ];
                    return!0
                  }, r=o.tree.options.save||function(){
                    for(var e=[
                    ], t=0;
                    t<arguments.length;
                    t++)e[
                      t
                    ]
                    =arguments[
                      t
                    ];
                    return Promise.resolve(!0)
                  }, t(o, i)?[
                    4, r(o, i, o.text)
                  ]
                  :[
                    3, 2
                  ];
                  case 1:return d.sent(), o.data.text=i, o.tree.vm.$emit("node:saved", o), o.stopEditing(i), null===(c=n.value)||void 0===c||c.blur(), e.node.vm.setFocus(), [
                    3, 3
                  ];
                  case 2:"string"==typeof e.node.id?(l=e.node.parent, o.remove(), null==(s=null===(u=null==l?void 0:l.children)||void 0===u?void 0:u[
                    l.children.length-1
                  ])||s.vm.setFocus()):(a.value=e.node.text, e.node.vm.setFocus()), d.label=3;
                  case 3:return[
                    2
                  ]
                }
              }))
            }))
          }, s=(0, o.EW)((function(){
            return!i.Br&&!i.dn.value&&(i.yb&&!i.tq.value)
          }));
          return(0, o.wB)((function(){
            return e.node.isEditing
          }), (function(){
            e.node.isEditing&&"string"==typeof e.node.id&&(0, o.dY)((function(){
              var t;
              null===(t=n.value)||void 0===t||t.focus(), e.node.vm.select()
            }))
          }), {
            immediate:!0
          }), (0, o.wB)((function(){
            return e.node.text
          }), (function(){
            a.value=e.node.text
          })), {
            nodeText:a, stopEditing:l, handleBlur:function(){
              l(e.node, a.value), r.value=!1
            }, editCtrl:n, startEditing:function(){
              e.node.startEditing()
            }, onKeyDown:function(e){
              e.stopPropagation(), 9!==e.keyCode&&13!==e.keyCode||e.preventDefault()
            }, setBlur:function(){
              var e;
              null===(e=n.value)||void 0===e||e.blur()
            }, canEdit:s, editName:function(){
              s.value&&(r.value=!0, (0, o.dY)((function(){
                var e;
                null===(e=n.value)||void 0===e||e.focus()
              })))
            }, editMode:r
          }
        }
      });
      const M=(0, g.A)(A, (function(){
        var e=this, t=e.$createElement, n=e._self._c||t;
        return n("div", {
          staticClass:"content-area"
        }, [
          e.editMode||e.node.isEditing?n("div", {
            staticClass:"tree-content"
          }, [
            n("span", {
              staticClass:"content"
            }, [
              e._v(e._s(e.nodeText))
            ]), e._v(" "), n("input", {
              ref:"editCtrl", staticClass:"tree-textarea", attrs:{
                type:"text", readonly:!e.canEdit
              }, domProps:{
                value:e.nodeText
              }, on:{
                blur:e.handleBlur, keydown:[
                  function(t){
                    return!t.type.indexOf("key")&&e._k(t.keyCode, "enter", 13, t.key, "Enter")?null:e.setBlur(t)
                  }, e.onKeyDown
                ], input:function(t){
                  e.nodeText=t.target.value
                }, mousedown:function(t){
                  return t.stopPropagation(), e.startEditing(t)
                }
              }
            })
          ]):n("div", {
            staticClass:"tree-content-with-tooltip", on:{
              click:e.editName, mousedown:function(e){
                e.stopPropagation()
              }
            }
          }, [
            n("TooltipExt", {
              attrs:{
                text:e.nodeText, "transfer-class-name":"knowledge-graph-outline-tooltip"
              }
            })
          ], 1)
        ])
      }), [
      ], !1, null, "46c5beb1", null).exports;
      var $=n(747499), j=n.n($);
      const L={
        props:[
          "node", "visibleChildren", "options", "allowFacetsAndFragments"
        ], render(e){
          var t=this.node.tree.vm;
          return t.$scopedSlots.expand?t.$scopedSlots.expand({
            node:this.node
          }):this.visibleChildren.length>0?e("span", j()([
            {
              class:[
                "triangle", {
                  expanded:this.node.states.expanded, "has-child":this.node.children.length&&this.visibleChildren.length>0
                }, this.options.direction
              ], style:{
                visibility:this.allowFacetsAndFragments?"hidden":"visible"
              }
            }, {
              on:{
                mousedown:e=>e.stopPropagation()
              }
            }
          ])):e("span", j()([
            {
              class:"triangle"
            }, {
              on:{
                mousedown:e=>e.stopPropagation()
              }
            }
          ]))
        }
      };
      const O=(0, g.A)(L, undefined, undefined, !1, null, null, null).exports;
      n(169218);
      var G=n(180180), P=function(){
        return(P=Object.assign||function(e){
          for(var t, n=1, o=arguments.length;
          n<o;
          n++)for(var a in t=arguments[
            n
          ])Object.prototype.hasOwnProperty.call(t, a)&&(e[
            a
          ]
          =t[
            a
          ]);
          return e
        }).apply(this, arguments)
      }, K=function(e, t, n, o){
        return new(n||(n=Promise))((function(a, i){
          function r(e){
            try{
              s(o.next(e))
            }
            catch(e){
              i(e)
            }
          }
          function l(e){
            try{
              s(o.throw(e))
            }
            catch(e){
              i(e)
            }
          }
          function s(e){
            var t;
            e.done?a(e.value):(t=e.value, t instanceof n?t:new n((function(e){
              e(t)
            }))).then(r, l)
          }
          s((o=o.apply(e, t||[
          ])).next())
        }))
      }, B=function(e, t){
        var n, o, a, i, r={
          label:0, sent:function(){
            if(1&a[
              0
            ])throw a[
              1
            ];
            return a[
              1
            ]
          }, trys:[
          ], ops:[
          ]
        };
        return i={
          next:l(0), throw:l(1), return:l(2)
        }, "function"==typeof Symbol&&(i[
          Symbol.iterator
        ]
        =function(){
          return this
        }), i;
        function l(l){
          return function(s){
            return function(l){
              if(n)throw new TypeError("Generator is already executing.");
              for(;
              i&&(i=0, l[
                0
              ]
              &&(r=0)), r;
              )try{
                if(n=1, o&&(a=2&l[
                  0
                ]
                ?o.return:l[
                  0
                ]
                ?o.throw||((a=o.return)&&a.call(o), 0):o.next)&&!(a=a.call(o, l[
                  1
                ])).done)return a;
                switch(o=0, a&&(l=[
                  2&l[
                    0
                  ], a.value
                ]), l[
                  0
                ]){
                  case 0:case 1:a=l;
                  break;
                  case 4:return r.label++, {
                    value:l[
                      1
                    ], done:!1
                  };
                  case 5:r.label++, o=l[
                    1
                  ], l=[
                    0
                  ];
                  continue;
                  case 7:l=r.ops.pop(), r.trys.pop();
                  continue;
                  default:if(!(a=r.trys, (a=a.length>0&&a[
                    a.length-1
                  ])||6!==l[
                    0
                  ]
                  &&2!==l[
                    0
                  ])){
                    r=0;
                    continue
                  }
                  if(3===l[
                    0
                  ]
                  &&(!a||l[
                    1
                  ]
                  >a[
                    0
                  ]
                  &&l[
                    1
                  ]
                  <a[
                    3
                  ])){
                    r.label=l[
                      1
                    ];
                    break
                  }
                  if(6===l[
                    0
                  ]
                  &&r.label<a[
                    1
                  ]){
                    r.label=a[
                      1
                    ], a=l;
                    break
                  }
                  if(a&&r.label<a[
                    2
                  ]){
                    r.label=a[
                      2
                    ], r.ops.push(l);
                    break
                  }
                  a[
                    2
                  ]
                  &&r.ops.pop(), r.trys.pop();
                  continue
                }
                l=t.call(e, r)
              }
              catch(e){
                l=[
                  6, e
                ], o=0
              }
              finally{
                n=a=0
              }
              if(5&l[
                0
              ])throw l[
                1
              ];
              return{
                value:l[
                  0
                ]
                ?l[
                  1
                ]
                :void 0, done:!0
              }
            }
            ([
              l, s
            ])
          }
        }
      }, F=function(e, t, n){
        if(n||2===arguments.length)for(var o, a=0, i=t.length;
        a<i;
        a++)!o&&a in t||(o||(o=Array.prototype.slice.call(t, 0, a)), o[
          a
        ]
        =t[
          a
        ]);
        return e.concat(o||Array.prototype.slice.call(t))
      };
      const W=(0, o.pM)({
        name:"NodeAttribute", props:[
          "node"
        ], components:{
          TooltipExt:a.A, RelationItem:G.A
        }, setup:function(e){
          var t, n=this, a=(null===(t=window.featureToggles)||void 0===t?void 0:t.isCognitiveDimensionOpen)||!1, r=(0, o.KR)(!1), s=(0, o.KR)(""), d=(0, o.EW)((function(){
            return F(F(F([
            ], (e.node.data.prevRelation||[
            ]).map((function(e){
              return P(P({
              }, e), {
                relationType:"prev"
              })
            })), !0), (e.node.data.postRelation||[
            ]).map((function(e){
              return P(P({
              }, e), {
                relationType:"post"
              })
            })), !0), (e.node.data.undirectedRelation||[
            ]).map((function(e){
              return P(P({
              }, e), {
                relationType:"undirected"
              })
            })), !0)
          })), f=(0, o.EW)((function(){
            return!i.Br&&!i.dn.value&&i.yb
          })), v=function(){
            return K(n, void 0, void 0, (function(){
              var t;
              return B(this, (function(n){
                switch(n.label){
                  case 0:return[
                    4, (0, p.w1)(e.node.id, {
                      cognitiveDimension:s.value
                    })
                  ];
                  case 1:return t=n.sent(), e.node.data.cognitiveDimension=s.value, r.value=!1, c.Toast.success(l.default.t("air.updateSuccess")), u.A.$emit("search-toolbar-node-updated", t), [
                    2
                  ]
                }
              }))
            }))
          };
          return{
            isCognitiveDimensionOpen:a, relationList:d, showEditCognitiveDimensionPopper:r, cognitiveDimension:s, cognitiveDimensions:h.oC, canEdit:f, onPopperShow:function(){
              s.value=e.node.data.cognitiveDimension
            }, updateCognitiveDimension:v, closePoptip:function(t){
              e.node.data.cognitiveDimension===t&&(r.value=!1)
            }, openPopper:function(){
              r.value=!0
            }, remove:function(){
              s.value="none", v()
            }, editDisabled:i.tq
          }
        }
      });
      const Z={
        name:"TreeNode", inject:[
          "tree", "allowFacetsAndFragments"
        ], props:[
          "node", "options"
        ], components:{
          NodeContent:M, ExpandNode:O, NodeAttribute:(0, g.A)(W, (function(){
            var e=this, t=e.$createElement, n=e._self._c||t;
            return n("div", {
              staticClass:"attribute-area", class:{
                "hide-attribute":0===e.relationList.length&&e.node.data.cognitiveDimension&&"none"===e.node.data.cognitiveDimension
              }
            }, [
              n("Poptip", {
                attrs:{
                  placement:"bottom", padding:"16px", width:"310", transfer:"", "transfer-class-name":"edit-cognitive-dimension-poptip", disabled:!e.canEdit
                }, on:{
                  "on-popper-show":e.onPopperShow
                }, model:{
                  value:e.showEditCognitiveDimensionPopper, callback:function(t){
                    e.showEditCognitiveDimensionPopper=t
                  }, expression:"showEditCognitiveDimensionPopper"
                }
              }, [
                e.isCognitiveDimensionOpen&&e.node.data.cognitiveDimension&&"none"!==e.node.data.cognitiveDimension?n("div", {
                  staticClass:"cognitive-dimension", class:e.node.data.cognitiveDimension, on:{
                    mousedown:function(e){
                      e.stopPropagation()
                    }
                  }
                }, [
                  e._v("\n      "+e._s(e.$t("knowledgeGraph.cognitiveDimension."+e.node.data.cognitiveDimension))+"\n    ")
                ]):e._e(), e._v(" "), n("div", {
                  staticClass:"poptip-content", attrs:{
                    slot:"content"
                  }, slot:"content"
                }, [
                  n("div", {
                    staticClass:"poptip-header"
                  }, [
                    n("span", {
                      staticClass:"title"
                    }, [
                      e._v(e._s(e.$t("knowledgeGraph.cognitiveDimension.setUp")))
                    ]), e._v(" "), n("span", {
                      staticClass:"remove", on:{
                        click:e.remove
                      }
                    }, [
                      e._v(e._s(e.$t("remove")))
                    ])
                  ]), e._v(" "), n("RadioGroup", {
                    staticClass:"cognitive-imension-radio-group", attrs:{
                      type:"button"
                    }, on:{
                      "on-change":e.updateCognitiveDimension
                    }, model:{
                      value:e.cognitiveDimension, callback:function(t){
                        e.cognitiveDimension=t
                      }, expression:"cognitiveDimension"
                    }
                  }, e._l(e.cognitiveDimensions, (function(t){
                    return n("Radio", {
                      key:t.key, class:t.key, attrs:{
                        value:t.key, label:t.key
                      }, nativeOn:{
                        click:function(n){
                          return e.closePoptip(t.key)
                        }
                      }
                    }, [
                      n("span", [
                        e._v(e._s(t.value))
                      ])
                    ])
                  })), 1)
                ], 1)
              ]), e._v(" "), e._l(e.relationList.slice(0, 3), (function(t){
                return n("div", {
                  key:t.id
                }, [
                  n("RelationItem", {
                    attrs:{
                      node:e.node, relation:t, "can-edit-relation":e.canEdit&&!e.editDisabled, "can-delete":e.canEdit&&!e.editDisabled
                    }
                  })
                ], 1)
              })), e._v(" "), n("Poptip", {
                attrs:{
                  placement:"bottom", padding:"0"
                }
              }, [
                e.relationList.length>3?n("div", {
                  staticClass:"all-relation", on:{
                    mousedown:function(e){
                      e.stopPropagation()
                    }
                  }
                }, [
                  e._v("\n      "+e._s(e.$t("exam.scoreSetting.total"))+" "+e._s(e.relationList.length)+" "+e._s(e.$t("item"))+"\n    ")
                ]):e._e(), e._v(" "), n("div", {
                  staticClass:"poptip-content", attrs:{
                    slot:"content"
                  }, on:{
                    mousedown:function(e){
                      e.stopPropagation()
                    }
                  }, slot:"content"
                }, e._l(e.relationList, (function(t){
                  return n("div", {
                    key:t.id
                  }, [
                    n("RelationItem", {
                      attrs:{
                        node:e.node, relation:t, "can-edit-relation":!1, "can-delete":e.canEdit&&!e.editDisabled
                      }
                    })
                  ], 1)
                })), 0)
              ])
            ], 2)
          }), [
          ], !1, null, "7a013488", null).exports, Point:E
        }, watch:{
          node(){
            this.node.vm=this
          }
        }, data(){
          return this.node.vm=this, {
            loading:!1
          }
        }, computed:{
          padding(){
            return"".concat(this.node.depth*(this.options.paddingLeft?this.options.paddingLeft:this.options.nodeIndent), "px")
          }, nodeClass(){
            var e=this.node.states, t=this.hasChildren();
            return{
              "has-child":t, expanded:t&&e.expanded, selected:e.selected&&this.options.selectable, disabled:e.disabled, matched:e.matched, dragging:e.dragging, loading:this.loading, draggable:e.draggable, immutable:e.immutable
            }
          }, visibleChildren(){
            return this.node.children.filter((e=>e&&e.visible()))
          }, currentNode(){
            var e;
            return null===(e=this.tree.selectedNodes)||void 0===e?void 0:e[
              0
            ]
          }
        }, methods:{
          onNodeFocus(){
            this.tree.activeElement=this.node
          }, select(){
            this.node.select()
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
            this.tree.vm.draggableNode?e.currentTarget.classList.add("dragging"):e.currentTarget.classList.add("is-hover")
          }, handleMouseout(e){
            e.currentTarget.classList.remove("dragging"), e.currentTarget.classList.remove("is-hover")
          }, handleKeyDown(e){
            9!==e.keyCode||this.node.isEditing||(e.preventDefault(), e.stopPropagation(), this.$refs.pointRef.add("child", this.currentNode)), 13!==e.keyCode||this.node.isEditing||(e.preventDefault(), e.stopPropagation(), this.$refs.pointRef.add("peer", this.currentNode))
          }, setFocus(){
            this.$nextTick((()=>{
              this.$refs.treeNodeRef.focus(), this.node.select()
            }))
          }, showCognitiveDimensionPopper(){
            this.$refs.nodeAttributeRef.openPopper()
          }, showDrawer(){
            this.node.isEditing||u.A.$emit("show-drawer")
          }
        }, mounted(){
          "number"==typeof this.node.id&&u.A.$on("click-outside", (e=>{
            this.$refs.treeNodeRef&&!this.$refs.treeNodeRef.contains(e.target)&&this.node.unselect()
          }))
        }
      };
      const z=(0, g.A)(Z, (function(){
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
            ref:"treeNodeRef", staticClass:"tree-content-wrapper", style:[
              "ltr"==e.options.direction?{
                "padding-left":e.padding
              }
              :{
                "padding-right":e.padding
              }
            ], attrs:{
              tabindex:"-1"
            }, on:{
              click:e.select, mousedown:function(t){
                return t.stopPropagation(), e.showDrawer(t)
              }, keydown:e.handleKeyDown, focus:e.onNodeFocus
            }
          }, [
            n("div", {
              staticClass:"tree-content"
            }, [
              n("ExpandNode", {
                attrs:{
                  options:e.options, node:e.node, "visible-children":e.visibleChildren, "allow-facets-and-fragments":e.allowFacetsAndFragments
                }, nativeOn:{
                  click:function(t){
                    return e.toggleExpand(t)
                  }
                }
              }), e._v(" "), n("Point", {
                key:e.node.id, ref:"pointRef", attrs:{
                  tree:e.node.tree.vm, node:e.node
                }, on:{
                  "show-edit-cognitive-dimension-popper":e.showCognitiveDimensionPopper
                }
              }), e._v(" "), n("span", {
                staticClass:"tree-anchor"
              }, [
                n("NodeContent", {
                  attrs:{
                    node:e.node
                  }
                }), e._v(" "), !e.allowFacetsAndFragments&&!e.node.states.expanded&&e.node.children.length>0?n("span", {
                  staticClass:"number"
                }, [
                  e._v("\n          "+e._s(e.node.children.length)+"\n        ")
                ]):e._e()
              ], 1)
            ], 1), e._v(" "), n("NodeAttribute", {
              ref:"nodeAttributeRef", attrs:{
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
              return n("TreeNode", {
                key:t.id, attrs:{
                  node:t, options:e.options
                }
              })
            })), 1):e._e()
          ])
        ], 1)
      }), [
      ], !1, null, "c153c96c", null).exports;
      const q={
        name:"DragNode", props:[
          "target"
        ], computed:{
          style(){
            if(void 0===this.target.top)return"display: none";
            var e=this.target.ele.querySelector(".tree-content-wrapper").clientHeight;
            return{
              top:"".concat(this.target.top-e/2, "px"), left:"".concat(this.target.left+10, "px"), height:"48px", background:"#eee", opacity:"0.8"
            }
          }
        }
      };
      const V=(0, g.A)(q, (function(){
        var e=this, t=e.$createElement, n=e._self._c||t;
        return n("div", {
          staticClass:"tree-dragnode", style:e.style
        }, [
          n("span", {
            staticClass:"text"
          }, [
            e._v(e._s(e.target.node.text))
          ]), e._v(" "), e.target.node.children.length>0?n("span", {
            staticClass:"number"
          }, [
            e._v("\n    "+e._s(e.target.node.children.length)+"\n  ")
          ]):e._e()
        ])
      }), [
      ], !1, null, null, null).exports;
      function H(e, t){
        var n=Object.keys(e);
        if(Object.getOwnPropertySymbols){
          var o=Object.getOwnPropertySymbols(e);
          t&&(o=o.filter((function(t){
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, o)
        }
        return n
      }
      function U(e){
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
          t%2?H(Object(n), !0).forEach((function(t){
            Q(e, t, n[
              t
            ])
          })):Object.getOwnPropertyDescriptors?Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)):H(Object(n)).forEach((function(t){
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }
      function Q(e, t, n){
        return t in e?Object.defineProperty(e, t, {
          value:n, enumerable:!0, configurable:!0, writable:!0
        }):e[
          t
        ]
        =n, e
      }
      var Y={
        direction:"ltr", multiple:!0, checkOnSelect:!1, autoCheckChildren:!0, autoDisableChildren:!0, checkDisabledChildren:!0, parentSelect:!1, keyboardNavigation:!0, nodeIndent:28, minFetchDelay:0, fetchData:null, propertyNames:null, deletion:!1, dnd:!1, editing:!1, selectable:!0, onFetchError(e){
          throw e
        }
      }, X={
        emptyText:"Nothing found!", textMatcher(e, t){
          var n=new RegExp(e, "i").test(t.text);
          return!(n&&t.parent&&new RegExp(e, "i").test(t.parent.text))&&n
        }, plainList:!1, showChildren:!0
      };
      const J={
        name:"TreeRoot", components:{
          TreeNode:z, DraggableNode:V
        }, mixins:[
          T.A, D.A
        ], provide:e=>({
          tree:null
        }), props:{
          data:{
          }, options:{
            type:Object, default:()=>({
            })
          }, treeLoading:{
            type:Boolean, required:!0
          }, canAddNewNode:{
            type:Boolean, required:!0
          }
        }, data(){
          var e=U(U({
          }, Y), this.options);
          return e.filter=U(U({
          }, X), e.filter), {
            model:[
            ], tree:null, loading:!1, opts:e, matches:[
            ], draggableNode:null, draggableEle:null
          }
        }, methods:{
          addNew(){
            this.tree.vm.$emit("add-new-node")
          }
        }, computed:{
          visibleModel(){
            return this.model.filter((e=>e&&e.visible()))
          }
        }
      };
      const ee=(0, g.A)(J, (function(){
        var e=this, t=e.$createElement, n=e._self._c||t;
        return n("div", {
          class:{
            "tree-loading":this.loading, "tree--draggable":!!this.draggableNode
          }, attrs:{
            role:"tree"
          }
        }, [
          n("ul", {
            staticClass:"tree-root", on:{
              dragstart:e.onDragStart
            }
          }, [
            e._l(e.visibleModel, (function(t){
              return n("TreeNode", {
                key:t.id, attrs:{
                  node:t, options:e.opts
                }
              })
            })), e._v(" "), e.canAddNewNode&&0===e.visibleModel.length&&!e.treeLoading?n("div", {
              staticClass:"add-area"
            }, [
              n("span", {
                staticClass:"circle-button"
              }), e._v(" "), n("span", {
                on:{
                  click:e.addNew
                }
              }, [
                e._v(e._s(e.$t("knowledgeGraph.addFirstNodeTip")))
              ])
            ]):e._e()
          ], 2), e._v(" "), e.draggableNode?n("DraggableNode", {
            attrs:{
              target:e.draggableNode
            }
          }):e._e()
        ], 1)
      }), [
      ], !1, null, null, null).exports;
      var te=n(839861), ne=(n(241128), n(995843), n(979278)), oe=n(879757), ae=n(379960), ie=n(542535), re=function(e, t, n){
        if(n||2===arguments.length)for(var o, a=0, i=t.length;
        a<i;
        a++)!o&&a in t||(o||(o=Array.prototype.slice.call(t, 0, a)), o[
          a
        ]
        =t[
          a
        ]);
        return e.concat(o||Array.prototype.slice.call(t))
      };
      const le=(0, o.pM)({
        props:{
          node:{
            type:Object, required:!0
          }
        }, setup:function(e, t){
          var n, a=(0, o.EW)((function(){
            var t=[
            ];
            return e.node.tree.model.forEach((function e(n){
              t.push({
                id:n.id, name:n.text, level:n.depth, r:16
              }), n.children&&n.children.forEach(e)
            })), t
          })), i=(0, o.EW)((function(){
            var t=[
            ];
            return e.node.data.prevRelation.forEach((function(n){
              t.push({
                id:n.relationId, source:n.id, target:e.node.id, isDirected:!0
              })
            })), e.node.data.postRelation.forEach((function(n){
              t.push({
                id:n.relationId, source:e.node.id, target:n.id, isDirected:!0
              })
            })), e.node.data.undirectedRelation.forEach((function(n){
              t.push({
                id:n.relationId, source:e.node.id, target:n.id, isDirected:!1
              })
            })), t
          })), r=(0, o.EW)((function(){
            var t=i.value.reduce((function(e, t){
              return re(re([
              ], e, !0), [
                t.source, t.target
              ], !1)
            }), [
              e.node.id
            ]), n=a.value.filter((function(e){
              return t.includes(e.id)
            })), o=n.findIndex((function(t){
              return t.id===e.node.id
            }));
            if(o>-1){
              var r=n.splice(o, 1)[
                0
              ];
              r.current=!0, r.r=24, n.unshift(r)
            }
            return n
          })), s=(0, o.KR)(), c=(0, o.EW)((function(){
            return!!t.slots.default
          }));
          return(0, o.sV)((function(){
            (n=new ie.ne(s.value, {
              remove:{
                fn:function(n){
                  var o=e.node.data.prevRelation.find((function(e){
                    return e.id===n.id
                  })), a="prev";
                  o||(o=e.node.data.postRelation.find((function(e){
                    return e.id===n.id
                  })), a="post"), o||(o=e.node.data.undirectedRelation.find((function(e){
                    return e.id===n.id
                  })), a="undirected"), o&&t.emit("delete-relation", o, a)
                }, text:l.default.t("knowledgeGraph.delRelation")
              }
            })).update(r.value, i.value)
          })), (0, o.wB)(i, (function(){
            n.update(r.value, i.value)
          })), {
            graphRef:s, show:c
          }
        }
      });
      const se=(0, g.A)(le, (function(){
        var e=this.$createElement;
        return(this._self._c||e)("div", {
          ref:"graphRef", staticClass:"graph-wrapper"
        })
      }), [
      ], !1, null, "056a12d0", null).exports;
      var ce=function(e, t, n, o){
        return new(n||(n=Promise))((function(a, i){
          function r(e){
            try{
              s(o.next(e))
            }
            catch(e){
              i(e)
            }
          }
          function l(e){
            try{
              s(o.throw(e))
            }
            catch(e){
              i(e)
            }
          }
          function s(e){
            var t;
            e.done?a(e.value):(t=e.value, t instanceof n?t:new n((function(e){
              e(t)
            }))).then(r, l)
          }
          s((o=o.apply(e, t||[
          ])).next())
        }))
      }, ue=function(e, t){
        var n, o, a, i, r={
          label:0, sent:function(){
            if(1&a[
              0
            ])throw a[
              1
            ];
            return a[
              1
            ]
          }, trys:[
          ], ops:[
          ]
        };
        return i={
          next:l(0), throw:l(1), return:l(2)
        }, "function"==typeof Symbol&&(i[
          Symbol.iterator
        ]
        =function(){
          return this
        }), i;
        function l(l){
          return function(s){
            return function(l){
              if(n)throw new TypeError("Generator is already executing.");
              for(;
              i&&(i=0, l[
                0
              ]
              &&(r=0)), r;
              )try{
                if(n=1, o&&(a=2&l[
                  0
                ]
                ?o.return:l[
                  0
                ]
                ?o.throw||((a=o.return)&&a.call(o), 0):o.next)&&!(a=a.call(o, l[
                  1
                ])).done)return a;
                switch(o=0, a&&(l=[
                  2&l[
                    0
                  ], a.value
                ]), l[
                  0
                ]){
                  case 0:case 1:a=l;
                  break;
                  case 4:return r.label++, {
                    value:l[
                      1
                    ], done:!1
                  };
                  case 5:r.label++, o=l[
                    1
                  ], l=[
                    0
                  ];
                  continue;
                  case 7:l=r.ops.pop(), r.trys.pop();
                  continue;
                  default:if(!(a=r.trys, (a=a.length>0&&a[
                    a.length-1
                  ])||6!==l[
                    0
                  ]
                  &&2!==l[
                    0
                  ])){
                    r=0;
                    continue
                  }
                  if(3===l[
                    0
                  ]
                  &&(!a||l[
                    1
                  ]
                  >a[
                    0
                  ]
                  &&l[
                    1
                  ]
                  <a[
                    3
                  ])){
                    r.label=l[
                      1
                    ];
                    break
                  }
                  if(6===l[
                    0
                  ]
                  &&r.label<a[
                    1
                  ]){
                    r.label=a[
                      1
                    ], a=l;
                    break
                  }
                  if(a&&r.label<a[
                    2
                  ]){
                    r.label=a[
                      2
                    ], r.ops.push(l);
                    break
                  }
                  a[
                    2
                  ]
                  &&r.ops.pop(), r.trys.pop();
                  continue
                }
                l=t.call(e, r)
              }
              catch(e){
                l=[
                  6, e
                ], o=0
              }
              finally{
                n=a=0
              }
              if(5&l[
                0
              ])throw l[
                1
              ];
              return{
                value:l[
                  0
                ]
                ?l[
                  1
                ]
                :void 0, done:!0
              }
            }
            ([
              l, s
            ])
          }
        }
      };
      const de=(0, o.pM)({
        components:{
          ToolbarWrapper:oe.A, SvgIcon:ne.A, Tree:s.Ay, NoData:ae.A, NodeRelationGraph:se
        }, props:{
          value:{
            type:Boolean, default:!1
          }, node:{
            type:Object, default:function(){
              return{
              }
            }
          }
        }, setup:function(e, t){
          var n=this, a=(0, o.KR)("list"), i=(0, o.KR)(), l=(0, o.WQ)("course", {
            id:0
          }), s=(0, o.WQ)("allowedRelationTypes", {
            prev:!0, post:!0, undirected:!0
          }), c=(0, o.KR)(0), u=(0, o.KR)(""), d=(0, o.KR)(""), v=(0, o.KR)(!1), m=(0, o.Kh)({
            prev:[
            ], post:[
            ], undirected:[
            ]
          }), g=(0, o.EW)((function(){
            return[
              m.prev, m.post, m.undirected
            ].flat().length
          })), b=(0, o.KR)({
            checkbox:!0, autoCheckChildren:!1, nodeIndent:30, filter:{
              emptyText:"", showChildren:!1, textMatcher:function(e, t){
                return new RegExp(e, "i").test(t.text)
              }
            }
          }), y=(0, o.KR)(!0), w=function(){
            var e=i.value.checked(), t=[
              m.prev, m.post, m.undirected
            ].flat().map((function(e){
              return e.id
            })), n=e.filter((function(e){
              return!t.includes(e.id)
            }));
            y.value=0===n.length
          }, _=function(e){
            return i.value.find((function(t){
              return t.id===e
            }))[
              0
            ]
          };
          return{
            tab:a, treeOptions:b, treeRef:i, relationCount:c, relations:m, relationTypes:h.E6, keyword:u, filter:d, allowedRelationTypes:s, hasRelation:g, noData:v, disabled:y, treeFilterHandle:function(e, t){
              v.value=0===e.length&&!!t, t||i.value.collapseAll();
              var n=[
              ];
              e.forEach((function(e){
                e.hasChildren()&&e.recurseDown((function(e){
                  new RegExp(t, "i").test(e.text)&&n.push(e)
                }), !0)
              })), n.forEach((function(e){
                e.state("visible", !0), e.recurseUp((function(e){
                  e.expand(), e.state("visible", !0)
                }))
              }))
            }, search:function(){
              d.value=u.value
            }, modalVisibleChange:function(n){
              if(t.emit("input", n), n){
                i.value.setModel(e.node.tree.model), i.value.find((function(t){
                  return t.id===e.node.id
                })).forEach((function(e){
                  e.state("disabled", !0), e.parent&&e.parent.state("disabled", !0), e.children.forEach((function(e){
                    e.state("disabled", !0)
                  }))
                }));
                var o=e.node.data, a=o.prevRelation, r=o.postRelation, l=o.undirectedRelation, s=[
                  a, r, l
                ].flat().map((function(e){
                  return e.id
                }));
                if(c.value=s.length, m.prev=a, m.post=r, m.undirected=l, s.length>0)i.value.findAll((function(e){
                  return s.includes(e.id)
                })).forEach((function(e){
                  e.check(), e.state("disabled", !0)
                }))
              }
            }, nodeCheckedHandle:function(){
              return w()
            }, add:function(t){
              return ce(n, void 0, void 0, (function(){
                var n, o, a, s, u, d, v, h;
                return ue(this, (function(m){
                  switch(m.label){
                    case 0:n=Array.from(i.value.checked().filter((function(e){
                      return!e.disabled()
                    }))), o="post"===t?n.map((function(t){
                      return{
                        source:e.node.id, target:t.id, isDirected:!0, nodeName:t.text
                      }
                    })):"prev"===t?n.map((function(t){
                      return{
                        target:e.node.id, source:t.id, isDirected:!0, nodeName:t.text
                      }
                    })):n.map((function(t){
                      return{
                        target:e.node.id, source:t.id, isDirected:!1, nodeName:t.text
                      }
                    })), m.label=1;
                    case 1:return m.trys.push([
                      1, 3, , 4
                    ]), [
                      4, (0, p.K6)(l.id, {
                        relations:o
                      })
                    ];
                    case 2:return m.sent().forEach((function(n){
                      var o=n.source===e.node.id?n.target:n.source, a=_(o), i=e.node, r=f.li.create(o, a.text, n.id), l=f.li.create(e.node.id, i.text, n.id);
                      n.isDirected?"prev"===t?(i.data.prevRelation.push(r), a.data.postRelation.push(l)):(i.data.postRelation.push(r), a.data.prevRelation.push(l)):(i.data.undirectedRelation.push(r), a.data.undirectedRelation.push(l)), c.value++
                    })), n.forEach((function(e){
                      e.state("disabled", !0)
                    })), [
                      3, 4
                    ];
                    case 3:return a=m.sent(), (s=null===(h=null===(v=null===(d=null===(u=a.response)||void 0===u?void 0:u.data)||void 0===d?void 0:d.errors)||void 0===v?void 0:v.relations)||void 0===h?void 0:h.filter((function(e){
                      return e.is_directed
                    }))[
                      0
                    ].is_directed[
                      0
                    ])&&r.Message.error(s), [
                      3, 4
                    ];
                    case 4:return w(), [
                      2
                    ]
                  }
                }))
              }))
            }, del:function(e, t){
              return ce(n, void 0, void 0, (function(){
                var n, o, a, r, s, u;
                return ue(this, (function(d){
                  switch(d.label){
                    case 0:return[
                      4, (0, p.i4)(l.id, [
                        e.relationId
                      ])
                    ];
                    case 1:return d.sent(), n=m[
                      t
                    ].findIndex((function(t){
                      return t.relationId===e.relationId
                    })), (o=m[
                      t
                    ].splice(n, 1)[
                      0
                    ])&&(a=_(o.id), "undirected"===t?(r=a.data.undirectedRelation.findIndex((function(t){
                      return t.relationId===e.id
                    })), a.data.undirectedRelation.splice(r, 1)):"prev"===t?(s=a.data.postRelation.findIndex((function(t){
                      return t.relationId===e.id
                    })), a.data.postRelation.splice(s, 1)):(u=a.data.prevRelation.findIndex((function(t){
                      return t.relationId===e.id
                    })), a.data.prevRelation.splice(u, 1))), i.value.find((function(t){
                      return t.id===e.id
                    })).forEach((function(e){
                      e.state("disabled", !1), e.uncheck()
                    })), c.value--, [
                      2
                    ]
                  }
                }))
              }))
            }
          }
        }
      });
      const pe=(0, g.A)(de, (function(){
        var e=this, t=e.$createElement, n=e._self._c||t;
        return n("Modal", {
          attrs:{
            value:e.value, transfer:"", width:1e3, "class-name":"relation-setting-modal", "footer-hide":""
          }, on:{
            "on-visible-change":e.modalVisibleChange
          }, scopedSlots:e._u([
            {
              key:"header", fn:function(){
                return[
                  e._v(e._s(e.$t("knowledgeGraph.relationshipSettingWithName", [
                    e.node.text
                  ])))
                ]
              }, proxy:!0
            }
          ])
        }, [
          e._v(" "), n("div", {
            staticClass:"relation-setting-content"
          }, [
            n("div", {
              staticClass:"tree-wrapper"
            }, [
              n("ToolbarWrapper", {
                attrs:{
                  divider:""
                }
              }, [
                n("div", [
                  e.allowedRelationTypes.undirected?n("Button", {
                    attrs:{
                      disabled:e.disabled
                    }, on:{
                      click:function(t){
                        return e.add()
                      }
                    }
                  }, [
                    n("Icon", {
                      attrs:{
                        type:"md-add"
                      }
                    }), e._v("\n            "+e._s(e.$t("knowledgeGraph.addRelation"))+"\n          ")
                  ], 1):e._e(), e._v(" "), e.allowedRelationTypes.prev?n("Button", {
                    attrs:{
                      disabled:e.disabled
                    }, on:{
                      click:function(t){
                        return e.add("prev")
                      }
                    }
                  }, [
                    n("Icon", {
                      attrs:{
                        type:"md-add"
                      }
                    }), e._v("\n            "+e._s(e.$t("knowledgeGraph.addPrev"))+"\n          ")
                  ], 1):e._e(), e._v(" "), e.allowedRelationTypes.post?n("Button", {
                    attrs:{
                      disabled:e.disabled
                    }, on:{
                      click:function(t){
                        return e.add("post")
                      }
                    }
                  }, [
                    n("Icon", {
                      attrs:{
                        type:"md-add"
                      }
                    }), e._v("\n            "+e._s(e.$t("knowledgeGraph.addPost"))+"\n          ")
                  ], 1):e._e(), e._v(" "), n("Input", {
                    attrs:{
                      search:"", placeholder:e.$t("knowledgeGraph.nodeName")
                    }, on:{
                      "on-search":e.search
                    }, model:{
                      value:e.keyword, callback:function(t){
                        e.keyword=t
                      }, expression:"keyword"
                    }
                  })
                ], 1)
              ]), e._v(" "), n("div", {
                staticClass:"tree-container", style:{
                  padding:e.noData?"24px":null, "padding-top":e.noData?"8px":null
                }
              }, [
                n("Tree", {
                  ref:"treeRef", attrs:{
                    options:e.treeOptions, filter:e.filter
                  }, on:{
                    "tree:filtered":e.treeFilterHandle, "node:checked":e.nodeCheckedHandle, "node:unchecked":e.nodeCheckedHandle
                  }, scopedSlots:e._u([
                    {
                      key:"default", fn:function(t){
                        var o=t.node;
                        return[
                          n("div", {
                            staticClass:"tree-content-with-tooltip"
                          }, [
                            n("Tooltip", {
                              directives:[
                                {
                                  name:"ellipsis", rawName:"v-ellipsis"
                                }
                              ], attrs:{
                                placement:"top", content:o.text, transfer:""
                              }
                            }, [
                              n("span", [
                                e._v(e._s(o.text))
                              ])
                            ])
                          ], 1)
                        ]
                      }
                    }
                  ])
                }), e._v(" "), e.noData?n("NoData", [
                  e._v("\n          "+e._s(e.$t("knowledgeGraph.noContent"))+"\n        ")
                ]):e._e()
              ], 1)
            ], 1), e._v(" "), n("div", {
              staticClass:"pane-wrapper", style:{
                background:"graph"===e.tab?"#f7f7f7":""
              }
            }, [
              n("ToolbarWrapper", [
                n("div", {
                  staticClass:"flex-between"
                }, [
                  n("div", [
                    e._v(e._s(e.$t("knowledgeGraph.relationCount", [
                      e.relationCount
                    ])))
                  ]), e._v(" "), n("div", {
                    staticClass:"btn-group"
                  }, [
                    n("button", {
                      class:{
                        active:"list"===e.tab
                      }, on:{
                        click:function(t){
                          e.tab="list"
                        }
                      }
                    }, [
                      n("SvgIcon", {
                        attrs:{
                          name:"list"
                        }
                      }), e._v("\n              "+e._s(e.$t("knowledgeGraph.list"))+"\n            ")
                    ], 1), e._v(" "), n("button", {
                      class:{
                        active:"graph"===e.tab
                      }, on:{
                        click:function(t){
                          e.tab="graph"
                        }
                      }
                    }, [
                      n("SvgIcon", {
                        attrs:{
                          name:"tree"
                        }
                      }), e._v("\n              "+e._s(e.$t("knowledgeGraph.graph"))+"\n            ")
                    ], 1)
                  ])
                ])
              ]), e._v(" "), "list"===e.tab?n("div", {
                staticClass:"pane-content"
              }, [
                e.hasRelation?n("div", {
                  staticClass:"relation-detail"
                }, [
                  e._l(e.relationTypes, (function(t){
                    return[
                      e.relations[
                        t.key
                      ].length?n("div", {
                        key:t.key, staticClass:"relation-list"
                      }, [
                        n("div", {
                          staticClass:"relation-type"
                        }, [
                          e._v(e._s(t.name)+":")
                        ]), e._v(" "), n("div", {
                          staticClass:"relation-tag"
                        }, e._l(e.relations[
                          t.key
                        ], (function(o){
                          return n("Tag", {
                            key:o.id, attrs:{
                              size:"large", closable:""
                            }, on:{
                              "on-close":function(n){
                                e.del(o, t.key)
                              }
                            }
                          }, [
                            n("Tooltip", {
                              directives:[
                                {
                                  name:"ellipsis", rawName:"v-ellipsis"
                                }
                              ], attrs:{
                                placement:"top", content:o.name, transfer:""
                              }
                            }, [
                              n("span", [
                                e._v(e._s(o.name))
                              ])
                            ])
                          ], 1)
                        })), 1)
                      ]):e._e()
                    ]
                  }))
                ], 2):n("NoData", [
                  e._v("\n          "+e._s(e.$t("knowledgeGraph.relationTips"))+"\n        ")
                ])
              ], 1):"graph"===e.tab?n("div", {
                staticClass:"pane-content"
              }, [
                e.value?n("NodeRelationGraph", {
                  attrs:{
                    node:e.node
                  }, on:{
                    "delete-relation":e.del
                  }
                }):e._e()
              ], 1):e._e()
            ], 1)
          ])
        ])
      }), [
      ], !1, null, "20d66e1a", null).exports;
      var fe=n(861389), ve=n(882971), he=function(e, t, n, o){
        return new(n||(n=Promise))((function(a, i){
          function r(e){
            try{
              s(o.next(e))
            }
            catch(e){
              i(e)
            }
          }
          function l(e){
            try{
              s(o.throw(e))
            }
            catch(e){
              i(e)
            }
          }
          function s(e){
            var t;
            e.done?a(e.value):(t=e.value, t instanceof n?t:new n((function(e){
              e(t)
            }))).then(r, l)
          }
          s((o=o.apply(e, t||[
          ])).next())
        }))
      }, me=function(e, t){
        var n, o, a, i, r={
          label:0, sent:function(){
            if(1&a[
              0
            ])throw a[
              1
            ];
            return a[
              1
            ]
          }, trys:[
          ], ops:[
          ]
        };
        return i={
          next:l(0), throw:l(1), return:l(2)
        }, "function"==typeof Symbol&&(i[
          Symbol.iterator
        ]
        =function(){
          return this
        }), i;
        function l(l){
          return function(s){
            return function(l){
              if(n)throw new TypeError("Generator is already executing.");
              for(;
              i&&(i=0, l[
                0
              ]
              &&(r=0)), r;
              )try{
                if(n=1, o&&(a=2&l[
                  0
                ]
                ?o.return:l[
                  0
                ]
                ?o.throw||((a=o.return)&&a.call(o), 0):o.next)&&!(a=a.call(o, l[
                  1
                ])).done)return a;
                switch(o=0, a&&(l=[
                  2&l[
                    0
                  ], a.value
                ]), l[
                  0
                ]){
                  case 0:case 1:a=l;
                  break;
                  case 4:return r.label++, {
                    value:l[
                      1
                    ], done:!1
                  };
                  case 5:r.label++, o=l[
                    1
                  ], l=[
                    0
                  ];
                  continue;
                  case 7:l=r.ops.pop(), r.trys.pop();
                  continue;
                  default:if(!(a=r.trys, (a=a.length>0&&a[
                    a.length-1
                  ])||6!==l[
                    0
                  ]
                  &&2!==l[
                    0
                  ])){
                    r=0;
                    continue
                  }
                  if(3===l[
                    0
                  ]
                  &&(!a||l[
                    1
                  ]
                  >a[
                    0
                  ]
                  &&l[
                    1
                  ]
                  <a[
                    3
                  ])){
                    r.label=l[
                      1
                    ];
                    break
                  }
                  if(6===l[
                    0
                  ]
                  &&r.label<a[
                    1
                  ]){
                    r.label=a[
                      1
                    ], a=l;
                    break
                  }
                  if(a&&r.label<a[
                    2
                  ]){
                    r.label=a[
                      2
                    ], r.ops.push(l);
                    break
                  }
                  a[
                    2
                  ]
                  &&r.ops.pop(), r.trys.pop();
                  continue
                }
                l=t.call(e, r)
              }
              catch(e){
                l=[
                  6, e
                ], o=0
              }
              finally{
                n=a=0
              }
              if(5&l[
                0
              ])throw l[
                1
              ];
              return{
                value:l[
                  0
                ]
                ?l[
                  1
                ]
                :void 0, done:!0
              }
            }
            ([
              l, s
            ])
          }
        }
      }, ge=function(e, t, n){
        if(n||2===arguments.length)for(var o, a=0, i=t.length;
        a<i;
        a++)!o&&a in t||(o||(o=Array.prototype.slice.call(t, 0, a)), o[
          a
        ]
        =t[
          a
        ]);
        return e.concat(o||Array.prototype.slice.call(t))
      };
      const be=(0, o.pM)({
        components:{
          ToolbarWrapper:oe.A, SvgIcon:ne.A, Tree:s.Ay, NoData:ae.A
        }, props:{
          value:{
            type:Boolean, default:!1
          }, node:{
            type:Object, default:function(){
              return{
              }
            }
          }
        }, setup:function(e, t){
          var n=this, a=(0, o.KR)(), i=k(a).batchRemove, r=(0, o.KR)(""), s=(0, o.KR)(""), c=(0, o.KR)(!1), u=(0, o.KR)({
            checkbox:!0, autoCheckChildren:!1, nodeIndent:30, filter:{
              emptyText:"", showChildren:!1, textMatcher:function(e, t){
                return new RegExp(e, "i").test(t.text)
              }
            }
          }), d=(0, o.KR)(!0), p=(0, o.KR)([
          ]), f=(0, o.EW)((function(){
            return p.value.length
          })), v=function(){
            var e, t;
            p.value=ge([
            ], (null===(t=null===(e=a.value)||void 0===e?void 0:e.tree)||void 0===t?void 0:t.checkedNodes)||new fe.B, !0)
          }, h=function(e){
            for(var t, n, o=e.parent;
            o&&o.checked();
            )o.state("checked", !1), null===(n=null===(t=a.value)||void 0===t?void 0:t.tree)||void 0===n||n.uncheck(o), o=o.parent;
            e.hasChildren()&&e.children.forEach((function(e){
              e.visible()&&e.uncheck()
            })), v()
          };
          return{
            treeOptions:u, treeRef:a, keyword:r, filter:s, noData:c, disabled:d, treeFilterHandle:function(e, t){
              c.value=0===e.length&&!!t, t||a.value.collapseAll();
              var n=[
              ];
              e.forEach((function(e){
                e.hasChildren()&&e.recurseDown((function(e){
                  new RegExp(t, "i").test(e.text)&&n.push(e)
                }), !0)
              })), n.forEach((function(e){
                e.state("visible", !0), e.recurseUp((function(e){
                  e.expand(), e.state("visible", !0)
                }))
              }))
            }, search:function(){
              s.value=r.value
            }, modalVisibleChange:function(n){
              t.emit("input", n), n&&(a.value.setModel(e.node.tree.model), p.value=[
              ])
            }, nodeCheckedHandle:function(e){
              e.hasChildren()&&e.children.forEach((function(e){
                e.visible()&&e.check()
              })), v()
            }, nodeUnCheckedHandle:h, checkedNodes:p, checkedNodesCount:f, cancelChecked:function(e){
              e.uncheck(), h(e)
            }, del:function(){
              return he(n, void 0, void 0, (function(){
                var n, o;
                return me(this, (function(r){
                  switch(r.label){
                    case 0:return t.emit("input", !1), n=function(e){
                      var t=e.reduce((function(e, t){
                        return e.activityCount+=t.data.activityRefCount||0, e.resourceCount+=t.data.resourceRefCount||0, e.nodeSubjectRefCount+=t.data.subjectRefCount||0, e.nodeCaptureRefCount+=t.data.captureRefCount||0, e.nodeCount+=1, e
                      }), {
                        activityCount:0, resourceCount:0, nodeSubjectRefCount:0, nodeCaptureRefCount:0, nodeCount:0
                      });
                      return[
                        t.activityCount, t.resourceCount, t.nodeSubjectRefCount, t.nodeCaptureRefCount, t.nodeCount
                      ]
                    }
                    (p.value), [
                      4, (0, y.r7)(n)
                    ];
                    case 1:if(!r.sent())return[
                      3, 5
                    ];
                    r.label=2;
                    case 2:return r.trys.push([
                      2, 4, , 5
                    ]), [
                      4, i()
                    ];
                    case 3:return r.sent(), p.value=[
                    ], e.node.tree.setModel(a.value.model), ve.A.success(l.default.t("delete_success")), [
                      3, 5
                    ];
                    case 4:return o=r.sent(), ve.A.error(o.message), [
                      3, 5
                    ];
                    case 5:return[
                      2
                    ]
                  }
                }))
              }))
            }, cancel:function(){
              t.emit("input", !1)
            }
          }
        }
      });
      const ye=(0, g.A)(be, (function(){
        var e=this, t=e.$createElement, n=e._self._c||t;
        return n("Modal", {
          attrs:{
            value:e.value, transfer:"", width:1e3, "class-name":"batch-delete-modal", styles:{
              top:"40px"
            }
          }, on:{
            "on-visible-change":e.modalVisibleChange
          }, scopedSlots:e._u([
            {
              key:"header", fn:function(){
                return[
                  e._v(e._s(e.$t("knowledgeGraph.batchDeleteNodeTip")))
                ]
              }, proxy:!0
            }, {
              key:"footer", fn:function(){
                return[
                  n("Button", {
                    staticClass:"cancel-btn", on:{
                      click:e.cancel
                    }
                  }, [
                    e._v(e._s(e.$t("cancel")))
                  ]), e._v(" "), n("Button", {
                    attrs:{
                      type:"error", disabled:0===e.checkedNodesCount
                    }, on:{
                      click:e.del
                    }
                  }, [
                    e._v(e._s(e.$t("batch_delete")))
                  ])
                ]
              }, proxy:!0
            }
          ])
        }, [
          e._v(" "), n("div", {
            staticClass:"delete-tip"
          }, [
            n("i", {
              staticClass:"font font-alert-warning"
            }), e._v(" "), n("div", {
              staticClass:"title"
            }, [
              e._v(e._s(e.$t("knowledgeGraph.batchDeleteTip")))
            ])
          ]), e._v(" "), n("div", {
            staticClass:"batch-delete-content"
          }, [
            n("div", {
              staticClass:"tree-wrapper"
            }, [
              n("div", {
                staticClass:"toolbar-wrapper"
              }, [
                n("Input", {
                  attrs:{
                    search:"", placeholder:e.$t("knowledgeGraph.nodeName")
                  }, on:{
                    "on-search":e.search
                  }, model:{
                    value:e.keyword, callback:function(t){
                      e.keyword=t
                    }, expression:"keyword"
                  }
                })
              ], 1), e._v(" "), n("div", {
                staticClass:"tree-container", style:{
                  padding:e.noData?"24px":null, "padding-top":e.noData?"8px":null
                }
              }, [
                n("Tree", {
                  ref:"treeRef", attrs:{
                    options:e.treeOptions, filter:e.filter
                  }, on:{
                    "tree:filtered":e.treeFilterHandle, "node:checked":e.nodeCheckedHandle, "node:unchecked":e.nodeUnCheckedHandle
                  }, scopedSlots:e._u([
                    {
                      key:"default", fn:function(t){
                        var o=t.node;
                        return[
                          n("div", {
                            staticClass:"tree-content-with-tooltip"
                          }, [
                            n("Tooltip", {
                              directives:[
                                {
                                  name:"ellipsis", rawName:"v-ellipsis"
                                }
                              ], attrs:{
                                placement:"top", content:o.text, transfer:""
                              }
                            }, [
                              n("span", [
                                e._v(e._s(o.text))
                              ])
                            ])
                          ], 1)
                        ]
                      }
                    }
                  ])
                }), e._v(" "), e.noData?n("NoData", [
                  e._v("\n          "+e._s(e.$t("knowledgeGraph.noContent"))+"\n        ")
                ]):e._e()
              ], 1)
            ]), e._v(" "), n("div", {
              staticClass:"pane-wrapper"
            }, [
              n("ToolbarWrapper", [
                n("div", {
                  staticClass:"flex-between"
                }, [
                  n("div", [
                    e._v(e._s(e.$t("knowledgeGraph.selectedNode", [
                      e.checkedNodesCount
                    ])))
                  ])
                ])
              ]), e._v(" "), n("div", {
                staticClass:"tag-wrapper"
              }, e._l(e.checkedNodes, (function(t){
                return n("Tag", {
                  key:t.id, attrs:{
                    size:"large", closable:""
                  }, on:{
                    "on-close":function(n){
                      return e.cancelChecked(t)
                    }
                  }
                }, [
                  n("Tooltip", {
                    directives:[
                      {
                        name:"ellipsis", rawName:"v-ellipsis"
                      }
                    ], attrs:{
                      placement:"top", content:t.data.text, transfer:""
                    }
                  }, [
                    n("span", [
                      e._v(e._s(t.data.text))
                    ])
                  ])
                ], 1)
              })), 1)
            ], 1)
          ])
        ])
      }), [
      ], !1, null, "466d3eaa", null).exports;
      var we=function(e, t, n, o){
        return new(n||(n=Promise))((function(a, i){
          function r(e){
            try{
              s(o.next(e))
            }
            catch(e){
              i(e)
            }
          }
          function l(e){
            try{
              s(o.throw(e))
            }
            catch(e){
              i(e)
            }
          }
          function s(e){
            var t;
            e.done?a(e.value):(t=e.value, t instanceof n?t:new n((function(e){
              e(t)
            }))).then(r, l)
          }
          s((o=o.apply(e, t||[
          ])).next())
        }))
      }, _e=function(e, t){
        var n, o, a, i, r={
          label:0, sent:function(){
            if(1&a[
              0
            ])throw a[
              1
            ];
            return a[
              1
            ]
          }, trys:[
          ], ops:[
          ]
        };
        return i={
          next:l(0), throw:l(1), return:l(2)
        }, "function"==typeof Symbol&&(i[
          Symbol.iterator
        ]
        =function(){
          return this
        }), i;
        function l(l){
          return function(s){
            return function(l){
              if(n)throw new TypeError("Generator is already executing.");
              for(;
              i&&(i=0, l[
                0
              ]
              &&(r=0)), r;
              )try{
                if(n=1, o&&(a=2&l[
                  0
                ]
                ?o.return:l[
                  0
                ]
                ?o.throw||((a=o.return)&&a.call(o), 0):o.next)&&!(a=a.call(o, l[
                  1
                ])).done)return a;
                switch(o=0, a&&(l=[
                  2&l[
                    0
                  ], a.value
                ]), l[
                  0
                ]){
                  case 0:case 1:a=l;
                  break;
                  case 4:return r.label++, {
                    value:l[
                      1
                    ], done:!1
                  };
                  case 5:r.label++, o=l[
                    1
                  ], l=[
                    0
                  ];
                  continue;
                  case 7:l=r.ops.pop(), r.trys.pop();
                  continue;
                  default:if(!(a=r.trys, (a=a.length>0&&a[
                    a.length-1
                  ])||6!==l[
                    0
                  ]
                  &&2!==l[
                    0
                  ])){
                    r=0;
                    continue
                  }
                  if(3===l[
                    0
                  ]
                  &&(!a||l[
                    1
                  ]
                  >a[
                    0
                  ]
                  &&l[
                    1
                  ]
                  <a[
                    3
                  ])){
                    r.label=l[
                      1
                    ];
                    break
                  }
                  if(6===l[
                    0
                  ]
                  &&r.label<a[
                    1
                  ]){
                    r.label=a[
                      1
                    ], a=l;
                    break
                  }
                  if(a&&r.label<a[
                    2
                  ]){
                    r.label=a[
                      2
                    ], r.ops.push(l);
                    break
                  }
                  a[
                    2
                  ]
                  &&r.ops.pop(), r.trys.pop();
                  continue
                }
                l=t.call(e, r)
              }
              catch(e){
                l=[
                  6, e
                ], o=0
              }
              finally{
                n=a=0
              }
              if(5&l[
                0
              ])throw l[
                1
              ];
              return{
                value:l[
                  0
                ]
                ?l[
                  1
                ]
                :void 0, done:!0
              }
            }
            ([
              l, s
            ])
          }
        }
      }, Ce=function(e, t, n){
        if(n||2===arguments.length)for(var o, a=0, i=t.length;
        a<i;
        a++)!o&&a in t||(o||(o=Array.prototype.slice.call(t, 0, a)), o[
          a
        ]
        =t[
          a
        ]);
        return e.concat(o||Array.prototype.slice.call(t))
      };
      const ke=(0, o.pM)({
        components:{
          TreeRoot:ee, RelativeNode:b, Point:E, RelationSettingModal:pe, BatchDeleteModal:ye
        }, props:{
          keyword:{
            type:String, default:""
          }, dimensions:{
            type:Array, default:function(){
              return[
              ]
            }
          }
        }, setup:function(e, t){
          var n, a, h, m=this, g=(0, te.rd)().route, b=(0, o.KR)(null), y=(0, o.KR)([
          ]), w=(0, o.KR)(null), _=(0, o.KR)(null), C=(0, d.D)().depth, x=(0, o.WQ)("course", {
            id:0
          }), R=0;
          g.value&&(R=Number.isNaN(Number(null!==(n=g.value.query.node_id)&&void 0!==n?n:0))?0:Number(null!==(a=g.value.query.node_id)&&void 0!==a?a:0));
          var S=(0, o.KR)(!1), E=(0, o.KR)(""), T=(0, o.KR)(!0), D=(null===(h=window.featureToggles)||void 0===h?void 0:h.isCognitiveDimensionOpen)||!1, N=(0, o.KR)(!1), I=(0, o.KR)(), A=(0, o.KR)(!1), M=k(w), $=(0, o.KR)(!1), j=(0, o.KR)();
          (0, o.wB)((function(){
            return e.keyword
          }), (function(e){
            E.value=e
          }));
          var L=function(e, t, n){
            return we(m, void 0, void 0, (function(){
              var o, a, i, l, s, c, d, f, v, h;
              return _e(this, (function(m){
                switch(m.label){
                  case 0:if(t===n)return[
                    2, Promise.resolve(!0)
                  ];
                  m.label=1;
                  case 1:return m.trys.push([
                    1, 6, , 7
                  ]), "string"!=typeof e.id?[
                    3, 3
                  ]
                  :(o={
                    name:t, parentId:0
                  }, (null===(d=e.parent)||void 0===d?void 0:d.id)&&!Number.isNaN(Number(e.parent.id))&&(o.parentId=e.parent.id), [
                    4, (0, p.fg)(x.id, o)
                  ]);
                  case 2:return a=m.sent(), e.id=a.id, u.A.$emit("search-toolbar-node-created", a), [
                    3, 5
                  ];
                  case 3:return[
                    4, (0, p.w1)(e.id, {
                      name:t
                    })
                  ];
                  case 4:a=m.sent(), u.A.$emit("search-toolbar-node-updated", a), m.label=5;
                  case 5:return i=e.tree, l=function(n){
                    n.id===e.id&&(n.name=t)
                  }, i.recurseDown((function(e){
                    e.data.prevRelation.forEach(l), e.data.postRelation.forEach(l), e.data.undirectedRelation.forEach(l)
                  })), [
                    2, Promise.resolve(!0)
                  ];
                  case 6:return(s=m.sent()).isAxiosError?(c=null===(h=null===(v=null===(f=s.response.data)||void 0===f?void 0:f.errors)||void 0===v?void 0:v.name)||void 0===h?void 0:h[
                    0
                  ], r.Message.error(c), [
                    2, Promise.resolve(!1)
                  ]):[
                    2, Promise.resolve(!1)
                  ];
                  case 7:return[
                    2
                  ]
                }
              }))
            }))
          }, O=function(){
            var e=!0;
            w.value.tree.recurseDown((function(t){
              t.checked()||(e=!1)
            })), S.value=e
          }, G=(0, o.EW)((function(){
            return!i.Br&&!i.dn.value&&(i.yb&&!i.tq.value)
          }));
          (0, o.sV)((function(){
            return we(m, void 0, void 0, (function(){
              var e, n, a, r, l, s, c;
              return _e(this, (function(d){
                switch(d.label){
                  case 0:return A.value=!0, [
                    4, (0, p.eh)(x.id)
                  ];
                  case 1:return e=d.sent(), n=0, (0, v.dY)(e, (function(){
                    n++
                  })), t.emit("on-filtered", n), (a=e[
                    0
                  ])&&(a.states||(a.states=new f.Mk), a.states.selected=!0), i.gW.value=w.value, i.gW.value.tree.setModel(e), i.uW.value=e, 0!==R&&0!==(r=i.gW.value.tree.find((function(e){
                    return e.id===R
                  }), !1)).length&&(r[
                    0
                  ].select(), r[
                    0
                  ].expandTop(!1)), T.value=0===e.length, l=w.value.opts.multiple, s=w.value.selected(), c=w.value.checked(), b.value={
                    selected:l?s:s[
                      0
                    ]
                    ||null, checked:c
                  }, u.A.$on("knowledge-graph-search-selected-node", (function(e){
                    var t=i.gW.value.tree.find((function(t){
                      return t.id===e.id
                    }), !0);
                    0!==t.length&&(t[
                      0
                    ].select(), t[
                      0
                    ].expandTop(!1), (0, o.dY)((function(){
                      !function(e){
                        var t=document.querySelector(".knowledge-content .content-wrapper .content");
                        if(t){
                          var n=t.querySelector('[data-id="'.concat(e.id, '"]'));
                          if(n){
                            var o=t.getBoundingClientRect(), a=n.getBoundingClientRect().top-o.top+t.scrollTop, i=n.clientHeight, r=a-.25*t.clientHeight+i/2;
                            t.scrollTo({
                              top:r, behavior:"smooth"
                            })
                          }
                        }
                      }
                      (e)
                    })), u.A.$emit("show-drawer"))
                  })), A.value=!1, [
                    2
                  ]
                }
              }))
            }))
          }));
          var P=function(e, t, n){
            if(e.parent===t.parent&&[
              s.Nz.BELOW, s.Nz.ABOVE
            ].includes(n))return!1;
            var o=function(e){
              var t=[
              ];
              return e.recurseDown((function(e){
                t.push.apply(t, Ce(Ce(Ce([
                ], e.data.postRelation.map((function(e){
                  return e.id
                })), !1), e.data.prevRelation.map((function(e){
                  return e.id
                })), !1), e.data.undirectedRelation.map((function(e){
                  return e.id
                })), !1))
              })), t
            }
            (e), a=function(e){
              var t=[
              ];
              return e.root.recurseDown((function(e){
                return t.push(e.id)
              })), t
            }
            (t).filter((function(t){
              return t!==e.id
            }));
            return o.some((function(e){
              return a.includes(e)
            }))
          };
          return{
            treeOptions:{
              modelParse:i.yb?null:{
                masteryRate:"masteryRate", masteryRank:"masteryRank", completenessRate:"completenessRate", completenessRank:"completenessRank"
              }, editing:i.yb&&!i.tq.value, autoCheckChildren:!1, nodeIndent:28, depth:C, dnd:!(i.Br||i.dn.value||!i.yb)&&{
                onDragFinish:function(e, t, n){
                  var o, a, i, c, u, d, f, v;
                  return we(this, void 0, void 0, (function(){
                    var h, m;
                    return _e(this, (function(g){
                      switch(g.label){
                        case 0:if(function(e, t, n){
                          return n===s.Nz.ON&&t.depth+1+(e.depthWithChildren()+1)>C
                        }
                        (e, t, n))return r.Message.error(l.default.t("knowledgeGraph.move.overMaxDepth")), [
                          2, !1
                        ];
                        if(P(e, t, n))return r.Message.error(l.default.t("knowledgeGraph.move.relation")), [
                          2, !1
                        ];
                        if(function(e, t, n){
                          var o, a;
                          switch(n){
                            case s.Nz.ON:a=t.find((function(t){
                              return t.text===e.text&&t.id!==e.id
                            }), !1);
                            break;
                            case s.Nz.ABOVE:case s.Nz.BELOW:a=(null!==(o=t.parent)&&void 0!==o?o:t.tree).find((function(t){
                              return t.text===e.text&&t.id!==e.id
                            }), !1, !1);
                            break;
                            default:return!0
                          }
                          return!!t.tree.isNode(a)||!!(Array.isArray(a)&&a.length>0)
                        }
                        (e, t, n))return r.Message.error(l.default.t("knowledgeGraph.move.duplicate")), [
                          2, !1
                        ];
                        h=0, m=0, n===s.Nz.ON?(h=null!==(a=null===(o=t.last())||void 0===o?void 0:o.id)&&void 0!==a?a:0, m=t.id):n===s.Nz.ABOVE?(m=null!==(c=null===(i=t.parent)||void 0===i?void 0:i.id)&&void 0!==c?c:0, h=null!==(d=null===(u=t.prev())||void 0===u?void 0:u.id)&&void 0!==d?d:0):n===s.Nz.BELOW&&(m=null!==(v=null===(f=t.parent)||void 0===f?void 0:f.id)&&void 0!==v?v:0, h=t.id), g.label=1;
                        case 1:return g.trys.push([
                          1, 3, , 4
                        ]), [
                          4, (0, p.me)(x.id, {
                            curId:e.id, parentId:m, prevId:h, nextId:-1
                          })
                        ];
                        case 2:return g.sent(), [
                          2, !0
                        ];
                        case 3:return g.sent(), [
                          2, !1
                        ];
                        case 4:return[
                          2
                        ]
                      }
                    }))
                  }))
                }
              }, filter:{
                emptyText:"", showChildren:!1, textMatcher:function(e, t){
                  return new RegExp(e, "i").test(t.text)
                }, dimensionMatcher:function(e, t){
                  return e.includes(t.data.cognitiveDimension)
                }
              }, validate:function(e, t){
                if(!(t=null==t?void 0:t.trim()))return c.UniqueToast.error(l.default.t("knowledgeGraph.validate.notNull")), !1;
                var n=e.parent||{
                  children:e.tree.model
                };
                if(n){
                  var o=n.children.filter((function(t){
                    return t!==e
                  })).some((function(e){
                    return e.text===t
                  }));
                  return o&&c.UniqueToast.error(l.default.t("knowledgeGraph.validate.sameName")), !o
                }
                return!!t
              }, save:L
            }, treeModel:b, treeData:y, treeComponentRef:w, checkAll:S, filter:E, noData:T, toggleCheckAll:function(e){
              e?w.value.tree.checkAll():w.value.tree.uncheckAll()
            }, nodeCheckedHandle:O, nodeEditingStopHandle:L, nodeAddOrRemoveHandle:function(e){
              T.value=0===e.tree.model.length, O(), T.value&&S.value&&(S.value=!1)
            }, treeFilterHandle:function(e, n){
              T.value=0===e.length&&!!n, n||w.value.collapseAll();
              var o=[
              ];
              e.forEach((function(e){
                e.hasChildren()&&e.recurseDown((function(e){
                  new RegExp(n, "i").test(e.text)&&o.push(e)
                }), !0)
              })), o.forEach((function(e){
                e.state("visible", !0), e.recurseUp((function(e){
                  e.expand(), e.state("visible", !0)
                }))
              }));
              var a=w.value.tree.nodeCount();
              t.emit("on-filtered", a)
            }, isCognitiveDimensionOpen:D, pointRef:_, nodeRelationSettingModalOpen:function(e){
              N.value=!0, I.value=e
            }, showRelationSettingModal:N, currentRelationSettingNode:I, loading:A, addNewNode:function(){
              M.addNew()
            }, canAddNewNode:G, showBatchDeleteModal:$, currentBatchDeleteNode:j, batchDeleteModalOpen:function(e){
              $.value=!0, j.value=e
            }
          }
        }
      });
      const xe=(0, g.A)(ke, (function(){
        var e=this, t=e.$createElement, n=e._self._c||t;
        return n("div", {
          staticClass:"tree-wrapper"
        }, [
          n("TreeRoot", {
            ref:"treeComponentRef", attrs:{
              data:e.treeData, options:e.treeOptions, "tree-loading":e.loading, "can-add-new-node":e.canAddNewNode
            }, on:{
              "node:checked":e.nodeCheckedHandle, "node:unchecked":e.nodeCheckedHandle, "node:added":e.nodeAddOrRemoveHandle, "node:removed":e.nodeAddOrRemoveHandle, "tree:filtered":e.treeFilterHandle, "node:relation:setting":e.nodeRelationSettingModalOpen, "add-new-node":e.addNewNode, "node:batch-delete":e.batchDeleteModalOpen
            }, model:{
              value:e.treeModel, callback:function(t){
                e.treeModel=t
              }, expression:"treeModel"
            }
          }), e._v(" "), n("RelationSettingModal", {
            attrs:{
              node:e.currentRelationSettingNode
            }, model:{
              value:e.showRelationSettingModal, callback:function(t){
                e.showRelationSettingModal=t
              }, expression:"showRelationSettingModal"
            }
          }), e._v(" "), n("BatchDeleteModal", {
            attrs:{
              node:e.currentBatchDeleteNode
            }, model:{
              value:e.showBatchDeleteModal, callback:function(t){
                e.showBatchDeleteModal=t
              }, expression:"showBatchDeleteModal"
            }
          })
        ], 1)
      }), [
      ], !1, null, "49e09b4f", null).exports, Re=(0, o.pM)({
        name:"Content", components:{
          Tree:xe, TooltipExt:a.A
        }, props:{
          keyword:{
            type:String
          }, dimensions:{
            type:Array, default:function(){
              return[
              ]
            }
          }
        }, setup:function(e){
          var t=(0, o.KR)("tree"), n=(0, o.KR)(), a=(0, o.KR)(""), r=(0, o.WQ)("course", {
            name:"", id:0
          }), l=(0, o.EW)((function(){
            return{
              "with-toolbar":i.lj.value, "without-toolbar":!i.lj.value
            }
          })), s=(0, o.KR)([
          ]), c=(0, o.KR)(0), d=function(){
            c.value=n.value.$refs.treeComponentRef.tree.nodeCount()
          };
          (0, o.wB)(n, (function(e){
            e&&(e.$refs.treeComponentRef.$on("node:added", d), e.$refs.treeComponentRef.$on("node:removed", d))
          })), (0, o.wB)((function(){
            return e.keyword
          }), (function(){
            e.keyword?a.value=e.keyword:a.value=""
          })), (0, o.wB)((function(){
            return e.dimensions
          }), (function(){
            s.value=e.dimensions
          }));
          var p=(0, o.EW)((function(){
            return!i.Br&&!i.dn.value&&(i.yb&&i.tq.value)
          })), f=(0, o.EW)((function(){
            return!i.Br&&!i.dn.value&&(!i.tq.value&&i.yb)
          })), v=(0, o.EW)((function(){
            return i.cn||i.dn.value
          }));
          return{
            tab:t, treeRef:n, filter:a, totalNode:c, search:function(e){
              a.value=e
            }, filteredHandle:function(e){
              c.value=e
            }, canEdit:f, canImportData:p, hideSearch:v, selectedDimensions:s, onDimensionSelected:function(e){
              s.value=e
            }, course:r, clickOutside:function(e){
              u.A.$emit("click-outside", e)
            }, showSearchToolbar:i.lj, contentClass:l
          }
        }
      });
      const Se=(0, g.A)(Re, (function(){
        var e=this, t=e.$createElement, n=e._self._c||t;
        return n("div", {
          staticClass:"content-wrapper", on:{
            click:function(t){
              return e.clickOutside(t)
            }
          }
        }, [
          n("div", {
            staticClass:"content", class:e.contentClass
          }, [
            n("div", {
              staticClass:"title"
            }, [
              n("i", {
                staticClass:"circle-button"
              }), e._v(" "), n("TooltipExt", {
                staticClass:"course-name", attrs:{
                  text:e.course.name, "transfer-class-name":"knowledge-graph-outline-tooltip"
                }
              }), e._v(" "), n("span", {
                staticClass:"course-icon"
              }, [
                e._v(e._s(e.$t("knowledgeGraph.course")))
              ])
            ], 1), e._v(" "), "tree"===e.tab?n("Tree", {
              ref:"treeRef", attrs:{
                keyword:e.filter, dimensions:e.selectedDimensions
              }, on:{
                "on-filtered":e.filteredHandle
              }
            }):e._e()
          ], 1)
        ])
      }), [
      ], !1, null, "7486916f", null).exports
    }, 260537:(e, t, n)=>{
      n.d(t, {
        HS:()=>i, P1:()=>s, Vl:()=>u, _k:()=>a, dn:()=>r, eB:()=>l, hk:()=>c
      });
      var o={
        edge:{
          default:"#D6E8FF", active:"l(0) 0:#4892F6 1:#18EBF9", directed:"#A4EEEF", undirected:"#B798FA"
        }, node:{
          root:"#03D7E6", other:"#03D7E6", 0:"#37B8F7", 1:"#1881F4", 2:"#687EFF", 3:"#BF84FF", 4:"#FFB35D", 5:"#FFD53D", 6:"#99DD00"
        }, text:{
          label:"#70748C", count:"#FFF"
        }
      }, a=function(e){
        return o.node[
          e
        ]
        ||o.node.other
      }, i=function(){
        return o.edge.default
      }, r=function(){
        return o.edge.directed
      }, l=function(){
        return o.edge.undirected
      }, s=function(){
        return o.edge.active
      }, c=function(){
        return o.text
      }, u=function(){
        var e=o.node;
        return Object.keys(e).filter((function(e){
          return!Number.isNaN(Number(e))
        })).map((function(t){
          return e[
            t
          ]
        }))
      }
    }, 261732:(e, t, n)=>{
      n.d(t, {
        A:()=>p
      });
      n(540590), n(418665), n(269193), n(14602);
      var o=n(595738), a=function(e, t, n, o){
        return new(n||(n=Promise))((function(a, i){
          function r(e){
            try{
              s(o.next(e))
            }
            catch(e){
              i(e)
            }
          }
          function l(e){
            try{
              s(o.throw(e))
            }
            catch(e){
              i(e)
            }
          }
          function s(e){
            var t;
            e.done?a(e.value):(t=e.value, t instanceof n?t:new n((function(e){
              e(t)
            }))).then(r, l)
          }
          s((o=o.apply(e, t||[
          ])).next())
        }))
      }, i=function(e, t){
        var n, o, a, i, r={
          label:0, sent:function(){
            if(1&a[
              0
            ])throw a[
              1
            ];
            return a[
              1
            ]
          }, trys:[
          ], ops:[
          ]
        };
        return i={
          next:l(0), throw:l(1), return:l(2)
        }, "function"==typeof Symbol&&(i[
          Symbol.iterator
        ]
        =function(){
          return this
        }), i;
        function l(l){
          return function(s){
            return function(l){
              if(n)throw new TypeError("Generator is already executing.");
              for(;
              i&&(i=0, l[
                0
              ]
              &&(r=0)), r;
              )try{
                if(n=1, o&&(a=2&l[
                  0
                ]
                ?o.return:l[
                  0
                ]
                ?o.throw||((a=o.return)&&a.call(o), 0):o.next)&&!(a=a.call(o, l[
                  1
                ])).done)return a;
                switch(o=0, a&&(l=[
                  2&l[
                    0
                  ], a.value
                ]), l[
                  0
                ]){
                  case 0:case 1:a=l;
                  break;
                  case 4:return r.label++, {
                    value:l[
                      1
                    ], done:!1
                  };
                  case 5:r.label++, o=l[
                    1
                  ], l=[
                    0
                  ];
                  continue;
                  case 7:l=r.ops.pop(), r.trys.pop();
                  continue;
                  default:if(!(a=r.trys, (a=a.length>0&&a[
                    a.length-1
                  ])||6!==l[
                    0
                  ]
                  &&2!==l[
                    0
                  ])){
                    r=0;
                    continue
                  }
                  if(3===l[
                    0
                  ]
                  &&(!a||l[
                    1
                  ]
                  >a[
                    0
                  ]
                  &&l[
                    1
                  ]
                  <a[
                    3
                  ])){
                    r.label=l[
                      1
                    ];
                    break
                  }
                  if(6===l[
                    0
                  ]
                  &&r.label<a[
                    1
                  ]){
                    r.label=a[
                      1
                    ], a=l;
                    break
                  }
                  if(a&&r.label<a[
                    2
                  ]){
                    r.label=a[
                      2
                    ], r.ops.push(l);
                    break
                  }
                  a[
                    2
                  ]
                  &&r.ops.pop(), r.trys.pop();
                  continue
                }
                l=t.call(e, r)
              }
              catch(e){
                l=[
                  6, e
                ], o=0
              }
              finally{
                n=a=0
              }
              if(5&l[
                0
              ])throw l[
                1
              ];
              return{
                value:l[
                  0
                ]
                ?l[
                  1
                ]
                :void 0, done:!0
              }
            }
            ([
              l, s
            ])
          }
        }
      };
      const r=(0, o.pM)({
        name:"lib-tree-node", props:{
          node:{
            type:Object, required:!0
          }, target:{
            type:Object, default:null
          }, level:{
            type:Number, default:0
          }
        }, setup:function(e, t){
          var n=this;
          return{
            toggleFolderExpand:function(e){
              return a(n, void 0, void 0, (function(){
                return i(this, (function(n){
                  return t.emit("toggleFolderExpand", e), [
                    2
                  ]
                }))
              }))
            }, selectLib:function(e){
              return a(n, void 0, void 0, (function(){
                return i(this, (function(n){
                  return t.emit("selectLib", e), [
                    2
                  ]
                }))
              }))
            }
          }
        }
      });
      var l=n(514486);
      const s=(0, l.A)(r, (function(){
        var e=this, t=e.$createElement, n=e._self._c||t;
        return n("div", {
          staticClass:"tree-node"
        }, [
          e.node.isFolder?n("div", {
            staticClass:"folder", style:{
              "padding-left":50*e.level+20+"px"
            }
          }, [
            e.node.expand?n("i", {
              staticClass:"font font-tree-collapsed", on:{
                click:function(t){
                  return e.toggleFolderExpand(e.node)
                }
              }
            }):n("i", {
              staticClass:"font font-tree-expanded", on:{
                click:function(t){
                  return e.toggleFolderExpand(e.node)
                }
              }
            }), e._v(" "), n("i", {
              staticClass:"font font-file-folder"
            }), e._v(" "), n("span", {
              staticClass:"folder-name"
            }, [
              e._v(e._s(e.node.title))
            ])
          ]):n("div", {
            staticClass:"subject-lib", class:{
              selected:e.target&&e.target.id===e.node.id
            }, style:{
              "padding-left":50*e.level+46+"px"
            }, on:{
              click:function(t){
                return e.selectLib(e.node)
              }
            }
          }, [
            n("i", {
              staticClass:"font font-resource-subject-lib"
            }), e._v(" "), n("span", {
              staticClass:"lib-name"
            }, [
              e._v(e._s(e.node.title))
            ])
          ]), e._v(" "), e.node.children.length>0?e._l(e.node.children, (function(t){
            return n("lib-tree-node", {
              key:t.id, attrs:{
                node:t, target:e.target, level:e.level+1
              }, on:{
                toggleFolderExpand:e.toggleFolderExpand, selectLib:e.selectLib
              }
            })
          })):e._e()
        ], 2)
      }), [
      ], !1, null, "c30bb672", null).exports;
      var c=function(e, t, n, o){
        return new(n||(n=Promise))((function(a, i){
          function r(e){
            try{
              s(o.next(e))
            }
            catch(e){
              i(e)
            }
          }
          function l(e){
            try{
              s(o.throw(e))
            }
            catch(e){
              i(e)
            }
          }
          function s(e){
            var t;
            e.done?a(e.value):(t=e.value, t instanceof n?t:new n((function(e){
              e(t)
            }))).then(r, l)
          }
          s((o=o.apply(e, t||[
          ])).next())
        }))
      }, u=function(e, t){
        var n, o, a, i, r={
          label:0, sent:function(){
            if(1&a[
              0
            ])throw a[
              1
            ];
            return a[
              1
            ]
          }, trys:[
          ], ops:[
          ]
        };
        return i={
          next:l(0), throw:l(1), return:l(2)
        }, "function"==typeof Symbol&&(i[
          Symbol.iterator
        ]
        =function(){
          return this
        }), i;
        function l(l){
          return function(s){
            return function(l){
              if(n)throw new TypeError("Generator is already executing.");
              for(;
              i&&(i=0, l[
                0
              ]
              &&(r=0)), r;
              )try{
                if(n=1, o&&(a=2&l[
                  0
                ]
                ?o.return:l[
                  0
                ]
                ?o.throw||((a=o.return)&&a.call(o), 0):o.next)&&!(a=a.call(o, l[
                  1
                ])).done)return a;
                switch(o=0, a&&(l=[
                  2&l[
                    0
                  ], a.value
                ]), l[
                  0
                ]){
                  case 0:case 1:a=l;
                  break;
                  case 4:return r.label++, {
                    value:l[
                      1
                    ], done:!1
                  };
                  case 5:r.label++, o=l[
                    1
                  ], l=[
                    0
                  ];
                  continue;
                  case 7:l=r.ops.pop(), r.trys.pop();
                  continue;
                  default:if(!(a=r.trys, (a=a.length>0&&a[
                    a.length-1
                  ])||6!==l[
                    0
                  ]
                  &&2!==l[
                    0
                  ])){
                    r=0;
                    continue
                  }
                  if(3===l[
                    0
                  ]
                  &&(!a||l[
                    1
                  ]
                  >a[
                    0
                  ]
                  &&l[
                    1
                  ]
                  <a[
                    3
                  ])){
                    r.label=l[
                      1
                    ];
                    break
                  }
                  if(6===l[
                    0
                  ]
                  &&r.label<a[
                    1
                  ]){
                    r.label=a[
                      1
                    ], a=l;
                    break
                  }
                  if(a&&r.label<a[
                    2
                  ]){
                    r.label=a[
                      2
                    ], r.ops.push(l);
                    break
                  }
                  a[
                    2
                  ]
                  &&r.ops.pop(), r.trys.pop();
                  continue
                }
                l=t.call(e, r)
              }
              catch(e){
                l=[
                  6, e
                ], o=0
              }
              finally{
                n=a=0
              }
              if(5&l[
                0
              ])throw l[
                1
              ];
              return{
                value:l[
                  0
                ]
                ?l[
                  1
                ]
                :void 0, done:!0
              }
            }
            ([
              l, s
            ])
          }
        }
      };
      const d=(0, o.pM)({
        name:"course-lib-tree", components:{
          LibTreeNode:s
        }, props:{
          treeNodes:{
            type:Array, required:!0
          }, isFolderLeaf:{
            type:Boolean, default:!1
          }
        }, setup:function(e, t){
          var n=this, a=(0, o.KR)(null);
          return(0, o.sV)((function(){
            window.addEventListener("setTargetNodeEmpty", (function(){
              a.value=null
            }))
          })), (0, o.hi)((function(){
            window.removeEventListener("setTargetNodeEmpty", (function(){
              a.value=null
            }))
          })), {
            toggleFolderExpand:function(e){
              return c(n, void 0, void 0, (function(){
                return u(this, (function(n){
                  return t.emit("toggleFolderExpand", e), [
                    2
                  ]
                }))
              }))
            }, selectLib:function(e){
              a.value=e;
              var n={
                id:e.id, name:e.title, is_folder:!1
              }, o=new CustomEvent("updateTargetSubjectLib", {
                detail:n
              });
              window.dispatchEvent(o), t.emit("updateSelectedLib", e)
            }, targetNode:a
          }
        }
      });
      const p=(0, l.A)(d, (function(){
        var e=this, t=e.$createElement, n=e._self._c||t;
        return n("div", {
          staticClass:"tree-container"
        }, [
          e.treeNodes.length>0?n("div", {
            staticClass:"tree-node-wrapper"
          }, e._l(e.treeNodes, (function(t){
            return n("lib-tree-node", {
              key:t.id, attrs:{
                node:t, target:e.targetNode
              }, on:{
                toggleFolderExpand:e.toggleFolderExpand, selectLib:e.selectLib
              }
            })
          })), 1):n("div", {
            staticClass:"empty-libs"
          }, [
            n("i", {
              staticClass:"font font-subject-library-blank"
            }), e._v(" "), n("span", {
              staticClass:"no-lib-tip"
            }, [
              e._v(e._s(e.$t("noSubjectLibTip")))
            ])
          ])
        ])
      }), [
      ], !1, null, "b7dbb8a2", null).exports
    }, 322810:(e, t, n)=>{
      n.d(t, {
        A:()=>l
      });
      var o=n(595738), a=n(297786), i=n(929119);
      const r=(0, o.pM)({
        name:"TeachingCalendarViewModal", props:{
          keyword:{
            type:String
          }, value:{
            type:Boolean, required:!0
          }, model:{
            type:Object, required:!0
          }
        }, setup:function(e, t){
          return{
            show:(0, a.hRP)(e, "value", t.emit, {
              eventName:"input"
            }), highlightKeyword:i.w
          }
        }
      });
      const l=(0, n(514486).A)(r, (function(){
        var e=this, t=e.$createElement, n=e._self._c||t;
        return n("Modal", {
          attrs:{
            title:e.$t("teachingCalendar.detail"), width:600, "mask-closable":!1, "footer-hide":"", transfer:!1
          }, model:{
            value:e.show, callback:function(t){
              e.show=t
            }, expression:"show"
          }
        }, [
          e.model.course?n("h2", [
            e._v(e._s(e.model.course.name)+"("+e._s(e.model.course.courseCode)+")")
          ]):e._e(), e._v(" "), n("Form", {
            attrs:{
              "label-width":100, "label-position":"left"
            }
          }, [
            n("FormItem", {
              attrs:{
                label:e.$t("teachingCalendar.week")
              }
            }, [
              n("span", [
                e._v(e._s(e.model.teachingWeek?e.model.teachingWeek.sequence:0))
              ])
            ]), e._v(" "), n("FormItem", {
              attrs:{
                label:e.$t("teachingCalendar.teachingType")
              }
            }, [
              n("span", [
                e._v(e._s(e.model.type))
              ])
            ]), e._v(" "), n("FormItem", {
              attrs:{
                label:e.$t("teachingCalendar.content")
              }
            }, [
              n("span", {
                domProps:{
                  innerHTML:e._s(e.highlightKeyword(e.model.content, e.keyword))
                }
              })
            ]), e._v(" "), n("FormItem", {
              attrs:{
                label:e.$t("teachingCalendar.hours")
              }
            }, [
              n("span", [
                e._v(e._s(e.model.hours))
              ])
            ]), e._v(" "), n("FormItem", {
              attrs:{
                label:e.$t("teachingCalendar.instructor")
              }
            }, [
              n("span", [
                e._v(e._s(e.model.instructor))
              ])
            ]), e._v(" "), n("FormItem", {
              attrs:{
                label:e.$t("teachingCalendar.location")
              }
            }, [
              n("span", [
                e._v(e._s(e.model.location))
              ])
            ]), e._v(" "), n("FormItem", {
              attrs:{
                label:e.$t("teachingCalendar.teachingTime")
              }
            }, [
              n("span", [
                e._v(e._s(e.model.teachingTime))
              ])
            ])
          ], 1)
        ], 1)
      }), [
      ], !1, null, "5dd5350e", null).exports
    }, 350757:(e, t, n)=>{
      n.d(t, {
        A:()=>p
      });
      n(754989);
      var o=n(595738), a=n(552979), i=n(48292), r=n(972194), l=n(542535), s=n(357769), c=[
        "一", "二", "三", "四", "五", "六", "七", "八", "九", "十"
      ], u=function(){
        var e;
        return null===(e=document.documentElement.getAttribute("lang"))||void 0===e?void 0:e.toLocaleLowerCase().startsWith("zh")
      };
      const d=(0, o.pM)({
        components:{
          Badge:s.A
        }, props:{
          viewMode:{
            type:String, required:!0
          }, value:{
            type:Number, default:100
          }, levelColors:{
            type:Array, default:function(){
              return l.SS
            }
          }, svg:{
            type:Function
          }
        }, setup:function(e, t){
          var n=t.emit, s=(0, r.D)().depth, d={
            level:{
              name:a.default.t("knowledgeGraph.nodeLevel"), value:Array(s).fill(0).map((function(t, n){
                return{
                  desc:a.default.t("knowledgeGraph.nodeByLevel", [
                    u()?c[
                      n
                    ]
                    :n+1
                  ]), color:e.levelColors[
                    n%e.levelColors.length
                  ]
                }
              }))
            }, completeness:{
              name:a.default.t("knowledgeGraph.completeRate"), value:[
                {
                  desc:"80%-100%", color:l.QX[
                    0
                  ]
                }, {
                  desc:"60%-79%", color:l.QX[
                    1
                  ]
                }, {
                  desc:a.default.t("knowledgeGraph.statistics.below60"), color:l.QX[
                    2
                  ]
                }, {
                  desc:a.default.t("knowledgeGraph.nodata"), color:l.QX[
                    3
                  ]
                }
              ]
            }, mastery:{
              name:a.default.t("knowledgeGraph.masteryRate"), value:[
                {
                  desc:"80%-100%", color:l.DO[
                    0
                  ]
                }, {
                  desc:"60%-79%", color:l.DO[
                    1
                  ]
                }, {
                  desc:a.default.t("knowledgeGraph.statistics.below60"), color:l.DO[
                    2
                  ]
                }, {
                  desc:a.default.t("knowledgeGraph.nodata"), color:l.DO[
                    3
                  ]
                }
              ]
            }
          }, p=(0, o.EW)((function(){
            switch(e.viewMode){
              case i.nE.LEVEL:return d.level;
              case i.nE.COMPLETENESS:return d.completeness;
              case i.nE.MASTERY:return d.mastery;
              default:return d.level
            }
          })), f=(0, o.EW)((function(){
            return e.viewMode!==i.nE.LEVEL||p.value.value.length>1
          }));
          return{
            legend:p, show:f, toggle:function(t){
              e.value!==t&&n("input", t)
            }
          }
        }
      });
      const p=(0, n(514486).A)(d, (function(){
        var e=this, t=e.$createElement, n=e._self._c||t;
        return e.show?n("div", {
          staticClass:"legend"
        }, [
          n("div", {
            staticClass:"name"
          }, [
            e._v(e._s(e.legend.name))
          ]), e._v(" "), n("div", {
            staticClass:"grid-wrapper"
          }, e._l(e.legend.value, (function(t, o){
            return n("div", {
              key:o, staticClass:"legend-item", class:{
                disabled:o>e.value
              }, on:{
                click:function(t){
                  return e.toggle(o)
                }
              }
            }, [
              e.svg&&o<=e.value?n("div", {
                staticClass:"svg-badge", domProps:{
                  innerHTML:e._s(e.svg(t.color))
                }
              }):n("Badge", {
                attrs:{
                  color:t.color, size:10
                }
              }), e._v(" "), n("span", [
                e._v(e._s(t.desc))
              ])
            ], 1)
          })), 0)
        ]):e._e()
      }), [
      ], !1, null, "7c5e4bbf", null).exports
    }, 379960:(e, t, n)=>{
      n.d(t, {
        A:()=>i
      });
      var o=n(716880);
      const a={
        props:{
          imgStyle:{
            type:Object, default:()=>{
            }
          }
        }, data:()=>({
          svg:o
        })
      };
      const i=(0, n(514486).A)(a, (function(){
        var e=this, t=e.$createElement, n=e._self._c||t;
        return n("div", {
          staticClass:"nothing"
        }, [
          n("img", {
            style:e.imgStyle, attrs:{
              src:e.svg, alt:""
            }
          }), e._v(" "), n("div", {
            staticClass:"desc"
          }, [
            e._t("default")
          ], 2)
        ])
      }), [
      ], !1, null, "e3af625e", null).exports
    }, 385634:(e, t, n)=>{
      n.d(t, {
        X:()=>o, Y:()=>a
      });
      var o=function(){
        var e=this.$createElement;
        return(this._self._c||e)("div", {
          ref:"eleRef", staticClass:"graph-container canvas-graph"
        })
      }, a=[
      ]
    }, 499440:(e, t, n)=>{
      n.d(t, {
        A:()=>f
      });
      n(714913), n(158649);
      var o, a, i=n(595738), r=n(888634), l=n(39134), s=n(552979), c=n(877401), u=n(194725), d=null!==(a=null===(o=window.globalData)||void 0===o?void 0:o.course)&&void 0!==a?a:{
        id:0
      };
      const p=(0, i.pM)({
        props:{
          keyword:{
            type:String, default:""
          }, nodeId:{
            type:Number
          }, stripe:{
            type:Boolean, default:!0
          }
        }, components:{
          EllipsisText:l.A, Pagination:r.A
        }, setup:function(e){
          var t, n=[
            {
              title:s.default.t("knowledgeGraph.statistics.userNo"), key:"userNo", slot:"userNo", width:e.nodeId?"183px":"247px"
            }, {
              title:s.default.t("name"), key:"name", width:e.nodeId?"212px":"247px"
            }, {
              title:s.default.t("knowledgeGraph.statistics.completeness"), key:"completenessRate", sortable:"custom", width:e.nodeId?"183px":"160px"
            }, {
              title:s.default.t("knowledgeGraph.statistics.mastery"), key:"masteryRate", sortable:"custom", width:e.nodeId?"183px":"160px"
            }, {
              title:s.default.t("operation"), slot:"action", width:e.nodeId?"88px":"80px", align:"center"
            }
          ], o=null!==(t=e.nodeId)&&void 0!==t?t:Number(window.location.hash.split("/").slice(-1)[
            0
          ]), a=(0, u.M)(e, c.fI, o);
          return{
            columns:n, data:a.data, pagination:a.pagination, sortChange:a.sortChange, toStudentInfo:function(t){
              var n="/course/".concat(d.id, "/stat#/knowledge-graph/node/").concat(o, "/student/").concat(t.studentId);
              e.nodeId?window.open(n, "_blank"):window.location.href=n
            }, loading:a.loading
          }
        }
      });
      const f=(0, n(514486).A)(p, (function(){
        var e=this, t=e.$createElement, n=e._self._c||t;
        return n("div", {
          staticClass:"student-detail-content"
        }, [
          n("Table", {
            staticClass:"table-wrapper", attrs:{
              columns:e.columns, data:e.pagination.data.items, loading:e.loading, stripe:e.stripe
            }, on:{
              "on-sort-change":e.sortChange
            }, scopedSlots:e._u([
              {
                key:"userNo", fn:function(e){
                  var t=e.row;
                  return[
                    n("EllipsisText", {
                      attrs:{
                        line:1, text:t.userNo, "use-tipsy":!0
                      }
                    })
                  ]
                }
              }, {
                key:"action", fn:function(t){
                  var o=t.row;
                  return[
                    n("Tooltip", {
                      staticClass:"operation", attrs:{
                        placement:"top", content:e.$t("view")
                      }
                    }, [
                      n("i", {
                        staticClass:"font font-resource-view", on:{
                          click:function(t){
                            return e.toStudentInfo(o)
                          }
                        }
                      })
                    ])
                  ]
                }
              }
            ])
          }), e._v(" "), e.pagination.data.pages>0?n("div", {
            staticClass:"pagination"
          }, [
            n("Pagination", {
              attrs:{
                total:e.pagination.data.total, "page-size":e.pagination.data.pageSize, current:e.pagination.data.page, "show-sizer":"", "show-elevator":""
              }, on:{
                "on-change":e.pagination.pageChanged, "on-page-size-change":e.pagination.pageSizeChanged
              }
            })
          ], 1):e._e()
        ], 1)
      }), [
      ], !1, null, "8c2ddb18", null).exports
    }, 526320:(e, t, n)=>{
      n.d(t, {
        A:()=>o
      });
      const o=new(n(962893).default)
    }, 543226:(e, t, n)=>{
      n.d(t, {
        z:()=>l
      });
      var o=n(418562), a=n(738645), i=n(510543), r=function(e, t, n, o){
        var a, i=arguments.length, r=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t, n):o;
        if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e, t, n, o);
        else for(var l=e.length-1;
        l>=0;
        l--)(a=e[
          l
        ])&&(r=(i<3?a(r):i>3?a(t, n, r):a(t, n))||r);
        return i>3&&r&&Object.defineProperty(t, n, r), r
      }, l=function(){
        function e(){
          this.competencyObjectivesKnowledgeNodes=[
          ], this.active=!1, this.uuid=(0, o.A)()
        }
        return e.prototype.activated=function(){
          this.active=!0
        }, e.prototype.deactivate=function(){
          this.active=!1
        }, Object.defineProperty(e.prototype, "knowledgeNodeIds", {
          get:function(){
            return this.competencyObjectivesKnowledgeNodes.map((function(e){
              return e.id
            }))
          }, enumerable:!1, configurable:!0
        }), r([
          (0, a.v)({
            name:"course_id"
          })
        ], e.prototype, "courseId", void 0), r([
          (0, i.d)((function(e){
            return e.obj.competency_objectives_knowledge_nodes.map((function(e){
              return e.knowledge_node
            }))
          })), (0, a.v)({
            name:"competency_objectives_knowledge_nodes"
          })
        ], e.prototype, "competencyObjectivesKnowledgeNodes", void 0), e
      }
      ()
    }, 561823:(e, t, n)=>{
      n.d(t, {
        B$:()=>d, GS:()=>p, OR:()=>u, d2:()=>g, mP:()=>f, u2:()=>v, vb:()=>m
      });
      n(540590), n(418665), n(269193), n(14602);
      var o=n(272505), a=n.n(o), i=n(920453), r=n(218831), l=n(543226), s=function(e, t, n, o){
        return new(n||(n=Promise))((function(a, i){
          function r(e){
            try{
              s(o.next(e))
            }
            catch(e){
              i(e)
            }
          }
          function l(e){
            try{
              s(o.throw(e))
            }
            catch(e){
              i(e)
            }
          }
          function s(e){
            var t;
            e.done?a(e.value):(t=e.value, t instanceof n?t:new n((function(e){
              e(t)
            }))).then(r, l)
          }
          s((o=o.apply(e, t||[
          ])).next())
        }))
      }, c=function(e, t){
        var n, o, a, i, r={
          label:0, sent:function(){
            if(1&a[
              0
            ])throw a[
              1
            ];
            return a[
              1
            ]
          }, trys:[
          ], ops:[
          ]
        };
        return i={
          next:l(0), throw:l(1), return:l(2)
        }, "function"==typeof Symbol&&(i[
          Symbol.iterator
        ]
        =function(){
          return this
        }), i;
        function l(l){
          return function(s){
            return function(l){
              if(n)throw new TypeError("Generator is already executing.");
              for(;
              i&&(i=0, l[
                0
              ]
              &&(r=0)), r;
              )try{
                if(n=1, o&&(a=2&l[
                  0
                ]
                ?o.return:l[
                  0
                ]
                ?o.throw||((a=o.return)&&a.call(o), 0):o.next)&&!(a=a.call(o, l[
                  1
                ])).done)return a;
                switch(o=0, a&&(l=[
                  2&l[
                    0
                  ], a.value
                ]), l[
                  0
                ]){
                  case 0:case 1:a=l;
                  break;
                  case 4:return r.label++, {
                    value:l[
                      1
                    ], done:!1
                  };
                  case 5:r.label++, o=l[
                    1
                  ], l=[
                    0
                  ];
                  continue;
                  case 7:l=r.ops.pop(), r.trys.pop();
                  continue;
                  default:if(!(a=r.trys, (a=a.length>0&&a[
                    a.length-1
                  ])||6!==l[
                    0
                  ]
                  &&2!==l[
                    0
                  ])){
                    r=0;
                    continue
                  }
                  if(3===l[
                    0
                  ]
                  &&(!a||l[
                    1
                  ]
                  >a[
                    0
                  ]
                  &&l[
                    1
                  ]
                  <a[
                    3
                  ])){
                    r.label=l[
                      1
                    ];
                    break
                  }
                  if(6===l[
                    0
                  ]
                  &&r.label<a[
                    1
                  ]){
                    r.label=a[
                      1
                    ], a=l;
                    break
                  }
                  if(a&&r.label<a[
                    2
                  ]){
                    r.label=a[
                      2
                    ], r.ops.push(l);
                    break
                  }
                  a[
                    2
                  ]
                  &&r.ops.pop(), r.trys.pop();
                  continue
                }
                l=t.call(e, r)
              }
              catch(e){
                l=[
                  6, e
                ], o=0
              }
              finally{
                n=a=0
              }
              if(5&l[
                0
              ])throw l[
                1
              ];
              return{
                value:l[
                  0
                ]
                ?l[
                  1
                ]
                :void 0, done:!0
              }
            }
            ([
              l, s
            ])
          }
        }
      }, u=function(e, t){
        return void 0===t&&(t=!1), s(void 0, void 0, void 0, (function(){
          var n, o, r;
          return c(this, (function(s){
            switch(s.label){
              case 0:return n=t?"anonymous-api":"api", [
                4, a().get("/".concat(n, "/course/").concat(e, "/competency-graph"))
              ];
              case 1:return o=s.sent(), r=o.data.data, [
                2, (0, i.plainToClass)(l.z, r)
              ]
            }
          }))
        }))
      }, d=function(e, t){
        return s(void 0, void 0, void 0, (function(){
          var n;
          return c(this, (function(o){
            switch(o.label){
              case 0:return[
                4, a().post("/api/course/".concat(e, "/competency-objective"), (0, r.decamelizeKeys)(t))
              ];
              case 1:return n=o.sent(), [
                2, (0, i.plainToClass)(l.z, n.data)
              ]
            }
          }))
        }))
      }, p=function(e, t){
        return s(void 0, void 0, void 0, (function(){
          var n;
          return c(this, (function(o){
            switch(o.label){
              case 0:return[
                4, a().put("/api/course/".concat(e, "/competency-objective/").concat(t.id), (0, r.decamelizeKeys)(t))
              ];
              case 1:return n=o.sent(), [
                2, (0, i.plainToClass)(l.z, n.data)
              ]
            }
          }))
        }))
      }, f=function(e, t){
        return s(void 0, void 0, void 0, (function(){
          return c(this, (function(n){
            switch(n.label){
              case 0:return[
                4, a().delete("/api/course/".concat(e, "/competency-objective/").concat(t))
              ];
              case 1:return n.sent(), [
                2
              ]
            }
          }))
        }))
      }, v=function(e, t){
        return s(void 0, void 0, void 0, (function(){
          return c(this, (function(n){
            switch(n.label){
              case 0:return[
                4, a().put("/api/course/".concat(e, "/competency-objectives/sort"), t)
              ];
              case 1:return[
                2, n.sent().data
              ]
            }
          }))
        }))
      }, h=function(){
      }, m=function(e, t){
        return void 0===t&&(t=!1), s(void 0, void 0, void 0, (function(){
          var n, o, r;
          return c(this, (function(l){
            switch(l.label){
              case 0:return n=t?"anonymous-api":"api", [
                4, a().get("/".concat(n, "/course/").concat(e, "/competency-graph/stat"))
              ];
              case 1:return o=l.sent(), r=o.data, [
                2, (0, i.plainToClass)(h, r)
              ]
            }
          }))
        }))
      }, g=function(e, t){
        return s(void 0, void 0, void 0, (function(){
          var n;
          return c(this, (function(o){
            switch(o.label){
              case 0:return[
                4, a().get("/api/course/".concat(e, "/knowledge-node/").concat(t, "/competency-objectives"))
              ];
              case 1:return n=o.sent(), [
                2, (0, i.plainToClass)(l.z, n.data)
              ]
            }
          }))
        }))
      }
    }, 623694:(e, t, n)=>{
      n.d(t, {
        Fv:()=>g, TO:()=>R, Ay:()=>S, nx:()=>i.nx
      });
      var o=n(670042), a=(n(169218), n(620491)), i=(n(714913), n(658379), n(678237)), r=n(260537), l=function(){
        return(l=Object.assign||function(e){
          for(var t, n=1, o=arguments.length;
          n<o;
          n++)for(var a in t=arguments[
            n
          ])Object.prototype.hasOwnProperty.call(t, a)&&(e[
            a
          ]
          =t[
            a
          ]);
          return e
        }).apply(this, arguments)
      }, s={
        active:{
          opacity:1
        }, inactive:{
          opacity:.2
        }, selected:{
          "node-label":{
            fontWeight:600
          }
        }
      }, c={
        "node-label":{
          fontWeight:400
        }, "node-border":{
          shadowBlur:0
        }, "node-focus-shape":{
          opacity:0, fill:"transparent"
        }
      }, u=function(e){
        var t=e.getModel(), n=l(l({
        }, c), (null==t?void 0:t.style)||{
        });
        return e.getStates().forEach((function(o){
          var a=e.getStateStyle(o);
          Object.assign(n, function(e){
            return s[
              e
            ]
            ||{
            }
          }
          (o), a, (null==t?void 0:t.isShow)?{
          }
          :{
            opacity:0
          })
        })), n
      };
      (0, a.Qp)("level-node", {
        subShapeNames:[
        ], draw:function(e, t){
          var n=e, o=n.style.opacity, a=t.addShape("circle", {
            attrs:{
              r:n.outerRadius+8, opacity:0
            }, name:"node-focus-shape"
          });
          t.addShape("circle", {
            attrs:{
              r:n.outerRadius+3, opacity:o
            }, name:"node-key-shape"
          }), t.addShape("image", {
            attrs:{
              x:-n.outerRadius, y:-n.outerRadius, width:n.outerSize, height:n.outerSize, img:(0, i.fP)((0, i.qY)(n.color)), shadowBlur:10, shadowColor:"#03D7E6", opacity:o
            }, draggable:!0, name:"node-border"
          }), t.addShape("image", {
            attrs:{
              x:-n.radius, y:-n.radius, width:n.size, height:n.size, img:(0, i.fP)((0, i.nx)(n.color)), cursor:"pointer", opacity:o
            }, draggable:!0, name:"node-bg"
          }), n.children.length>0&&(t.addShape("text", {
            attrs:{
              x:0, y:0, textAlign:"center", textBaseline:"middle", text:n.children.length, fill:(0, r.hk)().count, fontSize:16, fontWeight:500, fontFamily:"PingFang SC", shadowBlur:1, shadowColor:"rgba(0, 0, 0, 0.30)", shadowOffsetX:.5, shadowOffsetY:.5, cursor:"pointer", opacity:o
            }, draggable:!0, name:"node-children-count"
          }), n.isRoot||(t.addShape("circle", {
            attrs:{
              x:n.outerRadius+5, y:n.outerRadius-5, r:10, fill:"#20BEC8", opacity:o, zIndex:10, cursor:"pointer"
            }, name:"node-expand-icon"
          }), t.addShape("rect", {
            attrs:{
              fill:"#fff", height:2, width:10, x:n.outerRadius, y:n.outerRadius-6, radius:1, opacity:o, cursor:"pointer"
            }, name:"node-expand-icon"
          }), t.addShape("rect", {
            attrs:{
              fill:"#fff", height:10, width:2, x:n.outerRadius+4, y:n.outerRadius-10, radius:1, opacity:o, cursor:"pointer"
            }, name:"node-expand-icon"
          })));
          var l=function(e, t, n){
            var o=document.createElement("canvas").getContext("2d");
            if(o.font="".concat(n, "px PingFang SC"), o.measureText(e).width<=t)return e;
            for(var a=e;
            o.measureText("".concat(a, "...")).width>t&&a.length>0;
            )a=a.slice(0, -1);
            return"".concat(a, "...")
          }
          (n.label, 180, 14);
          return t.addShape("text", {
            attrs:{
              x:0, y:n.radius+8, textAlign:"center", textBaseline:"top", text:l, fill:(0, r.hk)().label, fontFamily:"PingFang SC", fontSize:14, lineHeight:22, opacity:o
            }, name:"node-label"
          }), a
        }, updateStyles:function(e){
          var t=u(e), n=e.getContainer();
          n.attr(t);
          var o=e.getModel();
          n.getChildren().forEach((function(e){
            var n=t[
              e.get("name")
            ]
            ||{
            };
            if(0!==t.opacity){
              var a=void 0!==n.opacity?n.opacity:+o.isShow;
              e.attr(l(l({
              }, n), {
                opacity:a
              }))
            }
          }));
          var a=n.findAllByName("node-expand-icon").at(-1);
          a&&o&&(o.isCollapsed?a.show():a.hide()), e.enableCapture(o.isShow)
        }, updateLabel:function(e){
          var t=e.getContainer().findAllByName("node-label").at(-1);
          if(t){
            var n=function(e, t, n){
              var o=document.createElement("canvas").getContext("2d");
              if(o.font="".concat(n, "px PingFang SC"), o.measureText(e).width<=t)return e;
              for(var a=e;
              o.measureText("".concat(a, "...")).width>t&&a.length>0;
              )a=a.slice(0, -1);
              return"".concat(a, "...")
            }
            (e.getModel().label, 180, 14);
            t.attr({
              text:n
            })
          }
        }, update:function(e, t, n){
          var o=this;
          "label"===n?o.updateLabel(t):"style"===n?o.updateStyles(t):(o.updateStyles(t), o.updateLabel(t))
        }, setState:function(e, t, n){
          var o;
          e&&n&&(null===(o=this.update)||void 0===o||o.call(this, n.getModel(), n))
        }
      });
      var d=function(){
        return(d=Object.assign||function(e){
          for(var t, n=1, o=arguments.length;
          n<o;
          n++)for(var a in t=arguments[
            n
          ])Object.prototype.hasOwnProperty.call(t, a)&&(e[
            a
          ]
          =t[
            a
          ]);
          return e
        }).apply(this, arguments)
      }, p="edge-shape-wrapper";
      (0, a.Bg)("level-node-edge", {
        afterDraw:function(e, t){
          var n=(this.getShapeStyle(e)||{
          })[
            p
          ]
          ||{
          };
          null==t||t.addShape("path", {
            attrs:d({
              path:[
                [
                  "M", 0, 0
                ], [
                  "L", 0, 0
                ]
              ]
            }, n), name:p
          })
        }, afterUpdate:function(e, t){
          if(t){
            var n=t.getKeyShape().attr("path")||[
            ], o=null==t?void 0:t.getContainer();
            null==o||o.findAllByName(p).forEach((function(e){
              e.attr({
                path:n
              })
            })), delete(t.get("originStyle")||{
            }).path
          }
        }, update:function(e, t){
          if(t){
            var n=t.getKeyShape(), o=t.getContainer(), a=null==t?void 0:t.getModel(), i=t.getStates(), r=a.style||{
            }, l=a.statStyles||{
            };
            Object.assign(r, l);
            var s={
            };
            o.getChildren().forEach((function(e){
              if(!e.get("isKeyShape")){
                var t=e.get("name");
                t&&(s[
                  t
                ]
                =r[
                  t
                ])
              }
            }));
            var c=e.startPoint, u=e.endPoint, p=this.getControlPoints(e), f=[
              c
            ];
            p&&(f=f.concat(p)), f.push(u);
            var v=this.getPath(f);
            i.forEach((function(e){
              var t=r[
                e
              ];
              t&&Object.assign(r, t)
            })), Object.keys(s).forEach((function(e){
              i.forEach((function(t){
                var n=s[
                  e
                ]
                [
                  t
                ];
                n&&Object.assign(s[
                  e
                ], n)
              }))
            })), n.attr(d({
              path:v
            }, r)), o.getChildren().forEach((function(e){
              var t=e.get("name");
              if(t){
                var n=s[
                  t
                ];
                e.attr(n)
              }
            }))
          }
        }
      }, "quadratic");
      n(418665), n(269193), n(67500), n(43148), n(14602);
      (0, a.Gv)("level-activate-relations", {
        getDefaultCfg:function(){
          return{
            activeState:"active", inactiveState:"inactive", selectState:"selected"
          }
        }, getEvents:function(){
          return{
            "node:mouseenter":"setAllItemStates", "node:mouseleave":"clearActiveState", "node:click":"setFocusedState"
          }
        }, setFocusedState:function(e){
          var t=this;
          if(![
            "node-label", "node-expand-icon"
          ].includes(e.target.get("name"))){
            var n=e.item, o=this.graph.getNodes();
            Promise.all(o.map((function(e){
              return t.graph.setItemState(e, "focused", !1), new Promise((function(e){
                return e()
              }))
            }))).then((function(){
              n&&t.graph.setItemState(n, "focused", !0)
            }))
          }
        }, setAllItemStates:function(e){
          var t=this;
          if("node-label"!==e.target.get("name")){
            var n=e.item;
            if(n){
              n.setState(this.selectState, !0);
              var o=n.getNeighbors().concat(n), a=n.getEdges(), i=this.graph.getNodes(), r=this.graph.getEdges();
              i.forEach((function(e){
                o.includes(e)?e.setState(t.activeState, !0):e.setState(t.inactiveState, !0)
              })), r.forEach((function(e){
                a.includes(e)?e.setState(t.activeState, !0):e.setState(t.inactiveState, !0)
              }))
            }
            else this.clearActiveState()
          }
        }, clearActiveState:function(e){
          var t;
          if("node-label"!==e.target.get("name")){
            var n=(null===(t=this.getDefaultCfg)||void 0===t?void 0:t.call(this))||{
            }, o=Object.keys(n).filter((function(e){
              return e.endsWith("State")
            })).map((function(e){
              return n[
                e
              ]
            })), a=this.graph.getNodes(), i=this.graph.getEdges(), r=e.item;
            r&&(r.setState(this.selectState, !1), r.update({
            }), a.forEach((function(e){
              e.clearStates(o)
            })), i.forEach((function(e){
              e.clearStates(o), e.update({
              })
            })))
          }
        }
      });
      var f, v=(f=function(e, t){
        return(f=Object.setPrototypeOf||{
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
        f(e, t), e.prototype=null===t?Object.create(t):(n.prototype=t.prototype, new n)
      }), h=function(){
        return(h=Object.assign||function(e){
          for(var t, n=1, o=arguments.length;
          n<o;
          n++)for(var a in t=arguments[
            n
          ])Object.prototype.hasOwnProperty.call(t, a)&&(e[
            a
          ]
          =t[
            a
          ]);
          return e
        }).apply(this, arguments)
      }, m={
        fitView:!1, fitCenter:!0, layout:{
          type:"force2", animate:!1, preventOverlap:!0, linkDistance:180
        }, maxZoom:2, minZoom:.5, modes:{
          default:[
            "drag-canvas", "drag-node", {
              type:"zoom-canvas", maxZoom:2, minZoom:.5
            }, "level-activate-relations"
          ]
        }
      }, g=function(e){
        function t(t){
          var n=this, o=h(h({
          }, m), t), a="string"==typeof o.container?document.querySelector(o.container):o.container;
          if(!a)throw new Error("container is not found");
          return o.container=a, (n=e.call(this, o)||this).container=a, n.options=o, n.initEvents(), n
        }
        return v(t, e), t.prototype.resetZoom=function(e){
          void 0===e&&(e=!0);
          var t=this;
          this.zoomTo(1, this.center, e, {
            duration:100, callback:function(){
              var n=t.getGraphCenterPoint(), o=n.x, a=n.y;
              t.translate(t.center.x-o, t.center.y-a, e, {
                duration:100
              })
            }
          })
        }, t.prototype.zoomIn=function(e){
          void 0===e&&(e=!0);
          var t=this.getZoom();
          this.options.maxZoom&&t>=this.options.maxZoom||this.zoomTo(t+.1, this.center, e, {
            duration:100
          })
        }, t.prototype.zoomOut=function(e){
          void 0===e&&(e=!0);
          var t=this.getZoom();
          this.options.minZoom&&t<=this.options.minZoom||this.zoomTo(t-.1, this.center, e, {
            duration:100
          })
        }, t.prototype.initEvents=function(){
          var e=this;
          this.on("node:click", (function(t){
            "node-expand-icon"===t.target.get("name")?e.emit("node-expand", t):e.emit("node-click", t)
          })), this.on("wheelzoom", (function(){
            e.emit("zoom", e.getZoom())
          })), this.on("viewportchange", (function(){
            e.emit("zoom", e.getZoom())
          }))
        }, Object.defineProperty(t.prototype, "center", {
          get:function(){
            return{
              x:this.getWidth()/2, y:this.getHeight()/2
            }
          }, enumerable:!1, configurable:!0
        }), t
      }
      (a.TS), b=(n(700533), n(906048), n(405852)), y=function(){
        return(y=Object.assign||function(e){
          for(var t, n=1, o=arguments.length;
          n<o;
          n++)for(var a in t=arguments[
            n
          ])Object.prototype.hasOwnProperty.call(t, a)&&(e[
            a
          ]
          =t[
            a
          ]);
          return e
        }).apply(this, arguments)
      }, w=Math.PI, _=Math.sin, C=Math.cos, k=function(){
        function e(e, t, n, o){
          this.id=e, this.label=t, this.level=n, this.parentId=o, this.type="level-node", this.isRoot=!1, this.isCollapsed=!0, this.children=[
          ], this.isShow=!0, this._style={
          }, this.stateStyles={
            inactive:{
              opacity:.2
            }, active:{
              opacity:1
            }, focused:{
              "node-focus-shape":{
                opacity:.2, fill:this.color
              }, "node-label":{
                fontWeight:600
              }, "node-border":{
                shadowBlur:20, shadowColor:this.color
              }
            }, selected:{
              "node-border":{
                shadowBlur:20, shadowColor:this.color
              }
            }
          }
        }
        return e.from=function(t){
          return new e(t.id, t.label, t.level, t.parentId)
        }, Object.defineProperty(e.prototype, "size", {
          get:function(){
            if(this.isRoot)return e.ROOT_SIZE;
            var t=e.MAX_SIZE-e.DECREASING_SIZE*this.level;
            return Math.max(t, e.MIN_SIZE)
          }, enumerable:!1, configurable:!0
        }), Object.defineProperty(e.prototype, "radius", {
          get:function(){
            return this.size/2
          }, enumerable:!1, configurable:!0
        }), Object.defineProperty(e.prototype, "outerSize", {
          get:function(){
            if(this.isRoot)return this.size+e.RING_ROOT_SIZE;
            var t=Math.max(e.MAX_RING_SIZE-e.DECREASING_RING_SIZE*this.level, e.MIN_RING_SIZE);
            return this.size+t
          }, enumerable:!1, configurable:!0
        }), Object.defineProperty(e.prototype, "outerRadius", {
          get:function(){
            return this.outerSize/2
          }, enumerable:!1, configurable:!0
        }), Object.defineProperty(e.prototype, "color", {
          get:function(){
            return this.isRoot?(0, r._k)("root"):(0, r._k)(this.level)
          }, enumerable:!1, configurable:!0
        }), Object.defineProperty(e.prototype, "style", {
          get:function(){
            return y(y({
            }, this._style), {
              opacity:+this.isShow
            })
          }, set:function(e){
          }, enumerable:!1, configurable:!0
        }), e.DECREASING_SIZE=8, e.DECREASING_RING_SIZE=2, e.ROOT_SIZE=80, e.RING_ROOT_SIZE=20, e.MAX_SIZE=e.ROOT_SIZE-3*e.DECREASING_SIZE, e.MIN_SIZE=e.ROOT_SIZE-6*e.DECREASING_SIZE, e.MAX_RING_SIZE=e.RING_ROOT_SIZE-3*e.DECREASING_RING_SIZE, e.MIN_RING_SIZE=e.RING_ROOT_SIZE-6*e.DECREASING_RING_SIZE, e
      }
      (), x=function(){
        function e(e, t){
          this.source=e, this.target=t, this.type="level-node-edge", this.endArrow=!0, this.isShow=!0, this._style={
            lineWidth:2, stroke:(0, r.HS)(), "edge-shape-wrapper":{
              opacity:0, lineWidth:10
            }
          }
        }
        return e.from=function(t){
          return new e(t.source, t.target)
        }, e.prototype.getColor=function(){
          return"directed"===this._relationType?(0, r.dn)():"undirected"===this._relationType?(0, r.eB)():(0, r.HS)()
        }, Object.defineProperty(e.prototype, "style", {
          get:function(){
            var e=y(y({
            }, this._style), {
              endArrow:{
                lineDash:[
                ], path:"M".concat(10*C(w/6), ",").concat(10*_(w/6), " L0,0 L").concat(10*C(w/6), ",-").concat(10*_(w/6))
              }, opacity:+this.isShow
            });
            return"level"!==this._relationType&&(e.lineDash=[
              4, 4
            ]), "undirected"===this._relationType&&delete e.endArrow, e
          }, set:function(e){
            this._style=e
          }, enumerable:!1, configurable:!0
        }), Object.defineProperty(e.prototype, "relationType", {
          get:function(){
            return this._relationType
          }, set:function(e){
            this._relationType=e, this._style.stroke=this.getColor()
          }, enumerable:!1, configurable:!0
        }), Object.defineProperty(e.prototype, "stateStyles", {
          get:function(){
            var e={
              active:{
                lineWidth:2, opacity:+this.isShow, stroke:(0, r.P1)(), "edge-shape-wrapper":{
                  opacity:.2*+this.isShow, stroke:(0, r.P1)()
                }
              }, inactive:{
                lineWidth:2, opacity:.2*+this.isShow, stroke:(0, r.HS)(), "edge-shape-wrapper":{
                  opacity:0
                }
              }
            };
            return"level"!==this._relationType&&(delete e.active[
              "edge-shape-wrapper"
            ], delete e.inactive[
              "edge-shape-wrapper"
            ], e.active.stroke=this.getColor(), e.inactive.stroke=this.getColor()), e
          }, enumerable:!1, configurable:!0
        }), e
      }
      (), R=function(){
        function e(e, t, n){
          var o;
          this.data=e, this.cfg=t, this.otherEdges=n, this.nodes=[
          ], this.edges=[
          ], this.showingLevel=0, this.init(), this.showingLevel!==(null===(o=this.cfg)||void 0===o?void 0:o.showLevelNumber)&&this.refresh()
        }
        return e.flatten=function(e){
          var t=[
          ], n=[
          ];
          (0, b.dY)(e, (function(e, o, a, i){
            if(t.push(k.from(y(y({
            }, e), {
              level:o, parentId:null==i?void 0:i.id
            }))), i){
              var r=x.from({
                source:i.id, target:e.id
              });
              r.relationType="level", n.push(r)
            }
          }));
          var o=t.reduce((function(e, t){
            return e[
              t.id
            ]
            =t, e
          }), {
          }), a=t.reduce((function(e, t){
            return t.parentId&&(e[
              t.parentId
            ]
            =e[
              t.parentId
            ]
            ||[
            ], e[
              t.parentId
            ].push(t)), e
          }), {
          });
          return t.forEach((function(e){
            e.parent=o[
              e.parentId||""
            ], e.children=a[
              e.id
            ]
            ||[
            ]
          })), n.forEach((function(e){
            e.sourceData=o[
              e.source
            ], e.targetData=o[
              e.target
            ]
          })), {
            nodes:t, edges:n
          }
        }, e.prototype.init=function(){
          var e=this.prepareData();
          this.process(e), this.afterProcess()
        }, e.prototype.prepareData=function(){
          return this.data.map((function e(t){
            var n={
              id:t.id.toString(), label:t.text, level:0, parentId:void 0, children:[
              ]
            };
            return t.children&&(n.children=t.children.map(e)), n
          }))
        }, e.prototype.afterProcess=function(e, t){
          void 0===e&&(e=this.nodes), void 0===t&&(t=this.edges), e.forEach((function(e){
            e.isRoot||e.children.forEach((function(n){
              n.isShow=!e.isCollapsed, t.forEach((function(e){
                var t, o;
                e.sourceData!==n&&e.targetData!==n||(e.isShow=(null===(t=e.sourceData)||void 0===t?void 0:t.isShow)&&(null===(o=e.targetData)||void 0===o?void 0:o.isShow))
              }))
            }))
          }))
        }, e.prototype.process=function(t){
          var n, o, a, i, r=this, l=e.flatten(t), s=l.nodes, c=l.edges, u=s.filter((function(e){
            return 0===e.level
          })), d=k.from({
            id:"-1", label:"", level:-1, parentId:void 0
          });
          d.isRoot=!0, d.children=u, d.isShow=!!(null===(n=this.cfg)||void 0===n?void 0:n.course), s.unshift(d), u.forEach((function(e){
            var t, n=x.from({
              source:d.id, target:e.id
            });
            n.isShow=!!(null===(t=r.cfg)||void 0===t?void 0:t.course), n.relationType="level", n.sourceData=d, n.targetData=e, c.push(n)
          })), !1===(null===(o=this.cfg)||void 0===o?void 0:o.levelRelation)&&c.forEach((function(e){
            e.isShow=!1
          }));
          var p=s.reduce((function(e, t){
            return e[
              t.id
            ]
            =t, e
          }), {
          });
          ((null===(a=this.otherEdges)||void 0===a?void 0:a.filter((function(e){
            return"directed"===e.type
          })))||[
          ]).forEach((function(e){
            var t, n=x.from({
              source:e.source.toString(), target:e.target.toString()
            });
            n.sourceData=p[
              e.source
            ], n.targetData=p[
              e.target
            ], n.isShow=!!(null===(t=r.cfg)||void 0===t?void 0:t.directedRelation), n.relationType="directed", c.push(n)
          })), ((null===(i=this.otherEdges)||void 0===i?void 0:i.filter((function(e){
            return"undirected"===e.type
          })))||[
          ]).forEach((function(e){
            var t, n=x.from({
              source:e.source.toString(), target:e.target.toString()
            });
            n.sourceData=p[
              e.source
            ], n.targetData=p[
              e.target
            ], n.endArrow=!1, n.isShow=!!(null===(t=r.cfg)||void 0===t?void 0:t.undirectedRelation), n.relationType="undirected", c.push(n)
          })), this.nodes=s, this.edges=c
        }, e.prototype.refresh=function(){
          var e=this.cfg||{
          }, t=e.showLevelNumber||0, n=this.nodes.find((function(e){
            return e.isRoot
          }))||{
          }, o=this.edges.filter((function(e){
            return e.sourceData===n
          })), a=this.edges.filter((function(e){
            return"level"===e.relationType&&!o.includes(e)
          })), i=this.edges.filter((function(e){
            return"directed"===e.relationType
          })), r=this.edges.filter((function(e){
            return"undirected"===e.relationType
          })), l=function(e){
            var t, n;
            (null===(t=e.sourceData)||void 0===t?void 0:t.isShow)&&(null===(n=e.targetData)||void 0===n?void 0:n.isShow)&&(e.isShow=!0)
          }, s=function(e){
            e.isShow=!1
          };
          this.showingLevel!==t&&(this.nodes.forEach((function(e){
            e.isShow=e.level<=t, e.parent&&(e.parent.isCollapsed=!e.isShow)
          })), this.edges.forEach((function(e){
            var t, n;
            e.isShow=(null===(t=e.sourceData)||void 0===t?void 0:t.isShow)&&(null===(n=e.targetData)||void 0===n?void 0:n.isShow)
          }))), e.course?(n.isShow=!0, o.forEach(l)):(n.isShow=!1, o.forEach(s)), e.levelRelation?(a.forEach(l), e.course?o.forEach(l):o.forEach(s)):(a.forEach(s), o.forEach(s)), e.directedRelation?i.forEach(l):i.forEach(s), e.undirectedRelation?r.forEach(l):r.forEach(s), this.showingLevel=t
        }, e.prototype.updateItem=function(e){
          var t=[
          ];
          if(e.isCollapsed){
            var n=[
            ];
            (0, b.dY)(e.children, (function(e){
              n.push(e.id)
            })), t.push.apply(t, this.nodes.filter((function(e){
              return n.includes(e.id)
            })))
          }
          else t.push.apply(t, e.children);
          t.forEach((function(t){
            t.isShow=!e.isCollapsed, e.isCollapsed&&(t.isCollapsed=e.isCollapsed)
          }));
          var o=t.map((function(e){
            return e.id
          }));
          this.edges.filter((function(e){
            return o.includes(e.source)||o.includes(e.target)
          })).forEach((function(e){
            var t, n;
            e.isShow=(null===(t=e.sourceData)||void 0===t?void 0:t.isShow)&&(null===(n=e.targetData)||void 0===n?void 0:n.isShow)
          }))
        }, e.prototype.updateNodeName=function(e, t){
          var n=this.nodes.find((function(t){
            return t.id===e.toString()
          }));
          n&&(n.label=t)
        }, e.prototype.getData=function(){
          return{
            nodes:this.nodes, edges:this.edges
          }
        }, e.prototype.getLayoutData=function(){
          var e=this.edges.filter((function(e){
            return"level"===e.relationType
          }));
          return{
            nodes:this.nodes, edges:e
          }
        }, e
      }
      ();
      const S=o.A
    }, 638147:(e, t, n)=>{
      n(219693), n(906048), Date.now||(Date.now=function(){
        return(new Date).getTime()
      });
      var o=function(e){
        var t, n, o, a, i=Date.now(), r=document.querySelectorAll("script[src]"), l=r[
          r.length-1
        ].src, s=null, c=!1;
        function u(){
          return this?u:u.toString()
        }
        function d(e, t){
          this.value=e, this.precision=t
        }
        function p(e){
          String(e);
          s&&Math.abs(e-s), s=e, Math.abs(s-a)>u.amortizationThreshold&&(a=s)
        }
        function f(){
          var e, t, n, o=1;
          function a(){
            var i, r=new XMLHttpRequest;
            i=l.indexOf("?")>-1?"&":"?", r.open("HEAD", l+i+"noCache="+Date.now()+parseInt(1e6*Math.random())), r.onreadystatechange=function(){
              this.readyState==this.HEADERS_RECEIVED&&200==this.status&&(t=Date.now())
            }, r.onload=function(){
              if(200==this.status)try{
                var i=this.getAllResponseHeaders();
                -1===i.indexOf("date:")&&-1===i.indexOf("Date:")||function(i){
                  var r=(t-e)/2, l=new d(i+r-t, r);
                  String(l), (1==o||r<=n.precision)&&(n=l);
                  o<10?(o++, a()):(p(n), c=!1)
                }
                (new Date(this.getResponseHeader("Date")).getTime())
              }
              catch(e){
              }
            }, e=Date.now(), r.send()
          }
          c||(c=!0, setTimeout((function(){
            c=!1
          }), 1e4), a())
        }
        return u.parse=Date.parse, u.UTC=Date.UTC, u.now=function(){
          return Date.now()+a
        }, [
          "toString", "toDateString", "toTimeString", "toLocaleString", "toLocaleDateString", "toLocaleTimeString", "valueOf", "getTime", "getFullYear", "getUTCFullYear", "getMonth", "getUTCMonth", "getDate", "getUTCDate", "getDay", "getUTCDay", "getHours", "getUTCHours", "getMinutes", "getUTCMinutes", "getSeconds", "getUTCSeconds", "getMilliseconds", "getUTCMilliseconds", "getTimezoneOffset", "toUTCString", "toISOString", "toJSON"
        ].forEach((function(e){
          u[
            e
          ]
          =function(){
            return new Date(u.now())[
              e
            ]
            ()
          }
        })), u.getPrecision=function(){
          if(void 0!==s.precision)return s.precision+Math.abs(s-a)
        }, u.amortizationRate=25, u.amortizationThreshold=2e3, Object.defineProperty(u, "synchronizationIntervalDelay", {
          get:function(){
            return t
          }, set:function(e){
            t=e, clearInterval(n), n=setInterval(f, u.synchronizationIntervalDelay)
          }
        }), u.synchronizationIntervalDelay=6e5, d.prototype.valueOf=function(){
          return this.value
        }, d.prototype.toString=function(){
          return this.value+(void 0!==this.precision?" +/- "+this.precision:"")+" ms"
        }, a=e-i, "undefined"!=typeof performance&&(o=(i-performance.timing.domLoading)/2, a+=o), p(new d(a, o)), setInterval((function(){
          var e=Math.max(-u.amortizationRate, Math.min(u.amortizationRate, s-a));
          a+=e, e&&s.value
        }), 1e3), window.addEventListener("pageshow", f), f(), u
      }
      (Date.now());
      e.exports=o
    }, 734392:(e, t, n)=>{
      e.exports=n.p+"assets/images/large/74db89b7f92df4c9f372.png"
    }, 786673:(e, t, n)=>{
      n.d(t, {
        GG:()=>f, WI:()=>m, WO:()=>y, Xu:()=>d, Yx:()=>b, _h:()=>v, eK:()=>_, eQ:()=>p, eT:()=>u, mS:()=>g, t9:()=>h, x2:()=>w
      });
      n(540590), n(418665), n(269193), n(14602);
      var o=n(272505), a=n.n(o), i=n(920453), r=n(218831), l=n(231950), s=function(e, t, n, o){
        return new(n||(n=Promise))((function(a, i){
          function r(e){
            try{
              s(o.next(e))
            }
            catch(e){
              i(e)
            }
          }
          function l(e){
            try{
              s(o.throw(e))
            }
            catch(e){
              i(e)
            }
          }
          function s(e){
            var t;
            e.done?a(e.value):(t=e.value, t instanceof n?t:new n((function(e){
              e(t)
            }))).then(r, l)
          }
          s((o=o.apply(e, t||[
          ])).next())
        }))
      }, c=function(e, t){
        var n, o, a, i, r={
          label:0, sent:function(){
            if(1&a[
              0
            ])throw a[
              1
            ];
            return a[
              1
            ]
          }, trys:[
          ], ops:[
          ]
        };
        return i={
          next:l(0), throw:l(1), return:l(2)
        }, "function"==typeof Symbol&&(i[
          Symbol.iterator
        ]
        =function(){
          return this
        }), i;
        function l(l){
          return function(s){
            return function(l){
              if(n)throw new TypeError("Generator is already executing.");
              for(;
              i&&(i=0, l[
                0
              ]
              &&(r=0)), r;
              )try{
                if(n=1, o&&(a=2&l[
                  0
                ]
                ?o.return:l[
                  0
                ]
                ?o.throw||((a=o.return)&&a.call(o), 0):o.next)&&!(a=a.call(o, l[
                  1
                ])).done)return a;
                switch(o=0, a&&(l=[
                  2&l[
                    0
                  ], a.value
                ]), l[
                  0
                ]){
                  case 0:case 1:a=l;
                  break;
                  case 4:return r.label++, {
                    value:l[
                      1
                    ], done:!1
                  };
                  case 5:r.label++, o=l[
                    1
                  ], l=[
                    0
                  ];
                  continue;
                  case 7:l=r.ops.pop(), r.trys.pop();
                  continue;
                  default:if(!(a=r.trys, (a=a.length>0&&a[
                    a.length-1
                  ])||6!==l[
                    0
                  ]
                  &&2!==l[
                    0
                  ])){
                    r=0;
                    continue
                  }
                  if(3===l[
                    0
                  ]
                  &&(!a||l[
                    1
                  ]
                  >a[
                    0
                  ]
                  &&l[
                    1
                  ]
                  <a[
                    3
                  ])){
                    r.label=l[
                      1
                    ];
                    break
                  }
                  if(6===l[
                    0
                  ]
                  &&r.label<a[
                    1
                  ]){
                    r.label=a[
                      1
                    ], a=l;
                    break
                  }
                  if(a&&r.label<a[
                    2
                  ]){
                    r.label=a[
                      2
                    ], r.ops.push(l);
                    break
                  }
                  a[
                    2
                  ]
                  &&r.ops.pop(), r.trys.pop();
                  continue
                }
                l=t.call(e, r)
              }
              catch(e){
                l=[
                  6, e
                ], o=0
              }
              finally{
                n=a=0
              }
              if(5&l[
                0
              ])throw l[
                1
              ];
              return{
                value:l[
                  0
                ]
                ?l[
                  1
                ]
                :void 0, done:!0
              }
            }
            ([
              l, s
            ])
          }
        }
      }, u=function(e, t){
        return void 0===t&&(t=!1), s(void 0, void 0, void 0, (function(){
          var n, o, r;
          return c(this, (function(s){
            switch(s.label){
              case 0:return n=t?"anonymous-api":"api", [
                4, a().get("/".concat(n, "/course/").concat(e, "/problem-graph"))
              ];
              case 1:return o=s.sent(), r=o.data.data, [
                2, (0, i.plainToClass)(l.mp, r)
              ]
            }
          }))
        }))
      }, d=function(e, t){
        return s(void 0, void 0, void 0, (function(){
          return c(this, (function(n){
            switch(n.label){
              case 0:return[
                4, a().put("/api/problem-level/".concat(e), t)
              ];
              case 1:return[
                2, n.sent().data
              ]
            }
          }))
        }))
      }, p=function(e, t){
        return s(void 0, void 0, void 0, (function(){
          return c(this, (function(n){
            switch(n.label){
              case 0:return[
                4, a().post("/api/course/".concat(e, "/problem-graph/relations"), (0, i.classToPlain)(t))
              ];
              case 1:return[
                2, n.sent().data
              ]
            }
          }))
        }))
      }, f=function(e, t){
        return s(void 0, void 0, void 0, (function(){
          return c(this, (function(n){
            switch(n.label){
              case 0:return[
                4, a().put("/api/problem-level/".concat(e, "/sort"), t)
              ];
              case 1:return[
                2, n.sent().data
              ]
            }
          }))
        }))
      }, v=function(e, t){
        return s(void 0, void 0, void 0, (function(){
          return c(this, (function(n){
            switch(n.label){
              case 0:return[
                4, a().delete("/api/course/".concat(e, "/problem-graph/relation/").concat(t))
              ];
              case 1:return n.sent(), [
                2
              ]
            }
          }))
        }))
      }, h=function(e, t){
        return s(void 0, void 0, void 0, (function(){
          var n;
          return c(this, (function(o){
            switch(o.label){
              case 0:return[
                4, a().post("/api/course/".concat(e, "/problem-graph/relations/batch"), {
                  data:(0, i.classToPlain)(t)
                })
              ];
              case 1:return n=o.sent(), [
                2, (0, i.plainToClass)(l.Ir, n.data.data)
              ]
            }
          }))
        }))
      }, m=function(e, t){
        return s(void 0, void 0, void 0, (function(){
          return c(this, (function(n){
            switch(n.label){
              case 0:return[
                4, a().delete("/api/course/".concat(e, "/problem-graph/relations/batch"), {
                  data:t
                })
              ];
              case 1:return n.sent(), [
                2
              ]
            }
          }))
        }))
      }, g=function(e, t){
        return s(void 0, void 0, void 0, (function(){
          return c(this, (function(n){
            switch(n.label){
              case 0:return[
                4, a().post("/api/course/".concat(e, "/problem-graph-status"), {
                  status:t
                })
              ];
              case 1:return n.sent(), [
                2
              ]
            }
          }))
        }))
      }, b=function(e, t){
        return s(void 0, void 0, void 0, (function(){
          var n;
          return c(this, (function(o){
            switch(o.label){
              case 0:return[
                4, a().post("/api/course/".concat(e, "/problem"), (0, r.decamelizeKeys)(t))
              ];
              case 1:return n=o.sent(), [
                2, (0, i.plainToClass)(l.AF, n.data)
              ]
            }
          }))
        }))
      }, y=function(e, t){
        return s(void 0, void 0, void 0, (function(){
          var n;
          return c(this, (function(o){
            switch(o.label){
              case 0:return[
                4, a().put("/api/course/".concat(e, "/problem/").concat(t.id), (0, r.decamelizeKeys)(t))
              ];
              case 1:return n=o.sent(), [
                2, (0, i.plainToClass)(l.AF, n.data)
              ]
            }
          }))
        }))
      }, w=function(e, t){
        return s(void 0, void 0, void 0, (function(){
          return c(this, (function(n){
            switch(n.label){
              case 0:return[
                4, a().delete("/api/course/".concat(e, "/problem/").concat(t))
              ];
              case 1:return n.sent(), [
                2
              ]
            }
          }))
        }))
      }, _=function(e, t){
        return s(void 0, void 0, void 0, (function(){
          return c(this, (function(n){
            switch(n.label){
              case 0:return[
                4, a().delete("/api/course/".concat(e, "/problems/batch"), {
                  data:t
                })
              ];
              case 1:return n.sent(), [
                2
              ]
            }
          }))
        }))
      }
    }, 833444:(e, t, n)=>{
      n.d(t, {
        q:()=>o
      });
      var o=function(e){
        return'<svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">\n    <path d="M70 35C70 54.33 54.33 70 35 70C15.67 70 0 54.33 0 35C0 15.67 15.67 0 35 0C54.33 0 70 15.67 70 35Z"\n        fill="white" />\n    <path d="M70 35C70 54.33 54.33 70 35 70C15.67 70 0 54.33 0 35C0 15.67 15.67 0 35 0C54.33 0 70 15.67 70 35Z"\n        fill="'.concat(e, '" fill-opacity="0.05" />\n    <path fill-rule="evenodd" clip-rule="evenodd"\n        d="M35 0.693069C16.0528 0.693069 0.693069 16.0528 0.693069 35C0.693069 53.9472 16.0528 69.3069 35 69.3069C53.9472 69.3069 69.3069 53.9472 69.3069 35C69.3069 16.0528 53.9472 0.693069 35 0.693069ZM0 35C0 15.67 15.67 0 35 0C54.33 0 70 15.67 70 35C70 54.33 54.33 70 35 70C15.67 70 0 54.33 0 35Z"\n        fill="').concat(e, '" />\n    <path fill-rule="evenodd" clip-rule="evenodd"\n        d="M34.9941 3.50199C35.1126 3.50067 35.2313 3.5 35.3502 3.5C35.469 3.5 35.5877 3.50067 35.7063 3.50199L35.6984 4.20195C35.5825 4.20065 35.4664 4.2 35.3502 4.2C35.234 4.2 35.1179 4.20065 35.0019 4.20195L34.9941 3.50199ZM37.1228 3.5496C37.3598 3.5629 37.596 3.57884 37.8316 3.59741L37.7766 4.29524C37.5463 4.27709 37.3153 4.2615 37.0836 4.2485L37.1228 3.5496ZM32.8688 3.59741C33.1043 3.57884 33.3406 3.5629 33.5776 3.5496L33.6168 4.2485C33.3851 4.2615 33.1541 4.27709 32.9238 4.29524L32.8688 3.59741ZM39.2424 3.74084C39.477 3.77009 39.7109 3.80196 39.944 3.83641L39.8416 4.52888C39.6138 4.49521 39.3852 4.46406 39.1558 4.43546L39.2424 3.74084ZM30.7564 3.83641C30.9895 3.80196 31.2233 3.7701 31.458 3.74084L31.5446 4.43546C31.3152 4.46406 31.0866 4.49521 30.8588 4.52889L30.7564 3.83641ZM41.3423 4.07586C41.5748 4.12117 41.8064 4.16907 42.0371 4.21952L41.8875 4.90335C41.6621 4.85404 41.4357 4.80723 41.2084 4.76294L41.3423 4.07586ZM28.6633 4.21952C28.894 4.16907 29.1255 4.12117 29.358 4.07587L29.4919 4.76294C29.2647 4.80723 29.0383 4.85404 28.8129 4.90335L28.6633 4.21952ZM43.4151 4.55422C43.6439 4.61539 43.8718 4.67911 44.0985 4.74533L43.9023 5.41726C43.6806 5.35254 43.458 5.29027 43.2343 5.23048L43.4151 4.55422ZM26.6019 4.74533C26.8286 4.67911 27.0564 4.6154 27.2853 4.55422L27.4661 5.23048C27.2424 5.29027 27.0197 5.35254 26.7981 5.41726L26.6019 4.74533ZM45.4505 5.17411C45.6742 5.25073 45.8967 5.32983 46.1181 5.41137L45.8761 6.06822C45.6598 5.98852 45.4423 5.91122 45.2237 5.83633L45.4505 5.17411ZM24.5823 5.41138C24.8037 5.32984 25.0262 5.25074 25.2499 5.17411L25.4767 5.83633C25.2581 5.91122 25.0406 5.98853 24.8243 6.06822L24.5823 5.41138ZM47.4374 5.93208C47.6557 6.02406 47.8727 6.11846 48.0884 6.21523L47.8019 6.8539C47.591 6.75931 47.3789 6.66705 47.1656 6.57715L47.4374 5.93208ZM22.612 6.21523C22.8277 6.11846 23.0447 6.02406 23.263 5.93208L23.5348 6.57715C23.3215 6.66705 23.1094 6.75931 22.8985 6.8539L22.612 6.21523ZM49.3688 6.82525C49.5799 6.93182 49.7897 7.04073 49.998 7.15194L49.6684 7.76947C49.4647 7.66077 49.2597 7.55432 49.0533 7.45014L49.3688 6.82525ZM20.7024 7.15194C20.9107 7.04074 21.1205 6.93183 21.3316 6.82525L21.6471 7.45014C21.4407 7.55432 21.2357 7.66077 21.032 7.76948L20.7024 7.15194ZM51.2337 7.84822C51.4371 7.96901 51.639 8.09204 51.8393 8.21729L51.4683 8.81085C51.2724 8.68842 51.0751 8.56815 50.8763 8.45008L51.2337 7.84822ZM18.8611 8.21729C19.0614 8.09204 19.2633 7.96901 19.4667 7.84823L19.8241 8.45009C19.6253 8.56815 19.428 8.68842 19.2321 8.81085L18.8611 8.21729ZM53.0245 8.99619C53.2192 9.13054 53.4122 9.26706 53.6036 9.40569L53.193 9.9726C53.0059 9.83707 52.8171 9.70362 52.6269 9.57228L53.0245 8.99619ZM17.0968 9.40569C17.2882 9.26706 17.4812 9.13055 17.6759 8.99619L18.0735 9.57228C17.8833 9.70362 17.6945 9.83707 17.5074 9.9726L17.0968 9.40569ZM54.733 10.2635C54.918 10.4107 55.1012 10.5599 55.2828 10.7112L54.8346 11.2489C54.6571 11.101 54.4779 10.9551 54.2971 10.8112L54.733 10.2635ZM15.4176 10.7112C15.5992 10.5599 15.7824 10.4107 15.9674 10.2635L16.4033 10.8112C16.2225 10.9551 16.0433 11.101 15.8658 11.2489L15.4176 10.7112ZM56.3513 11.6437C56.5259 11.8032 56.6986 11.9646 56.8695 12.1279L56.3859 12.6339C56.2188 12.4743 56.0499 12.3165 55.8792 12.1606L56.3513 11.6437ZM13.8309 12.1279C14.0018 11.9646 14.1745 11.8032 14.3491 11.6437L14.8212 12.1606C14.6505 12.3165 14.4816 12.4743 14.3145 12.6339L13.8309 12.1279ZM57.8723 13.1307C58.0356 13.3016 58.197 13.4743 58.3565 13.6489L57.8396 14.121C57.6837 13.9503 57.5259 13.7814 57.3663 13.6143L57.8723 13.1307ZM12.3439 13.6489C12.5034 13.4743 12.6648 13.3016 12.8281 13.1307L13.3341 13.6143C13.1745 13.7814 13.0167 13.9503 12.8608 14.121L12.3439 13.6489ZM59.289 14.7174C59.4403 14.899 59.5895 15.0822 59.7367 15.2672L59.189 15.7031C59.0451 15.5223 58.8992 15.3431 58.7513 15.1656L59.289 14.7174ZM10.9637 15.2672C11.1109 15.0822 11.2601 14.899 11.4114 14.7174L11.9491 15.1656C11.8012 15.3431 11.6553 15.5223 11.5114 15.7031L10.9637 15.2672ZM60.5945 16.3966C60.7331 16.588 60.8697 16.781 61.004 16.9757L60.4279 17.3733C60.2966 17.1831 60.1631 16.9943 60.0276 16.8072L60.5945 16.3966ZM9.69639 16.9757C9.83074 16.781 9.96725 16.588 10.1059 16.3966L10.6728 16.8072C10.5373 16.9943 10.4038 17.1831 10.2725 17.3733L9.69639 16.9757ZM61.7829 18.1609C61.9082 18.3612 62.0312 18.5631 62.152 18.7665L61.5501 19.1239C61.432 18.9251 61.3118 18.7278 61.1893 18.5319L61.7829 18.1609ZM8.54842 18.7665C8.6692 18.5631 8.79224 18.3612 8.91748 18.1609L9.51105 18.5319C9.38862 18.7278 9.26835 18.9251 9.15028 19.1239L8.54842 18.7665ZM62.8483 20.0022C62.9595 20.2105 63.0684 20.4203 63.175 20.6314L62.5501 20.9469C62.4459 20.7405 62.3394 20.5355 62.2307 20.3318L62.8483 20.0022ZM7.52544 20.6314C7.63202 20.4203 7.74093 20.2105 7.85214 20.0022L8.46967 20.3318C8.36097 20.5355 8.25451 20.7405 8.15034 20.9469L7.52544 20.6314ZM63.785 21.9118C63.8817 22.1275 63.9761 22.3445 64.0681 22.5628L63.423 22.8346C63.3332 22.6213 63.2409 22.4092 63.1463 22.1983L63.785 21.9118ZM6.63228 22.5628C6.72426 22.3445 6.81865 22.1275 6.91543 21.9118L7.55409 22.1983C7.4595 22.4092 7.36724 22.6213 7.27734 22.8346L6.63228 22.5628ZM64.5888 23.8821C64.6704 24.1035 64.7495 24.326 64.8261 24.5497L64.1639 24.7765C64.089 24.5579 64.0117 24.3404 63.932 24.1241L64.5888 23.8821ZM5.8743 24.5497C5.95093 24.326 6.03003 24.1035 6.11157 23.8821L6.76841 24.1241C6.68872 24.3404 6.61141 24.5579 6.53652 24.7765L5.8743 24.5497ZM65.2549 25.9017C65.3211 26.1284 65.3848 26.3562 65.446 26.5851L64.7697 26.7659C64.7099 26.5422 64.6477 26.3195 64.5829 26.0979L65.2549 25.9017ZM5.25442 26.5851C5.31559 26.3563 5.3793 26.1284 5.44552 25.9017L6.11745 26.0979C6.05273 26.3196 5.99046 26.5422 5.93067 26.7659L5.25442 26.5851ZM65.7807 27.9631C65.8311 28.1938 65.879 28.4253 65.9243 28.6579L65.2373 28.7917C65.193 28.5645 65.1462 28.3381 65.0969 28.1127L65.7807 27.9631ZM4.77606 28.6579C4.82137 28.4254 4.86926 28.1938 4.91971 27.9631L5.60354 28.1127C5.55423 28.3381 5.50742 28.5645 5.46314 28.7918L4.77606 28.6579ZM66.1638 30.0562C66.1982 30.2893 66.2301 30.5231 66.2594 30.7578L65.5647 30.8444C65.5361 30.615 65.505 30.3864 65.4713 30.1586L66.1638 30.0562ZM4.44103 30.7578C4.47029 30.5232 4.50216 30.2893 4.5366 30.0562L5.22908 30.1586C5.19541 30.3864 5.16426 30.615 5.13566 30.8444L4.44103 30.7578ZM66.4028 32.1686C66.4214 32.4042 66.4373 32.6404 66.4506 32.8774L65.7517 32.9166C65.7387 32.6849 65.7231 32.4539 65.705 32.2236L66.4028 32.1686ZM4.2498 32.8774C4.26309 32.6404 4.27904 32.4042 4.2976 32.1686L4.99544 32.2236C4.97729 32.4539 4.9617 32.6849 4.9487 32.9166L4.2498 32.8774ZM66.4982 34.2939C66.4995 34.4124 66.5002 34.5311 66.5002 34.65C66.5002 34.7689 66.4995 34.8875 66.4982 35.0061L65.7982 34.9982C65.7995 34.8823 65.8002 34.7662 65.8002 34.65C65.8002 34.5338 65.7995 34.4177 65.7982 34.3017L66.4982 34.2939ZM4.2002 34.65C4.2002 34.5312 4.20086 34.4125 4.20219 34.2939L4.90215 34.3018C4.90085 34.4177 4.9002 34.5338 4.9002 34.65C4.9002 34.7662 4.90085 34.8823 4.90215 34.9983L4.20219 35.0061C4.20086 34.8876 4.2002 34.7689 4.2002 34.65ZM66.4506 36.4226C66.4373 36.6596 66.4214 36.8958 66.4028 37.1314L65.705 37.0764C65.7231 36.8461 65.7387 36.6151 65.7517 36.3834L66.4506 36.4226ZM4.2976 37.1314C4.27904 36.8959 4.26309 36.6596 4.2498 36.4226L4.9487 36.3834C4.9617 36.6151 4.97729 36.8461 4.99544 37.0764L4.2976 37.1314ZM66.2594 38.5422C66.2301 38.7769 66.1982 39.0107 66.1638 39.2438L65.4713 39.1414C65.505 38.9136 65.5361 38.685 65.5647 38.4556L66.2594 38.5422ZM4.53661 39.2438C4.50216 39.0107 4.47029 38.7769 4.44103 38.5422L5.13566 38.4556C5.16426 38.685 5.19541 38.9136 5.22908 39.1414L4.53661 39.2438ZM65.9243 40.6421C65.879 40.8746 65.8311 41.1062 65.7807 41.3369L65.0969 41.1873C65.1462 40.9619 65.193 40.7355 65.2373 40.5083L65.9243 40.6421ZM4.91971 41.3369C4.86926 41.1062 4.82137 40.8747 4.77606 40.6422L5.46314 40.5083C5.50742 40.7355 5.55423 40.9619 5.60354 41.1873L4.91971 41.3369ZM65.446 42.7149C65.3848 42.9438 65.3211 43.1716 65.2549 43.3983L64.5829 43.2021C64.6477 42.9805 64.7099 42.7578 64.7697 42.5341L65.446 42.7149ZM5.44553 43.3983C5.37931 43.1716 5.31559 42.9438 5.25442 42.7149L5.93068 42.5341C5.99046 42.7578 6.05273 42.9805 6.11746 43.2021L5.44553 43.3983ZM64.8261 44.7503C64.7495 44.974 64.6704 45.1965 64.5888 45.4179L63.932 45.1759C64.0117 44.9596 64.089 44.7421 64.1639 44.5235L64.8261 44.7503ZM6.11157 45.4179C6.03003 45.1965 5.95093 44.974 5.87431 44.7503L6.53652 44.5235C6.61141 44.7421 6.68872 44.9596 6.76842 45.1759L6.11157 45.4179ZM64.0681 46.7372C63.9761 46.9555 63.8817 47.1725 63.785 47.3882L63.1463 47.1017C63.2409 46.8908 63.3332 46.6787 63.4231 46.4654L64.0681 46.7372ZM6.91543 47.3882C6.81865 47.1725 6.72426 46.9555 6.63228 46.7372L7.27734 46.4654C7.36724 46.6787 7.4595 46.8908 7.55409 47.1017L6.91543 47.3882ZM63.175 48.6686C63.0684 48.8797 62.9595 49.0895 62.8483 49.2978L62.2307 48.9682C62.3394 48.7645 62.4459 48.5595 62.5501 48.3531L63.175 48.6686ZM7.85214 49.2978C7.74093 49.0895 7.63202 48.8797 7.52544 48.6686L8.15034 48.3531C8.25451 48.5595 8.36097 48.7645 8.46967 48.9682L7.85214 49.2978ZM62.152 50.5335C62.0312 50.7369 61.9082 50.9388 61.7829 51.1391L61.1894 50.7681C61.3118 50.5722 61.432 50.3749 61.5501 50.1761L62.152 50.5335ZM8.91748 51.1391C8.79224 50.9388 8.6692 50.7369 8.54842 50.5335L9.15028 50.1761C9.26835 50.3749 9.38862 50.5722 9.51105 50.7681L8.91748 51.1391ZM61.004 52.3243C60.8697 52.519 60.7331 52.712 60.5945 52.9034L60.0276 52.4928C60.1631 52.3057 60.2966 52.1169 60.4279 51.9267L61.004 52.3243ZM10.1059 52.9034C9.96725 52.712 9.83074 52.519 9.69639 52.3243L10.2725 51.9267C10.4038 52.117 10.5373 52.3057 10.6728 52.4928L10.1059 52.9034ZM59.7367 54.0328C59.5895 54.2178 59.4403 54.401 59.289 54.5826L58.7513 54.1344C58.8992 53.9569 59.0451 53.7777 59.189 53.5969L59.7367 54.0328ZM11.4114 54.5826C11.2601 54.401 11.1109 54.2178 10.9637 54.0328L11.5114 53.5969C11.6553 53.7777 11.8012 53.9569 11.9491 54.1344L11.4114 54.5826ZM58.3565 55.6511C58.197 55.8257 58.0356 55.9984 57.8723 56.1693L57.3663 55.6857C57.5259 55.5186 57.6837 55.3497 57.8396 55.179L58.3565 55.6511ZM12.8281 56.1693C12.6648 55.9984 12.5034 55.8257 12.3439 55.6511L12.8608 55.179C13.0167 55.3497 13.1745 55.5186 13.3341 55.6857L12.8281 56.1693ZM14.3491 57.6563C14.1745 57.4968 14.0018 57.3354 13.8309 57.1721L14.3145 56.6661C14.4816 56.8257 14.6505 56.9835 14.8212 57.1394L14.3491 57.6563ZM56.8695 57.1721C56.6986 57.3354 56.5259 57.4968 56.3513 57.6563L55.8792 57.1394C56.0499 56.9835 56.2188 56.8257 56.3859 56.6661L56.8695 57.1721ZM15.9674 59.0365C15.7824 58.8893 15.5992 58.7401 15.4176 58.5888L15.8658 58.0511C16.0433 58.199 16.2225 58.3449 16.4033 58.4888L15.9674 59.0365ZM55.2828 58.5888C55.1012 58.7401 54.918 58.8893 54.733 59.0365L54.2971 58.4888C54.4779 58.3449 54.6571 58.199 54.8346 58.0511L55.2828 58.5888ZM17.6759 60.3038C17.4812 60.1695 17.2882 60.033 17.0968 59.8943L17.5074 59.3274C17.6945 59.4629 17.8833 59.5964 18.0735 59.7277L17.6759 60.3038ZM53.6036 59.8943C53.4122 60.0329 53.2192 60.1695 53.0245 60.3038L52.6269 59.7277C52.8171 59.5964 53.0059 59.4629 53.193 59.3274L53.6036 59.8943ZM51.8393 61.0827C51.639 61.208 51.4371 61.331 51.2337 61.4518L50.8763 60.8499C51.0751 60.7318 51.2724 60.6116 51.4683 60.4891L51.8393 61.0827ZM19.4667 61.4518C19.2633 61.331 19.0614 61.208 18.8611 61.0827L19.2321 60.4892C19.428 60.6116 19.6253 60.7318 19.8241 60.8499L19.4667 61.4518ZM21.3316 62.4748C21.1205 62.3682 20.9107 62.2593 20.7024 62.1481L21.032 61.5305C21.2357 61.6392 21.4407 61.7457 21.6471 61.8499L21.3316 62.4748ZM49.998 62.1481C49.7897 62.2593 49.5799 62.3682 49.3688 62.4748L49.0533 61.8499C49.2597 61.7457 49.4647 61.6392 49.6684 61.5305L49.998 62.1481ZM23.263 63.3679C23.0447 63.2759 22.8277 63.1815 22.612 63.0848L22.8985 62.4461C23.1094 62.5407 23.3215 62.633 23.5348 62.7229L23.263 63.3679ZM48.0884 63.0848C47.8727 63.1815 47.6557 63.2759 47.4374 63.3679L47.1656 62.7229C47.3789 62.633 47.591 62.5407 47.8019 62.4461L48.0884 63.0848ZM25.2499 64.1259C25.0262 64.0493 24.8037 63.9702 24.5823 63.8886L24.8243 63.2318C25.0406 63.3115 25.2581 63.3888 25.4767 63.4637L25.2499 64.1259ZM46.1181 63.8886C45.8967 63.9702 45.6742 64.0493 45.4505 64.1259L45.2237 63.4637C45.4423 63.3888 45.6598 63.3115 45.8761 63.2318L46.1181 63.8886ZM44.0985 64.5547C43.8718 64.6209 43.644 64.6846 43.4151 64.7458L43.2343 64.0695C43.458 64.0097 43.6807 63.9475 43.9023 63.8827L44.0985 64.5547ZM27.2853 64.7458C27.0564 64.6846 26.8286 64.6209 26.6019 64.5547L26.7981 63.8827C27.0197 63.9475 27.2424 64.0097 27.4661 64.0695L27.2853 64.7458ZM29.3581 65.2241C29.1256 65.1788 28.894 65.1309 28.6633 65.0805L28.8129 64.3967C29.0383 64.446 29.2647 64.4928 29.4919 64.5371L29.3581 65.2241ZM42.0371 65.0805C41.8064 65.1309 41.5749 65.1788 41.3424 65.2241L41.2085 64.5371C41.4357 64.4928 41.6621 64.446 41.8875 64.3967L42.0371 65.0805ZM39.944 65.4636C39.7109 65.498 39.4771 65.5299 39.2424 65.5592L39.1558 64.8645C39.3852 64.8359 39.6138 64.8048 39.8416 64.7711L39.944 65.4636ZM31.458 65.5592C31.2233 65.5299 30.9895 65.498 30.7564 65.4636L30.8588 64.7711C31.0866 64.8048 31.3152 64.8359 31.5446 64.8645L31.458 65.5592ZM37.8316 65.7026C37.596 65.7212 37.3598 65.7371 37.1228 65.7504L37.0836 65.0515C37.3153 65.0385 37.5463 65.0229 37.7766 65.0048L37.8316 65.7026ZM33.5776 65.7504C33.3406 65.7371 33.1044 65.7212 32.8688 65.7026L32.9238 65.0048C33.1541 65.0229 33.3851 65.0385 33.6168 65.0515L33.5776 65.7504ZM35.3502 65.8C35.2313 65.8 35.1127 65.7993 34.9941 65.798L35.002 65.0981C35.1179 65.0994 35.234 65.1 35.3502 65.1C35.4664 65.1 35.5825 65.0994 35.6985 65.0981L35.7063 65.798C35.5878 65.7993 35.4691 65.8 35.3502 65.8Z"\n        fill="').concat(e, '" />\n    <circle cx="17.7203" cy="9.16836" r="1.4" fill="').concat(e, '" />\n    <circle cx="56.5064" cy="12.0336" r="1.4" fill="').concat(e, '" />\n    <circle cx="5.33555" cy="41.6708" r="1.4" fill="').concat(e, '" />\n    <circle cx="33.9498" cy="65.4004" r="1.4" fill="').concat(e, '" />\n    <circle cx="65.9186" cy="38.8661" r="1.4" fill="').concat(e, '" />\n</svg>')
      }
    }, 839861:(e, t, n)=>{
      n.d(t, {
        Vg:()=>r, rd:()=>i
      });
      n(169218), n(302543), n(638147);
      var o=n(595738), a=function(){
        return(a=Object.assign||function(e){
          for(var t, n=1, o=arguments.length;
          n<o;
          n++)for(var a in t=arguments[
            n
          ])Object.prototype.hasOwnProperty.call(t, a)&&(e[
            a
          ]
          =t[
            a
          ]);
          return e
        }).apply(this, arguments)
      };
      var i=function(){
        var e, t=null===(e=(0, o.nI)())||void 0===e?void 0:e.proxy, n=(0, o.Kh)({
          route:null==t?void 0:t.$route
        });
        return(0, o.wB)((function(){
          return null==t?void 0:t.$route
        }), (function(e){
          n.route=e
        })), a(a({
        }, (0, o.QW)(n)), {
          router:null==t?void 0:t.$router
        })
      }, r=function(e, t){
        if(e){
          var n=new MutationObserver((function(e){
            t(e)
          }));
          return n.observe(e, {
            attributes:!0, childList:!0, characterData:!0, subtree:!0
          }), n
        }
        console.warn("MutationObserver:No document")
      }
    }, 879757:(e, t, n)=>{
      n.d(t, {
        A:()=>a
      });
      const o={
        props:{
          divider:{
            type:Boolean, default:!1
          }
        }
      };
      const a=(0, n(514486).A)(o, (function(){
        var e=this, t=e.$createElement;
        return(e._self._c||t)("div", {
          staticClass:"toolbar-wrapper", class:{
            "has-bottom-border":e.divider
          }
        }, [
          e._t("default")
        ], 2)
      }), [
      ], !1, null, "40968c46", null).exports
    }, 927917:(e, t, n)=>{
      n.d(t, {
        A:()=>l
      });
      n(418665), n(107918), n(14602);
      var o=n(595738), a=n(297786), i=n(552979);
      const r=(0, o.pM)({
        props:{
          value:{
            type:String, required:!0
          }, viewMap:{
            type:Map, default:function(){
              return(e=new Map).set("outline", i.default.t("knowledgeGraph.outlineView")), e.set("mindmap", i.default.t("knowledgeGraph.mindMap")), e.set("graph", i.default.t("knowledgeGraph.title")), e;
              var e
            }
          }
        }, setup:function(e, t){
          var n=t.emit, i=(0, o.KR)(!1), r=(0, a.hRP)(e, "value", n, {
            eventName:"input"
          });
          return{
            selected:r, visible:i, onClick:function(e){
              i.value=!1, r.value=e
            }
          }
        }
      });
      const l=(0, n(514486).A)(r, (function(){
        var e=this, t=e.$createElement, n=e._self._c||t;
        return n("div", {
          staticClass:"root"
        }, [
          n("Dropdown", {
            attrs:{
              trigger:"custom", visible:e.visible, placement:"bottom-start"
            }, on:{
              "on-clickoutside":function(t){
                e.visible=!1
              }
            }
          }, [
            n("div", {
              staticClass:"box"
            }, [
              n("div", {
                staticClass:"btn view-select-btn", on:{
                  click:function(t){
                    e.visible=!0
                  }
                }
              }, [
                n("i", {
                  staticClass:"font", class:"font-"+e.selected+"-view"
                }), e._v("\n        "+e._s(e.viewMap.get(e.selected))+"\n        "), n("Icon", {
                  attrs:{
                    type:"ios-arrow-down"
                  }
                })
              ], 1), e._v(" "), e.$slots.default?n("Divider", {
                staticClass:"divider", attrs:{
                  type:"vertical"
                }
              }):e._e(), e._v(" "), e._t("default")
            ], 2), e._v(" "), n("DropdownMenu", {
              attrs:{
                slot:"list"
              }, slot:"list"
            }, e._l(e.viewMap, (function(t){
              var o=t[
                0
              ], a=t[
                1
              ];
              return n("DropdownItem", {
                key:o, class:{
                  active:o===e.selected
                }, nativeOn:{
                  click:function(t){
                    return e.onClick(o)
                  }
                }
              }, [
                n("i", {
                  staticClass:"font", class:"font-"+o+"-view"
                }), e._v(" "), n("span", {
                  staticClass:"text"
                }, [
                  e._v(e._s(a))
                ])
              ])
            })), 1)
          ], 1)
        ], 1)
      }), [
      ], !1, null, "f3ba6816", null).exports
    }, 929119:(e, t, n)=>{
      n.d(t, {
        w:()=>a
      });
      n(979073), n(906048), n(640173);
      var o=n(962893).default, a=function(e, t){
        var n=e;
        return t&&(n=e.replace(new RegExp(t, "g"), "<mark>".concat(t, "</mark>"))), o.prototype.$sanitize(n, {
          allowedTags:[
            "mark"
          ]
        })
      }
    }, 945188:(e, t, n)=>{
      n.d(t, {
        $t:()=>o, Am:()=>s, HG:()=>i, av:()=>c, kg:()=>l, rI:()=>r, vD:()=>a
      });
      n(418665), n(700533), n(445708), n(658379), n(14602);
      var o, a, i, r=function(e){
        return"".concat("PROBLEM-").concat(e)
      }, l=function(e, t){
        var n=[
        ];
        return function e(o, a, i){
          if(i.filter((function(e){
            return e
          })).length===t){
            var r=[
            ];
            i.forEach((function(e, t){
              e&&r.push(o[
                t
              ])
            })), n.push(r)
          }
          else if(a!==o.length){
            var l=a+1;
            i[
              a
            ]
            =1, e(o, l, i), i[
              a
            ]
            =0, e(o, l, i)
          }
        }
        (e, 0, Array(e.length).fill(0)), n
      }, s=function(e, t){
        var n=new Set;
        return e.filter((function(e){
          return!n.has(e[
            t
          ])&&n.add(e[
            t
          ])
        }))
      }, c=function(e, t){
        return e.reduce((function(e, n){
          var o=n[
            t
          ];
          return e[
            o
          ]
          ||(e[
            o
          ]
          =[
          ]), e[
            o
          ].push(n), e
        }), {
        })
      };
      !function(e){
        e[
          e.FIRST=1
        ]
        ="FIRST", e[
          e.SECOND=2
        ]
        ="SECOND", e[
          e.THIRD=3
        ]
        ="THIRD"
      }
      (o||(o={
      })), function(e){
        e.from=function(t){
          switch(Number(t)){
            case 1:return e.FIRST;
            case 2:return e.SECOND;
            case 3:return e.THIRD;
            default:return console.warn("Unexpected level ".concat(t)), e.FIRST
          }
        }, e.gt=function(t, n){
          return e.from(t)>e.from(n)
        };
        var t=function(t, n){
          var o=n(t.valueOf());
          if(e[
            o
          ])return e.from(o)
        };
        e.next=function(e){
          return t(e, (function(e){
            return e+1
          }))
        }, e.prev=function(e){
          return t(e, (function(e){
            return e-1
          }))
        }
      }
      (o||(o={
      })), function(e){
        e[
          e.HOLLOW=0
        ]
        ="HOLLOW", e[
          e.SOLID=1
        ]
        ="SOLID"
      }
      (a||(a={
      })), function(e){
        e.A="A", e.B="B"
      }
      (i||(i={
      })), function(e){
        e.get=function(t, n){
          return[
            t, n
          ].some((function(e){
            return o.from(e)===o.FIRST
          }))?e.A:e.B
        }
      }
      (i||(i={
      }))
    }, 990311:(e, t, n)=>{
      n.d(t, {
        A:()=>$t
      });
      n(540590), n(418665), n(169218), n(269193), n(14602);
      var o=n(595738), a=n(297786), i=n(552979), r=n(497248), l=n(316075), s=n(879055), c=n(322810), u=n(929119), d=n(888634), p=function(e, t, n, o){
        return new(n||(n=Promise))((function(a, i){
          function r(e){
            try{
              s(o.next(e))
            }
            catch(e){
              i(e)
            }
          }
          function l(e){
            try{
              s(o.throw(e))
            }
            catch(e){
              i(e)
            }
          }
          function s(e){
            var t;
            e.done?a(e.value):(t=e.value, t instanceof n?t:new n((function(e){
              e(t)
            }))).then(r, l)
          }
          s((o=o.apply(e, t||[
          ])).next())
        }))
      }, f=function(e, t){
        var n, o, a, i, r={
          label:0, sent:function(){
            if(1&a[
              0
            ])throw a[
              1
            ];
            return a[
              1
            ]
          }, trys:[
          ], ops:[
          ]
        };
        return i={
          next:l(0), throw:l(1), return:l(2)
        }, "function"==typeof Symbol&&(i[
          Symbol.iterator
        ]
        =function(){
          return this
        }), i;
        function l(l){
          return function(s){
            return function(l){
              if(n)throw new TypeError("Generator is already executing.");
              for(;
              i&&(i=0, l[
                0
              ]
              &&(r=0)), r;
              )try{
                if(n=1, o&&(a=2&l[
                  0
                ]
                ?o.return:l[
                  0
                ]
                ?o.throw||((a=o.return)&&a.call(o), 0):o.next)&&!(a=a.call(o, l[
                  1
                ])).done)return a;
                switch(o=0, a&&(l=[
                  2&l[
                    0
                  ], a.value
                ]), l[
                  0
                ]){
                  case 0:case 1:a=l;
                  break;
                  case 4:return r.label++, {
                    value:l[
                      1
                    ], done:!1
                  };
                  case 5:r.label++, o=l[
                    1
                  ], l=[
                    0
                  ];
                  continue;
                  case 7:l=r.ops.pop(), r.trys.pop();
                  continue;
                  default:if(!(a=r.trys, (a=a.length>0&&a[
                    a.length-1
                  ])||6!==l[
                    0
                  ]
                  &&2!==l[
                    0
                  ])){
                    r=0;
                    continue
                  }
                  if(3===l[
                    0
                  ]
                  &&(!a||l[
                    1
                  ]
                  >a[
                    0
                  ]
                  &&l[
                    1
                  ]
                  <a[
                    3
                  ])){
                    r.label=l[
                      1
                    ];
                    break
                  }
                  if(6===l[
                    0
                  ]
                  &&r.label<a[
                    1
                  ]){
                    r.label=a[
                      1
                    ], a=l;
                    break
                  }
                  if(a&&r.label<a[
                    2
                  ]){
                    r.label=a[
                      2
                    ], r.ops.push(l);
                    break
                  }
                  a[
                    2
                  ]
                  &&r.ops.pop(), r.trys.pop();
                  continue
                }
                l=t.call(e, r)
              }
              catch(e){
                l=[
                  6, e
                ], o=0
              }
              finally{
                n=a=0
              }
              if(5&l[
                0
              ])throw l[
                1
              ];
              return{
                value:l[
                  0
                ]
                ?l[
                  1
                ]
                :void 0, done:!0
              }
            }
            ([
              l, s
            ])
          }
        }
      };
      const v=(0, o.pM)({
        name:"TeachingCalendarList", components:{
          TeachingCalendarViewModal:c.A, Pagination:d.A
        }, props:{
          keyword:{
            type:String, required:!0
          }
        }, setup:function(e){
          var t=this, n=[
            {
              title:i.default.t("courseName"), key:"courseName", width:150, slot:"courseName"
            }, {
              title:i.default.t("cloudClassroom.courseCode"), key:"courseCode", width:120, slot:"courseCode"
            }, {
              title:i.default.t("teachingCalendar.content"), slot:"content", width:200
            }, {
              title:i.default.t("teachingCalendar.instructor"), key:"instructor", width:150, slot:"instructor"
            }, {
              title:i.default.t("teachingCalendar.location"), key:"location", width:150, slot:"location"
            }, {
              title:i.default.t("teachingCalendar.teachingTime"), key:"teachingTime", width:200, slot:"teachingTime"
            }, {
              title:i.default.t("teachingCalendar.operation"), key:"operation", width:90, slot:"operation"
            }
          ], a=(0, o.KR)(new l.VY), c=function(n, o){
            return p(t, void 0, void 0, (function(){
              return f(this, (function(t){
                return[
                  2, (0, s.eA)(e.keyword, n, o)
                ]
              }))
            }))
          }, d=(0, r.WQ)(c);
          d.fetch();
          var v=(0, o.KR)(!1);
          return{
            columns:n, page:d, openDetail:function(e){
              a.value=e, v.value=!0
            }, currentCalendar:a, fetchData:c, showDetailModal:v, highlightKeyword:u.w
          }
        }
      });
      var h=n(514486);
      const m=(0, h.A)(v, (function(){
        var e=this, t=e.$createElement, n=e._self._c||t;
        return n("div", {
          staticClass:"teaching-calendar-wrapper"
        }, [
          n("div", {
            staticClass:"list-wrapper"
          }, [
            n("Table", {
              staticClass:"table", attrs:{
                columns:e.columns, data:e.page.data.items, height:"558"
              }, scopedSlots:e._u([
                {
                  key:"courseName", fn:function(t){
                    var o=t.row;
                    return[
                      n("Tooltip", {
                        directives:[
                          {
                            name:"ellipsis", rawName:"v-ellipsis"
                          }
                        ], attrs:{
                          transfer:"", content:o.course.name
                        }
                      }, [
                        e._v("\n          "+e._s(o.course.name||"--")+"\n        ")
                      ])
                    ]
                  }
                }, {
                  key:"courseCode", fn:function(t){
                    var o=t.row;
                    return[
                      n("Tooltip", {
                        directives:[
                          {
                            name:"ellipsis", rawName:"v-ellipsis"
                          }
                        ], attrs:{
                          transfer:"", content:o.course.courseCode
                        }
                      }, [
                        e._v("\n          "+e._s(o.course.courseCode||"--")+"\n        ")
                      ])
                    ]
                  }
                }, {
                  key:"content", fn:function(t){
                    var o=t.row;
                    return[
                      n("div", {
                        staticClass:"calendar-content"
                      }, [
                        n("Tooltip", {
                          directives:[
                            {
                              name:"ellipsis", rawName:"v-ellipsis"
                            }
                          ], attrs:{
                            transfer:"", content:o.content
                          }
                        }, [
                          n("div", {
                            attrs:{
                              slot:"content"
                            }, domProps:{
                              innerHTML:e._s(e.highlightKeyword(o.content, e.keyword)||"--")
                            }, slot:"content"
                          }), e._v(" "), n("span", {
                            domProps:{
                              innerHTML:e._s(e.highlightKeyword(o.content, e.keyword)||"--")
                            }
                          })
                        ])
                      ], 1)
                    ]
                  }
                }, {
                  key:"instructor", fn:function(t){
                    var o=t.row;
                    return[
                      n("Tooltip", {
                        directives:[
                          {
                            name:"ellipsis", rawName:"v-ellipsis"
                          }
                        ], attrs:{
                          transfer:"", content:o.instructor
                        }
                      }, [
                        e._v("\n          "+e._s(o.instructor||"--")+"\n        ")
                      ])
                    ]
                  }
                }, {
                  key:"location", fn:function(t){
                    var n=t.row;
                    return[
                      e._v("\n        "+e._s(n.location||"--")+"\n      ")
                    ]
                  }
                }, {
                  key:"teachingTime", fn:function(t){
                    var n=t.row;
                    return[
                      e._v("\n        "+e._s(n.teachingTime||"--")+"\n      ")
                    ]
                  }
                }, {
                  key:"operation", fn:function(t){
                    var o=t.row;
                    return[
                      n("div", {
                        staticClass:"operation-area"
                      }, [
                        n("Tooltip", {
                          staticClass:"op-item", attrs:{
                            transfer:"", content:e.$t("view"), placement:"top"
                          }
                        }, [
                          n("i", {
                            staticClass:"font font-resource-view", on:{
                              click:function(t){
                                return t.stopPropagation(), e.openDetail(o)
                              }
                            }
                          })
                        ])
                      ], 1)
                    ]
                  }
                }
              ])
            }), e._v(" "), e.page.data.total>10?n("div", {
              staticClass:"pagination"
            }, [
              n("Pagination", {
                attrs:{
                  total:e.page.data.total, "page-size":e.page.data.pageSize, current:e.page.data.page, "page-size-opts":[
                    10, 20, 30, 50
                  ], "show-elevator":"", "show-sizer":""
                }, on:{
                  "on-change":e.page.pageChanged, "on-page-size-change":e.page.pageSizeChanged
                }
              })
            ], 1):e._e()
          ], 1), e._v(" "), n("TeachingCalendarViewModal", {
            attrs:{
              keyword:e.keyword, model:e.currentCalendar
            }, model:{
              value:e.showDetailModal, callback:function(t){
                e.showDetailModal=t
              }, expression:"showDetailModal"
            }
          })
        ], 1)
      }), [
      ], !1, null, "61bad350", null).exports;
      var g=n(877401), b=n(574799), y=n(766800), w=(n(714913), n(658379), n(255634)), _=n(979278), C=n(379960);
      const k=(0, o.pM)({
        components:{
          NoData:C.A, Tooltip:w.A, SvgIcon:_.A
        }, props:{
          data:{
            type:Array, default:function(){
              return[
              ]
            }
          }, showViewBtn:{
            type:Boolean, default:!1
          }
        }, setup:function(e, t){
          var n=e.showViewBtn;
          return{
            renderTree:function(e, o){
              var a=o.data;
              return e("span", [
                e(_.A, {
                  props:{
                    name:"facet-tree"
                  }
                }), e("span", {
                  class:"tree-title"
                }, [
                  e(w.A, {
                    props:{
                      text:a.name
                    }
                  })
                ]), e("span", {
                  class:"count"
                }, "(".concat(a.fragmentCount, ")")), n&&e("a", {
                  class:"view", on:{
                    click:function(e){
                      a.selected&&e.stopPropagation(), t.emit("on-view-btn-click", a.id)
                    }
                  }
                }, i.default.t("view"))
              ])
            }, selectChangeHandle:function(e, n){
              t.emit("on-node-click", n.id)
            }
          }
        }
      });
      const x=(0, h.A)(k, (function(){
        var e=this, t=e.$createElement, n=e._self._c||t;
        return n("div", {
          staticClass:"facet-tree-wrapper"
        }, [
          e.data.length>0?n("div", [
            n("div", [
              e._t("default")
            ], 2), e._v(" "), n("Tree", {
              attrs:{
                data:e.data, render:e.renderTree
              }, on:{
                "on-select-change":e.selectChangeHandle
              }
            })
          ], 1):n("NoData", [
            e._v(e._s(e.$t("knowledgeGraph.noFacetAndFragment")))
          ])
        ], 1)
      }), [
      ], !1, null, "a1163c08", null).exports;
      var R=function(e, t, n, o){
        return new(n||(n=Promise))((function(a, i){
          function r(e){
            try{
              s(o.next(e))
            }
            catch(e){
              i(e)
            }
          }
          function l(e){
            try{
              s(o.throw(e))
            }
            catch(e){
              i(e)
            }
          }
          function s(e){
            var t;
            e.done?a(e.value):(t=e.value, t instanceof n?t:new n((function(e){
              e(t)
            }))).then(r, l)
          }
          s((o=o.apply(e, t||[
          ])).next())
        }))
      }, S=function(e, t){
        var n, o, a, i, r={
          label:0, sent:function(){
            if(1&a[
              0
            ])throw a[
              1
            ];
            return a[
              1
            ]
          }, trys:[
          ], ops:[
          ]
        };
        return i={
          next:l(0), throw:l(1), return:l(2)
        }, "function"==typeof Symbol&&(i[
          Symbol.iterator
        ]
        =function(){
          return this
        }), i;
        function l(l){
          return function(s){
            return function(l){
              if(n)throw new TypeError("Generator is already executing.");
              for(;
              i&&(i=0, l[
                0
              ]
              &&(r=0)), r;
              )try{
                if(n=1, o&&(a=2&l[
                  0
                ]
                ?o.return:l[
                  0
                ]
                ?o.throw||((a=o.return)&&a.call(o), 0):o.next)&&!(a=a.call(o, l[
                  1
                ])).done)return a;
                switch(o=0, a&&(l=[
                  2&l[
                    0
                  ], a.value
                ]), l[
                  0
                ]){
                  case 0:case 1:a=l;
                  break;
                  case 4:return r.label++, {
                    value:l[
                      1
                    ], done:!1
                  };
                  case 5:r.label++, o=l[
                    1
                  ], l=[
                    0
                  ];
                  continue;
                  case 7:l=r.ops.pop(), r.trys.pop();
                  continue;
                  default:if(!(a=r.trys, (a=a.length>0&&a[
                    a.length-1
                  ])||6!==l[
                    0
                  ]
                  &&2!==l[
                    0
                  ])){
                    r=0;
                    continue
                  }
                  if(3===l[
                    0
                  ]
                  &&(!a||l[
                    1
                  ]
                  >a[
                    0
                  ]
                  &&l[
                    1
                  ]
                  <a[
                    3
                  ])){
                    r.label=l[
                      1
                    ];
                    break
                  }
                  if(6===l[
                    0
                  ]
                  &&r.label<a[
                    1
                  ]){
                    r.label=a[
                      1
                    ], a=l;
                    break
                  }
                  if(a&&r.label<a[
                    2
                  ]){
                    r.label=a[
                      2
                    ], r.ops.push(l);
                    break
                  }
                  a[
                    2
                  ]
                  &&r.ops.pop(), r.trys.pop();
                  continue
                }
                l=t.call(e, r)
              }
              catch(e){
                l=[
                  6, e
                ], o=0
              }
              finally{
                n=a=0
              }
              if(5&l[
                0
              ])throw l[
                1
              ];
              return{
                value:l[
                  0
                ]
                ?l[
                  1
                ]
                :void 0, done:!0
              }
            }
            ([
              l, s
            ])
          }
        }
      }, E=n(962893), T=n(405852);
      const D=(0, o.pM)({
        props:{
          fragment:Object, isSelected:{
            type:Boolean, default:!1
          }
        }, setup:function(){
          return{
            sanitize:T.aj
          }
        }
      });
      const N=(0, h.A)(D, (function(){
        var e=this, t=e.$createElement, n=e._self._c||t;
        return n("div", {
          staticClass:"fragment-card-wrapper", class:{
            selected:e.isSelected
          }
        }, [
          n("div", {
            staticClass:"content leading-5.5 max-h-50 overflow-y-hidden"
          }, [
            n("div", {
              domProps:{
                innerHTML:e._s(e.sanitize(e.fragment.content))
              }
            }), e._v(" "), n("div", {
              staticClass:"mask"
            })
          ])
        ])
      }), [
      ], !1, null, "6ee80039", null).exports;
      const I=(0, o.pM)({
        props:{
          fragment:Object
        }, setup:function(){
          return{
            sanitize:T.aj
          }
        }
      });
      const A=(0, h.A)(I, (function(){
        var e=this, t=e.$createElement, n=e._self._c||t;
        return n("div", {
          staticClass:"fragment-detail-wrapper"
        }, [
          n("div", {
            staticClass:"source-wrapper"
          }, [
            "WEB"===e.fragment.source?n("div", {
              staticClass:"item"
            }, [
              n("section", {
                staticClass:"row"
              }, [
                n("label", {
                  staticClass:"text-right w-28"
                }, [
                  e._v(e._s(e.$t("knowledgeGraph.webSource")))
                ]), e._v(" "), n("div", {
                  staticClass:"truncate max-w-80"
                }, [
                  n("Tooltip", {
                    directives:[
                      {
                        name:"ellipsis", rawName:"v-ellipsis"
                      }
                    ], attrs:{
                      placement:"top", content:e.fragment.detail.name, transfer:""
                    }
                  }, [
                    n("span", [
                      e._v(e._s(e.fragment.detail.name))
                    ])
                  ])
                ], 1)
              ]), e._v(" "), n("section", {
                staticClass:"row my-1"
              }, [
                n("label", {
                  staticClass:"text-right w-28"
                }, [
                  e._v(e._s(e.$t("knowledgeGraph.link")))
                ]), e._v(" "), n("div", {
                  staticClass:"truncate max-w-80"
                }, [
                  n("a", {
                    attrs:{
                      href:e.fragment.detail.url, target:"_blank"
                    }
                  }, [
                    e._v("\n            "+e._s(e.fragment.detail.url)+"\n          ")
                  ])
                ])
              ])
            ]):"BOOK"===e.fragment.source?n("div", {
              staticClass:"item"
            }, [
              n("section", {
                staticClass:"row"
              }, [
                n("label", {
                  staticClass:"text-right w-28"
                }, [
                  e._v(e._s(e.$t("knowledgeGraph.bookSource")))
                ]), e._v(" "), n("div", {
                  staticClass:"book-wrapper"
                }, [
                  n("div", {
                    staticClass:"book truncate max-w-70"
                  }, [
                    n("Tooltip", {
                      directives:[
                        {
                          name:"ellipsis", rawName:"v-ellipsis"
                        }
                      ], attrs:{
                        placement:"top", content:e.fragment.detail.book, transfer:""
                      }
                    }, [
                      n("span", [
                        e._v("\n                "+e._s(e.fragment.detail.book)+"\n              ")
                      ])
                    ])
                  ], 1), e._v(" "), n("div", [
                    e._v("("+e._s(e.$t("knowledgeGraph.pageFormat", [
                      e.fragment.detail.page
                    ]))+")")
                  ])
                ])
              ]), e._v(" "), n("section", {
                staticClass:"row my-1"
              }, [
                n("label", {
                  staticClass:"text-right w-28"
                }, [
                  e._v(e._s(e.$t("knowledgeGraph.isbn")))
                ]), e._v(" "), n("div", {
                  staticClass:"truncate max-w-80"
                }, [
                  e._v("\n          "+e._s(e.fragment.detail.isbn)+"\n        ")
                ])
              ])
            ]):n("div", {
              staticClass:"item"
            }, [
              e.fragment.detail.description?n("section", {
                staticClass:"row"
              }, [
                n("label", {
                  staticClass:"text-right w-28"
                }, [
                  e._v(e._s(e.$t("knowledgeGraph.otherSource")))
                ]), e._v(" "), n("div", {
                  staticClass:"text truncate max-w-80"
                }, [
                  n("Tooltip", {
                    directives:[
                      {
                        name:"ellipsis", rawName:"v-ellipsis"
                      }
                    ], attrs:{
                      placement:"top", content:e.fragment.detail.description, transfer:""
                    }
                  }, [
                    n("span", [
                      e._v("\n              "+e._s(e.fragment.detail.description)+"\n            ")
                    ])
                  ])
                ], 1)
              ]):n("section", {
                staticClass:"row my-1"
              }, [
                n("label", {
                  staticClass:"text-right w-28"
                }, [
                  e._v(e._s(e.$t("knowledgeGraph.noSource")))
                ]), e._v(" "), n("div")
              ])
            ])
          ]), e._v(" "), n("div", {
            staticClass:"w-full overflow-y-auto content-wrapper"
          }, [
            n("div", {
              staticClass:"text-14px content", domProps:{
                innerHTML:e._s(e.sanitize(e.fragment.content))
              }
            })
          ])
        ])
      }), [
      ], !1, null, "66f4f4d3", null).exports, M=(0, o.pM)({
        components:{
          FacetTree:x, NoData:C.A, FragmentCard:N, FragmentDetail:A
        }, props:{
          value:{
            type:Boolean, default:!1
          }, facets:{
            type:Array, default:function(){
              return[
              ]
            }
          }, fragments:{
            type:Array, default:function(){
              return[
              ]
            }
          }, currentFacetId:Number
        }, setup:function(e, t){
          var n=(0, o.KR)(), a=(0, o.EW)((function(){
            var t=[
            ];
            return(0, T.dY)(e.facets, (function(e){
              t.push(e)
            })), t.find((function(t){
              return t.id===e.currentFacetId
            }))
          }));
          return(0, o.wB)((function(){
            return e.fragments
          }), (function(e){
            e&&(n.value=e[
              0
            ])
          })), {
            currentFragment:n, currentFacet:a, selectedFragment:function(t){
              n.value=e.fragments.find((function(e){
                return e.id===t
              }))
            }, toggleOpen:function(e){
              t.emit("input", e)
            }, nodeClickHandle:function(e){
              t.emit("on-change-facet", e)
            }
          }
        }
      });
      const $=(0, h.A)(M, (function(){
        var e=this, t=e.$createElement, n=e._self._c||t;
        return n("Modal", {
          staticClass:"facet-detail-modal", attrs:{
            value:e.value, "footer-hide":"", title:e.$t("knowledgeGraph.facetNFragment"), transfer:!1, width:"85%"
          }, on:{
            "on-visible-change":e.toggleOpen
          }
        }, [
          e.value?n("div", {
            staticClass:"modal-content"
          }, [
            n("div", {
              staticClass:"left"
            }, [
              n("div", {
                staticClass:"modal-content-header"
              }, [
                e._v(e._s(e.$t("knowledgeGraph.facet")))
              ]), e._v(" "), n("FacetTree", {
                staticClass:"pd-10-20", attrs:{
                  data:e.facets
                }, on:{
                  "on-node-click":e.nodeClickHandle
                }
              })
            ], 1), e._v(" "), e.fragments.length?n("div", {
              staticClass:"right"
            }, [
              n("div", {
                staticClass:"fragment-list"
              }, [
                n("div", {
                  staticClass:"modal-content-header"
                }, [
                  n("span", [
                    e._v(e._s(e.$t("knowledgeGraph.fragmentsOfFacet1")))
                  ]), e._v(" "), n("span", {
                    staticClass:"facet-name"
                  }, [
                    e._v(e._s(e.currentFacet&&e.currentFacet.name))
                  ]), e._v(" "), n("span", [
                    e._v(e._s(e.$t("knowledgeGraph.fragmentsOfFacet2")))
                  ])
                ]), e._v(" "), n("div", {
                  staticClass:"pd-10-20"
                }, e._l(e.fragments, (function(t){
                  return n("FragmentCard", {
                    key:t.id, staticClass:"mb-10", attrs:{
                      fragment:t, isSelected:e.currentFragment&&e.currentFragment.id===t.id
                    }, nativeOn:{
                      click:function(n){
                        return e.selectedFragment(t.id)
                      }
                    }
                  })
                })), 1)
              ]), e._v(" "), n("div", {
                staticClass:"fragment-detail pd-10-20"
              }, [
                n("FragmentDetail", {
                  attrs:{
                    fragment:Object.assign({
                    }, e.currentFragment)
                  }
                })
              ], 1)
            ]):n("div", {
              staticClass:"right"
            }, [
              n("NoData", [
                e._v(e._s(e.$t("knowledgeGraph.noFragment")))
              ])
            ], 1)
          ]):e._e()
        ])
      }), [
      ], !1, null, "7e9f2bfa", null).exports;
      var j=function(){
        return(j=Object.assign||function(e){
          for(var t, n=1, o=arguments.length;
          n<o;
          n++)for(var a in t=arguments[
            n
          ])Object.prototype.hasOwnProperty.call(t, a)&&(e[
            a
          ]
          =t[
            a
          ]);
          return e
        }).apply(this, arguments)
      };
      const L=Object.assign($, {
        init:function(e){
          var t=new E.default({
            data:function(){
              return{
                value:!1, facets:[
                ], fragments:[
                ], currentFacetId:void 0
              }
            }, methods:{
              input:function(e){
                this.value=e, this.$emit("input", e)
              }, onChangeFacet:function(e){
                this.$emit("on-change-facet", e)
              }
            }, render:function(e){
              return e($, {
                props:j({
                }, this.$data), on:{
                  input:this.input, "on-change-facet":this.onChangeFacet
                }
              })
            }
          });
          return t.$mount(), e.append(t.$el), t
        }
      });
      var O=function(e, t, n, o){
        return new(n||(n=Promise))((function(a, i){
          function r(e){
            try{
              s(o.next(e))
            }
            catch(e){
              i(e)
            }
          }
          function l(e){
            try{
              s(o.throw(e))
            }
            catch(e){
              i(e)
            }
          }
          function s(e){
            var t;
            e.done?a(e.value):(t=e.value, t instanceof n?t:new n((function(e){
              e(t)
            }))).then(r, l)
          }
          s((o=o.apply(e, t||[
          ])).next())
        }))
      }, G=function(e, t){
        var n, o, a, i, r={
          label:0, sent:function(){
            if(1&a[
              0
            ])throw a[
              1
            ];
            return a[
              1
            ]
          }, trys:[
          ], ops:[
          ]
        };
        return i={
          next:l(0), throw:l(1), return:l(2)
        }, "function"==typeof Symbol&&(i[
          Symbol.iterator
        ]
        =function(){
          return this
        }), i;
        function l(l){
          return function(s){
            return function(l){
              if(n)throw new TypeError("Generator is already executing.");
              for(;
              i&&(i=0, l[
                0
              ]
              &&(r=0)), r;
              )try{
                if(n=1, o&&(a=2&l[
                  0
                ]
                ?o.return:l[
                  0
                ]
                ?o.throw||((a=o.return)&&a.call(o), 0):o.next)&&!(a=a.call(o, l[
                  1
                ])).done)return a;
                switch(o=0, a&&(l=[
                  2&l[
                    0
                  ], a.value
                ]), l[
                  0
                ]){
                  case 0:case 1:a=l;
                  break;
                  case 4:return r.label++, {
                    value:l[
                      1
                    ], done:!1
                  };
                  case 5:r.label++, o=l[
                    1
                  ], l=[
                    0
                  ];
                  continue;
                  case 7:l=r.ops.pop(), r.trys.pop();
                  continue;
                  default:if(!(a=r.trys, (a=a.length>0&&a[
                    a.length-1
                  ])||6!==l[
                    0
                  ]
                  &&2!==l[
                    0
                  ])){
                    r=0;
                    continue
                  }
                  if(3===l[
                    0
                  ]
                  &&(!a||l[
                    1
                  ]
                  >a[
                    0
                  ]
                  &&l[
                    1
                  ]
                  <a[
                    3
                  ])){
                    r.label=l[
                      1
                    ];
                    break
                  }
                  if(6===l[
                    0
                  ]
                  &&r.label<a[
                    1
                  ]){
                    r.label=a[
                      1
                    ], a=l;
                    break
                  }
                  if(a&&r.label<a[
                    2
                  ]){
                    r.label=a[
                      2
                    ], r.ops.push(l);
                    break
                  }
                  a[
                    2
                  ]
                  &&r.ops.pop(), r.trys.pop();
                  continue
                }
                l=t.call(e, r)
              }
              catch(e){
                l=[
                  6, e
                ], o=0
              }
              finally{
                n=a=0
              }
              if(5&l[
                0
              ])throw l[
                1
              ];
              return{
                value:l[
                  0
                ]
                ?l[
                  1
                ]
                :void 0, done:!0
              }
            }
            ([
              l, s
            ])
          }
        }
      }, P=function(e, t, n){
        if(n||2===arguments.length)for(var o, a=0, i=t.length;
        a<i;
        a++)!o&&a in t||(o||(o=Array.prototype.slice.call(t, 0, a)), o[
          a
        ]
        =t[
          a
        ]);
        return e.concat(o||Array.prototype.slice.call(t))
      };
      const K=(0, o.pM)({
        components:{
          FacetTree:x
        }, props:{
          nodeId:{
            type:Number, required:!0
          }
        }, setup:function(e){
          var t, n=this, a=(0, o.KR)([
          ]), i=(0, o.KR)(!1), r=(0, o.KR)(0), l=(0, o.WQ)("facetDetailModalStatus", {
            opened:!1
          }), s=function(){
            var e=(0, o.KR)(0), t=(0, o.KR)(0);
            return{
              loadFacets:function(e, t){
                return R(void 0, void 0, void 0, (function(){
                  return S(this, (function(n){
                    switch(n.label){
                      case 0:return[
                        4, (0, g.T8)(e, t)
                      ];
                      case 1:return[
                        2, n.sent()
                      ]
                    }
                  }))
                }))
              }, loadFragments:function(e, t){
                return(0, g.WM)(e, t)
              }, totalFacetCount:e, totalFragmentCount:t, calculateFragmentCounts:function(n){
                e.value=0, t.value=0, n.forEach((function(n){
                  e.value+=n.facetCount, t.value+=n.fragmentCount
                }))
              }
            }
          }
          (), c=s.loadFacets, u=s.totalFacetCount, d=s.totalFragmentCount, p=s.calculateFragmentCounts, f=(0, o.EW)((function(){
            var e=function(e){
              var t=null;
              return a.value.forEach((function(n){
                n.id===e&&(t=n);
                var o=n.children.find((function(t){
                  return t.id===e
                }));
                o&&(t=o)
              })), t
            }
            (r.value);
            if(e){
              if(e.children.length){
                var t=e.fragments;
                return e.children.forEach((function(e){
                  t=P(P([
                  ], t, !0), e.fragments, !0)
                })), t
              }
              return e.fragments
            }
            return[
            ]
          })), v=(0, o.WQ)("relationContext", {
          }), h=function(e){
            r.value=e, t&&(t.value=!0, t.currentFacetId=r.value, t.facets=a.value, t.fragments=f.value)
          };
          return(0, o.wB)(i, (function(e){
            e||(l.opened=!1)
          })), (0, o.nT)((function(){
            return O(n, void 0, void 0, (function(){
              var t;
              return G(this, (function(n){
                switch(n.label){
                  case 0:return[
                    4, c(b.yW.value.id, e.nodeId)
                  ];
                  case 1:return t=n.sent(), a.value=t, p(t), [
                    2
                  ]
                }
              }))
            }))
          })), (0, o.sV)((function(){
            var e, n;
            (t=L.init(null!==(n=null===(e=null==v?void 0:v.fragmentModalInject)||void 0===e?void 0:e.value)&&void 0!==n?n:document.body)).$on("input", (function(e){
              i.value=e
            })), t.$on("on-change-facet", (function(e){
              h(e)
            }))
          })), {
            facets:a, totalFacetCount:u, totalFragmentCount:d, showModal:i, fragments:f, currentFacetId:r, showDetail:function(e){
              return O(n, void 0, void 0, (function(){
                return G(this, (function(t){
                  switch(t.label){
                    case 0:return i.value=!0, l.opened=!0, [
                      4, h(e)
                    ];
                    case 1:return t.sent(), [
                      2
                    ]
                  }
                }))
              }))
            }, reloadFragments:h
          }
        }
      });
      const B=(0, h.A)(K, (function(){
        var e=this, t=e.$createElement, n=e._self._c||t;
        return n("div", {
          staticClass:"facet-wrapper"
        }, [
          n("FacetTree", {
            attrs:{
              data:e.facets, showViewBtn:!0
            }, on:{
              "on-view-btn-click":e.showDetail
            }
          }, [
            n("span", {
              staticStyle:{
                color:"#70748c"
              }
            }, [
              e._v("\n      "+e._s(e.$t("knowledgeGraph.facetAndFragmentCount", [
                e.totalFacetCount, e.totalFragmentCount
              ]))+"\n    ")
            ])
          ])
        ], 1)
      }), [
      ], !1, null, null, null).exports;
      n(43148);
      var F=n(302543), W=n(818183), Z=n(118018), z=n(526320), q=n(561823), V=n(39134), H=n(86226), U=(n(107918), function(e, t, n, o){
        return new(n||(n=Promise))((function(a, i){
          function r(e){
            try{
              s(o.next(e))
            }
            catch(e){
              i(e)
            }
          }
          function l(e){
            try{
              s(o.throw(e))
            }
            catch(e){
              i(e)
            }
          }
          function s(e){
            var t;
            e.done?a(e.value):(t=e.value, t instanceof n?t:new n((function(e){
              e(t)
            }))).then(r, l)
          }
          s((o=o.apply(e, t||[
          ])).next())
        }))
      }), Q=function(e, t){
        var n, o, a, i, r={
          label:0, sent:function(){
            if(1&a[
              0
            ])throw a[
              1
            ];
            return a[
              1
            ]
          }, trys:[
          ], ops:[
          ]
        };
        return i={
          next:l(0), throw:l(1), return:l(2)
        }, "function"==typeof Symbol&&(i[
          Symbol.iterator
        ]
        =function(){
          return this
        }), i;
        function l(l){
          return function(s){
            return function(l){
              if(n)throw new TypeError("Generator is already executing.");
              for(;
              i&&(i=0, l[
                0
              ]
              &&(r=0)), r;
              )try{
                if(n=1, o&&(a=2&l[
                  0
                ]
                ?o.return:l[
                  0
                ]
                ?o.throw||((a=o.return)&&a.call(o), 0):o.next)&&!(a=a.call(o, l[
                  1
                ])).done)return a;
                switch(o=0, a&&(l=[
                  2&l[
                    0
                  ], a.value
                ]), l[
                  0
                ]){
                  case 0:case 1:a=l;
                  break;
                  case 4:return r.label++, {
                    value:l[
                      1
                    ], done:!1
                  };
                  case 5:r.label++, o=l[
                    1
                  ], l=[
                    0
                  ];
                  continue;
                  case 7:l=r.ops.pop(), r.trys.pop();
                  continue;
                  default:if(!(a=r.trys, (a=a.length>0&&a[
                    a.length-1
                  ])||6!==l[
                    0
                  ]
                  &&2!==l[
                    0
                  ])){
                    r=0;
                    continue
                  }
                  if(3===l[
                    0
                  ]
                  &&(!a||l[
                    1
                  ]
                  >a[
                    0
                  ]
                  &&l[
                    1
                  ]
                  <a[
                    3
                  ])){
                    r.label=l[
                      1
                    ];
                    break
                  }
                  if(6===l[
                    0
                  ]
                  &&r.label<a[
                    1
                  ]){
                    r.label=a[
                      1
                    ], a=l;
                    break
                  }
                  if(a&&r.label<a[
                    2
                  ]){
                    r.label=a[
                      2
                    ], r.ops.push(l);
                    break
                  }
                  a[
                    2
                  ]
                  &&r.ops.pop(), r.trys.pop();
                  continue
                }
                l=t.call(e, r)
              }
              catch(e){
                l=[
                  6, e
                ], o=0
              }
              finally{
                n=a=0
              }
              if(5&l[
                0
              ])throw l[
                1
              ];
              return{
                value:l[
                  0
                ]
                ?l[
                  1
                ]
                :void 0, done:!0
              }
            }
            ([
              l, s
            ])
          }
        }
      }, Y=function(){
        this.referType="teaching_objective", this.itemAdded=[
        ], this.itemDeleted=[
        ], this.itemChecked=[
        ], this.itemUnchecked=[
        ], this.itemUpdated=[
        ]
      }, X=function(e, t){
        var n=function(t){
          return t.map((function(t){
            return{
              referType:e.referType, referId:t.data.id
            }
          }))
        };
        return Promise.all([
          U(void 0, void 0, void 0, (function(){
            return Q(this, (function(o){
              return 0===e.itemChecked.length?[
                2, !1
              ]
              :[
                2, (0, g.A1)(t, n(e.itemChecked))
              ]
            }))
          })), U(void 0, void 0, void 0, (function(){
            return Q(this, (function(o){
              return 0===e.itemUnchecked.length?[
                2, !1
              ]
              :[
                2, (0, g.rQ)(t, n(e.itemUnchecked))
              ]
            }))
          })), function(){
            if(0===e.itemUpdated.length)return!1;
            var t=e.itemUpdated.map((function(e){
              return{
                content:e.data.content, id:e.data.id
              }
            }));
            return(0, g.j4)(b.yW.value.id, t)
          }
          (), function(){
            if(0===e.itemAdded.length)return!1;
            var n=e.itemAdded.map((function(e){
              return{
                content:e.data.content, referKnowledgeNodeId:e.selected?t:void 0
              }
            }));
            return(0, g.er)(b.yW.value.id, n)
          }
          (), function(){
            if(0===e.itemDeleted.length)return!1;
            var t=e.itemDeleted.map((function(e){
              return e.data.id
            }));
            return(0, g.bv)(b.yW.value.id, t)
          }
          ()
        ])
      }, J=n(180180), ee=function(){
        return(ee=Object.assign||function(e){
          for(var t, n=1, o=arguments.length;
          n<o;
          n++)for(var a in t=arguments[
            n
          ])Object.prototype.hasOwnProperty.call(t, a)&&(e[
            a
          ]
          =t[
            a
          ]);
          return e
        }).apply(this, arguments)
      }, te=function(e, t, n, o){
        return new(n||(n=Promise))((function(a, i){
          function r(e){
            try{
              s(o.next(e))
            }
            catch(e){
              i(e)
            }
          }
          function l(e){
            try{
              s(o.throw(e))
            }
            catch(e){
              i(e)
            }
          }
          function s(e){
            var t;
            e.done?a(e.value):(t=e.value, t instanceof n?t:new n((function(e){
              e(t)
            }))).then(r, l)
          }
          s((o=o.apply(e, t||[
          ])).next())
        }))
      }, ne=function(e, t){
        var n, o, a, i, r={
          label:0, sent:function(){
            if(1&a[
              0
            ])throw a[
              1
            ];
            return a[
              1
            ]
          }, trys:[
          ], ops:[
          ]
        };
        return i={
          next:l(0), throw:l(1), return:l(2)
        }, "function"==typeof Symbol&&(i[
          Symbol.iterator
        ]
        =function(){
          return this
        }), i;
        function l(l){
          return function(s){
            return function(l){
              if(n)throw new TypeError("Generator is already executing.");
              for(;
              i&&(i=0, l[
                0
              ]
              &&(r=0)), r;
              )try{
                if(n=1, o&&(a=2&l[
                  0
                ]
                ?o.return:l[
                  0
                ]
                ?o.throw||((a=o.return)&&a.call(o), 0):o.next)&&!(a=a.call(o, l[
                  1
                ])).done)return a;
                switch(o=0, a&&(l=[
                  2&l[
                    0
                  ], a.value
                ]), l[
                  0
                ]){
                  case 0:case 1:a=l;
                  break;
                  case 4:return r.label++, {
                    value:l[
                      1
                    ], done:!1
                  };
                  case 5:r.label++, o=l[
                    1
                  ], l=[
                    0
                  ];
                  continue;
                  case 7:l=r.ops.pop(), r.trys.pop();
                  continue;
                  default:if(!(a=r.trys, (a=a.length>0&&a[
                    a.length-1
                  ])||6!==l[
                    0
                  ]
                  &&2!==l[
                    0
                  ])){
                    r=0;
                    continue
                  }
                  if(3===l[
                    0
                  ]
                  &&(!a||l[
                    1
                  ]
                  >a[
                    0
                  ]
                  &&l[
                    1
                  ]
                  <a[
                    3
                  ])){
                    r.label=l[
                      1
                    ];
                    break
                  }
                  if(6===l[
                    0
                  ]
                  &&r.label<a[
                    1
                  ]){
                    r.label=a[
                      1
                    ], a=l;
                    break
                  }
                  if(a&&r.label<a[
                    2
                  ]){
                    r.label=a[
                      2
                    ], r.ops.push(l);
                    break
                  }
                  a[
                    2
                  ]
                  &&r.ops.pop(), r.trys.pop();
                  continue
                }
                l=t.call(e, r)
              }
              catch(e){
                l=[
                  6, e
                ], o=0
              }
              finally{
                n=a=0
              }
              if(5&l[
                0
              ])throw l[
                1
              ];
              return{
                value:l[
                  0
                ]
                ?l[
                  1
                ]
                :void 0, done:!0
              }
            }
            ([
              l, s
            ])
          }
        }
      }, oe=function(e, t, n){
        if(n||2===arguments.length)for(var o, a=0, i=t.length;
        a<i;
        a++)!o&&a in t||(o||(o=Array.prototype.slice.call(t, 0, a)), o[
          a
        ]
        =t[
          a
        ]);
        return e.concat(o||Array.prototype.slice.call(t))
      };
      const ae=(0, o.pM)({
        components:{
          SvgIcon:_.A, TeachingObjectiveSelect:H.A, CognitiveDimensionSelect:Z.A, RelationItem:J.A, EllipsisText:V.A
        }, props:{
          node:{
            type:Object, required:!0
          }, nodeDetail:{
            type:Object, required:!0
          }
        }, setup:function(e, t){
          var n, a=this, r=(0, o.KR)({
            name:""
          }), l=(0, o.WQ)(y.d9), s=(0, o.WQ)("showCompetencyObjectives", !1), c=(0, o.KR)(), u=(0, o.KR)(), d=(0, o.KR)(), p=(0, o.KR)(""), f=(0, o.KR)("none"), v=(0, o.KR)([
          ]);
          (0, o.nT)((function(){
            r.value.name=e.nodeDetail.name, p.value=e.nodeDetail.description||"", f.value=e.nodeDetail.cognitiveDimension
          }));
          var h={
            name:[
              {
                required:!b.tq.value, trigger:"blur", message:i.default.t("fieldRequired"), pattern:/\S+/
              }, {
                type:"string", max:255, trigger:"change"
              }
            ]
          }, m=(0, o.KR)(!1), w=(0, o.KR)([
          ]), _=(0, o.KR)([
          ]), C=(0, o.KR)([
          ]), k=(0, o.EW)((function(){
            return C.value.filter((function(e){
              return e.selected
            }))
          })), x=function(){
            return te(a, void 0, void 0, (function(){
              return ne(this, (function(t){
                switch(t.label){
                  case 0:return C.value=[
                  ], [
                    4, l.value.fetch()
                  ];
                  case 1:return t.sent(), [
                    2, (0, g.nV)(b.yW.value.id).then((function(t){
                      w.value=t, C.value=t.map((function(t){
                        var n=e.nodeDetail.teachingObjectives.map((function(e){
                          return e.id
                        }))||[
                        ];
                        return new y.yh(t, n.includes(t.id))
                      })), _.value=(0, F.cloneDeep)(C.value)
                    }))
                  ]
                }
              }))
            }))
          }, R=new Y, S=(0, o.KR)({
            name:!1, cognitiveDimension:!1, description:!1
          }), E=(0, o.KR)(), T=function(n){
            var o;
            "name"===n&&(null===(o=E.value)||void 0===o||o.validate((function(n){
              n&&te(a, void 0, void 0, (function(){
                var n;
                return ne(this, (function(o){
                  switch(o.label){
                    case 0:return[
                      4, (0, g.w1)(e.nodeDetail.id, {
                        name:r.value.name
                      })
                    ];
                    case 1:return n=o.sent(), e.node.data&&e.node.data.text?e.node.data.text=r.value.name:e.node&&(e.node.name=r.value.name), t.emit("update-node-name", {
                      id:e.nodeDetail.id, name:r.value.name
                    }), S.value.name=!1, z.A.$emit("search-toolbar-node-updated", n), [
                      2
                    ]
                  }
                }))
              }))
            }))), "description"===n&&te(a, void 0, void 0, (function(){
              return ne(this, (function(t){
                switch(t.label){
                  case 0:return[
                    4, (0, g.w1)(e.nodeDetail.id, {
                      description:p.value
                    })
                  ];
                  case 1:return t.sent(), S.value.description=!1, [
                    2
                  ]
                }
              }))
            })), "cognitiveDimension"===n&&te(a, void 0, void 0, (function(){
              var t, n;
              return ne(this, (function(o){
                switch(o.label){
                  case 0:return[
                    4, (0, g.w1)(e.nodeDetail.id, {
                      cognitiveDimension:f.value||"none"
                    })
                  ];
                  case 1:return t=o.sent(), ((null===(n=e.node)||void 0===n?void 0:n.data)||e.node).cognitiveDimension=f.value||"none", S.value.cognitiveDimension=!1, z.A.$emit("search-toolbar-node-updated", t), [
                    2
                  ]
                }
              }))
            }))
          }, D=(0, o.EW)((function(){
            return!b.Br&&!b.dn.value&&(b.yb&&l.value.edit)
          })), N=(null===(n=window.featureToggles)||void 0===n?void 0:n.isCognitiveDimensionOpen)||!1, I=(0, o.EW)((function(){
            return oe([
            ], (e.nodeDetail.prevRelation||[
            ]).map((function(e){
              return ee(ee({
              }, e), {
                relationType:"prev"
              })
            })), !0)
          })), A=(0, o.EW)((function(){
            return oe([
            ], (e.nodeDetail.postRelation||[
            ]).map((function(e){
              return ee(ee({
              }, e), {
                relationType:"post"
              })
            })), !0)
          })), M=(0, o.EW)((function(){
            return oe([
            ], (e.nodeDetail.undirectedRelation||[
            ]).map((function(e){
              return ee(ee({
              }, e), {
                relationType:"undirected"
              })
            })), !0)
          }));
          return(0, o.sV)((function(){
            return te(a, void 0, void 0, (function(){
              var t;
              return ne(this, (function(n){
                switch(n.label){
                  case 0:return s?(t=v, [
                    4, (0, q.d2)(b.yW.value.id, e.node.id)
                  ]):[
                    3, 2
                  ];
                  case 1:t.value=n.sent(), n.label=2;
                  case 2:return[
                    2
                  ]
                }
              }))
            }))
          })), {
            confirmAll:function(){
              return te(a, void 0, void 0, (function(){
                var t, n, o, a, i, r;
                return ne(this, (function(l){
                  switch(l.label){
                    case 0:for(t=0, n=_.value;
                    t<n.length;
                    t++){
                      if(""===(o=n[
                        t
                      ]).data.content&&o.isEditing&&o.selected)return[
                        2
                      ];
                      o.isEditing=!1
                    }
                    m.value=!1, _.value=_.value.filter((function(e){
                      return""!==e.data.content
                    })), R=function(e, t){
                      var n=new Y, o=new Map, a=new Map;
                      e.forEach((function(e){
                        return o.set(e.data.id, e)
                      })), t.forEach((function(e){
                        return a.set(e.data.id, e)
                      })), t.forEach((function(e){
                        o.get(e.data.id)||n.itemAdded.push(e)
                      })), e.forEach((function(e){
                        a.get(e.data.id)||n.itemDeleted.push(e)
                      }));
                      var i=[
                      ];
                      return t.forEach((function(e){
                        o.get(e.data.id)&&i.push([
                          o.get(e.data.id), e
                        ])
                      })), i.forEach((function(e){
                        var t=e[
                          0
                        ], o=e[
                          1
                        ];
                        t.selected!==o.selected&&(o.selected?n.itemChecked.push(o):n.itemUnchecked.push(o)), t.data.content!==o.data.content&&n.itemUpdated.push(o)
                      })), n
                    }
                    (C.value, _.value), C.value=(0, F.cloneDeep)(_.value), l.label=1;
                    case 1:return l.trys.push([
                      1, 4, , 5
                    ]), [
                      4, X(R, e.nodeDetail.id)
                    ];
                    case 2:return l.sent(), R=new Y, [
                      4, x()
                    ];
                    case 3:return l.sent(), [
                      3, 5
                    ];
                    case 4:return a=l.sent(), W.A.error((0, F.flatten)((0, F.values)(null===(r=null===(i=null==a?void 0:a.response)||void 0===i?void 0:i.data)||void 0===r?void 0:r.errors)).join(",")), [
                      3, 5
                    ];
                    case 5:return[
                      2
                    ]
                  }
                }))
              }))
            }, cancelAll:function(){
              _.value=(0, F.cloneDeep)(C.value)
            }, form:r, showModal:m, teachingObjectivesSelectItems:_, ruleValidate:h, editMode:S, formRef:E, handelSubmit:T, candelEdit:function(){
              x()
            }, teachingObjectiveEditItems:k, knowledgeNode:l, canEditNode:D, isInstructor:b.yb, editDisabled:b.tq, isCognitiveDimensionOpen:N, cognitiveDimensionChanged:function(e){
              f.value=e, T("cognitiveDimension")
            }, prevRelationList:I, postRelationList:A, undirectedRelationList:M, editModeToggle:function(e){
              if(D.value){
                if("name"===e){
                  if(b.tq.value)return;
                  S.value.name=!S.value.name, (0, o.dY)((function(){
                    var e;
                    null===(e=u.value)||void 0===e||e.focus({
                      cursor:"end"
                    })
                  }))
                }
                "cognitiveDimension"===e&&(S.value.cognitiveDimension=!S.value.cognitiveDimension, (0, o.dY)((function(){
                  console.log(d)
                }))), "description"===e&&(S.value.description=!S.value.description, (0, o.dY)((function(){
                  var e;
                  null===(e=c.value)||void 0===e||e.focus()
                })))
              }
            }, descInputRef:c, nameInputRef:u, description:p, cognitiveDimension:f, selectRef:d, competencyObjectives:v
          }
        }
      });
      const ie=(0, h.A)(ae, (function(){
        var e=this, t=e.$createElement, n=e._self._c||t;
        return n("div", {
          staticClass:"container"
        }, [
          e.nodeDetail?[
            n("div", {
              staticClass:"section name"
            }, [
              n("label", {
                attrs:{
                  for:""
                }
              }, [
                e._v(e._s(e.$t("knowledgeGraph.nodeName")))
              ]), e._v(" "), n("Form", {
                ref:"formRef", attrs:{
                  model:e.form, "label-position":"top", rules:e.ruleValidate
                }, nativeOn:{
                  submit:function(t){
                    return t.preventDefault(), e.handelSubmit("name")
                  }
                }
              }, [
                n("FormItem", {
                  attrs:{
                    prop:"name"
                  }
                }, [
                  e.editMode.name?e._e():n("Tooltip", {
                    attrs:{
                      content:e.$t("knowledgeGraph.clickHereToEdit"), placement:"top", transfer:"", "transfer-class-name":"knowledge-graph-outline-tooltip", disabled:!e.canEditNode||e.editDisabled
                    }
                  }, [
                    n("span", {
                      on:{
                        click:function(t){
                          return e.editModeToggle("name")
                        }
                      }
                    }, [
                      e._v(e._s(e.form.name))
                    ])
                  ]), e._v(" "), e.editMode.name&&!e.editDisabled?n("Input", {
                    ref:"nameInputRef", staticClass:"w-full", attrs:{
                      maxlength:"255"
                    }, on:{
                      "on-blur":function(t){
                        return e.handelSubmit("name")
                      }
                    }, model:{
                      value:e.form.name, callback:function(t){
                        e.$set(e.form, "name", t)
                      }, expression:"form.name"
                    }
                  }):e._e()
                ], 1)
              ], 1)
            ], 1), e._v(" "), e._l(e.nodeDetail.labels, (function(t){
              return n("div", {
                key:t.key, staticClass:"section"
              }, [
                n("label", {
                  attrs:{
                    for:""
                  }
                }, [
                  e._v(e._s(t.key))
                ]), e._v(" "), n("div", {
                  staticClass:"text"
                }, [
                  e._v("\n        "+e._s(t.value)+"\n      ")
                ])
              ])
            })), e._v(" "), e.isCognitiveDimensionOpen?n("div", {
              staticClass:"section"
            }, [
              n("label", {
                attrs:{
                  for:""
                }
              }, [
                e._v(e._s(e.$t("knowledgeGraph.cognitiveDimension.name")))
              ]), e._v(" "), "none"===e.cognitiveDimension||e.editMode.cognitiveDimension?e.editMode.cognitiveDimension?n("CognitiveDimensionSelect", {
                ref:"selectRef", attrs:{
                  value:e.cognitiveDimension, width:100, placeholder:e.$t("knowledgeGraph.cognitiveDimension.select"), "with-color":!0, "can-select-unspecified":!1
                }, on:{
                  input:e.cognitiveDimensionChanged
                }
              }):n("Tooltip", {
                attrs:{
                  content:e.$t("knowledgeGraph.clickHereToEdit"), placement:"top", transfer:"", "transfer-class-name":"knowledge-graph-outline-tooltip", disabled:!e.canEditNode
                }
              }, [
                n("div", {
                  staticClass:"no-data", on:{
                    click:function(t){
                      return e.editModeToggle("cognitiveDimension")
                    }
                  }
                }, [
                  e._v("\n          "+e._s(e.$t("knowledgeGraph.cognitiveDimension.noData"))+"\n        ")
                ])
              ]):n("Tooltip", {
                attrs:{
                  content:e.$t("knowledgeGraph.clickHereToEdit"), placement:"top", transfer:"", "transfer-class-name":"knowledge-graph-outline-tooltip", disabled:!e.canEditNode
                }
              }, [
                n("div", {
                  staticClass:"text dimension", class:e.cognitiveDimension, on:{
                    click:function(t){
                      return e.editModeToggle("cognitiveDimension")
                    }
                  }
                }, [
                  e._v("\n          "+e._s(e.$t("knowledgeGraph.cognitiveDimension."+e.cognitiveDimension))+"\n        ")
                ])
              ])
            ], 1):e._e(), e._v(" "), n("div", {
              staticClass:"section description"
            }, [
              n("label", {
                attrs:{
                  for:""
                }
              }, [
                e._v(e._s(e.$t("knowledgeGraph.desc")))
              ]), e._v(" "), e.description&&!e.editMode.description?n("Tooltip", {
                attrs:{
                  content:e.$t("knowledgeGraph.clickHereToEdit"), placement:"top", transfer:"", "transfer-class-name":"knowledge-graph-outline-tooltip", disabled:!e.canEditNode
                }
              }, [
                n("div", {
                  staticClass:"text", on:{
                    click:function(t){
                      return e.editModeToggle("description")
                    }
                  }
                }, [
                  e._v("\n          "+e._s(e.description)+"\n        ")
                ])
              ]):e.editMode.description?n("Input", {
                ref:"descInputRef", staticClass:"w-full", attrs:{
                  maxlength:"100", placeholder:e.$t("knowledgeGraph.descPlaceholder"), "show-word-limit":"", type:"textarea"
                }, on:{
                  "on-blur":function(t){
                    return e.handelSubmit("description")
                  }
                }, model:{
                  value:e.description, callback:function(t){
                    e.description=t
                  }, expression:"description"
                }
              }):n("Tooltip", {
                attrs:{
                  content:e.$t("knowledgeGraph.clickHereToEdit"), placement:"top", transfer:"", "transfer-class-name":"knowledge-graph-outline-tooltip", disabled:!e.canEditNode
                }
              }, [
                n("div", {
                  staticClass:"no-data", on:{
                    click:function(t){
                      return e.editModeToggle("description")
                    }
                  }
                }, [
                  e._v(e._s(e.$t("knowledgeGraph.noDesc")))
                ])
              ])
            ], 1), e._v(" "), e.competencyObjectives.length>0?n("div", {
              staticClass:"section"
            }, [
              n("label", {
                attrs:{
                  for:""
                }
              }, [
                e._v(e._s(e.$t("关联能力目标")))
              ]), e._v(" "), n("div", {
                staticClass:"competency-objective-area"
              }, e._l(e.competencyObjectives, (function(t, o){
                return n("divs", {
                  key:t.id, staticClass:"competency-objective-item"
                }, [
                  n("div", {
                    staticClass:"competency-objective-item-header"
                  }, [
                    n("SvgIcon", {
                      staticClass:"competency-course-goal", attrs:{
                        name:"competency-course-goal"
                      }
                    }), e._v(" "), n("span", {
                      staticClass:"index"
                    }, [
                      e._v("0"+e._s(o+1))
                    ])
                  ], 1), e._v(" "), n("div", {
                    staticClass:"competency-objective-item-text"
                  }, [
                    n("EllipsisText", {
                      attrs:{
                        text:t.name, "use-tipsy":!0, "suffix-count":0, "transfer-class-name":"knowledge-graph-outline-tooltip"
                      }
                    })
                  ], 1)
                ])
              })), 1)
            ]):e._e(), e._v(" "), n("div", {
              staticClass:"section"
            }, [
              n("label", {
                attrs:{
                  for:""
                }
              }, [
                e._v(e._s(e.$t("knowledgeGraph.nodeRelation")))
              ]), e._v(" "), n("div", {
                staticClass:"undirected-area"
              }, [
                n("div", {
                  staticClass:"title"
                }, [
                  e._v(e._s(e.$t("knowledgeGraph.related")))
                ]), e._v(" "), e.undirectedRelationList.length>0?n("div", {
                  staticClass:"relation-area"
                }, e._l(e.undirectedRelationList, (function(t){
                  return n("div", {
                    key:t.id
                  }, [
                    n("RelationItem", {
                      attrs:{
                        node:e.node, relation:t, "can-edit-relation":!1, "show-prefix":!1
                      }
                    })
                  ], 1)
                })), 0):n("div", {
                  staticClass:"no-data"
                }, [
                  e._v(e._s(e.$t("knowledgeGraph.notSet")))
                ])
              ]), e._v(" "), n("div", {
                staticClass:"prev-area"
              }, [
                n("div", {
                  staticClass:"title"
                }, [
                  e._v(e._s(e.$t("knowledgeGraph.prevRelation")))
                ]), e._v(" "), e.prevRelationList.length>0?n("div", {
                  staticClass:"relation-area"
                }, e._l(e.prevRelationList, (function(t){
                  return n("div", {
                    key:t.id
                  }, [
                    n("RelationItem", {
                      attrs:{
                        node:e.node, relation:t, "can-edit-relation":!1, "show-prefix":!1
                      }
                    })
                  ], 1)
                })), 0):n("div", {
                  staticClass:"no-data"
                }, [
                  e._v(e._s(e.$t("knowledgeGraph.notSet")))
                ])
              ]), e._v(" "), n("div", {
                staticClass:"post-area"
              }, [
                n("div", {
                  staticClass:"title"
                }, [
                  e._v(e._s(e.$t("knowledgeGraph.postRelation")))
                ]), e._v(" "), e.postRelationList.length>0?n("div", {
                  staticClass:"relation-area"
                }, e._l(e.postRelationList, (function(t){
                  return n("div", {
                    key:t.id
                  }, [
                    n("RelationItem", {
                      attrs:{
                        node:e.node, relation:t, "can-edit-relation":!1, "show-prefix":!1
                      }
                    })
                  ], 1)
                })), 0):n("div", {
                  staticClass:"no-data"
                }, [
                  e._v(e._s(e.$t("knowledgeGraph.notSet")))
                ])
              ])
            ]), e._v(" "), n("div", {
              staticClass:"section"
            }, [
              n("label", {
                attrs:{
                  for:""
                }
              }, [
                e._v(e._s(e.$t("knowledgeGraph.teachingObjective")))
              ]), e._v(" "), e.nodeDetail.teachingObjectives.length>0?n("ul", {
                staticClass:"objectives"
              }, e._l(e.nodeDetail.teachingObjectives, (function(t){
                return n("li", {
                  key:t.id
                }, [
                  e._v("\n          "+e._s(t.content)+"\n        ")
                ])
              })), 0):e._e(), e._v(" "), e.canEditNode?n("a", {
                on:{
                  click:function(t){
                    e.showModal=!0
                  }
                }
              }, [
                n("i", {
                  staticClass:"font font-edit edit-color"
                }), e._v("\n        "+e._s(e.$t("edit"))+"\n      ")
              ]):e._e(), e._v(" "), e.canEditNode||0!==e.nodeDetail.teachingObjectives.length?e._e():n("div", {
                staticClass:"no-data"
              }, [
                e._v("\n        "+e._s(e.$t("knowledgeGraph.noTeachingObjective"))+"\n      ")
              ])
            ]), e._v(" "), n("Modal", {
              attrs:{
                width:"600", title:e.$t("knowledgeGraph.editTeachingObjective")
              }, model:{
                value:e.showModal, callback:function(t){
                  e.showModal=t
                }, expression:"showModal"
              }
            }, [
              e.showModal?n("TeachingObjectiveSelect", {
                model:{
                  value:e.teachingObjectivesSelectItems, callback:function(t){
                    e.teachingObjectivesSelectItems=t
                  }, expression:"teachingObjectivesSelectItems"
                }
              }):e._e(), e._v(" "), n("div", {
                attrs:{
                  slot:"footer"
                }, slot:"footer"
              }, [
                n("Button", {
                  staticClass:"ok", attrs:{
                    type:"primary"
                  }, on:{
                    click:function(){
                      e.confirmAll()
                    }
                  }
                }, [
                  e._v("\n          "+e._s(e.$t("ok"))+"\n        ")
                ]), e._v(" "), n("Button", {
                  on:{
                    click:function(){
                      e.showModal=!1, e.cancelAll()
                    }
                  }
                }, [
                  e._v("\n          "+e._s(e.$t("cancel"))+"\n        ")
                ])
              ], 1)
            ], 1)
          ]
          :e._e()
        ], 2)
      }), [
      ], !1, null, "41b3ec55", null).exports;
      n(158649);
      var re=n(516844), le=n(218831), se=n(769075);
      const ce=(0, o.pM)({
        components:{
          SvgIcon:_.A
        }, props:{
          item:{
            type:Object, required:!0
          }
        }, setup:function(e, t){
          var n=t.emit, a=(0, o.EW)((function(){
            return!b.Br&&!b.dn.value&&b.yb
          })), i=(0, o.EW)((function(){
            return!b.Br&&(b.dn.value||!b.yb)
          }));
          return{
            destory:function(){
              n("delete", e.item)
            }, preview:function(){
              n("preview", e.item)
            }, knowledgeNode:(0, o.WQ)(y.d9), canEditReference:a, canViewCompleteness:i
          }
        }
      });
      const ue=(0, h.A)(ce, (function(){
        var e=this, t=e.$createElement, n=e._self._c||t;
        return n("div", {
          staticClass:"item"
        }, [
          n("div", {
            staticClass:"image"
          }, [
            n("SvgIcon", {
              staticClass:"font", attrs:{
                name:"capture"
              }
            })
          ], 1), e._v(" "), n("div", {
            staticClass:"body"
          }, [
            n("div", {
              staticClass:"name"
            }, [
              n("Tooltip", {
                attrs:{
                  content:e.item.name, placement:"top"
                }
              }, [
                e._v("\n        "+e._s(e.item.name)+"\n      ")
              ])
            ], 1), e._v(" "), e.item.deleted?n("div", {
              staticClass:"deleted"
            }, [
              e._v(e._s(e.$t("commentAndQuestion.captureDeleted")))
            ]):e._e()
          ]), e._v(" "), n("div", {
            staticClass:"action"
          }, [
            n("div", {
              staticClass:"button-area"
            }, [
              e.canEditReference&&e.knowledgeNode.edit?n("Tooltip", {
                attrs:{
                  transfer:"", content:e.$t("delete"), placement:"top"
                }
              }, [
                n("i", {
                  staticClass:"font font-delete", on:{
                    click:e.destory
                  }
                })
              ]):e._e(), e._v(" "), e.item.deleted?e._e():n("Tooltip", {
                attrs:{
                  transfer:"", content:e.$t("view"), placement:"top"
                }
              }, [
                n("i", {
                  staticClass:"font font-resource-view", on:{
                    click:e.preview
                  }
                })
              ])
            ], 1), e._v(" "), e.canViewCompleteness?n("div", {
              staticClass:"completeness-area", class:e.item.viewed?"bg-green":"bg-orange"
            }, [
              e.item.viewed?n("span", [
                e._v(e._s(e.$t("knowledgeGraph.finished")))
              ]):n("span", [
                e._v(e._s(e.$t("knowledgeGraph.notFinished")))
              ])
            ]):e._e()
          ])
        ])
      }), [
      ], !1, null, "5744982e", null).exports;
      var de=n(966491);
      const pe=(0, o.pM)({
        components:{
          SvgIcon:_.A
        }, props:{
          item:{
            type:Object, required:!0
          }
        }, setup:function(e, t){
          var n=t.emit, a=(0, o.EW)((function(){
            return!b.Br&&!b.dn.value&&b.yb
          })), i=(0, o.EW)((function(){
            return!b.Br&&(b.dn.value||!b.yb)
          })), r=(0, o.WQ)(y.d9);
          return{
            fileTypeByExtension:de.fileTypeByExtension, destory:function(){
              n("delete", e.item)
            }, preview:function(){
              n("preview", e.item)
            }, knowledgeNode:r, canEditReference:a, canViewCompleteness:i
          }
        }
      });
      const fe=(0, h.A)(pe, (function(){
        var e=this, t=e.$createElement, n=e._self._c||t;
        return n("div", {
          staticClass:"item"
        }, [
          n("div", {
            staticClass:"image"
          }, [
            n("i", {
              staticClass:"font upload-icon", class:"font-file-"+e.fileTypeByExtension(e.item)
            })
          ]), e._v(" "), n("div", {
            staticClass:"body"
          }, [
            n("div", {
              staticClass:"name"
            }, [
              n("Tooltip", {
                attrs:{
                  content:e.item.name, placement:"top"
                }
              }, [
                e._v("\n        "+e._s(e.item.name)+"\n      ")
              ])
            ], 1), e._v(" "), e.item.deleted?n("div", {
              staticClass:"deleted"
            }, [
              e._v(e._s(e.$t("commentAndQuestion.fileDeleted")))
            ]):e._e()
          ]), e._v(" "), n("div", {
            staticClass:"action"
          }, [
            n("div", {
              staticClass:"button-area"
            }, [
              e.canEditReference&&e.knowledgeNode.edit?n("Tooltip", {
                attrs:{
                  transfer:"", content:e.$t("delete"), placement:"top"
                }
              }, [
                n("i", {
                  staticClass:"font font-delete", on:{
                    click:e.destory
                  }
                })
              ]):e._e(), e._v(" "), e.item.deleted?e._e():n("Tooltip", {
                attrs:{
                  transfer:"", content:e.$t("view"), placement:"top"
                }
              }, [
                n("i", {
                  staticClass:"font font-resource-view", on:{
                    click:e.preview
                  }
                })
              ])
            ], 1), e._v(" "), e.canViewCompleteness?n("div", {
              staticClass:"completeness-area", class:e.item.viewed?"bg-green":"bg-orange"
            }, [
              e.item.viewed?n("span", [
                e._v(e._s(e.$t("knowledgeGraph.finished")))
              ]):n("span", [
                e._v(e._s(e.$t("knowledgeGraph.notFinished")))
              ])
            ]):e._e()
          ])
        ])
      }), [
      ], !1, null, "9d4da4d6", null).exports;
      var ve=n(795093);
      const he=(0, o.pM)({
        name:"activity-lock", props:{
          activity:{
            type:Object, required:!0
          }
        }, components:{
          TooltipExt:w.A
        }, setup:function(e, t){
        }
      });
      const me=(0, h.A)(he, (function(){
        var e=this, t=e.$createElement, n=e._self._c||t;
        return n("Poptip", {
          staticClass:"activity-lock", attrs:{
            placement:"right-start", trigger:"hover", width:"370", title:e.$t("h5_courseware.prerequisites")
          }, scopedSlots:e._u([
            {
              key:"content", fn:function(){
                return[
                  n("div", {
                    staticClass:"prerequisites-tips"
                  }, e._l(e.activity.prerequisites, (function(t, o){
                    return n("div", {
                      key:o, staticClass:"prerequisite", class:{
                        finished:t.completionCriterion.hasCompleted&&t.completionCriterion.isInProgress, unpublished:!t.completionCriterion.isInProgress
                      }
                    }, [
                      n("span", {
                        staticClass:"activity-type"
                      }, [
                        e._v(e._s(e.$t("activityType."+t.activityType)))
                      ]), e._v(" "), n("div", {
                        staticClass:"truncate-text activity-title"
                      }, [
                        n("TooltipExt", {
                          attrs:{
                            text:t.title
                          }
                        })
                      ], 1), e._v(" "), n("span", {
                        staticClass:"activity-read-info"
                      }, [
                        e._v("\n          (\n          "), n("span", [
                          e._v(e._s(t.completionCriterion.completionInfo))
                        ]), e._v("\n          )\n        ")
                      ]), e._v(" "), n("div", {
                        staticClass:"activity-completion-criterion"
                      }, [
                        e._v(e._s(t.completionCriterion.criterionText))
                      ]), e._v(" "), n("div", {
                        staticClass:"medium-divider"
                      })
                    ])
                  })), 0)
                ]
              }, proxy:!0
            }
          ])
        }, [
          n("i", {
            staticClass:"font font-thin-lock"
          })
        ])
      }), [
      ], !1, null, "35e9091e", null).exports;
      var ge=n(88595), be=n(731904), ye=n(248124), we=function(e, t, n, o){
        return new(n||(n=Promise))((function(a, i){
          function r(e){
            try{
              s(o.next(e))
            }
            catch(e){
              i(e)
            }
          }
          function l(e){
            try{
              s(o.throw(e))
            }
            catch(e){
              i(e)
            }
          }
          function s(e){
            var t;
            e.done?a(e.value):(t=e.value, t instanceof n?t:new n((function(e){
              e(t)
            }))).then(r, l)
          }
          s((o=o.apply(e, t||[
          ])).next())
        }))
      }, _e=function(e, t){
        var n, o, a, i, r={
          label:0, sent:function(){
            if(1&a[
              0
            ])throw a[
              1
            ];
            return a[
              1
            ]
          }, trys:[
          ], ops:[
          ]
        };
        return i={
          next:l(0), throw:l(1), return:l(2)
        }, "function"==typeof Symbol&&(i[
          Symbol.iterator
        ]
        =function(){
          return this
        }), i;
        function l(l){
          return function(s){
            return function(l){
              if(n)throw new TypeError("Generator is already executing.");
              for(;
              i&&(i=0, l[
                0
              ]
              &&(r=0)), r;
              )try{
                if(n=1, o&&(a=2&l[
                  0
                ]
                ?o.return:l[
                  0
                ]
                ?o.throw||((a=o.return)&&a.call(o), 0):o.next)&&!(a=a.call(o, l[
                  1
                ])).done)return a;
                switch(o=0, a&&(l=[
                  2&l[
                    0
                  ], a.value
                ]), l[
                  0
                ]){
                  case 0:case 1:a=l;
                  break;
                  case 4:return r.label++, {
                    value:l[
                      1
                    ], done:!1
                  };
                  case 5:r.label++, o=l[
                    1
                  ], l=[
                    0
                  ];
                  continue;
                  case 7:l=r.ops.pop(), r.trys.pop();
                  continue;
                  default:if(!(a=r.trys, (a=a.length>0&&a[
                    a.length-1
                  ])||6!==l[
                    0
                  ]
                  &&2!==l[
                    0
                  ])){
                    r=0;
                    continue
                  }
                  if(3===l[
                    0
                  ]
                  &&(!a||l[
                    1
                  ]
                  >a[
                    0
                  ]
                  &&l[
                    1
                  ]
                  <a[
                    3
                  ])){
                    r.label=l[
                      1
                    ];
                    break
                  }
                  if(6===l[
                    0
                  ]
                  &&r.label<a[
                    1
                  ]){
                    r.label=a[
                      1
                    ], a=l;
                    break
                  }
                  if(a&&r.label<a[
                    2
                  ]){
                    r.label=a[
                      2
                    ], r.ops.push(l);
                    break
                  }
                  a[
                    2
                  ]
                  &&r.ops.pop(), r.trys.pop();
                  continue
                }
                l=t.call(e, r)
              }
              catch(e){
                l=[
                  6, e
                ], o=0
              }
              finally{
                n=a=0
              }
              if(5&l[
                0
              ])throw l[
                1
              ];
              return{
                value:l[
                  0
                ]
                ?l[
                  1
                ]
                :void 0, done:!0
              }
            }
            ([
              l, s
            ])
          }
        }
      };
      const Ce=(0, o.pM)({
        props:{
          activity:{
            type:Object, required:!0
          }
        }, setup:function(e){
          var t=this, n=(0, o.WQ)(y.d9), a=(0, o.EW)((function(){
            var t, n;
            return(null===(n=null===(t=e.activity)||void 0===t?void 0:t.data)||void 0===n?void 0:n.mediaFragments)||[
            ]
          })), r=(0, o.KR)(!0), l=(0, o.EW)((function(){
            return a.value.length>2&&r.value?a.value.slice(0, 2):a.value
          })), s=(0, o.EW)((function(){
            return!b.Br&&!b.dn.value&&b.yb
          })), c=(0, o.EW)((function(){
            return!b.Br&&(b.dn.value||!b.yb)
          }));
          return{
            mediaFragments:a, filterMediaFragments:l, collapsed:r, toggleCollapse:function(){
              r.value=!r.value
            }, viewFragment:function(t){
              e.activity.isLocked?((0, re.useAngularScope)().lockedActivity=(0, le.decamelizeKeys)(e.activity), ye("#prerequisites-confirmation-popup").foundation("reveal", "open")):window.open("".concat((0, T.mv)(e.activity), "?startTime=").concat(Math.floor(t.startTs/1e3)), "_blank")
            }, deleteFragmentHandler:function(o){
              return we(t, void 0, void 0, (function(){
                return _e(this, (function(t){
                  switch(t.label){
                    case 0:return[
                      4, se.A.open({
                        title:i.default.t("delete"), type:"warning", divider:!1, width:416, content:i.default.t("knowledgePoint.deleteConfirm")
                      })
                    ];
                    case 1:return t.sent()?[
                      4, (0, g.aT)(e.activity.id, e.activity.data.knowledgeReferenceId, o.chapterId)
                    ]
                    :[
                      2
                    ];
                    case 2:return t.sent(), be.Toast.success(i.default.t("delete_success")), n.value.fetch(), [
                      2
                    ]
                  }
                }))
              }))
            }, millisecondToHms:function(e){
              return ge.A.millisecondToHms(e)
            }, canEditReference:s, canViewCompleteness:c
          }
        }
      });
      const ke=(0, h.A)(Ce, (function(){
        var e=this, t=e.$createElement, n=e._self._c||t;
        return n("div", {
          staticClass:"fragments"
        }, [
          e._l(e.filterMediaFragments, (function(t, o){
            return n("div", {
              key:o, staticClass:"fragmemnt-item"
            }, [
              n("div", {
                staticClass:"detail"
              }, [
                n("div", {
                  staticClass:"name"
                }, [
                  e._v(e._s(e.$t("knowledgePoint.mediaFragments")+"："+t.chapterName))
                ]), e._v(" "), n("div", {
                  staticClass:"time"
                }, [
                  n("span", [
                    e._v(e._s(e.millisecondToHms(t.duration)))
                  ]), e._v(" "), n("span", {
                    staticClass:"splitLine"
                  }), e._v(" "), n("span", [
                    e._v(e._s(e.millisecondToHms(t.startTs))+" - "+e._s(e.millisecondToHms(t.endTs)))
                  ])
                ])
              ]), e._v(" "), n("div", {
                staticClass:"item-action"
              }, [
                n("div", {
                  staticClass:"button-area"
                }, [
                  n("Tooltip", {
                    attrs:{
                      transfer:"", content:e.$t("delete"), placement:"top"
                    }
                  }, [
                    e.canEditReference?n("span", {
                      on:{
                        click:function(n){
                          return e.deleteFragmentHandler(t)
                        }
                      }
                    }, [
                      n("i", {
                        staticClass:"font font-delete"
                      })
                    ]):e._e()
                  ]), e._v(" "), n("Tooltip", {
                    attrs:{
                      transfer:"", content:e.$t("view"), placement:"top"
                    }
                  }, [
                    n("a", {
                      attrs:{
                        target:"_blank"
                      }, on:{
                        click:function(n){
                          return e.viewFragment(t)
                        }
                      }
                    }, [
                      n("i", {
                        staticClass:"font font-resource-view"
                      })
                    ])
                  ])
                ], 1), e._v(" "), e.canViewCompleteness?n("div", {
                  staticClass:"completeness-area", class:"full"===t.completeness?"bg-green":"bg-orange"
                }, [
                  "full"===t.completeness?n("span", [
                    e._v(e._s(e.$t("knowledgeGraph.finished")))
                  ]):n("span", [
                    e._v(e._s(e.$t("knowledgeGraph.notFinished")))
                  ])
                ]):e._e()
              ])
            ])
          })), e._v(" "), e.mediaFragments.length>2?n("div", {
            staticClass:"collapsed", on:{
              click:e.toggleCollapse
            }
          }, [
            e._v("\n    "+e._s(e.collapsed?e.$t("knowledgePoint.fragmentsExpand", [
              e.mediaFragments.length
            ]):e.$t("problemGraph.collapseAll"))+"\n    "), n("i", {
              staticClass:"font font-up-arrow", class:{
                "rotate-180":e.collapsed
              }
            })
          ]):e._e()
        ], 2)
      }), [
      ], !1, null, "e8542cea", null).exports, xe=(0, o.pM)({
        props:{
          item:{
            type:Object, required:!0
          }
        }, components:{
          activityLock:me, VideoFragments:ke
        }, setup:function(e){
          var t=e.item, n=(0, o.WQ)("isBlueprint", !1), a=(0, o.EW)((function(){
            return[
              "homework", "forum", "exam"
            ].includes(t.type)
          })), r=(0, o.EW)((function(){
            var e=new Date;
            if(t.startTime&&"string"==typeof t.startTime&&(t.startTime=ge.A.toLocalDate(t.startTime)), t.endTime&&"string"==typeof t.endTime&&(t.endTime=ge.A.toLocalDate(t.endTime)), !t.published)return[
              "unpublished", i.default.t("activityPublish.unpublished")
            ];
            if(t.published){
              if(t.startTime>e)return[
                "scheduleNotStart", '<i class="font font-time-clock icon-clock"></i>'.concat(i.default.t("activityPublish.startByDate", [
                  ve(t.startTime).format("MM-DD")
                ]))
              ];
              if(t.startTime<=e){
                if(t.endTime&&t.endTime>e)return[
                  "scheduleStartAndHasEndTime", '<i class="font font-time-clock icon-clock"></i>'.concat(i.default.t("activityPublish.scheduleStartAndHasEndTime", [
                    ve(t.endTime).format("MM-DD")
                  ]))
                ];
                if(!t.endTime)return!1
              }
              if(t.endTime<e)return[
                "activityPublishExpired", i.default.t("activityStatus.expired")
              ]
            }
            return!1
          })), l=(0, o.EW)((function(){
            return!b.Br&&(!!b.dn.value||!b.yb)
          })), s=(0, o.EW)((function(){
            return!n&&(!!b.Br||!b.dn.value&&b.yb)
          }));
          return{
            getActivityGreyIcon:function(e){
              var t=(0, de.replaceActivityTypeKey)(e.type);
              return"font-syllabus-".concat(t)
            }, publishStatus:r, isInstructor:b.yb, hasScore:a, canViewScore:l, canViewPublishStatus:s
          }
        }
      });
      const Re=(0, h.A)(xe, (function(){
        var e=this, t=e.$createElement, n=e._self._c||t;
        return n("div", {
          staticClass:"activity"
        }, [
          n("div", {
            staticClass:"item list-item"
          }, [
            n("div", {
              staticClass:"image"
            }, [
              n("i", {
                staticClass:"font", class:e.getActivityGreyIcon(e.item)
              })
            ]), e._v(" "), e.item.isLocked?n("activityLock", {
              staticClass:"activity-prerequisites", attrs:{
                activity:e.item
              }
            }):e._e(), e._v(" "), n("div", {
              staticClass:"body"
            }, [
              n("div", {
                staticClass:"content"
              }, [
                n("span", {
                  staticClass:"title"
                }, [
                  n("Tooltip", {
                    attrs:{
                      content:e.item.title, placement:"top", transfer:""
                    }
                  }, [
                    e._v("\n            "+e._s(e.item.title)+"\n          ")
                  ])
                ], 1), e._v(" "), e.canViewScore?n("div", {
                  staticClass:"info"
                }, [
                  n("section", [
                    e._v(e._s(e.$t("live.type"))+"："+e._s(e.$t("activityType."+e.item.type)))
                  ]), e._v(" "), e.hasScore?n("section", [
                    n("Divider", {
                      attrs:{
                        type:"vertical"
                      }
                    }), e._v(" "), n("span", [
                      e._v(e._s(e.$t("knowledgeGraph.finalScore"))+":")
                    ]), e._v(" "), e.item.scorePublished?e._e():n("span", [
                      e._v(e._s(e.$t("knowledgeGraph.scoreUnpublished")))
                    ]), e._v(" "), e.item.scorePublished&&null===e.item.score?n("span", [
                      e._v("--")
                    ]):e._e(), e._v(" "), e.item.scorePublished&&null!==e.item.score?n("span", [
                      e._v(e._s(e.item.score))
                    ]):e._e()
                  ], 1):e._e()
                ]):e._e()
              ]), e._v(" "), n("div", {
                staticClass:"other"
              }, [
                e.canViewPublishStatus&&e.publishStatus?n("span", {
                  staticClass:"publish-status", class:e.publishStatus[
                    0
                  ], domProps:{
                    innerHTML:e._s(e.publishStatus[
                      1
                    ])
                  }
                }):n("span"), e._v(" "), e._t("default")
              ], 2)
            ])
          ], 1), e._v(" "), n("VideoFragments", {
            attrs:{
              activity:e.item
            }
          })
        ], 1)
      }), [
      ], !1, null, "fae60ede", null).exports, Se=(0, o.pM)({
        props:{
          value:Array
        }, components:{
          ActivityItem:Re, NoData:C.A
        }, setup:function(e, t){
          var n=t.emit, i=(0, a.hRP)(e, "value", n, {
            passive:!0, deep:!0, eventName:"input"
          }), r=(0, a.vl3)((function(){
            return(0, g.ah)(b.yW.value.id)
          }), [
          ], {
            immediate:!0
          }).state, l=(0, o.KR)(""), s=(0, o.KR)(void 0);
          return{
            filterdItems:(0, o.EW)((function(){
              return r.value.filter((function(e){
                return e.title.includes(l.value)
              })).filter((function(e){
                return!s.value||e.type===s.value
              }))
            })), keyword:l, activityTypes:[
              "homework", "exam", "forum", "lesson", "material", "online_video", "interaction", "web_link", "page"
            ], activityType:s, selected:i, activityViewUrl:T.mv
          }
        }
      });
      const Ee=(0, h.A)(Se, (function(){
        var e=this, t=e.$createElement, n=e._self._c||t;
        return n("div", [
          n("div", {
            staticClass:"action"
          }, [
            n("div", [
              e._v(e._s(e.$t("knowledgeGraph.activityCount", [
                e.filterdItems.length
              ])))
            ]), e._v(" "), n("div", [
              n("Select", {
                staticStyle:{
                  width:"200px"
                }, attrs:{
                  clearable:"", placeholder:e.$t("allType")
                }, model:{
                  value:e.activityType, callback:function(t){
                    e.activityType=t
                  }, expression:"activityType"
                }
              }, e._l(e.activityTypes, (function(t){
                return n("Option", {
                  key:t, attrs:{
                    value:t
                  }
                }, [
                  e._v(e._s(e.$t("activityType."+t)))
                ])
              })), 1), e._v(" "), n("Input", {
                staticStyle:{
                  width:"auto"
                }, attrs:{
                  suffix:"ios-search", placeholder:e.$t("enter_keyword")
                }, model:{
                  value:e.keyword, callback:function(t){
                    e.keyword=t
                  }, expression:"keyword"
                }
              })
            ], 1)
          ]), e._v(" "), n("div", {
            staticClass:"list"
          }, [
            n("CheckboxGroup", {
              model:{
                value:e.selected, callback:function(t){
                  e.selected=t
                }, expression:"selected"
              }
            }, e._l(e.filterdItems, (function(t){
              return n("div", {
                key:t.type+t.id, staticClass:"select-item"
              }, [
                n("Checkbox", {
                  attrs:{
                    label:t.dbKey
                  }
                }, [
                  n("span")
                ]), e._v(" "), n("ActivityItem", {
                  staticClass:"item", attrs:{
                    item:t
                  }
                }, [
                  n("a", {
                    staticClass:"view", attrs:{
                      href:e.activityViewUrl(t), target:"_blank"
                    }
                  }, [
                    e._v(e._s(e.$t("view")))
                  ])
                ])
              ], 1)
            })), 0)
          ], 1), e._v(" "), 0===e.filterdItems.length?n("NoData", {
            staticClass:"no-data"
          }, [
            e._v("\n    "+e._s(e.$t("userStudio.noLive"))+"\n  ")
          ]):e._e()
        ], 1)
      }), [
      ], !1, null, "611e5c51", null).exports;
      n(979073), n(906048), n(640173);
      const Te=(0, o.pM)({
        components:{
          TooltipExt:w.A, SvgIcon:_.A
        }, props:{
          item:{
            type:Object, required:!0
          }, index:{
            type:Number, default:1
          }
        }, setup:function(e, t){
          var n=t.emit, a=(0, o.WQ)("course", {
            id:0, type:0
          }), r=(0, o.nI)(), l=(0, o.EW)((function(){
            return e.item.type.replace(new RegExp("_", "g"), "-")
          })), s=(0, o.EW)((function(){
            return e.item instanceof y.mX
          })), c=(0, o.EW)((function(){
            if(!s)return"";
            var t=e.item.source;
            return t.isMakeupExam?"".concat(t.name, "(").concat(i.default.t("examActivity.questionType.makeUp"), ")"):t.name
          })), u=(0, o.EW)((function(){
            return i.default.t("subjectType.".concat((0, le.camelize)(e.item.type)))
          })), d=(0, o.EW)((function(){
            return!b.Br&&!b.dn.value&&b.yb
          }));
          return{
            remove:function(){
              n("remove-subject", e.item)
            }, preview:function(){
              n("preview-subject", e.index)
            }, prettyShowSubject:function(e){
              if(!r)return"";
              var t=r.proxy.$sanitize;
              return(0, be.sanitizeDisplaySubjectText)(t, e, i.default)
            }, toSource:function(){
              s&&window.open(e.item.getSourceUrl(a.id), "_blank")
            }, subjectIcon:l, subjectType:u, knowledgeNode:(0, o.WQ)(y.d9), canEditReference:d, sourceText:c, isExamSubject:s
          }
        }
      });
      const De=(0, h.A)(Te, (function(){
        var e=this, t=e.$createElement, n=e._self._c||t;
        return n("div", {
          staticClass:"item"
        }, [
          n("div", {
            staticClass:"subject-type"
          }, [
            n("SvgIcon", {
              attrs:{
                name:e.subjectIcon
              }
            }), e._v(" "), n("span", [
              e._v(e._s(e.subjectType))
            ])
          ], 1), e._v(" "), n("div", {
            staticClass:"subject-content"
          }, [
            n("span", [
              e._v(e._s(e.prettyShowSubject(e.item.description)))
            ])
          ]), e._v(" "), e.isExamSubject?n("div", {
            staticClass:"subject-source"
          }, [
            n("div", {
              staticClass:"source-label"
            }, [
              e._v(e._s(e.$t("source"))+":")
            ]), e._v(" "), n("div", {
              staticClass:"source-value", on:{
                click:e.toSource
              }
            }, [
              n("TooltipExt", {
                attrs:{
                  text:e.sourceText
                }
              })
            ], 1), e._v(" "), n("div", {
              staticClass:"operation-wrapper"
            }, [
              e.canEditReference&&e.knowledgeNode.edit?n("Tooltip", {
                attrs:{
                  transfer:"", content:e.$t("delete"), placement:"top"
                }
              }, [
                n("i", {
                  staticClass:"font font-delete", on:{
                    click:e.remove
                  }
                })
              ]):e._e(), e._v(" "), n("Tooltip", {
                attrs:{
                  transfer:"", content:e.$t("view"), placement:"top"
                }
              }, [
                n("i", {
                  staticClass:"font font-resource-view", on:{
                    click:e.preview
                  }
                })
              ])
            ], 1)
          ]):e._e()
        ])
      }), [
      ], !1, null, "1f5c6695", null).exports;
      n(700533), n(184095), n(990345);
      var Ne=n(261732), Ie=n(95050), Ae=n(46258), Me=n(19505), $e=n(27761), je=function(e, t, n, o){
        return new(n||(n=Promise))((function(a, i){
          function r(e){
            try{
              s(o.next(e))
            }
            catch(e){
              i(e)
            }
          }
          function l(e){
            try{
              s(o.throw(e))
            }
            catch(e){
              i(e)
            }
          }
          function s(e){
            var t;
            e.done?a(e.value):(t=e.value, t instanceof n?t:new n((function(e){
              e(t)
            }))).then(r, l)
          }
          s((o=o.apply(e, t||[
          ])).next())
        }))
      }, Le=function(e, t){
        var n, o, a, i, r={
          label:0, sent:function(){
            if(1&a[
              0
            ])throw a[
              1
            ];
            return a[
              1
            ]
          }, trys:[
          ], ops:[
          ]
        };
        return i={
          next:l(0), throw:l(1), return:l(2)
        }, "function"==typeof Symbol&&(i[
          Symbol.iterator
        ]
        =function(){
          return this
        }), i;
        function l(l){
          return function(s){
            return function(l){
              if(n)throw new TypeError("Generator is already executing.");
              for(;
              i&&(i=0, l[
                0
              ]
              &&(r=0)), r;
              )try{
                if(n=1, o&&(a=2&l[
                  0
                ]
                ?o.return:l[
                  0
                ]
                ?o.throw||((a=o.return)&&a.call(o), 0):o.next)&&!(a=a.call(o, l[
                  1
                ])).done)return a;
                switch(o=0, a&&(l=[
                  2&l[
                    0
                  ], a.value
                ]), l[
                  0
                ]){
                  case 0:case 1:a=l;
                  break;
                  case 4:return r.label++, {
                    value:l[
                      1
                    ], done:!1
                  };
                  case 5:r.label++, o=l[
                    1
                  ], l=[
                    0
                  ];
                  continue;
                  case 7:l=r.ops.pop(), r.trys.pop();
                  continue;
                  default:if(!(a=r.trys, (a=a.length>0&&a[
                    a.length-1
                  ])||6!==l[
                    0
                  ]
                  &&2!==l[
                    0
                  ])){
                    r=0;
                    continue
                  }
                  if(3===l[
                    0
                  ]
                  &&(!a||l[
                    1
                  ]
                  >a[
                    0
                  ]
                  &&l[
                    1
                  ]
                  <a[
                    3
                  ])){
                    r.label=l[
                      1
                    ];
                    break
                  }
                  if(6===l[
                    0
                  ]
                  &&r.label<a[
                    1
                  ]){
                    r.label=a[
                      1
                    ], a=l;
                    break
                  }
                  if(a&&r.label<a[
                    2
                  ]){
                    r.label=a[
                      2
                    ], r.ops.push(l);
                    break
                  }
                  a[
                    2
                  ]
                  &&r.ops.pop(), r.trys.pop();
                  continue
                }
                l=t.call(e, r)
              }
              catch(e){
                l=[
                  6, e
                ], o=0
              }
              finally{
                n=a=0
              }
              if(5&l[
                0
              ])throw l[
                1
              ];
              return{
                value:l[
                  0
                ]
                ?l[
                  1
                ]
                :void 0, done:!0
              }
            }
            ([
              l, s
            ])
          }
        }
      }, Oe=function(e, t, n){
        if(n||2===arguments.length)for(var o, a=0, i=t.length;
        a<i;
        a++)!o&&a in t||(o||(o=Array.prototype.slice.call(t, 0, a)), o[
          a
        ]
        =t[
          a
        ]);
        return e.concat(o||Array.prototype.slice.call(t))
      };
      const Ge=(0, o.pM)({
        name:"ReferenceSubjectLib", components:{
          ReferenceSubject:De, CourseLibTree:Ne.A, NoData:C.A
        }, props:{
          type:{
            type:String, require:!0
          }, value:{
            type:Array, require:!0
          }
        }, setup:function(e, t){
          var n, a, r, l=this, s=null!==(r=null===(a=null===(n=window.globalData)||void 0===n?void 0:n.course)||void 0===a?void 0:a.id)&&void 0!==r?r:0, c=(0, o.KR)("exam"), u=(0, o.KR)("all"), d=(0, o.KR)(""), p=(0, o.KR)([
          ]), f=(0, o.KR)(), v=(0, o.KR)([
          ]), h=(0, o.KR)(!1), m=(0, o.KR)(!1), g=(0, o.KR)(), b=(0, o.KR)([
          ]), w=(0, o.Kh)({
            exam:{
            }, course:{
            }
          }), _=((0, o.WQ)(y.d9), (0, o.KR)([
          ])), C=(0, o.EW)((function(){
            var e, t, n, o, a=[
              {
                value:"all", text:i.default.t("subjectType.all")
              }, {
                value:"single_selection", text:i.default.t("subjectType.singleSelection")
              }, {
                value:"multiple_selection", text:i.default.t("subjectType.multipleSelection")
              }, {
                value:"true_or_false", text:i.default.t("subjectType.trueOrFalse")
              }
            ];
            return(null===(e=window.featureToggles)||void 0===e?void 0:e.fillInBlankSubject)&&a.push({
              value:"fill_in_blank", text:i.default.t("subjectType.fillInBlank")
            }), a.push({
              value:"short_answer", text:i.default.t("subjectType.shortAnswer")
            }), (null===(t=window.featureToggles)||void 0===t?void 0:t.analysisSubject)&&a.push({
              value:"analysis", text:i.default.t("subjectType.analysis")
            }), (null===(n=window.featureToggles)||void 0===n?void 0:n.matchingSubject)&&a.push({
              value:"matching", text:i.default.t("subjectType.matching")
            }), (null===(o=window.featureToggles)||void 0===o?void 0:o.clozeSubject)&&a.push({
              value:"cloze", text:i.default.t("subjectType.cloze")
            }), a.push({
              value:"media", text:i.default.t("subjectType.media")
            }), a
          })), k=(0, o.EW)((function(){
            return"exam"===e.type?i.default.t("knowledgeGraph.noExam"):i.default.t("knowledgeGraph.noQuestionBank")
          })), x=(0, o.EW)((function(){
            return"course"!==e.type||g.value?i.default.t("knowledgeGraph.noQuestion"):i.default.t("knowledgeGraph.noSelectedLib")
          })), R=(0, o.EW)((function(){
            var t, n;
            return"exam"===e.type?null===(t=f.value)||void 0===t?void 0:t.title:null===(n=g.value)||void 0===n?void 0:n.title
          })), S=function(n){
            "exam"===e.type&&f.value?w[
              e.type
            ]
            [
              f.value.id
            ]
            =Oe([
            ], n, !0):"course"===e.type&&g.value&&(w[
              e.type
            ]
            [
              g.value.id
            ]
            =Oe([
            ], n, !0)), t.emit("updateSelectedSubjectData", w)
          }, E=function(e){
            var t=f.value?e.filter((function(e){
              return _.value.includes(e)
            })):e;
            0===v.value.length?(h.value=!1, m.value=!1):t.length===v.value.length?(h.value=!1, m.value=!0):t.length>0?(h.value=!0, m.value=!1):(h.value=!1, m.value=!1)
          }, T=function(){
            var e=[
            ];
            f.value?e=w.exam[
              f.value.id
            ]
            ||[
            ]
            :g.value&&(e=w.course[
              g.value.id
            ]
            ||[
            ]), b.value=e, E(b.value)
          }, D=function(){
            c.value="exam", u.value="all", d.value="", T()
          }, N=function(e){
            return je(l, void 0, void 0, (function(){
              var t, n;
              return Le(this, (function(o){
                switch(o.label){
                  case 0:return e?(t="makeup"===c.value, n=v, [
                    4, (0, Me.TP)(e.id, t, d.value, u.value)
                  ]):(_.value=[
                  ], [
                    2
                  ]);
                  case 1:return n.value=o.sent(), _.value=v.value.map((function(e){
                    return e.id
                  })), [
                    2
                  ]
                }
              }))
            }))
          }, I=function(e){
            return je(l, void 0, void 0, (function(){
              var t;
              return Le(this, (function(n){
                switch(n.label){
                  case 0:return e?(t=v, [
                    4, (0, $e.tV)(e, d.value, u.value)
                  ]):[
                    2
                  ];
                  case 1:return t.value=n.sent(), [
                    2
                  ]
                }
              }))
            }))
          }, A=(0, o.EW)((function(){
            return p.value.length>0||Ie.Qw.value.length>0
          }));
          return(0, o.sV)((function(){
            return je(l, void 0, void 0, (function(){
              var t;
              return Le(this, (function(n){
                switch(n.label){
                  case 0:return D(), "exam"!==e.type?[
                    3, 4
                  ]
                  :(t=p, [
                    4, (0, Me.W1)(s)
                  ]);
                  case 1:return t.value=n.sent(), p.value.length>0?(f.value=p.value[
                    0
                  ], [
                    4, N(p.value[
                      0
                    ])
                  ]):[
                    3, 3
                  ];
                  case 2:n.sent(), n.label=3;
                  case 3:return[
                    3, 6
                  ];
                  case 4:return[
                    4, (0, Ie.$5)(s, 0, 0)
                  ];
                  case 5:n.sent(), n.label=6;
                  case 6:return[
                    2
                  ]
                }
              }))
            }))
          })), {
            examPaperType:c, selectSubjectType:u, keyword:d, exams:p, selectedExam:f, selectedLibNode:g, subjects:v, checkSubjectIds:b, selectedSubjectCache:w, indeterminate:h, checkAll:m, search:function(){
              return je(l, void 0, void 0, (function(){
                var t;
                return Le(this, (function(n){
                  switch(n.label){
                    case 0:return"exam"!==e.type?[
                      3, 2
                    ]
                    :[
                      4, N(f.value)
                    ];
                    case 1:return n.sent(), [
                      3, 4
                    ];
                    case 2:return[
                      4, I(null===(t=g.value)||void 0===t?void 0:t.id)
                    ];
                    case 3:n.sent(), n.label=4;
                    case 4:return T(), [
                      2
                    ]
                  }
                }))
              }))
            }, enabledSubjectTypes:C, noDataMessage:k, noQuestionMessage:x, selectExam:function(e){
              return je(l, void 0, void 0, (function(){
                return Le(this, (function(t){
                  switch(t.label){
                    case 0:return f.value=e, [
                      4, N(e)
                    ];
                    case 1:return t.sent(), T(), [
                      2
                    ]
                  }
                }))
              }))
            }, viewTitle:R, selectedSubjectChange:function(e){
              E(e), S(e)
            }, handleCheckAll:function(){
              h.value=!1;
              var e=v.value.map((function(e){
                return e.id
              }));
              m.value?b.value=f.value?Oe(Oe([
              ], b.value, !0), e, !0):e:b.value=f.value?b.value.filter((function(t){
                return!e.includes(t)
              })):[
              ], S(b.value)
            }, redirect:function(){
              var t, n, o="";
              o="exam"===e.type?"/course/".concat(s, "/learning-activity/full-screen#/exam/").concat(null===(t=f.value)||void 0===t?void 0:t.id):"/subject-lib/".concat(null===(n=g.value)||void 0===n?void 0:n.id, "/preview"), window.open(o, "_blank")
            }, treeNodes:Ie.Qw, toggleFolderExpand:function(e){
              return je(l, void 0, void 0, (function(){
                var t;
                return Le(this, (function(n){
                  switch(n.label){
                    case 0:return e.expand?[
                      3, 2
                    ]
                    :[
                      4, (0, Ae.qz)(s, e.id)
                    ];
                    case 1:return t=n.sent(), e.children=be._.map(t, Ie.Jv), [
                      3, 3
                    ];
                    case 2:e.children=[
                    ], n.label=3;
                    case 3:return e.expand=!e.expand, [
                      2
                    ]
                  }
                }))
              }))
            }, updateSelectedLib:function(e){
              return je(l, void 0, void 0, (function(){
                return Le(this, (function(t){
                  switch(t.label){
                    case 0:return g.value=e, [
                      4, I(e.id)
                    ];
                    case 1:return t.sent(), D(), [
                      2
                    ]
                  }
                }))
              }))
            }, hasData:A
          }
        }
      });
      const Pe=(0, h.A)(Ge, (function(){
        var e=this, t=e.$createElement, n=e._self._c||t;
        return n("div", {
          staticClass:"reference-subject-lib-content"
        }, [
          e.hasData?n("div", {
            staticClass:"content"
          }, [
            n("div", {
              staticClass:"left"
            }, [
              "exam"===e.type?n("div", {
                staticClass:"exam-items-wrapper"
              }, e._l(e.exams, (function(t){
                return n("div", {
                  key:t.id, class:{
                    "exam-item":!0, selected:e.selectedExam&&e.selectedExam.id===t.id
                  }, on:{
                    click:function(n){
                      return e.selectExam(t)
                    }
                  }
                }, [
                  n("i", {
                    staticClass:"font font-syllabus-exam"
                  }), e._v(" "), n("div", {
                    staticClass:"title"
                  }, [
                    n("Tooltip", {
                      directives:[
                        {
                          name:"ellipsis", rawName:"v-ellipsis"
                        }
                      ], attrs:{
                        content:t.title, transfer:"", placement:"top"
                      }
                    }, [
                      n("span", [
                        e._v(e._s(t.title))
                      ])
                    ])
                  ], 1)
                ])
              })), 0):n("div", {
                staticClass:"course-subject-lib-tree"
              }, [
                n("course-lib-tree", {
                  attrs:{
                    "tree-nodes":e.treeNodes
                  }, on:{
                    toggleFolderExpand:e.toggleFolderExpand, updateSelectedLib:e.updateSelectedLib
                  }
                })
              ], 1)
            ]), e._v(" "), n("div", {
              staticClass:"right"
            }, [
              e.selectedExam||e.selectedLibNode?n("div", {
                staticClass:"top"
              }, [
                n("div", {
                  staticClass:"title"
                }, [
                  n("Tooltip", {
                    directives:[
                      {
                        name:"ellipsis", rawName:"v-ellipsis"
                      }
                    ], attrs:{
                      content:e.viewTitle, transfer:"", placement:"top"
                    }
                  }, [
                    n("span", [
                      e._v(e._s(e.viewTitle))
                    ])
                  ]), e._v(" "), n("Tooltip", {
                    attrs:{
                      content:e.$t("view"), transfer:"", placement:"top"
                    }
                  }, [
                    e.viewTitle?n("i", {
                      staticClass:"font font-view-new", on:{
                        click:e.redirect
                      }
                    }):e._e()
                  ])
                ], 1), e._v(" "), n("div", {
                  staticClass:"filters"
                }, [
                  n("div", {
                    staticClass:"checkbox-wrapper"
                  }, [
                    n("Checkbox", {
                      attrs:{
                        indeterminate:e.indeterminate
                      }, on:{
                        "on-change":e.handleCheckAll
                      }, model:{
                        value:e.checkAll, callback:function(t){
                          e.checkAll=t
                        }, expression:"checkAll"
                      }
                    }, [
                      n("span", {
                        staticClass:"checkbox-tip"
                      }, [
                        e._v(e._s(e.$t("knowledgeGraph.numOfQuestion", [
                          e.subjects.length
                        ])))
                      ])
                    ])
                  ], 1), e._v(" "), n("div", {
                    staticClass:"condition"
                  }, [
                    "exam"===e.type?n("Select", {
                      staticStyle:{
                        width:"160px"
                      }, on:{
                        "on-change":e.search
                      }, model:{
                        value:e.examPaperType, callback:function(t){
                          e.examPaperType=t
                        }, expression:"examPaperType"
                      }
                    }, [
                      n("Option", {
                        attrs:{
                          value:"exam"
                        }
                      }, [
                        e._v(e._s(e.$t("examActivity.questionType.exam")))
                      ]), e._v(" "), n("Option", {
                        attrs:{
                          value:"makeup"
                        }
                      }, [
                        e._v(e._s(e.$t("examActivity.questionType.makeUp")))
                      ])
                    ], 1):e._e(), e._v(" "), n("Select", {
                      staticStyle:{
                        width:"160px"
                      }, on:{
                        "on-change":e.search
                      }, model:{
                        value:e.selectSubjectType, callback:function(t){
                          e.selectSubjectType=t
                        }, expression:"selectSubjectType"
                      }
                    }, e._l(e.enabledSubjectTypes, (function(t){
                      return n("Option", {
                        key:t.value, attrs:{
                          value:t.value
                        }
                      }, [
                        e._v("\n                "+e._s(t.text)+"\n              ")
                      ])
                    })), 1), e._v(" "), n("Input", {
                      attrs:{
                        search:"", placeholder:e.$t("enter_keyword")
                      }, on:{
                        "on-search":e.search
                      }, model:{
                        value:e.keyword, callback:function(t){
                          e.keyword=t
                        }, expression:"keyword"
                      }
                    })
                  ], 1)
                ])
              ]):e._e(), e._v(" "), n("div", {
                staticClass:"subject-list"
              }, [
                e.subjects.length>0?n("div", {
                  staticClass:"subject-wrapper"
                }, [
                  n("CheckboxGroup", {
                    staticClass:"subject-item", on:{
                      "on-change":e.selectedSubjectChange
                    }, model:{
                      value:e.checkSubjectIds, callback:function(t){
                        e.checkSubjectIds=t
                      }, expression:"checkSubjectIds"
                    }
                  }, e._l(e.subjects, (function(e, t){
                    return n("Checkbox", {
                      key:e.id, attrs:{
                        label:e.id
                      }
                    }, [
                      n("ReferenceSubject", {
                        staticClass:"reference-subject", attrs:{
                          item:e, index:t
                        }
                      })
                    ], 1)
                  })), 1)
                ], 1):n("NoData", [
                  e._v(e._s(e.noQuestionMessage))
                ])
              ], 1)
            ])
          ]):n("NoData", [
            e._v(e._s(e.noDataMessage))
          ])
        ], 1)
      }), [
      ], !1, null, "158d36b1", null).exports;
      var Ke=function(){
        return(Ke=Object.assign||function(e){
          for(var t, n=1, o=arguments.length;
          n<o;
          n++)for(var a in t=arguments[
            n
          ])Object.prototype.hasOwnProperty.call(t, a)&&(e[
            a
          ]
          =t[
            a
          ]);
          return e
        }).apply(this, arguments)
      };
      const Be=(0, o.pM)({
        name:"ReferenceSubjectModal", components:{
          ReferenceSubjectLib:Pe
        }, props:{
          value:{
            type:Boolean, default:!1
          }
        }, setup:function(e, t){
          var n=t.emit, i=(0, a.hRP)(e, "value", n, {
            eventName:"input"
          }), r=(0, o.KR)("exam-activity"), l=(0, o.KR)({
          }), s=(0, o.KR)({
          }), c=(0, o.EW)((function(){
            return Object.values(l.value).reduce((function(e, t){
              return e+t.length
            }), 0)+Object.values(s.value).reduce((function(e, t){
              return e+t.length
            }), 0)
          })), u=(0, o.EW)((function(){
            return window.featureToggles.enableCourseSubjectLib
          }));
          return{
            show:i, activeTab:r, onVisibleChange:function(e){
              e||(l.value={
              }, s.value={
              }, n("on-close"))
            }, save:function(){
              var e=[
              ];
              Object.entries(l.value).forEach((function(t){
                var n=t[
                  0
                ], o=t[
                  1
                ];
                e.push({
                  parentType:"exam_activity", parentId:n, subjectIds:o
                })
              })), Object.entries(s.value).forEach((function(t){
                var n=t[
                  0
                ], o=t[
                  1
                ];
                e.push({
                  parentType:"subject_lib", parentId:n, subjectIds:o
                })
              })), n("on-ok", e)
            }, close:function(){
              i.value=!1, r.value="exam-activity"
            }, enableCourseSubjectLib:u, selectedSubjectCount:c, updateExamSelectedSubjects:function(e){
              l.value=Ke({
              }, e.exam)
            }, updateLibSelectedSubjects:function(e){
              s.value=Ke({
              }, e.course)
            }
          }
        }
      });
      const Fe=(0, h.A)(Be, (function(){
        var e=this, t=e.$createElement, n=e._self._c||t;
        return n("Modal", {
          staticClass:"reference-subject-modal", attrs:{
            title:e.$t("knowledgeGraph.referenceSubject"), width:"1000"
          }, on:{
            "on-visible-change":e.onVisibleChange
          }, scopedSlots:e._u([
            {
              key:"footer", fn:function(){
                return[
                  n("Button", {
                    on:{
                      click:e.close
                    }
                  }, [
                    e._v(e._s(e.$t("cancel")))
                  ]), e._v(" "), n("Button", {
                    staticClass:"ok", attrs:{
                      disabled:0===e.selectedSubjectCount, type:"primary"
                    }, on:{
                      click:e.save
                    }
                  }, [
                    e._v("\n      "+e._s(e.$t("ok"))+"\n    ")
                  ]), e._v("\n    "+e._s(e.$t("knowledgeGraph.questionSelectedTip", [
                    e.selectedSubjectCount
                  ]))+"\n  ")
                ]
              }, proxy:!0
            }
          ]), model:{
            value:e.show, callback:function(t){
              e.show=t
            }, expression:"show"
          }
        }, [
          n("Tabs", {
            staticClass:"tabs", attrs:{
              name:"subject-tab", animated:!1
            }, model:{
              value:e.activeTab, callback:function(t){
                e.activeTab=t
              }, expression:"activeTab"
            }
          }, [
            n("TabPane", {
              attrs:{
                label:e.$t("activityType.exam"), name:"exam-activity", tab:"subject-tab"
              }
            }, [
              e.show?n("ReferenceSubjectLib", {
                attrs:{
                  type:"exam"
                }, on:{
                  updateSelectedSubjectData:e.updateExamSelectedSubjects
                }
              }):e._e()
            ], 1), e._v(" "), e.enableCourseSubjectLib?n("TabPane", {
              attrs:{
                label:e.$t("subjectLib.course"), name:"course-subject-lib", tab:"subject-tab"
              }
            }, [
              e.show?n("ReferenceSubjectLib", {
                attrs:{
                  type:"course"
                }, on:{
                  updateSelectedSubjectData:e.updateLibSelectedSubjects
                }
              }):e._e()
            ], 1):e._e()
          ], 1)
        ], 1)
      }), [
      ], !1, null, "7d1aa02b", null).exports;
      n(445708);
      var We=n(722720), Ze=n(454985), ze=n(248124), qe=function(e, t, n, o){
        return new(n||(n=Promise))((function(a, i){
          function r(e){
            try{
              s(o.next(e))
            }
            catch(e){
              i(e)
            }
          }
          function l(e){
            try{
              s(o.throw(e))
            }
            catch(e){
              i(e)
            }
          }
          function s(e){
            var t;
            e.done?a(e.value):(t=e.value, t instanceof n?t:new n((function(e){
              e(t)
            }))).then(r, l)
          }
          s((o=o.apply(e, t||[
          ])).next())
        }))
      }, Ve=function(e, t){
        var n, o, a, i, r={
          label:0, sent:function(){
            if(1&a[
              0
            ])throw a[
              1
            ];
            return a[
              1
            ]
          }, trys:[
          ], ops:[
          ]
        };
        return i={
          next:l(0), throw:l(1), return:l(2)
        }, "function"==typeof Symbol&&(i[
          Symbol.iterator
        ]
        =function(){
          return this
        }), i;
        function l(l){
          return function(s){
            return function(l){
              if(n)throw new TypeError("Generator is already executing.");
              for(;
              i&&(i=0, l[
                0
              ]
              &&(r=0)), r;
              )try{
                if(n=1, o&&(a=2&l[
                  0
                ]
                ?o.return:l[
                  0
                ]
                ?o.throw||((a=o.return)&&a.call(o), 0):o.next)&&!(a=a.call(o, l[
                  1
                ])).done)return a;
                switch(o=0, a&&(l=[
                  2&l[
                    0
                  ], a.value
                ]), l[
                  0
                ]){
                  case 0:case 1:a=l;
                  break;
                  case 4:return r.label++, {
                    value:l[
                      1
                    ], done:!1
                  };
                  case 5:r.label++, o=l[
                    1
                  ], l=[
                    0
                  ];
                  continue;
                  case 7:l=r.ops.pop(), r.trys.pop();
                  continue;
                  default:if(!(a=r.trys, (a=a.length>0&&a[
                    a.length-1
                  ])||6!==l[
                    0
                  ]
                  &&2!==l[
                    0
                  ])){
                    r=0;
                    continue
                  }
                  if(3===l[
                    0
                  ]
                  &&(!a||l[
                    1
                  ]
                  >a[
                    0
                  ]
                  &&l[
                    1
                  ]
                  <a[
                    3
                  ])){
                    r.label=l[
                      1
                    ];
                    break
                  }
                  if(6===l[
                    0
                  ]
                  &&r.label<a[
                    1
                  ]){
                    r.label=a[
                      1
                    ], a=l;
                    break
                  }
                  if(a&&r.label<a[
                    2
                  ]){
                    r.label=a[
                      2
                    ], r.ops.push(l);
                    break
                  }
                  a[
                    2
                  ]
                  &&r.ops.pop(), r.trys.pop();
                  continue
                }
                l=t.call(e, r)
              }
              catch(e){
                l=[
                  6, e
                ], o=0
              }
              finally{
                n=a=0
              }
              if(5&l[
                0
              ])throw l[
                1
              ];
              return{
                value:l[
                  0
                ]
                ?l[
                  1
                ]
                :void 0, done:!0
              }
            }
            ([
              l, s
            ])
          }
        }
      };
      const He=(0, o.pM)({
        name:"CaptureList", components:{
          DatePickerExt:Ze.default, SvgIcon:_.A, TooltipExt:w.A
        }, props:{
          tabName:{
            type:String, default:"mine"
          }, associatedIds:{
            type:Array, default:function(){
              return[
              ]
            }
          }
        }, emits:[
          "on-selection-change"
        ], setup:function(e, t){
          var n=this, a=t.emit, l=(0, o.KR)(), s=(0, o.EW)((function(){
            return new Set(e.associatedIds)
          })), c=(0, o.Kh)({
          }), u=(0, o.KR)(!1), d=(0, o.Kh)({
            timerange:[
            ], keyword:""
          }), p=(0, r.WQ)((function(t, o){
            return void 0===t&&(t=1), void 0===o&&(o=10), qe(n, void 0, void 0, (function(){
              var n;
              return Ve(this, (function(a){
                switch(a.label){
                  case 0:return"mine"===e.tabName?[
                    4, (0, g.cW)(t, o, d)
                  ]
                  :[
                    3, 2
                  ];
                  case 1:return n=a.sent(), [
                    3, 4
                  ];
                  case 2:return[
                    4, (0, g.jB)(t, o, d)
                  ];
                  case 3:n=a.sent(), a.label=4;
                  case 4:return n.items.forEach((function(e){
                    var t=s.value.has(e.id);
                    e._checked=t||Boolean(c[
                      e.id
                    ]), e._disabled=t
                  })), u.value=n.items.length>0&&n.items.every((function(e){
                    return e._checked
                  })), [
                    2, n
                  ]
                }
              }))
            }))
          })), f={
            shortcuts:[
              {
                text:i.default.t("filter.range.week"), value:function(){
                  return[
                    ve().subtract(6, "days").startOf("day").toDate(), ve().endOf("day").toDate()
                  ]
                }
              }, {
                text:i.default.t("filter.range.month"), value:function(){
                  return[
                    ve().subtract(29, "days").startOf("day").toDate(), ve().endOf("day").toDate()
                  ]
                }
              }, {
                text:i.default.t("filter.range.year"), value:function(){
                  return[
                    ve().subtract(1, "years").startOf("day").toDate(), ve().endOf("day").toDate()
                  ]
                }
              }
            ]
          };
          return(0, o.wB)((function(){
            return e.tabName
          }), (function(){
            return p.fetch(1)
          }), {
            immediate:!0
          }), (0, We.rN)(d, (function(){
            return p.fetch(1)
          }), {
            debounce:300
          }), {
            selection:l, columns:[
              {
                type:"selection", width:30, align:"center"
              }, {
                title:"Name", key:"name", slot:"name"
              }
            ], page:p, onSelectionChange:function(e){
              u.value=p.data.items.length>0&&e.length===p.data.items.length, e.filter((function(e){
                return!e._disabled
              })).forEach((function(e){
                c[
                  e.id
                ]
                =e
              })), a("on-selection-change", Object.values(c))
            }, selectAll:u, toggleSelectAll:function(){
              u.value?p.data.items.forEach((function(e){
                e._disabled||(e._checked=!0, c[
                  e.id
                ]
                =e)
              })):p.data.items.forEach((function(e){
                e._disabled||(e._checked=!1), delete c[
                  e.id
                ]
              })), a("on-selection-change", Object.values(c))
            }, conditions:d, getTime:function(e){
              if(!e.schedule)return"--";
              var t=e.schedule, n=be.TimeUtils.toYmd(t.startTime), o="".concat(be.TimeUtils.toHm(t.startTime), " - ").concat(be.TimeUtils.toHm(t.endTime)), a=be.TimeUtils.toLocalDate(t.startTime).getDay()||7, r=i.default.t("weekly.".concat(a));
              return"".concat(n, " ").concat(r, " ").concat(o)
            }, getCourseTip:function(e){
              if(!e.schedule)return"--";
              var t=e.schedule.course;
              return t?"".concat(t.name, "(").concat(t.code, ")"):"--"
            }, selectedCaptureIdMap:c, selectRow:function(e){
              e._disabled||p.data.items.filter((function(t){
                return t.id===e.id
              })).forEach((function(e){
                e._checked=!e._checked, e._checked?c[
                  e.id
                ]
                =e:delete c[
                  e.id
                ], u.value=p.data.items.length>0&&p.data.items.every((function(e){
                  return e._checked
                })), a("on-selection-change", Object.values(c))
              }))
            }, previewCapture:function(e){
              document.fullscreenElement&&document.exitFullscreen();
              var t=(0, re.useAngularScope)();
              e.type="capture", t.$broadcast("previewFiles", [
                e
              ], e), ze("#file-previewer").foundation("reveal", "open")
            }, datePickerOptions:f
          }
        }
      });
      const Ue=(0, h.A)(He, (function(){
        var e=this, t=e.$createElement, n=e._self._c||t;
        return n("div", {
          staticClass:"capture-list"
        }, [
          n("div", {
            staticClass:"capture-filter-area"
          }, [
            n("div", {
              staticClass:"left-area"
            }, [
              n("Checkbox", {
                on:{
                  "on-change":e.toggleSelectAll
                }, model:{
                  value:e.selectAll, callback:function(t){
                    e.selectAll=t
                  }, expression:"selectAll"
                }
              }, [
                e._v("\n        "+e._s(e.$t("knowledgeGraph.captureCountTip", [
                  e.page.data.total
                ]))+"\n      ")
              ])
            ], 1), e._v(" "), n("div", {
              staticClass:"right-area"
            }, [
              n("div", [
                e._v(e._s(e.$t("knowledgeGraph.date")))
              ]), e._v(" "), n("DatePickerExt", {
                staticStyle:{
                  width:"240px"
                }, attrs:{
                  type:"datetimerange", options:e.datePickerOptions, placement:"bottom-end", format:"yyyy-MM-dd", placeholder:e.$t("knowledgeGraph.startTime")+"  -  "+e.$t("knowledgeGraph.endTime")
                }, model:{
                  value:e.conditions.timerange, callback:function(t){
                    e.$set(e.conditions, "timerange", t)
                  }, expression:"conditions.timerange"
                }
              }), e._v(" "), n("Input", {
                staticStyle:{
                  width:"200px"
                }, attrs:{
                  placeholder:e.$t("knowledgeGraph.courseNewName")+" / "+e.$t("knowledgeGraph.captureName"), clearable:""
                }, model:{
                  value:e.conditions.keyword, callback:function(t){
                    e.$set(e.conditions, "keyword", t)
                  }, expression:"conditions.keyword"
                }
              }, [
                n("Icon", {
                  attrs:{
                    slot:"suffix", type:"ios-search"
                  }, slot:"suffix"
                })
              ], 1)
            ], 1)
          ]), e._v(" "), n("Table", {
            ref:"selection", attrs:{
              "show-header":!1, columns:e.columns, data:e.page.data.items, height:384
            }, on:{
              "on-selection-change":e.onSelectionChange
            }, scopedSlots:e._u([
              {
                key:"name", fn:function(t){
                  var o=t.row;
                  return[
                    n("div", {
                      staticClass:"name-column", on:{
                        click:function(t){
                          return t.stopPropagation(), e.selectRow(o)
                        }
                      }
                    }, [
                      n("div", {
                        staticClass:"svg-area"
                      }, [
                        n("SvgIcon", {
                          staticClass:"font", attrs:{
                            name:"capture"
                          }
                        })
                      ], 1), e._v(" "), n("div", {
                        staticClass:"name-area"
                      }, [
                        n("div", {
                          staticClass:"capture-title"
                        }, [
                          n("TooltipExt", {
                            attrs:{
                              text:o.name
                            }
                          })
                        ], 1), e._v(" "), n("div", {
                          staticClass:"more-info"
                        }, [
                          n("div", [
                            e._v("\n              "+e._s(e.$t("course"))+"：\n              "), n("TooltipExt", {
                              attrs:{
                                text:e.getCourseTip(o)
                              }
                            })
                          ], 1), e._v(" "), n("div", [
                            e._v(e._s(e.$t("knowledgeGraph.time"))+"："+e._s(e.getTime(o)))
                          ])
                        ])
                      ]), e._v(" "), n("div", {
                        staticClass:"button-area", on:{
                          click:function(t){
                            return t.stopPropagation(), e.previewCapture(o)
                          }
                        }
                      }, [
                        n("Tooltip", {
                          attrs:{
                            placement:"top", content:e.$t("view"), transfer:""
                          }
                        }, [
                          n("SvgIcon", {
                            staticClass:"operate-icon", attrs:{
                              name:"preview-open"
                            }
                          })
                        ], 1)
                      ], 1)
                    ])
                  ]
                }
              }
            ])
          }), e._v(" "), n("div", {
            staticClass:"pagination-area"
          }, [
            n("Page", {
              directives:[
                {
                  name:"show", rawName:"v-show", value:e.page.data.total>0, expression:"page.data.total > 0"
                }
              ], attrs:{
                total:e.page.data.total, "page-size":e.page.data.pageSize, current:e.page.data.page, "page-size-opts":[
                  10, 20, 30, 40
                ], "show-elevator":""
              }, on:{
                "on-change":e.page.pageChanged, "on-page-size-change":e.page.pageSizeChanged
              }
            })
          ], 1)
        ], 1)
      }), [
      ], !1, null, "3e0dfea9", null).exports, Qe=(0, o.pM)({
        name:"ReferenceCaptureModal", components:{
          CaptureList:Ue
        }, props:{
          value:{
            type:Boolean, default:!1
          }, associatedIds:{
            type:Array, default:function(){
              return[
              ]
            }
          }
        }, emits:[
          "on-ok"
        ], setup:function(e, t){
          var n=t.emit, i=(0, a.hRP)(e, "value", n, {
            eventName:"input"
          }), r=(0, o.KR)("mine"), l=(0, o.KR)([
          ]), s=(0, o.KR)([
          ]), c=(0, o.EW)((function(){
            return l.value.length+s.value.length
          }));
          return{
            show:i, activeTab:r, onVisibleChange:function(e){
              e||(l.value=[
              ], s.value=[
              ], r.value="mine")
            }, save:function(){
              var e=[
              ];
              l.value.forEach((function(t){
                e.push({
                  referType:"capture", referId:t.id
                })
              })), s.value.forEach((function(t){
                e.push({
                  referType:"capture", referId:t.id
                })
              })), n("on-ok", e), i.value=!1
            }, close:function(){
              i.value=!1
            }, selectedCaptureCount:c, updateSelectedMyCaptures:function(e){
              l.value=e
            }, updateSelectedOtherCaptures:function(e){
              s.value=e
            }
          }
        }
      });
      const Ye=(0, h.A)(Qe, (function(){
        var e=this, t=e.$createElement, n=e._self._c||t;
        return n("Modal", {
          directives:[
            {
              name:"show", rawName:"v-show", value:e.show, expression:"show"
            }
          ], staticClass:"reference-capture-modal", attrs:{
            "class-name":"vertical-center-modal", "mask-closable":!1, "z-index":100, title:e.$t("knowledgeGraph.referenceCapture"), width:"900"
          }, on:{
            "on-visible-change":e.onVisibleChange
          }, scopedSlots:e._u([
            {
              key:"footer", fn:function(){
                return[
                  n("Button", {
                    on:{
                      click:e.close
                    }
                  }, [
                    e._v(e._s(e.$t("cancel")))
                  ]), e._v(" "), n("Button", {
                    staticClass:"ok", attrs:{
                      disabled:0===e.selectedCaptureCount, type:"primary"
                    }, on:{
                      click:e.save
                    }
                  }, [
                    e._v("\n      "+e._s(e.$t("ok"))+"\n    ")
                  ]), e._v("\n    "+e._s(e.$t("knowledgeGraph.captureSelectedTip", [
                    e.selectedCaptureCount
                  ]))+"\n  ")
                ]
              }, proxy:!0
            }
          ]), model:{
            value:e.show, callback:function(t){
              e.show=t
            }, expression:"show"
          }
        }, [
          e.show?n("Tabs", {
            staticClass:"tabs", attrs:{
              name:"capture-tab", animated:!1
            }, model:{
              value:e.activeTab, callback:function(t){
                e.activeTab=t
              }, expression:"activeTab"
            }
          }, [
            n("TabPane", {
              attrs:{
                label:e.$t("knowledgeGraph.myCapture"), name:"mine"
              }
            }, [
              n("CaptureList", {
                attrs:{
                  "tab-name":"mine", "associated-ids":e.associatedIds
                }, on:{
                  "on-selection-change":e.updateSelectedMyCaptures
                }
              })
            ], 1), e._v(" "), n("TabPane", {
              attrs:{
                label:e.$t("knowledgeGraph.publicCapture"), name:"other"
              }
            }, [
              n("CaptureList", {
                attrs:{
                  "tab-name":"other", "associated-ids":e.associatedIds
                }, on:{
                  "on-selection-change":e.updateSelectedOtherCaptures
                }
              })
            ], 1)
          ], 1):e._e()
        ], 1)
      }), [
      ], !1, null, "044239b3", null).exports;
      const Xe=(0, o.pM)({
        components:{
          SvgIcon:_.A
        }, props:{
          item:{
            type:Object, required:!0
          }
        }, setup:function(e, t){
          var n=t.emit;
          return{
            preview:function(){
              n("preview", e.item)
            }, canViewCompleteness:(0, o.EW)((function(){
              return!b.Br&&(b.dn.value||!b.yb)
            }))
          }
        }
      });
      const Je=(0, h.A)(Xe, (function(){
        var e=this, t=e.$createElement, n=e._self._c||t;
        return n("div", {
          staticClass:"item"
        }, [
          n("div", {
            staticClass:"image"
          }, [
            n("SvgIcon", {
              staticClass:"file-icon", attrs:{
                name:"icon-"+e.item.type
              }
            })
          ], 1), e._v(" "), n("div", {
            staticClass:"body"
          }, [
            n("div", {
              staticClass:"name"
            }, [
              n("Tooltip", {
                attrs:{
                  content:e.item.title, placement:"top"
                }
              }, [
                e._v("\n        "+e._s(e.item.title)+"\n      ")
              ])
            ], 1)
          ]), e._v(" "), n("div", {
            staticClass:"action"
          }, [
            n("div", {
              staticClass:"button-area"
            }, [
              n("Tooltip", {
                attrs:{
                  transfer:"", content:e.$t("view"), placement:"top"
                }
              }, [
                n("i", {
                  staticClass:"font font-resource-view", on:{
                    click:e.preview
                  }
                })
              ])
            ], 1)
          ])
        ])
      }), [
      ], !1, null, "1cf0400d", null).exports;
      var et=n(248124), tt=function(e, t, n, o){
        return new(n||(n=Promise))((function(a, i){
          function r(e){
            try{
              s(o.next(e))
            }
            catch(e){
              i(e)
            }
          }
          function l(e){
            try{
              s(o.throw(e))
            }
            catch(e){
              i(e)
            }
          }
          function s(e){
            var t;
            e.done?a(e.value):(t=e.value, t instanceof n?t:new n((function(e){
              e(t)
            }))).then(r, l)
          }
          s((o=o.apply(e, t||[
          ])).next())
        }))
      }, nt=function(e, t){
        var n, o, a, i, r={
          label:0, sent:function(){
            if(1&a[
              0
            ])throw a[
              1
            ];
            return a[
              1
            ]
          }, trys:[
          ], ops:[
          ]
        };
        return i={
          next:l(0), throw:l(1), return:l(2)
        }, "function"==typeof Symbol&&(i[
          Symbol.iterator
        ]
        =function(){
          return this
        }), i;
        function l(l){
          return function(s){
            return function(l){
              if(n)throw new TypeError("Generator is already executing.");
              for(;
              i&&(i=0, l[
                0
              ]
              &&(r=0)), r;
              )try{
                if(n=1, o&&(a=2&l[
                  0
                ]
                ?o.return:l[
                  0
                ]
                ?o.throw||((a=o.return)&&a.call(o), 0):o.next)&&!(a=a.call(o, l[
                  1
                ])).done)return a;
                switch(o=0, a&&(l=[
                  2&l[
                    0
                  ], a.value
                ]), l[
                  0
                ]){
                  case 0:case 1:a=l;
                  break;
                  case 4:return r.label++, {
                    value:l[
                      1
                    ], done:!1
                  };
                  case 5:r.label++, o=l[
                    1
                  ], l=[
                    0
                  ];
                  continue;
                  case 7:l=r.ops.pop(), r.trys.pop();
                  continue;
                  default:if(!(a=r.trys, (a=a.length>0&&a[
                    a.length-1
                  ])||6!==l[
                    0
                  ]
                  &&2!==l[
                    0
                  ])){
                    r=0;
                    continue
                  }
                  if(3===l[
                    0
                  ]
                  &&(!a||l[
                    1
                  ]
                  >a[
                    0
                  ]
                  &&l[
                    1
                  ]
                  <a[
                    3
                  ])){
                    r.label=l[
                      1
                    ];
                    break
                  }
                  if(6===l[
                    0
                  ]
                  &&r.label<a[
                    1
                  ]){
                    r.label=a[
                      1
                    ], a=l;
                    break
                  }
                  if(a&&r.label<a[
                    2
                  ]){
                    r.label=a[
                      2
                    ], r.ops.push(l);
                    break
                  }
                  a[
                    2
                  ]
                  &&r.ops.pop(), r.trys.pop();
                  continue
                }
                l=t.call(e, r)
              }
              catch(e){
                l=[
                  6, e
                ], o=0
              }
              finally{
                n=a=0
              }
              if(5&l[
                0
              ])throw l[
                1
              ];
              return{
                value:l[
                  0
                ]
                ?l[
                  1
                ]
                :void 0, done:!0
              }
            }
            ([
              l, s
            ])
          }
        }
      };
      const ot=(0, o.pM)({
        components:{
          Subject:De, ReferenceUpload:fe, NoData:C.A, ActivitySelect:Ee, ActivityItem:Re, ChinamCloudResource:Je, ReferenceSubjectModal:Fe, ReferenceCapture:ue, ReferenceCaptureModal:Ye
        }, props:{
          node:{
            type:Object, required:!0
          }
        }, setup:function(e){
          var t=this, n=e.node, r=(0, o.WQ)(y.d9);
          (0, a.MLh)(window, "filesSelected", (function(e){
            return tt(t, void 0, void 0, (function(){
              return nt(this, (function(t){
                switch(t.label){
                  case 0:return[
                    4, (0, g.A1)(n.id, e.detail.map((function(e){
                      return{
                        referId:e.resource_reference_id?e.resource_reference_id:e.id, referType:e.resource_reference_id?"resource_reference":"upload"
                      }
                    })))
                  ];
                  case 1:return t.sent(), r.value.fetch(), [
                    2
                  ]
                }
              }))
            }))
          })), (0, o.nT)((function(){
            var e, t, o, a;
            n.data&&(n.data.resourceRefCount=null===(e=r.value.knowledgeNodeDetail.uploads)||void 0===e?void 0:e.length, n.data.activityRefCount=null===(t=r.value.knowledgeNodeDetail.activities)||void 0===t?void 0:t.length, n.data.captureRefCount=null===(o=r.value.knowledgeNodeDetail.captures)||void 0===o?void 0:o.length, n.data.subjectRefCount=null===(a=r.value.knowledgeNodeDetail.subjects)||void 0===a?void 0:a.length)
          }));
          var l, s, c=(0, o.KR)("upload"), u=(0, o.KR)(!1), d=(0, o.KR)(!1), p=(0, o.KR)(!1), f=function(e){
            return String.fromCharCode(65+e%26)
          }, v=(0, o.KR)(0), h=(0, o.EW)((function(){
            return r.value.knowledgeNodeDetail.subjects[
              v.value
            ]
          })), m=function(e){
            return[
              "single_selection", "multiple_selection", "true_or_false"
            ].includes(e)
          }, w=function(){
            var e=h.value, t=(0, le.decamelizeKeys)(e);
            return t.is_objective=m(e.type), t.index=v.value, t.show_note=b.yb, t.source_text=t.source.is_makeup_exam?"".concat(t.source.name, "(").concat(i.default.t("examActivity.questionType.makeUp"), ")"):t.source.name, t.sub_subjects&&t.sub_subjects.forEach((function(e){
              e.show_answer=t.show_answer, e.show_explanation=t.show_explanation, e.is_objective=m(e.type), e.type_str=i.default.t("subjectType.".concat((0, le.camelize)(e.type))), e.difficulty_label="".concat(i.default.t("subject.difficultyLevel"), ": ").concat(i.default.t("difficultyLevel.".concat(e.difficulty_level))), "matching"===e.type&&(e.shuffile_sub_subjects=(0, F.shuffle)(e.sub_subjects))
            })), "matching"===t.type&&(t.shuffile_sub_subjects=(0, F.shuffle)(t.sub_subjects)), t.type_str=i.default.t("subjectType.".concat((0, le.camelize)(e.type))), t.source_url=e.getSourceUrl(b.yW.value.id), t.difficulty_label="".concat(i.default.t("subject.difficultyLevel"), ": ").concat(i.default.t("difficultyLevel.".concat(t.difficulty_level))), t
          }, _=(0, o.EW)((function(){
            return 0===v.value
          })), C=(0, o.EW)((function(){
            return v.value===r.value.knowledgeNodeDetail.subjects.length-1
          })), k=(0, o.KR)(!0), x=(0, o.EW)((function(){
            var e, t=[
            ], n=[
            ], o=[
            ];
            return null===(e=r.value.knowledgeNodeDetail.externalResources)||void 0===e||e.forEach((function(e){
              "ppt"===e.type?t.push(e):"video"===e.type?o.push(e):n.push(e)
            })), {
              ppts:t, files:n, videos:o
            }
          }));
          (0, o.sV)((function(){
            var e=document.querySelector("#file-previewer");
            if(!b.yb&&e){
              var t=(0, re.useAngularScope)(e);
              l=t.$on("previewFile", (function(e, t){
                r.value.knowledgeNodeDetail.id&&("capture"===t.type?(0, g.RS)(r.value.knowledgeNodeDetail.courseId, r.value.knowledgeNodeDetail.id, t.id, t.code):(0, g.$8)(r.value.knowledgeNodeDetail.courseId, r.value.knowledgeNodeDetail.id, t.id, t.type))
              })), s=t.$on("previewFileCloseEvent", (function(){
                r.value.fetch()
              }))
            }
          })), (0, o.xo)((function(){
            l&&l(), s&&s()
          }));
          var R=(0, o.EW)((function(){
            return r.value.knowledgeNodeDetail.activities.map((function(e){
              return e.dbKey
            }))
          })), S=(0, o.KR)([
          ]), E=function(e){
            return e.map((function(e){
              var t=e.split(":"), n=t[
                0
              ];
              return{
                referId:t[
                  1
                ], referType:n
              }
            }))
          }, D=(0, o.EW)((function(){
            return!b.Br&&!b.dn.value&&(b.yb&&"external_resource"!==c.value)
          })), N=(0, o.EW)((function(){
            return!b.Br&&(b.dn.value||!b.yb)
          })), I=(0, o.EW)((function(){
            var e;
            return null===(e=r.value.knowledgeNodeDetail.captures)||void 0===e?void 0:e.map((function(e){
              return e.id
            }))
          })), A=(0, o.EW)((function(){
            var e;
            return r.value.knowledgeNodeDetail?null===(e=r.value.knowledgeNodeDetail.captures)||void 0===e?void 0:e.map((function(e){
              return e.id
            })):[
            ]
          })), M=(0, o.EW)((function(){
            var e=r.value.knowledgeNodeDetail.uploads;
            return null==e?void 0:e.length
          })), $=(0, o.WQ)("knowledgeGraphSource", "self"), j=(0, o.EW)((function(){
            return window.orgSettings.externalKnowledgeGraphResourceName?window.orgSettings.externalKnowledgeGraphResourceName:i.default.t("knowledgeGraph.chinamCloudResource")
          })), L=(0, o.EW)((function(){
            var e, t, n, o;
            return[
              {
                label:"upload", name:i.default.t("knowledgeGraph.referenceResource"), count:M.value, enabled:!0
              }, {
                label:"external_resource", name:j.value, count:null===(e=r.value.knowledgeNodeDetail.externalResources)||void 0===e?void 0:e.length, enabled:b.jp&&"self"!==$
              }, {
                label:"capture", name:i.default.t("knowledgeGraph.referenceCapture"), count:null===(t=r.value.knowledgeNodeDetail.captures)||void 0===t?void 0:t.length, enabled:b.jI
              }, {
                label:"subject", name:i.default.t("knowledgeGraph.referenceSubject"), count:null===(n=r.value.knowledgeNodeDetail.subjects)||void 0===n?void 0:n.length, enabled:!0
              }, {
                label:"activity", name:i.default.t("knowledgeGraph.referenceActivity"), count:null===(o=r.value.knowledgeNodeDetail.activities)||void 0===o?void 0:o.length, enabled:!0
              }
            ].filter((function(e){
              return e.enabled
            }))
          })), O=(0, o.KR)(null), G=(0, o.KR)(null), P=(0, a.Lhy)(O).width, K=(0, a.Lhy)(G, {
            width:0, height:0
          }).width, B=function(e){
            var t=document.createElement("span");
            t.style.visibility="hidden", t.style.position="absolute", t.id="fengkuang", t.style.whiteSpace="nowrap", t.style.font="500 13px sans-serif", t.textContent="".concat(e.name, "(").concat(e.count, ")"), document.body.appendChild(t);
            var n=t.offsetWidth;
            return document.body.removeChild(t), n+22
          }, W=(0, o.EW)((function(){
            return P.value-K.value-60
          })), Z=(0, o.EW)((function(){
            for(var e=[
            ], t=0, n=0, o=L.value;
            n<o.length;
            n++){
              var a=o[
                n
              ], i=B(a);
              if(!(t+i<=W.value))break;
              e.push(a), t+=i
            }
            return e
          })), z=(0, o.EW)((function(){
            return L.value.slice(Z.value.length)
          }));
          return{
            add:function(){
              if("upload"===c.value){
                var e=(0, re.useAngularService)("fileSelectModel"), t=(0, F.map)(r.value.knowledgeNodeDetail.uploads, (function(e){
                  return e.id
                }));
                e.nodeId=n.id, e.selectedIds=t, e.disabledIds=t, e.limitTypes=[
                  "file", "document", "video", "image", "audio", "scorm", "swf", "wmpkg", "link", "evercam"
                ], et("#file-select").foundation("reveal", "open")
              }
              else"activity"===c.value?(u.value=!0, S.value=(0, F.cloneDeep)(R.value)):"subject"===c.value?p.value=!0:"capture"===c.value&&(d.value=!0)
            }, type:c, knowledgeNode:r, deleteUpload:function(e){
              return tt(t, void 0, void 0, (function(){
                return nt(this, (function(t){
                  switch(t.label){
                    case 0:return[
                      4, se.A.open({
                        title:i.default.t("delete"), divider:!1, type:"warning", width:416, content:i.default.t("knowledgeGraph.deleteResourceReferenceConfirm")
                      })
                    ];
                    case 1:return t.sent()?[
                      4, (0, g.rQ)(n.id, [
                        {
                          referType:e.resourceReferenceId?"resource_reference":"upload", referId:e.resourceReferenceId?e.resourceReferenceId:e.id
                        }
                      ])
                    ]
                    :[
                      2
                    ];
                    case 2:return t.sent(), r.value.fetch(), [
                      2
                    ]
                  }
                }))
              }))
            }, preview:function(e){
              document.fullscreenElement&&document.exitFullscreen(), (0, re.useAngularScope)().$broadcast("previewFiles", r.value.knowledgeNodeDetail.uploads, e), et("#file-previewer").foundation("reveal", "open")
            }, showModal:u, showReferenceSubjectModal:p, selectedActivities:R, confirmActivities:function(){
              return tt(t, void 0, void 0, (function(){
                var e, t;
                return nt(this, (function(o){
                  switch(o.label){
                    case 0:return(e=(0, F.difference)(S.value, R.value)).length?[
                      4, (0, g.A1)(n.id, E(e))
                    ]
                    :[
                      3, 2
                    ];
                    case 1:o.sent(), o.label=2;
                    case 2:return(t=(0, F.difference)(R.value, S.value)).length?[
                      4, (0, g.rQ)(n.id, E(t))
                    ]
                    :[
                      3, 4
                    ];
                    case 3:o.sent(), o.label=4;
                    case 4:return r.value.fetch(), [
                      2
                    ]
                  }
                }))
              }))
            }, tmpSelectedActivities:S, cancelActivities:function(){
              return tt(t, void 0, void 0, (function(){
                return nt(this, (function(e){
                  return S.value=(0, F.cloneDeep)(R.value), [
                    2
                  ]
                }))
              }))
            }, deleteActivity:function(e){
              return tt(t, void 0, void 0, (function(){
                var t;
                return nt(this, (function(o){
                  switch(o.label){
                    case 0:return[
                      4, se.A.open({
                        title:i.default.t("delete"), type:"warning", divider:!1, width:416, content:i.default.t("knowledgeGraph.deleteActivityReferenceConfirm")
                      })
                    ];
                    case 1:return o.sent()?(t="".concat("exam"===e.type?"exam_activity":"learning_activity", ":").concat(e.id), [
                      4, (0, g.rQ)(n.id, E([
                        t
                      ]))
                    ]):[
                      2
                    ];
                    case 2:return o.sent(), r.value.fetch(), [
                      2
                    ]
                  }
                }))
              }))
            }, viewActivity:function(e){
              e.isLocked?((0, re.useAngularScope)().lockedActivity=(0, le.decamelizeKeys)(e), et("#prerequisites-confirmation-popup").foundation("reveal", "open")):window.open((0, T.mv)(e), "_blank")
            }, activityViewUrl:T.mv, canEditReference:D, canViewCompleteness:N, viewCompletenessWithoutMediaFragments:function(e){
              var t, n;
              return!(null===(n=null===(t=e.data)||void 0===t?void 0:t.mediaFragments)||void 0===n?void 0:n.length)
            }, previewSubject:function(e){
              document.fullscreenElement&&document.exitFullscreen(), v.value=e;
              var t=document.querySelector("#subject-detail-popup"), n=(0, re.useAngularScope)(t);
              n.subject=w(), n.showSource=!0, n.optionIdxToChar=f, n.disabledPrev=_.value, n.disabledNext=C.value, n.course_id=b.yW.value.id, n.clickCheckbox=function(e){
                return e.preventDefault()
              }, n.inSubmission=!0, n.prev=function(){
                v.value>0&&(v.value-=1, n.subject=w(), n.disabledPrev=_.value, n.disabledNext=C.value)
              }, n.next=function(){
                v.value<r.value.knowledgeNodeDetail.subjects.length-1&&(v.value+=1, n.subject=w(), n.disabledPrev=_.value, n.disabledNext=C.value)
              }, n.getSubIndex=function(e){
                return(n.subject.sub_subjects||[
                ]).filter((function(e){
                  return"paragraph_desc"!==e.type
                })).findIndex((function(t){
                  return t.id===e
                }))
              }, n.close=function(){
                et("#subject-detail-popup").foundation("reveal", "close")
              }, k.value&&(k.value=!1, et("#subject-detail-popup").foundation("reveal", "open"), n.close()), et("#subject-detail-popup").foundation("reveal", "open")
            }, deleteSubject:function(e){
              return tt(t, void 0, void 0, (function(){
                return nt(this, (function(t){
                  switch(t.label){
                    case 0:return[
                      4, se.A.open({
                        title:i.default.t("delete"), divider:!1, type:"warning", width:416, content:i.default.t("knowledgeGraph.deleteSubjectReferenceConfirm")
                      })
                    ];
                    case 1:return t.sent()?[
                      4, (0, g.rQ)(n.id, [
                        {
                          referType:"subject", referId:e.id
                        }
                      ])
                    ]
                    :[
                      2
                    ];
                    case 2:return t.sent(), r.value.fetch(), [
                      2
                    ]
                  }
                }))
              }))
            }, updateNodeSubjectRef:function(e){
              return tt(t, void 0, void 0, (function(){
                var t;
                return nt(this, (function(o){
                  switch(o.label){
                    case 0:return t=[
                    ], e.forEach((function(e){
                      e.subjectIds.forEach((function(n){
                        t.push({
                          referId:n, referType:"subject", parentId:e.parentId, parentType:e.parentType
                        })
                      }))
                    })), [
                      4, (0, g.A1)(n.id, t)
                    ];
                    case 1:return o.sent(), r.value.fetch(), p.value=!1, [
                      2
                    ]
                  }
                }))
              }))
            }, enableKnowledgeReferenceCapture:b.jI, getFileIcon:function(e){
              return"font-file-".concat(e)
            }, relatedResourceCount:M, containerEl:O, addBtnEl:G, visibleTabs:Z, dropdownTabs:z, handleDropdownClick:function(e){
              c.value=e
            }, showCaptureModal:d, previewCapture:function(e){
              document.fullscreenElement&&document.exitFullscreen();
              var t=(0, re.useAngularScope)();
              r.value.knowledgeNodeDetail.captures.forEach((function(e){
                e.type="capture"
              })), t.$broadcast("previewFiles", r.value.knowledgeNodeDetail.captures, e), et("#file-previewer").foundation("reveal", "open")
            }, associatedCaptureIds:A, updateNodeCaptureRef:function(e){
              return tt(t, void 0, void 0, (function(){
                var t;
                return nt(this, (function(o){
                  switch(o.label){
                    case 0:return(t=(0, F.difference)(e.map((function(e){
                      return e.referId
                    })), I.value)).length?[
                      4, (0, g.A1)(n.id, t.map((function(e){
                        return{
                          referId:e, referType:"capture"
                        }
                      })))
                    ]
                    :[
                      3, 2
                    ];
                    case 1:o.sent(), o.label=2;
                    case 2:return r.value.fetch(), [
                      2
                    ]
                  }
                }))
              }))
            }, deleteCapture:function(e){
              return tt(t, void 0, void 0, (function(){
                return nt(this, (function(t){
                  switch(t.label){
                    case 0:return[
                      4, se.A.open({
                        title:i.default.t("delete"), divider:!1, type:"warning", width:416, content:i.default.t("knowledgeGraph.deleteCaptureReferenceConfirm")
                      })
                    ];
                    case 1:return t.sent()?[
                      4, (0, g.rQ)(n.id, [
                        {
                          referType:"capture", referId:e.id
                        }
                      ])
                    ]
                    :[
                      2
                    ];
                    case 2:return t.sent(), r.value.fetch(), [
                      2
                    ]
                  }
                }))
              }))
            }, groupedExternalResources:x, previewExternalResource:function(e){
              return tt(t, void 0, void 0, (function(){
                var t;
                return nt(this, (function(n){
                  switch(n.label){
                    case 0:return[
                      4, (0, g.K0)(b.yW.value.id, e.id)
                    ];
                    case 1:return(t=n.sent())&&window.open(t, "_blank"), [
                      2
                    ]
                  }
                }))
              }))
            }, enableKnowledgeExternalResource:b.jp
          }
        }
      });
      const at=(0, h.A)(ot, (function(){
        var e=this, t=e.$createElement, n=e._self._c||t;
        return e.knowledgeNode.knowledgeNodeDetail?n("div", {
          ref:"containerEl", staticClass:"container"
        }, [
          n("div", {
            ref:"actionEl", staticClass:"action"
          }, [
            n("RadioGroup", {
              staticClass:"types", model:{
                value:e.type, callback:function(t){
                  e.type=t
                }, expression:"type"
              }
            }, [
              e._l(e.visibleTabs, (function(t){
                return n("Radio", {
                  key:t.label, attrs:{
                    label:t.label
                  }
                }, [
                  n("span", {
                    staticClass:"tab-name"
                  }, [
                    e._v(e._s(t.name))
                  ]), e._v(" "), n("span", {
                    staticClass:"tab-count"
                  }, [
                    e._v(e._s("("+(t.count||0)+")"))
                  ])
                ])
              })), e._v(" "), e.dropdownTabs.length>0?n("Dropdown", {
                on:{
                  "on-click":e.handleDropdownClick
                }
              }, [
                n("div", {
                  staticClass:"dropdown-btn", class:{
                    selected:e.dropdownTabs.map((function(e){
                      return e.label
                    })).includes(e.type)
                  }
                }, [
                  n("span", {
                    staticClass:"text"
                  }, [
                    e._v(e._s(e.$t("more")))
                  ]), e._v(" "), n("SvgIcon", {
                    staticClass:"dropdown-icon", attrs:{
                      name:"arrow-down"
                    }
                  })
                ], 1), e._v(" "), n("DropdownMenu", {
                  attrs:{
                    slot:"list"
                  }, slot:"list"
                }, e._l(e.dropdownTabs, (function(t){
                  return n("DropdownItem", {
                    key:t.label, attrs:{
                      name:t.label, selected:e.type===t.label
                    }
                  }, [
                    e._v("\n            "+e._s(t.name)+"("+e._s(t.count)+")\n          ")
                  ])
                })), 1)
              ], 1):e._e()
            ], 2), e._v(" "), e.canEditReference&&e.knowledgeNode.edit?n("Button", {
              ref:"addBtnEl", staticClass:"add", attrs:{
                type:"primary", size:"small"
              }, on:{
                click:e.add
              }
            }, [
              n("i", {
                staticClass:"font font-add-new-elem"
              }), e._v("\n      "+e._s(e.$t("add"))+"\n    ")
            ]):e._e()
          ], 1), e._v(" "), n("div", {
            directives:[
              {
                name:"show", rawName:"v-show", value:"upload"===e.type, expression:"type === 'upload'"
              }
            ], staticClass:"list"
          }, [
            e._l(e.knowledgeNode.knowledgeNodeDetail.uploads, (function(t){
              return n("ReferenceUpload", {
                key:t.id, staticClass:"list-item", attrs:{
                  item:t
                }, on:{
                  delete:e.deleteUpload, preview:e.preview
                }
              })
            })), e._v(" "), e.knowledgeNode.knowledgeNodeDetail.uploads&&0!==e.knowledgeNode.knowledgeNodeDetail.uploads.length?e._e():n("NoData", {
              staticClass:"no-data"
            }, [
              e._v("\n      "+e._s(e.$t("knowledgeGraph.noReferenceResource"))+"\n    ")
            ])
          ], 2), e._v(" "), n("div", {
            directives:[
              {
                name:"show", rawName:"v-show", value:"external_resource"===e.type&&e.enableKnowledgeExternalResource, expression:"type === 'external_resource' && enableKnowledgeExternalResource"
              }
            ], staticClass:"list external-resource-group-wrap"
          }, [
            e.groupedExternalResources.files.length>0?n("div", {
              staticClass:"group-item"
            }, [
              n("span", {
                staticClass:"group-name"
              }, [
                e._v(e._s(e.$t("h5_courseware.file")))
              ]), e._v(" "), e._l(e.groupedExternalResources.files, (function(t){
                return n("ChinamCloudResource", {
                  key:t.id, staticClass:"list-item", attrs:{
                    item:t
                  }, on:{
                    preview:e.previewExternalResource
                  }
                })
              }))
            ], 2):e._e(), e._v(" "), e.groupedExternalResources.ppts.length>0?n("div", {
              staticClass:"group-item"
            }, [
              n("span", {
                staticClass:"group-name"
              }, [
                e._v("PPT")
              ]), e._v(" "), e._l(e.groupedExternalResources.ppts, (function(t){
                return n("ChinamCloudResource", {
                  key:t.id, staticClass:"list-item", attrs:{
                    item:t
                  }, on:{
                    preview:e.previewExternalResource
                  }
                })
              }))
            ], 2):e._e(), e._v(" "), e.groupedExternalResources.videos.length>0?n("div", {
              staticClass:"group-item"
            }, [
              n("span", {
                staticClass:"group-name"
              }, [
                e._v(e._s(e.$t("resourceType.video")))
              ]), e._v(" "), e._l(e.groupedExternalResources.videos, (function(t){
                return n("ChinamCloudResource", {
                  key:t.id, staticClass:"list-item", attrs:{
                    item:t
                  }, on:{
                    preview:e.previewExternalResource
                  }
                })
              }))
            ], 2):e._e()
          ]), e._v(" "), n("div", {
            directives:[
              {
                name:"show", rawName:"v-show", value:"capture"===e.type&&e.enableKnowledgeReferenceCapture, expression:"type === 'capture' && enableKnowledgeReferenceCapture"
              }
            ], staticClass:"list"
          }, [
            e._l(e.knowledgeNode.knowledgeNodeDetail.captures, (function(t){
              return n("ReferenceCapture", {
                key:t.id, staticClass:"list-item", attrs:{
                  item:t
                }, on:{
                  delete:e.deleteCapture, preview:e.previewCapture
                }
              })
            })), e._v(" "), e.knowledgeNode.knowledgeNodeDetail.captures&&0!==e.knowledgeNode.knowledgeNodeDetail.captures.length?e._e():n("NoData", {
              staticClass:"no-data"
            }, [
              e._v("\n      "+e._s(e.$t("knowledgeGraph.noReferenceCapture"))+"\n    ")
            ])
          ], 2), e._v(" "), n("div", {
            directives:[
              {
                name:"show", rawName:"v-show", value:"subject"===e.type, expression:"type === 'subject'"
              }
            ], staticClass:"list"
          }, [
            e._l(e.knowledgeNode.knowledgeNodeDetail.subjects, (function(t, o){
              return n("Subject", {
                key:t.id, staticClass:"list-item", attrs:{
                  item:t, index:o
                }, on:{
                  "preview-subject":e.previewSubject, "remove-subject":e.deleteSubject
                }
              })
            })), e._v(" "), e.knowledgeNode.knowledgeNodeDetail.subjects&&0!==e.knowledgeNode.knowledgeNodeDetail.subjects.length?e._e():n("NoData", {
              staticClass:"no-data"
            }, [
              e._v("\n      "+e._s(e.$t("knowledgeGraph.noReferenceSubject"))+"\n    ")
            ])
          ], 2), e._v(" "), n("div", {
            directives:[
              {
                name:"show", rawName:"v-show", value:"activity"===e.type, expression:"type === 'activity'"
              }
            ], staticClass:"list"
          }, [
            e._l(e.knowledgeNode.knowledgeNodeDetail.activities, (function(t){
              return n("ActivityItem", {
                key:t.id, attrs:{
                  item:t
                }
              }, [
                n("div", {
                  staticClass:"item-action"
                }, [
                  n("div", {
                    staticClass:"button-area"
                  }, [
                    e.canEditReference&&e.knowledgeNode.edit?n("Tooltip", {
                      attrs:{
                        transfer:"", content:e.$t("delete"), placement:"top"
                      }
                    }, [
                      n("i", {
                        staticClass:"font font-delete", on:{
                          click:function(n){
                            return e.deleteActivity(t)
                          }
                        }
                      })
                    ]):e._e(), e._v(" "), n("Tooltip", {
                      attrs:{
                        transfer:"", content:e.$t("view"), placement:"top"
                      }
                    }, [
                      n("a", {
                        attrs:{
                          target:"_blank"
                        }, on:{
                          click:function(n){
                            return e.viewActivity(t)
                          }
                        }
                      }, [
                        n("i", {
                          staticClass:"font font-resource-view"
                        })
                      ])
                    ])
                  ], 1), e._v(" "), e.canViewCompleteness&&e.viewCompletenessWithoutMediaFragments(t)?n("div", {
                    staticClass:"completeness-area", class:"full"===t.completeness?"bg-green":"bg-orange"
                  }, [
                    "full"===t.completeness?n("span", [
                      e._v(e._s(e.$t("knowledgeGraph.finished")))
                    ]):"part"===t.completeness?n("span", [
                      e._v(e._s(e.$t("knowledgeGraph.partFinished")))
                    ]):n("span", [
                      e._v(e._s(e.$t("knowledgeGraph.notFinished")))
                    ])
                  ]):e._e()
                ])
              ])
            })), e._v(" "), e.knowledgeNode.knowledgeNodeDetail.activities&&0!==e.knowledgeNode.knowledgeNodeDetail.activities.length?e._e():n("NoData", {
              staticClass:"no-data"
            }, [
              e._v("\n      "+e._s(e.$t("knowledgeGraph.noReferenceActivity"))+"\n    ")
            ])
          ], 2), e._v(" "), n("ReferenceSubjectModal", {
            on:{
              "on-ok":e.updateNodeSubjectRef
            }, model:{
              value:e.showReferenceSubjectModal, callback:function(t){
                e.showReferenceSubjectModal=t
              }, expression:"showReferenceSubjectModal"
            }
          }), e._v(" "), n("ReferenceCaptureModal", {
            attrs:{
              "associated-ids":e.associatedCaptureIds
            }, on:{
              "on-ok":e.updateNodeCaptureRef
            }, model:{
              value:e.showCaptureModal, callback:function(t){
                e.showCaptureModal=t
              }, expression:"showCaptureModal"
            }
          }), e._v(" "), n("Modal", {
            attrs:{
              width:"800", title:e.$t("knowledgeGraph.referenceActivity"), "class-name":"referenceActivityModal"
            }, on:{
              "on-ok":e.confirmActivities, "on-cancel":e.cancelActivities
            }, scopedSlots:e._u([
              {
                key:"footer", fn:function(){
                  return[
                    n("Button", {
                      on:{
                        click:function(){
                          e.showModal=!1, e.cancelActivities()
                        }
                      }
                    }, [
                      e._v("\n        "+e._s(e.$t("cancel"))+"\n      ")
                    ]), e._v(" "), n("Button", {
                      staticClass:"ok", attrs:{
                        type:"primary"
                      }, on:{
                        click:function(){
                          e.showModal=!1, e.confirmActivities()
                        }
                      }
                    }, [
                      e._v("\n        "+e._s(e.$t("ok"))+"\n      ")
                    ]), e._v("\n      "+e._s(e.$t("knowledgeGraph.selectedActivityCount", {
                      n:e.tmpSelectedActivities.length
                    }))+"\n    ")
                  ]
                }, proxy:!0
              }
            ], null, !1, 933133180), model:{
              value:e.showModal, callback:function(t){
                e.showModal=t
              }, expression:"showModal"
            }
          }, [
            n("ActivitySelect", {
              model:{
                value:e.tmpSelectedActivities, callback:function(t){
                  e.tmpSelectedActivities=t
                }, expression:"tmpSelectedActivities"
              }
            })
          ], 1)
        ], 1):e._e()
      }), [
      ], !1, null, "1e742f18", null).exports;
      var it, rt, lt=n(794128), st=n(156765), ct=n(542535), ut=null!==(rt=null===(it=window.globalData)||void 0===it?void 0:it.course)&&void 0!==rt?rt:{
        id:0
      };
      const dt=(0, o.pM)({
        components:{
          NodeStatisticsCard:st.A, SvgIcon:_.A
        }, setup:function(e, t){
          var n=t.emit, a=[
            "80~100", "60~79", "below60"
          ], r=(0, o.WQ)(y.d9), l=(0, lt.$U)(), s=l.tooltipSingleCompletionRate, c=l.isNormalMode, u=l.tooltipMasteryRate;
          return{
            completenessDistribution:(0, o.EW)((function(){
              return a.map((function(e){
                var t;
                return{
                  value:null===(t=r.value.knowledgeNodeDetail.completenessRateDistribution)||void 0===t?void 0:t[
                    e
                  ], name:i.default.t("knowledgeGraph.statistics.".concat(e))
                }
              }))
            })), masteryDistribution:(0, o.EW)((function(){
              return a.map((function(e){
                var t;
                return{
                  value:null===(t=r.value.knowledgeNodeDetail.masteryRateDistribution)||void 0===t?void 0:t[
                    e
                  ], name:i.default.t("knowledgeGraph.statistics.".concat(e))
                }
              }))
            })), statsUrl:(0, o.EW)((function(){
              return"/course/".concat(ut.id, "/stat#/knowledge-graph/node/").concat(r.value.knowledgeNodeDetail.id)
            })), knowledgeNode:r, COMPLETENESS_LEGEND_COLORS:ct.QX, MASTERY_LEGEND_COLORS:ct.DO, tooltipSingleCompletionRate:s, isNormalMode:c, tooltipMasteryRate:u, handleDetailClick:function(){
              n("detail-click")
            }
          }
        }
      });
      const pt=(0, h.A)(dt, (function(){
        var e=this, t=e.$createElement, n=e._self._c||t;
        return n("div", {
          staticClass:"node-statistics-wrapper"
        }, [
          n("div", [
            n("a", {
              on:{
                click:e.handleDetailClick
              }
            }, [
              e._v("\n      "+e._s(e.$t("knowledgeGraph.statistics.detail"))+"\n      "), n("Icon", {
                staticClass:"to-detail", attrs:{
                  type:"ios-arrow-forward"
                }
              })
            ], 1)
          ]), e._v(" "), n("NodeStatisticsCard", {
            attrs:{
              data:e.completenessDistribution, colors:e.COMPLETENESS_LEGEND_COLORS
            }
          }, [
            n("span", [
              e._v(e._s(e.$t("knowledgeGraph.statistics.completenessRate")))
            ]), e._v(" "), n("Tooltip", {
              attrs:{
                placement:"top", "transfer-class-name":"knowledge-graph-tooltip", transfer:""
              }
            }, [
              n("SvgIcon", {
                staticClass:"help-icon", attrs:{
                  name:"help"
                }
              }), e._v(" "), n("template", {
                slot:"content"
              }, [
                n("div", {
                  staticClass:"tooltip-content"
                }, [
                  n("div", {
                    staticClass:"item"
                  }, [
                    n("span", {
                      staticClass:"title"
                    }, [
                      e._v(e._s(e.$t("knowledgeGraph.statistics.functionDescription")))
                    ]), e._v(" "), n("span", {
                      staticClass:"content"
                    }, [
                      e._v(e._s(e.tooltipSingleCompletionRate))
                    ])
                  ]), e._v(" "), e.isNormalMode?n("div", {
                    staticClass:"item"
                  }, [
                    n("span", {
                      staticClass:"title"
                    }, [
                      e._v(e._s(e.$t("knowledgeGraph.statistics.calculationRules")))
                    ]), e._v(" "), n("span", {
                      staticClass:"content"
                    }, [
                      e._v(e._s(e.$t("knowledgeGraph.statistics.singleNodeCompletenessRateTip")))
                    ])
                  ]):e._e()
                ])
              ])
            ], 2), e._v(" "), n("span", [
              e._v(": "+e._s(e.knowledgeNode.knowledgeNodeDetail.avgCompletenessRate))
            ])
          ], 1), e._v(" "), n("NodeStatisticsCard", {
            attrs:{
              data:e.masteryDistribution, colors:e.MASTERY_LEGEND_COLORS
            }
          }, [
            n("span", [
              e._v(e._s(e.$t("knowledgeGraph.statistics.masteryRate")))
            ]), e._v(" "), n("Tooltip", {
              attrs:{
                placement:"top", "transfer-class-name":"knowledge-graph-tooltip", transfer:""
              }
            }, [
              n("SvgIcon", {
                staticClass:"help-icon", attrs:{
                  name:"help"
                }
              }), e._v(" "), n("template", {
                slot:"content"
              }, [
                n("div", {
                  staticClass:"tooltip-content"
                }, [
                  n("div", {
                    staticClass:"item"
                  }, [
                    n("span", {
                      staticClass:"title"
                    }, [
                      e._v(e._s(e.$t("knowledgeGraph.statistics.functionDescription")))
                    ]), e._v(" "), n("span", {
                      staticClass:"content"
                    }, [
                      e._v(e._s(e.tooltipMasteryRate))
                    ])
                  ]), e._v(" "), e.isNormalMode?n("div", {
                    staticClass:"item"
                  }, [
                    n("span", {
                      staticClass:"title"
                    }, [
                      e._v(e._s(e.$t("knowledgeGraph.statistics.calculationRules")))
                    ]), e._v(" "), n("span", {
                      staticClass:"content"
                    }, [
                      e._v(e._s(e.$t("knowledgeGraph.statistics.singleNodeMasteryRateTip")))
                    ])
                  ]):e._e()
                ])
              ])
            ], 2), e._v(" "), n("span", [
              e._v(": "+e._s(e.knowledgeNode.knowledgeNodeDetail.avgMasteryRate))
            ])
          ], 1)
        ], 1)
      }), [
      ], !1, null, "6f88ece8", null).exports;
      var ft=n(248124), vt=function(e, t, n, o){
        return new(n||(n=Promise))((function(a, i){
          function r(e){
            try{
              s(o.next(e))
            }
            catch(e){
              i(e)
            }
          }
          function l(e){
            try{
              s(o.throw(e))
            }
            catch(e){
              i(e)
            }
          }
          function s(e){
            var t;
            e.done?a(e.value):(t=e.value, t instanceof n?t:new n((function(e){
              e(t)
            }))).then(r, l)
          }
          s((o=o.apply(e, t||[
          ])).next())
        }))
      }, ht=function(e, t){
        var n, o, a, i, r={
          label:0, sent:function(){
            if(1&a[
              0
            ])throw a[
              1
            ];
            return a[
              1
            ]
          }, trys:[
          ], ops:[
          ]
        };
        return i={
          next:l(0), throw:l(1), return:l(2)
        }, "function"==typeof Symbol&&(i[
          Symbol.iterator
        ]
        =function(){
          return this
        }), i;
        function l(l){
          return function(s){
            return function(l){
              if(n)throw new TypeError("Generator is already executing.");
              for(;
              i&&(i=0, l[
                0
              ]
              &&(r=0)), r;
              )try{
                if(n=1, o&&(a=2&l[
                  0
                ]
                ?o.return:l[
                  0
                ]
                ?o.throw||((a=o.return)&&a.call(o), 0):o.next)&&!(a=a.call(o, l[
                  1
                ])).done)return a;
                switch(o=0, a&&(l=[
                  2&l[
                    0
                  ], a.value
                ]), l[
                  0
                ]){
                  case 0:case 1:a=l;
                  break;
                  case 4:return r.label++, {
                    value:l[
                      1
                    ], done:!1
                  };
                  case 5:r.label++, o=l[
                    1
                  ], l=[
                    0
                  ];
                  continue;
                  case 7:l=r.ops.pop(), r.trys.pop();
                  continue;
                  default:if(!(a=r.trys, (a=a.length>0&&a[
                    a.length-1
                  ])||6!==l[
                    0
                  ]
                  &&2!==l[
                    0
                  ])){
                    r=0;
                    continue
                  }
                  if(3===l[
                    0
                  ]
                  &&(!a||l[
                    1
                  ]
                  >a[
                    0
                  ]
                  &&l[
                    1
                  ]
                  <a[
                    3
                  ])){
                    r.label=l[
                      1
                    ];
                    break
                  }
                  if(6===l[
                    0
                  ]
                  &&r.label<a[
                    1
                  ]){
                    r.label=a[
                      1
                    ], a=l;
                    break
                  }
                  if(a&&r.label<a[
                    2
                  ]){
                    r.label=a[
                      2
                    ], r.ops.push(l);
                    break
                  }
                  a[
                    2
                  ]
                  &&r.ops.pop(), r.trys.pop();
                  continue
                }
                l=t.call(e, r)
              }
              catch(e){
                l=[
                  6, e
                ], o=0
              }
              finally{
                n=a=0
              }
              if(5&l[
                0
              ])throw l[
                1
              ];
              return{
                value:l[
                  0
                ]
                ?l[
                  1
                ]
                :void 0, done:!0
              }
            }
            ([
              l, s
            ])
          }
        }
      }, mt=function(e, t, n){
        if(n||2===arguments.length)for(var o, a=0, i=t.length;
        a<i;
        a++)!o&&a in t||(o||(o=Array.prototype.slice.call(t, 0, a)), o[
          a
        ]
        =t[
          a
        ]);
        return e.concat(o||Array.prototype.slice.call(t))
      };
      const gt=(0, o.pM)({
        components:{
          NoData:C.A, SvgIcon:_.A, TooltipExt:w.A
        }, props:{
          nodeId:{
            type:Number, required:!0
          }
        }, setup:function(e, t){
          var n=this, r=t.emit, l=(0, o.KR)("referenceResource"), s=(0, o.KR)(null), c=(0, o.KR)(!1), u=(0, o.KR)([
          ]), d=(0, o.KR)(0), p=(0, o.KR)(1), f=(0, o.WQ)(y.d9), v=(0, o.EW)((function(){
            return d.value>u.value.length
          })), h=(0, o.EW)((function(){
            return f.value.knowledgeNodeDetail.captures.map((function(e){
              return e.id
            }))
          })), m=(0, o.EW)((function(){
            return!b.Br&&!b.dn.value&&b.yb
          })), w=(0, o.EW)((function(){
            return m.value&&f.value.edit
          })), _=function(){
            return vt(n, void 0, void 0, (function(){
              var t;
              return ht(this, (function(n){
                switch(n.label){
                  case 0:return c.value=!0, [
                    4, (0, g.NH)(e.nodeId, p.value)
                  ];
                  case 1:return t=n.sent(), d.value=t.total, r("loaded", d.value), u.value=mt(mt([
                  ], u.value, !0), t.items, !0), c.value=!1, [
                    2
                  ]
                }
              }))
            }))
          };
          (0, a.XDU)(s, (function(){
            return vt(n, void 0, void 0, (function(){
              return ht(this, (function(e){
                switch(e.label){
                  case 0:return!v.value||c.value?[
                    3, 2
                  ]
                  :(p.value++, [
                    4, _()
                  ]);
                  case 1:e.sent(), e.label=2;
                  case 2:return[
                    2
                  ]
                }
              }))
            }))
          }), {
            distance:10
          });
          return(0, o.sV)((function(){
            return vt(n, void 0, void 0, (function(){
              return ht(this, (function(e){
                switch(e.label){
                  case 0:return[
                    4, _()
                  ];
                  case 1:return e.sent(), [
                    2
                  ]
                }
              }))
            }))
          })), (0, o.wB)((function(){
            return e.nodeId
          }), (function(){
            return vt(n, void 0, void 0, (function(){
              return ht(this, (function(e){
                switch(e.label){
                  case 0:return p.value=1, u.value=[
                  ], [
                    4, _()
                  ];
                  case 1:return e.sent(), [
                    2
                  ]
                }
              }))
            }))
          })), {
            scrollContainer:s, type:l, total:d, captures:u, disabledCaptureIds:h, addKnowledgeNodeCaptureReference:function(t){
              return vt(n, void 0, void 0, (function(){
                return ht(this, (function(n){
                  switch(n.label){
                    case 0:return h.value.includes(t)?[
                      2
                    ]
                    :[
                      4, (0, g.A1)(e.nodeId, [
                        {
                          referId:t, referType:"capture"
                        }
                      ])
                    ];
                    case 1:return n.sent(), [
                      4, f.value.fetch()
                    ];
                    case 2:return n.sent(), be.Toast.success(i.default.t("operationSuccess")), [
                      2
                    ]
                  }
                }))
              }))
            }, canAddKnowledgeNodeCaptureReference:w, previewCapture:function(e){
              document.fullscreenElement&&document.exitFullscreen();
              var t=(0, re.useAngularScope)();
              u.value.forEach((function(e){
                e.type="capture"
              })), t.$broadcast("previewFiles", u.value, e), ft("#file-previewer").foundation("reveal", "open")
            }
          }
        }
      });
      const bt=(0, h.A)(gt, (function(){
        var e=this, t=e.$createElement, n=e._self._c||t;
        return n("div", {
          staticClass:"list"
        }, [
          e.captures.length>0?n("div", {
            ref:"scrollContainer", staticClass:"scroll-container"
          }, e._l(e.captures, (function(t){
            return n("div", {
              key:t.id, staticClass:"capture-card"
            }, [
              n("div", {
                staticClass:"left"
              }, [
                n("SvgIcon", {
                  staticClass:"left-icon", attrs:{
                    name:"capture-video"
                  }
                }), e._v(" "), n("TooltipExt", {
                  attrs:{
                    text:t.name, placement:"top"
                  }
                })
              ], 1), e._v(" "), n("div", {
                staticClass:"right"
              }, [
                n("Tooltip", {
                  attrs:{
                    content:e.$t("view"), placement:"top"
                  }
                }, [
                  n("div", {
                    staticClass:"btn", on:{
                      click:function(n){
                        return n.stopPropagation(), e.previewCapture(t)
                      }
                    }
                  }, [
                    n("SvgIcon", {
                      staticClass:"operate-icon", attrs:{
                        name:"preview-open"
                      }
                    })
                  ], 1)
                ]), e._v(" "), e.canAddKnowledgeNodeCaptureReference?n("Tooltip", {
                  attrs:{
                    content:e.disabledCaptureIds.includes(t.id)?e.$t("knowledgeGraph.associationAdded"):e.$t("knowledgeGraph.addToRelatedRecordings"), placement:"top-end", offset:"12"
                  }
                }, [
                  n("div", {
                    staticClass:"btn", on:{
                      click:function(n){
                        return e.addKnowledgeNodeCaptureReference(t.id)
                      }
                    }
                  }, [
                    n("SvgIcon", {
                      staticClass:"operate-icon", class:{
                        disabled:e.disabledCaptureIds.includes(t.id)
                      }, attrs:{
                        name:"add-bookmark"
                      }
                    })
                  ], 1)
                ]):e._e()
              ], 1)
            ])
          })), 0):n("NoData", {
            staticClass:"no-data"
          }, [
            e._v("\n    "+e._s(e.$t("knowledgeGraph.noRecommendedRecordings"))+"\n  ")
          ])
        ], 1)
      }), [
      ], !1, null, "4d0df832", null).exports;
      var yt=n(248124), wt=function(e, t, n, o){
        return new(n||(n=Promise))((function(a, i){
          function r(e){
            try{
              s(o.next(e))
            }
            catch(e){
              i(e)
            }
          }
          function l(e){
            try{
              s(o.throw(e))
            }
            catch(e){
              i(e)
            }
          }
          function s(e){
            var t;
            e.done?a(e.value):(t=e.value, t instanceof n?t:new n((function(e){
              e(t)
            }))).then(r, l)
          }
          s((o=o.apply(e, t||[
          ])).next())
        }))
      }, _t=function(e, t){
        var n, o, a, i, r={
          label:0, sent:function(){
            if(1&a[
              0
            ])throw a[
              1
            ];
            return a[
              1
            ]
          }, trys:[
          ], ops:[
          ]
        };
        return i={
          next:l(0), throw:l(1), return:l(2)
        }, "function"==typeof Symbol&&(i[
          Symbol.iterator
        ]
        =function(){
          return this
        }), i;
        function l(l){
          return function(s){
            return function(l){
              if(n)throw new TypeError("Generator is already executing.");
              for(;
              i&&(i=0, l[
                0
              ]
              &&(r=0)), r;
              )try{
                if(n=1, o&&(a=2&l[
                  0
                ]
                ?o.return:l[
                  0
                ]
                ?o.throw||((a=o.return)&&a.call(o), 0):o.next)&&!(a=a.call(o, l[
                  1
                ])).done)return a;
                switch(o=0, a&&(l=[
                  2&l[
                    0
                  ], a.value
                ]), l[
                  0
                ]){
                  case 0:case 1:a=l;
                  break;
                  case 4:return r.label++, {
                    value:l[
                      1
                    ], done:!1
                  };
                  case 5:r.label++, o=l[
                    1
                  ], l=[
                    0
                  ];
                  continue;
                  case 7:l=r.ops.pop(), r.trys.pop();
                  continue;
                  default:if(!(a=r.trys, (a=a.length>0&&a[
                    a.length-1
                  ])||6!==l[
                    0
                  ]
                  &&2!==l[
                    0
                  ])){
                    r=0;
                    continue
                  }
                  if(3===l[
                    0
                  ]
                  &&(!a||l[
                    1
                  ]
                  >a[
                    0
                  ]
                  &&l[
                    1
                  ]
                  <a[
                    3
                  ])){
                    r.label=l[
                      1
                    ];
                    break
                  }
                  if(6===l[
                    0
                  ]
                  &&r.label<a[
                    1
                  ]){
                    r.label=a[
                      1
                    ], a=l;
                    break
                  }
                  if(a&&r.label<a[
                    2
                  ]){
                    r.label=a[
                      2
                    ], r.ops.push(l);
                    break
                  }
                  a[
                    2
                  ]
                  &&r.ops.pop(), r.trys.pop();
                  continue
                }
                l=t.call(e, r)
              }
              catch(e){
                l=[
                  6, e
                ], o=0
              }
              finally{
                n=a=0
              }
              if(5&l[
                0
              ])throw l[
                1
              ];
              return{
                value:l[
                  0
                ]
                ?l[
                  1
                ]
                :void 0, done:!0
              }
            }
            ([
              l, s
            ])
          }
        }
      }, Ct=function(e, t, n){
        if(n||2===arguments.length)for(var o, a=0, i=t.length;
        a<i;
        a++)!o&&a in t||(o||(o=Array.prototype.slice.call(t, 0, a)), o[
          a
        ]
        =t[
          a
        ]);
        return e.concat(o||Array.prototype.slice.call(t))
      };
      const kt=(0, o.pM)({
        components:{
          NoData:C.A, SvgIcon:_.A, TooltipExt:w.A
        }, props:{
          nodeId:{
            type:Number, required:!0
          }
        }, setup:function(e, t){
          var n=this, r=t.emit, l=(0, o.KR)("referenceResource"), s=(0, o.KR)(null), c=(0, o.KR)(!1), u=(0, o.KR)([
          ]), d=(0, o.KR)(0), p=(0, o.KR)(1), f=(0, o.WQ)(y.d9), v=(0, o.EW)((function(){
            return d.value>u.value.length
          })), h=(0, o.EW)((function(){
            return f.value.knowledgeNodeDetail.uploads.map((function(e){
              return e.id
            }))
          })), m=(0, o.EW)((function(){
            return u.value.map((function(e){
              return e.upload
            }))
          })), w=(0, o.EW)((function(){
            return!b.Br&&!b.dn.value&&b.yb
          })), _=(0, o.EW)((function(){
            return w.value&&f.value.edit
          })), C=function(){
            return wt(n, void 0, void 0, (function(){
              var t;
              return _t(this, (function(n){
                switch(n.label){
                  case 0:return c.value=!0, [
                    4, (0, g.WP)(e.nodeId, p.value)
                  ];
                  case 1:return t=n.sent(), d.value=t.total, r("loaded", d.value), u.value=Ct(Ct([
                  ], u.value, !0), t.items, !0), c.value=!1, [
                    2
                  ]
                }
              }))
            }))
          };
          return(0, a.XDU)(s, (function(){
            return wt(n, void 0, void 0, (function(){
              return _t(this, (function(e){
                switch(e.label){
                  case 0:return!v.value||c.value?[
                    3, 2
                  ]
                  :(p.value++, [
                    4, C()
                  ]);
                  case 1:e.sent(), e.label=2;
                  case 2:return[
                    2
                  ]
                }
              }))
            }))
          }), {
            distance:10
          }), (0, o.sV)((function(){
            return wt(n, void 0, void 0, (function(){
              return _t(this, (function(e){
                switch(e.label){
                  case 0:return[
                    4, C()
                  ];
                  case 1:return e.sent(), [
                    2
                  ]
                }
              }))
            }))
          })), (0, o.wB)((function(){
            return e.nodeId
          }), (function(){
            return wt(n, void 0, void 0, (function(){
              return _t(this, (function(e){
                switch(e.label){
                  case 0:return p.value=1, u.value=[
                  ], [
                    4, C()
                  ];
                  case 1:return e.sent(), [
                    2
                  ]
                }
              }))
            }))
          })), {
            scrollContainer:s, type:l, total:d, resourceReferences:u, disabledUploadIds:h, addKnowledgeNodeResourceReference:function(t){
              return wt(n, void 0, void 0, (function(){
                return _t(this, (function(n){
                  switch(n.label){
                    case 0:return h.value.includes(t)?[
                      2
                    ]
                    :[
                      4, (0, g.A1)(e.nodeId, [
                        {
                          referId:t, referType:"upload"
                        }
                      ])
                    ];
                    case 1:return n.sent(), [
                      4, f.value.fetch()
                    ];
                    case 2:return n.sent(), be.Toast.success(i.default.t("operationSuccess")), [
                      2
                    ]
                  }
                }))
              }))
            }, getIcon:function(e){
              return"folder"!==e.type?"font-file-".concat((0, de.fileTypeByExtension)(e)):"font-cl-resource-folder"
            }, preview:function(e){
              document.fullscreenElement&&document.exitFullscreen(), (0, re.useAngularScope)().$broadcast("previewFiles", m.value, e), yt("#file-previewer").foundation("reveal", "open")
            }, canAddKnowledgeNodeResourceReference:_
          }
        }
      });
      const xt=(0, h.A)(kt, (function(){
        var e=this, t=e.$createElement, n=e._self._c||t;
        return n("div", {
          staticClass:"list"
        }, [
          e.resourceReferences.length>0?n("div", {
            ref:"scrollContainer", staticClass:"scroll-container"
          }, e._l(e.resourceReferences, (function(t){
            return n("div", {
              key:t.id, staticClass:"reference-card"
            }, [
              n("div", {
                staticClass:"left"
              }, [
                n("i", {
                  staticClass:"font left-icon", class:e.getIcon(t.upload)
                }), e._v(" "), n("TooltipExt", {
                  attrs:{
                    text:t.name, placement:"top"
                  }
                })
              ], 1), e._v(" "), n("div", {
                staticClass:"right"
              }, [
                n("Tooltip", {
                  attrs:{
                    content:e.$t("view"), placement:"top"
                  }
                }, [
                  n("div", {
                    staticClass:"btn", on:{
                      click:function(n){
                        return n.stopPropagation(), e.preview(t.upload)
                      }
                    }
                  }, [
                    n("SvgIcon", {
                      staticClass:"operate-icon", attrs:{
                        name:"preview-open"
                      }
                    })
                  ], 1)
                ]), e._v(" "), e.canAddKnowledgeNodeResourceReference?n("Tooltip", {
                  attrs:{
                    content:e.disabledUploadIds.includes(t.upload.id)?e.$t("knowledgeGraph.associationAdded"):e.$t("knowledgeGraph.addToRelatedResource"), placement:"top-end", offset:"12"
                  }
                }, [
                  n("div", {
                    staticClass:"btn", on:{
                      click:function(n){
                        return e.addKnowledgeNodeResourceReference(t.upload.id)
                      }
                    }
                  }, [
                    n("SvgIcon", {
                      staticClass:"operate-icon", class:{
                        disabled:e.disabledUploadIds.includes(t.upload.id)
                      }, attrs:{
                        name:"add-bookmark"
                      }
                    })
                  ], 1)
                ]):e._e()
              ], 1)
            ])
          })), 0):n("NoData", {
            staticClass:"no-data"
          }, [
            e._v("\n    "+e._s(e.$t("knowledgeGraph.noRecommendedResources"))+"\n  ")
          ])
        ], 1)
      }), [
      ], !1, null, "9e472ec6", null).exports, Rt=(0, o.pM)({
        components:{
          NodeRecommendedCapture:bt, NodeRecommendedResourceReference:xt
        }, props:{
          nodeId:{
            type:Number, required:!0
          }
        }, setup:function(){
          var e=(0, o.KR)("referenceResource"), t=(0, o.KR)(0), n=(0, o.KR)(0);
          return{
            type:e, handleCaptureLoaded:function(e){
              t.value=e
            }, captureTotal:t, handleResourceReferenceLoaded:function(e){
              n.value=e
            }, resourceReferenceTotal:n, enableKnowledgeReferenceCapture:b.jI
          }
        }
      });
      const St=(0, h.A)(Rt, (function(){
        var e=this, t=e.$createElement, n=e._self._c||t;
        return n("div", {
          staticClass:"container"
        }, [
          n("div", {
            staticClass:"action"
          }, [
            n("RadioGroup", {
              staticClass:"types", model:{
                value:e.type, callback:function(t){
                  e.type=t
                }, expression:"type"
              }
            }, [
              n("Radio", {
                attrs:{
                  label:"referenceResource"
                }
              }, [
                e._v("\n        "+e._s(e.$t("knowledgeGraph.recommendResources"))+"("+e._s(e.resourceReferenceTotal)+")\n      ")
              ]), e._v(" "), e.enableKnowledgeReferenceCapture?n("Radio", {
                attrs:{
                  label:"capture"
                }
              }, [
                e._v("\n        "+e._s(e.$t("knowledgeGraph.recordings"))+"("+e._s(e.captureTotal)+")\n      ")
              ]):e._e()
            ], 1)
          ], 1), e._v(" "), n("NodeRecommendedResourceReference", {
            directives:[
              {
                name:"show", rawName:"v-show", value:"referenceResource"===e.type, expression:"type === 'referenceResource'"
              }
            ], attrs:{
              "node-id":e.nodeId
            }, on:{
              loaded:e.handleResourceReferenceLoaded
            }
          }), e._v(" "), e.enableKnowledgeReferenceCapture?[
            n("NodeRecommendedCapture", {
              directives:[
                {
                  name:"show", rawName:"v-show", value:"capture"===e.type, expression:"type === 'capture'"
                }
              ], attrs:{
                "node-id":e.nodeId
              }, on:{
                loaded:e.handleCaptureLoaded
              }
            })
          ]
          :e._e()
        ], 2)
      }), [
      ], !1, null, "2a4aed26", null).exports;
      var Et=n(499440), Tt=n(237284);
      const Dt=(0, o.pM)({
        props:{
          value:{
            type:Boolean, required:!0
          }, node:{
            type:Object, required:!0
          }
        }, components:{
          NodeStudentDetail:Et.A, NodeContentDetail:Tt.A
        }, setup:function(e, t){
          var n=t.emit, r=(0, a.hRP)(e, "value", n, {
            eventName:"input"
          }), l=(0, o.KR)("student"), s=(0, o.KR)("".concat(i.default.t("knowledgeGraph.statistics.userNo"), "/").concat(i.default.t("name"))), c=(0, o.KR)(""), u=(0, o.KR)("");
          return{
            show:r, tab:l, placeholder:s, keyword:c, inputValue:u, changeTab:function(e){
              l.value=e, c.value="", u.value="", "student"===e&&(s.value="".concat(i.default.t("knowledgeGraph.statistics.userNo"), "/").concat(i.default.t("name")))
            }, search:function(e){
              c.value=e
            }, subTabChanged:function(e){
              "upload"===e&&(s.value=i.default.t("knowledgeGraph.statistics.resourceName")), "activity"===e&&(s.value=i.default.t("knowledgeGraph.statistics.activityName"))
            }
          }
        }
      });
      const Nt=(0, h.A)(Dt, (function(){
        var e=this, t=e.$createElement, n=e._self._c||t;
        return n("Modal", {
          staticClass:"learning-path-statistic-detail-modal", attrs:{
            "footer-hide":"", width:"900", transfer:!1, "z-index":103
          }, scopedSlots:e._u([
            {
              key:"header", fn:function(){
                return[
                  n("span", {
                    staticClass:"title"
                  }, [
                    e._v(e._s(e.$t("knowledgeGraph.statistics.statisticDetail")))
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
            staticClass:"learning-path-statistic-detail-wrapper"
          }, [
            n("div", {
              staticClass:"tabs-wrapper"
            }, [
              n("div", {
                staticClass:"tabs"
              }, [
                n("div", {
                  staticClass:"tab", class:{
                    active:"student"===e.tab
                  }, on:{
                    click:function(t){
                      return e.changeTab("student")
                    }
                  }
                }, [
                  e._v("\n          "+e._s(e.$t("knowledgeGraph.statistics.byStudent"))+"\n        ")
                ]), e._v(" "), n("div", {
                  staticClass:"tab", class:{
                    active:"content"===e.tab
                  }, on:{
                    click:function(t){
                      return e.changeTab("content")
                    }
                  }
                }, [
                  e._v("\n          "+e._s(e.$t("knowledgeGraph.statistics.byContent"))+"\n        ")
                ])
              ]), e._v(" "), n("div", {
                staticClass:"search"
              }, [
                n("Input", {
                  attrs:{
                    search:"", placeholder:e.placeholder
                  }, on:{
                    "on-search":e.search
                  }, model:{
                    value:e.inputValue, callback:function(t){
                      e.inputValue=t
                    }, expression:"inputValue"
                  }
                })
              ], 1)
            ]), e._v(" "), "student"===e.tab?n("NodeStudentDetail", {
              attrs:{
                keyword:e.keyword, "node-id":e.node.id, stripe:!1
              }
            }):e._e(), e._v(" "), "content"===e.tab?n("NodeContentDetail", {
              staticClass:"node-content-detail", attrs:{
                keyword:e.keyword, "node-id":e.node.id, uploadCount:e.node.data&&e.node.data.resourceRefCount?e.node.data.resourceRefCount:0, activityCount:e.node.data&&e.node.data.activityRefCount?e.node.data.activityRefCount:0, stripe:!1
              }, on:{
                "tab-changed":e.subTabChanged
              }
            }):e._e()
          ], 1)
        ])
      }), [
      ], !1, null, "65277bf2", null).exports;
      var It=function(e, t, n, o){
        return new(n||(n=Promise))((function(a, i){
          function r(e){
            try{
              s(o.next(e))
            }
            catch(e){
              i(e)
            }
          }
          function l(e){
            try{
              s(o.throw(e))
            }
            catch(e){
              i(e)
            }
          }
          function s(e){
            var t;
            e.done?a(e.value):(t=e.value, t instanceof n?t:new n((function(e){
              e(t)
            }))).then(r, l)
          }
          s((o=o.apply(e, t||[
          ])).next())
        }))
      }, At=function(e, t){
        var n, o, a, i, r={
          label:0, sent:function(){
            if(1&a[
              0
            ])throw a[
              1
            ];
            return a[
              1
            ]
          }, trys:[
          ], ops:[
          ]
        };
        return i={
          next:l(0), throw:l(1), return:l(2)
        }, "function"==typeof Symbol&&(i[
          Symbol.iterator
        ]
        =function(){
          return this
        }), i;
        function l(l){
          return function(s){
            return function(l){
              if(n)throw new TypeError("Generator is already executing.");
              for(;
              i&&(i=0, l[
                0
              ]
              &&(r=0)), r;
              )try{
                if(n=1, o&&(a=2&l[
                  0
                ]
                ?o.return:l[
                  0
                ]
                ?o.throw||((a=o.return)&&a.call(o), 0):o.next)&&!(a=a.call(o, l[
                  1
                ])).done)return a;
                switch(o=0, a&&(l=[
                  2&l[
                    0
                  ], a.value
                ]), l[
                  0
                ]){
                  case 0:case 1:a=l;
                  break;
                  case 4:return r.label++, {
                    value:l[
                      1
                    ], done:!1
                  };
                  case 5:r.label++, o=l[
                    1
                  ], l=[
                    0
                  ];
                  continue;
                  case 7:l=r.ops.pop(), r.trys.pop();
                  continue;
                  default:if(!(a=r.trys, (a=a.length>0&&a[
                    a.length-1
                  ])||6!==l[
                    0
                  ]
                  &&2!==l[
                    0
                  ])){
                    r=0;
                    continue
                  }
                  if(3===l[
                    0
                  ]
                  &&(!a||l[
                    1
                  ]
                  >a[
                    0
                  ]
                  &&l[
                    1
                  ]
                  <a[
                    3
                  ])){
                    r.label=l[
                      1
                    ];
                    break
                  }
                  if(6===l[
                    0
                  ]
                  &&r.label<a[
                    1
                  ]){
                    r.label=a[
                      1
                    ], a=l;
                    break
                  }
                  if(a&&r.label<a[
                    2
                  ]){
                    r.label=a[
                      2
                    ], r.ops.push(l);
                    break
                  }
                  a[
                    2
                  ]
                  &&r.ops.pop(), r.trys.pop();
                  continue
                }
                l=t.call(e, r)
              }
              catch(e){
                l=[
                  6, e
                ], o=0
              }
              finally{
                n=a=0
              }
              if(5&l[
                0
              ])throw l[
                1
              ];
              return{
                value:l[
                  0
                ]
                ?l[
                  1
                ]
                :void 0, done:!0
              }
            }
            ([
              l, s
            ])
          }
        }
      };
      const Mt=(0, o.pM)({
        components:{
          NodeDetailBasic:ie, NodeDetailReference:at, NodeDetailStatistics:pt, Facet:B, TeachingCalendarKeywordIndex:m, NodeRelationRecommended:St, StatisticDetailModal:Nt
        }, props:{
          node:{
            type:Object, required:!0
          }, edit:{
            type:Boolean, default:!0
          }, statistics:{
            type:Boolean, default:!1
          }, tab:{
            type:String, default:"basic"
          }
        }, setup:function(e, t){
          var n=this, r=(t.emit, (0, o.KR)(null)), l=(0, o.KR)(!1), s=(0, o.WQ)("isBlueprint", !1), c=null, u=function(){
            return It(n, void 0, void 0, (function(){
              var t;
              return At(this, (function(n){
                switch(n.label){
                  case 0:return c?[
                    4, (0, g.hy)(c)
                  ]
                  :[
                    2
                  ];
                  case 1:return(t=n.sent()).id!==c||(r.value=t, e.node instanceof y.w0&&Object.assign(e.node, r.value)), [
                    2
                  ]
                }
              }))
            }))
          };
          (0, o.Gt)(y.d9, (0, o.KR)({
            knowledgeNodeDetail:r, edit:e.edit, fetch:u
          }));
          var d=(0, o.KR)(!1), p=(0, o.WQ)("allowFacetsAndFragments", !1);
          (0, o.wB)((function(){
            var t;
            return null===(t=e.node)||void 0===t?void 0:t.id
          }), (function(){
            return It(n, void 0, void 0, (function(){
              var t;
              return At(this, (function(n){
                switch(n.label){
                  case 0:return c=null===(t=e.node)||void 0===t?void 0:t.id, d.value=!0, [
                    4, u()
                  ];
                  case 1:return n.sent(), d.value=!1, [
                    2
                  ]
                }
              }))
            }))
          }), {
            immediate:!0
          });
          var f=(0, o.EW)((function(){
            var e;
            return"".concat(i.default.t("knowledgeGraph.reference"), "(").concat((null===(e=r.value)||void 0===e?void 0:e.referenceCount)||0, ")")
          })), v=(0, o.EW)((function(){
            return!b.Br&&(!!b.dn.value||!b.yb)
          })), h=(0, o.EW)((function(){
            return!!b.Br||!b.dn.value&&b.yb
          })), m=(0, o.EW)((function(){
            return"statistics"===e.tab&&h.value&&e.statistics?"statistics":"basic"
          })), w=(0, a.maw)("basicInfoPanel"), _=(0, o.WQ)("course", {
            id:0, type:0
          }), C=(0, o.EW)((function(){
            return 8===_.type
          })), k=(0, o.KR)(!1);
          return{
            fetch:u, isProject:C, saveBasicInfo:function(){
              var e=w.value;
              e&&!0!==e.showModal&&e.handelSubmit(!0)
            }, knowledgeNodeDetail:r, referenceLabel:f, loading:d, canViewNodeDetailInfo:v, canViewNodeStat:h, isSimulatingAsStudent:b.dn, allowFacetsAndFragments:p, showTeachingCalendar:function(e){
              k.value=!0
            }, showTeachingCalendarModal:k, teachingCalendarToggle:window.featureToggles.teaching_calendar, enableKnowledgeReferencePublicResource:b.CN, tabValue:m, showStatisticDetailModal:l, isBlueprint:s
          }
        }
      });
      const $t=(0, h.A)(Mt, (function(){
        var e=this, t=e.$createElement, n=e._self._c||t;
        return e.knowledgeNodeDetail?n("div", {
          staticClass:"container node-detail-panel"
        }, [
          e.canViewNodeStat?n("StatisticDetailModal", {
            attrs:{
              node:e.node
            }, model:{
              value:e.showStatisticDetailModal, callback:function(t){
                e.showStatisticDetailModal=t
              }, expression:"showStatisticDetailModal"
            }
          }):e._e(), e._v(" "), n("Modal", {
            staticClass:"teaching-calendar-modal", attrs:{
              width:"1100", "footer-hide":"", title:e.$t("teachingCalendar.title"), transfer:!1
            }, model:{
              value:e.showTeachingCalendarModal, callback:function(t){
                e.showTeachingCalendarModal=t
              }, expression:"showTeachingCalendarModal"
            }
          }, [
            e.showTeachingCalendarModal?n("TeachingCalendarKeywordIndex", {
              attrs:{
                keyword:e.node.text||e.node.name
              }
            }):e._e()
          ], 1), e._v(" "), n("div", {
            staticClass:"node-header inset-x"
          }, [
            n("h2", [
              e._v(e._s(e.node.text||e.node.name))
            ]), e._v(" "), !e.teachingCalendarToggle||e.isProject||e.isBlueprint?e._e():n("Button", {
              staticClass:"teaching-calendar-btn", attrs:{
                size:"small"
              }, on:{
                click:function(t){
                  return e.showTeachingCalendar(e.node.text||e.node.name)
                }
              }
            }, [
              n("i", {
                staticClass:"font font-calendar-event"
              }), e._v("\n      "+e._s(e.$t("teachingCalendar.title"))+"\n    ")
            ])
          ], 1), e._v(" "), n("div", {
            staticClass:"loading-content"
          }, [
            e.loading?n("Spin", {
              attrs:{
                fix:""
              }
            }):e._e(), e._v(" "), e.canViewNodeDetailInfo?n("div", {
              staticClass:"info"
            }, [
              e._v("\n      "+e._s(e.$t("knowledgeGraph.completeRateIs"))+"\n      "), n("b", [
                e._v(e._s(e.knowledgeNodeDetail.completenessRate))
              ]), e._v(" "), n("span", [
                e._v("\n        （"+e._s(e.$t("knowledgeGraph.rake", {
                  n:e.isSimulatingAsStudent?"--":e.knowledgeNodeDetail.completenessRank
                }))+"）\n      ")
              ]), e._v("\n      ，"+e._s(e.$t("knowledgeGraph.masteryRateIs"))+"\n      "), n("b", [
                e._v(e._s(e.knowledgeNodeDetail.masteryRate))
              ]), e._v(" "), n("span", [
                e._v("\n        （"+e._s(e.$t("knowledgeGraph.rake", {
                  n:e.isSimulatingAsStudent?"--":e.knowledgeNodeDetail.masteryRank
                }))+"）\n      ")
              ])
            ]):e._e(), e._v(" "), e.knowledgeNodeDetail?n("Tabs", {
              staticClass:"tabs", attrs:{
                value:e.tabValue, name:"node-content-tabs"
              }
            }, [
              n("TabPane", {
                directives:[
                  {
                    name:"click-outside-el", rawName:"v-click-outside-el", value:e.saveBasicInfo, expression:"saveBasicInfo"
                  }
                ], staticClass:"inset-x pane", attrs:{
                  label:e.$t("knowledgeGraph.basicInfo"), name:"basic", tab:"node-content-tabs"
                }
              }, [
                n("div", [
                  n("NodeDetailBasic", {
                    key:e.node.id, ref:"basicInfoPanel", attrs:{
                      node:e.node, "node-detail":e.knowledgeNodeDetail
                    }, on:{
                      "update-node-name":function(t){
                        return e.$emit("update-node-name", t)
                      }
                    }
                  })
                ], 1)
              ]), e._v(" "), e.allowFacetsAndFragments?n("TabPane", {
                staticClass:"inset-x pane", attrs:{
                  label:e.$t("knowledgeGraph.facetNFragment"), name:"facets", tab:"node-content-tabs"
                }
              }, [
                n("Facet", {
                  attrs:{
                    "node-id":e.node.id
                  }
                })
              ], 1):e._e(), e._v(" "), n("TabPane", {
                staticClass:"inset-x flex overflow-y-auto", attrs:{
                  label:e.$t("knowledgeGraph.material"), name:"textbook"
                }
              }, [
                n("NodeDetailReference", {
                  key:e.node.id, attrs:{
                    node:e.node
                  }
                })
              ], 1), e._v(" "), e.enableKnowledgeReferencePublicResource&&!e.isBlueprint?n("TabPane", {
                attrs:{
                  name:"relation-recommended", label:e.$t("knowledgeGraph.recommended")
                }
              }, [
                n("NodeRelationRecommended", {
                  attrs:{
                    "node-id":e.node.id
                  }
                })
              ], 1):e._e(), e._v(" "), e.canViewNodeStat&&e.statistics&&!e.isBlueprint?n("TabPane", {
                staticClass:"inset-x pane", attrs:{
                  label:e.$t("knowledgeGraph.statistics.title"), name:"statistics", tab:"node-content-tabs"
                }
              }, [
                n("NodeDetailStatistics", {
                  on:{
                    "detail-click":function(t){
                      e.showStatisticDetailModal=!0
                    }
                  }
                })
              ], 1):e._e()
            ], 1):e._e()
          ], 1)
        ], 1):e._e()
      }), [
      ], !1, null, "3487b8c5", null).exports
    }
  }
]);
