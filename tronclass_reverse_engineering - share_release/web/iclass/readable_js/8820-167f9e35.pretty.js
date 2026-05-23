(self.webpackChunklms=self.webpackChunklms||[
]).push([
  [
    8820
  ], {
    257625:(e, t, a)=>{
      a.d(t, {
        aB:()=>y, h8:()=>m, ho:()=>v, rd:()=>p, rh:()=>f
      });
      var n=a(48170), o=a(498026), i=a(321756), r=a(171519), l=a(905638), s=a(467065), u=a(692836), d={
        position:[
          "x", "y"
        ], scale:[
          "scaleX", "scaleY"
        ], origin:[
          "originX", "originY"
        ]
      }, c=(0, o.keys)(d), p=((0, o.reduce)(u.Wx, (function(e, t){
        return e[
          t
        ]
        =1, e
      }), {
      }), u.Wx.join(", "), [
        "", "style", "shape", "extra"
      ]), h=(0, n.$r)();
      function g(e, t, a, n, i){
        var r=e+"Animation", s=(0, l.Jw)(e, n, i)||{
        }, u=h(t).userDuring;
        return s.duration>0&&(s.during=u?(0, o.bind)(_, {
          el:t, userDuring:u
        }):null, s.setToFinal=!0, s.scope=e), (0, o.extend)(s, a[
          r
        ]), s
      }
      function f(e, t, a, i){
        var l=(i=i||{
        }).dataIndex, f=i.isInit, m=i.clearStyle, x=a.isAnimationEnabled(), S=h(e), _=t.style;
        S.userDuring=t.during;
        var w={
        }, A={
        };
        if(function(e, t, a){
          for(var n=0;
          n<c.length;
          n++){
            var o=c[
              n
            ], i=d[
              o
            ], r=t[
              o
            ];
            r&&(a[
              i[
                0
              ]
            ]
            =r[
              0
            ], a[
              i[
                1
              ]
            ]
            =r[
              1
            ])
          }
          for(n=0;
          n<u.Wx.length;
          n++){
            var l=u.Wx[
              n
            ];
            null!=t[
              l
            ]
            &&(a[
              l
            ]
            =t[
              l
            ])
          }
        }
        (0, t, A), I("shape", t, A), I("extra", t, A), !f&&x&&(function(e, t, a){
          for(var o=t.transition, i=v(o)?u.Wx:(0, n.qB)(o||[
          ]), r=0;
          r<i.length;
          r++){
            var l=i[
              r
            ];
            if("style"!==l&&"shape"!==l&&"extra"!==l){
              var s=e[
                l
              ];
              0, a[
                l
              ]
              =s
            }
          }
        }
        (e, t, w), b("shape", e, t, w), b("extra", e, t, w), function(e, t, a, i){
          if(!a)return;
          var r, l=e.style;
          if(l){
            var s=a.transition, u=t.transition;
            if(s&&!v(s)){
              var d=(0, n.qB)(s);
              !r&&(r=i.style={
              });
              for(var c=0;
              c<d.length;
              c++){
                var p=l[
                  y=d[
                    c
                  ]
                ];
                r[
                  y
                ]
                =p
              }
            }
            else if(e.getAnimationStyleProps&&(v(u)||v(s)||(0, o.indexOf)(u, "style")>=0)){
              var h=e.getAnimationStyleProps(), g=h?h.style:null;
              if(g){
                !r&&(r=i.style={
                });
                var f=(0, o.keys)(a);
                for(c=0;
                c<f.length;
                c++){
                  var y;
                  if(g[
                    y=f[
                      c
                    ]
                  ]){
                    p=l[
                      y
                    ];
                    r[
                      y
                    ]
                    =p
                  }
                }
              }
            }
          }
        }
        (e, t, _, w)), A.style=_, function(e, t, a){
          var n=t.style;
          if(!e.isGroup&&n){
            if(a){
              e.useStyle({
              });
              for(var o=e.animators, i=0;
              i<o.length;
              i++){
                var r=o[
                  i
                ];
                "style"===r.targetName&&r.changeTarget(e.style)
              }
            }
            e.setStyle(n)
          }
          t&&(t.style=null, t&&e.attr(t), t.style=n)
        }
        (e, A, m), function(e, t){
          (0, o.hasOwn)(t, "silent")&&(e.silent=t.silent), (0, o.hasOwn)(t, "ignore")&&(e.ignore=t.ignore), e instanceof r.Ay&&(0, o.hasOwn)(t, "invisible")&&(e.invisible=t.invisible);
          e instanceof s.Ay&&(0, o.hasOwn)(t, "autoBatch")&&(e.autoBatch=t.autoBatch)
        }
        (e, t), x)if(f){
          var M={
          };
          (0, o.each)(p, (function(e){
            var a=e?t[
              e
            ]
            :t;
            a&&a.enterFrom&&(e&&(M[
              e
            ]
            =M[
              e
            ]
            ||{
            }), (0, o.extend)(e?M[
              e
            ]
            :M, a.enterFrom))
          }));
          var L=g("enter", e, t, a, l);
          L.duration>0&&e.animateFrom(M, L)
        }
        else!function(e, t, a, n, o){
          if(o){
            var i=g("update", e, t, n, a);
            i.duration>0&&e.animateFrom(o, i)
          }
        }
        (e, t, l||0, a, w);
        y(e, t), _?e.dirty():e.markRedraw()
      }
      function y(e, t){
        for(var a=h(e).leaveToProps, n=0;
        n<p.length;
        n++){
          var i=p[
            n
          ], r=i?t[
            i
          ]
          :t;
          r&&r.leaveTo&&(a||(a=h(e).leaveToProps={
          }), i&&(a[
            i
          ]
          =a[
            i
          ]
          ||{
          }), (0, o.extend)(i?a[
            i
          ]
          :a, r.leaveTo))
        }
      }
      function m(e, t, a, n){
        if(e){
          var o=e.parent, i=h(e).leaveToProps;
          if(i){
            var r=g("update", e, t, a, 0);
            r.done=function(){
              o.remove(e), n&&n()
            }, e.animateTo(i, r)
          }
          else o.remove(e), n&&n()
        }
      }
      function v(e){
        return"all"===e
      }
      var x={
      }, S={
        setTransform:function(e, t){
          return x.el[
            e
          ]
          =t, this
        }, getTransform:function(e){
          return x.el[
            e
          ]
        }, setShape:function(e, t){
          var a=x.el;
          return(a.shape||(a.shape={
          }))[
            e
          ]
          =t, a.dirtyShape&&a.dirtyShape(), this
        }, getShape:function(e){
          var t=x.el.shape;
          if(t)return t[
            e
          ]
        }, setStyle:function(e, t){
          var a=x.el, n=a.style;
          return n&&(n[
            e
          ]
          =t, a.dirtyStyle&&a.dirtyStyle()), this
        }, getStyle:function(e){
          var t=x.el.style;
          if(t)return t[
            e
          ]
        }, setExtra:function(e, t){
          return(x.el.extra||(x.el.extra={
          }))[
            e
          ]
          =t, this
        }, getExtra:function(e){
          var t=x.el.extra;
          if(t)return t[
            e
          ]
        }
      };
      function _(){
        var e=this, t=e.el;
        if(t){
          var a=h(t).userDuring, n=e.userDuring;
          a===n?(x.el=t, n(S)):e.el=e.userDuring=null
        }
      }
      function b(e, t, a, i){
        var r=a[
          e
        ];
        if(r){
          var l, s=t[
            e
          ];
          if(s){
            var u=a.transition, d=r.transition;
            if(d)if(!l&&(l=i[
              e
            ]
            ={
            }), v(d))(0, o.extend)(l, s);
            else for(var c=(0, n.qB)(d), p=0;
            p<c.length;
            p++){
              var h=s[
                f=c[
                  p
                ]
              ];
              l[
                f
              ]
              =h
            }
            else if(v(u)||(0, o.indexOf)(u, e)>=0){
              !l&&(l=i[
                e
              ]
              ={
              });
              var g=(0, o.keys)(s);
              for(p=0;
              p<g.length;
              p++){
                var f;
                h=s[
                  f=g[
                    p
                  ]
                ];
                w(r[
                  f
                ], h)&&(l[
                  f
                ]
                =h)
              }
            }
          }
        }
      }
      function I(e, t, a){
        var n=t[
          e
        ];
        if(n)for(var r=a[
          e
        ]
        ={
        }, l=(0, o.keys)(n), s=0;
        s<l.length;
        s++){
          var u=l[
            s
          ];
          r[
            u
          ]
          =(0, i.F)(n[
            u
          ])
        }
      }
      function w(e, t){
        return(0, o.isArrayLike)(e)?e!==t:null!=e&&isFinite(e)
      }
    }, 408820:(e, t, a)=>{
      a.r(t), a.d(t, {
        Axis:()=>o._0, ChartView:()=>o.OZ, ComponentModel:()=>o.jT, ComponentView:()=>o.bR, List:()=>o.B8, Model:()=>o.Kx, PRIORITY:()=>o.FQ, SeriesModel:()=>o.rP, color:()=>o.yW, connect:()=>o.Ng, dataTool:()=>o.p5, dependencies:()=>o.El, disConnect:()=>o.zm, disconnect:()=>o.Zf, dispose:()=>o.AS, env:()=>o._K, extendChartView:()=>o.yX, extendComponentModel:()=>o.rt, extendComponentView:()=>o.NO, extendSeriesModel:()=>o.NA, format:()=>o.GP, getCoordinateSystemDimensions:()=>o.Bo, getInstanceByDom:()=>o.FP, getInstanceById:()=>o.aQ, getMap:()=>o.ZB, graphic:()=>o.fA, helper:()=>o.dw, init:()=>o.Ts, innerDrawElementOnCanvas:()=>o.UU, matrix:()=>o.UP, number:()=>o.ai, parseGeoJSON:()=>o.l3, parseGeoJson:()=>o.zI, registerAction:()=>o.OH, registerCoordinateSystem:()=>o.pX, registerLayout:()=>o.Oh, registerLoading:()=>o.Ej, registerLocale:()=>o.E, registerMap:()=>o.mz, registerPostInit:()=>o.cf, registerPostUpdate:()=>o.tb, registerPreprocessor:()=>o.lP, registerProcessor:()=>o.qg, registerTheme:()=>o.bf, registerTransform:()=>o.iY, registerUpdateLifecycle:()=>o.xV, registerVisual:()=>o.AF, setCanvasCreator:()=>o.vV, setPlatformAPI:()=>o.Gs, throttle:()=>o.nF, time:()=>o.kB, use:()=>o.Yx, util:()=>o.ZS, vector:()=>o.i1, version:()=>o.rE, zrUtil:()=>o.F_, zrender:()=>o.nd
      });
      var n=a(903087), o=a(234123), i=a(689952), r=a(183806), l=a(311734), s=a(542900), u=a(280491), d=a(274179), c=a(391854), p=a(347355);
      const h=function(e){
        function t(){
          var a=null!==e&&e.apply(this, arguments)||this;
          return a.type=t.type, a.hasSymbolVisual=!0, a
        }
        return(0, d.C6)(t, e), t.prototype.getInitialData=function(e, t){
          return(0, c.A)(null, this, {
            useEncodeDefaulter:!0
          })
        }, t.prototype.getProgressive=function(){
          var e=this.option.progressive;
          return null==e?this.option.large?5e3:this.get("progressive"):e
        }, t.prototype.getProgressiveThreshold=function(){
          var e=this.option.progressiveThreshold;
          return null==e?this.option.large?1e4:this.get("progressiveThreshold"):e
        }, t.prototype.brushSelector=function(e, t, a){
          return a.point(t.getItemLayout(e))
        }, t.prototype.getZLevelKey=function(){
          return this.getData().count()>this.getProgressiveThreshold()?this.id:""
        }, t.type="series.scatter", t.dependencies=[
          "grid", "polar", "geo", "singleAxis", "calendar"
        ], t.defaultOption={
          coordinateSystem:"cartesian2d", z:2, legendHoverLink:!0, symbolSize:10, large:!1, largeThreshold:2e3, itemStyle:{
            opacity:.8
          }, emphasis:{
            scale:!0
          }, clip:!0, select:{
            itemStyle:{
              borderColor:"#212121"
            }
          }, universalTransition:{
            divideShape:"clone"
          }
        }, t
      }
      (p.A);
      var g=a(218386), f=a(529308), y=a(467065), m=a(843870), v=a(62103), x=a(669622), S=function(){
      }, _=function(e){
        function t(t){
          var a=e.call(this, t)||this;
          return a._off=0, a.hoverDataIdx=-1, a
        }
        return(0, d.C6)(t, e), t.prototype.getDefaultShape=function(){
          return new S
        }, t.prototype.reset=function(){
          this.notClear=!1, this._off=0
        }, t.prototype.buildPath=function(e, t){
          var a, n=t.points, o=t.size, i=this.symbolProxy, r=i.shape, l=e.getContext?e.getContext():e, s=l&&o[
            0
          ]
          <4, u=this.softClipShape;
          if(s)this._ctx=l;
          else{
            for(this._ctx=null, a=this._off;
            a<n.length;
            ){
              var d=n[
                a++
              ], c=n[
                a++
              ];
              isNaN(d)||isNaN(c)||(u&&!u.contain(d, c)||(r.x=d-o[
                0
              ]
              /2, r.y=c-o[
                1
              ]
              /2, r.width=o[
                0
              ], r.height=o[
                1
              ], i.buildPath(e, r, !0)))
            }
            this.incremental&&(this._off=a, this.notClear=!0)
          }
        }, t.prototype.afterBrush=function(){
          var e, t=this.shape, a=t.points, n=t.size, o=this._ctx, i=this.softClipShape;
          if(o){
            for(e=this._off;
            e<a.length;
            ){
              var r=a[
                e++
              ], l=a[
                e++
              ];
              isNaN(r)||isNaN(l)||(i&&!i.contain(r, l)||o.fillRect(r-n[
                0
              ]
              /2, l-n[
                1
              ]
              /2, n[
                0
              ], n[
                1
              ]))
            }
            this.incremental&&(this._off=e, this.notClear=!0)
          }
        }, t.prototype.findDataIndex=function(e, t){
          for(var a=this.shape, n=a.points, o=a.size, i=Math.max(o[
            0
          ], 4), r=Math.max(o[
            1
          ], 4), l=n.length/2-1;
          l>=0;
          l--){
            var s=2*l, u=n[
              s
            ]
            -i/2, d=n[
              s+1
            ]
            -r/2;
            if(e>=u&&t>=d&&e<=u+i&&t<=d+r)return l
          }
          return-1
        }, t.prototype.contain=function(e, t){
          var a=this.transformCoordToLocal(e, t), n=this.getBoundingRect();
          return e=a[
            0
          ], t=a[
            1
          ], n.contain(e, t)?(this.hoverDataIdx=this.findDataIndex(e, t))>=0:(this.hoverDataIdx=-1, !1)
        }, t.prototype.getBoundingRect=function(){
          var e=this._rect;
          if(!e){
            for(var t=this.shape, a=t.points, n=t.size, o=n[
              0
            ], i=n[
              1
            ], r=1/0, l=1/0, s=-1/0, u=-1/0, d=0;
            d<a.length;
            ){
              var c=a[
                d++
              ], p=a[
                d++
              ];
              r=Math.min(c, r), s=Math.max(c, s), l=Math.min(p, l), u=Math.max(p, u)
            }
            e=this._rect=new f.A(r-o/2, l-i/2, s-r+o, u-l+i)
          }
          return e
        }, t
      }
      (y.Ay);
      const b=function(){
        function e(){
          this.group=new m.A
        }
        return e.prototype.updateData=function(e, t){
          this._clear();
          var a=this._create();
          a.setShape({
            points:e.getLayout("points")
          }), this._setCommon(a, e, t)
        }, e.prototype.updateLayout=function(e){
          var t=e.getLayout("points");
          this.group.eachChild((function(e){
            if(null!=e.startIndex){
              var a=2*(e.endIndex-e.startIndex), n=4*e.startIndex*2;
              t=new Float32Array(t.buffer, n, a)
            }
            e.setShape("points", t), e.reset()
          }))
        }, e.prototype.incrementalPrepareUpdate=function(e){
          this._clear()
        }, e.prototype.incrementalUpdate=function(e, t, a){
          var n=this._newAdded[
            0
          ], o=t.getLayout("points"), i=n&&n.shape.points;
          if(i&&i.length<2e4){
            var r=i.length, l=new Float32Array(r+o.length);
            l.set(i), l.set(o, r), n.endIndex=e.end, n.setShape({
              points:l
            })
          }
          else{
            this._newAdded=[
            ];
            var s=this._create();
            s.startIndex=e.start, s.endIndex=e.end, s.incremental=!0, s.setShape({
              points:o
            }), this._setCommon(s, t, a)
          }
        }, e.prototype.eachRendered=function(e){
          this._newAdded[
            0
          ]
          &&e(this._newAdded[
            0
          ])
        }, e.prototype._create=function(){
          var e=new _({
            cursor:"default"
          });
          return e.ignoreCoarsePointer=!0, this.group.add(e), this._newAdded.push(e), e
        }, e.prototype._setCommon=function(e, t, a){
          var n=t.hostModel;
          a=a||{
          };
          var o=t.getVisual("symbolSize");
          e.setShape("size", o instanceof Array?o:[
            o, o
          ]), e.softClipShape=a.clipShape||null, e.symbolProxy=(0, v.v5)(t.getVisual("symbol"), 0, 0, 0, 0), e.setColor=e.symbolProxy.setColor;
          var i=e.shape.size[
            0
          ]
          <4;
          e.useStyle(n.getModel("itemStyle").getItemStyle(i?[
            "color", "shadowBlur", "shadowColor"
          ]
          :[
            "color"
          ]));
          var r=t.getVisual("style"), l=r&&r.fill;
          l&&e.setColor(l);
          var s=(0, x.z)(e);
          s.seriesIndex=n.seriesIndex, e.on("mousemove", (function(t){
            s.dataIndex=null;
            var a=e.hoverDataIdx;
            a>=0&&(s.dataIndex=a+(e.startIndex||0))
          }))
        }, e.prototype.remove=function(){
          this._clear()
        }, e.prototype._clear=function(){
          this._newAdded=[
          ], this.group.removeAll()
        }, e
      }
      ();
      var I=a(430682), w=a(106666);
      const A=function(e){
        function t(){
          var a=null!==e&&e.apply(this, arguments)||this;
          return a.type=t.type, a
        }
        return(0, d.C6)(t, e), t.prototype.render=function(e, t, a){
          var n=e.getData();
          this._updateSymbolDraw(n, e).updateData(n, {
            clipShape:this._getClipShape(e)
          }), this._finished=!0
        }, t.prototype.incrementalPrepareRender=function(e, t, a){
          var n=e.getData();
          this._updateSymbolDraw(n, e).incrementalPrepareUpdate(n), this._finished=!1
        }, t.prototype.incrementalRender=function(e, t, a){
          this._symbolDraw.incrementalUpdate(e, t.getData(), {
            clipShape:this._getClipShape(t)
          }), this._finished=e.end===t.getData().count()
        }, t.prototype.updateTransform=function(e, t, a){
          var n=e.getData();
          if(this.group.dirty(), !this._finished||n.count()>1e4)return{
            update:!0
          };
          var o=(0, I.A)("").reset(e, t, a);
          o.progress&&o.progress({
            start:0, end:n.count(), count:n.count()
          }, n), this._symbolDraw.updateLayout(n)
        }, t.prototype.eachRendered=function(e){
          this._symbolDraw&&this._symbolDraw.eachRendered(e)
        }, t.prototype._getClipShape=function(e){
          if(e.get("clip", !0)){
            var t=e.coordinateSystem;
            return t&&t.getArea&&t.getArea(.1)
          }
        }, t.prototype._updateSymbolDraw=function(e, t){
          var a=this._symbolDraw, n=t.pipelineContext.large;
          return a&&n===this._isLargeDraw||(a&&a.remove(), a=this._symbolDraw=n?new b:new g.A, this._isLargeDraw=n, this.group.removeAll()), this.group.add(a.group), a
        }, t.prototype.remove=function(e, t){
          this._symbolDraw&&this._symbolDraw.remove(!0), this._symbolDraw=null
        }, t.prototype.dispose=function(){
        }, t.type="scatter", t
      }
      (w.A);
      var M=a(826146);
      var L=a(498026);
      function D(e){
        e.eachSeriesByType("radar", (function(e){
          var t=e.getData(), a=[
          ], n=e.coordinateSystem;
          if(n){
            var o=n.getIndicatorAxes();
            L.each(o, (function(e, i){
              t.each(t.mapDimension(o[
                i
              ].dim), (function(e, t){
                a[
                  t
                ]
                =a[
                  t
                ]
                ||[
                ];
                var o=n.dataToPoint(e, i);
                a[
                  t
                ]
                [
                  i
                ]
                =C(o)?o:N(n)
              }))
            })), t.each((function(e){
              var o=L.find(a[
                e
              ], (function(e){
                return C(e)
              }))||N(n);
              a[
                e
              ].push(o.slice()), t.setItemLayout(e, a[
                e
              ])
            }))
          }
        }))
      }
      function C(e){
        return!isNaN(e[
          0
        ])&&!isNaN(e[
          1
        ])
      }
      function N(e){
        return[
          e.cx, e.cy
        ]
      }
      var T=a(878587);
      function P(e){
        var t=e.polar;
        if(t){
          L.isArray(t)||(t=[
            t
          ]);
          var a=[
          ];
          L.each(t, (function(t, n){
            t.indicator?(t.type&&!t.shape&&(t.shape=t.type), e.radar=e.radar||[
            ], L.isArray(e.radar)||(e.radar=[
              e.radar
            ]), e.radar.push(t)):a.push(t)
          })), e.polar=a
        }
        L.each(e.series, (function(e){
          e&&"radar"===e.type&&e.polarIndex&&(e.radarIndex=e.polarIndex)
        }))
      }
      var E=a(543199), V=a(252505), R=a(39195), z=a(905638), k=a(34833), G=a(289632), O=a(390540);
      const B=function(e){
        function t(){
          var a=null!==e&&e.apply(this, arguments)||this;
          return a.type=t.type, a
        }
        return(0, d.C6)(t, e), t.prototype.render=function(e, t, a){
          var n=e.coordinateSystem, o=this.group, i=e.getData(), r=this._data;
          function l(e, t){
            var a=e.getItemVisual(t, "symbol")||"circle";
            if("none"!==a){
              var n=v.xU(e.getItemVisual(t, "symbolSize")), o=v.v5(a, -1, -1, 2, 2), i=e.getItemVisual(t, "symbolRotate")||0;
              return o.attr({
                style:{
                  strokeNoScale:!0
                }, z2:100, scaleX:n[
                  0
                ]
                /2, scaleY:n[
                  1
                ]
                /2, rotation:i*Math.PI/180||0
              }), o
            }
          }
          function s(t, a, n, o, i, r){
            n.removeAll();
            for(var s=0;
            s<a.length-1;
            s++){
              var u=l(o, i);
              u&&(u.__dimIdx=s, t[
                s
              ]
              ?(u.setPosition(t[
                s
              ]), E[
                r?"initProps":"updateProps"
              ]
              (u, {
                x:a[
                  s
                ]
                [
                  0
                ], y:a[
                  s
                ]
                [
                  1
                ]
              }, e, i)):u.setPosition(a[
                s
              ]), n.add(u))
            }
          }
          function u(e){
            return L.map(e, (function(e){
              return[
                n.cx, n.cy
              ]
            }))
          }
          i.diff(r).add((function(t){
            var a=i.getItemLayout(t);
            if(a){
              var n=new V.A, o=new R.A, r={
                shape:{
                  points:a
                }
              };
              n.shape.points=u(a), o.shape.points=u(a), z.LW(n, r, e, t), z.LW(o, r, e, t);
              var l=new m.A, d=new m.A;
              l.add(o), l.add(n), l.add(d), s(o.shape.points, a, d, i, t, !0), i.setItemGraphicEl(t, l)
            }
          })).update((function(t, a){
            var n=r.getItemGraphicEl(a), o=n.childAt(0), l=n.childAt(1), u=n.childAt(2), d={
              shape:{
                points:i.getItemLayout(t)
              }
            };
            d.shape.points&&(s(o.shape.points, d.shape.points, u, i, t, !1), (0, z.ap)(l), (0, z.ap)(o), z.oi(o, d, e), z.oi(l, d, e), i.setItemGraphicEl(t, n))
          })).remove((function(e){
            o.remove(r.getItemGraphicEl(e))
          })).execute(), i.eachItemGraphicEl((function(e, t){
            var a=i.getItemModel(t), n=e.childAt(0), r=e.childAt(1), l=e.childAt(2), s=i.getItemVisual(t, "style"), u=s.fill;
            o.add(e), n.useStyle(L.defaults(a.getModel("lineStyle").getLineStyle(), {
              fill:"none", stroke:u
            })), (0, k.Mx)(n, a, "lineStyle"), (0, k.Mx)(r, a, "areaStyle");
            var d=a.getModel("areaStyle"), c=d.isEmpty()&&d.parentModel.isEmpty();
            r.ignore=c, L.each([
              "emphasis", "select", "blur"
            ], (function(e){
              var t=a.getModel([
                e, "areaStyle"
              ]), n=t.isEmpty()&&t.parentModel.isEmpty();
              r.ensureState(e).ignore=n&&c
            })), r.useStyle(L.defaults(d.getAreaStyle(), {
              fill:u, opacity:.7, decal:s.decal
            }));
            var p=a.getModel("emphasis"), h=p.getModel("itemStyle").getItemStyle();
            l.eachChild((function(e){
              if(e instanceof O.Ay){
                var n=e.style;
                e.useStyle(L.extend({
                  image:n.image, x:n.x, y:n.y, width:n.width, height:n.height
                }, s))
              }
              else e.useStyle(s), e.setColor(u), e.style.strokeNoScale=!0;
              e.ensureState("emphasis").style=L.clone(h);
              var o=i.getStore().get(i.getDimensionIndex(e.__dimIdx), t);
              (null==o||isNaN(o))&&(o=""), (0, G.qM)(e, (0, G.lx)(a), {
                labelFetcher:i.hostModel, labelDataIndex:t, labelDimIndex:e.__dimIdx, defaultText:o, inheritColor:u, defaultOpacity:s.opacity
              })
            })), (0, k.Lm)(e, p.get("focus"), p.get("blurScope"), p.get("disabled"))
          })), this._data=i
        }, t.prototype.remove=function(){
          this.group.removeAll(), this._data=null
        }, t.type="radar", t
      }
      (w.A);
      var Y=a(572731), F=a(958239), W=a(603961);
      const H=function(e){
        function t(){
          var a=null!==e&&e.apply(this, arguments)||this;
          return a.type=t.type, a.hasSymbolVisual=!0, a
        }
        return(0, d.C6)(t, e), t.prototype.init=function(t){
          e.prototype.init.apply(this, arguments), this.legendVisualProvider=new F.A(L.bind(this.getData, this), L.bind(this.getRawData, this))
        }, t.prototype.getInitialData=function(e, t){
          return(0, Y.A)(this, {
            generateCoord:"indicator_", generateCoordCount:1/0
          })
        }, t.prototype.formatTooltip=function(e, t, a){
          var n=this.getData(), o=this.coordinateSystem.getIndicatorAxes(), i=this.getData().getName(e), r=""===i?this.name:i, l=(0, W.aw)(this, e);
          return(0, W.Qx)("section", {
            header:r, sortBlocks:!0, blocks:L.map(o, (function(t){
              var a=n.get(n.mapDimension(t.dim), e);
              return(0, W.Qx)("nameValue", {
                markerType:"subItem", markerColor:l, name:t.name, value:a, sortParam:a
              })
            }))
          })
        }, t.prototype.getTooltipPosition=function(e){
          if(null!=e)for(var t=this.getData(), a=this.coordinateSystem, n=t.getValues(L.map(a.dimensions, (function(e){
            return t.mapDimension(e)
          })), e), o=0, i=n.length;
          o<i;
          o++)if(!isNaN(n[
            o
          ])){
            var r=a.getIndicatorAxes();
            return a.coordToPoint(r[
              o
            ].dataToCoord(n[
              o
            ]), o)
          }
        }, t.type="series.radar", t.dependencies=[
          "radar"
        ], t.defaultOption={
          z:2, colorBy:"data", coordinateSystem:"radar", legendHoverLink:!0, radarIndex:0, lineStyle:{
            width:2, type:"solid", join:"round"
          }, label:{
            position:"top"
          }, symbolSize:8
        }, t
      }
      (p.A);
      var X=a(118909);
      var U=a(131571), Z=a(108027);
      const q=function(e){
        function t(){
          var a=null!==e&&e.apply(this, arguments)||this;
          return a.type=t.type, a
        }
        return(0, d.C6)(t, e), t.prototype.render=function(e, t, a, n){
          if(!n||"mapToggleSelect"!==n.type||n.from!==this.uid){
            var o=this.group;
            if(o.removeAll(), !e.getHostGeoModel()){
              if(this._mapDraw&&n&&"geoRoam"===n.type&&this._mapDraw.resetForLabelLayout(), n&&"geoRoam"===n.type&&"series"===n.componentType&&n.seriesId===e.id)(i=this._mapDraw)&&o.add(i.group);
              else if(e.needsDrawMap){
                var i=this._mapDraw||new Z.A(a);
                o.add(i.group), i.draw(e, t, a, this, n), this._mapDraw=i
              }
              else this._mapDraw&&this._mapDraw.remove(), this._mapDraw=null;
              e.get("showLegendSymbol")&&t.getComponent("legend")&&this._renderSymbols(e, t, a)
            }
          }
        }, t.prototype.remove=function(){
          this._mapDraw&&this._mapDraw.remove(), this._mapDraw=null, this.group.removeAll()
        }, t.prototype.dispose=function(){
          this._mapDraw&&this._mapDraw.remove(), this._mapDraw=null
        }, t.prototype._renderSymbols=function(e, t, a){
          var n=e.originalData, o=this.group;
          n.each(n.mapDimension("value"), (function(t, a){
            if(!isNaN(t)){
              var i=n.getItemLayout(a);
              if(i&&i.point){
                var r=i.point, l=i.offset, s=new U.A({
                  style:{
                    fill:e.getData().getVisual("style").fill
                  }, shape:{
                    cx:r[
                      0
                    ]
                    +9*l, cy:r[
                      1
                    ], r:3
                  }, silent:!0, z2:8+(l?0:k.CA+1)
                });
                if(!l){
                  var u=e.mainSeries.getData(), d=n.getName(a), c=u.indexOfName(d), p=n.getItemModel(a), h=p.getModel("label"), g=u.getItemGraphicEl(c);
                  (0, G.qM)(s, (0, G.lx)(p), {
                    labelFetcher:{
                      getFormattedLabel:function(t, a){
                        return e.getFormattedLabel(c, a)
                      }
                    }, defaultText:d
                  }), s.disableLabelAnimation=!0, h.get("position")||s.setTextConfig({
                    position:"bottom"
                  }), g.onHoverStateChange=function(e){
                    (0, k.Pk)(s, e)
                  }
                }
                o.add(s)
              }
            }
          }))
        }, t.type="map", t
      }
      (w.A);
      var j=a(676311), Q=a(823071);
      const J=function(e){
        function t(){
          var a=null!==e&&e.apply(this, arguments)||this;
          return a.type=t.type, a.needsDrawMap=!1, a.seriesGroup=[
          ], a.getTooltipPosition=function(e){
            if(null!=e){
              var t=this.getData().getName(e), a=this.coordinateSystem, n=a.getRegion(t);
              return n&&a.dataToPoint(n.getCenter())
            }
          }, a
        }
        return(0, d.C6)(t, e), t.prototype.getInitialData=function(e){
          for(var t=(0, Y.A)(this, {
            coordDimensions:[
              "value"
            ], encodeDefaulter:L.curry(Q.ln, this)
          }), a=L.createHashMap(), n=[
          ], o=0, i=t.count();
          o<i;
          o++){
            var r=t.getName(o);
            a.set(r, o)
          }
          var l=j.A.load(this.getMapType(), this.option.nameMap, this.option.nameProperty);
          return L.each(l.regions, (function(e){
            var o, i=e.name, r=a.get(i), l=e.properties&&e.properties.echartsStyle;
            null==r?(o={
              name:i
            }, n.push(o)):o=t.getRawDataItem(r), l&&L.merge(o, l)
          })), t.appendData(n), t
        }, t.prototype.getHostGeoModel=function(){
          var e=this.option.geoIndex;
          return null!=e?this.ecModel.getComponent("geo", e):null
        }, t.prototype.getMapType=function(){
          return(this.getHostGeoModel()||this).option.map
        }, t.prototype.getRawValue=function(e){
          var t=this.getData();
          return t.get(t.mapDimension("value"), e)
        }, t.prototype.getRegionModel=function(e){
          var t=this.getData();
          return t.getItemModel(t.indexOfName(e))
        }, t.prototype.formatTooltip=function(e, t, a){
          for(var n=this.getData(), o=this.getRawValue(e), i=n.getName(e), r=this.seriesGroup, l=[
          ], s=0;
          s<r.length;
          s++){
            var u=r[
              s
            ].originalData.indexOfName(i), d=n.mapDimension("value");
            isNaN(r[
              s
            ].originalData.get(d, u))||l.push(r[
              s
            ].name)
          }
          return(0, W.Qx)("section", {
            header:l.join(", "), noHeader:!l.length, blocks:[
              (0, W.Qx)("nameValue", {
                name:i, value:o
              })
            ]
          })
        }, t.prototype.setZoom=function(e){
          this.option.zoom=e
        }, t.prototype.setCenter=function(e){
          this.option.center=e
        }, t.prototype.getLegendIcon=function(e){
          var t=e.icon||"roundRect", a=(0, v.v5)(t, 0, 0, e.itemWidth, e.itemHeight, e.itemStyle.fill);
          return a.setStyle(e.itemStyle), a.style.stroke="none", t.indexOf("empty")>-1&&(a.style.stroke=a.style.fill, a.style.fill="#fff", a.style.lineWidth=2), a
        }, t.type="series.map", t.dependencies=[
          "geo"
        ], t.layoutMode="box", t.defaultOption={
          z:2, coordinateSystem:"geo", map:"", left:"center", top:"center", aspectScale:null, showLegendSymbol:!0, boundingCoords:null, center:null, zoom:1, scaleLimit:null, selectedMode:!0, label:{
            show:!1, color:"#000"
          }, itemStyle:{
            borderWidth:.5, borderColor:"#444", areaColor:"#eee"
          }, emphasis:{
            label:{
              show:!0, color:"rgb(100,0,0)"
            }, itemStyle:{
              areaColor:"rgba(255,215,0,0.8)"
            }
          }, select:{
            label:{
              show:!0, color:"rgb(100,0,0)"
            }, itemStyle:{
              color:"rgba(255,215,0,0.8)"
            }
          }, nameProperty:"name"
        }, t
      }
      (p.A);
      function K(e){
        var t={
        };
        e.eachSeriesByType("map", (function(e){
          var a=e.getHostGeoModel(), n=a?"o"+a.id:"i"+e.getMapType();
          (t[
            n
          ]
          =t[
            n
          ]
          ||[
          ]).push(e)
        })), L.each(t, (function(e, t){
          for(var a, n, o, i=(a=L.map(e, (function(e){
            return e.getData()
          })), n=e[
            0
          ].get("mapValueCalculation"), o={
          }, L.each(a, (function(e){
            e.each(e.mapDimension("value"), (function(t, a){
              var n="ec-"+e.getName(a);
              o[
                n
              ]
              =o[
                n
              ]
              ||[
              ], isNaN(t)||o[
                n
              ].push(t)
            }))
          })), a[
            0
          ].map(a[
            0
          ].mapDimension("value"), (function(e, t){
            for(var i="ec-"+a[
              0
            ].getName(t), r=0, l=1/0, s=-1/0, u=o[
              i
            ].length, d=0;
            d<u;
            d++)l=Math.min(l, o[
              i
            ]
            [
              d
            ]), s=Math.max(s, o[
              i
            ]
            [
              d
            ]), r+=o[
              i
            ]
            [
              d
            ];
            return 0===u?NaN:"min"===n?l:"max"===n?s:"average"===n?r/u:r
          }))), r=0;
          r<e.length;
          r++)e[
            r
          ].originalData=e[
            r
          ].getData();
          for(r=0;
          r<e.length;
          r++)e[
            r
          ].seriesGroup=e, e[
            r
          ].needsDrawMap=0===r&&!e[
            r
          ].getHostGeoModel(), e[
            r
          ].setData(i.cloneShallow()), e[
            r
          ].mainSeries=e[
            0
          ]
        }))
      }
      function $(e){
        var t={
        };
        e.eachSeriesByType("map", (function(a){
          var n=a.getMapType();
          if(!a.getHostGeoModel()&&!t[
            n
          ]){
            var o={
            };
            L.each(a.seriesGroup, (function(t){
              var a=t.coordinateSystem, n=t.originalData;
              t.get("showLegendSymbol")&&e.getComponent("legend")&&n.each(n.mapDimension("value"), (function(e, t){
                var i=n.getName(t), r=a.getRegion(i);
                if(r&&!isNaN(e)){
                  var l=o[
                    i
                  ]
                  ||0, s=a.dataToPoint(r.getCenter());
                  o[
                    i
                  ]
                  =l+1, n.setItemLayout(t, {
                    point:s, offset:l
                  })
                }
              }))
            }));
            var i=a.getData();
            i.each((function(e){
              var t=i.getName(e), a=i.getItemLayout(e)||{
              };
              a.showLabel=!o[
                t
              ], i.setItemLayout(e, a)
            })), t[
              n
            ]
            =!0
          }
        }))
      }
      var ee=a(716884), te=a(300363);
      var ae=a(853849), ne=a(10128), oe=a(834253);
      function ie(e, t){
        var a=e.isExpand?e.children:[
        ], n=e.parentNode.children, o=e.hierNode.i?n[
          e.hierNode.i-1
        ]
        :null;
        if(a.length){
          !function(e){
            var t=e.children, a=t.length, n=0, o=0;
            for(;
            --a>=0;
            ){
              var i=t[
                a
              ];
              i.hierNode.prelim+=n, i.hierNode.modifier+=n, o+=i.hierNode.change, n+=i.hierNode.shift+o
            }
          }
          (e);
          var i=(a[
            0
          ].hierNode.prelim+a[
            a.length-1
          ].hierNode.prelim)/2;
          o?(e.hierNode.prelim=o.hierNode.prelim+t(e, o), e.hierNode.modifier=e.hierNode.prelim-i):e.hierNode.prelim=i
        }
        else o&&(e.hierNode.prelim=o.hierNode.prelim+t(e, o));
        e.parentNode.hierNode.defaultAncestor=function(e, t, a, n){
          if(t){
            for(var o=e, i=e, r=i.parentNode.children[
              0
            ], l=t, s=o.hierNode.modifier, u=i.hierNode.modifier, d=r.hierNode.modifier, c=l.hierNode.modifier;
            l=de(l), i=ce(i), l&&i;
            ){
              o=de(o), r=ce(r), o.hierNode.ancestor=e;
              var p=l.hierNode.prelim+c-i.hierNode.prelim-u+n(l, i);
              p>0&&(he(pe(l, e, a), e, p), u+=p, s+=p), c+=l.hierNode.modifier, u+=i.hierNode.modifier, s+=o.hierNode.modifier, d+=r.hierNode.modifier
            }
            l&&!de(o)&&(o.hierNode.thread=l, o.hierNode.modifier+=c-s), i&&!ce(r)&&(r.hierNode.thread=i, r.hierNode.modifier+=u-d, a=e)
          }
          return a
        }
        (e, o, e.parentNode.hierNode.defaultAncestor||n[
          0
        ], t)
      }
      function re(e){
        var t=e.hierNode.prelim+e.parentNode.hierNode.modifier;
        e.setLayout({
          x:t
        }, !0), e.hierNode.modifier+=e.parentNode.hierNode.modifier
      }
      function le(e){
        return arguments.length?e:ge
      }
      function se(e, t){
        return e-=Math.PI/2, {
          x:t*Math.cos(e), y:t*Math.sin(e)
        }
      }
      function ue(e, t){
        return oe.dV(e.getBoxLayoutParams(), {
          width:t.getWidth(), height:t.getHeight()
        })
      }
      function de(e){
        var t=e.children;
        return t.length&&e.isExpand?t[
          t.length-1
        ]
        :e.hierNode.thread
      }
      function ce(e){
        var t=e.children;
        return t.length&&e.isExpand?t[
          0
        ]
        :e.hierNode.thread
      }
      function pe(e, t, a){
        return e.hierNode.ancestor.parentNode===t.parentNode?e.hierNode.ancestor:a
      }
      function he(e, t, a){
        var n=a/(t.hierNode.i-e.hierNode.i);
        t.hierNode.change-=n, t.hierNode.shift+=a, t.hierNode.modifier+=a, t.hierNode.prelim+=a, e.hierNode.change+=n
      }
      function ge(e, t){
        return e.parentNode===t.parentNode?1:2
      }
      var fe=a(248813), ye=a(556219), me=a(956366), ve=a(281722), xe=a(572589), Se=a(624326), _e=function(){
        this.parentPoint=[
        ], this.childPoints=[
        ]
      }, be=function(e){
        function t(t){
          return e.call(this, t)||this
        }
        return(0, d.C6)(t, e), t.prototype.getDefaultStyle=function(){
          return{
            stroke:"#000", fill:null
          }
        }, t.prototype.getDefaultShape=function(){
          return new _e
        }, t.prototype.buildPath=function(e, t){
          var a=t.childPoints, n=a.length, o=t.parentPoint, i=a[
            0
          ], r=a[
            n-1
          ];
          if(1===n)return e.moveTo(o[
            0
          ], o[
            1
          ]), void e.lineTo(i[
            0
          ], i[
            1
          ]);
          var l=t.orient, s="TB"===l||"BT"===l?0:1, u=1-s, d=(0, Se.lo)(t.forkPosition, 1), c=[
          ];
          c[
            s
          ]
          =o[
            s
          ], c[
            u
          ]
          =o[
            u
          ]
          +(r[
            u
          ]
          -o[
            u
          ])*d, e.moveTo(o[
            0
          ], o[
            1
          ]), e.lineTo(c[
            0
          ], c[
            1
          ]), e.moveTo(i[
            0
          ], i[
            1
          ]), c[
            s
          ]
          =i[
            s
          ], e.lineTo(c[
            0
          ], c[
            1
          ]), c[
            s
          ]
          =r[
            s
          ], e.lineTo(c[
            0
          ], c[
            1
          ]), e.lineTo(r[
            0
          ], r[
            1
          ]);
          for(var p=1;
          p<n-1;
          p++){
            var h=a[
              p
            ];
            e.moveTo(h[
              0
            ], h[
              1
            ]), c[
              s
            ]
            =h[
              s
            ], e.lineTo(c[
              0
            ], c[
              1
            ])
          }
        }, t
      }
      (y.Ay);
      function Ie(e, t){
        var a=e.getItemLayout(t);
        return a&&!isNaN(a.x)&&!isNaN(a.y)
      }
      function we(e, t, a, n, o){
        var i=!a, r=e.tree.getNodeByDataIndex(t), l=r.getModel(), s=r.getVisual("style").fill, u=!1===r.isExpand&&0!==r.children.length?s:"#fff", d=e.tree.root, c=r.parentNode===d?r:r.parentNode||r, p=e.getItemGraphicEl(c.dataIndex), h=c.getLayout(), g=p?{
          x:p.__oldX, y:p.__oldY, rawX:p.__radialOldRawX, rawY:p.__radialOldRawY
        }
        :h, f=r.getLayout();
        i?((a=new ne.A(e, t, null, {
          symbolInnerColor:u, useNameLabel:!0
        })).x=g.x, a.y=g.y):a.updateData(e, t, null, {
          symbolInnerColor:u, useNameLabel:!0
        }), a.__radialOldRawX=a.__radialRawX, a.__radialOldRawY=a.__radialRawY, a.__radialRawX=f.rawX, a.__radialRawY=f.rawY, n.add(a), e.setItemGraphicEl(t, a), a.__oldX=a.x, a.__oldY=a.y, z.oi(a, {
          x:f.x, y:f.y
        }, o);
        var y=a.getSymbolPath();
        if("radial"===o.get("layout")){
          var m=d.children[
            0
          ], v=m.getLayout(), S=m.children.length, _=void 0, b=void 0;
          if(f.x===v.x&&!0===r.isExpand&&m.children.length){
            var I={
              x:(m.children[
                0
              ].getLayout().x+m.children[
                S-1
              ].getLayout().x)/2, y:(m.children[
                0
              ].getLayout().y+m.children[
                S-1
              ].getLayout().y)/2
            };
            (_=Math.atan2(I.y-v.y, I.x-v.x))<0&&(_=2*Math.PI+_), (b=I.x<v.x)&&(_-=Math.PI)
          }
          else(_=Math.atan2(f.y-v.y, f.x-v.x))<0&&(_=2*Math.PI+_), 0===r.children.length||0!==r.children.length&&!1===r.isExpand?(b=f.x<v.x)&&(_-=Math.PI):(b=f.x>v.x)||(_-=Math.PI);
          var w=b?"left":"right", A=l.getModel("label"), M=A.get("rotate"), D=M*(Math.PI/180), C=y.getTextContent();
          C&&(y.setTextConfig({
            position:A.get("position")||w, rotation:null==M?-_:D, origin:"center"
          }), C.setStyle("verticalAlign", "middle"))
        }
        var N=l.get([
          "emphasis", "focus"
        ]), T="relative"===N?L.concatArray(r.getAncestorsIndices(), r.getDescendantIndices()):"ancestor"===N?r.getAncestorsIndices():"descendant"===N?r.getDescendantIndices():null;
        T&&((0, x.z)(a).focus=T), function(e, t, a, n, o, i, r, l){
          var s=t.getModel(), u=e.get("edgeShape"), d=e.get("layout"), c=e.getOrient(), p=e.get([
            "lineStyle", "curveness"
          ]), h=e.get("edgeForkPosition"), g=s.getModel("lineStyle").getLineStyle(), f=n.__edge;
          if("curve"===u)t.parentNode&&t.parentNode!==a&&(f||(f=n.__edge=new ae.A({
            shape:De(d, c, p, o, o)
          })), z.oi(f, {
            shape:De(d, c, p, i, r)
          }, e));
          else if("polyline"===u)if("orthogonal"===d){
            if(t!==a&&t.children&&0!==t.children.length&&!0===t.isExpand){
              for(var y=t.children, m=[
              ], v=0;
              v<y.length;
              v++){
                var x=y[
                  v
                ].getLayout();
                m.push([
                  x.x, x.y
                ])
              }
              f||(f=n.__edge=new be({
                shape:{
                  parentPoint:[
                    r.x, r.y
                  ], childPoints:[
                    [
                      r.x, r.y
                    ]
                  ], orient:c, forkPosition:h
                }
              })), z.oi(f, {
                shape:{
                  parentPoint:[
                    r.x, r.y
                  ], childPoints:m
                }
              }, e)
            }
          }
          else 0;
          f&&("polyline"!==u||t.isExpand)&&(f.useStyle(L.defaults({
            strokeNoScale:!0, fill:null
          }, g)), (0, k.Mx)(f, s, "lineStyle"), (0, k.DW)(f), l.add(f))
        }
        (o, r, d, a, g, h, f, n), a.__edge&&(a.onHoverStateChange=function(t){
          if("blur"!==t){
            var n=r.parentNode&&e.getItemGraphicEl(r.parentNode.dataIndex);
            n&&n.hoverState===k.zX||(0, k.Pk)(a.__edge, t)
          }
        })
      }
      function Ae(e, t, a, n, o){
        var i=Me(t.tree.root, e), r=i.source, l=i.sourceLayout, s=t.getItemGraphicEl(e.dataIndex);
        if(s){
          var u=t.getItemGraphicEl(r.dataIndex).__edge, d=s.__edge||(!1===r.isExpand||1===r.children.length?u:void 0), c=n.get("edgeShape"), p=n.get("layout"), h=n.get("orient"), g=n.get([
            "lineStyle", "curveness"
          ]);
          d&&("curve"===c?z.Nz(d, {
            shape:De(p, h, g, l, l), style:{
              opacity:0
            }
          }, n, {
            cb:function(){
              a.remove(d)
            }, removeOpt:o
          }):"polyline"===c&&"orthogonal"===n.get("layout")&&z.Nz(d, {
            shape:{
              parentPoint:[
                l.x, l.y
              ], childPoints:[
                [
                  l.x, l.y
                ]
              ]
            }, style:{
              opacity:0
            }
          }, n, {
            cb:function(){
              a.remove(d)
            }, removeOpt:o
          }))
        }
      }
      function Me(e, t){
        for(var a, n=t.parentNode===e?t:t.parentNode||t;
        null==(a=n.getLayout());
        )n=n.parentNode===e?n:n.parentNode||n;
        return{
          source:n, sourceLayout:a
        }
      }
      function Le(e, t, a, n, o){
        var i=e.tree.getNodeByDataIndex(t), r=Me(e.tree.root, i).sourceLayout, l={
          duration:o.get("animationDurationUpdate"), easing:o.get("animationEasingUpdate")
        };
        z.Nz(a, {
          x:r.x+1, y:r.y+1
        }, o, {
          cb:function(){
            n.remove(a), e.setItemGraphicEl(t, null)
          }, removeOpt:l
        }), a.fadeOut(null, e.hostModel, {
          fadeLabel:!0, animation:l
        }), i.children.forEach((function(t){
          Ae(t, e, n, o, l)
        })), Ae(i, e, n, o, l)
      }
      function De(e, t, a, n, o){
        var i, r, l, s, u, d, c, p;
        if("radial"===e){
          u=n.rawX, c=n.rawY, d=o.rawX, p=o.rawY;
          var h=se(u, c), g=se(u, c+(p-c)*a), f=se(d, p+(c-p)*a), y=se(d, p);
          return{
            x1:h.x||0, y1:h.y||0, x2:y.x||0, y2:y.y||0, cpx1:g.x||0, cpy1:g.y||0, cpx2:f.x||0, cpy2:f.y||0
          }
        }
        return u=n.x, c=n.y, d=o.x, p=o.y, "LR"!==t&&"RL"!==t||(i=u+(d-u)*a, r=c, l=d+(u-d)*a, s=p), "TB"!==t&&"BT"!==t||(i=u, r=c+(p-c)*a, l=d, s=p+(c-p)*a), {
          x1:u, y1:c, x2:d, y2:p, cpx1:i, cpy1:r, cpx2:l, cpy2:s
        }
      }
      const Ce=function(e){
        function t(){
          var a=null!==e&&e.apply(this, arguments)||this;
          return a.type=t.type, a._mainGroup=new m.A, a
        }
        return(0, d.C6)(t, e), t.prototype.init=function(e, t){
          this._controller=new ve.A(t.getZr()), this._controllerHost={
            target:this.group
          }, this.group.add(this._mainGroup)
        }, t.prototype.render=function(e, t, a){
          var n=e.getData(), o=e.layoutInfo, i=this._mainGroup;
          "radial"===e.get("layout")?(i.x=o.x+o.width/2, i.y=o.y+o.height/2):(i.x=o.x, i.y=o.y), this._updateViewCoordSys(e, a), this._updateController(e, t, a);
          var r=this._data;
          n.diff(r).add((function(t){
            Ie(n, t)&&we(n, t, null, i, e)
          })).update((function(t, a){
            var o=r.getItemGraphicEl(a);
            Ie(n, t)?we(n, t, o, i, e):o&&Le(r, a, o, i, e)
          })).remove((function(t){
            var a=r.getItemGraphicEl(t);
            a&&Le(r, t, a, i, e)
          })).execute(), this._nodeScaleRatio=e.get("nodeScaleRatio"), this._updateNodeAndLinkScale(e), !0===e.get("expandAndCollapse")&&n.eachItemGraphicEl((function(t, n){
            t.off("click").on("click", (function(){
              a.dispatchAction({
                type:"treeExpandAndCollapse", seriesId:e.id, dataIndex:n
              })
            }))
          })), this._data=n
        }, t.prototype._updateViewCoordSys=function(e, t){
          var a=e.getData(), n=[
          ];
          a.each((function(e){
            var t=a.getItemLayout(e);
            !t||isNaN(t.x)||isNaN(t.y)||n.push([
              +t.x, +t.y
            ])
          }));
          var o=[
          ], i=[
          ];
          fe.Cr(n, o, i);
          var r=this._min, l=this._max;
          i[
            0
          ]
          -o[
            0
          ]
          ==0&&(o[
            0
          ]
          =r?r[
            0
          ]
          :o[
            0
          ]
          -1, i[
            0
          ]
          =l?l[
            0
          ]
          :i[
            0
          ]
          +1), i[
            1
          ]
          -o[
            1
          ]
          ==0&&(o[
            1
          ]
          =r?r[
            1
          ]
          :o[
            1
          ]
          -1, i[
            1
          ]
          =l?l[
            1
          ]
          :i[
            1
          ]
          +1);
          var s=e.coordinateSystem=new ye.A;
          s.zoomLimit=e.get("scaleLimit"), s.setBoundingRect(o[
            0
          ], o[
            1
          ], i[
            0
          ]
          -o[
            0
          ], i[
            1
          ]
          -o[
            1
          ]), s.setCenter(e.get("center"), t), s.setZoom(e.get("zoom")), this.group.attr({
            x:s.x, y:s.y, scaleX:s.scaleX, scaleY:s.scaleY
          }), this._min=o, this._max=i
        }, t.prototype._updateController=function(e, t, a){
          var n=this, o=this._controller, i=this._controllerHost, r=this.group;
          o.setPointerChecker((function(t, n, o){
            var i=r.getBoundingRect();
            return i.applyTransform(r.transform), i.contain(n, o)&&!(0, xe.I)(t, a, e)
          })), o.enable(e.get("roam")), i.zoomLimit=e.get("scaleLimit"), i.zoom=e.coordinateSystem.getZoom(), o.off("pan").off("zoom").on("pan", (function(t){
            me.t(i, t.dx, t.dy), a.dispatchAction({
              seriesId:e.id, type:"treeRoam", dx:t.dx, dy:t.dy
            })
          })).on("zoom", (function(t){
            me.x(i, t.scale, t.originX, t.originY), a.dispatchAction({
              seriesId:e.id, type:"treeRoam", zoom:t.scale, originX:t.originX, originY:t.originY
            }), n._updateNodeAndLinkScale(e), a.updateLabelLayout()
          }))
        }, t.prototype._updateNodeAndLinkScale=function(e){
          var t=e.getData(), a=this._getNodeGlobalScale(e);
          t.eachItemGraphicEl((function(e, t){
            e.setSymbolScale(a)
          }))
        }, t.prototype._getNodeGlobalScale=function(e){
          var t=e.coordinateSystem;
          if("view"!==t.type)return 1;
          var a=this._nodeScaleRatio, n=t.scaleX||1;
          return((t.getZoom()-1)*a+1)/n
        }, t.prototype.dispose=function(){
          this._controller&&this._controller.dispose(), this._controllerHost=null
        }, t.prototype.remove=function(){
          this._mainGroup.removeAll(), this._data=null
        }, t.type="tree", t
      }
      (w.A);
      var Ne=a(315719), Te=a(143172);
      function Pe(e, t, a){
        if(e&&L.indexOf(t, e.type)>=0){
          var n=a.getData().tree.root, o=e.targetNode;
          if(L.isString(o)&&(o=n.getNodeById(o)), o&&n.contains(o))return{
            node:o
          };
          var i=e.targetNodeId;
          if(null!=i&&(o=n.getNodeById(i)))return{
            node:o
          }
        }
      }
      function Ee(e){
        for(var t=[
        ];
        e;
        )(e=e.parentNode)&&t.push(e);
        return t.reverse()
      }
      function Ve(e, t){
        var a=Ee(e);
        return L.indexOf(a, t)>=0
      }
      function Re(e, t){
        for(var a=[
        ];
        e;
        ){
          var n=e.dataIndex;
          a.push({
            name:e.name, dataIndex:n, value:t.getRawValue(n)
          }), e=e.parentNode
        }
        return a.reverse(), a
      }
      const ze=function(e){
        function t(){
          var t=null!==e&&e.apply(this, arguments)||this;
          return t.hasSymbolVisual=!0, t.ignoreStyleOnData=!0, t
        }
        return(0, d.C6)(t, e), t.prototype.getInitialData=function(e){
          var t={
            name:e.name, children:e.data
          }, a=e.leaves||{
          }, n=new Te.A(a, this, this.ecModel), o=Ne.A.createTree(t, this, (function(e){
            e.wrapMethod("getItemModel", (function(e, t){
              var a=o.getNodeByDataIndex(t);
              return a&&a.children.length&&a.isExpand||(e.parentModel=n), e
            }))
          }));
          var i=0;
          o.eachNode("preorder", (function(e){
            e.depth>i&&(i=e.depth)
          }));
          var r=e.expandAndCollapse&&e.initialTreeDepth>=0?e.initialTreeDepth:i;
          return o.root.eachNode("preorder", (function(e){
            var t=e.hostTree.data.getRawDataItem(e.dataIndex);
            e.isExpand=t&&null!=t.collapsed?!t.collapsed:e.depth<=r
          })), o.data
        }, t.prototype.getOrient=function(){
          var e=this.get("orient");
          return"horizontal"===e?e="LR":"vertical"===e&&(e="TB"), e
        }, t.prototype.setZoom=function(e){
          this.option.zoom=e
        }, t.prototype.setCenter=function(e){
          this.option.center=e
        }, t.prototype.formatTooltip=function(e, t, a){
          for(var n=this.getData().tree, o=n.root.children[
            0
          ], i=n.getNodeByDataIndex(e), r=i.getValue(), l=i.name;
          i&&i!==o;
          )l=i.parentNode.name+"."+l, i=i.parentNode;
          return(0, W.Qx)("nameValue", {
            name:l, value:r, noValue:isNaN(r)||null==r
          })
        }, t.prototype.getDataParams=function(t){
          var a=e.prototype.getDataParams.apply(this, arguments), n=this.getData().tree.getNodeByDataIndex(t);
          return a.treeAncestors=Re(n, this), a.collapsed=!n.isExpand, a
        }, t.type="series.tree", t.layoutMode="box", t.defaultOption={
          z:2, coordinateSystem:"view", left:"12%", top:"12%", right:"12%", bottom:"12%", layout:"orthogonal", edgeShape:"curve", edgeForkPosition:"50%", roam:!1, nodeScaleRatio:.4, center:null, zoom:1, orient:"LR", symbol:"emptyCircle", symbolSize:7, expandAndCollapse:!0, initialTreeDepth:2, lineStyle:{
            color:"#ccc", width:1.5, curveness:.5
          }, itemStyle:{
            color:"lightsteelblue", borderWidth:1.5
          }, label:{
            show:!0
          }, animationEasing:"linear", animationDuration:700, animationDurationUpdate:500
        }, t
      }
      (p.A);
      function ke(e, t){
        for(var a, n=[
          e
        ];
        a=n.pop();
        )if(t(a), a.isExpand){
          var o=a.children;
          if(o.length)for(var i=o.length-1;
          i>=0;
          i--)n.push(o[
            i
          ])
        }
      }
      function Ge(e, t){
        e.eachSeriesByType("tree", (function(e){
          !function(e, t){
            var a=ue(e, t);
            e.layoutInfo=a;
            var n=e.get("layout"), o=0, i=0, r=null;
            "radial"===n?(o=2*Math.PI, i=Math.min(a.height, a.width)/2, r=le((function(e, t){
              return(e.parentNode===t.parentNode?1:2)/e.depth
            }))):(o=a.width, i=a.height, r=le());
            var l=e.getData().tree.root, s=l.children[
              0
            ];
            if(s){
              !function(e){
                var t=e;
                t.hierNode={
                  defaultAncestor:null, ancestor:t, prelim:0, modifier:0, change:0, shift:0, i:0, thread:null
                };
                for(var a, n, o=[
                  t
                ];
                a=o.pop();
                )if(n=a.children, a.isExpand&&n.length)for(var i=n.length-1;
                i>=0;
                i--){
                  var r=n[
                    i
                  ];
                  r.hierNode={
                    defaultAncestor:null, ancestor:r, prelim:0, modifier:0, change:0, shift:0, i, thread:null
                  }, o.push(r)
                }
              }
              (l), function(e, t, a){
                for(var n, o=[
                  e
                ], i=[
                ];
                n=o.pop();
                )if(i.push(n), n.isExpand){
                  var r=n.children;
                  if(r.length)for(var l=0;
                  l<r.length;
                  l++)o.push(r[
                    l
                  ])
                }
                for(;
                n=i.pop();
                )t(n, a)
              }
              (s, ie, r), l.hierNode.modifier=-s.hierNode.prelim, ke(s, re);
              var u=s, d=s, c=s;
              ke(s, (function(e){
                var t=e.getLayout().x;
                t<u.getLayout().x&&(u=e), t>d.getLayout().x&&(d=e), e.depth>c.depth&&(c=e)
              }));
              var p=u===d?1:r(u, d)/2, h=p-u.getLayout().x, g=0, f=0, y=0, m=0;
              if("radial"===n)g=o/(d.getLayout().x+p+h), f=i/(c.depth-1||1), ke(s, (function(e){
                y=(e.getLayout().x+h)*g, m=(e.depth-1)*f;
                var t=se(y, m);
                e.setLayout({
                  x:t.x, y:t.y, rawX:y, rawY:m
                }, !0)
              }));
              else{
                var v=e.getOrient();
                "RL"===v||"LR"===v?(f=i/(d.getLayout().x+p+h), g=o/(c.depth-1||1), ke(s, (function(e){
                  m=(e.getLayout().x+h)*f, y="LR"===v?(e.depth-1)*g:o-(e.depth-1)*g, e.setLayout({
                    x:y, y:m
                  }, !0)
                }))):"TB"!==v&&"BT"!==v||(g=o/(d.getLayout().x+p+h), f=i/(c.depth-1||1), ke(s, (function(e){
                  y=(e.getLayout().x+h)*g, m="TB"===v?(e.depth-1)*f:i-(e.depth-1)*f, e.setLayout({
                    x:y, y:m
                  }, !0)
                })))
              }
            }
          }
          (e, t)
        }))
      }
      function Oe(e){
        e.eachSeriesByType("tree", (function(e){
          var t=e.getData();
          t.tree.eachNode((function(e){
            var a=e.getModel().getModel("itemStyle").getItemStyle(), n=t.ensureUniqueItemVisual(e.dataIndex, "style");
            (0, L.extend)(n, a)
          }))
        }))
      }
      var Be=a(878536);
      var Ye=[
        "treemapZoomToNode", "treemapRender", "treemapMove"
      ];
      var Fe=a(48170), We=a(996501);
      function He(e){
        var t=e.getData().tree, a={
        };
        t.eachNode((function(t){
          for(var n=t;
          n&&n.depth>1;
          )n=n.parentNode;
          var o=(0, We.x)(e.ecModel, n.name||n.dataIndex+"", a);
          t.setVisual("decal", o)
        }))
      }
      function Xe(e){
        var t=0;
        L.each(e.children, (function(e){
          Xe(e);
          var a=e.value;
          L.isArray(a)&&(a=a[
            0
          ]), t+=a
        }));
        var a=e.value;
        L.isArray(a)&&(a=a[
          0
        ]), (null==a||isNaN(a))&&(a=t), a<0&&(a=0), L.isArray(e.value)?e.value[
          0
        ]
        =a:e.value=a
      }
      const Ue=function(e){
        function t(){
          var a=null!==e&&e.apply(this, arguments)||this;
          return a.type=t.type, a.preventUsingHoverLayer=!0, a
        }
        return(0, d.C6)(t, e), t.prototype.getInitialData=function(e, t){
          var a={
            name:e.name, children:e.data
          };
          Xe(a);
          var n=e.levels||[
          ], o=this.designatedVisualItemStyle={
          }, i=new Te.A({
            itemStyle:o
          }, this, t);
          n=e.levels=function(e, t){
            var a, n, o=(0, Fe.qB)(t.get("color")), i=(0, Fe.qB)(t.get([
              "aria", "decal", "decals"
            ]));
            if(!o)return;
            e=e||[
            ], L.each(e, (function(e){
              var t=new Te.A(e), o=t.get("color"), i=t.get("decal");
              (t.get([
                "itemStyle", "color"
              ])||o&&"none"!==o)&&(a=!0), (t.get([
                "itemStyle", "decal"
              ])||i&&"none"!==i)&&(n=!0)
            }));
            var r=e[
              0
            ]
            ||(e[
              0
            ]
            ={
            });
            a||(r.color=o.slice());
            !n&&i&&(r.decal=i.slice());
            return e
          }
          (n, t);
          var r=L.map(n||[
          ], (function(e){
            return new Te.A(e, i, t)
          }), this), l=Ne.A.createTree(a, this, (function(e){
            e.wrapMethod("getItemModel", (function(e, t){
              var a=l.getNodeByDataIndex(t), n=a?r[
                a.depth
              ]
              :null;
              return e.parentModel=n||i, e
            }))
          }));
          return l.data
        }, t.prototype.optionUpdated=function(){
          this.resetViewRoot()
        }, t.prototype.formatTooltip=function(e, t, a){
          var n=this.getData(), o=this.getRawValue(e), i=n.getName(e);
          return(0, W.Qx)("nameValue", {
            name:i, value:o
          })
        }, t.prototype.getDataParams=function(t){
          var a=e.prototype.getDataParams.apply(this, arguments), n=this.getData().tree.getNodeByDataIndex(t);
          return a.treeAncestors=Re(n, this), a.treePathInfo=a.treeAncestors, a
        }, t.prototype.setLayoutInfo=function(e){
          this.layoutInfo=this.layoutInfo||{
          }, L.extend(this.layoutInfo, e)
        }, t.prototype.mapIdToIndex=function(e){
          var t=this._idIndexMap;
          t||(t=this._idIndexMap=L.createHashMap(), this._idIndexMapCount=0);
          var a=t.get(e);
          return null==a&&t.set(e, a=this._idIndexMapCount++), a
        }, t.prototype.getViewRoot=function(){
          return this._viewRoot
        }, t.prototype.resetViewRoot=function(e){
          e?this._viewRoot=e:e=this._viewRoot;
          var t=this.getRawData().tree.root;
          e&&(e===t||t.contains(e))||(this._viewRoot=t)
        }, t.prototype.enableAriaDecal=function(){
          He(this)
        }, t.type="series.treemap", t.layoutMode="box", t.defaultOption={
          progressive:0, left:"center", top:"middle", width:"80%", height:"80%", sort:!0, clipWindow:"origin", squareRatio:.5*(1+Math.sqrt(5)), leafDepth:null, drillDownIcon:"▶", zoomToNodeRatio:.1024, scaleLimit:null, roam:!0, nodeClick:"zoomToNode", animation:!0, animationDurationUpdate:900, animationEasing:"quinticInOut", breadcrumb:{
            show:!0, height:22, left:"center", top:"bottom", emptyItemWidth:25, itemStyle:{
              color:"rgba(0,0,0,0.7)", textStyle:{
                color:"#fff"
              }
            }, emphasis:{
              itemStyle:{
                color:"rgba(0,0,0,0.9)"
              }
            }
          }, label:{
            show:!0, distance:0, padding:5, position:"inside", color:"#fff", overflow:"truncate"
          }, upperLabel:{
            show:!1, position:[
              0, "50%"
            ], height:20, overflow:"truncate", verticalAlign:"middle"
          }, itemStyle:{
            color:null, colorAlpha:null, colorSaturation:null, borderWidth:0, gapWidth:0, borderColor:"#fff", borderColorSaturation:null
          }, emphasis:{
            upperLabel:{
              show:!0, position:[
                0, "50%"
              ], overflow:"truncate", verticalAlign:"middle"
            }
          }, visualDimension:0, visualMin:null, visualMax:null, color:[
          ], colorAlpha:null, colorSaturation:null, colorMappingBy:"index", visibleMin:10, childrenVisibleMin:null, levels:[
          ]
        }, t
      }
      (p.A);
      var Ze=a(830010), qe=a(716563), je=a(132322);
      function Qe(e, t, a, n, o, i){
        var r=[
          [
            o?e:e-5, t
          ], [
            e+a, t
          ], [
            e+a, t+n
          ], [
            o?e:e-5, t+n
          ]
        ];
        return!i&&r.splice(2, 0, [
          e+a+5, t+n/2
        ]), !o&&r.push([
          e, t+n/2
        ]), r
      }
      function Je(e, t, a){
        (0, x.z)(e).eventData={
          componentType:"series", componentSubType:"treemap", componentIndex:t.componentIndex, seriesIndex:t.seriesIndex, seriesName:t.name, seriesType:"treemap", selfType:"breadcrumb", nodeData:{
            dataIndex:a&&a.dataIndex, name:a&&a.name
          }, treePathInfo:a&&Re(a, t)
        }
      }
      const Ke=function(){
        function e(e){
          this.group=new m.A, e.add(this.group)
        }
        return e.prototype.render=function(e, t, a, n){
          var o=e.getModel("breadcrumb"), i=this.group;
          if(i.removeAll(), o.get("show")&&a){
            var r=o.getModel("itemStyle"), l=o.getModel("emphasis"), s=r.getModel("textStyle"), u=l.getModel([
              "itemStyle", "textStyle"
            ]), d={
              pos:{
                left:o.get("left"), right:o.get("right"), top:o.get("top"), bottom:o.get("bottom")
              }, box:{
                width:t.getWidth(), height:t.getHeight()
              }, emptyItemWidth:o.get("emptyItemWidth"), totalWidth:0, renderList:[
              ]
            };
            this._prepare(a, d, s), this._renderContent(e, d, r, l, s, u, n), oe.m$(i, d.pos, d.box)
          }
        }, e.prototype._prepare=function(e, t, a){
          for(var n=e;
          n;
          n=n.parentNode){
            var o=(0, Fe.vS)(n.getModel().get("name"), ""), i=a.getTextRect(o), r=Math.max(i.width+16, t.emptyItemWidth);
            t.totalWidth+=r+8, t.renderList.push({
              node:n, text:o, width:r
            })
          }
        }, e.prototype._renderContent=function(e, t, a, n, o, i, r){
          for(var l=0, s=t.emptyItemWidth, u=e.get([
            "breadcrumb", "height"
          ]), d=oe.HU(t.pos, t.box), c=t.totalWidth, p=t.renderList, h=n.getModel("itemStyle").getItemStyle(), g=p.length-1;
          g>=0;
          g--){
            var f=p[
              g
            ], y=f.node, m=f.width, v=f.text;
            c>d.width&&(c-=m-s, m=s, v=null);
            var x=new V.A({
              shape:{
                points:Qe(l, 0, m, u, g===p.length-1, 0===g)
              }, style:(0, L.defaults)(a.getItemStyle(), {
                lineJoin:"bevel"
              }), textContent:new je.Ay({
                style:(0, G.VB)(o, {
                  text:v
                })
              }), textConfig:{
                position:"inside"
              }, z2:1e4*k.CA, onclick:(0, L.curry)(r, y)
            });
            x.disableLabelAnimation=!0, x.getTextContent().ensureState("emphasis").style=(0, G.VB)(i, {
              text:v
            }), x.ensureState("emphasis").style=h, (0, k.Lm)(x, n.get("focus"), n.get("blurScope"), n.get("disabled")), this.group.add(x), Je(x, e, y), l+=m+8
          }
        }, e.prototype.remove=function(){
          this.group.removeAll()
        }, e
      }
      ();
      var $e=a(345587), et=a(963253), tt=a(732944), at=a(171519), nt=a(783412), ot=m.A, it=Ze.A, rt="label", lt="upperLabel", st=10*k.CA, ut=2*k.CA, dt=3*k.CA, ct=(0, tt.A)([
        [
          "fill", "color"
        ], [
          "stroke", "strokeColor"
        ], [
          "lineWidth", "strokeWidth"
        ], [
          "shadowBlur"
        ], [
          "shadowOffsetX"
        ], [
          "shadowOffsetY"
        ], [
          "shadowColor"
        ]
      ]), pt=function(e){
        var t=ct(e);
        return t.stroke=t.fill=t.lineWidth=null, t
      }, ht=(0, Fe.$r)();
      const gt=function(e){
        function t(){
          var a=null!==e&&e.apply(this, arguments)||this;
          return a.type=t.type, a._state="ready", a._storage={
            nodeGroup:[
            ], background:[
            ], content:[
            ]
          }, a
        }
        return(0, d.C6)(t, e), t.prototype.render=function(e, t, a, n){
          var o=t.findComponents({
            mainType:"series", subType:"treemap", query:n
          });
          if(!((0, L.indexOf)(o, e)<0)){
            this.seriesModel=e, this.api=a, this.ecModel=t;
            var i=Pe(n, [
              "treemapZoomToNode", "treemapRootToNode"
            ], e), r=n&&n.type, l=e.layoutInfo, s=!this._oldTree, u=this._storage, d="treemapRootToNode"===r&&i&&u?{
              rootNodeGroup:u.nodeGroup[
                i.node.getRawIndex()
              ], direction:n.direction
            }
            :null, c=this._giveContainerGroup(l), p=e.get("animation"), h=this._doRender(c, e, d);
            !p||s||r&&"treemapZoomToNode"!==r&&"treemapRootToNode"!==r?h.renderFinally():this._doAnimation(c, h, e, d), this._resetController(a), this._renderBreadcrumb(e, a, i)
          }
        }, t.prototype._giveContainerGroup=function(e){
          var t=this._containerGroup;
          return t||(t=this._containerGroup=new ot, this._initEvents(t), this.group.add(t)), t.x=e.x, t.y=e.y, t
        }, t.prototype._doRender=function(e, t, a){
          var n=t.getData().tree, o=this._oldTree, i={
            nodeGroup:[
            ], background:[
            ], content:[
            ]
          }, r={
            nodeGroup:[
            ], background:[
            ], content:[
            ]
          }, l=this._storage, s=[
          ];
          function u(e, n, o, u){
            return function(e, t, a, n, o, i, r, l, s, u){
              if(!r)return;
              var d=r.getLayout(), c=e.getData(), p=r.getModel();
              if(c.setItemGraphicEl(r.dataIndex, null), !d||!d.isInView)return;
              var h=d.width, g=d.height, f=d.borderWidth, y=d.invisible, v=r.getRawIndex(), S=l&&l.getRawIndex(), _=r.viewChildren, b=d.upperHeight, I=_&&_.length, w=p.getModel("itemStyle"), A=p.getModel([
                "emphasis", "itemStyle"
              ]), M=p.getModel([
                "blur", "itemStyle"
              ]), D=p.getModel([
                "select", "itemStyle"
              ]), C=w.get("borderRadius")||0, N=U("nodeGroup", ot);
              if(!N)return;
              if(s.add(N), N.x=d.x||0, N.y=d.y||0, N.markRedraw(), ht(N).nodeWidth=h, ht(N).nodeHeight=g, d.isAboveViewRoot)return N;
              var T=U("background", it, u, ut);
              T&&Y(N, T, I&&d.upperLabelHeight);
              var P=p.getModel("emphasis"), E=P.get("focus"), V=P.get("blurScope"), R=P.get("disabled"), z="ancestor"===E?r.getAncestorsIndices():"descendant"===E?r.getDescendantIndices():E;
              if(I)(0, k.u6)(N)&&(0, k.ix)(N, !1), T&&((0, k.ix)(T, !R), c.setItemGraphicEl(r.dataIndex, T), (0, k.gR)(T, z, V));
              else{
                var O=U("content", it, u, dt);
                O&&F(N, O), T.disableMorphing=!0, T&&(0, k.u6)(T)&&(0, k.ix)(T, !1), (0, k.ix)(N, !R), c.setItemGraphicEl(r.dataIndex, N);
                var B=p.getShallow("cursor");
                B&&O.attr("cursor", B), (0, k.gR)(N, z, V)
              }
              return N;
              function Y(t, a, n){
                var o=(0, x.z)(a);
                if(o.dataIndex=r.dataIndex, o.seriesIndex=e.seriesIndex, a.setShape({
                  x:0, y:0, width:h, height:g, r:C
                }), y)W(a);
                else{
                  a.invisible=!1;
                  var i=r.getVisual("style"), l=i.stroke, s=pt(w);
                  s.fill=l;
                  var u=ct(A);
                  u.fill=A.get("borderColor");
                  var d=ct(M);
                  d.fill=M.get("borderColor");
                  var c=ct(D);
                  if(c.fill=D.get("borderColor"), n){
                    var p=h-2*f;
                    H(a, l, i.opacity, {
                      x:f, y:0, width:p, height:b
                    })
                  }
                  else a.removeTextContent();
                  a.setStyle(s), a.ensureState("emphasis").style=u, a.ensureState("blur").style=d, a.ensureState("select").style=c, (0, k.DW)(a)
                }
                t.add(a)
              }
              function F(t, a){
                var n=(0, x.z)(a);
                n.dataIndex=r.dataIndex, n.seriesIndex=e.seriesIndex;
                var o=Math.max(h-2*f, 0), i=Math.max(g-2*f, 0);
                if(a.culling=!0, a.setShape({
                  x:f, y:f, width:o, height:i, r:C
                }), y)W(a);
                else{
                  a.invisible=!1;
                  var l=r.getVisual("style"), s=l.fill, u=pt(w);
                  u.fill=s, u.decal=l.decal;
                  var d=ct(A), c=ct(M), p=ct(D);
                  H(a, s, l.opacity, null), a.setStyle(u), a.ensureState("emphasis").style=d, a.ensureState("blur").style=c, a.ensureState("select").style=p, (0, k.DW)(a)
                }
                t.add(a)
              }
              function W(e){
                !e.invisible&&i.push(e)
              }
              function H(t, a, n, o){
                var i=p.getModel(o?lt:rt), l=(0, Fe.vS)(p.get("name"), null), s=i.getShallow("show");
                (0, G.qM)(t, (0, G.lx)(p, o?lt:rt), {
                  defaultText:s?l:null, inheritColor:a, defaultOpacity:n, labelFetcher:e, labelDataIndex:r.dataIndex
                });
                var u=t.getTextContent();
                if(u){
                  var c=u.style, h=(0, L.normalizeCssArray)(c.padding||0);
                  o&&(t.setTextConfig({
                    layoutRect:o
                  }), u.disableLabelLayout=!0), u.beforeUpdate=function(){
                    var e=Math.max((o?o.width:t.shape.width)-h[
                      1
                    ]
                    -h[
                      3
                    ], 0), a=Math.max((o?o.height:t.shape.height)-h[
                      0
                    ]
                    -h[
                      2
                    ], 0);
                    c.width===e&&c.height===a||u.setStyle({
                      width:e, height:a
                    })
                  }, c.truncateMinChar=2, c.lineOverflow="truncate", X(c, o, d);
                  var g=u.getState("emphasis");
                  X(g?g.style:null, o, d)
                }
              }
              function X(t, a, n){
                var o=t?t.text:null;
                if(!a&&n.isLeafRoot&&null!=o){
                  var i=e.get("drillDownIcon", !0);
                  t.text=i?i+" "+o:o
                }
              }
              function U(e, n, i, r){
                var l=null!=S&&a[
                  e
                ]
                [
                  S
                ], s=o[
                  e
                ];
                return l?(a[
                  e
                ]
                [
                  S
                ]
                =null, Z(s, l)):y||((l=new n)instanceof at.Ay&&(l.z2=function(e, t){
                  return e*st+t
                }
                (i, r)), q(s, l)), t[
                  e
                ]
                [
                  v
                ]
                =l
              }
              function Z(e, t){
                var a=e[
                  v
                ]
                ={
                };
                t instanceof ot?(a.oldX=t.x, a.oldY=t.y):a.oldShape=(0, L.extend)({
                }, t.shape)
              }
              function q(e, t){
                var a=e[
                  v
                ]
                ={
                }, i=r.parentNode, l=t instanceof m.A;
                if(i&&(!n||"drillDown"===n.direction)){
                  var s=0, u=0, d=o.background[
                    i.getRawIndex()
                  ];
                  !n&&d&&d.oldShape&&(s=d.oldShape.width, u=d.oldShape.height), l?(a.oldX=0, a.oldY=u):a.oldShape={
                    x:s, y:u, width:0, height:0
                  }
                }
                a.fadein=!l
              }
            }
            (t, r, l, a, i, s, e, n, o, u)
          }
          !function e(t, a, n, o, i){
            o?(a=t, (0, L.each)(t, (function(e, t){
              !e.isRemoved()&&l(t, t)
            }))):new qe.A(a, t, r, r).add(l).update(l).remove((0, L.curry)(l, null)).execute();
            function r(e){
              return e.getId()
            }
            function l(r, l){
              var s=null!=r?t[
                r
              ]
              :null, d=null!=l?a[
                l
              ]
              :null, c=u(s, d, n, i);
              c&&e(s&&s.viewChildren||[
              ], d&&d.viewChildren||[
              ], c, o, i+1)
            }
          }
          (n.root?[
            n.root
          ]
          :[
          ], o&&o.root?[
            o.root
          ]
          :[
          ], e, n===o||!o, 0);
          var d=function(e){
            var t={
              nodeGroup:[
              ], background:[
              ], content:[
              ]
            };
            return e&&(0, L.each)(e, (function(e, a){
              var n=t[
                a
              ];
              (0, L.each)(e, (function(e){
                e&&(n.push(e), ht(e).willDelete=!0)
              }))
            })), t
          }
          (l);
          if(this._oldTree=n, this._storage=r, this._controllerHost){
            var c=this.seriesModel.layoutInfo, p=n.root.getLayout();
            p.width===c.width&&p.height===c.height&&(this._controllerHost.zoom=1)
          }
          return{
            lastsForAnimation:i, willDeleteEls:d, renderFinally:function(){
              (0, L.each)(d, (function(e){
                (0, L.each)(e, (function(e){
                  e.parent&&e.parent.remove(e)
                }))
              })), (0, L.each)(s, (function(e){
                e.invisible=!0, e.dirty()
              }))
            }
          }
        }, t.prototype._doAnimation=function(e, t, a, n){
          var o=a.get("animationDurationUpdate"), i=a.get("animationEasing"), r=((0, L.isFunction)(o)?0:o)||0, l=((0, L.isFunction)(i)?null:i)||"cubicOut", s=et.x();
          (0, L.each)(t.willDeleteEls, (function(e, t){
            (0, L.each)(e, (function(e, a){
              if(!e.invisible){
                var o, i=e.parent, u=ht(i);
                if(n&&"drillDown"===n.direction)o=i===n.rootNodeGroup?{
                  shape:{
                    x:0, y:0, width:u.nodeWidth, height:u.nodeHeight
                  }, style:{
                    opacity:0
                  }
                }
                :{
                  style:{
                    opacity:0
                  }
                };
                else{
                  var d=0, c=0;
                  u.willDelete||(d=u.nodeWidth/2, c=u.nodeHeight/2), o="nodeGroup"===t?{
                    x:d, y:c, style:{
                      opacity:0
                    }
                  }
                  :{
                    shape:{
                      x:d, y:c, width:0, height:0
                    }, style:{
                      opacity:0
                    }
                  }
                }
                o&&s.add(e, o, r, 0, l)
              }
            }))
          })), (0, L.each)(this._storage, (function(e, a){
            (0, L.each)(e, (function(e, n){
              var o=t.lastsForAnimation[
                a
              ]
              [
                n
              ], i={
              };
              o&&(e instanceof m.A?null!=o.oldX&&(i.x=e.x, i.y=e.y, e.x=o.oldX, e.y=o.oldY):(o.oldShape&&(i.shape=(0, L.extend)({
              }, e.shape), e.setShape(o.oldShape)), o.fadein?(e.setStyle("opacity", 0), i.style={
                opacity:1
              }):1!==e.style.opacity&&(i.style={
                opacity:1
              })), s.add(e, i, r, 0, l))
            }))
          }), this), this._state="animating", s.finished((0, L.bind)((function(){
            this._state="ready", t.renderFinally()
          }), this)).start()
        }, t.prototype._resetController=function(e){
          var t=this._controller, a=this._controllerHost;
          a||(this._controllerHost={
            target:this.group
          }, a=this._controllerHost), t||((t=this._controller=new ve.A(e.getZr())).enable(this.seriesModel.get("roam")), a.zoomLimit=this.seriesModel.get("scaleLimit"), a.zoom=this.seriesModel.get("zoom"), t.on("pan", (0, L.bind)(this._onPan, this)), t.on("zoom", (0, L.bind)(this._onZoom, this)));
          var n=new f.A(0, 0, e.getWidth(), e.getHeight());
          t.setPointerChecker((function(e, t, a){
            return n.contain(t, a)
          }))
        }, t.prototype._clearController=function(){
          var e=this._controller;
          this._controllerHost=null, e&&(e.dispose(), e=null)
        }, t.prototype._onPan=function(e){
          if("animating"!==this._state&&(Math.abs(e.dx)>3||Math.abs(e.dy)>3)){
            var t=this.seriesModel.getData().tree.root;
            if(!t)return;
            var a=t.getLayout();
            if(!a)return;
            this.api.dispatchAction({
              type:"treemapMove", from:this.uid, seriesId:this.seriesModel.id, rootRect:{
                x:a.x+e.dx, y:a.y+e.dy, width:a.width, height:a.height
              }
            })
          }
        }, t.prototype._onZoom=function(e){
          var t=e.originX, a=e.originY, n=e.scale;
          if("animating"!==this._state){
            var o=this.seriesModel.getData().tree.root;
            if(!o)return;
            var i=o.getLayout();
            if(!i)return;
            var r, l=new f.A(i.x, i.y, i.width, i.height), s=this._controllerHost;
            r=s.zoomLimit;
            var u=s.zoom=s.zoom||1;
            if(u*=n, r){
              var d=r.min||0, c=r.max||1/0;
              u=Math.max(Math.min(c, u), d)
            }
            var p=u/s.zoom;
            s.zoom=u;
            var h=this.seriesModel.layoutInfo;
            t-=h.x, a-=h.y;
            var g=$e.create();
            $e.translate(g, g, [
              -t, -a
            ]), $e.scale(g, g, [
              p, p
            ]), $e.translate(g, g, [
              t, a
            ]), l.applyTransform(g), this.api.dispatchAction({
              type:"treemapRender", from:this.uid, seriesId:this.seriesModel.id, rootRect:{
                x:l.x, y:l.y, width:l.width, height:l.height
              }
            })
          }
        }, t.prototype._initEvents=function(e){
          var t=this;
          e.on("click", (function(e){
            if("ready"===t._state){
              var a=t.seriesModel.get("nodeClick", !0);
              if(a){
                var n=t.findTarget(e.offsetX, e.offsetY);
                if(n){
                  var o=n.node;
                  if(o.getLayout().isLeafRoot)t._rootToNode(n);
                  else if("zoomToNode"===a)t._zoomToNode(n);
                  else if("link"===a){
                    var i=o.hostTree.data.getItemModel(o.dataIndex), r=i.get("link", !0), l=i.get("target", !0)||"blank";
                    r&&(0, nt.JW)(r, l)
                  }
                }
              }
            }
          }), this)
        }, t.prototype._renderBreadcrumb=function(e, t, a){
          var n=this;
          a||(a=null!=e.get("leafDepth", !0)?{
            node:e.getViewRoot()
          }
          :this.findTarget(t.getWidth()/2, t.getHeight()/2))||(a={
            node:e.getData().tree.root
          }), (this._breadcrumb||(this._breadcrumb=new Ke(this.group))).render(e, t, a.node, (function(t){
            "animating"!==n._state&&(Ve(e.getViewRoot(), t)?n._rootToNode({
              node:t
            }):n._zoomToNode({
              node:t
            }))
          }))
        }, t.prototype.remove=function(){
          this._clearController(), this._containerGroup&&this._containerGroup.removeAll(), this._storage={
            nodeGroup:[
            ], background:[
            ], content:[
            ]
          }, this._state="ready", this._breadcrumb&&this._breadcrumb.remove()
        }, t.prototype.dispose=function(){
          this._clearController()
        }, t.prototype._zoomToNode=function(e){
          this.api.dispatchAction({
            type:"treemapZoomToNode", from:this.uid, seriesId:this.seriesModel.id, targetNode:e.node
          })
        }, t.prototype._rootToNode=function(e){
          this.api.dispatchAction({
            type:"treemapRootToNode", from:this.uid, seriesId:this.seriesModel.id, targetNode:e.node
          })
        }, t.prototype.findTarget=function(e, t){
          var a;
          return this.seriesModel.getViewRoot().eachNode({
            attr:"viewChildren", order:"preorder"
          }, (function(n){
            var o=this._storage.background[
              n.getRawIndex()
            ];
            if(o){
              var i=o.transformCoordToLocal(e, t), r=o.shape;
              if(!(r.x<=i[
                0
              ]
              &&i[
                0
              ]
              <=r.x+r.width&&r.y<=i[
                1
              ]
              &&i[
                1
              ]
              <=r.y+r.height))return!1;
              a={
                node:n, offsetX:i[
                  0
                ], offsetY:i[
                  1
                ]
              }
            }
          }), this), a
        }, t.type="treemap", t
      }
      (w.A);
      var ft=a(907857), yt=a(747698), mt=(0, Fe.$r)();
      const vt={
        seriesType:"treemap", reset:function(e){
          var t=e.getData().tree.root;
          t.isRemoved()||xt(t, {
          }, e.getViewRoot().getAncestors(), e)
        }
      };
      function xt(e, t, a, n){
        var o=e.getModel(), i=e.getLayout(), r=e.hostTree.data;
        if(i&&!i.invisible&&i.isInView){
          var l, s=o.getModel("itemStyle"), u=function(e, t, a){
            var n=(0, L.extend)({
            }, t), o=a.designatedVisualItemStyle;
            return(0, L.each)([
              "color", "colorAlpha", "colorSaturation"
            ], (function(a){
              o[
                a
              ]
              =t[
                a
              ];
              var i=e.get(a);
              o[
                a
              ]
              =null, null!=i&&(n[
                a
              ]
              =i)
            })), n
          }
          (s, t, n), d=r.ensureUniqueItemVisual(e.dataIndex, "style"), c=s.get("borderColor"), p=s.get("borderColorSaturation");
          null!=p&&(c=function(e, t){
            return null!=t?(0, yt.modifyHSL)(t, null, null, e):null
          }
          (p, l=St(u))), d.stroke=c;
          var h=e.viewChildren;
          if(h&&h.length){
            var g=function(e, t, a, n, o, i){
              if(!i||!i.length)return;
              var r=bt(t, "color")||null!=o.color&&"none"!==o.color&&(bt(t, "colorAlpha")||bt(t, "colorSaturation"));
              if(!r)return;
              var l=t.get("visualMin"), s=t.get("visualMax"), u=a.dataExtent.slice();
              null!=l&&l<u[
                0
              ]
              &&(u[
                0
              ]
              =l), null!=s&&s>u[
                1
              ]
              &&(u[
                1
              ]
              =s);
              var d=t.get("colorMappingBy"), c={
                type:r.name, dataExtent:u, visual:r.range
              };
              "color"!==c.type||"index"!==d&&"id"!==d?c.mappingMethod="linear":(c.mappingMethod="category", c.loop=!0);
              var p=new ft.A(c);
              return mt(p).drColorMappingBy=d, p
            }
            (0, o, i, 0, u, h);
            (0, L.each)(h, (function(e, t){
              if(e.depth>=a.length||e===a[
                e.depth
              ]){
                var i=function(e, t, a, n, o, i){
                  var r=(0, L.extend)({
                  }, t);
                  if(o){
                    var l=o.type, s="color"===l&&mt(o).drColorMappingBy, u="index"===s?n:"id"===s?i.mapIdToIndex(a.getId()):a.getValue(e.get("visualDimension"));
                    r[
                      l
                    ]
                    =o.mapValueToVisual(u)
                  }
                  return r
                }
                (o, u, e, t, g, n);
                xt(e, i, a, n)
              }
            }))
          }
          else l=St(u), d.fill=l
        }
      }
      function St(e){
        var t=_t(e, "color");
        if(t){
          var a=_t(e, "colorAlpha"), n=_t(e, "colorSaturation");
          return n&&(t=(0, yt.modifyHSL)(t, null, null, n)), a&&(t=(0, yt.modifyAlpha)(t, a)), t
        }
      }
      function _t(e, t){
        var a=e[
          t
        ];
        if(null!=a&&"none"!==a)return a
      }
      function bt(e, t){
        var a=e.get(t);
        return(0, L.isArray)(a)&&a.length?{
          name:t, range:a
        }
        :null
      }
      var It=Math.max, wt=Math.min, At=L.retrieve, Mt=L.each, Lt=[
        "itemStyle", "borderWidth"
      ], Dt=[
        "itemStyle", "gapWidth"
      ], Ct=[
        "upperLabel", "show"
      ], Nt=[
        "upperLabel", "height"
      ];
      const Tt={
        seriesType:"treemap", reset:function(e, t, a, n){
          var o=a.getWidth(), i=a.getHeight(), r=e.option, l=oe.dV(e.getBoxLayoutParams(), {
            width:a.getWidth(), height:a.getHeight()
          }), s=r.size||[
          ], u=(0, Se.lo)(At(l.width, s[
            0
          ]), o), d=(0, Se.lo)(At(l.height, s[
            1
          ]), i), c=n&&n.type, p=Pe(n, [
            "treemapZoomToNode", "treemapRootToNode"
          ], e), h="treemapRender"===c||"treemapMove"===c?n.rootRect:null, g=e.getViewRoot(), y=Ee(g);
          if("treemapMove"!==c){
            var m="treemapZoomToNode"===c?function(e, t, a, n, o){
              var i, r=(t||{
              }).node, l=[
                n, o
              ];
              if(!r||r===a)return l;
              var s=n*o, u=s*e.option.zoomToNodeRatio;
              for(;
              i=r.parentNode;
              ){
                for(var d=0, c=i.children, p=0, h=c.length;
                p<h;
                p++)d+=c[
                  p
                ].getValue();
                var g=r.getValue();
                if(0===g)return l;
                u*=d/g;
                var f=i.getModel(), y=f.get(Lt);
                (u+=4*y*y+(3*y+Math.max(y, zt(f)))*Math.pow(u, .5))>Se.Is&&(u=Se.Is), r=i
              }
              u<s&&(u=s);
              var m=Math.pow(u/s, .5);
              return[
                n*m, o*m
              ]
            }
            (e, p, g, u, d):h?[
              h.width, h.height
            ]
            :[
              u, d
            ], v=r.sort;
            v&&"asc"!==v&&"desc"!==v&&(v="desc");
            var x={
              squareRatio:r.squareRatio, sort:v, leafDepth:r.leafDepth
            };
            g.hostTree.clearLayouts();
            var S={
              x:0, y:0, width:m[
                0
              ], height:m[
                1
              ], area:m[
                0
              ]
              *m[
                1
              ]
            };
            g.setLayout(S), Pt(g, x, !1, 0), S=g.getLayout(), Mt(y, (function(e, t){
              var a=(y[
                t+1
              ]
              ||g).getValue();
              e.setLayout(L.extend({
                dataExtent:[
                  a, a
                ], borderWidth:0, upperHeight:0
              }, S))
            }))
          }
          var _=e.getData().tree.root;
          _.setLayout(function(e, t, a){
            if(t)return{
              x:t.x, y:t.y
            };
            var n={
              x:0, y:0
            };
            if(!a)return n;
            var o=a.node, i=o.getLayout();
            if(!i)return n;
            var r=[
              i.width/2, i.height/2
            ], l=o;
            for(;
            l;
            ){
              var s=l.getLayout();
              r[
                0
              ]
              +=s.x, r[
                1
              ]
              +=s.y, l=l.parentNode
            }
            return{
              x:e.width/2-r[
                0
              ], y:e.height/2-r[
                1
              ]
            }
          }
          (l, h, p), !0), e.setLayoutInfo(l), Rt(_, new f.A(-l.x, -l.y, o, i), y, g, 0)
        }
      };
      function Pt(e, t, a, n){
        var o, i;
        if(!e.isRemoved()){
          var r=e.getLayout();
          o=r.width, i=r.height;
          var l=e.getModel(), s=l.get(Lt), u=l.get(Dt)/2, d=zt(l), c=Math.max(s, d), p=s-u, h=c-u;
          e.setLayout({
            borderWidth:s, upperHeight:c, upperLabelHeight:d
          }, !0);
          var g=(o=It(o-2*p, 0))*(i=It(i-p-h, 0)), f=function(e, t, a, n, o, i){
            var r=e.children||[
            ], l=n.sort;
            "asc"!==l&&"desc"!==l&&(l=null);
            var s=null!=n.leafDepth&&n.leafDepth<=i;
            if(o&&!s)return e.viewChildren=[
            ];
            !function(e, t){
              t&&e.sort((function(e, a){
                var n="asc"===t?e.getValue()-a.getValue():a.getValue()-e.getValue();
                return 0===n?"asc"===t?e.dataIndex-a.dataIndex:a.dataIndex-e.dataIndex:n
              }))
            }
            (r=L.filter(r, (function(e){
              return!e.isRemoved()
            })), l);
            var u=function(e, t, a){
              for(var n=0, o=0, i=t.length;
              o<i;
              o++)n+=t[
                o
              ].getValue();
              var r, l=e.get("visualDimension");
              t&&t.length?"value"===l&&a?(r=[
                t[
                  t.length-1
                ].getValue(), t[
                  0
                ].getValue()
              ], "asc"===a&&r.reverse()):(r=[
                1/0, -1/0
              ], Mt(t, (function(e){
                var t=e.getValue(l);
                t<r[
                  0
                ]
                &&(r[
                  0
                ]
                =t), t>r[
                  1
                ]
                &&(r[
                  1
                ]
                =t)
              }))):r=[
                NaN, NaN
              ];
              return{
                sum:n, dataExtent:r
              }
            }
            (t, r, l);
            if(0===u.sum)return e.viewChildren=[
            ];
            if(u.sum=function(e, t, a, n, o){
              if(!n)return a;
              for(var i=e.get("visibleMin"), r=o.length, l=r, s=r-1;
              s>=0;
              s--){
                var u=o[
                  "asc"===n?r-s-1:s
                ].getValue();
                u/a*t<i&&(l=s, a-=u)
              }
              return"asc"===n?o.splice(0, r-l):o.splice(l, r-l), a
            }
            (t, a, u.sum, l, r), 0===u.sum)return e.viewChildren=[
            ];
            for(var d=0, c=r.length;
            d<c;
            d++){
              var p=r[
                d
              ].getValue()/u.sum*a;
              r[
                d
              ].setLayout({
                area:p
              })
            }
            s&&(r.length&&e.setLayout({
              isLeafRoot:!0
            }, !0), r.length=0);
            return e.viewChildren=r, e.setLayout({
              dataExtent:u.dataExtent
            }, !0), r
          }
          (e, l, g, t, a, n);
          if(f.length){
            var y={
              x:p, y:h, width:o, height:i
            }, m=wt(o, i), v=1/0, x=[
            ];
            x.area=0;
            for(var S=0, _=f.length;
            S<_;
            ){
              var b=f[
                S
              ];
              x.push(b), x.area+=b.getLayout().area;
              var I=Et(x, m, t.squareRatio);
              I<=v?(S++, v=I):(x.area-=x.pop().getLayout().area, Vt(x, m, y, u, !1), m=wt(y.width, y.height), x.length=x.area=0, v=1/0)
            }
            if(x.length&&Vt(x, m, y, u, !0), !a){
              var w=l.get("childrenVisibleMin");
              null!=w&&g<w&&(a=!0)
            }
            for(S=0, _=f.length;
            S<_;
            S++)Pt(f[
              S
            ], t, a, n+1)
          }
        }
      }
      function Et(e, t, a){
        for(var n=0, o=1/0, i=0, r=void 0, l=e.length;
        i<l;
        i++)(r=e[
          i
        ].getLayout().area)&&(r<o&&(o=r), r>n&&(n=r));
        var s=e.area*e.area, u=t*t*a;
        return s?It(u*n/s, s/(u*o)):1/0
      }
      function Vt(e, t, a, n, o){
        var i=t===a.width?0:1, r=1-i, l=[
          "x", "y"
        ], s=[
          "width", "height"
        ], u=a[
          l[
            i
          ]
        ], d=t?e.area/t:0;
        (o||d>a[
          s[
            r
          ]
        ])&&(d=a[
          s[
            r
          ]
        ]);
        for(var c=0, p=e.length;
        c<p;
        c++){
          var h=e[
            c
          ], g={
          }, f=d?h.getLayout().area/d:0, y=g[
            s[
              r
            ]
          ]
          =It(d-2*n, 0), m=a[
            l[
              i
            ]
          ]
          +a[
            s[
              i
            ]
          ]
          -u, v=c===p-1||m<f?m:f, x=g[
            s[
              i
            ]
          ]
          =It(v-2*n, 0);
          g[
            l[
              r
            ]
          ]
          =a[
            l[
              r
            ]
          ]
          +wt(n, y/2), g[
            l[
              i
            ]
          ]
          =u+wt(n, x/2), u+=v, h.setLayout(g, !0)
        }
        a[
          l[
            r
          ]
        ]
        +=d, a[
          s[
            r
          ]
        ]
        -=d
      }
      function Rt(e, t, a, n, o){
        var i=e.getLayout(), r=a[
          o
        ], l=r&&r===e;
        if(!(r&&!l||o===a.length&&e!==n)){
          e.setLayout({
            isInView:!0, invisible:!l&&!t.intersect(i), isAboveViewRoot:l
          }, !0);
          var s=new f.A(t.x-i.x, t.y-i.y, t.width, t.height);
          Mt(e.viewChildren||[
          ], (function(e){
            Rt(e, s, a, n, o+1)
          }))
        }
      }
      function zt(e){
        return e.get(Ct)?e.get(Nt):0
      }
      function kt(e){
        var t=e.findComponents({
          mainType:"legend"
        });
        t&&t.length&&e.eachSeriesByType("graph", (function(e){
          var a=e.getCategoriesData(), n=e.getGraph().data, o=a.mapArray(a.getName);
          n.filterSelf((function(e){
            var a=n.getItemModel(e).getShallow("category");
            if(null!=a){
              (0, L.isNumber)(a)&&(a=o[
                a
              ]);
              for(var i=0;
              i<t.length;
              i++)if(!t[
                i
              ].isSelected(a))return!1
            }
            return!0
          }))
        }))
      }
      function Gt(e){
        var t={
        };
        e.eachSeriesByType("graph", (function(e){
          var a=e.getCategoriesData(), n=e.getData(), o={
          };
          a.each((function(n){
            var i=a.getName(n);
            o[
              "ec-"+i
            ]
            =n;
            var r=a.getItemModel(n), l=r.getModel("itemStyle").getItemStyle();
            l.fill||(l.fill=e.getColorFromPalette(i, t)), a.setItemVisual(n, "style", l);
            for(var s=[
              "symbol", "symbolSize", "symbolKeepAspect"
            ], u=0;
            u<s.length;
            u++){
              var d=r.getShallow(s[
                u
              ], !0);
              null!=d&&a.setItemVisual(n, s[
                u
              ], d)
            }
          })), a.count()&&n.each((function(e){
            var t=n.getItemModel(e).getShallow("category");
            if(null!=t){
              (0, L.isString)(t)&&(t=o[
                "ec-"+t
              ]);
              var i=a.getItemVisual(t, "style"), r=n.ensureUniqueItemVisual(e, "style");
              (0, L.extend)(r, i);
              for(var l=[
                "symbol", "symbolSize", "symbolKeepAspect"
              ], s=0;
              s<l.length;
              s++)n.setItemVisual(e, l[
                s
              ], a.getItemVisual(t, l[
                s
              ]))
            }
          }))
        }))
      }
      function Ot(e){
        return e instanceof Array||(e=[
          e, e
        ]), e
      }
      function Bt(e){
        e.eachSeriesByType("graph", (function(e){
          var t=e.getGraph(), a=e.getEdgeData(), n=Ot(e.get("edgeSymbol")), o=Ot(e.get("edgeSymbolSize"));
          a.setVisual("fromSymbol", n&&n[
            0
          ]), a.setVisual("toSymbol", n&&n[
            1
          ]), a.setVisual("fromSymbolSize", o&&o[
            0
          ]), a.setVisual("toSymbolSize", o&&o[
            1
          ]), a.setVisual("style", e.getModel("lineStyle").getLineStyle()), a.each((function(e){
            var n=a.getItemModel(e), o=t.getEdgeByIndex(e), i=Ot(n.getShallow("symbol", !0)), r=Ot(n.getShallow("symbolSize", !0)), l=n.getModel("lineStyle").getLineStyle(), s=a.ensureUniqueItemVisual(e, "style");
            switch((0, L.extend)(s, l), s.stroke){
              case"source":var u=o.node1.getVisual("style");
              s.stroke=u&&u.fill;
              break;
              case"target":u=o.node2.getVisual("style");
              s.stroke=u&&u.fill
            }
            i[
              0
            ]
            &&o.setVisual("fromSymbol", i[
              0
            ]), i[
              1
            ]
            &&o.setVisual("toSymbol", i[
              1
            ]), r[
              0
            ]
            &&o.setVisual("fromSymbolSize", r[
              0
            ]), r[
              1
            ]
            &&o.setVisual("toSymbolSize", r[
              1
            ])
          }))
        }))
      }
      var Yt=a(983509), Ft="--\x3e", Wt=function(e){
        return e.get("autoCurveness")||null
      }, Ht=function(e, t){
        var a=Wt(e), n=20, o=[
        ];
        if(L.isNumber(a))n=a;
        else if(L.isArray(a))return void(e.__curvenessList=a);
        t>n&&(n=t);
        var i=n%2?n+2:n+3;
        o=[
        ];
        for(var r=0;
        r<i;
        r++)o.push((r%2?r+1:r)/10*(r%2?-1:1));
        e.__curvenessList=o
      }, Xt=function(e, t, a){
        var n=[
          e.id, e.dataIndex
        ].join("."), o=[
          t.id, t.dataIndex
        ].join(".");
        return[
          a.uid, n, o
        ].join(Ft)
      }, Ut=function(e){
        var t=e.split(Ft);
        return[
          t[
            0
          ], t[
            2
          ], t[
            1
          ]
        ].join(Ft)
      }, Zt=function(e, t){
        var a=t.__edgeMap;
        return a[
          e
        ]
        ?a[
          e
        ].length:0
      };
      function qt(e, t, a, n){
        var o=Wt(t), i=L.isArray(o);
        if(!o)return null;
        var r=function(e, t){
          var a=Xt(e.node1, e.node2, t);
          return t.__edgeMap[
            a
          ]
        }
        (e, t);
        if(!r)return null;
        for(var l=-1, s=0;
        s<r.length;
        s++)if(r[
          s
        ]
        ===a){
          l=s;
          break
        }
        var u=function(e, t){
          return Zt(Xt(e.node1, e.node2, t), t)+Zt(Xt(e.node2, e.node1, t), t)
        }
        (e, t);
        Ht(t, u), e.lineStyle=e.lineStyle||{
        };
        var d=Xt(e.node1, e.node2, t), c=t.__curvenessList, p=i||u%2?0:1;
        if(r.isForward)return c[
          p+l
        ];
        var h=Ut(d), g=Zt(h, t), f=c[
          l+g+p
        ];
        return n?i?o&&0===o[
          0
        ]
        ?(g+p)%2?f:-f:((g%2?0:1)+p)%2?f:-f:(g+p)%2?f:-f:c[
          l+g+p
        ]
      }
      function jt(e){
        var t=e.coordinateSystem;
        if(!t||"view"===t.type){
          var a=e.getGraph();
          a.eachNode((function(e){
            var t=e.getModel();
            e.setLayout([
              +t.get("x"), +t.get("y")
            ])
          })), Qt(a, e)
        }
      }
      function Qt(e, t){
        e.eachEdge((function(e, a){
          var n=L.retrieve3(e.getModel().get([
            "lineStyle", "curveness"
          ]), -qt(e, t, a, !0), 0), o=Yt.clone(e.node1.getLayout()), i=Yt.clone(e.node2.getLayout()), r=[
            o, i
          ];
          +n&&r.push([
            (o[
              0
            ]
            +i[
              0
            ])/2-(o[
              1
            ]
            -i[
              1
            ])*n, (o[
              1
            ]
            +i[
              1
            ])/2-(i[
              0
            ]
            -o[
              0
            ])*n
          ]), e.setLayout(r)
        }))
      }
      function Jt(e, t){
        e.eachSeriesByType("graph", (function(e){
          var t=e.get("layout"), a=e.coordinateSystem;
          if(a&&"view"!==a.type){
            var n=e.getData(), o=[
            ];
            (0, L.each)(a.dimensions, (function(e){
              o=o.concat(n.mapDimensionsAll(e))
            }));
            for(var i=0;
            i<n.count();
            i++){
              for(var r=[
              ], l=!1, s=0;
              s<o.length;
              s++){
                var u=n.get(o[
                  s
                ], i);
                isNaN(u)||(l=!0), r.push(u)
              }
              l?n.setItemLayout(i, a.dataToPoint(r)):n.setItemLayout(i, [
                NaN, NaN
              ])
            }
            Qt(n.graph, e)
          }
          else t&&"none"!==t||jt(e)
        }))
      }
      function Kt(e){
        var t=e.coordinateSystem;
        if("view"!==t.type)return 1;
        var a=e.option.nodeScaleRatio, n=t.scaleX;
        return((t.getZoom()-1)*a+1)/n
      }
      function $t(e){
        var t=e.getVisual("symbolSize");
        return t instanceof Array&&(t=(t[
          0
        ]
        +t[
          1
        ])/2), +t
      }
      var ea=Math.PI, ta=[
      ];
      function aa(e, t, a, n){
        var o=e.coordinateSystem;
        if(!o||"view"===o.type){
          var i=o.getBoundingRect(), r=e.getData(), l=r.graph, s=i.width/2+i.x, u=i.height/2+i.y, d=Math.min(i.width, i.height)/2, c=r.count();
          if(r.setLayout({
            cx:s, cy:u
          }), c){
            if(a){
              var p=o.pointToData(n), h=p[
                0
              ], g=p[
                1
              ], f=[
                h-s, g-u
              ];
              Yt.normalize(f, f), Yt.scale(f, f, d), a.setLayout([
                s+f[
                  0
                ], u+f[
                  1
                ]
              ], !0), oa(a, e.get([
                "circular", "rotateLabel"
              ]), s, u)
            }
            na[
              t
            ]
            (e, l, r, d, s, u, c), l.eachEdge((function(t, a){
              var n, o=L.retrieve3(t.getModel().get([
                "lineStyle", "curveness"
              ]), qt(t, e, a), 0), i=Yt.clone(t.node1.getLayout()), r=Yt.clone(t.node2.getLayout()), l=(i[
                0
              ]
              +r[
                0
              ])/2, d=(i[
                1
              ]
              +r[
                1
              ])/2;
              +o&&(n=[
                s*(o*=3)+l*(1-o), u*o+d*(1-o)
              ]), t.setLayout([
                i, r, n
              ])
            }))
          }
        }
      }
      var na={
        value:function(e, t, a, n, o, i, r){
          var l=0, s=a.getSum("value"), u=2*Math.PI/(s||r);
          t.eachNode((function(e){
            var t=e.getValue("value"), a=u*(s?t:1)/2;
            l+=a, e.setLayout([
              n*Math.cos(l)+o, n*Math.sin(l)+i
            ]), l+=a
          }))
        }, symbolSize:function(e, t, a, n, o, i, r){
          var l=0;
          ta.length=r;
          var s=Kt(e);
          t.eachNode((function(e){
            var t=$t(e);
            isNaN(t)&&(t=2), t<0&&(t=0), t*=s;
            var a=Math.asin(t/2/n);
            isNaN(a)&&(a=ea/2), ta[
              e.dataIndex
            ]
            =a, l+=2*a
          }));
          var u=(2*ea-l)/r/2, d=0;
          t.eachNode((function(e){
            var t=u+ta[
              e.dataIndex
            ];
            d+=t, (!e.getLayout()||!e.getLayout().fixed)&&e.setLayout([
              n*Math.cos(d)+o, n*Math.sin(d)+i
            ]), d+=t
          }))
        }
      };
      function oa(e, t, a, n){
        var o=e.getGraphicEl();
        if(o){
          var i=e.getModel().get([
            "label", "rotate"
          ])||0, r=o.getSymbolPath();
          if(t){
            var l=e.getLayout(), s=Math.atan2(l[
              1
            ]
            -n, l[
              0
            ]
            -a);
            s<0&&(s=2*Math.PI+s);
            var u=l[
              0
            ]
            <a;
            u&&(s-=Math.PI);
            var d=u?"left":"right";
            r.setTextConfig({
              rotation:-s, position:d, origin:"center"
            });
            var c=r.ensureState("emphasis");
            L.extend(c.textConfig||(c.textConfig={
            }), {
              position:d
            })
          }
          else r.setTextConfig({
            rotation:i*=Math.PI/180
          })
        }
      }
      function ia(e){
        e.eachSeriesByType("graph", (function(e){
          "circular"===e.get("layout")&&aa(e, "symbolSize")
        }))
      }
      var ra=Yt.scaleAndAdd;
      function la(e){
        e.eachSeriesByType("graph", (function(e){
          var t=e.coordinateSystem;
          if(!t||"view"===t.type)if("force"===e.get("layout")){
            var a=e.preservedPoints||{
            }, n=e.getGraph(), o=n.data, i=n.edgeData, r=e.getModel("force"), l=r.get("initLayout");
            e.preservedPoints?o.each((function(e){
              var t=o.getId(e);
              o.setItemLayout(e, a[
                t
              ]
              ||[
                NaN, NaN
              ])
            })):l&&"none"!==l?"circular"===l&&aa(e, "value"):jt(e);
            var s=o.getDataExtent("value"), u=i.getDataExtent("value"), d=r.get("repulsion"), c=r.get("edgeLength"), p=L.isArray(d)?d:[
              d, d
            ], h=L.isArray(c)?c:[
              c, c
            ];
            h=[
              h[
                1
              ], h[
                0
              ]
            ];
            var g=o.mapArray("value", (function(e, t){
              var a=o.getItemLayout(t), n=(0, Se.Cb)(e, s, p);
              return isNaN(n)&&(n=(p[
                0
              ]
              +p[
                1
              ])/2), {
                w:n, rep:n, fixed:o.getItemModel(t).get("fixed"), p:!a||isNaN(a[
                  0
                ])||isNaN(a[
                  1
                ])?null:a
              }
            })), f=i.mapArray("value", (function(t, a){
              var o=n.getEdgeByIndex(a), i=(0, Se.Cb)(t, u, h);
              isNaN(i)&&(i=(h[
                0
              ]
              +h[
                1
              ])/2);
              var r=o.getModel(), l=L.retrieve3(o.getModel().get([
                "lineStyle", "curveness"
              ]), -qt(o, e, a, !0), 0);
              return{
                n1:g[
                  o.node1.dataIndex
                ], n2:g[
                  o.node2.dataIndex
                ], d:i, curveness:l, ignoreForceLayout:r.get("ignoreForceLayout")
              }
            })), y=t.getBoundingRect(), m=function(e, t, a){
              for(var n=e, o=t, i=a.rect, r=i.width, l=i.height, s=[
                i.x+r/2, i.y+l/2
              ], u=null==a.gravity?.1:a.gravity, d=0;
              d<n.length;
              d++){
                var c=n[
                  d
                ];
                c.p||(c.p=Yt.create(r*(Math.random()-.5)+s[
                  0
                ], l*(Math.random()-.5)+s[
                  1
                ])), c.pp=Yt.clone(c.p), c.edges=null
              }
              var p, h, g=null==a.friction?.6:a.friction, f=g;
              return{
                warmUp:function(){
                  f=.8*g
                }, setFixed:function(e){
                  n[
                    e
                  ].fixed=!0
                }, setUnfixed:function(e){
                  n[
                    e
                  ].fixed=!1
                }, beforeStep:function(e){
                  p=e
                }, afterStep:function(e){
                  h=e
                }, step:function(e){
                  p&&p(n, o);
                  for(var t=[
                  ], a=n.length, i=0;
                  i<o.length;
                  i++){
                    var r=o[
                      i
                    ];
                    if(!r.ignoreForceLayout){
                      var l=r.n1, d=r.n2;
                      Yt.sub(t, d.p, l.p);
                      var c=Yt.len(t)-r.d, g=d.w/(l.w+d.w);
                      isNaN(g)&&(g=0), Yt.normalize(t, t), !l.fixed&&ra(l.p, l.p, t, g*c*f), !d.fixed&&ra(d.p, d.p, t, -(1-g)*c*f)
                    }
                  }
                  for(i=0;
                  i<a;
                  i++)(x=n[
                    i
                  ]).fixed||(Yt.sub(t, s, x.p), ra(x.p, x.p, t, u*f));
                  for(i=0;
                  i<a;
                  i++){
                    l=n[
                      i
                    ];
                    for(var y=i+1;
                    y<a;
                    y++){
                      d=n[
                        y
                      ], Yt.sub(t, d.p, l.p), 0===(c=Yt.len(t))&&(Yt.set(t, Math.random()-.5, Math.random()-.5), c=1);
                      var m=(l.rep+d.rep)/c/c;
                      !l.fixed&&ra(l.pp, l.pp, t, m), !d.fixed&&ra(d.pp, d.pp, t, -m)
                    }
                  }
                  var v=[
                  ];
                  for(i=0;
                  i<a;
                  i++){
                    var x;
                    (x=n[
                      i
                    ]).fixed||(Yt.sub(v, x.p, x.pp), ra(x.p, x.p, v, f), Yt.copy(x.pp, x.p))
                  }
                  var S=(f*=.992)<.01;
                  h&&h(n, o, S), e&&e(S)
                }
              }
            }
            (g, f, {
              rect:y, gravity:r.get("gravity"), friction:r.get("friction")
            });
            m.beforeStep((function(e, t){
              for(var a=0, o=e.length;
              a<o;
              a++)e[
                a
              ].fixed&&Yt.copy(e[
                a
              ].p, n.getNodeByIndex(a).getLayout())
            })), m.afterStep((function(e, t, i){
              for(var r=0, l=e.length;
              r<l;
              r++)e[
                r
              ].fixed||n.getNodeByIndex(r).setLayout(e[
                r
              ].p), a[
                o.getId(r)
              ]
              =e[
                r
              ].p;
              for(r=0, l=t.length;
              r<l;
              r++){
                var s=t[
                  r
                ], u=n.getEdgeByIndex(r), d=s.n1.p, c=s.n2.p, p=u.getLayout();
                (p=p?p.slice():[
                ])[
                  0
                ]
                =p[
                  0
                ]
                ||[
                ], p[
                  1
                ]
                =p[
                  1
                ]
                ||[
                ], Yt.copy(p[
                  0
                ], d), Yt.copy(p[
                  1
                ], c), +s.curveness&&(p[
                  2
                ]
                =[
                  (d[
                    0
                  ]
                  +c[
                    0
                  ])/2-(d[
                    1
                  ]
                  -c[
                    1
                  ])*s.curveness, (d[
                    1
                  ]
                  +c[
                    1
                  ])/2-(c[
                    0
                  ]
                  -d[
                    0
                  ])*s.curveness
                ]), u.setLayout(p)
              }
            })), e.forceLayout=m, e.preservedPoints=a, m.step()
          }
          else e.forceLayout=null
        }))
      }
      function sa(e, t){
        var a=[
        ];
        return e.eachSeriesByType("graph", (function(e){
          var n=e.get("coordinateSystem");
          if(!n||"view"===n){
            var o=e.getData(), i=o.mapArray((function(e){
              var t=o.getItemModel(e);
              return[
                +t.get("x"), +t.get("y")
              ]
            })), r=[
            ], l=[
            ];
            fe.Cr(i, r, l), l[
              0
            ]
            -r[
              0
            ]
            ==0&&(l[
              0
            ]
            +=1, r[
              0
            ]
            -=1), l[
              1
            ]
            -r[
              1
            ]
            ==0&&(l[
              1
            ]
            +=1, r[
              1
            ]
            -=1);
            var s=(l[
              0
            ]
            -r[
              0
            ])/(l[
              1
            ]
            -r[
              1
            ]), u=function(e, t, a){
              var n=(0, L.extend)(e.getBoxLayoutParams(), {
                aspect:a
              });
              return(0, oe.dV)(n, {
                width:t.getWidth(), height:t.getHeight()
              })
            }
            (e, t, s);
            isNaN(s)&&(r=[
              u.x, u.y
            ], l=[
              u.x+u.width, u.y+u.height
            ]);
            var d=l[
              0
            ]
            -r[
              0
            ], c=l[
              1
            ]
            -r[
              1
            ], p=u.width, h=u.height, g=e.coordinateSystem=new ye.A;
            g.zoomLimit=e.get("scaleLimit"), g.setBoundingRect(r[
              0
            ], r[
              1
            ], d, c), g.setViewRect(u.x, u.y, p, h), g.setCenter(e.get("center"), t), g.setZoom(e.get("zoom")), a.push(g)
          }
        })), a
      }
      var ua=a(564380), da=a(989259), ca=[
      ], pa=[
      ], ha=[
      ], ga=da.k3, fa=Yt.distSquare, ya=Math.abs;
      function ma(e, t, a){
        for(var n, o=e[
          0
        ], i=e[
          1
        ], r=e[
          2
        ], l=1/0, s=a*a, u=.1, d=.1;
        d<=.9;
        d+=.1){
          ca[
            0
          ]
          =ga(o[
            0
          ], i[
            0
          ], r[
            0
          ], d), ca[
            1
          ]
          =ga(o[
            1
          ], i[
            1
          ], r[
            1
          ], d), (h=ya(fa(ca, t)-s))<l&&(l=h, n=d)
        }
        for(var c=0;
        c<32;
        c++){
          var p=n+u;
          pa[
            0
          ]
          =ga(o[
            0
          ], i[
            0
          ], r[
            0
          ], n), pa[
            1
          ]
          =ga(o[
            1
          ], i[
            1
          ], r[
            1
          ], n), ha[
            0
          ]
          =ga(o[
            0
          ], i[
            0
          ], r[
            0
          ], p), ha[
            1
          ]
          =ga(o[
            1
          ], i[
            1
          ], r[
            1
          ], p);
          var h=fa(pa, t)-s;
          if(ya(h)<.01)break;
          var g=fa(ha, t)-s;
          u/=2, h<0?g>=0?n+=u:n-=u:g>=0?n-=u:n+=u
        }
        return n
      }
      function va(e, t){
        var a=[
        ], n=da.kx, o=[
          [
          ], [
          ], [
          ]
        ], i=[
          [
          ], [
          ]
        ], r=[
        ];
        t/=2, e.eachEdge((function(e, l){
          var s=e.getLayout(), u=e.getVisual("fromSymbol"), d=e.getVisual("toSymbol");
          s.__original||(s.__original=[
            Yt.clone(s[
              0
            ]), Yt.clone(s[
              1
            ])
          ], s[
            2
          ]
          &&s.__original.push(Yt.clone(s[
            2
          ])));
          var c=s.__original;
          if(null!=s[
            2
          ]){
            if(Yt.copy(o[
              0
            ], c[
              0
            ]), Yt.copy(o[
              1
            ], c[
              2
            ]), Yt.copy(o[
              2
            ], c[
              1
            ]), u&&"none"!==u){
              var p=$t(e.node1), h=ma(o, c[
                0
              ], p*t);
              n(o[
                0
              ]
              [
                0
              ], o[
                1
              ]
              [
                0
              ], o[
                2
              ]
              [
                0
              ], h, a), o[
                0
              ]
              [
                0
              ]
              =a[
                3
              ], o[
                1
              ]
              [
                0
              ]
              =a[
                4
              ], n(o[
                0
              ]
              [
                1
              ], o[
                1
              ]
              [
                1
              ], o[
                2
              ]
              [
                1
              ], h, a), o[
                0
              ]
              [
                1
              ]
              =a[
                3
              ], o[
                1
              ]
              [
                1
              ]
              =a[
                4
              ]
            }
            if(d&&"none"!==d){
              p=$t(e.node2), h=ma(o, c[
                1
              ], p*t);
              n(o[
                0
              ]
              [
                0
              ], o[
                1
              ]
              [
                0
              ], o[
                2
              ]
              [
                0
              ], h, a), o[
                1
              ]
              [
                0
              ]
              =a[
                1
              ], o[
                2
              ]
              [
                0
              ]
              =a[
                2
              ], n(o[
                0
              ]
              [
                1
              ], o[
                1
              ]
              [
                1
              ], o[
                2
              ]
              [
                1
              ], h, a), o[
                1
              ]
              [
                1
              ]
              =a[
                1
              ], o[
                2
              ]
              [
                1
              ]
              =a[
                2
              ]
            }
            Yt.copy(s[
              0
            ], o[
              0
            ]), Yt.copy(s[
              1
            ], o[
              2
            ]), Yt.copy(s[
              2
            ], o[
              1
            ])
          }
          else{
            if(Yt.copy(i[
              0
            ], c[
              0
            ]), Yt.copy(i[
              1
            ], c[
              1
            ]), Yt.sub(r, i[
              1
            ], i[
              0
            ]), Yt.normalize(r, r), u&&"none"!==u){
              p=$t(e.node1);
              Yt.scaleAndAdd(i[
                0
              ], i[
                0
              ], r, p*t)
            }
            if(d&&"none"!==d){
              p=$t(e.node2);
              Yt.scaleAndAdd(i[
                1
              ], i[
                1
              ], r, -p*t)
            }
            Yt.copy(s[
              0
            ], i[
              0
            ]), Yt.copy(s[
              1
            ], i[
              1
            ])
          }
        }))
      }
      function xa(e){
        return"view"===e.type
      }
      const Sa=function(e){
        function t(){
          var a=null!==e&&e.apply(this, arguments)||this;
          return a.type=t.type, a
        }
        return(0, d.C6)(t, e), t.prototype.init=function(e, t){
          var a=new g.A, n=new ua.A, o=this.group;
          this._controller=new ve.A(t.getZr()), this._controllerHost={
            target:o
          }, o.add(a.group), o.add(n.group), this._symbolDraw=a, this._lineDraw=n, this._firstRender=!0
        }, t.prototype.render=function(e, t, a){
          var n=this, o=e.coordinateSystem;
          this._model=e;
          var i=this._symbolDraw, r=this._lineDraw, l=this.group;
          if(xa(o)){
            var s={
              x:o.x, y:o.y, scaleX:o.scaleX, scaleY:o.scaleY
            };
            this._firstRender?l.attr(s):z.oi(l, s, e)
          }
          va(e.getGraph(), Kt(e));
          var u=e.getData();
          i.updateData(u);
          var d=e.getEdgeData();
          r.updateData(d), this._updateNodeAndLinkScale(), this._updateController(e, t, a), clearTimeout(this._layoutTimeout);
          var c=e.forceLayout, p=e.get([
            "force", "layoutAnimation"
          ]);
          c&&this._startForceLayoutIteration(c, p);
          var h=e.get("layout");
          u.graph.eachNode((function(t){
            var a=t.dataIndex, o=t.getGraphicEl(), i=t.getModel();
            if(o){
              o.off("drag").off("dragend");
              var r=i.get("draggable");
              r&&o.on("drag", (function(i){
                switch(h){
                  case"force":c.warmUp(), !n._layouting&&n._startForceLayoutIteration(c, p), c.setFixed(a), u.setItemLayout(a, [
                    o.x, o.y
                  ]);
                  break;
                  case"circular":u.setItemLayout(a, [
                    o.x, o.y
                  ]), t.setLayout({
                    fixed:!0
                  }, !0), aa(e, "symbolSize", t, [
                    i.offsetX, i.offsetY
                  ]), n.updateLayout(e);
                  break;
                  case"none":default:u.setItemLayout(a, [
                    o.x, o.y
                  ]), Qt(e.getGraph(), e), n.updateLayout(e)
                }
              })).on("dragend", (function(){
                c&&c.setUnfixed(a)
              })), o.setDraggable(r, !!i.get("cursor")), "adjacency"===i.get([
                "emphasis", "focus"
              ])&&((0, x.z)(o).focus=t.getAdjacentDataIndices())
            }
          })), u.graph.eachEdge((function(e){
            var t=e.getGraphicEl(), a=e.getModel().get([
              "emphasis", "focus"
            ]);
            t&&"adjacency"===a&&((0, x.z)(t).focus={
              edge:[
                e.dataIndex
              ], node:[
                e.node1.dataIndex, e.node2.dataIndex
              ]
            })
          }));
          var g="circular"===e.get("layout")&&e.get([
            "circular", "rotateLabel"
          ]), f=u.getLayout("cx"), y=u.getLayout("cy");
          u.graph.eachNode((function(e){
            oa(e, g, f, y)
          })), this._firstRender=!1
        }, t.prototype.dispose=function(){
          this.remove(), this._controller&&this._controller.dispose(), this._controllerHost=null
        }, t.prototype._startForceLayoutIteration=function(e, t){
          var a=this;
          !function n(){
            e.step((function(e){
              a.updateLayout(a._model), (a._layouting=!e)&&(t?a._layoutTimeout=setTimeout(n, 16):n())
            }))
          }
          ()
        }, t.prototype._updateController=function(e, t, a){
          var n=this, o=this._controller, i=this._controllerHost, r=this.group;
          o.setPointerChecker((function(t, n, o){
            var i=r.getBoundingRect();
            return i.applyTransform(r.transform), i.contain(n, o)&&!(0, xe.I)(t, a, e)
          })), xa(e.coordinateSystem)?(o.enable(e.get("roam")), i.zoomLimit=e.get("scaleLimit"), i.zoom=e.coordinateSystem.getZoom(), o.off("pan").off("zoom").on("pan", (function(t){
            me.t(i, t.dx, t.dy), a.dispatchAction({
              seriesId:e.id, type:"graphRoam", dx:t.dx, dy:t.dy
            })
          })).on("zoom", (function(t){
            me.x(i, t.scale, t.originX, t.originY), a.dispatchAction({
              seriesId:e.id, type:"graphRoam", zoom:t.scale, originX:t.originX, originY:t.originY
            }), n._updateNodeAndLinkScale(), va(e.getGraph(), Kt(e)), n._lineDraw.updateLayout(), a.updateLabelLayout()
          }))):o.disable()
        }, t.prototype._updateNodeAndLinkScale=function(){
          var e=this._model, t=e.getData(), a=Kt(e);
          t.eachItemGraphicEl((function(e, t){
            e&&e.setSymbolScale(a)
          }))
        }, t.prototype.updateLayout=function(e){
          va(e.getGraph(), Kt(e)), this._symbolDraw.updateLayout(), this._lineDraw.updateLayout()
        }, t.prototype.remove=function(){
          clearTimeout(this._layoutTimeout), this._layouting=!1, this._layoutTimeout=null, this._symbolDraw&&this._symbolDraw.remove(), this._lineDraw&&this._lineDraw.remove()
        }, t.type="graph", t
      }
      (w.A);
      var _a=a(6006), ba=a(150451), Ia=a(876827), wa=a(297351), Aa=a(189737);
      function Ma(e, t, a, n, o){
        for(var i=new ba.Ay(n), r=0;
        r<e.length;
        r++)i.addNode(L.retrieve(e[
          r
        ].id, e[
          r
        ].name, r), r);
        var l=[
        ], s=[
        ], u=0;
        for(r=0;
        r<t.length;
        r++){
          var d=t[
            r
          ], p=d.source, h=d.target;
          i.addEdge(p, h, u)&&(s.push(d), l.push(L.retrieve((0, Fe.vS)(d.id, null), p+" > "+h)), u++)
        }
        var g, f=a.get("coordinateSystem");
        if("cartesian2d"===f||"polar"===f)g=(0, c.A)(e, a);
        else{
          var y=Aa.A.get(f), m=y&&y.dimensions||[
          ];
          L.indexOf(m, "value")<0&&m.concat([
            "value"
          ]);
          var v=(0, wa.A)(e, {
            coordDimensions:m, encodeDefine:a.getEncode()
          }).dimensions;
          (g=new _a.A(v, a)).initData(e)
        }
        var x=new _a.A([
          "value"
        ], a);
        return x.initData(s, l), o&&o(g, x), (0, Ia.A)({
          mainData:g, struct:i, structAttr:"graph", datas:{
            node:g, edge:x
          }, datasAttr:{
            node:"data", edge:"edgeData"
          }
        }), i.update(), i
      }
      var La=a(204235);
      const Da=function(e){
        function t(){
          var a=null!==e&&e.apply(this, arguments)||this;
          return a.type=t.type, a.hasSymbolVisual=!0, a
        }
        return(0, d.C6)(t, e), t.prototype.init=function(t){
          e.prototype.init.apply(this, arguments);
          var a=this;
          function n(){
            return a._categoriesData
          }
          this.legendVisualProvider=new F.A(n, n), this.fillDataTextStyle(t.edges||t.links), this._updateCategoriesData()
        }, t.prototype.mergeOption=function(t){
          e.prototype.mergeOption.apply(this, arguments), this.fillDataTextStyle(t.edges||t.links), this._updateCategoriesData()
        }, t.prototype.mergeDefaultAndTheme=function(t){
          e.prototype.mergeDefaultAndTheme.apply(this, arguments), (0, Fe.M5)(t, "edgeLabel", [
            "show"
          ])
        }, t.prototype.getInitialData=function(e, t){
          var a, n=e.edges||e.links||[
          ], o=e.data||e.nodes||[
          ], i=this;
          if(o&&n){
            Wt(a=this)&&(a.__curvenessList=[
            ], a.__edgeMap={
            }, Ht(a));
            var r=Ma(o, n, this, !0, (function(e, t){
              e.wrapMethod("getItemModel", (function(e){
                var t=i._categoriesModels[
                  e.getShallow("category")
                ];
                return t&&(t.parentModel=e.parentModel, e.parentModel=t), e
              }));
              var a=Te.A.prototype.getModel;
              function n(e, t){
                var n=a.call(this, e, t);
                return n.resolveParentPath=o, n
              }
              function o(e){
                if(e&&("label"===e[
                  0
                ]
                ||"label"===e[
                  1
                ])){
                  var t=e.slice();
                  return"label"===e[
                    0
                  ]
                  ?t[
                    0
                  ]
                  ="edgeLabel":"label"===e[
                    1
                  ]
                  &&(t[
                    1
                  ]
                  ="edgeLabel"), t
                }
                return e
              }
              t.wrapMethod("getItemModel", (function(e){
                return e.resolveParentPath=o, e.getModel=n, e
              }))
            }));
            return L.each(r.edges, (function(e){
              !function(e, t, a, n){
                if(Wt(a)){
                  var o=Xt(e, t, a), i=a.__edgeMap, r=i[
                    Ut(o)
                  ];
                  i[
                    o
                  ]
                  &&!r?i[
                    o
                  ].isForward=!0:r&&i[
                    o
                  ]
                  &&(r.isForward=!0, i[
                    o
                  ].isForward=!1), i[
                    o
                  ]
                  =i[
                    o
                  ]
                  ||[
                  ], i[
                    o
                  ].push(n)
                }
              }
              (e.node1, e.node2, this, e.dataIndex)
            }), this), r.data
          }
        }, t.prototype.getGraph=function(){
          return this.getData().graph
        }, t.prototype.getEdgeData=function(){
          return this.getGraph().edgeData
        }, t.prototype.getCategoriesData=function(){
          return this._categoriesData
        }, t.prototype.formatTooltip=function(e, t, a){
          if("edge"===a){
            var n=this.getData(), o=this.getDataParams(e, a), i=n.graph.getEdgeByIndex(e), r=n.getName(i.node1.dataIndex), l=n.getName(i.node2.dataIndex), s=[
            ];
            return null!=r&&s.push(r), null!=l&&s.push(l), (0, W.Qx)("nameValue", {
              name:s.join(" > "), value:o.value, noValue:null==o.value
            })
          }
          return(0, La.J)({
            series:this, dataIndex:e, multipleSeries:t
          })
        }, t.prototype._updateCategoriesData=function(){
          var e=L.map(this.option.categories||[
          ], (function(e){
            return null!=e.value?e:L.extend({
              value:0
            }, e)
          })), t=new _a.A([
            "value"
          ], this);
          t.initData(e), this._categoriesData=t, this._categoriesModels=t.mapArray((function(e){
            return t.getItemModel(e)
          }))
        }, t.prototype.setZoom=function(e){
          this.option.zoom=e
        }, t.prototype.setCenter=function(e){
          this.option.center=e
        }, t.prototype.isAnimationEnabled=function(){
          return e.prototype.isAnimationEnabled.call(this)&&!("force"===this.get("layout")&&this.get([
            "force", "layoutAnimation"
          ]))
        }, t.type="series.graph", t.dependencies=[
          "grid", "polar", "geo", "singleAxis", "calendar"
        ], t.defaultOption={
          z:2, coordinateSystem:"view", legendHoverLink:!0, layout:null, circular:{
            rotateLabel:!1
          }, force:{
            initLayout:null, repulsion:[
              0, 50
            ], gravity:.1, friction:.6, edgeLength:30, layoutAnimation:!0
          }, left:"center", top:"center", symbol:"circle", symbolSize:10, edgeSymbol:[
            "none", "none"
          ], edgeSymbolSize:10, edgeLabel:{
            position:"middle", distance:5
          }, draggable:!1, roam:!1, center:null, zoom:1, nodeScaleRatio:.6, label:{
            show:!1, formatter:"{b}"
          }, itemStyle:{
          }, lineStyle:{
            color:"#aaa", width:1, opacity:.5
          }, emphasis:{
            scale:!0, label:{
              show:!0
            }
          }, select:{
            itemStyle:{
              borderColor:"#212121"
            }
          }
        }, t
      }
      (p.A);
      var Ca={
        type:"graphRoam", event:"graphRoam", update:"none"
      };
      var Na=function(){
        this.angle=0, this.width=10, this.r=10, this.x=0, this.y=0
      };
      const Ta=function(e){
        function t(t){
          var a=e.call(this, t)||this;
          return a.type="pointer", a
        }
        return(0, d.C6)(t, e), t.prototype.getDefaultShape=function(){
          return new Na
        }, t.prototype.buildPath=function(e, t){
          var a=Math.cos, n=Math.sin, o=t.r, i=t.width, r=t.angle, l=t.x-a(r)*i*(i>=o/3?1:2), s=t.y-n(r)*i*(i>=o/3?1:2);
          r=t.angle-Math.PI/2, e.moveTo(l, s), e.lineTo(t.x+a(r)*i, t.y+n(r)*i), e.lineTo(t.x+a(t.angle)*o, t.y+n(t.angle)*o), e.lineTo(t.x-a(r)*i, t.y-n(r)*i), e.lineTo(l, s)
        }, t
      }
      (y.Ay);
      var Pa=a(725014), Ea=a(982861), Va=a(384618), Ra=a(368717);
      function za(e, t){
        var a=null==e?"":e+"";
        return t&&((0, L.isString)(t)?a=t.replace("{value}", a):(0, L.isFunction)(t)&&(a=t(e))), a
      }
      const ka=function(e){
        function t(){
          var a=null!==e&&e.apply(this, arguments)||this;
          return a.type=t.type, a
        }
        return(0, d.C6)(t, e), t.prototype.render=function(e, t, a){
          this.group.removeAll();
          var n=e.get([
            "axisLine", "lineStyle", "color"
          ]), o=function(e, t){
            var a=e.get("center"), n=t.getWidth(), o=t.getHeight(), i=Math.min(n, o);
            return{
              cx:(0, Se.lo)(a[
                0
              ], t.getWidth()), cy:(0, Se.lo)(a[
                1
              ], t.getHeight()), r:(0, Se.lo)(e.get("radius"), i/2)
            }
          }
          (e, a);
          this._renderMain(e, t, a, n, o), this._data=e.getData()
        }, t.prototype.dispose=function(){
        }, t.prototype._renderMain=function(e, t, a, n, o){
          var i=this.group, r=e.get("clockwise"), l=-e.get("startAngle")/180*Math.PI, s=-e.get("endAngle")/180*Math.PI, u=e.getModel("axisLine"), d=u.get("roundCap")?Va.A:Pa.A, c=u.get("show"), p=u.getModel("lineStyle"), h=p.get("width"), g=[
            l, s
          ];
          (0, Ra.q)(g, !r);
          for(var f=(s=g[
            1
          ])-(l=g[
            0
          ]), y=l, m=[
          ], v=0;
          c&&v<n.length;
          v++){
            var x=new d({
              shape:{
                startAngle:y, endAngle:s=l+f*Math.min(Math.max(n[
                  v
                ]
                [
                  0
                ], 0), 1), cx:o.cx, cy:o.cy, clockwise:r, r0:o.r-h, r:o.r
              }, silent:!0
            });
            x.setStyle({
              fill:n[
                v
              ]
              [
                1
              ]
            }), x.setStyle(p.getLineStyle([
              "color", "width"
            ])), m.push(x), y=s
          }
          m.reverse(), (0, L.each)(m, (function(e){
            return i.add(e)
          }));
          var S=function(e){
            if(e<=0)return n[
              0
            ]
            [
              1
            ];
            var t;
            for(t=0;
            t<n.length;
            t++)if(n[
              t
            ]
            [
              0
            ]
            >=e&&(0===t?0:n[
              t-1
            ]
            [
              0
            ])<e)return n[
              t
            ]
            [
              1
            ];
            return n[
              t-1
            ]
            [
              1
            ]
          };
          this._renderTicks(e, t, a, S, o, l, s, r, h), this._renderTitleAndDetail(e, t, a, S, o), this._renderAnchor(e, o), this._renderPointer(e, t, a, S, o, l, s, r, h)
        }, t.prototype._renderTicks=function(e, t, a, n, o, i, r, l, s){
          for(var u, d, c=this.group, p=o.cx, h=o.cy, g=o.r, f=+e.get("min"), y=+e.get("max"), m=e.getModel("splitLine"), v=e.getModel("axisTick"), x=e.getModel("axisLabel"), S=e.get("splitNumber"), _=v.get("splitNumber"), b=(0, Se.lo)(m.get("length"), g), I=(0, Se.lo)(v.get("length"), g), w=i, A=(r-i)/S, M=A/_, D=m.getModel("lineStyle").getLineStyle(), C=v.getModel("lineStyle").getLineStyle(), N=m.get("distance"), T=0;
          T<=S;
          T++){
            if(u=Math.cos(w), d=Math.sin(w), m.get("show")){
              var P=N?N+s:s, E=new Ea.A({
                shape:{
                  x1:u*(g-P)+p, y1:d*(g-P)+h, x2:u*(g-b-P)+p, y2:d*(g-b-P)+h
                }, style:D, silent:!0
              });
              "auto"===D.stroke&&E.setStyle({
                stroke:n(T/S)
              }), c.add(E)
            }
            if(x.get("show")){
              P=x.get("distance")+N;
              var V=za((0, Se.LI)(T/S*(y-f)+f), x.get("formatter")), R=n(T/S), z=u*(g-b-P)+p, k=d*(g-b-P)+h, O=x.get("rotate"), B=0;
              "radial"===O?(B=-w+2*Math.PI)>Math.PI/2&&(B+=Math.PI):"tangential"===O?B=-w-Math.PI/2:(0, L.isNumber)(O)&&(B=O*Math.PI/180), 0===B?c.add(new je.Ay({
                style:(0, G.VB)(x, {
                  text:V, x:z, y:k, verticalAlign:d<-.8?"top":d>.8?"bottom":"middle", align:u<-.4?"left":u>.4?"right":"center"
                }, {
                  inheritColor:R
                }), silent:!0
              })):c.add(new je.Ay({
                style:(0, G.VB)(x, {
                  text:V, x:z, y:k, verticalAlign:"middle", align:"center"
                }, {
                  inheritColor:R
                }), silent:!0, originX:z, originY:k, rotation:B
              }))
            }
            if(v.get("show")&&T!==S){
              P=(P=v.get("distance"))?P+s:s;
              for(var Y=0;
              Y<=_;
              Y++){
                u=Math.cos(w), d=Math.sin(w);
                var F=new Ea.A({
                  shape:{
                    x1:u*(g-P)+p, y1:d*(g-P)+h, x2:u*(g-I-P)+p, y2:d*(g-I-P)+h
                  }, silent:!0, style:C
                });
                "auto"===C.stroke&&F.setStyle({
                  stroke:n((T+Y/_)/S)
                }), c.add(F), w+=M
              }
              w-=M
            }
            else w+=A
          }
        }, t.prototype._renderPointer=function(e, t, a, n, o, i, r, l, s){
          var u=this.group, d=this._data, c=this._progressEls, p=[
          ], h=e.get([
            "pointer", "show"
          ]), g=e.getModel("progress"), f=g.get("show"), y=e.getData(), m=y.mapDimension("value"), S=+e.get("min"), _=+e.get("max"), b=[
            S, _
          ], I=[
            i, r
          ];
          function w(t, a){
            var n, i=y.getItemModel(t).getModel("pointer"), r=(0, Se.lo)(i.get("width"), o.r), l=(0, Se.lo)(i.get("length"), o.r), s=e.get([
              "pointer", "icon"
            ]), u=i.get("offsetCenter"), d=(0, Se.lo)(u[
              0
            ], o.r), c=(0, Se.lo)(u[
              1
            ], o.r), p=i.get("keepAspect");
            return(n=s?(0, v.v5)(s, d-r/2, c-l, r, l, null, p):new Ta({
              shape:{
                angle:-Math.PI/2, width:r, r:l, x:d, y:c
              }
            })).rotation=-(a+Math.PI/2), n.x=o.cx, n.y=o.cy, n
          }
          function A(e, t){
            var a=g.get("roundCap")?Va.A:Pa.A, n=g.get("overlap"), r=n?g.get("width"):s/y.count(), u=n?o.r-r:o.r-(e+1)*r, d=n?o.r:o.r-e*r, c=new a({
              shape:{
                startAngle:i, endAngle:t, cx:o.cx, cy:o.cy, clockwise:l, r0:u, r:d
              }
            });
            return n&&(c.z2=(0, Se.Cb)(y.get(m, e), [
              S, _
            ], [
              100, 0
            ], !0)), c
          }
          (f||h)&&(y.diff(d).add((function(t){
            var a=y.get(m, t);
            if(h){
              var n=w(t, i);
              z.LW(n, {
                rotation:-((isNaN(+a)?I[
                  0
                ]
                :(0, Se.Cb)(a, b, I, !0))+Math.PI/2)
              }, e), u.add(n), y.setItemGraphicEl(t, n)
            }
            if(f){
              var o=A(t, i), r=g.get("clip");
              z.LW(o, {
                shape:{
                  endAngle:(0, Se.Cb)(a, b, I, r)
                }
              }, e), u.add(o), (0, x.a)(e.seriesIndex, y.dataType, t, o), p[
                t
              ]
              =o
            }
          })).update((function(t, a){
            var n=y.get(m, t);
            if(h){
              var o=d.getItemGraphicEl(a), r=o?o.rotation:i, l=w(t, r);
              l.rotation=r, z.oi(l, {
                rotation:-((isNaN(+n)?I[
                  0
                ]
                :(0, Se.Cb)(n, b, I, !0))+Math.PI/2)
              }, e), u.add(l), y.setItemGraphicEl(t, l)
            }
            if(f){
              var s=c[
                a
              ], v=A(t, s?s.shape.endAngle:i), S=g.get("clip");
              z.oi(v, {
                shape:{
                  endAngle:(0, Se.Cb)(n, b, I, S)
                }
              }, e), u.add(v), (0, x.a)(e.seriesIndex, y.dataType, t, v), p[
                t
              ]
              =v
            }
          })).execute(), y.each((function(e){
            var t=y.getItemModel(e), a=t.getModel("emphasis"), o=a.get("focus"), i=a.get("blurScope"), r=a.get("disabled");
            if(h){
              var l=y.getItemGraphicEl(e), s=y.getItemVisual(e, "style"), u=s.fill;
              if(l instanceof O.Ay){
                var d=l.style;
                l.useStyle((0, L.extend)({
                  image:d.image, x:d.x, y:d.y, width:d.width, height:d.height
                }, s))
              }
              else l.useStyle(s), "pointer"!==l.type&&l.setColor(u);
              l.setStyle(t.getModel([
                "pointer", "itemStyle"
              ]).getItemStyle()), "auto"===l.style.fill&&l.setStyle("fill", n((0, Se.Cb)(y.get(m, e), b, [
                0, 1
              ], !0))), l.z2EmphasisLift=0, (0, k.Mx)(l, t), (0, k.Lm)(l, o, i, r)
            }
            if(f){
              var c=p[
                e
              ];
              c.useStyle(y.getItemVisual(e, "style")), c.setStyle(t.getModel([
                "progress", "itemStyle"
              ]).getItemStyle()), c.z2EmphasisLift=0, (0, k.Mx)(c, t), (0, k.Lm)(c, o, i, r)
            }
          })), this._progressEls=p)
        }, t.prototype._renderAnchor=function(e, t){
          var a=e.getModel("anchor");
          if(a.get("show")){
            var n=a.get("size"), o=a.get("icon"), i=a.get("offsetCenter"), r=a.get("keepAspect"), l=(0, v.v5)(o, t.cx-n/2+(0, Se.lo)(i[
              0
            ], t.r), t.cy-n/2+(0, Se.lo)(i[
              1
            ], t.r), n, n, null, r);
            l.z2=a.get("showAbove")?1:0, l.setStyle(a.getModel("itemStyle").getItemStyle()), this.group.add(l)
          }
        }, t.prototype._renderTitleAndDetail=function(e, t, a, n, o){
          var i=this, r=e.getData(), l=r.mapDimension("value"), s=+e.get("min"), u=+e.get("max"), d=new m.A, c=[
          ], p=[
          ], h=e.isAnimationEnabled(), g=e.get([
            "pointer", "showAbove"
          ]);
          r.diff(this._data).add((function(e){
            c[
              e
            ]
            =new je.Ay({
              silent:!0
            }), p[
              e
            ]
            =new je.Ay({
              silent:!0
            })
          })).update((function(e, t){
            c[
              e
            ]
            =i._titleEls[
              t
            ], p[
              e
            ]
            =i._detailEls[
              t
            ]
          })).execute(), r.each((function(t){
            var a=r.getItemModel(t), i=r.get(l, t), f=new m.A, y=n((0, Se.Cb)(i, [
              s, u
            ], [
              0, 1
            ], !0)), v=a.getModel("title");
            if(v.get("show")){
              var x=v.get("offsetCenter"), S=o.cx+(0, Se.lo)(x[
                0
              ], o.r), _=o.cy+(0, Se.lo)(x[
                1
              ], o.r);
              (C=c[
                t
              ]).attr({
                z2:g?0:2, style:(0, G.VB)(v, {
                  x:S, y:_, text:r.getName(t), align:"center", verticalAlign:"middle"
                }, {
                  inheritColor:y
                })
              }), f.add(C)
            }
            var b=a.getModel("detail");
            if(b.get("show")){
              var I=b.get("offsetCenter"), w=o.cx+(0, Se.lo)(I[
                0
              ], o.r), A=o.cy+(0, Se.lo)(I[
                1
              ], o.r), M=(0, Se.lo)(b.get("width"), o.r), L=(0, Se.lo)(b.get("height"), o.r), D=e.get([
                "progress", "show"
              ])?r.getItemVisual(t, "style").fill:y, C=p[
                t
              ], N=b.get("formatter");
              C.attr({
                z2:g?0:2, style:(0, G.VB)(b, {
                  x:w, y:A, text:za(i, N), width:isNaN(M)?null:M, height:isNaN(L)?null:L, align:"center", verticalAlign:"middle"
                }, {
                  inheritColor:D
                })
              }), (0, G.Oh)(C, {
                normal:b
              }, i, (function(e){
                return za(e, N)
              })), h&&(0, G.xb)(C, t, r, e, {
                getFormattedLabel:function(e, t, a, n, o, r){
                  return za(r?r.interpolatedValue:i, N)
                }
              }), f.add(C)
            }
            d.add(f)
          })), this.group.add(d), this._titleEls=c, this._detailEls=p
        }, t.type="gauge", t
      }
      (w.A);
      const Ga=function(e){
        function t(){
          var a=null!==e&&e.apply(this, arguments)||this;
          return a.type=t.type, a.visualStyleAccessPath="itemStyle", a
        }
        return(0, d.C6)(t, e), t.prototype.getInitialData=function(e, t){
          return(0, Y.A)(this, [
            "value"
          ])
        }, t.type="series.gauge", t.defaultOption={
          z:2, colorBy:"data", center:[
            "50%", "50%"
          ], legendHoverLink:!0, radius:"75%", startAngle:225, endAngle:-45, clockwise:!0, min:0, max:100, splitNumber:10, axisLine:{
            show:!0, roundCap:!1, lineStyle:{
              color:[
                [
                  1, "#E6EBF8"
                ]
              ], width:10
            }
          }, progress:{
            show:!1, overlap:!0, width:10, roundCap:!1, clip:!0
          }, splitLine:{
            show:!0, length:10, distance:10, lineStyle:{
              color:"#63677A", width:3, type:"solid"
            }
          }, axisTick:{
            show:!0, splitNumber:5, length:6, distance:10, lineStyle:{
              color:"#63677A", width:1, type:"solid"
            }
          }, axisLabel:{
            show:!0, distance:15, color:"#464646", fontSize:12, rotate:0
          }, pointer:{
            icon:null, offsetCenter:[
              0, 0
            ], show:!0, showAbove:!0, length:"60%", width:6, keepAspect:!1
          }, anchor:{
            show:!1, showAbove:!1, size:6, icon:"circle", offsetCenter:[
              0, 0
            ], keepAspect:!1, itemStyle:{
              color:"#fff", borderWidth:0, borderColor:"#5470c6"
            }
          }, title:{
            show:!0, offsetCenter:[
              0, "20%"
            ], color:"#464646", fontSize:16, valueAnimation:!1
          }, detail:{
            show:!0, backgroundColor:"rgba(0,0,0,0)", borderWidth:0, borderColor:"#ccc", width:100, height:null, padding:[
              5, 10
            ], offsetCenter:[
              0, "40%"
            ], color:"#464646", fontSize:30, fontWeight:"bold", lineHeight:30, valueAnimation:!1
          }
        }, t
      }
      (p.A);
      var Oa=a(726346), Ba=a(392621), Ya=[
        "itemStyle", "opacity"
      ], Fa=function(e){
        function t(t, a){
          var n=e.call(this)||this, o=n, i=new R.A, r=new je.Ay;
          return o.setTextContent(r), n.setTextGuideLine(i), n.updateData(t, a, !0), n
        }
        return(0, d.C6)(t, e), t.prototype.updateData=function(e, t, a){
          var n=this, o=e.hostModel, i=e.getItemModel(t), r=e.getItemLayout(t), l=i.getModel("emphasis"), s=i.get(Ya);
          s=null==s?1:s, a||(0, z.ap)(n), n.useStyle(e.getItemVisual(t, "style")), n.style.lineJoin="round", a?(n.setShape({
            points:r.points
          }), n.style.opacity=0, z.LW(n, {
            style:{
              opacity:s
            }
          }, o, t)):z.oi(n, {
            style:{
              opacity:s
            }, shape:{
              points:r.points
            }
          }, o, t), (0, k.Mx)(n, i), this._updateLabel(e, t), (0, k.Lm)(this, l.get("focus"), l.get("blurScope"), l.get("disabled"))
        }, t.prototype._updateLabel=function(e, t){
          var a=this, n=this.getTextGuideLine(), o=a.getTextContent(), i=e.hostModel, r=e.getItemModel(t), l=e.getItemLayout(t).label, s=e.getItemVisual(t, "style"), u=s.fill;
          (0, G.qM)(o, (0, G.lx)(r), {
            labelFetcher:e.hostModel, labelDataIndex:t, defaultOpacity:s.opacity, defaultText:e.getName(t)
          }, {
            normal:{
              align:l.textAlign, verticalAlign:l.verticalAlign
            }
          }), a.setTextConfig({
            local:!0, inside:!!l.inside, insideStroke:u, outsideFill:u
          });
          var d=l.linePoints;
          n.setShape({
            points:d
          }), a.textGuideLineConfig={
            anchor:d?new Oa.A(d[
              0
            ]
            [
              0
            ], d[
              0
            ]
            [
              1
            ]):null
          }, z.oi(o, {
            style:{
              x:l.x, y:l.y
            }
          }, i, t), o.attr({
            rotation:l.rotation, originX:l.x, originY:l.y, z2:10
          }), (0, Ba.eR)(a, (0, Ba.rv)(r), {
            stroke:u
          })
        }, t
      }
      (V.A);
      const Wa=function(e){
        function t(){
          var a=null!==e&&e.apply(this, arguments)||this;
          return a.type=t.type, a.ignoreLabelLineUpdate=!0, a
        }
        return(0, d.C6)(t, e), t.prototype.render=function(e, t, a){
          var n=e.getData(), o=this._data, i=this.group;
          n.diff(o).add((function(e){
            var t=new Fa(n, e);
            n.setItemGraphicEl(e, t), i.add(t)
          })).update((function(e, t){
            var a=o.getItemGraphicEl(t);
            a.updateData(n, e), i.add(a), n.setItemGraphicEl(e, a)
          })).remove((function(t){
            var a=o.getItemGraphicEl(t);
            z.t5(a, e, t)
          })).execute(), this._data=n
        }, t.prototype.remove=function(){
          this.group.removeAll(), this._data=null
        }, t.prototype.dispose=function(){
        }, t.type="funnel", t
      }
      (w.A);
      const Ha=function(e){
        function t(){
          var a=null!==e&&e.apply(this, arguments)||this;
          return a.type=t.type, a
        }
        return(0, d.C6)(t, e), t.prototype.init=function(t){
          e.prototype.init.apply(this, arguments), this.legendVisualProvider=new F.A(L.bind(this.getData, this), L.bind(this.getRawData, this)), this._defaultLabelLine(t)
        }, t.prototype.getInitialData=function(e, t){
          return(0, Y.A)(this, {
            coordDimensions:[
              "value"
            ], encodeDefaulter:L.curry(Q.ln, this)
          })
        }, t.prototype._defaultLabelLine=function(e){
          (0, Fe.M5)(e, "labelLine", [
            "show"
          ]);
          var t=e.labelLine, a=e.emphasis.labelLine;
          t.show=t.show&&e.label.show, a.show=a.show&&e.emphasis.label.show
        }, t.prototype.getDataParams=function(t){
          var a=this.getData(), n=e.prototype.getDataParams.call(this, t), o=a.mapDimension("value"), i=a.getSum(o);
          return n.percent=i?+(a.get(o, t)/i*100).toFixed(2):0, n.$vars.push("percent"), n
        }, t.type="series.funnel", t.defaultOption={
          z:2, legendHoverLink:!0, colorBy:"data", left:80, top:60, right:80, bottom:60, minSize:"0%", maxSize:"100%", sort:"descending", orient:"vertical", gap:0, funnelAlign:"center", label:{
            show:!0, position:"outer"
          }, labelLine:{
            show:!0, length:20, lineStyle:{
              width:1
            }
          }, itemStyle:{
            borderColor:"#fff", borderWidth:1
          }, emphasis:{
            label:{
              show:!0
            }
          }, select:{
            itemStyle:{
              borderColor:"#212121"
            }
          }
        }, t
      }
      (p.A);
      function Xa(e, t){
        e.eachSeriesByType("funnel", (function(e){
          var a=e.getData(), n=a.mapDimension("value"), o=e.get("sort"), i=function(e, t){
            return oe.dV(e.getBoxLayoutParams(), {
              width:t.getWidth(), height:t.getHeight()
            })
          }
          (e, t), r=e.get("orient"), l=i.width, s=i.height, u=function(e, t){
            for(var a=e.mapDimension("value"), n=e.mapArray(a, (function(e){
              return e
            })), o=[
            ], i="ascending"===t, r=0, l=e.count();
            r<l;
            r++)o[
              r
            ]
            =r;
            return(0, L.isFunction)(t)?o.sort(t):"none"!==t&&o.sort((function(e, t){
              return i?n[
                e
              ]
              -n[
                t
              ]
              :n[
                t
              ]
              -n[
                e
              ]
            })), o
          }
          (a, o), d=i.x, c=i.y, p="horizontal"===r?[
            (0, Se.lo)(e.get("minSize"), s), (0, Se.lo)(e.get("maxSize"), s)
          ]
          :[
            (0, Se.lo)(e.get("minSize"), l), (0, Se.lo)(e.get("maxSize"), l)
          ], h=a.getDataExtent(n), g=e.get("min"), f=e.get("max");
          null==g&&(g=Math.min(h[
            0
          ], 0)), null==f&&(f=h[
            1
          ]);
          var y=e.get("funnelAlign"), m=e.get("gap"), v=(("horizontal"===r?l:s)-m*(a.count()-1))/a.count(), x=function(e, t){
            if("horizontal"===r){
              var o=a.get(n, e)||0, i=(0, Se.Cb)(o, [
                g, f
              ], p, !0), u=void 0;
              switch(y){
                case"top":u=c;
                break;
                case"center":u=c+(s-i)/2;
                break;
                case"bottom":u=c+(s-i)
              }
              return[
                [
                  t, u
                ], [
                  t, u+i
                ]
              ]
            }
            var h, m=a.get(n, e)||0, v=(0, Se.Cb)(m, [
              g, f
            ], p, !0);
            switch(y){
              case"left":h=d;
              break;
              case"center":h=d+(l-v)/2;
              break;
              case"right":h=d+l-v
            }
            return[
              [
                h, t
              ], [
                h+v, t
              ]
            ]
          };
          "ascending"===o&&(v=-v, m=-m, "horizontal"===r?d+=l:c+=s, u=u.reverse());
          for(var S=0;
          S<u.length;
          S++){
            var _=u[
              S
            ], b=u[
              S+1
            ], I=a.getItemModel(_);
            if("horizontal"===r){
              var w=I.get([
                "itemStyle", "width"
              ]);
              null==w?w=v:(w=(0, Se.lo)(w, l), "ascending"===o&&(w=-w));
              var A=x(_, d), M=x(b, d+w);
              d+=w+m, a.setItemLayout(_, {
                points:A.concat(M.slice().reverse())
              })
            }
            else{
              var D=I.get([
                "itemStyle", "height"
              ]);
              null==D?D=v:(D=(0, Se.lo)(D, s), "ascending"===o&&(D=-D));
              A=x(_, c), M=x(b, c+D);
              c+=D+m, a.setItemLayout(_, {
                points:A.concat(M.slice().reverse())
              })
            }
          }
          !function(e){
            var t=e.hostModel.get("orient");
            e.each((function(a){
              var n, o, i, r, l=e.getItemModel(a), s=l.getModel("label").get("position"), u=l.getModel("labelLine"), d=e.getItemLayout(a), c=d.points, p="inner"===s||"inside"===s||"center"===s||"insideLeft"===s||"insideRight"===s;
              if(p)"insideLeft"===s?(o=(c[
                0
              ]
              [
                0
              ]
              +c[
                3
              ]
              [
                0
              ])/2+5, i=(c[
                0
              ]
              [
                1
              ]
              +c[
                3
              ]
              [
                1
              ])/2, n="left"):"insideRight"===s?(o=(c[
                1
              ]
              [
                0
              ]
              +c[
                2
              ]
              [
                0
              ])/2-5, i=(c[
                1
              ]
              [
                1
              ]
              +c[
                2
              ]
              [
                1
              ])/2, n="right"):(o=(c[
                0
              ]
              [
                0
              ]
              +c[
                1
              ]
              [
                0
              ]
              +c[
                2
              ]
              [
                0
              ]
              +c[
                3
              ]
              [
                0
              ])/4, i=(c[
                0
              ]
              [
                1
              ]
              +c[
                1
              ]
              [
                1
              ]
              +c[
                2
              ]
              [
                1
              ]
              +c[
                3
              ]
              [
                1
              ])/4, n="center"), r=[
                [
                  o, i
                ], [
                  o, i
                ]
              ];
              else{
                var h=void 0, g=void 0, f=void 0, y=void 0, m=u.get("length");
                "left"===s?(h=(c[
                  3
                ]
                [
                  0
                ]
                +c[
                  0
                ]
                [
                  0
                ])/2, g=(c[
                  3
                ]
                [
                  1
                ]
                +c[
                  0
                ]
                [
                  1
                ])/2, o=(f=h-m)-5, n="right"):"right"===s?(h=(c[
                  1
                ]
                [
                  0
                ]
                +c[
                  2
                ]
                [
                  0
                ])/2, g=(c[
                  1
                ]
                [
                  1
                ]
                +c[
                  2
                ]
                [
                  1
                ])/2, o=(f=h+m)+5, n="left"):"top"===s?(h=(c[
                  3
                ]
                [
                  0
                ]
                +c[
                  0
                ]
                [
                  0
                ])/2, i=(y=(g=(c[
                  3
                ]
                [
                  1
                ]
                +c[
                  0
                ]
                [
                  1
                ])/2)-m)-5, n="center"):"bottom"===s?(h=(c[
                  1
                ]
                [
                  0
                ]
                +c[
                  2
                ]
                [
                  0
                ])/2, i=(y=(g=(c[
                  1
                ]
                [
                  1
                ]
                +c[
                  2
                ]
                [
                  1
                ])/2)+m)+5, n="center"):"rightTop"===s?(h="horizontal"===t?c[
                  3
                ]
                [
                  0
                ]
                :c[
                  1
                ]
                [
                  0
                ], g="horizontal"===t?c[
                  3
                ]
                [
                  1
                ]
                :c[
                  1
                ]
                [
                  1
                ], "horizontal"===t?(i=(y=g-m)-5, n="center"):(o=(f=h+m)+5, n="top")):"rightBottom"===s?(h=c[
                  2
                ]
                [
                  0
                ], g=c[
                  2
                ]
                [
                  1
                ], "horizontal"===t?(i=(y=g+m)+5, n="center"):(o=(f=h+m)+5, n="bottom")):"leftTop"===s?(h=c[
                  0
                ]
                [
                  0
                ], g="horizontal"===t?c[
                  0
                ]
                [
                  1
                ]
                :c[
                  1
                ]
                [
                  1
                ], "horizontal"===t?(i=(y=g-m)-5, n="center"):(o=(f=h-m)-5, n="right")):"leftBottom"===s?(h="horizontal"===t?c[
                  1
                ]
                [
                  0
                ]
                :c[
                  3
                ]
                [
                  0
                ], g="horizontal"===t?c[
                  1
                ]
                [
                  1
                ]
                :c[
                  2
                ]
                [
                  1
                ], "horizontal"===t?(i=(y=g+m)+5, n="center"):(o=(f=h-m)-5, n="right")):(h=(c[
                  1
                ]
                [
                  0
                ]
                +c[
                  2
                ]
                [
                  0
                ])/2, g=(c[
                  1
                ]
                [
                  1
                ]
                +c[
                  2
                ]
                [
                  1
                ])/2, "horizontal"===t?(i=(y=g+m)+5, n="center"):(o=(f=h+m)+5, n="left")), "horizontal"===t?o=f=h:i=y=g, r=[
                  [
                    h, g
                  ], [
                    f, y
                  ]
                ]
              }
              d.label={
                linePoints:r, x:o, y:i, verticalAlign:"middle", textAlign:n, inside:p
              }
            }))
          }
          (a)
        }))
      }
      function Ua(e, t, a, n){
        for(var o, i=[
        ], r=0;
        r<a.length;
        r++){
          var l=a[
            r
          ], s=e.get(e.mapDimension(l), t);
          o=s, ("category"===n.getAxis(l).type?null==o:null==o||isNaN(o))||i.push(n.dataToPoint(s, l))
        }
        return i
      }
      function Za(e, t, a, n, o){
        var i=Ua(e, a, n, o), r=new R.A({
          shape:{
            points:i
          }, z2:10
        });
        return t.add(r), e.setItemGraphicEl(a, r), r
      }
      function qa(e){
        var t=e.get("smooth", !0);
        return!0===t&&(t=.3), t=(0, Se.Sm)(t), (0, L.eqNaN)(t)&&(t=0), {
          smooth:t
        }
      }
      function ja(e, t, a, n){
        e.useStyle(t.getItemVisual(a, "style")), e.style.fill=null, e.setShape("smooth", n.smooth);
        var o=t.getItemModel(a), i=o.getModel("emphasis");
        (0, k.Mx)(e, o, "lineStyle"), (0, k.Lm)(e, i.get("focus"), i.get("blurScope"), i.get("disabled"))
      }
      const Qa=function(e){
        function t(){
          var a=null!==e&&e.apply(this, arguments)||this;
          return a.type=t.type, a._dataGroup=new m.A, a._initialized=!1, a
        }
        return(0, d.C6)(t, e), t.prototype.init=function(){
          this.group.add(this._dataGroup)
        }, t.prototype.render=function(e, t, a, n){
          this._progressiveEls=null;
          var o=this._dataGroup, i=e.getData(), r=this._data, l=e.coordinateSystem, s=l.dimensions, u=qa(e);
          if(i.diff(r).add((function(e){
            ja(Za(i, o, e, s, l), i, e, u)
          })).update((function(t, a){
            var n=r.getItemGraphicEl(a), o=Ua(i, t, s, l);
            i.setItemGraphicEl(t, n), z.oi(n, {
              shape:{
                points:o
              }
            }, e, t), (0, z.ap)(n), ja(n, i, t, u)
          })).remove((function(e){
            var t=r.getItemGraphicEl(e);
            o.remove(t)
          })).execute(), !this._initialized){
            this._initialized=!0;
            var d=function(e, t, a){
              var n=e.model, o=e.getRect(), i=new Ze.A({
                shape:{
                  x:o.x, y:o.y, width:o.width, height:o.height
                }
              }), r="horizontal"===n.get("layout")?"width":"height";
              return i.setShape(r, 0), z.LW(i, {
                shape:{
                  width:o.width, height:o.height
                }
              }, t, a), i
            }
            (l, e, (function(){
              setTimeout((function(){
                o.removeClipPath()
              }))
            }));
            o.setClipPath(d)
          }
          this._data=i
        }, t.prototype.incrementalPrepareRender=function(e, t, a){
          this._initialized=!0, this._data=null, this._dataGroup.removeAll()
        }, t.prototype.incrementalRender=function(e, t, a){
          for(var n=t.getData(), o=t.coordinateSystem, i=o.dimensions, r=qa(t), l=this._progressiveEls=[
          ], s=e.start;
          s<e.end;
          s++){
            var u=Za(n, this._dataGroup, s, i, o);
            u.incremental=!0, ja(u, n, s, r), l.push(u)
          }
        }, t.prototype.remove=function(){
          this._dataGroup&&this._dataGroup.removeAll(), this._data=null
        }, t.type="parallel", t
      }
      (w.A);
      function Ja(e){
        var t=e.ecModel.getComponent("parallel", e.get("parallelIndex"));
        if(t){
          var a={
          };
          return(0, L.each)(t.dimensions, (function(e){
            var t=+e.replace("dim", "");
            a[
              e
            ]
            =t
          })), a
        }
      }
      const Ka=function(e){
        function t(){
          var a=null!==e&&e.apply(this, arguments)||this;
          return a.type=t.type, a.visualStyleAccessPath="lineStyle", a.visualDrawType="stroke", a
        }
        return(0, d.C6)(t, e), t.prototype.getInitialData=function(e, t){
          return(0, c.A)(null, this, {
            useEncodeDefaulter:(0, L.bind)(Ja, null, this)
          })
        }, t.prototype.getRawIndicesByActiveState=function(e){
          var t=this.coordinateSystem, a=this.getData(), n=[
          ];
          return t.eachActiveState(a, (function(t, o){
            e===t&&n.push(a.getRawIndex(o))
          })), n
        }, t.type="series.parallel", t.dependencies=[
          "parallel"
        ], t.defaultOption={
          z:2, coordinateSystem:"parallel", parallelIndex:0, label:{
            show:!1
          }, inactiveOpacity:.05, activeOpacity:1, lineStyle:{
            width:1, opacity:.45, type:"solid"
          }, emphasis:{
            label:{
              show:!1
            }
          }, progressive:500, smooth:!1, animationEasing:"linear"
        }, t
      }
      (p.A);
      var $a=[
        "lineStyle", "opacity"
      ];
      const en={
        seriesType:"parallel", reset:function(e, t){
          var a=e.coordinateSystem, n={
            normal:e.get([
              "lineStyle", "opacity"
            ]), active:e.get("activeOpacity"), inactive:e.get("inactiveOpacity")
          };
          return{
            progress:function(e, t){
              a.eachActiveState(t, (function(e, a){
                var o=n[
                  e
                ];
                if("normal"===e&&t.hasItemOption){
                  var i=t.getItemModel(a).get($a, !0);
                  null!=i&&(o=i)
                }
                t.ensureUniqueItemVisual(a, "style").opacity=o
              }), e.start, e.end)
            }
          }
        }
      };
      var tn=a(523351);
      var an=a(229668), nn=function(){
        this.x1=0, this.y1=0, this.x2=0, this.y2=0, this.cpx1=0, this.cpy1=0, this.cpx2=0, this.cpy2=0, this.extent=0
      }, on=function(e){
        function t(t){
          return e.call(this, t)||this
        }
        return(0, d.C6)(t, e), t.prototype.getDefaultShape=function(){
          return new nn
        }, t.prototype.buildPath=function(e, t){
          var a=t.extent;
          e.moveTo(t.x1, t.y1), e.bezierCurveTo(t.cpx1, t.cpy1, t.cpx2, t.cpy2, t.x2, t.y2), "vertical"===t.orient?(e.lineTo(t.x2+a, t.y2), e.bezierCurveTo(t.cpx2+a, t.cpy2, t.cpx1+a, t.cpy1, t.x1+a, t.y1)):(e.lineTo(t.x2, t.y2+a), e.bezierCurveTo(t.cpx2, t.cpy2+a, t.cpx1, t.cpy1+a, t.x1, t.y1+a)), e.closePath()
        }, t.prototype.highlight=function(){
          (0, k.HY)(this)
        }, t.prototype.downplay=function(){
          (0, k.SD)(this)
        }, t
      }
      (y.Ay);
      function rn(e, t, a){
        switch(e.fill){
          case"source":e.fill=a.node1.getVisual("color"), e.decal=a.node1.getVisual("style").decal;
          break;
          case"target":e.fill=a.node2.getVisual("color"), e.decal=a.node2.getVisual("style").decal;
          break;
          case"gradient":var n=a.node1.getVisual("color"), o=a.node2.getVisual("color");
          (0, L.isString)(n)&&(0, L.isString)(o)&&(e.fill=new an.A(0, 0, +("horizontal"===t), +("vertical"===t), [
            {
              color:n, offset:0
            }, {
              color:o, offset:1
            }
          ]))
        }
      }
      const ln=function(e){
        function t(){
          var a=null!==e&&e.apply(this, arguments)||this;
          return a.type=t.type, a._focusAdjacencyDisabled=!1, a
        }
        return(0, d.C6)(t, e), t.prototype.render=function(e, t, a){
          var n=this, o=e.getGraph(), i=this.group, r=e.layoutInfo, l=r.width, s=r.height, u=e.getData(), d=e.getData("edge"), c=e.get("orient");
          this._model=e, i.removeAll(), i.x=r.x, i.y=r.y, o.eachEdge((function(t){
            var a=new on, n=(0, x.z)(a);
            n.dataIndex=t.dataIndex, n.seriesIndex=e.seriesIndex, n.dataType="edge";
            var o, r, u, p, h, g, f, y, m=t.getModel(), v=m.getModel("lineStyle"), S=v.get("curveness"), _=t.node1.getLayout(), b=t.node1.getModel(), I=b.get("localX"), w=b.get("localY"), A=t.node2.getLayout(), M=t.node2.getModel(), D=M.get("localX"), C=M.get("localY"), N=t.getLayout();
            a.shape.extent=Math.max(1, N.dy), a.shape.orient=c, "vertical"===c?(o=(null!=I?I*l:_.x)+N.sy, r=(null!=w?w*s:_.y)+_.dy, u=(null!=D?D*l:A.x)+N.ty, h=o, g=r*(1-S)+(p=null!=C?C*s:A.y)*S, f=u, y=r*S+p*(1-S)):(o=(null!=I?I*l:_.x)+_.dx, r=(null!=w?w*s:_.y)+N.sy, h=o*(1-S)+(u=null!=D?D*l:A.x)*S, g=r, f=o*S+u*(1-S), y=p=(null!=C?C*s:A.y)+N.ty), a.setShape({
              x1:o, y1:r, x2:u, y2:p, cpx1:h, cpy1:g, cpx2:f, cpy2:y
            }), a.useStyle(v.getItemStyle()), rn(a.style, c, t);
            var T=""+m.get("value"), P=(0, G.lx)(m, "edgeLabel");
            (0, G.qM)(a, P, {
              labelFetcher:{
                getFormattedLabel:function(t, a, n, o, i, r){
                  return e.getFormattedLabel(t, a, "edge", o, (0, L.retrieve3)(i, P.normal&&P.normal.get("formatter"), T), r)
                }
              }, labelDataIndex:t.dataIndex, defaultText:T
            }), a.setTextConfig({
              position:"inside"
            });
            var E=m.getModel("emphasis");
            (0, k.Mx)(a, m, "lineStyle", (function(e){
              var a=e.getItemStyle();
              return rn(a, c, t), a
            })), i.add(a), d.setItemGraphicEl(t.dataIndex, a);
            var V=E.get("focus");
            (0, k.Lm)(a, "adjacency"===V?t.getAdjacentDataIndices():"trajectory"===V?t.getTrajectoryDataIndices():V, E.get("blurScope"), E.get("disabled"))
          })), o.eachNode((function(t){
            var a=t.getLayout(), n=t.getModel(), o=n.get("localX"), r=n.get("localY"), d=n.getModel("emphasis"), c=n.get([
              "itemStyle", "borderRadius"
            ])||0, p=new Ze.A({
              shape:{
                x:null!=o?o*l:a.x, y:null!=r?r*s:a.y, width:a.dx, height:a.dy, r:c
              }, style:n.getModel("itemStyle").getItemStyle(), z2:10
            });
            (0, G.qM)(p, (0, G.lx)(n), {
              labelFetcher:{
                getFormattedLabel:function(t, a){
                  return e.getFormattedLabel(t, a, "node")
                }
              }, labelDataIndex:t.dataIndex, defaultText:t.id
            }), p.disableLabelAnimation=!0, p.setStyle("fill", t.getVisual("color")), p.setStyle("decal", t.getVisual("style").decal), (0, k.Mx)(p, n), i.add(p), u.setItemGraphicEl(t.dataIndex, p), (0, x.z)(p).dataType="node";
            var h=d.get("focus");
            (0, k.Lm)(p, "adjacency"===h?t.getAdjacentDataIndices():"trajectory"===h?t.getTrajectoryDataIndices():h, d.get("blurScope"), d.get("disabled"))
          })), u.eachItemGraphicEl((function(t, o){
            u.getItemModel(o).get("draggable")&&(t.drift=function(t, i){
              n._focusAdjacencyDisabled=!0, this.shape.x+=t, this.shape.y+=i, this.dirty(), a.dispatchAction({
                type:"dragNode", seriesId:e.id, dataIndex:u.getRawIndex(o), localX:this.shape.x/l, localY:this.shape.y/s
              })
            }, t.ondragend=function(){
              n._focusAdjacencyDisabled=!1
            }, t.draggable=!0, t.cursor="move")
          })), !this._data&&e.isAnimationEnabled()&&i.setClipPath(function(e, t, a){
            var n=new Ze.A({
              shape:{
                x:e.x-10, y:e.y-10, width:0, height:e.height+20
              }
            });
            return z.LW(n, {
              shape:{
                width:e.width+20
              }
            }, t, a), n
          }
          (i.getBoundingRect(), e, (function(){
            i.removeClipPath()
          }))), this._data=e.getData()
        }, t.prototype.dispose=function(){
        }, t.type="sankey", t
      }
      (w.A);
      const sn=function(e){
        function t(){
          var a=null!==e&&e.apply(this, arguments)||this;
          return a.type=t.type, a
        }
        return(0, d.C6)(t, e), t.prototype.getInitialData=function(e, t){
          var a=e.edges||e.links||[
          ], n=e.data||e.nodes||[
          ], o=e.levels||[
          ];
          this.levelModels=[
          ];
          for(var i=this.levelModels, r=0;
          r<o.length;
          r++)null!=o[
            r
          ].depth&&o[
            r
          ].depth>=0&&(i[
            o[
              r
            ].depth
          ]
          =new Te.A(o[
            r
          ], this, t));
          return Ma(n, a, this, !0, (function(e, t){
            e.wrapMethod("getItemModel", (function(e, t){
              var a=e.parentModel, n=a.getData().getItemLayout(t);
              if(n){
                var o=n.depth, i=a.levelModels[
                  o
                ];
                i&&(e.parentModel=i)
              }
              return e
            })), t.wrapMethod("getItemModel", (function(e, t){
              var a=e.parentModel, n=a.getGraph().getEdgeByIndex(t).node1.getLayout();
              if(n){
                var o=n.depth, i=a.levelModels[
                  o
                ];
                i&&(e.parentModel=i)
              }
              return e
            }))
          })).data
        }, t.prototype.setNodePosition=function(e, t){
          var a=(this.option.data||this.option.nodes)[
            e
          ];
          a.localX=t[
            0
          ], a.localY=t[
            1
          ]
        }, t.prototype.getGraph=function(){
          return this.getData().graph
        }, t.prototype.getEdgeData=function(){
          return this.getGraph().edgeData
        }, t.prototype.formatTooltip=function(e, t, a){
          function n(e){
            return isNaN(e)||null==e
          }
          if("edge"===a){
            var o=this.getDataParams(e, a), i=o.data, r=o.value, l=i.source+" -- "+i.target;
            return(0, W.Qx)("nameValue", {
              name:l, value:r, noValue:n(r)
            })
          }
          var s=this.getGraph().getNodeByIndex(e).getLayout().value, u=this.getDataParams(e, a).data.name;
          return(0, W.Qx)("nameValue", {
            name:null!=u?u+"":null, value:s, noValue:n(s)
          })
        }, t.prototype.optionUpdated=function(){
        }, t.prototype.getDataParams=function(t, a){
          var n=e.prototype.getDataParams.call(this, t, a);
          if(null==n.value&&"node"===a){
            var o=this.getGraph().getNodeByIndex(t).getLayout().value;
            n.value=o
          }
          return n
        }, t.type="series.sankey", t.defaultOption={
          z:2, coordinateSystem:"view", left:"5%", top:"5%", right:"20%", bottom:"5%", orient:"horizontal", nodeWidth:20, nodeGap:8, draggable:!0, layoutIterations:32, label:{
            show:!0, position:"right", fontSize:12
          }, edgeLabel:{
            show:!1, fontSize:12
          }, levels:[
          ], nodeAlign:"justify", lineStyle:{
            color:"#314656", opacity:.2, curveness:.5
          }, emphasis:{
            label:{
              show:!0
            }, lineStyle:{
              opacity:.5
            }
          }, select:{
            itemStyle:{
              borderColor:"#212121"
            }
          }, animationEasing:"linear", animationDuration:1e3
        }, t
      }
      (p.A);
      function un(e, t){
        e.eachSeriesByType("sankey", (function(e){
          var a=e.get("nodeWidth"), n=e.get("nodeGap"), o=function(e, t){
            return oe.dV(e.getBoxLayoutParams(), {
              width:t.getWidth(), height:t.getHeight()
            })
          }
          (e, t);
          e.layoutInfo=o;
          var i=o.width, r=o.height, l=e.getGraph(), s=l.nodes, u=l.edges;
          !function(e){
            L.each(e, (function(e){
              var t=xn(e.outEdges, vn), a=xn(e.inEdges, vn), n=e.getValue()||0, o=Math.max(t, a, n);
              e.setLayout({
                value:o
              }, !0)
            }))
          }
          (s), function(e, t, a, n, o, i, r, l, s){
            (function(e, t, a, n, o, i, r){
              for(var l=[
              ], s=[
              ], u=[
              ], d=[
              ], c=0, p=0;
              p<t.length;
              p++)l[
                p
              ]
              =1;
              for(p=0;
              p<e.length;
              p++)s[
                p
              ]
              =e[
                p
              ].inEdges.length, 0===s[
                p
              ]
              &&u.push(e[
                p
              ]);
              var h=-1;
              for(;
              u.length;
              ){
                for(var g=0;
                g<u.length;
                g++){
                  var f=u[
                    g
                  ], y=f.hostGraph.data.getRawDataItem(f.dataIndex), m=null!=y.depth&&y.depth>=0;
                  m&&y.depth>h&&(h=y.depth), f.setLayout({
                    depth:m?y.depth:c
                  }, !0), "vertical"===i?f.setLayout({
                    dy:a
                  }, !0):f.setLayout({
                    dx:a
                  }, !0);
                  for(var v=0;
                  v<f.outEdges.length;
                  v++){
                    var x=f.outEdges[
                      v
                    ];
                    l[
                      t.indexOf(x)
                    ]
                    =0;
                    var S=x.node2;
                    0==--s[
                      e.indexOf(S)
                    ]
                    &&d.indexOf(S)<0&&d.push(S)
                  }
                }
                ++c, u=d, d=[
                ]
              }
              for(p=0;
              p<l.length;
              p++)if(1===l[
                p
              ])throw new Error("Sankey is a DAG, the original data has cycle!");
              var _=h>c-1?h:c-1;
              r&&"left"!==r&&function(e, t, a, n){
                if("right"===t){
                  for(var o=[
                  ], i=e, r=0;
                  i.length;
                  ){
                    for(var l=0;
                    l<i.length;
                    l++){
                      var s=i[
                        l
                      ];
                      s.setLayout({
                        skNodeHeight:r
                      }, !0);
                      for(var u=0;
                      u<s.inEdges.length;
                      u++){
                        var d=s.inEdges[
                          u
                        ];
                        o.indexOf(d.node1)<0&&o.push(d.node1)
                      }
                    }
                    i=o, o=[
                    ], ++r
                  }
                  L.each(e, (function(e){
                    dn(e)||e.setLayout({
                      depth:Math.max(0, n-e.getLayout().skNodeHeight)
                    }, !0)
                  }))
                }
                else"justify"===t&&function(e, t){
                  L.each(e, (function(e){
                    dn(e)||e.outEdges.length||e.setLayout({
                      depth:t
                    }, !0)
                  }))
                }
                (e, n)
              }
              (e, r, 0, _);
              !function(e, t, a){
                L.each(e, (function(e){
                  var n=e.getLayout().depth*t;
                  "vertical"===a?e.setLayout({
                    y:n
                  }, !0):e.setLayout({
                    x:n
                  }, !0)
                }))
              }
              (e, "vertical"===i?(o-a)/_:(n-a)/_, i)
            })(e, t, a, o, i, l, s), function(e, t, a, n, o, i, r){
              var l=function(e, t){
                var a=[
                ], n="vertical"===t?"y":"x", o=(0, Fe.Sq)(e, (function(e){
                  return e.getLayout()[
                    n
                  ]
                }));
                return o.keys.sort((function(e, t){
                  return e-t
                })), L.each(o.keys, (function(e){
                  a.push(o.buckets.get(e))
                })), a
              }
              (e, r);
              (function(e, t, a, n, o, i){
                var r=1/0;
                L.each(e, (function(e){
                  var t=e.length, l=0;
                  L.each(e, (function(e){
                    l+=e.getLayout().value
                  }));
                  var s="vertical"===i?(n-(t-1)*o)/l:(a-(t-1)*o)/l;
                  s<r&&(r=s)
                })), L.each(e, (function(e){
                  L.each(e, (function(e, t){
                    var a=e.getLayout().value*r;
                    "vertical"===i?(e.setLayout({
                      x:t
                    }, !0), e.setLayout({
                      dx:a
                    }, !0)):(e.setLayout({
                      y:t
                    }, !0), e.setLayout({
                      dy:a
                    }, !0))
                  }))
                })), L.each(t, (function(e){
                  var t=+e.getValue()*r;
                  e.setLayout({
                    dy:t
                  }, !0)
                }))
              })(l, t, a, n, o, r), cn(l, o, a, n, r);
              for(var s=1;
              i>0;
              i--)pn(l, s*=.99, r), cn(l, o, a, n, r), Sn(l, s, r), cn(l, o, a, n, r)
            }
            (e, t, i, o, n, r, l), function(e, t){
              var a="vertical"===t?"x":"y";
              L.each(e, (function(e){
                e.outEdges.sort((function(e, t){
                  return e.node2.getLayout()[
                    a
                  ]
                  -t.node2.getLayout()[
                    a
                  ]
                })), e.inEdges.sort((function(e, t){
                  return e.node1.getLayout()[
                    a
                  ]
                  -t.node1.getLayout()[
                    a
                  ]
                }))
              })), L.each(e, (function(e){
                var t=0, a=0;
                L.each(e.outEdges, (function(e){
                  e.setLayout({
                    sy:t
                  }, !0), t+=e.getLayout().dy
                })), L.each(e.inEdges, (function(e){
                  e.setLayout({
                    ty:a
                  }, !0), a+=e.getLayout().dy
                }))
              }))
            }
            (e, l)
          }
          (s, u, a, n, i, r, 0!==L.filter(s, (function(e){
            return 0===e.getLayout().value
          })).length?0:e.get("layoutIterations"), e.get("orient"), e.get("nodeAlign"))
        }))
      }
      function dn(e){
        var t=e.hostGraph.data.getRawDataItem(e.dataIndex);
        return null!=t.depth&&t.depth>=0
      }
      function cn(e, t, a, n, o){
        var i="vertical"===o?"x":"y";
        L.each(e, (function(e){
          var r, l, s;
          e.sort((function(e, t){
            return e.getLayout()[
              i
            ]
            -t.getLayout()[
              i
            ]
          }));
          for(var u=0, d=e.length, c="vertical"===o?"dx":"dy", p=0;
          p<d;
          p++)(s=u-(l=e[
            p
          ]).getLayout()[
            i
          ])>0&&(r=l.getLayout()[
            i
          ]
          +s, "vertical"===o?l.setLayout({
            x:r
          }, !0):l.setLayout({
            y:r
          }, !0)), u=l.getLayout()[
            i
          ]
          +l.getLayout()[
            c
          ]
          +t;
          if((s=u-t-("vertical"===o?n:a))>0){
            r=l.getLayout()[
              i
            ]
            -s, "vertical"===o?l.setLayout({
              x:r
            }, !0):l.setLayout({
              y:r
            }, !0), u=r;
            for(p=d-2;
            p>=0;
            --p)(s=(l=e[
              p
            ]).getLayout()[
              i
            ]
            +l.getLayout()[
              c
            ]
            +t-u)>0&&(r=l.getLayout()[
              i
            ]
            -s, "vertical"===o?l.setLayout({
              x:r
            }, !0):l.setLayout({
              y:r
            }, !0)), u=l.getLayout()[
              i
            ]
          }
        }))
      }
      function pn(e, t, a){
        L.each(e.slice().reverse(), (function(e){
          L.each(e, (function(e){
            if(e.outEdges.length){
              var n=xn(e.outEdges, hn, a)/xn(e.outEdges, vn);
              if(isNaN(n)){
                var o=e.outEdges.length;
                n=o?xn(e.outEdges, gn, a)/o:0
              }
              if("vertical"===a){
                var i=e.getLayout().x+(n-mn(e, a))*t;
                e.setLayout({
                  x:i
                }, !0)
              }
              else{
                var r=e.getLayout().y+(n-mn(e, a))*t;
                e.setLayout({
                  y:r
                }, !0)
              }
            }
          }))
        }))
      }
      function hn(e, t){
        return mn(e.node2, t)*e.getValue()
      }
      function gn(e, t){
        return mn(e.node2, t)
      }
      function fn(e, t){
        return mn(e.node1, t)*e.getValue()
      }
      function yn(e, t){
        return mn(e.node1, t)
      }
      function mn(e, t){
        return"vertical"===t?e.getLayout().x+e.getLayout().dx/2:e.getLayout().y+e.getLayout().dy/2
      }
      function vn(e){
        return e.getValue()
      }
      function xn(e, t, a){
        for(var n=0, o=e.length, i=-1;
        ++i<o;
        ){
          var r=+t(e[
            i
          ], a);
          isNaN(r)||(n+=r)
        }
        return n
      }
      function Sn(e, t, a){
        L.each(e, (function(e){
          L.each(e, (function(e){
            if(e.inEdges.length){
              var n=xn(e.inEdges, fn, a)/xn(e.inEdges, vn);
              if(isNaN(n)){
                var o=e.inEdges.length;
                n=o?xn(e.inEdges, yn, a)/o:0
              }
              if("vertical"===a){
                var i=e.getLayout().x+(n-mn(e, a))*t;
                e.setLayout({
                  x:i
                }, !0)
              }
              else{
                var r=e.getLayout().y+(n-mn(e, a))*t;
                e.setLayout({
                  y:r
                }, !0)
              }
            }
          }))
        }))
      }
      function _n(e){
        e.eachSeriesByType("sankey", (function(e){
          var t=e.getGraph(), a=t.nodes, n=t.edges;
          if(a.length){
            var o=1/0, i=-1/0;
            L.each(a, (function(e){
              var t=e.getLayout().value;
              t<o&&(o=t), t>i&&(i=t)
            })), L.each(a, (function(t){
              var a=new ft.A({
                type:"color", mappingMethod:"linear", dataExtent:[
                  o, i
                ], visual:e.get("color")
              }).mapValueToVisual(t.getLayout().value), n=t.getModel().get([
                "itemStyle", "color"
              ]);
              null!=n?(t.setVisual("color", n), t.setVisual("style", {
                fill:n
              })):(t.setVisual("color", a), t.setVisual("style", {
                fill:a
              }))
            }))
          }
          n.length&&L.each(n, (function(e){
            var t=e.getModel().get("lineStyle");
            e.setVisual("style", t)
          }))
        }))
      }
      var bn=a(229756), In=function(){
        function e(){
        }
        return e.prototype._hasEncodeRule=function(e){
          var t=this.getEncode();
          return t&&null!=t.get(e)
        }, e.prototype.getInitialData=function(e, t){
          var a, n, o=t.getComponent("xAxis", this.get("xAxisIndex")), i=t.getComponent("yAxis", this.get("yAxisIndex")), r=o.get("type"), l=i.get("type");
          "category"===r?(e.layout="horizontal", a=o.getOrdinalMeta(), n=!this._hasEncodeRule("x")):"category"===l?(e.layout="vertical", a=i.getOrdinalMeta(), n=!this._hasEncodeRule("y")):e.layout=e.layout||"horizontal";
          var s=[
            "x", "y"
          ], u="horizontal"===e.layout?0:1, d=this._baseAxisDim=s[
            u
          ], c=s[
            1-u
          ], p=[
            o, i
          ], h=p[
            u
          ].get("type"), g=p[
            1-u
          ].get("type"), f=e.data;
          if(f&&n){
            var y=[
            ];
            L.each(f, (function(e, t){
              var a;
              L.isArray(e)?(a=e.slice(), e.unshift(t)):L.isArray(e.value)?((a=L.extend({
              }, e)).value=a.value.slice(), e.value.unshift(t)):a=e, y.push(a)
            })), e.data=y
          }
          var m=this.defaultValueDimensions, v=[
            {
              name:d, type:(0, bn.B)(h), ordinalMeta:a, otherDims:{
                tooltip:!1, itemName:0
              }, dimsDef:[
                "base"
              ]
            }, {
              name:c, type:(0, bn.B)(g), dimsDef:m.slice()
            }
          ];
          return(0, Y.A)(this, {
            coordDimensions:v, dimensionsCount:m.length+1, encodeDefaulter:L.curry(Q.OC, v, this)
          })
        }, e.prototype.getBaseAxis=function(){
          var e=this._baseAxisDim;
          return this.ecModel.getComponent(e+"Axis", this.get(e+"AxisIndex")).axis
        }, e
      }
      (), wn=function(e){
        function t(){
          var a=null!==e&&e.apply(this, arguments)||this;
          return a.type=t.type, a.defaultValueDimensions=[
            {
              name:"min", defaultTooltip:!0
            }, {
              name:"Q1", defaultTooltip:!0
            }, {
              name:"median", defaultTooltip:!0
            }, {
              name:"Q3", defaultTooltip:!0
            }, {
              name:"max", defaultTooltip:!0
            }
          ], a.visualDrawType="stroke", a
        }
        return(0, d.C6)(t, e), t.type="series.boxplot", t.dependencies=[
          "xAxis", "yAxis", "grid"
        ], t.defaultOption={
          z:2, coordinateSystem:"cartesian2d", legendHoverLink:!0, layout:null, boxWidth:[
            7, 50
          ], itemStyle:{
            color:"#fff", borderWidth:1
          }, emphasis:{
            scale:!0, itemStyle:{
              borderWidth:2, shadowBlur:5, shadowOffsetX:1, shadowOffsetY:1, shadowColor:"rgba(0,0,0,0.2)"
            }
          }, animationDuration:800
        }, t
      }
      (p.A);
      (0, L.mixin)(wn, In, !0);
      const An=wn;
      var Mn=function(e){
        function t(){
          var a=null!==e&&e.apply(this, arguments)||this;
          return a.type=t.type, a
        }
        return(0, d.C6)(t, e), t.prototype.render=function(e, t, a){
          var n=e.getData(), o=this.group, i=this._data;
          this._data||o.removeAll();
          var r="horizontal"===e.get("layout")?1:0;
          n.diff(i).add((function(e){
            if(n.hasValue(e)){
              var t=Cn(n.getItemLayout(e), n, e, r, !0);
              n.setItemGraphicEl(e, t), o.add(t)
            }
          })).update((function(e, t){
            var a=i.getItemGraphicEl(t);
            if(n.hasValue(e)){
              var l=n.getItemLayout(e);
              a?((0, z.ap)(a), Nn(l, a, n, e)):a=Cn(l, n, e, r), o.add(a), n.setItemGraphicEl(e, a)
            }
            else o.remove(a)
          })).remove((function(e){
            var t=i.getItemGraphicEl(e);
            t&&o.remove(t)
          })).execute(), this._data=n
        }, t.prototype.remove=function(e){
          var t=this.group, a=this._data;
          this._data=null, a&&a.eachItemGraphicEl((function(e){
            e&&t.remove(e)
          }))
        }, t.type="boxplot", t
      }
      (w.A), Ln=function(){
      }, Dn=function(e){
        function t(t){
          var a=e.call(this, t)||this;
          return a.type="boxplotBoxPath", a
        }
        return(0, d.C6)(t, e), t.prototype.getDefaultShape=function(){
          return new Ln
        }, t.prototype.buildPath=function(e, t){
          var a=t.points, n=0;
          for(e.moveTo(a[
            n
          ]
          [
            0
          ], a[
            n
          ]
          [
            1
          ]), n++;
          n<4;
          n++)e.lineTo(a[
            n
          ]
          [
            0
          ], a[
            n
          ]
          [
            1
          ]);
          for(e.closePath();
          n<a.length;
          n++)e.moveTo(a[
            n
          ]
          [
            0
          ], a[
            n
          ]
          [
            1
          ]), n++, e.lineTo(a[
            n
          ]
          [
            0
          ], a[
            n
          ]
          [
            1
          ])
        }, t
      }
      (y.Ay);
      function Cn(e, t, a, n, o){
        var i=e.ends, r=new Dn({
          shape:{
            points:o?Tn(i, n, e):i
          }
        });
        return Nn(e, r, t, a, o), r
      }
      function Nn(e, t, a, n, o){
        var i=a.hostModel;
        (0, E[
          o?"initProps":"updateProps"
        ])(t, {
          shape:{
            points:e.ends
          }
        }, i, n), t.useStyle(a.getItemVisual(n, "style")), t.style.strokeNoScale=!0, t.z2=100;
        var r=a.getItemModel(n), l=r.getModel("emphasis");
        (0, k.Mx)(t, r), (0, k.Lm)(t, l.get("focus"), l.get("blurScope"), l.get("disabled"))
      }
      function Tn(e, t, a){
        return L.map(e, (function(e){
          return(e=e.slice())[
            t
          ]
          =a.initBaseline, e
        }))
      }
      const Pn=Mn;
      var En=L.each;
      function Vn(e){
        var t=function(e){
          var t=[
          ], a=[
          ];
          return e.eachSeriesByType("boxplot", (function(e){
            var n=e.getBaseAxis(), o=L.indexOf(a, n);
            o<0&&(o=a.length, a[
              o
            ]
            =n, t[
              o
            ]
            ={
              axis:n, seriesModels:[
              ]
            }), t[
              o
            ].seriesModels.push(e)
          })), t
        }
        (e);
        En(t, (function(e){
          var t=e.seriesModels;
          t.length&&(!function(e){
            var t, a=e.axis, n=e.seriesModels, o=n.length, i=e.boxWidthList=[
            ], r=e.boxOffsetList=[
            ], l=[
            ];
            if("category"===a.type)t=a.getBandWidth();
            else{
              var s=0;
              En(n, (function(e){
                s=Math.max(s, e.getData().count())
              }));
              var u=a.getExtent();
              t=Math.abs(u[
                1
              ]
              -u[
                0
              ])/s
            }
            En(n, (function(e){
              var a=e.get("boxWidth");
              L.isArray(a)||(a=[
                a, a
              ]), l.push([
                (0, Se.lo)(a[
                  0
                ], t)||0, (0, Se.lo)(a[
                  1
                ], t)||0
              ])
            }));
            var d=.8*t-2, c=d/o*.3, p=(d-c*(o-1))/o, h=p/2-d/2;
            En(n, (function(e, t){
              r.push(h), h+=c+p, i.push(Math.min(Math.max(p, l[
                t
              ]
              [
                0
              ]), l[
                t
              ]
              [
                1
              ]))
            }))
          }
          (e), En(t, (function(t, a){
            !function(e, t, a){
              var n=e.coordinateSystem, o=e.getData(), i=a/2, r="horizontal"===e.get("layout")?0:1, l=1-r, s=[
                "x", "y"
              ], u=o.mapDimension(s[
                r
              ]), d=o.mapDimensionsAll(s[
                l
              ]);
              if(null==u||d.length<5)return;
              for(var c=0;
              c<o.count();
              c++){
                var p=o.get(u, c), h=x(p, d[
                  2
                ], c), g=x(p, d[
                  0
                ], c), f=x(p, d[
                  1
                ], c), y=x(p, d[
                  3
                ], c), m=x(p, d[
                  4
                ], c), v=[
                ];
                S(v, f, !1), S(v, y, !0), v.push(g, f, m, y), _(v, g), _(v, m), _(v, h), o.setItemLayout(c, {
                  initBaseline:h[
                    l
                  ], ends:v
                })
              }
              function x(e, a, i){
                var s, u=o.get(a, i), d=[
                ];
                return d[
                  r
                ]
                =e, d[
                  l
                ]
                =u, isNaN(e)||isNaN(u)?s=[
                  NaN, NaN
                ]
                :(s=n.dataToPoint(d))[
                  r
                ]
                +=t, s
              }
              function S(e, t, a){
                var n=t.slice(), o=t.slice();
                n[
                  r
                ]
                +=i, o[
                  r
                ]
                -=i, a?e.push(n, o):e.push(o, n)
              }
              function _(e, t){
                var a=t.slice(), n=t.slice();
                a[
                  r
                ]
                -=i, n[
                  r
                ]
                +=i, e.push(a, n)
              }
            }
            (t, e.boxOffsetList[
              a
            ], e.boxWidthList[
              a
            ])
          })))
        }))
      }
      var Rn=a(641025), zn=a(313430), kn={
        type:"echarts:boxplot", transform:function(e){
          var t=e.upstream;
          if(t.sourceFormat!==zn.Km){
            0, (0, Rn.$8)("")
          }
          var a=function(e, t){
            for(var a=[
            ], n=[
            ], o=(t=t||{
            }).boundIQR, i="none"===o||0===o, r=0;
            r<e.length;
            r++){
              var l=(0, Se.Y6)(e[
                r
              ].slice()), s=(0, Se.YV)(l, .25), u=(0, Se.YV)(l, .5), d=(0, Se.YV)(l, .75), c=l[
                0
              ], p=l[
                l.length-1
              ], h=(null==o?1.5:o)*(d-s), g=i?c:Math.max(c, s-h), f=i?p:Math.min(p, d+h), y=t.itemNameFormatter, m=(0, L.isFunction)(y)?y({
                value:r
              }):(0, L.isString)(y)?y.replace("{value}", r+""):r+"";
              a.push([
                m, g, s, u, d, f
              ]);
              for(var v=0;
              v<l.length;
              v++){
                var x=l[
                  v
                ];
                if(x<g||x>f){
                  var S=[
                    m, x
                  ];
                  n.push(S)
                }
              }
            }
            return{
              boxData:a, outliers:n
            }
          }
          (t.getRawData(), e.config);
          return[
            {
              dimensions:[
                "ItemName", "Low", "Q1", "Q2", "Q3", "High"
              ], data:a.boxData
            }, {
              data:a.outliers
            }
          ]
        }
      };
      var Gn=a(195235), On=a(687582), Bn=[
        "itemStyle", "borderColor"
      ], Yn=[
        "itemStyle", "borderColor0"
      ], Fn=[
        "itemStyle", "borderColorDoji"
      ], Wn=[
        "itemStyle", "color"
      ], Hn=[
        "itemStyle", "color0"
      ];
      function Xn(e, t){
        return t.get(e>0?Wn:Hn)
      }
      function Un(e, t){
        return t.get(0===e?Fn:e>0?Bn:Yn)
      }
      const Zn={
        seriesType:"candlestick", plan:(0, On.A)(), performRawSeries:!0, reset:function(e, t){
          if(!t.isSeriesFiltered(e))return!e.pipelineContext.large&&{
            progress:function(e, t){
              for(var a;
              null!=(a=e.next());
              ){
                var n=t.getItemModel(a), o=t.getItemLayout(a).sign, i=n.getItemStyle();
                i.fill=Xn(o, n), i.stroke=Un(o, n)||i.fill;
                var r=t.ensureUniqueItemVisual(a, "style");
                (0, L.extend)(r, i)
              }
            }
          }
        }
      };
      var qn=[
        "color", "borderColor"
      ], jn=function(e){
        function t(){
          var a=null!==e&&e.apply(this, arguments)||this;
          return a.type=t.type, a
        }
        return(0, d.C6)(t, e), t.prototype.render=function(e, t, a){
          this.group.removeClipPath(), this._progressiveEls=null, this._updateDrawMode(e), this._isLargeDraw?this._renderLarge(e):this._renderNormal(e)
        }, t.prototype.incrementalPrepareRender=function(e, t, a){
          this._clear(), this._updateDrawMode(e)
        }, t.prototype.incrementalRender=function(e, t, a, n){
          this._progressiveEls=[
          ], this._isLargeDraw?this._incrementalRenderLarge(e, t):this._incrementalRenderNormal(e, t)
        }, t.prototype.eachRendered=function(e){
          E.traverseElements(this._progressiveEls||this.group, e)
        }, t.prototype._updateDrawMode=function(e){
          var t=e.pipelineContext.large;
          null!=this._isLargeDraw&&t===this._isLargeDraw||(this._isLargeDraw=t, this._clear())
        }, t.prototype._renderNormal=function(e){
          var t=e.getData(), a=this._data, n=this.group, o=t.getLayout("isSimpleBox"), i=e.get("clip", !0), r=e.coordinateSystem, l=r.getArea&&r.getArea();
          this._data||n.removeAll(), t.diff(a).add((function(a){
            if(t.hasValue(a)){
              var r=t.getItemLayout(a);
              if(i&&$n(l, r))return;
              var s=Kn(r, a, !0);
              z.LW(s, {
                shape:{
                  points:r.ends
                }
              }, e, a), eo(s, t, a, o), n.add(s), t.setItemGraphicEl(a, s)
            }
          })).update((function(r, s){
            var u=a.getItemGraphicEl(s);
            if(t.hasValue(r)){
              var d=t.getItemLayout(r);
              i&&$n(l, d)?n.remove(u):(u?(z.oi(u, {
                shape:{
                  points:d.ends
                }
              }, e, r), (0, z.ap)(u)):u=Kn(d, r), eo(u, t, r, o), n.add(u), t.setItemGraphicEl(r, u))
            }
            else n.remove(u)
          })).remove((function(e){
            var t=a.getItemGraphicEl(e);
            t&&n.remove(t)
          })).execute(), this._data=t
        }, t.prototype._renderLarge=function(e){
          this._clear(), oo(e, this.group);
          var t=e.get("clip", !0)?(0, Gn.Ip)(e.coordinateSystem, !1, e):null;
          t?this.group.setClipPath(t):this.group.removeClipPath()
        }, t.prototype._incrementalRenderNormal=function(e, t){
          for(var a, n=t.getData(), o=n.getLayout("isSimpleBox");
          null!=(a=e.next());
          ){
            var i=Kn(n.getItemLayout(a), a);
            eo(i, n, a, o), i.incremental=!0, this.group.add(i), this._progressiveEls.push(i)
          }
        }, t.prototype._incrementalRenderLarge=function(e, t){
          oo(t, this.group, this._progressiveEls, !0)
        }, t.prototype.remove=function(e){
          this._clear()
        }, t.prototype._clear=function(){
          this.group.removeAll(), this._data=null
        }, t.type="candlestick", t
      }
      (w.A), Qn=function(){
      }, Jn=function(e){
        function t(t){
          var a=e.call(this, t)||this;
          return a.type="normalCandlestickBox", a
        }
        return(0, d.C6)(t, e), t.prototype.getDefaultShape=function(){
          return new Qn
        }, t.prototype.buildPath=function(e, t){
          var a=t.points;
          this.__simpleBox?(e.moveTo(a[
            4
          ]
          [
            0
          ], a[
            4
          ]
          [
            1
          ]), e.lineTo(a[
            6
          ]
          [
            0
          ], a[
            6
          ]
          [
            1
          ])):(e.moveTo(a[
            0
          ]
          [
            0
          ], a[
            0
          ]
          [
            1
          ]), e.lineTo(a[
            1
          ]
          [
            0
          ], a[
            1
          ]
          [
            1
          ]), e.lineTo(a[
            2
          ]
          [
            0
          ], a[
            2
          ]
          [
            1
          ]), e.lineTo(a[
            3
          ]
          [
            0
          ], a[
            3
          ]
          [
            1
          ]), e.closePath(), e.moveTo(a[
            4
          ]
          [
            0
          ], a[
            4
          ]
          [
            1
          ]), e.lineTo(a[
            5
          ]
          [
            0
          ], a[
            5
          ]
          [
            1
          ]), e.moveTo(a[
            6
          ]
          [
            0
          ], a[
            6
          ]
          [
            1
          ]), e.lineTo(a[
            7
          ]
          [
            0
          ], a[
            7
          ]
          [
            1
          ]))
        }, t
      }
      (y.Ay);
      function Kn(e, t, a){
        var n=e.ends;
        return new Jn({
          shape:{
            points:a?to(n, e):n
          }, z2:100
        })
      }
      function $n(e, t){
        for(var a=!0, n=0;
        n<t.ends.length;
        n++)if(e.contain(t.ends[
          n
        ]
        [
          0
        ], t.ends[
          n
        ]
        [
          1
        ])){
          a=!1;
          break
        }
        return a
      }
      function eo(e, t, a, n){
        var o=t.getItemModel(a);
        e.useStyle(t.getItemVisual(a, "style")), e.style.strokeNoScale=!0, e.__simpleBox=n, (0, k.Mx)(e, o);
        var i=t.getItemLayout(a).sign;
        L.each(e.states, (function(e, t){
          var a=o.getModel(t), n=Xn(i, a), r=Un(i, a)||n, l=e.style||(e.style={
          });
          n&&(l.fill=n), r&&(l.stroke=r)
        }));
        var r=o.getModel("emphasis");
        (0, k.Lm)(e, r.get("focus"), r.get("blurScope"), r.get("disabled"))
      }
      function to(e, t){
        return L.map(e, (function(e){
          return(e=e.slice())[
            1
          ]
          =t.initBaseline, e
        }))
      }
      var ao=function(){
      }, no=function(e){
        function t(t){
          var a=e.call(this, t)||this;
          return a.type="largeCandlestickBox", a
        }
        return(0, d.C6)(t, e), t.prototype.getDefaultShape=function(){
          return new ao
        }, t.prototype.buildPath=function(e, t){
          for(var a=t.points, n=0;
          n<a.length;
          )if(this.__sign===a[
            n++
          ]){
            var o=a[
              n++
            ];
            e.moveTo(o, a[
              n++
            ]), e.lineTo(o, a[
              n++
            ])
          }
          else n+=3
        }, t
      }
      (y.Ay);
      function oo(e, t, a, n){
        var o=e.getData(), i=o.getLayout("largePoints"), r=new no({
          shape:{
            points:i
          }, __sign:1, ignoreCoarsePointer:!0
        });
        t.add(r);
        var l=new no({
          shape:{
            points:i
          }, __sign:-1, ignoreCoarsePointer:!0
        });
        t.add(l);
        var s=new no({
          shape:{
            points:i
          }, __sign:0, ignoreCoarsePointer:!0
        });
        t.add(s), io(1, r, e, o), io(-1, l, e, o), io(0, s, e, o), n&&(r.incremental=!0, l.incremental=!0), a&&a.push(r, l)
      }
      function io(e, t, a, n){
        var o=Un(e, a)||Xn(e, a), i=a.getModel("itemStyle").getItemStyle(qn);
        t.useStyle(i), t.style.fill=null, t.style.stroke=o
      }
      const ro=jn;
      var lo=function(e){
        function t(){
          var a=null!==e&&e.apply(this, arguments)||this;
          return a.type=t.type, a.defaultValueDimensions=[
            {
              name:"open", defaultTooltip:!0
            }, {
              name:"close", defaultTooltip:!0
            }, {
              name:"lowest", defaultTooltip:!0
            }, {
              name:"highest", defaultTooltip:!0
            }
          ], a
        }
        return(0, d.C6)(t, e), t.prototype.getShadowDim=function(){
          return"open"
        }, t.prototype.brushSelector=function(e, t, a){
          var n=t.getItemLayout(e);
          return n&&a.rect(n.brushRect)
        }, t.type="series.candlestick", t.dependencies=[
          "xAxis", "yAxis", "grid"
        ], t.defaultOption={
          z:2, coordinateSystem:"cartesian2d", legendHoverLink:!0, layout:null, clip:!0, itemStyle:{
            color:"#eb5454", color0:"#47b262", borderColor:"#eb5454", borderColor0:"#47b262", borderColorDoji:null, borderWidth:1
          }, emphasis:{
            itemStyle:{
              borderWidth:2
            }
          }, barMaxWidth:null, barMinWidth:null, barWidth:null, large:!0, largeThreshold:600, progressive:3e3, progressiveThreshold:1e4, progressiveChunkMode:"mod", animationEasing:"linear", animationDuration:300
        }, t
      }
      (p.A);
      (0, L.mixin)(lo, In, !0);
      const so=lo;
      function uo(e){
        e&&L.isArray(e.series)&&L.each(e.series, (function(e){
          L.isObject(e)&&"k"===e.type&&(e.type="candlestick")
        }))
      }
      var co=a(108957);
      function po(e, t, a, n, o, i){
        return a>n?-1:a<n?1:i?0:t>0?e.get(o, t-1)<=n?1:-1:1
      }
      const ho={
        seriesType:"candlestick", plan:(0, On.A)(), reset:function(e){
          var t=e.coordinateSystem, a=e.getData(), n=function(e, t){
            var a, n=e.getBaseAxis(), o="category"===n.type?n.getBandWidth():(a=n.getExtent(), Math.abs(a[
              1
            ]
            -a[
              0
            ])/t.count()), i=(0, Se.lo)((0, L.retrieve2)(e.get("barMaxWidth"), o), o), r=(0, Se.lo)((0, L.retrieve2)(e.get("barMinWidth"), 1), o), l=e.get("barWidth");
            return null!=l?(0, Se.lo)(l, o):Math.max(Math.min(o/2, i), r)
          }
          (e, a), o=[
            "x", "y"
          ], i=a.getDimensionIndex(a.mapDimension(o[
            0
          ])), r=(0, L.map)(a.mapDimensionsAll(o[
            1
          ]), a.getDimensionIndex, a), l=r[
            0
          ], s=r[
            1
          ], u=r[
            2
          ], d=r[
            3
          ];
          if(a.setLayout({
            candleWidth:n, isSimpleBox:n<=1.3
          }), !(i<0||r.length<4))return{
            progress:e.pipelineContext.large?function(a, n){
              var o, r, c=(0, co.J)(4*a.count), p=0, h=[
              ], g=[
              ], f=n.getStore(), y=!!e.get([
                "itemStyle", "borderColorDoji"
              ]);
              for(;
              null!=(r=a.next());
              ){
                var m=f.get(i, r), v=f.get(l, r), x=f.get(s, r), S=f.get(u, r), _=f.get(d, r);
                isNaN(m)||isNaN(S)||isNaN(_)?(c[
                  p++
                ]
                =NaN, p+=3):(c[
                  p++
                ]
                =po(f, r, v, x, s, y), h[
                  0
                ]
                =m, h[
                  1
                ]
                =S, o=t.dataToPoint(h, null, g), c[
                  p++
                ]
                =o?o[
                  0
                ]
                :NaN, c[
                  p++
                ]
                =o?o[
                  1
                ]
                :NaN, h[
                  1
                ]
                =_, o=t.dataToPoint(h, null, g), c[
                  p++
                ]
                =o?o[
                  1
                ]
                :NaN)
              }
              n.setLayout("largePoints", c)
            }
            :function(e, a){
              var o, r=a.getStore();
              for(;
              null!=(o=e.next());
              ){
                var c=r.get(i, o), p=r.get(l, o), h=r.get(s, o), g=r.get(u, o), f=r.get(d, o), y=Math.min(p, h), m=Math.max(p, h), v=w(y, c), x=w(m, c), S=w(g, c), _=w(f, c), b=[
                ];
                A(b, x, 0), A(b, v, 1), b.push(L(_), L(x), L(S), L(v));
                var I=!!a.getItemModel(o).get([
                  "itemStyle", "borderColorDoji"
                ]);
                a.setItemLayout(o, {
                  sign:po(r, o, p, h, s, I), initBaseline:p>h?x[
                    1
                  ]
                  :v[
                    1
                  ], ends:b, brushRect:M(g, f, c)
                })
              }
              function w(e, a){
                var n=[
                ];
                return n[
                  0
                ]
                =a, n[
                  1
                ]
                =e, isNaN(a)||isNaN(e)?[
                  NaN, NaN
                ]
                :t.dataToPoint(n)
              }
              function A(e, t, a){
                var o=t.slice(), i=t.slice();
                o[
                  0
                ]
                =(0, E.subPixelOptimize)(o[
                  0
                ]
                +n/2, 1, !1), i[
                  0
                ]
                =(0, E.subPixelOptimize)(i[
                  0
                ]
                -n/2, 1, !0), a?e.push(o, i):e.push(i, o)
              }
              function M(e, t, a){
                var o=w(e, a), i=w(t, a);
                return o[
                  0
                ]
                -=n/2, i[
                  0
                ]
                -=n/2, {
                  x:o[
                    0
                  ], y:o[
                    1
                  ], width:n, height:i[
                    1
                  ]
                  -o[
                    1
                  ]
                }
              }
              function L(e){
                return e[
                  0
                ]
                =(0, E.subPixelOptimize)(e[
                  0
                ], 1), e
              }
            }
          }
        }
      };
      function go(e, t){
        var a=t.rippleEffectColor||t.color;
        e.eachChild((function(e){
          e.attr({
            z:t.z, zlevel:t.zlevel, style:{
              stroke:"stroke"===t.brushType?a:null, fill:"fill"===t.brushType?a:null
            }
          })
        }))
      }
      const fo=function(e){
        function t(t, a){
          var n=e.call(this)||this, o=new ne.A(t, a), i=new m.A;
          return n.add(o), n.add(i), n.updateData(t, a), n
        }
        return(0, d.C6)(t, e), t.prototype.stopEffectAnimation=function(){
          this.childAt(1).removeAll()
        }, t.prototype.startEffectAnimation=function(e){
          for(var t=e.symbolType, a=e.color, n=e.rippleNumber, o=this.childAt(1), i=0;
          i<n;
          i++){
            var r=(0, v.v5)(t, -1, -1, 2, 2, a);
            r.attr({
              style:{
                strokeNoScale:!0
              }, z2:99, silent:!0, scaleX:.5, scaleY:.5
            });
            var l=-i/n*e.period+e.effectOffset;
            r.animate("", !0).when(e.period, {
              scaleX:e.rippleScale/2, scaleY:e.rippleScale/2
            }).delay(l).start(), r.animateStyle(!0).when(e.period, {
              opacity:0
            }).delay(l).start(), o.add(r)
          }
          go(o, e)
        }, t.prototype.updateEffectAnimation=function(e){
          for(var t=this._effectCfg, a=this.childAt(1), n=[
            "symbolType", "period", "rippleScale", "rippleNumber"
          ], o=0;
          o<n.length;
          o++){
            var i=n[
              o
            ];
            if(t[
              i
            ]
            !==e[
              i
            ])return this.stopEffectAnimation(), void this.startEffectAnimation(e)
          }
          go(a, e)
        }, t.prototype.highlight=function(){
          (0, k.HY)(this)
        }, t.prototype.downplay=function(){
          (0, k.SD)(this)
        }, t.prototype.getSymbolType=function(){
          var e=this.childAt(0);
          return e&&e.getSymbolType()
        }, t.prototype.updateData=function(e, t){
          var a=this, n=e.hostModel;
          this.childAt(0).updateData(e, t);
          var o=this.childAt(1), i=e.getItemModel(t), r=e.getItemVisual(t, "symbol"), l=(0, v.xU)(e.getItemVisual(t, "symbolSize")), s=e.getItemVisual(t, "style"), u=s&&s.fill, d=i.getModel("emphasis");
          o.setScale(l), o.traverse((function(e){
            e.setStyle("fill", u)
          }));
          var c=(0, v.hV)(e.getItemVisual(t, "symbolOffset"), l);
          c&&(o.x=c[
            0
          ], o.y=c[
            1
          ]);
          var p=e.getItemVisual(t, "symbolRotate");
          o.rotation=(p||0)*Math.PI/180||0;
          var h={
          };
          h.showEffectOn=n.get("showEffectOn"), h.rippleScale=i.get([
            "rippleEffect", "scale"
          ]), h.brushType=i.get([
            "rippleEffect", "brushType"
          ]), h.period=1e3*i.get([
            "rippleEffect", "period"
          ]), h.effectOffset=t/e.count(), h.z=n.getShallow("z")||0, h.zlevel=n.getShallow("zlevel")||0, h.symbolType=r, h.color=u, h.rippleEffectColor=i.get([
            "rippleEffect", "color"
          ]), h.rippleNumber=i.get([
            "rippleEffect", "number"
          ]), "render"===h.showEffectOn?(this._effectCfg?this.updateEffectAnimation(h):this.startEffectAnimation(h), this._effectCfg=h):(this._effectCfg=null, this.stopEffectAnimation(), this.onHoverStateChange=function(e){
            "emphasis"===e?"render"!==h.showEffectOn&&a.startEffectAnimation(h):"normal"===e&&"render"!==h.showEffectOn&&a.stopEffectAnimation()
          }), this._effectCfg=h, (0, k.Lm)(this, d.get("focus"), d.get("blurScope"), d.get("disabled"))
        }, t.prototype.fadeOut=function(e){
          e&&e()
        }, t
      }
      (m.A);
      const yo=function(e){
        function t(){
          var a=null!==e&&e.apply(this, arguments)||this;
          return a.type=t.type, a
        }
        return(0, d.C6)(t, e), t.prototype.init=function(){
          this._symbolDraw=new g.A(fo)
        }, t.prototype.render=function(e, t, a){
          var n=e.getData(), o=this._symbolDraw;
          o.updateData(n, {
            clipShape:this._getClipShape(e)
          }), this.group.add(o.group)
        }, t.prototype._getClipShape=function(e){
          var t=e.coordinateSystem, a=t&&t.getArea&&t.getArea();
          return e.get("clip", !0)?a:null
        }, t.prototype.updateTransform=function(e, t, a){
          var n=e.getData();
          this.group.dirty();
          var o=(0, I.A)("").reset(e, t, a);
          o.progress&&o.progress({
            start:0, end:n.count(), count:n.count()
          }, n), this._symbolDraw.updateLayout()
        }, t.prototype._updateGroupTransform=function(e){
          var t=e.coordinateSystem;
          t&&t.getRoamTransform&&(this.group.transform=$e.clone(t.getRoamTransform()), this.group.decomposeTransform())
        }, t.prototype.remove=function(e, t){
          this._symbolDraw&&this._symbolDraw.remove(!0)
        }, t.type="effectScatter", t
      }
      (w.A);
      const mo=function(e){
        function t(){
          var a=null!==e&&e.apply(this, arguments)||this;
          return a.type=t.type, a.hasSymbolVisual=!0, a
        }
        return(0, d.C6)(t, e), t.prototype.getInitialData=function(e, t){
          return(0, c.A)(null, this, {
            useEncodeDefaulter:!0
          })
        }, t.prototype.brushSelector=function(e, t, a){
          return a.point(t.getItemLayout(e))
        }, t.type="series.effectScatter", t.dependencies=[
          "grid", "polar"
        ], t.defaultOption={
          coordinateSystem:"cartesian2d", z:2, legendHoverLink:!0, effectType:"ripple", progressive:0, showEffectOn:"render", clip:!0, rippleEffect:{
            period:4, scale:2.5, brushType:"fill", number:3
          }, universalTransition:{
            divideShape:"clone"
          }, symbolSize:10
        }, t
      }
      (p.A);
      var vo=a(532182);
      const xo=function(e){
        function t(t, a, n){
          var o=e.call(this)||this;
          return o.add(o.createLine(t, a, n)), o._updateEffectSymbol(t, a), o
        }
        return(0, d.C6)(t, e), t.prototype.createLine=function(e, t, a){
          return new vo.A(e, t, a)
        }, t.prototype._updateEffectSymbol=function(e, t){
          var a=e.getItemModel(t).getModel("effect"), n=a.get("symbolSize"), o=a.get("symbol");
          L.isArray(n)||(n=[
            n, n
          ]);
          var i=e.getItemVisual(t, "style"), r=a.get("color")||i&&i.stroke, l=this.childAt(1);
          this._symbolType!==o&&(this.remove(l), (l=(0, v.v5)(o, -.5, -.5, 1, 1, r)).z2=100, l.culling=!0, this.add(l)), l&&(l.setStyle("shadowColor", r), l.setStyle(a.getItemStyle([
            "color"
          ])), l.scaleX=n[
            0
          ], l.scaleY=n[
            1
          ], l.setColor(r), this._symbolType=o, this._symbolScale=n, this._updateEffectAnimation(e, a, t))
        }, t.prototype._updateEffectAnimation=function(e, t, a){
          var n=this.childAt(1);
          if(n){
            var o=e.getItemLayout(a), i=1e3*t.get("period"), r=t.get("loop"), l=t.get("roundTrip"), s=t.get("constantSpeed"), u=L.retrieve(t.get("delay"), (function(t){
              return t/e.count()*i/3
            }));
            if(n.ignore=!0, this._updateAnimationPoints(n, o), s>0&&(i=this._getLineLength(n)/s*1e3), i!==this._period||r!==this._loop||l!==this._roundTrip){
              n.stopAnimation();
              var d=void 0;
              d=L.isFunction(u)?u(a):u, n.__t>0&&(d=-i*n.__t), this._animateSymbol(n, i, d, r, l)
            }
            this._period=i, this._loop=r, this._roundTrip=l
          }
        }, t.prototype._animateSymbol=function(e, t, a, n, o){
          if(t>0){
            e.__t=0;
            var i=this, r=e.animate("", n).when(o?2*t:t, {
              __t:o?2:1
            }).delay(a).during((function(){
              i._updateSymbolPosition(e)
            }));
            n||r.done((function(){
              i.remove(e)
            })), r.start()
          }
        }, t.prototype._getLineLength=function(e){
          return Yt.dist(e.__p1, e.__cp1)+Yt.dist(e.__cp1, e.__p2)
        }, t.prototype._updateAnimationPoints=function(e, t){
          e.__p1=t[
            0
          ], e.__p2=t[
            1
          ], e.__cp1=t[
            2
          ]
          ||[
            (t[
              0
            ]
            [
              0
            ]
            +t[
              1
            ]
            [
              0
            ])/2, (t[
              0
            ]
            [
              1
            ]
            +t[
              1
            ]
            [
              1
            ])/2
          ]
        }, t.prototype.updateData=function(e, t, a){
          this.childAt(0).updateData(e, t, a), this._updateEffectSymbol(e, t)
        }, t.prototype._updateSymbolPosition=function(e){
          var t=e.__p1, a=e.__p2, n=e.__cp1, o=e.__t<1?e.__t:2-e.__t, i=[
            e.x, e.y
          ], r=i.slice(), l=da.k3, s=da.z7;
          i[
            0
          ]
          =l(t[
            0
          ], n[
            0
          ], a[
            0
          ], o), i[
            1
          ]
          =l(t[
            1
          ], n[
            1
          ], a[
            1
          ], o);
          var u=e.__t<1?s(t[
            0
          ], n[
            0
          ], a[
            0
          ], o):s(a[
            0
          ], n[
            0
          ], t[
            0
          ], 1-o), d=e.__t<1?s(t[
            1
          ], n[
            1
          ], a[
            1
          ], o):s(a[
            1
          ], n[
            1
          ], t[
            1
          ], 1-o);
          e.rotation=-Math.atan2(d, u)-Math.PI/2, "line"!==this._symbolType&&"rect"!==this._symbolType&&"roundRect"!==this._symbolType||(void 0!==e.__lastT&&e.__lastT<e.__t?(e.scaleY=1.05*Yt.dist(r, i), 1===o&&(i[
            0
          ]
          =r[
            0
          ]
          +(i[
            0
          ]
          -r[
            0
          ])/2, i[
            1
          ]
          =r[
            1
          ]
          +(i[
            1
          ]
          -r[
            1
          ])/2)):1===e.__lastT?e.scaleY=2*Yt.dist(t, i):e.scaleY=this._symbolScale[
            1
          ]), e.__lastT=e.__t, e.ignore=!1, e.x=i[
            0
          ], e.y=i[
            1
          ]
        }, t.prototype.updateLayout=function(e, t){
          this.childAt(0).updateLayout(e, t);
          var a=e.getItemModel(t).getModel("effect");
          this._updateEffectAnimation(e, a, t)
        }, t
      }
      (m.A);
      const So=function(e){
        function t(t, a, n){
          var o=e.call(this)||this;
          return o._createPolyline(t, a, n), o
        }
        return(0, d.C6)(t, e), t.prototype._createPolyline=function(e, t, a){
          var n=e.getItemLayout(t), o=new R.A({
            shape:{
              points:n
            }
          });
          this.add(o), this._updateCommonStl(e, t, a)
        }, t.prototype.updateData=function(e, t, a){
          var n=e.hostModel, o=this.childAt(0), i={
            shape:{
              points:e.getItemLayout(t)
            }
          };
          z.oi(o, i, n, t), this._updateCommonStl(e, t, a)
        }, t.prototype._updateCommonStl=function(e, t, a){
          var n=this.childAt(0), o=e.getItemModel(t), i=a&&a.emphasisLineStyle, r=a&&a.focus, l=a&&a.blurScope, s=a&&a.emphasisDisabled;
          if(!a||e.hasItemOption){
            var u=o.getModel("emphasis");
            i=u.getModel("lineStyle").getLineStyle(), s=u.get("disabled"), r=u.get("focus"), l=u.get("blurScope")
          }
          n.useStyle(e.getItemVisual(t, "style")), n.style.fill=null, n.style.strokeNoScale=!0, n.ensureState("emphasis").style=i, (0, k.Lm)(this, r, l, s)
        }, t.prototype.updateLayout=function(e, t){
          this.childAt(0).setShape("points", e.getItemLayout(t))
        }, t
      }
      (m.A);
      const _o=function(e){
        function t(){
          var t=null!==e&&e.apply(this, arguments)||this;
          return t._lastFrame=0, t._lastFramePercent=0, t
        }
        return(0, d.C6)(t, e), t.prototype.createLine=function(e, t, a){
          return new So(e, t, a)
        }, t.prototype._updateAnimationPoints=function(e, t){
          this._points=t;
          for(var a=[
            0
          ], n=0, o=1;
          o<t.length;
          o++){
            var i=t[
              o-1
            ], r=t[
              o
            ];
            n+=Yt.dist(i, r), a.push(n)
          }
          if(0!==n){
            for(o=0;
            o<a.length;
            o++)a[
              o
            ]
            /=n;
            this._offsets=a, this._length=n
          }
          else this._length=0
        }, t.prototype._getLineLength=function(){
          return this._length
        }, t.prototype._updateSymbolPosition=function(e){
          var t=e.__t<1?e.__t:2-e.__t, a=this._points, n=this._offsets, o=a.length;
          if(n){
            var i, r=this._lastFrame;
            if(t<this._lastFramePercent){
              for(i=Math.min(r+1, o-1);
              i>=0&&!(n[
                i
              ]
              <=t);
              i--);
              i=Math.min(i, o-2)
            }
            else{
              for(i=r;
              i<o&&!(n[
                i
              ]
              >t);
              i++);
              i=Math.min(i-1, o-2)
            }
            var l=(t-n[
              i
            ])/(n[
              i+1
            ]
            -n[
              i
            ]), s=a[
              i
            ], u=a[
              i+1
            ];
            e.x=s[
              0
            ]
            *(1-l)+l*u[
              0
            ], e.y=s[
              1
            ]
            *(1-l)+l*u[
              1
            ];
            var d=e.__t<1?u[
              0
            ]
            -s[
              0
            ]
            :s[
              0
            ]
            -u[
              0
            ], c=e.__t<1?u[
              1
            ]
            -s[
              1
            ]
            :s[
              1
            ]
            -u[
              1
            ];
            e.rotation=-Math.atan2(c, d)-Math.PI/2, this._lastFrame=i, this._lastFramePercent=t, e.ignore=!1
          }
        }, t
      }
      (xo);
      var bo=a(957043), Io=a(714423), wo=function(){
        this.polyline=!1, this.curveness=0, this.segs=[
        ]
      }, Ao=function(e){
        function t(t){
          var a=e.call(this, t)||this;
          return a._off=0, a.hoverDataIdx=-1, a
        }
        return(0, d.C6)(t, e), t.prototype.reset=function(){
          this.notClear=!1, this._off=0
        }, t.prototype.getDefaultStyle=function(){
          return{
            stroke:"#000", fill:null
          }
        }, t.prototype.getDefaultShape=function(){
          return new wo
        }, t.prototype.buildPath=function(e, t){
          var a, n=t.segs, o=t.curveness;
          if(t.polyline)for(a=this._off;
          a<n.length;
          ){
            var i=n[
              a++
            ];
            if(i>0){
              e.moveTo(n[
                a++
              ], n[
                a++
              ]);
              for(var r=1;
              r<i;
              r++)e.lineTo(n[
                a++
              ], n[
                a++
              ])
            }
          }
          else for(a=this._off;
          a<n.length;
          ){
            var l=n[
              a++
            ], s=n[
              a++
            ], u=n[
              a++
            ], d=n[
              a++
            ];
            if(e.moveTo(l, s), o>0){
              var c=(l+u)/2-(s-d)*o, p=(s+d)/2-(u-l)*o;
              e.quadraticCurveTo(c, p, u, d)
            }
            else e.lineTo(u, d)
          }
          this.incremental&&(this._off=a, this.notClear=!0)
        }, t.prototype.findDataIndex=function(e, t){
          var a=this.shape, n=a.segs, o=a.curveness, i=this.style.lineWidth;
          if(a.polyline)for(var r=0, l=0;
          l<n.length;
          ){
            var s=n[
              l++
            ];
            if(s>0)for(var u=n[
              l++
            ], d=n[
              l++
            ], c=1;
            c<s;
            c++){
              var p=n[
                l++
              ], h=n[
                l++
              ];
              if(bo.l(u, d, p, h, i, e, t))return r
            }
            r++
          }
          else for(r=0, l=0;
          l<n.length;
          ){
            u=n[
              l++
            ], d=n[
              l++
            ], p=n[
              l++
            ], h=n[
              l++
            ];
            if(o>0){
              var g=(u+p)/2-(d-h)*o, f=(d+h)/2-(p-u)*o;
              if(Io.l(u, d, g, f, p, h, i, e, t))return r
            }
            else if(bo.l(u, d, p, h, i, e, t))return r;
            r++
          }
          return-1
        }, t.prototype.contain=function(e, t){
          var a=this.transformCoordToLocal(e, t), n=this.getBoundingRect();
          return e=a[
            0
          ], t=a[
            1
          ], n.contain(e, t)?(this.hoverDataIdx=this.findDataIndex(e, t))>=0:(this.hoverDataIdx=-1, !1)
        }, t.prototype.getBoundingRect=function(){
          var e=this._rect;
          if(!e){
            for(var t=this.shape.segs, a=1/0, n=1/0, o=-1/0, i=-1/0, r=0;
            r<t.length;
            ){
              var l=t[
                r++
              ], s=t[
                r++
              ];
              a=Math.min(l, a), o=Math.max(l, o), n=Math.min(s, n), i=Math.max(s, i)
            }
            e=this._rect=new f.A(a, n, o, i)
          }
          return e
        }, t
      }
      (y.Ay);
      const Mo=function(){
        function e(){
          this.group=new m.A
        }
        return e.prototype.updateData=function(e){
          this._clear();
          var t=this._create();
          t.setShape({
            segs:e.getLayout("linesPoints")
          }), this._setCommon(t, e)
        }, e.prototype.incrementalPrepareUpdate=function(e){
          this.group.removeAll(), this._clear()
        }, e.prototype.incrementalUpdate=function(e, t){
          var a=this._newAdded[
            0
          ], n=t.getLayout("linesPoints"), o=a&&a.shape.segs;
          if(o&&o.length<2e4){
            var i=o.length, r=new Float32Array(i+n.length);
            r.set(o), r.set(n, i), a.setShape({
              segs:r
            })
          }
          else{
            this._newAdded=[
            ];
            var l=this._create();
            l.incremental=!0, l.setShape({
              segs:n
            }), this._setCommon(l, t), l.__startIndex=e.start
          }
        }, e.prototype.remove=function(){
          this._clear()
        }, e.prototype.eachRendered=function(e){
          this._newAdded[
            0
          ]
          &&e(this._newAdded[
            0
          ])
        }, e.prototype._create=function(){
          var e=new Ao({
            cursor:"default", ignoreCoarsePointer:!0
          });
          return this._newAdded.push(e), this.group.add(e), e
        }, e.prototype._setCommon=function(e, t, a){
          var n=t.hostModel;
          e.setShape({
            polyline:n.get("polyline"), curveness:n.get([
              "lineStyle", "curveness"
            ])
          }), e.useStyle(n.getModel("lineStyle").getLineStyle()), e.style.strokeNoScale=!0;
          var o=t.getVisual("style");
          o&&o.stroke&&e.setStyle("stroke", o.stroke), e.setStyle("fill", null);
          var i=(0, x.z)(e);
          i.seriesIndex=n.seriesIndex, e.on("mousemove", (function(t){
            i.dataIndex=null;
            var a=e.hoverDataIdx;
            a>0&&(i.dataIndex=a+e.__startIndex)
          }))
        }, e.prototype._clear=function(){
          this._newAdded=[
          ], this.group.removeAll()
        }, e
      }
      ();
      const Lo={
        seriesType:"lines", plan:(0, On.A)(), reset:function(e){
          var t=e.coordinateSystem;
          if(t){
            var a=e.get("polyline"), n=e.pipelineContext.large;
            return{
              progress:function(o, i){
                var r=[
                ];
                if(n){
                  var l=void 0, s=o.end-o.start;
                  if(a){
                    for(var u=0, d=o.start;
                    d<o.end;
                    d++)u+=e.getLineCoordsCount(d);
                    l=new Float32Array(s+2*u)
                  }
                  else l=new Float32Array(4*s);
                  var c=0, p=[
                  ];
                  for(d=o.start;
                  d<o.end;
                  d++){
                    var h=e.getLineCoords(d, r);
                    a&&(l[
                      c++
                    ]
                    =h);
                    for(var g=0;
                    g<h;
                    g++)p=t.dataToPoint(r[
                      g
                    ], !1, p), l[
                      c++
                    ]
                    =p[
                      0
                    ], l[
                      c++
                    ]
                    =p[
                      1
                    ]
                  }
                  i.setLayout("linesPoints", l)
                }
                else for(d=o.start;
                d<o.end;
                d++){
                  var f=i.getItemModel(d), y=(h=e.getLineCoords(d, r), [
                  ]);
                  if(a)for(var m=0;
                  m<h;
                  m++)y.push(t.dataToPoint(r[
                    m
                  ]));
                  else{
                    y[
                      0
                    ]
                    =t.dataToPoint(r[
                      0
                    ]), y[
                      1
                    ]
                    =t.dataToPoint(r[
                      1
                    ]);
                    var v=f.get([
                      "lineStyle", "curveness"
                    ]);
                    +v&&(y[
                      2
                    ]
                    =[
                      (y[
                        0
                      ]
                      [
                        0
                      ]
                      +y[
                        1
                      ]
                      [
                        0
                      ])/2-(y[
                        0
                      ]
                      [
                        1
                      ]
                      -y[
                        1
                      ]
                      [
                        1
                      ])*v, (y[
                        0
                      ]
                      [
                        1
                      ]
                      +y[
                        1
                      ]
                      [
                        1
                      ])/2-(y[
                        1
                      ]
                      [
                        0
                      ]
                      -y[
                        0
                      ]
                      [
                        0
                      ])*v
                    ])
                  }
                  i.setItemLayout(d, y)
                }
              }
            }
          }
        }
      };
      const Do=function(e){
        function t(){
          var a=null!==e&&e.apply(this, arguments)||this;
          return a.type=t.type, a
        }
        return(0, d.C6)(t, e), t.prototype.render=function(e, t, a){
          var n=e.getData(), o=this._updateLineDraw(n, e), i=e.get("zlevel"), r=e.get([
            "effect", "trailLength"
          ]), l=a.getZr(), s="svg"===l.painter.getType();
          s||l.painter.getLayer(i).clear(!0), null==this._lastZlevel||s||l.configLayer(this._lastZlevel, {
            motionBlur:!1
          }), this._showEffect(e)&&r>0&&(s||l.configLayer(i, {
            motionBlur:!0, lastFrameAlpha:Math.max(Math.min(r/10+.9, 1), 0)
          })), o.updateData(n);
          var u=e.get("clip", !0)&&(0, Gn.Ip)(e.coordinateSystem, !1, e);
          u?this.group.setClipPath(u):this.group.removeClipPath(), this._lastZlevel=i, this._finished=!0
        }, t.prototype.incrementalPrepareRender=function(e, t, a){
          var n=e.getData();
          this._updateLineDraw(n, e).incrementalPrepareUpdate(n), this._clearLayer(a), this._finished=!1
        }, t.prototype.incrementalRender=function(e, t, a){
          this._lineDraw.incrementalUpdate(e, t.getData()), this._finished=e.end===t.getData().count()
        }, t.prototype.eachRendered=function(e){
          this._lineDraw&&this._lineDraw.eachRendered(e)
        }, t.prototype.updateTransform=function(e, t, a){
          var n=e.getData(), o=e.pipelineContext;
          if(!this._finished||o.large||o.progressiveRender)return{
            update:!0
          };
          var i=Lo.reset(e, t, a);
          i.progress&&i.progress({
            start:0, end:n.count(), count:n.count()
          }, n), this._lineDraw.updateLayout(), this._clearLayer(a)
        }, t.prototype._updateLineDraw=function(e, t){
          var a=this._lineDraw, n=this._showEffect(t), o=!!t.get("polyline"), i=t.pipelineContext.large;
          return a&&n===this._hasEffet&&o===this._isPolyline&&i===this._isLargeDraw||(a&&a.remove(), a=this._lineDraw=i?new Mo:new ua.A(o?n?_o:So:n?xo:vo.A), this._hasEffet=n, this._isPolyline=o, this._isLargeDraw=i), this.group.add(a.group), a
        }, t.prototype._showEffect=function(e){
          return!!e.get([
            "effect", "show"
          ])
        }, t.prototype._clearLayer=function(e){
          var t=e.getZr();
          "svg"===t.painter.getType()||null==this._lastZlevel||t.painter.getLayer(this._lastZlevel).clear(!0)
        }, t.prototype.remove=function(e, t){
          this._lineDraw&&this._lineDraw.remove(), this._lineDraw=null, this._clearLayer(t)
        }, t.prototype.dispose=function(e, t){
          this.remove(e, t)
        }, t.type="lines", t
      }
      (w.A);
      var Co="undefined"==typeof Uint32Array?Array:Uint32Array, No="undefined"==typeof Float64Array?Array:Float64Array;
      function To(e){
        var t=e.data;
        t&&t[
          0
        ]
        &&t[
          0
        ]
        [
          0
        ]
        &&t[
          0
        ]
        [
          0
        ].coord&&(e.data=(0, L.map)(t, (function(e){
          var t={
            coords:[
              e[
                0
              ].coord, e[
                1
              ].coord
            ]
          };
          return e[
            0
          ].name&&(t.fromName=e[
            0
          ].name), e[
            1
          ].name&&(t.toName=e[
            1
          ].name), (0, L.mergeAll)([
            t, e[
              0
            ], e[
              1
            ]
          ])
        })))
      }
      const Po=function(e){
        function t(){
          var a=null!==e&&e.apply(this, arguments)||this;
          return a.type=t.type, a.visualStyleAccessPath="lineStyle", a.visualDrawType="stroke", a
        }
        return(0, d.C6)(t, e), t.prototype.init=function(t){
          t.data=t.data||[
          ], To(t);
          var a=this._processFlatCoordsArray(t.data);
          this._flatCoords=a.flatCoords, this._flatCoordsOffset=a.flatCoordsOffset, a.flatCoords&&(t.data=new Float32Array(a.count)), e.prototype.init.apply(this, arguments)
        }, t.prototype.mergeOption=function(t){
          if(To(t), t.data){
            var a=this._processFlatCoordsArray(t.data);
            this._flatCoords=a.flatCoords, this._flatCoordsOffset=a.flatCoordsOffset, a.flatCoords&&(t.data=new Float32Array(a.count))
          }
          e.prototype.mergeOption.apply(this, arguments)
        }, t.prototype.appendData=function(e){
          var t=this._processFlatCoordsArray(e.data);
          t.flatCoords&&(this._flatCoords?(this._flatCoords=(0, L.concatArray)(this._flatCoords, t.flatCoords), this._flatCoordsOffset=(0, L.concatArray)(this._flatCoordsOffset, t.flatCoordsOffset)):(this._flatCoords=t.flatCoords, this._flatCoordsOffset=t.flatCoordsOffset), e.data=new Float32Array(t.count)), this.getRawData().appendData(e.data)
        }, t.prototype._getCoordsFromItemModel=function(e){
          var t=this.getData().getItemModel(e);
          return t.option instanceof Array?t.option:t.getShallow("coords")
        }, t.prototype.getLineCoordsCount=function(e){
          return this._flatCoordsOffset?this._flatCoordsOffset[
            2*e+1
          ]
          :this._getCoordsFromItemModel(e).length
        }, t.prototype.getLineCoords=function(e, t){
          if(this._flatCoordsOffset){
            for(var a=this._flatCoordsOffset[
              2*e
            ], n=this._flatCoordsOffset[
              2*e+1
            ], o=0;
            o<n;
            o++)t[
              o
            ]
            =t[
              o
            ]
            ||[
            ], t[
              o
            ]
            [
              0
            ]
            =this._flatCoords[
              a+2*o
            ], t[
              o
            ]
            [
              1
            ]
            =this._flatCoords[
              a+2*o+1
            ];
            return n
          }
          var i=this._getCoordsFromItemModel(e);
          for(o=0;
          o<i.length;
          o++)t[
            o
          ]
          =t[
            o
          ]
          ||[
          ], t[
            o
          ]
          [
            0
          ]
          =i[
            o
          ]
          [
            0
          ], t[
            o
          ]
          [
            1
          ]
          =i[
            o
          ]
          [
            1
          ];
          return i.length
        }, t.prototype._processFlatCoordsArray=function(e){
          var t=0;
          if(this._flatCoords&&(t=this._flatCoords.length), (0, L.isNumber)(e[
            0
          ])){
            for(var a=e.length, n=new Co(a), o=new No(a), i=0, r=0, l=0, s=0;
            s<a;
            ){
              l++;
              var u=e[
                s++
              ];
              n[
                r++
              ]
              =i+t, n[
                r++
              ]
              =u;
              for(var d=0;
              d<u;
              d++){
                var c=e[
                  s++
                ], p=e[
                  s++
                ];
                o[
                  i++
                ]
                =c, o[
                  i++
                ]
                =p
              }
            }
            return{
              flatCoordsOffset:new Uint32Array(n.buffer, 0, r), flatCoords:o, count:l
            }
          }
          return{
            flatCoordsOffset:null, flatCoords:null, count:e.length
          }
        }, t.prototype.getInitialData=function(e, t){
          var a=new _a.A([
            "value"
          ], this);
          return a.hasItemOption=!1, a.initData(e.data, [
          ], (function(e, t, n, o){
            if(e instanceof Array)return NaN;
            a.hasItemOption=!0;
            var i=e.value;
            return null!=i?i instanceof Array?i[
              o
            ]
            :i:void 0
          })), a
        }, t.prototype.formatTooltip=function(e, t, a){
          var n=this.getData().getItemModel(e), o=n.get("name");
          if(o)return o;
          var i=n.get("fromName"), r=n.get("toName"), l=[
          ];
          return null!=i&&l.push(i), null!=r&&l.push(r), (0, W.Qx)("nameValue", {
            name:l.join(" > ")
          })
        }, t.prototype.preventIncremental=function(){
          return!!this.get([
            "effect", "show"
          ])
        }, t.prototype.getProgressive=function(){
          var e=this.option.progressive;
          return null==e?this.option.large?1e4:this.get("progressive"):e
        }, t.prototype.getProgressiveThreshold=function(){
          var e=this.option.progressiveThreshold;
          return null==e?this.option.large?2e4:this.get("progressiveThreshold"):e
        }, t.prototype.getZLevelKey=function(){
          var e=this.getModel("effect"), t=e.get("trailLength");
          return this.getData().count()>this.getProgressiveThreshold()?this.id:e.get("show")&&t>0?t+"":""
        }, t.type="series.lines", t.dependencies=[
          "grid", "polar", "geo", "calendar"
        ], t.defaultOption={
          coordinateSystem:"geo", z:2, legendHoverLink:!0, xAxisIndex:0, yAxisIndex:0, symbol:[
            "none", "none"
          ], symbolSize:[
            10, 10
          ], geoIndex:0, effect:{
            show:!1, period:4, constantSpeed:0, symbol:"circle", symbolSize:3, loop:!0, trailLength:.2
          }, large:!1, largeThreshold:2e3, polyline:!1, clip:!0, label:{
            show:!1, position:"end"
          }, lineStyle:{
            opacity:.5
          }
        }, t
      }
      (p.A);
      function Eo(e){
        return e instanceof Array||(e=[
          e, e
        ]), e
      }
      const Vo={
        seriesType:"lines", reset:function(e){
          var t=Eo(e.get("symbol")), a=Eo(e.get("symbolSize")), n=e.getData();
          return n.setVisual("fromSymbol", t&&t[
            0
          ]), n.setVisual("toSymbol", t&&t[
            1
          ]), n.setVisual("fromSymbolSize", a&&a[
            0
          ]), n.setVisual("toSymbolSize", a&&a[
            1
          ]), {
            dataEach:n.hasItemOption?function(e, t){
              var a=e.getItemModel(t), n=Eo(a.getShallow("symbol", !0)), o=Eo(a.getShallow("symbolSize", !0));
              n[
                0
              ]
              &&e.setItemVisual(t, "fromSymbol", n[
                0
              ]), n[
                1
              ]
              &&e.setItemVisual(t, "toSymbol", n[
                1
              ]), o[
                0
              ]
              &&e.setItemVisual(t, "fromSymbolSize", o[
                0
              ]), o[
                1
              ]
              &&e.setItemVisual(t, "toSymbolSize", o[
                1
              ])
            }
            :null
          }
        }
      };
      var Ro=a(549714), zo=a(744532), ko=[
        "itemStyle", "borderWidth"
      ], Go=[
        {
          xy:"x", wh:"width", index:0, posDesc:[
            "left", "right"
          ]
        }, {
          xy:"y", wh:"height", index:1, posDesc:[
            "top", "bottom"
          ]
        }
      ], Oo=new U.A;
      function Bo(e, t, a, n){
        var o=e.getItemLayout(t), i=a.get("symbolRepeat"), r=a.get("symbolClip"), l=a.get("symbolPosition")||"start", s=(a.get("symbolRotate")||0)*Math.PI/180||0, u=a.get("symbolPatternSize")||2, d=a.isAnimationEnabled(), c={
          dataIndex:t, layout:o, itemModel:a, symbolType:e.getItemVisual(t, "symbol")||"circle", style:e.getItemVisual(t, "style"), symbolClip:r, symbolRepeat:i, symbolRepeatDirection:a.get("symbolRepeatDirection"), symbolPatternSize:u, rotation:s, animationModel:d?a:null, hoverScale:d&&a.get([
            "emphasis", "scale"
          ]), z2:a.getShallow("z", !0)||0
        };
        !function(e, t, a, n, o){
          var i, r=n.valueDim, l=e.get("symbolBoundingData"), s=n.coordSys.getOtherAxis(n.coordSys.getBaseAxis()), u=s.toGlobalCoord(s.dataToCoord(0)), d=1-+(a[
            r.wh
          ]
          <=0);
          if(L.isArray(l)){
            var c=[
              Yo(s, l[
                0
              ])-u, Yo(s, l[
                1
              ])-u
            ];
            c[
              1
            ]
            <c[
              0
            ]
            &&c.reverse(), i=c[
              d
            ]
          }
          else i=null!=l?Yo(s, l)-u:t?n.coordSysExtent[
            r.index
          ]
          [
            d
          ]
          -u:a[
            r.wh
          ];
          o.boundingLength=i, t&&(o.repeatCutLength=a[
            r.wh
          ]);
          var p="x"===r.xy, h=s.inverse;
          o.pxSign=p&&!h||!p&&h?i>=0?1:-1:i>0?1:-1
        }
        (a, i, o, n, c), function(e, t, a, n, o, i, r, l, s, u){
          var d, c=s.valueDim, p=s.categoryDim, h=Math.abs(a[
            p.wh
          ]), g=e.getItemVisual(t, "symbolSize");
          d=L.isArray(g)?g.slice():null==g?[
            "100%", "100%"
          ]
          :[
            g, g
          ];
          d[
            p.index
          ]
          =(0, Se.lo)(d[
            p.index
          ], h), d[
            c.index
          ]
          =(0, Se.lo)(d[
            c.index
          ], n?h:Math.abs(i)), u.symbolSize=d, (u.symbolScale=[
            d[
              0
            ]
            /l, d[
              1
            ]
            /l
          ])[
            c.index
          ]
          *=(s.isHorizontal?-1:1)*r
        }
        (e, t, o, i, 0, c.boundingLength, c.pxSign, u, n, c), function(e, t, a, n, o){
          var i=e.get(ko)||0;
          i&&(Oo.attr({
            scaleX:t[
              0
            ], scaleY:t[
              1
            ], rotation:a
          }), Oo.updateTransform(), i/=Oo.getLineScale(), i*=t[
            n.valueDim.index
          ]);
          o.valueLineWidth=i||0
        }
        (a, c.symbolScale, s, n, c);
        var p=c.symbolSize, h=(0, v.hV)(a.get("symbolOffset"), p);
        return function(e, t, a, n, o, i, r, l, s, u, d, c){
          var p=d.categoryDim, h=d.valueDim, g=c.pxSign, f=Math.max(t[
            h.index
          ]
          +l, 0), y=f;
          if(n){
            var m=Math.abs(s), v=L.retrieve(e.get("symbolMargin"), "15%")+"", x=!1;
            v.lastIndexOf("!")===v.length-1&&(x=!0, v=v.slice(0, v.length-1));
            var S=(0, Se.lo)(v, t[
              h.index
            ]), _=Math.max(f+2*S, 0), b=x?0:2*S, I=(0, Se.kf)(n), w=I?n:ai((m+b)/_);
            _=f+2*(S=(m-w*f)/2/(x?w:Math.max(w-1, 1))), b=x?0:2*S, I||"fixed"===n||(w=u?ai((Math.abs(u)+b)/_):0), y=w*_-b, c.repeatTimes=w, c.symbolMargin=S
          }
          var A=g*(y/2), M=c.pathPosition=[
          ];
          M[
            p.index
          ]
          =a[
            p.wh
          ]
          /2, M[
            h.index
          ]
          ="start"===r?A:"end"===r?s-A:s/2, i&&(M[
            0
          ]
          +=i[
            0
          ], M[
            1
          ]
          +=i[
            1
          ]);
          var D=c.bundlePosition=[
          ];
          D[
            p.index
          ]
          =a[
            p.xy
          ], D[
            h.index
          ]
          =a[
            h.xy
          ];
          var C=c.barRectShape=L.extend({
          }, a);
          C[
            h.wh
          ]
          =g*Math.max(Math.abs(a[
            h.wh
          ]), Math.abs(M[
            h.index
          ]
          +A)), C[
            p.wh
          ]
          =a[
            p.wh
          ];
          var N=c.clipShape={
          };
          N[
            p.xy
          ]
          =-a[
            p.xy
          ], N[
            p.wh
          ]
          =d.ecSize[
            p.wh
          ], N[
            h.xy
          ]
          =0, N[
            h.wh
          ]
          =a[
            h.wh
          ]
        }
        (a, p, o, i, 0, h, l, c.valueLineWidth, c.boundingLength, c.repeatCutLength, n, c), c
      }
      function Yo(e, t){
        return e.toGlobalCoord(e.dataToCoord(e.scale.parse(t)))
      }
      function Fo(e){
        var t=e.symbolPatternSize, a=(0, v.v5)(e.symbolType, -t/2, -t/2, t, t);
        return a.attr({
          culling:!0
        }), "image"!==a.type&&a.setStyle({
          strokeNoScale:!0
        }), a
      }
      function Wo(e, t, a, n){
        var o=e.__pictorialBundle, i=a.symbolSize, r=a.valueLineWidth, l=a.pathPosition, s=t.valueDim, u=a.repeatTimes||0, d=0, c=i[
          t.valueDim.index
        ]
        +r+2*a.symbolMargin;
        for($o(e, (function(e){
          e.__pictorialAnimationIndex=d, e.__pictorialRepeatTimes=u, d<u?ei(e, null, g(d), a, n):ei(e, null, {
            scaleX:0, scaleY:0
          }, a, n, (function(){
            o.remove(e)
          })), d++
        }));
        d<u;
        d++){
          var p=Fo(a);
          p.__pictorialAnimationIndex=d, p.__pictorialRepeatTimes=u, o.add(p);
          var h=g(d);
          ei(p, {
            x:h.x, y:h.y, scaleX:0, scaleY:0
          }, {
            scaleX:h.scaleX, scaleY:h.scaleY, rotation:h.rotation
          }, a, n)
        }
        function g(e){
          var t=l.slice(), n=a.pxSign, o=e;
          return("start"===a.symbolRepeatDirection?n>0:n<0)&&(o=u-1-e), t[
            s.index
          ]
          =c*(o-u/2+.5)+l[
            s.index
          ], {
            x:t[
              0
            ], y:t[
              1
            ], scaleX:a.symbolScale[
              0
            ], scaleY:a.symbolScale[
              1
            ], rotation:a.rotation
          }
        }
      }
      function Ho(e, t, a, n){
        var o=e.__pictorialBundle, i=e.__pictorialMainPath;
        i?ei(i, null, {
          x:a.pathPosition[
            0
          ], y:a.pathPosition[
            1
          ], scaleX:a.symbolScale[
            0
          ], scaleY:a.symbolScale[
            1
          ], rotation:a.rotation
        }, a, n):(i=e.__pictorialMainPath=Fo(a), o.add(i), ei(i, {
          x:a.pathPosition[
            0
          ], y:a.pathPosition[
            1
          ], scaleX:0, scaleY:0, rotation:a.rotation
        }, {
          scaleX:a.symbolScale[
            0
          ], scaleY:a.symbolScale[
            1
          ]
        }, a, n))
      }
      function Xo(e, t, a){
        var n=L.extend({
        }, t.barRectShape), o=e.__pictorialBarRect;
        o?ei(o, null, {
          shape:n
        }, t, a):((o=e.__pictorialBarRect=new Ze.A({
          z2:2, shape:n, silent:!0, style:{
            stroke:"transparent", fill:"transparent", lineWidth:0
          }
        })).disableMorphing=!0, e.add(o))
      }
      function Uo(e, t, a, n){
        if(a.symbolClip){
          var o=e.__pictorialClipPath, i=L.extend({
          }, a.clipShape), r=t.valueDim, l=a.animationModel, s=a.dataIndex;
          if(o)z.oi(o, {
            shape:i
          }, l, s);
          else{
            i[
              r.wh
            ]
            =0, o=new Ze.A({
              shape:i
            }), e.__pictorialBundle.setClipPath(o), e.__pictorialClipPath=o;
            var u={
            };
            u[
              r.wh
            ]
            =a.clipShape[
              r.wh
            ], E[
              n?"updateProps":"initProps"
            ]
            (o, {
              shape:u
            }, l, s)
          }
        }
      }
      function Zo(e, t){
        var a=e.getItemModel(t);
        return a.getAnimationDelayParams=qo, a.isAnimationEnabled=jo, a
      }
      function qo(e){
        return{
          index:e.__pictorialAnimationIndex, count:e.__pictorialRepeatTimes
        }
      }
      function jo(){
        return this.parentModel.isAnimationEnabled()&&!!this.getShallow("animation")
      }
      function Qo(e, t, a, n){
        var o=new m.A, i=new m.A;
        return o.add(i), o.__pictorialBundle=i, i.x=a.bundlePosition[
          0
        ], i.y=a.bundlePosition[
          1
        ], a.symbolRepeat?Wo(o, t, a):Ho(o, 0, a), Xo(o, a, n), Uo(o, t, a, n), o.__pictorialShapeStr=Ko(e, a), o.__pictorialSymbolMeta=a, o
      }
      function Jo(e, t, a, n){
        var o=n.__pictorialBarRect;
        o&&o.removeTextContent();
        var i=[
        ];
        $o(n, (function(e){
          i.push(e)
        })), n.__pictorialMainPath&&i.push(n.__pictorialMainPath), n.__pictorialClipPath&&(a=null), L.each(i, (function(e){
          z.Nz(e, {
            scaleX:0, scaleY:0
          }, a, t, (function(){
            n.parent&&n.parent.remove(n)
          }))
        })), e.setItemGraphicEl(t, null)
      }
      function Ko(e, t){
        return[
          e.getItemVisual(t.dataIndex, "symbol")||"none", !!t.symbolRepeat, !!t.symbolClip
        ].join(":")
      }
      function $o(e, t, a){
        L.each(e.__pictorialBundle.children(), (function(n){
          n!==e.__pictorialBarRect&&t.call(a, n)
        }))
      }
      function ei(e, t, a, n, o, i){
        t&&e.attr(t), n.symbolClip&&!o?a&&e.attr(a):a&&E[
          o?"updateProps":"initProps"
        ]
        (e, a, n.animationModel, n.dataIndex, i)
      }
      function ti(e, t, a){
        var n=a.dataIndex, o=a.itemModel, i=o.getModel("emphasis"), r=i.getModel("itemStyle").getItemStyle(), l=o.getModel([
          "blur", "itemStyle"
        ]).getItemStyle(), s=o.getModel([
          "select", "itemStyle"
        ]).getItemStyle(), u=o.getShallow("cursor"), d=i.get("focus"), c=i.get("blurScope"), p=i.get("scale");
        $o(e, (function(e){
          if(e instanceof O.Ay){
            var t=e.style;
            e.useStyle(L.extend({
              image:t.image, x:t.x, y:t.y, width:t.width, height:t.height
            }, a.style))
          }
          else e.useStyle(a.style);
          var n=e.ensureState("emphasis");
          n.style=r, p&&(n.scaleX=1.1*e.scaleX, n.scaleY=1.1*e.scaleY), e.ensureState("blur").style=l, e.ensureState("select").style=s, u&&(e.cursor=u), e.z2=a.z2
        }));
        var h=t.valueDim.posDesc[
          +(a.boundingLength>0)
        ], g=e.__pictorialBarRect;
        g.ignoreClip=!0, (0, G.qM)(g, (0, G.lx)(o), {
          labelFetcher:t.seriesModel, labelDataIndex:n, defaultText:(0, zo.i)(t.seriesModel.getData(), n), inheritColor:a.style.fill, defaultOpacity:a.style.opacity, defaultOutsidePosition:h
        }), (0, k.Lm)(e, d, c, i.get("disabled"))
      }
      function ai(e){
        var t=Math.round(e);
        return Math.abs(e-t)<1e-4?t:Math.ceil(e)
      }
      const ni=function(e){
        function t(){
          var a=null!==e&&e.apply(this, arguments)||this;
          return a.type=t.type, a
        }
        return(0, d.C6)(t, e), t.prototype.render=function(e, t, a){
          var n=this.group, o=e.getData(), i=this._data, r=e.coordinateSystem, l=r.getBaseAxis().isHorizontal(), s=r.master.getRect(), u={
            ecSize:{
              width:a.getWidth(), height:a.getHeight()
            }, seriesModel:e, coordSys:r, coordSysExtent:[
              [
                s.x, s.x+s.width
              ], [
                s.y, s.y+s.height
              ]
            ], isHorizontal:l, valueDim:Go[
              +l
            ], categoryDim:Go[
              1-+l
            ]
          };
          o.diff(i).add((function(e){
            if(o.hasValue(e)){
              var t=Zo(o, e), a=Bo(o, e, t, u), i=Qo(o, u, a);
              o.setItemGraphicEl(e, i), n.add(i), ti(i, u, a)
            }
          })).update((function(e, t){
            var a=i.getItemGraphicEl(t);
            if(o.hasValue(e)){
              var r=Zo(o, e), l=Bo(o, e, r, u), s=Ko(o, l);
              a&&s!==a.__pictorialShapeStr&&(n.remove(a), o.setItemGraphicEl(e, null), a=null), a?function(e, t, a){
                var n=a.animationModel, o=a.dataIndex, i=e.__pictorialBundle;
                z.oi(i, {
                  x:a.bundlePosition[
                    0
                  ], y:a.bundlePosition[
                    1
                  ]
                }, n, o), a.symbolRepeat?Wo(e, t, a, !0):Ho(e, t, a, !0);
                Xo(e, a, !0), Uo(e, t, a, !0)
              }
              (a, u, l):a=Qo(o, u, l, !0), o.setItemGraphicEl(e, a), a.__pictorialSymbolMeta=l, n.add(a), ti(a, u, l)
            }
            else n.remove(a)
          })).remove((function(e){
            var t=i.getItemGraphicEl(e);
            t&&Jo(i, e, t.__pictorialSymbolMeta.animationModel, t)
          })).execute();
          var d=e.get("clip", !0)?(0, Gn.Ip)(e.coordinateSystem, !1, e):null;
          return d?n.setClipPath(d):n.removeClipPath(), this._data=o, this.group
        }, t.prototype.remove=function(e, t){
          var a=this.group, n=this._data;
          e.get("animation")?n&&n.eachItemGraphicEl((function(t){
            Jo(n, (0, x.z)(t).dataIndex, e, t)
          })):a.removeAll()
        }, t.type="pictorialBar", t
      }
      (w.A);
      var oi=a(598908), ii=a(612616);
      const ri=function(e){
        function t(){
          var a=null!==e&&e.apply(this, arguments)||this;
          return a.type=t.type, a.hasSymbolVisual=!0, a.defaultSymbol="roundRect", a
        }
        return(0, d.C6)(t, e), t.prototype.getInitialData=function(t){
          return t.stack=null, e.prototype.getInitialData.apply(this, arguments)
        }, t.type="series.pictorialBar", t.dependencies=[
          "grid"
        ], t.defaultOption=(0, ii.G_)(oi.A.defaultOption, {
          symbol:"circle", symbolSize:null, symbolRotate:null, symbolPosition:null, symbolOffset:null, symbolMargin:null, symbolRepeat:!1, symbolRepeatDirection:"end", symbolClip:!1, symbolBoundingData:null, symbolPatternSize:400, barGap:"-100%", clip:!1, progressive:0, emphasis:{
            scale:!1
          }, select:{
            itemStyle:{
              borderColor:"#212121"
            }
          }
        }), t
      }
      (oi.A);
      var li=a(462536);
      var si=a(553364);
      const ui=function(e){
        function t(){
          var a=null!==e&&e.apply(this, arguments)||this;
          return a.type=t.type, a._layers=[
          ], a
        }
        return(0, d.C6)(t, e), t.prototype.render=function(e, t, a){
          var n=e.getData(), o=this, i=this.group, r=e.getLayerSeries(), l=n.getLayout("layoutInfo"), s=l.rect, u=l.boundaryGap;
          function d(e){
            return e.name
          }
          i.x=0, i.y=s.y+u[
            0
          ];
          var c=new qe.A(this._layersSeries||[
          ], r, d, d), p=[
          ];
          function h(t, a, l){
            var s=o._layers;
            if("remove"!==t){
              for(var u, d, c=[
              ], h=[
              ], g=r[
                a
              ].indices, f=0;
              f<g.length;
              f++){
                var y=n.getItemLayout(g[
                  f
                ]), v=y.x, x=y.y0, S=y.y;
                c.push(v, x), h.push(v, x+S), u=n.getItemVisual(g[
                  f
                ], "style")
              }
              var _=n.getItemLayout(g[
                0
              ]), b=e.getModel("label").get("margin"), I=e.getModel("emphasis");
              if("add"===t){
                var w=p[
                  a
                ]
                =new m.A;
                d=new si.z({
                  shape:{
                    points:c, stackedOnPoints:h, smooth:.4, stackedOnSmooth:.4, smoothConstraint:!1
                  }, z2:0
                }), w.add(d), i.add(w), e.isAnimationEnabled()&&d.setClipPath(function(e, t, a){
                  var n=new Ze.A({
                    shape:{
                      x:e.x-10, y:e.y-10, width:0, height:e.height+20
                    }
                  });
                  return z.LW(n, {
                    shape:{
                      x:e.x-50, width:e.width+100, height:e.height+20
                    }
                  }, t, a), n
                }
                (d.getBoundingRect(), e, (function(){
                  d.removeClipPath()
                })))
              }
              else{
                w=s[
                  l
                ];
                d=w.childAt(0), i.add(w), p[
                  a
                ]
                =w, z.oi(d, {
                  shape:{
                    points:c, stackedOnPoints:h
                  }
                }, e), (0, z.ap)(d)
              }
              (0, G.qM)(d, (0, G.lx)(e), {
                labelDataIndex:g[
                  f-1
                ], defaultText:n.getName(g[
                  f-1
                ]), inheritColor:u.fill
              }, {
                normal:{
                  verticalAlign:"middle"
                }
              }), d.setTextConfig({
                position:null, local:!0
              });
              var A=d.getTextContent();
              A&&(A.x=_.x-b, A.y=_.y0+_.y/2), d.useStyle(u), n.setItemGraphicEl(a, d), (0, k.Mx)(d, e), (0, k.Lm)(d, I.get("focus"), I.get("blurScope"), I.get("disabled"))
            }
            else i.remove(s[
              a
            ])
          }
          c.add((0, L.bind)(h, this, "add")).update((0, L.bind)(h, this, "update")).remove((0, L.bind)(h, this, "remove")).execute(), this._layersSeries=r, this._layers=p
        }, t.type="themeRiver", t
      }
      (w.A);
      const di=function(e){
        function t(){
          var a=null!==e&&e.apply(this, arguments)||this;
          return a.type=t.type, a
        }
        return(0, d.C6)(t, e), t.prototype.init=function(t){
          e.prototype.init.apply(this, arguments), this.legendVisualProvider=new F.A(L.bind(this.getData, this), L.bind(this.getRawData, this))
        }, t.prototype.fixData=function(e){
          var t=e.length, a={
          }, n=(0, Fe.Sq)(e, (function(e){
            return a.hasOwnProperty(e[
              0
            ]
            +"")||(a[
              e[
                0
              ]
              +""
            ]
            =-1), e[
              2
            ]
          })), o=[
          ];
          n.buckets.each((function(e, t){
            o.push({
              name:t, dataList:e
            })
          }));
          for(var i=o.length, r=0;
          r<i;
          ++r){
            for(var l=o[
              r
            ].name, s=0;
            s<o[
              r
            ].dataList.length;
            ++s){
              var u=o[
                r
              ].dataList[
                s
              ]
              [
                0
              ]
              +"";
              a[
                u
              ]
              =r
            }
            for(var u in a)a.hasOwnProperty(u)&&a[
              u
            ]
            !==r&&(a[
              u
            ]
            =r, e[
              t
            ]
            =[
              u, 0, l
            ], t++)
          }
          return e
        }, t.prototype.getInitialData=function(e, t){
          for(var a=this.getReferringComponents("singleAxis", Fe.US).models[
            0
          ].get("type"), n=L.filter(e.data, (function(e){
            return void 0!==e[
              2
            ]
          })), o=this.fixData(n||[
          ]), i=[
          ], r=this.nameMap=L.createHashMap(), l=0, s=0;
          s<o.length;
          ++s)i.push(o[
            s
          ]
          [
            2
          ]), r.get(o[
            s
          ]
          [
            2
          ])||(r.set(o[
            s
          ]
          [
            2
          ], l), l++);
          var u=(0, wa.A)(o, {
            coordDimensions:[
              "single"
            ], dimensionsDefine:[
              {
                name:"time", type:(0, bn.B)(a)
              }, {
                name:"value", type:"float"
              }, {
                name:"name", type:"ordinal"
              }
            ], encodeDefine:{
              single:0, value:1, itemName:2
            }
          }).dimensions, d=new _a.A(u, this);
          return d.initData(o), d
        }, t.prototype.getLayerSeries=function(){
          for(var e=this.getData(), t=e.count(), a=[
          ], n=0;
          n<t;
          ++n)a[
            n
          ]
          =n;
          var o=e.mapDimension("single"), i=(0, Fe.Sq)(a, (function(t){
            return e.get("name", t)
          })), r=[
          ];
          return i.buckets.each((function(t, a){
            t.sort((function(t, a){
              return e.get(o, t)-e.get(o, a)
            })), r.push({
              name:a, indices:t
            })
          })), r
        }, t.prototype.getAxisTooltipData=function(e, t, a){
          L.isArray(e)||(e=e?[
            e
          ]
          :[
          ]);
          for(var n, o=this.getData(), i=this.getLayerSeries(), r=[
          ], l=i.length, s=0;
          s<l;
          ++s){
            for(var u=Number.MAX_VALUE, d=-1, c=i[
              s
            ].indices.length, p=0;
            p<c;
            ++p){
              var h=o.get(e[
                0
              ], i[
                s
              ].indices[
                p
              ]), g=Math.abs(h-t);
              g<=u&&(n=h, u=g, d=i[
                s
              ].indices[
                p
              ])
            }
            r.push(d)
          }
          return{
            dataIndices:r, nestestValue:n
          }
        }, t.prototype.formatTooltip=function(e, t, a){
          var n=this.getData(), o=n.getName(e), i=n.get(n.mapDimension("value"), e);
          return(0, W.Qx)("nameValue", {
            name:o, value:i
          })
        }, t.type="series.themeRiver", t.dependencies=[
          "singleAxis"
        ], t.defaultOption={
          z:2, colorBy:"data", coordinateSystem:"singleAxis", boundaryGap:[
            "10%", "10%"
          ], singleAxisIndex:0, animationEasing:"linear", label:{
            margin:4, show:!0, position:"left", fontSize:11
          }, emphasis:{
            label:{
              show:!0
            }
          }
        }, t
      }
      (p.A);
      function ci(e, t){
        e.eachSeriesByType("themeRiver", (function(e){
          var t=e.getData(), a=e.coordinateSystem, n={
          }, o=a.getRect();
          n.rect=o;
          var i=e.get("boundaryGap"), r=a.getAxis();
          (n.boundaryGap=i, "horizontal"===r.orient)?(i[
            0
          ]
          =Se.lo(i[
            0
          ], o.height), i[
            1
          ]
          =Se.lo(i[
            1
          ], o.height), pi(t, e, o.height-i[
            0
          ]
          -i[
            1
          ])):(i[
            0
          ]
          =Se.lo(i[
            0
          ], o.width), i[
            1
          ]
          =Se.lo(i[
            1
          ], o.width), pi(t, e, o.width-i[
            0
          ]
          -i[
            1
          ]));
          t.setLayout("layoutInfo", n)
        }))
      }
      function pi(e, t, a){
        if(e.count())for(var n, o=t.coordinateSystem, i=t.getLayerSeries(), r=e.mapDimension("single"), l=e.mapDimension("value"), s=L.map(i, (function(t){
          return L.map(t.indices, (function(t){
            var a=o.dataToPoint(e.get(r, t));
            return a[
              1
            ]
            =e.get(l, t), a
          }))
        })), u=function(e){
          for(var t=e.length, a=e[
            0
          ].length, n=[
          ], o=[
          ], i=0, r=0;
          r<a;
          ++r){
            for(var l=0, s=0;
            s<t;
            ++s)l+=e[
              s
            ]
            [
              r
            ]
            [
              1
            ];
            l>i&&(i=l), n.push(l)
          }
          for(var u=0;
          u<a;
          ++u)o[
            u
          ]
          =(i-n[
            u
          ])/2;
          i=0;
          for(var d=0;
          d<a;
          ++d){
            var c=n[
              d
            ]
            +o[
              d
            ];
            c>i&&(i=c)
          }
          return{
            y0:o, max:i
          }
        }
        (s), d=u.y0, c=a/u.max, p=i.length, h=i[
          0
        ].indices.length, g=0;
        g<h;
        ++g){
          n=d[
            g
          ]
          *c, e.setItemLayout(i[
            0
          ].indices[
            g
          ], {
            layerIndex:0, x:s[
              0
            ]
            [
              g
            ]
            [
              0
            ], y0:n, y:s[
              0
            ]
            [
              g
            ]
            [
              1
            ]
            *c
          });
          for(var f=1;
          f<p;
          ++f)n+=s[
            f-1
          ]
          [
            g
          ]
          [
            1
          ]
          *c, e.setItemLayout(i[
            f
          ].indices[
            g
          ], {
            layerIndex:f, x:s[
              f
            ]
            [
              g
            ]
            [
              0
            ], y0:n, y:s[
              f
            ]
            [
              g
            ]
            [
              1
            ]
            *c
          })
        }
      }
      var hi=a(979446), gi=a(923538), fi=a(941589);
      const yi=function(e){
        function t(t, a, n, o){
          var i=e.call(this)||this;
          i.z2=2, i.textConfig={
            inside:!0
          }, (0, x.z)(i).seriesIndex=a.seriesIndex;
          var r=new je.Ay({
            z2:4, silent:t.getModel().get([
              "label", "silent"
            ])
          });
          return i.setTextContent(r), i.updateData(!0, t, a, n, o), i
        }
        return(0, d.C6)(t, e), t.prototype.updateData=function(e, t, a, n, o){
          this.node=t, t.piece=this, a=a||this._seriesModel, n=n||this._ecModel;
          var i=this;
          (0, x.z)(i).dataIndex=t.dataIndex;
          var r=t.getModel(), l=r.getModel("emphasis"), s=t.getLayout(), u=L.extend({
          }, s);
          u.label=null;
          var d=t.getVisual("style");
          d.lineJoin="bevel";
          var c=t.getVisual("decal");
          c&&(d.decal=(0, gi.w)(c, o));
          var p=(0, hi.i)(r.getModel("itemStyle"), u, !0);
          L.extend(u, p), L.each(k.BV, (function(e){
            var t=i.ensureState(e), a=r.getModel([
              e, "itemStyle"
            ]);
            t.style=a.getItemStyle();
            var n=(0, hi.i)(a, u);
            n&&(t.shape=n)
          })), e?(i.setShape(u), i.shape.r=s.r0, z.LW(i, {
            shape:{
              r:s.r
            }
          }, a, t.dataIndex)):(z.oi(i, {
            shape:u
          }, a), (0, z.ap)(i)), i.useStyle(d), this._updateLabel(a);
          var h=r.getShallow("cursor");
          h&&i.attr("cursor", h), this._seriesModel=a||this._seriesModel, this._ecModel=n||this._ecModel;
          var g=l.get("focus"), f="relative"===g?L.concatArray(t.getAncestorsIndices(), t.getDescendantIndices()):"ancestor"===g?t.getAncestorsIndices():"descendant"===g?t.getDescendantIndices():g;
          (0, k.Lm)(this, f, l.get("blurScope"), l.get("disabled"))
        }, t.prototype._updateLabel=function(e){
          var t=this, a=this.node.getModel(), n=a.getModel("label"), o=this.node.getLayout(), i=o.endAngle-o.startAngle, r=(o.startAngle+o.endAngle)/2, l=Math.cos(r), s=Math.sin(r), u=this, d=u.getTextContent(), c=this.node.dataIndex, p=n.get("minAngle")/180*Math.PI, h=n.get("show")&&!(null!=p&&Math.abs(i)<p);
          function g(e, t){
            var a=e.get(t);
            return null==a?n.get(t):a
          }
          d.ignore=!h, L.each(k.wV, (function(n){
            var p="normal"===n?a.getModel("label"):a.getModel([
              n, "label"
            ]), h="normal"===n, f=h?d:d.ensureState(n), y=e.getFormattedLabel(c, n);
            h&&(y=y||t.node.name), f.style=(0, G.VB)(p, {
            }, null, "normal"!==n, !0), y&&(f.style.text=y);
            var m=p.get("show");
            null==m||h||(f.ignore=!m);
            var v, x=g(p, "position"), S=h?u:u.states[
              n
            ], _=S.style.fill;
            S.textConfig={
              outsideFill:"inherit"===p.get("color")?_:null, inside:"outside"!==x
            };
            var b=g(p, "distance")||0, I=g(p, "align"), w=g(p, "rotate"), A=.5*Math.PI, M=1.5*Math.PI, D=(0, fi.n)("tangential"===w?Math.PI/2-r:r), C=D>A&&!(0, Se.dh)(D-A)&&D<M;
            "outside"===x?(v=o.r+b, I=C?"right":"left"):I&&"center"!==I?"left"===I?(v=o.r0+b, I=C?"right":"left"):"right"===I&&(v=o.r-b, I=C?"left":"right"):(v=i===2*Math.PI&&0===o.r0?0:(o.r+o.r0)/2, I="center"), f.style.align=I, f.style.verticalAlign=g(p, "verticalAlign")||"middle", f.x=v*l+o.cx, f.y=v*s+o.cy;
            var N=0;
            "radial"===w?N=(0, fi.n)(-r)+(C?Math.PI:0):"tangential"===w?N=(0, fi.n)(Math.PI/2-r)+(C?Math.PI:0):L.isNumber(w)&&(N=w*Math.PI/180), f.rotation=(0, fi.n)(N)
          })), d.dirtyStyle()
        }, t
      }
      (Pa.A);
      var mi="sunburstRootToNode", vi="sunburstHighlight";
      const xi=function(e){
        function t(){
          var a=null!==e&&e.apply(this, arguments)||this;
          return a.type=t.type, a
        }
        return(0, d.C6)(t, e), t.prototype.render=function(e, t, a, n){
          var o=this;
          this.seriesModel=e, this.api=a, this.ecModel=t;
          var i=e.getData(), r=i.tree.root, l=e.getViewRoot(), s=this.group, u=e.get("renderLabelForZeroData"), d=[
          ];
          l.eachNode((function(e){
            d.push(e)
          }));
          var c=this._oldChildren||[
          ];
          !function(n, o){
            if(0===n.length&&0===o.length)return;
            function l(e){
              return e.getId()
            }
            function d(l, d){
              !function(n, o){
                u||!n||n.getValue()||(n=null);
                if(n!==r&&o!==r)if(o&&o.piece)n?(o.piece.updateData(!1, n, e, t, a), i.setItemGraphicEl(n.dataIndex, o.piece)):function(e){
                  if(!e)return;
                  e.piece&&(s.remove(e.piece), e.piece=null)
                }
                (o);
                else if(n){
                  var l=new yi(n, e, t, a);
                  s.add(l), i.setItemGraphicEl(n.dataIndex, l)
                }
              }
              (null==l?null:n[
                l
              ], null==d?null:o[
                d
              ])
            }
            new qe.A(o, n, l, l).add(d).update(d).remove(L.curry(d, null)).execute()
          }
          (d, c), function(n, i){
            i.depth>0?(o.virtualPiece?o.virtualPiece.updateData(!1, n, e, t, a):(o.virtualPiece=new yi(n, e, t, a), s.add(o.virtualPiece)), i.piece.off("click"), o.virtualPiece.on("click", (function(e){
              o._rootToNode(i.parentNode)
            }))):o.virtualPiece&&(s.remove(o.virtualPiece), o.virtualPiece=null)
          }
          (r, l), this._initEvents(), this._oldChildren=d
        }, t.prototype._initEvents=function(){
          var e=this;
          this.group.off("click"), this.group.on("click", (function(t){
            var a=!1;
            e.seriesModel.getViewRoot().eachNode((function(n){
              if(!a&&n.piece&&n.piece===t.target){
                var o=n.getModel().get("nodeClick");
                if("rootToNode"===o)e._rootToNode(n);
                else if("link"===o){
                  var i=n.getModel(), r=i.get("link");
                  if(r){
                    var l=i.get("target", !0)||"_blank";
                    (0, nt.JW)(r, l)
                  }
                }
                a=!0
              }
            }))
          }))
        }, t.prototype._rootToNode=function(e){
          e!==this.seriesModel.getViewRoot()&&this.api.dispatchAction({
            type:mi, from:this.uid, seriesId:this.seriesModel.id, targetNode:e
          })
        }, t.prototype.containPoint=function(e, t){
          var a=t.getData().getItemLayout(0);
          if(a){
            var n=e[
              0
            ]
            -a.cx, o=e[
              1
            ]
            -a.cy, i=Math.sqrt(n*n+o*o);
            return i<=a.r&&i>=a.r0
          }
        }, t.type="sunburst", t
      }
      (w.A);
      function Si(e){
        var t=0;
        L.each(e.children, (function(e){
          Si(e);
          var a=e.value;
          L.isArray(a)&&(a=a[
            0
          ]), t+=a
        }));
        var a=e.value;
        L.isArray(a)&&(a=a[
          0
        ]), (null==a||isNaN(a))&&(a=t), a<0&&(a=0), L.isArray(e.value)?e.value[
          0
        ]
        =a:e.value=a
      }
      const _i=function(e){
        function t(){
          var a=null!==e&&e.apply(this, arguments)||this;
          return a.type=t.type, a.ignoreStyleOnData=!0, a
        }
        return(0, d.C6)(t, e), t.prototype.getInitialData=function(e, t){
          var a={
            name:e.name, children:e.data
          };
          Si(a);
          var n=this._levelModels=L.map(e.levels||[
          ], (function(e){
            return new Te.A(e, this, t)
          }), this), o=Ne.A.createTree(a, this, (function(e){
            e.wrapMethod("getItemModel", (function(e, t){
              var a=o.getNodeByDataIndex(t), i=n[
                a.depth
              ];
              return i&&(e.parentModel=i), e
            }))
          }));
          return o.data
        }, t.prototype.optionUpdated=function(){
          this.resetViewRoot()
        }, t.prototype.getDataParams=function(t){
          var a=e.prototype.getDataParams.apply(this, arguments), n=this.getData().tree.getNodeByDataIndex(t);
          return a.treePathInfo=Re(n, this), a
        }, t.prototype.getLevelModel=function(e){
          return this._levelModels&&this._levelModels[
            e.depth
          ]
        }, t.prototype.getViewRoot=function(){
          return this._viewRoot
        }, t.prototype.resetViewRoot=function(e){
          e?this._viewRoot=e:e=this._viewRoot;
          var t=this.getRawData().tree.root;
          e&&(e===t||t.contains(e))||(this._viewRoot=t)
        }, t.prototype.enableAriaDecal=function(){
          He(this)
        }, t.type="series.sunburst", t.defaultOption={
          z:2, center:[
            "50%", "50%"
          ], radius:[
            0, "75%"
          ], clockwise:!0, startAngle:90, minAngle:0, stillShowZeroSum:!0, nodeClick:"rootToNode", renderLabelForZeroData:!1, label:{
            rotate:"radial", show:!0, opacity:1, align:"center", position:"inside", distance:5, silent:!0
          }, itemStyle:{
            borderWidth:1, borderColor:"white", borderType:"solid", shadowBlur:0, shadowColor:"rgba(0, 0, 0, 0.2)", shadowOffsetX:0, shadowOffsetY:0, opacity:1
          }, emphasis:{
            focus:"descendant"
          }, blur:{
            itemStyle:{
              opacity:.2
            }, label:{
              opacity:.1
            }
          }, animationType:"expansion", animationDuration:1e3, animationDurationUpdate:500, data:[
          ], sort:"desc"
        }, t
      }
      (p.A);
      var bi=Math.PI/180;
      function Ii(e, t, a){
        t.eachSeriesByType(e, (function(e){
          var t=e.get("center"), n=e.get("radius");
          L.isArray(n)||(n=[
            0, n
          ]), L.isArray(t)||(t=[
            t, t
          ]);
          var o=a.getWidth(), i=a.getHeight(), r=Math.min(o, i), l=(0, Se.lo)(t[
            0
          ], o), s=(0, Se.lo)(t[
            1
          ], i), u=(0, Se.lo)(n[
            0
          ], r/2), d=(0, Se.lo)(n[
            1
          ], r/2), c=-e.get("startAngle")*bi, p=e.get("minAngle")*bi, h=e.getData().tree.root, g=e.getViewRoot(), f=g.depth, y=e.get("sort");
          null!=y&&wi(g, y);
          var m=0;
          L.each(g.children, (function(e){
            !isNaN(e.getValue())&&m++
          }));
          var v=g.getValue(), x=Math.PI/(v||m)*2, S=g.depth>0, _=g.height-(S?-1:1), b=(d-u)/(_||1), I=e.get("clockwise"), w=e.get("stillShowZeroSum"), A=I?1:-1, M=function(t, a){
            if(t){
              var n=a;
              if(t!==h){
                var o=t.getValue(), i=0===v&&w?x:o*x;
                i<p&&(i=p), n=a+A*i;
                var d=t.depth-f-(S?-1:1), c=u+b*d, g=u+b*(d+1), y=e.getLevelModel(t);
                if(y){
                  var m=y.get("r0", !0), _=y.get("r", !0), D=y.get("radius", !0);
                  null!=D&&(m=D[
                    0
                  ], _=D[
                    1
                  ]), null!=m&&(c=(0, Se.lo)(m, r/2)), null!=_&&(g=(0, Se.lo)(_, r/2))
                }
                t.setLayout({
                  angle:i, startAngle:a, endAngle:n, clockwise:I, cx:l, cy:s, r0:c, r:g
                })
              }
              if(t.children&&t.children.length){
                var C=0;
                L.each(t.children, (function(e){
                  C+=M(e, a+C)
                }))
              }
              return n-a
            }
          };
          if(S){
            var D=u, C=u+b, N=2*Math.PI;
            h.setLayout({
              angle:N, startAngle:c, endAngle:c+N, clockwise:I, cx:l, cy:s, r0:D, r:C
            })
          }
          M(g, c)
        }))
      }
      function wi(e, t){
        var a=e.children||[
        ];
        e.children=function(e, t){
          if(L.isFunction(t)){
            var a=L.map(e, (function(e, t){
              var a=e.getValue();
              return{
                params:{
                  depth:e.depth, height:e.height, dataIndex:e.dataIndex, getValue:function(){
                    return a
                  }
                }, index:t
              }
            }));
            return a.sort((function(e, a){
              return t(e.params, a.params)
            })), L.map(a, (function(t){
              return e[
                t.index
              ]
            }))
          }
          var n="asc"===t;
          return e.sort((function(e, t){
            var a=(e.getValue()-t.getValue())*(n?1:-1);
            return 0===a?(e.dataIndex-t.dataIndex)*(n?-1:1):a
          }))
        }
        (a, t), a.length&&L.each(e.children, (function(e){
          wi(e, t)
        }))
      }
      function Ai(e){
        var t={
        };
        e.eachSeriesByType("sunburst", (function(e){
          var a=e.getData(), n=a.tree;
          n.eachNode((function(o){
            var i=o.getModel().getModel("itemStyle").getItemStyle();
            i.fill||(i.fill=function(e, a, n){
              for(var o=e;
              o&&o.depth>1;
              )o=o.parentNode;
              var i=a.getColorFromPalette(o.name||o.dataIndex+"", t);
              return e.depth>1&&(0, L.isString)(i)&&(i=(0, yt.lift)(i, (e.depth-1)/(n-1)*.5)), i
            }
            (o, e, n.root.height));
            var r=a.ensureUniqueItemVisual(o.dataIndex, "style");
            (0, L.extend)(r, i)
          }))
        }))
      }
      var Mi={
        color:"fill", borderColor:"stroke"
      }, Li={
        symbol:1, symbolSize:1, symbolKeepAspect:1, legendIcon:1, visualMeta:1, liftZ:1, decal:1
      }, Di=(0, Fe.$r)();
      const Ci=function(e){
        function t(){
          var a=null!==e&&e.apply(this, arguments)||this;
          return a.type=t.type, a
        }
        return(0, d.C6)(t, e), t.prototype.optionUpdated=function(){
          this.currentZLevel=this.get("zlevel", !0), this.currentZ=this.get("z", !0)
        }, t.prototype.getInitialData=function(e, t){
          return(0, c.A)(null, this)
        }, t.prototype.getDataParams=function(t, a, n){
          var o=e.prototype.getDataParams.call(this, t, a);
          return n&&(o.info=Di(n).info), o
        }, t.type="series.custom", t.dependencies=[
          "grid", "polar", "geo", "singleAxis", "calendar"
        ], t.defaultOption={
          coordinateSystem:"cartesian2d", z:2, legendHoverLink:!0, clip:!1
        }, t
      }
      (p.A);
      var Ni=a(984557), Ti=a(979798), Pi=a(476953), Ei=a(768971), Vi=a(36915), Ri=a(309848), zi=a(257625), ki=a(692606), Gi="emphasis", Oi="normal", Bi="blur", Yi="select", Fi=[
        Oi, Gi, Bi, Yi
      ], Wi={
        normal:[
          "itemStyle"
        ], emphasis:[
          Gi, "itemStyle"
        ], blur:[
          Bi, "itemStyle"
        ], select:[
          Yi, "itemStyle"
        ]
      }, Hi={
        normal:[
          "label"
        ], emphasis:[
          Gi, "label"
        ], blur:[
          Bi, "label"
        ], select:[
          Yi, "label"
        ]
      }, Xi=[
        "x", "y"
      ], Ui={
        normal:{
        }, emphasis:{
        }, blur:{
        }, select:{
        }
      }, Zi={
        cartesian2d:Ni.A, geo:Ti.A, single:Pi.A, polar:Ei.A, calendar:Vi.A
      };
      function qi(e){
        return e instanceof y.Ay
      }
      function ji(e){
        return e instanceof at.Ay
      }
      const Qi=function(e){
        function t(){
          var a=null!==e&&e.apply(this, arguments)||this;
          return a.type=t.type, a
        }
        return(0, d.C6)(t, e), t.prototype.render=function(e, t, a, n){
          this._progressiveEls=null;
          var o=this._data, i=e.getData(), r=this.group, l=tr(e, i, t, a);
          o||r.removeAll(), i.diff(o).add((function(t){
            nr(a, null, t, l(t, n), e, r, i)
          })).remove((function(t){
            var a=o.getItemGraphicEl(t);
            a&&(0, zi.h8)(a, Di(a).option, e)
          })).update((function(t, s){
            var u=o.getItemGraphicEl(s);
            nr(a, u, t, l(t, n), e, r, i)
          })).execute();
          var s=e.get("clip", !0)?(0, Gn.Ip)(e.coordinateSystem, !1, e):null;
          s?r.setClipPath(s):r.removeClipPath(), this._data=i
        }, t.prototype.incrementalPrepareRender=function(e, t, a){
          this.group.removeAll(), this._data=null
        }, t.prototype.incrementalRender=function(e, t, a, n, o){
          var i=t.getData(), r=tr(t, i, a, n), l=this._progressiveEls=[
          ];
          function s(e){
            e.isGroup||(e.incremental=!0, e.ensureState("emphasis").hoverLayer=!0)
          }
          for(var u=e.start;
          u<e.end;
          u++){
            var d=nr(null, null, u, r(u, o), t, this.group, i);
            d&&(d.traverse(s), l.push(d))
          }
        }, t.prototype.eachRendered=function(e){
          E.traverseElements(this._progressiveEls||this.group, e)
        }, t.prototype.filterForExposedEvent=function(e, t, a, n){
          var o=t.element;
          if(null==o||a.name===o)return!0;
          for(;
          (a=a.__hostTarget||a.parent)&&a!==this.group;
          )if(a.name===o)return!0;
          return!1
        }, t.type="custom", t
      }
      (w.A);
      function Ji(e){
        var t, a=e.type;
        if("path"===a){
          var n=e.shape, o=null!=n.width&&null!=n.height?{
            x:n.x||0, y:n.y||0, width:n.width, height:n.height
          }
          :null, i=hr(n);
          t=E.makePath(i, null, o, n.layout||"center"), Di(t).customPathData=i
        }
        else if("image"===a)t=new O.Ay({
        }), Di(t).customImagePath=e.style.image;
        else if("text"===a)t=new je.Ay({
        });
        else if("group"===a)t=new m.A;
        else{
          if("compoundPath"===a)throw new Error('"compoundPath" is not supported yet.');
          var r=E.getShapeClass(a);
          if(!r){
            0, (0, Rn.$8)("")
          }
          t=new r
        }
        return Di(t).customGraphicType=a, t.name=e.name, t.z2EmphasisLift=1, t.z2SelectLift=1, t
      }
      function Ki(e, t, a, n, o, i, r){
        (0, ki.$)(t);
        var l=o&&o.normal.cfg;
        l&&t.setTextConfig(l), n&&null==n.transition&&(n.transition=Xi);
        var s=n&&n.style;
        if(s){
          if("text"===t.type){
            var u=s;
            (0, L.hasOwn)(u, "textFill")&&(u.fill=u.textFill), (0, L.hasOwn)(u, "textStroke")&&(u.stroke=u.textStroke)
          }
          var d=void 0, c=qi(t)?s.decal:null;
          e&&c&&(c.dirty=!0, d=(0, gi.w)(c, e)), s.__decalPattern=d
        }
        ji(t)&&(s&&(d=s.__decalPattern)&&(s.decal=d));
        (0, zi.rh)(t, n, i, {
          dataIndex:a, isInit:r, clearStyle:!0
        }), (0, ki.L)(t, n.keyframeAnimation, i)
      }
      function $i(e, t, a, n, o){
        var i=t.isGroup?null:t, r=o&&o[
          e
        ].cfg;
        if(i){
          var l=i.ensureState(e);
          if(!1===n){
            var s=i.getState(e);
            s&&(s.style=null)
          }
          else l.style=n||null;
          r&&(l.textConfig=r), (0, k.DW)(i)
        }
      }
      function er(e, t, a){
        var n=a===Oi, o=n?t:lr(t, a), i=o?o.z2:null;
        null!=i&&((n?e:e.ensureState(a)).z2=i||0)
      }
      function tr(e, t, a, n){
        var o=e.get("renderItem"), i=e.coordinateSystem, r={
        };
        i&&(r=i.prepareCustoms?i.prepareCustoms(i):Zi[
          i.type
        ]
        (i));
        for(var l, s, u=(0, L.defaults)({
          getWidth:n.getWidth, getHeight:n.getHeight, getZr:n.getZr, getDevicePixelRatio:n.getDevicePixelRatio, value:function(e, a){
            return null==a&&(a=l), t.getStore().get(t.getDimensionIndex(e||0), a)
          }, style:function(a, n){
            0;
            null==n&&(n=l);
            var o=t.getItemVisual(n, "style"), i=o&&o.fill, r=o&&o.opacity, s=v(n, Oi).getItemStyle();
            null!=i&&(s.fill=i), null!=r&&(s.opacity=r);
            var u={
              inheritColor:(0, L.isString)(i)?i:"#000"
            }, d=x(n, Oi), c=G.VB(d, null, u, !1, !0);
            c.text=d.getShallow("show")?(0, L.retrieve2)(e.getFormattedLabel(n, Oi), (0, zo.i)(t, n)):null;
            var p=G.sD(d, u, !1);
            return _(a, s), s=(0, Ri.Fs)(s, c, p), a&&S(s, a), s.legacy=!0, s
          }, ordinalRawValue:function(e, a){
            null==a&&(a=l), e=e||0;
            var n=t.getDimensionInfo(e);
            if(!n){
              var o=t.getDimensionIndex(e);
              return o>=0?t.getStore().get(o, a):void 0
            }
            var i=t.get(n.name, a), r=n&&n.ordinalMeta;
            return r?r.categories[
              i
            ]
            :i
          }, styleEmphasis:function(a, n){
            0;
            null==n&&(n=l);
            var o=v(n, Gi).getItemStyle(), i=x(n, Gi), r=G.VB(i, null, null, !0, !0);
            r.text=i.getShallow("show")?(0, L.retrieve3)(e.getFormattedLabel(n, Gi), e.getFormattedLabel(n, Oi), (0, zo.i)(t, n)):null;
            var s=G.sD(i, null, !0);
            return _(a, o), o=(0, Ri.Fs)(o, r, s), a&&S(o, a), o.legacy=!0, o
          }, visual:function(e, a){
            if(null==a&&(a=l), (0, L.hasOwn)(Mi, e)){
              var n=t.getItemVisual(a, "style");
              return n?n[
                Mi[
                  e
                ]
              ]
              :null
            }
            if((0, L.hasOwn)(Li, e))return t.getItemVisual(a, e)
          }, barLayout:function(e){
            if("cartesian2d"===i.type){
              var t=i.getBaseAxis();
              return(0, li.DL)((0, L.defaults)({
                axis:t
              }, e))
            }
          }, currentSeriesIndices:function(){
            return a.getCurrentSeriesIndices()
          }, font:function(e){
            return G.c8(e, a)
          }
        }, r.api||{
        }), d={
          context:{
          }, seriesId:e.id, seriesName:e.name, seriesIndex:e.seriesIndex, coordSys:r.coordSys, dataInsideLength:t.count(), encode:ar(e.getData())
        }, c={
        }, p={
        }, h={
        }, g={
        }, f=0;
        f<Fi.length;
        f++){
          var y=Fi[
            f
          ];
          h[
            y
          ]
          =e.getModel(Wi[
            y
          ]), g[
            y
          ]
          =e.getModel(Hi[
            y
          ])
        }
        function m(e){
          return e===l?s||(s=t.getItemModel(e)):t.getItemModel(e)
        }
        function v(e, a){
          return t.hasItemOption?e===l?c[
            a
          ]
          ||(c[
            a
          ]
          =m(e).getModel(Wi[
            a
          ])):m(e).getModel(Wi[
            a
          ]):h[
            a
          ]
        }
        function x(e, a){
          return t.hasItemOption?e===l?p[
            a
          ]
          ||(p[
            a
          ]
          =m(e).getModel(Hi[
            a
          ])):m(e).getModel(Hi[
            a
          ]):g[
            a
          ]
        }
        return function(e, a){
          return l=e, s=null, c={
          }, p={
          }, o&&o((0, L.defaults)({
            dataIndexInside:e, dataIndex:t.getRawIndex(e), actionType:a?a.type:null
          }, d), u)
        };
        function S(e, t){
          for(var a in t)(0, L.hasOwn)(t, a)&&(e[
            a
          ]
          =t[
            a
          ])
        }
        function _(e, t){
          e&&(e.textFill&&(t.textFill=e.textFill), e.textPosition&&(t.textPosition=e.textPosition))
        }
      }
      function ar(e){
        var t={
        };
        return(0, L.each)(e.dimensions, (function(a){
          var n=e.getDimensionInfo(a);
          if(!n.isExtraCoord){
            var o=n.coordDim;
            (t[
              o
            ]
            =t[
              o
            ]
            ||[
            ])[
              n.coordDimIndex
            ]
            =e.getDimensionIndex(a)
          }
        })), t
      }
      function nr(e, t, a, n, o, i, r){
        if(n){
          var l=or(e, t, a, n, o, i);
          return l&&r.setItemGraphicEl(a, l), l&&(0, k.Lm)(l, n.focus, n.blurScope, n.emphasisDisabled), l
        }
        i.remove(t)
      }
      function or(e, t, a, n, o, i){
        var r=-1, l=t;
        t&&ir(t, n, o)&&(r=(0, L.indexOf)(i.childrenRef(), t), t=null);
        var s, u, d=!t, c=t;
        c?c.clearStates():(c=Ji(n), l&&(s=l, (u=c).copyTransform(s), ji(u)&&ji(s)&&(u.setStyle(s.style), u.z=s.z, u.z2=s.z2, u.zlevel=s.zlevel, u.invisible=s.invisible, u.ignore=s.ignore, qi(u)&&qi(s)&&u.setShape(s.shape)))), !1===n.morph?c.disableMorphing=!0:c.disableMorphing&&(c.disableMorphing=!1), Ui.normal.cfg=Ui.normal.conOpt=Ui.emphasis.cfg=Ui.emphasis.conOpt=Ui.blur.cfg=Ui.blur.conOpt=Ui.select.cfg=Ui.select.conOpt=null, Ui.isLegacy=!1, function(e, t, a, n, o, i){
          if(e.isGroup)return;
          rr(a, null, i), rr(a, Gi, i);
          var r=i.normal.conOpt, l=i.emphasis.conOpt, s=i.blur.conOpt, u=i.select.conOpt;
          if(null!=r||null!=l||null!=u||null!=s){
            var d=e.getTextContent();
            if(!1===r)d&&e.removeTextContent();
            else{
              r=i.normal.conOpt=r||{
                type:"text"
              }, d?d.clearStates():(d=Ji(r), e.setTextContent(d)), Ki(null, d, t, r, null, n, o);
              for(var c=r&&r.style, p=0;
              p<Fi.length;
              p++){
                var h=Fi[
                  p
                ];
                if(h!==Oi){
                  var g=i[
                    h
                  ].conOpt;
                  $i(h, d, 0, sr(r, g, h), null)
                }
              }
              c?d.dirty():d.markRedraw()
            }
          }
        }
        (c, a, n, o, d, Ui), function(e, t, a, n, o){
          var i=a.clipPath;
          if(!1===i)e&&e.getClipPath()&&e.removeClipPath();
          else if(i){
            var r=e.getClipPath();
            r&&ir(r, i, n)&&(r=null), r||(r=Ji(i), e.setClipPath(r)), Ki(null, r, t, i, null, n, o)
          }
        }
        (c, a, n, o, d), Ki(e, c, a, n, Ui, o, d), (0, L.hasOwn)(n, "info")&&(Di(c).info=n.info);
        for(var p=0;
        p<Fi.length;
        p++){
          var h=Fi[
            p
          ];
          if(h!==Oi){
            var g=lr(n, h);
            $i(h, c, 0, sr(n, g, h), Ui)
          }
        }
        return function(e, t, a){
          if(!e.isGroup){
            var n=e, o=a.currentZ, i=a.currentZLevel;
            n.z=o, n.zlevel=i;
            var r=t.z2;
            null!=r&&(n.z2=r||0);
            for(var l=0;
            l<Fi.length;
            l++)er(n, t, Fi[
              l
            ])
          }
        }
        (c, n, o), "group"===n.type&&function(e, t, a, n, o){
          var i=n.children, r=i?i.length:0, l=n.$mergeChildren, s="byName"===l||n.diffChildrenByName, u=!1===l;
          if(!r&&!s&&!u)return;
          if(s)return d={
            api:e, oldChildren:t.children()||[
            ], newChildren:i||[
            ], dataIndex:a, seriesModel:o, group:t
          }, void new qe.A(d.oldChildren, d.newChildren, dr, dr, d).add(cr).update(cr).remove(pr).execute();
          var d;
          u&&t.removeAll();
          for(var c=0;
          c<r;
          c++){
            var p=i[
              c
            ], h=t.childAt(c);
            p?(null==p.ignore&&(p.ignore=!1), or(e, h, a, p, o, t)):h.ignore=!0
          }
          for(var g=t.childCount()-1;
          g>=c;
          g--){
            var f=t.childAt(g);
            ur(t, f, o)
          }
        }
        (e, c, a, n, o), r>=0?i.replaceAt(c, r):i.add(c), c
      }
      function ir(e, t, a){
        var n, o=Di(e), i=t.type, r=t.shape, l=t.style;
        return a.isUniversalTransitionEnabled()||null!=i&&i!==o.customGraphicType||"path"===i&&((n=r)&&((0, L.hasOwn)(n, "pathData")||(0, L.hasOwn)(n, "d")))&&hr(r)!==o.customPathData||"image"===i&&(0, L.hasOwn)(l, "image")&&l.image!==o.customImagePath
      }
      function rr(e, t, a){
        var n=t?lr(e, t):e, o=t?sr(e, n, Gi):e.style, i=e.type, r=n?n.textConfig:null, l=e.textContent, s=l?t?lr(l, t):l:null;
        if(o&&(a.isLegacy||(0, Ri.ex)(o, i, !!r, !!s))){
          a.isLegacy=!0;
          var u=(0, Ri.lH)(o, i, !t);
          !r&&u.textConfig&&(r=u.textConfig), !s&&u.textContent&&(s=u.textContent)
        }
        if(!t&&s){
          var d=s;
          !d.type&&(d.type="text")
        }
        var c=t?a[
          t
        ]
        :a.normal;
        c.cfg=r, c.conOpt=s
      }
      function lr(e, t){
        return t?e?e[
          t
        ]
        :null:e
      }
      function sr(e, t, a){
        var n=t&&t.style;
        return null==n&&a===Gi&&e&&(n=e.styleEmphasis), n
      }
      function ur(e, t, a){
        t&&(0, zi.h8)(t, Di(e).option, a)
      }
      function dr(e, t){
        var a=e&&e.name;
        return null!=a?a:"e\0\0"+t
      }
      function cr(e, t){
        var a=this.context, n=null!=e?a.newChildren[
          e
        ]
        :null, o=null!=t?a.oldChildren[
          t
        ]
        :null;
        or(a.api, o, a.dataIndex, n, a.seriesModel, a.group)
      }
      function pr(e){
        var t=this.context, a=t.oldChildren[
          e
        ];
        a&&(0, zi.h8)(a, Di(a).option, t.seriesModel)
      }
      function hr(e){
        return e&&(e.pathData||e.d)
      }
      var gr=a(545620), fr=a(384883), yr=a(782139), mr=a(222379), vr=a(440830), xr=a(925384), Sr=a(606641), _r=a(746524), br=a(966216), Ir=a(374064), wr=a(742751), Ar=a(422158), Mr=a(842998), Lr=a(839838), Dr=a(663885), Cr=a(145967), Nr=a(768667), Tr=a(535099), Pr=a(728540), Er=a(267113), Vr=a(468781), Rr=a(670816), zr=a(44934), kr=a(376302), Gr=a(697850), Or=a(959442);
      function Br(e){
        return(0, L.isArray)(e[
          0
        ])
      }
      function Yr(e, t){
        for(var a=[
        ], n=e.length, o=0;
        o<n;
        o++)a.push({
          one:e[
            o
          ], many:[
          ]
        });
        for(o=0;
        o<t.length;
        o++){
          var i=t[
            o
          ].length, r=void 0;
          for(r=0;
          r<i;
          r++)a[
            r%n
          ].many.push(t[
            o
          ]
          [
            r
          ])
        }
        var l=0;
        for(o=n-1;
        o>=0;
        o--)if(!a[
          o
        ].many.length){
          var s=a[
            l
          ].many;
          if(s.length<=1){
            if(!l)return a;
            l=0
          }
          i=s.length;
          var u=Math.ceil(i/2);
          a[
            o
          ].many=s.slice(u, i), a[
            l
          ].many=s.slice(0, u), l++
        }
        return a
      }
      var Fr={
        clone:function(e){
          for(var t=[
          ], a=1-Math.pow(1-e.path.style.opacity, 1/e.count), n=0;
          n<e.count;
          n++){
            var o=(0, Or.rR)(e.path);
            o.setStyle("opacity", a), t.push(o)
          }
          return t
        }, split:null
      };
      function Wr(e, t, a, n, o, i){
        if(e.length&&t.length){
          var r=(0, z.Jw)("update", n, o);
          if(r&&r.duration>0){
            var l, s, u=n.getModel("universalTransition").get("delay"), d=Object.assign({
              setToFinal:!0
            }, r);
            Br(e)&&(l=e, s=t), Br(t)&&(l=t, s=e);
            for(var c=l?l===e:e.length>t.length, p=l?Yr(s, l):Yr(c?t:e, [
              c?e:t
            ]), h=0, g=0;
            g<p.length;
            g++)h+=p[
              g
            ].many.length;
            var f=0;
            for(g=0;
            g<p.length;
            g++)y(p[
              g
            ], c, f, h), f+=p[
              g
            ].many.length
          }
        }
        function y(e, t, n, o, r){
          var l=e.many, s=e.one;
          if(1!==l.length||r)for(var c=(0, L.defaults)({
            dividePath:Fr[
              a
            ], individualDelay:u&&function(e, t, a, i){
              return u(e+n, o)
            }
          }, d), p=t?(0, Gr.Gw)(l, s, c):(0, Gr.AG)(s, l, c), h=p.fromIndividuals, g=p.toIndividuals, f=h.length, m=0;
          m<f;
          m++){
            S=u?(0, L.defaults)({
              delay:u(m, f)
            }, d):d;
            i(h[
              m
            ], g[
              m
            ], t?l[
              m
            ]
            :e.one, t?e.one:l[
              m
            ], S)
          }
          else{
            var v=t?l[
              0
            ]
            :s, x=t?s:l[
              0
            ];
            if((0, Gr.AN)(v))y({
              many:[
                v
              ], one:x
            }, !0, n, o, !0);
            else{
              var S=u?(0, L.defaults)({
                delay:u(n, o)
              }, d):d;
              (0, Gr.mz)(v, x, S), i(v, x, v, x, S)
            }
          }
        }
      }
      function Hr(e){
        if(!e)return[
        ];
        if((0, L.isArray)(e)){
          for(var t=[
          ], a=0;
          a<e.length;
          a++)t.push(Hr(e[
            a
          ]));
          return t
        }
        var n=[
        ];
        return e.traverse((function(e){
          e instanceof y.Ay&&!e.disableMorphing&&!e.invisible&&!e.ignore&&n.push(e)
        })), n
      }
      var Xr=(0, Fe.$r)();
      function Ur(e, t, a, n){
        var o=function(e, t){
          for(var a=e.dimensions, n=0;
          n<a.length;
          n++){
            var o=e.getDimensionInfo(a[
              n
            ]);
            if(o&&0===o.otherDims[
              t
            ])return a[
              n
            ]
          }
        }
        (e, n?"itemChildGroupId":"itemGroupId");
        if(o)return function(e, t, a){
          var n=e.getDimensionInfo(a), o=n&&n.ordinalMeta;
          if(n){
            var i=e.get(n.name, t);
            return o&&o.categories[
              i
            ]
            ||i+""
          }
        }
        (e, t, o);
        var i=e.getRawDataItem(t), r=n?"childGroupId":"groupId";
        return i&&i[
          r
        ]
        ?i[
          r
        ]
        +"":n?void 0:a||e.getId(t)
      }
      function Zr(e){
        var t=[
        ];
        return(0, L.each)(e, (function(e){
          var a=e.data, n=e.dataGroupId;
          if(!(a.count()>1e4))for(var o=a.getIndices(), i=0;
          i<o.length;
          i++)t.push({
            data:a, groupId:Ur(a, i, n, !1), childGroupId:Ur(a, i, n, !0), divide:e.divide, dataIndex:i
          })
        })), t
      }
      function qr(e, t, a){
        e.traverse((function(e){
          e instanceof y.Ay&&(0, z.LW)(e, {
            style:{
              opacity:0
            }
          }, t, {
            dataIndex:a, isFrom:!0
          })
        }))
      }
      function jr(e){
        if(e.parent){
          var t=e.getComputedTransform();
          e.setLocalTransform(t), e.parent.remove(e)
        }
      }
      function Qr(e){
        e.stopAnimation(), e.isGroup&&e.traverse((function(e){
          e.stopAnimation()
        }))
      }
      function Jr(e, t, a){
        var n=Zr(e), o=Zr(t);
        function i(e, t, a, n, o){
          (a||e)&&t.animateFrom({
            style:a&&a!==e?(0, L.extend)((0, L.extend)({
            }, a.style), e.style):e.style
          }, o)
        }
        var r=!1, l=0, s=(0, L.createHashMap)(), u=(0, L.createHashMap)();
        n.forEach((function(e){
          e.groupId&&s.set(e.groupId, !0), e.childGroupId&&u.set(e.childGroupId, !0)
        }));
        for(var d=0;
        d<o.length;
        d++){
          var c=o[
            d
          ].groupId;
          if(u.get(c)){
            l=1;
            break
          }
          var p=o[
            d
          ].childGroupId;
          if(p&&s.get(p)){
            l=2;
            break
          }
        }
        function h(e, t){
          return function(a){
            var n=a.data, o=a.dataIndex;
            return t?n.getId(o):e?1===l?a.childGroupId:a.groupId:2===l?a.childGroupId:a.groupId
          }
        }
        var g=function(e, t){
          var a=e.length;
          if(a!==t.length)return!1;
          for(var n=0;
          n<a;
          n++){
            var o=e[
              n
            ], i=t[
              n
            ];
            if(o.data.getId(o.dataIndex)!==i.data.getId(i.dataIndex))return!1
          }
          return!0
        }
        (n, o), f={
        };
        if(!g)for(d=0;
        d<o.length;
        d++){
          var m=o[
            d
          ], v=m.data.getItemGraphicEl(m.dataIndex);
          v&&(f[
            v.id
          ]
          =!0)
        }
        function x(e, t){
          var a=n[
            t
          ], l=o[
            e
          ], s=l.data.hostModel, u=a.data.getItemGraphicEl(a.dataIndex), d=l.data.getItemGraphicEl(l.dataIndex);
          u!==d?u&&f[
            u.id
          ]
          ||d&&(Qr(d), u?(Qr(u), jr(u), r=!0, Wr(Hr(u), Hr(d), l.divide, s, e, i)):qr(d, s, e)):d&&function(e, t, a){
            var n=(0, z.Jw)("update", a, t);
            n&&e.traverse((function(e){
              if(e instanceof at.Ay){
                var t=(0, z.Xr)(e);
                t&&e.animateFrom({
                  style:t
                }, n)
              }
            }))
          }
          (d, l.dataIndex, s)
        }
        new qe.A(n, o, h(!0, g), h(!1, g), null, "multiple").update(x).updateManyToOne((function(e, t){
          var a=o[
            e
          ], l=a.data, s=l.hostModel, u=l.getItemGraphicEl(a.dataIndex), d=(0, L.filter)((0, L.map)(t, (function(e){
            return n[
              e
            ].data.getItemGraphicEl(n[
              e
            ].dataIndex)
          })), (function(e){
            return e&&e!==u&&!f[
              e.id
            ]
          }));
          u&&(Qr(u), d.length?((0, L.each)(d, (function(e){
            Qr(e), jr(e)
          })), r=!0, Wr(Hr(d), Hr(u), a.divide, s, e, i)):qr(u, s, a.dataIndex))
        })).updateOneToMany((function(e, t){
          var a=n[
            t
          ], l=a.data.getItemGraphicEl(a.dataIndex);
          if(!l||!f[
            l.id
          ]){
            var s=(0, L.filter)((0, L.map)(e, (function(e){
              return o[
                e
              ].data.getItemGraphicEl(o[
                e
              ].dataIndex)
            })), (function(e){
              return e&&e!==l
            })), u=o[
              e[
                0
              ]
            ].data.hostModel;
            s.length&&((0, L.each)(s, (function(e){
              return Qr(e)
            })), l?(Qr(l), jr(l), r=!0, Wr(Hr(l), Hr(s), a.divide, u, e[
              0
            ], i)):(0, L.each)(s, (function(t){
              return qr(t, u, e[
                0
              ])
            })))
          }
        })).updateManyToMany((function(e, t){
          new qe.A(t, e, (function(e){
            return n[
              e
            ].data.getId(n[
              e
            ].dataIndex)
          }), (function(e){
            return o[
              e
            ].data.getId(o[
              e
            ].dataIndex)
          })).update((function(a, n){
            x(e[
              a
            ], t[
              n
            ])
          })).execute()
        })).execute(), r&&(0, L.each)(t, (function(e){
          var t=e.data.hostModel, n=t&&a.getViewOfSeriesModel(t), o=(0, z.Jw)("update", t, 0);
          n&&t.isAnimationEnabled()&&o&&o.duration>0&&n.group.traverse((function(e){
            e instanceof y.Ay&&!e.animators.length&&e.animateFrom({
              style:{
                opacity:0
              }
            }, o)
          }))
        }))
      }
      function Kr(e){
        var t=e.getModel("universalTransition").get("seriesKey");
        return t||e.id
      }
      function $r(e){
        return(0, L.isArray)(e)?e.sort().join(","):e
      }
      function el(e){
        if(e.hostModel)return e.hostModel.getModel("universalTransition").get("divideShape")
      }
      function tl(e, t){
        for(var a=0;
        a<e.length;
        a++){
          if(null!=t.seriesIndex&&t.seriesIndex===e[
            a
          ].seriesIndex||null!=t.seriesId&&t.seriesId===e[
            a
          ].id)return a
        }
      }
      var al=a(535278);
      (0, n.Y)([
        i.a
      ]), (0, n.Y)([
        r.a
      ]), (0, n.Y)([
        l.a, s.a, u.a, function(e){
          (0, n.Y)(M.a), e.registerSeriesModel(h), e.registerChartView(A), e.registerLayout((0, I.A)("scatter"))
        }, function(e){
          (0, n.Y)(X.a), e.registerChartView(B), e.registerSeriesModel(H), e.registerLayout(D), e.registerProcessor((0, T.A)("radar")), e.registerPreprocessor(P)
        }, function(e){
          (0, n.Y)(te.a), e.registerChartView(q), e.registerSeriesModel(J), e.registerLayout($), e.registerProcessor(e.PRIORITY.PROCESSOR.STATISTIC, K), (0, ee.I)("map", e.registerAction)
        }, function(e){
          e.registerChartView(Ce), e.registerSeriesModel(ze), e.registerLayout(Ge), e.registerVisual(Oe), function(e){
            e.registerAction({
              type:"treeExpandAndCollapse", event:"treeExpandAndCollapse", update:"update"
            }, (function(e, t){
              t.eachComponent({
                mainType:"series", subType:"tree", query:e
              }, (function(t){
                var a=e.dataIndex, n=t.getData().tree.getNodeByDataIndex(a);
                n.isExpand=!n.isExpand
              }))
            })), e.registerAction({
              type:"treeRoam", event:"treeRoam", update:"none"
            }, (function(e, t, a){
              t.eachComponent({
                mainType:"series", subType:"tree", query:e
              }, (function(t){
                var n=t.coordinateSystem, o=(0, Be.f)(n, e, void 0, a);
                t.setCenter&&t.setCenter(o.center), t.setZoom&&t.setZoom(o.zoom)
              }))
            }))
          }
          (e)
        }, function(e){
          e.registerSeriesModel(Ue), e.registerChartView(gt), e.registerVisual(vt), e.registerLayout(Tt), function(e){
            for(var t=0;
            t<Ye.length;
            t++)e.registerAction({
              type:Ye[
                t
              ], update:"updateView"
            }, L.noop);
            e.registerAction({
              type:"treemapRootToNode", update:"updateView"
            }, (function(e, t){
              t.eachComponent({
                mainType:"series", subType:"treemap", query:e
              }, (function(t, a){
                var n=Pe(e, [
                  "treemapZoomToNode", "treemapRootToNode"
                ], t);
                if(n){
                  var o=t.getViewRoot();
                  o&&(e.direction=Ve(o, n.node)?"rollUp":"drillDown"), t.resetViewRoot(n.node)
                }
              }))
            }))
          }
          (e)
        }, function(e){
          e.registerChartView(Sa), e.registerSeriesModel(Da), e.registerProcessor(kt), e.registerVisual(Gt), e.registerVisual(Bt), e.registerLayout(Jt), e.registerLayout(e.PRIORITY.VISUAL.POST_CHART_LAYOUT, ia), e.registerLayout(la), e.registerCoordinateSystem("graphView", {
            dimensions:ye.A.dimensions, create:sa
          }), e.registerAction({
            type:"focusNodeAdjacency", event:"focusNodeAdjacency", update:"series:focusNodeAdjacency"
          }, L.noop), e.registerAction({
            type:"unfocusNodeAdjacency", event:"unfocusNodeAdjacency", update:"series:unfocusNodeAdjacency"
          }, L.noop), e.registerAction(Ca, (function(e, t, a){
            t.eachComponent({
              mainType:"series", query:e
            }, (function(t){
              var n=t.coordinateSystem, o=(0, Be.f)(n, e, void 0, a);
              t.setCenter&&t.setCenter(o.center), t.setZoom&&t.setZoom(o.zoom)
            }))
          }))
        }, function(e){
          e.registerChartView(ka), e.registerSeriesModel(Ga)
        }, function(e){
          e.registerChartView(Wa), e.registerSeriesModel(Ha), e.registerLayout(Xa), e.registerProcessor((0, T.A)("funnel"))
        }, function(e){
          (0, n.Y)(tn.a), e.registerChartView(Qa), e.registerSeriesModel(Ka), e.registerVisual(e.PRIORITY.VISUAL.BRUSH, en)
        }, function(e){
          e.registerChartView(ln), e.registerSeriesModel(sn), e.registerLayout(un), e.registerVisual(_n), e.registerAction({
            type:"dragNode", event:"dragnode", update:"update"
          }, (function(e, t){
            t.eachComponent({
              mainType:"series", subType:"sankey", query:e
            }, (function(t){
              t.setNodePosition(e.dataIndex, [
                e.localX, e.localY
              ])
            }))
          }))
        }, function(e){
          e.registerSeriesModel(An), e.registerChartView(Pn), e.registerLayout(Vn), e.registerTransform(kn)
        }, function(e){
          e.registerChartView(ro), e.registerSeriesModel(so), e.registerPreprocessor(uo), e.registerVisual(Zn), e.registerLayout(ho)
        }, function(e){
          e.registerChartView(yo), e.registerSeriesModel(mo), e.registerLayout((0, I.A)("effectScatter"))
        }, function(e){
          e.registerChartView(Do), e.registerSeriesModel(Po), e.registerLayout(Lo), e.registerVisual(Vo)
        }, Ro.a, function(e){
          e.registerChartView(ni), e.registerSeriesModel(ri), e.registerLayout(e.PRIORITY.VISUAL.LAYOUT, (0, L.curry)(li.Zp, "pictorialBar")), e.registerLayout(e.PRIORITY.VISUAL.PROGRESSIVE_LAYOUT, (0, li.KF)("pictorialBar"))
        }, function(e){
          e.registerChartView(ui), e.registerSeriesModel(di), e.registerLayout(ci), e.registerProcessor((0, T.A)("themeRiver"))
        }, function(e){
          e.registerChartView(xi), e.registerSeriesModel(_i), e.registerLayout((0, L.curry)(Ii, "sunburst")), e.registerProcessor((0, L.curry)(T.A, "sunburst")), e.registerVisual(Ai), function(e){
            e.registerAction({
              type:mi, update:"updateView"
            }, (function(e, t){
              t.eachComponent({
                mainType:"series", subType:"sunburst", query:e
              }, (function(t, a){
                var n=Pe(e, [
                  mi
                ], t);
                if(n){
                  var o=t.getViewRoot();
                  o&&(e.direction=Ve(o, n.node)?"rollUp":"drillDown"), t.resetViewRoot(n.node)
                }
              }))
            })), e.registerAction({
              type:vi, update:"none"
            }, (function(e, t, a){
              e=(0, L.extend)({
              }, e), t.eachComponent({
                mainType:"series", subType:"sunburst", query:e
              }, (function(t){
                var a=Pe(e, [
                  vi
                ], t);
                a&&(e.dataIndex=a.node.dataIndex)
              })), a.dispatchAction((0, L.extend)(e, {
                type:"highlight"
              }))
            })), e.registerAction({
              type:"sunburstUnhighlight", update:"updateView"
            }, (function(e, t, a){
              e=(0, L.extend)({
              }, e), a.dispatchAction((0, L.extend)(e, {
                type:"downplay"
              }))
            }))
          }
          (e)
        }, function(e){
          e.registerChartView(Qi), e.registerSeriesModel(Ci)
        }
      ]), (0, n.Y)(gr.a), (0, n.Y)(fr.a), (0, n.Y)(te.a), (0, n.Y)(yr.a), (0, n.Y)(tn.a), (0, n.Y)(mr.a), (0, n.Y)(vr.a), (0, n.Y)(xr.a), (0, n.Y)(Sr.a), (0, n.Y)(_r.a), (0, n.Y)(br.a), (0, n.Y)(Ir.a), (0, n.Y)(wr.a), (0, n.Y)(Ar.a), (0, n.Y)(Mr.a), (0, n.Y)(Lr.a), (0, n.Y)(Dr.a), (0, n.Y)(Cr.a), (0, n.Y)(Nr.a), (0, n.Y)(Tr.a), (0, n.Y)(Pr.a), (0, n.Y)(Er.a), (0, n.Y)(Vr.a), (0, n.Y)(Rr.a), (0, n.Y)(zr.a), (0, n.Y)(kr.a), (0, n.Y)((function(e){
        e.registerUpdateLifecycle("series:beforeupdate", (function(e, t, a){
          (0, L.each)((0, Fe.qB)(a.seriesTransition), (function(e){
            (0, L.each)((0, Fe.qB)(e.to), (function(e){
              for(var t=a.updatedSeries, n=0;
              n<t.length;
              n++)(null!=e.seriesIndex&&e.seriesIndex===t[
                n
              ].seriesIndex||null!=e.seriesId&&e.seriesId===t[
                n
              ].id)&&(t[
                n
              ]
              [
                p.U
              ]
              =!0)
            }))
          }))
        })), e.registerUpdateLifecycle("series:transition", (function(e, t, a){
          var n=Xr(t);
          if(n.oldSeries&&a.updatedSeries&&a.optionChanged){
            var o=a.seriesTransition;
            if(o)(0, L.each)((0, Fe.qB)(o), (function(e){
              !function(e, t, a, n){
                var o=[
                ], i=[
                ];
                (0, L.each)((0, Fe.qB)(e.from), (function(e){
                  var a=tl(t.oldSeries, e);
                  a>=0&&o.push({
                    dataGroupId:t.oldDataGroupIds[
                      a
                    ], data:t.oldData[
                      a
                    ], divide:el(t.oldData[
                      a
                    ]), groupIdDim:e.dimension
                  })
                })), (0, L.each)((0, Fe.qB)(e.to), (function(e){
                  var n=tl(a.updatedSeries, e);
                  if(n>=0){
                    var o=a.updatedSeries[
                      n
                    ].getData();
                    i.push({
                      dataGroupId:t.oldDataGroupIds[
                        n
                      ], data:o, divide:el(o), groupIdDim:e.dimension
                    })
                  }
                })), o.length>0&&i.length>0&&Jr(o, i, n)
              }
              (e, n, a, t)
            }));
            else{
              var i=function(e, t){
                var a=(0, L.createHashMap)(), n=(0, L.createHashMap)(), o=(0, L.createHashMap)();
                return(0, L.each)(e.oldSeries, (function(t, a){
                  var i=e.oldDataGroupIds[
                    a
                  ], r=e.oldData[
                    a
                  ], l=Kr(t), s=$r(l);
                  n.set(s, {
                    dataGroupId:i, data:r
                  }), (0, L.isArray)(l)&&(0, L.each)(l, (function(e){
                    o.set(e, {
                      key:s, dataGroupId:i, data:r
                    })
                  }))
                })), (0, L.each)(t.updatedSeries, (function(e){
                  if(e.isUniversalTransitionEnabled()&&e.isAnimationEnabled()){
                    var t=e.get("dataGroupId"), i=e.getData(), r=Kr(e), l=$r(r), s=n.get(l);
                    if(s)a.set(l, {
                      oldSeries:[
                        {
                          dataGroupId:s.dataGroupId, divide:el(s.data), data:s.data
                        }
                      ], newSeries:[
                        {
                          dataGroupId:t, divide:el(i), data:i
                        }
                      ]
                    });
                    else if((0, L.isArray)(r)){
                      var u=[
                      ];
                      (0, L.each)(r, (function(e){
                        var t=n.get(e);
                        t.data&&u.push({
                          dataGroupId:t.dataGroupId, divide:el(t.data), data:t.data
                        })
                      })), u.length&&a.set(l, {
                        oldSeries:u, newSeries:[
                          {
                            dataGroupId:t, data:i, divide:el(i)
                          }
                        ]
                      })
                    }
                    else{
                      var d=o.get(r);
                      if(d){
                        var c=a.get(d.key);
                        c||(c={
                          oldSeries:[
                            {
                              dataGroupId:d.dataGroupId, data:d.data, divide:el(d.data)
                            }
                          ], newSeries:[
                          ]
                        }, a.set(d.key, c)), c.newSeries.push({
                          dataGroupId:t, data:i, divide:el(i)
                        })
                      }
                    }
                  }
                })), a
              }
              (n, a);
              (0, L.each)(i.keys(), (function(e){
                var a=i.get(e);
                Jr(a.oldSeries, a.newSeries, t)
              }))
            }
            (0, L.each)(a.updatedSeries, (function(e){
              e[
                p.U
              ]
              &&(e[
                p.U
              ]
              =!1)
            }))
          }
          for(var r=e.getSeries(), l=n.oldSeries=[
          ], s=n.oldDataGroupIds=[
          ], u=n.oldData=[
          ], d=0;
          d<r.length;
          d++){
            var c=r[
              d
            ].getData();
            c.count()<1e4&&(l.push(r[
              d
            ]), s.push(r[
              d
            ].get("dataGroupId")), u.push(c))
          }
        }))
      })), (0, n.Y)(al._)
    }, 532182:(e, t, a)=>{
      a.d(t, {
        A:()=>A
      });
      var n=a(274179), o=a(498026), i=a(983509), r=a(62103), l=a(982861), s=a(853849), u=a(467065), d=l.A.prototype, c=s.A.prototype, p=function(){
        this.x1=0, this.y1=0, this.x2=0, this.y2=0, this.percent=1
      };
      !function(e){
        function t(){
          return null!==e&&e.apply(this, arguments)||this
        }
        (0, n.C6)(t, e)
      }
      (p);
      function h(e){
        return isNaN(+e.cpx1)||isNaN(+e.cpy1)
      }
      const g=function(e){
        function t(t){
          var a=e.call(this, t)||this;
          return a.type="ec-line", a
        }
        return(0, n.C6)(t, e), t.prototype.getDefaultStyle=function(){
          return{
            stroke:"#000", fill:null
          }
        }, t.prototype.getDefaultShape=function(){
          return new p
        }, t.prototype.buildPath=function(e, t){
          h(t)?d.buildPath.call(this, e, t):c.buildPath.call(this, e, t)
        }, t.prototype.pointAt=function(e){
          return h(this.shape)?d.pointAt.call(this, e):c.pointAt.call(this, e)
        }, t.prototype.tangentAt=function(e){
          var t=this.shape, a=h(t)?[
            t.x2-t.x1, t.y2-t.y1
          ]
          :c.tangentAt.call(this, e);
          return i.normalize(a, a)
        }, t
      }
      (u.Ay);
      var f=a(905638), y=a(843870), m=a(34833), v=a(289632), x=a(624326), S=[
        "fromSymbol", "toSymbol"
      ];
      function _(e){
        return"_"+e+"Type"
      }
      function b(e, t, a){
        var n=t.getItemVisual(a, e);
        if(!n||"none"===n)return n;
        var o=t.getItemVisual(a, e+"Size"), i=t.getItemVisual(a, e+"Rotate"), l=t.getItemVisual(a, e+"Offset"), s=t.getItemVisual(a, e+"KeepAspect"), u=r.xU(o);
        return n+u+r.hV(l||0, u)+(i||"")+(s||"")
      }
      function I(e, t, a){
        var n=t.getItemVisual(a, e);
        if(n&&"none"!==n){
          var o=t.getItemVisual(a, e+"Size"), i=t.getItemVisual(a, e+"Rotate"), l=t.getItemVisual(a, e+"Offset"), s=t.getItemVisual(a, e+"KeepAspect"), u=r.xU(o), d=r.hV(l||0, u), c=r.v5(n, -u[
            0
          ]
          /2+d[
            0
          ], -u[
            1
          ]
          /2+d[
            1
          ], u[
            0
          ], u[
            1
          ], null, s);
          return c.__specifiedRotation=null==i||isNaN(i)?void 0:+i*Math.PI/180||0, c.name=e, c
        }
      }
      function w(e, t){
        e.x1=t[
          0
        ]
        [
          0
        ], e.y1=t[
          0
        ]
        [
          1
        ], e.x2=t[
          1
        ]
        [
          0
        ], e.y2=t[
          1
        ]
        [
          1
        ], e.percent=1;
        var a=t[
          2
        ];
        a?(e.cpx1=a[
          0
        ], e.cpy1=a[
          1
        ]):(e.cpx1=NaN, e.cpy1=NaN)
      }
      const A=function(e){
        function t(t, a, n){
          var o=e.call(this)||this;
          return o._createLine(t, a, n), o
        }
        return(0, n.C6)(t, e), t.prototype._createLine=function(e, t, a){
          var n=e.hostModel, i=function(e){
            var t=new g({
              name:"line", subPixelOptimize:!0
            });
            return w(t.shape, e), t
          }
          (e.getItemLayout(t));
          i.shape.percent=0, f.LW(i, {
            shape:{
              percent:1
            }
          }, n, t), this.add(i), (0, o.each)(S, (function(a){
            var n=I(a, e, t);
            this.add(n), this[
              _(a)
            ]
            =b(a, e, t)
          }), this), this._updateCommonStl(e, t, a)
        }, t.prototype.updateData=function(e, t, a){
          var n=e.hostModel, i=this.childOfName("line"), r=e.getItemLayout(t), l={
            shape:{
            }
          };
          w(l.shape, r), f.oi(i, l, n, t), (0, o.each)(S, (function(a){
            var n=b(a, e, t), o=_(a);
            if(this[
              o
            ]
            !==n){
              this.remove(this.childOfName(a));
              var i=I(a, e, t);
              this.add(i)
            }
            this[
              o
            ]
            =n
          }), this), this._updateCommonStl(e, t, a)
        }, t.prototype.getLinePath=function(){
          return this.childAt(0)
        }, t.prototype._updateCommonStl=function(e, t, a){
          var n=e.hostModel, i=this.childOfName("line"), r=a&&a.emphasisLineStyle, l=a&&a.blurLineStyle, s=a&&a.selectLineStyle, u=a&&a.labelStatesModels, d=a&&a.emphasisDisabled, c=a&&a.focus, p=a&&a.blurScope;
          if(!a||e.hasItemOption){
            var h=e.getItemModel(t), g=h.getModel("emphasis");
            r=g.getModel("lineStyle").getLineStyle(), l=h.getModel([
              "blur", "lineStyle"
            ]).getLineStyle(), s=h.getModel([
              "select", "lineStyle"
            ]).getLineStyle(), d=g.get("disabled"), c=g.get("focus"), p=g.get("blurScope"), u=(0, v.lx)(h)
          }
          var f=e.getItemVisual(t, "style"), y=f.stroke;
          i.useStyle(f), i.style.fill=null, i.style.strokeNoScale=!0, i.ensureState("emphasis").style=r, i.ensureState("blur").style=l, i.ensureState("select").style=s, (0, o.each)(S, (function(e){
            var t=this.childOfName(e);
            if(t){
              t.setColor(y), t.style.opacity=f.opacity;
              for(var a=0;
              a<m.BV.length;
              a++){
                var n=m.BV[
                  a
                ], o=i.getState(n);
                if(o){
                  var r=o.style||{
                  }, l=t.ensureState(n), s=l.style||(l.style={
                  });
                  null!=r.stroke&&(s[
                    t.__isEmptyBrush?"stroke":"fill"
                  ]
                  =r.stroke), null!=r.opacity&&(s.opacity=r.opacity)
                }
              }
              t.markRedraw()
            }
          }), this);
          var _=n.getRawValue(t);
          (0, v.qM)(this, u, {
            labelDataIndex:t, labelFetcher:{
              getFormattedLabel:function(t, a){
                return n.getFormattedLabel(t, a, e.dataType)
              }
            }, inheritColor:y||"#000", defaultOpacity:f.opacity, defaultText:(null==_?e.getName(t):isFinite(_)?(0, x.LI)(_):_)+""
          });
          var b=this.getTextContent();
          if(b){
            var I=u.normal;
            b.__align=b.style.align, b.__verticalAlign=b.style.verticalAlign, b.__position=I.get("position")||"middle";
            var w=I.get("distance");
            (0, o.isArray)(w)||(w=[
              w, w
            ]), b.__labelDistance=w
          }
          this.setTextConfig({
            position:null, local:!0, inside:!1
          }), (0, m.Lm)(this, c, p, d)
        }, t.prototype.highlight=function(){
          (0, m.HY)(this)
        }, t.prototype.downplay=function(){
          (0, m.SD)(this)
        }, t.prototype.updateLayout=function(e, t){
          this.setLinePoints(e.getItemLayout(t))
        }, t.prototype.setLinePoints=function(e){
          var t=this.childOfName("line");
          w(t.shape, e), t.dirty()
        }, t.prototype.beforeUpdate=function(){
          var e=this, t=e.childOfName("fromSymbol"), a=e.childOfName("toSymbol"), n=e.getTextContent();
          if(t||a||n&&!n.ignore){
            for(var o=1, r=this.parent;
            r;
            )r.scaleX&&(o/=r.scaleX), r=r.parent;
            var l=e.childOfName("line");
            if(this.__dirty||l.__dirty){
              var s=l.shape.percent, u=l.pointAt(0), d=l.pointAt(s), c=i.sub([
              ], d, u);
              if(i.normalize(c, c), t&&(t.setPosition(u), w(t, 0), t.scaleX=t.scaleY=o*s, t.markRedraw()), a&&(a.setPosition(d), w(a, 1), a.scaleX=a.scaleY=o*s, a.markRedraw()), n&&!n.ignore){
                n.x=n.y=0, n.originX=n.originY=0;
                var p=void 0, h=void 0, g=n.__labelDistance, f=g[
                  0
                ]
                *o, y=g[
                  1
                ]
                *o, m=s/2, v=l.tangentAt(m), x=[
                  v[
                    1
                  ], -v[
                    0
                  ]
                ], S=l.pointAt(m);
                x[
                  1
                ]
                >0&&(x[
                  0
                ]
                =-x[
                  0
                ], x[
                  1
                ]
                =-x[
                  1
                ]);
                var _=v[
                  0
                ]
                <0?-1:1;
                if("start"!==n.__position&&"end"!==n.__position){
                  var b=-Math.atan2(v[
                    1
                  ], v[
                    0
                  ]);
                  d[
                    0
                  ]
                  <u[
                    0
                  ]
                  &&(b=Math.PI+b), n.rotation=b
                }
                var I=void 0;
                switch(n.__position){
                  case"insideStartTop":case"insideMiddleTop":case"insideEndTop":case"middle":I=-y, h="bottom";
                  break;
                  case"insideStartBottom":case"insideMiddleBottom":case"insideEndBottom":I=y, h="top";
                  break;
                  default:I=0, h="middle"
                }
                switch(n.__position){
                  case"end":n.x=c[
                    0
                  ]
                  *f+d[
                    0
                  ], n.y=c[
                    1
                  ]
                  *y+d[
                    1
                  ], p=c[
                    0
                  ]
                  >.8?"left":c[
                    0
                  ]
                  <-.8?"right":"center", h=c[
                    1
                  ]
                  >.8?"top":c[
                    1
                  ]
                  <-.8?"bottom":"middle";
                  break;
                  case"start":n.x=-c[
                    0
                  ]
                  *f+u[
                    0
                  ], n.y=-c[
                    1
                  ]
                  *y+u[
                    1
                  ], p=c[
                    0
                  ]
                  >.8?"right":c[
                    0
                  ]
                  <-.8?"left":"center", h=c[
                    1
                  ]
                  >.8?"bottom":c[
                    1
                  ]
                  <-.8?"top":"middle";
                  break;
                  case"insideStartTop":case"insideStart":case"insideStartBottom":n.x=f*_+u[
                    0
                  ], n.y=u[
                    1
                  ]
                  +I, p=v[
                    0
                  ]
                  <0?"right":"left", n.originX=-f*_, n.originY=-I;
                  break;
                  case"insideMiddleTop":case"insideMiddle":case"insideMiddleBottom":case"middle":n.x=S[
                    0
                  ], n.y=S[
                    1
                  ]
                  +I, p="center", n.originY=-I;
                  break;
                  case"insideEndTop":case"insideEnd":case"insideEndBottom":n.x=-f*_+d[
                    0
                  ], n.y=d[
                    1
                  ]
                  +I, p=v[
                    0
                  ]
                  >=0?"right":"left", n.originX=f*_, n.originY=-I
                }
                n.scaleX=n.scaleY=o, n.setStyle({
                  verticalAlign:n.__verticalAlign||h, align:n.__align||p
                })
              }
            }
          }
          function w(e, t){
            var a=e.__specifiedRotation;
            if(null==a){
              var n=l.tangentAt(t);
              e.attr("rotation", (1===t?-1:1)*Math.PI/2-Math.atan2(n[
                1
              ], n[
                0
              ]))
            }
            else e.attr("rotation", a)
          }
        }, t
      }
      (y.A)
    }, 564380:(e, t, a)=>{
      a.d(t, {
        A:()=>d
      });
      var n=a(843870), o=a(543199), i=a(532182), r=a(289632);
      function l(e){
        var t=e.hostModel, a=t.getModel("emphasis");
        return{
          lineStyle:t.getModel("lineStyle").getLineStyle(), emphasisLineStyle:a.getModel([
            "lineStyle"
          ]).getLineStyle(), blurLineStyle:t.getModel([
            "blur", "lineStyle"
          ]).getLineStyle(), selectLineStyle:t.getModel([
            "select", "lineStyle"
          ]).getLineStyle(), emphasisDisabled:a.get("disabled"), blurScope:a.get("blurScope"), focus:a.get("focus"), labelStatesModels:(0, r.lx)(t)
        }
      }
      function s(e){
        return isNaN(e[
          0
        ])||isNaN(e[
          1
        ])
      }
      function u(e){
        return e&&!s(e[
          0
        ])&&!s(e[
          1
        ])
      }
      const d=function(){
        function e(e){
          this.group=new n.A, this._LineCtor=e||i.A
        }
        return e.prototype.updateData=function(e){
          var t=this;
          this._progressiveEls=null;
          var a=this, n=a.group, o=a._lineData;
          a._lineData=e, o||n.removeAll();
          var i=l(e);
          e.diff(o).add((function(a){
            t._doAdd(e, a, i)
          })).update((function(a, n){
            t._doUpdate(o, e, n, a, i)
          })).remove((function(e){
            n.remove(o.getItemGraphicEl(e))
          })).execute()
        }, e.prototype.updateLayout=function(){
          var e=this._lineData;
          e&&e.eachItemGraphicEl((function(t, a){
            t.updateLayout(e, a)
          }), this)
        }, e.prototype.incrementalPrepareUpdate=function(e){
          this._seriesScope=l(e), this._lineData=null, this.group.removeAll()
        }, e.prototype.incrementalUpdate=function(e, t){
          function a(e){
            e.isGroup||function(e){
              return e.animators&&e.animators.length>0
            }
            (e)||(e.incremental=!0, e.ensureState("emphasis").hoverLayer=!0)
          }
          this._progressiveEls=[
          ];
          for(var n=e.start;
          n<e.end;
          n++){
            if(u(t.getItemLayout(n))){
              var o=new this._LineCtor(t, n, this._seriesScope);
              o.traverse(a), this.group.add(o), t.setItemGraphicEl(n, o), this._progressiveEls.push(o)
            }
          }
        }, e.prototype.remove=function(){
          this.group.removeAll()
        }, e.prototype.eachRendered=function(e){
          o.traverseElements(this._progressiveEls||this.group, e)
        }, e.prototype._doAdd=function(e, t, a){
          if(u(e.getItemLayout(t))){
            var n=new this._LineCtor(e, t, a);
            e.setItemGraphicEl(t, n), this.group.add(n)
          }
        }, e.prototype._doUpdate=function(e, t, a, n, o){
          var i=e.getItemGraphicEl(a);
          u(t.getItemLayout(n))?(i?i.updateData(t, n, o):i=new this._LineCtor(t, n, o), t.setItemGraphicEl(n, i), this.group.add(i)):this.group.remove(i)
        }, e
      }
      ()
    }, 692606:(e, t, a)=>{
      a.d(t, {
        $:()=>s, L:()=>u
      });
      var n=a(498026), o=a(257625), i=a(905638), r=(0, a(48170).$r)(), l=[
        "percent", "easing", "shape", "style", "extra"
      ];
      function s(e){
        e.stopAnimation("keyframe"), e.attr(r(e))
      }
      function u(e, t, a){
        if(a.isAnimationEnabled()&&t)if((0, n.isArray)(t))(0, n.each)(t, (function(t){
          u(e, t, a)
        }));
        else{
          var s=t.keyframes, d=t.duration;
          if(a&&null==d){
            var c=(0, i.Jw)("enter", a, 0);
            d=c&&c.duration
          }
          if(s&&d){
            var p=r(e);
            (0, n.each)(o.rd, (function(a){
              if(!a||e[
                a
              ]){
                var o;
                s.sort((function(e, t){
                  return e.percent-t.percent
                })), (0, n.each)(s, (function(i){
                  var r=e.animators, s=a?i[
                    a
                  ]
                  :i;
                  if(s){
                    var u=(0, n.keys)(s);
                    if(a||(u=(0, n.filter)(u, (function(e){
                      return(0, n.indexOf)(l, e)<0
                    }))), u.length){
                      o||((o=e.animate(a, t.loop, !0)).scope="keyframe");
                      for(var c=0;
                      c<r.length;
                      c++)r[
                        c
                      ]
                      !==o&&r[
                        c
                      ].targetName===o.targetName&&r[
                        c
                      ].stopTracks(u);
                      a&&(p[
                        a
                      ]
                      =p[
                        a
                      ]
                      ||{
                      });
                      var h=a?p[
                        a
                      ]
                      :p;
                      (0, n.each)(u, (function(t){
                        h[
                          t
                        ]
                        =((a?e[
                          a
                        ]
                        :e)||{
                        })[
                          t
                        ]
                      })), o.whenWithKeys(d*i.percent, s, u, i.easing)
                    }
                  }
                })), o&&o.delay(t.delay||0).duration(d).start(t.easing)
              }
            }))
          }
        }
      }
    }, 878536:(e, t, a)=>{
      function n(e, t){
        return e.pointToProjected?e.pointToProjected(t):e.pointToData(t)
      }
      function o(e, t, a, o){
        var i=e.getZoom(), r=e.getCenter(), l=t.zoom, s=e.projectedToPoint?e.projectedToPoint(r):e.dataToPoint(r);
        if(null!=t.dx&&null!=t.dy&&(s[
          0
        ]
        -=t.dx, s[
          1
        ]
        -=t.dy, e.setCenter(n(e, s), o)), null!=l){
          if(a){
            var u=a.min||0, d=a.max||1/0;
            l=Math.max(Math.min(i*l, d), u)/i
          }
          e.scaleX*=l, e.scaleY*=l;
          var c=(t.originX-e.x)*(l-1), p=(t.originY-e.y)*(l-1);
          e.x-=c, e.y-=p, e.updateTransform(), e.setCenter(n(e, s), o), e.setZoom(l*i)
        }
        return{
          center:e.getCenter(), zoom:e.getZoom()
        }
      }
      a.d(t, {
        f:()=>o
      })
    }
  }
]);
