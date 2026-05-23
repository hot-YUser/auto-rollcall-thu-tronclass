(self.webpackChunklms=self.webpackChunklms||[
]).push([
  [
    15770
  ], {
    99425:(t, e, i)=>{
      i.d(e, {
        A:()=>$e, EY:()=>Be, G:()=>Ue, U3:()=>Ye, _V:()=>$t, jl:()=>Ge, rw:()=>Ne, t4:()=>qe, tS:()=>we, wA:()=>ye
      });
      const n={
      }, s=[
      ];
      function o(t, e){
        if(Array.isArray(t))for(const i of t)o(i, e);
        else if("object"!=typeof t)a(Object.getOwnPropertyNames(e)), n[
          t
        ]
        =Object.assign(n[
          t
        ]
        ||{
        }, e);
        else for(const e in t)o(e, t[
          e
        ])
      }
      function r(t){
        return n[
          t
        ]
        ||{
        }
      }
      function a(t){
        s.push(...t)
      }
      function h(t, e){
        let i;
        const n=t.length, s=[
        ];
        for(i=0;
        i<n;
        i++)s.push(e(t[
          i
        ]));
        return s
      }
      function d(t, e){
        let i;
        const n=t.length, s=[
        ];
        for(i=0;
        i<n;
        i++)e(t[
          i
        ])&&s.push(t[
          i
        ]);
        return s
      }
      function l(t){
        return t%360*Math.PI/180
      }
      function c(t){
        return t.toLowerCase().replace(/-(.)/g, (function(t, e){
          return e.toUpperCase()
        }))
      }
      function u(t){
        return t.replace(/([
          A-Z
        ])/g, (function(t, e){
          return"-"+e.toLowerCase()
        }))
      }
      function p(t){
        return t.charAt(0).toUpperCase()+t.slice(1)
      }
      function m(t, e, i, n){
        return null!=e&&null!=i||(n=n||t.bbox(), null==e?e=n.width/n.height*i:null==i&&(i=n.height/n.width*e)), {
          width:e, height:i
        }
      }
      function f(t, e){
        const i=t.origin;
        let n=null!=t.ox?t.ox:null!=t.originX?t.originX:"center", s=null!=t.oy?t.oy:null!=t.originY?t.originY:"center";
        null!=i&&([
          n, s
        ]
        =Array.isArray(i)?i:"object"==typeof i?[
          i.x, i.y
        ]
        :[
          i, i
        ]);
        const o="string"==typeof n, r="string"==typeof s;
        if(o||r){
          const{
            height:t, width:i, x:a, y:h
          }
          =e.bbox();
          o&&(n=n.includes("left")?a:n.includes("right")?a+i:a+i/2), r&&(s=s.includes("top")?h:s.includes("bottom")?h+t:h+t/2)
        }
        return[
          n, s
        ]
      }
      const g="http://www.w3.org/2000/svg", x="http://www.w3.org/1999/xhtml", v="http://www.w3.org/2000/xmlns/", y="http://www.w3.org/1999/xlink", M="http://svgjs.dev/svgjs";
      const w={
        window:"undefined"==typeof window?null:window, document:"undefined"==typeof document?null:document
      };
      class _{
      }
      const N={
      }, E="___SYMBOL___ROOT___";
      function C(t, e=g){
        return w.document.createElementNS(e, t)
      }
      function b(t, e=!1){
        if(t instanceof _)return t;
        if("object"==typeof t)return D(t);
        if(null==t)return new N[
          E
        ];
        if("string"==typeof t&&"<"!==t.charAt(0))return D(w.document.querySelector(t));
        const i=e?w.document.createElement("div"):C("svg");
        return i.innerHTML=t, t=D(i.firstChild), i.removeChild(i.firstChild), t
      }
      function L(t, e){
        return e&&e.ownerDocument&&e instanceof e.ownerDocument.defaultView.Node?e:C(t)
      }
      function T(t){
        if(!t)return null;
        if(t.instance instanceof _)return t.instance;
        if("#document-fragment"===t.nodeName)return new N.Fragment(t);
        let e=p(t.nodeName||"Dom");
        return"LinearGradient"===e||"RadialGradient"===e?e="Gradient":N[
          e
        ]
        ||(e="Dom"), new N[
          e
        ]
        (t)
      }
      let D=T;
      function A(t, e=t.name, i=!1){
        return N[
          e
        ]
        =t, i&&(N[
          E
        ]
        =t), a(Object.getOwnPropertyNames(t.prototype)), t
      }
      let S=1e3;
      function z(t){
        return"Svgjs"+p(t)+S++
      }
      function R(t){
        for(let e=t.children.length-1;
        e>=0;
        e--)R(t.children[
          e
        ]);
        return t.id?(t.id=z(t.nodeName), t):t
      }
      function O(t, e){
        let i, n;
        for(n=(t=Array.isArray(t)?t:[
          t
        ]).length-1;
        n>=0;
        n--)for(i in e)t[
          n
        ].prototype[
          i
        ]
        =e[
          i
        ]
      }
      function I(t){
        return function(...e){
          const i=e[
            e.length-1
          ];
          return!i||i.constructor!==Object||i instanceof Array?t.apply(this, e):t.apply(this, e.slice(0, -1)).attr(i)
        }
      }
      o("Dom", {
        siblings:function(){
          return this.parent().children()
        }, position:function(){
          return this.parent().index(this)
        }, next:function(){
          return this.siblings()[
            this.position()+1
          ]
        }, prev:function(){
          return this.siblings()[
            this.position()-1
          ]
        }, forward:function(){
          const t=this.position();
          return this.parent().add(this.remove(), t+1), this
        }, backward:function(){
          const t=this.position();
          return this.parent().add(this.remove(), t?t-1:0), this
        }, front:function(){
          return this.parent().add(this.remove()), this
        }, back:function(){
          return this.parent().add(this.remove(), 0), this
        }, before:function(t){
          (t=b(t)).remove();
          const e=this.position();
          return this.parent().add(t, e), this
        }, after:function(t){
          (t=b(t)).remove();
          const e=this.position();
          return this.parent().add(t, e+1), this
        }, insertBefore:function(t){
          return(t=b(t)).before(this), this
        }, insertAfter:function(t){
          return(t=b(t)).after(this), this
        }
      });
      const F=/^([
        +-
      ]
      ?(\d+(\.\d*)?|\.\d+)(e[
        +-
      ]
      ?\d+)?)([
        a-z%
      ]
      *)$/i, k=/^#?([
        a-f\d
      ]
      {
        2
      })([
        a-f\d
      ]
      {
        2
      })([
        a-f\d
      ]
      {
        2
      })$/i, B=/rgb\((\d+), (\d+), (\d+)\)/, H=/(#[
        a-z_
      ]
      [
        a-z0-9\-_
      ]
      *)/i, G=/\)\s*, ?\s*/, P=/\s/g, Y=/^#[
        a-f0-9
      ]
      {
        3
      }
      $|^#[
        a-f0-9
      ]
      {
        6
      }
      $/i, W=/^rgb\(/, U=/^(\s+)?$/, $=/^[
        +-
      ]
      ?(\d+(\.\d*)?|\.\d+)(e[
        +-
      ]
      ?\d+)?$/i, X=/\.(jpg|jpeg|png|gif|svg)(\?[
        ^=
      ]
      +.*)?/i, V=/[
        \s,
      ]
      +/, j=/[
        MLHVCSQTAZ
      ]
      /i;
      function Z(t){
        const e=Math.round(t), i=Math.max(0, Math.min(255, e)).toString(16);
        return 1===i.length?"0"+i:i
      }
      function K(t, e){
        for(let i=e.length;
        i--;
        )if(null==t[
          e[
            i
          ]
        ])return!1;
        return!0
      }
      function q(t, e, i){
        return i<0&&(i+=1), i>1&&(i-=1), i<1/6?t+6*(e-t)*i:i<.5?e:i<2/3?t+(e-t)*(2/3-i)*6:t
      }
      o("Dom", {
        classes:function(){
          const t=this.attr("class");
          return null==t?[
          ]
          :t.trim().split(V)
        }, hasClass:function(t){
          return-1!==this.classes().indexOf(t)
        }, addClass:function(t){
          if(!this.hasClass(t)){
            const e=this.classes();
            e.push(t), this.attr("class", e.join(" "))
          }
          return this
        }, removeClass:function(t){
          return this.hasClass(t)&&this.attr("class", this.classes().filter((function(e){
            return e!==t
          })).join(" ")), this
        }, toggleClass:function(t){
          return this.hasClass(t)?this.removeClass(t):this.addClass(t)
        }
      }), o("Dom", {
        css:function(t, e){
          const i={
          };
          if(0===arguments.length)return this.node.style.cssText.split(/\s*;
          \s*/).filter((function(t){
            return!!t.length
          })).forEach((function(t){
            const e=t.split(/\s*:\s*/);
            i[
              e[
                0
              ]
            ]
            =e[
              1
            ]
          })), i;
          if(arguments.length<2){
            if(Array.isArray(t)){
              for(const e of t){
                const t=c(e);
                i[
                  e
                ]
                =this.node.style[
                  t
                ]
              }
              return i
            }
            if("string"==typeof t)return this.node.style[
              c(t)
            ];
            if("object"==typeof t)for(const e in t)this.node.style[
              c(e)
            ]
            =null==t[
              e
            ]
            ||U.test(t[
              e
            ])?"":t[
              e
            ]
          }
          return 2===arguments.length&&(this.node.style[
            c(t)
          ]
          =null==e||U.test(e)?"":e), this
        }, show:function(){
          return this.css("display", "")
        }, hide:function(){
          return this.css("display", "none")
        }, visible:function(){
          return"none"!==this.css("display")
        }
      }), o("Dom", {
        data:function(t, e, i){
          if(null==t)return this.data(h(d(this.node.attributes, (t=>0===t.nodeName.indexOf("data-"))), (t=>t.nodeName.slice(5))));
          if(t instanceof Array){
            const e={
            };
            for(const i of t)e[
              i
            ]
            =this.data(i);
            return e
          }
          if("object"==typeof t)for(e in t)this.data(e, t[
            e
          ]);
          else if(arguments.length<2)try{
            return JSON.parse(this.attr("data-"+t))
          }
          catch(e){
            return this.attr("data-"+t)
          }
          else this.attr("data-"+t, null===e?null:!0===i||"string"==typeof e||"number"==typeof e?e:JSON.stringify(e));
          return this
        }
      }), o("Dom", {
        remember:function(t, e){
          if("object"==typeof arguments[
            0
          ])for(const e in t)this.remember(e, t[
            e
          ]);
          else{
            if(1===arguments.length)return this.memory()[
              t
            ];
            this.memory()[
              t
            ]
            =e
          }
          return this
        }, forget:function(){
          if(0===arguments.length)this._memory={
          };
          else for(let t=arguments.length-1;
          t>=0;
          t--)delete this.memory()[
            arguments[
              t
            ]
          ];
          return this
        }, memory:function(){
          return this._memory=this._memory||{
          }
        }
      });
      class Q{
        constructor(...t){
          this.init(...t)
        }
        static isColor(t){
          return t&&(t instanceof Q||this.isRgb(t)||this.test(t))
        }
        static isRgb(t){
          return t&&"number"==typeof t.r&&"number"==typeof t.g&&"number"==typeof t.b
        }
        static random(t="vibrant", e, i){
          const{
            random:n, round:s, sin:o, PI:r
          }
          =Math;
          if("vibrant"===t){
            const t=24*n()+57, e=38*n()+45, i=360*n();
            return new Q(t, e, i, "lch")
          }
          if("sine"===t){
            const t=s(80*o(2*r*(e=null==e?n():e)/.5+.01)+150), i=s(50*o(2*r*e/.5+4.6)+200), a=s(100*o(2*r*e/.5+2.3)+150);
            return new Q(t, i, a)
          }
          if("pastel"===t){
            const t=8*n()+86, e=17*n()+9, i=360*n();
            return new Q(t, e, i, "lch")
          }
          if("dark"===t){
            const t=10+10*n(), e=50*n()+86, i=360*n();
            return new Q(t, e, i, "lch")
          }
          if("rgb"===t){
            const t=255*n(), e=255*n(), i=255*n();
            return new Q(t, e, i)
          }
          if("lab"===t){
            const t=100*n(), e=256*n()-128, i=256*n()-128;
            return new Q(t, e, i, "lab")
          }
          if("grey"===t){
            const t=255*n();
            return new Q(t, t, t)
          }
          throw new Error("Unsupported random color mode")
        }
        static test(t){
          return"string"==typeof t&&(Y.test(t)||W.test(t))
        }
        cmyk(){
          const{
            _a:t, _b:e, _c:i
          }
          =this.rgb(), [
            n, s, o
          ]
          =[
            t, e, i
          ].map((t=>t/255)), r=Math.min(1-n, 1-s, 1-o);
          if(1===r)return new Q(0, 0, 0, 1, "cmyk");
          return new Q((1-n-r)/(1-r), (1-s-r)/(1-r), (1-o-r)/(1-r), r, "cmyk")
        }
        hsl(){
          const{
            _a:t, _b:e, _c:i
          }
          =this.rgb(), [
            n, s, o
          ]
          =[
            t, e, i
          ].map((t=>t/255)), r=Math.max(n, s, o), a=Math.min(n, s, o), h=(r+a)/2, d=r===a, l=r-a;
          return new Q(360*(d?0:r===n?((s-o)/l+(s<o?6:0))/6:r===s?((o-n)/l+2)/6:r===o?((n-s)/l+4)/6:0), 100*(d?0:h>.5?l/(2-r-a):l/(r+a)), 100*h, "hsl")
        }
        init(t=0, e=0, i=0, n=0, s="rgb"){
          if(t=t||0, this.space)for(const t in this.space)delete this[
            this.space[
              t
            ]
          ];
          if("number"==typeof t)s="string"==typeof n?n:s, n="string"==typeof n?0:n, Object.assign(this, {
            _a:t, _b:e, _c:i, _d:n, space:s
          });
          else if(t instanceof Array)this.space=e||("string"==typeof t[
            3
          ]
          ?t[
            3
          ]
          :t[
            4
          ])||"rgb", Object.assign(this, {
            _a:t[
              0
            ], _b:t[
              1
            ], _c:t[
              2
            ], _d:t[
              3
            ]
            ||0
          });
          else if(t instanceof Object){
            const i=function(t, e){
              const i=K(t, "rgb")?{
                _a:t.r, _b:t.g, _c:t.b, _d:0, space:"rgb"
              }
              :K(t, "xyz")?{
                _a:t.x, _b:t.y, _c:t.z, _d:0, space:"xyz"
              }
              :K(t, "hsl")?{
                _a:t.h, _b:t.s, _c:t.l, _d:0, space:"hsl"
              }
              :K(t, "lab")?{
                _a:t.l, _b:t.a, _c:t.b, _d:0, space:"lab"
              }
              :K(t, "lch")?{
                _a:t.l, _b:t.c, _c:t.h, _d:0, space:"lch"
              }
              :K(t, "cmyk")?{
                _a:t.c, _b:t.m, _c:t.y, _d:t.k, space:"cmyk"
              }
              :{
                _a:0, _b:0, _c:0, space:"rgb"
              };
              return i.space=e||i.space, i
            }
            (t, e);
            Object.assign(this, i)
          }
          else if("string"==typeof t)if(W.test(t)){
            const e=t.replace(P, ""), [
              i, n, s
            ]
            =B.exec(e).slice(1, 4).map((t=>parseInt(t)));
            Object.assign(this, {
              _a:i, _b:n, _c:s, _d:0, space:"rgb"
            })
          }
          else{
            if(!Y.test(t))throw Error("Unsupported string format, can't construct Color");
            {
              const e=t=>parseInt(t, 16), [
                , i, n, s
              ]
              =k.exec(function(t){
                return 4===t.length?[
                  "#", t.substring(1, 2), t.substring(1, 2), t.substring(2, 3), t.substring(2, 3), t.substring(3, 4), t.substring(3, 4)
                ].join(""):t
              }
              (t)).map(e);
              Object.assign(this, {
                _a:i, _b:n, _c:s, _d:0, space:"rgb"
              })
            }
          }
          const{
            _a:o, _b:r, _c:a, _d:h
          }
          =this, d="rgb"===this.space?{
            r:o, g:r, b:a
          }
          :"xyz"===this.space?{
            x:o, y:r, z:a
          }
          :"hsl"===this.space?{
            h:o, s:r, l:a
          }
          :"lab"===this.space?{
            l:o, a:r, b:a
          }
          :"lch"===this.space?{
            l:o, c:r, h:a
          }
          :"cmyk"===this.space?{
            c:o, m:r, y:a, k:h
          }
          :{
          };
          Object.assign(this, d)
        }
        lab(){
          const{
            x:t, y:e, z:i
          }
          =this.xyz();
          return new Q(116*e-16, 500*(t-e), 200*(e-i), "lab")
        }
        lch(){
          const{
            l:t, a:e, b:i
          }
          =this.lab(), n=Math.sqrt(e**2+i**2);
          let s=180*Math.atan2(i, e)/Math.PI;
          s<0&&(s*=-1, s=360-s);
          return new Q(t, n, s, "lch")
        }
        rgb(){
          if("rgb"===this.space)return this;
          if("lab"===(t=this.space)||"xyz"===t||"lch"===t){
            let{
              x:t, y:e, z:i
            }
            =this;
            if("lab"===this.space||"lch"===this.space){
              let{
                l:n, a:s, b:o
              }
              =this;
              if("lch"===this.space){
                const{
                  c:t, h:e
                }
                =this, i=Math.PI/180;
                s=t*Math.cos(i*e), o=t*Math.sin(i*e)
              }
              const r=(n+16)/116, a=s/500+r, h=r-o/200, d=16/116, l=.008856, c=7.787;
              t=.95047*(a**3>l?a**3:(a-d)/c), e=1*(r**3>l?r**3:(r-d)/c), i=1.08883*(h**3>l?h**3:(h-d)/c)
            }
            const n=3.2406*t+-1.5372*e+-.4986*i, s=-.9689*t+1.8758*e+.0415*i, o=.0557*t+-.204*e+1.057*i, r=Math.pow, a=.0031308, h=n>a?1.055*r(n, 1/2.4)-.055:12.92*n, d=s>a?1.055*r(s, 1/2.4)-.055:12.92*s, l=o>a?1.055*r(o, 1/2.4)-.055:12.92*o;
            return new Q(255*h, 255*d, 255*l)
          }
          if("hsl"===this.space){
            let{
              h:t, s:e, l:i
            }
            =this;
            if(t/=360, e/=100, i/=100, 0===e){
              i*=255;
              return new Q(i, i, i)
            }
            const n=i<.5?i*(1+e):i+e-i*e, s=2*i-n, o=255*q(s, n, t+1/3), r=255*q(s, n, t), a=255*q(s, n, t-1/3);
            return new Q(o, r, a)
          }
          if("cmyk"===this.space){
            const{
              c:t, m:e, y:i, k:n
            }
            =this, s=255*(1-Math.min(1, t*(1-n)+n)), o=255*(1-Math.min(1, e*(1-n)+n)), r=255*(1-Math.min(1, i*(1-n)+n));
            return new Q(s, o, r)
          }
          return this;
          var t
        }
        toArray(){
          const{
            _a:t, _b:e, _c:i, _d:n, space:s
          }
          =this;
          return[
            t, e, i, n, s
          ]
        }
        toHex(){
          const[
            t, e, i
          ]
          =this._clamped().map(Z);
          return`#${t}${e}${i}`
        }
        toRgb(){
          const[
            t, e, i
          ]
          =this._clamped();
          return`rgb(${t},${e},${i})`
        }
        toString(){
          return this.toHex()
        }
        xyz(){
          const{
            _a:t, _b:e, _c:i
          }
          =this.rgb(), [
            n, s, o
          ]
          =[
            t, e, i
          ].map((t=>t/255)), r=n>.04045?Math.pow((n+.055)/1.055, 2.4):n/12.92, a=s>.04045?Math.pow((s+.055)/1.055, 2.4):s/12.92, h=o>.04045?Math.pow((o+.055)/1.055, 2.4):o/12.92, d=(.4124*r+.3576*a+.1805*h)/.95047, l=(.2126*r+.7152*a+.0722*h)/1, c=(.0193*r+.1192*a+.9505*h)/1.08883, u=d>.008856?Math.pow(d, 1/3):7.787*d+16/116, p=l>.008856?Math.pow(l, 1/3):7.787*l+16/116, m=c>.008856?Math.pow(c, 1/3):7.787*c+16/116;
          return new Q(u, p, m, "xyz")
        }
        _clamped(){
          const{
            _a:t, _b:e, _c:i
          }
          =this.rgb(), {
            max:n, min:s, round:o
          }
          =Math;
          return[
            t, e, i
          ].map((t=>n(0, s(o(t), 255))))
        }
      }
      class J{
        constructor(...t){
          this.init(...t)
        }
        clone(){
          return new J(this)
        }
        init(t, e){
          const i=0, n=0, s=Array.isArray(t)?{
            x:t[
              0
            ], y:t[
              1
            ]
          }
          :"object"==typeof t?{
            x:t.x, y:t.y
          }
          :{
            x:t, y:e
          };
          return this.x=null==s.x?i:s.x, this.y=null==s.y?n:s.y, this
        }
        toArray(){
          return[
            this.x, this.y
          ]
        }
        transform(t){
          return this.clone().transformO(t)
        }
        transformO(t){
          et.isMatrixLike(t)||(t=new et(t));
          const{
            x:e, y:i
          }
          =this;
          return this.x=t.a*e+t.c*i+t.e, this.y=t.b*e+t.d*i+t.f, this
        }
      }
      function tt(t, e, i){
        return Math.abs(e-t)<(i||1e-6)
      }
      class et{
        constructor(...t){
          this.init(...t)
        }
        static formatTransforms(t){
          const e="both"===t.flip||!0===t.flip, i=t.flip&&(e||"x"===t.flip)?-1:1, n=t.flip&&(e||"y"===t.flip)?-1:1, s=t.skew&&t.skew.length?t.skew[
            0
          ]
          :isFinite(t.skew)?t.skew:isFinite(t.skewX)?t.skewX:0, o=t.skew&&t.skew.length?t.skew[
            1
          ]
          :isFinite(t.skew)?t.skew:isFinite(t.skewY)?t.skewY:0, r=t.scale&&t.scale.length?t.scale[
            0
          ]
          *i:isFinite(t.scale)?t.scale*i:isFinite(t.scaleX)?t.scaleX*i:i, a=t.scale&&t.scale.length?t.scale[
            1
          ]
          *n:isFinite(t.scale)?t.scale*n:isFinite(t.scaleY)?t.scaleY*n:n, h=t.shear||0, d=t.rotate||t.theta||0, l=new J(t.origin||t.around||t.ox||t.originX, t.oy||t.originY), c=l.x, u=l.y, p=new J(t.position||t.px||t.positionX||NaN, t.py||t.positionY||NaN), m=p.x, f=p.y, g=new J(t.translate||t.tx||t.translateX, t.ty||t.translateY), x=g.x, v=g.y, y=new J(t.relative||t.rx||t.relativeX, t.ry||t.relativeY);
          return{
            scaleX:r, scaleY:a, skewX:s, skewY:o, shear:h, theta:d, rx:y.x, ry:y.y, tx:x, ty:v, ox:c, oy:u, px:m, py:f
          }
        }
        static fromArray(t){
          return{
            a:t[
              0
            ], b:t[
              1
            ], c:t[
              2
            ], d:t[
              3
            ], e:t[
              4
            ], f:t[
              5
            ]
          }
        }
        static isMatrixLike(t){
          return null!=t.a||null!=t.b||null!=t.c||null!=t.d||null!=t.e||null!=t.f
        }
        static matrixMultiply(t, e, i){
          const n=t.a*e.a+t.c*e.b, s=t.b*e.a+t.d*e.b, o=t.a*e.c+t.c*e.d, r=t.b*e.c+t.d*e.d, a=t.e+t.a*e.e+t.c*e.f, h=t.f+t.b*e.e+t.d*e.f;
          return i.a=n, i.b=s, i.c=o, i.d=r, i.e=a, i.f=h, i
        }
        around(t, e, i){
          return this.clone().aroundO(t, e, i)
        }
        aroundO(t, e, i){
          const n=t||0, s=e||0;
          return this.translateO(-n, -s).lmultiplyO(i).translateO(n, s)
        }
        clone(){
          return new et(this)
        }
        decompose(t=0, e=0){
          const i=this.a, n=this.b, s=this.c, o=this.d, r=this.e, a=this.f, h=i*o-n*s, d=h>0?1:-1, l=d*Math.sqrt(i*i+n*n), c=Math.atan2(d*n, d*i), u=180/Math.PI*c, p=Math.cos(c), m=Math.sin(c), f=(i*s+n*o)/h, g=s*l/(f*i-n)||o*l/(f*n+i);
          return{
            scaleX:l, scaleY:g, shear:f, rotate:u, translateX:r-t+t*p*l+e*(f*p*l-m*g), translateY:a-e+t*m*l+e*(f*m*l+p*g), originX:t, originY:e, a:this.a, b:this.b, c:this.c, d:this.d, e:this.e, f:this.f
          }
        }
        equals(t){
          if(t===this)return!0;
          const e=new et(t);
          return tt(this.a, e.a)&&tt(this.b, e.b)&&tt(this.c, e.c)&&tt(this.d, e.d)&&tt(this.e, e.e)&&tt(this.f, e.f)
        }
        flip(t, e){
          return this.clone().flipO(t, e)
        }
        flipO(t, e){
          return"x"===t?this.scaleO(-1, 1, e, 0):"y"===t?this.scaleO(1, -1, 0, e):this.scaleO(-1, -1, t, e||t)
        }
        init(t){
          const e=et.fromArray([
            1, 0, 0, 1, 0, 0
          ]);
          return t=t instanceof Nt?t.matrixify():"string"==typeof t?et.fromArray(t.split(V).map(parseFloat)):Array.isArray(t)?et.fromArray(t):"object"==typeof t&&et.isMatrixLike(t)?t:"object"==typeof t?(new et).transform(t):6===arguments.length?et.fromArray([
          ].slice.call(arguments)):e, this.a=null!=t.a?t.a:e.a, this.b=null!=t.b?t.b:e.b, this.c=null!=t.c?t.c:e.c, this.d=null!=t.d?t.d:e.d, this.e=null!=t.e?t.e:e.e, this.f=null!=t.f?t.f:e.f, this
        }
        inverse(){
          return this.clone().inverseO()
        }
        inverseO(){
          const t=this.a, e=this.b, i=this.c, n=this.d, s=this.e, o=this.f, r=t*n-e*i;
          if(!r)throw new Error("Cannot invert "+this);
          const a=n/r, h=-e/r, d=-i/r, l=t/r, c=-(a*s+d*o), u=-(h*s+l*o);
          return this.a=a, this.b=h, this.c=d, this.d=l, this.e=c, this.f=u, this
        }
        lmultiply(t){
          return this.clone().lmultiplyO(t)
        }
        lmultiplyO(t){
          const e=t instanceof et?t:new et(t);
          return et.matrixMultiply(e, this, this)
        }
        multiply(t){
          return this.clone().multiplyO(t)
        }
        multiplyO(t){
          const e=t instanceof et?t:new et(t);
          return et.matrixMultiply(this, e, this)
        }
        rotate(t, e, i){
          return this.clone().rotateO(t, e, i)
        }
        rotateO(t, e=0, i=0){
          t=l(t);
          const n=Math.cos(t), s=Math.sin(t), {
            a:o, b:r, c:a, d:h, e:d, f:c
          }
          =this;
          return this.a=o*n-r*s, this.b=r*n+o*s, this.c=a*n-h*s, this.d=h*n+a*s, this.e=d*n-c*s+i*s-e*n+e, this.f=c*n+d*s-e*s-i*n+i, this
        }
        scale(t, e, i, n){
          return this.clone().scaleO(...arguments)
        }
        scaleO(t, e=t, i=0, n=0){
          3===arguments.length&&(n=i, i=e, e=t);
          const{
            a:s, b:o, c:r, d:a, e:h, f:d
          }
          =this;
          return this.a=s*t, this.b=o*e, this.c=r*t, this.d=a*e, this.e=h*t-i*t+i, this.f=d*e-n*e+n, this
        }
        shear(t, e, i){
          return this.clone().shearO(t, e, i)
        }
        shearO(t, e=0, i=0){
          const{
            a:n, b:s, c:o, d:r, e:a, f:h
          }
          =this;
          return this.a=n+s*t, this.c=o+r*t, this.e=a+h*t-i*t, this
        }
        skew(t, e, i, n){
          return this.clone().skewO(...arguments)
        }
        skewO(t, e=t, i=0, n=0){
          3===arguments.length&&(n=i, i=e, e=t), t=l(t), e=l(e);
          const s=Math.tan(t), o=Math.tan(e), {
            a:r, b:a, c:h, d, e:c, f:u
          }
          =this;
          return this.a=r+a*s, this.b=a+r*o, this.c=h+d*s, this.d=d+h*o, this.e=c+u*s-n*s, this.f=u+c*o-i*o, this
        }
        skewX(t, e, i){
          return this.skew(t, 0, e, i)
        }
        skewY(t, e, i){
          return this.skew(0, t, e, i)
        }
        toArray(){
          return[
            this.a, this.b, this.c, this.d, this.e, this.f
          ]
        }
        toString(){
          return"matrix("+this.a+","+this.b+","+this.c+","+this.d+","+this.e+","+this.f+")"
        }
        transform(t){
          if(et.isMatrixLike(t)){
            return new et(t).multiplyO(this)
          }
          const e=et.formatTransforms(t), {
            x:i, y:n
          }
          =new J(e.ox, e.oy).transform(this), s=(new et).translateO(e.rx, e.ry).lmultiplyO(this).translateO(-i, -n).scaleO(e.scaleX, e.scaleY).skewO(e.skewX, e.skewY).shearO(e.shear).rotateO(e.theta).translateO(i, n);
          if(isFinite(e.px)||isFinite(e.py)){
            const t=new J(i, n).transform(s), o=isFinite(e.px)?e.px-t.x:0, r=isFinite(e.py)?e.py-t.y:0;
            s.translateO(o, r)
          }
          return s.translateO(e.tx, e.ty), s
        }
        translate(t, e){
          return this.clone().translateO(t, e)
        }
        translateO(t, e){
          return this.e+=t||0, this.f+=e||0, this
        }
        valueOf(){
          return{
            a:this.a, b:this.b, c:this.c, d:this.d, e:this.e, f:this.f
          }
        }
      }
      function it(){
        if(!it.nodes){
          const t=b().size(2, 0);
          t.node.style.cssText=[
            "opacity: 0", "position: absolute", "left: -100%", "top: -100%", "overflow: hidden"
          ].join(";"), t.attr("focusable", "false"), t.attr("aria-hidden", "true");
          const e=t.path().node;
          it.nodes={
            svg:t, path:e
          }
        }
        if(!it.nodes.svg.node.parentNode){
          const t=w.document.body||w.document.documentElement;
          it.nodes.svg.addTo(t)
        }
        return it.nodes
      }
      function nt(t){
        return!(t.width||t.height||t.x||t.y)
      }
      A(et, "Matrix");
      class st{
        constructor(...t){
          this.init(...t)
        }
        addOffset(){
          return this.x+=w.window.pageXOffset, this.y+=w.window.pageYOffset, new st(this)
        }
        init(t){
          return t="string"==typeof t?t.split(V).map(parseFloat):Array.isArray(t)?t:"object"==typeof t?[
            null!=t.left?t.left:t.x, null!=t.top?t.top:t.y, t.width, t.height
          ]
          :4===arguments.length?[
          ].slice.call(arguments):[
            0, 0, 0, 0
          ], this.x=t[
            0
          ]
          ||0, this.y=t[
            1
          ]
          ||0, this.width=this.w=t[
            2
          ]
          ||0, this.height=this.h=t[
            3
          ]
          ||0, this.x2=this.x+this.w, this.y2=this.y+this.h, this.cx=this.x+this.w/2, this.cy=this.y+this.h/2, this
        }
        isNulled(){
          return nt(this)
        }
        merge(t){
          const e=Math.min(this.x, t.x), i=Math.min(this.y, t.y), n=Math.max(this.x+this.width, t.x+t.width)-e, s=Math.max(this.y+this.height, t.y+t.height)-i;
          return new st(e, i, n, s)
        }
        toArray(){
          return[
            this.x, this.y, this.width, this.height
          ]
        }
        toString(){
          return this.x+" "+this.y+" "+this.width+" "+this.height
        }
        transform(t){
          t instanceof et||(t=new et(t));
          let e=1/0, i=-1/0, n=1/0, s=-1/0;
          return[
            new J(this.x, this.y), new J(this.x2, this.y), new J(this.x, this.y2), new J(this.x2, this.y2)
          ].forEach((function(o){
            o=o.transform(t), e=Math.min(e, o.x), i=Math.max(i, o.x), n=Math.min(n, o.y), s=Math.max(s, o.y)
          })), new st(e, n, i-e, s-n)
        }
      }
      function ot(t, e, i){
        let n;
        try{
          if(n=e(t.node), nt(n)&&((s=t.node)!==w.document&&!(w.document.documentElement.contains||function(t){
            for(;
            t.parentNode;
            )t=t.parentNode;
            return t===w.document
          }).call(w.document.documentElement, s)))throw new Error("Element not in the dom")
        }
        catch(e){
          n=i(t)
        }
        var s;
        return n
      }
      o({
        viewbox:{
          viewbox(t, e, i, n){
            return null==t?new st(this.attr("viewBox")):this.attr("viewBox", new st(t, e, i, n))
          }, zoom(t, e){
            let{
              width:i, height:n
            }
            =this.attr([
              "width", "height"
            ]);
            if((i||n)&&"string"!=typeof i&&"string"!=typeof n||(i=this.node.clientWidth, n=this.node.clientHeight), !i||!n)throw new Error("Impossible to get absolute width and height. Please provide an absolute width and height attribute on the zooming element");
            const s=this.viewbox(), o=i/s.width, r=n/s.height, a=Math.min(o, r);
            if(null==t)return a;
            let h=a/t;
            h===1/0&&(h=Number.MAX_SAFE_INTEGER/100), e=e||new J(i/2/o+s.x, n/2/r+s.y);
            const d=new st(s).transform(new et({
              scale:h, origin:e
            }));
            return this.viewbox(d)
          }
        }
      }), A(st, "Box");
      class rt extends Array{
        constructor(t=[
        ], ...e){
          if(super(t, ...e), "number"==typeof t)return this;
          this.length=0, this.push(...t)
        }
      }
      O([
        rt
      ], {
        each(t, ...e){
          return"function"==typeof t?this.map(((e, i, n)=>t.call(e, e, i, n))):this.map((i=>i[
            t
          ]
          (...e)))
        }, toArray(){
          return Array.prototype.concat.apply([
          ], this)
        }
      });
      const at=[
        "toArray", "constructor", "each"
      ];
      function ht(t, e){
        return new rt(h((e||w.document).querySelectorAll(t), (function(t){
          return T(t)
        })))
      }
      rt.extend=function(t){
        t=t.reduce(((t, e)=>(at.includes(e)||"_"===e[
          0
        ]
        ||(t[
          e
        ]
        =function(...t){
          return this.each(e, ...t)
        }), t)), {
        }), O([
          rt
        ], t)
      };
      let dt=0;
      const lt={
      };
      function ct(t){
        let e=t.getEventHolder();
        return e===w.window&&(e=lt), e.events||(e.events={
        }), e.events
      }
      function ut(t){
        return t.getEventTarget()
      }
      function pt(t, e, i, n, s){
        const o=i.bind(n||t), r=b(t), a=ct(r), h=ut(r);
        e=Array.isArray(e)?e:e.split(V), i._svgjsListenerId||(i._svgjsListenerId=++dt), e.forEach((function(t){
          const e=t.split(".")[
            0
          ], n=t.split(".")[
            1
          ]
          ||"*";
          a[
            e
          ]
          =a[
            e
          ]
          ||{
          }, a[
            e
          ]
          [
            n
          ]
          =a[
            e
          ]
          [
            n
          ]
          ||{
          }, a[
            e
          ]
          [
            n
          ]
          [
            i._svgjsListenerId
          ]
          =o, h.addEventListener(e, o, s||!1)
        }))
      }
      function mt(t, e, i, n){
        const s=b(t), o=ct(s), r=ut(s);
        ("function"!=typeof i||(i=i._svgjsListenerId))&&(e=Array.isArray(e)?e:(e||"").split(V)).forEach((function(t){
          const e=t&&t.split(".")[
            0
          ], a=t&&t.split(".")[
            1
          ];
          let h, d;
          if(i)o[
            e
          ]
          &&o[
            e
          ]
          [
            a||"*"
          ]
          &&(r.removeEventListener(e, o[
            e
          ]
          [
            a||"*"
          ]
          [
            i
          ], n||!1), delete o[
            e
          ]
          [
            a||"*"
          ]
          [
            i
          ]);
          else if(e&&a){
            if(o[
              e
            ]
            &&o[
              e
            ]
            [
              a
            ]){
              for(d in o[
                e
              ]
              [
                a
              ])mt(r, [
                e, a
              ].join("."), d);
              delete o[
                e
              ]
              [
                a
              ]
            }
          }
          else if(a)for(t in o)for(h in o[
            t
          ])a===h&&mt(r, [
            t, a
          ].join("."));
          else if(e){
            if(o[
              e
            ]){
              for(h in o[
                e
              ])mt(r, [
                e, h
              ].join("."));
              delete o[
                e
              ]
            }
          }
          else{
            for(t in o)mt(r, t);
            !function(t){
              let e=t.getEventHolder();
              e===w.window&&(e=lt), e.events&&(e.events={
              })
            }
            (s)
          }
        }))
      }
      class ft extends _{
        addEventListener(){
        }
        dispatch(t, e, i){
          return function(t, e, i, n){
            const s=ut(t);
            return e instanceof w.window.Event||(e=new w.window.CustomEvent(e, {
              detail:i, cancelable:!0, ...n
            })), s.dispatchEvent(e), e
          }
          (this, t, e, i)
        }
        dispatchEvent(t){
          const e=this.getEventHolder().events;
          if(!e)return!0;
          const i=e[
            t.type
          ];
          for(const e in i)for(const n in i[
            e
          ])i[
            e
          ]
          [
            n
          ]
          (t);
          return!t.defaultPrevented
        }
        fire(t, e, i){
          return this.dispatch(t, e, i), this
        }
        getEventHolder(){
          return this
        }
        getEventTarget(){
          return this
        }
        off(t, e, i){
          return mt(this, t, e, i), this
        }
        on(t, e, i, n){
          return pt(this, t, e, i, n), this
        }
        removeEventListener(){
        }
      }
      function gt(){
      }
      A(ft, "EventTarget");
      const xt={
        duration:400, ease:">", delay:0
      }, vt={
        "fill-opacity":1, "stroke-opacity":1, "stroke-width":0, "stroke-linejoin":"miter", "stroke-linecap":"butt", fill:"#000000", stroke:"#000000", opacity:1, x:0, y:0, cx:0, cy:0, width:0, height:0, r:0, rx:0, ry:0, offset:0, "stop-opacity":1, "stop-color":"#000000", "text-anchor":"start"
      };
      class yt extends Array{
        constructor(...t){
          super(...t), this.init(...t)
        }
        clone(){
          return new this.constructor(this)
        }
        init(t){
          return"number"==typeof t||(this.length=0, this.push(...this.parse(t))), this
        }
        parse(t=[
        ]){
          return t instanceof Array?t:t.trim().split(V).map(parseFloat)
        }
        toArray(){
          return Array.prototype.concat.apply([
          ], this)
        }
        toSet(){
          return new Set(this)
        }
        toString(){
          return this.join(" ")
        }
        valueOf(){
          const t=[
          ];
          return t.push(...this), t
        }
      }
      class Mt{
        constructor(...t){
          this.init(...t)
        }
        convert(t){
          return new Mt(this.value, t)
        }
        divide(t){
          return t=new Mt(t), new Mt(this/t, this.unit||t.unit)
        }
        init(t, e){
          return e=Array.isArray(t)?t[
            1
          ]
          :e, t=Array.isArray(t)?t[
            0
          ]
          :t, this.value=0, this.unit=e||"", "number"==typeof t?this.value=isNaN(t)?0:isFinite(t)?t:t<0?-34e37:34e37:"string"==typeof t?(e=t.match(F))&&(this.value=parseFloat(e[
            1
          ]), "%"===e[
            5
          ]
          ?this.value/=100:"s"===e[
            5
          ]
          &&(this.value*=1e3), this.unit=e[
            5
          ]):t instanceof Mt&&(this.value=t.valueOf(), this.unit=t.unit), this
        }
        minus(t){
          return t=new Mt(t), new Mt(this-t, this.unit||t.unit)
        }
        plus(t){
          return t=new Mt(t), new Mt(this+t, this.unit||t.unit)
        }
        times(t){
          return t=new Mt(t), new Mt(this*t, this.unit||t.unit)
        }
        toArray(){
          return[
            this.value, this.unit
          ]
        }
        toJSON(){
          return this.toString()
        }
        toString(){
          return("%"===this.unit?~~(1e8*this.value)/1e6:"s"===this.unit?this.value/1e3:this.value)+this.unit
        }
        valueOf(){
          return this.value
        }
      }
      const wt=[
      ];
      class _t extends ft{
        constructor(t, e){
          super(), this.node=t, this.type=t.nodeName, e&&t!==e&&this.attr(e)
        }
        add(t, e){
          return(t=b(t)).removeNamespace&&this.node instanceof w.window.SVGElement&&t.removeNamespace(), null==e?this.node.appendChild(t.node):t.node!==this.node.childNodes[
            e
          ]
          &&this.node.insertBefore(t.node, this.node.childNodes[
            e
          ]), this
        }
        addTo(t, e){
          return b(t).put(this, e)
        }
        children(){
          return new rt(h(this.node.children, (function(t){
            return T(t)
          })))
        }
        clear(){
          for(;
          this.node.hasChildNodes();
          )this.node.removeChild(this.node.lastChild);
          return this
        }
        clone(t=!0, e=!0){
          this.writeDataToDom();
          let i=this.node.cloneNode(t);
          return e&&(i=R(i)), new this.constructor(i)
        }
        each(t, e){
          const i=this.children();
          let n, s;
          for(n=0, s=i.length;
          n<s;
          n++)t.apply(i[
            n
          ], [
            n, i
          ]), e&&i[
            n
          ].each(t, e);
          return this
        }
        element(t, e){
          return this.put(new _t(C(t), e))
        }
        first(){
          return T(this.node.firstChild)
        }
        get(t){
          return T(this.node.childNodes[
            t
          ])
        }
        getEventHolder(){
          return this.node
        }
        getEventTarget(){
          return this.node
        }
        has(t){
          return this.index(t)>=0
        }
        html(t, e){
          return this.xml(t, e, x)
        }
        id(t){
          return void 0!==t||this.node.id||(this.node.id=z(this.type)), this.attr("id", t)
        }
        index(t){
          return[
          ].slice.call(this.node.childNodes).indexOf(t.node)
        }
        last(){
          return T(this.node.lastChild)
        }
        matches(t){
          const e=this.node, i=e.matches||e.matchesSelector||e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||e.oMatchesSelector||null;
          return i&&i.call(e, t)
        }
        parent(t){
          let e=this;
          if(!e.node.parentNode)return null;
          if(e=T(e.node.parentNode), !t)return e;
          do{
            if("string"==typeof t?e.matches(t):e instanceof t)return e
          }
          while(e=T(e.node.parentNode));
          return e
        }
        put(t, e){
          return t=b(t), this.add(t, e), t
        }
        putIn(t, e){
          return b(t).add(this, e)
        }
        remove(){
          return this.parent()&&this.parent().removeElement(this), this
        }
        removeElement(t){
          return this.node.removeChild(t.node), this
        }
        replace(t){
          return t=b(t), this.node.parentNode&&this.node.parentNode.replaceChild(t.node, this.node), t
        }
        round(t=2, e=null){
          const i=10**t, n=this.attr(e);
          for(const t in n)"number"==typeof n[
            t
          ]
          &&(n[
            t
          ]
          =Math.round(n[
            t
          ]
          *i)/i);
          return this.attr(n), this
        }
        svg(t, e){
          return this.xml(t, e, g)
        }
        toString(){
          return this.id()
        }
        words(t){
          return this.node.textContent=t, this
        }
        wrap(t){
          const e=this.parent();
          if(!e)return this.addTo(t);
          const i=e.index(this);
          return e.put(t, i).put(this)
        }
        writeDataToDom(){
          return this.each((function(){
            this.writeDataToDom()
          })), this
        }
        xml(t, e, i){
          if("boolean"==typeof t&&(i=e, e=t, t=null), null==t||"function"==typeof t){
            e=null==e||e, this.writeDataToDom();
            let i=this;
            if(null!=t){
              if(i=T(i.node.cloneNode(!0)), e){
                const e=t(i);
                if(i=e||i, !1===e)return""
              }
              i.each((function(){
                const e=t(this), i=e||this;
                !1===e?this.remove():e&&this!==i&&this.replace(i)
              }), !0)
            }
            return e?i.node.outerHTML:i.node.innerHTML
          }
          e=null!=e&&e;
          const n=C("wrapper", i), s=w.document.createDocumentFragment();
          n.innerHTML=t;
          for(let t=n.children.length;
          t--;
          )s.appendChild(n.firstElementChild);
          const o=this.parent();
          return e?this.replace(s)&&o:this.add(s)
        }
      }
      O(_t, {
        attr:function(t, e, i){
          if(null==t){
            t={
            }, e=this.node.attributes;
            for(const i of e)t[
              i.nodeName
            ]
            =$.test(i.nodeValue)?parseFloat(i.nodeValue):i.nodeValue;
            return t
          }
          if(t instanceof Array)return t.reduce(((t, e)=>(t[
            e
          ]
          =this.attr(e), t)), {
          });
          if("object"==typeof t&&t.constructor===Object)for(e in t)this.attr(e, t[
            e
          ]);
          else if(null===e)this.node.removeAttribute(t);
          else{
            if(null==e)return null==(e=this.node.getAttribute(t))?vt[
              t
            ]
            :$.test(e)?parseFloat(e):e;
            "number"==typeof(e=wt.reduce(((e, i)=>i(t, e, this)), e))?e=new Mt(e):Q.isColor(e)?e=new Q(e):e.constructor===Array&&(e=new yt(e)), "leading"===t?this.leading&&this.leading(e):"string"==typeof i?this.node.setAttributeNS(i, t, e.toString()):this.node.setAttribute(t, e.toString()), !this.rebuild||"font-size"!==t&&"x"!==t||this.rebuild()
          }
          return this
        }, find:function(t){
          return ht(t, this.node)
        }, findOne:function(t){
          return T(this.node.querySelector(t))
        }
      }), A(_t, "Dom");
      class Nt extends _t{
        constructor(t, e){
          super(t, e), this.dom={
          }, this.node.instance=this, t.hasAttribute("svgjs:data")&&this.setData(JSON.parse(t.getAttribute("svgjs:data"))||{
          })
        }
        center(t, e){
          return this.cx(t).cy(e)
        }
        cx(t){
          return null==t?this.x()+this.width()/2:this.x(t-this.width()/2)
        }
        cy(t){
          return null==t?this.y()+this.height()/2:this.y(t-this.height()/2)
        }
        defs(){
          const t=this.root();
          return t&&t.defs()
        }
        dmove(t, e){
          return this.dx(t).dy(e)
        }
        dx(t=0){
          return this.x(new Mt(t).plus(this.x()))
        }
        dy(t=0){
          return this.y(new Mt(t).plus(this.y()))
        }
        getEventHolder(){
          return this
        }
        height(t){
          return this.attr("height", t)
        }
        move(t, e){
          return this.x(t).y(e)
        }
        parents(t=this.root()){
          const e="string"==typeof t;
          e||(t=b(t));
          const i=new rt;
          let n=this;
          for(;
          (n=n.parent())&&n.node!==w.document&&"#document-fragment"!==n.nodeName&&(i.push(n), e||n.node!==t.node)&&(!e||!n.matches(t));
          )if(n.node===this.root().node)return null;
          return i
        }
        reference(t){
          if(!(t=this.attr(t)))return null;
          const e=(t+"").match(H);
          return e?b(e[
            1
          ]):null
        }
        root(){
          const t=this.parent(N[
            E
          ]);
          return t&&t.root()
        }
        setData(t){
          return this.dom=t, this
        }
        size(t, e){
          const i=m(this, t, e);
          return this.width(new Mt(i.width)).height(new Mt(i.height))
        }
        width(t){
          return this.attr("width", t)
        }
        writeDataToDom(){
          return this.node.removeAttribute("svgjs:data"), Object.keys(this.dom).length&&this.node.setAttribute("svgjs:data", JSON.stringify(this.dom)), super.writeDataToDom()
        }
        x(t){
          return this.attr("x", t)
        }
        y(t){
          return this.attr("y", t)
        }
      }
      O(Nt, {
        bbox:function(){
          const t=ot(this, (t=>t.getBBox()), (t=>{
            try{
              const e=t.clone().addTo(it().svg).show(), i=e.node.getBBox();
              return e.remove(), i
            }
            catch(e){
              throw new Error(`Getting bbox of element "${t.node.nodeName}" is not possible: ${e.toString()}`)
            }
          }));
          return new st(t)
        }, rbox:function(t){
          const e=ot(this, (t=>t.getBoundingClientRect()), (t=>{
            throw new Error(`Getting rbox of element "${t.node.nodeName}" is not possible`)
          })), i=new st(e);
          return t?i.transform(t.screenCTM().inverseO()):i.addOffset()
        }, inside:function(t, e){
          const i=this.bbox();
          return t>i.x&&e>i.y&&t<i.x+i.width&&e<i.y+i.height
        }, point:function(t, e){
          return new J(t, e).transformO(this.screenCTM().inverseO())
        }, ctm:function(){
          return new et(this.node.getCTM())
        }, screenCTM:function(){
          if("function"==typeof this.isRoot&&!this.isRoot()){
            const t=this.rect(1, 1), e=t.node.getScreenCTM();
            return t.remove(), new et(e)
          }
          return new et(this.node.getScreenCTM())
        }
      }), A(Nt, "Element");
      const Et={
        stroke:[
          "color", "width", "opacity", "linecap", "linejoin", "miterlimit", "dasharray", "dashoffset"
        ], fill:[
          "color", "opacity", "rule"
        ], prefix:function(t, e){
          return"color"===e?t:t+"-"+e
        }
      };
      [
        "fill", "stroke"
      ].forEach((function(t){
        const e={
        };
        let i;
        e[
          t
        ]
        =function(e){
          if(void 0===e)return this.attr(t);
          if("string"==typeof e||e instanceof Q||Q.isRgb(e)||e instanceof Nt)this.attr(t, e);
          else for(i=Et[
            t
          ].length-1;
          i>=0;
          i--)null!=e[
            Et[
              t
            ]
            [
              i
            ]
          ]
          &&this.attr(Et.prefix(t, Et[
            t
          ]
          [
            i
          ]), e[
            Et[
              t
            ]
            [
              i
            ]
          ]);
          return this
        }, o([
          "Element", "Runner"
        ], e)
      })), o([
        "Element", "Runner"
      ], {
        matrix:function(t, e, i, n, s, o){
          return null==t?new et(this):this.attr("transform", new et(t, e, i, n, s, o))
        }, rotate:function(t, e, i){
          return this.transform({
            rotate:t, ox:e, oy:i
          }, !0)
        }, skew:function(t, e, i, n){
          return 1===arguments.length||3===arguments.length?this.transform({
            skew:t, ox:e, oy:i
          }, !0):this.transform({
            skew:[
              t, e
            ], ox:i, oy:n
          }, !0)
        }, shear:function(t, e, i){
          return this.transform({
            shear:t, ox:e, oy:i
          }, !0)
        }, scale:function(t, e, i, n){
          return 1===arguments.length||3===arguments.length?this.transform({
            scale:t, ox:e, oy:i
          }, !0):this.transform({
            scale:[
              t, e
            ], ox:i, oy:n
          }, !0)
        }, translate:function(t, e){
          return this.transform({
            translate:[
              t, e
            ]
          }, !0)
        }, relative:function(t, e){
          return this.transform({
            relative:[
              t, e
            ]
          }, !0)
        }, flip:function(t="both", e="center"){
          return-1==="xybothtrue".indexOf(t)&&(e=t, t="both"), this.transform({
            flip:t, origin:e
          }, !0)
        }, opacity:function(t){
          return this.attr("opacity", t)
        }
      }), o("radius", {
        radius:function(t, e=t){
          return"radialGradient"===(this._element||this).type?this.attr("r", new Mt(t)):this.rx(t).ry(e)
        }
      }), o("Path", {
        length:function(){
          return this.node.getTotalLength()
        }, pointAt:function(t){
          return new J(this.node.getPointAtLength(t))
        }
      }), o([
        "Element", "Runner"
      ], {
        font:function(t, e){
          if("object"==typeof t){
            for(e in t)this.font(e, t[
              e
            ]);
            return this
          }
          return"leading"===t?this.leading(e):"anchor"===t?this.attr("text-anchor", e):"size"===t||"family"===t||"weight"===t||"stretch"===t||"variant"===t||"style"===t?this.attr("font-"+t, e):this.attr(t, e)
        }
      });
      o("Element", [
        "click", "dblclick", "mousedown", "mouseup", "mouseover", "mouseout", "mousemove", "mouseenter", "mouseleave", "touchstart", "touchmove", "touchleave", "touchend", "touchcancel"
      ].reduce((function(t, e){
        return t[
          e
        ]
        =function(t){
          return null===t?this.off(e):this.on(e, t), this
        }, t
      }), {
      })), o("Element", {
        untransform:function(){
          return this.attr("transform", null)
        }, matrixify:function(){
          return(this.attr("transform")||"").split(G).slice(0, -1).map((function(t){
            const e=t.trim().split("(");
            return[
              e[
                0
              ], e[
                1
              ].split(V).map((function(t){
                return parseFloat(t)
              }))
            ]
          })).reverse().reduce((function(t, e){
            return"matrix"===e[
              0
            ]
            ?t.lmultiply(et.fromArray(e[
              1
            ])):t[
              e[
                0
              ]
            ].apply(t, e[
              1
            ])
          }), new et)
        }, toParent:function(t, e){
          if(this===t)return this;
          const i=this.screenCTM(), n=t.screenCTM().inverse();
          return this.addTo(t, e).untransform().transform(n.multiply(i)), this
        }, toRoot:function(t){
          return this.toParent(this.root(), t)
        }, transform:function(t, e){
          if(null==t||"string"==typeof t){
            const e=new et(this).decompose();
            return null==t?e:e[
              t
            ]
          }
          et.isMatrixLike(t)||(t={
            ...t, origin:f(t, this)
          });
          const i=new et(!0===e?this:e||!1).transform(t);
          return this.attr("transform", i)
        }
      });
      class Ct extends Nt{
        flatten(t=this, e){
          return this.each((function(){
            if(this instanceof Ct)return this.flatten().ungroup()
          })), this
        }
        ungroup(t=this.parent(), e=t.index(this)){
          return e=-1===e?t.children().length:e, this.each((function(i, n){
            return n[
              n.length-i-1
            ].toParent(t, e)
          })), this.remove()
        }
      }
      A(Ct, "Container");
      class bt extends Ct{
        constructor(t, e=t){
          super(L("defs", t), e)
        }
        flatten(){
          return this
        }
        ungroup(){
          return this
        }
      }
      A(bt, "Defs");
      class Lt extends Nt{
      }
      function Tt(t){
        return this.attr("rx", t)
      }
      function Dt(t){
        return this.attr("ry", t)
      }
      function At(t){
        return null==t?this.cx()-this.rx():this.cx(t+this.rx())
      }
      function St(t){
        return null==t?this.cy()-this.ry():this.cy(t+this.ry())
      }
      function zt(t){
        return this.attr("cx", t)
      }
      function Rt(t){
        return this.attr("cy", t)
      }
      function Ot(t){
        return null==t?2*this.rx():this.rx(new Mt(t).divide(2))
      }
      function It(t){
        return null==t?2*this.ry():this.ry(new Mt(t).divide(2))
      }
      A(Lt, "Shape");
      var Ft={
        __proto__:null, rx:Tt, ry:Dt, x:At, y:St, cx:zt, cy:Rt, width:Ot, height:It
      };
      class kt extends Lt{
        constructor(t, e=t){
          super(L("ellipse", t), e)
        }
        size(t, e){
          const i=m(this, t, e);
          return this.rx(new Mt(i.width).divide(2)).ry(new Mt(i.height).divide(2))
        }
      }
      O(kt, Ft), o("Container", {
        ellipse:I((function(t=0, e=t){
          return this.put(new kt).size(t, e).move(0, 0)
        }))
      }), A(kt, "Ellipse");
      class Bt extends _t{
        constructor(t=w.document.createDocumentFragment()){
          super(t)
        }
        xml(t, e, i){
          if("boolean"==typeof t&&(i=e, e=t, t=null), null==t||"function"==typeof t){
            const t=new _t(C("wrapper", i));
            return t.add(this.node.cloneNode(!0)), t.xml(!1, i)
          }
          return super.xml(t, !1, i)
        }
      }
      function Ht(t, e){
        return"radialGradient"===(this._element||this).type?this.attr({
          fx:new Mt(t), fy:new Mt(e)
        }):this.attr({
          x1:new Mt(t), y1:new Mt(e)
        })
      }
      function Gt(t, e){
        return"radialGradient"===(this._element||this).type?this.attr({
          cx:new Mt(t), cy:new Mt(e)
        }):this.attr({
          x2:new Mt(t), y2:new Mt(e)
        })
      }
      A(Bt, "Fragment");
      var Pt, Yt={
        __proto__:null, from:Ht, to:Gt
      };
      class Wt extends Ct{
        constructor(t, e){
          super(L(t+"Gradient", "string"==typeof t?null:t), e)
        }
        attr(t, e, i){
          return"transform"===t&&(t="gradientTransform"), super.attr(t, e, i)
        }
        bbox(){
          return new st
        }
        targets(){
          return ht("svg [fill*="+this.id()+"]")
        }
        toString(){
          return this.url()
        }
        update(t){
          return this.clear(), "function"==typeof t&&t.call(this, this), this
        }
        url(){
          return"url(#"+this.id()+")"
        }
      }
      O(Wt, Yt), o({
        Container:{
          gradient(...t){
            return this.defs().gradient(...t)
          }
        }, Defs:{
          gradient:I((function(t, e){
            return this.put(new Wt(t)).update(e)
          }))
        }
      }), A(Wt, "Gradient");
      class Ut extends Ct{
        constructor(t, e=t){
          super(L("pattern", t), e)
        }
        attr(t, e, i){
          return"transform"===t&&(t="patternTransform"), super.attr(t, e, i)
        }
        bbox(){
          return new st
        }
        targets(){
          return ht("svg [fill*="+this.id()+"]")
        }
        toString(){
          return this.url()
        }
        update(t){
          return this.clear(), "function"==typeof t&&t.call(this, this), this
        }
        url(){
          return"url(#"+this.id()+")"
        }
      }
      o({
        Container:{
          pattern(...t){
            return this.defs().pattern(...t)
          }
        }, Defs:{
          pattern:I((function(t, e, i){
            return this.put(new Ut).update(i).attr({
              x:0, y:0, width:t, height:e, patternUnits:"userSpaceOnUse"
            })
          }))
        }
      }), A(Ut, "Pattern");
      class $t extends Lt{
        constructor(t, e=t){
          super(L("image", t), e)
        }
        load(t, e){
          if(!t)return this;
          const i=new w.window.Image;
          return pt(i, "load", (function(t){
            const n=this.parent(Ut);
            0===this.width()&&0===this.height()&&this.size(i.width, i.height), n instanceof Ut&&0===n.width()&&0===n.height()&&n.size(this.width(), this.height()), "function"==typeof e&&e.call(this, t)
          }), this), pt(i, "load error", (function(){
            mt(i)
          })), this.attr("href", i.src=t, y)
        }
      }
      Pt=function(t, e, i){
        return"fill"!==t&&"stroke"!==t||X.test(e)&&(e=i.root().defs().image(e)), e instanceof $t&&(e=i.root().defs().pattern(0, 0, (t=>{
          t.add(e)
        }))), e
      }, wt.push(Pt), o({
        Container:{
          image:I((function(t, e){
            return this.put(new $t).size(0, 0).load(t, e)
          }))
        }
      }), A($t, "Image");
      class Xt extends yt{
        bbox(){
          let t=-1/0, e=-1/0, i=1/0, n=1/0;
          return this.forEach((function(s){
            t=Math.max(s[
              0
            ], t), e=Math.max(s[
              1
            ], e), i=Math.min(s[
              0
            ], i), n=Math.min(s[
              1
            ], n)
          })), new st(i, n, t-i, e-n)
        }
        move(t, e){
          const i=this.bbox();
          if(t-=i.x, e-=i.y, !isNaN(t)&&!isNaN(e))for(let i=this.length-1;
          i>=0;
          i--)this[
            i
          ]
          =[
            this[
              i
            ]
            [
              0
            ]
            +t, this[
              i
            ]
            [
              1
            ]
            +e
          ];
          return this
        }
        parse(t=[
          0, 0
        ]){
          const e=[
          ];
          (t=t instanceof Array?Array.prototype.concat.apply([
          ], t):t.trim().split(V).map(parseFloat)).length%2!=0&&t.pop();
          for(let i=0, n=t.length;
          i<n;
          i+=2)e.push([
            t[
              i
            ], t[
              i+1
            ]
          ]);
          return e
        }
        size(t, e){
          let i;
          const n=this.bbox();
          for(i=this.length-1;
          i>=0;
          i--)n.width&&(this[
            i
          ]
          [
            0
          ]
          =(this[
            i
          ]
          [
            0
          ]
          -n.x)*t/n.width+n.x), n.height&&(this[
            i
          ]
          [
            1
          ]
          =(this[
            i
          ]
          [
            1
          ]
          -n.y)*e/n.height+n.y);
          return this
        }
        toLine(){
          return{
            x1:this[
              0
            ]
            [
              0
            ], y1:this[
              0
            ]
            [
              1
            ], x2:this[
              1
            ]
            [
              0
            ], y2:this[
              1
            ]
            [
              1
            ]
          }
        }
        toString(){
          const t=[
          ];
          for(let e=0, i=this.length;
          e<i;
          e++)t.push(this[
            e
          ].join(","));
          return t.join(" ")
        }
        transform(t){
          return this.clone().transformO(t)
        }
        transformO(t){
          et.isMatrixLike(t)||(t=new et(t));
          for(let e=this.length;
          e--;
          ){
            const[
              i, n
            ]
            =this[
              e
            ];
            this[
              e
            ]
            [
              0
            ]
            =t.a*i+t.c*n+t.e, this[
              e
            ]
            [
              1
            ]
            =t.b*i+t.d*n+t.f
          }
          return this
        }
      }
      var Vt={
        __proto__:null, MorphArray:Xt, x:function(t){
          return null==t?this.bbox().x:this.move(t, this.bbox().y)
        }, y:function(t){
          return null==t?this.bbox().y:this.move(this.bbox().x, t)
        }, width:function(t){
          const e=this.bbox();
          return null==t?e.width:this.size(t, e.height)
        }, height:function(t){
          const e=this.bbox();
          return null==t?e.height:this.size(e.width, t)
        }
      };
      class jt extends Lt{
        constructor(t, e=t){
          super(L("line", t), e)
        }
        array(){
          return new Xt([
            [
              this.attr("x1"), this.attr("y1")
            ], [
              this.attr("x2"), this.attr("y2")
            ]
          ])
        }
        move(t, e){
          return this.attr(this.array().move(t, e).toLine())
        }
        plot(t, e, i, n){
          return null==t?this.array():(t=void 0!==e?{
            x1:t, y1:e, x2:i, y2:n
          }
          :new Xt(t).toLine(), this.attr(t))
        }
        size(t, e){
          const i=m(this, t, e);
          return this.attr(this.array().size(i.width, i.height).toLine())
        }
      }
      O(jt, Vt), o({
        Container:{
          line:I((function(...t){
            return jt.prototype.plot.apply(this.put(new jt), null!=t[
              0
            ]
            ?t:[
              0, 0, 0, 0
            ])
          }))
        }
      }), A(jt, "Line");
      class Zt extends Ct{
        constructor(t, e=t){
          super(L("marker", t), e)
        }
        height(t){
          return this.attr("markerHeight", t)
        }
        orient(t){
          return this.attr("orient", t)
        }
        ref(t, e){
          return this.attr("refX", t).attr("refY", e)
        }
        toString(){
          return"url(#"+this.id()+")"
        }
        update(t){
          return this.clear(), "function"==typeof t&&t.call(this, this), this
        }
        width(t){
          return this.attr("markerWidth", t)
        }
      }
      function Kt(t, e){
        return function(i){
          return null==i?this[
            t
          ]
          :(this[
            t
          ]
          =i, e&&e.call(this), this)
        }
      }
      o({
        Container:{
          marker(...t){
            return this.defs().marker(...t)
          }
        }, Defs:{
          marker:I((function(t, e, i){
            return this.put(new Zt).size(t, e).ref(t/2, e/2).viewbox(0, 0, t, e).attr("orient", "auto").update(i)
          }))
        }, marker:{
          marker(t, e, i, n){
            let s=[
              "marker"
            ];
            return"all"!==t&&s.push(t), s=s.join("-"), t=arguments[
              1
            ]
            instanceof Zt?arguments[
              1
            ]
            :this.defs().marker(e, i, n), this.attr(s, t)
          }
        }
      }), A(Zt, "Marker");
      const qt={
        "-":function(t){
          return t
        }, "<>":function(t){
          return-Math.cos(t*Math.PI)/2+.5
        }, ">":function(t){
          return Math.sin(t*Math.PI/2)
        }, "<":function(t){
          return 1-Math.cos(t*Math.PI/2)
        }, bezier:function(t, e, i, n){
          return function(s){
            return s<0?t>0?e/t*s:i>0?n/i*s:0:s>1?i<1?(1-n)/(1-i)*s+(n-i)/(1-i):t<1?(1-e)/(1-t)*s+(e-t)/(1-t):1:3*s*(1-s)**2*e+3*s**2*(1-s)*n+s**3
          }
        }, steps:function(t, e="end"){
          e=e.split("-").reverse()[
            0
          ];
          let i=t;
          return"none"===e?--i:"both"===e&&++i, (n, s=!1)=>{
            let o=Math.floor(n*t);
            const r=n*o%1==0;
            return"start"!==e&&"both"!==e||++o, s&&r&&--o, n>=0&&o<0&&(o=0), n<=1&&o>i&&(o=i), o/i
          }
        }
      };
      class Qt{
        done(){
          return!1
        }
      }
      class Jt extends Qt{
        constructor(t=xt.ease){
          super(), this.ease=qt[
            t
          ]
          ||t
        }
        step(t, e, i){
          return"number"!=typeof t?i<1?t:e:t+(e-t)*this.ease(i)
        }
      }
      class te extends Qt{
        constructor(t){
          super(), this.stepper=t
        }
        done(t){
          return t.done
        }
        step(t, e, i, n){
          return this.stepper(t, e, i, n)
        }
      }
      function ee(){
        const t=(this._duration||500)/1e3, e=this._overshoot||0, i=Math.PI, n=Math.log(e/100+1e-10), s=-n/Math.sqrt(i*i+n*n), o=3.9/(s*t);
        this.d=2*s*o, this.k=o*o
      }
      O(class extends te{
        constructor(t=500, e=0){
          super(), this.duration(t).overshoot(e)
        }
        step(t, e, i, n){
          if("string"==typeof t)return t;
          if(n.done=i===1/0, i===1/0)return e;
          if(0===i)return t;
          i>100&&(i=16), i/=1e3;
          const s=n.velocity||0, o=-this.d*s-this.k*(t-e), r=t+s*i+o*i*i/2;
          return n.velocity=s+o*i, n.done=Math.abs(e-r)+Math.abs(s)<.002, n.done?e:r
        }
      }, {
        duration:Kt("_duration", ee), overshoot:Kt("_overshoot", ee)
      });
      O(class extends te{
        constructor(t=.1, e=.01, i=0, n=1e3){
          super(), this.p(t).i(e).d(i).windup(n)
        }
        step(t, e, i, n){
          if("string"==typeof t)return t;
          if(n.done=i===1/0, i===1/0)return e;
          if(0===i)return t;
          const s=e-t;
          let o=(n.integral||0)+s*i;
          const r=(s-(n.error||0))/i, a=this._windup;
          return!1!==a&&(o=Math.max(-a, Math.min(o, a))), n.error=s, n.integral=o, n.done=Math.abs(s)<.001, n.done?e:t+(this.P*s+this.I*o+this.D*r)
        }
      }, {
        windup:Kt("_windup"), p:Kt("P"), i:Kt("I"), d:Kt("D")
      });
      const ie={
        M:2, L:2, H:1, V:1, C:6, S:4, Q:4, T:2, A:7, Z:0
      }, ne={
        M:function(t, e, i){
          return e.x=i.x=t[
            0
          ], e.y=i.y=t[
            1
          ], [
            "M", e.x, e.y
          ]
        }, L:function(t, e){
          return e.x=t[
            0
          ], e.y=t[
            1
          ], [
            "L", t[
              0
            ], t[
              1
            ]
          ]
        }, H:function(t, e){
          return e.x=t[
            0
          ], [
            "H", t[
              0
            ]
          ]
        }, V:function(t, e){
          return e.y=t[
            0
          ], [
            "V", t[
              0
            ]
          ]
        }, C:function(t, e){
          return e.x=t[
            4
          ], e.y=t[
            5
          ], [
            "C", t[
              0
            ], t[
              1
            ], t[
              2
            ], t[
              3
            ], t[
              4
            ], t[
              5
            ]
          ]
        }, S:function(t, e){
          return e.x=t[
            2
          ], e.y=t[
            3
          ], [
            "S", t[
              0
            ], t[
              1
            ], t[
              2
            ], t[
              3
            ]
          ]
        }, Q:function(t, e){
          return e.x=t[
            2
          ], e.y=t[
            3
          ], [
            "Q", t[
              0
            ], t[
              1
            ], t[
              2
            ], t[
              3
            ]
          ]
        }, T:function(t, e){
          return e.x=t[
            0
          ], e.y=t[
            1
          ], [
            "T", t[
              0
            ], t[
              1
            ]
          ]
        }, Z:function(t, e, i){
          return e.x=i.x, e.y=i.y, [
            "Z"
          ]
        }, A:function(t, e){
          return e.x=t[
            5
          ], e.y=t[
            6
          ], [
            "A", t[
              0
            ], t[
              1
            ], t[
              2
            ], t[
              3
            ], t[
              4
            ], t[
              5
            ], t[
              6
            ]
          ]
        }
      }, se="mlhvqtcsaz".split("");
      for(let t=0, e=se.length;
      t<e;
      ++t)ne[
        se[
          t
        ]
      ]
      =function(t){
        return function(e, i, n){
          if("H"===t)e[
            0
          ]
          =e[
            0
          ]
          +i.x;
          else if("V"===t)e[
            0
          ]
          =e[
            0
          ]
          +i.y;
          else if("A"===t)e[
            5
          ]
          =e[
            5
          ]
          +i.x, e[
            6
          ]
          =e[
            6
          ]
          +i.y;
          else for(let t=0, n=e.length;
          t<n;
          ++t)e[
            t
          ]
          =e[
            t
          ]
          +(t%2?i.y:i.x);
          return ne[
            t
          ]
          (e, i, n)
        }
      }
      (se[
        t
      ].toUpperCase());
      function oe(t){
        return t.segment.length&&t.segment.length-1===ie[
          t.segment[
            0
          ].toUpperCase()
        ]
      }
      function re(t, e){
        t.inNumber&&ae(t, !1);
        const i=j.test(e);
        if(i)t.segment=[
          e
        ];
        else{
          const e=t.lastCommand, i=e.toLowerCase(), n=e===i;
          t.segment=[
            "m"===i?n?"l":"L":e
          ]
        }
        return t.inSegment=!0, t.lastCommand=t.segment[
          0
        ], i
      }
      function ae(t, e){
        if(!t.inNumber)throw new Error("Parser Error");
        t.number&&t.segment.push(parseFloat(t.number)), t.inNumber=e, t.number="", t.pointSeen=!1, t.hasExponent=!1, oe(t)&&he(t)
      }
      function he(t){
        t.inSegment=!1, t.absolute&&(t.segment=function(t){
          const e=t.segment[
            0
          ];
          return ne[
            e
          ]
          (t.segment.slice(1), t.p, t.p0)
        }
        (t)), t.segments.push(t.segment)
      }
      function de(t){
        if(!t.segment.length)return!1;
        const e="A"===t.segment[
          0
        ].toUpperCase(), i=t.segment.length;
        return e&&(4===i||5===i)
      }
      function le(t){
        return"E"===t.lastToken.toUpperCase()
      }
      class ce extends yt{
        bbox(){
          return it().path.setAttribute("d", this.toString()), new st(it.nodes.path.getBBox())
        }
        move(t, e){
          const i=this.bbox();
          if(t-=i.x, e-=i.y, !isNaN(t)&&!isNaN(e))for(let i, n=this.length-1;
          n>=0;
          n--)i=this[
            n
          ]
          [
            0
          ], "M"===i||"L"===i||"T"===i?(this[
            n
          ]
          [
            1
          ]
          +=t, this[
            n
          ]
          [
            2
          ]
          +=e):"H"===i?this[
            n
          ]
          [
            1
          ]
          +=t:"V"===i?this[
            n
          ]
          [
            1
          ]
          +=e:"C"===i||"S"===i||"Q"===i?(this[
            n
          ]
          [
            1
          ]
          +=t, this[
            n
          ]
          [
            2
          ]
          +=e, this[
            n
          ]
          [
            3
          ]
          +=t, this[
            n
          ]
          [
            4
          ]
          +=e, "C"===i&&(this[
            n
          ]
          [
            5
          ]
          +=t, this[
            n
          ]
          [
            6
          ]
          +=e)):"A"===i&&(this[
            n
          ]
          [
            6
          ]
          +=t, this[
            n
          ]
          [
            7
          ]
          +=e);
          return this
        }
        parse(t="M0 0"){
          return Array.isArray(t)&&(t=Array.prototype.concat.apply([
          ], t).toString()), function(t, e=!0){
            let i=0, n="";
            const s={
              segment:[
              ], inNumber:!1, number:"", lastToken:"", inSegment:!1, segments:[
              ], pointSeen:!1, hasExponent:!1, absolute:e, p0:new J, p:new J
            };
            for(;
            s.lastToken=n, n=t.charAt(i++);
            )if(s.inSegment||!re(s, n))if("."!==n)if(isNaN(parseInt(n)))if(" "!==n&&","!==n)if("-"!==n)if("E"!==n.toUpperCase()){
              if(j.test(n)){
                if(s.inNumber)ae(s, !1);
                else{
                  if(!oe(s))throw new Error("parser Error");
                  he(s)
                }
                --i
              }
            }
            else s.number+=n, s.hasExponent=!0;
            else{
              if(s.inNumber&&!le(s)){
                ae(s, !1), --i;
                continue
              }
              s.number+=n, s.inNumber=!0
            }
            else s.inNumber&&ae(s, !1);
            else{
              if("0"===s.number||de(s)){
                s.inNumber=!0, s.number=n, ae(s, !0);
                continue
              }
              s.inNumber=!0, s.number+=n
            }
            else{
              if(s.pointSeen||s.hasExponent){
                ae(s, !1), --i;
                continue
              }
              s.inNumber=!0, s.pointSeen=!0, s.number+=n
            }
            return s.inNumber&&ae(s, !1), s.inSegment&&oe(s)&&he(s), s.segments
          }
          (t)
        }
        size(t, e){
          const i=this.bbox();
          let n, s;
          for(i.width=0===i.width?1:i.width, i.height=0===i.height?1:i.height, n=this.length-1;
          n>=0;
          n--)s=this[
            n
          ]
          [
            0
          ], "M"===s||"L"===s||"T"===s?(this[
            n
          ]
          [
            1
          ]
          =(this[
            n
          ]
          [
            1
          ]
          -i.x)*t/i.width+i.x, this[
            n
          ]
          [
            2
          ]
          =(this[
            n
          ]
          [
            2
          ]
          -i.y)*e/i.height+i.y):"H"===s?this[
            n
          ]
          [
            1
          ]
          =(this[
            n
          ]
          [
            1
          ]
          -i.x)*t/i.width+i.x:"V"===s?this[
            n
          ]
          [
            1
          ]
          =(this[
            n
          ]
          [
            1
          ]
          -i.y)*e/i.height+i.y:"C"===s||"S"===s||"Q"===s?(this[
            n
          ]
          [
            1
          ]
          =(this[
            n
          ]
          [
            1
          ]
          -i.x)*t/i.width+i.x, this[
            n
          ]
          [
            2
          ]
          =(this[
            n
          ]
          [
            2
          ]
          -i.y)*e/i.height+i.y, this[
            n
          ]
          [
            3
          ]
          =(this[
            n
          ]
          [
            3
          ]
          -i.x)*t/i.width+i.x, this[
            n
          ]
          [
            4
          ]
          =(this[
            n
          ]
          [
            4
          ]
          -i.y)*e/i.height+i.y, "C"===s&&(this[
            n
          ]
          [
            5
          ]
          =(this[
            n
          ]
          [
            5
          ]
          -i.x)*t/i.width+i.x, this[
            n
          ]
          [
            6
          ]
          =(this[
            n
          ]
          [
            6
          ]
          -i.y)*e/i.height+i.y)):"A"===s&&(this[
            n
          ]
          [
            1
          ]
          =this[
            n
          ]
          [
            1
          ]
          *t/i.width, this[
            n
          ]
          [
            2
          ]
          =this[
            n
          ]
          [
            2
          ]
          *e/i.height, this[
            n
          ]
          [
            6
          ]
          =(this[
            n
          ]
          [
            6
          ]
          -i.x)*t/i.width+i.x, this[
            n
          ]
          [
            7
          ]
          =(this[
            n
          ]
          [
            7
          ]
          -i.y)*e/i.height+i.y);
          return this
        }
        toString(){
          return function(t){
            let e="";
            for(let i=0, n=t.length;
            i<n;
            i++)e+=t[
              i
            ]
            [
              0
            ], null!=t[
              i
            ]
            [
              1
            ]
            &&(e+=t[
              i
            ]
            [
              1
            ], null!=t[
              i
            ]
            [
              2
            ]
            &&(e+=" ", e+=t[
              i
            ]
            [
              2
            ], null!=t[
              i
            ]
            [
              3
            ]
            &&(e+=" ", e+=t[
              i
            ]
            [
              3
            ], e+=" ", e+=t[
              i
            ]
            [
              4
            ], null!=t[
              i
            ]
            [
              5
            ]
            &&(e+=" ", e+=t[
              i
            ]
            [
              5
            ], e+=" ", e+=t[
              i
            ]
            [
              6
            ], null!=t[
              i
            ]
            [
              7
            ]
            &&(e+=" ", e+=t[
              i
            ]
            [
              7
            ])))));
            return e+" "
          }
          (this)
        }
      }
      const ue=t=>{
        const e=typeof t;
        return"number"===e?Mt:"string"===e?Q.isColor(t)?Q:V.test(t)?j.test(t)?ce:yt:F.test(t)?Mt:me:ve.indexOf(t.constructor)>-1?t.constructor:Array.isArray(t)?yt:"object"===e?xe:me
      };
      class pe{
        constructor(t){
          this._stepper=t||new Jt("-"), this._from=null, this._to=null, this._type=null, this._context=null, this._morphObj=null
        }
        at(t){
          return this._morphObj.morph(this._from, this._to, t, this._stepper, this._context)
        }
        done(){
          return this._context.map(this._stepper.done).reduce((function(t, e){
            return t&&e
          }), !0)
        }
        from(t){
          return null==t?this._from:(this._from=this._set(t), this)
        }
        stepper(t){
          return null==t?this._stepper:(this._stepper=t, this)
        }
        to(t){
          return null==t?this._to:(this._to=this._set(t), this)
        }
        type(t){
          return null==t?this._type:(this._type=t, this)
        }
        _set(t){
          this._type||this.type(ue(t));
          let e=new this._type(t);
          return this._type===Q&&(e=this._to?e[
            this._to[
              4
            ]
          ]
          ():this._from?e[
            this._from[
              4
            ]
          ]
          ():e), this._type===xe&&(e=this._to?e.align(this._to):this._from?e.align(this._from):e), e=e.toConsumable(), this._morphObj=this._morphObj||new this._type, this._context=this._context||Array.apply(null, Array(e.length)).map(Object).map((function(t){
            return t.done=!0, t
          })), e
        }
      }
      class me{
        constructor(...t){
          this.init(...t)
        }
        init(t){
          return t=Array.isArray(t)?t[
            0
          ]
          :t, this.value=t, this
        }
        toArray(){
          return[
            this.value
          ]
        }
        valueOf(){
          return this.value
        }
      }
      class fe{
        constructor(...t){
          this.init(...t)
        }
        init(t){
          return Array.isArray(t)&&(t={
            scaleX:t[
              0
            ], scaleY:t[
              1
            ], shear:t[
              2
            ], rotate:t[
              3
            ], translateX:t[
              4
            ], translateY:t[
              5
            ], originX:t[
              6
            ], originY:t[
              7
            ]
          }), Object.assign(this, fe.defaults, t), this
        }
        toArray(){
          const t=this;
          return[
            t.scaleX, t.scaleY, t.shear, t.rotate, t.translateX, t.translateY, t.originX, t.originY
          ]
        }
      }
      fe.defaults={
        scaleX:1, scaleY:1, shear:0, rotate:0, translateX:0, translateY:0, originX:0, originY:0
      };
      const ge=(t, e)=>t[
        0
      ]
      <e[
        0
      ]
      ?-1:t[
        0
      ]
      >e[
        0
      ]
      ?1:0;
      class xe{
        constructor(...t){
          this.init(...t)
        }
        align(t){
          const e=this.values;
          for(let i=0, n=e.length;
          i<n;
          ++i){
            if(e[
              i+1
            ]
            ===t[
              i+1
            ]){
              if(e[
                i+1
              ]
              ===Q&&t[
                i+7
              ]
              !==e[
                i+7
              ]){
                const e=t[
                  i+7
                ], n=new Q(this.values.splice(i+3, 5))[
                  e
                ]
                ().toArray();
                this.values.splice(i+3, 0, ...n)
              }
              i+=e[
                i+2
              ]
              +2;
              continue
            }
            if(!t[
              i+1
            ])return this;
            const n=(new t[
              i+1
            ]).toArray(), s=e[
              i+2
            ]
            +3;
            e.splice(i, s, t[
              i
            ], t[
              i+1
            ], t[
              i+2
            ], ...n), i+=e[
              i+2
            ]
            +2
          }
          return this
        }
        init(t){
          if(this.values=[
          ], Array.isArray(t))return void(this.values=t.slice());
          t=t||{
          };
          const e=[
          ];
          for(const i in t){
            const n=ue(t[
              i
            ]), s=new n(t[
              i
            ]).toArray();
            e.push([
              i, n, s.length, ...s
            ])
          }
          return e.sort(ge), this.values=e.reduce(((t, e)=>t.concat(e)), [
          ]), this
        }
        toArray(){
          return this.values
        }
        valueOf(){
          const t={
          }, e=this.values;
          for(;
          e.length;
          ){
            const i=e.shift(), n=e.shift(), s=e.shift(), o=e.splice(0, s);
            t[
              i
            ]
            =new n(o)
          }
          return t
        }
      }
      const ve=[
        me, fe, xe
      ];
      class ye extends Lt{
        constructor(t, e=t){
          super(L("path", t), e)
        }
        array(){
          return this._array||(this._array=new ce(this.attr("d")))
        }
        clear(){
          return delete this._array, this
        }
        height(t){
          return null==t?this.bbox().height:this.size(this.bbox().width, t)
        }
        move(t, e){
          return this.attr("d", this.array().move(t, e))
        }
        plot(t){
          return null==t?this.array():this.clear().attr("d", "string"==typeof t?t:this._array=new ce(t))
        }
        size(t, e){
          const i=m(this, t, e);
          return this.attr("d", this.array().size(i.width, i.height))
        }
        width(t){
          return null==t?this.bbox().width:this.size(t, this.bbox().height)
        }
        x(t){
          return null==t?this.bbox().x:this.move(t, this.bbox().y)
        }
        y(t){
          return null==t?this.bbox().y:this.move(this.bbox().x, t)
        }
      }
      ye.prototype.MorphArray=ce, o({
        Container:{
          path:I((function(t){
            return this.put(new ye).plot(t||new ce)
          }))
        }
      }), A(ye, "Path");
      var Me={
        __proto__:null, array:function(){
          return this._array||(this._array=new Xt(this.attr("points")))
        }, clear:function(){
          return delete this._array, this
        }, move:function(t, e){
          return this.attr("points", this.array().move(t, e))
        }, plot:function(t){
          return null==t?this.array():this.clear().attr("points", "string"==typeof t?t:this._array=new Xt(t))
        }, size:function(t, e){
          const i=m(this, t, e);
          return this.attr("points", this.array().size(i.width, i.height))
        }
      };
      class we extends Lt{
        constructor(t, e=t){
          super(L("polygon", t), e)
        }
      }
      o({
        Container:{
          polygon:I((function(t){
            return this.put(new we).plot(t||new Xt)
          }))
        }
      }), O(we, Vt), O(we, Me), A(we, "Polygon");
      class _e extends Lt{
        constructor(t, e=t){
          super(L("polyline", t), e)
        }
      }
      o({
        Container:{
          polyline:I((function(t){
            return this.put(new _e).plot(t||new Xt)
          }))
        }
      }), O(_e, Vt), O(_e, Me), A(_e, "Polyline");
      class Ne extends Lt{
        constructor(t, e=t){
          super(L("rect", t), e)
        }
      }
      O(Ne, {
        rx:Tt, ry:Dt
      }), o({
        Container:{
          rect:I((function(t, e){
            return this.put(new Ne).size(t, e)
          }))
        }
      }), A(Ne, "Rect");
      class Ee{
        constructor(){
          this._first=null, this._last=null
        }
        first(){
          return this._first&&this._first.value
        }
        last(){
          return this._last&&this._last.value
        }
        push(t){
          const e=void 0!==t.next?t:{
            value:t, next:null, prev:null
          };
          return this._last?(e.prev=this._last, this._last.next=e, this._last=e):(this._last=e, this._first=e), e
        }
        remove(t){
          t.prev&&(t.prev.next=t.next), t.next&&(t.next.prev=t.prev), t===this._last&&(this._last=t.prev), t===this._first&&(this._first=t.next), t.prev=null, t.next=null
        }
        shift(){
          const t=this._first;
          return t?(this._first=t.next, this._first&&(this._first.prev=null), this._last=this._first?this._last:null, t.value):null
        }
      }
      const Ce={
        nextDraw:null, frames:new Ee, timeouts:new Ee, immediates:new Ee, timer:()=>w.window.performance||w.window.Date, transforms:[
        ], frame(t){
          const e=Ce.frames.push({
            run:t
          });
          return null===Ce.nextDraw&&(Ce.nextDraw=w.window.requestAnimationFrame(Ce._draw)), e
        }, timeout(t, e){
          e=e||0;
          const i=Ce.timer().now()+e, n=Ce.timeouts.push({
            run:t, time:i
          });
          return null===Ce.nextDraw&&(Ce.nextDraw=w.window.requestAnimationFrame(Ce._draw)), n
        }, immediate(t){
          const e=Ce.immediates.push(t);
          return null===Ce.nextDraw&&(Ce.nextDraw=w.window.requestAnimationFrame(Ce._draw)), e
        }, cancelFrame(t){
          null!=t&&Ce.frames.remove(t)
        }, clearTimeout(t){
          null!=t&&Ce.timeouts.remove(t)
        }, cancelImmediate(t){
          null!=t&&Ce.immediates.remove(t)
        }, _draw(t){
          let e=null;
          const i=Ce.timeouts.last();
          for(;
          (e=Ce.timeouts.shift())&&(t>=e.time?e.run():Ce.timeouts.push(e), e!==i);
          );
          let n=null;
          const s=Ce.frames.last();
          for(;
          n!==s&&(n=Ce.frames.shift());
          )n.run(t);
          let o=null;
          for(;
          o=Ce.immediates.shift();
          )o();
          Ce.nextDraw=Ce.timeouts.first()||Ce.frames.first()?w.window.requestAnimationFrame(Ce._draw):null
        }
      }, be=function(t){
        const e=t.start, i=t.runner.duration();
        return{
          start:e, duration:i, end:e+i, runner:t.runner
        }
      }, Le=function(){
        const t=w.window;
        return(t.performance||t.Date).now()
      };
      class Te extends ft{
        constructor(t=Le){
          super(), this._timeSource=t, this._startTime=0, this._speed=1, this._persist=0, this._nextFrame=null, this._paused=!0, this._runners=[
          ], this._runnerIds=[
          ], this._lastRunnerId=-1, this._time=0, this._lastSourceTime=0, this._lastStepTime=0, this._step=this._stepFn.bind(this, !1), this._stepImmediate=this._stepFn.bind(this, !0)
        }
        active(){
          return!!this._nextFrame
        }
        finish(){
          return this.time(this.getEndTimeOfTimeline()+1), this.pause()
        }
        getEndTime(){
          const t=this.getLastRunnerInfo(), e=t?t.runner.duration():0;
          return(t?t.start:this._time)+e
        }
        getEndTimeOfTimeline(){
          const t=this._runners.map((t=>t.start+t.runner.duration()));
          return Math.max(0, ...t)
        }
        getLastRunnerInfo(){
          return this.getRunnerInfoById(this._lastRunnerId)
        }
        getRunnerInfoById(t){
          return this._runners[
            this._runnerIds.indexOf(t)
          ]
          ||null
        }
        pause(){
          return this._paused=!0, this._continue()
        }
        persist(t){
          return null==t?this._persist:(this._persist=t, this)
        }
        play(){
          return this._paused=!1, this.updateTime()._continue()
        }
        reverse(t){
          const e=this.speed();
          if(null==t)return this.speed(-e);
          const i=Math.abs(e);
          return this.speed(t?-i:i)
        }
        schedule(t, e, i){
          if(null==t)return this._runners.map(be);
          let n=0;
          const s=this.getEndTime();
          if(e=e||0, null==i||"last"===i||"after"===i)n=s;
          else if("absolute"===i||"start"===i)n=e, e=0;
          else if("now"===i)n=this._time;
          else if("relative"===i){
            const i=this.getRunnerInfoById(t.id);
            i&&(n=i.start+e, e=0)
          }
          else{
            if("with-last"!==i)throw new Error('Invalid value for the "when" parameter');
            {
              const t=this.getLastRunnerInfo();
              n=t?t.start:this._time
            }
          }
          t.unschedule(), t.timeline(this);
          const o=t.persist(), r={
            persist:null===o?this._persist:o, start:n+e, runner:t
          };
          return this._lastRunnerId=t.id, this._runners.push(r), this._runners.sort(((t, e)=>t.start-e.start)), this._runnerIds=this._runners.map((t=>t.runner.id)), this.updateTime()._continue(), this
        }
        seek(t){
          return this.time(this._time+t)
        }
        source(t){
          return null==t?this._timeSource:(this._timeSource=t, this)
        }
        speed(t){
          return null==t?this._speed:(this._speed=t, this)
        }
        stop(){
          return this.time(0), this.pause()
        }
        time(t){
          return null==t?this._time:(this._time=t, this._continue(!0))
        }
        unschedule(t){
          const e=this._runnerIds.indexOf(t.id);
          return e<0||(this._runners.splice(e, 1), this._runnerIds.splice(e, 1), t.timeline(null)), this
        }
        updateTime(){
          return this.active()||(this._lastSourceTime=this._timeSource()), this
        }
        _continue(t=!1){
          return Ce.cancelFrame(this._nextFrame), this._nextFrame=null, t?this._stepImmediate():(this._paused||(this._nextFrame=Ce.frame(this._step)), this)
        }
        _stepFn(t=!1){
          const e=this._timeSource();
          let i=e-this._lastSourceTime;
          t&&(i=0);
          const n=this._speed*i+(this._time-this._lastStepTime);
          this._lastSourceTime=e, t||(this._time+=n, this._time=this._time<0?0:this._time), this._lastStepTime=this._time, this.fire("time", this._time);
          for(let t=this._runners.length;
          t--;
          ){
            const e=this._runners[
              t
            ], i=e.runner;
            this._time-e.start<=0&&i.reset()
          }
          let s=!1;
          for(let t=0, e=this._runners.length;
          t<e;
          t++){
            const i=this._runners[
              t
            ], o=i.runner;
            let r=n;
            const a=this._time-i.start;
            if(a<=0){
              s=!0;
              continue
            }
            if(a<r&&(r=a), !o.active())continue;
            if(o.step(r).done){
              if(!0!==i.persist){
                o.duration()-o.time()+this._time+i.persist<this._time&&(o.unschedule(), --t, --e)
              }
            }
            else s=!0
          }
          return s&&!(this._speed<0&&0===this._time)||this._runnerIds.length&&this._speed<0&&this._time>0?this._continue():(this.pause(), this.fire("finished")), this
        }
      }
      o({
        Element:{
          timeline:function(t){
            return null==t?(this._timeline=this._timeline||new Te, this._timeline):(this._timeline=t, this)
          }
        }
      });
      class De extends ft{
        constructor(t){
          super(), this.id=De.id++, t="function"==typeof(t=null==t?xt.duration:t)?new te(t):t, this._element=null, this._timeline=null, this.done=!1, this._queue=[
          ], this._duration="number"==typeof t&&t, this._isDeclarative=t instanceof te, this._stepper=this._isDeclarative?t:new Jt, this._history={
          }, this.enabled=!0, this._time=0, this._lastTime=0, this._reseted=!0, this.transforms=new et, this.transformId=1, this._haveReversed=!1, this._reverse=!1, this._loopsDone=0, this._swing=!1, this._wait=0, this._times=1, this._frameId=null, this._persist=!!this._isDeclarative||null
        }
        static sanitise(t, e, i){
          let n=1, s=!1, o=0;
          return e=e||xt.delay, i=i||"last", "object"!=typeof(t=t||xt.duration)||t instanceof Qt||(e=t.delay||e, i=t.when||i, s=t.swing||s, n=t.times||n, o=t.wait||o, t=t.duration||xt.duration), {
            duration:t, delay:e, swing:s, times:n, wait:o, when:i
          }
        }
        active(t){
          return null==t?this.enabled:(this.enabled=t, this)
        }
        addTransform(t, e){
          return this.transforms.lmultiplyO(t), this
        }
        after(t){
          return this.on("finished", t)
        }
        animate(t, e, i){
          const n=De.sanitise(t, e, i), s=new De(n.duration);
          return this._timeline&&s.timeline(this._timeline), this._element&&s.element(this._element), s.loop(n).schedule(n.delay, n.when)
        }
        clearTransform(){
          return this.transforms=new et, this
        }
        clearTransformsFromQueue(){
          this.done&&this._timeline&&this._timeline._runnerIds.includes(this.id)||(this._queue=this._queue.filter((t=>!t.isTransform)))
        }
        delay(t){
          return this.animate(0, t)
        }
        duration(){
          return this._times*(this._wait+this._duration)-this._wait
        }
        during(t){
          return this.queue(null, t)
        }
        ease(t){
          return this._stepper=new Jt(t), this
        }
        element(t){
          return null==t?this._element:(this._element=t, t._prepareRunner(), this)
        }
        finish(){
          return this.step(1/0)
        }
        loop(t, e, i){
          return"object"==typeof t&&(e=t.swing, i=t.wait, t=t.times), this._times=t||1/0, this._swing=e||!1, this._wait=i||0, !0===this._times&&(this._times=1/0), this
        }
        loops(t){
          const e=this._duration+this._wait;
          if(null==t){
            const t=Math.floor(this._time/e), i=(this._time-t*e)/this._duration;
            return Math.min(t+i, this._times)
          }
          const i=t%1, n=e*Math.floor(t)+this._duration*i;
          return this.time(n)
        }
        persist(t){
          return null==t?this._persist:(this._persist=t, this)
        }
        position(t){
          const e=this._time, i=this._duration, n=this._wait, s=this._times, o=this._swing, r=this._reverse;
          let a;
          if(null==t){
            const t=function(t){
              const e=o*Math.floor(t%(2*(n+i))/(n+i)), s=e&&!r||!e&&r, a=Math.pow(-1, s)*(t%(n+i))/i+s;
              return Math.max(Math.min(a, 1), 0)
            }, h=s*(n+i)-n;
            return a=e<=0?Math.round(t(1e-5)):e<h?t(e):Math.round(t(h-1e-5)), a
          }
          const h=Math.floor(this.loops()), d=o&&h%2==0;
          return a=h+(d&&!r||r&&d?t:1-t), this.loops(a)
        }
        progress(t){
          return null==t?Math.min(1, this._time/this.duration()):this.time(t*this.duration())
        }
        queue(t, e, i, n){
          this._queue.push({
            initialiser:t||gt, runner:e||gt, retarget:i, isTransform:n, initialised:!1, finished:!1
          });
          return this.timeline()&&this.timeline()._continue(), this
        }
        reset(){
          return this._reseted||(this.time(0), this._reseted=!0), this
        }
        reverse(t){
          return this._reverse=null==t?!this._reverse:t, this
        }
        schedule(t, e, i){
          if(t instanceof Te||(i=e, e=t, t=this.timeline()), !t)throw Error("Runner cannot be scheduled without timeline");
          return t.schedule(this, e, i), this
        }
        step(t){
          if(!this.enabled)return this;
          t=null==t?16:t, this._time+=t;
          const e=this.position(), i=this._lastPosition!==e&&this._time>=0;
          this._lastPosition=e;
          const n=this.duration(), s=this._lastTime<=0&&this._time>0, o=this._lastTime<n&&this._time>=n;
          this._lastTime=this._time, s&&this.fire("start", this);
          const r=this._isDeclarative;
          this.done=!r&&!o&&this._time>=n, this._reseted=!1;
          let a=!1;
          return(i||r)&&(this._initialise(i), this.transforms=new et, a=this._run(r?t:e), this.fire("step", this)), this.done=this.done||a&&r, o&&this.fire("finished", this), this
        }
        time(t){
          if(null==t)return this._time;
          const e=t-this._time;
          return this.step(e), this
        }
        timeline(t){
          return void 0===t?this._timeline:(this._timeline=t, this)
        }
        unschedule(){
          const t=this.timeline();
          return t&&t.unschedule(this), this
        }
        _initialise(t){
          if(t||this._isDeclarative)for(let e=0, i=this._queue.length;
          e<i;
          ++e){
            const i=this._queue[
              e
            ], n=this._isDeclarative||!i.initialised&&t;
            t=!i.finished, n&&t&&(i.initialiser.call(this), i.initialised=!0)
          }
        }
        _rememberMorpher(t, e){
          if(this._history[
            t
          ]
          ={
            morpher:e, caller:this._queue[
              this._queue.length-1
            ]
          }, this._isDeclarative){
            const t=this.timeline();
            t&&t.play()
          }
        }
        _run(t){
          let e=!0;
          for(let i=0, n=this._queue.length;
          i<n;
          ++i){
            const n=this._queue[
              i
            ], s=n.runner.call(this, t);
            n.finished=n.finished||!0===s, e=e&&n.finished
          }
          return e
        }
        _tryRetarget(t, e, i){
          if(this._history[
            t
          ]){
            if(!this._history[
              t
            ].caller.initialised){
              const e=this._queue.indexOf(this._history[
                t
              ].caller);
              return this._queue.splice(e, 1), !1
            }
            this._history[
              t
            ].caller.retarget?this._history[
              t
            ].caller.retarget.call(this, e, i):this._history[
              t
            ].morpher.to(e), this._history[
              t
            ].caller.finished=!1;
            const n=this.timeline();
            return n&&n.play(), !0
          }
          return!1
        }
      }
      De.id=0;
      class Ae{
        constructor(t=new et, e=-1, i=!0){
          this.transforms=t, this.id=e, this.done=i
        }
        clearTransformsFromQueue(){
        }
      }
      O([
        De, Ae
      ], {
        mergeWith(t){
          return new Ae(t.transforms.lmultiply(this.transforms), t.id)
        }
      });
      const Se=(t, e)=>t.lmultiplyO(e), ze=t=>t.transforms;
      function Re(){
        const t=this._transformationRunners.runners.map(ze).reduce(Se, new et);
        this.transform(t), this._transformationRunners.merge(), 1===this._transformationRunners.length()&&(this._frameId=null)
      }
      class Oe{
        constructor(){
          this.runners=[
          ], this.ids=[
          ]
        }
        add(t){
          if(this.runners.includes(t))return;
          const e=t.id+1;
          return this.runners.push(t), this.ids.push(e), this
        }
        clearBefore(t){
          const e=this.ids.indexOf(t+1)||1;
          return this.ids.splice(0, e, 0), this.runners.splice(0, e, new Ae).forEach((t=>t.clearTransformsFromQueue())), this
        }
        edit(t, e){
          const i=this.ids.indexOf(t+1);
          return this.ids.splice(i, 1, t+1), this.runners.splice(i, 1, e), this
        }
        getByID(t){
          return this.runners[
            this.ids.indexOf(t+1)
          ]
        }
        length(){
          return this.ids.length
        }
        merge(){
          let t=null;
          for(let e=0;
          e<this.runners.length;
          ++e){
            const i=this.runners[
              e
            ];
            if(t&&i.done&&t.done&&(!i._timeline||!i._timeline._runnerIds.includes(i.id))&&(!t._timeline||!t._timeline._runnerIds.includes(t.id))){
              this.remove(i.id);
              const n=i.mergeWith(t);
              this.edit(t.id, n), t=n, --e
            }
            else t=i
          }
          return this
        }
        remove(t){
          const e=this.ids.indexOf(t+1);
          return this.ids.splice(e, 1), this.runners.splice(e, 1), this
        }
      }
      o({
        Element:{
          animate(t, e, i){
            const n=De.sanitise(t, e, i), s=this.timeline();
            return new De(n.duration).loop(n).element(this).timeline(s.play()).schedule(n.delay, n.when)
          }, delay(t, e){
            return this.animate(0, t, e)
          }, _clearTransformRunnersBefore(t){
            this._transformationRunners.clearBefore(t.id)
          }, _currentTransform(t){
            return this._transformationRunners.runners.filter((e=>e.id<=t.id)).map(ze).reduce(Se, new et)
          }, _addRunner(t){
            this._transformationRunners.add(t), Ce.cancelImmediate(this._frameId), this._frameId=Ce.immediate(Re.bind(this))
          }, _prepareRunner(){
            null==this._frameId&&(this._transformationRunners=(new Oe).add(new Ae(new et(this))))
          }
        }
      });
      O(De, {
        attr(t, e){
          return this.styleAttr("attr", t, e)
        }, css(t, e){
          return this.styleAttr("css", t, e)
        }, styleAttr(t, e, i){
          if("string"==typeof e)return this.styleAttr(t, {
            [
              e
            ]
            :i
          });
          let n=e;
          if(this._tryRetarget(t, n))return this;
          let s=new pe(this._stepper).to(n), o=Object.keys(n);
          return this.queue((function(){
            s=s.from(this.element()[
              t
            ]
            (o))
          }), (function(e){
            return this.element()[
              t
            ]
            (s.at(e).valueOf()), s.done()
          }), (function(e){
            const i=Object.keys(e), r=(a=o, i.filter((t=>!a.includes(t))));
            var a;
            if(r.length){
              const e=this.element()[
                t
              ]
              (r), i=new xe(s.from()).valueOf();
              Object.assign(i, e), s.from(i)
            }
            const h=new xe(s.to()).valueOf();
            Object.assign(h, e), s.to(h), o=i, n=e
          })), this._rememberMorpher(t, s), this
        }, zoom(t, e){
          if(this._tryRetarget("zoom", t, e))return this;
          let i=new pe(this._stepper).to(new Mt(t));
          return this.queue((function(){
            i=i.from(this.element().zoom())
          }), (function(t){
            return this.element().zoom(i.at(t), e), i.done()
          }), (function(t, n){
            e=n, i.to(t)
          })), this._rememberMorpher("zoom", i), this
        }, transform(t, e, i){
          if(e=t.relative||e, this._isDeclarative&&!e&&this._tryRetarget("transform", t))return this;
          const n=et.isMatrixLike(t);
          i=null!=t.affine?t.affine:null!=i?i:!n;
          const s=new pe(this._stepper).type(i?fe:et);
          let o, r, a, h, d;
          return this.queue((function(){
            r=r||this.element(), o=o||f(t, r), d=new et(e?void 0:r), r._addRunner(this), e||r._clearTransformRunnersBefore(this)
          }), (function(l){
            e||this.clearTransform();
            const{
              x:c, y:u
            }
            =new J(o).transform(r._currentTransform(this));
            let p=new et({
              ...t, origin:[
                c, u
              ]
            }), m=this._isDeclarative&&a?a:d;
            if(i){
              p=p.decompose(c, u), m=m.decompose(c, u);
              const t=p.rotate, e=m.rotate, i=[
                t-360, t, t+360
              ], n=i.map((t=>Math.abs(t-e))), s=Math.min(...n), o=n.indexOf(s);
              p.rotate=i[
                o
              ]
            }
            e&&(n||(p.rotate=t.rotate||0), this._isDeclarative&&h&&(m.rotate=h)), s.from(m), s.to(p);
            const f=s.at(l);
            return h=f.rotate, a=new et(f), this.addTransform(a), r._addRunner(this), s.done()
          }), (function(e){
            (e.origin||"center").toString()!==(t.origin||"center").toString()&&(o=f(e, r)), t={
              ...e, origin:o
            }
          }), !0), this._isDeclarative&&this._rememberMorpher("transform", s), this
        }, x(t, e){
          return this._queueNumber("x", t)
        }, y(t){
          return this._queueNumber("y", t)
        }, dx(t=0){
          return this._queueNumberDelta("x", t)
        }, dy(t=0){
          return this._queueNumberDelta("y", t)
        }, dmove(t, e){
          return this.dx(t).dy(e)
        }, _queueNumberDelta(t, e){
          if(e=new Mt(e), this._tryRetarget(t, e))return this;
          const i=new pe(this._stepper).to(e);
          let n=null;
          return this.queue((function(){
            n=this.element()[
              t
            ]
            (), i.from(n), i.to(n+e)
          }), (function(e){
            return this.element()[
              t
            ]
            (i.at(e)), i.done()
          }), (function(t){
            i.to(n+new Mt(t))
          })), this._rememberMorpher(t, i), this
        }, _queueObject(t, e){
          if(this._tryRetarget(t, e))return this;
          const i=new pe(this._stepper).to(e);
          return this.queue((function(){
            i.from(this.element()[
              t
            ]
            ())
          }), (function(e){
            return this.element()[
              t
            ]
            (i.at(e)), i.done()
          })), this._rememberMorpher(t, i), this
        }, _queueNumber(t, e){
          return this._queueObject(t, new Mt(e))
        }, cx(t){
          return this._queueNumber("cx", t)
        }, cy(t){
          return this._queueNumber("cy", t)
        }, move(t, e){
          return this.x(t).y(e)
        }, center(t, e){
          return this.cx(t).cy(e)
        }, size(t, e){
          let i;
          return t&&e||(i=this._element.bbox()), t||(t=i.width/i.height*e), e||(e=i.height/i.width*t), this.width(t).height(e)
        }, width(t){
          return this._queueNumber("width", t)
        }, height(t){
          return this._queueNumber("height", t)
        }, plot(t, e, i, n){
          if(4===arguments.length)return this.plot([
            t, e, i, n
          ]);
          if(this._tryRetarget("plot", t))return this;
          const s=new pe(this._stepper).type(this._element.MorphArray).to(t);
          return this.queue((function(){
            s.from(this._element.array())
          }), (function(t){
            return this._element.plot(s.at(t)), s.done()
          })), this._rememberMorpher("plot", s), this
        }, leading(t){
          return this._queueNumber("leading", t)
        }, viewbox(t, e, i, n){
          return this._queueObject("viewbox", new st(t, e, i, n))
        }, update(t){
          return"object"!=typeof t?this.update({
            offset:arguments[
              0
            ], color:arguments[
              1
            ], opacity:arguments[
              2
            ]
          }):(null!=t.opacity&&this.attr("stop-opacity", t.opacity), null!=t.color&&this.attr("stop-color", t.color), null!=t.offset&&this.attr("offset", t.offset), this)
        }
      }), O(De, {
        rx:Tt, ry:Dt, from:Ht, to:Gt
      }), A(De, "Runner");
      class Ie extends Ct{
        constructor(t, e=t){
          super(L("svg", t), e), this.namespace()
        }
        defs(){
          return this.isRoot()?T(this.node.querySelector("defs"))||this.put(new bt):this.root().defs()
        }
        isRoot(){
          return!this.node.parentNode||!(this.node.parentNode instanceof w.window.SVGElement)&&"#document-fragment"!==this.node.parentNode.nodeName
        }
        namespace(){
          return this.isRoot()?this.attr({
            xmlns:g, version:"1.1"
          }).attr("xmlns:xlink", y, v).attr("xmlns:svgjs", M, v):this.root().namespace()
        }
        removeNamespace(){
          return this.attr({
            xmlns:null, version:null
          }).attr("xmlns:xlink", null, v).attr("xmlns:svgjs", null, v)
        }
        root(){
          return this.isRoot()?this:super.root()
        }
      }
      o({
        Container:{
          nested:I((function(){
            return this.put(new Ie)
          }))
        }
      }), A(Ie, "Svg", !0);
      class Fe extends Ct{
        constructor(t, e=t){
          super(L("symbol", t), e)
        }
      }
      o({
        Container:{
          symbol:I((function(){
            return this.put(new Fe)
          }))
        }
      }), A(Fe, "Symbol");
      var ke={
        __proto__:null, plain:function(t){
          return!1===this._build&&this.clear(), this.node.appendChild(w.document.createTextNode(t)), this
        }, length:function(){
          return this.node.getComputedTextLength()
        }, x:function(t, e=this.bbox()){
          return null==t?e.x:this.attr("x", this.attr("x")+t-e.x)
        }, y:function(t, e=this.bbox()){
          return null==t?e.y:this.attr("y", this.attr("y")+t-e.y)
        }, move:function(t, e, i=this.bbox()){
          return this.x(t, i).y(e, i)
        }, cx:function(t, e=this.bbox()){
          return null==t?e.cx:this.attr("x", this.attr("x")+t-e.cx)
        }, cy:function(t, e=this.bbox()){
          return null==t?e.cy:this.attr("y", this.attr("y")+t-e.cy)
        }, center:function(t, e, i=this.bbox()){
          return this.cx(t, i).cy(e, i)
        }, ax:function(t){
          return this.attr("x", t)
        }, ay:function(t){
          return this.attr("y", t)
        }, amove:function(t, e){
          return this.ax(t).ay(e)
        }, build:function(t){
          return this._build=!!t, this
        }
      };
      class Be extends Lt{
        constructor(t, e=t){
          super(L("text", t), e), this.dom.leading=new Mt(1.3), this._rebuild=!0, this._build=!1
        }
        leading(t){
          return null==t?this.dom.leading:(this.dom.leading=new Mt(t), this.rebuild())
        }
        rebuild(t){
          if("boolean"==typeof t&&(this._rebuild=t), this._rebuild){
            const t=this;
            let e=0;
            const i=this.dom.leading;
            this.each((function(n){
              const s=w.window.getComputedStyle(this.node).getPropertyValue("font-size"), o=i*new Mt(s);
              this.dom.newLined&&(this.attr("x", t.attr("x")), "\n"===this.text()?e+=o:(this.attr("dy", n?o+e:0), e=0))
            })), this.fire("rebuild")
          }
          return this
        }
        setData(t){
          return this.dom=t, this.dom.leading=new Mt(t.leading||1.3), this
        }
        text(t){
          if(void 0===t){
            const e=this.node.childNodes;
            let i=0;
            t="";
            for(let n=0, s=e.length;
            n<s;
            ++n)"textPath"!==e[
              n
            ].nodeName?(n!==i&&3!==e[
              n
            ].nodeType&&!0===T(e[
              n
            ]).dom.newLined&&(t+="\n"), t+=e[
              n
            ].textContent):0===n&&(i=1);
            return t
          }
          if(this.clear().build(!0), "function"==typeof t)t.call(this, this);
          else for(let e=0, i=(t=(t+"").split("\n")).length;
          e<i;
          e++)this.newLine(t[
            e
          ]);
          return this.build(!1).rebuild()
        }
      }
      O(Be, ke), o({
        Container:{
          text:I((function(t=""){
            return this.put(new Be).text(t)
          })), plain:I((function(t=""){
            return this.put(new Be).plain(t)
          }))
        }
      }), A(Be, "Text");
      class He extends Lt{
        constructor(t, e=t){
          super(L("tspan", t), e), this._build=!1
        }
        dx(t){
          return this.attr("dx", t)
        }
        dy(t){
          return this.attr("dy", t)
        }
        newLine(){
          this.dom.newLined=!0;
          const t=this.parent();
          if(!(t instanceof Be))return this;
          const e=t.index(this), i=w.window.getComputedStyle(this.node).getPropertyValue("font-size"), n=t.dom.leading*new Mt(i);
          return this.dy(e?n:0).attr("x", t.x())
        }
        text(t){
          return null==t?this.node.textContent+(this.dom.newLined?"\n":""):("function"==typeof t?(this.clear().build(!0), t.call(this, this), this.build(!1)):this.plain(t), this)
        }
      }
      O(He, ke), o({
        Tspan:{
          tspan:I((function(t=""){
            const e=new He;
            return this._build||this.clear(), this.put(e).text(t)
          }))
        }, Text:{
          newLine:function(t=""){
            return this.tspan(t).newLine()
          }
        }
      }), A(He, "Tspan");
      class Ge extends Lt{
        constructor(t, e=t){
          super(L("circle", t), e)
        }
        radius(t){
          return this.attr("r", t)
        }
        rx(t){
          return this.attr("r", t)
        }
        ry(t){
          return this.rx(t)
        }
        size(t){
          return this.radius(new Mt(t).divide(2))
        }
      }
      O(Ge, {
        x:At, y:St, cx:zt, cy:Rt, width:Ot, height:It
      }), o({
        Container:{
          circle:I((function(t=0){
            return this.put(new Ge).size(t).move(0, 0)
          }))
        }
      }), A(Ge, "Circle");
      class Pe extends Ct{
        constructor(t, e=t){
          super(L("clipPath", t), e)
        }
        remove(){
          return this.targets().forEach((function(t){
            t.unclip()
          })), super.remove()
        }
        targets(){
          return ht("svg [clip-path*="+this.id()+"]")
        }
      }
      o({
        Container:{
          clip:I((function(){
            return this.defs().put(new Pe)
          }))
        }, Element:{
          clipper(){
            return this.reference("clip-path")
          }, clipWith(t){
            const e=t instanceof Pe?t:this.parent().clip().add(t);
            return this.attr("clip-path", "url(#"+e.id()+")")
          }, unclip(){
            return this.attr("clip-path", null)
          }
        }
      }), A(Pe, "ClipPath");
      class Ye extends Nt{
        constructor(t, e=t){
          super(L("foreignObject", t), e)
        }
      }
      o({
        Container:{
          foreignObject:I((function(t, e){
            return this.put(new Ye).size(t, e)
          }))
        }
      }), A(Ye, "ForeignObject");
      var We={
        __proto__:null, dmove:function(t, e){
          return this.children().forEach(((i, n)=>{
            let s;
            try{
              s=i.bbox()
            }
            catch(t){
              return
            }
            const o=new et(i), r=o.translate(t, e).transform(o.inverse()), a=new J(s.x, s.y).transform(r);
            i.move(a.x, a.y)
          })), this
        }, dx:function(t){
          return this.dmove(t, 0)
        }, dy:function(t){
          return this.dmove(0, t)
        }, height:function(t, e=this.bbox()){
          return null==t?e.height:this.size(e.width, t, e)
        }, move:function(t=0, e=0, i=this.bbox()){
          const n=t-i.x, s=e-i.y;
          return this.dmove(n, s)
        }, size:function(t, e, i=this.bbox()){
          const n=m(this, t, e, i), s=n.width/i.width, o=n.height/i.height;
          return this.children().forEach(((t, e)=>{
            const n=new J(i).transform(new et(t).inverse());
            t.scale(s, o, n.x, n.y)
          })), this
        }, width:function(t, e=this.bbox()){
          return null==t?e.width:this.size(t, e.height, e)
        }, x:function(t, e=this.bbox()){
          return null==t?e.x:this.move(t, e.y, e)
        }, y:function(t, e=this.bbox()){
          return null==t?e.y:this.move(e.x, t, e)
        }
      };
      class Ue extends Ct{
        constructor(t, e=t){
          super(L("g", t), e)
        }
      }
      O(Ue, We), o({
        Container:{
          group:I((function(){
            return this.put(new Ue)
          }))
        }
      }), A(Ue, "G");
      class $e extends Ct{
        constructor(t, e=t){
          super(L("a", t), e)
        }
        target(t){
          return this.attr("target", t)
        }
        to(t){
          return this.attr("href", t, y)
        }
      }
      O($e, We), o({
        Container:{
          link:I((function(t){
            return this.put(new $e).to(t)
          }))
        }, Element:{
          unlink(){
            const t=this.linker();
            if(!t)return this;
            const e=t.parent();
            if(!e)return this.remove();
            const i=e.index(t);
            return e.add(this, i), t.remove(), this
          }, linkTo(t){
            let e=this.linker();
            return e||(e=new $e, this.wrap(e)), "function"==typeof t?t.call(e, e):e.to(t), this
          }, linker(){
            const t=this.parent();
            return t&&"a"===t.node.nodeName.toLowerCase()?t:null
          }
        }
      }), A($e, "A");
      class Xe extends Ct{
        constructor(t, e=t){
          super(L("mask", t), e)
        }
        remove(){
          return this.targets().forEach((function(t){
            t.unmask()
          })), super.remove()
        }
        targets(){
          return ht("svg [mask*="+this.id()+"]")
        }
      }
      o({
        Container:{
          mask:I((function(){
            return this.defs().put(new Xe)
          }))
        }, Element:{
          masker(){
            return this.reference("mask")
          }, maskWith(t){
            const e=t instanceof Xe?t:this.parent().mask().add(t);
            return this.attr("mask", "url(#"+e.id()+")")
          }, unmask(){
            return this.attr("mask", null)
          }
        }
      }), A(Xe, "Mask");
      class Ve extends Nt{
        constructor(t, e=t){
          super(L("stop", t), e)
        }
        update(t){
          return("number"==typeof t||t instanceof Mt)&&(t={
            offset:arguments[
              0
            ], color:arguments[
              1
            ], opacity:arguments[
              2
            ]
          }), null!=t.opacity&&this.attr("stop-opacity", t.opacity), null!=t.color&&this.attr("stop-color", t.color), null!=t.offset&&this.attr("offset", new Mt(t.offset)), this
        }
      }
      o({
        Gradient:{
          stop:function(t, e, i){
            return this.put(new Ve).update(t, e, i)
          }
        }
      }), A(Ve, "Stop");
      class je extends Nt{
        constructor(t, e=t){
          super(L("style", t), e)
        }
        addText(t=""){
          return this.node.textContent+=t, this
        }
        font(t, e, i={
        }){
          return this.rule("@font-face", {
            fontFamily:t, src:e, ...i
          })
        }
        rule(t, e){
          return this.addText(function(t, e){
            if(!t)return"";
            if(!e)return t;
            let i=t+"{";
            for(const t in e)i+=u(t)+":"+e[
              t
            ]
            +";";
            return i+="}", i
          }
          (t, e))
        }
      }
      o("Dom", {
        style(t, e){
          return this.put(new je).rule(t, e)
        }, fontface(t, e, i){
          return this.put(new je).font(t, e, i)
        }
      }), A(je, "Style");
      class Ze extends Be{
        constructor(t, e=t){
          super(L("textPath", t), e)
        }
        array(){
          const t=this.track();
          return t?t.array():null
        }
        plot(t){
          const e=this.track();
          let i=null;
          return e&&(i=e.plot(t)), null==t?i:this
        }
        track(){
          return this.reference("href")
        }
      }
      o({
        Container:{
          textPath:I((function(t, e){
            return t instanceof Be||(t=this.text(t)), t.path(e)
          }))
        }, Text:{
          path:I((function(t, e=!0){
            const i=new Ze;
            let n;
            if(t instanceof ye||(t=this.defs().path(t)), i.attr("href", "#"+t, y), e)for(;
            n=this.node.firstChild;
            )i.node.appendChild(n);
            return this.put(i)
          })), textPath(){
            return this.findOne("textPath")
          }
        }, Path:{
          text:I((function(t){
            return t instanceof Be||(t=(new Be).addTo(this.parent()).text(t)), t.path(this)
          })), targets(){
            return ht("svg textPath").filter((t=>(t.attr("href")||"").includes(this.id())))
          }
        }
      }), Ze.prototype.MorphArray=ce, A(Ze, "TextPath");
      class Ke extends Lt{
        constructor(t, e=t){
          super(L("use", t), e)
        }
        use(t, e){
          return this.attr("href", (e||"")+"#"+t, y)
        }
      }
      o({
        Container:{
          use:I((function(t, e){
            return this.put(new Ke).use(t, e)
          }))
        }
      }), A(Ke, "Use");
      const qe=b;
      O([
        Ie, Fe, $t, Ut, Zt
      ], r("viewbox")), O([
        jt, _e, we, ye
      ], r("marker")), O(Be, r("Text")), O(ye, r("Path")), O(bt, r("Defs")), O([
        Be, He
      ], r("Tspan")), O([
        Ne, kt, Wt, De
      ], r("radius")), O(ft, r("EventTarget")), O(_t, r("Dom")), O(Nt, r("Element")), O(Lt, r("Shape")), O([
        Ct, Bt
      ], r("Container")), O(Wt, r("Gradient")), O(De, r("Runner")), rt.extend([
        ...new Set(s)
      ]), function(t=[
      ]){
        ve.push(...[
        ].concat(t))
      }
      ([
        Mt, Q, st, et, yt, Xt, ce, J
      ]), O(ve, {
        to(t){
          return(new pe).type(this.constructor).from(this.toArray()).to(t)
        }, fromArray(t){
          return this.init(t), this
        }, toConsumable(){
          return this.toArray()
        }, morph(t, e, i, n, s){
          return this.fromArray(t.map((function(t, o){
            return n.step(t, e[
              o
            ], i, s[
              o
            ], s)
          })))
        }
      })
    }, 139544:(t, e, i)=>{
      i.d(e, {
        A:()=>r
      });
      var n=i(595851), s=i(191509);
      class o{
        constructor({
          mindMap:t
        }){
          this.mindMap=t, this.rect=null, this.isMousedown=!1, this.mouseDownX=0, this.mouseDownY=0, this.mouseMoveX=0, this.mouseMoveY=0, this.isSelecting=!1, this.cacheActiveList=[
          ], this.autoMove=new s.A(t), this.bindEvent()
        }
        bindEvent(){
          this.onMousedown=this.onMousedown.bind(this), this.onMousemove=this.onMousemove.bind(this), this.onMouseup=this.onMouseup.bind(this), this.checkInNodes=(0, n.nF)(this.checkInNodes, 300, this), this.mindMap.on("mousedown", this.onMousedown), this.mindMap.on("mousemove", this.onMousemove), this.mindMap.on("mouseup", this.onMouseup), this.mindMap.on("node_mouseup", this.onMouseup)
        }
        unBindEvent(){
          this.mindMap.off("mousedown", this.onMousedown), this.mindMap.off("mousemove", this.onMousemove), this.mindMap.off("mouseup", this.onMouseup), this.mindMap.off("node_mouseup", this.onMouseup)
        }
        onMousedown(t){
          if(this.mindMap.opt.readonly)return;
          let{
            useLeftKeySelectionRightKeyDrag:e
          }
          =this.mindMap.opt;
          if(!t.ctrlKey&&!t.metaKey&&(e?1!==t.which:3!==t.which))return;
          t.preventDefault(), this.isMousedown=!0, this.cacheActiveList=[
            ...this.mindMap.renderer.activeNodeList
          ];
          let{
            x:i, y:n
          }
          =this.mindMap.toPos(t.clientX, t.clientY);
          this.mouseDownX=i, this.mouseDownY=n, this.createRect(i, n)
        }
        onMousemove(t){
          if(this.mindMap.opt.readonly)return;
          if(!this.isMousedown)return;
          let{
            x:e, y:i
          }
          =this.mindMap.toPos(t.clientX, t.clientY);
          this.mouseMoveX=e, this.mouseMoveY=i, Math.abs(e-this.mouseDownX)<=10&&Math.abs(i-this.mouseDownY)<=10||(this.autoMove.clearAutoMoveTimer(), this.autoMove.onMove(t.clientX, t.clientY, (()=>{
            this.isSelecting=!0, this.rect&&this.rect.plot([
              [
                this.mouseDownX, this.mouseDownY
              ], [
                this.mouseMoveX, this.mouseDownY
              ], [
                this.mouseMoveX, this.mouseMoveY
              ], [
                this.mouseDownX, this.mouseMoveY
              ]
            ]), this.checkInNodes()
          }), ((t, e)=>{
            switch(t){
              case"left":this.mouseDownX+=e;
              break;
              case"top":this.mouseDownY+=e;
              break;
              case"right":this.mouseDownX-=e;
              break;
              case"bottom":this.mouseDownY-=e
            }
          })))
        }
        onMouseup(){
          this.mindMap.opt.readonly||this.isMousedown&&(this.checkTriggerNodeActiveEvent(), this.autoMove.clearAutoMoveTimer(), this.isMousedown=!1, this.cacheActiveList=[
          ], this.rect&&this.rect.remove(), this.rect=null, setTimeout((()=>{
            this.isSelecting=!1
          }), 0))
        }
        checkTriggerNodeActiveEvent(){
          let t=this.cacheActiveList.length!==this.mindMap.renderer.activeNodeList.length, e=!1;
          if(!t)for(let t=0;
          t<this.cacheActiveList.length;
          t++){
            let i=this.cacheActiveList[
              t
            ];
            if(!this.mindMap.renderer.activeNodeList.find((t=>t.getData("uid")===i.getData("uid")))){
              e=!0;
              break
            }
          }
          (t||e)&&this.mindMap.renderer.emitNodeActiveEvent()
        }
        createRect(t, e){
          this.rect&&this.rect.remove(), this.rect=this.mindMap.svg.polygon().stroke({
            color:"#0984e3"
          }).fill({
            color:"rgba(9,132,227,0.3)"
          }).plot([
            [
              t, e
            ]
          ])
        }
        checkInNodes(){
          let{
            scaleX:t, scaleY:e, translateX:i, translateY:s
          }
          =this.mindMap.draw.transform(), o=Math.min(this.mouseDownX, this.mouseMoveX), r=Math.min(this.mouseDownY, this.mouseMoveY), a=Math.max(this.mouseDownX, this.mouseMoveX), h=Math.max(this.mouseDownY, this.mouseMoveY);
          (0, n.De)(this.mindMap.renderer.root, (d=>{
            let{
              left:l, top:c, width:u, height:p
            }
            =d, m=(l+u)*t+i, f=(c+p)*e+s;
            if(l=l*t+i, c=c*e+s, (0, n.Er)(o, a, r, h, l, m, c, f)){
              if(d.getData("isActive"))return;
              this.mindMap.renderer.addNodeToActiveList(d), this.mindMap.renderer.emitNodeActiveEvent()
            }
            else if(d.getData("isActive")){
              if(!d.getData("isActive"))return;
              this.mindMap.renderer.removeNodeFromActiveList(d), this.mindMap.renderer.emitNodeActiveEvent()
            }
          }))
        }
        hasSelectRange(){
          return this.isSelecting
        }
        beforePluginRemove(){
          this.unBindEvent()
        }
        beforePluginDestroy(){
          this.unBindEvent()
        }
      }
      o.instanceName="select";
      const r=o
    }, 191509:(t, e, i)=>{
      i.d(e, {
        A:()=>n
      });
      const n=class{
        constructor(t){
          this.mindMap=t, this.autoMoveTimer=null
        }
        onMove(t, e, i=(()=>{
        }), n=(()=>{
        })){
          i();
          let s=this.mindMap.opt.selectTranslateStep, o=this.mindMap.opt.selectTranslateLimit, r=0;
          t<=this.mindMap.elRect.left+o&&(n("left", s), this.mindMap.view.translateX(s), r++), t>=this.mindMap.elRect.right-o&&(n("right", s), this.mindMap.view.translateX(-s), r++), e<=this.mindMap.elRect.top+o&&(n("top", s), this.mindMap.view.translateY(s), r++), e>=this.mindMap.elRect.bottom-o&&(n("bottom", s), this.mindMap.view.translateY(-s), r++), r>0&&this.startAutoMove(t, e, i, n)
        }
        startAutoMove(t, e, i, n){
          this.autoMoveTimer=setTimeout((()=>{
            this.onMove(t, e, i, n)
          }), 20)
        }
        clearAutoMoveTimer(){
          clearTimeout(this.autoMoveTimer)
        }
      }
    }, 388746:(t, e, i)=>{
      i.d(e, {
        A:()=>o, O:()=>r
      });
      var n=i(99425), s=i(753579);
      class o{
        constructor(t){
          this.node=t, this.mindMap=t.mindMap
        }
        getShapePadding(t, e, i, n){
          const o=this.node.getShape(), r=t+2*i, a=e+2*n, h=Math.abs(r-a);
          switch(o){
            case s.aH.SHAPE.ROUNDED_RECTANGLE:return{
              paddingX:e>t?(e-t)/2:0, paddingY:0
            };
            case s.aH.SHAPE.DIAMOND:return{
              paddingX:t/2, paddingY:e/2
            };
            case s.aH.SHAPE.PARALLELOGRAM:case s.aH.SHAPE.OUTER_TRIANGULAR_RECTANGLE:case s.aH.SHAPE.INNER_TRIANGULAR_RECTANGLE:return{
              paddingX:i<=0?15:0, paddingY:0
            };
            case s.aH.SHAPE.ELLIPSE:return{
              paddingX:i<=0?15:0, paddingY:n<=0?5:0
            };
            case s.aH.SHAPE.CIRCLE:return{
              paddingX:a>r?h/2:0, paddingY:a<r?h/2:0
            };
            default:return{
              paddingX:0, paddingY:0
            }
          }
        }
        createShape(){
          const t=this.node.getShape();
          let e=null;
          return t===s.aH.SHAPE.RECTANGLE?e=this.createRect():t===s.aH.SHAPE.DIAMOND?e=this.createDiamond():t===s.aH.SHAPE.PARALLELOGRAM?e=this.createParallelogram():t===s.aH.SHAPE.ROUNDED_RECTANGLE?e=this.createRoundedRectangle():t===s.aH.SHAPE.OCTAGONAL_RECTANGLE?e=this.createOctagonalRectangle():t===s.aH.SHAPE.OUTER_TRIANGULAR_RECTANGLE?e=this.createOuterTriangularRectangle():t===s.aH.SHAPE.INNER_TRIANGULAR_RECTANGLE?e=this.createInnerTriangularRectangle():t===s.aH.SHAPE.ELLIPSE?e=this.createEllipse():t===s.aH.SHAPE.CIRCLE&&(e=this.createCircle()), e
        }
        getNodeSize(){
          const t=this.node.getBorderWidth();
          let{
            width:e, height:i
          }
          =this.node;
          return e-=t, i-=t, {
            width:e, height:i
          }
        }
        createPath(t){
          const{
            customCreateNodePath:e
          }
          =this.mindMap.opt;
          return e?(0, n.t4)(e(t)):(new n.wA).plot(t)
        }
        createPolygon(t){
          const{
            customCreateNodePolygon:e
          }
          =this.mindMap.opt;
          return e?(0, n.t4)(e(t)):(new n.tS).plot(t)
        }
        createRect(){
          let{
            width:t, height:e
          }
          =this.getNodeSize(), i=this.node.style.merge("borderRadius");
          const n=`\n      M${i},0\n      L${t-i},0\n      C${t-i},0 ${t},0 ${t},${i}\n      L${t},${e-i}\n      C${t},${e-i} ${t},${e} ${t-i},${e}\n      L${i},${e}\n      C${i},${e} 0,${e} 0,${e-i}\n      L0,${i}\n      C0,${i} 0,0 ${i},0\n      Z\n    `;
          return this.createPath(n)
        }
        createDiamond(){
          let{
            width:t, height:e
          }
          =this.getNodeSize(), i=t/2, n=e/2;
          const s=[
            [
              i, 0
            ], [
              t, n
            ], [
              i, e
            ], [
              0, n
            ]
          ];
          return this.createPolygon(s)
        }
        createParallelogram(){
          let{
            paddingX:t
          }
          =this.node.getPaddingVale();
          t=t||this.node.shapePadding.paddingX;
          let{
            width:e, height:i
          }
          =this.getNodeSize();
          const n=[
            [
              t, 0
            ], [
              e, 0
            ], [
              e-t, i
            ], [
              0, i
            ]
          ];
          return this.createPolygon(n)
        }
        createRoundedRectangle(){
          let{
            width:t, height:e
          }
          =this.getNodeSize(), i=e/2;
          const n=`\n      M${i},0\n      L${t-i},0\n      A${e/2},${e/2} 0 0,1 ${t-i},${e} \n      L${i},${e}\n      A${e/2},${e/2} 0 0,1 ${i},0\n    `;
          return this.createPath(n)
        }
        createOctagonalRectangle(){
          let{
            width:t, height:e
          }
          =this.getNodeSize();
          const i=[
            [
              0, 5
            ], [
              5, 0
            ], [
              t-5, 0
            ], [
              t, 5
            ], [
              t, e-5
            ], [
              t-5, e
            ], [
              5, e
            ], [
              0, e-5
            ]
          ];
          return this.createPolygon(i)
        }
        createOuterTriangularRectangle(){
          let{
            paddingX:t
          }
          =this.node.getPaddingVale();
          t=t||this.node.shapePadding.paddingX;
          let{
            width:e, height:i
          }
          =this.getNodeSize();
          const n=[
            [
              t, 0
            ], [
              e-t, 0
            ], [
              e, i/2
            ], [
              e-t, i
            ], [
              t, i
            ], [
              0, i/2
            ]
          ];
          return this.createPolygon(n)
        }
        createInnerTriangularRectangle(){
          let{
            paddingX:t
          }
          =this.node.getPaddingVale();
          t=t||this.node.shapePadding.paddingX;
          let{
            width:e, height:i
          }
          =this.getNodeSize();
          const n=[
            [
              0, 0
            ], [
              e, 0
            ], [
              e-t/2, i/2
            ], [
              e, i
            ], [
              0, i
            ], [
              t/2, i/2
            ]
          ];
          return this.createPolygon(n)
        }
        createEllipse(){
          let{
            width:t, height:e
          }
          =this.getNodeSize(), i=t/2, n=e/2;
          const s=`\n      M${i},0\n      A${i},${n} 0 0,1 ${i},${e} \n      M${i},${e} \n      A${i},${n} 0 0,1 ${i},0 \n    `;
          return this.createPath(s)
        }
        createCircle(){
          let{
            width:t, height:e
          }
          =this.getNodeSize(), i=t/2, n=e/2;
          const s=`\n      M${i},0\n      A${i},${n} 0 0,1 ${i},${e} \n      M${i},${e} \n      A${i},${n} 0 0,1 ${i},0 \n    `;
          return this.createPath(s)
        }
      }
      const r=[
        s.aH.SHAPE.RECTANGLE, s.aH.SHAPE.DIAMOND, s.aH.SHAPE.PARALLELOGRAM, s.aH.SHAPE.ROUNDED_RECTANGLE, s.aH.SHAPE.OCTAGONAL_RECTANGLE, s.aH.SHAPE.OUTER_TRIANGULAR_RECTANGLE, s.aH.SHAPE.INNER_TRIANGULAR_RECTANGLE, s.aH.SHAPE.ELLIPSE, s.aH.SHAPE.CIRCLE
      ]
    }, 430228:t=>{
      var e=Object.prototype.hasOwnProperty, i="~";
      function n(){
      }
      function s(t, e, i){
        this.fn=t, this.context=e, this.once=i||!1
      }
      function o(t, e, n, o, r){
        if("function"!=typeof n)throw new TypeError("The listener must be a function");
        var a=new s(n, o||t, r), h=i?i+e:e;
        return t._events[
          h
        ]
        ?t._events[
          h
        ].fn?t._events[
          h
        ]
        =[
          t._events[
            h
          ], a
        ]
        :t._events[
          h
        ].push(a):(t._events[
          h
        ]
        =a, t._eventsCount++), t
      }
      function r(t, e){
        0==--t._eventsCount?t._events=new n:delete t._events[
          e
        ]
      }
      function a(){
        this._events=new n, this._eventsCount=0
      }
      Object.create&&(n.prototype=Object.create(null), (new n).__proto__||(i=!1)), a.prototype.eventNames=function(){
        var t, n, s=[
        ];
        if(0===this._eventsCount)return s;
        for(n in t=this._events)e.call(t, n)&&s.push(i?n.slice(1):n);
        return Object.getOwnPropertySymbols?s.concat(Object.getOwnPropertySymbols(t)):s
      }, a.prototype.listeners=function(t){
        var e=i?i+t:t, n=this._events[
          e
        ];
        if(!n)return[
        ];
        if(n.fn)return[
          n.fn
        ];
        for(var s=0, o=n.length, r=new Array(o);
        s<o;
        s++)r[
          s
        ]
        =n[
          s
        ].fn;
        return r
      }, a.prototype.listenerCount=function(t){
        var e=i?i+t:t, n=this._events[
          e
        ];
        return n?n.fn?1:n.length:0
      }, a.prototype.emit=function(t, e, n, s, o, r){
        var a=i?i+t:t;
        if(!this._events[
          a
        ])return!1;
        var h, d, l=this._events[
          a
        ], c=arguments.length;
        if(l.fn){
          switch(l.once&&this.removeListener(t, l.fn, void 0, !0), c){
            case 1:return l.fn.call(l.context), !0;
            case 2:return l.fn.call(l.context, e), !0;
            case 3:return l.fn.call(l.context, e, n), !0;
            case 4:return l.fn.call(l.context, e, n, s), !0;
            case 5:return l.fn.call(l.context, e, n, s, o), !0;
            case 6:return l.fn.call(l.context, e, n, s, o, r), !0
          }
          for(d=1, h=new Array(c-1);
          d<c;
          d++)h[
            d-1
          ]
          =arguments[
            d
          ];
          l.fn.apply(l.context, h)
        }
        else{
          var u, p=l.length;
          for(d=0;
          d<p;
          d++)switch(l[
            d
          ].once&&this.removeListener(t, l[
            d
          ].fn, void 0, !0), c){
            case 1:l[
              d
            ].fn.call(l[
              d
            ].context);
            break;
            case 2:l[
              d
            ].fn.call(l[
              d
            ].context, e);
            break;
            case 3:l[
              d
            ].fn.call(l[
              d
            ].context, e, n);
            break;
            case 4:l[
              d
            ].fn.call(l[
              d
            ].context, e, n, s);
            break;
            default:if(!h)for(u=1, h=new Array(c-1);
            u<c;
            u++)h[
              u-1
            ]
            =arguments[
              u
            ];
            l[
              d
            ].fn.apply(l[
              d
            ].context, h)
          }
        }
        return!0
      }, a.prototype.on=function(t, e, i){
        return o(this, t, e, i, !1)
      }, a.prototype.once=function(t, e, i){
        return o(this, t, e, i, !0)
      }, a.prototype.removeListener=function(t, e, n, s){
        var o=i?i+t:t;
        if(!this._events[
          o
        ])return this;
        if(!e)return r(this, o), this;
        var a=this._events[
          o
        ];
        if(a.fn)a.fn!==e||s&&!a.once||n&&a.context!==n||r(this, o);
        else{
          for(var h=0, d=[
          ], l=a.length;
          h<l;
          h++)(a[
            h
          ].fn!==e||s&&!a[
            h
          ].once||n&&a[
            h
          ].context!==n)&&d.push(a[
            h
          ]);
          d.length?this._events[
            o
          ]
          =1===d.length?d[
            0
          ]
          :d:r(this, o)
        }
        return this
      }, a.prototype.removeAllListeners=function(t){
        var e;
        return t?(e=i?i+t:t, this._events[
          e
        ]
        &&r(this, e)):(this._events=new n, this._eventsCount=0), this
      }, a.prototype.off=a.prototype.removeListener, a.prototype.addListener=a.prototype.on, a.prefixed=i, a.EventEmitter=a, t.exports=a
    }, 595851:(t, e, i)=>{
      i.d(e, {
        ZV:()=>Z, ut:()=>F, cG:()=>gt, aS:()=>w, De:()=>m, XS:()=>Y, Qy:()=>B, dC:()=>rt, Kd:()=>L, D1:()=>ht, Er:()=>X, mk:()=>y, UT:()=>v, EX:()=>mt, px:()=>at, Xn:()=>A, _p:()=>K, pu:()=>_, T5:()=>V, KC:()=>q, Ys:()=>ft, pE:()=>tt, LY:()=>st, Z6:()=>Q, _H:()=>J, Ru:()=>pt, k8:()=>P, oI:()=>ct, L4:()=>g, TZ:()=>D, K1:()=>U, g4:()=>ut, nM:()=>dt, z:()=>et, Gy:()=>it, XB:()=>R, yt:()=>S, kD:()=>E, eF:()=>W, dY:()=>b, X:()=>$, Dh:()=>ot, d2:()=>O, if:()=>G, tm:()=>f, G:()=>j, UB:()=>nt, qt:()=>x, nF:()=>M, Lv:()=>lt, GG:()=>p
      });
      const n={
        randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)
      };
      let s;
      const o=new Uint8Array(16);
      function r(){
        if(!s&&(s="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto), !s))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        return s(o)
      }
      const a=[
      ];
      for(let t=0;
      t<256;
      ++t)a.push((t+256).toString(16).slice(1));
      function h(t, e=0){
        return a[
          t[
            e+0
          ]
        ]
        +a[
          t[
            e+1
          ]
        ]
        +a[
          t[
            e+2
          ]
        ]
        +a[
          t[
            e+3
          ]
        ]
        +"-"+a[
          t[
            e+4
          ]
        ]
        +a[
          t[
            e+5
          ]
        ]
        +"-"+a[
          t[
            e+6
          ]
        ]
        +a[
          t[
            e+7
          ]
        ]
        +"-"+a[
          t[
            e+8
          ]
        ]
        +a[
          t[
            e+9
          ]
        ]
        +"-"+a[
          t[
            e+10
          ]
        ]
        +a[
          t[
            e+11
          ]
        ]
        +a[
          t[
            e+12
          ]
        ]
        +a[
          t[
            e+13
          ]
        ]
        +a[
          t[
            e+14
          ]
        ]
        +a[
          t[
            e+15
          ]
        ]
      }
      const d=function(t, e, i){
        if(n.randomUUID&&!e&&!t)return n.randomUUID();
        const s=(t=t||{
        }).random||(t.rng||r)();
        if(s[
          6
        ]
        =15&s[
          6
        ]
        |64, s[
          8
        ]
        =63&s[
          8
        ]
        |128, e){
          i=i||0;
          for(let t=0;
          t<16;
          ++t)e[
            i+t
          ]
          =s[
            t
          ];
          return e
        }
        return h(s)
      };
      var l=i(753579);
      function c(t){
        this.N=624, this.M=397, this.MATRIX_A=2567483615, this.UPPER_MASK=2147483648, this.LOWER_MASK=2147483647, this.mt=new Array(this.N), this.mti=this.N+1, this.init_genrand(t)
      }
      c.prototype.init_genrand=function(t){
        for(this.mt[
          0
        ]
        =t>>>0, this.mti=1;
        this.mti<this.N;
        this.mti++)t=this.mt[
          this.mti-1
        ]
        ^this.mt[
          this.mti-1
        ]
        >>>30, this.mt[
          this.mti
        ]
        =(1812433253*((4294901760&t)>>>16)<<16)+1812433253*(65535&t)+this.mti, this.mt[
          this.mti
        ]
        >>>=0
      }, c.prototype.genrand_int32=function(){
        var t, e=new Array(0, this.MATRIX_A);
        if(this.mti>=this.N){
          var i;
          for(this.mti==this.N+1&&this.init_genrand(5489), i=0;
          i<this.N-this.M;
          i++)t=this.mt[
            i
          ]
          &this.UPPER_MASK|this.mt[
            i+1
          ]
          &this.LOWER_MASK, this.mt[
            i
          ]
          =this.mt[
            i+this.M
          ]
          ^t>>>1^e[
            1&t
          ];
          for(;
          i<this.N-1;
          i++)t=this.mt[
            i
          ]
          &this.UPPER_MASK|this.mt[
            i+1
          ]
          &this.LOWER_MASK, this.mt[
            i
          ]
          =this.mt[
            i+(this.M-this.N)
          ]
          ^t>>>1^e[
            1&t
          ];
          t=this.mt[
            this.N-1
          ]
          &this.UPPER_MASK|this.mt[
            0
          ]
          &this.LOWER_MASK, this.mt[
            this.N-1
          ]
          =this.mt[
            this.M-1
          ]
          ^t>>>1^e[
            1&t
          ], this.mti=0
        }
        return t=this.mt[
          this.mti++
        ], t^=t>>>11, t^=t<<7&2636928640, t^=t<<15&4022730752, (t^=t>>>18)>>>0
      };
      var u=i(99425);
      const p=(t, e, i, n, s, o=0, r=0)=>{
        let a=!1;
        if(i&&(a=i(t, e, s, o, r)), !a&&t.children&&t.children.length>0){
          let e=o+1;
          t.children.forEach(((s, o)=>{
            p(s, t, i, n, !1, e, o)
          }))
        }
        n&&n(t, e, s, o, r)
      }, m=(t, e)=>{
        let i=[
          t
        ], n=!1;
        for("stop"===e(t, null)&&(n=!0);
        i.length&&!n;
        ){
          let t=i.shift();
          t.children&&t.children.length&&t.children.forEach((s=>{
            n||(i.push(s), "stop"===e(s, t)&&(n=!0))
          }))
        }
      }, f=(t, e, i, n)=>{
        let s=t/e, o=[
        ];
        if(i&&n)if(t<=i&&e<=n)o=[
          t, e
        ];
        else{
          o=s>i/n?[
            s*n, n
          ]
          :[
            i, i/s
          ]
        }
        else i?o=t<=i?[
          t, e
        ]
        :[
          i, i/s
        ]
        :n&&(o=e<=n?[
          t, e
        ]
        :[
          s*n, n
        ]);
        return o
      }, g=t=>{
        t=t.replace(/<br>/gim, "\n");
        let e=document.createElement("div");
        return e.innerHTML=t, t=e.textContent
      }, x=t=>{
        try{
          return JSON.parse(JSON.stringify(t))
        }
        catch(t){
          return null
        }
      }, v=(t, e, i=!1)=>{
        if(t.data=x(e.data), i){
          t.data.isActive=!1;
          ft(t.data).forEach((t=>{
            t.isActive=!1
          }))
        }
        return t.children=[
        ], e.children&&e.children.length>0&&e.children.forEach(((e, n)=>{
          t.children[
            n
          ]
          =v({
          }, e, i)
        })), t
      }, y=(t, e, i=!1, n=!0)=>(t.data=x(e.nodeData?e.nodeData.data:e.data), n?delete t.data.uid:t.data.uid||(t.data.uid=A()), i&&(t.data.isActive=!1), t.children=[
      ], e.children&&e.children.length>0?e.children.forEach(((e, s)=>{
        t.children[
          s
        ]
        =y({
        }, e, i, n)
      })):e.nodeData&&e.nodeData.children&&e.nodeData.children.length>0&&e.nodeData.children.forEach(((e, s)=>{
        t.children[
          s
        ]
        =y({
        }, e, i, n)
      })), t), M=(t, e=300, i)=>{
        let n=null;
        return(...s)=>{
          n||(n=setTimeout((()=>{
            t.call(i, ...s), n=null
          }), e))
        }
      }, w=(t, e=(()=>{
      }))=>{
        let i=0, n=t.length;
        if(n<=0)return e();
        let s=()=>{
          i>=n?e():(t[
            i
          ]
          (), setTimeout((()=>{
            i++, s()
          }), 0))
        };
        s()
      }, _=t=>t*(Math.PI/180);
      let N=null;
      const E=(t, {
        italic:e, bold:i, fontSize:n, fontFamily:s
      })=>{
        const o=C({
          italic:e, bold:i, fontSize:n, fontFamily:s
        });
        if(!N){
          const t=document.createElement("canvas");
          N=t.getContext("2d")
        }
        N.save(), N.font=o;
        const{
          width:r, actualBoundingBoxAscent:a, actualBoundingBoxDescent:h
        }
        =N.measureText(t);
        N.restore();
        return{
          width:r, height:a+h
        }
      }, C=({
        italic:t, bold:e, fontSize:i, fontFamily:n
      })=>`${t?"italic ":""} ${e?"bold ":""} ${i}px ${n} `, b=function(t, e){
        let i=!1, n=null, s=()=>{
          i=!1, e?t.call(e):t()
        };
        if("undefined"!=typeof MutationObserver){
          let t=1, e=new MutationObserver(s), i=document.createTextNode(t);
          e.observe(i, {
            characterData:!0
          }), n=function(){
            t=(t+1)%2, i.data=t
          }
        }
        else n=setTimeout;
        return function(){
          i||(i=!0, n(s, 0))
        }
      }, L=(t, e)=>{
        let i=t.elRect, {
          scaleX:n, scaleY:s, translateX:o, translateY:r
        }
        =t.draw.transform(), {
          left:a, top:h, width:d, height:l
        }
        =e, c=(a+d)*n+o, u=(h+l)*s+r;
        a=a*n+o, h=h*s+r;
        let p=0, m=0;
        return a<0&&(p=-a), c>i.width&&(p=-(c-i.width)), h<0&&(m=-h), u>i.height&&(m=-(u-i.height)), {
          isOuter:0!==p||0!==m, offsetLeft:p, offsetTop:m
        }
      };
      let T=null;
      const D=t=>(T||(T=document.createElement("div")), T.innerHTML=t, T.textContent);
      const A=()=>d(), S=t=>new Promise(((e, i)=>{
        let n=new FileReader;
        n.readAsDataURL(t), n.onload=async t=>{
          let i=t.target.result, n=await(s=i, new Promise((t=>{
            let e=new Image;
            e.src=s, e.onload=()=>{
              t({
                width:e.width, height:e.height
              })
            }, e.onerror=()=>{
              t({
                width:0, height:0
              })
            }
          })));
          var s;
          e({
            url:i, size:n
          })
        }, n.onerror=t=>{
          i(t)
        }
      })), z=t=>Object.prototype.toString.call(t).slice(8, -1), R=t=>null==t||""===t, O=t=>t.replaceAll(/(<[
        ^\s
      ]
      +)\s+style=[
        "'][^'"
      ]
      +[
        "']\s*(>)/g,"$1$2");let I=null;const F=(t,e,i)=>{I||(I=document.createElement("div")),I.innerHTML=t;let n=t=>{t.childNodes.forEach((t=>{1===t.nodeType&&(t.tagName.toLowerCase()===e?t.style.cssText=i:n(t))}))};return n(I),I.innerHTML};let k=null;const B=t=>{k||(k=document.createElement("div")),k.innerHTML=t;for(let t=k.childNodes,e=t.length;e--;)if(1==t[e].nodeType)return!0;return!1};let H=null;const G=t=>{H||(H=document.createElement("div")),H.innerHTML=t;const e=H.querySelectorAll(".ql-formula");Array.from(e).forEach((t=>{const e=document.createTextNode("$smmformula$");t.parentNode.replaceChild(e,t)}));const i=H.childNodes;let n=[];for(let t=0;t<i.length;t++){const e=i[t];1===e.nodeType?n.push(e.textContent):3===e.nodeType&&n.push(e.nodeValue)}if(t=n.map((t=>`<p><span>${et(t)}</span></p>`)).join(""),e.length>0){t=t.replace(/\$smmformula\$/g,'<span class="smmformula"></span>'),H.innerHTML=t;const i=H.querySelectorAll(".smmformula");Array.from(i).forEach(((t,i)=>{t.parentNode.replaceChild(e[i],t)})),t=H.innerHTML}return t},P=(t,e)=>{const i={};return Object.keys(e).forEach((n=>{const s=t[n],o=e[n];if(z(s)===z(o)){if("Object"===z(s)){if(JSON.stringify(s)!==JSON.stringify(o))return void(i[n]=o)}else if(s!==o)return void(i[n]=o)}else i[n]=o})),i},Y=t=>!/^_/.test(t)&&!l.QK.includes(t),W=t=>t.reduce(((t,e)=>{const i=t.find((t=>t.type===e.type));return i?e.list.forEach((t=>{const e=i.list.find((e=>e.name===t.name));e?e.icon=t.icon:i.list.push(t)})):t.push({...e}),t}),[]),U=t=>{let e=[];return t.forEach((i=>{t.find((t=>t.uid!==i.uid&&t.isAncestor(i)))||e.push(i)})),e},$=t=>{const e={},i={};t.forEach((t=>{const n=t.parent;if(n){const s=n.uid;i[s]=n;const o=t.getIndexInBrothers(),r={node:t,index:o};e[s]?e[s].find((t=>t.index===r.index))||e[s].push(r):e[s]=[r]}}));const n=[];return Object.keys(e).forEach((t=>{if(e[t].length>1){const s=e[t].map((t=>t.index)).sort(((t,e)=>t-e));n.push({node:i[t],range:[s[0],s[s.length-1]]})}else n.push({node:e[t][0].node})})),n},X=(t,e,i,n,s,o,r,a)=>e>s&&o>t&&n>r&&a>i,V=t=>{let e=window.getSelection(),i=document.createRange();i.selectNodeContents(t),i.collapse(),e.removeAllRanges(),e.addRange(i)},j=t=>{let e=window.getSelection(),i=document.createRange();i.selectNodeContents(t),e.removeAllRanges(),e.addRange(i)},Z=(t,e={})=>{const i=t=>{t.forEach((t=>{t.data={...t.data,...e},t.children&&t.children.length>0&&i(t.children)}))};return i(t),t},K=(t,e=!1)=>{const i=t=>{t.forEach((t=>{t.data||(t.data={}),(e||R(t.data.uid))&&(t.data.uid=A()),t.children&&t.children.length>0&&i(t.children)}))};return i(t),t},q=t=>t?Array.isArray(t)?t:[t]:[],Q=t=>t.parent?t.parent.nodeData.children.findIndex((e=>e.data.uid===t.uid)):0,J=(t,e)=>e.findIndex((e=>e.uid===t.uid)),tt=t=>{let e=0;for(let i=0;i<t.length;i++)e=t.charCodeAt(i)+((e<<5)-e);return"hsla("+new c(e).genrand_int32()%360+", 50%, 50%, 1)"},et=t=>([["&","&amp;
        "],["<","&lt;
        "],[">","&gt;
        "]].forEach((e=>{t=t.replace(new RegExp(e[0],"g"),e[1])})),t),it=(t,e)=>{const i=z(t);if(i!==z(e))return!1;if("Object"===i){const i=Object.keys(t),n=Object.keys(e);if(i.length!==n.length)return!1;for(let s=0;s<i.length;s++){const o=i[s];if(!n.includes(o))return!1;if(!it(t[o],e[o]))return!1}return!0}if("Array"===i){if(t.length!==e.length)return!1;for(let i=0;i<t.length;i++){const n=t[i],s=e[i];if(z(n)!==z(s))return!1;if(!it(n,s))return!1}return!0}return t===e},nt=t=>{navigator.clipboard&&navigator.clipboard.writeText(JSON.stringify(t))},st=async()=>{let t=null,e=null;if(navigator.clipboard){t=await navigator.clipboard.readText();const i=await navigator.clipboard.read();if(i&&i.length>0)for(const t of i)for(const i of t.types)if(/^image\//.test(i)){e=await t.getType(i);break}}return{text:t,img:e}},ot=t=>{if(!t||!t.parent)return;const e=Q(t);-1!==e&&t.parent.nodeData.children.splice(e,1)},rt=(t,e)=>{if(t.length!==e.length)return!1;for(let i=0;i<t.length;i++)if(!e.find((e=>e.uid===t[i].uid)))return!1;return!0},at=t=>({simpleMindMap:!0,data:t}),ht=t=>{let e=null;if("string"==typeof t)try{const i=JSON.parse(t);"object"==typeof i&&i.simpleMindMap&&(e=i.data)}catch(t){}else"object"==typeof t&&t.simpleMindMap&&(e=t.data);const i=!!e;return{isSmm:i,data:i?e:String(t)}},dt=(t,e)=>{t.preventDefault();const i=window.getSelection();if(!i.rangeCount)return;i.deleteFromDocument(),e=e||t.clipboardData.getData("text"),e=(e=D(e)).replaceAll(/\n/g,"");const n=document.createTextNode(e);i.getRangeAt(0).insertNode(n),i.collapseToEnd()},lt=t=>{const e={},i=(t,n)=>{const s=t.data.uid;n&&n.children.push(s),e[s]={isRoot:!n,data:{...t.data},children:[]},t.children&&t.children.length>0&&t.children.forEach((t=>{i(t,e[s])}))};return i(t,null),e},ct=(t,e)=>{const i=t.x+t.width/2,n=t.y+t.height/2,s=e.x+e.width/2,o=e.y+e.height/2;return i<s&&n<o?"left-top":i>s&&n<o?"right-top":i>s&&n>o?"right-bottom":i<s&&n>o?"left-bottom":i<s&&n===o?"left":i>s&&n===o?"right":i===s&&n<o?"top":i===s&&n>o?"bottom":"overlap"},ut=({addContentToHeader:t,addContentToFooter:e})=>{const i=[];let n=null,s=0,o=null,r=0;const a=(t,e)=>{if("function"==typeof t){const n=t();if(!n)return;const{el:s,cssText:o,height:r}=n;if(s instanceof HTMLElement){gt(s);e(mt({el:s,height:r}),r)}o&&i.push(o)}};return a(t,((t,e)=>{n=t,s=e})),a(e,((t,e)=>{o=t,r=e})),{cssTextList:i,header:n,headerHeight:s,footer:o,footerHeight:r}},pt=(t,e=0,i=0,n=0,s=0,o=!1,r=!1)=>{let a=1/0,h=-1/0,d=1/0,l=-1/0;const c=(t,e)=>{if(!e||!o){const{x:e,y:i,width:n,height:s}=t.group.findOne(".smm-node-shape").rbox();e<a&&(a=e),e+n>h&&(h=e+n),i<d&&(d=i),i+s>l&&(l=i+s)}!r&&t._generalizationList.length>0&&t._generalizationList.forEach((t=>{c(t.generalizationNode)})),t.children&&t.children.forEach((t=>{c(t)}))};return c(t,!0),a=a-e+n,d=d-i+s,h=h-e+n,l=l-i+s,{left:a,top:d,width:h-a,height:l-d}},mt=(document.documentElement.requestFullScreen||(document.documentElement.webkitRequestFullScreen||(document.documentElement.mozRequestFullScreen||document.documentElement.msRequestFullscreen)),({el:t,width:e,height:i})=>{const n=new u.U3;return void 0!==e&&n.width(e),void 0!==i&&n.height(i),n.add(t),n}),ft=t=>{const e=t.generalization;return e?Array.isArray(e)?e:[e]:[]},gt=t=>{t.setAttribute("xmlns","http://www.w3.org/1999/xhtml")}},623040:(t,e,i)=>{i.d(e,{Ay:()=>_t});var n=i(753579);const s=class{constructor(t={}){this.opt=t,this.mindMap=this.opt.mindMap,this.scale=1,this.sx=0,this.sy=0,this.x=0,this.y=0,this.firstDrag=!0,this.setTransformData(this.mindMap.opt.viewData),this.bind()}bind(){this.mindMap.keyCommand.addShortcut("Control+=",(()=>{this.enlarge()})),this.mindMap.keyCommand.addShortcut("Control+-",(()=>{this.narrow()})),this.mindMap.keyCommand.addShortcut("Control+i",(()=>{this.fit()})),this.mindMap.event.on("mousedown",(t=>{this.mindMap.opt.isDisableDrag||(t.preventDefault(),this.sx=this.x,this.sy=this.y)})),this.mindMap.event.on("drag",((t,e)=>{t.ctrlKey||t.metaKey||this.mindMap.opt.isDisableDrag||(this.firstDrag&&(this.firstDrag=!1,this.mindMap.renderer.activeNodeList.length>0&&this.mindMap.execCommand("CLEAR_ACTIVE_NODE")),this.x=this.sx+e.mousemoveOffset.x,this.y=this.sy+e.mousemoveOffset.y,this.transform())})),this.mindMap.event.on("mouseup",(()=>{this.firstDrag=!0})),this.mindMap.event.on("mousewheel",((t,e,i,s)=>{const{customHandleMousewheel:o,mousewheelAction:r,mouseScaleCenterUseMousePosition:a,mousewheelMoveStep:h,mousewheelZoomActionReverse:d,disableMouseWheelZoom:l}=this.mindMap.opt;if(o&&"function"==typeof o)return o(t);if(r===n.aH.MOUSE_WHEEL_ACTION.ZOOM||t.ctrlKey||t.metaKey){if(l)return;const{x:i,y:o}=this.mindMap.toPos(t.clientX,t.clientY),r=a?i:void 0,h=a?o:void 0;switch(s&&(e.includes(n.aH.DIR.LEFT)||e.includes(n.aH.DIR.RIGHT))&&(e=e.filter((t=>![n.aH.DIR.LEFT,n.aH.DIR.RIGHT].includes(t)))),!0){case e.includes(n.aH.DIR.UP||n.aH.DIR.LEFT):d?this.enlarge(r,h,s):this.narrow(r,h,s);break;case e.includes(n.aH.DIR.DOWN||n.aH.DIR.RIGHT):d?this.narrow(r,h,s):this.enlarge(r,h,s)}}else{const t=s?10:h;let i=0,o=0;e.includes(n.aH.DIR.DOWN)&&(o=-t),e.includes(n.aH.DIR.UP)&&(o=t),e.includes(n.aH.DIR.LEFT)&&(i=t),e.includes(n.aH.DIR.RIGHT)&&(i=-t),this.translateXY(i,o)}})),this.mindMap.on("resize",(()=>{this.checkNeedMindMapInCanvas()&&this.transform()}))}getTransformData(){return{transform:this.mindMap.draw.transform(),state:{scale:this.scale,x:this.x,y:this.y,sx:this.sx,sy:this.sy}}}setTransformData(t){t&&(Object.keys(t.state).forEach((e=>{this[e]=t.state[e]})),this.mindMap.draw.transform({...t.transform}),this.mindMap.emit("view_data_change",this.getTransformData()),this.emitEvent("scale"),this.emitEvent("translate"))}translateXY(t,e){0===t&&0===e||(this.x+=t,this.y+=e,this.transform(),this.emitEvent("translate"))}translateX(t){0!==t&&(this.x+=t,this.transform(),this.emitEvent("translate"))}translateXTo(t){this.x=t,this.transform(),this.emitEvent("translate")}translateY(t){0!==t&&(this.y+=t,this.transform(),this.emitEvent("translate"))}translateYTo(t){this.y=t,this.transform(),this.emitEvent("translate")}transform(){try{this.limitMindMapInCanvas()}catch(t){}this.mindMap.draw.transform({origin:[0,0],scale:this.scale,translate:[this.x,this.y]}),this.mindMap.emit("view_data_change",this.getTransformData())}reset(){const t=1!==this.scale,e=0!==this.x||0!==this.y;this.scale=1,this.x=0,this.y=0,this.transform(),t&&this.emitEvent("scale"),e&&this.emitEvent("translate")}narrow(t,e,i){const n=this.mindMap.opt.scaleRatio/(i?5:1),s=Math.max(this.scale-n,.1);this.scaleInCenter(s,t,e),this.transform(),this.emitEvent("scale")}enlarge(t,e,i){const n=this.mindMap.opt.scaleRatio/(i?5:1),s=this.scale+n;this.scaleInCenter(s,t,e),this.transform(),this.emitEvent("scale")}scaleInCenter(t,e,i){void 0!==e&&void 0!==i||(e=this.mindMap.width/2,i=this.mindMap.height/2);const n=1-t/this.scale,s=(e-this.x)*n,o=(i-this.y)*n;this.x+=s,this.y+=o,this.scale=t}setScale(t,e,i){void 0!==e&&void 0!==i?this.scaleInCenter(t,e,i):this.scale=t,this.transform(),this.emitEvent("scale")}fit(t=(()=>{}),e=!1,i){i=void 0===i?this.mindMap.opt.fitPadding:i;const n=this.mindMap.draw,s=n.transform(),o=t()||n.rbox(),r=o.width/s.scaleX,a=o.height/s.scaleY,h=r/a;let{width:d,height:l}=this.mindMap.elRect;d-=2*i,l-=2*i;let c=0,u="";if(r<=d&&a<=l&&!e)c=1,u=1;else{let t=0,e=0;h>d/l?(t=d,e=d/h,u=2):(e=l,t=l*h,u=3),c=t/r}this.setScale(c);const p=t()||n.rbox();p.x-=this.mindMap.elRect.left,p.y-=this.mindMap.elRect.top;let m=0,f=0;1===u?(m=-p.x+i+(d-p.width)/2,f=-p.y+i+(l-p.height)/2):2===u?(m=-p.x+i,f=-p.y+i+(l-p.height)/2):3===u&&(m=-p.x+i+(d-p.width)/2,f=-p.y+i),this.translateXY(m,f)}checkNeedMindMapInCanvas(){const{isLimitMindMapInCanvasWhenHasScrollbar:t,isLimitMindMapInCanvas:e}=this.mindMap.opt;return this.mindMap.scrollbar?t:e}limitMindMapInCanvas(){if(!this.checkNeedMindMapInCanvas())return;let{scale:t,left:e,top:i,right:n,bottom:s}=this.getPositionLimit();const o=(this.mindMap.width-this.mindMap.initWidth)/2*t,r=(this.mindMap.height-this.mindMap.initHeight)/2*t,a=this.scale/t;e*=a,n*=a,i*=a,s*=a;const h=this.mindMap.width/2,d=this.mindMap.height/2,l=this.scale-1;e-=l*h-o,n-=l*h-o,i-=l*d-r,s-=l*d-r,this.x>e&&(this.x=e),this.x<n&&(this.x=n),this.y>i&&(this.y=i),this.y<s&&(this.y=s)}getPositionLimit(){const{scaleX:t,scaleY:e}=this.mindMap.draw.transform(),i=this.mindMap.draw.rbox(),n=this.mindMap.renderer.root.group.rbox(),s=this.mindMap.renderer.layout.getRootCenterOffset(n.width,n.height);return{scale:t,left:n.x-i.x-s.x*t,right:n.x-i.x2-s.x*t,top:n.y-i.y-s.y*e,bottom:n.y-i.y2-s.y*e}}emitEvent(t){switch(t){case"scale":this.mindMap.emit("scale",this.scale);case"translate":this.mindMap.emit("translate",this.x,this.y)}}};var o=i(430228),r=i.n(o);class a extends(r()){constructor(t={}){super(),this.opt=t,this.mindMap=t.mindMap,this.isLeftMousedown=!1,this.isRightMousedown=!1,this.isMiddleMousedown=!1,this.mousedownPos={x:0,y:0},this.mousemovePos={x:0,y:0},this.mousemoveOffset={x:0,y:0},this.bindFn(),this.bind()}bindFn(){this.onBodyMousedown=this.onBodyMousedown.bind(this),this.onBodyClick=this.onBodyClick.bind(this),this.onDrawClick=this.onDrawClick.bind(this),this.onMousedown=this.onMousedown.bind(this),this.onMousemove=this.onMousemove.bind(this),this.onMouseup=this.onMouseup.bind(this),this.onNodeMouseup=this.onNodeMouseup.bind(this),this.onMousewheel=this.onMousewheel.bind(this),this.onContextmenu=this.onContextmenu.bind(this),this.onSvgMousedown=this.onSvgMousedown.bind(this),this.onKeyup=this.onKeyup.bind(this),this.onMouseenter=this.onMouseenter.bind(this),this.onMouseleave=this.onMouseleave.bind(this)}bind(){document.body.addEventListener("mousedown",this.onBodyMousedown),document.body.addEventListener("click",this.onBodyClick),this.mindMap.svg.on("click",this.onDrawClick),this.mindMap.el.addEventListener("mousedown",this.onMousedown),this.mindMap.svg.on("mousedown",this.onSvgMousedown),window.addEventListener("mousemove",this.onMousemove),window.addEventListener("mouseup",this.onMouseup),this.on("node_mouseup",this.onNodeMouseup),this.mindMap.el.addEventListener("wheel",this.onMousewheel),this.mindMap.svg.on("contextmenu",this.onContextmenu),this.mindMap.svg.on("mouseenter",this.onMouseenter),this.mindMap.svg.on("mouseleave",this.onMouseleave),window.addEventListener("keyup",this.onKeyup)}unbind(){document.body.removeEventListener("mousedown",this.onBodyMousedown),document.body.removeEventListener("click",this.onBodyClick),this.mindMap.svg.off("click",this.onDrawClick),this.mindMap.el.removeEventListener("mousedown",this.onMousedown),window.removeEventListener("mousemove",this.onMousemove),window.removeEventListener("mouseup",this.onMouseup),this.off("node_mouseup",this.onNodeMouseup),this.mindMap.el.removeEventListener("wheel",this.onMousewheel),this.mindMap.svg.off("contextmenu",this.onContextmenu),this.mindMap.svg.off("mouseenter",this.onMouseenter),this.mindMap.svg.off("mouseleave",this.onMouseleave),window.removeEventListener("keyup",this.onKeyup)}onDrawClick(t){this.emit("draw_click",t)}onBodyMousedown(t){this.emit("body_mousedown",t)}onBodyClick(t){this.emit("body_click",t)}onSvgMousedown(t){this.emit("svg_mousedown",t)}onMousedown(t){t.preventDefault(),1===t.which?this.isLeftMousedown=!0:3===t.which?this.isRightMousedown=!0:2===t.which&&(this.isMiddleMousedown=!0),this.mousedownPos.x=t.clientX,this.mousedownPos.y=t.clientY,this.emit("mousedown",t,this)}onMousemove(t){t.preventDefault();let{useLeftKeySelectionRightKeyDrag:e}=this.mindMap.opt;this.mousemovePos.x=t.clientX,this.mousemovePos.y=t.clientY,this.mousemoveOffset.x=t.clientX-this.mousedownPos.x,this.mousemoveOffset.y=t.clientY-this.mousedownPos.y,this.emit("mousemove",t,this),(this.isMiddleMousedown||(e?this.isRightMousedown:this.isLeftMousedown))&&(t.preventDefault(),this.emit("drag",t,this))}onMouseup(t){this.onNodeMouseup(),this.emit("mouseup",t,this)}onNodeMouseup(){this.isLeftMousedown=!1,this.isRightMousedown=!1,this.isMiddleMousedown=!1}onMousewheel(t){t.stopPropagation(),t.preventDefault();const e=[];t.deltaY<0&&e.push(n.aH.DIR.UP),t.deltaY>0&&e.push(n.aH.DIR.DOWN),t.deltaX<0&&e.push(n.aH.DIR.LEFT),t.deltaX>0&&e.push(n.aH.DIR.RIGHT);let i=!1;(t.wheelDeltaY===-3*t.deltaY||Math.abs(t.wheelDeltaY)<=10)&&(i=!0),this.emit("mousewheel",t,e,this,i)}onContextmenu(t){t.preventDefault(),t.ctrlKey||this.emit("contextmenu",t)}onKeyup(t){this.emit("keyup",t)}onMouseenter(t){this.emit("svg_mouseenter",t)}onMouseleave(t){this.emit("svg_mouseleave",t)}}const h=a;var d=i(972877),l=i.n(d),c=i(993971),u=i(595851);class p extends c.A{constructor(t={},e){super(t),this.isUseLeft=e===n.aH.LAYOUT.LOGICAL_STRUCTURE_LEFT}doLayout(t){let e=[()=>{this.computedBaseValue()},()=>{this.computedTopValue()},()=>{this.adjustTopValue()},()=>{t(this.root)}];(0,u.aS)(e)}computedBaseValue(){(0,u.GG)(this.renderer.renderTree,null,((t,e,i,n)=>{let s=this.createNode(t,e,i,n);if(i?this.setNodeCenter(s):this.isUseLeft?s.left=e._node.left-s.width-this.getMarginX(n):s.left=e._node.left+e._node.width+this.getMarginX(n),!t.data.expand)return!0}),((t,e,i,n)=>{let s=!1===t.data.expand?0:t._node.children.length;t._node.childrenAreaHeight=s?t._node.children.reduce(((t,e)=>t+e.height),0)+(s+1)*this.getMarginY(n+1):0;let o=t._node.checkHasGeneralization()?t._node._generalizationNodeHeight+this.getMarginY(n+1):0;t._node.childrenAreaHeight2=Math.max(t._node.childrenAreaHeight,o)}),!0,0)}computedTopValue(){(0,u.GG)(this.root,null,((t,e,i,n)=>{if(t.getData("expand")&&t.children&&t.children.length){let e=this.getMarginY(n+1),i=t.top+t.height/2-t.childrenAreaHeight/2+e;t.children.forEach((t=>{t.top=i,i+=t.height+e}))}}),null,!0)}adjustTopValue(){(0,u.GG)(this.root,null,((t,e,i,n)=>{if(!t.getData("expand"))return;let s=t.childrenAreaHeight2-2*this.getMarginY(n+1)-t.height;s>0&&this.updateBrothers(t,s/2)}),null,!0)}updateBrothers(t,e){if(t.parent){let i=t.parent.children,n=(0,u._H)(t,i);i.forEach(((i,s)=>{if(i.uid===t.uid||i.hasCustomPosition())return;let o=0;s<n?o=-e:s>n&&(o=e),i.top+=o,i.children&&i.children.length&&this.updateChildren(i.children,"top",o)})),this.updateBrothers(t.parent,e)}}renderLine(t,e,i,n){"curve"===n?this.renderLineCurve(t,e,i):"direct"===n?this.renderLineDirect(t,e,i):this.renderLineStraight(t,e,i)}renderLineStraight(t,e,i){if(t.children.length<=0)return[];let{left:n,top:s,width:o,height:r,expandBtnSize:a}=t;this.mindMap.opt.alwaysShowExpandBtn||(a=0);let h=.6*(this.getMarginX(t.layerIndex+1)-a);this.isUseLeft&&(h*=-1);let d=this.mindMap.themeConfig.nodeUseLineStyle;t.children.forEach(((l,c)=>{let u;u=this.isUseLeft?0===t.layerIndex?n:n-a:0===t.layerIndex?n+o:n+o+a;let p=s+r/2,m=this.isUseLeft?l.left+l.width:l.left,f=l.top+l.height/2,g=d?l.width*(this.isUseLeft?-1:1):0;p=d&&!t.isRoot?p+r/2:p,f=d?f+l.height/2:f;let x=this.createFoldLine([[u,p],[u+h,p],[u+h,f],[m+g,f]]);this.setLineStyle(i,e[c],x,l)}))}renderLineDirect(t,e,i){if(t.children.length<=0)return[];let{left:n,top:s,width:o,height:r,expandBtnSize:a}=t;this.mindMap.opt.alwaysShowExpandBtn||(a=0);const{nodeUseLineStyle:h}=this.mindMap.themeConfig;t.children.forEach(((d,l)=>{0===t.layerIndex&&(a=0);let c=this.isUseLeft?n-a:n+o+a,u=s+r/2,p=this.isUseLeft?d.left+d.width:d.left,m=d.top+d.height/2;u=h&&!t.isRoot?u+r/2:u,m=h?m+d.height/2:m;let f=`M ${c},${u} L ${p},${m}`+(h?` L ${this.isUseLeft?d.left:d.left+d.width},${m}`:"");this.setLineStyle(i,e[l],f,d)}))}renderLineCurve(t,e,i){if(t.children.length<=0)return[];let{left:n,top:s,width:o,height:r,expandBtnSize:a}=t;this.mindMap.opt.alwaysShowExpandBtn||(a=0);const{nodeUseLineStyle:h,rootLineStartPositionKeepSameInCurve:d,rootLineKeepSameInCurve:l}=this.mindMap.themeConfig;t.children.forEach(((c,u)=>{let p;0===t.layerIndex&&(a=0),p=this.isUseLeft?0!==t.layerIndex||d?n-a:n+o/2:0!==t.layerIndex||d?n+o+a:n+o/2;let m,f=s+r/2,g=this.isUseLeft?c.left+c.width:c.left,x=c.top+c.height/2,v="";f=h&&!t.isRoot?f+r/2:f,x=h?x+c.height/2:x,m=this.isUseLeft?h?` L ${c.left},${x}`:"":h?` L ${c.left+c.width},${x}`:"",v=t.isRoot&&!l?this.quadraticCurvePath(p,f,g,x)+m:this.cubicBezierPath(p,f,g,x)+m,this.setLineStyle(i,e[u],v,c)}))}renderExpandBtn(t,e){let{width:i,height:n,expandBtnSize:s,layerIndex:o}=t;0===o&&(s=0);let{translateX:r,translateY:a}=e.transform(),h=this.mindMap.themeConfig.nodeUseLineStyle?n/2:0,d=this.isUseLeft?0-s:i,l=n/2+h;d===r&&l===a||e.translate(d-r,l-a)}renderGeneralization(t){t.forEach((t=>{let{left:e,top:i,bottom:n,right:s,generalizationLineMargin:o,generalizationNodeMargin:r}=this.getNodeGeneralizationRenderBoundaries(t,"h"),a=this.isUseLeft?e-o:s+o,h=i,d=a,l=n,c=`M ${a},${h} Q ${a+(this.isUseLeft?-20:20)},${h+(l-h)/2} ${d},${l}`;t.generalizationLine.plot(c),t.generalizationNode.left=a+(this.isUseLeft?-r:r)-(this.isUseLeft?t.generalizationNode.width:0),t.generalizationNode.top=i+(n-i-t.generalizationNode.height)/2}))}renderExpandBtnRect(t,e,i,n){this.isUseLeft?t.size(e,n).x(-e).y(0):t.size(e,n).x(i).y(0)}}const m=p;class f extends c.A{constructor(t={}){super(t)}doLayout(t){let e=[()=>{this.computedBaseValue()},()=>{this.computedTopValue()},()=>{this.adjustTopValue()},()=>{t(this.root)}];(0,u.aS)(e)}computedBaseValue(){(0,u.GG)(this.renderer.renderTree,null,((t,e,i,s,o)=>{let r=this.createNode(t,e,i,s);if(i?this.setNodeCenter(r):(e._node.dir?r.dir=e._node.dir:r.dir=o%2==0?n.aH.LAYOUT_GROW_DIR.RIGHT:n.aH.LAYOUT_GROW_DIR.LEFT,r.left=r.dir===n.aH.LAYOUT_GROW_DIR.RIGHT?e._node.left+e._node.width+this.getMarginX(s):e._node.left-this.getMarginX(s)-r.width),!t.data.expand)return!0}),((t,e,i,s)=>{if(!t.data.expand)return t._node.leftChildrenAreaHeight=0,void(t._node.rightChildrenAreaHeight=0);let o=0,r=0,a=0,h=0;t._node.children.forEach((t=>{t.dir===n.aH.LAYOUT_GROW_DIR.LEFT?(o++,a+=t.height):(r++,h+=t.height)})),t._node.leftChildrenAreaHeight=a+(o+1)*this.getMarginY(s+1),t._node.rightChildrenAreaHeight=h+(r+1)*this.getMarginY(s+1);let d=t._node.checkHasGeneralization()?t._node._generalizationNodeHeight+this.getMarginY(s+1):0;t._node.leftChildrenAreaHeight2=Math.max(t._node.leftChildrenAreaHeight,d),t._node.rightChildrenAreaHeight2=Math.max(t._node.rightChildrenAreaHeight,d)}),!0,0)}computedTopValue(){(0,u.GG)(this.root,null,((t,e,i,s)=>{if(t.getData("expand")&&t.children&&t.children.length){let e=this.getMarginY(s+1),i=t.top+t.height/2+e,o=i-t.leftChildrenAreaHeight/2,r=i-t.rightChildrenAreaHeight/2;t.children.forEach((t=>{t.dir===n.aH.LAYOUT_GROW_DIR.LEFT?(t.top=o,o+=t.height+e):(t.top=r,r+=t.height+e)}))}}),null,!0)}adjustTopValue(){(0,u.GG)(this.root,null,((t,e,i,n)=>{if(!t.getData("expand"))return;let s=2*this.getMarginY(n+1)+t.height,o=t.leftChildrenAreaHeight2-s,r=t.rightChildrenAreaHeight2-s;(o>0||r>0)&&this.updateBrothers(t,o/2,r/2)}),null,!0)}updateBrothers(t,e,i){if(t.parent){let s=t.parent.children.filter((e=>e.dir===t.dir)),o=(0,u._H)(t,s);s.forEach(((t,s)=>{if(t.hasCustomPosition())return;let r=0,a=t.dir===n.aH.LAYOUT_GROW_DIR.LEFT?e:i;s<o?r=-a:s>o&&(r=a),t.top+=r,t.children&&t.children.length&&this.updateChildren(t.children,"top",r)})),this.updateBrothers(t.parent,e,i)}}renderLine(t,e,i,n){"curve"===n?this.renderLineCurve(t,e,i):"direct"===n?this.renderLineDirect(t,e,i):this.renderLineStraight(t,e,i)}renderLineStraight(t,e,i){if(t.children.length<=0)return[];let{left:s,top:o,width:r,height:a,expandBtnSize:h}=t;this.mindMap.opt.alwaysShowExpandBtn||(h=0);let d=.6*(this.getMarginX(t.layerIndex+1)-h),l=this.mindMap.themeConfig.nodeUseLineStyle;t.children.forEach(((c,u)=>{let p=0,m=0,f=l?c.width:0;c.dir===n.aH.LAYOUT_GROW_DIR.LEFT?(m=-d,p=0===t.layerIndex?s:s-h,f=-f):(m=d,p=0===t.layerIndex?s+r:s+r+h);let g=o+a/2,x=c.dir===n.aH.LAYOUT_GROW_DIR.LEFT?c.left+c.width:c.left,v=c.top+c.height/2;g=l&&!t.isRoot?g+a/2:g,v=l?v+c.height/2:v;let y=this.createFoldLine([[p,g],[p+m,g],[p+m,v],[x+f,v]]);this.setLineStyle(i,e[u],y,c)}))}renderLineDirect(t,e,i){if(t.children.length<=0)return[];let{left:s,top:o,width:r,height:a,expandBtnSize:h}=t;this.mindMap.opt.alwaysShowExpandBtn||(h=0);const{nodeUseLineStyle:d}=this.mindMap.themeConfig;t.children.forEach(((l,c)=>{0===t.layerIndex&&(h=0);let u=l.dir===n.aH.LAYOUT_GROW_DIR.LEFT?s-h:s+r+h,p=o+a/2,m=l.dir===n.aH.LAYOUT_GROW_DIR.LEFT?l.left+l.width:l.left,f=l.top+l.height/2;p=d&&!t.isRoot?p+a/2:p,f=d?f+l.height/2:f;let g="";d&&(g=l.dir===n.aH.LAYOUT_GROW_DIR.LEFT?` L ${l.left},${f}`:` L ${l.left+l.width},${f}`);let x=`M ${u},${p} L ${m},${f}`+g;this.setLineStyle(i,e[c],x,l)}))}renderLineCurve(t,e,i){if(t.children.length<=0)return[];let{left:s,top:o,width:r,height:a,expandBtnSize:h}=t;this.mindMap.opt.alwaysShowExpandBtn||(h=0);const{nodeUseLineStyle:d,rootLineKeepSameInCurve:l,rootLineStartPositionKeepSameInCurve:c}=this.mindMap.themeConfig;t.children.forEach(((u,p)=>{0===t.layerIndex&&(h=0);let m=0!==t.layerIndex||c?u.dir===n.aH.LAYOUT_GROW_DIR.LEFT?s-h:s+r+h:s+r/2,f=o+a/2,g=u.dir===n.aH.LAYOUT_GROW_DIR.LEFT?u.left+u.width:u.left,x=u.top+u.height/2,v="";f=d&&!t.isRoot?f+a/2:f,x=d?x+u.height/2:x;let y="";d&&(y=u.dir===n.aH.LAYOUT_GROW_DIR.LEFT?` L ${u.left},${x}`:` L ${u.left+u.width},${x}`),v=t.isRoot&&!l?this.quadraticCurvePath(m,f,g,x)+y:this.cubicBezierPath(m,f,g,x)+y,this.setLineStyle(i,e[p],v,u)}))}renderExpandBtn(t,e){let{width:i,height:s,expandBtnSize:o}=t,{translateX:r,translateY:a}=e.transform(),h=this.mindMap.themeConfig.nodeUseLineStyle?s/2:0,d=t.dir===n.aH.LAYOUT_GROW_DIR.LEFT?0-o:i,l=s/2+h;if(d===r&&l===a)return;let c=d-r,u=l-a;e.translate(c,u)}renderGeneralization(t){t.forEach((t=>{let e=t.node.dir===n.aH.LAYOUT_GROW_DIR.LEFT,{top:i,bottom:s,left:o,right:r,generalizationLineMargin:a,generalizationNodeMargin:h}=this.getNodeGeneralizationRenderBoundaries(t,"h"),d=e?o-a:r+a,l=`M ${d},${i} Q ${d+(e?-20:20)},${i+(s-i)/2} ${d},${s}`;t.generalizationLine.plot(l),t.generalizationNode.left=d+(e?-h:h)-(e?t.generalizationNode.width:0),t.generalizationNode.top=i+(s-i-t.generalizationNode.height)/2}))}renderExpandBtnRect(t,e,i,s,o){o.dir===n.aH.LAYOUT_GROW_DIR.LEFT?t.size(e,s).x(-e).y(0):t.size(e,s).x(i).y(0)}}const g=f;class x extends c.A{constructor(t={}){super(t)}doLayout(t){let e=[()=>{this.computedBaseValue()},()=>{this.computedLeftTopValue()},()=>{this.adjustLeftTopValue()},()=>{t(this.root)}];(0,u.aS)(e)}computedBaseValue(){(0,u.GG)(this.renderer.renderTree,null,((t,e,i,n)=>{let s=this.createNode(t,e,i,n);if(i?this.setNodeCenter(s):e._node.isRoot&&(s.top=e._node.top+e._node.height+this.getMarginX(n)),!t.data.expand)return!0}),((t,e,i,n)=>{if(i){let e=!1===t.data.expand?0:t._node.children.length;t._node.childrenAreaWidth=e?t._node.children.reduce(((t,e)=>t+e.width),0)+(e+1)*this.getMarginX(n+1):0}}),!0,0)}computedLeftTopValue(){(0,u.GG)(this.root,null,((t,e,i,n)=>{if(t.getData("expand")&&t.children&&t.children.length){let e=this.getMarginX(n+1),s=this.getMarginY(n+1);if(i){let i=t.left+t.width/2-t.childrenAreaWidth/2+e;t.children.forEach((t=>{t.left=i,i+=t.width+e}))}else{let e=t.top+this.getNodeHeightWithGeneralization(t)+s+(this.getNodeActChildrenLength(t)>0?t.expandBtnSize:0);t.children.forEach((i=>{i.left=t.left+.5*t.width,i.top=e,e+=this.getNodeHeightWithGeneralization(i)+s+(this.getNodeActChildrenLength(i)>0?i.expandBtnSize:0)}))}}}),null,!0)}adjustLeftTopValue(){(0,u.GG)(this.root,null,((t,e,i,n)=>{if(!t.getData("expand"))return;if(e&&e.isRoot){let e=this.getNodeAreaWidth(t,!0)-t.width;e>0&&this.updateBrothersLeft(t,e)}let s=t.children.length;if(e&&!e.isRoot&&s>0){let e=this.getMarginY(n+1),i=t.children.reduce(((t,e)=>t+this.getNodeHeightWithGeneralization(e)+(this.getNodeActChildrenLength(e)>0?e.expandBtnSize:0)),0)+s*e;this.updateBrothersTop(t,i)}}),((t,e,i)=>{if(i){let{right:e,left:i}=this.getNodeBoundaries(t,"h"),n=e-i,s=t.left-i-(n-t.width)/2;this.updateChildren(t.children,"left",s)}}),!0)}updateBrothersLeft(t,e){if(t.parent){let i=t.parent.children,n=(0,u._H)(t,i);i.forEach(((t,i)=>{t.hasCustomPosition()||i<=n||(t.left+=e,t.children&&t.children.length&&this.updateChildren(t.children,"left",e))})),this.updateBrothersLeft(t.parent,e)}}updateBrothersTop(t,e){if(t.parent&&!t.parent.isRoot){let i=t.parent.children,n=(0,u._H)(t,i);i.forEach(((t,i)=>{if(t.hasCustomPosition())return;let s=0;i>n&&(s=e),t.top+=s,t.children&&t.children.length&&this.updateChildren(t.children,"top",s)})),this.updateBrothersTop(t.parent,e)}}renderLine(t,e,i){if(t.children.length<=0)return[];let{left:n,top:s,width:o,height:r,expandBtnSize:a}=t;this.mindMap.opt.alwaysShowExpandBtn||(a=0);let h=t.children.length,d=this.getMarginX(t.layerIndex+1);if(t.isRoot){let a=n+o/2,l=s+r,c=.7*d,u=1/0,p=-1/0;t.children.forEach(((t,n)=>{let s=t.left+t.width/2,o=t.top;s<u&&(u=s),s>p&&(p=s);let r=this.mindMap.themeConfig.nodeUseLineStyle?` L ${t.left},${o} L ${t.left+t.width},${o}`:"",a=`M ${s},${l+c} L ${s},${l+c>o?o+t.height:o}`+r;this.setLineStyle(i,e[n],a,t)})),u=Math.min(u,a),p=Math.max(p,a);let m=this.lineDraw.path();if(t.style.line(m),m.plot(this.transformPath(`M ${a},${l} L ${a},${l+c}`)),t._lines.push(m),i&&i(m,t),h>0){let e=this.lineDraw.path();t.style.line(e),e.plot(this.transformPath(`M ${u},${l+c} L ${p},${l+c}`)),t._lines.push(e),i&&i(e,t)}}else{let n=s+r,o=-1/0,d=t.left+.3*t.width;if(t.children.forEach(((r,a)=>{let h=r.top+r.height/2;h>o&&(o=h);let l="",c=r.left,u=r.left+r.width<d,p=!1;u?c=r.left+r.width:r.left<d&&r.left+r.width>d&&(p=!0,h=r.top,o=h),h>s&&h<n?l=`M ${u?t.left:t.left+t.width},${h} L ${c},${h}`:h<n?(p&&(h=r.top+r.height,c=d),l=`M ${d},${s} L ${d},${h} L ${c},${h}`):(p&&(c=d),l=`M ${d},${h} L ${c},${h}`),l+=this.mindMap.themeConfig.nodeUseLineStyle?` L ${c},${h-r.height/2} L ${c},${h+r.height/2}`:"",this.setLineStyle(i,e[a],l,r)})),h>0){let e=this.lineDraw.path();a=h>0?a:0,t.style.line(e),o<n+a?e.hide():(e.plot(this.transformPath(`M ${d},${n+a} L ${d},${o}`)),e.show()),t._lines.push(e),i&&i(e,t)}}}renderExpandBtn(t,e){let{width:i,height:n,expandBtnSize:s,isRoot:o}=t;if(!o){let{translateX:t,translateY:o}=e.transform();e.translate(.3*i-s/2-t,n+s/2-o)}}renderGeneralization(t){t.forEach((t=>{let{top:e,bottom:i,right:n,generalizationLineMargin:s,generalizationNodeMargin:o}=this.getNodeGeneralizationRenderBoundaries(t,"h"),r=n+s,a=`M ${r},${e} Q ${r+20},${e+(i-e)/2} ${n+s},${i}`;t.generalizationLine.plot(this.transformPath(a)),t.generalizationNode.left=n+o,t.generalizationNode.top=e+(i-e-t.generalizationNode.height)/2}))}renderExpandBtnRect(t,e,i,n,s){t.size(i,e).x(0).y(n)}}const v=x;class y extends c.A{constructor(t={}){super(t)}doLayout(t){let e=[()=>{this.computedBaseValue()},()=>{this.computedLeftValue()},()=>{this.adjustLeftValue()},()=>{t(this.root)}];(0,u.aS)(e)}computedBaseValue(){(0,u.GG)(this.renderer.renderTree,null,((t,e,i,n)=>{let s=this.createNode(t,e,i,n);if(i?this.setNodeCenter(s):s.top=e._node.top+e._node.height+this.getMarginX(n),!t.data.expand)return!0}),((t,e,i,n)=>{let s=!1===t.data.expand?0:t._node.children.length;t._node.childrenAreaWidth=s?t._node.children.reduce(((t,e)=>t+e.width),0)+(s+1)*this.getMarginY(n+1):0;let o=t._node.checkHasGeneralization()?t._node._generalizationNodeWidth+this.getMarginY(n+1):0;t._node.childrenAreaWidth2=Math.max(t._node.childrenAreaWidth,o)}),!0,0)}computedLeftValue(){(0,u.GG)(this.root,null,((t,e,i,n)=>{if(t.getData("expand")&&t.children&&t.children.length){let e=this.getMarginY(n+1),i=t.left+t.width/2-t.childrenAreaWidth/2+e;t.children.forEach((t=>{t.left=i,i+=t.width+e}))}}),null,!0)}adjustLeftValue(){(0,u.GG)(this.root,null,((t,e,i,n)=>{if(!t.getData("expand"))return;let s=t.childrenAreaWidth2-2*this.getMarginY(n+1)-t.width;s>0&&this.updateBrothers(t,s/2)}),null,!0)}updateBrothers(t,e){if(t.parent){let i=t.parent.children,n=(0,u._H)(t,i);i.forEach(((t,i)=>{if(t.hasCustomPosition())return;let s=0;i<n?s=-e:i>n&&(s=e),t.left+=s,t.children&&t.children.length&&this.updateChildren(t.children,"left",s)})),this.updateBrothers(t.parent,e)}}renderLine(t,e,i,n){"direct"===n?this.renderLineDirect(t,e,i):this.renderLineStraight(t,e,i)}renderLineDirect(t,e,i){if(t.children.length<=0)return[];let{left:n,top:s,width:o,height:r}=t;const{nodeUseLineStyle:a}=this.mindMap.themeConfig;let h=n+o/2,d=s+r;t.children.forEach(((t,n)=>{let s=t.left+t.width/2,o=t.top,r=a?` L ${t.left},${o} L ${t.left+t.width},${o}`:"",l=`M ${h},${d} L ${s},${o}`+r;this.setLineStyle(i,e[n],l,t)}))}renderLineStraight(t,e,i){if(t.children.length<=0)return[];let{left:n,top:s,width:o,height:r,expandBtnSize:a,isRoot:h}=t;this.mindMap.opt.alwaysShowExpandBtn||(a=0);let d=n+o/2,l=s+r,c=.7*this.getMarginX(t.layerIndex+1),u=1/0,p=-1/0,m=t.children.length;t.children.forEach(((t,n)=>{let s=t.left+t.width/2,o=l+c>t.top?t.top+t.height:t.top;s<u&&(u=s),s>p&&(p=s);let r=this.mindMap.themeConfig.nodeUseLineStyle?` L ${t.left},${o} L ${t.left+t.width},${o}`:"",a=`M ${s},${l+c} L ${s},${o}`+r;this.setLineStyle(i,e[n],a,t)})),u=Math.min(d,u),p=Math.max(d,p);let f=this.lineDraw.path();if(t.style.line(f),a=m>0&&!h?a:0,f.plot(this.transformPath(`M ${d},${l+a} L ${d},${l+c}`)),t._lines.push(f),i&&i(f,t),m>0){let e=this.lineDraw.path();t.style.line(e),e.plot(this.transformPath(`M ${u},${l+c} L ${p},${l+c}`)),t._lines.push(e),i&&i(e,t)}}renderExpandBtn(t,e){let{width:i,height:n,expandBtnSize:s}=t,{translateX:o,translateY:r}=e.transform();e.translate(i/2-s/2-o,n+s/2-r)}renderGeneralization(t){t.forEach((t=>{let{bottom:e,left:i,right:n,generalizationLineMargin:s,generalizationNodeMargin:o}=this.getNodeGeneralizationRenderBoundaries(t,"v"),r=e+s,a=`M ${i},${r} Q ${i+(n-i)/2},${r+20} ${n},${e+s}`;t.generalizationLine.plot(this.transformPath(a)),t.generalizationNode.top=e+o,t.generalizationNode.left=i+(n-i-t.generalizationNode.width)/2}))}renderExpandBtnRect(t,e,i,n,s){t.size(i,e).x(0).y(n)}}const M=y;class w extends c.A{constructor(t={},e){super(t),this.layout=e}doLayout(t){let e=[()=>{this.computedBaseValue()},()=>{this.computedLeftTopValue()},()=>{this.adjustLeftTopValue()},()=>{t(this.root)}];(0,u.aS)(e)}computedBaseValue(){(0,u.GG)(this.renderer.renderTree,null,((t,e,i,s,o)=>{let r=this.createNode(t,e,i,s);if(i?this.setNodeCenter(r):(this.layout===n.aH.LAYOUT.TIMELINE2?e._node.dir?r.dir=e._node.dir:r.dir=o%2==0?n.aH.LAYOUT_GROW_DIR.BOTTOM:n.aH.LAYOUT_GROW_DIR.TOP:r.dir="",e._node.isRoot&&(r.top=e._node.top+(t._node.height>e._node.height?-(t._node.height-e._node.height)/2:(e._node.height-t._node.height)/2))),!t.data.expand)return!0}),null,!0,0)}computedLeftTopValue(){(0,u.GG)(this.root,null,((t,e,i,n,s)=>{if(t.getData("expand")&&t.children&&t.children.length){let e=this.getMarginX(n+1),s=this.getMarginY(n+1);if(i){let i=t.left+t.width+e;t.children.forEach((t=>{t.left=i,i+=t.width+e}))}else{let e=t.top+t.height+s+(this.getNodeActChildrenLength(t)>0?t.expandBtnSize:0);t.children.forEach((i=>{i.left=t.left+.5*t.width,i.top=e,e+=i.height+s+(this.getNodeActChildrenLength(i)>0?i.expandBtnSize:0)}))}}}),null,!0)}adjustLeftTopValue(){(0,u.GG)(this.root,null,((t,e,i,n)=>{if(!t.getData("expand"))return;t.isRoot&&this.updateBrothersLeft(t);let s=t.children.length;if(e&&!e.isRoot&&s>0){let e=this.getMarginY(n+1),i=t.children.reduce(((t,e)=>t+e.height+(this.getNodeActChildrenLength(e)>0?e.expandBtnSize:0)),0)+s*e;this.updateBrothersTop(t,i)}}),((t,e,i,s)=>{e&&e.isRoot&&t.dir===n.aH.LAYOUT_GROW_DIR.TOP&&t.children.forEach((e=>{let i=this.getNodeAreaHeight(e),n=e.top;e.top=t.top-(e.top-t.top)-i+t.height,this.updateChildren(e.children,"top",e.top-n)}))}),!0)}getNodeAreaHeight(t){let e=0,i=t=>{e+=t.height+(this.getNodeActChildrenLength(t)>0?t.expandBtnSize:0)+this.getMarginY(t.layerIndex),t.children.length&&t.children.forEach((t=>{i(t)}))};return i(t),e}updateBrothersLeft(t){let e=t.children,i=0;e.forEach((t=>{t.left+=i,t.children&&t.children.length&&this.updateChildren(t.children,"left",i);let{left:e,right:n}=this.getNodeBoundaries(t,"h"),s=n-e-t.width;s>0&&(i+=s)}))}updateBrothersTop(t,e){if(t.parent&&!t.parent.isRoot){let i=t.parent.children,n=(0,u._H)(t,i);i.forEach(((t,i)=>{if(t.hasCustomPosition())return;let s=0;i>n&&(s=e),t.top+=s,t.children&&t.children.length&&this.updateChildren(t.children,"top",s)})),this.updateBrothersTop(t.parent,e)}}renderLine(t,e,i){if(t.children.length<=0)return[];let{left:s,top:o,width:r,height:a,expandBtnSize:h}=t;this.mindMap.opt.alwaysShowExpandBtn||(h=0);let d=t.children.length;if(t.isRoot){let n=t;t.children.forEach(((s,o)=>{let r=n.left+n.width,a=s.left,h=t.top+t.height/2,d=`M ${r},${h} L ${a},${h}`;this.setLineStyle(i,e[o],d,s),n=s}))}else{let s=-1/0,r=1/0,l=t.left+.3*t.width;if(t.children.forEach(((t,n)=>{let o=t.top+t.height/2;o>s&&(s=o),o<r&&(r=o);let a=`M ${l},${o} L ${t.left},${o}`;this.setLineStyle(i,e[n],a,t)})),d>0){let e=this.lineDraw.path();h=d>0?h:0,t.parent&&t.parent.isRoot&&t.dir===n.aH.LAYOUT_GROW_DIR.TOP?e.plot(this.transformPath(`M ${l},${o} L ${l},${r}`)):e.plot(this.transformPath(`M ${l},${o+a+h} L ${l},${s}`)),t.style.line(e),t._lines.push(e),i&&i(e,t)}}}renderExpandBtn(t,e){let{width:i,height:s,expandBtnSize:o,isRoot:r}=t;if(!r){let{translateX:r,translateY:a}=e.transform();t.parent&&t.parent.isRoot&&t.dir===n.aH.LAYOUT_GROW_DIR.TOP?e.translate(.3*i-o/2-r,-o/2-a):e.translate(.3*i-o/2-r,s+o/2-a)}}renderGeneralization(t){t.forEach((t=>{let{top:e,bottom:i,right:n,generalizationLineMargin:s,generalizationNodeMargin:o}=this.getNodeGeneralizationRenderBoundaries(t,"h"),r=n+s,a=`M ${r},${e} Q ${r+20},${e+(i-e)/2} ${n+s},${i}`;t.generalizationLine.plot(this.transformPath(a)),t.generalizationNode.left=n+o,t.generalizationNode.top=e+(i-e-t.generalizationNode.height)/2}))}renderExpandBtnRect(t,e,i,s,o){if(this.layout===n.aH.LAYOUT.TIMELINE)t.size(i,e).x(0).y(s);else{let r="";r=o.dir===n.aH.LAYOUT_GROW_DIR.TOP&&1===o.layerIndex?n.aH.LAYOUT_GROW_DIR.TOP:n.aH.LAYOUT_GROW_DIR.BOTTOM,r===n.aH.LAYOUT_GROW_DIR.TOP?t.size(i,e).x(0).y(-e):t.size(i,e).x(0).y(s)}}}const _=w;class N extends c.A{constructor(t={},e){super(t),this.layout=e}doLayout(t){let e=[()=>{this.computedBaseValue()},()=>{this.computedTopValue()},()=>{this.adjustLeftTopValue()},()=>{t(this.root)}];(0,u.aS)(e)}computedBaseValue(){(0,u.GG)(this.renderer.renderTree,null,((t,e,i,s,o)=>{let r=this.createNode(t,e,i,s);if(i?this.setNodeCenter(r):(e._node.dir?r.dir=e._node.dir:r.dir=o%2==0?n.aH.LAYOUT_GROW_DIR.RIGHT:n.aH.LAYOUT_GROW_DIR.LEFT,e._node.isRoot?r.left=e._node.left+(t._node.width>e._node.width?-(t._node.width-e._node.width)/2:(e._node.width-t._node.width)/2):r.left=r.dir===n.aH.LAYOUT_GROW_DIR.RIGHT?e._node.left+e._node.width+this.getMarginX(s):e._node.left-this.getMarginX(s)-r.width),!t.data.expand)return!0}),((t,e,i,n)=>{if(i)return;let s=!1===t.data.expand?0:t._node.children.length;t._node.childrenAreaHeight=s?t._node.children.reduce(((t,e)=>t+e.height),0)+(s+1)*this.getMarginY(n+1):0}),!0,0)}computedTopValue(){(0,u.GG)(this.root,null,((t,e,i,n,s)=>{if(t.getData("expand")&&t.children&&t.children.length){let e=this.getMarginY(n+1);if(i){let i=t.top+t.height+e;t.children.forEach((t=>{t.top=i,i+=t.height+e}))}else{let e=this.getMarginY(n+1),i=t.top+t.height/2+e-t.childrenAreaHeight/2;t.children.forEach((t=>{t.top=i,i+=t.height+e}))}}}),null,!0)}adjustLeftTopValue(){(0,u.GG)(this.root,null,((t,e,i,n)=>{if(!t.getData("expand"))return;if(i)return;let s=2*this.getMarginY(n+1)+t.height,o=t.childrenAreaHeight-s;o>0&&this.updateBrothers(t,o/2)}),null,!0)}updateBrothers(t,e){if(t.parent){let i=t.parent.children,n=(0,u._H)(t,i);i.forEach(((i,s)=>{if(i.hasCustomPosition())return;if(!t.parent.isRoot&&i.uid===t.uid)return;let o=0;t.parent.isRoot?o=s<n?0:s>n?2*e:e:s<n?o=-e:s>n&&(o=e),i.top+=o,i.children&&i.children.length&&this.updateChildren(i.children,"top",o)})),this.updateBrothers(t.parent,e)}}updateBrothersTop(t,e){if(t.parent&&!t.parent.isRoot){let i=t.parent.children,n=(0,u._H)(t,i);i.forEach(((t,i)=>{if(t.hasCustomPosition())return;let s=0;i>n&&(s=e),t.top+=s,t.children&&t.children.length&&this.updateChildren(t.children,"top",s)})),this.updateBrothersTop(t.parent,e)}}renderLine(t,e,i,n){"curve"===n?this.renderLineCurve(t,e,i):"direct"===n?this.renderLineDirect(t,e,i):this.renderLineStraight(t,e,i)}renderLineStraight(t,e,i){if(t.children.length<=0)return[];let{expandBtnSize:s}=t;if(this.mindMap.opt.alwaysShowExpandBtn||(s=0),t.isRoot){let n=t;t.children.forEach(((s,o)=>{let r=n.top+n.height,a=s.top,h=t.left+t.width/2,d=`M ${h},${r} L ${h},${a}`;this.setLineStyle(i,e[o],d,s),n=s}))}else if(t.dir===n.aH.LAYOUT_GROW_DIR.RIGHT){let n=t.left+t.width,o=t.top+t.height/2,r=.6*(this.getMarginX(t.layerIndex+1)-s);t.children.forEach(((t,s)=>{let a=t.left,h=t.top+t.height/2,d=this.createFoldLine([[n,o],[n+r,o],[n+r,h],[a,h]]);this.setLineStyle(i,e[s],d,t)}))}else{let n=t.left,o=t.top+t.height/2,r=.6*(this.getMarginX(t.layerIndex+1)-s);t.children.forEach(((t,s)=>{let a=t.left+t.width,h=t.top+t.height/2,d=this.createFoldLine([[n,o],[n-r,o],[n-r,h],[a,h]]);this.setLineStyle(i,e[s],d,t)}))}}renderLineDirect(t,e,i){if(t.children.length<=0)return[];let{left:s,top:o,width:r,height:a,expandBtnSize:h}=t;this.mindMap.opt.alwaysShowExpandBtn||(h=0),t.children.forEach(((d,l)=>{if(t.isRoot){let n=t;t.children.forEach(((s,o)=>{let r=n.top+n.height,a=s.top,h=t.left+t.width/2,d=`M ${h},${r} L ${h},${a}`;this.setLineStyle(i,e[o],d,s),n=s}))}else{let t=`M ${d.dir===n.aH.LAYOUT_GROW_DIR.LEFT?s-h:s+r+h},${o+a/2} L ${d.dir===n.aH.LAYOUT_GROW_DIR.LEFT?d.left+d.width:d.left},${d.top+d.height/2}`;this.setLineStyle(i,e[l],t,d)}}))}renderLineCurve(t,e,i){if(t.children.length<=0)return[];let{left:s,top:o,width:r,height:a,expandBtnSize:h}=t;this.mindMap.opt.alwaysShowExpandBtn||(h=0),t.children.forEach(((d,l)=>{if(t.isRoot){let n=t;t.children.forEach(((s,o)=>{let r=n.top+n.height,a=s.top,h=t.left+t.width/2,d=`M ${h},${r} L ${h},${a}`;this.setLineStyle(i,e[o],d,s),n=s}))}else{let t=d.dir===n.aH.LAYOUT_GROW_DIR.LEFT?s-h:s+r+h,c=o+a/2,u=d.dir===n.aH.LAYOUT_GROW_DIR.LEFT?d.left+d.width:d.left,p=d.top+d.height/2,m=this.cubicBezierPath(t,c,u,p);this.setLineStyle(i,e[l],m,d)}}))}renderExpandBtn(t,e){let{width:i,height:s,expandBtnSize:o,isRoot:r}=t;if(!r){let{translateX:r,translateY:a}=e.transform();t.dir===n.aH.LAYOUT_GROW_DIR.RIGHT?e.translate(i-r,s/2-a):e.translate(-o-r,s/2-a)}}renderGeneralization(t){t.forEach((t=>{let e=t.node.dir===n.aH.LAYOUT_GROW_DIR.LEFT,{top:i,bottom:s,left:o,right:r,generalizationLineMargin:a,generalizationNodeMargin:h}=this.getNodeGeneralizationRenderBoundaries(t,"h"),d=e?o-a:r+a,l=`M ${d},${i} Q ${d+(e?-20:20)},${i+(s-i)/2} ${d},${s}`;t.generalizationLine.plot(this.transformPath(l)),t.generalizationNode.left=d+(e?-h:h)-(e?t.generalizationNode.width:0),t.generalizationNode.top=i+(s-i-t.generalizationNode.height)/2}))}renderExpandBtnRect(t,e,i,s,o){o.dir===n.aH.LAYOUT_GROW_DIR.LEFT?t.size(e,s).x(-e).y(0):t.size(e,s).x(i).y(0)}}const E=N,C={top:{renderExpandBtn({node:t,btn:e,expandBtnSize:i,translateX:n,translateY:s,width:o,height:r}){t.parent&&t.parent.isRoot?e.translate(.3*o-i/2-n,-i/2-s):e.translate(.3*o-i/2-n,r+i/2-s)},renderLine({node:t,line:e,top:i,x:n,lineLength:s,height:o,expandBtnSize:r,maxy:a,ctx:h}){t.parent&&t.parent.isRoot?e.plot(h.transformPath(`M ${n},${i} L ${n+s},${i-Math.tan((0,u.pu)(h.mindMap.opt.fishboneDeg))*s}`)):e.plot(h.transformPath(`M ${n},${i+o+r} L ${n},${a}`))},computedLeftTopValue({layerIndex:t,node:e,ctx:i}){if(t>=1&&e.children){let n=i.getMarginY(t+1),s=e.left+e.width*i.childIndent,o=e.top+e.height+(i.getNodeActChildrenLength(e)>0?e.expandBtnSize:0)+n;e.children.forEach((t=>{t.left=s,t.top+=o,o+=t.height+(i.getNodeActChildrenLength(t)>0?t.expandBtnSize:0)+n}))}},adjustLeftTopValueBefore({node:t,parent:e,ctx:i,layerIndex:n}){let s=t.children.length,o=i.getMarginY(n+1);if(e&&!e.isRoot&&s>0){let e=t.children.reduce(((t,e)=>t+e.height+(i.getNodeActChildrenLength(e)>0?e.expandBtnSize:0)+o),0);i.updateBrothersTop(t,e)}},adjustLeftTopValueAfter({parent:t,node:e,ctx:i}){if(t&&t.isRoot){let t=i.getMarginY(e.layerIndex+1),n=e.expandBtnSize+t;e.children.forEach((t=>{let s=i.getNodeAreaHeight(t),o=t.top,r=t.left;t.top=e.top-(t.top-e.top)-s+e.height,t.left=e.left+e.width*i.indent+(s+n)/Math.tan((0,u.pu)(i.mindMap.opt.fishboneDeg)),n+=s,i.updateChildrenPro(t.children,{top:t.top-o,left:t.left-r})}))}}},bottom:{renderExpandBtn({node:t,btn:e,expandBtnSize:i,translateX:n,translateY:s,width:o,height:r}){t.parent&&t.parent.isRoot?e.translate(.3*o-i/2-n,r+i/2-s):e.translate(.3*o-i/2-n,-i/2-s)},renderLine({node:t,line:e,top:i,x:n,lineLength:s,height:o,miny:r,ctx:a}){t.parent&&t.parent.isRoot?e.plot(a.transformPath(`M ${n},${i+o} L ${n+s},${i+o+Math.tan((0,u.pu)(a.mindMap.opt.fishboneDeg))*s}`)):e.plot(a.transformPath(`M ${n},${i} L ${n},${r}`))},computedLeftTopValue({layerIndex:t,node:e,ctx:i}){let n=i.getMarginY(t+1);if(1===t&&e.children){let t=e.left+e.width*i.childIndent,s=e.top+e.height+(i.getNodeActChildrenLength(e)>0?e.expandBtnSize:0)+n;e.children.forEach((e=>{e.left=t,e.top=s+(i.getNodeActChildrenLength(e)>0?e.expandBtnSize:0),s+=e.height+(i.getNodeActChildrenLength(e)>0?e.expandBtnSize:0)+n}))}if(t>1&&e.children){let t=e.left+e.width*i.childIndent,s=e.top-(i.getNodeActChildrenLength(e)>0?e.expandBtnSize:0)-n;e.children.forEach((e=>{e.left=t,e.top=s-e.height,s-=e.height+(i.getNodeActChildrenLength(e)>0?e.expandBtnSize:0)+n}))}},adjustLeftTopValueBefore({node:t,ctx:e,layerIndex:i}){let n=e.getMarginY(i+1),s=t.children.length;if(i>2&&s>0){let i=t.children.reduce(((t,i)=>t+i.height+(e.getNodeActChildrenLength(i)>0?i.expandBtnSize:0)+n),0);e.updateBrothersTop(t,-i)}},adjustLeftTopValueAfter({parent:t,node:e,ctx:i}){if(t&&t.isRoot){let t=i.getMarginY(e.layerIndex+1),n=0,s=e.expandBtnSize;e.children.forEach((o=>{let r=i.getNodeActChildrenLength(o)>0,a=i.getNodeAreaHeight(o),h=r?a-o.height-(r?o.expandBtnSize:0):0;h-=r?t:0;let d=n+h,l=o.left;o.top+=d,o.left=e.left+e.width*i.indent+(a+s)/Math.tan((0,u.pu)(i.mindMap.opt.fishboneDeg)),n+=h,s+=a,i.updateChildrenPro(o.children,{top:d,left:o.left-l})}))}}}};class b extends c.A{constructor(t={}){super(t),this.indent=.3,this.childIndent=.5}doLayout(t){let e=[()=>{this.computedBaseValue()},()=>{this.computedLeftTopValue()},()=>{this.adjustLeftTopValue()},()=>{t(this.root)}];(0,u.aS)(e)}computedBaseValue(){(0,u.GG)(this.renderer.renderTree,null,((t,e,i,s,o)=>{let r=this.createNode(t,e,i,s);if(i)this.setNodeCenter(r);else if(e._node.dir?r.dir=e._node.dir:r.dir=o%2==0?n.aH.LAYOUT_GROW_DIR.TOP:n.aH.LAYOUT_GROW_DIR.BOTTOM,e._node.isRoot){let t=this.getMarginY(s);this.checkIsTop(r)?r.top=e._node.top-r.height-t:r.top=e._node.top+e._node.height+t}if(!t.data.expand)return!0}),null,!0,0)}computedLeftTopValue(){(0,u.GG)(this.root,null,((t,e,i,n)=>{if(t.isRoot){let e=this.getMarginX(n+1),i=t.left+t.width+t.height+e,s=t.left+t.width+t.height+e;t.children.forEach((t=>{this.checkIsTop(t)?(t.left=i,i+=t.width+e):(t.left=s+20,s+=t.width+e)}))}let s={layerIndex:n,node:t,ctx:this};this.checkIsTop(t)?C.top.computedLeftTopValue(s):C.bottom.computedLeftTopValue(s)}),null,!0)}adjustLeftTopValue(){(0,u.GG)(this.root,null,((t,e,i,n)=>{if(!t.getData("expand"))return;let s={node:t,parent:e,layerIndex:n,ctx:this};this.checkIsTop(t)?C.top.adjustLeftTopValueBefore(s):C.bottom.adjustLeftTopValueBefore(s)}),((t,e)=>{let i={parent:e,node:t,ctx:this};if(this.checkIsTop(t)?C.top.adjustLeftTopValueAfter(i):C.bottom.adjustLeftTopValueAfter(i),t.isRoot){let e=0,i=0;t.children.forEach((t=>{if(this.checkIsTop(t)){t.left+=e,this.updateChildren(t.children,"left",e);let{left:i,right:n}=this.getNodeBoundaries(t,"h");e+=n-i}else{t.left+=i,this.updateChildren(t.children,"left",i);let{left:e,right:n}=this.getNodeBoundaries(t,"h");i+=n-e}}))}}),!0)}getNodeAreaHeight(t){let e=0,i=t=>{let n=this.getMarginY(t.layerIndex);e+=t.height+(this.getNodeActChildrenLength(t)>0?t.expandBtnSize:0)+n,t.children.length&&t.children.forEach((t=>{i(t)}))};return i(t),e}updateBrothersLeft(t){let e=t.children,i=0;e.forEach((t=>{t.left+=i,t.children&&t.children.length&&this.updateChildren(t.children,"left",i);let{left:e,right:n}=this.getNodeBoundaries(t,"h"),s=n-e-t.width;s>0&&(i+=s)}))}updateBrothersTop(t,e){if(t.parent&&!t.parent.isRoot){let i=t.parent.children,n=(0,u._H)(t,i);i.forEach(((t,i)=>{if(t.hasCustomPosition())return;let s=0;i>n&&(s=e),t.top+=s,t.children&&t.children.length&&this.updateChildren(t.children,"top",s)})),this.checkIsTop(t)?this.updateBrothersTop(t.parent,e):this.updateBrothersTop(t.parent,3===t.layerIndex?0:e)}}checkIsTop(t){return t.dir===n.aH.LAYOUT_GROW_DIR.TOP}renderLine(t,e,i){if(1!==t.layerIndex&&t.children.length<=0)return[];let{top:n,height:s,expandBtnSize:o}=t;this.mindMap.opt.alwaysShowExpandBtn||(o=0);let r=t.children.length;if(t.isRoot){let e=-1/0;t.children.forEach((n=>{n.left>e&&(e=n.left);let s=this.getMarginY(n.layerIndex),o=n.left,r=t.height/2+s,a=r/Math.tan((0,u.pu)(this.mindMap.opt.fishboneDeg)),h=this.lineDraw.path();this.checkIsTop(n)?h.plot(this.transformPath(`M ${o-a},${n.top+n.height+r} L ${n.left},${n.top+n.height}`)):h.plot(this.transformPath(`M ${o-a},${n.top-r} L ${o},${n.top}`)),t.style.line(h),t._lines.push(h),i&&i(h,t)}));let n=t.top+t.height/2,s=t.height/2+this.getMarginY(t.layerIndex+1),o=this.lineDraw.path();o.plot(this.transformPath(`M ${t.left+t.width},${n} L ${e-s/Math.tan((0,u.pu)(this.mindMap.opt.fishboneDeg))},${n}`)),t.style.line(o),t._lines.push(o),i&&i(o,t)}else{let a=-1/0,h=1/0,d=-1/0,l=t.left+t.width*this.indent;if(t.children.forEach(((n,s)=>{n.left>d&&(d=n.left);let o=n.top+n.height/2;if(o>a&&(a=o),o<h&&(h=o),t.layerIndex>1){let t=`M ${l},${o} L ${n.left},${o}`;this.setLineStyle(i,e[s],t,n)}})),r>=0){let e=this.lineDraw.path();o=r>0?o:0;let c=d-t.left-t.width*this.indent;c=Math.max(c,0);let u={node:t,line:e,top:n,x:l,lineLength:c,height:s,expandBtnSize:o,maxy:a,miny:h,ctx:this};this.checkIsTop(t)?C.top.renderLine(u):C.bottom.renderLine(u),t.style.line(e),t._lines.push(e),i&&i(e,t)}}}renderExpandBtn(t,e){let{width:i,height:n,expandBtnSize:s,isRoot:o}=t;if(!o){let{translateX:o,translateY:r}=e.transform(),a={node:t,btn:e,expandBtnSize:s,translateX:o,translateY:r,width:i,height:n};this.checkIsTop(t)?C.top.renderExpandBtn(a):C.bottom.renderExpandBtn(a)}}renderGeneralization(t){t.forEach((t=>{let{top:e,bottom:i,right:n,generalizationLineMargin:s,generalizationNodeMargin:o}=this.getNodeGeneralizationRenderBoundaries(t,"h"),r=n+s,a=`M ${r},${e} Q ${r+20},${e+(i-e)/2} ${n+s},${i}`;t.generalizationLine.plot(this.transformPath(a)),t.generalizationNode.left=n+o,t.generalizationNode.top=e+(i-e-t.generalizationNode.height)/2}))}renderExpandBtnRect(t,e,i,s,o){let r="";r=o.dir===n.aH.LAYOUT_GROW_DIR.TOP?1===o.layerIndex?n.aH.LAYOUT_GROW_DIR.TOP:n.aH.LAYOUT_GROW_DIR.BOTTOM:1===o.layerIndex?n.aH.LAYOUT_GROW_DIR.BOTTOM:n.aH.LAYOUT_GROW_DIR.TOP,r===n.aH.LAYOUT_GROW_DIR.TOP?t.size(i,e).x(0).y(-e):t.size(i,e).x(0).y(s)}}const L=b;class T{constructor(t){this.renderer=t,this.mindMap=t.mindMap,this.currentNode=null,this.textEditNode=null,this.showTextEdit=!1,this.cacheEditingText="",this.hasBodyMousedown=!1,this.bindEvent()}bindEvent(){this.show=this.show.bind(this),this.onScale=this.onScale.bind(this),this.onKeydown=this.onKeydown.bind(this),this.mindMap.on("node_dblclick",((t,e,i)=>{this.show({node:t,e,isInserting:i})})),this.mindMap.on("draw_click",(()=>{this.hideEditTextBox()})),this.mindMap.on("body_mousedown",(()=>{this.hasBodyMousedown=!0})),this.mindMap.on("body_click",(()=>{this.hasBodyMousedown&&(this.hasBodyMousedown=!1,this.mindMap.opt.isEndNodeTextEditOnClickOuter&&this.hideEditTextBox())})),this.mindMap.on("svg_mousedown",(()=>{this.hideEditTextBox()})),this.mindMap.on("expand_btn_click",(()=>{this.hideEditTextBox()})),this.mindMap.on("before_node_active",(()=>{this.hideEditTextBox()})),this.mindMap.on("mousewheel",(()=>{this.mindMap.opt.mousewheelAction===n.aH.MOUSE_WHEEL_ACTION.MOVE&&this.hideEditTextBox()})),this.mindMap.keyCommand.addShortcut("F2",(()=>{this.renderer.activeNodeList.length<=0||this.show({node:this.renderer.activeNodeList[0]})})),this.mindMap.on("scale",this.onScale),this.mindMap.opt.enableAutoEnterTextEditWhenKeydown&&window.addEventListener("keydown",this.onKeydown),this.mindMap.on("beforeDestroy",(()=>{this.unBindEvent()}))}unBindEvent(){window.removeEventListener("keydown",this.onKeydown)}onKeydown(t){const e=this.mindMap.renderer.activeNodeList;if(e.length<=0||e.length>1)return;const i=e[0];i&&this.checkIsAutoEnterTextEditKey(t)&&this.show({node:i,e:t,isInserting:!1,isFromKeyDown:!0})}checkIsAutoEnterTextEditKey(t){const e=t.keyCode;return(229===e||e>=65&&e<=90||e>=48&&e<=57)&&!this.mindMap.keyCommand.hasCombinationKey(t)}registerTmpShortcut(){this.mindMap.keyCommand.addShortcut("Enter",(()=>{this.hideEditTextBox()})),this.mindMap.keyCommand.addShortcut("Tab",(()=>{this.hideEditTextBox()}))}isShowTextEdit(){return this.mindMap.richText?this.mindMap.richText.showTextEdit:this.showTextEdit}async show({node:t,isInserting:e=!1,isFromKeyDown:i=!1,isFromScale:s=!1}){if(t.isUseCustomNodeContent())return;const{beforeTextEdit:o}=this.mindMap.opt;if("function"==typeof o){let i=!1;try{i=await o(t,e)}catch(t){i=!1,this.mindMap.opt.errorHandler(n.LY.BEFORE_TEXT_EDIT_ERROR,t)}if(!i)return}this.currentNode=t;const{offsetLeft:r,offsetTop:a}=(0,u.Kd)(this.mindMap,t);this.mindMap.view.translateXY(r,a);const h=t._textData.node.node.getBoundingClientRect(),d={node:t,rect:h,isInserting:e,isFromKeyDown:i,isFromScale:s};this.mindMap.richText?this.mindMap.richText.showEditText(d):this.showEditTextBox(d)}onScale(){this.currentNode&&(this.mindMap.richText?(this.mindMap.richText.cacheEditingText=this.mindMap.richText.getEditText(),this.mindMap.richText.showTextEdit=!1):(this.cacheEditingText=this.getEditText(),this.showTextEdit=!1),this.show({node:this.currentNode,isFromScale:!0}))}showEditTextBox({node:t,rect:e,isInserting:i,isFromKeyDown:n,isFromScale:s}){if(this.showTextEdit)return;const{nodeTextEditZIndex:o,textAutoWrapWidth:r,selectTextOnEnterEditText:a}=this.mindMap.opt;if(s||this.mindMap.emit("before_show_text_edit"),this.registerTmpShortcut(),!this.textEditNode){this.textEditNode=document.createElement("div"),this.textEditNode.style.cssText="position:fixed;box-sizing: border-box;background-color:transparent;box-shadow: 0 0 20px rgba(0,0,0,.5);padding: 3px 5px;margin-left: -5px;margin-top: -3px;outline: none; word-break: break-all;color: white;",this.textEditNode.setAttribute("contenteditable",!0),this.textEditNode.addEventListener("keyup",(t=>{t.stopPropagation()})),this.textEditNode.addEventListener("click",(t=>{t.stopPropagation()})),this.textEditNode.addEventListener("mousedown",(t=>{t.stopPropagation()})),this.textEditNode.addEventListener("keydown",(t=>{this.checkIsAutoEnterTextEditKey(t)&&t.stopPropagation()})),this.textEditNode.addEventListener("paste",(t=>{const e=t.clipboardData.getData("text"),{isSmm:i,data:n}=(0,u.D1)(e);i&&n[0]&&n[0].data?(0,u.nM)(t,(0,u.TZ)(n[0].data.text)):(0,u.nM)(t)}));(this.mindMap.opt.customInnerElsAppendTo||document.body).appendChild(this.textEditNode)}const h=this.mindMap.themeConfig.fillColors,d=h[t.layerIndex%h.length];this.textEditNode.style.backgroundColor=d;let l=this.mindMap.view.scale,c=t.style.merge("lineHeight"),p=t.style.merge("fontSize"),m=(this.cacheEditingText||t.getData("text")).split(/\n/gim).map((t=>(0,u.z)(t))),f="true"===t._textData.node.attr("data-ismultiLine");t.style.domText(this.textEditNode,l,f),this.textEditNode.style.zIndex=o,this.textEditNode.innerHTML=m.join("<br>"),this.textEditNode.style.minWidth=e.width+10+"px",this.textEditNode.style.minHeight=e.height+6+"px",this.textEditNode.style.left=e.left+"px",this.textEditNode.style.top=e.top+"px",this.textEditNode.style.display="block",this.textEditNode.style.maxWidth=r*l+"px",f&&1!==c&&(this.textEditNode.style.transform=`translateY(${-(c*p-p)/2*l}px)`),this.showTextEdit=!0,i||a&&!n?(0,u.G)(this.textEditNode):(0,u.T5)(this.textEditNode),this.cacheEditingText=""}getEditText(){return(0,u.L4)(this.textEditNode.innerHTML)}async hideEditTextBox(){if(this.mindMap.richText)return this.mindMap.richText.hideEditText();if(!this.showTextEdit)return;const t=this.mindMap.opt.beforeTextSave||function(){};try{await Promise.all(this.renderer.activeNodeList.map((async e=>{let i=this.getEditText();const n=await t(e,i);if(!1!==n){if(!0===n)throw new Error("save error");this.mindMap.execCommand("SET_NODE_TEXT",e,i),e.isGeneralization&&e.generalizationBelongNode.updateGeneralization(),this.mindMap.render()}}))),this.mindMap.emit("hide_text_edit",this.textEditNode,this.renderer.activeNodeList,this.currentNode),this.currentNode=null,this.textEditNode.style.display="none",this.textEditNode.innerHTML="",this.textEditNode.style.fontFamily="inherit",this.textEditNode.style.fontSize="inherit",this.textEditNode.style.fontWeight="normal",this.textEditNode.style.transform="translateY(0)",this.showTextEdit=!1}catch(t){console.log(t)}}getCurrentEditNode(){return this.mindMap.richText?this.mindMap.richText.node:this.currentNode}}var D=i(388746);const A={paddingX:15,paddingY:5,imgMaxWidth:100,imgMaxHeight:100,iconSize:20,lineWidth:1,lineColor:"#549688",lineDasharray:"none",lineStyle:"straight",rootLineKeepSameInCurve:!0,rootLineStartPositionKeepSameInCurve:!1,lineRadius:5,showLineMarker:!1,generalizationLineWidth:1,generalizationLineColor:"#549688",generalizationLineMargin:0,generalizationNodeMargin:20,associativeLineWidth:2,associativeLineColor:"rgb(51, 51, 51)",associativeLineActiveWidth:8,associativeLineActiveColor:"rgba(2, 167, 240, 1)",associativeLineTextColor:"rgb(51, 51, 51)",associativeLineTextFontSize:14,associativeLineTextLineHeight:1.2,associativeLineTextFontFamily:"微软雅黑, Microsoft YaHei",backgroundColor:"#fafafa",backgroundImage:"none",backgroundRepeat:"no-repeat",backgroundPosition:"center center",backgroundSize:"cover",nodeUseLineStyle:!1,root:{shape:"rectangle",fillColor:"#549688",fontFamily:"微软雅黑, Microsoft YaHei",color:"#fff",fontSize:16,fontWeight:"bold",fontStyle:"normal",lineHeight:1.5,borderColor:"transparent",borderWidth:0,borderDasharray:"none",borderRadius:5,textDecoration:"none",gradientStyle:!1,startColor:"#549688",endColor:"#fff",lineMarkerDir:"end"},second:{shape:"rectangle",marginX:100,marginY:40,fillColor:"#fff",fontFamily:"微软雅黑, Microsoft YaHei",color:"#565656",fontSize:16,fontWeight:"noraml",fontStyle:"normal",lineHeight:1.5,borderColor:"#549688",borderWidth:1,borderDasharray:"none",borderRadius:5,textDecoration:"none",gradientStyle:!1,startColor:"#549688",endColor:"#fff",lineMarkerDir:"end"},node:{shape:"rectangle",marginX:50,marginY:0,fillColor:"transparent",fontFamily:"微软雅黑, Microsoft YaHei",color:"#6a6d6c",fontSize:14,fontWeight:"noraml",fontStyle:"normal",lineHeight:1.5,borderColor:"transparent",borderWidth:0,borderRadius:5,borderDasharray:"none",textDecoration:"none",gradientStyle:!1,startColor:"#549688",endColor:"#fff",lineMarkerDir:"end"},generalization:{shape:"rectangle",marginX:100,marginY:40,fillColor:"#fff",fontFamily:"微软雅黑, Microsoft YaHei",color:"#565656",fontSize:16,fontWeight:"noraml",fontStyle:"normal",lineHeight:1.5,borderColor:"#549688",borderWidth:1,borderDasharray:"none",borderRadius:5,textDecoration:"none",gradientStyle:!1,startColor:"#549688",endColor:"#fff"}},S=["lineWidth","lineColor","lineDasharray","lineStyle","generalizationLineWidth","generalizationLineColor","associativeLineWidth","associativeLineColor","associativeLineActiveWidth","associativeLineActiveColor","associativeLineTextColor","associativeLineTextFontSize","associativeLineTextLineHeight","associativeLineTextFontFamily","backgroundColor","backgroundImage","backgroundRepeat","backgroundPosition","backgroundSize","rootLineKeepSameInCurve","rootLineStartPositionKeepSameInCurve","showLineMarker","gradientStyle","lineRadius","startColor","endColor"],z=["lineColor","lineDasharray","lineWidth","lineMarkerDir"];var R=i(99425);const O={[n.aH.LAYOUT.LOGICAL_STRUCTURE]:m,[n.aH.LAYOUT.LOGICAL_STRUCTURE_LEFT]:m,[n.aH.LAYOUT.MIND_MAP]:g,[n.aH.LAYOUT.CATALOG_ORGANIZATION]:v,[n.aH.LAYOUT.ORGANIZATION_STRUCTURE]:M,[n.aH.LAYOUT.TIMELINE]:_,[n.aH.LAYOUT.TIMELINE2]:_,[n.aH.LAYOUT.VERTICAL_TIMELINE]:E,[n.aH.LAYOUT.FISHBONE]:L};const I=class{constructor(t={}){this.opt=t,this.mindMap=t.mindMap,this.themeConfig=this.mindMap.themeConfig,this.renderTree=this.mindMap.opt.data?l()({},this.mindMap.opt.data):null,this.reRender=!1,this.isRendering=!1,this.hasWaitRendering=!1,this.waitRenderingParams=[],this.nodeCache={},this.lastNodeCache={},this.renderSource="",this.activeNodeList=[],this.root=null,this.textEdit=new T(this),this.lastBeingCopyData=null,this.beingCopyData=null,this.beingPasteText="",this.beingPasteImgSize=0,this.currentBeingPasteType="",this.highlightBoxNode=null,this.lastActiveNode=null,this.lastActiveNodeList=[],this.setLayout(),this.bindEvent(),this.registerCommands(),this.registerShortcutKeys()}setLayout(){this.layout=new(O[this.mindMap.opt.layout]?O[this.mindMap.opt.layout]:O[n.aH.LAYOUT.LOGICAL_STRUCTURE])(this,this.mindMap.opt.layout)}setData(t){this.mindMap.richText?this.renderTree=t?this.mindMap.richText.handleSetData(t):null:this.renderTree=t}bindEvent(){this.mindMap.on("draw_click",(t=>{this.clearActiveNodeListOnDrawClick(t,"click")})),this.mindMap.on("contextmenu",(t=>{this.clearActiveNodeListOnDrawClick(t,"contextmenu")})),this.mindMap.svg.on("dblclick",(()=>{this.mindMap.opt.enableDblclickBackToRootNode&&this.setRootNodeCenter()}))}registerCommands(){this.selectAll=this.selectAll.bind(this),this.mindMap.command.add("SELECT_ALL",this.selectAll),this.back=this.back.bind(this),this.mindMap.command.add("BACK",this.back),this.forward=this.forward.bind(this),this.mindMap.command.add("FORWARD",this.forward),this.insertNode=this.insertNode.bind(this),this.mindMap.command.add("INSERT_NODE",this.insertNode),this.insertMultiNode=this.insertMultiNode.bind(this),this.mindMap.command.add("INSERT_MULTI_NODE",this.insertMultiNode),this.insertChildNode=this.insertChildNode.bind(this),this.mindMap.command.add("INSERT_CHILD_NODE",this.insertChildNode),this.insertMultiChildNode=this.insertMultiChildNode.bind(this),this.mindMap.command.add("INSERT_MULTI_CHILD_NODE",this.insertMultiChildNode),this.insertParentNode=this.insertParentNode.bind(this),this.mindMap.command.add("INSERT_PARENT_NODE",this.insertParentNode),this.upNode=this.upNode.bind(this),this.mindMap.command.add("UP_NODE",this.upNode),this.downNode=this.downNode.bind(this),this.mindMap.command.add("DOWN_NODE",this.downNode),this.moveUpOneLevel=this.moveUpOneLevel.bind(this),this.mindMap.command.add("MOVE_UP_ONE_LEVEL",this.moveUpOneLevel),this.insertAfter=this.insertAfter.bind(this),this.mindMap.command.add("INSERT_AFTER",this.insertAfter),this.insertBefore=this.insertBefore.bind(this),this.mindMap.command.add("INSERT_BEFORE",this.insertBefore),this.moveNodeTo=this.moveNodeTo.bind(this),this.mindMap.command.add("MOVE_NODE_TO",this.moveNodeTo),this.removeNode=this.removeNode.bind(this),this.mindMap.command.add("REMOVE_NODE",this.removeNode),this.removeCurrentNode=this.removeCurrentNode.bind(this),this.mindMap.command.add("REMOVE_CURRENT_NODE",this.removeCurrentNode),this.pasteNode=this.pasteNode.bind(this),this.mindMap.command.add("PASTE_NODE",this.pasteNode),this.cutNode=this.cutNode.bind(this),this.mindMap.command.add("CUT_NODE",this.cutNode),this.setNodeStyle=this.setNodeStyle.bind(this),this.mindMap.command.add("SET_NODE_STYLE",this.setNodeStyle),this.setNodeStyles=this.setNodeStyles.bind(this),this.mindMap.command.add("SET_NODE_STYLES",this.setNodeStyles),this.setNodeActive=this.setNodeActive.bind(this),this.mindMap.command.add("SET_NODE_ACTIVE",this.setNodeActive),this.clearActiveNode=this.clearActiveNode.bind(this),this.mindMap.command.add("CLEAR_ACTIVE_NODE",this.clearActiveNode),this.setNodeExpand=this.setNodeExpand.bind(this),this.mindMap.command.add("SET_NODE_EXPAND",this.setNodeExpand),this.expandAllNode=this.expandAllNode.bind(this),this.mindMap.command.add("EXPAND_ALL",this.expandAllNode),this.unexpandAllNode=this.unexpandAllNode.bind(this),this.mindMap.command.add("UNEXPAND_ALL",this.unexpandAllNode),this.expandToLevel=this.expandToLevel.bind(this),this.mindMap.command.add("UNEXPAND_TO_LEVEL",this.expandToLevel),this.setNodeData=this.setNodeData.bind(this),this.mindMap.command.add("SET_NODE_DATA",this.setNodeData),this.setNodeText=this.setNodeText.bind(this),this.mindMap.command.add("SET_NODE_TEXT",this.setNodeText),this.setNodeImage=this.setNodeImage.bind(this),this.mindMap.command.add("SET_NODE_IMAGE",this.setNodeImage),this.setNodeIcon=this.setNodeIcon.bind(this),this.mindMap.command.add("SET_NODE_ICON",this.setNodeIcon),this.setNodeHyperlink=this.setNodeHyperlink.bind(this),this.mindMap.command.add("SET_NODE_HYPERLINK",this.setNodeHyperlink),this.setNodeNote=this.setNodeNote.bind(this),this.mindMap.command.add("SET_NODE_NOTE",this.setNodeNote),this.setNodeAttachment=this.setNodeAttachment.bind(this),this.mindMap.command.add("SET_NODE_ATTACHMENT",this.setNodeAttachment),this.setNodeTag=this.setNodeTag.bind(this),this.mindMap.command.add("SET_NODE_TAG",this.setNodeTag),this.insertFormula=this.insertFormula.bind(this),this.mindMap.command.add("INSERT_FORMULA",this.insertFormula),this.addGeneralization=this.addGeneralization.bind(this),this.mindMap.command.add("ADD_GENERALIZATION",this.addGeneralization),this.removeGeneralization=this.removeGeneralization.bind(this),this.mindMap.command.add("REMOVE_GENERALIZATION",this.removeGeneralization),this.setNodeCustomPosition=this.setNodeCustomPosition.bind(this),this.mindMap.command.add("SET_NODE_CUSTOM_POSITION",this.setNodeCustomPosition),this.resetLayout=this.resetLayout.bind(this),this.mindMap.command.add("RESET_LAYOUT",this.resetLayout),this.setNodeShape=this.setNodeShape.bind(this),this.mindMap.command.add("SET_NODE_SHAPE",this.setNodeShape),this.goTargetNode=this.goTargetNode.bind(this),this.mindMap.command.add("GO_TARGET_NODE",this.goTargetNode),this.removeCustomStyles=this.removeCustomStyles.bind(this),this.mindMap.command.add("REMOVE_CUSTOM_STYLES",this.removeCustomStyles),this.removeAllNodeCustomStyles=this.removeAllNodeCustomStyles.bind(this),this.mindMap.command.add("REMOVE_ALL_NODE_CUSTOM_STYLES",this.removeAllNodeCustomStyles)}registerShortcutKeys(){this.mindMap.keyCommand.addShortcut("Tab",(()=>{this.mindMap.execCommand("INSERT_CHILD_NODE")})),this.mindMap.keyCommand.addShortcut("Insert",(()=>{this.mindMap.execCommand("INSERT_CHILD_NODE")})),this.mindMap.keyCommand.addShortcut("Enter",(()=>{this.mindMap.execCommand("INSERT_NODE")})),this.mindMap.keyCommand.addShortcut("Shift+Tab",(()=>{this.mindMap.execCommand("INSERT_PARENT_NODE")})),this.mindMap.keyCommand.addShortcut("Control+g",(()=>{this.mindMap.execCommand("ADD_GENERALIZATION")})),this.toggleActiveExpand=this.toggleActiveExpand.bind(this),this.mindMap.keyCommand.addShortcut("/",this.toggleActiveExpand),this.mindMap.keyCommand.addShortcut("Del|Backspace",(()=>{this.mindMap.execCommand("REMOVE_NODE")})),this.mindMap.keyCommand.addShortcut("Shift+Backspace",(()=>{this.mindMap.execCommand("REMOVE_CURRENT_NODE")})),this.mindMap.on("before_show_text_edit",(()=>{this.startTextEdit()})),this.mindMap.on("hide_text_edit",(()=>{this.endTextEdit()})),this.mindMap.keyCommand.addShortcut("Control+a",(()=>{this.mindMap.execCommand("SELECT_ALL")})),this.mindMap.keyCommand.addShortcut("Control+l",(()=>{this.mindMap.execCommand("RESET_LAYOUT")})),this.mindMap.keyCommand.addShortcut("Control+Up",(()=>{this.mindMap.execCommand("UP_NODE")})),this.mindMap.keyCommand.addShortcut("Control+Down",(()=>{this.mindMap.execCommand("DOWN_NODE")})),this.mindMap.keyCommand.addShortcut("Control+c",(()=>{this.copy()})),this.mindMap.keyCommand.addShortcut("Control+x",(()=>{this.cut()})),this.mindMap.keyCommand.addShortcut("Control+v",(()=>{this.paste()})),this.mindMap.keyCommand.addShortcut("Control+Enter",(()=>{this.setRootNodeCenter()}))}emitNodeActiveEvent(t=null,e=[...this.activeNodeList]){let i=!1;i=this.lastActiveNode!==t,i||(i=!(0,u.dC)(this.lastActiveNodeList,e)),i&&(this.lastActiveNode=t,this.lastActiveNodeList=[...e],this.mindMap.batchExecution.push("emitNodeActiveEvent",(()=>{this.mindMap.emit("node_active",t,e)})))}clearActiveNodeListOnDrawClick(t,e){if(this.activeNodeList.length<=0)return;let i=!0;const{useLeftKeySelectionRightKeyDrag:n}=this.mindMap.opt;if("contextmenu"===e?!n:n){const e=this.mindMap.event.mousedownPos;i=Math.abs(t.clientX-e.x)<=5&&Math.abs(t.clientY-e.y)<=5}i&&this.mindMap.execCommand("CLEAR_ACTIVE_NODE")}startTextEdit(){this.mindMap.keyCommand.save()}endTextEdit(){this.mindMap.keyCommand.restore()}clearCache(){this.layout.lru.clear(),this.nodeCache={},this.lastNodeCache={}}render(t=(()=>{}),e){return e===n.aH.CHANGE_THEME&&this.resetUnExpandNodeStyle(),this.isRendering?(this.hasWaitRendering=!0,void(this.waitRenderingParams=[t,e])):(this.isRendering=!0,this.renderSource=e,this.lastNodeCache=this.nodeCache,this.nodeCache={},this.reRender&&this.clearActiveNodeList(),this.renderTree?(this.mindMap.emit("node_tree_render_start"),this.layout.doLayout((i=>{Object.keys(this.lastNodeCache).forEach((t=>{this.nodeCache[t]||(this.removeNodeFromActiveList(this.lastNodeCache[t]),this.emitNodeActiveEvent(),this.lastNodeCache[t].destroy())})),this.root=i,this.root.render((()=>{if(this.isRendering=!1,t&&t(),this.hasWaitRendering){const t=this.waitRenderingParams;this.hasWaitRendering=!1,this.waitRenderingParams=[],this.render(...t)}else this.renderSource="",this.reRender&&(this.reRender=!1),this.mindMap.richText&&[n.aH.CHANGE_THEME,n.aH.SET_DATA].includes(e)&&this.mindMap.command.addHistory();this.mindMap.emit("node_tree_render_end")}))})),void this.emitNodeActiveEvent()):(this.isRendering=!1,void this.mindMap.emit("node_tree_render_end")))}resetUnExpandNodeStyle(){this.renderTree&&(0,u.GG)(this.renderTree,null,(t=>{if(!t.data.expand)return(0,u.GG)(t,null,(t=>{t.data.resetRichText=!0})),!0}))}clearActiveNode(){this.activeNodeList.length<=0||(this.clearActiveNodeList(),this.emitNodeActiveEvent(null,[]))}clearActiveNodeList(){this.activeNodeList.forEach((t=>{this.mindMap.execCommand("SET_NODE_ACTIVE",t,!1)})),this.activeNodeList=[]}addNodeToActiveList(t,e=!1){if(this.mindMap.opt.onlyOneEnableActiveNodeOnCooperate&&t.userList.length>0)return;-1===this.findActiveNodeIndex(t)&&(e||this.mindMap.emit("before_node_active",t,this.activeNodeList),this.mindMap.execCommand("SET_NODE_ACTIVE",t,!0),this.activeNodeList.push(t))}removeNodeFromActiveList(t){let e=this.findActiveNodeIndex(t);-1!==e&&(this.mindMap.execCommand("SET_NODE_ACTIVE",t,!1),this.activeNodeList.splice(e,1))}findActiveNodeIndex(t){return(0,u._H)(t,this.activeNodeList)}selectAll(){this.mindMap.opt.readonly||((0,u.GG)(this.root,null,(t=>{t.getData("isActive")||this.addNodeToActiveList(t)}),null,!0,0,0),this.emitNodeActiveEvent())}back(t){this.backForward("back",t)}forward(t){this.backForward("forward",t)}backForward(t,e){this.mindMap.execCommand("CLEAR_ACTIVE_NODE");const i=this.mindMap.command[t](e);i&&(this.renderTree=i,this.mindMap.render())}getNewNodeBehavior(t=!1,e=!1){const{createNewNodeBehavior:i}=this.mindMap.opt;let s=!1,o=!1;switch(i){case n.aH.CREATE_NEW_NODE_BEHAVIOR.DEFAULT:s=e||!t,o=!e&&t;break;case n.aH.CREATE_NEW_NODE_BEHAVIOR.NOT_ACTIVE:s=!1,o=!1;break;case n.aH.CREATE_NEW_NODE_BEHAVIOR.ACTIVE_ONLY:s=!0,o=!1}return{focusNewNode:s,inserting:o}}insertNode(t=!0,e=[],i=null,n=[]){if(e=(0,u.KC)(e),this.activeNodeList.length<=0&&e.length<=0)return;this.textEdit.hideEditTextBox();const{defaultInsertSecondLevelNodeText:s,defaultInsertBelowSecondLevelNodeText:o}=this.mindMap.opt,r=e.length>0?e:this.activeNodeList,a=r.length>1,h=!!this.mindMap.richText,{focusNewNode:d,inserting:l}=this.getNewNodeBehavior(t,a),c={expand:!0,richText:h,resetRichText:h,isActive:d};n=(0,u.ZV)(n,{...c}),r.forEach((t=>{if(t.isGeneralization||t.isRoot)return;const e=t.parent,r=1===t.layerIndex?s:o,a=(0,u.Z6)(t),h={inserting:l,data:{text:r,...c,uid:(0,u.Xn)(),...i||{}},children:[...(0,u._p)(n)]};e.nodeData.children.splice(a+1,0,h)})),d&&this.clearActiveNodeList(),this.mindMap.render()}insertMultiNode(t,e){if(!e||e.length<=0)return;if(t=(0,u.KC)(t),this.activeNodeList.length<=0&&t.length<=0)return;this.textEdit.hideEditTextBox();const i=t.length>0?t:this.activeNodeList,n=!!this.mindMap.richText,{focusNewNode:s}=this.getNewNodeBehavior(!1,!0),o={expand:!0,richText:n,resetRichText:n,isActive:s};e=(0,u.ZV)(e,o),i.forEach((t=>{if(t.isGeneralization||t.isRoot)return;const i=t.parent,n=(0,u.Z6)(t),s=(0,u._p)((0,u.qt)(e));i.nodeData.children.splice(n+1,0,...s)})),s&&this.clearActiveNodeList(),this.mindMap.render()}insertChildNode(t=!0,e=[],i=null,n=[]){if(e=(0,u.KC)(e),this.activeNodeList.length<=0&&e.length<=0)return;this.textEdit.hideEditTextBox();const{defaultInsertSecondLevelNodeText:s,defaultInsertBelowSecondLevelNodeText:o}=this.mindMap.opt,r=e.length>0?e:this.activeNodeList,a=r.length>1,h=!!this.mindMap.richText,{focusNewNode:d,inserting:l}=this.getNewNodeBehavior(t,a),c={expand:!0,richText:h,resetRichText:h,isActive:d};n=(0,u.ZV)(n,{...c}),r.forEach((t=>{if(t.isGeneralization)return;t.nodeData.children||(t.nodeData.children=[]);const e=t.isRoot?s:o,r={inserting:l,data:{text:e,uid:(0,u.Xn)(),...c,...i||{}},children:[...(0,u._p)(n)]};t.nodeData.children.push(r),t.setData({expand:!0})})),d&&this.clearActiveNodeList(),this.mindMap.render()}insertMultiChildNode(t,e){if(!e||e.length<=0)return;if(t=(0,u.KC)(t),this.activeNodeList.length<=0&&t.length<=0)return;this.textEdit.hideEditTextBox();const i=t.length>0?t:this.activeNodeList,n=!!this.mindMap.richText,{focusNewNode:s}=this.getNewNodeBehavior(!1,!0),o={expand:!0,richText:n,resetRichText:n,isActive:s};e=(0,u.ZV)(e,o),i.forEach((t=>{t.isGeneralization||(t.nodeData.children||(t.nodeData.children=[]),e=(0,u._p)(e),t.nodeData.children.push(...e),t.setData({expand:!0}))})),s&&this.clearActiveNodeList(),this.mindMap.render()}insertParentNode(t=!0,e,i){if(e=(0,u.KC)(e),this.activeNodeList.length<=0&&e.length<=0)return;this.textEdit.hideEditTextBox();const{defaultInsertSecondLevelNodeText:n,defaultInsertBelowSecondLevelNodeText:s}=this.mindMap.opt,o=e.length>0?e:this.activeNodeList,r=o.length>1,a=!!this.mindMap.richText,{focusNewNode:h,inserting:d}=this.getNewNodeBehavior(t,r),l={expand:!0,richText:a,resetRichText:a,isActive:h};o.forEach((t=>{if(t.isGeneralization||t.isRoot)return;const e=1===t.layerIndex?n:s,o={inserting:d,data:{text:e,uid:(0,u.Xn)(),...l,...i||{}},children:[t.nodeData]};t.setData({resetRichText:!0});const r=t.parent,a=(0,u.Z6)(t);r.nodeData.children.splice(a,1,o)})),h&&this.clearActiveNodeList(),this.mindMap.render()}upNode(){if(this.activeNodeList.length<=0)return;let t=this.activeNodeList[0];if(t.isRoot)return;let e=t.parent,i=e.children,n=(0,u._H)(t,i);if(-1===n||0===n)return;let s=n-1;i.splice(n,1),i.splice(s,0,t),e.nodeData.children.splice(n,1),e.nodeData.children.splice(s,0,t.nodeData),this.mindMap.render()}downNode(){if(this.activeNodeList.length<=0)return;let t=this.activeNodeList[0];if(t.isRoot)return;let e=t.parent,i=e.children,n=(0,u._H)(t,i);if(-1===n||n===i.length-1)return;let s=n+1;i.splice(n,1),i.splice(s,0,t),e.nodeData.children.splice(n,1),e.nodeData.children.splice(s,0,t.nodeData),this.mindMap.render()}moveUpOneLevel(t){if(!(t=t||this.activeNodeList[0])||t.isRoot||t.layerIndex<=1)return;const e=t.parent,i=e.parent,n=(0,u._H)(t,e.children),s=(0,u._H)(e,i.children);this.checkNodeLayerChange(t,e),e.nodeData.children.splice(n,1),i.nodeData.children.splice(s+1,0,t.nodeData),this.mindMap.render()}_handleRemoveCustomStyles(t){let e=!1;return Object.keys(t).forEach((i=>{(0,u.XS)(i)&&(e=!0,delete t[i])})),e&&this.mindMap.richText&&(t.resetRichText=!0,t.text=(0,u.if)(t.text)),e}removeCustomStyles(t){if(!(t=t||this.activeNodeList[0]))return;this._handleRemoveCustomStyles(t.getData())&&this.reRenderNodeCheckChange(t)}removeAllNodeCustomStyles(t){t=(0,u.KC)(t);let e=!1;if(t.length>0)t.forEach((t=>{this._handleRemoveCustomStyles(t.getData())&&(e=!0)}));else{if(!this.renderTree)return;(0,u.GG)(this.renderTree,null,(t=>{this._handleRemoveCustomStyles(t.data)&&(e=!0);const i=(0,u.Ys)(t.data);i.length>0&&i.forEach((t=>{this._handleRemoveCustomStyles(t)&&(e=!0)}))}))}e&&this.mindMap.reRender()}copy(){this.beingCopyData=this.copyNode(),this.beingCopyData&&(this.mindMap.opt.disabledClipboard||(0,u.UB)((0,u.px)(this.beingCopyData)))}cut(){this.mindMap.execCommand("CUT_NODE",(t=>{this.beingCopyData=t,this.mindMap.opt.disabledClipboard||(0,u.UB)((0,u.px)(t))}))}async paste(){const{errorHandler:t,handleIsSplitByWrapOnPasteCreateNewNode:e,handleNodePasteImg:i,disabledClipboard:s}=this.mindMap.opt;let o="",r=null;if(!s)try{const t=await(0,u.LY)();o=t.text||"",r=t.img||null}catch(e){t(n.LY.READ_CLIPBOARD_ERROR,e)}const a=r?r.size:0;if(this.beingPasteText===o&&this.beingPasteImgSize===a||(this.currentBeingPasteType=n.aH.PASTE_TYPE.CLIP_BOARD,this.beingPasteText=o,this.beingPasteImgSize=a),this.lastBeingCopyData!==this.beingCopyData&&(this.lastBeingCopyData=this.beingCopyData,this.currentBeingPasteType=n.aH.PASTE_TYPE.CANVAS),this.currentBeingPasteType===n.aH.PASTE_TYPE.CLIP_BOARD){if(o){let i=null,s=!0;if(this.mindMap.opt.customHandleClipboardText)try{const t=await this.mindMap.opt.customHandleClipboardText(o);if(!(0,u.XB)(t)){s=!1;const e=(0,u.D1)(t);e.isSmm?i=e.data:o=e.data}}catch(e){t(n.LY.CUSTOM_HANDLE_CLIPBOARD_TEXT_ERROR,e)}if(s){const t=(0,u.D1)(o);t.isSmm?i=t.data:o=t.data}if(i)this.mindMap.execCommand("INSERT_MULTI_CHILD_NODE",[],Array.isArray(i)?i:[i]);else{o=(0,u.z)(o);const t=o.split(new RegExp("\r?\n|(?<!\n)\r","g")).filter((t=>!!t));t.length>1&&e?e().then((()=>{this.mindMap.execCommand("INSERT_MULTI_CHILD_NODE",[],t.map((t=>({data:{text:t},children:[]}))))})).catch((()=>{this.mindMap.execCommand("INSERT_CHILD_NODE",!1,[],{text:o})})):this.mindMap.execCommand("INSERT_CHILD_NODE",!1,[],{text:o})}}if(r)try{let t=null;t=i&&"function"==typeof i?await i(r):await(0,u.yt)(r),this.activeNodeList.length>0&&this.activeNodeList.forEach((e=>{this.mindMap.execCommand("SET_NODE_IMAGE",e,{url:t.url,title:"",width:t.size.width,height:t.size.height})}))}catch(e){t(n.LY.LOAD_CLIPBOARD_IMAGE_ERROR,e)}}else this.beingCopyData&&this.mindMap.execCommand("PASTE_NODE",this.beingCopyData)}insertBefore(t,e){this.insertTo(t,e,"before")}insertAfter(t,e){this.insertTo(t,e,"after")}insertTo(t,e,i="before"){let n=(0,u.KC)(t);n=n.filter((t=>!t.isRoot)),"after"===i&&n.reverse(),n.forEach((t=>{this.checkNodeLayerChange(t,e);let n=t.parent,s=n.children,o=(0,u._H)(t,s);if(-1===o)return;s.splice(o,1),n.nodeData.children.splice(o,1);let r=e.parent,a=r.children,h=(0,u._H)(e,a);-1!==h&&("after"===i&&h++,a.splice(h,0,t),r.nodeData.children.splice(h,0,t.nodeData))})),this.mindMap.render()}checkNodeLayerChange(t,e,i=!1){if(this.mindMap.richText){const n=i?e.layerIndex+1:e.layerIndex;(1===t.layerIndex&&1!==n||1!==t.layerIndex&&1===n)&&t.setData({resetRichText:!0})}}removeNode(t=[]){if(t=(0,u.KC)(t),this.activeNodeList.length<=0&&t.length<=0)return;let e=null,i=t.length>0,n=i?t:this.activeNodeList,s=n.find((t=>t.isRoot));if(s)this.clearActiveNodeList(),s.children=[],s.nodeData.children=[];else{e=this.getNextActiveNode(n);for(let t=0;t<n.length;t++){const e=n[t],s=this.textEdit.getCurrentEditNode();s&&s.getData("uid")===e.getData("uid")&&this.textEdit.hideEditTextBox(),i&&n.splice(t,1),e.isGeneralization?(this.deleteNodeGeneralization(e),this.removeNodeFromActiveList(e),t--):(this.removeNodeFromActiveList(e),(0,u.Dh)(e),t--)}}this.activeNodeList=[],e&&this.addNodeToActiveList(e),this.emitNodeActiveEvent(),this.mindMap.render()}deleteNodeGeneralization(t){const e=t.generalizationBelongNode,i=e.getGeneralizationNodeIndex(t);let n=e.getData("generalization");Array.isArray(n)?n.splice(i,1):n=null,this.mindMap.execCommand("SET_NODE_DATA",e,{generalization:n}),this.closeHighlightNode()}removeCurrentNode(t=[]){if(t=(0,u.KC)(t),this.activeNodeList.length<=0&&t.length<=0)return;let e=t.length>0?t:this.activeNodeList;e=e.filter((t=>!t.isRoot));let i=this.getNextActiveNode(e);for(let t=0;t<e.length;t++){let i=e[t];if(i.isGeneralization)this.deleteNodeGeneralization(i);else{const t=i.parent,e=(0,u.Z6)(i);t.nodeData.children.splice(e,1,...i.nodeData.children||[])}}this.activeNodeList=[],i&&this.addNodeToActiveList(i),this.emitNodeActiveEvent(),this.mindMap.render()}getNextActiveNode(t){if(1!==t.length)return null;if(-1===this.findActiveNodeIndex(t[0]))return null;let e=null;if(1===this.activeNodeList.length&&!this.activeNodeList[0].isGeneralization&&this.mindMap.opt.deleteNodeActive){const t=this.activeNodeList[0],i=t.parent.children,n=(0,u._H)(t,i);e=n<i.length-1?i[n+1]:n>0?i[n-1]:t.parent}return e}copyNode(){if(this.activeNodeList.length<=0)return null;return(0,u.K1)(this.activeNodeList).map((t=>(0,u.mk)({},t,!0)))}cutNode(t){if(this.activeNodeList.length<=0)return;const e=(0,u.K1)(this.activeNodeList).filter((t=>!t.isRoot)),i=e.map((t=>(0,u.mk)({},t,!0)));e.forEach((t=>{(0,u.Dh)(t)})),this.clearActiveNodeList(),this.mindMap.render(),t&&"function"==typeof t&&t(i)}moveNodeTo(t,e){let i=(0,u.KC)(t);i=i.filter((t=>!t.isRoot)),i.forEach((t=>{this.checkNodeLayerChange(t,e,!0),this.removeNodeFromActiveList(t),(0,u.Dh)(t),e.nodeData.children.push(t.nodeData)})),this.emitNodeActiveEvent(),this.mindMap.render()}pasteNode(t){t=(0,u.KC)(t),this.activeNodeList.length<=0||t.length<=0||(this.activeNodeList.forEach((e=>{e.nodeData.children.push(...t.map((t=>{const e=(0,u.qt)(t);return(0,u._p)([e],!0),e})))})),this.mindMap.render())}setNodeStyle(t,e,i){let n={[e]:i};this.mindMap.richText&&this.mindMap.richText.setNotActiveNodeStyle(t,{[e]:i}),this.setNodeDataRender(t,n),z.includes(e)&&(t.parent||t).renderLine(!0)}setNodeStyles(t,e){let i={...e};this.mindMap.richText&&this.mindMap.richText.setNotActiveNodeStyle(t,e),this.setNodeDataRender(t,i);let n=Object.keys(e),s=!1;n.forEach((t=>{z.includes(t)&&(s=!0)})),s&&(t.parent||t).renderLine(!0)}setNodeActive(t,e){this.mindMap.execCommand("SET_NODE_DATA",t,{isActive:e}),t.updateNodeByActive(e)}setNodeExpand(t,e){this.mindMap.execCommand("SET_NODE_DATA",t,{expand:e}),this.mindMap.render()}expandAllNode(){this.renderTree&&((0,u.GG)(this.renderTree,null,(t=>{t.data.expand||(t.data.expand=!0)}),null,!0,0,0),this.mindMap.render())}unexpandAllNode(t=!0){this.renderTree&&((0,u.GG)(this.renderTree,null,((t,e,i)=>{!i&&t.children&&t.children.length>0&&(t.data.expand=!1)}),null,!0,0,0),this.mindMap.render((()=>{t&&this.setRootNodeCenter()})))}expandToLevel(t){this.renderTree&&((0,u.GG)(this.renderTree,null,((e,i,n,s)=>{s<t?e.data.expand=!0:!n&&e.children&&e.children.length>0&&(e.data.expand=!1)}),null,!0,0,0),this.mindMap.render())}toggleActiveExpand(){this.activeNodeList.forEach((t=>{t.nodeData.children.length<=0||t.isRoot||this.toggleNodeExpand(t)}))}toggleNodeExpand(t){this.mindMap.execCommand("SET_NODE_EXPAND",t,!t.getData("expand"))}setNodeText(t,e,i,n){i=void 0===i?t.getData("richText"):i,this.setNodeDataRender(t,{text:e,richText:i,resetRichText:n})}setNodeImage(t,e){const{url:i,title:n,width:s,height:o,custom:r=!1}=e||{url:"",title:"",width:0,height:0,custom:!1};this.setNodeDataRender(t,{image:i,imageTitle:n||"",imageSize:{width:s,height:o,custom:r}})}setNodeIcon(t,e){this.setNodeDataRender(t,{icon:e})}setNodeHyperlink(t,e,i=""){this.setNodeDataRender(t,{hyperlink:e,hyperlinkTitle:i})}setNodeNote(t,e){this.setNodeDataRender(t,{note:e})}setNodeAttachment(t,e,i=""){this.setNodeDataRender(t,{attachmentUrl:e,attachmentName:i})}setNodeTag(t,e){this.setNodeDataRender(t,{tag:e})}insertFormula(t,e=[]){if(!this.mindMap.richText||!this.mindMap.formula)return;((e=(0,u.KC)(e)).length>0?e:this.activeNodeList).forEach((e=>{this.mindMap.formula.insertFormulaToNode(e,t)}))}addGeneralization(t,e=!0){if(this.activeNodeList.length<=0)return;const i=this.activeNodeList.filter((t=>!t.isRoot&&!t.isGeneralization&&!t.checkHasSelfGeneralization())),n=(0,u.X)(i),s=!!this.mindMap.richText,{focusNewNode:o,inserting:r}=this.getNewNodeBehavior(e,n.length>1);n.forEach((e=>{const i={inserting:r,...t||{text:this.mindMap.opt.defaultGeneralizationText},range:e.range||null,uid:(0,u.Xn)(),richText:s,resetRichText:s,isActive:o};let n=e.node.getData("generalization");n?Array.isArray(n)?n.push(i):n=[n,i]:n=[i],this.mindMap.execCommand("SET_NODE_DATA",e.node,{generalization:n}),e.node.setData({expand:!0})})),o&&this.clearActiveNodeList(),this.mindMap.render((()=>{this.mindMap.render()}))}removeGeneralization(){this.activeNodeList.length<=0||(this.activeNodeList.forEach((t=>{t.checkHasGeneralization()&&this.mindMap.execCommand("SET_NODE_DATA",t,{generalization:null})})),this.mindMap.render(),this.closeHighlightNode())}setNodeCustomPosition(t,e,i){([t]||0).forEach((t=>{this.mindMap.execCommand("SET_NODE_DATA",t,{customLeft:e,customTop:i})}))}resetLayout(){(0,u.GG)(this.root,null,(t=>{t.customLeft=void 0,t.customTop=void 0,this.mindMap.execCommand("SET_NODE_DATA",t,{customLeft:void 0,customTop:void 0}),this.mindMap.render()}),null,!0,0,0)}setNodeShape(t,e){if(!e||!D.O.includes(e))return;([t]||0).forEach((t=>{this.setNodeStyle(t,"shape",e)}))}goTargetNode(t,e=(()=>{})){let i="string"==typeof t?t:t.getData("uid");i&&this.expandToNodeUid(i,(()=>{let t=this.findNodeByUid(i);t&&(t.active(),this.moveNodeToCenter(t),e(t))}))}setNodeData(t,e){Object.keys(e).forEach((i=>{t.nodeData.data[i]=e[i]}))}setNodeDataRender(t,e,i=!1){this.mindMap.execCommand("SET_NODE_DATA",t,e),this.reRenderNodeCheckChange(t,i)}reRenderNodeCheckChange(t,e){t.reRender()?e||this.mindMap.render():this.mindMap.emit("node_tree_render_end")}moveNodeToCenter(t,e){let{resetScaleOnMoveNodeToCenter:i}=this.mindMap.opt;void 0!==e&&(i=e);let{transform:n,state:s}=this.mindMap.view.getTransformData(),{left:o,top:r,width:a,height:h}=t;i||(o*=n.scaleX,r*=n.scaleY,a*=n.scaleX,h*=n.scaleY);let d=this.mindMap.width/2,l=this.mindMap.height/2,c=o+a/2,u=r+h/2,p=d-s.x-c,m=l-s.y-u;this.mindMap.view.translateX(p),this.mindMap.view.translateY(m),i&&this.mindMap.view.setScale(1)}setRootNodeCenter(){this.moveNodeToCenter(this.root)}expandToNodeUid(t,e=(()=>{})){if(!this.renderTree)return void e();let i=[],n=!1;const s={};(0,u.De)(this.renderTree,((e,o)=>{if(e.data.uid===t)return i=o?[...s[o.data.uid],o]:[],"stop";if((0,u.Ys)(e.data).forEach((e=>{e.uid===t&&(i=o?[...s[o.data.uid],o]:[],n=!0)})),n)return"stop";s[e.data.uid]=o?[...s[o.data.uid],o]:[]}));let o=!1;if(i.forEach((t=>{t.data.expand||(o=!0,t.data.expand=!0)})),n){const t=i[i.length-1];t&&(0,u.GG)(t,null,(t=>{t.data.expand||(o=!0,t.data.expand=!0)}))}o?this.mindMap.render(e):e()}findNodeByUid(t){let e=null;return(0,u.GG)(this.root,null,(i=>{if(i.getData("uid")===t)return e=i,!0;let n=!1;return(i._generalizationList||[]).forEach((i=>{i.generalizationNode.getData("uid")===t&&(e=i.generalizationNode,n=!0)})),!!n||void 0})),e}highlightNode(t,e){if(this.isRendering)return;const{highlightNodeBoxStyle:i={}}=this.mindMap.opt;this.highlightBoxNode||(this.highlightBoxNode=(new R.tS).stroke({color:i.stroke||"transparent"}).fill({color:i.fill||"transparent"}));let n=1/0,s=1/0,o=-1/0,r=-1/0;if(e){t.children.slice(e[0],e[1]+1).forEach((t=>{t.left<n&&(n=t.left),t.top<s&&(s=t.top);const e=t.left+t.width,i=t.top+t.height;e>o&&(o=e),i>r&&(r=i)}))}else n=t.left,s=t.top,o=t.left+t.width,r=t.top+t.height;this.highlightBoxNode.plot([[n,s],[o,s],[o,r],[n,r]]),this.mindMap.otherDraw.add(this.highlightBoxNode)}closeHighlightNode(){this.highlightBoxNode.remove()}},F=l()(A,{lineColor:"#333",backgroundColor:"#d1f6ec",generalizationLineWidth:1,generalizationLineColor:"#333",root:{fillColor:"#1fb27d"},second:{fillColor:"#fff",color:"#565656",borderColor:"transparent",borderWidth:0},generalization:{fillColor:"#fff",borderColor:"#333",color:"#333"}}),k=l()(A,{lineColor:"rgb(115, 161, 191)",backgroundColor:"rgb(251, 251, 251)",generalizationLineWidth:1,generalizationLineColor:"#333",root:{fillColor:"rgb(115, 161, 191)"},second:{fillColor:"rgb(238, 243, 246)",color:"#333",borderColor:"rgb(115, 161, 191)",borderWidth:1,fontSize:14},node:{fontSize:12,color:"#333"},generalization:{fillColor:"#fff",borderColor:"#333",color:"#333"}}),B=l()(A,{lineColor:"rgb(191, 115, 148)",backgroundColor:"rgb(251, 251, 251)",generalizationLineWidth:1,generalizationLineColor:"#333",root:{fillColor:"rgb(191, 115, 148)"},second:{fillColor:"rgb(246, 238, 242)",color:"#333",borderColor:"rgb(191, 115, 148)",borderWidth:1,fontSize:14},node:{fontSize:12,color:"#333"},generalization:{fillColor:"#fff",borderColor:"#333",color:"#333"}}),H=l()(A,{lineColor:"rgb(123, 115, 191)",backgroundColor:"rgb(251, 251, 251)",generalizationLineWidth:1,generalizationLineColor:"#333",root:{fillColor:"rgb(123, 115, 191)"},second:{fillColor:"rgb(239, 238, 246)",color:"#333",borderColor:"rgb(123, 115, 191)",borderWidth:1,fontSize:14},node:{fontSize:12,color:"#333"},generalization:{fillColor:"#fff",borderColor:"#333",color:"#333"}}),G=l()(A,{lineColor:"rgb(191, 115, 115)",backgroundColor:"rgb(251, 251, 251)",generalizationLineWidth:1,generalizationLineColor:"#333",root:{fillColor:"rgb(191, 115, 115)"},second:{fillColor:"rgb(246, 238, 238)",color:"#333",borderColor:"rgb(191, 115, 115)",borderWidth:1,fontSize:14},node:{fontSize:12,color:"#333"},generalization:{fillColor:"#fff",borderColor:"#333",color:"#333"}}),P=l()(A,{lineColor:"rgb(191, 147, 115)",backgroundColor:"rgb(251, 251, 251)",generalizationLineWidth:1,generalizationLineColor:"#333",root:{fillColor:"rgb(191, 147, 115)"},second:{fillColor:"rgb(246, 242, 238)",color:"#333",borderColor:"rgb(191, 147, 115)",borderWidth:1,fontSize:14},node:{fontSize:12,color:"#333"},generalization:{fillColor:"#fff",borderColor:"#333",color:"#333"}}),Y=l()(A,{lineColor:"#fff",lineWidth:3,generalizationLineWidth:3,generalizationLineColor:"#fff",backgroundColor:"rgb(58, 65, 68)",backgroundImage:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAIAAAACDbGyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowQzg5QTQ0NDhENzgxMUUzOENGREE4QTg0RDgzRTZDNyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowQzg5QTQ0NThENzgxMUUzOENGREE4QTg0RDgzRTZDNyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkMwOEQ1NDRGOEQ3NzExRTM4Q0ZEQThBODREODNFNkM3IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkMwOEQ1NDUwOEQ3NzExRTM4Q0ZEQThBODREODNFNkM3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+e9P33AAAACVJREFUeNpisXJ0YUACTAyoAMr/+eM7EGGRZ4FQ7BycEAZAgAEAHbEGtkoQm/wAAAAASUVORK5CYII=",backgroundRepeat:"repeat",backgroundSize:"auto",root:{fillColor:"rgb(233, 223, 152)",color:"#333",fontSize:24,borderRadius:21},second:{fillColor:"rgb(164, 197, 192)",borderColor:"transparent",color:"#333",fontSize:16,borderRadius:10},node:{fontSize:12,color:"#fff",fontWeight:"bold"},generalization:{fillColor:"#fff",borderColor:"transparent",color:"#333"}}),W=l()(A,{lineColor:"rgb(51, 51, 51)",lineWidth:2,generalizationLineWidth:3,generalizationLineColor:"rgb(51, 51, 51)",backgroundColor:"#fff",root:{fillColor:"rgb(18, 187, 55)",color:"#fff",fontSize:24,borderRadius:10},second:{fillColor:"rgb(241, 242, 241)",borderColor:"transparent",color:"#1a1a1a",fontSize:18,borderRadius:10},node:{fontSize:14,color:"#1a1a1a"},generalization:{fillColor:"#fff",borderColor:"rgb(51, 51, 51)",borderWidth:2,color:"#1a1a1a"}}),U=l()(A,{lineColor:"rgb(94, 202, 110)",lineWidth:2,generalizationLineWidth:3,generalizationLineColor:"#1a1a1a",backgroundColor:"rgb(241, 241, 241)",root:{fillColor:"rgb(255, 245, 214)",color:"#1a1a1a",fontSize:24,borderRadius:10,borderColor:"rgb(249, 199, 84)",borderWidth:1},second:{fillColor:"rgb(255, 245, 214)",borderColor:"rgb(249, 199, 84)",borderWidth:1,color:"#1a1a1a",fontSize:18,borderRadius:10},node:{fontSize:14,color:"#1a1a1a"},generalization:{fillColor:"#fff",borderColor:"#1a1a1a",color:"#1a1a1a",borderWidth:2}}),$=l()(A,{lineColor:"rgb(30, 53, 86)",lineWidth:2,generalizationLineWidth:2,generalizationLineColor:"rgb(56, 123, 233)",backgroundColor:"rgb(241, 241, 241)",root:{fillColor:"rgb(30, 53, 86)",color:"#fff",fontSize:24,borderRadius:10,borderColor:"rgb(189, 197, 201)",borderWidth:2},second:{fillColor:"rgb(169, 218, 218)",borderColor:"rgb(30, 53, 86)",borderWidth:2,color:"#fff",fontSize:18,borderRadius:10},node:{fontSize:14,color:"rgb(30, 53, 86)",borderColor:"rgb(30, 53, 86)",borderWidth:1,marginY:20},generalization:{fillColor:"rgb(56, 123, 233)",borderColor:"rgb(56, 123, 233)",color:"#fff",borderWidth:0}}),X=l()(A,{lineColor:"rgb(17, 68, 23)",lineWidth:2,generalizationLineWidth:2,generalizationLineColor:"#fff",backgroundColor:"rgb(15, 16, 17)",root:{fillColor:"rgb(28, 178, 43)",color:"#fff",fontSize:24,borderRadius:10},second:{fillColor:"rgb(55, 56, 58)",color:"rgb(147,148,149)",fontSize:18,borderRadius:10,borderWidth:0},node:{fontSize:14,color:"rgb(147, 148, 149)"},generalization:{fillColor:"#fff",borderColor:"transparent",color:"#333"}}),V=l()(A,{lineColor:"rgb(123, 199, 120)",backgroundColor:"rgb(236, 245, 231)",generalizationLineWidth:2,generalizationLineColor:"rgb(123, 199, 120)",root:{fillColor:"rgb(253, 244, 217)",color:"#222"},second:{fillColor:"rgb(253, 244, 217)",color:"#222",borderColor:"rgb(242, 200, 104)",borderWidth:1,fontSize:14},node:{fontSize:12,color:"#333"},generalization:{fillColor:"rgb(123, 199, 120)",borderColor:"transparent",borderWidth:2,color:"#fff"}}),j=l()(A,{lineColor:"rgb(51, 51, 51)",lineWidth:2,generalizationLineWidth:2,generalizationLineColor:"rgb(51, 51, 51)",backgroundColor:"rgb(239, 248, 250)",root:{fillColor:"rgb(255, 255, 255)",color:"#222"},second:{fillColor:"rgb(255, 255, 255)",color:"#222",borderColor:"rgb(255, 255, 255)",borderWidth:1,fontSize:14},node:{fontSize:12,color:"#333"},generalization:{fillColor:"#fff",borderColor:"rgb(51, 51, 51)",color:"#333"}}),Z=l()(A,{lineColor:"rgb(51, 51, 51)",lineWidth:3,generalizationLineWidth:3,generalizationLineColor:"#222",backgroundColor:"rgb(248, 215, 49)",root:{fillColor:"rgb(55, 165, 255)",borderColor:"rgb(51, 51, 51)",borderWidth:3},second:{fillColor:"rgb(255, 160, 36)",color:"#222",borderColor:"rgb(51, 51, 51)",borderWidth:3,fontSize:14},node:{fontSize:12,color:"#222"},generalization:{borderColor:"#222",borderWidth:3,color:"#222"}}),K=l()(A,{lineColor:"rgb(166, 101, 106)",lineWidth:3,generalizationLineWidth:3,generalizationLineColor:"#fff",backgroundColor:"rgb(255, 208, 211)",root:{fillColor:"rgb(139, 109, 225)",borderColor:"",borderWidth:0},second:{fillColor:"rgb(243, 104, 138)",color:"#fff",borderColor:"",borderWidth:0,fontSize:14},node:{fontSize:12,color:"#222"},generalization:{fillColor:"#fff",borderColor:"transparent",color:"#222"}}),q=l()(A,{lineColor:"rgb(104, 204, 202)",lineWidth:3,generalizationLineWidth:3,generalizationLineColor:"rgb(90, 206, 241)",backgroundColor:"rgb(239, 255, 255)",root:{fillColor:"rgb(0, 192, 184)",borderColor:"",borderWidth:0},second:{fillColor:"#fff",color:"#222",borderColor:"rgb(184, 235, 233)",borderWidth:2,fontSize:14},node:{fontSize:12,color:"#222"},generalization:{fillColor:"rgb(90, 206, 241)",borderColor:"transparent",color:"#fff"}}),Q=l()(A,{lineColor:"rgb(51, 56, 62)",lineWidth:3,generalizationLineWidth:3,generalizationLineColor:"rgb(127, 93, 64)",backgroundColor:"#fff",root:{fillColor:"rgb(51, 56, 62)",color:"rgb(247, 208, 160)",borderColor:"",borderWidth:0},second:{fillColor:"rgb(239, 209, 176)",color:"rgb(81, 58, 42)",borderColor:"",borderWidth:0,fontSize:14},node:{fontSize:12,color:"#222"},generalization:{fillColor:"rgb(127, 93, 64)",borderColor:"transparent",color:"rgb(255, 214, 175)"}}),J=l()(A,{lineColor:"rgb(254, 146, 0)",lineWidth:3,generalizationLineWidth:3,generalizationLineColor:"rgb(255, 222, 69)",backgroundColor:"rgb(255, 246, 243)",root:{fillColor:"rgb(255, 112, 52)",color:"#fff",borderColor:"",borderWidth:0},second:{fillColor:"#fff",color:"rgb(51, 51, 51)",borderColor:"",borderWidth:0,fontSize:14},node:{fontSize:12,color:"#222"},generalization:{fillColor:"rgb(255, 222, 69)",borderColor:"transparent",color:"rgb(51, 51, 51)"}}),tt=l()(A,{lineColor:"rgb(40, 193, 84)",lineWidth:3,generalizationLineWidth:3,generalizationLineColor:"rgb(251, 158, 0)",backgroundColor:"rgb(238, 255, 243)",root:{fillColor:"rgb(25, 193, 73)",color:"#fff",borderColor:"",borderWidth:0},second:{fillColor:"#fff",color:"rgb(69, 149, 96)",borderColor:"",borderWidth:0,fontSize:14},node:{fontSize:12,color:"#222"},generalization:{fillColor:"#fff",borderColor:"rgb(251, 158, 0)",borderWidth:2,color:"rgb(51, 51, 51)"}}),et=l()(A,{lineColor:"rgb(75, 81, 78)",lineWidth:3,generalizationLineWidth:3,generalizationLineColor:"rgb(255, 119, 34)",backgroundColor:"rgb(27, 31, 34)",root:{fillColor:"rgb(36, 179, 96)",color:"#fff",borderColor:"",borderWidth:0},second:{fillColor:"rgb(254, 199, 13)",color:"rgb(0, 0, 0)",borderColor:"",borderWidth:0,fontSize:14},node:{fontSize:12,color:"rgb(204, 204, 204)"},generalization:{fillColor:"transparent",borderColor:"rgb(255, 119, 34)",borderWidth:2,color:"rgb(204, 204, 204)"}}),it=l()(A,{lineColor:"#fff",lineWidth:3,generalizationLineWidth:3,generalizationLineColor:"#fff",backgroundColor:"rgb(80, 156, 170)",root:{fillColor:"#fff",borderColor:"",borderWidth:0,color:"rgb(65, 89, 158)"},second:{fillColor:"rgb(251, 227, 188)",color:"rgb(65, 89, 158)",borderColor:"",borderWidth:0,fontSize:14},node:{fontSize:12,color:"rgb(65, 89, 158)"},generalization:{fillColor:"#fff",borderColor:"transparent",color:"rgb(65, 89, 158)"}}),nt=l()(A,{lineColor:"rgb(34, 34, 34)",lineWidth:4,generalizationLineWidth:4,generalizationLineColor:"rgb(34, 34, 34)",root:{fillColor:"#fff",color:"rgb(34, 34, 34)",borderColor:"rgb(34, 34, 34)",borderWidth:3,fontSize:24},second:{fillColor:"rgb(241, 246, 248)",color:"rgb(34, 34, 34)",borderColor:"rgb(34, 34, 34)",borderWidth:3,fontSize:18},node:{fontSize:14,color:"rgb(34, 34, 34)"},generalization:{fontSize:14,fillColor:"transparent",borderColor:"rgb(34, 34, 34)",borderWidth:2,color:"rgb(34, 34, 34)"}}),st=l()(A,{lineColor:"rgb(113, 195, 169)",lineWidth:3,generalizationLineWidth:3,generalizationLineColor:"rgb(113, 195, 169)",root:{fillColor:"rgb(16, 160, 121)",color:"#fff",borderColor:"",borderWidth:0,fontSize:24},second:{fillColor:"rgb(240, 252, 249)",color:"rgb(50, 113, 96)",borderColor:"rgb(113, 195, 169)",borderWidth:2,fontSize:18},node:{fontSize:14,color:"rgb(10, 59, 43)"},generalization:{fontSize:14,fillColor:"rgb(246, 238, 211)",borderColor:"",borderWidth:0,color:"rgb(173, 91, 12)"}}),ot=l()(A,{lineColor:"rgb(173, 123, 91)",lineWidth:4,generalizationLineWidth:4,generalizationLineColor:"rgb(173, 123, 91)",root:{fillColor:"rgb(202, 117, 79)",color:"#fff",borderColor:"",borderWidth:0,fontSize:24},second:{fillColor:"rgb(245, 231, 216)",color:"rgb(125, 86, 42)",borderColor:"",borderWidth:0,fontSize:18},node:{fontSize:14,color:"rgb(96, 71, 47)"},generalization:{fontSize:14,fillColor:"rgb(255, 249, 239)",borderColor:"rgb(173, 123, 91)",borderWidth:2,color:"rgb(122, 83, 44)"}}),rt=l()(A,{backgroundColor:"rgb(255, 238, 228)",lineColor:"rgb(230, 138, 131)",lineWidth:3,generalizationLineWidth:3,generalizationLineColor:"rgb(222, 101, 85)",root:{fillColor:"rgb(207, 44, 44)",color:"rgb(255, 233, 157)",borderColor:"",borderWidth:0,fontSize:24},second:{fillColor:"rgb(255, 255, 255)",color:"rgb(211, 58, 21)",borderColor:"rgb(222, 101, 85)",borderWidth:2,fontSize:18},node:{fontSize:14,color:"rgb(144, 71, 43)"},generalization:{fontSize:14,fillColor:"rgb(255, 247, 211)",borderColor:"rgb(255, 202, 162)",borderWidth:2,color:"rgb(187, 101, 69)"}}),at=l()(A,{backgroundColor:"rgb(27, 31, 34)",lineColor:"rgb(75, 81, 78)",lineWidth:3,generalizationLineWidth:3,generalizationLineColor:"rgb(255, 119, 34)",root:{fillColor:"rgb(36, 179, 96)",color:"#fff",borderColor:"",borderWidth:0,fontSize:24},second:{fillColor:"rgb(254, 199, 13)",color:"rgb(0, 0, 0)",borderColor:"",borderWidth:0,fontSize:18},node:{fontSize:14,color:"rgb(204, 204, 204)"},generalization:{fontSize:14,fillColor:"rgb(27, 31, 34)",borderColor:"rgb(255, 119, 34)",borderWidth:2,color:"rgb(204, 204, 204)"}}),ht=l()(A,{backgroundColor:"rgb(32, 37, 49)",lineColor:"rgb(137, 167, 196)",lineWidth:3,generalizationLineWidth:3,generalizationLineColor:"rgb(255, 119, 34)",root:{fillColor:"rgb(23, 153, 243)",color:"rgb(255, 255, 255)",borderColor:"",borderWidth:0,fontSize:24},second:{fillColor:"rgb(70, 78, 94)",color:"rgb(209, 210, 210)",borderColor:"",borderWidth:0,fontSize:18},node:{fontSize:14,color:"rgb(204, 204, 204)"},generalization:{fontSize:14,fillColor:"rgb(255, 119, 34)",borderColor:"",borderWidth:2,color:"#fff"}}),dt=l()(A,{backgroundColor:"rgb(18, 20, 20)",lineColor:"rgb(205, 186, 156)",lineWidth:3,generalizationLineWidth:3,generalizationLineColor:"rgb(245, 224, 191)",root:{fillColor:"rgb(255, 208, 124)",color:"rgb(111, 61, 6)",borderColor:"",borderWidth:0,fontSize:24},second:{fillColor:"rgb(66, 57, 46)",color:"rgb(225, 201, 158)",borderColor:"rgb(245, 224, 191)",borderWidth:2,fontSize:18},node:{fontSize:14,color:"rgb(231, 203, 155)"},generalization:{fontSize:14,fillColor:"rgb(56, 45, 34)",borderColor:"rgb(104, 84, 61)",borderWidth:2,color:"rgb(242, 216, 176)"}}),lt=l()(A,{backgroundColor:"#e6f1de",lineColor:"#f5ffad",lineWidth:4,generalizationLineWidth:3,generalizationLineColor:"#749336",root:{fillColor:"#94c143",color:"#fff",borderColor:"#94c143",borderWidth:0,fontSize:24},second:{fillColor:"#cee498",color:"#749336",borderColor:"#aec668",borderWidth:2,fontSize:18},node:{fontSize:14,color:"#749336"},generalization:{fontSize:14,fillColor:"#cee498",borderColor:"#aec668",borderWidth:2,color:"#749336"}}),ct=l()(A,{backgroundColor:"#fff2df",lineColor:"#b0bc47",lineWidth:3,generalizationLineWidth:3,generalizationLineColor:"#b0bc47",root:{fillColor:"#e68112",color:"#fff",borderColor:"#e68112",borderWidth:0,fontSize:24},second:{fillColor:"#ffd683",color:"#8c5416",borderColor:"#b0bc47",borderWidth:2,fontSize:18},node:{fontSize:14,color:"#8c5416"},generalization:{fontSize:14,fillColor:"#ffd683",borderColor:"#b0bc47",borderWidth:2,color:"#8c5416"}}),ut=l()(A,{backgroundColor:"#070616",lineColor:"#fff",lineWidth:3,generalizationLineWidth:3,generalizationLineColor:"#fff",root:{fillColor:"#ff6811",color:"#110501",borderColor:"#ff6811",borderWidth:0,fontSize:24},second:{fillColor:"#070616",color:"#a9a4a9",borderColor:"#ff6811",borderWidth:2,fontSize:18},node:{fontSize:14,color:"#a9a4a9"},generalization:{fontSize:14,fillColor:"",borderColor:"#ff6811",borderWidth:2,color:"#a9a4a9"}}),pt={default:A,freshGreen:F,blueSky:k,brainImpairedPink:B,romanticPurple:H,freshRed:G,earthYellow:P,classic:Y,classic2:W,classic3:U,classic4:$,dark:X,classicGreen:V,classicBlue:j,minions:Z,pinkGrape:K,mint:q,gold:Q,vitalityOrange:J,greenLeaf:tt,dark2:et,skyGreen:it,simpleBlack:nt,courseGreen:st,coffee:ot,redSpirit:rt,blackHumour:at,lateNightOffice:ht,blackGold:dt,avocado:lt,autumn:ct,orangeJuice:ut};var mt=i(915754);const ft={Backspace:8,Tab:9,Enter:13,Shift:16,Control:17,Alt:18,CapsLock:20,Esc:27,Spacebar:32,PageUp:33,PageDown:34,End:35,Home:36,Insert:45,Left:37,Up:38,Right:39,Down:40,Del:46,NumLock:144,Cmd:91,CmdFF:224,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,"`":192,"=":187,"-":189,"/":191,".":190};for(let t=0;t<=9;t++)ft[t]=t+48;"abcdefghijklmnopqrstuvwxyz".split("").forEach(((t,e)=>{ft[t]=e+65}));const gt=ft;class xt{constructor(t){this.opt=t,this.mindMap=t.mindMap,this.shortcutMap={},this.shortcutMapCache={},this.isPause=!1,this.isInSvg=!1,this.bindEvent()}pause(){this.isPause=!0}recovery(){this.isPause=!1}save(){this.shortcutMapCache=this.shortcutMap,this.shortcutMap={}}restore(){this.shortcutMap=this.shortcutMapCache,this.shortcutMapCache={}}bindEvent(){this.onKeydown=this.onKeydown.bind(this),this.mindMap.on("svg_mouseenter",(()=>{this.isInSvg=!0})),this.mindMap.on("svg_mouseleave",(()=>{this.mindMap.renderer.textEdit.isShowTextEdit()||this.mindMap.associativeLine&&this.mindMap.associativeLine.showTextEdit||(this.isInSvg=!1)})),window.addEventListener("keydown",this.onKeydown),this.mindMap.on("beforeDestroy",(()=>{this.unBindEvent()}))}unBindEvent(){window.removeEventListener("keydown",this.onKeydown)}onKeydown(t){const{enableShortcutOnlyWhenMouseInSvg:e,beforeShortcutRun:i}=this.mindMap.opt;this.isPause||e&&!this.isInSvg||Object.keys(this.shortcutMap).forEach((e=>{if(this.checkKey(t,e)){if(this.checkKey(t,"Control+v")||(t.stopPropagation(),t.preventDefault()),"function"==typeof i){if(i(e,[...this.mindMap.renderer.activeNodeList]))return}this.shortcutMap[e].forEach((t=>{t()}))}}))}checkKey(t,e){let i=this.getOriginEventCodeArr(t),n=this.getKeyCodeArr(e);if(i.length!==n.length)return!1;for(let t=0;t<i.length;t++){let e=n.findIndex((e=>e===i[t]));if(-1===e)return!1;n.splice(e,1)}return!0}getOriginEventCodeArr(t){let e=[];return(t.ctrlKey||t.metaKey)&&e.push(gt.Control),t.altKey&&e.push(gt.Alt),t.shiftKey&&e.push(gt.Shift),e.includes(t.keyCode)||e.push(t.keyCode),e}hasCombinationKey(t){return t.ctrlKey||t.metaKey||t.altKey||t.shiftKey}getKeyCodeArr(t){let e=t.split(/\s*\+\s*/),i=[];return e.forEach((t=>{i.push(gt[t])})),i}addShortcut(t,e){t.split(/\s*\|\s*/).forEach((t=>{this.shortcutMap[t]?this.shortcutMap[t].push(e):this.shortcutMap[t]=[e]}))}removeShortcut(t,e){t.split(/\s*\|\s*/).forEach((t=>{if(this.shortcutMap[t])if(e){let i=this.shortcutMap[t].findIndex((t=>t===e));-1!==i&&this.shortcutMap[t].splice(i,1)}else this.shortcutMap[t]=[],delete this.shortcutMap[t]}))}getShortcutFn(t){let e=[];return t.split(/\s*\|\s*/).forEach((t=>{e=this.shortcutMap[t]||[]})),e}}const vt=class{constructor(t={}){this.opt=t,this.mindMap=t.mindMap,this.commands={},this.history=[],this.activeHistoryIndex=0,this.registerShortcutKeys(),this.addHistory=(0,u.nF)(this.addHistory,this.mindMap.opt.addHistoryTime,this),this.isPause=!1}pause(){this.isPause=!0}recovery(){this.isPause=!1}clearHistory(){this.history=[],this.activeHistoryIndex=0,this.mindMap.emit("back_forward",0,0)}registerShortcutKeys(){this.mindMap.keyCommand.addShortcut("Control+z",(()=>{this.mindMap.execCommand("BACK")})),this.mindMap.keyCommand.addShortcut("Control+y",(()=>{this.mindMap.execCommand("FORWARD")}))}exec(t,...e){if(this.commands[t]){if(this.commands[t].forEach((t=>{t(...e)})),["BACK","FORWARD","SET_NODE_ACTIVE","CLEAR_ACTIVE_NODE"].includes(t))return;this.addHistory()}}add(t,e){this.commands[t]?this.commands[t].push(e):this.commands[t]=[e]}remove(t,e){if(this.commands[t])if(e){let i=this.commands[t].find((t=>t===e));-1!==i&&this.commands[t].splice(i,1)}else this.commands[t]=[],delete this.commands[t]}addHistory(){if(this.mindMap.opt.readonly||this.isPause)return;const t=this.history.length>0?this.history[this.history.length-1]:null,e=this.getCopyData();t!==e&&(t&&JSON.stringify(t)===JSON.stringify(e)||(this.emitDataUpdatesEvent(t,e),this.history=this.history.slice(0,this.activeHistoryIndex+1),this.history.push((0,u.qt)(e)),this.history.length>this.mindMap.opt.maxHistoryCount&&this.history.shift(),this.activeHistoryIndex=this.history.length-1,this.mindMap.emit("data_change",e),this.mindMap.emit("back_forward",this.activeHistoryIndex,this.history.length)))}back(t=1){if(!this.mindMap.opt.readonly&&this.activeHistoryIndex-t>=0){const e=this.history[this.activeHistoryIndex];this.activeHistoryIndex-=t,this.mindMap.emit("back_forward",this.activeHistoryIndex,this.history.length);const i=(0,u.qt)(this.history[this.activeHistoryIndex]);return this.emitDataUpdatesEvent(e,i),this.mindMap.emit("data_change",i),i}}forward(t=1){if(this.mindMap.opt.readonly)return;let e=this.history.length;if(this.activeHistoryIndex+t<=e-1){const e=this.history[this.activeHistoryIndex];this.activeHistoryIndex+=t,this.mindMap.emit("back_forward",this.activeHistoryIndex,this.history.length);const i=(0,u.qt)(this.history[this.activeHistoryIndex]);return this.emitDataUpdatesEvent(e,i),this.mindMap.emit("data_change",i),i}}getCopyData(){return this.mindMap.renderer.renderTree?(0,u.UT)({},this.mindMap.renderer.renderTree,!0):null}removeDataUid(t){t=(0,u.qt)(t);let e=t=>{delete t.data.uid,t.children&&t.children.length>0&&t.children.forEach((t=>{e(t)}))};return e(t),t}emitDataUpdatesEvent(t,e){try{const i="data_change_detail";if(this.mindMap.event.listenerCount(i)>0&&t&&e){const n=(0,u.qt)((0,u.Lv)(t)),s=(0,u.qt)((0,u.Lv)(e)),o=[],r=(t,e)=>(t.children&&t.children.length>0&&t.children.forEach(((i,n)=>{t.children[n]="string"==typeof i?e[i]:e[i.data.uid],r(t.children[n],e)})),t);Object.keys(s).forEach((t=>{n[t]?(0,u.Gy)(n[t],s[t])||o.push({action:"update",oldData:r(n[t],n),data:r(s[t],s)}):o.push({action:"create",data:r(s[t],s)})})),Object.keys(n).forEach((t=>{s[t]||o.push({action:"delete",data:r(n[t],n)})})),this.mindMap.emit(i,o)}}catch(t){this.mindMap.opt.errorHandler(n.LY.DATA_CHANGE_DETAIL_EVENT_ERROR,t)}}};const yt=class{constructor(){this.has={},this.queue=[],this.nextTick=(0,u.dY)(this.flush,this)}push(t,e){this.has[t]?this.replaceTask(t,e):(this.has[t]=!0,this.queue.push({name:t,fn:e}),this.nextTick())}replaceTask(t,e){const i=this.queue.findIndex((e=>e.name===t));-1!==i&&(this.queue[i]={name:t,fn:e})}flush(){let t=this.queue.slice(0);this.queue=[],t.forEach((({name:t,fn:e})=>{this.has[t]=!1,e()}))}},Mt={el:null,data:null,readonly:!1,layout:n.aH.LAYOUT.LOGICAL_STRUCTURE,fishboneDeg:45,theme:"default",themeConfig:{},scaleRatio:.2,mouseScaleCenterUseMousePosition:!0,maxTag:5,expandBtnSize:20,imgTextMargin:5,textContentMargin:2,customNoteContentShow:null,textAutoWrapWidth:500,customHandleMousewheel:null,mousewheelAction:n.aH.MOUSE_WHEEL_ACTION.MOVE,mousewheelMoveStep:100,mousewheelZoomActionReverse:!0,defaultInsertSecondLevelNodeText:"二级节点",defaultInsertBelowSecondLevelNodeText:"分支主题",expandBtnStyle:{color:"#808080",fill:"#fff",fontSize:13,strokeColor:"#333333"},expandBtnIcon:{open:"",close:""},expandBtnNumHandler:t=>t,isShowExpandNum:!0,enableShortcutOnlyWhenMouseInSvg:!0,initRootNodePosition:null,nodeTextEditZIndex:3e3,nodeNoteTooltipZIndex:3e3,isEndNodeTextEditOnClickOuter:!0,maxHistoryCount:500,alwaysShowExpandBtn:!1,iconList:[],maxNodeCacheCount:1e3,fitPadding:50,enableCtrlKeyNodeSelection:!0,useLeftKeySelectionRightKeyDrag:!1,beforeTextEdit:null,isUseCustomNodeContent:!1,customCreateNodeContent:null,customInnerElsAppendTo:null,enableAutoEnterTextEditWhenKeydown:!1,customHandleClipboardText:null,disableMouseWheelZoom:!1,errorHandler:(t,e)=>{console.error(t,e)},enableDblclickBackToRootNode:!1,hoverRectColor:"rgb(94, 200, 248)",hoverRectPadding:2,selectTextOnEnterEditText:!1,deleteNodeActive:!0,fit:!1,tagsColorMap:{},cooperateStyle:{avatarSize:22,fontSize:12},onlyOneEnableActiveNodeOnCooperate:!1,defaultGeneralizationText:"概要",handleIsSplitByWrapOnPasteCreateNewNode:null,addHistoryTime:100,isDisableDrag:!1,highlightNodeBoxStyle:{stroke:"rgb(94, 200, 248)",fill:"transparent"},createNewNodeBehavior:n.aH.CREATE_NEW_NODE_BEHAVIOR.DEFAULT,defaultNodeImage:"",isLimitMindMapInCanvas:!1,handleNodePasteImg:null,customCreateNodePath:null,customCreateNodePolygon:null,customTransformNodeLinePath:null,beforeShortcutRun:null,resetScaleOnMoveNodeToCenter:!1,createNodePrefixContent:null,createNodePostfixContent:null,disabledClipboard:!1,customHyperlinkJump:null,selectTranslateStep:3,selectTranslateLimit:20,enableFreeDrag:!1,autoMoveWhenMouseInEdgeOnDrag:!0,dragMultiNodeRectConfig:{width:40,height:20,fill:"rgb(94, 200, 248)"},dragPlaceholderRectFill:"rgb(94, 200, 248)",dragPlaceholderLineConfig:{color:"rgb(94, 200, 248)",width:2},dragOpacityConfig:{cloneNodeOpacity:.5,beingDragNodeOpacity:.3},handleDragCloneNode:null,beforeDragEnd:null,beforeDragStart:null,watermarkConfig:{onlyExport:!1,text:"",lineSpacing:100,textSpacing:100,angle:30,textStyle:{color:"#999",opacity:.5,fontSize:14},belowNode:!1},exportPaddingX:10,exportPaddingY:10,resetCss:"\n    * {\n      margin: 0;\n      padding: 0;\n      box-sizing: border-box;\n    }\n  ",minExportImgCanvasScale:2,addContentToHeader:null,addContentToFooter:null,handleBeingExportSvg:null,defaultAssociativeLineText:"关联",associativeLineIsAlwaysAboveNode:!0,associativeLineInitPointsPosition:{from:"",to:""},enableAdjustAssociativeLinePoints:!0,disableTouchZoom:!1,minTouchZoomScale:20,maxTouchZoomScale:-1,isLimitMindMapInCanvasWhenHasScrollbar:!0,isOnlySearchCurrentRenderNodes:!1,beforeCooperateUpdate:null,rainbowLinesConfig:{open:!1,colorsList:[]},demonstrateConfig:null,enableEditFormulaInRichTextEdit:!0,transformRichTextOnEnterEdit:null,beforeHideRichTextEdit:null,richTextEditFakeInPlace:!1};class wt{constructor(t={}){if(this.opt=this.handleOpt(l()(Mt,t)),this.opt.data=this.handleData(this.opt.data),this.el=this.opt.el,!this.el)throw new Error("缺少容器元素el");this.getElRectInfo(),this.initWidth=this.width,this.initHeight=this.height,this.cssEl=null,this.addCss(),this.initContainer(),this.initTheme(),this.initCache(),this.event=new h({mindMap:this}),this.keyCommand=new xt({mindMap:this}),this.command=new vt({mindMap:this}),this.renderer=new I({mindMap:this}),this.view=new s({mindMap:this}),this.batchExecution=new yt,wt.pluginList.forEach((t=>{this.initPlugin(t)})),this.render(this.opt.fit?()=>this.view.fit():()=>{}),setTimeout((()=>{this.opt.data&&this.command.addHistory()}),0)}handleOpt(t){return n.uO.includes(t.layout)||(t.layout=n.aH.LAYOUT.LOGICAL_STRUCTURE),t.theme=t.theme&&pt[t.theme]?t.theme:"default",t}handleData(t){return(0,u.XB)(t)||Object.keys(t).length<=0?null:((t=(0,u.qt)(t||{})).data&&!t.data.expand&&(t.data.expand=!0),t)}initContainer(){const{associativeLineIsAlwaysAboveNode:t}=this.opt;this.el.classList.add("smm-mind-map-container");const e=()=>{this.associativeLineDraw=this.draw.group(),this.associativeLineDraw.addClass("smm-associative-line-container")};this.svg=(0,R.t4)().addTo(this.el).size(this.width,this.height),this.draw=this.svg.group(),this.draw.addClass("smm-container"),this.lineDraw=this.draw.group(),this.lineDraw.addClass("smm-line-container"),t||e(),this.nodeDraw=this.draw.group(),this.nodeDraw.addClass("smm-node-container"),t&&e(),this.otherDraw=this.draw.group(),this.otherDraw.addClass("smm-other-container")}clearDraw(){this.lineDraw.clear(),this.associativeLineDraw.clear(),this.nodeDraw.clear(),this.otherDraw.clear()}addCss(){this.cssEl=document.createElement("style"),this.cssEl.type="text/css",this.cssEl.innerHTML=n.DR,document.head.appendChild(this.cssEl)}removeCss(){document.head.removeChild(this.cssEl)}render(t,e=""){this.batchExecution.push("render",(()=>{this.initTheme(),this.renderer.render(t,e)}))}reRender(t,e=""){this.renderer.reRender=!0,this.renderer.clearCache(),this.clearDraw(),this.render(t,"")}getElRectInfo(){if(this.elRect=this.el.getBoundingClientRect(),this.width=this.elRect.width,this.height=this.elRect.height,this.width<=0||this.height<=0)throw new Error("容器元素el的宽高不能为0")}resize(){this.getElRectInfo(),this.svg.size(this.width,this.height),this.emit("resize")}on(t,e){this.event.on(t,e)}once(t,e){this.event.once(t,e)}emit(t,...e){this.event.emit(t,...e)}off(t,e){this.event.off(t,e)}initCache(){this.commonCaches={measureCustomNodeContentSizeEl:null,measureRichtextNodeTextSizeEl:null}}initTheme(){this.themeConfig=l()(pt[this.opt.theme],this.opt.themeConfig),mt.A.setBackgroundStyle(this.el,this.themeConfig)}setTheme(t,e=!1){this.execCommand("CLEAR_ACTIVE_NODE"),this.opt.theme=t,e||this.render(null,n.aH.CHANGE_THEME),this.emit("view_theme_change",t)}getTheme(){return this.opt.theme}setThemeConfig(t,e=!1){const i=(0,u.k8)(this.themeConfig,t);if(this.opt.themeConfig=t,!e){let t=(t=>{let e=Object.keys(t);for(let t=0;t<e.length;t++)if(!S.find((i=>i===e[t])))return!1;return!0})(i);this.render(null,t?"":n.aH.CHANGE_THEME)}}getCustomThemeConfig(){return this.opt.themeConfig}getThemeConfig(t){return void 0===t?this.themeConfig:this.themeConfig[t]}getConfig(t){return void 0===t?this.opt:this.opt[t]}updateConfig(t={}){this.opt=this.handleOpt(l().all([Mt,this.opt,t]))}getLayout(){return this.opt.layout}setLayout(t,e=!1){n.uO.includes(t)||(t=n.aH.LAYOUT.LOGICAL_STRUCTURE),this.opt.layout=t,this.view.reset(),this.renderer.setLayout(),e||this.render(null,n.aH.CHANGE_LAYOUT),this.emit("layout_change",t)}execCommand(...t){this.command.exec(...t)}updateData(t){this.renderer.setData(t),this.render(),this.command.addHistory()}setData(t){t=this.handleData(t),this.opt.data=t,this.execCommand("CLEAR_ACTIVE_NODE"),this.command.clearHistory(),this.command.addHistory(),this.renderer.setData(t),this.reRender((()=>{}),n.aH.SET_DATA),this.emit("set_data",t)}setFullData(t){t.root&&this.setData(t.root),t.layout&&this.setLayout(t.layout),t.theme&&(t.theme.template&&this.setTheme(t.theme.template),t.theme.config&&this.setThemeConfig(t.theme.config)),t.view&&this.view.setTransformData(t.view)}getData(t){let e=this.command.getCopyData(),i={};return i=t?{layout:this.getLayout(),root:e,theme:{template:this.getTheme(),config:this.getCustomThemeConfig()},view:this.view.getTransformData()}:e,(0,u.qt)(i)}async export(...t){try{return await this.doExport.export(...t)}catch(t){this.opt.errorHandler(n.LY.EXPORT_ERROR,t)}}toPos(t,e){return{x:t-this.elRect.left,y:e-this.elRect.top}}setMode(t){[n.aH.MODE.READONLY,n.aH.MODE.EDIT].includes(t)&&(this.opt.readonly=t===n.aH.MODE.READONLY,this.opt.readonly&&this.execCommand("CLEAR_ACTIVE_NODE"),this.emit("mode_change",t))}getSvgData({paddingX:t=0,paddingY:e=0,ignoreWatermark:i=!1,addContentToHeader:s,addContentToFooter:o,node:r}={}){const{cssTextList:a,header:h,headerHeight:d,footer:l,footerHeight:c}=(0,u.g4)({addContentToHeader:s,addContentToFooter:o}),p=this.svg,m=this.draw,f=p.width(),g=p.height(),x=m.transform(),v=this.elRect;m.scale(1/x.scaleX,1/x.scaleY);const y=m.rbox();let M=null;r&&(M=(0,u.Ru)(r,y.x,y.y,t,e));y.width+=2*t,y.height+=2*e+0+d+c,m.translate(t,e),p.size(y.width,y.height),m.translate(-y.x+v.left,-y.y+v.top);let w=p.clone();const _=this.watermark&&this.watermark.hasWatermark();if(!i&&_){this.watermark.isInExport=!0;const{onlyExport:t}=this.opt.watermarkConfig;y.width>f||y.height>g?(this.width=y.width,this.height=y.height,this.watermark.onResize(),w=p.clone(),this.width=f,this.height=g,this.watermark.onResize()):t&&(this.watermark.onResize(),w=p.clone()),t&&this.watermark.clear(),this.watermark.isInExport=!1}[n.DR,...a].forEach((t=>{w.add((0,R.t4)(`<style>${t}</style>`))})),h&&d>0&&(w.findOne(".smm-container").translate(0,d),h.width(y.width),h.y(e),w.add(h,0)),l&&c>0&&(l.width(y.width),l.y(y.height-e-c),w.add(l));const N=p.find("defs"),E=w.find("defs");return N.forEach(((t,e)=>{const i=E[e];if(!i)return;const n=t.children(),s=i.children();for(let t=0;t<n.length;t++){const e=n[t],i=s[t];e&&i&&i.attr("id",e.attr("id"))}})),p.size(f,g),m.transform(x),{svg:w,svgHTML:w.svg(),clipData:M,rect:{...y,ratio:y.width/y.height},origWidth:f,origHeight:g,scaleX:x.scaleX,scaleY:x.scaleY}}addPlugin(t,e){-1===wt.hasPlugin(t)&&(wt.usePlugin(t,e),this.initPlugin(t))}removePlugin(t){let e=wt.hasPlugin(t);-1!==e&&(wt.pluginList.splice(e,1),this[t.instanceName]&&(this[t.instanceName].beforePluginRemove&&this[t.instanceName].beforePluginRemove(),delete this[t.instanceName]))}initPlugin(t){this[t.instanceName]=new t({mindMap:this,pluginOpt:t.pluginOpt})}destroy(){this.emit("beforeDestroy"),this.renderer.textEdit.hideEditTextBox(),this.associativeLine&&this.associativeLine.hideEditTextBox(),[...wt.pluginList].forEach((t=>{this[t.instanceName]&&this[t.instanceName].beforePluginDestroy&&this[t.instanceName].beforePluginDestroy(),this[t.instanceName]=null})),this.event.unbind(),this.svg.remove(),mt.A.removeBackgroundStyle(this.el),this.el.classList.remove("smm-mind-map-container"),this.el.innerHTML="",this.el=null,this.removeCss()}}wt.pluginList=[],wt.usePlugin=(t,e={})=>(-1!==wt.hasPlugin(t)||(t.pluginOpt=e,wt.pluginList.push(t)),wt),wt.hasPlugin=t=>wt.pluginList.findIndex((e=>e===t)),wt.defineTheme=(t,e={})=>{if(pt[t])return new Error("该主题名称已存在");pt[t]=l()(A,e)};const _t=wt},624666:(t,e,i)=>{i.d(e,{A:()=>h});var n=i(595851),s=i(993971),o=i(753579),r=i(191509);class a extends s.A{constructor({mindMap:t}){super(t.renderer),this.mindMap=t,this.autoMove=new r.A(t),this.reset(),this.bindEvent()}reset(){this.isDragging=!1,this.mousedownNode=null,this.beingDragNodeList=[],this.nodeList=[],this.overlapNode=null,this.prevNode=null,this.nextNode=null,this.drawTransform=null,this.clone=null,this.placeholder=null,this.placeholderWidth=50,this.placeholderHeight=10,this.placeHolderLine=null,this.placeHolderExtraLines=[],this.offsetX=0,this.offsetY=0,this.isMousedown=!1,this.mouseDownX=0,this.mouseDownY=0,this.mouseMoveX=0,this.mouseMoveY=0,this.checkDragOffset=10,this.minOffset=10}bindEvent(){this.onNodeMousedown=this.onNodeMousedown.bind(this),this.onMousemove=this.onMousemove.bind(this),this.onMouseup=this.onMouseup.bind(this),this.checkOverlapNode=(0,n.nF)(this.checkOverlapNode,300,this),this.mindMap.on("node_mousedown",this.onNodeMousedown),this.mindMap.on("mousemove",this.onMousemove),this.mindMap.on("node_mouseup",this.onMouseup),this.mindMap.on("mouseup",this.onMouseup)}unBindEvent(){this.mindMap.off("node_mousedown",this.onNodeMousedown),this.mindMap.off("mousemove",this.onMousemove),this.mindMap.off("node_mouseup",this.onMouseup),this.mindMap.off("mouseup",this.onMouseup)}onNodeMousedown(t,e){if(this.mindMap.opt.readonly||1!==e.which||t.isGeneralization||t.isRoot)return;e.preventDefault(),this.isMousedown=!0,this.mousedownNode=t;const{x:i,y:n}=this.mindMap.toPos(e.clientX,e.clientY);this.mouseDownX=i,this.mouseDownY=n}onMousemove(t){if(this.mindMap.opt.readonly||!this.isMousedown)return;t.preventDefault();const{x:e,y:i}=this.mindMap.toPos(t.clientX,t.clientY);this.mouseMoveX=e,this.mouseMoveY=i,!this.isDragging&&Math.abs(e-this.mouseDownX)<=this.checkDragOffset&&Math.abs(i-this.mouseDownY)<=this.checkDragOffset||(this.mindMap.emit("node_dragging",this.mousedownNode),this.handleStartMove(),this.onMove(e,i,t))}async onMouseup(t){if(!this.isMousedown)return;const{autoMoveWhenMouseInEdgeOnDrag:e,enableFreeDrag:i,beforeDragEnd:n}=this.mindMap.opt;e&&this.mindMap.select&&this.autoMove.clearAutoMoveTimer(),this.isMousedown=!1,this.beingDragNodeList.forEach((t=>{t.setOpacity(1),t.showChildren(),t.endDrag()}));const s=this.beingDragNodeList.map((t=>t.getData("uid")));this.removeCloneNode();let o=this.overlapNode?this.overlapNode.getData("uid"):"",r=this.prevNode?this.prevNode.getData("uid"):"",a=this.nextNode?this.nextNode.getData("uid"):"";if(this.isDragging&&"function"==typeof n){if(await n({overlapNodeUid:o,prevNodeUid:r,nextNodeUid:a,beingDragNodeList:[...this.beingDragNodeList]}))return void this.reset()}if(this.overlapNode)this.removeNodeActive(this.overlapNode),this.mindMap.execCommand("MOVE_NODE_TO",this.beingDragNodeList,this.overlapNode);else if(this.prevNode)this.removeNodeActive(this.prevNode),this.mindMap.execCommand("INSERT_AFTER",this.beingDragNodeList,this.prevNode);else if(this.nextNode)this.removeNodeActive(this.nextNode),this.mindMap.execCommand("INSERT_BEFORE",this.beingDragNodeList,this.nextNode);else if(this.clone&&i&&1===this.beingDragNodeList.length){let{x:e,y:i}=this.mindMap.toPos(t.clientX-this.offsetX,t.clientY-this.offsetY),{scaleX:n,scaleY:s,translateX:o,translateY:r}=this.drawTransform;e=(e-o)/n,i=(i-r)/s,this.mousedownNode.left=e,this.mousedownNode.top=i,this.mousedownNode.customLeft=e,this.mousedownNode.customTop=i,this.mindMap.execCommand("SET_NODE_CUSTOM_POSITION",this.mousedownNode,e,i),this.mindMap.render()}this.isDragging&&this.mindMap.emit("node_dragend",{overlapNodeUid:o,prevNodeUid:r,nextNodeUid:a,beingDragNodeUidList:s}),this.reset()}removeNodeActive(t){t.getData("isActive")&&this.mindMap.execCommand("SET_NODE_ACTIVE",t,!1)}onMove(t,e,i){if(!this.isMousedown||!this.isDragging)return;let{scaleX:n,scaleY:s,translateX:o,translateY:r}=this.drawTransform;t=(t-this.offsetX-o)/n,e=(e-this.offsetY-r)/s;let a=this.clone.transform();this.clone.translate(t-a.translateX,e-a.translateY),this.checkOverlapNode(),this.drawTransform=this.mindMap.draw.transform(),this.autoMove.clearAutoMoveTimer(),this.autoMove.onMove(i.clientX,i.clientY)}async handleStartMove(){if(!this.isDragging){let t=this.mousedownNode;this.drawTransform=this.mindMap.draw.transform();let{scaleX:e,scaleY:i,translateX:s,translateY:o}=this.drawTransform;this.offsetX=this.mouseDownX-(t.left*e+s),this.offsetY=this.mouseDownY-(t.top*i+o),t.getData("isActive")?this.beingDragNodeList=(0,n.K1)(this.mindMap.renderer.activeNodeList.filter((t=>!t.isRoot&&!t.isGeneralization))):this.beingDragNodeList=[t];const{beforeDragStart:r}=this.mindMap.opt;if("function"==typeof r){if(await r([...this.beingDragNodeList]))return}this.nodeTreeToList(),this.createCloneNode(),this.mindMap.execCommand("CLEAR_ACTIVE_NODE"),this.isDragging=!0}}nodeTreeToList(){const t=[];(0,n.De)(this.mindMap.renderer.root,(e=>{this.checkIsInBeingDragNodeList(e)||(t[e.layerIndex]||(t[e.layerIndex]=[]),t[e.layerIndex].push(e))})),this.nodeList=t.reduceRight(((t,e)=>[...t,...e]),[])}createCloneNode(){if(!this.clone){const{dragMultiNodeRectConfig:t,dragPlaceholderRectFill:e,dragPlaceholderLineConfig:i,dragOpacityConfig:n,handleDragCloneNode:s}=this.mindMap.opt,{width:o,height:r,fill:a}=t,h=this.beingDragNodeList[0],d=h.style.merge("lineColor",!0);if(this.beingDragNodeList.length>1)this.clone=this.mindMap.otherDraw.rect().size(o,r).radius(r/2).fill({color:a||d}),this.offsetX=o/2,this.offsetY=r/2;else{this.clone=h.group.clone();const t=this.clone.findOne(".smm-expand-btn");t&&t.remove(),this.mindMap.otherDraw.add(this.clone),"function"==typeof s&&s(this.clone)}this.clone.opacity(n.cloneNodeOpacity),this.clone.css("z-index",99999),this.placeholder=this.mindMap.otherDraw.rect().fill({color:e||d}).radius(5),this.placeHolderLine=this.mindMap.otherDraw.path().stroke({color:i.color||d,width:i.width}).fill({color:"none"}),this.beingDragNodeList.forEach((t=>{t.setOpacity(n.beingDragNodeOpacity),t.hideChildren(),t.startDrag()}))}}removeCloneNode(){this.clone&&(this.clone.remove(),this.placeholder.remove(),this.placeHolderLine.remove(),this.removeExtraLines())}removeExtraLines(){this.placeHolderExtraLines.forEach((t=>{t.remove()})),this.placeHolderExtraLines=[]}checkOverlapNode(){if(!this.drawTransform||!this.placeholder)return;const{LOGICAL_STRUCTURE:t,LOGICAL_STRUCTURE_LEFT:e,MIND_MAP:i,ORGANIZATION_STRUCTURE:n,CATALOG_ORGANIZATION:s,TIMELINE:r,TIMELINE2:a,VERTICAL_TIMELINE:h,FISHBONE:d}=o.aH.LAYOUT;this.overlapNode=null,this.prevNode=null,this.nextNode=null,this.placeholder.size(0,0),this.placeHolderLine.hide(),this.removeExtraLines(),this.nodeList.forEach((o=>{if(o.getData("isActive")&&this.mindMap.execCommand("SET_NODE_ACTIVE",o,!1),!(this.overlapNode||this.prevNode&&this.nextNode))switch(this.mindMap.opt.layout){case t:case e:this.handleLogicalStructure(o);break;case i:this.handleMindMap(o);break;case n:this.handleOrganizationStructure(o);break;case s:this.handleCatalogOrganization(o);break;case r:this.handleTimeLine(o);break;case a:this.handleTimeLine2(o);break;case h:this.handleLogicalStructure(o);break;case d:this.handleFishbone(o);break;default:this.handleLogicalStructure(o)}})),this.overlapNode&&this.handleOverlapNode()}handleOverlapNode(){const{LOGICAL_STRUCTURE:t,LOGICAL_STRUCTURE_LEFT:e,MIND_MAP:i,ORGANIZATION_STRUCTURE:n,CATALOG_ORGANIZATION:s,TIMELINE:r,TIMELINE2:a,VERTICAL_TIMELINE:h,FISHBONE:d}=o.aH.LAYOUT,{LEFT:l,TOP:c,RIGHT:u,BOTTOM:p}=o.aH.LAYOUT_GROW_DIR,m=this.overlapNode.layerIndex,f=this.overlapNode.children,g=this.mindMap.renderer.layout.getMarginX(m+1),x=this.mindMap.renderer.layout.getMarginY(m+1),v=this.placeholderWidth/2,y=this.placeholderHeight/2;let M="",w="",_="",N=!1,E=!1;if(f.length>0){const o=f[f.length-1],p=this.getNodeRect(o);switch(M=this.getNewChildNodeDir(o),this.mindMap.opt.layout){case t:case i:w=M===l?p.originRight-this.placeholderWidth:p.originLeft,_=p.originBottom+this.minOffset-y;break;case e:w=p.originRight-this.placeholderWidth,_=p.originBottom+this.minOffset-y;break;case n:N=!0,w=p.originRight+this.minOffset-y,_=p.originTop;break;case s:0===m?(N=!0,w=p.originRight+this.minOffset-y,_=p.originTop):(w=p.originLeft,_=p.originBottom+this.minOffset-y);break;case r:0===m?(N=!0,w=p.originRight+this.minOffset-y,_=p.originTop+p.originHeight/2-v):(w=p.originLeft,_=p.originBottom+this.minOffset-y);break;case a:0===m?(N=!0,w=p.originRight+this.minOffset-y,_=p.originTop+p.originHeight/2-v):(w=p.originLeft,_=1===m&&M===c?p.originTop-this.placeholderHeight-this.minOffset+y:p.originBottom+this.minOffset-y);break;case h:0===m?(w=p.originLeft+p.originWidth/2-v,_=p.originBottom+this.minOffset-y):(w=M===u?p.originLeft:p.originRight-this.placeholderWidth,_=p.originBottom+this.minOffset-y);break;case d:m<=1?(E=!0,this.mindMap.execCommand("SET_NODE_ACTIVE",this.overlapNode,!0)):(w=p.originLeft,_=M===c?p.originBottom+this.minOffset-y:p.originTop-this.placeholderHeight-this.minOffset+y)}}else{const o=this.getNodeRect(this.overlapNode);switch(M=this.getNewChildNodeDir(this.overlapNode),this.mindMap.opt.layout){case t:case i:w=M===u?o.originRight+g:o.originLeft-this.placeholderWidth-g,_=o.originTop+(o.originHeight-this.placeholderHeight)/2;break;case e:w=o.originLeft-this.placeholderWidth-g,_=o.originTop+(o.originHeight-this.placeholderHeight)/2;break;case n:N=!0,w=o.originLeft+(o.originWidth-this.placeholderHeight)/2,_=o.originBottom+g;break;case s:0===m&&(N=!0),w=o.originLeft+.5*o.originWidth,_=o.originBottom+g;break;case r:0===m&&(N=!0),w=o.originLeft+.5*o.originWidth,_=o.originBottom+x;break;case a:0===m&&(N=!0),w=o.originLeft+.5*o.originWidth,_=1===m&&M===c?o.originTop-this.placeholderHeight-g:o.originBottom+g;break;case h:0===m&&(N=!0),w=M===u?o.originRight+g:o.originLeft-this.placeholderWidth-g,_=o.originTop+o.originHeight/2-y;break;case d:m<=1?(E=!0,this.mindMap.execCommand("SET_NODE_ACTIVE",this.overlapNode,!0)):(w=o.originLeft+.5*o.originWidth,_=M===p?o.originTop-this.placeholderHeight-this.minOffset+y:o.originBottom+this.minOffset-y)}}E||this.setPlaceholderRect({x:w,y:_,dir:M,rotate:N})}getNewChildNodeDir(t){const{LOGICAL_STRUCTURE:e,LOGICAL_STRUCTURE_LEFT:i,MIND_MAP:n,TIMELINE2:s,VERTICAL_TIMELINE:r,FISHBONE:a}=o.aH.LAYOUT;switch(this.mindMap.opt.layout){case e:return o.aH.LAYOUT_GROW_DIR.RIGHT;case i:return o.aH.LAYOUT_GROW_DIR.LEFT;case n:case s:case r:case a:return t.dir;default:return""}}handleVerticalCheck(t,e,i=!1){const{layout:n}=this.mindMap.opt,{LAYOUT:s,LAYOUT_GROW_DIR:r}=o.aH,{VERTICAL_TIMELINE:a,FISHBONE:h}=s,{BOTTOM:d,LEFT:l}=r,c=this.mouseMoveX,u=this.mouseMoveY,p=this.getNodeRect(t),m=this.getNewChildNodeDir(t),f=t.layerIndex;(i||n===h&&m===d&&f>=3)&&(e=e.reverse());let g=p.originHeight/4,{prevBrotherOffset:x,nextBrotherOffset:v}=this.getNodeDistanceToSiblingNode(e,t,p,"v");if(p.left<=c&&p.right>=c){if(!(this.overlapNode||this.prevNode||this.nextNode||t.isRoot)){let e=v>0?u>p.bottom&&u<=p.bottom+v:u>=p.bottom-g&&u<=p.bottom,s=x>0?u<p.top&&u>=p.top-x:u>=p.top&&u<=p.top+g;const{scaleY:o}=this.drawTransform;let r=m===l?p.originRight-this.placeholderWidth:p.originLeft,d=!1;switch(n){case a:1===f&&(r=p.originLeft+p.originWidth/2-this.placeholderWidth/2)}if(e){i?this.nextNode=t:this.prevNode=t;let e=p.originBottom+v/o-this.placeholderHeight/2;switch(n){case h:2===f&&(d=!0,e=p.originBottom+this.minOffset-this.placeholderHeight/2)}this.setPlaceholderRect({x:r,y:e,dir:m,notRenderLine:d})}else if(s){i?this.prevNode=t:this.nextNode=t;let e=p.originTop-this.placeholderHeight-x/o+this.placeholderHeight/2;switch(n){case h:2===f&&(d=!0,e=p.originTop-this.placeholderHeight-this.minOffset+this.placeholderHeight/2)}this.setPlaceholderRect({x:r,y:e,dir:m,notRenderLine:d})}}this.checkIsOverlap({node:t,dir:"v",prevBrotherOffset:x,nextBrotherOffset:v,size:g,pos:u,nodeRect:p})}}handleHorizontalCheck(t,e){const{layout:i}=this.mindMap.opt,{LAYOUT:n}=o.aH,{FISHBONE:s,TIMELINE:r,TIMELINE2:a}=n;let h=this.mouseMoveX,d=this.mouseMoveY,l=this.getNodeRect(t),c=l.originWidth/4,{prevBrotherOffset:u,nextBrotherOffset:p}=this.getNodeDistanceToSiblingNode(e,t,l,"h");if(l.top<=d&&l.bottom>=d){if(!(this.overlapNode||this.prevNode||this.nextNode||t.isRoot)){let e=p>0?h<l.right+p&&h>=l.right:h<=l.right&&h>=l.right-c,n=u>0?h>l.left-u&&h<=l.left:h<=l.left+c&&h>=l.left;const{scaleX:o}=this.drawTransform,d=t.layerIndex;let m=l.originTop,f=!1;switch(i){case r:case a:m=l.originTop+l.originHeight/2-this.placeholderWidth/2;break;case s:1===d&&(f=!0,m=l.originTop+l.originHeight/2-this.placeholderWidth/2)}e?(this.prevNode=t,this.setPlaceholderRect({x:l.originRight+p/o-this.placeholderHeight/2,y:m,rotate:!0,notRenderLine:f})):n&&(this.nextNode=t,this.setPlaceholderRect({x:l.originLeft-this.placeholderHeight-u/o+this.placeholderHeight/2,y:m,rotate:!0,notRenderLine:f}))}this.checkIsOverlap({node:t,dir:"h",prevBrotherOffset:u,nextBrotherOffset:p,size:c,pos:h,nodeRect:l})}}getNodeDistanceToSiblingNode(t,e,i,s){const{TOP:r,LEFT:a,BOTTOM:h,RIGHT:d}=o.aH.LAYOUT_GROW_DIR;let{scaleX:l,scaleY:c}=this.drawTransform,u="v"===s?r:a,p="v"===s?h:d,m="v"===s?c:l,f=this.minOffset*m,g=(0,n._H)(e,t),x=null,v=null;-1!==g&&(g-1>=0&&(x=t[g-1]),g+1<=t.length-1&&(v=t[g+1]));let y=0;if(x){let t=this.getNodeRect(x);y=i[u]-t[p],y=y>=f?y/2:0}else y=f;let M=0;if(v){M=this.getNodeRect(v)[u]-i[p],M=M>=f?M/2:0}else M=f;return{prevBrother:x,prevBrotherOffset:y,nextBrother:v,nextBrotherOffset:M}}setPlaceholderRect({x:t,y:e,dir:i,rotate:n,notRenderLine:s}){let o=this.placeholderWidth,r=this.placeholderHeight;if(n){const t=o;o=r,r=t}if(this.placeholder.size(o,r).move(t,e),s)return;const{dragPlaceholderLineConfig:a}=this.mindMap.opt;let h=null,d=null;this.overlapNode?(h=this.overlapNode,d=this.overlapNode):(h=this.prevNode||this.nextNode,d=h.parent),d=d.fakeClone(),h=h.fakeClone();const l=this.beingDragNodeList[0].fakeClone();l.dir=i,l.left=t,l.top=e,l.width=o,l.height=r,d.children=[l],d._lines=[],this.placeHolderLine.show(),this.mindMap.renderer.layout.renderLine(d,[this.placeHolderLine],((...t)=>{}),h.style.getStyle("lineStyle",!0)),this.placeHolderExtraLines=[...d._lines],this.placeHolderExtraLines.forEach((t=>{this.mindMap.otherDraw.add(t),t.stroke({color:a.color,width:a.width}).fill({color:"none"})}))}checkIsOverlap({node:t,dir:e,prevBrotherOffset:i,nextBrotherOffset:n,size:s,pos:r,nodeRect:a}){const{TOP:h,LEFT:d,BOTTOM:l,RIGHT:c}=o.aH.LAYOUT_GROW_DIR;let u="v"===e?h:d,p="v"===e?l:c;this.overlapNode||this.prevNode||this.nextNode||a[u]+(i>0?0:s)<=r&&a[p]-(n>0?0:s)>=r&&(this.overlapNode=t)}handleLogicalStructure(t){const e=this.commonGetNodeCheckList(t);this.handleVerticalCheck(t,e)}handleMindMap(t){const e=t.parent?t.parent.children.filter((e=>{let i=!0;return 1===t.layerIndex&&(i=e.dir===t.dir),i&&!this.checkIsInBeingDragNodeList(e)})):[];this.handleVerticalCheck(t,e)}handleOrganizationStructure(t){const e=this.commonGetNodeCheckList(t);this.handleHorizontalCheck(t,e)}handleCatalogOrganization(t){const e=this.commonGetNodeCheckList(t);1===t.layerIndex?this.handleHorizontalCheck(t,e):this.handleVerticalCheck(t,e)}handleTimeLine(t){let e=this.commonGetNodeCheckList(t);1===t.layerIndex?this.handleHorizontalCheck(t,e):this.handleVerticalCheck(t,e)}handleTimeLine2(t){let e=this.commonGetNodeCheckList(t);1===t.layerIndex?this.handleHorizontalCheck(t,e):t.dir===o.aH.LAYOUT_GROW_DIR.TOP&&2===t.layerIndex?this.handleVerticalCheck(t,e,!0):this.handleVerticalCheck(t,e)}handleFishbone(t){let e=t.parent?t.parent.children.filter((t=>t.layerIndex>1&&!this.checkIsInBeingDragNodeList(t))):[];1===t.layerIndex?this.handleHorizontalCheck(t,e):t.dir===o.aH.LAYOUT_GROW_DIR.TOP&&2===t.layerIndex?this.handleVerticalCheck(t,e,!0):this.handleVerticalCheck(t,e)}commonGetNodeCheckList(t){return t.parent?[...t.parent.children].filter((t=>!this.checkIsInBeingDragNodeList(t))):[]}getNodeRect(t){let{scaleX:e,scaleY:i,translateX:n,translateY:s}=this.drawTransform,{left:o,top:r,width:a,height:h}=t,d=o,l=r,c=r+h,u=o+a,p=(o+a)*e+n,m=(r+h)*i+s;return o=o*e+n,r=r*i+s,{left:o,top:r,right:p,bottom:m,originWidth:a,originHeight:h,originLeft:d,originTop:l,originBottom:c,originRight:u}}checkIsInBeingDragNodeList(t){return!!this.beingDragNodeList.find((e=>e.uid===t.uid||e.isAncestor(t)))}beforePluginRemove(){this.unBindEvent()}beforePluginDestroy(){this.unBindEvent()}}a.instanceName="drag";const h=a},753579:(t,e,i)=>{i.d(e,{DR:()=>h,LY:()=>a,QK:()=>r,aH:()=>n,iD:()=>s,uO:()=>o});const n={CHANGE_THEME:"changeTheme",CHANGE_LAYOUT:"changeLayout",SET_DATA:"setData",TRANSFORM_TO_NORMAL_NODE:"transformAllNodesToNormalNode",MODE:{READONLY:"readonly",EDIT:"edit"},LAYOUT:{LOGICAL_STRUCTURE:"logicalStructure",LOGICAL_STRUCTURE_LEFT:"logicalStructureLeft",MIND_MAP:"mindMap",ORGANIZATION_STRUCTURE:"organizationStructure",CATALOG_ORGANIZATION:"catalogOrganization",TIMELINE:"timeline",TIMELINE2:"timeline2",FISHBONE:"fishbone",VERTICAL_TIMELINE:"verticalTimeline"},DIR:{UP:"up",LEFT:"left",DOWN:"down",RIGHT:"right"},KEY_DIR:{LEFT:"Left",UP:"Up",RIGHT:"Right",DOWN:"Down"},SHAPE:{RECTANGLE:"rectangle",DIAMOND:"diamond",PARALLELOGRAM:"parallelogram",ROUNDED_RECTANGLE:"roundedRectangle",OCTAGONAL_RECTANGLE:"octagonalRectangle",OUTER_TRIANGULAR_RECTANGLE:"outerTriangularRectangle",INNER_TRIANGULAR_RECTANGLE:"innerTriangularRectangle",ELLIPSE:"ellipse",CIRCLE:"circle"},MOUSE_WHEEL_ACTION:{ZOOM:"zoom",MOVE:"move"},INIT_ROOT_NODE_POSITION:{LEFT:"left",TOP:"top",RIGHT:"right",BOTTOM:"bottom",CENTER:"center"},LAYOUT_GROW_DIR:{LEFT:"left",TOP:"top",RIGHT:"right",BOTTOM:"bottom"},PASTE_TYPE:{CLIP_BOARD:"clipBoard",CANVAS:"canvas"},SCROLL_BAR_DIR:{VERTICAL:"vertical",HORIZONTAL:"horizontal"},CREATE_NEW_NODE_BEHAVIOR:{DEFAULT:"default",NOT_ACTIVE:"notActive",ACTIVE_ONLY:"activeOnly"}},s={[n.INIT_ROOT_NODE_POSITION.LEFT]:0,[n.INIT_ROOT_NODE_POSITION.TOP]:0,[n.INIT_ROOT_NODE_POSITION.RIGHT]:1,[n.INIT_ROOT_NODE_POSITION.BOTTOM]:1,[n.INIT_ROOT_NODE_POSITION.CENTER]:.5},o=(n.LAYOUT.LOGICAL_STRUCTURE,n.LAYOUT.LOGICAL_STRUCTURE_LEFT,n.LAYOUT.MIND_MAP,n.LAYOUT.ORGANIZATION_STRUCTURE,n.LAYOUT.CATALOG_ORGANIZATION,n.LAYOUT.TIMELINE,n.LAYOUT.TIMELINE2,n.LAYOUT.VERTICAL_TIMELINE,n.LAYOUT.FISHBONE,[n.LAYOUT.LOGICAL_STRUCTURE,n.LAYOUT.LOGICAL_STRUCTURE_LEFT,n.LAYOUT.MIND_MAP,n.LAYOUT.CATALOG_ORGANIZATION,n.LAYOUT.ORGANIZATION_STRUCTURE,n.LAYOUT.TIMELINE,n.LAYOUT.TIMELINE2,n.LAYOUT.VERTICAL_TIMELINE,n.LAYOUT.FISHBONE]),r=["text","image","imageTitle","imageSize","icon","tag","hyperlink","hyperlinkTitle","note","expand","isActive","generalization","richText","resetRichText","uid","activeStyle","associativeLineTargets","associativeLineTargetControlOffsets","associativeLinePoint","associativeLineText","attachmentUrl","attachmentName","notation","outerFrame"],a={READ_CLIPBOARD_ERROR:"read_clipboard_error",PARSE_PASTE_DATA_ERROR:"parse_paste_data_error",CUSTOM_HANDLE_CLIPBOARD_TEXT_ERROR:"custom_handle_clipboard_text_error",LOAD_CLIPBOARD_IMAGE_ERROR:"load_clipboard_image_error",BEFORE_TEXT_EDIT_ERROR:"before_text_edit_error",EXPORT_ERROR:"export_error",EXPORT_LOAD_IMAGE_ERROR:"export_load_image_error",DATA_CHANGE_DETAIL_EVENT_ERROR:"data_change_detail_event_error"},h="\n  /* 鼠标hover和激活时渲染的矩形 */\n  .smm-hover-node{\n    display: none;\n    opacity: 0.6;\n    stroke-width: 1;\n  }\n\n  .smm-node:not(.smm-node-dragging):hover .smm-hover-node{\n    display: block;\n  }\n\n  .smm-node.active .smm-hover-node, .smm-node-highlight .smm-hover-node{\n    display: block;\n    opacity: 1;\n    stroke-width: 2;\n  }\n"},915754:(t,e,i)=>{i.d(e,{A:()=>a});var n=i(595851);i(99425);const s=["paddingX","paddingY"],o=["backgroundColor","backgroundImage","backgroundRepeat","backgroundPosition","backgroundSize"];class r{static setBackgroundStyle(t,e){if(!r.cacheStyle){r.cacheStyle={};let e=window.getComputedStyle(t);o.forEach((t=>{r.cacheStyle[t]=e[t]}))}let{backgroundColor:i,backgroundImage:n,backgroundRepeat:s,backgroundPosition:a,backgroundSize:h}=e;t.style.backgroundColor=i,n&&"none"!==n?(t.style.backgroundImage=`url(${n})`,t.style.backgroundRepeat=s,t.style.backgroundPosition=a,t.style.backgroundSize=h):t.style.backgroundImage="none"}static removeBackgroundStyle(t){r.cacheStyle&&(o.forEach((e=>{t.style[e]=r.cacheStyle[e]})),r.cacheStyle=null)}constructor(t){this.ctx=t,this._markerPath=null,this._marker=null,this._gradient=null}merge(t,e){let i=this.ctx.mindMap.themeConfig,n=i.node;return e||s.includes(t)?n=i:this.ctx.isGeneralization?n=i.generalization:0===this.ctx.layerIndex?n=i.root:1===this.ctx.layerIndex&&(n=i.second),void 0!==this.getSelfStyle(t)?this.getSelfStyle(t):n[t]}getStyle(t,e){return this.merge(t,e)}getSelfStyle(t){return this.ctx.getData(t)}rect(t){this.shape(t),t.radius(this.merge("borderRadius"))}shape(t){if(this.merge("gradientStyle"))this._gradient||(this._gradient=this.ctx.nodeDraw.gradient("linear")),this._gradient.update((t=>{t.stop(0,this.merge("startColor")),t.stop(1,this.merge("endColor"))})),t.fill(this._gradient);else{const e=this.ctx.mindMap.themeConfig.fillColors;t.fill({color:e[this.ctx.layerIndex%e.length]})}t.stroke({color:this.merge("borderColor"),width:this.merge("borderWidth"),dasharray:this.merge("borderDasharray")})}text(t){t.fill({color:this.merge("color")}).css({"font-family":this.merge("fontFamily"),"font-size":this.merge("fontSize"),"font-weight":this.merge("fontWeight"),"font-style":this.merge("fontStyle"),"text-decoration":this.merge("textDecoration")})}createStyleText(){return`\n      color: ${this.merge("color")};\n      font-family: ${this.merge("fontFamily")};\n      font-size: ${this.merge("fontSize")+"px"};\n      font-weight: ${this.merge("fontWeight")};\n      font-style: ${this.merge("fontStyle")};\n      text-decoration: ${this.merge("textDecoration")}\n    `}getTextFontStyle(){return{italic:"italic"===this.merge("fontStyle"),bold:this.merge("fontWeight"),fontSize:this.merge("fontSize"),fontFamily:this.merge("fontFamily")}}domText(t,e=1,i){t.style.fontFamily=this.merge("fontFamily"),t.style.fontSize=this.merge("fontSize")*e+"px",t.style.fontWeight=this.merge("fontWeight")||"normal",t.style.lineHeight=i?this.merge("lineHeight"):"normal",t.style.fontStyle=this.merge("fontStyle")}tagText(t){t.fill({color:"#3471D3"}).css({"font-size":"12px"})}tagRect(t,e,i){t.fill({color:i||(0,n.pE)(e.node.textContent)})}iconNode(t){t.attr({fill:this.merge("color")})}line(t,{width:e,color:i,dasharray:n}={},s,o){if(t.stroke({color:i,dasharray:n,width:e}).fill({color:"none"}),s){const e=this.merge("showLineMarker",!0),n=o.style;if(e){n._marker=n._marker||n.createMarker(),n._markerPath.stroke({color:i}).fill({color:i}),t.attr("marker-start",""),t.attr("marker-end","");const e=n.merge("lineMarkerDir");t.marker(e,n._marker)}else n._marker&&(t.attr("marker-start",""),t.attr("marker-end",""),n._marker.remove(),n._marker=null)}}createMarker(){return this.ctx.lineDraw.marker(20,20,(t=>{t.ref(8,5),t.size(20,20),t.attr("markerUnits","userSpaceOnUse"),t.attr("orient","auto-start-reverse"),this._markerPath=t.path("M0,0 L2,5 L0,10 L10,5 Z")}))}generalizationLine(t){t.stroke({width:this.merge("generalizationLineWidth",!0),color:this.merge("generalizationLineColor",!0)}).fill({color:"none"})}iconBtn(t,e,i){let{color:n,fill:s,fontSize:o,fontColor:r}=this.ctx.mindMap.opt.expandBtnStyle||{color:"#808080",fill:"#fff",fontSize:12,strokeColor:"#333333",fontColor:"#333333"};t.fill({color:n}),e.fill({color:n}),i.fill({color:s}),this.ctx.mindMap.opt.isShowExpandNum&&t.attr({"font-size":o,"font-color":r})}hasCustomStyle(){let t=!1;return Object.keys(this.ctx.getData()).forEach((e=>{(0,n.XS)(e)&&(t=!0)})),t}hoverNode(t){const{hoverRectColor:e}=this.ctx.mindMap.opt;t.radius(5).fill("none").stroke({color:e})}onRemove(){this._marker&&(this._marker.remove(),this._marker=null),this._markerPath&&(this._markerPath.remove(),this._markerPath=null),this._gradient&&(this._gradient.remove(),this._gradient=null)}}r.cacheStyle=null;const a=r},972877:t=>{var e=function(t){return function(t){return!!t&&"object"==typeof t}(t)&&!function(t){var e=Object.prototype.toString.call(t);return"[object RegExp]"===e||"[object Date]"===e||function(t){return t.$$typeof===i}(t)}(t)};var i="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function n(t,i){var n;return i&&!0===i.clone&&e(t)?o((n=t,Array.isArray(n)?[]:{}),t,i):t}function s(t,i,s){var r=t.slice();return i.forEach((function(i,a){void 0===r[a]?r[a]=n(i,s):e(i)?r[a]=o(t[a],i,s):-1===t.indexOf(i)&&r.push(n(i,s))})),r}function o(t,i,r){var a=Array.isArray(i);return a===Array.isArray(t)?a?((r||{arrayMerge:s}).arrayMerge||s)(t,i,r):function(t,i,s){var r={};return e(t)&&Object.keys(t).forEach((function(e){r[e]=n(t[e],s)})),Object.keys(i).forEach((function(a){e(i[a])&&t[a]?r[a]=o(t[a],i[a],s):r[a]=n(i[a],s)})),r}(t,i,r):n(i,r)}o.all=function(t,e){if(!Array.isArray(t)||t.length<2)throw new Error("first argument should be an array with at least two elements");return t.reduce((function(t,i){return o(t,i,e)}))};var r=o;t.exports=r},993971:(t,e,i)=>{i.d(e,{A:()=>N});var n=i(915754),s=i(388746),o=i(99425),r=i(595851);const a={formatGetGeneralization:function(){const t=this.getData("generalization");return Array.isArray(t)?t:t?[t]:[]},checkHasGeneralization:function(){return this.formatGetGeneralization().length>0},checkHasSelfGeneralization:function(){return!!this.formatGetGeneralization().find((t=>!t.range||t.range.length<=0))},getGeneralizationNodeIndex:function(t){return this._generalizationList.findIndex((e=>e.generalizationNode.uid===t.uid))},createGeneralizationNode:function(){if(this.isGeneralization||!this.checkHasGeneralization())return;let t=0,e=0;this.formatGetGeneralization().forEach(((i,n)=>{let s=this._generalizationList[n];s||(s=this._generalizationList[n]={}),s.node=this,s.range=i.range,s.generalizationLine||(s.generalizationLine=this.lineDraw.path()),s.generalizationNode||(s.generalizationNode=new w({data:{inserting:i.inserting,data:i},uid:(0,r.Xn)(),renderer:this.renderer,mindMap:this.mindMap,isGeneralization:!0})),delete i.inserting,s.generalizationNode.generalizationBelongNode=this,s.generalizationNode.width>t&&(t=s.generalizationNode.width),s.generalizationNode.height>e&&(e=s.generalizationNode.height),i.isActive&&this.renderer.addNodeToActiveList(s.generalizationNode)})),this._generalizationNodeWidth=t,this._generalizationNodeHeight=e},updateGeneralization:function(){this.isGeneralization||(this.removeGeneralization(),this.createGeneralizationNode())},updateGeneralizationData:function(){const t=this.nodeData.children.length,e=this.formatGetGeneralization(),i=[];e.forEach((e=>{e.range?e.range.length>0&&e.range[0]<=t-1&&e.range[1]<=t-1&&i.push(e):i.push(e)})),i.length!==e.length&&this.setData({generalization:i})},renderGeneralization:function(){if(this.isGeneralization)return;this.updateGeneralizationData();const t=this.formatGetGeneralization();t.length<=0||!1===this.getData("expand")?this.removeGeneralization():(t.length!==this._generalizationList.length&&this.removeGeneralization(),this.createGeneralizationNode(),this.renderer.layout.renderGeneralization(this._generalizationList),this._generalizationList.forEach((t=>{this.style.generalizationLine(t.generalizationLine),t.generalizationNode.render()})))},removeGeneralization:function(){this.isGeneralization||(this._generalizationList.forEach((t=>{t.generalizationNode.style.onRemove(),t.generalizationLine&&(t.generalizationLine.remove(),t.generalizationLine=null),t.generalizationNode&&(this.renderer.removeNodeFromActiveList(t.generalizationNode),t.generalizationNode.remove(),t.generalizationNode=null)})),this._generalizationList=[],this.generalizationBelongNode&&this.nodeDraw.find(".generalization_"+this.generalizationBelongNode.uid).remove())},hideGeneralization:function(){this.isGeneralization||this._generalizationList.forEach((t=>{t.generalizationLine&&t.generalizationLine.hide(),t.generalizationNode&&t.generalizationNode.hide()}))},showGeneralization:function(){this.isGeneralization||this._generalizationList.forEach((t=>{t.generalizationLine&&t.generalizationLine.show(),t.generalizationNode&&t.generalizationNode.show()}))},setGeneralizationOpacity:function(t){this._generalizationList.forEach((e=>{e.generalizationLine.opacity(t),e.generalizationNode.group.opacity(t)}))},handleGeneralizationMouseenter:function(){const t=this.generalizationBelongNode,e=t.formatGetGeneralization()[t.getGeneralizationNodeIndex(this)];Array.isArray(e.range)&&e.range.length>0?this.mindMap.renderer.highlightNode(t,e.range):this.mindMap.renderer.highlightNode(t)},handleGeneralizationMouseleave:function(){this.mindMap.renderer.closeHighlightNode()}},h={open:'<svg t="1618141562310" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13476" width="200" height="200"><path d="M475.136 327.168v147.968h-147.968v74.24h147.968v147.968h74.24v-147.968h147.968v-74.24h-147.968v-147.968h-74.24z m36.864-222.208c225.28 0 407.04 181.76 407.04 407.04s-181.76 407.04-407.04 407.04-407.04-181.76-407.04-407.04 181.76-407.04 407.04-407.04z m0-74.24c-265.216 0-480.768 215.552-480.768 480.768s215.552 480.768 480.768 480.768 480.768-215.552 480.768-480.768-215.552-480.768-480.768-480.768z" p-id="13477"></path></svg>',close:'<svg t="1618141589243" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13611" width="200" height="200"><path d="M512 105.472c225.28 0 407.04 181.76 407.04 407.04s-181.76 407.04-407.04 407.04-407.04-181.76-407.04-407.04 181.76-407.04 407.04-407.04z m0-74.24c-265.216 0-480.768 215.552-480.768 480.768s215.552 480.768 480.768 480.768 480.768-215.552 480.768-480.768-215.552-480.768-480.768-480.768z" p-id="13612"></path><path d="M252.928 474.624h518.144v74.24h-518.144z" p-id="13613"></path></svg>',remove:'<svg width="14px" height="14px" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13611" width="200" height="200"><path fill="#ffffff" d="M512 105.472c225.28 0 407.04 181.76 407.04 407.04s-181.76 407.04-407.04 407.04-407.04-181.76-407.04-407.04 181.76-407.04 407.04-407.04z m0-74.24c-265.216 0-480.768 215.552-480.768 480.768s215.552 480.768 480.768 480.768 480.768-215.552 480.768-480.768-215.552-480.768-480.768-480.768z" p-id="13612"></path><path fill="#ffffff" d="M252.928 474.624h518.144v74.24h-518.144z" p-id="13613"></path></svg>',imgAdjust:'<svg width="12px" height="12px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="#ffffff" d="M1008.128 614.4a25.6 25.6 0 0 0-27.648 5.632l-142.848 142.848L259.072 186.88 401.92 43.52A25.6 25.6 0 0 0 384 0h-358.4a25.6 25.6 0 0 0-25.6 25.6v358.4a25.6 25.6 0 0 0 43.52 17.92l143.36-142.848 578.048 578.048-142.848 142.848a25.6 25.6 0 0 0 17.92 43.52h358.4a25.6 25.6 0 0 0 25.6-25.6v-358.4a25.6 25.6 0 0 0-15.872-25.088z"  /></svg>'};const d={createExpandNodeContent:function(){if(this._openExpandNode)return;let{close:t,open:e}=this.mindMap.opt.expandBtnIcon||{};this.mindMap.opt.isShowExpandNum?(this._openExpandNode=(0,o.t4)().text().size(this.expandBtnSize,this.expandBtnSize),this._openExpandNode.attr({"text-anchor":"middle","dominant-baseline":"middle",x:this.expandBtnSize/2,y:2})):(this._openExpandNode=(0,o.t4)(e||h.open).size(this.expandBtnSize,this.expandBtnSize),this._openExpandNode.x(0).y(-this.expandBtnSize/2)),this._closeExpandNode=(0,o.t4)(t||h.close).size(this.expandBtnSize,this.expandBtnSize),this._closeExpandNode.x(0).y(-this.expandBtnSize/2),this._fillExpandNode=(new o.jl).size(this.expandBtnSize),this._fillExpandNode.x(0).y(-this.expandBtnSize/2),this.style.iconBtn(this._openExpandNode,this._closeExpandNode,this._fillExpandNode)},updateExpandBtnNode:function(){let t,{expand:e}=this.getData();if(e!==this._lastExpandBtnType&&(this._expandBtn&&this._expandBtn.clear(),this.createExpandNodeContent(),!1===e?(t=this._openExpandNode,this._lastExpandBtnType=!1):(t=this._closeExpandNode,this._lastExpandBtnType=!0),this._expandBtn)){let{isShowExpandNum:i,expandBtnStyle:n,expandBtnNumHandler:s}=this.mindMap.opt;if(i)if(e)this._fillExpandNode.stroke("none");else{this._fillExpandNode.stroke({color:n.strokeColor});let e=this.sumNode(this.nodeData.children);e=s(e),t.text(e)}this._expandBtn.add(this._fillExpandNode).add(t)}},updateExpandBtnPos:function(){this._expandBtn&&this.renderer.layout.renderExpandBtn(this,this._expandBtn)},renderExpandBtn:function(){!this.nodeData.children||this.nodeData.children.length<=0||this.isRoot||(this._expandBtn||(this._expandBtn=new o.G,this._expandBtn.on("mouseover",(t=>{t.stopPropagation(),this._expandBtn.css({cursor:"pointer"})})),this._expandBtn.on("mouseout",(t=>{t.stopPropagation(),this._expandBtn.css({cursor:"auto"})})),this._expandBtn.on("click",(t=>{t.stopPropagation(),this.mindMap.execCommand("SET_NODE_EXPAND",this,!this.getData("expand")),this.mindMap.emit("expand_btn_click",this)})),this._expandBtn.on("dblclick",(t=>{t.stopPropagation()})),this._expandBtn.addClass("smm-expand-btn")),this.group.add(this._expandBtn),this._showExpandBtn=!0,this.updateExpandBtnNode(),this.updateExpandBtnPos())},removeExpandBtn:function(){this._expandBtn&&this._showExpandBtn&&(this._expandBtn.remove(),this._showExpandBtn=!1)},showExpandBtn:function(){this.mindMap.opt.alwaysShowExpandBtn||setTimeout((()=>{this.renderExpandBtn()}),0)},hideExpandBtn:function(){if(this.mindMap.opt.alwaysShowExpandBtn||this._isMouseenter)return;let{isActive:t,expand:e}=this.getData();!t&&e&&setTimeout((()=>{this.removeExpandBtn()}),0)},sumNode:function(t=[]){return t.reduce(((t,e)=>t+this.sumNode(e.children||[])),t.length)}};const l={setData:function(t={}){this.mindMap.execCommand("SET_NODE_DATA",this,t)},setText:function(t,e,i){this.mindMap.execCommand("SET_NODE_TEXT",this,t,e,i)},setImage:function(t){this.mindMap.execCommand("SET_NODE_IMAGE",this,t)},setIcon:function(t){this.mindMap.execCommand("SET_NODE_ICON",this,t)},setHyperlink:function(t,e){this.mindMap.execCommand("SET_NODE_HYPERLINK",this,t,e)},setNote:function(t){this.mindMap.execCommand("SET_NODE_NOTE",this,t)},setAttachment:function(t,e){this.mindMap.execCommand("SET_NODE_ATTACHMENT",this,t,e)},setTag:function(t){this.mindMap.execCommand("SET_NODE_TAG",this,t)},setShape:function(t){this.mindMap.execCommand("SET_NODE_SHAPE",this,t)},setStyle:function(t,e){this.mindMap.execCommand("SET_NODE_STYLE",this,t,e)},setStyles:function(t){this.mindMap.execCommand("SET_NODE_STYLES",this,t)}},c=[{name:"优先级图标",type:"priority",list:[{name:"1",icon:'<svg viewBox="0 0 1024 1024"><path d="M512.042667 1024C229.248 1024 0 794.794667 0 511.957333 0 229.205333 229.248 0 512.042667 0 794.752 0 1024 229.205333 1024 511.957333 1024 794.794667 794.752 1024 512.042667 1024z" fill="#E93B30"></path><path d="M580.309333 256h-75.52c-10.666667 29.824-30.165333 55.765333-58.709333 78.165333-28.416 22.314667-54.869333 37.418667-79.146667 45.397334v84.608a320 320 0 0 0 120.234667-70.698667v352.085333H580.266667V256z" fill="#FFFFFF"></path></svg>'},{name:"2",icon:'<svg viewBox="0 0 1024 1024"><path d="M511.957333 1024C229.248 1024 0 794.752 0 512S229.248 0 511.957333 0C794.752 0 1024 229.248 1024 512s-229.248 512-512.042667 512z" fill="#FA8D2E"></path><path d="M667.946667 658.602667h-185.301334c4.864-8.533333 11.178667-17.066667 19.072-25.984 7.808-8.874667 26.453333-26.837333 55.936-53.888 29.525333-27.008 49.877333-47.786667 61.226667-62.165334 16.981333-21.717333 29.44-42.453333 37.290667-62.293333 7.808-19.84 11.776-40.746667 11.776-62.677333 0-38.570667-13.738667-70.741333-41.088-96.725334C599.466667 268.928 561.706667 256 513.834667 256c-43.690667 0-80.128 11.136-109.354667 33.578667-29.098667 22.4-46.506667 59.306667-52.010667 110.805333l93.184 9.301333c1.792-27.349333 8.405333-46.890667 19.754667-58.624 11.434667-11.776 26.837333-17.664 46.165333-17.664 19.541333 0 34.858667 5.589333 45.909334 16.768 11.136 11.264 16.682667 27.221333 16.682666 48.042667 0 18.858667-6.4 37.930667-19.242666 57.258667-9.472 14.037333-35.157333 40.533333-77.098667 79.872-52.096 48.554667-87.04 87.509333-104.704 116.821333A226.688 226.688 0 0 0 341.333333 745.429333h326.613334v-86.826666z" fill="#FFFFFF"></path></svg>'},{name:"3",icon:'<svg viewBox="0 0 1024 1024"><path d="M512 0C229.248 0 0 229.248 0 512s229.248 512 512 512 512-229.248 512-512S794.752 0 512 0z" fill="#2E66FA"></path><path d="M627.754667 731.733333c-29.354667 25.088-66.901333 37.632-112.725334 37.632-44.928 0-81.792-11.52-110.592-34.773333-33.066667-26.538667-49.877333-64.469333-50.304-114.133333h92.16c0.426667 21.76 7.552 38.314667 21.333334 49.664 12.288 10.88 28.117333 16.341333 47.402666 16.341333 20.309333 0 36.778667-6.101333 49.322667-18.432 12.544-12.330667 18.773333-29.568 18.773333-51.797333 0-21.290667-6.229333-38.186667-18.773333-50.773334-12.544-12.501333-29.866667-18.773333-52.138667-18.773333h-13.525333v-80.042667H512c42.112 0 63.274667-21.034667 63.274667-63.146666 0-20.309333-5.888-36.096-17.706667-47.445334a60.757333 60.757333 0 0 0-43.818667-17.066666c-17.493333 0-32 5.504-43.434666 16.298666-11.562667 10.88-17.792 25.728-18.773334 44.714667H359.68c0.981333-43.946667 16.042667-78.976 45.397333-104.96 29.354667-25.941333 65.706667-39.04 109.226667-39.04 44.928 0 81.792 13.525333 110.592 40.490667 28.8 26.922667 43.306667 61.610667 43.306667 104.149333 0 48.213333-19.413333 82.688-58.154667 103.552 43.52 23.125333 65.28 61.44 65.28 114.858667 0 48.128-15.957333 85.76-47.573333 112.682666z" fill="#FFFFFF"></path></svg>'},{name:"4",icon:'<svg viewBox="0 0 1024 1024"><path d="M512.042667 1024C229.248 1024 0 794.794667 0 512.042667 0 229.205333 229.248 0 512.042667 0 794.752 0 1024 229.205333 1024 512.042667 1024 794.794667 794.752 1024 512.042667 1024z" fill="#6D768D"></path><path d="M600.96 256v309.802667h60.117333v81.536h-60.16v98.218666h-90.154666v-98.218666H311.466667v-81.237334L522.666667 256h78.293333zM510.72 399.104l-112.042667 166.698667h112.042667V399.104z" fill="#FFFFFF"></path></svg>'},{name:"5",icon:'<svg viewBox="0 0 1024 1024"><path d="M512.042667 1024C229.248 1024 0 794.794667 0 512.042667 0 229.205333 229.248 0 512.042667 0 794.752 0 1024 229.205333 1024 512.042667 1024 794.794667 794.752 1024 512.042667 1024z" fill="#6D768D"></path><path d="M470.912 343.552h175.786667V256H400.256l-47.786667 253.952 75.434667 10.837333c21.205333-23.552 45.269333-35.413333 72.021333-35.413333 21.546667 0 38.997333 7.509333 52.437334 22.4 13.312 15.018667 20.053333 37.418667 20.053333 67.328 0 31.872-6.741333 55.765333-20.181333 71.552-13.397333 15.872-29.866667 23.765333-49.237334 23.765333-17.066667 0-32.085333-6.186667-45.013333-18.432-13.013333-12.373333-20.821333-29.013333-23.466667-50.133333L341.333333 611.498667c5.546667 40.874667 22.485333 73.429333 50.730667 97.621333 28.330667 24.32 64.938667 36.437333 109.866667 36.437333 56.149333 0 100.053333-21.546667 131.754666-64.554666a176.64 176.64 0 0 0 34.816-107.52c0-48.042667-14.378667-87.210667-43.221333-117.333334-28.8-30.208-63.957333-45.312-105.514667-45.312-21.674667 0-42.922667 5.248-63.829333 15.616l14.976-82.901333z" fill="#FFFFFF"></path></svg>'},{name:"6",icon:'<svg viewBox="0 0 1024 1024"><path d="M512 1024C229.248 1024 0 794.794667 0 512.042667 0 229.205333 229.248 0 512 0c282.88 0 512 229.205333 512 512.042667C1024 794.794667 794.88 1024 512 1024z" fill="#6D768D"></path><path d="M519.210667 256c36.992 0 67.626667 10.368 91.776 31.189333 24.192 20.821333 39.68 51.029333 46.293333 90.709334l-90.197333 9.984c-2.176-18.56-7.978667-32.298667-17.28-41.173334-9.258667-8.874667-21.418667-13.226667-36.224-13.226666-19.754667 0-36.437333 8.789333-50.048 26.453333-13.696 17.664-22.314667 54.613333-25.856 110.549333 23.296-27.52 52.138667-41.258667 86.656-41.258666 38.997333 0 72.362667 14.805333 100.181333 44.544 27.733333 29.696 41.685333 68.010667 41.685333 114.858666 0 49.877333-14.634667 89.856-43.818666 119.936-29.226667 30.208-66.730667 45.226667-112.554667 45.226667-49.066667 0-89.429333-19.072-121.130667-57.344C357.12 658.218667 341.333333 595.541333 341.333333 508.416c0-89.344 16.469333-153.813333 49.493334-193.194667C423.722667 275.754667 466.56 256 519.168 256z m-9.472 241.834667c-17.962667 0-33.066667 6.997333-45.525334 21.12-12.330667 14.037333-18.56 34.858667-18.56 62.293333 0 30.421333 6.912 53.76 20.906667 70.4 13.952 16.469333 29.866667 24.746667 47.786667 24.746667 17.28 0 31.701333-6.826667 43.178666-20.309334 11.52-13.525333 17.237333-35.669333 17.237334-66.56 0-31.658667-6.186667-54.869333-18.517334-69.546666a58.197333 58.197333 0 0 0-46.506666-22.144z" fill="#FFFFFF"></path></svg>'},{name:"7",icon:'<svg viewBox="0 0 1024 1024"><path d="M512.042667 1024C229.248 1024 0 794.752 0 512S229.248 0 512.042667 0C794.752 0 1024 229.248 1024 512s-229.248 512-511.957333 512z" fill="#6D768D"></path><path d="M673.024 273.066667H354.133333v86.869333h212.224a691.2 691.2 0 0 0-104.746666 187.989333c-26.026667 70.101333-39.978667 138.88-41.429334 206.293334h89.6c-0.298667-42.922667 6.698667-91.776 21.034667-146.474667a654.72 654.72 0 0 1 62.08-154.965333c27.136-48.554667 53.888-85.76 80.128-111.701334V273.066667z" fill="#FFFFFF"></path></svg>'},{name:"8",icon:'<svg viewBox="0 0 1024 1024"><path d="M512 1024C229.248 1024 0 794.752 0 512S229.248 0 512 0s512 229.248 512 512-229.248 512-512 512z" fill="#6D768D"></path><path d="M512.426667 256c46.208 0 82.048 11.861333 107.605333 35.541333 25.6 23.68 38.314667 53.674667 38.314667 89.898667 0 22.613333-5.802667 42.666667-17.578667 60.330667a111.445333 111.445333 0 0 1-49.450667 40.277333c26.965333 10.837333 47.36 26.752 61.312 47.658667 13.994667 20.906667 21.034667 45.013333 21.034667 72.362666 0 45.098667-14.336 81.834667-42.965333 109.952-28.586667 28.245333-66.602667 42.368-114.090667 42.368-44.245333 0-81.066667-11.648-110.464-34.986666-34.645333-27.52-52.010667-65.28-52.010667-113.365334 0-26.368 6.528-50.645333 19.626667-72.746666 13.056-22.144 33.578667-39.210667 61.696-51.242667-24.064-10.154667-41.557333-24.192-52.48-41.941333a109.824 109.824 0 0 1-16.512-58.666667c0-36.224 12.757333-66.218667 37.973333-89.898667 25.386667-23.68 61.354667-35.541333 108.032-35.541333z m1.28 265.429333c-22.784 0-39.722667 7.978667-50.901334 23.893334-11.136 15.786667-16.64 33.066667-16.64 51.498666 0 25.984 6.485333 46.208 19.712 60.714667 13.098667 14.506667 29.525333 21.802667 49.152 21.802667 19.242667 0 35.157333-6.997333 47.786667-20.992 12.629333-13.909333 18.858667-34.048 18.858667-60.416 0-23.082667-6.314667-41.557333-19.2-55.466667a63.274667 63.274667 0 0 0-48.725334-21.034667z m-0.341334-191.488c-17.792 0-32 5.333333-42.581333 16-10.538667 10.666667-15.872 24.746667-15.872 42.325334 0 18.645333 5.248 33.152 15.701333 43.648 10.453333 10.453333 24.362667 15.658667 41.770667 15.658666 17.664 0 31.658667-5.290667 42.24-15.872 10.538667-10.581333 15.872-25.173333 15.872-43.818666 0-17.493333-5.248-31.573333-15.701333-42.154667s-24.277333-15.786667-41.429334-15.786667z" fill="#FFFFFF"></path></svg>'},{name:"9",icon:'<svg viewBox="0 0 1024 1024"><path d="M512 1024C229.248 1024 0 794.794667 0 512.042667 0 229.333333 229.248 0 512 0c282.88 0 512 229.333333 512 512.042667C1024 794.794667 794.88 1024 512 1024z" fill="#6D768D"></path><path d="M497.28 256c49.365333 0 89.856 19.157333 121.429333 57.429333 31.701333 38.229333 47.488 101.205333 47.488 188.842667 0 89.173333-16.384 153.386667-49.365333 192.853333-32.853333 39.594667-75.605333 59.264-128.426667 59.264-37.888 0-68.608-10.154667-91.989333-30.506666s-38.4-50.816-45.013333-91.306667l90.112-9.984c2.261333 18.474667 8.021333 32.085333 17.28 41.088 9.173333 8.874667 21.418667 13.312 36.608 13.312 19.2 0 35.541333-8.874667 48.981333-26.752 13.44-17.749333 22.016-54.613333 25.770667-110.549333-23.466667 27.264-52.821333 40.874667-88.064 40.874666-38.314667 0-71.253333-14.72-99.114667-44.330666C355.242667 506.709333 341.333333 468.224 341.333333 420.864c0-49.493333 14.592-89.258667 43.946667-119.466667C414.549333 271.104 451.925333 256 497.237333 256z m-4.352 77.482667c-17.237333 0-31.658667 6.826667-43.008 20.437333-11.477333 13.653333-17.194667 35.84-17.194667 66.816 0 31.402667 6.229333 54.485333 18.645334 69.205333 12.458667 14.72 27.946667 22.101333 46.592 22.101334 18.005333 0 33.066667-7.082667 45.44-21.205334 12.330667-14.208 18.432-35.029333 18.432-62.506666 0-29.994667-6.912-53.376-20.821334-69.973334-13.824-16.597333-29.866667-24.874667-48.085333-24.874666z" fill="#FFFFFF"></path></svg>'},{name:"10",icon:'<svg viewBox="0 0 1024 1024"><path d="M512.042667 1024C229.248 1024 0 794.794667 0 511.957333 0 229.205333 229.248 0 512.042667 0 794.752 0 1024 229.205333 1024 511.957333 1024 794.794667 794.752 1024 512.042667 1024z" fill="#6D768D"></path><path d="M619.946667 273.066667c46.976 0 83.754667 16.042667 110.250666 48.042666 31.573333 37.973333 47.36 100.864 47.36 188.672 0 87.722667-15.829333 150.698667-47.658666 189.056-26.325333 31.616-62.976 47.36-109.952 47.36-47.274667 0-85.418667-17.237333-114.346667-51.968-28.885333-34.602667-43.392-96.426667-43.392-185.386666 0-87.168 15.872-150.016 47.701333-188.416 26.282667-31.488 62.933333-47.36 110.037334-47.36z m-207.488 12.8v452.266666H325.504V411.690667A299.904 299.904 0 0 1 213.333333 476.373333V398.933333c22.656-7.296 47.36-21.12 73.856-41.514666 26.624-20.522667 44.842667-44.288 54.784-71.552h70.485334z m207.488 60.842666c-11.306667 0-21.461333 3.413333-30.336 10.24-8.874667 6.826667-15.786667 19.157333-20.693334 36.864-6.4 22.997333-9.642667 61.653333-9.642666 115.968 0 54.442667 2.944 91.733333 8.661333 112.128 5.802667 20.352 13.098667 33.877333 21.845333 40.618667 8.789333 6.741333 18.858667 10.154667 30.165334 10.154667 11.349333 0 21.376-3.498667 30.250666-10.325334 8.874667-6.826667 15.786667-19.157333 20.693334-36.778666 6.4-22.826667 9.642667-61.354667 9.642666-115.797334 0-54.314667-2.858667-91.648-8.661333-112.042666-5.802667-20.352-13.013333-33.962667-21.76-40.789334a47.616 47.616 0 0 0-30.165333-10.24z" fill="#FFFFFF"></path></svg>'}]},{name:"进度图标",type:"progress",list:[{name:"1",icon:'<svg viewBox="0 0 1024 1024"><path d="M512 0C229.248 0 0 229.248 0 512s229.248 512 512 512 512-229.248 512-512S794.752 0 512 0z" fill="#12BB37"></path><path d="M512 928c-229.76 0-416-186.24-416-416S282.24 96 512 96V512l294.144-294.144A414.72 414.72 0 0 1 928 512c0 229.76-186.24 416-416 416z" fill="#FFFFFF"></path></svg>'},{name:"2",icon:'<svg viewBox="0 0 1024 1024"><path d="M512 0C229.248 0 0 229.248 0 512s229.248 512 512 512 512-229.248 512-512S794.752 0 512 0z" fill="#12BB37"></path><path d="M512 928c-229.76 0-416-186.24-416-416S282.24 96 512 96V512h416c0 229.76-186.24 416-416 416z" fill="#FFFFFF"></path></svg>'},{name:"3",icon:'<svg viewBox="0 0 1024 1024"><path d="M512 0C229.248 0 0 229.248 0 512s229.248 512 512 512 512-229.248 512-512S794.752 0 512 0z" fill="#12BB37"></path><path d="M512 928c-229.76 0-416-186.24-416-416S282.24 96 512 96V512l294.144 294.144A414.72 414.72 0 0 1 512 928z" fill="#FFFFFF"></path></svg>'},{name:"4",icon:'<svg viewBox="0 0 1024 1024"><path d="M512 0C229.248 0 0 229.248 0 512s229.248 512 512 512 512-229.248 512-512S794.752 0 512 0z" fill="#12BB37"></path><path d="M512 928c-229.76 0-416-186.24-416-416S282.24 96 512 96v832z" fill="#FFFFFF"></path></svg>'},{name:"5",icon:'<svg viewBox="0 0 1024 1024"><path d="M512 0C229.248 0 0 229.248 0 512s229.248 512 512 512 512-229.248 512-512S794.752 0 512 0z" fill="#12BB37"></path><path d="M512 512l-294.144 294.144A414.72 414.72 0 0 1 96 512c0-229.76 186.24-416 416-416V512z" fill="#FFFFFF"></path></svg>'},{name:"6",icon:'<svg viewBox="0 0 1024 1024"><path d="M512 0C229.248 0 0 229.248 0 512s229.248 512 512 512 512-229.248 512-512S794.752 0 512 0z" fill="#12BB37"></path><path d="M512 512H96c0-229.76 186.24-416 416-416V512z" fill="#FFFFFF"></path></svg>'},{name:"7",icon:'<svg viewBox="0 0 1024 1024"><path d="M512 0C229.248 0 0 229.248 0 512s229.248 512 512 512 512-229.248 512-512S794.752 0 512 0z" fill="#12BB37"></path><path d="M512 512L217.856 217.856A414.72 414.72 0 0 1 512 96V512z" fill="#FFFFFF"></path></svg>'},{name:"8",icon:'<svg viewBox="0 0 1024 1024"><path d="M0 512c0 282.752 229.248 512 512 512s512-229.248 512-512S794.752 0 512 0 0 229.248 0 512z" fill="#12BB37"></path><path d="M716.629333 341.333333h-51.328a35.072 35.072 0 0 0-28.330666 14.293334l-171.989334 233.984-77.909333-106.026667a35.2 35.2 0 0 0-28.330667-14.293333H307.413333c-7.082667 0-11.264 7.936-7.082666 13.653333l136.32 185.472a35.2 35.2 0 0 0 56.533333 0l230.4-313.429333a8.533333 8.533333 0 0 0-6.954667-13.653334z" fill="#FFFFFF"></path></svg>'}]},{name:"表情图标",type:"expression",list:[{name:"1",icon:'<svg t="1624457751393" class="icon" viewBox="0 0 1026 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12255"><path d="M1.097856 1.097642h1021.804717v1021.804716H1.097856z" fill="#F09495" p-id="12256"></path><path d="M1024.000214 1024H0.000214V0h1024v1024z m-1021.804716-2.195284h1019.609433V2.195284H2.195498v1019.609432z" fill="#FFFFFF" p-id="12257"></path><path d="M234.695985 335.179887m-27.341259 0a27.341259 27.341259 0 1 0 54.682518 0 27.341259 27.341259 0 1 0-54.682518 0Z" fill="#040000" p-id="12258"></path><path d="M234.695985 363.519002c-15.666342 0-28.339115-12.772559-28.339115-28.339115 0-15.666342 12.772559-28.339115 28.339115-28.339115s28.339115 12.772559 28.339115 28.339115c0.099786 15.666342-12.672773 28.339115-28.339115 28.339115z m0-54.582732c-14.468914 0-26.243617 11.774703-26.243617 26.243617s11.774703 26.243617 26.243617 26.243617 26.243617-11.774703 26.243617-26.243617-11.774703-26.243617-26.243617-26.243617z" fill="#FFFFFF" p-id="12259"></path><path d="M776.232528 335.179887m-27.341259 0a27.341259 27.341259 0 1 0 54.682518 0 27.341259 27.341259 0 1 0-54.682518 0Z" fill="#040000" p-id="12260"></path><path d="M776.232528 363.519002c-15.666342 0-28.339115-12.772559-28.339115-28.339115 0-15.666342 12.772559-28.339115 28.339115-28.339115 15.666342 0 28.339115 12.772559 28.339115 28.339115 0 15.666342-12.772559 28.339115-28.339115 28.339115z m0-54.582732c-14.468914 0-26.243617 11.774703-26.243617 26.243617s11.774703 26.243617 26.243617 26.243617 26.243617-11.774703 26.243617-26.243617c-0.099786-14.468914-11.874488-26.243617-26.243617-26.243617z" fill="#FFFFFF" p-id="12261"></path><path d="M512.000214 671.656987c-52.58702 0-105.872539-17.961411-105.872539-52.387449S459.413194 566.882089 512.000214 566.882089s105.872539 17.961411 105.87254 52.387449S564.587234 671.656987 512.000214 671.656987z m0-74.240499c-21.952836 0-43.207172 3.592282-58.2748 9.77899-13.870201 5.68778-17.06334 11.275775-17.06334 12.07406s3.19314 6.386279 17.06334 12.07406c15.067628 6.186708 36.321965 9.77899 58.2748 9.77899s43.207172-3.592282 58.274801-9.77899c13.870201-5.68778 17.06334-11.275775 17.06334-12.07406s-3.19314-6.386279-17.06334-12.07406c-15.067628-6.286494-36.321965-9.77899-58.274801-9.77899z" fill="#040000" p-id="12262"></path></svg>'},{name:"2",icon:'<svg t="1624457767572" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1048"><path d="M0 0h1024v1024H0z" fill="#E6A6C9" p-id="1049"></path><path d="M315.1 368.1c-23.9 0-43.3-19.4-43.3-43.3s19.4-43.3 43.3-43.3 43.3 19.4 43.3 43.3-19.4 43.3-43.3 43.3z m0-74.7c-17.3 0-31.3 14.1-31.3 31.3 0 17.3 14.1 31.3 31.3 31.3 17.3 0 31.3-14.1 31.3-31.3 0-17.2-14-31.3-31.3-31.3zM738.7 368.1c-23.9 0-43.3-19.4-43.3-43.3s19.4-43.3 43.3-43.3 43.3 19.4 43.3 43.3-19.4 43.3-43.3 43.3z m0-74.7c-17.3 0-31.3 14.1-31.3 31.3 0 17.3 14.1 31.3 31.3 31.3 17.3 0 31.3-14.1 31.3-31.3 0-17.2-14-31.3-31.3-31.3zM293.5 698.8l-14.5-1.3c0.1-0.6 1.5-14.6 15.1-27.9 17.2-16.7 45-24.8 82.7-24 4.9-0.1 10.9-10.5 16.1-19.6 8.4-14.7 19-33.1 37.9-34.3 19.4-1.2 42.2 16.4 71.5 55.4 9.9 5.2 16.5 11.2 21.8 16.1 8.4 7.7 13.1 11.9 25.1 10.8 14.9-1.4 38.9-11.1 77.5-31.4 26.8-28.4 56.4-41.4 83.5-36.6 27.9 4.9 50.6 27.6 67.5 67.5l-13.4 5.7c-14.7-34.5-34.3-54.9-56.7-58.8-22.3-3.9-47.6 7.8-71.2 33.1l-0.8 0.9-1.1 0.6c-85.6 45.1-99.4 38-120.2 19.1-5.5-5-11.2-10.2-20.1-14.7l-1.5-0.8-1-1.4c-32.2-43.2-50.4-51.6-60-51-11.1 0.7-18.8 14-26.2 27-7.6 13.2-15.4 26.9-28.8 26.9h-0.2c-78.4-1.6-83 38.3-83 38.7z" fill="#040000" p-id="1050"></path></svg>'},{name:"3",icon:'<svg t="1624457776082" class="icon" viewBox="0 0 1026 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1204" ><path d="M1.1 1.097642h1021.804716v1021.804716H1.1z" fill="#F7E983" p-id="1205"></path><path d="M1024.002358 1024H0.002358V0h1024v1024z m-1021.804716-2.195284h1019.609433V2.195284H2.197642v1019.609432z" fill="#FFFFFF" p-id="1206"></path><path d="M329.174412 344.491728a38.118106 10.277919 57.6 1 0 17.355867-11.014369 38.118106 10.277919 57.6 1 0-17.355867 11.014369Z" fill="#040000" p-id="1207"></path><path d="M644.769475 355.956059a11.175989 36.321965 30 1 0 36.321965-62.911488 11.175989 36.321965 30 1 0-36.321965 62.911488Z" fill="#040000" p-id="1208"></path><path d="M569.678445 671.158059c-26.343403 0-51.190021-5.288638-70.049503-14.967843-20.755408-10.577275-32.230754-25.445332-32.230755-41.710388 0-16.265056 11.475346-31.133112 32.230755-41.710387 18.859482-9.579419 43.805886-14.967843 70.049503-14.967843s51.190021 5.288638 70.049503 14.967843c20.755408 10.577275 32.230754 25.445332 32.230754 41.710387 0 16.265056-11.475346 31.133112-32.230754 41.710388-18.859482 9.679205-43.805886 14.967843-70.049503 14.967843z m0-95.095693c-49.693237 0-84.318846 20.356266-84.318846 38.517248s34.625609 38.517248 84.318846 38.517248 84.318846-20.356266 84.318846-38.517248-34.725395-38.517248-84.318846-38.517248z" fill="#040000" p-id="1209"></path></svg>'},{name:"4",icon:'<svg t="1624457781889" class="icon" viewBox="0 0 1026 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1363" ><path d="M1.1 1.097642h1021.804716v1021.804716H1.1z" fill="#A6D9E2" p-id="1364"></path><path d="M1024.002358 1024H0.002358V0h1024v1024z m-1021.804716-2.195284h1019.609433V2.195284H2.197642v1019.609432z" fill="#FFFFFF" p-id="1365"></path><path d="M376.194134 348.950302m-23.44962 0a23.44962 23.44962 0 1 0 46.89924 0 23.44962 23.44962 0 1 0-46.89924 0Z" fill="#040000" p-id="1366"></path><path d="M629.150672 348.950302m-24.647047 0a24.647047 24.647047 0 1 0 49.294095 0 24.647047 24.647047 0 1 0-49.294095 0Z" fill="#040000" p-id="1367"></path><path d="M397.847613 603.503411c13.471058 8.282206 28.738258 14.468914 43.7061 19.458195 29.835899 9.978562 62.266225 14.169558 93.299551 7.483921 21.054765-4.490353 40.213604-14.369129 56.778016-28.039758 6.785422-5.587995-2.893783-15.167414-9.579419-9.579419-46.999026 38.916391-112.258819 31.033327-163.847983 6.086922-4.590138-2.195284-9.080491-4.490353-13.371272-7.184564-7.583707-4.590138-14.468914 7.184564-6.984993 11.774703z" fill="#040000" p-id="1368"></path><path d="M627.753674 534.052621c-31.033327 24.048334-58.474371 68.253362-37.419607 106.970182 10.577275 19.35841 29.835899 32.629897 48.795167 42.708244 7.982849 4.190996 15.067628-7.883064 7.084779-12.07406-25.245761-13.271487-53.485091-35.324108-49.094524-66.557006 2.793997-20.156695 15.766127-37.319821 29.736114-51.190022 3.392711-3.392711 6.984993-6.785422 10.776847-9.77899 2.993569-2.295069 2.394855-7.483921 0-9.878776-2.893783-3.19314-6.885208-2.49464-9.878776-0.199572z" fill="#040000" p-id="1369"></path></svg>'},{name:"5",icon:'<svg t="1624457787809" class="icon" viewBox="0 0 1026 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1523" ><path d="M1.1 1.097642h1021.804716v1021.804716H1.1z" fill="#AD6F59" p-id="1524"></path><path d="M1024.002358 1024H0.002358V0h1024v1024z m-1021.804716-2.195284h1019.609433V2.195284H2.197642v1019.609432z" fill="#FFFFFF" p-id="1525"></path><path d="M411.829832 330.730879a38.118106 10.277919 57.6 1 0 17.355867-11.014368 38.118106 10.277919 57.6 1 0-17.355867 11.014368Z" fill="#040000" p-id="1526"></path><path d="M480.669675 609.989476c11.774703-25.844475 27.740401-51.788735 44.60417-73.342429 13.770415-17.462483 29.237186-33.92711 47.897096-44.803742 17.262912-10.078347 35.324108-13.67063 54.283376-6.58585 11.974274 4.390567 23.948548 14.468914 33.128825 24.547261 14.369129 15.865913 25.145975 34.625609 34.725394 53.684662 4.290782 8.581563 17.262912 0.997856 12.972131-7.583707-15.167414-30.334828-35.224323-63.763009-66.157864-80.327421-21.054765-11.37556-44.504385-11.475346-66.157864-1.895927-21.054765 9.280062-38.617034 25.644904-53.485091 42.907815-14.468914 16.863769-27.041902 35.324108-38.217891 54.582733-5.887351 10.178133-11.674917 20.555837-16.464627 31.232898-1.696355 3.692068-0.997856 7.982849 2.694212 10.277918 3.19314 1.895927 8.581563 0.898071 10.178133-2.694211z" fill="#040000" p-id="1527"></path><path d="M663.863649 338.091735a14.468914 33.727538 30 1 0 33.727538-58.417811 14.468914 33.727538 30 1 0-33.727538 58.417811Z" fill="#040000" p-id="1528"></path></svg>'},{name:"6",icon:'<svg t="1624457794933" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1680" ><path d="M762.9 77.4H261.1L10.2 512l250.9 434.6h501.8L1013.8 512z" fill="#83CEE3" p-id="1681"></path><path d="M369 375.8m-34.6 0a34.6 34.6 0 1 0 69.2 0 34.6 34.6 0 1 0-69.2 0Z" fill="#040000" p-id="1682"></path><path d="M369 411.7c-19.8 0-36-16.1-36-36s16.1-36 36-36 36 16.1 36 36-16.1 36-36 36z m0-69.1c-18.3 0-33.2 14.9-33.2 33.2S350.7 409 369 409s33.2-14.9 33.2-33.2-14.9-33.2-33.2-33.2z" fill="#FFFFFF" p-id="1683"></path><path d="M672.2 333.6c-15.1 7.6-30.2 15.6-44.3 25-5.9 3.9-17 10.4-14.6 19.1 1.8 6.5 12 11.2 17.3 14.3 15.7 9.3 32.1 17.6 48.3 25.9 8.6 4.4 16.2-8.5 7.6-13-14.1-7.3-28.3-14.5-42.1-22.3-3.9-2.2-7.9-4.5-11.7-6.9-1.2-0.8-2.4-1.5-3.5-2.4-0.6-0.4-1.1-0.8-1.6-1.2 2.2 1.7-0.3-0.3-0.3-0.3-0.9 0.1-1.5-3.2-0.2 0.5 0.9 2.4 1.1 3.8 0.3 5.8 0.6-1.5-0.9 0.8-0.1 0 0.5-0.5 1-1.1 1.6-1.6 0.5-0.5 1-0.9 1.6-1.3 0.6-0.5 0 0 1.2-0.9 1.7-1.3 3.5-2.5 5.3-3.6 8.4-5.5 17.2-10.4 26-15.2 5.6-3 11.2-6 16.8-8.9 8.6-4.4 1-17.3-7.6-13zM578.2 720.9c-12.5-96.7-33.3-154.7-55.6-155.6-8.8 3.9-22.3 17.5-37.7 60.1-10.8 29.8-18.4 62.2-23 81.6-1.2 5.1-2.1 9.1-2.9 11.8l-9.3-2.4c0.7-2.6 1.6-6.6 2.8-11.6 14.9-63 36-136.8 67.5-148.8l0.8-0.3h0.8c18.2-0.4 33.2 19.5 45.8 60.8 10.2 33.3 16.7 74.6 20.5 103.3l-9.7 1.1z" fill="#040000" p-id="1684"></path></svg>'},{name:"7",icon:'<svg t="1624457802025" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1838" ><path d="M762.9 77.4H261.1L10.2 512l250.9 434.6h501.8L1013.8 512z" fill="#8CC66D" p-id="1839"></path><path d="M375.778679 404.47473a14.5 33.8 30 1 0 33.8-58.543317 14.5 33.8 30 1 0-33.8 58.543317Z" fill="#040000" p-id="1840"></path><path d="M627.220263 374.211388a43.1 11.6 57.6 1 0 19.588408-12.431182 43.1 11.6 57.6 1 0-19.588408 12.431182Z" fill="#040000" p-id="1841"></path><path d="M451.1 548.5c17.6-9.3 63.9-30 105.3-16.2 17 20.3 32.7 98.8 28.8 138.1-27.5 10.2-82.5 10.2-106.1 5.8-8.3-10.5-32.7-81.8-35.3-114.6-0.4-5.5 2.5-10.6 7.3-13.1z" fill="#040000" p-id="1842"></path></svg>'},{name:"8",icon:'<svg t="1624457816632" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1996" ><path d="M762.9 77.4H261.1L10.2 512l250.9 434.6h501.8L1013.8 512z" fill="#5A74B8" p-id="1997"></path><path d="M357.7 400m-34.6 0a34.6 34.6 0 1 0 69.2 0 34.6 34.6 0 1 0-69.2 0Z" fill="#040000" p-id="1998"></path><path d="M357.7 436c-19.8 0-36-16.1-36-36s16.1-36 36-36 36 16.1 36 36-16.2 36-36 36z m0-69.2c-18.3 0-33.2 14.9-33.2 33.2s14.9 33.2 33.2 33.2 33.2-14.9 33.2-33.2-14.9-33.2-33.2-33.2z" fill="#FFFFFF" p-id="1999"></path><path d="M676 400m-34.6 0a34.6 34.6 0 1 0 69.2 0 34.6 34.6 0 1 0-69.2 0Z" fill="#040000" p-id="2000"></path><path d="M676 436c-19.8 0-36-16.1-36-36s16.1-36 36-36 36 16.1 36 36-16.2 36-36 36z m0-69.2c-18.3 0-33.2 14.9-33.2 33.2s14.9 33.2 33.2 33.2c18.3 0 33.2-14.9 33.2-33.2s-14.9-33.2-33.2-33.2z" fill="#FFFFFF" p-id="2001"></path><path d="M347.6 684.1c0.3-0.9 0.6-1.7 0.9-2.6 0.2-0.5 1.4-3.2 0.3-0.8 0.6-1.4 1.3-2.9 2-4.3 3.2-6.3 6-10.7 10.9-15.3 4.3-4 10.8-7.5 17.1-6.1 3.9 0.9 7.9 4.9 11.1 7.2 3.1 2.2 6.3 4.5 9.7 6.2 7.5 3.8 15.3 4.4 23.4 1.9 4.7-1.5 9.2-3.6 13.6-5.9 5-2.6 10.7-5 14.2-9.5 4.5-5.7 6.1-8.5 11.4-14.1 1-1 2-2 3.1-3 0.2-0.2 2.2-1.7 0.6-0.5 0.6-0.4 1.2-0.9 1.8-1.3 1-0.6 2.1-1.3 3.2-1.7-2 0.8 0.2 0 0.6-0.1 2.3-0.7-0.3-0.2 1.2-0.3 2.8-0.1 3.6 0 5.5 1 3.8 1.9 6.6 4.7 9.5 7.8 4.5 5 7.5 11.1 11.7 16.2 1.8 2.2 3.7 4.3 5.4 6.5 8.1 10.3 17.7 22.2 32.2 22 8.8-0.1 16.6-5.2 22.6-11.2 4.2-4.1 7.7-8.9 11-13.7 2.9-4.2 4.6-9.9 6.2-13.5 3.2-7.1 7.2-13.1 13-18.1 4.8-4.2 11.1-6.5 16.7-5.3 10.5 2.4 17.2 12.1 23.1 20.2 4.7 6.5 9.8 13 16 18.2 7.8 6.4 17.1 11.4 27.5 11.1 14.1-0.4 25.5-9.5 34.2-19.9 3-3.6 3.6-8.8 0-12.4-3.1-3.1-9.4-3.7-12.4 0-6.3 7.6-14.7 15.9-24.9 14.7-2.2-0.3-5.3-1.5-7.9-3.1-3.5-2.1-6.1-4.4-9.1-7.5-4.9-5.1-6.8-8.1-10.9-13.8-7.3-10.1-16.1-19.6-28.2-23.7-18.5-6.3-35.7 5.6-46 20.1-2.4 3.3-4.4 6.9-6.1 10.6-1.8 3.9-2.7 8.5-5.2 11.9-3.1 4.4-6.2 8.8-10.2 12.5-3 2.8-5.7 4.4-8.6 5.1-0.4 0.1-1.7 0.1 0.1 0h-2.2c2.1 0.1 0 0-0.5-0.1-0.7-0.2-1.4-0.4-2-0.6 1.8 0.7-1.8-1.1-2.4-1.5l-1.2-0.9c1.5 1.2-0.9-0.9-1.2-1.1-4.7-4.3-8.4-9.5-12.3-14.4-10.9-13.6-20.9-34-41-34.9-14.2-0.6-24.5 10.6-32.4 20.8-1.2 1.6-2.5 3.2-3.7 4.8-1.5 1.9 1.1-1.4-0.4 0.5-0.4 0.5-0.8 1.2-1.3 1.6-1.7 1.4-4.6 2.6-6.6 3.6-2.9 1.6-5.9 3.2-9 4.5-1.6 0.7-3.4 1.2-5.1 1.7-2.2 0.6-0.7 0.5-2.8 0.4-2.8 0-3.9-0.4-6.6-1.9-3.9-2.2-7.5-4.9-11.1-7.5-5.6-4-10-6.9-17-7.5-10.5-0.9-20.3 3.2-28.2 9.9-9.4 8.1-16.4 20.2-20.1 32-3.6 11.2 13.3 15.8 16.8 5.1z" fill="#040000" p-id="2002"></path></svg>'},{name:"9",icon:'<svg t="1624457826949" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2156" ><path d="M762.9 77.4H261.1L10.2 512l250.9 434.6h501.8L1013.8 512z" fill="#F0884F" p-id="2157"></path><path d="M287.2 382c6.4 2.3 11.6-3.7 15.4-7.9 5.1-5.5 10.2-11 16-15.9 0.8-0.7 1.7-1.4 2.5-2.1 1.2-0.9-1.7 1.3 0.2-0.2l1.2-0.9c2.1-1.5 4.3-2.9 6.5-4.3 2-1.2 4-2.2 6.1-3.2 0.6-0.3 1.2-0.6 1.9-0.9-0.3 0.2-1.5 0.6 0.2-0.1 1.3-0.5 2.6-1 4-1.5 11.2-3.7 21.8-4 33.4-1.1 19.5 4.9 36.4 17 51.2 30.2 8.6 7.7 21.4-5 12.7-12.7-25.2-22.6-57.1-42.1-92.2-36.2-20.4 3.4-37.7 16.1-51.6 30.9-2.3 2.4-4.5 5-6.8 7.4-0.7 0.7-1.9 1.5-2.4 2.4-0.5 0.8 2.3-1.5 0.8-0.7 1.3-0.7 3.9-1.4 5.8-0.7-11.1-3.7-15.8 13.7-4.9 17.5zM598 382c6.4 2.3 11.6-3.7 15.4-7.9 5.1-5.5 10.2-11 16-15.9 0.8-0.7 1.7-1.4 2.5-2.1 1.2-0.9-1.7 1.3 0.2-0.2l1.2-0.9c2.1-1.5 4.3-2.9 6.5-4.3 2-1.2 4-2.2 6.1-3.2 0.6-0.3 1.2-0.6 1.9-0.9-0.3 0.2-1.5 0.6 0.2-0.1 1.3-0.5 2.6-1 4-1.5 11.2-3.7 21.8-4 33.4-1.1 19.5 4.9 36.4 17 51.2 30.2 8.6 7.7 21.4-5 12.7-12.7-25.2-22.6-57.1-42.1-92.2-36.2-20.4 3.4-37.7 16.1-51.6 30.9-2.3 2.4-4.5 5-6.8 7.4-0.7 0.7-1.9 1.5-2.4 2.4-0.5 0.8 2.3-1.5 0.8-0.7 1.3-0.7 3.9-1.4 5.8-0.7-11.1-3.7-15.8 13.7-4.9 17.5zM505.9 527.1c3.4 0.7 6.8 1.7 10.2 2.8 6.7 2.2 10.4 3.5 16.6 7.7 1.6 1.1-0.5-0.5 0.6 0.5 0.6 0.5 1.1 1.1 1.7 1.6 1.5 1.4-0.1-0.4 0.5 0.6 0.4 0.6 0.7 1.2 1 1.8-1-2 0.1 0 0 0.5 0.1-2-0.1 0-0.1 0-0.1 0.8 0 0.7 0.1-0.5-0.1 0.4-0.1 0.7-0.3 1.1-0.6 1 0.7-0.9-0.4 1-1.6 2.5-4.6 5.4-8.1 7.8-6.8 4.6-14.4 8.2-22 11.4-7 3-7.4 11.9 0 14.8 7.4 2.8 15 5.3 22.4 8.1 3.1 1.1 4.2 1.5 6.9 2.9 1.1 0.6 2.1 1.2 3.2 1.8 1.2 0.8-0.7-0.5 0.1 0 0.4 0.3 0.8 0.7 1.1 1.1 0.6 0.8-1.1-1.2-0.2-0.2 0.8 0.9-0.3-1.4-0.1-0.2 0.1 0.9 0.2-1.9 0-0.9-0.1 0.5-0.8 1.8 0 0.2-0.2 0.5-0.5 1-0.8 1.4-0.3 0.3-0.9 1.3-0.3 0.5-0.5 0.7-1.1 1.3-1.7 1.9-6.9 7.3-15.9 12.8-24.4 18.1-8.3 5.3-0.6 18.5 7.7 13.2 9.9-6.3 20.9-12.8 28.6-21.8 4.8-5.5 8.1-12.9 4.2-19.9-3.4-6-10.5-8.9-16.6-11.4-8.6-3.5-17.5-6.2-26.2-9.5v14.8c14.4-6.1 47.2-18.8 41.2-40.3-3.5-12.9-19.4-18.9-30.8-22.6-3.4-1.1-6.9-2.1-10.5-2.9-9.1-2.2-13.3 12.5-3.6 14.6z" fill="#040000" p-id="2158"></path></svg>'},{name:"10",icon:'<svg t="1624457835383" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2312" ><path d="M762.9 77.4H261.1L10.2 512l250.9 434.6h501.8L1013.8 512z" fill="#F6F180" p-id="2313"></path><path d="M342.9 400.6m-29.5 0a29.5 29.5 0 1 0 59 0 29.5 29.5 0 1 0-59 0Z" fill="#040000" p-id="2314"></path><path d="M342.9 431.3c-16.9 0-30.7-13.8-30.7-30.7s13.8-30.7 30.7-30.7 30.7 13.8 30.7 30.7-13.7 30.7-30.7 30.7z m0-59c-15.6 0-28.3 12.7-28.3 28.3s12.7 28.3 28.3 28.3 28.3-12.7 28.3-28.3-12.6-28.3-28.3-28.3z" fill="#FFFFFF" p-id="2315"></path><path d="M702 400.6m-29.5 0a29.5 29.5 0 1 0 59 0 29.5 29.5 0 1 0-59 0Z" fill="#040000" p-id="2316"></path><path d="M702 431.3c-16.9 0-30.7-13.8-30.7-30.7s13.8-30.7 30.7-30.7 30.7 13.8 30.7 30.7-13.8 30.7-30.7 30.7z m0-59c-15.6 0-28.3 12.7-28.3 28.3s12.7 28.3 28.3 28.3 28.3-12.7 28.3-28.3-12.7-28.3-28.3-28.3z" fill="#FFFFFF" p-id="2317"></path><path d="M358.7 519.9c20 22 45.5 40.4 71.3 54.8 51.2 28.5 111.7 39.9 168 19.5 44.3-16.1 80.7-47.8 110.2-83.9 3-3.7 3.6-8.9 0-12.5-3.1-3.1-9.5-3.7-12.5 0-25.5 31.4-56.2 59.7-93.7 76-27.1 11.7-56.6 15.7-85.8 12.2-24.7-2.9-49.5-11.8-71.5-23.4-18.7-9.8-36.6-22.2-51.1-34.3-7.8-6.5-15.5-13.3-22.4-20.9-7.7-8.5-20.1 4.1-12.5 12.5z" p-id="2318"></path></svg>'},{name:"11",icon:'<svg t="1624457841751" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2472" ><path d="M48.2 844.9c-68.5-210.6 186-782.1 409.1-795.4 6.3-0.4 12.5 0.2 18.6 1.6C665.1 94.6 985.4 515 987.1 821.3c0.1 20-12.9 37.9-22.4 43.1-162.7 89.8-605.8 179.7-884.4 30.9-15-7.9-24.2-26.1-32.1-50.4z" fill="#F0884F" p-id="2473"></path><path d="M401 352.1m-52.4 0a52.4 52.4 0 1 0 104.8 0 52.4 52.4 0 1 0-104.8 0Z" fill="#FFFFFF" p-id="2474"></path><path d="M408.7 329m-29.3 0a29.3 29.3 0 1 0 58.6 0 29.3 29.3 0 1 0-58.6 0Z" fill="#040000" p-id="2475"></path><path d="M527.5 352.1m-52.4 0a52.4 52.4 0 1 0 104.8 0 52.4 52.4 0 1 0-104.8 0Z" fill="#FFFFFF" p-id="2476"></path><path d="M527.5 329m-29.3 0a29.3 29.3 0 1 0 58.6 0 29.3 29.3 0 1 0-58.6 0Z" fill="#040000" p-id="2477"></path><path d="M450.7 517c1.1-8.2 3.2-16.4 6.1-24.1 0.1-0.3 1-2.5 0.5-1.4s0.3-0.7 0.5-1c0.7-1.4 1.4-2.8 2.2-4.1 0.4-0.8 2.8-3.9 1.3-2.1 0.8-1 1.7-1.9 2.6-2.8 1-1-1.5 1 0.1 0 0.5-0.3 1-0.6 1.5-0.8-1.3 0.7-1.2 0.3 0 0.1 1.9-0.3-1.8 0.3 0.1 0 1.2-0.2 1.5 0.3 0-0.1 0.6 0.2 1.3 0.3 1.9 0.5 0.3 0.1-1.3-0.7 0.2 0.1 0.8 0.5 1.6 0.9 2.4 1.4 1.4 1 0-0.1 1.4 1.1 0.9 0.8 1.8 1.7 2.6 2.6 1.8 1.9 3.5 3.9 5 6.1 5.1 7.1 9.3 14.8 13.2 22.6 3.5 6.9 13.7 4.7 15.8-2.1 2.6-8.7 4.8-17.4 7.4-26.1 0.9-3.2 1.9-6.4 3.2-9.4-0.7 1.6 0.8-1.6 1.2-2.2l0.9-1.5c0.7-1.2-1.4 0.7 0.1-0.1 1.7-0.9-1.2 0.3-0.3 0.1 0.8-0.2 1-1.2 0.3-0.3-0.6 0.8 0.6 0-0.5 0.2-2 0.3 2.4 0.5-1.1 0 0.5 0.1 1.2 0.2 1.6 0.4-1.1-0.8-0.8-0.4 0.2 0.2 0.7 0.4 3.4 2.3 2.7 1.8 8.9 7.1 15.9 16.9 22.5 26 2.8 3.8 7.5 5.6 11.8 3.1 3.7-2.2 5.9-8 3.1-11.8-8.2-11.1-16.6-23-27.7-31.4-6.3-4.7-14.5-7.6-21.7-3-6.7 4.2-9.6 12.5-11.9 19.6-3.2 9.9-5.5 20-8.6 29.9 5.3-0.7 10.5-1.4 15.8-2.1-7.8-15.5-24.8-50.1-48-41.7-14.1 5.1-19.7 23-22.9 36.2-0.9 3.8-1.8 7.7-2.3 11.6-0.6 4.6 1.1 9.3 6 10.6 4.2 1 10.2-1.5 10.8-6.1z" fill="#040000" p-id="2478"></path></svg>'},{name:"12",icon:'<svg t="1624457847424" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2632" ><path d="M485.538528 993.072489a362.00362 481.804818 3.149 1 0 52.933731-962.15464 362.00362 481.804818 3.149 1 0-52.933731 962.15464Z" fill="#AADCF0" p-id="2633"></path><path d="M688.2 334.1c-15.1 7.6-30.2 15.6-44.3 25-5.9 3.9-17 10.4-14.6 19.1 1.8 6.5 12 11.2 17.3 14.3 15.7 9.3 32.1 17.6 48.3 25.9 8.6 4.4 16.2-8.5 7.6-13-14.1-7.3-28.3-14.5-42.1-22.3-3.9-2.2-7.9-4.5-11.7-6.9-1.2-0.8-2.4-1.5-3.5-2.4-0.6-0.4-1.1-0.8-1.6-1.2 2.2 1.7-0.3-0.3-0.3-0.3-0.9 0.1-1.5-3.2-0.2 0.5 0.9 2.4 1.1 3.8 0.3 5.8 0.6-1.5-0.9 0.8-0.1 0 0.5-0.5 1-1.1 1.6-1.6 0.5-0.5 1-0.9 1.6-1.3 0.6-0.5 0 0 1.2-0.9 1.7-1.3 3.5-2.5 5.3-3.6 8.4-5.5 17.2-10.4 26-15.2 5.6-3 11.2-6 16.8-8.9 8.6-4.4 1-17.4-7.6-13zM375.8 347c13.4 6.8 26.7 14 39.5 21.9 1.8 1.2 3.7 2.3 5.5 3.5 0.9 0.6 1.7 1.2 2.6 1.8 0.9 0.6 1.9 1.4 1.6 1.1 1.1 0.9 2.1 1.9 3.1 2.8 1.2 1 0-0.3 0.1 0 0-0.2-0.8-2.4-0.3-4.1 1.5-5.5 2.3-2.7 0.8-2-0.4 0.2-0.9 0.8-1.3 1.1 1.7-1.4-1.6 1.1-2.3 1.6-3.4 2.3-6.9 4.4-10.4 6.4-14.9 8.6-30.3 16.4-45.6 24.3-8.6 4.4-1 17.4 7.6 13 15-7.7 30.1-15.4 44.8-23.8 6.2-3.6 13.8-7.3 18.7-12.7 7.6-8.3-3.8-16.6-9.9-20.9-8.7-6.1-18-11.3-27.3-16.4-6.5-3.6-13-7.1-19.6-10.4-8.6-4.5-16.3 8.5-7.6 12.8zM412.8 570.9c13.5 7.7 28.5 13.3 43.3 17.9 29.8 9.2 61.7 13.1 92.6 7.3 20.6-3.9 40-12.5 56.6-25.2 2.8-2.2 4.3-5.6 2.3-9-1.6-2.8-6.2-4.5-9-2.3-48.3 36.9-113.3 30-165.6 6.7-4.6-2.1-9.2-4.2-13.7-6.7-7.3-4.2-13.9 7.2-6.5 11.3z" fill="#040000" p-id="2634"></path><path d="M644.6 505.2c-30.1 21.5-60.6 62.5-39.1 99.8 10.7 18.6 30.3 30.9 49.1 40.1 7.8 3.8 14.6-7.9 6.8-11.7-23.6-11.5-53.7-31.4-49.4-60.9 2.8-18.9 15.8-34.6 29.5-47.2 2.5-2.3 5.1-4.6 7.8-6.7 0.5-0.4 0.9-0.7 1.4-1.1-0.4 0.3-1.2 0.9-0.1 0.1l0.9-0.6c6.9-5.1 0.2-16.8-6.9-11.8z" fill="#040000" p-id="2635"></path></svg>'},{name:"13",icon:'<svg t="1624457855182" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2789" ><path d="M235.1 76.9c75.6-26.5 297.3-90.1 514.2-16.6 16.3 5.5 29.8 17.4 37.1 33 57.5 122.4 127.1 602.1 62.1 785.6a62.58 62.58 0 0 1-32.5 35.8c-109.5 51.8-428.1 136.7-609.3 37.2-14.4-7.9-25-21.3-29.7-37.1-41.9-140.6-37-627.7 19.1-798 6.1-18.7 20.5-33.4 39-39.9z" fill="#F9DABD" p-id="2790"></path><path d="M392.2 360.2m-35.2 0a35.2 35.2 0 1 0 70.4 0 35.2 35.2 0 1 0-70.4 0Z" fill="#040000" p-id="2791"></path><path d="M618.6 360.2m-35.2 0a35.2 35.2 0 1 0 70.4 0 35.2 35.2 0 1 0-70.4 0Z" fill="#040000" p-id="2792"></path><path d="M512 562.6c-36 0-65.3-29.3-65.3-65.3S476 432 512 432s65.3 29.3 65.3 65.3-29.3 65.3-65.3 65.3z m0-122.9c-31.7 0-57.6 25.8-57.6 57.6s25.8 57.6 57.6 57.6c31.7 0 57.6-25.8 57.6-57.6s-25.9-57.6-57.6-57.6z" fill="#040000" p-id="2793"></path></svg>'},{name:"14",icon:'<svg t="1624457863444" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2947" ><path d="M178.1 971.5c38.1 15.9 98.7 26.6 171.3-12.3 3.7-2 8.4-1.6 11.6 1.1 43.3 35.9 123.3 80.8 236 10.9 3.8-2.4 8.7-2.4 12.6-0.2 41.8 23.9 191.6 58.2 246.6 14.2 4.4-3.5 9.1-6.6 14.5-8.5C1065 909.5 678.2-652 194.3 351c-37.5 77.8-38.4 94.1-71.9 211.3-27.6 96.3-29.1 231.3 1.4 348.1 7.2 27.3 27.3 49.9 54.3 61.1z" fill="#ABAAAA" p-id="2948"></path><path d="M468.9 349H418c-6.1 0-11.1-5-11.1-11.1V336c0-6.1 5-11.1 11.1-11.1h50.9c6.1 0 11.1 5 11.1 11.1v1.9c0 6.1-5 11.1-11.1 11.1zM643 471.9H390c-6.6 0-12-5.4-12-12s5.4-12 12-12h253c6.6 0 12 5.4 12 12s-5.4 12-12 12zM609 349h-61.2c-6 0-11-4.9-11-11v-2.1c0-6 4.9-11 11-11H609c6 0 11 4.9 11 11v2.1c0 6.1-4.9 11-11 11z" fill="#040000" p-id="2949"></path></svg>'},{name:"15",icon:'<svg t="1624457870536" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3103" ><path d="M673.1 318.7c3.7-17.5 5.6-35.7 5.6-54.4 0-137.9-105.5-249.7-235.6-249.7S207.4 126.4 207.4 264.3c0 55.4 17.1 106.7 45.9 148.1-55.2 63.3-88.6 145.9-88.6 236.3 0 199.2 162.1 360.6 362.1 360.6 200 0 362.1-161.5 362.1-360.6 0.1-147.3-88.7-274-215.8-330z" fill="#4F8A54" p-id="3104"></path><path d="M392 246.2m-47.1 0a47.1 47.1 0 1 0 94.2 0 47.1 47.1 0 1 0-94.2 0Z" fill="#FFFFFF" p-id="3105"></path><path d="M386 252.8m-26.4 0a26.4 26.4 0 1 0 52.8 0 26.4 26.4 0 1 0-52.8 0Z" fill="#040000" p-id="3106"></path><path d="M505.6 246.2m-47.1 0a47.1 47.1 0 1 0 94.2 0 47.1 47.1 0 1 0-94.2 0Z" fill="#FFFFFF" p-id="3107"></path><path d="M501.4 252.8m-26.4 0a26.4 26.4 0 1 0 52.8 0 26.4 26.4 0 1 0-52.8 0Z" fill="#040000" p-id="3108"></path><path d="M474.3 364.8h-50.9c-6.1 0-11.1-5-11.1-11.1v-1.9c0-6.1 5-11.1 11.1-11.1h50.9c6.1 0 11.1 5 11.1 11.1v1.9c0 6.2-5 11.1-11.1 11.1z" fill="#040000" p-id="3109"></path></svg>'},{name:"16",icon:'<svg t="1624457876371" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3263" ><path d="M246.4 227.6c-166.9 101.1-461.9 344 87 564.1 1.5 0.6 2.9 1.1 4.4 1.6 80.7 27.7 392.8 165.4 641-198.1 40-58.6 38.5-136.2-3.7-193.3C892 289.5 727 201.1 429.1 182.7c-64.1-4-127.8 11.6-182.7 44.9z" fill="#CF92BE" p-id="3264"></path><path d="M617.1 393.4c-17.4 8.8-34.9 18.1-51.2 28.9-6.9 4.6-20.3 12.3-17.4 22.6 1.2 4.3 5.6 7 9 9.5 3.7 2.7 7.6 5 11.5 7.3 18.2 10.8 37.1 20.3 55.9 30 10 5.1 18.9-10 8.8-15.1-16.4-8.4-32.9-16.9-49-26-4.5-2.6-9.1-5.2-13.5-8l-4.5-3c-0.7-0.5-1.3-1-2-1.5 1.6 1.2 0.7 0.4-0.2-0.2-1.3-0.9-0.3-0.9-0.5-0.3 0.2 0.2 0.4 0.5 0.6 0.7 1 1.9 1.3 3.7 0.8 5.7 0.1-0.6 0.7-1.4-0.6 1.3 0.7-1.5-0.1 0-0.2 0.1 0.6-0.6 1.2-1.3 1.9-1.9l1.8-1.5c1.8-1.6-0.6 0.3 1.2-0.9 2-1.5 4.1-2.9 6.2-4.3 10-6.5 20.4-12.4 30.9-18 6.5-3.5 13.1-7 19.7-10.4 9.6-5 0.8-20.1-9.2-15zM323.1 408.5c15.9 8.1 31.7 16.5 46.8 26 2.2 1.4 4.3 2.8 6.5 4.2 1 0.7 1.9 1.3 2.8 2 0.5 0.3 1 0.7 1.4 1.1-1.1-0.9-0.3-0.3 0.3 0.3 1.1 1 2.2 2.2 3.3 3.1 1.4 1.1-1-1.7-0.1-0.1-0.6-1.1-0.9-4.1 0.3-6.7 2.2-4.8 0.7 0.1 0-0.5 0 0-1.1 0.9-1.3 1 2.3-1.9 0 0-0.5 0.4-0.8 0.5-1.5 1.1-2.3 1.6-4 2.7-8.1 5.1-12.3 7.5-17.3 10-35.1 19.1-52.8 28.2-10 5.1-1.2 20.2 8.8 15.1 17.5-9 35-17.9 52-27.7 7.3-4.2 15.9-8.6 21.8-14.7 9.3-9.7-4.3-19.7-11.5-24.7-10.1-7.1-20.9-13.1-31.7-19-7.6-4.2-15.2-8.2-22.9-12.1-9.7-5.2-18.6 9.9-8.6 15zM513 592.1c-12.2 0-24.6-1.4-36.3-4.3-8-2-13.9-8.2-15.4-16.2s1.7-15.8 8.4-20.5c23.2-16.3 60.5-31.9 106.2-13 6.4 2.6 11 8.3 12.3 15.1 1.3 6.7-0.8 13.6-5.7 18.3-13.5 13.1-40.9 20.6-69.5 20.6z m-37.4-32.5c-3.4 2.4-4.9 6.2-4.2 10.2 0.8 4.1 3.6 7.1 7.7 8.1 39.1 9.7 81.2 0.7 96.1-13.7 2.4-2.3 3.4-5.6 2.7-8.9-0.7-3.4-2.9-6.2-6.1-7.5-41.2-17.2-75.1-3.1-96.2 11.8z" fill="#040000" p-id="3265"></path></svg>'},{name:"17",icon:'<svg t="1624457881793" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3419" ><path d="M1008.6 465.7c0-124.9-95.5-226.2-213.4-226.2-12 0-23.8 1.1-35.2 3.1v-3.1c0-124.9-95.5-226.2-213.4-226.2S333.4 114.6 333.4 239.5c0 2.4 0 4.8 0.1 7.2-17.1-4.7-35-7.2-53.4-7.2-117.8 0-213.4 101.3-213.4 226.2 0 92.1 51.9 171.3 126.3 206.6-13.7 29.9-21.4 63.4-21.4 98.8 0 124.9 95.5 226.2 213.4 226.2 68.8 0 130-34.5 169-88.1 39 53.6 100.2 88.1 169 88.1 117.8 0 213.4-101.3 213.4-226.2 0-41.2-10.4-79.9-28.6-113.1 60.5-39.9 100.8-111.1 100.8-192.3z" fill="#8CC66D" p-id="3420"></path><path d="M437.8 400.7m-24.7 0a24.7 24.7 0 1 0 49.4 0 24.7 24.7 0 1 0-49.4 0Z" fill="#040000" p-id="3421"></path><path d="M649.7 400.7m-24.7 0a24.7 24.7 0 1 0 49.4 0 24.7 24.7 0 1 0-49.4 0Z" fill="#040000" p-id="3422"></path><path d="M527.3 625.9c6.3-14.2 13.1-28.3 17.9-43 6.2-19 8.3-38.6 10.5-58.3l2.1-19.2c0.7-6.2-9-6.1-9.7 0-1.7 16.3-2.8 32.8-5.7 48.9-4.2 23.7-13.8 45-23.5 66.7-2.5 5.6 5.9 10.5 8.4 4.9z" fill="#252525" p-id="3423"></path><path d="M447.7 522.3c20.3-0.1 40.6-0.2 61-0.4l96.6-0.6c7.5 0 14.9-0.1 22.4-0.1 16.6-0.1 16.7-25.9 0-25.8-20.3 0.1-40.6 0.2-61 0.4l-96.6 0.6c-7.5 0-14.9 0.1-22.4 0.1-16.6 0.1-16.7 25.9 0 25.8z" fill="#040000" p-id="3424"></path><path d="M495.4 508.2c-10.3 3.8-9.2 20.9-9.2 29.5 0.1 16 2.1 32.3 6.1 47.8 3.5 13.7 8.7 29.9 20.6 38.7 12.9 9.5 27.6 2.1 37.6-7.9 10.2-10.3 17.8-23 24.7-35.6 11.6-21.3 20.9-43.8 29.7-66.4 3-7.8-9.5-11.1-12.5-3.4-7.4 19.1-15.3 38.1-24.7 56.4-5.9 11.5-12.2 23-20.3 33.1-2.8 3.5-5.8 6.9-9.2 9.8-1.9 1.7-1.4 1.3-3.3 2.5-1.3 0.8-2.6 1.6-3.9 2.2-0.7 0.3 1-0.2-0.8 0.3-0.6 0.2-1.2 0.3-1.8 0.5-1.1 0.3-1.2 0.2-0.5 0.1-0.6 0-1.3 0-1.9 0.1-2.2 0.1 0.6 0.5-1.8-0.2l-1.8-0.6c1.5 0.5 0.2 0.1-0.5-0.3-0.8-0.5-2.9-2.1-1.7-1.1-1-0.9-2-1.7-2.8-2.7-0.4-0.5-0.9-1-1.3-1.5 0.4 0.5 0.1 0.2-0.5-0.7-0.8-1.3-1.7-2.5-2.4-3.9-0.7-1.3-1.4-2.5-2-3.8-0.4-0.8-0.8-1.6-1.1-2.4-0.1-0.2-0.5-1.1 0 0l-0.6-1.5a86.8 86.8 0 0 1-3.3-9.8c-4.4-14.9-6.2-27.9-6.8-42.8-0.3-6.6-0.3-13.1 0.4-19.7 0.2-1.5-0.3 1.5 0.1-0.5l0.3-1.8c0.2-0.9 0.5-1.8 0.7-2.8 0.4-1.9-0.7 1.1 0.3-0.7 0.5-1-1.3 1.2-0.3 0.5-0.3 0.3-1.1 0.8-2 1.1 7.7-2.9 4.3-15.4-3.5-12.5z" fill="#040000" p-id="3425"></path></svg>'},{name:"18",icon:'<svg t="1624457899440" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3579" ><path d="M75.4 739.8c-78.7-134.4-194-455.7 401.4-579.6 9.8-2 19.2-6.2 29.2-7.5C656.8 133 947.3 205 1000.1 578.4c42.6 223.8 29.7 392.1-822 233.6-43.1-8-80.6-34.4-102.7-72.2z" fill="#F09495" p-id="3580"></path><path d="M704.6 875.4c-129 0-301.8-20.5-526.6-62.3-43.5-8.1-81.2-34.6-103.5-72.7-19.3-32.9-44.8-84.3-57.1-142.5-13.9-65.1-8.8-125.3 15.1-179.2 54.3-122.3 203.7-209.6 444-259.6 4.1-0.9 8.3-2.1 12.3-3.4 5.5-1.7 11.1-3.4 16.9-4.2 29-3.8 75.7-5.9 133.8 5.7 54.5 10.9 105.3 31 150.8 59.9C843.7 251 888.2 296 922.7 351c39.7 63.1 66.1 139.6 78.5 227.3 8.1 42.4 15.2 87.3 12.5 127.9-2.8 42.6-16.4 75.5-41.5 100.7-42.5 42.7-120.3 65-237.8 68.1-9.6 0.2-19.6 0.4-29.8 0.4zM76.3 739.3c22 37.6 59.2 63.7 102.1 71.7 242.5 45.1 424.4 65.3 556.1 61.9 116.9-3.1 194.1-25.2 236.3-67.5 55.4-55.6 44.4-142.5 28.3-226.7C976 415.8 903.4 291.5 789.2 219c-124-78.7-248.1-69.9-283.2-65.3-5.6 0.7-11.2 2.4-16.6 4.1-4.1 1.2-8.3 2.5-12.5 3.4C237.3 211.1 88.5 298 34.5 419.6c-54.6 122.8 2.8 253 41.8 319.7z" fill="#FFFFFF" p-id="3581"></path><path d="M424.1 442.5m-24.7 0a24.7 24.7 0 1 0 49.4 0 24.7 24.7 0 1 0-49.4 0Z" fill="#040000" p-id="3582"></path><path d="M635.9 442.5m-24.7 0a24.7 24.7 0 1 0 49.4 0 24.7 24.7 0 1 0-49.4 0Z" fill="#040000" p-id="3583"></path><path d="M426.2 543.3c17.1 7.9 36.6 26 25.5 46.1-6.9 12.5-19.8 21.2-31.7 28.4-4.5 2.7-0.4 9.8 4.1 7.1 17.4-10.5 41.6-27.6 39-51.1-1.6-14-12.4-24.8-23.5-32.3-3-2-6.1-3.9-9.3-5.4-4.8-2.1-8.9 5-4.1 7.2zM629.5 535.4c-21.8 11.7-40.6 37-25.7 61.3 8.2 13.4 22.2 22.7 35.7 30.3 4.7 2.7 8.9-4.6 4.2-7.2-15.5-8.7-39.9-23.9-36.9-45.2 1.6-11.4 10.7-20.7 19.6-27.2 2.4-1.7 4.8-3.4 7.4-4.8 4.7-2.5 0.4-9.8-4.3-7.2z" fill="#040000" p-id="3584"></path><path d="M457.2 584.6c25.6 25.6 66.7 41 101.8 28.3 18.2-6.6 33.2-19.1 45.5-33.8 4.2-5.1-3-12.4-7.3-7.3-18.5 22-43.3 38.1-73 35-18.6-1.9-36.2-10.8-50.9-22-2.9-2.2-6.1-4.8-8.8-7.5-4.7-4.7-12 2.6-7.3 7.3z" fill="#040000" p-id="3585"></path></svg>'},{name:"19",icon:'<svg t="1624457904464" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3739" ><path d="M915.9 510.5c8.4-19 13.1-39.8 13.1-61.7 0-90-78.9-162.9-176.2-162.9-3.2 0-6.3 0.1-9.5 0.2v-0.2c0-94.8-116.2-171.6-259.6-171.6S224 191.2 224 286v2c-96.2 0-174.1 72-174.1 160.9 0 38 14.3 73 38.2 100.5-41.8 29.4-68.8 75.9-68.8 128.2 0 88.9 78 160.9 174.1 160.9 17.1 0 33.6-2.3 49.3-6.5 28.9 46.1 88.7 77.7 157.6 77.7 49.4 0 94-16.2 126-42.3 32 26.1 76.6 42.3 126 42.3 77.3 0 143-39.7 166.7-95 3.1 0.2 6.3 0.2 9.5 0.2 97.3 0 176.2-72.9 176.2-162.9 0-60.6-35.7-113.4-88.8-141.5z" fill="#5A74B8" p-id="3740"></path><path d="M357.6 449.5a46.6 73.2 0 1 0 93.2 0 46.6 73.2 0 1 0-93.2 0Z" fill="#FEFEFD" p-id="3741"></path><path d="M357.5 449.5a25.1 39.4 0 1 0 50.2 0 25.1 39.4 0 1 0-50.2 0Z" fill="#040000" p-id="3742"></path><path d="M531.3 449.5a46.6 73.2 0 1 0 93.2 0 46.6 73.2 0 1 0-93.2 0Z" fill="#FEFEFD" p-id="3743"></path><path d="M531.2 449.5a25.1 39.4 0 1 0 50.2 0 25.1 39.4 0 1 0-50.2 0Z" fill="#040000" p-id="3744"></path><path d="M426.7 574.6c20.9 29.9 59.7 52.2 96.2 38.6 19.2-7.2 34.7-21.2 47.6-36.9 2.8-3.5 3.4-8.3 0-11.7-2.9-2.9-8.9-3.5-11.7 0-16.5 20.2-40.9 40.9-68.1 35.5-17.3-3.4-31-13.2-42.9-25.9-2-2.2-3.9-4.4-5.8-6.7-1.6-1.9 1.1 1.5-0.4-0.6-0.2-0.2-0.3-0.5-0.5-0.7-6.2-8.7-20.6-0.4-14.4 8.4z" fill="#040000" p-id="3745"></path></svg>'},{name:"20",icon:'<svg t="1624457910321" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3899" ><path d="M792.8 301.4c-8.2 0-16.2 0.4-24.2 1.3-12.3-81.8-129.2-145.9-271.8-145.9-137.1 0-250.5 59.3-269.9 136.6C105.3 295.5 7.4 391.2 7.4 508.9c0 119.1 100.2 215.6 223.7 215.6 5.3 0 10.6-0.2 15.8-0.5 14.4 80.5 130.4 143.2 271.3 143.2 135.9 0 248.6-58.3 269.4-134.6 1.7 0 3.4 0.1 5.1 0.1 123.6 0 223.7-96.5 223.7-215.6s-100-215.7-223.6-215.7z" fill="#F6CD50" p-id="3900"></path><path d="M435.9 431.5m-52.2 0a52.2 52.2 0 1 0 104.4 0 52.2 52.2 0 1 0-104.4 0Z" fill="#FAFAFA" p-id="3901"></path><path d="M588.1 431.5m-52.2 0a52.2 52.2 0 1 0 104.4 0 52.2 52.2 0 1 0-104.4 0Z" fill="#FAFAFA" p-id="3902"></path><path d="M435.9 431.5m-27.8 0a27.8 27.8 0 1 0 55.6 0 27.8 27.8 0 1 0-55.6 0Z" fill="#040000" p-id="3903"></path><path d="M601.9 407.4c-5.7 2.9-11.3 5.9-16.9 9-6.8 3.8-15.3 7.8-20.5 13.8-5.6 6.5 1.6 11.1 6.7 14.4 11.2 7.1 23.3 13 35.1 19 5.7 2.9 10.8-5.7 5.1-8.6-10.9-5.6-21.9-11.1-32.4-17.4-2.4-1.4-4.6-3.1-7-4.6 1 0.6-0.4-0.4-0.4-0.4-1.9-0.3-0.5 4.2 0.5 4.1-0.1 0-0.6 0.3 0.3-0.3 0.5-0.3 1-0.9 1.5-1.3 9.7-7.9 21.9-13.5 33.1-19.2 5.7-2.7 0.6-11.4-5.1-8.5zM406.6 547.6c11.5 14.4 27 26.7 42.7 36.3 32.2 19.8 71.2 27.2 107.6 15.4 29.5-9.6 54.6-29.1 75.5-51.6 10.8-11.6-6.6-29.1-17.5-17.5-9.4 10.1-19.5 19.7-30.8 27.7-4.6 3.2-9.3 6.2-14.2 8.9-5 2.8-9.9 5.1-14.1 6.7-4.6 1.7-9.3 3.2-14.1 4.4-2.2 0.5-4.4 1-6.6 1.4-1 0.2-2 0.3-2.9 0.5 2.6-0.4-2.1 0.2-2.5 0.3-4.1 0.4-8.3 0.5-12.5 0.4-2.2-0.1-4.4-0.2-6.6-0.4-1.1-0.1-2.2-0.2-3.2-0.3-1.5-0.2-1.4-0.2 0.1 0l-2.1-0.3c-7.8-1.3-15.4-3.4-22.8-6.2-0.9-0.4-1.8-0.7-2.8-1.1-3.1-1.2 2.3 1.1-0.7-0.3-1.5-0.7-2.9-1.3-4.4-2-3.7-1.8-7.2-3.7-10.8-5.8-5.7-3.4-11.1-7.1-16.4-11.1 3 2.3-1.1-0.9-1.8-1.5-1.1-0.9-2.1-1.7-3.1-2.6-2.1-1.8-4.2-3.7-6.3-5.6-4.4-4.1-8.7-8.4-12.4-13.1-4.2-5.2-13.1-4.3-17.5 0-5 5.1-4 12.2 0.2 17.4z" fill="#040000" p-id="3904"></path></svg>'}]},{name:"标记图标",type:"sign",list:[{name:"1",icon:'<svg viewBox="0 0 1024 1024"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#6D768D"></path><path d="M809.728 429.696a18.901333 18.901333 0 0 0-15.274667-12.885333l-183.466666-26.624-81.92-166.272a18.901333 18.901333 0 0 0-34.005334 0l-81.92 166.272-183.594666 26.624a19.029333 19.029333 0 0 0-10.496 32.298666l132.693333 129.536-31.274667 182.741334a18.816 18.816 0 0 0 27.477334 19.84l164.138666-86.186667 164.096 86.058667a18.773333 18.773333 0 1 0 27.434667-19.84l-31.36-182.741334 132.693333-129.408a18.901333 18.901333 0 0 0 4.778667-19.413333z" fill="#FFFFFF"></path></svg>'},{name:"2",icon:'<svg viewBox="0 0 1024 1024"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#6D768D"></path><path d="M644.565333 306.901333c32.128 0 65.834667-5.76 101.077334-17.237333a17.066667 17.066667 0 0 1 22.357333 16.213333v328.32c-1.109333 0.768 10.325333 27.093333-99.370667 19.84-109.653333-7.210667-181.76-45.098667-246.869333-45.098666-65.152 0-49.322667 2.688-74.154667 8.405333v168.064a24.746667 24.746667 0 0 1-24.490666 25.258667 22.528 22.528 0 0 1-17.28-7.253334 24.149333 24.149333 0 0 1-7.168-18.005333V281.258667C299.776 280.490667 328.106667 256 421.76 256s164.437333 50.901333 222.805333 50.901333z" fill="#FFFFFF"></path></svg>'},{name:"3",icon:'<svg viewBox="0 0 1024 1024"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#6D768D"></path><path d="M524.074667 225.408l274.517333 274.517333a17.066667 17.066667 0 0 1 0 24.149334l-274.517333 274.517333a17.066667 17.066667 0 0 1-24.149334 0l-274.517333-274.517333a17.066667 17.066667 0 0 1 0-24.149334l274.517333-274.517333a17.066667 17.066667 0 0 1 24.149334 0z" fill="#FFFFFF"></path></svg>'},{name:"4",icon:'<svg viewBox="0 0 1024 1024"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#6D768D"></path><path d="M317.866667 300.8h388.266666c9.386667 0 17.066667 7.68 17.066667 17.066667v388.266666a17.066667 17.066667 0 0 1-17.066667 17.066667h-388.266666a17.066667 17.066667 0 0 1-17.066667-17.066667v-388.266666c0-9.386667 7.68-17.066667 17.066667-17.066667z" fill="#FFFFFF"></path></svg>'},{name:"5",icon:'<svg viewBox="0 0 1024 1024"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#6D768D"></path><path d="M498.346667 279.082667L248.789333 701.44a15.829333 15.829333 0 0 0 13.653334 23.893333h499.114666a15.829333 15.829333 0 0 0 13.653334-23.893333l-249.6-422.357333a15.829333 15.829333 0 0 0-27.264 0z" fill="#FFFFFF"></path></svg>'},{name:"6",icon:'<svg viewBox="0 0 1024 1024"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#6D768D"></path><path d="M497.749333 798.549333l-31.445333-28.501333C313.941333 631.722667 213.333333 540.501333 213.333333 428.8a160.981333 160.981333 0 0 1 162.730667-162.730667c51.498667 0 100.906667 23.978667 133.12 61.696a177.536 177.536 0 0 1 133.162667-61.696 160.981333 160.981333 0 0 1 162.730666 162.730667c0 111.701333-100.608 202.965333-252.970666 341.333333l-31.445334 28.458667a17.066667 17.066667 0 0 1-22.912 0z" fill="#FFFFFF"></path><path d="M634.538667 487.808L555.050667 426.24 507.306667 256a201.002667 201.002667 0 0 0-23.594667 20.394667l-0.256-0.256L525.653333 426.666667l-133.290666 59.946666a14.08 14.08 0 0 0-8.021334 15.957334l28.757334 126.378666a14.208 14.208 0 0 0 27.733333-6.229333l-26.24-115.114667 126.037333-56.704 76.416 59.136a14.250667 14.250667 0 0 0 19.968-2.474666 14.08 14.08 0 0 0-2.474666-19.797334z" fill="#6D768D"></path></svg>'},{name:"7",icon:'<svg viewBox="0 0 1024 1024"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#6D768D"></path><path d="M497.749333 798.549333l-31.445333-28.501333C313.941333 631.722667 213.333333 540.501333 213.333333 428.8a160.981333 160.981333 0 0 1 162.730667-162.730667c51.498667 0 100.906667 23.978667 133.12 61.696a177.536 177.536 0 0 1 133.162667-61.696 160.981333 160.981333 0 0 1 162.730666 162.730667c0 111.701333-100.608 202.965333-252.970666 341.333333l-31.445334 28.458667a17.066667 17.066667 0 0 1-22.912 0z" fill="#FFFFFF"></path></svg>'},{name:"8",icon:'<svg viewBox="0 0 1024 1024"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#6D768D"></path><path d="M374.656 273.194667c5.973333 4.48 12.117333 9.6 18.346667 15.36 6.272 5.717333 11.904 12.373333 16.896 19.84 2.517333 4.010667 5.504 8.490667 9.002666 13.482666a529.493333 529.493333 0 0 1 20.266667 32.213334h155.221333a169.813333 169.813333 0 0 0 9.770667-15.744c2.474667-4.48 5.248-8.96 8.234667-13.482667a460.842667 460.842667 0 0 1 23.253333-31.829333c4.992-6.229333 12.245333-12.373333 21.76-18.346667a34.261333 34.261333 0 0 0 10.112-9.728 31.274667 31.274667 0 0 0 5.248-11.989333 18.56 18.56 0 0 0-1.536-11.605334 17.664 17.664 0 0 0-10.112-8.618666c-4.48-1.493333-8.362667-2.005333-11.605333-1.493334a46.933333 46.933333 0 0 0-9.770667 2.602667c-3.242667 1.28-6.613333 2.645333-10.112 4.138667a32.426667 32.426667 0 0 1-12.757333 2.261333 26.026667 26.026667 0 0 1-12.373334-2.645333 45.653333 45.653333 0 0 1-8.96-6.357334l-8.661333-7.850666a30.336 30.336 0 0 0-11.989333-6.4c-9.984-3.968-18.005333-4.693333-24.021334-2.218667-5.973333 2.474667-11.946667 6.485333-17.962666 11.946667a88.618667 88.618667 0 0 1-11.989334 10.496 7.338667 7.338667 0 0 1-3.754666 1.493333 46.165333 46.165333 0 0 1-8.277334-5.205333 71.808 71.808 0 0 1-7.125333-4.906667 37.973333 37.973333 0 0 1-6.4-6.357333c-3.968-3.968-9.941333-6.613333-17.92-7.850667a31.061333 31.061333 0 0 0-21.76 4.138667c-8.533333 5.461333-14.506667 10.069333-18.048 13.824a29.354667 29.354667 0 0 1-15.744 7.893333 23.978667 23.978667 0 0 1-13.098667-0.768 987.733333 987.733333 0 0 0-14.634666-4.48 80.725333 80.725333 0 0 0-14.250667-2.986667 16.768 16.768 0 0 0-11.989333 2.986667c-6.997333 5.461333-9.258667 12.074667-6.741334 19.84a34.56 34.56 0 0 0 13.482667 18.346667z" fill="#FFFFFF"></path><path d="M780.757333 545.152a219.306667 219.306667 0 0 0-19.882666-65.536 224.981333 224.981333 0 0 0-33.365334-49.792 430.336 430.336 0 0 0-37.12-37.12c-14.506667-11.946667-27.264-23.296-38.272-34.048a544.512 544.512 0 0 1-27.733333-28.842667 305.28 305.28 0 0 1-22.485333-26.197333h-168.746667c-6.485333 8.490667-13.994667 17.493333-22.485333 26.965333a360.96 360.96 0 0 1-26.24 28.074667c-10.538667 10.24-22.272 21.12-35.285334 32.597333a305.493333 305.493333 0 0 0-41.6 44.16 250.026667 250.026667 0 0 0-49.493333 117.589334 216.106667 216.106667 0 0 0 1.877333 70.4 220.586667 220.586667 0 0 0 75.349334 126.549333c21.248 18.005333 47.146667 32.597333 77.653333 43.818667 30.464 11.264 65.493333 16.853333 104.96 16.853333 38.528 0 72.874667-4.864 103.125333-14.592a265.045333 265.045333 0 0 0 78.378667-39.338667c21.973333-16.469333 39.594667-35.797333 52.864-58.026666 13.226667-22.186667 22.101333-45.824 26.624-70.784 4.992-30.421333 5.632-58.026667 1.877333-82.773334z" fill="#FFFFFF"></path><path d="M593.322667 647.509333a20.48 20.48 0 0 1-11.861334 3.2h-50.133333v14.165334c0 4.266667-1.792 8.362667-5.376 12.373333a15.914667 15.914667 0 0 1-13.952 5.333333 24.917333 24.917333 0 0 1-14.336-3.882666c-3.84-2.602667-5.973333-7.210667-6.4-13.824v-14.165334h-48.725333a17.792 17.792 0 0 1-11.818667-3.882666 10.24 10.24 0 0 1-3.968-9.6c0-4.266667 1.578667-7.68 4.693333-10.24a16.768 16.768 0 0 1 11.093334-3.925334h48.682666v-24.789333h-48.682666a15.573333 15.573333 0 0 1-11.52-4.266667 13.525333 13.525333 0 0 1-4.266667-9.941333 15.36 15.36 0 0 1 4.693333-10.624 14.72 14.72 0 0 1 11.093334-4.949333h48.682666l0.725334-14.890667a1053.568 1053.568 0 0 1-40.832-42.538667l-10.752-9.898666a41.216 41.216 0 0 1-6.442667-11.690667c-1.92-4.992-0.938667-10.069333 2.858667-15.274667a13.653333 13.653333 0 0 1 15.786666-3.84c6.186667 2.090667 11.221333 4.821333 15.018667 8.106667 1.92 2.389333 5.248 5.888 10.026667 10.666667l15.061333 14.848 19.328 19.157333 22.186667-20.565333a987.605333 987.605333 0 0 1 29.397333-25.514667 21.162667 21.162667 0 0 1 14.293333-5.674667c5.290667 0 9.557333 2.133333 12.928 6.4 6.186667 7.082667 3.84 15.36-7.168 24.789334a179.072 179.072 0 0 0-12.885333 12.373333c-5.76 5.973333-11.52 11.733333-17.194667 17.408-6.698667 7.082667-14.08 14.378667-22.186666 21.973333v13.44h46.506666c6.698667 0 11.605333 1.536 14.72 4.608a14.165333 14.165333 0 0 1 4.650667 10.282667c0 4.266667-1.450667 7.936-4.309333 11.008-2.858667 3.029333-7.637333 4.352-14.336 3.84l-46.506667 0.768-0.768 24.064h45.866667c13.354667 0 20.053333 4.992 20.053333 14.933333 0.469333 4.693333-0.853333 8.106667-3.925333 10.24z" fill="#6D768D"></path></svg>'},{name:"9",icon:'<svg viewBox="0 0 1024 1024"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#6D768D"></path><path d="M512 213.333333l234.666667 341.333334h-128v213.333333h-213.333334v-213.333333h-128L512 213.333333z" fill="#FFFFFF"></path></svg>'},{name:"10",icon:'<svg viewBox="0 0 1024 1024"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#6D768D"></path><path d="M533.333333 810.666667L298.666667 469.333333h128V256h213.333333v213.333333h128l-234.666667 341.333334z" fill="#FFFFFF"></path></svg>'},{name:"11",icon:'<svg viewBox="0 0 1024 1024"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#6D768D"></path><path d="M213.333333 533.333333L554.666667 298.666667v128h213.333333v213.333333h-213.333333v128l-341.333334-234.666667z" fill="#FFFFFF"></path></svg>'},{name:"12",icon:'<svg viewBox="0 0 1024 1024"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#6D768D"></path><path d="M810.666667 533.333333L469.333333 768v-128H256v-213.333333h213.333333V298.666667l341.333334 234.666666z" fill="#FFFFFF"></path></svg>'},{name:"13",icon:'<svg viewBox="0 0 1024 1024"><path d="M0 512c0 282.752 229.248 512 512 512s512-229.248 512-512S794.752 0 512 0 0 229.248 0 512z" fill="#6D768D"></path><path d="M571.349333 508.586667l162.389334-162.346667a44.330667 44.330667 0 1 0-62.72-62.72l-162.389334 162.389333-162.517333-162.389333a44.330667 44.330667 0 1 0-62.72 62.72l162.389333 162.389333-162.389333 162.474667a44.330667 44.330667 0 1 0 62.72 62.72l162.389333-162.346667 162.389334 162.389334a44.330667 44.330667 0 1 0 62.72-62.72l-162.261334-162.56z" fill="#FFFFFF"></path></svg>'},{name:"14",icon:'<svg viewBox="0 0 1024 1024"><path d="M512 0C233.386667 0 0 225.877333 0 512s225.877333 512 512 512 512-225.877333 512-512S790.613333 0 512 0z" fill="#6D768D"></path><path d="M726.144 311.210667l-277.333333 305.066666-124.8-124.8c-13.866667-13.866667-41.6-13.866667-55.466667 0-13.866667 13.866667-13.866667 41.6 0 55.466667l159.445333 152.533333c13.866667 13.866667 41.6 13.866667 55.466667 0l305.066667-332.8c13.866667-13.866667 13.866667-41.6 0-55.466666-20.778667-13.866667-48.512-13.866667-62.378667 0z" fill="#FFFFFF"></path></svg>'},{name:"15",icon:'<svg viewBox="0 0 1024 1024"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#6D768D"></path><path d="M541.952 755.626667a40.618667 40.618667 0 0 1-29.824 12.373333 41.344 41.344 0 0 1-30.122667-12.373333 40.106667 40.106667 0 0 1-12.672-30.122667c0-11.605333 4.096-21.845333 12.672-30.122667a40.405333 40.405333 0 0 1 30.122667-12.714666c11.605333 0 21.546667 4.138667 29.824 12.714666a40.32 40.32 0 0 1 12.714667 30.122667c0 11.861333-4.096 21.76-12.714667 30.122667zM450.986667 241.28A77.866667 77.866667 0 0 1 512.256 213.333333c24.874667 0 45.354667 8.917333 61.354667 27.946667 15.488 18.432 23.722667 41.685333 23.722666 69.674667 0 23.765333-33.152 200.533333-44.672 329.045333h-80.128C463.146667 511.402667 426.666667 334.677333 426.666667 310.954667c0-27.392 8.277333-50.645333 24.32-69.674667z" fill="#FFFFFF"></path></svg>'},{name:"16",icon:'<svg viewBox="0 0 1024 1024"><path d="M512 0C229.248 0 0 229.248 0 512s229.248 512 512 512 512-229.248 512-512S794.794667 0 512 0z" fill="#6D768D"></path><path d="M490.666667 682.666667a64 64 0 1 1 0 128 64 64 0 0 1 0-128z m13.994666-490.752c61.397333 0 112.341333 14.634667 153.002667 43.946666 40.533333 29.269333 60.885333 72.618667 60.885333 130.133334 0 35.242667-12.373333 64.938667-29.952 89.045333-10.282667 14.677333-33.664 33.408-62.890666 56.192l-32.426667 22.357333c-15.701333 12.202667-29.696 26.453333-34.858667 42.666667-1.706667 5.546667-3.072 14.677333-3.968 24.533333-0.426667 4.949333-4.864 15.018667-15.232 15.018667h-83.328c-13.568 0-15.957333-10.581333-15.744-15.786667 1.493333-34.005333 4.608-64.213333 18.474667-80.469333 28.074667-32.896 91.904-73.813333 91.904-73.813333a104.106667 104.106667 0 0 0 23.552-24.021334c10.837333-14.933333 19.797333-31.317333 19.797333-49.237333 0-20.565333-6.016-39.338667-18.090666-56.32-12.032-16.938667-34.090667-25.386667-66.005334-25.386667-31.445333 0-53.76 10.410667-66.901333 31.274667-9.685333 15.445333-15.786667 29.610667-18.346667 45.013333-0.853333 5.461333-4.394667 16.981333-16.042666 16.981334H327.210667c-17.322667 0-21.12-11.221333-20.650667-16.64 6.272-68.138667 32.896-114.688 80-144.597334 32-20.565333 71.381333-30.890667 118.101333-30.890666z" fill="#FFFFFF"></path></svg>'},{name:"17",icon:'<svg viewBox="0 0 1024 1024"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#6D768D"></path><path d="M336.256 410.026667H253.312a40.021333 40.021333 0 0 0-39.850667 43.264l23.296 278.101333c1.706667 20.693333 19.072 36.608 39.850667 36.608h59.648c11.050667 0 20.010667-8.96 20.010667-19.968v-318.037333a19.968 19.968 0 0 0-20.010667-19.968z m434.432 0h-178.944C653.312 182.314667 548.949333 170.666667 548.949333 170.666667c-44.288 0-35.114667 34.986667-38.442666 40.832 0 84.48-68.010667 155.093333-101.034667 184.362666a39.552 39.552 0 0 0-13.226667 29.653334v322.56c0 11.008 8.96 19.925333 20.010667 19.925333h233.728c30.378667 0 58.154667-17.152 71.68-44.373333 18.176-36.736 40.448-90.112 54.656-133.973334 13.781333-42.410667 26.24-94.976 33.578667-131.968a39.850667 39.850667 0 0 0-39.253334-47.658666z" fill="#FFFFFF"></path></svg>'},{name:"18",icon:'<svg viewBox="0 0 1024 1024"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#6D768D"></path><path d="M796.16 413.909333c-31.146667-0.298667-115.626667-0.085333-146.858667-0.085333h-158.464c8.533333-7.68 15.914667-14.506667 23.594667-20.906667 29.781333-24.874667 25.813333-71.082667-14.208-88.874666-22.954667-10.24-44.970667-5.632-64 11.52-34.944 31.274667-69.632 62.677333-104.277333 93.994666a15.488 15.488 0 0 1-11.178667 4.437334c-11.221333-0.085333-26.88-0.128-46.933333-0.170667a17.066667 17.066667 0 0 0-17.109334 17.066667L256 719.701333a17.066667 17.066667 0 0 0 17.066667 17.152l49.578666-0.085333c3.968 0 7.466667 0.768 10.88 2.602667 15.829333 8.832 31.701333 17.493333 47.616 26.24a18.133333 18.133333 0 0 0 9.301334 2.346666h168.405333c6.186667 0 11.946667-0.981333 17.834667-2.56 29.44-7.253333 40.021333-30.293333 38.528-52.565333-0.768-9.728-4.266667-18.346667-9.984-26.24 19.626667-5.76 35.114667-16.213333 42.112-36.096 7.125333-20.394667 1.621333-38.4-12.672-53.333333 28.16-19.754667 34.858667-44.672 18.645333-75.648h140.458667c6.570667 0 13.013333-0.597333 19.370666-2.645334 31.957333-9.813333 48.810667-42.88 35.626667-71.552-10.154667-22.186667-28.629333-33.152-52.608-33.450666z" fill="#FFFFFF"></path></svg>'},{name:"19",icon:'<svg viewBox="0 0 1024 1024"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#6D768D"></path><path d="M270.506667 413.909333c31.146667-0.298667 115.626667-0.085333 146.858666-0.085333h158.464c-8.533333-7.68-15.914667-14.506667-23.594666-20.906667-29.781333-24.874667-25.813333-71.082667 14.208-88.874666 22.954667-10.24 44.970667-5.632 64 11.52 34.944 31.274667 69.632 62.677333 104.277333 93.994666 3.413333 2.986667 6.528 4.437333 11.178667 4.437334 11.221333-0.085333 26.88-0.128 46.933333-0.170667a17.066667 17.066667 0 0 1 17.109333 17.066667l0.682667 288.853333a17.066667 17.066667 0 0 1-17.066667 17.152l-49.578666-0.085333a22.101333 22.101333 0 0 0-10.88 2.602666c-15.829333 8.832-31.701333 17.493333-47.616 26.24a18.133333 18.133333 0 0 1-9.301334 2.346667h-168.405333a68.693333 68.693333 0 0 1-17.834667-2.56c-29.44-7.253333-40.021333-30.293333-38.528-52.565333 0.768-9.728 4.266667-18.346667 9.984-26.24-19.626667-5.76-35.114667-16.213333-42.112-36.096-7.125333-20.394667-1.621333-38.4 12.672-53.333334-28.16-19.754667-34.858667-44.672-18.645333-75.648H272.853333c-6.570667 0-13.013333-0.597333-19.370666-2.645333-31.957333-9.813333-48.810667-42.88-35.626667-71.552 10.154667-22.186667 28.629333-33.152 52.608-33.450667z" fill="#FFFFFF"></path></svg>'},{name:"20",icon:'<svg viewBox="0 0 1024 1024"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#6D768D"></path><path d="M667.733333 480.128H400v-111.36a97.706667 97.706667 0 0 1 97.621333-97.621333 97.706667 97.706667 0 0 1 97.578667 97.621333 28.885333 28.885333 0 0 0 57.813333 0A155.605333 155.605333 0 0 0 497.621333 213.333333a155.605333 155.605333 0 0 0-155.392 155.434667v111.36h-14.677333A28.885333 28.885333 0 0 0 298.666667 509.013333v292.010667a28.885333 28.885333 0 0 0 28.885333 28.885333h340.138667a28.885333 28.885333 0 0 0 28.928-28.885333V509.013333a28.885333 28.885333 0 0 0-28.928-28.885333z" fill="#FFFFFF"></path></svg>'},{name:"21",icon:'<svg viewBox="0 0 1024 1024"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#6D768D"></path><path d="M400.042667 437.461333v-111.36a97.706667 97.706667 0 0 1 97.621333-97.621333 97.706667 97.706667 0 0 1 97.578667 97.621333 28.885333 28.885333 0 0 0 57.813333 0A155.605333 155.605333 0 0 0 497.621333 170.666667a155.605333 155.605333 0 0 0-155.392 155.434666v111.36h-14.677333A28.885333 28.885333 0 0 0 298.666667 466.346667v292.010666a28.885333 28.885333 0 0 0 28.885333 28.885334h340.138667a28.885333 28.885333 0 0 0 28.928-28.885334V466.346667a28.885333 28.885333 0 0 0-28.928-28.885334H400.042667z" fill="#FFFFFF"></path><path d="M595.242667 437.461333v-111.36a97.706667 97.706667 0 0 0-97.621334-97.621333 97.706667 97.706667 0 0 0-97.578666 97.621333 28.885333 28.885333 0 0 1-57.813334 0A155.605333 155.605333 0 0 1 497.621333 170.666667a155.605333 155.605333 0 0 1 155.434667 155.434666v111.36h14.634667c16 0 28.928 12.928 28.928 28.885334v292.010666a28.885333 28.885333 0 0 1-28.928 28.885334H327.552A28.885333 28.885333 0 0 1 298.666667 758.357333V466.346667c0-15.957333 12.928-28.885333 28.885333-28.885334h267.690667z" fill="#FFFFFF"></path></svg>'},{name:"22",icon:'<svg viewBox="0 0 1024 1024"><path d="M511.999787 512.000213m-511.999787 0a511.999787 511.999787 0 1 0 1023.999573 0 511.999787 511.999787 0 1 0-1023.999573 0Z" fill="#6D768D"></path><path d="M381.354508 364.586941c0 54.015977 29.013321 103.935957 75.946635 130.986613a152.53327 152.53327 0 0 0 151.935936 0 151.12527 151.12527 0 0 0 75.946636-130.986613A151.594604 151.594604 0 0 0 533.333111 213.333671a151.594604 151.594604 0 0 0-151.89327 151.25327zM660.479725 498.901552a185.258589 185.258589 0 0 1-127.146614 50.346646c-49.066646 0-93.866628-19.199992-127.06128-50.346646C317.141201 544.853533 255.999893 637.440161 255.999893 744.106783c0 13.183995 10.709329 23.850657 23.978657 23.850657h506.709122a23.893323 23.893323 0 0 0 23.978657-23.893323c0-106.538622-61.098641-199.25325-150.186604-245.205232z" fill="#FFFFFF"></path></svg>'},{name:"23",icon:'<svg viewBox="0 0 1024 1024"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#6D768D"></path><path d="M445.610667 401.578667a129.322667 129.322667 0 1 0 258.645333 0 129.322667 129.322667 0 0 0-258.645333 0z m237.568 114.901333a157.354667 157.354667 0 0 1-216.362667 0 236.373333 236.373333 0 0 0-127.957333 209.706667c0 11.264 9.130667 20.394667 20.394666 20.394666h431.402667a20.394667 20.394667 0 0 0 20.394667-20.394666 236.373333 236.373333 0 0 0-127.872-209.706667zM409.813333 401.578667c0-40.362667 14.592-77.397333 38.698667-106.112a112.725333 112.725333 0 0 0-29.013333-3.925334 112.64 112.64 0 0 0-112.426667 112.469334 112.64 112.64 0 0 0 144.853333 107.648 164.693333 164.693333 0 0 1-42.112-110.08z m-18.602666 136.704a136.533333 136.533333 0 0 1-65.706667-34.474667 205.44 205.44 0 0 0-111.232 182.4c0 9.813333 7.936 17.706667 17.706667 17.706667H303.36a273.621333 273.621333 0 0 1 87.893333-165.632z" fill="#FFFFFF"></path></svg>'}]}],u='<svg t="1624174958075" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7982" ><path d="M435.484444 251.733333v68.892445L295.822222 320.682667a168.504889 168.504889 0 0 0-2.844444 336.952889h142.506666v68.892444H295.822222a237.397333 237.397333 0 0 1 0-474.794667h139.662222z m248.945778 0a237.397333 237.397333 0 0 1 0 474.851556H544.654222v-69.006222l139.776 0.056889a168.504889 168.504889 0 0 0 2.844445-336.952889H544.597333V251.676444h139.776z m-25.827555 203.946667a34.474667 34.474667 0 0 1 0 68.892444H321.649778a34.474667 34.474667 0 0 1 0-68.892444h336.952889z" p-id="7983"></path></svg>',p='<svg t="1624195132675" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8792" ><path d="M152.768 985.984 152.768 49.856l434.56 0 66.816 0 234.048 267.392 0 66.816 0 601.92L152.768 985.984 152.768 985.984zM654.144 193.088l0 124.16 108.736 0L654.144 193.088 654.144 193.088zM821.312 384.064l-167.168 0L587.328 384.064 587.328 317.312 587.328 116.736 219.584 116.736 219.584 919.04l601.728 0L821.312 384.064 821.312 384.064zM386.688 517.888 319.808 517.888 319.808 450.944l66.816 0L386.624 517.888 386.688 517.888zM386.688 651.584 319.808 651.584 319.808 584.704l66.816 0L386.624 651.584 386.688 651.584zM386.688 785.344 319.808 785.344l0-66.88 66.816 0L386.624 785.344 386.688 785.344zM721.024 517.888 453.632 517.888 453.632 450.944l267.392 0L721.024 517.888 721.024 517.888zM654.144 651.584 453.632 651.584 453.632 584.704l200.512 0L654.144 651.584 654.144 651.584zM620.672 785.344l-167.04 0 0-66.88 167.04 0L620.672 785.344 620.672 785.344z" p-id="8793"></path></svg>',m='<svg t="1711935375590" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3864" xmlns:xlink="http://www.w3.org/1999/xlink" width="128" height="128"><path d="M516.373333 375.978667l136.576-136.576a147.797333 147.797333 0 0 1 208.853334-0.021334 147.690667 147.690667 0 0 1-0.042667 208.832l-204.8 204.778667v0.021333l-153.621333 153.6c-85.973333 85.973333-225.28 85.973333-311.253334 0.021334-85.994667-85.973333-85.973333-225.216 0.149334-311.36L431.146667 256.362667a21.333333 21.333333 0 0 0-30.165334-30.165334L162.069333 465.066667c-102.805333 102.826667-102.826667 269.056-0.149333 371.733333 102.613333 102.613333 268.970667 102.613333 371.584 0l153.6-153.642667h0.021333l0.021334-0.021333 204.778666-204.778667c74.325333-74.325333 74.346667-194.858667 0.021334-269.184-74.24-74.24-194.88-74.24-269.162667 0.042667l-136.576 136.554667-187.626667 187.626666a117.845333 117.845333 0 0 0-0.106666 166.826667 118.037333 118.037333 0 0 0 166.826666-0.106667l255.850667-255.829333a21.333333 21.333333 0 0 0-30.165333-30.165333L435.136 669.973333a75.370667 75.370667 0 0 1-106.496 0.106667 75.178667 75.178667 0 0 1 0.128-106.496l187.605333-187.605333z" p-id="3865"></path></svg>',f=(t,e=[])=>{let i=t.split("_");let n=(0,r.eF)([...c,...e]).find((t=>t.type===i[0]));if(n){let t=n.list.find((t=>t.name===i[1]));return t?t.icon:""}return""};var g=i(753579);const x={createImgNode:function(){const t=this.getData("image");if(!t)return;const e=this.getImgShowSize(),i=(new o._V).load(t).size(...e),{defaultNodeImage:n}=this.mindMap.opt;if(n){const e=new Image;e.onerror=()=>{i.load(n)},e.src=t}return this.getData("imageTitle")&&i.attr("title",this.getData("imageTitle")),i.on("dblclick",(t=>{this.mindMap.emit("node_img_dblclick",this,t)})),i.on("mouseenter",(t=>{this.mindMap.emit("node_img_mouseenter",this,i,t)})),i.on("mouseleave",(t=>{this.mindMap.emit("node_img_mouseleave",this,i,t)})),i.on("mousemove",(t=>{this.mindMap.emit("node_img_mousemove",this,i,t)})),{node:i,width:e[0],height:e[1]}},getImgShowSize:function(){const{custom:t,width:e,height:i}=this.getData("imageSize");return t?[e,i]:(0,r.tm)(e,i,this.mindMap.themeConfig.imgMaxWidth,this.mindMap.themeConfig.imgMaxHeight)},createIconNode:function(){let t=this.getData();if(!t.icon||t.icon.length<=0)return[];let e=this.mindMap.themeConfig.iconSize;return t.icon.map((t=>{let i=f(t,this.mindMap.opt.iconList||[]),n=null;return n=/^<svg/.test(i)?(0,o.t4)(i):(new o._V).load(i),n.size(e,e),n.on("click",(e=>{this.mindMap.emit("node_icon_click",this,t,e,n)})),n.on("mouseenter",(e=>{this.mindMap.emit("node_icon_mouseenter",this,t,e,n)})),n.on("mouseleave",(e=>{this.mindMap.emit("node_icon_mouseleave",this,t,e,n)})),{node:n,width:e,height:e}}))},createRichTextNode:function(){const{textAutoWrapWidth:t}=this.mindMap.opt;let e=new o.G,i=!1;this.getData("resetRichText")&&(delete this.nodeData.data.resetRichText,i=!0),[g.aH.CHANGE_THEME].includes(this.mindMap.renderer.renderSource)&&(this.hasCustomStyle()||(i=!0));let n=this.getData("text");if(i&&!(0,r.XB)(n)){let t=(0,r.Qy)(n),e=this.style.createStyleText();if(t){n=(0,r.d2)(n);let t=n;n=(0,r.ut)(n,"span",e),n===t&&(n=(0,r.ut)(n,"strong",e))}else n=`<p><span style="${e}">${n}</span></p>`;this.setData({text:n})}let s=`<div>${this.getData("text")}</div>`;this.mindMap.commonCaches.measureRichtextNodeTextSizeEl||(this.mindMap.commonCaches.measureRichtextNodeTextSizeEl=document.createElement("div"),this.mindMap.commonCaches.measureRichtextNodeTextSizeEl.style.position="fixed",this.mindMap.commonCaches.measureRichtextNodeTextSizeEl.style.left="-999999px",this.mindMap.el.appendChild(this.mindMap.commonCaches.measureRichtextNodeTextSizeEl));let a=this.mindMap.commonCaches.measureRichtextNodeTextSizeEl;a.innerHTML=s;let h=a.children[0];h.classList.add("smm-richtext-node-wrap"),(0,r.cG)(h),h.style.maxWidth=t+"px";let{width:d,height:l}=h.getBoundingClientRect();if(l<=0){a.innerHTML="<p>abc123我和你</p>";let t=a.children[0];t.classList.add("smm-richtext-node-wrap"),l=t.getBoundingClientRect().height,a.innerHTML=s}d=Math.min(Math.ceil(d)+1,t),l=Math.ceil(l),e.attr("data-width",d),e.attr("data-height",l);const c=(0,r.EX)({el:a.children[0],width:d,height:l});return e.add(c),{node:e,nodeContent:c,width:d,height:l}},createTextNode:function(){if(this.getData("richText"))return this.createRichTextNode();this.getData("resetRichText")&&delete this.nodeData.data.resetRichText;let t=new o.G,e=this.getStyle("fontSize",!1),i=this.getStyle("lineHeight",!1),n=this.style.getTextFontStyle(),s=[];(0,r.XB)(this.getData("text"))||(s=String(this.getData("text")).split(/\n/gim));let a=this.mindMap.opt.textAutoWrapWidth,h=!1;s.forEach(((t,e)=>{let i=t.split(""),o=[],d=[];for(;i.length;){let t=i.shift(),e=[...d,t].join("");(0,r.kD)(e,n).width<=a?d.push(t):(o.push(d.join("")),d=[t])}d.length>0&&o.push(d.join("")),o.length>1&&(h=!0),s[e]=o.join("\n")})),s=s.join("\n").split(/\n/gim),s.forEach(((n,s)=>{let r=(new o.EY).text(n);this.style.text(r),r.y(e*i*s),t.add(r)}));let{width:d,height:l}=t.bbox();return d=Math.min(Math.ceil(d),a),l=Math.ceil(l),t.attr("data-width",d),t.attr("data-height",l),t.attr("data-ismultiLine",h||s.length>1),{node:t,width:d,height:l}},createHyperlinkNode:function(){let{hyperlink:t,hyperlinkTitle:e}=this.getData();if(!t)return;const{customHyperlinkJump:i}=this.mindMap.opt;let n=this.mindMap.themeConfig.iconSize,s=(new o.t4).size(n,n),r=(new o.A).to(t).target("_blank");r.node.addEventListener("click",(e=>{"function"==typeof i&&(e.preventDefault(),i(t,this))})),e&&s.add((0,o.t4)(`<title>${e}</title>`)),r.rect(n,n).fill({color:"transparent"});let a=(0,o.t4)(u).size(n,n);return this.style.iconNode(a),r.add(a),s.add(r),{node:s,width:n,height:n}},createTagNode:function(){let t=this.getData("tag");if(!t||t.length<=0)return[];let e=[];return t.slice(0,this.mindMap.opt.maxTag).forEach(((t,i)=>{let n=(new o.G).x(5);n.on("click",(e=>{e.stopPropagation(),this.mindMap.emit("node_tag_click",this,t)}));let s="#3471d3",r="#3471d3",a=t;this.mindMap.opt.tagFormat&&({strokeColor:s,fillColor:r,formatedText:a}=this.mindMap.opt.tagFormat({item:t,index:i}));let h=(new o.EY).text(a).x(-2).cy(8).dy(35);h.fill({color:s}).css({"font-size":"12px"});let{width:d}=h.bbox(),l=(new o.rw).size(d+16,20).radius(3,3).x(-10).y(33).stroke({width:1,color:s});this.style.tagRect(l,h,r),n.add(l).add(h),e.push({node:n,width:d+16,height:20})})),e},createNoteNode:function(){if(!this.getData("note"))return null;let t=this.mindMap.themeConfig.iconSize,e=(new o.t4).attr("cursor","pointer").addClass("smm-node-note").size(t,t);e.add((new o.rw).size(t,t).fill({color:"transparent"}));let i=(0,o.t4)(p).size(t,t);if(this.style.iconNode(i),e.add(i),!this.mindMap.opt.customNoteContentShow){if(!this.noteEl){this.noteEl=document.createElement("div"),this.noteEl.style.cssText=`\n          position: fixed;\n          padding: 10px;\n          border-radius: 5px;\n          box-shadow: 0 2px 5px rgb(0 0 0 / 10%);\n          display: none;\n          background-color: #fff;\n          z-index: ${this.mindMap.opt.nodeNoteTooltipZIndex}\n      `;(this.mindMap.opt.customInnerElsAppendTo||document.body).appendChild(this.noteEl)}this.noteEl.innerText=this.getData("note")}return e.on("mouseover",(()=>{const{left:t,top:e}=this.getNoteContentPosition();this.mindMap.opt.customNoteContentShow?this.mindMap.opt.customNoteContentShow.show(this.getData("note"),t,e,this):(this.noteEl.style.left=t+"px",this.noteEl.style.top=e+"px",this.noteEl.style.display="block")})),e.on("mouseout",(()=>{this.mindMap.opt.customNoteContentShow?this.mindMap.opt.customNoteContentShow.hide():this.noteEl.style.display="none"})),{node:e,width:t,height:t}},createAttachmentNode:function(){const{attachmentUrl:t,attachmentName:e}=this.getData();if(!t)return;const i=this.mindMap.themeConfig.iconSize,n=(new o.t4).attr("cursor","pointer").size(i,i);e&&n.add((0,o.t4)(`<title>${e}</title>`)),n.add((new o.rw).size(i,i).fill({color:"transparent"}));const s=(0,o.t4)(m).size(i,i);return this.style.iconNode(s),n.add(s),n.on("click",(t=>{this.mindMap.emit("node_attachmentClick",this,t,n)})),n.on("contextmenu",(t=>{this.mindMap.emit("node_attachmentContextmenu",this,t,n)})),{node:n,width:i,height:i}},getNoteContentPosition:function(){const t=this.mindMap.themeConfig.iconSize,{scaleY:e}=this.mindMap.view.getTransformData().transform,i=t*e;let{left:n,top:s}=this._noteData.node.node.getBoundingClientRect();return s+=i,{left:n,top:s}},measureCustomNodeContentSize:function(t){this.mindMap.commonCaches.measureCustomNodeContentSizeEl||(this.mindMap.commonCaches.measureCustomNodeContentSizeEl=document.createElement("div"),this.mindMap.commonCaches.measureCustomNodeContentSizeEl.style.cssText="\n      position: fixed;\n      left: -99999px;\n      top: -99999px;\n    ",this.mindMap.el.appendChild(this.mindMap.commonCaches.measureCustomNodeContentSizeEl)),this.mindMap.commonCaches.measureCustomNodeContentSizeEl.innerHTML="",this.mindMap.commonCaches.measureCustomNodeContentSizeEl.appendChild(t);let e=this.mindMap.commonCaches.measureCustomNodeContentSizeEl.getBoundingClientRect();return{width:e.width,height:e.height}},isUseCustomNodeContent:function(){return!!this._customNodeContent}};const v={renderExpandBtnPlaceholderRect:function(){if(!(!this.nodeData.children||this.nodeData.children.length<=0||this.isRoot||this.mindMap.opt.alwaysShowExpandBtn)){let{width:t,height:e}=this;this._unVisibleRectRegionNode||(this._unVisibleRectRegionNode=new o.rw,this._unVisibleRectRegionNode.fill({color:"transparent"})),this.group.add(this._unVisibleRectRegionNode),this.renderer.layout.renderExpandBtnRect(this._unVisibleRectRegionNode,this.expandBtnSize,t,e,this)}},clearExpandBtnPlaceholderRect:function(){this._unVisibleRectRegionNode&&(this._unVisibleRectRegionNode.remove(),this._unVisibleRectRegionNode=null)},updateExpandBtnPlaceholderRect:function(){this.needRerenderExpandBtnPlaceholderRect&&(this.needRerenderExpandBtnPlaceholderRect=!1,this.renderExpandBtnPlaceholderRect()),this.nodeData.children&&this.nodeData.children.length>0?this._unVisibleRectRegionNode||this.renderExpandBtnPlaceholderRect():this._unVisibleRectRegionNode&&this.clearExpandBtnPlaceholderRect()}};const y={createUserListNode:function(){this.mindMap.cooperate&&(this._userListGroup=new o.G,this.group.add(this._userListGroup))},updateUserListNode:function(){if(!this._userListGroup)return;const{avatarSize:t}=this.mindMap.opt.cooperateStyle;this._userListGroup.clear();const e=this.userList.length,i=Math.floor(this.width/t),n=[];e>i?n.push(...this.userList.slice(0,i-1),{isMore:!0,name:"+"+(e-i+1)}):n.push(...this.userList),n.forEach(((e,i)=>{let n=null;n=e.avatar?this.createImageAvatar(e):this.createTextAvatar(e),n.on("click",(t=>{this.mindMap.emit("node_cooperate_avatar_click",e,this,n,t)})),n.on("mouseenter",(t=>{this.mindMap.emit("node_cooperate_avatar_mouseenter",e,this,n,t)})),n.on("mouseleave",(t=>{this.mindMap.emit("node_cooperate_avatar_mouseleave",e,this,n,t)})),n.x(i*t).cy(-t/2),this._userListGroup.add(n)}))},createTextAvatar:function(t){const{avatarSize:e,fontSize:i}=this.mindMap.opt.cooperateStyle,n=new o.G,s=t.isMore?t.name:String(t.name)[0],a=(new o.jl).size(e,e);a.fill({color:t.color||(0,r.pE)(s)});const h=(new o.EY).text(s).fill({color:"#fff"}).css({"font-size":i}).dx(-i/2).dy((e-i)/2);return n.add(a).add(h),n},createImageAvatar:function(t){const{avatarSize:e}=this.mindMap.opt.cooperateStyle;return(new o._V).load(t.avatar).size(e,e)},addUser:function(t){this.userList.find((e=>e.id==t.id))||(this.userList.push(t),this.updateUserListNode())},removeUser:function(t){const e=this.userList.findIndex((e=>e.id==t.id));-1!==e&&(this.userList.splice(e,1),this.updateUserListNode())},emptyUser:function(){this.userList=[],this.updateUserListNode()}};class M{constructor(t={}){this.opt=t,this.nodeData=this.handleData(t.data||{}),this.uid=t.uid,this.mindMap=t.mindMap,this.renderer=t.renderer,this.draw=this.mindMap.draw,this.nodeDraw=this.mindMap.nodeDraw,this.lineDraw=this.mindMap.lineDraw,this.style=new n.A(this),this.shapeInstance=new s.A(this),this.shapePadding={paddingX:0,paddingY:0},this.isRoot=void 0!==t.isRoot&&t.isRoot,this.isGeneralization=void 0!==t.isGeneralization&&t.isGeneralization,this.generalizationBelongNode=null,this.layerIndex=void 0===t.layerIndex?0:t.layerIndex,this.width=t.width||0,this.height=t.height||0,this._left=t.left||0,this._top=t.top||0,this.customLeft=t.data.data.customLeft||void 0,this.customTop=t.data.data.customTop||void 0,this.isDrag=!1,this.parent=t.parent||null,this.children=t.children||[],this.userList=[],this.group=null,this.shapeNode=null,this.hoverNode=null,this._customNodeContent=null,this._imgData=null,this._iconData=null,this._textData=null,this._hyperlinkData=null,this._tagData=null,this._noteData=null,this.noteEl=null,this.noteContentIsShow=!1,this._attachmentData=null,this._prefixData=null,this._postfixData=null,this._expandBtn=null,this._lastExpandBtnType=null,this._showExpandBtn=!1,this._openExpandNode=null,this._closeExpandNode=null,this._fillExpandNode=null,this._userListGroup=null,this._lines=[],this._generalizationList=[],this._unVisibleRectRegionNode=null,this._isMouseenter=!1,this._rectInfo={imgContentWidth:0,imgContentHeight:0,textContentWidth:0,textContentHeight:0},this._generalizationNodeWidth=0,this._generalizationNodeHeight=0,this.textContentItemMargin=this.mindMap.opt.textContentMargin,this.blockContentMargin=this.mindMap.opt.imgTextMargin,this.expandBtnSize=this.mindMap.opt.expandBtnSize,this.isMultipleChoice=!1,this.needLayout=!1,this.isHide=!1;const e=Object.getPrototypeOf(this);e.bindEvent||(Object.keys(a).forEach((t=>{e[t]=a[t]})),Object.keys(d).forEach((t=>{e[t]=d[t]})),Object.keys(v).forEach((t=>{e[t]=v[t]})),Object.keys(l).forEach((t=>{e[t]=l[t]})),Object.keys(x).forEach((t=>{e[t]=x[t]})),this.mindMap.cooperate&&Object.keys(y).forEach((t=>{e[t]=y[t]})),e.bindEvent=!0),this.getSize()}get left(){return this.customLeft||this._left}set left(t){this._left=t}get top(){return this.customTop||this._top}set top(t){this._top=t}reset(){this.children=[],this.parent=null,this.isRoot=!1,this.layerIndex=0,this.left=0,this.top=0}resetWhenDelete(){this._isMouseenter=!1}handleData(t){return t.data.expand=!1!==t.data.expand,t.data.isActive=!0===t.data.isActive,t.children=t.children||[],t}createNodeData(){let{isUseCustomNodeContent:t,customCreateNodeContent:e,createNodePrefixContent:i,createNodePostfixContent:n}=this.mindMap.opt;t&&e&&(this._customNodeContent=e(this)),this._customNodeContent?(0,r.cG)(this._customNodeContent):(this._imgData=this.createImgNode(),this._iconData=this.createIconNode(),this._textData=this.createTextNode(),this._hyperlinkData=this.createHyperlinkNode(),this._tagData=this.createTagNode(),this._noteData=this.createNoteNode(),this._attachmentData=this.createAttachmentNode(),this._prefixData=i?i(this):null,this._prefixData&&this._prefixData.el&&(0,r.cG)(this._prefixData.el),this._postfixData=n?n(this):null,this._postfixData&&this._postfixData.el&&(0,r.cG)(this._postfixData.el))}getSize(){this.customLeft=this.getData("customLeft")||void 0,this.customTop=this.getData("customTop")||void 0,this.updateGeneralization(),this.createNodeData();let{width:t,height:e}=this.getNodeRect(),i=this.width!==t||this.height!==e;return this.width=t,this.height=e,i}getNodeRect(){if(this.isUseCustomNodeContent()){let t=this.measureCustomNodeContentSize(this._customNodeContent);return{width:t.width,height:t.height}}let t=0,e=0,i=0,n=0;this._imgData&&(this._rectInfo.imgContentWidth=t=this._imgData.width,this._rectInfo.imgContentHeight=e=this._imgData.height),this._prefixData&&(i+=this._prefixData.width,n=Math.max(n,this._prefixData.height)),this._iconData.length>0&&(i+=this._iconData.reduce(((t,e)=>(n=Math.max(n,e.height),t+(e.width+this.textContentItemMargin))),0)),this._textData&&(i+=this._textData.width,n=Math.max(n,this._textData.height)),this._hyperlinkData&&(i+=this._hyperlinkData.width,n=Math.max(n,this._hyperlinkData.height)),this._noteData&&(i+=this._noteData.width,n=Math.max(n,this._noteData.height)),this._attachmentData&&(i+=this._attachmentData.width,n=Math.max(n,this._attachmentData.height)),this._postfixData&&(i+=this._postfixData.width,n=Math.max(n,this._postfixData.height)),this._rectInfo.textContentWidth=i,this._rectInfo.textContentHeight=n;let s=e>0&&n>0?this.blockContentMargin:0,{paddingX:o,paddingY:r}=this.getPaddingVale(),a=Math.max(t,i),h=e+n,{paddingX:d,paddingY:l}=this.shapeInstance.getShapePadding(a,h,o,r);this.shapePadding.paddingX=d,this.shapePadding.paddingY=l;const c=this.getBorderWidth();return{width:a+2*o+2*d+c,height:h+2*r+s+2*l+c}}layout(){this.group.clear();const{hoverRectPadding:t}=this.mindMap.opt;let{width:e,height:i,textContentItemMargin:n}=this,{paddingY:s}=this.getPaddingVale();const a=this.getBorderWidth()/2;s+=this.shapePadding.paddingY+a,this.shapeNode=this.shapeInstance.createShape(),this.shapeNode.addClass("smm-node-shape"),this.shapeNode.translate(a,a),this.style.shape(this.shapeNode),this.group.add(this.shapeNode),this.renderExpandBtnPlaceholderRect(),this.createUserListNode&&this.createUserListNode(),this.isGeneralization&&this.generalizationBelongNode&&this.group.addClass("generalization_"+this.generalizationBelongNode.uid);const h=()=>{this.hoverNode=(new o.rw).size(e+2*t,i+2*t).x(-t).y(-t),this.hoverNode.addClass("smm-hover-node"),this.style.hoverNode(this.hoverNode,e,i),this.group.add(this.hoverNode)};if(this.isUseCustomNodeContent()){const t=(0,r.EX)({el:this._customNodeContent,width:e,height:i});return this.group.add(t),void h()}let d=0;this._imgData&&(d=this._imgData.height,this.group.add(this._imgData.node),this._imgData.node.cx(e/2).y(s));let l=new o.G,c=0;if(this._prefixData){const t=(0,r.EX)({el:this._prefixData.el,width:this._prefixData.width,height:this._prefixData.height});t.x(c).y((this._rectInfo.textContentHeight-this._prefixData.height)/2),l.add(t),c+=this._prefixData.width+n}let u=new o.G;if(this._iconData&&this._iconData.length>0){let t=0;this._iconData.forEach((e=>{e.node.x(c+t).y((this._rectInfo.textContentHeight-e.height)/2),u.add(e.node),t+=e.width+n})),l.add(u),c+=t}if(this._textData){const t=this._textData.node.attr("data-offsetx")||0;this._textData.node.attr("data-offsetx",c),(this._textData.nodeContent||this._textData.node).x(-t).x(c).y((this._rectInfo.textContentHeight-this._textData.height)/2),l.add(this._textData.node),c+=this._textData.width+n}this._hyperlinkData&&(this._hyperlinkData.node.x(c).y((this._rectInfo.textContentHeight-this._hyperlinkData.height)/2),l.add(this._hyperlinkData.node),c+=this._hyperlinkData.width+n);let p=new o.G;if(this._tagData&&this._tagData.length>0&&(this._tagData.forEach((t=>{t.node.x(0).y(this._rectInfo.textContentHeight+20),p.add(t.node)})),this.group.add(p)),this._noteData&&(this._noteData.node.x(c).y((this._rectInfo.textContentHeight-this._noteData.height)/2),l.add(this._noteData.node),c+=this._noteData.width),this._attachmentData&&(this._attachmentData.node.x(c).y((this._rectInfo.textContentHeight-this._attachmentData.height)/2),l.add(this._attachmentData.node),c+=this._attachmentData.width),this._postfixData){const t=(0,r.EX)({el:this._postfixData.el,width:this._postfixData.width,height:this._postfixData.height});t.x(c).y((this._rectInfo.textContentHeight-this._postfixData.height)/2),l.add(t),c+=this._postfixData.width}l.translate(e/2-l.bbox().width/2,d+s+(d>0&&this._rectInfo.textContentHeight>0?this.blockContentMargin:0)),this.group.add(l),h(),this.mindMap.emit("node_layout_end",this)}bindGroupEvent(){this.group.on("click",(t=>{if(this.mindMap.emit("node_click",this,t),!t.defaultPrevented)return this.isMultipleChoice?(t.stopPropagation(),void(this.isMultipleChoice=!1)):void(this.mindMap.opt.onlyOneEnableActiveNodeOnCooperate&&this.userList.length>0||this.active(t))})),this.group.on("mousedown",(t=>{t.preventDefault();const{readonly:e,enableCtrlKeyNodeSelection:i,useLeftKeySelectionRightKeyDrag:n}=this.mindMap.opt;if(e||(this.isRoot?3!==t.which||n||t.stopPropagation():2!==t.which&&t.stopPropagation()),!e&&(t.ctrlKey||t.metaKey)&&i){this.isMultipleChoice=!0;let t=this.getData("isActive");t||this.mindMap.emit("before_node_active",this,this.renderer.activeNodeList),this.mindMap.renderer[t?"removeNodeFromActiveList":"addNodeToActiveList"](this,!0),this.renderer.emitNodeActiveEvent(t?null:this)}this.mindMap.emit("node_mousedown",this,t)})),this.group.on("mouseup",(t=>{this.isRoot||2===t.which||this.mindMap.opt.readonly||t.stopPropagation(),this.mindMap.emit("node_mouseup",this,t)})),this.group.on("mouseenter",(t=>{this.isDrag||(this._isMouseenter=!0,this.showExpandBtn(),this.isGeneralization&&this.handleGeneralizationMouseenter(),this.mindMap.emit("node_mouseenter",this,t))})),this.group.on("mouseleave",(t=>{this._isMouseenter&&(this._isMouseenter=!1,this.hideExpandBtn(),this.isGeneralization&&this.handleGeneralizationMouseleave(),this.mindMap.emit("node_mouseleave",this,t))})),this.group.on("dblclick",(t=>{const{readonly:e,onlyOneEnableActiveNodeOnCooperate:i}=this.mindMap.opt;e||t.ctrlKey||t.metaKey||(t.stopPropagation(),i&&this.userList.length>0||this.mindMap.emit("node_dblclick",this,t))})),this.group.on("contextmenu",(t=>{const{readonly:e,useLeftKeySelectionRightKeyDrag:i}=this.mindMap.opt;e||t.ctrlKey||(t.stopPropagation(),t.preventDefault(),this.mindMap.select&&!i&&this.mindMap.select.hasSelectRange()||(this.getData("isActive")&&1===this.renderer.activeNodeList.length||(this.renderer.clearActiveNodeList(),this.active(t)),this.mindMap.emit("node_contextmenu",t,this)))}))}active(t){this.mindMap.opt.readonly||(t&&t.stopPropagation(),this.getData("isActive")||(this.mindMap.emit("before_node_active",this,this.renderer.activeNodeList),this.renderer.clearActiveNodeList(),this.renderer.addNodeToActiveList(this,!0),this.renderer.emitNodeActiveEvent(this)))}deactivate(){this.mindMap.renderer.removeNodeFromActiveList(this),this.mindMap.renderer.emitNodeActiveEvent()}update(){if(!this.group)return;this.updateNodeActiveClass();let{alwaysShowExpandBtn:t}=this.mindMap.opt;const e=this.nodeData.children.length;if(t)this._expandBtn&&e<=0?this.removeExpandBtn():this.renderExpandBtn();else{let{isActive:t,expand:i}=this.getData();e<=0?this.removeExpandBtn():!i||t||this._isMouseenter?this.showExpandBtn():this.hideExpandBtn()}this.renderGeneralization(),this.updateUserListNode&&this.updateUserListNode();let i=this.group.transform();this.left===i.translateX&&this.top===i.translateY||this.group.translate(this.left-i.translateX,this.top-i.translateY)}getNodePosInClient(t,e){let i=this.mindMap.draw.transform(),{scaleX:n,scaleY:s,translateX:o,translateY:r}=i;return{left:t*n+o,top:e*s+r}}reRender(){let t=this.getSize();return this.layout(),this.update(),t}updateNodeActiveClass(){if(!this.group)return;const t=this.getData("isActive");this.group[t?"addClass":"removeClass"]("active")}updateNodeByActive(t){this.group&&(t?this.showExpandBtn():this.hideExpandBtn(),this.updateNodeActiveClass())}render(t=(()=>{})){if(this.renderLine(),this.group?(this.nodeDraw.has(this.group)||this.nodeDraw.add(this.group),this.needLayout&&(this.needLayout=!1,this.layout()),this.updateExpandBtnPlaceholderRect(),this.update()):(this.group=new o.G,this.group.addClass("smm-node"),this.group.css({cursor:"default"}),this.bindGroupEvent(),this.nodeDraw.add(this.group),this.layout(),this.update()),this.children&&this.children.length&&!1!==this.getData("expand")){let e=0;this.children.forEach((i=>{i.render((()=>{e++,e>=this.children.length&&t()}))}))}else t();this.nodeData.inserting&&(delete this.nodeData.inserting,this.active(),this.mindMap.emit("node_dblclick",this,null,!0))}remove(){this.group&&(this.group.remove(),this.removeGeneralization(),this.removeLine(),this.children&&this.children.length&&this.children.forEach((t=>{t.remove()})))}destroy(){this.group&&(this.emptyUser&&this.emptyUser(),this.resetWhenDelete(),this.group.remove(),this.removeGeneralization(),this.removeLine(),this.group=null,this.parent&&this.parent.removeLine(),this.style.onRemove())}hide(){if(this.group.hide(),this.hideGeneralization(),this.parent){let t=this.parent.children.indexOf(this);this.parent._lines[t]&&this.parent._lines[t].hide(),this._lines.forEach((t=>{t.hide()}))}this.children&&this.children.length&&this.children.forEach((t=>{t.hide()}))}show(){if(this.group){if(this.group.show(),this.showGeneralization(),this.parent){let t=this.parent.children.indexOf(this);this.parent._lines[t]&&this.parent._lines[t].show(),this._lines.forEach((t=>{t.show()}))}this.children&&this.children.length&&this.children.forEach((t=>{t.show()}))}}setOpacity(t){this.group.opacity(t),this._lines.forEach((e=>{e.opacity(t)})),this.children.forEach((e=>{e.setOpacity(t)})),this.setGeneralizationOpacity(t)}hideChildren(){this._lines.forEach((t=>{t.hide()})),this.children&&this.children.length&&this.children.forEach((t=>{t.hide()}))}showChildren(){this._lines.forEach((t=>{t.show()})),this.children&&this.children.length&&this.children.forEach((t=>{t.show()}))}startDrag(){this.isDrag=!0,this.group.addClass("smm-node-dragging")}endDrag(){this.isDrag=!1,this.group.removeClass("smm-node-dragging")}renderLine(t=!1){if(!1===this.getData("expand"))return;let e=this.nodeData.children.length;this.mindMap.opt.layout!==g.aH.LAYOUT.FISHBONE||!this.isRoot&&1!==this.layerIndex||(e=0),e>this._lines.length?new Array(e-this._lines.length).fill(0).forEach((()=>{this._lines.push(this.lineDraw.path())})):e<this._lines.length&&(this._lines.slice(e).forEach((t=>{t.remove()})),this._lines=this._lines.slice(0,e)),this.renderer.layout.renderLine(this,this._lines,((...t)=>{this.styleLine(...t)}),this.style.getStyle("lineStyle",!0)),t&&this.children&&this.children.length>0&&this.children.forEach((e=>{e.renderLine(t)}))}getShape(){return this.mindMap.themeConfig.nodeUseLineStyle?g.aH.SHAPE.RECTANGLE:this.style.getStyle("shape",!1,!1)}hasCustomPosition(){return void 0!==this.customLeft&&void 0!==this.customTop}ancestorHasCustomPosition(){let t=this;for(;t;){if(t.hasCustomPosition())return!0;t=t.parent}return!1}ancestorHasGeneralization(){let t=this.parent;for(;t;){if(t.checkHasGeneralization())return!0;t=t.parent}return!1}addChildren(t){this.children.push(t)}styleLine(t,e,i){const n=e.getSelfInhertStyle("lineWidth")||e.getStyle("lineWidth",!0),s=e.getSelfInhertStyle("lineColor")||this.getRainbowLineColor(e)||e.getStyle("lineColor",!0),o=e.getSelfInhertStyle("lineDasharray")||e.getStyle("lineDasharray",!0);this.style.line(t,{width:n,color:s,dasharray:o},i,e)}getRainbowLineColor(t){return this.mindMap.rainbowLines?this.mindMap.rainbowLines.getNodeColor(t):""}removeLine(){this._lines.forEach((t=>{t.remove()})),this._lines=[]}isAncestor(t){if(this.uid===t.uid)return!1;let e=t.parent;for(;e;){if(this.uid===e.uid)return!0;e=e.parent}return!1}isParent(t){if(this.uid===t.uid)return!1;const e=t.parent;return!(!e||this.uid!==e.uid)}isBrother(t){return!(!this.parent||this.uid===t.uid)&&this.parent.children.find((e=>e.uid===t.uid))}getIndexInBrothers(){return this.parent&&this.parent.children?this.parent.children.findIndex((t=>t.uid===this.uid)):-1}getPaddingVale(){let{isActive:t}=this.getData();return{paddingX:this.getStyle("paddingX",!0,t),paddingY:this.getStyle("paddingY",!0,t)}}getStyle(t,e){let i=this.style.merge(t,e);return void 0===i?"":i}getSelfStyle(t){return this.style.getSelfStyle(t)}getParentSelfStyle(t){return this.parent?this.parent.getSelfStyle(t)||this.parent.getParentSelfStyle(t):null}getSelfInhertStyle(t){return this.getSelfStyle(t)||this.getParentSelfStyle(t)}getBorderWidth(){return this.style.merge("borderWidth",!1)||0}getData(t){return t?this.nodeData.data[t]:this.nodeData.data}getPureData(t=!0,e=!1){return(0,r.mk)({},this,t,e)}getAncestorNodes(){const t=[];let e=this.parent;for(;e;)t.unshift(e),e=e.parent;return t}hasCustomStyle(){return this.style.hasCustomStyle()}getRect(){return this.group.rbox()}getRectInSvg(){let{scaleX:t,scaleY:e,translateX:i,translateY:n}=this.mindMap.draw.transform(),{left:s,top:o,width:r,height:a}=this,h=(s+r)*t+i,d=(o+a)*e+n;return s=s*t+i,o=o*e+n,{left:s,right:h,top:o,bottom:d,width:r*t,height:a*e}}highlight(){this.group&&this.group.addClass("smm-node-highlight")}closeHighlight(){this.group&&this.group.removeClass("smm-node-highlight")}fakeClone(){const t=new M({...this.opt,uid:(0,r.Xn)()});return Object.keys(this).forEach((e=>{t[e]=this[e]})),t}}const w=M;class _{constructor(t){this.max=t||1e3,this.size=0,this.pool=new Map}add(t,e){return!(!this.has(t)&&this.size>=this.max)&&(this.delete(t),this.pool.set(t,e),this.size++,!0)}delete(t){this.pool.has(t)&&(this.pool.delete(t),this.size--)}has(t){return this.pool.has(t)}get(t){if(this.pool.has(t))return this.pool.get(t)}clear(){this.size=0,this.pool=new Map}}const N=class{constructor(t){this.renderer=t,this.mindMap=t.mindMap,this.draw=this.mindMap.draw,this.lineDraw=this.mindMap.lineDraw,this.root=null,this.lru=new _(this.mindMap.opt.maxNodeCacheCount),this.rootNodeCenterOffset=null}doLayout(){throw new Error("【computed】方法为必要方法，需要子类进行重写！")}renderLine(){throw new Error("【renderLine】方法为必要方法，需要子类进行重写！")}renderExpandBtn(){throw new Error("【renderExpandBtn】方法为必要方法，需要子类进行重写！")}renderGeneralization(){}cacheNode(t,e){this.renderer.nodeCache[t]=e,this.lru.add(t,e)}checkIsNeedResizeSources(){return[g.aH.CHANGE_THEME,g.aH.TRANSFORM_TO_NORMAL_NODE].includes(this.renderer.renderSource)}checkIsLayerTypeChange(t,e){return!(t>=2&&e>=2)&&(t>=2&&e<2||(t<2&&e>=2||void 0))}checkIsLayoutChangeRerenderExpandBtnPlaceholderRect(t){this.renderer.renderSource===g.aH.CHANGE_LAYOUT&&(t.needRerenderExpandBtnPlaceholderRect=!0)}createNode(t,e,i,n){const s=t.data.uid;let o=null;if(t&&t._node&&!this.renderer.reRender){o=t._node;const e=this.checkIsLayerTypeChange(o.layerIndex,n);o.reset(),o.layerIndex=n,this.cacheNode(t._node.uid,o),this.checkIsLayoutChangeRerenderExpandBtnPlaceholderRect(o),(this.checkIsNeedResizeSources()||e||o.getData("resetRichText"))&&(o.getSize(),o.needLayout=!0)}else if(!this.lru.has(s)&&!this.renderer.lastNodeCache[s]||this.renderer.reRender){const e=s||(0,r.Xn)();o=new w({data:t,uid:e,renderer:this.renderer,mindMap:this.mindMap,draw:this.draw,layerIndex:n}),t.data.uid=e,this.cacheNode(e,o),t._node=o}else{o=this.lru.get(s)||this.renderer.lastNodeCache[s];const e=JSON.stringify(o.getData()),i=this.checkIsLayerTypeChange(o.layerIndex,n);o.reset(),o.nodeData=o.handleData(t||{}),o.layerIndex=n,this.cacheNode(s,o),this.checkIsLayoutChangeRerenderExpandBtnPlaceholderRect(o),t._node=o;const r=this.checkIsNeedResizeSources(),a=e!==JSON.stringify(t.data);(r||a||i||o.getData("resetRichText"))&&(o.getSize(),o.needLayout=!0)}return t.data.isActive&&this.renderer.addNodeToActiveList(o),-1!==this.mindMap.renderer.findActiveNodeIndex(o)&&o.setData({isActive:!0}),i?(o.isRoot=!0,this.root=o):(o.parent=e._node,e._node.addChildren(o)),o}formatPosition(t,e,i){return"number"==typeof t?t:void 0!==g.iD[t]?e*g.iD[t]:/^\d\d*%$/.test(t)?Number.parseFloat(t)/100*e:(e-i)/2}formatInitRootNodePosition(t){const{CENTER:e}=g.aH.INIT_ROOT_NODE_POSITION;return(!t||!Array.isArray(t)||t.length<2)&&(t=[e,e]),t}setNodeCenter(t,e){let{initRootNodePosition:i}=this.mindMap.opt;i=this.formatInitRootNodePosition(e||i),t.left=this.formatPosition(i[0],this.mindMap.width,t.width),t.top=this.formatPosition(i[1],this.mindMap.height,t.height)}getRootCenterOffset(t,e){if(this.rootNodeCenterOffset)return this.rootNodeCenterOffset;let{initRootNodePosition:i}=this.mindMap.opt;const{CENTER:n}=g.aH.INIT_ROOT_NODE_POSITION;if(i=this.formatInitRootNodePosition(i),i[0]===n&&i[1]===n)this.rootNodeCenterOffset={x:0,y:0};else{const i={width:t,height:e},s={width:t,height:e};this.setNodeCenter(i,[n,n]),this.setNodeCenter(s),this.rootNodeCenterOffset={x:s.left-i.left,y:s.top-i.top}}return this.rootNodeCenterOffset}updateChildren(t,e,i){t.forEach((t=>{t[e]+=i,t.children&&t.children.length&&!t.hasCustomPosition()&&this.updateChildren(t.children,e,i)}))}updateChildrenPro(t,e){t.forEach((t=>{Object.keys(e).forEach((i=>{t[i]+=e[i]})),t.children&&t.children.length&&!t.hasCustomPosition()&&this.updateChildrenPro(t.children,e)}))}getNodeAreaWidth(t,e=!1){let i=[],n=0,s=(t,o)=>{e&&t.checkHasGeneralization()&&(n+=t._generalizationNodeWidth),t.children.length?(o+=t.width/2,t.children.forEach((t=>{s(t,o)}))):(o+=t.width,i.push(o))};return s(t,0),Math.max(...i)+n}quadraticCurvePath(t,e,i,n){return`M ${t},${e} Q ${t+.2*(i-t)},${e+.8*(n-e)} ${i},${n}`}cubicBezierPath(t,e,i,n){let s=t+(i-t)/2;return`M ${t},${e} C ${s},${e} ${s},${n} ${i},${n}`}computeNewPoint(t,e,i=0){return t[0]===e[0]?e[1]>t[1]?[e[0],e[1]-i]:[e[0],e[1]+i]:t[1]===e[1]?e[0]>t[0]?[e[0]-i,e[1]]:[e[0]+i,e[1]]:void 0}createFoldLine(t){const{lineRadius:e}=this.mindMap.themeConfig,i=t.length;let n="",s="";if(i>=3&&e>0){const n=t[i-3],o=t[i-2],r=t[i-1];if(!(n[0]===o[0]&&o[0]===r[0]||n[1]===o[1]&&o[1]===r[1])){const a=this.computeNewPoint(n,o,e),h=this.computeNewPoint(r,o,e);s=`Q ${o[0]},${o[1]} ${h[0]},${h[1]}`,t.splice(i-2,1,a,s)}}return t.forEach(((t,e)=>{if("string"==typeof t)n+=t;else{const[i,s]=t;n+=0===e?`M ${i},${s}`:`L ${i},${s}`}})),n}getMarginX(t){const{themeConfig:e,opt:i}=this.mindMap,{second:n,node:s}=e,o=2*i.hoverRectPadding;return 1===t?n.marginX+o:s.marginX+o}getMarginY(t){const{themeConfig:e,opt:i}=this.mindMap,{second:n,node:s}=e,o=2*i.hoverRectPadding;return 1===t?n.marginY+o:s.marginY+o}getNodeWidthWithGeneralization(t){return Math.max(t.width,t.checkHasGeneralization()?t._generalizationNodeWidth:0)}getNodeHeightWithGeneralization(t){return Math.max(t.height,t.checkHasGeneralization()?t._generalizationNodeHeight:0)}getNodeBoundaries(t,e){let{generalizationLineMargin:i,generalizationNodeMargin:n}=this.mindMap.themeConfig,s=t=>{let i=1/0,o=-1/0,r=1/0,a=-1/0;t.children&&t.children.length>0&&t.children.forEach((t=>{let{left:h,right:d,top:l,bottom:c}=s(t),u=t.checkHasGeneralization()&&t.getData("expand")?t._generalizationNodeWidth+n:0,p=t.checkHasGeneralization()&&t.getData("expand")?t._generalizationNodeHeight+n:0;h-("h"===e?u:0)<i&&(i=h-("h"===e?u:0)),d+("h"===e?u:0)>o&&(o=d+("h"===e?u:0)),l<r&&(r=l),c+("v"===e?p:0)>a&&(a=c+("v"===e?p:0))}));let h={left:t.left,right:t.left+t.width,top:t.top,bottom:t.top+t.height};return{left:h.left<i?h.left:i,right:h.right>o?h.right:o,top:h.top<r?h.top:r,bottom:h.bottom>a?h.bottom:a}},{left:o,right:r,top:a,bottom:h}=s(t);return{left:o,right:r,top:a,bottom:h,generalizationLineMargin:i,generalizationNodeMargin:n}}getChildrenBoundaries(t,e,i=0,n){let{generalizationLineMargin:s,generalizationNodeMargin:o}=this.mindMap.themeConfig;const r=t.children.slice(i,n+1);let a=1/0,h=-1/0,d=1/0,l=-1/0;return r.forEach((t=>{const i=this.getNodeBoundaries(t,e);a=i.left<a?i.left:a,h=i.right>h?i.right:h,d=i.top<d?i.top:d,l=i.bottom>l?i.bottom:l})),{left:a,right:h,top:d,bottom:l,generalizationLineMargin:s,generalizationNodeMargin:o}}getNodeGeneralizationRenderBoundaries(t,e){let i=null;return i=t.range?this.getChildrenBoundaries(t.node,e,t.range[0],t.range[1]):this.getNodeBoundaries(t.node,e),i}getNodeActChildrenLength(t){return t.nodeData.children&&t.nodeData.children.length}setLineStyle(t,e,i,n){e.plot(this.transformPath(i)),t&&t(e,n,!0)}transformPath(t){const{customTransformNodeLinePath:e}=this.mindMap.opt;return e?e(t):t}}}}]);
