(self.webpackChunklms=self.webpackChunklms||[
]).push([
  [
    79001
  ], {
    212713:(t, e, i)=>{
      i.d(e, {
        cM:()=>c
      });
      var n=i(484140), r=[
        {
          index:7, opacity:.15
        }, {
          index:6, opacity:.25
        }, {
          index:5, opacity:.3
        }, {
          index:5, opacity:.45
        }, {
          index:5, opacity:.65
        }, {
          index:5, opacity:.85
        }, {
          index:4, opacity:.9
        }, {
          index:3, opacity:.95
        }, {
          index:2, opacity:.97
        }, {
          index:1, opacity:.98
        }
      ];
      function o(t, e, i){
        var n;
        return(n=Math.round(t.h)>=60&&Math.round(t.h)<=240?i?Math.round(t.h)-2*e:Math.round(t.h)+2*e:i?Math.round(t.h)+2*e:Math.round(t.h)-2*e)<0?n+=360:n>=360&&(n-=360), n
      }
      function a(t, e, i){
        return 0===t.h&&0===t.s?t.s:((n=i?t.s-.16*e:4===e?t.s+.16:t.s+.05*e)>1&&(n=1), i&&5===e&&n>.1&&(n=.1), n<.06&&(n=.06), Number(n.toFixed(2)));
        var n
      }
      function s(t, e, i){
        var n;
        return(n=i?t.v+.05*e:t.v-.15*e)>1&&(n=1), Number(n.toFixed(2))
      }
      function c(t){
        for(var e=arguments.length>1&&void 0!==arguments[
          1
        ]
        ?arguments[
          1
        ]
        :{
        }, i=[
        ], c=(0, n.A)(t), h=5;
        h>0;
        h-=1){
          var l=c.toHsv(), d=(0, n.A)({
            h:o(l, h, !0), s:a(l, h, !0), v:s(l, h, !0)
          }).toHexString();
          i.push(d)
        }
        i.push(c.toHexString());
        for(var g=1;
        g<=4;
        g+=1){
          var p=c.toHsv(), u=(0, n.A)({
            h:o(p, g), s:a(p, g), v:s(p, g)
          }).toHexString();
          i.push(u)
        }
        return"dark"===e.theme?r.map((function(t){
          var r=t.index, o=t.opacity;
          return n.A.mix(e.backgroundColor||"#141414", i[
            r
          ], 100*o).toHexString()
        })):i
      }
      var h={
        red:"#F5222D", volcano:"#FA541C", orange:"#FA8C16", gold:"#FAAD14", yellow:"#FADB14", lime:"#A0D911", green:"#52C41A", cyan:"#13C2C2", blue:"#1890FF", geekblue:"#2F54EB", purple:"#722ED1", magenta:"#EB2F96", grey:"#666666"
      }, l={
      }, d={
      };
      Object.keys(h).forEach((function(t){
        l[
          t
        ]
        =c(h[
          t
        ]), l[
          t
        ].primary=l[
          t
        ]
        [
          5
        ], d[
          t
        ]
        =c(h[
          t
        ], {
          theme:"dark", backgroundColor:"#141414"
        }), d[
          t
        ].primary=d[
          t
        ]
        [
          5
        ]
      }));
      l.red, l.volcano, l.gold, l.orange, l.yellow, l.lime, l.green, l.cyan, l.blue, l.geekblue, l.purple, l.magenta, l.grey
    }, 526849:(t, e, i)=>{
      i.d(e, {
        Ay:()=>he
      });
      var n=i(738155), r=i(328834), o=i(224425);
      const a=function(){
        function t(t){
          this._cfgs=(0, o.deepMix)(this.getDefaultCfgs(), t), this._events={
          }, this.destroyed=!1
        }
        return t.prototype.getDefaultCfgs=function(){
          return{
          }
        }, t.prototype.initPlugin=function(t){
          var e=this;
          e.set("graph", t);
          var i=e.getEvents(), n={
          };
          (0, o.each)(i, (function(i, r){
            var a=(0, o.wrapBehavior)(e, i);
            n[
              r
            ]
            =a, t.on(r, a)
          })), this._events=n, this.init()
        }, t.prototype.getEvents=function(){
          return{
          }
        }, t.prototype.get=function(t){
          var e;
          return null===(e=this._cfgs)||void 0===e?void 0:e[
            t
          ]
        }, t.prototype.set=function(t, e){
          this._cfgs[
            t
          ]
          =e
        }, t.prototype.destroy=function(){
        }, t.prototype.destroyPlugin=function(){
          this.destroy();
          var t=this.get("graph"), e=this._events;
          (0, o.each)(e, (function(e, i){
            t.off(i, e)
          })), this._events=null, this._cfgs=null, this.destroyed=!0
        }, t
      }
      ();
      var s, c=(s=function(t, e){
        return(s=Object.setPrototypeOf||{
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
        s(t, e), t.prototype=null===e?Object.create(e):(i.prototype=e.prototype, new i)
      }), h="url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2UwZTBlMCIgb3BhY2l0eT0iMC4yIiBzdHJva2Utd2lkdGg9IjEiLz48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZTBlMGUwIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=)";
      const l=function(t){
        function e(e){
          return t.call(this, e)||this
        }
        return c(e, t), e.prototype.getDefaultCfgs=function(){
          return{
            img:h, follow:!0
          }
        }, e.prototype.init=function(){
          var t=this.get("graph"), e=t.get("container"), i=t.get("canvas").get("el"), r=this.get("img")||h;
          r.includes("url(")||(r='url("'.concat(r, '")'));
          var o=(0, n.A)("<div class='g6-grid-container' style=\"position:absolute;overflow:hidden;z-index: -1;\"></div>"), a=(0, n.A)("<div\n        class='g6-grid'\n        style='position:absolute;\n        background-image: ".concat(r, ";\n        user-select: none\n        '></div>"));
          this.set("container", o), this.set("gridContainer", a), this.positionInit(), o.appendChild(a), e.insertBefore(o, i)
        }, e.prototype.positionInit=function(){
          var t=this.get("graph"), e=t.get("minZoom"), i=t.get("width"), n=t.get("height");
          (0, r.A)(this.get("container"), {
            width:"".concat(i, "px"), height:"".concat(n, "px")
          });
          var o=80*i/e, a=80*n/e;
          (0, r.A)(this.get("gridContainer"), {
            width:"".concat(o, "px"), height:"".concat(a, "px"), left:"-".concat(o/2, "px"), top:"-".concat(a/2, "px")
          })
        }, e.prototype.getEvents=function(){
          return{
            viewportchange:"updateGrid"
          }
        }, e.prototype.updateGrid=function(t){
          var e=this.get("gridContainer"), i=t.matrix;
          i||(i=[
            1, 0, 0, 0, 1, 0, 0, 0, 1
          ]);
          var n=this.get("follow"), o="matrix(".concat(i[
            0
          ], ", ").concat(i[
            1
          ], ", ").concat(i[
            3
          ], ", ").concat(i[
            4
          ], ", ").concat(n?i[
            6
          ]
          :"0", ", ").concat(n?i[
            7
          ]
          :"0", ")");
          (0, r.A)(e, {
            transform:o
          })
        }, e.prototype.getContainer=function(){
          return this.get("container")
        }, e.prototype.destroy=function(){
          var t=this.get("graph").get("container"), e=this.get("container");
          t.removeChild(e)
        }, e
      }
      (a);
      var d=i(779238), g=i.n(d), p=function(){
        var t=function(e, i){
          return(t=Object.setPrototypeOf||{
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
          })(e, i)
        };
        return function(e, i){
          if("function"!=typeof i&&null!==i)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");
          function n(){
            this.constructor=e
          }
          t(e, i), e.prototype=null===i?Object.create(i):(n.prototype=i.prototype, new n)
        }
      }
      ();
      "undefined"!=typeof document&&g()("\n  .g6-component-contextmenu {\n    border: 1px solid #e2e2e2;\n    border-radius: 4px;\n    font-size: 12px;\n    color: #545454;\n    background-color: rgba(255, 255, 255, 0.9);\n    padding: 10px 8px;\n    box-shadow: rgb(174, 174, 174) 0px 0px 10px;\n  }\n  .g6-contextmenu-ul {\n    padding: 0;\n    margin: 0;\n    list-style: none;\n  }\n\n");
      const u=function(t){
        function e(e){
          return t.call(this, e)||this
        }
        return p(e, t), e.prototype.getDefaultCfgs=function(){
          return{
            offsetX:6, offsetY:6, handleMenuClick:void 0, getContent:function(t){
              return"\n          <ul class='g6-contextmenu-ul'>\n            <li>菜单项1</li>\n            <li>菜单项2</li>\n          </ul>\n        "
            }, shouldBegin:function(t){
              return!0
            }, onHide:function(){
              return!0
            }, itemTypes:[
              "node", "edge", "combo"
            ], trigger:"contextmenu"
          }
        }, e.prototype.getEvents=function(){
          return"click"===this.get("trigger")?{
            click:"onMenuShow", touchend:"onMenuShow"
          }
          :{
            contextmenu:"onMenuShow"
          }
        }, e.prototype.init=function(){
          var t=this.get("className"), e=(0, n.A)("<div class=".concat(t||"g6-component-contextmenu", "></div>"));
          (0, r.A)(e, {
            top:"0px", position:"absolute", visibility:"hidden"
          });
          var i=this.get("container");
          i||(i=this.get("graph").get("container")), (0, o.isString)(i)&&(i=document.getElementById(i)), i.appendChild(e), this.set("menu", e)
        }, e.prototype.onMenuShow=function(t){
          var e=this;
          t.preventDefault();
          var i=this.get("itemTypes");
          if(t.item){
            if(t.item&&t.item.getType&&-1===i.indexOf(t.item.getType()))return void e.onMenuHide()
          }
          else if(-1===i.indexOf("canvas"))return void e.onMenuHide();
          if(this.get("shouldBegin")(t)){
            var n=this.get("menu"), a=this.get("getContent"), s=this.get("graph"), c=a(t, s);
            (0, o.isString)(c)?n.innerHTML=c:n.innerHTML=c.outerHTML, this.removeMenuEventListener();
            var h=this.get("handleMenuClick");
            if(h){
              var l=function(e){
                h(e.target, t.item, s)
              };
              this.set("handleMenuClickWrapper", l), n.addEventListener("click", l)
            }
            var d=s.get("width"), g=s.get("height"), p=n.getBoundingClientRect(), u=this.get("offsetX")||0, f=this.get("offsetY")||0, v=s.getContainer().offsetTop, y=s.getContainer().offsetLeft, m=t.canvasX+y+u, x=t.canvasY+v+f;
            m+p.width>d&&(m=t.canvasX-p.width-u+y), x+p.height>g&&(x=t.canvasY-p.height-f+v), x<0&&(x=0), (0, r.A)(n, {
              top:"".concat(x, "px"), left:"".concat(m, "px"), visibility:"visible"
            });
            var b="click"===this.get("trigger"), w=function(t){
              b?b=!1:e.onMenuHide()
            };
            document.body.addEventListener("click", w), this.set("handler", w)
          }
        }, e.prototype.removeMenuEventListener=function(){
          var t=this.get("handleMenuClickWrapper"), e=this.get("handler");
          t&&(this.get("menu").removeEventListener("click", t), this.set("handleMenuClickWrapper", null));
          e&&document.body.removeEventListener("click", e)
        }, e.prototype.onMenuHide=function(){
          var t=this.get("menu");
          t&&(0, r.A)(t, {
            visibility:"hidden"
          }), this.removeMenuEventListener()
        }, e.prototype.destroy=function(){
          var t=this.get("menu");
          if(this.removeMenuEventListener(), t){
            var e=this.get("container");
            e||(e=this.get("graph").get("container")), (0, o.isString)(e)&&(e=document.getElementById(e)), e.removeChild(t)
          }
        }, e
      }
      (a);
      var f=i(906924), v=i(256998), y=i(883278), m=function(){
        var t=function(e, i){
          return(t=Object.setPrototypeOf||{
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
          })(e, i)
        };
        return function(e, i){
          if("function"!=typeof i&&null!==i)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");
          function n(){
            this.constructor=e
          }
          t(e, i), e.prototype=null===i?Object.create(i):(n.prototype=i.prototype, new n)
        }
      }
      (), x=function(){
        return(x=Object.assign||function(t){
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
      }, b=Math.max, w=y.pd;
      const k=function(t){
        function e(e){
          var i=t.call(this, e)||this;
          return i.handleUpdateCanvas=(0, o.debounce)((function(t){
            var e=i;
            e.destroyed||e.updateCanvas()
          }), 100, !1), i
        }
        return m(e, t), e.prototype.getDefaultCfgs=function(){
          return{
            container:null, className:"g6-minimap", viewportClassName:"g6-minimap-viewport", type:"default", padding:50, size:[
              200, 120
            ], delegateStyle:{
              fill:"#40a9ff", stroke:"#096dd9"
            }, refresh:!0, hideEdge:!1
          }
        }, e.prototype.getEvents=function(){
          return{
            beforepaint:"updateViewport", beforeanimate:"disableRefresh", afteranimate:"enableRefresh", viewportchange:"disableOneRefresh"
          }
        }, e.prototype.disableRefresh=function(){
          this.set("refresh", !1)
        }, e.prototype.enableRefresh=function(){
          this.set("refresh", !0), this.updateCanvas()
        }, e.prototype.disableOneRefresh=function(){
          this.set("viewportChange", !0)
        }, e.prototype.initViewport=function(){
          var t=this, e=this._cfgs, i=e.size, a=e.graph;
          if(!this.destroyed){
            var s=this.get("canvas").get("container"), c=navigator.userAgent.toLowerCase().indexOf("firefox")>-1, h=navigator.userAgent.toLowerCase().indexOf("safari")>-1, l=(0, n.A)("\n      <div\n        class=".concat(e.viewportClassName, "\n        style='position:absolute;\n          left:0;\n          top:0;\n          box-sizing:border-box;\n          outline: 2px solid #1980ff;\n          cursor:move'\n        draggable=").concat(!h&&!c, "\n      </div>")), d=0, g=0, p=!1, u=0, f=0, v=0, y=0, m=0, x=0, b=h||c?"mousedown":"dragstart";
            l.addEventListener(b, (function(n){
              var r, o;
              if(n.dataTransfer){
                var s=new Image;
                s.src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' %3E%3Cpath /%3E%3C/svg%3E", null===(o=(r=n.dataTransfer).setDragImage)||void 0===o||o.call(r, s, 0, 0);
                try{
                  n.dataTransfer.setData("text/html", "view-port-minimap")
                }
                catch(t){
                  n.dataTransfer.setData("text", "view-port-minimap")
                }
              }
              if(e.refresh=!1, n.target===l){
                var c=l.style;
                u=parseInt(c.left, 10), f=parseInt(c.top, 10), v=parseInt(c.width, 10), y=parseInt(c.height, 10), v>i[
                  0
                ]
                ||y>i[
                  1
                ]
                ||(x=a.getZoom(), m=t.get("ratio"), p=!0, d=n.clientX, g=n.clientY)
              }
            }), !1);
            var w=function(t){
              if(p&&!(0, o.isNil)(t.clientX)&&!(0, o.isNil)(t.clientY)){
                var e=d-t.clientX, n=g-t.clientY;
                (u-e<0||u-e+v>=i[
                  0
                ])&&(e=0), (f-n<0||f-n+y>=i[
                  1
                ])&&(n=0), u-=e, f-=n, (0, r.A)(l, {
                  left:"".concat(u, "px"), top:"".concat(f, "px")
                }), a.translate(e*x/m, n*x/m), d=t.clientX, g=t.clientY
              }
            };
            h||c||l.addEventListener("drag", w, !1);
            var k=function(){
              p=!1, e.refresh=!0
            }, S=h||c?"mouseup":"dragend";
            l.addEventListener(S, k, !1), s.addEventListener("mouseleave", k), s.addEventListener("mouseup", k), (h||c)&&s.addEventListener("mousemove", w, !1), this.set("viewport", l), s.appendChild(l)
          }
        }, e.prototype.updateViewport=function(){
          if(!this.destroyed){
            var t=this.get("ratio"), e=this.get("totaldx"), i=this.get("totaldy"), n=this.get("graph"), o=this.get("size"), a=n.get("canvas").get("el"), s=n.get("width")||a.scrollWidth||500, c=n.get("height")||a.scrollHeight||500, h=n.getPointByCanvas(0, 0), l=n.getPointByCanvas(s, c), d=this.get("viewport");
            d||this.initViewport();
            var g=(l.x-h.x)*t, p=(l.y-h.y)*t, u=h.x*t+e, f=h.y*t+i, v=u+g, y=f+p;
            u<0&&(g+=u, u=0), v>o[
              0
            ]
            &&(g-=v-o[
              0
            ]), f<0&&(p+=f, f=0), y>o[
              1
            ]
            &&(p-=y-o[
              1
            ]), this.set("ratio", t);
            var m="".concat(u, "px"), x="".concat(f, "px");
            (0, r.A)(d, {
              left:m, top:x, width:"".concat(g, "px"), height:"".concat(p, "px")
            })
          }
        }, e.prototype.updateGraphShapes=function(){
          var t, e=this._cfgs.graph, i=this.get("canvas"), n=e.get("group");
          n.destroyed||(i.clear(), this.get("hideEdge")?(t=i.addGroup(), n.get("children").forEach((function(e){
            e.get("id").includes("-edge")||t.add(e.clone())
          }))):((t=n.clone()).resetMatrix(), i.add(t)), "svg"===e.get("renderer")&&this.updateVisible(t))
        }, e.prototype.updateVisible=function(t){
          var e=this;
          if(t.isGroup()||t.get("visible")){
            var i=t.get("children");
            if(!i||!i.length)return;
            i.forEach((function(t){
              t.get("visible")||t.hide(), e.updateVisible(t)
            }))
          }
          else t.hide()
        }, e.prototype.updateKeyShapes=function(){
          var t=this, e=this._cfgs.graph, i=this.get("canvas"), n=i.get("children")[
            0
          ]
          ||i.addGroup();
          this.get("hideEdge")||(0, o.each)(e.getEdges(), (function(e){
            t.updateOneEdgeKeyShape(e, n)
          })), (0, o.each)(e.getNodes(), (function(e){
            t.updateOneNodeKeyShape(e, n)
          }));
          var r=e.getCombos();
          if(r&&r.length){
            var a=n.find((function(t){
              return"comboGroup"===t.get("name")
            }))||n.addGroup({
              name:"comboGroup"
            });
            setTimeout((function(){
              t.destroyed||((0, o.each)(r, (function(e){
                t.updateOneComboKeyShape(e, a)
              })), null==a||a.sort(), null==a||a.toBack(), t.updateCanvas())
            }), 250)
          }
          this.clearDestroyedShapes()
        }, e.prototype.updateOneComboKeyShape=function(t, e){
          if(!this.destroyed){
            var i=this.get("itemMap")||{
            }, n=i[
              t.get("id")
            ], r=t.getBBox(), o=t.get("keyShape").clone(), a=o.attr(), s={
              x:r.centerX, y:r.centerY
            };
            n?s=Object.assign(a, s):(n=o, e.add(n));
            var c=n.get("type");
            "rect"!==c&&"image"!==c||(s.x=r.minX, s.y=r.minY), n.attr(s), t.isVisible()?n.show():n.hide(), n.exist=!0;
            var h=t.getModel().depth;
            isNaN(h)||n.set("zIndex", h), i[
              t.get("id")
            ]
            =n, this.set("itemMap", i)
          }
        }, e.prototype.updateOneNodeKeyShape=function(t, e){
          var i=this.get("itemMap")||{
          }, n=i[
            t.get("id")
          ], r=t.getBBox(), o=t.get("keyShape").clone(), a=o.attr(), s={
            x:r.centerX, y:r.centerY
          };
          n?(s=Object.assign(a, s), n.toFront()):(n=o, e.add(n));
          var c=n.get("type");
          "rect"!==c&&"image"!==c||(s.x=r.minX, s.y=r.minY), n.attr(s), t.isVisible()?n.show():n.hide(), n.exist=!0;
          var h=t.getModel().depth;
          isNaN(h)||n.set("zIndex", h), i[
            t.get("id")
          ]
          =n, this.set("itemMap", i)
        }, e.prototype.updateDelegateShapes=function(){
          var t=this, e=this._cfgs.graph, i=this.get("canvas"), n=i.get("children")[
            0
          ]
          ||i.addGroup();
          this.get("hideEdge")||(0, o.each)(e.getEdges(), (function(e){
            t.updateOneEdgeKeyShape(e, n)
          })), (0, o.each)(e.getNodes(), (function(e){
            t.updateOneNodeDelegateShape(e, n)
          }));
          var r=e.getCombos();
          if(r&&r.length){
            var a=n.find((function(t){
              return"comboGroup"===t.get("name")
            }))||n.addGroup({
              name:"comboGroup"
            });
            setTimeout((function(){
              t.destroyed||((0, o.each)(r, (function(e){
                t.updateOneComboKeyShape(e, a)
              })), null==a||a.sort(), null==a||a.toBack(), t.updateCanvas())
            }), 250)
          }
          this.clearDestroyedShapes()
        }, e.prototype.clearDestroyedShapes=function(){
          var t=this.get("itemMap")||{
          }, e=Object.keys(t);
          if(e&&0!==e.length)for(var i=e.length-1;
          i>=0;
          i--){
            var n=t[
              e[
                i
              ]
            ], r=n.exist;
            n.exist=!1, r||(n.remove(), delete t[
              e[
                i
              ]
            ])
          }
        }, e.prototype.updateOneEdgeKeyShape=function(t, e){
          var i=this.get("itemMap")||{
          }, n=i[
            t.get("id")
          ];
          if(n){
            var r=t.get("keyShape").attr("path");
            n.attr("path", r)
          }
          else n=t.get("keyShape").clone(), e.add(n);
          t.isVisible()?n.show():n.hide(), n.exist=!0, i[
            t.get("id")
          ]
          =n, this.set("itemMap", i)
        }, e.prototype.updateOneNodeDelegateShape=function(t, e){
          var i=this.get("delegateStyle"), n=this.get("itemMap")||{
          }, r=n[
            t.get("id")
          ], o=t.getBBox();
          if(r){
            var a={
              x:o.minX, y:o.minY, width:o.width, height:o.height
            };
            r.attr(a), r.toFront()
          }
          else r=e.addShape("rect", {
            attrs:x({
              x:o.minX, y:o.minY, width:o.width, height:o.height
            }, i), name:"minimap-node-shape"
          });
          t.isVisible()?r.show():r.hide(), r.exist=!0, n[
            t.get("id")
          ]
          =r, this.set("itemMap", n)
        }, e.prototype.init=function(){
          this.initContainer(), this.get("graph").on("afterupdateitem", this.handleUpdateCanvas), this.get("graph").on("afteritemstatechange", this.handleUpdateCanvas), this.get("graph").on("afteradditem", this.handleUpdateCanvas), this.get("graph").on("afterremoveitem", this.handleUpdateCanvas), this.get("graph").on("afterrender", this.handleUpdateCanvas), this.get("graph").on("afterlayout", this.handleUpdateCanvas)
        }, e.prototype.initContainer=function(){
          var t=this, e=t.get("graph"), i=t.get("size"), r=t.get("className"), a=t.get("container"), s=(0, n.A)("<div class='".concat(r, "' style='width: ").concat(i[
            0
          ], "px; height: ").concat(i[
            1
          ], "px; overflow: hidden'></div>"));
          (0, o.isString)(a)&&(a=document.getElementById(a)), a?a.appendChild(s):e.get("container").appendChild(s), t.set("container", s);
          var c, h=(0, n.A)('<div class="g6-minimap-container" style="position: relative;"></div>');
          s.appendChild(h), h.addEventListener("dragenter", (function(t){
            t.preventDefault()
          })), h.addEventListener("dragover", (function(t){
            t.preventDefault()
          })), c="svg"===e.get("renderer")?new v.Canvas({
            container:h, width:i[
              0
            ], height:i[
              1
            ]
          }):new f.Canvas({
            container:h, width:i[
              0
            ], height:i[
              1
            ]
          }), t.set("canvas", c), t.updateCanvas()
        }, e.prototype.updateCanvas=function(){
          if(!this.destroyed&&this.get("refresh")){
            var t=this.get("graph");
            if(!t.get("destroyed")){
              this.get("viewportChange")&&(this.set("viewportChange", !1), this.updateViewport());
              var e=this.get("size"), i=this.get("canvas"), n=this.get("type"), r=this.get("padding");
              if(!i.destroyed){
                switch(n){
                  case"default":this.updateGraphShapes();
                  break;
                  case"keyShape":this.updateKeyShapes();
                  break;
                  case"delegate":this.updateDelegateShapes()
                }
                var o=i.get("children")[
                  0
                ];
                if(o){
                  o.resetMatrix();
                  var a=o.getCanvasBBox(), s=t.get("canvas").getCanvasBBox(), c=t.getZoom()||1, h=s.width/c, l=s.height/c;
                  Number.isFinite(a.width)&&(h=b(a.width, h), l=b(a.height, l)), h+=2*r, l+=2*r;
                  var d=Math.min(e[
                    0
                  ]
                  /h, e[
                    1
                  ]
                  /l), g=[
                    1, 0, 0, 0, 1, 0, 0, 0, 1
                  ], p=0, u=0;
                  Number.isFinite(a.minX)&&(p=-a.minX), Number.isFinite(a.minY)&&(u=-a.minY);
                  var f=(e[
                    0
                  ]
                  -(h-2*r)*d)/2, v=(e[
                    1
                  ]
                  -(l-2*r)*d)/2;
                  g=w(g, [
                    [
                      "t", p, u
                    ], [
                      "s", d, d
                    ], [
                      "t", f, v
                    ]
                  ]), o.setMatrix(g), this.set("ratio", d), this.set("totaldx", f+p*d), this.set("totaldy", v+u*d), this.set("dx", f), this.set("dy", v), this.updateViewport()
                }
              }
            }
          }
        }, e.prototype.getCanvas=function(){
          return this.get("canvas")
        }, e.prototype.getViewport=function(){
          return this.get("viewport")
        }, e.prototype.getContainer=function(){
          return this.get("container")
        }, e.prototype.destroy=function(){
          var t;
          null===(t=this.get("canvas"))||void 0===t||t.destroy();
          var e=this.get("container");
          (null==e?void 0:e.parentNode)&&e.parentNode.removeChild(e)
        }, e
      }
      (a);
      var S=function(){
        var t=function(e, i){
          return(t=Object.setPrototypeOf||{
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
          })(e, i)
        };
        return function(e, i){
          if("function"!=typeof i&&null!==i)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");
          function n(){
            this.constructor=e
          }
          t(e, i), e.prototype=null===i?Object.create(i):(n.prototype=i.prototype, new n)
        }
      }
      ();
      function C(t, e, i){
        var n=t.x-e.x, r=t.y-e.y;
        return!i||Math.abs(n)>i||Math.abs(r)>i?Math.sqrt(n*n+r*r):i
      }
      function M(t, e){
        var i=(e.source.y-e.target.y)/(e.source.x-e.target.x), n=(i*i*e.source.x+i*(t.y-e.source.y)+t.x)/(i*i+1);
        return{
          x:n, y:i*(n-e.source.x)+e.source.y
        }
      }
      const E=function(t){
        function e(e){
          return t.call(this, e)||this
        }
        return S(e, t), e.prototype.getDefaultCfgs=function(){
          return{
            edgeBundles:[
            ], edgePoints:[
            ], K:.1, lambda:.1, divisions:1, divRate:2, cycles:6, iterations:90, iterRate:.6666667, bundleThreshold:.6, eps:1e-6, onLayoutEnd:function(){
            }, onTick:function(){
            }
          }
        }, e.prototype.init=function(){
          var t=this.get("graph"), e=this.get("onTick");
          this.set("tick", (function(){
            e&&e(), t.refreshPositions()
          }))
        }, e.prototype.bundling=function(t){
          var e=this;
          if(e.set("data", t), !e.isTicking()){
            var i=t.edges||[
            ], n=t.nodes||[
            ], r={
            }, o=!1;
            if(n.forEach((function(t){
              null!==t.x&&null!==!t.y&&void 0!==t.x&&void 0!==!t.y||(o=!0), r[
                t.id
              ]
              =t
            })), o)throw new Error("please layout the graph or assign x and y for nodes first");
            e.set("nodeIdMap", r);
            var a=e.get("divisions"), s=e.get("divRate"), c=e.divideEdges(a);
            e.set("edgePoints", c);
            var h=e.getEdgeBundles();
            e.set("edgeBundles", h);
            for(var l=e.get("cycles"), d=e.get("iterations"), g=e.get("iterRate"), p=e.get("lambda"), u=0;
            u<l;
            u++){
              for(var f=function(t){
                var n=[
                ];
                i.forEach((function(t, i){
                  if(t.source!==t.target){
                    var o=r[
                      t.source
                    ], s=r[
                      t.target
                    ];
                    n[
                      i
                    ]
                    =e.getEdgeForces({
                      source:o, target:s
                    }, i, a, p);
                    for(var h=0;
                    h<a+1;
                    h++)c[
                      i
                    ]
                    [
                      h
                    ].x+=n[
                      i
                    ]
                    [
                      h
                    ].x, c[
                      i
                    ]
                    [
                      h
                    ].y+=n[
                      i
                    ]
                    [
                      h
                    ].y
                  }
                }))
              }, v=0;
              v<d;
              v++)f();
              p/=2, a*=s, d*=g, c=e.divideEdges(a), e.set("edgePoints", c)
            }
            i.forEach((function(t, e){
              t.source!==t.target&&(t.type="polyline", t.controlPoints=c[
                e
              ].slice(1, c[
                e
              ].length-1))
            })), e.get("graph").refresh()
          }
        }, e.prototype.updateBundling=function(t){
          var e=this, i=t.data;
          if(i&&e.set("data", i), e.get("ticking")&&e.set("ticking", !1), Object.keys(t).forEach((function(i){
            e.set(i, t[
              i
            ])
          })), t.onTick){
            var n=this.get("graph");
            e.set("tick", (function(){
              t.onTick(), n.refresh()
            }))
          }
          e.bundling(i)
        }, e.prototype.divideEdges=function(t){
          var e=this, i=e.get("data").edges, n=e.get("nodeIdMap"), r=e.get("edgePoints");
          return r&&void 0!==r||(r=[
          ]), i.forEach((function(i, o){
            var a;
            r[
              o
            ]
            &&void 0!==r[
              o
            ]
            ||(r[
              o
            ]
            =[
            ]);
            var s=n[
              i.source
            ], c=n[
              i.target
            ];
            if(1===t)r[
              o
            ].push({
              x:s.x, y:s.y
            }), r[
              o
            ].push({
              x:.5*(s.x+c.x), y:.5*(s.y+c.y)
            }), r[
              o
            ].push({
              x:c.x, y:c.y
            });
            else{
              var h=((null===(a=r[
                o
              ])||void 0===a?void 0:a.length)?e.getEdgeLength(r[
                o
              ]):C({
                x:s.x, y:s.y
              }, {
                x:c.x, y:c.y
              }))/(t+1), l=h, d=[
                {
                  x:s.x, y:s.y
                }
              ];
              r[
                o
              ].forEach((function(t, e){
                if(0!==e){
                  for(var i=C(t, r[
                    o
                  ]
                  [
                    e-1
                  ]);
                  i>l;
                  ){
                    var n=l/i, a={
                      x:r[
                        o
                      ]
                      [
                        e-1
                      ].x, y:r[
                        o
                      ]
                      [
                        e-1
                      ].y
                    };
                    a.x+=n*(t.x-r[
                      o
                    ]
                    [
                      e-1
                    ].x), a.y+=n*(t.y-r[
                      o
                    ]
                    [
                      e-1
                    ].y), d.push(a), i-=l, l=h
                  }
                  l-=i
                }
              })), d.push({
                x:c.x, y:c.y
              }), r[
                o
              ]
              =d
            }
          })), r
        }, e.prototype.getEdgeLength=function(t){
          var e=0;
          return t.forEach((function(i, n){
            0!==n&&(e+=C(i, t[
              n-1
            ]))
          })), e
        }, e.prototype.getEdgeBundles=function(){
          var t=this, e=t.get("data").edges||[
          ], i=t.get("bundleThreshold"), n=t.get("nodeIdMap"), r=t.get("edgeBundles");
          return r||(r=[
          ]), e.forEach((function(t, e){
            r[
              e
            ]
            &&void 0!==r[
              e
            ]
            ||(r[
              e
            ]
            =[
            ])
          })), e.forEach((function(o, a){
            var s=n[
              o.source
            ], c=n[
              o.target
            ];
            e.forEach((function(e, o){
              if(!(o<=a)){
                var h=n[
                  e.source
                ], l=n[
                  e.target
                ];
                t.getBundleScore({
                  source:s, target:c
                }, {
                  source:h, target:l
                })>=i&&(r[
                  a
                ].push(o), r[
                  o
                ].push(a))
              }
            }))
          })), r
        }, e.prototype.getBundleScore=function(t, e){
          var i=this;
          return t.vx=t.target.x-t.source.x, t.vy=t.target.y-t.source.y, e.vx=e.target.x-e.source.x, e.vy=e.target.y-e.source.y, t.length=C({
            x:t.source.x, y:t.source.y
          }, {
            x:t.target.x, y:t.target.y
          }), e.length=C({
            x:e.source.x, y:e.source.y
          }, {
            x:e.target.x, y:e.target.y
          }), i.getAngleScore(t, e)*i.getScaleScore(t, e)*i.getPositionScore(t, e)*i.getVisibilityScore(t, e)
        }, e.prototype.getAngleScore=function(t, e){
          return function(t, e){
            return t.x*e.x+t.y*e.y
          }
          ({
            x:t.vx, y:t.vy
          }, {
            x:e.vx, y:e.vy
          })/(t.length*e.length)
        }, e.prototype.getScaleScore=function(t, e){
          var i=(t.length+e.length)/2;
          return 2/(i/Math.min(t.length, e.length)+Math.max(t.length, e.length)/i)
        }, e.prototype.getPositionScore=function(t, e){
          var i=(t.length+e.length)/2;
          return i/(i+C({
            x:(t.source.x+t.target.x)/2, y:(t.source.y+t.target.y)/2
          }, {
            x:(e.source.x+e.target.x)/2, y:(e.source.y+e.target.y)/2
          }))
        }, e.prototype.getVisibilityScore=function(t, e){
          var i=this.getEdgeVisibility(t, e), n=this.getEdgeVisibility(e, t);
          return i<n?i:n
        }, e.prototype.getEdgeVisibility=function(t, e){
          var i=M(e.source, t), n=M(e.target, t), r={
            x:(i.x+n.x)/2, y:(i.y+n.y)/2
          }, o={
            x:(t.source.x+t.target.x)/2, y:(t.source.y+t.target.y)/2
          };
          return Math.max(0, 1-2*C(r, o)/C(i, n))
        }, e.prototype.getEdgeForces=function(t, e, i, n){
          for(var r=this, o=r.get("edgePoints"), a=r.get("K")/(C(t.source, t.target)*(i+1)), s=[
            {
              x:0, y:0
            }
          ], c=1;
          c<i;
          c++){
            var h={
              x:0, y:0
            }, l=r.getSpringForce({
              pre:o[
                e
              ]
              [
                c-1
              ], cur:o[
                e
              ]
              [
                c
              ], next:o[
                e
              ]
              [
                c+1
              ]
            }, a), d=r.getElectrostaticForce(c, e);
            h.x=n*(l.x+d.x), h.y=n*(l.y+d.y), s.push(h)
          }
          return s.push({
            x:0, y:0
          }), s
        }, e.prototype.getSpringForce=function(t, e){
          var i=t.pre.x+t.next.x-2*t.cur.x, n=t.pre.y+t.next.y-2*t.cur.y;
          return{
            x:i*=e, y:n*=e
          }
        }, e.prototype.getElectrostaticForce=function(t, e){
          var i=this, n=i.get("eps"), r=i.get("edgeBundles"), o=i.get("edgePoints"), a=r[
            e
          ], s={
            x:0, y:0
          };
          return a.forEach((function(i){
            var r={
              x:o[
                i
              ]
              [
                t
              ].x-o[
                e
              ]
              [
                t
              ].x, y:o[
                i
              ]
              [
                t
              ].y-o[
                e
              ]
              [
                t
              ].y
            };
            if(Math.abs(r.x)>n||Math.abs(r.y)>n){
              var a=1/C(o[
                i
              ]
              [
                t
              ], o[
                e
              ]
              [
                t
              ]);
              s.x+=r.x*a, s.y+=r.y*a
            }
          })), s
        }, e.prototype.isTicking=function(){
          return this.get("ticking")
        }, e.prototype.getSimulation=function(){
          return this.get("forceSimulation")
        }, e.prototype.destroy=function(){
          this.get("ticking")&&this.getSimulation().stop(), t.prototype.destroy.call(this)
        }, e
      }
      (a);
      var T=function(){
        var t=function(e, i){
          return(t=Object.setPrototypeOf||{
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
          })(e, i)
        };
        return function(e, i){
          if("function"!=typeof i&&null!==i)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");
          function n(){
            this.constructor=e
          }
          t(e, i), e.prototype=null===i?Object.create(i):(n.prototype=i.prototype, new n)
        }
      }
      (), B=function(){
        return(B=Object.assign||function(t){
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
      }, L={
        stroke:"#000", strokeOpacity:.8, lineWidth:2, fillOpacity:.1, fill:"#ccc"
      };
      const A=function(t){
        function e(e){
          return t.call(this, e)||this
        }
        return T(e, t), e.prototype.getDefaultCfgs=function(){
          return{
            trigger:"mousemove", d:1.5, r:300, delegateStyle:(0, o.clone)(L), showLabel:!1, maxD:5, minD:0, scaleRBy:"unset", scaleDBy:"unset", showDPercent:!0
          }
        }, e.prototype.getEvents=function(){
          var t;
          switch(this.get("trigger")){
            case"click":t={
              click:"magnify"
            };
            break;
            case"drag":t={
              click:"createDelegate"
            };
            break;
            default:t={
              mousemove:"magnify"
            }
          }
          return t
        }, e.prototype.init=function(){
          var t=this, e=t.get("r");
          t.set("cachedMagnifiedModels", [
          ]), t.set("cachedOriginPositions", {
          }), t.set("r2", e*e);
          var i=t.get("d");
          t.set("molecularParam", (i+1)*e)
        }, e.prototype.createDelegate=function(t){
          var e=this, i=this, n=i.get("delegate");
          n&&!n.destroyed||(i.magnify(t), (n=i.get("delegate")).on("dragstart", (function(t){
            i.set("delegateCenterDiff", {
              x:n.attr("x")-t.x, y:n.attr("y")-t.y
            })
          })), n.on("drag", (function(t){
            i.magnify(t)
          })), "wheel"===this.get("scaleDBy")&&n.on("mousewheel", (function(t){
            e.scaleDByWheel(t)
          })), "wheel"===this.get("scaleRBy")&&n.on("mousewheel", (function(t){
            i.scaleRByWheel(t)
          })))
        }, e.prototype.scaleRByWheel=function(t){
          var e=this;
          if(t&&t.originalEvent){
            t.preventDefault&&t.preventDefault();
            var i, n=e.get("graph"), r=e.get("delegate"), o=(r?{
              x:r.attr("x"), y:r.attr("y")
            }
            :void 0)||n.getPointByClient(t.clientX, t.clientY);
            i=t.originalEvent.wheelDelta<0?.95:1/.95;
            var a=e.get("maxR"), s=e.get("minR"), c=e.get("r");
            (c>(a||n.get("height"))&&i>1||c<(s||.05*n.get("height"))&&i<1)&&(i=1), c*=i, e.set("r", c), e.set("r2", c*c);
            var h=e.get("d");
            e.set("molecularParam", (h+1)*c), e.set("delegateCenterDiff", void 0), e.magnify(t, o)
          }
        }, e.prototype.scaleRByDrag=function(t){
          var e=this;
          if(t){
            var i, n=e.get("dragPrePos"), r=e.get("graph"), o=r.getPointByClient(t.clientX, t.clientY);
            i=t.x-n.x<0?.95:1/.95;
            var a=e.get("maxR"), s=e.get("minR"), c=e.get("r");
            (c>(a||r.get("height"))&&i>1||c<(s||.05*r.get("height"))&&i<1)&&(i=1), c*=i, e.set("r", c), e.set("r2", c*c);
            var h=e.get("d");
            e.set("molecularParam", (h+1)*c), e.magnify(t, o), e.set("dragPrePos", {
              x:t.x, y:t.y
            })
          }
        }, e.prototype.scaleDByWheel=function(t){
          var e=this;
          if(t||t.originalEvent){
            t.preventDefault&&t.preventDefault();
            var i=0;
            i=t.originalEvent.wheelDelta<0?-.1:.1;
            var n=e.get("d")+i, r=e.get("maxD"), o=e.get("minD");
            if(n<r&&n>o){
              e.set("d", n);
              var a=e.get("r");
              e.set("molecularParam", (n+1)*a);
              var s=e.get("delegate"), c=s?{
                x:s.attr("x"), y:s.attr("y")
              }
              :void 0;
              e.set("delegateCenterDiff", void 0), e.magnify(t, c)
            }
          }
        }, e.prototype.scaleDByDrag=function(t){
          var e=this, i=e.get("dragPrePos"), n=t.x-i.x>0?.1:-.1, r=e.get("d")+n, o=e.get("maxD"), a=e.get("minD");
          if(r<o&&r>a){
            e.set("d", r);
            var s=e.get("r");
            e.set("molecularParam", (r+1)*s), e.magnify(t)
          }
          e.set("dragPrePos", {
            x:t.x, y:t.y
          })
        }, e.prototype.magnify=function(t, e){
          var i=this;
          i.restoreCache();
          var n=i.get("graph"), r=i.get("cachedMagnifiedModels"), o=i.get("cachedOriginPositions"), a=i.get("showLabel"), s=i.get("r"), c=i.get("r2"), h=i.get("d"), l=i.get("molecularParam"), d=n.getNodes(), g=d.length, p=e?{
            x:e.x, y:e.y
          }
          :{
            x:t.x, y:t.y
          };
          !i.get("dragging")||"mousemove"!==i.get("trigger")&&"click"!==i.get("trigger")||(p=i.get("cacheCenter"));
          var u=i.get("delegateCenterDiff");
          u&&(p.x+=u.x, p.y+=u.y), i.updateDelegate(p, s);
          for(var f=0;
          f<g;
          f++){
            var v=d[
              f
            ].getModel(), y=v.x, m=v.y;
            if(!isNaN(y)&&!isNaN(m)){
              var x=(y-p.x)*(y-p.x)+(m-p.y)*(m-p.y);
              if(!isNaN(x)&&x<c&&0!==x){
                var b=Math.sqrt(x), w=l*b/(h*b+s), k=(y-p.x)/b, S=(m-p.y)/b;
                if(v.x=k*w+p.x, v.y=S*w+p.y, o[
                  v.id
                ]
                ||(o[
                  v.id
                ]
                ={
                  x:y, y:m, texts:[
                  ]
                }), r.push(v), a&&2*b<s)for(var C=d[
                  f
                ].getContainer().getChildren(), M=C.length, E=0;
                E<M;
                E++){
                  var T=C[
                    E
                  ];
                  "text"===T.get("type")&&(o[
                    v.id
                  ].texts.push({
                    visible:T.get("visible"), shape:T
                  }), T.set("visible", !0))
                }
              }
            }
          }
          n.refreshPositions()
        }, e.prototype.restoreCache=function(){
          for(var t=this, e=t.get("cachedMagnifiedModels"), i=t.get("cachedOriginPositions"), n=e.length, r=0;
          r<n;
          r++){
            var o=e[
              r
            ], a=i[
              o.id
            ];
            o.x=a.x, o.y=a.y;
            for(var s=a.texts.length, c=0;
            c<s;
            c++){
              var h=a.texts[
                c
              ];
              h.shape.set("visible", h.visible)
            }
          }
          t.set("cachedMagnifiedModels", [
          ]), t.set("cachedOriginPositions", {
          })
        }, e.prototype.updateParams=function(t){
          var e=this, i=t.r, n=t.d, r=t.trigger, o=t.minD, a=t.maxD, s=t.minR, c=t.maxR, h=t.scaleDBy, l=t.scaleRBy;
          isNaN(t.r)||(e.set("r", i), e.set("r2", i*i)), isNaN(n)||e.set("d", n), isNaN(a)||e.set("maxD", a), isNaN(o)||e.set("minD", o), isNaN(c)||e.set("maxR", c), isNaN(s)||e.set("minR", s);
          var d, g=e.get("d"), p=e.get("r");
          (e.set("molecularParam", (g+1)*p), "mousemove"!==r&&"click"!==r&&"drag"!==r||e.set("trigger", r), "drag"===h||"wheel"===h||"unset"===h)&&(e.set("scaleDBy", h), e.get("delegate").remove(), e.get("delegate").destroy(), (d=e.get("dPercentText"))&&(d.remove(), d.destroy()));
          "drag"!==l&&"wheel"!==l&&"unset"!==l||(e.set("scaleRBy", l), e.get("delegate").remove(), e.get("delegate").destroy(), (d=e.get("dPercentText"))&&(d.remove(), d.destroy()))
        }, e.prototype.updateDelegate=function(t, e){
          var i=this, n=this, r=n.get("graph"), o=n.get("delegate");
          if(!o||o.destroyed){
            var a=r.get("group"), s=n.get("delegateStyle")||L;
            o=a.addShape("circle", {
              attrs:B({
                r:e/1.5, x:t.x, y:t.y
              }, s), name:"lens-shape", draggable:!0
            }), "drag"!==this.get("trigger")&&("wheel"===this.get("scaleRBy")?o.on("mousewheel", (function(t){
              n.scaleRByWheel(t)
            })):"drag"===this.get("scaleRBy")&&(o.on("dragstart", (function(t){
              n.set("dragging", !0), n.set("cacheCenter", {
                x:t.x, y:t.y
              }), n.set("dragPrePos", {
                x:t.x, y:t.y
              })
            })), o.on("drag", (function(t){
              n.scaleRByDrag(t)
            })), o.on("dragend", (function(t){
              n.set("dragging", !1)
            }))), "wheel"===this.get("scaleDBy")?o.on("mousewheel", (function(t){
              i.scaleDByWheel(t)
            })):"drag"===this.get("scaleDBy")&&(o.on("dragstart", (function(t){
              n.set("dragging", !0), n.set("cacheCenter", {
                x:t.x, y:t.y
              }), n.set("dragPrePos", {
                x:t.x, y:t.y
              })
            })), o.on("drag", (function(t){
              i.scaleDByDrag(t)
            })), o.on("dragend", (function(t){
              n.set("dragging", !1)
            }))))
          }
          else o.attr({
            x:t.x, y:t.y, r:e/1.5
          });
          if(n.get("showDPercent")){
            var c=Math.round((n.get("d")-n.get("minD"))/(n.get("maxD")-n.get("minD"))*100), h=n.get("dPercentText"), l=t.y+e/1.5+16;
            if(!h||h.destroyed)h=r.get("group").addShape("text", {
              attrs:{
                text:"".concat(c, "%"), x:t.x, y:l, fill:"#aaa", stroke:"#fff", lineWidth:1, fontSize:12
              }
            }), n.set("dPercentText", h);
            else h.attr({
              text:"".concat(c, "%"), x:t.x, y:l
            })
          }
          n.set("delegate", o)
        }, e.prototype.clear=function(){
          var t=this.get("graph");
          this.restoreCache(), t.refreshPositions();
          var e=this.get("delegate");
          e&&!e.destroyed&&(e.remove(), e.destroy());
          var i=this.get("dPercentText");
          i&&!i.destroyed&&(i.remove(), i.destroy())
        }, e.prototype.destroy=function(){
          this.clear()
        }, e
      }
      (a);
      var I=function(){
        var t=function(e, i){
          return(t=Object.setPrototypeOf||{
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
          })(e, i)
        };
        return function(e, i){
          if("function"!=typeof i&&null!==i)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");
          function n(){
            this.constructor=e
          }
          t(e, i), e.prototype=null===i?Object.create(i):(n.prototype=i.prototype, new n)
        }
      }
      ();
      "undefined"!=typeof document&&g()("\n  .g6-component-toolbar {\n    position: absolute;\n    list-style-type: none;\n    padding: 6px;\n    left: 0px;\n    top: 0px;\n    background-color: rgba(255, 255, 255, 0.9);\n    border: 1px solid #e2e2e2;\n    border-radius: 4px;\n    font-size: 12px;\n    color: #545454;\n    margin: 0;\n  }\n  .g6-component-toolbar li {\n    float: left;\n    text-align: center;\n    width: 35px;\n    height: 24px;\n    cursor: pointer;\n\t\tlist-style-type:none;\n    list-style: none;\n    margin-left: 0px;\n  }\n  .g6-component-toolbar li .icon {\n    opacity: 0.7;\n  }\n  .g6-component-toolbar li .icon:hover {\n    opacity: 1;\n  }\n");
      const O=function(t){
        function e(e){
          return t.call(this, e)||this
        }
        return I(e, t), e.prototype.getDefaultCfgs=function(){
          return{
            handleClick:void 0, getContent:function(t){
              return'\n          <ul class=\'g6-component-toolbar\'>\n            <li code=\'redo\'>\n              <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24">\n                <path d="M256 682.666667c0-102.741333 66.730667-213.333333 213.333333-213.333334 107.008 0 190.762667 56.576 230.570667 125.354667L611.968 682.666667H853.333333v-241.365334l-91.562666 91.562667C704.768 448.469333 601.130667 384 469.333333 384c-196.096 0-298.666667 150.229333-298.666666 298.666667h85.333333z" fill="" p-id="2041"></path>\n              </svg>\n            </li>\n            <li code=\'undo\'>\n              <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24">\n                <path d="M170.666667 682.666667h241.365333l-87.936-87.978667C363.904 525.909333 447.658667 469.333333 554.666667 469.333333c146.602667 0 213.333333 110.592 213.333333 213.333334h85.333333c0-148.437333-102.570667-298.666667-298.666666-298.666667-131.797333 0-235.392 64.469333-292.48 148.821333L170.666667 441.301333V682.666667z" fill="" p-id="2764"></path>\n              </svg>\n            </li>\n            <li  code=\'zoomOut\'>\n              <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24">\n                <path d="M658.432 428.736a33.216 33.216 0 0 1-33.152 33.152H525.824v99.456a33.216 33.216 0 0 1-66.304 0V461.888H360.064a33.152 33.152 0 0 1 0-66.304H459.52V296.128a33.152 33.152 0 0 1 66.304 0V395.52H625.28c18.24 0 33.152 14.848 33.152 33.152z m299.776 521.792a43.328 43.328 0 0 1-60.864-6.912l-189.248-220.992a362.368 362.368 0 0 1-215.36 70.848 364.8 364.8 0 1 1 364.8-364.736 363.072 363.072 0 0 1-86.912 235.968l192.384 224.64a43.392 43.392 0 0 1-4.8 61.184z m-465.536-223.36a298.816 298.816 0 0 0 298.432-298.432 298.816 298.816 0 0 0-298.432-298.432A298.816 298.816 0 0 0 194.24 428.8a298.816 298.816 0 0 0 298.432 298.432z"></path>\n              </svg>\n            </li>\n            <li code=\'zoomIn\'>\n              <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24">\n                <path d="M639.936 416a32 32 0 0 1-32 32h-256a32 32 0 0 1 0-64h256a32 32 0 0 1 32 32z m289.28 503.552a41.792 41.792 0 0 1-58.752-6.656l-182.656-213.248A349.76 349.76 0 0 1 480 768 352 352 0 1 1 832 416a350.4 350.4 0 0 1-83.84 227.712l185.664 216.768a41.856 41.856 0 0 1-4.608 59.072zM479.936 704c158.784 0 288-129.216 288-288S638.72 128 479.936 128a288.32 288.32 0 0 0-288 288c0 158.784 129.216 288 288 288z" p-id="3853"></path>\n              </svg>\n            </li>\n            <li code=\'realZoom\'>\n              <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="24">\n                <path d="M384 320v384H320V320h64z m256 0v384H576V320h64zM512 576v64H448V576h64z m0-192v64H448V384h64z m355.968 576H92.032A28.16 28.16 0 0 1 64 931.968V28.032C64 12.608 76.608 0 95.168 0h610.368L896 192v739.968a28.16 28.16 0 0 1-28.032 28.032zM704 64v128h128l-128-128z m128 192h-190.464V64H128v832h704V256z"></path>\n              </svg>\n            </li>\n            <li code=\'autoZoom\'>\n              <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="24">\n                <path d="M684.288 305.28l0.128-0.64-0.128-0.64V99.712c0-19.84 15.552-35.904 34.496-35.712a35.072 35.072 0 0 1 34.56 35.776v171.008h170.944c19.648 0 35.84 15.488 35.712 34.432a35.072 35.072 0 0 1-35.84 34.496h-204.16l-0.64-0.128a32.768 32.768 0 0 1-20.864-7.552c-1.344-1.024-2.816-1.664-3.968-2.816-0.384-0.32-0.512-0.768-0.832-1.088a33.472 33.472 0 0 1-9.408-22.848zM305.28 64a35.072 35.072 0 0 0-34.56 35.776v171.008H99.776A35.072 35.072 0 0 0 64 305.216c0 18.944 15.872 34.496 35.84 34.496h204.16l0.64-0.128a32.896 32.896 0 0 0 20.864-7.552c1.344-1.024 2.816-1.664 3.904-2.816 0.384-0.32 0.512-0.768 0.768-1.088a33.024 33.024 0 0 0 9.536-22.848l-0.128-0.64 0.128-0.704V99.712A35.008 35.008 0 0 0 305.216 64z m618.944 620.288h-204.16l-0.64 0.128-0.512-0.128c-7.808 0-14.72 3.2-20.48 7.68-1.28 1.024-2.752 1.664-3.84 2.752-0.384 0.32-0.512 0.768-0.832 1.088a33.664 33.664 0 0 0-9.408 22.912l0.128 0.64-0.128 0.704v204.288c0 19.712 15.552 35.904 34.496 35.712a35.072 35.072 0 0 0 34.56-35.776V753.28h170.944c19.648 0 35.84-15.488 35.712-34.432a35.072 35.072 0 0 0-35.84-34.496z m-593.92 11.52c-0.256-0.32-0.384-0.768-0.768-1.088-1.088-1.088-2.56-1.728-3.84-2.688a33.088 33.088 0 0 0-20.48-7.68l-0.512 0.064-0.64-0.128H99.84a35.072 35.072 0 0 0-35.84 34.496 35.072 35.072 0 0 0 35.712 34.432H270.72v171.008c0 19.84 15.552 35.84 34.56 35.776a35.008 35.008 0 0 0 34.432-35.712V720l-0.128-0.64 0.128-0.704a33.344 33.344 0 0 0-9.472-22.848zM512 374.144a137.92 137.92 0 1 0 0.128 275.84A137.92 137.92 0 0 0 512 374.08z"></path>\n              </svg>\n            </li>\n          </ul>\n        '
            }, zoomSensitivity:2
          }
        }, e.prototype.init=function(){
          var t=this, e=this.get("graph"), i=this.get("getContent")(e), a=i;
          (0, o.isString)(i)&&(a=(0, n.A)(i));
          var s=this.get("className");
          a.setAttribute("class", s||"g6-component-toolbar");
          var c=this.get("container");
          c||(c=this.get("graph").get("container")), (0, o.isString)(c)&&(c=document.getElementById(c)), c.appendChild(a), this.set("toolBar", a);
          var h=this.get("handleClick");
          a.addEventListener("click", (function(i){
            var n=function(t){
              if(!t)return[
              ];
              if(t.composedPath)return t.composedPath();
              for(var e=[
              ], i=t.target;
              i;
              ){
                if(e.push(i), "HTML"===i.tagName)return e.push(document, window), e;
                i=i.parentElement
              }
              return e
            }
            (i).filter((function(t){
              return"LI"===t.nodeName
            }));
            if(0!==n.length){
              var r=n[
                0
              ].getAttribute("code");
              r&&(h?h(r, e):t.handleDefaultOperator(r))
            }
          }));
          var l=this.get("position");
          l&&(0, r.A)(a, {
            top:"".concat(l.y, "px"), left:"".concat(l.x, "px")
          }), this.bindUndoRedo()
        }, e.prototype.bindUndoRedo=function(){
          var t=this.get("graph"), e=document.querySelector('.g6-component-toolbar li[code="undo"]'), i=document.querySelector('.g6-component-toolbar li[code="undo"] svg'), n=document.querySelector('.g6-component-toolbar li[code="redo"]'), r=document.querySelector('.g6-component-toolbar li[code="redo"] svg');
          e&&i&&n&&r&&(e.setAttribute("style", "cursor: not-allowed"), i.setAttribute("style", "opacity: 0.4"), n.setAttribute("style", "cursor: not-allowed"), r.setAttribute("style", "opacity: 0.4"), t.on("stackchange", (function(t){
            var o=t.undoStack, a=t.redoStack, s=o.length, c=a.length;
            0===s?(e.setAttribute("style", "cursor: not-allowed"), i.setAttribute("style", "opacity: 0.4")):(e.removeAttribute("style"), i.removeAttribute("style")), 0===c?(n.setAttribute("style", "cursor: not-allowed"), r.setAttribute("style", "opacity: 0.4")):(n.removeAttribute("style"), r.removeAttribute("style"))
          })))
        }, e.prototype.undo=function(){
          var t=this.get("graph"), e=t.getUndoStack();
          if(e&&0!==e.length){
            var i=e.pop();
            if(i){
              var n=i.action;
              t.pushStack(n, (0, o.clone)(i.data), "redo");
              var r=i.data.before;
              if("add"===n&&(r=i.data.after), !r)return;
              switch(n){
                case"visible":Object.keys(r).forEach((function(e){
                  var i=r[
                    e
                  ];
                  i&&i.forEach((function(e){
                    var i=t.findById(e.id);
                    e.visible?t.showItem(i, !1):t.hideItem(i, !1)
                  }))
                }));
                break;
                case"render":case"update":Object.keys(r).forEach((function(e){
                  var i=r[
                    e
                  ];
                  i&&i.forEach((function(e){
                    var i=t.findById(e.id);
                    delete e.id, t.updateItem(i, e, !1), "combo"===i.getType()&&t.updateCombo(i)
                  }))
                }));
                break;
                case"changedata":t.changeData(r, !1);
                break;
                case"delete":Object.keys(r).forEach((function(e){
                  var i=r[
                    e
                  ];
                  i&&i.forEach((function(e){
                    var i=e.itemType;
                    delete e.itemType, t.addItem(i, e, !1)
                  }))
                }));
                break;
                case"add":Object.keys(r).forEach((function(e){
                  var i=r[
                    e
                  ];
                  i&&i.forEach((function(e){
                    t.removeItem(e.id, !1)
                  }))
                }));
                break;
                case"updateComboTree":Object.keys(r).forEach((function(e){
                  var i=r[
                    e
                  ];
                  i&&i.forEach((function(e){
                    t.updateComboTree(e.id, e.parentId, !1)
                  }))
                }));
                break;
                case"createCombo":var a=i.data.after.combos, s=a[
                  a.length-1
                ];
                Object.keys(r).forEach((function(e){
                  var i=r[
                    e
                  ];
                  i&&i.forEach((function(e){
                    t.updateComboTree(e.id, e.parentId, !1)
                  }))
                })), t.removeItem(s.id, !1);
                break;
                case"uncombo":var c=r.combos[
                  r.combos.length-1
                ], h=r.nodes.concat(r.combos).map((function(t){
                  return t.id
                })).filter((function(t){
                  return t!==c.id
                }));
                t.createCombo(c, h, !1);
                break;
                case"layout":t.updateLayout(r, void 0, void 0, !1)
              }
            }
          }
        }, e.prototype.redo=function(){
          var t=this.get("graph"), e=t.getRedoStack();
          if(e&&0!==e.length){
            var i=e.pop();
            if(i){
              var n=i.action, r=i.data.after;
              if(t.pushStack(n, (0, o.clone)(i.data)), "delete"===n&&(r=i.data.before), !r)return;
              switch(n){
                case"visible":Object.keys(r).forEach((function(e){
                  var i=r[
                    e
                  ];
                  i&&i.forEach((function(e){
                    var i=t.findById(e.id);
                    e.visible?t.showItem(i, !1):t.hideItem(i, !1)
                  }))
                }));
                break;
                case"render":case"update":Object.keys(r).forEach((function(e){
                  var i=r[
                    e
                  ];
                  i&&i.forEach((function(e){
                    var i=t.findById(e.id);
                    delete e.id, t.updateItem(i, e, !1), "combo"===i.getType()&&t.updateCombo(i)
                  }))
                }));
                break;
                case"changedata":t.changeData(r, !1);
                break;
                case"delete":r.edges&&r.edges.forEach((function(e){
                  t.removeItem(e.id, !1)
                })), r.nodes&&r.nodes.forEach((function(e){
                  t.removeItem(e.id, !1)
                })), r.combos&&r.combos.forEach((function(e){
                  t.removeItem(e.id, !1)
                }));
                break;
                case"add":Object.keys(r).forEach((function(e){
                  var i=r[
                    e
                  ];
                  i&&i.forEach((function(e){
                    var i=e.itemType;
                    delete e.itemType, t.addItem(i, e, !1)
                  }))
                }));
                break;
                case"updateComboTree":Object.keys(r).forEach((function(e){
                  var i=r[
                    e
                  ];
                  i&&i.forEach((function(e){
                    t.updateComboTree(e.id, e.parentId, !1)
                  }))
                }));
                break;
                case"createCombo":var a=r.combos[
                  r.combos.length-1
                ];
                t.createCombo(a, a.children.map((function(t){
                  return t.id
                })), !1);
                break;
                case"uncombo":var s=i.data.before.combos, c=s[
                  s.length-1
                ];
                t.uncombo(c.id, !1);
                break;
                case"layout":t.updateLayout(r, void 0, void 0, !1)
              }
            }
          }
        }, e.prototype.zoomOut=function(){
          var t=this.get("graph"), e=t.getZoom(), i=1/(1-.05*this.get("zoomSensitivity"));
          i*e>(this.get("maxZoom")||t.get("maxZoom"))||t.zoomTo(e*i)
        }, e.prototype.zoomIn=function(){
          var t=this.get("graph"), e=t.getZoom(), i=1-.05*this.get("zoomSensitivity");
          i*e<(this.get("minZoom")||t.get("minZoom"))||t.zoomTo(e*i)
        }, e.prototype.realZoom=function(){
          this.get("graph").zoomTo(1)
        }, e.prototype.autoZoom=function(){
          this.get("graph").fitView([
            20, 20
          ])
        }, e.prototype.handleDefaultOperator=function(t){
          switch(t){
            case"redo":this.redo();
            break;
            case"undo":this.undo();
            break;
            case"zoomOut":this.zoomOut();
            break;
            case"zoomIn":this.zoomIn();
            break;
            case"realZoom":this.realZoom();
            break;
            case"autoZoom":this.autoZoom()
          }
        }, e.prototype.destroy=function(){
          var t=this.get("toolBar");
          if(t){
            var e=this.get("container");
            e||(e=this.get("graph").get("container")), (0, o.isString)(e)&&(e=document.getElementById(e)), e.removeChild(t)
          }
          var i=this.get("handleClick");
          i&&t.removeEventListener("click", i)
        }, e
      }
      (a);
      var P=function(){
        var t=function(e, i){
          return(t=Object.setPrototypeOf||{
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
          })(e, i)
        };
        return function(e, i){
          if("function"!=typeof i&&null!==i)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");
          function n(){
            this.constructor=e
          }
          t(e, i), e.prototype=null===i?Object.create(i):(n.prototype=i.prototype, new n)
        }
      }
      ();
      "undefined"!=typeof document&&g()("\n  .g6-component-tooltip {\n    border: 1px solid #e2e2e2;\n    border-radius: 4px;\n    font-size: 12px;\n    color: #545454;\n    background-color: rgba(255, 255, 255, 0.9);\n    padding: 10px 8px;\n    box-shadow: rgb(174, 174, 174) 0px 0px 10px;\n  }\n  .tooltip-type {\n    padding: 0;\n    margin: 0;\n  }\n  .tooltip-id {\n    color: #531dab;\n  }\n");
      const D=function(t){
        function e(e){
          return t.call(this, e)||this
        }
        return P(e, t), e.prototype.getDefaultCfgs=function(){
          return{
            offsetX:6, offsetY:6, getContent:function(t){
              return"\n          <h4 class='tooltip-type'>类型：".concat(t.item.getType(), "</h4>\n          <span class='tooltip-id'>ID：").concat(t.item.getID(), "</span>\n        ")
            }, shouldBegin:function(t){
              return!0
            }, itemTypes:[
              "node", "edge", "combo"
            ], trigger:"mouseenter", fixToNode:void 0
          }
        }, e.prototype.getEvents=function(){
          return"click"===this.get("trigger")?{
            "node:click":"onClick", "edge:click":"onClick", "combo:click":"onClick", "canvas:click":"onMouseLeave", afterremoveitem:"onMouseLeave", contextmenu:"onMouseLeave", drag:"onMouseLeave"
          }
          :{
            "node:mouseenter":"onMouseEnter", "node:mouseleave":"onMouseLeave", "node:mousemove":"onMouseMove", "edge:mouseenter":"onMouseEnter", "edge:mouseleave":"onMouseLeave", "edge:mousemove":"onMouseMove", "combo:mouseenter":"onMouseEnter", "combo:mouseleave":"onMouseLeave", "combo:mousemove":"onMouseMove", afterremoveitem:"onMouseLeave", contextmenu:"onMouseLeave", "node:drag":"onMouseLeave"
          }
        }, e.prototype.init=function(){
          var t=this, e=t.get("className")||"g6-component-tooltip", i=(0, n.A)("<div class='".concat(e, "'></div>")), a=t.get("container");
          a||(a=t.get("graph").get("container")), (0, o.isString)(a)&&(a=document.getElementById(a)), (0, r.A)(i, {
            position:"absolute", visibility:"hidden", display:"none"
          }), a.appendChild(i), "click"!==t.get("trigger")&&(i.addEventListener("mouseenter", (function(t){
            (0, r.A)(i, {
              visibility:"visible", display:"unset"
            })
          })), i.addEventListener("mouseleave", (function(e){
            t.hideTooltip()
          }))), t.set("tooltip", i)
        }, e.prototype.onClick=function(t){
          var e=this.get("itemTypes");
          if(!t.item||!t.item.getType||-1!==e.indexOf(t.item.getType())){
            var i=t.item, n=this.get("graph");
            this.currentTarget===i?(this.currentTarget=null, this.hideTooltip(), n.emit("tooltipchange", {
              item:t.item, action:"hide"
            })):(this.currentTarget=i, this.showTooltip(t), n.emit("tooltipchange", {
              item:t.item, action:"show"
            }))
          }
        }, e.prototype.onMouseEnter=function(t){
          var e=this.get("itemTypes");
          if(!t.item||!t.item.getType||-1!==e.indexOf(t.item.getType())){
            var i=t.item, n=this.get("graph");
            this.currentTarget=i, this.showTooltip(t), n.emit("tooltipchange", {
              item:t.item, action:"show"
            })
          }
        }, e.prototype.onMouseMove=function(t){
          var e=this.get("itemTypes");
          t.item&&t.item.getType&&-1===e.indexOf(t.item.getType())||this.currentTarget&&t.item===this.currentTarget&&this.showTooltip(t)
        }, e.prototype.onMouseLeave=function(){
          this.hideTooltip(), this.get("graph").emit("tooltipchange", {
            item:this.currentTarget, action:"hide"
          }), this.currentTarget=null
        }, e.prototype.clearContainer=function(){
          var t=this.get("tooltip");
          t&&(t.innerHTML="")
        }, e.prototype.showTooltip=function(t){
          if(t.item){
            var e=this.get("itemTypes");
            if(!t.item.getType||-1!==e.indexOf(t.item.getType())){
              var i=this.get("tooltip"), n=this.get("getContent")(t);
              (0, o.isString)(n)?i.innerHTML=n:(this.clearContainer(), i.appendChild(n)), this.updatePosition(t)
            }
          }
        }, e.prototype.hideTooltip=function(){
          var t=this.get("tooltip");
          t&&(0, r.A)(t, {
            visibility:"hidden", display:"none"
          })
        }, e.prototype.updatePosition=function(t){
          var e=this.get("shouldBegin"), i=this.get("tooltip");
          if(e(t)){
            var n=this.get("graph"), a=n.get("width"), s=n.get("height"), c=this.get("offsetX")||0, h=this.get("offsetY")||0, l=n.getPointByClient(t.clientX, t.clientY), d=this.get("fixToNode"), g=t.item;
            if(g.getType&&"node"===g.getType()&&d&&(0, o.isArray)(d)&&d.length>=2){
              var p=g.getBBox();
              l={
                x:p.minX+p.width*d[
                  0
                ], y:p.minY+p.height*d[
                  1
                ]
              }
            }
            var u=n.getCanvasByPoint(l.x, l.y), f=u.x, v=u.y, y=n.getContainer(), m={
              x:f+y.offsetLeft+c, y:v+y.offsetTop+h
            };
            (0, r.A)(i, {
              visibility:"visible", display:"unset"
            });
            var x=i.getBoundingClientRect();
            f+x.width+c>a&&(m.x-=x.width+c), v+x.height+h>s&&(m.y-=x.height+h, m.y<0&&(m.y=0)), (0, r.A)(i, {
              left:"".concat(m.x, "px"), top:"".concat(m.y, "px")
            })
          }
          else(0, r.A)(i, {
            visibility:"hidden", display:"none"
          })
        }, e.prototype.hide=function(){
          this.onMouseLeave()
        }, e.prototype.destroy=function(){
          var t=this.get("tooltip");
          if(t){
            var e=this.get("container");
            e||(e=this.get("graph").get("container")), (0, o.isString)(e)&&(e=document.getElementById(e)), e.removeChild(t)
          }
        }, e
      }
      (a);
      var N="timebarstartplay", G="timebarendplay", H="valuechange", _="timebarConfigChanged", R="playPauseBtn", j="nextStepBtn", Y="preStepBtn";
      const z=function(){
        function t(t){
          var e=t.x, i=void 0===e?0:e, n=t.y, r=void 0===n?0:n, o=t.container, a=t.text, s=t.padding, c=void 0===s?[
            4, 4, 4, 4
          ]
          :s, h=t.className, l=void 0===h?"g6-component-timebar-tooltip":h, d=t.backgroundColor, g=void 0===d?"#000":d, p=t.textColor, u=void 0===p?"#fff":p, f=t.opacity, v=void 0===f?.8:f, y=t.fontSize, m=void 0===y?12:y;
          this.container=o, this.className=l, this.backgroundColor=g, this.textColor=u, this.x=i, this.y=r, this.text=a, this.padding=c, this.opacity=v, this.fontSize=m, this.render()
        }
        return t.prototype.render=function(){
          var t=this, e=t.className, i=(t.x, t.y, t.backgroundColor), a=t.textColor, s=t.text, c=t.padding, h=t.opacity, l=t.fontSize, d=t.container, g=(0, n.A)("<div class='".concat(e, "' style=\"position: absolute; width: fit-content; height: fit-content; opacity: ").concat(h, '"></div>'));
          (0, o.isString)(d)&&(d=document.getElementById(d)), d.appendChild(g), t.parentHeight=d.offsetHeight, t.parentWidth=d.offsetWidth, (0, r.A)(g, {
            visibility:"hidden", top:0, left:0
          });
          var p=(0, n.A)("\n      <div style='position: absolute; white-space:nowrap; background-color: ".concat(i, "; font-size: ").concat(l, "px; border-radius: 4px; width: fit-content; height: fit-content; color: ").concat(a, "; padding: ").concat(c[
            0
          ], "px ").concat(c[
            1
          ], "px ").concat(c[
            2
          ], "px ").concat(c[
            3
          ], "px'></div>"));
          p.innerHTML=s, g.appendChild(p), t.backgroundDOM=p;
          var u=(0, n.A)("<div style='position: absolute; width: 0px; height: 0px; border-left: 5px solid transparent; border-right: 5px solid transparent; border-top: 10px solid ".concat(i, "'></div>"));
          g.appendChild(u), t.arrowDOM=u, t.container=g
        }, t.prototype.show=function(t){
          var e=this, i=t.text, n=t.x;
          t.y, t.clientX, t.clientY;
          e.backgroundDOM.innerHTML=i;
          var o=e.backgroundDOM.offsetWidth, a=e.backgroundDOM.offsetHeight, s=e.arrowDOM.offsetWidth, c=e.arrowDOM.offsetHeight;
          (0, r.A)(e.container, {
            top:"".concat(-a-c, "px"), left:"".concat(n, "px"), visibility:"visible"
          }), (0, r.A)(e.backgroundDOM, {
            marginLeft:"".concat(-o/2, "px")
          }), (0, r.A)(e.arrowDOM, {
            marginLeft:"".concat(-s/2, "px"), top:"".concat(a, "px")
          });
          var h=n-o/2, l=n+o/2;
          h<0?(0, r.A)(e.backgroundDOM, {
            marginLeft:"".concat(-o/2-h, "px")
          }):l>e.parentWidth&&(0, r.A)(e.backgroundDOM, {
            marginLeft:"".concat(-o/2-l+e.parentWidth+12, "px")
          })
        }, t.prototype.hide=function(){
          (0, r.A)(this.container, {
            top:0, left:0, visibility:"hidden"
          })
        }, t
      }
      ();
      var X=function(){
        return(X=Object.assign||function(t){
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
      };
      const F=function(){
        function t(t){
          this.config=(0, o.deepMix)({
          }, t), this.init()
        }
        return t.prototype.update=function(t){
          this.config=(0, o.deepMix)({
          }, this.config, t), this.updateElement(), this.renderMarker()
        }, t.prototype.init=function(){
          this.initElement(), this.renderMarker()
        }, t.prototype.initElement=function(){
          var t=this.config, e=t.group, i=t.style, n=i.scale, r=void 0===n?1:n, o=i.offsetX, a=void 0===o?0:o, s=i.offsetY, c=void 0===s?0:s, h=this.config.x+a, l=this.config.y+c, d=e.addGroup({
            name:R
          });
          this.startMarkerGroup=d.addGroup({
            name:R
          }), this.circle=e.addShape("circle", {
            attrs:X({
              x:h, y:l, r:this.config.r*r
            }, i), name:R
          }), this.startMarker=this.startMarkerGroup.addShape("path", {
            attrs:{
              path:this.getStartMarkerPath(h, l, r), fill:i.stroke||"#aaa"
            }, name:"start-marker"
          }), this.pauseMarkerGroup=d.addGroup({
            name:R
          });
          var g=.25*this.config.r*r, p=.5*this.config.r*Math.sqrt(3)*r;
          this.pauseLeftMarker=this.pauseMarkerGroup.addShape("rect", {
            attrs:{
              x:h-.375*this.config.r*r, y:l-p/2, width:g, height:p, fill:i.stroke||"#aaa", lineWidth:0
            }
          }), this.pauseRightMarker=this.pauseMarkerGroup.addShape("rect", {
            attrs:{
              x:h+1/8*this.config.r*r, y:l-p/2, width:g, height:p, fill:i.stroke||"#aaa", lineWidth:0
            }
          })
        }, t.prototype.updateElement=function(){
          var t=this.config.style, e=t.scale, i=void 0===e?1:e, n=t.offsetX, r=void 0===n?0:n, o=t.offsetY, a=void 0===o?0:o, s=this.config.x+r, c=this.config.y+a;
          this.circle.attr("x", s), this.circle.attr("y", c), this.circle.attr("r", this.config.r*i), this.startMarker.attr("path", this.getStartMarkerPath(s, c, i));
          var h=.25*this.config.r*i, l=.5*this.config.r*Math.sqrt(3)*i;
          this.pauseLeftMarker.attr("x", s-.375*this.config.r*i), this.pauseLeftMarker.attr("y", c-l/2), this.pauseLeftMarker.attr("width", h), this.pauseLeftMarker.attr("height", l), this.pauseRightMarker.attr("x", s+1/8*this.config.r*i), this.pauseRightMarker.attr("y", c-l/2), this.pauseRightMarker.attr("width", h), this.pauseRightMarker.attr("height", l)
        }, t.prototype.renderMarker=function(){
          this.config.isPlay?(this.startMarkerGroup.hide(), this.pauseMarkerGroup.show()):(this.startMarkerGroup.show(), this.pauseMarkerGroup.hide())
        }, t.prototype.getStartMarkerPath=function(t, e, i){
          var n=.5*this.config.r*Math.sqrt(3)*i;
          return[
            [
              "M", t-n/Math.sqrt(3)/2, e-n/2
            ], [
              "L", t+n/Math.sqrt(3), e
            ], [
              "L", t-n/Math.sqrt(3)/2, e+n/2
            ]
          ]
        }, t
      }
      ();
      var W=function(){
        return(W=Object.assign||function(t){
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
      }, V=y.pd, Z={
        fill:"#aaa", fillOpacity:.35, stroke:"#aaa"
      }, U={
        fill:"#fff"
      }, q={
        fill:"green"
      }, K={
        pointer:{
          fill:"#aaa", lineWidth:0
        }, scroller:{
          stroke:"#aaa", fill:"#aaa", lineWidth:1, lineAppendWidth:5, cursor:"pointer"
        }, text:{
          fill:"#aaa", textBaseline:"top"
        }
      }, J={
        check:{
          stroke:"green", lineWidth:3
        }, box:{
          fill:"#fff", stroke:"#aaa", lineWidth:2, radius:3, width:12, height:12
        }, text:{
          fill:"#aaa", fontSize:12, textBaseline:"top"
        }
      }, Q={
        speed:1, loop:!1, fill:"#fff", stroke:"#fff", hideTimeTypeController:!1, preBtnStyle:{
          fill:"#aaa", stroke:"#aaa"
        }, nextBtnStyle:{
          fill:"#aaa", stroke:"#aaa"
        }, playBtnStyle:{
          fill:"#aaa", stroke:"#aaa", fillOpacity:.05
        }, speedControllerStyle:K, timeTypeControllerStyle:J
      }, $=50, tt="single", et="range";
      const it=function(){
        function t(t){
          this.controllerCfg=(0, o.deepMix)({
          }, Q, t), this.group=t.group, this.controllerGroup=this.group.addGroup({
            name:"controller-group"
          }), this.speedAxisY=[
          ], this.currentSpeed=this.controllerCfg.speed, this.currentType=this.controllerCfg.defaultTimeType||et, this.fontFamily=t.fontFamily||"Arial, sans-serif", this.init()
        }
        return t.prototype.init=function(){
          this.renderPlayButton()
        }, t.prototype.getNextMarkerPath=function(t, e, i){
          return[
            [
              "M", t, e-i
            ], [
              "L", t+i, e
            ], [
              "L", t, e+i
            ], [
              "Z", t, e-i
            ], [
              "M", t, e
            ], [
              "L", t-i, e-i
            ], [
              "L", t-i, e+i
            ], [
              "Z"
            ]
          ]
        }, t.prototype.getPreMarkerPath=function(t, e, i){
          return[
            [
              "M", t, e-i
            ], [
              "L", t-i, e
            ], [
              "L", t, e+i
            ], [
              "L", t, e-i
            ], [
              "M", t, e
            ], [
              "L", t+i, e-i
            ], [
              "L", t+i, e+i
            ], [
              "Z"
            ]
          ]
        }, t.prototype.renderPlayButton=function(){
          var t=this.controllerCfg, e=t.width, i=t.height, n=t.x, r=t.y, o=t.hideTimeTypeController, a=t.fill, s=void 0===a?"#aaa":a, c=t.stroke, h=void 0===c?"green":c, l=t.containerStyle, d=void 0===l?{
          }
          :l, g=W(W({
          }, Z), t.playBtnStyle||{
          }), p=W(W({
          }, U), t.preBtnStyle||{
          }), u=W(W({
          }, q), t.nextBtnStyle||{
          }), f=i/2-5, v=r+10, y=this.controllerGroup.addShape("rect", {
            attrs:W({
              x:n, y:v, width:e, height:i, stroke:h, fill:s
            }, d), name:"container-rect"
          });
          this.playButton?this.playButton.update({
            x:e/2, y:v, r:f
          }):this.playButton=new F({
            group:this.controllerGroup, x:e/2, y:v+f+5, r:f, isPlay:this.isPlay, style:g
          });
          var m=p.offsetX||0, x=p.offsetY||0, b=(p.scale||1)*f;
          this.controllerGroup.addShape("path", {
            attrs:W({
              path:this.getPreMarkerPath(e/2-5*f+m, v+f+5+x, .5*b)
            }, p), name:Y
          });
          var w=u.offsetX||0, k=u.offsetY||0, S=(u.scale||1)*f;
          this.controllerGroup.addShape("path", {
            attrs:W({
              path:this.getNextMarkerPath(e/2+5*f+w, v+f+5+k, .5*S)
            }, u), name:j
          }), y.toBack(), this.renderSpeedBtn(), o||this.renderToggleTime(), this.bindEvent();
          var C=this.controllerCfg.scale, M=void 0===C?1:C, E=this.controllerGroup.getCanvasBBox(), T=(E.maxX+E.minX)/2, B=(E.maxY+E.minY)/2, L=V([
            1, 0, 0, 0, 1, 0, 0, 0, 1
          ], [
            [
              "t", -T, -B
            ], [
              "s", M, M
            ], [
              "t", T, B
            ]
          ]);
          this.controllerGroup.setMatrix(L)
        }, t.prototype.renderSpeedBtn=function(){
          var t=this.controllerCfg, e=t.y, i=t.width, n=t.hideTimeTypeController, r=W(W({
          }, K), this.controllerCfg.speedControllerStyle||{
          }), o=r.scroller, a=void 0===o?{
          }
          :o, s=r.text, c=void 0===s?{
          }
          :s, h=r.pointer, l=void 0===h?{
          }
          :h, d=r.scale, g=void 0===d?1:d, p=r.offsetX, u=void 0===p?0:p, f=r.offsetY, v=void 0===f?0:f, y=this.controllerGroup.addGroup({
            name:"speed-group"
          });
          this.speedGroup=y;
          var m=[
          ], x=5;
          this.speedAxisY=[
            19, 22, 26, 32, 39
          ];
          for(var b=0;
          b<5;
          b++){
            var w=e+this.speedAxisY[
              b
            ], k=i-(n?$:110);
            y.addShape("line", {
              attrs:W({
                x1:k, x2:k+15, y1:w, y2:w
              }, a), speed:x, name:"speed-rect"
            }), this.speedAxisY[
              b
            ]
            =w, m.push(x), x-=1
          }
          this.speedText=y.addShape("text", {
            attrs:W({
              x:i-(n?$:110)+20, y:this.speedAxisY[
                0
              ]
              +4, text:"1.0X", fontFamily:this.fontFamily||"Arial, sans-serif"
            }, c), name:"speed-text"
          }), this.speedPoint=y.addShape("path", {
            attrs:W({
              path:this.getPointerPath(i-(n?$:110), 0), matrix:[
                1, 0, 0, 0, 1, 0, 0, this.speedAxisY[
                  4
                ], 1
              ]
            }, l), name:"speed-pointer"
          });
          var S=this.speedGroup.getCanvasBBox(), C=(S.maxX+S.minX)/2, M=(S.maxY+S.minY)/2, E=this.speedGroup.getMatrix()||[
            1, 0, 0, 0, 1, 0, 0, 0, 1
          ];
          E=V(E, [
            [
              "t", -C, -M
            ], [
              "s", g, g
            ], [
              "t", C+u*g, M+v*g
            ]
          ]), this.speedGroup.setMatrix(E)
        }, t.prototype.getPointerPath=function(t, e){
          return[
            [
              "M", t, e
            ], [
              "L", t-10, e-4
            ], [
              "L", t-10, e+4
            ], [
              "Z"
            ]
          ]
        }, t.prototype.renderToggleTime=function(){
          var t, e, i=this.controllerCfg, n=i.width, r=i.defaultTimeType, o=W(W({
          }, J), this.controllerCfg.timeTypeControllerStyle||{
          }), a=o.scale, s=void 0===a?1:a, c=o.offsetX, h=void 0===c?0:c, l=o.offsetY, d=void 0===l?0:l, g=o.box, p=void 0===g?{
          }
          :g, u=o.check, f=void 0===u?{
          }
          :u, v=o.text, y=void 0===v?{
          }
          :v;
          this.toggleGroup=this.controllerGroup.addGroup({
            name:"toggle-group"
          });
          var m=r===tt;
          this.toggleGroup.addShape("rect", {
            attrs:W({
              x:n-$, y:this.speedAxisY[
                0
              ]
              +3.5
            }, p), isChecked:m, name:"toggle-model"
          }), this.checkedIcon=this.toggleGroup.addShape("path", {
            attrs:W({
              path:[
                [
                  "M", n-$+3, this.speedAxisY[
                    1
                  ]
                  +6
                ], [
                  "L", n-$+7, this.speedAxisY[
                    1
                  ]
                  +10
                ], [
                  "L", n-$+12, this.speedAxisY[
                    1
                  ]
                  +4
                ]
              ]
            }, f), capture:!1, name:"check-icon"
          }), m||this.checkedIcon.hide(), this.checkedText=this.toggleGroup.addShape("text", {
            attrs:W({
              text:m?(null===(t=this.controllerCfg)||void 0===t?void 0:t.timeRangeControllerText)||"时间范围":(null===(e=this.controllerCfg)||void 0===e?void 0:e.timePointControllerText)||"单一时间", x:n-$+15, y:this.speedAxisY[
                0
              ]
              +4, fontFamily:"undefined"!=typeof window&&window.getComputedStyle(document.body, null).getPropertyValue("font-family")||"Arial, sans-serif"
            }, y), name:"checked-text"
          });
          var x=this.toggleGroup.getCanvasBBox(), b=(x.maxX+x.minX)/2, w=(x.maxY+x.minY)/2, k=this.toggleGroup.getMatrix()||[
            1, 0, 0, 0, 1, 0, 0, 0, 1
          ];
          k=V(k, [
            [
              "t", -b, -w
            ], [
              "s", s, s
            ], [
              "t", b+h*s, w+d*s
            ]
          ]), this.toggleGroup.setMatrix(k)
        }, t.prototype.bindEvent=function(){
          var t=this;
          this.speedGroup.on("speed-rect:click", (function(e){
            var i=e.target.attr("y1"), n=t.speedPoint.attr("matrix"), r=t.speedAxisY.indexOf(n[
              7
            ]
            ||0), o=t.speedAxisY.indexOf(i), a=t.speedAxisY[
              o
            ]
            -t.speedAxisY[
              r
            ];
            n=V(n, [
              [
                "t", 0, a
              ]
            ]), t.speedPoint.setMatrix(n), t.currentSpeed=t.speedAxisY.length-o, t.speedText.attr("text", "".concat(t.currentSpeed, ".0X")), t.group.emit(_, {
              speed:t.currentSpeed, type:t.currentType
            })
          })), this.speedGroup.on("mousewheel", (function(e){
            e.preventDefault();
            var i=t.speedPoint.attr("matrix")||[
              1, 0, 0, 0, 1, 0, 0, 0, 1
            ], n=i[
              7
            ], r=t.speedAxisY.indexOf(n);
            if(-1===r){
              var o=1/0;
              t.speedAxisY.forEach((function(t, e){
                var i=Math.abs(t-n);
                o>i&&(o=i, r=e)
              }))
            }
            r=e.originalEvent.deltaY>0?Math.max(0, r-1):Math.min(t.speedAxisY.length-1, r+1);
            var a=t.speedAxisY[
              r
            ]
            -n;
            i=V(i, [
              [
                "t", 0, a
              ]
            ]), t.speedPoint.setMatrix(i), t.currentSpeed=t.speedAxisY.length-r, t.speedText.attr("text", "".concat(t.currentSpeed, ".0X")), t.group.emit(_, {
              speed:t.currentSpeed, type:t.currentType
            })
          })), this.toggleGroup&&this.toggleGroup.on("toggle-model:click", (function(e){
            var i, n, r=e.target.get("isChecked");
            r?(t.checkedIcon.hide(), t.checkedText.attr("text", (null===(n=t.controllerCfg)||void 0===n?void 0:n.timePointControllerText)||"单一时间"), t.currentType=et):(t.checkedIcon.show(), t.checkedText.attr("text", (null===(i=t.controllerCfg)||void 0===i?void 0:i.timeRangeControllerText)||"时间范围"), t.currentType=tt), e.target.set("isChecked", !r), t.group.emit(_, {
              type:t.currentType, speed:t.currentSpeed
            })
          }))
        }, t.prototype.destroy=function(){
          this.speedGroup.off("speed-rect:click"), this.toggleGroup&&(this.toggleGroup.off("toggle-model:click"), this.toggleGroup.destroy()), this.speedGroup.destroy()
        }, t
      }
      ();
      var nt=function(){
        return(nt=Object.assign||function(t){
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
      }, rt=y.pd, ot={
        fill:"#5B8FF9"
      }, at={
        fill:"#e6e8e9"
      };
      const st=function(){
        function t(t){
          this.frameCount=0, this.fontFamily="Arial, sans-serif";
          var e=t.graph, i=t.canvas, n=t.group, r=t.width, o=t.height, a=t.padding, s=t.data, c=t.start, h=t.end, l=t.x, d=void 0===l?0:l, g=t.y, p=void 0===g?0:g, u=t.tickLabelFormatter, f=t.selectedTickStyle, v=void 0===f?ot:f, y=t.unselectedTickStyle, m=void 0===y?at:y, x=t.tooltipBackgroundColor, b=t.tooltipFomatter, w=t.tickLabelStyle, k=t.controllerCfg, S=void 0===k?{
            speed:1
          }
          :k;
          this.graph=e, this.group=n, this.sliceGroup=n.addGroup({
            name:"slice-group"
          }), this.canvas=i, this.width=r, this.height=o, this.padding=a, this.data=s, this.start=c, this.end=h, this.tickLabelFormatter=u, this.tickLabelStyle=w||{
          }, this.selectedTickStyle=v, this.unselectedTickStyle=m, this.controllerCfg=S, this.currentSpeed=S.speed||1, this.x=d, this.y=p, this.tooltipBackgroundColor=x, this.tooltipFomatter=b, this.fontFamily="undefined"!=typeof window&&window.getComputedStyle(document.body, null).getPropertyValue("font-family")||"Arial, sans-serif", this.renderSlices(), this.initEvent()
        }
        return t.prototype.renderSlices=function(){
          var t=this, e=this, i=e.width, n=e.height, r=e.padding, a=e.data, s=e.start, c=e.end, h=e.tickLabelFormatter, l=e.selectedTickStyle, d=e.unselectedTickStyle, g=e.tickLabelStyle, p=i-2*r, u=n-(3*r+4+10)-2*r, f=a.length, v=(p-2*(f-1))/f;
          this.tickWidth=v;
          var y=this.sliceGroup, m=[
          ], x=[
          ], b=Math.round(f*s), w=Math.round(f*c);
          this.startTickRectId=b, this.endTickRectId=w;
          var k=g.rotate;
          delete g.rotate, a.forEach((function(e, n){
            var a=n>=b&&n<=w?l:d, s=y.addShape("rect", {
              attrs:nt({
                x:r+n*(v+2), y:r, width:v, height:u
              }, a), draggable:!0, name:"tick-rect-".concat(n)
            }), c=y.addShape("rect", {
              attrs:{
                x:r+n*v+2*(2*n-1)/2, y:r, width:0===n||n===f-1?v+1:v+2, height:u, fill:"#fff", opacity:0
              }, draggable:!0, name:"pick-rect-".concat(n)
            });
            c.toFront();
            var p, S=s.getBBox(), C=(S.minX+S.maxX)/2;
            if(m.push({
              rect:s, pickRect:c, value:e.date, x:C, y:S.minY
            }), h?(p=h(e), !(0, o.isString)(p)&&p&&(p=e.date)):n%Math.round(f/10)==0&&(p=e.date), p){
              x.push(p);
              var M=S.maxY+2*r;
              y.addShape("line", {
                attrs:{
                  stroke:"#BFBFBF", x1:C, y1:M, x2:C, y2:M+4
                }, name:"tick-line"
              });
              var E=M+4+r, T=y.addShape("text", {
                attrs:nt({
                  fill:"#8c8c8c", stroke:"#fff", lineWidth:1, x:C, y:E, textAlign:"center", text:p, textBaseline:"top", fontSize:10, fontFamily:t.fontFamily||"Arial, sans-serif"
                }, g), capture:!1, name:"tick-label"
              }), B=T.getBBox();
              if(B.maxX>i?T.attr("textAlign", "right"):B.minX<0&&T.attr("textAlign", "left"), (0, o.isNumber)(k)&&10!==x.length){
                var L=rt([
                  1, 0, 0, 0, 1, 0, 0, 0, 1
                ], [
                  [
                    "t", -C, -E
                  ], [
                    "r", k
                  ], [
                    "t", C-5, E+2
                  ]
                ]);
                T.attr({
                  textAlign:"left", matrix:L
                })
              }
              1===x.length?T.attr({
                textAlign:"left"
              }):10===x.length&&T.attr({
                textAlign:"right"
              })
            }
          })), this.tickRects=m;
          var S=this.group;
          this.currentSpeed=1, this.controllerBtnGroup=new it(nt({
            group:S, x:this.x, y:this.y+n+5, width:i, height:40, hideTimeTypeController:!0, speed:this.currentSpeed, fontFamily:this.fontFamily||"Arial, sans-serif"
          }, this.controllerCfg))
        }, t.prototype.initEvent=function(){
          var t=this, e=this.sliceGroup;
          e.on("click", (function(e){
            var i=e.target;
            if("rect"===i.get("type")&&i.get("name")){
              var n=parseInt(i.get("name").split("-")[
                2
              ], 10);
              if(!isNaN(n)){
                var r=t.tickRects, o=t.unselectedTickStyle;
                r.forEach((function(t){
                  t.rect.attr(o)
                }));
                var a=t.selectedTickStyle;
                r[
                  n
                ].rect.attr(a), t.startTickRectId=n, t.endTickRectId=n;
                var s=n/r.length;
                t.graph.emit(H, {
                  value:[
                    s, s
                  ]
                })
              }
            }
          })), e.on("dragstart", (function(e){
            var i=t.tickRects, n=t.unselectedTickStyle;
            i.forEach((function(t){
              t.rect.attr(n)
            }));
            var r=e.target, o=parseInt(r.get("name").split("-")[
              2
            ], 10), a=t.selectedTickStyle;
            i[
              o
            ].rect.attr(a), t.startTickRectId=o;
            var s=o/i.length;
            t.graph.emit(H, {
              value:[
                s, s
              ]
            }), t.dragging=!0
          })), e.on("dragover", (function(e){
            if(t.dragging&&"rect"===e.target.get("type")){
              for(var i=parseInt(e.target.get("name").split("-")[
                2
              ], 10), n=t.startTickRectId, r=t.tickRects, o=t.selectedTickStyle, a=t.unselectedTickStyle, s=0;
              s<r.length;
              s++){
                var c=s>=n&&s<=i?o:a;
                r[
                  s
                ].rect.attr(c)
              }
              var h=r.length;
              t.endTickRectId=i;
              var l=n/h, d=i/h;
              t.graph.emit(H, {
                value:[
                  l, d
                ]
              })
            }
          })), e.on("drop", (function(e){
            if(t.dragging&&(t.dragging=!1, "rect"===e.target.get("type"))){
              var i=t.startTickRectId, n=parseInt(e.target.get("name").split("-")[
                2
              ], 10);
              if(!(n<i)){
                var r=t.selectedTickStyle, o=t.tickRects;
                o[
                  n
                ].rect.attr(r), t.endTickRectId=n;
                var a=o.length, s=i/a, c=n/a;
                t.graph.emit(H, {
                  value:[
                    s, c
                  ]
                })
              }
            }
          }));
          var i=this, n=i.tooltipBackgroundColor, r=i.tooltipFomatter, o=i.canvas, a=new z({
            container:o.get("container"), backgroundColor:n
          }), s=this.tickRects;
          s.forEach((function(t){
            var e=t.pickRect;
            e.on("mouseenter", (function(t){
              var e=t.target;
              if("rect"===e.get("type")){
                var i=parseInt(e.get("name").split("-")[
                  2
                ], 10), n=o.getClientByPoint(s[
                  i
                ].x, s[
                  i
                ].y);
                a.show({
                  x:s[
                    i
                  ].x, y:s[
                    i
                  ].y, clientX:n.x, clientY:n.y, text:r?r(s[
                    i
                  ].value):s[
                    i
                  ].value
                })
              }
            })), e.on("mouseleave", (function(t){
              a.hide()
            }))
          }));
          var c=this.group;
          c.on("".concat(R, ":click"), (function(){
            t.isPlay=!t.isPlay, t.changePlayStatus()
          })), c.on("".concat(j, ":click"), (function(){
            t.updateStartEnd(1)
          })), c.on("".concat(Y, ":click"), (function(){
            t.updateStartEnd(-1)
          })), c.on(_, (function(e){
            e.type;
            var i=e.speed;
            t.currentSpeed=i
          }))
        }, t.prototype.changePlayStatus=function(t){
          void 0===t&&(t=!0), this.controllerBtnGroup.playButton.update({
            isPlay:this.isPlay
          }), this.isPlay?(this.playHandler=this.startPlay(), this.graph.emit(N, null)):this.playHandler&&("undefined"!=typeof window&&window.cancelAnimationFrame(this.playHandler), t&&this.graph.emit(G, null))
        }, t.prototype.startPlay=function(){
          var t=this;
          return"undefined"!=typeof window?window.requestAnimationFrame((function(){
            var e=t.currentSpeed;
            t.frameCount%(60/e)==0&&(t.frameCount=0, t.updateStartEnd(1)), t.frameCount++, t.isPlay&&(t.playHandler=t.startPlay())
          })):void 0
        }, t.prototype.updateStartEnd=function(t){
          var e=this, i=this.tickRects, n=i.length, r=this.unselectedTickStyle, o=this.selectedTickStyle, a=e.endTickRectId;
          if(t>0?e.endTickRectId++:(i[
            e.endTickRectId
          ].rect.attr(r), e.endTickRectId--), a!==e.startTickRectId)e.endTickRectId<e.startTickRectId&&(e.startTickRectId=e.endTickRectId);
          else{
            for(var s=e.startTickRectId;
            s<=e.endTickRectId-1;
            s++)i[
              s
            ].rect.attr(r);
            e.startTickRectId=e.endTickRectId
          }
          if(i[
            e.endTickRectId
          ]){
            i[
              e.endTickRectId
            ].rect.attr(o);
            var c=e.startTickRectId/n, h=e.endTickRectId/n;
            this.graph.emit(H, {
              value:[
                c, h
              ]
            })
          }
        }, t.prototype.destory=function(){
          var t=this.sliceGroup;
          t.off("click"), t.off("dragstart"), t.off("dragover"), t.off("drop"), this.tickRects.forEach((function(t){
            var e=t.pickRect;
            e.off("mouseenter"), e.off("mouseleave")
          })), this.tickRects.length=0, t.off("".concat(R, ":click")), t.off("".concat(j, ":click")), t.off("".concat(Y, ":click")), t.off(_), this.sliceGroup.destroy()
        }, t
      }
      ();
      var ct=i(316293), ht=i(460010), lt=function(t, e, i){
        if(i||2===arguments.length)for(var n, r=0, o=e.length;
        r<o;
        r++)!n&&r in e||(n||(n=Array.prototype.slice.call(e, 0, r)), n[
          r
        ]
        =e[
          r
        ]);
        return t.concat(n||Array.prototype.slice.call(e))
      };
      function dt(t){
        return function(t){
          return(0, o.map)(t, (function(t, e){
            return[
              0===e?"M":"L", t[
                0
              ], t[
                1
              ]
            ]
          }))
        }
        (t)
      }
      function gt(t, e, i, n){
        void 0===n&&(n=!0);
        var r=new ht.WG({
          values:t
        }), a=new ht.b7({
          values:(0, o.map)(t, (function(t, e){
            return e
          }))
        }), s=(0, o.map)(t, (function(t, n){
          return[
            a.scale(n)*e, i-r.scale(t)*i
          ]
        }));
        return n?function(t){
          if(t.length<=2)return dt(t);
          var e=[
          ];
          (0, o.each)(t, (function(t){
            (0, o.isEqual)(t, e.slice(e.length-2))||e.push(t[
              0
            ], t[
              1
            ])
          }));
          var i=ct.iR(e, !1), n=(0, o.head)(t), r=n[
            0
          ], a=n[
            1
          ];
          return i.unshift([
            "M", r, a
          ]), i
        }
        (s):dt(s)
      }
      function pt(t, e, i, n){
        void 0===n&&(n=5);
        for(var r=new ht.WG({
          values:t
        }), a=new ht.b7({
          values:(0, o.map)(t, (function(t, e){
            return e
          }))
        }), s=(0, o.map)(t, (function(t, n){
          return[
            a.scale(n)*e, i-r.scale(t)*i
          ]
        })), c=[
        ], h=0;
        h<s.length;
        h++){
          var l=s[
            h
          ], d=ft({
            x:l[
              0
            ], y:l[
              1
            ], y0:i, size:n
          });
          c.push.apply(c, d)
        }
        return function(t, e){
          void 0===e&&(e=!0);
          var i=[
          ], n=t[
            0
          ];
          i.push([
            "M", n.x, n.y
          ]);
          for(var r=1, o=t.length;
          r<o;
          r++)i.push([
            "L", t[
              r
            ].x, t[
              r
            ].y
          ]);
          e&&(i.push([
            "L", n.x, n.y
          ]), i.push([
            "z"
          ]));
          return i
        }
        (c)
      }
      function ut(t, e, i, n){
        var r=lt([
        ], t, !0), o=function(t, e){
          var i=new ht.WG({
            values:t
          }), n=Math.max(0, i.min);
          return e-i.scale(n)*e
        }
        (n, i);
        return r.push([
          "L", e, o
        ]), r.push([
          "L", 0, o
        ]), r.push([
          "Z"
        ]), r
      }
      function ft(t){
        var e, i, n, r, a=t.x, s=t.y, c=t.y0, h=t.size;
        (0, o.isArray)(s)?(e=s[
          0
        ], i=s[
          1
        ]):(e=c, i=s), (0, o.isArray)(a)?(n=a[
          0
        ], r=a[
          1
        ]):(n=a-h/2, r=a+h/2);
        var l=[
          {
            x:n, y:e
          }, {
            x:n, y:i
          }
        ];
        return l.push({
          x:r, y:i
        }, {
          x:r, y:e
        }), l
      }
      var vt=function(){
        return(vt=Object.assign||function(t){
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
      }, yt={
        stroke:"#C5C5C5", strokeOpacity:.85
      }, mt={
        fill:"#CACED4", opacity:.85
      };
      const xt=function(){
        function t(t){
          var e=t.x, i=void 0===e?0:e, n=t.y, r=void 0===n?0:n, o=t.width, a=void 0===o?200:o, s=t.height, c=void 0===s?26:s, h=t.smooth, l=void 0===h||h, d=t.isArea, g=void 0!==d&&d, p=t.data, u=void 0===p?[
          ]
          :p, f=t.lineStyle, v=t.areaStyle, y=t.group, m=t.interval, x=void 0===m?null:m;
          this.group=y, this.x=i, this.y=r, this.width=a, this.height=c, this.data=u, this.smooth=l, this.isArea=g, this.lineStyle=Object.assign({
          }, yt, f), this.areaStyle=Object.assign({
          }, mt, v), this.intervalConfig=x, this.renderLine()
        }
        return t.prototype.renderLine=function(){
          var t=this, e=t.x, i=t.y, n=t.width, r=t.height, o=(t.barWidth, t.data), a=t.smooth, s=t.isArea, c=t.lineStyle, h=t.areaStyle, l=this.group.addGroup({
            name:"trend-group"
          });
          if(o){
            var d=gt(o, n, r, a);
            if(l.addShape("path", {
              attrs:vt({
                path:d
              }, c), name:"trend-line"
            }), s){
              var g=ut(d, n, r, o);
              l.addShape("path", {
                attrs:vt({
                  path:g
                }, h), name:"trend-area"
              })
            }
          }
          this.intervalConfig&&l.addShape("path", {
            attrs:vt({
              path:pt(this.intervalConfig.data, n, r, this.intervalConfig.style.barWidth)
            }, this.intervalConfig.style), name:"trend-interval"
          }), l.move(e, i)
        }, t.prototype.destory=function(){
          this.group.destroy()
        }, t
      }
      ();
      var bt=function(){
        return(bt=Object.assign||function(t){
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
      }, wt={
        fill:"#1890ff", stroke:"#1890ff", type:"trend", radius:2, opacity:1, cursor:"ew-resize", highLightFill:"#0050b3"
      }, kt={
        fill:"#fff", stroke:"#1890ff", radius:2, opacity:1, cursor:"ew-resize", highLightFill:"#0050b3"
      };
      const St=function(){
        function t(t){
          var e=t.group, i=t.name, n=t.type, r=t.x, o=void 0===r?0:r, a=t.y, s=void 0===a?0:a, c=t.width, h=void 0===c?2:c, l=t.height, d=void 0===l?24:l, g=t.style, p=void 0===g?{
          }
          :g;
          this.group=e, this.name=i, this.handleType=n, this.x=o, this.y=s, this.width=h, this.height=d, "trend"===n?this.style=bt(bt({
          }, wt), p):"simple"===n&&(this.style=bt(bt({
          }, kt), p)), this.renderHandle()
        }
        return t.prototype.setX=function(t){
          this.setXY(t, void 0)
        }, t.prototype.setY=function(t){
          this.setXY(void 0, t)
        }, t.prototype.setXY=function(t, e){
          (0, o.isNumber)(t)&&(this.x=t), (0, o.isNumber)(e)&&(this.y=e), this.updateXY()
        }, t.prototype.renderHandle=function(){
          var t=this, e=t.width, i=t.height, n=t.style, r=t.name, o=n.fill, a=n.stroke, s=n.radius, c=n.opacity, h=n.cursor;
          this.handleGroup=this.group.addGroup(), "trend"===this.handleType?(this.verticalLine=this.handleGroup.addShape("rect", {
            attrs:{
              x:0, y:0, width:e, height:i, fill:o, stroke:a, radius:s, opacity:c, cursor:h
            }, name:"".concat(r, "-handler")
          }), this.topCircle=this.handleGroup.addShape("circle", {
            attrs:{
              x:e/2, y:0, r:2*e, fill:o, stroke:a, radius:s, opacity:c, cursor:h, lineAppendWidth:12
            }, name:"".concat(r, "-handler")
          }), this.bottomCircle=this.handleGroup.addShape("circle", {
            attrs:{
              x:e/2, y:i, r:2*e, fill:o, stroke:a, radius:s, opacity:c, cursor:h
            }, name:"".concat(r, "-handler")
          })):"simple"===this.handleType&&(this.topCircle=this.handleGroup.addShape("circle", {
            attrs:{
              x:e/2, y:i/2, r:2*e, fill:o, stroke:a, radius:s, opacity:c, cursor:h, lineWidth:2
            }, name:"".concat(r, "-handler")
          })), this.updateXY(), "trend"===this.handleType?this.bindTrendEvents():"simple"===this.handleType&&this.bindSimpleEvents()
        }, t.prototype.bindSimpleEvents=function(){
          var t=this, e=this.name;
          this.handleGroup.on("".concat(e, "-handler:mouseenter"), (function(){
            var e=t.style.highLightFill;
            t.topCircle.attr("fill", e)
          })), this.handleGroup.on("".concat(e, "-handler:mouseleave"), (function(){
            var e=t.style.fill;
            t.topCircle.attr("fill", e)
          }))
        }, t.prototype.bindTrendEvents=function(){
          var t=this, e=this.name;
          this.handleGroup.on("".concat(e, "-handler:mouseenter"), (function(){
            var e=t.style.highLightFill;
            t.verticalLine.attr("fill", e), t.topCircle.attr("fill", e), t.bottomCircle.attr("fill", e)
          })), this.handleGroup.on("".concat(e, "-handler:mouseleave"), (function(){
            var e=t.style.fill;
            t.verticalLine.attr("fill", e), t.topCircle.attr("fill", e), t.bottomCircle.attr("fill", e)
          }))
        }, t.prototype.show=function(){
          this.handleGroup.show()
        }, t.prototype.hide=function(){
          this.handleGroup.hide()
        }, t.prototype.updateXY=function(){
          this.handleGroup.setMatrix([
            1, 0, 0, 0, 1, 0, this.x, this.y, 1
          ])
        }, t
      }
      ();
      var Ct=function(){
        return(Ct=Object.assign||function(t){
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
      }, Mt=y.pd, Et={
        fill:"#416180", opacity:.05
      }, Tt={
        fill:"#416180", opacity:.15, radius:5
      }, Bt={
        fill:"#5B8FF9", opacity:.3, cursor:"grab"
      }, Lt={
        width:2, height:24
      }, At={
        textBaseline:"middle", fill:"#000", opacity:.45
      }, It={
        textAlign:"center", textBaseline:"top", fill:"#607889", opacity:.35
      }, Ot={
        lineWidth:1, stroke:"#ccc"
      };
      const Pt=function(){
        function t(t){
          var e=this;
          this.prevX=0, this.onMouseDown=function(t){
            return function(i){
              e.currentHandler=t;
              var n=i.originalEvent;
              n.stopPropagation(), n.preventDefault(), e.prevX=(0, o.get)(n, "touches.0.pageX", n.pageX);
              var r=e.canvas.get("container");
              r.addEventListener("mousemove", e.onMouseMove), r.addEventListener("mouseup", e.onMouseUp), r.addEventListener("mouseleave", e.onMouseUp), r.addEventListener("touchmove", e.onMouseMove), r.addEventListener("touchend", e.onMouseUp), r.addEventListener("touchcancel", e.onMouseUp)
            }
          }, this.onMouseMove=function(t){
            t.stopPropagation(), t.preventDefault();
            var i=(0, o.get)(t, "touches.0.pageX", t.pageX), n=i-e.prevX, r=e.adjustOffsetRange(n/e.width);
            e.updateStartEnd(r), e.updateUI(), e.prevX=i
          }, this.onMouseUp=function(){
            e.currentHandler&&(e.currentHandler=void 0);
            var t=e.canvas.get("container");
            t&&(t.removeEventListener("mousemove", e.onMouseMove), t.removeEventListener("mouseup", e.onMouseUp), t.removeEventListener("mouseleave", e.onMouseUp), t.removeEventListener("touchmove", e.onMouseMove), t.removeEventListener("touchend", e.onMouseUp), t.removeEventListener("touchcancel", e.onMouseUp))
          };
          var i=t.x, n=void 0===i?0:i, r=t.y, a=void 0===r?0:r, s=t.width, c=void 0===s?100:s, h=t.height, l=t.padding, d=void 0===l?10:l, g=t.trendCfg, p=t.controllerCfg, u=void 0===p?{
            speed:1
          }
          :p, f=t.backgroundStyle, v=void 0===f?{
          }
          :f, y=t.foregroundStyle, m=void 0===y?{
          }
          :y, x=t.handlerStyle, b=void 0===x?{
          }
          :x, w=t.textStyle, k=void 0===w?{
          }
          :w, S=t.start, C=void 0===S?0:S, M=t.end, E=void 0===M?1:M, T=t.minText, B=void 0===T?"":T, L=t.maxText, A=void 0===L?"":L, I=t.group, O=t.graph, P=t.canvas, D=t.tick, N=void 0===D?{
            tickLabelStyle:{
            }, tickLineStyle:{
            }, tickLabelFormatter:function(t){
              return t
            }, ticks:[
            ]
          }
          :D, G=t.type;
          this.graph=O, this.canvas=P, this.group=I, this.timeBarType=G, this.x=n, this.y=a, this.width=c, this.height=h, this.padding=d, this.ticks=N.ticks, this.trendCfg=g, this.controllerCfg=u, this.currentSpeed=u.speed||1, this.tickLabelFormatter=N.tickLabelFormatter, "trend"===G?this.backgroundStyle=Ct(Ct({
          }, Et), v):"simple"===G&&(this.backgroundStyle=Ct(Ct({
          }, Tt), v)), this.foregroundStyle=Ct(Ct({
          }, Bt), m), this.handlerStyle=Ct(Ct({
          }, Lt), b), this.textStyle=Ct(Ct({
          }, At), k), this.tickLabelStyle=Ct(Ct({
          }, It), N.tickLabelStyle), this.tickLineStyle=Ct(Ct({
          }, Ot), N.tickLineStyle), this.currentMode=u.defaultTimeType||et, this.start=C, this.end=E, this.minText=B, this.maxText=A, this.fontFamily="undefined"!=typeof window&&window.getComputedStyle(document.body, null).getPropertyValue("font-family")||"Arial, sans-serif", this.renderSlider()
        }
        return t.prototype.update=function(t){
          var e=t.x, i=t.y, n=t.width, r=t.height, a=t.minText, s=t.maxText, c=t.start, h=t.end;
          this.start=Math.min(1, Math.max(c, 0)), this.end=Math.min(1, Math.max(h, 0)), (0, o.assign)(this, {
            x:e, y:i, width:n, height:r, minText:a, maxText:s
          }), this.updateUI()
        }, t.prototype.setText=function(t, e){
          this.minTextShape.attr("text", t), this.maxTextShape.attr("text", e)
        }, t.prototype.renderSlider=function(){
          var t=this, e=this, i=e.width, n=e.height, r=e.timeBarType;
          if("trend"===r&&(0, o.size)((0, o.get)(this.trendCfg, "data"))){
            var a=new xt(Ct(Ct({
              x:this.x, y:this.y, width:i, height:n
            }, this.trendCfg), {
              group:this.group
            }));
            this.trendComponent=a
          }
          var s=this.group.addGroup({
            name:"slider-group"
          });
          s.addShape("rect", {
            attrs:Ct({
              x:0, y:0, width:i, height:n
            }, this.backgroundStyle), name:"background"
          });
          var c=this.group.addGroup();
          "trend"===r?(this.minTextShape=c.addShape("text", {
            attrs:Ct({
              x:0, y:n/2+this.y, textAlign:"right", text:this.minText, silent:!1, fontFamily:this.fontFamily||"Arial, sans-serif", stroke:"#fff", lineWidth:5
            }, this.textStyle), capture:!1, name:"min-text-shape"
          }), this.maxTextShape=c.addShape("text", {
            attrs:Ct({
              y:n/2+this.y, textAlign:"left", text:this.maxText, silent:!1, fontFamily:this.fontFamily||"Arial, sans-serif", stroke:"#fff", lineWidth:5
            }, this.textStyle), capture:!1, name:"max-text-shape"
          })):(this.minTextShape=c.addShape("text", {
            attrs:Ct({
              x:0, y:this.y-10, textAlign:"center", text:this.minText, silent:!1, fontFamily:this.fontFamily||"Arial, sans-serif", stroke:"#fff", lineWidth:5
            }, this.textStyle), capture:!1, name:"min-text-shape"
          }), this.maxTextShape=c.addShape("text", {
            attrs:Ct({
              y:this.y-10, textAlign:"center", text:this.maxText, silent:!1, fontFamily:this.fontFamily||"Arial, sans-serif", stroke:"#fff", lineWidth:5
            }, this.textStyle), capture:!1, name:"max-text-shape"
          })), this.foregroundShape=this.group.addGroup().addShape("rect", {
            attrs:Ct({
              x:0, y:this.y, height:n
            }, this.foregroundStyle), name:"foreground-shape"
          }), this.foregroundShape.on("mousedown", (function(t){
            t.target.attr("cursor", "grabbing")
          })), this.foregroundShape.on("mouseup", (function(e){
            e.target.attr("cursor", t.foregroundStyle.cursor||"grab")
          }));
          var h=(0, o.get)(this.handlerStyle, "width", 2), l=(0, o.get)(this.handlerStyle, "height", 24), d=this.group.addGroup({
            name:"minHandlerShape"
          });
          this.minHandlerShape=new St({
            name:"minHandlerShape", group:d, type:r, x:this.x, y:this.y, width:h, height:l, style:this.handlerStyle
          });
          var g=this.group.addGroup({
            name:"maxHandlerShape"
          });
          this.maxHandlerShape=new St({
            name:"maxHandlerShape", group:g, type:r, x:this.x, y:this.y, width:h, height:l, style:this.handlerStyle
          });
          var p=this.ticks, u=i/(p.length-1);
          this.tickPosList=[
          ], this.textList&&this.textList.length&&this.textList.forEach((function(t){
            t.destroy()
          }));
          var f=-1/0, v=this.tickLabelStyle.rotate;
          delete this.tickLabelStyle.rotate, this.textList=p.map((function(e, i){
            var r;
            t.tickPosList.push(t.x+i*u), t.tickLabelFormatter?(r=t.tickLabelFormatter(e), !(0, o.isString)(r)&&r&&(r=e.date)):r=e.date;
            var a=t.x+i*u, s=t.y+n+5, c=t.group.addShape("text", {
              attrs:Ct({
                x:a, y:s, text:r, fontFamily:t.fontFamily||"Arial, sans-serif"
              }, t.tickLabelStyle), name:"tick-label"
            });
            if((0, o.isNumber)(v)&&i!==p.length-1){
              var h=Mt([
                1, 0, 0, 0, 1, 0, 0, 0, 1
              ], [
                [
                  "t", -a, -s
                ], [
                  "r", v
                ], [
                  "t", a-5, s+2
                ]
              ]);
              c.attr({
                textAlign:"left", matrix:h
              })
            }
            0===i?c.attr({
              textAlign:"left"
            }):i!==p.length-1&&c.attr({
              textAlign:"right"
            });
            var l=t.group.addShape("line", {
              attrs:Ct({
                x1:t.x+i*u, y1:t.y+n+2, x2:t.x+i*u, y2:t.y+n+6
              }, t.tickLineStyle), name:"tick-line"
            });
            l.toBack();
            var d=c.getBBox();
            return d.minX>f?(c.show(), l.show(), f=d.minX+d.width+10):(c.hide(), l.hide()), c
          })), this.controllerBtnGroup=new it(Ct({
            group:this.group, x:this.x, y:this.y+n+25, width:i, height:35
          }, this.controllerCfg)), this.updateStartEnd(0), this.updateUI(), s.move(this.x, this.y), this.bindEvents(), this.currentMode===tt&&(this.minHandlerShape.hide(), this.foregroundShape.hide(), this.minTextShape.hide())
        }, t.prototype.bindEvents=function(){
          var t=this, e=this.group.find((function(t){
            return"minHandlerShape"===t.get("name")
          }));
          e&&(e.on("minHandlerShape-handler:mousedown", this.onMouseDown(this.minHandlerShape)), e.on("minHandlerShape-handler:touchstart", this.onMouseDown(this.minHandlerShape)));
          var i=this.group.find((function(t){
            return"maxHandlerShape"===t.get("name")
          }));
          i&&(i.on("maxHandlerShape-handler:mousedown", this.onMouseDown(this.maxHandlerShape)), i.on("maxHandlerShape-handler:touchstart", this.onMouseDown(this.maxHandlerShape))), this.foregroundShape.on("mousedown", this.onMouseDown(this.foregroundShape)), this.foregroundShape.on("touchstart", this.onMouseDown(this.foregroundShape)), this.group.on("".concat(R, ":click"), (function(){
            t.isPlay=!t.isPlay, t.currentHandler=t.maxHandlerShape, t.changePlayStatus()
          })), this.group.on("".concat(j, ":click"), (function(){
            t.currentHandler=t.maxHandlerShape, t.updateStartEnd(.01), t.updateUI()
          })), this.group.on("".concat(Y, ":click"), (function(){
            t.currentHandler=t.maxHandlerShape, t.updateStartEnd(-.01), t.updateUI()
          })), this.group.on(_, (function(e){
            var i=e.type, n=e.speed;
            t.currentSpeed=n, t.currentMode=i, i===tt?(t.minHandlerShape.hide(), t.foregroundShape.hide(), t.minTextShape.hide()):i===et&&(t.minHandlerShape.show(), t.foregroundShape.show(), t.minTextShape.show())
          }))
        }, t.prototype.adjustTickIndex=function(t){
          for(var e=0;
          e<this.tickPosList.length-1;
          e++)if(this.tickPosList[
            e
          ]
          <=t&&t<=this.tickPosList[
            e+1
          ])return Math.abs(this.tickPosList[
            e
          ]
          -t)<Math.abs(t-this.tickPosList[
            e+1
          ])?e:e+1;
          return 0
        }, t.prototype.adjustOffsetRange=function(t){
          switch(this.currentHandler){
            case this.minHandlerShape:var e=0-this.start, i=1-this.start;
            return Math.min(i, Math.max(e, t));
            case this.maxHandlerShape:e=0-this.end, i=1-this.end;
            return Math.min(i, Math.max(e, t));
            case this.foregroundShape:e=0-this.start, i=1-this.end;
            return Math.min(i, Math.max(e, t));
            default:return 0
          }
        }, t.prototype.updateStartEnd=function(t){
          var e=this.ticks[
            this.adjustTickIndex(this.start*this.width)
          ], i=this.ticks[
            this.adjustTickIndex(this.end*this.width)
          ];
          if(!this.currentHandler)return this.minText=this.tickLabelFormatter?this.tickLabelFormatter(e):null==e?void 0:e.date, void(this.maxText=this.tickLabelFormatter?this.tickLabelFormatter(i):null==i?void 0:i.date);
          switch(this.currentHandler){
            case this.minHandlerShape:this.maxText=this.maxTextShape.attr("text"), this.start+=t, this.minText=this.tickLabelFormatter?this.tickLabelFormatter(e):e.date;
            break;
            case this.maxHandlerShape:this.minText=this.minTextShape.attr("text"), this.end+=t, this.maxText=this.tickLabelFormatter?this.tickLabelFormatter(i):i.date;
            break;
            case this.foregroundShape:this.start+=t, this.end+=t, this.minText=this.tickLabelFormatter?this.tickLabelFormatter(e):e.date, this.maxText=this.tickLabelFormatter?this.tickLabelFormatter(i):i.date
          }
        }, t.prototype.updateUI=function(){
          var t=this;
          this.start<0&&(this.start=0), this.start>1&&(this.start=1), this.end>1&&(this.end=1), this.end<0&&(this.end=0);
          var e=this.x+this.start*this.width, i=this.x+this.end*this.width;
          this.foregroundShape.attr("x", e), this.foregroundShape.attr("width", i-e);
          var n=(0, o.get)(this.handlerStyle, "width", 2);
          this.setText(this.minText, this.maxText);
          var r=this.dodgeText([
            e, i
          ]), a=r[
            0
          ], s=r[
            1
          ];
          this.minHandlerShape.setX(e-n/2), (0, o.each)(a, (function(e, i){
            return t.minTextShape.attr(i, e)
          })), this.maxHandlerShape.setX(i-n/2), (0, o.each)(s, (function(e, i){
            return t.maxTextShape.attr(i, e)
          })), this.currentMode===et?this.graph.emit(H, {
            value:[
              this.start, this.end
            ].sort()
          }):this.currentMode===tt&&this.graph.emit(H, {
            value:[
              this.end, this.end
            ]
          })
        }, t.prototype.dodgeText=function(t){
          var e, i, n=(0, o.get)(this.handlerStyle, "width", 2), r=this.minTextShape, a=this.maxTextShape, s=t[
            0
          ], c=t[
            1
          ], h=!1;
          s>c&&(s=(e=[
            c, s
          ])[
            0
          ], c=e[
            1
          ], r=(i=[
            a, r
          ])[
            0
          ], a=i[
            1
          ], h=!0);
          var l=r.getBBox(), d=a.getBBox(), g=null, p=null;
          return"trend"===this.timeBarType?(g=s-l.width<this.x+2?{
            x:s+n/2+2, textAlign:"left"
          }
          :{
            x:s-n/2-2, textAlign:"right"
          }, p=c+d.width>this.x+this.width?{
            x:c-n/2-2, textAlign:"right"
          }
          :{
            x:c+n/2+2, textAlign:"left"
          }):"simple"===this.timeBarType&&(g=r.attr("x")>l.width?{
            x:s, textAlign:"center"
          }
          :{
            x:s, textAlign:"left"
          }, p=a.attr("x")>this.width-d.width?{
            x:c, textAlign:"right"
          }
          :{
            x:c, textAlign:"center"
          }), h?[
            p, g
          ]
          :[
            g, p
          ]
        }, t.prototype.startPlay=function(){
          var t=this;
          return"undefined"!=typeof window?window.requestAnimationFrame((function(){
            var e=t, i=e.ticks, n=e.width, r=t.currentSpeed, o=n/i.length/(1e3*(10-r)/60), a=t.adjustOffsetRange(o/t.width);
            t.updateStartEnd(a), t.updateUI(), t.isPlay&&(t.playHandler=t.startPlay())
          })):void 0
        }, t.prototype.changePlayStatus=function(t){
          void 0===t&&(t=!0), this.controllerBtnGroup.playButton.update({
            isPlay:this.isPlay
          }), this.isPlay?(this.playHandler=this.startPlay(), this.graph.emit(N, null)):this.playHandler&&("undefined"!=typeof window&&window.cancelAnimationFrame(this.playHandler), t&&this.graph.emit(G, null))
        }, t.prototype.destory=function(){
          this.graph.off(H, (function(){
          }));
          var t=this.group, e=t.find((function(t){
            return"minHandlerShape"===t.get("name")
          }));
          e&&(e.off("minHandlerShape-handler:mousedown"), e.off("minHandlerShape-handler:touchstart"), e.destroy());
          var i=t.find((function(t){
            return"maxHandlerShape"===t.get("name")
          }));
          i&&(i.off("maxHandlerShape-handler:mousedown"), i.off("maxHandlerShape-handler:touchstart"), i.destroy()), this.foregroundShape.off("mousedown"), this.foregroundShape.off("touchstart"), this.foregroundShape.destroy(), t.off("".concat(R, ":click")), t.off("".concat(j, ":click")), t.off("".concat(Y, ":click")), t.off(_), t.destroy(), this.trendComponent&&this.trendComponent.destory()
        }, t
      }
      ();
      var Dt=function(){
        var t=function(e, i){
          return(t=Object.setPrototypeOf||{
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
          })(e, i)
        };
        return function(e, i){
          if("function"!=typeof i&&null!==i)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");
          function n(){
            this.constructor=e
          }
          t(e, i), e.prototype=null===i?Object.create(i):(n.prototype=i.prototype, new n)
        }
      }
      (), Nt=function(){
        return(Nt=Object.assign||function(t){
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
      }, Gt=function(t, e){
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
      };
      const Ht=function(t){
        function e(e){
          var i=t.call(this, e)||this;
          return i.afterrenderListener=function(t){
            return i.filterData({
            })
          }, i.valueChangeListener=(0, o.throttle)((function(t){
            return i.filterData(t)
          }), 200, {
            trailing:!0, leading:!0
          }), i.changeData=function(t){
            var e=i.get("graph");
            i.cacheGraphData=e.get("data"), i.filterData({
            })
          }, i
        }
        return Dt(e, t), e.prototype.getDefaultCfgs=function(){
          return{
            container:null, className:"g6-component-timebar", padding:10, type:"trend", trend:{
              data:[
              ], isArea:!1, smooth:!0
            }, controllerCfg:{
              speed:1, loop:!1
            }, slider:{
              start:.1, end:.9, minText:"min", maxText:"max"
            }, tick:{
              start:.1, end:.9, data:[
              ]
            }, textStyle:{
            }, filterEdge:!1, filterItemTypes:[
              "node"
            ], containerCSS:{
            }, putInGraphContainer:!0
          }
        }, e.prototype.initContainer=function(){
          var t, e, i=this.get("graph"), a=this._cfgs, s=a.width, c=a.height, h=a.putInGraphContainer, l=this.get("className")||"g6-component-timebar", d=this.get("container");
          (d?((0, o.isString)(d)&&(d=document.getElementById(d)), t=d):(t=(0, n.A)("<div class='".concat(l, "'></div>")), (0, r.A)(t, {
            position:"relative"
          })), h)&&this.get("graph").get("container").appendChild(t);
          this.set("timeBarContainer", t), e="SVG"===i.get("renderer")?new v.Canvas({
            container:t, width:s, height:c
          }):new f.Canvas({
            container:t, width:s, height:c
          }), this.get("containerCSS")&&(0, r.A)(t, this.get("containerCSS")), this.set("canvas", e)
        }, e.prototype.init=function(){
          this.initContainer();
          var t=this.get("canvas").addGroup({
            name:"timebar-group"
          });
          this.set("timeBarGroup", t), this.renderTrend(), this.initEvent();
          var e="undefined"!=typeof window&&window.getComputedStyle(document.body, null).getPropertyValue("font-family")||"Arial, sans-serif";
          this.set("fontFamily", e)
        }, e.prototype.play=function(){
          this.togglePlay(!0)
        }, e.prototype.pause=function(){
          this.togglePlay(!1)
        }, e.prototype.togglePlay=function(t){
          var e=this.get("timebar");
          e&&(e.isPlay=!!t, e.changePlayStatus())
        }, e.prototype.renderTrend=function(){
          var t=this, e=this._cfgs, i=e.width, n=e.x, r=e.y, o=e.padding, a=e.type, s=e.trend, c=e.slider, h=e.controllerCfg, l=e.textStyle, d=e.tick, g=e.backgroundStyle, p=e.foregroundStyle, u=s.data, f=Gt(s, [
            "data"
          ]), v=i-2*o, y="trend"===a?26:4, m=this.get("graph"), x=this.get("timeBarGroup"), b=this.get("canvas"), w=null;
          if("trend"===a||"simple"===a){
            var k=this.get("getValue");
            w=new Pt(Nt(Nt({
              graph:m, canvas:b, group:x, type:a, x:n+o, y:"trend"===a?r+o:r+o+15, width:v, height:y, padding:o, backgroundStyle:g, foregroundStyle:p, trendCfg:Nt(Nt({
              }, f), {
                data:u.map((function(t){
                  return(null==k?void 0:k(t))||t.value
                }))
              })
            }, c), {
              tick:{
                ticks:u, tickLabelFormatter:d.tickLabelFormatter, tickLabelStyle:d.tickLabelStyle, tickLineStyle:d.tickLineStyle
              }, handlerStyle:Nt(Nt({
              }, c.handlerStyle), {
                height:c.height||y
              }), controllerCfg:h, textStyle:l
            }))
          }
          else"tick"===a&&(w=new st(Nt({
            graph:m, canvas:b, group:x, x:n+o, y:r+o, width:i, height:42, padding:2, controllerCfg:h
          }, d)));
          var S=function e(){
            var i=t.get("timebar");
            i.draggingHandler=!1, i.isPlay&&(i.isPlay=!1, i.currentHandler=i.maxHandlerShape, i.changePlayStatus()), document.removeEventListener("mouseup", e)
          };
          b.on("mousedown", (function(t){
            "maxHandlerShape-handler"!==t.target.get("name")&&"minHandlerShape-handler"!==t.target.get("name")&&t.target!==w.foregroundShape||document.addEventListener("mouseup", S)
          })), this.set("timebar", w)
        }, e.prototype.filterData=function(t){
          var e, i=t.value;
          if(!i){
            i=[
            ];
            var n=this._cfgs.type;
            n&&"trend"!==n&&"simple"!==n?"tick"===n&&(i[
              0
            ]
            =this._cfgs.tick.start, i[
              1
            ]
            =this._cfgs.tick.end):(i[
              0
            ]
            =this._cfgs.slider.start, i[
              1
            ]
            =this._cfgs.slider.end)
          }
          var r=null, o=this._cfgs.type;
          if("trend"===o||"simple"===o?r=this._cfgs.trend.data:"tick"===o&&(r=this._cfgs.tick.data), r&&0!==r.length){
            var a=this.get("rangeChange"), s=this.get("graph"), c=Math.round(r.length*i[
              0
            ]), h=Math.round(r.length*i[
              1
            ]);
            h=h>=r.length?r.length-1:h, c=c>=r.length?r.length-1:c;
            var l=null===(e=this._cfgs.tick)||void 0===e?void 0:e.tickLabelFormatter, d=l?l(r[
              c
            ]):r[
              c
            ].date, g=l?l(r[
              h
            ]):r[
              h
            ].date;
            if("tick"!==o)this.get("timebar").setText(d, g);
            if(a)a(s, d, g);
            else{
              (!this.cacheGraphData||this.cacheGraphData.nodes&&0===this.cacheGraphData.nodes.length)&&(this.cacheGraphData=s.get("data"));
              var p=this.get("filterItemTypes"), u=this.get("changeData"), f=this.get("getDate"), v=this.get("shouldIgnore"), y=r[
                c
              ].date, m=r[
                h
              ].date;
              if(u||void 0===u){
                var x=this.cacheGraphData.nodes, b=this.cacheGraphData.edges, w={
                }, k={
                };
                s.getNodes().forEach((function(t){
                  return w[
                    t.getID()
                  ]
                  =!0
                })), s.getEdges().forEach((function(t){
                  return k[
                    t.getID()
                  ]
                  =!0
                })), p.includes("node")&&(null==x||x.forEach((function(t){
                  var e=+((null==f?void 0:f(t))||t.date), i=e>=y&&e<=m||(null==v?void 0:v("node", t, {
                    min:y, max:m
                  })), n=w[
                    t.id
                  ];
                  n&&!i?(s.removeItem(t.id), w[
                    t.id
                  ]
                  =!1):!n&&i&&(s.addItem("node", t), w[
                    t.id
                  ]
                  =!0)
                })), null==b||b.forEach((function(t){
                  var e=w[
                    t.source
                  ]
                  &&w[
                    t.target
                  ]
                  ||(null==v?void 0:v("edge", t, {
                    min:y, max:m
                  })), i=!!s.findById(t.id);
                  i&&!e?(s.removeItem(t.id), k[
                    t.id
                  ]
                  =!1):!i&&e?(s.addItem("edge", t), k[
                    t.id
                  ]
                  =!0):i||(k[
                    t.id
                  ]
                  =!1)
                }))), (this.get("filterEdge")||p.includes("edge"))&&(null==b||b.filter((function(t){
                  var e=+((null==f?void 0:f(t))||t.date), i=e>=y&&e<=m||(null==v?void 0:v("edge", t, {
                    min:y, max:m
                  })), n=w[
                    t.source
                  ]
                  &&w[
                    t.target
                  ], r=i&&n, o=k[
                    t.id
                  ];
                  o&&!r?(k[
                    t.id
                  ]
                  =!1, s.removeItem(t.id)):!o&&r&&(k[
                    t.id
                  ]
                  =!0, s.addItem("edge", t))
                })))
              }
              else p.includes("node")&&s.getNodes().forEach((function(t){
                var e=t.getModel();
                if(!(null==v?void 0:v("node", e, {
                  min:y, max:m
                }))){
                  var i=+((null==f?void 0:f(e))||e.date);
                  i<y||i>m?s.hideItem(t):s.showItem(t)
                }
              })), (this.get("filterEdge")||p.includes("edge"))&&s.getEdges().forEach((function(t){
                var e=t.getModel();
                if(!(null==v?void 0:v("edge", e, {
                  min:r[
                    c
                  ].date, max:r[
                    h
                  ].date
                }))){
                  var i=+((null==f?void 0:f(e))||e.date);
                  if(i<r[
                    c
                  ].date||i>r[
                    h
                  ].date)s.hideItem(t);
                  else{
                    var n=t.getSource().isVisible(), o=t.getTarget().isVisible();
                    n&&o&&s.showItem(t)
                  }
                }
              }))
            }
          }
          else console.warn("请配置 TimeBar 组件的数据")
        }, e.prototype.initEvent=function(){
          var t=this.get("graph");
          t.on("afterchangedata", this.changeData), t.on("afterrender", this.afterrenderListener), t.on(H, this.valueChangeListener)
        }, e.prototype.destroy=function(){
          var e=this.get("graph");
          e.off("afterchangedata", this.changeData), e.off("afterrender", this.afterrenderListener), e.off(H, this.valueChangeListener);
          var i=this.get("timebar");
          i&&i.destory&&i.destory(), t.prototype.destroy.call(this);
          var n=this.get("timeBarContainer");
          if(n){
            var r=this.get("container");
            r||(r=this.get("graph").get("container")), (0, o.isString)(r)&&(r=document.getElementById(r)), r===n&&(r=r.parentElement), r.removeChild(n)
          }
        }, e
      }
      (a);
      var _t=i(77062), Rt=i(591409), jt=function(){
        var t=function(e, i){
          return(t=Object.setPrototypeOf||{
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
          })(e, i)
        };
        return function(e, i){
          if("function"!=typeof i&&null!==i)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");
          function n(){
            this.constructor=e
          }
          t(e, i), e.prototype=null===i?Object.create(i):(n.prototype=i.prototype, new n)
        }
      }
      (), Yt=_t.J0.applyMatrix;
      const zt=function(t){
        function e(e){
          return t.call(this, e)||this
        }
        return jt(e, t), e.prototype.getDefaultCfgs=function(){
          return{
            container:null, className:"g6-minimap", viewportClassName:"g6-minimap-viewport", width:200, delegateStyle:{
              fill:"#40a9ff", stroke:"#096dd9"
            }, refresh:!0
          }
        }, e.prototype.getEvents=function(){
          return{
            beforepaint:"updateViewport", beforeanimate:"disableRefresh", afteranimate:"enableRefresh", viewportchange:"disableOneRefresh"
          }
        }, e.prototype.disableRefresh=function(){
          this.set("refresh", !1)
        }, e.prototype.enableRefresh=function(){
          this.set("refresh", !0), this.updateCanvas()
        }, e.prototype.disableOneRefresh=function(){
          this.set("viewportChange", !0)
        }, e.prototype.initViewport=function(){
          var t=this, e=this._cfgs, i=e.graph;
          if(!this.destroyed){
            var a=this.get("container");
            (0, o.isString)(a)&&(a=document.getElementById(a));
            var s=(0, n.A)("<div class=".concat(e.viewportClassName, "\n      style='position:absolute;\n        left:0;\n        top:0;\n        box-sizing:border-box;\n        border: 2px solid #1980ff;\n        cursor:move'\n      </div>")), c=0, h=0, l=!1, d=0, g=0, p=0, u=0, f=0, v=0;
            a.addEventListener("mousedown", (function(n){
              if(e.refresh=!1, n.target===s){
                var r=s.style;
                p=parseInt(r.width, 10), u=parseInt(r.height, 10);
                var o=t.get("width"), a=t.get("height");
                p>o||u>a||(v=i.getZoom(), f=t.get("ratio"), l=!0, c=n.clientX, h=n.clientY)
              }
            }), !1), a.addEventListener("mousemove", (function(e){
              if(l&&!(0, o.isNil)(e.clientX)&&!(0, o.isNil)(e.clientY)){
                var n=t.get("width"), a=t.get("height"), y=s.style;
                d=parseInt(y.left, 10), g=parseInt(y.top, 10), p=parseInt(y.width, 10), u=parseInt(y.height, 10);
                var m=c-e.clientX, x=h-e.clientY;
                d-m<0?m=d:d-m+p>=n&&(m=0), g-x<0?x=g:g-x+u>=a&&(x=0), d-=m, g-=x, (0, r.A)(s, {
                  left:"".concat(d, "px"), top:"".concat(g, "px")
                }), i.translate(m*v/f, x*v/f), c=e.clientX, h=e.clientY
              }
            }), !1), a.addEventListener("mouseleave", (function(){
              l=!1, e.refresh=!0
            }), !1), a.addEventListener("mouseup", (function(){
              l=!1, e.refresh=!0
            }), !1), this.set("viewport", s), a.appendChild(s)
          }
        }, e.prototype.updateViewport=function(){
          if(!this.destroyed){
            var t=this.get("ratio"), e=this.get("width"), i=this.get("height"), n=this.get("graph"), o=n.get("width"), a=o/n.get("height"), s=n.getGroup(), c=s.getCanvasBBox(), h=[
              (c.minX+c.maxX)/2, (c.minY+c.maxY)/2
            ], l=[
              c.maxX-c.minX, c.maxY-c.minY
            ], d={
              centerX:h[
                0
              ], centerY:h[
                1
              ], width:0, height:0, minX:0, minY:0
            };
            c[
              0
            ]
            /c[
              1
            ]
            >a?(d.width=l[
              0
            ], d.height=d.width/a):(d.height=l[
              1
            ], d.width=d.height*a), d.minX=h[
              0
            ]
            -d.width/2, d.minY=h[
              1
            ]
            -d.height/2;
            var g=s.getMatrix();
            g||(g=[
              1, 0, 0, 0, 1, 0, 0, 0, 1
            ]);
            var p=Rt.invert([
              1, 0, 0, 0, 1, 0, 0, 0, 1
            ], g), u=Yt({
              x:d.minX, y:d.minY
            }, p), f=n.getCanvasByPoint(u.x, u.y), v=this.get("viewport");
            v||this.initViewport();
            var y=o/d.width, m=y*e, x=y*i, b=e*-f.x/d.width, w=i*-f.y/d.height, k=b+m, S=w+x;
            b<0&&(m+=b, b=0), k>e&&(m-=k-e), w<0&&(x+=w, w=0), S>i&&(x-=S-i), this.set("ratio", t);
            var C="".concat(b, "px"), M="".concat(w, "px");
            (0, r.A)(v, {
              left:C, top:M, width:"".concat(m, "px"), height:"".concat(x, "px")
            })
          }
        }, e.prototype.init=function(){
          this.initContainer()
        }, e.prototype.initContainer=function(){
          var t=this, e=t.get("graph"), i=e.get("width"), r=e.get("height")/i, a=t.get("className"), s=t.get("container"), c=t.get("width"), h=t.get("height");
          c||h||(c=200), c?(h=r*c, t.set("height", h)):(c=1/r*h, t.set("width", c));
          var l=(0, n.A)("<div class='".concat(a, "' style='width: ").concat(c, "px; height: ").concat(h, "px; overflow: hidden; position: relative;'></div>"));
          (0, o.isString)(s)&&(s=document.getElementById(s)), s?s.appendChild(l):e.get("container").appendChild(l), t.set("container", l);
          var d=(0, n.A)('<div class="g6-minimap-container" style="position: relative; width: 100%; height: 100%; text-align: center; display: table;"></div>');
          l.appendChild(d);
          var g=(0, n.A)('<span style="display: table-cell; vertical-align: middle; "></span>');
          d.appendChild(g), t.set("containerDOM", d), t.set("containerSpan", g);
          var p=(0, n.A)('<img alt="" src="'.concat(this.get("graphImg"), '" style="display: inline-block; user-select: none;" draggable="false" />'));
          t.set("imgDOM", p), t.updateImgSize(), g.appendChild(p), t.updateCanvas()
        }, e.prototype.updateImgSize=function(){
          var t=this, e=t.get("imgDOM"), i=t.get("width"), n=t.get("height");
          e.onload=function(){
            var t=function(t, e){
              var i, n;
              if(t.naturalWidth)i=t.naturalWidth, n=t.naturalHeight;
              else{
                var r=new Image;
                r.src=t.src, r.onload=function(){
                  e&&e(r.width, r.height)
                }
              }
              return[
                i, n
              ]
            }
            (e);
            t[
              0
            ]
            >t[
              1
            ]
            ?e.width=i:e.height=n
          }
        }, e.prototype.updateCanvas=function(){
          if(this.get("refresh")){
            var t=this.get("graph");
            if(!t.get("destroyed")){
              this.get("viewportChange")&&(this.set("viewportChange", !1), this.updateViewport());
              var e=this.get("width")/t.get("canvas").getCanvasBBox().width;
              this.set("ratio", e), this.updateViewport()
            }
          }
        }, e.prototype.getViewport=function(){
          return this.get("viewport")
        }, e.prototype.getContainer=function(){
          return this.get("container")
        }, e.prototype.updateGraphImg=function(t){
          var e=this;
          e.get("imgDOM").remove(), e.set("graphImg", t);
          var i=(0, n.A)('<img alt="" src="'.concat(t, '" style="display: inline-block;" ondragstart="return false;" onselectstart="return false;"/>'));
          e.set("imgDOM", i), i.src=t, e.updateImgSize(), e.get("containerSpan").appendChild(i), e.updateCanvas()
        }, e.prototype.destroy=function(){
          var t=this.get("container");
          t.parentNode.removeChild(t)
        }, e
      }
      (a);
      var Xt=function(){
        var t=function(e, i){
          return(t=Object.setPrototypeOf||{
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
          })(e, i)
        };
        return function(e, i){
          if("function"!=typeof i&&null!==i)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");
          function n(){
            this.constructor=e
          }
          t(e, i), e.prototype=null===i?Object.create(i):(n.prototype=i.prototype, new n)
        }
      }
      (), Ft=function(){
        return(Ft=Object.assign||function(t){
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
      }, Wt=_t.J0.distance, Vt={
        stroke:"#000", strokeOpacity:.8, lineWidth:2, fillOpacity:1, fill:"#fff"
      };
      const Zt=function(t){
        function e(e){
          return t.call(this, e)||this
        }
        return Xt(e, t), e.prototype.getDefaultCfgs=function(){
          return{
            type:"both", trigger:"mousemove", r:60, delegateStyle:(0, o.clone)(Vt), showLabel:"edge", scaleRBy:"wheel"
          }
        }, e.prototype.getEvents=function(){
          var t;
          switch(this.get("trigger")){
            case"click":t={
              click:"filter"
            };
            break;
            case"drag":t={
              click:"createDelegate"
            };
            break;
            default:t={
              mousemove:"filter"
            }
          }
          return t
        }, e.prototype.init=function(){
          var t=this, e=t.get("showLabel"), i="node"===e||"both"===e, n="edge"===e||"both"===e;
          t.set("showNodeLabel", i), t.set("showEdgeLabel", n), t.get("shouldShow")||t.set("shouldShow", (function(){
            return!0
          }))
        }, e.prototype.createDelegate=function(t){
          var e=this, i=e.get("delegate");
          i&&!i.destroyed||(e.filter(t), (i=e.get("delegate")).on("dragstart", (function(t){
          })), i.on("drag", (function(t){
            e.filter(t)
          })), "wheel"===this.get("scaleRBy")&&i.on("mousewheel", (function(t){
            e.scaleRByWheel(t)
          })))
        }, e.prototype.scaleRByWheel=function(t){
          var e=this;
          if(t&&t.originalEvent){
            t.preventDefault&&t.preventDefault();
            var i, n=e.get("graph"), r=e.get("delegate");
            (r?{
              x:r.attr("x"), y:r.attr("y")
            }
            :void 0)||n.getPointByClient(t.clientX, t.clientY);
            i=t.originalEvent.wheelDelta<0?.95:1/.95;
            var o=e.get("maxR"), a=e.get("minR"), s=e.get("r");
            (s>(o||n.get("height"))&&i>1||s<(a||.05*n.get("height"))&&i<1)&&(i=1), s*=i, e.set("r", s), e.filter(t)
          }
        }, e.prototype.filter=function(t){
          var e=this, i=e.get("graph"), n=i.getNodes(), r={
          }, o=e.get("r"), a=e.get("type"), s={
            x:t.x, y:t.y
          };
          e.updateDelegate(s, o);
          var c=e.get("shouldShow"), h=e.get("vShapes");
          h&&h.forEach((function(t){
            t.remove(), t.destroy()
          })), h=[
          ], n.forEach((function(t){
            var e=t.getModel(), i=e.x, n=e.y;
            Wt({
              x:i, y:n
            }, s)<o&&(r[
              e.id
            ]
            =t)
          }));
          var l=i.getEdges(), d=[
          ];
          l.forEach((function(t){
            var e=t.getModel(), i=e.source, n=e.target;
            c(e)&&("only-source"===a||"one"===a?r[
              i
            ]
            &&!r[
              n
            ]
            &&d.push(t):"only-target"===a||"one"===a?r[
              n
            ]
            &&!r[
              i
            ]
            &&d.push(t):"both"===a&&r[
              i
            ]
            &&r[
              n
            ]
            &&d.push(t))
          }));
          var g=e.get("showNodeLabel"), p=e.get("showEdgelabel"), u=i.get("group");
          d.forEach((function(t){
            t.get("group").get("children").forEach((function(t){
              var e=t.get("type"), i=u.addShape(e, {
                attrs:t.attr()
              });
              h.push(i), g&&"text"===e&&i.set("visible", !0)
            }))
          })), Object.keys(r).forEach((function(t){
            var e=r[
              t
            ].get("group").clone();
            if(u.add(e), h.push(e), p)for(var i=e.get("children"), n=0;
            n<i.length;
            n++){
              var o=i[
                n
              ];
              "text"===o.get("type")&&o.set("visible", !0)
            }
          })), e.set("vShapes", h)
        }, e.prototype.updateParams=function(t){
          var e=this, i=t.r, n=t.trigger, r=t.minR, o=t.maxR, a=t.scaleRBy, s=t.showLabel, c=t.shouldShow;
          if(isNaN(t.r)||e.set("r", i), isNaN(o)||e.set("maxR", o), isNaN(r)||e.set("minR", r), "mousemove"!==n&&"click"!==n||e.set("trigger", n), "wheel"===a||"unset"===a){
            e.set("scaleRBy", a), e.get("delegate").remove(), e.get("delegate").destroy();
            var h=e.get("dPercentText");
            h&&(h.remove(), h.destroy())
          }
          "node"!==s&&"both"!==s||e.set("showNodeLabel", !0), "edge"!==s&&"both"!==s||e.set("showEdgeLabel", !0), c&&e.set("shouldShow", c)
        }, e.prototype.updateDelegate=function(t, e){
          var i=this, n=i.get("graph"), r=i.get("delegate");
          if(!r||r.destroyed){
            var o=n.get("group"), a=i.get("delegateStyle")||Vt;
            r=o.addShape("circle", {
              attrs:Ft({
                r:e, x:t.x, y:t.y
              }, a), name:"lens-shape", draggable:!0
            }), "drag"!==this.get("trigger")&&"wheel"===this.get("scaleRBy")&&r.on("mousewheel", (function(t){
              i.scaleRByWheel(t)
            }))
          }
          else r.attr({
            x:t.x, y:t.y, r:e
          });
          i.set("delegate", r)
        }, e.prototype.clear=function(){
          var t=this, e=t.get("vShapes");
          e&&e.forEach((function(t){
            t.remove(), t.destroy()
          })), e=[
          ], t.set("vShapes", e);
          var i=t.get("delegate");
          i&&!i.destroyed&&(i.remove(), i.destroy())
        }, e.prototype.destroy=function(){
          this.clear()
        }, e
      }
      (a);
      var Ut=function(){
        var t=function(e, i){
          return(t=Object.setPrototypeOf||{
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
          })(e, i)
        };
        return function(e, i){
          if("function"!=typeof i&&null!==i)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");
          function n(){
            this.constructor=e
          }
          t(e, i), e.prototype=null===i?Object.create(i):(n.prototype=i.prototype, new n)
        }
      }
      (), qt=_t.J0.pointLineDistance, Kt={
        stroke:"#FA8C16", lineWidth:1
      };
      const Jt=function(t){
        function e(e){
          return t.call(this, e)||this
        }
        return Ut(e, t), e.prototype.getDefaultCfgs=function(){
          return{
            line:Kt, itemAlignType:"center", tolerance:5, horizontalLines:{
            }, verticalLines:{
            }, alignLines:[
            ]
          }
        }, e.prototype.init=function(){
        }, e.prototype.getEvents=function(){
          return{
            "node:dragstart":"onDragStart", "node:drag":"onDrag", "node:dragend":"onDragEnd"
          }
        }, e.prototype.onDragStart=function(){
          this.initBoxLine()
        }, e.prototype.onDrag=function(t){
          var e=t.item, i=(e.get("delegateShape")||e).getBBox(), n=e.getModel(), r=n.x-i.x, o=n.y-i.y;
          this.show({
            x:i.minX+r, y:i.minY+o
          }, {
            width:i.width, height:i.height
          })
        }, e.prototype.onDragEnd=function(){
          this.destory()
        }, e.prototype.initBoxLine=function(){
          var t=this._cfgs, e=t.horizontalLines, i=t.verticalLines, n=t.itemAlignType;
          this.get("graph").getNodes().forEach((function(t){
            var r=t.getBBox(), o=t.get("id");
            !0===n||"horizontal"===n?(e[
              "".concat(o, "tltr")
            ]
            =[
              r.minX, r.minY, r.maxX, r.minY, t
            ], e[
              "".concat(o, "lcrc")
            ]
            =[
              r.minX, r.centerY, r.maxX, r.centerY, t
            ], e[
              "".concat(o, "blbr")
            ]
            =[
              r.minX, r.maxY, r.maxX, r.maxY, t
            ]):"center"===n&&(e[
              "".concat(o, "lcrc")
            ]
            =[
              r.minX, r.centerY, r.maxX, r.centerY, t
            ]), !0===n||"vertical"===n?(i[
              "".concat(o, "tlbl")
            ]
            =[
              r.minX, r.minY, r.minX, r.maxY, t
            ], i[
              "".concat(o, "tcbc")
            ]
            =[
              r.centerX, r.minY, r.centerX, r.maxY, t
            ], i[
              "".concat(o, "trbr")
            ]
            =[
              r.maxX, r.minY, r.maxX, r.maxY, t
            ]):"center"===n&&(i[
              "".concat(o, "tcbc")
            ]
            =[
              r.centerX, r.minY, r.centerX, r.maxY, t
            ])
          }))
        }, e.prototype.show=function(t, e){
          var i=(0, o.mix)({
          }, t);
          return this.itemAlign(t, e, i), t
        }, e.prototype.itemAlign=function(t, e, i){
          var n=this, r=this._cfgs, a=r.horizontalLines, s=r.verticalLines, c=r.tolerance, h={
            x:i.x+e.width/2, y:i.y
          }, l={
            x:i.x+e.width/2, y:i.y+e.height/2
          }, d={
            x:i.x+e.width/2, y:i.y+e.height
          }, g={
            x:i.x, y:i.y+e.height/2
          }, p={
            x:i.x+e.width, y:i.y+e.height/2
          }, u=[
          ], f=[
          ], v=null;
          if(this.clearAlignLine(), (0, o.each)(a, (function(t){
            t[
              4
            ].isVisible&&(u.push(n.getLineDisObject(t, h)), u.push(n.getLineDisObject(t, l)), u.push(n.getLineDisObject(t, d)))
          })), (0, o.each)(s, (function(t){
            t[
              4
            ].isVisible&&(f.push(n.getLineDisObject(t, g)), f.push(n.getLineDisObject(t, l)), f.push(n.getLineDisObject(t, p)))
          })), u.sort((function(t, e){
            return t.dis-e.dis
          })), f.sort((function(t, e){
            return t.dis-e.dis
          })), 0!==u.length&&u[
            0
          ].dis<c){
            t.y=u[
              0
            ].line[
              1
            ]
            -u[
              0
            ].point.y+i.y, v={
              type:"item", horizontals:[
                u[
                  0
                ]
              ]
            };
            for(var y=1;
            y<3;
            y++)u[
              0
            ].dis===u[
              y
            ].dis&&v.horizontals.push(u[
              y
            ])
          }
          if(0!==f.length&&f[
            0
          ].dis<c){
            t.x=f[
              0
            ].line[
              0
            ]
            -f[
              0
            ].point.x+i.x, v?v.verticals=[
              f[
                0
              ]
            ]
            :v={
              type:"item", verticals:[
                f[
                  0
                ]
              ]
            };
            for(y=1;
            y<3;
            y++)f[
              0
            ].dis===f[
              y
            ].dis&&v.verticals.push(f[
              y
            ])
          }
          v&&(v.bbox=e, this.addAlignLine(v))
        }, e.prototype.addAlignLine=function(t){
          var e=t.bbox, i=t.type, n=t.horizontals, r=t.verticals, a=this._cfgs, s=a.line, c=a.alignLines, h=this.get("graph").get("group");
          "item"===i&&(n&&(0, o.each)(n, (function(t){
            var i, n, r=t.line, a=t.point, l=(r[
              0
            ]
            +r[
              2
            ])/2;
            a.x<l?(i=a.x-e.width/2, n=Math.max(r[
              0
            ], r[
              2
            ])):(i=a.x+e.width/2, n=Math.min(r[
              0
            ], r[
              2
            ]));
            var d=(0, o.mix)({
              x1:i, y1:r[
                1
              ], x2:n, y2:r[
                1
              ]
            }, s), g=h.addShape("line", {
              attrs:d, capture:!1
            });
            c.push(g)
          })), r&&(0, o.each)(r, (function(t){
            var i, n, r=t.line, a=t.point, l=(r[
              1
            ]
            +r[
              3
            ])/2;
            a.y<l?(i=a.y-e.height/2, n=Math.max(r[
              1
            ], r[
              3
            ])):(i=a.y+e.height/2, n=Math.min(r[
              1
            ], r[
              3
            ]));
            var d=(0, o.mix)({
              x1:r[
                0
              ], y1:i, x2:r[
                0
              ], y2:n
            }, s), g=h.addShape("line", {
              attrs:d, capture:!1
            });
            c.push(g)
          })))
        }, e.prototype.getLineDisObject=function(t, e){
          return{
            line:t, point:e, dis:qt(t, e)
          }
        }, e.prototype.getContainer=function(){
          return this.get("container")
        }, e.prototype.clearAlignLine=function(){
          var t=this._cfgs.alignLines;
          (0, o.each)(t, (function(t){
            t.remove()
          })), t.length=0
        }, e.prototype.destory=function(){
          var t=this._cfgs, e=t.horizontalLines, i=t.verticalLines;
          this.get("graph").getNodes().forEach((function(t){
            var n=t.get("id");
            delete e[
              "".concat(n, "tltr")
            ], delete e[
              "".concat(n, "lcrc")
            ], delete e[
              "".concat(n, "blbr")
            ], delete i[
              "".concat(n, "tlbl")
            ], delete i[
              "".concat(n, "tcbc")
            ], delete i[
              "".concat(n, "trbr")
            ]
          })), this.clearAlignLine()
        }, e
      }
      (a);
      var Qt=function(){
        var t=function(e, i){
          return(t=Object.setPrototypeOf||{
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
          })(e, i)
        };
        return function(e, i){
          if("function"!=typeof i&&null!==i)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");
          function n(){
            this.constructor=e
          }
          t(e, i), e.prototype=null===i?Object.create(i):(n.prototype=i.prototype, new n)
        }
      }
      (), $t=function(){
        return($t=Object.assign||function(t){
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
      }, te=[
        "click", "mouseenter"
      ];
      const ee=function(t){
        function e(e){
          return t.call(this, e)||this
        }
        return Qt(e, t), e.prototype.getDefaultCfgs=function(){
          return{
            data:{
            }, position:"top", padding:8, margin:8, offsetX:0, offsetY:0, layout:"horizontal", flipPage:!1, containerStyle:{
            }, align:void 0, horiSep:8, vertiSep:8, filter:{
              enable:!1, trigger:"click"
            }
          }
        }, e.prototype.init=function(){
          this.formatArray("padding"), this.formatArray("margin");
          var t=this.get("filter")||{
          };
          t.multiple&&"mouseenter"===t.trigger&&this.set("multiple", !1);
          var e=this.get("align");
          if(!e){
            var i=this.get("position").split("-");
            i.includes("left")&&(e="left"), e=i.includes("right")?"right":"center", this.set("align", e)
          }
          var o=this.get("graph").get("container"), a=(0, n.A)("<div class='g6-legend-container' style=\"position: absolute;\"></div>");
          o.appendChild(a), this.set("container", a);
          var s=this.render();
          (0, r.A)(a, this.getContainerPos(s)), this.bindEvents()
        }, e.prototype.getContainerPos=function(t){
          void 0===t&&(t=[
            0, 0
          ]);
          var e=this.get("graph"), i=this.get("offsetX"), n=this.get("offsetY"), r=this.get("margin"), o=this.get("position").split("-"), a={
            top:0, right:1, bottom:2, left:3
          }, s={
            left:(e.getWidth()-t[
              0
            ])/2+0, top:(e.getHeight()-t[
              1
            ])/2+0
          };
          return o.forEach((function(i){
            var n=r[
              a[
                i
              ]
            ], o=i;
            switch(i){
              case"top":case"left":n+=0;
              break;
              case"bottom":n=e.getHeight()-t[
                1
              ]
              -n+0, o="top";
              break;
              default:n=e.getWidth()-t[
                0
              ]
              -n+0, o="left"
            }
            s[
              o
            ]
            =n
          })), s.top+=n+e.getContainer().offsetTop, s.left+=i+e.getContainer().offsetLeft, Object.keys(s).forEach((function(t){
            s[
              t
            ]
            ="".concat(s[
              t
            ], "px")
          })), s
        }, e.prototype.bindEvents=function(){
          var t=this, e=t.get("filter");
          if(e&&e.enable){
            var i=e.trigger||"click";
            te.includes(i)||(console.warn("Trigger for legend filterling must be 'click' or 'mouseenter', 'click' will take effect by default."), i="click");
            var n=t.get("legendCanvas");
            "mouseenter"===i?(n.on("node-container:mouseenter", (function(e){
              return t.filterData(e)
            })), n.on("node-container:mouseleave", (function(e){
              t.clearFilter(), t.clearActiveLegend()
            }))):(n.on("node-container:click", (function(e){
              return t.filterData(e)
            })), n.on("click", (function(e){
              e.target&&e.target.isCanvas&&e.target.isCanvas()&&(t.clearFilter(), t.clearActiveLegend())
            })))
          }
        }, e.prototype.changeData=function(t){
          this.set("data", t);
          var e=this.render();
          (0, r.A)(this.get("container"), this.getContainerPos(e))
        }, e.prototype.activateLegend=function(t){
          var e=this.get("filter");
          (null==e?void 0:e.multiple)||this.clearActiveLegend();
          var i=t.get("parent");
          i.get("active")?(i.set("active", !1), this.findLegendItemsByState("active").length&&i.set("inactive", !0)):(i.set("inactive", !1), i.set("active", !0)), this.findLegendItemsByState("active").length?this.findLegendItemsByState("active", "all", !1).forEach((function(t){
            t.set("inactive", !0)
          })):this.clearActiveLegend();
          var n=(null==e?void 0:e.legendStateStyles)||{
          }, r=(null==n?void 0:n.inactive)||{
            opacity:.5, "text-shape":{
              opacity:.5
            }
          }, o=r[
            "text-shape"
          ]
          ||{
          };
          this.findLegendItemsByState("inactive").forEach((function(t){
            var e=t.get("children"), i=e[
              0
            ], n=e[
              1
            ];
            i.attr($t($t({
            }, i.get("oriAttrs")), r)), n.attr($t($t({
            }, n.get("oriAttrs")), o))
          }));
          var a=(null==n?void 0:n.active)||{
            stroke:"#000", lineWidth:2, "text-shape":{
              fontWeight:"bold"
            }
          }, s=a[
            "text-shape"
          ]
          ||{
          };
          this.findLegendItemsByState("active").forEach((function(t){
            var e=t.get("children"), i=e[
              0
            ], n=e[
              1
            ];
            i.attr($t($t({
            }, i.get("oriAttrs")), a)), n.attr($t($t({
            }, n.get("oriAttrs")), s))
          }))
        }, e.prototype.findLegendItemsByState=function(t, e, i){
          void 0===e&&(e="all"), void 0===i&&(i=!0);
          var n=this.get("legendCanvas").find((function(t){
            return"root"===t.get("name")
          })), r=n.find((function(t){
            return"node-group"===t.get("name")
          })), o=n.find((function(t){
            return"edge-group"===t.get("name")
          }));
          return"node"===e?r.get("children").filter((function(e){
            return!!e.get(t)===i
          })):"edge"===e?o.get("children").filter((function(e){
            return!!e.get(t)===i
          })):r.get("children").filter((function(e){
            return!!e.get(t)===i
          })).concat(o.get("children").filter((function(e){
            return!!e.get(t)===i
          })))
        }, e.prototype.clearActiveLegend=function(){
          var t=this.get("legendCanvas").find((function(t){
            return"root"===t.get("name")
          }));
          [
            t.find((function(t){
              return"node-group"===t.get("name")
            })), t.find((function(t){
              return"edge-group"===t.get("name")
            }))
          ].forEach((function(t){
            t.get("children").forEach((function(t){
              t.set("active", !1), t.set("inactive", !1);
              var e=t.get("children"), i=e[
                0
              ], n=e[
                1
              ];
              i.attr(i.get("oriAttrs")), n.attr(n.get("oriAttrs"))
            }))
          }))
        }, e.prototype.filterData=function(t){
          var e=this.get("filter"), i=null==e?void 0:e.filterFunctions;
          if(e&&i){
            var n=this.get("legendCanvas"), r=this.get("graph"), o=e.graphActiveState||"active", a=e.graphInactiveState||"inactive", s=e.multiple;
            this.clearFilter(), s||this.clearActiveLegend(), this.activateLegend(t.target);
            var c=n.find((function(t){
              return"root"===t.get("name")
            })), h=c.find((function(t){
              return"node-group"===t.get("name")
            })), l=c.find((function(t){
              return"edge-group"===t.get("name")
            })), d=h.get("children").filter((function(t){
              return t.get("active")
            })), g=l.get("children").filter((function(t){
              return t.get("active")
            })), p=0, u=[
              "getNodes", "getEdges"
            ];
            u.forEach((function(t){
              r[
                t
              ]
              ().forEach((function(e){
                var n=!1;
                ("getNodes"===t?d:g).forEach((function(t){
                  var r=i[
                    t.get("id")
                  ];
                  n=n||r(e.getModel())
                })), n?(r.setItemState(e, a, !1), r.setItemState(e, o, !0), p++):(r.setItemState(e, o, !1), r.setItemState(e, a, !0))
              }))
            })), p||u.forEach((function(t){
              r[
                t
              ]
              ().forEach((function(t){
                r.clearItemStates(t, [
                  a
                ])
              }))
            }))
          }
        }, e.prototype.clearFilter=function(){
          var t=this.get("graph"), e=this.get("filter");
          if(e){
            var i=e.graphActiveState||"active", n=e.graphInactiveState||"inactive";
            t.getNodes().forEach((function(e){
              t.clearItemStates(e, [
                i, n
              ])
            })), t.getEdges().forEach((function(e){
              t.clearItemStates(e, [
                i, n
              ])
            }))
          }
        }, e.prototype.render=function(){
          var t=this;
          this.processData();
          var e=this.get("legendCanvas");
          e?e.clear():e=new f.Canvas({
            container:this.get("container"), width:200, height:200
          });
          var i=e.addGroup({
            name:"root"
          }), n=i.addGroup({
            name:"node-group"
          }), r=i.addGroup({
            name:"edge-group"
          });
          this.set("legendCanvas", e);
          var o=this.get("itemsData"), a=[
            n, r
          ];
          [
            "nodes", "edges"
          ].forEach((function(e, i){
            o[
              e
            ].forEach((function(n){
              var r, o, s=a[
                i
              ].addGroup({
                id:n.id, name:"node-container"
              }), c=n.type, h=t.getShapeSize(n), l=h.width, d=h.height, g=h.r, p=t.getStyle(e.substr(0, 4), n);
              switch(n.type){
                case"circle":o={
                  r:g, x:0, y:0
                };
                break;
                case"rect":o={
                  width:l, height:d, x:-l/2, y:-d/2
                };
                break;
                case"ellipse":o={
                  rx:l, ry:d, x:0, y:0
                }, c="ellipse";
                break;
                case"line":o={
                  x1:-l/2, y1:0, x2:l/2, y2:0
                }, c="line";
                break;
                case"quadratic":o={
                  path:[
                    [
                      "M", -l/2, 0
                    ], [
                      "Q", 0, l/2, l/2, 0
                    ]
                  ]
                }, c="path";
                break;
                case"cubic":o={
                  path:[
                    [
                      "M", -l/2, 0
                    ], [
                      "C", -l/6, l/2, l/6, -l/2, l/2, 0
                    ]
                  ]
                }, c="path";
                break;
                case"diamond":o={
                  path:[
                    [
                      "M", 0, -d
                    ], [
                      "L", l, 0
                    ], [
                      "L", 0, d
                    ], [
                      "L", -l, 0
                    ], [
                      "Z"
                    ]
                  ]
                }, c="path";
                break;
                case"triangle":o={
                  path:[
                    [
                      "M", -l, d
                    ], [
                      "L", 0, -d
                    ], [
                      "L", l, d
                    ], [
                      "Z"
                    ]
                  ]
                }, c="path";
                break;
                case"star":o={
                  path:_t.J0.getStarPath(3*g, 1.2*g)
                }, c="path";
                break;
                default:o={
                  r:g, x:0, y:0
                }
              }
              var u=s.addShape(c, {
                attrs:$t($t({
                }, o), p), name:"".concat(n.type, "-node-keyShape"), oriAttrs:$t({
                  opacity:1
                }, p)
              });
              if(n.label){
                var f=u.getBBox(), v=(null===(r=n.labelCfg)||void 0===r?void 0:r.style)||{
                }, y=$t({
                  textAlign:"begin", fontSize:12, textBaseline:"middle", fill:"#000", opacity:1, fontWeight:"normal"
                }, v);
                s.addShape("text", {
                  attrs:$t({
                    x:f.maxX+4, y:0, text:n.label
                  }, y), className:"legend-label", name:"".concat(n.type, "-node-text"), oriAttrs:y
                })
              }
            }))
          }));
          var s, c=this.get("padding"), h=i.find((function(t){
            return"title-container"===t.get("name")
          })), l={
            height:0, maxY:0, width:0
          };
          if(this.get("title")){
            h||(h=i.addGroup({
              name:"title-container"
            }));
            var d={
              fontSize:20, fontFamily:"Arial", fontWeight:300, textBaseline:"top", textAlign:"center", fill:"#000", x:0, y:c[
                0
              ]
            }, g=this.get("titleConfig")||{
            }, p=Object.assign(d, g.style||{
            });
            s=h.addShape("text", {
              attrs:$t({
                text:this.get("title")
              }, p)
            }), l=h.getCanvasBBox(), h.setMatrix([
              1, 0, 0, 0, 1, 0, g.offsetX, g.offsetY, 1
            ])
          }
          this.layoutItems();
          var u=i.getCanvasBBox(), v=n.getCanvasBBox(), y=v.minX<0?Math.abs(v.minX)+c[
            3
          ]
          :c[
            3
          ], m=l.maxY<v.minY?Math.abs(l.maxY-v.minY)+c[
            0
          ]
          :l.maxY+c[
            0
          ], x=[
            1, 0, 0, 0, 1, 0, y, m, 1
          ];
          n.setMatrix(x);
          var b=[
            (u=i.getCanvasBBox()).minX+u.width+c[
              1
            ], u.minY+u.height+c[
              2
            ]
          ];
          if(s){
            g=$t({
              position:"center", offsetX:0, offsetY:0
            }, this.get("titleConfig"));
            l=h.getCanvasBBox();
            var w=h.getMatrix()||[
              1, 0, 0, 0, 1, 0, 0, 0, 1
            ];
            "center"===g.position?w[
              6
            ]
            =b[
              0
            ]
            /2+g.offsetX:"right"===g.position?(w[
              6
            ]
            =b[
              0
            ]
            -c[
              3
            ]
            +g.offsetX, s.attr({
              textAlign:"right"
            })):(w[
              6
            ]
            =c[
              3
            ]
            +g.offsetX, s.attr({
              textAlign:"left"
            })), h.setMatrix(w), l=h.getCanvasBBox(), x=[
              1, 0, 0, 0, 1, 0, y=v.minX<0?Math.abs(v.minX)+c[
                3
              ]
              :c[
                3
              ], m=v.minY<l.maxY?Math.abs(l.maxY-v.minY)+c[
                0
              ]
              :l.maxY+c[
                0
              ], 1
            ], n.setMatrix(x);
            var k=[
              1, 0, 0, 0, 1, 0, y, m, 1
            ];
            "vertical"===this.get("layout")?k[
              6
            ]
            +=v.maxX+this.get("horiSep"):k[
              7
            ]
            +=v.maxY+this.get("vertiSep"), r.setMatrix(k)
          }
          else{
            v=n.getCanvasBBox();
            var S=[
              1, 0, 0, 0, 1, 0, 0, 0, 1
            ];
            "vertical"===this.get("layout")?S[
              6
            ]
            +=x[
              6
            ]
            +v.maxX+this.get("horiSep"):S[
              7
            ]
            +=x[
              7
            ]
            +v.maxY+this.get("vertiSep"), r.setMatrix(S)
          }
          u=i.getCanvasBBox(), v=n.getCanvasBBox(), x=n.getMatrix()||[
            1, 0, 0, 0, 1, 0, 0, 0, 1
          ];
          var C=r.getMatrix()||[
            1, 0, 0, 0, 1, 0, 0, 0, 1
          ], M=r.getCanvasBBox();
          b=[
            Math.max(v.width+x[
              6
            ], M.width+C[
              6
            ])+c[
              1
            ], Math.max(v.height+x[
              7
            ], M.height+C[
              7
            ])+c[
              2
            ]
          ], e.changeSize(b[
            0
          ], b[
            1
          ]);
          var E=this.get("containerStyle"), T=i.getMatrix()||[
            1, 0, 0, 0, 1, 0, 0, 0, 1
          ], B=_t.J0.invertMatrix({
            x:0, y:0
          }, T);
          return i.addShape("rect", {
            attrs:$t({
              x:B.x+(E.lineWidth||1), y:B.y+(E.lineWidth||1), width:b[
                0
              ]
              -2*(E.lineWidth||1), height:b[
                1
              ]
              -2*(E.lineWidth||1), fill:"#f00", stroke:"#000", lineWidth:1, opacity:.5
            }, E), name:"legend-back-rect", capture:!1
          }).toBack(), b
        }, e.prototype.layoutItems=function(){
          var t=this.get("legendCanvas"), e=this.get("horiSep"), i=this.get("vertiSep"), n=this.get("layout"), r=this.get("align"), o=[
            0, 0
          ], a=t.find((function(t){
            return"root"===t.get("name")
          })), s=a.find((function(t){
            return"node-group"===t.get("name")
          })), c=a.find((function(t){
            return"edge-group"===t.get("name")
          })), h={
            min:0, max:-1/0
          }, l=-1/0;
          s.get("children").forEach((function(t, r){
            0===r&&(h.min=o[
              0
            ]);
            var a=t.get("children")[
              0
            ], s=t.getCanvasBBox(), c=a.getBBox(), d=c.width, g=c.height, p=0, u=0, f=0;
            "vertical"===n?(u=o[
              1
            ], f=o[
              0
            ]
            +d/2, o[
              0
            ]
            =f+s.height+i, p=s.maxX+u+d/2):(u=o[
              0
            ]
            +d/2, f=o[
              1
            ], o[
              0
            ]
            =u+s.width+e, p=s.maxY+f+g/2), o[
              0
            ]
            >h.max&&(h.max=o[
              0
            ]), p>l&&(l=p), t.setMatrix([
              1, 0, 0, 0, 1, 0, u, f, 1
            ])
          }));
          var d=h.max-h.min, g={
            min:0, max:-1/0
          }, p=s.getCanvasBBox();
          o[
            0
          ]
          =0, o[
            1
          ]
          ="vertical"===n?p.maxX+e:p.maxY+i, c.get("children").forEach((function(t, r){
            0===r&&(g.min=o[
              0
            ]);
            var a=t.get("children")[
              0
            ], s=t.getCanvasBBox(), c=a.getBBox(), h=c.width, l=c.height, d=0, p=0;
            "vertical"===n?(d=o[
              1
            ], p=o[
              0
            ], o[
              0
            ]
            =p+s.height+i, t.setMatrix([
              1, 0, 0, 0, 1, 0, 0, p+l/2, 1
            ])):(d=o[
              0
            ], p=o[
              1
            ], o[
              0
            ]
            =d+s.width+e, t.setMatrix([
              1, 0, 0, 0, 1, 0, d+h/2, 0, 1
            ])), o[
              0
            ]
            >g.max&&(g.max=o[
              0
            ])
          }));
          var u=g.max-g.min;
          if(r&&""!==r&&"left"!==r){
            var f=d-u, v="center"===r?Math.abs(f)/2:Math.abs(f);
            (f<0?s:c).get("children").forEach((function(t){
              var e=t.getMatrix()||[
                1, 0, 0, 0, 1, 0, 0, 0, 1
              ];
              "vertical"===n?e[
                7
              ]
              +=v:e[
                6
              ]
              +=v, t.setMatrix(e)
            }))
          }
        }, e.prototype.processData=function(){
          var t=this.get("data"), e={
            nodes:[
            ], edges:[
            ]
          };
          t.nodes&&(t.nodes.sort((function(t, e){
            return t.order-e.order
          })), t.nodes.forEach((function(t){
            var i, n, r, a, s, c=t.size||[
              (null===(i=t.style)||void 0===i?void 0:i.width)||(null===(n=t.style)||void 0===n?void 0:n.r)||8, (null===(r=t.style)||void 0===r?void 0:r.height)||(null===(a=t.style)||void 0===a?void 0:a.r)||8
            ], h=(null===(s=t.labelCfg)||void 0===s?void 0:s.style)||{
            };
            e.nodes.push({
              id:t.id||(0, o.uniqueId)(), type:t.type||"circle", style:$t({
              }, t.style), order:t.order, label:t.label, itemType:"node", size:c, labelCfg:{
                position:"right", style:$t({
                  fontFamily:"Arial"
                }, h)
              }
            })
          }))), t.edges&&(t.edges.sort((function(t, e){
            return t.order-e.order
          })), t.edges.forEach((function(t){
            var i, n, r=t.type||"line";
            "cubic-horizontal"===t.type&&(r="cubic");
            var a=(null===(i=t.labelCfg)||void 0===i?void 0:i.style)||{
            }, s=t.size||[
              (null===(n=t.style)||void 0===n?void 0:n.width)||8, 1
            ];
            e.edges.push({
              id:t.id||(0, o.uniqueId)(), type:r, size:s, style:$t({
                lineWidth:(0, o.isArray)(s)?s[
                  1
                ]
                :1
              }, t.style), order:t.order, label:t.label, itemType:"edge", labelCfg:{
                position:"right", style:$t({
                  fontFamily:"Arial"
                }, a)
              }
            })
          }))), this.set("itemsData", e)
        }, e.prototype.getContainer=function(){
          return this.get("container")
        }, e.prototype.formatArray=function(t){
          var e=this.get(t);
          if((0, o.isNumber)(e))this.set(t, [
            e, e, e, e
          ]);
          else if((0, o.isArray)(e))switch(e.length){
            case 0:this.set(t, [
              0, 0, 0, 0
            ]);
            break;
            case 1:this.set(t, [
              e[
                0
              ], e[
                0
              ], e[
                0
              ], e[
                0
              ]
            ]);
            break;
            case 2:this.set(t, [
              e[
                0
              ], e[
                1
              ], e[
                0
              ], e[
                1
              ]
            ]);
            break;
            case 3:this.set(t, [
              e[
                0
              ], e[
                1
              ], e[
                2
              ], e[
                1
              ]
            ])
          }
          return this.get(t)
        }, e.prototype.getShapeSize=function(t){
          var e, i, n;
          return t.size&&((0, o.isArray)(t.size)?(e=t.size[
            0
          ], i=t.size[
            1
          ]
          ||t.size[
            0
          ], n=t.size[
            0
          ]
          /2):(0, o.isNumber)(t.size)&&(e=t.size, i=t.size, n=t.size/2)), t.style&&(t.style.width&&(e=t.style.width), t.style.height&&(i=t.style.height), t.style.r&&(n=t.style.r)), n||(n=5), e||(e=n), i||(i=n), {
            width:e, height:i, r:n
          }
        }, e.prototype.getStyle=function(t, e){
          return $t($t({
          }, "node"===t?{
            fill:"#ccc", lineWidth:0
          }
          :{
            stroke:"#000", lineWidth:1
          }), e.style||{
          })
        }, e.prototype.destroy=function(){
          var t=this.get("legendCanvas");
          null==t||t.destroy();
          var e=this.get("graph").get("container"), i=this.get("container");
          e.removeChild(i)
        }, e
      }
      (a);
      var ie=function(){
        var t=function(e, i){
          return(t=Object.setPrototypeOf||{
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
          })(e, i)
        };
        return function(e, i){
          if("function"!=typeof i&&null!==i)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");
          function n(){
            this.constructor=e
          }
          t(e, i), e.prototype=null===i?Object.create(i):(n.prototype=i.prototype, new n)
        }
      }
      (), ne=function(){
        return(ne=Object.assign||function(t){
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
      }, re=function(t, e){
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
      };
      "undefined"!=typeof document&&g()("\n  .g6-annotation-container {\n    background-color: rgba(255, 255, 255, 0.3);\n    padding: 8px;\n  }\n  .g6-annotation-wrapper {\n    background-color: #fff;\n    box-shadow: 0 0 8px rgba(0, 0, 0, 0.85);\n  }\n  .g6-annotation-header-wapper {\n    height: fit-content;\n    width: 100%;\n    background-color: #5B8FF9;\n    display: inline-flex;\n    cursor: move;\n  }\n  .g6-annotation-title {\n    margin: 4px 40px 4px 8px;\n    cursor: text;\n    min-width: 32px;\n  }\n  .g6-annotation-collapse {\n    margin: 4px;\n    cursor: pointer;\n  }\n  .g6-annotation-expand {\n    margin: 4px;\n    cursor: pointer;\n  }\n  .g6-annotation-close {\n    margin: 4px 8px 4px 0;\n    cursor: pointer;\n  }\n  .g6-annotation-content {\n    padding: 8px;\n    width: fit-content;\n    cursor: text;\n    word-break: break-all;\n    min-width: 32px;\n  }\n  .g6-annotation-title-input-wrapper {\n    margin: 4px 40px 4px 8px;\n  }\n  .g6-annotation-content-input {\n    height: 100%;\n    word-break: break-all;\n  }\n  .g6-annotation-content-input-wrapper {\n    margin: 8px;\n    height: 100%;\n  }\n");
      var oe="canvas-annotation", ae=function(t){
        function e(e){
          return t.call(this, e)||this
        }
        return ie(e, t), e.prototype.getDefaultCfgs=function(){
          return{
            trigger:"click", editable:!0, itemHighlightState:"highlight", linkHighlightStyle:{
              shadowColor:"#5B8FF9", shadowBlur:10
            }, cardCfg:{
              minHeight:60, width:"fit-content", height:"fit-content", collapseType:"minimize", closeType:"hide", borderRadius:5, maxTitleLength:20
            }
          }
        }, e.prototype.getEvents=function(){
          var t={
            viewportchange:"updateLinks", afterlayout:"updateLinks", aftergraphrefreshposition:"updateLinks", afterupdateitem:"updateLink", afterchangedata:"onGraphDataChange", afteritemvisibilitychange:"onGraphItemVisibilityChange"
          };
          switch(this.get("trigger")){
            case"click":t=ne(ne({
            }, t), {
              "node:click":"showAnnotation", "edge:click":"showAnnotation"
            })
          }
          return t
        }, e.prototype.getDOMContent=function(t){
          if(!this.destroyed){
            var e=t.collapsed, i=t.maxWidth, n=t.title, r=void 0===n?"":n, o=t.content, a=void 0===o?"":o, s=t.borderRadius, c=void 0===s?5:s, h=e?"<p class='g6-annotation-expand'>+</p>":"<p class='g6-annotation-collapse'>-</p>", l=e?"":" <p class='g6-annotation-content'>".concat(a, "</p>"), d=e?"".concat(c, "px"):"".concat(c, "px ").concat(c, "px 0 0");
            return'<div class="g6-annotation-wrapper" style="border-radius: '.concat(c, "px; max-width: ").concat(i, 'px">\n        <div\n          class="g6-annotation-header-wapper"\n          style="border-radius: ').concat(d, ";\"\n        >\n          <h4 class='g6-annotation-title'>").concat(r, "</h4>\n          ").concat(h, "\n          ").concat("<p class='g6-annotation-close'>x</p>", "\n        </div>\n        ").concat(l, "\n      </div>")
          }
        }, e.prototype.init=function(){
          var t=this;
          if(!t.destroyed){
            var e=t.get("graph").getContainer(), i=t.get("container");
            this.get("containerCfg")?(i=this.createContainer(), e.appendChild(i)):i=e, this.set("container", i);
            var n=e.getBoundingClientRect(), a=new f.Canvas({
              container:e, width:n.right-n.left, height:n.bottom-n.top
            });
            (0, r.A)(a.get("el"), {
              position:"absolute", top:0, left:0, pointerEvents:"none"
            }), window.addEventListener("resize", (0, o.debounce)((function(){
              return t.resizeCanvas(t)
            }), 100));
            var s=a.addGroup({
              id:"annotation-link-group"
            });
            t.set("linkGroup", s), t.set("canvas", a), t.get("getTitle")||t.set("getTitle", (function(t){
              var e, i=(null===(e=null==t?void 0:t.getModel)||void 0===e?void 0:e.call(t))||{
              }, n=i.label, r=i.id;
              return n||r||"-"
            })), t.get("getContent")||t.set("getContent", (function(t){
              var e, i;
              if(!t)return"-";
              var n=(null===(e=t.getModel)||void 0===e?void 0:e.call(t))||{
              }, r=n.label, o=n.id, a=null===(i=t.getType)||void 0===i?void 0:i.call(t), s=a?"".concat(a, ": "):"";
              return"".concat(s).concat(r||o||"")
            }));
            var c=t.get("defaultData");
            c&&this.readData(c)
          }
        }, e.prototype.createContainer=function(){
          var t=this;
          if(!this.destroyed){
            var e=this.get("containerCfg"), i=this.get("graph"), a=i.getContainer(), s=a.getBoundingClientRect(), c=s.left, h=s.right, l=s.top, d=s.bottom-l, g=h-c, p=e.position, u=void 0===p?"top":p, f=e.offsetX, v=void 0===f?0:f, y=e.offsetY, m=void 0===y?0:y, x=re(e, [
              "position", "offsetX", "offsetY"
            ]), b=e.height, w=void 0===b?"fit-content":b, k=e.width, S=void 0===k?i.getWidth():k;
            "100%"===w&&(w=d), "100%"===S&&(S=g);
            var C="unset", M="unset", E={
            };
            switch(u){
              case"right":C="".concat(d, "px"), (E={
                top:0, right:0
              }).right+=c+v, E.top+=l+m;
              break;
              case"bottom":M="".concat(g, "px"), (E={
                bottom:0, left:0
              }).left+=c+v, E.bottom+=l+m;
              break;
              case"top":M="".concat(g, "px");
              case"left":C="".concat(d, "px");
              default:(E={
                top:0, left:0
              }).left+=c+v, E.top+=l+m
            }
            Object.keys(E).forEach((function(t){
              E[
                t
              ]
              ="".concat(E[
                t
              ], "px")
            }));
            var T=(0, n.A)("<div class='".concat(e.className, " g6-annotation-container'></div>"));
            return(0, r.A)(T, ne(ne({
              position:"absolute", display:"top"===u||"bottom"===u?"inline-flex":"unset", width:(0, o.isNumber)(S)?"".concat(S, "px"):S, height:(0, o.isNumber)(w)?"".concat(w, "px"):w, maxHeight:C, maxWidth:M, overflow:"scroll"
            }, E), x)), a.appendChild(T), T.addEventListener("scroll", (function(e){
              t.updateLinks()
            })), T
          }
        }, e.prototype.resizeCanvas=function(t){
          clearTimeout(t.resizeTimer), t.resizeTimer=setTimeout((function(){
            if(t&&!t.destroyed){
              var e=t.get("container").getBoundingClientRect(), i=e.right-e.left, n=e.bottom-e.top;
              t.get("canvas").changeSize(i, n), t.updateOutsideCards(t)
            }
          }), 250)
        }, e.prototype.updateOutsideCards=function(t){
          var e=t||this, i=e.get("cardInfoMap")||{
          }, n=e.get("graph"), o=n.getPointByCanvas(0, 0), a=n.getPointByCanvas(n.getWidth(), n.getHeight()), s=n.getClientByPoint(o.x, o.y), c=s.x, h=s.y, l=n.getClientByPoint(a.x, a.y), d=l.x, g=l.y;
          Object.values(i).forEach((function(t){
            var e=t.card;
            if(e){
              var i=e.style, n=ce(i.left), o=ce(i.top), a=e.getBoundingClientRect(), s=a.width, l=a.height, p=n, u=o;
              n+s>d-c&&(p=d-c-s), n<0&&(p=0), o+l>g-h&&(u=g-h-l), o<0&&(u=0), (0, r.A)(e, {
                left:"".concat(p, "px"), top:"".concat(u, "px")
              })
            }
          })), e.updateLinks()
        }, e.prototype.showAnnotation=function(t){
          if(!this.destroyed){
            var e=t.item;
            this.toggleAnnotation(e)
          }
        }, e.prototype.hideCards=function(){
          var t=this;
          if(!t.destroyed){
            var e=t.get("cardInfoMap")||{
            };
            Object.keys(e).forEach((function(e){
              t.hideCard(e)
            }))
          }
        }, e.prototype.toggleAnnotation=function(t, e){
          var i, a;
          void 0===e&&(e={
          });
          var s=this;
          if(!s.destroyed){
            var c=s.get("cardInfoMap")||{
            }, h=s.get("graph"), l=s.get("container"), d=s.get("containerCfg"), g=Object.assign({
            }, s.get("cardCfg")||{
            }, e), p=g.minHeight, u=g.minWidth, f=g.width, v=g.height, y=g.collapsed, m=void 0!==y&&y, x=g.x, b=g.y, w=g.title, k=g.content, S=g.maxTitleLength, C=g.defaultBegin, M=re(g, [
              "minHeight", "minWidth", "width", "height", "collapsed", "x", "y", "title", "content", "maxTitleLength", "defaultBegin"
            ]), E=s.get("linkGroup"), T=this.get("rows")||[
              [
              ]
            ], B=null===(i=t.isCanvas)||void 0===i?void 0:i.call(t), L=B?oe:t.getID(), A=c[
              L
            ]
            ||{
            }, I=A.card, O=A.link, P=A.x, D=A.y, N=A.title, G=A.content, H=this.get("getTitle"), _=this.get("getContent"), R=this.get("getContentPlaceholder")||function(){
              return""
            }, j=this.get("getTitlePlaceHolder")||function(){
              return""
            }, Y=R(t), z=j(t), X=(0, n.A)(this.getDOMContent(ne({
              itemId:L, collapsed:m, title:(null===(a=N||w||(null==H?void 0:H(t)))||void 0===a?void 0:a.substr(0, S))||z, content:G||k||(null==_?void 0:_(t))||Y
            }, M))), F=(0, o.isNumber)(p)?"".concat(p, "px"):p;
            (0, r.A)(X, {
              minHeight:m?"unset":F, minWidth:(0, o.isNumber)(u)?"".concat(u, "px"):u, height:v, width:f
            });
            var W, V=!!I;
            if(V?(null==O||O.remove(!0), l.replaceChild(X, I)):l.appendChild(X), !d){
              if(W=l.getBoundingClientRect()||{
              }, void 0!==x&&void 0!==b)P=x, D=b;
              else if(!V&&!B){
                var Z=W.top, U=C||{
                }, q=U.left, K=U.right, J=void 0===K?16:K, Q=U.top, $=void 0===Q?8:Q, tt=U.bottom, et=J, it=$;
                isNaN(q)||(et=l.scrollWidth-q), isNaN(tt)||(it=l.scrollHeight-tt);
                var nt=(0, o.isNumber)(u)?u:100;
                P=l.scrollWidth-X.scrollWidth-(T.length-1)*nt-et;
                var rt=T[
                  T.length-1
                ], ot=(rt[
                  rt.length-1
                ]
                ||{
                }).bbox;
                D=(null==ot?void 0:ot.bottom)-Z||it
              }
              (0, r.A)(X, {
                position:"absolute", left:"".concat(P, "px"), top:"".concat(D, "px"), cusor:d?"unset":"move"
              })
            }
            this.bindListener(X, L);
            var at=X.getBoundingClientRect();
            if(!B){
              var st=se(t, at, h, this.get("canvas")), ct=this.get("linkStyle");
              O=E.addShape("path", {
                attrs:ne({
                  lineWidth:1, lineDash:[
                    5, 5
                  ], stroke:"#ccc", path:st
                }, ct)
              })
            }
            if(c[
              L
            ]
            =ne(ne({
            }, c[
              L
            ]
            ||{
            }), {
              id:L, collapsed:m, card:X, link:O, x:P, y:D, cardBBox:at, content:G||k, title:N||w, contentPlaceholder:Y, titlePlaceholder:z, isCanvas:B
            }), s.set("cardInfoMap", c), d)this.updateCardPositionsInConatainer(), this.updateLinks();
            else{
              var ht=!isNaN(x)&&!isNaN(b);
              if(!V&&!B&&!ht){
                var lt=W.bottom, dt=void 0===lt?0:lt;
                Z=W.top;
                T[
                  T.length-1
                ].push({
                  id:L, bbox:at
                }), at.top>dt-Z-at.height-16&&T.push([
                ]), this.set("rows", T)
              }
            }
            this.updateCardSize(L);
            var gt=this.get("onAnnotationChange");
            null==gt||gt(c[
              L
            ], V?"update":"create")
          }
        }, e.prototype.updateCardPositionsInConatainer=function(){
          if(!this.destroyed){
            var t=this.get("cardInfoMap");
            if(t){
              var e=this.get("container"), i=this.get("containerCfg").position, n=e.getBoundingClientRect().width, o=getComputedStyle(e), a=ce(o.paddingLeft)+ce(o.paddingRight);
              n-=a, Object.values(t).forEach((function(t){
                var e=t.card, o=e.getBoundingClientRect().width;
                switch(i){
                  case"right":(0, r.A)(e, {
                    marginLeft:n?"".concat(n-o, "px"):"0px"
                  });
                  break;
                  case"top":case"bottom":(0, r.A)(e, {
                    marginLeft:"8px"
                  })
                }
              }))
            }
          }
        }, e.prototype.handleExpandCollapseCard=function(t){
          if(!this.destroyed){
            var e=this.get("graph"), i=this.get("cardInfoMap");
            if(i){
              var n=i[
                t
              ].collapsed, r=e.findById(t);
              if(r)"hide"!==this.get("cardCfg").collapseType||n?this.toggleAnnotation(r, {
                collapsed:!n
              }):this.hideCard(t), i[
                t
              ]
              =ne(ne({
              }, i[
                t
              ]), {
                collapsed:!n
              })
            }
          }
        }, e.prototype.hideCard=function(t){
          if(!this.destroyed){
            var e=this.get("cardInfoMap");
            if(e&&e[
              t
            ]){
              var i=e[
                t
              ], n=i.card, o=i.link;
              (0, r.A)(n, {
                display:"none"
              }), null==o||o.hide(), this.get("onAnnotationChange")(e[
                t
              ], "hide")
            }
          }
        }, e.prototype.removeCard=function(t){
          if(!this.destroyed){
            var e=this.get("cardInfoMap");
            if(e){
              var i=e[
                t
              ], n=i.card, r=i.link;
              this.get("container").removeChild(n), null==r||r.remove(!0), delete e[
                t
              ], this.get("onAnnotationChange")(i, "remove")
            }
          }
        }, e.prototype.bindListener=function(t, e){
          var i=this;
          if(!this.destroyed){
            t.addEventListener("mousemove", (function(t){
              var n;
              if("g6-annotation-collapse"===t.target.className?n="collapse":"g6-annotation-expand"===t.target.className?n="expand":"g6-annotation-close"===t.target.className&&(n="close"), n){
                var r=i.get("cardCfg").onMouseEnterIcon;
                (void 0===r?function(){
                }
                :r)(t, e, n)
              }
            })), t.addEventListener("mouseout", (function(t){
              var n;
              if("g6-annotation-collapse"===t.target.className?n="collapse":"g6-annotation-expand"===t.target.className?n="expand":"g6-annotation-close"===t.target.className&&(n="close"), n){
                var r=i.get("cardCfg").onMouseLeaveIcon;
                (void 0===r?function(){
                }
                :r)(t, e, n)
              }
            })), t.addEventListener("mouseenter", (function(t){
              var n=i.get("cardInfoMap");
              if(n){
                var r=i.get("graph"), o=r.findById(e);
                if(o){
                  var a=i.get("itemHighlightState");
                  r.setItemState(o, a, !0)
                }
                var s=n[
                  e
                ].link;
                if(s){
                  var c=i.get("linkHighlightStyle")||{
                  };
                  s.attr(c)
                }
              }
            })), t.addEventListener("mouseleave", (function(t){
              var n=i.get("cardInfoMap");
              if(n){
                var r=i.get("graph"), o=r.findById(e);
                if(o){
                  var a=i.get("itemHighlightState");
                  r.setItemState(o, a, !1)
                }
                var s=n[
                  e
                ].link;
                if(s){
                  var c=i.get("linkHighlightStyle")||{
                  };
                  Object.keys(c).forEach((function(t){
                    s.attr(t, void 0), s.attr(t, void 0)
                  }));
                  var h=i.get("linkStyle");
                  s.attr(h)
                }
              }
            })), t.addEventListener("click", (function(t){
              var n=(i.get("cardCfg")||{
              }).onClickIcon;
              if("g6-annotation-collapse"===t.target.className||"g6-annotation-expand"===t.target.className)"hide"===i.get("cardCfg").collapseType?i.hideCard(e):i.handleExpandCollapseCard(e), null==n||n(t, e, "g6-annotation-collapse"===t.target.className?"collapse":"expand");
              else if("g6-annotation-close"===t.target.className){
                "remove"===i.get("cardCfg").closeType?i.removeCard(e):i.hideCard(e), null==n||n(t, e, "close")
              }
            })), this.get("editable")&&t.addEventListener("dblclick", (function(t){
              var r=i.get("cardInfoMap"), o=(i.get("cardCfg")||{
              }).maxTitleLength, a=void 0===o?20:o;
              if(r){
                var s=t.target, c=s.className;
                if("g6-annotation-title"===c||"g6-annotation-content"===c){
                  var h="g6-annotation-title"===c?s.getBoundingClientRect():s.parentNode.getBoundingClientRect(), l=h.width, d=h.height, g=getComputedStyle(s), p="g6-annotation-title"===c?"input":"textarea", u=(0, n.A)("<".concat(p, ' class="').concat(c, '-input" type="textarea" style="width:').concat(l, "px; height: ").concat(d, 'px; min-width: 16px;"/>')), f=(0, n.A)('<div class="'.concat(c, '-input-wrapper" style="width: ').concat(l, "px; height: ").concat(d, "px; min-width: 16px; margin-right: ").concat(g.marginRight, '" />'));
                  f.appendChild(u), s.parentNode.replaceChild(f, s);
                  var v=r[
                    e
                  ], y=v.contentPlaceholder, m=v.titlePlaceholder, x=v.content, b=v.title, w=x;
                  "g6-annotation-title"===c?(u.name="title", u.maxLength=a, w=b):u.name="content", w?(u.innerHTML=s.innerHTML, u.value=s.innerHTML):u.placeholder="g6-annotation-title"===c?m:y, u.focus(), u.addEventListener("blur", (function(t){
                    u.value&&(s.innerHTML=u.value, v[
                      u.name||"title"
                    ]
                    =u.value), f.parentNode.replaceChild(s, f), i.updateCardSize(e);
                    var n=i.get("onAnnotationChange");
                    null==n||n(v, "update")
                  }))
                }
              }
            }));
            var o=[
              "g6-annotation-title", "g6-annotation-content", "g6-annotation-title-input", "g6-annotation-content-input"
            ];
            t.draggable=!0, t.addEventListener("dragstart", (function(e){
              var n=e.target.className;
              if(!o.includes(n)){
                var r=t.style;
                i.set("dragging", {
                  card:t, x:e.clientX, y:e.clientY, left:ce(r.left), top:ce(r.top)
                })
              }
            })), t.addEventListener("drag", (function(t){
              t.preventDefault();
              var n=i.get("cardInfoMap");
              if(n){
                var o=t.clientX, a=t.clientY, s=i.get("dragging");
                if(!isNaN(o)&&!isNaN(a)&&s){
                  var c=s.x, h=s.y, l=s.left, d=s.top, g=s.card, p=o-c, u=a-h;
                  l+=p, d+=u;
                  var f=i.get("graph"), v=f.getPointByCanvas(0, 0), y=f.getPointByCanvas(f.getWidth(), f.getHeight()), m=f.getClientByPoint(v.x, v.y), x=m.x, b=m.y, w=f.getClientByPoint(y.x, y.y), k=w.x, S=w.y, C=g.getBoundingClientRect();
                  (l>k-x-(C.right-C.left)&&p>0||l<0&&p<0)&&(l-=p), (d>S-b-(C.bottom-C.top)&&u>0||d<0&&u<0)&&(d-=u), (0, r.A)(g, {
                    left:"".concat(l, "px"), top:"".concat(d, "px"), visibility:"hidden"
                  }), c=o, h=a;
                  var M=(n[
                    e
                  ]
                  ||{
                  }).link;
                  if(M){
                    var E=f.findById(e);
                    M.attr("path", se(E, C, f, i.get("canvas")))
                  }
                  i.set("dragging", {
                    x:c, y:h, left:l, top:d, card:g
                  })
                }
              }
            }));
            t.addEventListener("dragend", (function(t){
              var n=i.get("cardInfoMap");
              if(n){
                var o=i.get("dragging");
                if(o){
                  var a=o.left, s=o.top, c=o.card;
                  n[
                    e
                  ].x=a, n[
                    e
                  ].y=s, (0, r.A)(c, {
                    visibility:"visible"
                  }), i.set("dragging", !1);
                  var h=i.get("rows");
                  null==h||h.forEach((function(t){
                    for(var i=t.length-1;
                    i>=0;
                    i--)t[
                      i
                    ].id===e&&t.splice(i, 1)
                  }));
                  var l=i.get("onAnnotationChange");
                  null==l||l(n[
                    e
                  ], "update")
                }
              }
            }))
          }
        }, e.prototype.updateCardSize=function(t){
          var e=this.get("cardInfoMap");
          if(e){
            var i=e[
              t
            ].card, n=i.getBoundingClientRect().width, o=i.getElementsByClassName("g6-annotation-title")[
              0
            ];
            if(o){
              var a=getComputedStyle(o), s=ce(a.marginLeft), c=o.getBoundingClientRect().width;
              (0, r.A)(o, {
                marginRight:"".concat(n-s-24-16-c, "px")
              })
            }
          }
        }, e.prototype.updateLink=function(t){
          var e=t.item;
          if(e){
            var i=this.get("cardInfoMap");
            if(i){
              var n=this.get("canvas"), r=this.get("graph"), o=i[
                e.getID()
              ]
              ||{
              }, a=o.link, s=o.card;
              if(a){
                var c=se(e, s.getBoundingClientRect(), r, n);
                a.attr("path", c)
              }
            }
          }
        }, e.prototype.updateLinks=function(){
          var t=this;
          if(!this.destroyed){
            var e=this.get("cardInfoMap");
            if(e){
              var i=this.get("graph");
              Object.values(e).forEach((function(e){
                var n=e.id, r=i.findById(n);
                t.updateLink({
                  item:r
                })
              }))
            }
          }
        }, e.prototype.onGraphDataChange=function(){
          var t=this, e=this.get("cardInfoMap");
          if(e){
            var i=this.get("graph");
            Object.values(e).forEach((function(e){
              var n=e.id, r=e.card, o=e.isCanvas;
              if(r&&!o&&"none"!==r.style.display){
                var a=i.findById(n);
                a&&a.isVisible()?t.toggleAnnotation(a):t.hideCard(n)
              }
            }))
          }
        }, e.prototype.onGraphItemVisibilityChange=function(t){
          var e=t.item, i=t.visible;
          if(e&&!e.destroyed){
            var n=this.get("cardInfoMap");
            if(n){
              var r=e.getID();
              n[
                r
              ]
              &&(i||this.hideCard(r))
            }
          }
        }, e.prototype.saveData=function(t){
          void 0===t&&(t=!1);
          var e=this.get("cardInfoMap");
          if(e){
            var i=this.get("graph"), n=this.get("getTitle"), r=this.get("getContent"), o=[
            ];
            return Object.values(e).forEach((function(e){
              var a=e.title, s=e.content, c=e.x, h=e.y, l=e.id, d=e.collapsed, g=e.card;
              if(!g||"none"!==g.style.display||t){
                var p=i.findById(l)||i.get("canvas");
                o.push({
                  id:l, x:c, y:h, collapsed:d, title:a||(null==n?void 0:n(p)), content:s||(null==r?void 0:r(p)), visible:g&&"none"!==g.style.display
                })
              }
            })), o
          }
        }, e.prototype.readData=function(t){
          var e=this, i=this.get("graph");
          t.forEach((function(t){
            var n=t.id, r=t.x, o=t.y, a=t.title, s=t.content, c=t.collapsed, h=t.visible, l=i.findById(n);
            if(l||n!==oe||(l=i.get("canvas")), !l){
              var d=e.get("cardInfoMap")||{
              };
              return d[
                n
              ]
              =t, void e.set("cardInfoMap", d)
            }
            e.toggleAnnotation(l, {
              x:r, y:o, title:a, content:s, collapsed:c
            }), h||e.hideCard(n)
          }))
        }, e.prototype.clear=function(){
          var t=this.get("cardInfoMap");
          if(t){
            var e=this.get("container");
            Object.values(t).forEach((function(t){
              var i=t.card, n=t.link;
              e.removeChild(i), null==n||n.remove(!0)
            })), this.set("cardInfoMap", {
            })
          }
        }, e.prototype.destroy=function(){
          var t;
          this.clear(), null===(t=this.get("canvas"))||void 0===t||t.destroy();
          var e=this.get("graph");
          e&&!e.destroyed&&(this.get("containerCfg")&&e.getContainer().removeChild(this.get("container")), this.destroyed=!0)
        }, e
      }
      (a);
      var se=function(t, e, i, n){
        var r, o;
        if("edge"===t.getType())o=[
          t.getKeyShape().getPoint(.5)
        ];
        else{
          var a=null===(r=t.getKeyShape)||void 0===r?void 0:r.call(t).getBBox(), s=a.minX, c=a.minY, h=a.maxX, l=a.maxY, d=t.getModel(), g=d.x, p=d.y;
          o={
            left:{
              x:s+=g, y:((c+=p)+(l+=p))/2
            }, right:{
              x:h+=g, y:(c+l)/2
            }, top:{
              x:(s+h)/2, y:c
            }, bottom:{
              x:(s+h)/2, y:l
            }
          }
        }
        Object.keys(o).forEach((function(t){
          var e=o[
            t
          ], r=e.x, a=e.y, s=i.getClientByPoint(r, a);
          o[
            t
          ]
          =n.getPointByClient(s.x, s.y)
        }));
        var u=e.top, f=void 0===u?0:u, v=e.left, y=void 0===v?0:v, m=e.right, x=void 0===m?0:m, b=e.bottom, w=void 0===b?0:b, k={
          left:n.getPointByClient(y, (f+w)/2), right:n.getPointByClient(x, (f+w)/2), top:n.getPointByClient((y+x)/2, f), bottom:n.getPointByClient((y+x)/2, w)
        };
        return function(t, e){
          var i, n, r=1/0;
          Object.keys(t).forEach((function(o){
            var a=t[
              o
            ];
            Object.keys(e).forEach((function(t){
              var o=e[
                t
              ], s=a.x-o.x, c=a.y-o.y, h=s*s+c*c;
              r>h&&(r=h, i=a, n=o)
            }))
          }));
          var o=_t.J0.getControlPoint(i, n, .5, 20);
          return[
            [
              "M", i.x, i.y
            ], [
              "Q", o.x, o.y, n.x, n.y
            ]
          ]
        }
        (o, k)
      }, ce=function(t){
        return Number(t.replace(/\s+|px/gi, ""))||0
      };
      const he={
        PluginBase:a, Menu:u, Grid:l, Minimap:k, Bundling:E, ToolBar:O, Tooltip:D, Fisheye:A, TimeBar:Ht, ImageMinimap:zt, EdgeFilterLens:Zt, SnapLine:Jt, Legend:ee, Annotation:ae
      }
    }
  }
]);
