(self.webpackChunklms=self.webpackChunklms||[
]).push([
  [
    53, 1104, 11580, 33961, 44437, 56342, 66818, 89199
  ], {
    9957:(e, t, r)=>{
      var o=Function.prototype.call, n=Object.prototype.hasOwnProperty, i=r(863639);
      e.exports=i.call(o, n)
    }, 35345:e=>{
      e.exports=URIError
    }, 39609:e=>{
      var t="Function.prototype.bind called on incompatible ", r=Object.prototype.toString, o=Math.max, n="[object Function]", i=function(e, t){
        for(var r=[
        ], o=0;
        o<e.length;
        o+=1)r[
          o
        ]
        =e[
          o
        ];
        for(var n=0;
        n<t.length;
        n+=1)r[
          n+e.length
        ]
        =t[
          n
        ];
        return r
      }, a=function(e, t){
        for(var r=[
        ], o=t||0, n=0;
        o<e.length;
        o+=1, n+=1)r[
          n
        ]
        =e[
          o
        ];
        return r
      }, l=function(e, t){
        for(var r="", o=0;
        o<e.length;
        o+=1)r+=e[
          o
        ], o+1<e.length&&(r+=t);
        return r
      };
      e.exports=function(e){
        var c=this;
        if("function"!=typeof c||r.apply(c)!==n)throw new TypeError(t+c);
        for(var u, s=a(arguments, 1), T=function(){
          if(this instanceof u){
            var t=c.apply(this, i(s, arguments));
            return Object(t)===t?t:this
          }
          return c.apply(e, i(s, arguments))
        }, p=o(0, c.length-s.length), f=[
        ], S=0;
        S<p;
        S++)f[
          S
        ]
        ="$"+S;
        if(u=Function("binder", "return function ("+l(f, ",")+"){ return binder.apply(this,arguments); }")(T), c.prototype){
          var b=function(){
          };
          b.prototype=c.prototype, u.prototype=new b, b.prototype=null
        }
        return u
      }
    }, 58457:function(e){
      e.exports=function(){
        function e(t){
          return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){
            return typeof e
          }
          :function(e){
            return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e
          })(t)
        }
        function t(e, t){
          if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")
        }
        function r(e, t){
          for(var r=0;
          r<t.length;
          r++){
            var o=t[
              r
            ];
            o.enumerable=o.enumerable||!1, o.configurable=!0, "value"in o&&(o.writable=!0), Object.defineProperty(e, o.key, o)
          }
        }
        function o(e, t, o){
          t&&r(e.prototype, t), o&&r(e, o), Object.defineProperty(e, "prototype", {
            writable:!1
          })
        }
        function n(e, t, r){
          t in e?Object.defineProperty(e, t, {
            value:r, enumerable:!0, configurable:!0, writable:!0
          }):e[
            t
          ]
          =r
        }
        function i(e, t){
          if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");
          e.prototype=Object.create(t&&t.prototype, {
            constructor:{
              value:e, writable:!0, configurable:!0
            }
          }), Object.defineProperty(e, "prototype", {
            writable:!1
          }), t&&l(e, t)
        }
        function a(e){
          return(a=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){
            return e.__proto__||Object.getPrototypeOf(e)
          })(e)
        }
        function l(e, t){
          return(l=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e, t){
            return e.__proto__=t, e
          })(e, t)
        }
        function c(e, t){
          if(t&&("object"==typeof t||"function"==typeof t))return t;
          if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");
          if(void 0===(t=e))throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t
        }
        function u(e){
          var t=function(){
            if("undefined"==typeof Reflect||!Reflect.construct)return!1;
            if(Reflect.construct.sham)return!1;
            if("function"==typeof Proxy)return!0;
            try{
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [
              ], (function(){
              }))), !0
            }
            catch(e){
              return!1
            }
          }
          ();
          return function(){
            var r, o=a(e);
            return c(this, t?(r=a(this).constructor, Reflect.construct(o, arguments, r)):o.apply(this, arguments))
          }
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
        function T(e, t){
          var r, o="undefined"!=typeof Symbol&&e[
            Symbol.iterator
          ]
          ||e[
            "@@iterator"
          ];
          if(!o){
            if(Array.isArray(e)||(o=function(e, t){
              if(e){
                if("string"==typeof e)return s(e, t);
                var r=Object.prototype.toString.call(e).slice(8, -1);
                return"Map"===(r="Object"===r&&e.constructor?e.constructor.name:r)||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?s(e, t):void 0
              }
            }
            (e))||t&&e&&"number"==typeof e.length)return o&&(e=o), r=0, {
              s:t=function(){
              }, n:function(){
                return r>=e.length?{
                  done:!0
                }
                :{
                  done:!1, value:e[
                    r++
                  ]
                }
              }, e:function(e){
                throw e
              }, f:t
            };
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
          }
          var n, i=!0, a=!1;
          return{
            s:function(){
              o=o.call(e)
            }, n:function(){
              var e=o.next();
              return i=e.done, e
            }, e:function(e){
              a=!0, n=e
            }, f:function(){
              try{
                i||null==o.return||o.return()
              }
              finally{
                if(a)throw n
              }
            }
          }
        }
        function p(){
          if(f.url)window.location.href=f.url;
          else if(f.rewriteHTML)try{
            document.documentElement.innerHTML=f.rewriteHTML
          }
          catch(e){
            document.documentElement.innerText=f.rewriteHTML
          }
          else{
            try{
              window.opener=null, window.open("", "_self"), window.close(), window.history.back()
            }
            catch(e){
              console.log(e)
            }
            setTimeout((function(){
              window.location.href=f.timeOutUrl||"https://theajack.github.io/disable-devtool/404.html?h=".concat(encodeURIComponent(location.host))
            }), 500)
          }
        }
        var f={
          md5:"", ondevtoolopen:p, ondevtoolclose:null, url:"", timeOutUrl:"", tkName:"ddtk", interval:500, disableMenu:!0, stopIntervalTime:5e3, clearIntervalWhenDevOpenTrigger:!1, detectors:[
            0, 1, 3, 4, 5, 6, 7
          ], clearLog:!0, disableSelect:!1, disableCopy:!1, disableCut:!1, disablePaste:!1, ignore:null, disableIframeParents:!0, seo:!0, rewriteHTML:""
        }, S=[
          "detectors", "ondevtoolclose", "ignore"
        ];
        function b(t){
          var r, o=0<arguments.length&&void 0!==t?t:{
          };
          for(r in f){
            var n=r;
            void 0===o[
              n
            ]
            ||e(f[
              n
            ])!==e(o[
              n
            ])&&-1===S.indexOf(n)||(f[
              n
            ]
            =o[
              n
            ])
          }
          "function"==typeof f.ondevtoolclose&&!0===f.clearIntervalWhenDevOpenTrigger&&(f.clearIntervalWhenDevOpenTrigger=!1, console.warn("【DISABLE-DEVTOOL】clearIntervalWhenDevOpenTrigger 在使用 ondevtoolclose 时无效"))
        }
        function y(){
          return(new Date).getTime()
        }
        function d(e){
          var t=y();
          return e(), y()-t
        }
        function A(e, t){
          function r(r){
            return function(){
              e&&e();
              var o=r.apply(void 0, arguments);
              return t&&t(), o
            }
          }
          var o=window.alert, n=window.confirm, i=window.prompt;
          try{
            window.alert=r(o), window.confirm=r(n), window.prompt=r(i)
          }
          catch(r){
          }
        }
        var P={
          iframe:!1, pc:!1, qqBrowser:!1, firefox:!1, macos:!1, edge:!1, oldEdge:!1, ie:!1, iosChrome:!1, iosEdge:!1, chrome:!1, seoBot:!1, mobile:!1
        };
        function M(){
          function e(e){
            return-1!==t.indexOf(e)
          }
          var t=navigator.userAgent.toLowerCase(), r=function(){
            var e, t=(e=navigator).platform;
            if("number"==typeof(e=e.maxTouchPoints))return 1<e;
            if("string"==typeof t){
              if(e=t.toLowerCase(), /(mac|win)/i.test(e))return!1;
              if(/(android|iphone|ipad|ipod|arch)/i.test(e))return!0
            }
            return/(iphone|ipad|ipod|ios|android)/i.test(navigator.userAgent.toLowerCase())
          }
          (), o=!!window.top&&window!==window.top, n=!r, i=e("qqbrowser"), a=e("firefox"), l=e("macintosh"), c=e("edge"), u=c&&!e("chrome"), s=u||e("trident")||e("msie"), T=e("crios"), p=e("edgios"), f=e("chrome")||T, S=!r&&/(googlebot|baiduspider|bingbot|applebot|petalbot|yandexbot|bytespider|chrome\-lighthouse|moto g power)/i.test(t);
          Object.assign(P, {
            iframe:o, pc:n, qqBrowser:i, firefox:a, macos:l, edge:c, oldEdge:u, ie:s, iosChrome:T, iosEdge:p, chrome:f, seoBot:S, mobile:r
          })
        }
        function h(){
          for(var e=function(){
            for(var e={
            }, t=0;
            t<500;
            t++)e[
              "".concat(t)
            ]
            ="".concat(t);
            return e
          }
          (), t=[
          ], r=0;
          r<50;
          r++)t.push(e);
          return t
        }
        var G, m, v, g=window.console||{
          log:function(){
          }, table:function(){
          }, clear:function(){
          }
        };
        function B(){
          f.clearLog&&v()
        }
        var w="", E=!1;
        function H(){
          var e=f.ignore;
          if(e){
            if("function"==typeof e)return e();
            if(0!==e.length){
              var t=location.href;
              if(w===t)return E;
              w=t;
              var r, o=!1, n=T(e);
              try{
                for(n.s();
                !(r=n.n()).done;
                ){
                  var i=r.value;
                  if("string"==typeof i){
                    if(-1!==t.indexOf(i)){
                      o=!0;
                      break
                    }
                  }
                  else if(i.test(t)){
                    o=!0;
                    break
                  }
                }
              }
              catch(e){
                n.e(e)
              }
              finally{
                n.f()
              }
              return E=o
            }
          }
        }
        var C=function(){
          return!1
        };
        function I(e){
          var t, r, o=74, n=73, i=85, a=83, l=123, c=P.macos?function(e, t){
            return e.metaKey&&e.altKey&&(t===n||t===o)
          }
          :function(e, t){
            return e.ctrlKey&&e.shiftKey&&(t===n||t===o)
          }, u=P.macos?function(e, t){
            return e.metaKey&&e.altKey&&t===i||e.metaKey&&t===a
          }
          :function(e, t){
            return e.ctrlKey&&(t===a||t===i)
          };
          e.addEventListener("keydown", (function(t){
            var r=(t=t||e.event).keyCode||t.which;
            if(r===l||c(t, r)||u(t, r))return O(e, t)
          }), !0), t=e, f.disableMenu&&t.addEventListener("contextmenu", (function(e){
            if("touch"!==e.pointerType)return O(t, e)
          })), r=e, f.disableSelect&&D(r, "selectstart"), r=e, f.disableCopy&&D(r, "copy"), r=e, f.disableCut&&D(r, "cut"), r=e, f.disablePaste&&D(r, "paste")
        }
        function D(e, t){
          e.addEventListener(t, (function(t){
            return O(e, t)
          }))
        }
        function O(e, t){
          if(!H()&&!C())return(t=t||e.event).returnValue=!1, t.preventDefault(), !1
        }
        var R, N=!1, L={
        };
        function V(e){
          L[
            e
          ]
          =!1
        }
        function x(){
          for(var e in L)if(L[
            e
          ])return N=!0;
          return N=!1
        }
        (te=R=R||{
        })[
          te.Unknown=-1
        ]
        ="Unknown", te[
          te.RegToString=0
        ]
        ="RegToString", te[
          te.DefineId=1
        ]
        ="DefineId", te[
          te.Size=2
        ]
        ="Size", te[
          te.DateToString=3
        ]
        ="DateToString", te[
          te.FuncToString=4
        ]
        ="FuncToString", te[
          te.Debugger=5
        ]
        ="Debugger", te[
          te.Performance=6
        ]
        ="Performance", te[
          te.DebugLib=7
        ]
        ="DebugLib";
        var F=function(){
          function e(r){
            var o=r.type;
            r=void 0===(r=r.enabled)||r, t(this, e), this.type=R.Unknown, this.enabled=!0, this.type=o, this.enabled=r, this.enabled&&(o=this, U.push(o), this.init())
          }
          return o(e, [
            {
              key:"onDevToolOpen", value:function(){
                var e;
                console.warn("You don't have permission to use DEVTOOL!【type = ".concat(this.type, "】")), f.clearIntervalWhenDevOpenTrigger&&K(), window.clearTimeout(W), f.ondevtoolopen(this.type, p), e=this.type, L[
                  e
                ]
                =!0
              }
            }, {
              key:"init", value:function(){
              }
            }
          ]), e
        }
        (), k=function(){
          i(r, F);
          var e=u(r);
          function r(){
            return t(this, r), e.call(this, {
              type:R.DebugLib
            })
          }
          return o(r, [
            {
              key:"init", value:function(){
              }
            }, {
              key:"detect", value:function(){
                var e;
                (!0===(null==(e=null==(e=window.eruda)?void 0:e._devTools)?void 0:e._isShow)||window._vcOrigConsole&&window.document.querySelector("#__vconsole.vc-toggle"))&&this.onDevToolOpen()
              }
            }
          ], [
            {
              key:"isUsing", value:function(){
                return!!window.eruda||!!window._vcOrigConsole
              }
            }
          ]), r
        }
        (), X=0, W=0, U=[
        ], j=0;
        function _(e){
          function t(){
            u=!0
          }
          function r(){
            u=!1
          }
          var o, n, i, a, l, c, u=!1;
          function s(){
            (c[
              a
            ]
            ===i?n:o)()
          }
          A(t, r), o=r, n=t, void 0!==(c=document).hidden?(i="hidden", l="visibilitychange", a="visibilityState"):void 0!==c.mozHidden?(i="mozHidden", l="mozvisibilitychange", a="mozVisibilityState"):void 0!==c.msHidden?(i="msHidden", l="msvisibilitychange", a="msVisibilityState"):void 0!==c.webkitHidden&&(i="webkitHidden", l="webkitvisibilitychange", a="webkitVisibilityState"), c.removeEventListener(l, s, !1), c.addEventListener(l, s, !1), X=window.setInterval((function(){
            if(!(e.isSuspend||u||H())){
              var t, r, o=T(U);
              try{
                for(o.s();
                !(t=o.n()).done;
                ){
                  var n=t.value;
                  V(n.type), n.detect(j++)
                }
              }
              catch(t){
                o.e(t)
              }
              finally{
                o.f()
              }
              B(), "function"==typeof f.ondevtoolclose&&(r=N, !x()&&r&&f.ondevtoolclose())
            }
          }), f.interval), W=setTimeout((function(){
            P.pc||k.isUsing()||K()
          }), f.stopIntervalTime)
        }
        function K(){
          window.clearInterval(X)
        }
        var Q=8;
        function Y(e){
          for(var t=function(e, t){
            e[
              t>>5
            ]
            |=128<<t%32, e[
              14+(t+64>>>9<<4)
            ]
            =t;
            for(var r=1732584193, o=-271733879, n=-1732584194, i=271733878, a=0;
            a<e.length;
            a+=16){
              var l=r, c=o, u=n, s=i;
              r=J(r, o, n, i, e[
                a+0
              ], 7, -680876936), i=J(i, r, o, n, e[
                a+1
              ], 12, -389564586), n=J(n, i, r, o, e[
                a+2
              ], 17, 606105819), o=J(o, n, i, r, e[
                a+3
              ], 22, -1044525330), r=J(r, o, n, i, e[
                a+4
              ], 7, -176418897), i=J(i, r, o, n, e[
                a+5
              ], 12, 1200080426), n=J(n, i, r, o, e[
                a+6
              ], 17, -1473231341), o=J(o, n, i, r, e[
                a+7
              ], 22, -45705983), r=J(r, o, n, i, e[
                a+8
              ], 7, 1770035416), i=J(i, r, o, n, e[
                a+9
              ], 12, -1958414417), n=J(n, i, r, o, e[
                a+10
              ], 17, -42063), o=J(o, n, i, r, e[
                a+11
              ], 22, -1990404162), r=J(r, o, n, i, e[
                a+12
              ], 7, 1804603682), i=J(i, r, o, n, e[
                a+13
              ], 12, -40341101), n=J(n, i, r, o, e[
                a+14
              ], 17, -1502002290), r=Z(r, o=J(o, n, i, r, e[
                a+15
              ], 22, 1236535329), n, i, e[
                a+1
              ], 5, -165796510), i=Z(i, r, o, n, e[
                a+6
              ], 9, -1069501632), n=Z(n, i, r, o, e[
                a+11
              ], 14, 643717713), o=Z(o, n, i, r, e[
                a+0
              ], 20, -373897302), r=Z(r, o, n, i, e[
                a+5
              ], 5, -701558691), i=Z(i, r, o, n, e[
                a+10
              ], 9, 38016083), n=Z(n, i, r, o, e[
                a+15
              ], 14, -660478335), o=Z(o, n, i, r, e[
                a+4
              ], 20, -405537848), r=Z(r, o, n, i, e[
                a+9
              ], 5, 568446438), i=Z(i, r, o, n, e[
                a+14
              ], 9, -1019803690), n=Z(n, i, r, o, e[
                a+3
              ], 14, -187363961), o=Z(o, n, i, r, e[
                a+8
              ], 20, 1163531501), r=Z(r, o, n, i, e[
                a+13
              ], 5, -1444681467), i=Z(i, r, o, n, e[
                a+2
              ], 9, -51403784), n=Z(n, i, r, o, e[
                a+7
              ], 14, 1735328473), r=q(r, o=Z(o, n, i, r, e[
                a+12
              ], 20, -1926607734), n, i, e[
                a+5
              ], 4, -378558), i=q(i, r, o, n, e[
                a+8
              ], 11, -2022574463), n=q(n, i, r, o, e[
                a+11
              ], 16, 1839030562), o=q(o, n, i, r, e[
                a+14
              ], 23, -35309556), r=q(r, o, n, i, e[
                a+1
              ], 4, -1530992060), i=q(i, r, o, n, e[
                a+4
              ], 11, 1272893353), n=q(n, i, r, o, e[
                a+7
              ], 16, -155497632), o=q(o, n, i, r, e[
                a+10
              ], 23, -1094730640), r=q(r, o, n, i, e[
                a+13
              ], 4, 681279174), i=q(i, r, o, n, e[
                a+0
              ], 11, -358537222), n=q(n, i, r, o, e[
                a+3
              ], 16, -722521979), o=q(o, n, i, r, e[
                a+6
              ], 23, 76029189), r=q(r, o, n, i, e[
                a+9
              ], 4, -640364487), i=q(i, r, o, n, e[
                a+12
              ], 11, -421815835), n=q(n, i, r, o, e[
                a+15
              ], 16, 530742520), r=$(r, o=q(o, n, i, r, e[
                a+2
              ], 23, -995338651), n, i, e[
                a+0
              ], 6, -198630844), i=$(i, r, o, n, e[
                a+7
              ], 10, 1126891415), n=$(n, i, r, o, e[
                a+14
              ], 15, -1416354905), o=$(o, n, i, r, e[
                a+5
              ], 21, -57434055), r=$(r, o, n, i, e[
                a+12
              ], 6, 1700485571), i=$(i, r, o, n, e[
                a+3
              ], 10, -1894986606), n=$(n, i, r, o, e[
                a+10
              ], 15, -1051523), o=$(o, n, i, r, e[
                a+1
              ], 21, -2054922799), r=$(r, o, n, i, e[
                a+8
              ], 6, 1873313359), i=$(i, r, o, n, e[
                a+15
              ], 10, -30611744), n=$(n, i, r, o, e[
                a+6
              ], 15, -1560198380), o=$(o, n, i, r, e[
                a+13
              ], 21, 1309151649), r=$(r, o, n, i, e[
                a+4
              ], 6, -145523070), i=$(i, r, o, n, e[
                a+11
              ], 10, -1120210379), n=$(n, i, r, o, e[
                a+2
              ], 15, 718787259), o=$(o, n, i, r, e[
                a+9
              ], 21, -343485551), r=ee(r, l), o=ee(o, c), n=ee(n, u), i=ee(i, s)
            }
            return Array(r, o, n, i)
          }
          (function(e){
            for(var t=Array(), r=(1<<Q)-1, o=0;
            o<e.length*Q;
            o+=Q)t[
              o>>5
            ]
            |=(e.charCodeAt(o/Q)&r)<<o%32;
            return t
          }
          (e), e.length*Q), r="0123456789abcdef", o="", n=0;
          n<4*t.length;
          n++)o+=r.charAt(t[
            n>>2
          ]
          >>n%4*8+4&15)+r.charAt(t[
            n>>2
          ]
          >>n%4*8&15);
          return o
        }
        function z(e, t, r, o, n, i){
          return ee((t=ee(ee(t, e), ee(o, i)))<<n|t>>>32-n, r)
        }
        function J(e, t, r, o, n, i, a){
          return z(t&r|~t&o, e, t, n, i, a)
        }
        function Z(e, t, r, o, n, i, a){
          return z(t&o|r&~o, e, t, n, i, a)
        }
        function q(e, t, r, o, n, i, a){
          return z(t^r^o, e, t, n, i, a)
        }
        function $(e, t, r, o, n, i, a){
          return z(r^(t|~o), e, t, n, i, a)
        }
        function ee(e, t){
          var r=(65535&e)+(65535&t);
          return(e>>16)+(t>>16)+(r>>16)<<16|65535&r
        }
        var te=function(){
          i(r, F);
          var e=u(r);
          function r(){
            return t(this, r), e.call(this, {
              type:R.RegToString, enabled:P.qqBrowser||P.firefox
            })
          }
          return o(r, [
            {
              key:"init", value:function(){
                var e=this;
                this.lastTime=0, this.reg=/./, G(this.reg), this.reg.toString=function(){
                  var t;
                  return P.qqBrowser?(t=(new Date).getTime(), e.lastTime&&t-e.lastTime<100?e.onDevToolOpen():e.lastTime=t):P.firefox&&e.onDevToolOpen(), ""
                }
              }
            }, {
              key:"detect", value:function(){
                G(this.reg)
              }
            }
          ]), r
        }
        (), re=function(){
          i(r, F);
          var e=u(r);
          function r(){
            return t(this, r), e.call(this, {
              type:R.DefineId
            })
          }
          return o(r, [
            {
              key:"init", value:function(){
                var e=this;
                this.div=document.createElement("div"), this.div.__defineGetter__("id", (function(){
                  e.onDevToolOpen()
                })), Object.defineProperty(this.div, "id", {
                  get:function(){
                    e.onDevToolOpen()
                  }
                })
              }
            }, {
              key:"detect", value:function(){
                G(this.div)
              }
            }
          ]), r
        }
        (), oe=function(){
          i(r, F);
          var e=u(r);
          function r(){
            return t(this, r), e.call(this, {
              type:R.Size, enabled:!P.iframe&&!P.edge
            })
          }
          return o(r, [
            {
              key:"init", value:function(){
                var e=this;
                this.checkWindowSizeUneven(), window.addEventListener("resize", (function(){
                  setTimeout((function(){
                    e.checkWindowSizeUneven()
                  }), 100)
                }), !0)
              }
            }, {
              key:"detect", value:function(){
              }
            }, {
              key:"checkWindowSizeUneven", value:function(){
                if(!1!==(t=function(){
                  if(ne(window.devicePixelRatio))return window.devicePixelRatio;
                  var e=window.screen;
                  return!(ne(e)||!e.deviceXDPI||!e.logicalXDPI)&&e.deviceXDPI/e.logicalXDPI
                }
                ())){
                  var e=200<window.outerWidth-window.innerWidth*t, t=300<window.outerHeight-window.innerHeight*t;
                  if(e||t)return this.onDevToolOpen(), !1;
                  V(this.type)
                }
                return!0
              }
            }
          ]), r
        }
        ();
        function ne(e){
          return null!=e
        }
        var ie, ae=function(){
          i(r, F);
          var e=u(r);
          function r(){
            return t(this, r), e.call(this, {
              type:R.DateToString, enabled:!P.iosChrome&&!P.iosEdge
            })
          }
          return o(r, [
            {
              key:"init", value:function(){
                var e=this;
                this.count=0, this.date=new Date, this.date.toString=function(){
                  return e.count++, ""
                }
              }
            }, {
              key:"detect", value:function(){
                this.count=0, G(this.date), B(), 2<=this.count&&this.onDevToolOpen()
              }
            }
          ]), r
        }
        (), le=function(){
          i(r, F);
          var e=u(r);
          function r(){
            return t(this, r), e.call(this, {
              type:R.FuncToString, enabled:!P.iosChrome&&!P.iosEdge
            })
          }
          return o(r, [
            {
              key:"init", value:function(){
                var e=this;
                this.count=0, this.func=function(){
                }, this.func.toString=function(){
                  return e.count++, ""
                }
              }
            }, {
              key:"detect", value:function(){
                this.count=0, G(this.func), B(), 2<=this.count&&this.onDevToolOpen()
              }
            }
          ]), r
        }
        (), ce=function(){
          i(r, F);
          var e=u(r);
          function r(){
            return t(this, r), e.call(this, {
              type:R.Debugger, enabled:P.iosChrome||P.iosEdge
            })
          }
          return o(r, [
            {
              key:"detect", value:function(){
                var e=y();
                100<y()-e&&this.onDevToolOpen()
              }
            }
          ]), r
        }
        (), ue=function(){
          i(r, F);
          var e=u(r);
          function r(){
            return t(this, r), e.call(this, {
              type:R.Performance, enabled:P.chrome||!P.mobile
            })
          }
          return o(r, [
            {
              key:"init", value:function(){
                this.maxPrintTime=0, this.largeObjectArray=h()
              }
            }, {
              key:"detect", value:function(){
                var e=this, t=d((function(){
                  m(e.largeObjectArray)
                })), r=d((function(){
                  G(e.largeObjectArray)
                }));
                if(this.maxPrintTime=Math.max(this.maxPrintTime, r), B(), 0===t||0===this.maxPrintTime)return!1;
                t>10*this.maxPrintTime&&this.onDevToolOpen()
              }
            }
          ]), r
        }
        (), se=(n(ie={
        }, R.RegToString, te), n(ie, R.DefineId, re), n(ie, R.Size, oe), n(ie, R.DateToString, ae), n(ie, R.FuncToString, le), n(ie, R.Debugger, ce), n(ie, R.Performance, ue), n(ie, R.DebugLib, k), ie), Te=Object.assign((function(e){
          function t(){
            var e=0<arguments.length&&void 0!==arguments[
              0
            ]
            ?arguments[
              0
            ]
            :"";
            return{
              success:!e, reason:e
            }
          }
          if(Te.isRunning)return t("already running");
          if(M(), v=P.ie?(G=function(){
            return g.log.apply(g, arguments)
          }, m=function(){
            return g.table.apply(g, arguments)
          }, function(){
            return g.clear()
          }):(G=g.log, m=g.table, g.clear), b(e), f.md5&&Y(function(e){
            var t=window.location.search, r=window.location.hash;
            return""!==(t=""===t&&""!==r?"?".concat(r.split("?")[
              1
            ]):t)&&void 0!==t&&(r=new RegExp("(^|&)"+e+"=([^&]*)(&|$)", "i"), null!=(e=t.substr(1).match(r)))?unescape(e[
              2
            ]):""
          }
          (f.tkName))===f.md5)return t("token passed");
          if(f.seo&&P.seoBot)return t("seobot");
          Te.isRunning=!0, _(Te);
          var r=Te, o=(C=function(){
            return r.isSuspend
          }, window.top), n=window.parent;
          if(I(window), f.disableIframeParents&&o&&n&&o!==window){
            for(;
            n!==o;
            )I(n), n=n.parent;
            I(o)
          }
          return("all"===f.detectors?Object.keys(se):f.detectors).forEach((function(e){
            new se[
              e
            ]
          })), t()
        }), {
          isRunning:!1, isSuspend:!1, md5:Y, version:"0.3.7", DetectorType:R, isDevToolOpened:x
        });
        return(te=function(){
          if("undefined"==typeof window||!window.document)return null;
          var e=document.querySelector("[disable-devtool-auto]");
          if(!e)return null;
          var t=[
            "disable-menu", "disable-select", "disable-copy", "disable-cut", "disable-paste", "clear-log"
          ], r=[
            "interval"
          ], o={
          };
          return[
            "md5", "url", "tk-name", "detectors"
          ].concat(t, r).forEach((function(n){
            var i=e.getAttribute(n);
            null!==i&&(-1!==r.indexOf(n)?i=parseInt(i):-1!==t.indexOf(n)?i="false"!==i:"detector"===n&&"all"!==i&&(i=i.split(" ")), o[
              function(e){
                if(-1===e.indexOf("-"))return e;
                var t=!1;
                return e.split("").map((function(e){
                  return"-"===e?(t=!0, ""):t?(t=!1, e.toUpperCase()):e
                })).join("")
              }
              (n)
            ]
            =i)
          })), o
        }
        ())&&Te(te), Te
      }
      ()
    }, 58968:e=>{
      e.exports=Math.floor
    }, 83496:(e, t, r)=>{
      var o=r(765335), n=Math.floor;
      e.exports=Number.isInteger||function(e){
        return!o(e)&&isFinite(e)&&n(e)===e
      }
    }, 94459:e=>{
      e.exports=Number.isNaN||function(e){
        return e!=e
      }
    }, 107176:(e, t, r)=>{
      var o, n=r(373126), i=r(675795);
      try{
        o=[
        ].__proto__===Array.prototype
      }
      catch(e){
        if(!e||"object"!=typeof e||!("code"in e)||"ERR_PROTO_ACCESS"!==e.code)throw e
      }
      var a=!!o&&i&&i(Object.prototype, "__proto__"), l=Object, c=l.getPrototypeOf;
      e.exports=a&&"function"==typeof a.get?n([
        a.get
      ]):"function"==typeof c&&function(e){
        return c(null==e?e:l(e))
      }
    }, 136556:(e, t, r)=>{
      var o=r(570453), n=r(373126), i=n([
        o("%String.prototype.indexOf%")
      ]);
      e.exports=function(e, t){
        var r=o(e, !!t);
        return"function"==typeof r&&i(e, ".prototype.")>-1?n([
          r
        ]):r
      }
    }, 162642:(e, t, r)=>{
      var o=r(237720), n=Object.prototype.hasOwnProperty, i=Array.isArray, a={
        allowDots:!1, allowEmptyArrays:!1, allowPrototypes:!1, allowSparse:!1, arrayLimit:20, charset:"utf-8", charsetSentinel:!1, comma:!1, decodeDotInKeys:!1, decoder:o.decode, delimiter:"&", depth:5, duplicates:"combine", ignoreQueryPrefix:!1, interpretNumericEntities:!1, parameterLimit:1e3, parseArrays:!0, plainObjects:!1, strictDepth:!1, strictNullHandling:!1
      }, l=function(e){
        return e.replace(/&#(\d+);
        /g, (function(e, t){
          return String.fromCharCode(parseInt(t, 10))
        }))
      }, c=function(e, t){
        return e&&"string"==typeof e&&t.comma&&e.indexOf(",")>-1?e.split(","):e
      }, u=function(e, t, r, o){
        if(e){
          var i=r.allowDots?e.replace(/\.([
            ^.[
            ]
            +)/g, "[$1]"):e, a=/(\[
              [
                ^[
                  \
                ]
              ]
              *
            ])/g, l=r.depth>0&&/(\[
              [
                ^[
                  \
                ]
              ]
              *
            ])/.exec(i), u=l?i.slice(0, l.index):i, s=[
            ];
            if(u){
              if(!r.plainObjects&&n.call(Object.prototype, u)&&!r.allowPrototypes)return;
              s.push(u)
            }
            for(var T=0;
            r.depth>0&&null!==(l=a.exec(i))&&T<r.depth;
            ){
              if(T+=1, !r.plainObjects&&n.call(Object.prototype, l[
                1
              ].slice(1, -1))&&!r.allowPrototypes)return;
              s.push(l[
                1
              ])
            }
            if(l){
              if(!0===r.strictDepth)throw new RangeError("Input depth exceeded depth option of "+r.depth+" and strictDepth is true");
              s.push("["+i.slice(l.index)+"]")
            }
            return function(e, t, r, o){
              for(var n=o?t:c(t, r), i=e.length-1;
              i>=0;
              --i){
                var a, l=e[
                  i
                ];
                if("[]"===l&&r.parseArrays)a=r.allowEmptyArrays&&(""===n||r.strictNullHandling&&null===n)?[
                ]
                :[
                ].concat(n);
                else{
                  a=r.plainObjects?Object.create(null):{
                  };
                  var u="["===l.charAt(0)&&"]"===l.charAt(l.length-1)?l.slice(1, -1):l, s=r.decodeDotInKeys?u.replace(/%2E/g, "."):u, T=parseInt(s, 10);
                  r.parseArrays||""!==s?!isNaN(T)&&l!==s&&String(T)===s&&T>=0&&r.parseArrays&&T<=r.arrayLimit?(a=[
                  ])[
                    T
                  ]
                  =n:"__proto__"!==s&&(a[
                    s
                  ]
                  =n):a={
                    0:n
                  }
                }
                n=a
              }
              return n
            }
            (s, t, r, o)
          }
        };
        e.exports=function(e, t){
          var r=function(e){
            if(!e)return a;
            if(void 0!==e.allowEmptyArrays&&"boolean"!=typeof e.allowEmptyArrays)throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
            if(void 0!==e.decodeDotInKeys&&"boolean"!=typeof e.decodeDotInKeys)throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");
            if(null!==e.decoder&&void 0!==e.decoder&&"function"!=typeof e.decoder)throw new TypeError("Decoder has to be a function.");
            if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
            var t=void 0===e.charset?a.charset:e.charset, r=void 0===e.duplicates?a.duplicates:e.duplicates;
            if("combine"!==r&&"first"!==r&&"last"!==r)throw new TypeError("The duplicates option must be either combine, first, or last");
            return{
              allowDots:void 0===e.allowDots?!0===e.decodeDotInKeys||a.allowDots:!!e.allowDots, allowEmptyArrays:"boolean"==typeof e.allowEmptyArrays?!!e.allowEmptyArrays:a.allowEmptyArrays, allowPrototypes:"boolean"==typeof e.allowPrototypes?e.allowPrototypes:a.allowPrototypes, allowSparse:"boolean"==typeof e.allowSparse?e.allowSparse:a.allowSparse, arrayLimit:"number"==typeof e.arrayLimit?e.arrayLimit:a.arrayLimit, charset:t, charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:a.charsetSentinel, comma:"boolean"==typeof e.comma?e.comma:a.comma, decodeDotInKeys:"boolean"==typeof e.decodeDotInKeys?e.decodeDotInKeys:a.decodeDotInKeys, decoder:"function"==typeof e.decoder?e.decoder:a.decoder, delimiter:"string"==typeof e.delimiter||o.isRegExp(e.delimiter)?e.delimiter:a.delimiter, depth:"number"==typeof e.depth||!1===e.depth?+e.depth:a.depth, duplicates:r, ignoreQueryPrefix:!0===e.ignoreQueryPrefix, interpretNumericEntities:"boolean"==typeof e.interpretNumericEntities?e.interpretNumericEntities:a.interpretNumericEntities, parameterLimit:"number"==typeof e.parameterLimit?e.parameterLimit:a.parameterLimit, parseArrays:!1!==e.parseArrays, plainObjects:"boolean"==typeof e.plainObjects?e.plainObjects:a.plainObjects, strictDepth:"boolean"==typeof e.strictDepth?!!e.strictDepth:a.strictDepth, strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:a.strictNullHandling
            }
          }
          (t);
          if(""===e||null==e)return r.plainObjects?Object.create(null):{
          };
          for(var s="string"==typeof e?function(e, t){
            var r={
              __proto__:null
            }, u=t.ignoreQueryPrefix?e.replace(/^\?/, ""):e;
            u=u.replace(/%5B/gi, "[").replace(/%5D/gi, "]");
            var s, T=t.parameterLimit===1/0?void 0:t.parameterLimit, p=u.split(t.delimiter, T), f=-1, S=t.charset;
            if(t.charsetSentinel)for(s=0;
            s<p.length;
            ++s)0===p[
              s
            ].indexOf("utf8=")&&("utf8=%E2%9C%93"===p[
              s
            ]
            ?S="utf-8":"utf8=%26%2310003%3B"===p[
              s
            ]
            &&(S="iso-8859-1"), f=s, s=p.length);
            for(s=0;
            s<p.length;
            ++s)if(s!==f){
              var b, y, d=p[
                s
              ], A=d.indexOf("]="), P=-1===A?d.indexOf("="):A+1;
              -1===P?(b=t.decoder(d, a.decoder, S, "key"), y=t.strictNullHandling?null:""):(b=t.decoder(d.slice(0, P), a.decoder, S, "key"), y=o.maybeMap(c(d.slice(P+1), t), (function(e){
                return t.decoder(e, a.decoder, S, "value")
              }))), y&&t.interpretNumericEntities&&"iso-8859-1"===S&&(y=l(y)), d.indexOf("[]=")>-1&&(y=i(y)?[
                y
              ]
              :y);
              var M=n.call(r, b);
              M&&"combine"===t.duplicates?r[
                b
              ]
              =o.combine(r[
                b
              ], y):M&&"last"!==t.duplicates||(r[
                b
              ]
              =y)
            }
            return r
          }
          (e, r):e, T=r.plainObjects?Object.create(null):{
          }, p=Object.keys(s), f=0;
          f<p.length;
          ++f){
            var S=p[
              f
            ], b=u(S, s[
              S
            ], r, "string"==typeof e);
            T=o.merge(T, b, r)
          }
          return!0===r.allowSparse?T:o.compact(T)
        }
      }, 179290:e=>{
        e.exports=RangeError
      }, 185669:e=>{
        e.exports=function(){
          if("function"!=typeof Symbol||"function"!=typeof Object.getOwnPropertySymbols)return!1;
          if("symbol"==typeof Symbol.iterator)return!0;
          var e={
          }, t=Symbol("test"), r=Object(t);
          if("string"==typeof t)return!1;
          if("[object Symbol]"!==Object.prototype.toString.call(t))return!1;
          if("[object Symbol]"!==Object.prototype.toString.call(r))return!1;
          for(var o in e[
            t
          ]
          =42, e)return!1;
          if("function"==typeof Object.keys&&0!==Object.keys(e).length)return!1;
          if("function"==typeof Object.getOwnPropertyNames&&0!==Object.getOwnPropertyNames(e).length)return!1;
          var n=Object.getOwnPropertySymbols(e);
          if(1!==n.length||n[
            0
          ]
          !==t)return!1;
          if(!Object.prototype.propertyIsEnumerable.call(e, t))return!1;
          if("function"==typeof Object.getOwnPropertyDescriptor){
            var i=Object.getOwnPropertyDescriptor(e, t);
            if(42!==i.value||!0!==i.enumerable)return!1
          }
          return!0
        }
      }, 237720:(e, t, r)=>{
        var o=r(774765), n=Object.prototype.hasOwnProperty, i=Array.isArray, a=function(){
          for(var e=[
          ], t=0;
          t<256;
          ++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());
          return e
        }
        (), l=function(e, t){
          for(var r=t&&t.plainObjects?Object.create(null):{
          }, o=0;
          o<e.length;
          ++o)void 0!==e[
            o
          ]
          &&(r[
            o
          ]
          =e[
            o
          ]);
          return r
        }, c=1024;
        e.exports={
          arrayToObject:l, assign:function(e, t){
            return Object.keys(t).reduce((function(e, r){
              return e[
                r
              ]
              =t[
                r
              ], e
            }), e)
          }, combine:function(e, t){
            return[
            ].concat(e, t)
          }, compact:function(e){
            for(var t=[
              {
                obj:{
                  o:e
                }, prop:"o"
              }
            ], r=[
            ], o=0;
            o<t.length;
            ++o)for(var n=t[
              o
            ], a=n.obj[
              n.prop
            ], l=Object.keys(a), c=0;
            c<l.length;
            ++c){
              var u=l[
                c
              ], s=a[
                u
              ];
              "object"==typeof s&&null!==s&&-1===r.indexOf(s)&&(t.push({
                obj:a, prop:u
              }), r.push(s))
            }
            return function(e){
              for(;
              e.length>1;
              ){
                var t=e.pop(), r=t.obj[
                  t.prop
                ];
                if(i(r)){
                  for(var o=[
                  ], n=0;
                  n<r.length;
                  ++n)void 0!==r[
                    n
                  ]
                  &&o.push(r[
                    n
                  ]);
                  t.obj[
                    t.prop
                  ]
                  =o
                }
              }
            }
            (t), e
          }, decode:function(e, t, r){
            var o=e.replace(/\+/g, " ");
            if("iso-8859-1"===r)return o.replace(/%[
              0-9a-f
            ]
            {
              2
            }
            /gi, unescape);
            try{
              return decodeURIComponent(o)
            }
            catch(e){
              return o
            }
          }, encode:function(e, t, r, n, i){
            if(0===e.length)return e;
            var l=e;
            if("symbol"==typeof e?l=Symbol.prototype.toString.call(e):"string"!=typeof e&&(l=String(e)), "iso-8859-1"===r)return escape(l).replace(/%u[
              0-9a-f
            ]
            {
              4
            }
            /gi, (function(e){
              return"%26%23"+parseInt(e.slice(2), 16)+"%3B"
            }));
            for(var u="", s=0;
            s<l.length;
            s+=c){
              for(var T=l.length>=c?l.slice(s, s+c):l, p=[
              ], f=0;
              f<T.length;
              ++f){
                var S=T.charCodeAt(f);
                45===S||46===S||95===S||126===S||S>=48&&S<=57||S>=65&&S<=90||S>=97&&S<=122||i===o.RFC1738&&(40===S||41===S)?p[
                  p.length
                ]
                =T.charAt(f):S<128?p[
                  p.length
                ]
                =a[
                  S
                ]
                :S<2048?p[
                  p.length
                ]
                =a[
                  192|S>>6
                ]
                +a[
                  128|63&S
                ]
                :S<55296||S>=57344?p[
                  p.length
                ]
                =a[
                  224|S>>12
                ]
                +a[
                  128|S>>6&63
                ]
                +a[
                  128|63&S
                ]
                :(f+=1, S=65536+((1023&S)<<10|1023&T.charCodeAt(f)), p[
                  p.length
                ]
                =a[
                  240|S>>18
                ]
                +a[
                  128|S>>12&63
                ]
                +a[
                  128|S>>6&63
                ]
                +a[
                  128|63&S
                ])
              }
              u+=p.join("")
            }
            return u
          }, isBuffer:function(e){
            return!(!e||"object"!=typeof e)&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))
          }, isRegExp:function(e){
            return"[object RegExp]"===Object.prototype.toString.call(e)
          }, maybeMap:function(e, t){
            if(i(e)){
              for(var r=[
              ], o=0;
              o<e.length;
              o+=1)r.push(t(e[
                o
              ]));
              return r
            }
            return t(e)
          }, merge:function e(t, r, o){
            if(!r)return t;
            if("object"!=typeof r){
              if(i(t))t.push(r);
              else{
                if(!t||"object"!=typeof t)return[
                  t, r
                ];
                (o&&(o.plainObjects||o.allowPrototypes)||!n.call(Object.prototype, r))&&(t[
                  r
                ]
                =!0)
              }
              return t
            }
            if(!t||"object"!=typeof t)return[
              t
            ].concat(r);
            var a=t;
            return i(t)&&!i(r)&&(a=l(t, o)), i(t)&&i(r)?(r.forEach((function(r, i){
              if(n.call(t, i)){
                var a=t[
                  i
                ];
                a&&"object"==typeof a&&r&&"object"==typeof r?t[
                  i
                ]
                =e(a, r, o):t.push(r)
              }
              else t[
                i
              ]
              =r
            })), t):Object.keys(r).reduce((function(t, i){
              var a=r[
                i
              ];
              return n.call(t, i)?t[
                i
              ]
              =e(t[
                i
              ], a, o):t[
                i
              ]
              =a, t
            }), a)
          }
        }
      }, 241128:(e, t, r)=>{
        var o=r(951605), n=r(689608), i=r(492612), a=r(423493), l=r(479328), c=r(762998);
        o({
          target:"Array", proto:!0
        }, {
          flat:function(){
            var e=arguments.length?arguments[
              0
            ]
            :void 0, t=i(this), r=a(t), o=c(t, 0);
            return o.length=n(o, t, t, r, 0, void 0===e?1:l(e)), o
          }
        })
      }, 269383:e=>{
        e.exports=Error
      }, 271514:e=>{
        e.exports=Math.abs
      }, 273093:(e, t, r)=>{
        var o=r(94459);
        e.exports=function(e){
          return o(e)||0===e?e:e<0?-1:1
        }
      }, 273720:(e, t, r)=>{
        var o=r(230200), n=r(845955), i=o.RangeError;
        e.exports=function(e, t){
          var r=n(e);
          if(r%t)throw i("Wrong offset");
          return r
        }
      }, 322180:(e, t, r)=>{
        var o=r(646885), n=r(372368), i=r(757849), a=r(492612), l=r(423493), c=r(179526), u=r(251898), s=r(99034), T=r(485343).aTypedArrayConstructor;
        e.exports=function(e){
          var t, r, p, f, S, b, y=i(this), d=a(e), A=arguments.length, P=A>1?arguments[
            1
          ]
          :void 0, M=void 0!==P, h=u(d);
          if(h&&!s(h))for(b=(S=c(d, h)).next, d=[
          ];
          !(f=n(b, S)).done;
          )d.push(f.value);
          for(M&&A>2&&(P=o(P, arguments[
            2
          ])), r=l(d), p=new(T(y))(r), t=0;
          r>t;
          t++)p[
            t
          ]
          =M?P(d[
            t
          ], t):d[
            t
          ];
          return p
        }
      }, 341237:e=>{
        e.exports=EvalError
      }, 358068:e=>{
        e.exports=SyntaxError
      }, 358859:(e, t, r)=>{
        var o="function"==typeof Map&&Map.prototype, n=Object.getOwnPropertyDescriptor&&o?Object.getOwnPropertyDescriptor(Map.prototype, "size"):null, i=o&&n&&"function"==typeof n.get?n.get:null, a=o&&Map.prototype.forEach, l="function"==typeof Set&&Set.prototype, c=Object.getOwnPropertyDescriptor&&l?Object.getOwnPropertyDescriptor(Set.prototype, "size"):null, u=l&&c&&"function"==typeof c.get?c.get:null, s=l&&Set.prototype.forEach, T="function"==typeof WeakMap&&WeakMap.prototype?WeakMap.prototype.has:null, p="function"==typeof WeakSet&&WeakSet.prototype?WeakSet.prototype.has:null, f="function"==typeof WeakRef&&WeakRef.prototype?WeakRef.prototype.deref:null, S=Boolean.prototype.valueOf, b=Object.prototype.toString, y=Function.prototype.toString, d=String.prototype.match, A=String.prototype.slice, P=String.prototype.replace, M=String.prototype.toUpperCase, h=String.prototype.toLowerCase, G=RegExp.prototype.test, m=Array.prototype.concat, v=Array.prototype.join, g=Array.prototype.slice, B=Math.floor, w="function"==typeof BigInt?BigInt.prototype.valueOf:null, E=Object.getOwnPropertySymbols, H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?Symbol.prototype.toString:null, C="function"==typeof Symbol&&"object"==typeof Symbol.iterator, I="function"==typeof Symbol&&Symbol.toStringTag&&(typeof Symbol.toStringTag===C||"symbol")?Symbol.toStringTag:null, D=Object.prototype.propertyIsEnumerable, O=("function"==typeof Reflect?Reflect.getPrototypeOf:Object.getPrototypeOf)||([
        ].__proto__===Array.prototype?function(e){
          return e.__proto__
        }
        :null);
        function R(e, t){
          if(e===1/0||e===-1/0||e!=e||e&&e>-1e3&&e<1e3||G.call(/e/, t))return t;
          var r=/[
            0-9
          ]
          (?=(?:[
            0-9
          ]
          {
            3
          })+(?![
            0-9
          ]))/g;
          if("number"==typeof e){
            var o=e<0?-B(-e):B(e);
            if(o!==e){
              var n=String(o), i=A.call(t, n.length+1);
              return P.call(n, r, "$&_")+"."+P.call(P.call(i, /([
                0-9
              ]
              {
                3
              })/g, "$&_"), /_$/, "")
            }
          }
          return P.call(t, r, "$&_")
        }
        var N=r(242634), L=N.custom, V=_(L)?L:null, x={
          __proto__:null, double:'"', single:"'"
        }, F={
          __proto__:null, double:/([
            "\\])/g,single:/(['\\])/g};function k(e,t,r){var o=r.quoteStyle||t,n=x[o];return n+e+n}function X(e){return P.call(String(e),/"/g, "&quot;")
          }
          function W(e){
            return!I||!("object"==typeof e&&(I in e||void 0!==e[
              I
            ]))
          }
          function U(e){
            return"[object Array]"===Y(e)&&W(e)
          }
          function j(e){
            return"[object RegExp]"===Y(e)&&W(e)
          }
          function _(e){
            if(C)return e&&"object"==typeof e&&e instanceof Symbol;
            if("symbol"==typeof e)return!0;
            if(!e||"object"!=typeof e||!H)return!1;
            try{
              return H.call(e), !0
            }
            catch(e){
            }
            return!1
          }
          e.exports=function e(t, o, n, l){
            var c=o||{
            };
            if(Q(c, "quoteStyle")&&!Q(x, c.quoteStyle))throw new TypeError('option "quoteStyle" must be "single" or "double"');
            if(Q(c, "maxStringLength")&&("number"==typeof c.maxStringLength?c.maxStringLength<0&&c.maxStringLength!==1/0:null!==c.maxStringLength))throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
            var b=!Q(c, "customInspect")||c.customInspect;
            if("boolean"!=typeof b&&"symbol"!==b)throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
            if(Q(c, "indent")&&null!==c.indent&&"\t"!==c.indent&&!(parseInt(c.indent, 10)===c.indent&&c.indent>0))throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
            if(Q(c, "numericSeparator")&&"boolean"!=typeof c.numericSeparator)throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
            var M=c.numericSeparator;
            if(void 0===t)return"undefined";
            if(null===t)return"null";
            if("boolean"==typeof t)return t?"true":"false";
            if("string"==typeof t)return J(t, c);
            if("number"==typeof t){
              if(0===t)return 1/0/t>0?"0":"-0";
              var G=String(t);
              return M?R(t, G):G
            }
            if("bigint"==typeof t){
              var B=String(t)+"n";
              return M?R(t, B):B
            }
            var E=void 0===c.depth?5:c.depth;
            if(void 0===n&&(n=0), n>=E&&E>0&&"object"==typeof t)return U(t)?"[Array]":"[Object]";
            var L=function(e, t){
              var r;
              if("\t"===e.indent)r="\t";
              else{
                if(!("number"==typeof e.indent&&e.indent>0))return null;
                r=v.call(Array(e.indent+1), " ")
              }
              return{
                base:r, prev:v.call(Array(t+1), r)
              }
            }
            (c, n);
            if(void 0===l)l=[
            ];
            else if(z(l, t)>=0)return"[Circular]";
            function F(t, r, o){
              if(r&&(l=g.call(l)).push(r), o){
                var i={
                  depth:c.depth
                };
                return Q(c, "quoteStyle")&&(i.quoteStyle=c.quoteStyle), e(t, i, n+1, l)
              }
              return e(t, c, n+1, l)
            }
            if("function"==typeof t&&!j(t)){
              var K=function(e){
                if(e.name)return e.name;
                var t=d.call(y.call(e), /^function\s*([
                  \w$
                ]
                +)/);
                if(t)return t[
                  1
                ];
                return null
              }
              (t), Z=re(t, F);
              return"[Function"+(K?": "+K:" (anonymous)")+"]"+(Z.length>0?" { "+v.call(Z, ", ")+" }":"")
            }
            if(_(t)){
              var oe=C?P.call(String(t), /^(Symbol\(.*\))_[
                ^)
              ]
              *$/, "$1"):H.call(t);
              return"object"!=typeof t||C?oe:q(oe)
            }
            if(function(e){
              if(!e||"object"!=typeof e)return!1;
              if("undefined"!=typeof HTMLElement&&e instanceof HTMLElement)return!0;
              return"string"==typeof e.nodeName&&"function"==typeof e.getAttribute
            }
            (t)){
              for(var ne="<"+h.call(String(t.nodeName)), ie=t.attributes||[
              ], ae=0;
              ae<ie.length;
              ae++)ne+=" "+ie[
                ae
              ].name+"="+k(X(ie[
                ae
              ].value), "double", c);
              return ne+=">", t.childNodes&&t.childNodes.length&&(ne+="..."), ne+="</"+h.call(String(t.nodeName))+">"
            }
            if(U(t)){
              if(0===t.length)return"[]";
              var le=re(t, F);
              return L&&!function(e){
                for(var t=0;
                t<e.length;
                t++)if(z(e[
                  t
                ], "\n")>=0)return!1;
                return!0
              }
              (le)?"["+te(le, L)+"]":"[ "+v.call(le, ", ")+" ]"
            }
            if(function(e){
              return"[object Error]"===Y(e)&&W(e)
            }
            (t)){
              var ce=re(t, F);
              return"cause"in Error.prototype||!("cause"in t)||D.call(t, "cause")?0===ce.length?"["+String(t)+"]":"{ ["+String(t)+"] "+v.call(ce, ", ")+" }":"{ ["+String(t)+"] "+v.call(m.call("[cause]: "+F(t.cause), ce), ", ")+" }"
            }
            if("object"==typeof t&&b){
              if(V&&"function"==typeof t[
                V
              ]
              &&N)return N(t, {
                depth:E-n
              });
              if("symbol"!==b&&"function"==typeof t.inspect)return t.inspect()
            }
            if(function(e){
              if(!i||!e||"object"!=typeof e)return!1;
              try{
                i.call(e);
                try{
                  u.call(e)
                }
                catch(e){
                  return!0
                }
                return e instanceof Map
              }
              catch(e){
              }
              return!1
            }
            (t)){
              var ue=[
              ];
              return a&&a.call(t, (function(e, r){
                ue.push(F(r, t, !0)+" => "+F(e, t))
              })), ee("Map", i.call(t), ue, L)
            }
            if(function(e){
              if(!u||!e||"object"!=typeof e)return!1;
              try{
                u.call(e);
                try{
                  i.call(e)
                }
                catch(e){
                  return!0
                }
                return e instanceof Set
              }
              catch(e){
              }
              return!1
            }
            (t)){
              var se=[
              ];
              return s&&s.call(t, (function(e){
                se.push(F(e, t))
              })), ee("Set", u.call(t), se, L)
            }
            if(function(e){
              if(!T||!e||"object"!=typeof e)return!1;
              try{
                T.call(e, T);
                try{
                  p.call(e, p)
                }
                catch(e){
                  return!0
                }
                return e instanceof WeakMap
              }
              catch(e){
              }
              return!1
            }
            (t))return $("WeakMap");
            if(function(e){
              if(!p||!e||"object"!=typeof e)return!1;
              try{
                p.call(e, p);
                try{
                  T.call(e, T)
                }
                catch(e){
                  return!0
                }
                return e instanceof WeakSet
              }
              catch(e){
              }
              return!1
            }
            (t))return $("WeakSet");
            if(function(e){
              if(!f||!e||"object"!=typeof e)return!1;
              try{
                return f.call(e), !0
              }
              catch(e){
              }
              return!1
            }
            (t))return $("WeakRef");
            if(function(e){
              return"[object Number]"===Y(e)&&W(e)
            }
            (t))return q(F(Number(t)));
            if(function(e){
              if(!e||"object"!=typeof e||!w)return!1;
              try{
                return w.call(e), !0
              }
              catch(e){
              }
              return!1
            }
            (t))return q(F(w.call(t)));
            if(function(e){
              return"[object Boolean]"===Y(e)&&W(e)
            }
            (t))return q(S.call(t));
            if(function(e){
              return"[object String]"===Y(e)&&W(e)
            }
            (t))return q(F(String(t)));
            if("undefined"!=typeof window&&t===window)return"{ [object Window] }";
            if("undefined"!=typeof globalThis&&t===globalThis||void 0!==r.g&&t===r.g)return"{ [object globalThis] }";
            if(!function(e){
              return"[object Date]"===Y(e)&&W(e)
            }
            (t)&&!j(t)){
              var Te=re(t, F), pe=O?O(t)===Object.prototype:t instanceof Object||t.constructor===Object, fe=t instanceof Object?"":"null prototype", Se=!pe&&I&&Object(t)===t&&I in t?A.call(Y(t), 8, -1):fe?"Object":"", be=(pe||"function"!=typeof t.constructor?"":t.constructor.name?t.constructor.name+" ":"")+(Se||fe?"["+v.call(m.call([
              ], Se||[
              ], fe||[
              ]), ": ")+"] ":"");
              return 0===Te.length?be+"{}":L?be+"{"+te(Te, L)+"}":be+"{ "+v.call(Te, ", ")+" }"
            }
            return String(t)
          };
          var K=Object.prototype.hasOwnProperty||function(e){
            return e in this
          };
          function Q(e, t){
            return K.call(e, t)
          }
          function Y(e){
            return b.call(e)
          }
          function z(e, t){
            if(e.indexOf)return e.indexOf(t);
            for(var r=0, o=e.length;
            r<o;
            r++)if(e[
              r
            ]
            ===t)return r;
            return-1
          }
          function J(e, t){
            if(e.length>t.maxStringLength){
              var r=e.length-t.maxStringLength, o="... "+r+" more character"+(r>1?"s":"");
              return J(A.call(e, 0, t.maxStringLength), t)+o
            }
            var n=F[
              t.quoteStyle||"single"
            ];
            return n.lastIndex=0, k(P.call(P.call(e, n, "\\$1"), /[
              \x00-\x1f
            ]
            /g, Z), "single", t)
          }
          function Z(e){
            var t=e.charCodeAt(0), r={
              8:"b", 9:"t", 10:"n", 12:"f", 13:"r"
            }
            [
              t
            ];
            return r?"\\"+r:"\\x"+(t<16?"0":"")+M.call(t.toString(16))
          }
          function q(e){
            return"Object("+e+")"
          }
          function $(e){
            return e+" { ? }"
          }
          function ee(e, t, r, o){
            return e+" ("+t+") {"+(o?te(r, o):v.call(r, ", "))+"}"
          }
          function te(e, t){
            if(0===e.length)return"";
            var r="\n"+t.prev+t.base;
            return r+v.call(e, ","+r)+"\n"+t.prev
          }
          function re(e, t){
            var r=U(e), o=[
            ];
            if(r){
              o.length=e.length;
              for(var n=0;
              n<e.length;
              n++)o[
                n
              ]
              =Q(e, n)?t(e[
                n
              ], e):""
            }
            var i, a="function"==typeof E?E(e):[
            ];
            if(C){
              i={
              };
              for(var l=0;
              l<a.length;
              l++)i[
                "$"+a[
                  l
                ]
              ]
              =a[
                l
              ]
            }
            for(var c in e)Q(e, c)&&(r&&String(Number(c))===c&&c<e.length||C&&i[
              "$"+c
            ]
            instanceof Symbol||(G.call(/[
              ^\w$
            ]
            /, c)?o.push(t(c, e)+": "+t(e[
              c
            ], e)):o.push(c+": "+t(e[
              c
            ], e))));
            if("function"==typeof E)for(var u=0;
            u<a.length;
            u++)D.call(e, a[
              u
            ])&&o.push("["+t(a[
              u
            ])+"]: "+t(e[
              a[
                u
              ]
            ], e));
            return o
          }
        }, 373126:(e, t, r)=>{
          var o=r(784742), n=r(769675), i=r(610076), a=r(713144);
          e.exports=function(e){
            if(e.length<1||"function"!=typeof e[
              0
            ])throw new n("a function is required");
            return a(o, i, e)
          }
        }, 380507:(e, t, r)=>{
          var o=r(570453), n=r(136556), i=r(358859), a=r(769675), l=o("%Map%", !0), c=n("Map.prototype.get", !0), u=n("Map.prototype.set", !0), s=n("Map.prototype.has", !0), T=n("Map.prototype.delete", !0), p=n("Map.prototype.size", !0);
          e.exports=!!l&&function(){
            var e, t={
              assert:function(e){
                if(!t.has(e))throw new a("Side channel does not contain "+i(e))
              }, delete:function(t){
                if(e){
                  var r=T(e, t);
                  return 0===p(e)&&(e=void 0), r
                }
                return!1
              }, get:function(t){
                if(e)return c(e, t)
              }, has:function(t){
                return!!e&&s(e, t)
              }, set:function(t, r){
                e||(e=new l), u(e, t, r)
              }
            };
            return t
          }
        }, 393628:(e, t, r)=>{
          var o=r(948648), n=r(771064), i=r(107176);
          e.exports=o?function(e){
            return o(e)
          }
          :n?function(e){
            if(!e||"object"!=typeof e&&"function"!=typeof e)throw new TypeError("getProto: not an object");
            return n(e)
          }
          :i?function(e){
            return i(e)
          }
          :null
        }, 441179:(e, t, r)=>{
          !function(e, t){
            e((function(){
              var e, r={
                mobileDetectRules:{
                  phones:{
                    iPhone:"\\biPhone\\b|\\biPod\\b", BlackBerry:"BlackBerry|\\bBB10\\b|rim[0-9]+|\\b(BBA100|BBB100|BBD100|BBE100|BBF100|STH100)\\b-[0-9]+", Pixel:"; \\bPixel\\b", HTC:"HTC|HTC.*(Sensation|Evo|Vision|Explorer|6800|8100|8900|A7272|S510e|C110e|Legend|Desire|T8282)|APX515CKT|Qtek9090|APA9292KT|HD_mini|Sensation.*Z710e|PG86100|Z715e|Desire.*(A8181|HD)|ADR6200|ADR6400L|ADR6425|001HT|Inspire 4G|Android.*\\bEVO\\b|T-Mobile G1|Z520m|Android [0-9.]+; Pixel", Nexus:"Nexus One|Nexus S|Galaxy.*Nexus|Android.*Nexus.*Mobile|Nexus 4|Nexus 5|Nexus 5X|Nexus 6", Dell:"Dell[;]? (Streak|Aero|Venue|Venue Pro|Flash|Smoke|Mini 3iX)|XCD28|XCD35|\\b001DL\\b|\\b101DL\\b|\\bGS01\\b", Motorola:"Motorola|DROIDX|DROID BIONIC|\\bDroid\\b.*Build|Android.*Xoom|HRI39|MOT-|A1260|A1680|A555|A853|A855|A953|A955|A956|Motorola.*ELECTRIFY|Motorola.*i1|i867|i940|MB200|MB300|MB501|MB502|MB508|MB511|MB520|MB525|MB526|MB611|MB612|MB632|MB810|MB855|MB860|MB861|MB865|MB870|ME501|ME502|ME511|ME525|ME600|ME632|ME722|ME811|ME860|ME863|ME865|MT620|MT710|MT716|MT720|MT810|MT870|MT917|Motorola.*TITANIUM|WX435|WX445|XT300|XT301|XT311|XT316|XT317|XT319|XT320|XT390|XT502|XT530|XT531|XT532|XT535|XT603|XT610|XT611|XT615|XT681|XT701|XT702|XT711|XT720|XT800|XT806|XT860|XT862|XT875|XT882|XT883|XT894|XT901|XT907|XT909|XT910|XT912|XT928|XT926|XT915|XT919|XT925|XT1021|\\bMoto E\\b|XT1068|XT1092|XT1052", Samsung:"\\bSamsung\\b|SM-G950F|SM-G955F|SM-G9250|GT-19300|SGH-I337|BGT-S5230|GT-B2100|GT-B2700|GT-B2710|GT-B3210|GT-B3310|GT-B3410|GT-B3730|GT-B3740|GT-B5510|GT-B5512|GT-B5722|GT-B6520|GT-B7300|GT-B7320|GT-B7330|GT-B7350|GT-B7510|GT-B7722|GT-B7800|GT-C3010|GT-C3011|GT-C3060|GT-C3200|GT-C3212|GT-C3212I|GT-C3262|GT-C3222|GT-C3300|GT-C3300K|GT-C3303|GT-C3303K|GT-C3310|GT-C3322|GT-C3330|GT-C3350|GT-C3500|GT-C3510|GT-C3530|GT-C3630|GT-C3780|GT-C5010|GT-C5212|GT-C6620|GT-C6625|GT-C6712|GT-E1050|GT-E1070|GT-E1075|GT-E1080|GT-E1081|GT-E1085|GT-E1087|GT-E1100|GT-E1107|GT-E1110|GT-E1120|GT-E1125|GT-E1130|GT-E1160|GT-E1170|GT-E1175|GT-E1180|GT-E1182|GT-E1200|GT-E1210|GT-E1225|GT-E1230|GT-E1390|GT-E2100|GT-E2120|GT-E2121|GT-E2152|GT-E2220|GT-E2222|GT-E2230|GT-E2232|GT-E2250|GT-E2370|GT-E2550|GT-E2652|GT-E3210|GT-E3213|GT-I5500|GT-I5503|GT-I5700|GT-I5800|GT-I5801|GT-I6410|GT-I6420|GT-I7110|GT-I7410|GT-I7500|GT-I8000|GT-I8150|GT-I8160|GT-I8190|GT-I8320|GT-I8330|GT-I8350|GT-I8530|GT-I8700|GT-I8703|GT-I8910|GT-I9000|GT-I9001|GT-I9003|GT-I9010|GT-I9020|GT-I9023|GT-I9070|GT-I9082|GT-I9100|GT-I9103|GT-I9220|GT-I9250|GT-I9300|GT-I9305|GT-I9500|GT-I9505|GT-M3510|GT-M5650|GT-M7500|GT-M7600|GT-M7603|GT-M8800|GT-M8910|GT-N7000|GT-S3110|GT-S3310|GT-S3350|GT-S3353|GT-S3370|GT-S3650|GT-S3653|GT-S3770|GT-S3850|GT-S5210|GT-S5220|GT-S5229|GT-S5230|GT-S5233|GT-S5250|GT-S5253|GT-S5260|GT-S5263|GT-S5270|GT-S5300|GT-S5330|GT-S5350|GT-S5360|GT-S5363|GT-S5369|GT-S5380|GT-S5380D|GT-S5560|GT-S5570|GT-S5600|GT-S5603|GT-S5610|GT-S5620|GT-S5660|GT-S5670|GT-S5690|GT-S5750|GT-S5780|GT-S5830|GT-S5839|GT-S6102|GT-S6500|GT-S7070|GT-S7200|GT-S7220|GT-S7230|GT-S7233|GT-S7250|GT-S7500|GT-S7530|GT-S7550|GT-S7562|GT-S7710|GT-S8000|GT-S8003|GT-S8500|GT-S8530|GT-S8600|SCH-A310|SCH-A530|SCH-A570|SCH-A610|SCH-A630|SCH-A650|SCH-A790|SCH-A795|SCH-A850|SCH-A870|SCH-A890|SCH-A930|SCH-A950|SCH-A970|SCH-A990|SCH-I100|SCH-I110|SCH-I400|SCH-I405|SCH-I500|SCH-I510|SCH-I515|SCH-I600|SCH-I730|SCH-I760|SCH-I770|SCH-I830|SCH-I910|SCH-I920|SCH-I959|SCH-LC11|SCH-N150|SCH-N300|SCH-R100|SCH-R300|SCH-R351|SCH-R400|SCH-R410|SCH-T300|SCH-U310|SCH-U320|SCH-U350|SCH-U360|SCH-U365|SCH-U370|SCH-U380|SCH-U410|SCH-U430|SCH-U450|SCH-U460|SCH-U470|SCH-U490|SCH-U540|SCH-U550|SCH-U620|SCH-U640|SCH-U650|SCH-U660|SCH-U700|SCH-U740|SCH-U750|SCH-U810|SCH-U820|SCH-U900|SCH-U940|SCH-U960|SCS-26UC|SGH-A107|SGH-A117|SGH-A127|SGH-A137|SGH-A157|SGH-A167|SGH-A177|SGH-A187|SGH-A197|SGH-A227|SGH-A237|SGH-A257|SGH-A437|SGH-A517|SGH-A597|SGH-A637|SGH-A657|SGH-A667|SGH-A687|SGH-A697|SGH-A707|SGH-A717|SGH-A727|SGH-A737|SGH-A747|SGH-A767|SGH-A777|SGH-A797|SGH-A817|SGH-A827|SGH-A837|SGH-A847|SGH-A867|SGH-A877|SGH-A887|SGH-A897|SGH-A927|SGH-B100|SGH-B130|SGH-B200|SGH-B220|SGH-C100|SGH-C110|SGH-C120|SGH-C130|SGH-C140|SGH-C160|SGH-C170|SGH-C180|SGH-C200|SGH-C207|SGH-C210|SGH-C225|SGH-C230|SGH-C417|SGH-C450|SGH-D307|SGH-D347|SGH-D357|SGH-D407|SGH-D415|SGH-D780|SGH-D807|SGH-D980|SGH-E105|SGH-E200|SGH-E315|SGH-E316|SGH-E317|SGH-E335|SGH-E590|SGH-E635|SGH-E715|SGH-E890|SGH-F300|SGH-F480|SGH-I200|SGH-I300|SGH-I320|SGH-I550|SGH-I577|SGH-I600|SGH-I607|SGH-I617|SGH-I627|SGH-I637|SGH-I677|SGH-I700|SGH-I717|SGH-I727|SGH-i747M|SGH-I777|SGH-I780|SGH-I827|SGH-I847|SGH-I857|SGH-I896|SGH-I897|SGH-I900|SGH-I907|SGH-I917|SGH-I927|SGH-I937|SGH-I997|SGH-J150|SGH-J200|SGH-L170|SGH-L700|SGH-M110|SGH-M150|SGH-M200|SGH-N105|SGH-N500|SGH-N600|SGH-N620|SGH-N625|SGH-N700|SGH-N710|SGH-P107|SGH-P207|SGH-P300|SGH-P310|SGH-P520|SGH-P735|SGH-P777|SGH-Q105|SGH-R210|SGH-R220|SGH-R225|SGH-S105|SGH-S307|SGH-T109|SGH-T119|SGH-T139|SGH-T209|SGH-T219|SGH-T229|SGH-T239|SGH-T249|SGH-T259|SGH-T309|SGH-T319|SGH-T329|SGH-T339|SGH-T349|SGH-T359|SGH-T369|SGH-T379|SGH-T409|SGH-T429|SGH-T439|SGH-T459|SGH-T469|SGH-T479|SGH-T499|SGH-T509|SGH-T519|SGH-T539|SGH-T559|SGH-T589|SGH-T609|SGH-T619|SGH-T629|SGH-T639|SGH-T659|SGH-T669|SGH-T679|SGH-T709|SGH-T719|SGH-T729|SGH-T739|SGH-T746|SGH-T749|SGH-T759|SGH-T769|SGH-T809|SGH-T819|SGH-T839|SGH-T919|SGH-T929|SGH-T939|SGH-T959|SGH-T989|SGH-U100|SGH-U200|SGH-U800|SGH-V205|SGH-V206|SGH-X100|SGH-X105|SGH-X120|SGH-X140|SGH-X426|SGH-X427|SGH-X475|SGH-X495|SGH-X497|SGH-X507|SGH-X600|SGH-X610|SGH-X620|SGH-X630|SGH-X700|SGH-X820|SGH-X890|SGH-Z130|SGH-Z150|SGH-Z170|SGH-ZX10|SGH-ZX20|SHW-M110|SPH-A120|SPH-A400|SPH-A420|SPH-A460|SPH-A500|SPH-A560|SPH-A600|SPH-A620|SPH-A660|SPH-A700|SPH-A740|SPH-A760|SPH-A790|SPH-A800|SPH-A820|SPH-A840|SPH-A880|SPH-A900|SPH-A940|SPH-A960|SPH-D600|SPH-D700|SPH-D710|SPH-D720|SPH-I300|SPH-I325|SPH-I330|SPH-I350|SPH-I500|SPH-I600|SPH-I700|SPH-L700|SPH-M100|SPH-M220|SPH-M240|SPH-M300|SPH-M305|SPH-M320|SPH-M330|SPH-M350|SPH-M360|SPH-M370|SPH-M380|SPH-M510|SPH-M540|SPH-M550|SPH-M560|SPH-M570|SPH-M580|SPH-M610|SPH-M620|SPH-M630|SPH-M800|SPH-M810|SPH-M850|SPH-M900|SPH-M910|SPH-M920|SPH-M930|SPH-N100|SPH-N200|SPH-N240|SPH-N300|SPH-N400|SPH-Z400|SWC-E100|SCH-i909|GT-N7100|GT-N7105|SCH-I535|SM-N900A|SGH-I317|SGH-T999L|GT-S5360B|GT-I8262|GT-S6802|GT-S6312|GT-S6310|GT-S5312|GT-S5310|GT-I9105|GT-I8510|GT-S6790N|SM-G7105|SM-N9005|GT-S5301|GT-I9295|GT-I9195|SM-C101|GT-S7392|GT-S7560|GT-B7610|GT-I5510|GT-S7582|GT-S7530E|GT-I8750|SM-G9006V|SM-G9008V|SM-G9009D|SM-G900A|SM-G900D|SM-G900F|SM-G900H|SM-G900I|SM-G900J|SM-G900K|SM-G900L|SM-G900M|SM-G900P|SM-G900R4|SM-G900S|SM-G900T|SM-G900V|SM-G900W8|SHV-E160K|SCH-P709|SCH-P729|SM-T2558|GT-I9205|SM-G9350|SM-J120F|SM-G920F|SM-G920V|SM-G930F|SM-N910C|SM-A310F|GT-I9190|SM-J500FN|SM-G903F|SM-J330F|SM-G610F|SM-G981B|SM-G892A|SM-A530F", LG:"\\bLG\\b;|LG[- ]?(C800|C900|E400|E610|E900|E-900|F160|F180K|F180L|F180S|730|855|L160|LS740|LS840|LS970|LU6200|MS690|MS695|MS770|MS840|MS870|MS910|P500|P700|P705|VM696|AS680|AS695|AX840|C729|E970|GS505|272|C395|E739BK|E960|L55C|L75C|LS696|LS860|P769BK|P350|P500|P509|P870|UN272|US730|VS840|VS950|LN272|LN510|LS670|LS855|LW690|MN270|MN510|P509|P769|P930|UN200|UN270|UN510|UN610|US670|US740|US760|UX265|UX840|VN271|VN530|VS660|VS700|VS740|VS750|VS910|VS920|VS930|VX9200|VX11000|AX840A|LW770|P506|P925|P999|E612|D955|D802|MS323|M257)|LM-G710", Sony:"SonyST|SonyLT|SonyEricsson|SonyEricssonLT15iv|LT18i|E10i|LT28h|LT26w|SonyEricssonMT27i|C5303|C6902|C6903|C6906|C6943|D2533|SOV34|601SO|F8332", Asus:"Asus.*Galaxy|PadFone.*Mobile", Xiaomi:"^(?!.*\\bx11\\b).*xiaomi.*$|POCOPHONE F1|MI 8|Redmi Note 9S|Redmi Note 5A Prime|N2G47H|M2001J2G|M2001J2I|M1805E10A|M2004J11G|M1902F1G|M2002J9G|M2004J19G|M2003J6A1G", NokiaLumia:"Lumia [0-9]{3,4}", Micromax:"Micromax.*\\b(A210|A92|A88|A72|A111|A110Q|A115|A116|A110|A90S|A26|A51|A35|A54|A25|A27|A89|A68|A65|A57|A90)\\b", Palm:"PalmSource|Palm", Vertu:"Vertu|Vertu.*Ltd|Vertu.*Ascent|Vertu.*Ayxta|Vertu.*Constellation(F|Quest)?|Vertu.*Monika|Vertu.*Signature", Pantech:"PANTECH|IM-A850S|IM-A840S|IM-A830L|IM-A830K|IM-A830S|IM-A820L|IM-A810K|IM-A810S|IM-A800S|IM-T100K|IM-A725L|IM-A780L|IM-A775C|IM-A770K|IM-A760S|IM-A750K|IM-A740S|IM-A730S|IM-A720L|IM-A710K|IM-A690L|IM-A690S|IM-A650S|IM-A630K|IM-A600S|VEGA PTL21|PT003|P8010|ADR910L|P6030|P6020|P9070|P4100|P9060|P5000|CDM8992|TXT8045|ADR8995|IS11PT|P2030|P6010|P8000|PT002|IS06|CDM8999|P9050|PT001|TXT8040|P2020|P9020|P2000|P7040|P7000|C790", Fly:"IQ230|IQ444|IQ450|IQ440|IQ442|IQ441|IQ245|IQ256|IQ236|IQ255|IQ235|IQ245|IQ275|IQ240|IQ285|IQ280|IQ270|IQ260|IQ250", Wiko:"KITE 4G|HIGHWAY|GETAWAY|STAIRWAY|DARKSIDE|DARKFULL|DARKNIGHT|DARKMOON|SLIDE|WAX 4G|RAINBOW|BLOOM|SUNSET|GOA(?!nna)|LENNY|BARRY|IGGY|OZZY|CINK FIVE|CINK PEAX|CINK PEAX 2|CINK SLIM|CINK SLIM 2|CINK +|CINK KING|CINK PEAX|CINK SLIM|SUBLIM", iMobile:"i-mobile (IQ|i-STYLE|idea|ZAA|Hitz)", SimValley:"\\b(SP-80|XT-930|SX-340|XT-930|SX-310|SP-360|SP60|SPT-800|SP-120|SPT-800|SP-140|SPX-5|SPX-8|SP-100|SPX-8|SPX-12)\\b", Wolfgang:"AT-B24D|AT-AS50HD|AT-AS40W|AT-AS55HD|AT-AS45q2|AT-B26D|AT-AS50Q", Alcatel:"Alcatel", Nintendo:"Nintendo (3DS|Switch)", Amoi:"Amoi", INQ:"INQ", OnePlus:"ONEPLUS", GenericPhone:"Tapatalk|PDA;|SAGEM|\\bmmp\\b|pocket|\\bpsp\\b|symbian|Smartphone|smartfon|treo|up.browser|up.link|vodafone|\\bwap\\b|nokia|Series40|Series60|S60|SonyEricsson|N900|MAUI.*WAP.*Browser"
                  }, tablets:{
                    iPad:"iPad|iPad.*Mobile", NexusTablet:"Android.*Nexus[\\s]+(7|9|10)", GoogleTablet:"Android.*Pixel C", SamsungTablet:"SAMSUNG.*Tablet|Galaxy.*Tab|SC-01C|GT-P1000|GT-P1003|GT-P1010|GT-P3105|GT-P6210|GT-P6800|GT-P6810|GT-P7100|GT-P7300|GT-P7310|GT-P7500|GT-P7510|SCH-I800|SCH-I815|SCH-I905|SGH-I957|SGH-I987|SGH-T849|SGH-T859|SGH-T869|SPH-P100|GT-P3100|GT-P3108|GT-P3110|GT-P5100|GT-P5110|GT-P6200|GT-P7320|GT-P7511|GT-N8000|GT-P8510|SGH-I497|SPH-P500|SGH-T779|SCH-I705|SCH-I915|GT-N8013|GT-P3113|GT-P5113|GT-P8110|GT-N8010|GT-N8005|GT-N8020|GT-P1013|GT-P6201|GT-P7501|GT-N5100|GT-N5105|GT-N5110|SHV-E140K|SHV-E140L|SHV-E140S|SHV-E150S|SHV-E230K|SHV-E230L|SHV-E230S|SHW-M180K|SHW-M180L|SHW-M180S|SHW-M180W|SHW-M300W|SHW-M305W|SHW-M380K|SHW-M380S|SHW-M380W|SHW-M430W|SHW-M480K|SHW-M480S|SHW-M480W|SHW-M485W|SHW-M486W|SHW-M500W|GT-I9228|SCH-P739|SCH-I925|GT-I9200|GT-P5200|GT-P5210|GT-P5210X|SM-T311|SM-T310|SM-T310X|SM-T210|SM-T210R|SM-T211|SM-P600|SM-P601|SM-P605|SM-P900|SM-P901|SM-T217|SM-T217A|SM-T217S|SM-P6000|SM-T3100|SGH-I467|XE500|SM-T110|GT-P5220|GT-I9200X|GT-N5110X|GT-N5120|SM-P905|SM-T111|SM-T2105|SM-T315|SM-T320|SM-T320X|SM-T321|SM-T520|SM-T525|SM-T530NU|SM-T230NU|SM-T330NU|SM-T900|XE500T1C|SM-P605V|SM-P905V|SM-T337V|SM-T537V|SM-T707V|SM-T807V|SM-P600X|SM-P900X|SM-T210X|SM-T230|SM-T230X|SM-T325|GT-P7503|SM-T531|SM-T330|SM-T530|SM-T705|SM-T705C|SM-T535|SM-T331|SM-T800|SM-T700|SM-T537|SM-T807|SM-P907A|SM-T337A|SM-T537A|SM-T707A|SM-T807A|SM-T237|SM-T807P|SM-P607T|SM-T217T|SM-T337T|SM-T807T|SM-T116NQ|SM-T116BU|SM-P550|SM-T350|SM-T550|SM-T9000|SM-P9000|SM-T705Y|SM-T805|GT-P3113|SM-T710|SM-T810|SM-T815|SM-T360|SM-T533|SM-T113|SM-T335|SM-T715|SM-T560|SM-T670|SM-T677|SM-T377|SM-T567|SM-T357T|SM-T555|SM-T561|SM-T713|SM-T719|SM-T813|SM-T819|SM-T580|SM-T355Y?|SM-T280|SM-T817A|SM-T820|SM-W700|SM-P580|SM-T587|SM-P350|SM-P555M|SM-P355M|SM-T113NU|SM-T815Y|SM-T585|SM-T285|SM-T825|SM-W708|SM-T835|SM-T830|SM-T837V|SM-T720|SM-T510|SM-T387V|SM-P610|SM-T290|SM-T515|SM-T590|SM-T595|SM-T725|SM-T817P|SM-P585N0|SM-T395|SM-T295|SM-T865|SM-P610N|SM-P615|SM-T970|SM-T380|SM-T5950|SM-T905|SM-T231|SM-T500|SM-T860", Kindle:"Kindle|Silk.*Accelerated|Android.*\\b(KFOT|KFTT|KFJWI|KFJWA|KFOTE|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|WFJWAE|KFSAWA|KFSAWI|KFASWI|KFARWI|KFFOWI|KFGIWI|KFMEWI)\\b|Android.*Silk/[0-9.]+ like Chrome/[0-9.]+ (?!Mobile)", SurfaceTablet:"Windows NT [0-9.]+; ARM;.*(Tablet|ARMBJS)", HPTablet:"HP Slate (7|8|10)|HP ElitePad 900|hp-tablet|EliteBook.*Touch|HP 8|Slate 21|HP SlateBook 10", AsusTablet:"^.*PadFone((?!Mobile).)*$|Transformer|TF101|TF101G|TF300T|TF300TG|TF300TL|TF700T|TF700KL|TF701T|TF810C|ME171|ME301T|ME302C|ME371MG|ME370T|ME372MG|ME172V|ME173X|ME400C|Slider SL101|\\bK00F\\b|\\bK00C\\b|\\bK00E\\b|\\bK00L\\b|TX201LA|ME176C|ME102A|\\bM80TA\\b|ME372CL|ME560CG|ME372CG|ME302KL| K010 | K011 | K017 | K01E |ME572C|ME103K|ME170C|ME171C|\\bME70C\\b|ME581C|ME581CL|ME8510C|ME181C|P01Y|PO1MA|P01Z|\\bP027\\b|\\bP024\\b|\\bP00C\\b", BlackBerryTablet:"PlayBook|RIM Tablet", HTCtablet:"HTC_Flyer_P512|HTC Flyer|HTC Jetstream|HTC-P715a|HTC EVO View 4G|PG41200|PG09410", MotorolaTablet:"xoom|sholest|MZ615|MZ605|MZ505|MZ601|MZ602|MZ603|MZ604|MZ606|MZ607|MZ608|MZ609|MZ615|MZ616|MZ617", NookTablet:"Android.*Nook|NookColor|nook browser|BNRV200|BNRV200A|BNTV250|BNTV250A|BNTV400|BNTV600|LogicPD Zoom2", AcerTablet:"Android.*; \\b(A100|A101|A110|A200|A210|A211|A500|A501|A510|A511|A700|A701|W500|W500P|W501|W501P|W510|W511|W700|G100|G100W|B1-A71|B1-710|B1-711|A1-810|A1-811|A1-830)\\b|W3-810|\\bA3-A10\\b|\\bA3-A11\\b|\\bA3-A20\\b|\\bA3-A30|A3-A40", ToshibaTablet:"Android.*(AT100|AT105|AT200|AT205|AT270|AT275|AT300|AT305|AT1S5|AT500|AT570|AT700|AT830)|TOSHIBA.*FOLIO", LGTablet:"\\bL-06C|LG-V909|LG-V900|LG-V700|LG-V510|LG-V500|LG-V410|LG-V400|LG-VK810\\b", FujitsuTablet:"Android.*\\b(F-01D|F-02F|F-05E|F-10D|M532|Q572)\\b", PrestigioTablet:"PMP3170B|PMP3270B|PMP3470B|PMP7170B|PMP3370B|PMP3570C|PMP5870C|PMP3670B|PMP5570C|PMP5770D|PMP3970B|PMP3870C|PMP5580C|PMP5880D|PMP5780D|PMP5588C|PMP7280C|PMP7280C3G|PMP7280|PMP7880D|PMP5597D|PMP5597|PMP7100D|PER3464|PER3274|PER3574|PER3884|PER5274|PER5474|PMP5097CPRO|PMP5097|PMP7380D|PMP5297C|PMP5297C_QUAD|PMP812E|PMP812E3G|PMP812F|PMP810E|PMP880TD|PMT3017|PMT3037|PMT3047|PMT3057|PMT7008|PMT5887|PMT5001|PMT5002", LenovoTablet:"Lenovo TAB|Idea(Tab|Pad)( A1|A10| K1|)|ThinkPad([ ]+)?Tablet|YT3-850M|YT3-X90L|YT3-X90F|YT3-X90X|Lenovo.*(S2109|S2110|S5000|S6000|K3011|A3000|A3500|A1000|A2107|A2109|A1107|A5500|A7600|B6000|B8000|B8080)(-|)(FL|F|HV|H|)|TB-X103F|TB-X304X|TB-X304F|TB-X304L|TB-X505F|TB-X505L|TB-X505X|TB-X605F|TB-X605L|TB-8703F|TB-8703X|TB-8703N|TB-8704N|TB-8704F|TB-8704X|TB-8704V|TB-7304F|TB-7304I|TB-7304X|Tab2A7-10F|Tab2A7-20F|TB2-X30L|YT3-X50L|YT3-X50F|YT3-X50M|YT-X705F|YT-X703F|YT-X703L|YT-X705L|YT-X705X|TB2-X30F|TB2-X30L|TB2-X30M|A2107A-F|A2107A-H|TB3-730F|TB3-730M|TB3-730X|TB-7504F|TB-7504X|TB-X704F|TB-X104F|TB3-X70F|TB-X705F|TB-8504F|TB3-X70L|TB3-710F|TB-X704L", DellTablet:"Venue 11|Venue 8|Venue 7|Dell Streak 10|Dell Streak 7", YarvikTablet:"Android.*\\b(TAB210|TAB211|TAB224|TAB250|TAB260|TAB264|TAB310|TAB360|TAB364|TAB410|TAB411|TAB420|TAB424|TAB450|TAB460|TAB461|TAB464|TAB465|TAB467|TAB468|TAB07-100|TAB07-101|TAB07-150|TAB07-151|TAB07-152|TAB07-200|TAB07-201-3G|TAB07-210|TAB07-211|TAB07-212|TAB07-214|TAB07-220|TAB07-400|TAB07-485|TAB08-150|TAB08-200|TAB08-201-3G|TAB08-201-30|TAB09-100|TAB09-211|TAB09-410|TAB10-150|TAB10-201|TAB10-211|TAB10-400|TAB10-410|TAB13-201|TAB274EUK|TAB275EUK|TAB374EUK|TAB462EUK|TAB474EUK|TAB9-200)\\b", MedionTablet:"Android.*\\bOYO\\b|LIFE.*(P9212|P9514|P9516|S9512)|LIFETAB", ArnovaTablet:"97G4|AN10G2|AN7bG3|AN7fG3|AN8G3|AN8cG3|AN7G3|AN9G3|AN7dG3|AN7dG3ST|AN7dG3ChildPad|AN10bG3|AN10bG3DT|AN9G2", IntensoTablet:"INM8002KP|INM1010FP|INM805ND|Intenso Tab|TAB1004", IRUTablet:"M702pro", MegafonTablet:"MegaFon V9|\\bZTE V9\\b|Android.*\\bMT7A\\b", EbodaTablet:"E-Boda (Supreme|Impresspeed|Izzycomm|Essential)", AllViewTablet:"Allview.*(Viva|Alldro|City|Speed|All TV|Frenzy|Quasar|Shine|TX1|AX1|AX2)", ArchosTablet:"\\b(101G9|80G9|A101IT)\\b|Qilive 97R|Archos5|\\bARCHOS (70|79|80|90|97|101|FAMILYPAD|)(b|c|)(G10| Cobalt| TITANIUM(HD|)| Xenon| Neon|XSK| 2| XS 2| PLATINUM| CARBON|GAMEPAD)\\b", AinolTablet:"NOVO7|NOVO8|NOVO10|Novo7Aurora|Novo7Basic|NOVO7PALADIN|novo9-Spark", NokiaLumiaTablet:"Lumia 2520", SonyTablet:"Sony.*Tablet|Xperia Tablet|Sony Tablet S|SO-03E|SGPT12|SGPT13|SGPT114|SGPT121|SGPT122|SGPT123|SGPT111|SGPT112|SGPT113|SGPT131|SGPT132|SGPT133|SGPT211|SGPT212|SGPT213|SGP311|SGP312|SGP321|EBRD1101|EBRD1102|EBRD1201|SGP351|SGP341|SGP511|SGP512|SGP521|SGP541|SGP551|SGP621|SGP641|SGP612|SOT31|SGP771|SGP611|SGP612|SGP712", PhilipsTablet:"\\b(PI2010|PI3000|PI3100|PI3105|PI3110|PI3205|PI3210|PI3900|PI4010|PI7000|PI7100)\\b", CubeTablet:"Android.*(K8GT|U9GT|U10GT|U16GT|U17GT|U18GT|U19GT|U20GT|U23GT|U30GT)|CUBE U8GT", CobyTablet:"MID1042|MID1045|MID1125|MID1126|MID7012|MID7014|MID7015|MID7034|MID7035|MID7036|MID7042|MID7048|MID7127|MID8042|MID8048|MID8127|MID9042|MID9740|MID9742|MID7022|MID7010", MIDTablet:"M9701|M9000|M9100|M806|M1052|M806|T703|MID701|MID713|MID710|MID727|MID760|MID830|MID728|MID933|MID125|MID810|MID732|MID120|MID930|MID800|MID731|MID900|MID100|MID820|MID735|MID980|MID130|MID833|MID737|MID960|MID135|MID860|MID736|MID140|MID930|MID835|MID733|MID4X10", MSITablet:"MSI \\b(Primo 73K|Primo 73L|Primo 81L|Primo 77|Primo 93|Primo 75|Primo 76|Primo 73|Primo 81|Primo 91|Primo 90|Enjoy 71|Enjoy 7|Enjoy 10)\\b", SMiTTablet:"Android.*(\\bMID\\b|MID-560|MTV-T1200|MTV-PND531|MTV-P1101|MTV-PND530)", RockChipTablet:"Android.*(RK2818|RK2808A|RK2918|RK3066)|RK2738|RK2808A", FlyTablet:"IQ310|Fly Vision", bqTablet:"Android.*(bq)?.*\\b(Elcano|Curie|Edison|Maxwell|Kepler|Pascal|Tesla|Hypatia|Platon|Newton|Livingstone|Cervantes|Avant|Aquaris ([E|M]10|M8))\\b|Maxwell.*Lite|Maxwell.*Plus", HuaweiTablet:"MediaPad|MediaPad 7 Youth|IDEOS S7|S7-201c|S7-202u|S7-101|S7-103|S7-104|S7-105|S7-106|S7-201|S7-Slim|M2-A01L|BAH-L09|BAH-W09|AGS-L09|CMR-AL19", NecTablet:"\\bN-06D|\\bN-08D", PantechTablet:"Pantech.*P4100", BronchoTablet:"Broncho.*(N701|N708|N802|a710)", VersusTablet:"TOUCHPAD.*[78910]|\\bTOUCHTAB\\b", ZyncTablet:"z1000|Z99 2G|z930|z990|z909|Z919|z900", PositivoTablet:"TB07STA|TB10STA|TB07FTA|TB10FTA", NabiTablet:"Android.*\\bNabi", KoboTablet:"Kobo Touch|\\bK080\\b|\\bVox\\b Build|\\bArc\\b Build", DanewTablet:"DSlide.*\\b(700|701R|702|703R|704|802|970|971|972|973|974|1010|1012)\\b", TexetTablet:"NaviPad|TB-772A|TM-7045|TM-7055|TM-9750|TM-7016|TM-7024|TM-7026|TM-7041|TM-7043|TM-7047|TM-8041|TM-9741|TM-9747|TM-9748|TM-9751|TM-7022|TM-7021|TM-7020|TM-7011|TM-7010|TM-7023|TM-7025|TM-7037W|TM-7038W|TM-7027W|TM-9720|TM-9725|TM-9737W|TM-1020|TM-9738W|TM-9740|TM-9743W|TB-807A|TB-771A|TB-727A|TB-725A|TB-719A|TB-823A|TB-805A|TB-723A|TB-715A|TB-707A|TB-705A|TB-709A|TB-711A|TB-890HD|TB-880HD|TB-790HD|TB-780HD|TB-770HD|TB-721HD|TB-710HD|TB-434HD|TB-860HD|TB-840HD|TB-760HD|TB-750HD|TB-740HD|TB-730HD|TB-722HD|TB-720HD|TB-700HD|TB-500HD|TB-470HD|TB-431HD|TB-430HD|TB-506|TB-504|TB-446|TB-436|TB-416|TB-146SE|TB-126SE", PlaystationTablet:"Playstation.*(Portable|Vita)", TrekstorTablet:"ST10416-1|VT10416-1|ST70408-1|ST702xx-1|ST702xx-2|ST80208|ST97216|ST70104-2|VT10416-2|ST10216-2A|SurfTab", PyleAudioTablet:"\\b(PTBL10CEU|PTBL10C|PTBL72BC|PTBL72BCEU|PTBL7CEU|PTBL7C|PTBL92BC|PTBL92BCEU|PTBL9CEU|PTBL9CUK|PTBL9C)\\b", AdvanTablet:"Android.* \\b(E3A|T3X|T5C|T5B|T3E|T3C|T3B|T1J|T1F|T2A|T1H|T1i|E1C|T1-E|T5-A|T4|E1-B|T2Ci|T1-B|T1-D|O1-A|E1-A|T1-A|T3A|T4i)\\b ", DanyTechTablet:"Genius Tab G3|Genius Tab S2|Genius Tab Q3|Genius Tab G4|Genius Tab Q4|Genius Tab G-II|Genius TAB GII|Genius TAB GIII|Genius Tab S1", GalapadTablet:"Android [0-9.]+; [a-z-]+; \\bG1\\b", MicromaxTablet:"Funbook|Micromax.*\\b(P250|P560|P360|P362|P600|P300|P350|P500|P275)\\b", KarbonnTablet:"Android.*\\b(A39|A37|A34|ST8|ST10|ST7|Smart Tab3|Smart Tab2)\\b", AllFineTablet:"Fine7 Genius|Fine7 Shine|Fine7 Air|Fine8 Style|Fine9 More|Fine10 Joy|Fine11 Wide", PROSCANTablet:"\\b(PEM63|PLT1023G|PLT1041|PLT1044|PLT1044G|PLT1091|PLT4311|PLT4311PL|PLT4315|PLT7030|PLT7033|PLT7033D|PLT7035|PLT7035D|PLT7044K|PLT7045K|PLT7045KB|PLT7071KG|PLT7072|PLT7223G|PLT7225G|PLT7777G|PLT7810K|PLT7849G|PLT7851G|PLT7852G|PLT8015|PLT8031|PLT8034|PLT8036|PLT8080K|PLT8082|PLT8088|PLT8223G|PLT8234G|PLT8235G|PLT8816K|PLT9011|PLT9045K|PLT9233G|PLT9735|PLT9760G|PLT9770G)\\b", YONESTablet:"BQ1078|BC1003|BC1077|RK9702|BC9730|BC9001|IT9001|BC7008|BC7010|BC708|BC728|BC7012|BC7030|BC7027|BC7026", ChangJiaTablet:"TPC7102|TPC7103|TPC7105|TPC7106|TPC7107|TPC7201|TPC7203|TPC7205|TPC7210|TPC7708|TPC7709|TPC7712|TPC7110|TPC8101|TPC8103|TPC8105|TPC8106|TPC8203|TPC8205|TPC8503|TPC9106|TPC9701|TPC97101|TPC97103|TPC97105|TPC97106|TPC97111|TPC97113|TPC97203|TPC97603|TPC97809|TPC97205|TPC10101|TPC10103|TPC10106|TPC10111|TPC10203|TPC10205|TPC10503", GUTablet:"TX-A1301|TX-M9002|Q702|kf026", PointOfViewTablet:"TAB-P506|TAB-navi-7-3G-M|TAB-P517|TAB-P-527|TAB-P701|TAB-P703|TAB-P721|TAB-P731N|TAB-P741|TAB-P825|TAB-P905|TAB-P925|TAB-PR945|TAB-PL1015|TAB-P1025|TAB-PI1045|TAB-P1325|TAB-PROTAB[0-9]+|TAB-PROTAB25|TAB-PROTAB26|TAB-PROTAB27|TAB-PROTAB26XL|TAB-PROTAB2-IPS9|TAB-PROTAB30-IPS9|TAB-PROTAB25XXL|TAB-PROTAB26-IPS10|TAB-PROTAB30-IPS10", OvermaxTablet:"OV-(SteelCore|NewBase|Basecore|Baseone|Exellen|Quattor|EduTab|Solution|ACTION|BasicTab|TeddyTab|MagicTab|Stream|TB-08|TB-09)|Qualcore 1027", HCLTablet:"HCL.*Tablet|Connect-3G-2.0|Connect-2G-2.0|ME Tablet U1|ME Tablet U2|ME Tablet G1|ME Tablet X1|ME Tablet Y2|ME Tablet Sync", DPSTablet:"DPS Dream 9|DPS Dual 7", VistureTablet:"V97 HD|i75 3G|Visture V4( HD)?|Visture V5( HD)?|Visture V10", CrestaTablet:"CTP(-)?810|CTP(-)?818|CTP(-)?828|CTP(-)?838|CTP(-)?888|CTP(-)?978|CTP(-)?980|CTP(-)?987|CTP(-)?988|CTP(-)?989", MediatekTablet:"\\bMT8125|MT8389|MT8135|MT8377\\b", ConcordeTablet:"Concorde([ ]+)?Tab|ConCorde ReadMan", GoCleverTablet:"GOCLEVER TAB|A7GOCLEVER|M1042|M7841|M742|R1042BK|R1041|TAB A975|TAB A7842|TAB A741|TAB A741L|TAB M723G|TAB M721|TAB A1021|TAB I921|TAB R721|TAB I720|TAB T76|TAB R70|TAB R76.2|TAB R106|TAB R83.2|TAB M813G|TAB I721|GCTA722|TAB I70|TAB I71|TAB S73|TAB R73|TAB R74|TAB R93|TAB R75|TAB R76.1|TAB A73|TAB A93|TAB A93.2|TAB T72|TAB R83|TAB R974|TAB R973|TAB A101|TAB A103|TAB A104|TAB A104.2|R105BK|M713G|A972BK|TAB A971|TAB R974.2|TAB R104|TAB R83.3|TAB A1042", ModecomTablet:"FreeTAB 9000|FreeTAB 7.4|FreeTAB 7004|FreeTAB 7800|FreeTAB 2096|FreeTAB 7.5|FreeTAB 1014|FreeTAB 1001 |FreeTAB 8001|FreeTAB 9706|FreeTAB 9702|FreeTAB 7003|FreeTAB 7002|FreeTAB 1002|FreeTAB 7801|FreeTAB 1331|FreeTAB 1004|FreeTAB 8002|FreeTAB 8014|FreeTAB 9704|FreeTAB 1003", VoninoTablet:"\\b(Argus[ _]?S|Diamond[ _]?79HD|Emerald[ _]?78E|Luna[ _]?70C|Onyx[ _]?S|Onyx[ _]?Z|Orin[ _]?HD|Orin[ _]?S|Otis[ _]?S|SpeedStar[ _]?S|Magnet[ _]?M9|Primus[ _]?94[ _]?3G|Primus[ _]?94HD|Primus[ _]?QS|Android.*\\bQ8\\b|Sirius[ _]?EVO[ _]?QS|Sirius[ _]?QS|Spirit[ _]?S)\\b", ECSTablet:"V07OT2|TM105A|S10OT1|TR10CS1", StorexTablet:"eZee[_']?(Tab|Go)[0-9]+|TabLC7|Looney Tunes Tab", VodafoneTablet:"SmartTab([ ]+)?[0-9]+|SmartTabII10|SmartTabII7|VF-1497|VFD 1400", EssentielBTablet:"Smart[ ']?TAB[ ]+?[0-9]+|Family[ ']?TAB2", RossMoorTablet:"RM-790|RM-997|RMD-878G|RMD-974R|RMT-705A|RMT-701|RME-601|RMT-501|RMT-711", iMobileTablet:"i-mobile i-note", TolinoTablet:"tolino tab [0-9.]+|tolino shine", AudioSonicTablet:"\\bC-22Q|T7-QC|T-17B|T-17P\\b", AMPETablet:"Android.* A78 ", SkkTablet:"Android.* (SKYPAD|PHOENIX|CYCLOPS)", TecnoTablet:"TECNO P9|TECNO DP8D", JXDTablet:"Android.* \\b(F3000|A3300|JXD5000|JXD3000|JXD2000|JXD300B|JXD300|S5800|S7800|S602b|S5110b|S7300|S5300|S602|S603|S5100|S5110|S601|S7100a|P3000F|P3000s|P101|P200s|P1000m|P200m|P9100|P1000s|S6600b|S908|P1000|P300|S18|S6600|S9100)\\b", iJoyTablet:"Tablet (Spirit 7|Essentia|Galatea|Fusion|Onix 7|Landa|Titan|Scooby|Deox|Stella|Themis|Argon|Unique 7|Sygnus|Hexen|Finity 7|Cream|Cream X2|Jade|Neon 7|Neron 7|Kandy|Scape|Saphyr 7|Rebel|Biox|Rebel|Rebel 8GB|Myst|Draco 7|Myst|Tab7-004|Myst|Tadeo Jones|Tablet Boing|Arrow|Draco Dual Cam|Aurix|Mint|Amity|Revolution|Finity 9|Neon 9|T9w|Amity 4GB Dual Cam|Stone 4GB|Stone 8GB|Andromeda|Silken|X2|Andromeda II|Halley|Flame|Saphyr 9,7|Touch 8|Planet|Triton|Unique 10|Hexen 10|Memphis 4GB|Memphis 8GB|Onix 10)", FX2Tablet:"FX2 PAD7|FX2 PAD10", XoroTablet:"KidsPAD 701|PAD[ ]?712|PAD[ ]?714|PAD[ ]?716|PAD[ ]?717|PAD[ ]?718|PAD[ ]?720|PAD[ ]?721|PAD[ ]?722|PAD[ ]?790|PAD[ ]?792|PAD[ ]?900|PAD[ ]?9715D|PAD[ ]?9716DR|PAD[ ]?9718DR|PAD[ ]?9719QR|PAD[ ]?9720QR|TelePAD1030|Telepad1032|TelePAD730|TelePAD731|TelePAD732|TelePAD735Q|TelePAD830|TelePAD9730|TelePAD795|MegaPAD 1331|MegaPAD 1851|MegaPAD 2151", ViewsonicTablet:"ViewPad 10pi|ViewPad 10e|ViewPad 10s|ViewPad E72|ViewPad7|ViewPad E100|ViewPad 7e|ViewSonic VB733|VB100a", VerizonTablet:"QTAQZ3|QTAIR7|QTAQTZ3|QTASUN1|QTASUN2|QTAXIA1", OdysTablet:"LOOX|XENO10|ODYS[ -](Space|EVO|Xpress|NOON)|\\bXELIO\\b|Xelio10Pro|XELIO7PHONETAB|XELIO10EXTREME|XELIOPT2|NEO_QUAD10", CaptivaTablet:"CAPTIVA PAD", IconbitTablet:"NetTAB|NT-3702|NT-3702S|NT-3702S|NT-3603P|NT-3603P|NT-0704S|NT-0704S|NT-3805C|NT-3805C|NT-0806C|NT-0806C|NT-0909T|NT-0909T|NT-0907S|NT-0907S|NT-0902S|NT-0902S", TeclastTablet:"T98 4G|\\bP80\\b|\\bX90HD\\b|X98 Air|X98 Air 3G|\\bX89\\b|P80 3G|\\bX80h\\b|P98 Air|\\bX89HD\\b|P98 3G|\\bP90HD\\b|P89 3G|X98 3G|\\bP70h\\b|P79HD 3G|G18d 3G|\\bP79HD\\b|\\bP89s\\b|\\bA88\\b|\\bP10HD\\b|\\bP19HD\\b|G18 3G|\\bP78HD\\b|\\bA78\\b|\\bP75\\b|G17s 3G|G17h 3G|\\bP85t\\b|\\bP90\\b|\\bP11\\b|\\bP98t\\b|\\bP98HD\\b|\\bG18d\\b|\\bP85s\\b|\\bP11HD\\b|\\bP88s\\b|\\bA80HD\\b|\\bA80se\\b|\\bA10h\\b|\\bP89\\b|\\bP78s\\b|\\bG18\\b|\\bP85\\b|\\bA70h\\b|\\bA70\\b|\\bG17\\b|\\bP18\\b|\\bA80s\\b|\\bA11s\\b|\\bP88HD\\b|\\bA80h\\b|\\bP76s\\b|\\bP76h\\b|\\bP98\\b|\\bA10HD\\b|\\bP78\\b|\\bP88\\b|\\bA11\\b|\\bA10t\\b|\\bP76a\\b|\\bP76t\\b|\\bP76e\\b|\\bP85HD\\b|\\bP85a\\b|\\bP86\\b|\\bP75HD\\b|\\bP76v\\b|\\bA12\\b|\\bP75a\\b|\\bA15\\b|\\bP76Ti\\b|\\bP81HD\\b|\\bA10\\b|\\bT760VE\\b|\\bT720HD\\b|\\bP76\\b|\\bP73\\b|\\bP71\\b|\\bP72\\b|\\bT720SE\\b|\\bC520Ti\\b|\\bT760\\b|\\bT720VE\\b|T720-3GE|T720-WiFi", OndaTablet:"\\b(V975i|Vi30|VX530|V701|Vi60|V701s|Vi50|V801s|V719|Vx610w|VX610W|V819i|Vi10|VX580W|Vi10|V711s|V813|V811|V820w|V820|Vi20|V711|VI30W|V712|V891w|V972|V819w|V820w|Vi60|V820w|V711|V813s|V801|V819|V975s|V801|V819|V819|V818|V811|V712|V975m|V101w|V961w|V812|V818|V971|V971s|V919|V989|V116w|V102w|V973|Vi40)\\b[\\s]+|V10 \\b4G\\b", JaytechTablet:"TPC-PA762", BlaupunktTablet:"Endeavour 800NG|Endeavour 1010", DigmaTablet:"\\b(iDx10|iDx9|iDx8|iDx7|iDxD7|iDxD8|iDsQ8|iDsQ7|iDsQ8|iDsD10|iDnD7|3TS804H|iDsQ11|iDj7|iDs10)\\b", EvolioTablet:"ARIA_Mini_wifi|Aria[ _]Mini|Evolio X10|Evolio X7|Evolio X8|\\bEvotab\\b|\\bNeura\\b", LavaTablet:"QPAD E704|\\bIvoryS\\b|E-TAB IVORY|\\bE-TAB\\b", AocTablet:"MW0811|MW0812|MW0922|MTK8382|MW1031|MW0831|MW0821|MW0931|MW0712", MpmanTablet:"MP11 OCTA|MP10 OCTA|MPQC1114|MPQC1004|MPQC994|MPQC974|MPQC973|MPQC804|MPQC784|MPQC780|\\bMPG7\\b|MPDCG75|MPDCG71|MPDC1006|MP101DC|MPDC9000|MPDC905|MPDC706HD|MPDC706|MPDC705|MPDC110|MPDC100|MPDC99|MPDC97|MPDC88|MPDC8|MPDC77|MP709|MID701|MID711|MID170|MPDC703|MPQC1010", CelkonTablet:"CT695|CT888|CT[\\s]?910|CT7 Tab|CT9 Tab|CT3 Tab|CT2 Tab|CT1 Tab|C820|C720|\\bCT-1\\b", WolderTablet:"miTab \\b(DIAMOND|SPACE|BROOKLYN|NEO|FLY|MANHATTAN|FUNK|EVOLUTION|SKY|GOCAR|IRON|GENIUS|POP|MINT|EPSILON|BROADWAY|JUMP|HOP|LEGEND|NEW AGE|LINE|ADVANCE|FEEL|FOLLOW|LIKE|LINK|LIVE|THINK|FREEDOM|CHICAGO|CLEVELAND|BALTIMORE-GH|IOWA|BOSTON|SEATTLE|PHOENIX|DALLAS|IN 101|MasterChef)\\b", MediacomTablet:"M-MPI10C3G|M-SP10EG|M-SP10EGP|M-SP10HXAH|M-SP7HXAH|M-SP10HXBH|M-SP8HXAH|M-SP8MXA", MiTablet:"\\bMI PAD\\b|\\bHM NOTE 1W\\b", NibiruTablet:"Nibiru M1|Nibiru Jupiter One", NexoTablet:"NEXO NOVA|NEXO 10|NEXO AVIO|NEXO FREE|NEXO GO|NEXO EVO|NEXO 3G|NEXO SMART|NEXO KIDDO|NEXO MOBI", LeaderTablet:"TBLT10Q|TBLT10I|TBL-10WDKB|TBL-10WDKBO2013|TBL-W230V2|TBL-W450|TBL-W500|SV572|TBLT7I|TBA-AC7-8G|TBLT79|TBL-8W16|TBL-10W32|TBL-10WKB|TBL-W100", UbislateTablet:"UbiSlate[\\s]?7C", PocketBookTablet:"Pocketbook", KocasoTablet:"\\b(TB-1207)\\b", HisenseTablet:"\\b(F5281|E2371)\\b", Hudl:"Hudl HT7S3|Hudl 2", TelstraTablet:"T-Hub2", GenericTablet:"Android.*\\b97D\\b|Tablet(?!.*PC)|BNTV250A|MID-WCDMA|LogicPD Zoom2|\\bA7EB\\b|CatNova8|A1_07|CT704|CT1002|\\bM721\\b|rk30sdk|\\bEVOTAB\\b|M758A|ET904|ALUMIUM10|Smartfren Tab|Endeavour 1010|Tablet-PC-4|Tagi Tab|\\bM6pro\\b|CT1020W|arc 10HD|\\bTP750\\b|\\bQTAQZ3\\b|WVT101|TM1088|KT107"
                  }, oss:{
                    AndroidOS:"Android", BlackBerryOS:"blackberry|\\bBB10\\b|rim tablet os", PalmOS:"PalmOS|avantgo|blazer|elaine|hiptop|palm|plucker|xiino", SymbianOS:"Symbian|SymbOS|Series60|Series40|SYB-[0-9]+|\\bS60\\b", WindowsMobileOS:"Windows CE.*(PPC|Smartphone|Mobile|[0-9]{3}x[0-9]{3})|Windows Mobile|Windows Phone [0-9.]+|WCE;", WindowsPhoneOS:"Windows Phone 10.0|Windows Phone 8.1|Windows Phone 8.0|Windows Phone OS|XBLWP7|ZuneWP7|Windows NT 6.[23]; ARM;", iOS:"\\biPhone.*Mobile|\\biPod|\\biPad|AppleCoreMedia", iPadOS:"CPU OS 13", SailfishOS:"Sailfish", MeeGoOS:"MeeGo", MaemoOS:"Maemo", JavaOS:"J2ME/|\\bMIDP\\b|\\bCLDC\\b", webOS:"webOS|hpwOS", badaOS:"\\bBada\\b", BREWOS:"BREW"
                  }, uas:{
                    Chrome:"\\bCrMo\\b|CriOS|Android.*Chrome/[.0-9]* (Mobile)?", Dolfin:"\\bDolfin\\b", Opera:"Opera.*Mini|Opera.*Mobi|Android.*Opera|Mobile.*OPR/[0-9.]+$|Coast/[0-9.]+", Skyfire:"Skyfire", Edge:"\\bEdgiOS\\b|Mobile Safari/[.0-9]* Edge", IE:"IEMobile|MSIEMobile", Firefox:"fennec|firefox.*maemo|(Mobile|Tablet).*Firefox|Firefox.*Mobile|FxiOS", Bolt:"bolt", TeaShark:"teashark", Blazer:"Blazer", Safari:"Version((?!\\bEdgiOS\\b).)*Mobile.*Safari|Safari.*Mobile|MobileSafari", WeChat:"\\bMicroMessenger\\b", UCBrowser:"UC.*Browser|UCWEB", baiduboxapp:"baiduboxapp", baidubrowser:"baidubrowser", DiigoBrowser:"DiigoBrowser", Mercury:"\\bMercury\\b", ObigoBrowser:"Obigo", NetFront:"NF-Browser", GenericBrowser:"NokiaBrowser|OviBrowser|OneBrowser|TwonkyBeamBrowser|SEMC.*Browser|FlyFlow|Minimo|NetFront|Novarra-Vision|MQQBrowser|MicroMessenger", PaleMoon:"Android.*PaleMoon|Mobile.*PaleMoon"
                  }, props:{
                    Mobile:"Mobile/[VER]", Build:"Build/[VER]", Version:"Version/[VER]", VendorID:"VendorID/[VER]", iPad:"iPad.*CPU[a-z ]+[VER]", iPhone:"iPhone.*CPU[a-z ]+[VER]", iPod:"iPod.*CPU[a-z ]+[VER]", Kindle:"Kindle/[VER]", Chrome:[
                      "Chrome/[VER]", "CriOS/[VER]", "CrMo/[VER]"
                    ], Coast:[
                      "Coast/[VER]"
                    ], Dolfin:"Dolfin/[VER]", Firefox:[
                      "Firefox/[VER]", "FxiOS/[VER]"
                    ], Fennec:"Fennec/[VER]", Edge:"Edge/[VER]", IE:[
                      "IEMobile/[VER];", "IEMobile [VER]", "MSIE [VER];", "Trident/[0-9.]+;.*rv:[VER]"
                    ], NetFront:"NetFront/[VER]", NokiaBrowser:"NokiaBrowser/[VER]", Opera:[
                      " OPR/[VER]", "Opera Mini/[VER]", "Version/[VER]"
                    ], "Opera Mini":"Opera Mini/[VER]", "Opera Mobi":"Version/[VER]", UCBrowser:[
                      "UCWEB[VER]", "UC.*Browser/[VER]"
                    ], MQQBrowser:"MQQBrowser/[VER]", MicroMessenger:"MicroMessenger/[VER]", baiduboxapp:"baiduboxapp/[VER]", baidubrowser:"baidubrowser/[VER]", SamsungBrowser:"SamsungBrowser/[VER]", Iron:"Iron/[VER]", Safari:[
                      "Version/[VER]", "Safari/[VER]"
                    ], Skyfire:"Skyfire/[VER]", Tizen:"Tizen/[VER]", Webkit:"webkit[ /][VER]", PaleMoon:"PaleMoon/[VER]", SailfishBrowser:"SailfishBrowser/[VER]", Gecko:"Gecko/[VER]", Trident:"Trident/[VER]", Presto:"Presto/[VER]", Goanna:"Goanna/[VER]", iOS:" \\bi?OS\\b [VER][ ;]{1}", Android:"Android [VER]", Sailfish:"Sailfish [VER]", BlackBerry:[
                      "BlackBerry[\\w]+/[VER]", "BlackBerry.*Version/[VER]", "Version/[VER]"
                    ], BREW:"BREW [VER]", Java:"Java/[VER]", "Windows Phone OS":[
                      "Windows Phone OS [VER]", "Windows Phone [VER]"
                    ], "Windows Phone":"Windows Phone [VER]", "Windows CE":"Windows CE/[VER]", "Windows NT":"Windows NT [VER]", Symbian:[
                      "SymbianOS/[VER]", "Symbian/[VER]"
                    ], webOS:[
                      "webOS/[VER]", "hpwOS/[VER];"
                    ]
                  }, utils:{
                    Bot:"Googlebot|facebookexternalhit|Google-AMPHTML|s~amp-validator|AdsBot-Google|Google Keyword Suggestion|Facebot|YandexBot|YandexMobileBot|bingbot|ia_archiver|AhrefsBot|Ezooms|GSLFbot|WBSearchBot|Twitterbot|TweetmemeBot|Twikle|PaperLiBot|Wotbox|UnwindFetchor|Exabot|MJ12bot|YandexImages|TurnitinBot|Pingdom|contentkingapp|AspiegelBot", MobileBot:"Googlebot-Mobile|AdsBot-Google-Mobile|YahooSeeker/M1A1-R2D2", DesktopMode:"WPDesktop", TV:"SonyDTV|HbbTV", WebKit:"(webkit)[ /]([\\w.]+)", Console:"\\b(Nintendo|Nintendo WiiU|Nintendo 3DS|Nintendo Switch|PLAYSTATION|Xbox)\\b", Watch:"SM-V700"
                  }
                }, detectMobileBrowsers:{
                  fullPattern:/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm(os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i, shortPattern:/1207|6310|6590|3gso|4thp|50[
                    1-6
                  ]
                  i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([
                    4-7
                  ]
                  0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp(i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac(|\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt(|\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg(g|\/(k|l|u)|50|54|\-[
                    a-w
                  ])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[
                    0-2
                  ]
                  |n20[
                    2-3
                  ]
                  |n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([
                    1-8
                  ]
                  |c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[
                    2-7
                  ]
                  |i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[
                    0-3
                  ]
                  |\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i, tabletPattern:/android|ipad|playbook|silk/i
                }
              }, o=Object.prototype.hasOwnProperty;
              function n(e, t){
                return null!=e&&null!=t&&e.toLowerCase()===t.toLowerCase()
              }
              function i(e, t){
                var r, o, n=e.length;
                if(!n||!t)return!1;
                for(r=t.toLowerCase(), o=0;
                o<n;
                ++o)if(r===e[
                  o
                ].toLowerCase())return!0;
                return!1
              }
              function a(e){
                for(var t in e)o.call(e, t)&&(e[
                  t
                ]
                =new RegExp(e[
                  t
                ], "i"))
              }
              function l(e, t){
                this.ua=function(e){
                  return(e||"").substr(0, 500)
                }
                (e), this._cache={
                }, this.maxPhoneWidth=t||600
              }
              return r.FALLBACK_PHONE="UnknownPhone", r.FALLBACK_TABLET="UnknownTablet", r.FALLBACK_MOBILE="UnknownMobile", e="isArray"in Array?Array.isArray:function(e){
                return"[object Array]"===Object.prototype.toString.call(e)
              }, function(){
                var t, n, i, l, c, u, s=r.mobileDetectRules;
                for(t in s.props)if(o.call(s.props, t)){
                  for(n=s.props[
                    t
                  ], e(n)||(n=[
                    n
                  ]), c=n.length, l=0;
                  l<c;
                  ++l)(u=(i=n[
                    l
                  ]).indexOf("[VER]"))>=0&&(i=i.substring(0, u)+"([\\w._\\+]+)"+i.substring(u+5)), n[
                    l
                  ]
                  =new RegExp(i, "i");
                  s.props[
                    t
                  ]
                  =n
                }
                a(s.oss), a(s.phones), a(s.tablets), a(s.uas), a(s.utils), s.oss0={
                  WindowsPhoneOS:s.oss.WindowsPhoneOS, WindowsMobileOS:s.oss.WindowsMobileOS
                }
              }
              (), r.findMatch=function(e, t){
                for(var r in e)if(o.call(e, r)&&e[
                  r
                ].test(t))return r;
                return null
              }, r.findMatches=function(e, t){
                var r=[
                ];
                for(var n in e)o.call(e, n)&&e[
                  n
                ].test(t)&&r.push(n);
                return r
              }, r.getVersionStr=function(e, t){
                var n, i, a, l, c=r.mobileDetectRules.props;
                if(o.call(c, e))for(a=(n=c[
                  e
                ]).length, i=0;
                i<a;
                ++i)if(null!==(l=n[
                  i
                ].exec(t)))return l[
                  1
                ];
                return null
              }, r.getVersion=function(e, t){
                var o=r.getVersionStr(e, t);
                return o?r.prepareVersionNo(o):NaN
              }, r.prepareVersionNo=function(e){
                var t;
                return 1===(t=e.split(/[
                  a-z._ \/\-
                ]
                /i)).length&&(e=t[
                  0
                ]), t.length>1&&(e=t[
                  0
                ]
                +".", t.shift(), e+=t.join("")), Number(e)
              }, r.isMobileFallback=function(e){
                return r.detectMobileBrowsers.fullPattern.test(e)||r.detectMobileBrowsers.shortPattern.test(e.substr(0, 4))
              }, r.isTabletFallback=function(e){
                return r.detectMobileBrowsers.tabletPattern.test(e)
              }, r.prepareDetectionCache=function(e, o, n){
                if(e.mobile===t){
                  var i, a, c;
                  if(a=r.findMatch(r.mobileDetectRules.tablets, o))return e.mobile=e.tablet=a, void(e.phone=null);
                  if(i=r.findMatch(r.mobileDetectRules.phones, o))return e.mobile=e.phone=i, void(e.tablet=null);
                  r.isMobileFallback(o)?(c=l.isPhoneSized(n))===t?(e.mobile=r.FALLBACK_MOBILE, e.tablet=e.phone=null):c?(e.mobile=e.phone=r.FALLBACK_PHONE, e.tablet=null):(e.mobile=e.tablet=r.FALLBACK_TABLET, e.phone=null):r.isTabletFallback(o)?(e.mobile=e.tablet=r.FALLBACK_TABLET, e.phone=null):e.mobile=e.tablet=e.phone=null
                }
              }, r.mobileGrade=function(e){
                var t=null!==e.mobile();
                return e.os("iOS")&&e.version("iPad")>=4.3||e.os("iOS")&&e.version("iPhone")>=3.1||e.os("iOS")&&e.version("iPod")>=3.1||e.version("Android")>2.1&&e.is("Webkit")||e.version("Windows Phone OS")>=7||e.is("BlackBerry")&&e.version("BlackBerry")>=6||e.match("Playbook.*Tablet")||e.version("webOS")>=1.4&&e.match("Palm|Pre|Pixi")||e.match("hp.*TouchPad")||e.is("Firefox")&&e.version("Firefox")>=12||e.is("Chrome")&&e.is("AndroidOS")&&e.version("Android")>=4||e.is("Skyfire")&&e.version("Skyfire")>=4.1&&e.is("AndroidOS")&&e.version("Android")>=2.3||e.is("Opera")&&e.version("Opera Mobi")>11&&e.is("AndroidOS")||e.is("MeeGoOS")||e.is("Tizen")||e.is("Dolfin")&&e.version("Bada")>=2||(e.is("UC Browser")||e.is("Dolfin"))&&e.version("Android")>=2.3||e.match("Kindle Fire")||e.is("Kindle")&&e.version("Kindle")>=3||e.is("AndroidOS")&&e.is("NookTablet")||e.version("Chrome")>=11&&!t||e.version("Safari")>=5&&!t||e.version("Firefox")>=4&&!t||e.version("MSIE")>=7&&!t||e.version("Opera")>=10&&!t?"A":e.os("iOS")&&e.version("iPad")<4.3||e.os("iOS")&&e.version("iPhone")<3.1||e.os("iOS")&&e.version("iPod")<3.1||e.is("Blackberry")&&e.version("BlackBerry")>=5&&e.version("BlackBerry")<6||e.version("Opera Mini")>=5&&e.version("Opera Mini")<=6.5&&(e.version("Android")>=2.3||e.is("iOS"))||e.match("NokiaN8|NokiaC7|N97.*Series60|Symbian/3")||e.version("Opera Mobi")>=11&&e.is("SymbianOS")?"B":(e.version("BlackBerry")<5||e.match("MSIEMobile|Windows CE.*Mobile")||e.version("Windows Mobile"), "C")
              }, r.detectOS=function(e){
                return r.findMatch(r.mobileDetectRules.oss0, e)||r.findMatch(r.mobileDetectRules.oss, e)
              }, r.getDeviceSmallerSide=function(){
                return window.screen.width<window.screen.height?window.screen.width:window.screen.height
              }, l.prototype={
                constructor:l, mobile:function(){
                  return r.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth), this._cache.mobile
                }, phone:function(){
                  return r.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth), this._cache.phone
                }, tablet:function(){
                  return r.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth), this._cache.tablet
                }, userAgent:function(){
                  return this._cache.userAgent===t&&(this._cache.userAgent=r.findMatch(r.mobileDetectRules.uas, this.ua)), this._cache.userAgent
                }, userAgents:function(){
                  return this._cache.userAgents===t&&(this._cache.userAgents=r.findMatches(r.mobileDetectRules.uas, this.ua)), this._cache.userAgents
                }, os:function(){
                  return this._cache.os===t&&(this._cache.os=r.detectOS(this.ua)), this._cache.os
                }, version:function(e){
                  return r.getVersion(e, this.ua)
                }, versionStr:function(e){
                  return r.getVersionStr(e, this.ua)
                }, is:function(e){
                  return i(this.userAgents(), e)||n(e, this.os())||n(e, this.phone())||n(e, this.tablet())||i(r.findMatches(r.mobileDetectRules.utils, this.ua), e)
                }, match:function(e){
                  return e instanceof RegExp||(e=new RegExp(e, "i")), e.test(this.ua)
                }, isPhoneSized:function(e){
                  return l.isPhoneSized(e||this.maxPhoneWidth)
                }, mobileGrade:function(){
                  return this._cache.grade===t&&(this._cache.grade=r.mobileGrade(this)), this._cache.grade
                }
              }, "undefined"!=typeof window&&window.screen?l.isPhoneSized=function(e){
                return e<0?t:r.getDeviceSmallerSide()<=e
              }
              :l.isPhoneSized=function(){
              }, l._impl=r, l.version="1.4.5 2021-03-13", l
            }))
          }
          (e.exports?function(t){
            e.exports=t()
          }
          :r.amdD)
        }, 443106:(e, t, r)=>{
          var o=r(951605), n=r(230200), i=r(372368), a=r(265077), l=r(853668), c=r(485343), u=r(724497), s=r(65190), T=r(766843), p=r(597712), f=r(83496), S=r(333747), b=r(506283), y=r(273720), d=r(186032), A=r(136490), P=r(783062), M=r(765335), h=r(832328), G=r(453105), m=r(747658), v=r(239686), g=r(764789).f, B=r(322180), w=r(491344).forEach, E=r(993524), H=r(343610), C=r(897632), I=r(899206), D=r(893054), O=I.get, R=I.set, N=H.f, L=C.f, V=Math.round, x=n.RangeError, F=u.ArrayBuffer, k=F.prototype, X=u.DataView, W=c.NATIVE_ARRAY_BUFFER_VIEWS, U=c.TYPED_ARRAY_CONSTRUCTOR, j=c.TYPED_ARRAY_TAG, _=c.TypedArray, K=c.TypedArrayPrototype, Q=c.aTypedArrayConstructor, Y=c.isTypedArray, z="BYTES_PER_ELEMENT", J="Wrong length", Z=function(e, t){
            Q(e);
            for(var r=0, o=t.length, n=new e(o);
            o>r;
            )n[
              r
            ]
            =t[
              r++
            ];
            return n
          }, q=function(e, t){
            N(e, t, {
              get:function(){
                return O(this)[
                  t
                ]
              }
            })
          }, $=function(e){
            var t;
            return m(k, e)||"ArrayBuffer"==(t=P(e))||"SharedArrayBuffer"==t
          }, ee=function(e, t){
            return Y(e)&&!h(t)&&t in e&&f(+t)&&t>=0
          }, te=function(e, t){
            return t=d(t), ee(e, t)?T(2, e[
              t
            ]):L(e, t)
          }, re=function(e, t, r){
            return t=d(t), !(ee(e, t)&&M(r)&&A(r, "value"))||A(r, "get")||A(r, "set")||r.configurable||A(r, "writable")&&!r.writable||A(r, "enumerable")&&!r.enumerable?N(e, t, r):(e[
              t
            ]
            =r.value, e)
          };
          a?(W||(C.f=te, H.f=re, q(K, "buffer"), q(K, "byteOffset"), q(K, "byteLength"), q(K, "length")), o({
            target:"Object", stat:!0, forced:!W
          }, {
            getOwnPropertyDescriptor:te, defineProperty:re
          }), e.exports=function(e, t, r){
            var a=e.match(/\d+$/)[
              0
            ]
            /8, c=e+(r?"Clamped":"")+"Array", u="get"+e, T="set"+e, f=n[
              c
            ], d=f, A=d&&d.prototype, P={
            }, h=function(e, t){
              N(e, t, {
                get:function(){
                  return function(e, t){
                    var r=O(e);
                    return r.view[
                      u
                    ]
                    (t*a+r.byteOffset, !0)
                  }
                  (this, t)
                }, set:function(e){
                  return function(e, t, o){
                    var n=O(e);
                    r&&(o=(o=V(o))<0?0:o>255?255:255&o), n.view[
                      T
                    ]
                    (t*a+n.byteOffset, o, !0)
                  }
                  (this, t, e)
                }, enumerable:!0
              })
            };
            W?l&&(d=t((function(e, t, r, o){
              return s(e, A), D(M(t)?$(t)?void 0!==o?new f(t, y(r, a), o):void 0!==r?new f(t, y(r, a)):new f(t):Y(t)?Z(d, t):i(B, d, t):new f(b(t)), e, d)
            })), v&&v(d, _), w(g(f), (function(e){
              e in d||p(d, e, f[
                e
              ])
            })), d.prototype=A):(d=t((function(e, t, r, o){
              s(e, A);
              var n, l, c, u=0, T=0;
              if(M(t)){
                if(!$(t))return Y(t)?Z(d, t):i(B, d, t);
                n=t, T=y(r, a);
                var p=t.byteLength;
                if(void 0===o){
                  if(p%a)throw x(J);
                  if((l=p-T)<0)throw x(J)
                }
                else if((l=S(o)*a)+T>p)throw x(J);
                c=l/a
              }
              else c=b(t), n=new F(l=c*a);
              for(R(e, {
                buffer:n, byteOffset:T, byteLength:l, length:c, view:new X(n)
              });
              u<c;
              )h(e, u++)
            })), v&&v(d, _), A=d.prototype=G(K)), A.constructor!==d&&p(A, "constructor", d), p(A, U, d), j&&p(A, j, c), P[
              c
            ]
            =d, o({
              global:!0, forced:d!=f, sham:!W
            }, P), z in d||p(d, z, a), z in A||p(A, z, a), E(c)
          }):e.exports=function(){
          }
        }, 453128:(e, t, r)=>{
          var o=r(769675), n=r(358859), i=r(714803), a=r(380507), l=r(572271)||a||i;
          e.exports=function(){
            var e, t={
              assert:function(e){
                if(!t.has(e))throw new o("Side channel does not contain "+n(e))
              }, delete:function(t){
                return!!e&&e.delete(t)
              }, get:function(t){
                return e&&e.get(t)
              }, has:function(t){
                return!!e&&e.has(t)
              }, set:function(t, r){
                e||(e=l()), e.set(t, r)
              }
            };
            return t
          }
        }, 468002:e=>{
          e.exports=Math.min
        }, 474921:e=>{
          var t="Function.prototype.bind called on incompatible ", r=Object.prototype.toString, o=Math.max, n="[object Function]", i=function(e, t){
            for(var r=[
            ], o=0;
            o<e.length;
            o+=1)r[
              o
            ]
            =e[
              o
            ];
            for(var n=0;
            n<t.length;
            n+=1)r[
              n+e.length
            ]
            =t[
              n
            ];
            return r
          }, a=function(e, t){
            for(var r=[
            ], o=t||0, n=0;
            o<e.length;
            o+=1, n+=1)r[
              n
            ]
            =e[
              o
            ];
            return r
          }, l=function(e, t){
            for(var r="", o=0;
            o<e.length;
            o+=1)r+=e[
              o
            ], o+1<e.length&&(r+=t);
            return r
          };
          e.exports=function(e){
            var c=this;
            if("function"!=typeof c||r.apply(c)!==n)throw new TypeError(t+c);
            for(var u, s=a(arguments, 1), T=function(){
              if(this instanceof u){
                var t=c.apply(this, i(s, arguments));
                return Object(t)===t?t:this
              }
              return c.apply(e, i(s, arguments))
            }, p=o(0, c.length-s.length), f=[
            ], S=0;
            S<p;
            S++)f[
              S
            ]
            ="$"+S;
            if(u=Function("binder", "return function ("+l(f, ",")+"){ return binder.apply(this,arguments); }")(T), c.prototype){
              var b=function(){
              };
              b.prototype=c.prototype, u.prototype=new b, b.prototype=null
            }
            return u
          }
        }, 479538:e=>{
          e.exports=ReferenceError
        }, 485343:(e, t, r)=>{
          var o, n, i, a=r(709809), l=r(265077), c=r(230200), u=r(278420), s=r(765335), T=r(136490), p=r(783062), f=r(313838), S=r(597712), b=r(997485), y=r(343610).f, d=r(747658), A=r(697970), P=r(239686), M=r(631602), h=r(550665), G=c.Int8Array, m=G&&G.prototype, v=c.Uint8ClampedArray, g=v&&v.prototype, B=G&&A(G), w=m&&A(m), E=Object.prototype, H=c.TypeError, C=M("toStringTag"), I=h("TYPED_ARRAY_TAG"), D=h("TYPED_ARRAY_CONSTRUCTOR"), O=a&&!!P&&"Opera"!==p(c.opera), R=!1, N={
            Int8Array:1, Uint8Array:1, Uint8ClampedArray:1, Int16Array:2, Uint16Array:2, Int32Array:4, Uint32Array:4, Float32Array:4, Float64Array:8
          }, L={
            BigInt64Array:8, BigUint64Array:8
          }, V=function(e){
            if(!s(e))return!1;
            var t=p(e);
            return T(N, t)||T(L, t)
          };
          for(o in N)(i=(n=c[
            o
          ])&&n.prototype)?S(i, D, n):O=!1;
          for(o in L)(i=(n=c[
            o
          ])&&n.prototype)&&S(i, D, n);
          if((!O||!u(B)||B===Function.prototype)&&(B=function(){
            throw H("Incorrect invocation")
          }, O))for(o in N)c[
            o
          ]
          &&P(c[
            o
          ], B);
          if((!O||!w||w===E)&&(w=B.prototype, O))for(o in N)c[
            o
          ]
          &&P(c[
            o
          ].prototype, w);
          if(O&&A(g)!==w&&P(g, w), l&&!T(w, C))for(o in R=!0, y(w, C, {
            get:function(){
              return s(this)?this[
                I
              ]
              :void 0
            }
          }), N)c[
            o
          ]
          &&S(c[
            o
          ], I, o);
          e.exports={
            NATIVE_ARRAY_BUFFER_VIEWS:O, TYPED_ARRAY_CONSTRUCTOR:D, TYPED_ARRAY_TAG:R&&I, aTypedArray:function(e){
              if(V(e))return e;
              throw H("Target is not a typed array")
            }, aTypedArrayConstructor:function(e){
              if(u(e)&&(!P||d(B, e)))return e;
              throw H(f(e)+" is not a typed array constructor")
            }, exportTypedArrayMethod:function(e, t, r, o){
              if(l){
                if(r)for(var n in N){
                  var i=c[
                    n
                  ];
                  if(i&&T(i.prototype, e))try{
                    delete i.prototype[
                      e
                    ]
                  }
                  catch(r){
                    try{
                      i.prototype[
                        e
                      ]
                      =t
                    }
                    catch(e){
                    }
                  }
                }
                w[
                  e
                ]
                &&!r||b(w, e, r?t:O&&m[
                  e
                ]
                ||t, o)
              }
            }, exportTypedArrayStaticMethod:function(e, t, r){
              var o, n;
              if(l){
                if(P){
                  if(r)for(o in N)if((n=c[
                    o
                  ])&&T(n, e))try{
                    delete n[
                      e
                    ]
                  }
                  catch(e){
                  }
                  if(B[
                    e
                  ]
                  &&!r)return;
                  try{
                    return b(B, e, r?t:O&&B[
                      e
                    ]
                    ||t)
                  }
                  catch(e){
                  }
                }
                for(o in N)!(n=c[
                  o
                ])||n[
                  e
                ]
                &&!r||b(n, e, t)
              }
            }, isView:function(e){
              if(!s(e))return!1;
              var t=p(e);
              return"DataView"===t||T(N, t)||T(L, t)
            }, isTypedArray:V, TypedArray:B, TypedArrayPrototype:w
          }
        }, 498636:(e, t, r)=>{
          var o=r(453128), n=r(237720), i=r(774765), a=Object.prototype.hasOwnProperty, l={
            brackets:function(e){
              return e+"[]"
            }, comma:"comma", indices:function(e, t){
              return e+"["+t+"]"
            }, repeat:function(e){
              return e
            }
          }, c=Array.isArray, u=Array.prototype.push, s=function(e, t){
            u.apply(e, c(t)?t:[
              t
            ])
          }, T=Date.prototype.toISOString, p=i.default, f={
            addQueryPrefix:!1, allowDots:!1, allowEmptyArrays:!1, arrayFormat:"indices", charset:"utf-8", charsetSentinel:!1, delimiter:"&", encode:!0, encodeDotInKeys:!1, encoder:n.encode, encodeValuesOnly:!1, format:p, formatter:i.formatters[
              p
            ], indices:!1, serializeDate:function(e){
              return T.call(e)
            }, skipNulls:!1, strictNullHandling:!1
          }, S={
          }, b=function e(t, r, i, a, l, u, T, p, b, y, d, A, P, M, h, G, m, v){
            for(var g, B=t, w=v, E=0, H=!1;
            void 0!==(w=w.get(S))&&!H;
            ){
              var C=w.get(t);
              if(E+=1, void 0!==C){
                if(C===E)throw new RangeError("Cyclic object value");
                H=!0
              }
              void 0===w.get(S)&&(E=0)
            }
            if("function"==typeof y?B=y(r, B):B instanceof Date?B=P(B):"comma"===i&&c(B)&&(B=n.maybeMap(B, (function(e){
              return e instanceof Date?P(e):e
            }))), null===B){
              if(u)return b&&!G?b(r, f.encoder, m, "key", M):r;
              B=""
            }
            if("string"==typeof(g=B)||"number"==typeof g||"boolean"==typeof g||"symbol"==typeof g||"bigint"==typeof g||n.isBuffer(B))return b?[
              h(G?r:b(r, f.encoder, m, "key", M))+"="+h(b(B, f.encoder, m, "value", M))
            ]
            :[
              h(r)+"="+h(String(B))
            ];
            var I, D=[
            ];
            if(void 0===B)return D;
            if("comma"===i&&c(B))G&&b&&(B=n.maybeMap(B, b)), I=[
              {
                value:B.length>0?B.join(",")||null:void 0
              }
            ];
            else if(c(y))I=y;
            else{
              var O=Object.keys(B);
              I=d?O.sort(d):O
            }
            var R=p?r.replace(/\./g, "%2E"):r, N=a&&c(B)&&1===B.length?R+"[]":R;
            if(l&&c(B)&&0===B.length)return N+"[]";
            for(var L=0;
            L<I.length;
            ++L){
              var V=I[
                L
              ], x="object"==typeof V&&void 0!==V.value?V.value:B[
                V
              ];
              if(!T||null!==x){
                var F=A&&p?V.replace(/\./g, "%2E"):V, k=c(B)?"function"==typeof i?i(N, F):N:N+(A?"."+F:"["+F+"]");
                v.set(t, E);
                var X=o();
                X.set(S, v), s(D, e(x, k, i, a, l, u, T, p, "comma"===i&&G&&c(B)?null:b, y, d, A, P, M, h, G, m, X))
              }
            }
            return D
          };
          e.exports=function(e, t){
            var r, n=e, u=function(e){
              if(!e)return f;
              if(void 0!==e.allowEmptyArrays&&"boolean"!=typeof e.allowEmptyArrays)throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
              if(void 0!==e.encodeDotInKeys&&"boolean"!=typeof e.encodeDotInKeys)throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
              if(null!==e.encoder&&void 0!==e.encoder&&"function"!=typeof e.encoder)throw new TypeError("Encoder has to be a function.");
              var t=e.charset||f.charset;
              if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
              var r=i.default;
              if(void 0!==e.format){
                if(!a.call(i.formatters, e.format))throw new TypeError("Unknown format option provided.");
                r=e.format
              }
              var o, n=i.formatters[
                r
              ], u=f.filter;
              if(("function"==typeof e.filter||c(e.filter))&&(u=e.filter), o=e.arrayFormat in l?e.arrayFormat:"indices"in e?e.indices?"indices":"repeat":f.arrayFormat, "commaRoundTrip"in e&&"boolean"!=typeof e.commaRoundTrip)throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
              var s=void 0===e.allowDots?!0===e.encodeDotInKeys||f.allowDots:!!e.allowDots;
              return{
                addQueryPrefix:"boolean"==typeof e.addQueryPrefix?e.addQueryPrefix:f.addQueryPrefix, allowDots:s, allowEmptyArrays:"boolean"==typeof e.allowEmptyArrays?!!e.allowEmptyArrays:f.allowEmptyArrays, arrayFormat:o, charset:t, charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:f.charsetSentinel, commaRoundTrip:e.commaRoundTrip, delimiter:void 0===e.delimiter?f.delimiter:e.delimiter, encode:"boolean"==typeof e.encode?e.encode:f.encode, encodeDotInKeys:"boolean"==typeof e.encodeDotInKeys?e.encodeDotInKeys:f.encodeDotInKeys, encoder:"function"==typeof e.encoder?e.encoder:f.encoder, encodeValuesOnly:"boolean"==typeof e.encodeValuesOnly?e.encodeValuesOnly:f.encodeValuesOnly, filter:u, format:r, formatter:n, serializeDate:"function"==typeof e.serializeDate?e.serializeDate:f.serializeDate, skipNulls:"boolean"==typeof e.skipNulls?e.skipNulls:f.skipNulls, sort:"function"==typeof e.sort?e.sort:null, strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:f.strictNullHandling
              }
            }
            (t);
            "function"==typeof u.filter?n=(0, u.filter)("", n):c(u.filter)&&(r=u.filter);
            var T=[
            ];
            if("object"!=typeof n||null===n)return"";
            var p=l[
              u.arrayFormat
            ], S="comma"===p&&u.commaRoundTrip;
            r||(r=Object.keys(n)), u.sort&&r.sort(u.sort);
            for(var y=o(), d=0;
            d<r.length;
            ++d){
              var A=r[
                d
              ];
              u.skipNulls&&null===n[
                A
              ]
              ||s(T, b(n[
                A
              ], A, p, S, u.allowEmptyArrays, u.strictNullHandling, u.skipNulls, u.encodeDotInKeys, u.encode?u.encoder:null, u.filter, u.sort, u.allowDots, u.serializeDate, u.format, u.formatter, u.encodeValuesOnly, u.charset, y))
            }
            var P=T.join(u.delimiter), M=!0===u.addQueryPrefix?"?":"";
            return u.charsetSentinel&&("iso-8859-1"===u.charset?M+="utf8=%26%2310003%3B&":M+="utf8=%E2%9C%93&"), P.length>0?M+P:""
          }
        }, 506188:e=>{
          e.exports=Math.max
        }, 536696:(e, t, r)=>{
          var o=r(230200), n=r(699070), i=r(485343), a=r(692074), l=r(429609), c=o.Int8Array, u=i.aTypedArray, s=i.exportTypedArrayMethod, T=[
          ].toLocaleString, p=!!c&&a((function(){
            T.call(new c(1))
          }));
          s("toLocaleString", (function(){
            return n(T, p?l(u(this)):u(this), l(arguments))
          }), a((function(){
            return[
              1, 2
            ].toLocaleString()!=new c([
              1, 2
            ]).toLocaleString()
          }))||!a((function(){
            c.prototype.toLocaleString.call([
              1, 2
            ])
          })))
        }, 564119:(e, t, r)=>{
          var o="undefined"!=typeof Symbol&&Symbol, n=r(185669);
          e.exports=function(){
            return"function"==typeof o&&("function"==typeof Symbol&&("symbol"==typeof o("foo")&&("symbol"==typeof Symbol("bar")&&n())))
          }
        }, 570453:(e, t, r)=>{
          var o, n=r(679612), i=r(269383), a=r(341237), l=r(179290), c=r(479538), u=r(358068), s=r(769675), T=r(35345), p=r(271514), f=r(58968), S=r(506188), b=r(468002), y=r(975880), d=r(970414), A=r(273093), P=Function, M=function(e){
            try{
              return P('"use strict"; return ('+e+").constructor;")()
            }
            catch(e){
            }
          }, h=r(675795), G=r(876879), m=function(){
            throw new s
          }, v=h?function(){
            try{
              return m
            }
            catch(e){
              try{
                return h(arguments, "callee").get
              }
              catch(e){
                return m
              }
            }
          }
          ():m, g=r(564119)(), B=r(393628), w=r(771064), E=r(948648), H=r(611002), C=r(610076), I={
          }, D="undefined"!=typeof Uint8Array&&B?B(Uint8Array):o, O={
            __proto__:null, "%AggregateError%":"undefined"==typeof AggregateError?o:AggregateError, "%Array%":Array, "%ArrayBuffer%":"undefined"==typeof ArrayBuffer?o:ArrayBuffer, "%ArrayIteratorPrototype%":g&&B?B([
            ]
            [
              Symbol.iterator
            ]
            ()):o, "%AsyncFromSyncIteratorPrototype%":o, "%AsyncFunction%":I, "%AsyncGenerator%":I, "%AsyncGeneratorFunction%":I, "%AsyncIteratorPrototype%":I, "%Atomics%":"undefined"==typeof Atomics?o:Atomics, "%BigInt%":"undefined"==typeof BigInt?o:BigInt, "%BigInt64Array%":"undefined"==typeof BigInt64Array?o:BigInt64Array, "%BigUint64Array%":"undefined"==typeof BigUint64Array?o:BigUint64Array, "%Boolean%":Boolean, "%DataView%":"undefined"==typeof DataView?o:DataView, "%Date%":Date, "%decodeURI%":decodeURI, "%decodeURIComponent%":decodeURIComponent, "%encodeURI%":encodeURI, "%encodeURIComponent%":encodeURIComponent, "%Error%":i, "%eval%":eval, "%EvalError%":a, "%Float16Array%":"undefined"==typeof Float16Array?o:Float16Array, "%Float32Array%":"undefined"==typeof Float32Array?o:Float32Array, "%Float64Array%":"undefined"==typeof Float64Array?o:Float64Array, "%FinalizationRegistry%":"undefined"==typeof FinalizationRegistry?o:FinalizationRegistry, "%Function%":P, "%GeneratorFunction%":I, "%Int8Array%":"undefined"==typeof Int8Array?o:Int8Array, "%Int16Array%":"undefined"==typeof Int16Array?o:Int16Array, "%Int32Array%":"undefined"==typeof Int32Array?o:Int32Array, "%isFinite%":isFinite, "%isNaN%":isNaN, "%IteratorPrototype%":g&&B?B(B([
            ]
            [
              Symbol.iterator
            ]
            ())):o, "%JSON%":"object"==typeof JSON?JSON:o, "%Map%":"undefined"==typeof Map?o:Map, "%MapIteratorPrototype%":"undefined"!=typeof Map&&g&&B?B((new Map)[
              Symbol.iterator
            ]
            ()):o, "%Math%":Math, "%Number%":Number, "%Object%":n, "%Object.getOwnPropertyDescriptor%":h, "%parseFloat%":parseFloat, "%parseInt%":parseInt, "%Promise%":"undefined"==typeof Promise?o:Promise, "%Proxy%":"undefined"==typeof Proxy?o:Proxy, "%RangeError%":l, "%ReferenceError%":c, "%Reflect%":"undefined"==typeof Reflect?o:Reflect, "%RegExp%":RegExp, "%Set%":"undefined"==typeof Set?o:Set, "%SetIteratorPrototype%":"undefined"!=typeof Set&&g&&B?B((new Set)[
              Symbol.iterator
            ]
            ()):o, "%SharedArrayBuffer%":"undefined"==typeof SharedArrayBuffer?o:SharedArrayBuffer, "%String%":String, "%StringIteratorPrototype%":g&&B?B(""[
              Symbol.iterator
            ]
            ()):o, "%Symbol%":g?Symbol:o, "%SyntaxError%":u, "%ThrowTypeError%":v, "%TypedArray%":D, "%TypeError%":s, "%Uint8Array%":"undefined"==typeof Uint8Array?o:Uint8Array, "%Uint8ClampedArray%":"undefined"==typeof Uint8ClampedArray?o:Uint8ClampedArray, "%Uint16Array%":"undefined"==typeof Uint16Array?o:Uint16Array, "%Uint32Array%":"undefined"==typeof Uint32Array?o:Uint32Array, "%URIError%":T, "%WeakMap%":"undefined"==typeof WeakMap?o:WeakMap, "%WeakRef%":"undefined"==typeof WeakRef?o:WeakRef, "%WeakSet%":"undefined"==typeof WeakSet?o:WeakSet, "%Function.prototype.call%":C, "%Function.prototype.apply%":H, "%Object.defineProperty%":G, "%Object.getPrototypeOf%":w, "%Math.abs%":p, "%Math.floor%":f, "%Math.max%":S, "%Math.min%":b, "%Math.pow%":y, "%Math.round%":d, "%Math.sign%":A, "%Reflect.getPrototypeOf%":E
          };
          if(B)try{
            null.error
          }
          catch(e){
            var R=B(B(e));
            O[
              "%Error.prototype%"
            ]
            =R
          }
          var N=function e(t){
            var r;
            if("%AsyncFunction%"===t)r=M("async function () {}");
            else if("%GeneratorFunction%"===t)r=M("function* () {}");
            else if("%AsyncGeneratorFunction%"===t)r=M("async function* () {}");
            else if("%AsyncGenerator%"===t){
              var o=e("%AsyncGeneratorFunction%");
              o&&(r=o.prototype)
            }
            else if("%AsyncIteratorPrototype%"===t){
              var n=e("%AsyncGenerator%");
              n&&B&&(r=B(n.prototype))
            }
            return O[
              t
            ]
            =r, r
          }, L={
            __proto__:null, "%ArrayBufferPrototype%":[
              "ArrayBuffer", "prototype"
            ], "%ArrayPrototype%":[
              "Array", "prototype"
            ], "%ArrayProto_entries%":[
              "Array", "prototype", "entries"
            ], "%ArrayProto_forEach%":[
              "Array", "prototype", "forEach"
            ], "%ArrayProto_keys%":[
              "Array", "prototype", "keys"
            ], "%ArrayProto_values%":[
              "Array", "prototype", "values"
            ], "%AsyncFunctionPrototype%":[
              "AsyncFunction", "prototype"
            ], "%AsyncGenerator%":[
              "AsyncGeneratorFunction", "prototype"
            ], "%AsyncGeneratorPrototype%":[
              "AsyncGeneratorFunction", "prototype", "prototype"
            ], "%BooleanPrototype%":[
              "Boolean", "prototype"
            ], "%DataViewPrototype%":[
              "DataView", "prototype"
            ], "%DatePrototype%":[
              "Date", "prototype"
            ], "%ErrorPrototype%":[
              "Error", "prototype"
            ], "%EvalErrorPrototype%":[
              "EvalError", "prototype"
            ], "%Float32ArrayPrototype%":[
              "Float32Array", "prototype"
            ], "%Float64ArrayPrototype%":[
              "Float64Array", "prototype"
            ], "%FunctionPrototype%":[
              "Function", "prototype"
            ], "%Generator%":[
              "GeneratorFunction", "prototype"
            ], "%GeneratorPrototype%":[
              "GeneratorFunction", "prototype", "prototype"
            ], "%Int8ArrayPrototype%":[
              "Int8Array", "prototype"
            ], "%Int16ArrayPrototype%":[
              "Int16Array", "prototype"
            ], "%Int32ArrayPrototype%":[
              "Int32Array", "prototype"
            ], "%JSONParse%":[
              "JSON", "parse"
            ], "%JSONStringify%":[
              "JSON", "stringify"
            ], "%MapPrototype%":[
              "Map", "prototype"
            ], "%NumberPrototype%":[
              "Number", "prototype"
            ], "%ObjectPrototype%":[
              "Object", "prototype"
            ], "%ObjProto_toString%":[
              "Object", "prototype", "toString"
            ], "%ObjProto_valueOf%":[
              "Object", "prototype", "valueOf"
            ], "%PromisePrototype%":[
              "Promise", "prototype"
            ], "%PromiseProto_then%":[
              "Promise", "prototype", "then"
            ], "%Promise_all%":[
              "Promise", "all"
            ], "%Promise_reject%":[
              "Promise", "reject"
            ], "%Promise_resolve%":[
              "Promise", "resolve"
            ], "%RangeErrorPrototype%":[
              "RangeError", "prototype"
            ], "%ReferenceErrorPrototype%":[
              "ReferenceError", "prototype"
            ], "%RegExpPrototype%":[
              "RegExp", "prototype"
            ], "%SetPrototype%":[
              "Set", "prototype"
            ], "%SharedArrayBufferPrototype%":[
              "SharedArrayBuffer", "prototype"
            ], "%StringPrototype%":[
              "String", "prototype"
            ], "%SymbolPrototype%":[
              "Symbol", "prototype"
            ], "%SyntaxErrorPrototype%":[
              "SyntaxError", "prototype"
            ], "%TypedArrayPrototype%":[
              "TypedArray", "prototype"
            ], "%TypeErrorPrototype%":[
              "TypeError", "prototype"
            ], "%Uint8ArrayPrototype%":[
              "Uint8Array", "prototype"
            ], "%Uint8ClampedArrayPrototype%":[
              "Uint8ClampedArray", "prototype"
            ], "%Uint16ArrayPrototype%":[
              "Uint16Array", "prototype"
            ], "%Uint32ArrayPrototype%":[
              "Uint32Array", "prototype"
            ], "%URIErrorPrototype%":[
              "URIError", "prototype"
            ], "%WeakMapPrototype%":[
              "WeakMap", "prototype"
            ], "%WeakSetPrototype%":[
              "WeakSet", "prototype"
            ]
          }, V=r(896135), x=r(9957), F=V.call(C, Array.prototype.concat), k=V.call(H, Array.prototype.splice), X=V.call(C, String.prototype.replace), W=V.call(C, String.prototype.slice), U=V.call(C, RegExp.prototype.exec), j=/[
            ^%.[
              \
            ]
          ]
          +|\[
            (?:(-?\d+(?:\.\d+)?)|([
              "'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,_=/\\(\\)?/g,K=function(e){var t=W(e,0,1),r=W(e,-1);if("%"===t&&"%"!==r)throw new u("invalid intrinsic syntax, expected closing `%`");if("%"===r&&"%"!==t)throw new u("invalid intrinsic syntax, expected opening `%`");var o=[];return X(e,j,(function(e,t,r,n){o[o.length]=r?X(n,_,"$1"):t||e})),o},Q=function(e,t){var r,o=e;if(x(L,o)&&(o="%"+(r=L[o])[0]+"%"),x(O,o)){var n=O[o];if(n===I&&(n=N(o)),void 0===n&&!t)throw new s("intrinsic "+e+" exists, but is not available. Please file an issue!");return{alias:r,name:o,value:n}}throw new u("intrinsic "+e+" does not exist!")};e.exports=function(e,t){if("string"!=typeof e||0===e.length)throw new s("intrinsic name must be a non-empty string");if(arguments.length>1&&"boolean"!=typeof t)throw new s('"allowMissing" argument must be a boolean');if(null===U(/^%?[^%]*%?$/,e))throw new u("`%` may not be present anywhere but at the beginning and end of the intrinsic name");var r=K(e),o=r.length>0?r[0]:"",n=Q("%"+o+"%",t),i=n.name,a=n.value,l=!1,c=n.alias;c&&(o=c[0],k(r,F([0,1],c)));for(var T=1,p=!0;T<r.length;T+=1){var f=r[T],S=W(f,0,1),b=W(f,-1);if(('"'===S||"'"===S||"`"===S||'"'===b||"'"===b||"`"===b)&&S!==b)throw new u("property names with quotes must have matching quotes");if("constructor"!==f&&p||(l=!0),x(O,i="%"+(o+="."+f)+"%"))a=O[i];else if(null!=a){if(!(f in a)){if(!t)throw new s("base intrinsic for "+e+" exists, but the property is not available.");return}if(h&&T+1>=r.length){var y=h(a,f);a=(p=!!y)&&"get"in y&&!("originalValue"in y.get)?y.get:a[f]}else p=x(a,f),a=a[f];p&&!l&&(O[i]=a)}}return a}},572271:(e,t,r)=>{var o=r(570453),n=r(136556),i=r(358859),a=r(380507),l=r(769675),c=o("%WeakMap%",!0),u=n("WeakMap.prototype.get",!0),s=n("WeakMap.prototype.set",!0),T=n("WeakMap.prototype.has",!0),p=n("WeakMap.prototype.delete",!0);e.exports=c?function(){var e,t,r={assert:function(e){if(!r.has(e))throw new l("Side channel does not contain "+i(e))},delete:function(r){if(c&&r&&("object"==typeof r||"function"==typeof r)){if(e)return p(e,r)}else if(a&&t)return t.delete(r);return!1},get:function(r){return c&&r&&("object"==typeof r||"function"==typeof r)&&e?u(e,r):t&&t.get(r)},has:function(r){return c&&r&&("object"==typeof r||"function"==typeof r)&&e?T(e,r):!!t&&t.has(r)},set:function(r,o){c&&r&&("object"==typeof r||"function"==typeof r)?(e||(e=new c),s(e,r,o)):a&&(t||(t=a()),t.set(r,o))}};return r}:a},580702:e=>{var t="Function.prototype.bind called on incompatible ",r=Object.prototype.toString,o=Math.max,n="[
                object Function
              ]
              ",i=function(e,t){for(var r=[],o=0;o<e.length;o+=1)r[o]=e[o];for(var n=0;n<t.length;n+=1)r[n+e.length]=t[n];return r},a=function(e,t){for(var r=[],o=t||0,n=0;o<e.length;o+=1,n+=1)r[n]=e[o];return r},l=function(e,t){for(var r="",o=0;o<e.length;o+=1)r+=e[o],o+1<e.length&&(r+=t);return r};e.exports=function(e){var c=this;if("function"!=typeof c||r.apply(c)!==n)throw new TypeError(t+c);for(var u,s=a(arguments,1),T=function(){if(this instanceof u){var t=c.apply(this,i(s,arguments));return Object(t)===t?t:this}return c.apply(e,i(s,arguments))},p=o(0,c.length-s.length),f=[],S=0;S<p;S++)f[S]="$"+S;if(u=Function("binder","return function ("+l(f,", ")+"){
                return binder.apply(this, arguments);
              }
              ")(T),c.prototype){var b=function(){};b.prototype=c.prototype,u.prototype=new b,b.prototype=null}return u}},610076:e=>{e.exports=Function.prototype.call},611002:e=>{e.exports=Function.prototype.apply},647119:e=>{e.exports="undefined"!=typeof Reflect&&Reflect&&Reflect.apply},675795:(e,t,r)=>{var o=r(906549);if(o)try{o([],"length")}catch(e){o=null}e.exports=o},679612:e=>{e.exports=Object},713144:(e,t,r)=>{var o=r(784742),n=r(611002),i=r(610076),a=r(647119);e.exports=a||o.call(i,n)},714803:(e,t,r)=>{var o=r(358859),n=r(769675),i=function(e,t,r){for(var o,n=e;null!=(o=n.next);n=o)if(o.key===t)return n.next=o.next,r||(o.next=e.next,e.next=o),o};e.exports=function(){var e,t={assert:function(e){if(!t.has(e))throw new n("Side channel does not contain "+o(e))},delete:function(t){var r=e&&e.next,o=function(e,t){if(e)return i(e,t,!0)}(e,t);return o&&r&&r===o&&(e=void 0),!!o},get:function(t){return function(e,t){if(e){var r=i(e,t);return r&&r.value}}(e,t)},has:function(t){return function(e,t){return!!e&&!!i(e,t)}(e,t)},set:function(t,r){e||(e={next:void 0}),function(e,t,r){var o=i(e,t);o?o.value=r:e.next={key:t,next:e.next,value:r}}(e,t,r)}};return t}},755373:(e,t,r)=>{var o=r(498636),n=r(162642),i=r(774765);e.exports={formats:i,parse:n,stringify:o}},769675:e=>{e.exports=TypeError},771064:(e,t,r)=>{var o=r(679612);e.exports=o.getPrototypeOf||null},774765:e=>{var t=String.prototype.replace,r=/%20/g,o="RFC1738",n="RFC3986";e.exports={default:n,formatters:{RFC1738:function(e){return t.call(e,r,"+")},RFC3986:function(e){return String(e)}},RFC1738:o,RFC3986:n}},784742:(e,t,r)=>{var o=r(580702);e.exports=Function.prototype.bind||o},791936:function(e,t,r){var o,n=n||function(e){if(!(void 0===e||"undefined"!=typeof navigator&&/MSIE [1-9]\./.test(navigator.userAgent))){var t=e.document,r=function(){return e.URL||e.webkitURL||e},o=t.createElementNS("http://www.w3.org/1999/xhtml","a"),n="download"in o,i=/constructor/i.test(e.HTMLElement)||e.safari,a=/CriOS\/[\d]+/.test(navigator.userAgent),l=function(t){(e.setImmediate||e.setTimeout)((function(){throw t}),0)},c=function(e){setTimeout((function(){"string"==typeof e?r().revokeObjectURL(e):e.remove()}),4e4)},u=function(e){return/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob([String.fromCharCode(65279),e],{type:e.type}):e},s=function(t,s,T){T||(t=u(t));var p,f=this,S="application/octet-stream"===t.type,b=function(){!function(e,t,r){for(var o=(t=[].concat(t)).length;o--;){var n=e["on"+t[o]];if("function"==typeof n)try{n.call(e,r||e)}catch(e){l(e)}}}(f,"writestart progress write writeend".split(" "))};if(f.readyState=f.INIT,n)return p=r().createObjectURL(t),void setTimeout((function(){var e,t;o.href=p,o.download=s,e=o,t=new MouseEvent("click"),e.dispatchEvent(t),b(),c(p),f.readyState=f.DONE}));!function(){if((a||S&&i)&&e.FileReader){var o=new FileReader;return o.onloadend=function(){var t=a?o.result:o.result.replace(/^data:[^;]*;/,"data:attachment/file;");e.open(t,"_blank")||(e.location.href=t),t=void 0,f.readyState=f.DONE,b()},o.readAsDataURL(t),void(f.readyState=f.INIT)}(p||(p=r().createObjectURL(t)),S)?e.location.href=p:e.open(p,"_blank")||(e.location.href=p);f.readyState=f.DONE,b(),c(p)}()},T=s.prototype;return"undefined"!=typeof navigator&&navigator.msSaveOrOpenBlob?function(e,t,r){return t=t||e.name||"download",r||(e=u(e)),navigator.msSaveOrOpenBlob(e,t)}:(T.abort=function(){},T.readyState=T.INIT=0,T.WRITING=1,T.DONE=2,T.error=T.onwritestart=T.onprogress=T.onwrite=T.onabort=T.onerror=T.onwriteend=null,function(e,t,r){return new s(e,t||e.name||"download",r)})}}("undefined"!=typeof self&&self||"undefined"!=typeof window&&window||this.content);e.exports?e.exports.saveAs=n:null!==r.amdD&&null!==r.amdO&&(void 0===(o=function(){return n}.call(t,r,t,e))||(e.exports=o))},832992:(e,t,r)=>{var o,n=function(){var e=String.fromCharCode,t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",o={};function n(e,t){if(!o[e]){o[e]={};for(var r=0;r<e.length;r++)o[e][e.charAt(r)]=r}return o[e][t]}var i={compressToBase64:function(e){if(null==e)return"";var r=i._compress(e,6,(function(e){return t.charAt(e)}));switch(r.length%4){default:case 0:return r;case 1:return r+"===";case 2:return r+"==";case 3:return r+"="}},decompressFromBase64:function(e){return null==e?"":""==e?null:i._decompress(e.length,32,(function(r){return n(t,e.charAt(r))}))},compressToUTF16:function(t){return null==t?"":i._compress(t,15,(function(t){return e(t+32)}))+" "},decompressFromUTF16:function(e){return null==e?"":""==e?null:i._decompress(e.length,16384,(function(t){return e.charCodeAt(t)-32}))},compressToUint8Array:function(e){for(var t=i.compress(e),r=new Uint8Array(2*t.length),o=0,n=t.length;o<n;o++){var a=t.charCodeAt(o);r[2*o]=a>>>8,r[2*o+1]=a%256}return r},decompressFromUint8Array:function(t){if(null==t)return i.decompress(t);for(var r=new Array(t.length/2),o=0,n=r.length;o<n;o++)r[o]=256*t[2*o]+t[2*o+1];var a=[];return r.forEach((function(t){a.push(e(t))})),i.decompress(a.join(""))},compressToEncodedURIComponent:function(e){return null==e?"":i._compress(e,6,(function(e){return r.charAt(e)}))},decompressFromEncodedURIComponent:function(e){return null==e?"":""==e?null:(e=e.replace(/ /g,"+"),i._decompress(e.length,32,(function(t){return n(r,e.charAt(t))})))},compress:function(t){return i._compress(t,16,(function(t){return e(t)}))},_compress:function(e,t,r){if(null==e)return"";var o,n,i,a={},l={},c="",u="",s="",T=2,p=3,f=2,S=[],b=0,y=0;for(i=0;i<e.length;i+=1)if(c=e.charAt(i),Object.prototype.hasOwnProperty.call(a,c)||(a[c]=p++,l[c]=!0),u=s+c,Object.prototype.hasOwnProperty.call(a,u))s=u;else{if(Object.prototype.hasOwnProperty.call(l,s)){if(s.charCodeAt(0)<256){for(o=0;o<f;o++)b<<=1,y==t-1?(y=0,S.push(r(b)),b=0):y++;for(n=s.charCodeAt(0),o=0;o<8;o++)b=b<<1|1&n,y==t-1?(y=0,S.push(r(b)),b=0):y++,n>>=1}else{for(n=1,o=0;o<f;o++)b=b<<1|n,y==t-1?(y=0,S.push(r(b)),b=0):y++,n=0;for(n=s.charCodeAt(0),o=0;o<16;o++)b=b<<1|1&n,y==t-1?(y=0,S.push(r(b)),b=0):y++,n>>=1}0==--T&&(T=Math.pow(2,f),f++),delete l[s]}else for(n=a[s],o=0;o<f;o++)b=b<<1|1&n,y==t-1?(y=0,S.push(r(b)),b=0):y++,n>>=1;0==--T&&(T=Math.pow(2,f),f++),a[u]=p++,s=String(c)}if(""!==s){if(Object.prototype.hasOwnProperty.call(l,s)){if(s.charCodeAt(0)<256){for(o=0;o<f;o++)b<<=1,y==t-1?(y=0,S.push(r(b)),b=0):y++;for(n=s.charCodeAt(0),o=0;o<8;o++)b=b<<1|1&n,y==t-1?(y=0,S.push(r(b)),b=0):y++,n>>=1}else{for(n=1,o=0;o<f;o++)b=b<<1|n,y==t-1?(y=0,S.push(r(b)),b=0):y++,n=0;for(n=s.charCodeAt(0),o=0;o<16;o++)b=b<<1|1&n,y==t-1?(y=0,S.push(r(b)),b=0):y++,n>>=1}0==--T&&(T=Math.pow(2,f),f++),delete l[s]}else for(n=a[s],o=0;o<f;o++)b=b<<1|1&n,y==t-1?(y=0,S.push(r(b)),b=0):y++,n>>=1;0==--T&&(T=Math.pow(2,f),f++)}for(n=2,o=0;o<f;o++)b=b<<1|1&n,y==t-1?(y=0,S.push(r(b)),b=0):y++,n>>=1;for(;;){if(b<<=1,y==t-1){S.push(r(b));break}y++}return S.join("")},decompress:function(e){return null==e?"":""==e?null:i._decompress(e.length,32768,(function(t){return e.charCodeAt(t)}))},_decompress:function(t,r,o){var n,i,a,l,c,u,s,T=[],p=4,f=4,S=3,b="",y=[],d={val:o(0),position:r,index:1};for(n=0;n<3;n+=1)T[n]=n;for(a=0,c=Math.pow(2,2),u=1;u!=c;)l=d.val&d.position,d.position>>=1,0==d.position&&(d.position=r,d.val=o(d.index++)),a|=(l>0?1:0)*u,u<<=1;switch(a){case 0:for(a=0,c=Math.pow(2,8),u=1;u!=c;)l=d.val&d.position,d.position>>=1,0==d.position&&(d.position=r,d.val=o(d.index++)),a|=(l>0?1:0)*u,u<<=1;s=e(a);break;case 1:for(a=0,c=Math.pow(2,16),u=1;u!=c;)l=d.val&d.position,d.position>>=1,0==d.position&&(d.position=r,d.val=o(d.index++)),a|=(l>0?1:0)*u,u<<=1;s=e(a);break;case 2:return""}for(T[3]=s,i=s,y.push(s);;){if(d.index>t)return"";for(a=0,c=Math.pow(2,S),u=1;u!=c;)l=d.val&d.position,d.position>>=1,0==d.position&&(d.position=r,d.val=o(d.index++)),a|=(l>0?1:0)*u,u<<=1;switch(s=a){case 0:for(a=0,c=Math.pow(2,8),u=1;u!=c;)l=d.val&d.position,d.position>>=1,0==d.position&&(d.position=r,d.val=o(d.index++)),a|=(l>0?1:0)*u,u<<=1;T[f++]=e(a),s=f-1,p--;break;case 1:for(a=0,c=Math.pow(2,16),u=1;u!=c;)l=d.val&d.position,d.position>>=1,0==d.position&&(d.position=r,d.val=o(d.index++)),a|=(l>0?1:0)*u,u<<=1;T[f++]=e(a),s=f-1,p--;break;case 2:return y.join("")}if(0==p&&(p=Math.pow(2,S),S++),T[s])b=T[s];else{if(s!==f)return null;b=i+i.charAt(0)}y.push(b),T[f++]=i+b.charAt(0),i=b,0==--p&&(p=Math.pow(2,S),S++)}}};return i}();void 0===(o=function(){return n}.call(t,r,t,e))||(e.exports=o)},845955:(e,t,r)=>{var o=r(230200),n=r(479328),i=o.RangeError;e.exports=function(e){var t=n(e);if(t<0)throw i("The argument can't be less than 0");return t}},853668:(e,t,r)=>{var o=r(230200),n=r(692074),i=r(497499),a=r(485343).NATIVE_ARRAY_BUFFER_VIEWS,l=o.ArrayBuffer,c=o.Int8Array;e.exports=!a||!n((function(){c(1)}))||!n((function(){new c(-1)}))||!i((function(e){new c,new c(null),new c(1.5),new c(e)}),!0)||n((function(){return 1!==new c(new l(2),1,void 0).length}))},856509:(e,t,r)=>{var o=r(318569),n=r(605476),i=r(764789).f,a=r(276056),l="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];e.exports.f=function(e){return l&&"Window"==o(e)?function(e){try{return i(e)}catch(e){return a(l)}}(e):i(n(e))}},863639:(e,t,r)=>{var o=r(474921);e.exports=Function.prototype.bind||o},876879:e=>{var t=Object.defineProperty||!1;if(t)try{t({},"a",{value:1})}catch(e){t=!1}e.exports=t},896135:(e,t,r)=>{var o=r(39609);e.exports=Function.prototype.bind||o},905880:(e,t,r)=>{var o=r(951605),n=r(372368),i=r(124601),a=r(839836),l=r(650242),c=r(52929);o({target:"Promise",stat:!0},{allSettled:function(e){var t=this,r=a.f(t),o=r.resolve,u=r.reject,s=l((function(){var r=i(t.resolve),a=[],l=0,u=1;c(e,(function(e){var i=l++,c=!1;u++,n(r,t,e).then((function(e){c||(c=!0,a[i]={status:"fulfilled",value:e},--u||o(a))}),(function(e){c||(c=!0,a[i]={status:"rejected",reason:e},--u||o(a))}))})),--u||o(a)}));return s.error&&u(s.value),r.promise}})},906549:e=>{e.exports=Object.getOwnPropertyDescriptor},948648:e=>{e.exports="undefined"!=typeof Reflect&&Reflect.getPrototypeOf||null},953746:(e,t,r)=>{r(443106)("Uint8",(function(e){return function(t,r,o){return e(this,t,r,o)}}))},970414:e=>{e.exports=Math.round},975880:e=>{e.exports=Math.pow},995843:(e,t,r)=>{r(540298)("flat")}}]);
