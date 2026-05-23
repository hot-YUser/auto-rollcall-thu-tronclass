(self.webpackChunklms=self.webpackChunklms||[
]).push([
  [
    76546
  ], {
    483496:e=>{
      e.exports=function(e){
        return!(!e||"string"==typeof e)&&(e instanceof Array||Array.isArray(e)||e.length>=0&&(e.splice instanceof Function||Object.getOwnPropertyDescriptor(e, e.length-1)&&"String"!==e.constructor.name))
      }
    }, 484140:(e, t, r)=>{
      function n(e){
        return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){
          return typeof e
        }
        :function(e){
          return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e
        })(e)
      }
      r.d(t, {
        A:()=>o
      });
      var a=/^\s+/, i=/\s+$/;
      function o(e, t){
        if(t=t||{
        }, (e=e||"")instanceof o)return e;
        if(!(this instanceof o))return new o(e, t);
        var r=function(e){
          var t={
            r:0, g:0, b:0
          }, r=1, o=null, f=null, u=null, s=!1, c=!1;
          "string"==typeof e&&(e=function(e){
            e=e.replace(a, "").replace(i, "").toLowerCase();
            var t, r=!1;
            if(_[
              e
            ])e=_[
              e
            ], r=!0;
            else if("transparent"==e)return{
              r:0, g:0, b:0, a:0, format:"name"
            };
            if(t=B.rgb.exec(e))return{
              r:t[
                1
              ], g:t[
                2
              ], b:t[
                3
              ]
            };
            if(t=B.rgba.exec(e))return{
              r:t[
                1
              ], g:t[
                2
              ], b:t[
                3
              ], a:t[
                4
              ]
            };
            if(t=B.hsl.exec(e))return{
              h:t[
                1
              ], s:t[
                2
              ], l:t[
                3
              ]
            };
            if(t=B.hsla.exec(e))return{
              h:t[
                1
              ], s:t[
                2
              ], l:t[
                3
              ], a:t[
                4
              ]
            };
            if(t=B.hsv.exec(e))return{
              h:t[
                1
              ], s:t[
                2
              ], v:t[
                3
              ]
            };
            if(t=B.hsva.exec(e))return{
              h:t[
                1
              ], s:t[
                2
              ], v:t[
                3
              ], a:t[
                4
              ]
            };
            if(t=B.hex8.exec(e))return{
              r:T(t[
                1
              ]), g:T(t[
                2
              ]), b:T(t[
                3
              ]), a:M(t[
                4
              ]), format:r?"name":"hex8"
            };
            if(t=B.hex6.exec(e))return{
              r:T(t[
                1
              ]), g:T(t[
                2
              ]), b:T(t[
                3
              ]), format:r?"name":"hex"
            };
            if(t=B.hex4.exec(e))return{
              r:T(t[
                1
              ]
              +""+t[
                1
              ]), g:T(t[
                2
              ]
              +""+t[
                2
              ]), b:T(t[
                3
              ]
              +""+t[
                3
              ]), a:M(t[
                4
              ]
              +""+t[
                4
              ]), format:r?"name":"hex8"
            };
            if(t=B.hex3.exec(e))return{
              r:T(t[
                1
              ]
              +""+t[
                1
              ]), g:T(t[
                2
              ]
              +""+t[
                2
              ]), b:T(t[
                3
              ]
              +""+t[
                3
              ]), format:r?"name":"hex"
            };
            return!1
          }
          (e));
          "object"==n(e)&&(P(e.r)&&P(e.g)&&P(e.b)?(l=e.r, d=e.g, m=e.b, t={
            r:255*O(l, 255), g:255*O(d, 255), b:255*O(m, 255)
          }, s=!0, c="%"===String(e.r).substr(-1)?"prgb":"rgb"):P(e.h)&&P(e.s)&&P(e.v)?(o=D(e.s), f=D(e.v), t=function(e, t, r){
            e=6*O(e, 360), t=O(t, 100), r=O(r, 100);
            var n=Math.floor(e), a=e-n, i=r*(1-t), o=r*(1-a*t), f=r*(1-(1-a)*t), u=n%6;
            return{
              r:255*[
                r, o, i, i, f, r
              ]
              [
                u
              ], g:255*[
                f, r, r, o, i, i
              ]
              [
                u
              ], b:255*[
                i, i, f, r, r, o
              ]
              [
                u
              ]
            }
          }
          (e.h, o, f), s=!0, c="hsv"):P(e.h)&&P(e.s)&&P(e.l)&&(o=D(e.s), u=D(e.l), t=function(e, t, r){
            var n, a, i;
            function o(e, t, r){
              return r<0&&(r+=1), r>1&&(r-=1), r<1/6?e+6*(t-e)*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e
            }
            if(e=O(e, 360), t=O(t, 100), r=O(r, 100), 0===t)n=a=i=r;
            else{
              var f=r<.5?r*(1+t):r+t-r*t, u=2*r-f;
              n=o(u, f, e+1/3), a=o(u, f, e), i=o(u, f, e-1/3)
            }
            return{
              r:255*n, g:255*a, b:255*i
            }
          }
          (e.h, o, u), s=!0, c="hsl"), e.hasOwnProperty("a")&&(r=e.a));
          var l, d, m;
          return r=S(r), {
            ok:s, format:e.format||c, r:Math.min(255, Math.max(t.r, 0)), g:Math.min(255, Math.max(t.g, 0)), b:Math.min(255, Math.max(t.b, 0)), a:r
          }
        }
        (e);
        this._originalInput=e, this._r=r.r, this._g=r.g, this._b=r.b, this._a=r.a, this._roundA=Math.round(100*this._a)/100, this._format=t.format||r.format, this._gradientType=t.gradientType, this._r<1&&(this._r=Math.round(this._r)), this._g<1&&(this._g=Math.round(this._g)), this._b<1&&(this._b=Math.round(this._b)), this._ok=r.ok
      }
      function f(e, t, r){
        e=O(e, 255), t=O(t, 255), r=O(r, 255);
        var n, a, i=Math.max(e, t, r), o=Math.min(e, t, r), f=(i+o)/2;
        if(i==o)n=a=0;
        else{
          var u=i-o;
          switch(a=f>.5?u/(2-i-o):u/(i+o), i){
            case e:n=(t-r)/u+(t<r?6:0);
            break;
            case t:n=(r-e)/u+2;
            break;
            case r:n=(e-t)/u+4
          }
          n/=6
        }
        return{
          h:n, s:a, l:f
        }
      }
      function u(e, t, r){
        e=O(e, 255), t=O(t, 255), r=O(r, 255);
        var n, a, i=Math.max(e, t, r), o=Math.min(e, t, r), f=i, u=i-o;
        if(a=0===i?0:u/i, i==o)n=0;
        else{
          switch(i){
            case e:n=(t-r)/u+(t<r?6:0);
            break;
            case t:n=(r-e)/u+2;
            break;
            case r:n=(e-t)/u+4
          }
          n/=6
        }
        return{
          h:n, s:a, v:f
        }
      }
      function s(e, t, r, n){
        var a=[
          j(Math.round(e).toString(16)), j(Math.round(t).toString(16)), j(Math.round(r).toString(16))
        ];
        return n&&a[
          0
        ].charAt(0)==a[
          0
        ].charAt(1)&&a[
          1
        ].charAt(0)==a[
          1
        ].charAt(1)&&a[
          2
        ].charAt(0)==a[
          2
        ].charAt(1)?a[
          0
        ].charAt(0)+a[
          1
        ].charAt(0)+a[
          2
        ].charAt(0):a.join("")
      }
      function c(e, t, r, n){
        return[
          j(C(n)), j(Math.round(e).toString(16)), j(Math.round(t).toString(16)), j(Math.round(r).toString(16))
        ].join("")
      }
      function l(e, t){
        t=0===t?0:t||10;
        var r=o(e).toHsl();
        return r.s-=t/100, r.s=E(r.s), o(r)
      }
      function d(e, t){
        t=0===t?0:t||10;
        var r=o(e).toHsl();
        return r.s+=t/100, r.s=E(r.s), o(r)
      }
      function m(e){
        return o(e).desaturate(100)
      }
      function h(e, t){
        t=0===t?0:t||10;
        var r=o(e).toHsl();
        return r.l+=t/100, r.l=E(r.l), o(r)
      }
      function p(e, t){
        t=0===t?0:t||10;
        var r=o(e).toRgb();
        return r.r=Math.max(0, Math.min(255, r.r-Math.round(-t/100*255))), r.g=Math.max(0, Math.min(255, r.g-Math.round(-t/100*255))), r.b=Math.max(0, Math.min(255, r.b-Math.round(-t/100*255))), o(r)
      }
      function b(e, t){
        t=0===t?0:t||10;
        var r=o(e).toHsl();
        return r.l-=t/100, r.l=E(r.l), o(r)
      }
      function g(e, t){
        var r=o(e).toHsl(), n=(r.h+t)%360;
        return r.h=n<0?360+n:n, o(r)
      }
      function v(e){
        var t=o(e).toHsl();
        return t.h=(t.h+180)%360, o(t)
      }
      function y(e, t){
        if(isNaN(t)||t<=0)throw new Error("Argument to polyad must be a positive number");
        for(var r=o(e).toHsl(), n=[
          o(e)
        ], a=360/t, i=1;
        i<t;
        i++)n.push(o({
          h:(r.h+i*a)%360, s:r.s, l:r.l
        }));
        return n
      }
      function x(e){
        var t=o(e).toHsl(), r=t.h;
        return[
          o(e), o({
            h:(r+72)%360, s:t.s, l:t.l
          }), o({
            h:(r+216)%360, s:t.s, l:t.l
          })
        ]
      }
      function w(e, t, r){
        t=t||6, r=r||30;
        var n=o(e).toHsl(), a=360/r, i=[
          o(e)
        ];
        for(n.h=(n.h-(a*t>>1)+720)%360;
        --t;
        )n.h=(n.h+a)%360, i.push(o(n));
        return i
      }
      function A(e, t){
        t=t||6;
        for(var r=o(e).toHsv(), n=r.h, a=r.s, i=r.v, f=[
        ], u=1/t;
        t--;
        )f.push(o({
          h:n, s:a, v:i
        })), i=(i+u)%1;
        return f
      }
      o.prototype={
        isDark:function(){
          return this.getBrightness()<128
        }, isLight:function(){
          return!this.isDark()
        }, isValid:function(){
          return this._ok
        }, getOriginalInput:function(){
          return this._originalInput
        }, getFormat:function(){
          return this._format
        }, getAlpha:function(){
          return this._a
        }, getBrightness:function(){
          var e=this.toRgb();
          return(299*e.r+587*e.g+114*e.b)/1e3
        }, getLuminance:function(){
          var e, t, r, n=this.toRgb();
          return e=n.r/255, t=n.g/255, r=n.b/255, .2126*(e<=.03928?e/12.92:Math.pow((e+.055)/1.055, 2.4))+.7152*(t<=.03928?t/12.92:Math.pow((t+.055)/1.055, 2.4))+.0722*(r<=.03928?r/12.92:Math.pow((r+.055)/1.055, 2.4))
        }, setAlpha:function(e){
          return this._a=S(e), this._roundA=Math.round(100*this._a)/100, this
        }, toHsv:function(){
          var e=u(this._r, this._g, this._b);
          return{
            h:360*e.h, s:e.s, v:e.v, a:this._a
          }
        }, toHsvString:function(){
          var e=u(this._r, this._g, this._b), t=Math.round(360*e.h), r=Math.round(100*e.s), n=Math.round(100*e.v);
          return 1==this._a?"hsv("+t+", "+r+"%, "+n+"%)":"hsva("+t+", "+r+"%, "+n+"%, "+this._roundA+")"
        }, toHsl:function(){
          var e=f(this._r, this._g, this._b);
          return{
            h:360*e.h, s:e.s, l:e.l, a:this._a
          }
        }, toHslString:function(){
          var e=f(this._r, this._g, this._b), t=Math.round(360*e.h), r=Math.round(100*e.s), n=Math.round(100*e.l);
          return 1==this._a?"hsl("+t+", "+r+"%, "+n+"%)":"hsla("+t+", "+r+"%, "+n+"%, "+this._roundA+")"
        }, toHex:function(e){
          return s(this._r, this._g, this._b, e)
        }, toHexString:function(e){
          return"#"+this.toHex(e)
        }, toHex8:function(e){
          return function(e, t, r, n, a){
            var i=[
              j(Math.round(e).toString(16)), j(Math.round(t).toString(16)), j(Math.round(r).toString(16)), j(C(n))
            ];
            if(a&&i[
              0
            ].charAt(0)==i[
              0
            ].charAt(1)&&i[
              1
            ].charAt(0)==i[
              1
            ].charAt(1)&&i[
              2
            ].charAt(0)==i[
              2
            ].charAt(1)&&i[
              3
            ].charAt(0)==i[
              3
            ].charAt(1))return i[
              0
            ].charAt(0)+i[
              1
            ].charAt(0)+i[
              2
            ].charAt(0)+i[
              3
            ].charAt(0);
            return i.join("")
          }
          (this._r, this._g, this._b, this._a, e)
        }, toHex8String:function(e){
          return"#"+this.toHex8(e)
        }, toRgb:function(){
          return{
            r:Math.round(this._r), g:Math.round(this._g), b:Math.round(this._b), a:this._a
          }
        }, toRgbString:function(){
          return 1==this._a?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"
        }, toPercentageRgb:function(){
          return{
            r:Math.round(100*O(this._r, 255))+"%", g:Math.round(100*O(this._g, 255))+"%", b:Math.round(100*O(this._b, 255))+"%", a:this._a
          }
        }, toPercentageRgbString:function(){
          return 1==this._a?"rgb("+Math.round(100*O(this._r, 255))+"%, "+Math.round(100*O(this._g, 255))+"%, "+Math.round(100*O(this._b, 255))+"%)":"rgba("+Math.round(100*O(this._r, 255))+"%, "+Math.round(100*O(this._g, 255))+"%, "+Math.round(100*O(this._b, 255))+"%, "+this._roundA+")"
        }, toName:function(){
          return 0===this._a?"transparent":!(this._a<1)&&(k[
            s(this._r, this._g, this._b, !0)
          ]
          ||!1)
        }, toFilter:function(e){
          var t="#"+c(this._r, this._g, this._b, this._a), r=t, n=this._gradientType?"GradientType = 1, ":"";
          if(e){
            var a=o(e);
            r="#"+c(a._r, a._g, a._b, a._a)
          }
          return"progid:DXImageTransform.Microsoft.gradient("+n+"startColorstr="+t+",endColorstr="+r+")"
        }, toString:function(e){
          var t=!!e;
          e=e||this._format;
          var r=!1, n=this._a<1&&this._a>=0;
          return t||!n||"hex"!==e&&"hex6"!==e&&"hex3"!==e&&"hex4"!==e&&"hex8"!==e&&"name"!==e?("rgb"===e&&(r=this.toRgbString()), "prgb"===e&&(r=this.toPercentageRgbString()), "hex"!==e&&"hex6"!==e||(r=this.toHexString()), "hex3"===e&&(r=this.toHexString(!0)), "hex4"===e&&(r=this.toHex8String(!0)), "hex8"===e&&(r=this.toHex8String()), "name"===e&&(r=this.toName()), "hsl"===e&&(r=this.toHslString()), "hsv"===e&&(r=this.toHsvString()), r||this.toHexString()):"name"===e&&0===this._a?this.toName():this.toRgbString()
        }, clone:function(){
          return o(this.toString())
        }, _applyModification:function(e, t){
          var r=e.apply(null, [
            this
          ].concat([
          ].slice.call(t)));
          return this._r=r._r, this._g=r._g, this._b=r._b, this.setAlpha(r._a), this
        }, lighten:function(){
          return this._applyModification(h, arguments)
        }, brighten:function(){
          return this._applyModification(p, arguments)
        }, darken:function(){
          return this._applyModification(b, arguments)
        }, desaturate:function(){
          return this._applyModification(l, arguments)
        }, saturate:function(){
          return this._applyModification(d, arguments)
        }, greyscale:function(){
          return this._applyModification(m, arguments)
        }, spin:function(){
          return this._applyModification(g, arguments)
        }, _applyCombination:function(e, t){
          return e.apply(null, [
            this
          ].concat([
          ].slice.call(t)))
        }, analogous:function(){
          return this._applyCombination(w, arguments)
        }, complement:function(){
          return this._applyCombination(v, arguments)
        }, monochromatic:function(){
          return this._applyCombination(A, arguments)
        }, splitcomplement:function(){
          return this._applyCombination(x, arguments)
        }, triad:function(){
          return this._applyCombination(y, [
            3
          ])
        }, tetrad:function(){
          return this._applyCombination(y, [
            4
          ])
        }
      }, o.fromRatio=function(e, t){
        if("object"==n(e)){
          var r={
          };
          for(var a in e)e.hasOwnProperty(a)&&(r[
            a
          ]
          ="a"===a?e[
            a
          ]
          :D(e[
            a
          ]));
          e=r
        }
        return o(e, t)
      }, o.equals=function(e, t){
        return!(!e||!t)&&o(e).toRgbString()==o(t).toRgbString()
      }, o.random=function(){
        return o.fromRatio({
          r:Math.random(), g:Math.random(), b:Math.random()
        })
      }, o.mix=function(e, t, r){
        r=0===r?0:r||50;
        var n=o(e).toRgb(), a=o(t).toRgb(), i=r/100;
        return o({
          r:(a.r-n.r)*i+n.r, g:(a.g-n.g)*i+n.g, b:(a.b-n.b)*i+n.b, a:(a.a-n.a)*i+n.a
        })
      }, o.readability=function(e, t){
        var r=o(e), n=o(t);
        return(Math.max(r.getLuminance(), n.getLuminance())+.05)/(Math.min(r.getLuminance(), n.getLuminance())+.05)
      }, o.isReadable=function(e, t, r){
        var n, a, i=o.readability(e, t);
        switch(a=!1, (n=function(e){
          var t, r;
          t=((e=e||{
            level:"AA", size:"small"
          }).level||"AA").toUpperCase(), r=(e.size||"small").toLowerCase(), "AA"!==t&&"AAA"!==t&&(t="AA");
          "small"!==r&&"large"!==r&&(r="small");
          return{
            level:t, size:r
          }
        }
        (r)).level+n.size){
          case"AAsmall":case"AAAlarge":a=i>=4.5;
          break;
          case"AAlarge":a=i>=3;
          break;
          case"AAAsmall":a=i>=7
        }
        return a
      }, o.mostReadable=function(e, t, r){
        var n, a, i, f, u=null, s=0;
        a=(r=r||{
        }).includeFallbackColors, i=r.level, f=r.size;
        for(var c=0;
        c<t.length;
        c++)(n=o.readability(e, t[
          c
        ]))>s&&(s=n, u=o(t[
          c
        ]));
        return o.isReadable(e, u, {
          level:i, size:f
        })||!a?u:(r.includeFallbackColors=!1, o.mostReadable(e, [
          "#fff", "#000"
        ], r))
      };
      var _=o.names={
        aliceblue:"f0f8ff", antiquewhite:"faebd7", aqua:"0ff", aquamarine:"7fffd4", azure:"f0ffff", beige:"f5f5dc", bisque:"ffe4c4", black:"000", blanchedalmond:"ffebcd", blue:"00f", blueviolet:"8a2be2", brown:"a52a2a", burlywood:"deb887", burntsienna:"ea7e5d", cadetblue:"5f9ea0", chartreuse:"7fff00", chocolate:"d2691e", coral:"ff7f50", cornflowerblue:"6495ed", cornsilk:"fff8dc", crimson:"dc143c", cyan:"0ff", darkblue:"00008b", darkcyan:"008b8b", darkgoldenrod:"b8860b", darkgray:"a9a9a9", darkgreen:"006400", darkgrey:"a9a9a9", darkkhaki:"bdb76b", darkmagenta:"8b008b", darkolivegreen:"556b2f", darkorange:"ff8c00", darkorchid:"9932cc", darkred:"8b0000", darksalmon:"e9967a", darkseagreen:"8fbc8f", darkslateblue:"483d8b", darkslategray:"2f4f4f", darkslategrey:"2f4f4f", darkturquoise:"00ced1", darkviolet:"9400d3", deeppink:"ff1493", deepskyblue:"00bfff", dimgray:"696969", dimgrey:"696969", dodgerblue:"1e90ff", firebrick:"b22222", floralwhite:"fffaf0", forestgreen:"228b22", fuchsia:"f0f", gainsboro:"dcdcdc", ghostwhite:"f8f8ff", gold:"ffd700", goldenrod:"daa520", gray:"808080", green:"008000", greenyellow:"adff2f", grey:"808080", honeydew:"f0fff0", hotpink:"ff69b4", indianred:"cd5c5c", indigo:"4b0082", ivory:"fffff0", khaki:"f0e68c", lavender:"e6e6fa", lavenderblush:"fff0f5", lawngreen:"7cfc00", lemonchiffon:"fffacd", lightblue:"add8e6", lightcoral:"f08080", lightcyan:"e0ffff", lightgoldenrodyellow:"fafad2", lightgray:"d3d3d3", lightgreen:"90ee90", lightgrey:"d3d3d3", lightpink:"ffb6c1", lightsalmon:"ffa07a", lightseagreen:"20b2aa", lightskyblue:"87cefa", lightslategray:"789", lightslategrey:"789", lightsteelblue:"b0c4de", lightyellow:"ffffe0", lime:"0f0", limegreen:"32cd32", linen:"faf0e6", magenta:"f0f", maroon:"800000", mediumaquamarine:"66cdaa", mediumblue:"0000cd", mediumorchid:"ba55d3", mediumpurple:"9370db", mediumseagreen:"3cb371", mediumslateblue:"7b68ee", mediumspringgreen:"00fa9a", mediumturquoise:"48d1cc", mediumvioletred:"c71585", midnightblue:"191970", mintcream:"f5fffa", mistyrose:"ffe4e1", moccasin:"ffe4b5", navajowhite:"ffdead", navy:"000080", oldlace:"fdf5e6", olive:"808000", olivedrab:"6b8e23", orange:"ffa500", orangered:"ff4500", orchid:"da70d6", palegoldenrod:"eee8aa", palegreen:"98fb98", paleturquoise:"afeeee", palevioletred:"db7093", papayawhip:"ffefd5", peachpuff:"ffdab9", peru:"cd853f", pink:"ffc0cb", plum:"dda0dd", powderblue:"b0e0e6", purple:"800080", rebeccapurple:"663399", red:"f00", rosybrown:"bc8f8f", royalblue:"4169e1", saddlebrown:"8b4513", salmon:"fa8072", sandybrown:"f4a460", seagreen:"2e8b57", seashell:"fff5ee", sienna:"a0522d", silver:"c0c0c0", skyblue:"87ceeb", slateblue:"6a5acd", slategray:"708090", slategrey:"708090", snow:"fffafa", springgreen:"00ff7f", steelblue:"4682b4", tan:"d2b48c", teal:"008080", thistle:"d8bfd8", tomato:"ff6347", turquoise:"40e0d0", violet:"ee82ee", wheat:"f5deb3", white:"fff", whitesmoke:"f5f5f5", yellow:"ff0", yellowgreen:"9acd32"
      }, k=o.hexNames=function(e){
        var t={
        };
        for(var r in e)e.hasOwnProperty(r)&&(t[
          e[
            r
          ]
        ]
        =r);
        return t
      }
      (_);
      function S(e){
        return e=parseFloat(e), (isNaN(e)||e<0||e>1)&&(e=1), e
      }
      function O(e, t){
        (function(e){
          return"string"==typeof e&&-1!=e.indexOf(".")&&1===parseFloat(e)
        })(e)&&(e="100%");
        var r=function(e){
          return"string"==typeof e&&-1!=e.indexOf("%")
        }
        (e);
        return e=Math.min(t, Math.max(0, parseFloat(e))), r&&(e=parseInt(e*t, 10)/100), Math.abs(e-t)<1e-6?1:e%t/parseFloat(t)
      }
      function E(e){
        return Math.min(1, Math.max(0, e))
      }
      function T(e){
        return parseInt(e, 16)
      }
      function j(e){
        return 1==e.length?"0"+e:""+e
      }
      function D(e){
        return e<=1&&(e=100*e+"%"), e
      }
      function C(e){
        return Math.round(255*parseFloat(e)).toString(16)
      }
      function M(e){
        return T(e)/255
      }
      var F, z, R, B=(z="[\\s|\\(]+("+(F="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+F+")[,|\\s]+("+F+")\\s*\\)?", R="[\\s|\\(]+("+F+")[,|\\s]+("+F+")[,|\\s]+("+F+")[,|\\s]+("+F+")\\s*\\)?", {
        CSS_UNIT:new RegExp(F), rgb:new RegExp("rgb"+z), rgba:new RegExp("rgba"+R), hsl:new RegExp("hsl"+z), hsla:new RegExp("hsla"+R), hsv:new RegExp("hsv"+z), hsva:new RegExp("hsva"+R), hex3:/^#?([
          0-9a-fA-F
        ]
        {
          1
        })([
          0-9a-fA-F
        ]
        {
          1
        })([
          0-9a-fA-F
        ]
        {
          1
        })$/, hex6:/^#?([
          0-9a-fA-F
        ]
        {
          2
        })([
          0-9a-fA-F
        ]
        {
          2
        })([
          0-9a-fA-F
        ]
        {
          2
        })$/, hex4:/^#?([
          0-9a-fA-F
        ]
        {
          1
        })([
          0-9a-fA-F
        ]
        {
          1
        })([
          0-9a-fA-F
        ]
        {
          1
        })([
          0-9a-fA-F
        ]
        {
          1
        })$/, hex8:/^#?([
          0-9a-fA-F
        ]
        {
          2
        })([
          0-9a-fA-F
        ]
        {
          2
        })([
          0-9a-fA-F
        ]
        {
          2
        })([
          0-9a-fA-F
        ]
        {
          2
        })$/
      });
      function P(e){
        return!!B.CSS_UNIT.exec(e)
      }
    }, 719872:(e, t, r)=>{
      var n=r(483496), a=Array.prototype.concat, i=Array.prototype.slice, o=e.exports=function(e){
        for(var t=[
        ], r=0, o=e.length;
        r<o;
        r++){
          var f=e[
            r
          ];
          n(f)?t=a.call(t, i.call(f)):t.push(f)
        }
        return t
      };
      o.wrap=function(e){
        return function(){
          return e(o(arguments))
        }
      }
    }, 960364:function(e){
      e.exports=function(){
        var e=function(e){
          return e instanceof Uint8Array||e instanceof Uint16Array||e instanceof Uint32Array||e instanceof Int8Array||e instanceof Int16Array||e instanceof Int32Array||e instanceof Float32Array||e instanceof Float64Array||e instanceof Uint8ClampedArray
        }, t=function(e, t){
          for(var r=Object.keys(t), n=0;
          n<r.length;
          ++n)e[
            r[
              n
            ]
          ]
          =t[
            r[
              n
            ]
          ];
          return e
        }, r="\n";
        function n(e){
          return"undefined"!=typeof atob?atob(e):"base64:"+e
        }
        function a(e){
          var t=new Error("(regl) "+e);
          throw console.error(t), t
        }
        function i(e, t){
          e||a(t)
        }
        function o(e){
          return e?": "+e:""
        }
        function f(e, t, r){
          e in t||a("unknown parameter ("+e+")"+o(r)+". possible values: "+Object.keys(t).join())
        }
        function u(t, r){
          e(t)||a("invalid parameter type"+o(r)+". must be a typed array")
        }
        function s(e, t){
          switch(t){
            case"number":return"number"==typeof e;
            case"object":return"object"==typeof e;
            case"string":return"string"==typeof e;
            case"boolean":return"boolean"==typeof e;
            case"function":return"function"==typeof e;
            case"undefined":return void 0===e;
            case"symbol":return"symbol"==typeof e
          }
        }
        function c(e, t, r){
          s(e, t)||a("invalid parameter type"+o(r)+". expected "+t+", got "+typeof e)
        }
        function l(e, t){
          e>=0&&(0|e)===e||a("invalid parameter type, ("+e+")"+o(t)+". must be a nonnegative integer")
        }
        function d(e, t, r){
          t.indexOf(e)<0&&a("invalid value"+o(r)+". must be one of: "+t)
        }
        var m=[
          "gl", "canvas", "container", "attributes", "pixelRatio", "extensions", "optionalExtensions", "profile", "onDone"
        ];
        function h(e){
          Object.keys(e).forEach((function(e){
            m.indexOf(e)<0&&a('invalid regl constructor argument "'+e+'". must be one of '+m)
          }))
        }
        function p(e, t){
          for(e+="";
          e.length<t;
          )e=" "+e;
          return e
        }
        function b(){
          this.name="unknown", this.lines=[
          ], this.index={
          }, this.hasErrors=!1
        }
        function g(e, t){
          this.number=e, this.line=t, this.errors=[
          ]
        }
        function v(e, t, r){
          this.file=e, this.line=t, this.message=r
        }
        function y(){
          var e=new Error, t=(e.stack||e).toString(), r=/compileProcedure.*\n\s*at.*\((.*)\)/.exec(t);
          if(r)return r[
            1
          ];
          var n=/compileProcedure.*\n\s*at\s+(.*)(\n|$)/.exec(t);
          return n?n[
            1
          ]
          :"unknown"
        }
        function x(){
          var e=new Error, t=(e.stack||e).toString(), r=/at REGLCommand.*\n\s+at.*\((.*)\)/.exec(t);
          if(r)return r[
            1
          ];
          var n=/at REGLCommand.*\n\s+at\s+(.*)\n/.exec(t);
          return n?n[
            1
          ]
          :"unknown"
        }
        function w(e, t){
          var r=e.split("\n"), a=1, i=0, o={
            unknown:new b, 0:new b
          };
          o.unknown.name=o[
            0
          ].name=t||y(), o.unknown.lines.push(new g(0, ""));
          for(var f=0;
          f<r.length;
          ++f){
            var u=r[
              f
            ], s=/^\s*#\s*(\w+)\s+(.+)\s*$/.exec(u);
            if(s)switch(s[
              1
            ]){
              case"line":var c=/(\d+)(\s+\d+)?/.exec(s[
                2
              ]);
              c&&(a=0|c[
                1
              ], c[
                2
              ]
              &&((i=0|c[
                2
              ])in o||(o[
                i
              ]
              =new b)));
              break;
              case"define":var l=/SHADER_NAME(_B64)?\s+(.*)$/.exec(s[
                2
              ]);
              l&&(o[
                i
              ].name=l[
                1
              ]
              ?n(l[
                2
              ]):l[
                2
              ])
            }
            o[
              i
            ].lines.push(new g(a++, u))
          }
          return Object.keys(o).forEach((function(e){
            var t=o[
              e
            ];
            t.lines.forEach((function(e){
              t.index[
                e.number
              ]
              =e
            }))
          })), o
        }
        function A(e){
          var t=[
          ];
          return e.split("\n").forEach((function(e){
            if(!(e.length<5)){
              var r=/^ERROR:\s+(\d+):(\d+):\s*(.*)$/.exec(e);
              r?t.push(new v(0|r[
                1
              ], 0|r[
                2
              ], r[
                3
              ].trim())):e.length>0&&t.push(new v("unknown", 0, e))
            }
          })), t
        }
        function _(e, t){
          t.forEach((function(t){
            var r=e[
              t.file
            ];
            if(r){
              var n=r.index[
                t.line
              ];
              if(n)return n.errors.push(t), void(r.hasErrors=!0)
            }
            e.unknown.hasErrors=!0, e.unknown.lines[
              0
            ].errors.push(t)
          }))
        }
        function k(e, t, n, a, o){
          if(!e.getShaderParameter(t, e.COMPILE_STATUS)){
            var f=e.getShaderInfoLog(t), u=a===e.FRAGMENT_SHADER?"fragment":"vertex";
            C(n, "string", u+" shader source must be a string", o);
            var s=w(n, o), c=A(f);
            _(s, c), Object.keys(s).forEach((function(e){
              var t=s[
                e
              ];
              if(t.hasErrors){
                var n=[
                  ""
                ], a=[
                  ""
                ];
                i("file number "+e+": "+t.name+"\n", "color:red;text-decoration:underline;font-weight:bold"), t.lines.forEach((function(e){
                  if(e.errors.length>0){
                    i(p(e.number, 4)+"|  ", "background-color:yellow; font-weight:bold"), i(e.line+r, "color:red; background-color:yellow; font-weight:bold");
                    var t=0;
                    e.errors.forEach((function(n){
                      var a=n.message, o=/^\s*'(.*)'\s*:\s*(.*)$/.exec(a);
                      if(o){
                        var f=o[
                          1
                        ];
                        switch(a=o[
                          2
                        ], f){
                          case"assign":f="="
                        }
                        t=Math.max(e.line.indexOf(f, t), 0)
                      }
                      else t=0;
                      i(p("| ", 6)), i(p("^^^", t+3)+r, "font-weight:bold"), i(p("| ", 6)), i(a+r, "font-weight:bold")
                    })), i(p("| ", 6)+r)
                  }
                  else i(p(e.number, 4)+"|  "), i(e.line+r, "color:red")
                })), "undefined"==typeof document||window.chrome?console.log(n.join("")):(a[
                  0
                ]
                =n.join("%c"), console.log.apply(console, a))
              }
              function i(e, t){
                n.push(e), a.push(t||"")
              }
            })), i.raise("Error compiling "+u+" shader, "+s[
              0
            ].name)
          }
        }
        function S(e, t, n, a, o){
          if(!e.getProgramParameter(t, e.LINK_STATUS)){
            var f=e.getProgramInfoLog(t), u=w(n, o), s='Error linking program with vertex shader, "'+w(a, o)[
              0
            ].name+'", and fragment shader "'+u[
              0
            ].name+'"';
            "undefined"!=typeof document?console.log("%c"+s+r+"%c"+f, "color:red;text-decoration:underline;font-weight:bold", "color:red"):console.log(s+r+f), i.raise(s)
          }
        }
        function O(e){
          e._commandRef=y()
        }
        function E(e, t, r, n){
          function a(e){
            return e?n.id(e):0
          }
          function i(e, t){
            Object.keys(t).forEach((function(t){
              e[
                n.id(t)
              ]
              =!0
            }))
          }
          O(e), e._fragId=a(e.static.frag), e._vertId=a(e.static.vert);
          var o=e._uniformSet={
          };
          i(o, t.static), i(o, t.dynamic);
          var f=e._attributeSet={
          };
          i(f, r.static), i(f, r.dynamic), e._hasCount="count"in e.static||"count"in e.dynamic||"elements"in e.static||"elements"in e.dynamic
        }
        function T(e, t){
          var r=x();
          a(e+" in command "+(t||y())+("unknown"===r?"":" called from "+r))
        }
        function j(e, t, r){
          e||T(t, r||y())
        }
        function D(e, t, r, n){
          e in t||T("unknown parameter ("+e+")"+o(r)+". possible values: "+Object.keys(t).join(), n||y())
        }
        function C(e, t, r, n){
          s(e, t)||T("invalid parameter type"+o(r)+". expected "+t+", got "+typeof e, n||y())
        }
        function M(e){
          e()
        }
        function F(e, t, r){
          e.texture?d(e.texture._texture.internalformat, t, "unsupported texture format for attachment"):d(e.renderbuffer._renderbuffer.format, r, "unsupported renderbuffer format for attachment")
        }
        var z=33071, R=9728, B=9984, P=9985, V=9986, I=9987, L=5121, H=5122, N=5123, U=5124, q=5125, W=5126, G=32819, Q=32820, Y=33635, $=34042, X=36193, K={
        };
        function J(e, t){
          return e===Q||e===G||e===Y?2:e===$?4:K[
            e
          ]
          *t
        }
        function Z(e){
          return!(e&e-1||!e)
        }
        function ee(e, t, r){
          var n, a=t.width, o=t.height, f=t.channels;
          i(a>0&&a<=r.maxTextureSize&&o>0&&o<=r.maxTextureSize, "invalid texture shape"), e.wrapS===z&&e.wrapT===z||i(Z(a)&&Z(o), "incompatible wrap mode for texture, both width and height must be power of 2"), 1===t.mipmask?1!==a&&1!==o&&i(e.minFilter!==B&&e.minFilter!==V&&e.minFilter!==P&&e.minFilter!==I, "min filter requires mipmap"):(i(Z(a)&&Z(o), "texture must be a square power of 2 to support mipmapping"), i(t.mipmask===(a<<1)-1, "missing or incomplete mipmap data")), t.type===W&&(r.extensions.indexOf("oes_texture_float_linear")<0&&i(e.minFilter===R&&e.magFilter===R, "filter not supported, must enable oes_texture_float_linear"), i(!e.genMipmaps, "mipmap generation not supported with float textures"));
          var u=t.images;
          for(n=0;
          n<16;
          ++n)if(u[
            n
          ]){
            var s=a>>n, c=o>>n;
            i(t.mipmask&1<<n, "missing mipmap data");
            var l=u[
              n
            ];
            if(i(l.width===s&&l.height===c, "invalid shape for mip images"), i(l.format===t.format&&l.internalformat===t.internalformat&&l.type===t.type, "incompatible type for mip image"), l.compressed);
            else if(l.data){
              var d=Math.ceil(J(l.type, f)*s/l.unpackAlignment)*l.unpackAlignment;
              i(l.data.byteLength===d*c, "invalid data for image, buffer size is inconsistent with image format")
            }
            else l.element||l.copy
          }
          else e.genMipmaps||i(0==(t.mipmask&1<<n), "extra mipmap data");
          t.compressed&&i(!e.genMipmaps, "mipmap generation for compressed images not supported")
        }
        function te(e, t, r, n){
          var a=e.width, o=e.height, f=e.channels;
          i(a>0&&a<=n.maxTextureSize&&o>0&&o<=n.maxTextureSize, "invalid texture shape"), i(a===o, "cube map must be square"), i(t.wrapS===z&&t.wrapT===z, "wrap mode not supported by cube map");
          for(var u=0;
          u<r.length;
          ++u){
            var s=r[
              u
            ];
            i(s.width===a&&s.height===o, "inconsistent cube map face shape"), t.genMipmaps&&(i(!s.compressed, "can not generate mipmap for compressed textures"), i(1===s.mipmask, "can not specify mipmaps and generate mipmaps"));
            for(var c=s.images, l=0;
            l<16;
            ++l){
              var d=c[
                l
              ];
              if(d){
                var m=a>>l, h=o>>l;
                i(s.mipmask&1<<l, "missing mipmap data"), i(d.width===m&&d.height===h, "invalid shape for mip images"), i(d.format===e.format&&d.internalformat===e.internalformat&&d.type===e.type, "incompatible type for mip image"), d.compressed||(d.data?i(d.data.byteLength===m*h*Math.max(J(d.type, f), d.unpackAlignment), "invalid data for image, buffer size is inconsistent with image format"):d.element||d.copy)
              }
            }
          }
        }
        K[
          5120
        ]
        =K[
          L
        ]
        =1, K[
          H
        ]
        =K[
          N
        ]
        =K[
          X
        ]
        =K[
          Y
        ]
        =K[
          G
        ]
        =K[
          Q
        ]
        =2, K[
          U
        ]
        =K[
          q
        ]
        =K[
          W
        ]
        =K[
          $
        ]
        =4;
        var re=t(i, {
          optional:M, raise:a, commandRaise:T, command:j, parameter:f, commandParameter:D, constructor:h, type:c, commandType:C, isTypedArray:u, nni:l, oneOf:d, shaderError:k, linkError:S, callSite:x, saveCommandRef:O, saveDrawInfo:E, framebufferFormat:F, guessCommand:y, texture2D:ee, textureCube:te
        }), ne=0, ae=0, ie=5, oe=6;
        function fe(e, t){
          this.id=ne++, this.type=e, this.data=t
        }
        function ue(e){
          return e.replace(/\\/g, "\\\\").replace(/"/g,'\\"')}function se(e){if(0===e.length)return[];var t=e.charAt(0),r=e.charAt(e.length-1);if(e.length>1&&t===r&&('"'===t||"'"===t))return['"'+ue(e.substr(1,e.length-2))+'"'];var n=/\[(false|true|null|\d+|'[
            ^']*'|"[^"
          ]
          *")\]/.exec(e);if(n)return se(e.substr(0,n.index)).concat(se(n[1])).concat(se(e.substr(n.index+n[0].length)));var a=e.split(".");if(1===a.length)return['"'+ue(e)+'"'];for(var i=[],o=0;o<a.length;++o)i=i.concat(se(a[o]));return i}function ce(e){return"[
            "+se(e).join("
          ]
          [
            ")+"
          ]
          "}function le(e,t){return new fe(e,ce(t+""))}function de(e){return"function"==typeof e&&!e._reglType||e instanceof fe}function me(e,t){return"function"==typeof e?new fe(ae,e):"number"==typeof e||"boolean"==typeof e?new fe(ie,e):Array.isArray(e)?new fe(oe,e.map(((e,r)=>me(e,t+"[
            "+r+"
          ]
          ")))):e instanceof fe?e:void re(!1,"invalid option type in uniform "+t)}var he={DynamicVariable:fe,define:le,isDynamic:de,unbox:me,accessor:ce},pe={next:"function"==typeof requestAnimationFrame?function(e){return requestAnimationFrame(e)}:function(e){return setTimeout(e,16)},cancel:"function"==typeof cancelAnimationFrame?function(e){return cancelAnimationFrame(e)}:clearTimeout},be="undefined"!=typeof performance&&performance.now?function(){return performance.now()}:function(){return+new Date};function ge(){var e={"":0},t=[""];return{id:function(r){var n=e[r];return n||(n=e[r]=t.length,t.push(r),n)},str:function(e){return t[e]}}}function ve(e,r,n){var a,i=document.createElement("canvas");function o(){var r=window.innerWidth,a=window.innerHeight;if(e!==document.body){var o=e.getBoundingClientRect();r=o.right-o.left,a=o.bottom-o.top}i.width=n*r,i.height=n*a,t(i.style,{width:r+"px",height:a+"px"})}function f(){a?a.disconnect():window.removeEventListener("resize",o),e.removeChild(i)}return t(i.style,{border:0,margin:0,padding:0,top:0,left:0}),e.appendChild(i),e===document.body&&(i.style.position="absolute",t(e.style,{margin:0,padding:0})),e!==document.body&&"function"==typeof ResizeObserver?(a=new ResizeObserver((function(){setTimeout(o)}))).observe(e):window.addEventListener("resize",o,!1),o(),{canvas:i,onDestroy:f}}function ye(e,t){function r(r){try{return e.getContext(r,t)}catch(e){return null}}return r("webgl")||r("experimental-webgl")||r("webgl-experimental")}function xe(e){return"string"==typeof e.nodeName&&"function"==typeof e.appendChild&&"function"==typeof e.getBoundingClientRect}function we(e){return"function"==typeof e.drawArrays||"function"==typeof e.drawElements}function Ae(e){return"string"==typeof e?e.split():(re(Array.isArray(e),"invalid extension array"),e)}function _e(e){return"string"==typeof e?(re("undefined"!=typeof document,"not supported outside of DOM"),document.querySelector(e)):e}function ke(e){var t,r,n,a,i=e||{},o={},f=[],u=[],s="undefined"==typeof window?1:window.devicePixelRatio,c=!1,l=function(e){e&&re.raise(e)},d=function(){};if("string"==typeof i?(re("undefined"!=typeof document,"selector queries only supported in DOM enviroments"),t=document.querySelector(i),re(t,"invalid query string for element")):"object"==typeof i?xe(i)?t=i:we(i)?n=(a=i).canvas:(re.constructor(i),"gl"in i?a=i.gl:"canvas"in i?n=_e(i.canvas):"container"in i&&(r=_e(i.container)),"attributes"in i&&(o=i.attributes,re.type(o,"object","invalid context attributes")),"extensions"in i&&(f=Ae(i.extensions)),"optionalExtensions"in i&&(u=Ae(i.optionalExtensions)),"onDone"in i&&(re.type(i.onDone,"function","invalid or missing onDone callback"),l=i.onDone),"profile"in i&&(c=!!i.profile),"pixelRatio"in i&&(s=+i.pixelRatio,re(s>0,"invalid pixel ratio"))):re.raise("invalid arguments to regl"),t&&("canvas"===t.nodeName.toLowerCase()?n=t:r=t),!a){if(!n){re("undefined"!=typeof document,"must manually specify webgl context outside of DOM environments");var m=ve(r||document.body,l,s);if(!m)return null;n=m.canvas,d=m.onDestroy}void 0===o.premultipliedAlpha&&(o.premultipliedAlpha=!0),a=ye(n,o)}return a?{gl:a,canvas:n,container:r,extensions:f,optionalExtensions:u,pixelRatio:s,profile:c,onDone:l,onDestroy:d}:(d(),l("webgl not supported, try upgrading your browser or graphics drivers http://get.webgl.org"),null)}function Se(e,t){var r={};function n(t){re.type(t,"string","extension name must be string");var n,a=t.toLowerCase();try{n=r[a]=e.getExtension(a)}catch(e){}return!!n}for(var a=0;a<t.extensions.length;++a){var i=t.extensions[a];if(!n(i))return t.onDestroy(),t.onDone('"'+i+'" extension is not supported by the current WebGL context, try upgrading your system or a different browser'),null}return t.optionalExtensions.forEach(n),{extensions:r,restore:function(){Object.keys(r).forEach((function(e){if(r[e]&&!n(e))throw new Error("(regl): error restoring extension "+e)}))}}}function Oe(e,t){for(var r=Array(e),n=0;n<e;++n)r[n]=t(n);return r}var Ee=5120,Te=5121,je=5122,De=5123,Ce=5124,Me=5125,Fe=5126;function ze(e){for(var t=16;t<=1<<28;t*=16)if(e<=t)return t;return 0}function Re(e){var t,r;return t=(e>65535)<<4,t|=r=((e>>>=t)>255)<<3,t|=r=((e>>>=r)>15)<<2,(t|=r=((e>>>=r)>3)<<1)|(e>>>=r)>>1}function Be(){var e=Oe(8,(function(){return[]}));function t(t){var r=ze(t),n=e[Re(r)>>2];return n.length>0?n.pop():new ArrayBuffer(r)}function r(t){e[Re(t.byteLength)>>2].push(t)}function n(e,r){var n=null;switch(e){case Ee:n=new Int8Array(t(r),0,r);break;case Te:n=new Uint8Array(t(r),0,r);break;case je:n=new Int16Array(t(2*r),0,r);break;case De:n=new Uint16Array(t(2*r),0,r);break;case Ce:n=new Int32Array(t(4*r),0,r);break;case Me:n=new Uint32Array(t(4*r),0,r);break;case Fe:n=new Float32Array(t(4*r),0,r);break;default:return null}return n.length!==r?n.subarray(0,r):n}function a(e){r(e.buffer)}return{alloc:t,free:r,allocType:n,freeType:a}}var Pe=Be();Pe.zero=Be();var Ve=3408,Ie=3410,Le=3411,He=3412,Ne=3413,Ue=3414,qe=3415,We=33901,Ge=33902,Qe=3379,Ye=3386,$e=34921,Xe=36347,Ke=36348,Je=35661,Ze=35660,et=34930,tt=36349,rt=34076,nt=34024,at=7936,it=7937,ot=7938,ft=35724,ut=34047,st=36063,ct=34852,lt=3553,dt=34067,mt=34069,ht=33984,pt=6408,bt=5126,gt=5121,vt=36160,yt=36053,xt=36064,wt=16384,At=function(e,t){var r=1;t.ext_texture_filter_anisotropic&&(r=e.getParameter(ut));var n=1,a=1;t.webgl_draw_buffers&&(n=e.getParameter(ct),a=e.getParameter(st));var i=!!t.oes_texture_float;if(i){var o=e.createTexture();e.bindTexture(lt,o),e.texImage2D(lt,0,pt,1,1,0,pt,bt,null);var f=e.createFramebuffer();if(e.bindFramebuffer(vt,f),e.framebufferTexture2D(vt,xt,lt,o,0),e.bindTexture(lt,null),e.checkFramebufferStatus(vt)!==yt)i=!1;else{e.viewport(0,0,1,1),e.clearColor(1,0,0,1),e.clear(wt);var u=Pe.allocType(bt,4);e.readPixels(0,0,1,1,pt,bt,u),e.getError()?i=!1:(e.deleteFramebuffer(f),e.deleteTexture(o),i=1===u[0]),Pe.freeType(u)}}var s=!0;if("undefined"==typeof navigator||!(/MSIE/.test(navigator.userAgent)||/Trident\//.test(navigator.appVersion)||/Edge/.test(navigator.userAgent))){var c=e.createTexture(),l=Pe.allocType(gt,36);e.activeTexture(ht),e.bindTexture(dt,c),e.texImage2D(mt,0,pt,3,3,0,pt,gt,l),Pe.freeType(l),e.bindTexture(dt,null),e.deleteTexture(c),s=!e.getError()}return{colorBits:[e.getParameter(Ie),e.getParameter(Le),e.getParameter(He),e.getParameter(Ne)],depthBits:e.getParameter(Ue),stencilBits:e.getParameter(qe),subpixelBits:e.getParameter(Ve),extensions:Object.keys(t).filter((function(e){return!!t[e]})),maxAnisotropic:r,maxDrawbuffers:n,maxColorAttachments:a,pointSizeDims:e.getParameter(We),lineWidthDims:e.getParameter(Ge),maxViewportDims:e.getParameter(Ye),maxCombinedTextureUnits:e.getParameter(Je),maxCubeMapSize:e.getParameter(rt),maxRenderbufferSize:e.getParameter(nt),maxTextureUnits:e.getParameter(et),maxTextureSize:e.getParameter(Qe),maxAttributes:e.getParameter($e),maxVertexUniforms:e.getParameter(Xe),maxVertexTextureUnits:e.getParameter(Ze),maxVaryingVectors:e.getParameter(Ke),maxFragmentUniforms:e.getParameter(tt),glsl:e.getParameter(ft),renderer:e.getParameter(it),vendor:e.getParameter(at),version:e.getParameter(ot),readFloat:i,npotTextureCube:s}};function _t(t){return!!t&&"object"==typeof t&&Array.isArray(t.shape)&&Array.isArray(t.stride)&&"number"==typeof t.offset&&t.shape.length===t.stride.length&&(Array.isArray(t.data)||e(t.data))}var kt=function(e){return Object.keys(e).map((function(t){return e[t]}))},St={shape:Ct,flatten:Dt};function Ot(e,t,r){for(var n=0;n<t;++n)r[n]=e[n]}function Et(e,t,r,n){for(var a=0,i=0;i<t;++i)for(var o=e[i],f=0;f<r;++f)n[a++]=o[f]}function Tt(e,t,r,n,a,i){for(var o=i,f=0;f<t;++f)for(var u=e[f],s=0;s<r;++s)for(var c=u[s],l=0;l<n;++l)a[o++]=c[l]}function jt(e,t,r,n,a){for(var i=1,o=r+1;o<t.length;++o)i*=t[o];var f=t[r];if(t.length-r==4){var u=t[r+1],s=t[r+2],c=t[r+3];for(o=0;o<f;++o)Tt(e[o],u,s,c,n,a),a+=i}else for(o=0;o<f;++o)jt(e[o],t,r+1,n,a),a+=i}function Dt(e,t,r,n){var a=1;if(t.length)for(var i=0;i<t.length;++i)a*=t[i];else a=0;var o=n||Pe.allocType(r,a);switch(t.length){case 0:break;case 1:Ot(e,t[0],o);break;case 2:Et(e,t[0],t[1],o);break;case 3:Tt(e,t[0],t[1],t[2],o,0);break;default:jt(e,t,0,o,0)}return o}function Ct(e){for(var t=[],r=e;r.length;r=r[0])t.push(r.length);return t}var Mt={"[object Int8Array]":5120,"[object Int16Array]":5122,"[object Int32Array]":5124,"[object Uint8Array]":5121,"[object Uint8ClampedArray]":5121,"[object Uint16Array]":5123,"[object Uint32Array]":5125,"[object Float32Array]":5126,"[object Float64Array]":5121,"[object ArrayBuffer]":5121},Ft={int8:5120,int16:5122,int32:5124,uint8:5121,uint16:5123,uint32:5125,float:5126,float32:5126},zt={dynamic:35048,stream:35040,static:35044},Rt=St.flatten,Bt=St.shape,Pt=35044,Vt=35040,It=5121,Lt=5126,Ht=[];function Nt(e){return 0|Mt[Object.prototype.toString.call(e)]}function Ut(e,t){for(var r=0;r<t.length;++r)e[r]=t[r]}function qt(e,t,r,n,a,i,o){for(var f=0,u=0;u<r;++u)for(var s=0;s<n;++s)e[f++]=t[a*u+i*s+o]}function Wt(t,r,n,a){var i=0,o={};function f(e){this.id=i++,this.buffer=t.createBuffer(),this.type=e,this.usage=Pt,this.byteLength=0,this.dimension=1,this.dtype=It,this.persistentData=null,n.profile&&(this.stats={size:0})}f.prototype.bind=function(){t.bindBuffer(this.type,this.buffer)},f.prototype.destroy=function(){m(this)};var u=[];function s(e,t){var r=u.pop();return r||(r=new f(e)),r.bind(),d(r,t,Vt,0,1,!1),r}function c(e){u.push(e)}function l(e,r,n){e.byteLength=r.byteLength,t.bufferData(e.type,r,n)}function d(t,r,n,a,i,o){var f,u;if(t.usage=n,Array.isArray(r)){if(t.dtype=a||Lt,r.length>0)if(Array.isArray(r[0])){f=Bt(r);for(var s=1,c=1;c<f.length;++c)s*=f[c];t.dimension=s,l(t,u=Rt(r,f,t.dtype),n),o?t.persistentData=u:Pe.freeType(u)}else if("number"==typeof r[0]){t.dimension=i;var d=Pe.allocType(t.dtype,r.length);Ut(d,r),l(t,d,n),o?t.persistentData=d:Pe.freeType(d)}else e(r[0])?(t.dimension=r[0].length,t.dtype=a||Nt(r[0])||Lt,l(t,u=Rt(r,[r.length,r[0].length],t.dtype),n),o?t.persistentData=u:Pe.freeType(u)):re.raise("invalid buffer data")}else if(e(r))t.dtype=a||Nt(r),t.dimension=i,l(t,r,n),o&&(t.persistentData=new Uint8Array(new Uint8Array(r.buffer)));else if(_t(r)){f=r.shape;var m=r.stride,h=r.offset,p=0,b=0,g=0,v=0;1===f.length?(p=f[0],b=1,g=m[0],v=0):2===f.length?(p=f[0],b=f[1],g=m[0],v=m[1]):re.raise("invalid shape"),t.dtype=a||Nt(r.data)||Lt,t.dimension=b;var y=Pe.allocType(t.dtype,p*b);qt(y,r.data,p,b,g,v,h),l(t,y,n),o?t.persistentData=y:Pe.freeType(y)}else r instanceof ArrayBuffer?(t.dtype=It,t.dimension=i,l(t,r,n),o&&(t.persistentData=new Uint8Array(new Uint8Array(r)))):re.raise("invalid buffer data")}function m(e){r.bufferCount--,a(e);var n=e.buffer;re(n,"buffer must not be deleted already"),t.deleteBuffer(n),e.buffer=null,delete o[e.id]}function h(a,i,u,s){r.bufferCount++;var c=new f(i);function l(r){var a=Pt,i=null,o=0,f=0,u=1;return Array.isArray(r)||e(r)||_t(r)||r instanceof ArrayBuffer?i=r:"number"==typeof r?o=0|r:r&&(re.type(r,"object","buffer arguments must be an object, a number or an array"),"data"in r&&(re(null===i||Array.isArray(i)||e(i)||_t(i),"invalid data for buffer"),i=r.data),"usage"in r&&(re.parameter(r.usage,zt,"invalid buffer usage"),a=zt[r.usage]),"type"in r&&(re.parameter(r.type,Ft,"invalid buffer type"),f=Ft[r.type]),"dimension"in r&&(re.type(r.dimension,"number","invalid dimension"),u=0|r.dimension),"length"in r&&(re.nni(o,"buffer length must be a nonnegative integer"),o=0|r.length)),c.bind(),i?d(c,i,a,f,u,s):(o&&t.bufferData(c.type,o,a),c.dtype=f||It,c.usage=a,c.dimension=u,c.byteLength=o),n.profile&&(c.stats.size=c.byteLength*Ht[c.dtype]),l}function h(e,r){re(r+e.byteLength<=c.byteLength,"invalid buffer subdata call, buffer is too small.  Can't write data of size "+e.byteLength+" starting from offset "+r+" to a buffer of size "+c.byteLength),t.bufferSubData(c.type,r,e)}function p(t,r){var n,a=0|(r||0);if(c.bind(),e(t)||t instanceof ArrayBuffer)h(t,a);else if(Array.isArray(t)){if(t.length>0)if("number"==typeof t[0]){var i=Pe.allocType(c.dtype,t.length);Ut(i,t),h(i,a),Pe.freeType(i)}else if(Array.isArray(t[0])||e(t[0])){n=Bt(t);var o=Rt(t,n,c.dtype);h(o,a),Pe.freeType(o)}else re.raise("invalid buffer data")}else if(_t(t)){n=t.shape;var f=t.stride,u=0,s=0,d=0,m=0;1===n.length?(u=n[0],s=1,d=f[0],m=0):2===n.length?(u=n[0],s=n[1],d=f[0],m=f[1]):re.raise("invalid shape");var p=Array.isArray(t.data)?c.dtype:Nt(t.data),b=Pe.allocType(p,u*s);qt(b,t.data,u,s,d,m,t.offset),h(b,a),Pe.freeType(b)}else re.raise("invalid data for buffer subdata");return l}return o[c.id]=c,u||l(a),l._reglType="buffer",l._buffer=c,l.subdata=p,n.profile&&(l.stats=c.stats),l.destroy=function(){m(c)},l}function p(){kt(o).forEach((function(e){e.buffer=t.createBuffer(),t.bindBuffer(e.type,e.buffer),t.bufferData(e.type,e.persistentData||e.byteLength,e.usage)}))}return n.profile&&(r.getTotalBufferSize=function(){var e=0;return Object.keys(o).forEach((function(t){e+=o[t].stats.size})),e}),{create:h,createStream:s,destroyStream:c,clear:function(){kt(o).forEach(m),u.forEach(m)},getBuffer:function(e){return e&&e._buffer instanceof f?e._buffer:null},restore:p,_initBuffer:d}}Ht[5120]=1,Ht[5122]=2,Ht[5124]=4,Ht[5121]=1,Ht[5123]=2,Ht[5125]=4,Ht[5126]=4;var Gt={points:0,point:0,lines:1,line:1,triangles:4,triangle:4,"line loop":2,"line strip":3,"triangle strip":5,"triangle fan":6},Qt=0,Yt=1,$t=4,Xt=5120,Kt=5121,Jt=5122,Zt=5123,er=5124,tr=5125,rr=34963,nr=35040,ar=35044;function ir(t,r,n,a){var i={},o=0,f={uint8:Kt,uint16:Zt};function u(e){this.id=o++,i[this.id]=this,this.buffer=e,this.primType=$t,this.vertCount=0,this.type=0}r.oes_element_index_uint&&(f.uint32=tr),u.prototype.bind=function(){this.buffer.bind()};var s=[];function c(e){var t=s.pop();return t||(t=new u(n.create(null,rr,!0,!1)._buffer)),d(t,e,nr,-1,-1,0,0),t}function l(e){s.push(e)}function d(a,i,o,f,u,s,c){var l;if(a.buffer.bind(),i){var d=c;c||e(i)&&(!_t(i)||e(i.data))||(d=r.oes_element_index_uint?tr:Zt),n._initBuffer(a.buffer,i,o,d,3)}else t.bufferData(rr,s,o),a.buffer.dtype=l||Kt,a.buffer.usage=o,a.buffer.dimension=3,a.buffer.byteLength=s;if(l=c,!c){switch(a.buffer.dtype){case Kt:case Xt:l=Kt;break;case Zt:case Jt:l=Zt;break;case tr:case er:l=tr;break;default:re.raise("unsupported type for element array")}a.buffer.dtype=l}a.type=l,re(l!==tr||!!r.oes_element_index_uint,"32 bit element buffers not supported, enable oes_element_index_uint first");var m=u;m<0&&(m=a.buffer.byteLength,l===Zt?m>>=1:l===tr&&(m>>=2)),a.vertCount=m;var h=f;if(f<0){h=$t;var p=a.buffer.dimension;1===p&&(h=Qt),2===p&&(h=Yt),3===p&&(h=$t)}a.primType=h}function m(e){a.elementsCount--,re(null!==e.buffer,"must not double destroy elements"),delete i[e.id],e.buffer.destroy(),e.buffer=null}function h(t,r){var i=n.create(null,rr,!0),o=new u(i._buffer);function s(t){if(t)if("number"==typeof t)i(t),o.primType=$t,o.vertCount=0|t,o.type=Kt;else{var r=null,n=ar,a=-1,u=-1,c=0,l=0;Array.isArray(t)||e(t)||_t(t)?r=t:(re.type(t,"object","invalid arguments for elements"),"data"in t&&(r=t.data,re(Array.isArray(r)||e(r)||_t(r),"invalid data for element buffer")),"usage"in t&&(re.parameter(t.usage,zt,"invalid element buffer usage"),n=zt[t.usage]),"primitive"in t&&(re.parameter(t.primitive,Gt,"invalid element buffer primitive"),a=Gt[t.primitive]),"count"in t&&(re("number"==typeof t.count&&t.count>=0,"invalid vertex count for elements"),u=0|t.count),"type"in t&&(re.parameter(t.type,f,"invalid buffer type"),l=f[t.type]),"length"in t?c=0|t.length:(c=u,l===Zt||l===Jt?c*=2:l!==tr&&l!==er||(c*=4))),d(o,r,n,a,u,c,l)}else i(),o.primType=$t,o.vertCount=0,o.type=Kt;return s}return a.elementsCount++,s(t),s._reglType="elements",s._elements=o,s.subdata=function(e,t){return i.subdata(e,t),s},s.destroy=function(){m(o)},s}return{create:h,createStream:c,destroyStream:l,getElements:function(e){return"function"==typeof e&&e._elements instanceof u?e._elements:null},clear:function(){kt(i).forEach(m)}}}var or=new Float32Array(1),fr=new Uint32Array(or.buffer),ur=5123;function sr(e){for(var t=Pe.allocType(ur,e.length),r=0;r<e.length;++r)if(isNaN(e[r]))t[r]=65535;else if(e[r]===1/0)t[r]=31744;else if(e[r]===-1/0)t[r]=64512;else{or[0]=e[r];var n=fr[0],a=n>>>31<<15,i=(n<<1>>>24)-127,o=n>>13&1023;if(i<-24)t[r]=a;else if(i<-14){var f=-14-i;t[r]=a+(o+1024>>f)}else t[r]=i>15?a+31744:a+(i+15<<10)+o}return t}function cr(t){return Array.isArray(t)||e(t)}var lr=function(e){return!(e&e-1||!e)},dr=34467,mr=3553,hr=34067,pr=34069,br=6408,gr=6406,vr=6407,yr=6409,xr=6410,wr=32854,Ar=32855,_r=36194,kr=32819,Sr=32820,Or=33635,Er=34042,Tr=6402,jr=34041,Dr=35904,Cr=35906,Mr=36193,Fr=33776,zr=33777,Rr=33778,Br=33779,Pr=35986,Vr=35987,Ir=34798,Lr=35840,Hr=35841,Nr=35842,Ur=35843,qr=36196,Wr=5121,Gr=5123,Qr=5125,Yr=5126,$r=10242,Xr=10243,Kr=10497,Jr=33071,Zr=33648,en=10240,tn=10241,rn=9728,nn=9729,an=9984,on=9985,fn=9986,un=9987,sn=33170,cn=4352,ln=4353,dn=4354,mn=34046,hn=3317,pn=37440,bn=37441,gn=37443,vn=37444,yn=33984,xn=[an,fn,on,un],wn=[0,yr,xr,vr,br],An={};function _n(e){return"[object "+e+"]"}An[yr]=An[gr]=An[Tr]=1,An[jr]=An[xr]=2,An[vr]=An[Dr]=3,An[br]=An[Cr]=4;var kn=_n("HTMLCanvasElement"),Sn=_n("OffscreenCanvas"),On=_n("CanvasRenderingContext2D"),En=_n("ImageBitmap"),Tn=_n("HTMLImageElement"),jn=_n("HTMLVideoElement"),Dn=Object.keys(Mt).concat([kn,Sn,On,En,Tn,jn]),Cn=[];Cn[Wr]=1,Cn[Yr]=4,Cn[Mr]=2,Cn[Gr]=2,Cn[Qr]=4;var Mn=[];function Fn(e){return Array.isArray(e)&&(0===e.length||"number"==typeof e[0])}function zn(e){return!!Array.isArray(e)&&!(0===e.length||!cr(e[0]))}function Rn(e){return Object.prototype.toString.call(e)}function Bn(e){return Rn(e)===kn}function Pn(e){return Rn(e)===Sn}function Vn(e){return Rn(e)===On}function In(e){return Rn(e)===En}function Ln(e){return Rn(e)===Tn}function Hn(e){return Rn(e)===jn}function Nn(e){if(!e)return!1;var t=Rn(e);return Dn.indexOf(t)>=0||Fn(e)||zn(e)||_t(e)}function Un(e){return 0|Mt[Object.prototype.toString.call(e)]}function qn(e,t){var r=t.length;switch(e.type){case Wr:case Gr:case Qr:case Yr:var n=Pe.allocType(e.type,r);n.set(t),e.data=n;break;case Mr:e.data=sr(t);break;default:re.raise("unsupported texture type, must specify a typed array")}}function Wn(e,t){return Pe.allocType(e.type===Mr?Yr:e.type,t)}function Gn(e,t){e.type===Mr?(e.data=sr(t),Pe.freeType(t)):e.data=t}function Qn(e,t,r,n,a,i){for(var o=e.width,f=e.height,u=e.channels,s=Wn(e,o*f*u),c=0,l=0;l<f;++l)for(var d=0;d<o;++d)for(var m=0;m<u;++m)s[c++]=t[r*d+n*l+a*m+i];Gn(e,s)}function Yn(e,t,r,n,a,i){var o;if(o=void 0!==Mn[e]?Mn[e]:An[e]*Cn[t],i&&(o*=6),a){for(var f=0,u=r;u>=1;)f+=o*u*u,u/=2;return f}return o*r*n}function $n(r,n,a,i,o,f,u){var s={"don't care":cn,"dont care":cn,nice:dn,fast:ln},c={repeat:Kr,clamp:Jr,mirror:Zr},l={nearest:rn,linear:nn},d=t({mipmap:un,"nearest mipmap nearest":an,"linear mipmap nearest":on,"nearest mipmap linear":fn,"linear mipmap linear":un},l),m={none:0,browser:vn},h={uint8:Wr,rgba4:kr,rgb565:Or,"rgb5 a1":Sr},p={alpha:gr,luminance:yr,"luminance alpha":xr,rgb:vr,rgba:br,rgba4:wr,"rgb5 a1":Ar,rgb565:_r},b={};n.ext_srgb&&(p.srgb=Dr,p.srgba=Cr),n.oes_texture_float&&(h.float32=h.float=Yr),n.oes_texture_half_float&&(h.float16=h["half float"]=Mr),n.webgl_depth_texture&&(t(p,{depth:Tr,"depth stencil":jr}),t(h,{uint16:Gr,uint32:Qr,"depth stencil":Er})),n.webgl_compressed_texture_s3tc&&t(b,{"rgb s3tc dxt1":Fr,"rgba s3tc dxt1":zr,"rgba s3tc dxt3":Rr,"rgba s3tc dxt5":Br}),n.webgl_compressed_texture_atc&&t(b,{"rgb atc":Pr,"rgba atc explicit alpha":Vr,"rgba atc interpolated alpha":Ir}),n.webgl_compressed_texture_pvrtc&&t(b,{"rgb pvrtc 4bppv1":Lr,"rgb pvrtc 2bppv1":Hr,"rgba pvrtc 4bppv1":Nr,"rgba pvrtc 2bppv1":Ur}),n.webgl_compressed_texture_etc1&&(b["rgb etc1"]=qr);var g=Array.prototype.slice.call(r.getParameter(dr));Object.keys(b).forEach((function(e){var t=b[e];g.indexOf(t)>=0&&(p[e]=t)}));var v=Object.keys(p);a.textureFormats=v;var y=[];Object.keys(p).forEach((function(e){var t=p[e];y[t]=e}));var x=[];Object.keys(h).forEach((function(e){var t=h[e];x[t]=e}));var w=[];Object.keys(l).forEach((function(e){var t=l[e];w[t]=e}));var A=[];Object.keys(d).forEach((function(e){var t=d[e];A[t]=e}));var _=[];Object.keys(c).forEach((function(e){var t=c[e];_[t]=e}));var k=v.reduce((function(e,t){var r=p[t];return r===yr||r===gr||r===yr||r===xr||r===Tr||r===jr||n.ext_srgb&&(r===Dr||r===Cr)?e[r]=r:r===Ar||t.indexOf("rgba")>=0?e[r]=br:e[r]=vr,e}),{});function S(){this.internalformat=br,this.format=br,this.type=Wr,this.compressed=!1,this.premultiplyAlpha=!1,this.flipY=!1,this.unpackAlignment=1,this.colorSpace=vn,this.width=0,this.height=0,this.channels=0}function O(e,t){e.internalformat=t.internalformat,e.format=t.format,e.type=t.type,e.compressed=t.compressed,e.premultiplyAlpha=t.premultiplyAlpha,e.flipY=t.flipY,e.unpackAlignment=t.unpackAlignment,e.colorSpace=t.colorSpace,e.width=t.width,e.height=t.height,e.channels=t.channels}function E(e,t){if("object"==typeof t&&t){if("premultiplyAlpha"in t&&(re.type(t.premultiplyAlpha,"boolean","invalid premultiplyAlpha"),e.premultiplyAlpha=t.premultiplyAlpha),"flipY"in t&&(re.type(t.flipY,"boolean","invalid texture flip"),e.flipY=t.flipY),"alignment"in t&&(re.oneOf(t.alignment,[1,2,4,8],"invalid texture unpack alignment"),e.unpackAlignment=t.alignment),"colorSpace"in t&&(re.parameter(t.colorSpace,m,"invalid colorSpace"),e.colorSpace=m[t.colorSpace]),"type"in t){var r=t.type;re(n.oes_texture_float||!("float"===r||"float32"===r),"you must enable the OES_texture_float extension in order to use floating point textures."),re(n.oes_texture_half_float||!("half float"===r||"float16"===r),"you must enable the OES_texture_half_float extension in order to use 16-bit floating point textures."),re(n.webgl_depth_texture||!("uint16"===r||"uint32"===r||"depth stencil"===r),"you must enable the WEBGL_depth_texture extension in order to use depth/stencil textures."),re.parameter(r,h,"invalid texture type"),e.type=h[r]}var i=e.width,o=e.height,f=e.channels,u=!1;"shape"in t?(re(Array.isArray(t.shape)&&t.shape.length>=2,"shape must be an array"),i=t.shape[0],o=t.shape[1],3===t.shape.length&&(f=t.shape[2],re(f>0&&f<=4,"invalid number of channels"),u=!0),re(i>=0&&i<=a.maxTextureSize,"invalid width"),re(o>=0&&o<=a.maxTextureSize,"invalid height")):("radius"in t&&(i=o=t.radius,re(i>=0&&i<=a.maxTextureSize,"invalid radius")),"width"in t&&(i=t.width,re(i>=0&&i<=a.maxTextureSize,"invalid width")),"height"in t&&(o=t.height,re(o>=0&&o<=a.maxTextureSize,"invalid height")),"channels"in t&&(f=t.channels,re(f>0&&f<=4,"invalid number of channels"),u=!0)),e.width=0|i,e.height=0|o,e.channels=0|f;var s=!1;if("format"in t){var c=t.format;re(n.webgl_depth_texture||!("depth"===c||"depth stencil"===c),"you must enable the WEBGL_depth_texture extension in order to use depth/stencil textures."),re.parameter(c,p,"invalid texture format");var l=e.internalformat=p[c];e.format=k[l],c in h&&("type"in t||(e.type=h[c])),c in b&&(e.compressed=!0),s=!0}!u&&s?e.channels=An[e.format]:u&&!s?e.channels!==wn[e.format]&&(e.format=e.internalformat=wn[e.channels]):s&&u&&re(e.channels===An[e.format],"number of channels inconsistent with specified format")}}function T(e){r.pixelStorei(pn,e.flipY),r.pixelStorei(bn,e.premultiplyAlpha),r.pixelStorei(gn,e.colorSpace),r.pixelStorei(hn,e.unpackAlignment)}function j(){S.call(this),this.xOffset=0,this.yOffset=0,this.data=null,this.needsFree=!1,this.element=null,this.needsCopy=!1}function D(t,r){var n=null;if(Nn(r)?n=r:r&&(re.type(r,"object","invalid pixel data type"),E(t,r),"x"in r&&(t.xOffset=0|r.x),"y"in r&&(t.yOffset=0|r.y),Nn(r.data)&&(n=r.data)),re(!t.compressed||n instanceof Uint8Array,"compressed texture data must be stored in a uint8array"),r.copy){re(!n,"can not specify copy and data field for the same texture");var i=o.viewportWidth,f=o.viewportHeight;t.width=t.width||i-t.xOffset,t.height=t.height||f-t.yOffset,t.needsCopy=!0,re(t.xOffset>=0&&t.xOffset<i&&t.yOffset>=0&&t.yOffset<f&&t.width>0&&t.width<=i&&t.height>0&&t.height<=f,"copy texture read out of bounds")}else if(n){if(e(n))t.channels=t.channels||4,t.data=n,"type"in r||t.type!==Wr||(t.type=Un(n));else if(Fn(n))t.channels=t.channels||4,qn(t,n),t.alignment=1,t.needsFree=!0;else if(_t(n)){var u=n.data;Array.isArray(u)||t.type!==Wr||(t.type=Un(u));var s,c,l,d,m,h,p=n.shape,b=n.stride;3===p.length?(l=p[2],h=b[2]):(re(2===p.length,"invalid ndarray pixel data, must be 2 or 3D"),l=1,h=1),s=p[0],c=p[1],d=b[0],m=b[1],t.alignment=1,t.width=s,t.height=c,t.channels=l,t.format=t.internalformat=wn[l],t.needsFree=!0,Qn(t,u,d,m,h,n.offset)}else if(Bn(n)||Pn(n)||Vn(n))Bn(n)||Pn(n)?t.element=n:t.element=n.canvas,t.width=t.element.width,t.height=t.element.height,t.channels=4;else if(In(n))t.element=n,t.width=n.width,t.height=n.height,t.channels=4;else if(Ln(n))t.element=n,t.width=n.naturalWidth,t.height=n.naturalHeight,t.channels=4;else if(Hn(n))t.element=n,t.width=n.videoWidth,t.height=n.videoHeight,t.channels=4;else if(zn(n)){var g=t.width||n[0].length,v=t.height||n.length,y=t.channels;y=cr(n[0][0])?y||n[0][0].length:y||1;for(var x=St.shape(n),w=1,A=0;A<x.length;++A)w*=x[A];var _=Wn(t,w);St.flatten(n,x,"",_),Gn(t,_),t.alignment=1,t.width=g,t.height=v,t.channels=y,t.format=t.internalformat=wn[y],t.needsFree=!0}}else t.width=t.width||1,t.height=t.height||1,t.channels=t.channels||4;t.type===Yr?re(a.extensions.indexOf("oes_texture_float")>=0,"oes_texture_float extension not enabled"):t.type===Mr&&re(a.extensions.indexOf("oes_texture_half_float")>=0,"oes_texture_half_float extension not enabled")}function C(e,t,n){var a=e.element,o=e.data,f=e.internalformat,u=e.format,s=e.type,c=e.width,l=e.height;T(e),a?r.texImage2D(t,n,u,u,s,a):e.compressed?r.compressedTexImage2D(t,n,f,c,l,0,o):e.needsCopy?(i(),r.copyTexImage2D(t,n,u,e.xOffset,e.yOffset,c,l,0)):r.texImage2D(t,n,u,c,l,0,u,s,o||null)}function M(e,t,n,a,o){var f=e.element,u=e.data,s=e.internalformat,c=e.format,l=e.type,d=e.width,m=e.height;T(e),f?r.texSubImage2D(t,o,n,a,c,l,f):e.compressed?r.compressedTexSubImage2D(t,o,n,a,s,d,m,u):e.needsCopy?(i(),r.copyTexSubImage2D(t,o,n,a,e.xOffset,e.yOffset,d,m)):r.texSubImage2D(t,o,n,a,d,m,c,l,u)}var F=[];function z(){return F.pop()||new j}function R(e){e.needsFree&&Pe.freeType(e.data),j.call(e),F.push(e)}function B(){S.call(this),this.genMipmaps=!1,this.mipmapHint=cn,this.mipmask=0,this.images=Array(16)}function P(e,t,r){var n=e.images[0]=z();e.mipmask=1,n.width=e.width=t,n.height=e.height=r,n.channels=e.channels=4}function V(e,t){var r=null;if(Nn(t))O(r=e.images[0]=z(),e),D(r,t),e.mipmask=1;else if(E(e,t),Array.isArray(t.mipmap))for(var n=t.mipmap,a=0;a<n.length;++a)O(r=e.images[a]=z(),e),r.width>>=a,r.height>>=a,D(r,n[a]),e.mipmask|=1<<a;else O(r=e.images[0]=z(),e),D(r,t),e.mipmask=1;O(e,e.images[0]),!e.compressed||e.internalformat!==Fr&&e.internalformat!==zr&&e.internalformat!==Rr&&e.internalformat!==Br||re(e.width%4==0&&e.height%4==0,"for compressed texture formats, mipmap level 0 must have width and height that are a multiple of 4")}function I(e,t){for(var r=e.images,n=0;n<r.length;++n){if(!r[n])return;C(r[n],t,n)}}var L=[];function H(){var e=L.pop()||new B;S.call(e),e.mipmask=0;for(var t=0;t<16;++t)e.images[t]=null;return e}function N(e){for(var t=e.images,r=0;r<t.length;++r)t[r]&&R(t[r]),t[r]=null;L.push(e)}function U(){this.minFilter=rn,this.magFilter=rn,this.wrapS=Jr,this.wrapT=Jr,this.anisotropic=1,this.genMipmaps=!1,this.mipmapHint=cn}function q(e,t){if("min"in t){var r=t.min;re.parameter(r,d),e.minFilter=d[r],xn.indexOf(e.minFilter)>=0&&!("faces"in t)&&(e.genMipmaps=!0)}if("mag"in t){var n=t.mag;re.parameter(n,l),e.magFilter=l[n]}var i=e.wrapS,o=e.wrapT;if("wrap"in t){var f=t.wrap;"string"==typeof f?(re.parameter(f,c),i=o=c[f]):Array.isArray(f)&&(re.parameter(f[0],c),re.parameter(f[1],c),i=c[f[0]],o=c[f[1]])}else{if("wrapS"in t){var u=t.wrapS;re.parameter(u,c),i=c[u]}if("wrapT"in t){var m=t.wrapT;re.parameter(m,c),o=c[m]}}if(e.wrapS=i,e.wrapT=o,"anisotropic"in t){var h=t.anisotropic;re("number"==typeof h&&h>=1&&h<=a.maxAnisotropic,"aniso samples must be between 1 and "),e.anisotropic=t.anisotropic}if("mipmap"in t){var p=!1;switch(typeof t.mipmap){case"string":re.parameter(t.mipmap,s,"invalid mipmap hint"),e.mipmapHint=s[t.mipmap],e.genMipmaps=!0,p=!0;break;case"boolean":p=e.genMipmaps=t.mipmap;break;case"object":re(Array.isArray(t.mipmap),"invalid mipmap type"),e.genMipmaps=!1,p=!0;break;default:re.raise("invalid mipmap type")}p&&!("min"in t)&&(e.minFilter=an)}}function W(e,t){r.texParameteri(t,tn,e.minFilter),r.texParameteri(t,en,e.magFilter),r.texParameteri(t,$r,e.wrapS),r.texParameteri(t,Xr,e.wrapT),n.ext_texture_filter_anisotropic&&r.texParameteri(t,mn,e.anisotropic),e.genMipmaps&&(r.hint(sn,e.mipmapHint),r.generateMipmap(t))}var G=0,Q={},Y=a.maxTextureUnits,$=Array(Y).map((function(){return null}));function X(e){S.call(this),this.mipmask=0,this.internalformat=br,this.id=G++,this.refCount=1,this.target=e,this.texture=r.createTexture(),this.unit=-1,this.bindCount=0,this.texInfo=new U,u.profile&&(this.stats={size:0})}function K(e){r.activeTexture(yn),r.bindTexture(e.target,e.texture)}function J(){var e=$[0];e?r.bindTexture(e.target,e.texture):r.bindTexture(mr,null)}function Z(e){var t=e.texture;re(t,"must not double destroy texture");var n=e.unit,a=e.target;n>=0&&(r.activeTexture(yn+n),r.bindTexture(a,null),$[n]=null),r.deleteTexture(t),e.texture=null,e.params=null,e.pixels=null,e.refCount=0,delete Q[e.id],f.textureCount--}function ee(e,t){var n=new X(mr);function i(e,t){var r=n.texInfo;U.call(r);var o=H();return"number"==typeof e?P(o,0|e,"number"==typeof t?0|t:0|e):e?(re.type(e,"object","invalid arguments to regl.texture"),q(r,e),V(o,e)):P(o,1,1),r.genMipmaps&&(o.mipmask=(o.width<<1)-1),n.mipmask=o.mipmask,O(n,o),re.texture2D(r,o,a),n.internalformat=o.internalformat,i.width=o.width,i.height=o.height,K(n),I(o,mr),W(r,mr),J(),N(o),u.profile&&(n.stats.size=Yn(n.internalformat,n.type,o.width,o.height,r.genMipmaps,!1)),i.format=y[n.internalformat],i.type=x[n.type],i.mag=w[r.magFilter],i.min=A[r.minFilter],i.wrapS=_[r.wrapS],i.wrapT=_[r.wrapT],i}function o(e,t,r,a){re(!!e,"must specify image data");var o=0|t,f=0|r,u=0|a,s=z();return O(s,n),s.width=0,s.height=0,D(s,e),s.width=s.width||(n.width>>u)-o,s.height=s.height||(n.height>>u)-f,re(n.type===s.type&&n.format===s.format&&n.internalformat===s.internalformat,"incompatible format for texture.subimage"),re(o>=0&&f>=0&&o+s.width<=n.width&&f+s.height<=n.height,"texture.subimage write out of bounds"),re(n.mipmask&1<<u,"missing mipmap data"),re(s.data||s.element||s.needsCopy,"missing image data"),K(n),M(s,mr,o,f,u),J(),R(s),i}function s(e,t){var a=0|e,o=0|t||a;if(a===n.width&&o===n.height)return i;i.width=n.width=a,i.height=n.height=o,K(n);for(var f=0;n.mipmask>>f;++f){var s=a>>f,c=o>>f;if(!s||!c)break;r.texImage2D(mr,f,n.format,s,c,0,n.format,n.type,null)}return J(),u.profile&&(n.stats.size=Yn(n.internalformat,n.type,a,o,!1,!1)),i}return Q[n.id]=n,f.textureCount++,i(e,t),i.subimage=o,i.resize=s,i._reglType="texture2d",i._texture=n,u.profile&&(i.stats=n.stats),i.destroy=function(){n.decRef()},i}function te(e,t,n,i,o,s){var c=new X(hr);Q[c.id]=c,f.cubeCount++;var l=new Array(6);function d(e,t,r,n,i,o){var f,s=c.texInfo;for(U.call(s),f=0;f<6;++f)l[f]=H();if("number"!=typeof e&&e)if("object"==typeof e)if(t)V(l[0],e),V(l[1],t),V(l[2],r),V(l[3],n),V(l[4],i),V(l[5],o);else if(q(s,e),E(c,e),"faces"in e){var m=e.faces;for(re(Array.isArray(m)&&6===m.length,"cube faces must be a length 6 array"),f=0;f<6;++f)re("object"==typeof m[f]&&!!m[f],"invalid input for cube map face"),O(l[f],c),V(l[f],m[f])}else for(f=0;f<6;++f)V(l[f],e);else re.raise("invalid arguments to cube map");else{var h=0|e||1;for(f=0;f<6;++f)P(l[f],h,h)}for(O(c,l[0]),a.npotTextureCube||re(lr(c.width)&&lr(c.height),"your browser does not support non power or two texture dimensions"),s.genMipmaps?c.mipmask=(l[0].width<<1)-1:c.mipmask=l[0].mipmask,re.textureCube(c,s,l,a),c.internalformat=l[0].internalformat,d.width=l[0].width,d.height=l[0].height,K(c),f=0;f<6;++f)I(l[f],pr+f);for(W(s,hr),J(),u.profile&&(c.stats.size=Yn(c.internalformat,c.type,d.width,d.height,s.genMipmaps,!0)),d.format=y[c.internalformat],d.type=x[c.type],d.mag=w[s.magFilter],d.min=A[s.minFilter],d.wrapS=_[s.wrapS],d.wrapT=_[s.wrapT],f=0;f<6;++f)N(l[f]);return d}function m(e,t,r,n,a){re(!!t,"must specify image data"),re("number"==typeof e&&e===(0|e)&&e>=0&&e<6,"invalid face");var i=0|r,o=0|n,f=0|a,u=z();return O(u,c),u.width=0,u.height=0,D(u,t),u.width=u.width||(c.width>>f)-i,u.height=u.height||(c.height>>f)-o,re(c.type===u.type&&c.format===u.format&&c.internalformat===u.internalformat,"incompatible format for texture.subimage"),re(i>=0&&o>=0&&i+u.width<=c.width&&o+u.height<=c.height,"texture.subimage write out of bounds"),re(c.mipmask&1<<f,"missing mipmap data"),re(u.data||u.element||u.needsCopy,"missing image data"),K(c),M(u,pr+e,i,o,f),J(),R(u),d}function h(e){var t=0|e;if(t!==c.width){d.width=c.width=t,d.height=c.height=t,K(c);for(var n=0;n<6;++n)for(var a=0;c.mipmask>>a;++a)r.texImage2D(pr+n,a,c.format,t>>a,t>>a,0,c.format,c.type,null);return J(),u.profile&&(c.stats.size=Yn(c.internalformat,c.type,d.width,d.height,!1,!0)),d}}return d(e,t,n,i,o,s),d.subimage=m,d.resize=h,d._reglType="textureCube",d._texture=c,u.profile&&(d.stats=c.stats),d.destroy=function(){c.decRef()},d}function ne(){for(var e=0;e<Y;++e)r.activeTexture(yn+e),r.bindTexture(mr,null),$[e]=null;kt(Q).forEach(Z),f.cubeCount=0,f.textureCount=0}function ae(){for(var e=0;e<Y;++e){var t=$[e];t&&(t.bindCount=0,t.unit=-1,$[e]=null)}kt(Q).forEach((function(e){e.texture=r.createTexture(),r.bindTexture(e.target,e.texture);for(var t=0;t<32;++t)if(0!=(e.mipmask&1<<t))if(e.target===mr)r.texImage2D(mr,t,e.internalformat,e.width>>t,e.height>>t,0,e.internalformat,e.type,null);else for(var n=0;n<6;++n)r.texImage2D(pr+n,t,e.internalformat,e.width>>t,e.height>>t,0,e.internalformat,e.type,null);W(e.texInfo,e.target)}))}function ie(){for(var e=0;e<Y;++e){var t=$[e];t&&(t.bindCount=0,t.unit=-1,$[e]=null),r.activeTexture(yn+e),r.bindTexture(mr,null),r.bindTexture(hr,null)}}return t(X.prototype,{bind:function(){var e=this;e.bindCount+=1;var t=e.unit;if(t<0){for(var n=0;n<Y;++n){var a=$[n];if(a){if(a.bindCount>0)continue;a.unit=-1}$[n]=e,t=n;break}t>=Y&&re.raise("insufficient number of texture units"),u.profile&&f.maxTextureUnits<t+1&&(f.maxTextureUnits=t+1),e.unit=t,r.activeTexture(yn+t),r.bindTexture(e.target,e.texture)}return t},unbind:function(){this.bindCount-=1},decRef:function(){--this.refCount<=0&&Z(this)}}),u.profile&&(f.getTotalTextureSize=function(){var e=0;return Object.keys(Q).forEach((function(t){e+=Q[t].stats.size})),e}),{create2D:ee,createCube:te,clear:ne,getTexture:function(e){return null},restore:ae,refresh:ie}}Mn[wr]=2,Mn[Ar]=2,Mn[_r]=2,Mn[jr]=4,Mn[Fr]=.5,Mn[zr]=.5,Mn[Rr]=1,Mn[Br]=1,Mn[Pr]=.5,Mn[Vr]=1,Mn[Ir]=1,Mn[Lr]=.5,Mn[Hr]=.25,Mn[Nr]=.5,Mn[Ur]=.25,Mn[qr]=.5;var Xn=36161,Kn=32854,Jn=32855,Zn=36194,ea=33189,ta=36168,ra=34041,na=35907,aa=34836,ia=34842,oa=34843,fa=[];function ua(e,t,r){return fa[e]*t*r}fa[Kn]=2,fa[Jn]=2,fa[Zn]=2,fa[ea]=2,fa[ta]=1,fa[ra]=4,fa[na]=4,fa[aa]=16,fa[ia]=8,fa[oa]=6;var sa=function(e,t,r,n,a){var i={rgba4:Kn,rgb565:Zn,"rgb5 a1":Jn,depth:ea,stencil:ta,"depth stencil":ra};t.ext_srgb&&(i.srgba=na),t.ext_color_buffer_half_float&&(i.rgba16f=ia,i.rgb16f=oa),t.webgl_color_buffer_float&&(i.rgba32f=aa);var o=[];Object.keys(i).forEach((function(e){var t=i[e];o[t]=e}));var f=0,u={};function s(e){this.id=f++,this.refCount=1,this.renderbuffer=e,this.format=Kn,this.width=0,this.height=0,a.profile&&(this.stats={size:0})}function c(t){var r=t.renderbuffer;re(r,"must not double destroy renderbuffer"),e.bindRenderbuffer(Xn,null),e.deleteRenderbuffer(r),t.renderbuffer=null,t.refCount=0,delete u[t.id],n.renderbufferCount--}function l(t,f){var c=new s(e.createRenderbuffer());function l(t,n){var f=0,u=0,s=Kn;if("object"==typeof t&&t){var d=t;if("shape"in d){var m=d.shape;re(Array.isArray(m)&&m.length>=2,"invalid renderbuffer shape"),f=0|m[0],u=0|m[1]}else"radius"in d&&(f=u=0|d.radius),"width"in d&&(f=0|d.width),"height"in d&&(u=0|d.height);"format"in d&&(re.parameter(d.format,i,"invalid renderbuffer format"),s=i[d.format])}else"number"==typeof t?(f=0|t,u="number"==typeof n?0|n:f):t?re.raise("invalid arguments to renderbuffer constructor"):f=u=1;if(re(f>0&&u>0&&f<=r.maxRenderbufferSize&&u<=r.maxRenderbufferSize,"invalid renderbuffer size"),f!==c.width||u!==c.height||s!==c.format)return l.width=c.width=f,l.height=c.height=u,c.format=s,e.bindRenderbuffer(Xn,c.renderbuffer),e.renderbufferStorage(Xn,s,f,u),re(0===e.getError(),"invalid render buffer format"),a.profile&&(c.stats.size=ua(c.format,c.width,c.height)),l.format=o[c.format],l}function d(t,n){var i=0|t,o=0|n||i;return i===c.width&&o===c.height||(re(i>0&&o>0&&i<=r.maxRenderbufferSize&&o<=r.maxRenderbufferSize,"invalid renderbuffer size"),l.width=c.width=i,l.height=c.height=o,e.bindRenderbuffer(Xn,c.renderbuffer),e.renderbufferStorage(Xn,c.format,i,o),re(0===e.getError(),"invalid render buffer format"),a.profile&&(c.stats.size=ua(c.format,c.width,c.height))),l}return u[c.id]=c,n.renderbufferCount++,l(t,f),l.resize=d,l._reglType="renderbuffer",l._renderbuffer=c,a.profile&&(l.stats=c.stats),l.destroy=function(){c.decRef()},l}function d(){kt(u).forEach((function(t){t.renderbuffer=e.createRenderbuffer(),e.bindRenderbuffer(Xn,t.renderbuffer),e.renderbufferStorage(Xn,t.format,t.width,t.height)})),e.bindRenderbuffer(Xn,null)}return s.prototype.decRef=function(){--this.refCount<=0&&c(this)},a.profile&&(n.getTotalRenderbufferSize=function(){var e=0;return Object.keys(u).forEach((function(t){e+=u[t].stats.size})),e}),{create:l,clear:function(){kt(u).forEach(c)},restore:d}},ca=36160,la=36161,da=3553,ma=34069,ha=36064,pa=36096,ba=36128,ga=33306,va=36053,ya=36054,xa=36055,wa=36057,Aa=36061,_a=36193,ka=5121,Sa=5126,Oa=6407,Ea=6408,Ta=6402,ja=[Oa,Ea],Da=[];Da[Ea]=4,Da[Oa]=3;var Ca=[];Ca[ka]=1,Ca[Sa]=4,Ca[_a]=2;var Ma=33189,Fa=36168,za=34041,Ra=[32854,32855,36194,35907,34842,34843,34836],Ba={};function Pa(e,r,n,a,i,o){var f={cur:null,next:null,dirty:!1,setFBO:null},u=["rgba"],s=["rgba4","rgb565","rgb5 a1"];r.ext_srgb&&s.push("srgba"),r.ext_color_buffer_half_float&&s.push("rgba16f","rgb16f"),r.webgl_color_buffer_float&&s.push("rgba32f");var c=["uint8"];function l(e,t,r){this.target=e,this.texture=t,this.renderbuffer=r;var n=0,a=0;t?(n=t.width,a=t.height):r&&(n=r.width,a=r.height),this.width=n,this.height=a}function d(e){e&&(e.texture&&e.texture._texture.decRef(),e.renderbuffer&&e.renderbuffer._renderbuffer.decRef())}function m(e,t,r){if(e)if(e.texture){var n=e.texture._texture,a=Math.max(1,n.width),i=Math.max(1,n.height);re(a===t&&i===r,"inconsistent width/height for supplied texture"),n.refCount+=1}else{var o=e.renderbuffer._renderbuffer;re(o.width===t&&o.height===r,"inconsistent width/height for renderbuffer"),o.refCount+=1}}function h(t,r){r&&(r.texture?e.framebufferTexture2D(ca,t,r.target,r.texture._texture.texture,0):e.framebufferRenderbuffer(ca,t,la,r.renderbuffer._renderbuffer.renderbuffer))}function p(e){var t=da,r=null,n=null,a=e;"object"==typeof e&&(a=e.data,"target"in e&&(t=0|e.target)),re.type(a,"function","invalid attachment data");var i=a._reglType;return"texture2d"===i?(r=a,re(t===da)):"textureCube"===i?(r=a,re(t>=ma&&t<ma+6,"invalid cube map target")):"renderbuffer"===i?(n=a,t=la):re.raise("invalid regl object for attachment"),new l(t,r,n)}function b(e,t,r,n,o){if(r){var f=a.create2D({width:e,height:t,format:n,type:o});return f._texture.refCount=0,new l(da,f,null)}var u=i.create({width:e,height:t,format:n});return u._renderbuffer.refCount=0,new l(la,null,u)}function g(e){return e&&(e.texture||e.renderbuffer)}function v(e,t,r){e&&(e.texture?e.texture.resize(t,r):e.renderbuffer&&e.renderbuffer.resize(t,r),e.width=t,e.height=r)}r.oes_texture_half_float&&c.push("half float","float16"),r.oes_texture_float&&c.push("float","float32");var y=0,x={};function w(){this.id=y++,x[this.id]=this,this.framebuffer=e.createFramebuffer(),this.width=0,this.height=0,this.colorAttachments=[],this.depthAttachment=null,this.stencilAttachment=null,this.depthStencilAttachment=null}function A(e){e.colorAttachments.forEach(d),d(e.depthAttachment),d(e.stencilAttachment),d(e.depthStencilAttachment)}function _(t){var r=t.framebuffer;re(r,"must not double destroy framebuffer"),e.deleteFramebuffer(r),t.framebuffer=null,o.framebufferCount--,delete x[t.id]}function k(t){var r;e.bindFramebuffer(ca,t.framebuffer);var a=t.colorAttachments;for(r=0;r<a.length;++r)h(ha+r,a[r]);for(r=a.length;r<n.maxColorAttachments;++r)e.framebufferTexture2D(ca,ha+r,da,null,0);e.framebufferTexture2D(ca,ga,da,null,0),e.framebufferTexture2D(ca,pa,da,null,0),e.framebufferTexture2D(ca,ba,da,null,0),h(pa,t.depthAttachment),h(ba,t.stencilAttachment),h(ga,t.depthStencilAttachment);var i=e.checkFramebufferStatus(ca);e.isContextLost()||i===va||re.raise("framebuffer configuration not supported, status = "+Ba[i]),e.bindFramebuffer(ca,f.next?f.next.framebuffer:null),f.cur=f.next,e.getError()}function S(e,a){var i=new w;function l(e,t){var a;re(f.next!==i,"can not update framebuffer which is currently in use");var o=0,d=0,h=!0,v=!0,y=null,x=!0,w="rgba",_="uint8",S=1,O=null,E=null,T=null,j=!1;if("number"==typeof e)o=0|e,d=0|t||o;else if(e){re.type(e,"object","invalid arguments for framebuffer");var D=e;if("shape"in D){var C=D.shape;re(Array.isArray(C)&&C.length>=2,"invalid shape for framebuffer"),o=C[0],d=C[1]}else"radius"in D&&(o=d=D.radius),"width"in D&&(o=D.width),"height"in D&&(d=D.height);("color"in D||"colors"in D)&&(y=D.color||D.colors,Array.isArray(y)&&re(1===y.length||r.webgl_draw_buffers,"multiple render targets not supported")),y||("colorCount"in D&&(S=0|D.colorCount,re(S>0,"invalid color buffer count")),"colorTexture"in D&&(x=!!D.colorTexture,w="rgba4"),"colorType"in D&&(_=D.colorType,x?(re(r.oes_texture_float||!("float"===_||"float32"===_),"you must enable OES_texture_float in order to use floating point framebuffer objects"),re(r.oes_texture_half_float||!("half float"===_||"float16"===_),"you must enable OES_texture_half_float in order to use 16-bit floating point framebuffer objects")):"half float"===_||"float16"===_?(re(r.ext_color_buffer_half_float,"you must enable EXT_color_buffer_half_float to use 16-bit render buffers"),w="rgba16f"):"float"!==_&&"float32"!==_||(re(r.webgl_color_buffer_float,"you must enable WEBGL_color_buffer_float in order to use 32-bit floating point renderbuffers"),w="rgba32f"),re.oneOf(_,c,"invalid color type")),"colorFormat"in D&&(w=D.colorFormat,u.indexOf(w)>=0?x=!0:s.indexOf(w)>=0?x=!1:x?re.oneOf(D.colorFormat,u,"invalid color format for texture"):re.oneOf(D.colorFormat,s,"invalid color format for renderbuffer"))),("depthTexture"in D||"depthStencilTexture"in D)&&(j=!(!D.depthTexture&&!D.depthStencilTexture),re(!j||r.webgl_depth_texture,"webgl_depth_texture extension not supported")),"depth"in D&&("boolean"==typeof D.depth?h=D.depth:(O=D.depth,v=!1)),"stencil"in D&&("boolean"==typeof D.stencil?v=D.stencil:(E=D.stencil,h=!1)),"depthStencil"in D&&("boolean"==typeof D.depthStencil?h=v=D.depthStencil:(T=D.depthStencil,h=!1,v=!1))}else o=d=1;var M=null,F=null,z=null,R=null;if(Array.isArray(y))M=y.map(p);else if(y)M=[p(y)];else for(M=new Array(S),a=0;a<S;++a)M[a]=b(o,d,x,w,_);re(r.webgl_draw_buffers||M.length<=1,"you must enable the WEBGL_draw_buffers extension in order to use multiple color buffers."),re(M.length<=n.maxColorAttachments,"too many color attachments, not supported"),o=o||M[0].width,d=d||M[0].height,O?F=p(O):h&&!v&&(F=b(o,d,j,"depth","uint32")),E?z=p(E):v&&!h&&(z=b(o,d,!1,"stencil","uint8")),T?R=p(T):!O&&!E&&v&&h&&(R=b(o,d,j,"depth stencil","depth stencil")),re(!!O+!!E+!!T<=1,"invalid framebuffer configuration, can specify exactly one depth/stencil attachment");var B=null;for(a=0;a<M.length;++a)if(m(M[a],o,d),re(!M[a]||M[a].texture&&ja.indexOf(M[a].texture._texture.format)>=0||M[a].renderbuffer&&Ra.indexOf(M[a].renderbuffer._renderbuffer.format)>=0,"framebuffer color attachment "+a+" is invalid"),M[a]&&M[a].texture){var P=Da[M[a].texture._texture.format]*Ca[M[a].texture._texture.type];null===B?B=P:re(B===P,"all color attachments much have the same number of bits per pixel.")}return m(F,o,d),re(!F||F.texture&&F.texture._texture.format===Ta||F.renderbuffer&&F.renderbuffer._renderbuffer.format===Ma,"invalid depth attachment for framebuffer object"),m(z,o,d),re(!z||z.renderbuffer&&z.renderbuffer._renderbuffer.format===Fa,"invalid stencil attachment for framebuffer object"),m(R,o,d),re(!R||R.texture&&R.texture._texture.format===za||R.renderbuffer&&R.renderbuffer._renderbuffer.format===za,"invalid depth-stencil attachment for framebuffer object"),A(i),i.width=o,i.height=d,i.colorAttachments=M,i.depthAttachment=F,i.stencilAttachment=z,i.depthStencilAttachment=R,l.color=M.map(g),l.depth=g(F),l.stencil=g(z),l.depthStencil=g(R),l.width=i.width,l.height=i.height,k(i),l}function d(e,t){re(f.next!==i,"can not resize a framebuffer which is currently in use");var r=Math.max(0|e,1),n=Math.max(0|t||r,1);if(r===i.width&&n===i.height)return l;for(var a=i.colorAttachments,o=0;o<a.length;++o)v(a[o],r,n);return v(i.depthAttachment,r,n),v(i.stencilAttachment,r,n),v(i.depthStencilAttachment,r,n),i.width=l.width=r,i.height=l.height=n,k(i),l}return o.framebufferCount++,l(e,a),t(l,{resize:d,_reglType:"framebuffer",_framebuffer:i,destroy:function(){_(i),A(i)},use:function(e){f.setFBO({framebuffer:l},e)}})}function O(e){var i=Array(6);function o(e){var n;re(i.indexOf(f.next)<0,"can not update framebuffer which is currently in use");var s,l={color:null},d=0,m=null,h="rgba",p="uint8",b=1;if("number"==typeof e)d=0|e;else if(e){re.type(e,"object","invalid arguments for framebuffer");var g=e;if("shape"in g){var v=g.shape;re(Array.isArray(v)&&v.length>=2,"invalid shape for framebuffer"),re(v[0]===v[1],"cube framebuffer must be square"),d=v[0]}else"radius"in g&&(d=0|g.radius),"width"in g?(d=0|g.width,"height"in g&&re(g.height===d,"must be square")):"height"in g&&(d=0|g.height);("color"in g||"colors"in g)&&(m=g.color||g.colors,Array.isArray(m)&&re(1===m.length||r.webgl_draw_buffers,"multiple render targets not supported")),m||("colorCount"in g&&(b=0|g.colorCount,re(b>0,"invalid color buffer count")),"colorType"in g&&(re.oneOf(g.colorType,c,"invalid color type"),p=g.colorType),"colorFormat"in g&&(h=g.colorFormat,re.oneOf(g.colorFormat,u,"invalid color format for texture"))),"depth"in g&&(l.depth=g.depth),"stencil"in g&&(l.stencil=g.stencil),"depthStencil"in g&&(l.depthStencil=g.depthStencil)}else d=1;if(m)if(Array.isArray(m))for(s=[],n=0;n<m.length;++n)s[n]=m[n];else s=[m];else{s=Array(b);var y={radius:d,format:h,type:p};for(n=0;n<b;++n)s[n]=a.createCube(y)}for(l.color=Array(s.length),n=0;n<s.length;++n){var x=s[n];re("function"==typeof x&&"textureCube"===x._reglType,"invalid cube map"),d=d||x.width,re(x.width===d&&x.height===d,"invalid cube map shape"),l.color[n]={target:ma,data:s[n]}}for(n=0;n<6;++n){for(var w=0;w<s.length;++w)l.color[w].target=ma+n;n>0&&(l.depth=i[0].depth,l.stencil=i[0].stencil,l.depthStencil=i[0].depthStencil),i[n]?i[n](l):i[n]=S(l)}return t(o,{width:d,height:d,color:s})}function s(e){var t,r=0|e;if(re(r>0&&r<=n.maxCubeMapSize,"invalid radius for cube fbo"),r===o.width)return o;var a=o.color;for(t=0;t<a.length;++t)a[t].resize(r);for(t=0;t<6;++t)i[t].resize(r);return o.width=o.height=r,o}return o(e),t(o,{faces:i,resize:s,_reglType:"framebufferCube",destroy:function(){i.forEach((function(e){e.destroy()}))}})}function E(){f.cur=null,f.next=null,f.dirty=!0,kt(x).forEach((function(t){t.framebuffer=e.createFramebuffer(),k(t)}))}return t(f,{getFramebuffer:function(e){if("function"==typeof e&&"framebuffer"===e._reglType){var t=e._framebuffer;if(t instanceof w)return t}return null},create:S,createCube:O,clear:function(){kt(x).forEach(_)},restore:E})}Ba[va]="complete",Ba[ya]="incomplete attachment",Ba[wa]="incomplete dimensions",Ba[xa]="incomplete, missing attachment",Ba[Aa]="unsupported";var Va=5126,Ia=34962;function La(){this.state=0,this.x=0,this.y=0,this.z=0,this.w=0,this.buffer=null,this.size=0,this.normalized=!1,this.type=Va,this.offset=0,this.stride=0,this.divisor=0}function Ha(t,r,n,a,i){for(var o=n.maxAttributes,f=new Array(o),u=0;u<o;++u)f[u]=new La;var s=0,c={},l={Record:La,scope:{},state:f,currentVAO:null,targetVAO:null,restore:m()?x:function(){},createVAO:w,getVAO:p,destroyBuffer:d,setVAO:m()?b:g,clear:m()?v:function(){}};function d(e){for(var r=0;r<f.length;++r){var n=f[r];n.buffer===e&&(t.disableVertexAttribArray(r),n.buffer=null)}}function m(){return r.oes_vertex_array_object}function h(){return r.angle_instanced_arrays}function p(e){return"function"==typeof e&&e._vao?e._vao:null}function b(e){if(e!==l.currentVAO){var t=m();e?t.bindVertexArrayOES(e.vao):t.bindVertexArrayOES(null),l.currentVAO=e}}function g(e){if(e!==l.currentVAO){if(e)e.bindAttrs();else for(var r=h(),n=0;n<f.length;++n){var a=f[n];a.buffer?(t.enableVertexAttribArray(n),t.vertexAttribPointer(n,a.size,a.type,a.normalized,a.stride,a.offfset),r&&a.divisor&&r.vertexAttribDivisorANGLE(n,a.divisor)):(t.disableVertexAttribArray(n),t.vertexAttrib4f(n,a.x,a.y,a.z,a.w))}l.currentVAO=e}}function v(){kt(c).forEach((function(e){e.destroy()}))}function y(){this.id=++s,this.attributes=[];var e=m();this.vao=e?e.createVertexArrayOES():null,c[this.id]=this,this.buffers=[]}function x(){m()&&kt(c).forEach((function(e){e.refresh()}))}function w(t){var n=new y;function f(t){re(Array.isArray(t),"arguments to vertex array constructor must be an array"),re(t.length<o,"too many attributes"),re(t.length>0,"must specify at least one attribute");var a={},u=n.attributes;u.length=t.length;for(var s=0;s<t.length;++s){var c,l=t[s],d=u[s]=new La,m=l.data||l;Array.isArray(m)||e(m)||_t(m)?(n.buffers[s]&&(c=n.buffers[s],e(m)&&c._buffer.byteLength>=m.byteLength?c.subdata(m):(c.destroy(),n.buffers[s]=null)),n.buffers[s]||(c=n.buffers[s]=i.create(l,Ia,!1,!0)),d.buffer=i.getBuffer(c),d.size=0|d.buffer.dimension,d.normalized=!1,d.type=d.buffer.dtype,d.offset=0,d.stride=0,d.divisor=0,d.state=1,a[s]=1):i.getBuffer(l)?(d.buffer=i.getBuffer(l),d.size=0|d.buffer.dimension,d.normalized=!1,d.type=d.buffer.dtype,d.offset=0,d.stride=0,d.divisor=0,d.state=1):i.getBuffer(l.buffer)?(d.buffer=i.getBuffer(l.buffer),d.size=0|(+l.size||d.buffer.dimension),d.normalized=!!l.normalized||!1,"type"in l?(re.parameter(l.type,Ft,"invalid buffer type"),d.type=Ft[l.type]):d.type=d.buffer.dtype,d.offset=0|(l.offset||0),d.stride=0|(l.stride||0),d.divisor=0|(l.divisor||0),d.state=1,re(d.size>=1&&d.size<=4,"size must be between 1 and 4"),re(d.offset>=0,"invalid offset"),re(d.stride>=0&&d.stride<=255,"stride must be between 0 and 255"),re(d.divisor>=0,"divisor must be positive"),re(!d.divisor||!!r.angle_instanced_arrays,"ANGLE_instanced_arrays must be enabled to use divisor")):"x"in l?(re(s>0,"first attribute must not be a constant"),d.x=+l.x||0,d.y=+l.y||0,d.z=+l.z||0,d.w=+l.w||0,d.state=2):re(!1,"invalid attribute spec for location "+s)}for(var h=0;h<n.buffers.length;++h)!a[h]&&n.buffers[h]&&(n.buffers[h].destroy(),n.buffers[h]=null);return n.refresh(),f}return a.vaoCount+=1,f.destroy=function(){for(var e=0;e<n.buffers.length;++e)n.buffers[e]&&n.buffers[e].destroy();n.buffers.length=0,n.destroy()},f._vao=n,f._reglType="vao",f(t)}return y.prototype.bindAttrs=function(){for(var e=h(),r=this.attributes,n=0;n<r.length;++n){var a=r[n];a.buffer?(t.enableVertexAttribArray(n),t.bindBuffer(Ia,a.buffer.buffer),t.vertexAttribPointer(n,a.size,a.type,a.normalized,a.stride,a.offset),e&&a.divisor&&e.vertexAttribDivisorANGLE(n,a.divisor)):(t.disableVertexAttribArray(n),t.vertexAttrib4f(n,a.x,a.y,a.z,a.w))}for(var i=r.length;i<o;++i)t.disableVertexAttribArray(i)},y.prototype.refresh=function(){var e=m();e&&(e.bindVertexArrayOES(this.vao),this.bindAttrs(),l.currentVAO=this)},y.prototype.destroy=function(){if(this.vao){var e=m();this===l.currentVAO&&(l.currentVAO=null,e.bindVertexArrayOES(null)),e.deleteVertexArrayOES(this.vao),this.vao=null}c[this.id]&&(delete c[this.id],a.vaoCount-=1)},l}var Na=35632,Ua=35633,qa=35718,Wa=35721;function Ga(e,r,n,a){var i={},o={};function f(e,t,r,n){this.name=e,this.id=t,this.location=r,this.info=n}function u(e,t){for(var r=0;r<e.length;++r)if(e[r].id===t.id)return void(e[r].location=t.location);e.push(t)}function s(t,n,a){var f=t===Na?i:o,u=f[n];if(!u){var s=r.str(n);u=e.createShader(t),e.shaderSource(u,s),e.compileShader(u),re.shaderError(e,u,s,t,a),f[n]=u}return u}var c={},l=[],d=0;function m(e,t){this.id=d++,this.fragId=e,this.vertId=t,this.program=null,this.uniforms=[],this.attributes=[],this.refCount=1,a.profile&&(this.stats={uniformsCount:0,attributesCount:0})}function h(t,n,i){var o,c,l=s(Na,t.fragId),d=s(Ua,t.vertId),m=t.program=e.createProgram();if(e.attachShader(m,l),e.attachShader(m,d),i)for(o=0;o<i.length;++o){var h=i[o];e.bindAttribLocation(m,h[0],h[1])}e.linkProgram(m),re.linkError(e,m,r.str(t.fragId),r.str(t.vertId),n);var p=e.getProgramParameter(m,qa);a.profile&&(t.stats.uniformsCount=p);var b=t.uniforms;for(o=0;o<p;++o)if(c=e.getActiveUniform(m,o))if(c.size>1)for(var g=0;g<c.size;++g){var v=c.name.replace("[0]","["+g+"]");u(b,new f(v,r.id(v),e.getUniformLocation(m,v),c))}else u(b,new f(c.name,r.id(c.name),e.getUniformLocation(m,c.name),c));var y=e.getProgramParameter(m,Wa);a.profile&&(t.stats.attributesCount=y);var x=t.attributes;for(o=0;o<y;++o)(c=e.getActiveAttrib(m,o))&&u(x,new f(c.name,r.id(c.name),e.getAttribLocation(m,c.name),c))}function p(){i={},o={};for(var e=0;e<l.length;++e)h(l[e],null,l[e].attributes.map((function(e){return[e.location,e.name]})))}return a.profile&&(n.getMaxUniformsCount=function(){var e=0;return l.forEach((function(t){t.stats.uniformsCount>e&&(e=t.stats.uniformsCount)})),e},n.getMaxAttributesCount=function(){var e=0;return l.forEach((function(t){t.stats.attributesCount>e&&(e=t.stats.attributesCount)})),e}),{clear:function(){var t=e.deleteShader.bind(e);kt(i).forEach(t),i={},kt(o).forEach(t),o={},l.forEach((function(t){e.deleteProgram(t.program)})),l.length=0,c={},n.shaderCount=0},program:function(r,a,f,u){re.command(r>=0,"missing vertex shader",f),re.command(a>=0,"missing fragment shader",f);var s=c[a];s||(s=c[a]={});var d=s[r];if(d&&(d.refCount++,!u))return d;var p=new m(a,r);return n.shaderCount++,h(p,f,u),d||(s[r]=p),l.push(p),t(p,{destroy:function(){if(p.refCount--,p.refCount<=0){e.deleteProgram(p.program);var t=l.indexOf(p);l.splice(t,1),n.shaderCount--}s[p.vertId].refCount<=0&&(e.deleteShader(o[p.vertId]),delete o[p.vertId],delete c[p.fragId][p.vertId]),Object.keys(c[p.fragId]).length||(e.deleteShader(i[p.fragId]),delete i[p.fragId],delete c[p.fragId])}})},restore:p,shader:s,frag:-1,vert:-1}}var Qa=6408,Ya=5121,$a=3333,Xa=5126;function Ka(t,r,n,a,i,o,f){function u(u){var s;null===r.next?(re(i.preserveDrawingBuffer,'you must create a webgl context with "preserveDrawingBuffer":true in order to read pixels from the drawing buffer'),s=Ya):(re(null!==r.next.colorAttachments[0].texture,"You cannot read from a renderbuffer"),s=r.next.colorAttachments[0].texture._texture.type,o.oes_texture_float?(re(s===Ya||s===Xa,"Reading from a framebuffer is only allowed for the types 'uint8' and 'float'"),s===Xa&&re(f.readFloat,"Reading 'float' values is not permitted in your browser. For a fallback, please see: https://www.npmjs.com/package/glsl-read-float")):re(s===Ya,"Reading from a framebuffer is only allowed for the type 'uint8'"));var c=0,l=0,d=a.framebufferWidth,m=a.framebufferHeight,h=null;e(u)?h=u:u&&(re.type(u,"object","invalid arguments to regl.read()"),c=0|u.x,l=0|u.y,re(c>=0&&c<a.framebufferWidth,"invalid x offset for regl.read"),re(l>=0&&l<a.framebufferHeight,"invalid y offset for regl.read"),d=0|(u.width||a.framebufferWidth-c),m=0|(u.height||a.framebufferHeight-l),h=u.data||null),h&&(s===Ya?re(h instanceof Uint8Array,"buffer must be 'Uint8Array' when reading from a framebuffer of type 'uint8'"):s===Xa&&re(h instanceof Float32Array,"buffer must be 'Float32Array' when reading from a framebuffer of type 'float'")),re(d>0&&d+c<=a.framebufferWidth,"invalid width for read pixels"),re(m>0&&m+l<=a.framebufferHeight,"invalid height for read pixels"),n();var p=d*m*4;return h||(s===Ya?h=new Uint8Array(p):s===Xa&&(h=h||new Float32Array(p))),re.isTypedArray(h,"data buffer for regl.read() must be a typedarray"),re(h.byteLength>=p,"data buffer for regl.read() too small"),t.pixelStorei($a,4),t.readPixels(c,l,d,m,Qa,s,h),h}function s(e){var t;return r.setFBO({framebuffer:e.framebuffer},(function(){t=u(e)})),t}function c(e){return e&&"framebuffer"in e?s(e):u(e)}return c}function Ja(e){return Array.prototype.slice.call(e)}function Za(e){return Ja(e).join("")}function ei(){var e=0,r=[],n=[];function a(t){for(var a=0;a<n.length;++a)if(n[a]===t)return r[a];var i="g"+e++;return r.push(i),n.push(t),i}function i(){var r=[];function n(){r.push.apply(r,Ja(arguments))}var a=[];function i(){var t="v"+e++;return a.push(t),arguments.length>0&&(r.push(t,"="),r.push.apply(r,Ja(arguments)),r.push(";")),t}return t(n,{def:i,toString:function(){return Za([a.length>0?"var "+a.join(",")+";":"",Za(r)])}})}function o(){var e=i(),r=i(),n=e.toString,a=r.toString;function o(t,n){r(t,n,"=",e.def(t,n),";")}return t((function(){e.apply(e,Ja(arguments))}),{def:e.def,entry:e,exit:r,save:o,set:function(t,r,n){o(t,r),e(t,r,"=",n,";")},toString:function(){return n()+a()}})}function f(){var e=Za(arguments),r=o(),n=o(),a=r.toString,i=n.toString;return t(r,{then:function(){return r.apply(r,Ja(arguments)),this},else:function(){return n.apply(n,Ja(arguments)),this},toString:function(){var t=i();return t&&(t="else{"+t+"}"),Za(["if(",e,"){",a(),"}",t])}})}var u=i(),s={};function c(e,r){var n=[];function a(){var e="a"+n.length;return n.push(e),e}r=r||0;for(var i=0;i<r;++i)a();var f=o(),u=f.toString;return s[e]=t(f,{arg:a,toString:function(){return Za(["function(",n.join(),"){",u(),"}"])}})}function l(){var e=['"use strict";',u,"return {"];Object.keys(s).forEach((function(t){e.push('"',t,'":',s[t].toString(),",")})),e.push("}");var t=Za(e).replace(/;/g,";\n").replace(/}/g,"}\n").replace(/{/g,"{\n");return Function.apply(null,r.concat(t)).apply(null,n)}return{global:u,link:a,block:i,proc:c,scope:o,cond:f,compile:l}}var ti="xyzw".split(""),ri=5121,ni=1,ai=2,ii=0,oi=1,fi=2,ui=3,si=4,ci=5,li=6,di="dither",mi="blend.enable",hi="blend.color",pi="blend.equation",bi="blend.func",gi="depth.enable",vi="depth.func",yi="depth.range",xi="depth.mask",wi="colorMask",Ai="cull.enable",_i="cull.face",ki="frontFace",Si="lineWidth",Oi="polygonOffset.enable",Ei="polygonOffset.offset",Ti="sample.alpha",ji="sample.enable",Di="sample.coverage",Ci="stencil.enable",Mi="stencil.mask",Fi="stencil.func",zi="stencil.opFront",Ri="stencil.opBack",Bi="scissor.enable",Pi="scissor.box",Vi="viewport",Ii="profile",Li="framebuffer",Hi="vert",Ni="frag",Ui="elements",qi="primitive",Wi="count",Gi="offset",Qi="instances",Yi="vao",$i="Width",Xi="Height",Ki=Li+$i,Ji=Li+Xi,Zi=Vi+$i,eo=Vi+Xi,to="drawingBuffer",ro=to+$i,no=to+Xi,ao=[bi,pi,Fi,zi,Ri,Di,Vi,Pi,Ei],io=34962,oo=34963,fo=3553,uo=34067,so=2884,co=3042,lo=3024,mo=2960,ho=2929,po=3089,bo=32823,go=32926,vo=32928,yo=5126,xo=35664,wo=35665,Ao=35666,_o=5124,ko=35667,So=35668,Oo=35669,Eo=35670,To=35671,jo=35672,Do=35673,Co=35674,Mo=35675,Fo=35676,zo=35678,Ro=35680,Bo=4,Po=1028,Vo=1029,Io=2304,Lo=2305,Ho=32775,No=32776,Uo=519,qo=7680,Wo=0,Go=1,Qo=32774,Yo=513,$o=36160,Xo=36064,Ko={0:0,1:1,zero:0,one:1,"src color":768,"one minus src color":769,"src alpha":770,"one minus src alpha":771,"dst color":774,"one minus dst color":775,"dst alpha":772,"one minus dst alpha":773,"constant color":32769,"one minus constant color":32770,"constant alpha":32771,"one minus constant alpha":32772,"src alpha saturate":776},Jo=["constant color, constant alpha","one minus constant color, constant alpha","constant color, one minus constant alpha","one minus constant color, one minus constant alpha","constant alpha, constant color","constant alpha, one minus constant color","one minus constant alpha, constant color","one minus constant alpha, one minus constant color"],Zo={never:512,less:513,"<":513,equal:514,"=":514,"==":514,"===":514,lequal:515,"<=":515,greater:516,">":516,notequal:517,"!=":517,"!==":517,gequal:518,">=":518,always:519},ef={0:0,zero:0,keep:7680,replace:7681,increment:7682,decrement:7683,"increment wrap":34055,"decrement wrap":34056,invert:5386},tf={frag:35632,vert:35633},rf={cw:Io,ccw:Lo};function nf(t){return Array.isArray(t)||e(t)||_t(t)}function af(e){return e.sort((function(e,t){return e===Vi?-1:t===Vi?1:e<t?-1:1}))}function of(e,t,r,n){this.thisDep=e,this.contextDep=t,this.propDep=r,this.append=n}function ff(e){return e&&!(e.thisDep||e.contextDep||e.propDep)}function uf(e){return new of(!1,!1,!1,e)}function sf(e,t){var r=e.type;if(r===ii){var n=e.data.length;return new of(!0,n>=1,n>=2,t)}if(r===si){var a=e.data;return new of(a.thisDep,a.contextDep,a.propDep,t)}if(r===ci)return new of(!1,!1,!1,t);if(r===li){for(var i=!1,o=!1,f=!1,u=0;u<e.data.length;++u){var s=e.data[u];if(s.type===oi)f=!0;else if(s.type===fi)o=!0;else if(s.type===ui)i=!0;else if(s.type===ii){i=!0;var c=s.data;c>=1&&(o=!0),c>=2&&(f=!0)}else s.type===si&&(i=i||s.data.thisDep,o=o||s.data.contextDep,f=f||s.data.propDep)}return new of(i,o,f,t)}return new of(r===ui,r===fi,r===oi,t)}var cf=new of(!1,!1,!1,(function(){}));function lf(e,r,n,a,i,o,f,u,s,c,l,d,m,h,p){var b=c.Record,g={add:32774,subtract:32778,"reverse subtract":32779};n.ext_blend_minmax&&(g.min=Ho,g.max=No);var v=n.angle_instanced_arrays,y=n.webgl_draw_buffers,x={dirty:!0,profile:p.profile},w={},A=[],_={},k={};function S(e){return e.replace(".","_")}function O(e,t,r){var n=S(e);A.push(e),w[n]=x[n]=!!r,_[n]=t}function E(e,t,r){var n=S(e);A.push(e),Array.isArray(r)?(x[n]=r.slice(),w[n]=r.slice()):x[n]=w[n]=r,k[n]=t}O(di,lo),O(mi,co),E(hi,"blendColor",[0,0,0,0]),E(pi,"blendEquationSeparate",[Qo,Qo]),E(bi,"blendFuncSeparate",[Go,Wo,Go,Wo]),O(gi,ho,!0),E(vi,"depthFunc",Yo),E(yi,"depthRange",[0,1]),E(xi,"depthMask",!0),E(wi,wi,[!0,!0,!0,!0]),O(Ai,so),E(_i,"cullFace",Vo),E(ki,ki,Lo),E(Si,Si,1),O(Oi,bo),E(Ei,"polygonOffset",[0,0]),O(Ti,go),O(ji,vo),E(Di,"sampleCoverage",[1,!1]),O(Ci,mo),E(Mi,"stencilMask",-1),E(Fi,"stencilFunc",[Uo,0,-1]),E(zi,"stencilOpSeparate",[Po,qo,qo,qo]),E(Ri,"stencilOpSeparate",[Vo,qo,qo,qo]),O(Bi,po),E(Pi,"scissor",[0,0,e.drawingBufferWidth,e.drawingBufferHeight]),E(Vi,Vi,[0,0,e.drawingBufferWidth,e.drawingBufferHeight]);var T={gl:e,context:m,strings:r,next:w,current:x,draw:d,elements:o,buffer:i,shader:l,attributes:c.state,vao:c,uniforms:s,framebuffer:u,extensions:n,timer:h,isBufferArgs:nf},j={primTypes:Gt,compareFuncs:Zo,blendFuncs:Ko,blendEquations:g,stencilOps:ef,glTypes:Ft,orientationType:rf};re.optional((function(){T.isArrayLike=cr})),y&&(j.backBuffer=[Vo],j.drawBuffer=Oe(a.maxDrawbuffers,(function(e){return 0===e?[0]:Oe(e,(function(e){return Xo+e}))})));var D=0;function C(){var e=ei(),t=e.link,n=e.global;e.id=D++,e.batchId="0";var a=t(T),i=e.shared={props:"a0"};Object.keys(T).forEach((function(e){i[e]=n.def(a,".",e)})),re.optional((function(){e.CHECK=t(re),e.commandStr=re.guessCommand(),e.command=t(e.commandStr),e.assert=function(e,r,n){e("if(!(",r,"))",this.CHECK,".commandRaise(",t(n),",",this.command,");")},j.invalidBlendCombinations=Jo}));var o=e.next={},f=e.current={};Object.keys(k).forEach((function(e){Array.isArray(x[e])&&(o[e]=n.def(i.next,".",e),f[e]=n.def(i.current,".",e))}));var u=e.constants={};Object.keys(j).forEach((function(e){u[e]=n.def(JSON.stringify(j[e]))})),e.invoke=function(r,n){switch(n.type){case ii:var a=["this",i.context,i.props,e.batchId];return r.def(t(n.data),".call(",a.slice(0,Math.max(n.data.length+1,4)),")");case oi:return r.def(i.props,n.data);case fi:return r.def(i.context,n.data);case ui:return r.def("this",n.data);case si:return n.data.append(e,r),n.data.ref;case ci:return n.data.toString();case li:return n.data.map((function(t){return e.invoke(r,t)}))}},e.attribCache={};var s={};return e.scopeAttrib=function(e){var n=r.id(e);if(n in s)return s[n];var a=c.scope[n];return a||(a=c.scope[n]=new b),s[n]=t(a)},e}function M(e){var t,r=e.static,n=e.dynamic;if(Ii in r){var a=!!r[Ii];(t=uf((function(e,t){return a}))).enable=a}else if(Ii in n){var i=n[Ii];t=sf(i,(function(e,t){return e.invoke(t,i)}))}return t}function F(e,t){var r=e.static,n=e.dynamic;if(Li in r){var a=r[Li];return a?(a=u.getFramebuffer(a),re.command(a,"invalid framebuffer object"),uf((function(e,t){var r=e.link(a),n=e.shared;t.set(n.framebuffer,".next",r);var i=n.context;return t.set(i,"."+Ki,r+".width"),t.set(i,"."+Ji,r+".height"),r}))):uf((function(e,t){var r=e.shared;t.set(r.framebuffer,".next","null");var n=r.context;return t.set(n,"."+Ki,n+"."+ro),t.set(n,"."+Ji,n+"."+no),"null"}))}if(Li in n){var i=n[Li];return sf(i,(function(e,t){var r=e.invoke(t,i),n=e.shared,a=n.framebuffer,o=t.def(a,".getFramebuffer(",r,")");re.optional((function(){e.assert(t,"!"+r+"||"+o,"invalid framebuffer object")})),t.set(a,".next",o);var f=n.context;return t.set(f,"."+Ki,o+"?"+o+".width:"+f+"."+ro),t.set(f,"."+Ji,o+"?"+o+".height:"+f+"."+no),o}))}return null}function z(e,t,r){var n=e.static,a=e.dynamic;function i(e){if(e in n){var i=n[e];re.commandType(i,"object","invalid "+e,r.commandStr);var o,f,u=!0,s=0|i.x,c=0|i.y;return"width"in i?(o=0|i.width,re.command(o>=0,"invalid "+e,r.commandStr)):u=!1,"height"in i?(f=0|i.height,re.command(f>=0,"invalid "+e,r.commandStr)):u=!1,new of(!u&&t&&t.thisDep,!u&&t&&t.contextDep,!u&&t&&t.propDep,(function(e,t){var r=e.shared.context,n=o;"width"in i||(n=t.def(r,".",Ki,"-",s));var a=f;return"height"in i||(a=t.def(r,".",Ji,"-",c)),[s,c,n,a]}))}if(e in a){var l=a[e],d=sf(l,(function(t,r){var n=t.invoke(r,l);re.optional((function(){t.assert(r,n+"&&typeof "+n+'==="object"',"invalid "+e)}));var a=t.shared.context,i=r.def(n,".x|0"),o=r.def(n,".y|0"),f=r.def('"width" in ',n,"?",n,".width|0:","(",a,".",Ki,"-",i,")"),u=r.def('"height" in ',n,"?",n,".height|0:","(",a,".",Ji,"-",o,")");return re.optional((function(){t.assert(r,f+">=0&&"+u+">=0","invalid "+e)})),[i,o,f,u]}));return t&&(d.thisDep=d.thisDep||t.thisDep,d.contextDep=d.contextDep||t.contextDep,d.propDep=d.propDep||t.propDep),d}return t?new of(t.thisDep,t.contextDep,t.propDep,(function(e,t){var r=e.shared.context;return[0,0,t.def(r,".",Ki),t.def(r,".",Ji)]})):null}var o=i(Vi);if(o){var f=o;o=new of(o.thisDep,o.contextDep,o.propDep,(function(e,t){var r=f.append(e,t),n=e.shared.context;return t.set(n,"."+Zi,r[2]),t.set(n,"."+eo,r[3]),r}))}return{viewport:o,scissor_box:i(Pi)}}function R(e,t){var r=e.static;if("string"==typeof r[Ni]&&"string"==typeof r[Hi]){if(Object.keys(t.dynamic).length>0)return null;var n=t.static,a=Object.keys(n);if(a.length>0&&"number"==typeof n[a[0]]){for(var i=[],o=0;o<a.length;++o)re("number"==typeof n[a[o]],"must specify all vertex attribute locations when using vaos"),i.push([0|n[a[o]],a[o]]);return i}}return null}function B(e,t,n){var a=e.static,i=e.dynamic;function o(e){if(e in a){var t=r.id(a[e]);re.optional((function(){l.shader(tf[e],t,re.guessCommand())}));var n=uf((function(){return t}));return n.id=t,n}if(e in i){var o=i[e];return sf(o,(function(t,r){var n=t.invoke(r,o),a=r.def(t.shared.strings,".id(",n,")");return re.optional((function(){r(t.shared.shader,".shader(",tf[e],",",a,",",t.command,");")})),a}))}return null}var f,u=o(Ni),s=o(Hi),c=null;return ff(u)&&ff(s)?(c=l.program(s.id,u.id,null,n),f=uf((function(e,t){return e.link(c)}))):f=new of(u&&u.thisDep||s&&s.thisDep,u&&u.contextDep||s&&s.contextDep,u&&u.propDep||s&&s.propDep,(function(e,t){var r,n=e.shared.shader;r=u?u.append(e,t):t.def(n,".",Ni);var a=n+".program("+(s?s.append(e,t):t.def(n,".",Hi))+","+r;return re.optional((function(){a+=","+e.command})),t.def(a+")")})),{frag:u,vert:s,progVar:f,program:c}}function P(e,t){var r=e.static,n=e.dynamic;function a(){if(Ui in r){var e=r[Ui];nf(e)?e=o.getElements(o.create(e,!0)):e&&(e=o.getElements(e),re.command(e,"invalid elements",t.commandStr));var a=uf((function(t,r){if(e){var n=t.link(e);return t.ELEMENTS=n,n}return t.ELEMENTS=null,null}));return a.value=e,a}if(Ui in n){var i=n[Ui];return sf(i,(function(e,t){var r=e.shared,n=r.isBufferArgs,a=r.elements,o=e.invoke(t,i),f=t.def("null"),u=t.def(n,"(",o,")"),s=e.cond(u).then(f,"=",a,".createStream(",o,");").else(f,"=",a,".getElements(",o,");");return re.optional((function(){e.assert(s.else,"!"+o+"||"+f,"invalid elements")})),t.entry(s),t.exit(e.cond(u).then(a,".destroyStream(",f,");")),e.ELEMENTS=f,f}))}return null}var i=a();function f(){if(qi in r){var e=r[qi];return re.commandParameter(e,Gt,"invalid primitve",t.commandStr),uf((function(t,r){return Gt[e]}))}if(qi in n){var a=n[qi];return sf(a,(function(e,t){var r=e.constants.primTypes,n=e.invoke(t,a);return re.optional((function(){e.assert(t,n+" in "+r,"invalid primitive, must be one of "+Object.keys(Gt))})),t.def(r,"[",n,"]")}))}return i?ff(i)?i.value?uf((function(e,t){return t.def(e.ELEMENTS,".primType")})):uf((function(){return Bo})):new of(i.thisDep,i.contextDep,i.propDep,(function(e,t){var r=e.ELEMENTS;return t.def(r,"?",r,".primType:",Bo)})):null}function u(e,a){if(e in r){var o=0|r[e];return re.command(!a||o>=0,"invalid "+e,t.commandStr),uf((function(e,t){return a&&(e.OFFSET=o),o}))}if(e in n){var f=n[e];return sf(f,(function(t,r){var n=t.invoke(r,f);return a&&(t.OFFSET=n,re.optional((function(){t.assert(r,n+">=0","invalid "+e)}))),n}))}return a&&i?uf((function(e,t){return e.OFFSET="0",0})):null}var s=u(Gi,!0);function c(){if(Wi in r){var e=0|r[Wi];return re.command("number"==typeof e&&e>=0,"invalid vertex count",t.commandStr),uf((function(){return e}))}if(Wi in n){var a=n[Wi];return sf(a,(function(e,t){var r=e.invoke(t,a);return re.optional((function(){e.assert(t,"typeof "+r+'==="number"&&'+r+">=0&&"+r+"===("+r+"|0)","invalid vertex count")})),r}))}if(i){if(ff(i)){if(i)return s?new of(s.thisDep,s.contextDep,s.propDep,(function(e,t){var r=t.def(e.ELEMENTS,".vertCount-",e.OFFSET);return re.optional((function(){e.assert(t,r+">=0","invalid vertex offset/element buffer too small")})),r})):uf((function(e,t){return t.def(e.ELEMENTS,".vertCount")}));var o=uf((function(){return-1}));return re.optional((function(){o.MISSING=!0})),o}var f=new of(i.thisDep||s.thisDep,i.contextDep||s.contextDep,i.propDep||s.propDep,(function(e,t){var r=e.ELEMENTS;return e.OFFSET?t.def(r,"?",r,".vertCount-",e.OFFSET,":-1"):t.def(r,"?",r,".vertCount:-1")}));return re.optional((function(){f.DYNAMIC=!0})),f}return null}return{elements:i,primitive:f(),count:c(),instances:u(Qi,!1),offset:s}}function V(e,t){var r=e.static,n=e.dynamic,i={};return A.forEach((function(e){var o=S(e);function f(t,a){if(e in r){var f=t(r[e]);i[o]=uf((function(){return f}))}else if(e in n){var u=n[e];i[o]=sf(u,(function(e,t){return a(e,t,e.invoke(t,u))}))}}switch(e){case Ai:case mi:case di:case Ci:case gi:case Bi:case Oi:case Ti:case ji:case xi:return f((function(r){return re.commandType(r,"boolean",e,t.commandStr),r}),(function(t,r,n){return re.optional((function(){t.assert(r,"typeof "+n+'==="boolean"',"invalid flag "+e,t.commandStr)})),n}));case vi:return f((function(r){return re.commandParameter(r,Zo,"invalid "+e,t.commandStr),Zo[r]}),(function(t,r,n){var a=t.constants.compareFuncs;return re.optional((function(){t.assert(r,n+" in "+a,"invalid "+e+", must be one of "+Object.keys(Zo))})),r.def(a,"[",n,"]")}));case yi:return f((function(e){return re.command(cr(e)&&2===e.length&&"number"==typeof e[0]&&"number"==typeof e[1]&&e[0]<=e[1],"depth range is 2d array",t.commandStr),e}),(function(e,t,r){return re.optional((function(){e.assert(t,e.shared.isArrayLike+"("+r+")&&"+r+".length===2&&typeof "+r+'[0]==="number"&&typeof '+r+'[1]==="number"&&'+r+"[0]<="+r+"[1]","depth range must be a 2d array")})),[t.def("+",r,"[0]"),t.def("+",r,"[1]")]}));case bi:return f((function(e){re.commandType(e,"object","blend.func",t.commandStr);var r="srcRGB"in e?e.srcRGB:e.src,n="srcAlpha"in e?e.srcAlpha:e.src,a="dstRGB"in e?e.dstRGB:e.dst,i="dstAlpha"in e?e.dstAlpha:e.dst;return re.commandParameter(r,Ko,o+".srcRGB",t.commandStr),re.commandParameter(n,Ko,o+".srcAlpha",t.commandStr),re.commandParameter(a,Ko,o+".dstRGB",t.commandStr),re.commandParameter(i,Ko,o+".dstAlpha",t.commandStr),re.command(-1===Jo.indexOf(r+", "+a),"unallowed blending combination (srcRGB, dstRGB) = ("+r+", "+a+")",t.commandStr),[Ko[r],Ko[a],Ko[n],Ko[i]]}),(function(t,r,n){var a=t.constants.blendFuncs;function i(i,o){var f=r.def('"',i,o,'" in ',n,"?",n,".",i,o,":",n,".",i);return re.optional((function(){t.assert(r,f+" in "+a,"invalid "+e+"."+i+o+", must be one of "+Object.keys(Ko))})),f}re.optional((function(){t.assert(r,n+"&&typeof "+n+'==="object"',"invalid blend func, must be an object")}));var o=i("src","RGB"),f=i("dst","RGB");re.optional((function(){var e=t.constants.invalidBlendCombinations;t.assert(r,e+".indexOf("+o+'+", "+'+f+") === -1 ","unallowed blending combination for (srcRGB, dstRGB)")}));var u=r.def(a,"[",o,"]"),s=r.def(a,"[",i("src","Alpha"),"]");return[u,r.def(a,"[",f,"]"),s,r.def(a,"[",i("dst","Alpha"),"]")]}));case pi:return f((function(r){return"string"==typeof r?(re.commandParameter(r,g,"invalid "+e,t.commandStr),[g[r],g[r]]):"object"==typeof r?(re.commandParameter(r.rgb,g,e+".rgb",t.commandStr),re.commandParameter(r.alpha,g,e+".alpha",t.commandStr),[g[r.rgb],g[r.alpha]]):void re.commandRaise("invalid blend.equation",t.commandStr)}),(function(t,r,n){var a=t.constants.blendEquations,i=r.def(),o=r.def(),f=t.cond("typeof ",n,'==="string"');return re.optional((function(){function r(e,r,n){t.assert(e,n+" in "+a,"invalid "+r+", must be one of "+Object.keys(g))}r(f.then,e,n),t.assert(f.else,n+"&&typeof "+n+'==="object"',"invalid "+e),r(f.else,e+".rgb",n+".rgb"),r(f.else,e+".alpha",n+".alpha")})),f.then(i,"=",o,"=",a,"[",n,"];"),f.else(i,"=",a,"[",n,".rgb];",o,"=",a,"[",n,".alpha];"),r(f),[i,o]}));case hi:return f((function(e){return re.command(cr(e)&&4===e.length,"blend.color must be a 4d array",t.commandStr),Oe(4,(function(t){return+e[t]}))}),(function(e,t,r){return re.optional((function(){e.assert(t,e.shared.isArrayLike+"("+r+")&&"+r+".length===4","blend.color must be a 4d array")})),Oe(4,(function(e){return t.def("+",r,"[",e,"]")}))}));case Mi:return f((function(e){return re.commandType(e,"number",o,t.commandStr),0|e}),(function(e,t,r){return re.optional((function(){e.assert(t,"typeof "+r+'==="number"',"invalid stencil.mask")})),t.def(r,"|0")}));case Fi:return f((function(r){re.commandType(r,"object",o,t.commandStr);var n=r.cmp||"keep",a=r.ref||0,i="mask"in r?r.mask:-1;return re.commandParameter(n,Zo,e+".cmp",t.commandStr),re.commandType(a,"number",e+".ref",t.commandStr),re.commandType(i,"number",e+".mask",t.commandStr),[Zo[n],a,i]}),(function(e,t,r){var n=e.constants.compareFuncs;return re.optional((function(){function a(){e.assert(t,Array.prototype.join.call(arguments,""),"invalid stencil.func")}a(r+"&&typeof ",r,'==="object"'),a('!("cmp" in ',r,")||(",r,".cmp in ",n,")")})),[t.def('"cmp" in ',r,"?",n,"[",r,".cmp]",":",qo),t.def(r,".ref|0"),t.def('"mask" in ',r,"?",r,".mask|0:-1")]}));case zi:case Ri:return f((function(r){re.commandType(r,"object",o,t.commandStr);var n=r.fail||"keep",a=r.zfail||"keep",i=r.zpass||"keep";return re.commandParameter(n,ef,e+".fail",t.commandStr),re.commandParameter(a,ef,e+".zfail",t.commandStr),re.commandParameter(i,ef,e+".zpass",t.commandStr),[e===Ri?Vo:Po,ef[n],ef[a],ef[i]]}),(function(t,r,n){var a=t.constants.stencilOps;function i(i){return re.optional((function(){t.assert(r,'!("'+i+'" in '+n+")||("+n+"."+i+" in "+a+")","invalid "+e+"."+i+", must be one of "+Object.keys(ef))})),r.def('"',i,'" in ',n,"?",a,"[",n,".",i,"]:",qo)}return re.optional((function(){t.assert(r,n+"&&typeof "+n+'==="object"',"invalid "+e)})),[e===Ri?Vo:Po,i("fail"),i("zfail"),i("zpass")]}));case Ei:return f((function(e){re.commandType(e,"object",o,t.commandStr);var r=0|e.factor,n=0|e.units;return re.commandType(r,"number",o+".factor",t.commandStr),re.commandType(n,"number",o+".units",t.commandStr),[r,n]}),(function(t,r,n){return re.optional((function(){t.assert(r,n+"&&typeof "+n+'==="object"',"invalid "+e)})),[r.def(n,".factor|0"),r.def(n,".units|0")]}));case _i:return f((function(e){var r=0;return"front"===e?r=Po:"back"===e&&(r=Vo),re.command(!!r,o,t.commandStr),r}),(function(e,t,r){return re.optional((function(){e.assert(t,r+'==="front"||'+r+'==="back"',"invalid cull.face")})),t.def(r,'==="front"?',Po,":",Vo)}));case Si:return f((function(e){return re.command("number"==typeof e&&e>=a.lineWidthDims[0]&&e<=a.lineWidthDims[1],"invalid line width, must be a positive number between "+a.lineWidthDims[0]+" and "+a.lineWidthDims[1],t.commandStr),e}),(function(e,t,r){return re.optional((function(){e.assert(t,"typeof "+r+'==="number"&&'+r+">="+a.lineWidthDims[0]+"&&"+r+"<="+a.lineWidthDims[1],"invalid line width")})),r}));case ki:return f((function(e){return re.commandParameter(e,rf,o,t.commandStr),rf[e]}),(function(e,t,r){return re.optional((function(){e.assert(t,r+'==="cw"||'+r+'==="ccw"',"invalid frontFace, must be one of cw,ccw")})),t.def(r+'==="cw"?'+Io+":"+Lo)}));case wi:return f((function(e){return re.command(cr(e)&&4===e.length,"color.mask must be length 4 array",t.commandStr),e.map((function(e){return!!e}))}),(function(e,t,r){return re.optional((function(){e.assert(t,e.shared.isArrayLike+"("+r+")&&"+r+".length===4","invalid color.mask")})),Oe(4,(function(e){return"!!"+r+"["+e+"]"}))}));case Di:return f((function(e){re.command("object"==typeof e&&e,o,t.commandStr);var r="value"in e?e.value:1,n=!!e.invert;return re.command("number"==typeof r&&r>=0&&r<=1,"sample.coverage.value must be a number between 0 and 1",t.commandStr),[r,n]}),(function(e,t,r){return re.optional((function(){e.assert(t,r+"&&typeof "+r+'==="object"',"invalid sample.coverage")})),[t.def('"value" in ',r,"?+",r,".value:1"),t.def("!!",r,".invert")]}))}})),i}function I(e,t){var r=e.static,n=e.dynamic,a={};return Object.keys(r).forEach((function(e){var n,i=r[e];if("number"==typeof i||"boolean"==typeof i)n=uf((function(){return i}));else if("function"==typeof i){var o=i._reglType;"texture2d"===o||"textureCube"===o?n=uf((function(e){return e.link(i)})):"framebuffer"===o||"framebufferCube"===o?(re.command(i.color.length>0,'missing color attachment for framebuffer sent to uniform "'+e+'"',t.commandStr),n=uf((function(e){return e.link(i.color[0])}))):re.commandRaise('invalid data for uniform "'+e+'"',t.commandStr)}else cr(i)?n=uf((function(t){return t.global.def("[",Oe(i.length,(function(r){return re.command("number"==typeof i[r]||"boolean"==typeof i[r],"invalid uniform "+e,t.commandStr),i[r]})),"]")})):re.commandRaise('invalid or missing data for uniform "'+e+'"',t.commandStr);n.value=i,a[e]=n})),Object.keys(n).forEach((function(e){var t=n[e];a[e]=sf(t,(function(e,r){return e.invoke(r,t)}))})),a}function L(e,t){var n=e.static,a=e.dynamic,o={};return Object.keys(n).forEach((function(e){var a=n[e],f=r.id(e),u=new b;if(nf(a))u.state=ni,u.buffer=i.getBuffer(i.create(a,io,!1,!0)),u.type=0;else{var s=i.getBuffer(a);if(s)u.state=ni,u.buffer=s,u.type=0;else if(re.command("object"==typeof a&&a,"invalid data for attribute "+e,t.commandStr),"constant"in a){var c=a.constant;u.buffer="null",u.state=ai,"number"==typeof c?u.x=c:(re.command(cr(c)&&c.length>0&&c.length<=4,"invalid constant for attribute "+e,t.commandStr),ti.forEach((function(e,t){t<c.length&&(u[e]=c[t])})))}else{s=nf(a.buffer)?i.getBuffer(i.create(a.buffer,io,!1,!0)):i.getBuffer(a.buffer),re.command(!!s,'missing buffer for attribute "'+e+'"',t.commandStr);var l=0|a.offset;re.command(l>=0,'invalid offset for attribute "'+e+'"',t.commandStr);var d=0|a.stride;re.command(d>=0&&d<256,'invalid stride for attribute "'+e+'", must be integer betweeen [0, 255]',t.commandStr);var m=0|a.size;re.command(!("size"in a)||m>0&&m<=4,'invalid size for attribute "'+e+'", must be 1,2,3,4',t.commandStr);var h=!!a.normalized,p=0;"type"in a&&(re.commandParameter(a.type,Ft,"invalid type for attribute "+e,t.commandStr),p=Ft[a.type]);var g=0|a.divisor;"divisor"in a&&(re.command(0===g||v,'cannot specify divisor for attribute "'+e+'", instancing not supported',t.commandStr),re.command(g>=0,'invalid divisor for attribute "'+e+'"',t.commandStr)),re.optional((function(){var r=t.commandStr,n=["buffer","offset","divisor","normalized","type","size","stride"];Object.keys(a).forEach((function(t){re.command(n.indexOf(t)>=0,'unknown parameter "'+t+'" for attribute pointer "'+e+'" (valid parameters are '+n+")",r)}))})),u.buffer=s,u.state=ni,u.size=m,u.normalized=h,u.type=p||s.dtype,u.offset=l,u.stride=d,u.divisor=g}}o[e]=uf((function(e,t){var r=e.attribCache;if(f in r)return r[f];var n={isStream:!1};return Object.keys(u).forEach((function(e){n[e]=u[e]})),u.buffer&&(n.buffer=e.link(u.buffer),n.type=n.type||n.buffer+".dtype"),r[f]=n,n}))})),Object.keys(a).forEach((function(e){var t=a[e];function r(r,n){var a=r.invoke(n,t),i=r.shared,o=r.constants,f=i.isBufferArgs,u=i.buffer;re.optional((function(){r.assert(n,a+"&&(typeof "+a+'==="object"||typeof '+a+'==="function")&&('+f+"("+a+")||"+u+".getBuffer("+a+")||"+u+".getBuffer("+a+".buffer)||"+f+"("+a+'.buffer)||("constant" in '+a+"&&(typeof "+a+'.constant==="number"||'+i.isArrayLike+"("+a+".constant))))",'invalid dynamic attribute "'+e+'"')}));var s={isStream:n.def(!1)},c=new b;c.state=ni,Object.keys(c).forEach((function(e){s[e]=n.def(""+c[e])}));var l=s.buffer,d=s.type;function m(e){n(s[e],"=",a,".",e,"|0;")}return n("if(",f,"(",a,")){",s.isStream,"=true;",l,"=",u,".createStream(",io,",",a,");",d,"=",l,".dtype;","}else{",l,"=",u,".getBuffer(",a,");","if(",l,"){",d,"=",l,".dtype;",'}else if("constant" in ',a,"){",s.state,"=",ai,";","if(typeof "+a+'.constant === "number"){',s[ti[0]],"=",a,".constant;",ti.slice(1).map((function(e){return s[e]})).join("="),"=0;","}else{",ti.map((function(e,t){return s[e]+"="+a+".constant.length>"+t+"?"+a+".constant["+t+"]:0;"})).join(""),"}}else{","if(",f,"(",a,".buffer)){",l,"=",u,".createStream(",io,",",a,".buffer);","}else{",l,"=",u,".getBuffer(",a,".buffer);","}",d,'="type" in ',a,"?",o.glTypes,"[",a,".type]:",l,".dtype;",s.normalized,"=!!",a,".normalized;"),m("size"),m("offset"),m("stride"),m("divisor"),n("}}"),n.exit("if(",s.isStream,"){",u,".destroyStream(",l,");","}"),s}o[e]=sf(t,r)})),o}function H(e,t){var r=e.static,n=e.dynamic;if(Yi in r){var a=r[Yi];return null!==a&&null===c.getVAO(a)&&(a=c.createVAO(a)),uf((function(e){return e.link(c.getVAO(a))}))}if(Yi in n){var i=n[Yi];return sf(i,(function(e,t){var r=e.invoke(t,i);return t.def(e.shared.vao+".getVAO("+r+")")}))}return null}function N(e){var t=e.static,r=e.dynamic,n={};return Object.keys(t).forEach((function(e){var r=t[e];n[e]=uf((function(e,t){return"number"==typeof r||"boolean"==typeof r?""+r:e.link(r)}))})),Object.keys(r).forEach((function(e){var t=r[e];n[e]=sf(t,(function(e,r){return e.invoke(r,t)}))})),n}function U(e,t,r,a,i){var o=e.static,f=e.dynamic;re.optional((function(){var e=[Li,Hi,Ni,Ui,qi,Gi,Wi,Qi,Ii,Yi].concat(A);function t(t){Object.keys(t).forEach((function(t){re.command(e.indexOf(t)>=0,'unknown parameter "'+t+'"',i.commandStr)}))}t(o),t(f)}));var u=R(e,t),s=F(e,i),l=z(e,s,i),d=P(e,i),m=V(e,i),h=B(e,i,u);function p(e){var t=l[e];t&&(m[e]=t)}p(Vi),p(S(Pi));var b=Object.keys(m).length>0,g={framebuffer:s,draw:d,shader:h,state:m,dirty:b,scopeVAO:null,drawVAO:null,useVAO:!1,attributes:{}};if(g.profile=M(e,i),g.uniforms=I(r,i),g.drawVAO=g.scopeVAO=H(e,i),!g.drawVAO&&h.program&&!u&&n.angle_instanced_arrays){var v=!0,y=h.program.attributes.map((function(e){var r=t.static[e];return v=v&&!!r,r}));if(v&&y.length>0){var x=c.getVAO(c.createVAO(y));g.drawVAO=new of(null,null,null,(function(e,t){return e.link(x)})),g.useVAO=!0}}return u?g.useVAO=!0:g.attributes=L(t,i),g.context=N(a,i),g}function q(e,t,r){var n=e.shared.context,a=e.scope();Object.keys(r).forEach((function(i){t.save(n,"."+i);var o=r[i].append(e,t);Array.isArray(o)?a(n,".",i,"=[",o.join(),"];"):a(n,".",i,"=",o,";")})),t(a)}function W(e,t,r,n){var a,i=e.shared,o=i.gl,f=i.framebuffer;y&&(a=t.def(i.extensions,".webgl_draw_buffers"));var u,s=e.constants,c=s.drawBuffer,l=s.backBuffer;u=r?r.append(e,t):t.def(f,".next"),n||t("if(",u,"!==",f,".cur){"),t("if(",u,"){",o,".bindFramebuffer(",$o,",",u,".framebuffer);"),y&&t(a,".drawBuffersWEBGL(",c,"[",u,".colorAttachments.length]);"),t("}else{",o,".bindFramebuffer(",$o,",null);"),y&&t(a,".drawBuffersWEBGL(",l,");"),t("}",f,".cur=",u,";"),n||t("}")}function G(e,t,r){var n=e.shared,a=n.gl,i=e.current,o=e.next,f=n.current,u=n.next,s=e.cond(f,".dirty");A.forEach((function(t){var n,c,l=S(t);if(!(l in r.state))if(l in o){n=o[l],c=i[l];var d=Oe(x[l].length,(function(e){return s.def(n,"[",e,"]")}));s(e.cond(d.map((function(e,t){return e+"!=="+c+"["+t+"]"})).join("||")).then(a,".",k[l],"(",d,");",d.map((function(e,t){return c+"["+t+"]="+e})).join(";"),";"))}else{n=s.def(u,".",l);var m=e.cond(n,"!==",f,".",l);s(m),l in _?m(e.cond(n).then(a,".enable(",_[l],");").else(a,".disable(",_[l],");"),f,".",l,"=",n,";"):m(a,".",k[l],"(",n,");",f,".",l,"=",n,";")}})),0===Object.keys(r.state).length&&s(f,".dirty=false;"),t(s)}function Q(e,t,r,n){var a=e.shared,i=e.current,o=a.current,f=a.gl;af(Object.keys(r)).forEach((function(a){var u=r[a];if(!n||n(u)){var s=u.append(e,t);if(_[a]){var c=_[a];ff(u)?t(f,s?".enable(":".disable(",c,");"):t(e.cond(s).then(f,".enable(",c,");").else(f,".disable(",c,");")),t(o,".",a,"=",s,";")}else if(cr(s)){var l=i[a];t(f,".",k[a],"(",s,");",s.map((function(e,t){return l+"["+t+"]="+e})).join(";"),";")}else t(f,".",k[a],"(",s,");",o,".",a,"=",s,";")}}))}function Y(e,t){v&&(e.instancing=t.def(e.shared.extensions,".angle_instanced_arrays"))}function $(e,t,r,n,a){var i,o,f,u=e.shared,s=e.stats,c=u.current,l=u.timer,d=r.profile;function m(){return"undefined"==typeof performance?"Date.now()":"performance.now()"}function p(e){e(i=t.def(),"=",m(),";"),"string"==typeof a?e(s,".count+=",a,";"):e(s,".count++;"),h&&(n?e(o=t.def(),"=",l,".getNumPendingQueries();"):e(l,".beginQuery(",s,");"))}function b(e){e(s,".cpuTime+=",m(),"-",i,";"),h&&(n?e(l,".pushScopeStats(",o,",",l,".getNumPendingQueries(),",s,");"):e(l,".endQuery();"))}function g(e){var r=t.def(c,".profile");t(c,".profile=",e,";"),t.exit(c,".profile=",r,";")}if(d){if(ff(d))return void(d.enable?(p(t),b(t.exit),g("true")):g("false"));g(f=d.append(e,t))}else f=t.def(c,".profile");var v=e.block();p(v),t("if(",f,"){",v,"}");var y=e.block();b(y),t.exit("if(",f,"){",y,"}")}function X(e,t,r,n,a){var i=e.shared;function o(e){switch(e){case xo:case ko:case To:return 2;case wo:case So:case jo:return 3;case Ao:case Oo:case Do:return 4;default:return 1}}function f(r,n,a){var o=i.gl,f=t.def(r,".location"),u=t.def(i.attributes,"[",f,"]"),s=a.state,c=a.buffer,l=[a.x,a.y,a.z,a.w],d=["buffer","normalized","offset","stride"];function m(){t("if(!",u,".buffer){",o,".enableVertexAttribArray(",f,");}");var r,i=a.type;if(r=a.size?t.def(a.size,"||",n):n,t("if(",u,".type!==",i,"||",u,".size!==",r,"||",d.map((function(e){return u+"."+e+"!=="+a[e]})).join("||"),"){",o,".bindBuffer(",io,",",c,".buffer);",o,".vertexAttribPointer(",[f,r,i,a.normalized,a.stride,a.offset],");",u,".type=",i,";",u,".size=",r,";",d.map((function(e){return u+"."+e+"="+a[e]+";"})).join(""),"}"),v){var s=a.divisor;t("if(",u,".divisor!==",s,"){",e.instancing,".vertexAttribDivisorANGLE(",[f,s],");",u,".divisor=",s,";}")}}function h(){t("if(",u,".buffer){",o,".disableVertexAttribArray(",f,");",u,".buffer=null;","}if(",ti.map((function(e,t){return u+"."+e+"!=="+l[t]})).join("||"),"){",o,".vertexAttrib4f(",f,",",l,");",ti.map((function(e,t){return u+"."+e+"="+l[t]+";"})).join(""),"}")}s===ni?m():s===ai?h():(t("if(",s,"===",ni,"){"),m(),t("}else{"),h(),t("}"))}n.forEach((function(n){var i,u=n.name,s=r.attributes[u];if(s){if(!a(s))return;i=s.append(e,t)}else{if(!a(cf))return;var c=e.scopeAttrib(u);re.optional((function(){e.assert(t,c+".state","missing attribute "+u)})),i={},Object.keys(new b).forEach((function(e){i[e]=t.def(c,".",e)}))}f(e.link(n),o(n.info.type),i)}))}function K(e,t,n,a,i){for(var o,f=e.shared,u=f.gl,s=0;s<a.length;++s){var c,l=a[s],d=l.name,m=l.info.type,h=n.uniforms[d],p=e.link(l)+".location";if(h){if(!i(h))continue;if(ff(h)){var b=h.value;if(re.command(null!=b,'missing uniform "'+d+'"',e.commandStr),m===zo||m===Ro){re.command("function"==typeof b&&(m===zo&&("texture2d"===b._reglType||"framebuffer"===b._reglType)||m===Ro&&("textureCube"===b._reglType||"framebufferCube"===b._reglType)),"invalid texture for uniform "+d,e.commandStr);var g=e.link(b._texture||b.color[0]._texture);t(u,".uniform1i(",p,",",g+".bind());"),t.exit(g,".unbind();")}else if(m===Co||m===Mo||m===Fo){re.optional((function(){re.command(cr(b),"invalid matrix for uniform "+d,e.commandStr),re.command(m===Co&&4===b.length||m===Mo&&9===b.length||m===Fo&&16===b.length,"invalid length for matrix uniform "+d,e.commandStr)}));var v=e.global.def("new Float32Array(["+Array.prototype.slice.call(b)+"])"),y=2;m===Mo?y=3:m===Fo&&(y=4),t(u,".uniformMatrix",y,"fv(",p,",false,",v,");")}else{switch(m){case yo:re.commandType(b,"number","uniform "+d,e.commandStr),o="1f";break;case xo:re.command(cr(b)&&2===b.length,"uniform "+d,e.commandStr),o="2f";break;case wo:re.command(cr(b)&&3===b.length,"uniform "+d,e.commandStr),o="3f";break;case Ao:re.command(cr(b)&&4===b.length,"uniform "+d,e.commandStr),o="4f";break;case Eo:re.commandType(b,"boolean","uniform "+d,e.commandStr),o="1i";break;case _o:re.commandType(b,"number","uniform "+d,e.commandStr),o="1i";break;case To:case ko:re.command(cr(b)&&2===b.length,"uniform "+d,e.commandStr),o="2i";break;case jo:case So:re.command(cr(b)&&3===b.length,"uniform "+d,e.commandStr),o="3i";break;case Do:case Oo:re.command(cr(b)&&4===b.length,"uniform "+d,e.commandStr),o="4i"}t(u,".uniform",o,"(",p,",",cr(b)?Array.prototype.slice.call(b):b,");")}continue}c=h.append(e,t)}else{if(!i(cf))continue;c=t.def(f.uniforms,"[",r.id(d),"]")}m===zo?(re(!Array.isArray(c),"must specify a scalar prop for textures"),t("if(",c,"&&",c,'._reglType==="framebuffer"){',c,"=",c,".color[0];","}")):m===Ro&&(re(!Array.isArray(c),"must specify a scalar prop for cube maps"),t("if(",c,"&&",c,'._reglType==="framebufferCube"){',c,"=",c,".color[0];","}")),re.optional((function(){function r(r,n){e.assert(t,r,'bad data or missing for uniform "'+d+'".  '+n)}function n(e){re(!Array.isArray(c),"must not specify an array type for uniform"),r("typeof "+c+'==="'+e+'"',"invalid type, expected "+e)}function a(t,n){Array.isArray(c)?re(c.length===t,"must have length "+t):r(f.isArrayLike+"("+c+")&&"+c+".length==="+t,"invalid vector, should have length "+t,e.commandStr)}function i(t){re(!Array.isArray(c),"must not specify a value type"),r("typeof "+c+'==="function"&&'+c+'._reglType==="texture'+(t===fo?"2d":"Cube")+'"',"invalid texture type",e.commandStr)}switch(m){case _o:n("number");break;case ko:a(2,"number");break;case So:a(3,"number");break;case Oo:a(4,"number");break;case yo:n("number");break;case xo:a(2,"number");break;case wo:a(3,"number");break;case Ao:a(4,"number");break;case Eo:n("boolean");break;case To:a(2,"boolean");break;case jo:a(3,"boolean");break;case Do:a(4,"boolean");break;case Co:a(4,"number");break;case Mo:a(9,"number");break;case Fo:a(16,"number");break;case zo:i(fo);break;case Ro:i(uo)}}));var x=1;switch(m){case zo:case Ro:var w=t.def(c,"._texture");t(u,".uniform1i(",p,",",w,".bind());"),t.exit(w,".unbind();");continue;case _o:case Eo:o="1i";break;case ko:case To:o="2i",x=2;break;case So:case jo:o="3i",x=3;break;case Oo:case Do:o="4i",x=4;break;case yo:o="1f";break;case xo:o="2f",x=2;break;case wo:o="3f",x=3;break;case Ao:o="4f",x=4;break;case Co:o="Matrix2fv";break;case Mo:o="Matrix3fv";break;case Fo:o="Matrix4fv"}if(t(u,".uniform",o,"(",p,","),"M"===o.charAt(0)){var A=Math.pow(m-Co+2,2),_=e.global.def("new Float32Array(",A,")");Array.isArray(c)?t("false,(",Oe(A,(function(e){return _+"["+e+"]="+c[e]})),",",_,")"):t("false,(Array.isArray(",c,")||",c," instanceof Float32Array)?",c,":(",Oe(A,(function(e){return _+"["+e+"]="+c+"["+e+"]"})),",",_,")")}else x>1?t(Oe(x,(function(e){return Array.isArray(c)?c[e]:c+"["+e+"]"}))):(re(!Array.isArray(c),"uniform value must not be an array"),t(c));t(");")}}function J(e,t,r,n){var a=e.shared,i=a.gl,o=a.draw,f=n.draw;function u(){var a,u=f.elements,s=t;return u?((u.contextDep&&n.contextDynamic||u.propDep)&&(s=r),a=u.append(e,s)):a=s.def(o,".",Ui),a&&s("if("+a+")"+i+".bindBuffer("+oo+","+a+".buffer.buffer);"),a}function s(){var a,i=f.count,u=t;return i?((i.contextDep&&n.contextDynamic||i.propDep)&&(u=r),a=i.append(e,u),re.optional((function(){i.MISSING&&e.assert(t,"false","missing vertex count"),i.DYNAMIC&&e.assert(u,a+">=0","missing vertex count")}))):(a=u.def(o,".",Wi),re.optional((function(){e.assert(u,a+">=0","missing vertex count")}))),a}var c=u();function l(a){var i=f[a];return i?i.contextDep&&n.contextDynamic||i.propDep?i.append(e,r):i.append(e,t):t.def(o,".",a)}var d,m,h=l(qi),p=l(Gi),b=s();if("number"==typeof b){if(0===b)return}else r("if(",b,"){"),r.exit("}");v&&(d=l(Qi),m=e.instancing);var g=c+".type",y=f.elements&&ff(f.elements);function x(){function e(){r(m,".drawElementsInstancedANGLE(",[h,b,g,p+"<<(("+g+"-"+ri+")>>1)",d],");")}function t(){r(m,".drawArraysInstancedANGLE(",[h,p,b,d],");")}c?y?e():(r("if(",c,"){"),e(),r("}else{"),t(),r("}")):t()}function w(){function e(){r(i+".drawElements("+[h,b,g,p+"<<(("+g+"-"+ri+")>>1)"]+");")}function t(){r(i+".drawArrays("+[h,p,b]+");")}c?y?e():(r("if(",c,"){"),e(),r("}else{"),t(),r("}")):t()}v&&("number"!=typeof d||d>=0)?"string"==typeof d?(r("if(",d,">0){"),x(),r("}else if(",d,"<0){"),w(),r("}")):x():w()}function Z(e,t,r,n,a){var i=C(),o=i.proc("body",a);return re.optional((function(){i.commandStr=t.commandStr,i.command=i.link(t.commandStr)})),v&&(i.instancing=o.def(i.shared.extensions,".angle_instanced_arrays")),e(i,o,r,n),i.compile().body}function ee(e,t,r,n){Y(e,t),r.useVAO?r.drawVAO?t(e.shared.vao,".setVAO(",r.drawVAO.append(e,t),");"):t(e.shared.vao,".setVAO(",e.shared.vao,".targetVAO);"):(t(e.shared.vao,".setVAO(null);"),X(e,t,r,n.attributes,(function(){return!0}))),K(e,t,r,n.uniforms,(function(){return!0})),J(e,t,t,r)}function te(e,t){var r=e.proc("draw",1);Y(e,r),q(e,r,t.context),W(e,r,t.framebuffer),G(e,r,t),Q(e,r,t.state),$(e,r,t,!1,!0);var n=t.shader.progVar.append(e,r);if(r(e.shared.gl,".useProgram(",n,".program);"),t.shader.program)ee(e,r,t,t.shader.program);else{r(e.shared.vao,".setVAO(null);");var a=e.global.def("{}"),i=r.def(n,".id"),o=r.def(a,"[",i,"]");r(e.cond(o).then(o,".call(this,a0);").else(o,"=",a,"[",i,"]=",e.link((function(r){return Z(ee,e,t,r,1)})),"(",n,");",o,".call(this,a0);"))}Object.keys(t.state).length>0&&r(e.shared.current,".dirty=true;")}function ne(e,t,r,n){function a(){return!0}e.batchId="a1",Y(e,t),X(e,t,r,n.attributes,a),K(e,t,r,n.uniforms,a),J(e,t,t,r)}function ae(e,t,r,n){Y(e,t);var a=r.contextDep,i=t.def(),o="a0",f="a1",u=t.def();e.shared.props=u,e.batchId=i;var s=e.scope(),c=e.scope();function l(e){return e.contextDep&&a||e.propDep}function d(e){return!l(e)}if(t(s.entry,"for(",i,"=0;",i,"<",f,";++",i,"){",u,"=",o,"[",i,"];",c,"}",s.exit),r.needsContext&&q(e,c,r.context),r.needsFramebuffer&&W(e,c,r.framebuffer),Q(e,c,r.state,l),r.profile&&l(r.profile)&&$(e,c,r,!1,!0),n)r.useVAO?r.drawVAO?l(r.drawVAO)?c(e.shared.vao,".setVAO(",r.drawVAO.append(e,c),");"):s(e.shared.vao,".setVAO(",r.drawVAO.append(e,s),");"):s(e.shared.vao,".setVAO(",e.shared.vao,".targetVAO);"):(s(e.shared.vao,".setVAO(null);"),X(e,s,r,n.attributes,d),X(e,c,r,n.attributes,l)),K(e,s,r,n.uniforms,d),K(e,c,r,n.uniforms,l),J(e,s,c,r);else{var m=e.global.def("{}"),h=r.shader.progVar.append(e,c),p=c.def(h,".id"),b=c.def(m,"[",p,"]");c(e.shared.gl,".useProgram(",h,".program);","if(!",b,"){",b,"=",m,"[",p,"]=",e.link((function(t){return Z(ne,e,r,t,2)})),"(",h,");}",b,".call(this,a0[",i,"],",i,");")}}function ie(e,t){var r=e.proc("batch",2);e.batchId="0",Y(e,r);var n=!1,a=!0;Object.keys(t.context).forEach((function(e){n=n||t.context[e].propDep})),n||(q(e,r,t.context),a=!1);var i=t.framebuffer,o=!1;function f(e){return e.contextDep&&n||e.propDep}i?(i.propDep?n=o=!0:i.contextDep&&n&&(o=!0),o||W(e,r,i)):W(e,r,null),t.state.viewport&&t.state.viewport.propDep&&(n=!0),G(e,r,t),Q(e,r,t.state,(function(e){return!f(e)})),t.profile&&f(t.profile)||$(e,r,t,!1,"a1"),t.contextDep=n,t.needsContext=a,t.needsFramebuffer=o;var u=t.shader.progVar;if(u.contextDep&&n||u.propDep)ae(e,r,t,null);else{var s=u.append(e,r);if(r(e.shared.gl,".useProgram(",s,".program);"),t.shader.program)ae(e,r,t,t.shader.program);else{r(e.shared.vao,".setVAO(null);");var c=e.global.def("{}"),l=r.def(s,".id"),d=r.def(c,"[",l,"]");r(e.cond(d).then(d,".call(this,a0,a1);").else(d,"=",c,"[",l,"]=",e.link((function(r){return Z(ae,e,t,r,2)})),"(",s,");",d,".call(this,a0,a1);"))}}Object.keys(t.state).length>0&&r(e.shared.current,".dirty=true;")}function oe(e,t){var n=e.proc("scope",3);e.batchId="a2";var a=e.shared,i=a.current;function o(r){var i=t.shader[r];i&&n.set(a.shader,"."+r,i.append(e,n))}q(e,n,t.context),t.framebuffer&&t.framebuffer.append(e,n),af(Object.keys(t.state)).forEach((function(r){var i=t.state[r].append(e,n);cr(i)?i.forEach((function(t,a){n.set(e.next[r],"["+a+"]",t)})):n.set(a.next,"."+r,i)})),$(e,n,t,!0,!0),[Ui,Gi,Wi,Qi,qi].forEach((function(r){var i=t.draw[r];i&&n.set(a.draw,"."+r,""+i.append(e,n))})),Object.keys(t.uniforms).forEach((function(i){var o=t.uniforms[i].append(e,n);Array.isArray(o)&&(o="["+o.join()+"]"),n.set(a.uniforms,"["+r.id(i)+"]",o)})),Object.keys(t.attributes).forEach((function(r){var a=t.attributes[r].append(e,n),i=e.scopeAttrib(r);Object.keys(new b).forEach((function(e){n.set(i,"."+e,a[e])}))})),t.scopeVAO&&n.set(a.vao,".targetVAO",t.scopeVAO.append(e,n)),o(Hi),o(Ni),Object.keys(t.state).length>0&&(n(i,".dirty=true;"),n.exit(i,".dirty=true;")),n("a1(",e.shared.context,",a0,",e.batchId,");")}function fe(e){if("object"==typeof e&&!cr(e)){for(var t=Object.keys(e),r=0;r<t.length;++r)if(he.isDynamic(e[t[r]]))return!0;return!1}}function ue(e,t,r){var n=t.static[r];if(n&&fe(n)){var a=e.global,i=Object.keys(n),o=!1,f=!1,u=!1,s=e.global.def("{}");i.forEach((function(t){var r=n[t];if(he.isDynamic(r)){"function"==typeof r&&(r=n[t]=he.unbox(r));var i=sf(r,null);o=o||i.thisDep,u=u||i.propDep,f=f||i.contextDep}else{switch(a(s,".",t,"="),typeof r){case"number":a(r);break;case"string":a('"',r,'"');break;case"object":Array.isArray(r)&&a("[",r.join(),"]");break;default:a(e.link(r))}a(";")}})),t.dynamic[r]=new he.DynamicVariable(si,{thisDep:o,contextDep:f,propDep:u,ref:s,append:c}),delete t.static[r]}function c(e,t){i.forEach((function(r){var a=n[r];if(he.isDynamic(a)){var i=e.invoke(t,a);t(s,".",r,"=",i,";")}}))}}function se(e,r,n,a,i){var o=C();o.stats=o.link(i),Object.keys(r.static).forEach((function(e){ue(o,r,e)})),ao.forEach((function(t){ue(o,e,t)}));var f=U(e,r,n,a,o);return te(o,f),oe(o,f),ie(o,f),t(o.compile(),{destroy:function(){f.shader.program.destroy()}})}return{next:w,current:x,procs:function(){var e=C(),t=e.proc("poll"),r=e.proc("refresh"),i=e.block();t(i),r(i);var o,f=e.shared,u=f.gl,s=f.next,c=f.current;i(c,".dirty=false;"),W(e,t),W(e,r,null,!0),v&&(o=e.link(v)),n.oes_vertex_array_object&&r(e.link(n.oes_vertex_array_object),".bindVertexArrayOES(null);");for(var l=0;l<a.maxAttributes;++l){var d=r.def(f.attributes,"[",l,"]"),m=e.cond(d,".buffer");m.then(u,".enableVertexAttribArray(",l,");",u,".bindBuffer(",io,",",d,".buffer.buffer);",u,".vertexAttribPointer(",l,",",d,".size,",d,".type,",d,".normalized,",d,".stride,",d,".offset);").else(u,".disableVertexAttribArray(",l,");",u,".vertexAttrib4f(",l,",",d,".x,",d,".y,",d,".z,",d,".w);",d,".buffer=null;"),r(m),v&&r(o,".vertexAttribDivisorANGLE(",l,",",d,".divisor);")}return r(e.shared.vao,".currentVAO=null;",e.shared.vao,".setVAO(",e.shared.vao,".targetVAO);"),Object.keys(_).forEach((function(n){var a=_[n],o=i.def(s,".",n),f=e.block();f("if(",o,"){",u,".enable(",a,")}else{",u,".disable(",a,")}",c,".",n,"=",o,";"),r(f),t("if(",o,"!==",c,".",n,"){",f,"}")})),Object.keys(k).forEach((function(n){var a,o,f=k[n],l=x[n],d=e.block();if(d(u,".",f,"("),cr(l)){var m=l.length;a=e.global.def(s,".",n),o=e.global.def(c,".",n),d(Oe(m,(function(e){return a+"["+e+"]"})),");",Oe(m,(function(e){return o+"["+e+"]="+a+"["+e+"];"})).join("")),t("if(",Oe(m,(function(e){return a+"["+e+"]!=="+o+"["+e+"]"})).join("||"),"){",d,"}")}else a=i.def(s,".",n),o=i.def(c,".",n),d(a,");",c,".",n,"=",a,";"),t("if(",a,"!==",o,"){",d,"}");r(d)})),e.compile()}(),compile:se}}function df(){return{vaoCount:0,bufferCount:0,elementsCount:0,framebufferCount:0,shaderCount:0,textureCount:0,cubeCount:0,renderbufferCount:0,maxTextureUnits:0}}var mf=34918,hf=34919,pf=35007,bf=function(e,t){if(!t.ext_disjoint_timer_query)return null;var r=[];function n(){return r.pop()||t.ext_disjoint_timer_query.createQueryEXT()}function a(e){r.push(e)}var i=[];function o(e){var r=n();t.ext_disjoint_timer_query.beginQueryEXT(pf,r),i.push(r),m(i.length-1,i.length,e)}function f(){t.ext_disjoint_timer_query.endQueryEXT(pf)}function u(){this.startQueryIndex=-1,this.endQueryIndex=-1,this.sum=0,this.stats=null}var s=[];function c(){return s.pop()||new u}function l(e){s.push(e)}var d=[];function m(e,t,r){var n=c();n.startQueryIndex=e,n.endQueryIndex=t,n.sum=0,n.stats=r,d.push(n)}var h=[],p=[];function b(){var e,r,n=i.length;if(0!==n){p.length=Math.max(p.length,n+1),h.length=Math.max(h.length,n+1),h[0]=0,p[0]=0;var o=0;for(e=0,r=0;r<i.length;++r){var f=i[r];t.ext_disjoint_timer_query.getQueryObjectEXT(f,hf)?(o+=t.ext_disjoint_timer_query.getQueryObjectEXT(f,mf),a(f)):i[e++]=f,h[r+1]=o,p[r+1]=e}for(i.length=e,e=0,r=0;r<d.length;++r){var u=d[r],s=u.startQueryIndex,c=u.endQueryIndex;u.sum+=h[c]-h[s];var m=p[s],b=p[c];b===m?(u.stats.gpuTime+=u.sum/1e6,l(u)):(u.startQueryIndex=m,u.endQueryIndex=b,d[e++]=u)}d.length=e}}return{beginQuery:o,endQuery:f,pushScopeStats:m,update:b,getNumPendingQueries:function(){return i.length},clear:function(){r.push.apply(r,i);for(var e=0;e<r.length;e++)t.ext_disjoint_timer_query.deleteQueryEXT(r[e]);i.length=0,r.length=0},restore:function(){i.length=0,r.length=0}}},gf=16384,vf=256,yf=1024,xf=34962,wf="webglcontextlost",Af="webglcontextrestored",_f=1,kf=2,Sf=3;function Of(e,t){for(var r=0;r<e.length;++r)if(e[r]===t)return r;return-1}function Ef(e){var r=ke(e);if(!r)return null;var n=r.gl,a=n.getContextAttributes(),i=n.isContextLost(),o=Se(n,r);if(!o)return null;var f=ge(),u=df(),s=o.extensions,c=bf(n,s),l=be(),d=n.drawingBufferWidth,m=n.drawingBufferHeight,h={tick:0,time:0,viewportWidth:d,viewportHeight:m,framebufferWidth:d,framebufferHeight:m,drawingBufferWidth:d,drawingBufferHeight:m,pixelRatio:r.pixelRatio},p={},b={elements:null,primitive:4,count:-1,offset:0,instances:-1},g=At(n,s),v=Wt(n,u,r,x),y=Ha(n,s,g,u,v);function x(e){return y.destroyBuffer(e)}var w=ir(n,s,v,u),A=Ga(n,f,u,r),_=$n(n,s,g,(function(){O.procs.poll()}),h,u,r),k=sa(n,s,g,u,r),S=Pa(n,s,g,_,k,u),O=lf(n,f,s,g,v,w,_,S,p,y,A,b,h,c,r),E=Ka(n,S,O.procs.poll,h,a,s,g),T=O.next,j=n.canvas,D=[],C=[],M=[],F=[r.onDestroy],z=null;function R(){if(0===D.length)return c&&c.update(),void(z=null);z=pe.next(R),Q();for(var e=D.length-1;e>=0;--e){var t=D[e];t&&t(h,null,0)}n.flush(),c&&c.update()}function B(){!z&&D.length>0&&(z=pe.next(R))}function P(){z&&(pe.cancel(R),z=null)}function V(e){e.preventDefault(),i=!0,P(),C.forEach((function(e){e()}))}function I(e){n.getError(),i=!1,o.restore(),A.restore(),v.restore(),_.restore(),k.restore(),S.restore(),y.restore(),c&&c.restore(),O.procs.refresh(),B(),M.forEach((function(e){e()}))}function L(){D.length=0,P(),j&&(j.removeEventListener(wf,V),j.removeEventListener(Af,I)),A.clear(),S.clear(),k.clear(),_.clear(),w.clear(),v.clear(),y.clear(),c&&c.clear(),F.forEach((function(e){e()}))}function H(e){function r(e){var r=t({},e);function n(e){if(e in r){var t=r[e];delete r[e],Object.keys(t).forEach((function(n){r[e+"."+n]=t[n]}))}}return delete r.uniforms,delete r.attributes,delete r.context,delete r.vao,"stencil"in r&&r.stencil.op&&(r.stencil.opBack=r.stencil.opFront=r.stencil.op,delete r.stencil.op),n("blend"),n("depth"),n("cull"),n("stencil"),n("polygonOffset"),n("scissor"),n("sample"),"vao"in e&&(r.vao=e.vao),r}function n(e,t){var r={},n={};return Object.keys(e).forEach((function(a){var i=e[a];if(he.isDynamic(i))n[a]=he.unbox(i,a);else{if(t&&Array.isArray(i))for(var o=0;o<i.length;++o)if(he.isDynamic(i[o]))return void(n[a]=he.unbox(i,a));r[a]=i}})),{dynamic:n,static:r}}re(!!e,"invalid args to regl({...})"),re.type(e,"object","invalid args to regl({...})");var a=n(e.context||{},!0),o=n(e.uniforms||{},!0),f=n(e.attributes||{},!1),u=n(r(e),!1),s={gpuTime:0,cpuTime:0,count:0},c=O.compile(u,f,o,a,s),l=c.draw,d=c.batch,m=c.scope,h=[];function p(e){for(;h.length<e;)h.push(null);return h}function b(e,t){var r;if(i&&re.raise("context lost"),"function"==typeof e)return m.call(this,null,e,0);if("function"==typeof t)if("number"==typeof e)for(r=0;r<e;++r)m.call(this,null,t,r);else{if(!Array.isArray(e))return m.call(this,e,t,0);for(r=0;r<e.length;++r)m.call(this,e[r],t,r)}else if("number"==typeof e){if(e>0)return d.call(this,p(0|e),0|e)}else{if(!Array.isArray(e))return l.call(this,e);if(e.length)return d.call(this,e,e.length)}}return t(b,{stats:s,destroy:function(){c.destroy()}})}j&&(j.addEventListener(wf,V,!1),j.addEventListener(Af,I,!1));var N=S.setFBO=H({framebuffer:he.define.call(null,_f,"framebuffer")});function U(e,t){var r=0;O.procs.poll();var a=t.color;a&&(n.clearColor(+a[0]||0,+a[1]||0,+a[2]||0,+a[3]||0),r|=gf),"depth"in t&&(n.clearDepth(+t.depth),r|=vf),"stencil"in t&&(n.clearStencil(0|t.stencil),r|=yf),re(!!r,"called regl.clear with no buffer specified"),n.clear(r)}function q(e){if(re("object"==typeof e&&e,"regl.clear() takes an object as input"),"framebuffer"in e)if(e.framebuffer&&"framebufferCube"===e.framebuffer_reglType)for(var r=0;r<6;++r)N(t({framebuffer:e.framebuffer.faces[r]},e),U);else N(e,U);else U(null,e)}function W(e){function t(){var t=Of(D,e);function r(){var e=Of(D,r);D[e]=D[D.length-1],D.length-=1,D.length<=0&&P()}re(t>=0,"cannot cancel a frame twice"),D[t]=r}return re.type(e,"function","regl.frame() callback must be a function"),D.push(e),B(),{cancel:t}}function G(){var e=T.viewport,t=T.scissor_box;e[0]=e[1]=t[0]=t[1]=0,h.viewportWidth=h.framebufferWidth=h.drawingBufferWidth=e[2]=t[2]=n.drawingBufferWidth,h.viewportHeight=h.framebufferHeight=h.drawingBufferHeight=e[3]=t[3]=n.drawingBufferHeight}function Q(){h.tick+=1,h.time=$(),G(),O.procs.poll()}function Y(){_.refresh(),G(),O.procs.refresh(),c&&c.update()}function $(){return(be()-l)/1e3}function X(e,t){var r;switch(re.type(t,"function","listener callback must be a function"),e){case"frame":return W(t);case"lost":r=C;break;case"restore":r=M;break;case"destroy":r=F;break;default:re.raise("invalid event, must be one of frame,lost,restore,destroy")}return r.push(t),{cancel:function(){for(var e=0;e<r.length;++e)if(r[e]===t)return r[e]=r[r.length-1],void r.pop()}}}Y();var K=t(H,{clear:q,prop:he.define.bind(null,_f),context:he.define.bind(null,kf),this:he.define.bind(null,Sf),draw:H({}),buffer:function(e){return v.create(e,xf,!1,!1)},elements:function(e){return w.create(e,!1)},texture:_.create2D,cube:_.createCube,renderbuffer:k.create,framebuffer:S.create,framebufferCube:S.createCube,vao:y.createVAO,attributes:a,frame:W,on:X,limits:g,hasExtension:function(e){return g.extensions.indexOf(e.toLowerCase())>=0},read:E,destroy:L,_gl:n,_refresh:Y,poll:function(){Q(),c&&c.update()},now:$,stats:u});return r.onDone(null,K),K}return Ef}()}}]);
