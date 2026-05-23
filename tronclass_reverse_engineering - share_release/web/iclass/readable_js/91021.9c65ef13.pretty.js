(self.webpackChunklms=self.webpackChunklms||[
]).push([
  [
    49134, 91021
  ], {
    5782:(e, t, n)=>{
      n.r(t), n.d(t, {
        default:()=>u, install:()=>c
      });
      var r=n(962893);
      function a(e, t){
        var n=Object.keys(e);
        if(Object.getOwnPropertySymbols){
          var r=Object.getOwnPropertySymbols(e);
          t&&(r=r.filter((function(t){
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
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
          t%2?a(Object(n), !0).forEach((function(t){
            o(e, t, n[
              t
            ])
          })):Object.getOwnPropertyDescriptors?Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }
      function o(e, t, n){
        return t in e?Object.defineProperty(e, t, {
          value:n, enumerable:!0, configurable:!0, writable:!0
        }):e[
          t
        ]
        =n, e
      }
      function s(e){
        var t=arguments.length>1&&void 0!==arguments[
          1
        ]
        ?arguments[
          1
        ]
        :{
        }, n=arguments.length>2&&void 0!==arguments[
          2
        ]
        ?arguments[
          2
        ]
        :null, a=arguments.length>3&&void 0!==arguments[
          3
        ]
        ?arguments[
          3
        ]
        :{
        }, o=r.default.extend({
          render:n=>n(e, i({
            props:t
          }, a))
        }), s=new o({
          parent:n
        }).$mount();
        document.body.appendChild(s.$el);
        var c=s.$children[
          0
        ];
        c.visible=!0;
        var u=c.$refs.modal;
        u&&(u.$on("on-cancel", (()=>{
          setTimeout((()=>{
            (c.getComponentName&&"VocabularyForm"===c.getComponentName()||t.destroyComponent)&&(s.$destroy(), s.$el.remove())
          }), 300)
        })), u.$on("on-visible-change", (e=>{
          !e&&t.destroyComponent&&setTimeout((()=>{
            s.$destroy(), s.$el.remove()
          }), 1e3)
        })))
      }
      var c=()=>{
        r.default.prototype.$Modal&&(r.default.prototype.$Modal.show=s)
      };
      const u=s
    }, 19505:(e, t, n)=>{
      n.d(t, {
        bM:()=>M, W1:()=>A, qA:()=>h, dj:()=>b, qE:()=>y, TP:()=>T, dc:()=>x, o1:()=>k, o7:()=>g, d8:()=>w, eh:()=>E, ZY:()=>_, YO:()=>j, $u:()=>C, Oi:()=>S
      });
      n(540590), n(418665), n(269193), n(14602);
      var r=n(272505), a=n.n(r), i=n(220521), o=n(531348), s=n(218831), c=n(920453), u=n(738645), l=n(510543), d=n(152229), p=function(e, t, n, r){
        var a, i=arguments.length, o=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t, n):r;
        if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e, t, n, r);
        else for(var s=e.length-1;
        s>=0;
        s--)(a=e[
          s
        ])&&(o=(i<3?a(o):i>3?a(t, n, o):a(t, n))||o);
        return i>3&&o&&Object.defineProperty(t, n, o), o
      }, v=function(){
        function e(){
          this.children=[
          ]
        }
        return p([
          (0, u.v)({
            name:"id"
          })
        ], e.prototype, "id", void 0), p([
          (0, u.v)({
            name:"name"
          })
        ], e.prototype, "name", void 0), p([
          (0, u.v)(), (0, l.d)((function(e){
            e.value;
            return e.obj.name
          }))
        ], e.prototype, "title", void 0), p([
          (0, u.v)(), (0, l.d)((function(e){
            e.value;
            return e.obj.id
          }))
        ], e.prototype, "nodeKey", void 0), p([
          (0, u.v)(), (0, d.Z)((function(){
            return e
          }))
        ], e.prototype, "children", void 0), e
      }
      (), m=function(e, t, n, r){
        return new(n||(n=Promise))((function(a, i){
          function o(e){
            try{
              c(r.next(e))
            }
            catch(e){
              i(e)
            }
          }
          function s(e){
            try{
              c(r.throw(e))
            }
            catch(e){
              i(e)
            }
          }
          function c(e){
            var t;
            e.done?a(e.value):(t=e.value, t instanceof n?t:new n((function(e){
              e(t)
            }))).then(o, s)
          }
          c((r=r.apply(e, t||[
          ])).next())
        }))
      }, f=function(e, t){
        var n, r, a, i, o={
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
          next:s(0), throw:s(1), return:s(2)
        }, "function"==typeof Symbol&&(i[
          Symbol.iterator
        ]
        =function(){
          return this
        }), i;
        function s(s){
          return function(c){
            return function(s){
              if(n)throw new TypeError("Generator is already executing.");
              for(;
              i&&(i=0, s[
                0
              ]
              &&(o=0)), o;
              )try{
                if(n=1, r&&(a=2&s[
                  0
                ]
                ?r.return:s[
                  0
                ]
                ?r.throw||((a=r.return)&&a.call(r), 0):r.next)&&!(a=a.call(r, s[
                  1
                ])).done)return a;
                switch(r=0, a&&(s=[
                  2&s[
                    0
                  ], a.value
                ]), s[
                  0
                ]){
                  case 0:case 1:a=s;
                  break;
                  case 4:return o.label++, {
                    value:s[
                      1
                    ], done:!1
                  };
                  case 5:o.label++, r=s[
                    1
                  ], s=[
                    0
                  ];
                  continue;
                  case 7:s=o.ops.pop(), o.trys.pop();
                  continue;
                  default:if(!(a=o.trys, (a=a.length>0&&a[
                    a.length-1
                  ])||6!==s[
                    0
                  ]
                  &&2!==s[
                    0
                  ])){
                    o=0;
                    continue
                  }
                  if(3===s[
                    0
                  ]
                  &&(!a||s[
                    1
                  ]
                  >a[
                    0
                  ]
                  &&s[
                    1
                  ]
                  <a[
                    3
                  ])){
                    o.label=s[
                      1
                    ];
                    break
                  }
                  if(6===s[
                    0
                  ]
                  &&o.label<a[
                    1
                  ]){
                    o.label=a[
                      1
                    ], a=s;
                    break
                  }
                  if(a&&o.label<a[
                    2
                  ]){
                    o.label=a[
                      2
                    ], o.ops.push(s);
                    break
                  }
                  a[
                    2
                  ]
                  &&o.ops.pop(), o.trys.pop();
                  continue
                }
                s=t.call(e, o)
              }
              catch(e){
                s=[
                  6, e
                ], r=0
              }
              finally{
                n=a=0
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
              s, c
            ])
          }
        }
      };
      function b(e, t, n){
        return m(this, void 0, void 0, (function(){
          var r, o, u, l;
          return f(this, (function(d){
            switch(d.label){
              case 0:return r=(0, s.decamelizeKeys)({
                page:t, pageSize:n, includeMakeUp:!0
              }), [
                4, a().get("/api/exams/".concat(e, "/retake-record"), {
                  params:r
                })
              ];
              case 1:return o=d.sent(), u=(0, s.camelizeKeys)(o.data.items), l=(0, c.plainToClass)(i.xg, u, {
                excludeExtraneousValues:!0
              }), [
                2, {
                  page:t, pageSize:n, pages:o.data.pages, total:o.data.total, items:l
                }
              ]
            }
          }))
        }))
      }
      function y(e){
        return m(this, void 0, void 0, (function(){
          return f(this, (function(t){
            return[
              2, a().get("/api/exams/".concat(e, "/subjective-questions"))
            ]
          }))
        }))
      }
      function h(e){
        return m(this, void 0, void 0, (function(){
          return f(this, (function(t){
            return[
              2, a().get("/api/exams/".concat(e))
            ]
          }))
        }))
      }
      function _(e, t){
        return m(this, void 0, void 0, (function(){
          var n, r;
          return f(this, (function(i){
            switch(i.label){
              case 0:return[
                4, a().get("/api/subjects/".concat(e), {
                  params:{
                    can_select_sub_subject:!0, exam_id:t
                  }
                })
              ];
              case 1:return n=i.sent(), r=(0, s.camelizeKeys)(n.data), [
                2, (0, c.plainToClass)(o.B, r, {
                  excludeExtraneousValues:!0
                })
              ]
            }
          }))
        }))
      }
      function g(e, t, n){
        return m(this, void 0, void 0, (function(){
          return f(this, (function(r){
            return[
              2, a().get("/api/exams/".concat(e, "/subjects/").concat(t, "/examinees?is_makeup_exam=").concat(n))
            ]
          }))
        }))
      }
      function w(e, t, n){
        return m(this, void 0, void 0, (function(){
          return f(this, (function(r){
            return[
              2, a().get("/api/exams/".concat(e, "/subjects/").concat(t, "/groups?is_makeup_exam=").concat(n))
            ]
          }))
        }))
      }
      function x(e, t, n, r){
        return m(this, void 0, void 0, (function(){
          return f(this, (function(i){
            return[
              2, a().get("/api/exams/".concat(e, "/subjects/").concat(t, "/examinees/").concat(n, "/submissions?is_makeup_exam=").concat(r))
            ]
          }))
        }))
      }
      function k(e, t, n, r){
        return m(this, void 0, void 0, (function(){
          return f(this, (function(i){
            return[
              2, a().get("/api/exams/".concat(e, "/subjects/").concat(t, "/groups/").concat(n, "/submissions?is_makeup_exam=").concat(r))
            ]
          }))
        }))
      }
      function S(e, t, n){
        return m(this, void 0, void 0, (function(){
          return f(this, (function(r){
            return[
              2, a().put("/api/exams/".concat(e, "/submissions/").concat(t, "/comment"), n)
            ]
          }))
        }))
      }
      function j(e, t){
        return m(this, void 0, void 0, (function(){
          return f(this, (function(n){
            return[
              2, a().post("/api/exams/".concat(e, "/give-score"), t)
            ]
          }))
        }))
      }
      function C(e, t){
        return m(this, void 0, void 0, (function(){
          return f(this, (function(n){
            return[
              2, a().post("/api/exams/".concat(e, "/give-scores"), t)
            ]
          }))
        }))
      }
      function M(e){
        return m(this, void 0, void 0, (function(){
          return f(this, (function(t){
            return[
              2, a().delete("/api/uploads/marked_attachment/".concat(e))
            ]
          }))
        }))
      }
      var A=function(e){
        return m(void 0, void 0, void 0, (function(){
          var t;
          return f(this, (function(n){
            switch(n.label){
              case 0:return[
                4, a().get("/api/courses/".concat(e, "/exams"))
              ];
              case 1:return t=n.sent().data, [
                2, (0, c.plainToClass)(i.yf, (0, s.camelizeKeys)(t.exams))
              ]
            }
          }))
        }))
      }, E=function(e){
        return m(void 0, void 0, void 0, (function(){
          var t;
          return f(this, (function(n){
            switch(n.label){
              case 0:return[
                4, a().get("/api/course/".concat(e, "/knowledge-nodes"))
              ];
              case 1:return t=n.sent(), [
                2, (0, c.plainToClass)(v, t.data.items, {
                  excludeExtraneousValues:!0
                })
              ]
            }
          }))
        }))
      }, T=function(e, t, n, r){
        return m(void 0, void 0, void 0, (function(){
          var i, u;
          return f(this, (function(l){
            switch(l.label){
              case 0:return i="/api/exams/".concat(e, "/subjects?keyword=").concat(n, "&is_makeup_exam=").concat(t), "all"!==r&&(i+="&subject_type=".concat(r)), [
                4, a().get(i)
              ];
              case 1:return u=l.sent(), [
                2, (0, c.plainToClass)(o.B, (0, s.camelizeKeys)(u.data.subjects), {
                  excludeExtraneousValues:!0, exposeDefaultValues:!0
                })
              ]
            }
          }))
        }))
      }
    }, 33400:(e, t, n)=>{
      n.d(t, {
        A:()=>s
      });
      var r=n(595738), a=n(945208), i=n(790965);
      const o=(0, r.pM)({
        name:"Avatar", props:{
          user:{
            type:Object, required:!0
          }
        }, setup:function(e){
          var t=(0, r.EW)((function(){
            return e.user.avatarBigUrl||e.user.avatarSmallUrl||i
          }));
          return{
            avatar:a.default, imgUrl:t
          }
        }
      });
      const s=(0, n(514486).A)(o, (function(){
        var e=this, t=e.$createElement, n=e._self._c||t;
        return n("div", {
          staticClass:"wgAvatar"
        }, [
          e.user.avatarBigUrl||e.user.avatarSmallUrl?n("img", {
            attrs:{
              src:e.imgUrl
            }
          }):n("svg", {
            staticClass:"avatar-svg", attrs:{
              viewBox:e.avatar.viewBox
            }
          }, [
            n("use", {
              attrs:{
                "xlink:href":"#"+e.avatar.id
              }
            })
          ])
        ])
      }), [
      ], !1, null, null, null).exports
    }, 112060:(e, t, n)=>{
      n.d(t, {
        FW:()=>o, _O:()=>c
      });
      var r=n(738645), a=n(152229), i=function(e, t, n, r){
        var a, i=arguments.length, o=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t, n):r;
        if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e, t, n, r);
        else for(var s=e.length-1;
        s>=0;
        s--)(a=e[
          s
        ])&&(o=(i<3?a(o):i>3?a(t, n, o):a(t, n))||o);
        return i>3&&o&&Object.defineProperty(t, n, o), o
      }, o=function(){
        function e(){
        }
        return i([
          (0, r.v)()
        ], e.prototype, "id", void 0), i([
          (0, r.v)()
        ], e.prototype, "orgId", void 0), i([
          (0, r.v)()
        ], e.prototype, "parentId", void 0), i([
          (0, r.v)()
        ], e.prototype, "ccLicenseId", void 0), i([
          (0, r.v)()
        ], e.prototype, "referrerId", void 0), i([
          (0, r.v)()
        ], e.prototype, "name", void 0), i([
          (0, r.v)()
        ], e.prototype, "ccLicenseName", void 0), i([
          (0, r.v)()
        ], e.prototype, "ccLicenseLink", void 0), i([
          (0, r.v)()
        ], e.prototype, "ccLicenseCode", void 0), i([
          (0, r.v)()
        ], e.prototype, "ccLicenseDescription", void 0), i([
          (0, r.v)()
        ], e.prototype, "referrerType", void 0), i([
          (0, r.v)()
        ], e.prototype, "resourceType", void 0), i([
          (0, r.v)()
        ], e.prototype, "auditStatus", void 0), i([
          (0, r.v)()
        ], e.prototype, "openScope", void 0), i([
          (0, r.v)()
        ], e.prototype, "allowDownload", void 0), i([
          (0, r.v)()
        ], e.prototype, "allowSave", void 0), i([
          (0, r.v)()
        ], e.prototype, "isFolder", void 0), i([
          (0, r.v)()
        ], e.prototype, "reported", void 0), i([
          (0, r.v)()
        ], e.prototype, "selected", void 0), i([
          (0, r.v)()
        ], e.prototype, "_checked", void 0), i([
          (0, r.v)()
        ], e.prototype, "upload", void 0), i([
          (0, r.v)()
        ], e.prototype, "subjectLibrary", void 0), i([
          (0, r.v)()
        ], e.prototype, "slide", void 0), i([
          (0, r.v)()
        ], e.prototype, "coursePackage", void 0), i([
          (0, r.v)()
        ], e.prototype, "lessonResource", void 0), i([
          (0, r.v)()
        ], e.prototype, "percentage", void 0), i([
          (0, r.v)()
        ], e.prototype, "courseCode", void 0), e
      }
      (), s=function(){
        function e(){
        }
        return i([
          (0, r.v)()
        ], e.prototype, "id", void 0), i([
          (0, r.v)()
        ], e.prototype, "name", void 0), i([
          (0, r.v)({
            name:"user_no"
          })
        ], e.prototype, "userNo", void 0), e
      }
      (), c=function(){
        function e(){
          this.createdAt="", this.createdById=0, this.createdBy=null, this.allowDownload=!1, this.uploadedAt="", this.referenceId=0
        }
        return i([
          (0, r.v)()
        ], e.prototype, "id", void 0), i([
          (0, r.v)()
        ], e.prototype, "name", void 0), i([
          (0, r.v)()
        ], e.prototype, "size", void 0), i([
          (0, r.v)()
        ], e.prototype, "type", void 0), i([
          (0, r.v)()
        ], e.prototype, "status", void 0), i([
          (0, r.v)()
        ], e.prototype, "link", void 0), i([
          (0, r.v)()
        ], e.prototype, "key", void 0), i([
          (0, r.v)({
            name:"created_at"
          })
        ], e.prototype, "createdAt", void 0), i([
          (0, r.v)({
            name:"created_by_id"
          })
        ], e.prototype, "createdById", void 0), i([
          (0, r.v)({
            name:"created_by"
          }), (0, a.Z)((function(){
            return s
          }))
        ], e.prototype, "createdBy", void 0), i([
          (0, r.v)({
            name:"allow_download"
          })
        ], e.prototype, "allowDownload", void 0), i([
          (0, r.v)({
            name:"uploaded_at"
          })
        ], e.prototype, "uploadedAt", void 0), i([
          (0, r.v)({
            name:"reference_id"
          })
        ], e.prototype, "referenceId", void 0), e
      }
      ();
      (function(){
        function e(){
        }
        i([
          (0, r.v)()
        ], e.prototype, "id", void 0), i([
          (0, r.v)()
        ], e.prototype, "title", void 0), i([
          (0, r.v)()
        ], e.prototype, "type", void 0), i([
          (0, r.v)()
        ], e.prototype, "isShared", void 0)
      })(), function(){
        function e(){
        }
        i([
          (0, r.v)()
        ], e.prototype, "id", void 0), i([
          (0, r.v)()
        ], e.prototype, "title", void 0), i([
          (0, r.v)()
        ], e.prototype, "videoId", void 0), i([
          (0, r.v)()
        ], e.prototype, "demandId", void 0), i([
          (0, r.v)()
        ], e.prototype, "templateId", void 0)
      }
      (), function(){
        function e(){
        }
        i([
          (0, r.v)()
        ], e.prototype, "id", void 0), i([
          (0, r.v)()
        ], e.prototype, "name", void 0), i([
          (0, r.v)()
        ], e.prototype, "isFolder", void 0), i([
          (0, r.v)()
        ], e.prototype, "parentId", void 0)
      }
      (), function(){
        function e(){
        }
        i([
          (0, r.v)()
        ], e.prototype, "id", void 0), i([
          (0, r.v)()
        ], e.prototype, "name", void 0), i([
          (0, r.v)()
        ], e.prototype, "mimetype", void 0), i([
          (0, r.v)()
        ], e.prototype, "appId", void 0)
      }
      ()
    }, 160746:(e, t, n)=>{
      n.d(t, {
        A:()=>r
      });
      const r={
        i:{
          page:{
            item:"筆", items:"筆", page:"筆/頁"
          }
        }
      }
    }, 213096:(e, t, n)=>{
      n.d(t, {
        s:()=>o
      });
      var r=n(552979), a=n(962893), i=n(595738), o=function(){
        var e=(0, i.nI)(), t=(null==e?void 0:e.proxy)||e||new a.default({
        });
        return{
          locale:(0, i.EW)({
            get:function(){
              return r.default.locale
            }, set:function(e){
              r.default.locale=e
            }
          }), t:t.$t.bind(t), tc:t.$tc.bind(t), d:t.$d.bind(t), te:t.$te.bind(t), n:t.$n.bind(t)
        }
      }
    }, 220521:(e, t, n)=>{
      n.d(t, {
        Od:()=>v, YJ:()=>m, dV:()=>d, vy:()=>c, xg:()=>l, yf:()=>p
      });
      var r=n(738645), a=n(152229), i=n(510543), o=n(731904), s=function(e, t, n, r){
        var a, i=arguments.length, o=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t, n):r;
        if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e, t, n, r);
        else for(var s=e.length-1;
        s>=0;
        s--)(a=e[
          s
        ])&&(o=(i<3?a(o):i>3?a(t, n, o):a(t, n))||o);
        return i>3&&o&&Object.defineProperty(t, n, o), o
      }, c=(function(){
        function e(){
        }
        s([
          (0, r.v)()
        ], e.prototype, "id", void 0), s([
          (0, r.v)()
        ], e.prototype, "userNo", void 0), s([
          (0, r.v)()
        ], e.prototype, "name", void 0)
      }
      (), function(){
        function e(){
        }
        return s([
          (0, r.v)()
        ], e.prototype, "id", void 0), s([
          (0, r.v)()
        ], e.prototype, "userNo", void 0), s([
          (0, r.v)()
        ], e.prototype, "name", void 0), s([
          (0, r.v)()
        ], e.prototype, "markStatus", void 0), e
      }
      ()), u=function(){
        function e(){
        }
        return s([
          (0, r.v)()
        ], e.prototype, "id", void 0), s([
          (0, r.v)()
        ], e.prototype, "userNo", void 0), s([
          (0, r.v)()
        ], e.prototype, "name", void 0), e
      }
      (), l=function(){
        function e(){
        }
        return s([
          (0, r.v)()
        ], e.prototype, "id", void 0), s([
          (0, r.v)()
        ], e.prototype, "examId", void 0), s([
          (0, r.v)(), (0, a.Z)((function(){
            return c
          }))
        ], e.prototype, "examinee", void 0), s([
          (0, r.v)(), (0, i.d)((function(e){
            e.value;
            return e.obj.exam.referrerType
          }), {
            toClassOnly:!0
          })
        ], e.prototype, "examType", void 0), s([
          (0, r.v)(), (0, i.d)((function(e){
            e.value;
            var t=e.obj;
            return o.TimeUtils.toLocalDate(t.submittedAt)
          }), {
            toClassOnly:!0
          })
        ], e.prototype, "submitTime", void 0), s([
          (0, r.v)(), (0, a.Z)((function(){
            return u
          })), (0, i.d)((function(e){
            e.value;
            return e.obj.createdBy
          }), {
            toClassOnly:!0
          })
        ], e.prototype, "retakeOperator", void 0), s([
          (0, r.v)(), (0, i.d)((function(e){
            e.value;
            var t=e.obj;
            return o.TimeUtils.toLocalDate(t.createdAt)
          }), {
            toClassOnly:!0
          })
        ], e.prototype, "retakeOperateTime", void 0), e
      }
      (), d=function(){
        function e(){
        }
        return s([
          (0, r.v)()
        ], e.prototype, "id", void 0), s([
          (0, r.v)()
        ], e.prototype, "description", void 0), s([
          (0, r.v)()
        ], e.prototype, "index", void 0), s([
          (0, r.v)()
        ], e.prototype, "status", void 0), s([
          (0, r.v)()
        ], e.prototype, "type", void 0), e
      }
      (), p=function(){
        function e(){
          this.completionCriterionKey="submitted", this.completionCriterionValue="0", this.hasMakeUpUser=!1
        }
        return s([
          (0, r.v)()
        ], e.prototype, "id", void 0), s([
          (0, r.v)()
        ], e.prototype, "title", void 0), s([
          (0, r.v)()
        ], e.prototype, "groupSetId", void 0), s([
          (0, r.v)()
        ], e.prototype, "completionCriterionKey", void 0), s([
          (0, r.v)()
        ], e.prototype, "completionCriterionValue", void 0), s([
          (0, r.v)()
        ], e.prototype, "hasMakeUpUser", void 0), e
      }
      (), v=function(){
        function e(){
        }
        return s([
          (0, r.v)()
        ], e.prototype, "id", void 0), s([
          (0, r.v)()
        ], e.prototype, "examId", void 0), s([
          (0, r.v)()
        ], e.prototype, "instanceId", void 0), s([
          (0, r.v)()
        ], e.prototype, "examineeId", void 0), s([
          (0, r.v)()
        ], e.prototype, "submissionData", void 0), s([
          (0, r.v)()
        ], e.prototype, "scoreData", void 0), s([
          (0, r.v)()
        ], e.prototype, "commentData", void 0), s([
          (0, r.v)()
        ], e.prototype, "markedAttachments", void 0), s([
          (0, r.v)(), (0, i.d)((function(e){
            e.value;
            var t=e.obj;
            return o.TimeUtils.toLocalDate(t.submittedAt)
          }), {
            toClassOnly:!0
          })
        ], e.prototype, "submittedAt", void 0), s([
          (0, r.v)()
        ], e.prototype, "draftData", void 0), e
      }
      (), m=function(){
        function e(){
        }
        return s([
          (0, r.v)()
        ], e.prototype, "id", void 0), s([
          (0, r.v)()
        ], e.prototype, "markStatus", void 0), s([
          (0, r.v)()
        ], e.prototype, "name", void 0), s([
          (0, r.v)()
        ], e.prototype, "examineeIds", void 0), e
      }
      ();
      !function(){
        function e(){
        }
        s([
          (0, r.v)()
        ], e.prototype, "sort", void 0), s([
          (0, r.v)()
        ], e.prototype, "content", void 0)
      }
      ()
    }, 316503:(e, t, n)=>{
      n.d(t, {
        A:()=>s
      });
      var r=n(595738), a=n(979278), i=n(552979);
      const o=(0, r.pM)({
        components:{
          SvgIcon:a.A
        }, props:{
          animationCount:{
            type:Number, default:4
          }, generateText:{
            type:String, default:i.default.t("air.onGenerate")
          }, simpleMode:{
            type:Boolean, default:!1
          }, showChatbot:{
            type:Boolean, default:!0
          }
        }
      });
      const s=(0, n(514486).A)(o, (function(){
        var e=this, t=e.$createElement, n=e._self._c||t;
        return e.simpleMode?n("div", {
          staticClass:"aiGenerating isSimple"
        }, [
          n("span"), e._v(" "), n("span"), e._v(" "), n("span")
        ]):n("div", {
          staticClass:"aiGenerating"
        }, [
          n("div", {
            staticClass:"generatingMessage"
          }, [
            e.showChatbot?n("div", {
              staticClass:"aiChatbot"
            }, [
              n("SvgIcon", {
                attrs:{
                  name:"ai-chatbot-icon"
                }
              })
            ], 1):e._e(), e._v(" "), n("div", {
              staticClass:"generatingMessageText"
            }, [
              e._t("message", [
                n("span", [
                  e._v(e._s(e.generateText))
                ])
              ])
            ], 2)
          ]), e._v(" "), n("div", {
            staticClass:"generatingAnimation"
          }, e._l(e.animationCount, (function(t){
            return n("div", {
              key:t, staticClass:"generatingAnimation-content"
            }, [
              n("div", {
                staticClass:"generatingAnimation-bar"
              }), e._v(" "), n("div", {
                staticClass:"generatingAnimation-bar"
              }), e._v(" "), n("div", {
                staticClass:"generatingAnimation-bar"
              }), e._v(" "), n("div", {
                staticClass:"generatingAnimation-bar"
              })
            ])
          })), 0)
        ])
      }), [
      ], !1, null, "99e3b292", null).exports
    }, 392445:(e, t, n)=>{
      n.d(t, {
        A:()=>r
      });
      const r=new(n(962893).default)
    }, 448743:(e, t, n)=>{
      n.r(t), n.d(t, {
        AvaLiveInfo:()=>m, BaseCourse:()=>l, ChinamCloudLive:()=>p, CourseAuditReference:()=>h, CourseDetail:()=>f, CourseForm:()=>g, CourseType:()=>r, CourseWithResourceNum:()=>b, Module:()=>d, OnoCourseStatUser:()=>_, SelectedCourse:()=>u, TopCourse:()=>c, Upload:()=>y, liveStatus:()=>v
      });
      var r, a=n(738645), i=n(510543), o=n(88595), s=function(e, t, n, r){
        var a, i=arguments.length, o=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t, n):r;
        if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e, t, n, r);
        else for(var s=e.length-1;
        s>=0;
        s--)(a=e[
          s
        ])&&(o=(i<3?a(o):i>3?a(t, n, o):a(t, n))||o);
        return i>3&&o&&Object.defineProperty(t, n, o), o
      }, c=function(){
        function e(){
        }
        return s([
          (0, a.v)()
        ], e.prototype, "id", void 0), s([
          (0, a.v)()
        ], e.prototype, "name", void 0), s([
          (0, a.v)()
        ], e.prototype, "courseCode", void 0), s([
          (0, a.v)()
        ], e.prototype, "rank", void 0), e
      }
      (), u=function(){
        function e(){
          this.selected=!1
        }
        return s([
          (0, a.v)()
        ], e.prototype, "id", void 0), s([
          (0, a.v)()
        ], e.prototype, "orgId", void 0), s([
          (0, a.v)()
        ], e.prototype, "name", void 0), s([
          (0, a.v)()
        ], e.prototype, "selected", void 0), s([
          (0, a.v)()
        ], e.prototype, "courseCode", void 0), e
      }
      (), l=function(){
        function e(){
        }
        return s([
          (0, a.v)()
        ], e.prototype, "id", void 0), s([
          (0, a.v)()
        ], e.prototype, "name", void 0), s([
          (0, a.v)()
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
      (r||(r={
      }));
      var d=function(){
        function e(){
          this.syllabuses=[
          ]
        }
        return s([
          (0, i.d)((function(e){
            var t=e.value;
            return o.A.toLocalDateTime(t)
          }), {
            toClassOnly:!0
          })
        ], e.prototype, "createdAt", void 0), s([
          (0, i.d)((function(e){
            var t=e.value;
            return o.A.toLocalDateTime(t)
          }), {
            toClassOnly:!0
          })
        ], e.prototype, "updatedAt", void 0), e
      }
      (), p=function(){
      }, v=[
        "all", "not_started", "in_progress", "finished"
      ], m=function(){
        function e(){
        }
        return s([
          (0, a.v)()
        ], e.prototype, "title", void 0), s([
          (0, a.v)()
        ], e.prototype, "startTime", void 0), s([
          (0, a.v)()
        ], e.prototype, "endTime", void 0), s([
          (0, a.v)(), (0, i.d)((function(e){
            var t=e.value;
            return v[
              t
            ]
          }))
        ], e.prototype, "liveState", void 0), s([
          (0, a.v)()
        ], e.prototype, "url", void 0), e
      }
      (), f=function(){
        function e(){
        }
        return s([
          (0, a.v)()
        ], e.prototype, "id", void 0), s([
          (0, a.v)()
        ], e.prototype, "name", void 0), s([
          (0, a.v)()
        ], e.prototype, "academicYear", void 0), s([
          (0, a.v)()
        ], e.prototype, "compulsory", void 0), s([
          (0, a.v)()
        ], e.prototype, "courseCode", void 0), s([
          (0, a.v)()
        ], e.prototype, "org", void 0), s([
          (0, a.v)()
        ], e.prototype, "semester", void 0), s([
          (0, a.v)()
        ], e.prototype, "startDate", void 0), s([
          (0, a.v)()
        ], e.prototype, "activityCount", void 0), e
      }
      (), b=function(){
        function e(){
        }
        return s([
          (0, a.v)()
        ], e.prototype, "courseCode", void 0), s([
          (0, a.v)()
        ], e.prototype, "orgId", void 0), s([
          (0, a.v)()
        ], e.prototype, "id", void 0), s([
          (0, a.v)()
        ], e.prototype, "name", void 0), s([
          (0, a.v)()
        ], e.prototype, "courseType", void 0), s([
          (0, a.v)()
        ], e.prototype, "courseResourceNum", void 0), s([
          (0, a.v)()
        ], e.prototype, "agreeResourceNum", void 0), s([
          (0, a.v)()
        ], e.prototype, "rejectResourceNum", void 0), s([
          (0, a.v)()
        ], e.prototype, "auditingResourceNum", void 0), e
      }
      (), y=function(){
        function e(){
        }
        return s([
          (0, a.v)()
        ], e.prototype, "id", void 0), s([
          (0, a.v)()
        ], e.prototype, "name", void 0), s([
          (0, a.v)()
        ], e.prototype, "size", void 0), s([
          (0, a.v)()
        ], e.prototype, "type", void 0), s([
          (0, a.v)()
        ], e.prototype, "allowDownload", void 0), e
      }
      (), h=function(){
        function e(){
        }
        return s([
          (0, a.v)()
        ], e.prototype, "id", void 0), s([
          (0, a.v)()
        ], e.prototype, "auditStatus", void 0), s([
          (0, a.v)()
        ], e.prototype, "auditRemark", void 0), s([
          (0, a.v)()
        ], e.prototype, "activityTitle", void 0), s([
          (0, a.v)()
        ], e.prototype, "ccLicenseDescription", void 0), s([
          (0, a.v)()
        ], e.prototype, "upload", void 0), e
      }
      (), _=function(){
        function e(){
        }
        return s([
          (0, a.v)()
        ], e.prototype, "id", void 0), s([
          (0, a.v)()
        ], e.prototype, "name", void 0), s([
          (0, a.v)()
        ], e.prototype, "userNo", void 0), s([
          (0, a.v)()
        ], e.prototype, "seatNumber", void 0), s([
          (0, a.v)()
        ], e.prototype, "userVisitDuration", void 0), s([
          (0, a.v)()
        ], e.prototype, "onlineVideoDuration", void 0), s([
          (0, a.v)()
        ], e.prototype, "examDuration", void 0), e
      }
      (), g=function(){
        this.academicYear={
          id:0, sort:-1
        }, this.academicYearId=0, this.compulsory=null, this.courseTemplate=-1, this.courseType=1, this.instructorIds=[
        ], this.semester={
          id:0, sort:-1
        }, this.semesterId=0
      }
    }, 449134:(e, t, n)=>{
      n.r(t), n.d(t, {
        SizeOptions:()=>r, default:()=>s
      });
      n(418665), n(107918), n(43148), n(14602);
      var r, a=n(595738);
      !function(e){
        e.LARGE="large", e.MEDIUM="medium", e.DEFAULT="default"
      }
      (r||(r={
      }));
      var i=new Map([
        [
          r.LARGE, 160
        ], [
          r.MEDIUM, 140
        ], [
          r.DEFAULT, 120
        ]
      ]);
      const o=(0, a.pM)({
        name:"KnowledgeNodeTag", props:{
          size:{
            type:String, default:r.DEFAULT, validator:function(e){
              return[
                r.DEFAULT, r.MEDIUM, r.LARGE
              ].includes(e)
            }
          }, courseId:{
            type:Number, default:0
          }, nodeId:{
            type:Number, default:0
          }, content:{
            type:String, default:""
          }, closable:{
            type:Boolean, default:!1
          }, transfer:{
            type:Boolean, default:!0
          }, goToGraph:{
            type:Boolean, default:!1
          }
        }, setup:function(e, t){
          var n=(0, a.KR)(!1), r=(0, a.KR)();
          return{
            tagRef:r, disabled:n, onClose:function(){
              e.closable&&t.emit("delete-node-tag")
            }, onClick:function(){
              if(e.goToGraph&&0!==e.courseId){
                var t="/course/".concat(e.courseId, "/knowledge-graph#/?node_id=").concat(e.nodeId);
                window.open(t, "_blank")
              }
            }, onPopperShow:function(){
              !function(){
                var t=r.value;
                if(t){
                  var a=t.$el.clientWidth;
                  if(0!==a){
                    var o=i.get(e.size)||120;
                    n.value=Boolean(a<o)
                  }
                }
              }
              ()
            }
          }
        }
      });
      const s=(0, n(514486).A)(o, (function(){
        var e=this, t=e.$createElement, n=e._self._c||t;
        return n("div", [
          n("Tooltip", {
            attrs:{
              content:e.content, placement:"top", "max-width":"224", transfer:e.transfer, disabled:e.disabled, delay:200
            }, on:{
              "~on-popper-show":function(t){
                return e.onPopperShow(t)
              }
            }
          }, [
            n("Tag", {
              ref:"tagRef", class:{
                "can-click":e.goToGraph
              }, attrs:{
                size:e.size, closable:e.closable
              }, on:{
                "on-close":function(t){
                  return e.onClose()
                }
              }, nativeOn:{
                click:function(t){
                  return e.onClick()
                }
              }
            }, [
              e._v("\n      "+e._s(e.content)+"\n    ")
            ])
          ], 1)
        ], 1)
      }), [
      ], !1, null, "54e632bb", null).exports
    }, 472278:(e, t, n)=>{
      n.d(t, {
        j:()=>l
      });
      n(540590), n(418665), n(269193), n(14602);
      var r=n(272505), a=n.n(r), i=n(218831), o=n(920453), s=n(112060), c=function(e, t, n, r){
        return new(n||(n=Promise))((function(a, i){
          function o(e){
            try{
              c(r.next(e))
            }
            catch(e){
              i(e)
            }
          }
          function s(e){
            try{
              c(r.throw(e))
            }
            catch(e){
              i(e)
            }
          }
          function c(e){
            var t;
            e.done?a(e.value):(t=e.value, t instanceof n?t:new n((function(e){
              e(t)
            }))).then(o, s)
          }
          c((r=r.apply(e, t||[
          ])).next())
        }))
      }, u=function(e, t){
        var n, r, a, i, o={
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
          next:s(0), throw:s(1), return:s(2)
        }, "function"==typeof Symbol&&(i[
          Symbol.iterator
        ]
        =function(){
          return this
        }), i;
        function s(s){
          return function(c){
            return function(s){
              if(n)throw new TypeError("Generator is already executing.");
              for(;
              i&&(i=0, s[
                0
              ]
              &&(o=0)), o;
              )try{
                if(n=1, r&&(a=2&s[
                  0
                ]
                ?r.return:s[
                  0
                ]
                ?r.throw||((a=r.return)&&a.call(r), 0):r.next)&&!(a=a.call(r, s[
                  1
                ])).done)return a;
                switch(r=0, a&&(s=[
                  2&s[
                    0
                  ], a.value
                ]), s[
                  0
                ]){
                  case 0:case 1:a=s;
                  break;
                  case 4:return o.label++, {
                    value:s[
                      1
                    ], done:!1
                  };
                  case 5:o.label++, r=s[
                    1
                  ], s=[
                    0
                  ];
                  continue;
                  case 7:s=o.ops.pop(), o.trys.pop();
                  continue;
                  default:if(!(a=o.trys, (a=a.length>0&&a[
                    a.length-1
                  ])||6!==s[
                    0
                  ]
                  &&2!==s[
                    0
                  ])){
                    o=0;
                    continue
                  }
                  if(3===s[
                    0
                  ]
                  &&(!a||s[
                    1
                  ]
                  >a[
                    0
                  ]
                  &&s[
                    1
                  ]
                  <a[
                    3
                  ])){
                    o.label=s[
                      1
                    ];
                    break
                  }
                  if(6===s[
                    0
                  ]
                  &&o.label<a[
                    1
                  ]){
                    o.label=a[
                      1
                    ], a=s;
                    break
                  }
                  if(a&&o.label<a[
                    2
                  ]){
                    o.label=a[
                      2
                    ], o.ops.push(s);
                    break
                  }
                  a[
                    2
                  ]
                  &&o.ops.pop(), o.trys.pop();
                  continue
                }
                s=t.call(e, o)
              }
              catch(e){
                s=[
                  6, e
                ], r=0
              }
              finally{
                n=a=0
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
              s, c
            ])
          }
        }
      };
      function l(e){
        return c(this, void 0, void 0, (function(){
          var t, n;
          return u(this, (function(r){
            switch(r.label){
              case 0:return[
                4, a().get("/api/uploads/".concat(e, "?preview=true"))
              ];
              case 1:return t=r.sent(), n=(0, i.camelizeKeys)(t.data), [
                2, (0, o.plainToClass)(s._O, n, {
                  excludeExtraneousValues:!0
                })
              ]
            }
          }))
        }))
      }
    }, 489491:(e, t, n)=>{
      n.d(t, {
        A:()=>d
      });
      var r=n(962893), a=n(695353), i=n(590815), o=n(82240), s=n(755805);
      function c(e, t){
        var n=Object.keys(e);
        if(Object.getOwnPropertySymbols){
          var r=Object.getOwnPropertySymbols(e);
          t&&(r=r.filter((function(t){
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }
      function u(e){
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
          t%2?c(Object(n), !0).forEach((function(t){
            l(e, t, n[
              t
            ])
          })):Object.getOwnPropertyDescriptors?Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }
      function l(e, t, n){
        return t in e?Object.defineProperty(e, t, {
          value:n, enumerable:!0, configurable:!0, writable:!0
        }):e[
          t
        ]
        =n, e
      }
      r.default.use(a.Ay);
      const d=new a.Ay.Store(u(u({
      }, i.A), {
      }, {
        modules:{
          homeworkMark:o.A, airCredit:s.A
        }, strict:!1
      }))
    }, 516844:(e, t, n)=>{
      n.r(t), n.d(t, {
        useAngularScope:()=>i, useAngularService:()=>a
      });
      var r=n(756029), a=function(e){
        return r.element(document.body).injector().get(e)
      }, i=function(e){
        return r.element(e||document.body).scope()
      }
    }, 520553:(e, t, n)=>{
      n.d(t, {
        A:()=>o
      });
      var r=n(595738), a=n(979278);
      const i=(0, r.pM)({
        components:{
          SvgIcon:a.A
        }, props:{
          disabled:{
            type:Boolean, default:!1
          }, loading:{
            type:Boolean, default:!1
          }
        }, setup:function(e, t){
          var n=(0, r.EW)((function(){
            return e.disabled||e.loading
          }));
          return{
            buttonDisabled:n, click:function(){
              n.value||t.emit("click")
            }
          }
        }
      });
      const o=(0, n(514486).A)(i, (function(){
        var e=this, t=e.$createElement, n=e._self._c||t;
        return n("div", {
          staticClass:"air-primary-generate-button", attrs:{
            disabled:e.buttonDisabled
          }, on:{
            click:e.click
          }
        }, [
          e.loading?n("Icon", {
            staticClass:"ivu-anim-loop", attrs:{
              type:"ios-loading", size:"16"
            }
          }):n("SvgIcon", {
            attrs:{
              name:"ai-generate-icon"
            }
          }), e._v(" "), n("span", [
            e._t("default")
          ], 2)
        ], 1)
      }), [
      ], !1, null, "6b9eda44", null).exports
    }, 531348:(e, t, n)=>{
      n.d(t, {
        B:()=>i
      });
      var r=n(738645), a=function(e, t, n, r){
        var a, i=arguments.length, o=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t, n):r;
        if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e, t, n, r);
        else for(var s=e.length-1;
        s>=0;
        s--)(a=e[
          s
        ])&&(o=(i<3?a(o):i>3?a(t, n, o):a(t, n))||o);
        return i>3&&o&&Object.defineProperty(t, n, o), o
      }, i=(function(){
        function e(){
        }
        a([
          (0, r.v)()
        ], e.prototype, "id", void 0), a([
          (0, r.v)()
        ], e.prototype, "description", void 0), a([
          (0, r.v)()
        ], e.prototype, "sort", void 0), a([
          (0, r.v)()
        ], e.prototype, "type", void 0)
      }
      (), function(){
        function e(){
          this.knowledgeNodeReferences=[
          ]
        }
        return a([
          (0, r.v)()
        ], e.prototype, "id", void 0), a([
          (0, r.v)()
        ], e.prototype, "answer", void 0), a([
          (0, r.v)()
        ], e.prototype, "answerExplanation", void 0), a([
          (0, r.v)()
        ], e.prototype, "correctAnswers", void 0), a([
          (0, r.v)()
        ], e.prototype, "description", void 0), a([
          (0, r.v)()
        ], e.prototype, "difficultyLevel", void 0), a([
          (0, r.v)()
        ], e.prototype, "point", void 0), a([
          (0, r.v)()
        ], e.prototype, "type", void 0), a([
          (0, r.v)()
        ], e.prototype, "note", void 0), a([
          (0, r.v)()
        ], e.prototype, "sort", void 0), a([
          (0, r.v)()
        ], e.prototype, "parent", void 0), a([
          (0, r.v)()
        ], e.prototype, "settings", void 0), a([
          (0, r.v)()
        ], e.prototype, "knowledgeNodeReferences", void 0), e
      }
      ())
    }, 539963:(e, t, n)=>{
      n.d(t, {
        $D:()=>u, bC:()=>c, df:()=>s, eg:()=>o, vB:()=>l
      });
      var r=n(552979), a=n(795093), i=(e, t)=>{
        if((e=>{
          e.make_up_record&&(e.make_up_record.is_closed=a()>a(e.make_up_record.closed_time)), e.resubmit_record&&(e.resubmit_record.is_closed=a()>a(e.resubmit_record.closed_time))
        })(t), !t.resubmit_record&&!t.make_up_record)return"";
        if(!t.resubmit_record&&t.make_up_record)return"makeUp";
        if(!t.make_up_record&&e)return"resubmit";
        if(!e)return"makeUp";
        var n=t.make_up_record.updated_at||t.make_up_record.created_at, r=t.resubmit_record.updated_at||t.resubmit_record.created_at;
        return n>=r?"makeUp":n<r?"resubmit":""
      };
      function o(e, t){
        var n={
          isMarked:null, submitStatus:""
        };
        n.isMarked="marked"===t.mark;
        var a=i(e, t);
        return t.markedSubmitted&&[
          "makeUp", "resubmit"
        ].includes(a)?(n.submitStatus=r.default.t("homework.makeUp"), n):n
      }
      function s(e){
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
    }, 564577:(e, t, n)=>{
      n.d(t, {
        i:()=>i
      });
      n(714913), n(169218), n(658379);
      var r=function(){
        return(r=Object.assign||function(e){
          for(var t, n=1, r=arguments.length;
          n<r;
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
      }, a=function(e, t, n){
        if(n||2===arguments.length)for(var r, a=0, i=t.length;
        a<i;
        a++)!r&&a in t||(r||(r=Array.prototype.slice.call(t, 0, a)), r[
          a
        ]
        =t[
          a
        ]);
        return e.concat(r||Array.prototype.slice.call(t))
      }, i={
        allowedAttributes:{
          img:[
            "src", "alt", "width", "height", "data-non-image", "data-latex", "class", "data-mathml", "role", "align", "style", "data-id"
          ], span:[
            "contenteditable", "class", "data-id"
          ], a:[
            "href", "target", "data-id", "class"
          ], svg:[
            "class", "width", "height"
          ], use:[
            "href"
          ]
        }, toolbar:[
          "title", "bold", "italic", "underline", "strikethrough", "fontScale", "color", "ol", "ul", "blockquote", "table", "link", "hr", "indent", "outdent", "superscript", "subscript"
        ], allowedTags:[
          "a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "big", "blockquote", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "command", "datagrid", "datalist", "dd", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "em", "event-source", "fieldset", "figcaption", "figure", "footer", "font", "form", "header", "h1", "h2", "h3", "h4", "h5", "h6", "hr", "i", "img", "input", "ins", "keygen", "kbd", "label", "legend", "li", "m", "map", "menu", "meter", "multicol", "nav", "nextid", "ol", "output", "optgroup", "option", "p", "pre", "progress", "q", "s", "samp", "section", "select", "small", "sound", "source", "spacer", "span", "strike", "strong", "sub", "sup", "table", "tbody", "td", "textarea", "time", "tfoot", "th", "thead", "tr", "tt", "u", "ul", "var", "video", "style", "svg", "use"
        ], allowedStyles:{
        }, editorConfigWithTools:function(e){
          var t=a(a([
          ], this.toolbar, !0), e, !0);
          return r(r({
          }, this), {
            toolbar:t
          })
        }, editorConfigWithEmptyToolbar:function(){
          return r(r({
          }, this), {
            toolbar:[
            ]
          })
        }, editorConfigWithCustomerToolbar:function(e){
          return r(r({
          }, this), {
            toolbar:e
          })
        }
      }, o=[
        "azimuth", "background", "background-color", "border-bottom-color", "border-collapse", "border-color", "border-left-color", "border-right-color", "border-top-color", "clear", "color", "cursor", "direction", "display", "elevation", "float", "font", "font-family", "font-size", "font-style", "font-variant", "font-weight", "height", "letter-spacing", "line-height", "overflow", "pause", "pause-after", "pause-before", "pitch", "pitch-range", "richness", "speak", "speak-header", "speak-numeral", "speak-punctuation", "speech-rate", "stress", "text-align", "text-decoration", "text-indent", "unicode-bidi", "vertical-align", "voice-family", "volume", "white-space", "width"
      ];
      i.allowedTags.forEach((function(e){
        void 0===i.allowedAttributes[
          e
        ]
        ?i.allowedAttributes[
          e
        ]
        =[
          "class", "style"
        ]
        :i.allowedAttributes[
          e
        ].concat([
          "class", "style"
        ]), i.allowedStyles[
          e
        ]
        =o
      }))
    }, 657440:(e, t, n)=>{
      var r, a=n(248124), i=n(302543), o=n(248124);
      n(640173);
      var s=n(711199), c="True"===a("#dashboardTracking").val(), u=a("#orgId").val(), l=a("#userId").attr("value"), d=a("#courseId").val(), p=Number(a("subCourseId").val())&&!Number.isNaN(Number(a("subCourseId").val()))?Number(a("subCourseId").val()):void 0, v=!("student"===(null===(r=a("#userRole").val())||void 0===r?void 0:r.toLowerCase())), m="True"===a("#enrollmentIsInstructor").val(), f="True"===a("#enrollmentIsInstructorAssistant").val(), b=a("#enrollmentRole").val();
      b||(b=m?"instructor":f?"instructor-assistant":"student");
      var y=function(){
        var e=arguments.length>0&&void 0!==arguments[
          0
        ]
        ?arguments[
          0
        ]
        :{
        };
        if(window.globalData||window.statisticsSettings){
          var t=window.globalData?window.globalData:window.statisticsSettings;
          t.user&&(e.org_name=t.user.orgName, "None"!==t.user.orgCode&&(e.org_code=t.user.orgCode), e.user_no=t.user.userNo, e.user_name=t.user.name), t.course&&(e.course_code=t.course.courseCode, e.course_name=t.course.name, e.org_id!==e.course_org_id&&(e.org_id=t.course.orgId, e.org_name=t.course.orgName, "None"!==t.course.orgCode&&(e.org_code=t.course.orgCode))), t.dept&&(t.dept.id&&(e.dep_id=t.dept.id), e.dep_name=t.dept.name, e.dep_code=t.dept.code)
        }
      }, h=function(){
        var e=arguments.length>0&&void 0!==arguments[
          0
        ]
        ?arguments[
          0
        ]
        :{
        }, t={
          org_id:u, user_id:l, course_id:d, sub_course_id:p, enrollment_role:b, is_teacher:v, activity_id:null, activity_type:null, activity_name:null, module:null, action:s.Action.start, ts:(new Date).getTime(), user_agent:navigator.userAgent, mode:s.Mode.classmode, channel:s.Channel.wide_screen, target_info:{
          }
        };
        return(t=i.merge(t, e)).activity_type&&(t.activity_type=t.activity_type.replace(/-/, "_")), y(t), t
      }, _={
        enums:s, track:function(){
          var e=arguments.length>0&&void 0!==arguments[
            0
          ]
          ?arguments[
            0
          ]
          :{
          };
          if(c){
            var t=h(e);
            if(t.course_id&&(t.activity_id||t.module)){
              var n="teaching-action";
              if(t.activity_type&&(n="learning-activity", "research_activity"===t.activity_type&&(n="research-activity", t.activity_type=t.research_type)), window.st.isCanTrack()){
                var r=statisticsSettings.server+"/api/"+n+"?jwt="+statisticsSettings.mgsJwt;
                return o.ajax({
                  method:"POST", url:r, dataType:"json", processData:!1, data:JSON.stringify(t), contentType:"application/json; charset=utf-8"
                })
              }
            }
          }
        }, trackVisit:function(e){
          var t=arguments.length>1&&void 0!==arguments[
            1
          ]
          ?arguments[
            1
          ]
          :{
          };
          return window.st.inPage(t), window.st.setActivityType(e), window.st.trackVisit()
        }, trackZhiyunVisit:function(e){
          var t=arguments.length>1&&void 0!==arguments[
            1
          ]
          ?arguments[
            1
          ]
          :{
          };
          window.st.trackZhiyunVisit(e, t)
        }, reset:function(){
          return window.st.reset()
        }, trackData:h, addExtraData:y, trackActivity:function(e, t){
          var n=arguments.length>2&&void 0!==arguments[
            2
          ]
          ?arguments[
            2
          ]
          :{
          }, r=arguments.length>3&&void 0!==arguments[
            3
          ]
          ?arguments[
            3
          ]
          :{
          };
          window.st.track(e, t, n, r)
        }, trackVtrsVisit:function(e){
          var t=arguments.length>1&&void 0!==arguments[
            1
          ]
          ?arguments[
            1
          ]
          :"view", n=arguments.length>2&&void 0!==arguments[
            2
          ]
          ?arguments[
            2
          ]
          :{
          };
          window.st.trackVtrsVisit(e, t, n)
        }, trackVtrsResource:function(e, t, n){
          window.st.trackVtrsResource(e, t, n)
        }
      };
      e.exports=_, window.statistics=_
    }, 679578:(e, t, n)=>{
      n.d(t, {
        A:()=>i
      });
      n(219693), n(418665), n(107918), n(14602);
      var r=new Map([
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
      const a={
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
            this.icon=r.get(e)
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
      const i=(0, n(514486).A)(a, (function(){
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
    }, 769075:(e, t, n)=>{
      n.d(t, {
        A:()=>c
      });
      n(269193);
      var r=n(962893), a=n(679578);
      function i(e, t){
        var n=Object.keys(e);
        if(Object.getOwnPropertySymbols){
          var r=Object.getOwnPropertySymbols(e);
          t&&(r=r.filter((function(t){
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }
      function o(e){
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
      a.A.open=function(){
        var e=arguments.length>0&&void 0!==arguments[
          0
        ]
        ?arguments[
          0
        ]
        :{
        };
        return new Promise((t=>{
          var n=new r.default({
            data:()=>({
              visible:!1
            }), render(t){
              var r={
              };
              return e.render&&(r.default=()=>e.render(t, n)), e.renderHeader&&(r.header=()=>e.renderHeader(t, n)), e.renderFooter&&(r.footer=()=>e.renderFooter(t, n)), t(a.A, {
                props:o(o({
                }, e), {
                }, {
                  value:this.visible
                }), scopedSlots:r
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
      const c=a.A
    }, 790965:(e, t, n)=>{
      e.exports=n.p+"assets/images/large/42a51066e41e4593c871.svg"
    }, 828535:(e, t, n)=>{
      n.r(t), n.d(t, {
        default:()=>ye
      });
      n(540590), n(418665), n(269193), n(43148), n(640173), n(14602);
      var r=n(595738), a=n(552979), i=n(302543), o=n.n(i), s=n(920453), c=n(218831), u=n(220521), l=n(19505);
      const d=(0, r.pM)({
        name:"mark-header", props:{
          examTitle:{
            type:String, required:!0
          }
        }, setup:(e, t)=>({
          goBack:()=>{
            t.emit("close-modal")
          }
        })
      });
      var p=n(514486);
      const v=(0, p.A)(d, (function(){
        var e=this, t=e.$createElement, n=e._self._c||t;
        return n("div", {
          staticClass:"mark-header"
        }, [
          n("div", {
            staticClass:"back-button"
          }, [
            n("Button", {
              attrs:{
                size:"default"
              }, on:{
                click:e.goBack
              }
            }, [
              n("i", {
                staticClass:"font font-arrow-left icon-back"
              }), e._v(" "), n("span", {
                staticClass:"back-text"
              }, [
                e._v(e._s(e.$t("goBack")))
              ])
            ])
          ], 1), e._v(" "), n("div", {
            staticClass:"exam-title", domProps:{
              textContent:e._s(e.examTitle)
            }
          })
        ])
      }), [
      ], !1, null, "1e900647", null).exports;
      n(219693);
      var m=n(592207), f=n.n(m), b=(n(207452), n(516844)), y=n(472278), h=n(915810), _=n.n(h), g=n(449134), w=n(248124);
      function x(e, t, n, r, a, i, o){
        try{
          var s=e[
            i
          ]
          (o), c=s.value
        }
        catch(e){
          return void n(e)
        }
        s.done?t(c):Promise.resolve(c).then(r, a)
      }
      const k=(0, r.pM)({
        name:"title-popup", components:{
          knowledgeNodeTag:g.default
        }, props:{
          openPopup:{
            type:Boolean, required:!0
          }, title:{
            type:String, required:!0
          }, currentSubject:{
            type:Object, required:!0
          }, isParent:{
            type:Boolean, required:!0
          }, isChildren:{
            type:Boolean, required:!0
          }
        }, setup(e, t){
          var n=(0, r.KR)(!1), a=(0, b.useAngularScope)(), i=(0, r.KR)(""), o=(0, r.KR)("");
          (0, r.sV)((()=>{
            window.MathJax&&!window.MathJax.Hub&&_()()
          })), (0, r.wB)((()=>e.openPopup), (()=>{
            n.value=e.openPopup, e.openPopup&&(i.value=e.isParent?e.currentSubject.parent.description:e.currentSubject.description, o.value=e.isParent?"":e.currentSubject.note, (0, r.dY)((()=>{
              window.MathJax.typeset([
                w(".title-container .content")[
                  0
                ]
              ])
            })))
          }));
          var s=(0, r.EW)((()=>e.title)), u=function(){
            var e, t=(e=f().mark((function e(t){
              var n;
              return f().wrap((function(e){
                for(;
                ;
                )switch(e.prev=e.next){
                  case 0:return e.next=2, (0, y.j)(t);
                  case 2:n=e.sent, a.$broadcast("previewFile", n), w("#file-previewer").foundation("reveal", "open");
                  case 5:case"end":return e.stop()
                }
              }), e)
            })), function(){
              var t=this, n=arguments;
              return new Promise((function(r, a){
                var i=e.apply(t, n);
                function o(e){
                  x(i, r, a, o, s, "next", e)
                }
                function s(e){
                  x(i, r, a, o, s, "throw", e)
                }
                o(void 0)
              }))
            });
            return function(e){
              return t.apply(this, arguments)
            }
          }
          (), l=(0, r.EW)((()=>e.isParent?e.currentSubject.parent.knowledgeNodeReferences:e.currentSubject.knowledgeNodeReferences));
          return{
            modal:n, closePopup:()=>{
              t.emit("on-cancel")
            }, content:i, note:o, popupTitle:s, camelize:c.camelize, eventTemp:e=>{
              if((e.target.parentElement.dataset.id||e.target.dataset.id)&&(-1!==e.target.parentElement.className.indexOf("simditor-attachment")||-1!==e.target.className.indexOf("simditor-attachment"))){
                var t=e.target.parentElement.dataset.id||e.target.dataset.id;
                u(t)
              }
            }, knowledgeNodeReferences:l
          }
        }
      });
      const S=(0, p.A)(k, (function(){
        var e=this, t=e.$createElement, n=e._self._c||t;
        return n("Modal", {
          staticClass:"title-modal", attrs:{
            title:e.popupTitle, width:"900px", "footer-hide":""
          }, on:{
            "on-cancel":e.closePopup
          }, model:{
            value:e.modal, callback:function(t){
              e.modal=t
            }, expression:"modal"
          }
        }, [
          n("div", {
            staticClass:"main-container"
          }, [
            n("div", {
              staticClass:"title-container"
            }, [
              e.isChildren&&e.currentSubject.type&&e.currentSubject.difficultyLevel?n("div", {
                staticClass:"question"
              }, [
                e._v("\n        "+e._s(e.$t("subjectType."+e.camelize(e.currentSubject.type)))+"("+e._s(e.currentSubject.point)+e._s(e.$t("subject.point"))+") ("+e._s(e.$t("subject.difficultyLevel"))+"："+e._s(e.$t("difficultyLevel."+e.camelize(e.currentSubject.difficultyLevel)))+")\n      ")
              ]):e._e(), e._v(" "), n("div", {
                staticClass:"content", domProps:{
                  innerHTML:e._s(e.content)
                }, on:{
                  click:e.eventTemp
                }
              })
            ]), e._v(" "), e.note?n("div", {
              staticClass:"question-note-container"
            }, [
              n("div", {
                staticClass:"note-title"
              }, [
                e._v(e._s(e.$t("examMark.questionNotes")))
              ]), e._v(" "), n("div", {
                staticClass:"note content", domProps:{
                  innerHTML:e._s(e.note)
                }
              })
            ]):e._e(), e._v(" "), e.knowledgeNodeReferences?n("div", {
              staticClass:"node-reference-list"
            }, e._l(e.knowledgeNodeReferences, (function(e){
              return n("div", {
                key:e.id
              }, [
                n("knowledge-node-tag", {
                  attrs:{
                    "course-id":e.courseId, "node-id":e.knowledgeNode.id, content:e.knowledgeNode.name, "go-to-graph":!0, size:"large"
                  }
                })
              ], 1)
            })), 0):e._e()
          ])
        ])
      }), [
      ], !1, null, "48ea56d8", null).exports;
      var j=n(731904);
      const C=(0, r.pM)({
        name:"subject-title", components:{
          knowledgeNodeTag:g.default, titlePopup:S
        }, props:{
          currentSubject:{
            type:Object, required:!0
          }, currentSubjectIndex:{
            type:String, required:!0
          }
        }, setup(){
          var e=(0, r.nI)(), t=(0, r.KR)(!1), n=(0, r.KR)(!1), i=(0, r.KR)(a.default.t("examMark.questionDetails")), o=(0, r.EW)((()=>t.value||n.value));
          return{
            showSubjectTitle:()=>{
              t.value=!0, n.value=!1, i.value=a.default.t("examMark.questionDetails")
            }, showParentTitle:()=>{
              t.value=!1, n.value=!0, i.value=a.default.t("examMark.questionGroup")
            }, camelize:c.camelize, popupTitle:i, closePopup:()=>{
              t.value=!1, n.value=!1
            }, openPopup:o, canShowParentTitle:n, prettyShowSubject:t=>{
              var n=e.proxy.$sanitize;
              return(0, j.sanitizeDisplaySubjectText)(n, t, a.default)
            }, canShowSubjectTitle:t
          }
        }
      });
      const M=(0, p.A)(C, (function(){
        var e=this, t=e.$createElement, n=e._self._c||t;
        return n("div", {
          staticClass:"subject-title-container"
        }, [
          n("div", {
            staticClass:"subject-title"
          }, [
            n("div", {
              staticClass:"main-container"
            }, [
              e.currentSubject.parent&&"analysis"===e.currentSubject.parent.type?n("div", {
                staticClass:"parent-subject"
              }, [
                n("div", {
                  staticClass:"base-font-style num"
                }, [
                  e._v("\n          "+e._s(e.currentSubject.parent.sort+1)+"."+e._s(e.$t("examMark.questionGroup"))+":\n        ")
                ]), e._v(" "), n("div", {
                  staticClass:"parent-content"
                }, [
                  n("div", {
                    staticClass:"content truncate-text", domProps:{
                      textContent:e._s(e.prettyShowSubject(e.currentSubject.parent.description))
                    }
                  }), e._v(" "), n("div", {
                    staticClass:"container-button"
                  }, [
                    n("div", {
                      staticClass:"show-parent-more", on:{
                        click:e.showParentTitle
                      }
                    }, [
                      e._v(e._s(e.$t("examMark.materialDetails")))
                    ])
                  ])
                ]), e._v(" "), e.currentSubject.parent&&e.currentSubject.parent.knowledgeNodeReferences?n("div", {
                  staticClass:"node-reference-list"
                }, e._l(e.currentSubject.parent.knowledgeNodeReferences, (function(e){
                  return n("div", {
                    key:e.id
                  }, [
                    n("knowledge-node-tag", {
                      attrs:{
                        "course-id":e.courseId, "node-id":e.knowledgeNode.id, content:e.knowledgeNode.name, "go-to-graph":!0, size:"large"
                      }
                    })
                  ], 1)
                })), 0):e._e()
              ]):e._e(), e._v(" "), e.currentSubject.parent&&"analysis"===e.currentSubject.parent.type?n("Divider", {
                staticClass:"divider-container"
              }):e._e(), e._v(" "), Object.values(e.currentSubject).length>0?n("div", {
                staticClass:"sub-subject"
              }, [
                n("div", {
                  staticClass:"base-font-style num"
                }, [
                  e.currentSubject.type?n("span", {
                    staticClass:"base"
                  }, [
                    e._v("\n            "+e._s(e.$t("subjectType."+e.camelize(e.currentSubject.type)))+"("+e._s(e.currentSubject.point)+e._s(e.$t("subject.point"))+") ("+e._s(e.$t("subject.difficultyLevel"))+"："+e._s(e.$t("difficultyLevel."+e.camelize(e.currentSubject.difficultyLevel)))+")\n          ")
                  ]):e._e()
                ]), e._v(" "), n("div", {
                  staticClass:"sub-content"
                }, [
                  n("div", {
                    staticClass:"content truncate-text"
                  }, [
                    n("span", {
                      staticClass:"base-font-style num"
                    }, [
                      n("span", [
                        e._v(e._s(e.currentSubjectIndex))
                      ]), e._v(" "), e.currentSubject.parent&&"analysis"===e.currentSubject.parent.type?e._e():n("span", [
                        e._v(".")
                      ])
                    ]), e._v("\n            "+e._s(e.prettyShowSubject(e.currentSubject.description))+"\n          ")
                  ]), e._v(" "), n("div", {
                    staticClass:"container-button"
                  }, [
                    n("div", {
                      staticClass:"show-title-more", on:{
                        click:e.showSubjectTitle
                      }
                    }, [
                      e._v(e._s(e.$t("examMark.showQuestionDetails")))
                    ])
                  ])
                ]), e._v(" "), e.currentSubject.parent&&"analysis"===e.currentSubject.parent.type?e._e():n("div", {
                  staticClass:"node-reference-list"
                }, e._l(e.currentSubject.knowledgeNodeReferences, (function(e){
                  return n("div", {
                    key:e.id
                  }, [
                    n("knowledge-node-tag", {
                      attrs:{
                        "course-id":e.courseId, "node-id":e.knowledgeNode.id, content:e.knowledgeNode.name, "go-to-graph":!0, size:"large"
                      }
                    })
                  ], 1)
                })), 0)
              ]):e._e()
            ], 1)
          ]), e._v(" "), n("titlePopup", {
            attrs:{
              "open-popup":e.openPopup, title:e.popupTitle, "current-subject":e.currentSubject, "is-parent":e.canShowParentTitle, "is-children":e.canShowSubjectTitle
            }, on:{
              "on-cancel":e.closePopup
            }
          })
        ], 1)
      }), [
      ], !1, null, "33c8400a", null).exports;
      const A=(0, r.pM)({
        name:"subjects", props:{
          subjects:{
            type:Array, required:!0
          }, subjectId:{
            type:Number, required:!0
          }, filter:{
            type:Object, required:!0
          }, subjectMarkFinshStatus:{
            type:Object, required:!0
          }, hasMakeUpUser:{
            type:Boolean, default:!1
          }
        }, setup(e, t){
          var n=(0, r.KR)([
            "marked", "not_marked"
          ]), a=(0, r.EW)((()=>e.subjectId));
          return{
            backgroundColor:t=>a.value===t.id?"current-subject":"marked"===t.status||e.subjectMarkFinshStatus[
              t.id
            ]
            ?"marked":"not-marked", filterData:()=>{
              t.emit("filter-data")
            }, switchSubject:r=>{
              setTimeout((()=>{
                (e=>{
                  t.emit("set-current-subject-id", {
                    id:e.id, index:e.index
                  })
                })(r), n.value.includes(e.filter.status)&&t.emit("sendSelectStatus", {
                  filterSelectStatus:e.filter.status
                })
              }), 300)
            }
          }
        }
      });
      const E=(0, p.A)(A, (function(){
        var e=this, t=e.$createElement, n=e._self._c||t;
        return n("div", {
          staticClass:"subjects"
        }, [
          n("div", {
            staticClass:"question-type-filter"
          }, [
            n("span", [
              e._v(e._s(e.$t("examMark.subjectType")))
            ]), e._v(" "), n("Select", {
              staticClass:"select", on:{
                "on-change":e.filterData
              }, model:{
                value:e.filter.examType, callback:function(t){
                  e.$set(e.filter, "examType", t)
                }, expression:"filter.examType"
              }
            }, [
              n("Option", {
                attrs:{
                  value:"exam"
                }
              }, [
                e._v(e._s(e.$t("examActivity.questionType.exam")))
              ]), e._v(" "), e.hasMakeUpUser?n("Option", {
                attrs:{
                  value:"makeupExam"
                }
              }, [
                e._v(e._s(e.$t("examActivity.questionType.makeUp")))
              ]):e._e()
            ], 1)
          ], 1), e._v(" "), n("div", {
            staticClass:"filter-question-num-container"
          }, [
            n("div", {
              staticClass:"filter"
            }, [
              n("span", [
                e._v(e._s(e.$t("subject.question")))
              ]), e._v(" "), n("Select", {
                staticClass:"select", on:{
                  "on-change":e.filterData
                }, model:{
                  value:e.filter.status, callback:function(t){
                    e.$set(e.filter, "status", t)
                  }, expression:"filter.status"
                }
              }, [
                n("Option", {
                  attrs:{
                    value:"all"
                  }
                }, [
                  e._v(e._s(e.$t("examMark.markStatus.all")))
                ]), e._v(" "), n("Option", {
                  attrs:{
                    value:"marked"
                  }
                }, [
                  e._v(e._s(e.$t("examMark.markStatus.marked")))
                ]), e._v(" "), n("Option", {
                  attrs:{
                    value:"not_marked"
                  }
                }, [
                  e._v(e._s(e.$t("examMark.markStatus.notMarked")))
                ])
              ], 1)
            ], 1), e._v(" "), n("div", {
              staticClass:"question-num-container"
            }, [
              e.subjects.length>0?n("div", {
                staticClass:"question-num"
              }, e._l(e.subjects, (function(t, r){
                return n("div", {
                  key:r, staticClass:"num", class:e.backgroundColor(t), on:{
                    click:function(n){
                      return e.switchSubject(t)
                    }
                  }
                }, [
                  n("span", {
                    domProps:{
                      textContent:e._s(t.index)
                    }
                  })
                ])
              })), 0):n("div", {
                staticClass:"not-data"
              }, [
                e._v(e._s(e.$t("noData")))
              ]), e._v(" "), n("Divider", {
                attrs:{
                  dashed:""
                }
              }), e._v(" "), n("div", {
                staticClass:"legend"
              }, [
                n("div", [
                  n("span", [
                    e._v(e._s(e.$t("examMark.selected")))
                  ]), e._v(" "), n("span", {
                    staticClass:"base-legend legend-current-subject"
                  })
                ]), e._v(" "), n("div", [
                  n("span", [
                    e._v(e._s(e.$t("examMark.markStatus.marked")))
                  ]), e._v(" "), n("span", {
                    staticClass:"base-legend legend-marked"
                  })
                ]), e._v(" "), n("div", [
                  n("span", [
                    e._v(e._s(e.$t("examMark.markStatus.notMarked")))
                  ]), e._v(" "), n("span", {
                    staticClass:"base-legend legend-not-marked"
                  })
                ])
              ])
            ], 1)
          ])
        ])
      }), [
      ], !1, null, "2e6ecd6a", null).exports;
      var T=n(795093), I=n(33400), O=(n(335231), n(107918), n(334867), n(169218), n(868329), n(658379), n(738645)), $=n(510543), D=function(e, t, n, r){
        var a, i=arguments.length, o=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t, n):r;
        if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e, t, n, r);
        else for(var s=e.length-1;
        s>=0;
        s--)(a=e[
          s
        ])&&(o=(i<3?a(o):i>3?a(t, n, o):a(t, n))||o);
        return i>3&&o&&Object.defineProperty(t, n, o), o
      }, R=function(){
        function e(){
        }
        return D([
          (0, O.v)()
        ], e.prototype, "id", void 0), D([
          (0, O.v)()
        ], e.prototype, "url", void 0), D([
          (0, O.v)()
        ], e.prototype, "name", void 0), D([
          (0, O.v)()
        ], e.prototype, "size", void 0), D([
          (0, O.v)()
        ], e.prototype, "type", void 0), D([
          (0, O.v)()
        ], e.prototype, "source", void 0), D([
          (0, O.v)(), (0, $.d)((function(e){
            e.value;
            var t=e.obj;
            return j.TimeUtils.toLocalDate(t.submittedAt)
          }), {
            toClassOnly:!0
          })
        ], e.prototype, "createdAt", void 0), D([
          (0, O.v)()
        ], e.prototype, "allowDownload", void 0), e
      }
      (), P=n(966491), N=n(703564), B=n(5782), q=n(248124), K=function(){
        return(K=Object.assign||function(e){
          for(var t, n=1, r=arguments.length;
          n<r;
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
      const z=(0, r.pM)({
        name:"attachment", props:{
          attachment:{
            type:R, required:!0
          }, attachmentList:{
            type:Array, required:!1
          }, currentSubject:{
            type:Object, required:!0
          }, submissionId:{
            type:Number, required:!0
          }, examineeName:{
            type:String, required:!0
          }, canMark:{
            type:Boolean, default:!0
          }, canDelete:{
            type:Boolean, default:!1
          }
        }, setup:function(e, t){
          var n=(0, r.WQ)("modal"), a=document.querySelector("[ng-controller=ExamAttachmentMarkController]"), i=(0, b.useAngularScope)(a), o=(0, b.useAngularScope)();
          return{
            fileTypeByExtension:P.fileTypeByExtension, viewAttachment:function(t){
              var r;
              if(null==n?void 0:n.value){
                var a=null===(r=n.value.$el.querySelector(".ivu-modal-wrap"))||void 0===r?void 0:r.style.zIndex, i=Number(a);
                a&&!Number.isNaN(i)&&q("#file-previewer").css("z-index", i+1)
              }
              e.attachmentList&&e.attachmentList.length>0?o.$broadcast("previewFiles", (0, c.decamelizeKeys)(e.attachmentList), (0, c.decamelizeKeys)(t), {
                type:"exam"
              }):o.$broadcast("previewFile", (0, c.decamelizeKeys)(t), {
                type:"exam"
              }), q("#file-previewer").foundation("reveal", "open")
            }, editAttachment:function(t){
              i.getSubjectAttachmentMapForVue(e.submissionId);
              var n=e.attachmentList&&e.attachmentList.length>0?e.attachmentList:[
                e.attachment
              ], r=K(K({
              }, e.currentSubject), {
                attachments:n
              });
              i.openEditor(t.id, r, e.examineeName)
            }, deleteAttachment:function(e){
              t.emit("delete-attachment", {
                id:e.id
              })
            }, canEditByPdfEditor:P.canEditByPdfEditor
          }
        }
      });
      const L=(0, p.A)(z, (function(){
        var e=this, t=e.$createElement, n=e._self._c||t;
        return n("div", {
          key:e.attachment.id, staticClass:"attachment-file"
        }, [
          n("div", {
            staticClass:"file-info"
          }, [
            "auto-generated-pdf"==e.attachment.source?n("svg", {
              staticClass:"font auto-generated-pdf"
            }, [
              n("use", {
                attrs:{
                  "xlink:href":"#file-text-content"
                }
              })
            ]):n("i", {
              staticClass:"font", class:"font-file-"+e.fileTypeByExtension(e.attachment)
            }), e._v(" "), n("Tooltip", {
              attrs:{
                placement:"top", transfer:"", content:e.attachment.name
              }
            }, [
              n("div", {
                staticClass:"attachment-name"
              }, [
                n("span", [
                  e._v(e._s(e.attachment.name))
                ])
              ])
            ])
          ], 1), e._v(" "), n("div", {
            staticClass:"attachment-operations"
          }, [
            n("Tooltip", {
              attrs:{
                placement:"top", transfer:"", content:e.$t("preview")
              }
            }, [
              n("a", {
                on:{
                  click:function(t){
                    return e.viewAttachment(e.attachment)
                  }
                }
              }, [
                n("i", {
                  staticClass:"font font-table-edit-view"
                })
              ])
            ]), e._v(" "), n("Tooltip", {
              attrs:{
                placement:"top", transfer:"", content:e.$t("examMark.markAction")
              }
            }, [
              e.canMark&&e.canEditByPdfEditor(e.attachment)?n("a", {
                on:{
                  click:function(t){
                    return e.editAttachment(e.attachment)
                  }
                }
              }, [
                n("i", {
                  staticClass:"font font-edit"
                })
              ]):e._e()
            ]), e._v(" "), n("Tooltip", {
              attrs:{
                placement:"top", transfer:"", content:e.$t("download")
              }
            }, [
              n("a", {
                attrs:{
                  href:"/api/uploads/"+e.attachment.id+"/blob?preview=true"
                }
              }, [
                n("i", {
                  staticClass:"font font-table-edit-download"
                })
              ])
            ]), e._v(" "), n("Tooltip", {
              attrs:{
                placement:"top", transfer:"", content:e.$t("delete")
              }
            }, [
              e.canDelete?n("a", {
                on:{
                  click:function(t){
                    return e.deleteAttachment(e.attachment)
                  }
                }
              }, [
                n("i", {
                  staticClass:"font font-delete"
                })
              ]):e._e()
            ])
          ], 1)
        ])
      }), [
      ], !1, null, "37c01f2a", null).exports;
      var U=n(248124), G=function(){
        return(G=Object.assign||function(e){
          for(var t, n=1, r=arguments.length;
          n<r;
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
      const V=(0, r.pM)({
        name:"subject-answer", components:{
          attachment:L, knowledgeNodeTag:g.default, EditExplanationModal:N.A
        }, props:{
          currentSubmission:{
            type:u.Od, required:!0
          }, currentSubject:{
            type:Object, required:!0
          }, examineeName:{
            type:String, required:!0
          }
        }, setup:function(e){
          var t, n=document.querySelector("[ng-controller=ExamAttachmentMarkController]"), a=(0, b.useAngularScope)(n), i=null===(t=(0, r.nI)())||void 0===t?void 0:t.proxy, u=(0, r.KR)([
          ]), l=(0, r.KR)(), d=(0, r.EW)((function(){
            return!(!e.currentSubject.answerExplanation&&"short_answer"!==e.currentSubject.type)||!("fill_in_blank"!==e.currentSubject.type||!e.currentSubject.correctAnswers)
          })), p=(0, r.EW)((function(){
            return"short_answer"===e.currentSubject.type
          })), v=function(e){
            return e.normalize("NFKD")
          }, m=function(e){
            return e.normalize("NFKD").toLowerCase()
          }, f=function(){
            if(e.currentSubmission.submissionData){
              var t=o().find(e.currentSubmission.submissionData.subjects, (function(t){
                return t.subjectId===e.currentSubject.id
              })), n=(0, s.plainToClass)(R, (0, c.camelizeKeys)(t.attachments));
              l.value=o().find(n, {
                source:"auto-generated-pdf", type:"document"
              }), u.value=o().filter(n, (function(e){
                var t;
                return e.id!==(null===(t=l.value)||void 0===t?void 0:t.id)
              }))
            }
          }, y=function(e){
            return void 0===e.caseSensitive||!0===e.caseSensitive
          }, h=function(e){
            if(!e)return[
            ];
            var t=o().map(e.alternates, (function(e){
              return e.content.trim()
            }));
            return[
              e.content.trim()
            ].concat(t)
          }, g=function(e, t){
            return t.includes(e)
          }, w=(0, r.EW)((function(){
            var t=e.currentSubmission.submissionData.subjects, n=o().find(t, (function(t){
              return t.subjectId===e.currentSubject.id
            }));
            return n?"short_answer"===e.currentSubject.type?n.answer:o().orderBy(n.answers, [
              "sort"
            ], [
              "asc"
            ]):null
          }));
          (0, r.wB)((function(){
            return e.currentSubmission
          }), (function(){
            "short_answer"===e.currentSubject.type&&f()
          }));
          (0, r.wB)((function(){
            return e.currentSubject
          }), (function(){
            (0, r.dY)((function(){
              try{
                window.MathJax.typeset([
                  U(".explanation .answer")[
                    0
                  ]
                ])
              }
              catch(e){
              }
            }))
          }), {
            immediate:!0
          }), (0, r.sV)((function(){
            window.MathJax&&!window.MathJax.Hub&&_()(), "short_answer"===e.currentSubject.type&&f()
          }));
          var x=(0, r.EW)((function(){
            var t=e.currentSubmission.scoreData[
              e.currentSubject.id
            ];
            return t&&e.currentSubject.point!==t
          }));
          return{
            answer:w, attachments:u, answerStatus:function(t, n){
              if(!t||!e.currentSubject.correctAnswers)return"notSubmitted";
              var r, a, i, s, c=(r=e.currentSubject.settings, a=e.currentSubject.correctAnswers, i=o().sortBy(a, "sort"), s=new Map, y(r)?o().forEach(i, (function(e){
                s.set(e.sort, o().map(h(e), v))
              })):o().forEach(i, (function(e){
                s.set(e.sort, o().map(h(e), m))
              })), s);
              return function(e, t, n, r){
                var a, i="";
                return i=y(n)?v(e):m(e), (null==n?void 0:n.unordered)?(r.forEach((function(e, t){
                  g(i, e)&&(a=t)
                })), void 0!==a&&(r.delete(a), !0)):g(i, r.get(t))
              }
              (t, n, e.currentSubject.settings, c)||parseFloat(e.currentSubject.point).toFixed(1)===parseFloat(e.currentSubject.score).toFixed(1)?"correct":"wrong"
            }, shortAnswerPdfUpload:l, editAttachment:function(t){
              var n=G(G({
              }, e.currentSubject), {
                attachments:u
              });
              a.getSubjectAttachmentMapForVue(e.currentSubmission.id), a.openEditor(t.id, n, e.examineeName)
            }, canEditByPdfEditor:P.canEditByPdfEditor, canViewAnswerTag:x, showAnswerExplanation:d, showExplanationModal:function(){
              (0, B.default)(N.A, {
                examId:e.currentSubmission.examId, subject:e.currentSubject, markType:"subject", destroyComponent:!0
              }, i, {
                on:{
                  confirm:function(){
                    var e=new CustomEvent("refresh-current-subject");
                    window.dispatchEvent(e)
                  }
                }
              })
            }, useExplanationRender:p
          }
        }
      });
      const W=(0, p.A)(V, (function(){
        var e=this, t=e.$createElement, n=e._self._c||t;
        return n("div", {
          staticClass:"answer-area"
        }, [
          !e.answer&&e.attachments.length<=0?n("div", {
            staticClass:"student-answer"
          }, [
            n("span", {
              staticClass:"answer-tag wrong-tag"
            }, [
              e._v(e._s(e.$t("examMark.notSubmitted")))
            ])
          ]):e._e(), e._v(" "), e.answer?n("div", {
            staticClass:"student-answer", class:[
              {
                "has-explanation":e.currentSubject.answerExplanation
              }, e.currentSubject.type
            ]
          }, [
            n("span", {
              staticClass:"label-item"
            }, [
              e._v(e._s(e.$t("examMark.studentAnswer"))+":")
            ]), e._v(" "), "short_answer"===e.currentSubject.type?n("div", {
              staticClass:"short-answer-content"
            }, [
              n("div", {
                staticClass:"answer-content", domProps:{
                  innerHTML:e._s(e.answer)
                }
              }), e._v(" "), e.shortAnswerPdfUpload?n("div", {
                staticClass:"operate-bar"
              }, [
                n("Tooltip", {
                  staticClass:"opt-icon", attrs:{
                    placement:"top", transfer:"", content:e.$t("examMark.markAction")
                  }
                }, [
                  e.canEditByPdfEditor(e.shortAnswerPdfUpload)?n("a", {
                    on:{
                      click:function(t){
                        return e.editAttachment(e.shortAnswerPdfUpload)
                      }
                    }
                  }, [
                    n("i", {
                      staticClass:"font font-edit"
                    })
                  ]):e._e()
                ]), e._v(" "), n("Tooltip", {
                  staticClass:"opt-icon", attrs:{
                    placement:"top", transfer:"", content:e.$t("download")
                  }
                }, [
                  n("a", {
                    attrs:{
                      href:"/api/uploads/"+e.shortAnswerPdfUpload.id+"/blob?preview=true"
                    }
                  }, [
                    n("i", {
                      staticClass:"font font-table-edit-download"
                    })
                  ])
                ])
              ], 1):e._e()
            ]):n("div", {
              staticClass:"answer"
            }, e._l(e.answer, (function(t, r){
              return n("div", {
                key:r, staticClass:"fill-in-blank-answer"
              }, [
                n("span", {
                  staticClass:"sort circle-number"
                }, [
                  e._v(e._s(r+1))
                ]), e._v(" "), n("div", {
                  staticClass:"content"
                }, [
                  e._v("\n          "+e._s(t.content)+"\n        ")
                ]), e._v(" "), e.canViewAnswerTag?n("span", {
                  staticClass:"answer-tag", class:e.answerStatus(t.content, r)+"-tag"
                }, [
                  e._v("\n          "+e._s(e.$t("examMark."+e.answerStatus(t.content, r)))+"\n        ")
                ]):e._e()
              ])
            })), 0)
          ]):e._e(), e._v(" "), e.attachments.length>0?n("div", {
            staticClass:"student-attachments"
          }, [
            n("span", {
              staticClass:"label-item student-attachment-title"
            }, [
              e._v(e._s(e.$t("examMark.studentAttachment"))+":")
            ]), e._v(" "), n("div", {
              staticClass:"attachments"
            }, e._l(e.attachments, (function(t){
              return n("attachment", {
                key:t.id, attrs:{
                  attachment:t, "attachment-list":e.attachments, "current-subject":e.currentSubject, "submission-id":e.currentSubmission.id, "examinee-name":e.examineeName
                }
              })
            })), 1)
          ]):e._e(), e._v(" "), e.showAnswerExplanation?n("div", {
            staticClass:"answer-explanation"
          }, [
            e.currentSubject.correctAnswers&&"fill_in_blank"===e.currentSubject.type?n("div", {
              staticClass:"correct-answers"
            }, [
              n("span", {
                staticClass:"answer-explanation-label"
              }, [
                e._v(e._s(e.$t("examMark.rightAnswer"))+":")
              ]), e._v(" "), e._l(e.currentSubject.correctAnswers, (function(t, r){
                return n("span", {
                  key:r, staticClass:"answer"
                }, [
                  n("span", {
                    staticClass:"sort circle-number"
                  }, [
                    e._v(e._s(r+1))
                  ]), e._v(" "), n("span", [
                    e._v(e._s(t.content))
                  ])
                ])
              }))
            ], 2):e._e(), e._v(" "), e.currentSubject.answerExplanation||"short_answer"===e.currentSubject.type?n("div", {
              staticClass:"explanation"
            }, [
              "short_answer"===e.currentSubject.type?n("Tooltip", {
                staticClass:"opt-icon", attrs:{
                  placement:"top", transfer:"", content:e.$t("airGrading.exam.editExplanation")
                }
              }, [
                n("a", {
                  on:{
                    click:function(t){
                      return e.showExplanationModal()
                    }
                  }
                }, [
                  n("i", {
                    staticClass:"font font-edit"
                  })
                ])
              ]):e._e(), e._v(" "), n("div", {
                staticClass:"answer-explanation-label"
              }, [
                e._v(e._s(e.$t("subject.answerExplanation"))+":")
              ]), e._v(" "), e.useExplanationRender?n("div", {
                staticClass:"answer-explanation-render", class:{
                  "no-explanation":!e.currentSubject.answerExplanation
                }, domProps:{
                  innerHTML:e._s(e.currentSubject.answerExplanation||e.$t("air.noExplanation"))
                }
              }):n("div", {
                staticClass:"answer", domProps:{
                  innerHTML:e._s(e.currentSubject.answerExplanation)
                }
              })
            ], 1):e._e(), e._v(" "), e.currentSubject.knowledgeNodeReferences&&![
              "short_answer", "analysis", "fill_in_blank"
            ].includes(e.currentSubject.type)?n("div", {
              staticClass:"node-reference"
            }, [
              n("div", {
                staticClass:"answer-explanation-label"
              }, [
                e._v(e._s(e.$t("knowledgeGraph.node"))+":")
              ]), e._v(" "), n("div", {
                staticClass:"node-reference-list"
              }, e._l(e.currentSubject.knowledgeNodeReferences, (function(e){
                return n("div", {
                  key:e.id
                }, [
                  n("knowledge-node-tag", {
                    attrs:{
                      "course-id":e.courseId, "node-id":e.knowledgeNode.id, content:e.knowledgeNode.name, "go-to-graph":!0, size:"large"
                    }
                  })
                ], 1)
              })), 0)
            ]):e._e()
          ]):e._e()
        ])
      }), [
      ], !1, null, "73e62937", null).exports;
      const F=(0, r.pM)({
        name:"subject-mark-header", props:{
          viewFilter:{
            type:String, required:!0
          }, currentExaminees:{
            type:Array, required:!0
          }, examineeIndex:{
            type:Number, required:!0
          }, examinees:{
            type:Array, required:!0
          }, isGroup:{
            type:Boolean, default:!1
          }, currentSubjectId:{
            type:Number, required:!0
          }
        }, setup:function(e, t){
          var n=(0, r.KR)("not_marked");
          (0, r.wB)((function(){
            return e.viewFilter
          }), (function(){
            n.value=e.viewFilter
          }), {
            immediate:!0
          });
          var i=(0, r.EW)((function(){
            return e.isGroup?a.default.t("examMark.markStatus.markedByGroup"):a.default.t("examMark.markStatus.markedByStudent")
          })), s=(0, r.EW)((function(){
            return e.isGroup?a.default.t("examMark.markStatus.notMarkedByGroup"):a.default.t("examMark.markStatus.notMarkedByStudent")
          })), c=(0, r.EW)((function(){
            return e.examineeIndex<=0
          })), u=(0, r.EW)((function(){
            return e.examineeIndex>=e.currentExaminees.length-1
          })), l=(0, r.EW)((function(){
            return o().filter(e.examinees, (function(e){
              return"marked"===e.markStatus
            }))
          })), d=(0, r.EW)((function(){
            return o().filter(e.examinees, (function(e){
              return"marked"!==e.markStatus
            }))
          })), p=(0, r.EW)((function(){
            return l.value?l.value.length:0
          })), v=(0, r.EW)((function(){
            return d.value?d.value.length:0
          })), m=(0, r.EW)((function(){
            if(!e.examinees||e.examinees.length<=0)return 100;
            var n=p.value===e.examinees.length;
            return t.emit("currentSubjectIsMarkedAll", {
              isMarkedAll:n, currentSubjectId:e.currentSubjectId
            }), p.value/e.examinees.length*100
          })), f=(0, r.EW)((function(){
            return e.isGroup?a.default.t("examMark.markedGroupCount", [
              p.value
            ]):a.default.t("examMark.markedStudentCount", [
              p.value
            ])
          })), b=(0, r.EW)((function(){
            return e.isGroup?a.default.t("examMark.notMarkedGroupCount", [
              v.value
            ]):a.default.t("examMark.notMarkedStudentCount", [
              v.value
            ])
          }));
          return{
            filter:function(e){
              t.emit("filter", {
                val:e
              })
            }, switchAction:function(e){
              setTimeout((function(){
                ("pre"!==e||c.value)&&("next"!==e||u.value)||t.emit("switch", {
                  action:e
                })
              }), 300)
            }, preBtnDisabled:c, nextBtnDisabled:u, markedExamineesCount:p, notMarkedExamineesCount:v, markedPercent:m, filterSelect:n, markedOptionText:i, notMarkedOptionText:s, markedText:f, notMarkedText:b
          }
        }
      });
      const H=(0, p.A)(F, (function(){
        var e=this, t=e.$createElement, n=e._self._c||t;
        return n("div", {
          staticClass:"header-area"
        }, [
          n("div", {
            staticClass:"mark-status-filter"
          }, [
            n("Select", {
              staticClass:"select", on:{
                "on-change":e.filter
              }, model:{
                value:e.filterSelect, callback:function(t){
                  e.filterSelect=t
                }, expression:"filterSelect"
              }
            }, [
              n("Option", {
                attrs:{
                  value:"all"
                }
              }, [
                e._v(e._s(e.$t("examMark.markStatus.all")))
              ]), e._v(" "), n("Option", {
                attrs:{
                  value:"marked"
                }
              }, [
                e._v(e._s(e.markedOptionText))
              ]), e._v(" "), n("Option", {
                attrs:{
                  value:"not_marked"
                }
              }, [
                e._v(e._s(e.notMarkedOptionText))
              ])
            ], 1)
          ], 1), e._v(" "), n("div", {
            staticClass:"options"
          }, [
            n("div", {
              staticClass:"mark-progress"
            }, [
              n("div", {
                staticClass:"mark-info"
              }, [
                n("span", {
                  staticClass:"marked"
                }, [
                  e._v(e._s(e.markedText))
                ]), e._v(" "), n("span", [
                  e._v(e._s("，"+e.notMarkedText))
                ])
              ]), e._v(" "), n("Progress", {
                attrs:{
                  percent:e.markedPercent, "hide-info":"", "stroke-color":"#20BEC8"
                }
              })
            ], 1), e._v(" "), n("Button", {
              staticClass:"button pre-btn", class:{
                disabled:e.preBtnDisabled
              }, on:{
                click:function(t){
                  return e.switchAction("pre")
                }
              }
            }, [
              n("Icon", {
                attrs:{
                  type:"ios-arrow-back"
                }
              }), e._v("\n      "+e._s(e.$t("previous"))+"\n    ")
            ], 1), e._v(" "), n("Button", {
              staticClass:"button next-btn", class:{
                disabled:e.nextBtnDisabled
              }, on:{
                click:function(t){
                  return e.switchAction("next")
                }
              }
            }, [
              e._v("\n      "+e._s(e.$t("next"))+"\n      "), n("Icon", {
                attrs:{
                  type:"ios-arrow-forward"
                }
              })
            ], 1)
          ], 1)
        ])
      }), [
      ], !1, null, "eaa5799e", null).exports;
      n(906048);
      var Y=n(436296), J=function(){
        return(J=Object.assign||function(e){
          for(var t, n=1, r=arguments.length;
          n<r;
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
      const Z=(0, r.pM)({
        name:"subject-score-commit", components:{
          attachment:L, AirExamGradingPanel:Y.A
        }, props:{
          currentSubject:{
            type:Object, required:!0
          }, currentSubmission:{
            type:u.Od, required:!0
          }, allowExamScoreMark:{
            type:Boolean, required:!0
          }, examineeName:{
            type:String, required:!0
          }, isGroup:{
            type:Boolean, required:!0
          }, examineeIds:{
            type:Array, required:!1
          }, groupSubmissionIds:{
            type:Array, required:!1
          }
        }, setup:function(e, t){
          var n=(0, r.WQ)("hasAiAbility"), i=(0, r.KR)(null), c=(0, r.KR)(null), u=(0, r.KR)(null), d=(0, r.KR)([
          ]), p=document.querySelector("[ng-controller=ExamAttachmentMarkController]"), v=(0, b.useAngularScope)(p), m=(0, r.KR)(), f=(0, r.EW)((function(){
            var t=e.currentSubmission.submissionData.subjects, n=o().find(t, (function(t){
              return t.subjectId===e.currentSubject.id
            }));
            return n?"short_answer"===e.currentSubject.type?n.answer:o().orderBy(n.answers, [
              "sort"
            ], [
              "asc"
            ]):null
          })), y=(0, r.EW)((function(){
            var t, r=null===(t=window.featureToggles)||void 0===t?void 0:t.airGrading, a=e.currentSubmission.submissionData.isSimulated, i="short_answer"===e.currentSubject.type&&!e.currentSubject.parent;
            return r&&n&&!a&&i
          })), h=function(){
            if(c.value&&e.currentSubmission){
              var n={
                submission_id:e.currentSubmission.id, subject_id:e.currentSubject.id, comment:c.value
              };
              (0, l.Oi)(e.currentSubmission.examId, e.currentSubmission.id, n).then((function(e){
                t.emit("update-comment", n), j.Toast.success(e.data.message)
              }))
            }
          }, _=function(){
            i.value&&setTimeout((function(){
              i.value=Math.floor(10*i.value)/10
            }))
          }, g=function(n){
            n===Math.floor(10*n)/10?(u.value=null, e.isGroup?function(){
              var n, r;
              if(e.currentSubmission&&e.examineeIds&&e.groupSubmissionIds){
                var o=null===(n=e.currentSubmission)||void 0===n?void 0:n.scoreData[
                  e.currentSubject.id
                ];
                if(null===i.value||!o||parseFloat(o)!==i.value){
                  var s=null!==i.value?i.value.toString():null, c={
                    examinee_ids:e.examineeIds, graded_subjects:[
                      {
                        subject_id:e.currentSubject.id, score:s, instance_id:e.currentSubmission.instanceId, parent_id:null===(r=e.currentSubject.parent)||void 0===r?void 0:r.id
                      }
                    ], group_submission_ids:e.groupSubmissionIds, submission_id:e.currentSubmission.id
                  };
                  (0, l.$u)(e.currentSubmission.examId, c).then((function(e){
                    j.Toast.success(a.default.t("requestSuccess")), u.value=null, t.emit("give-subject-score", {
                      value:i.value
                    })
                  }), (function(e){
                    u.value=e.response.data.errors.graded_subjects[
                      0
                    ].score[
                      0
                    ]
                  }))
                }
              }
            }
            ():function(){
              var n, r;
              if(e.currentSubmission){
                var o=null===(n=e.currentSubmission)||void 0===n?void 0:n.scoreData[
                  e.currentSubject.id
                ];
                if(null===i.value||!o||parseFloat(o)!==i.value){
                  var s=null!==i.value?i.value.toString():null, c={
                    examinee_id:e.currentSubmission.examineeId, graded_subjects:[
                      {
                        subject_id:e.currentSubject.id, score:s, instance_id:e.currentSubmission.instanceId, parent_id:null===(r=e.currentSubject.parent)||void 0===r?void 0:r.id
                      }
                    ], submission_id:e.currentSubmission.id
                  };
                  (0, l.YO)(e.currentSubmission.examId, c).then((function(e){
                    var n;
                    j.Toast.success(a.default.t("requestSuccess")), u.value=null, t.emit("give-subject-score", {
                      value:null===(n=i.value)||void 0===n?void 0:n.toFixed(1)
                    })
                  }), (function(e){
                    u.value=e.response.data.errors.graded_subjects[
                      0
                    ].score[
                      0
                    ]
                  }))
                }
              }
            }
            ()):_()
          }, w=o().debounce((function(){
            g(i.value)
          }), 500), x=function(){
            var t, n;
            m.value=J(J({
            }, o().cloneDeep(e.currentSubject)), {
              answer:f.value, attachments:null===(n=null===(t=e.currentSubmission.submissionData)||void 0===t?void 0:t.subjects[
                e.currentSubject.sort
              ])||void 0===n?void 0:n.attachments
            })
          };
          return(0, r.sV)((function(){
            x()
          })), (0, r.wB)((function(){
            return e.currentSubmission
          }), (function(){
            var t;
            !function(){
              var t;
              if(e.currentSubmission&&e.currentSubmission.scoreData){
                var n=null===(t=e.currentSubmission)||void 0===t?void 0:t.scoreData[
                  e.currentSubject.id
                ];
                i.value=n?parseFloat(n):null
              }
              else i.value=null
            }
            (), function(){
              var t;
              if(e.currentSubmission&&e.currentSubmission.commentData){
                var n=null===(t=e.currentSubmission)||void 0===t?void 0:t.commentData[
                  e.currentSubject.id
                ];
                c.value=n?n.comment:null
              }
              else c.value=null
            }
            (), function(){
              var t, n;
              if(e.currentSubmission&&e.currentSubmission.markedAttachments){
                var r=(0, s.plainToClass)(R, null===(t=e.currentSubmission)||void 0===t?void 0:t.markedAttachments[
                  null===(n=e.currentSubject)||void 0===n?void 0:n.id
                ]);
                d.value=r||[
                ]
              }
              else d.value=[
              ]
            }
            (), x(), u.value=null, v.getSubjectAttachmentMapForVue(null===(t=e.currentSubmission)||void 0===t?void 0:t.id)
          }), {
            immediate:!0
          }), (0, r.wB)((function(){
            return e.currentSubject
          }), (function(){
            x()
          })), {
            currentSubjectPayload:m, currentComment:c, currentScore:i, hasAiAbility:n, scoreErrorMessage:u, canShowAirExamGradingPanel:y, submitScore:w, markedAttachments:d, applyAiGradingResult:function(e){
              c.value=e.aiGenComment, i.value=e.aiGenScore, w(), h()
            }, deleteMarkedAttachment:function(e){
              (0, l.bM)(e.id).then((function(){
                d.value=o().filter(d.value, (function(t){
                  return t.id!==e.id
                })), t.emit("delete-marked-attachment", {
                  value:d.value
                })
              }))
            }, giveSubjectScore:g, limitScore:_, submitComment:h
          }
        }
      });
      const Q=(0, p.A)(Z, (function(){
        var e=this, t=e.$createElement, n=e._self._c||t;
        return n("div", {
          staticClass:"mark-area"
        }, [
          n("div", {
            staticClass:"manual-grading"
          }, [
            n("div", {
              staticClass:"subject-score"
            }, [
              n("span", {
                staticClass:"label-item"
              }, [
                e._v(e._s(e.$t("examMark.subjectScore"))+"：")
              ]), e._v(" "), n("InputNumber", {
                attrs:{
                  placeholder:"0 ~ "+e.currentSubject.point, min:0, step:1, disabled:!e.allowExamScoreMark, "active-change":!1
                }, on:{
                  "on-change":e.submitScore
                }, model:{
                  value:e.currentScore, callback:function(t){
                    e.currentScore=t
                  }, expression:"currentScore"
                }
              }), e._v(" "), n("span", {
                staticClass:"label-item score"
              }, [
                e._v(e._s(e.$t("examMark.points")))
              ]), e._v(" "), e.scoreErrorMessage?n("span", {
                staticClass:"error-message"
              }, [
                n("i", {
                  staticClass:"font font-alert-circle"
                }), e._v("\n        "+e._s(e.scoreErrorMessage)+"\n      ")
              ]):e._e()
            ], 1), e._v(" "), "short_answer"===e.currentSubject.type?n("div", {
              staticClass:"comments"
            }, [
              n("span", {
                staticClass:"label-item"
              }, [
                e._v(e._s(e.$t("examMark.instructorComment"))+"：")
              ]), e._v(" "), n("Input", {
                attrs:{
                  type:"textarea", rows:4, disabled:!e.allowExamScoreMark, maxlength:"5000", "show-word-limit":!0, placeholder:e.$t("examMark.commentPlaceholder")
                }, on:{
                  "on-blur":e.submitComment
                }, model:{
                  value:e.currentComment, callback:function(t){
                    e.currentComment=t
                  }, expression:"currentComment"
                }
              })
            ], 1):e._e(), e._v(" "), e.markedAttachments.length>0?n("div", {
              staticClass:"marked_attachments"
            }, [
              n("span", {
                staticClass:"label-item"
              }, [
                e._v(e._s(e.$t("examMark.markedAttachments"))+"：")
              ]), e._v(" "), n("div", {
                staticClass:"attachments"
              }, e._l(e.markedAttachments, (function(t){
                return n("attachment", {
                  key:t.id, attrs:{
                    attachment:t, "attachment-list":e.markedAttachments, "current-subject":e.currentSubject, "submission-id":e.currentSubmission.id, "examinee-name":e.examineeName, "can-delete":!0, "can-mark":!1
                  }, on:{
                    "delete-attachment":e.deleteMarkedAttachment
                  }
                })
              })), 1)
            ]):e._e()
          ]), e._v(" "), e.canShowAirExamGradingPanel?n("AirExamGradingPanel", {
            attrs:{
              "exam-id":e.currentSubmission.examId, subjects:[
                e.currentSubjectPayload
              ], "current-subject-id":e.currentSubject.id, submission:e.currentSubmission, "mark-type":"subject"
            }, on:{
              "apply-ai-grading-result":e.applyAiGradingResult
            }
          }):e._e()
        ], 1)
      }), [
      ], !1, null, "464d7713", null).exports;
      const X=(0, r.pM)({
        name:"MarkSelect", props:{
          currentId:{
            type:Number, require:!0
          }, options:{
            type:Array, require:!0
          }
        }, setup:function(e, t){
          var n=(0, r.KR)(!1), a=(0, r.KR)(), i=(0, r.KR)(""), o=(0, r.EW)((function(){
            return j._.find(e.options, {
              id:e.currentId
            })
          })), s=function(e){
            a.value.contains(e.target)||(i.value="", n.value=!1)
          }, c=(0, r.EW)((function(){
            return i.value?j._.filter(e.options, (function(e){
              return e.label.includes(i.value)
            })):e.options
          }));
          return(0, r.sV)((function(){
            document.addEventListener("click", s)
          })), (0, r.hi)((function(){
            document.removeEventListener("click", s)
          })), {
            showDropdown:n, selectOption:o, toggleDropdown:function(){
              n.value=!n.value
            }, dropdownRef:a, keyword:i, searchOptions:c, select:function(e){
              i.value="", n.value=!1, t.emit("on-change", e)
            }
          }
        }
      });
      const ee=(0, p.A)(X, (function(){
        var e=this, t=e.$createElement, n=e._self._c||t;
        return n("div", {
          staticClass:"select-container"
        }, [
          e.selectOption?n("div", {
            staticClass:"select-selection"
          }, [
            n("span", {
              staticClass:"status", class:e.selectOption.status
            }, [
              e._v(e._s(e.selectOption.statusText))
            ]), e._v(" "), n("span", {
              staticClass:"title"
            }, [
              e._v(e._s(e.selectOption.label))
            ]), e._v(" "), n("div", {
              staticClass:"toggle-icon", on:{
                click:function(t){
                  return t.stopPropagation(), e.toggleDropdown()
                }
              }
            }, [
              e.showDropdown?n("i", {
                staticClass:"font font-arrow-dropdown"
              }):n("i", {
                staticClass:"font font-arrow-collapse"
              })
            ])
          ]):e._e(), e._v(" "), n("div", {
            directives:[
              {
                name:"show", rawName:"v-show", value:e.showDropdown, expression:"showDropdown"
              }
            ], ref:"dropdownRef", staticClass:"select-dropdown"
          }, [
            n("div", {
              staticClass:"search-row"
            }, [
              n("div", {
                staticClass:"search-content"
              }, [
                n("input", {
                  directives:[
                    {
                      name:"model", rawName:"v-model", value:e.keyword, expression:"keyword"
                    }
                  ], attrs:{
                    type:"search", placeholder:e.$t("enter_keyword")
                  }, domProps:{
                    value:e.keyword
                  }, on:{
                    input:function(t){
                      t.target.composing||(e.keyword=t.target.value)
                    }
                  }
                }), e._v(" "), n("i", {
                  staticClass:"font font-standard-search"
                })
              ])
            ]), e._v(" "), e.searchOptions.length>0?n("ul", {
              staticClass:"dropdown-items"
            }, e._l(e.searchOptions, (function(t){
              return n("li", {
                key:t.id, staticClass:"item", on:{
                  click:function(n){
                    return e.select(t.id)
                  }
                }
              }, [
                n("span", {
                  staticClass:"status", class:t.status
                }, [
                  e._v(e._s(t.statusText))
                ]), e._v(" "), n("span", {
                  staticClass:"title", class:{
                    selected:t.id===e.currentId
                  }
                }, [
                  e._v(e._s(t.label))
                ])
              ])
            })), 0):n("ul", {
              staticClass:"dropdown-items not-found-items"
            }, [
              n("li", [
                e._v(e._s(e.$t("noMatchingData")))
              ])
            ])
          ])
        ])
      }), [
      ], !1, null, "699ec9d4", null).exports;
      var te=function(e, t, n, r){
        return new(n||(n=Promise))((function(a, i){
          function o(e){
            try{
              c(r.next(e))
            }
            catch(e){
              i(e)
            }
          }
          function s(e){
            try{
              c(r.throw(e))
            }
            catch(e){
              i(e)
            }
          }
          function c(e){
            var t;
            e.done?a(e.value):(t=e.value, t instanceof n?t:new n((function(e){
              e(t)
            }))).then(o, s)
          }
          c((r=r.apply(e, t||[
          ])).next())
        }))
      }, ne=function(e, t){
        var n, r, a, i, o={
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
          next:s(0), throw:s(1), return:s(2)
        }, "function"==typeof Symbol&&(i[
          Symbol.iterator
        ]
        =function(){
          return this
        }), i;
        function s(s){
          return function(c){
            return function(s){
              if(n)throw new TypeError("Generator is already executing.");
              for(;
              i&&(i=0, s[
                0
              ]
              &&(o=0)), o;
              )try{
                if(n=1, r&&(a=2&s[
                  0
                ]
                ?r.return:s[
                  0
                ]
                ?r.throw||((a=r.return)&&a.call(r), 0):r.next)&&!(a=a.call(r, s[
                  1
                ])).done)return a;
                switch(r=0, a&&(s=[
                  2&s[
                    0
                  ], a.value
                ]), s[
                  0
                ]){
                  case 0:case 1:a=s;
                  break;
                  case 4:return o.label++, {
                    value:s[
                      1
                    ], done:!1
                  };
                  case 5:o.label++, r=s[
                    1
                  ], s=[
                    0
                  ];
                  continue;
                  case 7:s=o.ops.pop(), o.trys.pop();
                  continue;
                  default:if(!(a=o.trys, (a=a.length>0&&a[
                    a.length-1
                  ])||6!==s[
                    0
                  ]
                  &&2!==s[
                    0
                  ])){
                    o=0;
                    continue
                  }
                  if(3===s[
                    0
                  ]
                  &&(!a||s[
                    1
                  ]
                  >a[
                    0
                  ]
                  &&s[
                    1
                  ]
                  <a[
                    3
                  ])){
                    o.label=s[
                      1
                    ];
                    break
                  }
                  if(6===s[
                    0
                  ]
                  &&o.label<a[
                    1
                  ]){
                    o.label=a[
                      1
                    ], a=s;
                    break
                  }
                  if(a&&o.label<a[
                    2
                  ]){
                    o.label=a[
                      2
                    ], o.ops.push(s);
                    break
                  }
                  a[
                    2
                  ]
                  &&o.ops.pop(), o.trys.pop();
                  continue
                }
                s=t.call(e, o)
              }
              catch(e){
                s=[
                  6, e
                ], r=0
              }
              finally{
                n=a=0
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
              s, c
            ])
          }
        }
      };
      const re=(0, r.pM)({
        name:"mark-subject", components:{
          subjectAnswer:W, Avatar:I.A, attachment:L, subjectMarkHeader:H, subjectScoreCommit:Q, MarkSelect:ee
        }, props:{
          exam:{
            type:u.yf, required:!0
          }, currentSubject:{
            type:Object, required:!0
          }, isMakeupExam:{
            type:Boolean, required:!0
          }, filterSelectStatus:{
            type:String
          }
        }, setup:function(e, t){
          var n=this, i=(0, r.KR)([
          ]), d=(0, r.KR)(), p=(0, r.KR)([
          ]), v=(0, r.KR)([
          ]), m=(0, r.KR)(), f=(0, r.KR)(0), b=(0, r.KR)(0), y=(0, r.KR)("not_marked"), h=(0, r.EW)((function(){
            var t;
            return"/exam/".concat(e.exam.id, "/subjects#/examinee/").concat(null===(t=m.value)||void 0===t?void 0:t.id, "?thumbnail=true")
          })), _=function(t){
            return te(n, void 0, void 0, (function(){
              var n;
              return ne(this, (function(r){
                switch(r.label){
                  case 0:return 0!==e.exam.id&&e.currentSubject.id&&t?[
                    4, (0, l.dc)(e.exam.id, e.currentSubject.id, t, e.isMakeupExam)
                  ]
                  :[
                    2
                  ];
                  case 1:return n=r.sent(), i.value=(0, s.plainToClass)(u.Od, (0, c.camelizeKeys)(n.data.submissions)), d.value=i.value[
                    0
                  ], [
                    2
                  ]
                }
              }))
            }))
          }, g=function(){
            return te(n, void 0, void 0, (function(){
              var e;
              return ne(this, (function(t){
                switch(t.label){
                  case 0:return v.value?(e=v.value[
                    f.value
                  ])?[
                    4, _(e.id)
                  ]
                  :[
                    3, 2
                  ]
                  :[
                    2, null
                  ];
                  case 1:t.sent(), b.value=e.id, t.label=2;
                  case 2:return m.value=e, [
                    2, null
                  ]
                }
              }))
            }))
          }, w=function(){
            return te(n, void 0, void 0, (function(){
              var e;
              return ne(this, (function(t){
                switch(t.label){
                  case 0:return v.value&&b.value?(m.value=o().find(v.value, (function(e){
                    return e.id===b.value
                  })), m.value?[
                    4, _(m.value.id)
                  ]
                  :[
                    3, 2
                  ]):[
                    2, null
                  ];
                  case 1:t.sent(), t.label=2;
                  case 2:return e=o().findIndex(v.value, (function(e){
                    var t;
                    return e.id===(null===(t=m.value)||void 0===t?void 0:t.id)
                  })), f.value=e, [
                    2, null
                  ]
                }
              }))
            }))
          }, x=function(e){
            return void 0===e&&(e=null), te(n, void 0, void 0, (function(){
              return ne(this, (function(t){
                switch(t.label){
                  case 0:return e&&(y.value=e.val), "all"===y.value?v.value=p.value:v.value=o().filter(p.value, (function(e){
                    return e.markStatus===y.value
                  })), f.value=0, [
                    4, g()
                  ];
                  case 1:return t.sent(), [
                    2
                  ]
                }
              }))
            }))
          }, k=function(){
            return te(n, void 0, void 0, (function(){
              var t;
              return ne(this, (function(n){
                switch(n.label){
                  case 0:return 0!==e.exam.id&&e.currentSubject.id?[
                    4, (0, l.o7)(e.exam.id, e.currentSubject.id, e.isMakeupExam)
                  ]
                  :[
                    2
                  ];
                  case 1:return t=n.sent(), p.value=(0, s.plainToClass)(u.vy, (0, c.camelizeKeys)(t.data.examinees)), [
                    4, x()
                  ];
                  case 2:return n.sent(), [
                    2
                  ]
                }
              }))
            }))
          }, S=(0, r.EW)((function(){
            return o().map(v.value, (function(e){
              var t=e.markStatus?a.default.t("examMark.markStatus.".concat((0, c.camelize)(e.markStatus))):"";
              return{
                id:e.id, label:"".concat(e.name, " (").concat(e.userNo, ")"), status:e.markStatus||"", statusText:t
              }
            }))
          }));
          return(0, r.sV)((function(){
            return te(n, void 0, void 0, (function(){
              return ne(this, (function(e){
                switch(e.label){
                  case 0:return[
                    4, k()
                  ];
                  case 1:return e.sent(), [
                    2
                  ]
                }
              }))
            }))
          })), (0, r.wB)((function(){
            return e.currentSubject
          }), (function(){
            return te(n, void 0, void 0, (function(){
              return ne(this, (function(e){
                switch(e.label){
                  case 0:return[
                    4, k()
                  ];
                  case 1:return e.sent(), [
                    2
                  ]
                }
              }))
            }))
          })), (0, r.wB)((function(){
            return e.exam
          }), (function(){
            return te(n, void 0, void 0, (function(){
              return ne(this, (function(e){
                switch(e.label){
                  case 0:return[
                    4, k()
                  ];
                  case 1:return e.sent(), [
                    2
                  ]
                }
              }))
            }))
          })), (0, r.wB)((function(){
            return e.filterSelectStatus
          }), (function(){
            e.filterSelectStatus&&(y.value=e.filterSelectStatus)
          })), {
            examinee:m, examinees:p, currentExaminees:v, currentExamineeId:b, currentSubmission:d, examineeIndex:f, submissions:i, camelize:c.camelize, viewFilter:y, moment:T, markExamUrl:h, filterCurrentExaminees:x, giveSubjectScore:function(t){
              var n;
              d.value.scoreData[
                e.currentSubject.id
              ]
              =t.value, n=e.currentSubject.id, 0===o().filter(i.value, (function(e){
                return null===e.scoreData[
                  n
                ]
              })).length&&(m.value.markStatus="marked")
            }, switchExaminee:function(e){
              return te(n, void 0, void 0, (function(){
                var t;
                return ne(this, (function(n){
                  switch(n.label){
                    case 0:return t=o().findIndex(v.value, (function(e){
                      var t;
                      return e.id===(null===(t=m.value)||void 0===t?void 0:t.id)
                    })), "pre"===e.action&&t-1>=0&&(f.value=t-1), "next"===e.action&&t+1<v.value.length&&(f.value=t+1), [
                      4, g()
                    ];
                    case 1:return n.sent(), [
                      2
                    ]
                  }
                }))
              }))
            }, findExamineeById:w, switchSubmission:function(e){
              return te(n, void 0, void 0, (function(){
                return ne(this, (function(t){
                  return d.value=o().find(i.value, (function(t){
                    return t.id===e
                  })), [
                    2
                  ]
                }))
              }))
            }, deleteMarkedAttachment:function(t){
              var n, r;
              null===(n=d.value)||void 0===n||(n.markedAttachments[
                null===(r=e.currentSubject)||void 0===r?void 0:r.id
              ]
              =t.value)
            }, currentSubjectIsMarkedAll:function(e){
              t.emit("currentSubjectIsMarkedAll", e)
            }, updateComment:function(e){
              var t=o().find(i.value, (function(t){
                return t.id===e.submission_id
              }));
              t&&(t.commentData[
                e.subject_id
              ]
              ={
                comment:e.comment
              })
            }, studentOptions:S, studentChanged:function(e){
              b.value=e, w()
            }
          }
        }
      });
      const ae=(0, p.A)(re, (function(){
        var e=this, t=e.$createElement, n=e._self._c||t;
        return n("div", {
          staticClass:"mark-subject-main"
        }, [
          e.currentSubject.id?n("subject-mark-header", {
            attrs:{
              "view-filter":e.viewFilter, "current-examinees":e.currentExaminees, "examinee-index":e.examineeIndex, examinees:e.examinees, "current-subject-id":e.currentSubject.id
            }, on:{
              filter:e.filterCurrentExaminees, switch:e.switchExaminee, currentSubjectIsMarkedAll:e.currentSubjectIsMarkedAll
            }
          }):e._e(), e._v(" "), e.examinee&&e.currentSubmission?n("div", {
            staticClass:"main-area"
          }, [
            n("div", {
              staticClass:"subject-area"
            }, [
              e.examinee?n("div", {
                staticClass:"student-info"
              }, [
                n("div", {
                  staticClass:"avatar"
                }, [
                  n("Avatar", {
                    staticClass:"avatar32", attrs:{
                      user:e.examinee
                    }
                  })
                ], 1), e._v(" "), n("MarkSelect", {
                  staticClass:"select-student", attrs:{
                    "current-id":e.currentExamineeId, options:e.studentOptions
                  }, on:{
                    "on-change":e.studentChanged
                  }
                }), e._v(" "), n("div", {
                  staticClass:"delimiter"
                }), e._v(" "), n("a", {
                  attrs:{
                    href:e.markExamUrl, target:"_blank"
                  }
                }, [
                  e._v(e._s(e.$t("examMark.submissionDetails")))
                ])
              ], 1):e._e(), e._v(" "), e.currentSubmission?n("div", {
                staticClass:"submissions"
              }, [
                n("span", {
                  staticClass:"submission-label"
                }, [
                  e._v(e._s(e.$t("examMark.submissionVersions"))+"：")
                ]), e._v(" "), n("div", {
                  staticClass:"submission-versions"
                }, e._l(e.submissions, (function(t){
                  return n("div", {
                    key:t.id
                  }, [
                    n("Tooltip", {
                      attrs:{
                        placement:"top", transfer:"", content:t.scoreData[
                          e.currentSubject.id
                        ]
                        ?e.$t("examMark.subjectVersionMarked"):e.$t("examMark.subjectVersionNotMarked")
                      }
                    }, [
                      n("span", {
                        staticClass:"version", class:{
                          active:t.id===e.currentSubmission.id
                        }, on:{
                          click:function(n){
                            return e.switchSubmission(t.id)
                          }
                        }
                      }, [
                        t.scoreData[
                          e.currentSubject.id
                        ]
                        ?n("Icon", {
                          attrs:{
                            custom:"font font-submission-marked"
                          }
                        }):n("Icon", {
                          attrs:{
                            custom:"font font-submission-not-marked"
                          }
                        }), e._v("\n                "+e._s(e.moment(t.submittedAt).format("YYYY.MM.DD HH:mm"))+"\n              ")
                      ], 1)
                    ])
                  ], 1)
                })), 0)
              ]):e._e(), e._v(" "), e.currentSubject?n("subjectAnswer", {
                attrs:{
                  "current-submission":e.currentSubmission, "subject-answer-explanation":e.currentSubject.answerExplanation, "current-subject":e.currentSubject, "examinee-name":e.examinee.name
                }
              }):e._e()
            ], 1), e._v(" "), n("subject-score-commit", {
              attrs:{
                "examinee-name":e.examinee.name, "allow-exam-score-mark":e.exam.allowExamScoreMark, "current-submission":e.currentSubmission, "current-subject":e.currentSubject, "is-group":!1
              }, on:{
                "give-subject-score":e.giveSubjectScore, "delete-marked-attachment":e.deleteMarkedAttachment, "update-comment":e.updateComment
              }
            })
          ], 1):n("div", {
            staticClass:"main-area no-data"
          }, [
            n("div", {
              staticClass:"not-data-container"
            }, [
              n("svgIcon", {
                staticClass:"icon-not-subjects", attrs:{
                  name:"interaction-unsupported"
                }
              }), e._v(" "), n("div", [
                e._v(e._s(e.$t("noData")))
              ])
            ], 1)
          ])
        ], 1)
      }), [
      ], !1, null, "012a0219", null).exports;
      const ie=n.p+"assets/images/large/02abc6293a39bf241393.png";
      var oe=function(e, t, n, r){
        return new(n||(n=Promise))((function(a, i){
          function o(e){
            try{
              c(r.next(e))
            }
            catch(e){
              i(e)
            }
          }
          function s(e){
            try{
              c(r.throw(e))
            }
            catch(e){
              i(e)
            }
          }
          function c(e){
            var t;
            e.done?a(e.value):(t=e.value, t instanceof n?t:new n((function(e){
              e(t)
            }))).then(o, s)
          }
          c((r=r.apply(e, t||[
          ])).next())
        }))
      }, se=function(e, t){
        var n, r, a, i, o={
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
          next:s(0), throw:s(1), return:s(2)
        }, "function"==typeof Symbol&&(i[
          Symbol.iterator
        ]
        =function(){
          return this
        }), i;
        function s(s){
          return function(c){
            return function(s){
              if(n)throw new TypeError("Generator is already executing.");
              for(;
              i&&(i=0, s[
                0
              ]
              &&(o=0)), o;
              )try{
                if(n=1, r&&(a=2&s[
                  0
                ]
                ?r.return:s[
                  0
                ]
                ?r.throw||((a=r.return)&&a.call(r), 0):r.next)&&!(a=a.call(r, s[
                  1
                ])).done)return a;
                switch(r=0, a&&(s=[
                  2&s[
                    0
                  ], a.value
                ]), s[
                  0
                ]){
                  case 0:case 1:a=s;
                  break;
                  case 4:return o.label++, {
                    value:s[
                      1
                    ], done:!1
                  };
                  case 5:o.label++, r=s[
                    1
                  ], s=[
                    0
                  ];
                  continue;
                  case 7:s=o.ops.pop(), o.trys.pop();
                  continue;
                  default:if(!(a=o.trys, (a=a.length>0&&a[
                    a.length-1
                  ])||6!==s[
                    0
                  ]
                  &&2!==s[
                    0
                  ])){
                    o=0;
                    continue
                  }
                  if(3===s[
                    0
                  ]
                  &&(!a||s[
                    1
                  ]
                  >a[
                    0
                  ]
                  &&s[
                    1
                  ]
                  <a[
                    3
                  ])){
                    o.label=s[
                      1
                    ];
                    break
                  }
                  if(6===s[
                    0
                  ]
                  &&o.label<a[
                    1
                  ]){
                    o.label=a[
                      1
                    ], a=s;
                    break
                  }
                  if(a&&o.label<a[
                    2
                  ]){
                    o.label=a[
                      2
                    ], o.ops.push(s);
                    break
                  }
                  a[
                    2
                  ]
                  &&o.ops.pop(), o.trys.pop();
                  continue
                }
                s=t.call(e, o)
              }
              catch(e){
                s=[
                  6, e
                ], r=0
              }
              finally{
                n=a=0
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
              s, c
            ])
          }
        }
      };
      const ce=(0, r.pM)({
        name:"group-mark-subject", components:{
          subjectAnswer:W, attachment:L, subjectMarkHeader:H, subjectScoreCommit:Q, MarkSelect:ee
        }, props:{
          exam:{
            type:u.yf, required:!0
          }, currentSubject:{
            type:Object, required:!0
          }, isMakeupExam:{
            type:Boolean, required:!0
          }, filterSelectStatus:{
            type:String
          }
        }, setup:function(e, t){
          var n=this, i=(0, r.KR)([
          ]), d=(0, r.KR)(), p=(0, r.KR)([
          ]), v=(0, r.KR)([
          ]), m=(0, r.KR)(), f=(0, r.KR)(0), b=(0, r.KR)(0), y=(0, r.KR)("not_marked"), h=(0, r.EW)((function(){
            var t;
            return d.value?"/exam/".concat(e.exam.id, "/subjects#/examinee/").concat(null===(t=d.value)||void 0===t?void 0:t.examineeId, "?thumbnail=true"):null
          })), _=(0, r.EW)((function(){
            var e=[
            ];
            return i.value&&o().forEach(i.value, (function(t){
              e.push(t.id)
            })), e
          })), g=function(t){
            return oe(n, void 0, void 0, (function(){
              var n, r;
              return se(this, (function(a){
                switch(a.label){
                  case 0:return 0!==e.exam.id&&(null===(r=e.currentSubject)||void 0===r?void 0:r.id)&&t?[
                    4, (0, l.o1)(e.exam.id, e.currentSubject.id, t, e.isMakeupExam)
                  ]
                  :[
                    2
                  ];
                  case 1:return n=a.sent(), i.value=(0, s.plainToClass)(u.Od, (0, c.camelizeKeys)(n.data.submissions)), d.value=i.value[
                    0
                  ], [
                    2
                  ]
                }
              }))
            }))
          }, w=function(){
            return oe(n, void 0, void 0, (function(){
              var e;
              return se(this, (function(t){
                switch(t.label){
                  case 0:return v.value?(e=v.value[
                    f.value
                  ])?[
                    4, g(e.id)
                  ]
                  :[
                    3, 2
                  ]
                  :[
                    2, null
                  ];
                  case 1:t.sent(), b.value=e.id, t.label=2;
                  case 2:return m.value=e, [
                    2, null
                  ]
                }
              }))
            }))
          }, x=function(){
            return oe(n, void 0, void 0, (function(){
              var e;
              return se(this, (function(t){
                switch(t.label){
                  case 0:return v.value&&b.value?(m.value=o().find(v.value, (function(e){
                    return e.id===b.value
                  })), m.value?[
                    4, g(m.value.id)
                  ]
                  :[
                    3, 2
                  ]):[
                    2, null
                  ];
                  case 1:t.sent(), t.label=2;
                  case 2:return e=o().findIndex(v.value, (function(e){
                    var t;
                    return e.id===(null===(t=m.value)||void 0===t?void 0:t.id)
                  })), f.value=e, [
                    2, null
                  ]
                }
              }))
            }))
          }, k=function(e){
            return void 0===e&&(e=null), oe(n, void 0, void 0, (function(){
              return se(this, (function(t){
                switch(t.label){
                  case 0:return e&&(y.value=e.val), "all"===y.value?v.value=p.value:v.value=o().filter(p.value, (function(e){
                    return e.markStatus===y.value
                  })), f.value=0, [
                    4, w()
                  ];
                  case 1:return t.sent(), [
                    2
                  ]
                }
              }))
            }))
          }, S=function(){
            return oe(n, void 0, void 0, (function(){
              var t, n;
              return se(this, (function(r){
                switch(r.label){
                  case 0:return 0!==e.exam.id&&(null===(n=e.currentSubject)||void 0===n?void 0:n.id)?[
                    4, (0, l.d8)(e.exam.id, e.currentSubject.id, e.isMakeupExam)
                  ]
                  :[
                    2
                  ];
                  case 1:return t=r.sent(), p.value=(0, s.plainToClass)(u.YJ, (0, c.camelizeKeys)(t.data.groups)), [
                    4, k()
                  ];
                  case 2:return r.sent(), [
                    2
                  ]
                }
              }))
            }))
          }, j=(0, r.EW)((function(){
            return o().map(v.value, (function(e){
              var t=e.markStatus?a.default.t("examMark.markStatus.".concat((0, c.camelize)(e.markStatus))):"";
              return{
                id:e.id, label:e.name, status:e.markStatus||"", statusText:t
              }
            }))
          }));
          (0, r.sV)((function(){
            return oe(n, void 0, void 0, (function(){
              return se(this, (function(e){
                switch(e.label){
                  case 0:return y.value="not_marked", [
                    4, S()
                  ];
                  case 1:return e.sent(), [
                    2
                  ]
                }
              }))
            }))
          })), (0, r.wB)((function(){
            return e.currentSubject
          }), (function(){
            return oe(n, void 0, void 0, (function(){
              return se(this, (function(e){
                switch(e.label){
                  case 0:return y.value="not_marked", [
                    4, S()
                  ];
                  case 1:return e.sent(), [
                    2
                  ]
                }
              }))
            }))
          })), (0, r.wB)((function(){
            return e.exam
          }), (function(){
            return oe(n, void 0, void 0, (function(){
              return se(this, (function(e){
                switch(e.label){
                  case 0:return[
                    4, S()
                  ];
                  case 1:return e.sent(), [
                    2
                  ]
                }
              }))
            }))
          })), (0, r.wB)((function(){
            return e.filterSelectStatus
          }), (function(){
            e.filterSelectStatus&&(y.value=e.filterSelectStatus)
          }));
          return{
            groupAvatar:ie, group:m, groups:p, groupIndex:f, currentGroups:v, currentGroupId:b, currentSubmission:d, submissions:i, groupSubmissionIds:_, camelize:c.camelize, viewFilter:y, moment:T, markExamUrl:h, filterCurrentGroups:k, giveSubjectScore:function(t){
              var n;
              d.value.scoreData[
                e.currentSubject.id
              ]
              =t.value, n=e.currentSubject.id, 0===o().filter(i.value, (function(e){
                return null===e.scoreData[
                  n
                ]
              })).length&&(m.value.markStatus="marked")
            }, switchGroup:function(e){
              return oe(n, void 0, void 0, (function(){
                var t;
                return se(this, (function(n){
                  switch(n.label){
                    case 0:return t=o().findIndex(v.value, (function(e){
                      var t;
                      return e.id===(null===(t=m.value)||void 0===t?void 0:t.id)
                    })), "pre"===e.action&&t-1>=0&&(f.value=t-1), "next"===e.action&&t+1<v.value.length&&(f.value=t+1), [
                      4, w()
                    ];
                    case 1:return n.sent(), [
                      2
                    ]
                  }
                }))
              }))
            }, findGroupById:x, switchSubmission:function(e){
              return oe(n, void 0, void 0, (function(){
                return se(this, (function(t){
                  return d.value=o().find(i.value, (function(t){
                    return t.id===e
                  })), [
                    2
                  ]
                }))
              }))
            }, deleteMarkedAttachment:function(t){
              var n, r;
              null===(n=d.value)||void 0===n||(n.markedAttachments[
                null===(r=e.currentSubject)||void 0===r?void 0:r.id
              ]
              =t.value)
            }, currentSubjectIsMarkedAll:function(e){
              t.emit("currentSubjectIsMarkedAll", e)
            }, updateComment:function(e){
              var t=o().find(i.value, (function(t){
                return t.id===e.submission_id
              }));
              t&&(t.commentData[
                e.subject_id
              ]
              ={
                comment:e.comment
              })
            }, groupOptions:j, groupChanged:function(e){
              b.value=e, x()
            }
          }
        }
      });
      const ue=(0, p.A)(ce, (function(){
        var e=this, t=e.$createElement, n=e._self._c||t;
        return n("div", {
          staticClass:"mark-subject-main"
        }, [
          e.currentSubject.id?n("subject-mark-header", {
            attrs:{
              "view-filter":e.viewFilter, "current-examinees":e.currentGroups, "examinee-index":e.groupIndex, examinees:e.groups, "is-group":!0, "current-subject-id":e.currentSubject.id
            }, on:{
              filter:e.filterCurrentGroups, switch:e.switchGroup, currentSubjectIsMarkedAll:e.currentSubjectIsMarkedAll
            }
          }):e._e(), e._v(" "), e.group&&e.currentSubmission?n("div", {
            staticClass:"main-area"
          }, [
            n("div", {
              staticClass:"subject-area"
            }, [
              e.group?n("div", {
                staticClass:"student-info"
              }, [
                n("div", {
                  staticClass:"avatar"
                }, [
                  n("img", {
                    staticClass:"group-avatar", attrs:{
                      src:e.groupAvatar
                    }
                  })
                ]), e._v(" "), n("MarkSelect", {
                  staticClass:"select-student", attrs:{
                    "current-id":e.currentGroupId, options:e.groupOptions
                  }, on:{
                    "on-change":e.groupChanged
                  }
                }), e._v(" "), n("div", {
                  staticClass:"delimiter"
                }), e._v(" "), n("a", {
                  attrs:{
                    href:e.markExamUrl, target:"_blank"
                  }
                }, [
                  e._v(e._s(e.$t("examMark.submissionDetails")))
                ])
              ], 1):e._e(), e._v(" "), e.currentSubmission?n("div", {
                staticClass:"submissions"
              }, [
                n("span", {
                  staticClass:"submission-label"
                }, [
                  e._v(e._s(e.$t("examMark.submissionVersions"))+"：")
                ]), e._v(" "), n("div", {
                  staticClass:"submission-versions"
                }, e._l(e.submissions, (function(t){
                  return n("div", {
                    key:t.id
                  }, [
                    n("Tooltip", {
                      attrs:{
                        placement:"top", transfer:"", content:t.scoreData[
                          e.currentSubject.id
                        ]
                        ?e.$t("examMark.subjectVersionMarked"):e.$t("examMark.subjectVersionNotMarked")
                      }
                    }, [
                      n("span", {
                        staticClass:"version", class:{
                          active:t.id===e.currentSubmission.id
                        }, on:{
                          click:function(n){
                            return e.switchSubmission(t.id)
                          }
                        }
                      }, [
                        t.scoreData[
                          e.currentSubject.id
                        ]
                        ?n("Icon", {
                          attrs:{
                            custom:"font font-submission-marked"
                          }
                        }):n("Icon", {
                          attrs:{
                            custom:"font font-submission-not-marked"
                          }
                        }), e._v("\n                "+e._s(e.moment(t.submittedAt).format("YYYY.MM.DD HH:mm"))+"\n              ")
                      ], 1)
                    ])
                  ], 1)
                })), 0)
              ]):e._e(), e._v(" "), e.currentSubject?n("subjectAnswer", {
                attrs:{
                  "current-submission":e.currentSubmission, "subject-answer-explanation":e.currentSubject.answerExplanation, "current-subject":e.currentSubject, "examinee-name":e.group.name
                }
              }):e._e()
            ], 1), e._v(" "), n("subject-score-commit", {
              attrs:{
                "examinee-name":e.group.name, "allow-exam-score-mark":e.exam.allowExamScoreMark, "current-submission":e.currentSubmission, "current-subject":e.currentSubject, "is-group":!0, "group-submission-ids":e.groupSubmissionIds, "examinee-ids":e.group.examineeIds
              }, on:{
                "give-subject-score":e.giveSubjectScore, "delete-marked-attachment":e.deleteMarkedAttachment, "update-comment":e.updateComment
              }
            })
          ], 1):n("div", {
            staticClass:"main-area no-data"
          }, [
            n("div", {
              staticClass:"not-data-container"
            }, [
              n("svgIcon", {
                staticClass:"icon-not-subjects", attrs:{
                  name:"interaction-unsupported"
                }
              }), e._v(" "), n("div", [
                e._v(e._s(e.$t("noData")))
              ])
            ], 1)
          ])
        ], 1)
      }), [
      ], !1, null, "392f0de0", null).exports;
      var le=n(302543);
      const de=(0, r.pM)({
        name:"mark-subjects", components:{
          markHeader:v, subjectTitle:M, subjects:E, markSubject:ae, groupMarkSubject:ue
        }, props:{
          exam:{
            type:u.yf, required:!0
          }, examId:{
            type:Number, required:!0
          }, subjectId:{
            type:Number, required:!0
          }, isMakeupExam:{
            type:Boolean, required:!0
          }, visible:{
            type:Boolean, required:!0
          }, subjects:{
            type:Array, required:!0
          }, currentSubject:{
            type:Object, required:!0
          }, filter:{
            type:Object, required:!0
          }, currentSubjectIndex:{
            type:String, required:!0
          }
        }, setup(e, t){
          var n=(0, r.KR)({
          }), a=(0, r.KR)(), i=(0, r.KR)();
          (0, r.Gt)("modal", i);
          return(0, r.wB)((()=>e.currentSubject), (()=>{
            if(e.currentSubject){
              var t=le.find(e.subjects, (t=>t.id===e.currentSubject.id));
              t&&("marked"===t.status||n[
                t.id
              ])?a.value="marked":a.value="not_marked"
            }
          })), {
            modal:i, close:()=>{
              t.emit("go-back")
            }, setCurrentSubjectId:e=>{
              t.emit("set-current-subject-id", e)
            }, filterData:()=>{
              t.emit("filter-data")
            }, currentSubjectIsMarkedAll:e=>{
              n.value[
                e.currentSubjectId
              ]
              =e.isMarkedAll
            }, subjectMarkFinshStatus:n, setFilterSelectStatus:e=>{
              a.value=e.filterSelectStatus
            }, filterSelectStatus:a
          }
        }
      });
      const pe=(0, p.A)(de, (function(){
        var e=this, t=e.$createElement, n=e._self._c||t;
        return n("Modal", {
          ref:"modal", attrs:{
            id:"mark-subjects-modal", fullscreen:"", closable:!1, "footer-hide":!0
          }, scopedSlots:e._u([
            {
              key:"header", fn:function(){
                return[
                  n("markHeader", {
                    attrs:{
                      "exam-title":e.exam.title
                    }, on:{
                      "close-modal":e.close
                    }
                  })
                ]
              }, proxy:!0
            }
          ]), model:{
            value:e.visible, callback:function(t){
              e.visible=t
            }, expression:"visible"
          }
        }, [
          e._v(" "), n("div", {
            staticClass:"main-container"
          }, [
            n("div", {
              staticClass:"left-container"
            }, [
              Object.values(e.subjects).length>0?n("div", {
                staticClass:"container"
              }, [
                n("subjectTitle", {
                  attrs:{
                    "current-subject":e.currentSubject, "current-subject-index":e.currentSubjectIndex
                  }
                }), e._v(" "), e.exam.groupSetId&&e.exam.groupSetId>0?n("groupMarkSubject", {
                  attrs:{
                    exam:e.exam, "current-subject":e.currentSubject, "is-makeup-exam":e.isMakeupExam, "filter-select-status":e.filterSelectStatus
                  }, on:{
                    currentSubjectIsMarkedAll:e.currentSubjectIsMarkedAll
                  }
                }):n("markSubject", {
                  attrs:{
                    exam:e.exam, "current-subject":e.currentSubject, "is-makeup-exam":e.isMakeupExam, "filter-select-status":e.filterSelectStatus
                  }, on:{
                    currentSubjectIsMarkedAll:e.currentSubjectIsMarkedAll
                  }
                })
              ], 1):n("div", {
                staticClass:"container not-subjects"
              }, [
                n("div", {
                  staticClass:"not-subjects-container"
                }, [
                  n("svgIcon", {
                    staticClass:"icon-not-subjects", attrs:{
                      name:"interaction-unsupported"
                    }
                  }), e._v(" "), n("div", [
                    e._v(e._s(e.$t("noData")))
                  ])
                ], 1)
              ])
            ]), e._v(" "), n("div", {
              staticClass:"right-container"
            }, [
              n("subjects", {
                attrs:{
                  filter:e.filter, subjects:e.subjects, "subject-id":e.subjectId, "subject-mark-finsh-status":e.subjectMarkFinshStatus, "has-make-up-user":e.exam.hasMakeUpUser
                }, on:{
                  "set-current-subject-id":e.setCurrentSubjectId, "filter-data":e.filterData, sendSelectStatus:e.setFilterSelectStatus
                }
              })
            ], 1)
          ])
        ])
      }), [
      ], !1, null, "a9895152", null).exports;
      var ve=function(e, t, n, r){
        return new(n||(n=Promise))((function(a, i){
          function o(e){
            try{
              c(r.next(e))
            }
            catch(e){
              i(e)
            }
          }
          function s(e){
            try{
              c(r.throw(e))
            }
            catch(e){
              i(e)
            }
          }
          function c(e){
            var t;
            e.done?a(e.value):(t=e.value, t instanceof n?t:new n((function(e){
              e(t)
            }))).then(o, s)
          }
          c((r=r.apply(e, t||[
          ])).next())
        }))
      }, me=function(e, t){
        var n, r, a, i, o={
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
          next:s(0), throw:s(1), return:s(2)
        }, "function"==typeof Symbol&&(i[
          Symbol.iterator
        ]
        =function(){
          return this
        }), i;
        function s(s){
          return function(c){
            return function(s){
              if(n)throw new TypeError("Generator is already executing.");
              for(;
              i&&(i=0, s[
                0
              ]
              &&(o=0)), o;
              )try{
                if(n=1, r&&(a=2&s[
                  0
                ]
                ?r.return:s[
                  0
                ]
                ?r.throw||((a=r.return)&&a.call(r), 0):r.next)&&!(a=a.call(r, s[
                  1
                ])).done)return a;
                switch(r=0, a&&(s=[
                  2&s[
                    0
                  ], a.value
                ]), s[
                  0
                ]){
                  case 0:case 1:a=s;
                  break;
                  case 4:return o.label++, {
                    value:s[
                      1
                    ], done:!1
                  };
                  case 5:o.label++, r=s[
                    1
                  ], s=[
                    0
                  ];
                  continue;
                  case 7:s=o.ops.pop(), o.trys.pop();
                  continue;
                  default:if(!(a=o.trys, (a=a.length>0&&a[
                    a.length-1
                  ])||6!==s[
                    0
                  ]
                  &&2!==s[
                    0
                  ])){
                    o=0;
                    continue
                  }
                  if(3===s[
                    0
                  ]
                  &&(!a||s[
                    1
                  ]
                  >a[
                    0
                  ]
                  &&s[
                    1
                  ]
                  <a[
                    3
                  ])){
                    o.label=s[
                      1
                    ];
                    break
                  }
                  if(6===s[
                    0
                  ]
                  &&o.label<a[
                    1
                  ]){
                    o.label=a[
                      1
                    ], a=s;
                    break
                  }
                  if(a&&o.label<a[
                    2
                  ]){
                    o.label=a[
                      2
                    ], o.ops.push(s);
                    break
                  }
                  a[
                    2
                  ]
                  &&o.ops.pop(), o.trys.pop();
                  continue
                }
                s=t.call(e, o)
              }
              catch(e){
                s=[
                  6, e
                ], r=0
              }
              finally{
                n=a=0
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
              s, c
            ])
          }
        }
      }, fe=n(657440);
      const be=(0, r.pM)({
        name:"SubjectMark", components:{
          markSubjects:pe
        }, props:{
          examId:{
            type:Number, default:0
          }, allowMark:{
            type:Boolean, default:!1
          }, hasAiAbility:{
            type:Boolean, default:!1
          }
        }, setup:function(e){
          var t=this, n=(0, r.nI)(), i=(0, r.KR)([
          ]), d=(0, r.KR)([
          ]), p=(0, r.KR)(new u.yf), v=(0, r.KR)([
          ]), m=(0, r.Kh)({
            status:"all", examType:"exam", description:""
          }), f=(0, r.KR)("all"), b=(0, r.KR)(), y=(0, r.KR)(!1), h=(0, r.KR)({
          }), _=(0, r.KR)("");
          (0, r.Gt)("hasAiAbility", e.hasAiAbility);
          var g=function(e){
            var t=n.proxy.$sanitize;
            return(0, j.sanitizeDisplaySubjectText)(t, e, a.default)
          }, w=function(e, t){
            var n=t.row.type;
            return e("span", [
              e("span", a.default.t("subjectType.".concat((0, c.camelize)(n))))
            ])
          }, x=(0, r.EW)((function(){
            var t=[
              {
                title:" ", type:"index", width:60, align:"center"
              }, {
                title:a.default.t("examSubject.description"), key:"description", slot:"description"
              }, {
                title:a.default.t("examSubject.type"), key:"type", width:"120px", render:w
              }, {
                title:a.default.t("examMark.status"), key:"status", width:"140px", slot:"status"
              }
            ];
            return e.allowMark&&t.push({
              title:a.default.t("examMark.operations"), width:"120px", slot:"operations"
            }), t
          })), k=function(){
            return ve(t, void 0, void 0, (function(){
              var t;
              return me(this, (function(n){
                switch(n.label){
                  case 0:return 0===e.examId?[
                    2
                  ]
                  :[
                    4, (0, l.qE)(e.examId)
                  ];
                  case 1:return t=n.sent(), i.value=(0, s.plainToClass)(u.dV, (0, c.camelizeKeys)(t.data.exam_subjects)), d.value=(0, s.plainToClass)(u.dV, (0, c.camelizeKeys)(t.data.makeup_exam_subjects)), v.value=i.value, [
                    2
                  ]
                }
              }))
            }))
          }, S=function(){
            return ve(t, void 0, void 0, (function(){
              var t, n;
              return me(this, (function(r){
                switch(r.label){
                  case 0:return 0===e.examId||void 0===e.examId?[
                    2
                  ]
                  :[
                    4, (0, l.qA)(e.examId)
                  ];
                  case 1:return t=r.sent(), n=(0, c.camelizeKeys)(t.data), p.value=(0, s.plainToClass)(u.yf, n), [
                    2
                  ]
                }
              }))
            }))
          }, C=function(n){
            return ve(t, void 0, void 0, (function(){
              var t;
              return me(this, (function(r){
                switch(r.label){
                  case 0:return b.value=n.id, b.value?(t=h, [
                    4, (0, l.ZY)(b.value, e.examId)
                  ]):[
                    3, 2
                  ];
                  case 1:t.value=r.sent(), r.label=2;
                  case 2:return _.value=n.index, [
                    2
                  ]
                }
              }))
            }))
          }, M=function(){
            return ve(t, void 0, void 0, (function(){
              return me(this, (function(e){
                switch(e.label){
                  case 0:return[
                    4, k()
                  ];
                  case 1:return e.sent(), v.value=i.value, "makeupExam"===m.examType&&(v.value=d.value), "all"!==m.status&&(v.value=o().filter(v.value, {
                    status:m.status
                  })), ""!==m.description&&(v.value=o().filter(v.value, (function(e){
                    return g(e.description).replace(/\s/g, " ").includes(m.description)
                  }))), [
                    2
                  ]
                }
              }))
            }))
          };
          (0, r.wB)((function(){
            return e.examId
          }), (function(){
            k(), S()
          })), (0, r.sV)((function(){
            k(), S(), window.addEventListener("refresh-current-subject", (function(){
              ve(t, void 0, void 0, (function(){
                var t;
                return me(this, (function(n){
                  switch(n.label){
                    case 0:return b.value?(t=h, [
                      4, (0, l.ZY)(b.value, e.examId)
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
            }))
          }));
          return{
            currentSubjectType:f, subjects:v, columns:x, markSubject:function(n){
              return ve(t, void 0, void 0, (function(){
                return me(this, (function(t){
                  switch(t.label){
                    case 0:return[
                      4, C(n)
                    ];
                    case 1:return t.sent(), y.value=!0, fe.trackActivity("exam", fe.enums.MarkExamAction.marked_by_subject, {
                      activity_id:e.examId
                    }), [
                      2
                    ]
                  }
                }))
              }))
            }, filter:m, camelize:c.camelize, filterData:M, subjectId:b, isMarkingSubjects:y, goBack:function(){
              return ve(t, void 0, void 0, (function(){
                return me(this, (function(e){
                  switch(e.label){
                    case 0:return[
                      4, k()
                    ];
                    case 1:return e.sent(), [
                      4, M()
                    ];
                    case 2:return e.sent(), y.value=!1, h.value={
                    }, [
                      2
                    ]
                  }
                }))
              }))
            }, setCurrentSubjectId:C, currentSubject:h, exam:p, prettyShowSubject:g, currentSubjectIndex:_
          }
        }
      });
      const ye=(0, p.A)(be, (function(){
        var e=this, t=e.$createElement, n=e._self._c||t;
        return n("div", {
          staticClass:"subject-table"
        }, [
          n("div", {
            staticClass:"filters"
          }, [
            n("div", {
              staticClass:"left-filters"
            }, [
              n("div", {
                staticClass:"filter-item"
              }, [
                n("span", [
                  e._v(e._s(e.$t("examMark.subjectType")))
                ]), e._v(" "), n("Select", {
                  staticClass:"select", on:{
                    "on-change":e.filterData
                  }, model:{
                    value:e.filter.examType, callback:function(t){
                      e.$set(e.filter, "examType", t)
                    }, expression:"filter.examType"
                  }
                }, [
                  n("Option", {
                    attrs:{
                      value:"exam"
                    }
                  }, [
                    e._v(e._s(e.$t("examActivity.questionType.exam")))
                  ]), e._v(" "), e.exam.hasMakeUpUser?n("Option", {
                    attrs:{
                      value:"makeupExam"
                    }
                  }, [
                    e._v(e._s(e.$t("examActivity.questionType.makeUp")))
                  ]):e._e()
                ], 1)
              ], 1), e._v(" "), n("div", {
                staticClass:"filter-item"
              }, [
                n("span", [
                  e._v(e._s(e.$t("examMark.markStatus.name")))
                ]), e._v(" "), n("Select", {
                  staticClass:"select", on:{
                    "on-change":e.filterData
                  }, model:{
                    value:e.filter.status, callback:function(t){
                      e.$set(e.filter, "status", t)
                    }, expression:"filter.status"
                  }
                }, [
                  n("Option", {
                    attrs:{
                      value:"all"
                    }
                  }, [
                    e._v(e._s(e.$t("examMark.markStatus.all")))
                  ]), e._v(" "), n("Option", {
                    attrs:{
                      value:"marked"
                    }
                  }, [
                    e._v(e._s(e.$t("examMark.markStatus.marked")))
                  ]), e._v(" "), n("Option", {
                    attrs:{
                      value:"not_marked"
                    }
                  }, [
                    e._v(e._s(e.$t("examMark.markStatus.notMarked")))
                  ])
                ], 1)
              ], 1)
            ]), e._v(" "), n("div", {
              staticClass:"right-filters"
            }, [
              n("Input", {
                staticClass:"input-filter", attrs:{
                  placeholder:e.$t("examSubject.description")
                }, on:{
                  "on-enter":e.filterData
                }, model:{
                  value:e.filter.description, callback:function(t){
                    e.$set(e.filter, "description", t)
                  }, expression:"filter.description"
                }
              }), e._v(" "), n("button", {
                staticClass:"search-btn", on:{
                  click:e.filterData
                }
              }, [
                n("Icon", {
                  attrs:{
                    custom:"font font-standard-search"
                  }
                })
              ], 1)
            ], 1)
          ]), e._v(" "), n("Table", {
            staticClass:"table-content", attrs:{
              stripe:"", columns:e.columns, data:e.subjects, "disabled-hover":!0
            }, scopedSlots:e._u([
              {
                key:"description", fn:function(t){
                  var r=t.row;
                  return[
                    n("div", {
                      staticClass:"description-columns"
                    }, [
                      n("Tooltip", {
                        attrs:{
                          placement:"top", transfer:"", "max-width":850, content:r.index+"、"+e.prettyShowSubject(r.description)
                        }
                      }, [
                        n("span", {
                          staticClass:"resource-name", attrs:{
                            "reveal-modal":"file-previewer"
                          }
                        }, [
                          e._v("\n            "+e._s(r.index)+"、"+e._s(e.prettyShowSubject(r.description))+"\n          ")
                        ])
                      ])
                    ], 1)
                  ]
                }
              }, {
                key:"status", fn:function(t){
                  var r=t.row;
                  return[
                    n("span", {
                      staticClass:"status", class:[
                        "not_commit"===r.status?"":"status-icon", r.status
                      ]
                    }, [
                      e._v("\n        "+e._s(e.$t("examMark.markStatus."+e.camelize(r.status)))+"\n      ")
                    ])
                  ]
                }
              }, {
                key:"operations", fn:function(t){
                  var r=t.row;
                  return[
                    n("Tooltip", {
                      attrs:{
                        placement:"top", transfer:"", "max-width":100, content:e.$t("examMark.markAction")
                      }
                    }, [
                      n("a", {
                        directives:[
                          {
                            name:"show", rawName:"v-show", value:e.allowMark&&"not_commit"!==r.status, expression:"allowMark && row.status !== 'not_commit'"
                          }
                        ], on:{
                          click:function(t){
                            return e.markSubject(r)
                          }
                        }
                      }, [
                        n("i", {
                          staticClass:"font font-correcting"
                        })
                      ])
                    ])
                  ]
                }
              }
            ])
          }), e._v(" "), e.subjectId?n("markSubjects", {
            attrs:{
              "exam-id":e.examId, exam:e.exam, "subject-id":e.subjectId, "is-makeup-exam":"exam"!==e.filter.examType, visible:e.isMarkingSubjects, subjects:e.subjects, "current-subject":e.currentSubject, "current-subject-index":e.currentSubjectIndex, filter:e.filter
            }, on:{
              "go-back":e.goBack, "set-current-subject-id":e.setCurrentSubjectId, "filter-data":e.filterData
            }
          }):e._e()
        ], 1)
      }), [
      ], !1, null, "19ae3adc", null).exports
    }, 854184:(e, t, n)=>{
      n.d(t, {
        n:()=>u
      });
      var r=n(738645), a=n(510543), i=n(152229), o=n(731904), s=function(e, t, n, r){
        var a, i=arguments.length, o=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t, n):r;
        if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e, t, n, r);
        else for(var s=e.length-1;
        s>=0;
        s--)(a=e[
          s
        ])&&(o=(i<3?a(o):i>3?a(t, n, o):a(t, n))||o);
        return i>3&&o&&Object.defineProperty(t, n, o), o
      }, c=function(){
        function e(){
        }
        return s([
          (0, r.v)()
        ], e.prototype, "userNo", void 0), s([
          (0, r.v)()
        ], e.prototype, "name", void 0), s([
          (0, r.v)(), (0, a.d)((function(e){
            var t=e.value;
            return o.TimeUtils.millisecondToHms(t)
          }), {
            toClassOnly:!0
          })
        ], e.prototype, "watchTime", void 0), e
      }
      (), u=function(){
        function e(){
          this.watchUsers=[
          ]
        }
        return s([
          (0, r.v)()
        ], e.prototype, "views", void 0), s([
          (0, r.v)()
        ], e.prototype, "viewers", void 0), s([
          (0, r.v)(), (0, a.d)((function(e){
            var t=e.value;
            return o.TimeUtils.millisecondToHms(t)
          }), {
            toClassOnly:!0
          })
        ], e.prototype, "avgViewTime", void 0), s([
          (0, r.v)()
        ], e.prototype, "likes", void 0), s([
          (0, r.v)()
        ], e.prototype, "messages", void 0), s([
          (0, r.v)()
        ], e.prototype, "liveViewers", void 0), s([
          (0, i.Z)((function(){
            return c
          }))
        ], e.prototype, "watchUsers", void 0), e
      }
      ()
    }, 873509:(e, t, n)=>{
      n.d(t, {
        A:()=>c
      });
      n(540590), n(418665), n(269193), n(14602);
      var r=n(595738), a=n(552979), i=function(e, t, n, r){
        return new(n||(n=Promise))((function(a, i){
          function o(e){
            try{
              c(r.next(e))
            }
            catch(e){
              i(e)
            }
          }
          function s(e){
            try{
              c(r.throw(e))
            }
            catch(e){
              i(e)
            }
          }
          function c(e){
            var t;
            e.done?a(e.value):(t=e.value, t instanceof n?t:new n((function(e){
              e(t)
            }))).then(o, s)
          }
          c((r=r.apply(e, t||[
          ])).next())
        }))
      }, o=function(e, t){
        var n, r, a, i, o={
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
          next:s(0), throw:s(1), return:s(2)
        }, "function"==typeof Symbol&&(i[
          Symbol.iterator
        ]
        =function(){
          return this
        }), i;
        function s(s){
          return function(c){
            return function(s){
              if(n)throw new TypeError("Generator is already executing.");
              for(;
              i&&(i=0, s[
                0
              ]
              &&(o=0)), o;
              )try{
                if(n=1, r&&(a=2&s[
                  0
                ]
                ?r.return:s[
                  0
                ]
                ?r.throw||((a=r.return)&&a.call(r), 0):r.next)&&!(a=a.call(r, s[
                  1
                ])).done)return a;
                switch(r=0, a&&(s=[
                  2&s[
                    0
                  ], a.value
                ]), s[
                  0
                ]){
                  case 0:case 1:a=s;
                  break;
                  case 4:return o.label++, {
                    value:s[
                      1
                    ], done:!1
                  };
                  case 5:o.label++, r=s[
                    1
                  ], s=[
                    0
                  ];
                  continue;
                  case 7:s=o.ops.pop(), o.trys.pop();
                  continue;
                  default:if(!(a=o.trys, (a=a.length>0&&a[
                    a.length-1
                  ])||6!==s[
                    0
                  ]
                  &&2!==s[
                    0
                  ])){
                    o=0;
                    continue
                  }
                  if(3===s[
                    0
                  ]
                  &&(!a||s[
                    1
                  ]
                  >a[
                    0
                  ]
                  &&s[
                    1
                  ]
                  <a[
                    3
                  ])){
                    o.label=s[
                      1
                    ];
                    break
                  }
                  if(6===s[
                    0
                  ]
                  &&o.label<a[
                    1
                  ]){
                    o.label=a[
                      1
                    ], a=s;
                    break
                  }
                  if(a&&o.label<a[
                    2
                  ]){
                    o.label=a[
                      2
                    ], o.ops.push(s);
                    break
                  }
                  a[
                    2
                  ]
                  &&o.ops.pop(), o.trys.pop();
                  continue
                }
                s=t.call(e, o)
              }
              catch(e){
                s=[
                  6, e
                ], r=0
              }
              finally{
                n=a=0
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
              s, c
            ])
          }
        }
      };
      const s=(0, r.pM)({
        name:"remaining-credits-tip", props:{
          category:{
            type:String, default:"default"
          }
        }, setup:function(e, t){
          var n=this, s=t.root, c=(0, r.EW)((function(){
            return s.$store.state.airCredit.userCreditState
          })), u=(0, r.EW)((function(){
            return s.$store.getters[
              "airCredit/hasRemainingCredits"
            ]
          })), l=(0, r.EW)((function(){
            return s.$store.getters[
              "airCredit/userRemainingCredits"
            ]
          })), d=(0, r.EW)((function(){
            var t=e.category;
            return[
              "classroom", "subject_lib", "exam"
            ].includes(t)?a.default.t("air.creditsRemainingTip.file", [
              1, 10
            ]):[
              "online_video", "lesson"
            ].includes(t)?a.default.t("air.creditsRemainingTip.video", [
              1, 10
            ]):[
              "homeworkGrading"
            ].includes(t)?a.default.t("air.creditsRemainingTip.document", [
              1, 5
            ]):[
              "rubric", "textOptimization", "examGrading"
            ].includes(t)?a.default.t("air.creditsRemainingTip.rubric", [
              1, 2
            ]):[
              "chatbot"
            ].includes(t)?a.default.t("air.creditsRemainingTip.chat", [
              1, 2
            ]):a.default.t("air.creditsRemainingTip.default")
          }));
          return(0, r.sV)((function(){
            i(n, void 0, void 0, (function(){
              return o(this, (function(e){
                return s.$store.dispatch("airCredit/fetchCurrentUserState"), [
                  2
                ]
              }))
            }))
          })), {
            hasRemainingCredits:u, remainingCredits:l, tooltipContent:d, userCreditState:c
          }
        }
      });
      const c=(0, n(514486).A)(s, (function(){
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
    }, 886009:(e, t, n)=>{
      n.d(t, {
        H7:()=>m, M8:()=>v, V:()=>_, Zf:()=>u, eb:()=>p, u1:()=>d, wp:()=>l
      });
      n(169218), n(43148), n(658379);
      var r=n(966491), a=n(302543), i=n.n(a), o=function(){
        return(o=Object.assign||function(e){
          for(var t, n=1, r=arguments.length;
          n<r;
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
      }, s=[
        "doc", "docx", "ppt", "pptx", "xls", "xlsx", "pdf", "txt"
      ], c=s.concat([
        "jpg", "jpeg", "png", "tif", "tiff", "webp", "bmp"
      ]), u=function(e){
        var t=(0, r.fileExtension)(e.name);
        return s.includes(t.toLowerCase())
      }, l=function(e){
        var t=(0, r.fileExtension)(e.name);
        return c.includes(t.toLowerCase())
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
        var n=t.querySelectorAll(".__blank__"), r=[
        ];
        return n.forEach((function(e, t){
          r.push({
            alternates:[
            ], content:"", sort:t, uuid:Number(e.getAttribute("data-id"))
          })
        })), r
      }, m=function(e){
        var t=i().cloneDeep(e);
        return t.forEach((function(e){
          var t=i().shuffle(e.options).map((function(e, t){
            return o(o({
            }, e), {
              id:t, sort:t
            })
          }));
          e.options=t
        })), t
      }, f=[
        "txt", "md", "markdown", "pdf", "html", "xlsx", "xls", "docx", "csv", "eml", "msg", "pptx", "ppt", "xml", "epub", "mdx", "vtt", "properties", "htm"
      ], b=[
        "jpg", "jpeg", "png", "gif", "webp", "svg"
      ], y=[
        "mp3", "m4a", "wav", "webm", "amr"
      ], h=[
        "mp4", "mov", "mpeg", "mpga"
      ];
      function _(e, t){
        var n=function(e){
          return e.map((function(e){
            return".".concat(e.toLowerCase())
          })).join(",")
        };
        switch(e){
          case"document":return n(f);
          case"image":return n(b);
          case"audio":return n(y);
          case"video":return n(h);
          case"custom":default:return t?n(t):""
        }
      }
    }, 915810:e=>{
      var t=[
        "[tex]/noerrors", "[tex]/mhchem", "[tex]/color", "[tex]/autoload", "[tex]/physics"
      ];
      navigator.webdriver||t.push("ui/lazy"), window.MathJax={
        loader:{
          load:t
        }, tex:{
          packages:{
            "[+]":[
              "noerrors", "mhchem", "color", "autoload", "physics"
            ]
          }, inlineMath:[
            [
              "$", "$"
            ], [
              "\\(", "\\)"
            ]
          ], displayMath:[
            [
              "$$", "$$"
            ], [
              "\\[", "\\]"
            ]
          ], processEscapes:!0, processEnvironments:!0
        }, options:{
          ignoreHtmlClass:"simditor|mathjax-ignore", processHtmlClass:"simditor-viewer|mathjax-process", skipHtmlTags:[
            "script", "noscript", "style", "textarea", "pre", "code"
          ]
        }, startup:{
          ready:()=>{
            MathJax.startup.defaultReady()
          }
        }
      };
      e.exports=function(){
        if(!document.querySelector('script[src="/static/js/mathjax/es5/tex-mml-svg.js"]')){
          var e=document.createElement("script");
          e.src="/static/js/mathjax/es5/tex-mml-svg.js", document.head.appendChild(e)
        }
      }
    }
  }
]);
