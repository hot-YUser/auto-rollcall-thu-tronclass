(self.webpackChunklms=self.webpackChunklms||[
]).push([
  [
    84777
  ], {
    50388:(t, e, i)=>{
      i.r(e);
      i(269193);
      var n=i(592207), r=i.n(n), o=(i(207452), i(175993)), s=i(962893), a=i(248124);
      function c(t, e, i, n, r, o, s){
        try{
          var a=t[
            o
          ]
          (s), c=a.value
        }
        catch(t){
          return void i(t)
        }
        a.done?e(c):Promise.resolve(c).then(n, r)
      }
      "$url"in s.default.prototype||s.default.use(o.Ay), a(".header.gtm-category").length&&new s.default({
        el:"#announcement", data:{
          announcements:[
          ]
        }, created(){
          var t, e=this;
          return(t=r().mark((function t(){
            var i;
            return r().wrap((function(t){
              for(;
              ;
              )switch(t.prev=t.next){
                case 0:return t.next=2, e.$http.get("/api/announcement");
                case 2:i=t.sent, e.announcements=i.data.announcements;
                case 4:case"end":return t.stop()
              }
            }), t)
          })), function(){
            var e=this, i=arguments;
            return new Promise((function(n, r){
              var o=t.apply(e, i);
              function s(t){
                c(o, n, r, s, a, "next", t)
              }
              function a(t){
                c(o, n, r, s, a, "throw", t)
              }
              s(void 0)
            }))
          })()
        }, components:{
          "vue-announcement":i(466375).default
        }
      })
    }, 63483:(t, e, i)=>{
      i.r(e);
      var n=i(785619), r=i.n(n), o=i(962893).default, s=i(248124), a=i(302543), c=i(671520);
      i(325045), o.directive("tipsy", {
        inserted:(t, e, i)=>s(t).tipsy({
          ellipsis:!0, opacity:.95, gravity:"sw", html:!0
        })
      }), o.directive("click-outside-el", {
        bind(t, e, i){
          var n;
          if("function"!=typeof e.value){
            var r=i.context.name, o="[Vue-click-outside:] provided expression '".concat(e.expression, "' is not a function, but has to be");
            r&&(o+="Found in component '".concat(r, "'")), console.warn(o)
          }
          var s=e.modifiers.bubble, c=i=>{
            var r=i.target||i.srcElement;
            if(!r.getAttribute||"true"!==r.getAttribute("disable-click-outside")){
              var o=e.arg;
              o&&(n=document.querySelectorAll(".".concat(o))), n&&a.some(n, (t=>t.contains(i.target)))||(s||!t.contains(i.target)&&t!==i.target)&&e.value(i)
            }
          };
          return t.__vueClickOutside__=c, document.addEventListener("mousedown", c)
        }, unbind(t, e){
          document.removeEventListener("mousedown", t.__vueClickOutside__), t.__vueClickOutside__=null
        }
      });
      var u=i(915810);
      o.directive("mathjax", {
        bind(t){
          t.classList.add("mathjax-process")
        }, inserted(t, e, i){
          window.MathJax.typeset?window.MathJax.typeset([
            t
          ]):u()
        }
      }), o.directive("katex", {
        bind(t){
          r()(t, {
            output:"mathml", delimiters:[
              {
                left:"$$", right:"$$", display:!1
              }, {
                left:"$", right:"$", display:!1
              }
            ]
          })
        }, update(t){
          r()(t, {
            output:"mathml", delimiters:[
              {
                left:"$$", right:"$$", display:!1
              }, {
                left:"$", right:"$", display:!1
              }
            ]
          })
        }
      });
      var l=i(148938);
      o.directive("markdown", {
        bind(t){
          t.innerHTML=l.parse(t.innerHTML)
        }, update(t){
          t.innerHTML=l.parse(t.innerHTML)
        }
      }), o.directive("perfect-scrollbar-y", {
        inserted:(t, e, i)=>new c(t, {
          suppressScrollX:!0
        })
      }), o.directive("perfect-scrollbar-x", {
        inserted:(t, e, i)=>new c(t, {
          suppressScrollY:!0
        })
      }), o.directive("perfect-scrollbar-xy", {
        inserted:(t, e, i)=>new c(t, {
          suppressScrollY:!1, suppressScrollX:!1
        })
      }), o.directive("wheel-allow-scroll", {
        inserted(t){
          var e=t=>{
            t.stopImmediatePropagation()
          };
          t.__wheelAllowScrollHandler__=e, t.addEventListener("wheel", e, {
            capture:!0, passive:!0
          })
        }, unbind(t){
          t.removeEventListener("wheel", t.__wheelAllowScrollHandler__, {
            capture:!0
          }), delete t.__wheelAllowScrollHandler__
        }
      })
    }, 92834:(t, e, i)=>{
      i.d(e, {
        A:()=>s
      });
      i(219693), i(714913), i(678636), i(158649), i(658379);
      const n={
        name:"thumbnail", props:{
          images:{
            type:Array, default:()=>[
            ]
          }
        }, data:()=>({
          thumbnails:[
          ], ready:!1
        }), created(){
          this.images.forEach((t=>{
            var e=this;
            if(t.width&&t.height){
              var i={
                src:t.src, msrc:t.src, w:t.width, h:t.height
              };
              e.thumbnails.push(i)
            }
            else{
              var n=new Image;
              n.src=t.src, n.onload=function(){
                var i=n.width, r=n.height, o={
                  src:t.src, msrc:t.src, w:i, h:r
                };
                e.thumbnails.push(o)
              }
            }
          })), this.ready=!0
        }
      };
      var r=i(514486);
      const o={
        name:"subject-info", components:{
          thumbnail:(0, r.A)(n, (function(){
            var t=this, e=t.$createElement, i=t._self._c||e;
            return i("div", [
              t.ready?i("vue-preview", {
                class:{
                  "many-columns":t.thumbnails.length>1, "one-column":1===t.thumbnails.length
                }, attrs:{
                  slides:t.thumbnails
                }
              }):t._e()
            ], 1)
          }), [
          ], !1, null, "55e5f4e8", null).exports
        }, props:{
          content:{
            type:String, default:""
          }
        }, created(){
          var t=window.location.href;
          t.indexOf("?")<0&&(t+="?thumbnail=true", window.history.replaceState({
            path:t
          }, "", t))
        }, data(){
          return{
            images:this.getSubjectImages(), contents:this.getContentWithoutImages()
          }
        }, methods:{
          getSubjectImages(){
            var t=[
            ];
            if(!this.content)return t;
            var e=this.content.match(/<img.*?(?:>|\/>)/gi);
            if(e)for(var i=0;
            i<e.length;
            i++){
              var n=(new window.DOMParser).parseFromString(e[
                i
              ], "text/html").querySelector("img"), r=n.src, o=n.width, s=n.height, a=o&&s?{
                src:r, width:o, height:s
              }
              :{
                src:r
              };
              t.push(a)
            }
            return t
          }, getContentWithoutImages(){
            var t="", e="", i=this.content.indexOf("<img");
            i<0?t=this.content.slice(0):(t=this.content.slice(0, i), this.content.split(/<img.*?(?:>|\/>)/gi).forEach((i=>{
              i!==t&&(e+=i)
            })), "<br></p>"===e&&(e=""));
            return{
              beforeContent:t, afterContent:e
            }
          }
        }
      };
      const s=(0, r.A)(o, (function(){
        var t=this, e=t.$createElement, i=t._self._c||e;
        return i("div", {
          staticClass:"content-center"
        }, [
          i("div", {
            domProps:{
              innerHTML:t._s(t.contents.beforeContent)
            }
          }), t._v(" "), i("thumbnail", {
            attrs:{
              images:t.images
            }
          }), t._v(" "), i("div", {
            domProps:{
              innerHTML:t._s(t.contents.afterContent)
            }
          })
        ], 1)
      }), [
      ], !1, null, "7ad947ca", null).exports
    }, 173447:(t, e, i)=>{
      var n=i(302543);
      t.exports=[
        "$http", "toastr", function(t, e){
          return{
            getStorageUsed:i=>t.get("/api/user/storage-used").success(i).error(e.decorateError()), createLink:e=>t.post("/api/user/links", e), editLink:(e, i)=>t.put("/api/user/links/".concat(e), i), getUploadReferenceDetail(e, i, r, o, s){
              var a=arguments.length>5&&void 0!==arguments[
                5
              ]
              ?arguments[
                5
              ]
              :n.noop;
              return t.get("/api/uploads/".concat(e, "/references"), {
                params:{
                  page:i, page_size:r, conditions:o
                }
              }).success(s).error(a)
            }, getResourceReferenceDetail(e, i, r, o, s){
              var a=arguments.length>5&&void 0!==arguments[
                5
              ]
              ?arguments[
                5
              ]
              :n.noop;
              return t.get("/api/resources/".concat(e, "/activities"), {
                params:{
                  page:i, page_size:r, conditions:o
                }
              }).success(s).error(a)
            }, uploadFolder:(e, i, n, r)=>t.post("/api/uploads", {
              parent_id:e, name:i, is_folder:n
            }).error(r)
          }
        }
      ]
    }, 198342:(t, e, i)=>{
      var n=i(302543), r=i(248124);
      function o(t, e){
        var i;
        if("undefined"==typeof Symbol||null==t[
          Symbol.iterator
        ]){
          if(Array.isArray(t)||(i=function(t, e){
            if(!t)return;
            if("string"==typeof t)return s(t, e);
            var i=Object.prototype.toString.call(t).slice(8, -1);
            "Object"===i&&t.constructor&&(i=t.constructor.name);
            if("Map"===i||"Set"===i)return Array.from(t);
            if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return s(t, e)
          }
          (t))||e&&t&&"number"==typeof t.length){
            i&&(t=i);
            var n=0, r=function(){
            };
            return{
              s:r, n:function(){
                return n>=t.length?{
                  done:!0
                }
                :{
                  done:!1, value:t[
                    n++
                  ]
                }
              }, e:function(t){
                throw t
              }, f:r
            }
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var o, a=!0, c=!1;
        return{
          s:function(){
            i=t[
              Symbol.iterator
            ]
            ()
          }, n:function(){
            var t=i.next();
            return a=t.done, t
          }, e:function(t){
            c=!0, o=t
          }, f:function(){
            try{
              a||null==i.return||i.return()
            }
            finally{
              if(c)throw o
            }
          }
        }
      }
      function s(t, e){
        (null==e||e>t.length)&&(e=t.length);
        for(var i=0, n=new Array(e);
        i<e;
        i++)n[
          i
        ]
        =t[
          i
        ];
        return n
      }
      i(219693), i(269193), i(158649);
      var a=function(t){
        for(var e=t.target;
        e&&e.tagName&&"A"!==e.tagName;
        ){
          if("BODY"===e.tagName)return;
          e=e.parentNode
        }
        var i=window.gaSettings.pageName, n=function(t){
          for(var e=window.gaSettings.pageAreaMap;
          t&&t.tagName&&"BODY"!==t.tagName;
          ){
            if("DIV"===t.tagName){
              var i, n=o(t.className.split(" "));
              try{
                for(n.s();
                !(i=n.n()).done;
                ){
                  var r=i.value;
                  if(void 0!==e[
                    r
                  ])return e[
                    r
                  ]
                }
              }
              catch(t){
                n.e(t)
              }
              finally{
                n.f()
              }
            }
            t=t.parentNode
          }
          return"unknown"
        }
        (e);
        return t.data&&t.data.tracker?ga("".concat(t.data.tracker, ".send"), "event", "PageArea", "click", "".concat(i, "-").concat(n)):ga("send", "event", "PageArea", "click", "".concat(i, "-").concat(n))
      }, c=function(t, e){
        if(e){
          if(ga("create", t, "auto", e), window.analyticsData){
            var i="".concat(e, ".set");
            ga(i, "dimension1", window.analyticsData.orgName), ga(i, "dimension2", "".concat(window.analyticsData.userId, "-").concat(window.analyticsData.userName))
          }
          return ga("".concat(e, ".send"), "pageview"), u("".concat(e, ".send")), r((function(){
            if(window.gaSettings)return r("body").on("click", {
              tracker:e
            }, a)
          }))
        }
        return ga("create", t, "auto"), window.analyticsData&&(ga("set", "dimension1", window.analyticsData.orgName), ga("set", "dimension2", "".concat(window.analyticsData.userId, "-").concat(window.analyticsData.userName))), ga("send", "pageview"), u("send"), r((function(){
          if(window.gaSettings)return r("body").on("click", a)
        }))
      }, u=function(t){
        if(window.performance){
          var e=Math.round(performance.now());
          ga(t, "timing", "Page Load", "load", e)
        }
      };
      !function(){
        var t, e, r, o;
        if(r=window, document, o="ga", r.GoogleAnalyticsObject=o, r.ga=r.ga||function(){
          return(r.ga.q=r.ga.q||[
          ]).push(arguments)
        }, r.ga.l=1*new Date, i.e(82906).then(i.t.bind(i, 282906, 23)), (null!=window.statisticsSettings?window.statisticsSettings.gaVersion:void 0)&&(t=window.statisticsSettings.gaTrackingId, e=window.statisticsSettings.gaVersion), "UA"==e){
          if(!t){
            var s=n.find([
              {
                domain:/.*tronclass\.com\.cn$/, ua:"UA-59224628-6"
              }, {
                domain:/lms\.eurasia\.edu/, ua:"UA-59224628-5"
              }, {
                domain:/class\.xjtu\.edu\.cn/, ua:"UA-59224628-7"
              }, {
                domain:/.*k12\.tronclass\.com/, ua:"UA-59224628-9"
              }, {
                domain:/www\.ahmooc\.cn/, ua:"UA-59224628-12"
              }, {
                domain:/lms\.bnu\.edu\.cn/, ua:"UA-59224628-13"
              }, {
                domain:/lms\.sgjx\.com\.cn/, ua:"UA-59224628-14"
              }, {
                domain:/wlyx\.21shte\.net/, ua:"UA-59224628-15"
              }, {
                domain:/dev\.tronclass\.com/, ua:"UA-59224628-25"
              }, {
                domain:/lms\.csu\.edu\.cn/, ua:"UA-59224628-34"
              }
            ], (t=>t.domain.test(document.domain)));
            if(!s)return;
            t=s.ua
          }
          if(t.indexOf(",")>0){
            var a=t.split(",");
            return(()=>{
              for(var t=[
              ], e=0;
              e<a.length;
              e++){
                var i=a[
                  e
                ], n="tracker".concat(e);
                t.push(c(i, n))
              }
              return t
            })()
          }
          c(t)
        }
      }
      ()
    }, 212296:(t, e, i)=>{
      i.r(e);
      var n=i(175993), r=i(962893), o=i(248124);
      "$url"in r.default.prototype||r.default.use(n.Ay), o("#notification_container").length&&new r.default({
        el:"#notification_container", data:{
        }, components:{
          "notification-container":i(554494).A
        }
      })
    }, 240328:(t, e, i)=>{
      i(158649);
      var n=i(966491);
      t.exports=[
        "$rootScope", "$scope", "$timeout", "toastr", "filesApi", function(t, e, i, r, o){
          var s;
          e.humanizeBytes=n.humanizeBytes, e.usedStorage="--", e.assignedStorage="--", e.unusedStorage="--", e.storageUsageRate="0%", i((function(){
            return s()
          })), t.$on("refreshStorageBar", (()=>s()));
          var a=function(t, e){
            var i=Math.round(t/e*100);
            return i>100?"100%":"".concat(i, "%")
          };
          e.calcBgColor=()=>{
            var t=e.storageUsageRate.split("%")[
              0
            ];
            return t<80?"used":t>=80&&t<100?"warning":"insufficient"
          };
          return s=function(){
            return o.getStorageUsed((function(t){
              var n=t.storage_used, r=e.maxSize;
              return e.ui={
                usedPercent:()=>a(n, r), unusedPercent(){
                  return t=n, e=r, (i=Math.round((e-t)/e*100))<0?"0%":"".concat(i, "%");
                  var t, e, i
                }, backgroundColor(){
                  return(t=n)/(e=r)<.8?"#20bec8":t/e<1&&t/e>=.8?"#ff9700":"#f85353";
                  var t, e
                }, usedRadius:()=>function(t, e){
                  if(Math.round(t/e*100)>=100)return"3px"
                }
                (n, r), unusedRadius:()=>function(t, e){
                  if(Math.round(t/e*100)<=0)return"3px"
                }
                (n, r), unUsedSpace:()=>function(t, e){
                  return e-t
                }
                (n, r)
              }, i((function(){
                return function(t, i){
                  e.usedStorage=e.humanizeBytes(t, !1, "floor"), e.assignedStorage=e.humanizeBytes(i, !1, "floor"), e.storageUsageRate=a(t, i), e.unusedStorage=e.humanizeBytes(i-t, !1, "floor")
                }
                (n, r)
              }))
            }))
          }
        }
      ]
    }, 246058:(t, e, i)=>{
      i.r(e);
      i(269193);
      var n=i(962893), r=i(846413), o=i(552979), s=i(489491);
      n.default.prototype.$store=s.A, n.default.prototype.$featureToggles=window.featureToggles, n.default.use(r.A), i.e(34964).then(i.bind(i, 434964)).then((t=>{
        t.default.options.store=s.A, t.default.options.i18n=o.default, n.default.customElement(t.default.options.name, t.default.options)
      })), Promise.all([
        i.e(15471), i.e(212)
      ]).then(i.bind(i, 315471)).then((t=>{
        n.default.customElement(t.default.name, t.default)
      }))
    }, 265356:(t, e, i)=>{
      i.d(e, {
        MM:()=>p, cd:()=>f, h2:()=>v, nC:()=>l
      });
      var n, r=i(738645), o=i(152229), s=i(510543), a=i(731904), c=(n=function(t, e){
        return(n=Object.setPrototypeOf||{
          __proto__:[
          ]
        }
        instanceof Array&&function(t, e){
          t.__proto__=e
        }
        ||function(t, e){
          for(var i in e)Object.prototype.hasOwnProperty.call(e, i)&&(t[
            i
          ]
          =e[
            i
          ])
        })(t, e)
      }, function(t, e){
        if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");
        function i(){
          this.constructor=t
        }
        n(t, e), t.prototype=null===e?Object.create(e):(i.prototype=e.prototype, new i)
      }), u=function(t, e, i, n){
        var r, o=arguments.length, s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e, i):n;
        if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t, e, i, n);
        else for(var a=t.length-1;
        a>=0;
        a--)(r=t[
          a
        ])&&(s=(o<3?r(s):o>3?r(e, i, s):r(e, i))||s);
        return o>3&&s&&Object.defineProperty(e, i, s), s
      }, l=function(){
        function t(){
        }
        return u([
          (0, r.v)()
        ], t.prototype, "id", void 0), u([
          (0, r.v)()
        ], t.prototype, "name", void 0), t
      }
      (), d=function(){
        function t(){
        }
        return u([
          (0, r.v)()
        ], t.prototype, "name", void 0), u([
          (0, r.v)()
        ], t.prototype, "id", void 0), u([
          (0, r.v)()
        ], t.prototype, "userNo", void 0), t
      }
      (), h=function(t){
        function e(){
          return null!==t&&t.apply(this, arguments)||this
        }
        return c(e, t), u([
          (0, r.v)(), (0, o.Z)((function(){
            return l
          }))
        ], e.prototype, "department", void 0), e
      }
      (d), v=function(){
        function t(){
        }
        return u([
          (0, r.v)()
        ], t.prototype, "id", void 0), u([
          (0, r.v)()
        ], t.prototype, "status", void 0), u([
          (0, r.v)(), (0, s.d)((function(t){
            var e=t.value;
            return a.TimeUtils.toLocalDate(e)
          }), {
            toClassOnly:!0
          })
        ], t.prototype, "createdAt", void 0), u([
          (0, r.v)(), (0, o.Z)((function(){
            return h
          }))
        ], t.prototype, "user", void 0), t
      }
      (), p=function(){
        function t(){
          this.knowledgeNodeCount=void 0, this.owners=[
          ], this.ownerIds=[
          ], this.enrolledProject=!0, this.audit=void 0
        }
        return u([
          (0, r.v)()
        ], t.prototype, "id", void 0), u([
          (0, r.v)()
        ], t.prototype, "name", void 0), u([
          (0, r.v)()
        ], t.prototype, "knowledgeNodeCount", void 0), u([
          (0, r.v)({
            name:"classroomSchedule"
          })
        ], t.prototype, "description", void 0), u([
          (0, r.v)({
            name:"instructors"
          }), (0, o.Z)((function(){
            return d
          }))
        ], t.prototype, "owners", void 0), u([
          (0, r.v)()
        ], t.prototype, "enrolledProject", void 0), u([
          (0, r.v)(), (0, o.Z)((function(){
            return v
          }))
        ], t.prototype, "audit", void 0), t
      }
      (), f=function(){
        function t(){
          this.refParentId=null
        }
        return u([
          (0, r.v)()
        ], t.prototype, "id", void 0), u([
          (0, r.v)()
        ], t.prototype, "name", void 0), u([
          (0, r.v)(), (0, s.d)((function(t){
            var e=t.value;
            return a.TimeUtils.toLocalDate(e)
          }), {
            toClassOnly:!0
          })
        ], t.prototype, "createdAt", void 0), u([
          (0, r.v)()
        ], t.prototype, "createdById", void 0), u([
          (0, r.v)()
        ], t.prototype, "refParentId", void 0), u([
          (0, r.v)()
        ], t.prototype, "upload", void 0), u([
          (0, r.v)()
        ], t.prototype, "allowDownload", void 0), u([
          (0, r.v)()
        ], t.prototype, "knowledgeCount", void 0), u([
          (0, r.v)()
        ], t.prototype, "knowledgeNodes", void 0), t
      }
      ()
    }, 273227:(t, e, i)=>{
      i.r(e), i.d(e, {
        default:()=>c
      });
      var n=i(512897), r=i.n(n), o=i(55042), s=i.n(o), a=new(r())({
        id:"info", use:"info-usage", viewBox:"0 0 14 14", content:'<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 14 14" id="info">\n<style type="text/css">\n\t#info .st0{fill-rule:evenodd;clip-rule:evenodd;fill:currentColor;}\n</style>\n<title>icon/alert/常规</title>\n<desc>Created with Sketch.</desc>\n<g>\n\t<path id="info_Combined-Shape" class="st0" d="M7,1c3.3,0,6,2.7,6,6s-2.7,6-6,6s-6-2.7-6-6S3.7,1,7,1z M7.6,5.8H6.4v3.6l-0.6,0v0.9h2.4\n\t\tV9.4l-0.6,0V5.8z M6.4,5.8H5.8v0.9h0.6V5.8z M7,3.4c-0.5,0-0.9,0.4-0.9,0.9S6.5,5.2,7,5.2s0.9-0.4,0.9-0.9S7.5,3.4,7,3.4z" />\n</g>\n</symbol>'
      });
      s().add(a);
      const c=a
    }, 320542:(t, e, i)=>{
      i(219693), i(158649);
      !function(){
        var t, e;
        function i(){
          dataLayer.push(arguments)
        }
        if(window.dataLayer=window.dataLayer||[
        ], i("js", new Date), (null!=window.statisticsSettings?window.statisticsSettings.gaTrackingId:void 0)&&(t=window.statisticsSettings.gaTrackingId, e=window.statisticsSettings.gaVersion), "GA4"==e&&t)if(t.indexOf(",")>0)for(var n=t.split(","), r=0;
        r<n.length;
        r++){
          i("config", n[
            r
          ])
        }
        else i("config", t)
      }
      ()
    }, 366875:(t, e, i)=>{
      i.d(e, {
        LE:()=>w, $B:()=>b, A8:()=>m, Xi:()=>_, pD:()=>g, hl:()=>C
      });
      i(540590), i(219693), i(418665), i(269193), i(14602);
      var n=i(272505), r=i.n(n), o=i(920453), s=i(218831), a=(i(334867), i(738645)), c=i(510543), u=i(795093), l=i(793110), d=i.n(l), h=function(t, e, i, n){
        var r, o=arguments.length, s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e, i):n;
        if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t, e, i, n);
        else for(var a=t.length-1;
        a>=0;
        a--)(r=t[
          a
        ])&&(s=(o<3?r(s):o>3?r(e, i, s):r(e, i))||s);
        return o>3&&s&&Object.defineProperty(e, i, s), s
      }, v=function(){
        function t(){
        }
        return h([
          (0, a.v)()
        ], t.prototype, "id", void 0), h([
          (0, a.v)(), (0, c.d)((function(t){
            var e=t.value, i=new(d())(1024), n=i.mul(i), r=new(d())(e), o="B";
            return r.gte(i)&&r.lt(n)?(o="K", r=r.div(i)):r.gte(n)&&(o="M", r=r.div(n)), r.mul(new(d())(10)).floor().div(new(d())(10)).toFixed()+o
          }))
        ], t.prototype, "size", void 0), h([
          (0, a.v)({
            name:"last_updated_at"
          }), (0, c.d)((function(t){
            var e=t.value;
            return u(e).format("YYYY-MM-DD HH:mm:ss")
          }))
        ], t.prototype, "lastUpdatedAt", void 0), h([
          (0, a.v)()
        ], t.prototype, "status", void 0), h([
          (0, a.v)()
        ], t.prototype, "name", void 0), h([
          (0, a.v)()
        ], t.prototype, "url", void 0), t
      }
      (), p=function(t, e, i, n){
        return new(i||(i=Promise))((function(r, o){
          function s(t){
            try{
              c(n.next(t))
            }
            catch(t){
              o(t)
            }
          }
          function a(t){
            try{
              c(n.throw(t))
            }
            catch(t){
              o(t)
            }
          }
          function c(t){
            var e;
            t.done?r(t.value):(e=t.value, e instanceof i?e:new i((function(t){
              t(e)
            }))).then(s, a)
          }
          c((n=n.apply(t, e||[
          ])).next())
        }))
      }, f=function(t, e){
        var i, n, r, o, s={
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
        return o={
          next:a(0), throw:a(1), return:a(2)
        }, "function"==typeof Symbol&&(o[
          Symbol.iterator
        ]
        =function(){
          return this
        }), o;
        function a(a){
          return function(c){
            return function(a){
              if(i)throw new TypeError("Generator is already executing.");
              for(;
              o&&(o=0, a[
                0
              ]
              &&(s=0)), s;
              )try{
                if(i=1, n&&(r=2&a[
                  0
                ]
                ?n.return:a[
                  0
                ]
                ?n.throw||((r=n.return)&&r.call(n), 0):n.next)&&!(r=r.call(n, a[
                  1
                ])).done)return r;
                switch(n=0, r&&(a=[
                  2&a[
                    0
                  ], r.value
                ]), a[
                  0
                ]){
                  case 0:case 1:r=a;
                  break;
                  case 4:return s.label++, {
                    value:a[
                      1
                    ], done:!1
                  };
                  case 5:s.label++, n=a[
                    1
                  ], a=[
                    0
                  ];
                  continue;
                  case 7:a=s.ops.pop(), s.trys.pop();
                  continue;
                  default:if(!(r=s.trys, (r=r.length>0&&r[
                    r.length-1
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
                  &&(!r||a[
                    1
                  ]
                  >r[
                    0
                  ]
                  &&a[
                    1
                  ]
                  <r[
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
                  &&s.label<r[
                    1
                  ]){
                    s.label=r[
                      1
                    ], r=a;
                    break
                  }
                  if(r&&s.label<r[
                    2
                  ]){
                    s.label=r[
                      2
                    ], s.ops.push(a);
                    break
                  }
                  r[
                    2
                  ]
                  &&s.ops.pop(), s.trys.pop();
                  continue
                }
                a=e.call(t, s)
              }
              catch(t){
                a=[
                  6, t
                ], n=0
              }
              finally{
                i=r=0
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
      }, y=function(t, e){
        var i={
        };
        for(var n in t)Object.prototype.hasOwnProperty.call(t, n)&&e.indexOf(n)<0&&(i[
          n
        ]
        =t[
          n
        ]);
        if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){
          var r=0;
          for(n=Object.getOwnPropertySymbols(t);
          r<n.length;
          r++)e.indexOf(n[
            r
          ])<0&&Object.prototype.propertyIsEnumerable.call(t, n[
            r
          ])&&(i[
            n[
              r
            ]
          ]
          =t[
            n[
              r
            ]
          ])
        }
        return i
      }, m=function(t, e){
        return p(void 0, void 0, void 0, (function(){
          return f(this, (function(i){
            switch(i.label){
              case 0:return[
                4, r().post("/api/courses/".concat(t, "/course-package/export"), e)
              ];
              case 1:return[
                2, i.sent().data
              ]
            }
          }))
        }))
      }, g=function(t){
        return p(void 0, void 0, void 0, (function(){
          return f(this, (function(e){
            switch(e.label){
              case 0:return[
                4, r().get("/api/courses/".concat(t, "/course-package/status"))
              ];
              case 1:return[
                2, e.sent().data.data
              ]
            }
          }))
        }))
      }, _=function(t, e, i, n){
        return void 0===e&&(e=1), void 0===i&&(i=10), void 0===n&&(n=""), p(void 0, void 0, void 0, (function(){
          var a, c, u, l, d;
          return f(this, (function(h){
            switch(h.label){
              case 0:return[
                4, r().get("/api/courses/".concat(t, "/course-package"), {
                  params:{
                    page:e, page_size:i, keyword:n
                  }
                })
              ];
              case 1:return a=h.sent(), c=a.data.data, u=c.items, l=y(c, [
                "items"
              ]), (d=(0, s.camelizeKeys)(l)).items=(0, o.plainToClass)(v, u), [
                2, d
              ]
            }
          }))
        }))
      }, b=function(t){
        return p(void 0, void 0, void 0, (function(){
          return f(this, (function(e){
            switch(e.label){
              case 0:return[
                4, r().delete("/api/course-packages/".concat(t))
              ];
              case 1:return[
                2, e.sent().data
              ]
            }
          }))
        }))
      }, w=function(t, e){
        return p(void 0, void 0, void 0, (function(){
          return f(this, (function(i){
            switch(i.label){
              case 0:return[
                4, r().put("/api/course-packages/".concat(t, "?no_check=true"), e)
              ];
              case 1:return[
                2, i.sent().data
              ]
            }
          }))
        }))
      }, C=function(t){
        return p(void 0, void 0, void 0, (function(){
          return f(this, (function(e){
            switch(e.label){
              case 0:return[
                4, r().post("/api/course-packages/".concat(t, "/save"))
              ];
              case 1:return[
                2, e.sent().data
              ]
            }
          }))
        }))
      }
    }, 415514:(t, e, i)=>{
      i.d(e, {
        VueI18nExt:()=>u
      });
      i(714913), i(169218);
      var n, r=i(253898), o=i(962893), s=(n=function(t, e){
        return(n=Object.setPrototypeOf||{
          __proto__:[
          ]
        }
        instanceof Array&&function(t, e){
          t.__proto__=e
        }
        ||function(t, e){
          for(var i in e)Object.prototype.hasOwnProperty.call(e, i)&&(t[
            i
          ]
          =e[
            i
          ])
        })(t, e)
      }, function(t, e){
        if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");
        function i(){
          this.constructor=t
        }
        n(t, e), t.prototype=null===e?Object.create(e):(i.prototype=e.prototype, new i)
      }), a=function(){
        return(a=Object.assign||function(t){
          for(var e, i=1, n=arguments.length;
          i<n;
          i++)for(var r in e=arguments[
            i
          ])Object.prototype.hasOwnProperty.call(e, r)&&(t[
            r
          ]
          =e[
            r
          ]);
          return t
        }).apply(this, arguments)
      }, c=function(t, e, i){
        if(i||2===arguments.length)for(var n, r=0, o=e.length;
        r<o;
        r++)!n&&r in e||(n||(n=Array.prototype.slice.call(e, 0, r)), n[
          r
        ]
        =e[
          r
        ]);
        return t.concat(n||Array.prototype.slice.call(e))
      }, u=function(t){
        function e(e){
          var i=t.call(this, e)||this;
          return i.customizeI18n=!1, i.customizeMessages=e.customizeMessages||{
          }, i._vm.customizeMessages=i.customizeMessages, window.featureToggles&&window.featureToggles.customize_i18n&&(i.customizeI18n=!0), o.default.prototype.$t=i._$t, o.default.prototype._i18n=i, i
        }
        return s(e, t), e.prototype._initVM=function(t){
          var e=o.default.config.silent;
          o.default.config.silent=!0, this._vm=new o.default({
            data:a(a({
            }, t), {
              customizeMessages:{
              }
            })
          }), o.default.config.silent=e
        }, e.prototype.updateCustomizeMessages=function(t){
          this.customizeMessages=t, this._vm&&this._vm.$set(this._vm, "customizeMessages", t)
        }, e.prototype.t=function(t){
          for(var e=[
          ], i=1;
          i<arguments.length;
          i++)e[
            i-1
          ]
          =arguments[
            i
          ];
          return this._translateWithCustomize.apply(this, c([
            t, null
          ], e, !1))
        }, e.prototype._translateWithCustomize=function(t, e){
          void 0===e&&(e=null);
          for(var i=[
          ], n=2;
          n<arguments.length;
          n++)i[
            n-2
          ]
          =arguments[
            n
          ];
          var r="";
          if(this.customizeI18n){
            var o=this.customizeMessages;
            r=this._t.apply(this, c([
              t, this.locale, o, null
            ], i, !1))
          }
          return r!==t&&r||(r=this._t.apply(this, c([
            t, this.locale, this._getMessages(), e
          ], i, !1))), r
        }, e.prototype._$t=function(t){
          for(var e=[
          ], i=1;
          i<arguments.length;
          i++)e[
            i-1
          ]
          =arguments[
            i
          ];
          var n=this.$i18n;
          return n?n._translateWithCustomize.apply(n, c([
            t, this
          ], e, !1)):""
        }, e
      }
      (r.A)
    }, 454985:(t, e, i)=>{
      i.r(e), i.d(e, {
        default:()=>o
      });
      var n=i(611854), r=i(150655);
      const o=(0, i(514486).A)(r.A, n.X, n.Y, !1, null, "183bd19f", null).exports
    }, 457306:(t, e, i)=>{
      var n=i(795093), r=i(302543), o=i(248124), s=i(287092);
      function a(t, e){
        return function(t){
          if(Array.isArray(t))return t
        }
        (t)||function(t, e){
          if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;
          var i=[
          ], n=!0, r=!1, o=void 0;
          try{
            for(var s, a=t[
              Symbol.iterator
            ]
            ();
            !(n=(s=a.next()).done)&&(i.push(s.value), !e||i.length!==e);
            n=!0);
          }
          catch(t){
            r=!0, o=t
          }
          finally{
            try{
              n||null==a.return||a.return()
            }
            finally{
              if(r)throw o
            }
          }
          return i
        }
        (t, e)||u(t, e)||function(){
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        ()
      }
      function c(t, e){
        var i;
        if("undefined"==typeof Symbol||null==t[
          Symbol.iterator
        ]){
          if(Array.isArray(t)||(i=u(t))||e&&t&&"number"==typeof t.length){
            i&&(t=i);
            var n=0, r=function(){
            };
            return{
              s:r, n:function(){
                return n>=t.length?{
                  done:!0
                }
                :{
                  done:!1, value:t[
                    n++
                  ]
                }
              }, e:function(t){
                throw t
              }, f:r
            }
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var o, s=!0, a=!1;
        return{
          s:function(){
            i=t[
              Symbol.iterator
            ]
            ()
          }, n:function(){
            var t=i.next();
            return s=t.done, t
          }, e:function(t){
            a=!0, o=t
          }, f:function(){
            try{
              s||null==i.return||i.return()
            }
            finally{
              if(a)throw o
            }
          }
        }
      }
      function u(t, e){
        if(t){
          if("string"==typeof t)return l(t, e);
          var i=Object.prototype.toString.call(t).slice(8, -1);
          return"Object"===i&&t.constructor&&(i=t.constructor.name), "Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?l(t, e):void 0
        }
      }
      function l(t, e){
        (null==e||e>t.length)&&(e=t.length);
        for(var i=0, n=new Array(e);
        i<e;
        i++)n[
          i
        ]
        =t[
          i
        ];
        return n
      }
      function d(){
        for(var t=arguments.length, e=new Array(t), i=0;
        i<t;
        i++)e[
          i
        ]
        =arguments[
          i
        ];
        return n.min(e.filter(Boolean).map((t=>n(t))))
      }
      i(215195), i(219693), i(714913), i(43148), i(158649), i(658379);
      class h{
        constructor(t){
          this.url=t.server, this.enableMgsQueryCache=t.enableMgsQueryCache, this.videoViewsCache={
          }, this.videosPlayedCache={
          }, this.videoViewsOfOrgCache={
          }, this.videoStatofOrgCache={
          }, this.courseVideosPlayedCache={
          }, this.courseLessonsPlayedCache={
          }, this.lessonViewsCache={
          }, this.lectureLiveViewsCache={
          }, this.lessonsPlayedCache={
          }, this.lectureLivePlayedCache={
          }, this.courseStudentVisitsCache={
          }, this.courseStudentOnlineVideosCache={
          }, this.courseActivityTypeStudentVisitsCache={
          }, this.countInCourseCache={
          }, this.countInCourseWithParamsCache={
          }, this.departmentVisitsDaysCache={
          }, this.departmentVisitsCache={
          }, this.departmentVisitsTodayCache={
          }, this.departmentVisitsYearCache={
          }, this.courseVisitsDaysCache={
          }, this.courseVisitsCache={
          }, this.courseVisitsTodayCache={
          }, this.courseVisitsYearCache={
          }, this.userCourseVideosVisitsCache={
          }, this.userCourseVisitsCache={
          }, this.userCourseVisitsDaysCache={
          }, this.userCourseVisitsTodayCache={
          }, this.userCourseVisitsYearCache={
          }, this.studentCourseVisitDetailsCache={
          }, this.userCourseActivitiesVisitsDaysCache={
          }, this.userCourseActivitiesVisitsTodayCache={
          }, this.userCourseActivitiesVisitsYearCache={
          }, this.courseActivitiesVisitsDaysCache={
          }, this.courseActivitiesVisitsTodayCache={
          }, this.courseActivitiesVisitsYearCache={
          }, this.activitiesVisitCache={
          }, this.activityVisitCache={
          }, this.studentActivityVisitCache={
          }, this.studentWebLinkViewCache={
          }, this.studentVideoViewCache={
          }, this.studentLessonViewCache={
          }, this.studentLectureLiveViewCache={
          }, this.studentMaterialDownloadCache={
          }, this.studentScormStatCache={
          }, this.studentH5CoursewareStatCache={
          }, this.userMaterialDownloadsCache={
          }, this.courseMaterialDownloadCache={
          }, this.courseWebLinkViewCache={
          }, this.orgVisitsCache={
          }, this.orgVisitsDateRangeCache={
          }, this.orgVisitsDaysCache={
          }, this.orgVisitsTodayCache={
          }, this.orgVisitsYearCache={
          }, this.orgVisitsByBrowserCache={
          }, this.orgVisitsByDateRangeBrowserCache={
          }, this.bulletinVisitsCache={
          }, this.bulletinVisitsDateRangeCache={
          }, this.bulletinVisitsDaysCache={
          }, this.bulletinVisitsTodayCache={
          }, this.bulletinVisitsYearCache={
          }, this.bulletinVisitsStatCache={
          }
        }
        _extractResource(t, e, i){
          return r.each(e, (function(e){
            var n=e.user_id, r=e.activity_id;
            if(null==t[
              n
            ]
            &&(t[
              n
            ]
            ={
            }), null==t[
              n
            ]
            [
              i
            ]
            &&(t[
              n
            ]
            [
              i
            ]
            ={
            }), null==t[
              n
            ]
            [
              i
            ]
            [
              r
            ]
            &&(t[
              n
            ]
            [
              i
            ]
            [
              r
            ]
            ={
            }), "material"===i){
              var o=e.upload_id;
              t[
                n
              ]
              [
                i
              ]
              [
                r
              ]
              [
                o
              ]
              =(e.data.download_count||0)+(e.data.view_count||0)
            }
            else t[
              n
            ]
            [
              i
            ]
            [
              r
            ]
            =e.data.view_count||0
          }))
        }
        countInCourseWithParams(t, e, i, n){
          var r=JSON.stringify(e), s="".concat(r).concat(t);
          s in this.countInCourseWithParamsCache&&i(this.countInCourseWithParamsCache[
            s
          ]);
          var a=this._query("courses/".concat(t, "/activities/metrics?types=").concat(r));
          return o.when(a).then((t=>{
            i(t)
          }), n)
        }
        countInCourse(t, e){
          if(!(t in this.countInCourseCache)){
            var i=this._query("courses/".concat(t, "/activities/metrics?types=").concat(JSON.stringify({
              material:[
                "user", "activity", "upload"
              ], web_link:[
                "user", "activity"
              ], slide:[
                "user", "activity"
              ], lesson:[
                "user", "activity"
              ], online_video:[
                "user", "activity"
              ]
            })));
            return o.when(i).then((i=>{
              var n={
              };
              for(var r in i){
                var o=i[
                  r
                ];
                this._extractResource(n, o, r)
              }
              return this.countInCourseCache[
                t
              ]
              =n, e(n)
            }), (()=>e({
            })))
          }
          e(this.countInCourseCache[
            t
          ])
        }
        countInCourseWithStudentIds(t, e, i){
          var n=this._complexQuery("courses/".concat(t, "/activities/metrics"), null, {
            user_ids:e, types:{
              material:[
                "user", "activity", "upload"
              ], web_link:[
                "user", "activity"
              ], slide:[
                "user", "activity"
              ], lesson:[
                "user", "activity"
              ], online_video:[
                "user", "activity"
              ], lecture_live:[
                "user", "activity"
              ]
            }
          });
          return o.when(n).then((t=>{
            var e={
            };
            for(var n in t){
              var r=t[
                n
              ];
              this._extractResource(e, r, n)
            }
            return i(e)
          }), (()=>i({
          })))
        }
        videoViews(t, e){
          return this._videoViews(t, e, "online-videos", this.videoViewsCache)
        }
        interactionVideoViews(t, e){
          return this._videoViews(t, e, "interactions", this.videoViewsCache)
        }
        lessonViews(t, e){
          return this._videoViews(t, e, "lessons", this.lessonViewsCache)
        }
        lectureLiveViews(t, e){
          return this._videoViews(t, e, "lecture-live", this.lectureLiveViewsCache)
        }
        _videoViews(t, e, i, n){
          var r="".concat(t, "_").concat(i);
          if(!(r in n)){
            var s=this._query("activities/".concat(t, "/").concat(i, "/metrics?group_by=user"));
            return o.when(s).then((function(t){
              var o={
              };
              return t.forEach((function(t){
                o[
                  t.user_id
                ]
                ="lecture-live"===i?{
                  lectureLiveDuration:t.data.lecture_live_play_duration||0, lectureLiveViews:t.data.lecture_live_view_count||0, replayViewDuration:t.data.replay_play_duration||0, replayViews:t.data.replay_view_count||0
                }
                :{
                  firstView:t.data.first_view, lastView:t.data.last_view, viewDuration:t.data.play_duration||0, views:t.data.view_count||0
                }
              })), n[
                r
              ]
              =o, e(o)
            }), (()=>e({
            })))
          }
          e(n[
            r
          ])
        }
        videosViewedOfOrg(t, e){
          if(!(t in this.videoViewsOfOrgCache)){
            var i=this._query("orgs/".concat(t, "/online-videos/metrics?time_restrict=day"));
            return o.when(i).then((i=>{
              var n={
                views_today:0, views_this_month:0
              }, r=i[
                i.length-1
              ];
              return n.views_today=r.view_count||0, n.views_this_month=0, i.forEach((t=>n.views_this_month+=t.view_count||0)), this.videoViewsOfOrgCache[
                t
              ]
              =n, e(n)
            }), (()=>e({
            })))
          }
          e(this.videoViewsOfOrgCache[
            t
          ])
        }
        videoStatOrg(t, e, i){
          var n="".concat(t, "_").concat(e);
          if(!(n in this.videoStatofOrgCache)){
            var r=this._query("orgs/".concat(t, "/online-videos/stat?range=").concat(e));
            return o.when(r).then((t=>i(t)), (()=>i({
            })))
          }
          i(this.videoStatofOrgCache[
            n
          ])
        }
        videosPlayed(t, e){
          return this._videosPlayed(t, e, "online-videos", this.videosPlayedCache)
        }
        courseVideosPlayed(t, e){
          return this._courseVideosPlayed(t, e, "online-videos", this.courseVideosPlayedCache)
        }
        interactionVideosPlayed(t, e){
          return this._videosPlayed(t, e, "interactions", this.videosPlayedCache)
        }
        courseInteractionVideosPlayed(t, e){
          return this._courseVideosPlayed(t, e, "interactions", this.courseVideosPlayedCache)
        }
        lessonsPlayed(t, e){
          return this._videosPlayed(t, e, "lessons", this.lessonsPlayedCache)
        }
        lectureLivePlayed(t, e){
          return this._videosPlayed(t, e, "lecture-live", this.lectureLivePlayedCache)
        }
        courseLessonsPlayed(t, e){
          return this._courseVideosPlayed(t, e, "lessons", this.courseLessonsPlayedCache)
        }
        _courseVideosPlayed(t, e, i, n){
          var r="".concat(t, "_").concat(i);
          if(!(r in n)){
            var s=this._query("courses/".concat(t, "/").concat(i, "/metrics?group_by=course,activity"));
            return o.when(s).then((function(t){
              var i={
              };
              return t.forEach((function(t){
                i[
                  t.activity_id
                ]
                =t.data
              })), n[
                r
              ]
              =i, e(i)
            }), (()=>e({
            })))
          }
          e(n[
            r
          ])
        }
        _videosPlayed(t, e, i, n){
          var r="".concat(t, "_").concat(i);
          if(!(r in n)){
            var s=this._query("courses/".concat(t, "/").concat(i, "/metrics?group_by=user,activity"));
            return o.when(s).then((function(t){
              var o={
              };
              return t.forEach((function(t){
                null==o[
                  t.activity_id
                ]
                &&(o[
                  t.activity_id
                ]
                ={
                }), o[
                  t.activity_id
                ]
                [
                  t.user_id
                ]
                ="lecture-live"===i?{
                  lectureLiveViews:t.data.lecture_live_view_count||0, lectureLiveViewDuration:t.data.lecture_live_play_duration||0, replayViews:t.data.replay_view_count||0, replayViewDuration:t.data.replay_play_duration||0
                }
                :{
                  views:t.data.view_count||0, viewDuration:t.data.play_duration||0
                }
              })), n[
                r
              ]
              =o, e(o)
            }), (()=>e({
            })))
          }
          e(n[
            r
          ])
        }
        courseVideosViewsCustomRange(t, e, i, n, r){
          var s=(new Date).getTimezoneOffset()/-60, a=this._query("courses/".concat(t, "/online-videos/plays?start=").concat(e, "&end=").concat(i, "&timezone_offset=").concat(s, "&split=").concat(n)), u=this._query("courses/".concat(t, "/interactions/plays?start=").concat(e, "&end=").concat(i, "&timezone_offset=").concat(s, "&split=").concat(n));
          return o.when(a, u).then((function(t, e){
            var i, n="success"===t[
              1
            ]
            ?t[
              0
            ]
            :[
            ], o="success"===e[
              1
            ]
            ?e[
              0
            ]
            :[
            ], s={
            }, a=c(n.concat(o));
            try{
              for(a.s();
              !(i=a.n()).done;
              ){
                var u=i.value;
                s[
                  u.activity_id
                ]
                =u.plays
              }
            }
            catch(t){
              a.e(t)
            }
            finally{
              a.f()
            }
            return r(s)
          }), (t=>r({
          })))
        }
        courseVideosViews(t, e, i, n){
          var r={
            day:"hour", week:"day", month:"day", year:"month"
          }, a=this._query("courses/".concat(t, "/online-videos/metrics?group_by=activity,user&time_restrict=").concat(r[
            e
          ])), u=this._query("courses/".concat(t, "/interactions/metrics?group_by=activity,user&time_restrict=").concat(r[
            e
          ]));
          return o.when(a, u).then((function(t, r){
            var o, a="success"===t[
              1
            ]
            ?t[
              0
            ]
            :[
            ], u="success"===r[
              1
            ]
            ?r[
              0
            ]
            :[
            ], l={
            }, d=c(a.concat(u));
            try{
              for(d.s();
              !(o=d.n()).done;
              ){
                var h=o.value;
                if(-1===i.indexOf(h.user_id)){
                  var v, p=[
                  ], f=c(h.data);
                  try{
                    for(f.s();
                    !(v=f.n()).done;
                    ){
                      var y=v.value, m="play_count"in y?y.play_count:0;
                      p.push(m)
                    }
                  }
                  catch(t){
                    f.e(t)
                  }
                  finally{
                    f.f()
                  }
                  if("week"===e&&(p=p.slice(-7)), h.activity_id in l){
                    var g, _=c(s.range(0, l[
                      h.activity_id
                    ].length-1, !0));
                    try{
                      for(_.s();
                      !(g=_.n()).done;
                      ){
                        var b=g.value;
                        l[
                          h.activity_id
                        ]
                        [
                          b
                        ]
                        +=p[
                          b
                        ]
                      }
                    }
                    catch(t){
                      _.e(t)
                    }
                    finally{
                      _.f()
                    }
                  }
                  else l[
                    h.activity_id
                  ]
                  =p
                }
              }
            }
            catch(t){
              d.e(t)
            }
            finally{
              d.f()
            }
            return n(l)
          }), (()=>n({
          })))
        }
        courseStudentOnlineVideos(t, e){
          if(!(t in this.courseStudentOnlineVideosCache)){
            var i=this._query("courses/".concat(t, "/online-videos/metrics?group_by=activity,user"));
            return o.when(i).then((i=>{
              var n={
              };
              return i.forEach((function(t){
                t.data.play_duration&&t.data.play_duration<0&&(t.data.play_duration=0), n[
                  t.user_id
                ]
                ?(n[
                  t.user_id
                ].playCount+=t.data.play_count||0, n[
                  t.user_id
                ].playDuration+=t.data.play_duration||0):n[
                  t.user_id
                ]
                ={
                  playCount:t.data.play_count||0, playDuration:t.data.play_duration||0
                }
              })), this.courseStudentOnlineVideosCache[
                t
              ]
              =n, e(n)
            }), (()=>e({
            })))
          }
          e(this.courseStudentOnlineVideosCache[
            t
          ])
        }
        courseStudentOnlineVideosWithStudentIds(t, e, i, n){
          var r=this._query("courses/".concat(t, "/online-videos/metrics?user_ids=").concat(e, "&group_by=activity,user"));
          return o.when(r).then((t=>{
            var e={
            };
            return t.forEach((function(t){
              i.includes(t.activity_id)&&(e[
                t.user_id
              ]
              ?(e[
                t.user_id
              ].playCount+=t.data.play_count||0, e[
                t.user_id
              ].playDuration+=t.data.play_duration||0):e[
                t.user_id
              ]
              ={
                playCount:t.data.play_count||0, playDuration:t.data.play_duration||0
              })
            })), n(e)
          }), (()=>n({
          })))
        }
        videoStudentsInterval(t, e, i, n, r, s){
          var a, u=arguments.length>6&&void 0!==arguments[
            6
          ]
          ?arguments[
            6
          ]
          :"";
          if("custom"===e){
            var l=(new Date).getTimezoneOffset()/-60;
            a=this._query("video/".concat(t, "/online-videos/users/intervals?range=").concat(e, "&start=").concat(r, "&end=").concat(s, "&timezone_offset=").concat(l, "&user_ids=").concat(u))
          }
          else a=this._query("video/".concat(t, "/online-videos/users/intervals?range=").concat(e, "&user_ids=").concat(u));
          return o.when(a).then((function(t){
            var e, n={
            }, r=c(t);
            try{
              for(r.s();
              !(e=r.n()).done;
              ){
                var o=e.value;
                n[
                  o._id
                ]
                =o.intervals
              }
            }
            catch(t){
              r.e(t)
            }
            finally{
              r.f()
            }
            return i(n)
          }), (t=>n(t.responseJSON)))
        }
        lessonStudentsInterval(t, e, i, n, r, s){
          var a;
          if("custom"===e){
            var u=(new Date).getTimezoneOffset()/-60;
            a=this._query("video/".concat(t, "/lessons/users/intervals?range=").concat(e, "&start=").concat(r, "&end=").concat(s, "&timezone_offset=").concat(u))
          }
          else a=this._query("video/".concat(t, "/lessons/users/intervals?range=").concat(e));
          return o.when(a).then((function(t){
            var e, n={
            }, r=c(t);
            try{
              for(r.s();
              !(e=r.n()).done;
              ){
                var o=e.value;
                n[
                  o._id
                ]
                =o.intervals
              }
            }
            catch(t){
              r.e(t)
            }
            finally{
              r.f()
            }
            return i(n)
          }), (t=>n(t.responseJSON)))
        }
        interactionVideoStudentsInterval(t, e, i, n, r, s){
          var a;
          if("custom"===e){
            var u=(new Date).getTimezoneOffset()/-60;
            a=this._query("video/".concat(t, "/interactions/users/intervals?range=").concat(e, "&start=").concat(r, "&end=").concat(s, "&timezone_offset=").concat(u))
          }
          else a=this._query("video/".concat(t, "/interactions/users/intervals?range=").concat(e));
          return o.when(a).then((function(t){
            var e, n={
            }, r=c(t);
            try{
              for(r.s();
              !(e=r.n()).done;
              ){
                var o=e.value;
                n[
                  o._id
                ]
                =o.intervals
              }
            }
            catch(t){
              r.e(t)
            }
            finally{
              r.f()
            }
            return i(n)
          }), (t=>n(t.responseJSON)))
        }
        courseStudentVisits(t, e){
          if(!(t in this.courseStudentVisitsCache)){
            var i=this._query("courses/".concat(t, "/user-visits/metrics?group_by=user"));
            return o.when(i).then((i=>{
              var n={
              };
              return i.forEach((t=>n[
                t.user_id
              ]
              ={
                visits:t.data.count||0, visitDuration:t.data.sum||0, firstVisit:d(t.data.first_visit_start_from, t.data.first_time), lastVisit:t.data.last_time
              })), this.courseStudentVisitsCache[
                t
              ]
              =n, e(n)
            }), (()=>e({
            })))
          }
          e(this.courseStudentVisitsCache[
            t
          ])
        }
        courseStudentVisitsWithStudentIds(t, e, i){
          var n=this._complexQuery("courses/".concat(t, "/user-visits/metrics?group_by=user"), null, {
            user_ids:e
          });
          return o.when(n).then((t=>{
            var e={
            };
            return t.forEach((t=>e[
              t.user_id
            ]
            ={
              visits:t.data.count||0, visitDuration:t.data.sum||0, firstVisit:d(t.data.first_visit_start_from, t.data.first_time), lastVisit:t.data.last_time
            })), i(e)
          }), (()=>i({
          })))
        }
        courseZhiyunVisitsWithStudentIds(t, e, i, n){
          var r=this._complexQuery("orgs/".concat(t, "/zhiyun-visits/metrics"), null, {
            user_ids:i, course_ids:e
          });
          return o.when(r).then((t=>{
            var e={
            };
            return t.forEach((t=>{
              e[
                t.user_id
              ]
              ={
                visits:t.data.visits||0
              }
            })), n(e)
          }), (()=>n({
          })))
        }
        courseVideosStudentViews(t, e, i){
          return this._courseVideosStudentViews(t, e, i, "online-videos", this.studentVideoViewCache)
        }
        courseLessonsStudentViews(t, e, i){
          return this._courseVideosStudentViews(t, e, i, "lessons", this.studentLessonViewCache)
        }
        courseLectureLiveStudentViews(t, e, i){
          return this._courseLiveStudentViews(t, e, i, "lecture-live", this.studentLectureLiveViewCache)
        }
        _courseVideosStudentViews(t, e, i, n, r){
          var s="".concat(t, "_").concat(e);
          if(!r[
            s
          ]){
            var a=this._query("courses/".concat(t, "/users/").concat(e, "/").concat(n, "/metrics?group_by=activity"));
            return o.when(a).then((function(t){
              var e={
              };
              return t.forEach((t=>e[
                t.activity_id
              ]
              ={
                firstView:t.data.first_view, lastView:t.data.last_view, views:t.data.view_count||0, viewDuration:t.data.play_duration||0
              })), r[
                s
              ]
              =e, i(e)
            }), (()=>i({
            })))
          }
          i(r[
            s
          ])
        }
        _courseLiveStudentViews(t, e, i, n, r){
          var s="".concat(t, "_").concat(e);
          if(!r[
            s
          ]){
            var a=this._query("courses/".concat(t, "/users/").concat(e, "/").concat(n, "/metrics?group_by=activity"));
            return o.when(a).then((function(t){
              var e={
              };
              return t.forEach((t=>e[
                t.activity_id
              ]
              ={
                lectureLiveViews:t.data.lecture_live_view_count||0, replayViews:t.data.replay_view_count||0, lectureLivePlayDuration:t.data.lecture_live_play_duration||0, replayPlayDuration:t.data.replay_play_duration||0
              })), r[
                s
              ]
              =e, i(e)
            }), (()=>i({
            })))
          }
          i(r[
            s
          ])
        }
        courseScormStudentStat(t, e, i){
          var n="".concat(t, "_").concat(e);
          if(this.studentScormStatCache[
            n
          ])return this.studentScormStatCache[
            n
          ];
          var r=this._query("courses/".concat(t, "/scorm/metrics?group_by=activity&user_ids=").concat(e));
          return o.when(r).then((t=>{
            this.studentScormStatCache[
              n
            ]
            =t, i(t)
          }), (()=>{
          }))
        }
        courseH5CoursewareStudentStat(t, e, i){
          var n="".concat(t, "_").concat(e);
          if(this.studentH5CoursewareStatCache[
            n
          ])return this.studentH5CoursewareStatCache[
            n
          ];
          var r=this._query("courses/".concat(t, "/h5-courseware/metrics?group_by=activity&user_ids=").concat(e));
          return o.when(r).then((t=>{
            this.studentH5CoursewareStatCache[
              n
            ]
            =t, i(t)
          }), (()=>{
          }))
        }
        courseMaterialsStudentDownloads(t, e, i){
          var n="".concat(t, "_").concat(e);
          if(!this.studentMaterialDownloadCache[
            n
          ]){
            var r=this._query("courses/".concat(t, "/users/").concat(e, "/materials/metrics?group_by=activity,upload"));
            return o.when(r).then((t=>{
              var e={
              };
              return t.forEach((function(t){
                var i="".concat(t.activity_id, "_").concat(t.upload_id);
                return e[
                  i
                ]
                ={
                  downloads:t.data.download_count||0, views:t.data.view_count||0, lastDownload:t.data.last_download, lastView:t.data.last_view
                }
              })), this.studentMaterialDownloadCache[
                n
              ]
              =e, i(e)
            }), (()=>i({
            })))
          }
          i(this.studentMaterialDownloadCache[
            n
          ])
        }
        courseMaterialsDownloads(t, e){
          if(!this.courseMaterialDownloadCache[
            t
          ]){
            var i=this._query("courses/".concat(t, "/materials/metrics?group_by=activity,upload,user"));
            return o.when(i).then((i=>{
              var n={
              };
              return i.forEach((function(t){
                var e="".concat(t.activity_id, "_").concat(t.upload_id);
                return null==n[
                  e
                ]
                &&(n[
                  e
                ]
                ={
                }), n[
                  e
                ]
                [
                  t.user_id
                ]
                ={
                  downloads:t.data.download_count||0, lastDownload:t.data.last_download, views:t.data.view_count||0, lastView:t.data.last_view
                }
              })), this.courseMaterialDownloadCache[
                t
              ]
              =n, e(n)
            }), (()=>e({
            })))
          }
          e(this.courseMaterialDownloadCache[
            t
          ])
        }
        courseWebLinkStudentViews(t, e, i){
          var n="".concat(t, "_").concat(e);
          if(!this.studentWebLinkViewCache[
            n
          ]){
            var r=this._query("courses/".concat(t, "/users/").concat(e, "/weblinks/metrics?group_by=activity"));
            return o.when(r).then((t=>{
              var e={
              };
              return t.forEach((t=>e[
                t.activity_id
              ]
              ={
                views:t.data.view_count||0, lastView:t.data.last_view
              })), this.studentWebLinkViewCache[
                n
              ]
              =e, i(e)
            }), (()=>i({
            })))
          }
          i(this.studentWebLinkViewCache[
            n
          ])
        }
        courseWebLinkViews(t, e){
          if(!this.courseWebLinkViewCache[
            t
          ]){
            var i=this._query("courses/".concat(t, "/weblinks/metrics?group_by=activity,user"));
            return o.when(i).then((i=>{
              var n={
              };
              return i.forEach((function(t){
                return null==n[
                  t.activity_id
                ]
                &&(n[
                  t.activity_id
                ]
                ={
                }), n[
                  t.activity_id
                ]
                [
                  t.user_id
                ]
                ={
                  views:t.data.view_count||0, lastView:t.data.last_view
                }
              })), this.courseWebLinkViewCache[
                t
              ]
              =n, e(n)
            }), (()=>e({
            })))
          }
          e(this.courseWebLinkViewCache[
            t
          ])
        }
        studentCourseVisits(t, e, i){
          var n="".concat(e, "_").concat(t);
          if(!this.studentCourseVisitDetailsCache[
            n
          ]){
            var r=this._query("courses/".concat(e, "/users/").concat(t, "/user-visits"));
            return o.when(r).then((t=>{
              var e=[
              ];
              return t.forEach((function(t){
                var i={
                  activityId:null==t.activity_id?"":t.activity_id, activityType:t.activity_type||null, groupId:t.group_id, visitTime:t.visit_start_from||t.time, visitDuration:t.visit_duration
                };
                return e.push(i)
              })), this.studentCourseVisitDetailsCache[
                n
              ]
              =e, i(e)
            }), (()=>i({
            })))
          }
          i(this.studentCourseVisitDetailsCache[
            n
          ])
        }
        courseActivitiesStudentVisits(t, e, i){
          var n="".concat(t, "_").concat(e);
          if(!this.studentActivityVisitCache[
            n
          ]){
            var r=this._query("courses/".concat(t, "/users/").concat(e, "/user-visits/metrics?group_by=activity,group,type"));
            return o.when(r).then((t=>{
              var e={
              };
              return t.forEach((function(t){
                var i="".concat(t.activity_type, "_").concat(t.activity_id);
                return t.group_id>0&&(i+="_".concat(t.group_id)), e[
                  i
                ]
                ={
                  firstVisit:d(t.data.first_visit_start_from, t.data.first_time), lastVisit:t.data.last_time, visits:t.data.count||0, visitDuration:t.data.sum||0, type:t.activity_type
                }
              })), this.studentActivityVisitCache[
                n
              ]
              =e, i(e)
            }), (()=>i({
            })))
          }
          i(this.studentActivityVisitCache[
            n
          ])
        }
        courseStudentActivityTypeVisits(t, e, i, n){
          var r="course"===e?"user":"user,type";
          "course"===e&&(e="");
          var s=this._complexQuery("courses/".concat(t, "/user-visits/metrics?activity_type=").concat(e, "&group_by=").concat(r), null, {
            user_ids:i
          });
          return o.when(s).then((t=>{
            var e={
            };
            return t.forEach((t=>e[
              t.user_id
            ]
            ={
              firstVisit:d(t.data.first_visit_start_from, t.data.first_time), lastVisit:t.data.last_time, visits:t.data.count||0, visitDuration:t.data.sum||0, type:t.activity_type
            })), n(e)
          }), (()=>n({
          })))
        }
        courseVisitsStat(t, e, i, r, s){
          "course"===e&&(e="");
          var a=this._query("courses/".concat(t, "/user-visits/metrics?time_restrict=").concat(r, "&activity_type=").concat(e));
          return o.when(a).then((t=>{
            var e, o, a;
            "month"===r&&(o=n(n().format("YYYY-MM-DD"))), "month"===r&&(e=o.clone().add(-11, "months"));
            var c=this._emptyDay(), u=this._emptyDay();
            return"hour"===r?a=t:"day"===r?a=t.slice(t.length-i, t.length+1):"month"===r&&(a=this._filterVisitsByDate(t, e, o)), a.forEach(((t, e)=>c[
              e
            ]
            =t.student_count||0)), a.forEach(((t, e)=>u[
              e
            ]
            =t.student_distinct||0)), s({
              visits:c, visitors:u
            })
          }), (()=>s({
          })))
        }
        usersCourseActivityTypeVisits(t, e, i, r, s, a){
          "course"===s&&(s="");
          var u=this._complexQuery("courses/".concat(t, "/user-visits/metrics?time_restrict=").concat(r, "&activity_type=").concat(s, "&group_by=user"), null, {
            user_ids:e
          });
          return o.when(u).then((t=>{
            var e, o;
            "month"===r&&(o=n(n().format("YYYY-MM-DD"))), "month"===r&&(e=o.clone().add(-11, "months"));
            var s, u={
            }, l=c(t);
            try{
              for(l.s();
              !(s=l.n()).done;
              ){
                var d=s.value, h=[
                ];
                if("hour"===r)h=d.data;
                else if("day"===r){
                  u[
                    d.user_id
                  ]
                  =this._emptyDays(i);
                  var v=d.data.length;
                  h=d.data.slice(v-i, v+1)
                }
                else"month"===r&&(h=this._filterVisitsByDate(d.data, e, o));
                u[
                  d.user_id
                ]
                =h.map(((t, e)=>t.student_count||0))
              }
            }
            catch(t){
              l.e(t)
            }
            finally{
              l.f()
            }
            return a(u)
          }), (()=>a([
          ])))
        }
        courseActivitiesVisits(t, e, i){
          if(!this.activitiesVisitCache[
            t
          ]){
            var n=e?"student_":"", r=this._query("courses/".concat(t, "/user-visits/metrics?group_by=activity,group,type"));
            return o.when(r).then((e=>{
              var r={
              };
              return e.forEach((function(t){
                var e="".concat(t.activity_type, "_").concat(t.activity_id);
                return t.group_id>0&&(e+="_".concat(t.group_id)), r[
                  e
                ]
                ={
                  visits:t.data[
                    "".concat(n, "count")
                  ]
                  ||0
                }
              })), this.activitiesVisitCache[
                t
              ]
              =r, i(r)
            }), (()=>i({
            })))
          }
          i(this.activitiesVisitCache[
            t
          ])
        }
        activityVisits(t, e, i, n){
          var s, c="".concat(i, "_").concat(e, "_").concat(t);
          if(!this.activityVisitCache[
            c
          ]){
            if(r.includes(e, "_")){
              var u=a(Array.from(e.split("_")), 2);
              e=u[
                0
              ], s=u[
                1
              ]
            }
            else s="null";
            var l=this._query("courses/".concat(t, "/activities/").concat(e, "/activity-types/").concat(i, "/user-visits/metrics?group=").concat(s, "&group_by=user"));
            return o.when(l).then((t=>{
              var e={
              };
              return t.forEach((t=>e[
                t.user_id
              ]
              ={
                lastVisit:t.data.last_time, visits:t.data.count||0
              })), this.activityVisitCache[
                c
              ]
              =e, n(e)
            }), (()=>n({
            })))
          }
          n(this.activityVisitCache[
            c
          ])
        }
        _onVisitsQuerySuccess(t, e, i, n){
          return function(r){
            var o=r[
              e
            ]
            ||0;
            return t[
              i
            ]
            =o, n(o)
          }
        }
        _onVisitsDaysQuerySuccess(t, e, i, n, r){
          return o=>{
            var s={
              visits:this._emptyDays(i), visitors:this._emptyDays(i)
            };
            return(o=o.slice(o.length-i, o.length+1)).forEach((function(t, e){
              return s.visits[
                e
              ]
              =t[
                "".concat(n, "count")
              ]
              ||0, s.visitors[
                e
              ]
              =t[
                "".concat(n, "distinct")
              ]
              ||0
            })), t[
              e
            ]
            =s, r(s)
          }
        }
        _filterVisitsByDate(t, e, i){
          var r, o=[
          ];
          if(this._isVisitsByMonth(t)){
            for(var s=e.get("year"), a=e.get("month")+1, c=i.get("year"), u=i.get("month")+1;
            s<=c;
            ){
              for(var l=s<c?12:u;
              a<=l;
              ){
                r=n().year(s).month(a-1).date(1).hour(0).minute(0).second(0).format("YYYY/MM/DD HH:mm:ss"), o.push(this._filterVisitByTime(t, r)), a+=1
              }
              a=1, s+=1
            }
            return o
          }
          for(var d=e;
          i.diff(d, "days")>=0;
          )r=d.format("YYYY/MM/DD HH:mm:ss"), o.push(this._filterVisitByTime(t, r)), d.add(1, "days");
          return o
        }
        _filterVisitByTime(t, e){
          var i, n=r.filter(t, (t=>t.time===e));
          1===n.length?i=n[
            0
          ]
          :i=r.find(n, (t=>void 0!==t.count))||{
            count:0, distinct:0
          };
          return i
        }
        _isVisitsByMonth(t){
          if(t.length<2)return!1;
          var e=n(t[
            0
          ].time, "YYYY/MM/DD HH:mm");
          return n(t[
            1
          ].time, "YYYY/MM/DD HH:mm").diff(e, "days")>27
        }
        _onVisitsTodayQuerySuccess(t, e, i, n){
          return r=>{
            var o={
              visits:this._emptyDay(), visitors:this._emptyDay()
            };
            return r.forEach((function(t, e){
              return o.visits[
                e
              ]
              =t[
                "".concat(i, "count")
              ]
              ||0, o.visitors[
                e
              ]
              =t[
                "".concat(i, "distinct")
              ]
              ||0
            })), t[
              e
            ]
            =o, n(o)
          }
        }
        _onVisitsYearQuerySuccess(t, e, i, r){
          return o=>{
            var s={
              visits:this._emptyYear(), visitors:this._emptyYear()
            }, a=n(n().format("YYYY-MM-DD")), c=a.clone().add(-11, "months");
            return(o=this._filterVisitsByDate(o, c, a)).forEach((function(t, e){
              return s.visits[
                e
              ]
              =t[
                "".concat(i, "count")
              ]
              ||0, s.visitors[
                e
              ]
              =t[
                "".concat(i, "distinct")
              ]
              ||0
            })), t[
              e
            ]
            =s, r(s)
          }
        }
        _emptyYear(){
          var t=(new Date).getMonth()+1;
          return r.map(s.range(1, t, !0), (()=>0))
        }
        _emptyDays(t){
          return r.map(s.range(1, t, !0), (()=>0))
        }
        _emptyDay(){
          var t=(new Date).getHours()+1;
          return r.map(s.range(1, t, !0), (()=>0))
        }
        courseVisits(t, e, i){
          if(!(t in this.courseVisitsCache)){
            var n=e?"student_":"", r=this._onVisitsQuerySuccess(this.courseVisitsCache, "".concat(n, "count"), t, i), s=this._query("courses/".concat(t, "/user-visits/metrics"));
            return o.when(s).then(r, (()=>i(0)))
          }
          i(this.courseVisitsCache[
            t
          ])
        }
        userCourseVisitsToday(t, e, i){
          var n="".concat(t, "_").concat(e);
          if(!(n in this.userCourseVisitsTodayCache)){
            var r=this._onVisitsTodayQuerySuccess(this.userCourseVisitsTodayCache, n, "", (t=>i(t.visits||[
            ]))), s=this._query("courses/".concat(t, "/users/").concat(e, "/user-visits/metrics?time_restrict=hour"));
            return o.when(s).then(r, (()=>i({
            })))
          }
          i(this.userCourseVisitsTodayCache[
            n
          ].visits)
        }
        courseVisitsToday(t, e, i){
          if(!(t in this.courseVisitsTodayCache)){
            var n=e?"student_":"", r=this._onVisitsTodayQuerySuccess(this.courseVisitsTodayCache, t, n, i), s=this._query("courses/".concat(t, "/user-visits/metrics?time_restrict=hour"));
            return o.when(s).then(r, (()=>i({
            })))
          }
          i(this.courseVisitsTodayCache[
            t
          ])
        }
        _onGetCourseActivitiesVisitsDays(t, e, i, n, r){
          return o=>{
            var s={
            };
            return o.forEach((t=>{
              var e="".concat(t.activity_type, "_").concat(t.activity_id);
              t.group_id>0&&(e+="_".concat(t.group_id)), s[
                e
              ]
              =this._emptyDays(i);
              var r=t.data.length;
              return t.data.slice(r-i, r+1).forEach(((t, i)=>s[
                e
              ]
              [
                i
              ]
              =t[
                "".concat(n, "count")
              ]
              ||0))
            })), t[
              e
            ]
            =s, r(s)
          }
        }
        courseVisitsCustomRange(t, e, i, n, s, a){
          var c=(new Date).getTimezoneOffset()/-60, u="courses/".concat(t, "/user-visits/visits?start=").concat(e, "&end=").concat(i, "&split=").concat(n, "&timezone_offset=").concat(c);
          s&&(u="".concat(u, "&activity_type=").concat(s));
          var l=this._query(u);
          return o.when(l).then((function(t){
            var e={
            };
            return r.map(t, ((t, i)=>e[
              i
            ]
            ={
              visits:t.visits, visitors:t.visitor_ids.length
            })), a(e)
          }), (()=>a({
          })))
        }
        courseActivitiesVisitsCustomRange(t, e, i, n, r, s){
          var a=(new Date).getTimezoneOffset()/-60, u="courses/".concat(t, "/activities/user-visits/visits?start=").concat(e, "&end=").concat(i, "&split=").concat(n, "&timezone_offset=").concat(a);
          r&&(u="".concat(u, "&activity_type=").concat(r));
          var l=this._query(u);
          return o.when(l).then((function(t){
            var e, i={
            }, n=c(t);
            try{
              for(n.s();
              !(e=n.n()).done;
              ){
                var r=e.value;
                i[
                  r.activity_id
                ]
                =r.visits
              }
            }
            catch(t){
              n.e(t)
            }
            finally{
              n.f()
            }
            return s(i)
          }), (()=>s({
          })))
        }
        courseUsersVisitsCustomRange(t, e, i, n, r, s){
          var a=(new Date).getTimezoneOffset()/-60, u="courses/".concat(t, "/users/user-visits/visits?start=").concat(e, "&end=").concat(i, "&split=").concat(n, "&timezone_offset=").concat(a);
          r&&(u="".concat(u, "&activity_type=").concat(r));
          var l=this._query(u);
          return o.when(l).then((function(t){
            var e, i={
            }, n=c(t);
            try{
              for(n.s();
              !(e=n.n()).done;
              ){
                var r=e.value;
                i[
                  r.user_id
                ]
                =r.visits
              }
            }
            catch(t){
              n.e(t)
            }
            finally{
              n.f()
            }
            return s(i)
          }), (()=>s({
          })))
        }
        userCourseActivitiesVisitsDays(t, e, i, n){
          var r="".concat(t, "_").concat(e, "_").concat(i);
          if(!(r in this.userCourseActivitiesVisitsDaysCache)){
            var s=this._onGetCourseActivitiesVisitsDays(this.userCourseActivitiesVisitsDaysCache, r, i, "", n), a=this._query("courses/".concat(t, "/users/").concat(e, "/user-visits/metrics?group_by=activity,group,type&time_restrict=day"));
            return o.when(a).then(s, (()=>n([
            ])))
          }
          n(this.userCourseActivitiesVisitsDaysCache[
            r
          ])
        }
        courseActivitiesVisitsDays(t, e, i, n){
          var r="".concat(t, "_").concat(e);
          if(!(r in this.courseActivitiesVisitsDaysCache)){
            var s=i?"student_":"", a=this._onGetCourseActivitiesVisitsDays(this.courseActivitiesVisitsDaysCache, r, e, s, n), c=this._query("courses/".concat(t, "/user-visits/metrics?time_restrict=day&group_by=activity,group,type"));
            return o.when(c).then(a, (()=>n([
            ])))
          }
          n(this.courseActivitiesVisitsDaysCache[
            r
          ])
        }
        _onGetCourseActivitiesVisitsTodayOrYear(t, e, i, n){
          return function(r){
            var o={
            };
            return r.forEach((function(t){
              var e="".concat(t.activity_type, "_").concat(t.activity_id);
              return t.group_id>0&&(e+="_".concat(t.group_id)), o[
                e
              ]
              =t.data.map((t=>t[
                "".concat(i, "count")
              ]
              ||0))
            })), t[
              e
            ]
            =o, n(o)
          }
        }
        userCourseActivitiesVisitsToday(t, e, i){
          var n="".concat(t, "_").concat(e);
          if(!(n in this.userCourseActivitiesVisitsTodayCache)){
            var r=this._onGetCourseActivitiesVisitsTodayOrYear(this.userCourseActivitiesVisitsTodayCache, n, "", i), s=this._query("courses/".concat(t, "/users/").concat(e, "/user-visits/metrics?time_restrict=hour&group_by=activity,group,type"));
            return o.when(s).then(r, (()=>i([
            ])))
          }
          i(this.userCourseActivitiesVisitsTodayCache[
            n
          ])
        }
        courseActivitiesVisitsToday(t, e, i){
          if(!(t in this.courseActivitiesVisitsTodayCache)){
            var n=e?"student_":"", r=this._onGetCourseActivitiesVisitsTodayOrYear(this.courseActivitiesVisitsTodayCache, t, n, i), s=this._query("courses/".concat(t, "/user-visits/metrics?time_restrict=hour&group_by=activity,group,type"));
            return o.when(s).then(r, (()=>i([
            ])))
          }
          i(this.courseActivitiesVisitsTodayCache[
            t
          ])
        }
        userCourseActivitiesVisitsYear(t, e, i){
          var n="".concat(t, "_").concat(e);
          if(!(n in this.userCourseActivitiesVisitsYearCache)){
            var r=this._onGetCourseActivitiesVisitsTodayOrYear(this.userCourseActivitiesVisitsYearCache, n, "", i), s=this._query("courses/".concat(t, "/users/").concat(e, "/user-visits/metrics?time_restrict=month&group_by=activity,group,type"));
            return o.when(s).then(r, (()=>i([
            ])))
          }
          i(this.userCourseActivitiesVisitsYearCache[
            n
          ])
        }
        courseActivitiesVisitsYear(t, e, i){
          if(!(t in this.courseActivitiesVisitsYearCache)){
            var n=e?"student_":"", r=this._onGetCourseActivitiesVisitsTodayOrYear(this.courseActivitiesVisitsYearCache, t, n, i), s=this._query("courses/".concat(t, "/user-visits/metrics?time_restrict=month&group_by=activity,group,type"));
            return o.when(s).then(r, (()=>i([
            ])))
          }
          i(this.courseActivitiesVisitsYearCache[
            t
          ])
        }
        userCourseVisitsDays(t, e, i, n){
          var r="".concat(t, "_").concat(e, "_").concat(i);
          if(!(r in this.userCourseVisitsDaysCache)){
            var s=this._onVisitsDaysQuerySuccess(this.userCourseVisitsDaysCache, r, i, "", (t=>n(t.visits||[
            ]))), a=this._query("courses/".concat(t, "/users/").concat(e, "/user-visits/metrics?time_restrict=day"));
            return o.when(a).then(s, (()=>n({
            })))
          }
          n(this.userCourseVisitsDaysCache[
            r
          ].visits)
        }
        courseVisitsDays(t, e, i, n){
          var r="".concat(t, "_").concat(e);
          if(!(r in this.courseVisitsDaysCache)){
            var s=i?"student_":"", a=this._onVisitsDaysQuerySuccess(this.courseVisitsDaysCache, r, e, s, n), c=this._query("courses/".concat(t, "/user-visits/metrics?time_restrict=day"));
            return o.when(c).then(a, (()=>n({
            })))
          }
          n(this.courseVisitsDaysCache[
            r
          ])
        }
        userCourseVisitsYear(t, e, i){
          var n="".concat(t, "_").concat(e);
          if(!this.userCourseVisitsYearCache[
            n
          ]){
            var r=this._onVisitsYearQuerySuccess(this.userCourseVisitsYearCache, n, "student_", (t=>i(t.visits||[
            ]))), s=this._query("courses/".concat(t, "/users/").concat(e, "/user-visits/metrics?time_restrict=month"));
            return o.when(s).then(r, (()=>i({
            })))
          }
          i(this.userCourseVisitsYearCache[
            n
          ].visits)
        }
        courseVisitsYear(t, e, i){
          if(!(t in this.courseVisitsYearCache)){
            var n=e?"student_":"", r=this._onVisitsYearQuerySuccess(this.courseVisitsYearCache, t, n, i), s=this._query("courses/".concat(t, "/user-visits/metrics?time_restrict=month"));
            return o.when(s).then(r, (()=>i({
            })))
          }
          i(this.courseVisitsYearCache[
            t
          ])
        }
        departmentVisits(t){
          var e=arguments.length>1&&void 0!==arguments[
            1
          ]
          ?arguments[
            1
          ]
          :[
          ], i=arguments.length>2?arguments[
            2
          ]
          :void 0;
          if(!(t in this.departmentVisitsCache)){
            var n=this._onVisitsQuerySuccess(this.departmentVisitsCache, "count", t, i), r=this._complexQuery("deps/".concat(t, "/user-visits/metrics"), null, {
              dep_ids:e
            });
            return o.when(r).then(n, (()=>i(0)))
          }
          i(this.departmentVisitsCache[
            t
          ])
        }
        departmentVisitsDays(t){
          var e=arguments.length>1&&void 0!==arguments[
            1
          ]
          ?arguments[
            1
          ]
          :[
          ], i=arguments.length>2?arguments[
            2
          ]
          :void 0, n=arguments.length>3?arguments[
            3
          ]
          :void 0, r="".concat(t, "_").concat(i);
          if(!(r in this.departmentVisitsDaysCache)){
            var s=this._onVisitsDaysQuerySuccess(this.departmentVisitsDaysCache, r, i, "", n), a=this._complexQuery("deps/".concat(t, "/user-visits/metrics?time_restrict=day"), null, {
              dep_ids:e
            });
            return o.when(a).then(s, (()=>n({
            })))
          }
          n(this.departmentVisitsDaysCache[
            r
          ])
        }
        departmentVisitsToday(t){
          var e=arguments.length>1&&void 0!==arguments[
            1
          ]
          ?arguments[
            1
          ]
          :[
          ], i=arguments.length>2?arguments[
            2
          ]
          :void 0;
          if(!(t in this.departmentVisitsTodayCache)){
            var n=this._onVisitsTodayQuerySuccess(this.departmentVisitsTodayCache, t, "", i), r=this._complexQuery("deps/".concat(t, "/user-visits/metrics?time_restrict=hour"), null, {
              dep_ids:e
            });
            return o.when(r).then(n, (()=>i({
            })))
          }
          i(this.departmentVisitsTodayCache[
            t
          ])
        }
        departmentVisitsYear(t){
          var e=arguments.length>1&&void 0!==arguments[
            1
          ]
          ?arguments[
            1
          ]
          :[
          ], i=arguments.length>2?arguments[
            2
          ]
          :void 0;
          if(!(t in this.departmentVisitsYearCache)){
            var n=this._onVisitsYearQuerySuccess(this.departmentVisitsYearCache, t, "", i), r=this._complexQuery("deps/".concat(t, "/user-visits/metrics?time_restrict=month"), null, {
              dep_ids:e
            });
            return o.when(r).then(n, (()=>i({
            })))
          }
          i(this.departmentVisitsYearCache[
            t
          ])
        }
        orgVisits(t, e){
          if(!(t in this.orgVisitsCache)){
            var i=this._onVisitsQuerySuccess(this.orgVisitsCache, "count", t, e), n=this._query("orgs/".concat(t, "/user-visits/metrics"), !0);
            return o.when(n).then(i, (()=>e(0)))
          }
          e(this.orgVisitsCache[
            t
          ])
        }
        orgVisitsDays(t, e, i){
          var r="".concat(t, "_").concat(e);
          if(!(r in this.orgVisitsDaysCache)){
            var s=this._query("orgs/".concat(t, "/user-visits/metrics?time_restrict=day"), !0);
            return o.when(s).then((t=>{
              var o={
                visits:this._emptyDays(e), visitors:this._emptyDays(e)
              }, s=n(n().format("YYYY-MM-DD")), a=s.clone().add(1-e, "days");
              return(t=this._filterVisitsByDate(t, a, s)).forEach((function(t, e){
                var i=t.student_count?t.student_count:0, n=t.teacher_count?t.teacher_count:0;
                o.visits[
                  e
                ]
                =i+n;
                var r=t.student_distinct?t.student_distinct:0, s=t.teacher_distinct?t.teacher_distinct:0;
                o.visitors[
                  e
                ]
                =r+s
              })), this.orgVisitsDaysCache[
                r
              ]
              =o, i(o)
            }), (()=>i({
            })))
          }
          i(this.orgVisitsDaysCache[
            r
          ])
        }
        orgVisitsByBrowserDays(t, e, i){
          var n="".concat(t, "_").concat(e);
          if(!(n in this.orgVisitsByBrowserCache)){
            var r=this._query("orgs/".concat(t, "/user-visits/browsers?days=").concat(e), !0);
            return o.when(r).then((t=>(this.orgVisitsDaysCache[
              n
            ]
            =t, i(t))), (()=>i(0)))
          }
          i(this.orgVisitsByBrowserCache[
            n
          ])
        }
        orgVisitsToday(t, e){
          if(!(t in this.orgVisitsTodayCache)){
            var i=this._onVisitsTodayQuerySuccess(this.orgVisitsTodayCache, t, "", e), n=this._query("orgs/".concat(t, "/user-visits/metrics?time_restrict=hour"), !0);
            return o.when(n).then(i, (()=>e({
            })))
          }
          e(this.orgVisitsTodayCache[
            t
          ])
        }
        orgVisitsYear(t, e){
          if(!(t in this.orgVisitsYearCache)){
            var i=this._onVisitsYearQuerySuccess(this.orgVisitsYearCache, t, "", e), n=this._query("orgs/".concat(t, "/user-visits/metrics?time_restrict=month"), !0);
            return o.when(n).then(i, (()=>e({
            })))
          }
          e(this.orgVisitsYearCache[
            t
          ])
        }
        orgBrowserVisitsByDateRange(t, e, i, n){
          var r="".concat(t, "_").concat(e, "_").concat(i);
          if(!(r in this.orgVisitsByDateRangeBrowserCache)){
            var s=this._query("orgs/".concat(t, "/user-visits/date-range/browsers?start_date=").concat(e, "&end_date=").concat(i));
            return o.when(s).then((t=>(this.orgVisitsDaysCache[
              r
            ]
            =t, n(t))), (()=>n(0)))
          }
          n(this.orgVisitsByDateRangeBrowserCache[
            r
          ])
        }
        orgVisitsByDateRange(t, e, i, r){
          var s="".concat(t, "_").concat(e, "_").concat(i);
          if(!(s in this.orgVisitsDateRangeCache)){
            var a=this._query("orgs/".concat(t, "/user-visits/metrics?time_restrict=date-range&start_date=").concat(e, "&end_date=").concat(i));
            return o.when(a).then((t=>{
              var o={
                visits:[
                ], visitors:[
                ]
              };
              return(t=this._filterVisitsByDate(t, n(e), n(i))).forEach((function(t, e){
                return o.visits[
                  e
                ]
                =t.count||0, o.visitors[
                  e
                ]
                =t.distinct||0
              })), this.orgVisitsDateRangeCache[
                s
              ]
              =o, r(o)
            }), (()=>r({
            })))
          }
          r(this.orgVisitsDateRangeCache[
            s
          ])
        }
        _onBulletinVisitsQuerySuccess(t, e, i, n, r){
          return o=>{
            var s=n, a=o.length;
            return o.slice(a-i, a+1).forEach(((t, e)=>s[
              e
            ]
            =t.view_count)), t[
              e
            ]
            =s, r(s)
          }
        }
        bulletinVisitsDays(t, e, i){
          var n="".concat(t, "_").concat(e);
          if(!(n in this.bulletinVisitsDaysCache)){
            var r=this._emptyDays(e), s=this._onBulletinVisitsQuerySuccess(this.bulletinVisitsDaysCache, n, e, r, i), a=this._query("courses/".concat(t, "/bulletins/histogram?time_restrict=day"));
            return o.when(a).then(s, (()=>i([
            ])))
          }
          i(this.bulletinVisitsDaysCache[
            n
          ])
        }
        bulletinVisitsToday(t, e){
          if(!(t in this.bulletinVisitsTodayCache)){
            var i=this._emptyDay(), n=this._onBulletinVisitsQuerySuccess(this.bulletinVisitsTodayCache, t, 24, i, e), r=this._query("courses/".concat(t, "/bulletins/histogram?time_restrict=hour"));
            return o.when(r).then(n, (()=>e([
            ])))
          }
          e(this.bulletinVisitsTodayCache[
            t
          ])
        }
        bulletinVisitsYear(t, e){
          if(!(t in this.bulletinVisitsYearCache)){
            var i=this._emptyYear(), n=this._onBulletinVisitsQuerySuccess(this.bulletinVisitsYearCache, t, 12, i, e), r=this._query("courses/".concat(t, "/bulletins/histogram?time_restrict=month"));
            return o.when(r).then(n, (()=>e([
            ])))
          }
          e(this.bulletinVisitsYearCache[
            t
          ])
        }
        bulletinVisitsCustomRange(t, e, i, n, r){
          var s="".concat(t, "_").concat(e, "_").concat(i);
          if(!(s in this.bulletinVisitsDateRangeCache)){
            var a=(new Date).getTimezoneOffset()/-60, c=this._query("courses/".concat(t, "/bulletins/custom-time-range?start=").concat(e, "&end=").concat(i, "&split=").concat(n, "&timezone_offset=").concat(a));
            return o.when(c).then((t=>(this.bulletinVisitsDateRangeCache[
              s
            ]
            =t, r(t))), (()=>r([
            ])))
          }
          r(this.bulletinVisitsDateRangeCache[
            s
          ])
        }
        bulletinGroupByVisits(t, e, i){
          var n="".concat(t, "_").concat(e);
          if(!(n in this.bulletinVisitsCache)){
            var s=this._query("courses/".concat(t, "/bulletins/visit?group_by=").concat(e));
            return o.when(s).then((t=>{
              var e={
              };
              return r.map(t, (t=>e[
                t.bulletin_id
              ]
              ={
                view_count:t.data.view_count, user_distinct:t.data.user_distinct
              })), this.bulletinVisitsCache[
                n
              ]
              =e, i(e)
            }), (()=>i([
            ])))
          }
          i(this.bulletinVisitsCache[
            n
          ])
        }
        bulletinVisitsStat(t, e, i){
          var n="".concat(t, "_").concat(e);
          if(!(n in this.bulletinVisitsStatCache)){
            var r=this._query("courses/".concat(t, "/bulletins/").concat(e, "/users/visits"));
            return o.when(r).then((t=>(this.bulletinVisitsStatCache[
              n
            ]
            =t, i(t))), (()=>i([
            ])))
          }
          i(this.bulletinVisitsStatCache[
            n
          ])
        }
        _query(t, e){
          var i=arguments.length>2&&void 0!==arguments[
            2
          ]
          ?arguments[
            2
          ]
          :{
          }, n="".concat(this.url, "/api/").concat(t);
          return e&&this.enableMgsQueryCache&&(n="/anonymous-api/metric-cache/".concat(t)), n=n.includes("?")?"".concat(n, "&jwt=").concat(statisticsSettings.mgsJwt):"".concat(n, "?jwt=").concat(statisticsSettings.mgsJwt), o.ajax({
            type:"GET", url:n, dataType:"json", data:i
          })
        }
        _complexQuery(t, e){
          var i=arguments.length>2&&void 0!==arguments[
            2
          ]
          ?arguments[
            2
          ]
          :{
          }, n="".concat(this.url, "/api/").concat(t);
          return e&&this.enableMgsQueryCache&&(n="/anonymous-api/metric-cache/".concat(t)), n=n.includes("?")?"".concat(n, "&jwt=").concat(statisticsSettings.mgsJwt):"".concat(n, "?jwt=").concat(statisticsSettings.mgsJwt), o.ajax({
            type:"POST", url:n, contentType:"application/json", data:JSON.stringify(i)
          })
        }
      }
      window.statisticsSettings&&(window.stv=new h(window.statisticsSettings))
    }, 466375:(t, e, i)=>{
      i.d(e, {
        default:()=>o
      });
      var n=i(784559);
      const r=i.n(n)();
      const o=(0, i(514486).A)(r, (function(){
        var t=this, e=t.$createElement, i=t._self._c||e;
        return t.isShow()?i("div", {
          staticClass:"header-warning"
        }, [
          i("span", {
            staticClass:"content"
          }, [
            t._v("\n    "+t._s(t.announcement.content)+"\n  ")
          ]), t._v(" "), i("i", {
            staticClass:"font font-close right", on:{
              click:t.close
            }
          })
        ]):t._e()
      }), [
      ], !1, null, "507ad83a", null).exports
    }, 494082:(t, e, i)=>{
      i.d(e, {
        P:()=>s
      });
      i(540590), i(418665), i(269193), i(14602);
      var n=i(962893), r=function(t, e, i, n){
        return new(i||(i=Promise))((function(r, o){
          function s(t){
            try{
              c(n.next(t))
            }
            catch(t){
              o(t)
            }
          }
          function a(t){
            try{
              c(n.throw(t))
            }
            catch(t){
              o(t)
            }
          }
          function c(t){
            var e;
            t.done?r(t.value):(e=t.value, e instanceof i?e:new i((function(t){
              t(e)
            }))).then(s, a)
          }
          c((n=n.apply(t, e||[
          ])).next())
        }))
      }, o=function(t, e){
        var i, n, r, o, s={
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
        return o={
          next:a(0), throw:a(1), return:a(2)
        }, "function"==typeof Symbol&&(o[
          Symbol.iterator
        ]
        =function(){
          return this
        }), o;
        function a(a){
          return function(c){
            return function(a){
              if(i)throw new TypeError("Generator is already executing.");
              for(;
              o&&(o=0, a[
                0
              ]
              &&(s=0)), s;
              )try{
                if(i=1, n&&(r=2&a[
                  0
                ]
                ?n.return:a[
                  0
                ]
                ?n.throw||((r=n.return)&&r.call(n), 0):n.next)&&!(r=r.call(n, a[
                  1
                ])).done)return r;
                switch(n=0, r&&(a=[
                  2&a[
                    0
                  ], r.value
                ]), a[
                  0
                ]){
                  case 0:case 1:r=a;
                  break;
                  case 4:return s.label++, {
                    value:a[
                      1
                    ], done:!1
                  };
                  case 5:s.label++, n=a[
                    1
                  ], a=[
                    0
                  ];
                  continue;
                  case 7:a=s.ops.pop(), s.trys.pop();
                  continue;
                  default:if(!(r=s.trys, (r=r.length>0&&r[
                    r.length-1
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
                  &&(!r||a[
                    1
                  ]
                  >r[
                    0
                  ]
                  &&a[
                    1
                  ]
                  <r[
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
                  &&s.label<r[
                    1
                  ]){
                    s.label=r[
                      1
                    ], r=a;
                    break
                  }
                  if(r&&s.label<r[
                    2
                  ]){
                    s.label=r[
                      2
                    ], s.ops.push(a);
                    break
                  }
                  r[
                    2
                  ]
                  &&s.ops.pop(), s.trys.pop();
                  continue
                }
                a=e.call(t, s)
              }
              catch(t){
                a=[
                  6, t
                ], n=0
              }
              finally{
                i=r=0
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
      }, s=function(t, e, i){
        return r(void 0, void 0, void 0, (function(){
          var r;
          return o(this, (function(o){
            return r=function(){
              return e().then((function(t){
                return t.default
              }))
            }, n.default.customElement(t, r, i), [
              2
            ]
          }))
        }))
      }
    }, 552979:(t, e, i)=>{
      i.r(e), i.d(e, {
        default:()=>ht
      });
      var n, r, o, s, a, c=i(962893), u=i(7950), l=i.n(u), d=i(578692), h=i.n(d), v=i(637140), p=i.n(v), f=i(641091), y=i.n(f), m=i(241849), g=i.n(m), _=i(150528), b=i.n(_), w=i(774952), C=i.n(w), V=i(731904), S=i(951626), T=i(356964), k=i(482182), x=i(505575), D=i(89858), A=i(79469), Y=i(361871), P=i(304599), E=i(938770), L=i(939175), R=i(138869), M=i(909246), z=i(939721), N=i(853111), O=i(134735), I=i(420332), W=i(317429), X=i(619201), j=i(182613), B=i(49813), H=i(156594), q=i(239190), U=i(634096), $=i(562245), K=i(832726), J=i(386067), G=i(559760), Q=i(683139), F=i(751586), Z=i(497648), tt=i(415514), et=i(160746), it=i(384027).locale;
      c.default.use(tt.VueI18nExt), function(t){
        t[
          t.custom=0
        ]
        ="custom", t[
          t.standard=1
        ]
        ="standard", t[
          t.public=2
        ]
        ="public", t[
          t.training=3
        ]
        ="training"
      }
      (a||(a={
      }));
      var nt, rt, ot=((n={
      })[
        a.custom
      ]
      =null, n[
        a.standard
      ]
      =N, n[
        a.public
      ]
      =O, n[
        a.training
      ]
      =I, n), st={
        "en-US":T, "zh-CN":k, "zh-MO":x, "zh-TW":D, "th-TH":A, "id-ID":Y, "ms-MY":P, "vi-VN":E, "ta-IN":L, "pt-PT":R, "ko-KR":M
      };
      rt={
        "en-US":l(), "zh-CN":h(), "zh-MO":V._.mergeWith(p(), et.A), "zh-TW":V._.mergeWith(p(), et.A), "th-TH":y(), "id-ID":g(), "ms-MY":l(), "vi-VN":b(), "ta-IN":l(), "pt-PT":l(), "ko-KR":C()
      }, st=V._.mergeWith(st, rt);
      var at=null===(r=document.querySelector("html"))||void 0===r?void 0:r.getAttribute("lang"), ct=(0, S.X)(at||"zh-CN");
      it(st[
        ct
      ]);
      var ut=null===(o=document.querySelector("html"))||void 0===o?void 0:o.getAttribute("delivery-org");
      var lt=function(t){
        switch(t){
          case"False":case"0":case"custom":return a.custom;
          case"True":case"1":case"standard":return a.standard;
          case"2":case"public":return a.public;
          case"3":case"training":return a.training;
          default:return a.custom
        }
      }
      (null===(s=window.orgSettings)||void 0===s?void 0:s.enterpriseMode), dt=ot[
        lt
      ];
      switch(ut){
        case"BJGYJS":nt={
          "en-US":W.vX, "zh-CN":W.pp, "zh-TW":W.NJ, "zh-MO":W.NJ
        };
        break;
        case"PU":nt={
          "en-US":X.vX, "zh-CN":X.pp, "zh-TW":X.NJ, "zh-MO":X.NJ
        };
        break;
        case"FJU":nt={
          "en-US":j.vX, "zh-CN":j.pp, "zh-TW":j.NJ, "zh-MO":j.NJ
        };
        break;
        case"NFA":nt={
          "en-US":{
          }, "zh-CN":{
          }, "zh-TW":B.N, "zh-MO":{
          }
        };
        break;
        case"TP-DOE":nt={
          "en-US":H.vX, "zh-CN":H.pp, "zh-TW":H.NJ, "zh-MO":H.NJ
        };
        break;
        case"APPLE":nt={
          "en-US":q.vX, "zh-CN":q.pp, "zh-TW":q.NJ, "zh-MO":q.NJ, "vi-VN":q.pz, "ta-IN":q.ed
        };
        break;
        case"HDZYXY":nt={
          "en-US":U.vX, "zh-CN":U.pp, "zh-TW":U.NJ, "zh-MO":U.NJ
        };
        break;
        case"XZZJ-ZHXX":nt={
          "en-US":$.vX, "zh-CN":$.pp, "zh-TW":$.NJ, "zh-MO":$.NJ
        };
        break;
        case"XJTU-CJS":nt={
          "en-US":K.vX, "zh-CN":K.pp, "zh-TW":K.NJ, "zh-MO":K.NJ
        };
        break;
        case"KJTX":nt={
          "en-US":{
          }, "zh-CN":J.p, "zh-TW":{
          }, "zh-MO":{
          }
        };
        break;
        case"HJZH":nt={
          "en-US":{
          }, "zh-CN":F.p, "zh-TW":{
          }, "zh-MO":{
          }
        };
        break;
        case"CGUST":nt={
          "en-US":{
          }, "zh-CN":G.pp, "zh-TW":G.NJ, "zh-MO":G.yX
        };
        break;
        case"shanghaitech":nt={
          "en-US":Q.vX, "zh-CN":Q.pp, "zh-TW":Q.NJ, "zh-MO":Q.NJ
        };
        break;
        case"OUYA":nt={
          "en-US":Z.vX, "zh-CN":Z.pp, "zh-TW":Z.NJ, "zh-MO":Z.NJ
        };
        break;
        default:nt=lt!==a.custom&&dt?{
          "en-US":dt[
            "en-US"
          ]
          ||{
          }, "zh-CN":dt[
            "zh-CN"
          ]
          ||{
          }, "zh-TW":dt[
            "zh-TW"
          ]
          ||{
          }, "zh-MO":dt[
            "zh-TW"
          ]
          ||{
          }
        }
        :{
          "en-US":z.vX, "zh-CN":z.pp, "zh-TW":z.NJ, "zh-MO":z.NJ
        }
      }
      const ht=new tt.VueI18nExt({
        locale:ct, messages:st, customizeMessages:nt, silentTranslationWarn:!0
      })
    }, 554494:(t, e, i)=>{
      i.d(e, {
        A:()=>s
      });
      i(269193), i(868329);
      var n=i(302543), r=i(248124);
      i(644435);
      const o={
        components:{
          activity_expiring:()=>i.e(56097).then(i.bind(i, 575649)), activity_expiring_today:()=>i.e(83383).then(i.bind(i, 520759)), activity_expiring_week:()=>i.e(95128).then(i.bind(i, 237245)), activity_opened:()=>i.e(75978).then(i.bind(i, 32810)), activity_opening:()=>i.e(84711).then(i.bind(i, 790407)), bulletin_created:()=>i.e(61977).then(i.bind(i, 625977)), bulletin_updated:()=>i.e(83440).then(i.bind(i, 576272)), calendar_event_alert:()=>i.e(96553).then(i.bind(i, 251145)), calendar_event_publish:()=>i.e(98766).then(i.bind(i, 769262)), calendar_timetable_delete:()=>i.e(64611).then(i.bind(i, 733059)), calendar_timetable_update:()=>i.e(38189).then(i.bind(i, 426797)), campus_subject_lib_audit_agree:()=>i.e(95526).then(i.bind(i, 488262)), campus_subject_lib_audit_reject:()=>i.e(51223).then(i.bind(i, 431863)), campus_subject_lib_off_the_shelf:()=>i.e(44296).then(i.bind(i, 368872)), course_completeness_alert:()=>i.e(27718).then(i.bind(i, 66950)), course_obe_unassociated_alert:()=>i.e(2298).then(i.bind(i, 617882)), course_score_alert:()=>i.e(27718).then(i.bind(i, 438618)), course_deleted:()=>i.e(14068).then(i.bind(i, 770836)), course_estimate:()=>i.e(30027).then(i.bind(i, 462315)), course_estimate_reply:()=>i.e(22522).then(i.bind(i, 992570)), course_homework_make_up:()=>i.e(20152).then(i.bind(i, 424824)), course_homework_remind:()=>i.e(99113).then(i.bind(i, 820009)), course_homework_resubmit:()=>i.e(36813).then(i.bind(i, 565357)), course_homework_review_remind:()=>i.e(75086).then(i.bind(i, 703918)), course_opening:()=>i.e(69931).then(i.bind(i, 203083)), course_outline_closing_edit:()=>i.e(42748).then(i.bind(i, 88252)), course_outline_edit:()=>i.e(52580).then(i.bind(i, 834788)), course_public_audit_response:()=>i.e(80232).then(i.bind(i, 340616)), course_started:()=>i.e(94064).then(i.bind(i, 105776)), discussion_create:()=>i.e(72784).then(i.bind(i, 109072)), discussion_score_updated:()=>i.e(63534).then(i.bind(i, 749070)), exam_ended:()=>i.e(38941).then(i.bind(i, 666109)), exam_expiring:()=>i.e(35655).then(i.bind(i, 482055)), exam_expiring_today:()=>i.e(28053).then(i.bind(i, 799701)), exam_expiring_week:()=>i.e(67206).then(i.bind(i, 948806)), exam_make_up:()=>i.e(17983).then(i.bind(i, 867967)), exam_opened:()=>i.e(19332).then(i.bind(i, 697092)), exam_score_updated:()=>i.e(90775).then(i.bind(i, 425239)), exam_submission:()=>i.e(20807).then(i.bind(i, 579943)), exam_submission_info:()=>i.e(59414).then(i.bind(i, 168918)), exam_submit_started:()=>i.e(92085).then(i.bind(i, 42069)), exam_will_start:()=>i.e(10310).then(i.bind(i, 268966)), group_recommend_homework_removed:()=>i.e(69895).then(i.bind(i, 949415)), has_recommend_homework:()=>i.e(48597).then(i.bind(i, 99189)), has_recommend_homework_group:()=>i.e(10409).then(i.bind(i, 258025)), homework_ended:()=>i.e(82438).then(i.bind(i, 478086)), homework_expiring:()=>i.e(6258).then(i.bind(i, 839922)), homework_expiring_today:()=>i.e(27124).then(i.bind(i, 62452)), homework_expiring_week:()=>i.e(25489).then(i.bind(i, 473635)), homework_is_recommended:()=>i.e(28230).then(i.bind(i, 468454)), homework_is_recommended_group:()=>i.e(6066).then(i.bind(i, 338194)), homework_opened_for_submission:()=>i.e(31348).then(i.bind(i, 699892)), homework_opening_for_submission:()=>i.e(96717).then(i.bind(i, 126797)), homework_review_started:()=>i.e(54032).then(i.bind(i, 586096)), homework_score_updated:()=>i.e(93884).then(i.bind(i, 595740)), homework_submitted:()=>i.e(51713).then(i.bind(i, 11265)), homework_redo:()=>i.e(51713).then(i.bind(i, 120418)), instructor_submit_course_public_audit:()=>i.e(43107).then(i.bind(i, 779203)), inter_score_ended:()=>i.e(17767).then(i.bind(i, 582727)), inter_score_expiring:()=>i.e(96190).then(i.bind(i, 897789)), inter_score_homework_submission:()=>i.e(96190).then(i.bind(i, 311102)), learning_activity_alert:()=>i.e(88478).then(i.bind(i, 924350)), learning_progress_alert:()=>i.e(97992).then(i.bind(i, 983336)), learning_warning:()=>i.e(88518).then(i.bind(i, 992806)), new_resource_share_to_follower:()=>i.e(95825).then(i.bind(i, 484785)), org_plan_request:()=>i.e(87219).then(i.bind(i, 996915)), org_plan_response:()=>i.e(78797).then(i.bind(i, 584589)), plan_expired:()=>i.e(13642).then(i.bind(i, 230186)), post_create:()=>i.e(28794).then(i.bind(i, 368570)), questionnaire_remind:()=>i.e(92556).then(i.bind(i, 471084)), recent_plan_expire:()=>i.e(42088).then(i.bind(i, 92200)), recent_storage_run_out:()=>i.e(44617).then(i.bind(i, 641385)), recent_transfer_run_out:()=>i.e(58305).then(i.bind(i, 401697)), recommend_homework_removed:()=>i.e(81931).then(i.bind(i, 210763)), reply_created:()=>i.e(63694).then(i.bind(i, 447470)), resource_group_deleted:()=>i.e(35455).then(i.bind(i, 977791)), rollcall_alert:()=>i.e(87863).then(i.bind(i, 157431)), score_publish_closing:()=>i.e(90525).then(i.bind(i, 446013)), score_publish_reject:()=>i.e(19981).then(i.bind(i, 497133)), score_setting_changed:()=>i.e(89781).then(i.bind(i, 849845)), share_resource_to_user:()=>i.e(97675).then(i.bind(i, 810795)), shared_course_audit_agree:()=>i.e(34059).then(i.bind(i, 144203)), shared_course_audit_reject:()=>i.e(10844).then(i.bind(i, 501212)), shared_course_to_other_orgs_audit_agree:()=>i.e(53744).then(i.bind(i, 141296)), shared_resource_audit_agree:()=>i.e(10380).then(i.bind(i, 603372)), shared_resource_audit_reject:()=>i.e(10309).then(i.bind(i, 305189)), shared_resource_off_the_shelf:()=>i.e(93198).then(i.bind(i, 20046)), shared_resource_reported:()=>i.e(76657).then(i.bind(i, 157745)), shared_resource_to_other_orgs_audit_agree:()=>i.e(73391).then(i.bind(i, 937871)), shared_resource_to_other_orgs_audit_reject:()=>i.e(50600).then(i.bind(i, 757800)), shared_resource_to_other_orgs_off_the_shelf:()=>i.e(50600).then(i.bind(i, 375809)), shared_resource_to_other_orgs_reported:()=>i.e(62964).then(i.bind(i, 299540)), storage_run_out:()=>i.e(88591).then(i.bind(i, 266799)), submission_submitted:()=>i.e(14279).then(i.bind(i, 580007)), teaching_unit_invite:()=>i.e(37135).then(i.bind(i, 14543)), topic_create:()=>i.e(52497).then(i.bind(i, 487857)), topic_like:()=>i.e(11708).then(i.bind(i, 99836)), topic_replies:()=>i.e(94119).then(i.bind(i, 375431)), topic_secondary_replies:()=>i.e(71852).then(i.bind(i, 172140)), tracked_user_is_tracked:()=>i.e(23719).then(i.bind(i, 779751)), transfer_run_out:()=>i.e(52655).then(i.bind(i, 149327)), user_exit_course:()=>i.e(87925).then(i.bind(i, 374805)), user_join_course:()=>i.e(86325).then(i.bind(i, 364309)), user_join_resource_group:()=>i.e(18278).then(i.bind(i, 79334)), user_leave_resource_group:()=>i.e(651).then(i.bind(i, 434347)), warning_opened:()=>i.e(25177).then(i.bind(i, 465689)), video_clipped:()=>i.e(36162).then(i.bind(i, 1527)), video_generated:()=>i.e(36162).then(i.bind(i, 1527)), research_discussion_created:()=>i.e(5380).then(i.bind(i, 171659)), questionnaire_submitted:()=>i.e(79494).then(i.bind(i, 8262)), moodle_course_imported:()=>i.e(5380).then(i.bind(i, 591766)), resource_audit_rejected:()=>i.e(64918).then(i.bind(i, 998889)), book_live_will_begin:()=>i.e(93084).then(i.bind(i, 645608)), continuous_absence_alert:()=>i.e(62691).then(i.bind(i, 360227)), continuous_absence_teacher_alert:()=>i.e(62691).then(i.bind(i, 802760)), compulsory_not_taken_alert:()=>i.e(11903).then(i.bind(i, 906783)), course_outline_updated:()=>i.e(52580).then(i.bind(i, 79857)), course_attendance_rate_alert:()=>i.e(52580).then(i.bind(i, 443765)), resource_comment_at:()=>i.e(52580).then(i.bind(i, 593945)), vtrs_member_deleted:()=>i.e(1893).then(i.bind(i, 901045)), vtrs_owner_transferred:()=>i.e(57717).then(i.bind(i, 616340)), notify_evaluation_ended:()=>i.e(25690).then(i.bind(i, 605754)), notify_evaluation_started:()=>i.e(79189).then(i.bind(i, 989525)), notify_evaluation_ended:()=>i.e(25690).then(i.bind(i, 605754)), notify_evaluation_started:()=>i.e(79189).then(i.bind(i, 989525)), project_apply_approved:()=>i.e(37705).then(i.bind(i, 95977)), project_apply_rejected:()=>i.e(49666).then(i.bind(i, 593218)), schedule_audit_agree:()=>i.e(71307).then(i.bind(i, 785122)), schedule_audit_rejected:()=>i.e(75679).then(i.bind(i, 110338)), schedule_audit_expired:()=>i.e(60088).then(i.bind(i, 87039)), low_user_air_credit:()=>Promise.all([
            i.e(28492), i.e(20808)
          ]).then(i.bind(i, 97864)), low_course_air_credit:()=>Promise.all([
            i.e(28492), i.e(14054)
          ]).then(i.bind(i, 823942)), air_user_credit_audit_approved:()=>i.e(57105).then(i.bind(i, 237425)), air_course_credit_audit_approved:()=>i.e(49111).then(i.bind(i, 542839)), air_user_credit_audit_rejected:()=>i.e(58986).then(i.bind(i, 596874)), air_course_credit_audit_rejected:()=>i.e(66824).then(i.bind(i, 692808)), roomis:()=>i.e(63328).then(i.bind(i, 389522))
        }, created(){
          var t="".concat(this.notificationServerUrl, "/users/").concat(this.userId, "/notifications?limit=5&additionalFields=unread_count&removed=only_mobile");
          return this.$http.get(t, {
            withCredentials:!0
          }).then((t=>(this.unreadCount=t.body.unread_count, this.setUpPubSub()))).catch((()=>{
          })), !1
        }, computed:{
          displayedUnreadCount(){
            return this.unreadCount>99?"99+":this.unreadCount
          }, displayedNotifications(){
            return n(this.notifications).sortBy("-timestamp").take(5).value()
          }
        }, data:()=>({
          serverData:JSON.parse(r("#notification-list-server-data").text().trim()), lang:r("html").attr("lang"), userId:r("#userId").data("id"), deliveryOrg:r("html").attr("delivery-org"), notificationServerUrl:r("#notificationServerUrl").data("url"), unreadCount:0, ui:{
            showNotifications:!1
          }, notifications:[
          ]
        }), methods:{
          showLatestNotificationList(){
            if(r(".notifications .entry").focus(), !this.ui.showNotifications)return this.getLatestNotification(), this.unreadCount>0&&this.markNotificationsAsRead(), this.ui.showNotifications=!0, !1
          }, hideLatestNotificationList(){
            return setTimeout((()=>this.ui.touchList?(r(".notifications .entry").focus(), this.ui.touchList=!1):this.ui.showNotifications=r(".notifications .entry").is(":focus")), 150)
          }, getLatestNotification(){
            return this.$http.get("".concat(this.notificationServerUrl, "/users/").concat(this.userId, "/notifications?limit=5"), {
              withCredentials:!0
            }).then((function(t){
              return this.notifications=t.body.notifications, this.unreadCount=0
            }))
          }, markNotificationsAsRead(){
            return this.unreadCount=0, this.$http.post("".concat(this.notificationServerUrl, "/users/").concat(this.userId, "/notifications/read"), null, {
              withCredentials:!0
            })
          }, viewAllNotifications(){
          }, setUpPubSub(){
            var t={
              url:"".concat(this.notificationServerUrl, "/pubsub/").concat(this.userId), trackMessageLength:!0, transport:"websocket", fallbackTransport:"long-polling"
            };
            t.onMessage=t=>{
              if(200===t.status){
                if(this.ui.showNotifications)return this.getLatestNotification(), this.markNotificationsAsRead();
                this.unreadCount+=1
              }
            }, i.e(81401).then(i.t.bind(i, 481401, 23)).then((e=>{
              e.subscribe(t)
            }))
          }
        }
      };
      const s=(0, i(514486).A)(o, (function(){
        var t=this, e=t.$createElement, i=t._self._c||e;
        return i("div", {
          attrs:{
            id:"notification-list"
          }
        }, [
          i("a", {
            staticClass:"entry", attrs:{
              href:"javascript:void(0)"
            }, on:{
              click:function(e){
                return t.showLatestNotificationList()
              }, blur:function(e){
                return t.hideLatestNotificationList()
              }
            }
          }, [
            i("i", {
              staticClass:"icon font font-notification"
            }), t._v(" "), t.unreadCount>0?i("div", {
              staticClass:"count-wrapper"
            }, [
              i("div", {
              }, [
                i("span", {
                  staticClass:"count radius"
                }, [
                  t._v(t._s(t.displayedUnreadCount))
                ])
              ])
            ]):t._e()
          ]), t._v(" "), i("div", {
            directives:[
              {
                name:"show", rawName:"v-show", value:t.ui.showNotifications, expression:"ui.showNotifications"
              }
            ], staticClass:"dropdown-list"
          }, [
            i("ul", {
              on:{
                click:function(e){
                  return t.showLatestNotificationList()
                }
              }
            }, [
              0===t.notifications.length?i("li", {
                staticClass:"blank-notification-prompt"
              }, [
                i("span", [
                  t._v(t._s(t.$tt("no_notification")))
                ])
              ]):t._e(), t._v(" "), t._l(t.displayedNotifications, (function(e){
                return i("li", {
                  staticClass:"notification"
                }, [
                  i(e.type, {
                    tag:"component", attrs:{
                      notification:e, lang:t.lang, org:t.deliveryOrg
                    }
                  })
                ], 1)
              })), t._v(" "), t.notifications.length>0?i("li", {
                staticClass:"more"
              }, [
                i("a", {
                  attrs:{
                    href:"/user/index"
                  }, on:{
                    click:function(e){
                      return t.viewAllNotifications()
                    }
                  }
                }, [
                  t._v(t._s(t.$tt("view_all")))
                ])
              ]):t._e()
            ], 2)
          ])
        ])
      }), [
      ], !1, null, "71687d7e", null).exports
    }, 602871:(t, e, i)=>{
      i.d(e, {
        A:()=>r
      });
      const n={
        props:{
          active:{
            type:Boolean
          }, max:{
            type:Number
          }, min:{
            type:Number
          }, currentValue:{
            type:Number
          }
        }, data(){
          return{
            value:this.currentValue
          }
        }, methods:{
          changeValue(){
            this.$emit("change-value", this.value)
          }
        }
      };
      const r=(0, i(514486).A)(n, (function(){
        var t=this, e=t.$createElement;
        return(t._self._c||e)("InputNumber", {
          staticClass:"minimum-answer-input", attrs:{
            max:t.max, min:t.min, "controls-outside":"", size:"small", editable:!1, disabled:!t.active
          }, on:{
            "on-change":function(e){
              return t.changeValue()
            }
          }, model:{
            value:t.value, callback:function(e){
              t.value=e
            }, expression:"value"
          }
        })
      }), [
      ], !1, null, "77265c06", null).exports
    }, 649467:(t, e, i)=>{
      var n=i(302543);
      t.exports=[
        "$http", "toastr", function(t, e){
          return{
            getResourceGroups(e){
              var i=arguments.length>1&&void 0!==arguments[
                1
              ]
              ?arguments[
                1
              ]
              :n.noop;
              return t.get("/api/resource-groups").success(e).error(i)
            }, getPagedResourceGroups:(i, n, r, o, s)=>t.post("/api/resource-groups?page=".concat(i, "&page_size=").concat(n), r).success(o).error(e.decorateError(s)), get:(i, n, r)=>t.get("/api/resource-groups/".concat(i)).success(n).error(e.decorateError(r)), save:(i, n, r)=>t.post("/api/resource-group", i).success(e.decorateSuccess(n)).error(r), update:(i, n, r)=>t.put("/api/resource-group/".concat(i.id), i).success(e.decorateSuccess(n)).error(e.decorateError(r)), delete:(i, n, r)=>t.delete("/api/resource-group/".concat(i)).success(e.decorateSuccess(n)).error(e.decorateError(r)), getResourceGroupMembers:(i, n, r)=>t.get("/api/resource-groups/".concat(i, "/members")).success(n).error(e.decorateError(r)), getPagedResourceGroupMembers:(i, n, r, o, s)=>t.get("/api/resource-groups/".concat(i, "/members?page=").concat(n, "&page_size=").concat(r)).success(o).error(e.decorateError(s)), deleteMembers:(i, n, r, o)=>t.delete("/api/resource-groups/".concat(i, "/member"), {
              data:n
            }).success(e.decorateSuccess(r)).error(e.decorateError(o)), getPagedResourceGroupFolders:(i, n, r, o, s, a)=>t.get("/api/resource-groups/".concat(i, "/folders"), {
              params:{
                page:n, page_size:r, conditions:o
              }
            }).success(s).error(e.decorateError(a)), getVtrses(i, n, r, o, s){
              t.get("/api/vtrses", {
                params:{
                  conditions:i, needStat:n, fields:r
                }
              }).success(o).error(e.decorateError(s))
            }, getAllPagedResourceGroupFolders:(i, n, r, o, s)=>t.get("/api/resource-groups/folders", {
              params:{
                page:i, page_size:n, conditions:r
              }
            }).success(o).error(e.decorateError(s)), deleteResourceGroupFolder:(i, n, r, o)=>t.delete("/api/resource-groups/".concat(i, "/folders/").concat(n)).success(e.decorateSuccess(r)).error(e.decorateError(o)), getResourceGroupResources:(i, n, r)=>t.get("/api/resource-groups/".concat(i, "/resources")).success(n).error(e.decorateError(r)), getPagedResourceGroupResources:(i, n, r, o, s, a)=>t.get("/api/resource-groups/".concat(i, "/resources"), {
              params:{
                page:n, page_size:r, conditions:o
              }
            }).success(s).error(e.decorateError(a)), getPagedResourceGroupRubrics:(i, n, r, o, s, a)=>t.get("/api/resource-groups/".concat(i, "/rubrics"), {
              params:{
                page:n, page_size:r, conditions:o
              }
            }).success(s).error(e.decorateError(a)), getAllPagedResourceGroupResources:(i, n, r, o, s)=>t.get("/api/resource-groups/resources", {
              params:{
                page:i, page_size:n, conditions:r
              }
            }).success(o).error(e.decorateError(s)), getPagedResourceGroupSubjectLibs:(i, n, r, o, s, a)=>t.get("/api/resource-groups/".concat(i, "/subject-libs"), {
              params:{
                page:n, page_size:r, conditions:o
              }
            }).success(s).error(e.decorateError(a)), updateResourceGroupResource(e, i, r){
              var o=arguments.length>3&&void 0!==arguments[
                3
              ]
              ?arguments[
                3
              ]
              :n.noop;
              return t.put("/api/resource-groups/".concat(e, "/resource/").concat(i.id), {
                name:i.name, allow_download:i.allow_download, cc_license_name:i.cc_license_name
              }).success(r).error(o)
            }, deleteResourceGroupResource(e, i){
              var r=arguments.length>2&&void 0!==arguments[
                2
              ]
              ?arguments[
                2
              ]
              :n.noop;
              return t.delete("/api/shared-resources/".concat(e)).success(i).error(r)
            }, leaveGroup:(i, n, r)=>t.post("/api/resource-groups/".concat(i, "/leave")).success(e.decorateSuccess(n)).error(e.decorateError(r)), deleteResourceGroupSubjectLib(e, i){
              var r=arguments.length>2&&void 0!==arguments[
                2
              ]
              ?arguments[
                2
              ]
              :n.noop;
              return t.delete("/api/subject-libs/".concat(e)).success(i).error(r)
            }
          }
        }
      ]
    }, 651750:(t, e, i)=>{
      i(269193);
      var n=i(494082);
      (0, n.P)("knowledge-graph-statistics-overview", (()=>Promise.all([
        i.e(39176), i.e(96431), i.e(33489), i.e(6641), i.e(14891), i.e(55789), i.e(19326), i.e(8820), i.e(83170), i.e(50625), i.e(27783), i.e(72366), i.e(99418), i.e(42535), i.e(15731), i.e(31275), i.e(21589)
      ]).then(i.bind(i, 625341)))), (0, n.P)("activity-knowledge-node-setting", (()=>Promise.all([
        i.e(44388), i.e(20921)
      ]).then(i.bind(i, 944388)))), (0, n.P)("activity-knowledge-node-reference", (()=>i.e(64096).then(i.bind(i, 364096)))), (0, n.P)("knowledge-node-tag", (()=>i.e(49134).then(i.bind(i, 449134)))), (0, n.P)("knowledge-graph-student-node-stats", (()=>Promise.all([
        i.e(72366), i.e(99418), i.e(42535), i.e(31275), i.e(51607)
      ]).then(i.bind(i, 536175)))), (0, n.P)("knowledge-graph-node-students-stats", (()=>Promise.all([
        i.e(39176), i.e(96431), i.e(33489), i.e(14891), i.e(72366), i.e(42535), i.e(15731), i.e(98222)
      ]).then(i.bind(i, 193669)))), (0, n.P)("knowledge-graph-node-student-stats", (()=>i.e(45699).then(i.bind(i, 645699)))), (0, n.P)("knowledge-graph-student-node-stats-by-node", (()=>i.e(46780).then(i.bind(i, 246780)))), (0, n.P)("knowledge-graph-course-homepage", (()=>Promise.all([
        i.e(72366), i.e(99418), i.e(42535), i.e(91852), i.e(90936)
      ]).then(i.bind(i, 85930))));
      i(697652);
      var r=()=>{
        document.querySelector("#vue-app")&&Promise.all([
          i.e(4485), i.e(99418), i.e(31786)
        ]).then(i.bind(i, 531786))
      };
      "loading"===document.readyState?document.addEventListener("DOMContentLoaded", r):r()
    }, 671520:(t, e, i)=>{
      function n(t){
        return getComputedStyle(t)
      }
      function r(t, e){
        for(var i in e){
          var n=e[
            i
          ];
          "number"==typeof n&&(n+="px"), t.style[
            i
          ]
          =n
        }
        return t
      }
      function o(t){
        var e=document.createElement("div");
        return e.className=t, e
      }
      i(219693), i(168763), i(678636), i(158649), i(658379);
      var s="undefined"!=typeof Element&&(Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector);
      function a(t, e){
        if(!s)throw new Error("No element matching method supported");
        return s.call(t, e)
      }
      function c(t){
        t.remove?t.remove():t.parentNode&&t.parentNode.removeChild(t)
      }
      function u(t, e){
        return Array.prototype.filter.call(t.children, (function(t){
          return a(t, e)
        }))
      }
      var l="ps", d="ps__rtl", h={
        thumb:function(t){
          return"ps__thumb-"+t
        }, rail:function(t){
          return"ps__rail-"+t
        }, consuming:"ps__child--consume"
      }, v={
        focus:"ps--focus", clicking:"ps--clicking", active:function(t){
          return"ps--active-"+t
        }, scrolling:function(t){
          return"ps--scrolling-"+t
        }
      }, p={
        x:null, y:null
      };
      function f(t, e){
        var i=t.element.classList, n=v.scrolling(e);
        i.contains(n)?clearTimeout(p[
          e
        ]):i.add(n)
      }
      function y(t, e){
        p[
          e
        ]
        =setTimeout((function(){
          return t.isAlive&&t.element.classList.remove(v.scrolling(e))
        }), t.settings.scrollingThreshold)
      }
      var m=function(t){
        this.element=t, this.handlers={
        }
      }, g={
        isEmpty:{
          configurable:!0
        }
      };
      m.prototype.bind=function(t, e){
        void 0===this.handlers[
          t
        ]
        &&(this.handlers[
          t
        ]
        =[
        ]), this.handlers[
          t
        ].push(e), this.element.addEventListener(t, e, !1)
      }, m.prototype.unbind=function(t, e){
        var i=this;
        this.handlers[
          t
        ]
        =this.handlers[
          t
        ].filter((function(n){
          return!(!e||n===e)||(i.element.removeEventListener(t, n, !1), !1)
        }))
      }, m.prototype.unbindAll=function(){
        for(var t in this.handlers)this.unbind(t)
      }, g.isEmpty.get=function(){
        var t=this;
        return Object.keys(this.handlers).every((function(e){
          return 0===t.handlers[
            e
          ].length
        }))
      }, Object.defineProperties(m.prototype, g);
      var _=function(){
        this.eventElements=[
        ]
      };
      function b(t){
        if("function"==typeof window.CustomEvent)return new CustomEvent(t);
        var e=document.createEvent("CustomEvent");
        return e.initCustomEvent(t, !1, !1, void 0), e
      }
      function w(t, e, i, n, r){
        var o;
        if(void 0===n&&(n=!0), void 0===r&&(r=!1), "top"===e)o=[
          "contentHeight", "containerHeight", "scrollTop", "y", "up", "down"
        ];
        else{
          if("left"!==e)throw new Error("A proper axis should be provided");
          o=[
            "contentWidth", "containerWidth", "scrollLeft", "x", "left", "right"
          ]
        }
        !function(t, e, i, n, r){
          var o=i[
            0
          ], s=i[
            1
          ], a=i[
            2
          ], c=i[
            3
          ], u=i[
            4
          ], l=i[
            5
          ];
          void 0===n&&(n=!0);
          void 0===r&&(r=!1);
          var d=t.element;
          t.reach[
            c
          ]
          =null, d[
            a
          ]
          <1&&(t.reach[
            c
          ]
          ="start");
          d[
            a
          ]
          >t[
            o
          ]
          -t[
            s
          ]
          -1&&(t.reach[
            c
          ]
          ="end");
          e&&(d.dispatchEvent(b("ps-scroll-"+c)), e<0?d.dispatchEvent(b("ps-scroll-"+u)):e>0&&d.dispatchEvent(b("ps-scroll-"+l)), n&&function(t, e){
            f(t, e), y(t, e)
          }
          (t, c));
          t.reach[
            c
          ]
          &&(e||r)&&d.dispatchEvent(b("ps-"+c+"-reach-"+t.reach[
            c
          ]))
        }
        (t, i, o, n, r)
      }
      function C(t){
        return parseInt(t, 10)||0
      }
      _.prototype.eventElement=function(t){
        var e=this.eventElements.filter((function(e){
          return e.element===t
        }))[
          0
        ];
        return e||(e=new m(t), this.eventElements.push(e)), e
      }, _.prototype.bind=function(t, e, i){
        this.eventElement(t).bind(e, i)
      }, _.prototype.unbind=function(t, e, i){
        var n=this.eventElement(t);
        n.unbind(e, i), n.isEmpty&&this.eventElements.splice(this.eventElements.indexOf(n), 1)
      }, _.prototype.unbindAll=function(){
        this.eventElements.forEach((function(t){
          return t.unbindAll()
        })), this.eventElements=[
        ]
      }, _.prototype.once=function(t, e, i){
        var n=this.eventElement(t);
        n.bind(e, (function t(r){
          n.unbind(e, t), i(r)
        }))
      };
      var V={
        isWebKit:"undefined"!=typeof document&&"WebkitAppearance"in document.documentElement.style, supportsTouch:"undefined"!=typeof window&&("ontouchstart"in window||"maxTouchPoints"in window.navigator&&window.navigator.maxTouchPoints>0||window.DocumentTouch&&document instanceof window.DocumentTouch), supportsIePointer:"undefined"!=typeof navigator&&navigator.msMaxTouchPoints, isChrome:"undefined"!=typeof navigator&&/Chrome/i.test(navigator&&navigator.userAgent)
      };
      function S(t){
        var e=t.element, i=Math.floor(e.scrollTop), n=e.getBoundingClientRect();
        t.containerWidth=Math.ceil(n.width), t.containerHeight=Math.ceil(n.height), t.contentWidth=e.scrollWidth, t.contentHeight=e.scrollHeight, e.contains(t.scrollbarXRail)||(u(e, h.rail("x")).forEach((function(t){
          return c(t)
        })), e.appendChild(t.scrollbarXRail)), e.contains(t.scrollbarYRail)||(u(e, h.rail("y")).forEach((function(t){
          return c(t)
        })), e.appendChild(t.scrollbarYRail)), !t.settings.suppressScrollX&&t.containerWidth+t.settings.scrollXMarginOffset<t.contentWidth?(t.scrollbarXActive=!0, t.railXWidth=t.containerWidth-t.railXMarginWidth, t.railXRatio=t.containerWidth/t.railXWidth, t.scrollbarXWidth=T(t, C(t.railXWidth*t.containerWidth/t.contentWidth)), t.scrollbarXLeft=C((t.negativeScrollAdjustment+e.scrollLeft)*(t.railXWidth-t.scrollbarXWidth)/(t.contentWidth-t.containerWidth))):t.scrollbarXActive=!1, !t.settings.suppressScrollY&&t.containerHeight+t.settings.scrollYMarginOffset<t.contentHeight?(t.scrollbarYActive=!0, t.railYHeight=t.containerHeight-t.railYMarginHeight, t.railYRatio=t.containerHeight/t.railYHeight, t.scrollbarYHeight=T(t, C(t.railYHeight*t.containerHeight/t.contentHeight)), t.scrollbarYTop=C(i*(t.railYHeight-t.scrollbarYHeight)/(t.contentHeight-t.containerHeight))):t.scrollbarYActive=!1, t.scrollbarXLeft>=t.railXWidth-t.scrollbarXWidth&&(t.scrollbarXLeft=t.railXWidth-t.scrollbarXWidth), t.scrollbarYTop>=t.railYHeight-t.scrollbarYHeight&&(t.scrollbarYTop=t.railYHeight-t.scrollbarYHeight), function(t, e){
          var i={
            width:e.railXWidth
          }, n=Math.floor(t.scrollTop);
          e.isRtl?i.left=e.negativeScrollAdjustment+t.scrollLeft+e.containerWidth-e.contentWidth:i.left=t.scrollLeft;
          e.isScrollbarXUsingBottom?i.bottom=e.scrollbarXBottom-n:i.top=e.scrollbarXTop+n;
          r(e.scrollbarXRail, i);
          var o={
            top:n, height:e.railYHeight
          };
          e.isScrollbarYUsingRight?e.isRtl?o.right=e.contentWidth-(e.negativeScrollAdjustment+t.scrollLeft)-e.scrollbarYRight-e.scrollbarYOuterWidth-9:o.right=e.scrollbarYRight-t.scrollLeft:e.isRtl?o.left=e.negativeScrollAdjustment+t.scrollLeft+2*e.containerWidth-e.contentWidth-e.scrollbarYLeft-e.scrollbarYOuterWidth:o.left=e.scrollbarYLeft+t.scrollLeft;
          r(e.scrollbarYRail, o), r(e.scrollbarX, {
            left:e.scrollbarXLeft, width:e.scrollbarXWidth-e.railBorderXWidth
          }), r(e.scrollbarY, {
            top:e.scrollbarYTop, height:e.scrollbarYHeight-e.railBorderYWidth
          })
        }
        (e, t), t.scrollbarXActive?e.classList.add(v.active("x")):(e.classList.remove(v.active("x")), t.scrollbarXWidth=0, t.scrollbarXLeft=0, e.scrollLeft=!0===t.isRtl?t.contentWidth:0), t.scrollbarYActive?e.classList.add(v.active("y")):(e.classList.remove(v.active("y")), t.scrollbarYHeight=0, t.scrollbarYTop=0, e.scrollTop=0)
      }
      function T(t, e){
        return t.settings.minScrollbarLength&&(e=Math.max(e, t.settings.minScrollbarLength)), t.settings.maxScrollbarLength&&(e=Math.min(e, t.settings.maxScrollbarLength)), e
      }
      function k(t, e){
        var i=e[
          0
        ], n=e[
          1
        ], r=e[
          2
        ], o=e[
          3
        ], s=e[
          4
        ], a=e[
          5
        ], c=e[
          6
        ], u=e[
          7
        ], l=e[
          8
        ], d=t.element, h=null, p=null, m=null;
        function g(e){
          e.touches&&e.touches[
            0
          ]
          &&(e[
            r
          ]
          =e.touches[
            0
          ].pageY), d[
            c
          ]
          =h+m*(e[
            r
          ]
          -p), f(t, u), S(t), e.stopPropagation(), e.preventDefault()
        }
        function _(){
          y(t, u), t[
            l
          ].classList.remove(v.clicking), t.event.unbind(t.ownerDocument, "mousemove", g)
        }
        function b(e, s){
          h=d[
            c
          ], s&&e.touches&&(e[
            r
          ]
          =e.touches[
            0
          ].pageY), p=e[
            r
          ], m=(t[
            n
          ]
          -t[
            i
          ])/(t[
            o
          ]
          -t[
            a
          ]), s?t.event.bind(t.ownerDocument, "touchmove", g):(t.event.bind(t.ownerDocument, "mousemove", g), t.event.once(t.ownerDocument, "mouseup", _), e.preventDefault()), t[
            l
          ].classList.add(v.clicking), e.stopPropagation()
        }
        t.event.bind(t[
          s
        ], "mousedown", (function(t){
          b(t)
        })), t.event.bind(t[
          s
        ], "touchstart", (function(t){
          b(t, !0)
        }))
      }
      var x={
        "click-rail":function(t){
          t.element, t.event.bind(t.scrollbarY, "mousedown", (function(t){
            return t.stopPropagation()
          })), t.event.bind(t.scrollbarYRail, "mousedown", (function(e){
            var i=e.pageY-window.pageYOffset-t.scrollbarYRail.getBoundingClientRect().top>t.scrollbarYTop?1:-1;
            t.element.scrollTop+=i*t.containerHeight, S(t), e.stopPropagation()
          })), t.event.bind(t.scrollbarX, "mousedown", (function(t){
            return t.stopPropagation()
          })), t.event.bind(t.scrollbarXRail, "mousedown", (function(e){
            var i=e.pageX-window.pageXOffset-t.scrollbarXRail.getBoundingClientRect().left>t.scrollbarXLeft?1:-1;
            t.element.scrollLeft+=i*t.containerWidth, S(t), e.stopPropagation()
          }))
        }, "drag-thumb":function(t){
          k(t, [
            "containerWidth", "contentWidth", "pageX", "railXWidth", "scrollbarX", "scrollbarXWidth", "scrollLeft", "x", "scrollbarXRail"
          ]), k(t, [
            "containerHeight", "contentHeight", "pageY", "railYHeight", "scrollbarY", "scrollbarYHeight", "scrollTop", "y", "scrollbarYRail"
          ])
        }, keyboard:function(t){
          var e=t.element;
          t.event.bind(t.ownerDocument, "keydown", (function(i){
            if(!(i.isDefaultPrevented&&i.isDefaultPrevented()||i.defaultPrevented)&&(a(e, ":hover")||a(t.scrollbarX, ":focus")||a(t.scrollbarY, ":focus"))){
              var n, r=document.activeElement?document.activeElement:t.ownerDocument.activeElement;
              if(r){
                if("IFRAME"===r.tagName)r=r.contentDocument.activeElement;
                else for(;
                r.shadowRoot;
                )r=r.shadowRoot.activeElement;
                if(a(n=r, "input,[contenteditable]")||a(n, "select,[contenteditable]")||a(n, "textarea,[contenteditable]")||a(n, "button,[contenteditable]"))return
              }
              var o=0, s=0;
              switch(i.which){
                case 37:o=i.metaKey?-t.contentWidth:i.altKey?-t.containerWidth:-30;
                break;
                case 38:s=i.metaKey?t.contentHeight:i.altKey?t.containerHeight:30;
                break;
                case 39:o=i.metaKey?t.contentWidth:i.altKey?t.containerWidth:30;
                break;
                case 40:s=i.metaKey?-t.contentHeight:i.altKey?-t.containerHeight:-30;
                break;
                case 32:s=i.shiftKey?t.containerHeight:-t.containerHeight;
                break;
                case 33:s=t.containerHeight;
                break;
                case 34:s=-t.containerHeight;
                break;
                case 36:s=t.contentHeight;
                break;
                case 35:s=-t.contentHeight;
                break;
                default:return
              }
              t.settings.suppressScrollX&&0!==o||t.settings.suppressScrollY&&0!==s||(e.scrollTop-=s, e.scrollLeft+=o, S(t), function(i, n){
                var r=Math.floor(e.scrollTop);
                if(0===i){
                  if(!t.scrollbarYActive)return!1;
                  if(0===r&&n>0||r>=t.contentHeight-t.containerHeight&&n<0)return!t.settings.wheelPropagation
                }
                var o=e.scrollLeft;
                if(0===n){
                  if(!t.scrollbarXActive)return!1;
                  if(0===o&&i<0||o>=t.contentWidth-t.containerWidth&&i>0)return!t.settings.wheelPropagation
                }
                return!0
              }
              (o, s)&&i.preventDefault())
            }
          }))
        }, wheel:function(t){
          var e=t.element;
          function i(i){
            var r=function(t){
              var e=t.deltaX, i=-1*t.deltaY;
              return void 0!==e&&void 0!==i||(e=-1*t.wheelDeltaX/6, i=t.wheelDeltaY/6), t.deltaMode&&1===t.deltaMode&&(e*=10, i*=10), e!=e&&i!=i&&(e=0, i=t.wheelDelta), t.shiftKey?[
                -i, -e
              ]
              :[
                e, i
              ]
            }
            (i), o=r[
              0
            ], s=r[
              1
            ];
            if(!function(t, i, r){
              if(!V.isWebKit&&e.querySelector("select:focus"))return!0;
              if(!e.contains(t))return!1;
              for(var o=t;
              o&&o!==e;
              ){
                if(o.classList.contains(h.consuming))return!0;
                var s=n(o);
                if(r&&s.overflowY.match(/(scroll|auto)/)){
                  var a=o.scrollHeight-o.clientHeight;
                  if(a>0&&(o.scrollTop>0&&r<0||o.scrollTop<a&&r>0))return!0
                }
                if(i&&s.overflowX.match(/(scroll|auto)/)){
                  var c=o.scrollWidth-o.clientWidth;
                  if(c>0&&(o.scrollLeft>0&&i<0||o.scrollLeft<c&&i>0))return!0
                }
                o=o.parentNode
              }
              return!1
            }
            (i.target, o, s)){
              var a=!1;
              t.settings.useBothWheelAxes?t.scrollbarYActive&&!t.scrollbarXActive?(s?e.scrollTop-=s*t.settings.wheelSpeed:e.scrollTop+=o*t.settings.wheelSpeed, a=!0):t.scrollbarXActive&&!t.scrollbarYActive&&(o?e.scrollLeft+=o*t.settings.wheelSpeed:e.scrollLeft-=s*t.settings.wheelSpeed, a=!0):(e.scrollTop-=s*t.settings.wheelSpeed, e.scrollLeft+=o*t.settings.wheelSpeed), S(t), (a=a||function(i, n){
                var r=Math.floor(e.scrollTop), o=0===e.scrollTop, s=r+e.offsetHeight===e.scrollHeight, a=0===e.scrollLeft, c=e.scrollLeft+e.offsetWidth===e.scrollWidth;
                return!(Math.abs(n)>Math.abs(i)?o||s:a||c)||!t.settings.wheelPropagation
              }
              (o, s))&&!i.ctrlKey&&(i.stopPropagation(), i.preventDefault())
            }
          }
          void 0!==window.onwheel?t.event.bind(e, "wheel", i):void 0!==window.onmousewheel&&t.event.bind(e, "mousewheel", i)
        }, touch:function(t){
          if(V.supportsTouch||V.supportsIePointer){
            var e=t.element, i={
            }, r=0, o={
            }, s=null;
            V.supportsTouch?(t.event.bind(e, "touchstart", l), t.event.bind(e, "touchmove", d), t.event.bind(e, "touchend", v)):V.supportsIePointer&&(window.PointerEvent?(t.event.bind(e, "pointerdown", l), t.event.bind(e, "pointermove", d), t.event.bind(e, "pointerup", v)):window.MSPointerEvent&&(t.event.bind(e, "MSPointerDown", l), t.event.bind(e, "MSPointerMove", d), t.event.bind(e, "MSPointerUp", v)))
          }
          function a(i, n){
            e.scrollTop-=n, e.scrollLeft-=i, S(t)
          }
          function c(t){
            return t.targetTouches?t.targetTouches[
              0
            ]
            :t.touches?t.touches[
              0
            ]
            :t.changedTouches?t.changedTouches[
              0
            ]
            :t
          }
          function u(t){
            return(!t.pointerType||"pen"!==t.pointerType||0!==t.buttons)&&(!(!t.targetTouches||1!==t.targetTouches.length)||(!(!t.touches||1!==t.touches.length)||(!(!t.changedTouches||1!==t.changedTouches.length)||!(!t.pointerType||"mouse"===t.pointerType||t.pointerType===t.MSPOINTER_TYPE_MOUSE))))
          }
          function l(t){
            if(u(t)){
              var e=c(t);
              i.pageX=e.pageX, i.pageY=e.pageY, r=(new Date).getTime(), null!==s&&clearInterval(s)
            }
          }
          function d(s){
            if(u(s)){
              var l=c(s), d={
                pageX:l.pageX, pageY:l.pageY
              }, v=d.pageX-i.pageX, p=d.pageY-i.pageY;
              if(function(t, i, r){
                if(!e.contains(t))return!1;
                for(var o=t;
                o&&o!==e;
                ){
                  if(o.classList.contains(h.consuming))return!0;
                  var s=n(o);
                  if(r&&s.overflowY.match(/(scroll|auto)/)){
                    var a=o.scrollHeight-o.clientHeight;
                    if(a>0&&(o.scrollTop>0&&r<0||o.scrollTop<a&&r>0))return!0
                  }
                  if(i&&s.overflowX.match(/(scroll|auto)/)){
                    var c=o.scrollWidth-o.clientWidth;
                    if(c>0&&(o.scrollLeft>0&&i<0||o.scrollLeft<c&&i>0))return!0
                  }
                  o=o.parentNode
                }
                return!1
              }
              (s.target, v, p))return;
              a(v, p), i=d;
              var f=(new Date).getTime(), y=f-r;
              y>0&&(o.x=v/y, o.y=p/y, r=f), function(i, n){
                var r=Math.floor(e.scrollTop), o=e.scrollLeft, s=Math.abs(i), a=Math.abs(n);
                if(a>s){
                  if(n<0&&r===t.contentHeight-t.containerHeight||n>0&&0===r)return 0===window.scrollY&&n>0&&V.isChrome
                }
                else if(s>a&&(i<0&&o===t.contentWidth-t.containerWidth||i>0&&0===o))return!0;
                return!0
              }
              (v, p)&&s.preventDefault()
            }
          }
          function v(){
            t.settings.swipeEasing&&(clearInterval(s), s=setInterval((function(){
              t.isInitialized?clearInterval(s):o.x||o.y?Math.abs(o.x)<.01&&Math.abs(o.y)<.01?clearInterval(s):(a(30*o.x, 30*o.y), o.x*=.8, o.y*=.8):clearInterval(s)
            }), 10))
          }
        }
      }, D=function(t, e){
        var i=this;
        if(void 0===e&&(e={
        }), "string"==typeof t&&(t=document.querySelector(t)), !t||!t.nodeName)throw new Error("no element is specified to initialize PerfectScrollbar");
        if(!t.__perfectScrollBar){
          for(var s in this.element=t, t.classList.add(l), this.settings={
            handlers:[
              "click-rail", "drag-thumb", "keyboard", "wheel", "touch"
            ], maxScrollbarLength:null, minScrollbarLength:null, scrollingThreshold:1e3, scrollXMarginOffset:0, scrollYMarginOffset:0, suppressScrollX:!1, suppressScrollY:!1, swipeEasing:!0, useBothWheelAxes:!1, wheelPropagation:!0, wheelSpeed:1
          }, e)this.settings[
            s
          ]
          =e[
            s
          ];
          this.containerWidth=null, this.containerHeight=null, this.contentWidth=null, this.contentHeight=null;
          var a, c, u=function(){
            return t.classList.add(v.focus)
          }, p=function(){
            return t.classList.remove(v.focus)
          };
          this.isRtl="rtl"===n(t).direction, !0===this.isRtl&&t.classList.add(d), this.isNegativeScroll=(c=t.scrollLeft, t.scrollLeft=-1, a=t.scrollLeft<0, t.scrollLeft=c, a), this.negativeScrollAdjustment=this.isNegativeScroll?t.scrollWidth-t.clientWidth:0, this.event=new _, this.ownerDocument=t.ownerDocument||document, this.scrollbarXRail=o(h.rail("x")), t.appendChild(this.scrollbarXRail), this.scrollbarX=o(h.thumb("x")), this.scrollbarXRail.appendChild(this.scrollbarX), this.scrollbarX.setAttribute("tabindex", 0), this.event.bind(this.scrollbarX, "focus", u), this.event.bind(this.scrollbarX, "blur", p), this.scrollbarXActive=null, this.scrollbarXWidth=null, this.scrollbarXLeft=null;
          var f=n(this.scrollbarXRail);
          this.scrollbarXBottom=parseInt(f.bottom, 10), isNaN(this.scrollbarXBottom)?(this.isScrollbarXUsingBottom=!1, this.scrollbarXTop=C(f.top)):this.isScrollbarXUsingBottom=!0, this.railBorderXWidth=C(f.borderLeftWidth)+C(f.borderRightWidth), r(this.scrollbarXRail, {
            display:"block"
          }), this.railXMarginWidth=C(f.marginLeft)+C(f.marginRight), r(this.scrollbarXRail, {
            display:""
          }), this.railXWidth=null, this.railXRatio=null, this.scrollbarYRail=o(h.rail("y")), t.appendChild(this.scrollbarYRail), this.scrollbarY=o(h.thumb("y")), this.scrollbarYRail.appendChild(this.scrollbarY), this.scrollbarY.setAttribute("tabindex", 0), this.event.bind(this.scrollbarY, "focus", u), this.event.bind(this.scrollbarY, "blur", p), this.scrollbarYActive=null, this.scrollbarYHeight=null, this.scrollbarYTop=null;
          var y=n(this.scrollbarYRail);
          this.scrollbarYRight=parseInt(y.right, 10), isNaN(this.scrollbarYRight)?(this.isScrollbarYUsingRight=!1, this.scrollbarYLeft=C(y.left)):this.isScrollbarYUsingRight=!0, this.scrollbarYOuterWidth=this.isRtl?function(t){
            var e=n(t);
            return C(e.width)+C(e.paddingLeft)+C(e.paddingRight)+C(e.borderLeftWidth)+C(e.borderRightWidth)
          }
          (this.scrollbarY):null, this.railBorderYWidth=C(y.borderTopWidth)+C(y.borderBottomWidth), r(this.scrollbarYRail, {
            display:"block"
          }), this.railYMarginHeight=C(y.marginTop)+C(y.marginBottom), r(this.scrollbarYRail, {
            display:""
          }), this.railYHeight=null, this.railYRatio=null, this.reach={
            x:t.scrollLeft<=0?"start":t.scrollLeft>=this.contentWidth-this.containerWidth?"end":null, y:t.scrollTop<=0?"start":t.scrollTop>=this.contentHeight-this.containerHeight?"end":null
          }, this.isAlive=!0, this.settings.handlers.forEach((function(t){
            return x[
              t
            ]
            (i)
          })), this.lastScrollTop=Math.floor(t.scrollTop), this.lastScrollLeft=t.scrollLeft, this.event.bind(this.element, "scroll", (function(t){
            return i.onScroll(t)
          })), S(this), t.__perfectScrollBar=this
        }
      };
      D.prototype.update=function(){
        this.isAlive&&(this.negativeScrollAdjustment=this.isNegativeScroll?this.element.scrollWidth-this.element.clientWidth:0, r(this.scrollbarXRail, {
          display:"block"
        }), r(this.scrollbarYRail, {
          display:"block"
        }), this.railXMarginWidth=C(n(this.scrollbarXRail).marginLeft)+C(n(this.scrollbarXRail).marginRight), this.railYMarginHeight=C(n(this.scrollbarYRail).marginTop)+C(n(this.scrollbarYRail).marginBottom), r(this.scrollbarXRail, {
          display:"none"
        }), r(this.scrollbarYRail, {
          display:"none"
        }), S(this), w(this, "top", 0, !1, !0), w(this, "left", 0, !1, !0), r(this.scrollbarXRail, {
          display:""
        }), r(this.scrollbarYRail, {
          display:""
        }))
      }, D.prototype.onScroll=function(t){
        this.isAlive&&(S(this), w(this, "top", this.element.scrollTop-this.lastScrollTop), w(this, "left", this.element.scrollLeft-this.lastScrollLeft), this.lastScrollTop=Math.floor(this.element.scrollTop), this.lastScrollLeft=this.element.scrollLeft)
      }, D.prototype.destroy=function(){
        this.isAlive&&(this.event.unbindAll(), c(this.scrollbarX), c(this.scrollbarY), c(this.scrollbarXRail), c(this.scrollbarYRail), this.removePsClasses(), this.element.__perfectScrollBar=null, this.element=null, this.scrollbarX=null, this.scrollbarY=null, this.scrollbarXRail=null, this.scrollbarYRail=null, this.isAlive=!1)
      }, D.prototype.removePsClasses=function(){
        this.element.className=this.element.className.split(" ").filter((function(t){
          return!t.match(/^ps([
            -_
          ].+|)$/)
        })).join(" ")
      }, t.exports=D
    }, 703066:(t, e, i)=>{
      i.d(e, {
        $n:()=>O, AW:()=>H, Ad:()=>_, BE:()=>W, BI:()=>R, BT:()=>m, BV:()=>A, DU:()=>b, HE:()=>C, K3:()=>M, LL:()=>T, OW:()=>v, Pj:()=>x, Px:()=>z, Qi:()=>E, U1:()=>X, UT:()=>y, WD:()=>k, YL:()=>g, _i:()=>Y, _p:()=>w, br:()=>j, fK:()=>q, g7:()=>L, kX:()=>V, ke:()=>S, m$:()=>p, md:()=>N, np:()=>B, pT:()=>d, rZ:()=>D, rv:()=>f, wm:()=>I, yj:()=>l, z9:()=>h, zc:()=>P
      });
      i(540590), i(418665), i(269193), i(14602);
      var n=i(272505), r=i.n(n), o=i(218831), s=i(920453), a=i(783679), c=function(t, e, i, n){
        return new(i||(i=Promise))((function(r, o){
          function s(t){
            try{
              c(n.next(t))
            }
            catch(t){
              o(t)
            }
          }
          function a(t){
            try{
              c(n.throw(t))
            }
            catch(t){
              o(t)
            }
          }
          function c(t){
            var e;
            t.done?r(t.value):(e=t.value, e instanceof i?e:new i((function(t){
              t(e)
            }))).then(s, a)
          }
          c((n=n.apply(t, e||[
          ])).next())
        }))
      }, u=function(t, e){
        var i, n, r, o, s={
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
        return o={
          next:a(0), throw:a(1), return:a(2)
        }, "function"==typeof Symbol&&(o[
          Symbol.iterator
        ]
        =function(){
          return this
        }), o;
        function a(a){
          return function(c){
            return function(a){
              if(i)throw new TypeError("Generator is already executing.");
              for(;
              o&&(o=0, a[
                0
              ]
              &&(s=0)), s;
              )try{
                if(i=1, n&&(r=2&a[
                  0
                ]
                ?n.return:a[
                  0
                ]
                ?n.throw||((r=n.return)&&r.call(n), 0):n.next)&&!(r=r.call(n, a[
                  1
                ])).done)return r;
                switch(n=0, r&&(a=[
                  2&a[
                    0
                  ], r.value
                ]), a[
                  0
                ]){
                  case 0:case 1:r=a;
                  break;
                  case 4:return s.label++, {
                    value:a[
                      1
                    ], done:!1
                  };
                  case 5:s.label++, n=a[
                    1
                  ], a=[
                    0
                  ];
                  continue;
                  case 7:a=s.ops.pop(), s.trys.pop();
                  continue;
                  default:if(!(r=s.trys, (r=r.length>0&&r[
                    r.length-1
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
                  &&(!r||a[
                    1
                  ]
                  >r[
                    0
                  ]
                  &&a[
                    1
                  ]
                  <r[
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
                  &&s.label<r[
                    1
                  ]){
                    s.label=r[
                      1
                    ], r=a;
                    break
                  }
                  if(r&&s.label<r[
                    2
                  ]){
                    s.label=r[
                      2
                    ], s.ops.push(a);
                    break
                  }
                  r[
                    2
                  ]
                  &&s.ops.pop(), s.trys.pop();
                  continue
                }
                a=e.call(t, s)
              }
              catch(t){
                a=[
                  6, t
                ], n=0
              }
              finally{
                i=r=0
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
      }, l=function(t, e, i){
        return c(void 0, void 0, void 0, (function(){
          var n, c, l, d, h;
          return u(this, (function(u){
            switch(u.label){
              case 0:return n={
                "Content-Type":"multipart/form-data"
              }, (c=new FormData).append("record_type", e), c.append("course_id", "".concat(i)), c.append("file", t), [
                4, r().post("/api/data-import/validation", c, {
                  headers:n
                })
              ];
              case 1:return l=u.sent(), d=(0, o.camelizeKeys)(l.data.error_records), h=(0, s.plainToClass)(a.EC, d, {
                excludeExtraneousValues:!0, exposeDefaultValues:!0
              }), [
                2, {
                  accessKey:l.data.access_key, validateRecords:h, correctCount:l.data.correct_count
                }
              ]
            }
          }))
        }))
      }, d=function(t, e){
        return c(void 0, void 0, void 0, (function(){
          return u(this, (function(i){
            return[
              2, r().post("/api/data-import/chaoxing-score/".concat(e), {
                access_key:t
              })
            ]
          }))
        }))
      }, h=function(t){
        return c(void 0, void 0, void 0, (function(){
          var e;
          return u(this, (function(i){
            switch(i.label){
              case 0:return[
                4, r().get("/api/courses/".concat(t, "/score-status"))
              ];
              case 1:return e=i.sent(), [
                2, (0, s.plainToClass)(a.xj, (0, o.camelizeKeys)(e.data))
              ]
            }
          }))
        }))
      }, v=function(t){
        return c(void 0, void 0, void 0, (function(){
          var e, i, n, s, a;
          return u(this, (function(c){
            switch(c.label){
              case 0:return e=(null===(a=null===(s=window.globalData)||void 0===s?void 0:s.user)||void 0===a?void 0:a.id)?"api":"anonymous-api", i="/".concat(e, "/course/").concat(t, "/score-percentages"), [
                4, r().get(i)
              ];
              case 1:return n=c.sent(), [
                2, (0, o.camelizeKeys)(n.data)
              ]
            }
          }))
        }))
      }, p=function(t, e){
        return c(void 0, void 0, void 0, (function(){
          var i;
          return u(this, (function(n){
            return i="/api/courses/".concat(t, "/score-percentages"), [
              2, r().put(i, e)
            ]
          }))
        }))
      }, f=function(t){
        return c(void 0, void 0, void 0, (function(){
          var e, i, n, o, c;
          return u(this, (function(u){
            switch(u.label){
              case 0:return e=(null===(c=null===(o=window.globalData)||void 0===o?void 0:o.user)||void 0===c?void 0:c.id)?"api":"anonymous-api", i="/".concat(e, "/courses/").concat(t, "/score-percentages-setting"), [
                4, r().get(i)
              ];
              case 1:return n=u.sent(), [
                2, (0, s.plainToClass)(a.hN, n.data, {
                  strategy:"excludeAll"
                })
              ]
            }
          }))
        }))
      }, y=function(t, e){
        return c(void 0, void 0, void 0, (function(){
          return u(this, (function(i){
            return[
              2, r().post("/api/courses/".concat(t, "/score-item-groups"), {
                group_name:e
              })
            ]
          }))
        }))
      }, m=function(t, e){
        return c(void 0, void 0, void 0, (function(){
          return u(this, (function(i){
            return[
              2, r().delete("/api/courses/".concat(t, "/score-item-groups/").concat(e))
            ]
          }))
        }))
      }, g=function(t, e, i){
        return c(void 0, void 0, void 0, (function(){
          return u(this, (function(n){
            return[
              2, r().put("/api/courses/".concat(t, "/score-item-groups/").concat(e), {
                group_name:i
              })
            ]
          }))
        }))
      }, _=function(t){
        return c(void 0, void 0, void 0, (function(){
          var e;
          return u(this, (function(i){
            switch(i.label){
              case 0:return[
                4, r().get("/api/courses/".concat(t, "/score-item-groups"))
              ];
              case 1:return e=i.sent(), [
                2, (0, s.plainToClass)(a.ho, (0, o.camelizeKeys)(e.data.items))
              ]
            }
          }))
        }))
      }, b=function(t){
        return c(void 0, void 0, void 0, (function(){
          var e;
          return u(this, (function(i){
            switch(i.label){
              case 0:return[
                4, r().get("/api/courses/".concat(t, "/student/score-item-groups"))
              ];
              case 1:return e=i.sent(), [
                2, (0, s.plainToClass)(a.ho, (0, o.camelizeKeys)(e.data.items))
              ]
            }
          }))
        }))
      }, w=function(t){
        return c(void 0, void 0, void 0, (function(){
          var e;
          return u(this, (function(i){
            switch(i.label){
              case 0:return[
                4, r().get("/api/course/".concat(t, "/rollcall-score"))
              ];
              case 1:return e=i.sent(), [
                2, (0, s.plainToClass)(a.gt, (0, o.camelizeKeys)(e.data))
              ]
            }
          }))
        }))
      }, C=function(t){
        return c(void 0, void 0, void 0, (function(){
          var e;
          return u(this, (function(i){
            switch(i.label){
              case 0:return[
                4, r().get("/api/course/".concat(t, "/performance-score?isOriginalScore=true"))
              ];
              case 1:return e=i.sent(), [
                2, (0, s.plainToClass)(a.TB, (0, o.camelizeKeys)(e.data))
              ]
            }
          }))
        }))
      }, V=function(t){
        return c(void 0, void 0, void 0, (function(){
          var e;
          return u(this, (function(i){
            switch(i.label){
              case 0:return[
                4, r().get("/api/course/".concat(t, "/online-video-completeness/score"))
              ];
              case 1:return e=i.sent(), [
                2, (0, s.plainToClass)(a.wk, (0, o.camelizeKeys)(e.data))
              ]
            }
          }))
        }))
      }, S=function(t){
        return c(void 0, void 0, void 0, (function(){
          var e;
          return u(this, (function(i){
            switch(i.label){
              case 0:return[
                4, r().get("/api/course/".concat(t, "/interaction-scores"))
              ];
              case 1:return e=i.sent(), [
                2, (0, s.plainToClass)(a._T, (0, o.camelizeKeys)(e.data.interaction_scores))
              ]
            }
          }))
        }))
      }, T=function(t){
        return c(void 0, void 0, void 0, (function(){
          var e;
          return u(this, (function(i){
            switch(i.label){
              case 0:return[
                4, r().get("/api/courses/".concat(t, "/exam-scores?no-intercept=true"))
              ];
              case 1:return e=i.sent(), [
                2, (0, s.plainToClass)(a._T, (0, o.camelizeKeys)(e.data.exam_scores))
              ]
            }
          }))
        }))
      }, k=function(t){
        return c(void 0, void 0, void 0, (function(){
          var e;
          return u(this, (function(i){
            switch(i.label){
              case 0:return[
                4, r().get("/api/course/".concat(t, "/homework-scores?fields=id,title,data,start_time,end_time,syllabus_id,module_id,is_announce_score_time_passed,score_percentage,created_at,prerequisites,module_sort,syllabus_sort,sort,publish_type,is_in_progress"))
              ];
              case 1:return e=i.sent(), [
                2, (0, s.plainToClass)(a.OK, (0, o.camelizeKeys)(e.data.scores))
              ]
            }
          }))
        }))
      }, x=function(t){
        return c(void 0, void 0, void 0, (function(){
          var e;
          return u(this, (function(i){
            switch(i.label){
              case 0:return[
                4, r().get("/api/course/".concat(t, "/forum-scores"))
              ];
              case 1:return e=i.sent(), [
                2, (0, s.plainToClass)(a._T, (0, o.camelizeKeys)(e.data.forum_scores))
              ]
            }
          }))
        }))
      }, D=function(t){
        return c(void 0, void 0, void 0, (function(){
          var e;
          return u(this, (function(i){
            switch(i.label){
              case 0:return[
                4, r().get("/api/course/".concat(t, "/questionnaire-scores"))
              ];
              case 1:return e=i.sent(), [
                2, (0, s.plainToClass)(a._T, (0, o.camelizeKeys)(e.data.questionnaire_scores))
              ]
            }
          }))
        }))
      }, A=function(t){
        return c(void 0, void 0, void 0, (function(){
          var e;
          return u(this, (function(i){
            switch(i.label){
              case 0:return[
                4, r().get("/api/course/".concat(t, "/classroom-exam-scores"))
              ];
              case 1:return e=i.sent(), [
                2, (0, s.plainToClass)(a._T, (0, o.camelizeKeys)(e.data.classroom_scores))
              ]
            }
          }))
        }))
      }, Y=function(t){
        return c(void 0, void 0, void 0, (function(){
          var e;
          return u(this, (function(i){
            switch(i.label){
              case 0:return[
                4, r().get("/api/course/".concat(t, "/student-self-score"))
              ];
              case 1:return e=i.sent(), [
                2, (0, s.plainToClass)(a.gq, (0, o.camelizeKeys)(e.data.self_score))
              ]
            }
          }))
        }))
      }, P=function(t){
        return c(void 0, void 0, void 0, (function(){
          var e;
          return u(this, (function(i){
            switch(i.label){
              case 0:return[
                4, r().get("/api/courses/".concat(t, "/announce-score-settings"))
              ];
              case 1:return e=i.sent(), [
                2, (0, s.plainToClass)(a.RI, (0, o.camelizeKeys)(e.data.announce_score_settings))
              ]
            }
          }))
        }))
      }, E=function(t){
        return c(void 0, void 0, void 0, (function(){
          var e;
          return u(this, (function(i){
            switch(i.label){
              case 0:return[
                4, r().get("/api/courses/".concat(t, "/custom-score-items"))
              ];
              case 1:return e=i.sent(), [
                2, (0, s.plainToClass)(a.Y7, (0, o.camelizeKeys)(e.data.custom_score_items))
              ]
            }
          }))
        }))
      }, L=function(t){
        return c(void 0, void 0, void 0, (function(){
          return u(this, (function(e){
            switch(e.label){
              case 0:return[
                4, r().get("/api/course/".concat(t, "/exam-student-status"))
              ];
              case 1:return[
                2, e.sent().data
              ]
            }
          }))
        }))
      }, R=function(t){
        return c(void 0, void 0, void 0, (function(){
          return u(this, (function(e){
            switch(e.label){
              case 0:return[
                4, r().get("/api/course/".concat(t, "/homework-student-status"))
              ];
              case 1:return[
                2, e.sent().data
              ]
            }
          }))
        }))
      }, M=function(t){
        return c(void 0, void 0, void 0, (function(){
          return u(this, (function(e){
            switch(e.label){
              case 0:return[
                4, r().get("/api/course/".concat(t, "/classroom-student-status"))
              ];
              case 1:return[
                2, e.sent().data
              ]
            }
          }))
        }))
      }, z=function(t, e){
        return c(void 0, void 0, void 0, (function(){
          return u(this, (function(i){
            return[
              2, r().put("/api/courses/".concat(t, "/score-item-percentages"), {
                score_item_groups:(0, o.decamelizeKeys)(e)
              })
            ]
          }))
        }))
      }, N=function(t){
        return c(void 0, void 0, void 0, (function(){
          var e;
          return u(this, (function(i){
            switch(i.label){
              case 0:return[
                4, r().get("/api/course/".concat(t, "/performance/score-setting"))
              ];
              case 1:return e=i.sent(), [
                2, (0, s.plainToClass)(a.FB, (0, o.camelizeKeys)(e.data.setting))
              ]
            }
          }))
        }))
      }, O=function(t){
        return c(void 0, void 0, void 0, (function(){
          var e;
          return u(this, (function(i){
            switch(i.label){
              case 0:return[
                4, r().get("/api/course/".concat(t, "/online-video-completeness/setting"))
              ];
              case 1:return e=i.sent(), [
                2, (0, s.plainToClass)(a.no, (0, o.camelizeKeys)(e.data))
              ]
            }
          }))
        }))
      }, I=function(t, e){
        return c(void 0, void 0, void 0, (function(){
          return u(this, (function(i){
            switch(i.label){
              case 0:return[
                4, r().put("/api/course/".concat(t, "/online-video-completeness/setting"), (0, o.decamelizeKeys)(e))
              ];
              case 1:return[
                2, i.sent().data
              ]
            }
          }))
        }))
      }, W=function(t, e){
        return c(void 0, void 0, void 0, (function(){
          return u(this, (function(i){
            switch(i.label){
              case 0:return[
                4, r().put("/api/course/".concat(t, "/performance/score-setting"), (0, o.decamelizeKeys)(e))
              ];
              case 1:return[
                2, i.sent().data
              ]
            }
          }))
        }))
      }, X=function(t){
        return c(void 0, void 0, void 0, (function(){
          var e;
          return u(this, (function(i){
            switch(i.label){
              case 0:return[
                4, r().get("/api/course/".concat(t, "/rollcall/setting"))
              ];
              case 1:return e=i.sent(), [
                2, (0, s.plainToClass)(a.eH, (0, o.camelizeKeys)(e.data))
              ]
            }
          }))
        }))
      }, j=function(t, e){
        return c(void 0, void 0, void 0, (function(){
          return u(this, (function(i){
            switch(i.label){
              case 0:return[
                4, r().put("/api/course/".concat(t, "/rollcall/setting"), (0, o.decamelizeKeys)(e))
              ];
              case 1:return[
                2, i.sent().data
              ]
            }
          }))
        }))
      }, B=function(t, e){
        return c(void 0, void 0, void 0, (function(){
          return u(this, (function(i){
            switch(i.label){
              case 0:return[
                4, r().put("/api/course/custom-score-items/".concat(t), (0, o.decamelizeKeys)(e))
              ];
              case 1:return[
                2, i.sent().data
              ]
            }
          }))
        }))
      }, H=function(t, e){
        return c(void 0, void 0, void 0, (function(){
          return u(this, (function(i){
            switch(i.label){
              case 0:return[
                4, r().post("/api/courses/".concat(t, "/custom-score-item"), (0, o.decamelizeKeys)(e))
              ];
              case 1:return[
                2, i.sent().data
              ]
            }
          }))
        }))
      }, q=function(t){
        return c(void 0, void 0, void 0, (function(){
          return u(this, (function(e){
            return[
              2, r().delete("/api/course/custom-score-items/".concat(t))
            ]
          }))
        }))
      }
    }, 716880:(t, e, i)=>{
      t.exports=i.p+"assets/images/32ce719a510ad8aecf9d.svg"
    }, 759513:(t, e, i)=>{
      i.d(e, {
        Fu:()=>p, SR:()=>l, ae:()=>d, nG:()=>v, nP:()=>u, nX:()=>n, r2:()=>h
      });
      i(335231);
      var n, r=i(738645), o=i(152229), s=i(510543), a=i(731904), c=function(t, e, i, n){
        var r, o=arguments.length, s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e, i):n;
        if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t, e, i, n);
        else for(var a=t.length-1;
        a>=0;
        a--)(r=t[
          a
        ])&&(s=(o<3?r(s):o>3?r(e, i, s):r(e, i))||s);
        return o>3&&s&&Object.defineProperty(e, i, s), s
      }, u=function(){
        function t(){
          this.todaySignedIn=!1, this.monthSignedInCount=0, this.monthSignedInDates=[
          ], this.learnedKnowledgeNodeCount=0, this.visitSeconds=0, this.continueSignInCount=0
        }
        return c([
          (0, r.v)({
            name:"today_signed_in"
          })
        ], t.prototype, "todaySignedIn", void 0), c([
          (0, r.v)({
            name:"month_signed_in_count"
          })
        ], t.prototype, "monthSignedInCount", void 0), c([
          (0, r.v)({
            name:"month_signed_in_dates"
          })
        ], t.prototype, "monthSignedInDates", void 0), c([
          (0, r.v)({
            name:"learned_knowledge_node_count"
          })
        ], t.prototype, "learnedKnowledgeNodeCount", void 0), c([
          (0, r.v)({
            name:"visit_seconds"
          })
        ], t.prototype, "visitSeconds", void 0), c([
          (0, r.v)({
            name:"continue_sign_in_count"
          })
        ], t.prototype, "continueSignInCount", void 0), t
      }
      (), l=function(){
        function t(){
        }
        return c([
          (0, r.v)()
        ], t.prototype, "id", void 0), c([
          (0, r.v)()
        ], t.prototype, "name", void 0), t
      }
      (), d=function(){
        function t(){
          this.instructors=[
          ]
        }
        return c([
          (0, r.v)()
        ], t.prototype, "id", void 0), c([
          (0, r.v)()
        ], t.prototype, "orgId", void 0), c([
          (0, r.v)()
        ], t.prototype, "name", void 0), c([
          (0, r.v)()
        ], t.prototype, "cover", void 0), c([
          (0, r.v)(), (0, o.Z)((function(){
            return l
          }))
        ], t.prototype, "instructors", void 0), c([
          (0, r.v)()
        ], t.prototype, "courseCode", void 0), c([
          (0, r.v)()
        ], t.prototype, "startDate", void 0), c([
          (0, r.v)()
        ], t.prototype, "endDate", void 0), c([
          (0, r.v)()
        ], t.prototype, "isProject", void 0), t
      }
      (), h=function(){
        function t(){
          this.isActive=!1, this.sort=0
        }
        return c([
          (0, r.v)()
        ], t.prototype, "id", void 0), c([
          (0, r.v)()
        ], t.prototype, "isActive", void 0), c([
          (0, r.v)()
        ], t.prototype, "name", void 0), c([
          (0, r.v)()
        ], t.prototype, "sort", void 0), t
      }
      (), v=function(){
        function t(){
          this.realName="", this.sort=0, this.academicYearId=0
        }
        return c([
          (0, r.v)()
        ], t.prototype, "id", void 0), c([
          (0, r.v)()
        ], t.prototype, "name", void 0), c([
          (0, r.v)()
        ], t.prototype, "isActive", void 0), c([
          (0, r.v)()
        ], t.prototype, "realName", void 0), c([
          (0, r.v)()
        ], t.prototype, "sort", void 0), c([
          (0, r.v)()
        ], t.prototype, "academicYearId", void 0), t
      }
      (), p=(function(){
        function t(){
        }
        c([
          (0, r.v)()
        ], t.prototype, "activityId", void 0), c([
          (0, r.v)()
        ], t.prototype, "completionCriterion", void 0), c([
          (0, r.v)()
        ], t.prototype, "activityType", void 0), c([
          (0, r.v)()
        ], t.prototype, "title", void 0)
      }
      (), function(){
        function t(){
          this.isLocked=!1, this.notScoredNum=0, this.prerequisites=[
          ]
        }
        return c([
          (0, r.v)()
        ], t.prototype, "id", void 0), c([
          (0, r.v)()
        ], t.prototype, "title", void 0), c([
          (0, r.v)()
        ], t.prototype, "courseId", void 0), c([
          (0, r.v)()
        ], t.prototype, "courseName", void 0), c([
          (0, r.v)()
        ], t.prototype, "courseType", void 0), c([
          (0, s.d)((function(t){
            var e=t.value;
            return e?a.TimeUtils.toLocalDate(e):null
          }), {
            toClassOnly:!0
          }), (0, r.v)()
        ], t.prototype, "endTime", void 0), c([
          (0, r.v)()
        ], t.prototype, "type", void 0), c([
          (0, r.v)()
        ], t.prototype, "isLocked", void 0), c([
          (0, r.v)()
        ], t.prototype, "notScoredNum", void 0), c([
          (0, r.v)()
        ], t.prototype, "prerequisites", void 0), t
      }
      ());
      !function(t){
        t.RESOURCE="resource", t.COURSE="course", t.PROJECT="project"
      }
      (n||(n={
      }))
    }, 783679:(t, e, i)=>{
      i.d(e, {
        EC:()=>v, FB:()=>A, OK:()=>S, RI:()=>T, TB:()=>g, Y7:()=>w, _T:()=>V, eH:()=>E, gq:()=>C, gt:()=>m, hN:()=>y, ho:()=>D, no:()=>P, wk:()=>b, xj:()=>k
      });
      var n, r=i(731904), o=i(738645), s=i(152229), a=i(510543), c=i(958793), u=(n=function(t, e){
        return(n=Object.setPrototypeOf||{
          __proto__:[
          ]
        }
        instanceof Array&&function(t, e){
          t.__proto__=e
        }
        ||function(t, e){
          for(var i in e)Object.prototype.hasOwnProperty.call(e, i)&&(t[
            i
          ]
          =e[
            i
          ])
        })(t, e)
      }, function(t, e){
        if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");
        function i(){
          this.constructor=t
        }
        n(t, e), t.prototype=null===e?Object.create(e):(i.prototype=e.prototype, new i)
      }), l=function(t, e, i, n){
        var r, o=arguments.length, s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e, i):n;
        if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t, e, i, n);
        else for(var a=t.length-1;
        a>=0;
        a--)(r=t[
          a
        ])&&(s=(o<3?r(s):o>3?r(e, i, s):r(e, i))||s);
        return o>3&&s&&Object.defineProperty(e, i, s), s
      }, d=function(){
        function t(){
          this.error=""
        }
        return l([
          (0, o.v)()
        ], t.prototype, "userNo", void 0), l([
          (0, o.v)()
        ], t.prototype, "userName", void 0), l([
          (0, o.v)()
        ], t.prototype, "recordType", void 0), l([
          (0, o.v)()
        ], t.prototype, "score", void 0), l([
          (0, o.v)()
        ], t.prototype, "error", void 0), t
      }
      (), h=function(){
        function t(){
          this.error=""
        }
        return l([
          (0, o.v)()
        ], t.prototype, "name", void 0), l([
          (0, o.v)()
        ], t.prototype, "score", void 0), l([
          (0, o.v)()
        ], t.prototype, "error", void 0), t
      }
      (), v=function(t){
        function e(){
          var e=null!==t&&t.apply(this, arguments)||this;
          return e.records=[
          ], e
        }
        return u(e, t), l([
          (0, o.v)(), (0, s.Z)((function(){
            return h
          }))
        ], e.prototype, "records", void 0), e
      }
      (d), p=function(){
        function t(){
        }
        return l([
          (0, o.v)({
            name:"score_item_id"
          })
        ], t.prototype, "scoreItemId", void 0), l([
          (0, o.v)(), (0, a.d)((function(t){
            t.value;
            return t.obj.value||0
          }))
        ], t.prototype, "originValue", void 0), l([
          (0, o.v)(), (0, a.d)((function(t){
            var e=t.value, i=t.obj;
            return"score_type"in i&&"weight"!==i.score_type?0:null!=e?e:0
          }))
        ], t.prototype, "value", void 0), t=l([
          (0, c.n)()
        ], t)
      }
      (), f=function(t){
        function e(){
          var e=null!==t&&t.apply(this, arguments)||this;
          return e.isScored=!0, e.published=!0, e
        }
        return u(e, t), l([
          (0, o.v)()
        ], e.prototype, "title", void 0), l([
          (0, o.v)({
            name:"is_scored"
          })
        ], e.prototype, "isScored", void 0), l([
          (0, o.v)({
            name:"published"
          })
        ], e.prototype, "published", void 0), e=l([
          (0, c.n)()
        ], e)
      }
      (p), y=function(t){
        function e(){
          return null!==t&&t.apply(this, arguments)||this
        }
        var i;
        return u(e, t), i=e, e.createByType=function(t){
          var e=new i;
          return e.type=t, e
        }, l([
          (0, o.v)()
        ], e.prototype, "type", void 0), l([
          (0, o.v)({
            name:"score_method"
          })
        ], e.prototype, "scoreMethod", void 0), l([
          (0, o.v)({
            name:"punish_score_on_absence"
          })
        ], e.prototype, "punishScoreOnAbsence", void 0), l([
          (0, o.v)({
            name:"score_type"
          })
        ], e.prototype, "scoreType", void 0), l([
          (0, o.v)()
        ], e.prototype, "title", void 0), l([
          (0, o.v)(), (0, s.Z)((function(){
            return f
          }))
        ], e.prototype, "children", void 0), e=i=l([
          (0, c.n)()
        ], e)
      }
      (p), m=function(){
        function t(){
        }
        return l([
          (0, o.v)()
        ], t.prototype, "public", void 0), l([
          (0, o.v)(), (0, a.d)((function(t){
            var e=t.value;
            return e&&Number(e)
          }))
        ], t.prototype, "score", void 0), l([
          (0, o.v)()
        ], t.prototype, "rollcallCount", void 0), l([
          (0, o.v)()
        ], t.prototype, "rollcallTimes", void 0), l([
          (0, o.v)()
        ], t.prototype, "scored", void 0), t
      }
      (), g=function(){
        function t(){
        }
        return l([
          (0, o.v)()
        ], t.prototype, "scoreAnnounced", void 0), l([
          (0, o.v)()
        ], t.prototype, "score", void 0), l([
          (0, o.v)()
        ], t.prototype, "interactionScore", void 0), t
      }
      (), _=function(){
        function t(){
        }
        return l([
          (0, o.v)()
        ], t.prototype, "percentage", void 0), l([
          (0, o.v)()
        ], t.prototype, "score", void 0), t
      }
      (), b=function(){
        function t(){
        }
        return Object.defineProperty(t.prototype, "percentageRange", {
          get:function(){
            if(!this.rule.length)return null;
            for(var t=0, e=this.rule[
              this.rule.length-1
            ].percentage, i=0;
            i<this.rule.length;
            i++){
              var n=this.rule[
                i
              ];
              if(n.percentage<=this.completeRate){
                t=n.percentage, e=i-1>=0?this.rule[
                  i-1
                ].percentage:100;
                break
              }
            }
            return[
              t, e
            ]
          }, enumerable:!1, configurable:!0
        }), l([
          (0, o.v)()
        ], t.prototype, "score", void 0), l([
          (0, o.v)()
        ], t.prototype, "completeRate", void 0), l([
          (0, o.v)(), (0, s.Z)((function(){
            return _
          }))
        ], t.prototype, "rule", void 0), t
      }
      (), w=function(){
        function t(){
        }
        return l([
          (0, o.v)()
        ], t.prototype, "id", void 0), l([
          (0, o.v)()
        ], t.prototype, "name", void 0), l([
          (0, o.v)()
        ], t.prototype, "score", void 0), l([
          (0, o.v)()
        ], t.prototype, "canAnnounceScore", void 0), t
      }
      (), C=function(){
        function t(){
        }
        return l([
          (0, o.v)()
        ], t.prototype, "totalScore", void 0), l([
          (0, o.v)()
        ], t.prototype, "rawScore", void 0), l([
          (0, o.v)()
        ], t.prototype, "instructorScoreTime", void 0), t
      }
      (), V=function(){
        function t(){
        }
        return l([
          (0, o.v)()
        ], t.prototype, "score", void 0), l([
          (0, o.v)()
        ], t.prototype, "activityId", void 0), t
      }
      (), S=function(){
        function t(){
        }
        return l([
          (0, o.v)()
        ], t.prototype, "score", void 0), l([
          (0, o.v)()
        ], t.prototype, "activityId", void 0), l([
          (0, o.v)()
        ], t.prototype, "finalScore", void 0), l([
          (0, o.v)()
        ], t.prototype, "studentId", void 0), t
      }
      (), T=function(){
        function t(){
        }
        return l([
          (0, o.v)()
        ], t.prototype, "announceScoreType", void 0), l([
          (0, o.v)(), (0, a.d)((function(t){
            var e=t.value;
            return r.TimeUtils.toLocalDate(e)
          }), {
            toClassOnly:!0
          })
        ], t.prototype, "announceScoreTime", void 0), l([
          (0, o.v)()
        ], t.prototype, "isAnnounceScoreTimePassed", void 0), l([
          (0, o.v)()
        ], t.prototype, "announceRawScoreType", void 0), l([
          (0, o.v)(), (0, a.d)((function(t){
            var e=t.value;
            return r.TimeUtils.toLocalDate(e)
          }), {
            toClassOnly:!0
          })
        ], t.prototype, "announceRawScoreTime", void 0), l([
          (0, o.v)()
        ], t.prototype, "isAnnounceRawScoreTimePassed", void 0), t
      }
      (), k=function(){
        function t(){
        }
        return l([
          (0, o.v)()
        ], t.prototype, "autoPublish", void 0), l([
          (0, o.v)()
        ], t.prototype, "canPublishScore", void 0), l([
          (0, o.v)()
        ], t.prototype, "id", void 0), l([
          (0, o.v)(), (0, a.d)((function(t){
            var e=t.value;
            return e?r.TimeUtils.toLocalDate(e):null
          }), {
            toClassOnly:!0
          })
        ], t.prototype, "scorePublishDeadline", void 0), l([
          (0, o.v)(), (0, a.d)((function(t){
            var e=t.value;
            return e?r.TimeUtils.toLocalDate(e):null
          }), {
            toClassOnly:!0
          })
        ], t.prototype, "scorePublishStart", void 0), l([
          (0, o.v)(), (0, a.d)((function(t){
            var e=t.value;
            return e?r.TimeUtils.toLocalDate(e):null
          }), {
            toClassOnly:!0
          })
        ], t.prototype, "publishedAt", void 0), l([
          (0, o.v)()
        ], t.prototype, "scoreStatus", void 0), l([
          (0, o.v)()
        ], t.prototype, "publishedName", void 0), t
      }
      (), x=function(){
        function t(){
          this.scoreMethod="rate", this.rawScore=0, this.weightedScore=0, this.status="", this.externalCode=""
        }
        return l([
          (0, o.v)()
        ], t.prototype, "id", void 0), l([
          (0, o.v)()
        ], t.prototype, "name", void 0), l([
          (0, o.v)()
        ], t.prototype, "percentage", void 0), l([
          (0, o.v)()
        ], t.prototype, "weight", void 0), l([
          (0, o.v)()
        ], t.prototype, "teachingUnitId", void 0), l([
          (0, o.v)()
        ], t.prototype, "customWeightEnabled", void 0), l([
          (0, o.v)()
        ], t.prototype, "scored", void 0), l([
          (0, o.v)()
        ], t.prototype, "type", void 0), l([
          (0, o.v)()
        ], t.prototype, "referrerId", void 0), l([
          (0, o.v)()
        ], t.prototype, "groupId", void 0), l([
          (0, o.v)()
        ], t.prototype, "announceScoreType", void 0), l([
          (0, o.v)()
        ], t.prototype, "announceScoreTime", void 0), l([
          (0, o.v)()
        ], t.prototype, "scoreMethod", void 0), l([
          (0, o.v)()
        ], t.prototype, "isAnnounceScore", void 0), l([
          (0, o.v)()
        ], t.prototype, "externalCode", void 0), t
      }
      (), D=function(){
        function t(){
          this.items=[
          ], this.weightedScore=0, this.importedFrom=""
        }
        return l([
          (0, o.v)()
        ], t.prototype, "id", void 0), l([
          (0, o.v)()
        ], t.prototype, "name", void 0), l([
          (0, o.v)()
        ], t.prototype, "percentage", void 0), l([
          (0, o.v)(), (0, s.Z)((function(){
            return x
          }))
        ], t.prototype, "items", void 0), t
      }
      (), A=function(){
        function t(){
        }
        return l([
          (0, o.v)()
        ], t.prototype, "announceScoreSetting", void 0), l([
          (0, o.v)()
        ], t.prototype, "announceScoreTime", void 0), l([
          (0, o.v)()
        ], t.prototype, "scorePercentage", void 0), l([
          (0, o.v)()
        ], t.prototype, "scoreUnit", void 0), l([
          (0, o.v)()
        ], t.prototype, "standardScore", void 0), t
      }
      (), Y=(function(){
        function t(){
        }
        l([
          (0, o.v)()
        ], t.prototype, "scorePercentageLeft", void 0), l([
          (0, o.v)()
        ], t.prototype, "scorePercentageTotal", void 0)
      }
      (), function(){
        function t(){
        }
        return l([
          (0, o.v)()
        ], t.prototype, "percentage", void 0), l([
          (0, o.v)()
        ], t.prototype, "score", void 0), t
      }
      ()), P=function(){
        function t(){
        }
        return l([
          (0, o.v)()
        ], t.prototype, "id", void 0), l([
          (0, o.v)()
        ], t.prototype, "scoreMethod", void 0), l([
          (0, o.v)(), (0, s.Z)((function(){
            return Y
          }))
        ], t.prototype, "customScoreRule", void 0), l([
          (0, o.v)()
        ], t.prototype, "scorePercentage", void 0), l([
          (0, o.v)()
        ], t.prototype, "includeNoneCriterion", void 0), t
      }
      (), E=function(){
        function t(){
        }
        return l([
          (0, o.v)()
        ], t.prototype, "announceScoreTime", void 0), l([
          (0, o.v)(), (0, a.d)((function(t){
            var e=t.value;
            return e&&Number(e)
          }))
        ], t.prototype, "arriveLateAsAbsence", void 0), l([
          (0, o.v)()
        ], t.prototype, "autoScoring", void 0), l([
          (0, o.v)()
        ], t.prototype, "autoScoreBasis", void 0), l([
          (0, o.v)(), (0, a.d)((function(t){
            var e=t.value;
            return e&&Number(e)
          }))
        ], t.prototype, "lateCombineEarlyAsAbsence", void 0), l([
          (0, o.v)(), (0, a.d)((function(t){
            var e=t.value;
            return e&&Number(e)
          }))
        ], t.prototype, "leaveEarlyAsAbsence", void 0), l([
          (0, o.v)(), (0, a.d)((function(t){
            var e=t.value;
            return e&&Number(e)
          }))
        ], t.prototype, "maxAbsenceTimes", void 0), l([
          (0, o.v)(), (0, a.d)((function(t){
            var e=t.value;
            return e&&Number(e)
          }))
        ], t.prototype, "punishScoreOnAbsence", void 0), l([
          (0, o.v)()
        ], t.prototype, "scoreMethod", void 0), l([
          (0, o.v)()
        ], t.prototype, "scorePercentage", void 0), t
      }
      ();
      !function(){
        function t(){
        }
        l([
          (0, o.v)()
        ], t.prototype, "scoredAt", void 0), l([
          (0, o.v)()
        ], t.prototype, "scoredBy", void 0), l([
          (0, o.v)()
        ], t.prototype, "deleteFinalScore", void 0), l([
          (0, o.v)()
        ], t.prototype, "score", void 0)
      }
      ()
    }, 784559:(t, e, i)=>{
      var n=i(248124);
      t.exports={
        props:[
          "announcement"
        ], data:()=>({
        }), computed:{
          cookieKey(){
            return"user-".concat(n("#userId").data("id"), "-announcement-").concat(this.announcement.id, "-closed")
          }
        }, methods:{
          isShow(){
            return!n.cookie(this.cookieKey)
          }, close(){
            return n.cookie(this.cookieKey, 1, {
              expires:1, path:"/"
            }), this.$forceUpdate()
          }
        }
      }
    }, 858921:(t, e, i)=>{
      var n=i(962893), r=i(552979), o=(i(269193), i(592207)), s=i.n(o), a=(i(207452), i(272505)), c=i.n(a);
      function u(t, e, i, n, r, o, s){
        try{
          var a=t[
            o
          ]
          (s), c=a.value
        }
        catch(t){
          return void i(t)
        }
        a.done?e(c):Promise.resolve(c).then(n, r)
      }
      var l=new CustomEvent("__import-exam-subject-popup-visible", {
        detail:{
          show:!1
        }
      });
      const d={
        props:{
          show:{
            type:Boolean, default:!1
          }, examId:{
            type:Number, required:!0
          }
        }, data:()=>({
          loading:!1
        }), methods:{
          visibleChange(t){
            l.detail.show=t, document.dispatchEvent(l)
          }, close(){
            l.detail.show=!1, document.dispatchEvent(l)
          }, importSubject(){
            var t, e=this;
            return(t=s().mark((function t(){
              return s().wrap((function(t){
                for(;
                ;
                )switch(t.prev=t.next){
                  case 0:return e.loading=!0, t.prev=1, t.next=4, c().post("/api/make-up-exams/".concat(e.examId, "/subjects/import"));
                  case 4:window.location.reload(), t.next=11;
                  break;
                  case 7:t.prev=7, t.t0=t.catch(1), console.log(t.t0), e.loading=!1;
                  case 11:case"end":return t.stop()
                }
              }), t, null, [
                [
                  1, 7
                ]
              ])
            })), function(){
              var e=this, i=arguments;
              return new Promise((function(n, r){
                var o=t.apply(e, i);
                function s(t){
                  u(o, n, r, s, a, "next", t)
                }
                function a(t){
                  u(o, n, r, s, a, "throw", t)
                }
                s(void 0)
              }))
            })()
          }
        }
      };
      const h=(0, i(514486).A)(d, (function(){
        var t=this, e=t.$createElement, i=t._self._c||e;
        return i("Modal", {
          attrs:{
            "class-name":"vertical-center-modal", value:t.show, title:t.$t("importSubject.title"), width:480, "mask-closable":!1
          }, on:{
            "on-visible-change":t.visibleChange
          }
        }, [
          i("p", [
            t._v(t._s(t.$t("importSubject.confirm")))
          ]), t._v(" "), i("div", {
            attrs:{
              slot:"footer"
            }, slot:"footer"
          }, [
            i("Button", {
              attrs:{
                type:"primary", loading:t.loading
              }, on:{
                click:t.importSubject
              }
            }, [
              t._v(t._s(t.$t("importSubject.import")))
            ]), t._v(" "), i("Button", {
              attrs:{
                type:"default"
              }, on:{
                click:t.close
              }
            }, [
              t._v(t._s(t.$t("importSubject.notImport")))
            ])
          ], 1)
        ])
      }), [
      ], !1, null, "28f53260", null).exports;
      n.default.prototype._i18n=r.default, n.default.customElement("import-exam-subject-popup", h), n.default.component("match-subject-info", i(92834).A), n.default.component("number-input", i(602871).A)
    }, 882579:(t, e, i)=>{
      i.d(e, {
        A:()=>b
      });
      i(540590), i(418665), i(269193), i(14602);
      var n=i(595738), r=i(297786), o=i(552979), s=i(384027), a=i(497248), c=i(979278), u=i(769075), l=i(366875), d=(i(868329), function(t, e, i, n){
        return new(i||(i=Promise))((function(r, o){
          function s(t){
            try{
              c(n.next(t))
            }
            catch(t){
              o(t)
            }
          }
          function a(t){
            try{
              c(n.throw(t))
            }
            catch(t){
              o(t)
            }
          }
          function c(t){
            var e;
            t.done?r(t.value):(e=t.value, e instanceof i?e:new i((function(t){
              t(e)
            }))).then(s, a)
          }
          c((n=n.apply(t, e||[
          ])).next())
        }))
      }), h=function(t, e){
        var i, n, r, o, s={
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
        return o={
          next:a(0), throw:a(1), return:a(2)
        }, "function"==typeof Symbol&&(o[
          Symbol.iterator
        ]
        =function(){
          return this
        }), o;
        function a(a){
          return function(c){
            return function(a){
              if(i)throw new TypeError("Generator is already executing.");
              for(;
              o&&(o=0, a[
                0
              ]
              &&(s=0)), s;
              )try{
                if(i=1, n&&(r=2&a[
                  0
                ]
                ?n.return:a[
                  0
                ]
                ?n.throw||((r=n.return)&&r.call(n), 0):n.next)&&!(r=r.call(n, a[
                  1
                ])).done)return r;
                switch(n=0, r&&(a=[
                  2&a[
                    0
                  ], r.value
                ]), a[
                  0
                ]){
                  case 0:case 1:r=a;
                  break;
                  case 4:return s.label++, {
                    value:a[
                      1
                    ], done:!1
                  };
                  case 5:s.label++, n=a[
                    1
                  ], a=[
                    0
                  ];
                  continue;
                  case 7:a=s.ops.pop(), s.trys.pop();
                  continue;
                  default:if(!(r=s.trys, (r=r.length>0&&r[
                    r.length-1
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
                  &&(!r||a[
                    1
                  ]
                  >r[
                    0
                  ]
                  &&a[
                    1
                  ]
                  <r[
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
                  &&s.label<r[
                    1
                  ]){
                    s.label=r[
                      1
                    ], r=a;
                    break
                  }
                  if(r&&s.label<r[
                    2
                  ]){
                    s.label=r[
                      2
                    ], s.ops.push(a);
                    break
                  }
                  r[
                    2
                  ]
                  &&s.ops.pop(), s.trys.pop();
                  continue
                }
                a=e.call(t, s)
              }
              catch(t){
                a=[
                  6, t
                ], n=0
              }
              finally{
                i=r=0
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
      const v=(0, n.pM)({
        props:{
          value:{
            type:Boolean, required:!0
          }, name:{
            type:String, required:!0
          }
        }, setup:function(t, e){
          var i=this, r=(0, n.Kh)({
            name:""
          }), s={
            name:[
              {
                required:!0, validator:function(t, e, i){
                  ""===e.trim()?i(new Error(o.default.t("required_field"))):i()
                }
              }
            ]
          }, a=(0, n.KR)();
          (0, n.wB)((function(){
            return t.name
          }), (function(t){
            r.name=t
          }));
          var c=function(){
            e.emit("input", !1)
          };
          return{
            form:r, rules:s, formRef:a, close:c, submit:function(){
              return d(i, void 0, void 0, (function(){
                return h(this, (function(t){
                  switch(t.label){
                    case 0:return a.value?[
                      4, a.value.validate()
                    ]
                    :[
                      2
                    ];
                    case 1:return t.sent()&&(e.emit("on-submit", r.name), c()), [
                      2
                    ]
                  }
                }))
              }))
            }
          }
        }
      });
      var p=i(514486);
      const f=(0, p.A)(v, (function(){
        var t=this, e=t.$createElement, i=t._self._c||e;
        return i("Modal", {
          attrs:{
            value:t.value, title:t.$t("edit")
          }
        }, [
          i("Form", {
            ref:"formRef", attrs:{
              model:t.form, rules:t.rules
            }
          }, [
            i("FormItem", {
              attrs:{
                label:t.$t("coursePackage.searchPlaceholder"), prop:"name"
              }
            }, [
              i("Input", {
                model:{
                  value:t.form.name, callback:function(e){
                    t.$set(t.form, "name", e)
                  }, expression:"form.name"
                }
              })
            ], 1)
          ], 1), t._v(" "), i("template", {
            slot:"footer"
          }, [
            i("Button", {
              on:{
                click:t.close
              }
            }, [
              t._v(t._s(t.$t("cancel")))
            ]), t._v(" "), i("Button", {
              staticStyle:{
                "margin-right":"10px"
              }, attrs:{
                type:"primary"
              }, on:{
                click:t.submit
              }
            }, [
              t._v(t._s(t.$t("confirm")))
            ])
          ], 1)
        ], 2)
      }), [
      ], !1, null, null, null).exports;
      var y=i(248124), m=function(t, e, i, n){
        return new(i||(i=Promise))((function(r, o){
          function s(t){
            try{
              c(n.next(t))
            }
            catch(t){
              o(t)
            }
          }
          function a(t){
            try{
              c(n.throw(t))
            }
            catch(t){
              o(t)
            }
          }
          function c(t){
            var e;
            t.done?r(t.value):(e=t.value, e instanceof i?e:new i((function(t){
              t(e)
            }))).then(s, a)
          }
          c((n=n.apply(t, e||[
          ])).next())
        }))
      }, g=function(t, e){
        var i, n, r, o, s={
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
        return o={
          next:a(0), throw:a(1), return:a(2)
        }, "function"==typeof Symbol&&(o[
          Symbol.iterator
        ]
        =function(){
          return this
        }), o;
        function a(a){
          return function(c){
            return function(a){
              if(i)throw new TypeError("Generator is already executing.");
              for(;
              o&&(o=0, a[
                0
              ]
              &&(s=0)), s;
              )try{
                if(i=1, n&&(r=2&a[
                  0
                ]
                ?n.return:a[
                  0
                ]
                ?n.throw||((r=n.return)&&r.call(n), 0):n.next)&&!(r=r.call(n, a[
                  1
                ])).done)return r;
                switch(n=0, r&&(a=[
                  2&a[
                    0
                  ], r.value
                ]), a[
                  0
                ]){
                  case 0:case 1:r=a;
                  break;
                  case 4:return s.label++, {
                    value:a[
                      1
                    ], done:!1
                  };
                  case 5:s.label++, n=a[
                    1
                  ], a=[
                    0
                  ];
                  continue;
                  case 7:a=s.ops.pop(), s.trys.pop();
                  continue;
                  default:if(!(r=s.trys, (r=r.length>0&&r[
                    r.length-1
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
                  &&(!r||a[
                    1
                  ]
                  >r[
                    0
                  ]
                  &&a[
                    1
                  ]
                  <r[
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
                  &&s.label<r[
                    1
                  ]){
                    s.label=r[
                      1
                    ], r=a;
                    break
                  }
                  if(r&&s.label<r[
                    2
                  ]){
                    s.label=r[
                      2
                    ], s.ops.push(a);
                    break
                  }
                  r[
                    2
                  ]
                  &&s.ops.pop(), s.trys.pop();
                  continue
                }
                a=e.call(t, s)
              }
              catch(t){
                a=[
                  6, t
                ], n=0
              }
              finally{
                i=r=0
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
      const _=(0, n.pM)({
        components:{
          SvgIcon:c.A, EditModal:f, Breadcrumb:s.Breadcrumb, BreadcrumbItem:s.BreadcrumbItem
        }, props:[
          "courseId"
        ], setup:function(t){
          var e, i=this, c=(0, n.KR)(""), d=(0, n.KR)(!1), h=(0, n.KR)(0), v=(0, n.KR)(""), p=(0, a.WQ)((function(e, i){
            return(0, l.Xi)(t.courseId, e, i, c.value)
          })), f=null===(e=(0, n.nI)())||void 0===e?void 0:e.proxy;
          (0, r.MLh)(window, "export-course-package-status-change", (function(){
            p.pageChanged(1)
          }));
          var _=function(t, e){
            h.value=t, v.value=e, d.value=!0
          }, b=function(t){
            return m(i, void 0, void 0, (function(){
              return g(this, (function(e){
                switch(e.label){
                  case 0:return[
                    4, u.A.open({
                      title:o.default.t("info"), content:o.default.t("coursePackage.del"), type:"warning"
                    })
                  ];
                  case 1:return e.sent()?[
                    4, (0, l.$B)(t)
                  ]
                  :[
                    3, 3
                  ];
                  case 2:e.sent(), p.fetch(), e.label=3;
                  case 3:return[
                    2
                  ]
                }
              }))
            }))
          }, w=function(t){
            window.open(t)
          }, C=function(t){
            return m(i, void 0, void 0, (function(){
              return g(this, (function(e){
                switch(e.label){
                  case 0:return[
                    4, u.A.open({
                      title:o.default.t("info"), content:o.default.t("coursePackage.copy"), type:"warning"
                    })
                  ];
                  case 1:return e.sent()?[
                    4, (0, l.hl)(t)
                  ]
                  :[
                    3, 3
                  ];
                  case 2:e.sent(), f.$Message.success(o.default.t("save_success")), e.label=3;
                  case 3:return[
                    2
                  ]
                }
              }))
            }))
          }, V=[
            {
              title:o.default.t("coursePackage.name"), key:"name", tooltip:!0
            }, {
              title:o.default.t("created_at"), render:function(t, e){
                var i=null==e?void 0:e.row, n="--";
                return"success"!==i.status&&"fail"!==i.status||(n=i.lastUpdatedAt), t("div", [
                  n
                ])
              }, tooltip:!0
            }, {
              title:o.default.t("size"), key:"size"
            }, {
              title:o.default.t("authz.status"), render:function(t, e){
                var i, n=null===(i=null==e?void 0:e.row)||void 0===i?void 0:i.status, r="";
                return r="success"===n?o.default.t("coursePackage.exportSuccess"):"progressing"===n?o.default.t("coursePackage.exporting"):o.default.t("coursePackage.exportFailed"), t("div", {
                  class:"course-package-status"
                }, [
                  t("span", {
                    class:[
                      "status", "badge-".concat(n)
                    ]
                  }, [
                    r
                  ])
                ])
              }
            }, {
              title:o.default.t("operation"), render:function(t, e){
                var i=null==e?void 0:e.row, n=function(){
                  return t(s.Tooltip, {
                    attrs:{
                      placement:"top", content:o.default.t("delete")
                    }
                  }, [
                    t("span", {
                      on:{
                        click:function(){
                          return b(i.id)
                        }
                      }
                    }, [
                      t("i", {
                        class:"font font-delete"
                      })
                    ])
                  ])
                };
                return"success"===i.status?t("div", {
                  class:"actions"
                }, [
                  [
                    function(){
                      return t(s.Tooltip, {
                        attrs:{
                          placement:"top", content:o.default.t("edit")
                        }
                      }, [
                        t("span", {
                          on:{
                            click:function(){
                              return _(i.id, i.name)
                            }
                          }
                        }, [
                          t("i", {
                            class:"font font-edit"
                          })
                        ])
                      ])
                    }, n, function(){
                      return t(s.Tooltip, {
                        attrs:{
                          placement:"top", content:o.default.t("download")
                        }
                      }, [
                        t("span", {
                          on:{
                            click:function(){
                              return w(i.url)
                            }
                          }
                        }, [
                          t("i", {
                            class:"font font-download"
                          })
                        ])
                      ])
                    }
                  ].map((function(t){
                    return t()
                  }))
                ]):"progressing"===i.status?t("div"):t("div", [
                  n()
                ])
              }
            }
          ];
          return(0, n.sV)((function(){
            p.fetch()
          })), {
            keyword:c, columns:V, page:p, showEditModal:d, packageName:v, changeName:function(t){
              return m(i, void 0, void 0, (function(){
                var e;
                return g(this, (function(i){
                  switch(i.label){
                    case 0:return[
                      4, (0, l.LE)(h.value, {
                        name:t
                      })
                    ];
                    case 1:return i.sent(), (e=p.data.items.find((function(t){
                      return t.id===h.value
                    })))&&(e.name=t), [
                      2
                    ]
                  }
                }))
              }))
            }, edit:_, del:b, download:w, copy:C, search:function(){
              p.pageChanged(1)
            }, back:function(){
              window.location.href="/course/".concat(t.courseId, "/content")
            }, openModal:function(){
              var t=y("export-course-package-modal").get(0);
              t&&(t.show=!0)
            }
          }
        }
      });
      const b=(0, p.A)(_, (function(){
        var t=this, e=t.$createElement, i=t._self._c||e;
        return i("div", {
          staticClass:"course-package-wrapper"
        }, [
          i("div", {
            staticClass:"breadcrumb"
          }, [
            i("a", {
              on:{
                click:t.back
              }
            }, [
              t._v(t._s(t.$t("backParentList")))
            ]), t._v("\n    |\n    "), i("a", {
              staticClass:"back-to-content", attrs:{
                href:"/course/"+t.courseId+"/content"
              }
            }, [
              t._v(t._s(t.$t("section")))
            ]), t._v(" "), i("i", {
              staticClass:"font font-chevron-right"
            }), t._v(" "), i("span", [
              t._v(t._s(t.$t("coursePackage.export")))
            ])
          ]), t._v(" "), i("div", {
            staticClass:"course-package-header"
          }, [
            i("Button", {
              attrs:{
                type:"primary"
              }, on:{
                click:t.openModal
              }
            }, [
              t._v(t._s(t.$t("coursePackage.make")))
            ]), t._v(" "), i("Input", {
              staticStyle:{
                width:"220px"
              }, attrs:{
                placeholder:t.$t("coursePackage.searchPlaceholder"), search:"", "enter-button":""
              }, on:{
                "on-search":t.search
              }, model:{
                value:t.keyword, callback:function(e){
                  t.keyword=e
                }, expression:"keyword"
              }
            })
          ], 1), t._v(" "), i("div", {
            staticClass:"course-package-list"
          }, [
            i("Table", {
              attrs:{
                data:t.page.data.items, columns:t.columns, strip:!0
              }
            }), t._v(" "), i("div", {
              staticClass:"pagination"
            }, [
              i("Page", {
                directives:[
                  {
                    name:"show", rawName:"v-show", value:t.page.data.pages>0, expression:"page.data.pages > 0"
                  }
                ], attrs:{
                  total:t.page.data.total, "page-size":t.page.data.pageSize, current:t.page.data.page, "page-size-opts":[
                    10, 20, 30, 40
                  ], "show-elevator":"", "show-sizer":"", "show-total":""
                }, on:{
                  "on-change":t.page.pageChanged, "on-page-size-change":t.page.pageSizeChanged
                }
              })
            ], 1)
          ], 1), t._v(" "), i("EditModal", {
            attrs:{
              name:t.packageName
            }, on:{
              "on-submit":t.changeName
            }, model:{
              value:t.showEditModal, callback:function(e){
                t.showEditModal=e
              }, expression:"showEditModal"
            }
          })
        ], 1)
      }), [
      ], !1, null, "5e5551ff", null).exports
    }, 882602:(t, e, i)=>{
      i.r(e), i.d(e, {
        useAiPpt:()=>R, useAiPptUsage:()=>L
      });
      i(540590), i(418665), i(269193), i(906048), i(43148), i(14602);
      var n, r, o, s, a, c, u, l, d, h, v, p, f, y, m, g=i(921396), _=i.n(g), b=i(272505), w=i.n(b), C=i(595738), V=i(722720), S=i(165742), T=function(t, e, i, n){
        return new(i||(i=Promise))((function(r, o){
          function s(t){
            try{
              c(n.next(t))
            }
            catch(t){
              o(t)
            }
          }
          function a(t){
            try{
              c(n.throw(t))
            }
            catch(t){
              o(t)
            }
          }
          function c(t){
            var e;
            t.done?r(t.value):(e=t.value, e instanceof i?e:new i((function(t){
              t(e)
            }))).then(s, a)
          }
          c((n=n.apply(t, e||[
          ])).next())
        }))
      }, k=function(t, e){
        var i, n, r, o, s={
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
        return o={
          next:a(0), throw:a(1), return:a(2)
        }, "function"==typeof Symbol&&(o[
          Symbol.iterator
        ]
        =function(){
          return this
        }), o;
        function a(a){
          return function(c){
            return function(a){
              if(i)throw new TypeError("Generator is already executing.");
              for(;
              o&&(o=0, a[
                0
              ]
              &&(s=0)), s;
              )try{
                if(i=1, n&&(r=2&a[
                  0
                ]
                ?n.return:a[
                  0
                ]
                ?n.throw||((r=n.return)&&r.call(n), 0):n.next)&&!(r=r.call(n, a[
                  1
                ])).done)return r;
                switch(n=0, r&&(a=[
                  2&a[
                    0
                  ], r.value
                ]), a[
                  0
                ]){
                  case 0:case 1:r=a;
                  break;
                  case 4:return s.label++, {
                    value:a[
                      1
                    ], done:!1
                  };
                  case 5:s.label++, n=a[
                    1
                  ], a=[
                    0
                  ];
                  continue;
                  case 7:a=s.ops.pop(), s.trys.pop();
                  continue;
                  default:if(!(r=s.trys, (r=r.length>0&&r[
                    r.length-1
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
                  &&(!r||a[
                    1
                  ]
                  >r[
                    0
                  ]
                  &&a[
                    1
                  ]
                  <r[
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
                  &&s.label<r[
                    1
                  ]){
                    s.label=r[
                      1
                    ], r=a;
                    break
                  }
                  if(r&&s.label<r[
                    2
                  ]){
                    s.label=r[
                      2
                    ], s.ops.push(a);
                    break
                  }
                  r[
                    2
                  ]
                  &&s.ops.pop(), s.trys.pop();
                  continue
                }
                a=e.call(t, s)
              }
              catch(t){
                a=[
                  6, t
                ], n=0
              }
              finally{
                i=r=0
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
      }, x=null!==(o=null===(r=null===(n=window.globalData)||void 0===n?void 0:n.course)||void 0===r?void 0:r.isSimulatingInstructor)&&void 0!==o&&o, D=null!==(a=null===(s=window.globalData)||void 0===s?void 0:s.isSimulatingVisitor)&&void 0!==a&&a, A=null!==(u=null===(c=window.featureToggles)||void 0===c?void 0:c.aiPpt)&&void 0!==u&&u, Y=null!==(d=null===(l=window.globalData)||void 0===l?void 0:l.courseRoles)&&void 0!==d?d:[
      ], P=null!==(p=null===(v=null===(h=window.orgSettings)||void 0===h?void 0:h.aiPpt)||void 0===v?void 0:v.api_secret)&&void 0!==p?p:"", E=null!==(m=null===(y=null===(f=window.orgSettings)||void 0===f?void 0:f.aiPpt)||void 0===y?void 0:y.api_key)&&void 0!==m?m:"", L=(0, V.F)((function(){
        var t, e, i, n=(0, C.KR)(null!==(i=null===(e=null===(t=window.orgSettings)||void 0===t?void 0:t.aiPpt)||void 0===e?void 0:e.daily_usage_limit)&&void 0!==i?i:0), r=(0, C.KR)(0), o=(0, C.EW)((function(){
          return n.value-r.value<=0?0:n.value-r.value
        }));
        return{
          dailyUsageLimit:n, usedTimes:r, remainingTimes:o
        }
      })), R=function(){
        var t=L().usedTimes, e=function(){
          return!(D||x||!A)&&(!!/course\//.test(window.location.href)&&(!(!P||!E)&&!!function(){if(Y.every((function(t){return!t})))return!1;var t=Y.includes("student"),e=Y.includes("student_assistant");return!t&&!e}()))},i=function(i){return void 0===i&&(i=!1),T(void 0,void 0,void 0,(function(){var n,r;return k(this,(function(o){switch(o.label){case 0:return e()||i?[4,(0,S.uA)()]:[2];case 1:return n=o.sent(),t.value=null!==(r=n.counts)&&void 0!==r?r:0,localStorage.setItem("aiPptUsedTimes",t.value.toString()),[2]}}))}))},n=null;return window.addEventListener("storage",(function(e){if("aiPptUsedTimes"===e.key){var i=e.newValue;t.value=null!==i?Number(i):0}})),{enableAiPpt:e,initAiPptIframe:function(){return T(void 0,void 0,void 0,(function(){var t,e,r,o,s,a,c;return k(this,(function(u){switch(u.label){case 0:return n=null,t=null!==(s=null===(o=window.globalData)||void 0===o?void 0:o.user.userNo)&&void 0!==s?s:null===(c=null===(a=window.orgSettings)||void 0===a?void 0:a.aiPpt)||void 0===c?void 0:c.uid,[4,w().get("https://co.aippt.cn/api/grant/code?uid=".concat(t,"&channel="),{headers:(l=Math.floor((new Date).getTime()/1e3),d="GET@/api/grant/code/@".concat(l),h=_().HmacSHA1(d,P),v=_().enc.Base64.stringify(h),{"x-api-key":E,"x-timestamp":l,"x-signature":v})})];case 1:if(200!==(e=u.sent()).status)return[3,5];u.label=2;case 2:return u.trys.push([2,4,,5]),[4,AipptIframe.show({appkey:e.data.data.api_key,routerOptions:{list:["generate","editor"]},channel:"",code:e.data.data.code,onMessage:function(t,e){console.log(t,e),"CHARGING"===t&&e.charge&&T(void 0,void 0,void 0,(function(){return k(this,(function(t){switch(t.label){case 0:return[4,(0,S.cl)()];case 1:return t.sent()&&i(!0),[2]}}))}))}})];case 3:return u.sent(),n||(n=setInterval((function(){document.getElementById("aippt-iframe-modal")||(clearInterval(n),window.close(),document.body.style.overflow="auto")}),1e3)),document.getElementById("aippt-iframe-modal")&&(document.getElementById("aippt-iframe-modal").style.zIndex="2000",document.body.style.overflow="hidden"),[3,5];case 4:return r=u.sent(),console.error(r),[3,5];case 5:return[2]}var l,d,h,v}))}))},initUsage:i}}},981355:(t,e,i)=>{i.d(e,{A:()=>l});i(540590),i(418665),i(269193),i(868329),i(14602);var n=i(595738),r=i(552979),o=i(366875),s=i(248124),a=function(t,e,i,n){return new(i||(i=Promise))((function(r,o){function s(t){try{c(n.next(t))}catch(t){o(t)}}function a(t){try{c(n.throw(t))}catch(t){o(t)}}function c(t){var e;t.done?r(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(s,a)}c((n=n.apply(t,e||[])).next())}))},c=function(t,e){var i,n,r,o,s={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(a){return function(c){return function(a){if(i)throw new TypeError("Generator is already executing.");for(;o&&(o=0,a[0]&&(s=0)),s;)try{if(i=1,n&&(r=2&a[0]?n.return:a[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,a[1])).done)return r;switch(n=0,r&&(a=[2&a[0],r.value]),a[0]){case 0:case 1:r=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,n=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!(r=s.trys,(r=r.length>0&&r[r.length-1])||6!==a[0]&&2!==a[0])){s=0;continue}if(3===a[0]&&(!r||a[1]>r[0]&&a[1]<r[3])){s.label=a[1];break}if(6===a[0]&&s.label<r[1]){s.label=r[1],r=a;break}if(r&&s.label<r[2]){s.label=r[2],s.ops.push(a);break}r[2]&&s.ops.pop(),s.trys.pop();continue}a=e.call(t,s)}catch(t){a=[6,t],n=0}finally{i=r=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}};const u=(0,n.pM)({props:{show:{type:Boolean,default:!1},courseName:{type:String,default:""},courseId:{type:Number}},setup:function(t){var e,i,u,l=this,d=Number(null!==(i=null!==(e=s("#courseId").val())&&void 0!==e?e:t.courseId)&&void 0!==i?i:0),h=(0,n.KR)(!0),v="[".concat(r.default.t("coursePackage.name"),"]").concat(t.courseName),p=(0,n.Kh)({name:v}),f={name:[{required:!0,validator:function(t,e,i){""===e.trim()?i(new Error(r.default.t("required_field"))):i()}}]},y=(0,n.KR)(),m=function(){var t=document.querySelector("export-course-package-modal");t&&(t.show=!1)},g=function(){return a(l,void 0,void 0,(function(){var t,e;return c(this,(function(i){switch(i.label){case 0:return[4,(0,o.pD)(d)];case 1:return t=i.sent(),h.value=t,!h.value&&u&&(window.clearInterval(u),u=void 0,e=new CustomEvent("export-course-package-status-change"),window.dispatchEvent(e)),[2]}}))}))};return(0,n.sV)((function(){return a(l,void 0,void 0,(function(){return c(this,(function(t){switch(t.label){case 0:return[4,g()];case 1:return t.sent(),h.value&&(u=window.setInterval(g,1500)),[2]}}))}))})),(0,n.xo)((function(){u&&(window.clearInterval(u),u=void 0)})),{close:m,submit:function(){return a(l,void 0,void 0,(function(){var t;return c(this,(function(e){switch(e.label){case 0:return h.value?(m(),[2]):y.value?[4,y.value.validate()]:[2];case 1:return e.sent()?[4,(0,o.A8)(d,{name:p.name})]:[3,3];case 2:e.sent(),h.value=!0,t=new CustomEvent("export-course-package-status-change"),window.dispatchEvent(t),u||(u=window.setInterval(g,1500)),m(),e.label=3;case 3:return[2]}}))}))},visibleChange:function(t){return a(l,void 0,void 0,(function(){return c(this,(function(e){return t?(y.value&&(y.value.resetFields(),p.name=v),[2]):(m(),[2])}))}))},form:p,formRef:y,rules:f,processing:h}}});const l=(0,i(514486).A)(u,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("Modal",{attrs:{value:t.show,title:t.$t("coursePackage.make")},on:{"on-visible-change":t.visibleChange}},[t.processing?i("div",[t._v(t._s(t.$t("coursePackage.processing")))]):i("Form",{ref:"formRef",attrs:{model:t.form,rules:t.rules}},[i("FormItem",{attrs:{label:t.$t("coursePackage.searchPlaceholder"),prop:"name"}},[i("Input",{model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1)],1),t._v(" "),i("template",{slot:"footer"},[i("Button",{on:{click:t.close}},[t._v(t._s(t.$t("cancel")))]),t._v(" "),i("Button",{staticStyle:{"margin-right":"10px"},attrs:{type:"primary"},on:{click:t.submit}},[t._v(t._s(t.$t("confirm")))])],1)],2)}),[],!1,null,"72857e16",null).exports}}]);
